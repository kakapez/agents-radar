# AI CLI Tools Weekly Digest 2026-10-05

> Generated: 2026-10-05 01:47 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Comparison Report (2026-10-05 Community Digests)
---

## 1. Ecosystem Overview
The AI developer CLI tool ecosystem is in a high-velocity maturity phase, with all major vendors shipping rapid iterative releases (6–10 per week on average) focused on platform stability, plugin/extensibility systems, and enterprise-grade governance. A cross-industry shift toward agentic workflows is driving shared investment in subagent orchestration, context window management, and remote/headless operation, while Windows and cross-platform compatibility remain universal pain points. Open ecosystem standards like MCP (Model Context Protocol) are table stakes across every tool, with communities prioritizing interoperability between vendors and self-hosted model providers. Enterprise buyers are increasingly pushing for security hardening, audit trails, and organization-wide policy enforcement as these tools move from experimental to production-critical developer infrastructure.

---

## 2. Activity Comparison
| Tool | Hot Issues (Open/Total) | Key PRs (Active) | Hot Discussions | Release Velocity (7d) | Maturity Stage |
|------|--------------------------|------------------|-----------------|------------------------|----------------|
| Claude Code | 10 open / 10 total | 10 active | N/A* | 6 stable releases (v2.1.284–v2.1.289) | General Availability |
| OpenAI Codex | 8 open / 10 total | 10 merged | 15 active (5 ideas, 5 Q&A, 5 show-and-tell) | 10 alpha pre-releases (v0.162.0-alpha.4–13) | Beta |
| Gemini CLI | 8 open / 10 total | 10 active | N/A* | 8 releases (1 stable, 1 preview, 6 nightly) | General Availability |
| GitHub Copilot CLI | 4 open / 10 total | 3 active | N/A* | 9 patch releases (v1.0.90–v1.0.92-4) | General Availability |
| OpenCode | 5 open / 10 total | 10 active | N/A* | 2 patch releases (v1.18.33–v1.18.34) | General Availability |
| Pi | 7 open / 10 total | 10 active | 9 active (4 ideas, 2 Q&A, 3 show-and-tell) | 6 releases (v0.99.0–v1.0.2) | 1.0 General Availability |
| Qwen Code | 8 open / 10 total | 10 active | N/A* | 7 releases (1 stable, 5 nightly, 1 SDK, 1 desktop) | General Availability |

*No discussion data was reported for these repositories in the monitoring period; they may use alternative community channels (e.g., issue comments, Discord, Slack) instead of GitHub Discussions.

---

## 3. Shared Feature Directions
Core requirements are converging across 70%+ of the tool ecosystems, indicating standardization of expected AI CLI capabilities:
1. **MCP compatibility & extensibility**
   - *All tools*: Prioritizing MCP server stability, reconnection logic, and cross-platform lifecycle management.
   - Claude Code, Pi, Qwen Code: Investing in plugin/mod systems for deep engine behavior customization.
2. **Enterprise security & policy enforcement**
   - Claude Code, OpenAI Codex, Qwen Code: Building organization-level permission ceilings, audit trails, and policy inheritance for user-installed plugins.
   - Gemini CLI, GitHub Copilot CLI: Hardening command injection guards and sandboxed execution for autonomous workflows.
3. **Context & cost control**
   - *All tools except Claude Code*: Iterating on context compaction logic, with fixes for unbounded token retention, incorrect usage reporting, and infinite resend loops.
   - OpenCode, Pi: Adding configurable token retention limits and reset-time visibility for usage transparency.
4. **Cross-platform Windows reliability**
   - *All tools*: Shipping Windows-specific bug fixes for ACL/sandbox setup, file lock conflicts, path handling, terminal UI rendering, and update lifecycle failures. Windows accounts for 30–40% of all high-priority issues across the ecosystem.
5. **Remote & headless operation**
   - Claude Code, OpenAI Codex, GitHub Copilot CLI: Expanding remote control capabilities, daemon management, and mobile pairing support.
   - Qwen Code: Building Kubernetes-native runtime for hosted agent deployments.
6. **Subagent orchestration & observability**
   - Gemini CLI, Qwen Code, OpenCode: Fixing subagent false success reporting, hangs, and adding visibility into running subagent status.
   - Pi, OpenAI Codex: Exploring cross-agent memory sharing and multi-agent coordination.

---

## 4. Differentiation Analysis
| Tool | Core Focus | Target User | Technical Approach | Unique Differentiators |
|------|------------|-------------|--------------------|-------------------------|
| Claude Code | Behavioral customization via mods, enterprise security | Enterprise engineering teams, power users | First-party plugin system (Claude Mods) with deep engine hooks; Anthropic-native model optimization | *You Should Know* built-in side agent for risk detection; org-level tool permission ceilings for user-installed plugins |
| OpenAI Codex | Windows daemon stability, TUI UX, ecosystem growth | Individual developers, OpenAI ecosystem users | Rust-based runtime for performance; deep integration with ChatGPT/Codex tiering | Largest community ecosystem (150+ third-party tools); adaptive model/reasoning orchestration proposals |
| Gemini CLI | Agent execution reliability, security hardening | Google Cloud users, enterprise teams | Node.js runtime with focus on atomic state persistence and corruption recovery | AST-aware code tooling roadmap; zero-dependency OS-level sandboxing proposal; native Gemini model affinity |
| GitHub Copilot CLI | MCP integration, GitHub ecosystem alignment | GitHub users, enterprise DevOps teams | Tight integration with GitHub identity and OAuth; focus on config system UX | Pre-conversation local/cloud environment picker; BYOK model support with GitHub identity federation |
| OpenCode | Custom provider flexibility, UI parity | Self-hosted AI users, multi-model developers | Effect.js core architecture; cross-platform TUI + desktop app | Unmatched custom/self-hosted model compatibility; markdown preview in file viewer; TUI feature parity with desktop |
| Pi | Minimalist design, codemode performance | Technical tinkerers, power users | TypeScript/QuickJS runtime for codemode execution; Nix-first packaging | Per-thinking-level sampling parameters; P2P multi-agent extensions; community fine-tuned models for agent workflows |
| Qwen Code | Managed agent runtime, Kubernetes deployment | Enterprise hosted deployments, Alibaba Cloud users | Java + TypeScript dual stack; managed agent mode with CSI persistent workspaces | Kubernetes-native tool runtime; background shell/monitoring; Qwen model optimization for code tasks |

---

## 5. Community Momentum & Maturity
### Highest Velocity / Fastest Iteration
- **Pi**: Shipped 6 releases in 7 days crossing the 1.0 GA milestone, with active work on TUI performance, provider compatibility, and codemode stability; a vibrant third-party extension ecosystem is forming rapidly around durable tasks and multi-agent workflows.
- **OpenAI Codex**: 10 alpha releases in a single week focused on Windows stability; highest community discussion volume, with active ideation around dynamic orchestration and cross-agent interoperability; strong show-and-tell ecosystem activity.
- **Claude Code**: 6 stable releases headlined by the launch of Claude Mods, signaling a major platform expansion; enterprise security PRs are advancing rapidly to support plugin adoption.

### Most Mature / Stable
- **GitHub Copilot CLI**: 9 patch releases indicate post-GA refinement rather than core feature expansion; low PR volume suggests a mature, stable codebase with focused incremental improvements.
- **Gemini CLI**: Regular stable/preview/nightly release cadence with a strong focus on security hardening and reliability; fewer community-facing features but robust core agent execution.

### Niche Momentum
- **Qwen Code**: Rapidly advancing managed agent and Kubernetes runtime features, targeting enterprise hosted deployment use cases; strong investment in production-grade reliability for managed deployments.
- **OpenCode**: High engagement from the self-hosted/Open-source AI community (e.g., 48 👍 on the Ollama/Gemma 4 compatibility fix); strong demand for UI customization and multi-provider flexibility.

---

