# AI 开源趋势日报 2026-07-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-08 23:08 UTC

---

# GitHub AI 开源趋势日报 | 2026-07-09
---
## 1. 今日速览
今日GitHub AI赛道热度全面聚焦于AI Agent生产落地全链路基建，Trending榜单中4个AI相关项目单日新增Star破千，创下近3个月来Agent类项目热度峰值。腾讯云同时开源Agent专属长时内存、安全沙箱两款底层核心组件，阿里轻量进程内向量库同步登榜，国产云厂商首次大规模集体输出AI Agent原生能力。主流头部大模型的外泄系统提示词汇总库单日涨星超1200，引发全社区对头部厂商Prompt工程逻辑的拆解讨论。当前开源社区已完全从大模型本身的军备竞赛，转向Agent落地周边工具链的补全浪潮。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
1. [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)：总星数未知，今日新增1712星。全球首款专为AI Agent设计的Office套件，无需安装原生Office即可通过单二进制文件完成Word/Excel/PPT的读写、编辑全自动化，彻底解决此前Agent处理办公文档的格式兼容痛点。
2. [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)：总星数未知，今日新增1226星。完整收录Claude、GPT、Gemini、Grok、Cursor等几乎所有主流AI产品泄露的系统提示词，定期更新，成为社区研究头部厂商Prompt工程体系的核心公开资源。
3. [TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)：总星数未知，今日新增555星。腾讯云开源的面向AI Agent的瞬时并发轻量安全沙箱，资源占用极低，可隔离Agent运行过程中的任意高危操作。
4. [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy/DesktopCommanderMCP)：总星数未知，今日新增20星。适配最新MCP协议的本地桌面控制服务，可直接给Claude开放终端操作、文件全量搜索、差异编辑能力。
5. [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)：总星数86799。专为编码Agent设计的Token压缩工具，通过极简话术模式可减少65%的输入Token，完全不影响Agent输出效果。
---
### 🤖 AI 智能体/工作流
1. [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)：总星数未知，今日新增1322星。前Chrome工程负责人开源的生产级编码Agent技能库，内置大量经过工业验证的工程最佳实践，直接适配Claude Code、Codex等主流编码Agent。
2. [obra/superpowers](https://github.com/obra/superpowers)：总星数未知，今日新增1170星。全栈Agent技能框架+配套软件工程方法论，可直接落地可复用的研发场景Agent流水线。
3. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)：总星数未知，今日新增373星。专为Agent设计的全网近30天资讯调研技能，自动跨Reddit、X、HN、Youtube等多平台爬取信息，输出带来源的可信摘要。
4. [bradautomates/claude-video](https://github.com/bradautomates/claude-video)：总星数未知，今日新增948星。给Claude新增全视频处理能力，自动下载视频、抽帧、转写音频后喂给大模型分析，无需复杂二次开发。
5. [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)：总星数未知，今日新增351星。腾讯云开源的完全本地化部署的Agent长时内存组件，通过4层渐进式流水线实现记忆分层管理，零外部API依赖。
6. [langgenius/dify](https://github.com/langgenius/dify)：总星数148212。生产级Agent工作流开发平台，是当前开源生态中落地占比最高的低代码Agent搭建工具。
---
### 📦 AI 应用
1. [ruvnet/RuView](https://github.com/ruvnet/RuView)：总星数未知，今日新增793星。用普通商用WiFi信号实现无摄像头的实时空间感知、生命体征监测、人员存在检测，完全不需要视觉硬件。
2. [santifer/career-ops](https://github.com/santifer/career-ops)：总星数59187。完全本地化运行的开源AI求职Agent，自动扫描全平台岗位、打分排序、定制简历、跟进申请进度。
3. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)：总星数53221。零API费用的全网内容爬取Agent工具，自动适配Twitter、小红书、B站等10余个主流平台。
4. [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)：总星数48319。集成300+预置助手的AI生产力桌面端，支持全系列主流大模型统一接入。
---
### 🧠 大模型/训练
1. [huggingface/transformers](https://github.com/huggingface/transformers)：总星数162388。当前最主流的多模态大模型训练推理框架，支持全品类SOTA模型的一键部署。
2. [ollama/ollama](https://github.com/ollama/ollama)：总星数175752。端侧大模型部署事实标准，最新版本已全量适配Kimi、GLM、Qwen等国产主流大模型。
3. [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)：总星数211553。开源领域迭代速度最快的原生Agent大模型，支持全生命周期的能力自进化。
4. [open-compass/opencompass](https://github.com/open-compass/opencompass)：总星数7173。行业通用大模型评测平台，支持100+数据集覆盖全维度能力评估。
---
### 🔍 RAG/知识库
1. [alibaba/zvec](https://github.com/alibaba/zvec)：总星数14375，今日新增370星。阿里开源的轻量超快进程内向量数据库，完全嵌入业务进程无需额外部署独立服务。
2. [infiniflow/ragflow](https://github.com/infiniflow/ragflow)：总星数84615。融合Agent能力的开源RAG引擎，是当前工业级落地最广泛的开源检索增强框架。
3. [mem0ai/mem0](https://github.com/mem0ai/mem0)：总星数60423。全平台通用的Agent记忆层，支持跨任意大模型的记忆持久化管理。
4. [topoteretes/cognee](https://github.com/topoteretes/cognee)：总星数27357。基于知识图谱的Agent长时记忆引擎，解决传统向量记忆的关联检索痛点。
---
## 3. 趋势信号分析
今日数据明确显示AI Agent落地基建正在迎来爆发式增长，从技能库、运行沙箱、长时内存到办公/视频处理外设能力，全链路工具链单日集体登榜，是近半年来Agent生态热度最高的节点。以腾讯、阿里为代表的国内云厂商首次集中输出Agent底层原生组件，标志着国内开源生态从应用层创新转向核心基础设施层贡献。
这一轮热度直接与近期Claude Code、OpenAI Codex等原生编码Agent大规模普及的行业事件强相关，MCP协议生态、端侧轻量组件正在成为社区共识方向，此前卷大模型参数的热度已完全转移到Agent落地效率优化方向。
---
## 4. 社区关注热点
- **Agent原生办公处理能力**：OfficeCLI彻底解决了长期以来AI Agent处理Office文档的格式不兼容痛点，将直接大幅提升研发、行政场景Agent的实用价值，可优先适配到现有Agent工作流中。
- **全链路国产Agent基建套件**：腾讯云同日开源的Agent Memory+CubeSandbox组合，提供了完全本地化的Agent运行底层替代方案，对有数据合规要求的企业场景具备极高落地价值。
- **头部AI产品系统提示词公开库**：system_prompts_leaks仓库完整公开了主流大模型产品的核心Prompt工程逻辑，是Prompt研发工程师不可多得的参考资料。
- **非视觉感知AIoT新场景**：RuView基于普通WiFi信号实现无摄像头感知的方案，大幅降低了老人看护、智能家居场景的AI部署硬件成本，具备很高的商业化潜力。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*