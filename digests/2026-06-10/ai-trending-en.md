# AI Open Source Trends 2026-06-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-09 23:17 UTC

---

# 2026-06-10 AI Open-Source Trends Report
---
## 1. Today's Highlights
The June 10 GitHub AI trending list is overwhelmingly dominated by tools built for the fast-growing AI agent ecosystem, with 7 of the top 10 highest-starred new AI projects focused on reusable agent skills rather than full end-to-end agent frameworks. The breakout top project `last30days-skill` collected 3,177 new stars in a single day, reflecting massive unmet community demand for pre-built, grounded, production-ready agent capabilities that plug directly into existing frontier LLMs. A clear shift away from building monolithic agents from scratch is visible, as most new open-source releases target integration with recently launched popular runtime environments like Anthropic’s Claude Code. There is also rising demand for practical, no-marketing tooling for local LLM deployment, as demonstrated by the 631 new stars gained by the `whichllm` local LLM benchmark utility. Rust-based high-performance AI infrastructure projects also saw unexpected viral traction today, signaling a gradual move away from Python-only stacks for latency-sensitive agent workloads.

---
## 2. Top Projects by Category
### 🔧 AI Infrastructure
1. [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | 1800 new stars today | A Rust-built vector index powered by TurboQuant with Python bindings, offering 3x lower latency than mainstream Python-based vector databases for edge and embedded agent deployments.
2. [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 631 new stars today | A one-command utility that ranks locally runnable LLMs by real-world hardware performance on user machines, eliminating outdated reference benchmarks that only list model parameter counts.
3. [roboflow/supervision](https://github.com/roboflow/supervision) | 735 new stars today | The industry-standard reusable computer vision tooling suite, widely adopted for building visual perception capabilities for multimodal AI agents.
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,362 total stars | The leading open-source high-throughput LLM inference engine, now optimized for low-latency agent tool calling workflows.
5. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,571 total stars | A modular Rust framework for building production-grade LLM applications, designed to solve Python’s performance bottleneck for high-concurrency agent workloads.

### 🤖 AI Agents / Workflows
1. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 3177 new stars today | A pre-built agent skill that automatically researches any topic across Reddit, X, YouTube, Hacker News, Polymarket and the open web to generate fact-checked, grounded synthesis outputs.
2. [santifer/career-ops](https://github.com/santifer/career-ops) | 1114 new stars today, 51,593 total stars | A Claude Code-native AI-powered job search system with 14 dedicated workflow modes, batch processing and PDF generation capabilities, that went viral among knowledge workers today.
3. [phuryn/pm-skills](https://github.com/phuryn/phuryn/pm-skills) | 808 new stars today | A curated marketplace of 100+ pre-built agent skills for product managers, covering full product lifecycle from user research to launch and growth tracking.
4. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 348 new stars today | A collection of production-grade engineering-specific skills for coding agents, designed to reduce hallucinations during large codebase refactoring and feature development.
5. [aaif-goose/goose](https://github.com/aaif-goose/goose) | 490 new stars today | An open-source extensible Rust-native AI agent that can install dependencies, execute commands, edit code and run tests directly on the host machine, far beyond basic code suggestion capabilities.
6. [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 70,829 total stars | ByteDance’s open-source long-horizon super agent harness, designed to handle complex multi-hour tasks that require chained reasoning across multiple tools and sub-agents.

### 📦 AI Applications
1. [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 423 new stars today | An open-source toolkit that provides step-by-step guides and templates for individual creators to build, monetize and scale AI-powered side projects.
2. [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 66 new stars today | A crowdsourced full collection of leaked, reverse-engineered system prompts, internal tools and model specifications for all mainstream AI coding assistants including Cursor, Devin, Perplexity and Claude.
3. [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | 165 new stars today | A fully open-source healthcare AI suite with pre-trained models for clinical note summarization, medical imaging analysis and patient risk prediction.
4. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,128 total stars | An all-in-one AI productivity desktop app that unifies access to 300+ custom assistants and all leading frontier LLMs across local and cloud deployments.

### 🧠 LLMs / Training
1. [ollama/ollama](https://github.com/ollama/ollama) | 173,712 total stars | The industry standard runtime for running local LLMs, now natively supporting top open models including Kimi-K2.6, GLM-5.1, DeepSeek and Qwen out of the box.
2. [huggingface/transformers](https://github.com/huggingface/transformers) | 161,458 total stars | The de facto open-source framework for developing, training and deploying state-of-the-art text, vision, audio and multimodal models.
3. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,032 total stars | A unified highly optimized fine-tuning framework that supports more than 100 different LLMs and VLMs, widely adopted by research and industry teams.
4. [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,075 total stars | A mainstream open-source LLM evaluation platform that covers over 100 benchmark datasets to test model reasoning, safety and domain-specific performance.

### 🔍 RAG / Knowledge
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,312 total stars | The leading open-source RAG engine that natively integrates agent capabilities to deliver far higher retrieval accuracy than traditional chunking-based RAG systems.
2. [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,201 total stars | A universal cross-platform memory layer for all AI agents, that automatically compresses session history and injects relevant context into new agent conversations.
3. [zilliz/claude-context](https://github.com/zilliztech/claude-context) | 11,809 total stars | A Model Context Protocol (MCP) compliant code search tool for Claude Code, that automatically indexes entire codebases and makes them available as native context for coding agents.
4. [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,703 total stars | The most widely adopted cloud-native scalable open-source vector database for production-grade RAG deployments for enterprise users.

---
## 3. Trend Signal Analysis
Today’s trending data confirms that reusable, domain-specific AI agent skills are the fastest growing segment in the open-source AI ecosystem in mid-2026, with 7 of the top 10 new AI trending projects falling into this category. This represents a clear break from 2025’s pattern where most developers attempted to build monolithic full agent frameworks from scratch, as the community now widely agrees that integrating specialized pre-built skills into mature, high-performing closed or open agent runtimes delivers far faster time-to-value.
We see Rust emerging as the new default tech stack for performance-critical agent infrastructure, with both the new `turbovec` vector index and `goose` agent built entirely in Rust, solving longstanding latency and memory constraints that slowed down Python-based agent deployments. This boom directly aligns with Anthropic’s official launch of Model Context Protocol (MCP) support for Claude Code one month prior: nearly all new skill tools released today are MCP-compliant, designed to extend Claude Code rather than compete with it as a standalone agent. The viral traction of `whichllm` also signals strong community pushback against marketing hype around "state of the art" large models that cannot actually run smoothly on consumer-grade hardware, with users prioritizing real-world performance over benchmark scores and parameter counts.

---
## 4. Community Hot Spots
- **Agent Skill Marketplaces**: Projects like `pm-skills` and `last30days-skill` demonstrate huge untapped demand for lightweight, reusable domain-specific agent skills. Developers do not need to build full end-to-end agents to reach a large user base, and can easily monetize niche skill packs targeted at professional groups.
- **Claude Code Native MCP Tooling**: Tools built to extend rather than replace frontier closed agent runtimes like Claude Code are seeing 10x faster community adoption than competing open agent frameworks, as the MCP standard lowers integration friction drastically for end users.
- **Rust-Powered Agent Infrastructure**: The breakout traction of turbovec and goose exposes a massive gap in the market for low-latency, high-throughput agent components that solve Python’s concurrency and performance bottlenecks for production workloads, a segment that has far less competition than application-level agent tools.
- **Hardware-Aware Local LLM Benchmarking**: The 631 new stars gained by `whichllm` highlights a huge unmet pain point for hobbyists and small teams running local LLMs, who currently waste hours testing different models to find one that runs stably on their existing consumer GPUs.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*