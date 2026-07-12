# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-12 22:49 UTC | Tools covered: 9

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

# 2026-07-13 Cross-Tool AI CLI Ecosystem Comparison Report
## 1. Ecosystem Overview
Across all 9 tracked major AI CLI tools, no public stable production releases shipped during the 24-hour reporting window, indicating the broader ecosystem is collectively in a post-major-model-launch hardening phase rather than pushing new breaking feature drops. Developer teams are prioritizing three core priorities: resolving widespread regressions tied to recently launched 2026 LLM generations (including OpenAI GPT-5.6, Gemini 3, and Qwen 3.7), patching long-unfixed Windows platform gaps that have accumulated for months, and rolling out security hardening for core agent execution paths. There is a clear split in the landscape: large vendor-backed offerings target zero-config out-of-the-box usability for mass professional developers, while independent open-source and regional first-party tools focus on self-hosted enterprise extensibility and custom workflow support. Adoption of the Model Context Protocol (MCP) has reached critical mass across the entire cohort, with nearly every team actively iterating on their MCP implementation to unlock new extensibility use cases.

## 2. Activity Comparison
| Tool Name | Active Updated Issues (24h) | Updated PRs (24-48h) | Release Status |
|---|---|---|---|
| Claude Code | 10 | 3 | No new public release |
| OpenAI Codex | 10 | 1 | No new public release |
| Gemini CLI | 10 | 10 | No new public release |
| GitHub Copilot CLI | 10 | 1 | No new public release |
| Kimi Code CLI | 1 | 4 | No new public release |
| OpenCode | 10 | 10 | No new public release |
| Pi | 10 | 10 | No new public release |
| Qwen Code | 10 | 10 | Scheduled v0.19.9 nightly build failed E2E checks; no public release |
| DeepSeek TUI | 3 | 2 | No new public release |

## 3. Shared Feature Directions
Multiple cross-cutting requirements appear across separate tool communities, aligned on industry-wide user priorities:
1. **Standards-compliant, production-ready MCP support**: All 9 tools report MCP-related bug fixes or feature work, with specific needs including cross-surface OAuth auth bridging (GitHub Copilot CLI), sorted active MCP server UX (OpenCode), graceful failure handling for crashed MCP daemons (Kimi Code CLI), and universal normalization of MCP tool types across LLM providers (Gemini CLI).
2. **Native compatibility for 2026 top-tier LLM generations**: 6 tools (OpenAI Codex, OpenCode, Pi, Qwen Code, Claude Code, Gemini CLI) are actively patching regressions tied to recently released models, including correct request formatting aligned with new API specifications, working context compaction for 1M+ context windows, and elimination of unhandled 400 model not found errors.
3. **Full Windows platform parity**: 7 of 9 tools (Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, DeepSeek TUI) have more than 50% of their active open bug backlog dedicated to resolving Windows-specific gaps ranging from WSL2 TUI freezes, anti-virus false positive mitigation, missing executable metadata, and broken permission config rules.
4. **Transparent, granular usage and cost observability**: 5 tools (Kimi Code CLI, OpenCode, DeepSeek TUI, Qwen Code, Pi) are building fixes for incorrect TPD/quota calculation, provider-aware offline cost scorecards, and public billing query APIs to eliminate unexpected unplanned throttling and cost overruns for enterprise users.

## 4. Differentiation Analysis
The 9 tools have clear divergent priorities, user bases and technical architectures:
- **Feature focus split**: Large vendor offerings (Claude Code, OpenAI Codex, GitHub Copilot CLI) prioritize native sync with their respective parent product ecosystems (e.g. Copilot CLI cross-sync with VS Code and desktop apps, Claude Code multi-instance coworking features). Regional first-party tools (Kimi Code CLI, Qwen Code, DeepSeek TUI) focus on expanding native support for domestic APAC LLM models and low-operational-overhead self-hosted daemon deployments for teams. Independent open-source tools (OpenCode, Pi) prioritize maximum extensibility via public extension APIs, zero vendor-auth lock-in, and native support for self-hosted local LLMs including Ollama.
- **Target user split**: Claude Code, OpenAI Codex and GitHub Copilot CLI target paid professional developers on their platform subscriptions with zero-config out-of-the-box usability. Gemini CLI and Qwen Code target self-hosting teams and power users who want full control over their agent runtime. Pi, OpenCode and DeepSeek TUI target enterprise integrators and tinkerers who build custom workflows on top of the CLI base. Kimi Code CLI targets mid-sized APAC enterprise teams with strict internal usage audit requirements.
- **Technical approach split**: Gemini CLI has dedicated 7 out of 10 recent PRs exclusively to security hardening, prioritizing elimination of SSRF, shell injection and path traversal risks over new features. OpenCode recently merged 18 months of stuck community PRs in a single bulk batch, delivering the highest short-term feature velocity in the cohort. Pi's ledger-native history architecture uniquely enables a full scrollable TUI history pager that no other competing tool offers. Qwen's daemon-first runtime design natively supports multi-user team deployments out of the box, a feature no TUI-first tool in the cohort provides.

## 5. Community Momentum & Maturity
1. **Highest maturity, mass adoption**: Claude Code, OpenAI Codex, GitHub Copilot CLI. These three vendor-backed tools have the largest installed user bases, with high-engagement issues regularly hitting 50+ upvotes and 20+ comments. Their development velocity is modest right now as they work through months-long backlogs of long-standing platform bugs.
2. **Fastest iterating, active contributor bases**: Gemini CLI, OpenCode, Pi, Qwen Code. All four tools landed 10 PRs in the 48-hour window, with high velocity for both security patches and new feature merges. OpenCode in particular saw a massive recent velocity spike after maintainers unblocked a months-long PR review backlog, with 18 long-stalled community contributions merged in a single batch.
3. **Focused niche communities**: Kimi Code CLI, DeepSeek TUI. These two tools have smaller, tightly aligned user bases, with low volumes of spam reports and high signal bug reports from power users. Their smaller teams prioritize targeted, high-impact fixes for their core regional and enterprise user audiences.

