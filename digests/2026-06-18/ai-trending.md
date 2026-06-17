# AI 开源趋势日报 2026-06-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-17 23:24 UTC

---

# AI 开源趋势日报
发布日期：2026-06-18

---

## 1. 今日速览
今日GitHub AI热榜头部项目单日新增星普遍破千，面向编码Agent的提效工具占据流量主导位置，单日最高涨星量达到1570。MCP（模型控制协议）相关的代码智能工具、Agent无成本全网信息获取能力项目集中爆发，标志着Agent的外部交互短板正在被快速补齐。谷歌开源的工业级时序基础模型TimesFM登上热榜，AI在传统工业时序场景的落地工具链成熟度快速提升。整个社区正围绕Claude Code、Cursor等新一代编码助手，快速沉淀完整的周边生态组件。

---

## 2. 各维度热门项目
### 🔧 AI 基础工具
- [mattpocock/skills](https://github.com/mattpocock/skills) 今日新增⭐1570：直接从个人Claude配置目录提炼的工程专用技能库，面向主流编码助手开箱即用，零配置即可大幅提升Agent编码输出质量，登顶今日全GitHub热榜第一。
- [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) 今日新增⭐718：高性能代码智能MCP服务端，将全量代码库索引为持久化知识图谱，亚毫秒级查询速度，Token占用降低99%，单二进制零依赖部署，解决大模型处理大型代码库的上下文浪费痛点。
- [google-research/timesfm](https://github.com/google-research/timesfm) 今日新增⭐712：谷歌研究团队开源的预训练时序基础模型，专为时序预测场景优化，填补通用大模型在工业时序分析场景的能力空白。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星⭐83192：高吞吐低内存占用的大模型推理服务引擎，是当前工业界大模型部署的事实标准工具。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) 总星⭐7659：Rust语言实现的模块化LLM应用开发框架，代表系统级底层语言正在快速渗透到AI应用开发全链路。

### 🤖 AI 智能体/工作流
- [obra/superpowers](https://github.com/obra/superpowers) 今日新增⭐1205：面向Agent的技能框架+开发方法论组合，从工程流程层面定义Agent驱动的软件开发范式，今日星量仅次于技能库项目。
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) 总星⭐33120，今日新增⭐1154：为AI Agent提供全网内容获取能力，零API费用即可爬取搜索Twitter、小红书、B站等10余个主流中外内容平台公开内容，彻底解决Agent网络访问成本问题。
- [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) 今日新增⭐148：字节跳动开源的多模态AI Agent全栈，打通前沿多模态模型和Agent运行基础设施，可直接操控桌面端全量应用。
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) 今日新增⭐71：全球首个开源Agent驱动的视频生产系统，内置12条管线、52个工具和500+Agent技能，可直接把普通编码助手转化为全链路视频工作站。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) 总星⭐139575：当前全球应用最广的Agent工程开发平台，生态覆盖全链路Agent开发需求。

### 📦 AI 应用
- [open-webui/open-webui](https://github.com/open-webui/open-webui) 总星⭐142036：开源本地化AI交互界面，支持全量主流本地大模型和API模型，是个人搭建私有AI服务的首选入口。
- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) 总星⭐134117：工业级AI网页爬取交互服务，支持大规模全网内容结构化获取，是Agent网络能力的核心底座组件。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) 总星⭐99318：让AI Agent直接操控浏览器完成全量网页交互任务的开源工具，大幅降低自动化网页操作的开发门槛。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) 总星⭐47483：全场景AI生产力桌面端，聚合全量主流大模型入口，内置300+预设Agent助手，覆盖日常办公全场景需求。

### 🧠 大模型/训练
- [ollama/ollama](https://github.com/ollama/ollama) 总星⭐174400：当前最流行的本地化大模型一键部署工具，支持几乎所有主流开源大模型的秒级拉起。
- [huggingface/transformers](https://github.com/huggingface/transformers) 总星⭐161676：全球最主流的大模型开发框架，覆盖文本、视觉、音频全模态模型的训练推理全流程。
- [alexzhang13/rlm](https://github.com/alexzhang13/rlm) 今日新增⭐37星：即插即用的递归语言模型推理库，支持各类沙箱环境，是近期热门的RLM技术方向的代表性开源实现。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) 总星⭐7099：中立的大模型评测平台，支持上百款主流大模型在各类任务集上的效果基准测试。

### 🔍 RAG/知识库
- [topoteretes/cognee](https://github.com/topoteretes/cognee) 总星⭐17885：专为Agent打造的开源AI记忆平台，基于知识图谱引擎实现跨会话的Agent持久化长期记忆能力。
- [langgenius/dify](https://github.com/langgenius/dify) 总星⭐145628：生产级Agent和RAG应用开发平台，国内开发者生态渗透率极高，支持低代码快速上线AI应用。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) 总星⭐58800：通用的AI Agent记忆层组件，可无缝对接各类大模型和Agent框架实现记忆能力。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星⭐83027：开源RAG引擎，融合前沿检索技术和Agent能力，是工业级RAG落地的主流选择。

---

## 3. 趋势信号分析
今日单日涨星最高的三个项目全部围绕编码Agent的技能生态、代码库记忆底座、全网访问能力展开，说明面向开发者的编码Agent提效赛道正在迎来爆发式增长。本次热榜首次有多个MCP协议相关工具登上头部位置，MCP正在快速从概念落地为Agent生态的事实标准接口，成为新的技术爆发点。热榜集中出现的零成本全网爬取、亚毫秒级大代码库索引、Agent长期记忆等能力，本质上是对当前大模型上下文长度短板的系统性补齐，和近期Anthropic Claude Code等编码助手的大规模普及直接相关，开发者正在围绕新一代编码助手沉淀完整的周边生态。

---

## 4. 社区关注热点
- 编码助手通用技能库[mattpocock/skills](https://github.com/mattpocock/skills)：个人开发者开源的私藏Claude技能单日涨星1500+，代表开发者社区开始集体沉淀可复用的Agent技能资产，后续将出现大量细分领域的专用技能库。
- 零成本全网Agent爬取工具[Agent-Reach](https://github.com/Panniantong/Agent-Reach)：无需付费API即可让Agent获取全平台公开内容，彻底降低Agent获取外部信息的门槛，后续会催生大量面向全网内容处理的原生Agent应用。
- MCP生态标杆工具[codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)：基于MCP协议的代码库记忆工具，直接解决大模型处理百万行代码库的Token消耗痛点，是MCP落地的首个现象级项目。
- 桌面多模态Agent全栈[UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop)：打通多模态模型和桌面系统的交互链路，标志着可直接操作本地桌面全应用的通用Agent正在进入大规模落地阶段。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*