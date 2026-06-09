# AI 开源趋势日报 2026-06-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-09 23:17 UTC

---

# AI 开源趋势日报 2026-06-10
---
## 1. 今日速览
今日GitHub AI热榜被Agent生态相关项目主导，单日星增量最高突破3000，赛道热度达到近期峰值。各类面向细分角色的垂直Agent技能库集中爆发，覆盖全网调研、产品管理、工程编码、求职全流程场景。同时本地LLM实测选型工具、Rust原生高性能向量索引等底层组件也迎来流量峰值，几乎所有头部热门项目都明确适配近期爆火的Claude Code生态，开源社区从通用Agent研发转向垂直场景落地的趋势已经非常明确。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | 总星0 + 今日新增1800
   基于TurboQuant构建、纯Rust开发带Python绑定的高性能向量索引，是近期向量检索轻量化优化方向的代表性新项目，单日冲榜证明社区对轻量、零依赖向量组件的需求极高。
2. [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | 总星0 + 今日新增631
   一键运行的本地LLM性能实测工具，抛弃参数量营销玄学，基于最新实测数据自动为用户硬件选出最优可运行LLM，直接解决普通用户本地大模型部署的选型痛点。
3. [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 总星0 + 今日新增66
   全量公开市面上30+主流AI编程助手的系统提示词、内部工具定义和模型底层配置，是从业者逆向研究闭源AI工具的核心资源库。
4. [roboflow/supervision](https://github.com/roboflow/supervision) | 总星0 + 今日新增735
   开源可复用计算机视觉工具集，封装了目标检测、分割、跟踪等通用能力，大幅降低CV类AI应用开发门槛。
5. [openai/plugins](https://github.com/openai/plugins) | 总星0 + 今日新增284
   OpenAI官方开源的初代插件标准实现，近期被社区重新挖掘适配新一代Agent生态的MCP协议。

### 🤖 AI 智能体/工作流
1. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 总星0 + 今日新增3177
   今日星增最高的项目，专为Agent打造的跨Reddit、X、Youtube、HN、Polymarket等平台的全网调研技能，可直接输出有明确信源支撑的深度总结。
2. [aaif-goose/goose](https://github.com/aaif-goose/goose) | 总星0 + 今日新增490
   开源可扩展AI Agent，不止能生成代码，还支持直接安装依赖、运行脚本、执行测试，完全适配任意主流LLM后端。
3. [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | 总星0 + 今日新增808
   产品经理专属Agent技能集市，集齐100+覆盖需求调研、策略制定、项目落地、上线增长全流程的Agent能力插件。
4. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 总星0 + 今日新增348
   前谷歌工程总监主导维护的面向AI编程Agent的生产级工程技能库，内置大量工业界最佳实践。
5. [santifer/career-ops](https://github.com/santifer/career-ops) | 总星51593 + 今日新增1114
   基于Claude Code搭建的AI求职全流程系统，内置14种技能模式，支持简历生成、批量投递、面试准备全自动化。
6. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 总星188762
   头部开源大模型团队Nous推出的持续迭代原生Agent框架，是社区长期热门的Agent基座项目。

### 📦 AI 应用
1. [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 总星0 + 今日新增423
   汇总全品类AI变现路径的开源项目，覆盖提示词工程、Agent开发、垂直场景落地等多元变现方案。
2. [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | 总星0 + 今日新增165
   开源医疗AI项目集合，包含影像诊断、病历分析、药物研发等方向的可落地实现。
3. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 总星47128
   国产开源AI生产力客户端，集成智能对话、自主Agent能力和300+预置助手，统一对接所有主流前沿大模型。
4. [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 总星25573
   支持生成原生可编辑PPT的AI工具，支持自定义模板、自动生成配音旁白，大幅降低办公场景内容产出成本。

### 🧠 大模型/训练
1. [ollama/ollama](https://github.com/ollama/ollama) | 总星173712
   本地LLM部署事实标准，今日同步新增支持Kimi-K2.6、GLM-5.1等多款最新国产大模型。
2. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 总星72032
   一站式大模型微调工具，支持100+LLM/VLM的高效轻量化训练，是国内开发者微调开源模型的首选工具。
3. [vllm-project/vllm](https://github.com/vllm-project/vllm) | 总星82361
   高吞吐低显存占用的LLM推理服务引擎，是当前大模型部署的主流工业级方案。
4. [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 总星7571
   Rust生态模块化LLM应用开发框架，主打高性能、可扩展的端侧大模型落地。

### 🔍 RAG/知识库
1. [langgenius/dify](https://github.com/langgenius/dify) | 总星144584
   生产级Agent工作流开发平台，内置成熟的RAG能力，是国内开发者搭建LLM应用的首选框架。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 总星82312
   领先的开源RAG引擎，融合最新的检索技术和Agent能力，为LLM提供高准确性的外部知识库支撑。
3. [mem0ai/mem0](https://github.com/mem0ai/mem0) | 总星58201
   面向AI Agent的通用记忆层，实现跨会话的上下文持久化存储，大幅提升长任务Agent表现。
4. [milvus-io/milvus](https://github.com/milvus-io/milvus) | 总星44703
   云原生高性能向量数据库，是当前工业级RAG场景的主流存储选型。
---
## 3. 趋势信号分析
今日Agent生态相关项目占据单日星榜前7的6个位置，面向细分角色的垂直Agent技能库迎来爆发式增长，从工程师、产品经理到求职者的全场景Agent插件正在成为社区最受关注的方向，此前通用Agent框架的竞争已经告一段落。其次Rust原生的轻量化向量索引turbovec首次登顶热榜，说明端侧、轻量级部署场景对向量检索的性能优化需求正在快速释放。所有头部热门Agent项目均明确适配近期Anthropic推出的Claude Code生态，甚至大量旧有开源项目被二次挖掘适配MCP协议，整个开源AI生态的技术栈正在围绕新一代AI编程助手快速迭代重构，产业落地节奏明显加快。
---
## 4. 社区关注热点
- **last30days-skill**：单日星增破3000的全网调研Agent技能，完全解决AI生成内容时效性不足、信源不可靠的痛点，是所有做内容生产、行业调研类Agent的必备组件。
- **whichllm**：本地LLM部署的选型刚需工具，告别参数量营销误区，普通用户跑通本地大模型的门槛进一步降低。
- **pm-skills**：首个面向产品经理的全流程Agent技能库，填补了非技术角色的Agent落地空白，代表Agent生态正在从研发侧渗透到全职能岗位。
- **turbovec**：Rust原生轻量化向量索引，无需部署重型向量数据库即可实现高性能检索，是端侧RAG场景的核心底层支撑组件。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*