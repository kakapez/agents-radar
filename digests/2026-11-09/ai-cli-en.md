# AI CLI Tools Weekly Digest 2026-11-09

> Generated: 2026-11-09 02:31 UTC | Tools covered: 7

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

⚠️ Comparative analysis generation failed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (2026-11-09)
---

## 1. Top Skills Ranking (Most Discussed PRs)
*Note: All listed PRs have no recorded comment counts or upvotes as of the dataset snapshot, sorted by recency and functional impact:*
1.  [PR #2019: fix(xlsx): resolve worksheet-scoped defined names and aliases in external_links_at_risk](https://github.com/anthropics/skills/pull/2019)
    - Functionality: Improves the xlsx spreadsheet skill to fix false negatives in external link risk detection, adding support for worksheet-scope defined names and indirect alias references.
    - Highlights: Addresses issue #2013, with the latest update on 2026-11-03.
    - Status: OPEN
2.  [PR #2108: docs: clarify document skills snapshot status and sync relationship](https://github.com/anthropics/skills/pull/2108)
    - Functionality: Updates repository README to clarify versioning and sync behavior for official document skills, distinguishing between repo copies and user-side synced local skill files.
    - Highlights: References historical export milestones (#1447, #330) for verifiable version tracking.
    - Status: OPEN
3.  [PR #1980: webapp-testing: avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980)
    - Functionality: Patches the webapp-testing skill to eliminate command injection (CWE-78) risks by removing unsafe `shell=True` usage when spawning server processes.
    - Highlights: Security-focused fix for critical injection vulnerability in test workflow automation.
    - Status: OPEN
4.  [PR #1792: fix(docx): report LibreOffice timeout as an error and verify the output](https://github.com/anthropics/skills/pull/1792)
    - Functionality: Improves the docx document skill to correctly handle LibreOffice timeouts (previously misreported as success) and adds post-processing validation to confirm revision marks are fully removed.
    - Highlights: Prevents invalid, unmodified DOCX files from being returned as successful outputs.
    - Status: OPEN
5.  [PR #1298: fix(skill-creator): isolate trigger evals and handle Windows and runtime failures](https://github.com/anthropics/skills/pull/1298)
    - Functionality: Fixes false trigger evaluation results in the skill-creator utility, resolving Windows subprocess pipe failures, worker resource conflicts, and runtime error handling gaps.
    - Highlights: Improves the core tool users rely on to build and test new custom skills.
    - Status: OPEN
6.  [PR #1771: feat(skills): add proofcore-contract-auditor for smart contract notarization](https://github.com/anthropics/skills/pull/1771)
    - Functionality: Adds a new Web3-focused skill that performs static analysis for Solidity/Rust smart contracts and anchors audit proofs to the TON Blockchain via ProofCore's zero-storage protocol.
    - Highlights: Targets the underserved Web3 developer niche for Claude Code workflows.
    - Status: OPEN

## 2. Community Demand Trends (from Top Issues)
- **Trust & Security Governance**: The highest-engagement issue ([#492, 46 comments](https://github.com/anthropics/skills/issues/492)) calls for namespace separation to prevent community skills from impersonating official Anthropic-published skills, to close trust boundary vulnerabilities.
- **Team Collaboration Workflows**: [Issue #228 (17 comments)](https://github.com/anthropics/skills/issues/228) requests native org-wide skill sharing, eliminating manual file transfer and upload steps for team use cases.
- **Skill Evaluation & Reliability**: Multiple high-comment issues ([#556, #1352, #1394](https://github.com/anthropics/skills/issues/556)) highlight broken trigger evaluation pipelines, including 0% trigger rates in test runs, parallel worker UUID collisions causing false results, and XSS risks in evaluation tools.
- **Context Efficiency**: [Issue #1487 (5 comments)](https://github.com/anthropics/skills/issues/1487) reports that large bundled skills (e.g. claude-api) eagerly inject up to 156k tokens and exhaust context windows, driving demand for lazy-loading and on-demand skill content injection.

## 3. High-Potential Pending Skills
These active open PRs represent near-term improvements and additions to the ecosystem:
- [PR #1730: fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts](https://github.com/anthropics/skills/pull/1730) — Fixes 3 hard-404 documentation links to improve reference accuracy.
- [PR #1997: fix(skill-creator): parse YAML frontmatter scalars correctly](https://github.com/anthropics/skills/pull/1997) — Resolves broken metadata parsing for skill descriptions and evaluation commands.
- [PR #1703: Add md2video-audio skill](https://github.com/anthropics/skills/pull/1703) — Adds a zero-cost skill that compiles Markdown documents into narrated MP4 videos via Marp and TTS.
- [PR #525: Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) — Adds guided workflows for building, testing, and debugging retro Python games with the Pyxel engine.
- [PR #1615: Add scnet-hpc skill](https://github.com/anthropics/skills/pull/1615) — Adds Slurm and SSH workflow support for operating SCNet high-performance computing clusters.

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for trustworthy, context-efficient, team-ready skill tooling: priority is being placed on closing security trust gaps, fixing broken core skill-creation/evaluation workflows, and reducing unnecessary context overhead to support reliable, scalable use of Claude Code skills for both individual and organizational users.

---

# Claude Code Community Digest - 2026-11-09

## 1. Last 7 Days' Highlights
This week, Claude Code shipped three incremental releases focusing on privacy hardening, enterprise permission controls, and session transparency. The community is buzzing with long-running feature requests for multi-account connector support and desktop UI parity, alongside several high-impact bug reports related to Opus 5.5 behavior, desktop performance regressions, and permission system edge cases.

## 2. Releases
### v2.1.319
- Hardened auto mode: when telemetry or feature flags are disabled (including behind LLM gateways), calls the server cannot verify are now explicitly prompted or denied without falling back to the built-in classifier. Add `CLAUDE_CODE_AUTO_MODE_SERVER=0` to retain the legacy behavior (Bedrock, Vertex, and Foundry integrations are unchanged).

### v2.1.318
- Added persistent recording of user responses to mod enable prompts during sessions.
- Added `assume_role` support for `mantle` upstreams in the Claude apps gateway, enabling cross-AWS-account role assumption and per-developer cost attribution.
- Added an `effort` configuration option for custom mods.

### v2.1.317
- Added warnings in `/schedule` for cloud scheduled tasks that automatically acquire unrequested connectors, with instructions for removal.
- Added pre-execution checks that prompt users before web or shell tool calls send their account email address to external networks.
- Added `onFailure: "block"` configuration for Agent SDK hooks.

## 3. Hot Issues
1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) [FEATURE] Support multiple Connector accounts (same connector, different accounts)**  
   299 comments | 453 👍  
   The longest-running and most upvoted request: users want to connect multiple accounts for the same connector (e.g., multiple GitHub or Slack workspaces) in Claude and Claude Code on the web. This is a top priority for teams managing multiple workspaces or personal/business account splits.

2. **[#79305](https://github.com/anthropics/claude-code/issues/79305) [FEATURE] Desktop app: support custom themes / accent colors**  
   30 comments | 92 👍  
   Users request theme/accent color parity with the CLI, noting that the default dark mode makes Claude Desktop indistinguishable from other apps on multi-monitor setups.

3. **[#102828](https://github.com/anthropics/claude-code/issues/102828) [BUG] Remote Control: start_session rejects "user_asked" for mobile human messages**  
   15 comments | 10 👍  
   A blocking bug for cross-device workflows: mobile-sent human messages are rejected by the `start_session` API even when marked as user-initiated.

4. **[#100212](https://github.com/anthropics/claude-code/issues/100212) [MODEL] Safety classifier withholds responses during legitimate healthcare documentation work**  
   9 comments | 1 👍  
   Users report the safety classifier incorrectly blocks valid healthcare documentation tasks, raising concerns about false positives for domain-specific legitimate work.

5. **[#85138](https://github.com/anthropics/claude-code/issues/85138) Skills need frontmatter opt-out from post-compaction replay**  
   6 comments | 1 👍  
   Critical reliability issue: post-compaction skill replay re-executes stale `$ARGUMENTS`, leading to unintended actions like accidental `git push`. Users need an opt-out flag for skills.

6. **[#82144](https://github.com/anthropics/claude-code/issues/82144) Post-compaction skill re-injection costs ~4x the compaction summary**  
   6 comments | 0 👍  
   Performance issue: full skill bodies are re-injected after compaction, consuming far more context than the compaction summary itself and degrading session efficiency.

7. **[#83756](https://github.com/anthropics/claude-code/issues/83756) [BUG] Large MCP `ToolSearch` batches invalidate the whole conversation cache**  
   5 comments | 3 👍  
   Contradicts documented tool-search guarantees: large batches of MCP tool searches invalidate the entire conversation cache, leading to slower response times and increased token usage.

8. **[#104925](https://github.com/anthropics/claude-code/issues/104925) [BUG] Bypass mode: false "dangerous rm" prompt stalls background subagents**  
   5 comments | 3 👍  
   In bypass mode (`--dangerously-skip-permissions`), commands with nested subshells (no actual `rm` operation) trigger false dangerous operation prompts, stalling background subagent workflows.

9. **[#108048](https://github.com/anthropics/claude-code/issues/108048) [BUG] Opus 5.5 `reasoning_extraction` refuses to read user's own notes file**  
   4 comments | 0 👍  
   Opus 5.5-specific bug: the model refuses to read user-owned local notes files, with behavior tied to user-scope rules files; not observed on Opus 4.8.

10. **[#108238](https://github.com/anthropics/claude-code/issues/108238) [BUG] Desktop side sessions cause cost spikes and macOS kernel panic**  
    2 comments | 0 👍  
    Regression after side sessions launched: nested side sessions + automatic parent wakes + per-session MCP servers lead to weekly usage limits being exhausted in ~1 day, plus macOS watchdog kernel panics.

## 4. Key PR Progress
1. **[#107768](https://github.com/anthropics/claude-code/pull/107768) [CLOSED] mods: add the privacy mod**  
   Publishes the source code for Claude Code's built-in `privacy` mod (which blocks shell calls containing signed-in account email addresses) under `mods/privacy` for transparency and customization.

2. **[#37084](https://github.com/anthropics/claude-code/pull/37084) [OPEN] fix: add retry, timeout, and rate-limit handling to GitHub API scripts**  
   Extracts a shared `githubRequest` utility with retry, timeout, and rate-limit handling, migrating 4 existing GitHub API scripts to eliminate duplicate code, plus 52 new unit/integration tests.

3. **[#95698](https://github.com/anthropics/claude-code/pull/95698) [OPEN] fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with quoted path**  
   Fixes broken plugin hooks for `ralph-wiggum` and output-style plugins by wrapping unquoted script paths in `bash` with proper quoting, resolving execution failures.

4. **[#106972](https://github.com/anthropics/claude-code/pull/106972) [OPEN] Run dedupe agents in the foreground**  
   Sets `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` for issue dedupe steps to prevent agents from being cut off when Claude ends its turn prematurely.

5. **[#58673](https://github.com/anthropics/claude-code/pull/58673) [OPEN] s**  
   Draft PR with no description; status unclear.

6. **[#106583](https://github.com/anthropics/claude-code/pull/106583) [CLOSED] Move issue triage and dedupe workflows to Claude Sonnet 5.5**  
   Updates three internal automation workflows (issue triage, issue dedupe, and @claude bot triggers) from older Opus/Sonnet versions to Claude Sonnet 5.5.

## 5. Hot Discussions
No discussion data was provided in the source dataset.

## 6. Feature Request Trends
- **Cross-account connector support**: The #1 requested feature, driven by users managing multiple workspaces or personal/business account splits.
- **Desktop UI parity with CLI**: Custom themes, responsive chat pane sizing, and other CLI UI features are high on desktop user wishlists.
- **Skill customization controls**: Users want frontmatter flags to opt out of post-compaction replay and adjust skill context injection behavior.
- **Transparent model roadmap**: Developers are asking for advance notice of model alias changes and rough release timelines to plan testing and migrations.

## 7. Developer Pain Points
- **Opus 5.5 reliability issues**: Multiple reports of unexpected behavior, including false safety classifier blocks, incorrect file read refusals, and inaccurate work verification claims.
- **Context efficiency problems**: Post-compaction skill re-injection and MCP `ToolSearch` cache invalidation lead to excessive token usage and degraded performance.
- **Permission system edge cases**: False dangerous operation prompts in bypass mode, unintended tool access via scheduled tasks, and email leakage risks in web/shell calls.
- **Desktop performance regressions**: Side session nesting causes cost spikes and system instability on macOS, while Windows/WSL integration has broken MCP configuration paths.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
## Date: 2026-11-09

---

## 1. Last 7 Days' Highlights
This week’s Codex activity centers on stabilizing desktop/TUI workflows, reducing friction around session history, MCP startup, and Windows-specific UX. Community attention remains high on long-standing reliability gaps, while merged PRs show active investment in command-center search, transcript completeness, navigation, and model/provider configuration.

## 2. Releases
Latest releases in the last 7 days:
- `rust-v0.169.0-alpha.3`: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3
- `rust-v0.169.0-alpha.2`: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2
- `rust-v0.168.0-alpha.7`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7
- `rust-v0.168.0-alpha.6`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6
- `rust-v0.168.0-alpha.3`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3
- `rust-v0.168.0-alpha.2`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.2
- `rust-v0.168.0-alpha.1`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.1

Only `rust-v0.167.0` includes visible release notes: https://github.com/openai/codex/releases/tag/rust-v0.167.0
### `rust-v0.167.0`
- Added `codex agents --no-daemon` to open the agent command center.
- Added unread-result indicators in the command center and session picker.
- Added backend switching from the terminal session picker while preserving drafts.

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|---|---|---|
| [#59895 Windows: local projects disappear after app update and switching back to personal account](https://github.com/openai/codex/issues/59895) | High-impact Windows desktop regression after app update and account switching. | 34 comments, 11 reactions; currently the most active issue. |
| [#24948 Codex session logs grow to 700MB–2GB from repeated compaction history and raw tool output](https://github.com/openai/codex/issues/24948) | Long-running CLI sessions can create very large local log/history artifacts. | 31 comments; strong signal around storage/context-management pain. |
| [#15975 Codex extension stuck on loading/logo screen after VS Code update on Windows](https://github.com/openai/codex/issues/15975) | Editor-integration breakage blocks a major workflow path. | 17 comments, 10 reactions. |
| [#21638 Codex desktop terminal keyboard paste inserts text twice on Windows](https://github.com/openai/codex/issues/21638) | Direct productivity and input-correctness issue in desktop terminal. | 10 comments, 7 reactions. |
| [#24552 Can’t enter alternate screen buffer](https://github.com/openai/codex/issues/24552) | TUI compatibility issue affecting terminal workflow expectations. | 7 comments, 5 reactions. |
| [#38839 TUI visibly replays the entire transcript after deferred resize reflow on Windows Terminal](https://github.com/openai/codex/issues/38839) | Long sessions become visually noisy and harder to use. | 7 comments, 4 reactions; closed. |
| [#19260 Feature request: add setting to control command/tool output folding](https://github.com/openai/codex/issues/19260) | Users want more control over how long command/tool output is displayed. | 7 comments, 21 reactions; strongest feature-request signal among issues. |
| [#48527 Make conversation name and ID easy to copy and show the name on exit](https://github.com/openai/codex/issues/48527) | Session identity matters for handoff, debugging, and resuming work. | 6 comments. |
| [#38923 Windows Terminal Preview duplicates non-ASCII input in Codex TUI under WSL](https://github.com/openai/codex/issues/38923) | International/WSL workflow correctness issue. | 6 comments; closed. |
| [#60193 Browser/computer control tools disappear between sessions despite authorization](https://github.com/openai/codex/issues/60193) | Computer-use reliability can burn usage without completing work. | 6 comments; newly filed this week. |

## 4. Key PR Progress
| PR | Feature / Fix |
|---|---|
| [#60320 Include older itemless Cloud failures in full transcripts](https://github.com/openai/codex/pull/60320) | Improves transcript hydration so older failed Cloud turns without items are not omitted from history. |
| [#60319 Improve side-chat discovery and navigation in the TUI](https://github.com/openai/codex/pull/60319) | Adds latest user-prompt previews in saved side-chat entries, with caching and refresh state. |
| [#60309 Defer executor readiness when prewarming a selected project](https://github.com/openai/codex/pull/60309) | Cloud thread prewarm now sets deferred environment readiness when a project is selected. |
| [#60286 Search task history from the command center](https://github.com/openai/codex/pull/60286) | Command-center search now scans broader history instead of only already-loaded tasks. |
| [#60280 Fix MCP startup tracking when attaching to shared app servers](https://github.com/openai/codex/pull/60280) | Prevents TUI busy-state hangs when clients attach to shared app servers and miss MCP startup notifications. |
| [#31045 Defer MCP auth discovery until startup failure](https://github.com/openai/codex/pull/31045) | Optional HTTP MCP OAuth discovery is moved out of session initialization to avoid delaying thread creation. Still open. |
| [#60271 Keep the agents overview open when there is no chat to return to](https://github.com/openai/codex/pull/60271) | Improves navigation state so the overview does not incorrectly dismiss when there is no chat destination. |
| [#60270 Warn when a CLI model is absent from the ChatGPT model list](https://github.com/openai/codex/pull/60270) | Adds startup warning for mismatched CLI model overrides and ChatGPT model availability. |
| [#60186 Allow creating custom providers during sign-in](https://github.com/openai/codex/pull/60186) | Sign-in picker now supports creating custom providers/gateways without requiring a pre-existing saved configuration. |
| [#60181 Add keyboard and mouse navigation for sidebar tabs](https://github.com/openai/codex/pull/60181) | Sidebar tabs gain configurable keyboard actions and mouse-wheel navigation. |

## 5. Hot Discussions
### Ideas
- [#9618 How is there not a /rewind or /revert feature?](https://github.com/openai/codex/discussions/9618)
  - Community wants undo/rewind capability for agent changes, comparing Codex unfavorably with OpenCode and Claude Code.
  - 25 comments, 154 reactions; by far the strongest product-idea signal this week.
- [#21742 Windows Codex App: install location and storage control](https://github.com/openai/codex/discussions/21742)
  - Windows users want transparent control over install location and storage layout.
- [#27754 Experiment: a Codex plugin for reusable project guidance maps in AGENTS.md](https://github.com/openai/codex/discussions/27754)
  - Community exploring repository-local guidance maps to improve future session context.
- [#9230 Codex: a Higher-Level Visual Interface for AI-Driven Software Development](https://github.com/openai/codex/discussions/9230)
  - Users want more abstract, visual orchestration beyond raw code editing.
- [#45284 Optional persistent Codex session per GitHub pull request](https://github.com/openai/codex/discussions/45284)
  - Asks for one persistent review session per PR instead of fragmented context across mentions.

### Q&A
- [#33682 MCP bugs are systematically ignored - this is crazy](https://github.com/openai/codex/discussions/33682)
  - Users report serious MCP OAuth/tool-discovery bugs as production-blocking.
- [#52835 AI-assisted KPI management system: 4 months of development and still no working application](https://github.com/openai/codex/discussions/52835)
  - Non-developer user seeking practical guidance on using AI coding tools for business applications.
- [#2138 full-auto / bypass not working?](https://github.com/openai/codex/discussions/2138)
  - Users are looking for less approval friction during writes and patch execution.
- [#57675 Pro account: 'Selected model is at capacity' on every model for 7 days](https://github.com/openai/codex/discussions/57675)
  - Account-level capacity/availability issue reported as completely blocking.
- [#58235 Will Codex be rewritten from Rust to TypeScript?](https://github.com/openai/codex/discussions/58235)
  - Downstream fork maintainer asking about architecture direction.

### Show and tell
- [#55421 TAHU: seeking developer trials for safe email/agent workflow](https://github.com/openai/codex/discussions/55421)
- [#58849 code-review-skill: evidence-backed code review for Codex with a JSON merge gate](https://github.com/openai/codex/discussions/58849)
- [#60297 Better Codex Context (BCC) plugin for context management](https://github.com/openai/codex/discussions/60297)
- [#60264 Publish long Codex reports as web pages via remote MCP](https://github.com/openai/codex/discussions/60264)
- [#60116 Pushary: approve Codex actions from your phone](https://github.com/openai/codex/discussions/60116)

## 6. Feature Request Trends
- **Undo / rewind / revert agent changes.** Discussion #9618 is the clearest trend: users want reliable rollback without requiring commits between changes.
- **Better session history control.** Requests include easier conversation name/ID copying, stronger history search, persistent PR sessions, and less transcript replay noise.
- **Output and context presentation controls.** Users want folding preferences, context-window visibility, and better handling of long command/tool output.
- **Windows usability controls.** Install location, storage, account-switching stability, terminal paste correctness, and extension reliability remain recurring asks.
- **Custom provider/model flexibility.** Merged PRs and open discussions indicate demand for custom gateways, model override safety, and clearer provider configuration.

## 7. Developer Pain Points
- **Windows desktop and terminal instability.** Multiple high-engagement issues involve missing projects after updates, VS Code extension loading stalls, doubled paste, and transcript replay behavior.
- **Session/log growth and context fatigue.** Very large logs, compaction history, long tool output, and repeated transcript reflows make long sessions harder to manage.
- **MCP reliability and startup friction.** Users complain about OAuth/tool-discovery bugs, slow startup, shared-server state issues, and MCP configurations blocking thread creation.
- **Approval friction and automation limits.** Users want lower-friction execution, mobile approvals, and better bypass behavior for trusted workflows.
- **Quota, capacity, and cost predictability.** Recent discussions suggest uncertainty around limits, account-level capacity errors, and token/quota transparency.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-11-09

## 1. Last 7 Days' Highlights
The past week focused on incremental stability improvements for Gemini CLI's subagent system, alongside targeted platform fixes for Windows environments and model resolution edge cases. The community’s highest-priority conversations center on resolving subagent reliability bugs, with ongoing exploration of AST-aware codebase tooling to enhance agent efficiency.
## 2. Releases
### v0.68.0-preview.0
- Included changelogs for v0.67.0-preview.0 and v0.66.0
- Updated README documentation to clarify Gemini CLI scope, limitations, and tool launch behavior
### v0.67.0
- Included changelog for v0.65.0
- Bumped version to 0.67.0-nightly.20261020.gb041de017
- Included changelog for v0.66.0-preview
### v0.67.0-nightly.20261104.g89e9d25d6
- Fixed stream failures during extension release downloads [#30100](https://github.com/google-gemini/gemini-cli/pull/30100)
- Preserved explicit `gemini-2.5-flash` model selection in dynamic model resolution
### v0.67.0-nightly.20261103.g0ac57c029
- Fixed interrupted Whisper model downloads being incorrectly marked as installed [#30058](https://github.com/google-gemini/gemini-cli/pull/30058)
## 3. Hot Issues
1.  **#22323 Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**
    - URL: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - Why now? Updated 2026-11-09, this bug misrepresents interrupted subagent runs as successful completions, breaking user trust in task outcome reporting.
    - Reaction: 13 comments, 2 upvotes; marked as p1 priority, requires retesting.
2.  **#19873 Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**
    - URL: [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    - Why now? Updated 2026-11-09, this proposal aims to unlock Gemini 3 models' native bash capabilities while maintaining security.
    - Reaction: 9 comments, 1 upvote; categorized as large-effort p2 enhancement.
3.  **#21409 Generalist agent hangs**
    - URL: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - Why now? Updated 2026-11-09, this critical bug causes indefinite hangs even for simple tasks like folder creation, blocking core agent functionality.
    - Reaction: 8 comments, 8 upvotes; p1 priority, requires retesting.
4.  **#22745 Assess the impact of AST-aware file reads, search, and mapping**
    - URL: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - Why now? Updated 2026-11-09, this epic tracks research into AST tooling to reduce token usage and improve code navigation precision.
    - Reaction: 7 comments, 1 upvote; p2 feature request.
5.  **#21968 Gemini does not use skills and sub-agents enough**
    - URL: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - Why now? Updated 2026-11-09, this bug reports agents fail to automatically leverage custom skills/subagents even for highly relevant tasks.
    - Reaction: 7 comments; p2 priority, requires retesting.
6.  **#22267 Browser Agent ignores settings.json overrides (e.g., maxTurns)**
    - URL: [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    - Why now? Updated 2026-11-09, this bug makes user configuration for browser agents ineffective, breaking expected behavior.
    - Reaction: 5 comments; p2 priority.
7.  **#22232 Enhance browser_agent resilience: Automatic session takeover and lock recovery**
    - URL: [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
    - Why now? Updated 2026-11-09, this feature request addresses the browser agent's fail-fast behavior for locked profiles, reducing user friction.
    - Reaction: 4 comments; p3 customer feature request.
8.  **#21983 browser subagent fails in wayland**
    - URL: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - Why now? Updated 2026-11-09, this p1 bug breaks browser subagent functionality entirely on Wayland systems.
    - Reaction: 4 comments, 1 upvote; requires retesting.
9.  **#20079 ~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink**
    - URL: [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
    - Why now? Updated 2026-11-09, this bug breaks symlink-based agent organization workflows for power users.
    - Reaction: 4 comments; p2 priority, needs additional information.
10. **#24246 Gemini CLI encounters 400 error with > 128 tools**
    - URL: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - Why now? Updated 2026-11-09, this bug causes hard failures when too many tools are enabled, limiting extensibility.
    - Reaction: 3 comments; p2 priority, needs additional information.
## 4. Key PR Progress
1.  **#30090 ci(chained_e2e): don't expose GEMINI_API_KEY to fork-controlled code**
    - URL: [#30090](https://github.com/google-gemini/gemini-cli/pull/30090)
    - Status: Open
    - Why relevant: Mitigates security risks in E2E CI workflows by gating secret access to trusted triggering runs, preventing fork code from accessing API keys.
2.  **#30082 feat(core): add model.requestTimeoutMs setting for the API headers timeout**
    - URL: [#30082](https://github.com/google-gemini/gemini-cli/pull/30082)
    - Status: Open
    - Why relevant: Adds user-configurable API timeout for long-running model requests, replacing a hardcoded 60s limit that aborted valid long-thinking operations.
3.  **#30095 fix: prevent Windows git diff permission bypass**
    - URL: [#30095](https://github.com/google-gemini/gemini-cli/pull/30095)
    - Status: Open
    - Why relevant: Closes a critical Windows security loophole where dangerous Git arguments could be misclassified as safe read-only operations.
4.  **#29946 fix(agents): isolate remote conversations by parent session and endpoint**
    - URL: [#29946](https://github.com/google-gemini/gemini-cli/pull/29946)
    - Status: Closed
    - Why relevant: Prevents cross-session conversation identifier leakage in remote agent calls, fixing state pollution between independent user sessions.
5.  **#29942 fix(core): scan complete plan content and report read failures**
    - URL: [#29942](https://github.com/google-gemini/gemini-cli/pull/29942)
    - Status: Closed
    - Why relevant: Fixes plan file parsing that rejected valid content with leading whitespace, and properly reports unreadable files instead of misclassifying them as empty.
6.  **#29935 fix(cli): preserve whitespace in referenced file content**
    - URL: [#29935](https://github.com/google-gemini/gemini-cli/pull/29935)
    - Status: Closed
    - Why relevant: Preserves indentation and newlines in `@file` included content, preventing model context corruption from trimmed whitespace.
7.  **#29931 fix(cli): expand Windows home-relative paths**
    - URL: [#29931](https://github.com/google-gemini/gemini-cli/pull/29931)
    - Status: Closed
    - Why relevant: Fixes resolution of `~\` prefixed Windows paths for custom policies and extensions, making Windows path handling consistent with POSIX systems.
8.  **#29929 fix: show accurate output limits in model list**
    - URL: [#29929](https://github.com/google-gemini/gemini-cli/pull/29929)
    - Status: Closed
    - Why relevant: Corrects misleading model output limit display, showing the actual 65,536 token limit for Gemini 2.5 Pro/Flash instead of an incorrect 8,192 value.
9.  **#29924 fix(cli): preserve Unicode in session previews**
    - URL: [#29924](https://github.com/google-gemini/gemini-cli/pull/29924)
    - Status: Closed
    - Why relevant: Fixes session previews stripping non-ASCII text, making session history usable for international users.
10. **#27423 feat(core): add configurable per-tool-call timeout (tools.callTimeout)**
    - URL: [#27423](https://github.com/google-gemini/gemini-cli/pull/27423)
    - Status: Open
    - Why relevant: Adds a global timeout for individual tool calls (notably shell commands), preventing unbounded execution times that block agent workflows.
## 5. Feature Request Trends
- Agent reliability and self-sufficiency: Requests for better subagent error reporting, automatic skill/subagent usage, and reduced hangs dominate feature discussions, focused on making agents more predictable and less dependent on manual user intervention.
- AST-aware code tooling: Multiple linked issues explore using AST parsing to reduce token bloat, improve code navigation precision, and cut down on misaligned file reads during agent operations.
- Platform-specific robustness: Windows-focused requests for path handling, Git SSH compatibility, and permission validation, alongside Linux Wayland support for browser agents, highlight cross-platform consistency as a key priority.
- Configurable agent behavior: Requests for adjustable timeouts, session resilience for browser agents, and granular tool scoping reflect user demand for greater control over agent execution parameters.
## 6. Developer Pain Points
- Subagent instability: Recurring reports of subagent hangs, false success reporting on interrupted runs, and failure to auto-use available skills erode trust in agent automation.
- Platform inconsistencies: Windows users face broken path resolution, Git SSH misconfiguration, and security bypasses, while Linux Wayland users experience broken browser agent functionality.
- Unbounded execution: Long-running tool calls and API requests have no configurable timeout by default, leading to indefinite hangs that require manual intervention.
- Configuration gaps: Browser agents ignore user settings overrides, and symlink-based agent organization workflows do not work as expected.
- Token and context bloat: Unoptimized file reads and tool listing lead to excessive token usage and 400 errors when too many tools are enabled.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date**: 2026-11-09

## 1. Last 7 Days' Highlights
In the past week, Copilot CLI shipped multiple pre-release updates focused on cross-terminal compatibility, sandbox configuration flexibility, and bug fixes for MCP token management and session stability. Key user-facing improvements include native support for terminal program status reporting, multiline input workflow refinements, and Windows-specific MCP sign-in optimizations. The community is actively advocating for better keyboard input customization, MCP auth reliability, and long-running session stability.

## 2. Releases
### v1.0.108-1
**Fixed**
- PDF attachments on Grok 4.7/4.6 now fall back to file references instead of failing requests
- Sandbox mode: Local MCP servers restart after `/cd` to inherit new directory permission rules

### v1.0.108-0
**Added**
- `sandbox.userPolicy.filesystem.enumeratePaths` setting for Windows enumerate-only directory grants
- `/index` commands and default managed shared tgrep indexing for eligible repositories
**Improved**
- Built-in assistant now answers questions about Copilot CLI behavior

### v1.0.107 (2026-11-06)
**Added**
- Rex terminal inline image rendering via Kitty direct placements
- `/code` command to open current session in VS Code
- Fusion tier configuration setting in `copilot config`
**Improved**
- `/settings` now opens a unified dashboard with global search across settings and local resources

### v1.0.106 (2026-11-05)
- Mirrors v1.0.107 feature set for stable channel rollout

### v1.0.106-9
**Fixed**
- `apply_patch` line count reporting corrected to show actual modified lines
- `copilot config` now warns on invalid `settings.json` value types instead of ignoring entire file

### v1.0.106-8
**Improved**
- Windows local model downloads now auto-install llama.cpp with progress indicators
- `/memory` command displays status when repository memory scope is unavailable
**Fixed**
- Stderr warning added when `-p --agent` uses invalid frontmatter keys

### v1.0.106-7
**Added**
- Updates to v1.0.107 core features
**Improved**
- Built-in browser-use plugin updated to v0.1.0 with improved setup

### v1.0.106-6
**Added**
- Unified `/settings` dashboard rollout
- Interactive CLI now reports program status to supporting terminals (OSC 7501)
**Improved**
- User-only MCP content no longer sent to agents

### v1.0.106-5
**Fixed**
- `includeCoAuthoredBy: false` now respected in ACP mode
- Targeted `/settings` commands immediately show selected configuration

### v1.0.106-4
**Fixed**
- Empty sessions no longer appear in session picker
- `@file` mentions wrapped in punctuation/quotes now correctly attach files

## 3. Hot Issues
1. **#2776 [OPEN] [area:input-keyboard] Shift+Enter submits prompt instead of inserting new line**
   - Link: [github/copilot-cli#2776](github/copilot-cli/issues/2776)
   - Why it matters: Breaks standard terminal multiline input workflow, frustrating users composing complex prompts.
   - Community reaction: 9 comments, 5 upvotes; aligned with duplicate issue #3768 reporting identical pain point.

2. **#5112 [CLOSED] [area:terminal-rendering] Support OSC 7501 program status in interactive CLI**
   - Link: [github/copilot-cli#5112](github/copilot-cli/issues/5112)
   - Why it matters: Enables terminal emulators to display agent state (working/blocked/idle), improving visibility into long-running tasks.
   - Community reaction: 7 comments, 20 upvotes; feature delivered in v1.0.106-6.

3. **#5236 [OPEN] [area:platform-windows, area:mcp] Windows: Entra broker token cache stays empty after MCP sign-in**
   - Link: [github/copilot-cli#5236](github/copilot-cli/issues/5236)
   - Why it matters: Forces repeated MCP server authentication prompts for Windows enterprise users.
   - Community reaction: 6 comments; paired with macOS equivalent issue #5250.

4. **#508 [OPEN] Support Git Bash on Windows**
   - Link: [github/copilot-cli#508](github/copilot-cli/issues/508)
   - Why it matters: Windows developers relying on Git Bash instead of PowerShell/PWSH face compatibility gaps.
   - Community reaction: 4 comments, 7 upvotes; long-standing request since 2025.

5. **#5219 [OPEN] [area:agents, area:models] Session wedged: task subagent with unknown model id fails with prompt budget error**
   - Link: [github/copilot-cli#5219](github/copilot-cli/issues/5219)
   - Why it matters: Renders long interactive sessions completely unusable with no clear recovery path.
   - Community reaction: 4 comments; impacts power users running custom agent configurations.

6. **#4695 [OPEN] [area:authentication, area:mcp] MCP OAuth tokens not reliably reused across sessions**
   - Link: [github/copilot-cli#4695](github/copilot-cli/issues/4695)
   - Why it matters: Invalid cache-key entries force repeated re-authentication for HTTP MCP servers.
   - Community reaction: 4 comments, 2 upvotes; core pain point for MCP-dependent workflows.

7. **#3760 [CLOSED] [area:input-keyboard, area:platform-windows] Ctrl+Enter behavior mismatch with documentation**
   - Link: [github/copilot-cli#3760](github/copilot-cli/issues/3760)
   - Why it matters: Documentation vs. real behavior mismatch confuses Windows users on Git Bash.
   - Community reaction: 4 comments, 12 upvotes; resolved in latest pre-release.

8. **#5100 [OPEN] [area:sessions] Session event delivery fails permanently after 120s host-ack timeout**
   - Link: [github/copilot-cli#5100](github/copilot-cli/issues/5100)
   - Why it matters: Long-running sessions become unresponsive mid-task, requiring manual resume.
   - Community reaction: 3 comments; high impact for extended development workflows.

9. **#4977 [CLOSED] [area:platform-linux, area:installation] Bundled ripgrep crashes on 16KB-page ARM64 kernels (Asahi Linux)**
   - Link: [github/copilot-cli#4977](github/copilot-cli/issues/4977)
   - Why it matters: Breaks core search functionality for Apple Silicon Linux users.
   - Community reaction: 3 comments; platform-specific critical fix.

10. **#5320 [OPEN] [triage] Support OSC 7501 agent-status reporting for herdr-app/herdr-core**
    - Link: [github/copilot-cli#5320](github/copilot-cli/issues/5320)
    - Why it matters: Extends terminal status integration to third-party terminal emulators.
    - Community reaction: 3 comments, 11 upvotes; builds on closed issue #5112.

## 4. Key PR Progress
Only 4 PRs were updated in the last 7 days, so all are highlighted:
1. **#5373 [OPEN] docs: add Simplified Chinese Copilot CLI README**
   - Link: [github/copilot-cli#5373](github/copilot-cli/pull/5373)
   - Description: Adds full Simplified Chinese translation of the README with cross-language navigation links, expanding accessibility for Chinese-speaking developers.

2. **#5186 [OPEN] Update feature_request.yml**
   - Link: [github/copilot-cli#5186](github/copilot-cli/pull/5186)
   - Description: Refines feature request issue template to improve triage efficiency.

3. **#5339 [OPEN] [Feature] Add read-only agent monitor TUI (Graph + Timeline)**
   - Link: [github/copilot-cli#5339](github/copilot-cli/pull/5339)
   - Description: Introduces an independent terminal viewer for inspecting local Copilot CLI agent hierarchies, task wait times, and execution timelines.

4. **#5321 [OPEN] Add ADJU PHONE CAMERA Windows app**
   - Link: [github/copilot-cli#5321](github/copilot-cli/pull/5321)
   - Description: Unrelated third-party contribution adding a Windows desktop app for using mobile devices as local webcams via WebRTC.

## 6. Feature Request Trends
Top requested directions:
1. **Terminal ecosystem integration**: Native OSC 7501 program status support (issues #5112, #5320) and inline image rendering improvements.
2. **Input & usability refinements**: Customizable multiline keyboard shortcuts (Shift+Enter/Ctrl+Enter behavior fixes) and conversation scrollback organization (issue #4995).
3. **MCP reliability**: Cross-session token reuse, Entra broker authentication fixes for Windows/macOS, and enterprise MCP registry access (issues #4695, #5236, #5250, #4378).
4. **Platform support**: Git Bash compatibility on Windows (issue #508) and 16KB-page ARM64 Linux support (issue #4977).
5. **Observability**: Read-only agent monitoring TUI to track task execution hierarchies (PR #5339).

## 7. Developer Pain Points
Recurring frustrations:
1. **Keyboard input inconsistency**: Misaligned Shift+Enter/Ctrl+Enter behavior across platforms breaks intuitive multiline prompt composition (issues #2776, #3760, #3768).
2. **MCP authentication friction**: Repeated sign-in prompts, empty token caches, and invalid cache-key entries disrupt MCP server workflows (issues #4695, #5236, #5250).
3. **Long-running session instability**: Wedged sessions, event delivery timeouts, and subagent model fallback errors render extended interactive sessions unusable (issues #5100, #5219, #5380).
4. **Platform-specific compatibility gaps**: Windows Git Bash support, ARM64 Linux page size crashes, and sandbox permission mismatches limit cross-platform usability (issues #508, #4977, #5368).
5. **Permission configuration opacity**: Command approval rules with spaces fail to work as documented, requiring repeated manual approvals (issue #4150).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest (2026-11-09)

## 1. Last 7 Days' Highlights
This week, OpenCode released **v2.2.6**, introducing shared MCP connections to reduce process overhead and improve startup speed across projects, alongside GUI plugin enhancements and new slots. Concurrent development focused on fixing critical V2 subagent lifecycle bugs, Windows platform compatibility issues, and free-tier usage limit anomalies that are dominating user feedback.

## 2. Releases
- **v2.2.6**: Adds shared MCP connection pooling to share connections across projects with identical setups, cutting down redundant processes and accelerating initialization. Also includes GUI plugin theme support and new plugin slots.
- **process-daemon v0.5.0 / opencode-pty 0.5.0**: Published as `@opencode/pty@0.5.0` (protocol version 8) to npm.

## 3. Hot Issues
1.  **[#59387] Free tier usage limit anomalies**: The most active issue with 333 comments, tracking widespread reports of incorrect free-tier limit triggers, failed resets, and desktop client version compatibility errors. This is the top pain point for free users right now.
2.  **[#9541] Direct file editing for OpenCode Desktop**: A closed feature request with 17 comments asking for native file editing capabilities in the desktop app, addressing a core usability gap.
3.  **[#48826] V2 subagent early completion bug**: 14 comments on a critical bug where subagents with pending background shell commands or child subagents are marked completed prematurely, with results never collected.
4.  **[#62797] TUI Plan mode reminder persistence**: 9 comments on a bug where Plan mode reminders keep appearing after switching agents, disrupting implementation workflows.
5.  **[#23655] Responses API support for Go service**: A long-running feature request (9 comments, 31 thumbs up) asking to add Responses API support to the OpenCode Go service.
6.  **[#59461] Desktop startup crash on older CPUs**: 7 comments reporting that the new Bun runtime's SSE4.2 instruction requirement causes immediate startup failure (error 134) on pre-SSE4.2 processors.
7.  **[#62559] Windows path corruption for tool arguments**: 6 comments on a bug where Windows backslash paths (e.g., `X:\workspace\`) are intermittently corrupted, stripping drive letters and backslashes before reaching tools.
8.  **[#62800] Desktop fatal timeline row error**: 3 comments on a fatal error on Windows Desktop 2.2.6: "Expected a user-message timeline row", triggered when virtualized timeline rows change type, requiring app restart.
9.  **[#62556] Gemini cachedContent failure**: 3 comments on a bug where Gemini/Vertex API requests fail when `cachedContent` is set alongside system instructions or tools, violating API constraints.
10. **[#62213] Subagent permission override bug**: 7 comments (now closed) on a bug where built-in tester policy `edit * deny` rules appended after agent custom rules override allowed permissions, blocking legitimate subagent edits.

## 4. Key PR Progress
1.  **[#62802] Server agent workload benchmarking**: Refactors server code to benchmark three agent workload types and reduce redundant streaming work, improving performance measurement.
2.  **[#60506] Fix Unix backslash filename handling**: Corrects path normalization that incorrectly replaced backslashes (legal filename characters on Unix) with forward slashes, fixing glob/grep failures.
3.  **[#62806] Enhanced trace tagging**: Adds session, agent, and command tags to shell, tool, and model-stream spans for better observability and debugging.
4.  **[#62788] Claude plan usage reporting**: Implements reporting of Claude plan usage metrics to OpenCode Console for signed-in users.
5.  **[#62798] Model capability badges in picker**: Adds visual badges for input modalities (image/video/audio/PDF) and other capabilities in the `/models` picker across TUI and desktop/web apps.
6.  **[#62801] Console plugin refactor**: Simplifies the Console plugin's `ProviderRefresh` handling and implements a persistent `SharedCache` to reduce workarounds.
7.  **[#62760] Fix post-logout remote config persistence**: Prevents well-known remote config (providers, policies) from continuing to apply after user logout, resolving "ghost logged-in" states.
8.  **[#62796] Non-blocking server plugin loading**: Stops server request handlers from waiting on plugin loads, making catalog reads fully non-blocking and improving response latency.
9.  **[#62769] SQLite FTS5 session history index**: Adds an experimental background-maintained SQLite full-text search index for session history, laying groundwork for future search tools.
10. **[#62147] Robust file read behavior**: Makes `tail` reads start from the end of files, supports negative offsets, and suggests close filenames when files are missing, reducing agent retry cycles.

## 5. Hot Discussions
No discussion data was provided in the source material.

## 6. Feature Request Trends
- Direct desktop app file editing capabilities ([#9541])
- Responses API integration for the Go service ([#23655])
- Preserving selected tab model when switching between plan and build modes ([#54375])
- Session pinning for the experimental view ([#59906])
- Explicit failure for subagent follow-ups missing a `sessionID` to prevent accidental new agent creation ([#62793])

## 7. Developer Pain Points
- **Free-tier reliability**: Widespread incorrect limit triggers, failed resets, and version lockouts are the most common user frustration, concentrated in Issue [#59387].
- **V2 subagent lifecycle bugs**: Early completion of background tasks and restart recovery failures ([#48826], [#62792]) break long-running workflows.
- **Windows platform compatibility**: Path corruption ([#62559]), ACP session failures ([#62551]), and pwsh path space issues ([#62683]) create repeated friction for Windows users.
- **Legacy hardware support**: Desktop crashes on CPUs lacking SSE4.2 due to the new Bun runtime ([#59461]) exclude users with older machines.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

### 1. Last 7 Days' Highlights
The Pi project has rolled out **v1.5.0**, introducing extension update changelogs for better transparency. This week saw a strong focus on stability, cross-platform support (especially for Windows), and developer experience, with key improvements around TUI behavior, MCP integration, and performance optimization. Community contributions continued to refine core workflows, including fixes for context management, OAuth handling, and SDK customization.

---

### 2. Releases
- **v1.5.0** ([details](https://github.com/earendil-works/pi/releases/tag/v1.5.0))
  - New feature: **Extension update changelogs**. Users can now view what changed in installed extension packages on the next fresh launch after an update. Package authors can specify a custom changelog path, and a `collapseChangelog` option is available to condense the notices.

---

### 3. Hot Issues
Here are the most noteworthy issues from the past week, ranked by impact and community engagement:

1. **[#7547 [Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)**  
   A meta-issue gathering feedback on Windows usage. With 94 comments, it reflects a strong user base seeking better out-of-the-box Windows support. The maintainer wants to prioritize fixes and documentation based on real-world pain points.

2. **[#11021 openai: ChatGPT sign-in still uses 272K for GPT-6.1 Sol despite 500K account catalog](https://github.com/earendil-works/pi/issues/11021)**  
   Users report that Pi 1.3.0 underestimates the context window for `gpt-6.1-sol` when authenticated via ChatGPT, leading to premature compaction. This has 8 comments and 8 reactions, making it a high-impact issue for heavy GPT users.

3. **[#10862 [bug] Hardware cursor jumps to the wrong column while a mouse selection is active (1.2.0)](https://github.com/earendil-works/pi/issues/10862)**  
   A TUI bug where the hardware cursor misaligns during mouse selection. With 9 comments, it affects core usability for users who rely on mouse interactions in the terminal.

4. **[#10287 [bug] `getContextUsage()` massively overestimates context after retryable network error](https://github.com/earendil-works/pi/issues/10287)**  
   A critical bug where context usage spikes from ~42k to 330k tokens after a network failure, causing unnecessary compaction. Reported by 8 users, it undermines reliability in unstable network conditions.

5. **[#10162 [bug] Too many input images stop the agent task](https://github.com/earendil-works/pi/issues/10162)**  
   Users report that agent tasks fail when processing too many images. With 8 comments, it highlights a scaling limitation for multimodal workflows.

6. **[#11026 [durable] pi-durable: permanently delete a conversation from storage](https://github.com/earendil-works/pi/issues/11026)**  
   A feature request to add a `deleteConversation` method. With 5 comments and 4 upvotes, it addresses data lifecycle management in durable sessions.

7. **[#6415 [last-read, no-action] Move `lastChangelogVersion` from Config file](https://github.com/earendil-works/pi/issues/6415)**  
   Users want `lastChangelogVersion` moved out of the main config to reduce git noise when syncing dotfiles. Closed as “no action,” but it received 5 upvotes, indicating a common pain point.

8. **[#10187 [CLOSED] [no-action] Move `deviceId` out of the global settings](https://github.com/earendil-works/pi/issues/10187)**  
   Similar to #6415, users requested moving device-specific identifiers out of version-controlled configs. Closed but with 6 upvotes, it reflects broader dotfile management concerns.

9. **[#10585 bash temp-file stream errors still crash the whole process on 1.0.4 (ENOSPC on a full /tmp, EACCES)](https://github.com/earendil-works/pi/issues/10585)**  
   A stability issue where temp file errors (e.g., full `/tmp`) crash the agent. With 4 comments, it affects users on constrained systems.

10. **[#11919 [CLOSED] MCP reconnection blocks 2-4 minutes on servers that cannot connect (OAuth missing/expired)](https://github.com/earendil-works/pi/issues/11919)**  
   Users report long blocking times during MCP reconnection when servers are unauthenticated. Closed in the latest sweep, but it highlights integration friction.

---

### 4. Key PR Progress
Here are the most impactful pull requests merged or updated this week:

1. **[#11857 feat: prompt cache warming in p2](https://github.com/earendil-works/pi/pull/11857)**  
   Implements prompt cache warming to avoid re-sending full prompts after idle gaps. This saves significant cost (~$1,430/month in reported metrics) for users on Anthropic models.

2. **[#11934 tui: decode mintty LF as Shift+Enter](https://github.com/earendil-works/pi/pull/11934)**  
   Fixes Shift+Enter behavior in mintty (Windows terminal), improving keyboard navigation in transcript search.

3. **[#11904 Feat/custom system prompt preamble](https://github.com/earendil-works/pi/pull/11904)**  
   Allows SDK users to customize the system prompt preamble without losing default tool descriptions, rules, and docs.

4. **[#11920 fix(codemode): let scripts declare their own tools and console bindings](https://github.com/earendil-works/pi/pull/11920)**  
   Fixes a syntax error where codemode scripts that declare `tools` or `console` fail to run.

5. **[#11895 fix(coding-agent): match grep globs relative to path](https://github.com/earendil-works/pi/pull/11895)**  
   Corrects grep glob matching to use the specified `path` instead of the working directory, resolving file search inconsistencies.

6. **[#11896 fix(coding-agent): wait for image resize worker to terminate](https://github.com/earendil-works/pi/pull/11896)**  
   Prevents race conditions when processing multiple images by ensuring workers fully terminate before new ones start.

7. **[#11893 fix(ai): translate sampling reasoning_effort through thinkingLevelMap](https://github.com/earendil-works/pi/pull/11893)**  
   Ensures that `reasoning_effort` is properly mapped to model-specific parameters, preventing invalid values from reaching the API.

8. **[#11891 fix(ai): omit empty tools array for tool history on openai-completions](https://github.com/earendil-works/pi/pull/11891)**  
   Fixes a 400 error from vLLM 0.20+ by omitting `"tools": []` when no tools are present but tool history exists.

9. **[#11890 fix(tui): draw fullscreen Kitty images after the rows they cover on every terminal](https://github.com/earendil-works/pi/pull/11890)**  
   Improves inline image rendering in terminals like Orca and WezTerm by ensuring proper layering.

10. **[#11888 fix(coding-agent): record the live thinking level on the branch before each prompt](https://github.com/earendil-works/pi/pull/11888)**  
    Fixes stale thinking level restoration after branch navigation, ensuring consistent behavior across session resumes.

---

### 5. Hot Discussions
*(Grouped by category)*

#### Ideas
- **[#4444 Supporting the Agent Client Protocol (ACP)](https://github.com/earendil-works/pi/discussions/4444)**  
  A long-running proposal to adopt ACP as a standard for editor integration, reducing the need for Pi-specific RPC clients.

#### Q&A
- **[#11911 Pi vs OMP for research work (GPT/DeepSeek): scientific reasoning, experimental design, and token efficiency?](https://github.com/earendil-works/pi/discussions/11911)**  
  A user asks how Pi compares to Oh My Pi (OMP) for research tasks, sparking interest in use-case differentiation.
- **[#11404 offical pi code agent sandbox by docker?](https://github.com/earendil-works/pi/discussions/11404)**  
  Community confirms Docker images for sandboxing, with 3 comments and 2 upvotes.

#### Show and tell
- **[#11844 pi-mom-slack: a community Slack bot for pi 1.x](https://github.com/earendil-works/pi/discussions/11844)**  
  A new Slack bot integration that maps Pi sessions to Slack threads, with persistent working directories.
- **[#11930 Show & tell: Assistant UI adapter for Pi Durable](https://github.com/earendil-works/pi/discussions/11930)**  
  A React integration for Pi Durable, enabling transcript rendering and thread navigation in custom UIs.
- **[#11922 Show & tell: omp-web, a self-hosted browser workspace for Pi with a terminal and files](https://github.com/earendil-works/pi/discussions/11922)**  
  A web-based workspace for Pi, Claude Code, and Codex, allowing remote access from laptops or phones.
- **[#11912 Show & tell: agentswarm.space task-discovery skill for Pi](https://github.com/earendil-works/pi/discussions/11912)**  
  A Pi skill for finding and submitting public tasks via agentswarm.space.
- **[#11860 Show & tell: CaseClip — save a Pi mistake as a reviewable case card](https://github.com/earendil-works/pi/discussions/11860)**  
  A tool to capture and review agent errors for later analysis.
- **[#11722 Show & tell: OnlyClaws Android — give Pi a phone claw (live wallpaper, overlay, TTS via `js`)](https://github.com/earendil-works/pi/discussions/11722)**  
  An Android host that runs agent-pushed JS, turning a phone into a peripheral for Pi.

---

### 6. Feature Request Trends
- **Better Windows support**: Highlighted by #7547, users want smoother installation, bug fixes, and out-of-the-box compatibility.
- **Customizable SDK preamble**: [#11317](https://github.com/earendil-works/pi/issues/11317) and PR [#11904](https://github.com/earendil-works/pi/pull/11904) show demand for personalized agent identities without losing defaults.
- **Improved MCP and OAuth handling**: Issues like #11918 and #11919 indicate a need for more robust MCP integration, especially around session persistence and reconnection.
- **Context and memory management**: Requests like [#11026](https://github.com/earendil-works/pi/issues/11026) (delete conversation) and [#11925](https://github.com/earendil-works/pi/issues/11925) (clear context command) reflect users seeking finer control over session state.
- **Config and dotfile hygiene**: [#6415](https://github.com/earendil-works/pi/issues/6415) and [#10187](https://github.com/earendil-works/pi/issues/10187) show users want non-essential state moved out of version-controlled configs.

---

### 7. Developer Pain Points
- **Unstable network behavior causing context spikes**: [#10287](https://github.com/earendil-works/pi/issues/10287) shows that transient network errors can severely degrade context tracking.
- **Windows-specific bugs**: From cursor misalignment (#10862) to console shutdown issues (PR #11889), Windows users face consistent friction.
- **Temp file and disk space crashes**: [#10585](https://github.com/earendil-works/pi/issues/10585) highlights unhandled I/O errors that crash the agent.
- **MCP integration friction**: [#11918](https://github.com/earendil-works/pi/issues/11918) and [#11919](https://github.com/earendil-works/pi/issues/11919) show that OAuth and reconnection flows are not yet smooth.
- **TUI inconsistencies**: From Shift+Enter not working (#4918) to paste marker corruption (#11923), terminal UX remains a focus area for polish.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-11-09

## 1. Last 7 Days' Highlights
This week saw the stable release of Qwen Code v0.27.0, introducing enhanced multi-tasking for managed agent sessions with parallel child question handling and draft isolation. The project also shipped incremental SDK updates for both TypeScript and Java, alongside a desktop v0.27.0 release focused on channel reliability and CI hardening. Community effort remains heavily weighted toward resolving CI pipeline instability and expanding Web Shell functionality.

## 2. Releases
Below are the most significant releases from the past week:
- **sdk-typescript-v0.1.30**: SDK TypeScript update bundling CLI v0.27.0, built from the same release branch. [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.30)
- **v0.27.0**: Stable release featuring managed-agent session improvements that support multiple parallel child questions, with independent drafts and error separation per task. [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0)
- **desktop-v0.27.0**: Desktop release focused on fixing GitHub inbound channel recovery logic after failed reads and hardening core renewal tests. [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.0)
- **v0.26.9**: Stable patch release adding skill ZIP upload support, daemon APIs, TypeScript SDK integration, and bulk skill activation with recovery protections. [GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9)

## 3. Hot Issues
The most impactful issues updated in the last week include:
1. **#14724 - Main CI failure: Managed Agent gate (no test identified)**: A long-standing open bug with 277 comments, tracking recurring CI pipeline failures where the managed agent gate does not report a specific failing test. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/14724)
2. **#1377 - API Error: 400 "qwen3-coder:30b" does not support thinking**: A closed user-reported bug where Ollama-hosted qwen3-coder:30b throws a 400 error when the client attempts to use thinking mode. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/1377)
3. **#16346 - Main CI failure: Managed Agent gate (ClassSizeRatchetTest)**: Open CI bug tracking a failing Java SDK test enforcing production class size limits. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16346)
4. **#16505 - E2E Tests failure: interactive ink-agent-loop-parity**: Open provisional E2E test failure for write approval flow parity between interactive agent loops. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16505)
5. **#15697 - Flaky Web Shell history-viewport smoke test**: P2 priority flaky test issue where the 200-record scroll smoke test exceeds its 120s timeout budget on unrelated PRs. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/15697)
6. **#16259 - User messages buried under system reminders**: P2 bug where large system/memory catalog reminders push actual user task instructions out of the model's visible context, leading to "no task found" responses. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16259)
7. **#15327 - Unified agent loop across all surfaces**: P1 feature request to run every Qwen Code surface on a single shared agent loop implementation in `packages/core`. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/15327)
8. **#16683 - Desktop 0.27 fails on Intel x64 Mac**: P1 platform bug where the v0.27 desktop build crashes on Intel Macs with a bundled runtime fatal error. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16683)
9. **#16689 - Web Shell clears transcript during session recovery**: P3 bug where Web Shell briefly blanks the visible transcript while resyncing a session event stream. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16689)
10. **#12113 - ACP reports end_turn after truncated responses**: P2 integration bug where ACP clients receive `end_turn` stop reason even when the model output is truncated by token limits. [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/12113)

## 4. Key PR Progress
Notable pull requests updated in the past week:
1. **#16628 - Fix CI: self-heal ephemeral runner slots**: CI fix that recovers ephemeral runner slots wedged by orphaned Docker resource piles by sweeping unclaimed leftover resources. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16628)
2. **#16528 - Web Shell: resume interrupted turns on session load**: Feature that automatically resumes persisted interrupted agent turns when a session loads, instead of leaving them idle behind a manual Continue button. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16528)
3. **#16324 - Web Shell: reuse host shell chrome for managed sessions**: UI improvement that lets managed sessions inherit the host shell's header styling instead of rendering a duplicate managed session chrome. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16324)
4. **#16656 - Serve: drain bound-PR watch pending transitions**: Daemon feature that delivers detected PR state/CI/conflict transitions to bound sessions via a new drain pipeline behind an off switch. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16656)
5. **#16075 - Fix permissions: match amend invocations instead of raw text**: Security fix that updates the AUTO-mode amend guard to parse shell invocations instead of scanning raw command text for git commit patterns. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16075)
6. **#16697 - Deflake temp-name watcher and auto-open disarm tests**: Test stability improvement that removes intermittent failures in two test suites without changing any assertions or production code. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16697)
7. **#16629 - Web Shell: filter notification help by client OS**: UI fix that shows platform-specific browser notification setup instructions based on the client's operating system. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16629)
8. **#16662 - Fix Web Shell dev server crash on empty QWEN_DAEMON_URL**: Regression fix that prevents dev server crashes when `QWEN_DAEMON_URL` is set to an empty string. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16662)
9. **#16687 - CLI: keep footer mounted while messages are queued**: UI fix that keeps the queued message "N queued" badge visible for the full duration a message sits in the queue. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16687)
10. **#16488 - Managed Agent: opt-in Mem0-backed personal memory**: Feature adding opt-in per-tenant personal memory stores backed by Mem0, reusable across authorized workspaces. [GitHub PR](https://github.com/QwenLM/qwen-code/pull/16488)

## 5. Hot Discussions
No standalone discussion data (separate from Issues/PRs) was provided for this period, so this section is omitted.

## 6. Feature Request Trends
The most prominent requested feature directions from recent Issues include:
1. **GitHub Channel Performance Optimization**: Multiple adjacent feature requests (#16690, #16691, #16692) focus on reducing GitHub API budget consumption for PR state polling via batching, conditional requests, and budget-aware failover for interactive mentions.
2. **Unified Agent Loop**: P1 request (#15327) to consolidate all Qwen Code surfaces (CLI, Web Shell, desktop, ACP) onto a single shared core agent loop implementation.
3. **Context Efficiency**: Feature requests (#16173, #16259) aim to reduce redundant context bloat by letting models reference slices of files/tool outputs directly, and keeping user instructions unobscured by system reminders.
4. **Web Shell UX Polish**: Ongoing requests for improved Web Shell rendering (#16675), scroll-to-bottom controls (#16658), and smoother session recovery (#16689).

## 7. Developer Pain Points
Recurring frustrations and high-frequency pain points reported by developers:
1. **CI Pipeline Instability**: A large share of open Issues track recurring, often unassigned CI test failures across Managed Agent gates, E2E suites, and platform-specific unit tests, with many flaky tests failing on unrelated PRs (#14724, #15697, #16191).
2. **Context Window Pollution**: Users report that system reminders, skill catalogs, and memory entries bloat message size to the point where actual task instructions are ignored by the model (#16259).
3. **Platform Packaging Bugs**: Recent v0.27 releases broke desktop functionality on Intel Macs, impacting users on older Apple hardware (#16683).
4. **ACP Integration Gaps**: IDE integration via ACP misses core functionality like task list rendering in JetBrains, leading to inconsistent user experience compared to competing tools (#8544, #12113).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*