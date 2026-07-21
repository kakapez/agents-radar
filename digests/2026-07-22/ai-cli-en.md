# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-21 22:57 UTC | Tools covered: 9

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

# 2026-07-26 AI CLI Tools Cross-Tool Comparison Report
Prepared for technical decision-makers and developer audiences

---

## 1. Ecosystem Overview
The global AI CLI tooling landscape in mid-2026 has transitioned past early-stage experimentation to production-grade use case support, with 8 tracked active projects prioritizing enterprise reliability, cross-tool interoperability, and local/self-hosted deployment parity. Recent 24-hour activity shows a clear split between vendor-native tools tightly integrated with their parent LLM ecosystems, open-source community-led projects focused on extensibility, and regional optimized alternatives targeted at local self-hosted LLM user bases. 100% of tracked tools are actively addressing long-running stability gaps that previously blocked large-scale team rollouts, while converging on shared open standards to eliminate vendor lock-in for agent workflow data. Overall, the ecosystem is maturing faster than expected, with core feature sets nearly fully standardized across the top 4 leading tools.

---

## 2. Activity Comparison
| Tool Name | 24h Updated Hot Issues | 24h Active PRs | 2026-07-22 Release Status |
|---|---|---|---|
| Claude Code | 10 | 13 | New stable release v2.1.217 shipped |
| OpenAI Codex | 10 | 10 | New stable rust-v0.145.0 released |
| Gemini CLI | 10 | 10 | New v0.52.0 nightly build published |
| GitHub Copilot CLI | 10 | 1 | New pre-release v1.0.74-0 + stable v1.0.73 rolled out |
| Kimi Code CLI | 5 | 2 | No new public releases, pre-release fixes in progress |
| OpenCode | 10 | 10 | No new public releases, active triage of memory leak megathread |
| Pi | 10 | 10 | Consecutive production releases v0.81.0 + v0.81.1 shipped |
| Qwen Code | 10 | 10 | New stable v0.20.1 + `cua-driver-rs` v0.7.3 launched |
| DeepSeek TUI | 10 | 5 | No public release, in final integration phase for v0.9.1 |

---

## 3. Shared Feature Directions
Multiple high-priority requirements appear across unrelated tool communities, indicating broad industry demand:
1. **Full MCP (Model Context Protocol) Compliance**: Seen in OpenAI Codex and GitHub Copilot CLI communities, teams are requesting missing core MCP primitives (resources, prompts, remote OAuth authentication, dynamic tool updates) to unify custom tooling workflows across all AI CLI clients.
2. **Robust Subagent Lifecycle Management**: Reported across Claude Code, Copilot CLI, Qwen Code and Kimi Code CLI, users demand the ability to retain state of completed subagents, avoid infinite hangs, configure default models for fleet agents, and prevent unexpected mutation of parent session state.
3. **Native Local LLM / BYOK Parity**: Prioritized by Pi, GitHub Copilot CLI, Qwen Code, and DeepSeek TUI, developers want full functional parity between self-hosted local LLMs and cloud hosted models, with no missing features or artificial output limits.
4. **Cross-Platform Reliability Hardening**: Universal pain point across all 9 tools, with ongoing fixes addressing Windows performance regressions, Wayland Linux shell hangs, and macOS permission/keychain bugs that break long-running agent workflows.
5. **Session Portability**: Requested by OpenCode, Claude Code, and OpenAI Codex, users want per-project local session storage synced alongside git repos, and one-click full workspace migration between different AI CLI tools.

---

## 4. Differentiation Analysis
Tools segment clearly along 3 distinct axes of product focus, target users, and technical design:
1. **Vendor-Native Tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI)**: Feature focus centers on official enterprise deployment assets, native integration with parent company cloud ecosystems (AWS Bedrock for Claude, GitHub workflows for Copilot, GCP for Gemini), and SLA-backed cloud model performance. Target users are enterprise DevOps teams and professional developers with existing vendor cloud contracts.
2. **Community-Led Open Source Tools (Pi, OpenCode)**: Feature focus prioritizes zero vendor lock-in, supply chain security, extensible public extension APIs, and UX customizability. Technical design choices include Pi's deterministic signed release archives and OpenCode's user-configurable legacy layout toggle for long-time power users. Target users are self-hosters, open source contributors, and teams with strict data privacy requirements.
3. **Regional Optimized Tools (Kimi Code CLI, Qwen Code, DeepSeek TUI)**: Feature focus is optimized for Chinese-language local LLM ecosystems, with native support for regional self-hosted model endpoints, simplified custom provider configuration, and platform-specific additions like HarmonyOS compatibility. Target users are regional developer teams running air-gapped local AI stacks.

---

## 5. Community Momentum & Maturity
1. **High Maturity, Highest Activity Tier**: OpenAI Codex, Pi, Qwen Code, and Gemini CLI have >10 active PRs merged/updated in the 24-hour window, with hundreds of combined upvotes on top feature requests, and rapidly iterate to resolve user-reported regressions within hours of shipping. All four projects have well-defined public roadmaps and large active contributor bases.
2. **Stable Enterprise-Focused Tier**: Claude Code, GitHub Copilot CLI, and OpenCode have large installed user bases with more conservative, slower release cycles, prioritizing bug fixes and enterprise feature rollouts over rapid new functionality.
3. **Fast Growing Emerging Tier**: DeepSeek TUI and Kimi Code CLI have smaller but rapidly expanding regional communities, with high external community contribution rates, currently working towards their next major public version launch.

---

## 6. Trend Signals
These community observations provide actionable reference for developer teams building on AI CLI tooling:
1. MCP has become the de facto standard for custom AI tooling integration, so any team building third-party tools for AI agents should prioritize MCP compliance to ensure cross-client compatibility.
2. Native local LLM support is no longer a niche feature, all leading AI CLI tools now offer full parity between local and cloud model functionality, meaning teams can reliably plan air-gapped, disconnected self-hosted AI code workflows today.
3. Supply chain security for AI CLI runtimes is rising as a top enterprise requirement, as seen in Pi's verifiable signed release archives and Gemini CLI's recent critical a2a-server RCE patch, teams should prioritize tools with auditable build pipelines for production deployments.
4. Cross-tool workspace migration support will eliminate vendor lock-in for agent session data in upcoming releases, so teams no longer need to commit to a single AI CLI provider long-term.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
Data as of 2026-07-22, sourced from anthropics/skills official repository

---

## 1. Top Skills Ranking
Ranked by associated community issue engagement and update activity, 7 most high-profile open Skill PRs:
1. **PR #1298 [OPEN] fix(skill-creator): run_eval.py always reports 0% recall**  
   Functionality: Patches the core skill evaluation pipeline's broken recall calculation that returns 0% for all test queries, resolving gaps in eval artifact packaging, Windows stream reading, and trigger detection. Discussion highlights: Directly addresses high-severity bug Issue #556 with 12+ independent user reproductions, unblocking the official skill description optimization workflow.  
   Link: https://github.com/anthropics/skills/pull/1298
