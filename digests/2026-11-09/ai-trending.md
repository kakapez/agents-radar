# AI 开源趋势周报 2026-11-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-09 02:31 UTC

---

# AI 开源趋势简报
## 1. 近七日要闻
过去 7 天，AI 开源生态的核心聚焦于实用、可投入生产环境的智能体工具、长上下文优化，以及面向 AI 智能体部署的易用基础设施。其中 AI 智能体工具链的发展势头最为强劲，来自行业实验室和独立开发者的、专门面向浏览器自动化、技能管理和长时运行会话支持的专用工具数量大幅增长。开发者对降低 LLM token 成本、实现智能体跨会话持续记忆的解决方案的需求明显上升，而非仅仅需要通用的模型封装工具。包括 Anthropic、Meta、Vercel、Google DeepMind 在内的头部 AI 实验室，以及各大开源社区，都在 GitHub 趋势榜上发布或推出了被广泛传播的智能体相关工具。聚焦智能体易用性的独立开发者项目，例如开源 Grok 替代品和本地优先的个人智能体，也在单日收获了数千颗新 star，显示出用户对可定制、非专有智能体体验的强烈需求。

## 2. 分类热门项目
### 🔧 AI 基础设施
| 项目 | 语言 | Star 数（总量 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | 0 (+345 today) | 一款面向裸金属 GPU Kubernetes 的管理平面，专为简化大规模 AI 工作负载的部署而设计。该项目在今日趋势榜上快速获得关注，填补了面向 AI 团队的自托管 GPU 编排工具的市场空白。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Rust | 0 (+815 today) | 一款专为 AI 智能体打造的浏览器自动化命令行工具，可实现可靠的网页交互。其单日新增 star 数表现亮眼，显示出市场对可消除浏览器自动化障碍的智能体原生工具的高需求。 |
| [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts) | Python | 0 (+32 today) | Anthropic 官方推出的入门项目合集，旨在帮助开发者基于 Claude API 构建可部署的应用。这代表着 Anthropic 持续致力于降低生产环境中集成 Claude 的门槛。 |
| [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) | C++ | 0 (+41 today) | 一款广泛应用于具身智能和机器人研究的通用物理模拟器。该项目持续出现在趋势榜中，反映出开发者对用于机器人和智能体训练的仿真工具的兴趣持续高涨。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 9,096 | 一款基于 Rust 构建模块化、可扩展 LLM 应用的框架。它面向追求高性能、内存安全基础设施、用于开发 LLM 驱动工具的开发者。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,577 | 一款开源 LLM 评估平台，支持覆盖推理、代码、长上下文和安全基准的 100 余个数据集。它是团队验证微调或定制化 LLM 部署效果的关键工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 5,692 | 一款教学项目，旨在为苹果芯片上的 Qwen 模型构建轻量的 vLLM 风格推理引擎。它的流行反映出市场对端侧、低资源 LLM 推理方案的兴趣日益增长。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,372 | 一款符合 Java 开发惯例的 LLM 应用开发库，内置工具调用、智能体和 RAG 支持。它是企业 Java 团队在现有技术栈中集成 AI 能力的核心资源。 |

