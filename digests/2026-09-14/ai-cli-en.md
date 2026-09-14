# AI CLI Tools Weekly Digest 2026-09-14

> Generated: 2026-09-14 00:53 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Comparison Report | 2026-09-14

## 1. Ecosystem Overview
The AI developer CLI ecosystem is entering a maturation phase defined by three parallel priorities: enterprise-grade reliability, extensible plugin/agent frameworks, and cross-platform parity for Windows environments. Across all major tools, subagent orchestration and sandboxed execution have shifted from experimental features to core infrastructure, with growing community demand for granular control over safety filters, cost tracking, and session state management. The market is also seeing a divergence between vendor-native tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) focused on tight integration with their parent model ecosystems, and community-driven multi-provider tools (OpenCode, Pi, Qwen Code) building interoperable, customizable agent platforms. Windows platform stability has emerged as a universal pain point, with every major tool reporting critical Windows-specific bugs spanning process lifecycle, shell integration, and sandbox functionality.

## 2. Activity Comparison
| Tool | Issues (Last 7 Days) | PRs (Last 7 Days) | Discussions (Last 7 Days) | Release Status |
|------|----------------------|-------------------|---------------------------|----------------|
| Claude Code | 10 tracked hot issues (8 open, 2 closed) | 10 tracked PRs (7 merged, 3 open) | N/A (no discussion data provided) | 5 patch releases (v2.1.266–v2.1.270) |
| OpenAI Codex | 10 tracked hot issues (all open) | 10 tracked PRs (all open/active) | 10 active discussions (4 ideas, 3 Q&A, 3 show-and-tell) | 1 stable Python SDK release (v0.154.0), 7 Rust alpha builds |
| Gemini CLI | 10 tracked hot issues (9 open, 1 closed) | 10 tracked PRs (9 open, 1 merged) | N/A (no discussion data provided) | 1 preview release (v0.60.0-preview.0), 3 nightly builds (v0.61.0 line) |
| GitHub Copilot CLI | 10 tracked hot issues (8 open, 2 closed) | 10 tracked PRs (7 merged, 3 open) | N/A (no discussion data provided) | 4 pre-release builds (v1.0.84-2 through v1.0.84-5) |
| OpenCode | 10 tracked hot issues (all open) | 10 tracked PRs (all open) | N/A (no discussion data provided) | 1 stable release (v1.18.30) with critical regression |
| Pi | 10 tracked hot issues (9 open, 1 closed) | 10 tracked PRs (6 open, 4 merged) | 9 active discussions (2 Q&A, 2 ideas, 5 show-and-tell) | No new releases |
| Qwen Code | 10 tracked hot issues (7 open, 3 closed) | 10 tracked PRs (all open/active) | N/A (no discussion data provided) | 2 stable releases (CLI v0.23.3, Desktop v0.3.0), 4 nightly builds, 2 SDK/driver updates |

