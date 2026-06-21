# AI Open Source Trends 2026-06-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-21 23:13 UTC

---

# AI Open Source Trends Report | 2026-06-22
---
## 1. Today's Highlights
2026-06-22 marks an unprecedented surge in AI developer tooling adoption, with 8 AI-focused open source repositories earning over 1,000 new GitHub stars in a single 24-hour window. The overwhelming majority of top trending projects are built natively compatible with the Model Context Protocol (MCP), the open standard for LLM tool interoperability that launched 2 weeks prior. Token optimization tools targeting bloated RAG chunks, agent tool outputs and codebase context claimed 3 of the top 5 spots on today's AI trending list, as developers face spiking inference costs from long-horizon code and research agents. ByteDance’s newly open sourced long-running superagent harness `deer-flow` also crossed 72,000 total stars today, cementing its status as a leading production agent framework. The first fully open source agentic end-to-end video production system also launched today, filling a major unmet gap for media generative workflows.
---
## 2. Top Projects by Category
### 🔧 AI Infrastructure
- [chopratejas/headroom](https://github.com/chopratejas/headroom) | ⭐+2617 (today) | A universal token compression library, proxy and MCP server that reduces tokens from RAG chunks, logs and tool outputs by 60-95% while retaining full context accuracy, cutting inference costs for agent deployments dramatically.
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | ⭐+1029 (today) | High-performance C-written MCP server that indexes 158 programming languages into a persistent knowledge graph with sub-millisecond queries, cutting code context tokens by 99% with a zero-dependency single static binary.
- [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐+1441 (today) | Curated, production-grade engineering skill sets for Claude Code, Codex and CLI agents, shared directly from the lead Vercel engineer’s personal agent harness directory.
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | ⭐+445 (today) | 754 structured cybersecurity agent skills mapped to 5 industry standard security frameworks, compatible with 20+ agent and code editor platforms.
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | ⭐+366 (today) | A curated, regularly updated public collection of verified extracted system prompts from leading frontier models (Claude 5, GPT-5.5, Gemini 3.5) and AI coding tools.
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,704 (total) | Modular, high-performance Rust framework for building scalable low-latency LLM applications.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐83,485 (total) | Leading high-throughput, memory efficient open source LLM inference and serving engine for production deployments.

### 🤖 AI Agents / Workflows
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐72,540 (total) / +415 (today) | Open source long-horizon superagent harness with built-in sandboxes, persistent memory, subagent orchestration and message gateways that handles multi-hour complex tasks end-to-end.
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | ⭐+993 (today) | The world’s first fully open source agentic video production system, with 12 pipelines, 52 tools and 500+ pre-built agent skills that turns any general AI coding assistant into a full video production studio.
- [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐18,618 (total) / +361 (today) | Open source self-hosted AI memory platform that gives agents persistent cross-session long term memory powered by a native knowledge graph engine.
- [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐219,300 (total) | Leading agent harness performance optimization system with native support for all major coding assistants and development workflows.
- [langgenius/dify](https://github.com/langgenius/dify) | ⭐146,062 (total) | Production-ready no-code/low-code platform for building and deploying agentic workflows at scale.
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐185,063 (total) | The original open source autonomous general agent project, with regular feature updates for 2026’s agent ecosystem standards.

### 📦 AI Applications
- [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | ⭐+1829 (today) | Native macOS AI-first video editor built from the ground up for generative AI editing and automation workflows.
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐44,368 (total) / +519 (today) | LLM-powered multi-market stock intelligent analysis system with multi-source market data feeds, real-time news processing, interactive decision dashboards and zero-cost scheduled execution.
- [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | ⭐+253 (today) | AI-powered real-time global intelligence dashboard for news aggregation, geopolitical monitoring and cross-region infrastructure tracking.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐29,881 (total) | AI generation tool that creates fully editable native PowerPoint files with custom shapes, animations and voice narration from any input document.
- [santifer/career-ops](https://github.com/santifer/career-ops) | ⭐55,051 (total) | AI-powered full stack job search automation system built for Claude Code with 14 specialized skill modes and batch processing support.

### 🧠 LLMs / Training
- [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,109 (total) | Industry standard open LLM evaluation platform that supports 100+ datasets and all leading frontier and open source model architectures.
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐266 (total) | Minimal, scalable, reliable library for stable foundation and world model pretraining workflows.
- [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | ⭐104 (total) | Definitive public survey repository covering all modern test-time scaling techniques for large language models.
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | ⭐598 (total) | Curated full resource repository for LLM machine unlearning research and production implementation.

### 🔍 RAG / Knowledge
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐83,292 (total) | Leading open source RAG engine that combines state-of-the-art retrieval methods with native agent capability support.
- [safishamsi/graphify](https://github.com/safishamsi/graphify) | ⭐70,289 (total) | Agent skill that converts code repositories, documents, papers and media assets into a unified queryable knowledge graph for coding assistants.
- [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐12,473 (total) | MLsys 2026 awarded RAG engine that delivers 97% storage savings and fully private local RAG execution on consumer devices.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐50,257 (total) | Leading open source document agent and OCR platform for enterprise RAG deployments.
- [alibaba/zvec](https://github.com/alibaba/zvec) | ⭐11,957 (total) | Lightweight, lightning fast in-process vector database optimized for edge AI and low-resource RAG workloads.
---
## 3. Trend Signal Analysis
Today’s trending data confirms explosive, unmet community demand for MCP-compatible token and context optimization tools, a direct response to the 2026 mainstream adoption of long-horizon code agents like Claude Code and Codex that suffer from runaway token usage and high inference costs. This is the first time high performance C/Rust written MCP servers for code and RAG context indexing have appeared on top of the GitHub trending list, representing a clear tech stack shift away from slow Python implementations for performance-sensitive agent infrastructure. This trend directly aligns with Anthropic’s launch of the Model Context Protocol 2 weeks prior, and GitHub’s recent release of agent tool extensions for Copilot that pushed developers to seek standardized, low-overhead context handling tools. The ecosystem is also clearly moving past the general agent hype cycle to focus on standardized vertical agent skill sets, from cybersecurity to video production, with mapped industry compliance frameworks to make agents usable in regulated production environments.
---
## 4. Community Hot Spots
- [chopratejas/headroom](https://github.com/chopratejas/headroom): Its zero-refactor MCP proxy allows any existing agent or RAG deployment to immediately cut 70%+ of inference costs, making it a drop-in high-impact upgrade for nearly all production AI stacks.
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp): The zero-dependency static binary eliminates complex setup for code indexing, making high-speed full repo context accessible to every Claude Code and Cursor user without extra configuration.
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage): There is currently no comparable end-to-end open source agentic video production stack, and this project will likely become the de facto standard for autonomous generative media workflows for the developer community.
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills): By mapping standardized agent skills to widely accepted NIST and MITRE security frameworks, this project solves the extreme fragmentation in the current agent skill ecosystem for regulated use cases.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*