### 🤖 AI 智能体 / 工作流
| 项目 | 语言 | Star 数（总量 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 0 (+1439 today) | Grok Bot 的开源替代方案，内置可供机器人执行任务的集成虚拟机。该项目单日收获近 1500 颗 star，显示出用户对自托管、可定制聊天机器人智能体的强烈需求。 |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0 (+792 today) | Anthropic 公开的 Claude 驱动智能体可复用智能体技能仓库。它提供预构建的模块化能力，开发者可直接接入自己的智能体工作流。 |
| [meta/astryx](https://github.com/meta/astryx) | TypeScript | 0 (+875 today) | 一款开源、完全可定制的设计系统，专为适配生成式 UI 体验的“智能体就绪”需求打造。这体现了 Meta 对智能体驱动用户界面的前端基础设施的投入。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 261,794 | 一款个人 AI 智能体，可随用户工作流持续成长和适配。其庞大的现有 star 基数使其成为应用最广泛的开源个人智能体项目之一。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,338 | 一款命令行工具，可让 AI 智能体无需支付 API 费用，即可在 Twitter、Reddit、YouTube、GitHub、Bilibili 和小红书等主流平台上进行读取和搜索。它解决了智能体获取实时网页数据访问权限的核心痛点。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 81,218 | 一款开源 AI 求职智能体，可扫描招聘网站、将职位与用户简历匹配、定制申请材料并追踪投递进度。它可在主流 AI 命令行工具中本地运行，也可作为 Claude Code 插件使用。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 74,930 | 一款 AI 智能体，可将文档或主题转换为包含图表、动画和自定义模板的原生可编辑 PowerPoint 演示文稿。它体现了智能体自动化专业创意办公工作流的日益流行趋势。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 49,942 | 一款轻量开源个人智能体，专为便捷的本地部署而设计。其轻量化设计面向希望无需复杂基础设施即可完全掌控智能体的用户。 |

### 📦 AI 应用
| 项目 | 语言 | Star 数（总量 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 68,279 | 一款由 LLM 驱动的多市场股票分析系统，可拉取市场数据、实时新闻，生成决策看板并发送自动通知，支持零成本定时运行。它是深受散户投资者欢迎的垂直领域 AI 应用。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 37,910 | 一款个人交易智能体，旨在辅助零售投资决策。它代表了快速增长的 AI 驱动个人金融工具品类。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 47,135 | 一款隐私优先、自托管的知识工作空间，专为人类与 AI 智能体协作而设计。它将笔记功能与原生智能体集成相结合，用于个人知识管理。 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | TypeScript | 37,507 | 一款可本地或云端部署的个人 AI 助手，支持多种聊天应用且易于扩展功能。它基于通义千问模型生态构建，旨在提供易用的个人助手服务。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 141,094 | 一款自动化 AI 工作流工具，可利用大语言模型根据主题或关键词生成高清短视频。它是应用最广泛的开源 AI 内容生成应用之一。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 121,394 | 一款专为金融交易用例构建的多智能体 LLM 框架。它展示了专业多智能体系统如何为高风险垂直工作流而打造。 |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 57,065 | 一款终身个性化辅导 AI 应用。它满足了市场对自适应 AI 驱动教育工具日益增长的需求。 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | Java | 48,404 | 一款企业级 AI 低代码平台，可通过自然语言提示生成完整的业务系统，内置知识库和工作流编排功能。它面向希望快速构建 AI 驱动业务工具的企业团队。 |

### 🧠 大语言模型 / 训练
| 项目 | 语言 | Star 数（总量 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 201,402 | 一款基础开源机器学习框架，可用于跨领域的模型训练和部署。它始终是 AI 开源生态的核心支柱之一。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 168,668 | 一款事实标准的模型定义框架，支持前沿文本、视觉、音频和多模态模型的推理与训练。它是获取预训练开源大语言模型的标准工具。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,267 | 一款动态神经网络框架，具备强大的 GPU 加速支持，广泛用于前沿 LLM 研发。它是多数现代开源 LLM 训练项目的主要框架。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | Python | 68,101 | 一款经典且广泛使用的机器学习库，用于传统机器学习任务和数据预处理。它仍是 LLM 数据管道工作中重要的辅助工具。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,417 | 一款用户友好的深度学习框架，专为快速实验设计。它降低了新开发者进入 AI 开发领域的门槛。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 63,225 | YOLO 系列目标检测、分割、分类和跟踪模型的官方仓库。它是计算机视觉 AI 应用的标准开源工具。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,387 | 一款可在本地运行 Kimi、GLM、DeepSeek、Qwen 和 Gemma 等开源大语言模型的工具。它已成为开发者在个人硬件上测试和使用开源大语言模型的标准方式。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 299,743 | 一款面向编码智能体的性能优化框架，为 Claude Code、Codex 和 Cursor 等工具添加技能、记忆和安全层。它在优化智能体编码工作流的团队中广受欢迎。 |

### 🔍 检索增强生成 / 知识
| 项目 | 语言 | Star 数（总量 / 今日新增） | 简介 |
| :--- | :--- | ---: | :--- |
| [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) | TypeScript | 0 (+460 today) | 一款上下文压缩插件，可在 10 万 token 上下文窗口的基础上，实现等效数十亿 token 的单智能体月度长会话，同时将 token 用量降低 5 倍。它因解决了当前多数 LLM 智能体面临的长上下文内存限制问题而热度飙升。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 144,224 | 一份精选合集，收录了 100 余个开源 AI 智能体、智能体技能和 RAG 应用。它是开发者构建生产级 RAG 和智能体工具时广泛参考的资源。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 114,951 | 一款面向 AI 智能体的跨会话持久上下文层，可捕获智能体活动、对其进行压缩，并将相关上下文重新注入未来的会话中。它兼容所有主流编码智能体和命令行工具。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,786 | 一款智能体原生 RAG 引擎，作为生产级 AI 部署的上下文基础设施而构建。它旨在将原始文档数据接入面向智能体的知识管道。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | Python | 87,110 | 一款专为 AI 智能体打造的开源网页抓取和提取工具，提供零配置即可使用的托管云服务。它解决了 RAG 和联网智能体的关键数据接入层问题。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs/headroom) | Python | 79,172 | 一款可在工具输出、日志、文件和 RAG 分块送入 LLM 之前对其进行压缩的工具，在保持输出准确率的同时，可将编码智能体的 token 用量降低 20%，将 JSON 数据的 token 用量降低 60%-95%。它解决了 RAG 管道 token 消耗成本不断上升的问题。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,653 | 一款即插即用的 AI 智能体和应用内存层，可实现跨会话的持久、生产级上下文。它是应用最广泛的智能体内存基础设施项目之一。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 46,611 | 一款高性能云原生向量数据库，专为可扩展的向量相似度搜索而构建。它是多数大规模 RAG 部署的核心基础设施组件。 |

