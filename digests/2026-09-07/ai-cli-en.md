# AI CLI Tools Weekly Digest 2026-09-07

> Generated: 2026-09-07 01:53 UTC | Tools covered: 7

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

# AI CLI Developer Tools Ecosystem Cross-Tool Comparison Report
*Data period: 2026-09-01 to 2026-09-07*

---

## 1. Ecosystem Overview
The AI CLI tools ecosystem is in a phase of rapid capability expansion paired with platform hardening, as enterprise and power user adoption drives demand for production-grade reliability, governance, and cross-tool interoperability. Major vendors and open-source projects are concurrently rolling out next-generation model support (GPT-6 Astra, Claude Fable 5.1) while addressing foundational pain points around context management, permission systems, and cross-platform parity. MCP (Model Context Protocol) integration has emerged as a universal ecosystem priority, with nearly all tools investing in server management, authentication, and schema compatibility for custom tooling. Open-source alternatives are gaining traction by focusing on provider flexibility, performance optimization, and community-driven extensibility to differentiate from vendor-backed offerings.

---

## 2. Activity Comparison
| Tool | Reported Hot Issues | Key PRs Updated | Hot Discussions | Release Status |
|------|---------------------|-----------------|-----------------|----------------|
| Claude Code | 10 open (7 bugs, 2 feature requests, 1 workflow gap) | 10 merged | N/A (no discussion data provided) | 7 patch releases (v2.1.252 → v2.1.263); default model updated to Claude Fable 5.1 |
| OpenAI Codex | 10 open (7 bugs, 3 feature requests) | 10 merged (1 open) | 9 active (3 ideas, 3 Q&A, 3 show-and-tell) | 5 stable releases (v0.153.0–v0.153.4) + 3 alpha previews (v0.154.0) |
| Gemini CLI | 10 open (7 bugs, 2 feature requests, 1 epic) | 10 updated (7 merged, 3 open) | N/A (no discussion data provided) | 1 stable (v0.58.0), 1 preview (v0.59.0-preview.0), 3 nightly builds (v0.60.0 track) |
| GitHub Copilot CLI | 9 open (8 bugs, 1 feature request) + 1 closed | 2 open | N/A (no discussion data provided) | 7 patch releases (v1.0.83-0 → v1.0.84-1); GPT-6 Astra support added |
| OpenCode | 10 open (7 bugs, 3 feature requests) | 10 updated (1 merged, 9 open) | N/A (no discussion data provided) | 4 patch releases (v1.18.26 → v1.18.29); model compatibility focus |
| Pi | 6 open, 4 closed | 10 updated (5 merged, 5 open) | 7 active (2 ideas, 2 Q&A, 3 show-and-tell) | 2 minor releases (v0.85.0 → v0.85.1); GPT-6 Astra support added |
| Qwen Code | 9 open, 1 closed | 10 updated (all in progress) | N/A (no discussion data provided) | 1 stable (v0.23.0), 2 previews, 2 nightly builds, 2 component releases |

*Note: N/A for discussions indicates no public discussion data was provided for the period, not community inactivity.*

---

## 3. Shared Feature Directions
Cross-ecosystem requirements that appear in 3+ tool communities:
1. **MCP (Model Context Protocol) integration maturity**  
   *Tools: All 7* — Universal focus on MCP server management (Claude Code org-managed MCP), OAuth authentication reliability (Copilot CLI, Gemini CLI), schema compatibility translation (OpenCode Anthropic schema sanitization), and user verification handling (OpenAI Codex). MCP has become the de facto standard for extending AI CLI tool capabilities.

2. **Context and memory configurability**  
   *Tools: Claude Code, OpenAI Codex, Copilot CLI, Gemini CLI, Qwen Code* — Demand for configurable compaction thresholds (Claude Code MEMORY.md, Copilot CLI auto-compaction), prevention of data loss during compaction (Claude Code behavioral rule drops, OpenAI Codex goal resurrections), and structured on-demand memory recall (Gemini CLI, Qwen Code).

3. **Cost governance and quota controls**  
   *Tools: Claude Code, OpenAI Codex, Pi, OpenCode* — Repeated requests for token spend limits, multi-agent spawn caps (Claude Code), quota-aware task planning (OpenAI Codex), provider-reported cost tracking (Pi), and billing anomaly resolution (OpenCode Go subscription).

4. **Cross-platform parity and platform-specific bug fixes**  
   *Tools: All 7* — Windows-specific regressions are the most common cross-tool pain point (OpenAI Codex missing features, Copilot CLI WSL2 keybinding breaks, Gemini CLI stdout failures, Pi shell path issues). Linux and macOS-specific gaps also persist (Claude Code TUI copy-paste, OpenCode desktop freezes).

5. **Permission system hardening**  
   *Tools: Claude Code, OpenCode, Qwen Code, Gemini CLI* — Focus on fine-grained permission controls, security guardrails for destructive operations (Gemini CLI), hook reliability (OpenCode `permission.ask`), and consistent enforcement across session continuations (Qwen Code skill hooks).

---

## 4. Differentiation Analysis
| Tool | Core Focus | Target Users | Technical Approach |
|------|------------|--------------|--------------------|
| **Claude Code** | Enterprise security, multi-agent governance, and MCP org management | Enterprise teams, security-conscious organizations | Tightly integrated with Anthropic’s Claude model ecosystem; prioritizes policy enforcement and auditability over customizability |
| **OpenAI Codex** | First-party GPT-6 Astra rollout, Vim mode UX, and worktree management | OpenAI/ChatGPT Pro subscribers, Vim power users | Rust-based core with tight coupling to OpenAI’s model API; invests heavily in TUI workflow polish and native platform integration |
| **Gemini CLI** | Security hardening, sandbox runtime safety, and agent correctness | Google Cloud/Gemini enterprise users, security-focused teams | Node.js-based architecture with rigorous security review; prioritizes sandbox isolation and auth compliance over feature velocity |
| **GitHub Copilot CLI** | Enterprise policy enforcement, sandbox flexibility, and custom agent model fallback | GitHub enterprise customers, CI/CD pipeline users | Deeply integrated with GitHub’s ecosystem; focuses on enterprise admin controls and seamless Copilot platform consistency |
| **OpenCode** | Multi-provider flexibility, plugin extensibility, and desktop performance optimization | Open-source enthusiasts, multi-provider power users | Electron-based desktop app with community-driven development; differentiates via broad provider support and plugin UI extensibility |
| **Pi** | Provider resilience, cross-transport fallback, and TUI polish | Self-hosted users, multi-provider tinkerers | Lightweight coding-agent architecture; focuses on provider interoperability and graceful degradation during outages |
| **Qwen Code** | OpenTUI rendering migration, multi-agent mesh features, and Web Shell UX | Alibaba/Qwen ecosystem users, Chinese market enterprise teams | Full-stack (CLI + daemon + Web Shell) architecture; invests heavily in rendering performance and multi-agent collaboration features |

---

## 5. Community Momentum & Maturity
### Highest Community Activity
- **OpenAI Codex**: Largest discussion volume (9 active threads, including 118-upvote rewind feature request) and high issue engagement (63-comment Windows connectivity bug).
- **Pi**: Active open-source community with 7 discussion threads, a 76-comment Codex reliability issue, and community-contributed providers/extensions.
- **Claude Code**: Highest enterprise issue engagement (197-comment cyber-safeguard false positive bug) and rapid patch release velocity (7 releases in 7 days).

### Fastest Iteration
- **Claude Code**: 7 patch releases in 7 days, addressing enterprise MCP management, diff UX, and platform regressions.
- **GitHub Copilot CLI**: 7 incremental releases focused on GPT-6 Astra rollout and sandbox improvements, though public PR activity is low (most development occurs in private repos).
- **Qwen Code**: Active architectural migration (OpenTUI) with 10 in-progress PRs spanning CLI, daemon, and Web Shell surfaces.

### Maturity Assessment
- **Most Mature for Enterprise**: Claude Code and GitHub Copilot CLI — both have formal org policy controls, MCP management, and enterprise support channels, though Claude Code faces higher enterprise friction from cyber-safeguard false positives.
- **Most Mature for Open-Source Extensibility**: Pi and OpenCode — both have active community contributor bases, broad provider support, and extension ecosystems.
- **Early-Stage High Growth**: Qwen Code — undergoing major architectural migrations (OpenTUI, mesh features) with rapid feature expansion but higher CI reliability and security gap pain points.

---

## 6. Trend Signals
1. **MCP is becoming the universal extension layer** — Every major AI CLI tool now prioritizes MCP support, indicating the protocol has won as the standard for AI agent tooling. Developers building custom agent tooling should prioritize MCP compatibility to maximize reach across the ecosystem.
2. **Cost governance is the top unmet enterprise need** — Runaway multi-agent token spend, lack of spend caps, and unpredictable quotas are top pain points across vendor and open-source tools, representing a clear gap for tooling that provides cross-platform cost monitoring and guardrails.
3. **Context management remains a fundamental reliability bottleneck** — Compaction data loss, context window overflow, and state inconsistencies across sessions are universal issues, signaling that current context management architectures are not yet production-grade for long-running agent workflows.
4. **Windows is the largest platform parity gap** — Every tool reports a disproportionate number of Windows-specific bugs, indicating the ecosystem has prioritized macOS/Linux developer experience and is now playing catch-up for Windows enterprise users.
5. **Open-source tools are differentiating on provider flexibility** — As vendor-backed tools prioritize first-party model integration, open-source alternatives (Pi, OpenCode) are gaining traction by supporting multi-provider fallback, self-hosted model compatibility, and avoid vendor lock-in.
6. **Security and privacy scrutiny is rising** — Unredacted telemetry (Qwen Code), secret leakage in memory systems (Gemini CLI), and permission hook bypasses (OpenCode, Qwen Code) are increasingly high-priority issues, reflecting growing user concern about data safety in AI coding tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-07 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
Ranked by community discussion volume and issue/PR cross-reference activity (PR comment count fields are unpopulated in source data; ranking uses issue linkage, update frequency, and associated issue comment volume as proxy signals):

