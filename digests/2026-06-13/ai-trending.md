# AI 开源趋势日报 2026-06-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-12 23:17 UTC

---

# AI 开源趋势日报（2026-06-13）
---
## 1. 今日速览
今日GitHub AI开源赛道呈现明显的智能体技能爆发态势，4个Agent方向项目单日新增Star突破1000，远超其他赛道热度。来自知名开发者addyosmani的`agent-skills`项目单日揽星2660登顶今日AI开源增速榜，生产级可复用Agent技能体系成为社区共识方向。同时垂直医疗AI、LLM推理缓存优化等细分赛道也有优质新项目首次进入热榜，传统AI基建类头部项目保持高活跃度，围绕Agent落地的工具链生态正在快速补全。

## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [LMCache/LMCache](https://github.com/LMCache/LMCache)：总量星数千级，今日新增17星，是目前速度最快的KV缓存层，可大幅提升LLM推理吞吐量、降低Agent高并发场景的运行成本。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐214,278：面向Claude Code、Cursor等主流编码Agent的性能优化系统，覆盖技能管理、 instinct 机制、安全防护全链路。
- [ollama/ollama](https://github.com/ollama/ollama) ⭐173,968：本地大模型部署事实标准工具，现已支持Kimi-K2.6、GLM-5.1等全系列主流开源模型一键部署。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐82,723：行业最主流的高吞吐LLM推理服务引擎，为大规模Agent部署提供底层算力支撑。
- [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) ⭐66,297：仅用Bash从零实现类Claude Code Agent的开源脚手架，降低普通开发者搭建编码智能体的门槛。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 今日新增+2660星：由Web生态知名开发者Addy Osmani发起的生产级编码Agent技能库，是今日增速最高的AI项目。
- [obra/superpowers](https://github.com/obra/superpowers) 今日新增+1276星：Agent技能框架配套软件研发方法论，主打开箱即可落地的工程化智能体开发流程。
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) 今日新增+1040星：开箱即用的全栈AI代理工作室，覆盖前端开发、社区运营、方案校验等全角色智能体，直接实现完整数字代理团队。
- [phuryn/pm-skills](https://github.com/phuryn/pm-skills) 今日新增+823星：专注产品经理场景的Agent技能市场，收录100+覆盖从需求调研到产品迭代全流程的智能体技能。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐191,957：Nous团队推出的可成长自主智能体，支持伴随用户使用动态更新知识库和技能体系。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐139,141：行业应用最广泛的智能体工程开发平台，当前已完成Agent工作流全链路工具覆盖。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) 今日新增+517星：开源医疗AI项目，主打合规可二次开发的临床辅助决策、医疗数据处理工具链。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐47,252：全功能AI生产力客户端，统一接入所有主流大模型，内置300+预设专用智能体。
- [santifer/career-ops](https://github.com/santifer/career-ops) ⭐53,204：基于Claude Code搭建的全自动求职AI系统，支持职位批量筛选、简历定制、笔试模拟全流程自动化。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐42,324：LLM驱动的A股、港股、美股智能分析系统，完全开源零成本即可定时运行生成投资决策报告。
- [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) ⭐69,022：面向金融分析师的开源AI数据平台，原生支持对接量化交易智能体。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐161,549：AI开发行业事实标准框架，覆盖文本、视觉、多模态全品类模型的训练推理全链路。
- [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) ⭐72,117：支持100+LLM/VLM统一微调的开源工具，是个人和企业微调自定义大模型的首选方案。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) ⭐71,938：专门面向编码Agent的Token优化工具，用极简表达逻辑降低65%的Prompt Token消耗，大幅降低Agent运行成本。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,081：主流大模型公开评测平台，覆盖100+评测数据集，可实现全品类大模型能力的公平对比。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [langgenius/dify](https://github.com/langgenius/dify) ⭐144,995：生产级RAG+智能体开发平台，可视化拖拽即可快速搭建企业级知识库问答系统。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐82,576：融合Agent能力的新一代RAG引擎，支持非结构化文档的高精度结构化解析。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐58,450：面向所有智能体的通用记忆层，实现跨会话的持久化上下文存储，大幅降低Agent的重复调用成本。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐81,995：适配Claude、OpenCode、Codex等20+主流Agent工具的持久化上下文插件，自动记录Agent全运行周期行为并智能复用历史信息。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐44,748：云原生高性能向量数据库，是企业级RAG系统的底层存储首选方案。

## 3. 趋势信号分析
今日热榜显示Agent技能赛道正在获得社区爆发性关注，4个单日新增千星以上的项目全部聚焦Agent可复用技能体系，标志着AI开发已经从过去的“搭通用Agent框架”阶段，正式进入“沉淀行业专属技能资产”的落地期。首次大规模登榜的细分方向是Agent专业化分工赛道，除了通用编码技能外，产品经理专属技能市场、全角色AI代理工作室等细分项目大量涌现。该趋势和近期Anthropic发布MCP协议、Claude Code/Cursor等编码类Agent大规模普及的行业事件直接相关，开发者在大量使用编码Agent的过程中，沉淀出了跨项目复用技能的强烈需求，推动技能类开源项目快速走红。同时LLM推理层的KV缓存优化、Token压缩等基础工具也在同步迭代，为Agent大规模落地提供性能支撑。

## 4. 社区关注热点
- **addyosmani/agent-skills**：由行业知名开发者发起的生产级编码Agent技能库，极有可能成为后续AI编码工具的事实标准技能资产库，值得所有AI工程从业者跟进。
- **agency-agents**：开箱即用的全角色AI代理工作室，零开发成本即可搭建完整数字团队，中小团队可以直接复用该项目快速落地全链路AI生产力。
- **LMCache**：新一代LLM KV缓存层，可直接解决高并发Agent场景下推理成本过高的痛点，是大规模部署智能体必备的底层优化工具。
- **openmed**：开源医疗AI新项目首次进入热榜，标志着垂直高合规场景的AI工具链开始走向成熟，后续将看到更多传统行业的AI开源解决方案集中涌现。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*