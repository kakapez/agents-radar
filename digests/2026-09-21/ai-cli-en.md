# AI CLI Tools Weekly Digest 2026-09-21

> Generated: 2026-09-21 00:58 UTC | Tools covered: 7

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

# Cross-Tool AI CLI Ecosystem Comparison Report | 2026-09-21
## 1. Ecosystem Overview
The AI CLI tools ecosystem is in a phase of rapid, user-centric iteration, with core priorities shifting from baseline agent functionality to reliability, cost efficiency, and platform maturity. Across all major tools, communities are demanding better transparency for billing and quota management, more robust cross-platform (especially Windows) compatibility, and granular control over agent behavior and system context. The MCP (Model Context Protocol) ecosystem has emerged as a critical interoperability layer, with consistent reports of compatibility gaps between CLI and desktop/IDE implementations. Meanwhile, security and safety guardrails (sandboxing, secret redaction, destructive operation prevention) are becoming table stakes as agents move from experimental use to production workflows.

## 2. Activity Comparison
| Tool | Issues (tracked/active) | PRs (updated last 7d) | Discussions (active threads) | Release Status (last 7d) |
|------|--------------------------|------------------------|-------------------------------|---------------------------|
| Claude Code | 10 tracked (8 open, 2 closed) | 10 tracked (6 open, 4 closed) | N/A (no discussion data provided) | 8 stable releases (v2.1.271–v2.1.278), focused on cost optimization and reliability |
| OpenAI Codex | 10 tracked (all open) | 10 tracked (all closed/merged, via release pipeline) | 10 active threads (4 ideas, 3 Q&A, 3 show-and-tell) | 1 stable patch (rust-v0.155.1) + 7 alpha releases (v0.156.0-alpha.6–12) |
| Gemini CLI | 10 tracked (all open, 4 P1) | 10 tracked (7 merged, 3 open for review) | N/A (no discussion data provided) | Nightly v0.62.0 builds + v0.61.0-preview.0 milestone cut; v0.60.0 stable baseline |
| GitHub Copilot CLI | 30 tracked (9 open, 21 closed) | 0 updated | N/A (no discussion data provided) | 10 releases (v1.0.84-6 through v1.0.87-0), including 2 stable releases |
| OpenCode | 10 tracked (all open) | 10 tracked (9 open, 1 closed) | N/A (no discussion data provided) | 1 stable release (v1.18.31), focused on core bug fixes |
| Pi | 10 tracked (5 open, 5 closed) | 10 tracked (8 closed/merged, 2 open) | 9 active threads (4 Q&A/ideas, 5 show-and-tell) | 2 minor releases (v0.86.0, v0.86.1), focused on new provider and cache features |
| Qwen Code | 10 tracked (all open, 4 P1) | 10 tracked (all open/under review) | N/A (no discussion data provided) | 3 stable releases (v0.24.0–v0.24.2) + nightly/preview builds, with breaking changes |

## 3. Shared Feature Directions
The following requirements appear across 3+ tool communities, indicating universal user demand:
1. **Cost & quota transparency and control**
   - *Affected tools*: Claude Code (undocumented session classification costs), OpenAI Codex (subagent quota burn, false capacity errors), OpenCode (free-tier quota bugs, balance API request), Qwen Code (non-conversation context token overhead), Pi (cache cost management).
   - *Needs*: Granular usage visibility, pre-execution cost estimates for subagent/fan-out workloads, configurable spending limits, and clear documentation for billing-impacting settings.
2. **Windows platform parity & stability**
   - *Affected tools*: Claude Code (Cowork folder selection bugs), OpenAI Codex (send button regression, WSL bridge failures), Gemini CLI (ConPTY/process edge cases), Copilot CLI (WSL2 terminal hangs), Pi (CJK IME lag, ConPTY paste/rendering bugs), Qwen Code (packaging and port conflict bugs).
   - *Needs*: Reliable terminal rendering, fixed input method (IME) support, consistent WSL2 integration, and out-of-box installation/setup workflows for Windows users.
3. **Session reliability & lifecycle management**
   - *Affected tools*: OpenAI Codex (stale lock files, cross-device sync gaps), Copilot CLI (OOM crashes on long sessions, transcript corruption), OpenCode (session bloat, background service segfaults), Qwen Code (live session deletion corruption), Gemini CLI (agent hangs, false success reports).
   - *Needs*: Resilient session resume, protection against memory leaks and process orphaning, graceful handling of interrupted workflows, and native undo/rewind for agent edits.
4. **MCP ecosystem interoperability**
   - *Affected tools*: Claude Code (plugin hook execution bugs), OpenAI Codex (WSL MCP bridge failures), Copilot CLI (Figma MCP compatibility gaps, server discovery failures), Qwen Code (per-server resource limit configuration), Pi (extension-driven MCP integrations).
   - *Needs*: Consistent transport error handling, parity with IDE/desktop MCP implementations, better server lifecycle management, and standardized compatibility testing for third-party MCP servers.
5. **Safety & security guardrails**
   - *Affected tools*: Claude Code (sandbox permission scope documentation gaps), OpenAI Codex (subagent cost guardrails), Copilot CLI (unsafe checkpoint restore data loss), Gemini CLI (destructive operation prevention, Auto Memory secret redaction), Qwen Code (secret leakage in tool arguments), Pi (runtime constraint enforcement extensions).
   - *Needs*: Pre-execution confirmation for high-risk operations, automated secret redaction, configurable sandbox boundaries, and clear visibility into data usage for AI features.

## 4. Differentiation Analysis
| Tool | Core Focus | Target Users | Technical Approach |
|------|------------|--------------|--------------------|
| Claude Code | Enterprise-grade agent workflows, cost optimization, gateway observability | Enterprise teams, power users, and organizations using Anthropic’s ecosystem | Tightly integrated with Anthropic’s API and Claude models; heavy investment in gateway-side controls, AGENTS.md/CLAUDE.md project configuration, and plugin ecosystem hardening |
| OpenAI Codex | TUI usability, cross-device workflow, subagent capabilities | Individual developers, ChatGPT Plus/Pro users, OpenAI ecosystem users | Rust-based runtime for performance; deep integration with OpenAI models and ChatGPT app; rapid iteration on UI/UX and usage transparency |
| Gemini CLI | Agent reliability, enterprise quota visibility, security hardening | Enterprise GCP users, Google Cloud ecosystem teams, security-focused teams | TypeScript core with PTY lifecycle hardening; emphasis on correctness (false success prevention) and compliance (OAuth, secret handling); AST-aware tooling roadmap for codebase efficiency |
| GitHub Copilot CLI | GitHub ecosystem integration, custom agent support, policy controls | GitHub users, enterprise teams with managed development workflows | Tight coupling with GitHub’s platform (Copilot, MCP, repo policies); focus on policy enforcement at the organizational level; Vim mode and terminal-native ergonomics |
| OpenCode | Open-source flexibility, local model support, free-tier accessibility | Hobbyists, local model users, cost-conscious developers | Community-driven open-source project; supports multiple providers (including Ollama/local models); current focus on fixing V2 UI regressions and free-tier quota reliability |
| Pi | Extensibility, multi-provider support, performance optimization | Power users, tinkerers, teams building custom agent workflows | Highly modular architecture with rich extension APIs; provider-agnostic design; investment in TUI performance and caching efficiency to reduce costs |
| Qwen Code | Long-context token efficiency, web-shell/daemon workflows, Chinese market localization | Chinese developer market, long-context model users, teams needing web-based agent access | Heavy investment in token governance for 1M+ context windows; feature-rich web-shell with SSH/mobile pairing; sandboxing refactoring for secure execution |

## 5. Community Momentum & Maturity
### Highest Community Momentum
- **OpenAI Codex**: Boasts the most active discussion ecosystem, with high-upvote idea threads (remote control, undo/rewind) and a thriving third-party plugin/tool community (150+ curated ecosystem tools). Rapid alpha release cadence signals fast iteration.
- **Pi**: Vibrant extension and discussion community, with consistent new community-built tools (IDE integrations, runtime constraint enforcement, workflow automation). Feature development is responsive to user feedback, with active Windows compatibility feedback threads.
- **Claude Code**: High-engagement issue tracker with well-defined, user-prioritized bugs and feature requests; consistent weekly release cadence focused on enterprise pain points.

### Maturity & Stability Leaders
- **GitHub Copilot CLI**: Highest issue closure rate (70% of tracked issues closed in 7 days) and frequent stable releases, with enterprise-focused policy controls indicating production readiness. Limited recent PR activity suggests a more mature, feature-complete core.
- **Gemini CLI**: Structured, priority-ranked issue backlog with clear P1/P2 triage; focus on security and correctness bugs over flashy features indicates enterprise-grade maturity.

### Earlier-Stage / Rapidly Iterating Tools
- **OpenCode**: Highest concentration of critical stability bugs (segfaults, UI freezes, quota tracking failures) and unaddressed UI regressions. Driven by community contributors, with an open PR backlog targeting core performance and reliability gaps.
- **Qwen Code**: Fast-moving release cadence with breaking changes in minor versions; aggressive roadmap focused on long-context optimization and web-shell features, indicating it is still expanding core functionality.
- **Pi**: Fast feature iteration (new providers, caching, extension APIs) alongside known performance and platform gaps, balancing extensibility with ongoing core stability work.

## 6. Trend Signals
1. **Token efficiency is becoming a core competitive differentiator for long-context models**  
   Qwen Code’s coordinated token governance initiative, Claude Code’s auto-mode cost optimization, and Pi’s cache warming features indicate that reducing non-conversation context overhead will be a key battleground as 1M+ token window models become mainstream. Developers building AI CLI tooling should prioritize context pruning, lazy tool schema loading, and cache awareness to deliver lower total cost of ownership.
2. **The MCP ecosystem is entering a "compatibility era"**  
   Widespread reports of MCP server interoperability gaps, transport errors, and feature mismatches between CLI and IDE implementations signal that the protocol is maturing beyond early adoption. Standards for compatibility testing, error handling, and server lifecycle management will be critical for ecosystem participants.
3. **Windows is an underserved high-growth market for AI CLI tools**  
   Every tool in the ecosystem reports recurring Windows-specific bugs (IME issues, ConPTY rendering, WSL integration, path handling). Tools that invest in first-class Windows support stand to capture a large share of developers who have been locked out of CLI-based agent workflows.
4. **Safety guardrails are shifting from optional to mandatory**  
   Users are no longer willing to accept silent failures, data loss risks, or opaque data usage from AI agents. Features like runtime constraint enforcement (Pi), destructive operation prevention (Gemini CLI), and secret redaction (Qwen Code) are moving from nice-to-haves to baseline requirements for trust.
5. **Hybrid local/remote agent workflows are gaining traction**  
   Qwen Code’s SSH workspace support, OpenAI Codex’s remote control demand, and Copilot CLI’s session resume improvements indicate that users want seamless access to agents across local, remote, and mobile contexts. Developers should prioritize daemon/background service architectures and cross-device session sync to meet this demand.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-21)
