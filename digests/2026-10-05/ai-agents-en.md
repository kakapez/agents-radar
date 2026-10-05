# OpenClaw Ecosystem Weekly Digest 2026-10-05

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-05 01:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Weekly Project Digest (2026-10-05)
**Data Source:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
**Reporting Period:** 7 days ending 2026-10-05

---

## 1. Last 7 Days' Overview
OpenClaw maintained high development velocity this week, with 500 updated issues (350 active, 150 closed) and 500 updated PRs (309 open, 191 merged/closed). The project published 5 new releases, including a new stable version and extended-stable (LTS-equivalent) gateway updates, reflecting both active feature work and ongoing security/reliability maintenance. Key focus areas included update pipeline reliability, performance optimization for state and session management, and fixes for multi-agent and channel integration bugs. Community engagement remained strong, with active discussion on cost governance, memory system improvements, and multi-agent permission scoping. Overall project health is robust, with a steady cadence of bug fixes paired with forward-looking feature development.

---

## 2. Releases
5 new releases were published this week, spanning stable and extended-stable channels:

### v2026.9.8 (Stable)
- **Stats:** 58 commits, 43 PRs, 21 contributors
- **Details:** Latest stable release with full changelog available via [official release notes](https://docs.openclaw.ai/releases/2026.9)
- **Link:** [openclaw/openclaw Release v2026.9.8](https://github.com/openclaw/openclaw/releases/tag/v2026.9.8)

### v2026.9.7 (Stable)
- **Stats:** 518 direct commits, 2,818 PRs, 334 contributors
- **Details:** Major stable release with broad feature and bug fix updates; release notes available at [official docs](https://docs.openclaw.ai/rel)
- **Link:** [openclaw/openclaw Release v2026.9.7](https://github.com/openclaw/openclaw/releases/tag/v2026.9.7)

### Extended-Stable (Gateway-Only) Releases (LTS-equivalent)
Three extended-stable updates were released for the August 2026 baseline, focused on security patches, reliability fixes, performance improvements, and new model support:
- v2026.8.35: [openclaw/openclaw Release v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)
- v2026.8.34: [openclaw/openclaw Release v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34)
- v2026.8.33: [openclaw/openclaw Release v2026.8.33](https://github.com/openclaw/openclaw/releases/tag/v2026.8.33)

No breaking changes or mandatory migration steps were noted in the provided release data.

---

## 3. Project Progress
Of 191 merged/closed PRs this week, key advances include:

### Update & Installation Reliability
- **[PR #165257](https://github.com/openclaw/openclaw/pull/165257):** Fix `openclaw update` failures in unprivileged containers by falling back to byte copy when FICLONE ioctl is denied (resolves #164113)
- **[PR #165242](https://github.com/openclaw/openclaw/pull/165242):** Repair legacy config handling for identical-package updates, preventing post-admission config rejection
- **[PR #165233](https://github.com/openclaw/openclaw/pull/165233):** Prevent spurious CLI errors after successful in-place updates caused by stale cleanup code imports

### Performance Optimizations
- **[PR #165249](https://github.com/openclaw/openclaw/pull/165249):** Reduce retained worker task transport overhead by eliminating redundant message hops
- **[PR #165186](https://github.com/openclaw/openclaw/pull/165186):** Improve shared-state performance by attributing SQLite hold warnings and reusing integrity proofs
- **[PR #165221](https://github.com/openclaw/openclaw/pull/165221):** Bound transcript source reads to prevent 100+ MB heap spikes during large session history operations

### Bug Fixes
- **[PR #165210](https://github.com/openclaw/openclaw/pull/165210):** Fix Code Mode nested call failures when providers reuse tool-call IDs across responses
- **[PR #142888](https://github.com/openclaw/openclaw/pull/142888):** Fix live assistant text doubling for OpenAI-compatible providers that resend full content in deltas (resolves #136262)
- **[PR #144488](https://github.com/openclaw/openclaw/pull/144488):** Make memory embedding request timeouts configurable and recoverable, fixing permanent index stalls on slow providers

### UI/UX Improvements
- **[PR #164607](https://github.com/openclaw/openclaw/pull/164607):** Add channel identity link management to the Profile UI for gateway administrators
- **[PR #165199](https://github.com/openclaw/openclaw/pull/165199):** Fix overlapping sidebar pin editor and reorder grip controls

---

## 4. Community Hot Topics
The most actively discussed issues this week reflect core user priorities around cost control, runtime stability, and memory system behavior:

1. **Per-agent cost budget enforcement at the gateway level**  
   - **Issue:** [#42475](https://github.com/openclaw/openclaw/issues/42475) (25 comments, 1 👍)  
   - **Analysis:** Operators want native, gateway-level cost caps (daily/monthly) per agent to prevent runaway spending without external monitoring tools. This addresses a key operational pain point for multi-agent deployments, where current per-session tracking does not provide proactive budget guardrails.

2. **Zombie child process leak from hook/tool execution**  
   - **Issue:** [#97616](https://github.com/openclaw/openclaw/issues/97616) (17 comments, 1 👍)  
   - **Analysis:** Users report accumulating unreaped `openclaw-hooks`, `bash`, and `codex` child processes that degrade runtime performance over time. This is a high-priority stability concern for long-running gateway instances.

3. **Short-term recall retention eviction blocking memory promotion**  
   - **Issue:** [#150635](https://github.com/openclaw/openclaw/issues/150635) (17 comments, 0 👍)  
   - **Analysis:** The dreaming deep phase fails to promote memories to long-term storage once the 512-entry short-term cap is hit, due to nightly zero-recall entry ingestion. This breaks a core memory system feature for users with high session volume.

4. **Unbounded SQLite growth in memory core tables**  
   - **Issue:** [#114612](https://github.com/openclaw/openclaw/issues/114612) (16 comments, 0 👍)  
   - **Analysis:** `memory_index_chunks` and `memory_embedding_cache` tables grow without limit, risking disk exhaustion. This is a critical durability issue for production deployments with long uptime.

---

## 5. Bugs & Stability
Bugs reported/updated this week are ranked by severity (P0 > P1 > P2) and impact:

### P0 (Critical)
1. **[#164396](https://github.com/openclaw/openclaw/issues/164396):** OpenClaw 2026.9.8 fails to connect to local gateway after clean Windows 11 + Node 22 LTS install  
   - Impact: Onboarding failure for new Windows users; no fix PR linked yet
2. **[#160959](https://github.com/openclaw/openclaw/issues/160959):** Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression)  
   - Impact: Event loop starvation; no fix PR linked yet
3. **[#157415](https://github.com/openclaw/openclaw/issues/157415):** Doctor --fix refuses post-session plugin migrations for externally installed acpx and codex  
   - Impact: Migration failure for plugin users; no fix PR linked yet
4. **[#158390](https://github.com/openclaw/openclaw/issues/158390):** plugin-captures tmp directories not garbage collected, filling disk indefinitely  
   - Impact: Disk exhaustion; 1 👍 community support; no fix PR linked yet

### P1 (High)
1. **[#97616](https://github.com/openclaw/openclaw/issues/97616):** Zombie child process leak from hooks/tools (see Community Hot Topics)
2. **[#114612](https://github.com/openclaw/openclaw/issues/114612):** Unbounded memory SQLite table growth (see Community Hot Topics)
3. **[#161379](https://github.com/openclaw/openclaw/issues/161379):** Gateway pins CPU core indefinitely due to OpenAI catalog refresh loop (60s TTL < per-agent refresh time)  
   - Impact: 100% CPU usage on one core; no fix PR linked yet
4. **[#161976](https://github.com/openclaw/openclaw/issues/161976):** WhatsApp DM replies fail at durable registry handoff after restart  
   - Impact: Message loss; no fix PR linked yet
5. **[#144291](https://github.com/openclaw/openclaw/issues/144291):** Config hot-reload aborts all in-flight agent turns  
   - Impact: Session disruption; no fix PR linked yet

### Notable Regressions
- [#97616](https://github.com/openclaw/openclaw/issues/97616) (zombie processes): Regression from earlier versions
- [#161379](https://github.com/openclaw/openclaw/issues/161379) (CPU pinning): 2026.9.6 regression
- [#160959](https://github.com/openclaw/openclaw/issues/160959) (plugin capture blocking): 2026.9.6 regression

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features with strong roadmap potential:

1. **Per-agent cost budget enforcement** ([#42475](https://github.com/openclaw/openclaw/issues/42475))  
   - Gateway-level daily/monthly spend caps per agent. High operational relevance for enterprise deployments; likely to be prioritized given active discussion and maintainer review tags.

2. **Per-agent agentToAgent and session visibility scoping** ([#59149](https://github.com/openclaw/openclaw/issues/59149))  
   - Replace global-only multi-agent permission settings with per-agent scoping. Has 2 👍 reactions and a linked PR ([#155442](https://github.com/openclaw/openclaw/pull/155442) referenced in related issues), making it a strong candidate for upcoming releases.

3. **Shared workspace memory indexing** ([#95724](https://github.com/openclaw/openclaw/issues/95724))  
   - Index memory by source directory instead of by agent to eliminate duplicate vector stores for same-workspace agents. Improves performance and reduces resource usage; fits ongoing memory system optimization work.

4. **Bounded launch contract for Swarm agents.run** ([#156632](https://github.com/openclaw/openclaw/issues/156632))  
   - Add restricted execution boundaries for Swarm agent verification lanes. Has a linked implementation PR (#155442), indicating active development.

---

## 7. User Feedback Summary
### Pain Points
- **Update reliability:** Multiple reports of update failures, rollbacks, and stranded installations across platforms (macOS non-root [#164422](https://github.com/openclaw/openclaw/issues/164422), Windows clean install [#164396](https://github.com/openclaw/openclaw/issues/164396), unprivileged containers [#164113](https://github.com/openclaw/openclaw/issues/164113)).
- **Resource leaks:** Disk and memory leaks from plugin captures [#158390](https://github.com/openclaw/openclaw/issues/158390), memory tables [#114612](https://github.com/openclaw/openclaw/issues/114612), and zombie processes [#97616](https://github.com/openclaw/openclaw/issues/97616) are recurring themes for long-running deployments.
- **Channel delivery issues:** Message loss and delivery failures across WhatsApp [#161976](https://github.com/openclaw/openclaw/issues/161976), Signal [#143581](https://github.com/openclaw/openclaw/issues/143581), iMessage [#143632](https://github.com/openclaw/openclaw/issues/143632), and Telegram [#143278](https://github.com/openclaw/openclaw/issues/143278) impact core user trust.
- **Multi-agent friction:** Permission scoping [#59149](https://github.com/openclaw/openclaw/issues/59149), subagent delivery failures [#143334](https://github.com/openclaw/openclaw/issues/143334), and claude-cli multi-agent bugs [#164972](https://github.com/openclaw/openclaw/issues/164972) hinder adoption of team-based agent workflows.

### Use Cases
- Enterprise multi-agent deployments with cost governance and hierarchical permission models
- Long-running self-hosted gateways for personal/team productivity across multiple chat channels
- Code Mode and development automation using Codex and claude-cli backends
- Memory-augmented agents for knowledge work and long-term project context

### Satisfaction Signals
- Active community contribution (21-334 contributors per release) indicates strong engagement
- Fast triage of regression bugs (multiple 2026.9.x regressions received immediate attention)

---

## 8. Backlog Watch
Long-standing or high-impact issues/PRs requiring maintainer attention:

1. **[#84037](https://github.com/openclaw/openclaw/issues/84037):** Improve Codex app-server steady-state CPU and helper process overhead  
   - Created: 2026-05-19; 11 comments, 1 👍; P1 priority. Performance issue affecting Codex users with no fix PR linked.

2. **[#95724](https://github.com/openclaw/openclaw/issues/95724):** Index memory by source directory, not by agent  
   - Created: 2026-06-22; 6 comments, 1 👍; P2 priority. Efficiency improvement for multi-agent workspaces with no linked PR yet.

3. **[#59149](https://github.com/openclaw/openclaw/issues/59149):** Per-agent agentToAgent and session visibility scoping  
   - Created: 2026-04-01; 6 comments, 2 👍; P2 priority. Has a linked PR but remains open, requiring product decision.

4. **[#119055](https://github.com/openclaw/openclaw/pull/119055):** fix(code-mode): keep waiting results durable across retries  
   - Created: 2026-08-04; maintainer-authored XL-sized PR. Core Code Mode reliability fix that has been in review for over 2 months.

5. **[#144439](https://github.com/openclaw/openclaw/pull/144439):** feat(agents): add configurable prompt section overrides  
   - Created: 2026-09-10; P3 priority. Highly requested feature for customizing system prompts without forking; awaiting maintainer review.

---

## Cross-Ecosystem Comparison

# Cross-Project Personal AI Assistant / Agent Open-Source Ecosystem Comparison Report
*Reporting Period: 7 days ending 2026-10-05*

---

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem remains in a high-growth, iterative phase, with projects balancing foundational reliability work against user-driven feature expansion for enterprise and power-user deployments. Across the five surveyed projects, core investment themes include runtime stability, memory system optimization, multi-channel integration, and cost governance for multi-agent deployments. Community contribution rates remain strong, with new contributors delivering targeted fixes and feature additions across all tiers of projects, while security hardening and sandboxing remain non-negotiable priorities for production-grade deployments. The landscape is segmented by use case: general-purpose gateway-centric platforms, local-first lightweight agents, and workflow-optimized assistants, each catering to distinct user personas and deployment models.

---

## 2. Activity Comparison
| Project | Updated Issues (Active/Closed) | Updated PRs (Open/Merged) | New Releases | Health Score (1-10) |
|---------|--------------------------------|---------------------------|--------------|---------------------|
| OpenClaw | 500 (350 active / 150 closed) | 500 (309 open / 191 merged) | 5 (2 stable, 3 extended-stable) | 9.0 |
| Hermes Agent | 50 (46 open / 4 closed) | 50 (44 open / 6 merged) | 0 | 7.2 |
| IronClaw | 7 (7 active / 0 closed) | 13 (10 open / 3 merged) | 1 (stable patch) | 7.8 |
| QwenPaw | 50 (46 open / 4 closed) | 50 (39 open / 11 merged) | 1 (beta) | 7.5 |
| ZeroClaw | 50 (47 open / 3 closed) | 50 (45 open / 5 merged) | 0 | 7.0 |

*Health score calculated based on release cadence, bug triage speed, community contribution volume, and severity of open critical issues.*

---

## 3. OpenClaw's Position
OpenClaw is the clear market and maturity leader in this cohort, with 10x the issue and PR volume of the next-largest projects, a robust multi-channel release pipeline (stable + extended-stable/LTS), and the largest contributor base (21–334 contributors per release). Its technical approach is gateway-centric, prioritizing multi-agent orchestration, cross-channel integration, and enterprise-grade operational controls (cost governance, permission scoping) that are only nascent in peer projects. In comparison to smaller peers, OpenClaw has a more established enterprise user base, reflected in community focus on production scalability, cost control, and long-running deployment reliability, whereas Hermes Agent and QwenPaw prioritize end-user UX and frontend polish, IronClaw focuses on security-first sandboxed execution, and ZeroClaw targets local-first, privacy-conscious deployments.

---

## 4. Shared Technical Focus Areas
1. **Runtime stability & resource leak mitigation**  
   Cross-project priority: All five projects face open issues related to memory leaks, process leaks, or event loop blocking. OpenClaw reports zombie child process leaks and unbounded SQLite memory table growth; QwenPaw documents 1MB/s memory growth from unbounded stream buffers; ZeroClaw addresses SQLite session backend inefficiencies; Hermes Agent cites CPU pegging from WebSocket reconnect loops; IronClaw tracks benchmark pipeline stability gaps.
2. **Installation/update reliability**  
   OpenClaw, Hermes Agent, and ZeroClaw all report platform-specific installation failures: OpenClaw fixes unprivileged container update failures and Windows clean install connectivity issues; Hermes Agent documents Termux/ARM64 and Windows Python 3.14 update crashes; ZeroClaw notes Android/Termux quickstart failures.
3. **Chat/transcript UX reliability**  
   Hermes Agent, QwenPaw, and OpenClaw all prioritize fixing streaming and transcript integrity bugs: Hermes Agent resolves desktop duplicate message rendering and scroll jumping; QwenPaw addresses compressed history loading failures and cross-session message attribution; OpenClaw fixes live assistant text doubling for OpenAI-compatible providers.
4. **Plugin/tool system robustness**  
   OpenClaw, Hermes Agent, QwenPaw, and IronClaw all have open work on plugin reliability: OpenClaw fixes plugin capture disk leaks and migration failures; Hermes Agent addresses concurrent plugin load crashes; QwenPaw resolves plugin synchronous call freezes; IronClaw advances Turn-0 tool selection optimization.

---

## 5. Differentiation Analysis
| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **Core Focus** | Enterprise multi-agent gateway, cross-channel orchestration | Desktop/CLI client UX, Kanban workflow | Security-first sandboxed execution, WASM tooling | Frontend console usability, multi-provider/channel compatibility | Local-first privacy, runtime security hardening |
| **Target Users** | Enterprise operators, large multi-agent deployments | Power users, knowledge workers, desktop-first users | Security-conscious teams, browser automation users | Self-hosted teams, IM-heavy workflows | Privacy-focused users, local model deployers |
| **Technical Architecture** | Monolithic gateway with plugin ecosystem, SQLite-backed state | Cross-platform desktop (Tauri-like) + CLI client, Python runtime | Rust-based core, WASM sandboxed tool execution | Web/desktop console, Python backend, multi-channel adapters | Rust-based runtime, Tailscale/ZeroRelay networking, sandboxed execution |
| **Key Differentiators** | LTS release channel, gateway-level cost/permission controls | Kanban task delegation, CLI-to-desktop session handoff | Wasmtime-secured tool sandbox, identity attestation support | Mobile web adaptation, broad IM channel (Feishu/WeCom) support | Local_small lightweight runtime profile, config integrity guarantees |

---

## 6. Community Momentum & Maturity
### Tier 1: Mature, High-Velocity (Stabilizing + Feature Expansion)
- **OpenClaw**: The most mature project, with a balanced cadence of security patches, bug fixes, and forward-looking feature work. Its dual stable/extended-stable release pipeline and 191 merged PRs per week indicate established release engineering and large maintainer capacity. The project is in a sustained growth phase, prioritizing enterprise operational features alongside reliability hardening.

### Tier 2: Mid-Maturity, Active Development (Feature-First Iteration)
- **QwenPaw**: Steady iteration with a focus on frontend UX and provider/channel compatibility. Its beta release cadence and 11 merged PRs per week reflect active feature work alongside bug triage, with growing community contribution from first-time developers.
- **Hermes Agent**: High open-to-closed PR ratio indicates an active development cycle focused on desktop UX and workflow features, with no upcoming stabilization release in sight. Strong community demand for cross-device continuity and Kanban reliability drives roadmap priorities.
- **IronClaw**: Smaller but stable activity volume, with a mix of security patch releases, dependency maintenance, and early-stage architecture work. Growing external contributor engagement signals expanding community buy-in, while its focus on sandbox security positions it as a niche but high-trust option.

### Tier 3: Pre-Stable, Foundational Hardening
- **ZeroClaw**: High volume of in-progress high-severity bugs and architecture-tracked enhancements indicate the project is still shoring up foundational reliability for v0.8.6 and v0.9.0 milestones. Its focus on local-first privacy and runtime security appeals to a niche user base, but slower merge velocity and multiple parking-lot features signal lower maintainer capacity than Tier 1/2 projects.

---

## 7. Trend Signals
1. **Enterprise operational controls are table stakes for production adoption**  
   OpenClaw’s top community request for gateway-level per-agent cost budgeting, paired with demand for per-agent permission scoping, indicates multi-agent deployments are moving from pilot to production, requiring native governance tools instead of external monitoring workarounds. AI agent developers building for enterprise use cases should prioritize built-in cost caps, audit logging, and granular permission models.
2. **Local-first and privacy-focused deployment demand is accelerating**  
   ZeroClaw’s highly requested `local_small` runtime profile, paired with user frustration over prompt bloat and leaked internal instructions for local model users, reflects growing demand for lightweight, privacy-preserving agent modes optimized for on-premise and consumer hardware. Developers should optimize prompt size and disable unnecessary permissive fallbacks for local deployment targets.
3. **Cross-device and cross-channel continuity is a core UX differentiator**  
   Hermes Agent’s CLI-to-desktop handoff feature, QwenPaw’s mobile web adaptation work, and OpenClaw’s multi-channel integration fixes all point to user expectation of seamless agent access across devices and chat platforms. Agents limited to a single interface will face growing UX competition in 2026.
4. **Memory system reliability and scalability are unmet pain points**  
   OpenClaw’s short-term memory eviction bugs and unbounded SQLite growth, paired with QwenPaw’s compressed history loading failures, indicate that current memory architectures are not keeping pace with high-volume, long-running deployment needs. Agent developers should prioritize bounded memory storage, pagination for historical transcripts, and reliable long-term memory promotion pipelines.
5. **Sandbox security expectations are outpacing current implementations**  
   IronClaw’s focus on WASM sandbox hardening, ZeroClaw’s macOS Seatbelt bug fixes, and Hermes Agent user surprise over un-sandboxed `browser_exec` code show that users assume stronger security boundaries than most projects currently deliver. Transparent sandbox scope documentation and consistent enforcement across tool execution paths will be critical for building user trust.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Weekly Project Digest | 2026-10-05

## 1. Last 7 Days' Overview
The Hermes Agent project sustained high development activity in the past week, with 50 updated issues (46 open, 4 closed) and 50 updated pull requests (44 open, 6 merged/closed), alongside zero new releases. Work focused heavily on stability fixes for desktop streaming, plugin loading, installation/packaging pipelines, and Kanban workflow correctness, alongside targeted feature additions for cross-device session handoff and dashboard UX improvements. The ratio of open to closed work items indicates an active development cycle with multiple in-flight improvement tracks, rather than a stabilization phase ahead of a release. Maintainer prioritization appears weighted toward compatibility and install/update reliability, with several salvaged community PRs for package management and platform-specific fixes landing in the open queue for final review.

## 2. Releases
No new releases were published in the last 7 days.

## 3. Project Progress
The following merged/closed PRs delivered completed functionality and fixes in the past week:
- **Desktop duplicate message rendering fix** ([PR #130448](https://github.com/NousResearch/hermes-agent/pull/130448)): Resolved issue #130396, where assistant replies with markdown tables rendered twice after a tool call in the desktop transcript. The fix adjusts the streaming bubble settlement logic to use the sealed post-tool reply instead of re-painting existing content.
- **Desktop streaming bubble finalization fix** ([PR #128873](https://github.com/NousResearch/hermes-agent/pull/128873), closed): Addressed a root cause of duplicate assistant replies by settling completions onto the last text-bearing assistant bubble, preventing empty post-tool-call bubbles from receiving duplicate content.
- 4 additional closed PRs (mix of bug fixes and invalid/duplicate entries) completed the weekly merge/close queue, with the majority of closed items targeting desktop client streaming stability.

## 4. Community Hot Topics
The most actively discussed items reflect user frustration with client-side UX bugs and plugin/installation reliability pain points:
1. **Desktop transcript duplication + scroll jumping during streaming** ([Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468), 13 comments, 1 👍): The highest-engagement issue of the week, reported by a Linux desktop user on v0.21.5. The underlying need is reliable, jank-free streaming UX — duplicated messages and scroll jumps break core chat usability and erode trust in transcript accuracy.
2. **Concurrent plugin load crash: "dictionary changed size during iteration"** ([Issue #125746](https://github.com/NousResearch/hermes-agent/issues/125746), 6 comments): Affects long-lived, plugin-heavy installations, with intermittent failures that silently drop registered tools. Users need robust concurrent plugin discovery for heavy customization use cases without silent functionality loss.
3. **Kanban dispatcher worker ModuleNotFoundError crash** ([Issue #125649](https://github.com/NousResearch/hermes-agent/issues/125649), 6 comments): Blocks Kanban functionality entirely under managed Python runtimes. Users relying on Kanban for task delegation need consistent worker spawn behavior across runtime environments.

## 5. Bugs & Stability
Bugs reported/updated in the past week, ranked by severity (P1 > P2 > P3):
### P1 (Critical)
- **Compaction handoff republished as assistant reply** ([Issue #132934](https://github.com/NousResearch/hermes-agent/issues/132934)): Context compaction content is presented as a live assistant reply in long CLI sessions, with a paraphrased opener that bypasses summary classification. No fix PR is linked yet; this breaks session coherence and can mislead users about active agent output.

### P2 (High Impact)
- **OpenAI-Codex mid-session model switch silently fails** ([Issue #132935](https://github.com/NousResearch/hermes-agent/issues/132935)): `/model --provider openai-codex` reports success but leaves the live API client unbound, causing 403 errors on the next message. No linked fix PR.
- **SSH remote profile regression** ([Issue #88994](https://github.com/NousResearch/hermes-agent/issues/88994)): SSH connections break when local profile name differs from remote `remoteProfile`, a regression from commit 30299efa3. No linked fix PR.
- **Bot mode / bot-to-bot delivery `ruamel` module missing** ([Issues #125091](https://github.com/NousResearch/hermes-agent/issues/125091), [#125654](https://github.com/NousResearch/hermes-agent/issues/125654)): Delivery runners launched on the payload interpreter lack PM dependency directories, causing consistent failures. No linked fix PR.
- **Custom provider identity desync** ([Issue #102725](https://github.com/NousResearch/hermes-agent/issues/102725)): Two custom providers sharing a `base_url` but with different `api_mode` values always resolve to the first entry, creating display/runtime mismatches. No linked fix PR.
- **Dashboard WebSocket infinite reconnect loop** ([Issue #132999](https://github.com/NousResearch/hermes-agent/issues/132999)): Transient socket drops trigger 250ms reconnection cycles pegging CPU at 100%, a regression around PR #95951. No linked fix PR.
- **`hermes prompt-size` makes undocumented network calls** ([Issue #132998](https://github.com/NousResearch/hermes-agent/issues/132998)): The command fetches OpenRouter's model list despite being documented as offline, violating user expectations for local-only operation. No linked fix PR.

### P3 (Medium/Low Impact)
- Disk cleanup plugin race condition on `tracked.json` ([Issue #132943](https://github.com/NousResearch/hermes-agent/issues/132943)), Home Assistant plugin over-migration ([Issue #132814](https://github.com/NousResearch/hermes-agent/issues/132814)), and Kanban decomposition parent task ordering bug ([Issue #133008](https://github.com/NousResearch/hermes-agent/issues/133008)) are among lower-severity stability issues with no linked fix PRs yet.

## 6. Feature Requests & Roadmap Signals
User-requested features from the past week, with likelihood assessment for near-term inclusion:
1. **CLI-to-Desktop session handoff + deep links** ([PR #125903](https://github.com/NousResearch/hermes-agent/pull/125903)): `/handoff desktop` command and `hermes://session/<id>` deep links let users continue CLI conversations in the desktop app. *High likelihood*: The PR is salvaged from earlier community work, aligns with cross-device UX trends, and is actively being reviewed.
2. **Desktop session status grouping overhaul** ([PR #133020](https://github.com/NousResearch/hermes-agent/pull/133020)): Splits sidebar status from Working/Done into Working/Blocked/Ready/Inactive for better task visibility. *High likelihood*: Low-risk UX improvement with clear user value, already in CI-reviewed status.
3. **Kanban worker create/link permission granularity** ([Issue #100944](https://github.com/NousResearch/hermes-agent/issues/100944)): Allow restricting worker card creation/linking while retaining lifecycle tools. *Medium likelihood*: Marked `needs-decision`, indicating roadmap prioritization is pending.
4. **`hermes config set` support for named list entries** ([Issue #132963](https://github.com/NousResearch/hermes-agent/issues/132963)): Enable addressing list-type config keys (e.g. `custom_providers`) by name. *Medium likelihood*: Small ergonomic improvement with a clear use case, likely to be picked up if config tooling work is scheduled.
5. **Browser exec Python harness Docker sandboxing** ([Issue #133010](https://github.com/NousResearch/hermes-agent/issues/133010)): Run `browser_exec` Python code inside the configured Docker sandbox for security hardening. *Lower near-term likelihood*: Documented as a known limitation, requires broader sandbox architecture work.

## 7. User Feedback Summary
Key pain points and use cases surfaced in weekly issue reports:
- **Core chat UX degradation**: Multiple users reported duplicate message rendering and scroll jumping in the desktop client, with one user providing WebSocket frame traces to rule out backend causes. This is a top dissatisfaction driver, as it undermines basic trust in the chat interface.
- **Installation/update friction**: Termux/ARM64 users, Windows Python 3.14 users, and plugin-heavy users all reported consistent update failures (Python bundle layout mismatches, `uv lock` crashes, concurrent plugin load errors). These onboarding and maintenance failures create high barriers to entry for non-standard platforms.
- **Kanban workflow breakage**: Multiple enterprise/self-hosted users reported complete Kanban worker failures under managed runtimes, blocking task delegation use cases that are a core value proposition for power users.
- **Unmet security expectations**: Users with Docker sandboxes enabled were surprised to find `browser_exec` runs on the host instead of inside the container, indicating a gap between documented limitations and user assumptions about security boundaries.
- **Cross-device continuity demand**: The handoff feature PR aligns with repeated user requests to move conversations between CLI and desktop interfaces, reflecting a use case of users starting work in terminal and finishing it in a GUI.

## 8. Backlog Watch
Long-standing high-impact items awaiting maintainer attention:
1. **Background self-improvement scope violation** ([Issue #72082](https://github.com/NousResearch/hermes-agent/issues/72082), created 2026-07-26, 2 comments): Post-turn background review writes to the skill library during read-only scoped turns and does not disclose created files. This violates scope guarantees and has sat open for >10 weeks with limited progress.
2. **NixOS isolated instance support** ([PR #75946](https://github.com/NousResearch/hermes-agent/pull/75946), created 2026-08-01): A feature-complete NixOS module for isolated Hermes agent instances with hardening and lifecycle management has been open for >9 weeks, unmerged despite broad security and deployment value.
3. **Gateway session command deferral** ([PR #116295](https://github.com/NousResearch/hermes-agent/pull/116295), created 2026-09-19): A stability fix to defer safe session commands until active turns complete, preventing state corruption, has been in review for >2 weeks without merge, despite addressing a core session state risk.
4. **Matrix thread reply preservation** ([PR #125648](https://github.com/NousResearch/hermes-agent/pull/125648), created 2026-09-27): A fix for Matrix platform thread reply and fallback chain handling has been open for >1 week, blocking reliable Matrix adapter functionality for community users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Weekly Project Digest — Week Ending 2026-10-05
*Repository: [nearai/ironclaw](https://github.com/nearai/ironclaw)*

---

## 1. Last 7 Days' Overview
Over the past 7 days, IronClaw maintained steady development activity, with 7 active issues (no closures) and 13 updated PRs (3 merged/closed), alongside one new stable release. The project shipped a security and functionality patch in v1.4.1, while ongoing work focused on dependency upkeep, user experience refinements, and early-stage architecture enhancements for tool selection and distributed workers. Dependency updates dominated open PR volume, with 5 of 10 open PRs being automated dependency bumps, indicating consistent infrastructure maintenance. Community contributions from new contributors made up a notable share of feature and fix PRs, reflecting growing external engagement. Overall project health appears stable, with active work across release engineering, core features, and developer experience.

---

## 2. Releases
- **[ironclaw-v1.4.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1)** (released 2026-09-29): Stable promotion of the 1.4.1-rc.2 release candidate.
  - **Key changes**:
    1.  Fixed activation of Google extensions (Gmail, Google Calendar) for deployments where operators supply Google OAuth clients via the Web UI.
    2.  Included a Wasmtime security update for sandboxed WASM tool execution.
  - **Breaking changes**: None reported; this is a patch-level stable release.
  - **Migration notes**: No manual migration required. Users on 1.4.0 or earlier 1.4.x RCs can upgrade normally via the official installer or package manager.

---

## 3. Project Progress
3 PRs were merged/closed in the last 7 days, advancing release engineering and web UI stability:
1.  **[PR #8120](https://github.com/nearai/ironclaw/pull/8120)** — *chore(release): promote 1.4.1-rc.2 to 1.4.1* (closed/merged): Finalized the v1.4.1 stable release, bumping version numbers and updating changelogs to carry forward the Google OAuth fix and Wasmtime security patch from RC2.
2.  **[PR #5132](https://github.com/nearai/ironclaw/pull/5132)** — *fix(webui-v2): redirect invalid chat thread routes* (closed/merged): Resolved broken deep-linking behavior for chat threads, redirecting invalid/reserved `/chat/:threadId` routes back to the main chat page and adding regression tests for the chat page routing flow.
3.  **[PR #8078](https://github.com/nearai/ironclaw/pull/8078)** — *chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates* (closed): Superseded by newer tokio-ecosystem dependency bump PR #8123, reflecting routine dependency maintenance cadence.

---

## 4. Community Hot Topics
Ranked by comment count and recency of discussion:
1.  **[Issue #2358](https://github.com/nearai/ironclaw/issues/2358)** — *feat(browser): add BrowserProfileStore trait with encrypted tarball persistence* (1 comment, updated 2026-10-01): The highest-comment open issue this week, focused on persisting browser sessions (cookies, localStorage) across agent runs to avoid repeated user authentication. Underlying need: Agent browser workflows require durable, secure session storage for logged-in services, a critical usability gap for browser automation use cases.
2.  **[Issue #7889](https://github.com/nearai/ironclaw/issues/7889)** — *RFC: extend the scheduler/orchestrator with opt-in remote edge workers* (1 comment, updated 2026-09-29): A proposal to expand IronClaw's worker pool beyond a single host to utilize idle edge hardware. Underlying need: Operators with multi-host infrastructure want to distribute agent workloads for better scalability and resource utilization, without compromising the project's security-first audit model.
3.  **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — *feat(identyclaw): host-mediated Passport for practitioners* (updated 2026-10-01): A community-contributed feature to integrate IdentyClaw Passport for processless agent identity verification. Underlying need: Users want built-in, secure identity attestation for agent workflows without requiring shell access or external extension installs.

---

## 5. Bugs & Stability
Ranked by estimated severity:
1.  **[Issue #8122](https://github.com/nearai/ironclaw/issues/8122)** — *`ironclaw serve` fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile)* (severity: High): A critical startup failure on macOS Apple Silicon for v1.4.1, where the `local-dev` profile cannot read credentials for the web-app extension, even though `ironclaw doctor` passes all checks. No fix PR has been linked as of this digest.
2.  Benchmark stability issues (severity: Medium): Two daily failure taxonomy issues ([#8121](https://github.com/nearai/ironclaw/issues/8121) for 2026-10-01, [#8116](https://github.com/nearai/ironclaw/issues/8116) for 2026-09-28) document ongoing non-pass rates in test suites. The majority of failures are attributed to benchmark-side seeding defects and model quality gaps rather than core IronClaw bugs, but indicate room for test pipeline reliability improvements.
3.  Minor UI/UX bugs (severity: Low):
    - Web UI command palette focus loss ([PR #8117](https://github.com/nearai/ironclaw/pull/8117), fix open): Dismissing the Cmd/Ctrl+K palette left focus on the page body instead of the original input element.
    - CLI config profile visibility ([PR #8118](https://github.com/nearai/ironclaw/pull/8118), fix open): CLI commands did not report the effective boot profile when the `IRONCLAW_REBORN_PROFILE` env var was unset.

---

## 6. Feature Requests & Roadmap Signals
The following user-requested features show active development or clear roadmap alignment, and are likely candidates for upcoming releases:
1.  **Turn-0 tool selection with embeddings ([Issue #8113](https://github.com/nearai/ironclaw/issues/8113), [PR #8119](https://github.com/nearai/ironclaw/pull/8119))**: An opt-in feature to rank authorized tools against user messages before the first model call, eliminating a `tool_search` round-trip. Already has an open implementation PR, making it a high-probability addition for the next minor release.
2.  **Tsubasa model provider registry entry ([Issue #8115](https://github.com/nearai/ironclaw/issues/8115))**: A request to add a named Tsubasa provider with a 32K context budget path, building on IronClaw's existing OpenAI-compatible backend. Aligns with the project's pattern of expanding supported model providers, and is likely scoped for an upcoming release.
3.  **Encrypted browser profile persistence ([Issue #2358](https://github.com/nearai/ironclaw/issues/2358))**: A long-running enhancement for durable browser sessions. While still in early design, it addresses a core pain point for browser automation users and is a roadmap priority for workspace and secrets management.

---

## 7. User Feedback Summary
Gleaned from recent issues and community PRs:
- **Pain points**:
  1.  macOS local development startup failures with credential backends (Issue #8122) create immediate friction for new users trying out the default `local-dev` profile.
  2.  Repeated authentication for browser-based agent workflows (Issue #2358) is a major usability barrier for production browser use cases.
  3.  Lack of first-party Tsubasa model provider support (Issue #8115) adds setup overhead for users working with Tsubasa endpoints.
- **Positive signals**:
  - Multiple new contributors have submitted fix and feature PRs (e.g., PRs #8117, #8118, #7499), indicating growing community investment and onboarding success.
  - The v1.4.1 release addressed a longstanding Google OAuth activation pain point for deployment operators.
- **Use cases reflected**:
  - Self-hosted deployments with operator-managed OAuth credentials.
  - Distributed edge workloads for operators with idle multi-host infrastructure.
  - Identity-verified agent workflows for practitioner use cases.

---

## 8. Backlog Watch
The following long-running items have high potential impact and have not seen recent closure, warranting maintainer attention:
1.  **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** — *chore(deps): bump the wasm group across 1 directory with 4 updates* (open since 2026-08-23): A Wasmtime/WASM toolchain dependency bump, relevant to security hardening of WASM sandbox execution. Given the project's recent focus on Wasmtime security updates in v1.4.1, this pending bump should be prioritized for review and merge.
2.  **[Issue #2358](https://github.com/nearai/ironclaw/issues/2358)** — *BrowserProfileStore trait with encrypted tarball persistence* (open since 2026-04-12): A high-value enhancement for browser session durability, with only 1 comment after 6 months. The issue addresses a core user pain point and would benefit from maintainer triage to move it into the active development pipeline.
3.  **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — *feat(identyclaw): host-mediated Passport for practitioners* (open since 2026-08-11): A substantial new feature PR from a new contributor, with no recent review activity. Timely feedback on community-contributed major features supports contributor retention and expands the project's identity feature set.
4.  **[PR #6698](https://github.com/nearai/ironclaw/pull/6698)** — *docs: update OpenWiki wiki* (open since 2026-07-27): An automated documentation refresh PR that has been pending for over 2 months. Merging this would keep narrative documentation aligned with the current codebase for new users and contributors.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Weekly Project Digest (2026-10-05)

---

## 1. Last 7 Days' Overview
QwenPaw maintained high development and community engagement over the past week, with 50 updated issues (46 open/active, 4 closed) and 50 updated pull requests (39 open, 11 merged/closed), alongside one new beta release. Activity is concentrated on frontend console usability, provider compatibility, and runtime stability, with a mix of bug fixes, incremental feature work, and community-reported regression issues. The project shows healthy contributor throughput, including multiple first-time contributors submitting targeted fixes. Overall project health is stable, with active triage of high-severity stability bugs and steady progress on user experience improvements.

---

## 2. Releases
### v2.2.2-beta.4
Released as a new beta iteration with the following confirmed changes:
- **Feature**: Added a reranker UI configuration panel to `ReMeLightMemoryCard` (PR [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399), contributor: @lecheng2018)
- **Chore**: Version bumped to 2.2.2b4 (PR [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892), contributor: @cuiyuebing)
- **Performance**: Console chat dependency splitting (partial release note available)

No breaking changes or migration notes are explicitly listed for this beta.

---

## 3. Project Progress (Merged/Closed PRs)
11 PRs were merged or closed in the last 7 days, advancing the following areas:
- **Console UX fixes**:
  - [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347): Fixed rich input caret visibility when the composer grows beyond its capped height
  - [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877): Added desktop window geometry persistence (position/size restore on launch) via Tauri window-state plugin
- **Chat payload validation**:
  - [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299): Rejected conflicting chat payloads for active runs, preventing the API from acknowledging unprocessed user messages
- **Matrix channel compatibility**:
  - [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535): Closed feature request for Element-specific Matrix compatibility (recovery-key verification, MSC2965 OIDC login) as completed
- **LLM stream timeout configuration**:
  - [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604): Closed bug for hardcoded 30s LLM stream idle timeout on Desktop, now configurable via WebUI/envs.json
- **Feishu session isolation**:
  - [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011): Closed bug where Console stop requests could cancel active Feishu sessions under multiple UI sessions

---

## 4. Community Hot Topics
The most actively discussed items (by comment count) reflect core user pain points around chat history management and WebUI interaction:
1. **Issue #7884** (8 comments, open) — [Compressed chat history fails to load fully after frontend refresh](https://github.com/agentscope-ai/QwenPaw/issues/7884)
   - Underlying need: Users expect persistent, full access to long chat history; current context compaction creates a broken UX where prior conversation content is inaccessible after refresh.
2. **Issue #7997** (8 comments, open) — [Support message retraction/editing and workspace rollback in WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997)
   - Underlying need: Users want control over conversation context, including the ability to correct input mistakes and revert agent-generated file changes to maintain a clean working state.
3. **Issue #7722** (6 comments, open) — [Memory exhaustion via three compounding paths: unbounded stream buffers, keep-alive instance stacking, doom-loop gate evasion](https://github.com/agentscope-ai/QwenPaw/issues/7722)
   - Underlying need: Production deployments require reliable memory stability; the reported 1MB/s growth and eventual OOM are critical for self-hosted and cloud runtime users.
4. **Issue #6281** (6 comments, open) — [Web console mobile adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281)
   - Underlying need: Users want to manage and interact with QwenPaw agents from mobile devices, a long-outstanding accessibility request.
5. **PR #7542** (open, size/XXXL) — [Scroll-back message pagination for chats](https://github.com/agentscope-ai/QwenPaw/pull/7542)
   - Tied directly to issue #7884; this large feature PR aims to resolve the history loading gap by paginating older messages stored in `history.db`.

---

## 5. Bugs & Stability
Bugs reported/updated in the last 7 days, ranked by estimated severity:
| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| Critical | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Container memory exhaustion via three compounding paths (unbounded stream buffers, keep-alive stacking, doom-loop gate evasion) leading to OOM at ~1MB/s growth | No linked fix PR yet |
| Critical | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Plugin synchronous calls freeze the entire instance (no event loop isolation/monitoring), affecting all agents and channels | No linked fix PR yet |
| High | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` file/image content blocks + empty assistant messages pollute context, causing persistent 400 errors for all subsequent model requests | Partial fix referenced in test PR [#8097](https://github.com/agentscope-ai/QwenPaw/pull/8097) |
| High | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Console boot splash has no retry/error surface; stale WebView2 cache after updates permanently blocks boot | Fix PR [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) (open) adds boot watchdog with reload |
| High | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek provider: `send_file_to_user` with PDF permanently breaks sessions (subsequent requests fail 400 `file must have file_id/file_data`) | Addressed by runtime media capability fix PR [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) |
| High | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Compressed history fails to load fully after refresh | Large feature PR [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) (open) implements scroll-back pagination |
| Medium | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | OpenAI provider: gpt-6 family models fail connection test with 400 (max token parameter whitelist only matches gpt-5*/o*) | Fix PR [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) (open) recognizes newer GPT token limit parameters |
| Medium | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | v2.2.2-beta4 conversation page inaccessible over LAN access | Fix PR [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089) (open) adds fallback UUID generation for non-secure contexts |
| Medium | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | Erroneous new session creation when switching between history sessions | Fix PR [#8091](https://github.com/agentscope-ai/QwenPaw/pull/8091) (open) tracks last active chat ID on sidebar click |
| Medium | [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | `chat_with_agent` cross-session messages registered as independent chats, splitting same-session dialogue into multiple UI pages | Fix PR [#8095](https://github.com/agentscope-ai/QwenPaw/pull/8095) (open) attributes inter-agent messages to current user |

---

## 6. Feature Requests & Roadmap Signals
Top user-requested features with high likelihood of inclusion in upcoming releases:
1. **Message editing/retraction + workspace rollback** ([#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)): High community engagement, aligns with broader UX improvement efforts; expected to be scoped for v2.3.
2. **Mobile Web console adaptation** ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)): Active PR work already underway (e.g., [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) moves settings to a mobile drawer); incremental rollout likely in next 1-2 minor versions.
3. **User message Markdown rendering** ([#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975)): Low-complexity UX improvement with consistent user demand; high chance of inclusion in the next beta.
4. **`ask_user_question` Human-in-the-Loop tool** ([#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)): Aligns with agent safety and controllability priorities; likely to be added to the official toolset roadmap.
5. **@ALL message filtering for IM channels** ([#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945)): Low-effort, high-improvement feature for Feishu/DingTalk/WeCom users; expected to be implemented in a coming patch.

---

## 7. User Feedback Summary
**Key pain points**:
- Chat history persistence and accessibility is the top complaint: users report lost context after refresh and inability to scroll back to older messages ([#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)).
- Runtime stability concerns for production deployments: memory leaks ([#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)) and plugin-induced freezes ([#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)) are major pain points for self-hosted users.
- Frontend regression issues in v2.2.2-beta4: LAN access failures ([#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)) and boot hangs ([#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094)) negatively impact early adopter experience.
- Model provider compatibility gaps: gpt-6 family ([#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074)), DeepSeek ([#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026), [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064)), and OpenCode Go ([#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)) users report integration failures.

**Positive signals**:
- Users appreciate the breadth of channel and model support, and are actively contributing detailed bug reports with reproduction steps and root cause analysis (e.g., [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722), [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)).
- Third-party agent ecosystem (e.g., Qoder integration) is seeing active usage, with users submitting targeted improvement requests ([#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077)).

---

## 8. Backlog Watch
Long-standing high-priority items requiring maintainer attention:
1. **Issue #6281** ([Web console mobile adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281)): Open since 2026-07-20, 6 comments, consistent user demand; initial PR work exists but full adaptation is incomplete.
2. **Issue #2975** ([User message Markdown rendering](https://github.com/agentscope-ai/QwenPaw/issues/2975)): Open since 2026-04-06, low complexity, recurring user requests.
3. **PR #7542** ([Scroll-back message pagination](https://github.com/agentscope-ai/QwenPaw/pull/7542)): Large XXXL-sized feature PR open since 2026-09-04, directly addresses top user pain point; needs maintainer review to unblock merge.
4. **PR #7774** ([Hub startup provisioner allow-list derivation](https://github.com/agentscope-ai/QwenPaw/pull/7774)): Under review since 2026-09-15, fixes inconsistency between hub and other entry points.
5. **Issue #6274** ([`ask_user_question` Human-in-the-Loop tool](https://github.com/agentscope-ai/QwenPaw/issues/6274)): Open since 2026-07-20, with community upvotes; no official roadmap confirmation yet.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Weekly Project Digest (Week of 2026-10-05)

## 1. Last 7 Days' Overview
The ZeroClaw project saw high activity over the past 7 days, with 50 updated issues (47 open/active, 3 closed) and 50 updated pull requests (45 open, 5 merged/closed), alongside no new releases. Activity was concentrated across core runtime stability, security hardening, configuration reliability, and cross-platform usability, with a notable volume of high-severity bug fixes and architecture-tracked enhancements in progress. The project maintains an active development cadence focused on shoring up foundational reliability for v0.8.6 and v0.9.0 deliverables, while community feature contributions remain in the pipeline awaiting review.

## 2. Releases
No new releases were published in the last 7 days.

## 3. Project Progress
The following closed/merged PRs and completed issue tracks advanced the project in the past week:
- **Closed Issue #7108: CI Rust build caching and critical path improvement** [zeroclaw-labs/zeroclaw#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)
  The CI optimization initiative to reduce 15-20 minute PR build times for small changes was completed, improving Rust build cache efficiency and job scheduling.
- **Closed Issue #10662: Anthropic OAuth cache marker sizing bug fix** [zeroclaw-labs/zeroclaw#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)
  Resolved a bug where the OAuth system-prefix cache marker fell below Anthropic's minimum cache threshold and wasted a cache breakpoint slot.
- **Closed Issue #11335: CLI approval prompt misreporting in no-terminal environments** [zeroclaw-labs/zeroclaw#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335)
  Fixed incorrect `Denied by user` reporting for runtime fail-closed denials when CLI approval prompts run without a controlling terminal (e.g., cron jobs, CI pipelines).
- **Merged PR #11518: Preserve CLI input failure provenance** [zeroclaw-labs/zeroclaw#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)
  Implements the fix for issue #11335, ensuring EOF and read errors at CLI approval prompts carry an "unavailable input" result into audit logs and model context.
- **Merged PR #11521: Runtime composition exception approval documentation** [zeroclaw-labs/zeroclaw#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521)
  Formalized core team approval of the bounded runtime composition exception, updating project documentation to reflect the finalized policy.

## 4. Community Hot Topics
The most actively discussed items reflect focus on runtime test reliability, local-first user experience, and CI performance:
1. **Issue #9965: Harden runtime executable test fixtures under parallel runtime gate** (14 comments) [zeroclaw-labs/zeroclaw#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
   The most discussed item centers on flaky test failures in parallel runtime test suites caused by test fixtures writing executable shims after multithreading is initialized. Underlying need: improve test suite reliability for faster, more trustworthy CI validation of runtime changes.
2. **Issue #5287: Compact local_small runtime profile and prompt-budget contract** (9 comments, 2 👍) [zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
   A top user-requested enhancement for local model users, aiming to reduce prompt bloat, disable permissive fallback parsing, and prevent internal tool instructions from leaking to user output. Underlying need: deliver a lightweight, privacy-focused, performant mode for local-first deployments with constrained compute and context windows.
3. **Issue #7108: CI Rust build caching improvements** (9 comments) [zeroclaw-labs/zeroclaw#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)
   The recently closed CI optimization drew sustained discussion around reducing developer friction from long PR build times. Underlying need: accelerate development iteration speed for contributors.

## 5. Bugs & Stability
Bugs reported or active in the last 7 days, ranked by severity:
1. **P0/S0: Issue #10495 - Config::save() overwrites populated config.toml with near-empty file** [zeroclaw-labs/zeroclaw#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)
   Data-loss severity bug where workspace test runs can replace a 109KB, 25-agent config file with a 702-byte minimal config. Status: in progress. Fix PR: #11527 (refuses unproven full saves over existing loaded config files) [zeroclaw-labs/zeroclaw#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)
2. **P1/S1: Issue #11525 - Quickstart fails on Android/Termux** [zeroclaw-labs/zeroclaw#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)
   Workflow-blocking bug preventing agent creation on Android 16/Termux due to config persistence failures. Status: open, no fix PR assigned yet.
3. **P1/S1: Issue #10536 - macOS Seatbelt ignores configured allowed_roots for shell commands** [zeroclaw-labs/zeroclaw#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)
   Sandbox security bug where user-configured additional filesystem roots are not honored by shell commands, resulting in `Operation not permitted` errors. Status: in progress, no fix PR linked.
4. **P1/S1: Issue #10673 - Failed ACP turns not persisted on daemon RPC path (ZeroCode Code pane)** [zeroclaw-labs/zeroclaw#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673)
   Workflow-blocking bug where failed/cancelled turns in ZeroCode's Code pane are not saved, matching user impact of the previously fixed #9378 for a different code path. Status: open.
5. **P1/S2: Issue #11420 - SQLite session backend rewrites all message created_at timestamps on each turn** [zeroclaw-labs/zeroclaw#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)
   Degraded behavior where per-message timestamp data is lost because full transcript rewrites stamp all rows with the current time. Status: open, no fix PR linked.
6. **P2/S2: Issue #11517 - Web chat reload mid-turn drops user prompt from screen and localStorage** [zeroclaw-labs/zeroclaw#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517)
   Frontend bug where hydration with a pre-turn snapshot overwrites local state during active turns. Status: open.
7. **P3/S1: Issue #11418 - ZeroCode "Copy" one-click feature not working** [zeroclaw-labs/zeroclaw#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)
   Clipboard functionality failure in ZeroCode TUI. Fix PR: #11529 (adds local Linux clipboard writers and explicit copy outcome reporting) [zeroclaw-labs/zeroclaw#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)

## 6. Feature Requests & Roadmap Signals
Active feature requests and roadmap-aligned work likely to appear in upcoming releases:
- **v0.8.6 likely inclusions**: 
  - Slack "is thinking" status restoration for channel threads (Issue #11416, in progress) [zeroclaw-labs/zeroclaw#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)
  - MCP nested object argument serialization fix (Issue #11371, accepted for v0.8.6) [zeroclaw-labs/zeroclaw#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371)
  - Tailscale tunnel WSS/enrollment endpoint publishing (PR #11530, #11531) [zeroclaw-labs/zeroclaw#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) [zeroclaw-labs/zeroclaw#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)
- **v0.9.0 roadmap signals**:
  - Gateway separation and runtime delivery milestones tracked in Issue #7432 [zeroclaw-labs/zeroclaw#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432), including canonical config generation publication (Issue #10892, in progress) [zeroclaw-labs/zeroclaw#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)
  - ZeroRelay authenticated principal passthrough (Issue #10766) to enable multi-user hosted relay deployments [zeroclaw-labs/zeroclaw#10766](https://github.com/zeroclaw-labs/zeroclaw/issues/10766)
- **Medium-term feature candidates**:
  - Effort-based local/cloud model routing (Issue #7951, in progress, parking lot status) [zeroclaw-labs/zeroclaw#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)
  - Guided cron schedule editor for web UI (PR #10698, parking lot) [zeroclaw-labs/zeroclaw#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)
  - Sendblue iMessage/SMS channel support (PR #10768, parking lot) [zeroclaw-labs/zeroclaw#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)

## 7. User Feedback Summary
Pain points and use cases surfaced in recent issue reports:
1. **Local model usability pain**: Users running ZeroClaw with local models report prompt bloat, leaked internal instructions, and lack of a dedicated lightweight profile, driving demand for the `local_small` runtime mode (Issue #5287) [zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287).
2. **Cross-platform deployment gaps**: Android/Termux users cannot complete quickstart onboarding (Issue #11525) [zeroclaw-labs/zeroclaw#11525], while macOS users face sandbox inconsistencies with user-configured allowed filesystem roots (Issue #10536) [zeroclaw-labs/zeroclaw#10536], highlighting gaps in non-standard and desktop platform support.
3. **Data trust concerns**: Reports of config file overwrites (Issue #10495) [zeroclaw-labs/zeroclaw#10495], torn cost ledger records (Issue #11515) [zeroclaw-labs/zeroclaw#11515], and lost message timestamps (Issue #11420) [zeroclaw-labs/zeroclaw#11420] indicate user anxiety around data integrity and persistence reliability.
4. **UX friction**: Broken clipboard functionality in ZeroCode (Issue #11418) [zeroclaw-labs/zeroclaw#11418], missing Slack "thinking" indicators (Issue #11416) [zeroclaw-labs/zeroclaw#11416], and lost user prompts on web chat reload (Issue #11517) [zeroclaw-labs/zeroclaw#11517] point to degraded day-to-day user experience for core interface features.

## 8. Backlog Watch
Long-standing high-impact items requiring maintainer attention:
1. **Issue #5287: local_small runtime profile** (created 2026-04-04, 9 comments, 2 👍) [zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
   A top user-requested enhancement for local-first deployments with high risk and priority, in progress but open for 6 months.
2. **PR #10698: Guided cron schedule editor** (created 2026-09-07, stale candidate/parking lot status) [zeroclaw-labs/zeroclaw#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)
   User-facing UX improvement stuck in needs-author-action/parking lot state, risking contributor attrition.
3. **PR #10768: Sendblue iMessage/SMS channel** (created 2026-09-10, stale candidate/parking lot status) [zeroclaw-labs/zeroclaw#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)
   Large cross-platform channel contribution that expands non-Apple iMessage support, currently stalled awaiting maintainer review.
4. **Issue #7951: Effort-based local/cloud model routing** (created 2026-06-19, parking lot status) [zeroclaw-labs/zeroclaw#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)
   High-value routing feature for hybrid local/cloud deployments, in progress but deprioritized to parking lot.
5. **Issue #9190: Reliable provider API key rotation failure** (created 2026-07-20, no-stale status) [zeroclaw-labs/zeroclaw#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190)
   High-severity provider bug where key rotation selects alternate keys but cannot apply them, with no recent progress updates.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*