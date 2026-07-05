# AI 开源趋势日报 2026-07-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-05 23:01 UTC

---

# AI 开源趋势日报 | 2026-07-06
---
## 1. 今日速览
今日GitHub AI赛道最大热点围绕Anthropic Claude Code与OpenAI Codex两大终端编码Agent的生态爆发展开，近半数登榜项目为二者的周边工具、技能库与插件。隐私优先的全本地部署AI应用获得用户高度青睐，用Rust栈实现的低延迟、零云依赖项目涨星速度远超同类型其他语言项目。Token优化类工具集中涌现，针对大模型上下文浪费痛点的成熟解决方案开始大规模落地。国内厂商阿里巴巴连续开源网页GUI Agent与轻量向量数据库两大核心组件，正式跻身AI开源生态第一梯队。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) ⭐+1519 今日新增：OpenAI官方推出的插件，打通Claude Code的调用链路，可直接用Claude驱动Codex完成代码评审、任务委派，实现两大头部编码Agent能力互補。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) ⭐84821 / +1043 今日新增：爆火的Claude Code专属技能，通过极简的“原始人话术”风格将LLM输出Token量削减65%，大幅降低推理成本、提升响应速度。
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) ⭐+981 今日新增：全网最全的主流大模型系统提示词泄露合集，覆盖Claude全系列、GPT 5.5、Gemini 3.5、Grok等近20款产品，Prompt工程从业者可直接参考对齐官方输出逻辑。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐85435：行业最高普及度的高吞吐大模型推理引擎，持续迭代支持最新模型系列的低延迟部署。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐7832：全Rust实现的模块化LLM应用构建框架，无Python依赖，性能比传统Python栈高3~5倍。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- [usestrix/strix](https://github.com/usestrix/strix) ⭐+1121 今日新增：开源AI渗透测试工具，可自动扫描Web应用漏洞、生成修复方案，今日登顶安全类Agent热度榜首。
- [alibaba/page-agent](https://github.com/alibaba/page-agent) ⭐+801 今日新增：阿里开源的JavaScript页内GUI Agent，无需后端接口适配，直接用自然语言控制任意网页的交互操作，大幅降低Web端Agent开发门槛。
- [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) ⭐+650 今日新增：终端侧运行的Agent多路复用器，支持同时管理数十个不同类型的Agent，实现多任务并行调度。
- [alirezarezvani/claude-skills](https://github.com/alirezarevani/claude-skills) ⭐+394 今日新增：收录337个跨生态通用Agent技能，覆盖工程、营销、财务、行政等10大场景，适配Claude Code、Codex、Cursor等10余款编码Agent。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐209646：当前社区星数最高的自进化通用Agent框架，支持长期自主迭代适配用户习惯。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) ⭐+1409 今日新增：100%本地运行的隐私优先AI会议助手，Rust栈实现4倍速实时转写、说话人分轨、Ollama本地摘要，完全不需要上传任何会议数据到云端。
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) ⭐+850 今日新增：针对性解决大模型生成内容空洞、同质化问题的技能库，可让输出内容避免通用“AI套话”，生成更有质感的专属内容。
- [CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp) ⭐+415 今日新增：AI助手与Unity编辑器的桥梁，支持用自然语言直接控制Unity修改场景、编辑脚本、批量管理资源，大幅提升游戏开发效率。
- [santifer/career-ops](https://github.com/santifer/career-ops) ⭐58671：基于Claude Code搭建的全自动AI求职系统，支持自动简历优化、岗位匹配、投递流程全自动化。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐144322：全端适配的大模型统一交互界面，可同时对接数十款本地/云端模型。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐59137：最新YOLO系列计算机视觉模型全家桶，支持目标检测、分割、姿态识别等全场景CV任务。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7156：社区最普及的开源大模型评测平台，覆盖100+主流数据集，支持全系列主流大模型的性能横向对比。
- [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) ⭐8：全Rust从零实现的原生Decoder大模型，完全无Python依赖，支持INT4量化、LoRA微调，可从25M小参数扩展到1.3B大参数。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐84344：融合Agent能力的头部开源RAG引擎，支持非结构化文档的高精度解析与检索。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐85980：跨所有Agent会话的持久化上下文记忆工具，自动压缩历史操作记录，后续调用时自动注入相关信息，彻底解决上下文丢失问题。
- [alibaba/zvec](https://github.com/alibaba/zvec) ⭐12890：阿里开源的超轻量进程内向量数据库，无外部依赖，性能比普通开源向量库高2~3倍。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) ⭐56804：在RAG流程端实现60%~95%的Token压缩，不损失答案精度的前提下大幅降低推理成本。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐60146：全平台通用的AI Agent记忆层，支持跨设备同步Agent的长期记忆。
---
## 3. 趋势信号分析
今日整个AI开源社区的流量明显向终端编码Agent生态倾斜，超40%的热榜项目围绕Claude Code、OpenAI Codex展开，从官方插件到第三方技能库、配套工具全链路生态已经成型，标志着编码Agent彻底从概念验证阶段进入大规模落地期。Rust语言在AI工具赛道的占比持续攀升，今日多个高星项目均为Rust实现，主打低延迟、零依赖、全本地部署的特性，完美适配当前企业级AI应用对隐私性的强需求。Token优化类工具的集中爆发，直接对应大模型推理成本居高不下、上下文窗口利用率不足的行业痛点，已经出现成熟的落地方案可把Token消耗降低60%以上。国内头部厂商的开源贡献已经进入第一梯队，本次阿里连续开源网页Agent、轻量向量库两大核心组件，已经和国际主流生态完全对齐。
---
## 4. 社区关注热点
- 全主流大模型系统提示词合集[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)：实时更新覆盖近20款头部产品的官方系统Prompt，是Prompt工程、模型对齐研究的核心参考资料。
- Claude Code全品类技能生态爆发：当前社区已经诞生数百个适配Claude Code的垂直领域技能，覆盖营销、.NET开发、办公自动化等场景，直接接入即可大幅提升编码Agent生产力，无需重复造轮子。
- 全本地隐私AI会议助手[meetily](https://github.com/Zackriya-Solutions/meetily)：所有数据完全不上云，可直接部署在隐私敏感的企业内部，替代现有SaaS会议助手产品，落地成本极低。
- 零适配网页GUI Agent[page-agent](https://github.com/alibaba/page-agent)：无需对接后端接口即可通过自然语言操作任意网页，大幅降低Web端自动化、RPA场景的开发门槛。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*