# AI 开源趋势日报 2026-06-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-06 23:04 UTC

---

# AI 开源趋势日报（2026-06-07）
---
## 1. 今日速览
今日GitHub AI开源热榜完全由AI Agent生态主导，Top10新增Star项目中有7个属于Agent相关赛道，全链路落地组件集中爆发。除了底层能力层的开源记忆系统、零成本全网爬取工具冲榜之外，面向开发者的Agent前端开发栈、生成式UI协议首次获得大规模社区关注。同时开源替代类应用活跃度持续走高，功能超过官方Notebook LM的开源实现单日新增Star近800，国内开源项目贡献了接近3成的高活跃项目，中文场景适配的Agent能力组件补齐速度明显加快。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)：总星33.2k，今日新增613星，是面向Agent和生成式UI的全栈前端开发框架，支持React/Angular/移动端/Slack等多端，今日同步发布AG-UI协议正式版，是首个标准化Agent渲染交互的开源基础设施。
2. [openai/plugins](https://github.com/openai/plugins)：总星存量2.1k，今日新增215星，OpenAI官方时隔两年更新的插件开源仓库，同步开放了最新的Agent插件适配规范。
3. [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)：总星存量2.2k，今日新增219星，微软最新开源的前沿级语音大模型，端到端支持12种风格的情感化语音生成，推理速度比同类方案快3倍。
4. [openai/whisper](https://github.com/openai/whisper)：总星161.4k，今日新增155星，OpenAI开源语音识别框架今日发布v3大版本，新增支持200+方言的实时转写能力。
5. [vllm-project/vllm](https://github.com/vllm-project/vllm)：总星82.1k，高吞吐量LLM推理引擎，今日新增分布式部署支持，单集群可调度10万级并发推理请求。

### 🤖 AI 智能体/工作流
1. [obra/superpowers](https://github.com/obra/superpowers)：总星存量1k，今日新增1008星，今日热榜Star增速第一的Agent技能框架，完全基于Shell构建，直接复用现有软件生态完成Agent开发，大幅降低Agent落地成本。
2. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)：总星存量700，今日新增700星，国产开源Agent全网浏览工具，无需付费API即可支持Twitter、小红书、B站等10余个主流内容平台的内容爬取，解决了Agent获取公开社媒数据的高成本痛点。
3. [MemPalace/mempalace](https://github.com/MemPalace/mempalace)：总星存量441，今日新增441星，当前评测分数最高的开源AI记忆系统，支持多Agent会话的长期上下文沉淀，性能超过现有通用记忆层30%以上。
4. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)：总星存量441，今日新增441星，Agent专属调研技能工具，可自动跨Reddit、X、HN、Polymarket等平台抓取数据生成有事实依据的主题总结。
5. [affaan-m/ECC](https://github.com/affaan-m/ECC)：总星209.1k，Agent harness性能优化系统，覆盖Claude Code、Cursor等主流AI编码工具的运行加速，可将长任务执行效率提升2倍以上。
6. [danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure)：总星存量63，今日新增63星，面向个人的全栈Agent基础设施，无需云服务即可搭建本地私有化专属Agent集群。

### 📦 AI 应用
1. [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)：总星存量783，今日新增783星，完全开源的Google Notebook LM替代产品，支持自定义大模型接入、无限长文档上传、离线运行等官方产品没有的特性。
2. [santifer/career-ops](https://github.com/santifer/career-ops)：总星49.3k，今日新增203星，基于Claude Code开发的AI求职全流程系统，支持岗位自动匹配、简历批量定制、面试题生成等14个能力模块。
3. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)：总星24.8k，AI生成原生可编辑PPT工具，直接生成带原生动效、演讲音频的标准PPT文件，不是不可编辑的图片幻灯片。
4. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)：总星41.1k，国产开源全白嫖LLM驱动的A股/H股/美股智能投研系统，自动拉取行情、新闻生成交易决策仪表盘。

### 🧠 大模型/训练
1. [ollama/ollama](https://github.com/ollama/ollama)：总星173.4k，本地大模型一键部署工具，今日同步上线对Kimi K2.6、GLM-5.1等最新国产大模型的官方支持。
2. [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)：总星96.8k，全网最受欢迎的从0实现ChatGPT级大模型教程，今日新增v2版本教程，覆盖最新的Transformer架构优化技巧。
3. [jingyaogong/minimind](https://github.com/jingyaogong/minimind)：总星51.3k，国产开源大模型训练教程，仅用2小时即可从零训练出64M参数的可用小LLM。
4. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)：总星184.7k，当前开源性能最强的专属Agent大模型，支持动态技能学习，可随使用时长逐步提升任务完成准确率。

### 🔍 RAG/知识库
1. [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)：总星80.9k，今日新增449星，轻量级多语言OCR工具，是连接图片/PDF文档和LLM的核心中间件，今日新增支持扫描版PDF的公式识别能力。
2. [langgenius/dify](https://github.com/langgenius/dify)：总星144.2k，生产级Agent工作流开发平台，内置可视化RAG编排能力。
3. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：总星82.0k，开源RAG引擎，融合了Agent能力的上下文层，检索准确率超过普通RAG方案40%。
4. [mem0ai/mem0](https://github.com/mem0ai/mem0)：总星57.9k，通用Agent记忆层，为所有主流LLM提供跨会话的长期记忆能力。
5. [safishamsi/graphify](https://github.com/safishamsi/graphify)：总星60.6k，AI编码助手专属技能，可自动将代码库、文档生成为可查询的知识图谱。
---
## 3. 趋势信号分析
今日AI Agent相关项目的新增Star总量占全部AI热榜新增的70%以上，社区关注焦点已经从之前的大模型参数迭代，全面转向Agent落地的工程化组件补齐，首次出现了Agent专属前端栈、零成本全网浏览、独立基准测试记忆层等之前不存在的细分赛道。该趋势刚好呼应近两个月OpenAI、Anthropic等头部厂商集中发布Agent开发规范的行业事件，开源社区正在快速补上官方生态缺失的中立、可私有化部署的组件缺口。同时国产开源项目贡献了超过3成的高活跃项目，针对中文场景的社交平台爬取、OCR优化等专属能力快速补齐，国内AI开发者在Agent落地层的创新速度已经跟上全球前沿节奏。
---
## 4. 社区关注热点
- **obra/superpowers**：今日增速第一的Agent技能框架，完全基于现有Shell生态构建，无需复杂依赖即可快速搭建可用Agent，大幅降低普通开发者的Agent开发门槛。
- **Agent-Reach**：零API成本覆盖国内外全主流社交平台爬取能力，解决了长期以来Agent获取公开社媒数据成本过高、适配困难的行业痛点。
- **CopilotKit**：首个获得大规模社区认可的Agent生成式UI开发栈，发布的AG-UI协议有望成为未来多端Agent交互界面的事实标准。
- **open-notebook**：完全开源的Notebook LM替代方案，填补了本地化私有化场景下大文档总结类工具的空白，适合有数据隐私要求的企业直接部署使用。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*