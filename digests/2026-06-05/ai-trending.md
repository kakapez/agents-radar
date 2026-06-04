# AI 开源趋势日报 2026-06-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-04 23:09 UTC

---

# AI 开源趋势日报（2026-06-05）
---
## 1. 今日速览
今日GitHub AI开源热榜头部项目几乎全部聚焦智能体落地全链路基建，Token压缩、Agent性能优化类项目单日星增破3000，创近期AI开源项目单日涨幅纪录。NousResearch刚发布的`hermes-agent`可成长型开源智能体登榜热度第二，叠加Anthropic Claude Code生态配套工具集中爆发，Agent Harness赛道迎来首次集体登顶热榜的现象级行情。同时NVIDIA开源的Cosmos物理AI世界模型平台、完全开源复刻Google Notebook LM的`open-notebook`等项目也获得社区大量关注，RAG领域的Token极致压缩方向首次出现千万级热度爆款项目。整体来看2026年中开源AI赛道重心已经从单纯大模型发布，全面转向智能体落地全链路效率优化的精细化阶段。

---
## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）
1. [chopratejas/headroom](https://github.com/chopratejas/headroom) ⭐今日新增3139：一款LLM输入端极致压缩工具，可将工具输出、日志、RAG块在送入LLM前完成60-95%的Token压缩，同时保持回答准确率不变，提供库、代理、MCP服务器多种形态，直接解决当前智能体运行Token成本过高的核心痛点。
2. [github/copilot-sdk](https://github.com/github/copilot-sdk) ⭐今日新增107：GitHub官方推出的多平台Copilot Agent集成SDK，支持将Copilot智能体能力快速接入任意第三方应用和服务，标志着GitHub正式开放其代码Agent生态。
3. [NVIDIA/cosmos](https://github.com/NVIDIA/cosmos) ⭐今日新增244：NVIDIA开源的物理AI世界模型开放平台，提供完整的世界模型、数据集和工具链，面向机器人、自动驾驶、智能基建场景开发者。
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐81,947：当前社区最主流的高吞吐量大模型推理服务引擎，近期新增大量Agent场景下的低延迟推理优化特性。
5. [ollama/ollama](https://github.com/ollama/ollama) ⭐173,189：端侧大模型一键部署工具，现已全面支持国内外所有主流开源大模型的一键拉起。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
1. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐总量180,907 / 今日新增1951：NousResearch官方发布的「可随用户成长」通用智能体，是近期热度最高的原生开源Agent项目。
2. [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐总量207,167 / 今日新增1736：面向Claude Code、Cursor、OpenCode等代码Agent的性能优化系统，覆盖技能管理、本能响应、记忆、安全全链路优化，是当前代码Agent生态的核心基建。
3. [langgenius/dify](https://github.com/langgenius/dify) ⭐143,882：生产级智能体工作流开发平台，是国内开发者使用最广泛的Agent落地脚手架。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐57,722：面向所有AI智能体的通用记忆层，解决Agent跨会话上下文持久化需求。
5. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) ⭐今日新增173：开源Agent通用技能包，支持自动爬取Reddit、X、YouTube、HN等全网平台近30天内容，输出带事实依据的热点主题总结。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
1. [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) ⭐今日新增482：完全开源实现的Google Notebook LM平替，比闭源版本支持更多自定义扩展能力，可本地部署运行。
2. [Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber) ⭐今日新增583：全平台本地运行的开源LLM虚拟主播系统，支持免手触语音交互、语音打断、Live2D实时表情驱动。
3. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐46,877：国产开源AI生产力工作台，集成智能聊天、自主Agent、300+预置助手，统一接入所有主流前沿大模型。
4. [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ⭐113,093：提供100+可直接运行的开源AI Agent和RAG应用，一键克隆即可部署。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
1. [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐100,383：当前社区最主流的深度学习训练框架，最新版本新增原生支持世界模型训练的加速组件。
2. [huggingface/transformers](https://github.com/huggingface/transformers) ⭐161,285：覆盖文本、视觉、音频、多模态全品类的大模型定义开发框架，是AI开发的事实标准基础设施。
3. [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐51,130：开源教程项目，支持2小时从零训练出64M参数的完整小大模型，适合大模型初学者入门。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
1. [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) ⭐总量79,829 / 今日新增105：轻量级开源OCR工具包，支持100+语言，可将任意PDF、图片文档转为结构化数据接入LLM，是RAG场景下文档预处理的核心工具。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐81,922：领先的开源RAG引擎，融合Agent能力为LLM提供高质量上下文层。
3. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐80,664：全Agent通用跨会话持久化上下文工具，自动压缩Agent运行全流程记录，在后续会话中自动注入相关上下文。
4. [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐44,629：云原生高性能向量数据库，是当前企业级RAG场景的主流存储方案。

---
## 3. 趋势信号分析
今日单日星增最高的3个AI项目全部属于Agent落地基建领域，Token压缩、Agent Harness优化方向正在爆发，此前分散的各类Agent配套工具首次集体冲进Trending榜单头部，说明社区已经从「搭建Agent框架」的探索阶段，全面转向「提升Agent实际运行效率」的精细化落地阶段。完全替代Google Notebook LM的开源实现`open-notebook`登榜，说明闭源AI消费级产品的开源平替化已经成为新的热点赛道。近期OpenAI、Anthropic先后发布新一代代码Agent产品，直接带动了Cursor、Claude Code生态的优化工具井喷，同时物理AI方向NVIDIA开源Cosmos世界模型平台，也预示着端侧实体智能的开源生态即将进入快速增长期。

---
## 4. 社区关注热点
-  现象级爆款项目[chopratejas/headroom](https://github.com/chopratejas/headroom) 单日星增超3000，60-95%的Token压缩比例可以直接将现有RAG/Agent pipeline的推理成本降低一半以上，适配所有主流LLM，几乎所有AI应用开发者都值得快速接入测试。
-  Agent Harness生态首次集体爆发，`ECC`+`hermes-agent`+`claude-mem`已经组成了完整的开源通用Agent运行优化栈，是近期最具落地潜力的自主智能体体系。
-  开源Google Notebook LM平替`open-notebook`完全支持本地部署，自定义知识库能力远超闭源版本，是个人用户搭建私有本地知识库的首选替代方案。
-  OpenClaw生态配套工具批量涌现，Windows端运行节点、多Agent统一调度能力已经成型，国产开源Agent操作系统的雏形已经显现。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*