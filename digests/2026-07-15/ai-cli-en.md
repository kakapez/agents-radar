# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-14 22:56 UTC | Tools covered: 9

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

# 2026-07-15 AI CLI Tools Cross-Tool Comparison Report
---
## 1. Ecosystem Overview
As of mid-2026, the global AI coding CLI/agent tool ecosystem has entered a mature, production-focused phase, with 8 tracked leading tools spanning closed vendor offerings, open modular frameworks, and regional niche distributions. The vast majority of active projects are prioritizing stability over experimental new feature launches in this cycle, with dedicated engineering resources allocated to resolving long-standing cross-platform pain points, aligning on Model Context Protocol (MCP) interoperability, hardening enterprise security guardrails, and unlocking full utilization of latest-generation 2M+ context models. After a wave of widely reported Windows-specific regressions earlier this quarter, every major development team is now actively triaging platform parity gaps that previously left Windows users as second-class citizens. This 24-hour snapshot captures real-world activity across the full spectrum of user bases, from individual hobbyists to regulated enterprise engineering teams.

## 2. Activity Comparison
| Tool Name | Active Hot Issues (24h window) | Updated/Merged PRs (24h window) | 24h Release Status |
|---|---|---|---|
| Claude Code | 10 | 8 | 2 stable v2.1.x public releases |
| OpenAI Codex | 10 | 10 | 5 Rust SDK pre-releases + 1 stable patch |
| Gemini CLI | 10 | 7 | 1 v0.52.0 nightly pre-release build |
| GitHub Copilot CLI | 10 | 0 | 1 stable v1.0.71-1 public release |
| Kimi Code CLI | 2 | 3 | No public production releases |
| OpenCode | 10 | 10 | 2 stable v1.18.x desktop public releases |
| Pi | 10 | 10 | 1 stable v0.80.7 public release (with breaking change) |
| Qwen Code | 10 | 10 | 1 stable v0.19.10 + 1 SDK release + 1 nightly |
| DeepSeek TUI (CodeWhale) | 10 | 10 | No public stable release (full v0.8.68 release candidate finalized) |

## 3. Shared Feature Directions
These high-priority requirements appear across multiple independent tool communities, representing universal user demand:
1. **Full Cross-Platform Parity**: Reported by Claude Code, OpenAI Codex, Qwen Code, Kimi Code, and DeepSeek TUI. Users are demanding resolution of pervasive Windows-specific regressions including broken path formatting, unhandled non-ASCII user directory support, failing LSP integrations, and broken system auth flows that have no equivalent on macOS/Linux.
2. **MCP Extensibility Hardening**: 7 of 8 tracked tools (all except Kimi Code) are actively working on MCP compatibility, with unified user requests for stable MCP OAuth authentication, reduced multi-tool MCP startup latency, no race conditions during parallel MCP calls, and full sync of MCP configurations across desktop, CLI and IDE surfaces.
3. **Predictable Subagent Workflow Reliability**: High user demand shared by Claude Code, OpenAI Codex, and Gemini CLI, requiring no silent dropping of explicit subagent model/permission overrides, full user-accessible subagent execution traces, and elimination of misreporting of failed, interrupted subagent tasks as successful.
4. **Large Context Optimization**: Prioritized by Kimi Code, OpenCode, Qwen Code, and DeepSeek TUI. Users are requesting features to maximize the value of new high-context models including dynamic auto-calculation of maximum completion budgets, bounded shell output to avoid context bloat, one-click context compaction, and native support for unstructured large inputs like PDFs.
5. **Enterprise Observability & Security**: Shared by GitHub Copilot CLI, Pi, and Qwen Code, with active feature requests for mTLS support, structured audit logging, auto secret redaction, and enforced permission guardrails for regulated team deployments.

## 4. Differentiation Analysis
The 9 tracked tools split clearly into 3 distinct categories with non-overlapping priorities, target users, and technical architectures:
1. **Feature Focus Differences**:
    - Closed ecosystem vendor tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) prioritize native tight integration with their respective home model APIs, built-in enterprise SSO, and deep VS Code integration, with limited or no support for third-party custom model providers.
    - Modular abstraction frameworks (Pi, OpenCode) are built from the ground up for full model/provider interoperability, supporting every major public LLM, self-hosted open VLM, and local inference stack to act as a single unified interface for all AI coding tasks.
    - Regional open-source distributions (Kimi Code, Qwen Code, DeepSeek TUI) are optimized for Chinese domestic users, with native support for local enterprise communication platforms (DingTalk, WeChat Work), simplified China-region model routing, and compatibility with air-gapped on-premise deployments.
2. **Target User Differences**: Claude Code and OpenAI Codex target premium power users paying for top-tier reasoning model access; Pi and OpenCode target multi-model power users and tinkerers; GitHub Copilot CLI targets native GitHub-integrated enterprise dev teams; and the three regional tools target domestic Chinese individual and enterprise developer bases.
3. **Technical Approach Differences**: Most closed vendor tools use monolithic codebases with no user-facing model configuration layers, while modular frameworks use a fully decoupled abstraction layer between the CLI/TUI and underlying model backends for full user customization. TUI-focused regional tools prioritize ultra-low-latency rendering and compatibility with niche non-standard environments including Termux for Android and BSD distributions.

## 5. Community Momentum & Maturity
1. **Mass-scale mature products**: OpenCode (190 upvotes for its top active feature request, tens of thousands of active users) and OpenAI Codex (337 upvotes for the highest voted `/undo` feature request) have the highest global community engagement, followed closely by Claude Code with a large stable base of premium enterprise users. All three projects have 10k+ stars on GitHub and track high-volume daily bug reports and feature requests.
2. **High-growth rapidly iterating products**: Qwen Code, Pi, Gemini CLI, and DeepSeek TUI land 7-10 merged PRs per day, with major architecture upgrades including multi-workspace daemon support, SQLite-backed session storage, and full cross-platform compatibility, and are growing their user bases quickly before reaching full mass adoption.
3. **Stable lower-velocity products**: Kimi Code CLI only tracked 2 active issues in the 24h window, with limited regional user base, prioritizing core edge case bug fixes rather than new feature development. GitHub Copilot CLI recorded zero updated/merged PRs in the period, indicating the team is currently in a post-v1.0 stable triage phase rather than pushing fast new feature launches.

## 6. Trend Signals
These observable patterns provide actionable reference for AI tool developers and engineering decision makers:
1. MCP interoperability is now a non-negotiable table stake for new AI CLI tools in 2026. All major active projects are converging on the standard, so new products that do not ship native MCP support will face massive compatibility gaps with the rest of the existing ecosystem.
2. The era of users accepting "it works on macOS but not Windows" is over. Windows platform parity is now a top 3 user priority across every major tool, so any new product launch that leaves Windows as a second-class platform will face heavy user backlash during onboarding.
3. Raw model performance is no longer the top user satisfaction driver. The highest voted issues across all communities are workflow reliability pain points: silent subagent failures, unexpected data loss from overwriting uncommitted files, and misleadingly uninformative error messages. Investing in reliability and user guardrails delivers far more user value than shipping minor incremental new model features.
4. Single-vendor locked tools are losing market share to modular model abstraction layers. Users are showing clear preference for platforms that let them mix and match different model classes for different tasks, rather than being forced to use a single provider's entire closed stack.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-07-15)
---
## 1. Top Skills Ranking
Ranked by cross-reference to high-engagement community issues and development attention:
1. **PR #1298: fix(skill-creator): run_eval.py 0% recall root cause fix**  
   Functionality: Resolves the widespread bug where the skill description optimization loop reports 0% recall for all test queries, adds full Windows stream reading, trigger detection, and parallel worker support. Discussion highlights: Addresses 10+ independent user reproductions and unblocks all new Skill development workflows, tied to top bug Issue #556. Status: Open. URL: https://github.com/anthropics/skills/pull/1298
2. **PR #1367: feat(skills): add self-audit v1.3.0 reasoning quality gate**  
   Functionality: A universal cross-stack audit skill that first verifies all output files exist mechanically, then runs 4-dimensional reasoning checks prioritized by potential damage severity before delivering outputs to users. Discussion highlights: Directly implements the community-proposed reasoning quality gate framework shared in Issue #1385, and is validated to eliminate 3 common classes of silent agent output errors. Status: Open. URL: https://github.com/anthropics/skills/pull/1367
3. **PR #83: Add skill-quality-analyzer and skill-security-analyzer meta-skills**  
   Functionality: Two nested meta-skills that evaluate community contributed Skills across 5 dimensions of documentation quality, structural compliance, trigger accuracy, and supply chain safety. Discussion highlights: Delivers a critical mitigation for the top security Issue #492 (community Skill trust boundary abuse under the official anthropic/ namespace). Status: Open. URL: https://github.com/anthropics/skills/pull/83
4. **PR #723: Add testing-patterns skill**  
   Functionality: A comprehensive testing skill covering the full testing stack including testing philosophy, AAA unit testing, React component testing, E2E testing, and property-based testing patterns tailored to Claude Code's operational capabilities. Discussion highlights: Users noted it fills a large gap of inconsistent test generation guidance that previously produced low-quality, unmaintainable test suites. Status: Open. URL: https://github.com/anthropics/skills/pull/723
