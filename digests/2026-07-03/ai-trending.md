# AI 开源趋势日报 2026-07-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-02 23:07 UTC

---

# AI 开源趋势日报（2026-07-03）
---
## 1. 今日速览
今日GitHub AI类热门项目单日最高新增星数突破2900，核心热点完全围绕Claude Code生态与AI智能体工程化方向爆发。Token优化、跨Agent互通、多端工具集成类项目集中登榜，OpenAI官方发布的Codex对接Claude Code插件首次进入Trending榜单。垂直场景智能体覆盖从网络安全渗透、个人求职到量化交易等多个落地赛道，整个开源AI生态已经全面从大模型研发阶段转向智能体生产级落地阶段。
---
## 2. 各维度热门项目
### 🤖 AI 智能体/工作流
1. **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** | 总星待统计 + 今日新增2925
   开箱即用的完整AI工作室解决方案，内置从前端开发、社区运营到风险校验的全角色专用智能体，自带成熟工作流与交付校验机制，是今日涨星最高的AI项目。
2. **[usestrix/strix](https://github.com/usestrix/strix)** | 总星待统计 + 今日新增2167
   开源AI渗透测试工具，可自动扫描定位应用安全漏洞并给出修复方案，替代人工完成大部分安全审计工作。
3. **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** | 总星80785 + 今日新增866
   面向Claude Code的智能体技能插件，通过极简表达风格削减65%的token消耗，完全不影响最终输出质量，直接降低大模型调用成本。
4. **[obra/superpowers](https://github.com/obra/superpowers)** | 总星待统计 + 今日新增962
   代理技能框架与配套软件开发方法论，让智能体可以遵循成熟流程完成复杂的全栈开发任务。
5. **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** | 总星待统计 + 今日新增448
   OpenAI官方推出的插件，支持在Claude Code环境中直接调用Codex完成代码评审、子任务委派，打通两大编码智能体生态。
---
### 🔧 AI 基础工具
1. **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | 总星225153 + 今日新增508
   面向Claude Code、Codex、Cursor等所有主流编码AI工具的智能体 harness 性能优化系统，统一封装技能、记忆、安全校验能力，大幅降低智能体开发重复劳动。
2. **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** | 总星待统计 + 今日新增141
   官方发布的MCP协议组件，让编码智能体可以直接调用Chrome调试工具完成网页调试、性能分析，补齐了前端开发场景的Agent工具链。
3. **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | 总星101219 + 今日新增45
   主流动态神经网络训练推理框架，今日版本更新新增了对新一代智能体专用算子的原生支持。
4. **[langflow-ai/langflow](https://github.com/langflow-ai/langflow)** | 总星待统计 + 今日新增74
   可视化AI智能体与工作流搭建工具，低门槛实现复杂Agent逻辑编排。
---
### 📦 AI 应用
1. **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** | 总星待统计 + 今日新增918
   个人专属量化交易智能体，可自动完成行情分析、策略制定、交易执行全流程，所有逻辑完全开源透明避免闭源量化工具黑箱风险。
2. **[santifer/career-ops](https://github.com/santifer/career-ops)** | 总星57763 + 今日新增322
   基于Claude Code打造的AI求职系统，支持简历优化、岗位批量投递、笔试自动答题、PDF简历自定义生成等14种工作模式。
3. **[browser-use/video-use](https://github.com/browser-use/video-use)** | 总星待统计 + 今日新增550
   让编码智能体直接调用视频编辑能力，通过自然语言指令自动完成剪辑、字幕添加、特效生成等视频处理任务。
4. **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 总星48074
   一站式AI生产力工作台，内置300+专用助手，统一适配市面所有主流前沿大模型。
---
### 🧠 大模型/训练
1. **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 总星208007
   Nous Research推出的可自主迭代进化智能体基座，支持随用户使用不断扩充能力边界。
2. **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 总星52477
   面向入门开发者的LLM全流程训练教程，2小时即可从零训练出64M参数的完整小语言模型。
3. **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 总星7145
   主流开源大模型评测平台，覆盖100+测试数据集，支持几乎所有主流大模型的能力对标测试。
---
### 🔍 RAG/知识库
1. **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | 总星85539
   全智能体通用持久化记忆层，自动记录Agent全会话操作并压缩关联上下文，跨会话自动注入相关历史信息，适配20+主流AI开发工具。
2. **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 总星84162
   开源RAG引擎，融合检索增强与智能体能力，为大模型提供高可靠性的外部知识上下文层。
3. **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | 总星45048
   云原生高性能向量数据库，为RAG场景提供亿级向量低延迟检索能力。
---
## 3. 趋势信号分析
今日AI热榜完全被智能体工程化相关项目占领，面向Claude Code生态的Agent插件类项目集体爆发，单日新增星数总和突破6000，成为近期以来少见的细分赛道集体登榜现象。此前Anthropic发布的Claude Code开发工具生态效应开始全面显现，社区不再卷对话式Agent的概念创新，转而聚焦实际生产中的痛点：token成本压缩、跨Agent能力互通、开发工具链适配、垂直场景落地。同时MCP（模型上下文协议）相关组件首次出现在官方发布的热门仓库中，意味着智能体标准化工具调用的生态正在快速成型，后续将快速释放生产力，替代大量人工重复开发工作。
---
## 4. 社区关注热点
- **全栈AI工作室agency-agents**：开箱即可获得覆盖多角色的成熟智能体团队，中小团队无需自行开发就能获得从产品设计到运营推广的全链路AI人力支持，实用价值极高。
- **caveman极简token优化方案**：在不影响输出质量的前提下直接削减65%token消耗，所有智能体开发者都可以快速集成，直接将大模型调用成本降低一半以上。
- **ECC Agent性能优化系统**：作为Claude Code、Codex等主流编码智能体的统一适配层，未来极有可能成为编码智能体开发的事实标准，提前跟进生态可以复用大量社区成熟能力。
- **开源交易智能体Vibe-Trading**：所有策略逻辑完全透明可自定义，规避市面上闭源量化工具的黑箱风险，普通投资者可以低成本搭建完全属于自己的量化交易系统。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*