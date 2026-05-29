# AI 开源趋势日报 2026-05-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-29 23:13 UTC

---

# AI 开源趋势日报
日期：2026-05-30

---

## 1. 今日速览
今日GitHub AI开源热榜呈现极强的编码智能体生态聚集效应，围绕Anthropic新发布的Claude Code终端工具的周边配套项目大量登榜，多个项目单日新增Stars突破千级。AI全自动短视频生成项目**MoneyPrinterTurbo**单日狂揽3563星登顶今日AI开源项目增量榜首，低门槛生成高清内容的C端AI需求持续释放。「反AI套话/生成内容去同质化」方向有3个关联项目集中进入热榜，社区发展方向从追求生成效率转向关注输出内容的独特质感。文档预处理类工具热度持续走高，微软刚开源的markitdown文档转Markdown工具单日涨星近1900，填补了Agent/RAG场景下办公文档标准化解析的长期缺口。

---

## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [microsoft/markitdown](https://github.com/microsoft/markitdown) 今日新增+1876 stars：微软刚开源的无损文档转换工具，支持全品类Office/文档格式转标准化Markdown，是Agent和RAG场景下的首选前置预处理工具。
- [run-llama/liteparse](https://github.com/run-llama/liteparse) 今日新增+680 stars：LlamaIndex团队推出的Rust实现高速文档解析器，性能比现有Python方案提升数倍，适配TB级大文件批量解析场景。
- [anthropics/claude-code](https://github.com/anthropics/claude-code) 今日新增+460 stars：Anthropic官方开源的终端编码智能体，支持直接操作本地代码库、处理全流程Git工作流，是当前编码Agent的标杆级产品。
- [cursor/plugins](https://github.com/cursor/plugins) 今日新增+129 stars：AI代码编辑器Cursor的官方插件规范仓库，生态正在快速扩容，支持开发者为编码助手扩展自定义能力。
- [ollama/ollama](https://github.com/ollama/ollama) 总星172,617：本地大模型部署的事实标准工具，现已兼容国内外几乎所有主流开源大模型。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星81,379：业界最高吞吐的LLM推理服务引擎，是大模型生产部署的首选工具。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [affaan-m/ECC](https://github.com/affaan-m/ECC) 总星198,543 今日新增+1413 stars：智能体Harness性能优化系统，为Claude Code、Cursor等编码智能体提供技能扩展、记忆增强、安全防护能力，是当前Agent生态最受关注的优化项目。
- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) 今日新增+354 stars：面向Claude Code、Cursor的官方复合工程插件，大幅提升智能体处理复杂软件工程任务的能力。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) 总星172,787：Nous团队开源的可自我迭代成长的通用AI智能体，支持多工具调用和长期记忆。
- [langgenius/dify](https://github.com/langgenius/dify) 总星143,117：生产级Agent工作流开发平台，大幅降低企业落地智能体应用的门槛。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) 总星96,194：让AI智能体可以直接操作浏览器完成网页自动化任务的核心工具。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 今日新增+3563 stars：一键式AI高清短视频生成工具，仅需输入主题即可全自动生成配文、配音、画面剪辑完成的短视频，适配内容创作者的批量生产需求。
- [twentyhq/twenty](https://github.com/twentyhq/twenty) 今日新增+575 stars：专为AI原生设计的开源CRM系统，是Salesforce的开源替代方案，内置AI客户分析、自动跟进能力。
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) 今日新增+2066 stars：专门优化AI生成内容质感的技能插件，可避免AI输出千篇一律的通用套话，给AI输出赋予独特审美。
- [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) 今日新增+618 stars：专门移除AI写作痕迹的技能文件，消除AI生成内容的典型特征，让输出文本更接近人类原创风格。
- [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) 今日新增+294 stars：完全离线部署的生存AI计算机，内置全部离线知识库和端侧AI能力，无网络环境下也可使用各类AI工具。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) 今日新增+346 stars：面向世界模型研究的可复现开源平台，为生成式世界模型的评估和调优提供标准化基准。
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) 总星237：极简可扩展的大模型预训练框架，支持Foundation模型和世界模型的高效训练。
- [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) 总星71,700：一站式大模型微调工具，支持100+LLM/VLM的高效训练，社区使用率极高。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) 总星96,279：从零实现大模型的经典教程，是入门LLM底层原理的首选开源项目。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星81,523：开源RAG引擎标杆，融合Agent能力实现高精度的文档检索和问答效果。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 总星79,605：跨Agent通用的持久化记忆层，可自动压缩会话内容，为所有主流编码智能体提供跨会话上下文能力。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) 总星57,094：面向AI Agent的通用记忆层，支持多场景下的长期记忆管理。
- [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) 总星27,620：汇总了几乎所有主流高级RAG技术的教程库，每一种技术都配有可运行的Jupyter Notebook。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) 总星44,536：业界应用最广的开源云原生向量数据库，支撑大量生产级RAG场景。

---

## 3. 趋势信号分析
今日热榜最明显的爆发方向是**编码智能体周边生态**，在Anthropic本月正式发布Claude Code、Cursor推出插件系统的行业事件驱动下，Agent Harness（智能体适配层）、技能插件、上下文扩展类项目单日涨星速度远超其他赛道，说明开发者已经从通用Agent框架开发转向垂直场景（尤其是软件工程领域）的Agent生态建设。同时「反AI生成套话」的反Slop方向是首次集中登上热榜的新兴赛道，社区已经不再满足于AI生成可用内容，开始追求输出内容的独特质感和非通用属性。另外微软新发布的markitdown爆火也印证了RAG/Agent场景下，标准化文档预处理的刚性需求尚未被完全满足，轻量化的通用解析工具存在巨大的市场缺口。

---

## 4. 社区关注热点
- 🔥 [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 作为全链路AI短视频生成的标杆开源项目，极低的使用门槛已经催生了大量二次衍生工具，是近期To C AI应用领域最值得跟进的方向。
- ⚡ Agent Harness 生态近期迎来爆发，ECC、compound-engineering-plugin等项目正在快速形成事实标准，提前适配该生态的开发者可以快速拿到大量编码智能体的流量红利。
- 🎨 反AI生成同质化（Stop Slop）是近期完全新出现的赛道，taste-skill、stop-slop等项目正在解决AI输出内容千篇一律的痛点，未来在内容创作、写作场景会有极广的应用空间。
- 📑 文档预处理工具迎来新一轮迭代潮，markitdown + liteparse的组合将成为RAG场景下的新标准解析栈，大幅降低非结构化文档的处理成本。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*