# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-23 22:20 UTC | Tools covered: 9

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

# Cross-Tool AI Coding CLI Community Comparison Report
Report Window: 2026-08-24 | Source: Official Community Digests for 9 leading AI CLI tools
---

## 1. Ecosystem Overview
As of August 2026, the global AI coding CLI ecosystem has moved past core feature parity to prioritize reliability hardening, enterprise compliance, extensibility standardization, and support for local/self-hosted LLM deployments. All major tracked projects have ongoing work to integrate the Model Context Protocol (MCP) as a shared extensibility layer, with user demands for transparent billing, explicit context controls, and predictable cost guardrails outpacing many vendor roadmaps. The 24-hour reporting window shows a balance of routine maintenance releases, critical security patches, and unaddressed high-severity regressions impacting core production workflows for professional developers. Regional open-source tools are rapidly eroding the first-party closed-source vendors’ historical lead in support for multi-provider and airgapped deployment use cases.

## 2. Activity Comparison
| Tool Name | New Public Releases (24h) | Total Updated Issues | Total Active PRs (Merged + Open) |
|-----------|---------------------------|----------------------|-----------------------------------|
| Claude Code | 1 (v2.1.241 maintenance patch) | 10 | 1 |
| OpenAI Codex | 0 | 10 | 19 |
| Gemini CLI | 1 (v0.56.0 nightly pre-release) | 10 | 6 |
| GitHub Copilot CLI | 1 (v1.0.81-8 prerelease) | 10 | 1 |
| Kimi Code CLI | 0 | 3 | 2 |
| OpenCode | 0 | 10 | 19 |
| Pi | 0 | 10 | 12 |
| Qwen Code | 1 (v0.22.0 nightly pre-release) | 10 | 10 |
| CodeWhale (DeepSeek TUI) | 1 (v0.9.11 rebrand release) | 10 | 10 |

## 3. Shared Feature Directions
These cross-community user requirements appear consistently across multiple tool ecosystems:
1. **Persistent cross-session memory management**: Requested by Claude Code, Kimi Code CLI, GitHub Copilot CLI, and Pi, to eliminate redundant context re-entry for recurring workflows and preserve user-specific coding preferences and project conventions across session restarts.
2. **Zero-restart MCP config hot-reload**: Prioritized by GitHub Copilot CLI, OpenCode, and Gemini CLI, to remove friction for custom tool developers who previously had to fully restart sessions to apply edits to `.mcp.json` definitions.
3. **User-controlled context and compaction tuning**: Demanded by OpenAI Codex, GitHub Copilot CLI, OpenCode, and Claude Code, to eliminate opaque undocumented context window gating and overly aggressive default compaction that wastes usable token capacity for large monorepo refactoring tasks.
4. **Remote multi-device session governance**: In active development or requested by Kimi Code CLI, CodeWhale, and OpenCode, to enable secondary mobile/spectator control layers that let users review, approve, or veto long-running headless agent tasks without sitting at a desktop terminal.
5. **Bounded runaway cost protection**: Addressed in recent patches or feature requests by Claude Code, GitHub Copilot CLI, and CodeWhale, to prevent unmonitored infinite retry loops from burning tens of millions of tokens with zero usable output.

## 4. Differentiation Analysis
Tools segment cleanly into three distinct groups with divergent priorities:
1. **First-party vendor closed-source tools (Claude Code, OpenAI Codex, GitHub Copilot CLI)**: Feature focus is tightly tied to their native model ecosystem integrations and enterprise compliance requirements, with near-term roadmaps prioritizing stability patches for core workflow regressions. Target users are primarily enterprise professional developers, and maintainers regularly close high-demand feature requests (such as Claude Code’s multi-session coordination primitives) as stale to focus resources on core roadmap commitments.
2. **Open cross-provider ecosystem tools (OpenCode, Pi, Qwen Code, CodeWhale)**: Technical approach prioritizes full independence from any single LLM vendor, with extensive support for self-hosted, open-source, and regional model deployments. Target users are power users, airgapped deployment operators, and developer communities in markets with limited access to US-based LLM services. Projects such as CodeWhale have explicitly launched multi-month refactors to remove all legacy single-vendor hardcoding from their codebase.
3. **Regional niche tools (Gemini CLI, Kimi Code CLI)**: Feature focus is incremental quality-of-life and security hardening for their existing domestic user bases, rather than broad global ecosystem expansion. Gemini CLI prioritizes sandbox security hardening, while Kimi Code CLI has a narrow roadmap focused on small high-impact fixes for its power user subscriber base.

## 5. Community Momentum & Maturity
- **Highest activity momentum**: OpenAI Codex and OpenCode tie for the highest 24-hour development volume, with 19 merged PRs each across bug fixes, new features, and workflow improvements, supported by hundreds of active external contributors. Their communities are highly engaged, with near-daily triage of all high-severity user-reported issues.
- **Established high-maturity tools**: Claude Code, GitHub Copilot CLI, Gemini CLI, Pi, Qwen Code, and CodeWhale have consistent release cadences, large active user bases, and formal maintainer triage workflows, though tools owned by large commercial vendors have lower volumes of external community PR contributions.
- **Small, focused low-velocity community**: Kimi Code CLI has a tight-knit power user base with limited public activity, only 3 updated issues and 2 PRs in the 24h window, and slow iteration focused on resolving high-impact pain points for its Vivace tier subscriber base.