*Data source: [anthropics/skills](https://github.com/anthropics/skills) official repository*

---

## 1. Top Skills Ranking (by community attention)
Note: PR comment counts are marked as `undefined` in the source dataset; ranking is derived from recency, update frequency, and issue cross-references as proxy signals for engagement. All listed PRs are open.

1. **skill-creator trigger evaluation fixes** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
   - Functionality: Fixes false misses/invalid scores in skill trigger evaluation, resolves Windows subprocess pipe failures, and prevents unrelated tools from interrupting scan flows.
   - Discussion highlights: Addresses a core pain point for skill developers (misleading optimization results from broken trigger tests); directly tied to multiple open bug reports about 0% recall rates.
   - Status: Open, last updated 2026-09-16.

2. **skill-creator 0% recall fix** — [PR #1769](https://github.com/anthropics/skills/pull/1769)
   - Functionality: Resolves a critical bug where `skill-creator`'s trigger evaluation reports `precision=100% recall=0%` for every skill, causing invalid description tuning.
   - Discussion highlights: Directly fixes Issue #1721, a widely reported developer experience blocker; complements PR #1298's broader trigger evaluation overhaul.
   - Status: Open, last updated 2026-09-15.

3. **mcp-builder MCP 2.0 compatibility** — [PR #1742](https://github.com/anthropics/skills/pull/1742)
   - Functionality: Adds support for `mcp>=2.0.0` import paths (renamed `streamable_http_client`) and custom HTTP header configuration via `create_mcp_http_client`.
   - Discussion highlights: Fixes Issue #1668, a critical compatibility break for MCP skill builders adopting the latest protocol version; actively maintained as of 2026-09-19.
   - Status: Open, last updated 2026-09-19.

4. **AWT (AI Watch Tester) E2E testing skill** — [PR #822](https://github.com/anthropics/skills/pull/822)
   - Functionality: Adds a vision-powered browser control skill for zero-code end-to-end test generation and execution.
   - Discussion highlights: One of the longest-standing high-engagement feature PRs; fills a major gap in AI-driven QA tooling for Claude Code.
   - Status: Open, last updated 2026-09-19.

5. **proofcore-contract-auditor Web3 skill** — [PR #1771](https://github.com/anthropics/skills/pull/1771)
   - Functionality: Adds a smart contract audit skill for Solidity/Rust contracts, with cryptographic audit proof anchoring on the TON Blockchain via zero-storage Merkle protocol.
   - Discussion highlights: Fast-growing new domain skill for Web3 developers; brings novel on-chain verification capabilities to the ecosystem.
   - Status: Open, last updated 2026-09-16.

6. **md2video-audio content generation skill** — [PR #1703](https://github.com/anthropics/skills/pull/1703)
   - Functionality: Zero-cost skill that compiles Markdown documents into professional MP4 videos with human-like voiceovers, via Marp slide conversion.
   - Discussion highlights: High-demand creative workflow tool; bridges documentation and multimedia content creation.
   - Status: Open, last updated 2026-09-15.

7. **blast-radius destructive operation checklist** — [PR #1776](https://github.com/anthropics/skills/pull/1776)
   - Functionality: Pre-operation safety checklist for bulk/destructive writes (user archiving, access revocation, batch deletion, mass mailing) to prevent out-of-scope impacts.
   - Discussion highlights: Addresses a critical safety gap in AI agent operations; fills a unique niche in risk mitigation skills.
   - Status: Open, last updated 2026-09-18.

---

## 2. Community Demand Trends (from Issues)
The most requested skill directions and ecosystem improvements are:
1. **Security & trust boundary tools**: The highest-comment issue ([#492](https://github.com/anthropics/skills/issues/492), 43 comments) highlights demand for namespace verification and skill provenance tools to prevent community skills from impersonating official Anthropic skills.
2. **Enterprise collaboration features**: [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) is the top-voted feature request for org-wide skill sharing, replacing manual file transfer workflows.
3. **Skill development tooling reliability**: Multiple high-comment issues ([#556](https://github.com/anthropics/skills/issues/556), [#1390](https://github.com/anthropics/skills/issues/1390)) report broken evaluation harnesses (0% trigger rates, silent tool errors) that block skill development, indicating strong demand for improved builder tooling.
4. **Agent governance & safety**: [Issue #412](https://github.com/anthropics/skills/issues/412) and [Issue #1385](https://github.com/anthropics/skills/issues/1385) propose skills for policy enforcement, threat detection, and multi-stage quality gate pipelines for AI agent outputs.
5. **Document workflow enhancements**: Duplicate skill issues ([#189](https://github.com/anthropics/skills/issues/189), 9 👍) and high engagement with docx/pdf fix PRs show demand for more robust, non-duplicative document processing skills.

---

## 3. High-Potential Pending Skills
These actively maintained open PRs are likely to land soon based on recency, scope clarity, and alignment with reported issues:
- **DOCX comment orphan detection** — [PR #1734](https://github.com/anthropics/skills/pull/1734): Adds detection of orphaned Word document comments, complementing existing DOCX skill fixes.
- **SCNet HPC cluster operation skill** — [PR #1615](https://github.com/anthropics/skills/issues/1615): Profile-based SSH/Slurm workflow skill for high-performance computing cluster management, a new enterprise niche.
- **ODT document skill** — [PR #486](https://github.com/anthropics/skills/pull/486): OpenDocument format creation, template filling, and ODT-to-HTML conversion, filling a gap in open-standard document support.
- **Document typography quality control** — [PR #514](https://github.com/anthropics/skills/pull/514): Prevents common AI-generated document issues (orphan words, widow headers, numbering misalignment) for all Claude output.
- **mcp-builder model update** — [PR #1724](https://github.com/anthropics/skills/pull/1724): Updates default evaluation model to `claude-sonnet-5`, a low-risk maintenance update aligned with latest model releases.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **improved reliability and trust in the skill development toolchain**—from fixed trigger evaluation harnesses and MCP compatibility to verified skill provenance and safety guardrails—paired with expanded enterprise-grade skills for collaboration, governance, and specialized document/development workflows.

---

# Claude Code Community Digest | 2026-09-21
Data source: [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Last 7 Days' Highlights
This week saw 8 consecutive Claude Code releases (v2.1.271–v2.1.278) focused on auto mode cost optimization, AGENTS.md support, gateway observability, and reliability fixes. The community surfaced high-priority bugs in Cowork workflows, auto mode permission regressions, and Chrome extension safety restrictions, while diff module refinements and plugin stability fixes dominated pull request activity.

---

## 2. Releases
8 versions shipped in the past 7 days, with key changes:
- **v2.1.278**: Defaulted auto mode to server-side classifier (no classifier overhead charges) for Claude API, Enterprise, Bedrock, Vertex, Foundry, and gateway users; set `CLAUDE_CODE_AUTO_MODE_SERVER=0` to opt out on supported platforms.
- **v2.1.277**: Added AGENTS.md fallback (read when no CLAUDE.md exists, configurable under "Project instructions" in `/config`; not yet available on Bedrock/Vertex/Foundry); added `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` for egress-restricted Claude app gateways.
- **v2.1.276**: Fixed v2.1.275 regression where all requests failed with `400 … Input tag 'advisor_20260301'` when `ANTHROPIC_BASE_URL` pointed to a proxy/gateway.
- **v2.1.275**: Added signed-in account confirmation for Claude apps gateway sign-in (visible in `/status`); added send-now shortcut (Ctrl+Enter / Ctrl+X Ctrl+S) to interrupt the current turn and send queued messages.
- **v2.1.274**: Added critical memory usage warnings with safe recovery steps; added `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` to bound MCP server connection wait time for non-interactive turns; added `effort` attribute to core tooling.
- **v2.1.273**: Added 5 new gateway hint request headers (`x-claude-code-request-class`, `x-claude-code-agent-type`, etc.) for LLM gateways (opt in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`); added new session notification.
- **v2.1.272**: General bug fixes and reliability improvements.
- **v2.1.271**: Added fast mode support for Claude Code Remote sessions (cloud/self-hosted runners, subject to org policy); added mouse wheel scrolling for the `/config` panel in fullscreen mode.

---

## 3. Hot Issues
1. **#76694 [BUG] Cowork: new projects lost "Choose a folder"**  
   After the Chat/Cowork merge, the context menu was replaced with a chat-style upload-only knowledge menu, breaking folder selection for new Cowork projects. Affects Windows and macOS. 30 comments, 26 👍 — the highest-engagement open issue this week.  
   [View issue](https://github.com/anthropics/claude-code/issues/76694)

2. **#22992 [ENHANCEMENT] Support device-code auth (RFC 8628) for headless environments**  
   Pro/Max users in headless setups lack a usable auth flow, as standard OAuth requires a browser. 19 comments, 36 👍 — the most-upvoted feature request in the active list, updated this week after months of community traction.  
   [View issue](https://github.com/anthropics/claude-code/issues/22992)

3. **#95326 [BUG] Claude in Chrome: all tools blocked on reddit.com/redd.it**  
   Starting 2026-09-18, the Chrome extension blocks all tools on Reddit with "not allowed due to safety restrictions," despite working previously. 7 comments, 5 👍 — rapidly growing report from the past 3 days.  
   [View issue](https://github.com/anthropics/claude-code/issues/95326)

4. **#95200 [BUG] Auto mode regression since 2.1.270: overblocking for solo owners**  
   A solo game developer reports 12× more auto mode denials for routine release work on their own repos, with manual fallback requiring 55+ permission clicks for a simple config change. 3 comments — high-impact regression for power users.  
   [View issue](https://github.com/anthropics/claude-code/issues/95200)

5. **#60955 [DOCS] Undocumented "Classify session states" privacy/cost impact**  
   The "Classify session states" toggle in settings lacks documentation on its privacy implications and associated costs. 2 comments, 22 👍 — significant community concern about opaque billing/privacy features.  
   [View issue](https://github.com/anthropics/claude-code/issues/60955)

6. **#84698 [BUG] Desktop: unrequested background `git fetch` on diff/commit refresh**  
   The desktop app runs untraceable background `git fetch` calls to origin with no disable setting, raising concerns for restricted networks and performance. 6 comments, 3 👍.  
   [View issue](https://github.com/anthropics/claude-code/issues/84698)

7. **#90603 [BUG] Inconsistent British English spellings in en-US projects**  
   Claude unprompted uses en-GB spellings (e.g., "colour," "prioritise") in code for en-US locale projects, reproducing across accounts. 2 comments, tied to a related feature request (#91679).  
   [View issue](https://github.com/anthropics/claude-code/issues/90603)

8. **#67766 [CLOSED] Intermittent "socket connection closed unexpectedly" errors**  
   Heavy interactive users saw 8–18 daily mid-stream socket disconnections (server-initiated FIN), with packet captures and request IDs provided. Closed as stale this week after 8 comments — still a pain point for power users.  
   [View issue](https://github.com/anthropics/claude-code/issues/67766)

9. **#95425 [BUG] `/login` reports success but token not saved (stale lock file)**  
   On macOS v2.1.277, a stale `.storage-write.lock` file causes login to report success while failing to save the token (ENOTDIR rmdir error). 1 comment — critical auth regression from the latest release.  
   [View issue](https://github.com/anthropics/claude-code/issues/95425)

10. **#95576 [BUG] Cloud session `git push` of tags fails with 403**  
    Claude Code cloud sessions return 403 when pushing git tags, even with full GitHub App permissions and no repo protections. 1 comment — blocks CI/release workflows in cloud environments.  
    [View issue](https://github.com/anthropics/claude-code/issues/95576)

---

## 4. Key PR Progress
1. **#95698 [OPEN] fix(plugins): run ralph-wiggum and output-style .sh hooks via bash with quoted paths**  
   Fixes broken hook execution for 3 bundled plugins (ralph-wiggum, output-style) that registered bare unquoted script paths, failing on paths with spaces. Addresses half of issue #78490.  
   [View PR](https://github.com/anthropics/claude-code/pull/95698)

2. **#94847 [OPEN] diff: first edit opens pane only when it has a file to list**  
   Fixes the diff pane opening empty ("No tracked changes") for writes outside the repo, to ignored files, or to other worktrees, by checking for valid tracked changes before auto-opening.  
   [View PR](https://github.com/anthropics/claude-code/pull/94847)

3. **#87077 [OPEN] fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents**  
   Fixes agent descriptions with unquoted dialogue lines that parsed as nested YAML mappings, causing agents to load with empty frontmatter (no name/description/model).  
   [View PR](https://github.com/anthropics/claude-code/pull/87077)

4. **#87079 [OPEN] fix(security-guidance): make ** glob patterns match zero-depth paths**  
   Fixes a security rule gap where `**/*.ts` patterns excluded top-level files, despite documentation promising `**` matches any depth — silent non-coverage risk for security scans.  
   [View PR](https://github.com/anthropics/claude-code/pull/87079)

5. **#71627 [OPEN] docs(sandbox): note prompt-approved hosts are session-scoped**  
   Adds documentation clarifying that sandbox network domains approved at prompt time are not persisted across sessions, unlike config-defined allowed domains.  
   [View PR](https://github.com/anthropics/claude-code/pull/71627)

6. **#95423 [OPEN] diff: skip refetch for read-only shell commands**  
   Prevents the diff pane from refetching after read-only shell calls (ls, git status, cat, grep), matching built-in panel behavior and reducing unnecessary git operations.  
   [View PR](https://github.com/anthropics/claude-code/pull/95423)

7. **#95618 [CLOSED] telemetry: complete rows gathered through $, sent in batches, for built-in plugins only**  
   Adds telemetry module support for built-in plugins, with batch sending and explicit exclusion of user/admin-installed plugins to preserve privacy.  
   [View PR](https://github.com/anthropics/claude-code/pull/95618)

8. **#95409 [CLOSED] mods/agents-md: the AGENTS.md project-instructions mod**  
   Adds the official `agents-md` mod source, which reads AGENTS.md as project instructions the same way the engine reads CLAUDE.md, aligning with v2.1.277’s release feature.  
   [View PR](https://github.com/anthropics/claude-code/pull/95409)

9. **#51452 [CLOSED] Update README.md**  
   Rewrites the README for clarity, removes AI-style filler language, tightens section headers, simplifies installation instructions, and fixes a broken npm badge.  
   [View PR](https://github.com/anthropics/claude-code/pull/51452)

10. **#95488 [CLOSED] diff: docked pane reads repo before opening, no "Loading diff" state**  
    Eliminates the empty "Loading diff…" state for docked diff panes by pre-fetching repository data before the pane opens, matching built-in panel behavior.  
    [View PR](https://github.com/anthropics/claude-code/pull/95488)

---

## 5. Hot Discussions
No discussion thread data was provided for this period.

---

## 6. Feature Request Trends
1. **Headless/CLI auth improvements**: Device-code OAuth flow (RFC 8628) is the most upvoted request, critical for server/CI users.
2. **Locale-aware output defaults**: Requests for locale-matched spelling (e.g., en-US for US users) to avoid inconsistent British English in code and documentation.
3. **Transcript tooling**: Demand for an official read-only session transcript viewer, instead of requiring `--resume` to revisit past sessions.
4. **VS Code extension parity**: Requests for the extension to match CLI features like ghost-text next-prompt suggestions.
5. **Sandbox transparency**: Clarification and configuration controls for sandbox network permission scoping and persistence.
6. **Privacy guardrails**: Proactive warnings for diagnostic outputs that may contain sensitive identifying information (IPs, hostnames, MAC addresses).

---

## 7. Developer Pain Points
1. **Auto mode overblocking regressions**: Recent auto mode changes are blocking routine, authorized work for solo owners, with manual mode requiring excessive permission clicks for simple tasks.
2. **Cowork workflow breakage**: The Chat/Cowork merge removed core folder selection functionality, breaking new project setup for collaborative use cases.
3. **Opaque background operations**: Unconfigurable background `git fetch` calls in the desktop app raise performance and network restriction concerns, with no user control or visibility.
4. **Undocumented features impacting cost/privacy**: Settings like "Classify session states" lack clear documentation on billing implications and data usage, eroding user trust.
5. **Platform-specific release regressions**: Recent versions introduced auth lock file bugs (macOS), Windows always-on-top window issues, and iOS Simulator tool breakage after Xcode upgrades.
6. **Chrome extension safety false positives**: Sudden blanket tool blocks on popular sites like Reddit disrupt browser automation workflows with no clear resolution path.
7. **Cloud session permission gaps**: Git tag push failures in cloud sessions, despite correct GitHub App permissions, block release and CI workflows in hosted environments.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-09-21

---

## 1. Last 7 Days' Highlights
This week saw rapid iteration on the Rust-based Codex runtime with 10 alpha releases of v0.156.0 plus a stable v0.155.1 patch fixing a critical provider compatibility bug. The community rallied around long-requested quality-of-life features like LSP integration and remote control, while rate-limit inconsistencies and Windows desktop reliability dominated bug reports. The development team shipped a wave of TUI and usage-dashboard improvements aimed at transparency and usability.

---

## 2. Releases
- **rust-v0.155.1 (stable)**  
  Fixed an issue where new local TUI sessions enabled reasoning summaries by default, causing request rejections from providers that don’t support the feature. Explicit user settings are still respected.  
  [#46467](https://github.com/openai/codex/issues/46467) | [Release notes](https://github.com/openai/codex/compare/rust-v0.155.0...rust-v0.155.1)
- **rust-v0.156.0-alpha.6 through alpha.12 (7 releases)**  
  Rapid pre-release builds with incremental changes; full changelogs not yet published. Track the [v0.156.0 milestone](https://github.com/openai/codex/milestone/v0.156.0) for details.

---

## 3. Hot Issues
1. **#8745 – LSP integration (auto-detect + auto-install) for Codex CLI** [enhancement, agent]  
   The top community request (496 👍, 66 comments) asks for built-in Language Server Protocol support so Codex can use diagnostics and symbol intelligence to generate higher-quality code.  
   [openai/codex#8745](https://github.com/openai/codex/issues/8745)

2. **#42987 – GPT-6 Astra Medium depleted 100% of Plus 5-hour quota in two short turns** [bug, windows, rate-limits]  
   Plus subscribers report catastrophic quota burn on Windows, with two minutes of usage emptying a 5-hour window—eroding trust in the billing model.  
   [openai/codex#42987](https://github.com/openai/codex/issues/42987)

3. **#45835 – Codex App repeatedly shows “Selected model is at capacity” despite healthy connectivity** [bug, rate-limits, app]  
   Pro Lite users on Windows see false capacity errors, preventing workflow continuity even when the service is operational.  
   [openai/codex#45835](https://github.com/openai/codex/issues/45835)

4. **#45307 – Windows Codex Desktop: Send button becomes disabled after the first successful turn** [bug, windows, app]  
   A critical UI regression leaves users unable to send follow-up messages after the first exchange in a conversation.  
   [openai/codex#45307](https://github.com/openai/codex/issues/45307)

5. **#41849 – VS Code Remote-SSH: stale app-server blocks new sessions with “This is open in another app”** [bug, extension, remote]  
   Disconnects leave orphaned app-server processes holding locks, forcing users to manually kill processes before resuming work.  
   [openai/codex#41849](https://github.com/openai/codex/issues/41849)

6. **#28340 – Codex mobile intermittently fails to open running task conversations** [bug, iOS, session]  
   iOS users can’t reliably access active desktop tasks from mobile, breaking the cross-device workflow promise.  
   [openai/codex#28340](https://github.com/openai/codex/issues/28340)

7. **#34458 – Windows Desktop + WSL agent: Browser, Chrome control, and Computer Use all fail** [bug, mcp, computer-use]  
   WSL-integrated agents can’t access browser or system control tools through the shared bridge, crippling agent workflows on Windows.  
   [openai/codex#33458](https://github.com/openai/codex/issues/34458)

8. **#46819 – Codex Security scan exhausted weekly allowance in ~44 minutes via subagent fan-out** [bug, rate-limits, subagent]  
   A single security scan spawned enough worker subagents to drain a full Pro weekly quota, raising questions about subagent cost controls.  
   [openai/codex#46819](https://github.com/openai/codex/issues/46819)

9. **#36868 – Codex Desktop: Computer Use duplicates physical keyboard and paste events on macOS** [bug, app, computer-use]  
   Agent-initiated keystrokes fire twice, causing corrupted input and dangerous behavior in system-wide automation.  
   [openai/codex#36868](https://github.com/openai/codex/issues/36868)

10. **#46914 – `forced_login_method = "chatgpt"` in config.toml is not respected** [bug, auth, CLI]  
    A configuration regression forces users to pass `-c` on the command line instead of relying on their saved config.  
    [openai/codex#46914](https://github.com/openai/codex/issues/46914)

---

## 4. Key PR Progress
All PRs listed are closed/merged and authored by the `copyberry[bot]` release pipeline:

1. **#46912 – Keep quota warnings visible in the TUI**  
   Shows the most constrained quota window directly in the composer hint row, giving users constant visibility into remaining usage.  
   [openai/codex#46912](https://github.com/openai/codex/pull/46912)

2. **#46910 – Preserve transcript position when opening settings pickers**  
   Prevents the transcript from jumping to the bottom when users open model/theme pickers, preserving reading context.  
   [openai/codex#46910](https://github.com/openai/codex/pull/46910)

3. **#46905 – Identify local background servers in `/status`**  
   Renames the “Remote” connection label to “Server” and clearly shows when a local background daemon is in use vs. a remote socket.  
   [openai/codex#46905](https://github.com/openai/codex/pull/46905)

4. **#46895 – Add right-click copying for transcript and composer selections**  
   Enables standard right-click copy behavior in the TUI, matching expected desktop interaction patterns.  
   [openai/codex#46895](https://github.com/openai/codex/pull/46895)

5. **#46883 – Add `/tui` command to choose terminal UI mode for next launch**  
   Lets users toggle between Scrollback and Fullscreen modes via a picker, with settings persisted to user config.  
   [openai/codex#46883](https://github.com/openai/codex/pull/46883)

6. **#46882 – Streamline agent command-center shortcuts and layout**  
   Reorganizes shortcut help into logical groups (Navigate, Tasks, View) and improves footer hints for discoverability.  
   [openai/codex#46882](https://github.com/openai/codex/pull/46882)

7. **#46877 – Allow subagents to request MCP elicitation input**  
   Removes the root-agent-only restriction on MCP user input requests, enabling subagents to handle browser sign-ins, form fills, and interactive approvals.  
   [openai/codex#46877](https://github.com/openai/codex/pull/46877)

8. **#46867 – Preserve streamed answers when subagents finish**  
   Defers subagent activity rendering until the parent answer stream completes, preventing mid-stream UI jumps.  
   [openai/codex#46867](https://github.com/openai/codex/pull/46867)

9. **#46866 – Enable mouse navigation in the TUI usage view**  
   Adds clickable tabs, report controls, and mouse-wheel scrolling to the usage overlay for more intuitive interaction.  
   [openai/codex#46866](https://github.com/openai/codex/pull/46866)

10. **#46864 – Improve usage report layouts and preserve reading positions**  
    Fixes scroll-position resets when switching reports and optimizes layout for small and large terminals alike.  
    [openai/codex#46864](https://github.com/openai/codex/pull/46864)

---

## 5. Hot Discussions

### Ideas
1. **#9200 – Add the ability to remote control codex from ChatGPT app** (50 comments, 191 👍)  
   The #1 community idea: headless/daemon mode for desktop Codex controlled from the mobile ChatGPT app, eliminating the need for VPN+SSH workarounds.  
   [openai/codex#9200](https://github.com/openai/codex/discussions/9200)

2. **#9618 – How is there not a /rewind or /revert feature?** (25 comments, 141 👍)  
   Users demand native undo for agent changes, comparing unfavorably to OpenCode and Claude Code. Without it, many feel forced to commit after every edit.  
   [openai/codex#9618](https://github.com/openai/codex/discussions/9618)

3. **#14595 – Remote control wen?** (6 comments, 18 👍)  
   Follow-up thread asking for a remote control roadmap, noting that third-party workarounds are unreliable.  
   [openai/codex#14595](https://github.com/openai/codex/discussions/14595)

4. **#25630 – Switch Between Accounts** (6 comments, 8 👍)  
   Simple quality-of-life request: a one-click account switcher instead of full sign-out/sign-in flows.  
   [openai/codex#25630](https://github.com/openai/codex/discussions/25630)

### Q&A
1. **#2503 – How to scroll through the conversation history?** (10 comments, 36 👍)  
   A persistent FAQ: new CLI users struggle to find keyboard shortcuts for scrolling long transcripts.  
   [openai/codex#2503](https://github.com/openai/codex/discussions/2503)

2. **#5111 – About the timeline for accepting community pull requests** (1 comment, 3 👍)  
   A contributor with a merged non-English backspace bug fix asks when community PRs will get faster review cycles.  
   [openai/codex#5111](https://github.com/openai/codex/discussions/5111)

3. **#45938 – PreToolUse can block or rewrite a call, but cannot substitute a tool result — deliberate?** (2 comments, 1 👍)  
   Deep dive into hook-system boundaries from a developer building an “Experience” layer on top of Codex.  
   [openai/codex#45938](https://github.com/openai/codex/discussions/45938)

### Show and tell
1. **#16329 – Awesome Codex CLI — curated list of 150+ ecosystem tools** (8 comments, 1 👍)  
   A community-maintained index of subagents, skills, plugins, MCP servers, and more to address ecosystem discoverability.  
   [openai/codex#16329](https://github.com/openai/codex/discussions/16329)

2. **#46774 – Search old Codex sessions by a word you remember** (1 comment, 1 👍)  
   A cross-agent session search tool that works across Codex and other coding-agent histories.  
   [openai/codex#46774](https://github.com/openai/codex/discussions/46774)

3. **#46874 – Agent Lint: open-source linter for Codex, AGENTS.md, MCP, Claude Code, and Cursor config** (0 comments, 1 👍)  
   A universal config validator for coding-agent setup files across multiple platforms.  
   [openai/codex#46874](https://github.com/openai/codex/discussions/46874)

---

## 6. Feature Request Trends
1. **Remote/headless control** – The single most requested direction: daemon mode + mobile app control, with 2+ active idea threads and hundreds of upvotes.
2. **Native undo/rewind** – Users want first-class revert support for agent edits without manual git workflows.
3. **LSP integration** – Built-in language server support to improve code quality through diagnostics and symbol intelligence.
4. **Quota transparency & control** – Better visibility, granular limits, and subagent cost guardrails to prevent surprise burn-down.
5. **Account switching** – Simple multi-account management for users with multiple subscriptions.

---

## 7. Developer Pain Points
1. **Rate-limit unpredictability** – Widespread reports of quota exhaustion in minutes, false “at capacity” errors, and mismatches between usage dashboards and actual limits.
2. **Windows desktop instability** – Disabled send buttons, stuck messages, update checksum failures, WSL bridge failures, and sandbox configuration errors plague the Windows platform.
3. **Session & lock management** – Stale app-server processes (especially in Remote-SSH) block new sessions with opaque “open in another app” errors.
4. **Subagent cost opacity** – Security scans and fan-out workloads drain quotas without user-configurable guardrails or pre-execution estimates.
5. **Cross-device sync gaps** – Mobile clients can’t reliably access running desktop tasks, and project chats intermittently disappear on desktop.
6. **Computer Use reliability** – Duplicate input events on macOS, empty app inventories on Windows, and missing Intel Mac support limit automation trust.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-09-21
Data source: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Last 7 Days' Highlights
This week, the Gemini CLI team delivered stability and security fixes across nightly builds for the upcoming v0.62.0 release, including core PTY lifecycle hardening, OAuth credential persistence improvements, and UI rendering safeguards. The community focused heavily on agent reliability, with top discussions around subagent hang bugs, Auto Memory system flaws, and the need for safer default model behavior. Active PR work targets enterprise quota visibility, Windows/process management edge cases, and extension ecosystem robustness.

---

## 2. Releases
### Active Release Trains (Last 7 Days)
- **v0.62.0-nightly (ongoing)** — Daily builds advancing the next minor preview, with fixes merged across core, UI, and auth modules:
  - Fixed ConPTY process exit lifecycle synchronization and hardened PTY output finalization ([changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df))
  - Retained OAuth refresh tokens on refresh and made credential deletion idempotent ([#29339](https://github.com/google-gemini/gemini-cli/pull/29339))
  - Guarded against negative layout dimensions in border rendering to prevent UI crashes
  - Fixed `AgentLoopContext` property preservation across object spreads ([#29335](https://github.com/google-gemini/gemini-cli/pull/29335))
  - Added early return on unsupported store in A2A server tasks metadata endpoint
- **v0.61.0-preview.0** — New preview milestone cut, building on the v0.60.0 stable base with iterative agent and platform improvements ([release page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0))
- **v0.60.0 (stable)** — Recent stable release with improved web fetch destination validation and RFC 9207-compliant MCP OAuth issuer identification

---

## 3. Hot Issues
| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|--------------------|
| [#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | `codebase_investigator` subagent returns `status: "success"` with `Termination Reason: "GOAL"` even when it hits the maximum turn limit without completing analysis. | High-severity correctness bug: misleads users into thinking work is done, hiding task interruption. Marked P1 and needs retesting. | 13 comments, 2 👍 — longest-running active agent bug discussion this week. |
| [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks like folder creation; disabling subagent delegation resolves the issue. | Top user-upvoted P1 bug; breaks core agent usability for basic workflows. | 8 comments, 8 👍 — highest engagement by reaction count. |
| [#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | Proposal to leverage Gemini 3's native bash tool affinity by adding secure POSIX sandboxing, letting the model chain `grep`/`sed`/`awk` safely. | Large-effort enhancement that could unlock major productivity gains for codebase workflows while keeping security boundaries intact. | 9 comments, 1 👍 — deep architectural discussion. |
| [#22745 Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic tracking investigation into AST-aware tools to reduce token noise, improve read precision, and speed up codebase navigation. | Strategic quality improvement targeting the high cost of large-context code operations. | 7 comments, 1 👍 — cross-team planning item. |
| [#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Anecdotal report that the model never invokes custom skills/sub-agents autonomously, even for highly relevant tasks (e.g., `gradle`/`git` skills). | Usability gap: custom skill investment is wasted if the model won't use them without explicit prompting. | 6 comments, 0 👍 — representative user pain point. |
| [#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory sends transcript content to the extraction model *before* secret redaction, creating a potential data leak path. | P2 security concern affecting the new Auto Memory feature's trustworthiness. | 5 comments, 0 👍 — active security triage. |
| [#21983 browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Linux Wayland sessions but reports `GOAL` termination incorrectly. | P1 platform compatibility bug; blocks a key agent feature for Linux desktop users. | 4 comments, 1 👍 — recurring platform edge case. |
| [#22232 Enhance browser_agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232) | `browser_agent` fails fast on locked persistent browser profiles instead of recovering or taking over the existing session. | Quality-of-life improvement for heavy browser agent users with persistent sessions. | 4 comments, 0 👍 — frequent customer request. |
| [#20079 Symlinked agent files are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) | Agent definition files in `~/.gemini/agents/` are ignored if they are symlinks, breaking dotfile management workflows. | Small but impactful bug for users who sync configs across machines. | 4 comments, 0 👍 — long-standing papercut. |
| [#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | Model sometimes uses destructive commands (`git reset --force`, unsafe DB operations) when safer alternatives exist. | Safety guardrail request; reduces risk of irreversible user data loss during automated tasks. | 3 comments, 1 👍 — high user concern per engagement ratio. |

---

## 4. Key PR Progress
| PR | Type | Description |
|----|------|-------------|
| [#29432 fix(core): settle queued tool calls on scheduler disposal](https://github.com/google-gemini/gemini-cli/pull/29432) | Bug fix | Rejects pending tool call batches when the agent scheduler is disposed, preventing stuck promises and post-shutdown execution of queued work. |
| [#29429 fix(quota): surface server-reported limit and reset window](https://github.com/google-gemini/gemini-cli/pull/29429) | Enterprise feature | Parses `quotaResetTimeStamp`, `quotaResetDelay`, and `uiMessage` from Cloud Code API `RESOURCE_EXHAUSTED` errors, so users see exactly which quota was hit and when it resets. Fixes #29425. |
| [#29427 fix: forward signals from parent to child process to prevent orphans](https://github.com/google-gemini/gemini-cli/pull/29427) | Bug fix (merged) | Forwards `SIGTERM`/`SIGHUP` signals from the bootstrap/relaunch parent process to child processes, eliminating orphaned background processes on exit. Fixes #25590. |
| [#29426 fix(platform): detect legacy CPU incompatibility before Antigravity migration](https://github.com/google-gemini/gemini-cli/pull/29426) | Platform fix (merged) | Checks for AVX/AVX2 CPU support before prompting users to install the Go-based Antigravity binary, preventing immediate `SIGILL` crashes on legacy hardware (AMD Llano, Intel Core 2 Duo). |
| [#29404 feat(cli): add 'gemini models list' with JSON output](https://github.com/google-gemini/gemini-cli/pull/29404) | New feature | Adds a non-interactive `gemini models list -o json` command for scriptable model discovery, so integrations don't need to hardcode model IDs. |
| [#29387 fix(cli): don't let one malformed extension fail all loading](https://github.com/google-gemini/gemini-cli/pull/29387) | Extension robustness | Moves extension security validation inside the existing try/catch degrade path, so a single broken extension directory only logs a warning instead of breaking all extension loading. |
| [#29375 fix(cli): decode DevTools HTTP chunks with stateful decoder](https://github.com/google-gemini/gemini-cli/pull/29375) | Bug fix | Replaces per-chunk UTF-8 decoding in DevTools activity logging with a stateful `TextDecoder`, fixing garbled multi-byte characters split across HTTP chunk boundaries. |
| [#29282 fix(auth): persist oauth credentials after login](https://github.com/google-gemini/gemini-cli/pull/29282) | Auth fix | Persists OAuth tokens immediately after successful browser/user-code login, so users aren't prompted to re-authenticate on the next run. |
| [#28183 fix(vscode-ide-companion): preserve terminal focus when closing diff tabs](https://github.com/google-gemini/gemini-cli/pull/28183) | UX fix | Keeps keyboard focus in the VS Code integrated terminal after approving an edit, instead of stealing focus to the closed diff tab. Ready for community review. |
| [#26686 feat(cli): support git submodules in extension installs](https://github.com/google-gemini/gemini-cli/pull/26686) | Extension feature | Initializes Git submodules during `gemini extensions install`, fixing broken installs for extensions that ship submodule dependencies. Help wanted. |

---

## 5. Hot Discussions
*Omitted — no GitHub Discussions data was provided in the dataset.*

---

## 6. Feature Request Trends
From aggregated issue and enhancement requests, the community is pushing for three main investment areas:
1. **Agent autonomy and intelligence**: Better automatic use of custom skills/sub-agents, AST-aware code reading to reduce token waste, and "tactful extraction" hierarchies for surgical file access ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
2. **Persistent, reliable state**: File-based task tracking to replace in-context TODO lists, session-resilient `/compress` history, and persistent per-workspace policies ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21335](https://github.com/google-gemini/gemini-cli/issues/21335), [#18397](https://github.com/google-gemini/gemini-cli/issues/18397)).
3. **Secure sandboxed execution**: Native POSIX tool execution with zero-dependency sandboxing, plus guardrails against destructive shell/git operations ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

---

## 7. Developer Pain Points
1. **Agent reliability gaps**: Hangs in the generalist agent, false success reports on MAX_TURNS, and browser agent failures on Wayland are the top P1 bugs eroding trust in agent workflows ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
2. **Auto Memory quality issues**: Indefinite retries of low-signal sessions, silent failure of invalid memory patches, and missing pre-redaction of secrets create both performance and security concerns ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
3. **Extension ecosystem fragility**: Malformed extensions break all loading, Git submodule installs fail, and extension settings are undocumented, raising friction for third-party developers ([#29387](https://github.com/google-gemini/gemini-cli/pull/29387), [#26686](https://github.com/google-gemini/gemini-cli/pull/26686), [#29374](https://github.com/google-gemini/gemini-cli/pull/29374)).
4. **Terminal and cross-platform edge cases**: Flicker on resize, Windows IDE detection running Unix commands, surrogate pair splitting during truncation, and orphaned child processes are recurring platform-level papercuts ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#29376](https://github.com/google-gemini/gemini-cli/pull/29376), [#29304](https://github.com/google-gemini/gemini-cli/pull/29304), [#29427](https://github.com/google-gemini/gemini-cli/pull/29427)).
5. **Tool count scaling**: Users with >128 tools hit 400 errors, with no built-in tool scoping logic to manage large tool sets ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-09-21

---

## 1. Last 7 Days' Highlights
This week, the Copilot CLI team shipped 10 releases (from v1.0.84-6 through v1.0.87-0) headlined by Vim mode for all users, custom agent support for repository instruction files, improved session resume reliability, and new Auto routing tier policy controls. Community-reported issues focused heavily on MCP server stability, session memory leaks, and configuration edge cases, with 21 of 30 tracked issues closed in the 7-day window.

---

## 2. Releases
| Version | Release Type | Key Changes |
|---------|--------------|-------------|
| **v1.0.87-0** | Pre-release | - Added user/managed startup defaults for the Auto routing tier, including strict and user-overridable organization policy<br>- Consecutive steering prompts in the same mode now combine into one pending message; press **Up** in an empty chat input to edit the combined prompt (including pasted text) |
| **v1.0.86** | Stable (2026-09-17) | - Custom agents can opt into repository instruction files (`AGENTS.md`, `copilot-instructions.md`, `CLAUDE.md`) via `include-custom-instructions: true` in frontmatter<br>- Resuming an active session preserves market configuration when no `plugin-directory`, `discovery`, or `working-directory` overrides are set |
| **v1.0.86-2** | Patch | Fixes and stability changes |
| **v1.0.86-1** | Patch | Backported custom agent instruction file support and session resume market preservation |
| **v1.0.86-0** | Pre-release | - Fixed session resume to work with recoverably corrupted transcript files<br>- Fixed dimmed reasoning text in the compact timeline (now fully readable)<br>- Fixed Autopilot continuing unexpectedly after accepted task completion |
| **v1.0.85** | Stable (2026-09-16) | - Vim mode is generally available; enable with `/vim` or `editorMode: "vim"`, with mode indicator while typing<br>- Added `/settings` options to opt into agent/subagent context management tools<br>- Added `transcriptView` configuration option |
| **v1.0.84-9** | Patch | - Added `/settings` context management opt-in (backported)<br>- Reduced metadata scanning time for large local session histories (with increased thread/memory usage)<br>- Fixed `End`/`Ctrl+E` to move to the true end of wrapped lines |
| **v1.0.84-8** | Patch | - Added `transcriptView: "concise"` to group tool activity into expandable work summaries<br>- Added pause/resume for Agent Factory runs via `/factories`<br>- Fixed model list refresh after sign-in/account switch/sign-out |
| **v1.0.84-7** | Patch | - Fixed thinking shape for adaptive-only Claude models (no longer fail when thinking is off; reasoning effort capped at high)<br>- Fixed `sessionEnd` hooks to fire on `/clear` |
| **v1.0.84-6** | Patch | - Added `/config` sidebar configuration screen<br>- Added `/sandbox` network host allow/deny rules independent of upstream proxy<br>- Extended managed Edit/Write rules to native shell redirections and supported in-place `sed` operations |

---

## 3. Hot Issues
The following 10 issues stand out for their community engagement, impact, or resolution status:

1.  **#4870 — MCP: Figma remote server (mcp.figma.com) fails to load — `-32601` on `server/discover` treated as fatal (works in VS Code)**
    [github/copilot-cli#4870](https://github.com/github/copilot-cli/issues/4870)
    *Why it matters:* Highlights a compatibility gap between CLI and VS Code MCP implementations for official third-party MCP servers. Closed after 8 comments and 11 👍 — the highest engagement of the week.

2.  **#4699 — OOM crash (`JavaScript heap out of memory`) on long `--resume` sessions; crash dumps written into the user's cwd**
    [github/copilot-cli#4699](https://github.com/github/copilot-cli/issues/4699)
    *Why it matters:* Critical reliability issue for power users running long-horizon agent sessions. Open, with 5 comments and 6 👍; affects users running 10+ hour resumed sessions hitting the 4 GiB V8 heap cap.

3.  **#4069 — TUI wedges mid-turn (screen clears, input dead, Ctrl+C/Ctrl+\ ignored) — WSL2 + Windows Terminal**
    [github/copilot-cli#4069](https://github.com/github/copilot-cli/issues/4069)
    *Why it matters:* Severe terminal unresponsiveness bug on a widely used platform combo (WSL2/Windows Terminal). Closed after 8 comments and 9 👍, following investigation into EIO/EPIPE transport errors.

4.  **#4765 — copilot cli fails to read config from working directory which isn't a repo root**
    [github/copilot-cli#4765](https://github.com/github/copilot-cli/issues/4765)
    *Why it matters:* Blocks users with workspace layouts containing multiple repos under a non-git parent directory from loading `.mcp.json` or hook files. Closed with 8 comments.

5.  **#3762 — config option contextTier does nothing**
    [github/copilot-cli#3762](https://github.com/github/copilot-cli/issues/3762)
    *Why it matters:* Configuration transparency issue — a documented setting had no effect unless the user manually selected a long-context model first. Closed after 7 comments.

6.  **#1675 — Checkpoint restore (git clean -fd) permanently deletes all untracked files**
    [github/copilot-cli#1675](https://github.com/github/copilot-cli/issues/1675)
    *Why it matters:* Data-loss risk bug where checkpoint rollback runs `git clean -fd` on the repo root, deleting untracked user files. Closed after 5 comments.

7.  **#4224 — OTel spans for subagent calls omit billing attributes, so external cost accounting undercounts actual billing**
    [github/copilot-cli#4224](https://github.com/github/copilot-cli/issues/4224)
    *Why it matters:* Impacts enterprise teams using OpenTelemetry for cost observability — subagent usage was invisible to external billing trackers. Closed with 5 comments and 1 👍.

8.  **#4905 — Desktop app: sessions die minutes after spawn — "GitHub credential registration is no longer available for this session"**
    [github/copilot-cli#4905](https://github.com/github/copilot-cli/issues/4905)
    *Why it matters:* Affects desktop app users relying on bundled CLI in server mode, with stale github-mcp-server catalog state causing fatal errors. Open, with 4 comments and 2 👍.

9.  **#4910 — Non-interactive MCP tool call hangs after progress notification until idle timeout**
    [github/copilot-cli#4910](https://github.com/github/copilot-cli/issues/4910)
    *Why it matters:* Blocks CI/automation use cases where non-interactive CLI calls to Azure MCP tools hang for 5 minutes. Open, with 3 comments.

10. **#4807 — Idle Copilot CLI enters `FileWatch` event storm, consumes two CPU cores, and writes a 33+ GB log**
    [github/copilot-cli#4807](https://github.com/github/copilot-cli/issues/4807)
    *Why it matters:* Severe resource leak bug where an idle process can consume 200%+ CPU for days and fill disk space with debug logs. Open, with 2 comments.

---

## 4. Key PR Progress
No pull requests were updated in the `github/copilot-cli` repository in the last 7 days.

---

## 5. Hot Discussions
No discussion data was provided for this period; this section is omitted.

---

## 6. Feature Request Trends
From the week's issue set, three clear feature direction themes emerge:
1.  **Broader MCP ecosystem compatibility** — Repeated requests for parity with VS Code's MCP handling, support for more third-party MCP servers, and more robust transport error handling (e.g., #4870, #1886, #2892, #4731).
2.  **More flexible configuration & context control** — Demand for config discovery outside repo roots, working multi-hook `additionalContext` injection, granular context tier controls, and better handling of large instruction files (e.g., #4765, #3762, #3589, #3621).
3.  **Enhanced session & workflow ergonomics** — Requests for better prompt queuing/stashing, cross-git-host remote sessions, and more predictable checkpoint/restore behavior (e.g., #3692, #3034, #2922, #4673).

---

## 7. Developer Pain Points
The most common recurring frustrations reported this week:
- **MCP reliability gaps**: Frequent issues with server discovery, stdio transport timeouts, OAuth misconfiguration, and tool-list corruption after cancelled calls create friction for teams building MCP-based workflows.
- **Session stability on long runs**: OOM crashes on resumed sessions, file corruption in `events.jsonl`, idle file-watch event storms, and unexpected credential expiry disrupt long-running agent tasks.
- **Configuration opacity & edge cases**: Documented settings that have no effect, config files not picked up in non-repo directories, and Windows-specific path/editor launch failures create setup friction.
- **Data-loss & safety concerns**: Unsafe checkpoint restore that deletes untracked files, and auto-resume that re-runs aborted tasks, erode trust in automated agent operations.
- **Windows/WSL platform regressions**: Terminal hangs, stdio MCP launch failures with `.bat`/`.cmd`, and editor keybinding mismatches disproportionately affect Windows users.


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-09-21
---

## 1. Last 7 Days' Highlights
Over the past week, the OpenCode community has focused heavily on free-tier usage bugs, UI/UX regressions from the new V2 layout, and core performance issues including session bloat and service crashes. v1.18.31 shipped critical fixes for ACP session state restoration and TUI authentication error handling, while open PRs address top pain points like silent zero-output turns, slow `--version` startup, and missing OAuth connection visibility. Free-tier quota and retry logic complaints dominate issue threads, with 5+ related reports in the last 7 days.

---

## 2. Releases
### v1.18.31
- **Core Bugfix**: Restored ACP session model, effort, mode, and reasoning chunk boundaries when loading, resuming, or forking sessions (contributor: @JacobNWolf). [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.31)
- **TUI Bugfix**: Now surfaces remote config authentication errors during startup and exits with a failure status instead of failing silently.
- **Extensions**: Improvement section was truncated in source data; full details available in the release notes.

---

## 3. Hot Issues
1. **#49433 [OPEN] Error from provider (Console): OpenCode's free tier can only be used from within OpenCode**  
   48 comments · 12 👍  
   *Why it matters*: The top-commented open issue, reported on the latest pacman build, blocks free-tier users entirely even when running the official client. The community is actively troubleshooting root causes (env detection, auth token issues) with no official fix yet.  
   [Link](https://github.com/anomalyco/opencode/issues/49433)

2. **#29363 [OPEN] Bug: `limit.output` in config is silently capped at 32k; `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` is a poor workaround**  
   22 comments · 23 👍  
   *Why it matters*: A long-standing (since May 2026) pain point for power users of high-context models (DeepSeek, GPT-4o, Claude). The 32k silent cap breaks use cases like large codebase refactoring, and the experimental env var workaround is undocumented and unreliable.  
   [Link](https://github.com/anomalyco/opencode/issues/29363)

3. **#37546 [OPEN] Web: no way to revert the new layout, and the new layout is missing workspaces/worktrees**  
   8 comments · 26 👍  
   *Why it matters*: The highest-upvoted UI regression: V2 web layout removes workspace/git worktree support with no toggle to revert to the legacy UI. This breaks core workflows for teams that rely on worktree-based parallel development.  
   [Link](https://github.com/anomalyco/opencode/issues/37546)

4. **#10448 [OPEN] Feature Request: Add Zen balance API endpoint**  
   8 comments · 30 👍  
   *Why it matters*: The most-upvoted open feature request, active since January 2026. Users want programmatic access to Zen account balances for integration with status bars, automation, and quota tracking tools.  
   [Link](https://github.com/anomalyco/opencode/issues/10448)

5. **#49927 [OPEN] Getting Free Usage Exceeded On The First Session Of The Week**  
   12 comments · 0 👍  
   *Why it matters*: Part of a wave of free-tier quota bugs. Users report hitting "usage exceeded" immediately on their first session of the week, indicating a faulty quota tracking reset logic. Multiple similar reports have been filed in the same window.  
   [Link](https://github.com/anomalyco/opencode/issues/49927)

6. **#50093 [OPEN] Free usage exceeded and there's long retry timers keep escalating across different free models**  
   6 comments · 5 👍  
   *Why it matters*: Escalating retry timers (6h → longer) persist across different free models, trapping users in a penalty loop even when switching models. This amplifies frustration around free-tier reliability.  
   [Link](https://github.com/anomalyco/opencode/issues/50093)

7. **#33884 [OPEN] TUI plugins referenced by npm package spec silently fail to load in 1.17.10 (OpenTUI 0.4.2 dual-entry regression)**  
   8 comments · 1 👍  
   *Why it matters*: A critical plugin ecosystem regression: npm-installed TUI plugins fail silently with no user-facing error. Mitigated on `dev` by reverting OpenTUI to 0.3.4, but the root loader bug remains unfixed ahead of the next re-bump.  
   [Link](https://github.com/anomalyco/opencode/issues/33884)

8. **#43355 [OPEN] [Desktop] UI freezes after agent turns finish — renderer stuck in ResizeObserver loop; only force-quit + relaunch recovers**  
   7 comments · 0 👍  
   *Why it matters*: A severe desktop (Electron) stability bug on v1.18.18 that renders the app unusable after an agent turn completes. The backend remains functional, but the renderer hangs permanently, requiring a full restart.  
   [Link](https://github.com/anomalyco/opencode/issues/43355)

9. **#49965 [OPEN] Auto-compaction fires after every tool-call step for Ollama (openai-compatible) provider, even when nowhere near context limit**  
   5 comments · 0 👍  
   *Why it matters*: A performance-killing bug for local model users (Ollama). Unnecessary auto-compaction after every tool call drastically slows down agent workflows and wastes compute on local hardware.  
   [Link](https://github.com/anomalyco/opencode/issues/49965)

10. **#50246 [OPEN] server: v2.0.11 background service segfaults repeatedly (SIGSEGV, Linux x64)**  
    0 comments · 0 👍  
    *Why it matters*: A critical stability regression: the background service crashes 9 times in a single day with SIGSEGV, dumping 240–380 MB core files each time. While auto-restart masks the issue, it causes intermittent session drops and performance lag.  
    [Link](https://github.com/anomalyco/opencode/issues/50246)

---

## 4. Key PR Progress
1. **#50253 [OPEN] refactor(opencode): lazy-load commands so `--version` skips full startup**  
   *Contributor*: @Fluffy-Bunny-23  
   Fixes slow `opencode --version` execution by deferring full command graph loading. Currently, printing the version constant takes seconds on loaded systems due to unnecessary startup overhead. Supersedes the auto-closed #50219.  
   [Link](https://github.com/anomalyco/opencode/pull/50253)

2. **#50251 [OPEN] fix(session): surface turns that end with no model output**  
   *Contributor*: @hiteshjain118  
   Closes #50250. Fixes silent session idle when a provider returns a clean `stop` with zero output tokens. The PR adds user-visible feedback so users don’t mistake a no-output turn for a hung session.  
   [Link](https://github.com/anomalyco/opencode/pull/50251)

3. **#50254 [OPEN] [needs:compliance] fix(mcp): start explicit OAuth on unauthenticated 200 handshakes**  
   *Contributor*: @eagleeyejack  
   Fixes the Gmail MCP "false connected" bug. Previously, Gmail MCP returned HTTP 200 for unauthenticated handshakes, so the client reported success without credentials. This PR triggers the OAuth flow explicitly on unauthenticated 200 responses.  
   [Link](https://github.com/anomalyco/opencode/pull/50254)

4. **#49560 [OPEN] fix(tui): allow custom destination path in move session**  
   *Contributor*: @mavasbel  
   Closes 4 related issues. Expands the `/move` session command to support destinations outside the current project’s worktree, instead of restricting moves to existing worktrees of the active project.  
   [Link](https://github.com/anomalyco/opencode/pull/49560)

5. **#50106 [OPEN] fix(core): stop republishing summary diffs into durable event snapshots**  
   *Contributor*: @monody0007  
   Closes #48641, addresses #46833. Fixes massive session bloat by eliminating duplicate summary diff storage in event snapshots. Related to the multi-GB heap spike reported in #50089 for large working trees.  
   [Link](https://github.com/anomalyco/opencode/pull/50106)

6. **#50256 [OPEN] fix(app): hide server default controls with one server**  
   *Contributor*: @Hona  
   Removes confusing "Set as default" / "Remove default" menu items and the "Default" badge when only one server is registered. The default setting has no effect with a single server, so the control was unnecessary UI noise.  
   [Link](https://github.com/anomalyco/opencode/pull/50256)

7. **#50240 [CLOSED] fix(cli): report fatal startup causes on stderr**  
   *Contributor*: @Hona  
   Redirects fatal startup error messages from stdout to stderr, so desktop/service wrappers (which only pipe stderr) can surface meaningful crash context instead of bare "process exited" messages.  
   [Link](https://github.com/anomalyco/opencode/pull/50240)

8. **#50252 [OPEN] [needs:issue] fix(util): expose npm installation failure details**  
   *Contributor*: @andreivince  
   Refs #50080. Fixes empty error messages when npm-based plugin installation fails, surfacing root cause details to users instead of silent or blank failures.  
   [Link](https://github.com/anomalyco/opencode/pull/50252)

9. **#47486 [OPEN] fix(opencode): run live metadata updates from plugin tools**  
   *Contributor*: @llucax  
   Closes #37877. Fixes the plugin tool `metadata()` API, which previously was a no-op void call. The patch properly bridges plugin metadata calls to the host’s Effect-based context, enabling live metadata updates from plugin tools.  
   [Link](https://github.com/anomalyco/opencode/pull/47486)

10. **#50239 [OPEN] fix(tui): show the command in external_directory permission prompts**  
    *Contributor*: @freimer  
    Closes #50234. Improves security UX by showing the full shell command in permission prompts for operations touching paths outside the working directory, so users can make informed allow/deny decisions.  
    [Link](https://github.com/anomalyco/opencode/pull/50239)

---

## 5. Hot Discussions
*Omitted: No discussion data was provided in the source dataset.*

---

## 6. Feature Request Trends
1. **Programmatic Zen quota/balance access**: The top-voted feature request (#10448) for a public Zen balance API endpoint, with demand for automation and status bar integrations.
2. **Full workspace/worktree support in V2 UI**: Multiple issues (#37546, #39614, #48958) call for restoring workspace and git worktree functionality missing from the new layout, plus a toggle to revert to the legacy UI.
3. **Higher/flexible output token limits**: Users want the 32k output token cap lifted, with proper support for per-model custom limits defined in `opencode.json` instead of relying on experimental env vars.
4. **Improved free-tier transparency and control**: Users want clearer quota tracking, visible reset timelines, and fairer retry logic that doesn’t escalate across different free models.
5. **Expanded plugin ecosystem reliability**: Requests for more robust plugin loading (npm spec support, fallback for dual v1/v2 plugins) and better error visibility for installation/load failures.

---

## 7. Developer Pain Points
1. **Free-tier instability and quota bugs**: The most frequent complaint category: false "usage exceeded" errors, escalating cross-model retry timers, and blocked access even on the official client create major friction for free users.
2. **V2 UI regressions**: The new layout is a top source of frustration, missing core features (workspaces, worktrees, notification permission prompts) with no revert option, making it unusable for many power users.
3. **Silent failures across the stack**: Plugins that fail to load without errors, OAuth connections that report success without credentials, sessions that idle with no output — all create debugging headaches for users.
4. **Performance and bloat issues**: Slow `--version` startup, multi-GB session heap spikes from stored diffs, unnecessary auto-compaction for local models, and repeated background service segfaults degrade day-to-day usability.
5. **Broken shell/terminal integrations**: Fish shell completion outputs invalid syntax, clipboard copy doesn’t work over SSH/tmux, and the Termius SSH client has unreadable color themes.
6. **Desktop app stability**: Renderer freezes (ResizeObserver loops), broken IPC handlers for file operations (export session, reveal in explorer), and missing notification permissions on the new layout impact desktop users heavily.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest | 2026-09-21
---
## 1. Last 7 Days' Highlights
This week saw the release of Pi v0.86.0 and v0.86.1, introducing two major features: cost-aware prompt cache warming and Meta Muse provider support. Core performance and stability work dominated the issue tracker, with Windows compatibility, TUI streaming CPU usage, and provider interoperability as the most active community topics. The extension ecosystem also continued expanding, with new community-built tools for IDE integration, runtime constraint enforcement, and workflow automation.
---
## 2. Releases
### v0.86.1
- **New Feature: Meta Muse provider** – Sign in with Meta via `/login meta` or use `META_API_KEY` to access Muse Spark models. [Docs](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)
### v0.86.0
- **New Feature: Prompt cache warming** – Keep valuable prompt caches alive during long tool runs and optionally while idle, using cost-aware refresh logic. [Docs](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming)
---
## 3. Hot Issues
| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|--------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing? | Open | Windows represents a massive untapped developer base; this issue is collecting feedback to prioritize fixes, documentation, and out-of-box support for Windows deployment paths. | 67 comments, active ongoing discussion as of Sep 20 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild | Open, in progress | Long sessions become unusable due to 100% single-core CPU usage during model streaming. Root cause identified: uncached grapheme segmentation and full Markdown re-render on every chunk. | 13 comments, 6 👍; confirmed reproducible in core (not extensions) |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | pi-ai sends unsupported OpenAI-specific request fields/roles/auth to compatible providers | Open, bug | OpenAI-compatible providers frequently reject requests due to Pi sending proprietary fields, roles, and headers, breaking interoperability with alternative inference engines. | 5 comments, multiple user reports across different providers |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | Tool-call argument parsing becomes quadratic with fragmented deltas | Open | Streaming tool call parsing scales O(N²) with delta count, causing significant latency for large/complex tool invocations. | 5 comments, performance optimization request with clear root cause |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | Windows: CJK IME input is laggy and the candidate window often does not appear | Open, bug | CJK users on Windows face near-unusable input, with delayed keystrokes, missing candidate windows, and frozen input after 15 seconds; enabling `showHardwareCursor` is a known workaround. | 3 comments, impacts international user base |
| [#9785](https://github.com/earendil-works/pi/issues/9785) | bash timeout param: seconds-vs-ms confusion yields multi-hour ceilings; no default or sane max | Closed, untriaged | Unit confusion in the bash timeout parameter leads to unintended multi-hour timeouts and no sensible defaults, posing reliability and cost risks. | 3 comments, clear bug with proposed fix direction |
| [#9770](https://github.com/earendil-works/pi/issues/9770) | find and grep tools have no timeout mechanism and can return an error-free empty result when killed | Closed, untriaged | Ungoverned `find`/`grep` calls can hang indefinitely, and killed processes return silent empty success instead of errors, leading the model to make incorrect decisions. | 3 comments, parity gap with bash tool timeout behavior |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | 0.86.0 regression: RPC steer success cannot be correlated with extension-handled input | Open, bug | v0.86.0 broke RPC steer tracking: clients cannot match success responses to queued inputs when extensions consume and re-queue steer events, breaking extension integrations relying on RPC. | 2 comments, regression introduced in latest release |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | perf(tui): full re-render causes scroll/typing lag in sessions with 800+ messages | Closed, untriaged | Large sessions (800+ messages) suffer from noticeable scroll and typing lag because Pi uses full scrollback re-renders instead of incremental diffing. | 2 comments, comparison with OpenCode's OpenTUI implementation |
| [#9794](https://github.com/earendil-works/pi/issues/9794) | Import error in 0.86.0 | Closed, bug | A missing bundle chunk causes import failures after upgrading to v0.86.0, blocking users on Windows from loading the tool after update. | 4 comments, rapid-followed by v0.86.1 hotfixes |
---
## 4. Key PR Progress
| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat(coding-agent): add prompt cache warming | Closed | Implements experimental prompt cache warming to keep caches alive via cost-aware refreshes; initially limited to Anthropic (the only provider with explicit cache support). Ships in v0.86.0. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | Closed | Adds Meta Muse as a supported provider, including OAuth login and API key authentication. Accounts for unique quirks: daily token re-minting from identity tokens, and burst-style "fake" streaming. Ships in v0.86.1. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | feat(ai): add mid-conversation system messages | Closed | First layer of the system message refactor: adds support for mid-session system message injection, enabling dynamic updates to prompts/tool loadouts without rewriting the top-level system prompt. Passes through core layers without breaking changes. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | feat(coding-agent): deliver prompt and tool changes as system message deltas | Closed | Second layer of the refactor: wires the coding agent to deliver prompt and tool loadout changes as incremental system message deltas instead of rewriting the entire system prompt, reducing token waste and improving cache hit rates. |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): allow extensions to append to the session system prompt | Closed | Enables `session_start` extension handlers to return append-only `systemPromptAppend` contributions, with proper ordering, trimming, metadata tracking, and error isolation. Extends the system prompt extensibility model for extensions. |
| [#9772](https://github.com/earendil-works/pi/pull/9772) | fix(tui): stop main-screen scrollback clear/replay and ConPTY autowrap drift | Closed | Two TUI fixes for Windows: disables autowrap during main-screen renders to fix ConPTY line wrap drift, and eliminates unnecessary scrollback clear/replay cycles, improving rendering stability on Windows Terminal and pwsh. |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): handle CJK punctuation in file autocomplete | Closed | Fixes file path autocomplete not triggering after CJK punctuation by treating CJK punctuation as a word boundary (consistent with whitespace handling outside quotes), improving input experience for CJK users. |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | fix(ai): exclude Cerebras from supportsStrictMode | Closed | Marks Cerebras as not supporting strict mode, fixing 400 errors that occurred when extensions defined a mix of strict and non-strict tools. Resolves a common interoperability issue for Cerebras users with installed extensions. |
| [#9776](https://github.com/earendil-works/pi/pull/9776) | Per thinking sampling parameters | Open | Implements `samplingParamsByThinkingLevel` to allow different sampling parameters for thinking vs non-thinking modes, addressing open model recommendations for optimized reasoning performance. Cherry-picks and fixes related prior work. |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | feat(coding-agent): upgrade Mermaid terminal rendering | Open | Upgrades Mermaid diagram rendering in the terminal, addressing longstanding issues with diagram quality and compatibility. Expected to improve visualization of Mermaid code blocks in TUI mode. |
---
## 5. Hot Discussions
### Q&A / Ideas
- **[#1637 Benchmarking pi's harness](https://github.com/earendil-works/pi/discussions/1637)** (General) – Community member proposes benchmarking Pi's harness against alternatives like Codex CLI and Claude Agent SDK, seeking objective performance data for team adoption. 31 👍, active interest from teams evaluating agent tools.
- **[#3373 Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)** (General) – Crowdsourced thread for sharing favorite Pi extensions. 17 comments, 9 👍; serves as a de facto community extension directory for users who don't use Discord.
- **[#1527 Paste doesn't work on Windows - ConPTY doesn't send bracketed paste markers](https://github.com/earendil-works/pi/discussions/1527)** (General) – Documents a Windows-specific paste bug where ConPTY strips bracketed paste markers, causing multi-line pastes to submit immediately. A long-standing pain point for Windows users.
- **[#8729 Question: Why agent teams love npm?](https://github.com/earendil-works/pi/discussions/8729)** (General) – Discussion about npm as the distribution model for agents, raising version compatibility pain points across Node.js versions (e.g., agents installed on Node 22 not being callable from Node 18 environments).
### Show and tell
- **[#1558 CursorAI Agent CLI custom provider for the Pi Coding Agent](https://github.com/earendil-works/pi/discussions/1558)** (General) – Community member releases `@netandreus/pi-cursor-provider`, a custom provider adding CursorAI Agent CLI support to Pi. 9 👍, positive reception from Cursor users.
- **[#9775 Show and tell: pi-agent-ide - precise tooling for coding sessions](https://github.com/earendil-works/pi/discussions/9775)** (General) – New extension adding IDE-like precise editing tooling for markdown and code files, addressing the agent's inability to make fine-grained edits to files it just created.
- **[#9747 pi-heed — runtime constraints for Pi: stop agents from forgetting what you told them](https://github.com/earendil-works/pi/discussions/9747)** (General) – New extension that enforces user-defined runtime constraints (e.g., "don't modify files", "don't touch tests") by checking side-effecting tool calls before they run, preventing agent drift from instructions.
- **[#9732 Show & tell: pi-conversation-timer — Active task timer extension in statusline](https://github.com/earendil-works/pi/discussions/9732)** (General) – Lightweight statusline extension that tracks actual active work time (not wall-clock time) for agent tasks, helping users monitor session duration and cost.
- **[#9679 job-agent-skills — job-search workflow for pi: 10 skills + a jobs-mcp bridge extension](https://github.com/earendil-works/pi/discussions/9679)** (General) – Curated workflow package with 10 job-search skills (career initialization, job matching, resume tailoring, etc.) and an MCP bridge extension for job board integration.
---
## 6. Feature Request Trends
1. **Windows first-class support** – Consistent demand for better Windows compatibility, including fixed paste behavior, improved IME support, clearer installation/running paths, and ConPTY rendering stability.
2. **TUI performance and customizability** – Repeated requests for incremental rendering to reduce large-session lag, better hardware cursor support, improved code block visualization, and more configurable UI elements.
3. **Provider interoperability** – Growing requests for broader support of non-major providers, better handling of OpenAI-compatible API quirks, and flexible configuration for provider-specific features/limitations.
4. **Extension extensibility** – Requests for more extension hooks (system prompt modification, model registry streaming access, UI customization) and better extension resolution (support for `package.json` main/exports fields).
5. **Performance optimization** – Broad interest in reducing CPU usage during streaming, optimizing tool call parsing, improving cache efficiency, and speeding up session listing/management operations.
---
## 7. Developer Pain Points
1. **Windows compatibility gaps** – CJK IME issues, broken multi-line paste, rendering drift in ConPTY, and unclear deployment paths are the most frequently cited pain points for Windows developers.
2. **TUI performance degradation in long sessions** – Full re-renders, uncached text segmentation, and per-chunk Markdown rebuilds cause CPU spikes and input lag as sessions grow beyond ~800 messages.
3. **Provider compatibility friction** – Silent failures and 400/422 errors when using OpenAI-compatible providers due to Pi sending proprietary fields/headers; inconsistent handling of provider-specific response patterns (missing `finish_reason`, unrecognized error codes).
4. **Tool reliability gaps** – Missing timeouts for `find`/`grep` tools, silent success on killed processes, bash timeout unit confusion, and lack of error propagation for edge cases lead to incorrect agent behavior.
5. **Extension development friction** – Limited API surface for extensions, package resolution issues with standard npm package entry points, lack of documentation for features like skill filter syntax, and no way to customize UI elements like code block rendering via extensions.
6. **Cache and cost management gaps** – Inconsistent cache warming behavior across providers, unexpected cold cache misses causing large token re-bills, and limited control over cost-related settings for long-running sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-09-21

---

## 1. Last 7 Days' Highlights
This week the Qwen Code project released v0.24.0 through v0.24.2, delivering workflow enhancements, web-shell audio capabilities, and core token-governance improvements alongside one notable breaking change to `active_goal` stream events. The community prioritized long-context token cost optimization, with a coordinated set of issues targeting non-conversation context overhead that now dominates 1M-token window usage. Web-shell and daemon hardening also advanced, with new SSH workspace support, QR-based mobile pairing, and fixes for packaging, port-conflict, and session-deletion bugs.

---

## 2. Releases

### Stable Releases
- **[v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2)** — Patch release restoring the remote workspace add flow in `web-shell` and adding AudioWorklet-based Live Voice microphone capture. No breaking changes.
- **[v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1)** — Feature release adding workflow improvements and shared output modes for channels. **Breaking change:** the `active_goal` stream event is no longer emitted ([#12181](https://github.com/QwenLM/qwen-code/pull/12181)).
- **[v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0)** — Major release. **Breaking change:** bash now expands project directory variables in command hooks ([#11864](https://github.com/QwenLM/qwen-code/pull/11864)).

### Desktop & SDK
- **[desktop-v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.1)** — Scopes ACP permission queue to the session and adds shared output modes for channels.
- **[sdk-typescript-v0.1.13](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.13)** — Bundles CLI v0.24.1.

### Nightly / Preview
- v0.24.2-nightly.20260920.eceaede18e
- v0.24.1-nightly.20260919.c1c00cbaab
- v0.24.1-preview.0
- v0.24.0-nightly.20260918.537311b8a5
- v0.24.0-nightly.20260917.f822124af5

---

## 3. Hot Issues

1. **[#12028 — tracking(core): non-conversation context token governance](https://github.com/QwenLM/qwen-code/issues/12028)**  
   Umbrella issue for optimizing system prompts, tool schemas, `QWEN.md`, and skill listings that are re-sent on every request. On large-context models this block can dwarf the conversation itself. **10 comments** — the most-discussed issue this week, driving multiple sub-issues and PRs.

2. **[#12029 — Percentage-of-context-window budgets scale the wrong way on large windows](https://github.com/QwenLM/qwen-code/issues/12029)**  
   ToolSearch preload and context-window warnings break on large windows because budgets are expressed as percentages. Part of #12028. **8 comments**, marked `ready-for-human`.

3. **[#12287 — Workflow retry-from-history hardening follow-ups](https://github.com/QwenLM/qwen-code/issues/12287)**  
   Splits hardened retry logic out of the main feature PR so runner resume semantics, checkpoint schema, and validation can be reviewed independently. **7 comments**, P2.

4. **[#11847 — Session recap is always generated in English](https://github.com/QwenLM/qwen-code/issues/11847)**  
   The "where did I leave off" summary ignores conversation language because its system prompt is hardcoded. **7 comments**, requested by a community contributor.

5. **[#12224 — Unable to change directory with /cd after v0.24.0 update](https://github.com/QwenLM/qwen-code/issues/12224)**  
   P1 regression: `/cd` fails with a "response or tool call in progress" error even with no active sessions. **6 comments**, directly impacting CLI users post-upgrade.

6. **[#12030 — Extension context files are unconditionally resident](https://github.com/QwenLM/qwen-code/issues/12030)**  
   Every active extension's context file is concatenated into every request's system prompt with no relevance gating, budget, or attribution. **6 comments**, part of the token-governance push.

7. **[#12054 — Built-in tool descriptions are the largest non-conversation context block](https://github.com/QwenLM/qwen-code/issues/12054)**  
   Built-in tools consume 21,461 tokens (45.9% of non-conversation context) on a 1M-token model, with no size tracking. **6 comments**, P2.

8. **[#12091 — Deleting a live session permanently corrupts its transcript](https://github.com/QwenLM/qwen-code/issues/12091)**  
   P1: `sessions/delete` unlinks the JSONL transcript while a writer is still attached; the writer recreates a headless file, breaking history and auto-continue. **5 comments**.

9. **[#12002 — [security] Inline secrets in `function_args` are recorded verbatim](https://github.com/QwenLM/qwen-code/issues/12002)**  
   P1 security issue: shell commands containing secrets are persisted in chat recordings and UI telemetry, risking off-device exposure. **5 comments**, `ready-for-human`.

10. **[#12277 — Local Control enable fails with EADDRINUSE on LAN interface](https://github.com/QwenLM/qwen-code/issues/12277)**  
    `qwen serve` opens a second listener for Local Control that collides with the daemon's ephemeral port when bound to the LAN interface. **5 comments**, P2.

---

## 4. Key PR Progress

1. **[#12255 — feat(serve): support SSH workspaces without a remote daemon](https://github.com/QwenLM/qwen-code/pull/12255)**  
   Adds `ssh://user@host:port/path` workspace support in Web Shell. File ops, shell, Git, and interactive terminal run over SSH while credentials and session history stay local.

2. **[#12267 — feat(cli): Move bwrap sandboxing to tool execution](https://github.com/QwenLM/qwen-code/pull/12267)**  
   Third-stage bwrap refactor: introduces `tools.executionSandbox` policy, routes shell entrypoints through a shared execution boundary, and removes legacy whole-CLI bwrap restart.

3. **[#12358 — feat(managed-agent): Add standalone managed agent stack](https://github.com/QwenLM/qwen-code/pull/12358)**  
   End-to-end preview of Managed Agents architecture: resident Harness, Java control plane, session-scoped Tool Runtimes, durable session records, and Spring-based runtime broker.

4. **[#12322 — feat(web-shell): enable expiring QR pairing on non-loopback listeners](https://github.com/QwenLM/qwen-code/pull/12322)**  
   Mobile-access QR now works on authenticated non-loopback listeners. Each QR is single-use, expires after 60s, and grants an independent device credential.

5. **[#12154 — feat(web-shell): manage the repository's worktrees from the git dialog](https://github.com/QwenLM/qwen-code/pull/12154)**  
   Adds a "Worktrees" tab to the Web Shell Git dialog showing all worktrees, branches, HEAD status, locks, and supporting create/delete/lock operations.

6. **[#12183 — feat(extensions): load deployment-managed extensions from a directory](https://github.com/QwenLM/qwen-code/pull/12183)**  
   Adds `--managed-extensions <root>` flag. Extensions are discovered from child directories and read in place, keeping deployment control outside user extension storage.

7. **[#12258 — fix(mcp): Make App resource limits configurable per server](https://github.com/QwenLM/qwen-code/pull/12258)**  
   Allows per-MCP-server configuration of App HTML size (up to 4 MiB) and resource-read deadline (up to 120s). Defaults remain at 1 MiB / 10s.

8. **[#12364 — fix(web-shell): verify wildcard export targets against the packed file list](https://github.com/QwenLM/qwen-code/pull/12364)**  
   Fixes the publish verifier to handle npm subpath-pattern exports (e.g. `"./*": "./dist/*"`) by checking against the actual `npm pack` file list.

9. **[#10136 — feat(review): swap re-review rounds to a fix-audit shape under critical posture](https://github.com/QwenLM/qwen-code/pull/10136)**  
   Multi-round `/review` runs a narrowed fix-audit pass instead of a full review when heading for critical-only posture, with plan-time posture prediction.

10. **[#12362 — fix(web-shell): restore mobile history navigation](https://github.com/QwenLM/qwen-code/pull/12362)**  
    Restores mobile composer ↑/↓ on WebKit, fixes first-input history availability, and ensures touch controls preserve editor focus.

---

## 5. Hot Discussions
*(No discussion data provided — section omitted.)*

---

## 6. Feature Request Trends

1. **Long-context token efficiency** — The single largest theme: users want granular control over non-conversation context (tool schemas, extension files, system prompts) to reduce cost on large-window models. Related: #12028, #12029, #12030, #12054, #12326, #12333.

2. **Multi-session and cross-session orchestration** — Interest in session gating, naming, capping, and cross-session messaging for hosts running multiple concurrent sessions (#12303, #11013).

3. **Web Shell expansion** — Requests for SSH workspaces (#12255), worktree management (#12154), mobile pairing (#12322), and host settings allowlists (#12320).

4. **Workflow and agent resilience** — Demand for retry-from-history (#12287), better unattended daemon reliability (#11944), and dynamic workflow parity with competing tools (#11013).

5. **Extension management flexibility** — Deployment-managed extensions (#12183) and Chrome Web Store publishing (#12240) are top distribution requests.

---

## 7. Developer Pain Points

1. **Token cost opacity on large-context models** — Non-conversation context (especially built-in tool schemas) is billed on every request but is invisible to users and unmeasured. Percentage-based budgets actually *fail* as windows grow (#12028, #12029, #12054).

2. **v0.24.x regressions** — The `/cd` command breakage (#12224) and `active_goal` stream removal (#12181) have caused immediate disruption for CLI users and downstream integrators.

3. **Session lifecycle fragility** — Deleting live sessions corrupts transcripts (#12091), daemon shutdown can exit non-zero on macOS during preheat (#12350), and recap summaries don't respect language settings (#11847).

4. **Security and credential leakage risks** — Inline secrets in tool arguments are persisted to logs/telemetry (#12002), and shell-utility parsing still misclassifies Unicode whitespace (#12089).

5. **CI and packaging friction** — Flaky E2E tests (macOS shards, npm install transient failures), broken publish verifiers for wildcard exports (#12332, #12310), and Docker cache bloat (#12135) slow contributor velocity.

6. **Web Shell i18n gaps** — ~31 settings labels and 6 category names remain untranslated in the Chinese UI (#12306), and embedded hosts lack a settings allowlist mechanism (#12320).

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*