# AI 开源趋势日报 2026-07-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-04 22:57 UTC

---

# AI 开源趋势日报（2026-07-05）
---
## 1. 今日速览
今日GitHub AI热榜呈现明显的「Agent生态落地爆发」特征，与Claude Code相关的技能、token优化类项目集体冲上热榜头部，单项目最高日增星突破1900。此前小众的MCP（模型上下文协议）赛道今日连续出现官方适配器项目，Chrome、Unity等生产力工具正式打通AI Agent操控链路。垂直场景AI工具迎来新突破，开源AI渗透测试工具登顶日增星榜首，性能优先的Rust栈本地AI应用占比持续提升。存量热门项目中，token压缩、Agent记忆类工具的星量增速进一步加快，开发者注意力已经从大模型本身转向落地层效率优化。
---
## 2. 各维度热门项目
### 🔧 AI 基础工具
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 总星83.9k + 今日新增1089：Claude Code专属技能，通过极简话术风格实现65%的token消耗削减，是今日热度最高的Agent效率优化工具。
- [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 今日新增432：汇总了Claude、GPT、Gemini、Grok等当前主流前沿模型的泄露系统提示词，是开发者研究大模型底层行为的一手资料库。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 今日新增303：Chrome官方推出的DevTools MCP适配器，让编码Agent可以直接读取、调试网页运行状态，大幅降低网页端AI Agent的开发门槛。
- [mattpocock/skills](https://github.com/mattpocock/skills) | 今日新增1013：来自顶级工程师的个人Claude Code技能库，覆盖工程全流程实用场景，发布当日就获得近千星认可。
- [harvard-edge/cs249r_book](https://github.com/harvard-edge/cs249r_book) | 今日新增446：哈佛开源的最新版《机器学习系统》教材，聚焦端侧ML部署优化前沿实践。
### 🤖 AI 智能体/工作流
- [usestrix/strix](https://github.com/usestrix/strix) | 今日新增1910：开源AI渗透测试工具，可自动扫描并修复应用漏洞，是首次登上热榜头部的安全类Agent项目。
- [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 今日新增706：终端下运行的Agent多路复用器，支持同时调度多个AI Agent并行执行任务。
- [alibaba/page-agent](https://github.com/alibaba/page-agent) | 今日新增726：阿里开源的网页端GUI Agent，用自然语言即可直接操控任意网页的交互逻辑，无需逆向接口。
- [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 今日新增716：OpenAI官方推出的Codex对接Claude Code的插件，实现两款顶级编码Agent的能力互通。
- [CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp) | 今日新增68：Unity编辑器MCP桥接工具，让AI Agent可以直接操控Unity完成资源管理、场景编辑、脚本自动化等操作。
### 📦 AI 应用
- [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | 今日新增865：Rust实现的隐私优先开源AI会议助手，100%本地运行，转录速度是传统Whisper方案的4倍，无需上传任何数据到云端。
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 今日新增197：收录337个Claude Code通用技能，覆盖研发、运营、财务等多场景，同时兼容10+主流编码Agent。
- [dotnet/skills](https://github.com/dotnet/skills) | 今日新增57：微软官方推出的.NET专属Agent技能库，解决AI编码Agent开发C#项目时的规范、生态适配问题。
### 🧠 大模型/训练
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 总星52.5k：国产开源轻量LLM训练教程，支持普通消费级显卡2小时从零训练出64M参数的完整大模型。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) | 总星85.3k：当前最主流的高吞吐大模型推理引擎，最新版本已经支持Qwen 3、DeepSeek V3等前沿模型的无损加速。
- [ollama/ollama](https://github.com/ollama/ollama) | 总星175.4k：本地大模型部署事实标准工具，最新版已支持Kimi-K2.6、GLM-5.1等国产前沿模型一键运行。
### 🔍 RAG/知识库
- [langgenius/dify](https://github.com/langgenius/dify) | 总星147.6k：生产级Agent工作流开发平台，最新版本已原生集成MCP协议支持。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs/headroom) | 总星56.5k：RAG与工具输出压缩工具，可在不丢失信息的前提下将LLM输入token量降低60%-95%。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 总星77.6k：将代码库、文档、音视频全部转为可查询知识图谱的Agent技能，大幅提升大项目上下文检索精度。
---
## 3. 趋势信号分析
今日AI开源生态的核心爆发点集中在「Claude Code生态+MCP协议工具链」赛道，这类项目日增星普遍突破700，是近期少有的集体级热度现象。MCP作为此前仅小范围传播的协议，今日首次出现Chrome、Unity两大官方生态的适配器项目，标志着AI Agent已经从操控网页、文档延伸到直接操控专业生产力工具，落地门槛大幅降低。
这一趋势与近期Anthropic正式发布Claude Code、OpenAI发布新版Codex两款顶级编码Agent的行业事件直接强相关，开发者不再满足于大模型基础能力，开始集中补全Agent落地所需的技能库、上下文优化、跨工具链路等短板。同时Rust栈的本地优先AI应用占比持续提升，也反映出开源社区对隐私、性能的要求正在同步提高。
---
## 4. 社区关注热点
- **Agent Skill赛道红利显现**：短时间内已有数百个开箱即用的Claude Code/Codex技能开源，开发者无需从零开发Agent，只需要组合现有技能就可以快速搭建垂直场景自动化工作流。
- **MCP生态进入扩容期**：继开发环境、浏览器之后，后续预计很快会出现PS、Figma、Office等更多专业工具的MCP适配器，AI Agent的物理操控边界将快速扩展。
- **Token优化成刚性刚需**：caveman、headroom等token压缩工具的热度暴涨，在长上下文Agent普遍落地的当下，这类工具投入产出比极高，能直接将LLM调用成本降低一半以上。
- **垂直场景专属Agent快速崛起**：AI渗透测试、股票分析、求职自动化等细分领域专用Agent近期密集开源，相比通用Agent在垂直场景的准确率、效率均有量级提升。

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*