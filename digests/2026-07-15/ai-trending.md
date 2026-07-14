# AI 开源趋势日报 2026-07-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-14 22:56 UTC

---

# AI 开源趋势日报（2026-07-15）
---
## 1. 今日速览
今日GitHub AI热榜呈现明显的「编码Agent技能生态集体爆发」特征，单日多个相关项目涨星破千，创下年内细分赛道涨星纪录。两个面向个人用户的开源交易Agent项目同时登榜，金融AI工具成为继编码工具之后的又一增长热点。首个面向Agent的破坏性命令防护工具发布，填补了本地全权限运行AI Agent的安全能力空白。开源AI视频编辑器OpenCut单日吸星4300+，有望快速成为闭源剪辑工具的主流开源替代。

## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [mattpocock/skills](https://github.com/mattpocock/skills) ⭐+1864 今日新增 | 直接从个人工程师的Claude工作目录开源的实用技能库，开箱即可被所有主流编码AI助手调用，发布即破单日涨星纪录。
- [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) ⭐+481 今日新增 | Rust实现的Agent命令防护工具，可自动拦截AI代理执行危险的Shell/Git删除、覆写命令，解决本地全权限运行Agent的核心安全痛点。
- [chenyme/grok2api](https://github.com/chenyme/grok2api) ⭐+179 今日新增 | 面向Grok全版本的多账号API网关，解决xAI官方接口限流、多账号切换不便的问题，是首个高星的Grok生态开源工具。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐86,263 | 工业界主流的高吞吐量LLM推理引擎，目前已支持近百款开源大模型的一键部署。
- [ollama/ollama](https://github.com/ollama/ollama) ⭐176,114 | 本地大模型部署事实标准工具，近期新增了对国内主流开源模型Kimi-K2.6、GLM-5.1的原生支持。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) ⭐+1265 今日新增 | 个人专属交易Agent工具，可自动完成行情分析、标的筛选、交易信号推送全流程，普通用户克隆即可直接运行。
- [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) ⭐+156 今日新增 | 模拟对冲基金团队的多智能体交易系统，集成了分析师、风控、交易员三类角色，是当前最完整的开源多金融Agent实现。
- [langgenius/dify](https://github.com/langgenius/dify) ⭐148,837 | 工业级Agent工作流开发平台，新增的Skill编排能力可快速对接各类编码助手扩展。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐214,861 | 当前星数最高的端侧原生Agent运行框架，支持随用户需求动态扩展能力边界。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [OpenCut-app/OpenCut](https://github.com/OpenCut-app/OpenCut) ⭐+4349 今日新增 | 开源CapCut替代方案，完整复刻剪映所有AI剪辑、自动生成字幕、AI特效能力，当日登顶GitHub全平台热榜第一。
- [Nutlope/hallmark](https://github.com/Nutlope/hallmark) ⭐+1010 今日新增 | 针对Claude Code、Cursor等工具的反AI劣质生成插件，可强制AI输出符合工业设计规范的界面代码，解决当前AI生成设计质量低下的痛点。
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) ⭐120,727 +1104 今日新增 | 集成100+可直接运行的AI Agent&RAG落地样例，是新手入门LLM应用开发的最高星教程仓库。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐48,577 | 国产全功能AI生产力客户端，统一支持300+主流大模型、自定义Agent技能，近期更新后本地运行效率提升300%。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [HenryNdubuaku/maths-cs-ai-compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium) ⭐+69 今日新增 | 面向AI/ML研发工程师的全栈知识汇总教程，覆盖从数学基础到大模型前沿技术的完整学习路径。
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐162,609 | 全球最主流的多模态大模型开发框架，最新版本已支持所有开源MoE模型的训练与推理。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐99,093 | 手把手从零实现类ChatGPT模型的爆款教程，是新手理解大模型底层原理的首选开源资料。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,192 | 业内公认的权威大模型评测平台，覆盖100+数据集、所有主流闭源开源模型的能力基准测试。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐86,287 +1858 今日新增 | AI编码助手专属技能，可将任意代码库、SQL schema、文档生成可查询的知识图谱，让编码Agent同时掌握代码、数据库、基础设施全链路上下文。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐85,041 | 国产头部开源RAG引擎，融合最新的图检索技术，上下文准确率比传统向量检索方案提升40%以上。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐60,830 | 通用AI Agent记忆层，可跨所有Agent会话持久化存储用户历史交互信息，无需单独对接向量数据库。
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐34,024 | 无向量推理式RAG方案，跳出传统向量检索的精度瓶颈，直接用大模型完成文档内容理解与召回，推理效果远超传统RAG。

## 3. 趋势信号分析
今日热榜最明确的信号是面向Claude Code、Codex、Cursor等AI编码助手的**Skill扩展生态**正在迎来爆发性集体增长，单日3个相关项目涨星均突破1000，是过去从未出现的现象，此前行业注意力普遍集中在Agent框架层，现在生态已落地到开发者日常高频使用的编码工具扩展层。同时金融垂直Agent赛道热度快速攀升，两个交易类项目同步登榜，标志着AI Agent开始脱离泛通用场景，往个人可直接落地的高价值垂直场景渗透。技术栈层面Rust语言在Agent安全、高性能向量数据库领域占比持续提升，结合近期Anthropic发布Claude Code 2、OpenAI开放Codex本地运行能力的行业背景，开发者正在快速补全新一代编码Agent的周边能力栈。

## 4. 社区关注热点
- **编码Agent Skill生态开发**：当前所有主流AI编码助手都已开放Skill扩展能力，但生态还处于极早期，相关工具、分发平台都存在大量空白，开发者入局门槛低、流量红利极高。
- **个人开源交易Agent**：该方向近期连续多周占据热榜高位，用户付费意愿极强，基于现有开源样例做轻量定制即可快速落地个人可用的量化交易工具。
- **Agent全权限运行安全防护**：大量开发者现在直接给本地Agent开放系统全权限，但相关安全防护工具几乎空白，破坏性命令拦截这类轻量工具极易获得社区关注。
- **无向量RAG技术**：跳出传统向量数据库内卷的新方向，基于大模型原生推理的检索方案性能已经追平甚至超过传统向量检索，成为近期RAG领域的主流探索方向。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*