2. **PR #83 [OPEN] Add skill-quality-analyzer and skill-security-analyzer to marketplace**  
   Functionality: Two meta-skills that evaluate third-party Claude Skills across 5 dimensions of structural quality and security posture to flag malicious or broken community-submitted skills. Discussion highlights: Explicitly built to mitigate the top community-reported security vulnerability (Issue #492, 43 comments) around official namespace impersonation for unvetted community skills.  
   Link: https://github.com/anthropics/skills/pull/83
3. **PR #1367 [OPEN] feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)**  
   Functionality: Universal cross-stack auditing skill that validates AI output before delivery, first verifying all claimed output files exist, then running 4-layer reasoning quality checks ordered by damage severity. Discussion highlights: Tied to the widely debated 3-gate reasoning quality pipeline community proposal (Issue #1385).  
   Link: https://github.com/anthropics/skills/pull/1367
4. **PR #723 [OPEN] feat: add testing-patterns skill**  
   Functionality: Comprehensive full-stack testing guide skill covering testing philosophy, unit testing, React component testing, E2E testing, and test suite optimization aligned with modern production development best practices. Discussion highlights: Fills a documented large gap in the core skills library for enterprise developer users.  
   Link: https://github.com/anthropics/skills/pull/723
5. **PR #486 [OPEN] Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML**  
   Functionality: Adds native support for open, ISO-standard OpenDocument Format (ODT/ODS) files including template filling, parsing, and HTML conversion for LibreOffice/OpenOffice users. Discussion highlights: Addresses longstanding user requests for non-Microsoft office format support to avoid vendor lock-in.  
   Link: https://github.com/anthropics/skills/pull/486
6. **PR #514 [OPEN] Add document-typography skill: typographic quality control for generated documents**  
   Functionality: Automatically fixes common typographic defects in AI-generated documents including orphan word wraps, stranded section headers, and numbering misalignment for professional, client-facing output. Discussion highlights: Targets a near-universal pain point for users generating formal reports with Claude Code.  
   Link: https://github.com/anthropics/skills/pull/514
7. **PR #1302 [OPEN] Add color-expert skill**  
   Functionality: Self-contained color expertise skill covering 8+ standard color naming systems, use-case specific color space selection, accessibility contrast validation, and color harmony generation. Discussion highlights: Most recently iterated new skill PR (last updated 2026-07-21) targeting UI/UX design, print, and creative development use cases.  
   Link: https://github.com/anthropics/skills/pull/1302

---

## 2. Community Demand Trends
Distilled from top commented community issues, the highest-priority Skill-related demand directions are:
1. **Skill ecosystem safety & governance**: 43-comment top security issue #492 drove widespread support for namespace protection, automated skill auditing, and permission boundary controls to prevent trust boundary abuse for skills published under the official `anthropic/` namespace.
2. **Skill-creator tooling maturity**: 4 separate high-engagement issues all center on broken cross-platform functionality of the official skill evaluation and description optimization pipeline, representing the single largest volume of open user-reported bugs.
3. **Enterprise team workflows**: Top voted feature request (Issue #228, 7 👍) for native org-wide private skill sharing to eliminate manual, error-prone .skill file distribution across enterprise teams.
4. **New domain-specific functionality**: High user appetite for niche production-grade skills covering full-stack testing, agent safety governance, retro game development, and open-standard office document processing.
5. **Cross-system integration support**: Clear unmet demand for skills compatibility with AWS Bedrock, native MCP protocol interop, and Microsoft 365/SharePoint document access controls.

---

## 3. High-Potential Pending Skills
Actively updated, not yet merged PRs with high likelihood of landing in upcoming official releases:
1. Full `run_eval.py` fix chain (PRs #1298, #1323, #1099, #1050): Combined these patches fully resolve the widely reported 0% recall bug and all Windows compatibility gaps in the official skill creation toolkit, with almost complete alignment across community reproductions of the root cause.
2. PR #525 (pyxel retro game development skill): Last updated 2026-07-15, built on top of the maintained open source Pyxel MCP server, filling a clear unmet niche for indie game developer users.
3. PR #362 + #361 (skill-creator YAML/UTF-8 validation fixes): Complementary small patch set that eliminates silent parsing failures for multi-byte characters and unquoted special characters in Skill frontmatter, with no breaking changes to existing workflows.
4. PR #1302 (color-expert skill): Currently in final review stage as of 2026-07-21, targeted for inclusion in the next public marketplace skill refresh.
5. PR #723 (testing-patterns skill): No equivalent coverage exists in the current official skill library, and it addresses a top requested production developer workflow gap.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is maturing the core skill creation, validation, and safety tooling to lower the barrier for production-grade skill development, while expanding coverage of high-value enterprise and creative domain-specific functionality for end users.

---

# Claude Code Community Digest | 2026-07-22
---
## 1. Today's Highlights
This 24h window covers the rollout of Claude Code v2.1.217, 13 newly updated pull requests focused on hookify stability, enterprise deployment assets, and accessibility features, plus high-engagement community feedback around long-running data loss bugs and unapproved background updates. The most active community conversation centers on the unresolved macOS silent transcript deletion bug, which remains open with 23 comments from affected power users. New open-source contributions this period add production-ready AWS deployment artifacts for Claude Apps Gateway and a cross-platform text-to-speech hook for hands-free workflows.
---
## 2. Releases
### v2.1.217
The latest stable release ships two user-facing quality-of-life updates:
1.  Emoji shortcode autocomplete for the prompt input: Users can type `:heart:` to directly insert ❤️, or partial strings like `:hea` to surface emoji suggestions, with full disable support via the `emojiCompletionEnabled` setting
2.  New explicit warnings for transcript write failures (e.g. full disk errors) and cases where session saving is automatically disabled due to inheritance rules, to prevent previously silent data loss
---
## 3. Hot Issues
1.  **[#59248](https://github.com/anthropics/claude-code/issues/59248) [OPEN] Silent retention cleanup deletes session transcripts with no warning, opt-in, or recovery**  
    The highest-commented open bug (23 comments, 13 👍) affects macOS users who lost all historical workspace transcripts older than the active session with no recovery path. Community members are calling for a full opt-in for the retention cleanup routine and trash-bin recovery for deleted transcripts.
2.  **[#62370](https://github.com/anthropics/claude-code/issues/62370) [CLOSED] API Error: 400 messages: text content blocks must be non-empty**  
    14 comments, resolved as stale, covers a spurious error triggered when empty message blocks are passed to the Anthropic API that impacted users on versions prior to 2.1.200.
3.  **[#66742](https://github.com/anthropics/claude-code/issues/66742) [CLOSED] Anthropic API Error: Incompatible model for tool advisor when using claude-fable-5**  
    13 comments, 5 👍, a common post-upgrade breakage for users who switched to the new Fable 5 model, resolved as a duplicate of the core model routing bug fixed in v2.1.190.
4.  **[#54670](https://github.com/anthropics/claude-code/issues/54670) [OPEN] VSCode extension: Copy chat response as markdown source**  
    The highest-upvoted open feature request (8 comments, 17 👍), filed by developers who want to export Claude outputs directly to documentation, issue trackers, and markdown note-taking tools without manual reformatting.
5.  **[#75607](https://github.com/anthropics/claude-code/issues/75607) [OPEN] Server-side experiment silently removed Opus 4.8 thinking summaries, CLI self-updates even with autoUpdates: false**  
    7 comments, 8 👍, impacts Linux and VSCode users, with community members demanding that all A/B experiments and background updates honor explicit user opt-out settings.
6.  **[#77697](https://github.com/anthropics/claude-code/issues/77697) [OPEN] macOS: Keychain item written without trusted-application list -> auth prompt on every credential read**  
    A newly surfaced bug that breaks headless and scripted Claude Code workflows, forcing users to re-approve OAuth keychain access on every session launch.
7.  **[#67178](https://github.com/anthropics/claude-code/issues/67178) [OPEN] Claude's install.sh is broken for podman/docker image creation**  
    4 comments, blocks DevOps users from packaging Claude Code in containerized self-hosted environments for team-wide deployment.
8.  **[#79948](https://github.com/anthropics/claude-code/issues/79948) [OPEN] Request for built-in project-management layer for Claude Code**  
    A high-engagement new feature request from a long-time power user asking for native workflow guardrails to prevent agent sprawl, enforce task completion verification, and stop sub-agents from abandoning assigned work mid-run.
9.  **[#55456](https://github.com/anthropics/claude-code/issues/55456) [CLOSED] ~/.claude/settings.json loads in sessions started with CLAUDE_CONFIG_DIR pointing elsewhere**  
    5 comments, 4 👍, a resolved misconfiguration bug that caused hooks, plugins, and model settings to incorrectly leak across isolated workspaces.
10. **[#67476](https://github.com/anthropics/claude-code/issues/67476) [CLOSED] Native auto-updater ignores autoUpdates:false and autoUpdatesChannel pin on Windows**  
    3 comments, a cross-platform bug matching the Linux silent update report, marked stale closed as part of the ongoing auto-update hardening effort.
---
## 4. Key PR Progress
1.  **[#79898](https://github.com/anthropics/claude-code/pull/79898) [CLOSED] Add Claude apps gateway on AWS example deployment assets**  
    Publishes production-ready Terraform and deployment artifacts for running Claude Apps Gateway on AWS with Amazon Bedrock, as a peer to the existing official GCP example assets.
2.  **[#79873](https://github.com/anthropics/claude-code/pull/79873) [OPEN] fix(hookify): event: prompt rules never fire (payload key is `prompt`)**  
    Fixes a critical core bug where UserPromptSubmit custom hook rules never ran, as the rule engine read a non-existent `user_prompt` key instead of the actual `prompt` key sent by the Claude Code API.
3.  **[#79889](https://github.com/anthropics/claude-code/pull/79889) [OPEN] fix(hookify): make hook entrypoints runnable without CLAUDE_PLUGIN_ROOT**  
    Removes a hard environment variable requirement that broke hook execution for users launching Claude Code in custom non-standard plugin path environments.
4.  **[#79620](https://github.com/anthropics/claude-code/pull/79620) [OPEN] feat: Add text-to-speech read-aloud hook for accessibility**  
    New accessibility feature PR with multi-platform support for Piper (Linux), system `say` (macOS), and PowerShell (Windows), plus a default heuristic to skip code blocks during readout for better usability.
5.  **[#79644](https://github.com/anthropics/claude-code/pull/79644) [OPEN] fix: quote ${CLAUDE_PLUGIN_ROOT} in plugin hook commands**  
    Resolves a common macOS breakage caused by unquoted paths with spaces in the default `~/Library/Application Support` Claude Code directory.
6.  **[#79645](https://github.com/anthropics/claude-code/pull/79645) [OPEN] fix(hookify): read rule and transcript files as

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-22
---
## 1. Today's Highlights
Today’s lead update is the official launch of Codex rust-v0.145.0, which ships the long-awaited experimental paginated thread history system and expanded cross-tool import support for Cursor and Claude Code workspaces. Maintainers merged 18+ patches in the last 24 hours focused on resolving widespread Windows performance regressions linked to WMI exhaustion and orphaned child processes. Top-voted community feature requests for native LSP integration and IDE-native change approval flows continue to accumulate hundreds of positive reactions as the most demanded items on the public roadmap.

## 2. Releases
The stable `rust-v0.145.0` release rolled out alongside its preceding three alpha builds (v0.145.0-alpha.27 through alpha.29):
- New experimental paginated thread history with near-instant resume, full-text search, persisted custom session names, sub-agent workflow support, and persistent long-term memory storage
- Expanded `/import` command that migrates full Cursor and Claude Code assets including settings, MCP servers, plugins, active sessions, custom commands, and project configurations

## 3. Hot Issues
1. [#25719](https://github.com/openai/codex/issues/25719) – macOS Codex Desktop triggers `syspolicyd`/`trustd` CPU and memory runaway: With 345 👍 and 79 comments, this is the highest-engagement open bug, breaking workstation performance for all Apple Silicon macOS desktop users running the latest release.
2. [#8745](https://github.com/openai/codex/issues/8745) – LSP auto-detect + auto-install support for Codex CLI: 430 👍 and 59 comments make this the all-time top-voted feature request, as developers want native symbol and diagnostic context to drastically improve Codex code output accuracy.
3. [#2998](https://github.com/openai/codex/issues/2998) – IDE-integrated diff / approval flow: 215 👍 and 66 comments, filed by users tired of context-switching between Codex CLI terminal diff views and their IDE to approve code changes.
4. [#20214](https://github.com/openai/codex/issues/20214) – Windows 11 Codex App frequent freezes/stutters: 70 👍 and 63 comments, affecting even high-spec Windows desktops with 32GB+ RAM and no obvious resource constraints.
5. [#28058](https://github.com/openai/codex/issues/28058) – MultiAgentV2 encrypted messages remove readable task audit trail: 99 👍 and 26 comments, a critical blocker for enterprise users that require full human-readable audit logs for agentic code changes.
6. [#7291](https://github.com/openai/codex/issues/7291) – VS Code extension fails to revert changes: 17 👍 and 48 comments, a high-severity data safety bug that leaves unapproved changes unrecoverable after a rejected Codex task.
7. [#34260](https://github.com/openai/codex/issues/34260) – Windows Desktop unbounded taskkill.exe/conhost.exe storm exhausts WMI: 7 👍 and 13 comments, a newly reported recent regression that renders the entire Windows system unresponsive when Codex enters a cleanup loop.
8. [#25928](https://github.com/openai/codex/issues/25928) – Cursor Codex extension prompts randomly disappear before processing: 7 👍 and 12 comments, a major UX pain point for heavy users of the popular Cursor code editor.
9. [#18629](https://github.com/openai/codex/issues/18629) – Inline base64 tool images poison desktop threads on resume: 1 👍 and 11 comments, causing permanent "Bad Request" errors for affected saved threads and drastically inflated token usage from unoptimized inline image storage.
10. [#15310](https://github.com/openai/codex/issues/15310) – Scheduled desktop automations ignore full access sandbox configuration: 15 👍 and 20 comments, breaking all scheduled/recurring automation workflows that require elevated filesystem access.

## 4. Key PR Progress
1. [#34624](https://github.com/openai/codex/pull/34624) – Terminate Windows process trees with job objects: Implements the long-missing job object pattern for Windows spawned processes, directly fixing the ongoing orphaned taskkill/conhost process storm bugs.
2. [#34629](https://github.com/openai/codex/pull/34629) – Harden Windows elevated sandbox startup: Fixes multiple sandbox permission and ACL refresh bugs that caused unstable elevated session launches on Windows 10/11.
3. [#34621](https://github.com/openai/codex/pull/34621) – Load paginated model context across rollout lineages: Adds core infrastructure support for the new experimental paginated thread history feature released in v0.145.0.
4. [#34605](https://github.com/openai/codex/pull/34605) – Allow naming sessions with `/new` and `/clear`: Implements the persisted custom session names capability advertised in the latest stable release.
5. [#34625](https://github.com/openai/codex/pull/34625) – Fix Windows TUI navigation key handling: Resolves the widely reported garbled terminal input bug for Windows TUI users running the latest 0.144.x CLI builds.
6. [#34630](https://github.com/openai/codex/pull/34630) – Add policy-aware HTTP client builder: Refactors the core Codex network stack to unify reqwest usage across all components, improving security, retry logic, and request debuggability.
7. [#34626](https://github.com/openai/codex/pull/34626) – Scale skill metadata budgets with model context windows: Replaces the fixed character limit for skill descriptions with a dynamic 2% of context window budget, capped at 4000 tokens to optimize usage for large context window models.
8. [#34613](https://github.com/openai/codex/pull/34613) – Route Windows sandbox proxy traffic by restricting SID: Improves Windows sandbox network isolation, ensuring each sandbox session has fully isolated and policy-enforced network access.
9. [#30985](https://github.com/openai/codex/pull/30985) – Let idle auto-attached threads unload: Implements a 30-minute idle unload rule for background unused threads, drastically reducing background RAM usage for desktop users with dozens of saved open sessions.
10. [#34612](https://github.com/openai/codex/pull/34612) – Detach non-interactive subprocesses from stdin: Prevents background subprocesses (riprep, git commands, doctor diagnostics) from blocking TUI/CLI input hangs.

## 5. Feature Request Trends
- **IDE workflow parity**: The highest user demand is for porting the full Codex CLI terminal diff and approval flow natively into all supported IDEs (VS Code, Cursor) to eliminate context switching.
- **LSP native CLI support**: The all-time top requested feature is auto-detection and auto-installation of language servers to feed LSP diagnostics and symbol data directly to Codex CLI for more accurate code edits.
- **Cross-tool interoperability**: Users are pushing to extend the new `/import` functionality to support full workspace migration from all popular AI code editor tools, not just Cursor and Claude Code.
- **MCP standard compliance**: Multiple requests to fill gaps in the Codex MCP client implementation (including standard User-Agent headers for HTTP transport) to improve compatibility with third-party MCP servers.
- **Expanded editor support**: Emerging requests for official Codex extensions for Emacs and the JetBrains editor ecosystem to expand support beyond VS Code.

## 6. Developer Pain Points
- **Disproportionate Windows platform regressions**: 15+ active open bugs affect Windows users, including overlapping WMI CPU exhaustion, orphaned child process leaks, setup failures, 19s+ delays on trivial VS Code extension commands, and missing MCP process cleanup, leading to widespread performance complaints.
- **Session reliability gaps**: Recurring issues with thread corruption from inline base64 images, missing remote cross-device turn rendering in the TUI, and encrypted MultiAgentV2 audit trail loss break existing saved workflows and cause unexpected data loss.
- **Cross-environment consistency bugs**: Common failures for remote dev setups including VS Code Remote SSH extension loading failures, missing auto-included IDE context in containerized dev environments that break non-local workflow use cases.
- **macOS resource leaks**: Top desktop pain points include persistent `syspolicyd` CPU runaway and Xcode simulator workflow RAM exhaustion that destabilizes full macOS workstations during long-running agent tasks.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-07-22
---
## 1. Today's Highlights
Maintainers published the latest 0.52.0 nightly build alongside a batch of critical security and agent stability patches, including remediations for a high-severity a2a-server RCE flaw and widely reported generalist agent infinite hangs. 30 recently updated open issues remain focused on core UX reliability, evaluation infrastructure scaling, and Auto Memory system hardening. New automation pipelines for end-to-end automated issue triage and PR generation landed as part of the project's ongoing internal engineering efficiency effort.

## 2. Releases
A new nightly build was published in the last 24 hours:
- **v0.52.0-nightly.20260721.gacae7124b**: The official 2026-07-21 nightly release, packaged via automated version bump PR [#28471](https://github.com/google-gemini/gemini-cli/pull/28471). Full changelog comparing to the prior 2026-07-20 nightly is available [here](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b), and includes all security, auth, and stability fixes merged up to the release timestamp.

## 3. Hot Issues
1. [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323): P1 bug where the `codebase_investigator` subagent incorrectly reports full "GOAL success" after hitting the MAX_TURNS limit, hiding the fact no actual code analysis completed. It has 12 comments and 2 upvotes, marked for retesting as a top priority visibility fix for agent workflows.
2. [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409): P1 widely reported bug where the generalist agent hangs indefinitely after deferral, even for trivial tasks like folder creation. It has 8 comments and 8 upvotes, with users currently relying on the workaround of explicitly banning subagent use entirely to avoid hangs.
3. [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873): High-effort enhancement proposing zero-dependency OS sandboxing to leverage Gemini 3's native bash/POSIX tool training. It has 8 comments, representing a core roadmap item that would eliminate third-party sandbox overhead while boosting agent performance and security.
4. [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166): P1 core bug where shell execution sessions hang indefinitely with an "Awaiting user input" status after the underlying command finishes executing. It has 4 comments and 3 upvotes, breaking automated shell workflow use cases.
5. [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522): P2 bug where the Auto Memory feature retries processing low-signal user sessions indefinitely, wasting background compute resources for users running the CLI in persistent mode. It has 5 comments.
6. [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983): P1 bug that completely breaks the browser subagent for users running Linux on Wayland. It has 4 comments and 1 upvote, blocking all browser automation use cases for a large segment of desktop Linux users.
7. [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267): P2 bug where the browser agent completely ignores all `settings.json` configuration overrides (including custom `maxTurns` limits). It has 3 comments, defeating end-user customization workflows for advanced browser agent use.
8. [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093): P2 bug where subagents run automatically even after users explicitly disabled agent functionality in their configs, post v0.33.0. It has 3 comments, breaking privacy expectations for users who only intended to use MCP tool features.
9. [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525): P2 security bug that requires deterministic pre-model secret redaction for Auto Memory transcripts, to prevent sensitive data from entering LLM context before redaction runs. It has 3 comments, addressing top user data privacy concerns.
10. [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246): P2 bug where the CLI throws a 400 API error when more than 128 tools are available. It has 3 comments, blocking power users who load multiple custom skills and MCP server integrations from normal operation.

## 4. Key PR Progress
1. [PR #28472](https://github.com/google-gemini/gemini-cli/pull/28472): Critical core authentication fix that restores proper sequential cached credential verification and `GOOGLE_APPLICATION_CREDENTIALS` fallback, resolving a regression that broke Gemini Code Assist Agent Mode in VS Code with fatal exit code 41.
2. [PR #28469](https://github.com/google-gemini/gemini-cli/pull/28469): Fix that automatically rotates the active session ID when a permanent model fallback to `gemini-2.5-flash` occurs, eliminating the blocking stateful backend API error that crashed sessions mid-workload.
3. [PR #28470](https://github.com/google-gemini/gemini-cli/pull/28470) (Closed): Critical security hardening for the a2a-server backend that enforces workspace trust rules and task-level process isolation, blocking zero-click remote code execution (RCE) attacks on untrusted workspaces.
4. [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403): Security fix that closes a remaining bypass for the GHSA-wpqr-6v78-jr5g vulnerability, patching gaps in bash/PowerShell variable expansion pattern detection to block unapproved $VAR and ${VAR} shell injection attempts.
5. [PR #28389](https://github.com/google-gemini/gemini-cli/pull/28389): P1 agent stability fix that adds a shared real-world time budget deadline across all agent turn processing, stopping infinite-loop state transitions that caused the widely reported generalist agent hangs.
6. [PR #28397](https://github.com/google-gemini/gemini-cli/pull/28397): UX improvement that removes all blocking synchronous filesystem I/O from the shell tool critical path, eliminating React Ink terminal UI stutter and lag for interactive CLI use.
7. [PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305): Evals infrastructure enhancement that adds tool call timeline formatting for test failures, automatically printing a full numbered log of all agent tool calls, arguments, and errors directly in console output to cut engineer debug time.
8. [PR #28468](https://github.com/google-gemini/gemini-cli/pull/28468): New caretaker automation PR that adds a Cloud Run triage worker workflow triggered by Pub/Sub events, automating routine issue triage to reduce manual maintainer toil for the 50+ new open issues created daily.
9. [PR #28388](https://github.com/google-gemini/gemini-cli/pull/28388): Configuration bug fix that scopes the `tools.core` wildcard deny rule exclusively to built-in tools, resolving a widely reported issue where setting `tools.core` to an empty list accidentally disabled all user-installed MCP tools.
10. [PR #28474](https://github.com/google-gemini/gemini-cli/pull/28474): Enterprise-focused enhancement that adds a `skill_name` dimension to tool call telemetry, allowing admin users to track tool usage by custom skill for auditing and optimization of large internal CLI deployments.

## 5. Feature Request Trends
Recent updated issues point to four clear prioritized feature directions:
1. Agent capability upgrades built around Gemini 3's native bash affinity, including zero-dependency sandboxing and AST-aware codebase navigation that reduces token overhead and cuts redundant tool turns.
2. Browser agent resilience improvements including persistent session lock auto-recovery, full respect for user config overrides, and Wayland platform support for Linux desktop users.
3. Auto Memory safety and quality of life upgrades: deterministic pre-LLM secret redaction, automatic invalid patch quarantine, and termination of infinite retries for low-signal sessions.
4. Expanded debugging and transparency tooling, including exposing full subagent trajectories via the `/chat share` command, and including subagent context in automatically generated bug reports.

## 6. Developer Pain Points
Recurring, high-frequency frustrations from recently updated issues include:
1. Persistent agent reliability gaps: unreported failures after MAX_TURNS is hit, random infinite hangs in the generalist agent, and subagents running even after users explicitly disable agent functionality via config.
2. Frequent shell execution glitches: post-command hangs marked as "awaiting input", background shell runs that leave orphaned temporary directories, and blocking synchronous I/O that causes terminal UI stutter.
3. Unresolved configuration mismatches: browser agents ignoring user-defined `settings.json` values, symlinked custom agent files not being recognized by the CLI, and tool restriction rules that accidentally break third-party MCP integrations.
4. Ongoing privacy and security concerns around Auto Memory transcript processing, including

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-07-22
---
## 1. Today's Highlights
A new pre-release v1.0.74-0 ships today with a long-requested dedicated model selector for plan mode, alongside 30+ recently updated community issues spanning MCP protocol gaps, platform-specific stability regressions, and quality-of-life improvements for subagent and BYOK model workflows. High-engagement feature requests for expanded MCP functionality continue to lead upvote counts, as enterprise and power users push for full compliance with the MCP standard for custom tooling integrations.

## 2. Releases
Two releases have rolled out in the past 48 hours:
- **v1.0.74-0 (latest pre-release, 2026-07-22)**: New `/model plan` / `--plan` command that lets users select a dedicated LLM exclusively for plan mode operations: users can pass a model ID directly, set the value to `off` to reset, or run the command with no argument to open an interactive model picker. The CLI automatically reverts to the base session model when exiting plan mode. This release also improves session resume search to match saved session titles even when they have differing whitespace.
- **v1.0.73 (stable, 2026-07-20)**: Fixed a bug that broke Anthropic subagent operations when users added extra custom directories to their workspace, and resolved a relative link resolution failure for links embedded in custom agent instructions.

## 3. Hot Issues (Top 10 Notable)
All links point to the official GitHub issue tracker
1. **[#1305 Support CIMD for Remote OAuth MCP Servers](https://github.com/github/copilot-cli/issues/1305)**: 26 upvotes, 4 comments. This high-engagement feature request extends the existing DCR remote MCP support to simplify zero-pre-registration onboarding for enterprise-grade MCP servers, a top ask for organizations rolling out internal custom Copilot tooling.
2. **[#4012 Bug with BYOK: reasoning effort not supported for model "glm-5.2:cloud"](https://github.com/github/copilot-cli/issues/4012)**: 16 upvotes, 2 comments. The bug blocks users of all custom self-hosted BYOK models from using the `--reasoning-effort` flag, preventing teams from leveraging high-reasoning third-party models with Copilot CLI.
3. **[#1518 Support MCP resources and prompts](https://github.com/github/copilot-cli/issues/1518)**: 14 upvotes, 2 comments. A widely requested core MCP compliance feature that would unlock full functionality for hundreds of existing MCP servers that expose data and prompt templates alongside tools.
4. **[#2193 Default model configuration for /fleet subagents](https://github.com/github/copilot-cli/issues/2193)**: 14 upvotes, 3 comments. Eliminates the user pain point of having to repeatedly restate model preferences for every spawned /fleet subagent, a critical quality of life improvement for users running large parallel agent workflows.
5. **[#4188 Regression on plan-mode blocking shell commands](https://github.com/github/copilot-cli/issues/4188)**: 2 comments, 2 upvotes. A recent breaking change that blocks common shell tools including the official `gh` CLI from running in plan mode, breaking existing user workflows that used external utilities to enrich planning output.
6. **[#3622 Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622)**: 4 upvotes, 4 comments. A widespread quality of life regression introduced after v1.0.48, where copy operations appear to succeed but do not update the Windows system clipboard.
7. **[#4163 Copilot CLI 1.0.71 does not reap child processes — zombies accumulate under the copilot PID](https://github.com/github/copilot-cli/issues/4163)**: 2 comments. A critical stability bug for headless Linux deployments that leaks ~2 zombie processes per minute of runtime, crashing long-running Copilot sessions within hours.
8. **[#4183 Auto-compaction does not prevent CAPI 5 MB failure from accumulated normal tool history](https://github.com/github/copilot-cli/issues/4183)**: 5 upvotes, 1 comment. Causes permanent session failure for users running long, multi-step engineering tasks that stay within token limits but exceed the Copilot API's 5MB hard payload size limit.
9. **[#4207 Show per-subagent AI credit usage breakdown in /usage](https://github.com/github/copilot-cli/issues/4207)**: 5 upvotes. Newly triaged feature request that enables enterprise teams to track cost distribution across individual agent invocations, instead of only viewing global cumulative session usage.
10. **[#4208 Support explicit inline custom agent invocation and agent chaining within prompts](https://github.com/github/copilot-cli/issues/4208)**: 3 upvotes. A power-user feature that would enable granular, context-preserving orchestration of custom agents mid-conversation without breaking accumulated session state.

## 4. Key PR Progress
Only 1 PR received updates in the 24-hour reporting window:
- **[#3163 ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)**: Open PR from contributor tijuks that adds a GitHub Actions runner monitoring workflow to track related open issues for background agent retention and session stability, and run automated repro tests for open regression bugs.
No other active PRs were modified in the past 24 hours.

## 5. Feature Request Trends
Three dominant feature request directions emerged from recently updated issues:
1. **Full MCP Protocol Support**: Users are prioritizing missing core MCP primitives including resources, prompts, resource subscription notifications, mid-turn dynamic tool list updates, plus improved remote OAuth MCP flows with silent refresh token support and CIMD compatibility.
2. **Flexible Model & Agent Orchestration**: Top asks include one-click shortcuts for switching pre-saved model configs, default model assignments for fleet subagents, explicit inline custom agent chaining, and per-invocation usage tracking for shared billing accounts.
3. **Universal Customization Usability**: The community is pushing for a standardized `.agents` top-level directory convention for instructions, agents, and hooks that works in any local folder (not just Git repos), plus configurable auto-compaction thresholds and error retry counts for advanced use cases.

## 6. Developer Pain Points
Recurring high-frequency frustrations from user reports:
1. **Cross-platform regressions**: Silent clipboard failures on Windows and WSL tmux/screen environments, broken `view` tool path resolution in v1.0.73, and Linux zombie process leaks for long-running sessions.
2. **BYOK model compatibility gaps**: Custom model users are blocked from using the `reasoning-effort` configuration flag, and see transient API errors when their BYOK provider returns `reasoning_content` in streaming deltas.
3. **MCP enterprise auth bugs**: Remote OAuth MCP servers force unnecessary interactive re-auth instead of using cached valid refresh tokens, org-level MCP policy handshake timeouts cause permanent loading state, and registry policies reject valid MCP configs that include custom runtime authentication headers.
4. **Session stability limits**: Built-in auto-compaction does not prevent 5MB CAPI payload failures for tool-heavy sessions, and completed background agents are purged from registry storage too quickly leading to "agent not found" errors.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-22
Repository: github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights
No new official production releases were pushed in the 24-hour tracking window, but community contributors submitted 2 targeted bug fix PRs that directly resolve two high-priority recently reported functional defects. 5 new open bug reports covering UI, input handling, model tooling, and shell workflow functionality were filed, with active triage underway from the MoonshotAI engineering team. Multiple critical regressions affecting the latest 0.28.1 release on Windows and Linux are already paired with upstream fixes from external contributors.

## 2. Releases
No new stable or pre-releases were published in the last 24 hours.

## 3. Hot Issues
All 5 recently updated open issues (fewer than 10 total eligible items in the tracking window) are featured below:
1. [Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474): Persistent CLI UI shaking and full conversation re-render bug. This longstanding open bug affects Linux users running v0.19.2 with the K2.7 Code Thinking model, breaks session context during long coding sessions, and has received 2 👍 reactions and 1 triage comment from maintainers.
2. [Issue #2529](https://github.com/MoonshotAI/kimi-cli/issues/2529): Numpad numeric key inputs are unresponsive in the CLI input field on Windows 10. A core UX friction point for power users who frequently enter numeric parameters or file paths via the numpad, with no community comments posted as of tracking end.
3. [Issue #2528](https://github.com/MoonshotAI/kimi-cli/issues/2528): Excessively long unformatted output in shell mode on Windows 11 preview builds. Breaks readability for users running long file system scan commands via the integrated Kimi Code CLI shell, with no user engagement reported yet.
4. [Issue #2527](https://github.com/MoonshotAI/kimi-cli/issues/2527): Complete K2.5 model tool calling failure and infinite loop in goal mode. A critical functional regression that blocks all automated goal-driven workflows using the K2.5 model, as all tool calls return "Tool not found" errors across every supported call format.
5. [Issue #2526](https://github.com/MoonshotAI/kimi-cli/issues/2526): StrReplaceFile tool reports incorrect replacement counts for chained edits. Breaks multi-step refactoring operations that apply sequential edits to the same file, leading to unreported failed partial edits when a later edit references content inserted by an earlier change.

## 4. Key PR Progress
All 2 recently updated open PRs (fewer than 10 total eligible items in the tracking window) are featured below:
1. [PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530): fix(shell): stop blocking until timeout when a detached child holds the pipes. Submitted by community contributor ayaangazali, this fix resolves longstanding issue #2468 where the shell mode handler would hang indefinitely waiting for stdout/stderr EOF if a background detached daemon process holds pipe references.
2. [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524): fix(tools): count StrReplaceFile replacements against the running content. Submitted by issue reporter Sreekant13, this PR delivers a full direct fix for issue #2526, updating the sequential edit logic to calculate replacement counts against the progressively modified working file copy instead of the original unedited source file.

## 5. Feature Request Trends
From the recent batch of issues, the highest priority requested functionality directions are:
1. Full cross-platform keyboard event coverage for all standard input peripherals, including full numpad key support for Windows, Linux and macOS.
2. Native shell mode output quality of life improvements, including configurable truncation, pagination and formatting rules for long command outputs.
3. Explicit guardrails for tool calling and goal mode execution, including timeout limits, explicit "tool not found" error messaging, and loop detection to prevent hanging AI workflows.
4. More robust state tracking for file modification tools to natively support complex chained refactoring operations that span dozens of sequential edit steps.

## 6. Developer Pain Points
Recurring top frustrations reported by the user base over the tracking window:
1. Unaddressed UI rendering instability on Linux, which causes full conversation re-renders and loses user scroll context mid-coding task.
2. Partial keyboard input support on Windows that omits numpad keys, creating unnecessary extra keystrokes for power developer users.
3. Unhandled model-specific regressions in the latest 0.28.x release train, specifically the total loss of K2.5 model tool calling functionality.
4. Undocumented blocking behavior in shell mode that hangs the entire CLI when running detached background shell commands, breaking terminal workflow automation.
5. Faulty state tracking in core file edit tools that breaks end-to-end sequential refactoring tasks, forcing users to manually apply partial changes that fail silently.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-22
---
## 1. Today's Highlights
No new official OpenCode releases dropped in the 24-hour window covered by this digest. Maintainers are prioritizing triage of long-standing memory leak issues via a dedicated community megathread, while dozens of recently merged PRs resolve high-priority cross-platform, permission, and core UX bugs. Multiple top-upvoted feature requests for legacy layout retention, per-project local session storage, and automatic session naming are generating active community discussion.
## 2. Releases
No new official OpenCode releases were published in the 24-hour period ending 2026-07-22.
## 3. Hot Issues
1. **Memory Megathread (117 comments, 90 👍)** | https://github.com/anomalyco/opencode/issues/20695
   Centralized hub for all user-reported memory leak problems, with maintainers explicitly requesting community-submitted heap snapshots (not LLM-generated unvetted fixes) to diagnose widespread performance degradation, with dozens of reproducible cases already contributed.
2. **[FEATURE] Keep legacy layout option (25 comments, 27 👍)** | https://github.com/anomalyco/opencode/issues/37012
   The highest-voted recent feature request, coming from a large user cohort frustrated by the new layout's nested, hard-to-navigate structure, requesting a toggle to restore the familiar one-click-access legacy UI.
3. **[BUG] Paid OpenCode Go subscription shows "Insufficient balance" (10 comments)** | https://github.com/anomalyco/opencode/issues/37790
   Critical post-purchase UX bug where successfully processed Stripe payments do not sync to user workspaces, locking out paid users from access to OpenCode Go model endpoints.
4. **[BUG] Fatal "no such column: name" error after v1.16.2 update (14 comments, 15 👍)** | https://github.com/anomalyco/opencode/issues/31119
   Users who resumed using OpenCode after a long break encountered a broken database schema state post-upgrade, rendering the app completely unusable without manual intervention.
5. **[CLOSED] Missing unarchive flow for desktop sessions (17 comments, 31 👍)** | https://github.com/anomalyco/opencode/issues/12393
   A long-requested documented UI workflow to restore accidentally archived work sessions that has now been fully resolved for desktop users.
6. **[BUG] Subagents hang indefinitely after quick bash tool call (7 comments, 3 👍)** | https://github.com/anomalyco/opencode/issues/33028
   A cross-model no-timeout bug that blocks sessions entirely, requiring users to manually kill the OpenCode process to unblock work.
7. **[BUG] Windows ARM64 native TUI initialization failure (12 comments, 8 👍)** | https://github.com/anomalyco/opencode/issues/19130
   Native ARM64 Windows builds run headless commands correctly, but the interactive TUI fails to launch entirely, blocking adoption for ARM-based Windows developer hardware.
8. **[BUG] Opencode-go provider returns frequent 400/401/500 errors (6 comments)** | https://github.com/anomalyco/opencode/issues/37056
   Widespread API reliability issues for paid OpenCode Go subscribers, with large requests (300KB+ body) failing almost 100% of the time, breaking long-form code generation workflows.
9. **[CLOSED] Save session data to local project folders (12 comments, 20 👍)** | https://github.com/anomalyco/opencode/issues/14292
   Highly requested feature that resolves the current pain point of all sessions being stored in a global hidden directory, enabling users to sync conversations between machines alongside their git repos. The closed status indicates implementation is in active progress.
10. **[FEATURE] Auto-name new sessions from first message content (2 comments)** | https://github.com/anomalyco/opencode/issues/38163
   A fast-growing quality-of-life request that eliminates the confusion of dozens of identical "New session" untitled entries for power users with many active workspaces.
## 4. Key PR Progress
1. **[OPEN] Add Solidity file type and syntax highlighting** | https://github.com/anomalyco/opencode/pull/38200
   New feature that extends OpenCode support for Web3 smart contract development workflows, adding full Solidity syntax highlighting across both the TUI and desktop UI.
2. **[CLOSED] Classify transport and timeout errors as retryable** | https://github.com/anomalyco/opencode/pull/30638
   Bug fix that expands previously narrow retry logic beyond only ECONNRESET errors, drastically cutting hard session failures caused by intermittent network connectivity.
3. **[CLOSED] Add TUI `auto_scroll` config toggle** | https://github.com/anomalyco/opencode/pull/33248
   Quality-of-life improvement that lets users disable automatic sticky-bottom scrolling in the TUI, preserving their manual scroll position as new content loads.
4. **[OPEN] Make mini mode resize replay opt-in** | https://github.com/anomalyco/opencode/pull/37973
   Fix that resolves a disruptive UX pain point, where every terminal resize in `--mini` mode wipes full session scrollback and reprints the entire conversation, moving this behavior to an opt-in setting.
5. **[CLOSED] Restore terminal modes on TUI exit** | https://github.com/anomalyco/opencode/pull/33207
   Multi-year bug fix that prevents modified terminal states (DECCKM, mouse mode, kitty protocol) from persisting after OpenCode exits, breaking subsequent terminal session behavior.
6. **[CLOSED] Skip invalid model parsing for subagent "inherit" config** | https://github.com/anomalyco/opencode/pull/33202
   Resolves dozens of long-reported issues where custom subagents using the default `model: inherit` setting failed to load correctly.
7. **[CLOSED] Add large diff render guard to TimelineDiffView** | https://github.com/anomalyco/opencode/pull/33198
   Performance fix that prevents UI freezes when rendering extremely large diffs for massive refactoring operations by capping the maximum rendered line count.
8. **[CLOSED] Enable project settings editing for non-git projects** | https://github.com/anomalyco/opencode/pull/33164
   UX improvement that removes the arbitrary git repo requirement for modifying project settings, unlocking full functionality for non-versioned local project directories.
9. **[CLOSED] Add `--yolo` mode for headless deployments** | https://github.com/anomalyco/opencode/pull/33162
   New simplified permission bypass flag for server-side headless use cases, maintaining backwards compatibility with the legacy `--dangerously-skip-permissions` parameter.
10. **[OPEN] Stage file edits for ACP native review instead of duplicate writes** | https://github.com/anomalyco/opencode/pull/38198
    Correctness and performance fix that eliminates redundant disk writes in the AI Code Review workflow, preventing accidental unapproved code changes from persisting to disk.
## 5. Feature Request Trends
1. **UX Customization**: Users are heavily prioritizing UI flexibility, including a legacy layout toggle, configurable scroll behavior, and auto-named sessions to reduce navigation friction for power users managing many workspaces.
2. **Local Data Portability**: The top cross-cutting request is support for per-project session storage that saves conversations alongside target repos, rather than a global hidden directory, for seamless cross-machine sync.
3. **Ecosystem Expansion**: New contribution

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-22
---
## 1. Today's Highlights
The Pi team shipped two consecutive minor releases (v0.81.0 and v0.81.1) in the last 24 hours, delivering long-requested native local LLM management for llama.cpp alongside verifiable, supply chain-secure deterministic release archives. The team also rolled out patches for 10+ critical post-launch bugs reported by the community, including unkillable multi-hour SDK retries and session resume crashes on v0.81.0. Top user request #3357 for an official local LLM provider extension has now been marked closed, with full support for dynamically pulling model lists from llama.cpp, Ollama, and LM Studio endpoints.
---
## 2. Releases
Two new production releases were published in the last 24 hours:
- **v0.81.0**: Introduces native `llama.cpp` model management functionality: users can connect to a llama.cpp router, search and download Hugging Face models directly from the interface, and explicitly load/unload models with real-time progress tracking. Full docs are available at [earendil-works/pi llama.cpp guide](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md).
- **v0.81.1**: Adds verifiable, checksummed source archives to all GitHub releases, with step-by-step instructions for users to rebuild standalone binaries directly from the official release source to validate build provenance.
---
## 3. Hot Issues (Top 10 Notable)
1. **[#3357 CLOSED] Official local LLM provider extension** (30 comments, 43 👍): The highest-voted open issue in the repo, now resolved with v0.81.0's dynamic model list fetch from custom base URLs. Community users confirmed this works out of the box for Ollama, LM Studio, and llama.cpp setups, eliminating the need for third-party custom provider extensions.
2. **[#6278 CLOSED] New Claude models fail ~20% of edit tool operations** (23 comments, 9 👍): Resolves a bug where latest Anthropic Claude models invented unapproved extra keys in edit tool calls, triggering validation failures. The fix adds lenient parsing that strips unexpected properties from LLM-generated edit payloads.
3. **[#5653 OPEN] Migrate off npm Shrinkwrap** (19 comments): An in-progress architectural fix for a long-standing issue that causes duplicate copies of core Pi modules to be installed when mixing Pi packages as direct dependencies. This breaks module-level shared state like the API provider registry and creates hard-to-debug conflicts.
4. **[#6915 CLOSED] Pi crashes with `streamFunction is not a function` after v0.81.0 update** (14 comments): A widespread post-launch crash that affected users resuming existing sessions, fixed via a fast patch rollout within hours of the v0.81.0 release.
5. **[#6747 OPEN] API for enhancing agent message markdown** (7 comments, 2 👍): A popular in-progress feature request that will let extensions modify the rendered view of agent messages without altering the raw content sent to LLMs. Community members are most excited about the planned support for best-effort LaTeX formula rendering for STEM and research use cases.
6. **[#6774 OPEN] Slow Ctrl+G external editor launch when `os.tmpdir()` is crowded** (7 comments): A usability pain point for power users with tens of thousands of files in their temporary directories, who report 10+ second delays launching the external editor prompt flow.
7. **[#6163 CLOSED] Map Amazon Bedrock apiKey auth to bearer-token env** (4 comments): Fixes an enterprise AWS authentication incompatibility where Bedrock API keys were incorrectly passed as explicit `apiKey` parameters instead of mapped to the standard `AWS_BEARER_TOKEN_BEDROCK` environment variable.
8. **[#6911 CLOSED] OpenAI/Anthropic SDK retries sleep for full Retry-After (multi-day) and cannot be aborted** (3 comments): A critical reliability bug where the upstream SDKs ignore AbortSignal and sleep for the full Retry-After value (which can be days in length for strict rate limits), making Pi completely unresponsive to user cancellation.
9. **[#6877 CLOSED] Use provider-reported cost from Vercel AI Gateway responses** (3 comments): Eliminates incorrect cost tracking for non-catalog models routed through Vercel AI Gateway, which previously used estimated catalog pricing that often did not match actual billed charges.
10. **[#6882 CLOSED] Update brace-expansion to 5.0.7 for high-severity GHSA-3jxr-9vmj-r5cp** (2 comments): A supply chain security patch for a widely used transitive dependency with a published high-severity availability vulnerability.
---
## 4. Key PR Progress
1. **[#6913 CLOSED] Add release source archives** (author: christianklotz): Implements the v0.81.1 verifiable deterministic build feature, publishing signed, checksummed source archives alongside all release binaries to enable independent validation of build provenance.
2. **[#6927 OPEN] Add native OpenRouter OAuth support** (author: rsaryev): Implements a full PKCE S256 browser OAuth flow for OpenRouter, eliminating the need for users to manually copy and paste API keys to connect their OpenRouter accounts.
3. **[#6912 CLOSED] Never enable OpenAI/Anthropic SDK Retry-After sleeps** (author: catoncat): Fixes the unkillable multi-day retry bug reported in #6911 by forcing upstream SDK maxRetries to 0, using Pi's existing abortable agent-level retry logic for all rate limit handling.
4. **[#6903 OPEN] Speed up external editor launch** (author: christianklotz): Resolves the slow Ctrl+G launch issue from #6774 by moving temp editor files to a private, dedicated mkdtemp subdirectory instead of the crowded top-level `os.tmpdir()`.
5. **[#6881 OPEN] Use provider-reported cost for Vercel AI Gateway responses** (author: R-Taneja): Implements the feature requested in #6877, using the actual billed cost returned in Vercel AI Gateway response headers instead of estimated catalog rates.
6. **[#6901 CLOSED] Compaction & branch summarization follow retry policy** (author: davidbrai): Fixes #6647 where transient mid-stream network drops would fail full session compaction, adding full retry logic aligned with Pi's global retry settings and UI feedback for in-flight retries.
7. **[#6925 CLOSED] Await wl-copy exit code before claiming clipboard success** (author: kainulla): Resolves a silent failure bug on sandboxed Wayland Linux environments where `/copy` would incorrectly report success even if the Wayland compositor was unreachable.
8. **[#6916 OPEN] Add AgentHarness execution tools** (author: badlogic): Introduces a new abstraction that passes arbitrary execution context (session IDs, custom environment details) to agent tools, designed to support enterprise custom agent harness integrations.
9. **[#6928 OPEN] Pull reasoning options from models.dev** (author: davidbrai): Syncs Pi's model catalog with the latest public models.dev API, automatically updating supported thinking level configurations for all upstream LLM providers.
10. **[#6909 CLOSED] Add stable session entry IDs** (author: AdaCohenInstacart): Implements persistent, caller-reserved IDs for all session messages, enabling reliable audit logging, session replay, and cross-device session sync functionality.
---
## 5. Feature Request Trends
Across all recently updated issues, the most requested feature directions are:
1. **First-class local LLM support**: Users want full native parity between local llama.cpp/Ollama/LM Studio providers and cloud hosted LLM providers, including full edit tool support and cost tracking.
2. **Extensibility for the extension API**: Consistent requests for new public APIs to customize TUI message chrome, support deferred extension reloads, and render rich content (LaTeX, images) without modifying Pi core code.
3. **Session UX quality of life**: Multiple requests for better session management shortcuts, automatic context compaction that triggers before the window is 100% full, and native archived session search.
4. **Expanded provider ecosystem**: Support for more self-hosted and third-party gateway providers, including OpenRouter native OAuth, Amazon Bedrock Mantle, and Sockudo AI Transport for remote sessions.
---
## 6. Developer Pain Points
Recurring frustrations surfaced in the last 24 hours include:
1. **Post-release breakage gaps**: The v0.81.0 launch had multiple uncaught critical crash bugs affecting session resume, autocomplete, and build flows, exposing gaps in end-to-end test coverage for core agent runtime paths.
2. **Transitive dependency security risk**: The current npm Shrinkwrap setup pins old vulnerable versions of common utilities (like brace-expansion), requiring urgent last-minute patches when high-severity public advisories are published.
3. **Poor onboarding documentation**: New users repeatedly called out the missing installation section in the main README, plus lack of official clear guides for running Pi on mobile Linux environments like Termux.
4. **Cross-platform inconsistencies**: Bugs specific to Windows path separators, Wayland Linux clipboard handling, and macOS temp directory behavior point to limited cross-platform test coverage for non-standard setups.
5. **Non-abortable hangs**: Multiple reports of unkillable process states from upstream SDK-level operations (retries, WebSocket session timeouts) with no way for users to interrupt execution short of killing the Pi process entirely.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-22
---

## 1. Today's Highlights
Qwen Code shipped the stable v0.20.1 release with no breaking changes, delivering critical fixes to the autofix workflow and the new high-performance `cua-driver-rs` v0.7.3 update with full cross-platform prebuilt binaries. The 24-hour cycle also saw major progress on subagent lifecycle hardening, cold-start performance optimizations that cut 2MiB of unnecessary runtime bloat, and multiple security and reliability patches for the `qwen serve` daemon mode. Multiple long-standing P1 bugs affecting model switching, OpenAI-compatible subagent execution, and thinking-only model API calls were resolved.

## 2. Releases
All releases published in the last 24 hours:
- **v0.20.1 (Stable)**: No breaking changes, ships the label-driven autofix takeover workflow and a fix for the forced-dispatch green no-op bug in the autofix system.
- **v0.20.0-nightly.20260721.cda0e0348**: Pre-release nightly build for v0.20.0 validation, synced to the latest main branch commit.
- **cua-driver-rs v0.7.3**: New vendored relative-coordinate fork of the CUA driver, with codesigned + notarized macOS universal binary, unsigned x86_64/arm64 binaries for Linux (glibc 2.31 floor) and Windows.

## 3. Hot Issues
Top 10 noteworthy updated issues:
1. [#7156 (CLOSED, P1)](https://github.com/QwenLM/qwen-code/issues/7156): Fatal bug where subagents mutated the main session's active model, leading to context overflow recurrence after the earlier partial fix in PR #7119. 11 community comments, the most discussed issue of the period, affecting all users running subagent workloads.
2. [#7316 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7316): OpenAI-compatible models returning empty `working_dir` strings break all subagent launches, with 5 user reports from teams running self-hosted OpenAI-format models.
3. [#7056 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7056): Windows VS Code extension ACP process exits unexpectedly with exit code 0, affecting users on Qwen Code 0.19.11, 5 user reports and labeled for welcome PR contributions.
4. [#7306 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7306): Umbrella issue for tool output budgeting hardening, Phase 1 merged and cut model-facing context bloat by over 70% for large sessions, Phase 2-4 covering observability and artifact lifecycle are in active development (4 comments).
5. [#7427 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7427): Web shell artifact panel spams repeated "Load artifacts failed" toasts on auto-refresh, a high-visibility UX annoyance for users running local `qwen serve` instances (4 comments).
6. [#5540 (OPEN, Feature Request)](https://github.com/QwenLM/qwen-code/issues/5540): Long requested feature to resume completed background subagents and send new messages to finished tasks, 4 community comments marked under the subagent tools roadmap.
7. [#7332 (CLOSED, P1)](https://github.com/QwenLM/qwen-code/issues/7332): Internal operations sending `enable_thinking=false` to thinking-only models like qwen3.8-max-preview caused 400 Bad Request errors, resolved for users of Qwen's new reasoning models.
8. [#7118 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7118): Windows standalone installer fails on restricted enterprise devices where PowerShell `Get-FileHash` is not resolvable, marked with 1 👍 reaction from affected enterprise users.
9. [#7287 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7287): Auto-memory system loads `MEMORY.md` into the system prompt but does not register it in FileReadCache, causing the first attempted write to the memory file to be rejected entirely.
10. [#7377 (OPEN, P2)](https://github.com/QwenLM/qwen-code/issues/7377): Frequent tool call parameter loss in v0.20.0 sessions causes repeated retry loops for `run_shell_command`, `write_file` and agent tool calls, affecting core execution reliability.

## 4. Key PR Progress
Top 10 high-impact merged/active PRs:
1. [#7455](https://github.com/QwenLM/qwen-code/pull/7455): Cold startup performance optimization that lazily loads the undici HTTP client, removing ~2MiB of unnecessary parsing/evaluation time from the ACP child process cold start closure.
2. [#7458](https://github.com/QwenLM/qwen-code/pull/7458): Hardens the `qwen serve` daemon event replay chain, adding epoch tokens to detect stale SSE resume cursors across daemon restarts, preserves turn attribution and surfaces previously hidden compaction failures.
3. [#7343](https://github.com/QwenLM/qwen-code/pull/7343): Normalizes empty/whitespace-only `working_dir` values to unset before agent parameter routing, resolving subagent launch failures for OpenAI-compatible models.
4. [#7459](https://github.com/QwenLM/qwen-code/pull/7459): Restores the full background agent roster when a parent session is re-opened, returning interrupted agents as paused and completed agents with their original task IDs without automatic restarts.
5. [#7426](https://github.com/QwenLM/qwen-code/pull/7426): Keeps runtime state for completed background subagents resident in the parent session, enabling the upcoming resume completed subagent functionality requested in #5540.
6. [#6486](https://github.com/QwenLM/qwen-code/pull/6486): Adds a new Ctrl+F CLI hotkey that quickly toggles between the current active model and a preconfigured alternate model, no navigation required for fast switching.
7. [#7256](https://github.com/QwenLM/qwen-code/pull/7256): Security fix that strips Qwen-internal daemon secrets including `QWEN_SERVER_TOKEN` from the environment of all agent-spawned child processes, preventing accidental credential exfiltration via agent shell commands.
8. [#7431](https://github.com/QwenLM/qwen-code/pull/7431): Narrows the update check error classification logic, fixing misclassification of real offline and timeout errors that previously triggered false positive warnings.
9. [#7395](https://github.com/QwenLM/qwen-code/pull/7395): Adds the `skills.directories` configuration setting that accepts custom paths for scanning shared skill files, letting users reuse the same skill library across Qwen Code and other competing AI code editor tools.
10. [#7438](https://github.com/QwenLM/qwen-code/pull/7438): Improves the autofix workflow by keeping still-red CI check failures visible to the autofix scan for re-evaluation, eliminating the edge case where a single temporary CI failure stops autofix from running.

## 5. Feature Request Trends
The most requested feature directions in the last 24 hours:
1. **Subagent lifecycle enhancements**: Community demand for the ability to resume completed background subagents, retain persistent runtime state across session restarts, and avoid re-execution of finished subagent work.
2. **Custom skill management**: Users want native support for shared, cross-project and cross-tool skill directories to avoid duplicating custom MCP/skill definitions across multiple AI IDEs.
3. **CLI productivity shortcuts**: High demand for low-friction model toggle hotkeys and `@` references to quickly resume prior sessions directly from the interactive CLI input.
4. **Web shell UX quality of life**: Multiple requests for a context selector in the web shell composer to choose between local execution and worktree isolation for new sessions.

## 6. Developer Pain Points
Recurring high-frequency frustrations reported by users:
1. **Windows platform compatibility gaps**: Multiple overlapping bugs including installer failures on restricted enterprise environments, broken Docker sandbox workspace path resolution, and VS Code companion extension ACP process crashes.
2. **OpenAI provider schema misalignment**: Unpredictable extra optional fields returned by OpenAI-compatible model endpoints frequently break strict internal tool validation for subagent calls.
3. **Slow cold startup performance**: Eager loading of large third-party dependencies leads to long ACP startup times for users on lower-resource hardware.
4. **Daemon serve mode reliability**: SSE replay logic fails to handle restarts properly, losing event history and breaking client reconnection flow without visible error feedback.
5. **Region-restricted update checks**: Slow or blocked access to `registry.npmjs.org` in some regions leads to frequent timeout failures during the version update check at startup.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-07-22
*Source: github.com/Hmbown/DeepSeek-TUI*

---

## 1. Today's Highlights
This update tracks the final pre-launch integration phase for the upcoming v0.9.1 release, with 27 release-blocker issues resolved in the 24-hour window ahead of the mandatory closed dogfood validation gate. Critical long-standing TUI UX pain points including truncated long output on Windows and multi-version message send lag have been patched, alongside core runtime fixes for subagent worktree isolation, model route billing provenance, and cross-session permission durability. Cross-region community activity spiked with contributions for native HarmonyOS support, Chinese local LLM provider compatibility, and simplified self-hosted deployment workflows.

## 2. Releases
No new public releases were published in the 24-hour window. The project is currently in the no-publish final integration state for v0.9.1, with launch progress tracked via [Issue #4650](https://github.com/Hmbown/CodeWhale/issues/4650).

## 3. Hot Issues
1. **[#4032 CLOSED] Codewhale not following the constitution** (41 comments) | [Link](https://github.com/Hmbown/CodeWhale/issues/4032)  
   Highest-engagement long-running bug where the agent ignored user-provided pre-shared scripts and wrote ad-hoc temporary scripts justifications for all tasks, producing inconsistent calculation results. The multi-week community iteration on prompt guardrails is now resolved ahead of v0.9.1.
2. **[#2870 OPEN] EPIC: staged command-boundary refactor for #2791** (14 comments) | [Link](https://github.com/Hmbown/CodeWhale/issues/2870)  
   Core foundational refactor epic tracking the full rewrite of fragmented command routing logic to eliminate redundant shell execution paths. The community is splitting the large change into small, mergeable PRs to avoid main branch breakage for the v0.9.3 release cycle.
3. **[#4227 OPEN] feat: help map the CodeWhale tsunami** (11 comments) | [Link](https://github.com/Hmbown/CodeWhale/issues/4227)  
   Proposes a built-in dev environment sync skill to cut down on contributor setup friction, critical given the project's 10+ daily PR merge velocity. 11 contributors shared their existing ad-hoc sync scripts in the thread for collective input.
4. **[#4410 CLOSED] Restore xAI device-code OAuth login** (7 comments, release-blocker) | [Link](https://github.com/Hmbown/CodeWhale/issues/4410)  
   Fixes broken Grok/xAI login caused by a hardcoded incorrect OAuth endpoint path, enabling all TUI users to connect their Grok accounts without manual config edits.
5. **[#4674 OPEN] BashTool ignores context.workspace for default cwd** | [Link](https://github.com/Hmbown/CodeWhale/issues/4674)  
   High-severity runtime bug where sub-agents with isolated worktree enabled accidentally run shell commands in the parent checkout directory, posing unplanned data corruption risks. A patch PR is already open for immediate merge.
6. **[#4603 CLOSED] Long output content cannot scroll** (3 comments, P2 TUI bug) | [Link](https://github.com/Hmbown/CodeWhale/issues/4603)  
   Resolves a top user complaint on Windows TUI deployments that truncated large diffs and multi-turn logs beyond the terminal viewport with no scroll access.
7. **[#4605 CLOSED] Enter key send lag — UI freezes on message send** (3 comments, P1 performance bug) | [Link](https://github.com/Hmbown/CodeWhale/issues/4605)  
   Fixes a 3+ version regression causing 200-1200ms of UI freeze on message submission, the highest-frequency user interaction.
8. **[#4659 OPEN] edit_file approval preview only shows 3 lines** | [Link](https://github.com/Hmbown/CodeWhale/issues/4659)  
   Community-reported Chinese localization bug where the edit tool approval dialog only renders the first 3 lines of diffs (hardcoded in TUI code) making full review impossible for multi-line changes. The fix is prioritized for the v0.9.1 post-launch patch.
9. **[#4660 OPEN] Add custom provider and model config matching Kimi Code workflow** | [Link](https://github.com/Hmbown/CodeWhale/issues/4660)  
   High-demand feature request from Chinese self-hosted users asking for simplified custom LLM provider configuration aligned with existing popular local AI tool workflows.
10. **[#4677 OPEN] Refine the idle whale silhouette and empty-state composition** | [Link](https://github.com/Hmbown/CodeWhale/issues/4677)  
   Agent-ready low-barrier UX polish task for new contributors, part of the final TUI visual refresh for the v0.9.1 public launch.

## 4. Key PR Progress
1. **[#4675 OPEN] Integrate CodeWhale v0.9.1 runtime and release surface** | [Link](https://github.com/Hmbown/CodeWhale/pull/4675)  
   Primary integration PR for the full v0.9.1 release, bundling all runtime simplifications, empty work queue bug fixes, and new TUI color grammar for clear mode/permission state indicators.
2. **[#4673 OPEN] fix(shell): default no-cwd shell commands to context.workspace** | [Link](https://github.com/Hmbown/CodeWhale/pull/4673)  
   Resolves the BashTool worktree isolation bug reported in #4674, ensuring sub-agents never execute commands in the parent checkout directory when isolated worktrees are enabled.
3. **[#4654 CLOSED] fix(tui): acknowledge Enter before slow send prep** | [Link](https://github.com/Hmbown/CodeWhale/pull/4654)  
   Fixes the Enter key send lag by separating UI input acknowledgement from background send preparation, delivering instant visual feedback on message submission.
4. **[#4656 CLOSED] fix(route): honor explicit limits for unknown local models** | [Link](https://github.com/Hmbown/CodeWhale/pull/4656)  
   Removes the hardcoded 4K output token cap for self-hosted custom models, allowing users to set arbitrary large output limits for their local LLM deployments.
5. **[#4658 CLOSED] feat(runtime

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*