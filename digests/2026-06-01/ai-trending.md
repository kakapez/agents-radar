# AI 开源趋势日报 2026-06-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-31 23:00 UTC

---

# AI 开源趋势日报（2026-06-01）
---

## 1. 今日速览
今日GitHub AI开源赛道面向开发者的生产力工具迎来集体爆发，微软官方发布的通用文档转Markdown工具 `markitdown` 单日新增Star超2700登顶全榜。AI短视频生成、无分词器多语种TTS等落地应用类项目单日涨星均突破600，热度远超通用AI教程类项目。近期Anthropic Claude Code生态持续扩容，相关WebUI、插件、子代理调度类项目集中登榜，成为本周社区最高关注度的热点方向。RAG领域向量less推理、端侧轻量化方案的相关项目长期保持高星增速，普通开发者部署私有AI系统的门槛正快速下探。

## 2. 各维度热门项目
### 🔧 AI 基础工具
| 项目名 | Star数据 | 说明 |
| ---- | ---- | ---- |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 今日新增2759星 | 微软推出的Python工具，支持将Word、PDF、PPT等几乎所有主流办公文档直接无损转换为标准Markdown，直接解决RAG链路长期存在的文档解析脏数据痛点 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 今日新增490星 | Anthropic官方开源的终端侧编码Agent工具，直接在本地终端理解全代码库，支持自然语言调用完成代码修改、Git工作流、复杂问题排查等全流程开发任务 |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | 今日新增627星 | 极简入门教程，从数据集下载到推理部署全链路演示如何从零训练一个可用的小参数LLM，对新手极度友好 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 总量81506星 | 目前生态最成熟的高吞吐LLM推理引擎，最新版本已支持近20个主流开源大模型的动态批处理、分页注意力机制优化 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 总量71736星 | 全功能开源大模型微调框架，统一支持100+ LLMs/VLMs的单卡/分布式全参数、LoRA、QLoRA训练，是目前行业落地最广泛的微调工具 |

### 🤖 AI 智能体/工作流
| 项目名 | Star数据 | 说明 |
| ---- | ---- | ---- |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 今日新增320星 | NousResearch Hermes Agent的官方Web交互界面，支持手机端直接访问调度Agent完成复杂任务，大幅降低Hermes Agent的使用门槛 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 今日新增243星 | 适配Claude Code、Cursor、Codex等主流AI编码工具的官方插件，扩展AI IDE的自定义复合工程能力 |
| [revfactory/harness](https://github.com/revfactory/harness) | 今日新增318星 | 元智能体框架，可自动根据领域需求生成专属的多智能体团队、定义每个Agent的职责、自动生成配套技能，大幅降低多Agent系统的搭建成本 |
| [nicobailon/pi-subagents](https://github.com/nicobailon/pi-subagents) | 今日新增59星 | Pi Agent的扩展插件，支持异步子Agent任务调度、上下文自动截断、产物共享、跨会话状态同步，解决大Agent长任务卡顿问题 |
| [langgenius/dify](https://github.com/langgenius/dify) | 总量143303星 | 生产级Agent工作流开发平台，可视化拖拽搭建Agent应用，已在大量企业的AI业务线落地 |

### 📦 AI 应用
| 项目名 | Star数据 | 说明 |
| ---- | ---- | ---- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 今日新增1937星 | 爆款开源AI短视频生成工具，输入文案即可一键生成高清带配音、字幕的完整短视频，零专业剪辑能力即可使用 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 今日新增639星 | 无分词器的多语种TTS模型，支持创意音色生成、高精度声音克隆，打破了传统TTS的多语种适配门槛 |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | 今日新增372星 | 完全离线运行的生存AI便携系统，内置全离线知识库、本地大模型，无网络场景下也可独立运行所有AI功能 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 总量46662星 | 全场景AI生产力桌面端工具，统一接入300+大模型、内置上百个开箱即用的专属AI助手，覆盖日常办公绝大多数需求 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 总量22926星 | AI生成原生可编辑PPT工具，生成的文件完全保留原生形状、动画、 speaker 注释，支持自定义模板，不会生成不可编辑的图片幻灯片 |

### 🧠 大模型/训练
| 项目名 | Star数据 | 说明 |
| ---- | ---- | ---- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 总量50896星 | 知名开源教程，演示如何在2小时内从零训练一个64M参数的可用小LLM，覆盖所有大模型训练核心原理 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 总量174640星 | 目前社区表现最好的开源端侧Agent大模型，支持全工具调用、长上下文记忆，可完全本地运行无需联网 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 总量161121星 | 全球最主流的大模型开发基础框架，支持所有主流文本、视觉、音频、多模态模型的推理训练全流程 |

### 🔍 RAG/知识库
| 项目名 | Star数据 | 说明 |
| ---- | ---- | ---- |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | 今日新增236星 | 专为AI时代设计的高速分布式记忆引擎，提供标准化Memory API，Agent可以直接调用实现全生命周期的长记忆管理 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 总量81602星 | 目前落地最广泛的开源RAG引擎，融合结构化文档解析、知识图谱检索、Agent调度能力，大幅提升知识库问答准确率 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 总量36007星 | 轻量高速RAG框架，通过关联检索的方式大幅降低长文档场景下的幻觉率，性能远超传统向量检索RAG |
| [milvus-io/milvus](https://github.com/milvus/milvus) | 总量44559星 | 云原生高性能开源向量数据库，支持亿级向量毫秒级检索，是绝大多数企业级AI知识库的底层存储方案 |

## 3. 趋势信号分析
当前面向AI编码助手的开发生态工具正在获得社区爆发性关注，仅今日就有4款适配Claude Code、Cursor的扩展插件、Agent框架登榜，单项目单日最高涨星近2000。本次热榜首次出现两大新兴方向：一是基于Compound Engineering范式的AI编码插件生态，统一适配多款主流AI IDE的自定义技能扩展，正式从小众技术走向主流开发者视野；二是无分词器TTS开源模型落地，直接打破了传统语音生成领域的技术路径依赖。该趋势与上周Anthropic正式发布Claude Code官方终端编码工具直接强相关，开发者正在快速围绕新发布的AI编码底座搭建周边工具链，叠加微软推出的markitdown补全了RAG前置文档预处理的核心短板，整个AI生产落地的全链路工具链正在快速闭环。

## 4. 社区关注热点
- **微软markitdown工具**：直接解决RAG领域过去数年普遍存在的文档解析脏数据痛点，所有做知识库类AI产品的开发者都可以直接集成，大幅降低文档预处理成本。
- **Claude Code插件生态**：AI IDE是当前开发者最高频的AI入口，支持跨平台的Compound Engineering插件将成为下一阶段AI工具开发者的核心流量赛道。
- **无分词器VoxCPM模型**：直接解决多语种场景下TTS模型适配难的问题，可直接落地到AI短视频生成、多语种语音助手等商用场景，落地门槛极低。
- **Harness元Agent框架**：首次实现了由AI自动生成领域专属多智能体团队的能力，大幅降低复杂多Agent系统的开发周期，未来将在大量垂直行业场景快速落地。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*