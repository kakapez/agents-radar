# AI CLI Tools Weekly Digest 2026-10-12

> Generated: 2026-10-12 02:13 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
*Data as of 2026-10-12 | Community Digest Cycle: Last 7 Days*

---

## 1. Ecosystem Overview
The AI developer CLI ecosystem is entering a maturity phase where core coding assistance capabilities are table stakes, and competition is shifting to agent reliability, platform parity, enterprise security hardening, and ecosystem extensibility. Across all 7 major tools this week, security patches (path traversal, credential leaks, permission bypasses) and agent execution stability (hangs, false success states, compaction edge cases) dominated maintenance work, while feature roadmaps converged on multi-agent collaboration, MCP (Model Context Protocol) management, and cost optimization for long-running sessions. Open-source and community-driven tools (Pi, OpenCode, Qwen Code) are rapidly closing capability gaps with incumbent commercial tools (Claude Code, OpenAI Codex, GitHub Copilot CLI) by prioritizing provider flexibility and custom extension support. Platform-specific bugs (especially Windows and Linux desktop) remain a universal friction point, with no tool achieving full cross-platform parity for sandbox, TUI, and system integration features.

---

## 2. Activity Comparison
| Tool | Open Issues (Last 7d) | PR Activity (Last 7d) | Discussions Activity | Release Status (Last 7d) |
|------|-----------------------|------------------------|----------------------|---------------------------|
| Claude Code | 10 tracked hot issues (mix of open/closed) | 10 tracked PRs (6 closed, 4 open) | N/A (no discussion data provided) | 7 patch releases (v2.1.290–v2.1.296) |
| OpenAI Codex | 10 tracked hot issues (6 open, 4 closed) | 10 merged PRs | 10 active discussions (4 ideas, 3 Q&A, 3 show-and-tell) | 2 stable releases (v0.162.0, v0.162.1) + 4 alpha builds |
| Gemini CLI | 10 tracked hot issues (8 open, 2 closed) | 10 merged PRs | N/A (no discussion data provided) | 1 stable (v0.63.0) + 1 preview (v0.64.0-preview.1) + 4 nightly builds |
| GitHub Copilot CLI | 10 tracked hot issues (7 open, 3 closed) | 3 open PRs (2 non-substantive) | N/A (no discussion data provided) | 8 patch releases (v1.0.94–v1.0.96-2) |
| OpenCode | 10 tracked hot issues (4 open, 6 closed) | 10 PRs (9 open, 1 closed) | N/A (no discussion data provided) | 2 minor releases (v1.18.35, v1.19.0) |
| Pi | 10 tracked hot issues (8 open, 2 closed) | 10 PRs (7 closed, 3 open) | 9 active discussions (4 Q&A, 1 idea, 4 show-and-tell) | 3 releases (v1.0.3, v1.0.4, v1.1.0) |
| Qwen Code | 10 tracked hot issues (7 open, 3 closed) | 10 PRs (all merged/active) | N/A (no discussion data provided) | 1 stable (v0.25.1) + 6 preview/nightly builds |

*Note: N/A for discussions indicates no discussion data was provided in the weekly digest, not necessarily no community activity.*

---

## 3. Shared Feature Directions
Requirements appearing across 3+ tool communities:
1. **Context & cost optimization for long sessions**
   - *Tools: Claude Code, OpenAI Codex, Pi, OpenCode*
   - Needs: Idle auto-compaction to prevent cache expiry, configurable compaction models/thinking levels decoupled from main session settings, and intelligent model routing based on task complexity to avoid overusing high-tier models.
2. **MCP ecosystem maturity**
   - *Tools: Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code*
   - Needs: GUI-based MCP server configuration and testing, persistent third-party MCP authentication, glob-based tool filtering, and protocol compliance fixes for standardized server interoperability.
3. **Cross-platform reliability & parity**
   - *Tools: All 7 tools*
   - Needs: Windows sandbox/clipboard/networking fixes, Linux desktop packaging (deb/rpm/Flathub), and consistent TUI behavior across terminal emulators and multiplexers (Zellij, tmux, Windows Terminal).
4. **Agent execution observability & control**
   - *Tools: Gemini CLI, Qwen Code, Claude Code, Pi*
   - Needs: Visible subagent trajectories, configurable subagent limits (max turns, effort level), granular permission controls for subagent tools, and transparent error propagation between subagents and main agents.
5. **Enterprise security hardening**
   - *Tools: Claude Code, Gemini CLI, GitHub Copilot CLI, OpenCode*
   - Needs: Path traversal prevention, credential leak protection, workspace policy enforcement across subdirectories, fail-closed hook behavior, and HIPAA/compliance configuration templates.

---

## 4. Differentiation Analysis
| Tool | Core Focus | Target User | Technical Approach |
|------|------------|-------------|--------------------|
| **Claude Code** | Enterprise governance, hook-based security, desktop CLI integration | Enterprise teams, power users on Anthropic ecosystem | Tight integration with Claude Desktop and Anthropic’s gateway policy system; prioritizes security guardrails and managed policy rollouts over raw extensibility |
| **OpenAI Codex** | TUI UX, Git/worktree integration, cross-device sync | General developers, OpenAI ecosystem subscribers | Rust-based CLI with heavy investment in fullscreen TUI polish; deep integration with OpenAI’s Dot agents and GitHub code review workflows |
| **Gemini CLI** | Agentic codebase intelligence, AST-aware navigation, security hardening | Google Cloud/Gemini enterprise users, large codebase teams | Node.js-based runtime with focus on codebase understanding tools (AST, structured reads) and Google Cloud identity/policy integration |
| **GitHub Copilot CLI** | Sandbox security, authentication integration, enterprise policy compliance | GitHub enterprise users, Microsoft ecosystem shops | SEA-bundled Node runtime; tight integration with GitHub and Microsoft Entra; conservative feature rollout focused on sandbox safety |
| **OpenCode** | Multi-provider flexibility, accessibility, community-driven features | Open-source enthusiasts, multi-model power users | Open-source core with broad provider support (OpenAI, xAI, Copilot); prioritizes community-reported bug fixes and accessibility parity |
| **Pi** | Extensibility, multi-provider support, native packaging | Tinkerers, self-hosted users, extension developers | Bun/TypeScript runtime with a powerful extension API; supports 10+ model providers and focuses on terminal standards compliance (OSC 7501, Kitty graphics) |
| **Qwen Code** | Managed agent architecture, multi-agent collaboration, web shell UX | Chinese market developers, self-hosted enterprise teams | Go-based backend with hosted agent team infrastructure; heavy investment in multi-agent orchestration and web-based shell interfaces |

---

## 5. Community Momentum & Maturity
### Highest Activity & Maturity
- **Claude Code**: Most active issue engagement (top issue with 58 👍, 30 comments); rapid 7-day release cadence with security and feature patches; largest enterprise user base. Low community PR contribution (PRs are internal-only per digest data).
- **OpenAI Codex**: Balanced activity across issues, PRs, and discussions; strong community contribution in show-and-tell (custom skills, hooks, lint tools); stable release cycle with alpha channel for iterative testing.
- **Pi**: Fastest-growing community ecosystem; vibrant extension and third-party tool scene (P2P agent messaging, macOS UI, GitHub Actions runners); rapid release cadence with both patch and minor feature drops.

### Rapidly Iterating (Earlier Stage)
- **Qwen Code**: Aggressive managed agent roadmap with weekly architecture PRs; active core development team but smaller community engagement than incumbents; focuses on web shell and multi-agent features ahead of other tools.
- **OpenCode**: Strong community PR contribution (3+ external contributors per release); closes high-impact user-reported bugs quickly; growing feature set but smaller user base than commercial tools.

### Lower Activity / Conservative Iteration
- **GitHub Copilot CLI**: Very few community PRs (only 3 total this cycle, 2 non-substantive); high release cadence but mostly incremental patches and security hardening; limited public roadmap visibility, typical of GitHub enterprise products.
- **Gemini CLI**: Steady internal development but low community engagement; heavy focus on security and core stability over user-facing features; aligned with Google’s slower enterprise release cadence.

---

## 6. Trend Signals
1. **Agent reliability is the new competitive battleground**
   Across all tools, the top user pain points are no longer missing features but broken agent behavior: hangs, false success states, subagent misconfiguration, and compaction edge cases. For tool developers, investing in agent observability, deterministic execution limits, and failure transparency will drive user trust more than new feature additions in the next 6–12 months.
2. **MCP is becoming a standard extensibility layer**
   6 of 7 tools have active MCP-related work this cycle, spanning configuration, authentication, and tool filtering. Developers building AI tooling should prioritize MCP compliance to ensure cross-platform compatibility, and MCP server authors should test against multiple CLI runtimes to avoid integration friction.
3. **Cost optimization is a top enterprise buying criterion**
   Requests for intelligent model routing, idle compaction, and per-run budget caps appear across every tool tier, from open-source to enterprise. For tool vendors, built-in cost guardrails (not just usage dashboards) will be a required feature for enterprise procurement.
4. **Web-based and multi-device access is an emerging gap**
   OpenAI Codex (iOS remote), Qwen Code (Web Shell), and Pi (macOS UI) are all investing in non-CLI interfaces, while incumbents like Claude Code and Copilot CLI remain desktop/CLI-first. Developers building agent workflows should plan for multi-surface access (CLI, web, mobile) as user expectations shift.
