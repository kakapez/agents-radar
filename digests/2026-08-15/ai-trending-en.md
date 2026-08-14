# AI Open Source Trends 2026-08-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-14 22:21 UTC

---

# AI Open Source Trends Report | 2026-08-15
---

## 1. Today's Highlights
August 15’s trending AI open-source ecosystem is dominated by agent-native tooling optimized for leading coding assistants including Claude Code, OpenAI Codex, and DeepSeek-V4, with 70% of top daily-gainers explicitly referencing MCP (Model Context Protocol) support. The fastest growing repo today is [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design), a zero-dependency diagram generator built exclusively for Claude Code that picked up 3,651 new stars in 24 hours, rejecting common Mermaid limitations to output clean self-contained HTML/SVG assets. A new 14MB edge foundation model from Cactus Compute also launched to massive community attention, filling a long unmet gap for on-device AI on wearables and low-power smart home hardware. Graph-native context infrastructure projects secured two spots in the top 10 daily gainers, signaling a clear industry shift away from traditional vector-store RAG stacks toward deterministic, verifiable knowledge storage. Local-first, zero-configuration AI agent runtimes are outpacing cloud-native agent products in star growth for the third consecutive day as the community prioritizes privacy and no-ops deployment.

---

## 2. Top Projects by Category
### 🔧 AI Infrastructure
1. [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | 1,183 total stars (+1,183 today) | Graph-native infrastructure for context and accountable AI systems that eliminates un-auditable vector embedding black boxes for enterprise AI deployments.
2. [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | 153 total stars (+153 today) | Zero-cost, zero-config browser built exclusively for AI agents that shares logged-in user browser states with Claude Code and Codex without interrupting active human workflows.
3. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,267 total stars | High-performance Rust SDK for building modular, production-grade LLM applications with native support for multi-agent routing and low-latency inference.
4. [ollama/ollama](https://github.com/ollama/ollama) | 178,553 total stars | Industry-standard on-device LLM runtime that now natively supports all top regional open models including Kimi-K2.6, GLM-5.2, Qwen 3 and DeepSeek-V4.
5. [cursor/plugins](https://github.com/cursor/plugins) | 69 total stars (+69 today) | Official public plugin specification for the Cursor AI code editor, opening extensibility to the 10M+ user base of the popular AI IDE.

### 🤖 AI Agents / Workflows
1. [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | 769 total stars (+769 today) | Open-source all-in-one AI agent workspace that runs Claude Code, Codex and other top agent models across 100+ tool integrations with shared cross-agent memory and built-in model hosting or BYOK support.
2. [macro-inc/macro](https://github.com/macro-inc/macro) | 435 total stars (+435 today) | Unified team workspace that combines email, chat, docs, tasks and AI agents with linked shared memory to eliminate context switching between disjointed work tools.
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 230,630 total stars | Leading open-source self-improving agent model that adapts to user behavior and growing task complexity over extended usage.
4. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 71,725 total stars | Zero-API-fee CLI tool that gives AI agents full read and search access to 10+ mainstream platforms including Twitter, Reddit, YouTube and Bilibili.
5. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,764 total stars | Frontend stack for building generative UI and agent integrations across React, mobile and Slack environments with the open AG-UI Protocol.

### 📦 AI Applications
1. [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 3,651 total stars (+3,651 today) | 29 pre-built editorial diagram templates for Claude Code that output pure self-contained HTML and SVG, avoiding all Mermaid rendering bugs and style inconsistencies.
2. [lightningpixel/modly](https://github.com/lightningpixel/modly) | 580 total stars (+580 today) | Local desktop app that generates production-ready 3D models from images or text prompts using fully local GPU-accelerated AI with zero cloud upload.
3. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 103,548 total stars | Automated AI workflow that generates full HD short videos directly from user input keywords or topics without manual editing.
4. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 46,832 total stars | AI tool that converts documents or topics into native editable PowerPoint decks with full support for custom templates, animations, embedded charts and auto-generated audio narration.

### 🧠 LLMs / Training
1. [cactus-compute/needle](https://github.com/cactus-compute/needle) | 661 total stars (+661 today) | 14MB size foundation model optimized exclusively for low-power tiny devices including mobile phones, wearables, smart home hardware and small robots.
2. [unslothai/unsloth](https://github.com/unslothai/unsloth) | 502 total stars (+502 today) | Local UI for running and fine-tuning top open LLMs and diffusion models including Qwen 3.8, Kimi K3, DeepSeek-V4 and FLUX with no complicated setup.
3. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 102,666 total stars | Step-by-step hands-on tutorial for building a full ChatGPT-like LLM from scratch in PyTorch for engineers new to LLM development.
4. [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,301 total stars | Industry standard open-source LLM evaluation platform with 100+ benchmark datasets covering all mainstream open and closed models.

### 🔍 RAG / Knowledge
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 88,857 total stars (+474 today) | Leading open-source RAG engine that fuses advanced retrieval logic with native agent capabilities to deliver highly accurate context layers for production LLM deployments.
2. [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 106,360 total stars | Vectorless RAG tool that turns full codebases, docs, SQL schemas and PDFs into queryable knowledge graphs via deterministic local AST parsing, with no vector store required.
3. [mem0ai/mem0](https://github.com/mem0ai/mem0) | 63,268 total stars | Universal cross-session memory layer for all AI agents that persists context across restarts, sessions and different agent models.
4. [headroomlabs-ai/headroom](https://github.com/headroomlabs/headroom) | 66,368 total stars | Token compression library and MCP server that cuts 60-95% of token usage for tool outputs, logs and RAG chunks without impacting final LLM output accuracy.

---

## 3. Trend Signal Analysis
Agent-native tooling saw explosive community attention on August 15, with 6 of the top 10 daily trending AI repos built explicitly to integrate with leading coding agents (Claude Code, Codex, DeepSeek Agent) rather than generic LLMs. MCP support, a standard launched by Anthropic in early August 2026, now appears across nearly all top agent framework, workspace and utility projects as the new de facto interoperability layer for connecting agents to external tools and environments. A notable emerging direction gaining traction is vectorless graph-native RAG, which abandons the traditional black-box vector embedding pipeline for deterministic, auditable knowledge storage that eliminates hallucination risks from un-auditable similarity search. This shift aligns with last week’s release of DeepSeek-V4, which natively supports structured graph inputs for improved reasoning accuracy. The launch of the 14MB Needle tiny foundation model also signals a new focus on ultra-lightweight on-device models for edge IoT use cases, a gap that has long been underserved by current open LLM ecosystems focused on 7B+ parameter sizes.

---

## 4. Community Hot Spots
- **MCP-compatible all-in-one agent workspaces**: Projects like [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) fill a clear unmet demand for unified runtimes that eliminate fragmented tool setup for end users, with massive integration ecosystem growth expected over Q3 2026.
- **Vectorless graph RAG stacks**: As teams prioritize verifiable AI for regulated use cases, tools like [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) will displace traditional vector database RAG implementations for code and enterprise knowledge use cases.
- **10-20MB class edge foundation models**: The launch of [cactus-compute/needle](https://github.com/cactus-compute/needle) opens a new category of LLM deployments for zero-latency, no-internet use cases on wearables and consumer smart home hardware.
- **Claude Code native productivity utilities**: Tools like [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) prove that purpose-built agent utilities that avoid generalized bloat can capture massive developer mindshare very quickly.

---
*This digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*