### #1 skill-creator Evaluation Framework Fixes (PR #1298)
- **Functionality**: Core fix for the skill-creator toolchain — resolves the universal 0% recall bug in `run_eval.py` by installing eval artifacts as real skills, plus fixes for Windows stream reading, trigger detection logic, and parallel worker behavior.
- **Discussion Highlights**: Directly addresses the widely reported #556 issue (12 comments, 7 👍) with 10+ independent reproductions; the broken eval pipeline has made skill description optimization loops operate on noise.
- **Status**: Open | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 document-typography Skill (PR #514)
- **Functionality**: Quality control skill for AI-generated documents that prevents common typographic flaws: orphan word wrap, widow section headers at page bottoms, and numbering misalignment.
- **Discussion Highlights**: Framed as a universal quality upgrade for all Claude document output, addressing issues users rarely explicitly request but consistently notice.
- **Status**: Open | [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 scnet-hpc Skill (PR #1615)
- **Functionality**: High-performance computing cluster management skill with profile-based SSH access and Slurm workflow automation, including job generation, cluster discovery, and compute resource guidance.
- **Discussion Highlights**: Fills a gap in enterprise HPC workflow support, targeting research and computational science use cases.
- **Status**: Open | [PR #1615](https://github.com/anthropics/skills/pull/1615)

### #4 ODT Document Skill (PR #486)
- **Functionality**: OpenDocument Format support skill covering ODT/ODS file creation, template filling, parsing, and conversion to HTML; triggers on mentions of LibreOffice, OpenDocument, or ISO standard document requests.
- **Discussion Highlights**: Addresses demand for open-source document format parity with existing DOCX/PDF skills.
- **Status**: Open | [PR #486](https://github.com/anthropics/skills/pull/486)

### #5 ServiceNow Platform Skill (PR #568)
- **Functionality**: Broad enterprise platform skill covering ServiceNow ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, CSDM, and IntegrationHub workflows.
- **Discussion Highlights**: Longest-lived active enterprise skill PR (updated over 5 months), indicating sustained community interest in IT operations use cases.
- **Status**: Open | [PR #568](https://github.com/anthropics/skills/pull/568)

### #6 Hivemind Multi-Agent Orchestration Skill (PR #1628)
- **Functionality**: Cost-optimization skill that delegates mechanical work to free-model headless workers while retaining Claude Code as the planner, reviewer, and merger to preserve high-value context window usage.
- **Discussion Highlights**: Aligns with growing demand for multi-agent architecture patterns and cost efficiency in agent workflows.
- **Status**: Open | [PR #1628](https://github.com/anthropics/skills/pull/1628)

### #7 self-audit Quality Gate Skill (PR #1367)
- **Functionality**: Universal output audit skill with mechanical file verification first, followed by four-dimension reasoning quality checks ordered by damage severity; works across all tech stacks and models.
- **Discussion Highlights**: Ties to active community proposals for reasoning quality gate pipelines (Issue #1385).
- **Status**: Open | [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends
Distilled from top-voted and most-discussed open issues:

1. **Trust & Security Governance**
   - Top-priority issue (#492, 43 comments): Community skills distributed under the `anthropic/` namespace create trust boundary abuse risks, with users potentially granting elevated permissions to unofficial skills.
   - Proposed direction: Clear official/community skill labeling, namespace separation, and security audit tooling (e.g. the pending `skill-security-analyzer` skill in PR #83).

2. **Enterprise Collaboration & Sharing**
   - High-demand feature (#228, 16 comments, 8 👍): Org-wide skill sharing functionality to replace manual file transfer workflows, with shared skill libraries or direct sharing links for teams.
   - Related pain point (#189, 6 comments, 9 👍): Duplicate skills from overlapping plugin packages waste context window space.

3. **Skill Development Toolchain Reliability**
   - Widespread reported bug (#556, 12 comments, 7 👍): Broken evaluation pipeline with 0% trigger rates across all test queries, undermining skill iteration workflows.
   - Secondary pain point: Multiple Windows compatibility bugs in skill-creator scripts (PR #1099, #1050) limiting cross-platform skill development.

4. **Agent Output Quality Assurance**
   - Active proposal (#1385): Multi-stage reasoning quality gate pipelines (pre-task calibration → adversarial review → delivery verification) to reduce hallucinations and output errors.
   - Alignment with self-audit and quality analyzer skills under development.

5. **Context Window Efficiency**
   - Critical bug report (#1487): The `claude-api` skill injects ~156k tokens eagerly, exhausting context windows in a single tool call.
   - Related optimization direction: Compact memory skills using symbolic notation to reduce persistent state token overhead (Issue #1329).

---

## 3. High-Potential Pending Skills
Active PRs with clear use cases, defined scope, and recent updates that are likely candidates for near-term merge:

| Skill | PR Link | Value Proposition |
|-------|---------|-------------------|
| Buffer API Agent Skill | [#1627](https://github.com/anthropics/skills/pull/1627) | Cross-agent social media scheduling via Buffer GraphQL API; works with Claude, Cursor, Codex, and other agent platforms |
| testing-patterns Skill | [#723](https://github.com/anthropics/skills/pull/723) | Full testing stack coverage from philosophy (Testing Trophy) to React component testing best practices |
| skill-quality-analyzer + skill-security-analyzer | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating skill structure, documentation, security, and quality scoring |
| frontend-design Skill Improvement | [#210](https://github.com/anthropics/skills/pull/210) | Rewritten frontend-design skill with actionable, Claude-executable instructions for better UI output |
| Orphaned DOCX Comment Detection | [#1734](https://github.com/anthropics/skills/pull/1734) | Document integrity skill to detect unlinked comment artifacts in DOCX files (newest PR, opened 2026-09-06) |
| UIZZE UI Quality Partner Skill | [#1595](https://github.com/anthropics/skills/pull/1595) | Anti-UI-slop skill with optional MCP access to 800,000+ real product screen references |

---

## 4. Skills Ecosystem Insight
The community’s most concentrated demand at the Skills level is **trustworthy, efficient, and quality-assured agent workflows** — spanning security and namespace clarity for skill distribution, reliable tooling to build and validate skills, context-efficient execution, and built-in quality gates to ensure output correctness.

---

# Claude Code Community Digest — September 7, 2026

## 1. Last 7 Days' Highlights
Claude Code shipped 7 patch releases (v2.1.252 → v2.1.263) headlined by Claude Fable 5.1 as the new default model, a fullscreen diff panel for uncommitted changes, and MCP server management for organizations. On the community side, cyber-safeguard false positives and runaway multi-agent token spend dominated discussion, while a flurry of plugin and security fixes landed in PRs.

---

## 2. Releases
| Version | Highlights |
|---|---|
| [v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263) | Bug fixes and reliability improvements |
| [v2.1.261](https://github.com/anthropics/claude-code/releases/tag/v2.1.261) | Organization policy load reason added to `/status` and `claude doctor`; `bashOutputMaxChars` / `taskOutputMaxChars` settings introduced |
| [v2.1.260](https://github.com/anthropics/claude-code/releases/tag/v2.1.260) | Fullscreen diff panel (toggle with `/diff`) showing uncommitted edits; prompt-cache miss root causes added to `/cost` |
| [v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259) | `managedMcpServers` org setting for HTTP/SSE MCP rollout; `--permission-prompts none` flag for headless unattended use |
| [v2.1.258](https://github.com/anthropics/claude-code/releases/tag/v2.1.258) | Fixed macOS 12 (Monterey) launch regression; fixed remote/scheduled session failures after re-sent permission approvals |
| [v2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257) | **Claude Fable 5.1** becomes default Fable model (1M context, $10/$50 per Mtok, $0.25/Mtok cache reads); `timeFormat` and `timeZone` settings added |
| [v2.1.252](https://github.com/anthropics/claude-code/releases/tag/v2.1.252) | Fixed "task output swap refused" on macOS; fixed "always allow" not saving without `.claude/settings.local.json`; fixed Remote Control session stalls |

---

## 3. Hot Issues
1. **[#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP-approved orgs still hit cyber-safeguard blocks**  
   197 comments / 27 👍. Previously approved organizations are re-triggering blocks while the portal shows "Under review." Top-discussed issue of the week — directly impacts enterprise workflows.

2. **[#26224](https://github.com/anthropics/claude-code/issues/26224) — Claude Code hangs/freezes for 5–20+ minutes**  
   130 comments / 151 👍. Long-running TUI freezes with no error output. Most-upvoted bug; remains open since February.

3. **[#62699](https://github.com/anthropics/claude-code/issues/62699) — Can't copy text from TUI output on Linux**  
   42 comments / 68 👍. `Ctrl+Shift+C` and right-click copy fail in the terminal UI. High-demand UX fix for Linux users.

4. **[#91188](https://github.com/anthropics/claude-code/issues/91188) — Configurable MEMORY.md compaction threshold**  
   28 comments. Users want control over when auto-memory triggers compaction instead of the hardcoded limit. Leading memory-related feature request.

5. **[#89467](https://github.com/anthropics/claude-code/issues/89467) — Windows desktop app is always-on-top**  
   16 comments / 14 👍. No toggle to disable the forced topmost window state. Friction point for Windows desktop users.

6. **[#80015](https://github.com/anthropics/claude-code/issues/80015) — Task-list tools (TaskCreate/Update/List/Get) no longer exposed to model**  
   14 comments / 13 👍. Tasks remain visible in UI but the model can't invoke task tools after an update. Breaks agent-driven task workflows.

7. **[#67500](https://github.com/anthropics/claude-code/issues/67500) — Context compaction drops critical behavioral rules**  
   12 comments. Session status blocks, memory writes, and no-stop policies are lost after compaction on macOS. Reliability concern for long sessions.

8. **[#74662](https://github.com/anthropics/claude-code/issues/74662) — Multi-account support: open local sessions from another account**  
   7 comments / 5 👍. Users with personal + work accounts lose access to sessions when switching. Top multi-account enhancement request.

9. **[#77943](https://github.com/anthropics/claude-code/issues/77943) — `code-review` workflow burns 1.1M+ tokens and returns empty**  
   5 comments. Disproportionate token consumption with null results on small file sets. Raises cost/quality concerns for workflow users.

10. **[#92580](https://github.com/anthropics/claude-code/issues/92580) — Workflow AI solution review process undefined**  
    Newly filed. Reports missing/undefined review behavior in workflow AI. Early signal of workflow documentation gaps.

---

## 4. Key PR Progress
1. **[#87079](https://github.com/anthropics/claude-code/pull/87079) — `**` glob patterns now match zero-depth paths**  
   Fixes security-patterns rules silently excluding top-level files because `**/*.ts` required a literal `/`. Security-correctness fix.

2. **[#87077](https://github.com/anthropics/claude-code/pull/87077) — Fix invalid YAML frontmatter in pr-review-toolkit agents**  
   Agent descriptions with unquoted `key: value` lines parsed as nested mappings, causing empty frontmatter loads.

3. **[#68707](https://github.com/anthropics/claude-code/pull/68707) — `/bug` command to file GitHub issues from the terminal**  
   New `bug-reporter` plugin for in-session issue filing against `anthropics/claude-code`.

4. **[#68689](https://github.com/anthropics/claude-code/pull/68689) — Block symlink escape in security-guidance config reads**  
   Prevents malicious repos from using symlinked `claude-security-guidance.md` to read local files like `~/.ssh/id_rsa`. Security fix.

5. **[#68786](https://github.com/anthropics/claude-code/pull/68786) — Avoid shell injection in test-hook.sh via stdin redirection**  
   Removes `$TEST_INPUT` interpolation inside a `bash -c` string, closing a shell-injection vector in plugin dev tooling.

6. **[#68785](https://github.com/anthropics/claude-code/pull/68785) — Plugin hook examples: JSON to stdout, tighter globs, CI/JSON fixes**  
   Corrects three example hook scripts that served as reference implementations.

7. **[#68699](https://github.com/anthropics/claude-code/pull/68699) — Hookify: Python wrapper + Windows path normalization**  
   Fixes backslash paths and Microsoft Store `python3` stub issues for hookify on Windows.

8. **[#68693](https://github.com/anthropics/claude-code/pull/68693) — Duplicate label adds additively instead of replacing all labels**  
   Prevents triage automation from erasing existing area/platform labels when marking duplicates.

9. **[#68701](https://github.com/anthropics/claude-code/pull/68701) — Strip CRLF from Python version probe on Windows**  
   Fixes `\r\n`-related version comparison failures in security-guidance on Windows.

10. **[#68702](https://github.com/anthropics/claude-code/pull/68702) — Guard `PROMPT_PARTS` expansion against `set -u` on macOS bash 3.x**  
    Fixes ralph-wiggum plugin setup failures on default macOS bash.

---

## 5. Hot Discussions
No discussion data provided — section omitted.

---

## 6. Feature Request Trends
- **Cost & agent governance**: Repeated demand for token/spend limits, agent-spawn caps, and cost-efficient model selection for multi-agent fan-out ([#90664](https://github.com/anthropics/claude-code/issues/90664), [#77964](https://github.com/anthropics/claude-code/issues/77964), [#89596](https://github.com/anthropics/claude-code/issues/89596)).
- **Memory configurability**: Configurable MEMORY.md compaction thresholds and better control over auto-memory behavior ([#91188](https://github.com/anthropics/claude-code/issues/91188)).
- **Multi-account & session management**: Support for switching between personal/work accounts while retaining local session access ([#74662](https://github.com/anthropics/claude-code/issues/74662)).
- **Secrets management**: A sanctioned, secure way to pass secrets to Claude without exposing them in context or logs ([#90301](https://github.com/anthropics/claude-code/issues/90301)).
- **UI/UX polish**: Copy-from-TUI on Linux, always-on-top toggle on Windows, and Cowork chat sorting by last activity ([#62699](https://github.com/anthropics/claude-code/issues/62699), [#89467](https://github.com/anthropics/claude-code/issues/89467), [#87723](https://github.com/anthropics/claude-code/issues/87723)).

---

## 7. Developer Pain Points
- **Cyber-safeguard false positives**: Even CVP-approved organizations are hitting blocks, disrupting legitimate security work and code analysis ([#84352](https://github.com/anthropics/claude-code/issues/84352), [#92565](https://github.com/anthropics/claude-code/issues/92565)).
- **Runaway multi-agent costs**: Multiple reports of unbounded agent spawning, self-validation loops, and retry loops burning through quotas with no guardrails ([#77964](https://github.com/anthropics/claude-code/issues/77964), [#87178](https://github.com/anthropics/claude-code/issues/87178), [#91682](https://github.com/anthropics/claude-code/issues/91682), [#89964](https://github.com/anthropics/claude-code/issues/89964)).
- **TUI freezes & hangs**: Persistent 5–20 minute stalls with no diagnostic output remain the highest-upvoted open bug ([#26224](https://github.com/anthropics/claude-code/issues/26224)).
- **Context compaction data loss**: Compaction silently drops behavioral rules, task tools, and memory writes, breaking long-running session reliability ([#67500](https://github.com/anthropics/claude-code/issues/67500), [#80015](https://github.com/anthropics/claude-code/issues/80015)).
- **Platform-specific regressions**: Windows console flashes, macOS launch failures, Linux copy-paste, and WSL memory-detection bugs create a fragmented experience ([#70200](https://github.com/anthropics/claude-code/issues/70200), [#89467](https://github.com/anthropics/claude-code/issues/89467), [#62699](https://github.com/anthropics/claude-code/issues/62699), [#92448](https://github.com/anthropics/claude-code/issues/92448)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-09-07
---
## 1. Last 7 Days' Highlights
The Codex Rust core shipped 5 stable releases (v0.153.0–v0.153.4) focused on GPT-6-Astra rollout (Bedrock integration, visibility fixes, API configuration support) and Vim mode undo/redo, alongside 3 v0.154.0 alpha previews. Windows platform bugs dominated community issues, with 63-comment threads on missing connectivity settings and widespread reports of model capacity errors disrupting Pro workflows. The ecosystem also saw active work on MCP tooling, TUI worktree management, and voice host audio pipelines in merged PRs.

---
## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [rust-v0.153.4](https://github.com/openai/codex/compare/rust-v0.153.3...rust-v0.153.4) | Stable (bug fix) | Fixed GPT-6-Astra visibility in the bundled model picker (now default when no model is explicitly set, #42874); updated Astra guidance to use asynchronous questions only when the tool is available in the session (#42878) |
| [rust-v0.153.3](https://github.com/openai/codex/releases/tag/rust-v0.153.3) | Stable (feature + fix) | Added GPT-6-Astra to the Amazon Bedrock model picker for Mantle and Runtime global/US routes (#42805); corrected Astra’s asynchronous clarification question guidance to use supported tools and recognize text-only input (#42809) |
| [rust-v0.153.2](https://github.com/openai/codex/compare/rust-v0.153.1...rust-v0.153.2) | Stable (bug fix) | Corrected GPT-6-Astra Fast tier display text to “2x speed, increased usage” (no functional change, #42632) |
| [rust-v0.153.1](https://github.com/openai/codex/compare/rust-v0.153.0...rust-v0.153.1) | Stable (feature) | Added support for configuring GPT-6-Astra via API without changing the default model or showing it in the model picker (#42605) |
| [rust-v0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0) | Stable (feature) | Vim mode now supports `u` undo and `Ctrl+R` redo, preserving full drafts including pasted content and attachments (#41941, #42140); plugin CLI gained list/install/remove capabilities |
| rust-v0.154.0-alpha.1/2/3 | Preview | Pre-release builds for the next minor version (full changelogs pending) |

---
## 3. Hot Issues
1. **[#28919](https://github.com/openai/codex/issues/28919) [Windows] Missing “control other devices” tab in Settings > Connections**  
   *63 comments, 59 👍* — The highest-traffic issue of the week: Windows Pro users cannot access remote device controls, breaking cross-machine Codex workflows. The bug has persisted since June 2026 with no official fix, prompting widespread user frustration.

2. **[#41790](https://github.com/openai/codex/issues/41790) Repeated “Selected model is at capacity” errors interrupting Codex tasks**  
   *16 comments, 9 👍* — ChatGPT Pro users report frequent capacity errors during normal agent tasks starting August 31, even with low usage. A duplicate issue ([#43322](https://github.com/openai/codex/issues/43322)) was filed the same day as this digest, indicating the problem is ongoing and widespread.

3. **[#29811](https://github.com/openai/codex/issues/29811) Goal compaction resurrects completed manual steer before goal continuation**  
   *14 comments, 8 👍* — A critical context management bug on macOS: long-running `/goal` tasks re-execute completed manual steering instructions after compaction, wasting quota and producing incorrect results for Pro 20x users.

4. **[#40596](https://github.com/openai/codex/issues/40596) [Windows] Unified exec fails with `helper_unknown_error: setup refresh had errors`**  
   *13 comments* — Windows Plus users cannot launch the unified execution sandbox, breaking core agent tool-call functionality. The error has been reproducible since late August with no workaround.

5. **[#8317](https://github.com/openai/codex/issues/8317) Add time-based scheduling for commands/tasks**  
   *7 comments, 38 👍* — A top-voted enhancement request for the Codex CLI: native support for delayed tasks, interval runs, and conditional polling (e.g., “check logs every 10 minutes”). Users currently rely on external cron jobs or manual re-runs.

6. **[#40228](https://github.com/openai/codex/issues/40228) [Windows] Chrome native host out of date; plugin uninstall and feedback upload fail**  
   *10 comments* — Chrome browser control is read-only on Windows, with click/type/navigation operations failing due to a native host version mismatch. Reinstalling the extension does not resolve the issue.

7. **[#42182](https://github.com/openai/codex/issues/42182) Proactive quota-aware task planning to avoid mid-task interruption**  
   *6 comments* — A highly requested enhancement: Codex should factor remaining 5-hour/weekly usage quotas into task planning, splitting long-running work across quota resets instead of failing mid-execution.

8. **[#32927](https://github.com/openai/codex/issues/32927) [macOS] Worktree mode selector missing from new-task composer**  
   *6 comments, 4 👍* — A regression in the macOS app: the environment selector (Local/Worktree) no longer appears when creating new tasks for Git repos, forcing tasks to run in the local checkout by default.

9. **[#42714](https://github.com/openai/codex/issues/42714) [Windows] Codex desktop launches processes but shows no window after update**  
   *3 comments* — A critical post-update bug in v26.901.2854.0: background ChatGPT.exe processes run but no renderer or UI window appears, making the app unusable.

10. **[#43237](https://github.com/openai/codex/issues/43237) GPT-6 Astra rejects `hi` with `invalid_prompt` on CLI**  
    *2 comments* — A surprising regression in v0.153.4: GPT-6 Astra rejects minimal prompts like “hi” with an invalid_prompt error, reproducible across Linux and macOS. The bug raises questions about Astra’s prompt validation logic.

---
## 4. Key PR Progress
All PRs listed below were merged in the last 7 days unless noted otherwise.
1. **[#43308](https://github.com/openai/codex/pull/43308) Replace Windows app-server shutdown files with socket requests**  
   Routes Windows app-server shutdown through the local `/daemon/shutdown` socket endpoint (requiring PID validation) instead of file-based triggers, improving reliability and security.

2. **[#43286](https://github.com/openai/codex/pull/43286) Add a managed worktree browser to the TUI**  
   Adds a searchable “Browse worktrees” option to the `/worktree` command for local repos, letting users list worktree checkouts, view owner metadata, and resume threads or copy working directories.

3. **[#43289](https://github.com/openai/codex/pull/43289) Add capability-gated MCP user-verification handling**  
   Implements MCP `openai/userVerification` request handling via `openai/elicitation/create` for clients that support the feature, with field validation and size limits.

4. **[#43279](https://github.com/openai/codex/pull/43279) Include linked worktrees in TUI session discovery**  
   Fixes directory-scoped session lookup to include conversations in linked worktrees of the same repository, and moves managed worktree creation off the TUI event loop to reduce lag.

5. **[#43253](https://github.com/openai/codex/pull/43253) Show read-only conversations when resume encounters an active writer**  
   Instead of failing with an active-writer error when resuming a conversation open in another app, users can now view the transcript in read-only mode and retry later.

6. **[#43248](https://github.com/openai/codex/pull/43248) Connect voice-host RTP audio to speaker playback**  
   Fixes the voice host to actually play incoming RTP audio via a GStreamer pipeline with jitter buffering, decoding, and speaker output (previously packets were drained silently).

7. **[#31471](https://github.com/openai/codex/pull/31471) (1/4) Extract apps cache logic into ConnectorRuntimeManager**  
   *Open* — First in a series of PRs for the “faster connectors” initiative: refactors the Codex Apps tools cache into a dedicated manager scoped by account/user/workspace, with stale context cleanup.

8. **[#43304](https://github.com/openai/codex/pull/43304) Isolate Bazel build commit metadata from Rust compilation inputs**  
   Improves remote cache reuse for Bazel builds by separating build identity (user, host, timestamp) from Rust compilation inputs, so identical commits built by different developers share cache hits.

9. **[#43265](https://github.com/openai/codex/pull/43265) Add experimental user verification API contracts**  
   Defines experimental API endpoints (`userVerification/status`, `enroll`, `delete`, `verify`) behind the `experimentalApi` capability, including request/response schemas and error types.

10. **[#43325](https://github.com/openai/codex/pull/43325) Sort JSON schema object keys for consistent Cargo and Bazel output**  
    Ensures app-server protocol JSON schemas are identical across Cargo and Bazel builds by recursively sorting object keys (preserving array order), eliminating build output drift.

---
## 5. Hot Discussions
### Ideas
1. **[#9618](https://github.com/openai/codex/discussions/9618) How is there not a /rewind or /revert feature?**  
   *20 comments, 118 👍* — The week’s top-voted idea: users demand native undo/rewind for Codex edits, noting competitors like OpenCode and Claude Code already support this. Without it, users must manually commit after every change to avoid losing work.

2. **[#14067](https://github.com/openai/codex/discussions/14067) Feature Request: Synchronization of Codex Threads and Session Context Across Devices**  
   *10 comments, 61 👍* — A highly requested feature for multi-machine workflows: sync Codex threads and context between work/personal devices, instead of tying sessions to local storage.

3. **[#7366](https://github.com/openai/codex/discussions/7366) Reference files that are gitignored**  
   *2 comments, 7 👍* — Users want to reference `.gitignore`d files with `@` mentions, since gitignore rules are for version control, not for Codex context (common use case: referencing local library dependencies).

### Q&A
1. **[#3024](https://github.com/openai/codex/discussions/3024) Shift + Enter Executes Command Instead of Creating a Newline in Integrated Terminal**  
   *54 comments, 116 👍* — A long-standing keybinding conflict in IntelliJ’s integrated terminal: Shift+Enter runs the command instead of inserting a newline for multi-line input, breaking user expectations.

2. **[#43257](https://github.com/openai/codex/discussions/43257) How does experimental context management count history lookups against Codex usage limits?**  
   *2 👍* — A timely question as GPT-6 Astra and experimental context roll out: users want clarity on whether history retrieval operations count toward their 5-hour/weekly quotas.

3. **[#12668](https://github.com/openai/codex/discussions/12668) What's pulled into context when a new session starts?**  
   *4 comments, 1 👍* — Users want full visibility into which files (beyond `AGENTS.md`) are auto-loaded into context at session start, and how to control the prefilled context.

### Show and tell
1. **[#16329](https://github.com/openai/codex/discussions/16329) Awesome Codex CLI — curated list of 150+ ecosystem tools**  
   *5 comments, 1 👍* — A community-curated index of 150+ Codex CLI tools: subagents, skills, plugins, MCP servers, and more, solving the problem of scattered ecosystem resources.

2. **[#41157](https://github.com/openai/codex/discussions/41157) CodexFuse 1.2.0 — local Windows dashboard for Codex rate limits**  
   *2 comments, 1 👍* — An independent Windows utility that tracks used/available rate limits, next reset time, and hourly usage, with no API key required.

3. **[#42041](https://github.com/openai/codex/discussions/42041) agent-watch — telling DONE, FAILED and STALL apart when you run codex exec in the background**  
   *2 comments, 1 👍* — A tool for background `codex exec` workflows that distinguishes between completed, failed, and stuck (waiting for approval) worker processes, solving a major pain point for parallel task orchestration.

4. **[#42517](https://github.com/openai/codex/discussions/42517) Signal Monitor — tiny native macOS status strip for Codex tasks**  
   *2 👍* — A lightweight macOS menu bar app that keeps selected Codex tasks in a compact floating strip, so users can see which tasks need attention without opening the full sidebar.

---
## 6. Feature Request Trends
1. **Session/context portability** — Cross-device thread sync (#14067), shared team sessions (#25580), and thread handoff between accounts (#22356) are consistent top requests as more users work across multiple machines or collaborate on Codex tasks.
2. **Task lifecycle & undo** — Native rewind/revert for edits (#9618), time-based task scheduling (#8317), and quota-aware proactive planning (#42182) dominate workflow improvement requests, as users move from ad-hoc use to long-running, production-grade Codex workflows.
3. **UX & navigation improvements** — In-conversation user prompt jump shortcuts (#37693, #28073), better Chrome plugin UX, and clearer context visibility (#12668) reflect growing user demand for polish as sessions get longer and more complex.
4. **Expanded platform parity** — Official Computer Use support for Linux desktop apps (#42846) and consistent Windows feature parity with macOS are recurring asks as the user base diversifies.

---
## 7. Developer Pain Points
1. **Windows platform instability** — 11 of the top 30 issues are Windows-specific, spanning missing features (#28919), broken sandbox execution (#40596), Chrome integration failures (#40228, #40357, #42520), session loss (#41874), and post-update UI crashes (#42714). Windows users face a disproportionately broken experience compared to macOS.
2. **Unpredictable capacity & quota errors** — Widespread “model at capacity” errors (#41790, #43322), unclear quota counting (#42983, #43257), and the return of the 5-hour limit (#40707) are the top source of frustration for Pro users, who report frequent mid-task interruptions.
3. **GPT-6-Astra rollout inconsistencies** — Users report confusion about Astra availability (#42503), unexpected invalid_prompt errors for simple inputs (#43237), and usage misattribution across models (#13854) as the model rolls out to different surfaces.
4. **Context management bugs** — Goal compaction resurrecting completed steps (#29811), AGENTS.md reloads overflowing context windows (#43295), and orphaned child processes after exit (#15379) create reliability issues for long-running agent tasks.
5. **Fragmented plugin/MCP UX** — Chrome plugin installation/upgrade failures on Windows, missing in-app MCP reload (#41717), and no CLI flag for MCP headers (#30870) create friction for users extending Codex with custom tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-09-07
---

## 1. Last 7 Days' Highlights
This week, the Gemini CLI project advanced the v0.60.0 nightly release track with security hardening across extensions, workspace safety, and OAuth flows, while also shipping the v0.59.0-preview.0 milestone. Community-reported issues focused heavily on authentication reliability, agent execution bugs (subagent status reporting, shell hangs, browser agent compatibility), and Auto Memory system edge cases. The repository also merged a wave of core stability fixes for symlink handling, line-ending normalization, and MCP tool name collisions, plus a critical sandbox runtime upgrade from end-of-life Node 20 to Node 22.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.60.0-nightly.20260907.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260907.g85aca163f) | Nightly | Automated version bump; incremental rollup of prior nightly fixes. |
| [v0.60.0-nightly.20260905.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f) | Nightly | <ul><li>**Extension security**: Adds consent prompts for environment variable changes and sanitizes runtime-altering env vars ([#28863](https://github.com/google-gemini/gemini-cli/pull/28863))</li><li>**Workspace safety**: Enhanced path boundary checks and symlink resolution in command safety logic</li></ul> |
| [v0.60.0-nightly.20260904.g87a9c71d5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260904.g87a9c71d5) | Nightly | <ul><li>Enforces RFC 9207 issuer identification in the MCP OAuth flow for stricter auth security ([#29117](https://github.com/google-gemini/gemini-cli/pull/29117))</li></ul> |
| [v0.59.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0) | Preview | Milestone release rolling up v0.58.0 → v0.59.0 changes including core symlink evaluation fixes and refactoring. |
| [v0.59.0-nightly.20260902.g4963a4456](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260902.g4963a4456) | Nightly | Improved destination validation and connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120)); first contribution from @diegogodinezr. |
| [v0.58.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0) | Stable | Stable release with consistent symlink evaluation in ignore path handling ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)) and core refactoring. |

---

## 3. Hot Issues
1. **[#19936 Stuck in loop of verification](https://github.com/google-gemini/gemini-cli/issues/19936)** (Open, P2, 19 comments, 5 👍)  
   Top-discussed bug: Pro account authentication succeeds in the browser but the CLI remains stuck in a verification loop. High user impact for paid subscribers; open since Feb 2026 and still active.
2. **[#22323 Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (Open, P1, 13 comments, 2 👍)  
   Critical agent correctness bug: the `codebase_investigator` subagent returns `success`/`GOAL` status even when it hits the maximum turn limit without completing analysis, silently hiding failures.
3. **[#28088 OAuth reports licensed org account as unauthorized](https://github.com/google-gemini/gemini-cli/issues/28088)** (Closed, P2, 12 comments, 5 👍)  
   Enterprise auth regression: company-managed Gemini Code Assist Standard accounts were suddenly signed out and flagged as unauthorized. Closed this week after triage, but signals enterprise auth fragility.
4. **[#27466 -p/--print mode outputs nothing to stdout on Windows](https://github.com/google-gemini/gemini-cli/issues/27466)** (Closed, P2, 7 comments)  
   Headless mode bug on Windows: API calls succeed but no output is printed to stdout, breaking non-interactive/CI workflows. Closed this week as stale.
5. **[#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (Open, P2, 7 comments, 1 👍)  
   Major feature epic tracking whether AST-aware tools can reduce token noise, lower turn counts, and improve codebase navigation. Drives long-term agent capability improvements.
6. **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (Open, P2, 6 comments)  
   Common user pain point: the agent fails to invoke custom skills/sub-agents autonomously, even for highly relevant tasks (e.g., gradle/git skills), requiring explicit user instruction.
7. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (Open, P2, 5 comments)  
   Security concern: Auto Memory sends transcript content to the extraction model *before* secret redaction, and logs existing skill content. Risks leaking sensitive data to model context.
8. **[#25166 Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (Open, P1, 4 comments, 3 👍)  
   High-impact core bug: the CLI hangs showing "Awaiting user input" even after simple shell commands finish, breaking workflow automation.
9. **[#28203 isAuthenticationError falsely matches non-auth messages containing '401'](https://github.com/google-gemini/gemini-cli/issues/28203)** (Open, P2, 3 comments, 1 👍)  
   False-positive auth error detection: any error message containing "401" (e.g., port numbers, line numbers) is misclassified as an auth failure, causing misleading error handling.
10. **[#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (Open, P2, 3 comments, 1 👍)  
    Safety feature request: the agent should avoid or warn against destructive operations (e.g., `git reset --force`, bulk DB modifications) when safer alternatives exist.

---

## 4. Key PR Progress
1. **[#28973 fix(sandbox): bump sandbox image from node:20-slim to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28973)** (Closed, P1, Security)  
   Critical security upgrade: migrates the sandbox runtime from end-of-life Node 20 (EOL 2026-04-30) to Node 22 to retain security patch support.
2. **[#29184 fix(core): validate git args in Windows sandbox to block silent `git diff --output`](https://github.com/google-gemini/gemini-cli/pull/29184)** (Open, P1, Security)  
   Windows sandbox vulnerability fix: `git diff --output=<path>` was treated as read-only and ran without confirmation, allowing arbitrary file truncation. Adds argument validation to block destructive flags.
3. **[#28975 fix(core): keep glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975)** (Closed, P2, Core)  
   Fixes broken glob matching for workspaces accessed via symlinks (default behavior on macOS `/tmp` → `/private/tmp`), which caused "No files found" errors for valid patterns.
4. **[#28971 fix(core): keep truncated MCP tool names unique](https://github.com/google-gemini/gemini-cli/pull/28971)** (Closed, P2, Core)  
   Fixes MCP tool name collisions: long qualified tool names truncated to the first/last 30 characters could collide, causing registry conflicts. Adds uniqueness guards.
5. **[#29134 fix(cli): protect current session from deletion](https://github.com/google-gemini/gemini-cli/pull/29134)** (Open, P2, CLI)  
   Prevents accidental deletion of the active session via `--delete-session` by passing the active session ID and matching only exact short-ID suffixes, with added regression tests.
6. **[#28972 fix(core): guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28972)** (Closed, P1, Core)  
   Fixes corrupt output from `formatTruncatedToolOutput()` when given zero/negative `maxChars`, which caused negative slice offsets and invalid truncation.
7. **[#28982 Add Build Remote Agent phone pairing (gbr/1)](https://github.com/google-gemini/gemini-cli/pull/28982)** (Closed, Feature)  
   Adds an example extension for pairing a phone running Build Remote Agent to spectate desktop Gemini CLI sessions, using the existing `gbr/1` protocol.
8. **[#28978 docs(hooks): document missing HookDecision values (ask, approve)](https://github.com/google-gemini/gemini-cli/pull/28978)** (Closed, Docs)  
   Fills a documentation gap: updates the hooks specification to document all supported `HookDecision` values (previously only `allow`/`deny` were listed).
9. **[#29106 fix(core): flush final SSE event on EOF without trailing blank line](https://github.com/google-gemini/gemini-cli/pull/29106)** (Closed, Core)  
   Fixes lost final SSE events (e.g., `finishReason`, usage metadata) when streams end without a trailing blank line (truncated connections, non-conformant proxies).
10. **[#29137 chore(deps): bump npm-dependencies group with 77 updates](https://github.com/google-gemini/gemini-cli/pull/29137)** (Open, Dependencies, XL size)  
    Large dependency upgrade wave across 77 npm packages (including `simple-git`, `@modelcontextprotocol/sdk`) to keep the codebase current.

---

## 5. Hot Discussions
No GitHub Discussions data was provided for this period; section omitted.

---

## 6. Feature Request Trends
From open issues and community feedback, the most requested feature directions are:
1. **Agent autonomy & intelligence**: Improved automatic selection of skills/sub-agents without explicit user prompting, and AST-aware codebase reading/search/mapping to reduce token usage and improve analysis precision ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)).
2. **Agent safety guardrails**: Built-in protections against destructive operations (force git operations, DB modifications) and better visibility into subagent trajectories via `/chat share` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
3. **Auto Memory system hardening**: Deterministic secret redaction before content reaches model context, limits on indefinite retries of low-signal sessions, and better handling of invalid memory patches ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
4. **Browser agent resilience**: Automatic session takeover/lock recovery, Wayland compatibility, and proper respect for `settings.json` overrides (e.g., `maxTurns`) ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
5. **Extension & integration ecosystem**: Expanded extension capabilities (e.g., remote agent pairing) and more complete documentation for hooks and advanced features.

---

## 7. Developer Pain Points
Recurring frustrations and high-frequency user issues:
1. **Authentication reliability**: Persistent verification loops for Pro accounts, unexpected sign-outs, and misclassification of non-auth errors as auth failures plague both individual and enterprise users ([#19936](https://github.com/google-gemini/gemini-cli/issues/19936), [#28088](https://github.com/google-gemini/gemini-cli/issues/28088), [#28203](https://github.com/google-gemini/gemini-cli/issues/28203)).
2. **Agent execution correctness**: Silent failures (subagents reporting success after hitting MAX_TURNS), shell command hangs after completion, and stuck interactive prompts (e.g., Vite app creation) break workflow trust and automation ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
3. **Cross-platform inconsistencies**: Windows-specific bugs (stdout output failures in print mode, CRLF line ending issues causing full-file diffs, git sandbox argument validation gaps) create platform parity gaps ([#27466](https://github.com/google-gemini/gemini-cli/issues/27466), [#29132](https://github.com/google-gemini/gemini-cli/pull/29132), [#29184](https://github.com/google-gemini/gemini-cli/pull/29184)).
4. **Workspace & path handling fragility**: Symlink resolution errors, glob failures on symlinked roots, and temporary script files scattered across directories create cleanup overhead and unexpected behavior ([#28975](https://github.com/google-gemini/gemini-cli/pull/28975), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
5. **Tool limit & context management**: 400 errors with >128 tools, context-related listener leaks/infinite loops with large models, and incorrect newline escape handling degrade performance and reliability ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#28313](https://github.com/google-gemini/gemini-cli/issues/28313), [#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-09-07

## 1. Last 7 Days' Highlights
This week, the Copilot CLI team shipped v1.0.84 with support for GPT-6 Astra, alongside incremental improvements to sandbox flexibility, Windows 11 taskbar integration, and custom agent model fallback behavior. The community is most vocal about usability gaps in queue management, per-repository plugin scoping, and custom agent reasoning effort configuration, while enterprise users report model policy and MCP authentication reliability issues.

## 2. Releases
| Version | Release Date | Key Changes |
|---------|--------------|-------------|
| v1.0.84-1 | 2026-09-07 (latest) | ✅ Added support for GPT-6 Astra |
| v1.0.84-0 | 2026-09-06 | ✅ Managed sandbox sessions can be disabled for the rest of a session via an approved bypass prompt<br>🐛 Fixed PowerShell sandbox block offering to run commands outside the sandbox<br>🐛 Fixed sandboxed `gh` behavior with multiple GitHub accounts in credential store |
| v1.0.83 | 2026-09-04 | ✅ Windows 11 taskbar integration with live hover status cards for running sessions<br>✅ Added Client ID Metadata Document (CIMD) support for MCP OAuth sign-in<br>✅ Custom agents now support ordered model fallback lists, with `model-policy: required` to enforce list-only model usage |
| v1.0.83-5 | 2026-09-03 | ✅ Windows 11 taskbar live status cards<br>⚡ Hardened macOS/Linux sandbox network isolation (blocks local service access; macOS also blocks 127.0.0.1 servers started by sandboxed commands) |
| v1.0.83-4 | 2026-09-02 | ✅ CIMD support for MCP OAuth sign-in<br>⚡ Disabled interrupted-session restore prompt by default; faster input responsiveness when resuming large sessions<br>🐛 Fixed sandboxed file tool path handling |
| v1.0.83-2 | 2026-08-31 | ✅ Custom agent multi-model fallback + `claude-fable-5.1` support<br>⚡ Linux sandbox network egress restricted to configured proxy |
| v1.0.83-1 | 2026-08-30 | ✅ Sessions sidebar sorting (Recent/Created/Name/None) with saved preference<br>✅ Enterprise `forceLoginOrgs` managed setting to pin sign-in to approved orgs<br>⚡ Improved `/mcp config` UX |
| v1.0.83-0 | 2026-08-29 | ✅ Automatic HTTPS proxy mTLS client certificate support for model/web requests<br>✅ `herdr` terminal multiplexer detection (fixes Kitty protocol, color scheme, notifications in herdr panes) |

## 3. Hot Issues
1. **#1665 — Support project/repository-scoped plugins (CLOSED)**
   - Why it matters: Per-user global plugin installation breaks repo-specific tooling and team plugin standardization workflows.
   - Community reaction: 18 👍, 14 comments; long-standing request first filed in Feb 2026, closed this week (resolution not specified in summary).
   - Link: [github/copilot-cli#1665](https://github.com/github/copilot-cli/issues/1665)

2. **#1857 — Allow canceling/removing enqueued messages before execution (OPEN)**
   - Why it matters: Queued messages (via `Ctrl+Q`/`Ctrl+Enter`) cannot be revoked while the agent is busy or during `/compact`, forcing users to wait through unintended commands.
   - Community reaction: 28 👍, 11 comments; top-voted open issue this week, highlighting a core UX pain point for power users.
   - Link: [github/copilot-cli#1857](https://github.com/github/copilot-cli/issues/1857)

3. **#2904 — Custom agent YAML frontmatter should support reasoning effort (OPEN)**
   - Why it matters: Reasoning effort is only configurable globally, preventing per-agent optimization for tasks that need more or less reasoning depth.
   - Community reaction: 23 👍, 8 comments; popular request for custom agent developers.
   - Link: [github/copilot-cli#2904](https://github.com/github/copilot-cli/issues/2904)

4. **#4328 — WSL2: Ctrl+H misinterpreted as Ctrl+Backspace due to WT_SESSION leak (OPEN)**
   - Why it matters: Core text editing shortcut breaks for WSL2 users on Windows Terminal, degrading basic input experience.
   - Community reaction: 7 comments, 0 👍; platform-specific regression impacting Windows/WSL developer workflows.
   - Link: [github/copilot-cli#4328](https://github.com/github/copilot-cli/issues/4328)

5. **#4695 — MCP OAuth tokens for HTTP servers not reliably reused across sessions (OPEN)**
   - Why it matters: Duplicate cache-key entries force repeated re-authentication for HTTP-type MCP servers, breaking seamless MCP workflow.
   - Community reaction: 5 comments, 0 👍; critical reliability issue for MCP power users.
   - Link: [github/copilot-cli#4695](https://github.com/github/copilot-cli/issues/4695)

6. **#4692 — Enterprise default model not recognized in CLI (works in VS Code/GitHub Desktop) (OPEN)**
   - Why it matters: Inconsistent model policy enforcement across GitHub Copilot surfaces creates administrative confusion and broken enterprise workflows.
   - Community reaction: 4 comments, 0 👍; top enterprise-reported issue this week.
   - Link: [github/copilot-cli#4692](https://github.com/github/copilot-cli/issues/4692)

7. **#4537 — ACP mode auto-approves tool calls (regression of #845) (OPEN)**
   - Why it matters: `session/request_permission` is no longer sent in `--acp` mode, allowing unattended shell commands, file edits, and deletions — a security regression.
   - Community reaction: 2 👍, 2 comments; high-severity regression for ACP integrations relying on permission prompts.
   - Link: [github/copilot-cli#4537](https://github.com/github/copilot-cli/issues/4537)

8. **#4725 — Frequent JavaScript heap out of memory on Linux (OPEN)**
   - Why it matters: CLI crashes every few minutes with OOM errors (~4GB heap usage), rendering the tool unusable for long-running sessions.
   - Community reaction: 1 comment, 0 👍; critical stability issue for Linux users.
   - Link: [github/copilot-cli#4725](https://github.com/github/copilot-cli/issues/4725)

9. **#4710 — Runaway `copilot-file-search` thread consumes CPU/disk during idle session (OPEN)**
   - Why it matters: Idle sessions pin a CPU core and write unbounded diagnostic logs, causing performance degradation and disk bloat.
   - Community reaction: 1 comment, 0 👍; resource leak bug impacting background session reliability.
   - Link: [github/copilot-cli#4710](https://github.com/github/copilot-cli/issues/4710)

10. **#1688 — Add configurable auto-compaction threshold to config.json (OPEN)**
    - Why it matters: Built-in compaction triggers too late for slower high-capacity models (e.g., Claude Opus 4.6), causing severe latency at 45-60% context usage.
    - Community reaction: 5 👍, 3 comments; popular request for users working with large context windows.
    - Link: [github/copilot-cli#1688](https://github.com/github/copilot-cli/issues/1688)

## 4. Key PR Progress
Only 2 PRs were updated in the last 7 days:
1. **#4739 — docs: propose terminal-owned macOS notifications (OPEN)**
   - Description: Documents the macOS notification click interaction problem and adds a MIT-licensed reference implementation of terminal-owned notifications with portable regression tests. This is a documentation/reference proposal, not a change to the shipped CLI.
   - Author: anujb-msft
   - Link: [github/copilot-cli#4739](https://github.com/github/copilot-cli/pull/4739)

2. **#3771 — Initial project setup (OPEN)**
   - Description: No summary provided; PR was first opened in June 2026 and updated this week.
   - Author: limenpchuolto112-creator
   - Link: [github/copilot-cli#3771](https://github.com/github/copilot-cli/pull/3771)

*Note: Low PR activity this week in the public repository, as most core development likely occurs in a private upstream repo.*

## 5. Hot Discussions
*Omitted — no discussion data was provided in the dataset.*

## 6. Feature Request Trends
From the week's issues, three clear feature directions emerge:
1. **Custom agent configurability**: Demand for per-agent reasoning effort settings (#2904) and expanded multi-model policy controls, building on the newly shipped ordered model fallback feature.
2. **Workflow control & UX**: Requests for queue cancellation (#1857), standard text selection shortcuts (#2644), and configurable context compaction thresholds (#1688) to give users more granular control over session behavior.
3. **Plugin/extension flexibility**: Scoped plugin installation (resolved #1665) and improved plugin state management (#4471) remain top-of-mind for teams managing repo-specific toolchains.

## 7. Developer Pain Points
1. **MCP reliability gaps**: Multiple issues point to fragile MCP integration, including OAuth token reuse failures (#4695), initialization protocol mismatches (#4525), extension reload hook processor crashes (#4590), and third-party MCP server compatibility breaks (#4647).
2. **Enterprise administration friction**: Inconsistent model policy enforcement across surfaces (#4692, #4272), data residency endpoint mismatches (#4527), and limited trusted security program integration (#4322) create administrative overhead for enterprise teams.
3. **Stability & resource leaks**: Memory leaks causing OOM crashes (#4725), runaway idle file search threads (#4710), and voice server deadlocks (#4740) degrade long-running session reliability.
4. **Platform-specific regressions**: WSL2 keyboard shortcut breakage (#4328), Windows 25H2 sandbox incompatibility (#4652), macOS SSH clipboard failures (#4551), and Android Studio terminal scroll misbehavior (#3194) create inconsistent cross-platform experiences.
5. **ACP mode security/consistency gaps**: Permission prompt regressions (#4537), unconditional session abort on prompt (#4555), and missing idle signals during background tasks (#4743) break expectations for ACP-integrated tools.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-09-07
*Source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. Last 7 Days' Highlights
OpenCode shipped 4 patch releases (v1.18.26 to v1.18.29) focused on model compatibility (GPT-6, Claude 5, Bedrock) and reliability improvements for core providers, while the community raised high-priority issues around permission system bugs, Go subscription quota anomalies, and MCP/Anthropic integration failures. On the engineering side, a series of performance-focused PRs from contributor @Hona target renderer state persistence bottlenecks that cause desktop app freezes and slow large paste operations.

---

## 2. Releases (v1.18.26 → v1.18.29)
| Version | Key Changes |
|---------|-------------|
| [v1.18.29](https://github.com/anomalyco/opencode/releases/tag/v1.18.29) | **Core bugfixes**: Codex OAuth model filtering now recognizes integer GPT versions (e.g. `gpt-6`); fixes `gpt-6-astra` visibility for OpenAI subscription users. Community contribution: Chinese docs bold rendering fix (@Peter267). |
| [v1.18.28](https://github.com/anomalyco/opencode/releases/tag/v1.18.28) | **Core**: Session ID sent as GitHub Copilot interaction header for better request tracking. **Desktop bugfixes**: Correct client ID used for device authentication; larger "open-in" app icons for visibility. |
| [v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27) | **Core bugfixes**: Default provider header and streamed chunk timeouts set to 5 minutes (disable with `false`); Anthropic `thinking.blockBinding` now supports opt-out via config to preserve provider defaults. |
| [v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) | **Core bugfixes**: Claude 5 sessions tolerate stale thinking blocks (no longer fail after prompt/tool changes); Bedrock GPT-5.6 supports `none` reasoning effort; Bedrock reasoning/replay handling improved (@pengzh1); tool call timing accuracy preserved across interruptions. |

---

## 3. Hot Issues (Top 10 by Impact & Engagement)
1. **[#7006: `permission.ask` plugin hook defined but not triggered](https://github.com/anomalyco/opencode/issues/7006)**  
   *Open · 16 comments · 25 👍*  
   High-impact bug breaking the new Permissions system for plugin developers — custom auto-approval logic cannot run because the hook never fires. The most-commented open issue this week, with broad developer frustration.

2. **[#24335: Permission wildcard `*` overwrites lower permissions](https://github.com/anomalyco/opencode/issues/24335)**  
   *Open · 10 comments · 5 👍*  
   Violates documented permission evaluation order ("last matching rule wins"), breaking common catch-all + specific rule patterns. Blocks teams relying on fine-grained permission controls.

3. **[#42935: OpenCode Go quota exhausted in ~20 minutes after DeepSeek V4 Flash cache reads dropped to 0](https://github.com/anomalyco/opencode/issues/42935)**  
   *Open · 8 comments · 3 👍*  
   Severe suspected caching/billing bug causing sudden, unplanned quota depletion for Go subscribers. Raises cost predictability concerns for production usage.

4. **[#47613: Go subscription: persistent HTTP 429 (12h retry-after) despite low usage — limited for ~3 days](https://github.com/anomalyco/opencode/issues/47613)**  
   *Open · 7 comments · 0 👍*  
   Critical service degradation for paying Go users: rate limits reset every 12 hours indefinitely, making the service unusable for 3+ days with no resolution path.

5. **[#46628: MCP tool schemas not sanitized for Anthropic: root-level anyOf/oneOf/allOf 400s](https://github.com/anomalyco/opencode/issues/46628)**  
   *Open · 5 comments · 0 👍*  
   Breaks all MCP servers with complex schemas when using Anthropic models, since OpenCode does not translate unsupported JSON Schema constructs before passing them to the Anthropic API.

6. **[#47703: Go blocked at $24.54 of $60 monthly quota — free models blocked too](https://github.com/anomalyco/opencode/issues/47703)**  
   *Open · 1 comment · 0 👍*  
   Another quota calculation bug: usage sum displays as 101% despite being under the total limit, blocking access to even free models. Reinforces Go billing system instability concerns.

7. **[#43758: [FEATURE] Session-scoped terminals + optional terminal context for the model](https://github.com/anomalyco/opencode/issues/43758)**  
   *Open · 4 comments · 0 👍*  
   Highly requested UX improvement: current workspace-scoped terminals leak context across chat tabs. Users want per-session terminals and optional terminal state visibility for the AI.

8. **[#32202: Skill duplicate roots change available_skills across restarts](https://github.com/anomalyco/opencode/issues/32202)**  
   *Open · 8 comments · 1 👍*  
   Non-deterministic skill loading when the same skill name exists in multiple roots causes inconsistent behavior between restarts, breaking reproducible agent setups.

9. **[#47545: Auto mode causes repeated false permission notifications in terminals](https://github.com/anomalyco/opencode/issues/47545)**  
   *Open · 3 comments · 0 👍*  
   Noise bug in Auto mode: AI terminals like Warp/Orca trigger continuous permission popups even when auto-approved, making unattended runs impractical.

10. **[#46156: [FEATURE] Plugin dataflow panel — reserved UI space for per-session metrics](https://github.com/anomalyco/opencode/issues/46156)**  
    *Open · 3 comments · 1 👍*  
    Popular plugin ecosystem request: dedicated UI surface for plugins to display live logs, metrics, and dashboards without polluting the chat stream.

---

## 4. Key PR Progress (Top 10)
1. **[#47704: perf(app): cache storage namespaces and batch writes in the renderer](https://github.com/anomalyco/opencode/pull/47704)**  
   *Open · @Hona*  
   First layer of renderer persistence overhaul: replaces per-write IPC with bulk namespace loads/writes modeled after VS Code's storage architecture, reducing main-thread blocking.

2. **[#47705: perf(app): serialize persisted stores on a schedule instead of per setter call](https://github.com/anomalyco/opencode/pull/47705)**  
   *Open · @Hona*  
   Second layer: batches store serialization to a fixed save window (plus owner cleanup and page hide events) instead of serializing on every state change, matching VS Code's `Memento` contract.

3. **[#47706: perf(app): externalize large draft text into content-addressed chunks](https://github.com/anomalyco/opencode/pull/47706)**  
   *Open · @Hona*  
   Third layer: large draft text is stored as fixed-size, content-addressed chunks instead of in the state database, so big pastes only upload one chunk per save instead of the full text.

4. **[#47695: fix(desktop): persist renderer state in SQLite instead of electron-store](https://github.com/anomalyco/opencode/pull/47695)**  
   *Closed · @Hona*  
   Fixes 3–5 second Windows freezes when closing session tabs: moves renderer persistence off synchronous `electron-store` writes (which block the main thread) to SQLite.

5. **[#47702: fix: route Muse Spark models to Responses API instead of Chat Completions](https://github.com/anomalyco/opencode/pull/47702)**  
   *Open · @qubixal*  
   Fixes 0-token responses and HTTP 500 errors for Muse Spark 1.2/1.3 models by using the correct Responses API endpoint instead of Chat Completions.

6. **[#47427: fix(desktop): prevent large paste crashes](https://github.com/anomalyco/opencode/pull/47427)**  
   *Open · @hufangyuan460-blip*  
   Resolves UI lag, unresponsiveness, and crashes when pasting large amounts of text into the desktop prompt.

7. **[#45424: fix(core): dispatch providers whose AI SDK package has no native route](https://github.com/anomalyco/opencode/pull/45424)**  
   *Open · @SeeRay11*  
   Fixes routing for AI SDK providers outside the three hardcoded packages (`@ai-sdk/openai`, `@ai-sdk/anthropic`, `@ai-sdk/...`), enabling support for additional provider SDKs.

8. **[#45482: fix(task): make async subagent tasks answer honestly, once, in order, and stop](https://github.com/anomalyco/opencode/pull/45482)**  
   *Open · @NamedIdentity*  
   Fixes subagent task behavior: agents now receive a single confirmation when all async children finish, preventing duplicate or out-of-order responses.

9. **[#47699: fix(cli): pass `--model` through to the TUI entry](https://github.com/anomalyco/opencode/pull/47699)**  
   *Open · @holny*  
   Fixes `opencode --model <id> --prompt ...` dropping the model flag before TUI startup, so CLI-specified models are actually used for the session.

10. **[#47262: fix(workflows): skip close-issues and close-prs jobs on forks](https://github.com/anomalyco/opencode/pull/47262)**  
    *Open · @niStee*  
    Fixes scheduled workflows that erroneously close issues/PRs on forked repos, breaking contributor development workflows.

---

## 5. Hot Discussions
*Omitted — no GitHub Discussions data provided in the dataset.*

---

## 6. Feature Request Trends
1. **Plugin ecosystem extensibility**: Demand for better plugin surface area — working `permission.ask` hooks, dedicated dataflow/metrics UI panels, and improved plugin loading across TUI/node builds.
2. **Terminal experience improvements**: Session-scoped terminals (instead of workspace-scoped), terminal context visibility for the model, and reduced notification noise in Auto mode.
3. **Customization & control**: Configurable project names independent of folder names, session favoriting/pinning, and more granular permission system controls.
4. **Provider & model parity**: Requests for documented Standard Compute provider setup, Nous Research API integration, and Claude Code agent discovery from `.claude/` directories.

---

## 7. Developer Pain Points
1. **Go subscription billing & quota instability**: Multiple reports of incorrect quota calculations, sudden unplanned depletion, and unexplained persistent 429 rate limits — eroding trust in cost predictability for paying users.
2. **Permission system bugs**: Two high-severity issues (`permission.ask` hook not firing, wildcard rule order violation) break core permission workflows and custom plugin logic.
3. **MCP integration gaps**: Schema incompatibility with Anthropic models, remote MCP OAuth metadata lookup failures, and unhandled MCP request timeouts create friction for building MCP-based workflows.
4. **Desktop performance & stability**: Freezes on tab close, crashes from large pastes, GPU process launch failures on Windows, and session list data loss after `.git` directory removal impact day-to-day usability.
5. **TUI & CLI edge cases**: 100% CPU usage from idle spinners, broken Termux (Android) support, symlinked config files being overwritten, and incorrect working directory when continuing sessions.
6. **2.0 beta regressions**: Multiple v2-specific bugs (TUI plugin loading, CLI preference symlink handling, serve Basic Auth failures) create friction for early adopters.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-09-07

---

## 1. Last 7 Days' Highlights
The Pi project shipped v0.85.0 and v0.85.1, headlined by support for GPT-6 Astra (via OpenAI API and Codex subscriptions) and persistent Claude thinking effort across supported Anthropic transports. Community activity focused heavily on OpenAI Codex connection reliability, Windows compatibility gaps, and fullscreen TUI usability, while maintainers merged fixes for provider routing, DNS resolution, and cross-provider fallback on transport errors.

---

## 2. Releases
- **v0.85.1**
  - Added **GPT-6 Astra** support, available through OpenAI API keys and OpenAI Codex subscriptions. Docs: [API Keys](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys), [OpenAI Codex](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#openai-codex)
- **v0.85.0**
  - Added **persistent Claude thinking effort**: supported Anthropic transports preserve per-turn effort and recover safely from signed-thinking mismatches. Docs: [Model Configuration](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

---

## 3. Hot Issues
1. **#4945 — openai-codex Connection Reliability Issues** [OPEN, in progress]
   - `openai-codex` / `gpt-5.5` intermittently freezes the TUI on `Working...` with no streamed output, tool call, or error; recovery requires Escape.
   - **Why it matters**: Affects core Codex workflow stability. **Reaction**: 76 comments, 32 👍 — the most active issue of the week.
   - [earendil-works/pi#4945](https://github.com/earendil-works/pi/issues/4945)

2. **#7547 — How do you use Pi on windows? What issues are you seeing?** [OPEN, Windows, sink-thread]
   - A community survey to map how Windows developers run Pi and prioritize fixes/docs vs. external packaging.
   - **Why it matters**: Windows is a large underserved user base; results will shape platform roadmap. **Reaction**: 57 comments, 2 👍.
   - [earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)

3. **#9052 — Fullscreen mode wheel scrolling is 3x slower than regular mode** [OPEN]
   - Fullscreen TUI's fixed input box is popular, but scroll wheel performance is noticeably degraded.
   - **Why it matters**: Fullscreen mode usability regression directly impacts daily workflow. **Reaction**: 6 comments, 3 👍.
   - [earendil-works/pi#9052](https://github.com/earendil-works/pi/issues/9052)

4. **#8826 — Cap agent retry backoff for prolonged transient outages** [OPEN]
   - Requests a configurable cap on coding-agent's exponential retry delay so prolonged upstream outages settle at a bounded interval.
   - **Why it matters**: Improves resilience during sustained provider downtime (e.g., 503/connection floods). **Reaction**: 4 comments.
   - [earendil-works/pi#8826](https://github.com/earendil-works/pi/issues/8826)

5. **#9209 — GitHub Copilot GPT-6 Astra routed to unsupported Chat Completions endpoint** [CLOSED]
   - `github-copilot/gpt-6-astra` was routed to `/chat/completions`, which Copilot rejects; fixed by routing through Responses endpoint.
   - **Why it matters**: Broke GPT-6 Astra access via Copilot shortly after release. **Reaction**: 4 comments; fix shipped in PR #9253.
   - [earendil-works/pi#9209](https://github.com/earendil-works/pi/issues/9209)

6. **#9229 — Windows: shell_path config is ignored, always prefers WSL bash even WSL feature disabled** [CLOSED, bug]
   - On Windows 11 with WSL feature disabled but `wsl.exe` present, Pi ignored `shell_path` and forced WSL bash.
   - **Why it matters**: Breaks Windows shell customization for non-WSL users. **Reaction**: 4 comments.
   - [earendil-works/pi#9229](https://github.com/earendil-works/pi/issues/9229)

7. **#8834 — Opt-in package namespace (pi.namespace) for skills and prompt templates** [CLOSED, no-action]
   - Proposed a `pi.namespace` field in `package.json` to unify skill/prompt template resolution under `<namespace>:<name>`.
   - **Why it matters**: Would enable safer multi-package extension composition. **Reaction**: 5 comments; closed pending further design.
   - [earendil-works/pi#8834](https://github.com/earendil-works/pi/issues/8834)

8. **#9246 — anthropic-messages: spend the unused 4th cache breakpoint on a stable conversation checkpoint** [CLOSED]
   - `convertMessages` only used 3 of 4 Anthropic cache breakpoints; proposed using the 4th for a stable conversation checkpoint.
   - **Why it matters**: Improves cache hit rate and reduces cost for long Anthropic sessions. **Reaction**: 3 comments.
   - [earendil-works/pi#9246](https://github.com/earendil-works/pi/issues/9246)

9. **#9247 — JSON/RPC: expose provider-native terminal failure classification** [CLOSED]
   - Requests machine-readable failure classification (context overflow, safeguard refusal, rate limiting, etc.) plus retryability in JSON/RPC events.
   - **Why it matters**: Enables extensions and embedders to react intelligently to failures. **Reaction**: 3 comments.
   - [earendil-works/pi#9247](https://github.com/earendil-works/pi/issues/9247)

10. **#8827 — tui(latex): legacy font switches (\rm, \bf, \it) force whole-block raw fallback** [OPEN]
    - LaTeX blocks with legacy font switches like `\rm` fall back to raw source instead of rendering as unicode math.
    - **Why it matters**: Degrades rendering quality for common legacy TeX notation. **Reaction**: 3 comments.
    - [earendil-works/pi#8827](https://github.com/earendil-works/pi/issues/8827)

---

## 4. Key PR Progress
1. **#6881 — feat(ai): use provider-reported cost when responses include it** [OPEN, in progress]
   - Uses provider-billed cost in `usage.cost.total` when available, falling back to catalog rates. Covers OpenAI completions and Vercel AI Gateway upstream cost details.
   - [earendil-works/pi#6881](https://github.com/earendil-works/pi/pull/6881)

2. **#9253 — fix(ai): route Copilot GPT models through Responses (fixes astra)** [OPEN]
   - Fixes #9209 by routing GitHub Copilot GPT models (including Astra) to the Responses endpoint instead of `/chat/completions`; forward-compatible with Copilot's current catalog.
   - [earendil-works/pi#9253](https://github.com/earendil-works/pi/pull/9253)

3. **#9251 / #9249 / #9248 — feat(coding-agent): hop to a fallback provider on transport errors** [CLOSED]
   - Adds optional cross-provider fallback on transport/unreachable errors so sessions continue on a configured backup provider instead of hard-failing. Fixes #9242.
   - [#9251](https://github.com/earendil-works/pi/pull/9251) / [#9249](https://github.com/earendil-works/pi/pull/9249) / [#9248](https://github.com/earendil-works/pi/pull/9248)

4. **#9252 / #9250 — fix(coding-agent): pin undici connect lookup to system dns.lookup** [CLOSED]
   - Pins undici's DNS lookup to system `dns.lookup`, fixing `ENOTFOUND` for MagicDNS / split-horizon hostnames resolved via OS resolver. Related to #9244.
   - [#9252](https://github.com/earendil-works/pi/pull/9252) / [#9250](https://github.com/earendil-works/pi/pull/9250)

5. **#9080 — feat(tui): add jump-to-latest control** [CLOSED]
   - Adds a TUI control to jump to the latest message, building on earlier work for a new-message indicator.
   - [earendil-works/pi#9080](https://github.com/earendil-works/pi/pull/9080)

6. **#7610 — feat(ai): add LLM Gateway and LLM Gateway DevPass providers** [OPEN]
   - Adds [LLM Gateway](https://llmgateway.io) as built-in `openai-completions` providers, contributed by the LLM Gateway team.
   - [earendil-works/pi#7610](https://github.com/earendil-works/pi/pull/7610)

7. **#9137 — feat(coding-agent): add Nix flake** [OPEN, WIP]
   - Work-in-progress Nix flake support for the coding agent package.
   - [earendil-works/pi#9137](https://github.com/earendil-works/pi/pull/9137)

8. **#9096 — feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** [OPEN]
   - Adds Meta as a provider with Muse subscription OAuth; quirks include daily token re-minting and burst-style "fake" streaming.
   - [earendil-works/pi#9096](https://github.com/earendil-works/pi/pull/9096)

9. **#79 — feat(coding-agent): watch .git/HEAD for branch changes** [CLOSED]
   - Auto-updates the TUI footer when the git branch changes externally (e.g., `git checkout` in another terminal).
   - [earendil-works/pi#79](https://github.com/earendil-works/pi/pull/79)

10. **#9163 — feat(tui): Simplify clipboard handling** [CLOSED]
    - Simplifies clipboard handling by removing an overkill Rust dependency, enabling builds on NixOS and other platforms.
    - [earendil-works/pi#9163](https://github.com/earendil-works/pi/pull/9163)

---

## 5. Hot Discussions
### Ideas
- **#9207 — suggestion: remove Available tools section from system message**
  - Proposes dropping the static "Available tools" list from the system prompt to save tokens. 2 👍, 0 comments.
  - [earendil-works/pi#9207](https://github.com/earendil-works/pi/discussions/9207)
- **#9177 — Hope to have the CommandCode Plan integrated into login.**
  - Requests native CommandCode Plan integration at login. 1 👍, 0 comments.
  - [earendil-works/pi#9177](https://github.com/earendil-works/pi/discussions/9177)
- **#9213 — Embed Agent-Friendly Score badge in README**
  - A community contributor shared Pi's 86.2/100 agent-friendliness score and proposed adding the badge. 1 👍, 0 comments.
  - [earendil-works/pi#9213](https://github.com/earendil-works/pi/discussions/9213)

### Q&A
- **#3373 — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?**
  - Long-running thread asking for favorite extensions. 8 👍, 15 comments.
  - [earendil-works/pi#3373](https://github.com/earendil-works/pi/discussions/3373)
- **#9146 — Provide a per-repo override of for API Key and ignore auth.json**
  - Asks for per-repository API key overrides instead of a global `auth.json`. 1 👍, 2 comments.
  - [earendil-works/pi#9146](https://github.com/earendil-works/pi/discussions/9146)

### Show and tell
- **#9017 — Benchmark: Pi vs the official DeepSeek Harness on the same local model (16 runs, reproducible)**
  - Shared a paired benchmark of Pi 0.73.1 vs DeepSeek Harness on the same local Qwen3 model. 1 👍, 0 comments.
  - [earendil-works/pi#9017](https://github.com/earendil-works/pi/discussions/9017)
- **#8803 — Introducing pi-verdict — a minimal permission gate for pi**
  - Announced `pi-verdict`, a lightweight allow/ask/deny permission gate with zero dependencies. 1 👍, 0 comments.
  - [earendil-works/pi#8803](https://github.com/earendil-works/pi/discussions/8803)

---

## 6. Feature Request Trends
- **Provider flexibility & resilience**: Cross-provider fallback on transport errors, retry backoff capping, provider-reported cost usage, and new provider integrations (Meta, LLM Gateway, OpenCode Go session headers).
- **TUI polish**: Fullscreen mode performance fixes, jump-to-latest controls, clipboard simplification, LaTeX rendering improvements, and better IME/terminal compatibility.
- **Extension & configuration surface**: Exposing model runtime to extensions, per-repo API key overrides, custom tool confirmation flows, and namespace-based package resolution.
- **Windows platform maturity**: Gathering usage patterns to prioritize fixes, docs, and out-of-box experience for Windows developers.
- **Cache & cost optimization**: Leveraging unused Anthropic cache breakpoints and clamping OpenRouter free-tier maxTokens to base model limits.

---

## 7. Developer Pain Points
- **Codex connection instability**: The `openai-codex` TUI freeze issue (#4945) is the single most-commented pain point, with no full resolution yet.
- **Windows friction**: Shell path misbehavior, WSL coercion, Shift+Enter quirks, and unclear supported runtimes create a rough onboarding path (#7547, #9229, #7175).
- **Fullscreen TUI regressions**: Slow scroll wheel, image rendering bugs, and redraw/scroll position jumps during streaming disrupt the fullscreen experience (#9052, #8306, #9240).
- **Provider routing / compatibility surprises**: Copilot GPT-6 Astra endpoint mismatch, OpenRouter free-tier token limits, OpenCode Go header requirements, and truncated Sonnet-5 edit calls via gateways (#9209, #9224, #9230, #9212).
- **Extension API gaps**: Missing model runtime access, UI mode control, reliable delivery semantics, and consistent lifecycle hooks (e.g., `before_agent_start`) complicate extension development (#8791, #9238, #9236, #8712).
- **Session resume inconsistencies**: Wrong model restoration, full-size inline image re-rendering, and reload-vs-active-operation races (#9243, #9256, #9222).
- **DNS / networking edge cases**: MagicDNS / split-horizon hostname resolution failures due to undici defaults (#9244).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-09-07

---

## 1. Last 7 Days' Highlights
This week the Qwen Code project shipped the v0.23.0 stable release alongside a set of preview and nightly builds, with core UX improvements landing in the Web Shell’s dynamic workflow management and branch picker git state hints. The community is also actively driving the OpenTUI rendering migration and addressing multiple performance, security, and CI reliability gaps across the CLI, daemon, and Web Shell surfaces.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.23.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0) | Stable | - Branch picker now shows git state hints (e.g. `↓3 · origin/main`, `Up to date`) beside Update Project / Commit / Push actions<br>- No known breaking changes |
| [v0.23.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.1) | Preview | - `feat(web-shell)`: visualize and manage dynamic workflow runs ([#10594](https://github.com/QwenLM/qwen-code/pull/10594))<br>- `perf(web-shell)`: derive the session workflow project |
| [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0) | Preview | Same feature set as v0.23.1-preview.1 |
| v0.23.0-nightly.20260906 / 0905 | Nightly | Rolling builds including the Web Shell dynamic workflow and session workflow derivation changes |
| [live-host-v0.2.0](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.2.0) | Component | - `fix(ci)`: tunable shared ECS Vitest concurrency ([#10667](https://github.com/QwenLM/qwen-code/pull/10667))<br>- `feat(cli)`: OpenTUI migration batch 4 |
| [cua-driver-rs-v0.20.3](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3) | Component | Prebuilt Qwen CUA Driver binaries: codesigned macOS universal binary, Linux x86_64/arm64 (glibc 2.31+), Windows x86_64/arm64 with UIAccess worker |

---

## 3. Hot Issues
Selected by impact, priority, and community activity:

1. **[#8662 Migrate TUI rendering layer from ink to OpenTUI (tracking)](https://github.com/QwenLM/qwen-code/issues/8662)**  
   *P3 · enhancement · 30 comments*  
   The long-running architectural migration away from ink 7 (with a 1000+ line custom patch) to OpenTUI remains the highest-discussion issue, addressing flicker and rendering limitations that are hard to fix in the current stack.

2. **[#11198 Usage-statistics telemetry uploads raw tool-error text (including shell command lines) to RUM without redaction](https://github.com/QwenLM/qwen-code/issues/11198)**  
   *P1 · security · data privacy · 2 comments*  
   A critical privacy/security finding: default-on telemetry sends unredacted shell command lines and tool error text. Labeled `ready-for-human` and triaged as top priority.

3. **[#6181 Mobile session switching is janky (full sync transcript render, uncompressed full-history load)](https://github.com/QwenLM/qwen-code/issues/6181)**  
   *P1 · performance · web-shell · 3 comments*  
   Mobile Web Shell session switches can freeze for seconds due to four stacked cost layers (sidebar polling, full transcript render, uncompressed history, per-frame O(n) work).

4. **[#11180 Skill's `PreToolUse` hook stops enforcing after `--continue`, while instructions stay in context](https://github.com/QwenLM/qwen-code/issues/11180)**  
   *P1 · security · skills · hooks-events · 3 comments*  
   A security regression: safety-gate `PreToolUse` hooks stop working when a skill session is continued with `--continue`, but the skill’s instructions remain active in context.

5. **[#11031 Fix: stop embedding the Web Shell runtime in every exported HTML file](https://github.com/QwenLM/qwen-code/issues/11031)**  
   *P1 · bug · closed · 6 comments*  
   Fixed issue where even empty exported HTML sessions were ~19.5 MB due to duplicated React/Web Shell runtime bundles. Related follow-up [#11100](https://github.com/QwenLM/qwen-code/issues/11100) is still open.

6. **[#11109 release.yml repeats work the same run already did, and one 20-minute step verifies nothing](https://github.com/QwenLM/qwen-code/issues/11109)**  
   *P2 · CI/CD · 4 comments*  
   Two release runs timed out this week due to redundant work in `release.yml`, with one long-running step performing no actual verification — a major CI efficiency pain point.

7. **[#11146 Pre-aborted tool requests can wait behind an unrelated active batch](https://github.com/QwenLM/qwen-code/issues/11146)**  
   *P2 · core · tool scheduling · 4 comments*  
   A `CoreToolScheduler` bug where already-cancelled requests stay queued behind unrelated active batches, wasting scheduler capacity and causing unnecessary latency.

8. **[#11186 Channel ownership model does not cover a home-directory workspace reading user-scope settings](https://github.com/QwenLM/qwen-code/issues/11186)**  
   *P2 · core · settings · daemon · 3 comments*  
   When `qwen serve` is bound to a user’s home directory, the settings loader disables workspace scope, creating a gap in the channel ownership model introduced in [#11083](https://github.com/QwenLM/qwen-code/pull/11083).

9. **[#11228 Open right-click context menu does not consume keys: composer and tool-approval dialog act on the same keystroke](https://github.com/QwenLM/qwen-code/issues/11228)**  
   *P2 · UI · keybindings · 2 comments*  
   `KeypressContext` uses a broadcast dispatch model, so open context menus can’t consume keystrokes — leading to unintended actions in the composer or approval dialogs when a menu is open.

10. **[#11227 `/effort` is not propagated to generic OpenAI-compatible backends](https://github.com/QwenLM/qwen-code/issues/11227)**  
    *P2 · enhancement · core · 2 comments*  
    The `/effort` command updates state internally but doesn’t send the value to third-party OpenAI-compatible API backends (e.g. local NInfer deployments), a gap for self-hosted users.

---

## 4. Key PR Progress
10 notable PRs updated this week:

1. **[#11152 feat(cli): OpenTUI parity closeout (dialogs, composer, shell mode)](https://github.com/QwenLM/qwen-code/pull/11152)**  
   *by chiga0 · autofix/takeover*  
   Closes the last known behavioral gaps between the OpenTUI and ink renderers, covering auth dialog boot behavior, composer updates, and shell mode parity — a major milestone for the [#8662](https://github.com/QwenLM/qwen-code/issues/8662) migration.

2. **[#11086 feat(serve): scope extensions to workspace runtimes](https://github.com/QwenLM/qwen-code/pull/11086)**  
   *by ytahdn · autofix/takeover*  
   Makes the global extension catalog available per-workspace via the selected runtime, reconciling extension state into live workspace runtimes and updating daemon/SDK access paths.

3. **[#10504 feat(dingtalk): show dynamic lifecycle tags](https://github.com/QwenLM/qwen-code/pull/10504)**  
   *by BenGuanRan · autofix/takeover*  
   Adds localized, privacy-safe turn status feedback (Thinking / Reading / Searching / Running / Editing / Retrying / Replacing) to DingTalk integrations without exposing raw tool input/output.

4. **[#10183 feat(memory): add structured on-demand recall](https://github.com/QwenLM/qwen-code/pull/10183)**  
   *by ZijianZhang989 · autofix/takeover*  
   Evolves auto-memory from a flat prompt into a structured push/pull recall protocol, with a two-level ref/title tree and query-focused metadata retrieval for relevant turns.

5. **[#11015 feat(channels): Implement named-session worktree reset (Part 4B)](https://github.com/QwenLM/qwen-code/pull/11015)**  
   *by doudouOUC*  
   Lands `/clear`, `/new`, and `/reset` support for worktree-isolated named Channel sessions, preserving the daemon-attested worktree/branch state while resetting conversation history.

6. **[#11225 feat(mesh): add hidden host session launcher](https://github.com/QwenLM/qwen-code/pull/11225)**  
   *by yiliang114*  
   Adds a workspace-scoped hidden mesh host with private launch routing, including lifecycle management, reuse across launches, and bridge-reaper recovery.

7. **[#11169 fix(web-shell): close the trust-gate and bystander gaps in the local-files bridge](https://github.com/QwenLM/qwen-code/pull/11169)**  
   *by wenshao*  
   Follow-up to the merged local-files bridge (#10962), fixing four review gaps including a reserved "still resolving" state for workspace route judgment.

8. **[#10421 fix(review): screen content filters at every rewrite the probe authorises](https://github.com/QwenLM/qwen-code/pull/10421)**  
   *by wenshao · review/self-reported*  
   Ensures the efficacy probe’s content filter runs at every tree rewrite step (creation, restore, clean), closing gaps where unfiltered content could bypass checks.

9. **[#10991 refactor(daemon): decouple extension activation refresh](https://github.com/QwenLM/qwen-code/pull/10991)**  
   *by callmeYe · autofix/takeover*  
   Decouples extension activation completion from live session refresh, using a new `extension_activation_explicit_refresh` capability flag for client compatibility.

10. **[#10188 fix(autofix): charge regressions to the brake and gate test weakening](https://github.com/QwenLM/qwen-code/pull/10188)**  
    *by wenshao · autofix/takeover*  
    Closes two gaps in the autofix loop’s regression guard: regressions now count against the consecutive-failure brake, and test-weakening changes are gated.

---

## 5. Hot Discussions
No discussion data was provided for this period. This section is omitted.

---

## 6. Feature Request Trends
Distilled from open issues and PRs:
1. **OpenTUI migration & TUI UX improvements** — Full migration from ink to OpenTUI, with continued parity work on dialogs, composer, shell mode, and rendering quality.
2. **Extension & runtime isolation** — Workspace-scoped extensions, runtime-specific extension catalogs, and better activation lifecycle management.
3. **Memory & context management** — Structured on-demand memory recall, improved transcript normalization, and preserved attachment state across replay.
4. **Agent Team / multi-agent stability** — Ongoing quality audits and experience backlog for multi-agent workflows.
5. **Channel / named session worktrees** — Expanding worktree-isolated sessions with reset/clear/new operations and ownership model refinements.
6. **Mesh feature set** — Hidden host sessions, thread status tracking, per-turn run bindings, and related mesh primitives.
7. **DingTalk & integration UX** — Dynamic lifecycle status feedback for third-party platform integrations.

---

## 7. Developer Pain Points
Recurring frustrations and high-frequency requests:
1. **CI reliability & efficiency** — Repeated release pipeline timeouts, redundant work in `release.yml`, flaky macOS/Linux E2E shards, and ECS pool contention causing 20-minute flat timeouts.
2. **Export performance bloat** — Exported HTML files are excessively large due to duplicated runtime bundles (partially fixed, with follow-up transcript entry cleanup still in progress).
3. **Tool scheduling edge cases** — Cancelled requests stuck in queues, missing completion cleanup on cancellation, and batch priority bugs causing latency.
4. **Security & privacy gaps** — Unredacted telemetry data in error logs, content filter hardening regressions, and skill hook enforcement bypasses on session continuation.
5. **Mobile Web Shell performance** — Severe jank during session switching due to full transcript renders, uncompressed history loads, and unoptimized polling.
6. **Third-party backend compatibility** — Features like `/effort` don’t propagate to generic OpenAI-compatible backends, limiting self-hosted use cases.
7. **Transcript replay consistency** — User `resource_link` attachments are dropped during transcript normalization, breaking history rebuilds via the SDK.
8. **Keybinding & UI interaction bugs** — Context menus failing to consume keystrokes, leading to unintended concurrent actions in composers and dialogs.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*