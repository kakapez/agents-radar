# AI 开源趋势日报 2026-05-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-28 23:17 UTC

---

# 2026-05-29 AI 开源趋势日报
---
## 1. 今日速览
今日GitHub AI开源赛道迎来代码Agent生态的集体爆发，Trending榜单中有7个项目围绕Agent技能体系相关，头部项目单日新增星数最高突破4600。AI一键生成短视频工具MoneyPrinterTurbo登顶今日全平台星数增长榜首，创下近期AI应用类项目涨星纪录。Anthropic官方公开Agent技能仓库、大量第三方开发者推出适配Claude Code、Cursor等编码助手的技能插件，标志着C端AI编码助手的生态配套正快速成熟。同时反AI生成内容同质化的"stop-slop"相关项目首次批量进入热榜，反映社区对AI输出质量的要求从"能用"转向"好用"。

## 2. 各维度热门项目
### 🔧 AI 基础工具
- [microsoft/markitdown](https://github.com/microsoft/markitdown)：累计星数待补，今日新增1263星，微软推出的文件/Office文档转Markdown专用工具，完美适配LLM输入格式要求，是Agent处理非结构化文档的核心前置工具
- [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)：累计星数待补，今日新增253星，专为LLM优化的开源网页爬虫，直接输出干净结构化内容无需二次清洗，大幅降低RAG和网页Agent开发门槛
- [OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS)：累计星数待补，今日新增53星，国内开源的高表现力语音生成全家桶，覆盖长音频、多角色对话、实时流TTS等全场景能力
- [vllm-project/vllm](https://github.com/vllm-project/vllm)：累计81296星，高吞吐低延迟LLM推理部署引擎，是当前大模型生产落地的工业级事实标准
- [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything)：累计星数待补，今日新增3766星，支持全主流编码AI助手的代码知识图工具，可把任意项目代码转为交互式可查询知识图谱，大项目开发提效显著

### 🤖 AI 智能体/工作流
- [anthropics/skills](https://github.com/anthropics/skills)：累计星数待补，今日新增791星，Anthropic官方公开的Agent技能标准仓库，直接对齐Claude Code生态的所有能力定义，是当前Agent技能开发的事实参考规范
- [affaan-m/ECC](https://github.com/affaan-m/ECC)：累计197214星，今日新增1388星，面向Claude Code、Cursor等编码助手的Agent harness性能优化系统，覆盖技能管理、记忆持久化、安全防护全链路
- [obra/superpowers](https://github.com/obra/superpowers)：累计星数待补，今日新增1726星，开源Agent技能框架与软件开发方法论，大幅降低自定义编码智能体的搭建成本
- [langgenius/dify](https://github.com/langgenius/dify)：累计143004星，生产级Agent工作流开发平台，支持零代码搭建可直接上线的AI应用
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain)：累计137894星，当前用户量最大的Agent开发工程平台，覆盖从原型到生产的全流程工具链

### 📦 AI 应用
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)：累计星数待补，今日新增4685星，AI大模型驱动的一键生成高清短视频工具，零代码门槛大幅降低中小内容创作者的生产门槛
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)：累计星数待补，今日新增2235星，专门优化AI生成内容质感的技能插件，彻底避免大模型输出千篇一律的通用模板内容
- [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)：累计星数待补，今日新增755星，从输出文本中移除典型AI生成痕迹的技能文件，大幅提升AI写作内容的真实感
- [open-webui/open-webui](https://github.com/open-webui/open-webui)：累计139071星，全模型兼容的开源AI聊天界面，支持本地部署、多用户权限管理，是团队级私域AI部署的首选方案
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)：累计46498星，全大模型统一接入的AI生产力工作室，内置300+开箱即用Agent助手

### 🧠 大模型/训练
- [huggingface/transformers](https://github.com/huggingface/transformers)：累计161024星，全球应用最广的大模型开发框架，支持所有主流文本、多模态模型的训练与推理
- [ollama/ollama](https://github.com/ollama/ollama)：累计172531星，一键本地运行任意开源大模型的工具链，普通开发者无需复杂配置即可搭建本地私域大模型服务
- [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)：累计71681星，支持100+大模型/多模态模型的统一微调工具，大幅降低大模型自定义训练门槛
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)：累计96185星，手把手从0实现ChatGPT类大模型的开源教程，是大模型入门的最受欢迎学习资料

### 🔍 RAG/知识库
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：累计81454星，融合Agent能力的生产级RAG引擎，支持复杂非结构化文档的高精度检索
- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)：累计125753星，支持规模化网页爬取与交互的AI友好搜索引擎，是网页类RAG项目的首选底层工具
- [mem0ai/mem0](https://github.com/mem0ai/mem0)：累计56996星，面向所有AI Agent的通用持久化记忆层，无需复杂配置即可实现跨会话的上下文持久化
- [milvus-io/milvus](https://github.com/milvus-io/milvus)：累计44511星，云原生高性能向量数据库，是当前生产级RAG项目的主流存储方案

## 3. 趋势信号分析
今日热榜最突出的特征是AI Agent技能生态迎来爆发性关注，此前分散的技能定义框架今日集中登榜，头部相关项目单日涨星均超过700，直接对应近期Anthropic正式发布Claude Code编码智能体后，开发者对Agent自定义能力的旺盛需求，围绕编码助手的插件生态正快速形成增量蓝海。反AI生成内容同质化（Stop Slop）是首次批量出现在热榜的新兴方向，切中当下大模型输出内容模板化、同质化的行业普遍痛点，有望成为下一代提示词工程的核心演进方向。基础数据预处理工具如文档转Markdown、LLM友好爬虫热度同步回升，侧面说明Agent落地生产的全链路工具链正从核心框架向上下游配套快速补齐，整体产业从"做大模型"向"用大模型"的落地倾斜趋势进一步明确。

## 4. 社区关注热点
- Anthropic官方开源的skills仓库：直接定义Agent技能的官方标准，开发者可基于此快速适配Claude生态的所有应用，生态红利期变现潜力极高
- MoneyPrinterTurbo 单日涨星4685：零代码AI高清短视频生成工具大幅降低内容创作门槛，中小创作者需求爆发，是近期面向C端的AI应用赛道最大黑马
- "Stop Slop"系列开源项目：反AI生成同质化内容的新方向，当前市场上同类解决方案极少，拥有极高的商业化落地空间
- Understand-Anything 代码知识图工具：全主流编码AI助手适配，可快速将任意项目代码转成交互式可查询知识图谱，大幅降低大代码库的理解成本，面向开发者的付费转化路径清晰

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*