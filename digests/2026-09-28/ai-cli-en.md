# AI CLI Tools Weekly Digest 2026-09-28

> Generated: 2026-09-28 01:30 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Comparison Report | 2026-09-28
---

## 1. Ecosystem Overview
The AI developer CLI ecosystem is in a high-velocity maturation phase, with frontier model support (Claude Opus 5.5, GPT-6 series, Gemini 3.8 Flash) rolling out across nearly all major tools within the same week. Security hardening (path traversal fixes, permission granularity, sandbox reliability) and agent system robustness (subagent correctness, durable session lifecycle, long-running workload stability) have emerged as universal top priorities, alongside growing demand for standardized MCP (Model Context Protocol) integration. Enterprise and power-user segments are driving demand for granular policy controls, BYOK/custom provider flexibility, and cross-device/headless deployment patterns, while platform-specific bugs (especially Windows compatibility and desktop build regressions) remain a consistent source of user friction across closed-source and open-source offerings alike.

---

## 2. Activity Comparison
| Tool | Issues (Active/Notable, Last 7d) | PRs (Active/Notable, Last 7d) | Discussions (Active, Last 7d) | Release Status (Last 7d) |
|------|-----------------------------------|--------------------------------|--------------------------------|---------------------------|
| Claude Code | 10 top issues (7 open, 3 closed) | 10 key PRs (4 open, 6 merged) | Omitted (no data provided) | 4 minor releases (v2.1.280–v2.1.283) |
| OpenAI Codex | 10 top issues (all open) | 10 key PRs (all open) | 10 active (5 ideas, 2 Q&A, 3 show-and-tell) | 10 Rust SDK alpha releases (v0.158.0 / v0.159.0 lineages) |
| Gemini CLI | 10 top issues (all open) | 10 key PRs (7 open, 3 merged) | Omitted (no data provided) | 7 releases: 1 stable (v0.61.0), 1 preview, 5 nightly builds |
| GitHub Copilot CLI | 10 top issues (8 open, 2 closed) | 4 active PRs (3 docs/CI, 1 spam) | Omitted (no data provided) | 8 pre-release builds (v1.0.88–v1.0.89-5) + 1 stable patch |
| OpenCode | 10 top issues (9 open, 1 closed) | 10 key PRs (6 open, 4 merged/closed) | Omitted (no data provided) | 1 stable release (v1.18.32) |
| Pi | 10 top issues (8 open, 2 closed/in-progress) | 10 key PRs (3 open, 7 merged) | 7 active (3 ideas/roadmap, 2 Q&A, 2 show-and-tell) | 2 minor releases (v0.87.0, v0.87.1) |
| Qwen Code | 10 top issues (9 open, 1 closed) | 10 key PRs (9 open, 1 merged) | Omitted (no data provided) | 6 releases: 3 stable (v0.24.4–v0.24.6), 3 nightly builds |

---

## 3. Shared Feature Directions
Cross-community requirements reflect convergent user needs across 3+ tools:
1. **Granular permission & security controls**
   - *Tools*: Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code
   - *Needs*: Global/per-session tool allowlists (read-only vs. destructive tiers), sandbox hardening, path traversal mitigation, and org-level policy enforcement for enterprise deployments.
2. **MCP ecosystem robustness & standardization**
   - *Tools*: Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, Qwen Code
   - *Needs*: Tolerant protocol handling for optional fields, stable long-lived server connections, OAuth compatibility, and standardized observability for MCP tool calls.
3. **Agent reliability & subagent correctness**
   - *Tools*: Claude Code, Gemini CLI, Qwen Code, Pi
   - *Needs*: Fixes for false success reporting, hanging subagent loops, autonomous tool/skill routing logic, and durable session lifecycle for long-running agent workflows.
4. **Multi-model flexibility & provider choice**
   - *Tools*: Claude Code, GitHub Copilot CLI, OpenCode, Pi, Qwen Code
   - *Needs*: In-session model switching, BYOK/local provider support, alias preservation, and transparent cost tracking across multi-provider catalogs.
5. **Long-running session stability**
   - *Tools*: All 7 tools
   - *Needs*: Memory leak fixes, resource leak cleanup (process slots, MCP servers, WAL growth), reliable compaction that preserves context, and auth token refresh resilience.

---

## 4. Differentiation Analysis
| Tool | Core Focus | Target Users | Technical Approach |
|------|------------|--------------|--------------------|
| **Claude Code** | Enterprise security, diff panel UX, gateway infrastructure | Enterprise teams, security-conscious developers, Anthropic ecosystem users | Tight integration with Anthropic's model stack; heavy investment in `sec-default` tiered policy enforcement and gateway-side observability. |
| **OpenAI Codex** | Desktop client stability, sandboxing, MCP tooling | Mainstream developers, OpenAI ecosystem power users | Rapid Rust SDK iteration; deep integration with OpenAI's Guardian safety layer and Electron desktop stack. |
| **Gemini CLI** | Agent intelligence, security hardening, workspace trust | Google Cloud users, multi-agent workflow builders | First-party support for Gemini model family; focus on AST-aware code navigation and zero-dependency OS sandboxing leveraging native model bash affinity. |
| **GitHub Copilot CLI** | Ecosystem compatibility, session UX, GitHub integration | GitHub-native developers, enterprise teams using GitHub identity | Built on GitHub's identity and connector ecosystem; prioritizes cross-tool rule file compatibility (e.g., Claude Code `.claude/rules`) and managed consent flows. |
| **OpenCode** | Multi-provider flexibility, community-driven plugin ecosystem | Self-hosted users, multi-cloud/DIY developers | Open-source, provider-agnostic architecture; strong community contributions for new providers and plugins, with focus on headless/CI deployment patterns. |
| **Pi** | Extension platform, performance optimization, open-model support | Tinkerers, extension developers, open-model users | Highly extensible plugin architecture; focus on startup latency reduction and broad compatibility across self-hosted/alternative providers. |
| **Qwen Code** | Managed Agent architecture, enterprise durability, A2A collaboration | Enterprise teams building multi-agent systems, Alibaba Cloud users | Dual-path (legacy + managed) engine architecture; heavy investment in durable session operations, runtime broker resilience, and A2A-based multi-agent topologies. |

---

## 5. Community Momentum & Maturity
### Highest Velocity / Rapid Iteration
- **OpenAI Codex**: 10 SDK releases in 7 days + active community discussions across ideas/Q&A/show-and-tell, though desktop build regressions indicate fast-paced development with stability tradeoffs.
- **Claude Code**: Weekly release cadence with 4 minor versions shipped, focused on incremental UX and security improvements; strong issue engagement (top issue with 35 comments/28 👍).
- **Qwen Code**: 6 releases + 10 active high-priority PRs tied to a clear managed agent roadmap, with structured dual-path architecture driving coordinated development.

### Most Active Community Engagement
- **OpenAI Codex**: Has the most visible discussion ecosystem, with community-built tools (mobile ports, multi-agent coordination layers) and high-upvote feature ideas (191 👍 for remote ChatGPT control).
- **Pi**: Vibrant extension ecosystem with community-curated plugin recommendations, third-party provider integrations, and active fork-driven upstream feature contributions.
- **OpenCode**: Strong community contribution pipeline for new providers and plugins, with long-standing high-upvote UX issues (32 👍 for clipboard fix) signaling sustained user investment.

### Higher Maturity / Stability Focus
- **GitHub Copilot CLI**: Slower core code iteration (only 4 active PRs, mostly docs/CI) but steady pre-release UX polish; maturity reflected in ecosystem compatibility work (Claude Code rule support) rather than core architecture overhauls.
- **Gemini CLI**: Balanced release cadence (stable + preview + nightly) with heavy focus on security hardening and bug fixes, indicating a maturing core platform.

---