## 6. Trend Signals
1. **Vendor lock-in risk is growing rapidly**: Undocumented capability gating (such as OpenAI Codex’s origin-dependent context window sizing) and unannounced paid tier quota reductions create production workflow risk for teams that build agentic coding systems tied to a single LLM vendor. Teams are recommended to adopt multi-model portable workflows to avoid unplanned downtime.
2. **MCP is the de facto industry standard**: The Model Context Protocol is now universally supported across all tracked tools, so teams building internal custom tooling for AI coding workflows only need to implement the MCP spec once to get compatibility across every major AI CLI ecosystem.
3. **Open cross-provider tools will dominate self-hosted use cases**: 5 of the 9 tracked tools are actively refactoring to eliminate single-vendor hardcoding, so teams planning 2027 enterprise AI coding infrastructure deployments should prioritize vendor-neutral stacks rather than building workflows tied exclusively to one LLM provider.
4. **Security transparency is a top enterprise differentiator**: Publicly visible security trackers and regular vulnerability disclosures (demonstrated by projects like Gemini CLI and CodeWhale) are becoming a critical selection criteria for enterprise deployments, as AI CLI sandbox escape risks and secret leak vulnerabilities move from edge cases to common attack surfaces.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-08-24)
---
## 1. Top Skills Ranking
The 7 highest-attention active PRs ranked by cross-reference of linked issue engagement, author activity, and recent updates:
1. **`run_eval.py` full bug fix for 0% recall error** ([PR #1298](https://github.com/anthropics/skills/pull/1298)): Functionality: Resolves the widely reported critical bug where the entire skill description optimization stack reports 0% recall for all test skills, plus adds Windows stream reading, trigger detection, and parallel worker improvements. Discussion highlights: Addresses a blocking issue with 10+ independent community reproductions tied to Issue #556 that broke all skill quality testing workflows. Status: Open.
2. **Full ServiceNow platform skill** ([PR #568](https://github.com/anthropics/skills/pull/568)): Functionality: Broad, end-to-end assistant for the ServiceNow platform covering ITSM, ITOM, SecOps, FSM, IntegrationHub, and all major CSDM modules, rather than narrow scripting support. Discussion highlights: Targets a large unmet need for enterprise IT operations Claude Code users, and has been iteratively refined across 5 months of community feedback. Status: Open.
3. **Hivemind Zero-Cost Multi-Agent Orchestration Skill** ([PR #1628](https://github.com/anthropics/skills/pull/1628)): Functionality: Lets Claude Code delegate low-complexity mechanical tasks to free opencode.ai headless workers, preserving Claude Code's high-value context exclusively for planning, review, and final merge work. Discussion highlights: Lauded as a novel, low-overhead approach to reduce expensive LLM compute costs without sacrificing output quality. Status: Open.
4. **skill-quality-analyzer + skill-security-analyzer meta-skills** ([PR #83](https://github.com/anthropics/skills/pull/83)): Functionality: Two self-policing meta-skills that evaluate community-submitted skills across 5 dimensions (structure, documentation, security, performance, accuracy) to flag low-quality or malicious submissions. Discussion highlights: Positioned as a stopgap solution to the top-voted Issue #492 trust boundary abuse vulnerability for skills hosted under the official anthropic/ namespace. Status: Open.
5. **self-audit reasoning quality gate skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367)): Functionality: Universal cross-stack pre-delivery verification tool that first checks all claimed output files exist, then runs a 4-dimensional reasoning audit sorted by damage severity to eliminate LLM hallucinations. Discussion highlights: Directly implements the top-voted community proposal for a full-session AI output quality pipeline. Status: Open.
6. **scnet-hpc cluster operation skill** ([PR #1615](https://github.com/anthropics/skills/pull/1615)): Functionality: Profile-based SSH and Slurm workflow guidance for operating SCNet high performance computing clusters, including automated partition, memory, module, and accelerator configuration suggestions. Discussion highlights: Fills a major representation gap for academic and research Claude Code users running heavy HPC workloads. Status: Open.
7. **testing-patterns comprehensive test generation skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): Functionality: Full-stack testing guidance covering the Testing Trophy methodology, AAA unit testing patterns, React component testing, E2E testing, and edge case definition for all major popular testing frameworks. Discussion highlights: Addresses widespread user complaints that unguided Claude Code regularly generates incomplete, low-quality test suites. Status: Open.
---
## 2. Community Demand Trends
Distilled from top 15 commented community issues, the highest priority new Skill directions are:
1. **Enterprise platform-specific workflow skills**: Strong unmet demand for official, well-tested skills for widely adopted enterprise platforms including ServiceNow, SAP, SharePoint, and HPC clusters, targeted at IT operations, SecOps, and corporate analytics use cases.
2. **Skill ecosystem governance tools**: High demand for lightweight automated auditing capabilities to mitigate security risks from community skill submissions, including prevention of official namespace impersonation and trust boundary abuse.
3. **Core platform usability improvements**: Consistent demand for fixes to the broken skill-creator evaluation pipeline, native org-wide skill sharing functionality, improved cross-platform (Windows, AWS Bedrock) compatibility, and guardrails to prevent oversized skills from exhausting Claude Code's context window.
4. **Low-overhead multi-agent orchestration tools**: Users are actively seeking methods to offload low-complexity, repetitive tasks from high-cost Claude Code sessions to reduce context exhaustion and total compute spend.
5. **Document processing reliability fixes**: Sustained active demand for bug patches to existing DOCX, PDF, and ODT skills that eliminate file corruption, ID collision, and OOXML formatting breakages.
---
## 3. High-Potential Pending Skills (Imminent Merge Candidates)
These recently updated PRs have no outstanding blocking feedback and are nearly ready for official inclusion:
1. **Evaluation pipeline full stability fix** ([PR #1602](https://github.com/anthropics/skills/pull/1602)): Updated 2026-08-23, bundles all remaining fixes for serialization, benchmark metrics, encoding, and script stability gaps in the skill-creator workflow, resolving all remaining loose ends from the well-documented 0% recall bug report.
2. **UIZZE anti-UI-slop partner skill addition** ([PR #1595](https://github.com/anthropics/skills/pull/1595)): Updated 2026-08-23, adds the widely requested partner skill that grounds all web and iOS interface generation in 800,000+ real production UI patterns, requiring only trivial README edits to merge.
3. **Document skill bug fix trio** ([PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541), [PR #539](https://github.com/anthropics/skills/pull/539)): All updated Q2 2026, resolve longstanding document skill corruption, case sensitivity, and YAML parsing breakages with no outstanding community feedback pending only final maintainer sign-off.
4. **Pyxel retro game development skill** ([PR #525](https://github.com/anthropics/skills/pull/525)): Updated 2026-07-15, full MCP-connected skill for the popular Pyxel 8-bit retro game engine, with widespread support from the game development user segment requiring only minor documentation updates before merge.
---
## 4. Skills Ecosystem Insight
The Claude Code Skills community's most concentrated cross-segment demand is for two interconnected priorities: first, robust, low-overhead guardrails to eliminate low-quality, malicious, or buggy submissions from the official anthropic/ skill namespace, and second, targeted high-domain-value niche and enterprise platform skills that remove the need for end users to build complex, highly specialized domain skills from scratch.

---

# Claude Code Community Digest | 2026-08-24
*Source: github.com/anthropics/claude-code*

---

## 1. Today's Highlights
The Anthropic team published a new v2.1.241 maintenance patch in the last 24 hours, alongside mass triage closing 29 stale long-pending issues that were filed between April and July 2026. The highest-engagement active issue remains a widely reported model quality regression impacting recent Claude and Fable generations, which has amassed over 350 upvotes from frustrated developers. A single new documentation PR for plugin developers also moved forward in the review queue.

## 2. Releases
### v2.1.241 (Latest 24h)
[Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.241)
This routine maintenance release includes no new user-facing features, and exclusively delivers under-the-hood bug fixes and overall reliability improvements across all supported platforms. No breaking changes are flagged for end users or third-party plugin developers.

## 3. Hot Issues
1. **#77136 [OPEN] Repetitive rhetorical tics across Claude 4.7, 4.8, 5.0 and Fable models**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/77136)  
   The highest-engagement open issue in the window, with 88 comments and 351 upvotes. Users report recent model generations regularly ignore explicit style instructions, produce repetitive incoherent prose, and fail to meet baseline quality standards for technical writing and code generation, directly blocking production workflows.
2. **#48965 [CLOSED] Multi-session coordination primitives feature request**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/48965)  
   Long-running enhancement request from teams running custom multi-agent Claude Code stacks, requesting native cross-session messaging, a shared task board, and compaction-resistant state tools. It was marked stale and closed after 4 months of discussion, indicating no near-term roadmap plans for the feature.
3. **#60844 [CLOSED] NotebookRead tool for Jupyter cell extraction**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/60844)  
   Popular data science user feature request for a native tool to parse Jupyter notebooks without wasting tokens on large output payloads, eliminating fragile workarounds using jq or Python to manually extract code cells. It was marked stale and closed after 3 months of tracking.
4. **#73024 [CLOSED] Severe memory retention regression on macOS**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/73024)  
   User-reported bug where Claude Code completely forgets prior session context mid-workflow, breaking long-running autonomous coding tasks. It was marked stale and closed as a duplicate of resolved core memory handling fixes.
5. **#72482 [CLOSED] Nested repository support in agent @repo picker**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/72482)  
   2-upvote feature request for users who store repos in grouped nested parent folders, which the current agent workspace selector cannot traverse. It was marked stale and closed.
6. **#72913 [CLOSED] False cyber safety block on maintenance cron jobs**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/72913)  
   Critical false positive bug that halted production cache warmer operations, triggering a full session block for legitimate routine infrastructure maintenance work. The issue was closed as a duplicate of an active guardrail tuning effort.
7. **#73615 [CLOSED] Dynamic workflow cost reporting discrepancy**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/73615)  
   High-impact billing bug where a session that showed $60 USD of usage in the UI was incorrectly billed at $300 USD, affecting macOS users on v2.1.198. It was closed after being patched in a prior release.
8. **#73603 [CLOSED] Fable 5 geographic restriction accessibility gaps**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/73603)  
   User complaint about Fable 5 being fully unavailable to developers traveling outside supported regions with no temporary access override option, filed by a developer working from South Korea.
9. **#73601 [CLOSED] Resumed sub-agent infinite retry loop token leak**  
   [Issue Link](https://github.com/anthropics/claude-code/issues/73601)  
   Severe edge case failure where a resumed sub-agent entered an unaddressed self-referencing retry loop, burning 10M+ tokens over 3 hours with zero usable output. It was patched in a prior stable release.
10. **#73590 [CLOSED] Windows .claude.json silent corruption wiping MCP servers**  
    [Issue Link](https://github.com/anthropics/claude-code/issues/73590)  
    Persistent Windows platform bug where the core configuration file gets periodically corrupted, silently deleting all user-configured MCP server setups. It was closed as a fixed regression.

## 4. Key PR Progress
Only 1 pull request received updates in the 24 hour window:
1. **#83374 [OPEN] Document MessageDisplay streaming semantics for plugin developers**  
   [PR Link](https://github.com/anthropics/claude-code/pull/83374)  
   Submitted by community developer iCodeCraft, this PR adds previously missing documentation for the unlisted `MessageDisplay` hook event to the official bundled plugin development skill. It fills a critical gap that required developers to reverse-engineer streaming UI event handling for custom Claude Code plugins, adding the event to the trigger description, event guidance, and quick reference table.

## 5. Feature Request Trends
Recent triaged issues reveal 5 top user-prioritized feature directions:
1.  Native first-class primitives for multi-session agent coordination to support distributed Claude Code project management workflows
2.  A purpose-built Jupyter Notebook read tool to eliminate fragile workarounds for data science development
3.  UX polish for the routines/scheduled tasks management system including dedicated MCP controls and clearer state labeling
4.  Support for nested folder traversal in the agent @repo workspace picker
5.  Tuned geographic access controls that allow temporary Fable 5 access for traveling users outside default supported regions

## 6. Developer Pain Points
Recurring high-frequency frustrations from the last 24h of issue activity:
1.  Widespread unaddressed model quality regressions: repetitive prose tics, unprompted fallback from Fable to Opus mid-workflow, and excessive false positive safety guardrail triggers for legitimate development work
2.  Persistent platform-specific bugs including Windows .claude.json corruption, macOS UI vs billing cost reporting mismatches, and Linux VirtioFS mount failures for Cowork sessions
3.  Unpredictable high-cost agent edge cases that waste massive volumes of tokens with zero useful output, such as unkillable infinite retry loops for resumed sub-agents
4.  Gaps in official plugin documentation that force developers to reverse-engineer supported hook events and streaming semantics without official guidance

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-08-24
---
## 1. Today's Highlights
This 24-hour update window contains no new official Codex stable, beta, or alpha releases, but nearly all high-engagement open community bugs received fresh maintainer and contributor activity. The OpenAI Codex engineering team merged 19 bot-run PRs focused on standardizing content classification, fixing context compaction edge cases, and resolving thread leak issues. A newly filed day-one bug exposing inconsistent context window sizing for GPT-5.6 Sol across different Codex client surfaces immediately emerged as a top discussion topic among Pro 20x subscribers.

## 2. Releases
No new Codex releases were published in the 24-hour window ending 2026-08-24. This section is omitted.

## 3. Hot Issues
1. **[#20214](https://github.com/openai/codex/issues/20214) Codex App frequent freezes/stutters on Windows 11 Pro** – The highest-engagement open bug (108 comments, 87 👍) affects even high-spec Windows 11 systems with 32GB+ RAM, with hundreds of users confirming reproduction, making it the top priority Windows performance issue for the maintainer team.
2. **[#39392](https://github.com/openai/codex/issues/39392) Codex App with gpt-5.6-sol aborts with unsupported prompt_cache_retention** – Breaks latest codex-cli 0.148.0 alpha builds using the flagship GPT-5.6 Sol model, with 39 comments from developers sharing temporary workarounds to disable prompt caching to avoid workflow breaks.
3. **[#38350](https://github.com/openai/codex/issues/38350) Recurring scheduled tasks disable themselves after successful runs** – Impacts enterprise ChatGPT Work users relying on automated recurring Codex jobs, with 33 comments from teams reporting missed scheduled runs and unplanned workflow downtime.
4. **[#25178](https://github.com/openai/codex/issues/25178) Windows 10 22H2 Computer Use screenshot fails on SetIsBorderRequired call** – Breaks full visual automation functionality for all Windows 10 22H2 Codex Desktop users, with 29 comments from affected users noting no viable workaround for visual AI workflows.
5. **[#25928](https://github.com/openai/codex/issues/25928) VS Code/Cursor Codex Extension prompts randomly disappear before entering queue** – Critical IDE UX bug that destroys unsubmitted user input, with 28 comments including triage input from Cursor editor maintainers collaborating on a root cause fix.
6. **[#39903](https://github.com/openai/codex/issues/39903) Add option to disable "Ran N commands" collapsing in TUI/CLI** – A top power-user feature request (12 comments, 27 👍) that would make all executed command output visible by default for long-running debug sessions, with a high upvote ratio indicating broad demand.
7. **[#34619](https://github.com/openai/codex/issues/34619) Restore GPT-5.6 Sol’s 372k Codex context window or add an opt-in setting** – Filed by Pro 20x users, with 23 👍 expressing frustration over a reported silent context window reduction that blocks large monorepo refactoring workflows.
8. **[#40258](https://github.com/openai/codex/issues/40258) GPT-5.6 Sol is originator-gated: coding clients get 272K while same account gets 872K on ChatGPT web** – Newly filed day-one bug that explains the context reduction reported in #34619, documenting that the same user account gets different context limits based on the HTTP originator header sent by the client.
9. **[#22316](https://github.com/openai/codex/issues/22316) Codex App support selecting existing Git worktrees** – Highly requested (14 👍) feature for developers working on large monorepos that use multi-worktree setups, avoiding unnecessary duplicate repo clones when starting new Codex sessions.
10. **[#30105](https://github.com/openai/codex/issues/30105) macOS "failed to initialize sqlite state runtime" on concurrent app-server access** – A common startup failure for users running multiple Codex surfaces (desktop + IDE extension) at the same time, with no official root-cause fix published to date.

## 4. Key PR Progress
1. **[#40280](https://github.com/openai/codex/pull/40280) Budget retained images during remote compaction** – Fixes context bloat for image-heavy sessions, where prior compaction logic only counted text tokens against context limits and ignored images, leading to unexpected over-limit errors.
2. **[#40275](https://github.com/openai/codex/pull/40275) Classify additional generated context fragments** – Adds standardized typed tags for compaction summaries, Guardian-approved safety actions, and subagent notifications to improve analytics tracking and runtime debugging.
3. **[#31175](https://github.com/openai/codex/pull/31175) Add MongoDB thread store and session migration** – Experimental new enterprise feature that lets teams store Codex session data in MongoDB instead of local SQLite, including a CLI tool for bulk streaming migration of existing archived sessions.
4. **[#40257](https://github.com/openai/codex/pull/40257) Support `cua_repl` as a Node REPL-backed MCP server** – Adds full integration for the new Computer Use REPL runtime, connecting it to existing Guardian review policies and transcript capture pipelines.
5. **[#40221](https://github.com/openai/codex/pull/40221) Distinguish Guardian review threads from subagents** – Fixes metadata tracking gaps so admin users can separate automated safety review delegated work from user-created custom subagent tasks in analytics dashboards.
6. **[#40200](https://github.com/openai/codex/pull/40200) Remove the Plan mode composer nudge** – Removes the widely complained about automatic "Create a plan?" pop-up that appeared whenever a user typed the word "plan" in the chat input field.
7. **[#40179](https://github.com/openai/codex/pull/40179) Shut down resumed descendants when archiving thread trees** – Fixes a long-running thread leak bug that caused orphaned subagent processes and runaway session storage size when users archived parent threads with active child sessions.
8. **[#40174](https://github.com/openai/codex/pull/40174) Preserve content item kinds in message metadata** – Establishes the core new framework for standardized `ContentItemKind` classification across all Codex message types, serving as the base for a whole wave of upcoming metadata improvements.
9. **[#40169](https://github.com/openai/codex/pull/40169) Add regression coverage for patch approval paging** – Adds full automated test coverage for the full-screen patch review pager, eliminating edge case bugs when users approve large multi-file code changes.
10. **[#40166](https://github.com/openai/codex/pull/40166) Move the TUI cursor before showing it** – Fixes a minor but highly visible UX glitch in the Codex CLI terminal UI where the cursor would briefly flash at an old stale position during screen redraws.

## 5. Feature Request Trends
Top community requested feature directions this update window include:
1. **Context window transparency and user control**: Users are asking for public documentation of GPT-5.6 Sol context limits, plus user-facing opt-in settings to unlock higher context tiers for large codebase workflows.
2. **CLI/TUI power user UX improvements**: Requests for greater visibility into executed command history, higher visual contrast between user and AI output, and more robust session resume behavior.
3. **Advanced workflow integration**: Support for pre-existing Git worktrees in the desktop app, remote control access for non-project general chats, and full Windows compatibility for custom subagent hook dispatch.
4. **Enterprise automation reliability**: Improvements to scheduled recurring task logic to prevent unplanned pauses for ChatGPT Work team deployments.

## 6. Developer Pain Points
Recurring high-frequency frustrations surfaced this update window:
1. **Windows platform bug density**: 17 of the 30 top updated open issues are Windows-only, spanning performance, Computer Use, IDE extension sync, and sandbox file write failures, impacting the largest segment of Codex desktop users.
2. **Cross-surface session resume unreliability**: Overlapping bugs across CLI, TUI, and desktop clients cause frequent "conversation interrupted" and "active writer" errors after connectivity drops or session switching, breaking long-running work in progress.
3. **Systemic context metadata misalignment**: The large batch of recent annotation PRs indicates a class of hidden bugs where metadata, context window accounting, and content classifications get out of sync across different processing paths for user prompts.
4. **Opaque capability and usage tracking**: Users report unexpected loss of banked Codex usage credits, plus undocumented originator-based gating of GPT-5.6 Sol context limits with no public explanation from OpenAI on capability access rules.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-24
*Source: github.com/google-gemini/gemini-cli*

---

## 1. Today's Highlights
Today’s 24-hour snapshot delivers a new pre-release nightly build, multiple critical security patches, and long-awaited fixes for high-impact user pain points including session data loss and broken file globbing. Maintainers merged a critical symlink traversal security patch, hardened the macOS sandbox against container escape vectors, and pushed ongoing improvements to agent reliability across subagent, browser, and auto memory subsystems. Community contributions focused on quality-of-life fixes for line ending detection, documentation gaps, and prefix caching preservation to reduce inference costs.

## 2. Releases
The `v0.56.0-nightly.20260823.g5411f113c` pre-release build was published for early testing. Full changelog comparing to the prior day’s nightly is available here: https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c

## 3. Hot Issues
1. **#22323: Subagent reports false GOAL success after hitting MAX_TURNS** (P1, 13 comments, 2 👍) https://github.com/google-gemini/gemini-cli/issues/22323  
   This high-severity bug shows users a fake completion confirmation for subagent tasks like codebase investigation, even when the subagent hit a turn limit and completed no work, creating major trust gaps in task status reporting.
2. **#21409: Generalist agent hangs indefinitely** (P1, 8 comments, 8 👍) https://github.com/google-gemini/gemini-cli/issues/21409  
   The highest-upvoted open agent bug blocks even trivial tasks like folder creation for users who don’t manually disable subagent deferral, with some users reporting hangs lasting over an hour.
3. **#19873: Zero-dependency OS sandboxing to leverage Gemini 3 bash affinity** (P2, 8 comments) https://github.com/google-gemini/gemini-cli/issues/19873  
   This flagship roadmap proposal would let the model use its native POSIX tool training strengths directly, no custom tool wrappers required, while maintaining full workspace security isolation.
4. **#25166: Shell execution stuck on "Awaiting input" after command completes** (P1, 4 comments, 3 👍) https://github.com/google-gemini/gemini-cli/issues/25166  
   Extremely disruptive UX bug that blocks further agent work after non-interactive, simple shell commands finish, with no way for users to unstick the session without a full restart.
5. **#21968: Model ignores custom skills and sub-agents by default** (P2, 6 comments) https://github.com/google-gemini/gemini-cli/issues/21968  
   Breaks user custom workflows: the model will not invoke pre-configured gradle, git or other custom subagents unless the user explicitly commands it to, even for perfectly matching task profiles.
6. **#21983: Browser subagent fails completely on Wayland** (P1, 4 comments) https://github.com/google-gemini/gemini-cli/issues/21983  
   A widespread compatibility pain point that blocks all Linux Wayland desktop users from accessing the browser automation subagent.
7. **#26522: Auto Memory retries low-signal sessions indefinitely** (P2, 5 comments) https://github.com/google-gemini/gemini-cli/issues/26522  
   Wastes background compute and accumulates unnecessary API costs by repeatedly reprocessing empty, low-value user sessions that the agent already determined have no useful memory content.
8. **#22745: Assess impact of AST-aware file reads, search and codebase mapping** (P2 Epic, 7 comments) https://github.com/google-gemini/gemini-cli/issues/22745  
   Top power user requested enhancement to eliminate unnecessary token bloat and extra agent turns for code investigation on large monorepos.
9. **#24246: 400 errors when loading >128 custom tools** (P2, 3 comments) https://github.com/google-gemini/gemini-cli/issues/24246  
   Blocks advanced users with large custom skill and plugin libraries from running the CLI, as it does not dynamically prune the tool list to stay under model schema limits.
10. **#26525: Add deterministic redaction for Auto Memory, reduce logging** (P2 Security, 4 comments) https://github.com/google-gemini/gemini-cli/issues/26525  
   Fixes a privacy gap where secret redaction logic only runs after sensitive local transcript content is already sent to the background extraction LLM.

## 4. Key PR Progress
1. **#2677: Fix symlink path traversal attacks** (P0 Security, CLOSED) https://github.com/google-gemini/gemini-cli/pull/2677  
   Patches a critical long-unpatched vulnerability that let attackers bypass workspace access restrictions via symbolic links to read arbitrary files outside the allowed working directory.
2. **#28981: Stop session cleanup from deleting unrelated sessions on short ID collision** (CLOSED) https://github.com/google-gemini/gemini-cli/pull/28981  
   Resolves a confirmed user data loss bug where expired session cleanup would incorrectly delete non-expired sessions sharing the same 8-character short ID suffix.
3. **#28983: Detect mixed line endings instead of flagging any file with a single CRLF as fully CRLF** (OPEN) https://github.com/google-gemini/gemini-cli/pull/28983  
   Improves cross-platform text file handling for mixed Unix/Windows line ending projects, preventing broken file formatting for teams working across OSes.
4. **#28975: Preserve glob results for symlinked workspace roots** (OPEN) https://github.com/google-gemini/gemini-cli/pull/28975  
   Fixes broken file listing for macOS users who run projects under `/tmp`, a path that is symlinked to `/private/tmp` by default and affected thousands of development workflows.
5. **#28973: Bump sandbox image from EOL Node.js 20-slim to supported Node.js 22-slim** (P1 Security, OPEN) https://github.com/google-gemini/gemini-cli/pull/28973  
   Eliminates unpatched security risks from running sandbox workloads on an end-of-life Node.js runtime that no longer receives official upstream security fixes.
6. **#28980: Clear OAuth callback timeout when server closes** (CLOSED) https://github.com/google-gemini/gemini-cli/pull/28980  
   Fixes a leaked 5-minute timer that prevented

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest | 2026-08-24
*Source: github.com/github/copilot-cli*

---

## 1. Today's Highlights
Today’s digest leads with the release of prerelease version v1.0.81-8, adding support for Grok 4.6’s highest `xhigh` reasoning tier and eliminating the need for manual plugin updates when editing local directory-sourced plugins. The 15 recently updated community issues surface several 1.0.80 and 1.0.81 prerelease regressions affecting core memory, context compaction, and Windows plugin workflows, alongside actionable feature requests to improve plan annotation and telemetry configuration. Only one low-stakes external documentation PR received updates in the 24-hour window.

## 2. Releases
GitHub Copilot CLI v1.0.81-8 (prerelease, published 2026-08-23):
- **Added**: Official support for the `xhigh` reasoning effort tier for the Grok 4.6 model
- **Improved**: Path-sourced plugins in local directory marketplaces now load directly from their source directory, so edits to plugin code take effect after `/restart` or a new session launch, removing the prior requirement to run `/plugin update`
- Partial changelog note: In-progress work to add discoverability for skills and custom agents (full details pending final release notes)

## 3. Hot Issues
10 high-impact updated issues from the last 24 hours:
1. [Issue #2306](https://github.com/github/copilot-cli/issues/2306): Intermittent enterprise authorization failures. This long-running enterprise pain point (9 comments, 3 👍) hits users randomly 2-3x per week even with correct organization policies configured, disrupting daily production Copilot workflows, with community users actively sharing troubleshooting logs to narrow the root cause.
2. [Issue #4535](https://github.com/github/copilot-cli/issues/4535): `store_memory` tool fails on v1.0.81 prereleases with `Instance id is required`. A breaking regression for custom agent developers, all persistent memory writes fail in the new prerelease because the native memory runtime is missing a required parameter, breaking all custom memory-enabled agent use cases.
3. [Issue #4572](https://github.com/github/copilot-cli/issues/4572): Background compaction drops completed parallel GPT tool results and triggers HTTP 400 errors. A critical 1.0.80 regression for long-running autopilot sessions: fully executed tool outputs are lost during automatic context compaction, causing failed runs even when all underlying work completed successfully.
4. [Issue #4570](https://github.com/github/copilot-cli/issues/4570): Windows plugin install/update fails with "Access is denied" while VS Code is running. A cross-plugin compatibility bug for Windows users, file locks from the VS Code Copilot extension block all CLI plugin management operations, with no workaround other than fully closing VS Code.
5. [Issue #4566](https://github.com/github/copilot-cli/issues/4566): Agents repeatedly acknowledge work without executing tool actions. A 1.0.80 behavior regression for GPT-5.3-codex users (1 👍): agents get stuck in a loop confirming they will run a required action but never invoke the specified tool, breaking fully unassisted autopilot functionality.
6. [Issue #4571](https://github.com/github/copilot-cli/issues/4571): Context compaction triggers at 50% for GPT-5.6 Luna Max. A usability pain point for high-token model users, aggressive compaction fires even for tiny trivial tasks, wasting runtime and shortening the usable context window for large workloads.
7. [Issue #4560](https://github.com/github/copilot-cli/issues/4560): Model "auto" mode always runs with reasoning effort disabled, ignoring user configuration. This breaks expected behavior for users relying on the dynamic model router: all requests run with null reasoning effort regardless of explicit user settings, negating performance benefits of high-effort reasoning for complex tasks.
8. [Issue #4561](https://github.com/github/copilot-cli/issues/4561): ACP mode returns `stopReason: "end_turn"` instead of `"cancelled"` for user-canceled sessions. Breaks compliance with the official ACP protocol specification, as third-party ACP client tools cannot correctly distinguish between user-aborted turns and successfully completed turns, breaking custom control plane integrations.
9. [Issue #4562](https://github.com/github/copilot-cli/issues/4562): MCP reload reuses the initial session config after `.github/mcp.json` is edited. Blocks fast iteration on custom MCP server configurations: users have to fully restart their Copilot session to apply fixes to broken MCP server definitions, rather than reloading mid-session.
10. [Issue #4568](https://github.com/github/copilot-cli/issues/4568): `--cloud` owner picker hangs, reconnects crash, and task polling hits 429 rate limits. Breaks the cloud Copilot CLI remote execution workflow entirely for many users, with cascading failures including endless loading, session disconnects, and API throttling.

## 4. Key PR Progress
Only 1 pull request received updates in the 24-hour reporting window, with no other core project PRs modified during this period:
1. [PR #4573](https://github.com/github/copilot-cli/pull/4573): Rename README.md to README.mdmain. A trivial, non-functional documentation rename submitted by an external contributor, with no linked feature or bug fix, and no maintainer feedback provided as of publication. All bugfix and feature PRs for the issues listed above remain unmerged as of this digest.

## 5. Feature Request Trends
Three top requested feature directions emerged from recent community issues:
1. **Local development iteration improvements**: Users want inline annotations for generated plans to eliminate verbose feedback restatement, dynamic MCP config reloads to pick up local `.github/mcp.json` changes without session restarts, and official support for unencrypted localhost OTLP telemetry endpoints for self-hosted observability stacks.
2. **Model configuration flexibility**: Community members are requesting full exposed controls to adjust reasoning effort across all model modes (including the `auto` routing mode) and user-configurable context compaction thresholds for high-token large context models.
3. **Third-party integration parity**: Users are requesting full ACP protocol compliance fixes, plus sync improvements for GitHub Mobile remote Copilot sessions to eliminate persistent "Queued for Copilot" state after responses are already generated.

## 6. Developer Pain Points
Recurring high-frequency frustrations from the last 24 hours:
1. **Prerelease stability gaps**: Recent 1.0.80 and 1.0.81 prereleases have introduced multiple uncaught regressions affecting core features including memory storage, context compaction, and agent tool execution that break no-touch autopilot use cases.
2. **Platform-specific friction**: Windows users face unaddressed file lock conflicts between VS Code and the Copilot CLI that block all plugin management operations, with no built-in mitigation.
3. **Enterprise workflow inconsistency**: Intermittent, hard-to-diagnose policy authorization errors for enterprise Copilot users create unplanned, recurring workflow disruptions.
4. **Suboptimal default model behavior**: Aggressive 50% context compaction thresholds for high-capability large context models waste user runtime and reduce usable context capacity even for small tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-08-24
Source: github.com/MoonshotAI/kimi-cli
---

## 1. Today's Highlights
No new official releases of Kimi Code CLI shipped in the 24-hour tracking window, with all community activity centered on updates to long-running feature requests, a high-priority paid tier usage billing concern, and two new open pull requests targeting multi-device workflow support and plugin security clarity. The popular cross-session memory system feature request picked up new community comments after a 6-month lull, while a power user’s documented investigation of reduced token allowances is drawing attention from other Vivace tier subscribers running agentic coding workloads.

## 2. Releases
No new stable, beta, or pre-release versions of `kimi-cli` were published in the 24 hours prior to this digest.

## 3. Hot Issues
Only 3 total issues received updates in the tracking window, all listed below in order of community relevance:
1. [#1283 [OPEN] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283): This 27-comment high-engagement enhancement request, updated after months of inactivity, would add both AI-managed automatic context notes and user-defined manual memory rules to eliminate redundant context re-entry for recurring work sessions. It is one of the most upvoted unimplemented feature requests in the repo, and directly addresses core usability pain points for daily CLI users.
2. [#2604 [OPEN] Effective weekly allowance appears reduced ~3–5× without announcement — instrumented before/after data. Terms change, or metering regression?](https://github.com/MoonshotAI/kimi-cli/issues/2604): Submitted by a Vivace tier member with fully audited client-side token tracking data, this issue flags unannounced reductions to paid user usage limits that threaten to break production agentic coding pipelines. Three recent public comments confirm other power users have observed the same unplanned throttling behavior.
3. [#2484 [CLOSED] Empty submission](https://github.com/MoonshotAI/kimi-cli/issues/2484): A zero-activity empty issue that was closed silently by maintainers, with no public discussion or related changes attached.

## 4. Key PR Progress
Only 2 total pull requests received updates in the tracking window, both listed below:
1. [#2616 [OPEN] Add Build Remote Agent phone pairing (gbr/1)](https://github.com/MoonshotAI/kimi-cli/pull/2616): This community-contributed PR adds support for the open MIT-licensed GrokBuildRemote agent protocol, allowing paid iOS/Android Build Remote Agent mobile apps to spectate, review, and veto actions in active local Kimi Code CLI desktop sessions. The mobile client acts as a secondary governance layer for agentic coding workflows, not a primary orchestrator.
2. [#2614 [OPEN] docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614): This documentation-only PR formalizes the official Kimi Code CLI plugin contract, including rules for root `plugin.json` schemas, command tool permissions, the `inject` functionality, and standard installation paths under `~/.kimi/plugins/`. It resolves longstanding ambiguity for third-party developers building custom extensions for the platform.

## 5. Feature Request Trends
The most requested feature direction from active community discussion is native persistent, cross-session context management: users are asking for a tiered memory system that automatically stores project-specific patterns, learned coding conventions, and user preferences, alongside optional manual controls to edit or delete stored context entries. A secondary emerging trend is support for extended multi-device workflow integrations, with developers requesting official support for remote monitoring and intervention tools for long-running headless Kimi Code CLI agent tasks.

## 6. Developer Pain Points
Three recurring high-impact pain points surfaced from recent community updates:
1. Unannounced, undocumented changes to paid tier usage limits and metering logic, with power users reporting inconsistent token quota calculations that break planned, production agent workloads.
2. No native built-in persistent memory functionality, forcing most heavy users to build custom external context injection scripts to avoid re-stating full project requirements for every new CLI session.
3. Lack of centralized, official documentation for the Kimi Code CLI third-party plugin ecosystem, creating unnecessary friction for developers looking to build custom extensions and tools for the platform.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-08-24
*Source: github.com/anomalyco/opencode*

---

## 1. Today's Highlights
The OpenCode community focused heavily on session reliability fixes this 24-hour window, with multiple in-development patches targeting longstanding silent session exit, phantom tool call, and stream error stuck states. The highest-voted open feature request in recent history (for configurable mid-run prompt handling) continues to gain traction at 76 👍, while the automated bulk PR cleanup batch landed 19 merged fixes for TUI UX, MCP runtime, markdown rendering, and core VCS functionality. Multiple active user reports highlight recent regressions with the public Zen API free tier and Big Pickle hosted model quality.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#1034 (CLOSED) Local Ollama tool calling either not calling or failing outright](https://github.com/anomalyco/opencode/issues/1034)**: This high-traffic 13-month old bug with 31 comments and 16 👍 affecting self-hosted users running tool-call capable models like qwen3:32b is now marked resolved, resolving a major pain point for local LLM deployments.
2. **[#41469 (OPEN) Session silently stops on empty LLM response (finish: unknown, 0 tokens)](https://github.com/anomalyco/opencode/issues/41469)**: 14 comments from users reporting silent session termination with zero error output when providers return empty completions, creating confusing "the app froze" experiences with no path to manual recovery.
3. **[#32157 (OPEN) [2.0] [FEATURE]: Configurable mid-run prompt delivery: queue vs steer, with compaction-aware steer semantics](https://github.com/anomalyco/opencode/issues/32157)**: The highest-voted open feature at 76 👍, requested by users who want explicit controls for queuing, interrupting, or overriding the LLM mid-generation rather than the current default interrupt behavior that can drop work in progress.
4. **[#32366 (OPEN) bug: UI stuck on 'thinking' indefinitely after stream error, no error displayed or state recovery](https://github.com/anomalyco/opencode/issues/32366)**: 7 comments from desktop users who are forced to fully restart the application to recover after a socket error or API call failure breaks the generation stream, leading to lost progress.
5. **[#44300 (OPEN) Zen API: x-preview-f-free / ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools](https://github.com/anomalyco/opencode/issues/44300)**: Active 2026-08-23 regression breaking all free-tier OpenCode public inference users that enable tool calling on Ox Alpha and Big Pickle models, with no official workaround posted as of update.
6. **[#38923 (OPEN) MCP tool results: structuredContent is dropped — only content[].text reaches the model](https://github.com/anomalyco/opencode/issues/38923)**: Bug breaking all MCP tools that return structured JSON payloads instead of plain text summaries, eliminating support for popular use cases like structured database query returns and Kubernetes resource data dumps.
7. **[#44513 (OPEN) Windows: embedded Bun 1.3.14 predates oven-sh/bun#35083 — opencode.exe segfaults whenever nProtect GameGuard (Helldivers 2) is running](https://github.com/anomalyco/opencode/issues/44513)**: Niche but highly visible crash report traced to an unpatched Bun runtime bug, drawing community amusement and quick consensus that a Bun version bump will resolve the issue.
8. **[#29094 (OPEN) Reading chat history during LLM responses still re-snaps the viewport](https://github.com/anomalyco/opencode/issues/29094)**: Reopened 6-month old bug (auto-closed due to inactivity) with 6 comments, as users still cannot scroll up to read old chat history mid-LLM-generation without the viewport snapping back to the bottom on every new token.
9. **[#44528 (OPEN) Bug Report, network error](https://github.com/anomalyco/opencode/issues/44528)**: Fresh 1.18.21 Windows desktop regression with 7 comments, where users launching the app after days of inactivity hit unresolvable network errors when connecting to the Big Pickle model.
10. **[#44101 (OPEN) Desktop: two clones of same repo permanently show wrong project name/path - restart does not fix](https://github.com/anomalyco/opencode/issues/44101)**: 3 comments from users with multiple local checkouts of the same Git repo, who have all their projects merged under a single shared ID derived from the Git remote URL, leading to lost project context.

## 4. Key PR Progress
1. **[#44536 (OPEN) feat(session): auto-retry empty stop responses](https://github.com/anomalyco/opencode/pull/44536)**: New session reliability patch that adds automatic retries for edge cases where providers return a 0-token empty completion with a valid `finish_reason: stop`, eliminating the most common "why did it stop mid-thought" user experience.
2. **[#44369 (OPEN) fix(desktop): reconnect to elected service](https://github.com/anomalyco/opencode/pull/44369)**: Fixes desktop daemon disconnection logic, so the app automatically re-resolves the active daemon instance and re-establishes all SSE/HTTP/PTY streams after network blips without requiring a full app restart.
3. **[#44535 (OPEN) fix(session): stop creating phantom "unknown" tool parts on re-emitted deltas](https://github.com/anomalyco/opencode/pull/44535)**: Closes #33618, eliminating spurious locally-generated invalid tool call errors that were incorrectly being passed to users as LLM output bugs.
4. **[#30224 (OPEN) fix(llm): include expected and received keys in tool schema error message](https://github.com/anomalyco/opencode/pull/30224)**: Improves bad tool argument error feedback by showing exact mismatches between expected and received keys, allowing the LLM to self-correct invalid calls without manual user intervention.
5. **[#38539 (CLOSED) fix(tui): preview written file content](https://github.com/anomalyco/opencode/pull/38539)**: Major TUI UX improvement that replaces one-line tool write success messages with full red/green diff previews of file changes, matching the patch operation rendering experience.
6. **[#38533 (CLOSED) fix(core): reload MCP config updates](https://github.com/anomalyco/opencode/pull/38533)**: Adds automatic MCP server config refresh on edits, removing the requirement to fully restart OpenCode to apply new or modified MCP server setups.
7. **[#38508 (CLOSED) fix(mcp): prevent null parameters in MCP tool calls for OpenAI-compatible providers](https://github.com/anomalyco/opencode/pull/38508)**: Resolves longstanding MCP compatibility bugs for providers like MiniMax that do not handle untyped parameters correctly, breaking tool call workflows.
8. **[#38504 (CLOSED) feat(cli): stream incremental reasoning/text deltas in run --format json](https://github.com/anomalyco/opencode/pull/38504)**: Adds realtime streaming of reasoning tokens to the CLI JSON output mode, eliminating the multi-minute silent blank stream users encountered when running models with long thinking phases.
9. **[#38536 (CLOSED) feat(tui): expose native OpenCode theme](https://github.com/anomalyco/opencode/pull/38536)**: Ships the new official `opencode-v2` native theme for TUI users, while maintaining full backwards compatibility for all existing custom themes.
10. **[#38486 (CLOSED) fix(ui): render bold/italic closed by CJK punctuation in markdown](https://github.com/anomalyco/opencode/pull/38486)**: Fixes CommonMark parsing for East Asian language users, where bold/italic markers adjacent to CJK punctuation were previously not rendered correctly.

## 5. Feature Request Trends
1. **Priority user control over mid-run prompt behavior**: The 76-upvote request for queue/steer/break prompt routing defines the leading feature ask, as users want full flexibility to handle new user inputs during in-progress LLM generation instead of the current hardcoded interrupt behavior.
2. **Exposed tuning for retry and backoff policies**: Users running OpenCode against self-hosted or third-party LLM providers are requesting configurable `maxRetries`, `initialDelay`, `backoffFactor` settings to avoid premature session aborts during transient rate limiting events.
3. **Improved multi-project identity management**: Multiple users are requesting configurable project ID logic, to prevent unrelated local checkouts of the same Git remote from being incorrectly merged into a single shared workspace.
4. **Manual context limit overrides for custom models**: Self-hosted Ollama users want the ability to manually set context window sizes for custom local models, overriding the current 260k hard cap that underreports the 960k+ context available on many popular large models.

## 6. Developer Pain Points
1. **Unresolved public Zen API outages**: Multiple users report persistent 5+ day unresolvable rate limits on the OpenCode public Zen base URL, even with fresh API keys, new accounts, and different networks, blocking all external tool integration.
2. **Recurring session reliability gaps**: Silent empty response exits, indefinite "thinking" stuck states after stream errors, and no built-in recovery options force users to fully restart the app multiple times per session, losing progress.
3. **Ollama local tool calling regressions**: Popular local models like Qwen3 are still frequently failing to trigger tools out of the box even with explicit tool call support, creating extra friction for airgapped self-hosted deployments.
4. **Recent Big Pickle quality regression**: Multiple users report the previously stable Big Pickle model now stops mid-thought every 2 minutes, requiring constant manual "keep going" prompts to finish full coding tasks.
5. **Cross-platform UX papercuts**: High-frequency minor issues including missing scrollbars

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-24
*Source: github.com/badlogic/pi-mono*

---

## 1. Today's Highlights
No new official releases of the pi-mono stack shipped in the 24-hour reporting window, but the core team merged 12 high-priority pull requests resolving longstanding local LLM compatibility gaps, edge-case streaming failures for OpenAI-compatible providers, and silent session hang bugs. Standout progress includes full resolution of the widely reported llama.cpp router model visibility defect, a proposed optional native PowerShell tool for Windows users to eliminate Git Bash path handling frictions, and multiple extension API upgrades that unlock more capable custom agent workflows. Two community-proposed TUI interactivity features (component-level mouse events, per-block tool output expansion) have advanced to active PR review stage.

## 2. Releases
No new stable or pre-release builds were published to the pi-mono repository in the reporting window.

## 3. Hot Issues
1. **#7683 [CLOSED] pi-tui: let components receive mouse events on their own rows** (11 comments) | https://github.com/earendil-works/pi/issues/7683  
   The highest-engagement issue this period, this feature request enables developers to build rich clickable terminal UI widgets without modifying global TUI logic. Community feedback is uniformly positive, and a full implementation PR has already been submitted for review.
2. **#8167 [CLOSED] [bug] Cannot pick a model with built-in llama.cpp support** (10 comments) | https://github.com/earendil-works/pi/issues/8167  
   A high-impact bug that blocked local LLM users from viewing llama-server models in the default model picker, requiring manual `\llama` commands to load models for weeks after the 0.84 release. Dozens of local deployment users confirmed they hit this bug post-upgrade.
3. **#7885 [CLOSED] npm search not indexing newly published pi-packages (no new package names since Aug 4)** (7 comments) | https://github.com/earendil-works/pi/issues/7885  
   A critical ecosystem health bug that broke the pi.dev public package gallery, preventing extension developers from discovering new pi-packages uploaded over the past 3 weeks. Maintainers marked it as top priority for the ecosystem team.
4. **#5932 [OPEN] exposing ctx.navigateTree() to agents, as it exists on ExtensionCommandContext but not ExtensionContext** (7 comments, 2 👍) | https://github.com/earendil-works/pi/issues/5932  
   A highly requested extension API improvement that unlocks full-featured custom `/goal` workflow implementations, which cannot be built with the current limited ExtensionContext. The team scheduled this for design discussion in the next sprint planning meeting.
5. **#7724 [OPEN] Cold restore replays an overflow assistant removed by live recovery** (4 comments) | https://github.com/earendil-works/pi/issues/7724  
   A subtle session persistence bug that causes duplicate invalid history entries after context overflow compaction, which breaks downstream custom extension context logic. A core agent extension maintainer reported this as a top blocker for their workflow product.
6. **#8457 [CLOSED] Invoke skills mid-sentence like prompt templates (/name args after the first line)** (2 comments, 2 👍) | https://github.com/earendil-works/pi/issues/8457  
   A popular quality-of-life request for power users that would let them inject skill outputs inline mid-prompt, eliminating the current requirement to place all `/skill` commands at the start of a message.
7. **#8537 [CLOSED] Kimi (moonshotai-cn) 400s on replayed tool history: orphaned tool messages, interleaved user messages, duplicate tool_call_id** (2 comments) | https://github.com/earendil-works/pi/issues/8537  
   A blocking bug for regional Kimi users that prevented them from reusing persisted sessions. The bug only surfaced for strict OpenAI-compatible providers that enforce exact message ordering, and never appeared for lenient upstream providers like OpenAI or DeepSeek.
8. **#8541 [CLOSED] OpenAI-compatible 429 from Nous Ox Alpha is surfaced as generic ERROR** (2 comments) | https://github.com/earendil-works/pi/issues/8541  
   A troubleshooting pain point for OpenRouter users that obscured rate limit errors, making it impossible for users to distinguish transient throttling from fatal provider failures.
9. **#8531 [CLOSED] Auto-retry stalls silently after consecutive 'Request timed out' errors — session hangs indefinitely** (1 comment) | https://github.com/earendil-works/pi/issues/8531  
   A frustrating UX bug for users on high-latency custom self-hosted LLM deployments, where the unbound exponential backoff retry loop would leave sessions completely unresponsive with no status feedback.
10. **#8523 [CLOSED] @ file autocomplete finds nothing for absolute paths with drive letters on Windows** (1 comment) | https://github.com/earendil-works/pi/issues/8523  
    A longstanding Windows papercut that breaks quick file reference workflows for users pasting full absolute paths on their local machines. The team triaged it for inclusion in the next Windows compatibility patch.

## 4. Key PR Progress
1. **#8536 [CLOSED] fix(ai): normalize tool-result history for strict OpenAI-compatible providers** | https://github.com/earendil-works/pi/pull/8536  
   Fully resolves the Kimi 400 session replay bug by normalizing tool message ordering, removing orphaned tool entries, and deduplicating tool_call_ids for strict providers that do not tolerate lenient history formatting.
2. **#8535 [CLOSED] feat(coding-agent): For llama.cpp, also show unloaded models in `/model`** | https://github.com/earendil-works/pi/pull/8535  
   Delivers on the widely requested llama.cpp UX improvement, letting users select unloaded models directly from the model picker, which triggers on-demand loading without any manual setup, fully closing #8167.
3. **#8032 [OPEN] feat(tui): let components receive mouse events on their own rows** | https://github.com/earendil-works/pi/pull/8032  
   Implements the full `Component.onMouse(event)` hook with relative row/col coordinates, letting individual TUI components handle click events without modifying global scroll or selection logic.
4. **#8512 [OPEN] feat(coding-agent): add optional PowerShell tool** | https://github.com/earendil-works/pi/pull/8512  
   A major Windows platform improvement that replaces the existing Git Bash default with a native PowerShell runtime, eliminating months of accumulated path translation bugs that break cross-platform tool

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-08-24
Official status summary for the open-source AI code assistant developer community.

---

## 1. Today's Highlights
The first 0.22.0 nightly build was published over the last 24 hours, kicking off the next feature development cycle focused on AI code review workflow hardening and enterprise multi-user integration. Maintainers closed a critical high-severity CI/CD security vulnerability related to PAT-bearing job runner isolation, and 10+ top community-reported bugs including Vertex AI Application Default Credentials auth failures are now triaged for patch releases coming in the next 7 days. Multiple new native third-party chat channel integrations are approaching final review for inclusion in the next stable minor release.

## 2. Releases
### v0.22.0-nightly.20260823.1007bcacfc
[Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260823.1007bcacfc)
This initial 0.22 cycle nightly includes the first web-shell fix that passes the session workspace CWD when opening sessions from the overview panel via [PR #9730](https://github.com/QwenLM/qwen-code/pull/9730), serving as a base for all upcoming new feature commits targeted at the 0.22 stable release.

## 3. Hot Issues
| Issue Link | Priority & Status | Summary & Community Context |
|------------|-------------------|------------------------------|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | P3 Closed | The highest-discussed item (13 comments) proposes a Direct External Context Provider Profile for admin-managed private monorepo shared context, which addresses a top unmet need for enterprise engineering teams running large codebases with shared repository context access controls. |
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | P2 Open | 11 comments from affected users report frequent 120s "no stream activity" errors mid-generation after 19 chunks on v0.19.3, breaking long code generation and review workflows for end users. The issue has 1 upvote from affected users. |
| [#8625](https://github.com/QwenLM/qwen-code/issues/8625) | P2 Open | 8 comments confirm that Chinese Pinyin input previews are unreadable in the Windows terminal TUI, a high-impact UX bug for non-Chinese locales running Qwen Code on Windows. |
| [#9089](https://github.com/QwenLM/qwen-code/issues/9089) | P1 Closed | A critical CI security flaw where PAT-bearing jobs shared runners with untrusted PR branch code received 7 comments, and was fully resolved to eliminate the OSS project's risk of credential exfiltration via malicious PRs. |
| [#9827](https://github.com/QwenLM/qwen-code/issues/9827) | P2 Open | 4 comments confirm that `permissions.allow` tool allowlists do not actually filter the full tool schema set sent to the LLM, creating a unexpected permission bypass risk for enterprise restricted deployments. |
| [#9016](https://github.com/QwenLM/qwen-code/issues/9016) | P2 Closed | 4 comments from GCP users verified the fix for Vertex AI Application Default Credentials, which previously forced users to use an incompatible API key that broke native GCP IAM auth flows. |
| [#9219](https://github.com/QwenLM/qwen-code/issues/9219) | P2 Open | 5 comments note that `/review` presubmit duplicate detection only matches exact line numbers, missing multi-line overlapping review findings and creating false "no conflict" results for code review output. |
| [#9743](https://github.com/QwenLM/qwen-code/issues/9743) | P3 Open | 3 comments from users request drag-and-drop file attachment support in the VS Code companion, a parity feature with GitHub Copilot Chat widely requested for faster reference context uploads. |
| [#9831](https://github.com/QwenLM/qwen-code/issues/9831) | Triage Open | 2 comments from the community ask for clarification on the project's relation to the `craft-agents-oss` repository, noting shared UI and session infrastructure that maintainers are now documenting publicly. |
| [#8586](https://github.com/QwenLM/qwen-code/issues/8625) | P2 Open | 4 comments from power users request explicit background agent `activeWork` tracking and daemon crash recovery, a feature that will eliminate hanging long-running background tasks that outlive foreground user prompts. |

## 4. Key PR Progress
| PR Link | Status | Feature / Fix Description |
|---------|--------|---------------------------|
| [#9761](https://github.com/QwenLM/qwen-code/pull/9761) | Open / Autofix Ready | Adds recoverable deferred review suggestions that persist outside of GitHub PR pages, preserving AI review output for long convergence runs even if the user navigates away from the PR UI. |
| [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | Open / Autofix Ready | Ships a new native DingTalk Workspace channel integration, supporting DMs, @mentions, document mentions, and source-scoped sessions for enterprise teams using Alibaba's DingTalk collaboration platform. |
| [#9719](https://github.com/QwenLM/qwen-code/pull/9719) | Open | Unifies the VS Code companion conversation timeline renderer with the shared WebShell transcript component, eliminating duplicated UI code and ensuring identical conversation rendering across browser and IDE clients. |
| [#9768](https://github.com/QwenLM/qwen-code/pull/9768) | Open / Autofix Ready | Refactors `/review` diff coverage tracking into a sealed classified ledger that carries per-chunk gap metadata, drastically improving auditability of AI code review runs for compliance use cases. |
| [#9565](https://github.com/QwenLM/qwen-code/pull/9565) | Open / Autofix Ready | Adds a new customizable output-style layer to the system prompt, with 4 built-in modes (Concise, Proactive, etc.) that let users globally set agent output behavior for their entire session without custom prompt hacks. |
| [#9802](https://github.com/QwenLM/qwen-code/pull/9802) | Open / Autofix Ready | Adds an async `prepareSubmit` hook for embedded Web Shell integrations, letting enterprise host apps modify prompt content pre-submission to inject custom internal context before the LLM request is sent. |
| [#9739](https://github.com/QwenLM/qwen-code/pull/9739) | Open / Autofix Ready | Automatically binds user sessions to PRs created via `gh pr create` inside the Qwen Code shell, closing a long-standing gap in the session-to-PR linking feature that previously required manual association. |
| [#9793](https://github.com/QwenLM/qwen-code/pull/9793) | Open / Autofix Ready | Fixes a critical bug where nested sub-agent user approvals launched from background parent agents were never surfaced to the UI, causing indefinite hangs on long-running multi-agent workflows. |
| [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | Open / Autofix Ready | Fixes long-standing terminal viewport alignment by bottom-aligning short conversation content, moving the empty blank gap from between the last message and input composer to the top of the terminal buffer. |
| [#9815](https://github.com/QwenLM/qwen-code/pull/9815) | Open | Eliminates ENOTEMPTY test flakiness in the ACP cron integration tests by killing the full process tree on cleanup, instead of only terminating the direct child process that spawns background workers. |

## 5. Feature Request Trends
The top requested feature directions distilled from recent community input are:
1.  **Enterprise monorepo context management**: Admin-controlled shared external context profiles, centralized single-source-of-truth for multi-language SDK configuration enums, and fine-grained permission control for team deployments.
2.  **Deterministic AI code review workflows**: Migrating `/review` orchestration logic from model-driven execution to the project's native workflow engine, adding persistent memory for user-selected review effort levels, and implementing a formal exit path for review loops that keep generating critical findings indefinitely.
3.  **Background agent reliability**: Daemon-side active work tracking, automatic recovery for crashed long-running background tasks, and consolidation of duplicated local control implementations across separate CLI and Tauri builds.
4.  **Third-party collaboration channel expansion**: Native out-of-the-box support for additional team chat platforms beyond existing Slack and WeChat integrations, starting with the in-progress DingTalk Workspace channel.

## 6. Developer Pain Points
Recurring high-priority frustrations reported by users:
1.  **Stream interruption failures**: The 120s no-activity stream timeout bug on v0.19.x is the top-reported functional defect, breaking long code generation and review sessions for a large subset of active users.
2.  **Permission control gaps**: Tool allowlist configurations do not restrict the full set of tool schemas sent to the LLM, creating unexpected privilege escalation risks for enterprise teams running restricted agent deployments.
3.  **Cross-platform UX inconsistencies**: Unreadable Chinese Pinyin input previews on Windows terminals, non-unique React key rendering errors for macOS users with custom self-hosted base URLs, and broken bold markdown rendering for content wrapped in CJK punctuation characters.
4.  **Integration compatibility bugs**: Previously broken GCP Vertex AI ADC authentication flows, and SDK DaemonClient calls failing when using relative same-origin base URLs for embedded Web Shell deployments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest | 2026-08-24
Official repository: https://github.com/Hmbown/DeepSeek-TUI

---

## 1. Today's Highlights
The project officially announced its public rebrand to **CodeWhale** from Shannon Labs, marking the full deprecation of the legacy `deepseek-tui` npm package with no further updates planned for the old distribution. The v0.9.11 release shipped 24 hours ago with critical security and onboarding fixes, while the v0.9.12 milestone tracker went live with non-negotiable P0 safety guardrails including bounded unattended run spend limits to eliminate runaway cost risks. Community activity spiked around ongoing refactors to the 771k-line Rust codebase that will unlock provider-agnostic support for 10+ LLM vendors beyond DeepSeek.

## 2. Releases
### v0.9.11 (Latest, 2026-08-23)
The first public release under the new CodeWhale identity:
- All technical identifiers for commands, npm packages, and release assets use the lowercase `codewhale` naming convention
- Added credential-aware redaction for `read` and shell tool outputs before data is passed to LLMs
- Fixed pre-tag release verification gaps for tool output and runtime state truthfulness
- Legacy `deepseek-tui` npm package is fully deprecated and locked to v0.8.x legacy versions

## 3. Hot Issues (Top 10 Notable)
1. **#3368 v0.9.3 Security hardening public tracker** (29 comments)  
   https://github.com/Hmbown/CodeWhale/issues/3368  
   Central public gate for all CodeQL, security advisory, and integration security fixes, designed to avoid publishing exploit details publicly while giving users full visibility into the v0.8.64 security release roadmap.
2. **#4326 Post 32-worker cancellation RSS bounding** (6 comments)  
   https://github.com/Hmbown/CodeWhale/issues/4326  
   Performance issue impacting power users running high-fanout subagent storms, designed to distinguish allocator high-water retention from actual runtime leaks and bound post-cancel memory usage.
3. **#5573 v0.9.12 milestone tracker** (2 comments)  
   https://github.com/Hmbown/CodeWhale/issues/5573  
   Newly published central tracker for the upcoming v0.9.12 release, listing all P0 safety and user experience fixes in a public checklist for community visibility.
4. **#2327 Unofficial CodeWhale extension copyright concerns** (2 comments)  
   https://github.com/Hmbown/CodeWhale/issues/2327  
   User-reported issue calling out two unvetted, trademark-infringing CodeWhale extensions on the VS Code Marketplace, to protect community users from malicious or low-quality copycat tools.
5. **#1990 US-first Cloudflare/AWS remote workbench lane** (3 comments)  
   https://github.com/Hmbown/CodeWhale/issues/1990  
   Top global user request to expand the currently China-focused (Tencent Lighthouse / Feishu) remote deployment stack to a natural, low-cost infrastructure option for users outside the Chinese ecosystem.
6. **#5583 Bounded repair for responseSchema failures** (1 comment)  
   https://github.com/Hmbown/CodeWhale/issues/5583  
   Workflow reliability enhancement that prevents full run failures when LLMs return malformed JSON, while saving raw output receipts to simplify debugging of structured output issues.
7. **#5290 Broken clickable controls on non-English web routes** (3 comments)  
   https://github.com/Hmbown/CodeWhale/issues/5290  
   Localization bug impacting all non-English users of the CodeWhale docs and web app, where interactive UI elements stop working when users select non-English language routes.
8. **#5103 Rename legacy DeepSeekClient to provider-neutral types** (1 comment)  
   https://github.com/Hmbown/CodeWhale/issues/5103  
   Long-overdue refactor to clean up confusing legacy naming: the multi-provider HTTP client that works with OpenAI, Anthropic and other vendors is still incorrectly named `DeepSeekClient` in current code.
9. **#4069 .codewhaleignore privacy controls** (1 comment)  
   https://github.com/Hmbown/CodeWhale/issues/4069  
   High-priority trust feature that lets users exclude secrets, vendor directories, and local artifacts from agent context assembly, with similar behavior to `.gitignore` or Cursor's `.cursorignore`.
10. **#1985 Editor context bridge for IDE selections/diffs** (2 👍, 1 comment)  
    https://github.com/Hmbown/CodeWhale/issues/1985  
    Top-voted enhancement for IDE-first users, which eliminates manual copy-paste work by letting editors push selected code snippets, diagnostics and diffs directly into the CodeWhale TUI session.

## 4. Key PR Progress (Top 10)
1. **#5576 v0.9.12 WIP integration branch**  
   https://github.com/Hmbown/CodeWhale/pull/5576  
   24-commit work-in-progress integration branch for the v0.9.12 cycle, bundling all P0 fixes including runaway spend limits, approval scope bug fixes, and SSE error frame handling for Chat Completions endpoints.
2. **#5559 Pre-tag v0.9.11 tool output redaction fix** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/5559  
   Critical security fix that adds a credential-aware redaction policy for file read and shell command outputs, preventing accidental secret leaks to LLM providers.
3. **#5563 Fix onboarding to show all providers on first run** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/5563  
   Fixed a recent regression that hid hosted providers like DeepSeek behind a secondary keypress in the first-run setup flow, which incorrectly made new users think the tool only supported local Ollama models.
4. **#5545 Correct DeepSeek V4 off-peak weekend billing** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/5545  
   Adjusted pricing logic to use Beijing local time instead of UTC, matching DeepSeek's newly published 2026 off-peak billing rules that apply discounted rates for full 24-hour weekends.
5. **#5561 Auto-retry reasoning-only clean stops** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/5561  
   Major reliability fix for users of reasoning models like DeepSeek R1, which no longer dead-ends runs when a model returns only hidden reasoning content without a final answer or tool call, eliminating forced manual resubmissions.
6. **#5584 Persist child subagent approval receipts**  
   https://github.com/Hmbown/CodeWhale/pull/5584  
   Fixes a critical audit gap where subagent approval decisions were only stored in memory, by inheriting the session's durable approval receipt store for all child runtime instances.
7. **#5574 Add Build Remote Agent phone pairing**  
   https://github.com/Hmbown/CodeWhale/pull/5574  
   New optional feature that lets users pair their mobile phone as a spectator or control device for desktop CodeWhale sessions via QR code or 8-character verification code.
8. **#5524 Add multi-file read_lints LSP operation** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/5524  
   Exposes a new model-accessible tool to pull linting errors for multiple workspace files at once, reusing the existing LSP manager pool without extra language server lifecycle overhead.
9. **#4928 Add thinking_default_expanded TUI setting** (Merged)  
   https://github.com/Hmbown/CodeWhale/pull/4928  
   Quality of life feature for SSH/tmux users (who often have space key captured by their terminal), letting users configure reasoning blocks to render expanded by default.
10. **#5560 Add Sign in/Register header links to marketing site** (Merged)  
    https://github.com/Hmbown/CodeWhale/pull/5560  
    Adds clear account entry points for the hosted CodeWhale web app to both desktop and mobile marketing site navigation, improving hosted user onboarding flow.

## 5. Feature Request Trends
1. **Provider-agnostic architecture roadmap**: The highest collective priority is removing all legacy DeepSeek-specific hardcoded logic, including de-hardcoding provider and model registries, adding support for custom Responses API dialects for arbitrary OpenAI-compatible endpoints.
2. **Full code-intelligence tool surface**: Community requests are heavily focused on expanding the TUI's native development tooling, including LSP navigation, AST-backed structural code search, debugger breakpoint support, and first-class

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*