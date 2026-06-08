# AI 开源趋势日报 2026-06-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-08 23:12 UTC

---

# AI 开源趋势日报（2026-06-09）
---
## 1. 今日速览
今日GitHub AI开源生态核心动向高度聚焦AI Agent落地赛道，Trending榜单TOP2项目单日新增Star均突破1700，创下近期Agent类项目涨星记录。Claude Code作为当前主流Agent开发范式，相关教程、适配插件、垂直场景落地项目今日集中扎堆登榜，成为本周最明确的热点主线。零成本全网数据爬取、无需额外API权限的Agent工具类项目持续受到开发者热捧，海外开源项目与国内本土适配的Agent能力扩展项目同步上榜。传统大模型训练、基础框架类项目保持稳定的社区关注度，未出现突发爆火的底层架构类新项目。

---
## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)：今日新增1730⭐，基于TurboQuant构建、Rust编写带Python绑定的高性能向量索引工具，主打极致低延迟检索性能，今日登榜成为端侧向量检索方向的新热点项目。
2. [roboflow/supervision](https://github.com/roboflow/supervision)：今日新增1140⭐，开源可复用计算机视觉工具集，覆盖目标检测、标注后处理等全流程常用能力，是CV开发者公认的效率提升工具。
3. [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm)：今日新增103⭐，一键检测本地硬件适配的最优运行LLM的CLI工具，基于真实运行跑分而非参数量排序，解决普通用户部署本地模型的筛选痛点。
4. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)：总星34107⭐，今日新增398⭐，面向Agent与生成式UI的全栈前端开发框架，支持React、Angular、移动端等多端适配，是AG-UI协议的官方实现。
5. [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)：今日新增393⭐，可视化示例驱动的Claude Code全链路教程，提供大量可直接复制使用的Agent开发模板，大幅降低代码Agent的入门门槛。
6. [google/skills](https://github.com/google/skills)：今日新增481⭐，谷歌官方发布的面向谷歌产品生态的Agent技能开源库，代表大厂官方开始推进Agent可复用技能的标准化建设。

### 🤖 AI 智能体/工作流
1. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)：今日新增3558⭐，支持跨Reddit、X、YouTube、HN、Polymarket等平台全网调研的Agent技能组件，可直接输出有事实依据的深度总结，是今日涨星最高的AI项目。
2. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)：今日新增796⭐，让AI Agent直接获取全网内容的CLI工具，零API费用覆盖Twitter、Reddit、Bilibili、小红书等国内外主流平台，解决中文互联网环境下Agent数据获取的核心痛点。
3. [aaif-goose/goose](https://github.com/aaif-goose/goose)：今日新增699⭐，开源可扩展的全功能AI Agent，超越传统代码补全能力，支持任意LLM完成安装、执行、编辑、测试全流程开发任务，是继OpenHands之后又一热门自研开发Agent。
4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)：总星187344⭐，可随用户使用过程持续迭代能力的开源Agent基座，是目前社区生态最完善的开源可训练Agent项目。
5. [santifer/career-ops](https://github.com/santifer/career-ops)：总星50467⭐，今日新增477⭐，基于Claude Code打造的AI驱动求职全流程系统，内置14种技能模式，支持批量处理简历、自动生成定制化求职信。
6. [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)：总星45158⭐，前身为chatgpt-on-wechat的超轻量开源AI助手，支持多模型多渠道接入，可自主扩展技能与长期记忆，是国内落地最广的个人Agent项目。

### 📦 AI 应用
1. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)：总星47071⭐，开源AI生产力工作台，内置300+预定义助手，支持统一接入所有主流前沿大模型，是当前社区热度最高的类ChatGPT全功能客户端。
2. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)：总星25283⭐，直接生成原生可编辑PPT的AI工具，支持保留形状、动画、演讲者配音，完全区别于传统生成幻灯片图片的低质方案。
3. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)：总星41382⭐，全开源零成本LLM驱动的A/H/美股智能分析系统，自动聚合行情、新闻、生成决策看板并支持多渠道推送。

### 🧠 大模型/训练
1. [ollama/ollama](https://github.com/ollama/ollama)：总星173617⭐，最主流的本地大模型一键部署工具，目前已经支持Kimi、GLM、DeepSeek、Qwen等所有主流开源大模型的快速运行。
2. [vllm-project/vllm](https://github.com/vllm-project/vllm)：总星82247⭐，高吞吐低显存占用的LLM推理引擎，是目前生产环境部署大模型的首选开源推理框架。
3. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)：总星72001⭐，支持100+大语言模型、多模态模型的统一高效微调框架，是国内社区使用最广的大模型微调工具。

### 🔍 RAG/知识库
1. [MemPalace/mempalace](https://github.com/MemPalace/mempalace)：今日新增237⭐，当前开源基准测试得分最高的AI长期记忆系统，完全免费开源，解决Agent多会话上下文丢失的核心痛点。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：总星82215⭐，融合Agent能力的新一代开源RAG引擎，结构化文档解析准确率远超传统RAG方案。
3. [mem0ai/mem0](https://github.com/mem0ai/mem0)：总星58072⭐，面向所有AI Agent的通用统一记忆层，无需额外开发即可为任意Agent添加跨会话的长期记忆能力。
4. [milvus-io/milvus](https://github.com/milvus-io/milvus)：总星44683⭐，云原生高性能向量数据库，是目前企业级RAG场景使用最广的开源向量检索底座。

---
## 3. 趋势信号分析
今日爆火的项目高度集中在Agent技能生态赛道，尤其是Agent全网信息获取、低门槛开发工具类项目涨星速度远超其他品类，单日新增3558星的全网调研Agent技能、零API费用覆盖全平台的Agent数据工具等项目上榜，说明开发者已经从早期研究Agent架构，转向快速补齐Agent的外部感知短板，落地可用的Agent组件成为当前最迫切的需求。
新兴技术层面，今日多个基于Rust开发的向量索引、Agent运行时项目集中登榜，代表系统级性能优化的Agent底层工具开始受到社区重点关注，集中扎堆的Claude Code相关教程也验证了Anthropic推出的Code Agent范式已经成为社区默认的主流开发标准。结合近期Anthropic Claude Code大规模公测、OpenAI更新Agent插件生态、谷歌发布Agent Skills规范等行业事件，当前整个开源社区正处于Agent应用爆发的预热期，大量开发者正在快速搭建可复用的Agent能力组件。

---
## 4. 社区关注热点
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**：今日涨星最高的开源项目，开箱即用的跨平台全网调研Agent技能，直接把此前需要大量定制开发的信息聚合能力做成通用组件，大幅降低信息类Agent的开发门槛。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)**：国内开发者出品的Agent数据爬取工具，零API成本覆盖小红书、B站等国内平台，完美解决国内开发者搭建Agent的核心数据获取痛点。
- **[RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)**：Rust编写的高性能向量索引，为后续端侧本地Agent的低延迟检索提供了新的轻量化备选方案，很可能成为下一代端侧RAG的核心底座。
- **[aaif-goose/goose](https://github.com/aaif-goose/goose)**：完全开源的全流程开发Agent，支持任意LLM运行代码、调试测试全链路操作，未来很可能快速迭代替代部分开发者的日常IDE辅助能力。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*