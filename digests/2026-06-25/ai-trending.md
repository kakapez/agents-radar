# AI 开源趋势日报 2026-06-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-24 23:03 UTC

---

# AI 开源趋势日报（2026-06-25）
---
## 1. 今日速览
今日GitHub AI开源赛道迎来智能体类项目的集体爆发，多个垂直场景专属端到端Agent工具单日Star增量破千，登顶全平台热度榜。其中全球首个开源Agent驱动的全链路视频生产系统*OpenMontage*单日新增3703星成为最大黑马，知名开源大模型团队Nous Research推出的原生智能体项目*hermes-agent*单日涨星超1100，国内开发者贡献的LLM驱动股票智能分析工具也获得近1500星增量。同时7天活跃项目池呈现出Agent基础设施升级、RAG无向量化、端侧轻量化等方向的持续高热度，面向生产落地的完整解决方案取代单一大模型工具，成为当前社区最追捧的赛道。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
- [stablyai/orca](https://github.com/stablyai/orca)  | 今日新增387星 | 面向多并行Agent的原生开发环境（ADE），支持用户对接自有订阅运行任意编码类Agent，同时覆盖桌面端与移动端，补齐了Agent工程化的运行时缺口
- [google-labs-code/design.md](https://github.com/google-labs-code/design.md)  | 今日新增504星 | 谷歌实验室推出的结构化视觉身份描述规范，为编码Agent提供持久、统一的设计系统认知，解决多轮开发中UI风格不一致的行业痛点
- [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星84046 | 业界主流的高吞吐大模型推理服务引擎，持续迭代支持最新端侧模型与多Agent并行调用场景
- [ollama/ollama](https://github.com/ollama/ollama) 总星174865 | 最易用的本地化大模型部署工具，已全量支持Kimi-K2.6、GLM-5.1等国内最新开源大模型
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) 总星140109 | 全球应用最广的Agent工程开发平台，近期更新的原生MCP能力大幅降低了工具调用开发门槛
### 🤖 AI 智能体/工作流
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)  | 今日新增3703星 | 全球首个开源Agent化全链路视频生产系统，内置12条流水线、52个工具、500+Agent技能，可直接将普通编码助手转换为完整视频生产工作室
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) 总星202010 + 今日新增1174星 | Nous团队官方推出的可成长原生智能体，支持基于用户交互自主迭代技能库
- [revfactory/harness](https://github.com/revfactory/harness)  | 今日新增274星 | 面向智能体团队的元技能框架，可自动生成领域专属多智能体分工体系、定义角色能力与配套技能
- [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)  | 今日新增693星 | 基于AI编码Agent的一键式全站克隆脚手架，单命令即可复刻任意站点的功能与风格
- [browser-use/browser-use](https://github.com/browser-use/browser-use) 总星100508 | 让AI Agent原生调用浏览器能力的基础库，是当前网页自动化Agent的底层事实标准
### 📦 AI 应用
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 总星48422 + 今日新增1461星 | LLM驱动的多市场股票智能分析系统，整合多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行
- [interviewstreet/hiring-agent](https://github.com/interviewstreet/hiring-agent)  | 今日新增152星 | 专为HR场景设计的AI智能招聘Agent，可自动完成简历初筛、能力评分全流程
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) 总星31070 | 全链路AI生成原生可编辑PPT工具，支持自定义模板、原生动画与语音旁白生成，完全摆脱图片式导出的痛点
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) 总星47755 | 全功能AI生产力桌面端，统一对接300+前沿大模型与自定义智能体，是当前国内活跃度最高的开源AI客户端
### 🧠 大模型/训练
- [huggingface/transformers](https://github.com/huggingface/transformers) 总星161877 | 全球最主流的SOTA多模态模型定义、训练与推理框架，持续适配最新的全链路Agent原生模型
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) 总星7739 | Rust生态的模块化高性能LLM应用开发框架，主打低延迟、高并发的生产级部署
- [open-compass/opencompass](https://github.com/open-compass/opencompass) 总星7118 | 全球覆盖最广的开源大模型评测平台，支持100+主流大模型与全维度Agent能力评测
- [pytorch/pytorch](https://github.com/pytorch/pytorch) 总星101132 | 业界通用的动态图深度学习训练框架，当前90%以上开源大模型的预训练工作基于该框架完成
### 🔍 RAG/知识库
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) 总星33378 | 无向量RAG创新方案，完全抛弃向量数据库依赖，直接通过大模型推理完成文档检索，端侧部署门槛降低70%以上
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星83548 | 国内活跃度最高的开源RAG引擎，原生整合多智能体编排能力，已落地大量企业级生产场景
- [mem0ai/mem0](https://github.com/mem0ai/mem0) 总星59364 | 面向所有Agent的通用持久记忆层，可跨会话沉淀交互数据自动召回相关上下文
- [milvus-io/milvus](https://github.com/milvus-io/milvus) 总星44934 | 云原生高性能向量数据库，当前全球企业级RAG部署的主流选择
---
## 3. 趋势信号分析
今日热度数据清晰显示，垂直场景端到端生产级智能体正在替代通用Agent框架，获得社区爆发性关注，日增星数Top3的项目全部属于该赛道，覆盖视频生产、金融投研等强需求场景。同时面向Agent的原生开发环境（ADE）、Agent专属设计规范等全新方向首次登上GitHub全球Trending榜单，代表智能体的工程化体系正在快速补全。这一波热度与近期OpenAI、Anthropic先后发布的生产级Agent原生运行环境形成强关联，开源社区快速补齐了闭源生态尚未覆盖的垂直场景适配缺口，同时向量数据库赛道出现的无向量RAG创新方案，也表明开发者正在试图绕过重依赖基础设施的传统路线，进一步降低AI落地门槛。
---
## 4. 社区关注热点
- **OpenMontage（日增3703星）**：首个完全开源的全链路智能视频生产系统，把内容生产的所有环节全部封装为Agent可调用技能，内容从业者无需任何开发即可搭建自有AI视频工作室，是近期最具颠覆性的落地级项目。
- **design.md 规范**：谷歌实验室推出的Agent专属设计描述标准，有望成为AI开发领域对接设计系统的事实规范，彻底解决AI生成界面风格反复漂移的长期痛点。
- **无向量RAG创新赛道**：PageIndex项目完全抛弃向量库依赖的推理式RAG方案，大幅降低端侧小设备部署RAG的门槛，预计接下来会出现大量相关衍生项目。
- **Agent持久内存方向集体走高**：cognee、mem0、claude-mem三个项目总星全部突破5万，说明智能体长上下文落地已经从概念验证进入规模化落地阶段。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*