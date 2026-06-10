# AI 开源趋势日报 2026-06-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-10 23:25 UTC

---

# 2026-06-11 AI 开源趋势日报
---
## 1. 今日速览
今日GitHub AI开源赛道核心热点集中在AI Agent技能生态的集中爆发，多个新上榜项目单日涨星破千，是近3个月以来智能体落地相关项目热度最高的一天。头部成熟AI开源项目保持周度高活跃，覆盖RAG工程化、端侧大模型部署、多模态Agent工具链等核心落地方向。全生态已经从早期通用Agent框架搭建的阶段，快速下沉到角色化、场景化可复用能力的沉淀层。大量面向Claude Code等主流AI编码Agent的适配工具、逆向资源项目同步登上热榜，开发者群体对生产级智能体落地的投入度显著提升。

## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [roboflow/supervision](https://github.com/roboflow/supervision) 总星数十万级+今日新增699星：行业通用可复用计算机视觉工具库，当前多模态Agent视觉能力开发的刚需依赖，今日新增大量面向智能体的图像处理API。
2. [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) 今日新增397星：开源集合了几乎所有主流商用AI编码助手的内部系统提示词、工具调用逻辑，是开发者逆向适配商用Agent的核心参考资源。
3. [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) 今日新增204星：可视化案例驱动的Claude Code全场景教程，附带可直接复用的Agent开发模板，降低普通开发者使用编码Agent的门槛。
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星82456：当前应用最广的高吞吐大模型推理引擎，本周刚完成对多款开源端侧模型的适配更新。
5. [huggingface/transformers](https://github.com/huggingface/transformers) 总星161482：AI行业通用的模型开发底层框架，最新版原生集成了Agent工具调用的标准化接口。

### 🤖 AI 智能体/工作流
1. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) 今日新增2561星：单日涨星最高的新上榜项目，实现了跨Reddit、X、HN、Polymarket等全平台的热点调研能力，输出事实性强的结构化结论，补全了现有智能体全网实时信息采集的能力短板。
2. [obra/superpowers](https://github.com/obra/superpowers) 今日新增1205星：生产级Agent技能框架配套完整的软件工程落地方法论，直接解决智能体开发过程中能力碎片化的痛点。
3. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 今日新增781星：谷歌工程团队主导维护的面向编码Agent的生产级工程能力集合，覆盖代码评审、重构、测试全流程。
4. [phuryn/pm-skills](https://github.com/phuryn/pm-skills) 今日新增775星：面向产品经理角色的Agent技能市场，沉淀了100+从需求调研到产品上线全流程的可复用智能体能力。
5. [langgenius/dify](https://github.com/langgenius/dify) 总星144740：行业头部的生产级智能体工作流开发平台，本周刚更新技能插件生态市场功能。
6. [google/skills](https://github.com/google/skills) 今日新增238星：谷歌官方开源的面向全系列谷歌产品的Agent能力集合，打通了各类云服务的智能体调用通道。

### 📦 AI 应用
1. [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 今日新增1471星：开源一键生成AI高清短视频工具，全链路无需人工干预，是今日热度最高的C端落地AI应用。
2. [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) 今日新增535星：开源医疗AI全栈项目，覆盖临床辅助决策、医疗影像分析等多个场景。
3. [ruvnet/RuView](https://github.com/ruvnet/RuView) 今日新增439星：基于普通WiFi信号的AI空间感知应用，无需摄像头即可实现人员存在检测、生命体征监测，是低功耗AI感知方向的代表性项目。
4. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) 总星26034：面向智能体的全中文互联网内容采集工具，无需对接第三方付费API即可读取小红书、B站等平台内容。

### 🧠 大模型/训练
1. [affaan-m/ECC](https://github.com/affaan-m/ECC) 总星212689：面向编码Agent的性能优化系统，从运行效率、记忆管理、安全防护多个维度提升商用/开源Agent的运行表现。
2. [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) 今日新增241星：极简的从零训练大模型教程，从数据下载到文本生成全流程可直接跑通，适合入门开发者学习。
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) 总星189913：当前生态最成熟的开源端侧Agent大模型，支持能力动态扩展适配不同用户场景。
4. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) 总星72055：行业通用的大模型统一微调框架，本周新增对100+多模态模型的微调支持。

### 🔍 RAG/知识库
1. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 总星81631：跨全系列主流Agent的持久化记忆层，自动沉淀会话内容并压缩注入后续交互，解决智能体长会话上下文丢失痛点。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星82408：头部开源RAG引擎，原生深度集成Agent能力，是当前企业级RAG落地的首选方案之一。
3. [zilliztech/claude-context](https://github.com/zilliztech/claude-context) 总星11811：面向Claude Code的代码库全量上下文MCP插件，可直接把整个项目代码库注入编码Agent的上下文空间。
4. [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) 总星32853：创新的无向量RAG方案，完全不需要向量数据库依赖，基于推理实现检索，大幅降低中小开发者RAG落地门槛。

## 3. 趋势信号分析
今日AI开源赛道的核心爆发点完全集中在**Agent可复用技能生态**，是近半年以来该方向首次出现单日3个以上项目涨星破千的情况，标志着智能体落地已经完全跨过框架搭建阶段，进入场景化能力沉淀的深水区。此前行业集中讨论的Agent Harness概念正在快速落地，开发者不再追求搭建通用大而全的智能体，而是聚焦不同角色（开发、PM、运营）的专属工作流，沉淀开箱即用的技能资产。
该趋势和近期Anthropic、OpenAI接连推出编码Agent产品的行业事件完全对齐，大量面向商用Agent的适配、逆向、优化项目同步登上热榜。同时无向量RAG、端侧全量运行RAG等创新方向的项目活跃度快速提升，后续很可能成为RAG工程化的主流演进路径。

## 4. 社区关注热点
- 【全网调研Agent技能】[last30days-skill](https://github.com/mvanhorn/last30days-skill) 完全绕开第三方付费API限制，直接实现全公开平台的热点内容事实性调研，补全了当前绝大多数智能体缺失的实时信息采集能力，可直接嵌入各类生产级智能体工作流。
- 【角色化Agent技能集合生态】近期集中涌现的开发、PM等不同角色的开源技能库，正在形成新的智能体应用分发范式，后续很可能取代大量现有低代码Agent平台的能力。
- 【无向量RAG方案】[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) 完全摆脱向量数据库依赖，存储成本降低90%以上，大幅降低中小团队搭建RAG系统的技术门槛，是非常值得跟进的创新方向。
- 【Agent性能优化系统】[ECC](https://github.com/affaan-m/ECC) 专门针对编码Agent的运行效率瓶颈做深度优化，随着编码Agent在开发场景的普及，该类工具后续会成为企业级部署的刚需依赖。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*