# AI 开源趋势日报 2026-06-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-11 23:22 UTC

---

# AI 开源趋势日报
日期：2026-06-12

---

## 1. 今日速览
今日AI开源赛道核心热度完全集中在AI Agent生产级落地的全链路支撑工具领域，多个Agent技能相关项目单日涨星突破1000。英伟达开源了行业首个AI Agent技能安全扫描工具，补上了Agent生态之前缺失的安全审计环节。全品类Agent技能资源从软件工程领域延伸到产品管理、医疗、教育等垂直场景，形成完整的开源技能市场雏形。大量面向头部代码助手的系统提示词、观测分析工具集中上线，标志着Coding Agent已经进入深度工程化落地阶段。

---

## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 总星0 + 今日新增308：英伟达官方开源的AI Agent技能安全扫描器，可自动识别技能中的恶意代码、漏洞与风险，是首个面向Agent技能生态的工业级安全审计工具，填补了行业空白。
2. [kenn-io/agentsview](https://github.com/kenn-io/agentsview) 总星0 + 今日新增98：本地优先的代码类Agent会话智能分析工具，支持20余款主流Coding Agent，性能是传统用量统计工具的100倍以上，大幅降低Agent使用过程的可观测成本。
3. [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) 总星0 + 今日新增369：开源了几乎所有市面上主流AI代码助手、生成式AI工具的内部系统提示词、工具调用逻辑与底层模型配置，是开发者逆向研究头部AI产品的核心资源库。
4. [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星82588：当前最主流的大模型高吞吐推理服务引擎，2026年最新版本已经全量适配端侧Agent场景的低延迟需求。
5. [huggingface/transformers](https://github.com/huggingface/transformers) 总星161513：全球应用最广的多模态模型开发框架，持续迭代适配最新的Agent原生模型架构。

### 🤖 AI 智能体/工作流
1. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 总星0 + 今日新增3275：今日全GitHub涨星冠军，面向AI编码Agent的生产级工程技能库，覆盖全栈开发的各类标准化操作流程，大幅提升Agent输出代码的生产可用率。
2. [phuryn/pm-skills](https://github.com/phuryn/pm-skills) 总星0 + 今日新增1944：包含100+面向产品经理场景的Agent技能市场，覆盖需求调研、策略制定、上线增长全流程，是首个垂直非技术岗位的大规模Agent技能开源库。
3. [obra/superpowers](https://github.com/obra/superpowers) 总星0 + 今日新增1323：开源Agent技能框架与配套软件开发方法论，把AI辅助开发的全流程标准化，已经在数十个团队落地验证。
4. [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) 总星0 + 今日新增1235：一键部署完整AI代理工作室项目，内置从前端开发到社区运营全角色的定制化智能体，每个智能体都有独立人格和可落地的交付流程。
5. [langgenius/dify](https://github.com/langgenius/dify) 总星144880：生产级Agent工作流开发平台，是国内开发者最常用的低代码Agent搭建工具。
6. [bytedance/deer-flow](https://github.com/bytedance/deer-flow) 总星70992：字节跳动开源的长程Super Agent框架，支持小时级复杂任务的自主拆解与执行，适配当前最高复杂度的生产级需求。

### 📦 AI 应用
1. [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) 总星0 + 今日新增427：完全开源的医疗AI全栈项目，覆盖临床辅助决策、健康管理等场景，是今日为数不多的垂直领域AI应用热门项目。
2. [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) 总星0 + 今日新增131：面向高考志愿填报、考研、职业规划场景的国内爆款AI技能项目，把知名博主张雪峰的决策逻辑全部封装成Agent可调用的技能模块。
3. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) 总星47221：开源AI生产力桌面端应用，聚合数百款定制化Agent助手，统一对接所有主流大模型接口。
4. [open-webui/open-webui](https://github.com/open-webui/open-webui) 总星141121：最主流的自托管LLM前端界面，全量支持Agent工作流运行与自定义插件。

### 🧠 大模型/训练
1. [hexo-ai/sia](https://github.com/hexo-ai/sia) 总星0 + 今日新增177：开源自改进AI框架，可自主迭代优化任意AI系统（包括大模型、Agent）在基准任务上的性能，是自进化AI方向的代表性落地项目。
2. [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) 总星72090：全球应用最广的一站式大模型微调框架，支持100+主流大模型和多模态模型的全参数、低参微调。
3. [ollama/ollama](https://github.com/ollama/ollama) 总星173896：端侧大模型部署事实标准，最新版本已经全量适配国产主流大模型的一键运行。

### 🔍 RAG/知识库
1. [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星82479：开源生产级RAG引擎，深度融合Agent能力，支持复杂非结构化文档的解析与知识召回。
2. [mem0ai/mem0](https://github.com/mem0ai/mem0) 总星58361：面向AI智能体的通用记忆层，为所有Agent提供跨会话的持久化记忆能力，大幅提升长程任务执行表现。
3. [run-llama/llama_index](https://github.com/run-llama/llama_index) 总星50084：全球最流行的文档智能与RAG开发框架，是绝大多数Agent知识召回模块的底层依赖。
4. [milvus-io/milvus](https://github.com/milvus/milvus) 总星44729：云原生向量数据库的标杆项目，支撑大规模Agent生态的向量检索需求。

---

## 3. 趋势信号分析
今日全平台爆火的项目几乎全部属于AI Agent技能生态赛道，单日最高涨星超过3000，属于2026年以来少有的现象级集体爆发。此前行业主流聚焦Agent框架本身的研发，当前新增需求快速转向Agent落地的配套工程化能力：包括技能资源沉淀、安全审计、全链路可观测三类此前缺失的基础设施首次大规模进入公众视野。这一趋势背后和近半年Coding Agent在研发团队的大规模普及直接相关，行业已经跨过Agent可行性验证阶段，进入生产级落地的深水区，针对Agent治理的工具链需求未来1-2年将持续爆发。

---

## 4. 社区关注热点
- 英伟达开源Agent技能安全扫描工具SkillSpector，标志着头部硬件厂商开始入场布局Agent生态基础设施，Agent技能的安全审计将成为下一阶段行业的强制刚需。
- 跨领域Agent技能开源市场成型，从工程开发到产品管理、教育、医疗的垂直领域技能集中开放，开发者可以几乎零成本组装适配自身场景的专用Agent。
- 全主流AI代码助手的系统提示词库集中开源，所有头部Coding Agent的内部逻辑不再是黑盒，将大幅降低行业对代码类Agent的二次定制门槛。
- 自改进AI框架SIA首次登热榜，代表无需人工介入、自主迭代优化性能的自进化AI系统开始从研究走向落地，未来将重构AI模型与Agent的研发流程。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*