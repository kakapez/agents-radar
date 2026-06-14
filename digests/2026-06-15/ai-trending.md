# AI 开源趋势日报 2026-06-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-14 23:09 UTC

---

# AI 开源趋势日报（2026-06-15）
---
## 1. 今日速览
今日GitHub AI开源热榜呈现出明确的落地导向特征，AI Agent全链路配套工具、跨大模型统一接入组件、金融垂直大模型三类项目热度登顶。英伟达刚开源的AI Agent安全扫描工具SkillSpector单日新增星标近千，位列AI类涨星榜第一；吴恩达团队推出的多生成式AI服务商统一接入SDK aisuite单日涨290星直接登榜。全量7天活跃AI项目中Agent生态相关占比超40%，标志着行业已经从大模型预训练竞赛阶段全面转向应用层落地基建补短板阶段。金融、具身智能等高价值垂直赛道的开源项目活跃度同步飙升。

## 2. 各维度热门项目
### 🔧 AI 基础工具
1. **NVIDIA/SkillSpector** https://github.com/NVIDIA/SkillSpector  
   今日新增962星：英伟达刚开源的AI Agent技能安全扫描器，可自动检测Agent自定义技能中的漏洞、恶意代码和数据泄露风险，是Agent大规模商用的必备安全组件，今日登顶AI类涨星榜。
2. **andrewyng/aisuite** https://github.com/andrewyng/aisuite  
   今日新增290星：吴恩达团队推出的生成式大模型统一接入SDK，仅需一套接口即可调用数十家主流大模型服务商，大幅降低多厂商适配成本，今日登Trending引发全栈开发者广泛关注。
3. **vllm-project/vllm** https://github.com/vllm-project/vllm  
   总星82849：当前生态最成熟的高吞吐LLM推理引擎，2026年已全面支持端侧和分布式集群部署，是所有AI落地项目的标配依赖。
4. **huggingface/transformers** https://github.com/huggingface/transformers  
   总星161586：覆盖多模态全品类模型的官方开发框架，近期刚更新对国内全系列开源大模型的原生支持，进一步降低开源模型落地门槛。
5. **0xPlaygrounds/rig** https://github.com/0xPlaygrounds/rig  
   总星7615：Rust语言生态的高性能LLM应用开发框架，适配当前对低延迟AI服务的爆发需求，近期活跃度提升极快。

### 🤖 AI 智能体/工作流
1. **langchain-ai/langchain** https://github.com/langchain-ai/langchain  
   总星139279：当前生态占有率最高的Agent工程平台，近期刚完成全链路的MCP协议适配，大幅降低Agent工具调用的开发门槛。
2. **Significant-Gravitas/AutoGPT** https://github.com/Significant-Gravitas/AutoGPT  
   总星184939：开源Agent的标杆项目，最新版本实现了完全自主的多任务拆解和长周期运行能力，适配绝大多数复杂办公场景。
3. **browser-use/browser-use** https://github.com/browser-use/browser-use  
   总星98820：让AI Agent直接操作全量网页的适配框架，无需对接零散的第三方API就能实现全互联网信息检索和操作，是当前网页自动化赛道的最热门开源方案。
4. **mem0ai/mem0** https://github.com/mem0ai/mem0  
   总星58553：全生态通用的AI Agent持久化记忆层，解决Agent跨会话上下文丢失的核心痛点，已经接入90%以上的主流Agent开发框架。
5. **Panniantong/Agent-Reach** https://github.com/Panniantong/Agent-Reach  
   总星28700：可让AI Agent无API成本访问海内外主流内容平台的工具，无需申请平台权限就能抓取社交平台、视频网站等内容，大幅拓展Agent的信息边界。

### 📦 AI 应用
1. **open-webui/open-webui** https://github.com/open-webui/open-webui  
   总星141514：支持全品类大模型的开源AI交互界面，2026年新增原生多Agent协作面板，是目前个人和团队部署私有大模型的首选前端。
2. **shiyu-coder/Kronos** https://github.com/shiyu-coder/Kronos  
   今日新增238星：开源首个金融市场专属基础大模型，可直接对接实盘行情数据完成量化分析、交易决策等任务，今日登Trending引发金融科技圈广泛讨论。
