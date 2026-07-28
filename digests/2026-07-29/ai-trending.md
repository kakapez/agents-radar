# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 22:58 UTC

---

# AI 开源趋势日报（2026-07-29）
---
## 1. 今日速览
今日GitHub AI开源热榜核心围绕AI Agent全链路生态集中爆发，多模态能力扩展、编码Agent优化、生产级治理工具三类项目热度最高。单日星增量最高的项目为给Claude注入视频理解能力的`claude-video`，今日新增近千星创下近期记录。吴恩达团队推出的多生成式AI提供商统一接口工具`aisuite`首次登榜，大幅降低多模型适配成本。微软官方放出覆盖100% OWASP Agent安全标准的治理工具包，标志着AI Agent正式从尝鲜阶段向合规生产阶段过渡。整体开源热点已经从大模型底座研发，全面转向Agent落地过程中的场景化痛点解决。

## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | 今日新增92星
  吴恩达团队发布的极简多生成式AI提供商统一接口SDK，仅需修改一行代码即可无缝切换OpenAI、Anthropic、Hugging Face等不同厂商模型，解决多模型适配的冗余开发问题。
- [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | 今日新增177星
  Hugging Face官方开源的端到端本地语音Agent构建工具，全链路无需调用云端API，仅用开源模型即可搭建低延迟实时语音交互助手。
- [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | 今日新增989星
  今日全榜热度最高项目，仅用单条`/watch`命令即可自动下载视频、抽帧、转写音轨，把全量多模态信息喂给Claude，零成本给所有文本类大模型新增视频分析能力。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) | 总星234.7k，今日新增692星
  面向Claude Code、Codex、Cursor等编码Agent的专属性能优化系统，内置自定义技能、上下文压缩、运行时安全管控能力，是当前编码Agent生态的核心扩展底座。
- [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 总星86.4k
  支持百种语言的轻量级OCR工具，可快速把任意PDF、图片文档转为结构化数据，是当前RAG、Agent场景下的标配文档预处理组件。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | 今日新增17星
  微软刚发布的业界首个官方级AI Agent治理工具包，全覆盖OWASP Agentic Top 10安全标准，内置权限管控、零信任身份校验、执行沙箱能力，解决自主AI Agent的越权运行风险。
- [langgenius/dify](https://github.com/langgenius/dify) | 总星150.58k
  目前生产落地最广泛的低代码Agent工作流平台，支持团队协作下快速从原型搭建到上线部署，无需重写栈即可同时接入多模型、多工具链。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) | 总星107.127k
  开源网页操控Agent标准库，让AI可以直接识别、交互任意网页元素，完成数据爬取、表单填写等复杂线上任务，是浏览器自动化Agent的事实工业标准。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) | 总星61.945k
  全场景通用AI Agent记忆层，支持跨会话持久化存储Agent交互历史，自动召回相关上下文，大幅降低长对话场景的token消耗和信息丢失率。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [moeru-ai/airi](https://github.com/moeru-ai/airi) | 今日新增796星
  爆火的自托管虚拟人格AI助手，完全用户持有数据，支持实时语音对话、操控《我的世界》《异星工厂》等沙盒游戏，覆盖全桌面/ Web平台。
- [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 今日新增366星
  可把任意技术书籍PDF一键转换为Claude Code专属技能包，开发者工作时可随时调用书中的知识点、代码片段，不用反复翻阅文档。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 总星99.746k
  成熟度极高的AI短视频自动生成工具，仅需输入主题关键词即可一键生成带字幕、配音、特效的高清短视频，落地门槛极低。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 总星41.624k
  可直接生成原生格式PPT文件的AI工具，支持内置动画、图表、自定义模板，不需要导出图片拼接，完全符合职场演示需求。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [ollama/ollama](https://github.com/ollama/ollama) | 总星177.129k
  端侧大模型一键部署事实标准，当前已支持Kimi、GLM、DeepSeek等几乎所有主流开源大模型，一条命令即可本地拉起运行。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 总星100.055k
  全球最知名的大模型入门教程， step by step用PyTorch从零实现类ChatGPT大模型，新手友好度拉满。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 总星53.947k
  国产开源大模型入门项目，仅需2小时即可从零训练出64M参数的完整小LLM，降低大模型研发的学习门槛。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) | 总星102.04k
  工业界首选动态神经网络训练框架，当前所有主流大模型、多模态模型的研发底座。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 总星86.263k
  开源融合Agent能力的高性能RAG引擎，支持复杂格式文档的自动解析、分片，是目前准确率最高的开源RAG实现之一。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 总星97.74k
  创新性零向量库RAG方案，通过本地确定性AST解析把代码库、文档、SQL schema直接转为可查询知识图谱，完全规避向量检索的不确定性，召回准确率大幅提升。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 总星88.87k
  跨所有Agent会话的持久化上下文工具，自动捕获、压缩Agent全量交互行为，后续会话自动注入相关历史上下文，适配所有主流编码Agent。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) | 总星45.404k
  云原生开源向量数据库，是当前大规模生产级RAG场景下使用最广泛的向量检索存储底座。

## 3. 趋势信号分析
今日热榜数据清晰显示AI Agent全链路工具链正在迎来爆发性增长，单日星增量TOP5的AI项目中有4个直接服务于Agent场景，充分说明大模型底座普及期已经结束，开发者需求全面转向Agent落地阶段的细分痛点解决。
此前从未进入大众视野的「编码Agent专属优化工具栈」首次批量登榜，围绕Claude Code生态的token压缩、技能扩展、上下文管理工具形成完整赛道，和近期Anthropic Claude 3.5 Code的大规模商用普及高度相关。微软首次推出符合OWASP标准的Agent治理工具，也标志着AI Agent产业正在脱离个人尝鲜阶段，向企业级合规生产快速过渡。同时不需要向量数据库的知识图谱RAG方案热度快速上升，正在成为RAG领域的重要演进方向。

## 4. 社区关注热点
- **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)**：日增近千星的视频能力扩展工具，极低开发成本即可让所有文本大模型获得视频分析能力，是所有AI Agent开发者可以快速复用的通用多模态组件。
- **微软Agent治理工具包**：首个大厂官方开源的符合完整OWASP Agent安全标准的生产级组件，直接解决此前企业落地自主AI Agent最头疼的越权运行、数据泄露风险问题。
- **编码Agent优化生态**：以ECC为核心的Claude Code周边工具已经形成从token压缩、上下文持久化到自定义技能的全链路覆盖，后续会成为所有AI代码编辑器的标准扩展方向。
- **零向量知识图谱RAG**：Graphify这类完全不依赖向量生成的检索方案，彻底规避了Embedding质量不稳定导致的RAG召回错误，大幅提升复杂代码、文档场景下的检索准确率，是接下来RAG领域的核心突破方向。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*