## 6. Trend Signals
For technical decision-makers and tool developers, these community patterns indicate industry-wide shifts to prioritize:
1. **Plugin systems are the new competitive battleground**: The launch of Claude Mods and concurrent investment in extensibility across all tools signals that AI CLIs are evolving from point tools to platforms. Teams building for this ecosystem should prioritize MCP compatibility and structured plugin SDKs to capture ecosystem value.
2. **Enterprise security is no longer an afterthought**: Organization-wide policy enforcement, audit trails, and sandbox hardening are appearing across every major tool, driven by enterprise buyer demand. Tools that lack native governance controls will be locked out of large enterprise procurement cycles in 2027.
3. **Windows compatibility remains a major quality differentiator**: Across every tool, Windows-specific bugs account for a disproportionate share of high-priority issues. Teams that invest in first-class Windows testing and native platform integration will capture a significant user experience advantage.
4. **Context management is a critical unsolved problem**: 6 of 7 tools are actively fixing context compaction bugs, incorrect usage reporting, and infinite loop issues. Accurate, configurable context window management will become a key purchasing criterion as agent workflows grow longer and more complex.
5. **Self-hosted and BYOK demand is accelerating**: High community engagement around custom provider support, Ollama compatibility, and BYOK feature parity indicates that users want flexibility to mix and match models rather than being locked into a single vendor. Ecosystem tools that support multi-provider portability will see the fastest adoption.
6. **Agent reliability is the biggest barrier to adoption**: Subagent hangs, false success reporting, and silent failures are top pain points across Gemini CLI, Qwen Code, and OpenCode communities. Building robust observability, error recovery, and guardrails for autonomous agent workflows will be critical to driving mainstream adoption of agentic coding tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-10-05 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
Ranked by community attention and discussion volume (PRs sorted by comment traction, note: raw PR comment counts are marked as undefined in provided data; ranking is based on recency, update frequency, and cross-reference with issue-linked activity):

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|-----------------------|--------|
| 1 | [skill-creator trigger eval fix (#1298)](https://github.com/anthropics/skills/pull/1298) | Fixes false misses in skill trigger evaluation: resolves per-worker command probe competition, Windows `select()` subprocess pipe failures, and unrelated tool scan interference; also handles runtime failures that incorrectly pass negative examples. | Most-discussed core infrastructure fix; directly ties to multiple open issues (#1383, #556) about broken trigger evaluation and 0% trigger rates. | Open |
| 2 | [mcp-builder MCP 2.0 support (#1742)](https://github.com/anthropics/skills/pull/1742) | Adds support for `mcp>=2.0.0` by updating the `streamable_http_client` import path and enabling custom HTTP headers via `create_mcp_http_client`. | Linked to issue #1668; addresses breakage for all MCP 2.0-compatible skills, a fast-growing segment of the ecosystem. | Open |
| 3 | [proofcore-contract-auditor (#1771)](https://github.com/anthropics/skills/pull/1771) | Web3 skill that performs automated static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs to the TON Blockchain via a zero-storage Merkle protocol. | One of the highest-traffic new feature PRs from the September 2026 batch; fills a gap in Web3 developer tooling. | Open |
| 4 | [md2video-audio (#1703)](https://github.com/anthropics/skills/pull/1703) | Zero-cost skill that converts Markdown documents into professional MP4 videos with human-like voiceovers, using Marp for slide generation and audio synthesis pipelines. | High user interest in content creation automation; first video generation skill proposed for the official collection. | Open |
| 5 | [Notion Spec to Implementation + Quantitative Resume Auditor (#1245)](https://github.com/anthropics/skills/pull/1245) | Two skills: 1) Transforms product/tech specs into structured Notion tasks with implementation plans, acceptance criteria, and progress tracking; 2) Audits resume quality against quantitative benchmarks. | Longest-running active feature PR (opened June 2026); dual-purpose submission spanning productivity and career tooling. | Open |
| 6 | [docx orphaned comment detection (#1734)](https://github.com/anthropics/skills/pull/1734) | Detects orphaned comments in DOCX files (comments with no linked document content). | Part of a cluster of DOCX-related fixes (paired with #1792 LibreOffice timeout fix) addressing gaps in document processing skills. | Open |
| 7 | [AWT (AI Watch Tester) E2E testing (#822)](https://github.com/anthropics/skills/pull/822) | Vision-enabled E2E testing skill that lets Claude run browser tests automatically with zero-code test generation, powered by the open-source AI Watch Tester tool. | Most-discussed testing skill submission; addresses demand for AI-native end-to-end QA workflows. | Open |

---

## 2. Community Demand Trends
Distilled from top commented issues, the most anticipated skill directions are:
1. **Trust & Security Governance** – Strong demand for skills that enforce safety boundaries, audit skill provenance, and prevent trust boundary abuse (driven by #492, the highest-commented issue with 43 comments). Users want clear official/community skill labeling and agent governance patterns (proposed in #412).
2. **Skill Infrastructure Reliability** – Critical demand for fixes to core skill tooling: trigger evaluation failures (#556, 12 comments), skill-creator benchmark/eval bugs (#1383), mcp-builder evaluation failures (#1390), and context window bloat from over-injected skills like `claude-api` (#1487).
3. **Enterprise Collaboration & Sharing** – Top-voted feature request (8 👍 on #228) for org-wide skill sharing capabilities, replacing manual .skill file distribution workflows.
4. **Document Processing Quality** – Consistent demand for improved document skill coverage: ODT support, DOCX edge case fixes, typographic quality control (#514), and duplicate skill resolution (#189, 9 👍).
5. **AI Quality Control Pipelines** – Interest in reasoning gate pipelines (#1385) and skills that validate AI output quality before delivery, spanning pre-task calibration, adversarial review, and verification.

---

## 3. High-Potential Pending Skills
Active PRs with recent updates (Q3 2026) that are likely to land soon, based on alignment with ecosystem priorities and update velocity:
- [proofcore-contract-auditor (#1771)](https://github.com/anthropics/skills/pull/1771) – Web3 smart contract auditing with on-chain proof anchoring
- [blast-radius (#1776)](https://github.com/anthropics/skills/pull/1776) – Pre-deployment checklist for bulk/destructive operations, addressing safety and risk mitigation gaps
- [scnet-hpc (#1615)](https://github.com/anthropics/skills/pull/1615) – HPC cluster operation skill with SSH + Slurm workflow support
- [testing-patterns (#723)](https://github.com/anthropics/skills/pull/723) – Comprehensive testing methodology skill covering the full stack from unit tests to React component testing
- [pyxel retro game development (#525)](https://github.com/anthropics/skills/pull/525) – Python-based retro game creation, debugging, and verification skill
- [compact-memory (proposed in #1329)](https://github.com/anthropics/skills/issues/1329) – Symbolic notation skill for reducing agent state memory footprint, a high-potential efficiency improvement

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is **improving core skill infrastructure reliability, trust, and usability**—fixing broken trigger evaluation, clarifying official/community skill boundaries, and reducing context window bloat—before expanding into niche new skill categories.

---

# Claude Code Community Digest | 2026-10-05

## 1. Last 7 Days' Highlights
This week delivered 6 rapid Claude Code releases (v2.1.284–v2.1.289) headlined by the launch of **Claude Mods** — a plugin system enabling deep behavioral customization — plus the new *You Should Know* built-in side agent, Claude Sonnet 5.5 default rollout, and expanded mod/CLI APIs. Security hardening remained a top engineering focus, with multiple in-flight PRs enforcing org-level tool permission ceilings for user-installed plugins, while the community surfaced high-priority bugs spanning advisor tool failures on long transcripts, Windows update/session lifecycle defects, and model compatibility regressions.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v2.1.289** | Fixed: deny/ask rules on compound shell commands not persisting after mod approvals on managed machines; terminal freezes on short code blocks with unclosed `<script>` tags or deep `${}` nesting; partial `Read` denial bug. |
| **v2.1.288** | Added `$.ui.selection()` mod API (returns last fullscreen-selected text + transcript row context); built-in `gh api` for cloud sessions without GitHub CLI; fixed control character handling in built-in commands. |
| **v2.1.287** | Launched **Claude Mods**: plugins can now modify core engine behavior; introduced *You Should Know* built-in side agent mod (flags missed risks, enable via `/plugin enable cc-plugin-you-should-know@builtin`). |
| **v2.1.286** | Added progress counters ("2 of 5") to stacked permission prompts; mouse support for "N more" list rows in fullscreen mode (click to jump, with hover/pressed states); multiple Claude Code process stability fixes. |
| **v2.1.285** | Added `CLAUDE_CODE_DISABLE_WEB_FETCH` env var to disable WebFetch tool; `claude --desktop` command to open desktop app for a directory/session; `claude plugin configure <plugin>` command (partial rollout). |
| **v2.1.284** | Added **Claude Sonnet 5.5** (`claude-sonnet-5-5`) as default Sonnet model (1M context, $2/$10 per Mtok, $0.20/Mtok cache reads); added "Yes, but ask again next time" option for auto-mode read prompts outside working directories. |

---

## 3. Hot Issues
1. **#67609: Advisor tool unavailable on claude-fable-5 for transcripts >100K tokens**  
   The server-side advisor tool returns a hard error once Fable 5 conversations cross ~100K tokens, effectively disabling the feature for long-running sessions. It is the most-commented (27) and most-upvoted (45) open issue this week.  
   🔗 [anthropics/claude-code#67609](https://github.com/anthropics/claude-code/issues/67609)

2. **#91763: Windows MSIX update blocked by surviving git fsmonitor daemon**  
   A `git fsmonitor--daemon` spawned by Claude Code inherits the AppX container job, survives forced update shutdowns, and blocks new version relaunches with error 0x80070020. The reporter includes root cause analysis and a no-reboot workaround.  
   🔗 [anthropics/claude-code#91763](https://github.com/anthropics/claude-code/issues/91763)

3. **#92007: `/model opusplan` fails with "Unsupported model" on Windows**  
   A previously working model selection broke abruptly for Windows desktop users, with 13 upvotes indicating broad impact. Affects users relying on Opus planning workflows.  
   🔗 [anthropics/claude-code#92007](https://github.com/anthropics/claude-code/issues/92007)

4. **#98310: Remote control sessions hang after unarchive**  
   Server-mode `claude remote-control` sessions never get re-dispatched to the running host after being archived and unarchived from claude.ai, leaving messages stuck at "Sending…" before showing an offline error. Breaks long-running server workflow continuity.  
   🔗 [anthropics/claude-code#98310](https://github.com/anthropics/claude-code/issues/98310)

5. **#98345: Auto permission mode drops on first session turn**  
   Sessions configured with `defaultMode: "auto"` often run the first turn in manual mode, only switching to auto after the desktop app re-sends the permission setting. Undermines automation expectations for fresh sessions.  
   🔗 [anthropics/claude-code#98345](https://github.com/anthropics/claude-code/issues/98345)

6. **#99265: Mod AbovePrompt band only renders in one desktop chat at a time**  
   With two side-by-side Code chats open in the Windows desktop app, a mod’s `AbovePrompt` UI only appears in one chat, even though the mod runs in both. Degrades multi-session mod UX.  
   🔗 [anthropics/claude-code#99265](https://github.com/anthropics/claude-code/issues/99265)

7. **#99535: Mod diff-format code renders as plain text in desktop app**  
   A mod `Pane` with `format: 'diff'` shows raw diff text (no red/green shading, no line gutter, no word highlights) in the desktop app, while it renders correctly in the terminal. Creates UI parity gaps for mod developers.  
   🔗 [anthropics/claude-code#99535](https://github.com/anthropics/claude-code/issues/99535)

8. **#99513: Stale MCP cache injects disconnected tools into all sessions**  
   A stale `claudeAiMcpEverConnected` cache entry in `~/.claude.json` injects full tool definitions for 16 disconnected claude.ai MCP connectors into every CLI session, causing bloat and broken tool references.  
   🔗 [anthropics/claude-code#99513](https://github.com/anthropics/claude-code/issues/99513)

9. **#71585: External-file-change system note asserts unverifiable cause**  
   The auto-generated note about file changes claims modification was done "by the user or by a linter" and implies user awareness, which the model then relays as fact — even when changes come from other processes. Risks misleading the model’s reasoning.  
   🔗 [anthropics/claude-code#71585](https://github.com/anthropics/claude-code/issues/71585)

10. **#99541: Desktop sidebar session-to-group assignments lost after Windows reboot**  
    Session groupings persist, but individual session-to-group mappings vanish after a Windows reboot, leaving sessions ungrouped. Disrupts organization for users with many concurrent projects.  
    🔗 [anthropics/claude-code#99541](https://github.com/anthropics/claude-code/issues/99541)

---

## 4. Key PR Progress
1. **#99540: sec-default — org tool permission ceilings apply to user-installed plugins**  
   Enforces that organization-level tool approval/deny policies (via the policy mod) remain the effective ceiling even when users install third-party plugins. Every decision hook includes a `.catch` for fault tolerance.  
   🔗 [anthropics/claude-code#99540](https://github.com/anthropics/claude-code/pull/99540)

2. **#99137: sec-default — plugins may only tighten, never loosen, inherited rules**  
   Complements #99540: user plugins can add stricter deny/ask rules or pin variables, but cannot relax policies set by the organization. Works with the existing published engine, no new API surface required.  
   🔗 [anthropics/claude-code#99137](https://github.com/anthropics/claude-code/pull/99137)

3. **#40572: Add support for global Hookify rules**  
   Loads Hookify rules from the global `~/.claude/` directory in addition to project-level `.claude/` rules, letting users enforce cross-repository hooks and standards without per-project configuration.  
   🔗 [anthropics/claude-code#40572](https://github.com/anthropics/claude-code/pull/40572)

4. **#81672: fix(hookify) — decouple package import from install directory name**  
   Fixes Hookify plugin import failures when the plugin directory is not named exactly `hookify` (e.g., after marketplace installs with hashed directories). Resolves two linked bugs.  
   🔗 [anthropics/claude-code#81672](https://github.com/anthropics/claude-code/pull/81672)

5. **#99206: diff — docked pane aligns header under engine head row**  
   Reduces excess blank space above the docked `/diff` pane header: the engine now reserves the top blank row for the pane’s close mark, eliminating redundant padding.  
   🔗 [anthropics/claude-code#99206](https://github.com/anthropics/claude-code/pull/99206)

6. **#99141: diff — keep pane alive before it has content to render**  
   `/diff` opened before a host page attaches (or before any changes exist) now retains its pane slot, which populates automatically as soon as content is available, rather than failing silently.  
   🔗 [anthropics/claude-code#99141](https://github.com/anthropics/claude-code/pull/99141)

7. **#99118: diff — allow toasts while the pane/dialog is open**  
   Removes the `holdToasts: true` behavior from `/diff` panes and dialogs. Other plugins’ transient toast notifications now display normally instead of being queued until the diff view closes.  
   🔗 [anthropics/claude-code#99118](https://github.com/anthropics/claude-code/pull/99118)

8. **#94847: diff — only auto-open pane on first edit with a tracked file**  
   Stops the diff pane from opening empty when the first edit targets an ignored file, out-of-repo path, or different worktree. The pane now only opens when there is an actual tracked change to display.  
   🔗 [anthropics/claude-code#94847](https://github.com/anthropics/claude-code/pull/94847)

9. **#98445: diff — read all file hunks in a single git process**  
   Replaces per-file git invocations (up to 50 per tool call) with a single process to read all changed hunks, drastically reducing process-spawn overhead — especially impactful on Windows, where process start is slower.  
   🔗 [anthropics/claude-code#98445](https://github.com/anthropics/claude-code/pull/98445)

10. **#20448: Add web4-governance plugin for AI governance with R6 workflow**  
    Introduces a trust-native governance plugin with cryptographic provenance, entity witnessing, and R6 audit trails, targeting accountability for AI agent workflows.  
    🔗 [anthropics/claude-code#20448](https://github.com/anthropics/claude-code/pull/20448)

---

## 5. Hot Discussions
*No discussion data was provided for this reporting period.*

---

## 6. Feature Request Trends
1. **Plugin/mod system extensibility** — Demand for global cross-project Hookify rules, richer mod UI APIs (selection context, diff rendering parity), and governance-focused plugins is accelerating as the Claude Mods ecosystem launches.
2. **Session organization & shared context** — Users want sidebar groups to carry shared instructions and group-wide context across sessions, plus persistent group membership across restarts.
3. **CLI/desktop parity for advanced features** — Consistent requests for diff formatting, mod UI elements, and MCP behavior to match between terminal, desktop app, and web surfaces.
4. **Mobile & headless workflow support** — Growing interest in using Dispatch and remote-control sessions from mobile devices without requiring an always-on desktop host.
5. **Customizable UI chrome** — Users want fine-grained control over status line elements (e.g., hiding mode indicators independently of hint text) to reduce redundancy for custom setups.

---

## 7. Developer Pain Points
1. **Windows platform instability** — A cluster of high-impact Windows-specific bugs dominate issue activity: MSIX update failures from orphaned git processes, lost session groupings on reboot, VSCode OAuth race conditions in the credential store, and MCP native host copy failures.
2. **Permission mode & security policy gaps** — Auto mode not activating on the first turn, plus ambiguity around how org policies interact with user-installed plugins, create trust and automation gaps for enterprise teams.
3. **Long-transcript reliability** – The advisor tool failing outright on >100K token Fable 5 transcripts breaks core workflows for extended coding sessions and large-repo work.
4. **Desktop UI rendering inconsistencies** — Multiple bugs around mod UI (AbovePrompt bands, diff formatting) only appearing in one chat or rendering incorrectly reduce confidence in mod development for desktop targets.
5. **Session lifecycle & remote control brittleness** — Archived/unarchived remote sessions failing to re-dispatch, plus update restarts killing running sessions, disrupt long-running and headless workflows.
6. **Stale cache / state leakage** — Injected stale MCP tools and incorrect file-change attribution notes introduce misleading state that can skew model behavior in hard-to-debug ways.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-10-05
---

## 1. Last 7 Days' Highlights
This week saw 10 rapid pre-releases of the Rust Codex runtime (v0.162.0-alpha series) focused on Windows stability, TUI experience, and remote control workflows. Community attention centered on Windows platform bugs (queue errors, ACL sandbox failures, remote pairing issues) and demand for restored UI controls like branch selection. Ecosystem activity surged, with new community tools for cross-agent memory, quota management, and session monitoring.

## 2. Releases
10 Rust pre-releases launched in the `v0.162.0-alpha` line, focusing on Windows daemon reliability, TUI usability improvements, remote control daemonization, and ACL error recovery:
- Full version range: `rust-v0.162.0-alpha.4` → `rust-v0.162.0-alpha.13`
- Core themes: Windows terminal/daemon hardening, TUI fullscreen UX enhancements, remote control daemon management, tool exposure stability across environment readiness changes
- Release page: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)

## 3. Hot Issues
| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|--------------------|
| [#48774](https://github.com/openai/codex/issues/48774) | [bug] Codex Remote pairing fails on Android | Blocks core remote workflow for mobile users; affects cross-device auth flow | 53 comments, 26 👍 — highest-commented open issue this week, broad user impact |
| [#49532](https://github.com/openai/codex/issues/49532) | [enhancement] Restore Branch selection in Codex app | Regressed UI feature critical for multi-branch development workflows | 37 comments, 69 👍 — top upvoted request, strong demand for rollback |
| [#15310](https://github.com/openai/codex/issues/15310) | [bug] Desktop automations silently fall back to workspace-write sandbox | Security/reliability flaw: scheduled tasks ignore configured permission levels | 23 comments, 17 👍 — long-standing bug with automation trust implications |
| [#49975](https://github.com/openai/codex/issues/49975) | [bug] Messages stuck in send queue: "undefined" JSON error on Windows | Breaks core messaging functionality in VS Code extension | 21 comments — high-impact workflow interruption on Windows |
| [#49264](https://github.com/openai/codex/issues/49264) | [bug][CLOSED] Windows CLI flashes Terminal window for every command | Regression disrupting CLI usability; fixed in this week's alpha releases | 16 comments, 7 👍 — confirmed fix addresses widespread UX annoyance |
| [#36953](https://github.com/openai/codex/issues/36953) | [bug] Browser site permission remains blocked after rule deletion | Permission state corruption breaks browsing functionality | 16 comments, 5 👍 — persistent state bug with no clear workaround |
| [#49477](https://github.com/openai/codex/issues/49477) | [bug] Windows Native: durable-task follow-ups fail with AbsolutePathBuf error | Cross-environment task interoperability breaks on Windows path handling | 14 comments, 2 👍 — blocks cloud-to-local task continuity |
| [#19821](https://github.com/openai/codex/issues/19821) | [bug] WebSocket connect failures exhaust retries before HTTP fallback | Severe latency for proxy users (especially mainland China) on session start | 14 comments, 2 👍 — long-standing connectivity pain point for international users |
| [#20489](https://github.com/openai/codex/issues/20489) | [enhancement] Add screen-reader-friendly TUI mode | Accessibility gap: decorative terminal UI breaks screen reader experience | 11 comments — contributor has ready local fix awaiting maintainer review |
| [#50265](https://github.com/openai/codex/issues/50265) | [bug][CLOSED] VS Code prompts disappear without processing | Critical data loss bug affecting enterprise users; resolved this week | 8 comments, 3 👍 — confirmed fix addresses widespread text loss reports |

## 4. Key PR Progress
All merged PRs this week target stability, UX, and platform compatibility:
1. [#50940](https://github.com/openai/codex/pull/50940) — **Windows ACL recovery**: Safely restores malformed `deny_read_acl_state.json` without modifying existing file restrictions or contents.
2. [#50962](https://github.com/openai/codex/pull/50962) — **Stable environment tools feature flag**: Adds default-off `stable_environment_tools` flag to keep environment-backed tools exposed even when executor readiness changes.
3. [#50964](https://github.com/openai/codex/pull/50964) — **Turn analytics tool tracking**: Adds `tools_change_count` to turn profiles, tracking how often available tools shift during sessions.
4. [#50803](https://github.com/openai/codex/pull/50803) — **Managed daemon for remote control**: Makes `codex remote-control` reuse the managed daemon (when auto-start is enabled) instead of running a foreground server.
5. [#50802](https://github.com/openai/codex/pull/50802) — **Windows junction fallback**: Falls back to `cmd.exe / mklink /J` when native junction updates are blocked by Windows policies, fixing daemon release selection.
6. [#50782](https://github.com/openai/codex/pull/50782) — **Windows daemon publish retries**: Retries release publication on transient file locks from antivirus/scan tools.
7. [#50811](https://github.com/openai/codex/pull/50811) — **TUI reasoning summary defaults**: Honors server-side reasoning summary defaults in new TUI threads instead of forcing summaries off.
8. [#50764](https://github.com/openai/codex/pull/50764) — **Archive during running turns**: Enables `/archive` mid-turn with a warning that archiving will stop the active session.
9. [#50727](https://github.com/openai/codex/pull/50727) — **Task details UX refresh**: Moves model, reasoning effort, project, and usage info to the top of task details for visibility.
10. [#50720](https://github.com/openai/codex/pull/50720) — **Windows Terminal Shift+Enter fix**: Decodes Windows Terminal's `ESC[13;2u` sequence as Shift+Enter for proper newline insertion in the composer.

## 5. Hot Discussions
### Ideas
| Discussion | Summary |
|------------|---------|
| [#46658](https://github.com/openai/codex/discussions/46658) | Adaptive allocation of models, tools, and subagents: proposes treating selection as a shared dynamic optimization problem instead of static configuration. |
| [#26397](https://github.com/openai/codex/discussions/26397) | Cross-agent project context sync: frustration with maintaining separate project memory between Codex and Claude Code. |
| [#36238](https://github.com/openai/codex/discussions/36238) | Wildcard support in permission models: literal argument matching makes common safe patterns (e.g. variable git commands) too restrictive. |
| [#49977](https://github.com/openai/codex/discussions/49977) | Dynamic model/reasoning orchestration: calls for runtime adjustment of model and reasoning level instead of static task-wide selection. |
| [#50875](https://github.com/openai/codex/discussions/50875) | Organization-managed skill profiles: requests governed, version-pinned behavior profiles for enterprise teams across cloud and desktop. |

### Q&A
| Discussion | Summary |
|------------|---------|
| [#2251](https://github.com/openai/codex/discussions/2251) | Codex usage limits parity: most active discussion this week, questioning if Plus tier limits match between ChatGPT app and Codex (3000 thinking/week). |
| [#8503](https://github.com/openai/codex/discussions/8503) | "Usage limit reached" despite 100% remaining: GitHub Code Review connector incorrectly reports limit exhaustion. |
| [#21935](https://github.com/openai/codex/discussions/21935) | `codex remote-control` direction: clarifies intent of the new entrypoint (API backend vs full remote UI). |
| [#37960](https://github.com/openai/codex/discussions/37960) | Coordinating local/remote agents across vendors: workflow for managing asynchronous Codex and Claude Code agents on separate machines. |
| [#46001](https://github.com/openai/codex/discussions/46001) | Windows permission profile verification: how to confirm effective vs selected permission profiles on desktop. |

### Show and tell
| Discussion | Summary |
|------------|---------|
| [#16329](https://github.com/openai/codex/discussions/16329) | Awesome Codex CLI: curated list of 150+ ecosystem tools (subagents, skills, MCP servers, plugins). |
| [#39282](https://github.com/openai/codex/discussions/39282) | Lians: Apache-2.0 local MCP memory layer for cross-agent (Codex/Claude Code/Cursor) project continuity. |
| [#50222](https://github.com/openai/codex/discussions/50222) | QuotaCrew for Codex: Windows account manager with quota tracking, auto-switching, and task continuation. |
| [#46874](https://github.com/openai/codex/discussions/46874) | Agent Lint: open-source linter for Codex, AGENTS.md, MCP, Claude Code, and Cursor config files. |
| [#50548](https://github.com/openai/codex/discussions/50548) | codex-unlock: CLI to diagnose thread writer locks and recover eligible completed sessions. |

## 6. Feature Request Trends
1. **Permission model flexibility**: Wildcard/glob support for command permissions, scoped URL approval, and clearer effective permission visibility.
2. **Dynamic orchestration**: Adaptive runtime selection of models, reasoning effort, tools, and subagents based on task phase instead of static config.
3. **Cross-agent interoperability**: Shared project memory, context sync, and session messaging between Codex, Claude Code, and Cursor.
4. **Enterprise governance**: Organization-managed skill/behavior profiles with version pinning, audit trails, and policy enforcement.
5. **UI/UX restorations & improvements**: Return of branch selection, "Copy as Markdown", screen reader accessibility, and persistent UI preferences.
6. **Usage limit flexibility**: Longer banked reset expiration, clearer limit accounting, and better cross-feature limit consistency.

## 7. Developer Pain Points
1. **Windows platform instability**: Recurring bugs in ACL/sandbox setup, daemon file lock conflicts, terminal window flashing, and path deserialization errors.
2. **Remote pairing & connectivity failures**: Android pairing loops, WebSocket retry delays for proxy users, and remote control thread locking issues.
3. **Messaging/queue data loss**: VS Code extension prompt disappearance, stuck send queues, and duplicate submission bugs affecting multiple recent releases.
4. **Permission state corruption**: Stale browser/site permissions, incorrect sandbox fallback for automations, and mismatched effective vs configured profiles.
5. **Usage limit opacity**: Inconsistent limit reporting across interfaces, unexpected reset credit expiration, and unclear tier parity between ChatGPT and Codex.
6. **Cross-environment task continuity**: Cloud-to-local task sync failures, dot/session placement errors, and locked threads across mobile/desktop clients.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-10-05
---

## 1. Last 7 Days' Highlights
This week the Gemini CLI project shipped a stable v0.62.0 release, a v0.63.0 preview build, and daily nightly builds leading up to v0.64.0-nightly.20261005, with fixes focused on CLI interaction reliability, state persistence safety, agent execution stability, and security hardening. The community’s most active conversations centered on agent reliability bugs (subagent false success, generalist agent hangs, browser agent edge cases) and requests for AST-aware code tooling and better subagent observability. Maintainers also merged a batch of core performance and security improvements, including hardened subprocess argument handling on Windows and grep command injection mitigations.

---

## 2. Releases
- **v0.64.0-nightly.20261005.gfb972b2f8** (2026-10-05): Automated nightly version bump; full changelog: [compare link](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8)
- **v0.64.0-nightly.20261003.gfb972b2f8**: Fixed unreliable Enter/Spacebar confirmation in selection list UIs ([PR #29502](https://github.com/google-gemini/gemini-cli/pull/29502))
- **v0.64.0-nightly.20261002.gc9096a847**: Implemented append-only delta patching + bounded history windowing in `ChatRecordingService`; added atomic state persistence with corruption recovery from backup ([PR #29568](https://github.com/google-gemini/gemini-cli/pull/29568))
- **v0.64.0-nightly.20261001.gc6bccb7ec**: Fixed CPU hang + quote swallowing on `@` in code; serialized file tool operations with atomic writes ([PR #29557](https://github.com/google-gemini/gemini-cli/pull/29557))
- **v0.64.0-nightly.20260930.g38700b4b3**: Enabled autonomous plan execution in non-interactive mode; fixed truncation logic when `maxChars <= 0` in `formatTruncatedToolOutput` ([PR #29539](https://github.com/google-gemini/gemini-cli/pull/29539))
- **v0.63.0-preview.0**: Added retry progress indicator during connection recovery ([PR #29468](https://github.com/google-gemini/gemini-cli/pull/29468))
- **v0.63.0-nightly.20260929.gfe6350238**: Fixed infinite auth loop caused by file contention, headless keyring, and supervisor state drops ([PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448))
- **v0.62.0** (stable): Included A2A server metadata endpoint fixes and cumulative preview changes; release page: [v0.62.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0)

---

## 3. Hot Issues
| Issue | Why it matters | Community signal |
|---|---|---|
| [#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 bug where the `codebase_investigator` subagent falsely reports success after hitting max turns, hiding task failure and producing misleading results. | 13 comments (most active this week), 2 👍 |
| [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 bug causing indefinite hangs (up to 1+ hour) for basic operations like folder creation when the generalist subagent is invoked; workaround is to disable subagents. | 8 comments, 8 👍 (highest engagement by upvotes) |
| [#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | Large enhancement to leverage Gemini 3's native bash affinity while maintaining security, enabling POSIX tool chaining for codebase exploration. | 9 comments, 1 👍 |
| [#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC tracking investigation of AST-aware tooling to reduce turns, token noise, and improve code navigation precision. | 7 comments, 1 👍 |
| [#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | User-reported gap where the model fails to invoke custom skills/sub-agents unless explicitly instructed, limiting automation utility. | 7 comments |
| [#22186 get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 crash during final summary output of the get-shit-done workflow, disrupting end-user task completion. | 3 comments |
| [#21983 Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 compatibility bug breaking the browser agent on Linux Wayland environments. | 4 comments, 1 👍 |
| [#22267 Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | Bug where `maxTurns` and other settings in `settings.json` are ignored by the browser agent, defeating user configuration. | 4 comments |
| [#23571 Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571) | Workflow hygiene issue: scattered temporary edit scripts create cleanup overhead and dirty workspaces. | 3 comments |
| [#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | Safety/guardrail request to prevent dangerous operations (e.g., `git reset --force`, destructive DB changes) when safer alternatives exist. | 3 comments, 1 👍 |

---

## 4. Key PR Progress
1. **[#29632 Bump npm-dependencies group (75 updates)](https://github.com/google-gemini/gemini-cli/pull/29632)**  
   P1 core dependency update including `@modelcontextprotocol/sdk` 1.23.0 → 1.30.1 and `@octokit/rest` 22.0.0 → 22.0.1, addressing upstream fixes and MCP compatibility.
2. **[#29629 Cap pending plain text height to reduce streaming flicker](https://github.com/google-gemini/gemini-cli/pull/29629)**  
   Fixes full-screen clear/redraw flicker during streaming by capping MarkdownDisplay pending text height to terminal dimensions, directly addressing user reports of terminal flickering ([#29628](https://github.com/google-gemini/gemini-cli/issues/29628)).
3. **[#29536 Harden grep against command-line option injection](https://github.com/google-gemini/gemini-cli/pull/29536)**  
   Security fix for CWE-88: uses explicit `-e` pattern delimiters for both `git grep` and system `grep` to prevent argument injection via malicious search patterns.
4. **[#29510 Harden Windows subprocess argument quoting](https://github.com/google-gemini/gemini-cli/pull/29510)**  
   Security fix for Windows: adds `quoteCmdArg` helper for `shell: true` invocations to prevent command injection in diff/editor subprocess calls.
5. **[#29432 Settle queued tool calls on scheduler disposal](https://github.com/google-gemini/gemini-cli/pull/29432)**  
   Core reliability fix: rejects queued tool batches and cancels unstarted tools when the scheduler is disposed, avoiding orphaned approval requests and hangs.
6. **[#29505 Support rootless Podman with keep-id](https://github.com/google-gemini/gemini-cli/pull/29505)**  
   P1 sandbox compatibility fix: correctly preserves host UID/GID in rootless Podman sessions, fixing sandbox startup failures for rootless container users.
7. **[#29404 Add `gemini models list` with JSON output](https://github.com/google-gemini/gemini-cli/pull/29404)** (CLOSED/merged)  
   New feature: CLI subcommand for programmatic model discovery, eliminating hardcoded model IDs in integrations.
8. **[#29411 Resolve resume latest to most recently active session](https://github.com/google-gemini/gemini-cli/pull/29411)** (CLOSED/merged)  
   UX fix: `--resume` now picks the most recently active session instead of the newest-created one, fixing cases where users resumed into stale short-lived sessions.
9. **[#29626 Preserve shared references in JSON serialization](https://github.com/google-gemini/gemini-cli/pull/29626)**  
   Fix for `safeJsonStringify`: repeated non-circular object references (e.g., OTel metrics `endTime`) were incorrectly replaced with `[Circular]` due to a global `seen` WeakSet.
10. **[#29517 Linearize array reconstruction in truncateHistoryToBudget](https://github.com/google-gemini/gemini-cli/pull/29517)**  
    Performance optimization: replaces O(n²) `unshift()`-based reordering with linear array building for history truncation, improving compression speed for long chat sessions.

---

## 5. Hot Discussions
*No GitHub Discussions data was provided for this period.*

---

## 6. Feature Request Trends
1. **AST-aware code tooling**: Multiple linked issues (#22745, #22746, #22747) push for AST-powered file reads, search, and codebase mapping to reduce token usage, lower turn counts, and improve code navigation precision.
2. **Enhanced subagent observability & control**: Users want subagent trajectories exposed via `/chat share` (#22598), bug reports that include subagent context (#21763), and better default use of custom skills/sub-agents (#21968).
3. **Browser agent hardening**: Requests for settings override support (#22267), persistent session lock recovery (#22232), and Wayland compatibility (#21983) aim to make the browser agent production-ready across environments.
4. **Persistent, file-based task tracking**: Replacement of in-context `WriteToDo` with CRUD-style filesystem-backed task tracking (#18836, #21000) to reduce context rot and preserve state across sessions.
5. **Sandboxing & safety guardrails**: Demand for zero-dependency OS-level sandboxing (#19873), destructive operation guardrails (#22672), and rootless Podman support (#29505) to enable safe autonomous execution.
6. **Agent self-awareness**: Requests for the CLI agent to accurately understand its own flags, hotkeys, and execution behavior (#21432) to act as a self-support tool.

---

## 7. Developer Pain Points
1. **Agent reliability regressions**: Frequent hangs (generalist agent #21409, Vite app creation #22465) and false success reporting (#22323) erode trust in autonomous agent workflows, forcing users to disable subagents as a workaround.
2. **Poor subagent default behavior**: The model fails to use installed skills and sub-agents unless explicitly prompted (#21968), reducing the value of custom agent ecosystems.
3. **Terminal UX friction**: Streaming flicker (#29628, #21924), flaky selection list input (#29502), and broken resume session ordering (#29410) create day-to-day usability annoyances.
4. **Workspace hygiene issues**: Scattered temporary scripts generated by the model (#23571) create cleanup overhead and clutter version control workspaces.
5. **Cross-platform compatibility gaps**: Browser agent failures on Wayland (#21983), Windows subprocess quoting vulnerabilities (#29510), and rootless Podman breakage (#29505) fragment support across developer environments.
6. **Limited programmatic access**: Lack of machine-readable model discovery (addressed by #29404) and symlink support for agent definitions (#20079) hinder integration with dotfiles and automation pipelines.
7. **Opaque error reporting**: Silent ripgrep failures (#29552), missing subagent context in bug reports (#21763), and 400 errors with >128 tools (#24246) make debugging issues slow and difficult.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-10-05
*Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

---

## 1. Last 7 Days' Highlights
The Copilot CLI team shipped 9 patch releases in the v1.0.90–v1.0.92 range, headlined by new `copilot config` subcommands, a pre-conversation Ctrl+E environment picker for local/cloud run switching, and major improvements to MCP connection responsiveness and first-run startup time. Community activity centered on MCP reliability pain points on macOS and Windows, BYOK (Bring Your Own Key) model compatibility issues, and UX requests for better navigation and taskbar customization.

---

## 2. Releases
Over the past 7 days, 9 new versions were released (v1.0.90 through v1.0.92-4):
- **v1.0.92-4**
  - Added: `copilot config` subcommands to list, read, set, and remove settings
  - Improved: first-run startup via bundled CLI extraction in a child process; faster startup with many MCP servers; Canvas actions can now return images
- **v1.0.0.92-3**
  - Added: pre-conversation Ctrl+E environment picker to switch between local and cloud runs
  - Fixed: ordered/responsive keyboard, paste, and mouse input during rapid interaction; sandboxed shell network bypass prompt for proxy-blocked destinations
- **v1.0.0.92-2**
  - Fixed: Windows sandbox temp file writing for rename-in-place tools; prompt-mode sessionEnd hook fires after Stop-hook completions
- **v1.0.0.92-1**
  - Fixed: MCP remote server reconnection after idle Streamable HTTP expiry; background agent turn steering on new messages; context rollover recovery; hidden automatic sandbox CA setup prompt
- **v1.0.0.92-0**
  - Fixed: MCP tool persistence after OAuth reauthentication for unchanged tool definitions
- **v1.0.0.91 / v1.0.0.91-1**
  - Added: `copilot sandbox ca` commands (check/create/trust/rotate/remove) with unattended Windows setup; `/sandbox ca install` split into `create` and `trust`
  - Improved: telemetry flush on CLI shutdown with bounded delay; session timeline busy status clears after interrupted turns
- **v1.0.0.91-0**
  - Improved: read-only analyzable shell pipelines get execution-evidence review; incomplete pipelines require explicit approval
  - Fixed: sandbox network bypass for Node/npm EACCES socket denials on Windows
- **v1.0.0.90 / v1.0.0.90-7**
  - Added: GPT-6.1 Sol model selection support; `--mcp-github-auth` to scope GitHub auth to approved MCP origins; session-scoped read-only directory approvals
  - Fixed: permission prompts remain answerable after resuming interrupted sessions

---

## 3. Hot Issues
1. **[#640: Invalid session ID `read_sql_files` error](https://github.com/github/copilot-cli/issues/640)** (Closed, 24 comments, 10 👍)  
   Long-standing issue where Copilot CLI throws invalid session ID errors for tool reads, most frequently with Gemini 3 preview. High community engagement reflects widespread impact on multi-tool workflows.

2. **[#4998: `.mcp-writer.binding` stale device ID breaks CLI after macOS reboot/update](https://github.com/github/copilot-cli/issues/4998)** (Open, 8 comments, 8 👍)  
   Critical regression on macOS where all sessions fail post-reboot due to stale filesystem binding. Fast-rising issue affecting all MCP-dependent workflows on macOS 1.0.90-3.

3. **[#5008: "Failed to read model provider attribution: Not authenticated" startup race condition](https://github.com/github/copilot-cli/issues/5008)** (Closed, 7 comments, 5 👍)  
   Startup error introduced in 1.0.89 caused by a race between attribution loading and sign-in completion. Resolved in recent patches but highlights authentication initialization fragility.

4. **[#2795: `--agent` ignores `--plugin-dir` when used with `-p` prompt](https://github.com/github/copilot-cli/issues/2795)** (Closed, 6 comments, 17 👍)  
   Highly upvoted bug where custom agents in plugin directories are undiscoverable in non-interactive prompt mode. Fix unblocks automated agent-based CI workflows.

5. **[#4012: BYOK reasoning effort not supported for `glm-5.2:cloud`](https://github.com/github/copilot-cli/issues/4012)** (Closed, 4 comments, 23 👍)  
   Top-voted BYOK compatibility issue: `--reasoning-effort max` fails for custom models even when supported natively. Reflects growing demand for first-class BYOK feature parity.

6. **[#4839: Option to disable taskbar icon](https://github.com/github/copilot-cli/issues/4839)** (Closed, 5 comments, 4 👍)  
   Popular UX request from users with many concurrent sessions who want to hide taskbar icons to reduce clutter. Resolved via the new `copilot config` settings system.

7. **[#4832: Workspace `.mcp.json` never loads in 1.0.83](https://github.com/github/copilot-cli/issues/4832)** (Closed, 4 comments, 0 👍)  
   Critical regression where project-local MCP servers are completely ignored, breaking per-repo MCP workflows. Fixed in recent patch releases.

8. **[#4971: Hourly "Authorization error. Your credentials may be expired"](https://github.com/github/copilot-cli/issues/4971)** (Open, 3 comments, 0 👍)  
   Persistent credential expiry bug where re-login does not resolve hourly auth failures. Impacts long-running background sessions and developer productivity.

9. **[#4840: BYOK with Deepseek broken by `tools[4].type: custom` deserialization error](https://github.com/github/copilot-cli/issues/4840)** (Open, 3 comments, 1 👍)  
   BYOK integration failure with non-OpenAI providers that return `custom` tool types instead of `function`. Highlights schema rigidity for third-party model support.

10. **[#5015: Keyboard-accessible pager mode for chat history with Vim/less navigation](https://github.com/github/copilot-cli/issues/5015)** (Open, 2 comments, 3 👍)  
    High-demand UX feature for keyboard-first users: finer-grained scroll control than full-page Page Up/Down, especially for long diffs and tool output.

---

## 4. Key PR Progress
Only 3 PRs were updated in the last 7 days:
1. **[#5046: Initial commit](https://github.com/github/copilot-cli/pull/5046)** (Open)  
   New PR in early draft stage; no description or details available yet.

2. **[#5036: Update default model version in README](https://github.com/github/copilot-cli/pull/5036)** (Open)  
   Documentation update to align README content with the current default Copilot CLI model version, reducing user confusion from outdated docs.

3. **[#5000: Publish npm tarballs from published Copilot CLI releases](https://github.com/github/copilot-cli/pull/5000)** (Open)  
   CI/CD improvement to trigger npm publishing automatically from GitHub releases using OIDC trusted publishing (no static npm tokens), with a manual tag-based recovery path. Improves supply chain security and release automation for npm consumers.

---

## 5. Hot Discussions
No discussion data provided; this section is omitted.

---

## 6. Feature Request Trends
1. **Enhanced navigation & keyboard UX**: Repeated requests for Vim/less-style pager navigation, `/agent` and `/model` autocomplete, and improved scroll control for long outputs ([#5015](https://github.com/github/copilot-cli/issues/5015), [#1634](https://github.com/github/copilot-cli/issues/1634)).
2. **Granular UI customization**: Demand for toggles to disable taskbar icons and control visual elements like pending chat lines ([#4839](https://github.com/github/copilot-cli/issues/4839)).
3. **BYOK feature parity**: Users want full support for reasoning effort flags, custom tool types, and third-party model compatibility on par with first-party models ([#4012](https://github.com/github/copilot-cli/issues/4012), [#4840](https://github.com/github/copilot-cli/issues/4840)).
4. **MCP configuration flexibility**: Requests for configurable slow-connection warning thresholds and more robust workspace-level MCP config loading ([#2907](https://github.com/github/copilot-cli/issues/2907), [#4832](https://github.com/github/copilot-cli/issues/4832)).
5. **Improved permission & config controls**: Demand for persistent directory allowlists and a centralized config system (delivered via `copilot config` in v1.0.92-4) ([#4482](https://github.com/github/copilot-cli/issues/4482)).
6. **ACP API expansion**: Requests to expose model listing and selection via the ACP interface for headless/SDK clients ([#4880](https://github.com/github/copilot-cli/issues/4880)).

---

## 7. Developer Pain Points
1. **MCP reliability & lifecycle bugs**: Stale device IDs on macOS break sessions post-reboot ([#4998](https://github.com/github/copilot-cli/issues/4998)); MCP worker processes survive exit on Windows when launched via wrappers ([#4972](https://github.com/github/copilot-cli/issues/4972)); Cloudflare MCP servers fail with subscription limit errors post-OAuth ([#4991](https://github.com/github/copilot-cli/issues/4991)).
2. **Authentication instability**: Hourly credential expiry that re-login doesn't fix ([#4971](https://github.com/github/copilot-cli/issues/4971)); startup race conditions causing spurious "not authenticated" errors ([#5008](https://github.com/github/copilot-cli/issues/5008)); session resumption failures behind corporate proxies ([#2978](https://github.com/github/copilot-cli/issues/2978)).
3. **BYOK compatibility gaps**: Third-party model providers fail due to rigid tool schema validation ([#4840](https://github.com/github/copilot-cli/issues/4840)); missing support for common features like reasoning effort flags ([#4012](https://github.com/github/copilot-cli/issues/4012)).
4. **Session & agent state inconsistencies**: Invalid session ID errors for tool reads ([#640](https://github.com/github/copilot-cli/issues/640)); background agents show as running after completion ([#3412](https://github.com/github/copilot-cli/issues/3412)); GitHub Mobile sessions stay "queued" after CLI responds ([#4569](https://github.com/github/copilot-cli/issues/4569)).
5. **Input & rendering glitches**: Single-line copy-paste failures from the timeline on Windows ([#3496](https://github.com/github/copilot-cli/issues/3496)); CJK character garbling after copy-paste ([#3369](https://github.com/github/copilot-cli/issues/3369)); duplicate pending chat lines that fill the screen ([#4532](https://github.com/github/copilot-cli/issues/4532)).
6. **Permission system fragility**: Persistent allowed directory configs don't take effect at startup ([#4482](https://github.com/github/copilot-cli/issues/4482)); inconsistent permission prompts after session resumption.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — Week of 2026-10-05
---

## 1. Last 7 Days' Highlights
This week saw two patch releases focused on platform stability (v1.18.33 / v1.18.34) delivering macOS compatibility fixes, model provider timeout improvements, and session identity header corrections. The community prioritized queue management, context compaction, and UI parity between the TUI and desktop app, while billing/subscription issues for the OpenCode Go plan emerged as a recurring user pain point.

---

## 2. Releases
### v1.18.34
- **Core Bugfixes**:
  - Sends namespaced session and parent-session identity headers with model requests
  - Re-signs locally compiled macOS binaries for reliable execution on macOS 27+ (@ryangamerdev)
  - Signs macOS CLI release binaries with a Developer ID
- **Contributors**: 3 community contributors
- **URL**: https://github.com/anomalyco/opencode/releases/tag/v1.18.34

### v1.18.33
- **Core Bugfixes**:
  - Cloudflare AI Gateway models now honor provider response and stream timeouts (@danlapid)
  - MCP browser launch failures are now reported when the launcher exits immediately
  - Debug configuration output now redacts credentials and sensitive headers
  - Partial fix for Gemini thinking behavior
- **URL**: https://github.com/anomalyco/opencode/releases/tag/v1.18.33

---

## 3. Hot Issues
| Issue | Status | Why It Matters | Community Reaction
|---|---|---|---|
| [#20995 — Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API](https://github.com/anomalyco/opencode/issues/20995) | Closed | Resolved a critical incompatibility with Ollama-hosted Gemma 4 where streaming `tool_calls` were unrecognized, breaking agent workflows for popular local-model users. | 38 comments, 48 👍 — high engagement from self-hosted AI community. |
| [#4821 — Add ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821) | Closed | Delivered a long-requested feature letting users cancel queued messages when overcorrecting agents, improving agent control and reducing wasted compute. | 30 comments, 105 👍 — one of the most-upvoted feature requests this cycle. |
| [#32706 — TUI crash with "An error occurred in Effect.tryPromise" on 1.17.0+](https://github.com/anomalyco/opencode/issues/32706) | Open | Blocks TUI fails to launch on Windows in v1.17.0+, preventing core usage for a subset of users. | 12 comments, 3 👍 — active debugging ongoing. |
| [#14187 — Add markdown preview toggle in file viewer sidebar](https://github.com/anomalyco/opencode/issues/14187) | Closed | Added a toggle to render .md/.mdx files as formatted preview instead of raw syntax-highlighted text. | 10 comments, 29 👍 — popular UX improvement for documentation workflows. |
| [#42170 — Desktop fails to load sessions: no such column: project_id](https://github.com/anomalyco/opencode/issues/42170) | Open | Desktop v1.18.17 crashes on launch due to a schema migration regression in the workspace table, making sessions entirely inaccessible. | 9 comments, 1 👍 — high-severity data integrity issue. |
| [#32366 — UI stuck on 'thinking' indefinitely after stream error](https://github.com/anomalyco/opencode/issues/32366) | Open | Stream errors (e.g., API disconnects) leave the desktop UI in a frozen "thinking" state with no recovery, forcing app restarts and losing session state. | 8 comments, 3 👍 — impacts reliability pain point for all desktop users. |
| [#52269 — Intermittent OpenAI Service Unavailable: upstream connection failure](https://github.com/anomalyco/opencode/issues/52269) | Open | Sporadic upstream connection failures with OpenAI provider cause retries and inconsistent behavior across models and sessions. | 7 comments — active triage of network/provider-layer issues. |
| [#50650 — desktop: custom provider save always throws "unavailable on this server"](https://github.com/anomalyco/opencode/issues/50650) | Open | Custom OpenAI-compatible providers cannot be saved in Desktop due to a unconditional error in the settings save handler, breaking self-hosted and third-party model support. | 6 comments, 3 👍 — blocks custom provider workflows on desktop. |
| [#43250 — [2.0] keep.tokens is not honoured: compaction walk-back is unbounded](https://github.com/anomalyco/opencode/issues/43250) | Open | Context compaction ignores the `keep.tokens` setting, with agent sessions routinely holding 5–15× the configured token limit, inflating costs and latency. | 4 comments — critical for cost control and context window management. |
| [#51346 — Bug: Context compaction causes infinite resend loop when attached file exceeds limit](https://github.com/anomalyco/opencode/issues/51346) | Open | Attaching files that exceed the model context limit triggers an infinite compaction-resend loop instead of a clear error. | 2 comments — causes hangs and wasted API calls. |

---

## 4. Key PR Progress
| PR | Status | Description |
|---|---|---|
| [#53080 — fix(core): preserve OpenAI OAuth model context limits](https://github.com/anomalyco/opencode/pull/53080) | Open | Preserves model-specific context and input limits when connected via ChatGPT OAuth, removing the blanket 400K/272K override. |
| [#53247 — feat(app): show running subagents and shells in session header](https://github.com/anomalyco/opencode/pull/53247) | Open | Moves running subagents and background shells to the session header for one-click access, up from two clicks in the session summary. |
| [#53254 — fix(opencode): show reset time on free usage limit](https://github.com/anomalyco/opencode/pull/53254) | Open | Adds reset time display to free-tier 429 errors, matching the existing Go subscription limit behavior using the `retry-after` header. |
| [#53253 — fix(edit): match LF regions of mixed-ending files](https://github.com/anomalyco/opencode/pull/53253) | Open | Fixes line-ending detection in files with mixed LF/CRLF, preventing incorrect rewrites of LF-only regions when editing. |
| [#53076 — fix(app): match TUI inbox, steer, queue, and revert behavior](https://github.com/anomalyco/opencode/pull/53076) | Open | Aligns GUI behavior for inbox, steers, queue, undo/redo, and compaction between the GUI and TUI, with the TUI remaining unchanged. |
| [#47417 — fix(app): Path key normalization](https://github.com/anomalyco/opencode/pull/47417) | Closed | Normalizes project path keys so projects in the same path are recognized as identical, fixing cross-drive path mismatches on Windows. |
| [#52568 — fix(ai): place Anthropic system updates before the next assistant turn](https://github.com/anomalyco/opencode/pull/52568) | Open | Fixes mid-conversation Anthropic system message placement to comply with Anthropic API requirements, preventing API errors when updating system prompts mid-session. |
| [#53238 — fix(core): preserve active sessions during idle cleanup](https://github.com/anomalyco/opencode/pull/53238) | Open | Prevents active running sessions from being cleaned up due to inactivity timeouts, fixing unintended cancellation of long-running agent tasks waiting for user input. |
| [#53232 — refactor(ai): untangle stream event handlers and inner protocol helpers](https://github.com/anomalyco/opencode/pull/53232) | Closed | Refactors stream event handlers across all LLM/media protocols to reduce code duplication and improve maintainability. |
| [#47353 — feat(opencode): support managed OTLP exporter settings](https://github.com/anomalyco/opencode/pull/47353) | Closed | Adds managed-only OTLP telemetry exporter settings for endpoint-managed OpenCode deployments, including endpoint configuration. |

---

## 5. Hot Discussions
*Omitted — no discussion data provided in the dataset.*

---

## 6. Feature Request Trends
1. **Agent workflow controls**: Demand for better message queue management (unqueue, revert) and fine-grained control over agent execution, as seen in #4821 and #53159.
2. **UI/UX parity and customization**: Requests for markdown previews (#14187), selective transcript copying (#22871), and configurable message summary opt-outs (#6228) to tailor the interface to user workflows.
3. **Custom provider flexibility**: Features to auto-detect context limits from /models endpoints (#53235) and fix custom provider saving (#50650) for self-hosted and third-party models.
4. **Transparency and visibility**: Better visibility into usage limits with reset times for free tiers (#53252) and running subagent/shell status (#53247).
5. **Context and cost control**: Configurable context window management (#43250) and summary generation opt-outs (#6228) to reduce token usage and costs.

---

## 7. Developer Pain Points
1. **Billing and subscription instability**: Multiple reports of double charges, missing subscriptions, and 403 errors for OpenCode Go plans (#52595, #52592, #52596, #52605, #52589) indicate significant friction in the payment and account system.
2. **Desktop app reliability**: Frequent crashes and state loss from migration issues (#42170), frozen UI hangs on stream errors (#32366), and broken custom provider support (#50650) degrade the desktop experience.
3. **Context compaction bugs**: Unbounded token retention (#43250) and infinite resend loops (#51346) cause unexpected costs and broken workflows with large contexts.
4. **TUI launch and UI inconsistencies**: Behavioral gaps between TUI and GUI behavior (#53076) and TUI-specific crashes (#32706, #50566) create confusion across platforms.
5. **Provider compatibility issues**: Integrations with Ollama/Gemma 4 (#20995), Anthropic mid-session system updates (#52568), and MCP SSE transport (#43311), and Cloudflare AI Gateway timeouts (#v1.18.33) require ongoing compatibility fixes.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — October 5, 2026
*Source: [github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

---

## 1. Last 7 Days' Highlights
Pi shipped 6 releases in 7 days, hitting v1.0.2 with fullscreen TUI defaults, Nix flake support, thinking-level sampling controls, and a stream of codemode/MCP quality fixes. The community is most active around TUI performance regressions, provider compatibility gaps, and new ecosystem extensions for multi-agent and durable task workflows.

---

## 2. Releases
| Version | Highlights |
|---------|------------|
| **v1.0.2** | **Sampling by thinking level** — `samplingParamsByThinkingLevel` in `models.json` sets per-thinking-level `temperature`/`top_p` for OpenAI-compatible APIs. [Docs](https://github.com/earendil-works/pi/blob/v1.0.2) |
| **v1.0.1** | **Nix flake** — `nix run github:earendil-works/pi/stable` runs the latest release; `nix profile add` installs it. [Docs](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi) |
| **v1.0.0** | **Fullscreen by default** — TUI runs fullscreen; set `tuiMode: "regular"` to keep scrollback. [Docs](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display) |
| **v0.99.2** | MCP servers with default `codemode` exposure no longer clutter the `codemode` description or block the first prompt; tools are discoverable via `searchTools()`. |
| **v0.99.1** | **GPT-6.1 Sol** support on OpenAI, Azure, and OpenAI Codex (new Codex default). [Docs](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model) |
| **v0.99.0** | **Codemode + MCP** — connect MCP servers and run JavaScript that calls tools in parallel. [MCP Docs](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md) |

---

## 3. Hot Issues (Top 10 by impact & engagement)
1. **#2870 — [CLOSED] Follow XDG Base Directory** (24 comments, 63 👍)
   Long-standing Linux UX issue: Pi was cluttering `$HOME`. Resolved after 6 months of community demand. [→](https://github.com/earendil-works/pi/issues/2870)

2. **#6665 — [OPEN] TUI pins a full core while streaming** (14 comments, 6 👍)
   Critical performance regression: uncached `Intl.Segmenter` + per-chunk Markdown rebuild cause 100% CPU on long sessions. Reproduces in core (`pi -ne`). Top active bug. [→](https://github.com/earendil-works/pi/issues/6665)

3. **#8643 — [OPEN] Bedrock: OpenAI models reject images in `toolResult.content`** (10 comments)
   Provider parity gap: images inside tool results aren't hoisted for Bedrock OpenAI (they are for `openai-completions`). Fix + tests ready on a fork. [→](https://github.com/earendil-works/pi/issues/8643)

4. **#10314 — [OPEN] Reconsider Home/End defaults in fullscreen mode** (9 comments, 5 👍)
   v1.0.0 fullscreen changed Home/End from line-editing to document-scroll behavior. Split community opinion on default behavior. [→](https://github.com/earendil-works/pi/issues/10314)

5. **#8301 — [OPEN] Can't interleave compaction with prompts in queue** (7 comments)
   Workflow bug: `/compact` cancels the session instead of queuing after pending prompts. Breaks batch workflows. [→](https://github.com/earendil-works/pi/issues/8301)

6. **#9134 — [OPEN] Anthropic adapter drops root `anyOf` from tool schemas** (6 comments)
   Silent correctness bug: custom tools with top-level `anyOf` have the constraint stripped before reaching Anthropic models, causing invalid tool calls. [→](https://github.com/earendil-works/pi/issues/9134)

7. **#10330 — [OPEN] Auto-compaction doesn't start in CLI mode** (6 comments)
   Mode parity gap: `pi --mode json` never runs auto-compaction, though TUI works fine after #6994. [→](https://github.com/earendil-works/pi/issues/10330)

8. **#9335 — [CLOSED] Support `configuration_update` for cache-preserving reasoning changes** (5 comments, 7 👍)
   GPT-6 optimization request: adjust reasoning effort via `configuration_update` without busting prompt cache. Closed as no-action for now. [→](https://github.com/earendil-works/pi/issues/9335)

9. **#10287 — [OPEN] `getContextUsage()` overestimates after network errors** (4 comments)
   Reliability bug: retryable WebSocket/fetch failures spike reported context usage (e.g. 42k → 330k tokens). [→](https://github.com/earendil-works/pi/issues/10287)

10. **#10291 — [CLOSED] MCP: Store auth in keychain instead of `mcp-auth.json`** (3 comments)
    Security improvement request: move MCP tokens from plaintext disk file to system keychain. Closed no-action. [→](https://github.com/earendil-works/pi/issues/10291)

---

## 4. Key PR Progress (Top 10)
1. **#9776 — Per thinking sampling parameters** (merged → v1.0.2)
   Implements `samplingParamsByThinkingLevel` for different sampling params across thinking/non-thinking modes. [→](https://github.com/earendil-works/pi/pull/9776)

2. **#9137 — Add Nix flake** (merged → v1.0.1)
   Adds Nix flake support for one-command run/install via `nix run`. [→](https://github.com/earendil-works/pi/pull/9137)

3. **#10440 — Fix: resolve QuickJS wasm path once per process** (merged)
   Fixes #10439: codemode broke after `pnpm global update` because the wasm path was re-resolved on every call. [→](https://github.com/earendil-works/pi/pull/10440)

4. **#10383 — Perf(TUI): diff raw lines for pointer equality** (merged)
   Fullscreen TUI optimization: unchanged lines preserve reference equality to reduce re-renders. [→](https://github.com/earendil-works/pi/pull/10383)

5. **#8734 — Top-level instructions for OpenAI Responses providers** (open)
   Adds `systemPromptFormat` option to move system prompts to top-level `instructions` (avoids duplication, improves cache hits). Closes #8388. [→](https://github.com/earendil-works/pi/pull/8734)

6. **#9714 — Support Azure Foundry Chat Completions deployments** (open)
   Expands Azure provider beyond Responses API to support Chat Completions deployments (e.g. DeepSeek V4 Pro). Closes #9645. [→](https://github.com/earendil-works/pi/pull/9714)

7. **#10382 — Native llama.cpp classifier models** (open)
   Probes llama.cpp models via `/v1/systemone`; decision models (Julia-1, Laya, etc.) use native classification instead of chat fallback. [→](https://github.com/earendil-works/pi/pull/10382)

8. **#10410 — Expose durable thinking, websocket, session options** (open)
   Adds `thinkingBudgets`, `websocketConnectTimeoutMs`, and `sessionId` to durable `ConversationStreamOptions`. [→](https://github.com/earendil-works/pi/pull/10410)

9. **#10397 — Dedupe tool call IDs on reused pairs** (merged)
   Fixes duplicate tool-call blocks when providers re-issue the same `(call_id, id)` with modified arguments. [→](https://github.com/earendil-works/pi/pull/10397)

10. **#10328 — Drop mismatched thinking blocks on Bedrock** (merged)
    Closes #10324: uses Bedrock `thinking-binding-controls-2026-08-01` beta to drop stale thinking blocks instead of 400ing. [→](https://github.com/earendil-works/pi/pull/10328)

---

## 5. Hot Discussions
### Ideas
- **#10128 — Add ability to disable the share feature?** (2 comments, 3 👍)
  Resurrected request for an off-switch for the share feature, aligned with Pi's minimal design ethos. [→](https://github.com/earendil-works/pi/discussions/10128)
- **#10126 — Make GitHub releases immutable?** (2 👍)
  Supply-chain security proposal: pin release artifacts to prevent post-publish tampering. [→](https://github.com/earendil-works/pi/discussions/10126)
- **#10151 — Working memory as prompt sections (tasks + past sessions)** (1 comment, 1 👍)
  Proposal to extend skills-style lazy loading to task state and cross-session memory. [→](https://github.com/earendil-works/pi/discussions/10151)
- **#5936 — Why not use native terminal cursor?** (2 comments, 2 👍)
  UX question about Pi's custom inverse-block cursor vs. the terminal's native cursor. [→](https://github.com/earendil-works/pi/discussions/5936)

### Q&A
- **#10446 — Why are updates so frequent?** (1 👍)
  Community question about the sudden acceleration in release cadence (multiple per day). [→](https://github.com/earendil-works/pi/discussions/10446)
- **#10230 — Codemode benchmarks / token savings?** (2 comments, 1 👍)
  Discussion comparing codemode "only" mode to Nvidia's SoL-Pi "action fusion" research. [→](https://github.com/earendil-works/pi/discussions/10230)

### Show and tell
- **#10069 — agent-chat: P2P messaging for independent Pi agents** (2 comments, 1 👍)
  Extension for cross-session agent coordination (shared Docker/ports/DBs) without an orchestrator. [→](https://github.com/earendil-works/pi/discussions/10069)
- **#10447 — pi-durabletask-mcp: delegated tasks with steering + recovery** (1 👍)
  Extends `pi-delegate-mcp` with SQLite-backed durable tasks and `steer`/`follow_up` support. [→](https://github.com/earendil-works/pi/discussions/10447)
- **#10432 — Threshold: project-rooted harness for multi-session continuity** (1 👍)
  Local harness that preserves project state across independent Pi worker sessions via checkpoints. [→](https://github.com/earendil-works/pi/discussions/10432)
- **#10331 — Qwen 3.8 26B fine-tuned for Pi** (1 👍)
  Community-shared open model fine-tuned specifically for agentic Pi workflows. [→](https://github.com/earendil-works/pi/discussions/10331)

---

## 6. Feature Request Trends
1. **TUI customization & defaults control** — Home/End key behavior, native cursor, themable selection, share-feature toggle, and output padding consistency are all top of mind post-v1.0.0 fullscreen.
2. **Cross-mode feature parity** — CLI/JSON/RPC modes lag TUI on auto-compaction, display transforms, and queue management.
3. **Provider & model compatibility** — Expanded Azure (Foundry/Chat Completions), Bedrock (image handling, thinking blocks), and open model (llama.cpp classifiers, Qwen fine-tunes) support.
4. **Security & supply-chain hardening** — Keychain-based MCP auth, immutable GitHub releases, and XDG compliance.
5. **Durable & multi-agent workflows** — Growing demand for cross-session memory, delegated tasks, recovery, and P2P agent coordination.

---

## 7. Developer Pain Points
1. **TUI performance regressions** — Fullscreen mode introduced CPU-bound streaming (full core pinned) and visual glitches (viewport jumps on Windows), the most active bug area right now.
2. **Silent provider-specific schema/behavior differences** — Tool schemas being silently stripped (Anthropic `anyOf`), image handling gaps (Bedrock), and dropped `maxTokens` (Codex) cause hard-to-debug failures.
3. **Codemode fragility** — Path resolution breaks after package updates, and MCP version negotiation is brittle with non-conformant servers.
4. **Compaction inconsistency** — Doesn't queue properly, doesn't run in CLI mode, and context-usage reporting is unreliable after network errors.
5. **Extension API gaps** — No structured logging, no nested tool execution via `ToolExecutionApi`, and no display-only text transforms for RPC consumers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-10-05
*Data source: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

---

## 1. Last 7 Days' Highlights
This week saw the stable release of Qwen Code v0.24.7 alongside daily nightly builds, with core fixes for Code Mode text alignment and permission handling. The community prioritized stability work on the managed agent runtime, resolving deadlocks, CI flakes, and session lifecycle bugs while advancing experimental features like Kubernetes runtime and background Shell/Monitor support.

---

## 2. Releases
- **Qwen Code v0.24.7 (stable)**  
  No breaking changes. Key feature: workspace-bound sessions can be admitted without execution in managed agent mode.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7)

- **v0.24.7 nightly builds (2026-09-29 to 2026-10-04)**  
  All nightly builds include two recurring fixes:
  1. `fix(core)`: Align Code Mode text with lazy tool discovery ([PR #12990](https://github.com/QwenLM/qwen-code/pull/12990))
  2. `fix(permissions)`: Honor approved permission states
  Latest nightly: [v0.24.7-nightly.20261004.9915c7ff8f](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261004.9915c7ff8f)

- **SDK TypeScript v0.1.17**  
  Bundles CLI v0.24.7, built from the same source branch as the SDK.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.17)

- **Qwen Code Desktop v0.24.7**  
  Includes session creation failure diagnostic preservation and Java SDK managed runtime additions.  
  [Release link](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.7)

---

## 3. Hot Issues
*(Top 10 by impact and community engagement)*
1. **#13333 [P1 Bug] ≥8 concurrent Turns stall on modest hardware (lock convoy)**  
   Critical concurrency bug in managed agent store path causes throughput collapse at high session counts. Reproduced via new E2E test harness.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13333)

2. **#13413 [P1 Bug] Transient Session Store outage permanently wedges running Turns**  
   A temporary database outage breaks session log writes permanently, turning transient failures into permanent hangs. High severity for hosted deployments.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13413)

3. **#13395 [Feature] Kubernetes tool runtime progress tracker**  
   Tracks implementation of Kubernetes-based tool runtime under proposal #12389, including portability and acceptance gates. 6 comments indicating active cross-team coordination.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13395)

4. **#9693 [Closed Bug] Windows MCP -32000 connection error at startup**  
   Fixed issue where Windows desktop reported MCP connection errors even when MCP was disabled, affecting Windows integration reliability. 9 comments — highest comment count this week.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/9693)

5. **#13415 [Bug] Local Qwen3.x models assumed to have 1M context window**  
   Auto-compaction never triggers for local deployments with smaller context windows (e.g. 262k), causing hard failures when context limits are hit.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13415)

6. **#12878 [Bug] Ollama rejects zero-argument tools (missing parameters field)**  
   Ollama returns 400 errors for tools with no arguments because Qwen Code omits the `properties` field. 1 upvote, 4 comments from users hitting this in local deployments.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/12878)

7. **#13255 [Bug] Intermittent CI failure in HostedWorkspaceToolTurnIT**  
   Flaky test in Java SDK CI lane (MySQL 8.4 / Java 21) causes false red builds on unrelated PRs, slowing down review velocity.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13255)

8. **#13392 [Bug] PreToolUse `updatedInput` ignored in Desktop/ACP 0.24.7**  
   Regression breaking hook-based modification of tool arguments, blocking MCP integrations that rely on transport argument injection. Follow-up to #12922.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13392)

9. **#13280 [Bug] Memory discovery loads QWEN.md/AGENTS.md from parent directory**  
   Unexpected behavior where configuration files are loaded from one level above the git root, breaking project isolation for monorepo setups.  
   [Issue link](https://github.com/QwenLM/qwen-code/issues/13280)

10. **#13387 [Bug] Custom commands misinterpret `@{...}` file content as template syntax**  
    Literal template syntax inside referenced files gets re-evaluated, causing unintended variable substitution in custom command workflows.  
    [Issue link](https://github.com/QwenLM/qwen-code/issues/13387)

---

## 4. Key PR Progress
*(Top 10 most impactful PRs updated this week)*
1. **#13289 feat(runtime): Experimental Kubernetes CSI runtime + durable worker ACK**  
   Extends Kubernetes runtime from disposable scratch sessions to CSI-backed persistent workspaces, with Pod identity persistence and authorization preservation.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13289)

2. **#13265 feat(managed-agent): H3 background Shell and Monitor runtime**  
   Implements background shell execution and monitoring for the managed agent path, with bilingual design docs shipped first.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13265)

3. **#13361 fix(managed-agent): Harden and diagnose Hosted cold-load refusal gates**  
   Addresses the intermittent #13255 CI failure by adding instrumentation and hardening cold-load rejection logic for hosted sessions.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13361)

4. **#13299 fix(core): Support dotted + dashed model IDs in models.dev catalog**  
   Fixes catalog keying to handle both spelling conventions (e.g. `glm-4-5v` / `glm-4.5v`) across providers, resolving model lookup failures.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13299)

5. **#13400 feat(managed-agent): Bounded approval input previews**  
   Adds 8192-byte bounded previews for native file and Shell approval requests, with truncation flags exposed via public and WebShell APIs.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13400)

6. **#13179 fix(managed-agent): Harden managed panel failure lifecycle + worker path containment**  
   Three robustness fixes including path traversal protection for managed runtime workers and improved failure lifecycle handling.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13179)

7. **#13219 fix(managed-agent): Bound retry loops with terminal states**  
   Eliminates infinite retry loops across the managed agent stack, adding retry budgets and terminal state handling for permanent failures.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13219)

8. **#13250 fix(qqbot)!: Restore per-group session isolation under thread scope**  
   Breaking fix for QQ Bot channel: removes forced single-session override, restoring per-group isolation when `groupAllPolicy` is set to `keyword` or `all`.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13250)

9. **#13276 fix(serve): Name Hosted recovery-refusal branches in cold-load 409s**  
   Replaces generic `hosted_turn_recovery_required` error codes with granular labels across 22 refusal sites, simplifying CI flake debugging.  
   [PR link](https://github.com/QwenLM/qwen-code/pull/13276)

10. **#13342 fix(web-shell): Managed session UI correctness fixes**  
    Fixes 10 UI issues in managed sessions (2 critical, 8 robustness), including stale error banners and Turn-boundary settle state bugs.  
    [PR link](https://github.com/QwenLM/qwen-code/pull/13342)

---

## 5. Hot Discussions
No GitHub Discussions data was provided in the source material — section omitted.

---

## 6. Feature Request Trends
1. **Kubernetes-native runtime delivery**: Strong demand for production-grade containerized tool execution, tracked under the platform-distribution roadmap.
2. **Managed agent feature expansion**: Requests for background shell/monitoring, approval previews, and better multi-session workspace handling dominate the managed agent roadmap.
3. **Model catalog flexibility**: Users want dynamic reasoning effort tiers and better support for variant model ID spellings across providers.
4. **Web Shell feature parity**: Requests for memory panel improvements (auto-memory browsing, locale support) to match desktop capabilities.
5. **Improved CI/CD reliability**: Multiple requests to reduce flaky tests and speed up PR review turnaround for community contributions.

---

## 7. Developer Pain Points
1. **Managed agent concurrency and deadlock bugs**: Multiple P1/P2 issues around lock convoys, gap-lock deadlocks, and session store outages causing hangs are the top source of production friction.
2. **CI flakiness**: Intermittent failures in Java SDK integration tests (especially MySQL lanes) waste developer time and delay PR merges.
3. **Local model compatibility gaps**: Missing context window detection, omitted zero-argument tool parameters, and hardcoded assumptions break workflows with local/Ollama deployments.
4. **Hook system regressions**: `PreToolUse` hook output being ignored breaks extension and MCP integrations that rely on runtime argument modification.
5. **Unclear error diagnosis**: Generic 409 error codes and missing diagnostic context make hosted session failures hard to debug without deep system knowledge.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*