5. **PR #1261: fix(skill-creator): isolate trigger-eval files from live project registry**  
   Functionality: Fixes a high-severity race condition where parallel run_eval workers overwrite each other's synthetic command files in the user's active `.claude/commands` directory, causing corrupted skill evaluation results. Discussion highlights: Resolves one of the final remaining unresolved bugs referenced in the 0% recall meta-issue tracker. Status: Open. URL: https://github.com/anthropics/skills/pull/1261
6. **PR #514: Add document-typography skill**  
   Functionality: A typographic quality control skill that eliminates orphan line wraps, stranded section headers at page breaks, and numbering misalignment across all AI-generated documents. Discussion highlights: Community feedback notes it solves a ubiquitous unaddressed pain point that users almost never explicitly request but notice immediately in polished outputs. Status: Open. URL: https://github.com/anthropics/skills/pull/514

---
## 2. Community Demand Trends
Distilled from top-commented public issues:
1. **Skill safety & trust meta-systems**: The top 34-comment security issue around community Skill impersonation under the official namespace has created high demand for automated scanning, validation, and permission guardrails for all third-party submitted Skills.
2. **Enterprise team Skill workflows**: The 14-comment request for org-wide skill sharing, plus SAP predictive analytics and SharePoint access control skill proposals, show fast growing demand for line-of-business Skill integration and internal private library distribution for enterprise teams.
3. **Cross-platform skill developer tooling maturity**: A cluster of 20+ combined comments across the run_eval 0% recall bug, Windows compatibility, YAML parsing failure, and UTF-8 panic issues indicate the community is prioritizing a stable, zero-silent-failure foundation for Skill creation and evaluation workflows.
4. **Agent output quality guardrails**: Proposals for self-audit, adversarial review gates, compact symbolic memory, and agent governance skills point to strong user demand for built-in safeguards that catch output errors before delivery, without manual user oversight.

---
## 3. High-Potential Pending Skills (Near Merge)
These low-change, fully reviewed active PRs are on track to land in the official repository imminently:
1. **PR #538: fix(pdf): correct case-sensitive file references in SKILL.md** – A minimal 8-location string fix that resolves broken PDF skill functionality on all case-sensitive Unix-based filesystems, no remaining open review blockers. URL: https://github.com/anthropics/skills/pull/538
2. **PR #541: fix(docx): prevent tracked change w:id collision with existing bookmarks** – A targeted bug fix for widespread document corruption in the popular DOCX skill when processing files with pre-existing bookmarks. URL: https://github.com/anthropics/skills/pull/541
3. **PR #509: docs: add CONTRIBUTING.md** – Adds a full contribution guide to raise the repo's 25% GitHub community health score, closes well-defined Issue #452, and only requires final maintainer sign-off. URL: https://github.com/anthropics/skills/pull/509
4. **PR #1302: Add color-expert skill** – A self-contained, dependency-free color system skill that covers industry standard naming systems, color space selection guidance, and accessibility compliance checks for design use cases. URL: https://github.com/anthropics/skills/pull/1302

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand is maturing the foundational Skill creation, validation, and security tooling layer to unlock safe, scalable, and reliable development and adoption of both general-purpose and line-of-business custom Skills for individual, startup, and enterprise user segments.

---

# Claude Code Community Digest | 2026-07-15
---
## 1. Today's Highlights
This 24-hour window sees two consecutive stable v2.1.x releases roll out accessibility and terminal UX updates for Claude Code users, including a highly requested opt-in screen reader mode. The top community discussion centers on a widely encountered Windows platform bug that renders the Fable 5 (Opus 4.8) advisor completely unavailable across all sessions, with 82 comments and 153 upvotes from affected users. Maintainers also merged multiple incremental fixes for the hook system, remote control workflows, and plugin development tooling to resolve long-standing developer frustrations.

## 2. Releases
Two new production versions were published in the last 24 hours:
- **v2.1.209**: Fixes a recent regression from an overly broad guard clause that blocked `/model` and other core dialog commands in Claude Agents background sessions.
- **v2.1.208**: Adds a new screen reader accessibility mode (usable via `claude --ax-screen-reader` flag, `CLAUDE_AX_SCREEN_READER=1` environment variable, or "axScreenReader": true in settings) and a new `vimInsertModeRemaps` setting to configure two-key insert-mode escape sequences such as the popular `jj` → Escape mapping.

