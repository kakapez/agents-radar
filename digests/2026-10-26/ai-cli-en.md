# AI CLI Tools Weekly Digest 2026-10-26

> Generated: 2026-10-26 01:05 UTC | Tools covered: 7

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

# Claude Code Skills Community Highlights Report (2026-10-26)

## 1. Top Skills Ranking (By Discussion Attention)
1.  **mcp-builder (PR #1742)** ([Link](https://github.com/anthropics/skills/pull/1742))
    * Functionality: MCP integration builder toolchain
    * Discussion highlights: Fixes compatibility with MCP >=2.0.0 (renamed `streamablehttp_client` → `streamable_http_client`, updated custom header configuration logic to align with new API changes)
    * Status: Open
2.  **skill-creator (PR #1298)** ([Link](https://github.com/anthropics/skills/pull/1298))
    * Functionality: Skill development and evaluation toolkit
    * Discussion highlights: Isolates trigger eval workflow, resolves Windows subprocess `select()` failures, fixes false positive/negative trigger scoring and runtime error handling
    * Status: Open
3.  **docx (PR #1792)** ([Link](https://github.com/anthropics/skills/pull/1792))
    * Functionality: DOCX document processing automation
    * Discussion highlights: Returns explicit error reports for LibreOffice processing timeouts, verifies output DOCX no longer carries revision marks before marking tasks as complete
    * Status: Open
4.  **webapp-testing (PR #1980)** ([Link](https://github.com/anthropics/skills/pull/1980))
    * Functionality: Web application automated testing suite
    * Discussion highlights: Eliminates `shell=True` call in `with_server.py` to mitigate CWE-78 command injection security risks
    * Status: Open
5.  **algorithmic-art (PR #1977)** ([Link](https://github.com/anthropics/skills/pull/1977))
    * Functionality: Generative algorithmic art creation toolkit
    * Discussion highlights: Fixes `wrapAround()` modulo logic to correctly handle negative values, ensuring output values stay within the expected `[0, max)` range
    * Status: Open
6.  **slack-gif-creator (Issue #1868)** ([Link](https://github.com/anthropics/skills/issues/1868))
    * Functionality: Slack GIF generation tooling
    * Discussion highlights: Fixes off-by-one interpolation ratio error in `create_gradient_background()` that prevented rendering of the configured bottom background color
    * Status: Open
7.  **skill-creator (Issue #1394)** ([Link](https://github.com/anthropics/skills/issues/1394))
    * Functionality: Skill quality evaluation interface
    * Discussion highlights: Patches inconsistent `escapeHtml()` attribute escaping in the eval viewer to block display-path XSS vulnerabilities
    * Status: Open

## 2. Community Demand Trends (From Issues)
1.  **Security & Governance Skills**: High demand for trust boundary enforcement, skill namespace authentication, and agent governance pattern tooling (Issue #492, #412)
2.  **Enterprise Collaboration Workflows**: Strong desire for org-wide shared skill libraries and no-handoff skill distribution (Issue #228)
3.  **Skill Reliability Tooling**: Consistent requests for improved skill trigger evaluation, context efficiency optimization, and duplicate skill resolution (Issue #556, #1487, #189)
4.  **Document Processing Robustness**: Ongoing demand for more reliable ODT/DOCX/PDF handling with proper XML validation and cross-platform compatibility (Issue #2018, #486, #538)

## 3. High-Potential Pending Skills
1.  **notion-spec-to-implementation + quantitative-resume-auditor (PR #1245)** ([Link](https://github.com/anthropics/skills/pull/1245))
    * Use case: Converts product/tech specs into trackable Notion implementation tasks, plus quantitative resume quality auditing
    * Last updated: 2026-10-15 (very recent activity)
2.  **md2video-audio (PR #1703)** ([Link](https://github.com/anthropics/skills/pull/1703))
    * Use case: Zero-cost Markdown → MP4 video compilation with realistic AI voiceovers, built on Marp slide generation
    * Last updated: 2026-09-15
3.  **proofcore-contract-auditor (PR #1771)** ([Link](https://github.com/anthropics/skills/pull/1771))
    * Use case: Automated static analysis for Solidity/Rust smart contracts with on-chain cryptographic audit proof anchoring on TON Blockchain
    * Last updated: 2026-09-16
4.  **pyxel retro game development (PR #525)** ([Link](https://github.com/anthropics/skills/pull/525))
    * Use case: End-to-end support for creating, debugging, and verifying Python-based retro games via the Pyxel engine
    * Last updated: 2026-10-23 (recent activity)
5.  **document-typography quality control (PR #514)** ([Link](https://github.com/anthropics/skills/pull/514))
    * Use case: Prevents common AI-generated document formatting issues: orphaned word wrap, stranded section headers, and numbering misalignment
    * Last updated: 2026-03-13

## 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is production-grade reliability: users prioritize secure, predictable, cross-platform skill behavior that avoids context bloat, false triggers, and security vulnerabilities, alongside streamlined enterprise collaboration and niche use case expansion for document processing and developer tooling.

---

# Claude Code Community Digest - 2026-10-26

## 1. Last 7 Days' Highlights
Over the past week, Claude Code shipped 7 consecutive patch releases focused on security hardening, platform compatibility fixes, and enterprise observability improvements. The community's top discussions center on shell customization for the Bash tool, unexpected usage accounting regressions, and overly broad password-blocking guardrails that disrupt legitimate local development workflows. All recently merged pull requests reinforce security defaults, plugin isolation, and diff pane reliability.

## 2. Releases
### v2.1.304
- Added a transcript log entry when a first-running plugin skips a user's mod hook, including the event name and triggering plugin details.
- Added `decider: "person"` support for mod `tool.check` responses, which restricts approval to permission dialogs or host callbacks only, with automatic refusal using the mod's defined message.

### v2.1.305
- Added `sandbox.allowNestedUserNamespaces` configuration to let Linux sandboxed commands create user namespaces (for tools like Chromium, rootless podman), with documentation noting this can bypass sandbox file protections.
- Added `CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS` environment variable to control retry frequency for unattended retry mode when hitting usage limits.

### v2.1.306
- Fixed `claude -p` cloud sessions incorrectly reporting "Not logged in" when launched without the session's required environment variables.
- Fixed API errors being misreported as "prompt is too long" and unnecessary compaction in sessions with large numbers of MCP tools.

### v2.1.307
- Added `/claude-api api-version` command to migrate Claude API integrations to version `2026-10-21`.
- Added the `claude_code.safety_event` OpenTelemetry event, logged whenever a tool call is blocked, prompted, or returned by permission rules, auto mode, safety checks, hooks, or the sandbox.
- Fixed request failures behind gateways and compatible servers that reject the `effort-2025` request header.

### v2.1.308
- Included general bug fixes and reliability improvements.

### v2.1.309
- Fixed sandboxed Bash commands on macOS and Linux executing shell startup files outside the sandbox before each command run.
- Fixed macOS sandbox `denyWrite` glob patterns failing to apply to symlinked paths that resolve to real folder locations.

### v2.1.310
- Added Monitor tool and plugin monitor support for Bedrock, Vertex, and Foundry environments, plus deployments with telemetry or nonessential traffic disabled.
- Blocked long foreground sleeps in restricted enterprise environments.
- Resolved remaining request compatibility issues with non-standard gateways.

## 3. Hot Issues
1. **[FEATURE] Allow users to configure which shell the Bash tool uses or inherit initial shell** ([#7490](https://github.com/anthropics/claude-code/issues/7490))
   - 40 comments, 131 upvotes, open. Users request control over which shell the Bash tool invokes, or the ability to inherit the user's initial login shell, to align tooling with personal environment setups. This is the highest-engagement open issue currently.

2. **[BUG] Headless `claude -p` uses ~1.8× more of the 5-hour window per token than interactive `cli`** ([#97074](https://github.com/anthropics/claude-code/issues/97074))
   - 29 comments, 50 upvotes, open. Linux users report identical workloads consume 80% more rate limit quota in headless mode versus interactive CLI, with full reproduction steps provided. This is the top active bug report.

3. **Hard block on typing passwords breaks legitimate dev/test workflows** ([#78160](https://github.com/anthropics/claude-code/issues/78160))
   - 18 comments, 25 upvotes, open. Users request a permission-gated opt-in to disable the blanket password-typing block for local development and test workflows on personal infrastructure, rather than a universal refusal.

4. **[FEATURE] Terminal font family setting in desktop app** ([#48805](https://github.com/anthropics/claude-code/issues/48805))
   - 14 comments, 63 upvotes, closed. A widely requested feature to add custom terminal font selection for the desktop app's Code tab, now marked resolved.

5. **[FEATURE] Triggered injection for auto-memory topic files** ([#78795](https://github.com/anthropics/claude-code/issues/78795))
   - 13 comments, open. Users request rules-style frontmatter for auto-memory files to trigger context injection only when relevant topics are mentioned, rather than loading all memories by default.

6. **Background tasks SIGTERMed on an exact 30-minute internal timer** ([#84981](https://github.com/anthropics/claude-code/issues/84981))
   - 10 comments, closed. macOS CLI users reported long-lived background Bash tasks are silently killed after exactly 30 minutes with no exit code explanation; the issue is now marked stale/resolved.

7. **Possible Usage Accounting Regression: Weekly Limit Depletes Much Faster Than Before** ([#102667](https://github.com/anthropics/claude-code/issues/102667))
   - 5 comments, 2 upvotes, open. Users report weekly quota consumption has doubled for identical workloads in recent releases, mirroring the headless mode usage bug.

8. **[BUG] Windows: Bash tool halves every backslash pair in commands before Git Bash parses it** ([#100063](https://github.com/anthropics/claude-code/issues/100063))
   - 4 comments, 2 upvotes, open. Windows users on Git Bash report all backslash escapes are incorrectly stripped, breaking heredocs and quoted paths, while the native PowerShell tool remains unaffected.

9. **Auto-memory system is ineffective: memories not reliably read or acted on across sessions** ([#75334](https://github.com/anthropics/claude-code/issues/75334))
   - 4 comments, closed. Users reported written memories are not consistently loaded or followed across sessions; the issue is now marked stale.

10. **[BUG] Cowork artifact tools selectively removed from remote-devices bridge** ([#89120](https://github.com/anthropics/claude-code/issues/89120))
    - 4 comments, 1 upvote, closed. macOS users reported `create_artifact`, `update_artifact`, and `list_artifacts` tools disappeared from healthy Cowork remote bridges, with all other tool functionality intact.

## 4. Key PR Progress
1. **docs(plugin-dev): clarify skill naming in skill-development guide** ([#29757](https://github.com/anthropics/claude-code/pull/29757))
   - Closed. Updated skill development docs to require kebab-case skill names matching directory identifiers, added reviewer checks for naming consistency. Closes #24556.

2. **fix: resolve 10 bugs across scripts and workflows** ([#62597](https://github.com/anthropics/claude-code/pull/62597))
   - Closed. Fixed CI script compatibility for forked repos, added safe fallbacks for null repository metadata in scheduled workflows, and resolved multiple edge cases in automation scripts.

3. **fix: /install-github-app support for dev container** ([#16132](https://github.com/anthropics/claude-code/pull/16132))
   - Closed. Added official GitHub CLI package source to dev container images to fix authentication failures for the `/install-github-app` action.

4. **mods: carry process.run truncation flags and list entries' mtimeMs** ([#97293](https://github.com/anthropics/claude-code/pull/97293))
   - Closed. Added support for stdout/stderr truncation flags on `$.process.run` results and modification timestamps on `$.fs.list` entries, with test fakes added to validate behavior.

5. **sec-default: conversation record retention continues past user tier** ([#97334](https://github.com/anthropics/claude-code/pull/97334))
   - Closed. Ensures organization-deployed security default mods retain conversation records independent of user tier settings.

6. **sec-default: collector records continue past the user tier** ([#97688](https://github.com/anthropics/claude-code/pull/97688))
   - Closed. Prevents user-level plugins from dropping or rewriting telemetry collector records when organization security defaults are enabled, matching existing behavior for classic telemetry streams.

7. **diff: toasts show while the pane is open** ([#99118](https://github.com/anthropics/claude-code/pull/99118))
   - Closed. Removed `holdToasts: true` from the `/diff` pane configuration so other plugins' transient notifications appear while the diff view is open.

8. **sec-default: user plugins may tighten, never loosen, security rules** ([#99137](https://github.com/anthropics/claude-code/pull/99137))
   - Closed. Enforces that user-installed plugins cannot override organization deny/ask permission rules or modify pinned security variables when sec-default is active.

9. **diff: empty panes are kept, and shown once content is available** ([#99141](https://github.com/anthropics/claude-code/pull/99141))
   - Closed. Fixes behavior where `/diff` panes opened before content is ready are discarded instead of retained, now rendering automatically once draw handlers attach.

10. **sec-default: organization tool permission ceilings hold over user plugins** ([#99540](https://github.com/anthropics/claude-code/pull/99540))
    - Closed. Ensures organization-level approval requirements for connector tools apply to all user-installed plugins, with added `.catch` handling for policy hooks.

## 5. Feature Request Trends
The most prominent requested feature directions across the week's issues are:
- Bash tool shell customization (inherit user login shell, configure default shell path)
- Granular security guardrail controls (permission-gated password entry for local dev environments, customizable safety block thresholds)
- Auto-memory system improvements (triggered injection for relevant topics, more reliable cross-session memory loading)
- Desktop app UI customization (terminal font selection, unpinning task plan blocks from fixed screen positions)

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by developers this week include:
- Unexpectedly high rate limit and weekly quota consumption in recent releases, particularly for headless CLI workloads
- Overly broad default security blocks (password typing, shell startup execution in sandboxes) that break legitimate local development and test workflows
- Platform-specific bugs on Windows (backslash stripping in Bash tool) and macOS (symlinked sandbox path failures, background task timeouts)
- Unreliable MCP and Cowork tool functionality, including invalid JSON generation for empty string arguments and missing artifact tools on remote bridges
- Poor UI usability in desktop and VS Code extensions (broken copy/paste shortcuts in panel views, permanently stuck tooltips)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-10-26

## Last 7 Days' Highlights
The open source Codex/Rust repository shipped [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0), adding reusable prompt presets and inline model/permission configuration. Community attention is concentrated on Windows regressions, VS Code extension startup failures, and Computer Use browser-control breakages. The merged pull requests are mostly internal Guardian/context-management and tracing improvements rather than visible end-user features.

## Releases
- **rust-v0.164.0**
  - Added ten numbered `/presets` slots for reusable prompts and slash commands, with a keyboard menu for quick access.
  - Added inline `/model` and `/permissions` arguments to set model, reasoning effort, speed, and permission profiles directly.
- **rust-v0.165.0-alpha.1**, **rust-v0.164.0-alpha.12**, **rust-v0.164.0-alpha.11.1**, and other alpha releases were published, but the provided release notes do not contain user-facing change descriptions.

## Hot Issues
- [#51524 Windows Computer Use stops at `get_window_state`](https://github.com/openai/codex/issues/51524) — App and window enumeration works, but Codex cannot determine the current Chrome/Edge URL, blocking browsing automation. This is the most-discussed bug in the selected window.
- [#56691 Codex VS Code extension fails to start on Windows VS Code 1.143.1](https://github.com/openai/codex/issues/56691) — Version `26.1021.22027` cannot initialize its UI. It is a high-visibility regression because it directly blocks IDE-based development.
- [#50737 Windows delegated tasks ignore user-level sandbox defaults](https://github.com/openai/codex/issues/50737) — Fresh dot-created tasks use unexpected `workspace-write`/`auto_review` policies. This matters because permission defaults affect both safety and developer workflow.
- [#37421 CLI Esc-Esc backtrack cannot find selected prompt in a persisted thread](https://github.com/openai/codex/issues/37421) — A long-standing TUI/session regression, now closed, affecting users who rely on session history and prompt navigation.
- [#50728 macOS Computer Use typing/paste duplication](https://github.com/openai/codex/issues/50728) — Codex interrupts normal typing and pasting in Claude Desktop and Opera. This is disruptive because it affects ordinary desktop use, not only agent execution.
- [#40182 Windows updater repeatedly downloads 501.8 MB hourly](https://github.com/openai/codex/issues/40182) — After an EPERM activation failure, the updater loops. This wastes bandwidth, disk, and user time.
- [#54956 Improve Plus-tier Codex efficiency and affordable model experimentation](https://github.com/openai/codex/issues/54956) — A feature/efficiency request from Plus users, reflecting frustration around usage sustainability across models.
- [#53177 ChatGPT Work Cloud `list_threads` exposed but failing](https://github.com/openai/codex/issues/53177) — The tool appears available for local execution but fails in cloud mode. This affects integrated ChatGPT Work workflows.
- [#31186 macOS Dock icon setting does not update launcher/notification surfaces](https://github.com/openai/codex/issues/31186) — A smaller UX regression, but persistent enough to remain open and actively discussed.
- [#34946 Allow scheduled tasks to target SSH-connected hosts](https://github.com/openai/codex/issues/34946) — Not a bug, but a high-signal capability request: users want scheduled automation against remote SSH-connected machines.

## Key PR Progress
- [#56560 Configure GCP project and location in provider settings](https://github.com/openai/codex/pull/56560) — Removes reliance on environment variables for Vertex AI endpoint setup.
- [#56559 Remove Guardian snapshot-specific context helpers](https://github.com/openai/codex/pull/56559) — Internal cleanup simplifying snapshot-deduplication and retained-assistant framing.
- [#56557 Exercise retained sampling in Guardian transport tests](https://github.com/openai/codex/pull/56557) — Aligns transport tests with production sampling/cancellation behavior.
- [#56556 Use conversations for all Guardian v2 async classification](https://github.com/openai/codex/pull/56556) — Moves async classification to the retained conversation backend.
- [#56555 Apply sync Guardian message limits during transcript preparation](https://github.com/openai/codex/pull/56555) — Defers truncation until transcript preparation so profile limits are applied consistently.
- [#56554 Enable masked AWS credentials for local proxy signing](https://github.com/openai/codex/pull/56554) — Adds safer local proxy signing support for AWS SigV4 actions.
- [#56553 Include environment hooks in thread hook listings](https://github.com/openai/codex/pull/56553) — Makes hooks from execution environments visible in thread hook listings.
- [#56552 Initialize SQLite databases with DELETE journaling on NFS](https://github.com/openai/codex/pull/56552) — Improves reliability for Codex state/log databases on NFS.
- [#56516 Respect server approval policy defaults during TUI startup](https://github.com/openai/codex/pull/56516) — Prevents fresh TUI sessions from overriding server-side approval defaults.
- [#56524 Add turn, tool, and skill attribution to traces](https://github.com/openai/codex/pull/56524) — Improves observability for turn behavior, tool usage, and skill catalog activity.

## Hot Discussions
### Ideas
- [#9200 Remote control Codex from the ChatGPT app](https://github.com/openai/codex/discussions/9200) — Users want headless daemon mode plus mobile/remote control of local or desktop Codex sessions.
- [#14067 Synchronize Codex threads and session context across devices](https://github.com/openai/codex/discussions/14067) — Cross-machine session continuity remains a major workflow expectation.
- [#12567 Memories in Codex](https://github.com/openai/codex/discussions/12567) — Community discussion around whether Codex should cite prior threads and how memories should be surfaced.
- [#51263 Add a $35 Developer Plan between Plus and Pro](https://github.com/openai/codex/discussions/51263) — Users want a mid-tier plan with more usage and cloud capacity.

### Q&A
- [#2251 Codex usage limits](https://github.com/openai/codex/discussions/2251) — Plus-tier users are uncertain how ChatGPT app limits relate to Codex limits.
- [#8503 “usage limit reached” despite Code Review showing remaining usage](https://github.com/openai/codex/discussions/8503) — A recurring confusion point around GitHub Connector and Code Review quota reporting.
- [#24258 How does Codex choose a Chrome profile?](https://github.com/openai/codex/discussions/24258) — Users with multiple Chrome profiles want deterministic browser-profile selection.
- [#56069 Does Codex macOS support PiP for MCP Apps?](https://github.com/openai/codex/discussions/56069) — Plugin/MCP UI developers are asking for supported picture-in-picture behavior.

### Show and tell
- [#56731 Agoryx: local-first shared conversation for Codex and Claude Code](https://github.com/openai/codex/discussions/56731) — A community GUI for coordinating Codex and Claude Code in one shared workflow.
- [#56181 Agent Relay Check: verify whether fresh Codex sessions receive AGENTS.md](https://github.com/openai/codex/discussions/56181) — A repeatable before/after check for instruction-path behavior.
- [#56856 MarketMirror: simulate buyer tests through Codex](https://github.com/openai/codex/discussions/56856) — A community plugin/MCP server for marketing-test simulation before real spend.

## Feature Request Trends
- **Remote and mobile control:** Discussion #9200 and Issue #34946 both point toward headless, remote-controllable Codex workflows.
- **Cross-device continuity:** Users want threads, memory, and session context to survive across machines and devices.
- **Usage transparency and pricing options:** Multiple discussions and issues request clearer limits, better efficiency, and an intermediate plan.
- **Predictable browser control:** Users want reliable Chrome/Edge profile selection, URL inspection, downloads, and automation.
- **Scheduled automation on remote hosts:** SSH-connected task scheduling and remote execution remain recurring capability requests.

## Developer Pain Points
- Windows is the most fragile platform in the current signal set: VS Code extension startup failures, Computer Use browser breakage, updater loops, sandbox-policy mismatches, and patch failures appear repeatedly.
- Computer Use is currently unreliable for core browser automation: URL detection, scrolling/input control, paste duplication, and browser-profile selection are common complaints.
- Usage-limit reporting is confusing, especially when users see remaining quota but receive “limit reached” errors.
- Session continuity is painful: persisted threads, history resumption, cross-device sync, and memory citation are unresolved workflows for many developers.
- Users are building many wrappers around Codex—terminal multiplexers, shared GUIs, AGENTS.md validators, context handoff tools, and marketing/simulation plugins—because native workflows still leave gaps.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest (2026-10-26)

## 1. Last 7 Days' Highlights
Over the past week, Gemini CLI continued its rapid nightly release cadence, with a strong focus on stability fixes, user experience improvements, and developer workflow enhancements. The community addressed critical bugs related to subagent behavior, UI rendering, and tooling compatibility, while shipping the stable v0.65.0 release and previewing v0.66.0. Key efforts also centered on refining IDE integration, security, and cross-platform support.

## 2. Releases
- **v0.65.0 (Stable)**:
  - Added read-only workspace enforcement for untrusted folders (security improvement).
  - Fixed duplicate tool response turns when resuming sessions.
- **v0.66.0-preview.0**:
  - Updated ROADMAP.md to remove outdated 2025 references.
  - Bumped versioning and prepared for upcoming features.
- **Nightly v0.67.0 Series (2026-10-21 to 2026-10-25)**:
  - Migrated `gsutil` usage to `gcloud storage`.
  - Preserved user-level `~/.gitconfig` in shell and git environments.
  - Bridged IDE companion into container sandboxes via stdio.
  - Preserved extended token usage metadata and aligned per-turn reporting.
  - Corrected Thai and Lao SARA AM display width in terminal UI.
  - Stopped continuation stream processing after request cancellation.
  - Preserved terminal scrollback during viewport refreshes.

## 3. Hot Issues
1. **#22323: Subagent recovery after MAX_TURNS is reported as GOAL success** (P1, 13 comments)
   - Subagents hitting turn limits incorrectly report success, misleading users. Critical for reliability.
2. **#21409: Generalist agent hangs** (P1, 8 comments, 👍8)
   - Deferring to the generalist agent causes indefinite hangs, a major blocker for users.
3. **#19873: Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (P2, 9 comments)
   - Community requests better integration with native bash tools while maintaining security.
4. **#22745: Assess impact of AST-aware file reads/search/mapping** (P2, 7 comments)
   - Epic tracking AST tooling to reduce token usage and improve code navigation.
5. **#21968: Gemini does not use skills and sub-agents enough** (P2, 7 comments)
   - Users report underutilization of custom skills/subagents without explicit prompting.
6. **#22267: Browser Agent ignores settings.json overrides** (P2, 4 comments)
   - Browser agent ignores `maxTurns` and other configs, causing inconsistent behavior.
7. **#21983: Browser subagent fails in Wayland** (P1, 4 comments)
   - Linux Wayland users experience browser agent failures.
8. **#24246: Gemini CLI encounters 400 error with >128 tools** (P2, 3 comments)
   - Too many available tools cause API errors; users want smarter tool scoping.
9. **#23571: Model frequently creates tmp scripts in random spots** (P2, 3 comments)
   - Unstructured temporary file creation clutters workspaces.
10. **#22672: Agent should stop/discourage destructive behavior** (P2, 3 comments, 👍1)
    - Users request guardrails against dangerous commands like `git reset --force`.

## 4. Key PR Progress
1. **#29838: Resolve relative file paths against active IDE workspace root** (Closed)
   - Fixes path resolution for file tools using IDE/Git root instead of initial directory.
2. **#29948: Respect cancellation during background output reads** (Open)
   - Cancels background log reads promptly instead of waiting for delay.
3. **#29946: Isolate remote conversations by parent session and endpoint** (Open)
   - Prevents remote agent conversation ID leakage across sessions/endpoints.
4. **#29947: Preserve oversized background log tails** (Open)
   - Retains partial output for logs with lines exceeding 64KB.
5. **#29942: Scan complete plan content and report read failures** (Open)
   - Accepts plans with long whitespace prefixes and reports unreadable plans correctly.
6. **#29935: Preserve whitespace in referenced file content** (Open)
   - Stops trimming leading/trailing whitespace when using `@file` includes.
7. **#29931: Expand Windows home-relative paths** (Open)
   - Resolves `~\` paths on Windows for policy/extension configs.
8. **#29929: Show accurate output limits in model list** (Open)
   - Correctly displays 65,536 output token limit for Gemini 2.5 Pro/Flash.
9. **#29871: Keep unsent request when loop recovery starts before a turn** (Open)
   - Prevents dropped function responses during loop recovery.
10. **#29912: Strip trailing punctuation from web_fetch URLs** (Open)
    - Cleans invalid trailing commas/brackets from URLs parsed from prompts.

## 5. Hot Discussions
No discussion data provided in the input. This section is omitted.

## 6. Feature Request Trends
- **AST-Aware Tooling**: Multiple issues (#22745, #22746, #22747) focus on reducing token bloat and improving code navigation via syntax-aware tools.
- **Subagent Reliability & Observability**: Requests for better subagent error reporting, trajectory sharing (#22598), and parallel collaboration (#18287).
- **Security & Guardrails**: Community wants safer defaults, sandboxing (#19873), and destructive action prevention (#22672).
- **Configuration Flexibility**: Per-workspace policies (#18397), symlink agent support (#20079), and settings.json overrides for browser agents (#22267).

## 7. Developer Pain Points
- **Subagent Instability**: Hangs (#21409), incorrect success reporting (#22323), and Wayland failures (#21983) erode trust.
- **UI/UX Friction**: Terminal scrollback loss, flickering on resize (#21924), and non-Latin character display issues.
- **Tool Scope Overload**: 400+ tools cause 400 errors (#24246); users want smarter automatic scoping.
- **Cross-Platform Inconsistencies**: Windows path resolution, lock errors during extension updates, and YAML lint failures.
- **Workspace Pollution**: Random temporary script creation (#23571) and poor cleanup behavior.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date: 2026-10-26** | **Repository: `github/copilot-cli`**

---

## 1. Last 7 Days' Highlights
Over the past 7 days, GitHub shipped a series of rapid patch updates (v1.0.101 to v1.0.104-3) focused on improving autopilot session reliability, permission system accessibility, and ACP session compatibility. The community’s top concerns center on new regressions affecting session locking, enterprise policy refresh errors, and quota consumption tied to the newly released Assisted Permissions feature. Only one merged PR landed this week, which focused on improving installation reliability for private repository users.

---

## 2. Releases
### Latest Stable Release: v1.0.103 (2026-10-22)
Key stable updates:
- Added one-click copying of original code from completed response code blocks
- ACP sessions now respect saved sandbox settings and `--sandbox`/`--no-sandbox` flags (including on session resume)
- Cloud-replied full text is retained when CLI reconnects after a dropped connection

### Pre-release Channel (v1.0.104-0 through v1.0.104-3)
| Version | Key Changes |
|--------|-------------|
| v1.0.104-0 | *Improvements*: Assisted Permissions is now available without experimental mode enabled<br>*Fixes*: Auto mode falls back to default preference when saved Auto preference is unavailable, instead of failing every turn |
| v1.0.104-2 | *Fixes*: Managed model "fusion" now starts sessions on Auto and applies `fusionTier` settings<br>Interactive/SDK Autopilot sessions now wait for attached background tasks to complete (instead of stopping after `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`; `-p --autopilot` still honors the timeout) |
| v1.0.104-3 | Minor bug fixes and stability improvements |

### Prior Pre-release Updates (v1.0.101 to v1.0.102-1)
- v1.0.102-0: Sandboxed network traffic now honors `NO_PROXY`/`ALL_PROXY` when inheriting host proxy settings; fixed plugin marketplace support for git-subdir sources and long plugin descriptions; resolved Fish shell completion failures with option aliases
- v1.0.102-1: Fixed prompt mode respecting managed Auto model selection for `-p`/piped stdin runs; subagents now honor custom/MCP tool approvals to eliminate duplicate permission prompts
- v1.0.101: Added native structured output for dynamic workflow subagents on supported models; added `assistedApprovalInstructions` setting to guide Assisted Permissions decisions

---

## 3. Hot Issues
(Top 10 noteworthy issues ranked by community impact):
1. **[#4946](https://github.com/github/copilot-cli/issues/4946) [OPEN] HTTP 400 `content[].thinking` after background shell completion notification**<br>Why it matters: Triggers crashes in sessions using thinking mode when background shell commands complete, breaking long-running workflows. Community reaction: 8 comments, 1 👍, active debugging from users on custom model providers.
2. **[#4802](https://github.com/github/copilot-cli/issues/4802) [OPEN] PRU Quota Wiped Out (likely tied to Assisted Permissions)**<br>Why it matters: Pro users on legacy request-based plans report unexpected quota exhaustion immediately after enabling the new Assisted Permissions feature, threatening trust in the newly launched tool. Community reaction: 6 comments, direct impact on paid subscribers.
3. **[#4233](https://github.com/github/copilot-cli/issues/4233) [OPEN] [ACP] Emit `usage_update` for interactive statusline parity**<br>Why it matters: ACP clients (e.g., Zed) cannot display context window/credit usage even though the CLI already calculates this data, creating a gap in cross-editor user experience. Community reaction: 3 comments, 4 👍, widely requested by ACP integration developers.
4. **[#5253](https://github.com/github/copilot-cli/issues/5253) [OPEN] v1.0.103: Persistent session-lock timeouts and unresponsive tasks**<br>Why it matters: Long-lived sessions become unusable with "session lock acquisition timed out" errors, a critical regression in the latest stable release. Community reaction: 2 comments, reported within 24 hours of v1.0.103 launch.
5. **[#5109](https://github.com/github/copilot-cli/issues/5109) [OPEN] Enterprise copilot-cli unusable with "managed account policy" errors**<br>Why it matters: Enterprise users are blocked from using the CLI entirely due to failures refreshing managed account policies, a showstopper for organizational deployments. Community reaction: 2 comments, 1 👍, high-priority for enterprise admins.
6. **[#5203](https://github.com/github/copilot-cli/issues/5203) [OPEN] Feature Request: Stable Release Channel**<br>Why it matters: The rapid weekly release cycle is introducing frequent regressions that break daily use, with users requesting separate stable/pre-release channels to reduce disruption. Community reaction: 2 comments, broad alignment from power users.
7. **[#5195](https://github.com/github/copilot-cli/issues/5195) [OPEN] Custom agents disable deferred MCP tool loading after first call**<br>Why it matters: Loading all MCP tools into context after the first model call wastes context window space, reducing agent performance for users with large MCP tool sets. Community reaction: 1 comment, reported by users with complex multi-tool setups.
8. **[#5205](https://github.com/github/copilot-cli/issues/5205) [OPEN] Context window rollover fails with missing checkpoint.md**<br>Why it matters: Long-running agent sessions crash entirely when context fills up, preventing extended autonomous workflows. Community reaction: 1 comment, critical for users running multi-hour tasks.
9. **[#5236](https://github.com/github/copilot-cli/issues/5236) [OPEN] Windows: Entra broker token cache stays empty after MCP sign-in**<br>Why it matters: Windows users with enterprise MCP servers are forced to re-authenticate on every new process launch, creating severe workflow friction. Community reaction: 1 comment, high impact for Windows enterprise users.
10. **[#4977](https://github.com/github/copilot-cli/issues/4977) [OPEN] Bundled ripgrep aborts on 16KB-page ARM64 kernels (Asahi Linux)**<br>Why it matters: The statically linked jemalloc in bundled ripgrep crashes on Asahi Linux’s default 16KB page size, making file search tools unusable for Apple Silicon Linux users. Community reaction: 2 comments, active workaround discussion in the thread.

---

## 4. Key PR Progress
Only one PR was updated in the last 7 days:
- **[#1960](https://github.com/github/copilot-cli/pull/1960) [CLOSED/MERGED] install: use `GITHUB_TOKEN` for authenticated GitHub requests**<br>Details: The install script now passes `GITHUB_TOKEN` as an Authorization header for curl/wget downloads and embeds it in git remote URLs for `ls-remote`. This avoids GitHub rate limits and enables installation from private repositories, a critical improvement for enterprise users who host custom CLI distributions internally.

---

## 5. Hot Discussions
No dedicated discussion thread data was provided in the source material, so this section is omitted.

---

## 6. Feature Request Trends
The most requested feature directions from recent issues include:
1. **Release channel separation**: Users want stable vs. pre-release channels to avoid regressions from the rapid weekly release cycle
2. **ACP feature parity**: ACP clients require `usage_update` events and consistent plugin/sandbox behavior to match interactive CLI functionality
3. **Subagent visibility**: A collapsible background agent panel to show active sub-agents, their models, reasoning levels, and task descriptions
4. **Local web UI**: A browser-based interface for the CLI (similar to `opencode web`) to extend access beyond terminal-only workflows
5. **SessionStart context persistence**: Retain `sessionStart` hook additional context after compaction to avoid losing custom configuration between context rollovers

---

## 7. Developer Pain Points
Recurring high-frequency frustrations from developers:
1. **Regression churn**: The fast release cycle repeatedly breaks daily use, with critical session and policy bugs appearing in stable releases
2. **Quota unpredictability**: Users report unexpected PR quota consumption tied to new features like Assisted Permissions, with no clear visibility into what triggers usage
3. **ACP integration gaps**: ACP mode lacks feature parity with interactive mode (no usage indicators, broken session renaming, missing plugin support)
4. **Enterprise deployment failures**: Managed account policy refresh errors make the CLI unusable for many enterprise users, with no clear resolution path
5. **Long-running session instability**: Session locks, context rollover failures, and background task timeouts break extended autonomous agent workflows

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
2026-10-26 · github.com/anomalyco/opencode

---

## Last 7 Days' Highlights
OpenCode released v1.19.4 this week, upgrading the bundled Bun runtime to v1.4.4 to address critical security vulnerabilities across core network and content handling components. The community experienced a surge of reports related to free model quota resets and rate limiting, alongside active development on performance improvements and experimental media optimization features.

---

## Releases
**v1.19.4** (latest, last 7 days)
- **Core Improvements**: Upgraded bundled Bun runtime to 1.4.4, including security fixes for Brotli, TLS, HTTP/1.1/2/3, WebSocket, and `fetch`, and updated root certificates to NSS 3.131.1.

---

## Hot Issues
> Showing 10 of 50 updated issues. 🔒 = closed · 🟢 = open

1. 🔒 **[Unlimited usage Exploit on opencode models](https://github.com/anomalyco/opencode/issues/34344)** · 56 comments
    - Users discovered that free model rate limits tied to IP addresses can be bypassed via VPN rotation, allowing unlimited continuous usage of free models. This raises critical concerns about free tier resource abuse and cost sustainability for the project.
2. 🟢 **[tui: support reactive external TSX plugins in packaged CLI](https://github.com/anomalyco/opencode/issues/39986)** · 7 comments
    - The packaged Bun CLI fails to reliably apply OpenTUI's runtime Solid transform to external TUI plugin TSX, causing resolution errors or incorrect local dependency loading. This breaks plugin functionality for end users and hinders the TUI ecosystem.
3. 🔒 **[Free quota time out never recovers, sawtooths on 86400s to go](https://github.com/anomalyco/opencode/issues/58831)** · 6 comments · 👍 2
    - Users report free quota countdowns reset back to 86400 seconds (24 hours) instead of unlocking after reaching zero, rendering free usage unavailable indefinitely. This is one of multiple high-priority reports of broken quota reset logic.
4. 🟢 **[V2: define restart semantics for foreground and background shells](https://github.com/anomalyco/opencode/issues/36348)** · 6 comments
    - Core v2 design gap: no defined behavior for long-running foreground/background shell processes when the managed server restarts, causing interrupted ownership and job tracking. This is critical for reliability of shell-integrated workflows.
5. 🔒 **[Free usage limit doesn't reset for 2+ days ("Free usage limit reached" on a free OpenCode model)](https://github.com/anomalyco/opencode/issues/58814)** · 6 comments
    - Free model usage limits fail to reset for over 48 hours, blocking all free tier access even for users who have not exhausted their quota. This compounds the widespread quota reset bug reports.
6. 🟢 **["Code Mode" instructions are confusing Gemma-4-31B](https://github.com/anomalyco/opencode/issues/53623)** · 6 comments · 👍 2
    - The "Code Mode" prompt confuses Gemma-4-31B into incorrectly assuming all tools require "execute" flags. Users request prompt improvements and better tooling for debugging and modifying system prompts.
7. 🔒 **[Delegated subagent write silently denied on "ask" permission (works on v1, broken on v2)](https://github.com/anomalyco/opencode/issues/57603)** · 5 comments
    - A v2 regression: subagent write operations with "ask" permissions fail silently with no user approval prompt, breaking delegated workflow functionality that worked in v1. This undermines trust in v2's permission system.
8. 🟢 **[Free usage exceeded with a 59,769-second cooldown on Windows 11](https://github.com/anomalyco/opencode/issues/58933)** · 5 comments · 👍 1
    - Windows 11 users report arbitrary ~16.5 hour cooldowns for free model access, with no clear explanation for the cooldown duration. This is part of a broader pattern of inconsistent quota enforcement across platforms.
9. 🟢 **[desktop: file tree unusable out of the box — showFileTree defaults to false with no Settings UI](https://github.com/anomalyco/opencode/issues/56057)** · 4 comments
    - The desktop app's file tree is disabled by default with no user-facing settings to enable it, making a core feature unavailable to new users. This is a critical onboarding UX gap.
10. 🔒 **[Opencode is genuinely broken and HAS to be fixed IMMEDIATELY.](https://github.com/anomalyco/opencode/issues/58828)** · 4 comments
    - Users report being immediately hit with free usage limits on both Go and Zen models, even without prior usage, with 24-hour wait times. This high-urgency report reflects widespread frustration with the quota system outage.

---

## Key PR Progress
> Showing 10 of 50 updated PRs. 🟢 = open · 🔒 = closed

1. 🟢 **[feat(desktop): ship GUI plugins through ./gui exports](https://github.com/anomalyco/opencode/pull/55246)**
    - Adds support for experimental GUI plugins via `./gui-experimental` exports, allowing plugins to extend desktop app functionality alongside existing server and TUI exports. This expands the platform's plugin ecosystem capabilities.
2. 🟢 **[fix(mcp): preserve independent OAuth refresh cancellation](https://github.com/anomalyco/opencode/pull/59114)**
    - Fixes concurrent OAuth refresh race conditions for MCP tools: concurrent token refreshes now share a single network request while allowing individual callers to cancel independently, improving reliability.
3. 🟢 **[perf(core): warm the model provider connection at prompt admission](https://github.com/anomalyco/opencode/pull/58803)**
    - Performance improvement: pre-establishes model provider connections during prompt admission (instead of on first request) to eliminate DNS/TLS handshake latency, speeding up initial response times.
4. 🟢 **[test(core): cover MCP form elicitation round trips](https://github.com/anomalyco/opencode/pull/53199)**
    - Adds test coverage for MCP form elicitation workflows, filling a gap where only empty form and URL mode were previously tested. This improves MCP integration reliability.
5. 🟢 **[fix(app): drop model details tooltip from the composer model chip](https://github.com/anomalyco/opencode/pull/59108)**
    - UX fix: removes cluttering model details tooltips from the composer's model chip, retaining details only in the model picker where they are useful. Simplifies the core interaction UI.
6. 🟢 **[fix(core): retry and then fail turns that finish with no output](https://github.com/anomalyco/opencode/pull/56673)**
    - Fixes intermittent provider issues (e.g. Gemini closing SSE streams with zero output): adds retry logic for empty response turns before failing, reducing spurious errors for end users.
7. 🟢 **[feat(server): add experimental GET /api/experimental/media/:hash and opt-in experimental-media-uri capability](https://github.com/anomalyco/opencode/pull/59103)**
    - Experimental feature: adds an opt-in endpoint to serve media attachments by hash, allowing clients to avoid sending inline base64 data for media, reducing session load times and payload size.
8. 🟢 **[fix(core): Fix Github Bot so it is supported in v2](https://github.com/anomalyco/opencode/pull/58297)**
    - Ports the GitHub integration (`opencode github install`/`run`) from v1 to v2, restoring a critical workflow integration for v2 users.
9. 🟢 **[feat(core): add byte-preserving offline media_blob backfill for legacy rows](https://github.com/anomalyco/opencode/pull/58742)**
    - Adds an experimental offline script to migrate existing inline base64 media in session databases to the new blob storage format, reducing database size for long-time users.
10. 🟢 **[fix(core): publish MCP tool progress notifications](https://github.com/anomalyco/opencode/pull/59102)**
    - Fixes missing MCP tool progress notifications, enabling real-time progress updates for long-running MCP tool calls (core functionality only; TUI display work is separate).

---

## Feature Request Trends
1. **Free tier transparency & flexibility**: Multiple requests for clearer free quota accounting (including idle time, pool scope, remaining allowance visibility) and expanded payment methods (e.g. USDC for Go subscriptions).
2. **Workflow permission improvements**: Requests to auto-allow read-only tools in the permission system to reduce unnecessary approval prompts, and to fix silent permission failures for subagents.
3. **Media & performance optimization**: Strong interest in the experimental media blob storage system to reduce session load times and payload size for image-heavy workflows.
4. **TUI & desktop UX polish**: Requests for better file tree accessibility, smoother question navigation, and clearer model selection UI.
5. **Workspace protection**: Request for a workspace lock feature to prevent OpenCode from modifying files during critical workflow stages.

---

## Developer Pain Points
1. **Broken free quota system**: The single most frequent pain point, with widespread reports of quota resets failing, arbitrary cooldowns, and false "usage limit reached" errors even for unused or unlimited models.
2. **v2 regression instability**: Multiple core v2 features are broken relative to v1, including subagent permission handling, GitHub integration support, and shell process lifecycle management.
3. **Plugin compatibility gaps**: TUI and GUI plugin functionality is unreliable, with TSX transform failures and missing plugin support for core workflows.
4. **Inconsistent cross-platform behavior**: Quota enforcement and feature availability vary between CLI and desktop, and across operating systems, causing confusion for users.
5. **Silent failures & poor error visibility**: Critical errors (e.g. subagent permission denials, empty subagent results) fail silently without user feedback, making debugging extremely difficult.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest: 2026-10-26

---

## Last 7 Days' Highlights
Pi v1.4.0 launched with a headline feature of image input support for classifier models across multiple providers. Community activity focused heavily on provider integration (including new model support for Kimi, Claude on Vertex AI, and additional hosted inference providers), context management edge cases, and terminal/TUI compatibility issues. Multiple high-priority bug fixes were merged this week, addressing Windows path handling, model reference resolution, and proxy configuration crashes.

---

## Releases
### v1.4.0
New feature: Image input support for classifiers — `codemode` `models.classify()` now accepts image inputs for TypeSafe's Jev and Cloudflare's Clef models on the `typesafe`, `cloudflare-workers-ai`, and OpenRouter providers.
[Release notes](https://github.com/earendil-works/pi/releases/tag/v1.4.0)

---

## Hot Issues
1.  **[#10956] cacheWarming "idle" stops silently with custom/compaction context** (OPEN, 10 comments)
    Cache warming never triggers idle warm events when extensions handle `turn_end` with custom or compaction messages in context. Users see 507+ `cache_warming_decision` events all at `continuationProbability: 1`, breaking cost-saving cache optimization for extended sessions.
2.  **[#10628] OSC 52 copy in fullscreen TUI swallowed by tmux** (OPEN, 10 comments)
    Fullscreen TUI copy-on-select fails silently when running inside tmux: tmux consumes OSC 52 escape codes and does not relay them to the client, leaving users without working copy functionality over SSH.
3.  **[#10274] Support MCP elicitation** (CLOSED, no-action, 6 comments)
    Feature request for MCP client elicitation support, allowing servers to request additional user input during tool execution. Closed as out of scope for current spec compliance.
4.  **[#10885] llama.cpp context overflow not detected, auto-compaction fails** (OPEN, 5 comments)
    Context size exceeded errors from llama.cpp servers are not recognized by Pi, so auto-compaction never triggers, breaking long-running sessions with custom local model deployments.
5.  **[#11208] Update Undici pin to include 8.12.2 security fixes** (CLOSED, no-action, 4 comments)
    Request to update the core Undici dependency from 8.10.2 to 8.12.3 to include published security patches.
6.  **[#11335] MCP HTTP JSON responses bypass maxMessageBytes** (OPEN, 4 comments)
    MCP HTTP JSON transport does not enforce `maxMessageBytes` limits, unlike SSE transport, creating a security gap for untrusted MCP servers.
7.  **[#9534] OpenRouter drops signature-only reasoning chunks for Claude** (OPEN, 4 comments)
    Pi drops signature-only reasoning chunks when using Claude models via OpenRouter, potentially breaking reasoning continuity for supported models.
8.  **[#11376] [p0] Anthropic tool removal mid-session breaks all subsequent requests** (OPEN, 3 comments)
    Reloading extensions that remove tools mid-session causes every subsequent request to Claude Opus 5.5 to fail with `tool_reference_unresolved` errors, a critical stability issue for dynamic extension workflows.
9.  **[#11297] Compaction file lists grow without bound** (OPEN, 3 comments)
    Each compaction cycle appends read/modified file lists to the summary, causing context bloat over time and reducing effective available context for long sessions.
10. **[#11311] MCP OAuth hangs on "Connecting…" after successful login** (OPEN, 3 comments)
    MCP OAuth flows hang for 2-3 minutes after browser-based authentication completes, with no ability to cancel the stuck connection.

---

## Key PR Progress
1.  **[#11411] [CLOSED] fix(tui): keep iTerm2 inline images in fullscreen**
    Fixes inline image rendering in fullscreen TUI mode, where images previously fell back to text placeholder blocks when using the iTerm2 image protocol.
2.  **[#11399] [CLOSED] fix: normalize path separators in check-entry-graphs on Windows**
    Resolves cross-platform test failures on Windows by normalizing path separators in the entry graph check script, fixing allow/forbid pattern matching.
3.  **[#11397] [CLOSED] fix(coding-agent): resolve provider/id references when the provider id contains a slash**
    Fixes `--model` reference resolution for provider IDs that include slashes (e.g., URL-derived IDs from the pi-llama-cpp extension), which previously returned "model not found" errors.
4.  **[#11396] [CLOSED] fix(coding-agent): pass real path as npm prefix when agent dir is a symlink**
    Fixes npm install/uninstall behavior when the Pi agent directory is a symlink, preventing corrupted lock entries pointing to symlinked paths.
5.  **[#11395] [CLOSED] fix: unset all supported provider env vars in pi-test.sh --no-env**
    Updates the test script to remove all current provider API key environment variables when running in `--no-env` mode, fixing test isolation issues.
6.  **[#11330] [CLOSED] fix(coding-agent): preserve split UTF-8 output in pi.exec**
    Fixes garbled multi-byte UTF-8 output (e.g., Chinese characters) in `pi.exec()` when character byte sequences span stdout/stderr chunks.
7.  **[#11355] [CLOSED] fix(ai): support Kimi Coding K3.1 Pro models**
    Adds support for Kimi K3.1 Pro models via dynamic effort metadata parsing, including reasoning effort control and proper content preservation.
8.  **[#11370] [OPEN] feat(ai,coding-agent): add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers**
    Adds 6 new hosted inference providers to Pi's built-in model catalog, expanding available model options for developers.
9.  **[#11371] [OPEN] feat(ai,coding-agent): serve Claude models on Google Vertex AI**
    Adds support for 13 Claude models hosted on Google Vertex AI's Anthropic Messages API endpoint.
10. **[#11341] [CLOSED] fix(coding-agent): exit with a clear error for unusable proxy URLs**
    Replaces confusing undici stack traces with user-friendly error messages when proxy configuration values are invalid.

---

## Hot Discussions
### Q&A
1.  **[#11404] Official Pi code agent Docker sandbox images?**
    Community question about four Docker-hosted Pi sandbox images hosted on Docker Hub, asking whether these are official builds from the Pi team.
### Show and Tell
2.  **[#11306] pi-continuity: auto-resume after coding plan usage limits**
    Community extension that automatically resumes interrupted Pi sessions when hitting coding plan usage limits, eliminating manual "continue" prompts.
3.  **[#11307] pi-better-web-search: cross-provider web search fallback**
    Community web search extension that returns raw provider results and automatically falls back between logged-in search providers when the active model cannot search.
4.  **[#11214] Pi on Atomic Bot: 24/7 cloud Pi instances**
    Atomic Bot platform announcement offering one-click, persistent cloud-hosted Pi instances that run independently of local laptops.
5.  **[#11196] pi-tidy: collapse tool calls into single lines**
    Community extension that folds multi-step tool call outputs into collapsible single lines, reducing scrolling overhead in long sessions.
6.  **[#11192] Pi Market Terminal: finance-focused second-screen workspace**
    Independent community extension for finance professionals, adding a dedicated market workspace interface inside Pi.
7.  **[#11160] Weasley Subagents: parallel review and background delegation**
    Apache-licensed extension for coordinating child Pi agents, supporting parallel reviews, sequential task chains, and background work delegation with a terminal fleet view.
### General
8.  **[#2483] awto-pi-lot: PPQ.ai provider extension**
    Community extension adding the PPQ.ai AutoClaw pay-as-you-go provider with accountless mode and infinite loop cap features.
9.  **[#10126] Make GitHub releases immutable for supply-chain security?**
    Community proposal to make Pi's GitHub releases immutable to improve supply chain security, referencing similar implementations in other open source projects.
10. **[#11356] Feedback: Context bloat before 1.0 vs after 1.0**
    User feedback noting increased initial prompt context usage in post-1.0 Pi versions, leading to faster limit hits for simple requests.

---

## Feature Request Trends
The most requested feature directions this week are:
1.  Expanded provider and model support, including additional hosted inference platforms and first-class support for regional model providers.
2.  Improved context management controls to reduce bloat from compaction summaries and long-running session state.
3.  Granular environment isolation for MCP stdio servers to prevent leaking host process environment variables to child tools.
4.  Better terminal/TUI compatibility features, including configurable copy target buffers and improved inline image support across terminal emulators.

---

## Developer Pain Points
Recurring developer frustrations include:
1.  Context management edge cases breaking long sessions: cache warming failures, undetectable context overflow from custom servers, and unbounded compaction summary growth.
2.  Provider and extension integration bugs: mid-session tool removal breaking Anthropic API calls, OAuth connection hangs for MCP servers, and incorrect model detection for custom OpenAI-compatible endpoints.
3.  Cross-platform and terminal compatibility issues: path handling failures on Windows, copy functionality broken inside tmux, and garbled output from split multi-byte character chunks.
4.  Reliability gaps in MCP integration: unenforced message size limits and missing elicitation support for MCP servers that require additional user input.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Weekly Digest 2026-10-26

## 1. Last 7 Days' Highlights
The Qwen Code community shipped the v0.26.x stable release line and multiple nightly builds over the past week, bringing core security hardening, daemon capability enhancements, and cross-platform runtime improvements. Community focus remains heavily on CI/CD stability, Kubernetes runtime delivery, and fixing compatibility gaps for major third-party model providers like Anthropic Claude.

## 2. Releases
### Core CLI & Desktop
- **v0.26.1**: Stable release with breaking change to restore per-group session isolation under thread scope ([#13882](https://github.com/QwenLM/qwen-code/pull/13882)), plus security hardening for serve tokens.
- **v0.26.1-nightly.20261025.8e28d5380c**: Nightly build adding session permission rules and auto-approval for managed environments.
- **desktop-v0.26.1**: Desktop client release bundled with daemon token persistence feature from PR [#15023](https://github.com/QwenLM/qwen-code/pull/15023).
- **v0.26.0**: Major feature release adding session-targeted Skill and Extension refresh for daemon environments.
- **sdk-typescript-v0.1.22**: TypeScript SDK release bundled with CLI v0.26.0 built from the same source branch.

## 3. Hot Issues
1. [#14724](https://github.com/QwenLM/qwen-code/issues/14724) [Open, 38 comments]: Main CI Managed Agent gate failure with no test identified. Blocks merge of core managed agent changes, indicating unstable CI infrastructure for the release candidate.
2. [#13395](https://github.com/QwenLM/qwen-code/issues/13395) [Open, 24 comments]: Kubernetes tool runtime progress tracking. S1 acceptance is nearly complete, marking Qwen Code's push to enterprise-scale containerized deployments.
3. [#15173](https://github.com/QwenLM/qwen-code/issues/15173) [Open, 16 comments]: E2E Tests failure on Linux Docker sandbox for context compression interactive flows. Highlights flaky end-to-end testing for core interactive session features.
4. [#15498](https://github.com/QwenLM/qwen-code/issues/15498) [Open, 11 comments]: SDK 0.1.23 publication blocked by integration timeouts after CLI v0.26.1 release. Reveals release pipeline bottlenecks for multi-language SDK distribution.
5. [#8432](https://github.com/QwenLM/qwen-code/issues/8432) [Open, 6 comments]: Bailian Personal Token Plan model list out of sync, breaking image/video generation. Long-standing user pain point for Alibaba Cloud model plan subscribers.
6. [#15545](https://github.com/QwenLM/qwen-code/issues/15545) [Open, 5 comments]: Feature request for threshold-triggered handover continuation instead of silent auto-compaction. Addresses context quality decay in long autonomous agent runs.
7. [#15552](https://github.com/QwenLM/qwen-code/issues/15552) [Open, 5 comments]: Bug where retained catalog snapshots displace UserPromptSubmit dedup receipts. Breaks hook context deduplication logic introduced in recent memory system updates.
8. [#15486](https://github.com/QwenLM/qwen-code/issues/15486) [Open, 3 comments, P1]: Token size estimate double-counts pending tool results after automatic compaction. Causes failed turns or truncated outputs for context-heavy workflows.
9. [#15542](https://github.com/QwenLM/qwen-code/issues/15542) [Open, 3 comments, P1]: Anthropic provider JSON side queries fail with 400 error on Claude Sonnet 5.5/Opus 5.5. Blocks core functionality for teams using latest Claude models.
10. [#15567](https://github.com/QwenLM/qwen-code/issues/15567) [Open, 4 comments]: MCP startup failure omits child stderr from diagnostics. Makes troubleshooting MCP server integration nearly impossible for developers.

## 4. Key PR Progress
1. [#15296](https://github.com/QwenLM/qwen-code/pull/15296): Web Shell embedding support for custom workspace directory pickers. Enables third-party applications to integrate Qwen Code Web Shell with their own file system selectors.
2. [#15586](https://github.com/QwenLM/qwen-code/pull/15586): Managed Agent Workspace file uploads. Allows WebShell users to upload files directly into local/SSH workspaces up to 8 MiB.
3. [#15578](https://github.com/QwenLM/qwen-code/pull/15578): Unattended autofix PR watch runs fix agent in background. Keeps interactive sessions usable while automated fixes run in the background.
4. [#13969](https://github.com/QwenLM/qwen-code/pull/13969): Add FileChanged notifications for local session hooks. Enables local file system trigger events for automation workflows.
5. [#15558](https://github.com/QwenLM/qwen-code/pull/15558): Fix unsupported forced Anthropic tool selection. Resolves the 400 error issue on latest Claude models by switching to auto tool selection mode.
6. [#11708](https://github.com/QwenLM/qwen-code/pull/11708): Harden MCP pooled connection lifetime and teardown ordering. Improves stability of long-running MCP server connections.
7. [#15284](https://github.com/QwenLM/qwen-code/pull/15284): Scope SDK Java test job lock to cache write-back only. Reduces CI contention for Java SDK test runs by removing long-held host locks.
8. [#15030](https://github.com/QwenLM/qwen-code/pull/15030): Raise workspace skill install limits. Splits transport and on-disk size limits for skill zip/GitHub/local folder installs.
9. [#15345](https://github.com/QwenLM/qwen-code/pull/15345): Web Shell plain-text and Markdown reply copying. Adds two distinct copy formats for assistant responses in the web interface.
10. [#11486](https://github.com/QwenLM/qwen-code/pull/11486): CLI support for exact-version updates without npm discovery. Enables air-gapped or custom registry deployments to pin specific update versions.

## 5. Feature Request Trends
- Context management improvements: Users want more transparent context compaction with handover reports instead of silent summaries, especially for long autonomous agent runs.
- Better diagnostics: Requests for improved error logging for MCP integration, provider retries, and CI failures to reduce debugging time.
- Managed agent capabilities: Growing demand for enterprise features like file uploads, journal persistence, and Kubernetes runtime support for production deployments.
- Integration flexibility: Requests for custom workspace pickers, FileChanged hooks, and external context profile support to embed Qwen Code into existing developer workflows.

## 6. Developer Pain Points
- CI/CD instability: Frequent flaky test failures, blocked SDK releases due to timeouts, and infrastructure bottlenecks slow down the release pipeline significantly.
- Provider compatibility gaps: Critical functionality breaks with latest Anthropic Claude models and misaligned model lists for Alibaba Cloud Bailian plans.
- MCP debugging difficulty: Missing error diagnostics when MCP servers fail to start makes integration troubleshooting very inefficient.
- Token estimation inaccuracies: Double-counting of pending tool results after context compaction leads to unexpected turn failures or truncated outputs.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*