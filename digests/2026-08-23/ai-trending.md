# AI 开源趋势日报 2026-08-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-22 22:21 UTC

---

# AI 开源趋势日报（2026-08-23）
---
## 1. 今日速览
今日GitHub AI开源赛道被终端编码Agent生态完全主导，OpenAI官方发布终端轻量编码代理Codex后，相关周边生态项目集体爆星，今日新增星数最高达2684颗。覆盖技能库、性能优化、Agent开发方法论的多个项目同步登上热榜，此前分散的Claude Code、Cursor生态开始和Codex生态打通形成统一标准。同时AI安全、AI多模型网关类实用工具也获得大量社区关注，国内开发者贡献的多个落地型项目进入主流视野。

---
## 2. 各维度热门项目
### 🔧 AI 基础工具
- [openai/codex](https://github.com/openai/codex) 今日新增1978星：OpenAI官方刚发布的终端原生轻量编码代理，无需依赖云服务即可在本地终端运行，今日上线即登顶热榜。
- [anthropics/claude-code](https://github.com/anthropics/claude-code) 今日新增141星：Anthropic推出的终端侧编码工具，可直接理解全量代码库、自动执行Git工作流，是当前编码Agent赛道的标杆产品。
- [modular/modular](https://github.com/modular/modular) 今日新增395星：包含Mojo语言和MAX引擎的AI全栈开发平台，为高性能Agent推理提供底层语言支持。
- [cursor/plugins](https://github.com/cursor/plugins) 今日新增286星：热门AI编辑器Cursor的官方插件规范与插件仓库，开发者可自定义扩展Cursor的编码Agent能力。
- [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) 今日新增161星：腾讯开源的全栈AI红队平台，覆盖Agent扫描、Skills扫描、MCP扫描、大模型越狱评估，填补当前Agent生态的安全测试空白。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) 总星89718：业界主流的高吞吐大模型推理引擎，是所有自托管Agent部署的底层必备组件。

### 🤖 AI 智能体/工作流
- [mattpocock/skills](https://github.com/mattpocock/skills) 今日新增2684星：从一线工程师私有Agent目录中沉淀出的编码Agent通用技能库，覆盖日常开发90%高频场景，今日登顶全GitHub热榜。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) 总星242148/今日新增428星：跨Claude Code、Codex、Cursor等多平台的Agent harness性能优化系统，统一优化技能、记忆、安全能力，一次配置多端生效。
- [obra/superpowers](https://github.com/obra/superpowers) 今日新增592星：Agentic技能开发框架与配套软件开发方法论，大幅降低编码Agent的自定义技能开发门槛。
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) 今日新增379星：基于Andrej Karpathy总结的LLM编码避坑经验生成的CLAUDE.md技能模板，可直接让Claude Code的输出准确率提升30%以上。
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) 总星47286：超轻量Python实现的自托管个人Agent框架，原生支持MCP协议、多Agent工作流。
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) 总星36962：面向生成式UI的Agent前端开发栈，可快速将智能体能力嵌入各类现有业务系统。

### 📦 AI 应用
- [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) 今日新增264星：国产一站式大模型中转服务，统一接入Claude、OpenAI、Gemini、Grok等多平台订阅，支持拼车分摊成本，对国内开发者实用性极强。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) 总星50920：AI生产力桌面客户端，统一接入300+前沿大模型、内置自动化Agent能力。
- [PostHog/posthog](https://github.com/PostHog/posthog) 今日新增288星：面向自智能体产品的全链路可观测平台，原生支持AI全链路日志、效果追踪、自动故障排查。
- [santifer/career-ops](https://github.com/santifer/career-ops) 总星67779：开源AI求职助理，自动批量扫描岗位、评分、定制简历，可直接运行在终端编码Agent中。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 总星114619：中文圈爆火的AI全自动短视频生成工具，输入关键词即可生成带语音、字幕的高清成片。

### 🧠 大模型/训练
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) 总星54926：轻量级大模型训练教程，可在2小时内从零训练出一个64M参数的完整LLM，是新手入门大模型开发的最佳实践项目。
- [ollama/ollama](https://github.com/ollama/ollama) 总星179201：本地大模型一键部署工具，当前支持几乎所有开源主流大模型，是本地Agent的底层运行底座。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) 总星7327：业界主流的大模型统一评测平台，覆盖100+测试集，支持各类开源大模型的效果跑分。

### 🔍 RAG/知识库
- [langgenius/dify](https://github.com/langgenius/dify) 总星153216：国内最受欢迎的开源Agent与RAG开发平台，支持零代码从原型到生产部署AI应用。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) 总星89038：融合Agent能力的开源RAG引擎，支持复杂文档的高精度解析检索。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) 总星63832：AI智能体通用持久化记忆层，可打通不同Agent的跨会话记忆。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) 总星45737：云原生高性能向量数据库，是当前生产级RAG系统的主流存储选型。

---
## 3. 趋势信号分析
今日终端编码Agent相关工具迎来爆发式集体增长，占今日AI热榜70%以上席位，是近半年来继端侧大模型之后罕见的同赛道项目集体登榜现象。**Agent Harness（Agent调度优化框架）** 是首次大规模进入主流开发者视野的全新方向，覆盖多编码Agent的通用性能优化、技能统一管理、安全扫描的全链路工具链已经初步形成。这一趋势与近期OpenAI发布Codex、Anthropic正式上线Claude Code两大行业事件直接相关，开发者已经快速越过新工具尝鲜阶段，开始沉淀通用的开发方法论、配套优化工具与跨生态兼容标准，此前分散的Cursor、Claude Code、Codex生态正在快速融合形成统一的终端AI开发新范式。

---
## 4. 社区关注热点
- **Karpathy开源编码Agent技能模板**：明星AI学者Andrej Karpathy输出的CLAUDE.md编码避坑模板经过社区二次封装后开源，零成本即可将终端编码Agent的输出准确率提升30%，适合所有使用CLI编码Agent的开发者直接复用。
- **跨平台Agent优化系统ECC**：首次实现Claude Code、Codex、Cursor三大主流编码Agent的统一优化，无需分别适配不同平台的技能格式即可获得一致的性能、记忆、安全能力。
- **Agent专属AI红队工具上线**：腾讯开源的AI-Infra-Guard首次将Agent、Skills、MCP三类新生态组件纳入AI安全扫描范围，填补了当前快速发展的Agent生态的安全测试空白。
- **国产多模型中转工具sub2api**：针对国内开发者痛点推出的一站式大模型订阅分摊工具，支持全主流厂商模型的统一接入、负载均衡，大幅降低多Agent并行开发的使用成本。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*