## 3. Hot Issues (Top 10 Notable)
| Issue | Details | Community Impact |
|-------|---------|------------------|
| [#73365](https://github.com/anthropics/claude-code/issues/73365) | Open, Windows platform bug: Fable 5 (Opus 4.8) advisor is always marked unavailable across all sessions starting from v2.1.198 | The highest-engagement active bug, 82 comments and 153 upvotes, blocks users with premium Opus access from using their configured advisor workflow |
| [#17643](https://github.com/anthropics/claude-code/issues/17643) | Open, Windows platform bug: jdtls-lsp Java plugin fails to initialize due to invalid backslash-formatted file URIs passed to the LSP server | 17 comments, 19 upvotes, completely breaks native Java LSP support for all Windows Claude Code users |
| [#37628](https://github.com/anthropics/claude-code/issues/37628) | Open, VSCode area bug: Session renames done via the sidebar pencil icon do not sync to the terminal tab title, and get overwritten after the next message | 10 comments, 13 upvotes, breaks session organization workflows for power users with large numbers of active sessions |
| [#68147](https://github.com/anthropics/claude-code/issues/68147) | Closed, agents area bug: Explicit model overrides for subagents are silently dropped after a continuation boundary or conversation compaction | 7 upvotes, causes unexpected cost spikes or degraded performance when users intentionally route subagent tasks to non-default models |
| [#77602](https://github.com/anthropics/claude-code/issues/77602) | Open, macOS platform bug: AskUserQuestion prompts auto-resolve to the default recommended option in `--remote-control` non-interactive sessions | Newly filed against v2.1.209, breaks safety guardrails for unattended remote Claude Code deployments |
| [#65858](https://github.com/anthropics/claude-code/issues/65858) | Open, VSCode feature request: Add native Ctrl+F in-session text search for the VSCode extension conversation panel | Top requested IDE feature, addresses the pain of manually scrolling through multi-thousand message sessions to find past outputs |
| [#66222](https://github.com/anthropics/claude-code/issues/66222) | Closed, Windows area bug: `/insights` command generates non-RFC-compliant `file://` URLs that break for Windows users with non-ASCII usernames | 3 comments, 1 upvote, breaks the insights export workflow for international users using accented or non-Latin account names |
| [#63908](https://github.com/anthropics/claude-code/issues/63908) | Closed, cost area bug: Users on Sonnet models with <50% 200k context usage get an incorrect "Usage credits required for 1M context" blocking error | 17 comments, caused unexpected total session outages for users who never accessed 1M-context model tiers |
| [#47488](https://github.com/anthropics/claude-code/issues/47488) | Closed, cowork area bug: Explicit `model` parameters passed to cowork subagent tools are silently ignored, with all subagents routed to Haiku | 9 comments, caused unplanned performance degradation for users that configure specialized model routing for complex tasks |
| [#58281](https://github.com/anthropics/claude-code/issues/58281) | Closed, MCP area bug: MCP tool calls passing an empty string `""` as a parameter value drop all other parameters entirely | Breaks functionality for MCP plugins that support optional empty string inputs, causing silent tool execution failures |

## 4. Key PR Progress
All 8 recently updated pull requests are focused on bug fixes and documentation improvements:
1. [#77556](https://github.com/anthropics/claude-code/pull/77556) (Open): Fixes the `validate-hook-schema.sh` script in the plugin-dev tooling that was incorrectly flagging valid, officially documented hook JSON configurations as invalid, smoothing third-party plugin development.
2. [#77492](https://github.com/anthropics/claude-code/pull/77492) (Open): Fixes hookify system logic to correctly match file Write rules against payload content and map simple prompt rules to the modern UserPromptSubmit payload, adding regression test coverage for all permission rule types.
3. [#77443](https://github.com/anthropics/claude-code/pull/77443) (Open): Makes jq error handling paths in the ralph-wiggum stop hook script reachable under strict `set -e` bash mode, preventing corrupted session state files from breaking subsequent runs.
4. [#77442](https://github.com/anthropics/claude-code/pull/77442) (Open): Fixes three bugs in the public issue automation workflow, including a critical bug that timestamped all Statsig events from the dedupe workflow to the 1970 Unix epoch.
5. [#77439](https://github.com/anthropics/claude-code/pull/77439) (Open): Updates the public plugin marketplace listings to sync with the v2.0.0 security guidance plugin manifest, resolving a long-standing documentation mismatch between the hosted listing and installed plugin version.
6. [#77427](https://github.com/anthropics/claude-code/pull/77427) (Open): Adds an explicit tools allowlist to the pr-review-toolkit code reviewer agent, marking it as a leaf agent to prevent unintended nested agent invocations that cause runaway cost and unstructured review workflows.
7. [#76298](https://github.com/anthropics/claude-code/pull/76298) (Closed): Adds official documentation for the new Remote Control web/mobile background task panel feature introduced in v2.1.205, including full details of cross-device task status synchronization behavior.
8. [#77260](https://github.com/anthropics/claude-code/pull/77260) (Closed): Reopened iteration of the hookify Write/prompt rule fix PR for additional test coverage before final merge.

## 5. Feature Request Trends
The top community feature directions distilled from recent issues are:
1. **VSCode IDE UX parity with terminal TUI**: Users are requesting native features including in-session conversation search and cross-session-name sync that already exist in the terminal client.
2. **Formalized accessibility tooling support**: The newly shipped screen reader mode addresses months of community feedback for improved screen reader compatibility.
3. **Windows platform feature parity**: Users want all existing macOS/Linux features (including LSP plugins, MCP tooling, and native link handling) to work reliably on Windows.
4. **Explicit subagent configuration controls**: Users are requesting guardrails to ensure explicit model, timeout, and permission overrides for cowork/orchestrator subagents are never silently dropped.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the community include:
1. **Persistent Windows platform gaps**: 70% of top open bugs are Windows-specific, with widespread failures in LSP integration, file URI handling, and non-ASCII character support that do not appear on macOS or Linux.
2. **False positive quota/context limit blocks**: Multiple unresolved reports of sessions being incorrectly blocked by 1M-context usage errors for users running 200k-context models, with no clear user-facing explanation for the block.
3. **Silent configuration drift for subagents**: Users experience unexpected cost or performance drops when explicitly defined model, parameter, or permission rules for subagent workflows are ignored with no visible error message.
4. **VSCode extension missing core utility features**: The lack of in-session conversation search creates significant friction for power users working on multi-day, long-form coding sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-15
---
## 1. Today's Highlights
The past 24 hours brought 5 new Rust SDK releases, including a stable patch update and four iterative v0.145.0 alpha pre-releases, alongside 20 merged engineering PRs focused heavily on MCP performance optimizations, third-party cloud provider integration, and user workflow fixes. Community engagement trended highest on longstanding feature requests for native /undo support in the TUI, while dozens of users reported a wave of Windows platform stability regressions following the recent unified ChatGPT-Codex desktop app update.

## 2. Releases
All updates published in the last 24 hours are Rust-focused, with no breaking user-facing changes:
- `rust-v0.144.4`: Stable patch release with only internal chore updates, no user-facing modifications. Full changelog: https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4
- `rust-v0.145.0-alpha.8` through `rust-v0.145.0-alpha.11`: Four sequential pre-release builds testing new features ahead of the v0.145 stable release line.

## 3. Hot Issues (Top 10 Notable)
All items are sorted by community engagement and user impact:
1. **[#31814](https://github.com/openai/codex/issues/31814) GPT-5.6 Sol locks subagents to Sol instances, no custom model selection** | 66 comments, 147 👍: High-impact bug where MultiAgent V2 defaults hide spawn agent metadata, preventing users from assigning smaller, cheaper models to subagent tasks to cut cost and latency. Multiagent workflow developers are actively discussing workarounds.
2. **[#9203](https://github.com/openai/codex/issues/9203) Request to restore `/undo` command in the TUI** | 55 comments, 337 👍: The highest-voted open issue of the past 6 months, requested by users who have suffered permanent data loss when Codex modifies or deletes untracked, non-git-managed files unexpectedly.
3. **[#20214](https://github.com/openai/codex/issues/20214) Windows 11 Codex App frequent freezes despite sufficient system resources** | 39 comments, 52 👍: Widespread unaddressed performance bug affecting all current Microsoft Store Codex builds on mid-tier and high-end Windows hardware.
4. **[#28969](https://github.com/openai/codex/issues/28969) Add setting to disable 60-second auto-resolve for agent confirmation questions** | 34 comments, 118 👍: Popular feature request from users who need extended time to review agent prompts before approving high-impact actions like bulk file edits.
5. **[#32040](https://github.com/openai/codex/issues/32040) Windows desktop app crashes after Picture-in-Picture in-app browser failure** | 25 comments, 8 👍: Fresh regression on 26.707.x Windows builds, breaking the widely used Browser Use capability for web crawling and research tasks.
6. **[#31846](https://github.com/openai/codex/issues/31846) GPT-5.3 Codex Spark throws "Unsupported parameter: reasoning.summary" error** | 19 comments, 28 👍: Model compatibility breakage preventing Pro tier users from accessing the latest Spark reasoning model in the desktop app.
7. **[#17229](https://github.com/openai/codex/issues/17229) Windows app spawns orphaned `git.exe` and `conhost.exe` processes** | 14 comments, 3 👍: Unfixed resource leak that leads to hundreds of idle background git processes running on long-running Windows Codex sessions, consuming CPU and RAM.
8. **[#31573](https://github.com/openai/codex/issues/31573) MCP OAuth authentication fails on issuer validation** | 9 comments, 24 👍: Blocks new MCP server setup for self-hosted and custom MCP tool users running v0.143.0 CLI, breaking third-party tool integrations entirely.
9. **[#32147](https://github.com/openai/codex/issues/32147) VS Code Codex extension breaks Shift+Tab Plan Mode toggle** |7 comments, 11 👍: Post-update workflow regression for IDE users that forces manual menu navigation to switch plan mode, slowing down development workflows.
10. **[#15112](https://github.com/openai/codex/issues/15112) High demand temporary error message resolved (closed)** | 8 comments: Earlier 2026 connectivity issue marked as closed, confirming fixes for the WebSocket to HTTPS fallback error paths that caused widespread request failures.

## 4. Key PR Progress (Top 10 Updates)
All PRs were merged in the last 24 hours, with focused high-impact changes:
1. **[#33173](https://github.com/openai/codex/pull/33173) Migrate all remaining GPT-5.4 usage to GPT-5.6 variants**: Hides legacy GPT-5.4 and GPT-5.4-mini from the model selector, redirecting existing users to the newer GPT-5.6-Terra and GPT-5.6-Luna models respectively for improved performance.
2. **[#33184](https://github.com/openai/codex/pull/33184) Reuse MCP tool catalogs across sessions**: Adds caching for stdio MCP server tool definitions, cutting new session startup latency for multi-tool environments by eliminating repeated MCP server initialization on every session launch.
3. **[#33180](https://github.com/openai/codex/pull/33180) Serialize concurrent MCP stdin writes**: Adds a semaphore guard for MCP JSON-RPC message transmission, eliminating race conditions that caused corrupted writes and random MCP tool failures during parallel tool calls.
4. **[#33170](https://github.com/openai/codex/pull/33170) Add Amazon Bedrock login support to the app server**: Ships long-awaited native support for AWS Bedrock model hosting, letting enterprise users authenticate directly with AWS credentials to run Codex against self-hosted model deployments on Bedrock.
5. **[#33187](https://github.com/openai/codex/pull/33187) Honor workspace spend controls in rate limit handling**: Fixes a gap where out-of-order rate limit metadata updates could ignore workspace-level hard spending caps, preventing unexpected overages for team and enterprise accounts.
6. **[#33152](https://github.com/openai/codex/pull/33152) Add paginated thread history support to app-server list APIs**: Resolves performance failures for users with 1000+ chat threads, enabling smooth incremental loading of conversation history instead of bulk full-dataset pulls.
7. **[#31343](https://github.com/openai/codex/pull/31343) Add metadata-only `app/read` endpoint**: Introduces a lightweight API for app-server clients to pull thread metadata without spinning up full runtime state, reducing metadata fetch latency by over 70% for large enterprise deployments.
8. **[#33156](https://github.com/openai/codex/pull/33156) Run detached reviews as native review-agent turns**: Standardizes detached code review behavior to match regular forked turn workflows, fixing missing permission prompts, partial state loss, and inconsistent streaming output for automated PR reviews.
9. **[#31485](https://github.com/openai/codex/pull/31485) Fix duplicate markdown image links in image generation output**: Adds guidance to the image generation model to avoid re-embedding already displayed generated images, eliminating duplicate broken image links in final chat outputs.
10. **[#33149](https://github.com/openai/codex/pull/33149) Build MCP tool runtimes before router planning**: Refactors the internal tool planning architecture to eliminate duplicated direct and deferred MCP tool lists, reducing future MCP bug surface area for upcoming feature updates.

## 5. Feature Request Trends
Top user-submitted feature directions distilled from 24h issue data:
1. **Workflow safety guardrails**: Users are asking for granular recovery controls including the long-missed `/undo` command to revert uncommitted/untracked file changes, to prevent accidental data loss.
2. **Configurable auto-behavior**: High demand for global toggles to disable automatic actions including the 60-second auto-resolve for user prompts and the new auto-dismiss countdown on the ask-question tool UI.
3. **Flexible multi-agent controls**: Users want full customizability for subagent model selection instead of forced inheritance from the top-level model, plus a new bounded `/orchestrator` CLI command to coordinate multiagent work without separate third-party tools.
4. **Restored legacy keyboard shortcuts**: Requests to bring back previously working quality of life shortcuts including macOS Option+Space quick chat and VS Code Shift+Tab Plan Mode toggle.

## 6. Developer Pain Points
Recurring high-frequency frustrations across the community:
1. **Chronic Windows platform instability**: Overlapping, unresolved bugs including app freezes, orphaned git processes, in-app browser crashes, slow sandbox performance for large workspaces, and post-update failures make Windows the least stable supported platform for Codex desktop users.
2. **MCP connectivity and performance regressions**: Recent v0.143+ CLI builds introduce OAuth validation failures that break MCP logins, alongside slow per-session MCP server initialization that adds 2-5 seconds of latency to every new session with multiple custom tools.
3. **Post-ChatGPT/Codex unification regressions**: The recent app unification update caused widespread data loss for users, including missing legacy projects, disappeared chat history, broken native macOS keyboard shortcuts, and unfindable remote SSH project threads.
4. **Unexpected model compatibility errors**: Users running newer model variants (GPT-5.3 Spark, GPT-5.6 Sol) frequently hit hard "unsupported parameter" errors when the client passes arguments not allowed for those specific model releases, with no clear user-facing workaround documentation.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-15
Repository: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
The 2026-07-14 v0.52.0 nightly release lands two critical quality-of-life fixes for shared quota error messaging and A2A server task cancellation. Maintainers are prioritizing mitigations for widely reported P1 agent hanging, infinite execution, and shell deadlock bugs this sprint, while advancing security hardening for untrusted workspace execution via mandatory path trust validation. Newly in-flight PRs add explicit guardrails to prevent runaway token usage from overly verbose shell command output that clogs model context windows.

## 2. Releases
One new nightly build was published in the last 24 hours:
### v0.52.0-nightly.20260714.gfa975395b
Changes:
1.  Core improvement: Shared project quota limit errors now include explicit setup guidance to reduce user confusion when hitting API rate caps
2.  A2A server fix: Task cancellation now fully aborts the execution loop, eliminating orphaned background processes that waste local resources
Full release: [v0.52.0-nightly.20260714](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260714.gfa975395b)

## 3. Hot Issues
Top 10 active, high-impact issues updated in the last 24 hours:
1.  [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1 Bug): Subagent reports `GOAL success` after hitting MAX_TURNS, masking interrupted incomplete work. 10 comments, 2 👍, users report wasting significant time debugging tasks that the CLI incorrectly marked as finished.
2.  [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1 Bug): Generalist agent hangs permanently after deferral, even for trivial tasks like folder creation. 7 comments, 8 👍, this is one of the most widely reported user-facing bugs.
3.  [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) (P2 Enhancement): Roadmap epic for zero-dependency OS sandboxing to unlock Gemini 3's native bash/POSIX tool affinity without security tradeoffs. 8 active comments from the agent working group.
4.  [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (P1 Core Bug): Shell execution gets stuck showing "Awaiting user input" long after the spawned command completes. 4 comments, 3 👍, breaks automation workflows that rely on reliable shell exit detection.
5.  [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) (P1 Epic): Component-level evaluation framework for agent behavior, which will scale test coverage across 6 supported Gemini model variants for the 76 existing behavioral test cases. 7 comments.
6.  [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (P2 Investigation Epic): AST-aware file reads, search, and code mapping to reduce wasted turns from partial file reads and cut prompt token bloat during code exploration tasks. 7 comments, 1 👍.
7.  [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (P1 Bug): Browser subagent fails entirely on Wayland compositors. 4 comments, 1 👍, breaks browser automation workflows for modern Linux desktop users.
8.  [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (P2 Bug): Auto Memory retries low-signal, uninteresting chat sessions indefinitely in the background. 5 comments, wastes inference credits and generates redundant memory entries.
9.  [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (P2 Bug): CLI throws a 400 model API error when more than 128 tools are registered. 3 comments, blocks power users with large custom skill packs from running extended agent workflows.
10. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (P2 Security Bug): Adds mandatory, pre-model-inference deterministic secret redaction for Auto Memory processing to eliminate data compliance risks of sensitive user data being leaked to background model instances. 3 comments.

## 4. Key PR Progress
All 7 active PRs updated in the last 24 hours, covering fixes and roadmap features:
1.  [#28391](https://github.com/google-gemini/gemini-cli/pull/28391) (Merged): Core fix by @amelidev to enrich shared project quota errors with explicit setup guidance, shipped in the latest nightly.
2.  [#2831](https://github.com/google-gemini/gemini-cli/pull/2831) (Merged): A2A server fix by @luisfelipe-alt to ensure task cancellation terminates the full execution loop, no orphaned background processes.
3.  [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) (Open): Refactor for A2A server that enforces workspace path trust checks *before* loading workspace environment variables, and isolates task context via AsyncLocalStorage for improved security.
4.  [#24303](https://github.com/google-gemini/gemini-cli/pull/24303) (Open, GSoC 2026): Native V8 memory and profiling suite that adds terminal-integrated performance inspection tools for debugging memory leaks in agent workflows.
5.  [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) (Open): Core fix that enforces a strict 15 recursive reasoning turn limit per user request, preventing infinite loops that waste local CPU and model API credits.
6.  [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) (Open): Shell tool fix that adds a hard bound on the volume of command output sent to the model, eliminating context bloat from overly verbose outputs like `find /` or full build logs.
7.  [#28400](https://github.com/google-gemini/gemini-cli/pull/28400) (Merged): Automated chore PR that performed the version bump for the latest 0.52.0 nightly release.

## 5. Feature Request Trends
The most requested capability directions from recent updates are:
1.  **Subagent observability**: Users want full subagent trajectory visibility in bug reports and the `/chat share` export flow, to debug incomplete or failed subagent runs.
2.  **Sandbox-native Gemini 3 support**: A widely prioritized roadmap item to build zero-dependency OS sandboxing that lets the model use its native trained POSIX/bash skills without manual wrapper tools or security risks.
3.  **Auto Memory reliability**: Multiple parallel requests to fix infinite retries, add deterministic secret redaction, and quarantine invalid memory patches to prevent silent failures in the background memory system.
4.  **Browser agent hardening**: Feature asks for Wayland support, persistent session lock recovery, and full respect for user-defined `settings.json` overrides for configurable values like max turns.
5.  **AST-aware code exploration**: Interest in tools that operate directly on code syntax trees to reduce wasted turns and eliminate noisy irrelevant context during codebase research tasks.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1.  **Unbounded runaway execution**: Common instances of permanent hanging in generalist agent workflows, no enforced turn limits that waste API credits, and unconstrained shell output that clogs model context windows.
2.  **Masked failures and poor observability**: Subagent errors and interruptions are often incorrectly reported as successful goal completion, and bug report exports omit all internal subagent context making it nearly impossible for users to share actionable debug data.
3.  **Unintuitive edge case compatibility gaps**: Custom symlinked agents in the user config directory are not detected, browser agent ignores user-defined maxTurns overrides, and subagents run even when explicitly disabled in config for existing users upgrading from older versions.
4.  **Tool set bloat**: No automatic dynamic pruning of the available tool list for active workflows, leading to hard API 400 errors when users register more than ~128 custom skills.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-15
---
## 1. Today's Highlights
Today’s digest leads with the newly released v1.0.71-1 build, which delivers long-awaited plugin marketplace management controls and persistent configuration for MCP tools and sidebar sessions aligned with the project’s 2026 extensibility roadmap. Maintainers triaged 10+ brand new user-submitted issues filed overnight, alongside existing high-impact open bugs and feature requests that received active community discussion in the last 24 hours. No new pull requests were merged or updated in the tracked 24-hour window.

## 2. Releases
### v1.0.71-1
Official patch release with the following confirmed new features:
- Persist GitHub MCP toolset and individual tool configuration via `settings.json` under new `githubMcpToolsets` and `githubMcpTools` schema keys
- Launch full `plugins marketplace` subcommands to list, add, and remove custom plugin marketplace sources
- Persist all sidebar session state across application restarts
- Add dedicated browse and update subcommands for plugin marketplaces
*Note: One partial change entry was marked incomplete in the published release notes draft.*

## 3. Hot Issues (10 Noteworthy Items)
| Issue Link | Context & Community Reaction |
|---|---|
| [#4118](https://github.com/github/copilot-cli/issues/4118) | Bug: `/app` command does not auto-select the current working directory when opening the desktop Copilot app. This is the highest-voted new issue filed today with 29 👍, representing a near-universal QoL pain point for daily CLI users. |
| [#443](https://github.com/github/copilot-cli/issues/443) | Top open long-running feature request for native PDF reading support, with 33 👍. Users currently have to manually install external tools like `pdftotext` to process academic papers, technical reports, and PDF documentation via the CLI. |
| [#2165](https://github.com/github/copilot-cli/issues/2165) | Ubuntu keychain support is fully broken, with 21 👍 and 3 active user comments. The bug even has incorrect official documentation linked, forcing Linux users to re-authenticate repeatedly on session restart. |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice mode bug: All bundled ASR models fail silently due to a MultiModalProcessor routing error for the `nemotron_speech` RNNT model in Foundry Local Core. 8 active comments confirm the feature is completely non-functional for users on local model stacks. |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | Third-party MCP servers show "Connected" in the desktop UI but their tools never appear in CLI sessions because OAuth tokens are not bridged to active runs. This blocks end-to-end integration for popular MCPs like the Atlassian remote server. |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | High-severity data loss bug: Checkpoint restore runs `git clean -fd` on the repo root and permanently deletes all uncommitted untracked user files. 3 active comments from users who lost unversioned local work confirm the critical risk. |
| [#4103](https://github.com/github/copilot-cli/issues/4103) | Regression from v1.0.70: Plugin marketplace clone operations disable system Git credential helpers, breaking authentication for private HTTPS-based marketplace repos hosted on Azure DevOps. |
| [#4097](https://github.com/github/copilot-cli/issues/4097) | Bug: The `apply_patch` tool stores full copies of deleted binary files as text in session history, permanently exceeding GitHub CAPI's 5MB payload limit and crashing active sessions when working in repos with binary assets. |
| [#3590](https://github.com/github/copilot-cli/issues/3590) | Regression since v1.0.53: `preToolUse` hooks that return a `permissionDecision: "ask"` response flash a prompt to the user then auto-approve it without input, completely breaking custom enterprise security guardrails. |
| [#3477](https://github.com/github/copilot-cli/issues/3477) | Feature request for enterprise OTel auth parity with Claude Code, with support for mTLS environment variables and dynamically refreshed auth headers. This blocks production observability rollouts for regulated enterprise deployments. |

## 4. Key PR Progress
There are no pull requests created, updated, or merged in the 24-hour tracked window for the `github/copilot-cli` repository. All confirmed bug fixes and new features from the recent v1.0.71-1 release were merged in prior 24-hour windows, and the maintainer team is currently triaging open issues to prioritize work for the next patch release.

## 5. Feature Request Trends
From all recently updated issues, the top user-requested feature directions are:
1.  **Extensibility improvements**: Native PDF tooling without external dependencies, full custom MCP and plugin marketplace workflow parity across desktop and CLI
2.  **Terminal QoL upgrades**: Add conversation titles to the active session view, double-tap enter to interrupt execution and submit a new prompt, and fix the `/app` directory auto-detection behavior
3.  **Enterprise deployment parity**: Support for persistent deny rules in the permission system, mTLS for OTel observability, and native support for non-Git repos (Azure DevOps etc) for existing features like `/resume`
4.  **Local model reliability**: More robust voice mode ASR routing and transparent error handling for local model stacks

## 6. Developer Pain Points
The highest-recurring user frustrations from recent issue activity are:
1.  Cross-platform authentication gaps, especially broken keychain support on Linux that forces repeated re-login
2.  Unaddressed data loss risks in core workflow features: checkpoint restore deleting uncommitted files, parallel session runs overwriting each other's permission configurations
3.  Extensibility regressions introduced in recent builds: broken preToolUse hook behavior, missing MCP tooling, and broken private Git auth for custom plugin marketplaces
4.  Inconsistent permission system behavior: incorrectly scoped safe directory prompts, silent lost approvals for "always allow" rules, and uncontextualized subagent permission prompts that create security blind spots

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-15
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
The 24-hour reporting window ending 2026-07-15 delivers 3 merged core backend fixes for the Kimi Code CLI v1.36.x release line, targeting compatibility with the latest Moonshot coding models and more efficient utilization of Kimi's large context windows. A previously reported bug that caused corrupted output when resuming forked sessions via the `kimi -r` flag has been fully resolved, while a high-priority open bug around false-positive organization TPD rate limits continues to track active community attention. No new public production releases were shipped in this period.

## 2. Releases
No new stable, pre-release, or hotfix versions of Kimi Code CLI were published in the last 24 hours.

## 3. Hot Issues
Only 2 issues saw updates in the reporting window:
1. [#2318 [OPEN] Bug: Incorrect TPD calculation triggers false organization TPD rate limit](https://github.com/MoonshotAI/kimi-cli/issues/2318)
   Reported by enterprise user globalvideos272-lab running Kimi CLI v2.6 on Windows 10, this bug causes the CLI to hit a 1505241 TPD cap incorrectly even when the user's allocated organization quota is not exhausted. It has received 1 👍 and 1 community comment, and is marked as a high-priority blocker for multi-user enterprise deployments relying on pooled quota.
2. [#2496 [CLOSED] Bug: Resuming forked session results in corrupted output](https://github.com/MoonshotAI/kimi-cli/issues/2496)
   Reported by user TheKevinWang running Kimi CLI v1.36.0 on Windows 10, this bug was resolved in the latest merge batch. It impacted collaborative code workflows that use the `kimi -r` resume flag to rejoin shared forked sessions, and no further community reports of the fault have been logged post-fix.

## 4. Key PR Progress
All 3 PRs updated in the reporting window are marked as merged/closed:
1. [#2499 fix(kosong): Stop sending Kimi reasoning effort implicitly](https://github.com/MoonshotAI/kimi-cli/pull/2499)
   Authored by RealKai42, this fix removes automatic serialization of the legacy `reasoning_effort` parameter, routing all Kimi thinking configuration exclusively through the standardized `thinking.type` schema. It prevents unexpected 400 errors when calling the latest Kimi reasoning-enabled endpoints, and eliminates unintended parameter clamping that modified user-provided custom reasoning effort values.
2. [#2498 fix(kosong): Preserve empty-string reasoning_content as ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/2498)
   Authored by bigeagle, this patch resolves a critical runtime error triggered when the new `coding-model-okapi-0711-vibe` model returns empty-string `reasoning_content` values mid-session with thinking trace preservation enabled. Empty reasoning chunks are now correctly retained as valid ThinkPart objects, eliminating the "missing reasoning_content" 400 fault.
3. [#2494 fix(kimi): Use remaining context for completion budget](https://github.com/MoonshotAI/kimi-cli/pull/2494)
   Authored by RealKai42, this fix replaces the legacy hardcoded 32k completion token cap with a dynamic calculation that uses the full remaining space in Kimi's context window as the default maximum output budget. This applies to native Kimi provider implementations as well as Kimi instances wrapped via ChaosChatProvider, unlocking far longer generated outputs for large repo refactoring tasks.

## 5. Feature Request Trends
Distilled from current community issue traffic, the highest-priority feature directions are:
- Native enterprise quota telemetry: Users want in-CLI visibility into real-time TPD/RPD usage and remaining organization allocation, instead of opaque raw rate limit error codes.
- Enhanced forked session controls: Collaborative development teams are requesting explicit shareable link generation and session snapshot features for forked workstreams.
- User-adjustable completion budget: Developers are asking for a CLI flag that lets them manually set maximum output token limits instead of relying on auto-calculated values for specialized workloads.

## 6. Developer Pain Points
Recurring high-impact frustrations logged in recent issue traffic include:
- Unreliable rate limit accounting: False-positive TPD limit triggers block enterprise developer workflows without clear root cause debugging tools.
- API schema drift mismatches: Implicit injection of legacy reasoning parameters caused random session failures with new model releases, breaking trace preservation for code generation use cases.
- Wasted large-context capacity: The prior 32k hardcoded output cap left >98% of Kimi's 2M+ token context window unused for most full-repo workflow tasks.
- Windows-specific session resilience gaps: A disproportionate share of reported session resumption corruption faults affect Windows 10 users, indicating remaining unaddressed cross-platform edge cases.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-15
*Tracked from https://github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Today’s top updates mark the full production completion of the OpenCode Desktop v2 UI migration, with two new stable releases rolled out in the last 24 hours for end-user testing. Maintainers merged 5 highly requested UX quality-of-life improvements for the desktop interface overnight, eliminating multiple long-standing gaps in session management controls. The community’s highest-voted open feature request for Cursor CLI integration has received a flood of new engagement following Cursor’s official public CLI launch, while users are actively submitting bug reports for v2 layout teething issues, with maintainers noting a temporary toggle between old and new layouts is available for all users during the transition window.

## 2. Releases
Two new stable desktop releases shipped in the past 24 hours:
- **v1.18.0**: Full Desktop v2 migration completed, with logic to auto-upgrade existing user layouts and a redesigned first-launch onboarding flow. A new user setting was added to toggle between the legacy v1 layout and new v2 layout during the transition period. Fixed broken background rendering for in-app file views.
- **v1.18.1 (patch)**: Fixed inconsistent, cramped spacing between model provider sections in the Settings menu.

## 3. Hot Issues
1. **#2072 Support for Cursor?** https://github.com/anomalyco/opencode/issues/2072: The highest traction open feature request with 190 👍 and 76 comments. Users are pushing for native integration after Cursor launched its public CLI, with multiple community contributors already submitting draft proof-of-concept implementations for maintainer review.
2. **#30086 High CPU usage in newer versions of OpenCode** https://github.com/anomalyco/opencode/issues/30086: Critical performance regression with 15 👍 and 29 comments, where users report they can no longer run more than 3 concurrent sessions, down from 10 pre-update. The issue has been prioritized by the core performance team for patch.
3. **#25239 Expose GitHub Copilot "Auto" option in model selector** https://github.com/anomalyco/opencode/issues/25239: 14 👍, 14 comments. Users are requesting direct access to Copilot’s automatic model routing feature (which selects the optimal underlying model for a given task) that is currently locked behind advanced hidden config.
4. **#32747 @ file mentions do not include files created after startup** https://github.com/anomalyco/opencode/issues/32747: 8 👍, 10 comments. Bug where newly created files never appear in the @ file reference picker until a full app restart, breaking fast iteration workflows for users generating new code mid-session.
5. **#36936 Desktop new tab layout breaks tab title visibility** https://github.com/anomalyco/opencode/issues/36936: 3 👍, 8 comments. New v2 layout horizontal tabs truncate session titles completely for users with more than 3 open sessions; users confirm reverting to the legacy v1 layout resolves the issue immediately.
6. **#31972 Plan/Build mode toggle breaks on new layout** https://github.com/anomalyco/opencode/issues/31972: 7 👍, 8 comments. Critical core workflow bug for Windows users with the new layout enabled, where both the UI toggle and `Ctrl+.` keyboard shortcut to switch between Plan and Build modes stop responding entirely.
7. **#36942 [FEATURE]: Vertical tabs** https://github.com/anomalyco/opencode/issues/36942: User request to add optional vertical tab support for the new layout, to resolve horizontal space limitations for power users that run 10+ concurrent sessions.
8. **#36513 Feature: Configurable web search provider** https://github.com/anomalyco/opencode/issues/36513: Request to decouple the default Exa AI web search tool, letting users swap it for Google, Bing, DuckDuckGo or self-hosted search instances via `opencode.json` config.
9. **#35482 MiMo V2.5 and DeepSeek V4 Flash return Internal Server Error** https://github.com/anomalyco/opencode/issues/35482: Users on these two popular open model variants are getting unhandled 500 errors unrelated to rate limits; maintainers confirmed it is a backend routing bug under triage.
10. **#14862 Big Pickle fails to respect AGENTS.md directives** https://github.com/anomalyco/opencode/issues/14862: Recently closed bug where the Big Pickle agent would ignore explicit custom rules defined in the project `AGENTS.md` file, leading to unintended, unapproved code modifications. The fix is rolled out in the latest v1.18 patch.

## 4. Key PR Progress
1. **#36922 feat: Add one-click context compaction button** https://github.com/anomalyco/opencode/pull/36922: Merged, adds a dedicated icon button next to the context usage indicator to trigger session context summarization in one click, no need to open the command palette to run the `/compact` command.
2. **#36924 feat: Add fork button to assistant response texts** https://github.com/anomalyco/opencode/pull/36924: Merged, adds a hover-visible fork icon next to the copy button on all AI responses, letting users spawn a new forked session at any previous message in a single click.
3. **#36926 feat: Add inline session rename in sidebar** https://github.com/anomalyco/opencode/pull/36926: Merged, brings the existing workspace rename UX to session entries: double-click any session in the sidebar to edit its name directly.
4. **#36928 feat: Add delete session with confirmation dialog** https://github.com/anomalyco/opencode/pull/36928: Merged, adds a delete action to the sidebar session context menu with a confirmation prompt, leveraging the pre-existing backend delete API that previously had no user-facing UI.
5. **#36930 feat: Add archived sessions browser dialog** https://github.com/anomalyco/opencode/pull/36930: Merged, adds the new `/archived` command to open a browsable dialog for all archived sessions sorted by archive date, letting users restore previously hidden sessions without manual database edits.
6. **#32333 feat: Add editor specific settings to tui.json** https://github.com/anomalyco/opencode/pull/32333: Merged exclusive TUI feature, letting users define custom editor path and temporary directory overrides in the `tui.json` config file.
7. **#32332 feat: Add OpenRouter Fusion presets** https://github.com/anomalyco/opencode/pull/32332: Merged, adds native support for OpenRouter's new Fusion model routing system that automatically selects the highest-performing model for any given task.
8. **#32320 fix: Allow partial provider model limits** https://github.com/anomalyco/opencode/pull/32320: Bug fix that relaxes the model config schema, letting users define partial model limit rules (e.g. only set an input limit, no mandatory context or output limits) for custom model providers.
9. **#32284 fix: Expand tilde in file tool paths** https://github.com/anomalyco/opencode/pull/32284: Fixes file handling bug where paths prefixed with `~` would not resolve to the user's home directory, working across all file operation tools including read, write, grep and glob.
10. **#32299 feat: Add thread commands and session graph to TUI** https://github.com/anomalyco/opencode/pull/32299: New feature adds the `/thread` command to spawn child sessions from selected content, plus a full interactive session

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-15
Official repo: [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. Today's Highlights
Pi v0.80.7 was released with a breaking change to OpenAI session affinity configuration, as the community moves to resolve a wave of post-v0.80.x regressions affecting self-hosted providers, OpenAI Codex, and compaction workflows. Newly merged PRs add native xAI SuperGrok OAuth support and full GPT-5.6 model catalog entries for GitHub Copilot, while in-progress work delivers the long-requested Amazon Bedrock Mantle provider for AWS users.

---

## 2. Releases
### v0.80.7
This release includes a single breaking change to OpenAI responses compatibility layer configuration:
- The legacy `openai-responses` `compat.sendSessionIdHeader` flag in `models.json` is fully removed. Session affinity behavior is now controlled by the new `compat.sessionAffinityFormat` field with 3 valid values: `"openai"`, `"openai-nosession"`, or `"openrouter"`. All existing users configured with `sendSessionIdHeader: false` must migrate to the new format.

---

## 3. Hot Issues
Top 10 most active, community-notable issues from the last 24h:
1. [#5363 Add amazon-bedrock-mantle provider for OpenAI-compatible models](https://github.com/earendil-works/pi/issues/5363) (16 comments, 8 👍) – Top community request for AWS users, as the existing Amazon Bedrock provider does not support the Bedrock Mantle family's native OpenAI-compatible API. Development is already in active PR review.
2. [#6476 Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider (v0.80.6)](https://github.com/earendil-works/pi/issues/6476) (10 comments) – Critical regression breaking vLLM/LM Studio self-hosted setups, where custom large timeout values are ignored, leading to unexpected mid-session request failures. Marked as in-progress.
3. [#6522 openai-completions: no min floor on max_completion_tokens, sends 1 token → 400 Bad Request](https://github.com/earendil-works/pi/issues/6522) (7 comments) – Recently closed bug that broke workflows using proxies with misreported context window sizes, which led Pi to request 1 completion token that upstream services rejected as invalid.
4. [#6509 Extension-reported usage in the footer cost display (ctx.ui.setUsage)](https://github.com/earendil-works/pi/issues/6509) (5 comments) – High-demand extension API feature that will let developers surface cost of subagent/child process execution directly in the main UI footer for transparent aggregated billing tracking.
5. [#3200 Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200) (5 comments, 3 👍) – Multimodal upgrade request that extends the existing image support in the `prompt` RPC endpoint to forward audio and video content, unlocking full multimodal capabilities for models like Gemma 4 and GPT-4o.
6. [#6600 pi update --extensions blocks npm scripts with new npm 11.16.0](https://github.com/earendil-works/pi/issues/6600) (3 comments) – High-impact breakage from npm's latest default script-blocking policy, which silently fails Pi's extension update flow without clear user-facing remediation steps.
7. [#6374 model catalog fixes](https://github.com/earendil-works/pi/issues/6374) (3 comments, 1 👍) – In-progress triage of inconsistent reasoning level metadata across providers in Pi's model catalog, which causes unexpected behavior for developers building third-party tooling on top of Pi's model registry.
8. [#6630 openai-codex: sessionId > 64 chars breaks all requests — session-id header not clamped like prompt_cache_key](https://github.com/earendil-works/pi/issues/6630) (1 comment) – Nasty edge case bug causing cryptic request failures, recently patched to align session ID header behavior with the existing prompt cache key clamping logic.
9. [#6555 Compaction/summary llm call should inherit the sessions transport settings](https://github.com/earendil-works/pi/issues/6555) (2 comments, 2 👍) – Regression that broke compaction for users of models with no SSE support (like GPT-5.6-luna), who had explicitly configured WebSocket as their session transport.
10. [#6652 pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log, ignoring PI_CODING_AGENT_DIR](https://github.com/earendil-works/pi/issues/6652) (2 comments) – Recently fixed bug that created unintended hidden `~/.pi` directories for users running Pi with a custom non-default agent storage path.

---

## 4. Key PR Progress
10 highest-impact PRs updated in the last 24h:
1. [#6651 feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651) (Merged) – Delivers the requested native xAI SuperGrok device-code OAuth login flow (no API key required) and optimizes Grok 4.5 requests to use the OpenAI Responses API with configurable reasoning levels.
2. [#6653 clamp session-id to 64 chars for openai-codex](https://github.com/earendil-works/pi/pull/6653) (Merged) – Fixes the 64-character session ID limit bug for OpenAI Codex, resolving all invalid header request failures.
3. [#6636 feat(ai): refresh generated model catalogs](https://github.com/earendil-works/pi/pull/6636) (Merged) – Syncs Pi's model catalog to upstream data, adding official built-in entries for the full GPT-5.6 (luna/terra/sol) model family for GitHub Copilot.
4. [#6584 fix: forward provider options to summary requests](https://github.com/earendil-works/pi/pull/6584) (Merged) – Ensures compaction calls inherit all session-level provider settings (including transport mode, auth headers, and timeouts) to eliminate mismatched upstream failures.
5. [#6654 feat(ai): add promptCacheKey stream option to override the prompt cache key](https://github.com/earendil-works/pi/pull/6654) (Open) – Exposes a new optional `promptCacheKey` parameter in StreamOptions for 4 major OpenAI-derived providers, enabling advanced users to implement custom prompt cache control logic.
6. [#6216 feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216) (Open) – Full implementation of the requested Amazon Bedrock Mantle provider, leveraging the official OpenAI Bedrock SDK for native compatibility with the service's OpenAI-native API endpoint.
7. [#6594 feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594) (Open) – Major performance optimization that adds SQLite-backed session storage, eliminating the need to load full message trees during compaction and drastically reducing prefill latency on low-power unified memory hardware.
8. [#6533 fix: Codex compaction returns "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533) (Merged) – Works around the hidden model ID remapping logic OpenAI uses for Codex no-tools requests, ensuring both auto and manual compaction works for GPT-5.6-luna.
9. [#6635 fix(ai): recover openai-completions tool calls emitted in content](https://github.com/earendil-works/pi/pull/6635) (Merged) – Adds graceful fallback for local inference servers (Ollama, LM Studio) that return syntactically valid tool call JSON in the assistant `content` field instead of the structured `tool_calls` array.
10. [#6632 fix(coding-agent): correlate RPC extension results](https://github.com/earendil-works/pi/pull/6632) (Merged) – Improves extension reliability by correlating all extension stdout and error events to the originating RPC request, eliminating uncaught silent failures for extension tooling.

---

## 5. Feature Request Trends
Across all recently updated issues, the most requested feature directions are:
1. **New provider support**: Top priority for the community is native Amazon Bedrock Mantle integration, followed by full first-class support for the xAI Grok subscription tier and the complete GPT-5.6 model family for GitHub Copilot.
2. **Multimodal API expansion**: Developers want to extend existing core RPC endpoints (especially the `prompt` command) beyond image support to accept and process audio and video content for modern multimodal models.
3. **Extension capability improvements**: Standardized APIs for extension cost/usage reporting, plus new signals for host integrations to detect when Pi is blocked on user input, are top requested features for the extension ecosystem.
4. **Performance and UX optimizations**: Core provider-side prompt cache hit rate improvements, plus proactive post-response compaction to eliminate user

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-15
Official GitHub: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights
Today’s updates mark the full production rollout of the long-discussed multi-workspace single-daemon architecture, with merged changes spanning ACP transport, daemon worker logic, and split-view session support as outlined in the 2026-07-06 community RFC. The new v0.19.10 stable release ships critical stability fixes, while 20+ active PRs introduce end-to-end security hardening, enterprise channel integration features, and performance tracing to cut daemon cold start latency. Core community priorities are now aligned on closing remaining performance gaps and polishing UX for power CLI users.

---

## 2. Releases
All new versions shipped in the last 24 hours:
1. **v0.19.10 Stable** ([Release Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10)): Bundles completed multi-workspace functionality, preserves YOLO mode when the model enters plan mode, and includes the latest bug fixes for core daemon behavior.
2. **TypeScript SDK v0.1.8** ([Release Page](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.8)): Packages the new v0.19.10 stable CLI as its bundled runtime dependency for downstream integrations.
3. **v0.19.9-nightly.20260714.9dd8389eb**: Pre-release build with staging hotfixes ahead of the stable v0.19.10 rollout.

---

## 3. Hot Issues (Top 10 Notable)
Sorted by community engagement, with context on impact:
1. [#6378 RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378) (23 comments): Highest-engagement ongoing discussion, where developers are testing backward compatibility for the new multi-workspace architecture that eliminates the overhead of running separate daemon processes per project.
2. [#3696 feat: comprehensive hot-reload system for skills, extensions, MCP, and configuration](https://github.com/QwenLM/qwen-code/issues/3696) (7 comments): Closed today, this long-awaited feature fully removes the requirement to restart sessions after modifying extensions, skills or configuration files, widely praised by third-party extension developers.
3. [#4748 Optimize daemon cold start and qwen serve fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748) (5 comments): Tracking issue to resolve the historical 2.5s cold start gap for daemon instances, now supplemented by new tracing functionality to identify remaining performance bottlenecks.
4. [#5979 Bug: /auth 修改模型供应商配置后，新会话仍报 401 错误](https://github.com/QwenLM/qwen-code/issues/5979) (5 comments): Closed P1 bug that caused new sessions to fail with 401 auth errors after users updated model provider credentials via the `/auth` command, resolved for Windows platform users.
5. [#6809 bug: Ctrl+S diff preview garbled for multi-line edits in permission dialog](https://github.com/QwenLM/qwen-code/issues/6809) (4 comments): High-impact UX bug that breaks review workflows for multi-line file writes, marked for patch priority in the next minor release.
6. [#6883 feat(channels): 支持钉钉 Webhook 任务投递到单聊](https://github.com/QwenLM/qwen-code/issues/6883) (2 👍, 2 comments): Popular enterprise feature request from Chinese users to extend DingTalk webhook support to 1:1 direct message delivery, already paired with an active implementation PR.
7. [#6857 /update reports "up to date" on 0.19.9 when 0.19.10 is available on npm registry](https://github.com/QwenLM/qwen-code/issues/6857) (2 comments): Critical launch bug for the new v0.19.10 release that blocks users from upgrading via the built-in `/update` CLI command, scheduled for immediate hotfix.
8. [#6831 Trust-status "preview" check mutates the cached trusted-folders config, leaking unconfirmed trust state](https://github.com/QwenLM/qwen-code/issues/6831) (2 comments): P1 security flaw that accidentally persists unconfirmed directory trust settings, granting unintended access to restricted folders, labeled for community contributions.
9. [#2128 Memory grows unboundedly during long sessions — UI History accumulates without limit](https://github.com/QwenLM/qwen-code/issues/2128) (3 comments): Top-priority performance bug for production deployments, where multi-hour sessions eventually hit OOM limits due to an uncapped UI history array.
10. [#6898 为什么 shell 的提醒每次工具都要触发，不能是任务结束的时候触发吗？](https://github.com/QwenLM/qwen-code/issues/6898) (3 comments): Top UX pain point for power users, who report frequent per-shell-execution confirmation popups interrupt long batch task runs. Community members are actively discussing a new end-of-task bulk approval mode.

---

## 4. Key PR Progress (Top 10 Important Updates)
Highest-impact merged/in-review PRs of the last 24 hours:
1. [#6895 feat(core): propagate trusted invocation context](https://github.com/QwenLM/qwen-code/pull/6895): Implements a runtime-only end-to-end invocation ID system that tracks ingress point, session origin and authenticated client for all request chains, laying the foundation for upcoming compliance and audit logging requirements.
2. [#6766 feat(ci): add automated PR failure patrol](https://github.com/QwenLM/qwen-code/pull/6766): Adds a 10-minute scheduled CI patrol that scans open non-draft PRs for stale, unaddressed CI failures, fixing the historical pain point where integration test regressions were only discovered at release time.
3. [#6876 feat(core): emit liveness heartbeats for silent foreground shell commands](https://github.com/QwenLM/qwen-code/pull/6876): Adds a configurable (default 10s) progress heartbeat for shell commands that produce no output, resolving the longstanding issue where long-running silent commands were incorrectly marked as frozen in headless/ACP deployments.
4. [#6854 fix(core): sanitize standalone closing thinking tags](https://github.com/QwenLM/qwen-code/pull/6854): Adds graceful recovery for model protocol errors where the LLM returns stray standalone `</think>` tags after valid structured reasoning, preventing unnecessary full turn discards and lost generated tool calls.
5. [#6891 feat(channels): support DingTalk webhook delivery to direct messages](https://github.com/QwenLM/qwen-code/pull/6891): Extends existing DingTalk channel integration to support 1:1 message delivery alongside group chats, fully reusing existing auth caching, Markdown processing and retry logic to minimize overhead.
6. [#6846 feat(core): add PDF vision bridge fallback](https://github.com/QwenLM/qwen-code/pull/6846): Adds a visual transcription fallback for PDFs when standard text extraction fails, improving processing success rate to 99% for edge cases with malformed scanned content.
7. [#6866 fix(vscode): run ACP process in Electron Node mode](https://github.com/QwenLM/qwen-code/pull/6866): Fixes Windows-specific launch failures for the Qwen Code VS Code companion by launching the bundled ACP process directly via the VS Code Electron runtime, eliminating external Node.js version dependency conflicts.
8. [#6486 feat(cli): Add model toggle hotkey (Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486): Adds a new user hotkey that instantly switches between two pre-configured models (e.g. a fast lightweight model and full reasoning model) mid-session, one of the highest requested UX shortcuts for power CLI users.
9. [#6907 feat(daemon): Trace cold first-session startup](https://github.com/QwenLM/qwen-code/pull/6907): Implements full end-to-end distributed tracing for the daemon cold first-session path, enabling developers to pinpoint remaining latency bottlenecks to hit the project's 1s cold start performance target.
10. [#6873 feat(scripts): add local PR verification gate](https://github.com/QwenLM/qwen-code/pull/6873): Adds a single `npm run verify:pr` entrypoint for local PR validation that runs all checks in a detached clean worktree, eliminating accidental local file modification during pre-PR testing.

---

## 5. Feature Request Trends
Three clear priority directions emerge from recent community submissions:
1. **Enterprise channel integration expansion**: Requests for enhanced DingTalk/WeChat Work functionality including 1:1 message delivery and

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-15
> Source: github.com/Hmbown/DeepSeek-TUI
---

## 1. Today's Highlights
This digest covers 24 hours of active development concluding with the finalized v0.8.68 release candidate build, with 14 resolved issues and 14 merged pull requests alongside 1 open active fix PR. Key updates include full new LLM provider support for MiniMax, cross-platform compatibility fixes for BSD and Termux Android environments, a full documentation portal redesign, and multiple high-priority TUI performance patches. Active community discussion is focused on unresolved core agent behavior gaps, TUI lag for large workspaces, and localization quality for Chinese-language users.

## 2. Releases
No new stable or pre-release builds were published in the last 24 hours. The v0.8.68 release candidate has been fully merged and is pending final signoff for public distribution.

## 3. Hot Issues
1. **[#4270 Closed] Streaming text output lag** | [Hmbown/CodeWhale#4270](https://github.com/Hmbown/CodeWhale/issues/4270)  
   High-impact UX bug that caused DeepSeek V-Flash (ultra-fast model) output to buffer heavily and render in delayed bursts, defeating the model's core low-latency advantage for terminal users.
2. **[#4208 Closed] Copy-paste polluted with box-drawing characters** | [Hmbown/CodeWhale/issues/4208](https://github.com/Hmbown/CodeWhale/issues/4208)  
   Annoying quality-of-life bug that forced users to manually strip formatting Unicode decorations from copied code snippets pulled out of TUI chat sessions.
3. **[#4365 Open] @ file watcher eager directory scan causes lag/freeze** | [Hmbown/CodeWhale/issues/4365](https://github.com/Hmbown/CodeWhale/issues/4365)  
   Active 1-comment thread describing unresponsive terminal behavior on large non-workspace directories, with a fix PR already in review.
4. **[#4369 Open] Unnatural Chinese I18N translation for "Constitution" user rules** | [Hmbown/CodeWhale/issues/4369](https://github.com/Hmbown/CodeWhale/issues/4369)  
   Localization bug that translates the name for custom user-defined agent rules as "national constitution" (宪法), causing major confusion for Chinese-language new users during setup.
5. **[#4368 Open] Missing Kimi custom base URL override and context limit warnings** | [Hmbown/CodeWhale/issues/4368](https://github.com/Hmbown/CodeWhale/issues/4368)  
   Critical gap blocking self-hosted Kimi (Moonshot) deployments, as users cannot specify private on-premise provider endpoints in config.toml.
6. **[#4350 Closed] Termux Android rquickjs build failure** | [Hmbown/CodeWhale/issues/4350](https://github.com/Hmbown/CodeWhale/issues/4350)  
   Build error that previously blocked the entire Android mobile user base from compiling and running the TUI via Termux, a highly requested niche use case.
7. **[#3765 Closed] Expose SeamManager and CompactionConfig toggles to config.toml** | [Hmbown/CodeWhale/issues/3765](https://github.com/Hmbown/CodeWhale/issues/3765)  
   Power user request that enables full manual control over context engine behavior, instead of relying on hardcoded values, for specialized long-running agent workflows.
8. **[#4032 Open] CodeWhale consistently ignores user-defined constitution rules** | [Hmbown/CodeWhale/issues/4032](https://github.com/Hmbown/CodeWhale/issues/4032)  
   The most active thread (35 comments) of the period, describing a core agent flaw where the model repeatedly ignores pre-approved shared scripts to generate new ad-hoc temporary workarounds.
9. **[#4359 Closed] Ambiguous parent-stop semantics for detached background agents** | [Hmbown/CodeWhale/issues/4359](https://github.com/Hmbown/CodeWhale/issues/4359)  
   Runtime behavior gap that made it unclear if pressing Esc would cancel background workers, leading to unintended orphaned subagent tasks for users running parallel workflows.
10. **[#4333 Closed] Empty provider headers treated as valid configured state** | [Hmbown/CodeWhale/issues/4333](https://github.com/Hmbown/CodeWhale/issues/4333)  
   New-user UX bug that made unconfigured providers appear as ready to use in the TUI picker, leading to confusing silent failures when users tried to select them.

## 4. Key PR Progress
1. **[#4361 Closed] Prepare CodeWhale v0.8.68 release candidate** | [Hmbown/CodeWhale/pull/4361](https://github.com/Hmbown/CodeWhale/pull/4361)  
   Merged main branch PR that wraps all v0.8.68 features: underwater TUI redesign, full PTY test coverage, safe stateful terminal persistence, and versioned execution receipt metadata for replay.
2. **[#3780 Closed] Expose context compaction gates** | [Hmbown/CodeWhale/pull/3780](https://github.com/Hmbown/CodeWhale/pull/3780)  
   Closes #3765, adds non-breaking config.toml switches for `[compaction].enabled` and `[seam_manager].enabled` to let power users fully disable context engine features.
3. **[#4354 Closed] Add MiniMax Messages provider support** | [Hmbown/CodeWhale/pull/4354](https://github.com/Hmbown/CodeWhale/pull/4354)  
   Adds full first-class support for MiniMax M3 and M2.7 models, with separate global and China region base URLs, verified context size, modality, and pricing metadata.
4. **[#4362 Closed] Redesign public site to be documentation-led** | [Hmbown/CodeWhale/pull/4362](https://github.com/Hmbown/CodeWhale/pull/4362)  
   Full overhaul of the project homepage that replaces marketing content with prioritized install guides, runtime documentation, and provider configuration references.
5. **[#4367 Open] Bound @-completion file index walk with wall-clock budget** | [Hmbown/CodeWhale/pull/4367](https://github.com/Hmbown/CodeWhale/pull/4367)  
   Fix for #4365 that adds a time limit cutoff to the file scan index, preventing full directory traversal hangs for large non-workspace folders.
6. **[#4360 Closed] Fix browser open behavior on BSD systems** | [Hmbown/CodeWhale/pull/4360](https://github.com/Hmbown/CodeWhale/pull/4360)  
   Adds support for NetBSD, FreeBSD, OpenBSD, and DragonFly BSD, so users can open external TUI links natively without platform error messages.
7. **[#4364 Closed] Add keyword search to docs hub and FAQ pages** | [Hmbown/CodeWhale/pull/4364](https://github.com/Hmbown/CodeWhale/pull/4364)  
   Implements real-time client-side search for both English and Chinese documentation, with a `/` keyboard shortcut to jump directly to the search input.
8. **[#4351 Closed] Bind offline scorecard costs to provider routes** | [Hmbown/CodeWhale/pull/4351](https://github.com/Hmbown/CodeWhale/pull/4351)  
   Fixes broken pricing logic that incorrectly applied cloud API pricing to local, self-hosted, or custom gateway model routes, leading to inaccurate cost tracking.
9. **[#4366 Closed] Align site brand strings and tidy redesign leftovers** | [Hmbown/CodeWhale/pull/4366](https://github.com/Hmbown/CodeWhale/pull/4366)  
   Cleans up naming inconsistencies across all public web pages to standardize on the "Codewhale" official brand wordmark.
10. **[#4342 Closed] Bump rmcp (MCP Rust SDK) from 1.8.0 to 2.2.0** | [Hmbown/CodeWhale/pull/4342](https://github.com/Hmbown/CodeWhale/pull/4342)  
   Upgrades the Model Context Protocol dependency to the latest stable version, improving subagent and third-party tool interoperability for users running custom MCP servers.

## 5. Feature Request Trends
1. **Self-hosted provider flexibility**: Top requested feature is first-class custom base URL support for all local and open model providers, including Kimi, to unblock air-gapped on-premise deployments.
2. **Cross-platform extended support**: High demand for running the TUI on non-standard environments including Android Termux and niche BSD distributions.
3. **Power user engine configuration**: Users want more previously hardcoded internal runtime features exposed via public config files for specialized use cases.
4. **Workspace performance safeguards**: Requests to add scan limits, file size caps, and auto-ignore rules to prevent TUI lag on monorepos or large system directories.

## 6. Developer Pain Points
1. **Cross-platform compatibility gaps**: New users on non-standard operating systems regularly hit unhandled build errors or missing native functionality that breaks their first-run onboarding flow.
2. **Perceived performance mismatch**: The TUI rendering pipeline cannot keep up with the output speed of ultra-fast models like DeepSeek V-Flash, defeating the low-latency value proposition of terminal-native LLM tools.
3. **Unintuitive default UX**: Poor localization quality, ambiguous runtime behavior for background subagents, and misleading UI state for unconfigured providers creates unnecessary friction for new community members.
4. **Inaccurate billing tracking**: Hardcoded public cloud pricing rules do not account for custom local model deployments, leading to meaningless cost display values in the usage scorecard.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*