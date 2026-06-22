# AI Open Source Trends 2026-06-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-22 23:19 UTC

---

# 2026-06-26 AI Open Source Trends Report
---

## 1. Today's Highlights
Today’s GitHub AI trending list is overwhelmingly dominated by agent-native productivity tools, with zero base LLM releases ranking in the top 10 highest new-star repos. The world’s first fully open agentic end-to-end video production system [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) earned 2935 new stars in a single day, making it the fastest-growing AI project of the week. Multiple high-performance Model Context Protocol (MCP) servers and pre-built cross-platform agent skill libraries launched to massive community uptake, proving that developers now prioritize extending existing popular coding agents over building new standalone agent frameworks. ByteDance’s released open-source long-horizon super agent [bytedance/deer-flow](https://github.com/bytedance/deer-flow) picked up 736 new stars, indicating strong enterprise interest in self-hosted workflows for multi-hour complex research and coding tasks. There is also a clear shift away from general-purpose AI demos to production-ready, vertical-specific agent stacks targeted at non-technical practitioner audiences.

## 2. Top Projects by Category
### 🔧 AI Infrastructure
1. [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 1186 new stars today | High-performance C-written MCP server that indexes 158 programming language codebases into a persistent knowledge graph to deliver sub-ms queries, cutting context token usage for coding agents by 99% with zero dependencies.
2. [lyogavin/airllm](https://github.com/lyogavin/airllm) | 187 new stars today | Breakthrough inference optimization technology that supports 70B-parameter LLMs running on a single 4GB consumer GPU, drastically lowering barriers for local large model deployment for end users.
3. [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,572 total stars | The industry-standard high-throughput LLM inference engine that continues to lead production serving performance for all modern agent workloads at scale.
4. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,713 total stars | Rust-based modular LLM application framework for building low-latency, production-grade AI agent backends with zero Python runtime overhead.

### 🤖 AI Agents / Workflows
1. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | 2935 new stars today | The world’s first open-source agentic full video production system with 12 pipelines, 52 tools and 500+ pre-built skills that turns generic AI coding assistants into a self-contained full video production studio.
2. [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 73,211 total stars (+736 today) | ByteDance’s open long-horizon super agent harness with built-in sandboxing, persistent memory, and subagent orchestration that handles multi-hour complex research and coding tasks that earlier generation agents cannot complete.
3. [garrytan/gstack](https://github.com/garrytan/gstack) | 649 new stars today | Public release of Y Combinator CEO Garry Tan’s custom Claude Code setup with 23 opinionated pre-configured tools that assign specialized agent roles including CEO, designer, engineering manager and QA to automate full startup operation workflows.
4. [mattpocock/skills](https://github.com/mattpocock/skills) | 2051 new stars today | Curated collection of production-grade agent skills from a top TypeScript engineer’s local Claude Code directory, optimized for real-world enterprise software development use cases.
5. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 137,214 total stars (+736 today) | Scalable web scraping and interaction API purpose-built to give AI agents full, no-code access to public web content for open-ended research tasks.

### 📦 AI Applications
1. [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 957 new stars today | 817 structured cybersecurity agent skills mapped to 6 industry standard security frameworks including MITRE ATT&CK, compatible with all major coding agents for automated vulnerability assessment and threat hunting.
2. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 45,765 total stars (+1560 today) | LLM-powered multi-market stock analysis agent that pulls real-time market and news data, generates trading insights, and pushes alerts to users for zero-cost scheduled operation.
3. [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | 508 new stars today | Fully open-source AI voice studio that supports voice cloning, transcription, and custom audio generation for both creative and enterprise use cases.
4. [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | 2462 new stars today | macOS native AI-first video editor that integrates generative AI for automatic cutting, scene generation and end-to-end script-to-video workflows.

### 🧠 LLMs / Training
1. [affaan-m/ECC](https://github.com/affaan-m/ECC) | 219,898 total stars | Agent harness optimization system that improves Claude Code, Codex and other CLI agent performance by tuning skill loading, memory management and sandbox security for production workloads.
2. [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,112 total stars | Leading open LLM evaluation platform that supports 100+ datasets to benchmark model performance on reasoning, coding and agent-specific task benchmarks.
3. [zjunlp/LightThinker](https://github.com/zjunlp/LightThinker) | 164 total stars | EMNLP 2025 published step-by-step thinking compression technology that reduces LLM chain-of-thought output size by 70% without losing reasoning accuracy.

### 🔍 RAG / Knowledge
1. [langgenius/dify](https://github.com/langgenius/dify) | 146,174 total stars | Production ready agentic workflow development platform with native RAG integration for large enterprise internal knowledge base use cases.
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,368 total stars | Leading open RAG engine that fuses knowledge graph capabilities to deliver higher context accuracy for persistent agent memory systems.
3. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 83,759 total stars | Cross-session persistent memory system that compresses agent interaction history and injects relevant context into future sessions to eliminate repeated work.

## 3. Trend Signal Analysis
Today, agent-native productivity tools rather than base LLMs are seeing explosive community growth, with 7 out of the top 10 trending AI repos focused on extending Claude Code and similar CLI coding agents’ capabilities across new domains. The Model Context Protocol (MCP) ecosystem is maturing at an unprecedented speed, with multiple high-performance code context servers launching that eliminate the historic pain point of slow, token-heavy codebase indexing for coding agents. This trend directly correlates with Anthropic’s recent release of Claude Code 2.0 and the widespread adoption of CLI-based local agent workflows that prioritize extensibility over heavy cloud UIs. The community has moved past building generic "AI agent" demos, and is now shipping production-ready, pre-built skill libraries and vertical-specific agent stacks that require zero custom configuration for end users. We also see agent use cases rapidly expanding outside software development, with agent-native video production, cybersecurity, and financial analysis tools taking the top new star spots, indicating the open source agent ecosystem is moving from early adopter technical users to broader creative and industry practitioner audiences.

## 4. Community Hot Spots
- **Domain-specific MCP servers**: The [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) project’s 99% token reduction and sub-ms query performance will likely become the new standard for coding agent context management, spawning a wave of niche MCP servers for specialized data types including medical records, geospatial data, and media assets in the coming weeks.
- **Agent-native creative tooling**: The dual launches of OpenMontage agentic video production and palmier-pro AI video editor signal that generative AI creative tools are rapidly shifting from monolithic SaaS products to fully open, agent-extensible stacks that users can self-host and fully customize without vendor lock-in.
- **Cross-platform agent skill standardization**: Two top-starred new skill repositories ([Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), [mattpocock/skills](https://github.com/mattpocock/skills)) confirm the community is converging on shared, cross-platform skill specifications mapped to the agentskills.io standard, eliminating redundant development work across different agent harnesses and LLM providers.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*