# AI 开源趋势日报 2026-06-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-01 23:27 UTC

---

# AI 开源趋势日报（2026-06-02）
---
## 1. 今日速览
今日GitHub AI热榜呈现工具层全面爆发态势，多个项目单日涨星突破千级，微软推出的文档标准化工具和国内开源的AI短视频生成项目位列日增星前两位。AI智能体相关项目占今日上榜AI项目的40%，覆盖Web交互端、IDE插件、垂直领域多智能体框架等细分赛道。无分词器架构的全新TTS项目首次登榜，代表语音生成领域的技术创新正快速获得社区关注。从零训练LLM的中文入门教程单日涨星近千，进一步印证中文AI落地内容的高传播度。

---
## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
1. [microsoft/markitdown](https://github.com/microsoft/markitdown) | ⭐ 今日新增3086
   微软官方推出的Python工具，可将各类Office文档、PDF等非结构化文件一键转为LLM友好的标准化Markdown，直接解决AI处理文档的上游数据预处理痛点，上线首日即登顶全平台热榜。
2. [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | ⭐ 今日新增1475
   专为AI场景优化的自适应网页爬虫框架，无需手动编写CSS/XPath选择器即可完成单页到全站的自动化爬取，大幅降低AI智能体获取公开网页数据的门槛。
3. [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | ⭐ 今日新增880
   国内开源社区推出的无分词器TTS项目，支持多语言语音生成、创意音色设计和高精度声音克隆，打破了传统TTS依赖分词器的性能与对齐误差瓶颈。
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 总量81624
   高吞吐量、低显存占用的大模型推理服务引擎，当前已成为业界部署大模型的主流生产级工具。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
1. [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | ⭐ 今日新增984
   适配Nous Research最新Hermes Agent大模型的开源Web交互端，同时支持手机端访问，大幅降低私有部署智能体的使用门槛。
2. [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | ⭐ 今日新增660
   专为AI时代设计的极速可扩展内存引擎，提供标准化Memory API，可为所有智能体快速接入长期记忆能力。
3. [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐ 总量81732 / 今日新增284
   面向金融场景的多智能体LLM交易框架，支持多角色Agent协作完成行情分析、策略生成、交易执行全流程。
4. [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | ⭐ 今日新增333
   运行在终端的AI编码代理，支持哈希锚点精准编辑代码、LSP联动、子智能体调度等高级特性。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
1. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐ 今日新增3325
   国内开发者开源的一键式AI高清短视频生成工具，仅需输入主题描述即可自动完成脚本生成、素材匹配、配音剪辑全流程，落地属性极强。
2. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐ 总量23313
   可生成原生可编辑PPT的AI生成工具，支持自定义模板、自动添加动画与语音旁白，完全区别于常规生成图片式PPT的同类项目。
3. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐ 总量39776
   LLM驱动的A/H/美股智能分析系统，整合多源行情、实时新闻数据，自动生成分析报告并支持多渠道推送，可零成本定时运行。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
1. [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | ⭐ 今日新增860
   极简入门教程，从数据下载到文本生成完整演示从零训练大模型的全流程，对新手友好度极高。
2. [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐ 总量50965
   开源中文教程，仅需2小时即可从零训练出64M参数的小LLM，是当前最受欢迎的大模型入门实战项目之一。
3. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐ 总量71768
   业界主流的大模型微调工具，统一支持100+LLM/VLM的高效微调，覆盖全场景微调范式。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
1. [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 总量143438
   生产级Agent工作流开发平台，当前是星标数量最高的开源RAG+Agent一体化工具。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 总量81670
   国产开源领先级RAG引擎，融合深度文档解析能力，为大模型提供高质量的上下文增强层。
3. [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 总量57322
   面向所有AI智能体的通用统一记忆层，可一键为智能体接入跨会话的持久化记忆能力。

---
## 3. 趋势信号分析
当前AI智能体编排（Agent Harness）赛道正迎来爆发性增长，今日上榜的相关工具几乎全部兼容Cursor、Claude Code等主流AI IDE，完全匹配近期AI编码助手大规模普及的行业趋势。首次登榜的无分词器TTS架构代表语音生成领域正在跳脱传统NLP流程，端到端直接生成语音的新路线开始进入主流开发者视野。同时面向文档预处理的上游基建工具热度飙升，微软markitdown单日涨星超3000，说明产业界已经从早期追逐大模型参数的阶段，转向重点补全AI落地的非结构化数据处理短板，生产级落地的底层基建正在迎来新一轮开源创新潮。

---
## 4. 社区关注热点
- **微软markitdown**：官方背书的文档标准化工具，大概率成为后续所有RAG、文档类Agent的通用上游依赖，生态潜力巨大。
- **VoxCPM2**：无分词器语音生成架构完全规避了传统TTS的分词对齐误差问题，是语音大模型领域极具颠覆潜力的技术路线。
- **MoneyPrinterTurbo**：国内开发者推出的一键短视频生成工具，无需复杂配置即可跑通AI内容生成全流程，非常适合中小创作者快速落地。
- **hermes-webui**：适配Hermes Agent大模型的开源交互端，可快速搭建完全私有部署的移动端Agent使用入口，隐私友好度极高。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*