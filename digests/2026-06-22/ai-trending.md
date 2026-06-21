# AI 开源趋势日报 2026-06-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-21 23:13 UTC

---

# AI 开源趋势日报 2026-06-22
---
## 1. 今日速览
今日GitHub AI赛道热榜呈现出极强的落地导向特征，4个项目单日涨星破千，核心热度从之前的大模型研发侧全面转向Agent生产力提效领域。MCP（模型上下文协议）相关工具、Token压缩、标准化Agent技能三类项目集中爆发，填补了AI IDE大规模普及后的生态空白。字节跳动开源的长程SuperAgent框架首次登上全球热榜，代表国内厂商在长时任务Agent工程化领域的输出获得全球开发者认可。整个开源生态正快速形成从上下文成本优化到场景化技能落地的完整链路。

---
## 2. 各维度热门项目
### 🔧 AI 基础工具
- [chopratejas/headroom](https://github.com/chopratejas/headroom) 今日新增⭐2617：专为LLM输入前设计的压缩工具，可将工具输出、日志、RAG块的Token量降低60-95%且保持回答准确率不变，同时支持库、反向代理、MCP服务三种部署形态，直接解决当前Agent运行时Token成本爆炸的核心痛点。
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) 今日新增⭐1029：高性能代码智能MCP服务，可将任意代码库索引为持久化知识图，支持158种编程语言，查询延迟亚毫秒，Token占用降低99%，单静态二进制零依赖。
- [mattpocock/skills](https://github.com/mattpocock/skills) 今日新增⭐1441：知名技术博主公开的本地Claude技能库，全部来自一线工程师的实际开发经验，开箱即可大幅增强编码Agent的处理能力。
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) 今日新增⭐366：汇总了当前所有主流厂商最新闭源模型、AI IDE的泄露系统提示，覆盖Claude 5、GPT 5.5、Gemini 3.5、Cursor等产品，持续更新维护。
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) 今日新增⭐445：754个结构化网络安全Agent技能，对齐MITRE ATT&CK等5个权威安全框架，兼容20+主流Agent运行平台。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) 总星⭐7704：Rust生态的模块化高性能LLM应用开发框架，最近一周活跃度暴涨，主打低资源占用的生产级部署。

### 🤖 AI 智能体/工作流
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) 今日新增⭐993：全球首个开源Agent驱动的视频生产系统，内置12条流水线、52个工具、500+Agent技能，可直接将通用编码助手转换为完整的自动化视频工作室。
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow) 总星⭐72540 今日新增⭐415：开源长程SuperAgent运行时，原生集成沙箱、分层记忆、子Agent调度模块，可稳定处理分钟到小时级的复杂任务，经过字节内部大规模验证。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) 总星⭐219300：Agent运行时全栈性能优化系统，面向Claude Code、Cursor等主流编码Agent做了技能、内存、安全维度的深度优化。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) 总星⭐99931：让AI Agent可直接操作任意网页完成线上复杂任务，是当前网页自动化Agent的事实标准框架。
- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) 总星⭐87815：多Agent金融交易框架，覆盖行情分析、策略回测、自动执行全链路，落地热度持续走高。

### 📦 AI 应用
- [palmier-io/palmier-pro](https://github.com/palmier-pro) 今日新增⭐1829：专为AI设计的原生macOS视频编辑器，深度集成大模型实现智能素材筛选、自动剪辑、语音转字幕等能力。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 总星⭐44368 今日新增⭐519：LLM驱动的多市场股票智能分析系统，聚合多源行情、实时新闻，支持自动生成决策看板和推送，可零成本定时运行。
- [koala73/worldmonitor](https://github.com/koala73/worldmonitor) 今日新增⭐253：AI驱动的全球实时情报看板，实现聚合新闻、地缘事件监测、基础设施动态追踪的统一态势感知界面。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) 总星⭐47625：全栈AI生产力桌面客户端，统一接入所有主流大模型，支持自定义Agent、300+预制助手。

### 🧠 大模型/训练
- [open-compass/opencompass](https://github.com/open-compass/opencompass) 总星⭐7109：行业通用LLM评测平台，覆盖几乎所有头部开源/闭源大模型、100+评测数据集，是大模型效果验证的事实标准工具。
- [gluonfield/enchanted](https://github.com/gluonfield/enchanted) 总星⭐5965：iOS/macOS端原生本地私有大模型对话客户端，无缝对接Ollama，完全保证数据不出端。
- [galilai-group/stable-pretraining](https://github.com/galilai/stable-pretraining) 总星⭐266：极简可扩展的基础大模型预训练框架，主打超长训练周期的稳定性，降低千亿参数模型训练门槛。

### 🔍 RAG/知识库
- [topoteretes/cognee](https://github.com/topoteretes/cognee) 总星⭐18618 今日新增⭐361：开源Agent长时记忆平台，基于自研知识图引擎实现跨会话的持久化记忆，无需依赖向量数据库即可完成关联检索。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星⭐83292：开源RAG引擎，融合多模态文档处理、Agent编排能力，是当前落地效果最好的开源RAG框架之一。
- [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) 总星⭐28094：汇总了几乎所有主流高级RAG技术，配套可直接运行的教程Notebook，是RAG开发者的核心参考库。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 总星⭐83560：跨所有主流Agent通用的持久化记忆层，自动压缩会话内容并把关联上下文注入后续任务，大幅减少重复提问。

---
## 3. 趋势信号分析
今日热度最高的项目几乎全部围绕Agent落地效率优化展开，Token压缩、MCP生态、标准化Agent技能三个方向首次迎来集中爆发，是此前从未出现过多项目同赛道同时登GitHub全球热榜的情况。MCP协议从2026年初正式推出仅半年时间，就快速形成了从上下文压缩、代码库索引到场景化技能加载的完整标准化生态链路。当前行业正处于Claude Code、Cursor这类AI IDE大规模普及的节点，开发者迫切需要降低Agent运行成本、扩展能力边界的工程化工具，开源生态的注意力已经从之前的大模型训练研发侧完全转移到落地侧，编码Agent相关的生产力工具成为绝对主流方向。

---
## 4. 社区关注热点
- **headroom Token压缩工具**：可对现有LLM应用无改造接入，直接降低60%以上的Agent运行Token成本，性价比极高，是所有生产级LLM应用的必备组件。
- **主流模型系统提示库**：完整覆盖头部闭源产品的提示工程方案，开发者可以反向对齐官方的工程优化思路，大幅提升自搭建Agent的效果。
- **OpenMontage自动化视频生产Agent**：首次实现端到端全链路开源视频生产，标志着多模态Agent落地从生成单张图片、单段视频，进入完整流水线作业的新阶段。
- **字节跳动deer-flow长程SuperAgent**：经过大规模验证的小时级复杂任务工程化方案，解决了当前通用Agent无法长时间稳定运行的核心痛点，可直接复用落地。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*