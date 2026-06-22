# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-22 23:19 UTC

---

# AI 开源趋势日报（2026-06-23）
---
## 1. 今日速览
今日GitHub AI开源领域呈现极强的Agent落地导向特征，单日涨星榜首的全链路Agent视频生产系统OpenMontage单日新增近3000星，直接带动创作类AI Agent赛道爆发。面向编码Agent的MCP上下文工具、全领域结构化技能库集体登顶热榜，字节开源的长周期SuperAgent框架活跃度同步冲高。低显存端侧推理技术、垂直场景标准化Agent能力的新项目集中涌现，叠加Claude Code生态的普及红利，整个AI开源生态已经从过去追模型参数的阶段，全面转向Agent生产力工具的垂直落地迭代。

## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
1. [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)：今日新增⭐1186，高性能代码智能MCP服务器，可将任意代码库索引为持久化知识图谱，查询延迟达亚毫秒级，token消耗降低99%，单静态二进制文件无依赖，今日发布即登顶工程工具榜。
2. [mattpocock/skills](https://github.com/mattpocock/skills)：今日新增⭐2051，知名开发者公开的个人Claude Code技能集合，直接从本地开发配置导出，覆盖全研发流程高频需求，开源后全网开发者大规模复用fork。
3. [lyogavin/airllm](https://github.com/lyogavin/airllm)：今日新增⭐187，实现70B参数大模型在单张4GB消费级GPU上完成推理，大幅降低端侧大模型部署门槛。
4. [garrytan/gstack](https://github.com/garrytan/gstack)：今日新增⭐649，完全复刻YC CEO Garry Tan的Claude Code全链路配置，内置23个覆盖CEO、设计师、产研全角色的Agent预设工具集。
5. [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)：总⭐137214，今日新增⭐736，大规模网页爬取交互API，是当前所有联网Agent的标配上游依赖。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
1. [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)：今日新增⭐2935，全球首个开源Agent化视频生产系统，内置12条流水线、52个工具、500+Agent技能，可直接将普通AI编码助手转化为全功能视频工作室，登顶今日全GitHub热榜第一。
2. [bytedance/deer-flow](https://github.com/bytedance/deer-flow)：总⭐73211，今日新增⭐736，字节开源的长周期SuperAgent基座，依托沙箱、记忆、子代理体系，可支撑耗时数小时的复杂任务自主执行。
3. [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)：今日新增⭐957，817个完全对齐MITRE ATT&CK、NIST等6大安全框架的网络安全Agent技能库，兼容20+主流Agent运行平台，是安全Agent场景的标杆级资源。
4. [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)：今日新增⭐369，HeyGen官方开源的Agent视频渲染框架，仅用HTML代码即可驱动生成动态视频内容，专为Agent场景设计。
5. [affaan-m/ECC](https://github.com/affaan-m/ECC)：总⭐219898，Agent运行时性能优化系统，针对性提升Claude Code等主流编码Agent的运行效率，覆盖技能调度、内存优化、安全防护全环节。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
1. [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)：今日新增⭐2462，专为AI深度定制的macOS端视频编辑器，原生集成AI素材生成、智能剪辑能力，今日涨星位列全榜第二。
2. [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)：总⭐45765，今日新增⭐1560，国内开发者开源的LLM驱动多市场智能投研系统，支持多源行情同步、实时资讯聚合、自动决策推送，可零成本实现定时运行。
3. [jamiepine/voicebox](https://github.com/jamiepine/voicebox)：今日新增⭐508，全开源AI声音工作室，支持声纹克隆、口述转写、音频内容创作全流程能力。
4. [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-clone-template)：今日新增⭐63，支持AI编码Agent一键克隆任意站点的开箱即用模板工具。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
1. [vllm-project/vllm](https://github.com/vllm-project/vllm)：总⭐83576，高吞吐低显存占用的大模型推理服务引擎，是当前行业大模型部署的标配工具。
2. [ollama/ollama](https://github.com/ollama/ollama)：总⭐174739，最主流的端侧大模型一键部署工具，全量支持国内外所有主流开源大模型。
3. [huggingface/transformers](https://github.com/huggingface/transformers)：总⭐161818，行业通用大模型开发框架，覆盖文本、视觉、音频全模态场景。
4. [open-compass/opencompass](https://github.com/open-compass/opencompass)：总⭐7112，全场景大模型评测平台，支持100+数据集覆盖所有主流前沿大模型的性能测评。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
1. [langgenius/dify](https://github.com/langgenius/dify)：总⭐146174，生产级Agent工作流开发平台，是当前国内落地最广的开源RAG/Agent基座。
2. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)：总⭐83759，支持全主流Agent平台的跨会话持久化上下文工具，自动压缩历史会话并注入后续Agent运行流程。
3. [mem0ai/mem0](https://github.com/mem0/mem0)：总⭐59147，AI Agent通用持久化记忆层，完美解决Agent跨会话上下文丢失的行业痛点。
4. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：总⭐83368，头部开源RAG引擎，融合知识图谱能力为大模型提供高质量结构化上下文支撑。

## 3. 趋势信号分析
今日AI开源热榜90%的高增长项目全部围绕Agent落地场景展开，单日涨星Top5中4个项目属于Agent技能、运行框架、垂直场景解决方案类，MCP（模型上下文协议）相关的代码智能工具热度首次超过传统向量数据库类项目，说明开发者的核心痛点已经从“搭建通用RAG系统”转向“让Agent在工程场景高效稳定运行”。近期Anthropic Claude Code的大规模普及直接带火了Agent技能生态，大量对齐行业权威标准的结构化技能库集中涌现，端侧低显存推理技术的突破也大幅下探了大模型部署的硬件门槛，整个行业已经完全脱离追模型参数的早期阶段，全面进入Agent生产力工具的垂直迭代周期。

## 4. 社区关注热点
- **OpenMontage 全链路Agent视频生产系统**：首次实现视频生产全流程的Agent自动化，直接大幅降低音视频内容创作门槛，预计后续会涌现大量同类创作类Agent项目。
- **codebase-memory-mcp 亚毫秒级代码智能MCP服务器**：完美解决大模型处理长代码库时的上下文token爆炸痛点，所有编码Agent开发者都可以快速接入复用，将大幅提升大模型的代码理解效率。
- **817个网络安全结构化Agent技能库**：首次实现垂直领域Agent技能完全对齐行业权威标准，为后续全领域Agent技能的标准化输出提供了标杆参考。
- **AirLLM 4GB显存运行70B大模型**：端侧部署门槛大幅下探，未来普通消费级硬件即可本地运行超大模型，本地隐私计算场景将迎来爆发式增长。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*