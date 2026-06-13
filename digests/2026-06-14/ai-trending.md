# AI 开源趋势日报 2026-06-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-13 23:04 UTC

---

# AI 开源趋势日报 2026-06-14
---
## 1. 今日速览
今日GitHub AI相关热榜呈现高度集中的爆发特征，核心热度全部指向AI编码代理的全链路配套生态，共有2个项目单日新增Star突破1500，AI相关上榜项目总新增Star超过6200。英伟达正式开源面向AI代理技能的安全扫描工具，填补了生产级Agent落地的安全校验空白，吴恩达新作多厂商大模型统一接口SDK也冲进热榜队列。整个AI开源生态的竞争重心已经从早期的大模型能力比拼，全面转向Agent工程化落地的工具链补齐阶段，大量面向开发者的低门槛生产级组件正在密集涌现。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 今日新增⭐1507
   前谷歌性能工程负责人出品的生产级AI编码代理技能库，针对Claude Code等主流编码Agent提供标准化的工程能力插件，今日登顶GitHub全品类热榜第一。
2. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 今日新增⭐809
   英伟达官方开源的AI代理技能安全扫描器，可自动检测Agent自定义技能中的漏洞、恶意代码模式与权限滥用风险，是首个大厂推出的Agent安全专项工具。
3. [LMCache/LMCache](https://github.com/LMCache/LMCache) | 今日新增⭐246
   当前性能最快的LLM KV缓存层，可实现大模型推理吞吐量2-3倍提升，无需修改原有推理框架即可快速接入。
4. [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | 今日新增⭐132
   吴恩达新作，面向多生成式AI厂商的统一接口SDK，仅需几行代码即可无缝切换OpenAI、Anthropic、国内主流大模型等几十种服务。
5. [vllm-project/vllm](https://github.com/vllm-project/vllm) | 总星⭐82776
   全球最主流的高吞吐大模型推理服务引擎，是当前90%以上开源大模型生产部署的底层选型。
6. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 总星⭐7609
   Rust栈原生的模块化LLM应用开发框架，主打极致性能与低资源占用，面向嵌入式端、边缘侧场景做了深度优化。

### 🤖 AI 智能体/工作流
1. [obra/superpowers](https://github.com/obra/superpowers) | 今日新增⭐931
   全栈代理技能开发框架+标准化软件工程方法论，帮助团队快速落地可稳定交付生产代码的AI开发代理，今日登上全品类热榜第二。
2. [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | 今日新增⭐187
   本地优先的编码代理会话智能分析工具，支持20+主流编码Agent，性能比传统用量统计工具快100倍，可完整还原Agent运行全链路过程。
3. [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 今日新增⭐107
   全量公开头部AI编码工具（Cursor、Claude Code、Windsurf等30+产品）的系统提示词、内部工具调用逻辑的开源集合，是开发者逆向优化Agent能力的核心参考资料。
4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 总星⭐192738
   Nous AI推出的可自主成长个人专属Agent，支持动态适配用户使用习惯、自动迭代技能库。
5. [browser-use/browser-use](https://github.com/browser-use/browser-use) | 总星⭐98683
   让AI代理直接操作全量网页的开源框架，零改造即可实现自动化网页交互、数据爬取、任务流执行。
6. [langgenius/dify](https://github.com/langgenius/dify) | 总星⭐145083
   国内团队主导的生产级代理工作流开发平台，支持低代码搭建复杂多代理协作系统。

### 📦 AI 应用
1. [open-webui/open-webui](https://github.com/open-webui/open-webui) | 总星⭐141388
   全兼容的开源大模型前端交互界面，支持一键对接本地部署、云端API等所有主流大模型服务。
2. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 总星⭐27359
   零API费用让AI代理直接访问全平台社交内容的工具，支持Twitter、小红书、B站等几十种内容平台的无差别读取。
3. [Firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 总星⭐132364
   面向AI代理设计的大规模网页爬取交互API，自动适配反爬机制输出结构化内容。
4. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 总星⭐47277
   全功能AI生产力桌面客户端，集成300+预设代理助手，支持本地模型无缝接入。
5. [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 总星⭐27167
   AI驱动的智能网页爬虫，自然语言描述需求即可自动完成全链路数据提取。

### 🧠 大模型/训练
1. [ollama/ollama](https://github.com/ollama/ollama) | 总星⭐174069
   本地一键部署全品类大模型的标杆工具，支持国内所有主流开源大模型的一键拉取运行。
2. [huggingface/transformers](https://github.com/huggingface/transformers) | 总星⭐161566
   全球最主流的大模型训练推理底层框架，覆盖文本、多模态、语音等所有AI场景。
3. [open-compass/opencompass](https://github.com/open-compass/opencompass) | 总星⭐7082
   全维度大模型能力评测开源平台，支持上百种评测数据集自动跑测生成对比报告。
4. [pytorch/pytorch](https://github.com/pytorch/pytorch) | 总星⭐100732
   全球占有率最高的深度学习训练框架，是当前绝大多数大模型的原生训练底座。

### 🔍 RAG/知识库
1. [mem0ai/mem0](https://github.com/mem0ai/mem0) | 总星⭐58492
   AI代理通用持久化记忆层，可跨所有主流Agent同步会话记忆、自动沉淀用户偏好。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 总星⭐82655
   支持深度文档解析的生产级开源RAG引擎，自动拆分PDF、表格等复杂格式文件生成知识向量。
3. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 总星⭐82140
   跨所有主流AI编码代理的持久会话上下文工具，自动压缩历史会话注入新对话，大幅降低Token消耗。
4. [qdrant/qdrant](https://github.com/qdrant/qdrant) | 总星⭐32166
   高性能云原生向量数据库，主打低资源占用、高查询准确率，是中小团队RAG项目的首选底座。
---
## 3. 趋势信号分析
今日热榜几乎所有高增项目都集中在AI编码代理的配套生态，从技能库开发、运行监控、安全扫描到系统提示词逆向集合形成完整链条，单日2个项目Star增量破千，是Agent工程化赛道爆发力度最强的节点之一。面向Agent技能的安全审计方向首次进入大众视野，英伟达SkillSpector开源标志着行业已经从「能跑起来」的早期探索阶段，全面转向生产级落地的安全合规、稳定性保障需求。结合近期Cursor、Claude Code等AI编码工具在开发者群体中的渗透率快速突破60%，标准化的Agent开发工具链正在快速补齐，预计接下来3个月将涌现大量面向企业场景的团队级Agent协作产品。
---
## 4. 社区关注热点
- **英伟达SkillSpector代理安全扫描器**：首个大厂出品的AI代理安全专项工具，未来将成为所有生产级自定义Agent上线前的标配校验环节，提前布局Agent安全能力的团队将获得差异化竞争力。
- **addyosmani/agent-skills生产级技能库**：由行业顶级专家沉淀的标准化编码Agent技能集合，直接降低全团队AI辅助开发的落地门槛，避免团队重复造轮子。
- **agentsview代理会话分析工具**：解决当前编码代理运行黑盒、Token成本不可控的痛点，本地部署即可完整还原Agent决策全链路过程，帮助开发者快速调优自定义技能。
- **LMCache新一代KV缓存方案**：相比现有vLLM原生KV缓存实现2-3倍吞吐量提升，无需修改业务代码即可快速接入，有望成为下一代大模型推理加速的事实标准。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*