## 3. 趋势信号分析
当前最受社区关注的方向是实用、可投入生产环境的 AI 智能体工具，尤其是解决智能体部署核心痛点的工具：长上下文记忆、浏览器自动化、token 成本降低和可复用模块化技能。与 12 到 18 个月前多数热门 AI 开源项目聚焦基础模型训练或通用微调工具的情况相比，这是一个明显的转变；如今的项目更优先考虑让智能体对终端用户而言更可靠、更低成本、更易部署。从本次数据集中还可以看到一个新兴方向：专为效率成本打造的智能体专属基础设施。上下文压缩插件、输出压缩代理和轻量化内存层都在快速普及，这是开发者针对长时智能体会话的高昂 API 成本做出的反应。这与整个行业向长上下文模型发展的大趋势一致，这类模型可支撑多步骤、数小时乃至数月的智能体工作流。这一趋势也与 Anthropic、Meta 和 Vercel 近期推出自身智能体专用工具的行业动向直接呼应，证明智能体工具链领域已不再只是独立开发者的小众赛道，而是头部 AI 实验室的核心战略重点。面向专有聊天机器人和个人智能体的开源替代品的激增，也反映出用户对自托管、私密智能体体验的需求，这类体验可避免被封闭平台 API 锁定。

## 4. 社区热点
- **长上下文与 token 优化工具**：[billion-context](https://github.com/ranxianglei/billion-context)、[headroom](https://github.com/headroomlabs-ai/headroom) 和 [caveman](https://github.com/JuliusBrussee/caveman) 等项目正在解决智能体用户的最大痛点：长会话的高 token 成本。开发者应关注这一领域，因为效率导向的工具将成为生产级智能体部署的必备组件。
- **智能体原生浏览器与网页数据访问**：[agent-browser](https://github.com/vercel-labs/agent-browser)、[Agent-Reach](https://github.com/Panniantong/Agent-Reach) 和 [firecrawl](https://github.com/firecrawl/firecrawl) 正在构建数据访问层，让智能体能够与真实网页交互。随着智能体从简单聊天迈向自动化真实世界在线任务，这一品类将变得至关重要。
- **可复用智能体技能生态**：Anthropic 的 [skills](https://github.com/anthropics/skills) 仓库和类似的模块化技能系统代表着可组合智能体能力的发展方向，类似于早期 web 发展中定义生态的插件系统。开发模块化、可复用智能体工具的开发者将在这一领域获得广泛应用。
- **垂直行业专用智能体**：面向金融、求职、内容创作和办公生产力的领域专用智能体（例如 [TradingAgents](https://github.com/TauricResearch/TradingAgents)、[career-ops](https://github.com/career-ops-hq/career-ops) 和 [ppt-master](https://github.com/hugohe3/ppt-master)）表现优于通用智能体框架，因为用户更倾向于寻找能解决特定高价值工作流的开箱即用解决方案。
- **本地优先、隐私优先的智能体基础设施**：[nanobot](https://github.com/HKUDS/nanobot)、[siyuan](https://github.com/siyuan-note/siyuan) 和 [anything-llm](https://github.com/Mintplex-Labs/anything-llm) 等工具正在快速获得关注，因为用户希望使用无需将敏感个人数据发送给第三方云端 API 的智能体体验。

---

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*