## 6. Trend Signals
For technical decision-makers and tool developers, these community patterns point to actionable industry trends:
1. **Agent reliability is the new battleground**: Across every tool, subagent correctness (false success, hanging loops) and long-running session durability are top user complaints — winning tools will prioritize observable, recoverable agent execution over raw feature count.
2. **MCP is becoming a de facto standard**: Nearly all tools are investing in MCP compatibility, with enterprise users driving demand for OAuth, permission scoping, and cross-tool MCP server portability. Tools with robust, standards-compliant MCP support will gain ecosystem lock-in.
3. **Security granularity moves from nice-to-have to table stakes**: Users are rejecting binary "approve all / approve each" permission models in favor of tiered read/write controls, global allowlists, and org-level policy enforcement — especially for enterprise and production agent deployments.
4. **Multi-provider flexibility is non-negotiable**: Even first-party tools (Copilot CLI, Gemini CLI) are adding support for competing models, while open-source tools see strong demand for BYOK/local model support. Developers building on AI CLIs expect portability across providers to avoid lock-in and cost risk.
5. **Windows compatibility remains an undifferentiated pain point**: Every major tool reports disproportionate Windows bugs (sandbox failures, console flashing, path handling issues) — tools that invest in first-class Windows support can capture a large underserved user segment.
6. **Headless/CI deployment is a fast-growing use case**: Demand for CLI tools in pipelines, containers, and server-side deployments is rising across both open-source and enterprise segments, driving requirements for reproducible builds, machine-readable outputs, and API-controlled agent lifecycles.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-28, sourced from [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (by community discussion/attention)
Ranking is based on PR activity longevity, update frequency, and alignment with high-discussion community issue themes (comment counts are marked as undefined in source data, so ranking uses correlated activity signals).

1. **skill-creator (trigger evaluation & Windows runtime fix)**  
   - PR: [#1298](https://github.com/anthropics/skills/pull/1298) | Status: Open | Author: MartinCajiao
   - Functionality: Fixes false misses/invalid scores in skill trigger evaluation, resolves `select()` subprocess pipe failures on Windows, and prevents unrelated tools from interrupting trigger scans.
   - Discussion highlights: Aligns with multiple high-comment issues (#556, #1383) reporting broken trigger evals and Windows compatibility gaps, making it a core infrastructure priority for skill builders.
   - Last updated: 2026-09-16

2. **mcp-builder (MCP 2.0 compatibility & custom headers)**  
   - PR: [#1742](https://github.com/anthropics/skills/pull/1742) | Status: Open | Author: Kuldeeep18
   - Functionality: Adds support for MCP >=2.0.0's renamed `streamable_http_client` import and custom HTTP header configuration via `create_mcp_http_client`.
   - Discussion highlights: Fixes a widely reported breakage (tracked in issue #1668) for all MCP-integrated skills, directly addressing the ecosystem's shift to MCP 2.0 standards.
   - Last updated: 2026-09-27

3. **AWT (AI Watch Tester) – zero-code E2E testing skill**  
   - PR: [#822](https://github.com/anthropics/skills/pull/822) | Status: Open | Author: ksgisang
   - Functionality: Open-source skill that gives Claude vision and browser control for automated end-to-end test generation, execution, and debugging.
   - Discussion highlights: One of the longest-active feature PRs (open since March 2026), aligns with community demand for low-code testing automation (echoed in the `testing-patterns` skill PR).
   - Last updated: 2026-09-19

4. **proofcore-contract-auditor – Web3 smart contract audit skill**  
   - PR: [#1771](https://github.com/anthropics/skills/pull/1771) | Status: Open | Author: ProofCore-Protocol
   - Functionality: Agent skill for automated static analysis of Solidity and Rust smart contracts, with cryptographic audit proofs anchored to the TON Blockchain via zero-storage Merkle protocol.
   - Discussion highlights: Represents the fastest-growing niche (Web3/security) in recent skill submissions, bringing blockchain-native notarization to AI audit workflows.
   - Last updated: 2026-09-16

5. **notion-spec-to-implementation + quantitative-resume-auditor**  
   - PR: [#1245](https://github.com/anthropics/skills/pull/1245) | Status: Open | Author: mrdesouzaphd-cmyk
   - Functionality: Dual-skill submission: (1) converts product/tech specs into actionable Notion tasks with implementation plans and acceptance criteria; (2) performs data-driven resume quality auditing.
   - Discussion highlights: Most recently updated long-form feature PR (as of 2026-09-28), addresses high demand for workflow automation and productivity tooling integration.
   - Last updated: 2026-09-28

6. **testing-patterns – full-stack testing methodology skill**  
   - PR: [#723](https://github.com/anthropics/skills/pull/723) | Status: Open | Author: 4444J99
   - Functionality: Comprehensive testing guide covering the Testing Trophy model, unit test AAA patterns, React component testing, E2E best practices, and edge case design.
   - Discussion highlights: Active for 6+ months with consistent updates, fills a gap in standardized testing guidance for AI-generated code.
   - Last updated: 2026-09-21

---

## 2. Community Demand Trends (from top Issues)
The highest-commented issues reveal four prioritized demand directions:
1. **Trust & security governance**: #492 (43 comments) flags critical risk of community skills impersonating official `anthropic/` namespace skills, driving demand for verification, namespace separation, and security auditing tooling (aligns with proposed `skill-security-analyzer` and `agent-governance` skills).
2. **Enterprise collaboration & sharing**: #228 (16 comments, 8 👍) requests org-wide skill sharing libraries to replace manual file transfer, pointing to demand for team/permissioned skill distribution workflows.
3. **Skill builder infrastructure reliability**: #556 (12 comments, 7 👍), #1383, #1390 all report broken evaluation pipelines, trigger detection failures, and platform compatibility gaps – core tooling improvements are the most pressing technical demand for skill creators.
4. **Context efficiency & quality control**: #1487 (excessive token injection from `claude-api` skill), #1385 (reasoning quality gate pipeline proposal), and #514 (document typography quality skill) all reflect demand for skills that reduce token waste and enforce output quality guardrails.

---

## 3. High-Potential Pending Skills
These active, recently updated PRs are likely to land soon, addressing top community pain points:
- **docx orphaned comment detection** ([#1734](https://github.com/anthropics/skills/pull/1734)): Extends the widely used docx skill suite to identify unattached comments, complementing recent docx reliability fixes (#1792, #541).
- **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)): Zero-cost Markdown-to-MP4 conversion with realistic voiceovers, filling a high-demand content creation niche.
- **blast-radius** ([#1776](https://github.com/anthropics/skills/pull/1776)): Pre-operation checklist for bulk/destructive write tasks (archiving, access revocation, batch deletions), addressing operational safety gaps.
- **LibreOffice timeout error handling (docx)** ([#1792](https://github.com/anthropics/skills/pull/1792)): Fixes silent false-success bugs in docx change acceptance, a high-impact reliability improvement for document workflows.
- **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615)): HPC cluster operation skill with SSH/Slurm workflow support, targeting the high-performance computing user segment.

---

## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand is for **core infrastructure reliability improvements (trigger evaluation, cross-platform compatibility) and trust/security guardrails for skill distribution**, paired with fast-growing interest in workflow automation and testing tooling skills that reduce manual effort for enterprise and developer users.

---

# Claude Code Community Digest | 2026-09-28
Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Last 7 Days' Highlights
This week shipped 4 minor releases (v2.1.280–2.1.283) headlined by the launch of **Claude Opus 5.5** as the default Opus model, gateway infrastructure improvements, and UX refinements for terminal and desktop users. The community is actively reporting regressions around the recent Chat/Cowork UI merge, Windows platform bugs, and permission/security edge cases for agent hooks and MCP integrations. On the development side, the team is iterating heavily on the diff panel, `sec-default` security enforcement, and telemetry pipeline consistency across plugin tiers.

---

## 2. Releases
4 versions were published in the last 7 days:

- **v2.1.283**
  - Added `x-claude-code-prompt-id` gateway hint header (opt-in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`) so LLM gateways can group requests tied to a single user prompt.
  - Added `availableModelsMatch` managed setting; `"exact"` mode restricts model selection to entries in `availableModels`.
- **v2.1.282**
  - Added `maxProseWidth` setting to cap Claude's prose output width in wide terminals, while tables and code blocks retain full width.
  - Added startup notice, `/status`, and `claude doctor` entries that list telemetry variables in project settings files that were ignored.
- **v2.1.281**
  - Added Claude apps gateway support for newer Claude Desktop keys in `desktop` policy blocks, including `blockReadsOutsideWorkingDirectories` and `disableBypassPermissionsMode`.
  - Added `assume_role` for Claude apps gateway Bedrock upstreams, enabling the gateway to call Bedrock under a specified IAM role.
- **v2.1.280**
  - Launched **Claude Opus 5.5** (`claude-opus-5-5`) as the new default Opus model: 1M context window, priced at $4/$20 per million tokens with $0.20/Mtok cache reads.
  - Expanded mouse support in fullscreen mode: wheel scroll works in the `/skills` list, and skill state options in `/plugin` are clickable.

---

## 3. Hot Issues (Top 10 by impact/activity)
| # | Title | Status | Why it matters | Community reaction |
|---|-------|--------|----------------|--------------------|
| 1 | [#76694 Cowork: new projects lost "Choose a folder" — context menu replaced with Chat-style upload-only knowledge menu after Chat/Cowork merge](https://github.com/anthropics/claude-code/issues/76694) | Open | Breaks core Cowork project setup flow for new users after the UI merge; affects both Windows and macOS. | 35 comments, 28 👍 — the most engaged issue of the week, with users requesting the old folder-picker workflow back. |
| 2 | [#93482 Cowork: `device_commit_files` reports success on overwrites but on-disk content lags exactly one commit behind (silent stale write, fresh mtime)](https://github.com/anthropics/claude-code/issues/93482) | Open | Silent data-loss bug on Windows where file writes appear successful but persist stale content. | 14 comments, 0 👍 — high severity for Cowork users relying on file sync. |
| 3 | [#89398 Slash-command picker does not open unless "/" is first character of the composer, but the command still runs on submit](https://github.com/anthropics/claude-code/issues/89398) | Open | UI inconsistency on Windows desktop: autocomplete fails but the command executes, leading to surprising behavior. | 15 comments, 7 👍 — common pain point for power users of slash commands. |
| 4 | [#92007 `/model opusplan` fails with "Unsupported model" — worked for months until today](https://github.com/anthropics/claude-code/issues/92007) | Open | Breaking change to model aliasing on Windows; blocks users who rely on `opusplan` shorthand. | 7 comments, 12 👍 — strong user demand for alias preservation or migration guidance. |
| 5 | [#94675 `UserPromptSubmit` fires for agent/system-injected messages with no `prompt_source`/`is_meta` in payload — hooks cannot tell them from typed input (prompt-injection surface)](https://github.com/anthropics/claude-code/issues/94675) | Open | Security flaw where hooks cannot distinguish user input from agent-generated messages, creating a prompt-injection vector. | 3 comments, 1 👍 — flagged as important by security-focused developers. |
| 6 | [#97701 `claude-bin --channels` churns sessions and repeatedly kills the plugin MCP server (2.1.283 regression)](https://github.com/anthropics/claude-code/issues/97701) | Open | Regression in the latest release breaks long-lived daemon/channel workloads on macOS by restarting MCP servers. | 1 comment, 0 👍 — critical for production headless deployments. |
| 7 | [#97058 Desktop: finished Project threads keep live sessions and fill the process cap, so new Project sessions are refused](https://github.com/anthropics/claude-code/issues/97058) | Open | Resource leak on macOS desktop where completed projects hold process slots and block new sessions. | 1 comment, 0 👍 — impacts users with many concurrent projects. |
| 8 | [#76606 Prompt cache invalidated by rewrites of messages in long sessions](https://github.com/anthropics/claude-code/issues/76606) | Closed | Fixed a cost issue where silent message rewrites in long sessions flushed the prompt cache and spiked usage. | 7 comments, 0 👍 — resolved, welcomed by cost-conscious users. |
| 9 | [#74447 `/color` command: support arbitrary hex colors (terminals already support truecolor)](https://github.com/anthropics/claude-code/issues/74447) | Closed | Enhancement delivered: the `/color` command now supports truecolor hex values beyond the original 8 named colors. | 5 comments, 2 👍 — popular quality-of-life improvement for TUI users. |
| 10 | [#88128 MCP `tools/list` and `resources/list` rejected as invalid when optional `ttlMs`/`cacheScope` cache hints are omitted (protocol 2026-07-28)](https://github.com/anthropics/claude-code/issues/88128) | Open | Protocol compliance bug on Linux where optional MCP cache fields are treated as required, breaking compatible servers. | 2 comments, 0 👍 — important for MCP server authors. |

---

## 4. Key PR Progress (Top 10)
| # | Title | Status | Description |
|---|-------|--------|-------------|
| 1 | [#97688 `sec-default`: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688) | Open | Ensures org-level `sec-default` policy prevents installed user plugins from dropping or rewriting telemetry records bound for the collector stream, extending `telemetry.log` past the user tier. |
| 2 | [#97334 `sec-default`: the rows a conversation keeps continue past the user tier](https://github.com/anthropics/claude-code/pull/97334) | Open | Extends conversation-row retention policy enforcement across user/org tiers; depends on engine-side `session.append` support and is gated on released CLI compatibility. |
| 3 | [#97241 `sec-default`: the system prompt's sections continue past the user tier](https://github.com/anthropics/claude-code/pull/97241) | Open | Extends system prompt section composition to enforce org-level `sec-default` rules above user-tier modifications; requires engine `prompt.compose` support. |
| 4 | [#94847 `diff`: the first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847) | Open | Fixes a UX quirk where the diff pane opened with empty content for edits to untracked/ignored files or outside the worktree; now only opens when there are tracked changes to display. |
| 5 | [#95587 `diff`: a resumed session with edits opens the pane, `/clear` leaves it up, and the session line follows the engine's start](https://github.com/anthropics/claude-code/pull/95587) | Closed | Aligns diff panel behavior with the built-in panel: resumed sessions with edits open the pane immediately, `/clear` doesn't close it, and lifecycle timing matches the engine. |
| 6 | [#96434 `security-guidance`: keep denied and secret files out of the reviewer's reach](https://github.com/anthropics/claude-code/pull/96434) | Open | Fixes a security gap where the security-guidance reviewer could access files blocked by session permission rules via `git diff`/`git show` in Stop-hook, commit, and push review prompts. |
| 7 | [#96487 `telemetry`: rows carry the engine's version, base version and build time from `$.session.version()`](https://github.com/anthropics/claude-code/pull/96487) | Closed | Adds engine version metadata to telemetry rows by reading `$.session.version()` (available from 2.1.281+), fixing missing version data in external builds. |
| 8 | [#96363 `diff`: pass `--no-color` so forced git colors do not empty the diff body](https://github.com/anthropics/claude-code/pull/96363) | Closed | Fixes blank diff output when users have `color.ui=always` or `color.diff=always` in git config by disabling color for diff commands. |
| 9 | [#95423 `diff`: a shell command the tool held read-only fetches nothing](https://github.com/anthropics/claude-code/pull/95423) | Closed | Optimizes diff panel performance by skipping refetches after read-only shell commands (e.g. `ls`, `git status`, `grep`), matching built-in panel behavior. |
| 10 | [#95409 `mods/agents-md`: the AGENTS.md project-instructions mod](https://github.com/anthropics/claude-code/pull/95409) | Closed | Adds the `agents-md` mod source under `mods/agents-md`, which reads `AGENTS.md` instruction files similarly to how the engine handles `CLAUDE.md`, configurable via `instructionFiles`. |

---

## 5. Hot Discussions
Omitted — no discussion data was provided in this week's dataset.

---

## 6. Feature Request Trends
1. **Customization & UX control**: Users want more granular TUI customization (arbitrary hex color support delivered this week, with continued demand for layout and width controls like `maxProseWidth`).
2. **Model flexibility**: Strong interest in preserving model aliases (e.g. `opusplan`) and clearer documentation around model selection changes, plus fine-grained `availableModels` matching policies.
3. **Gateway & enterprise controls**: Growing demand for gateway-side observability (`x-claude-code-prompt-id` header), IAM role assumption for Bedrock upstreams, and org-level policy enforcement for desktop and app deployments.
4. **MCP ecosystem robustness**: Developers want more tolerant MCP protocol handling (optional field handling, better startup ordering) to support a wider range of third-party servers.
5. **Agent & hook extensibility**: Requests for richer hook metadata (e.g. `prompt_source` to distinguish user vs. system messages) and more reliable long-running agent/channel deployments.

---

## 7. Developer Pain Points
1. **Chat/Cowork merge regressions**: The UI consolidation broke core workflows like the "Choose a folder" project setup flow, causing widespread confusion and loss of functionality.
2. **Windows platform instability**: Disproportionate number of bugs on Windows, including slash-command picker failures, Bash backslash escaping issues, permission allow-list path matching problems with drive letters, and Cowork file sync staleness.
3. **Session lifecycle leaks**: Both desktop and headless users experience resource leaks — finished project sessions hold process slots, channel daemons churn MCP servers, and long-running sessions accumulate memory.
4. **Permission & security edge cases**: Inconsistent behavior around allow-listed MCP tools, symlinked denied paths in WSL2 sandboxes, and hooks lacking context to distinguish user input from agent-generated messages.
5. **Cache & cost unpredictability**: Silent session rewrites and compaction side effects that invalidate prompt cache, leading to unexpected cost spikes and degraded performance in long conversations.
6. **Model alias churn**: Breaking changes to model shorthands (e.g. `opusplan`) without clear migration paths disrupt existing workflows and automation scripts.


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-09-28

---

## 1. Last 7 Days' Highlights
This week saw 10 rapid Rust SDK alpha releases (v0.158.0 and v0.159.0 lineages) alongside a wave of desktop client stability regressions across Windows and Linux, with multiple reports of hangs, startup failures, and sandbox issues in the 26.924 build line. The community also pushed forward discussions around cross-device sync, remote control, and third-party tooling built on Codex's hook and MCP ecosystems.

---

## 2. Releases
10 Rust SDK alpha releases shipped in the past 7 days, spanning both the `v0.158.0` and `v0.159.0` development tracks. No detailed changelogs are attached to the tags, but the cadence aligns with active work on sandboxing, app-server, and CLI features reflected in this week's PR and issue activity.
- [rust-v0.159.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.11) (latest)
- [rust-v0.159.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.10)
- [rust-v0.159.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.9)
- [rust-v0.159.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.8)
- [rust-v0.159.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.7)
- [rust-v0.159.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.6)
- [rust-v0.159.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.5)
- [rust-v0.159.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.4)
- [rust-v0.158.0-alpha.15.3](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.3)
- [rust-v0.158.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.2.1)

---

## 3. Hot Issues
1. **#45119** — *macOS 14.2: sandbox startup fails with unbound variable TIOCSTI*  
   Longstanding sandbox bug on Apple Silicon with 33 comments; impacts CLI and desktop sandbox initialization.  
   [openai/codex#45119](https://github.com/openai/codex/issues/45119)

2. **#42739** — *Local projects disappear from sidebar after Windows desktop update*  
   32 comments, widely reported regression where Projects section empties post-update while chats and files remain intact.  
   [openai/codex#42739](https://github.com/openai/codex/issues/42739)

3. **#48189** — *Linux: Codex Desktop 26.924.20706 hangs indefinitely on "Starting your task"*  
   42 👍 and 24 comments — top-voted issue of the week. Rollback to 26.917.71314 resolves it, marking a clear 26.924 regression.  
   [openai/codex#48189](https://github.com/openai/codex/issues/48189)

4. **#48554** — *Linux: Electron runtime replaces libuv's SIGCHLD handler, children never reaped*  
   Deep technical root cause for "Git is unavailable", shell timeouts, and thread hangs in 26.924 Linux builds.  
   [openai/codex#48554](https://github.com/openai/codex/issues/48554)

5. **#48333** — *Windows: 26.924.1866.0 stuck on startup spinner until app-server codex.exe is terminated*  
   22 comments; Windows app-server deadlock at launch, mirroring the Linux hang pattern.  
   [openai/codex#48333](https://github.com/openai/codex/issues/48333)

6. **#46388** — *Windows CLI 0.155.0 regression: elevated sandbox init fails during runtime path validation*  
   20 comments; 0.154.0 works, 0.155.0 breaks elevated sandbox — another clear regression.  
   [openai/codex#46388](https://github.com/openai/codex/issues/46388)

7. **#48422** — *Windows: visible console windows flash for shell process children on every session/turn*  
   18 👍 and 16 comments; highly visible UX annoyance in CLI 0.157.1, linked to daemon spawning behavior.  
   [openai/codex#48422](https://github.com/openai/codex/issues/48422)

8. **#16786** — *Windows app repeatedly spawns `git ls-files`, NTFS nonpaged pool grows continuously*  
   Long-running performance leak (17 comments, open since April) tied to excessive background Git queries.  
   [openai/codex#16786](https://github.com/openai/codex/issues/16786)

9. **#43803** — *`request_user_input_async` question card auto-dismisses when final message renders*  
   8 👍 and 11 comments; breaks interactive clarification flows on macOS desktop with GPT-6-Astra.  
   [openai/codex#43803](https://github.com/openai/codex/issues/43803)

10. **#47444** — *Warning on statusbar does not clear after viewed via F2 on macOS CLI*  
    9 👍 and 5 comments; small but frequently reported TUI polish issue in CLI 0.156.1.  
    [openai/codex#47444](https://github.com/openai/codex/issues/47444)

---

## 4. Key PR Progress
1. **#48829** — *Wait briefly for the Windows sandbox provisioning service to start*  
   Polls service status for up to 5 seconds, reducing false startup failures without full timeout cost.  
   [openai/codex#48829](https://github.com/openai/codex/pull/48829)

2. **#48799** — *Fix SGR mouse reporting for Windows terminal capture*  
   Sends SGR encoding request separately so ConPTY translates legacy mouse reports correctly on Windows.  
   [openai/codex#48799](https://github.com/openai/codex/pull/48799)

3. **#48772** — *Fix Unix socket connections through long symlink paths*  
   Resolves symlinks and retries when advertised socket paths exceed Unix socket length limits.  
   [openai/codex#48772](https://github.com/openai/codex/pull/48772)

4. **#48812** — *Add history-aware prewarming for idle threads*  
   Prebuilds WebSocket responses with history + executed-tool metadata, cutting latency for the next turn.  
   [openai/codex#48812](https://github.com/openai/codex/pull/48812)

5. **#48783** — *Add single-server MCP status discovery with thread connection reuse*  
   Lets users inspect one MCP server without full inventory scans or new connections.  
   [openai/codex#48783](https://github.com/openai/codex/pull/48783)

6. **#48814** — *Preserve punctuation and semicolons in Mermaid labels*  
   Fixes rendering of Mermaid diagrams with semicolons, array syntax, or class-member punctuation in labels.  
   [openai/codex#48814](https://github.com/openai/codex/pull/48814)

7. **#48796** — *Add opt-in structured errors for Guardian circuit-breaker interruptions*  
   Introduces `auto_review.circuit_breaker` structured errors for Guardian denials, behind an opt-in flag.  
   [openai/codex#48796](https://github.com/openai/codex/pull/48796)

8. **#48805** — *Allow transcript wheel scrolling while a modal is open*  
   Enables reviewing plan context while "Implement this plan?" modals are shown.  
   [openai/codex#48805](https://github.com/openai/codex/pull/48805)

9. **#48824** — *Keep voice RTP timestamps aligned to 20 ms packets*  
   Prevents audio receiver rejection from jitter/mute shifts off the 20 ms frame grid.  
   [openai/codex#48824](https://github.com/openai/codex/pull/48824)

10. **#564** — *feat: watch mode*  
    Long-running PR (since 2025) adding passive file-watch mode that triggers Codex on `// CODEX:` comment markers.  
    [openai/codex#564](https://github.com/openai/codex/pull/564)

---

## 5. Hot Discussions

### Ideas
1. **#9200** — *Add the ability to remote control Codex from ChatGPT app*  
   Top-engaged idea (191 👍, 50 comments); users want headless/daemon Codex controlled via mobile ChatGPT UI.  
   [openai/codex#9200](https://github.com/openai/codex/discussions/9200)

2. **#14067** — *Synchronization of Codex threads and session context across devices*  
   64 👍, 12 comments; multi-machine developers want shared thread/context state across work and home setups.  
   [openai/codex#14067](https://github.com/openai/codex/discussions/14067)

3. **#40291** — *Fixed-price high-usage individual plan for Codex/agent features*  
   6 comments; power users request effectively-unlimited tiers under fair use to avoid constant limit tracking.  
   [openai/codex#40291](https://github.com/openai/codex/discussions/40291)

4. **#7366** — *Reference files that are gitignored*  
   7 👍; users want `@`-file references to work on `.gitignore`d files (e.g. local dependencies, config).  
   [openai/codex#7366](https://github.com/openai/codex/discussions/7366)

5. **#46658** — *Beyond Auto mode: learning to allocate models, tools, and subagents*  
   Adaptive allocation of reasoning effort, models, and subagents as a first-class feature.  
   [openai/codex#46658](https://github.com/openai/codex/discussions/46658)

### Q&A
1. **#8503** — *"usage limit reached" despite Code Review usage showing 100% remaining*  
   21 comments; GitHub Connector reports limit exhaustion while dashboards show full quota — accounting mismatch.  
   [openai/codex#8503](https://github.com/openai/codex/discussions/8503)

2. **#45938** — *PreToolUse can block/rewrite calls, but cannot substitute tool results — deliberate?*  
   Explores hook-system boundaries for building "Experience" layers on top of Codex.  
   [openai/codex#45938](https://github.com/openai/codex/discussions/45938)

3. **#48512** — *How to run Codex with custom deployed OpenAI model and API KEY*  
   Commonly asked setup question for self-hosted/custom-model deployments.  
   [openai/codex#48512](https://github.com/openai/codex/discussions/48512)

### Show and tell
1. **#40840** — *LikeMinds — coordinating separate Codex agents without a human message bus*  
   Multi-machine Codex coordination layer that syncs project context across Windows/macOS agents.  
   [openai/codex#40840](https://github.com/openai/codex/discussions/40840)

2. **#47231** — *Mobile Codex — run Codex directly on Android, no remote PC required*  
   Android app bundling a Codex port with mobile UI via app-server; addresses the #9200 remote-use demand client-side.  
   [openai/codex#47231](https://github.com/openai/codex/discussions/47231)

---

## 6. Feature Request Trends
1. **Cross-device and remote access** — Thread sync (#14067), mobile/remote control (#9200), and Android-native runtime (#47231) are consistent top asks.
2. **Usage model flexibility** — High-usage fixed-price tiers (#40291) and clearer, more accurate usage metering (#8503, #42983).
3. **Deeper workspace integration** — Gitignored file references (#7366), visible project/cwd/Git branch in desktop UI (#28977), and dynamic conversation renaming (#14044).
4. **Agent autonomy and intelligence** — Adaptive model/tool/subagent allocation (#46658) and persistent project memory shared across agents (#26397).
5. **UX polish** — Disable hover sidebar expansion (#31538), Shift+Enter for newlines in CLI (#14104), and thicker/custom scrollbars (#36270).

---

## 7. Developer Pain Points
1. **26.924 desktop build instability across platforms** — Linux hangs/task failures (#48189, #48554, #48345, #48417), Windows startup spinner freezes (#48333, #48463, #48522), and widespread rollback to 26.917 as a workaround.
2. **Windows console-window flashing** — Daemon/hook/shell spawning pops visible terminal windows (#48422, #44768, #48325, #48356), a top annoyance for CLI and desktop users.
3. **Sandbox regressions** — macOS TIOCSTI failures (#45119), Windows elevated sandbox path validation breaks (#46388), and Chromebook Linux socket mount isolation errors (#48523).
4. **Unclear / inconsistent usage limits** — Mismatch between reported usage and errors (#8503), unexpected fast quota burn (#42983), and confusion about Plus tier limits across ChatGPT vs Codex (#2251).
5. **Background Git query overhead** — Repeated `git ls-files` causing memory/resource leaks on Windows (#16786) and contributing to the daemon flashing issue (#48356).
6. **Broken interactive flows** — Auto-dismissed async input cards (#43803) and plan-mode blocking terminal scroll (#48703) break core agent-loop UX.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-09-28
*Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

---

## 1. Last 7 Days' Highlights
This week saw the release of `v0.61.0` stable, `v0.62.0-preview.0`, and multiple nightly builds with core fixes for proxy resolution, retry indicators, and initial support for Gemini 3.8 Flash / 3.5 Flash Lite models. Security and agent reliability dominated active development, with 10+ PRs addressing path traversal risks, workspace trust propagation, and memory leaks in long-running agent loops. Top community-reported bugs focus on subagent misbehavior (false success reporting, hanging) and Auto Memory system reliability.

---

## 2. Releases
| Version | Release Date | Key Changes |
|---------|--------------|-------------|
| [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) | 2026-09 (stable) | General availability of v0.61 feature set (full changelog linked in release) |
| [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-preview.0) | 2026-09 | Fix for A2A server tasks metadata endpoint unsupported store edge case |
| [v0.62.0-nightly.20260923.g62364cb20](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260923.g62364cb20) | 2026-09-23 | Added support for Gemini 3.8 Flash and 3.5 Flash Lite models ([PR #29443](https://github.com/google-gemini/gemini-cli/pull/29443)) |
| [v0.62.0-nightly.20260922.gd5b3e3acc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260922.gd5b3e3acc) | 2026-09-22 | Fixed proxy-agent esbuild interop for environment proxy resolution; fixed ACP mode tool_call update timing before permission requests |
| [v0.62.0-nightly.20260924.g8e70c862f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260924.g8e70c862f) | 2026-09-24 | Added retry progress indicator during connection recovery; fixed VSC integration test presence check |
| [v0.62.0-nightly.20260925.gbedef96ef](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260925.gbedef96ef) | 2026-09-25 | Fixed CLI to distinguish missing MCP enablement config from malformed config |
| [v0.63.0-nightly.20260926.g2fe7c2d3f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260926.g2fe7c2d3f) | 2026-09-26 | Removed invalid `diff.external` override in core module |

---

## 3. Hot Issues (Top 10 by impact & community engagement)
1. **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority P1, 8 👍, 8 comments*  
   Critical user-facing bug where the generalist agent hangs indefinitely on simple tasks (e.g., folder creation). Users report disabling subagent delegation as a workaround. Highest upvoted issue this week, indicating widespread impact.

2. **[#22323: Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, 2 👍, 13 comments*  
   `codebase_investigator` subagent falsely reports successful goal completion when it hits the maximum turn limit, hiding workflow interruptions. This misleads users about task completion status and undermines trust in agent output.

3. **[#19873: Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *Priority P2, 1 👍, 9 comments*  
   Major enhancement proposal to leverage Gemini 3's native bash affinity via secure sandboxing, enabling the model to use standard POSIX tools natively while maintaining safety. One of the most-discussed feature ideas this cycle.

4. **[#22745: Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Priority P2, 1 👍, 7 comments*  
   Epic tracking investigation into AST-aware codebase tools, which would reduce token noise, lower turn counts, and improve code navigation precision for the `codebase_investigator` agent.

5. **[#21968: Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *Priority P2, 0 👍, 6 comments*  
   Anecdotal but widespread user report that the model fails to invoke custom skills/subagents autonomously, even for highly relevant tasks (e.g., gradle/git skills for build operations). Highlights a gap in agent tool-use routing logic.

6. **[#26525: Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *Priority P2, 0 👍, 5 comments*  
   Security concern: Auto Memory sends transcript content to the model before secret redaction occurs, and logs may expose skill content. Important for users handling sensitive codebases.

7. **[#26522: Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *Priority P2, 0 👍, 4 comments*  
   Auto Memory repeatedly reprocesses low-value sessions that the extraction agent skips, wasting resources and cluttering the inbox. One of three linked Auto Memory quality issues active this week.

8. **[#22267: Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   *Priority P2, 0 👍, 4 comments*  
   Bug where Browser Agent fails to respect global/project-level `settings.json` configurations (e.g., `maxTurns`), even though the AgentRegistry correctly loads merged settings. Impacts users who customize agent behavior per project.

9. **[#21983: Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority P1, 1 👍, 4 comments*  
   Platform compatibility bug: the browser subagent fails on Linux Wayland systems, reporting false GOAL completion. Blocks adoption for Linux desktop users on modern distributions.

10. **[#24246: 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
    *Priority P2, 0 👍, 3 comments*  
    Scaling limitation: Gemini CLI returns a 400 error when more than 128 tools are available. Users with large skill/agent libraries hit this limit, requiring smarter tool scoping logic.

---

## 4. Key PR Progress (Top 10 by priority & impact)
1. **[#29527: fix(core): ensure request contents do not end with a model turn](https://github.com/google-gemini/gemini-cli/pull/29527)**  
   *Priority P1, Open*  
   Fixes 400 Bad Request errors after `/rewind`, stream interruption, or empty trailing user turns, which previously made requests fail due to unsupported model-turn-ending history.

2. **[#29528: fix(cli): propagate resolved folder trust state in headless mode](https://github.com/google-gemini/gemini-cli/pull/29528)**  
   *Priority P1, Open*  
   Resolves a split-brain state where headless mode unconditionally reported folder trust as enabled, even for untrusted workspaces — a critical security fix for automated/CI workflows.

3. **[#29523: fix(core): minimal env and capped output for external safety checkers](https://github.com/google-gemini/gemini-cli/pull/29523)**  
   *Priority P2, Security, Open*  
   Prevents third-party safety checker binaries from accessing secrets like `GEMINI_API_KEY` (via process environment) and caps their stdout to avoid memory exhaustion from buggy/malicious checkers.

4. **[#29522: fix(core): keep glob tool matches inside the validated search directory](https://github.com/google-gemini/gemini-cli/pull/29522)**  
   *Security, Open*  
   Patches a path traversal vulnerability in the `glob` tool where absolute patterns (e.g., `/etc/*.conf`) would bypass the validated search directory on glob v12.

5. **[#29521: fix(core): contain legacy checkpoint paths to the checkpoint directory](https://github.com/google-gemini/gemini-cli/pull/29521)**  
   *Priority P1, Security, Open*  
   Fixes a path traversal bug in legacy checkpoint resolution where crafted tags (e.g., `x/../../secret`) could write/delete files outside the designated checkpoint directory.

6. **[#29451: fix(core): bound tool output size and optimize memory lifecycle in long-running agent loops](https://github.com/google-gemini/gemini-cli/pull/29451)**  
   *Priority P1, Closed/Merged*  
   Resolves unbounded memory growth in long agent workflows (builds, test suites, large file operations) by capping tool output sizes and optimizing memory cleanup across multi-turn execution.

7. **[#29404: feat(cli): add 'gemini models list' with JSON output](https://github.com/google-gemini/gemini-cli/pull/29404)**  
   *Priority P3, Open*  
   Adds a machine-readable `gemini models list -o json` subcommand, enabling integrations to discover valid model IDs without hardcoding. Fills a gap for CI/CD and automation use cases.

8. **[#29411: fix(cli): resolve resume latest to most recently active session](https://github.com/google-gemini/gemini-cli/pull/29411)**  
   *Priority P2, Open*  
   Fixes `--resume` to load the most recently *active* session instead of the newest *created* session, so users with long-lived main sessions don't accidentally resume into stale short-lived sessions.

9. **[#29520: fix(cli): preserve scroll position and partition pending height budget](https://github.com/google-gemini/gemini-cli/pull/29520)**  
   *Priority P1, Open*  
   Eliminates jarring scroll position resets during active streaming, tool confirmation prompts, and expanded content inspection — a major UX improvement for interactive terminal use.

10. **[#28676: fix(cli): forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/28676)**  
    *Priority P2, Help Wanted, Open*  
    Ensures termination signals (SIGTERM, SIGINT, etc.) are forwarded from the bootstrap parent to the relaunched child process, preventing orphaned processes when the CLI is supervised by systemd/container runtimes.

---

## 5. Hot Discussions
*No discussion data was provided in the source dataset. This section is omitted.*

---

## 6. Feature Request Trends
1. **Agent intelligence & tool routing**: Users want better autonomous selection of subagents/skills, plus AST-aware code navigation tools to reduce token usage and improve codebase analysis precision.
2. **Sandboxed native execution**: High demand for secure, zero-dependency OS sandboxing to leverage Gemini 3's native bash/POSIX tool affinity without compromising system safety.
3. **Persistent task tracking**: Requests to replace in-context todo tools with file-based, cross-session task tracking to eliminate "context rot" and memory loss between sessions.
4. **Improved observability**: Users want easier access to subagent trajectories (e.g., via `/chat share`) and more complete bug report context for subagent sessions.
5. **Machine-readable CLI outputs**: Demand for JSON-formatted outputs (e.g., model listing) to support CI/CD integration and third-party tooling.
6. **Browser agent resilience**: Requests for automatic session takeover, lock recovery, and better platform compatibility (Wayland support).
7. **Workspace-scoped policies**: Interest in per-workspace policy management instead of only global policies, for multi-project workflows.

---

## 7. Developer Pain Points
1. **Subagent reliability bugs**: Frequent reports of false success reporting (MAX_TURNS masked as GOAL completion), indefinite hanging, and subagents ignoring user configuration overrides.
2. **Auto Memory quality & security gaps**: Silent skipping of invalid patches, indefinite retries of low-signal sessions, and pre-redaction data exposure create both functional and trust issues.
3. **Terminal UX friction**: Flickering on resize/fast typing, unexpected scroll resets during streaming, and `\n` escape behavior inconsistencies degrade interactive experience.
4. **Workspace trust edge cases**: Inconsistent trust state propagation in headless mode and A2A server workflows creates security risks and unexpected behavior in CI environments.
5. **Tool scaling limits**: The 128-tool cap causes 400 errors for users with large skill/agent libraries, with no built-in dynamic scoping.
6. **Path traversal & security vulnerabilities**: Multiple recent fixes for glob, checkpoint, and external checker risks indicate ongoing gaps in input validation for filesystem operations.
7. **Temporary file clutter**: The model frequently creates tmp scripts in random directories, creating cleanup overhead for users preparing clean commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-28
---
## 1. Last 7 Days' Highlights
Over the past week, the Copilot CLI team shipped 8 pre-release builds (v1.0.88 through v1.0.89-5) with expanded model support (Claude Opus 5.5, GPT-6 Sol/Luna), improved session UX (sidebar unread indicators, double-Esc prompt recall), and initial Claude Code rule file compatibility. Permission granularity, model switching flexibility, and long-running session auth stability remained the top community concerns, with multiple high-upvote feature requests seeing renewed discussion.

---
## 2. Releases
### v1.0.89 Series (Pre-release, 2026-09-22 to 2026-09-27)
**New Capabilities**
- Model expansion: Added `claude-opus-5.5`, plus GPT-6 Sol and GPT-6 Luna to the model picker when available.
- Claude Code ecosystem compatibility: Supports `.claude/rules` rule files as custom instructions.
- Session UX: Sidebar sessions show a blue unread dot for completed turns; empty chat input double `Esc` recalls unsent prompts in local sessions; `Up` in empty input recalls pending queued messages.
- Routing & model switching: Auto-suggests routing tiers with one-click/shortcut switching; quick feedback prompt appears after manual model changes.
- MCP: Pre-registered OAuth clients respect configured `oauthScopes`.
- Input: Left-click places cursor at exact position in `ask_user` and elicitation form fields.
**Fixes & Improvements**
- Direct plugin installs can be toggled on/off; disabled recorded plugins stop loading.
- Ask-user forms keep custom "Other" answers isolated across questions.
- View tool correctly handles line ranges when providers send flattened `view_range` arguments.
- Managed Connector consent flow shows copyable authorization URL during connect/reconnect.
- Sandboxed command support improved on supported Windows versions.
  > Related repo: [github/copilot-cli Releases](https://github.com/github/copilot-cli/releases)

### v1.0.88 (Stable, 2026-09-22) & Patch Releases
**New**
- Optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions.
- Text selection enabled in bottom-anchored dialogs (including login device codes).
**Fixes**
- Preserves `/allow-all` during managed-settings refresh failures; remembers exact session approvals for missing paths (visible in `/list-dirs`, cleared via `/reset-allowed-tools`).
- Sandboxed network denials from proxy tunnel failures handled correctly.
**Improvements**
- Namespaced custom skills and ignored skill directories supported during skill discovery.
- MCP and plugin views display server display names and plugin descriptions for clearer status.
  > Related repo: [github/copilot-cli Releases](https://github.com/github/copilot-cli/releases)

---
## 3. Hot Issues (Top 10 Noteworthy)
1. **#179 — Globally configurable allowed tools** [🔗](https://github.com/github/copilot-cli/issues/179)
   - Open | 43 👍 | Updated 2026-09-27
   - Why it matters: The oldest and highest-upvote permission request — users want Claude Code-style global tool allowlists in `config.json` to avoid per-session approval overhead. Community engagement remains high 11 months after creation.
2. **#3709 — Allow `/model` to switch between multiple models (including BYOK/local) in one session** [🔗](https://github.com/github/copilot-cli/issues/3709)
   - Open | 33 👍 | Updated 2026-09-27
   - Why it matters: BYOK users are locked to a single model per session via `COPILOT_MODEL`, with the `/model` picker only showing GitHub-hosted options. As local/BYOK adoption grows, this is a top workflow blocker.
3. **#1613 — Built-in git worktree lifecycle management** [🔗](https://github.com/github/copilot-cli/issues/1613)
   - Open | 38 👍 | Updated 2026-09-27
   - Why it matters: Users want the agent to create/destroy isolated worktrees automatically for multi-task workflows, reducing context switching and accidental file conflicts. High upvote count signals strong demand.
4. **#1973 — Feature Request: Tool whitelist for Interactive Mode** [🔗](https://github.com/github/copilot-cli/issues/1973)
   - Open | 29 👍 | 13 comments | Updated 2026-09-27
   - Why it matters: Current interactive mode forces approval for every tool call (including safe read-only operations like `grep`, `cat`, `git log`), while `/allow-all` is too permissive. Users want granular read/write permission tiers.
5. **#1857 — Allow users to cancel/remove enqueued messages before execution** [🔗](https://github.com/github/copilot-cli/issues/1857)
   - Open | 29 👍 | 12 comments | Updated 2026-09-27
   - Why it matters: Queued messages (via `Ctrl+Q`/`Ctrl+Enter`) can’t be canceled while the agent is busy or during `/compact`, forcing users to wait through unwanted tasks. A core UX pain point for power users.
6. **#1305 — Support CIMD for Remote OAuth MCP Servers** [🔗](https://github.com/github/copilot-cli/issues/1305)
   - Closed | 39 👍 | Updated 2026-09-27
   - Why it matters: Resolved request for OAuth MCP servers that use CIMD (Client-Initiated Mutual DCR) instead of standard DCR, expanding enterprise MCP compatibility. High upvotes reflect broad enterprise interest.
7. **#2627 — Configurable system prompt (reduce fixed token overhead)** [🔗](https://github.com/github/copilot-cli/issues/2627)
   - Open | 21 👍 | Updated 2026-09-27
   - Why it matters: The default system prompt consumes ~20,500 tokens (~10% of a 200K context window) plus ~8,500 tool definition tokens before any user input. Users want to trim unneeded instructions to save cost and extend context.
8. **#4929 — Process-local auth token stops refreshing; all prompts fail until restart** [🔗](https://github.com/github/copilot-cli/issues/4929)
   - Open (triage) | 7 comments | Updated 2026-09-27
   - Why it matters: Newly reported critical reliability bug — long-running CLI processes permanently lose auth, with `/login` unable to recover. Only a restart fixes it, disrupting long development sessions.
9. **#4905 — Desktop app: sessions die minutes after spawn due to stale GitHub MCP credential registration** [🔗](https://github.com/github/copilot-cli/issues/4905)
   - Open (triage) | 4 👍 | Updated 2026-09-27
   - Why it matters: Desktop app users face frequent session crashes linked to MCP server catalog staleness, even with valid `gh auth` status. Affects core MCP functionality for desktop users.
10. **#2285 — Copying commands includes invisible characters causing "command not found"** [🔗](https://github.com/github/copilot-cli/issues/2285)
    - Closed | 10 👍 | Updated 2026-09-27
    - Why it matters: Resolved common UX bug where code block copies contained invisible characters, breaking pasted commands in external terminals. High user impact for daily workflow.

---
## 4. Key PR Progress
*(Note: Only 4 active PRs were updated in the last 7 days.)*
1. **#4948 — Update github-script action pin** [🔗](https://github.com/github/copilot-cli/pull/4948)
   - Open | Updated 2026-09-24
   - Maintainer PR refreshing the pinned `actions/github-script` dependency to v9.0.0 for CI security and compatibility. Validated with `git diff --check`; no runtime dependency changes.
2. **#4770 — Document the WebSocket responses opt-out** [🔗](https://github.com/github/copilot-cli/pull/4770)
   - Open | Updated 2026-09-22
   - Docs PR adding guidance for disabling WebSocket model responses, a critical escape hatch for users on networks blocking WebSockets or facing `400 input item ID does not belong to this connection` errors.
3. **#4739 — docs: propose terminal-owned macOS notifications** [🔗](https://github.com/github/copilot-cli/pull/4739)
   - Open | Updated 2026-09-21
   - Reference documentation proposal addressing macOS notification click behavior, including an MIT-licensed terminal notification example with portable regression tests (no CLI code changes).
4. **#3817 — kCreate "#"** [🔗](https://github.com/github/copilot-cli/pull/3817)
   - Open | Updated 2026-09-27
   - Low-quality/spam PR with no meaningful description; flagged for closure.

---
## 5. Hot Discussions
*Omitted — no discussion data was provided in this week’s dataset.*

---
## 6. Feature Request Trends
1. **Granular Permission & Tool Control** — The #1 trending direction: users want global and per-session tool allowlists/denylists (separating read-only vs. destructive operations) to replace the binary "approve all / approve each" model (driven by #179, #1973).
2. **Flexible Multi-Model Workflows** — Demand for seamless in-session switching across all model types (GitHub-hosted, BYOK, local providers) and better routing tier controls, aligned with the new v1.0.89 routing suggestions (#3709).
3. **Session & Context Management Improvements** — Requests for worktree lifecycle management, session forking with shared context, and reliable compaction that preserves active task context (#1613, #1697, #1571, #3703).
4. **Token & Cost Optimization** — User desire to configure or slim down the default system prompt and tool definition overhead to reduce token usage and extend usable context windows (#2627).
5. **Queue & Input UX Refinements** — Continued demand for queued message cancellation and better control over pending prompts, building on the partial fixes in v1.0.89-2/3 (#1857).

---
## 7. Developer Pain Points
1. **Long-Running Session Instability** — Auth token refresh failures (#4929), MCP credential/session crashes (#4905), and spurious MCP reconnect notifications flooding idle sessions (#4907) force frequent restarts and break workflow continuity.
2. **Rigid Permission Model** — Developers report high friction from repeated manual approvals for safe read-only tools, paired with overly broad `/allow-all` access that creates security risks for production environments.
3. **BYOK/Custom Provider Limitations** — Beyond single-model lock-in, users report forced greedy sampling (`temperature=0`) causing reasoning model degradation and silent context overflow hangs (#4950), plus unhandled `reasoning` field events from vLLM providers (#3195).
4. **Compaction Reliability Issues** — Multiple users report context loss or instruction corruption after compaction, requiring manual rework to restore task state (#1571, #3703).
5. **MCP Integration Gaps** — Inconsistent skill/plugin injection (plugin skills missing from agent system prompts, #2753), missing tool list updates mid-turn (#3125), and enterprise OAuth compatibility gaps create reliability issues for MCP-heavy workflows.
6. **Platform-Specific Bugs** — Windows sandboxing edge cases, and Windows VS Code Git discovery failures triggered by empty `GIT_CONFIG_VALUE` exports from Copilot CLI (#4531).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-09-28
*Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. Last 7 Days' Highlights
This week the OpenCode project shipped v1.18.32 with targeted fixes for Bedrock image handling and Together AI streaming usage, while community attention concentrated on long-standing CLI usability gaps, v2 migration regressions, and resource leaks in multi-location/MCP workflows. A cluster of new compliance-flagged bug reports around session compaction, inbox persistence, and Electron permission handling also surfaced, signaling active scrutiny of v2 core reliability edge cases.

---

## 2. Releases
### v1.18.32
- **Core bugfixes**
  - Restricted Bedrock image attachment hoisting to only Claude, Nova, and Llama 4 models, preventing invalid payloads for other Bedrock model families.
  - Fixed Together AI streaming usage reporting to correctly track consumption during streamed responses.
- **Community contribution shoutout**: @dc85 contributed DeepSeek V4.1 Flash documentation and Grok 4.7 model support for the Zen gateway.
*Release: [anomalyco/opencode v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)*

---

## 3. Hot Issues
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#13984 CLI copy-paste broken despite "copied to clipboard" toast](https://github.com/anomalyco/opencode/issues/13984) | Oldest and most-commented active UX bug (64 comments, 32 👍); blocks basic developer workflow across CLI installations. | 32 upvotes, sustained troubleshooting activity since Feb 2026; latest update Sep 27. |
| 2 | [#32157 Configurable mid-run prompt delivery (queue vs steer with compaction-aware semantics)](https://github.com/anomalyco/opencode/issues/32157) | Highest-upvoted feature request (84 👍) for v2; defines core interaction model for long-running agent sessions. | 84 upvotes, ongoing design discussion since Jun 2026. |
| 3 | [#49133 TUI Tab key doesn't switch agents; Shift+Tab cycles instead](https://github.com/anomalyco/opencode/issues/49133) | High-impact v2 TUI regression breaking muscle memory for agent switching (16 comments). | Closed after resolution; verified on macOS with v2.0.3. |
| 4 | [#51003 Global stdio MCP servers spawn once per loaded directory, exhausting memory](https://github.com/anomalyco/opencode/issues/51003) | Critical resource leak for multi-project/OpenChamber users; can OOM hosts and break API health checks. | New issue filed Sep 24, actively reproduced. |
| 5 | [#37495 SQLite WAL grows unbounded (10–15 GB) until full quit](https://github.com/anomalyco/opencode/issues/37495) | Severe Desktop data/storage bug caused by multiple long-lived SQLite read transactions blocking WAL checkpoints. | Confirmed on Desktop; users report disk filling to 0 bytes. |
| 6 | [#49027 Agent config extra fields forwarded verbatim to upstream providers, causing invalid_request_error](https://github.com/anomalyco/opencode/issues/49027) | Core v1/v2 compatibility bug breaking custom/vendor agent properties across multiple providers (kimi-k3, glm-5.3, gpt-5.6-luna). | Reproduced on Windows 11 with opencode-ai 1.18.31 / Zen gateway. |
| 7 | [#50885 No personal API key for OpenCode Go subscribers](https://github.com/anomalyco/opencode/issues/50885) | Top billing/access friction issue (9 👍); Go subscribers can't use `/connect` because the Keys page only creates Service Accounts. | Multiple "me too" reports; filed Sep 23. |
| 8 | [#50916 LSP support gutted from v2?](https://github.com/anomalyco/opencode/issues/50916) | Major migration concern for v1 users relying on LSP diagnostics; docs confirm v2 does not run language servers. | 3 upvotes; community asks for official migration path. |
| 9 | [#37888 Add OPENCODE_DISABLE_INSTALL env var to skip npm installs at startup](https://github.com/anomalyco/opencode/issues/37887) | High-demand CI/CD and containerization feature; current behavior breaks reproducible/air-gapped environments. | 3 upvotes; requested for Docker and pipeline use cases. |
| 10 | [#49948 Shell bare redirect bypasses permission check](https://github.com/anomalyco/opencode/issues/49948) | Security-relevant bug: `> file` and other zero-command shell constructs skip approval entirely. | Newly confirmed; affects core shell tool scanner. |

---

## 4. Key PR Progress
| # | PR | Description |
|---|----|-------------|
| 1 | [#51743 fix(core): fail oversized MCP stdio frames without closing the transport](https://github.com/anomalyco/opencode/pull/51743) | Bugfix: MCP stdio servers returning > ~10 MiB messages previously tore down the entire connection. Now the individual call fails cleanly while the transport stays alive. |
| 2 | [#51741 fix(core): fail length finishes that return no content](https://github.com/anomalyco/opencode/pull/51741) | Bugfix: providers ending a Step with `finish_reason: "length"` but zero text/reasoning/tool calls are now treated as failures instead of silently completing. |
| 3 | [#46912 fix(opencode): wait for stdout writes before exit so piped JSON is not truncated](https://github.com/anomalyco/opencode/pull/46912) | Bugfix: `export`, `session list --format json`, and `db --format json` could write partial output before `process.exit()`. Ensures stdout flushes for pipeline use. |
| 4 | [#51736 feat(opencode): add --no-open to `opencode web`](https://github.com/anomalyco/opencode/pull/51736) | New feature: `opencode web --no-open` starts the web server without launching a browser, enabling service/container/WSL deployment patterns. |
| 5 | [#38283 docs: add opencode-quota to ecosystem](https://github.com/anomalyco/opencode/pull/38283) | Documentation: adds the actively maintained `opencode-quota` plugin to the ecosystem/plugins page. |
| 6 | [#51734 docs: add Bee by HEOSSI provider setup](https://github.com/anomalyco/opencode/pull/51734) | Documentation: adds setup guide for Bee by HEOSSI as an OpenAI-compatible provider, superseding an earlier PR closed by compliance automation. |
| 7 | [#50221 chore(nix): update nixpkgs for Bun 1.4](https://github.com/anomalyco/opencode/pull/50221) | Refactor: updates flake.nix nixpkgs input to provide Bun 1.4.2+, fixing Nix node_modules hash computation. |
| 8 | [#45759 fix(core): recover Console models after startup failures](https://github.com/anomalyco/opencode/pull/45759) | Bugfix (closed by cleanup): Console models that failed to load at startup (DNS/config endpoint outage) stayed unavailable permanently; now inventory refreshes once networking recovers. |
| 9 | [#45598 fix(desktop): preserve window permissions](https://github.com/anomalyco/opencode/pull/45598) | Bugfix (closed by cleanup): configures Electron permission handlers once on the shared session and authorizes all live main windows, so opening a second window doesn't break permissions for the first. |
| 10 | [#45579 fix(enterprise): revoke shared session data](https://github.com/anomalyco/opencode/pull/45579) | Bugfix (closed by cleanup): unsharing a session now properly deletes snapshot and compaction data, instead of leaving orphaned objects via incomplete prefix listings. |

---

## 5. Hot Discussions
*Omitted — no discussion thread data was provided in this dataset.*

---

## 6. Feature Request Trends
1. **Mid-run interaction control**: Demand for first-class `queue` / `steer` / `break` semantics for prompts submitted during active agent runs, with compaction-aware behavior ([#32157](https://github.com/anomalyco/opencode/issues/32157)).
2. **CI/CD and headless operability**: Requests like `OPENCODE_DISABLE_INSTALL` ([#37888](https://github.com/anomalyco/opencode/issues/37888)) and `opencode web --no-open` ([#51736](https://github.com/anomalyco/opencode/pull/51736)) reflect strong interest in running OpenCode in containers, pipelines, and server-side deployments.
3. **Desktop UX polish**: "Reopen closed tab" ([#51717](https://github.com/anomalyco/opencode/issues/51717)), Mermaid preview ([#51702](https://github.com/anomalyco/opencode/issues/51702)), and richer session metadata ([#45590](https://github.com/anomalyco/opencode/pull/45590)) indicate users want a more browser-like and content-rich desktop experience.
4. **Plugin/session capability parity**: Request to expose five core session capabilities currently unreachable from plugins ([#49389](https://github.com/anomalyco/opencode/issues/49389)).
5. **Ecosystem/provider expansion**: Community-driven additions of new providers (DeepSeek V4.1, Grok 4.7, Bee by HEOSSI) and plugins (opencode-quota) show a vibrant third-party ecosystem.
6. **Notification/alert flexibility**: Termux notification adapter ([#45676](https://github.com/anomalyco/opencode/pull/45676)) and sound/alert refinements point to demand for better multi-environment alerting.

---

## 7. Developer Pain Points
1. **Basic CLI UX regressions**: Copy-paste is fundamentally broken in the CLI despite success toasts ([#13984](https://github.com/anomalyco/opencode/issues/13984)), and TUI keybindings like Tab for agent switching are inverted in v2 ([#49133](https://github.com/anomalyco/opencode/issues/49133)).
2. **v2 migration gaps**: Missing LSP support ([#50916](https://github.com/anomalyco/opencode/issues/50916)), inconsistent `OPENCODE_CONFIG_DIR` behavior between v1 and v2 loaders ([#32825](https://github.com/anomalyco/opencode/issues/32825)), and tool-call validation differences ([#51661](https://github.com/anomalyco/opencode/issues/51661)) create upgrade friction.
3. **Resource leaks and stability**: Unbounded SQLite WAL growth ([#37495](https://github.com/anomalyco/opencode/issues/37495)), per-directory MCP server duplication ([#51003](https://github.com/anomalyco/opencode/issues/51003)), and orphaned Location MCP processes on reload ([#51731](https://github.com/anomalyco/opencode/issues/51731)) all degrade long-running sessions.
4. **OpenCode Go onboarding and billing friction**: Missing personal API keys for Go subscribers ([#50885](https://github.com/anomalyco/opencode/issues/50885)), CLI authentication failures despite active subscriptions ([#51388](https://github.com/anomalyco/opencode/issues/51388)), and Desktop credential errors ([#51689](https://github.com/anomalyco/opencode/issues/51689)) are top support blockers.
5. **Config and provider compatibility**: Custom agent config fields leak into upstream provider requests and cause `invalid_request_error` ([#49027](https://github.com/anomalyco/opencode/issues/49027)).
6. **Data integrity edge cases**: Session deletion leaves legacy DB rows orphaned ([#50260](https://github.com/anomalyco/opencode/issues/50260)), incomplete compaction summaries advance history boundaries ([#51747](https://github.com/anomalyco/opencode/issues/51747)), and inbox inputs can be lost on crash between enqueue and claim ([#51746](https://github.com/anomalyco/opencode/issues/51746)).
7. **Security surface in shell tool**: Zero-command shell constructs like bare redirects bypass the permission scanner entirely ([#49948](https://github.com/anomalyco/opencode/issues/49948)).
8. **Desktop UI rendering glitches**: Footer line overlap on short terminals ([#51563](https://github.com/anomalyco/opencode/issues/51563)), inline code with slashes misrendered as file links ([#51723](https://github.com/anomalyco/opencode/issues/51723)), and per-window Electron permission handler conflicts ([#51748](https://github.com/anomalyco/opencode/issues/51748)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — September 28, 2026
Source: [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. Last 7 Days' Highlights
Pi shipped v0.87.0/v0.87.1 with expanded frontier model support and core session architecture improvements, while the community actively surfaced bugs around Windows compatibility, startup latency, and extension lifecycle reliability. Key workstreams also progressed on MCP/codemode integration, Bedrock Mantle support, and telemetry parity for agent LLM calls.

---

## 2. Releases
- **v0.87.1**
  - Added support for Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna via supported providers (including GitHub Copilot). Docs: [Choose a Model](https://github.com/earendil-works/pi/blob/v0.87.1/packages/coding-agent/docs/models.md#select-a-model)
  - Switched default model to Grok 4.7.
- **v0.87.0**
  - Introduced canonical session context editing and extension boundary lifecycle hooks (no full history rewrite required). Docs: [ContextEditEntry](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)

---

## 3. Hot Issues
1. **#7547 — [Windows] How do you use Pi on windows? What issues are you seeing?** (68 comments)  
   Open, long-running community thread to prioritize Windows support investment across installation paths, docs, and bug fixes. High signal for platform roadmap.  
   🔗 [earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)

2. **#10031 — Pi sporadically stuck in "Working..." when thinking is stopped with \<esc\>** (16 comments, closed `no-action`)  
   Reproducible since ~v0.84.0 across machines; users must CTRL+C and resume with `pi -c`. Closed as upstream/provider behavior but represents a top UX pain point.  
   🔗 [earendil-works/pi#10031](https://github.com/earendil-works/pi/issues/10031)

3. **#7739 — Set a startup-time budget targeting jcode-comparable latency and memory** (10 comments)  
   Defines a performance baseline goal against jcode (v0.9.1888-dev vs pi 0.62.0), framing the startup latency workstream tracked in multiple newer issues.  
   🔗 [earendil-works/pi#7739](https://github.com/earendil-works/pi/issues/7739)

4. **#5581 — Custom messages via `pi.sendMessage()` with `triggerTurn: true` bypass `before_agent_start`** (8 comments, `inprogress`)  
   Breaks extension hooks for custom-triggered turns; affects observability, auth, and guardrail extensions that rely on the lifecycle event.  
   🔗 [earendil-works/pi#5581](https://github.com/earendil-works/pi/issues/5581)

5. **#8810 — Extension-registered providers: fresh sessions ignore defaultProvider/defaultModel** (7 comments)  
   Silent fallback to another provider's default breaks user expectations and can cause unexpected cost/behavior when using extension-added providers.  
   🔗 [earendil-works/pi#8810](https://github.com/earendil-works/pi/issues/8810)

6. **#10033 — Compaction prompt includes all thinking text and exceeds context window** (6 comments)  
   Auto-compaction fails permanently on long sessions with reasoning models (e.g., DeepSeek V4.1) because full thinking blocks inflate the summary prompt beyond limits.  
   🔗 [earendil-works/pi#10033](https://github.com/earendil-works/pi/issues/10033)

7. **#9974 — pi mishandles Responses API tool calls from llama.cpp (duplicated/corrupted)** (6 comments)  
   Compatibility bug with OpenAI Responses API format from llama.cpp SSE streams, causing broken tool execution. Affects self-hosted/open-model users.  
   🔗 [earendil-works/pi#9974](https://github.com/earendil-works/pi/issues/9974)

8. **#7658 — Extension API for persisting API-key credentials (auth.json)** (5 comments)  
   Missing capability blocks extensions from fully managing custom providers end-to-end; users must manually edit auth files.  
   🔗 [earendil-works/pi#7658](https://github.com/earendil-works/pi/issues/7658)

9. **#9905 — Anthropic: `thinking.display` always "summarized", no CLI override** (5 comments)  
   Forces summarized thinking output for Anthropic models with no user control, limiting debugging and full-thinking visibility.  
   🔗 [earendil-works/pi#9905](https://github.com/earendil-works/pi/issues/9905)

10. **#9980 — Calculated cost for top open models on OpenRouter is off by 2–3x** (5 comments)  
    Uses cheapest-provider pricing in the catalog, making cost reporting unreliable for popular open-weight models served by multiple providers.  
    🔗 [earendil-works/pi#9980](https://github.com/earendil-works/pi/issues/9980)

---

## 4. Key PR Progress
1. **#10040 — feat(coding-agent): Codemode and MCP** (open, @mitsuhiko)  
   Large PR adding codemode (sandboxed model execution, especially for Jev) and MCP support in one batch; reshapes Pi's agent capabilities surface.  
   🔗 [earendil-works/pi#10040](https://github.com/earendil-works/pi/pull/10040)

2. **#8572 — feat(ai): Amazon Bedrock Mantle** (open, @cristinaponcela)  
   WIP: adds support for Bedrock Mantle API surface (used by GPT/openai.gpt-5.x on Bedrock), fixing Converse routing failures. Addresses #5363.  
   🔗 [earendil-works/pi#8572](https://github.com/earendil-works/pi/pull/8572)

3. **#10085 — feat(agent,coding-agent): emit `pi.ai.request` spans from the agent loop** (merged, @manno23)  
   Hooks up the existing `AI_TELEMETRY_SCHEMA` to production agent paths, so observability extensions (e.g., Langfuse) finally get per-request spans and token usage. Addresses #10084.  
   🔗 [earendil-works/pi#10085](https://github.com/earendil-works/pi/pull/10085)

4. **#9776 — Per thinking sampling parameters** (open, @mrexodia)  
   Implements `samplingParamsByThinkingLevel` so different parameters apply to thinking vs non-thinking modes, aligning with open-model recommendations.  
   🔗 [earendil-works/pi#9776](https://github.com/earendil-works/pi/pull/9776)

5. **#10067 — feat(coding-agent,tui): System theme** (merged, @mitsuhiko)  
   Adds a new default theme based on terminal color queries + OKHSL color utilities; switches to background-color-based light/dark detection instead of naive trust.  
   🔗 [earendil-works/pi#10067](https://github.com/earendil-works/pi/pull/10067)

6. **#9948 — feat(ai,coding-agent): unify image and classifier model infrastructure** (merged, @mitsuhiko)  
   Refactors the model system to support model types beyond chat models (image, classifier), foundational for multimodal expansion.  
   🔗 [earendil-works/pi#9948](https://github.com/earendil-works/pi/pull/9948)

7. **#10091 — Expose message decoration hook for user and assistant text** (merged, @ajunwalker)  
   Adds `ctx.ui.setMessageDecorator()` for customizing user/assistant message rendering in the TUI (streaming and restored), enabling richer UX extensions.  
   🔗 [earendil-works/pi#10091](https://github.com/earendil-works/pi/pull/10091)

8. **#8635 — fix(ai): preserve aborted stop reason during lazy setup** (open, @Mallikarjun-0)  
   Passes abort signals through lazy stream setup and correctly reports aborted setup failures. Fixes #8409.  
   🔗 [earendil-works/pi#8635](https://github.com/earendil-works/pi/pull/8635)

9. **#10066 — fix(tui,coding-agent): prefer clipboard file paths over the icon image** (merged, @1dustycy)  
   Fixes macOS Finder copy behavior where `Ctrl+V` pasted the file icon instead of the actual image. Resolves #9999.  
   🔗 [earendil-works/pi#10066](https://github.com/earendil-works/pi/pull/10066)

10. **#10020 — feat(coding-agent): add hidden-message toggle to HTML exports** (merged, @rwachtler)  
    Adds show/hide controls for hidden `CustomMessage` entries in HTML exports and preserves toggle states for tools/thinking. Fixes #8896.  
    🔗 [earendil-works/pi#10020](https://github.com/earendil-works/pi/pull/10020)

---

## 5. Hot Discussions

### Ideas & Roadmap
- **#3337 — Using pi-agent-core as the runtime for a customer-hosted scheduled-agent platform**  
  Enterprise user validates the use case of embedding pi-agent-core as a scheduled-agent runtime; signals B2B/platform direction interest.  
  🔗 [earendil-works/pi#3337 (discussion)](https://github.com/earendil-works/pi/discussions/3337)

- **#9312 — Pi Context Memory: tracing decisions back to the original conversation**  
  Community experiment on post-compaction decision provenance — can the agent still trace *why* a decision was made after context is compacted? Relevant to long-session reliability.  
  🔗 [earendil-works/pi#9312 (discussion)](https://github.com/earendil-works/pi/discussions/9312)

- **#10098 — Fixed two things in my fork which I considered bugs**  
  Fork maintainer shares two fixes: `/new` now preserves the current model (instead of reverting to default), and bodyless 413 errors now trigger compaction. Potential upstream candidates.  
  🔗 [earendil-works/pi#10098 (discussion)](https://github.com/earendil-works/pi/discussions/10098)

### Q&A
- **#3373 — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?** (20 comments, 9 👍)  
  Most active community thread this week: crowdsourced recommendations for extensions, alternative to Discord discussion.  
  🔗 [earendil-works/pi#3373 (discussion)](https://github.com/earendil-works/pi/discussions/3373)

- **#1558 — CursorAI Agent CLI custom provider for the Pi Coding Agent** (9 👍)  
  Community-built `@netandreus/pi-cursor-provider` adds CursorAI as a provider; maintained outside core but well-received.  
  🔗 [earendil-works/pi#1558 (discussion)](https://github.com/earendil-works/pi/discussions/1558)

### Show and tell
- **#10107 — omp-ntfy: free, zero-config phone push notifications for long tasks & input prompts**  
  New extension (Pi + oh-my-pi) using ntfy.sh for free mobile push alerts on long-running agent tasks or prompt waits.  
  🔗 [earendil-works/pi#10107 (discussion)](https://github.com/earendil-works/pi/discussions/10107)

- **#10069 — agent-chat: peer-to-peer messaging for independent Pi agents (no orchestrator)**  
  Extension enabling P2P messaging between separate Pi sessions (e.g., across worktrees) that share local resources like Docker/DBs.  
  🔗 [earendil-works/pi#10069 (discussion)](https://github.com/earendil-works/pi/discussions/10069)

---

## 6. Feature Request Trends
1. **Deeper extension platform capabilities** — credential persistence (`auth.json` API), message decoration hooks, better lifecycle event coverage, and observability parity for extension-initiated LLM calls.
2. **Startup/performance budgets** — recurring demand for jcode-comparable cold-start latency and memory, with growing urgency for users with large extension sets (70+ extensions causing multi-minute session creation).
3. **Provider and model ecosystem expansion** — Bedrock Mantle, more open-model compatibility (Mistral, vLLM, llama.cpp Responses API), and richer control over reasoning/thinking display.
4. **MCP & codemode** — strong interest in standardized MCP integration and sandboxed codemode for next-gen agent workflows.
5. **Windows first-class support** — sustained community push to clarify supported Windows run paths, fix bugs, and improve out-of-box experience.

---

## 7. Developer Pain Points
- **Unpredictable cost reporting** — OpenRouter multi-provider pricing makes cost estimates unreliable for popular open models (off by 2–3x).
- **Fragile extension lifecycle** — hooks like `before_agent_start` are bypassed in custom-message flows; extensions can't persist API keys; extension output leaks onto the TUI.
- **Compaction reliability** — full thinking blocks bloat compaction prompts, memory spikes on local LLMs, and malformed persisted usage entries crash sessions on resume.
- **Provider compatibility long tail** — Responses API/tool-call differences across llama.cpp, Mistral, proxies, and self-hosted gateways cause duplicated tool calls, 400 errors, and non-retryable failures.
- **Startup & session creation bloat** — repeated extension reloads per session, growing latency in long-running hosts, and no clear performance baseline enforcement.
- **Windows platform ambiguity** — users report friction from too many unsupported/varying Windows run paths with unclear official guidance.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-09-28

---

## 1. Last 7 Days' Highlights
Over the past week, the Qwen Code project advanced its **Managed Agent dual-path architecture** with core progress on durable session operations, Hosted Harness integration, and staged engine compatibility checks across 10+ active PRs. The team shipped 3 stable releases (v0.24.4 → v0.24.6) plus 3 nightly builds, expanding Java SDK capabilities, fixing session creation diagnostics, and closing critical UI/bug reports. Community engagement remained high, with 50 updated issues focused on runtime broker resilience, configuration security, and cross-platform UI consistency.

---

## 2. Releases
### Stable Versions
- **v0.24.6** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6)): Adds Java SDK Hosted Harness private client support; fixes serve-side session creation failure diagnostics; bundles CLI v0.24.6 for TypeScript SDK.
- **v0.24.5** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5)): Decouples group-member channel access from senderPolicy; delivers desktop and SDK parity updates.
- **v0.24.4** (nightly baseline): Resolves deferred-tool bridge staleness and documentation gaps.

### Nightly Builds
- v0.24.6-nightly.20260926 ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a))
- v0.24.5-nightly.20260925 ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-nightly.20260925.c3a4058a0c))
- v0.24.4-nightly.20260923 ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260923.d0cd622a68))

### Desktop & SDK Updates
- Qwen Code Desktop v0.24.5 / v0.24.6: Align with core CLI features and diagnostic fixes.
- TypeScript SDK v0.1.15 / v0.1.16: Bundle latest CLI builds for compatibility.

---

## 3. Hot Issues (Top 10 by Impact & Engagement)
1. **#12380: Managed Agent dual-path architecture proposal** [Open, 36 comments]  
   The core roadmap issue defining staged delivery for durable sessions, recoverable tool execution, and WebShell parity. Drives 10+ active PRs and is the highest-discussed item this week.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12380)

2. **#12737: ACP Bridge Stage B host integration (Legacy + Managed engines)** [Open, 9 comments]  
   Follow-up to the dual-path architecture: enables ordinary `qwen serve` hosts to run paired legacy and managed engines side-by-side. Critical for incremental migration.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12737)

3. **#12826: Webview crash with CodeMirror race condition on @file references** [Closed, 7 comments]  
   High-severity P1 UI bug affecting v0.24.6 Remote-SSH users; triggered crash when using `@file` prompts. Resolved same-day after community reproduction steps.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12826)

4. **#12856: Aux-model selectors leak NUL-separated credentials in baseUrl** [Open, 5 comments]  
   Security-relevant P2 bug: 5 settings keys persist `authType:<id>\0<baseUrl>` with embedded userinfo (e.g., API keys), exposing credentials in public surfaces.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12856)

5. **#12835: Skill listing injected even when Skill tool is excluded** [Open, 5 comments]  
   P2 core bug: skill system reminders appear in prompts despite `--exclude-tools skill`, leaking tool context and inflating prompt size.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12835)

6. **#12874: macOS Desktop right sidebar toggle button fails** [Open, 4 comments]  
   P2 UI regression in v0.24.6: users cannot collapse the right-side extension panel after opening it, with no workaround (Esc/drag ineffective).  
   [Link](https://github.com/QwenLM/qwen-code/issues/12874)

7. **#12844: `qwen mcp reconnect` sends telemetry when statistics are disabled** [Open, 4 comments]  
   Privacy-focused P2 bug: `session_start` events upload even with `privacy.usageStatisticsEnabled: false`, violating user opt-out.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12844)

8. **#12766: Runtime Broker cannot adopt/retire workers after restart** [Open, 4 comments]  
   Key resilience gap for Managed Agent: restarted brokers leave orphaned local workers and cannot recover existing READY bindings.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12766)

9. **#12878: Ollama rejects zero-argument tools (missing `properties` field)** [Open, 3 comments]  
   Integration P2 bug: Qwen Code omits `properties` for no-parameter tools, causing Ollama JSON schema validation failures on local setups.  
   [Link](https://github.com/QwenLM/qwen-code/issues/12878)

10. **#10151: Improve Auto Memory with structured recall and lossless migration** [Open, 4 comments]  
    Long-running feature request: adds structured metadata to memory files for on-demand recall and backward-compatible migration. Ties to context-performance roadmap.  
    [Link](https://github.com/QwenLM/qwen-code/issues/10151)

---

## 4. Key PR Progress (Top 10)
1. **#12883: Managed engine configuration compatibility evaluation (M3)** [Open]  
   Implements strict, read-only configuration snapshots and compatibility checks required before sessions run on the Managed engine. Gates staged migration from legacy to managed paths.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12883)

2. **#12881: Make Session close/archive/delete durable operations (Stage D4)** [Open]  
   Finalizes Stage D of the Managed Agent roadmap: adds durable lifecycle operations with 202-status async completion, closing contract test gaps.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12881)

3. **#12848: Gated Hosted foreground Shell turns** [Open]  
   Adds shell execution to the private Hosted Workspace loop, with stdout/stderr persistence in SQL Session Store and bounded model access. Extends Hosted Harness beyond file-only operations.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12848)

4. **#12855: Commit Stage H records and serve task list (H0c)** [Open]  
   Implements Stage H record persistence and control-plane task list reconstruction for managed agents, building on the H0b record contract defined earlier.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12855)

5. **#12582: Add remote Qwen/Codex/Claude runtimes via A2A** [Open]  
   Introduces remote execution runtimes on the A2A layer, with single-use enrollment tokens, revocable credentials, and work leasing from the coordinator. Expands multi-agent execution topology.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12582)

6. **#12107: Parallelize extension loading loops** [Open]  
   Performance optimization: bounded parallel extension loading preserves directory order, retries resource exhaustion once, and retains previous runtime state on failure. Improves startup speed.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12107)

7. **#12799: Preserve line endings in untouched edit regions** [Open]  
   Fixes edit tool behavior: local edits copy bytes outside matched spans and use surrounding line endings for inserts; whole-file replacements retain CRLF settings. Prevents unintended file formatting changes.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12799)

8. **#12545: Withhold SkillManager from subagents without Skill tool** [Open]  
   Fixes context leakage: subagents with no Skill tool permission no longer access the session's SkillManager, resolving bundled-reference inline resolution and reducing unnecessary prompt injection.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12545)

9. **#12864: Close deferred Hosted no-tool CI gate follow-ups** [Closed]  
   Hardens Java integration test coverage for Hosted Harness: verifies full test family execution, flaky test mitigation, and CI parity. No production code changes, but improves release confidence.  
   [Link](https://github.com/QwenLM/qwen-code/pull/12864)

10. **#12839: W0e terminal recovery fences for lost execution journals** [Open]  
    Adds `ABANDONED` terminal state for executions with authoritatively lost Runtime journals, retaining idempotency receipts and request data without inventing results. Improves runtime broker fault tolerance.  
    [Link](https://github.com/QwenLM/qwen-code/pull/12839)

---

## 5. Hot Discussions
*Omitted: No discussion-category (Ideas / Q&A / Show and tell) data was provided in this dataset.*

---

## 6. Feature Request Trends
1. **Managed Agent robustness & parity**: Top demand centers on durable session lifecycle, recoverable tool execution, and feature parity between legacy and new managed engines (driven by #12380 and 8+ linked issues/PRs).
2. **Runtime Broker resilience**: Users want worker adoption/retirement on restart, fault gates for hosted tool turns, and lost-execution recovery (#12766, #12670, #12872).
3. **UI/UX enhancements**: Requests for message quoting into the composer, cross-session messaging documentation clarity, and viewport content alignment (#12682, #12866, #9305).
4. **Multi-agent & remote execution**: Growing interest in remote runtime integration, persistent workspace agents, and A2A-based agent collaboration (#12582, #11206, #10954).
5. **Memory & context improvements**: Structured auto-memory recall, lossless migration, and memory debt resolution (#10151, #12853).

---

## 7. Developer Pain Points
1. **Credential leakage in configuration**: Persisted NUL-separated baseUrls with embedded API keys expose credentials across multiple settings surfaces (#12856).
2. **Telemetry opt-out violations**: Unexpected `session_start` uploads during MCP reconnect despite disabled usage statistics erode trust in privacy controls (#12844).
3. **Desktop UI regressions**: macOS sidebar toggle failures and CodeMirror race condition crashes on Remote-SSH disrupt daily workflow (#12874, #12826).
4. **Proxy configuration gaps**: CUA SDK native payload downloads ignore HTTP(S) proxy settings, breaking installation on restricted networks (#12829).
5. **Tool context leakage**: Skill listings appear even when the Skill tool is excluded, bloating prompts and creating unexpected behavior (#12835).
6. **Ollama integration friction**: Zero-argument tool schema mismatches cause blanket 400 errors for local Ollama users (#12878).
7. **Batch API result inconsistencies**: `qwen batch collect` reports full delivery but silently omits document sections under stop conditions (#12825).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*