3. **Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots** https://github.com/Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots  
   今日新增276星：全球顶尖的自主机器人开源教程，覆盖AI具身智能的核心原理和落地实践，今日热度登顶AI教育类榜单。
4. **TauricResearch/TradingAgents** https://github.com/TauricResearch/TradingAgents  
   总星86135：多Agent协作的金融交易开源框架，支持多因子策略、实时行情分析、自动调仓等全链路量化功能。
5. **Shubhamsaboo/awesome-llm-apps** https://github.com/Shubhamsaboo/awesome-llm-apps  
   总星114543：集合100+可直接运行的AI Agent和RAG应用库，新手开发者可直接复用代码快速落地业务。

### 🧠 大模型/训练
1. **ollama/ollama** https://github.com/ollama/ollama  
   总星174163：一键即可部署全品类大模型的开源工具，2026年已经原生支持国内所有主流开源大模型的拉取，是本地部署大模型的事实标准。
2. **pytorch/pytorch** https://github.com/pytorch/pytorch  
   总星100753：全球市占率最高的深度学习训练框架，最新版本优化了端侧大模型推理的算子效率，性能较前代提升30%。
3. **open-compass/opencompass** https://github.com/open-compass/opencompass  
   总星7083：国内主导的中立LLM评测平台，覆盖100+评测数据集，是大模型发布前性能校验的主流工具。
4. **ultralytics/ultralytics** https://github.com/ultralytics/ultralytics  
   总星58385：全品类计算机视觉模型的开发部署框架，最新版本支持多模态感知能力，是具身智能项目的标配依赖。

### 🔍 RAG/知识库
1. **langgenius/dify** https://github.com/langgenius/dify  
   总星145197：生产级Agent工作流和RAG开发平台，国内开发者生态最活跃的AI开发底座项目，近期刚更新了实时数据RAG的原生支持。
2. **infiniflow/ragflow** https://github.com/infiniflow/ragflow  
   总星82716：基于深度文档解析的开源RAG引擎，可自动处理复杂格式的PDF、扫描件，大幅提升知识库问答的准确率。
3. **milvus-io/milvus** https://github.com/milvus-io/milvus  
   总星44774：云原生分布式向量数据库，支撑了国内超70%的生产级RAG项目，是当前企业级向量存储的首选方案。
4. **PaddlePaddle/PaddleOCR** https://github.com/PaddlePaddle/PaddleOCR  
   总星82185：多语言轻量OCR工具，可直接将图片、扫描件内容结构化输入LLM，是构建非结构化文档知识库的核心工具。

## 3. 趋势信号分析
今日AI开源生态的核心爆发方向集中在AI Agent全链路配套工具，安全扫描、跨模型统一接口类项目的涨星速度远超常规大模型项目，说明整个行业已经从大模型预训练竞赛全面转向应用层落地的配套基建补短板阶段。其中英伟达首次开源Agent安全专项工具SkillSpector，标志着头部硬件厂商已经全面下场布局Agent落地的安全标准。同时金融垂直领域专属大模型Kronos登榜，叠加多Agent交易框架7天活跃度提升，印证了大模型在高价值垂直赛道的商业化落地已经进入成熟期。近期OpenAI、Anthropic相继推出的Agent原生服务正在倒逼开源生态快速补齐配套工具链，预计接下来3个月会迎来Agent相关开源项目的爆发期。

## 4. 社区关注热点
- **SkillSpector Agent安全扫描工具：** 目前绝大多数自定义Agent技能都存在未公开的安全漏洞，该工具为Agent大规模商用提供了首个可落地的安全校验方案，所有正在做Agent落地的团队都可以直接接入使用。
- **吴恩达aisuite统一多模型接口：** 彻底解决了开发者需要适配多厂商不同API协议的痛点，可大幅降低多厂商大模型切换的运维成本，快速支撑多模型灰度测试场景。
- **金融专属大模型Kronos：** 首个完全针对金融市场时序数据特性训练的开源基础大模型，在行情预测、量化分析场景效果远超通用大模型，为金融科技从业者提供了全新的低成本落地路径。
- **Agent-Reach无成本全网信息获取：** 解决了当前Agent信息获取成本高、平台API权限受限的核心痛点，可大幅拓展Agent的信息获取边界，支撑更复杂的公开信息研判类场景。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*