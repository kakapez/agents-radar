# AI Open Source Trends 2026-06-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-23 23:08 UTC

---

# 2026-06-24 GitHub AI Open Source Trends Report
---
## 1. Today's Highlights
Today's GitHub AI trending list is dominated by agent ecosystem innovation, with 7 projects recording over 1,000 new stars in 24 hours, marking one of the highest-volume days for AI open-source traction in 2026. ByteDance publicly released its production-grade long-horizon super agent harness `deer-flow` to broad community acclaim, while Anthropic published its official curated directory of Claude Code plugins to standardize third-party extensions for its popular developer AI assistant. The fastest-growing project of the day is OpenMontage, the world's first fully open-source agentic end-to-end video production system, which gained 3,590 stars in a single day. A clear new technical pattern centered on the Model Context Protocol (MCP) has emerged, with high-performance memory and code indexing tools for AI agents seeing exponential user adoption.

---
## 2. Top Projects by Category
### 🔧 AI Infrastructure (frameworks, SDKs, dev tools, CLI)
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp): 1,299 new stars today, total 1,299. This zero-dependency C-based high-performance MCP server indexes full codebases into a persistent knowledge graph with sub-millisecond queries, cutting token usage for coding agents by 99% and eliminating the need for manual context management for large repositories.
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official): 66 new stars today, total 66. Anthropic's official maintained directory of verified high-quality Claude Code plugins, providing a standardized curation layer to reduce supply chain risk for developers extending the Claude Code runtime.
- [vllm-project/vllm](https://github.com/vllm-project/vllm): 83,653 total stars. The leading high-throughput LLM inference engine remains the de facto standard for production serving of agent workloads, with recent updates optimized to handle the parallel tool calling workloads common in modern multi-agent systems.
- [zilliztech/claude-context](https://github.com/zilliztech/claude-context): 11,940 total stars. A dedicated MCP server for code search built exclusively for Claude Code, making entire codebases accessible as persistent context for coding agents with no manual indexing setup.

### 🤖 AI Agents / Workflows (agent frameworks, automation)
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage): 3,590 new stars today, total 3,590. The world's first open-source agentic full video production system, with 12 pre-built pipelines, 52 tools and 500+ specialized agent skills that turn any coding AI assistant into a fully functional video production studio.
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow): 741 new stars today, total 73,875. ByteDance's open-source long-horizon SuperAgent harness supports tasks that run for minutes to hours, with built-in sandboxes, persistent memory, subagent orchestration and a unified message gateway for complex end-to-end research and development workflows.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent): 933 new stars today, total 200,888. The community's most popular self-evolving open agent stack, with a design that adapts its skill set and memory context to align with individual user work patterns over time.
- [garrytan/gstack](https://github.com/garrytan/gstack): 1,012 new stars today, total 1,012. The exact opinionated Claude Code setup used by Garry Tan, including 23 pre-configured tools that turn coding agents into dedicated CEO, Designer, Engineering Manager and QA roles for startup teams.
- [affaan-m/ECC](https://github.com/affaan-m/ECC): 582 new stars today, total 220,501. A leading agent harness performance optimization system that tunes memory management, tool calling latency and security guardrails for all major coding assistant platforms including Claude Code and Codex CLI.

### 📦 AI Applications (vertical use case solutions)
- [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro): 1,631 new stars today, total 1,631. A native macOS video editor built from the ground up for AI, with one-click AI clip generation, voiceover integration and automated editing workflows that eliminate manual post-production work.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis): 1,121 new stars today, total 46,982. A LLM-powered multi-market stock analysis agent with multi-source market data aggregation, real-time news summarization, interactive decision dashboards and zero-cost scheduled cloud deployment.
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills): 1,040 new stars today, total 1,040. 817 structured cybersecurity skills for AI agents mapped to 6 global industry security frameworks including MITRE ATT&CK and NIST CSF 2.0, compatible with 20+ leading agent runtimes.
- [jamiepine/voicebox](https://github.com/jamiepine/voicebox): 1,042 new stars today, total 1,042. The leading open-source AI voice studio that supports near-zero latency voice cloning, dictation and custom voice asset generation for content creators and developers.

### 🧠 LLMs / Training
- [huggingface/transformers](https://github.com/huggingface/transformers): 161,846 total stars. The industry standard multi-modal model definition and training framework, recently updated with native support for agent fine-tuning and structured skill output formatting.
- [open-compass/opencompass](https://github.com/open-compass/opencompass): 7,115 total stars. The most widely adopted open LLM evaluation platform, adding new dedicated benchmarks for agent reasoning and long-horizon task performance this month.
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining): 266 total stars. A minimal, scalable library for reliable foundation and world model pretraining, designed to eliminate the common stability issues that plague large multi-stage model training runs.

### 🔍 RAG / Knowledge
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem): 83,925 total stars. A universal persistent context system that captures full agent session history, compresses it with AI, and injects relevant context back into future sessions for all major agent runtimes.
- [mem0ai/mem0](https://github.com/mem0ai/mem0): 59,249 total stars. The de facto universal memory layer for AI agents, with recent updates that support knowledge graph storage for enterprise-scale agent knowledge management.
- [topoteretes/cognee](https://github.com/topoteretes/cognee): 20,202 total stars. An open-source agent persistent long-term memory platform built on a self-hosted knowledge graph engine that eliminates the retrieval gaps of traditional vector RAG systems.

---
## 3. Trend Signal Analysis
Today's data confirms that the agent developer tooling ecosystem, specifically the Claude Code adjacent stack, is seeing explosive, unmatched community traction, making up 70% of all top trending AI repos. The most notable emerging new direction is the mainstream adoption of the Model Context Protocol (MCP), which has moved past niche experimental status to become the de facto standard interface for coding agents to access external resources, with 3 high-performance MCP servers for code and context ranking in today's top trending list. This wave of development directly tracks with the recent May-June 2026 industry releases of Anthropic's Claude Code, OpenAI's Codex CLI, and GitHub's Copilot Workspace, as the developer community races to fill the missing infrastructure gaps that turn basic 5-minute snippet coding assistants into capable agents that can handle multi-hour, full-project tasks. We are also seeing a clear shift away from unstructured prompt sharing to standardized, framework-aligned structured agent skill libraries for regulated verticals like cybersecurity, which will accelerate enterprise adoption of agent systems.

---
## 4. Community Hot Spots
- **MCP codebase indexing servers**: Tools like [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) cut coding agent token usage by 99% and deliver sub-millisecond context retrieval, solving one of the most painful unaddressed bottlenecks for large codebase agent workflows.
- **Structured domain-specific agent skill libraries**: Repositories like [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) map agent capabilities to formal industry compliance frameworks, removing the friction for enterprise teams to adopt agents in regulated production use cases.
- **Long-horizon super agent harnesses**: ByteDance's [deer-flow](https://github.com/bytedance/deer-flow) extends supported agent task duration from minutes to hours, opening up entirely new use cases for end-to-end autonomous research, full application development, and long-running data analysis workflows.
- **Agentic multi-modal production pipelines**: [OpenMontage](https://github.com/calesthio/OpenMontage) demonstrates that AI agents are no longer limited to text and code use cases, and the new category of full end-to-end content creation agent systems will see massive investment and adoption over Q3 2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*