5. **Security hardening is shifting left into the runtime**
   This week alone saw 10+ security patches across tools for path traversal, credential leaks, hook bypasses, and command injection. As agents gain more access to user systems, runtime security (fail-closed policies, sandbox isolation, least-privilege tool access) is no longer a nice-to-have but a baseline requirement for production use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data sourced from [anthropics/skills](https://github.com/anthropics/skills), as of 2026-10-12*

---

## 1. Top Skills Ranking
PRs are ranked by community engagement (comment volume, update recency, and functional impact, as explicit comment counts are marked undefined for all PRs). All listed PRs are **open**:

1. **[PR #1742: MCP Builder v2 Compatibility Fix](https://github.com/anthropics/skills/pull/1742)**
   - Functionality: Fixes breaking changes in `mcp>=2.0.0` for the MCP Builder skill, including the renamed `streamable_http_client` import and updated custom HTTP header configuration via `create_mcp_http_client`.
   - Discussion highlights: Addresses a widely reported compatibility issue (#1668) that broke MCP server connection workflows for users on the latest MCP SDK.
   - Status: Open, last updated 2026-10-08 (active maintenance).

2. **[PR #1298: Skill-Creator Trigger Eval Hardening](https://github.com/anthropics/skills/pull/1298)**
   - Functionality: Fixes false trigger evaluation misses for skill creators: resolves subprocess `select()` failures on Windows, per-worker command probe race conditions, and runtime failure misclassification.
   - Discussion highlights: Ties to multiple open issues about broken trigger evals on Windows and inaccurate skill scoring; long-running PR with iterative fixes.
   - Status: Open, last updated 2026-09-16.

3. **[PR #1771: ProofCore Contract Auditor Skill](https://github.com/anthropics/skills/pull/1771)**
   - Functionality: Web3-focused agent skill for automated static analysis of Solidity/Rust smart contracts, with cryptographic audit proofs anchored on the TON Blockchain via zero-storage Merkle protocol.
   - Discussion highlights: First blockchain-specific notarization skill submitted to the official repo; represents a niche but high-demand use case for Web3 developers.
   - Status: Open, last updated 2026-09-16.

4. **[PR #1245: Notion Spec to Implementation + Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)**
   - Functionality: Dual skill submission: (1) converts product/tech specs into actionable Notion tasks with implementation plans and acceptance criteria; (2) audits resumes against job descriptions with quantitative scoring.
   - Discussion highlights: One of the longest-standing active feature PRs; spans productivity and career tooling use cases.
   - Status: Open, last updated 2026-09-30.

5. **[PR #1961: Skill-Creator Eval Viewer Security Hardening](https://github.com/anthropics/skills/pull/1961)**
   - Functionality: Patches the `skill-creator` eval viewer against script breakout, DNS rebinding, cross-site POST, and escaping vulnerabilities in the local feedback server and HTML renderer.
   - Discussion highlights: Aligns with top community security concerns about untrusted skill/eval content; rapidly updated since submission in early October 2026.
   - Status: Open, last updated 2026-10-11 (most recently active top PR).

6. **[PR #822: AWT (AI Watch Tester) E2E Testing Skill](https://github.com/anthropics/skills/pull/822)**
   - Functionality: Zero-code end-to-end testing skill that gives Claude vision and browser control to automatically generate and run UI tests.
   - Discussion highlights: One of the most popular test automation skill submissions; addresses repeated demand for AI-native testing tools.
   - Status: Open, last updated 2026-09-19.

---

## 2. Community Demand Trends
Distilled from top-commented issues, the most requested skill and ecosystem directions are:
1. **Security & Trust Boundary Tooling**: The #1 most-discussed issue ([#492, 44 comments](https://github.com/anthropics/skills/issues/492)) highlights demand for skills that validate skill provenance, audit third-party skill permissions, and prevent impersonation of official Anthropic skills.
2. **Enterprise Collaboration Features**: [Issue #228 (16 comments, 8 👍)](https://github.com/anthropics/skills/issues/228) shows strong demand for org-wide skill sharing capabilities, including shared team skill libraries and direct share links to replace manual file transfer workflows.
3. **Skill Development & Evaluation Reliability**: Multiple top issues ([#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352), [#1383](https://github.com/anthropics/skills/issues/1383)) call for fixes to broken skill evaluation pipelines (zero trigger rates, Windows incompatibility, parallel worker race conditions) and better skill-creator tooling.
4. **Governance & Quality Control Skills**: Proposed skills like [agent-governance (#412)](https://github.com/anthropics/skills/issues/412) and the [Reasoning Quality Gate Pipeline (#1385)](https://github.com/anthropics/skills/issues/1385) reflect demand for skills that enforce output safety, audit trails, and multi-step quality checks for agent workflows.
5. **Context Efficiency Tooling**: Issues like [#1487 (claude-api context bloat)](https://github.com/anthropics/skills/issues/1487) and the proposed [compact-memory skill (#1329)](https://github.com/anthropics/skills/issues/1329) show demand for skills that reduce token usage and optimize agent memory for long-running sessions.

---

## 3. High-Potential Pending Skills
These active, recently updated PRs are likely to land soon based on maintenance velocity and alignment with core ecosystem priorities:
1. **[PR #1730: Claude-Api Dead URL Fix](https://github.com/anthropics/skills/pull/1730)** - Low-risk documentation fix for 404 links in academy and tool-use guides, fully validated and open since September 2026.
2. **[PR #1792: DOCX LibreOffice Timeout Error Handling](https://github.com/anthropics/skills/pull/1792)** - Bug fix for the DOCX skill that correctly reports `soffice` timeouts as errors and verifies output revision mark removal; scoped and well-tested.
3. **[PR #1980: Webapp-Testing Shell Injection Fix](https://github.com/anthropics/skills/issues/1980)** - Security patch removing `shell=True` in subprocess calls to fix CWE-78 command injection risks; high-priority security fix.
4. **[PR #1681: Skill-Creator Direct Script Execution Support](https://github.com/anthropics/skills/pull/1681)** - Fixes `ModuleNotFoundError` for standalone `package_skill.py` execution and updates documentation paths; aligned with skill-creator reliability priorities.
5. **[PR #1703: md2video-audio Skill](https://github.com/anthropics/skills/pull/1703)** - Zero-cost Markdown-to-video skill with human-like voiceovers; fills a content creation gap with minimal external dependency risk.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **improved reliability, security, and collaboration infrastructure for the skill platform itself** — including hardened skill creation/evaluation tools, trust boundaries for third-party skills, and enterprise-grade sharing features — alongside niche high-value skills for vertical use cases like smart contract auditing and end-to-end testing.

---

# Claude Code Community Digest | 2026-10-12

---

## 1. Last 7 Days' Highlights
This week, Claude Code shipped 7 patch releases (v2.1.290–v2.1.296) introducing Claude Haiku 5.5 as the default Haiku model, enhanced gateway policy controls for Claude Desktop, stricter hook failure handling, and critical fixes for session data loss and hook enforcement bugs. The community also drove active discussions around standard skill directory support, cost optimization for idle sessions, and safety filter false positives blocking legitimate development work.

---

## 2. Releases
A total of 7 new versions were released in the past 7 days, with key changes as follows:
- **v2.1.296**: Added a `code` key to the Claude apps gateway's `managed.policies[]` (mirrors `cli` settings, enables Claude Desktop gateway mode alongside the `desktop` key); added `autoCompactWindow` support for subagent frontmatter and `--agents` definitions.
- **v2.1.295**: Added `onFailure: "block"` option for command/HTTP hooks (failed hooks block the associated action instead of allowing it); added Program Status Protocol (OSC 7501) support for compatible terminals to display Claude Code status.
- **v2.1.294**: Fixed a bug where instruction-form `prompt` and `agent` hooks (e.g., "Block commands that...") allowed actions they were supposed to block; improved judgment logic for instruction-based `prompt` hooks on Stop/SubagentStop events to reduce misbehavior.
- **v2.1.293**: Launched Claude Haiku 5.5 (`claude-haiku-5-5`) as the default Haiku model (1M context window, $0.10/$0.50 per 1M tokens; $0.50/$2.50 for prompts over 100K tokens); added `agentType` to the `subagentStatusLine` payload for custom subagent type identification.
- **v2.1.292**: Added `--marketplace <source>` flag to `claude plugin install` (auto-adds the marketplace under existing policy checks before installing); added an `effort` parameter to the Agent tool for sub-agent effort level control.
- **v2.1.291**: Fixed a v2.1.290 regression where cloud sessions dropped answers to permission prompts; fixed a v2.1.288 regression where the last messages of a session could be lost on quit.
- **v2.1.290**: Added `serverToolUses` to the result of a mod's `turn.step` hook (exposes advisor-side tool call details including ID, name, input, and timestamps); added `agentId` to the `tool.check` plugin hook event for distinguishing subagent permission checks from main agent checks.

---

## 3. Hot Issues
1. **#16345 [Feature Request] Support the standard .agents/skills/ directory for agent skills**  
   *Status: Open | 👍 58 | Comments: 30*  
   The highest-engaged request this week, asking for native support for the industry-standard `.agents/skills/` directory (per agentskills.io) alongside the current `.claude/skills/` path. It matters for cross-tool skill portability and has broad community backing.  
   🔗 [anthropics/claude-code#16345](https://github.com/anthropics/claude-code/issues/16345)

2. **#66115 Feature request: auto-compact on idle timeout to prevent cache expiry cost**  
   *Status: Open | 👍 21 | Comments: 16*  
   Requests automatic context compaction when a session is idle for a configurable period, to avoid prompt cache expiry (~5 minutes) that forces full reprocessing of context on the next turn. This is a top cost and performance optimization request for long-running sessions.  
   🔗 [anthropics/claude-code#66115](https://github.com/anthropics/claude-code/issues/66115)

3. **#27665 [FEATURE] Intelligent Model Routing**  
   *Status: Open | 👍 24 | Comments: 14*  
   A consolidated request noting that 93.8% of Max subscriber tokens are routed to Opus with no automatic optimization, calling for smart model selection based on task complexity to reduce costs. It unites 30+ related feature requests.  
   🔗 [anthropics/claude-code#27665](https://github.com/anthropics/claude-code/issues/27665)

4. **#87500 [BUG] API Error: Connection dropped (ECONNRESET) on Windows**  
   *Status: Closed | Comments: 17*  
   A widely reported Windows networking bug causing persistent connection drops to the Anthropic API. Its resolution addresses a common reliability pain point for Windows users.  
   🔗 [anthropics/claude-code#87500](https://github.com/anthropics/claude-code/issues/87500)

5. **#98134 [BUG] Active Apple Max 20x subscription still recognized as Pro**  
   *Status: Open | Comments: 9*  
   A critical auth bug on macOS where active Max subscriptions are incorrectly detected as Pro tiers, blocking access to Max-exclusive features. It impacts billing and core feature access for Apple platform users.  
   🔗 [anthropics/claude-code#98134](https://github.com/anthropics/claude-code/issues/98134)

6. **#101188 [BUG] Rewind fails to restore but overwrites 20h of edits / deletes files**  
   *Status: Open | Comments: 2*  
   A high-severity data loss bug on Windows where the rewind/restore feature reports failure but still modifies files on disk without rewinding the conversation. It poses serious risk to user work.  
   🔗 [anthropics/claude-code#101188](https://github.com/anthropics/claude-code/issues/101188)

7. **#98565 [FEATURE] Desktop sidebar: "last activity" filter for folder-grouped sessions**  
   *Status: Open | 👍 4 | Comments: 2*  
   Requests extending the existing last-activity session filter to work when the sidebar is grouped by folder, to prevent unlimited session accumulation for heavy users. It improves desktop UI usability for power users.  
   🔗 [anthropics/claude-code#98565](https://github.com/anthropics/claude-code/issues/98565)

8. **#101410 [Bug][cyber] False positive blocking drone telemetry parsing**  
   *Status: Open | Comments: 1*  
   Part of a cluster of 6+ new cybersecurity safety filter false positive reports this week, all blocking legitimate hardware/software debugging work (drone telemetry, mobile app builds, USB security key troubleshooting) and halting sessions entirely.  
   🔗 [anthropics/claude-code#101410](https://github.com/anthropics/claude-code/issues/101410)

9. **#89723 [BUG] Plugin subagents ignore `model:` frontmatter**  
   *Status: Open | Comments: 1*  
   A plugin ecosystem bug where `model:` frontmatter in plugin-shipped subagents is ignored (works correctly for project-level agents). It prevents plugin authors from controlling costs or model selection for their tools.  
   🔗 [anthropics/claude-code#89723](https://github.com/anthropics/claude-code/issues/89723)

10. **#101420 [BUG] StopFailure command hooks are killed 10–50ms after firing**  
    *Status: Open | Comments: 0*  
    A regression present since v2.1.246 (still in v2.1.296) where headless-mode `StopFailure` command hooks spawning external processes are torn down before completion. It breaks post-failure cleanup and logging workflows.  
    🔗 [anthropics/claude-code#101420](https://github.com/anthropics/claude-code/issues/101420)

---

## 4. Key PR Progress
1. **#41447 feat: open source claude code ✨**  
   *Status: Open*  
   A landmark PR proposing full open-sourcing of Claude Code, closing 5 long-standing community requests. It represents the most-requested governance change in the repository's history.  
   🔗 [anthropics/claude-code#41447](https://github.com/anthropics/claude-code/pull/41447)

2. **#85716 fix(hookify): load rules from ancestor .claude directories to prevent silent bypass**  
   *Status: Closed*  
   Fixes a critical security flaw in the hookify plugin where subdirectory projects would silently bypass parent-directory security rules, addressing #85613.  
   🔗 [anthropics/claude-code#85716](https://github.com/anthropics/claude-code/pull/85716)

3. **#84711 fix(security): address yaml injection and symlink credential overwrites in plugin scripts**  
   *Status: Closed*  
   Patches two high-severity plugin security vulnerabilities: YAML injection in plugin configuration and symlink-based credential file overwrites, fixing #76580.  
   🔗 [anthropics/claude-code#84711](https://github.com/anthropics/claude-code/pull/84711)

4. **#84364 fix(hookify): fail closed on exceptions in pretooluse hook**  
   *Status: Closed*  
   Fixes a vulnerability where exceptions in hook rule evaluation (e.g., import errors) would allow tool execution by default; now fails closed with a deny decision to enforce security guarantees.  
   🔗 [anthropics/claude-code#84364](https://github.com/anthropics/claude-code/pull/84364)

5. **#100293 Add HIPAA settings example to examples/settings**  
   *Status: Closed*  
   Adds sample `settings-hipaa.json`, `managed-mcp-hipaa.json`, and accompanying documentation for organizations with HIPAA configurations, showing how to restrict session data exfiltration from developer devices.  
   🔗 [anthropics/claude-code#100293](https://github.com/anthropics/claude-code/pull/100293)

6. **#96434 security-guidance: keep denied and secret files out of the reviewer's reach**  
   *Status: Open*  
   Updates the security-guidance review workflow to respect `Read` deny/ask rules and exclude known secret files (`.env`, keys, credential stores) from review scope, with an opt-out environment variable.  
   🔗 [anthropics/claude-code#96434](https://github.com/anthropics/claude-code/pull/96434)

7. **#79150 docs: align code-review README with the current validation-based command**  
   *Status: Open*  
   Fixes outdated code-review documentation that described a deprecated pipeline (git blame agent, 0-100 confidence scoring) that no longer matches the current implementation.  
   🔗 [anthropics/claude-code#79150](https://github.com/anthropics/claude-code/pull/79150)

8. **#82320 Fix examples/gateway/aws/setup.sh aborting on stock macOS bash 3.2**  
   *Status: Open*  
   Fixes a compatibility issue where the AWS gateway setup script uses bash 4 syntax that fails on the default macOS bash 3.2, preventing setup from running on stock Mac systems.  
   🔗 [anthropics/claude-code#82320](https://github.com/anthropics/claude-code/pull/82320)

9. **#85323 fix(plugin-dev): parse block scalar agent descriptions**  
   *Status: Open*  
   Fixes a YAML parsing bug in `validate-agent.sh` where multiline block-scalar agent descriptions (`|` / `>` syntax) were not properly read, causing validation failures for valid plugin agents.  
   🔗 [anthropics/claude-code#85323](https://github.com/anthropics/claude-code/pull/85323)

10. **#19084 fix(ralph-wiggum): Add Windows compatibility for stop hook**  
    *Status: Closed*  
    Adds Windows support for the ralph-wiggum plugin's stop hook, which previously failed due to a hardcoded `/bin/bash` shebang incompatible with Windows/WSL environments.  
    🔗 [anthropics/claude-code#19084](https://github.com/anthropics/claude-code/pull/19084)

---

## 5. Hot Discussions
*No discussion data provided in this week's dataset. This section is omitted.*

---

## 6. Feature Request Trends
1. **Ecosystem standardization**: The most requested direction is alignment with the Agent Skills standard (`.agents/skills/` directory) and configurable skill storage paths, enabling cross-tool skill portability and shared skill libraries across AI developer tools.
2. **Cost optimization**: Multiple requests target reducing token spend, including idle auto-compaction to prevent cache expiry, configurable context compaction models (using cheaper models for summarization), and intelligent task-based model routing to avoid overusing high-tier models for simple work.
3. **Desktop UI/UX improvements**: Power users are pushing for better session management, including last-activity filters for folder-grouped sessions, and expanded functionality for the Claude Agents view (e.g., creating new sessions directly in the view).
4. **Plugin & subagent flexibility**: Requests for enhanced plugin capabilities, including honoring subagent model frontmatter in plugins, easier marketplace-based plugin installation, and more granular control over subagent behavior (effort levels, window settings).

---

## 7. Developer Pain Points
1. **Safety filter false positives**: A large cluster of cybersecurity filter false positives are halting legitimate development work (drone telemetry analysis, mobile app debugging, hardware security key troubleshooting), with silent fallback to older models often insufficient to unblock sessions.
2. **Windows platform reliability**: Persistent Windows-specific bugs remain a top frustration, including API connection drops, MCP connector approval failures, and the high-severity rewind data loss bug.
3. **Hook reliability & correctness**: Multiple hook-related defects are breaking developer workflows: instruction-based hooks failing to enforce rules, StopFailure hooks being prematurely killed in headless mode, and hookify plugin security rules being silently bypassed in subdirectories.
4. **Auth & subscription detection bugs**: Cross-platform auth issues (Apple Max subscription misdetection, stale MCP connector auth status) are causing users to lose access to paid features or see incorrect system statuses.
5. **Data loss risks**: Two critical session/editor data loss regressions (dropped permission prompt answers, lost session messages on quit) were patched this week, but the new rewind overwrites bug highlights ongoing risk of unintended file modification.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-10-12
Data source: [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. Last 7 Days' Highlights
This week saw the stable release of Codex Rust CLI v0.162.0 with managed Git worktree and agent Command Center pinning features, plus a v0.162.1 patch fixing critical TUI crash and startup compatibility bugs. Windows platform issues dominated community feedback, with widespread reports of sandbox, browser tool, and clipboard failures, while TUI usability and cross-device sync remained top feature request priorities.

---

## 2. Releases
### Stable Channel
- **[rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)** (patch)
  - Fixed TUI crash when asynchronous questions contain multiple lines, preserving line breaks and complete hyperlink destinations (#51866)
  - Fixed startup failures caused by mismatched feature settings between running background servers and CLI defaults, via new compatibility checks
- **[rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0)** (minor)
  - Added tools for creating and listing managed Git worktrees from trusted local projects (when the `worktrees` feature is enabled, #50148)
  - Added task pinning in the agent Command Center via the `p` key, with tasks stored in a shared Pinned group when server-supported (#51500)
  - Added TUI turn tip navigation and copying functionality (partial release notes)

### Alpha Channel
4 pre-release builds for v0.163.0 were published: [alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1), [alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2), [alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.4), [alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5), with incremental stability and feature iteration. 3 additional alpha builds for v0.162.0 were also finalized in the release cycle.

---

## 3. Hot Issues
| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|--------------------|
| [#36040 iOS Remote only lists projects with recent chats](https://github.com/openai/codex/issues/36040) | Open | Regression breaking iOS remote control core functionality for users who rely on mobile access to desktop Codex instances | 77 comments, 5 👍 — highest engagement this week, with multiple users confirming reproducibility across iOS/macOS pairings |
| [#35446 Windows 10 Computer Use deadlocks on SoftwareBitmap conversion](https://github.com/openai/codex/issues/35446) | Open | Critical stability issue for Windows Computer Use users, causing complete feature lockup during screen capture | 25 comments — multiple Windows 10 22H2 users report identical deadlock behavior |
| [#50526 Desktop Guardian experiment reintroduces deprecated thread_context](https://github.com/openai/codex/issues/50526) | Open | Configuration drift bug where deprecated settings persist despite clean config files, causing confusing warning prompts | 23 comments, 9 👍 — high upvote count indicates widespread user frustration with misleading config alerts |
| [#5538 CLI input message disappears during model response](https://github.com/openai/codex/issues/5538) | Closed | Long-standing TUI data loss bug resolved after nearly 12 months of user reports | 21 comments, 12 👍 — highly upvoted historical issue, closure welcomed by the community |
| [#40125 Windows create_thread downgrades Full Access worktree children to managed approval mode](https://github.com/openai/codex/issues/40125) | Open | Permission regression breaking trusted worktree workflows, forcing repeated manual approval for subagent tasks | 21 comments, 4 👍 — enterprise and Pro users report significant workflow disruption |
| [#49829 Dot tasks fail to open in desktop when cloud WebSocket requires proxy](https://github.com/openai/codex/issues/49829) | Open | Connectivity gap for enterprise/proxy users, where Dot workflows work on web but fail on desktop clients | 18 comments, 3 👍 — confirmed across multiple corporate network environments |
| [#7829 Escape sequences inserted when typing prompts in TUI](https://github.com/openai/codex/issues/7829) | Closed | Resolved input corruption bug that affected terminal emulator compatibility | 15 comments, 6 👍 — users with custom terminal setups report the fix resolves longstanding input issues |
| [#40565 macOS workspace sandbox denies directory rename/removal in writable workspaces](https://github.com/openai/codex/issues/40565) | Open | Sandbox permission overreach preventing basic file operations in user-trusted workspaces | 9 comments, 8 👍 — high upvote ratio indicates strong demand for sandbox granularity improvements |
| [#53098 Windows HiDPI mouse wheel dead zone in fullscreen TUI](https://github.com/openai/codex/issues/53098) | Open | Usability regression on high-DPI Windows displays, breaking scrolling in the new fullscreen TUI | 8 comments — reported on 225% scaling setups via Windows Terminal SSH |
| [#53203 Windows v26.1007 response/compaction failures in long conversations](https://github.com/openai/codex/issues/53203) | Open | Recent update regression causing stream disconnections that block work on long-running projects | 3 comments — emerging issue with multiple users reporting immediate impact after upgrading |

---

## 4. Key PR Progress
All PRs listed were merged/closed in the last 7 days:
1. **[#52990 Add searchable `/config` preferences panel to the TUI](https://github.com/openai/codex/pull/52990)**  
   Major feature: grouped preference tabs (Appearance, Notifications, Input, Sessions, Text selection) with search functionality, and persistent preference saving to user config.
2. **[#53224 Support Windows clipboard text paste shortcuts in the TUI](https://github.com/openai/codex/pull/53224)**  
   Fix: `Ctrl+V` now correctly pastes text (instead of only attempting image paste) and `Shift+Insert` uses the standard clipboard paste path on Windows.
3. **[#53173 Allow restarting managed background servers from the TUI](https://github.com/openai/codex/pull/53173)**  
   Feature: in-TUI background server restart with confirmation dialog, eliminating the need to exit the TUI to apply configuration changes.
4. **[#52972 Upgrade `rmcp` to 3.5.1 and harden lifecycle tests](https://github.com/openai/codex/pull/52972)**  
   Dependency update: migrated MCP handlers to the new `ClientConfig`/`ServerConfig` API, with improved cancellation test reliability.
5. **[#52967 Reuse and prewarm the WSL clipboard text reader](https://github.com/openai/codex/pull/52967)**  
   Performance fix: replaced per-paste PowerShell process spawns with a persistent dedicated reader thread, eliminating WSL clipboard hangs.
6. **[#53150 Restore thread-owned permissions on cold resume](https://github.com/openai/codex/pull/53150)**  
   Permission fix: ensures thread-specific permission settings are preserved when resuming cold sessions, instead of being overwritten by global defaults.
7. **[#52946 Keep agent command center rows stable across progress updates](https://github.com/openai/codex/pull/52946)**  
   UX improvement: maintains task order within the same status group during progress updates, preventing rows from jumping around due to timestamp changes.
8. **[#52937 Retain client-marked tool outputs across compaction](https://github.com/openai/codex/pull/52937)**  
   Feature: adds a `retain_tool_outputs_across_compaction` config flag (off by default) to preserve client-supplied tool outputs marked with `retain: true` during conversation compaction.
9. **[#53155 Keep remote app-server events deliverable during shutdown](https://github.com/openai/codex/pull/53155)**  
   Stability fix: prevents WebSocket close frames from being dropped during shutdown by keeping the event receiver alive until the client fully disconnects.
10. **[#53152 Allow selecting and copying TUI turn tips](https://github.com/openai/codex/pull/53152)**  
    UX improvement: enables mouse selection and copying of turn tip text, which was previously non-interactive outside transcript history.

---

## 5. Hot Discussions
### Ideas
1. **[#592 Image Generation for Web Projects](https://github.com/openai/codex/discussions/592)** (112 👍, 14 comments)  
   Top-voted longstanding request: integrate GPT-4o image generation into Codex CLI to auto-create placeholder and production images for web development workflows.
2. **[#14067 Cross-device Codex thread/session sync](https://github.com/openai/codex/discussions/14067)** (67 👍, 13 comments)  
   High-demand feature for users working across multiple machines, who want seamless context and thread continuity between devices.
3. **[#1327 Support for Jujutsu (jj) VCS](https://github.com/openai/codex/discussions/1327)** (27 👍, 1 comment)  
   Growing demand for compatibility with the Git-compatible Jujutsu version control system, beyond current Git-only workflows.
4. **[#14595 Remote control feature roadmap](https://github.com/openai/codex/discussions/14595)** (18 👍, 7 comments)  
   Users ask for official remote control functionality comparable to Claude Code, citing poor third-party workaround reliability.

### Q&A
1. **[#2251 Codex Usage Limits parity with ChatGPT Plus](https://github.com/openai/codex/discussions/2251)** (57 👍, 59 comments)  
   Most-engaged discussion: ongoing questions about whether ChatGPT Plus's 3000/week thinking limit applies identically to Codex usage.
2. **[#8503 "Usage limit reached" despite 100% Code Review quota remaining](https://github.com/openai/codex/discussions/8503)** (13 👍, 28 comments)  
   Widespread confusion about GitHub Connector quota reporting mismatches, with users unable to use code review features despite available quota.
3. **[#53079 Building reliable full-stack dev workflows with Codex](https://github.com/openai/codex/discussions/53079)** (1 👍, 3 comments)  
   Popular new discussion: users seek best practices for combining AI-assisted coding with professional workflows like feature branching and code review.

### Show and tell
1. **[#35149 Two free 3D multiplayer game Codex skills](https://github.com/openai/codex/discussions/35149)** (2 👍, 2 comments)  
   Community-contributed skills for networking synchronization and game-ready GLB asset generation, built for 3D game development workflows.
2. **[#51406 "No Comment" PostToolUse hook](https://github.com/openai/codex/discussions/51406)** (1 👍, 2 comments)  
   Popular community hook that automatically removes AI-generated narrating comments from code, addressing a frequent user complaint about verbose comment output.
3. **[#46874 Agent Lint: open-source linter for Codex configs](https://github.com/openai/codex/discussions/46874)** (1 👍, 2 comments)  
   Widely shared tool that validates `.codex/`, `AGENTS.md`, MCP, and other AI agent configuration files for correctness.

---

## 6. Feature Request Trends
1. **Cross-device & remote experience improvements**: Consistent demand for reliable remote control, multi-machine session sync, and mobile remote feature parity with desktop clients.
2. **Expanded VCS support**: Growing calls for Jujutsu (jj) compatibility across CLI, desktop review panes, and worktree features, beyond current Git-only functionality.
3. **Memory & cross-session context**: Users want built-in memory features that retain preferences, project context, and decision history across threads, plus transparency about when prior threads are referenced.
4. **Integrated media generation**: High interest in native image (and increasingly video) generation support within Codex workflows, particularly for web and game development.
5. **Enhanced sandbox granularity**: Requests for finer-grained workspace permission controls, to avoid over-restrictive sandboxing that blocks basic file operations in trusted directories.

---

## 7. Developer Pain Points
1. **Windows platform instability**: The highest volume of open bugs are Windows-specific, including sandbox provisioning failures, browser tool initialization errors, clipboard paste issues, HiDPI TUI glitches, and Computer Use deadlocks.
2. **Quota & usage reporting confusion**: Widespread reports of mismatched usage counters, false "limit reached" errors, and unclear parity between ChatGPT subscription limits and Codex feature access.
3. **Configuration drift and misleading warnings**: Users report persistent deprecated setting warnings (e.g., Guardian `thread_context`) even after removing the relevant config entries, causing troubleshooting friction.
4. **Connectivity & proxy compatibility**: Enterprise and proxy-network users face consistent failures with Dot task resumption, cloud WebSocket connections, and GitHub integration in managed environments.
5. **TUI regression and usability gaps**: Recent fullscreen TUI rollout introduced new bugs (input disappearance, scroll dead zones, paste corruption) alongside unmet accessibility and shortcut parity needs across platforms.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-10-12

---

## 1. Last 7 Days' Highlights
This week saw the rollout of v0.64.0-preview.1 and a steady stream of v0.65.0 nightly builds, with core fixes focused on error handling, session integrity, and workspace security. The community surfaced high-priority agent stability bugs (hangs, incorrect success reporting) and pushed for improved subagent observability and sandboxed bash execution, while maintainers landed notable security hardening patches for path traversal and environment variable leaks.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.65.0-nightly.20261012.g9b6e0265d](https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d) | Nightly | Incremental build; full changelog linked |
| [v0.65.0-nightly.20261010.g9b6e0265d](https://github.com/google-gemini/gemini-cli/pull/29658) | Nightly | Fixed JSON parse / stream errors in `fetchJson`; preserved line terminators in `truncateString` |
| [v0.64.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29696) | Preview | Cherry-pick patch release for v0.64.0-preview.0 |
| [v0.65.0-nightly.20261008.g44d764ee5](https://github.com/google-gemini/gemini-cli/pull/29609) | Nightly | Fixed CI unassign workflow loop; enforced terminal user turn invariant |
| [v0.65.0-nightly.20261007.gef59c532f](https://github.com/google-gemini/gemini-cli/pull/29583) | Nightly | Enforced read-only workspace settings in untrusted folders; eliminated duplicate tool response turns on session resume |
| [v0.64.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/29450) | Preview | Implemented A2A server V1→V2 settings migration; bridged `PromptResponse.usage` with `usage_update` notifications |
| [v0.63.0](https://github.com/google-gemini/gemini-cli/pull/29468) | Stable | Added retry progress indicator during connection recovery |

---

## 3. Hot Issues
1. **[#18186 Workspace policy files not taking effect](https://github.com/google-gemini/gemini-cli/issues/18186)** — Long-standing enterprise bug (P3, 18 comments, 16 👍) where `.gemini/policies/*.toml` are ignored. High community engagement indicates broad impact for organization rollouts.
2. **[#22323 Subagent recovery reports false GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 agent bug: `codebase_investigator` masks hit turn limits as successful completion. Critical for reliability of agentic workflows.
3. **[#19873 Zero-dependency OS sandboxing for native bash execution](https://github.com/google-gemini/gemini-cli/issues/19873)** — Major enhancement proposal to leverage Gemini 3's bash affinity while preserving security via sandboxing and intent routing. Shapes long-term agent execution model.
4. **[#25283 OAuth/policy error blocks all basic tool usage](https://github.com/google-gemini/gemini-cli/issues/25283)** — *Closed* P1 security issue where "Tool execution denied by policy" blocked all file/shell operations. Resolution of a widely reported blocker.
5. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** — P1 bug with 8 👍: agent hangs on simple tasks like folder creation; workaround is to disable subagent delegation. Top user pain point.
6. **[#22745 AST-aware file reads / search / mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — EPIC tracking investigation into AST-aware tools for more precise code navigation, reduced token noise, and fewer turns. High strategic value for codebase agents.
7. **[#21968 Gemini underuses custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)** — User-reported behavior gap: model only invokes custom skills (e.g. gradle, git) when explicitly instructed. Limits value of custom agent ecosystems.
8. **[#29574 400 error when reading images via ReadFile tool](https://github.com/google-gemini/gemini-cli/issues/29574)** — Recent P2 bug: agentic sessions break with "Requests ending with a model turn are not supported" when inspecting images. Active investigation.
9. **[#22267 Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** — P2 bug: `maxTurns` and other settings are not honored by the browser agent, breaking user configuration expectations.
10. **[#20079 Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** — P2 bug: agent markdown files in `~/.gemini/agents/` are ignored if they are symlinks, disrupting dotfile and shared configuration setups.

---

## 4. Key PR Progress
1. **[#29521 Contain legacy checkpoint paths](https://github.com/google-gemini/gemini-cli/pull/29521)** — *Security fix*: prevents path traversal via checkpoint tags (e.g. `x/../../secret`) that could write files outside the checkpoint directory.
2. **[#29522 Keep glob tool matches inside validated directory](https://github.com/google-gemini/gemini-cli/pull/29522)** — *Security fix*: blocks absolute glob patterns from escaping the search directory, which could read arbitrary filesystem paths.
3. **[#29523 Minimal env and capped output for external safety checkers](https://github.com/google-gemini/gemini-cli/pull/29523)** — *Security fix*: strips secrets like `GEMINI_API_KEY` from checker spawn environments and caps stdout to prevent memory exhaustion.
4. **[#29527 Ensure requests don't end with a model turn](https://github.com/google-gemini/gemini-cli/pull/29527)** — *Core fix*: resolves 400 Bad Request errors after `/rewind`, stream interruptions, or empty trailing user turns.
5. **[#29626 Preserve shared references in JSON serialization](https://github.com/google-gemini/gemini-cli/pull/29626)** — *Core fix*: `safeJsonStringify` no longer incorrectly marks non-circular shared references (e.g. OTel metrics objects) as `[Circular]`.
6. **[#29629 Cap pending plain text height to reduce streaming flicker](https://github.com/google-gemini/gemini-cli/pull/29629)** — *UX/performance*: limits MarkdownDisplay height during streaming to eliminate full-screen redraw flicker.
7. **[#29510 Harden Windows subprocess argument quoting](https://github.com/google-gemini/gemini-cli/pull/29510)** — *Security fix*: prevents command injection on Windows in diff editor invocations via proper shell argument escaping.
8. **[#29708 Finish session/load history replay before responding](https://github.com/google-gemini/gemini-cli/pull/29708)** — *ACP fix*: ensures `session/load` response is sent only after full history replay, complying with ACP spec and fixing out-of-order updates.
9. **[#29517 Linearize array reconstruction in truncateHistoryToBudget](https://github.com/google-gemini/gemini-cli/pull/29517)** — *Performance*: replaces O(n²) `unshift()`-based reordering with linear reconstruction for history truncation.
10. **[#29664 Bump npm dependencies (74 updates)](https://github.com/google-gemini/gemini-cli/pull/29664)** — *Dependency update*: major batch including `@modelcontextprotocol/sdk` 1.23.0 → 1.32.0 and other core packages.

---

## 5. Hot Discussions
*(No discussion data provided — section omitted)*

---

## 6. Feature Request Trends
1. **Sandboxed native bash execution** — Strong interest in letting the model use POSIX tools directly while maintaining security (see #19873).
2. **AST-aware code navigation** — Demand for smarter, token-efficient file reads and codebase mapping using AST tools (#22745, #22746).
3. **Improved subagent observability & control** — Users want visible subagent trajectories via `/chat share` (#22598), better bug report context (#21763), and configurable limits (#22267).
4. **Agent self-awareness** — Requests for the CLI to accurately document its own flags, hotkeys, and execution behavior (#21432).
5. **Token-frugal reading strategies** — Interest in hierarchical "tactful extraction" to reduce context bloat (#19561).

---

## 7. Developer Pain Points
1. **Agent reliability gaps** — Hangs (#21409), false success reporting (#22323), and interactive prompt deadlocks (#22465) erode trust in agentic workflows.
2. **Configuration inconsistencies** — Policies not applying (#18186), settings being ignored by sub-agents (#22267), and symlink support gaps (#20079) break expected behavior.
3. **Security & trust concerns** — Destructive operations without guardrails (#22672), random tmp script creation (#23571), and past policy enforcement bugs (#25283) create workspace risk.
4. **UX/performance friction** — Terminal resize flicker (#21924), streaming redraws (#29629), and escape sequence handling bugs (#22466) degrade interactive use.
5. **Custom skill / subagent discoverability** — Models fail to autonomously invoke user-defined skills and sub-agents (#21968), reducing the value of extensibility.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-10-12
Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Last 7 Days' Highlights
Over the past week, the Copilot CLI team shipped 8 patch releases (v1.0.94 through v1.0.96-2) focused on sandbox experience, authentication hardening, and model configuration quality — including native Microsoft Entra broker support on macOS and case-insensitive model ID handling. The community filed 50 updated issues, with top concerns around MCP authentication persistence, long-running session stability, and permission system edge cases. Only 3 community PRs were opened this cycle, with the most substantive being a fix for the install script’s checksum verification logic.

---

## 2. Releases
### v1.0.96-2 (latest)
**Fixed:** Model IDs in `/model` and `/config model` are now case-insensitive, and canonical IDs are saved to storage.
### v1.0.96-1
**Added:** Interactive sandbox settings now suggest possible environment secrets and let users add masking hosts before saving.  
**Fixed:** `/allow-all` remains available during startup while enterprise policy is still resolving.
### v1.0.96-0
**Improved:** Interactive sessions in git repositories reach the input prompt sooner; the timeline now shows who/what made each permission decision (user, Assisted Permissions, policy, or unattended fallback).  
**Fixed:** `/add-dir` now correctly grants sandbox access to added directories for the current session; fixed a `/user` command bug.
### v1.0.95 (2026-10-09)
**Highlights:** Native Microsoft Entra broker authentication on macOS (with browser fallback); `copilot config` supports sandbox credential `injectHosts` keys with shell completion (Bash/Zsh/Fish); `--context` now properly applies to new and resumed ACP sessions.
### v1.0.94 (2026-10-08)
**Highlights:** Added Claude Haiku 5.5 to model selection and `--model` completions; improved MCP `add` recovery after interrupted initialization; MCP enable/disable now works before server discovery without starting servers.

---

## 3. Hot Issues (Top 10 by impact & engagement)
1. **#1953 — Always visible context window status** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/1953)  
   The highest-upvoted open feature request (11 👍). Users want persistent context-usage display (similar to rate-limit counters) to avoid silent performance degradation near context-window limits. Touches core UX for power users.

2. **#2536 — Atlassian MCP needs re-authorization on every CLI invocation** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/2536)  
   Top MCP pain point (3 👍). Credential persistence for third-party MCP servers is broken, forcing repeated login — a blocker for enterprise MCP adoption.

3. **#3081 — NixOS keychain support is broken** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/3081)  
   High-impact platform gap (3 👍). Copilot fails to access the system keychain on NixOS despite libsecret/Keyring being installed, breaking token storage for an entire Linux distribution ecosystem.

4. **#4946 — HTTP 400 `content[].thinking` after background shell completion** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/4946)  
   Most-commented active bug (7 comments). A background shell command completing across turn boundaries triggers a malformed thinking payload, causing API errors. Breaks the core async execution flow.

5. **#4686 — Node.js OOM crash after ~37 min (leaked async libuv handles)** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/4686)  
   Critical stability issue: long-running sessions consistently crash with heap exhaustion due to handle leaks in the SEA-bundled Node runtime. Blocks production/long-task usage.

6. **#3755 — Reasoning display garbles streamed text with duplicated chunks** [closed]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/3755)  
   High-visibility rendering bug (2 👍, 6 comments). Streaming reasoning output showed duplicated/overlapping text. Closed this week — a quality win for the `showReasoning` feature.

7. **#2494 — `copilot login` auto-enters keychain y/N prompt (regression)** [closed]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/2494)  
   Most-commented issue this cycle (12 comments). A long-standing auth regression where the CLI skipped user confirmation on keychain prompts. Closed after 6 months of reports.

8. **#5076 — `/add-dir` does not add to sandbox allow list** [closed]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/5076)  
   Directly addressed in v1.0.96-0. Users reported the command had no effect on current-session sandbox permissions — a core sandbox usability bug.

9. **#5094 — Windows desktop app 1.1.27+ bundled git cannot spawn (Access denied)** [open]  
   [🔗 Link](https://github.com/github/copilot-cli/issues/5094)  
   Newly reported Windows regression breaking all project registration due to permission errors on the bundled git binary. Affects all Windows users on recent desktop builds.

10. **#5049 — Computer Use plugin unavailable in ACP mode on Windows** [open]  
    [🔗 Link](https://github.com/github/copilot-cli/issues/5049)  
    Parity gap: the Computer Use plugin works in interactive CLI but is unavailable in ACP/stdio mode on Windows, blocking automated agent use cases.

---

## 4. Key PR Progress
Only 3 PRs were updated in the last 7 days; all are open and pending review:

1. **#5093 — install: verify the checksum entry matching the downloaded tarball**  
   [🔗 Link](https://github.com/github/copilot-cli/pull/5093)  
   Fixes two flaws in the install script’s checksum logic: vacuous verification via `--ignore-missing`, and missing validation that the downloaded tarball’s hash is actually present in the checksum file. Critical for supply-chain security.

2. **#5106 — Create index.html**  
   [🔗 Link](https://github.com/github/copilot-cli/pull/5106)  
   Appears to be an off-topic or test PR adding a standalone HTML file; no clear relevance to the CLI codebase.

3. **#5046 — Initial commit**  
   [🔗 Link](https://github.com/github/copilot-cli/pull/5046)  
   Empty/initial PR with no description or substantive changes provided.

---

## 5. Hot Discussions
*No discussion data was provided in this cycle’s dataset.*

---

## 6. Feature Request Trends
From the week’s issue activity, three clear feature directions emerge:
1. **Better observability & UI affordances** — Persistent context-window status (#1953), visual distinction between user input and assistant output (#2746), and customizable identity display in the footer (#4666) all point to demand for more transparent, scannable interfaces.
2. **Expanded plugin/automation APIs** — Requests for tool-callable `cwd` (#3035) and broader ACP-mode parity for plugins like Computer Use (#5049) show users want to build custom agentic workflows on top of the CLI’s plugin system.
3. **MCP ecosystem maturity** — Persistent auth for third-party MCPs (#2536), protocol compliance fixes (#5079), and the already-shipped `copilot mcp` subcommand (#590) confirm MCP management is a top area of user investment.

---

## 7. Developer Pain Points
Recurring frustrations from this week’s issues:
1. **Authentication & credential fragility** — From keychain regressions (#2494, #3081) to MCP re-auth loops (#2536) to Entra edge cases, auth is the single most common source of breakage reports.
2. **Sandbox & permission system edge cases** — Orphaned permission prompts (#4469), broken `/add-dir` (#5076), hooks failing after policy changes (#5098), and unclear `.copilotignore` semantics (#3785) make the sandbox model unpredictable for power users.
3. **Long-running session instability** — OOM crashes (#4686), handle leaks, and resume failures (#4889) erode trust for multi-hour or multi-day agent tasks.
4. **Platform parity gaps** — NixOS keychain support (#3081), Windows git/permission issues (#5094, #3535), and Windows-specific plugin unavailability (#5049) create uneven experiences across OSes.
5. **Rendering & accessibility bugs** — Garbled reasoning text (#3755), low-contrast thinking output on dark themes (#3866), and broken bell notifications (#3573) hurt both usability and accessibility.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-10-12
Source: [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Last 7 Days' Highlights
OpenCode shipped v1.19.0 with a direct major-upgrade path to OpenCode 2, OpenAI `ultrafast` tier support, and a new `/update` TUI command, alongside v1.18.35 with agent-readable stats endpoints and xAI image handling fixes. The community closed long-standing bugs around file mention indexing, AI abort behavior on DSML tool calls, and intermittent OpenAI 503 errors, while active PRs target accessibility, CLI reliability, and v2 UI polish. Core security and permission hardening also moved forward, with fixes for webfetch bypass via the execute tool and stale API key wiring in the shared v2 service.

---

## 2. Releases
### v1.19.0
- **Core**: Added `opencode upgrade --major` for direct upgrades to OpenCode 2; enabled OpenAI `ultrafast` service tier; tightened PTY security by validating connection origins and tickets before PTY existence checks.
- **TUI**: Added `/update` command to install OpenCode updates directly from the interface.
- Link: [v1.19.0 release](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)

### v1.18.35
- **Core**: Added canonical redirects plus JSON and Markdown data formats for agent-readable stats endpoints.
- **Bugfixes**: xAI tool results now include supported image formats and skip unsupported ones (contribution from @Jaaneek).
- **Contributors**: 3 community contributors participated, including @dc85 on web documentation.
- Link: [v1.18.35 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.35)

---

## 3. Hot Issues
1. **#32747 – @ file mentions exclude files created after startup** [Closed]  
   High-impact UX bug (21 comments, 17 👍) where new files failed to appear in `@` mention pickers until restart, caused by stale search index state. Resolved with updated rescan logic.  
   Link: [anomalyco/opencode#32747](https://github.com/anomalyco/opencode/issues/32747)

2. **#49050 – AI aborts after writing `</DSML|tool_calls>`** [Closed]  
   Critical parser bug (18 comments) that terminated AI generation prematurely when DSML tool-call closing tags appeared in output. Closed after root-cause fix.  
   Link: [anomalyco/opencode#49050](https://github.com/anomalyco/opencode/issues/49050)

3. **#52269 – Intermittent OpenAI Service Unavailable (upstream connection failure)** [Closed]  
   Frequent reliability issue (17 comments) causing 503 errors across models and sessions, especially with large payloads. Mitigation via zstd request compression is in progress.  
   Link: [anomalyco/opencode#52269](https://github.com/anomalyco/opencode/issues/52269)

4. **#49847 – OpenAI ChatGPT OAuth requests incorrectly use Zen API key** [Open]  
   Auth integration bug (9 comments) where the OpenAI provider sends an OpenCode Zen API key to ChatGPT’s OAuth-only Codex endpoint, causing rejections. Workaround exists via manual credential restoration.  
   Link: [anomalyco/opencode#49847](https://github.com/anomalyco/opencode/issues/49847)

5. **#45249 – Native context auto-compaction never fires, causing runaway Copilot token usage** [Closed]  
   Cost-critical bug (5 comments) where `session_context_epoch` stayed at 0 on GitHub Copilot, disabling context compression and inflating token consumption.  
   Link: [anomalyco/opencode#45249](https://github.com/anomalyco/opencode/issues/45249)

6. **#48676 – AI reverts user manual code edits on subsequent turns** [Closed]  
   Highly disruptive UX issue (4 comments) reported by Chinese-speaking users, caused by a flawed file timestamp (FileTime) check that overwrote user changes with AI-generated versions.  
   Link: [anomalyco/opencode#48676](https://github.com/anomalyco/opencode/issues/48676)

7. **#33137 / #46396 / #41408 – Screen readers cannot access streaming assistant content** [Closed]  
   Accessibility cluster (multiple related issues, 4 comments each) where `aria-hidden` on streaming containers blocked NVDA and other screen readers from reading AI replies, thinking steps, and tool calls in real time. V2 fix is in PR.  
   Link: [#33137](https://github.com/anomalyco/opencode/issues/33137) · [#46396](https://github.com/anomalyco/opencode/issues/46396) · [#41408](https://github.com/anomalyco/opencode/issues/41408)

8. **#54595 – execute tool should inherit webfetch permissions** [Open, reproduced, severity:high]  
   Security gap (2 comments) allowing agents with `webfetch` disabled to bypass the restriction by running `fetch` inside the execute tool.  
   Link: [anomalyco/opencode#54595](https://github.com/anomalyco/opencode/issues/54595)

9. **#53207 – `opencode run --format json` drops final `step_finish` event** [Open]  
   CLI reliability issue (2 comments) where JSON-formatted run output omits the final step’s token/cost data, breaking downstream billing and usage scripts.  
   Link: [anomalyco/opencode#53207](https://github.com/anomalyco/opencode/issues/53207)

10. **#40335 – Add MCP server setup and connection testing to Desktop** [Open, feature request]  
    Top-voted feature ask (5 👍) for GUI-based MCP server management, eliminating the need for CLI or manual config edits on Desktop.  
    Link: [anomalyco/opencode#40335](https://github.com/anomalyco/opencode/issues/40335)

---

## 4. Key PR Progress
1. **#54643 – fix(core): pick up new files in file search without a restart** [Open]  
   Fixes #32747 and duplicates: updates both `ripgrepLayer` (Windows/non-VCS) and `fffLayer` (Linux/macOS git repos) to return fresh index results immediately after rescan, eliminating the restart requirement for `@` file mentions.  
   Link: [anomalyco/opencode#54643](https://github.com/anomalyco/opencode/pull/54643)

2. **#54570 – fix(core): zstd-compress Codex and Responses API requests** [Open]  
   Closes #52269: adds zstd compression for request bodies larger than ~1 MiB to prevent OpenAI upstream 503 connection failures caused by large payloads.  
   Link: [anomalyco/opencode#54570](https://github.com/anomalyco/opencode/pull/54570)

3. **#51084 – fix(session-ui): expose streaming assistant steps** [Open]  
   V2 accessibility fix for #33137 / #46396 / #41408: removes `aria-hidden` from streaming assistant content so screen readers can access real-time replies, thinking steps, and tool call progress.  
   Link: [anomalyco/opencode#51084](https://github.com/anomalyco/opencode/pull/51084)

4. **#53208 – fix(cli): emit final step events when run settles before they arrive** [Open]  
   Closes #53207: ensures `opencode run --format json` flushes all queued events including the final `step_finish` before exiting, preserving token/cost data for script consumers.  
   Link: [anomalyco/opencode#53208](https://github.com/anomalyco/opencode/pull/53208)

5. **#54660 – fix(core): keep subagent job across interrupt with resume** [Open]  
   Closes #54658: ensures background subagent jobs persist through `resume=true` interrupts, and the parent receives the completed state correctly on resume.  
   Link: [anomalyco/opencode#54660](https://github.com/anomalyco/opencode/pull/54660)

6. **#54630 – fix(app): anchor directory picker at server directory with native separators** [Open]  
   Closes #54663 (split from #54626): fixes Windows web UI directory picker to start at the server’s working directory and use native path separators instead of the OS home directory.  
   Link: [anomalyco/opencode#54630](https://github.com/anomalyco/opencode/pull/54630)

7. **#54662 – [contributor] fix(app): hide retryable errors until retries run out** [Open]  
   UX improvement: suppresses error cards in the timeline during automatic provider retries, only showing failures after all attempts are exhausted to reduce noise.  
   Link: [anomalyco/opencode#54662](https://github.com/anomalyco/opencode/pull/54662)

8. **#49865 – feat(opencode): add sysml-lsp builtin LSP server** [Closed]  
   Adds built-in support for OpenSysML’s `sysml-lsp` for `.sysml` and `.kerml` files, with automatic `go install` fallback when Go is available.  
   Link: [anomalyco/opencode#49865](https://github.com/anomalyco/opencode/pull/49865)

9. **#54426 – [contributor] feat(app): show iOS voice delegations as Voice messages** [Open]  
   Parses iOS voice delegation prompts (header + JSON instruction body) and renders them as dedicated Voice messages in desktop/web UI, matching iOS behavior.  
   Link: [anomalyco/opencode#54426](https://github.com/anomalyco/opencode/pull/54426)

10. **#54645 follow-up: #54641 – fix(nix): disable the self-updater in the flake build** [Open]  
    Closes #54022: disables the built-in self-updater in Nix flake builds to align with distribution package management norms and prevent conflicting update paths.  
   Link: [anomalyco/opencode#54641](https://github.com/anomalyco/opencode/pull/54641)

---

## 5. Hot Discussions
*Omitted — no GitHub Discussions data was provided in the dataset.*

---

## 6. Feature Request Trends
1. **GUI-first MCP and tooling management** – Strong demand for Desktop UI to configure, test, and debug MCP servers instead of relying on CLI or manual config files (exemplified by #40335).
2. **Deeper accessibility parity** – Consistent requests for screen-reader support across streaming content, counters, and intermediate AI states on both desktop and web.
3. **Expanded provider and protocol support** – Requests for XPIA sampling support for WinDbg MCP secure mode (#54042), more built-in LSP servers (#49865), and broader OAuth compatibility for MCP services.
4. **Improved upgrade and update UX** – Users want smoother in-product upgrades (v1.19.0 `/update`, major upgrade path) and platform-appropriate update behavior (e.g., disabled self-updates for Nix).
5. **Better agent workflow visibility and control** – Interest in expandable webfetch responses, clearer delegation prompts, and more granular permission controls across agent tools.

---

## 7. Developer Pain Points
1. **Index freshness and file system sync** – Stale file search/mention indexes requiring restarts were the highest-commented bug, eroding trust in the `@` mention workflow.
2. **Provider reliability and payload limits** – Intermittent 503 errors from upstream providers (especially with large requests) and silent retries create debugging overhead and workflow disruption.
3. **State and permission edge cases** – Stale API key wiring after auth login/logout in v2 shared services, and permission bypass via the execute tool, pose both functional and security risks.
4. **CLI output consistency** – Missing final events in JSON run output break automation pipelines and usage tracking scripts.
5. **Cross-platform UI inconsistencies** – Directory picker path issues on Windows, PowerShell not opening in the project directory, and bidirectional text rendering bugs in nested Markdown create fragmented platform experiences.
6. **Cold-start race conditions** – Multiple commands (`plugin list`, `mcp list`, `model list`, VCS API endpoints) return empty results on first invocation because async initialization completes after the call.
7. **Accessibility gaps** – Screen reader users cannot access real-time streaming content, creating a significant usability barrier for assistive technology users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest – 2026-10-12

## 1. Last 7 Days' Highlights
This week marked the release of **Pi v1.1.0**, headlined by OSC 7501 program status reporting for terminals and agent dashboards, alongside v1.0.3 and v1.0.4 patches expanding tool-pattern controls, Azure Foundry support, and MCP configuration flexibility.
Connection reliability remains the community’s top concern, with high-comment threads around `openai-codex` freezes, stuck "Working…" states, and provider-specific streaming hangs. The ecosystem also saw notable progress in packaging (deb/rpm Linux builds), extension lifecycle controls, and TUI polish.

---

## 2. Releases
- **v1.1.0** – Introduces **program status reporting** via OSC 7501; terminals and dashboards can now display whether Pi is working, blocked on a dialog/login, done, or failed. [Docs](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md#program-status)
- **v1.0.4** – Adds **glob-style tool patterns** for `--tools` / `--exclude-tools` (e.g. `--tools read,codemode,'mcp__radius__*'`), MCP-aware tool filtering, and a `--no-mcp` flag to disable MCP per run.
- **v1.0.3** – Expands the **Azure provider** (renamed from `azure-openai-responses`) to support **Foundry Chat Completions** deployments, starting with `azure/deepseek-v4-pro`. [Docs](https://github.com/earendil-works/pi/blob/v1.0.3/packages/coding-agent)

---

## 3. Hot Issues
1. **#4945 – openai-codex Connection Reliability Issues** (OPEN, 82 comments, 35 👍)  
   The most-discussed issue this week: `gpt-5.5`/codex sessions intermittently freeze on "Working…" with no stream, tool call, or error, forcing Escape to abort. Major stability pain point for power users.  
   [Link](https://github.com/earendil-works/pi/issues/4945)

2. **#10031 – Pi sporadically stuck in "Working…" when thinking is stopped with <esc>** (CLOSED, 28 comments, 3 👍)  
   Reports that ESC-interrupted thinking leaves the TUI hung, requiring full restart via `pi -c`. Affected users across multiple machines since ~v0.84.0; closure indicates a fix landed.  
   [Link](https://github.com/earendil-works/pi/issues/10031)

3. **#7553 – Configurable thinking level/model for compaction** (OPEN, 10 comments, 3 👍)  
   A long-requested feature: auto/manual compaction currently reuses the session’s thinking budget, making summarization costs and quality inseparable from normal turns. Marked `to-discuss`.  
   [Link](https://github.com/earendil-works/pi/issues/7553)

4. **#10267 – before_agent_start prompt text dropped on runs without user prompt** (OPEN, p0, 9 comments, 4 👍)  
   Critical billing bug: extension-injected `systemPrompt`/sections are lost on background tasks, plan-mode continues, retries, and resumes — causing full prompt re-sends and extra costs.  
   [Link](https://github.com/earendil-works/pi/issues/10267)

5. **#10019 – Anthropic subscription requests hang at :00/:30 UTC** (OPEN, 8 comments, 1 👍)  
   Subscribers report periodic freezes with 200 responses + pings but no `message_start`, correlating with top-of-the-half-hour rate windows. Not observed in Claude Code.  
   [Link](https://github.com/earendil-works/pi/issues/10019)

6. **#9602 – Compaction overflow from omitted earlier thinking messages** (OPEN, bug, 8 comments)  
   Compaction can exceed token limits by including thinking messages that were dropped from prior model requests — spotted with local Qwen3.8/llama.cpp sessions hitting output caps.  
   [Link](https://github.com/earendil-works/pi/issues/9602)

7. **#9512 – Compaction hits summary output cap with GPT-6 Astra at max reasoning** (OPEN, 7 comments, 2 👍)  
   Context overflow recovery fails intermittently because GPT-6 Astra summaries hit the generation token cap at `max` reasoning level.  
   [Link](https://github.com/earendil-works/pi/issues/9512)

8. **#10645 – resizeImage returns null in compiled Bun executables** (OPEN, in progress, 6 comments)  
   Regression since 0.87.x: all image attachments are omitted in standalone Windows binaries due to a Bun-compiled `image-resize` issue, affecting RPC-mode hosts.  
   [Link](https://github.com/earendil-works/pi/issues/10645)

9. **#9656 – Mouse wheel scrolls prompt history instead of transcript in fullscreen on Windows + Zellij** (OPEN, bug, 6 comments, 4 👍)  
   Terminal-multiplexer interaction bug in the TUI, reproduced specifically on Windows → Alacritty → Zellij; Linux/tmux and direct terminals work fine.  
   [Link](https://github.com/earendil-works/pi/issues/9656)

10. **#10656 – DashScope/Qwen 429 "insufficient_quota" misclassified as non-retryable billing** (OPEN, bug, 4 comments)  
    Alibaba Cloud’s `insufficient_quota` code is actually a transient TPS/TPM throttle, not billing exhaustion — Pi currently fails immediately instead of retrying.  
    [Link](https://github.com/earendil-works/pi/issues/10656)

---

## 4. Key PR Progress
1. **#10774 – fix(tui): enable kitty images in herdr** (CLOSED)  
   Fixes a 1.1.0 regression that broke inline images in herdr panes by restoring kitty graphics protocol support (herdr was incorrectly falling through to a Ghostty check).  
   [Link](https://github.com/earendil-works/pi/pull/10774)

2. **#10810 – fix(tui): support override colorFn options in CompactionStatusIndicator** (CLOSED)  
   Fixes #10809; compaction status indicator now honors theme overrides and uses reasoning-level coloring consistent with the working indicator.  
   [Link](https://github.com/earendil-works/pi/pull/10810)

3. **#10805 – feat(coding-agent): support extension session cwd** (CLOSED)  
   Adds `cwd` to `ctx.newSession()` and `cwdOverride` to `ctx.switchSession()`, letting extensions move sessions into Git worktrees or other directories.  
   [Link](https://github.com/earendil-works/pi/pull/10805)

4. **#10751 – feat(coding-agent): use pi.dev configuration schemas** (CLOSED)  
   Moves config schema `$id` values to pi.dev endpoints, and standardizes model/settings/keybindings/theme schema publishing.  
   [Link](https://github.com/earendil-works/pi/pull/10751)

5. **#10789 – feat(session): coalesce session-JSONL write syscalls** (CLOSED)  
   Performance optimization: buffered session entries are written in a single syscall rather than per-entry, while preserving synchronous durability for appends.  
   [Link](https://github.com/earendil-works/pi/pull/10789)

6. **#10784 / #10782 – feat(coding-agent): add deb and rpm package builds for Linux** (CLOSED)  
   Adds native `.deb` and `.rpm` builds to the release pipeline, enabling dpkg/rpm-managed installs on Debian/RHEL instead of the shell installer.  
   [Link #10784](https://github.com/earendil-works/pi/pull/10784) · [Link #10782](https://github.com/earendil-works/pi/pull/10782)

7. **#10766 – feat(coding-agent): extension abort with same-run continuation** (CLOSED)  
   Extensions aborting mid-stream via `message_update` can now keep follow-up work queued, rather than exiting the run loop early and stranding continuations.  
   [Link](https://github.com/earendil-works/pi/pull/10766)

8. **#10747 – feat: allow custom Cloudflare AI Gateway domains and access credentials** (OPEN)  
   Enables self-hosted/custom Cloudflare AI Gateway endpoints and credentials, addressing enterprise/self-hosted use cases.  
   [Link](https://github.com/earendil-works/pi/pull/10747)

9. **#10672 – feat(ai,coding-agent): list only the OpenRouter models a key may use** (OPEN)  
   Filters the OpenRouter model list to only models the user’s key can access, pulling permissions from `/models/user` and merging with the Pi catalog.  
   [Link](https://github.com/earendil-works/pi/pull/10672)

10. **#10739 – fix(coding-agent): emit before_agent_start for runs started by custom messages** (OPEN)  
    Fixes `pi.sendMessage(..., { triggerTurn: true })` skipping `before_agent_start`, which caused system-prompt sections added by extensions to vanish after the first tool call.  
    [Link](https://github.com/earendil-works/pi/pull/10739)

---

## 5. Hot Discussions

### Q&A / Support
- **#5572 – How can I unregister Hugging Face as a model provider?** (5 👍)  
  Users want `pi --list-models` and in-session `/models` to show only their configured providers, not all built-ins.  
  [Link](https://github.com/earendil-works/pi/discussions/5572)

- **#5936 – Why Pi does not use the native terminal cursor?** (3 comments, 2 👍)  
  Discussion around Pi’s custom inverse-block cursor vs. the native terminal cursor, with implications for themes and accessibility.  
  [Link](https://github.com/earendil-works/pi/discussions/5936)

- **#4575 – Termux (Android): Fix for cannot scroll up during streaming** (2 👍)  
  Community-contributed workaround: updating Termux to the beta version resolves swipe-to-scroll issues during streaming.  
  [Link](https://github.com/earendil-works/pi/discussions/4575)

- **#6547 – Moving project location and session concerns** (2 👍)  
  Guidance-seeking on migrating `.pi` session state when a project folder is moved to a new path on Windows.  
  [Link](https://github.com/earendil-works/pi/discussions/6547)

### Ideas
- **#10632 – Pausing a run on a tool call until human approval or client-side results arrive** (2 comments, 1 👍)  
  Proposal for durable, memory-free suspension of tool execution pending approval or client data, with state persisted to disk.  
  [Link](https://github.com/earendil-works/pi/discussions/10632)

### Show and Tell
- **#10069 – agent-chat: peer-to-peer messaging for independent Pi agents** (3 comments)  
  Extension enabling independent Pi sessions (often in different worktrees) to coordinate via P2P messaging, no orchestrator required.  
  [Link](https://github.com/earendil-works/pi/discussions/10069)

- **#10808 – Pippa, a native Mac interface for everyday Pi tasks** (1 👍)  
  New MIT-licensed native macOS app exposing Pi via a floating pill UI for drag-and-drop tasks; built on `pi --mode rpc`. Testers welcome.  
  [Link](https://github.com/earendil-works/pi/discussions/10808)

- **#10687 – Orbi: running Pi unattended from GitHub Issues** (1 👍)  
  Open-source AGPL runner that watches `ai-ready` labeled issues, spins up a Pi session in a fresh worktree, and opens a PR with a separate review session.  
  [Link](https://github.com/earendil-works/pi/discussions/10687)

- **#10581 – Hard dollar limit per `pi -p` run via models.json headers** (1 👍)  
  Config-only pattern using `${VAR}` expansion in `models.json` headers to enforce per-run budget caps through a local gateway.  
  [Link](https://github.com/earendil-works/pi/discussions/10581)

- **#10432 – Threshold, a project-rooted harness built on Pi** (1 👍)  
  Harness that persists project state across independent Pi sessions, enabling checkpoints and handoffs between worker runs.  
  [Link](https://github.com/earendil-works/pi/discussions/10432)

---

## 6. Feature Request Trends
1. **Granular compaction controls** – Dedicated thinking levels, models, and transport settings for compaction/summarization, decoupled from the main session.
2. **Provider filtering & catalog control** – Hiding unused providers (e.g. Hugging Face), filtering OpenRouter models by key eligibility, and better control over what appears in `--list-models`.
3. **Durable pause & approval flows** – Persisting tool-call state so runs can wait for human approval or client-side data without holding memory.
4. **Extension lifecycle & session control** – Abort-with-continuation, session cwd switching, and stable base-prompt appends from extensions.
5. **Native packaging & platform polish** – Linux deb/rpm packages, macOS native UI experiments, and Termux/Windows-multiplexer TUI refinements.
6. **MCP feature parity** – Elicitation support and richer tool-pattern management (`--tools` globs, `--no-mcp`).

---

## 7. Developer Pain Points
- **Streaming/stuck-state reliability** is the #1 friction: `openai-codex` freezes, Anthropic subscription hang patterns, ESC-interrupted thinking hangs, and silent output-limit stops break flow and force manual recovery.
- **Compaction edge cases** accumulate quickly in long sessions: output-token caps at high reasoning levels, overflow from previously-omitted thinking messages, and transport-setting mismatches.
- **Prompt/billing surprises** – dropped `before_agent_start` prompts causing re-billing, and misclassified provider errors (DashScope 429) failing immediately instead of retrying.
- **Platform-specific TUI/UX bugs** – mouse-wheel behavior in Zellij/Windows, image rendering regressions in compiled binaries, CJK emphasis rendering, and Termux scroll issues.
- **Extension integration fragility** – missing hooks for custom-message-triggered runs, abort semantics that strand continuations, and dependency warnings (e.g. `node-domexception`) leaking through.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-10-12

---

## 1. Last 7 Days' Highlights
This week the Qwen Code project shipped v0.25.1 across core CLI, Desktop, and TypeScript SDK, with no breaking changes and a focus on managed-agent robustness, session recovery, and cross-platform fixes. The community also drove active discussion around multi-agent architecture design, Linux distribution improvements, and Web Shell usability, while core maintainers advanced Hosted Agent Team capabilities and resolved a cluster of MCP config parsing and memory-compaction bugs.

---

## 2. Releases
All releases from the past 7 days are tracked in the [QwenLM/qwen-code releases page](https://github.com/QwenLM/qwen-code/releases).

### Stable Release
- **v0.25.1** — Official stable release.
  - Core: Restores selected text-only connection and validated session/workspace route after Android Activity recreation; preserves session creation failure diagnostics for easier debugging.
  - Agents: Fixes remote Host replacement so existing bindings are not lost.
  - Desktop: [desktop-v0.25.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.1) aligns with core v0.25.1.
  - TypeScript SDK: [sdk-typescript-v0.1.19](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.19) bundles CLI v0.25.1.

### Preview / Nightly Releases
- v0.25.1-preview.0 / preview.1 / preview.2 — Iterative previews primarily validating the agent remote-host binding fix ([#13430](https://github.com/QwenLM/qwen-code/pull/13430)) and post-merge test coverage.
- v0.25.1-nightly.20261011.01d3e6d81a
- v0.25.0-nightly.20261010.9763580b84
- v0.25.0-nightly.20261009.085a44f336
- v0.25.0-nightly.20261007.8003d28042

---

## 3. Hot Issues
1. **[#12380 — proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)**
   - Why it matters: The top-discussed issue (53 comments) defines the long-term Managed Agent architecture — separating model inference from tool provisioning, giving Sessions durable ownership and workspace bindings, and enabling recoverable tool execution.
   - Reaction: Heavily tagged across roadmap tracks (session-management, multi-agent, platform-distribution); serves as the umbrella for many in-progress PRs.

2. **[#13004 — perf(memory): add a bounded cooldown after no-op extraction](https://github.com/QwenLM/qwen-code/issues/13004)**
   - Why it matters: Proposes a cadence policy to avoid spawning redundant memory extractors after consecutive no-op turns, reducing token and compute waste.
   - Reaction: 10 comments; community is weighing policy boundaries and how to distinguish legitimate no-ops from inactive periods.

3. **[#13492 — XML tool-call recovery drops outer calls containing quoted tool markup](https://github.com/QwenLM/qwen-code/issues/13492)**
   - Why it matters: A core tool-calling correctness bug where quoted XML markup inside a call causes the outer call to be dropped during recovery.
   - Reaction: 10 comments; partially fixed by [#13515](https://github.com/QwenLM/qwen-code/pull/13515), with remaining work tracked in [#13579](https://github.com/QwenLM/qwen-code/pull/13579).

4. **[#13807 — "ERROR 500 An unsupported generation guide was used" with macOS Foundation Models as Fast Model](https://github.com/QwenLM/qwen-code/issues/13807)**
   - Why it matters: Blocks macOS users from using Apple's built-in `fm serve` Foundation Models as the fast model for generation tasks.
   - Reaction: 6 comments; active debugging around OpenAI-compatible endpoint handling and generation-guide compatibility.

5. **[#13680 — bug(desktop): vendored x64-linux ripgrep SIGSEGVs on every startup probe](https://github.com/QwenLM/qwen-code/issues/13680)**
   - Why it matters: P1 Linux Desktop bug where the bundled ripgrep binary crashes on startup due to post-link ELF rewriting (RUNPATH $ORIGIN + moved phdrs).
   - Reaction: 4 comments; high priority since it breaks search/indexing on x64 Linux Desktop installs.

6. **[#13908 — Web Shell: 4-5 split panes exhaust per-origin HTTP/1.1 connection pool](https://github.com/QwenLM/qwen-code/issues/13908)**
   - Why it matters: Users with multiple split panes hit "Connection lost: Fetch is aborted" because HTTP/1.1's 6-connection limit is exhausted.
   - Reaction: 3 comments; directly impacts power users leveraging Split View for multi-session workflows.

7. **[#12444 — feat(web-shell): support pinning workspaces/projects to top of sidebar](https://github.com/QwenLM/qwen-code/issues/12444)**
   - Why it matters: Top UI feature request — users working across many repos want workspace-level pinning (only session pinning exists today).
   - Reaction: 7 comments; a duplicate [#13888](https://github.com/QwenLM/qwen-code/issues/13888) was filed and closed, underscoring strong demand.

8. **[#13920 — fix(core): CJK teammate names collapse in sanitizeName (Agent Teams spawn)](https://github.com/QwenLM/qwen-code/issues/13920)**
   - Why it matters: Internationalization bug where CJK team member names are sanitized to empty strings, forcing the model to invent pinyin fallbacks.
   - Reaction: 3 comments; affects Agent Teams usability for Chinese/Japanese/Korean users.

9. **[#13925 — Release notes duplicates PRs released in previous releases](https://github.com/QwenLM/qwen-code/issues/13925)**
   - Why it matters: Release tooling issue where the generated changelog accumulates old PRs instead of only showing new entries for each version.
   - Reaction: 3 comments; degrades release note quality and readability for end users.

10. **[#13597 — Subagent tool doesn't report error message to the main agent](https://github.com/QwenLM/qwen-code/issues/13597)**
    - Why it matters: Multi-agent reliability issue — subagent failures (e.g., timeouts) return only a generic "failed" message, so the main agent retries uselessly instead of adjusting limits.
    - Reaction: 4 comments; closed with a fix that propagates detailed error context.

---

## 4. Key PR Progress
1. **[#13330 — fix(managed-agent): connector and broker robustness from the #12692 R2 review](https://github.com/QwenLM/qwen-code/pull/13330)**
   - Hardens the managed-agent connector and broker layer with fixes from the R2 architecture review; part of the v0.25.1 stable release.

2. **[#13731 — fix(channels): preserve Markdown structure when splitting messages](https://github.com/QwenLM/qwen-code/pull/13731)**
   - Splits long DingTalk/WeCom/ordinary Markdown messages at structure boundaries (links, tables, code blocks) instead of mid-content, with a 3,800-unit target and 20,000-unit ceiling.

3. **[#13568 — fix(lsp): route file queries to applicable servers](https://github.com/QwenLM/qwen-code/pull/13568)**
   - Routes file-scoped LSP operations to the correct ready server based on declared extensions/languages and resolved workspace path, improving multi-root/multi-LSP reliability.

4. **[#13928 — feat(managed-agent): member board tools ride the session_command channel end to end (H4e-b3b)](https://github.com/QwenLM/qwen-code/pull/13928)**
   - Enables Hosted Agent Team members to read/write their leader's task board via a durable command channel, no extra model turn required on the leader side.

5. **[#13923 — feat(managed-agent): Stop Hosted team members with request_shutdown (H4e-b3a)](https://github.com/QwenLM/qwen-code/pull/13923)**
   - Implements `request_shutdown` so a Hosted team lead can gracefully stop team members; lays plan-mode groundwork for subsequent H4e batches.

6. **[#13816 — fix(managed-agent): hand back the Workspace mount when a tool turn goes recovery blocked](https://github.com/QwenLM/qwen-code/pull/13816)**
   - Adds a broker-internal mount-release endpoint that frees a managed Workspace Session's execution mount when a tool turn enters recovery-blocked state, preventing mount leaks.

7. **[#12513 — feat(serve): batch workspace session live-state snapshots](https://github.com/QwenLM/qwen-code/pull/12513)**
   - Adds a read-only endpoint for fetching live-session snapshots across 1–20 selected workspaces in one call, each with independent success/error results.

8. **[#11854 — feat: add hybrid code mode](https://github.com/QwenLM/qwen-code/pull/11854)**
   - Introduces `tools.mode` enum (`direct`, `code_mode`, `code_mode_only`) with a Codex-aligned JavaScript `exec` tool and nested tool declarations for hybrid tool+code workflows.

9. **[#13219 — fix(managed-agent): bound retry loops with terminal states](https://github.com/QwenLM/qwen-code/pull/13219)**
   - Gives every async retry loop in the managed-agent stack a budget and terminal state, fixing permanently wedged projections and infinite retries on permanent failures.

10. **[#13642 — feat(runtime-broker): add bounded retention for terminal JDBC history](https://github.com/QwenLM/qwen-code/pull/13642)**
    - Adds opt-in, bounded JDBC cleanup of old terminal Runtime Broker history under retired bindings, running on a dedicated scheduler while preserving recovery/publication/storage authority.

---

## 5. Hot Discussions
No GitHub Discussions data was provided in the source set; this section is omitted.

---

## 6. Feature Request Trends
From the past week's issues, three clear feature directions emerge:
1. **Web Shell UX improvements** — workspace/project pinning ([#12444](https://github.com/QwenLM/qwen-code/issues/12444)), keyboard shortcuts for Session Overview and Split View ([#13175](https://github.com/QwenLM/qwen-code/issues/13175)), and richer multi-pane workflows.
2. **Broader platform distribution** — official Desktop downloads on qwen.ai with auto-updated README links ([#13656](https://github.com/QwenLM/qwen-code/issues/13656)), Flathub publishing for Linux ([#13924](https://github.com/QwenLM/qwen-code/issues/13924)), and better out-of-the-box Linux packaging.
3. **Managed Agent & multi-agent extensibility** — staged dual-path architecture ([#12380](https://github.com/QwenLM/qwen-code/issues/12380)), foreground Shell profile for public workspace sessions ([#13271](https://github.com/QwenLM/qwen-code/issues/13271)), and Agent Team collaboration primitives (board tools, member lifecycle control).
4. **Memory & semantic recall enhancements** — bounded no-op cooldown for memory extraction ([#13004](https://github.com/QwenLM/qwen-code/issues/13004)) and first-class self-hosted semantic memory with embedding-based recall ([#10684](https://github.com/QwenLM/qwen-code/issues/10684)).

---

## 7. Developer Pain Points
- **MCP config parsing fragility** — UTF-8 BOM in both MCP config files ([#13595](https://github.com/QwenLM/qwen-code/issues/13595)) and imported Claude configs ([#13710](https://github.com/QwenLM/qwen-code/issues/13710)) causes silent load failures, a recurring source of "MCP not working" reports.
- **Release note quality** — duplicated PR entries across versions ([#13925](https://github.com/QwenLM/qwen-code/issues/13925)) make it hard to tell what actually changed in a new release.
- **Linux Desktop reliability** — ripgrep SIGSEGV on x64 startup ([#13680](https://github.com/QwenLM/qwen-code/issues/13680)) and lack of Flathub/standard packaging ([#13924](https://github.com/QwenLM/qwen-code/issues/13924)) hurt Linux developer experience.
- **Multi-agent observability & recoverability** — subagents returning opaque errors ([#13597](https://github.com/QwenLM/qwen-code/issues/13597)), stranded dispatches on session reopen, and mount leaks on recovery-blocked turns all contribute to debugging difficulty in managed-agent deployments.
- **Web Shell connection & polish gaps** — connection pool exhaustion in multi-pane view ([#13908](https://github.com/QwenLM/qwen-code/issues/13908)), auto-recap ignoring user settings ([#13911](https://github.com/QwenLM/qwen-code/issues/13911)), and missing workspace-level pinning ([#12444](https://github.com/QwenLM/qwen-code/issues/12444)) are frequent user-facing friction points.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*