## 3. Shared Feature Directions
1. **Advanced session state management**
   - *Tools*: OpenAI Codex, Claude Code, Pi, OpenCode, Gemini CLI
   - *Needs*: Native rewind/undo (Codex top-voted request), persistent session compression across restarts (Gemini CLI #21335), session tree branching and pruning (Pi #9531), and recoverable stuck sessions (OpenCode #43277). Users are moving beyond linear chat workflows and require version-control-like state management for long-running agent tasks.

2. **Plugin/agent ecosystem maturity**
   - *Tools*: Claude Code, GitHub Copilot CLI, Pi, OpenCode, Qwen Code
   - *Needs*: Standardized plugin testing frameworks (Claude Code `claude plugin eval`), expanded plugin API surfaces for session and event access (OpenCode #46690), MCP (Model Context Protocol) compliance and compatibility fixes (Copilot CLI #4809, Pi ecosystem tools), and skill-to-plugin conversion tooling (Codex community project).

3. **Cross-platform Windows parity**
   - *Tools*: All 7 tools
   - *Needs*: Process lifecycle and orphaned lock fixes (Claude Code #42776, Codex #29079), shell integration and path handling (Claude Code #72728, Pi #9504), sandbox reliability (Codex #31073, Qwen Code bwrap backend), and offline installer robustness (OpenCode #34442). Windows users represent a large share of the user base but consistently report a degraded experience relative to macOS/Linux.

4. **Granular usage/cost transparency**
   - *Tools*: Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI
   - *Needs*: Accurate quota accounting for background processes (Codex #27773), context-overflow error clarification (Claude Code #61716), configurable web search budget controls (Qwen Code #11692), and usage tracking tools (Codex community `Codex Limits` tool).

5. **Sandbox & security hardening**
   - *Tools*: Gemini CLI, Qwen Code, Claude Code, Codex
   - *Needs*: Kernel-level sandbox isolation (Qwen Code bwrap backend), prompt injection mitigation for untrusted build files (Gemini CLI v0.61.0 nightly), NTFS path vulnerability fixes (Gemini CLI #29116), and Bash rule bypass prevention (Qwen Code #11764).

## 4. Differentiation Analysis
| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code |
|-----------|-------------|--------------|------------|--------------------|----------|----|-----------|
| **Core Focus** | Enterprise-grade plugin framework, safety guardrails, multi-provider support | TUI UX polish, OpenAI model ecosystem integration, remote orchestration | Agent reliability, security hardening, subagent autonomy | GitHub ecosystem integration, enterprise admin, MCP compatibility | Multi-provider flexibility, UI customization, plugin extensibility | Multi-provider interoperability, RPC-based ecosystem expansion, performance optimization | Self-hosted/on-prem use cases, multi-agent collaboration, sandbox isolation |
| **Target Users** | Enterprise security teams, plugin developers, regulated industries | General developers, OpenAI power users, ChatGPT ecosystem users | Google Cloud users, security-focused teams, enterprise admins | GitHub enterprise customers, DevOps teams, VS Code users | Indie developers, power users, multi-model tinkerers | TUI power users, extension developers, self-hosted community | Chinese market users, on-prem deployments, multi-agent workflow teams |
| **Technical Approach** | Modular plugin architecture with first-class mod framework; conservative release cadence with frequent patch fixes | Rust-based core with iterative TUI improvements; tight coupling to OpenAI Responses API | Security-first development with frequent nightly hardening; focus on subagent state correctness | Node.js-based CLI aligned with GitHub platform APIs; enterprise-focused access controls | TypeScript/JavaScript core with highly extensible plugin API; community-driven feature development | Performance-optimized TUI with RPC API for third-party UIs; provider-agnostic abstraction layer | Rust/C++ core with multi-backend sandboxing; built for Qwen models with multi-provider support |
| **Release Cadence** | Weekly patch releases (5 in 7 days) | Weekly stable + daily alpha builds | Weekly preview + daily nightlies | Weekly pre-release builds | Irregular stable releases with community hotfixes | Infrequent official releases with active PR development | Multiple release tracks (stable CLI, desktop, nightly, SDKs) |

## 5. Community Momentum & Maturity
### Highest Momentum
- **OpenAI Codex**: Boasts the most active community discussion forum, with 10 tracked discussions spanning feature ideas, Q&A, and third-party tooling. The `Awesome Codex CLI` curated list (150+ ecosystem tools) and multiple community-built plugins indicate a thriving third-party ecosystem. Top issues receive 30+ upvotes and 50+ comments, reflecting high user engagement.
- **Claude Code**: Shows strong contributor velocity with 5 patch releases in 7 days and active work on the plugin framework. The extension of issue lifecycles from 14 to 90 days signals a maturing project prioritizing community feedback. High-comment issues (182 comments on #42776) demonstrate a large, engaged user base.
- **Pi**: Has a rapidly growing third-party GUI/tooling ecosystem built on its RPC mode, with 5+ community-built desktop/web clients shared in the last week. The project’s provider-agnostic approach is attracting extension developers, and core performance work (startup latency targeting jcode parity) indicates strategic investment in competitiveness.

### Rapidly Iterating
- **Qwen Code**: Ships updates across 6+ release tracks (CLI stable, nightly, desktop, SDK, driver) with active development on sandbox isolation, multi-agent collaboration, and mobile access. The project is rapidly expanding its feature set to compete with established Western tools.
- **Gemini CLI**: Pushes daily nightly builds focused on security hardening and agent reliability, indicating fast-paced development as the tool catches up to competitors in subagent functionality.

### Stability Challenges
- **OpenCode**: The latest stable release (v1.18.30) has a critical regression crashing all prompts, and a 10-month-old clipboard bug remains unfixed, indicating quality control gaps. The project has high community engagement but slower issue resolution velocity.
- **GitHub Copilot CLI**: In a pre-release phase (v1.0.84-x) with frequent builds but fewer community-contributed PRs, reflecting a more internally driven development model. Enterprise-focused features (org agents, MCP compatibility) are prioritized over community-requested UX polish.

## 6. Trend Signals
1. **Agent orchestration is becoming the core value proposition**
   - Every tool is investing in subagent frameworks, background task execution, and multi-agent collaboration. The shift from "AI chat in the terminal" to "AI agent platform with worker orchestration" is accelerating, with users demanding features like cross-project subagents, persistent agent identities, and structured workflow delegation.
   - *Developer takeaway*: Build tooling around agent orchestration patterns, not just single-turn chat interfaces. Prioritize observability, cancellation, and state management for long-running agent tasks.

2. **MCP is emerging as the de facto extensibility standard**
   - GitHub Copilot CLI, Pi, Claude Code, and Qwen Code are all investing in MCP compatibility, with community-driven MCP server ecosystems growing rapidly. Spec compliance issues (e.g., Copilot CLI #4809) are being prioritized as MCP becomes a baseline expectation for AI CLI tools.
   - *Developer takeaway*: Design plugins and integrations against the MCP specification to maximize cross-tool compatibility. Invest in MCP server tooling and testing frameworks.

3. **Windows is the next battleground for platform parity**
   - With Windows-specific bugs dominating top issue lists across every tool, the first vendor to deliver a reliable, fully featured Windows experience will gain significant market share. Investments in Windows sandboxing, process lifecycle management, and shell integration are becoming competitive differentiators.
   - *Developer takeaway*: Allocate dedicated QA and engineering resources for Windows testing early in development. Use native Windows APIs (Job Objects, ConPTY) correctly to avoid common process lifecycle pitfalls.

4. **Safety filter tradeoffs are creating enterprise segmentation**
   - Claude Code’s high volume of ClAudit false positives for security practitioners highlights a gap between one-size-fits-all safety filters and enterprise use cases. Tools that offer granular, domain-specific safety policy tuning and self-hosted filter options will capture security and regulated industry users.
   - *Developer takeaway*: Build safety systems with configurable policies and audit trails, not just binary allow/deny logic. Support domain-specific whitelisting for defensive security, DevOps, and admin use cases.

5. **Multi-provider, multi-model tools are gaining traction**
   - Community-driven tools like Pi and OpenCode are attracting users who want flexibility across model providers, while vendor-native tools are adding cross-provider support (e.g., Claude Code’s max effort level capping across Bedrock/Vertex/Foundry). The ability to mix and match models for different tasks is becoming a key user requirement.
   - *Developer takeaway*: Design architectures with provider abstraction layers from the start. Support provider-specific features (e.g., thinking budgets, server-side tools) while maintaining consistent core behavior across backends.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-14, sourced from [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
Ranked by community engagement (comments/discussion volume, cross-referenced with linked issue activity):

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|-----------------------|--------|
| 1 | [PR #1298: skill-creator eval recall fix](https://github.com/anthropics/skills/pull/1298) | Fixes a critical bug where `run_eval.py` consistently reports 0% recall for all skill descriptions, breaking the entire skill description optimization loop; also resolves Windows stream reading errors, trigger detection issues, and parallel worker bugs. | Tied to Issue #556 (12 comments, 7 👍), with 10+ independent user reproductions reported. The fix installs eval artifacts as real skills instead of temporary command files, and addresses cross-platform subprocess pipe failures. | Open |
| 2 | [PR #525: pyxel retro game development skill](https://github.com/anthropics/skills/pull/525) | Adds a skill for the Pyxel retro game engine MCP server, enabling end-to-end pixel-art/8-bit game creation workflows (write → run → inspect → iterate) directly in Claude Code. | One of the longest-running open new-skill PRs with consistent updates over 6+ months, indicating sustained community interest in creative/ game development use cases. | Open |
| 3 | [PR #514: document-typography skill](https://github.com/anthropics/skills/pull/514) | Provides typographic quality control for AI-generated documents, preventing orphan word wrap, widow paragraphs, and numbering misalignment. | Framed as a universal quality improvement for all Claude-generated document output, with broad cross-use-case applicability. | Open |
| 4 | [PR #1742: mcp-builder MCP 2.0 support](https://github.com/anthropics/skills/pull/1742) | Fixes mcp-builder compatibility with `mcp>=2.0.0`, including the renamed `streamable_http_client` import and custom HTTP header configuration via `create_mcp_http_client`. | Resolves widely reported breakage (Issue #1668) for developers building MCP-backed skills following the MCP 2.0 protocol release. | Open |
| 5 | [PR #83: skill-quality + skill-security analyzer meta-skills](https://github.com/anthropics/skills/pull/83) | Adds two meta-skills: a quality analyzer that evaluates skills across 5 dimensions (structure, functionality, trigger accuracy, etc.), and a security analyzer for risk auditing of custom skills. | Aligns directly with top community security concerns (Issue #492, 43 comments), making it one of the most policy-relevant pending skill submissions. | Open |
| 6 | [PR #486: ODT document skill](https://github.com/anthropics/skills/pull/486) | Enables creation, template filling, parsing, and HTML conversion of OpenDocument Format files (.odt, .ods). | Fills a major gap in open-standard document support, complementing existing DOCX and PDF skills. | Open |
| 7 | [PR #1628: Hivemind multi-agent orchestration skill](https://github.com/anthropics/skills/pull/1628) | Lets Claude Code delegate mechanical work to headless opencode workers running on free models, with Claude retaining planner/reviewer/merger duties to reduce expensive model context usage. | Addresses high demand for cost optimization in long-running agent workflows. | Open |
| 8 | [PR #541 + #539: docx + skill-creator bugfixes (Lubrsy706)](https://github.com/anthropics/skills/pull/541) | Two complementary fixes: prevents DOCX tracked change ID collisions with existing bookmarks (stopping document corruption), and adds YAML special character validation for skill descriptions to prevent silent parsing failures. | Represent high-impact reliability improvements for two of the most widely used core skills. | Open (both) |

---

## 2. Community Demand Trends
Distilled from top-voted and most-discussed Issues:
1. **Security & trust boundaries**: The #1 most-discussed issue ([#492, 43 comments](https://github.com/anthropics/skills/issues/492)) centers on community skills distributed under the `anthropic/` namespace impersonating official tools, creating permission abuse risks. Users demand clear official/community labeling and security auditing tools.
2. **Enterprise collaboration**: Org-wide skill sharing ([#228, 16 comments, 8 👍](https://github.com/anthropics/skills/issues/228)) is the second-most requested feature, with users asking for internal shared skill libraries to replace manual .skill file distribution via chat tools.
3. **Skill development tooling reliability**: Multiple high-comment bugs ([#556, 12 comments](https://github.com/anthropics/skills/issues/556), [#1390](https://github.com/anthropics/skills/issues/1390)) report broken evaluation pipelines for skill creators, including 0% trigger rates, silent serialization failures, and Windows incompatibility.
4. **Document workflow expansion**: Users continue requesting expanded support for under-served document formats (ODT, advanced DOCX tracked changes, PDF case sensitivity fixes) and quality controls (typography, orphan comment detection).
5. **Agent efficiency & governance**: Demand is growing for skills that reduce context window bloat ([#1487: claude-api skill 156k token injection](https://github.com/anthropics/skills/issues/1487)), enable multi-agent orchestration, and enforce output quality/reasoning gates ([#1385](https://github.com/anthropics/skills/issues/1385)).
6. **Platform compatibility**: Users seek clearer guidance for using skills with alternative deployments like AWS Bedrock ([#29](https://github.com/anthropics/skills/issues/29)) and standardization around MCP exposure for skills ([#16](https://github.com/anthropics/skills/issues/16)).

---

## 3. High-Potential Pending Skills
Active PRs with clear use case demand, aligned with top community issues, and likely to land in the near term:
- **[PR #1734: Orphaned DOCX comment detection](https://github.com/anthropics/skills/pull/1734)**: Adds auditing for unlinked/stray comments in DOCX files, complementing the existing robust DOCX skill suite and addressing document integrity user needs.
- **[PR #1367: self-audit quality gate skill](https://github.com/anthropics/skills/pull/1367)**: Universal output auditing with mechanical file verification + four-dimension reasoning review, directly aligned with community demand for output reliability and governance tools.
- **[PR #1627: Buffer API social scheduling skill](https://github.com/anthropics/skills/pull/1627)**: Cross-agent compatible skill for Buffer GraphQL API social media management, expanding the ecosystem into marketing/operations use cases.
- **[PR #1615: scnet-hpc cluster skill](https://github.com/anthropics/skills/pull/1615)**: Profile-based SSH + Slurm workflow support for SCNet HPC clusters, filling a high-demand enterprise research computing gap.
- **[PR #210: frontend-design skill improvement](https://github.com/anthropics/skills/pull/210)**: Rewrite of the frontend-design skill for better actionability and token efficiency, addressing longstanding feedback about core skill clarity.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **reliable, secure skill development infrastructure and trust safeguards** — including fixed evaluation pipelines, clear official/community skill namespace separation, and security auditing tools — paired with expanded enterprise-grade capabilities for collaboration, document workflow, and cost-optimized agent orchestration.

---

# Claude Code Community Digest | 2026-09-14

## 1. Last 7 Days' Highlights
Claude Code shipped 5 patch releases (v2.1.266–v2.1.270) over the past week, headlined by a new plugin evaluation framework, output-style switching controls, and cross-provider max effort level capping, alongside a critical regression fix for Bash git permission prompts. On the community side, Windows platform launch/stability bugs remain the most discussed open issues, while the project merged a wave of plugin/mod infrastructure updates and extended issue lifecycle windows to 90 days to reduce friction for contributors.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| [v2.1.270](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) | Fixed regression from 2.1.269 where read-only git commands in Bash unexpectedly prompted for permission after long-running sessions. |
| [v2.1.269](https://github.com/anthropics/claude-code/releases/tag/v2.1.269) | Added `claude plugin eval` for running reproducible plugin test suites with scored JSON/HTML reports; added `/output-style [name]` command to list/switch output styles across Remote Control, cloud, and OT environments. |
| [v2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268) | Added Claude apps gateway pricing sync: signed-in clients get matching rates via managed settings so `/cost` and telemetry align with the spend meter; added startup warning for gateways with empty `access_control.allow_cidrs`. |
| [v2.1.267](https://github.com/anthropics/claude-code/releases/tag/v2.1.267) | Added `maxEffortLevel` setting (global or per-model) to cap effort across all providers (Bedrock, Vertex, Foundry); added `--system-prompt-snapshot off` flag to render fresh system prompts on every request. |
| [v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266) | Fixed 2.1.265 regression breaking LLM-gateway/proxy setups, where `CLAUDE_CODE_USE_GATEWAY` incorrectly forced Cloud-gateway sign-in on its own. |
| v2.1.265 | Added `user.email` and `user.groups` to telemetry from Claude Desktop/Cowork via apps gateways (matching terminal sessions); added support for `--plugin-dir` pointing to a folder of plugins with dynamic load/unload. |

---

## 3. Hot Issues
1. **[#42776: Claude Code Desktop fails to relaunch on Windows due to orphaned process file lock](https://github.com/anthropics/claude-code/issues/42776)**  
   The highest-comment open issue (182 comments, 88 👍), this long-running Windows bug blocks app restarts after crashes and requires manual process cleanup. It has persisted since April 2026 and is the top pain point for desktop users.

2. **[#53247: Claude Desktop fails to launch on Windows — orphaned Silo / Job Object after crash](https://github.com/anthropics/claude-code/issues/53247)**  
   A related Windows stability issue (79 comments, 31 👍) with HRESULT 0x80070020 errors that only resolve via logoff or reboot. It highlights systemic gaps in Windows process lifecycle handling for the desktop app.

3. **[#85371: ClAudit false-positive on screenshot image reference](https://github.com/anthropics/claude-code/issues/85371)**  
   One of ~20 recently closed ClAudit false-positive reports from user `sworrl`, all triggering session-halts for legitimate defensive security, forensics, and general dev work. It underscores over-aggressive safety filtering for security practitioners.

4. **[#85434: Safeguards trigger on local storage breakdown UI and redundancy coding](https://github.com/anthropics/claude-code/issues/85434)**  
   A cyber-domain false positive blocking standard storage system engineering work, part of a pattern where defensive hardening tasks are misclassified as malicious.

5. **[#85381: ClAudit false-positive on AD operations skill system prompt](https://github.com/anthropics/claude-code/issues/85381)**  
   A cloud-IAM domain false positive that halted work on authorized Active Directory operations tooling, representing the risk of overblocking for enterprise admin use cases.

6. **[#85372: ClAudit false-positive on NPM audit request](https://github.com/anthropics/claude-code/issues/85372)**  
   A malware-forensics domain false positive triggered by a standard NPM audit task, showing that common dependency security scans can trip safety filters.

7. **[#85365: ClAudit false-positive on SSH/UDR skill reference](https://github.com/anthropics/claude-code/issues/85365)**  
   A crypto-secrets domain false positive from referencing SSH access in skill documentation, reflecting sensitivity around credential-related language even in defensive contexts.

8. **[#85354: AUP false-positive on MySQL installation error discussion](https://github.com/anthropics/claude-code/issues/85354)**  
   A usage-policy false positive (flagged by Fable 5) for a routine MySQL install troubleshooting request, showing AUP filters also misclassify standard devops work.

9. **[#72728: Windows Git Bash shell-snapshot embeds raw Windows PATH, breaking command resolution](https://github.com/anthropics/claude-code/issues/72728)**  
   An open Windows/Git Bash integration bug (4 comments, 1 👍) where unconverted Windows PATH values break short-name command lookups, adding to the list of Windows-specific shell compatibility issues.

10. **[#85359: AUP false-positive on CT web hardening task](https://github.com/anthropics/claude-code/issues/85359)**  
    A defensive-hardening domain AUP false positive where applying security best practices was incorrectly flagged, further demonstrating the overlap between legitimate security work and policy filter triggers.

---

## 4. Key PR Progress
1. **[#93215: Add mods: sec-default, diff and telemetry](https://github.com/anthropics/claude-code/pull/93215)**  
   Published three built-in hooks-module plugins as source (sec-default, diff, telemetry) under the new `mods/` directory, marking a major step toward open, extensible plugin architecture for core features.

2. **[#93912: Unit tests for diff, sec-default and telemetry mods, typed against plugin declarations](https://github.com/anthropics/claude-code/pull/93912)**  
   Introduced in-place unit testing for mods via `claude plugin test`, with type checking against official plugin declarations, improving testability and type safety for third-party plugin development.

3. **[#93951: Move diff, sec-default and telemetry tests next to the mods](https://github.com/anthropics/claude-code/pull/93951)**  
   Relocated mod test files to sit alongside each mod under `mods/<mod>/tests/`, aligning with standard plugin project structure and making it easier for contributors to work on individual mods.

4. **[#93452: mods/diff: match the built-in /diff panel](https://github.com/anthropics/claude-code/pull/93452)**  
   Aligned the diff mod’s UI with the built-in `/diff` panel (hunk rendering, controls, responsive behavior), ensuring feature parity between the native and plugin-based diff experiences.

5. **[#89404: validate-agent.sh: don't abort at first warning, stop false-flagging valid agents](https://github.com/anthropics/claude-code/pull/89404)**  
   Fixes the plugin-dev skill’s validation script, which failed on valid agent files due to `set -euo pipefail` edge cases, removing a major friction point for plugin developers.

6. **[#79148: Add mandatory `hookify.` prefix to example rule filenames](https://github.com/anthropics/claude-code/pull/79148)**  
   Fixes silent failures in hookify example rules that lacked the required filename prefix, correcting documentation drift and improving out-of-the-box rule functionality.

7. **[#63686: Bump stale and autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)**  
   Extends issue lifecycle windows from 14 to 90 days, reducing noise from premature stale/closed labels and giving community issues more time to be triaged and addressed.

8. **[#26175: Fix broken native installer bootstrap script](https://github.com/anthropics/claude-code/pull/26175)**  
   Fixes the `curl | bash` install flow which silently failed to create the `~/.local/bin/claude` binary and deleted existing npm installs, leaving users with no working CLI.

9. **[#42205: fix(hookify): normalize tool matcher parsing](https://github.com/anthropics/claude-code/pull/42205)**  
   Trims and normalizes hookify tool matcher strings, fixing match failures when separators had surrounding whitespace and improving the robustness of rule matching.

10. **[#61716: Add troubleshooting for false usage limit caused by context overflow](https://github.com/anthropics/claude-code/pull/61716)**  
    Documents a common misleading error where context overflow is misreported as a usage limit, and adds workaround guidance, addressing a frequent user confusion point.

---

## 5. Hot Discussions
*No discussion data provided; this section is omitted.*

---

## 6. Feature Request Trends
1. **Improved plugin/mod development tooling**: The surge in mod framework PRs and plugin validation fixes aligns with growing demand for more robust, well-documented plugin build, test, and distribution tools.
2. **Granular safety/AUP filter controls**: The high volume of ClAudit false-positive reports from security practitioners points to demand for whitelisting, domain-specific filter tuning, or self-hosted filter policy customization.
3. **Better cost and usage transparency**: Gateway pricing sync and the context-overflow usage limit doc fix reflect demand for more accurate, explainable cost tracking and usage metering.
4. **Cross-platform parity for Windows**: Persistent Windows desktop launch, process, and shell integration bugs indicate demand for prioritized Windows platform quality and testing.

---

## 7. Developer Pain Points
1. **Windows platform instability**: Orphaned process locks, job object leaks, and Git Bash PATH issues make the Windows desktop and shell experience unreliable, with workarounds requiring reboots or manual process cleanup.
2. **Over-aggressive safety filtering for security work**: Defensive security, forensics, and admin tasks routinely trigger false-positive session halts, disrupting legitimate work and creating friction for security-focused users.
3. **Plugin development rough edges**: Silent rule failures, broken validation scripts, and inconsistent documentation create barriers to building and debugging custom plugins and hooks.
4. **Misleading error messages**: Context overflow misreported as usage limits and silent install failures cause unnecessary confusion and debug time for end users.
5. **Short issue lifecycle windows**: The previous 14-day stale/autoclose window was too aggressive, leading to valid community issues being closed before they could be triaged.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-09-14

---

## 1. Last 7 Days' Highlights
This week saw the stable release of **Python SDK 0.154.0** with new `max` and `ultra` reasoning-effort tiers, alongside a flurry of Rust alpha builds (v0.155.0-alpha.3.x line) focused heavily on Windows sandbox reliability. The community rallied around quality-of-life fixes for the TUI (notably removing the divisive Astra sparkle animation) and raised persistent concerns about Windows platform bugs, quota drainage, and missing core features like session rewind.

---

## 2. Releases
### Stable Release
- **python-v0.154.0**  
  Install via `pip install --upgrade openai-codex==0.154.0` (Python 3.10+), paired with `openai-codex-cli-bin==0.154.0`. Key changes:
  - Added `max` and `ultra` `reasoning-effort` values ([PR #39662](https://github.com/openai/codex/pull/39662))
  - Added `ExternalMessage` support to synchronous interfaces
### Alpha & CI Releases
- Rust SDK: 7 pre-release builds in the `v0.155.0-alpha.3.x` line (through alpha.3.10) plus `v0.154.0-alpha.6.2`, focused on sandbox and platform hardening.
- CI-only: `voice-cygwin-108b38cf67cbb731` — Cygwin build inputs/sources for native Windows voice releases (not included in user packages).

---

## 3. Hot Issues
1. **#41463 [Windows + WSL] Cannot create projects – AbsolutePathBuf deserialized without a base path**  
   [openai/codex#41463](https://github.com/openai/codex/issues/41463)  
   *Why it matters:* Blocks core project creation for Windows/WSL2 users, the most-commented open bug this week (54 comments, 33 👍).
2. **#31073 Windows native sandbox: Git HTTPS remote operations fail/crash**  
   [openai/codex#31073](https://github.com/openai/codex/issues/31073)  
   *Why it matters:* Breaks standard Git workflows inside the sandbox despite working in external PowerShell; 28 comments.
3. **#43410 [Windows][Browser] Browser control fails with API-key authentication**  
   [openai/codex#43410](https://github.com/openai/codex/issues/43410)  
   *Why it matters:* Edge browser plugin is unusable for API-key auth users on Windows; 25 comments, 15 👍.
4. **#44781 [Codex Desktop] Editing/resending a queued message triggers "App-server queued follow-up no longer exists"**  
   [openai/codex#44781](https://github.com/openai/codex/issues/44781)  
   *Why it matters:* Breaks message editing workflows; 22 comments, 26 👍.
5. **#44561 Turn off whimsy effect (Astra stars) by default**  
   [openai/codex#44561](https://github.com/openai/codex/issues/44561)  
   *Why it matters:* Top user quality-of-life request (31 👍); users report the animation looks like screen glitching.
6. **#29079 Codex Desktop on Windows leaves Node/MCP helper processes alive until memory pressure**  
   [openai/codex#29079](https://github.com/openai/codex/issues/29079)  
   *Why it matters:* Causes system-wide slowdowns/unresponsiveness on Windows; 10 comments, 4 👍.
7. **#44458 macOS: CLI 0.154.0 experimental capability breaks bundled Messages and Computer History MCP startup**  
   [openai/codex#44458](https://github.com/openai/codex/issues/44458)  
   *Why it matters:* Regression in latest stable CLI for macOS users; 9 comments, 3 👍.
8. **#27773 Codex Chronicle silently drains subscription quota 24/7 and triggers auth token invalidation**  
   [openai/codex#27773](https://github.com/openai/codex/issues/27773)  
   *Why it matters:* Background process wastes quota and breaks auth; impacts all platforms.
9. **#45119 macOS 14.2: sandbox startup fails with unbound variable TIOCSTI**  
   [openai/codex#45119](https://github.com/openai/codex/issues/45119)  
   *Why it matters:* Sandbox failure on Apple Silicon macOS 14.2; 8 comments.
10. **#45073 Severe 5-hour usage drain: ~86% consumed in ~26 minutes with only 2 prompts**  
    [openai/codex#45073](https://github.com/openai/codex/issues/45073)  
    *Why it matters:* Severe quota misbehavior on Windows CLI; high user concern about billing/usage accuracy.

---

## 4. Key PR Progress
1. **#45137 Remove Astra sparkle animation from the TUI composer**  
   [openai/codex#45137](https://github.com/openai/codex/pull/45137)  
   *Fix:* Removes the divisive animated star effect and its hooks, addressing top user feedback.
2. **#45271 Preserve terminal scrollback when growing the TUI viewport**  
   [openai/codex#45271](https://github.com/openai/codex/pull/45271)  
   *Fix:* Prevents history loss when resizing the terminal viewport.
3. **#45255 Open new sessions directly from the command center**  
   [openai/codex#45255](https://github.com/openai/codex/pull/45255)  
   *Feature:* Adds session list and single-letter shortcuts for fast new session creation in the command center.
4. **#45262 Route pastes into the active history search query**  
   [openai/codex#45262](https://github.com/openai/codex/pull/45262)  
   *Fix:* Pasting during `Ctrl+R` history search now updates the search query instead of the composer.
5. **#45135 Preview streaming prose before a newline arrives in the TUI**  
   [openai/codex#45135](https://github.com/openai/codex/pull/45135)  
   *Feature:* Shows live streaming previews for long single-line responses instead of hiding them until a newline.
6. **#45176 Wire the Windows MXC sandbox into command execution**  
   [openai/codex#45176](https://github.com/openai/codex/pull/45176)  
   *Feature:* Adds explicit MXC backend selection for Windows sandbox execution with violation classification.
7. **#45312 Extract Windows sandbox configuration preparation into a helper**  
   [openai/codex#45312](https://github.com/openai/codex/pull/45312)  
   *Refactor:* Exposes `prepare_windows_sandbox_config` to standardize config loading and mode enforcement.
8. **#45182 Validate Windows sandbox token groups before copying SIDs**  
   [openai/codex#45182](https://github.com/openai/codex/pull/45182)  
   *Security fix:* Adds bounds checking for token group buffers to prevent unsafe memory access.
9. **#45248 Use captured step settings for request metadata and tool hooks**  
   [openai/codex#45248](https://github.com/openai/codex/pull/45248)  
   *Fix:* Ensures metadata reflects the current step's model/reasoning settings, not just the turn's initial values.
10. **#45108 Cancel pending thread title generation after manual renames**  
    [openai/codex#45108](https://github.com/openai/codex/pull/45108)  
    *Fix:* Stops background title generation and hides its progress indicator after a user manually renames a thread.

---

## 5. Hot Discussions
### Ideas
1. **#9200 Add the ability to remote control codex from ChatGPT app**  
   [openai/codex#9200](https://github.com/openai/codex/discussions/9200)  
   Top-voted idea (190 👍, 46 comments): Users want headless/daemon Codex mode with native ChatGPT app remote control, replacing current SSH/VPN workarounds.
2. **#9618 How is there not a /rewind or /revert feature?**  
   [openai/codex#9618](https://github.com/openai/codex/discussions/9618)  
   134 👍, 23 comments: Community demands native undo/rewind, citing competitors like OpenCode and Claude Code.
3. **#12567 Memories in Codex**  
   [openai/codex#12567](https://github.com/openai/codex/discussions/12567)  
   36 comments: OpenAI team solicits feedback on memory UX, including citation of prior threads and cross-session recall.
4. **#41716 ChatGPT Planner & Codex Worker Orchestration**  
   [openai/codex#41716](https://github.com/openai/codex/discussions/41716)  
   Proposal for native orchestration where ChatGPT acts as planner and Codex instances as execution workers.

### Q&A
1. **#40385 Windows - Connections -> control other devices option not found**  
   [openai/codex#40385](https://github.com/openai/codex/discussions/40385)  
   Windows users report missing Remote Connections feature.
2. **#43257 How does experimental context management count history lookups against usage limits?**  
   [openai/codex#43257](https://github.com/openai/codex/discussions/43257)  
   Users seek clarity on quota accounting for long-running tasks with context window rollovers.
3. **#42503 Any news on when Astra is coming to Codex?**  
   [openai/codex#42503](https://github.com/openai/codex/discussions/42503)  
   Community asks for timeline on Astra model availability in Codex.

### Show and tell
1. **#16329 Awesome Codex CLI — curated list of 150+ ecosystem tools**  
   [openai/codex#16329](https://github.com/openai/codex/discussions/16329)  
   Curated index of subagents, skills, plugins, MCP servers, and more.
2. **#44641 Codex Limits: cross-platform CLI/TUI for usage, reset times, and reset credits**  
   [openai/codex#44641](https://github.com/openai/codex/discussions/44641)  
   Terminal-based tool for tracking remaining quota and reset schedules.
3. **#44843 Community tool: SKILL.md → Codex plugin bundle converter**  
   [openai/codex#44843](https://github.com/openai/codex/discussions/44843)  
   MIT-licensed converter that packages Agent Skills folders into compliant Codex plugin manifests.

---

## 6. Feature Request Trends
1. **Session state control:** Native rewind/undo and per-PR persistent sessions are the most requested workflow features.
2. **Remote & orchestration UX:** Headless daemon mode, improved ChatGPT app remote control, and multi-instance worker orchestration.
3. **Memory & context:** Cross-session memories with source citation, plus better long-horizon context management transparency.
4. **TUI quality of life:** Configurable defaults (e.g., disable whimsy effects), better paste handling, and improved streaming visibility.
5. **Usage visibility:** Better quota tracking, reset credit management, and clear accounting for context lookups/background processes.

---

## 7. Developer Pain Points
1. **Windows platform instability:** A large majority of top bugs are Windows-specific, spanning sandbox failures, WSL integration, auth, process leaks, and app-server state corruption.
2. **Quota opacity and drainage:** Users report unexplained rapid usage burn, silent background quota consumption from processes like Codex Chronicle, and unclear reset policies.
3. **Sandbox reliability:** Persistent issues across both Windows (permission errors, ACL corruption, Git failures) and macOS (startup crashes) break core workflows.
4. **API-key auth limitations:** Browser control, "Approve for me" permissions, and other features are unsupported under API-key authentication, fragmenting functionality.
5. **Missing basic editing primitives:** No native rewind/revert forces users to rely on Git commits for every change, slowing iteration.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-09-14
---

## 1. Last 7 Days' Highlights
This week saw the rollout of the v0.60.0-preview.0 release and daily v0.61.0 nightly builds, with a heavy focus on security hardening (sandbox isolation, prompt injection mitigation, NTFS path safety) and agent reliability. Community-reported issues centered heavily on subagent execution bugs (hanging, incorrect success reporting, configuration ignore) and Auto Memory system defects, while open PRs targeted UI rendering fixes, A2A server stability, and core tool call robustness.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.61.0-nightly.20260913.g9c1b0a610](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610) | Nightly | Full changelog available; incremental update from prior nightly |
| [v0.61.0-nightly.20260912.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610) | Nightly | - Fix indirect prompt injection via build file modifications and untrusted flags ([#29250](https://github.com/google-gemini/gemini-cli/pull/29250))<br>- Harden sandbox filesystem boundaries and isolate runtime state |
| [v0.61.0-nightly.20260909.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260909.ged2ac40df) | Nightly | - Mitigate NTFS 8.3 short name (SFN) path vulnerabilities ([#29116](https://github.com/google-gemini/gemini-cli/pull/29116))<br>- Isolate settings directory in sandbox containers ([#29216](https://github.com/google-gemini/gemini-cli/pull/29216)) |
| [v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-preview.0) | Preview | - Improve destination validation and connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120))<br>- Enforce RFC 9207 issuer identification in MCP OAuth flow |
| [v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0) | Stable | Version bump from nightly track; cumulative stability updates |

---

## 3. Hot Issues
1. **[#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *P1 bug, 13 comments, 2 👍*  
   The `codebase_investigator` subagent falsely returns `status: success` with `Termination Reason: GOAL` even when it hits the maximum turn limit without completing analysis. This misleads users about task completion and is the most actively discussed issue this week.

2. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1 bug, 8 comments, 8 👍 (top upvoted)*  
   Simple tasks (e.g., folder creation) hang forever when deferred to the generalist agent; disabling subagents resolves it. High community impact due to basic functionality failure, with the highest user upvote count this week.

3. **[#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *P2 enhancement, 9 comments, 1 👍*  
   Proposes leveraging Gemini 3's native bash affinity by using POSIX toolchains via zero-dependency OS sandboxing, balancing the model's preferred workflow with security. Core architectural discussion for future agent execution.

4. **[#25166 Shell command execution stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1 core bug, 4 comments, 3 👍*  
   Simple shell commands hang with "Awaiting user input" even after finishing. A critical reliability issue for core shell execution functionality.

5. **[#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *P2 feature epic, 7 comments, 1 👍*  
   Tracks investigation into AST-aware tools for precise method-bound reads, reduced token noise, and faster codebase navigation. Key potential upgrade for codebase analysis performance.

6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *P2 security bug, 5 comments*  
   Auto Memory sends transcript content to the model before secret redaction, risking sensitive data exposure in model context and logs. Important security and privacy gap.

7. **[#21968 Gemini does not use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *P2 agent bug, 6 comments*  
   Users report the model never invokes custom skills/sub-agents on its own, even for highly relevant tasks (e.g., gradle/git operations), requiring explicit instruction. Degrades the utility of custom agent ecosystems.

8. **[#26522 Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2 agent bug, 4 comments*  
   Low-signal sessions that the extraction agent skips remain marked unprocessed and are repeatedly re-surfaced, wasting cycles and degrading memory system efficiency.

9. **[#22267 Browser Agent ignores settings.json overrides (maxTurns, etc.)](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   *P2 agent bug, 3 comments*  
   The browser subagent disregards global/project `settings.json` configurations like `maxTurns`, despite the AgentRegistry correctly merging settings. Breaks user configuration expectations for specialized agents.

10. **[#21335 /compress command not persistent across session resume](https://github.com/google-gemini/gemini-cli/issues/21335)**  
    *P2 agent bug, 2 comments, 2 👍*  
    Chat summaries from `/compress` are only stored in memory and not written to disk, so the compression is lost when the session is resumed. Users lose token savings across sessions.

---

## 4. Key PR Progress
1. **[#29286 Implement Google search tool in RobustAutonomousAgent](https://github.com/google-gemini/gemini-cli/pull/29286)**  
   *Priority P1, size M, open*  
   Adds native Google search capability to the RobustAutonomousAgent, enabling real-time web lookups to supplement codebase and general knowledge tasks.

2. **[#29163 Fix crash during authentication in git repositories](https://github.com/google-gemini/gemini-cli/pull/29163)**  
   *Priority P1, area security, size L, open*  
   Prevents startup crashes when running Gemini CLI inside Git repositories under macOS Seatbelt or restricted permission environments, caused by the `useGitBranchName` hook failing to access `.git` directories.

3. **[#29319 Guard JSON.parse on tool-call args in sendStream](https://github.com/google-gemini/gemini-cli/pull/29319)**  
   *Priority P2, area non-interactive, size M, open*  
   Fixes stream termination from malformed tool call JSON by wrapping `JSON.parse` in try/catch, pushing a `_parseError` arg and continuing the stream instead of crashing. Fixes [#29308](https://github.com/google-gemini/gemini-cli/issues/29308).

4. **[#29320 Register express.json before A2A routes so req.body is parsed](https://github.com/google-gemini/gemini-cli/pull/29320)**  
   *Priority P2, area agent, size S, open*  
   Fixes broken JSON-RPC parsing for A2A server routes by moving `express.json()` middleware before route setup, ensuring `req.body` is populated for A2A endpoints. Fixes [#29315](https://github.com/google-gemini/gemini-cli/issues/29315).

5. **[#27863 Prioritize structured display titles in tool invocation](https://github.com/google-gemini/gemini-cli/pull/27863)**  
   *Priority P1, area non-interactive, size S, open, help wanted*  
   Updates `getDisplayTitle()` to prioritize `_toolDisplayName` over raw tool names, improving UI clarity for custom tools with user-friendly labels. Fixes [#23018](https://github.com/google-gemini/gemini-cli/issues/23018).

6. **[#27754 Add missing return after 501 response in GET /tasks/metadata](https://github.com/google-gemini/gemini-cli/pull/27754)**  
   *Priority P1, area core, size XS, open, help wanted*  
   Fixes an A2A server crash (`ERR_HTTP_HEADERS_SENT`) caused by missing return after a 501 response, which let execution fall through to additional response logic. Fixes [#21729](https://github.com/google-gemini/gemini-cli/issues/21729).

7. **[#29304 Avoid splitting surrogate pairs during truncation](https://github.com/google-gemini/gemini-cli/pull/29304)**  
   *Area core, size S, open*  
   Fixes `sanitizeForDisplay` to preserve UTF-16 surrogate pairs (e.g., emojis) during text truncation, preventing silent character drops when cutoffs land in the middle of multi-code-unit glyphs.

8. **[#29208 Fall back to empty on malformed agents.json shape](https://github.com/google-gemini/gemini-cli/pull/29208)**  
   *Priority P2, area agent, size S/M, open*  
   Gracefully handles corrupt `agents.json` (invalid shape from interrupted saves, sync conflicts, etc.) by falling back to empty state instead of crashing with `TypeError` or silently dropping acknowledgments. Fixes [#29207](https://github.com/google-gemini/gemini-cli/issues/29207).

9. **[#28963 Correct excludeTools examples that never match](https://github.com/google-gemini/gemini-cli/pull/28963)**  
   *Docs, size S, open*  
   Fixes incorrect `excludeTools` examples in extension best practices docs: the previous examples used full command strings which never match, since exclusions compare only against tool names. Resolves a dangerous documentation gap that left users thinking dangerous commands were blocked.

10. **[#29125 Convert hook timeout from seconds to milliseconds in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29125)**  
    *Priority P2, area core, size S, closed*  
    Fixes a unit mismatch bug in `gemini hooks migrate` where Claude Code's 60-second default hook timeout was incorrectly interpreted as 60ms in Gemini CLI, causing migrated hooks to timeout immediately. Fixes [#29122](https://github.com/google-gemini/gemini-cli/issues/29122).

---

## 5. Hot Discussions
*No discussion data provided for this period.*

---

## 6. Feature Request Trends
1. **Agent autonomy and capability expansion**: Strong demand for better automatic use of custom skills/sub-agents, native Google search integration in autonomous agents, and AST-aware codebase navigation to reduce token usage and improve precision.
2. **Enhanced browser agent robustness**: Requests for automatic session takeover/lock recovery, Wayland compatibility, and proper settings inheritance for the browser subagent.
3. **Persistent, efficient session management**: Demand for file-based persistent task tracking (replacing in-context WriteToDo), persistent `/compress` state across sessions, and subagent trajectory visibility via `/chat share`.
4. **Sandbox and execution model optimization**: Interest in zero-dependency OS-level sandboxing to leverage Gemini 3's native bash/POSIX tool affinity while maintaining security boundaries.
5. **Memory system quality improvements**: Requests for deterministic redaction, infinite retry fixes for low-signal sessions, and better error handling for invalid memory patches.

---

## 7. Developer Pain Points
1. **Subagent reliability failures**: Widespread frustration with subagents hanging indefinitely, falsely reporting success after hitting turn limits, ignoring user configuration, and not being invoked autonomously for relevant tasks.
2. **Shell execution stability issues**: Recurring reports of shell commands hanging after completion, and the model creating scattered temporary scripts across directories that clutter workspaces.
3. **Auto Memory system defects**: Multiple related bugs around silent failures, infinite retries, and pre-redaction data exposure that undermine trust in the memory feature.
4. **UI and rendering glitches**: Surrogate pair splitting truncating emojis, disappearing subagent tool calls in the UI, and terminal resize flicker impact day-to-day user experience.
5. **Configuration and migration bugs**: Hook migration unit mismatches, incorrect event key mapping, and settings that don't propagate to subagents create unexpected breakage for users customizing their setup.
6. **Security edge cases**: Prompt injection via untrusted build files, NTFS short name path vulnerabilities, and weak secret redaction in memory flows create risk for users running the CLI in untrusted environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-09-14

---

## 1. Last 7 Days' Highlights
This week, the Copilot CLI team shipped 4 pre-release builds (v1.0.84-2 through v1.0.84-5) headlined by the **general availability of Vim mode** in the composer, grammar-aligned shell completions, and new session/memory import commands for semantic JSONL interchange. The community drove discussion around MCP (Model Context Protocol) compatibility bugs, organization-level agent visibility gaps, and performance issues including frequent OOM crashes on long-running sessions. Security and installer hardening also advanced, with CI workflow pinning and improved unsupported OS detection.

---

## 2. Releases
- **v1.0.84-5**
  - ✅ Added: Session and memory import commands for semantic JSONL interchange format
  - ✅ Improved: Shell completions now generated from the CLI's core parsing grammar — `copilot <TAB>` shows root flags alongside subcommands, and each subcommand surfaces only its own options
  - 📝 [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5)

- **v1.0.84-4**
  - ✅ Added: `copilot instruction list` and `copilot lsp list` (replace `copilot plugins list --kind instruction` and `--kind lsp`)
  - ✅ Added: `--json` output support for `copilot plugin list`, `copilot plugin marketplace list`, and `copilot plugin marketplace browse`
  - ✅ Added: `enable` / `disable` subcommands to `copilot plugin`
  - 📝 [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4)

- **v1.0.84-3**
  - 🐛 Fixed: `/copy` now includes task completion messages when available
  - 🐛 Fixed: OAuth-authenticated MCP servers connect reliably during session startup
  - 📝 [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.84-3)

- **v1.0.84-2**
  - ✨ New: Vim mode is generally available — enable with `/vim` or by setting `editorMode: vim` for modal editing in the composer, with live mode indicator
  - ✅ Improved: On supported Windows sandbox policies, interactive shell commands now record blocked accesses
  - 📝 [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.84-2)

---

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| 1 | [#13 [CLOSED] CLI input should have a vi/vim input mode](https://github.com/github/copilot-cli/issues/13) | Landmark feature request open since Sep 2025 — resolved by v1.0.84-2's Vim mode GA | 🔥 76 👍, 12 comments — top-voted issue in the window |
| 2 | [#1285 [OPEN] Organisation level Agent not showing up](https://github.com/github/copilot-cli/issues/1285) | Blocker for enterprise rollouts: org-scoped agents defined in `.github-private` are not discoverable in CLI/VS Code | 9 comments, 11 👍 — highest-comment open enterprise issue |
| 3 | [#4095 [OPEN] Windows plugin update fails with "Access is denied" while VS Code is running](https://github.com/github/copilot-cli/issues/4095) | Cross-tool file lock conflict: Copilot VS Code extension holds watcher handles on plugin directories | 21 👍 — top-voted open issue this week |
| 4 | [#4725 [OPEN] Frequent JavaScript heap out of memory](https://github.com/github/copilot-cli/issues/4725) | Stability regression on Linux — CLI crashes every few minutes at ~4 GB heap | 4 comments, 1 👍 |
| 5 | [#4753 [OPEN] Session resume cancels in-flight stdio MCP server connections](https://github.com/github/copilot-cli/issues/4753) | MCP reliability regression in v1.0.83: timeout dropped from 16s → 1s, silently breaking servers on session resume | 4 comments, 1 👍 |
| 6 | [#3700 [OPEN] WSL2 regression: MainThread spins at ~215% CPU while idle, TUI output frozen](https://github.com/github/copilot-cli/issues/3700) | High-severity WSL2 performance bug rendering CLI unusable until restart | 4 comments, 2 👍 — marked high severity/impact |
| 7 | [#1168 [OPEN] Excessive authorization prompts ("authorization fatigue")](https://github.com/github/copilot-cli/issues/1168) | UX pain point: single request triggers >12 approval prompts, degrading assisted-permissions workflow | 4 comments, 3 👍 |
| 8 | [#4795 [OPEN] Atlassian MCP OAuth fails: callback URL mismatch](https://github.com/github/copilot-cli/issues/4795) | Ecosystem integration bug: random OAuth callback port conflicts with registered port 33418 | 3 comments, 3 👍 |
| 9 | [#4809 [CLOSED] Native MCP connector sends non-standard `server/discover` before `initialize`](https://github.com/github/copilot-cli/issues/4809) | Spec compliance issue: violates MCP lifecycle spec, crashes spec-compliant servers (e.g., FastMCP) | 1 comment — closed but signals ongoing MCP standardization work |
| 10 | [#4699 [OPEN] OOM crash on long `--resume` sessions; crash dumps written to cwd](https://github.com/github/copilot-cli/issues/4699) | Dual problem: memory leak on resumed sessions + diagnostic files cluttering working directory | 3 comments, 5 👍 |

---

## 4. Key PR Progress
| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | [#4827 build(deps): bump actions/stale from 9.1.0 to 11.0.0](https://github.com/github/copilot-cli/pull/4827) | CI dependency upgrade for stale issue/PR management | ✅ Closed |
| 2 | [#4828 build(deps): bump actions/github-script from 7.1.0 to 9.0.0](https://github.com/github/copilot-cli/pull/4828) | CI dependency upgrade for GitHub Script automation | ✅ Closed |
| 3 | [#4808 Pin GitHub Actions to commit SHAs](https://github.com/github/copilot-cli/pull/4808) | Supply-chain security hardening: pins all Action `uses:` refs to immutable commit SHAs (3 refs across 4 files) | ✅ Closed |
| 4 | [#4786 Revise notice regarding third-party services](https://github.com/github/copilot-cli/pull/4786) | Documentation update clarifying third-party service access requirements and terms | ✅ Closed |
| 5 | [#4770 Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770) | Docs for escape hatch to disable WebSocket transport (workaround for `400 input item ID does not belong to this connection` errors) | 🟡 Open |
| 6 | [#4761 install: report unsupported operating systems](https://github.com/github/copilot-cli/pull/4761) | Installer fix: detects unsupported OSes (e.g., FreeBSD) instead of incorrectly falling back to Windows/winget error | ✅ Closed |
| 7 | [#4762 install: report unsupported operating systems](https://github.com/github/copilot-cli/pull/4762) | Duplicate/alternate implementation of the same FreeBSD installer fix (author: devm33) | ✅ Closed |
| 8 | [#4748 Add joke cli](https://github.com/github/copilot-cli/pull/4748) | Community novelty PR adding a joke command — not yet reviewed/merged | 🟡 Open |
| 9 | [#4746 Add experimental next-action extension prototype](https://github.com/github/copilot-cli/pull/4746) | Experimental SDK example: model-inferred "next best action" extension under `examples/next-best-action/` (opt-in, no core CLI changes) | 🟡 Open |
| 10 | [#4100 shangti0168](https://github.com/github/copilot-cli/pull/4100) | Low-detail PR labeled "security" — closed without clear resolution | ✅ Closed |

---

## 5. Hot Discussions
*Omitted — no GitHub Discussions data was provided in the dataset.*

---

## 6. Feature Request Trends
From open issues and community activity, the top requested directions are:
1. **Deeper Vim/modal editing polish** — follow-up requests for Vim mode customization (e.g., custom keybindings, ex commands) after GA in v1.0.84-2
2. **Cross-session context & memory** — demands for persistent, queryable context across sessions (see [#2436](https://github.com/github/copilot-cli/issues/2436)) and first-party import/export tools
3. **Enterprise agent discoverability** — org-level and shared agent visibility, permission scoping, and centralized management
4. **MCP ecosystem compatibility** — stricter spec compliance, better error handling, and broader third-party MCP server support (Atlassian, FastMCP, etc.)
5. **Agent observability** — live progress streaming for background sub-agents and better visibility into long-running tool call sequences (see [#2254](https://github.com/github/copilot-cli/issues/2254))

---

## 7. Developer Pain Points
Recurring frustrations reported this week:
- **Memory instability**: Multiple OOM crash reports on both Linux and Windows, especially on long/resumed sessions hitting the 4 GB V8 heap cap
- **MCP connection fragility**: Timeout regressions, spec non-compliance, OAuth callback mismatches, and permanent tool stripping after cancellations
- **Windows/WSL2 performance & compatibility**: High idle CPU usage, sandbox support gaps on Windows 25H2, plugin update conflicts with VS Code, and unexplained native runtime crashes
- **Authorization UX friction**: Over-prompting during single requests and assisted-permissions failures after ~1 hour of session uptime
- **Installer & environment gaps**: Voice installer 401 errors on private Azure feeds, incorrect OS detection on BSD systems, and missing workspace `.mcp.json` loading in v1.0.83

---
*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) — issues, PRs, and releases updated in the 7 days ending 2026-09-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-09-14
*Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. Last 7 Days' Highlights
This week saw the release of **v1.18.30** with GPT-6 Astra system prompt support and provider SDK updates, but the rollout was marred by widespread `TypeError` crashes in system prompt assembly reported by multiple users. The community also surfaced critical v2.0 stability gaps (Muse Spark model failures, stuck sessions, subagent cancellation limits) and pushed for fixes to long-unresolved UI/UX pain points like clipboard copy and layout toggles.

---

## 2. Releases
### v1.18.30
[Release page](https://github.com/anomalyco/opencode/releases/tag/v1.18.30)
- **Core Improvements**: Added the Astra system prompt optimized for GPT-6 models.
- **Bugfixes**:
  - Preserved Bedrock DeepSeek model IDs (including ARN-based IDs) for correct resolution — contribution by @YeEmrick
  - Updated Azure provider SDK to pull in upstream compatibility fixes
  - Updated OpenAI provider SDK (release notes truncated)

---

## 3. Hot Issues
| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|--------------------|
| [#4283: Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283) | Open | A long-standing core usability bug (reported Nov 2025) that blocks users from saving AI-generated code/responses. Still unresolved after 10+ months. | 133 comments, 124 👍 — the most engaged issue this week, with users still reporting breakage in recent builds. |
| [#48645: Regression in 1.18.30: every prompt crashes with TypeError in SystemPrompt.environment](https://github.com/anomalyco/opencode/issues/48645) | Open | Critical v1.18.30 regression that breaks *all* prompts on updated installs. Blocks upgrading for a large share of users. | 4 comments, 1 👍 — rapidly gaining reports as more users update; confirmed reproducible on fresh sessions. |
| [#48803: v1.18.30: every prompt fails with TypeError (undefined layer node in Effect layer assembly)](https://github.com/anomalyco/opencode/issues/48803) | Open | Duplicate/related confirmation of the v1.18.30 system prompt crash, validated via A/B testing against v1.18.20 with identical config. | 3 comments, 2 👍 — reinforces urgency of a hotfix for the latest release. |
| [#48741: [2.0] Opencode Zen critical errors on Muse Spark family when model receives image/does tool call](https://github.com/anomalyco/opencode/issues/48741) | Open | v2.0 Zen gateway blocker: Muse Spark models fail entirely for multimodal or tool-use workflows due to an `encrypted_content` authorization error. | 21 comments, 1 👍 — fast-growing thread with heavy developer activity investigating root cause. |
| [#43277: Sessions permanently stuck during normal use — survive reboots, cannot be recovered](https://github.com/anomalyco/opencode/issues/43277) | Open | Severe data/workflow loss bug: sessions enter a stuck state that persists across reboots and cannot be cleared or recovered. | 14 comments, 1 👍 — users report lost work and no workaround beyond creating entirely new sessions. |
| [#23153: [FEATURE]: Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153) | Open | Top-voted feature request for payment flexibility, addressing users in regions with limited credit card access. | 22 comments, 51 👍 — strong community support, with ongoing discussion about supported chains and payment flows. |
| [#33884: TUI plugins referenced by npm package spec silently fail to load in 1.17.10](https://github.com/anomalyco/opencode/issues/33884) | Open | Breaks the entire npm-based TUI plugin ecosystem on v1.17.10; currently mitigated in `dev` via an OpenTUI revert but no permanent fix landed. | 7 comments, 1 👍 — critical for plugin developers and users relying on third-party TUI extensions. |
| [#48850: [BUG] Desktop randomly marks running turn as interrupted (AbortError: Aborted)](https://github.com/anomalyco/opencode/issues/48850) | Open | Silent, random inference interruptions on Windows Desktop with no user action — erodes trust in response completeness. | 3 comments, 0 👍 — new report but high impact for daily desktop users; no clear reproduction trigger yet. |
| [#39835: [FEATURE] New users can't switch back from the new layout — no layout toggle available](https://github.com/anomalyco/opencode/issues/39835) | Open | UI/UX regression from the layout redesign: new users are locked into the new UI with no way to revert to the familiar legacy layout. | 3 comments, 0 👍 — part of a growing wave of complaints about missing controls in the new UI. |
| [#34442: Windows Desktop installer is broken offline: ripgrep not bundled](https://github.com/anomalyco/opencode/issues/34442) | Open | Offline Windows installs are effectively non-functional — core tools (grep, glob, skill) and built-in skills fail because ripgrep is not bundled. | 3 comments, 4 👍 — significant barrier for enterprise/air-gapped users. |

---

## 4. Key PR Progress
| PR | Status | Description |
|----|--------|-------------|
| [#48770: refactor(codemode): materialize interpreter failures once at call boundary](https://github.com/anomalyco/opencode/pull/48770) | Open | Rewrites interpreter error handling: failures travel as a single `PendingThrow` and become one `Error` object at the call site, not in built-in code. Eliminates misleading AST node attribution in built-in errors. |
| [#46690: feat(plugin): expose session forms, session list, and global event stream](https://github.com/anomalyco/opencode/pull/46690) | Open | Major plugin API expansion for v2: grants plugins access to session forms, full session listing, and the global event bus. Unlocks use cases like custom external UIs (e.g., Telegram bot integrations). |
| [#44264: feat(session): add suffix compaction](https://github.com/anomalyco/opencode/pull/44264) | Open | Adds experimental `compaction.mode: "suffix"` to session runtime and config. Preserves recent context while compacting older history, addressing long context window overflow issues for long-running sessions. |
| [#48871: fix(project): resolve associated directory to its project instead of global](https://github.com/anomalyco/opencode/pull/48871) | Open | Fixes non-git project session attribution: `Project.resolve` now checks the `project_directory` table before falling back to global ID, so sessions in non-git project roots are correctly associated (closes #48870). |
| [#48862: fix(ai): preserve OpenAI Chat image URLs](https://github.com/anomalyco/opencode/pull/48862) | Open | Fixes multimodal handling: HTTP/HTTPS image URLs are no longer incorrectly treated as base64 bytes in OpenAI Chat requests. Applies to both user-uploaded images and tool-returned remote images. |
| [#44535: fix(session): stop creating phantom "unknown" tool parts on re-emitted deltas](https://github.com/anomalyco/opencode/pull/44535) | Open | Fixes a long-standing bug (#33618) where opencode itself generated phantom `unknown` tool call parts during delta re-emission, not the upstream model. |
| [#48846: fix(ai): sanitize assistant text for Claude requests](https://github.com/anomalyco/opencode/pull/48846) | Open | Improves Claude/Bedrock Converse reliability: omits empty assistant text blocks before cache marker allocation and trims trailing whitespace from assistant prefixes to avoid upstream validation errors. |
| [#48867: feat(core): make worktree APIs project-based](https://github.com/anomalyco/opencode/pull/48867) | Open | First pass at project-based worktree management: all worktree operations now require a `projectID` instead of arbitrary locations. Enables safer multi-project worktree workflows. |
| [#48878: fix(tui): force terminal reset on exit for Windows ConPTY](https://github.com/anomalyco/opencode/pull/48878) | Open | Fixes Windows terminal corruption on exit (closes #48776): forces a full terminal reset when exiting opencode on ConPTY stacks (e.g., Alacritty + zellij), which previously left the shell in a raw/broken state. |
| [#47913: docs: add Indonesian translation (README.id.md)](https://github.com/anomalyco/opencode/pull/47913) | Open | Community contribution adding full Indonesian README translation, expanding OpenCode's accessibility to Indonesian-speaking developers (closes #47910). |

---

## 5. Hot Discussions
*Omitted — no GitHub Discussions data was provided in the dataset.*

---

## 6. Feature Request Trends
1. **UI/UX control & rollback options**: Users are repeatedly requesting a layout toggle to revert to the legacy left-sidebar UI, plus restoration of missing controls (MCP toggle) removed in the new UI redesign.
2. **Payment flexibility**: Crypto payment support for OpenCode Go is the highest-voted new feature request, driven by users in regions with limited traditional payment access.
3. **Session management enhancements**: Demand for better session reliability, recoverability for stuck sessions, and smarter context compaction (e.g., suffix mode) to support long-running work.
4. **v2 subagent feature parity**: Users are pushing for missing v2 subagent capabilities, including cross-location subagent support for monorepos and cancellation of running background subagents.
5. **Plugin ecosystem expansion**: Developers want broader plugin API surface access (session lists, event streams, form controls) to build more powerful third-party integrations.

---

## 7. Developer Pain Points
1. **v1.18.30 release instability**: The latest stable release has a critical regression that crashes *all* prompts due to a `TypeError` in system prompt assembly, forcing users to downgrade to v1.18.20/v1.18.18.
2. **Persistent clipboard functionality gap**: The copy-to-clipboard feature has been broken for over 10 months with no fix, creating daily friction for users who rely on copying generated code.
3. **Session reliability issues**: Stuck sessions that survive reboots, phantom tool parts, and non-git session attribution bugs cause lost work and confusing UX.
4. **New UI missing critical functionality**: The redesigned UI removed familiar controls (MCP toggle, layout switch) with no replacement, leaving users unable to configure core features.
5. **TUI plugin ecosystem fragility**: npm-based TUI plugins are broken on recent releases due to OpenTUI dual-entry and dual-runtime regressions, with only a temporary revert in place.
6. **Platform-specific gaps**: Windows users face consistent unique bugs: offline installer breakage (missing ripgrep), terminal corruption on exit, non-git session path issues, and random inference interruptions.
7. **v2.0 multimodal/tool-use instability**: Zen gateway users on Muse Spark models cannot use image input or tool calls at all due to upstream authorization errors.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest | 2026-09-14
Repository: [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. Last 7 Days' Highlights
This week the Pi community focused heavily on TUI stability, model provider compatibility, and extension ecosystem growth. No new official releases shipped, but active work advanced core reliability fixes, new OAuth provider support, and a wave of third-party GUI/tooling projects built on Pi's RPC mode. Top community concerns centered on Codex transport reliability and TUI rendering performance with large transcripts.

---

## 2. Releases
No new releases were published in the last 7 days.

---

## 3. Hot Issues
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#4945 openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945) | Long-running high-priority bug: GPT-5.5/Codex streams hang the TUI on "Working..." with no error, forcing users to abort turns. Core reliability blocker for Codex users. | 78 comments, 33 👍 — most discussed issue this week, active debugging in progress. |
| 2 | [#7739 Set a startup-time budget targeting jcode-comparable latency and memory](https://github.com/earendil-works/pi/issues/7739) | Defines a performance baseline to close the startup latency/memory gap with jcode, a key competitive benchmark. | 8 comments — early scoping phase, benchmark data shared. |
| 3 | [#8036 Edit tool crashes TUI when rendering a large diff during execution and session resume](https://github.com/earendil-works/pi/issues/8036) | Critical TUI crash triggered by ~14.5MB diffs from long-line HTML files, also breaking session resume. | 8 comments — reproducible, impact confirmed by multiple users. |
| 4 | [#9311 Fullscreen mouse selection survives session switch](https://github.com/earendil-works/pi/issues/9311) | Minor but common TUI UX bug: text selection persists across session switches in fullscreen mode. | 6 comments — clear fix identified, low effort high impact. |
| 5 | [#5372 Allow custom OAuth callback page rendering](https://github.com/earendil-works/pi/issues/5372) | Unblocks custom branding for OAuth flows in embedded/white-label Pi deployments. | 5 comments — requested by enterprise/extension developers. |
| 6 | [#9255 TuiMainScreen: full-screen redraw storm when changed rows sit above the viewport top](https://github.com/earendil-works/pi/issues/9255) | Major performance issue on long transcripts: violent jumping/doubled text from unnecessary full redraws every frame during streaming. | 4 comments — root cause identified, affects all heavy users. |
| 7 | [#9075 Compaction summarisation inherits session thinking level on adaptive models and deterministically hits output cap at high efforts](https://github.com/earendil-works/pi/issues/9075) | Compaction fails on high-effort adaptive Anthropic models, as thinking tokens eat into the fixed output budget. | 3 comments, 3 👍 — impacts advanced users of Claude adaptive thinking. |
| 8 | [#9474 Codex transport: no non-resetting per-request total deadline; periodic events defeat idle timeout](https://github.com/earendil-works/pi/issues/9474) | Related to #4945: stalled streams with keepalive events never time out, contributing to the "Working..." hang. | 3 comments — part of the ongoing Codex reliability work. |
| 9 | [#9566 context size defaults to 128k despite the real size being available](https://github.com/earendil-works/pi/issues/9566) | Bug where matching model IDs in `models.json` override correct context window/cost data with defaults, breaking local LLM setups. | 2 comments — closed quickly with fix applied. |
| 10 | [#9567 pi install fails with pnpm >= 11 (blockExoticSubdeps on by default)](https://github.com/earendil-works/pi/issues/9567) | Installation failure on latest pnpm due to URL-pinned subdependency in `pi-mcp-adapter`. | 1 comment — affects all pnpm 11 users, high priority for package maintainers. |

---

## 4. Key PR Progress
| # | PR | Description |
|---|----|-------------|
| 1 | [#9548 Mid conversation system messages](https://github.com/earendil-works/pi/pull/9548) | **Open** — Core architectural change: system prompt/tool changes are recorded in the transcript instead of silently rewriting session state, enabling correct branch navigation and resume of modified sessions. |
| 2 | [#9488 fix(ai): add canonical Codex turn attribution](https://github.com/earendil-works/pi/pull/9488) | **Open** — Adds provider-neutral request identity metadata to Codex streams, enabling reliable attribution across tool continuations, retries, and compaction recovery (supports #4945 debugging). |
| 3 | [#9096 feat(ai,coding-agent): add Meta provider with Muse subscription OAuth](https://github.com/earendil-works/pi/pull/9096) | **Open** — Adds Meta Muse as a native provider with subscription OAuth login (no API key required). |
| 4 | [#9504 fix(coding-agent): accept Windows Store shell aliases](https://github.com/earendil-works/pi/pull/9504) | **Open** — Fixes Windows shell detection to work with Store-installed aliases (e.g. `winget`, `powershell`) that fail `existsSync()` checks. |
| 5 | [#9501 fix(coding-agent): resolve Windows shells from installation directories](https://github.com/earendil-works/pi/pull/9501) | **Open** — Unifies Windows binary discovery logic, greatly improving compatibility with non-standard shell installations on Windows. |
| 6 | [#8635 fix(ai): preserve aborted stop reason during lazy setup](https://github.com/earendil-works/pi/pull/8635) | **Open** — Fixes abort signal handling during lazy stream setup, correctly reporting aborted requests instead of generic setup failures. |
| 7 | [#9531 feat(tree): add permanent branch deletion from session tree](https://github.com/earendil-works/pi/pull/9531) | **Closed** — Implements permanent session tree branch pruning via `Shift+D` in the `/tree` selector, with protections for active paths and proper compaction re-pointing. |
| 8 | [#9556 feat(ai): serverTools — declare provider server-side tools in model config](https://github.com/earendil-works/pi/pull/9556) | **Closed** — Adds support for declaring provider-built server-side tools (e.g. OpenAI Responses `web_search`, Zhipu GLM search) in model configuration. |
| 9 | [#9529 feat(ai): add Google Antigravity and Cursor Pro OAuth providers](https://github.com/earendil-works/pi/pull/9529) | **Closed** — Adds two new subscription OAuth providers: Google Antigravity (Cloud Code Assist) and Cursor Pro, no API keys required. |
| 10 | [#9517 feat(tui): group long tool-call runs](https://github.com/earendil-works/pi/pull/9517) | **Closed** — Collapses 6+ consecutive tool calls into an aggregate transcript row with expand/collapse interaction, reducing clutter from long agent execution loops. |

---

## 5. Hot Discussions
### Q&A
1. [#3373 Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)
   - Long-running community thread with 16 comments / 9 👍: users share their favorite extensions and tooling built on Pi.

2. [#9516 openai-responses: tool-result images in function_call_output dropped by compatible gateways](https://github.com/earendil-works/pi/discussions/9516)
   - Technical discussion about Responses API image encoding compatibility issues with third-party gateways.

### Ideas
1. [#8420 From the DSH plugin ecosystem to pi: are we missing an official Web UI base?](https://github.com/earendil-works/pi/discussions/8420)
   - 2 👍: Discussion comparing Pi's extension ecosystem to DSH's plugin scene, asking if Pi should ship an official Web UI base to unlock more UI-focused community contributions.

2. [#8803 Introducing pi-verdict — a minimal permission gate for pi: allow / ask / deny, one file, zero dependencies](https://github.com/earendil-works/pi/discussions/8803)
   - 1 👍: Proposal/demo of a lightweight permission gate extension that adds per-tool-call approval, in the style of Claude Code's auto mode.

### Show and tell
1. [#9552 Show & tell: Pi Heao GUI — a Windows desktop client for pi (built on the pi-agent-studio chat UI)](https://github.com/earendil-works/pi/discussions/9552)
   - New Windows desktop GUI for Pi that reuses the official pi-agent-studio chat UI instead of reimplementing it.

2. [#9525 Thank you — --mode rpc is the backbone of a new open-source project](https://github.com/earendil-works/pi/discussions/9525)
   - Community member shares `web-agent`, a phone-friendly web dashboard + Siri/Matrix bridge built on top of Pi's RPC mode with a persistent session.

3. [#9446 Phosphor – a desktop surface for pi](https://github.com/earendil-works/pi/discussions/9446)
   - Desktop app that runs Pi sessions side-by-side with diffs, files, terminal, and artifacts, supporting all Pi providers plus Claude Pro/Max and ChatGPT.

4. [#9427 Pi Manager — a local UI for providers, models, and writing ~/.pi/agent](https://github.com/earendil-works/pi/discussions/9427)
   - Local control plane UI for managing providers, model catalogs, and `~/.pi/agent` configuration without editing files manually.

5. [#9373 pi-agent-views — concurrent sub-agents, rendered by pi itself](https://github.com/earendil-works/pi/discussions/9373)
   - Extension implementing Claude Code-style agent views: run multiple concurrent sub-agents with different models, switchable via hotkey.

6. [#9327 Eco Coding — a GUI for Pi (vision split, teams, browser, computer use + mobile)](https://github.com/earendil-works/pi/discussions/9327)
   - Open-source desktop GUI for Pi with vision split, team features, browser integration, and mobile support.

---

## 6. Feature Request Trends
1. **GUI / Web UI ecosystem expansion**: An explosion of third-party desktop/web clients built on `pi --mode rpc` signals strong unmet demand for non-TUI interfaces, plus a growing call for an official Web UI base to standardize extension UI development.
2. **More subscription OAuth providers (no API keys)**: Repeated requests for native support for paid AI services with browser OAuth login (Meta Muse, Google Antigravity, Cursor Pro) instead of manual API key configuration.
3. **Session management improvements**: Branch deletion, session forking from resume lists, and persistent state across `/new` sessions are recurring usability requests.
4. **Enhanced extension capabilities**: Custom OAuth page rendering, working-indicator UI leases, and permission gate hooks are top asks for extension developers.
5. **Tooling for agent observability**: Context memory tracing, loop detection, and tool-call grouping for long agent runs are growing requests as users run more complex autonomous workflows.

---

## 7. Developer Pain Points
1. **Codex / OpenAI Responses transport reliability**: The #4945 hang issue and related #9474 timeout bug are the single biggest source of user frustration, with frequent reports of lost work from stuck "Working..." states.
2. **TUI performance on large transcripts**: Multiple overlapping issues (#8036, #9255, #9549) cause crashes, redraw storms, and saturated CPU cores when working with long conversation history or large diffs.
3. **Windows compatibility gaps**: Shell detection failures, Store alias issues, and inconsistent binary resolution create a rough experience for Windows users.
4. **Package/install friction with newer tooling**: pnpm 11 compatibility breaks and jiti cache permission issues cause setup failures on modern development environments.
5. **Adaptive model edge cases**: Compaction output cap failures (#9075) and incorrect model context window defaults (#9566) break workflows for users running cutting-edge local or adaptive-thinking models.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-09-14

---

## 1. Last 7 Days' Highlights
The Qwen Code project shipped the stable `v0.23.3` CLI release, expanded desktop client capabilities with a `v0.3.0` preview, and advanced multi-agent sandboxing and Web Shell remote connectivity. A cluster of high-priority React #185 rendering crashes in the TUI drove urgent community bug reports, while security hardening and sandbox isolation emerged as top development priorities.

---

## 2. Releases
| Release | Type | Key Changes |
|---------|------|-------------|
| [v0.23.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3) | Stable CLI | Expanded reasoning presets for Kimi, Qwen, and DeepSeek models ([#11349](https://github.com/QwenLM/qwen-code/pull/11349)); no breaking changes |
| [desktop-v0.3.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0-preview.0) | Desktop Preview | Pre-release build with scheduled packaging CI ([#11519](https://github.com/QwenLM/qwen-code/pull/11519)); bridge permission state fixes |
| [desktop-v0.3.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0) | Desktop Stable | Official desktop release with improved bridge handling |
| [v0.23.3-nightly builds (20260910–20260913)](https://github.com/QwenLM/qwen-code/releases) | Nightly | DingTalk background response aggregation refactor ([#11570](https://github.com/QwenLM/qwen-code/pull/11570)); channel API breaking changes |
| [cua-driver-rs-v0.20.6](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.6) | Driver Update | Prebuilt CUA driver binaries: codesigned macOS universal binary, Linux x86_64/arm64 (glibc 2.31+), Windows UIAccess worker |
| [sdk-typescript-v0.1.12](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12) | SDK | Bundles CLI v0.23.3 |
| [v0.23.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2) | Stable CLI | Improved split-view session navigation for web-shell ([#11250](https://github.com/QwenLM/qwen-code/pull/11250)); no breaking changes |

---

## 3. Hot Issues
1. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500) – TUI silent crash (React #185) on concurrent background agent completion**  
   P1 UI bug causing uncaught "Maximum update depth exceeded" errors when multiple subagents finish in quick succession, dropping users back to the shell with no error context. 12 comments make it the most-discussed active issue.
2. **[#5199](https://github.com/QwenLM/qwen-code/issues/5199) – Recurring React error #185 on Windows**  
   Long-running open issue with 8 comments, updated this week, reporting the same render loop crash on Windows Cherry Studio installations, indicating cross-environment reproducibility.
3. **[#11756](https://github.com/QwenLM/qwen-code/issues/11756) – Virtualized history crash during background-agent workflows**  
   P1 bug reproducible on v0.23.3 stable with Virtualized History enabled, triggered by multi-agent workflows updating conversation history.
4. **[#11783](https://github.com/QwenLM/qwen-code/issues/11783) – TUI crash after background shell task registration**  
   P1 UI crash occurring seconds after `run_shell_command` with `is_background: true` is invoked, confirming background task lifecycle as a core crash vector.
5. **[#11764](https://github.com/QwenLM/qwen-code/issues/11764) – Security: Bash allow rule bypass via backslash in single quotes**  
   P1 vulnerability where a saved `Bash(...)` allow rule authorizes an unprompted second command when the first ends with a backslash inside single quotes, posing a sandbox escape risk.
6. **[#11695](https://github.com/QwenLM/qwen-code/issues/11695) – Tracking: Separate agent harness from execution environment**  
   Core architecture proposal to decouple the agent loop from tool execution processes, enabling separable, addressable runtime sandboxes. 5 comments signal strong maintainer interest as a roadmap direction.
7. **[#11704](https://github.com/QwenLM/qwen-code/issues/11704) – Proposal: Official Android companion client**  
   Feature request for a native Android thin client connecting to `qwen serve` over ACP, with the contributor offering to build and maintain the MVP. 5 comments show community demand for mobile access.
8. **[#11718](https://github.com/QwenLM/qwen-code/issues/11718) – Desktop AppImage Python environment leak crashing MCP servers**  
   Closed bug where AppImage-bundled `PYTHONHOME`/`PYTHONPATH` leaked to spawned stdio MCP servers, breaking external Python interpreters. Resolved this week after 4 comments.
9. **[#11590](https://github.com/QwenLM/qwen-code/issues/11590) – Non-Qwen models fail on DashScope gateway due to metadata field mismatch**  
   Closed P1 integration bug where auto-injected `metadata` objects caused 400 errors for third-party models on the DashScope OpenAI-compatible endpoint. Fixed after community reporting.
10. **[#11762](https://github.com/QwenLM/qwen-code/issues/11762) – `/delete` does not clean `~/.qwen/tmp/<hash>/logs.json`**  
    Privacy bug where full conversation logs persist after session deletion, with no setting to disable or limit log accumulation. Raises data retention concerns for users.

---

## 4. Key PR Progress
1. **[#11548](https://github.com/QwenLM/qwen-code/pull/11548) – feat(web-shell): connect to a selected remote daemon**  
   Enables standalone Web Shell to connect to explicit remote daemons via address + bearer token, with support for switching targets and reusing existing workspace/session/terminal interfaces.
2. **[#11614](https://github.com/QwenLM/qwen-code/pull/11614) – feat(cli): add bwrap kernel sandbox backend for Linux**  
   Adds a lightweight Linux sandbox using kernel-level `bwrap` isolation, no container runtime/root/daemon required. Opt-in only, preserving existing macOS and container backends.
3. **[#11711](https://github.com/QwenLM/qwen-code/pull/11711) – feat(core): add container execution for subagents**  
   Implements Docker/Podman container backends for ordinary subagent execution on Unix, with environment and agent-level configuration flags for mandatory containerization.
4. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) – feat(mesh): add persistent shared-thread agent collaboration**  
   Introduces persistent workspace agent identities with shared thread collaboration: work assignment, interjection, result attribution, per-run history, cancellation, and review workflows.
5. **[#11692](https://github.com/QwenLM/qwen-code/pull/11692) – feat(core): make web_search budget configurable and bound extractor fallback**  
   Makes `web_search` timeout configurable via `tools.webSearch.timeoutMs` (default raised to 120s from 60s) and bounds model input when the search budget is exhausted.
6. **[#11086](https://github.com/QwenLM/qwen-code/pull/11086) – feat(serve): scope extensions to workspace runtimes**  
   Scopes the global extension catalog to per-workspace runtimes, with reconciled extension state, workspace-qualified daemon/SDK access, and updated extension management UIs.
7. **[#11280](https://github.com/QwenLM/qwen-code/pull/11280) – fix(skills): re-apply Skill side effects on session resume**  
   Restores `allowedTools` rules and `hooks` from loaded Skills when resuming sessions, fixing the gap where only instructions were restored but runtime state was lost.
8. **[#11538](https://github.com/QwenLM/qwen-code/pull/11538) – feat: select OpenAI wire API per model**  
   Adds per-model `wireApi` configuration (`chat-completions` / `responses`) for OpenAI-compatible providers, with support across CLI, ACP, daemon, Web Shell, and VS Code setup flows.
9. **[#11242](https://github.com/QwenLM/qwen-code/pull/11242) – feat(browser-use): add Chrome Native Messaging relay**  
   Connects the Browser SDK to local Chrome via Native Messaging + Qwen Chrome extension, enabling debugger attachment, CDP command forwarding, and browser automation without a separate browser instance.
10. **[#11722](https://github.com/QwenLM/qwen-code/pull/11722) – feat(web-shell): add PWA installability and Android development shell**  
    Adds PWA metadata and a production service worker to the daemon-served Web Shell, enabling installability and an Android development shell experience, aligning with the mobile companion client proposal.

---

## 5. Hot Discussions
*No discussion data provided in this week's dataset.*

---

## 6. Feature Request Trends
1. **Sandbox & execution isolation**: Demand for kernel-level (`bwrap`) and container-based (Docker/Podman) subagent isolation, plus formal separation of the agent harness from the execution environment ([#11695](https://github.com/QwenLM/qwen-code/issues/11695), [#11614](https://github.com/QwenLM/qwen-code/pull/11614), [#11711](https://github.com/QwenLM/qwen-code/pull/11711)).
2. **Mobile & remote access**: Strong interest in official Android clients and PWA support for accessing Qwen Code remotely via `qwen serve` ([#11704](https://github.com/QwenLM/qwen-code/issues/11704), [#11722](https://github.com/QwenLM/qwen-code/pull/11722), [#11548](https://github.com/QwenLM/qwen-code/pull/11548)).
3. **Multi-agent collaboration**: Requests for persistent agent identities, shared thread workspaces, and structured background task tracking across daemon and web shell ([#11206](https://github.com/QwenLM/qwen-code/pull/11206), [#11636](https://github.com/QwenLM/qwen-code/pull/11636)).
4. **Web search configurability**: Demand for adjustable search timeouts and bounded fallback behavior to improve reliability and control costs ([#11687](https://github.com/QwenLM/qwen-code/issues/11687), [#11692](https://github.com/QwenLM/qwen-code/pull/11692)).

---

## 7. Developer Pain Points
1. **TUI stability (React #185 crashes)**: Recurring "Maximum update depth exceeded" errors triggered by background agents, virtualized history, and concurrent subagent completion, causing silent crashes and lost session state ([#11500](https://github.com/QwenLM/qwen-code/issues/11500), [#5199](https://github.com/QwenLM/qwen-code/issues/5199), [#11756](https://github.com/QwenLM/qwen-code/issues/11756), [#11783](https://github.com/QwenLM/qwen-code/issues/11783)).
2. **CI flakiness**: Intermittent test failures, timeouts, and SIGTERM kills in shared runner environments, blocking PR merges and release pipelines without logic errors ([#10490](https://github.com/QwenLM/qwen-code/issues/10490), [#11777](https://github.com/QwenLM/qwen-code/issues/11777), [#11736](https://github.com/QwenLM/qwen-code/issues/11736)).
3. **Memory leaks & session persistence issues**: High memory usage (up to 7GB) during long-running sessions, crashes with no recovery path, and incomplete cleanup of log data on session deletion ([#11724](https://github.com/QwenLM/qwen-code/issues/11724), [#11762](https://github.com/QwenLM/qwen-code/issues/11762)).
4. **Cross-model compatibility**: Silent failures when using non-Qwen models via the DashScope gateway due to unconditionally injected metadata fields ([#11590](https://github.com/QwenLM/qwen-code/issues/11590)).
5. **Desktop environment leaks**: AppImage-bundled Python environment variables leaking to spawned MCP servers, breaking external Python tooling on Linux ([#11718](https://github.com/QwenLM/qwen-code/issues/11718)).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*