## 6. Trend Signals
The digest delivers actionable insights for engineering teams and decision-makers:
1. Windows platform stability is no longer an afterthought, it is a critical competitive differentiator: 7 out of 9 tools report that Windows bugs make up more than 50% of their active open backlog, so teams building developer-facing AI tooling that neglect Windows + WSL2 testing will face disproportionate user churn.
2. MCP has reached critical mass: All major vendors are actively investing in their MCP implementations, so teams building reusable MCP servers can unlock native integration across all 9 top AI CLI tools without per-tool adapter work.
3. New LLM generation rollouts introduce weeks of widespread regressions: All tracked tools report compatibility bugs tied to recently launched 2026 models, so engineering teams should allocate 20-30% of sprint capacity to post-model-launch hardening for the next 3 months to avoid user-facing workflow breaks.
4. Enterprise buyers now mandate full transparency for AI CLI deployments: Top user requests across 5 separate tool communities include least-privilege default permission sets and granular per-user cost/usage observability, so offerings that lack these features will quickly lose out on enterprise procurement deals.
5. Independent open-source AI CLI tools now match or exceed the extensibility velocity of large vendor offerings: Teams evaluating AI CLI infrastructure for custom workflows are advised to avoid single-vendor lock-in, as independent options deliver better customizability with no forced platform-specific subscription requirements.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-13)
---
## 1. Top Skills Ranking
Ranked by cross-reference volume to high-comment community issues and overall ecosystem impact:
1.  **Skill-Creator 0% Recall & Cross-Platform Stability Fix Suite (PR #1298)**
    - Functionality: Resolves the broken `run_eval.py`/`improve_description.py` pipeline that incorrectly reports 0% recall for all skill descriptions, alongside fixes for Windows stream reading, trigger detection, and parallel worker support
    - Discussion highlights: Addresses a widely reproduced core bug referenced across 3 high-priority community issues with 15+ total reproductions from independent contributors
    - Status: Open | URL: https://github.com/anthropics/skills/pull/1298
2.  **Self-Audit Universal Output Quality Gate Skill (PR #1367)**
    - Functionality: A stack-agnostic pre-delivery audit skill that runs mechanical file verification followed by 4-dimensional reasoning checks to eliminate invalid outputs before they are shared with end users
    - Discussion highlights: Aligns with a popular community-proposed 3-step reasoning quality pipeline, and is framed as a universal drop-in improvement for all Claude Code sessions
    - Status: Open | URL: https://github.com/anthropics/skills/pull/1367
3.  **Document Typography Control Skill (PR #514)**
    - Functionality: Automated typographic quality assurance for AI-generated documents that fixes orphan word wrap, stranded section headers (widows), and multi-item numbering misalignment
    - Discussion highlights: Community feedback notes this solves a near-universal, rarely explicitly requested pain point for all AI document generation workflows
    - Status: Open | URL: https://github.com/anthropics/skills/pull/514
4.  **Dual Skill-Quality + Skill-Security Meta Analyzer Skills (PR #83)**
    - Functionality: Two meta-skills that audit submitted Claude Skills across 5 dimensions (structure, documentation, performance, security, compliance) to validate quality and block malicious behavior
    - Discussion highlights: Directly responds to the top-voted community security concern around unvetted third-party skills impersonating official Anthropic namespace entries
    - Status: Open | URL: https://github.com/anthropics/skills/pull/83
5.  **Full-Stack Testing Patterns Skill (PR #723)**
    - Functionality: A comprehensive testing reference skill covering the full testing trophy stack, from unit testing best practices to React component testing and accessibility validation
    - Discussion highlights: Fills a major gap in current skill coverage for professional software development use cases
    - Status: Open | URL: https://github.com/anthropics/skills/pull/723
6.  **OpenDocument (ODT/ODS) Format Support Skill (PR #486)**
    - Functionality: Adds support for creating, filling, parsing, and converting OpenDocument Format files for LibreOffice/ISO standard open document workflows
    - Discussion highlights: Delivers a long-requested open-standard document processing complement to the existing proprietary DOCX skill
    - Status: Open | URL: https://github.com/anthropics/skills/pull/486
7.  **Color Expert Reference Skill (PR #1302)**
    - Functionality: Centralized color expertise skill covering 8+ standardized color naming systems, use case guidance for 7+ color spaces, WCAG accessibility contrast validation, and accessible palette generation
    - Discussion highlights: Received positive early feedback from UI/UX and frontend developer community members
    - Status: Open | URL: https://github.com/anthropics/skills/pull/1302

---
## 2. Community Demand Trends
Aggregated from top-voted community issues:
1.  **Skills trust & security**: The highest-engagement community topic (34 comments on top issue #492) centers on preventing trust boundary abuse from community skills using the `anthropic/` namespace, with widespread requests for automated skill scanning and clear permission scoping
2.  **Enterprise team skill sharing**: 14 commenters on issue #228 are asking for native org-wide shared skill libraries to replace the current friction-prone manual .skill file sharing workflow between colleagues
3.  **Core skill-creator tooling reliability**: Sum of 18 comments across 3 high-priority issues note the official skill evaluation/optimization pipeline is effectively broken, with widespread requests for Windows compatibility fixes and a working description optimization loop
4.  **Output reliability guardrails**: Multiple proposals for agent governance, self-audit, and adversarial review quality gates to reduce hallucinations and invalid outputs across all use cases
5.  **Ecosystem deduplication**: 9 upvotes on issue #189 raise the high-priority pain point of duplicate overlapping skills bloating user context windows when installing official skill bundles

---
## 3. High-Potential Pending Skills
Active, recently updated open PRs with strong community support that are on track for near-term merge:
1.  The full suite of skill-creator bug fixes (PRs #1298, #1050, #1099): Last updated 2026-06-23, addresses 4+ confirmed critical bugs and will unblock the community's skill description optimization workflow for all users
2.  Self-Audit v1.3.0 quality gate skill (PR #1367): Last updated 2026-07-02, directly maps to the community-voted reasoning quality gate pipeline proposal and is positioned to be one of the highest-adoption meta-skills in the collection
3.  Dual skill-quality/security analyzer (PR #83): Last iterated 2026-01-07, has been in community review for 8 months and is the primary proposed mitigation for the top security vulnerability facing the skills ecosystem
4.  Full-stack testing-patterns skill (PR #723): Last updated 2026-04-21, has received widespread positive feedback from professional developers as a high-value addition that fills a major unmet need

---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated demand at the Skills level is stabilizing the core official skill-building tooling to make custom skill creation accessible for all contributors, closing critical trust and security gaps for shared distributed skills, and adding lightweight universal meta-skills that meaningfully improve the reliability of all Claude Code outputs across every user use case.

---

# Claude Code Community Digest | 2026-07-13
---
## 1. Today's Highlights
There are no new official stable or pre-release Claude Code versions published in the last 24 hours. Community activity was dominated by 30 recently updated triaged bug reports and feature requests, alongside 3 incoming contributor PRs that fix gaps in repository automation, plugin tooling, and public documentation. Multiple high-impact long-standing Windows platform bugs received new comment activity from affected users this week.

## 2. Releases
No new releases were logged in the 24 hour reporting window, no updates to share.

## 3. Hot Issues
Below are 10 of the most impactful recently updated community issues:
1. **[#15921](https://github.com/anthropics/claude-code/issues/15921) Windows VSCode extension ignores `.claude/settings.local.json` permissions** – The highest engagement open thread with 27 comments and 28 upvotes: even users running in `bypassPermissions` mode cannot apply custom permission rules for Bash/Write/Edit operations, breaking restricted workflow setups for Windows developers.
2. **[#43113](https://github.com/anthropics/claude-code/issues/43113) Request for TUI flag to defer word wrapping to the terminal** – The most popular feature request with 51 upvotes: users want Claude to stop inserting hard line breaks in prose/markdown output so content renders correctly on arbitrarily wide modern terminal windows.
3. **[#57132](https://github.com/anthropics/claude-code/issues/57132) Global `~/.claude/` permission rules do not apply at runtime on Linux** – 9 comments note that rules configured in the global settings file show as loaded in the `/permissions` view, but never match against files under the `~/.claude/` directory itself, forcing users to manually approve all edits to their global Claude configs.
4. **[#76743](https://github.com/anthropics/claude-code/issues/76743) Windows TUI click-to-focus incorrectly submits pending permission dialogs** – 4 comments highlight a critical UX flaw: the first click to bring a background Claude Code window to focus automatically selects the nearest permission dialog option, leading to accidental unintended approvals or rejections.
5. **[#76694](https://github.com/anthropics/claude-code/issues/76694) macOS Cowork new project flow missing folder selection option** – Reported 2 days prior, users note that after the recent Chat/Cowork product merge, the native desktop app no longer exposes the "Choose a folder" action for new projects, and defaults to a chat-style upload-only knowledge workflow.
6. **[#50724](https://github.com/anthropics/claude-code/issues/50724) Context compaction resurfaces stale skill arguments and drops latest user message** – 6 comments confirm the bug on v2.1.114: after automatic context compression, Claude resumes executing old 12+ hour skill invocations instead of picking up from the user's last active input.
7. **[#59833](https://github.com/anthropics/claude-code/issues/59833) PowerShell fails with exit code 1 on German-locale Windows 10** – A confirmed regression with 6 comments, where all PowerShell tool calls return empty stdout/stderr with no actionable error messages for DE-region Windows 10 installs.
8. **[#36258](https://github.com/anthropics/claude-code/issues/36258) Request to prioritize "Allow once" in MCP permission dialogs** – 5 upvotes from MCP power users, who note the current UI prioritizes persistent allow/deny options that increase accidental permanent permission grants.
9. **[#64534](https://github.com/anthropics/claude-code/issues/64534) Mac background dispatch ignores the `CLAUDE_CODE_DISABLE_1M_CONTEXT` flag** – 5 comments note that unattended background agent runs still throw "usage credits required for 1M context" errors even when the documented disable variable is set across all config surfaces.
10. **[#30232](https://github.com/anthropics/claude-code/issues/30232) Request to keep status line visible during permission prompts** – 6 upvotes from users running multiple parallel Claude Code instances, who currently lose visibility into per-instance progress when a permission prompt blocks their workflow.

## 4. Key PR Progress
Only 3 PRs were updated in the 24 hour reporting window:
1. **[#76986](https://github.com/anthropics/claude-code/pull/76986) fix(scripts): preserve existing labels when auto-closing duplicate issues** – Open contributor PR that fixes the repository's automation script, which previously overwrote all existing bug tags when marking an issue as duplicate, destroying valuable context for triage teams.
2. **[#76985](https://github.com/anthropics/claude-code/pull/76985) fix(plugin-dev): read full multi-line description in validate-agent.sh** – Open PR that resolves a bug in the official plugin developer tooling, where the agent validation script truncated long multi-line frontmatter descriptions to only the first line, causing false validation failures.
3. **[#15165](https://github.com/anthropics/claude-code/pull/15165) Update README.md** – Merged PR that fixes a broken public documentation link on the repository root, improving first-time user onboarding.

## 5. Feature Request Trends
Three top priority feature directions have emerged from recent community submissions:
1. TUI UX refinements including native terminal word wrap support, persistent visible status lines during user prompts, and optimized keyboard navigation for permission dialogs.
2. Permission system quality of life improvements: default deny rules for `.env` and sensitive secret files, easier one-time approval flows for MCP connections, and reliable rule matching across global and local configs.
3. Multi-session collaboration capabilities: support for inter-session context sharing and task delegation between multiple running Claude Code instances, plus manual control over agent session completion to prevent automatic unwanted archive.

## 6. Developer Pain Points
Four recurring high-frequency frustrations were visible across recently updated issues:
1. Disproportionate volume of unpatched Windows-specific platform bugs, ranging from permission config failures to locale-specific tool errors and click-through permission dialog security risks.
2. Widespread false positive AUP/cyber safety interruptions that break legitimate development workflows for use cases including algorithmic trading apps, RMM/remote desktop tooling, and Minecraft mod development.
3. Entitlement/usage credit bugs even for paid Max 5x plan users, including spurious 1M context required errors when running medium-effort tasks, and the `CLAUDE_CODE_DISABLE_1M_CONTEXT` environment variable not being respected across all product components.
4. Context compaction reliability gaps that cause lost user input and resurfaced stale prompts, breaking long-running multi-hour dev sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-13
---
## 1. Today's Highlights
No new official Codex releases were published in the 24-hour reporting window. The top trending community discussion centers on a high-impact GPT-5.6 Sol multi-agent bug that blocks custom subagent model configuration, which has amassed over 100 upvotes and 50 comments in the last 48 hours. A large batch of Windows platform-specific bugs across the Codex desktop app, CLI and VS Code extension received new triage updates and user reports, with only one merged UX improvement PR landing for the core editor composer.
## 2. Releases
No new stable or pre-releases of OpenAI Codex were published in the 24-hour window ending 2026-07-13, this section is omitted.
## 3. Hot Issues
1. **GPT-5.6 Sol cannot specify subagent models, forcing all subagents to use Sol instances** ([#31814](https://github.com/openai/codex/issues/31814)): The highest-engagement open issue this week with 55 comments and 119 upvotes. This bug breaks multi-agent workflows that rely on mixing specialized lightweight models for code execution and heavy reasoning models for planning, with users currently sharing manual workarounds to disable the auto-enabled MultiAgent V2 toggle.
2. **Make weekly limit reset deterministic** ([#9508](https://github.com/openai/codex/issues/9508)): Long-running enhancement request with 44 comments and 31 upvotes from Pro tier users. Non-deterministic weekly quota resets break scheduled CI/CD automation workflows that expect consistent, predictable quota windows.
3. **Windows Codex WSL agent mode fails with AbsolutePathBuf deserialization error** ([#16815](https://github.com/openai/codex/issues/16815)): 21 comments, 12 upvotes. This breaks all WSL2-hosted agent sessions for Windows developers running cross-platform stacks, with the community sharing custom path mapping scripts as temporary patches.
4. **VS Code Codex extension Shift+Tab no longer toggles Plan Mode post latest update** ([#32147](https://github.com/openai/codex/issues/32147)): 6 comments, 6 upvotes. The broken keyboard shortcut disrupts core daily workflow for IDE users who rely on Plan Mode to review generated code before execution.
5. **fetch-codex-manual.mjs fails after OpenAI docs redirect drops x-content-sha256 header** ([#31984](https://github.com/openai/codex/issues/31984)): 5 comments, 12 upvotes. This breaks all custom skills that dynamically pull official Codex documentation for context, with users sharing forked versions of the script that remove the hardcoded SHA validation check.
6. **Multi-terminal Codex CLI freezes due to SQLite lock contention with no BUSY retries** ([#20213](https://github.com/openai/codex/issues/20213)): 6 comments. This blocks parallel development workflows where users run multiple Codex CLI sessions against the same project directory, with users testing manual SQLite timeout overrides to reduce deadlocks.
7. **Built-in `wait` tool capped at 50s causes excessive token burn as MultiAgent V2 re-samples every 50s** ([#32640](https://github.com/openai/codex/issues/32640)): New high-severity bug. Users report 10-100x unexpected token consumption for long-running background tasks (e.g. waiting for CI builds), with many disabling MultiAgent V2 entirely to avoid excess credit charges.
8. **Closed: Windows Desktop missing mcp__node_repl__js tool even with Computer Use enabled** ([#30486](https://github.com/openai/codex/issues/30486)): 12 comments. Users confirm the latest 26.707 patch fully resolves the missing JavaScript execution tool bug, unblocking full Computer Use functionality on Windows.
9. **Closed: Viewing images triggers infinite reconnecting loops in Codex desktop** ([#32394](https://github.com/openai/codex/issues/32394)): 4 comments. macOS users confirm the recent hotfix resolves the connectivity regression, eliminating forced full app restarts when rendering image attachments.
10. **GPT-5.6 Terra and Sol exhaust 5-hour usage limits within minutes** ([#32606](https://github.com/openai/codex/issues/32606)): New high-impact issue. Multiple users with purchased extra Codex credits report their per-5-hour quota is drained far faster than expected, with OpenAI support flagging it as an active under-investigation accounting bug.
## 4. Key PR Progress
Only 1 PR registered updates in the 24-hour reporting window:
1. **Improve composer completion target resolution** ([#32628](https://github.com/openai/codex/pull/32628)): Merged by the core bot team. This change fixes longstanding UX gaps by correctly resolving `@` and `$` mention completion targets on both sides of the cursor, prioritizing the nearest editable mention when multiple file/skill/plugin candidates overlap, and eliminating spurious completion popups across line breaks.
## 5. Feature Request Trends
Three dominant requested feature directions emerged from recent issues:
1. **Automation usability upgrades**: Top asks include deterministic weekly quota resets, one-click manual trigger for scheduled automations, and persistent dedicated thread delivery for recurring automation runs (instead of spawning a new isolated chat per run).
2. **Explicit multi-agent configuration controls**: Users are requesting native UI toggles to manually assign different model tiers to spawned subagents, instead of forcing all child agents to inherit the parent session's model settings.
3. **Cross-platform feature parity**: Windows developers are requesting full parity with existing macOS Codex functionality including fully working WSL agent mode, reliable ChatGPT mobile remote pairing, and native Computer Use support for Android emulators.
## 6. Developer Pain Points
Recurring high-frequency frustrations across the issue tracker:
1. Windows platform stability accounts for over 50% of recently updated open bugs, covering the desktop app, CLI, VS Code extension, Computer Use and in-app browser functionality, making Windows parity the highest-priority stability gap for most developers.
2. GPT-5.6 model tier rollout regressions: New bugs tied to MultiAgent V2's default behavior, unexpected quota consumption, missing exposed execution tools, and forced subagent model locks are causing widespread workflow breaks for early adopters of the latest Sol/Terra/Luna model tiers.
3. Shared state contention: Users running multiple Codex sessions against the same project still face unhandled SQLite database deadlocks and stale MCP/skill inventory entries after local plugin updates, requiring frequent full app restarts to resolve broken functionality.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-13
Source: github.com/google-gemini/gemini-cli

---
## 1. Today's Highlights
Today's updates prioritize critical security hardening, dependency vulnerability patching, and triage of high-impact user-reported agent stability issues. Maintainers closed a batch of 11 long-running security hardening PRs, while 30 top community issues were re-tagged for upcoming retesting sprints. New developer tooling for local behavioral evaluation reporting also landed to streamline contributor test workflows.

## 2. Releases
No new public releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent reports false GOAL success after hitting MAX_TURNS** (10 comments, 2 👍) – This P1 bug hides that subagents were interrupted before completing their code investigation work, leading users to trust incomplete analysis results.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409): Generalist agent hangs indefinitely** (7 comments, 8 👍) – The most upvoted open agent bug, this breaks all basic workflows (even simple folder creation) when the CLI defers to a subagent, requiring users to manually disable subagent delegation to work around it.
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873): Zero-dependency OS sandboxing for Gemini 3 native bash affinity** (8 comments, 1 👍) – This large P2 enhancement will unlock the full native POSIX tool fluency of new Gemini 3 model variants without compromising user system security.
4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353): Robust component-level evaluations** (7 comments) – Core EPIC tracking expansion of behavioral test coverage across 6 supported Gemini model variants to catch agent regressions before release.
5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745): Assess AST-aware file operations** (7 comments, 1 👍) – Investigation into adding AST-native read, search, and code mapping to reduce token bloat and eliminate unnecessary turns from misaligned file snippet reads.
6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell execution stuck in "awaiting input" after command completes** (4 comments, 3 👍) – Common UX break that hangs the CLI for even trivial non-interactive shell commands used in everyday dev workflows.
7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21409): Underutilization of custom user skills and subagents** (6 comments) – Power users report that the CLI will almost never trigger their pre-built custom skills and subagents automatically, requiring explicit manual prompting to activate them.
8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522): Auto Memory retries low-signal sessions infinitely** (5 comments) – Background memory processing wastes resources and fills logs by repeatedly reprocessing sessions the agent already marked as low-utility.
9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983): Browser subagent fails on Wayland** (4 comments, 1 👍) – Blocks all browser automation workflows for Linux desktop users running modern Wayland compositors.
10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079): Symlinked custom agents not recognized** (4 comments) – Breaks dotfile sync workflows for power users who store their custom subagent definitions in cross-device shared config directories.

## 4. Key PR Progress
1. **[#28369](https://github.com/google-gemini/gemini-cli/pull/28369): Add local evaluation report command** – New contributor tooling that lets developers run `npm run eval:report` to aggregate pass rates across models directly from local Vitest outputs.
2. **[#28368](https://github.com/google-gemini/gemini-cli/pull/28368): Upgrade Vitest to fix CVE-2026-47429** – Patches a critical severity dependency vulnerability flagged by Trivy in the test runtime.
3. **[#28367](https://github.com/google-gemini/gemini-cli/pull/28367): Upgrade shell-quote to 1.8.4 for CVE-2026-9277** – Fixes a critical shell injection attack surface in the CLI's shell parsing library.
4. **[#28365](https://github.com/google-gemini/gemini-cli/pull/28365): Scope core tool wildcards to built-in tools** – Fixes a widely reported bug where filtering the `tools.core` list broke all user-installed MCP tools by defaulting to a universal deny rule.
5. **[#28181](https://github.com/google-gemini/gemini-cli/pull/28181): Fix DNS rebinding SSRF bypass in web_fetch** – Closed critical security hardening patch that adds runtime DNS resolution checks to the `web_fetch` tool's private IP blocklist.
6. **[#28175](https://github.com/google-gemini/gemini-cli/pull/28175): Require user confirmation for shell parameter expansion** – Blocks unintended execution of potentially malicious parameterized shell commands, fully denying this behavior in YOLO non-interactive mode.
7. **[#28364](https://github.com/google-gemini/gemini-cli/pull/28364): Deep merge user model configs over defaults** – Fixes a long-running bug where shallow config merging overwrote nested custom `generateContentConfig` overrides set by users.
8. **[#28171](https://github.com/google-gemini/gemini-cli/pull/28171): Prevent silent scope expansion on task failure** – Stops the agent from automatically reading full files or running unapproved system commands after targeted narrow review tasks fail.
9. **[#28363](https://github.com/google-gemini/gemini-cli/pull/28363): Fix AbortSignal listener leak in ShellExecutionService** – Eliminates memory leaks in long-running CLI sessions that execute hundreds of shell commands.
10. **[#20238](https://github.com/google-gemini/gemini-cli/pull/20238): Mitigate antivirus false positives for error reports** – Moves error report temp files out of the system-wide temporary directory to a dedicated `~/.gemini` path to reduce Windows Defender and third-party antivirus flags.

## 5. Feature Request Trends
1. AST-native code workflow upgrades: Most popular feature asks focus on adding semantic code awareness to reduce token bloat, cut unnecessary tool calls, and improve accuracy for repository navigation tasks.
2. Subagent usability improvements: Power users are requesting exposed subagent trajectory views in the `chat share` output, better automatic subagent triggering, and more robust permission controls for custom agent execution.
3. Auto Memory system hardening: Multiple requests for deterministic secret redaction, invalid patch quarantine, and removal of infinite background retry loops for the new memory feature.
4. Sandboxed bash execution: Community demand for a secure zero-dependency sandbox that unlocks Gemini 3's native fluency with standard POSIX tools without restrictive permission prompts.

## 6. Developer Pain Points
1. Persistent agent stability gaps: High rates of unhandled hangs, false success status reports after MAX_TURNS interruption, and near-zero automatic triggering of user-defined custom skills break expected workflows for many users.
2. Shell execution UX failures: Common issues including post-completion process hangs, unhandled interactive init prompts (e.g. when creating new Vite projects), and randomly scattered temporary auto-generated script files polluting workspaces.
3. Configuration friction: Symlinked custom agents not being detected, shallow merging breaking nested model config overrides, and unhandled 400 errors when more than 128 tools are registered.
4. Unaddressed security attack surfaces: Recent user reports uncovered multiple SSRF bypass, path traversal, and shell injection risks that maintainers are prioritizing for patching over the next 2 weeks.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-13
Tracking window: Last 24 hours of activity on `github.com/github/copilot-cli`

---

## 1. Today's Highlights
No new stable releases of Copilot CLI shipped in the 24-hour tracking period, with 14 total recently updated issues spanning critical crash bugs, session data integrity gaps, cross-platform workflow failures, and new voice mode feature regressions. The highest-community-traction WSL2 TUI freeze bug received new comments and maintainer visibility, while 7 newly filed high-severity actionable issues were triaged for prioritization in the last day. No major public roadmap announcements were shared by the maintainer team.

## 2. Releases
No new public releases of GitHub Copilot CLI were published in the tracking window.

## 3. Hot Issues
1. **[#4069 TUI wedges mid-turn on WSL2 + Windows Terminal](https://github.com/github/copilot-cli/issues/4069)**: The most popular active issue with 8 👍 and 7 comments, this bug leaves users with a frozen unresponsive terminal that ignores all interrupt signals (Ctrl+C/Ctrl+\), breaking active long-running Copilot sessions for a large subset of Windows developer users.
2. **[#4024 Voice mode ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)**: 8 comments confirm all three bundled local speech transcription models return empty results despite working audio capture, a core regression for the newly launched public beta of Copilot CLI voice functionality.
3. **[#4098 Session resume creates truncated events in events.jsonl](https://github.com/github/copilot-cli/issues/4098)**: A newly discovered data integrity bug leaves malformed concatenated JSON records in saved session storage, rendering previously resumed conversations completely unloadable on subsequent attempts.
4. **[#4102 Native V8 array-length crash during tool-heavy turns](https://github.com/github/copilot-cli/issues/4102)**: The official Linux x64 native binary aborts unexpectedly inside the V8 runtime during high-tool-use sessions and session resume flows, with no graceful error handling or crash recovery.
5. **[#4097 apply_patch stores deleted binaries in session history](https://github.com/github/copilot-cli/issues/4097)**: When a patch operation deletes a large binary file, the full binary is written to conversation history, permanently exceeding CAPI's 5MB request limit and breaking the session irreparably even after running `/compact`.
6. **[#3773 Broken low-contrast light theme](https://github.com/github/copilot-cli/issues/3773)**: 2 👍 and 2 comments highlight an accessibility regression that makes user prompt text and selection highlights unreadable in light mode, with no reported fix after being filed June 2026.
7. **[#4095 Windows plugin update fails with "Access is denied" while VS Code is running](https://github.com/github/copilot-cli/issues/4095)**: File locks held by the running VS Code Copilot extension block plugin update operations for the vast majority of Windows users who keep their IDE open during CLI use.
8. **[#4096 Third-party OAuth MCP tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096)**: Even after confirming a connected state for MCP servers like Atlassian's public remote server in the Copilot desktop app, no tools are surfaced in CLI sessions because OAuth credentials are not bridged across surfaces.
9. **[#4094 App-level session deletion does not sync to shared storage](https://github.com/github/copilot-cli/issues/4094)**: Deleting a session in the Copilot desktop app leaves orphaned records in the shared CLI session database and VS Code Copilot extension history, wasting local storage and leaking stale context.
10. **[#4070 Garbage text inserted when selecting TUI output for copy](https://github.com/github/copilot-cli/issues/4070)**: A terminal rendering regression injects invalid escape sequences into the user input line when highlighting generated output to copy, breaking the standard workflow of extracting generated code snippets from the TUI.

## 4. Key PR Progress
Only 1 PR was updated in the 24-hour tracking window, no additional active PRs were filed or modified in this period:
- **[#4100 Security hardening](https://github.com/github/copilot-cli/issues/4100)**: Newly filed open PR from external contributor `huangyoufeng76-debug` focused on general security improvements for the CLI, no implementation details are shared in the PR summary, and it is pending maintainer review.

## 5. Feature Request Trends
From recently updated issues, the top user-prioritized feature directions are:
1. Full end-to-end cross-surface sync for session state, MCP authentication, and user settings across the Copilot desktop app, CLI, and VS Code extension
2. Full production readiness for local voice mode support, with working routing for all bundled ASR speech models
3. WCAG-compliant accessible theming controls for the TUI, including a fully functional high-contrast light mode
4. Explicit data integrity checks for local session storage to automatically recover from or prevent corrupted saved chat records

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users in the last 24 hours:
1. Persistent TUI rendering and input regressions on WSL2 and Windows terminals, including full unresponsiveness, ignored interrupt signals, and invalid escape sequence injection during text selection
2. Total lack of graceful error handling for edge cases in local session persistence that destroys saved chat history permanently
3. Cross-platform file permission conflicts on Windows between Copilot CLI, the desktop app, and running VS Code instances that block basic operations like plugin updates
4. Partial MCP specification implementation that prevents authenticated third-party MCP servers from surfacing tools to the CLI, breaking most non-GitHub extensibility use cases
5. Unhandled model routing bugs that break all voice mode transcription functionality despite valid confirmed audio capture

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-13
Repository: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
No new official releases were published for Kimi Code CLI in the 24-hour tracking window. All recent active project updates center on platform reliability patches for Windows users, core API compliance fixes, and resolution of unhandled edge cases that break agent workflow execution. A single high-priority open bug related to incorrect organization TPD (Tokens Per Day) rate limit calculation received a new update, indicating growing user concern for enterprise usage tracking accuracy.

## 2. Releases
No new versions, pre-releases, or hotfix builds were published in the last 24 hours. The project’s latest stable release remains v2.6 as referenced in recent bug reports.

## 3. Hot Issues
Only 1 issue received active updates in the tracked 24-hour window, no additional community-reported issues with new activity were logged this cycle:
1. [#2318 [OPEN] Bug: Incorrect TPD calculation triggering unexpected organization rate limits](https://github.com/MoonshotAI/kimi-cli/issues/2318)
   - Details: Reported for Kimi CLI v2.6 running on Windows 10, the bug causes users to hit hard TPD caps at 1,505,241 tokens even when their organization’s allocated usage limit is far higher. The issue has 1 community upvote and no public comments to date. It is a critical blocker for enterprise teams running high-throughput automated code generation workflows that rely on predictable usage quotas.

## 4. Key PR Progress
4 open pull requests received maintainer updates in the 48-hour window ending 2026-07-13, no additional PRs were merged or modified this cycle:
1. [#2181 [OPEN] Fix: Add Windows binary version metadata](https://github.com/MoonshotAI/kimi-cli/pull/2181)
   - Adds automatic generation of Windows-compliant `FileVersionInfo` resources from `pyproject.toml` data, injects the metadata into both one-file and one-dir PyInstaller builds, and adds a new CI assertion to validate that all published Windows release artifacts carry non-empty version information, resolving missing executable metadata reported in #2178.
2. [#2350 [OPEN] Fix: Tolerate non-UTF8 worker output](https://github.com/MoonshotAI/kimi-cli/pull/2350)
   - Resolves crashes triggered when web session runners encounter locale-encoded output (such as Windows cp1252 smart punctuation) from child worker processes. The update replaces strict UTF-8 decoding with tolerant error handling, ensuring users see the actual worker failure message instead of a generic UnicodeDecodeError that hides root causes.
3. [#1771 [OPEN] Fix: Enforce string typing for tool message content in chat completions provider](https://github.com/MoonshotAI/kimi-cli/pull/1771)
   - Aligns Kimi CLI’s message formatting with the official Chat Completions API specification, which requires all `content` fields for `role="tool"` messages to be plain strings. The fix resolves unhandled 400 API errors triggered when multi-part tool result content arrays are sent directly to the API endpoint.
4. [#1769 [OPEN] Fix: Add graceful degradation for failed MCP server connections](https://github.com/MoonshotAI/kimi-cli/pull/1769)
   - Catches unhandled `MCPRuntimeError` exceptions in the agent loop that previously left the CLI frontend stuck in an infinite "thinking" state when a Model Context Protocol server failed to start (e.g. due to port conflicts between concurrent TUI and Web UI sessions). Errors are now surfaced to users as actionable alerts rather than silent hangs.

## 5. Feature Request Trends
Analysis of active issues and in-progress PRs identifies 4 high-priority user demand directions:
1. First-class native Windows platform parity, matching the stability and feature completeness of existing macOS/Linux Kimi CLI builds
2. Transparent, accurate enterprise usage tracking with granular TPD/TPM quota visibility, to avoid unexpected workflow blocks for organizational users
3. Robust, out-of-the-box Model Context Protocol (MCP) support, enabling seamless integration with custom context servers for extended agent use cases
4. Improved cross-compatibility with third-party OpenAI-spec API endpoints, eliminating formatting mismatches that break self-hosted and hybrid deployment workflows

## 6. Developer Pain Points
Recurring high-impact frustrations surfaced in recent community reports:
1. Uninformative crashes on Windows, where encoding mismatches and missing binary metadata make troubleshooting failures far slower than on Unix-based operating systems
2. Unhandled runtime exceptions that leave the CLI TUI or Web UI stuck in a loading state, forcing full restarts that interrupt in-progress agent workflows
3. Incorrectly enforced rate limits with no clear breakdown of counted token usage, making it impossible for enterprise teams to debug unexpected quota blocks
4. Cryptic 400 API validation errors with no context explaining that outgoing message formatting violates the target API’s spec, leading to hours of unnecessary debugging for custom integration use cases

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-13
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
Today’s updates center on a wave of GPT-5.6 model compatibility fixes, active community debugging of OpenCode v2.0 early access preview bugs, and prioritization of long-standing high-vote user pain points including broken clipboard copy and unbound SQLite database growth. A bulk automated PR cleanup process merged 18 previously pending contributions from June, delivering a batch of UX and stability improvements that had been stuck in review for weeks. Multiple paid Zen tier billing bugs that incorrectly throttle users with positive account balances are now marked as high priority by maintainers.

## 2. Releases
No new production or pre-release builds were published in the last 24 hours. The two published artifacts are internal validation assets for the OpenCode Drive automated PR pipeline:
- `pr-36567-evidence`: Verification artifact for the pending TUI prompt revert fix PR
- `pr-36516-evidence`: Visual test assets for PR #36516

## 3. Hot Issues (Top 10 Notable)
All links point to the official GitHub issue tracker:
1. **[#4283 Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283)** | 113 comments, 105 👍: The highest-engagement open bug affecting core user workflow, with users unable to select and copy AI response text directly from the interface. It has been open for 8 months and shows no signs of a root fix despite dozens of user reports.
2. **[#36140 GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)** | 21 comments, 84 👍: A very recent critical compatibility bug, where the newly released GPT-5.6 Luna model listed in the ChatGPT OAuth provider returns 404 not found errors for all requests, blocking access for users on paid OpenAI plans.
3. **[#5076 OpenCode should have better/safer defaults to be more security minded](https://github.com/anomalyco/opencode/issues/5076)** | 13 comments, 61 👍: Widely discussed by enterprise adopters, this issue flags that the default allow-all permission configuration gives the AI agent unregulated full file system access, posing serious remote attack surface risks for organizational deployments.
4. **[#30086 High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)** | 27 comments, 13 👍: Heavy multi-session users report that recent OpenCode updates reduced the number of concurrent supported sessions from 10 to just 3, causing system-wide lag and mouse stuttering for daily power users.
5. **[#3743 Loop in certain models](https://github.com/anomalyco/opencode/issues/3743)** | 26 comments, 12 👍: Popular third-party models including Kimi K2 and MiniMax 2 get stuck in infinite tool call loops, wasting user credits and requiring manual session termination to resolve.
6. **[#33318 [URGENT] Zen paid balance still hits FreeUsageLimitError](https://github.com/anomalyco/opencode/issues/33318)** | 8 comments: Paying users with active $20+ Zen balances report they are incorrectly throttled by the free tier daily usage cap, with no explanation from the billing dashboard for the unexpected restrictions.
7. **[#10448 Feature Request: Add Zen balance API endpoint](https://github.com/anomalyco/opencode/issues/10448)** | 6 comments, 21 👍: Power users are requesting a public API to query Zen account balances programmatically, to support embedding billing alerts in Linux system status bars and automation workflows that are impossible with only the web dashboard.
8. **[#33356 Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)** | 4 comments: Long-running OpenCode instances have their local SQLite event table grow without pruning, filling 97% of 22GB volumes for users on multi-month deployments, with no retention or compaction rules enabled by default.
9. **[#22132 OpenCode 1.4.3 hangs with local Ollama provider](https://github.com/anomalyco/opencode/issues/22132)** |15 comments: Privacy-focused self-hosted LLM users report that OpenCode hangs on simple prompts when connected to a local Ollama instance, even when the raw /v1/chat/completions Ollama API works perfectly outside of OpenCode.
10. **[#31972 New Layout and Designs cannot switch Plan/Build](https://github.com/anomalyco/opencode/issues/31972)** |7 comments: Users who opted into the new 2026 UI feature flag find that both the UI toggle and Ctrl+. shortcut for switching between Plan and Build coding modes stop responding completely, blocking core development workflows.

## 4. Key PR Progress (Top 10)
1. **[#36570 fix(core): preserve sqlite error details](https://github.com/anomalyco/opencode/pull/36570)** | Open: Improves debugging for the high-impact unbound SQLite growth issue by exposing full SQLite error details, replacing the previous generic "Failed to execute statement" message that hid actionable root cause information.
2. **[#36567 fix(tui): restore clicked reverted prompt](https://github.com/anomalyco/opencode/pull/36567)** | Open: Fixes a race condition where clicking revert on a prior user message did not populate the prompt bar with the old content, preserving file and agent references to match the existing `/undo` command behavior.
3. **[#32104 feat(tui): support drag-and-drop for .docx and .xlsx files](https://github.com/anomalyco/opencode/pull/32104)** | Closed: Delivers long-requested Office file attachment support, after previously rejecting .docx and .xlsx files as unparseable binary assets, letting users drag and drop spreadsheets and documents directly into the TUI.
4. **[#32094 feat(mcp): sort MCP servers in list by active status](https://github.com/anomalyco/opencode/pull/32094)** | Closed: Improves MCP UX by sorting the `opencode mcp list` output to show connected active servers first, followed by disabled, pending auth, and failed instances, instead of the previous unfiltered alphabetical ordering.
5. **[#32064 fix(tui): fix right-click paste on windows](https://github.com/anomalyco/opencode/pull/32064)** | Closed: Resolves a multi-year old Windows TUI bug where right-click mouse paste did not work, matching identical behavior to competing CLI AI coding tools including Claude Code and Codex.
6. **[#31995 fix(opencode): preserve reasoning_content for Moonshot/Kimi tool-call messages](https://github.com/anomalyco/opencode/pull/31995)** | Closed: Fixes broken Kimi model functionality where hidden reasoning content was incorrectly dropped during multi-step tool call sequences, breaking chain-of-thought execution for Moonshot models.
7. **[#32039 fix(core): improve search fallbacks](https://github.com/anomalyco/opencode/pull/32039)** | Closed: Patches ripgrep search behavior to pass `--no-ignore-vcs` for exact file globs, letting users find files located in git-ignored directories that were previously excluded from search results unexpectedly.
8. **[#32037 feat(tui): add disconnect option to provider /connect dialog](https://github.com/anomalyco/opencode/pull/32037)** | Closed: Adds a full UI workflow for logging out of connected providers, removing the previous hard requirement to drop to the CLI to run `opencode providers logout` to disconnect accounts.
9. **[#32000 fix(session): cancel active run before revert](https://github.com/anomalyco/opencode/pull/32000)** | Closed: Eliminates session corruption race conditions, ensuring any ongoing AI generation run is fully canceled before a revert operation is executed, preventing conflicting state changes on the backend.
10. **[#31973 fix(provider): refresh models in background](https://github.com/anomalyco/opencode/pull/31973)** | Closed: Moves plugin model discovery hooks to a background fiber, removing blocking UI freezes when OpenCode first loads to refresh provider model lists from external plugins.

## 5. Feature Request Trends
The most requested new functionality directions from the last 24h of issues:
1. Full native support for all OpenAI GPT-5.6 features, including the `max` reasoning effort level and correct context window sizing for Codex OAuth flows, with 3 overlapping related requests filed in the past 48 hours.
2. Optional automated compaction and pruning for the local `event` SQLite table, to prevent unplanned storage bloat for long-lived OpenCode instances without breaking the event-sourcing architecture.
3. A new pedagogical "Teach Mode" workflow targeted at new developers, providing guided onboarding to AI-assisted coding and teaching users to write effective prompts for coding tasks.
4. Programmatic Zen balance query API, to enable third-party dashboard and system status widget integrations that alert users when their paid

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-13
---
## 1. Today's Highlights
The 24-hour update window is dominated by stability patches, usability fixes, and early compatibility work for the recently released OpenAI Codex GPT-5.6 model line, with multiple high-priority long-standing agent lifecycle bugs closed. A new experimental full-history pager for TUI v2 was merged in draft form, eliminating the long-running pain point of lost session history outside of native terminal scrollback. No breaking API changes were shipped, with all recent updates focused on incremental reliability improvements for power users and enterprise integrators.

## 2. Releases
No new stable or pre-release versions of `pi-mono` were published in the past 24 hours.

## 3. Hot Issues
1. **#6477: Compaction summary requests omit session ID, breaking compaction on new OpenAI Codex models** ([link](https://github.com/earendil-works/pi/issues/6477)): The highest-voted open issue (8 👍, 5 comments) affects all users running the newly launched `gpt-5.6-luna` model, making manual and automatic session compaction fully non-functional for these workloads.
2. **#5886: Meta issue for AgentSession settlement/continuation bugs** ([link](https://github.com/earendil-works/pi/issues/5886)): Opened by core developer mitsuhiko, this 6-comment thread documents the recurring class of hard-to-reproduce crashes where the agent tries to resume execution from a corrupted transcript, unifying previously scattered bug reports for easier triage.
3. **#5463: Auto-compaction after final turn throws unhandled error** ([link](https://github.com/earendil-works/pi/issues/5463)): With 5 👍, this common workflow break occurs after the agent completes a normal final turn, throwing a fatal `Cannot continue from message role: assistant` error that blocks further user input.
4. **#6324: `/tree` branch summarization throws "No API key found" for ambient-credential providers** ([link](https://github.com/earendil-works/pi/issues/6324)): Affects enterprise users running AWS Bedrock and Google Vertex AI with ambient (no static API key) authentication, breaking the popular branch context summarization workflow for self-hosted cloud deployments.
5. **#6563: TUI drops image blocks from user messages** ([link](https://github.com/earendil-works/pi/issues/6563)): This multimodal workflow bug means pasted images are successfully sent to the model, but never displayed in the local chat transcript, creating confusing mismatches between user input and visible conversation state.
6. **#2257: Local model calls inherit 300s hardcoded timeout from Undici** ([link](https://github.com/earendil-works/pi/issues/2257)): A long-open bug affecting self-hosted LLM users, where long generations for large local models are cut off after 5 minutes regardless of user-configured timeout settings.
7. **#6459: Custom keybindings not applied on initial session start** ([link](https://github.com/earendil-works/pi/issues/6459)): Breaks power user UX for users installing third-party extensions (such as the popular `pi-powerline-footer`) who have customised their `keybindings.json` config file, requiring a manual `/reload` to activate bindings.
8. **#5329: Expose Pi waiting-on-user-input state for host integrations** ([link](https://github.com/earendil-works/pi/issues/5329)): Upvoted by 2 community members, this feature request is critical for third-party embedding tools such as the `cmux` Pi bridge that cannot currently distinguish between an idle agent and an agent blocked on a user prompt.
9. **#6555: Compaction LLM calls do not inherit session transport settings** ([link](https://github.com/earendil-works/pi/issues/6555)): A niche but high-impact bug for GPT-5.6 users that have disabled SSE and configured WebSocket transport for their sessions, where background compaction calls fall back to default SSE and fail.
10. **#6569: `gpt-5.6-luna` returns 404 for valid Codex accounts** ([link](https://github.com/earendil-works/pi/issues/6569)): A frequently reported user issue where Pi cannot access models that work correctly in the official ChatGPT Codex app, linked to cached stale model metadata for user accounts.

## 4. Key PR Progress
1. **#6582: Fix forceAdaptiveThinking for Bedrock models** ([link](https://github.com/earendil-works/pi/pull/6582)): Patches the Bedrock provider to respect user-configured `compat.forceAdaptiveThinking` flags, removing the hardcoded allowlist that blocked custom-registered Claude 5 models from using extended reasoning modes.
2. **#6580: TUI v2 in-Pi full history pager over Ledger snapshot** ([link](https://github.com/earendil-works/pi/pull/6580)): Adds a native scrollable full session history viewer for experimental TUI v2, letting users browse months of old conversation history without relying on limited native terminal scrollback.
3. **#6577: Coerce numeric read ranges for file tool** ([link](https://github.com/earendil-works/pi/pull/6577)): Fixes the common class of bugs where string-typed `offset` and `limit` values passed to the file read tool break range calculation, normalising behavior across TUI, session tree, and HTML export views.
4. **#6572: Render image blocks in interactive user messages** ([link](https://github.com/earendil-works/pi/pull/6572)): Resolves issue #6563 by adding native image rendering for pasted user images in the TUI, showing a visible pending attachment count in the footer before submission.
5. **#5859: Send OpenAI Responses prompts as top-level instructions** ([link](https://github.com/earendil-works/pi/pull/5859)): Fixes incorrect system prompt handling across OpenAI, Azure OpenAI, and Codex Responses APIs, aligning Pi's request formatting with official vendor specifications.
6. **#6561: Disable terminal auto-wrap to fix TUI double rendering** ([link](https://github.com/earendil-works/pi/pull/6561)): Disables the DECAWM terminal auto-wrap mode to eliminate cursor desync bugs that occurred when rendering lines that exactly matched the terminal width, removing the root cause of frequent TUI rendering glitches.
7. **#6559: Prevent /tree navigation while tools are pending** ([link](https://github.com/earendil-works/pi/pull/6559)): Resolves issue #6558 by blocking branch switches while an active tool run is in progress, eliminating the bug where tool results get incorrectly appended to unrelated conversation branches.
8. **#6556: Expose Codex responses API to extensions** ([link](https://github.com/earendil-works/pi/pull/6556)): Unlocks extension developers' access to the full OpenAI Codex API surface, enabling custom extensions built exclusively for GPT-5.6 model workloads.
9. **#6565: Add new `pi-zai` enterprise extension** ([link](https://github.com/earendil-works/pi/pull/6565)): Adds full native support for the Z.AI LLM platform, including built-in quota tracking, connection retry resilience, and session-aware caching features.
10. **#6570: Lightweight scout extension example draft** ([link](https://github.com/earendil-works/pi/pull/6570)): An accidentally opened draft PR for a new minimal extension tutorial, that will be cleaned up and merged in a future update to simplify onboarding for new extension developers.

## 5. Feature Request Trends
The top requested functionality directions from recent updates include:
1. **Expanded sovereign LLM provider support**: Multiple community requests for native integration with EU-hosted zero-data-retention providers such as Scaleway Generative APIs.
2. **Extension API maturity**: High demand for stable, documented extension primitives including safe session replacement, deferred runtime reload, and atomic compaction coordination controls.
3. **GPT-5.6 native compatibility**: Users are requesting explicit native support for the OpenAI Responses Lite format optimized for the new `gpt-5.6-terra`/`sol` model lines.
4. **TUI multimodal parity**: Requests for full native rendering support for images, audio blocks, and other non-text content in the terminal interface.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced in the past 24 hours:
1. **GPT-5.6 compatibility gaps**: Most new user bug reports are tied to missing model discovery, broken compaction, and incorrect request formatting for the newly launched OpenAI Codex model family.
2. **Agent lifecycle edge cases**: Unhandled errors for post-turn cleanup, infinite hangs on unresponsive providers, and orphaned tool results remain consistent top pain points for power users.
3. **Ambient auth inconsistencies**: Enterprise users on AWS Bedrock and Google Vertex AI regularly encounter spurious "no API key found" errors for workflows that do not require static authentication credentials.
4. **Inconsistent environment variable behavior**: Environment flags like `PI_OFFLINE` incorrectly apply to privileged commands such as `pi update` despite documented behavior stating they are only active at runtime.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-13
---
## 1. Today's Highlights
Yesterday saw no new official stable releases, with the majority of engineering focus directed at resolving core daemon scalability bottlenecks, fixing longstanding reasoning stream processing bugs for Qwen 3.7 Max, and rolling out iterative UX overhauls for the Web Shell interface. Multiple high-priority CI failures were triaged automatically, and 7 previously open feature requests covering CLI usability, Web Shell features, and daemon stability were marked as closed after patch merges. The ecosystem also saw growing community demand for broader third-party model support, especially for xAI Grok coding models.

## 2. Releases
No new official releases were published in the last 24 hours. The scheduled v0.19.9 nightly build failed its quality, integration_none, and integration_docker pipeline checks, tracked at [Issue #6749](https://github.com/QwenLM/qwen-code/issues/6749).

## 3. Hot Issues (10 Notable Entries)
1. **[RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** | 20 comments, P2 priority: This high-discussion proposal aims to break the current 1-daemon = 1-workspace limitation, enabling self-hosted Qwen Code deployments to serve multiple isolated project environments from a single process, cutting operational overhead for team deployments drastically.
2. **[Restore real-time full-pane thinking streaming (v0.18.2 regression)](https://github.com/QwenLM/qwen-code/issues/5472)** | 1 upvote, 6 comments: Users reported they can no longer view the model's chain of thought in real time, with full reasoning only accessible after generation completes via the Ctrl+O shortcut. The feature is widely requested by developers who want to follow the agent's decision-making flow as it executes.
3. **[Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)** | 6 comments, P2 priority: This performance bug causes unnecessary full prompt cache invalidation every time a new hidden tool is revealed via search, wasting ~25% of token budget for projects using large custom tool sets.
4. **[Devlog + Living Spec: background agents for cross-session project persistence](https://github.com/QwenLM/qwen-code/issues/6755)** | 4 comments: A roadmap feature proposal that adds two dedicated background agents to automatically track project history (devlog) and current codebase state (living spec), eliminating the context loss that plagues long-running multi-session development workflows.
5. **[Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)** | 3 comments: The request addresses the current flaw that permanently loads all SKILL.md definitions into conversation history forever, even after they are no longer needed, causing unconstrained token bloat over long sessions.
6. **[Main CI failed: E2E Tests on commit 417d305](https://github.com/QwenLM/qwen-code/issues/6781)** | 2 comments, P1 priority: A critical main-branch E2E failure that blocks all subsequent merges, marked as ready for automated agent triage and fix.
7. **[Feishu worker reports ready with invalid credentials](https://github.com/QwenLM/qwen-code/issues/6779)** | 1 comment, P1 priority: This security flaw causes daemon-managed Feishu channel workers to advertise themselves as operational even when their configured credentials are invalid, leading to silent connection failures that are hard for admins to debug.
8. **[Support Grok models (Grok 3 / Grok 4 / Grok 4 Heavy)](https://github.com/QwenLM/qwen-code/issues/6774)** | 1 comment: A popular feature request to add native support for xAI's coding-optimized Grok models, which use a fully OpenAI-compatible API that requires minimal integration work.
9. **[Feature Request: Support inline model switching using /model <model-id> <prompt> command](https://github.com/QwenLM/qwen-code/issues/5967)** | Closed: The previously open request to cut the 2-step model switching workflow to a single inline command was marked completed after patch merge, improving CLI usability for users who regularly toggle between model variants for different tasks.
10. **[read_file outputs modified content instead of exact disk copy](https://github.com/QwenLM/qwen-code/issues/4077)** | 2 comments: A long-running bug that causes the LLM to receive modified versions of read files (with auto-injected YAML/Markdown separators), leading to constant edit failures when the agent tries to match modified content against disk state.

## 4. Key PR Progress (10 Entries)
1. **[revert(core): revert malformed streamed response retry logic](https://github.com/QwenLM/qwen-code/pull/6783)** | Open: Rolls back the recently merged #6754 patch that introduced unexpected side effects including aggressive filtering of valid stream content, resolving unintended dropped tool call issues.
2. **[fix(feishu): validate credentials before WebSocket startup](https://github.com/QwenLM/qwen-code/pull/6780)** | Open: Directly fixes the P1 Feishu false-ready credential bug (#6779) by running a pre-startup tenant token check, rejecting invalid credentials before the WebSocket connection is initialized.
3. **[fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)** | Open: Closes the prompt cache invalidation bug (#6721) by keeping the model-facing tool definition set static, returning new discovered tool schemas as part of the conversation content rather than modifying the underlying function declaration list.
4. **[feat(web-shell): editable user-scope settings and in-panel model management](https://github.com/QwenLM/qwen-code/pull/6768)** | Open: Adds a fully graphical settings management UI to Web Shell, eliminating the need for users to manually edit the underlying `~/.qwen/settings.json` file to configure model providers and global parameters.
5. **[feat(serve): add extension management v2](https://github.com/QwenLM/qwen-code/pull/6638)** | Open: Rolls out the new extension system for `qwen serve` that supports per-workspace activation policies, removing longstanding global extension conflicts for multi-workspace deployments.
6. **[fix(core): track thinking tags across streamed deltas](https://github.com/QwenLM/qwen-code/pull/6777)** | Open: Fully fixes the Qwen 3.7 Max bug that caused `<think>` reasoning tags to leak into the visible content field (#6666), tracking the full balance of reasoning tags across all stream chunks rather than processing individual deltas in isolation.
7. **[feat(web-shell): show sub-agents as a chronological transcript with a parallel-agent timeline](https://github.com/QwenLM/qwen-code/pull/6772)** | Closed: Overhauls the Web Shell sub-agent display to show all parallel execution steps in a single chronological timeline, no longer splitting sub-agent outputs across disconnected Result and Tools tabs.
8. **[feat(web-shell): add shadcn UI foundation](https://github.com/QwenLM/qwen-code/pull/6760)** | Closed: Adds standardized shadcn/Tailwind UI components, icon sets and theme tokens to the Web Shell codebase, laying the foundation for consistent, low-overhead UX iterations going forward.
9. **[feat(cli): Add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)** | Open: Adds full lifecycle management for daemon-managed channels via CLI, HTTP API and TypeScript SDK, allowing admins to reload, replace, stop or query integration workers without restarting the core qwen serve daemon.
10. **[fix(core): guide agent to pivot to read-only tools when plan mode blocks](https://github.com/QwenLM/qwen-code/pull/6764)** | Closed: Updates the plan mode error prompts to instruct the LLM to first gather context via read-only tools instead of immediately exiting plan mode when write operations are blocked, eliminating unnecessary workflow interruptions.

## 5. Feature Request Trends
1. **Daemon scalability for team self-hosting**: The highest priority roadmap focus is expanding the single `qwen serve` daemon to support multiple workspaces, low per-session overhead, persistent workspace registration across restarts, and dynamic channel configuration to reduce operational work for multi-user team deployments.
2. **Context efficiency optimizations**: A wave of new requests targets unconstrained token bloat, including skill context lifecycle management, stable prompt caching, and automatic memory compaction to keep context window usage predictable for large, long-running codebases.
3. **Web Shell extensibility**: Most recent UI feature requests target customizability for embedded use cases, including custom composer placeholders, custom session group colors, read-only transcript viewers, and in-app settings management to make Web Shell easier for third-party products to integrate.
4. **Ecosystem compatibility**: Users are requesting native support for more OpenAI-compatible model providers, starting with xAI Grok, to expand their available selection of coding-optimized reasoning models.

## 6. Developer Pain Points
1. **Recurring main-branch CI instability**: 3 separate E2E test failures were reported on the main branch in the last 24 hours, alongside a broken nightly release pipeline, blocking regular feature merges and stable tag publishing.
2. **Reasoning processing regressions**: Multiple new and old regressions affect model reasoning display, including `<think>` tag leaks from Qwen 3.7 Max, broken real-time full-pane thinking streaming, hurting developer ability to debug agent execution flows.
3. **Silent persistence failures**: Multiple state loss bugs have been triaged recently, including daemon restarts dropping dynamically registered workspaces, chat recording reporting success before writes are persisted to disk, and stale memory indices that break long session context.
4. **Unintuitive error handling**: Poorly written error prompts can mislead the LLM to take unintended actions (like immediately exiting plan mode) that waste user time, and unhandled terminal state resets cause garbled output when users interrupt CLI sessions with Ctrl+C.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-13
Repository: github.com/Hmbown/DeepSeek-TUI

---

## 1. Today's Highlights
No new official releases shipped in the 24-hour tracking window, with all core contributor activity focused on resolving high-impact reliability bugs and expanding multi-provider LLM support. Two new open PRs directly address gaps in offline cost tracking and add first-class MiniMax model integration, while maintainers triaged three long-running open issues related to Anthropic tool calling, skill invocation UX, and pricing accuracy for v0.8.69. The current update cycle prioritizes stability for multi-provider enterprise deployments of the TUI.

## 2. Releases
No new stable or pre-release versions were published in the last 24 hours.

## 3. Hot Issues
All 3 issues updated in the tracking window are listed below (total tracked issue volume is below 10 this cycle):
1. **#4329 Anthropic 400 tool calling validation error** | https://github.com/Hmbown/CodeWhale/issues/4329
   This critical bug breaks all Anthropic-powered function and subagent workflows, returning an unhandled 400 error when unpaired `tool_use` blocks are sent to the API. 6 ongoing user comments show widespread adoption impact for teams relying on Anthropic’s extended context models for code execution tasks.
2. **#3915 Skill invocation UX discards user input** | https://github.com/Hmbown/CodeWhale/issues/3915
   This long-running bug breaks natural one-shot skill calls using both the `$skill <task>` and `/skill <task>` syntaxes, silently dropping the user’s task text and forcing them to re-send their request as a separate message. Maintainer labeling and recent activity signal this is prioritized for a near-term patch to reduce friction for power users.
3. **#4335 Offline scorecard pricing is not provider-aware** | https://github.com/Hmbown/CodeWhale/issues/4335
   For v0.8.69 deployments, the offline spend tracker pulls pricing data purely from model ID, leading to incorrect cost estimates when identical model names are routed through custom gateways, self-hosted instances, or third-party reseller APIs. This erodes reporting accuracy for teams running multi-provider LLM stacks.

## 4. Key PR Progress
All 2 PRs updated in the tracking window are listed below (total tracked PR volume is below 10 this cycle):
1. **#4352 feat: Add MiniMax Messages-compatible route** | https://github.com/Hmbown/CodeWhale/pull/4352
   This community contribution adds full first-class MiniMax integration across the entire DeepSeek TUI stack, including provider registry entries, configuration support, CLI flags, native TUI selector support, and request client validation. Pre-registered metadata for MiniMax-M3 and MiniMax-M2.7 includes full context window specs and capability flags for vision and function calling.
2. **#4351 fix(scorecard): Bind costs to provider routes** | https://github.com/Hmbown/CodeWhale/pull/4351
   This PR directly resolves the #4335 pricing accuracy bug, adding optional `provider` and `effective_provider` fields to offline scorecard records while retaining full backward compatibility with legacy model-only JSON exports. It enables correct cost calculation for self-hosted models, custom gateway routes, unpriced public API endpoints, and Codex OAuth deployments.

## 5. Feature Request Trends
Three top user request directions emerged from tracked activity this cycle:
1. Expanded native first-party support for non-major LLM providers, to reduce the need for custom user-side adapter code
2. Granular, provider-aware usage tracking that works across heterogeneous multi-deployment LLM stacks including self-hosted and on-prem models
3. Polished one-shot skill invocation that eliminates redundant input steps for common workflow automation use cases

## 6. Developer Pain Points
Three high-frequency recurring frustrations are surfaced in this window:
1. Unhandled Anthropic tool calling validation errors that break subagent workflows without clear fallback or debug logging
2. Counterintuitive skill invocation behavior that silently discards user input, which leads to unexpected failed requests and erodes user trust in the TUI
3. Inaccurate offline spend reporting that cannot distinguish identical model names across different providers, leading to wrong cost data for teams auditing LLM usage at scale

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*