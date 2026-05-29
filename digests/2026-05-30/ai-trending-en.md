# AI Open Source Trends 2026-05-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-29 23:13 UTC

---

# AI Open Source Trends Report (2026-05-30, GitHub Ecosystem)

---

## 1. Today's Highlights
The 2026-05-30 GitHub AI trending list shows unprecedented user enthusiasm for end-to-end AI productivity tooling, with multiple projects earning over 1,000 new stars in a single day. The most viral project, [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo), gained 3,563 new stars for its one-click AI short video generation capability, making it the fastest-growing open-source AI content tool this week. A clear emerging trend of "anti-AI slop" also appeared, with two separate open-source projects focused on eliminating generic, low-quality LLM prose amassing a combined 2,684 new stars. Microsoft’s newly released open-source document conversion tool [microsoft/markitdown](https://github.com/microsoft/markitdown) also outperformed expectations, earning 1,876 new stars as the community recognized its value as a foundational pre-processing layer for all RAG and agent workflows. The entire ecosystem centered on Anthropic’s recently launched Claude Code terminal coding agent also saw 4+ related projects hit the trending list, indicating rapid community expansion of the agent developer ecosystem.

---

## 2. Top Projects by Category
### 🔧 AI Infrastructure
1. [microsoft/markitdown](https://github.com/microsoft/markitdown) | 1,876 new stars today, total 1,876
   A Python tool that converts all office documents, PDFs and media files to clean, structured Markdown, eliminating the messy parsing outputs that have long plagued RAG and AI agent document processing pipelines.
2. [run-llama/liteparse](https://github.com/run-llama/liteparse) | 680 new stars today, total 680
   A Rust-powered ultra-fast open-source document parser optimized for high-volume AI workflows, filling the performance gap between general purpose parsers and AI-native document processing tools.
3. [anthropics/claude-code](https://github.com/anthropics/claude-code) | 460 new stars today, total 460
   The official open-source agentic terminal coding tool from Anthropic that can navigate full codebases, execute routine development tasks and manage Git workflows via natural language commands.
4. [ollama/ollama](https://github.com/ollama/ollama) | Total 172,617 stars
   The leading on-device LLM runtime that supports all top frontier open models including Kimi-K2.5, GLM-5 and DeepSeek, making local LLM deployment accessible to non-expert users.
5. [vllm-project/vllm](https://github.com/vllm-project/vllm) | Total 81,379 stars
   A high-throughput, memory-efficient LLM inference serving engine that is the de facto standard for large-scale production open LLM deployments.

### 🤖 AI Agents / Workflows
1. [affaan-m/ECC](https://github.com/affaan-m/ECC) | 1,413 new stars today, total 198,543
   An agent harness performance optimization system that adds enhanced skills, persistent memory, security hardening and research-first development workflows for Claude Code, Cursor and other coding agent platforms.
2. [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 354 new stars today, total 354
   The official Compound Engineering plugin that adds standardized workflow support for popular AI coding tools including Claude Code, Codex and Cursor, making large-scale compound task execution reliable for coding agents.
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Total 172,787 stars
   The leading community-developed general purpose AI agent framework designed to grow its capabilities adaptively alongside user usage patterns.
4. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | Total 46,571 stars
   A TypeScript-based AI productivity studio that unifies access to all frontier LLMs, with built-in autonomous agent support and a library of 300+ pre-built domain-specific assistants.

### 📦 AI Applications
1. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 3,563 new stars today, total 3,563
   A zero-config AI short video generation tool that produces full high-definition short videos automatically with just a single prompt, no manual post-editing required.
2. [twentyhq/twenty](https://github.com/twentyhq/twenty) | 575 new stars today, total 575
   The first fully AI-native open-source alternative to Salesforce, built from scratch to support AI-powered customer data analysis, contact automation and workflow orchestration out of the box.
3. [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | 294 new stars today, total 294
   A self-contained, fully offline edge survival computer preloaded with offline-running local AI agents, critical emergency knowledge and utilities that work without internet access anywhere.

### 🧠 LLMs / Training
1. [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) | 346 new stars today, total 346
   An open platform built for fully reproducible world model research and standardized benchmarking, solving the current fragmentation in world model evaluation workflows.
2. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | Total 71,700 stars
   The unified, highly efficient fine-tuning framework that supports over 100 LLMs and vision-language models, and is the most widely used open fine-tuning tool for open model developers.
3. [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | Total 237 stars
   A minimal, scalable and reliable library for foundation and world model pretraining that eliminates common runtime instability issues in large-scale LLM training runs.

### 🔍 RAG / Knowledge
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Total 81,523 stars
   A leading open-source RAG engine that combines advanced retrieval capabilities with native agent support, creating a robust, production-ready context layer for LLM applications.
2. [mem0ai/mem0](https://github.com/mem0ai/mem0) | Total 57,094 stars
   A universal cross-platform persistent memory layer for AI agents that solves the long-standing problem of context fragmentation across different agent sessions.
3. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Total 79,605 stars
   A pluggable session persistence tool that automatically captures, compresses and injects relevant historical context for all popular coding agents including Claude Code, OpenClaw and Gemini CLI.

---

## 3. Trend Signal Analysis
Today’s data makes clear that the coding agent ecosystem is receiving explosive community attention, directly driven by Anthropic’s recent public launch of Claude Code as a terminal-native agentic coding tool last week. This is the first time a new open LLM agent platform has spurred a full, rapidly growing third-party plugin ecosystem within a 7-day window, with multiple new projects targeting unified "agent harness" standards that work across Claude Code, Cursor, Codex and all other popular coding agent tools.

A notable new emerging direction that first appeared on trending today is the "anti-slop" movement, where developers are building standardized skill sets that strip away overused, generic LLM phrasing and "AI tells" from generated text, producing natural, human-like output that is indistinguishable from human writing. This trend directly responds to widespread user fatigue with the low-quality, homogeneous generic prose generated by default LLM settings. There is also rising adoption of new lightweight, performance-optimized document parsing tools, as the ecosystem moves away from bloated general purpose parsers towards AI-native parsing layers specifically designed to feed clean structured data into RAG and agent pipelines.

---

## 4. Community Hot Spots
- **Claude Code ecosystem plugin development**: Anthropic’s newly released terminal coding agent already has a massive fast-growing user base, and there is still very limited high-quality third-party plugin tooling, creating high demand for useful productivity plugins that extend the agent’s core capabilities.
- **Anti-generic AI output skill sets**: Projects like [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) and [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) have already gained thousands of stars, reflecting strong user demand to improve default LLM output quality for professional writing, content creation and enterprise use cases.
- **Lightweight AI-native document parsing**: Tools like Microsoft markitdown and LlamaIndex liteparse are filling a long unaddressed pain point in the RAG workflow, and further optimized specialized parsers for niche use cases (scanned docs, engineering blueprints) will see massive adoption in the coming months.
- **Open reproducible world model research platforms**: [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) is the first purpose-built open platform for world model benchmarking, and it will become the de facto standard for the next frontier of AI research as world model development ramps up across the industry.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*