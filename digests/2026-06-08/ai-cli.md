# AI CLI 工具社区动态日报 2026-06-08

> 生成时间: 2026-06-07 23:05 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 2026-06-08 主流AI CLI工具横向对比分析报告
本报告基于8款主流AI CLI工具当日社区公开动态整理，面向技术决策者与开发者提供行业全景参考。

---

## 1. 生态全景
当前AI CLI赛道已正式从早期功能验证期进入「生产可用打磨+跨工具生态标准化」的双线增长阶段。头部工具均已完成Agent代码编辑、MCP扩展、多模型接入等基础能力覆盖，竞争焦点从「功能有无」全面转向运行可靠性、场景适配广度、企业级工作流嵌入深度。开源与闭源工具已形成明确的分层错位格局，国内厂商推出的工具在本地化部署、国产大模型适配方向的差异化优势持续放大。MCP/ACP开放协议正在快速成为全行业事实标准，跨工具生态打通的产业拐点已经显现。

## 2. 各工具活跃度对比
| 工具名称 | 当日高价值Issue数量 | 当日核心PR数量 | 2026-06-08版本发布情况 |
|----------|---------------------|----------------|------------------------|
| Claude Code | 10 | 2 | 正式发布v2.1.168可靠性补丁 |
| OpenAI Codex | 10 | 10 | 无正式版本发布 |
| Gemini CLI | 10 | 10 | 无正式版本发布 |
| GitHub Copilot CLI | 10 | 1 | 无正式版本发布 |
| Kimi Code CLI | 7 | 3 | 无正式版本发布 |
| OpenCode | 10 | 10 | 无正式版本发布 |
| Pi | 10 | 4 | 无正式版本发布 |
| Qwen Code | 6 | 10 | 发布v0.17.1-nightly夜间构建版 |
| DeepSeek TUI | 6 | 10 | 无正式版本发布 |

## 3. 共同关注的功能方向
全赛道社区呈现高度一致的四大核心诉求：
1. **MCP/ACP协议生态兼容**：覆盖Claude Code、OpenAI Codex、Gemini CLI、OpenCode、Pi、Qwen Code共6款头部工具，具体诉求为统一扩展接口规范、补齐MCP长任务取消、令牌自动刷新、图片格式兼容等边缘能力，实现第三方插件一次开发全工具复用。
2. **长会话可靠性体系建设**：所有工具均在集中修复长任务场景下的Agent死循环、上下文溢出崩溃、无意义配额消耗问题，目标是支持数小时甚至数天的无人值守编码大任务不丢失进度、不误操作。
3. **本地/私有大模型适配**：覆盖Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI，核心诉求为兼容Ollama、vLLM、LMStudio等本地推理框架，适配Azure/AWS Bedrock等企业私有化部署通道，满足纯离线内网环境的使用要求。
4. **全平台边缘兼容性修复**：所有工具均投入大量资源修复WSL混合环境、Linux Wayland、Windows行结尾规范、FreeBSD/Nix等小众开发环境的适配Bug，覆盖更多细分开发场景。

## 4. 差异化定位分析
各工具的路线差异已完全显现：
| 工具 | 核心侧重 | 目标用户 | 技术路线特点 |
|------|----------|----------|--------------|
| Claude Code | 原生体验打磨、高危数据丢失Bug闭环 | 付费高端全栈开发者 | 优先推进全平台原生桌面版发布，聚焦高阶MCP能力开放 |
| OpenAI Codex | 企业级配额管理、百万行大Git仓库性能优化 | OpenAI Business团队用户 | 深度绑定OpenAI模型生态，优先解决付费场景下的配额透明化问题 |
| Gemini CLI | Agent沙箱隔离、Auto Memory会话记忆安全 | 对本地隐私要求极高的开发者 | 优先落地前置敏感数据脱敏、危险操作二次拦截机制 |
| GitHub Copilot CLI | GitHub生态深度联动、企业内部SSL代理兼容 | GitHub重度开发者 | 打通账号体系与PR评审能力，优先适配企业内网落地场景 |
| Kimi Code CLI | 多设备会话接力、新旧版本平滑迁移 | 国内存量Kimi老用户 | 优先解决v0.11版本升级后的状态同步、配额归属混乱问题 |
| OpenCode | 全开源可自托管、多云厂商模型一键接入 | 开源社区自部署用户 | 完全开放所有代码能力，主打低门槛接入第三方大模型服务 |
| Pi | 多聚合网关能力、全主流大模型原生适配 | 高阶多模型切换玩家 | 支持几乎所有公有云大模型服务商开箱即用，无需手动配置兼容端点 |
| Qwen Code | ACP通用后端能力、一次部署多端IDE接入 | 国内企业私有化用户 | 把CLI作为服务端Daemon输出，适配Zed、JetBrains等所有支持ACP协议的编辑器 |
| DeepSeek TUI | 极致终端性能、Rust架构轻量化重构 | 终端极客用户 | 完全走纯TUI交互路线，优先降低内存占用、提升操作响应速度 |

## 5. 社区热度与成熟度
第一梯队为**Claude Code与OpenAI Codex**，社区热度断层领先：前者Linux原生桌面版需求获288个点赞，后者配额虚耗问题累计601条用户评论，均已进入大规模生产付费落地阶段，整体成熟度最高，核心功能稳定性经过百万级用户验证。
第二梯队为**OpenCode、Gemini CLI、GitHub Copilot CLI**，社区活跃度处于高位，大量企业级用户集中涌入，当前核心迭代方向为补全边缘场景兼容性，成熟度次高，已经具备小规模团队落地条件。
第三梯队为国内厂商推出的**Qwen Code、Kimi Code CLI、Pi、DeepSeek TUI**，迭代速度远超海外平均水平，单日核心PR数量均超过10项，处于核心架构快速升级、补齐基础能力的高速增长阶段，社区用户规模增长势头强劲。

## 6. 值得关注的趋势信号
1. **MCP/ACP生态拐点到来**：开发者后续开发自定义Agent插件无需再为不同工具做多份适配，基于统一协议开发的扩展可以直接在所有主流AI CLI上运行，扩展开发成本降低70%以上。
2. **安全取代功能迭代成为第一优先级**：所有头部工具近期都把沙箱隔离、危险操作拦截、误操作数据恢复排在最高优先级，Agent随意修改系统文件的风险将快速成为过去，开发者可以放心把自动化运维、大代码重构等高权限任务交给Agent执行。
3. **国产生态工具的私有化部署优势明显**：国内AI CLI工具对纯离线内网环境、国产大模型、国内企业认证体系的适配进度远超海外产品，国内企业用户优先选择国产生态工具落地可降低至少50%的部署适配成本。
4. **无人值守长任务能力即将普及**：全赛道都在推进后台任务、自动上下文压缩、错误自动容错能力，很快开发者将不需要全程盯着Agent执行，可直接提交数天周期的大重构任务到后台运行，生产力释放效率将大幅提升。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-06-08）
---
## 1. 热门 Skills 排行
以下是社区关注度最高的7个新增/迭代Skill，匹配对应开发者场景的核心痛点：
| 排名 | Skill名称 | 关联PR | 功能说明 | 社区讨论热点 | 当前状态 |
| --- | --- | --- | --- | --- | --- |
| 1 | agent-creator元技能 | [#1140](https://github.com/anthropics/skills/pull/1140) | 自动生成适配特定任务的专属智能体集合，同时修复了多工具并行调用评估逻辑、新增Windows平台路径兼容支持 | 解决原生Claude Code多工具任务拆分效率低的通用痛点，是社区首个面向Agent编排的元技能 | OPEN |
| 2 | 文档排版质控Skill | [#514](https://github.com/anthropics/skills/pull/514) | 自动检测修复AI生成文档的常见排版问题：孤词换行、页眉滞留页底、多级编号错位 | 覆盖所有文档生成场景的共性痛点，无需用户手动校对排版规范 | OPEN |
| 3 | ODT开放文档处理Skill | [#486](https://github.com/anthropics/skills/pull/486) | 支持ODT/ODS等OpenDocument格式文件的读写、模板填充、格式转HTML | 填补了官方现有Docx/PDF技能之外的LibreOffice开源办公生态支持空白，大量非微软办公流用户需求强烈 | OPEN |
| 4 | Skill质量+安全分析元技能 | [#83](https://github.com/anthropics/skills/pull/83) | 从结构规范、文档完整性、安全风险等5个维度自动扫描自定义Skill的合规性 | 针对性解决社区提报的「第三方Skill冒充官方anthropic命名空间」的信任边界漏洞，大幅降低自定义Skill的引入风险 | OPEN |
| 5 | 全栈测试模式Skill | [#723](https://github.com/anthropics/skills/pull/723) | 覆盖测试哲学、单元测试、React组件测试、E2E测试的全链路测试指导体系 | 是社区首个完整对齐现代开发栈的测试专项Skill，替代之前零散的测试片段指引 | OPEN |
| 6 | 本地图文视频生成Skill | [#335](https://github.com/anthropics/skills/pull/335) | 对接Imagen 3.0、Veo 3.1能力，在Claude Code本地工作流内直接生成图文/短视频，管理生成任务队列 | 打通了代码开发和多媒体生成的工作流，无需跳转第三方工具，大幅提升前端/创意开发效率 | OPEN |
| 7 | ServiceNow全平台Skill | [#568](https://github.com/anthropics/skills/pull/568) | 覆盖ITSM、SecOps、ITAM、流程自动化等全部ServiceNow核心模块的操作指导 | 是面向企业级SaaS的首个重量级垂直Skill，满足大量中大型企业的运维/IT管理场景需求 | OPEN |

---
## 2. 社区需求趋势
从高热度Issue中提炼的核心需求方向优先级如下：
1. **企业级Skill协作需求**：最高热度Issue#228（13条评论）明确提出需要支持组织级共享Skill库，替代当前手动下载上传的低效分发模式，同时解决多插件安装导致重复Skill挤占上下文窗口的问题。
2. **Skill开发工具链稳定性需求**：近40%高热度Issue集中反馈skill-creator官方工具链的缺陷，包括`run_eval.py`触发率为0、Windows平台下子进程管道异常、描述优化循环召回率恒为0等问题，社区自定义Skill的开发量爆发后，工具链稳定性成为最大卡点。
3. **跨生态互通需求**：大量企业用户提出Skill对接AWS Bedrock、SharePoint等内部系统的适配诉求，同时要求把Skill能力标准化为MCP协议，实现跨Agent、跨工具的能力复用。
4. **垂直领域生产级Skill缺口**：企业用户对SAP、n8n低代码搭建、AI Agent治理等垂直场景的专属Skill需求强烈，现有官方技能覆盖远不到位。
5. **Skill打包机制优化需求**：提出多参考文件预加载、Skill可移植性标签自动校验等需求，解决当前Skill拆分多文件后无法完整加载的问题。

---
## 3. 高潜力待合并Skills
以下PR近期更新活跃、对应高优先级社区痛点，大概率在2026年Q2末正式合入官方仓库：
1. [#1140](https://github.com/anthropics/skills/pull/1140) agent-creator技能：更新时间2026-06-02，同时解决3个核心工具链缺陷，适配全平台开发者，优先级最高。
2. [#363](https://github.com/anthropics/skills/pull/363) feature-dev开发工作流Bug修复：更新时间2026-06-03，修复官方核心开发Skill的阶段跳过缺陷，直接影响大量用户的代码开发效率。
3. 三个skill-creator Windows兼容修复PR：[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#539](https://github.com/anthropics/skills/pull/539)，累计修复4个Windows平台下脚本崩溃问题，覆盖占比30%以上的Windows用户群体。
4. [#509](https://github.com/anthropics/skills/pull/509) 新增贡献指南CONTRIBUTING.md：解决当前仓库社区健康度仅25%的问题，是生态标准化的基础配置。
5. [#541](https://github.com/anthropics/skills/pull/541) Docx技能ID冲突修复：解决带书签的现有Word文档添加修订时直接损坏的严重缺陷，覆盖核心文档处理场景。

---
## 4. Skills 生态洞察
**当前Claude Code Skills社区的核心诉求已经从早期零散的自定义技能零散需求，全面转向面向企业级大规模落地的「Skill组织级协作机制、开发工具链全平台稳定性、跨系统互通标准化」三位一体的体系化建设，同时垂直领域生产级Skill的缺口正在被社区快速填补。**

---

# Claude Code 社区动态日报 | 2026-06-08
数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
今日Anthropic官方正式发布v2.1.168补丁版本，全量推送通用可靠性优化与历史问题修复。社区热度最高的Linux原生桌面版需求已累计获得288个点赞、21条有效评论，大量跨平台兼容性问题集中迎来跟进闭环。同时官方侧新的前端设计系统插件正式合并入库，面向长会话管理、MCP能力扩展的高阶自定义需求正在快速增长。

## 2. 版本发布
### v2.1.168（过去24小时发布）
本次版本无新增特性，聚焦全链路Bug修复与整体运行可靠性提升，覆盖此前多个版本暴露的随机崩溃、异常逻辑跳转问题，推荐所有用户升级。

## 3. 社区热点 Issues
共筛选10个高价值、高关注度Issue：
1. **[FEATURE] 官方Linux（Ubuntu LTS / Debian）桌面版构建请求 #65697**  
   重要性：全社区热度断层第一，累计288个点赞，反映大量Linux开发者对原生Claude Desktop体验的强烈诉求，目前已有21条用户反馈补充使用场景。
   链接：https://github.com/anthropics/claude-code/issues/65697
2. **[FEATURE] 新增Claude等待用户输入阶段的生命周期钩子 #13024**  
   重要性：获得67个点赞，是自动化工作流、自定义集成开发者的核心需求，目前缺少节点可监听Agent暂停等待用户输入的状态。
   链接：https://github.com/anthropics/claude-code/issues/13024
3. **[BUG] Windows端分支切换时自动stash默认带--include-untracked参数，误删未提交文件 #66092**  
   重要性：最新上报的高危数据丢失Bug，可随机扫走用户本地100+从未提交的未跟踪资产，目前已有3位用户复现该问题。
   链接：https://github.com/anthropics/claude-code/issues/66092
4. **[BUG] Windows OneDrive同步目录下Edit工具存在删后重命名竞态问题，随机销毁文件 #65229**  
   重要性：标注为数据丢失级别的高危Bug，影响大量使用云同步工作目录的开发者，目前已有2位用户反馈文件永久损坏。
   链接：https://github.com/anthropics/claude-code/issues/65229
5. **[BUG] KVM虚拟机下带AVX-512的CPU触发非法指令崩溃 #53936（已关闭）**  
   重要性：此前v2.1.116~119版本的虚拟化部署兼容性问题现已正式闭环修复，面向云环境部署的Linux开发者无需再规避相关版本。
   链接：https://github.com/anthropics/claude-code/issues/53936
6. **[BUG] API仅返回思考内容无输出文本，token无端消耗但响应完全丢失 #50597（已关闭）**  
   重要性：覆盖全付费用户的计费逻辑Bug现已修复，避免用户被收取无有效返回的token费用。
   链接：https://github.com/anthropics/claude-code/issues/50597
7. **[MODEL] Opus 4.7回归Bug：Agent忽略CLAUDE.md配置指令、跳转到错误工作树生成代码 #57485（已关闭）**  
   重要性：影响模型执行一致性的核心问题现已修复，保障Agent严格遵循项目预设的规则运行。
   链接：https://github.com/anthropics/claude-code/issues/57485
8. **[MODEL] Sonnet 4.6行为反馈汇总 #66136**  
   重要性：社区用户集中反馈新Sonnet版本特性与表现的公共讨论入口，目前持续收集各类场景下的运行表现数据。
   链接：https://github.com/anthropics/claude-code/issues/66136
9. **[FEATURE] 会话管理MCP新增create_session接口 #66126**  
   重要性：面向自动化编排开发者的高阶能力需求，支持程序化创建持久化新会话，大幅扩展MCP生态的自动化边界。
   链接：https://github.com/anthropics/claude-code/issues/66126
10. **[BUG] /effort命令全局写入settings.json，破坏并行多会话隔离性 #57618（已关闭）**  
    重要性：此前的回归Bug会静默提升所有在线并行会话的算力等级、无端消耗用户周配额，目前已完成修复。
    链接：https://github.com/anthropics/claude-code/issues/57618

## 4. 重要 PR 进展
过去24小时共更新2条PR，核心进展如下：
1. **[已合并] feat(plugins): 新增frontend-design-system插件 #39370**  
   功能描述：补全系统性前端设计工作流，生成代码前先输出完整设计规范，包含线框图定义、OKLCH色彩体系规则、全局设计令牌，完全补充原有`frontend-design`插件的能力边界。
   链接：https://github.com/anthropics/claude-code/pull/39370
2. **[开放待合入] PR #58673**  
   当前状态：作者暂未填充完整功能描述，后续持续跟进代码提交进度。
   链接：https://github.com/anthropics/claude-code/pull/58673

## 5. 功能需求趋势
从全量Issue可提炼出当前社区最高优先级的需求方向：
1. **跨平台原生体验补全**：Linux桌面版需求热度断层第一，Windows平台的各类兼容性体验优化需求占比紧随其后，全平台原生支持的用户诉求极强。
2. **扩展能力开放**：新增全生命周期钩子、MCP补全会话管理权限的需求快速增长，面向自动化自定义集成的高阶诉求占比持续提升。
3. **长会话体验优化**：上下文自动压缩规则自定义、跨断点结构化上下文桥接、全历史会话全局搜索都是高频需求，针对多轮长期开发场景的体验优化诉求集中释放。
4. **模型行为可控性**：大量用户反馈Opus 4.7、Sonnet 4.6新版本的Agent执行一致性问题，要求Agent严格遵循项目配置文件规则的需求占比很高。

## 6. 开发者关注点
当前用户反馈的核心痛点集中在4个方向：
1. **文件操作安全性**：Windows平台连续爆出2个高危数据丢失Bug，开发者对Claude Code文件操作的原子性、数据保护性提出极高要求。
2. **配额计费公平性**：多个历史Bug案例显示空结果、云端限流崩溃、子进程标识异常都会无端消耗用户付费配额，用户强烈要求无有效产出场景自动返还配额。
3. **多会话隔离稳定性**：此前/effort命令跨会话污染全局配置的问题，导致大量并行开多会话开发的用户踩坑，开发者对会话级完全隔离的稳定性要求进一步提升。
4. **扩展细节完备性**：MCP工具的strict字段未透传、Skill调用不触发PostToolUse钩子这类边缘漏洞，已经影响到大量高阶自定义工作流的正常运行。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-06-08
数据来源：github.com/openai/codex

---

## 1. 今日速览
过去24小时Codex无正式版本发布，社区讨论核心集中在两类高频问题：一是大量付费用户反馈配额虚耗、速率限制统计异常，二是全球多区域用户集中上报gpt-5.5模型返回404不可用的路由故障。官方提交了一批覆盖Rust依赖安全修复、大Git仓库性能优化、本地数据自动恢复的核心补丁，重点补全跨平台场景的边缘兼容性。

## 2. 版本发布
过去24小时无新增正式Release版本。

## 3. 社区热点 Issues
共筛选10个高关注度核心Issue：
1.  **#14593 Token快速异常消耗**：https://github.com/openai/codex/issues/14593
    累计601条评论、262个点赞，为当前社区热度最高问题，大量Business订阅用户反馈Codex在闲置无操作状态下快速耗尽周度配额，目前官方尚未给出根因说明。
2.  **#26910 GPT-5.5全平台返回404**：https://github.com/openai/codex/issues/26910
    刚关闭的跨区域故障Issue，覆盖Windows/macOS/CLI全场景，大量用户反馈本地模型列表显示gpt-5.5可用，但实际调用直接返回模型不存在报错，涉及巴西、中国等多个非北美区域用户。
3.  **#25715 WSL环境下Codex完全不可用卡顿**：https://github.com/openai/codex/issues/25715
    36条评论、34个点赞，大量Windows开发者反馈将WSL作为Agent运行环境时，Codex操作响应延迟超过10秒，完全无法正常使用。
4.  **#4003 Windows下补丁文件混合行结尾**：https://github.com/openai/codex/issues/4003
    48个点赞，Codex修改Windows本地文件时不会遵循原文件的换行规范，导致自动生成的代码同时出现CRLF、LF两种行结尾，直接破坏项目代码规范触发大量Git变更冲突。
5.  **#12299 剩余10%配额仍提示超限**：https://github.com/openai/codex/issues/12299
    19条评论，大量Plus订阅用户反馈系统显示周度配额还剩10%，但直接被拦截提示"已达到使用上限"，统计逻辑完全混乱。
6.  **#25719 macOS桌面版触发系统进程资源溢出**：https://github.com/openai/codex/issues/25719
    19条评论，Codex for macOS反复调用系统syspolicyd/trustd校验签名，导致系统CPU、内存占用飙升到100%，整台机器卡顿。
7.  **#17265 MCP OAuth令牌不会自动刷新**：https://github.com/openai/codex/issues/17265
    20个点赞，Codex本地已经持久化了MCP服务的refresh_token，但访问令牌过期后不会自动刷新，直接导致所有自定义MCP插件全部失效，严重影响插件开发者体验。
8.  **#25501 Windows 26.527.3686.0版本启动即崩溃**：https://github.com/openai/codex/issues/25501
    9条评论，微软商店刚推送的新版Windows桌面端，安装完成后双击直接闪退，大量普通用户完全无法启动程序。
9.  **#7808 上下文窗口满直接摧毁整个聊天线程**：https://github.com/openai/codex/issues/7808
    8个点赞，长代码重构任务跑满上下文窗口后，整个会话线程直接崩溃无法恢复，所有历史进度全部丢失。
10. **#26867 账号迁移后GitHub PR评审功能失效**：https://github.com/openai/codex/issues/26867
    企业用户反馈从Business工作区迁移到个人Pro账号后，Codex GitHub PR评审功能仍然调用已停用的旧工作区，直接无法正常使用。

## 4. 重要 PR 进展
筛选10个对开发者影响较大的核心提交：
1.  **#26917 支持Git源插件的市场元数据**：https://github.com/openai/codex/pull/26917
    解决Git托管的插件在安装前无法展示名称、描述、关键词的问题，大幅提升插件市场的浏览体验。
2.  **#25976 Responses API调用使用稳定条目ID**：https://github.com/openai/codex/pull/25976
    客户端和服务端往返的消息条目使用固定不变的ID，彻底解决历史消息同步重复、错位的bug。
3.  **#26662 app-server新增按父线程过滤子线程能力**：https://github.com/openai/codex/pull/26662
    支持多代理协作场景下直接查询某个线程的所有子会话，无需全量扫描所有会话数据，大幅提升多代理项目加载速度。
4.  **#26918 修复新披露的Rust安全漏洞**：https://github.com/openai/codex/pull/26918
    升级rand依赖版本到0.8.6，修复Cargo审计新爆出的高危漏洞，对age依赖的安全告警添加合规豁免说明。
5.  **#26859 新增SQLite损坏自动恢复能力**：https://github.com/openai/codex/pull/26859
    检测到本地会话数据库损坏后自动执行修复流程，避免直接清空用户所有历史聊天数据，大幅降低本地数据丢失概率。
6.  **#26880 保留Git工作树的fsmonitor配置**：https://github.com/openai/codex/pull/26880
    不再强制关闭Git的文件监控功能，大仓库下的Git状态查询速度提升10倍以上，解决百万级代码库Codex扫描慢的问题。
7.  **#26831 新增全局指令贡献者API**：https://github.com/openai/codex/pull/26831
    对外暴露扩展点，支持第三方IDE、宿主程序自行注入全局规则，无需修改Codex核心配置。
8.  **#26840 新增跨平台路径URI类型**：https://github.com/openai/codex/pull/26840
    统一Windows/WSL/macOS/远程服务器的路径标识规则，彻底解决跨环境路径解析混乱的底层问题。
9.  **#24982 统一执行路径下继承父会话的执行审批结果**：https://github.com/openai/codex/pull/24982
    用户已经审批过的权限，子进程调用相同命令时不需要重复弹窗确认，大幅提升长任务流畅度。
10. **#26852 修复app-server连接清理阻塞问题**：https://github.com/openai/codex/pull/26852
    解决远程会话重连时旧连接未及时释放导致的队列拥堵问题，远程重连间隔从5-7秒恢复到毫秒级。

## 5. 功能需求趋势
从近期Issue分布提炼社区最关注的5个方向：
1.  **配额管理体系优化**：相关Issue占比最高，用户普遍诉求透明化的配额消耗明细、更准确的剩余额度统计，杜绝虚扣问题。
2.  **Windows/WSL混合场景适配**：近期新提交Issue中40%以上都和Windows+WSL开发环境的兼容性相关，该场景已经成为Codex当前最大的bug重灾区。
3.  **MCP插件生态完善**：插件持久化、跨端同步、令牌自动刷新的需求集中爆发，开发者对MCP生态的生产可用度诉求大幅提升。
4.  **大仓库长任务支持**：大Git仓库性能优化、上下文溢出软着陆不销毁会话的需求排在前列，大量用户开始用Codex处理全量级代码重构任务。
5.  **区域化模型路由**：非北美区域用户反馈模型访问不稳定、部分模型不可用的问题持续增加，要求官方新增就近节点路由、模型可用性实时状态提示功能。

## 6. 开发者关注点
近期开发者反馈的核心痛点集中在三点：
1.  付费订阅用户对配额完全不可控的问题投诉量激增，大量用户反馈闲置状态下配额仍被动消耗，付费价值感严重下降。
2.  Windows全栈开发者占Codex用户比例超过50%，但当前Codex对WSL混合开发场景的路径解析、进程调用、权限校验适配极不完善，大量基础功能无法正常使用。
3.  本地桌面版的SQLite存储可靠性不足，会话丢失、聊天记录隐藏在本地但UI不显示的问题频发，用户对本地数据可靠性的焦虑持续上升。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-08
仓库地址：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
今日Gemini CLI无正式版本发布，核心维护团队集中迭代子Agent可靠性、Auto Memory会话记忆系统、MCP协议兼容性三类核心能力，累计更新30项高优先级Issue状态，提交14项代码合并请求。本次更新重点覆盖用户反馈集中的Agent挂机、命令执行卡顿、隐私数据泄露风险等高频问题，同时推进后台任务执行、跨目录会话恢复等长期期待特性的落地。

## 2. 版本发布
今日无新正式版本发布。

## 3. 社区热点 Issues（10项核心）
按优先级和用户反馈热度排序：
1. **通用子Agent无限挂机bug** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
   重要性：用户点赞数最高（8赞）的P1级故障，大量用户反馈触发通用子Agent回调后会无限挂起，最长等待1小时无响应，手动指令禁止调用子Agent即可恢复，目前已进入待重测队列。
2. **组件级评估体系建设EPIC** [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)
   重要性：P1级质量保障基础设施项目，官方目前已累计产出76个行为测试用例，覆盖6款受支持的Gemini模型，后续将作为所有版本的自动化回归校验基础。
3. **AST感知代码读取方案调研EPIC** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
   重要性：面向代码场景的核心效率优化方向，探索用AST语法树能力替代传统全文本读取，精准定位方法边界，减少无效交互轮次、降低冗余token噪音，预计可大幅提升大代码库调研的Agent效率。
4. **子Agent达最大轮次后误报成功bug** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
   重要性：P1级体验故障，代码调研子Agent触达MAX_TURNS轮次上限后，错误将终止原因上报为「目标完成」，完全掩盖执行中断问题，严重误导用户判断执行结果。
5. **Auto Memory前置脱敏安全改造** [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
   重要性：P2级安全类Issue，当前Auto Memory机制会先将本地对话转录传入模型再做敏感信息脱敏，存在密钥、隐私配置泄露隐患，本次更新明确要求改为前置确定性脱敏逻辑，从流程上切断泄露路径。
6. **Shell命令执行完成后卡「等待输入」bug** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
   重要性：P1级高频故障，用户反馈简单无交互的shell命令执行完成后，界面仍卡死在等待用户输入状态，严重影响日常使用效率，已进入待重测队列。
7. **Wayland环境下浏览器子Agent失效** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
   重要性：P1级兼容故障，Linux Wayland桌面环境下浏览器Agent完全无法启动，严重影响Linux用户的网页自动化操作体验。
8. **v0.33.0版本子Agent静默运行漏洞** [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
   重要性：用户反馈升级v0.33版本后，就算配置里明确禁用所有Agent，子Agent依然会自动启动执行任务，存在非预期修改本地文件的风险，目前已标记为待重测。
9. **Agent高危操作拦截机制** [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
   重要性：用户点赞的实用特性，要求CLI主动拦截/二次提示`git --force`、数据库高危修改等破坏性操作，避免用户本地代码库、数据被意外损坏。
10. **本地Agent后台运行特性需求** [Issue #22741](https://github.com/google-gemini/gemini-cli/issues/22741)
    重要性：2个用户点赞的高频需求，提出给本地子Agent增加`Ctrl+B`发送后台能力，支持用户在子Agent执行长时间代码扫描、构建任务时不阻塞当前交互界面。

## 4. 重要 PR 进展（10项核心）
按优先级和影响范围排序：
1. **修复MCP图片MIME类型识别错误** [PR #27733](https://github.com/google-gemini/gemini-cli/pull/27733)
   状态：已合并，新增对图片二进制魔数的嗅探能力，修正WebP/PNG/JPEG/GIF的MIME类型上报错误问题，补充了MCP图片块相关的回归测试。
2. **新增自动化Changelog生成操作指南** [PR #27735](https://github.com/google-gemini/gemini-cli/pull/27735)
   状态：开放待评审，新增自动化发布说明系统的维护排障文档，降低维护者发版操作门槛。
3. **截断遥测属性到1024字符避免GCP导出报错** [PR #27729](https://github.com/google-gemini/gemini-cli/pull/27729)
   状态：开放待评审，解决遥测指标属性过长触发Google Cloud Monitoring限制，导致CLI打印大量Node.js栈追踪日志的问题。
4. **数组类型工具结果格式兼容修复** [PR #27730](https://github.com/google-gemini/gemini-cli/pull/27730)
   状态：开放待评审，P1级修复，避免MCP合规传输层将JSON数组写入structuredContent导致的格式错误问题，完整保留原始工具返回的文本内容。
5. **A2A服务器新增后台分离任务执行模式** [PR #15674](https://github.com/google-gemini/gemini-cli/pull/15674)
   状态：已合并，给Agent服务增加`isBackground`标记、后台工作进程生成、活跃Worker列表查询能力，是后续远程Agent长时任务能力的核心基础设施。
6. **无预览权限用户可见auto模型别名** [PR #27718](https://github.com/google-gemini/gemini-cli/pull/27718)
   状态：开放待评审，修复动态模型配置开启时，没有预览权限的用户看不到顶层`auto`模型别名的体验问题。
7. **修复大段输入触发@指令解析栈溢出** [PR #27580](https://github.com/google-gemini/gemini-cli/pull/27580)
   状态：开放待评审，P1级稳定性修复，替换原有的正则@指令解析逻辑为迭代扫描器，彻底解决粘贴大段内容时触发正则灾难性回溯导致进程崩溃的问题。
8. **findCommand命令注入安全修复** [PR #27575](https://github.com/google-gemini/gemini-cli/pull/27575)
   状态：开放待评审，安全加固项，将原有调用shell的`execSync`替换为无shell解析的安全`spawnSync`，避免命令字符串中的特殊字符触发注入漏洞。
9. **支持跨全局文件夹会话恢复** [PR #23490](https://github.com/google-gemini/gemini-cli/pull/23490)
   状态：已合并，实现`gemini --resume <session-id>`跨不同项目目录恢复历史会话的能力，大幅提升多项目切换场景的使用体验。
10. **Node 20兼容性与Windows软链接测试修复** [PR #27385](https://github.com/google-gemini/gemini-cli/pull/27385)
    状态：已合并，解决Node 20.x环境下运行时崩溃问题，修复Windows平台下的软链接相关测试用例失败问题，提升跨平台兼容性。

## 5. 功能需求趋势
从近期更新的Issue可提炼出四大核心迭代方向：
1. **Agent效率增强**：集中落地AST感知的代码库探索、子Agent调度逻辑优化、危险操作前置拦截，目标是降低Agent无效交互轮次，提升代码场景处理效率。
2. **内存系统迭代**：Auto Memory模块正在集中修复无限重试、无效补丁静默丢失、敏感数据泄露三类问题，重点提升会话记忆的可靠性和安全性。
3. **后台能力建设**：陆续落地A2A服务后台任务执行、本地子Agent后台挂起、跨目录会话恢复特性，支持长时间运行的非阻塞Agent任务。
4. **MCP生态兼容**：集中补齐MCP图片处理、MCP传输层格式兼容、ACP协议版本适配能力，完善第三方生态扩展的兼容性。

## 6. 开发者关注点
当前用户反馈集中的核心痛点：
1. 稳定性是最高优先级诉求：大量用户反馈Agent无响应、子Agent执行状态误报、命令执行假卡死三类运行故障，是当前影响日常使用体验的最大问题。
2. 安全隐私诉求强烈：开发者普遍关注Auto Memory机制的本地数据泄露风险、命令注入漏洞，对本地工具运行的权限可控性要求明显提升。
3. 多环境兼容性需求明确：Linux Wayland环境失效、Node 20兼容、Windows平台适配都是高频反馈的适配需求，希望CLI能覆盖更多开发桌面场景。
4. 操作效率优化期待高：用户普遍要求支持自定义技能自动调用、长时间任务后台运行、终端无闪烁缩放，减少不必要的等待和手动干预操作。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-08
---
## 1. 今日速览
过去24小时Copilot CLI仓库无正式版本发布，共10条存量Issue更新、3条全新Issue提交，2项历史问题完成闭环修复。当前社区最高票的自定义输入钩子、剪贴板图片粘贴需求持续获得开发者关注，企业环境兼容性、跨平台适配类相关问题的反馈量近期呈现显著上升趋势。
## 2. 版本发布
过去24小时无官方正式Release推送，本部分暂略。
## 3. 社区热点 Issues
本次10条更新Issue均具备较高参考价值，详情如下：
1. **#1276 支持系统剪贴板粘贴图片到Copilot CLI提示符**：面向截图代码、UI Bug、日志的图文混合提交流程，无需用户手动导出图片到本地指定路径即可完成输入，目前获得8个点赞、11条讨论，大量运维、开发人员表示该特性将大幅降低多模态交互门槛。
   链接：https://github.com/github/copilot-cli/issues/1276
2. **#333 带SSL检查的企业环境下Copilot CLI报"fetch failed"错误**：覆盖大量部署了中间人SSL代理的企业用户，即便安装了根证书仍无法正常连接服务，目前已有5条企业开发者反馈评论，是当下企业落地场景的最高优先级阻塞问题。
   链接：https://github.com/github/copilot-cli/issues/333
3. **#2828 周速率限制特性优化**：该Issue目前已关闭，官方完成了特性落地，在用户触发周调用上限时不再仅显示重置时间，同步提供额度查询、提额申请等引导建议，大幅降低用户遭遇限流后的困惑度。
   链接：https://github.com/github/copilot-cli/issues/2828
4. **#1128 新增awaitingUserInput钩子类型**：是当前全仓库点赞数最高的开放需求（27赞），开发者需要该钩子实现终端主题定制、自动化脚本对接、状态提示等场景，补全了现有`userPromptSubmitted`钩子的能力空白。
   链接：https://github.com/github/copilot-cli/issues/1128
5. **#3216 长会话下Agent进入无限目录遍历+内存压缩循环**：用户反馈136轮对话的长会话接近上下文上限时，即便没有开启Autopilot模式也会自动运行一整晚消耗调用额度，开发者提出希望支持误消耗额度退款、增加长会话自动退出保护机制。
   链接：https://github.com/github/copilot-cli/issues/3216
6. **#2294 Linux发行版打包许可澄清**：Arch Linux官方打包团队提出希望将Copilot CLI纳入官方软件源，目前正在确认开源协议中关于二次分发的条款细节，后续落地后将大幅降低Linux用户的安装门槛。
   链接：https://github.com/github/copilot-cli/issues/2294
7. **#3709 单会话内支持/model命令切换多模型（含BYOK/本地私有模型）**：新提交的待分类需求，当前BYOK模式下会话固定绑定单个模型，/model选择器仅显示GitHub托管的公开模型，无法选择本地部署的私有模型，无法满足开发者在不同场景下切换小模型/大模型的需求。
   链接：https://github.com/github/copilot-cli/issues/3709
8. **#3711 Windows平台更新后版本号未同步写入注册表**：新提交的Bug反馈，用户通过内置`/update`命令升级到v1.0.60后，系统注册表内的版本字段没有同步更新，会导致后续版本检测、软件管家类工具识别版本出错。
   链接：https://github.com/github/copilot-cli/issues/3711
9. **#3710 官方安装脚本误识别FreeBSD系统为Windows**：新提交的Bug反馈，用户在FreeBSD系统下运行官方一键安装脚本时，系统判断逻辑错误，直接提示未找到winget无法安装，阻断了FreeBSD平台用户的安装流程。
   链接：https://github.com/github/copilot-cli/issues/3710
10. **#3396 GitHub Actions环境下GITHUB_TOKEN触发误导性错误**：该Issue目前已关闭，官方完成修复，之前CI环境中自动注入的GITHUB_ACTION安装令牌会被CLI误读取，返回400服务端认证错误，现在会自动识别非有效Copilot令牌并给出明确的报错指引。
    链接：https://github.com/github/copilot-cli/issues/3396
## 4. 重要 PR 进展
过去24小时仓库仅新增1条待评审开放PR，未达到10条的统计量级，具体信息如下：
- **#3708 新增文件上传提交**：作者为外部贡献者panchofrancisco1987-ui，目前PR描述为空，暂未明确提交的功能/修复内容，处于初筛阶段等待维护者进一步评估。
  链接：https://github.com/github/copilot-cli/pull/3708
## 5. 功能需求趋势
从当日更新的Issue中，可提炼出社区核心需求集中在五大方向：
1. **多模态输入增强**：围绕图片、剪贴板等便捷多媒体输入的需求持续增长，开发者希望摆脱传统文件路径式的图片上传限制；
2. **开放可扩展能力**：自定义钩子、对外暴露状态事件的需求呼声最高，方便第三方开发者基于Copilot CLI能力做二次集成、终端定制；
3. **多模型灵活调度**：支持单会话切换不同模型、兼容本地私有BYOK模型的需求逐步攀升，适配不同推理成本、不同精度的任务场景；
4. **企业级场景适配**：SSL代理兼容、非交互式认证优化是企业用户最关注的方向，解决内部网络环境下的部署阻塞问题；
5. **全平台覆盖优化**：围绕Linux发行版打包许可、FreeBSD等小众系统兼容、Windows平台安装体验细节的需求不断补充，进一步覆盖全终端开发者群体。
## 6. 开发者关注点
当日反馈集中的痛点与高频诉求包括：
1. 长会话稳定性不足：上下文接近上限时容易触发Agent死循环，无防护机制导致无意义消耗调用额度，用户普遍要求增加自动停机关联机制与误消耗退款通道；
2. 跨平台细节适配缺失：小众操作系统识别错误、主流平台版本同步逻辑Bug，大量Linux/BSD用户的安装流程被阻断；
3. 错误提示友好度差：之前限流、令牌无效等场景下仅返回底层错误码，没有对应的解决指引，开发者排查问题成本极高；
4. 许可分发规则不清晰：Linux发行版官方团队二次打包的合规性不确定，阻碍了Copilot CLI在开源社区的大范围分发。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# 2026-06-08 Kimi Code CLI 社区动态日报
数据来源：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
今日Kimi Code CLI无正式版本发布，过去24小时共更新7条Issue、3条PR，整体处于v0.11新版本上线后的用户反馈集中爆发期。内容核心围绕新旧客户端迁移的各类兼容性痛点、用户对产品迭代路线的公开讨论展开，核心维护者同步推进底层运行时的稳定性补丁落地，多设备协同、编码体验增强类正向功能需求也同步涌现。

## 2. 版本发布
过去24小时无正式版本发布。

## 3. 社区热点 Issues
受过去24小时更新的Issue总量限制，全部高价值动态纳入如下：
1. **#2381 旧版kimi-cli重构路线争议**：用户反馈原有稳定的kimi-cli被直接迭代拆分、功能改动幅度过大，质疑产品长期迭代的确定性和社区分裂风险，目前已有4条用户评论参与讨论，直接关系到大量存量生产力用户的留存预期。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2381
2. **#2437 迁移全链路问题反馈**：Fedora平台用户从旧版kimi-cli v1.47迁移到新版Kimi Code v0.11时，遇到会话状态迁移逻辑模糊、配额归属混乱、Agent生成质量回落三类核心问题，是官方迁移指引需要优先闭环的最高优先级痛点。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2437
3. **#2269 多设备会话接力功能需求**：用户提出支持跨设备无缝接续Kimi CLI会话、远程控制运行中任务的特性，目前已有5条评论讨论落地可行性，属于能大幅提升多环境办公用户生产力的高价值增量功能。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2269
4. **#2440 聊天面板符号跳转增强需求**：当前仅支持点击文件路径打开对应文件，无法直接点击函数/方法名跳转到代码定义行，大幅提升代码场景下的排查效率，属于编码用户的高频体验优化点。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2440
5. **#2439 本地Ollama模型项目评审Bug**：v0.11版本用户对接本地私有Ollama模型时，执行项目评审任务直接抛出`compaction.unable`错误，完全阻断离线部署用户的核心使用流程。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2439
6. **#2438 Agent会话状态阻塞Bug**：v1.47旧版用户使用kimi-for-coding模型时，Agent会话状态显示为未知，无法进入任务总览视图，直接打断自动编码任务的浏览链路。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2438
7. **#2436 新版安装流程失败Bug**：新用户首次部署时出现安装异常、提示「Kimi无法做出决定」，直接阻断新用户首次使用路径，属于极高优先级的体验阻塞问题。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2436

## 4. 重要 PR 进展
受过去24小时更新的PR总量限制，全部核心补丁纳入如下：
1. **#774 pyproject.toml配置类型错误修复**：修复原配置中`module-name`字段错误传入数组类型、执行`make prepare`时TOML解析失败的问题，修复后开发者可正常完成本地开发环境初始化。
   链接：https://github.com/MoonshotAI/kimi-cli/pull/774
2. **#1769 MCP服务连接失败优雅降级**：新增MCPRuntimeError异常捕获逻辑，解决之前MCP服务启动失败（如TUI和Web UI端口冲突）时异常未捕获、直接卡死前端Worker的问题，大幅提升运行时稳定性。
   链接：https://github.com/MoonshotAI/kimi-cli/pull/1769
3. **#2183 Shell侧拖入图片路径优化**：用户提交带本地图片路径的Prompt时，提前扫描并读取本地图片资源、直接封装为ImageURLPart传递，解决后续媒体读取逻辑失效的问题，提升多模态输入场景的成功率，关联闭环历史Issue #2182。
   链接：https://github.com/MoonshotAI/kimi-cli/pull/2183

## 5. 功能需求趋势
从近期Issue提炼出社区最高关注的3类功能方向：
1. **跨端协同方向**：多设备会话接力、远程控制跨端任务的需求呼声最高，覆盖桌面、Web、移动端全场景协同办公需求；
2. **编码体验增强方向**：类IDE的代码符号跳转、上下文联动浏览能力需求持续上涨，用户对CLI工具的编码场景流畅度要求向传统IDE对齐；
3. **本地化部署方向**：对接本地私有Ollama大模型的适配需求持续增长，离线完全可控的使用场景用户规模正在快速扩大。

## 6. 开发者关注点
当前社区反馈的核心痛点集中在三类：
1. 新旧版本迁移体验断层，大量存量用户遇到状态不同步、配额归属混乱问题，部分用户对产品长期迭代的稳定性产生质疑，需要官方公开迭代路线明确预期；
2. 边缘场景稳定性不足，Agent会话卡死、MCP服务崩溃、安装流程异常等边界Case频发，当前版本稳定性打磨的优先级远高于新功能迭代；
3. 底层构建链路细节问题，比如配置文件类型错误这类小问题，会直接提升二次开发者的贡献门槛，需要优先修复降低参与成本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
日期：2026-06-08 | 数据源：github.com/anomalyco/opencode

---

## 1. 今日速览
过去24小时OpenCode无正式版本发布，社区核心讨论集中在Agent沙箱安全隔离、云厂商模型接入兼容性、Claude Code同款动态自动化工作流三大方向，官方合并了十余项跨平台体验优化与回归Bug修复，同时支付链路歧义引发的批量退款诉求也成为当日社区讨论的重点之一。

## 2. 版本发布
过去24小时无新版本正式发布。

## 3. 社区热点 Issues（Top10）
1. **#2242 Agent沙箱隔离能力诉求**：62条评论、51个点赞，是当日热度最高的开源诉求。用户希望参考gemini-cli的macOS Seatbelt能力，新增跨平台的Agent运行沙箱，限制终端命令仅可访问当前工作目录，避免Agent误修改系统文件，大量安全导向的开发者投票支持该特性。<https://github.com/anomalyco/opencode/issues/2242>
2. **#15585 免费模型触发超限报错**：47条评论，所有内置免费模型均出现「免费使用额度超出」的异常提示，大量免费用户反馈连续使用6小时左右就会被强制中断，社区正在等待官方给出免费额度的明确定义规则。<https://github.com/anomalyco/opencode/issues/15585>
3. **#10221 全新安装后启动黑屏**：29条评论、16个点赞，覆盖多个版本的桌面端用户，新用户安装后启动直接黑屏无日志输出，是阻碍新用户上手的核心Bug。<https://github.com/anomalyco/opencode/issues/10221>
4. **#14334 Web端黑屏跨平台复现**：21条评论、28个点赞，升级到1.2.7版本后Mac/Windows双平台的Web端全部卡在黑屏界面，大量升级用户受到影响。<https://github.com/anomalyco/opencode/issues/14334>
5. **#29059 新增动态工作流功能**：10条评论、12个点赞，对标Claude Code最新的动态工作流特性，用户要求支持项目本地定义可复用的多步自动化流程，降低重复任务的操作成本。<https://github.com/anomalyco/opencode/issues/29059>
6. **#13999 Azure OpenAI接口缺失api-version参数**：9条评论，企业用户反馈调用Azure侧的gpt-5.x-codex模型时，Responses API请求缺少必填的api-version参数，完全无法正常调用。<https://github.com/anomalyco/opencode/issues/13999>
7. **#31147 v1.16版本AWS Bedrock SSO登录回归Bug**：6条评论，新版本下使用AWS SSO登录Bedrock时直接抛出「E不是函数」的凭证错误，是新版本明确的兼容性回归问题。<https://github.com/anomalyco/opencode/issues/31147>
8. **#31239 缺失Azure Foundry OpenAI连接指引**：11条评论，新创建的企业级求助Issue，大量用户尝试多种配置组合都无法成功对接Azure Foundry部署的GPT-5.4模型，希望官方提供 step by step 的接入文档。<https://github.com/anomalyco/opencode/issues/31239>
9. **#27436 权限弹窗交互卡死**：15条评论，用户点击权限弹窗的「允许一次/始终允许/拒绝」三个按钮都无法正常提交，直接导致当前会话完全卡住，是高频影响使用体验的交互Bug。<https://github.com/anomalyco/opencode/issues/27436>
10. **#18134 桌面端关闭按钮最小化到系统托盘**：6条评论，Windows用户高频诉求，当前点击关闭按钮直接退出整个程序，不符合主流桌面应用的操作习惯，大量用户呼吁改成最小化到后台托盘运行。<https://github.com/anomalyco/opencode/issues/18134>

## 4. 重要 PR 进展（Top10）
1. **#31208 实验性新版Web文件选择器**：基于@pierre/tree组件重构文件/目录选择逻辑，支持懒加载文件系统导航、路径自动补全，大幅提升大目录场景下的浏览速度。<https://github.com/anomalyco/opencode/pull/31208>
2. **#26239 新增/menu斜线命令**：打开和Ctrl+P完全一致的TUI命令菜单，降低新用户的操作记忆成本，已经合并到正式分支。<https://github.com/anomalyco/opencode/pull/26239>
3. **#26236 修复Google Drive MCP未授权逻辑**：强制未登录状态下走完整OAuth流程，解决Google Drive云盘接入时绕过授权直接报错的问题。<https://github.com/anomalyco/opencode/pull/26236>
4. **#26235 修复会话双重上下文压缩Bug**：避免Opus 4.7系列模型使用时连续触发两次上下文压缩，降低不必要的性能损耗与上下文丢失概率。<https://github.com/anomalyco/opencode/pull/26235>
5. **#26234 新增TUI端Neovim上下文轮询**：通过NVIM RPC能力自动探测本地运行的Neovim实例，同步当前打开的文件状态，打通TUI和本地编辑器的状态联动。<https://github.com/anomalyco/opencode/pull/26234>
6. **#26193 新增Fish/Zsh Shell自动补全**：补齐主流终端的命令自动补全能力，覆盖绝大多数开发者的终端使用场景。<https://github.com/anomalyco/opencode/pull/26193>
7. **#26161 新增MCP协议进度与取消能力**：支持长耗时MCP任务的中途终止、运行进度实时上报，解决大文件处理场景无法中断的问题。<https://github.com/anomalyco/opencode/pull/26161>
8. **#26147 修复Windows子进程退出挂起问题**：适配Windows下构建工具的守护进程场景，解决Opencode被占用资源卡住无法退出的Bug。<https://github.com/anomalyco/opencode/pull/26147>
9. **#26127 优化Windows子进程分离逻辑**：避免用户执行全局`taskkill /F /IM node.exe`时误杀正在运行的Opencode实例。<https://github.com/anomalyco/opencode/pull/26127>
10. **#26150 修复升级过程取消逻辑**：用户在升级时按Ctrl+C可以正常终止流程，同时优化升级过程的加载动效提示。<https://github.com/anomalyco/opencode/pull/26150>

## 5. 功能需求趋势
从当日更新的Issue中可以提炼出三个核心需求上升方向：
1. **Agent安全能力**：沙箱隔离、细粒度权限管控类诉求增速最快，开发者对Agent随意操作本地文件的安全隐患关注度持续提升。
2. **企业级云模型适配**：Azure OpenAI、AWS Bedrock、自定义OpenAI兼容后端的接入适配需求暴涨，团队部署、企业私有化部署的占比快速提升。
3. **自动化工作流**：连续出现两条高赞的动态工作流特性请求，开发者希望把已验证的多步任务固化成可复用的本地流程，大幅提升重复开发场景的效率。

## 6. 开发者关注点
当日社区集中反馈的核心痛点包括：
1. 最近版本迭代速度过快，v1.16系列版本引入多个回归Bug，包括MCP切换失效、AWS SSO登录异常等，不少用户反馈升级后直接无法正常使用。
2. 付费支付链路存在引导歧义，大量用户误点订阅了非预期的ZEN相关服务，10天以上收不到退款回复，引发大量用户投诉。
3. 大模型厂商接口兼容性问题频发，Claude、Azure等厂商近期调整接口参数校验规则，导致部分场景下直接返回400错误，用户希望官方能推出更快的热补丁适配机制。
4. 特定工程场景适配不足，Java多模块项目下JDTLS重复启动进程、Windows下写入bat文件自动替换换行符失效等细分场景的Bug反馈量持续上升。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-06-08）
数据来源：github.com/badlogic/pi-mono

---

## 1. 今日速览
过去24小时Pi社区无正式版本发布，共闭环30条历史/新提交的高频问题，合并4项核心Pull Request。本次动态覆盖Claude Opus 4.8适配、本地模型性能优化、第三方生态扩展多个核心方向，大量开发者反馈已久的交互、兼容性遗留问题全部得到修复，同时新增了主流AI网关、文档解析的原生能力支持。

## 2. 版本发布
过去24小时无新正式版本发布。

## 3. 社区热点 Issues（精选10条）
所有已关闭Issue均已合并对应修复代码到主分支：
1. **[#5223 Claude Opus 4.8自适应思考模式多轮对话400报错](https://github.com/earendil-works/pi/issues/5223)**：共15条评论、6个点赞，是社区近期热度最高的大模型适配bug，此前使用Opus高推理模式的用户全部会在多轮会话中途崩溃，现已完全闭环修复。
2. **[#3834 Fireworks提供商调用失败bug](https://github.com/earendil-works/pi/issues/3834)**：共9条评论，困扰Fireworks用户近2个月的请求校验失败问题现已修复，Windows全平台环境下的调用链路全部验证通过。
3. **[#5188 Shift+Enter快捷键无法换行问题](https://github.com/earendil-works/pi/issues/5188)**：共8条评论，是TUI交互场景的最高频痛点，用户自定义快捷键配置后Shift+Enter会直接提交消息而非换行，现已适配所有自定义键位逻辑。
4. **[#3931 OpenRouter缺失最新模型支持](https://github.com/earendil-works/pi/issues/3931)**：共5条评论，此前用户无法直接调用GPT-5.5等OpenRouter刚上新的模型，必须手动声明自定义模型ID，现已同步更新全量模型列表。
5. **[#5464 本地模型启动后3-5分钟异常延迟bug](https://github.com/earendil-works/pi/issues/5464)**：刚提交即得到核心维护者响应，大量使用Ollama部署本地模型的用户反馈即使发送简单"Hi"也会遇到数分钟无响应的问题，已进入迭代修复队列。
6. **[#5468 MiniMax-M3长会话工具ID校验失败bug](https://github.com/earendil-works/pi/issues/5468)**：国内大模型用户反馈的高优先级稳定性问题，200+次工具调用的长会话场景下会出现服务端从未见过的工具ID报错，目前仅能通过切换模型或手动压缩会话恢复，待修复。
7. **[#5469 MCP工具结果默认折叠需求](https://github.com/earendil-works/pi/issues/5469)**：重度使用搜索、网页获取等MCP工具的用户反馈大量工具输出刷屏，严重影响阅读效率，需求支持通过配置开关默认折叠大段工具返回内容。
8. **[#5431 DeepSeek密钥保存后重启丢失bug](https://github.com/earendil-works/pi/issues/5431)**：国内DeepSeek用户集中反馈的高频问题，密钥写入配置文件后重启依然提示未找到密钥，现已修复配置解析逻辑。
9. **[#5473 新增Requesty原生提供商需求](https://github.com/earendil-works/pi/issues/5473)**：社区呼吁将6万+用户的主流AI网关Requesty加入原生支持列表，无需用户手动配置通用OpenAI兼容端点即可开箱使用。
10. **[#5463 自动会话压缩后触发报错bug](https://github.com/earendil-works/pi/issues/5463)**：核心编码会话流程的边缘稳定性问题，自动触发会话压缩后会无差别调用agent.continue()，直接抛出「不能从assistant角色消息继续」的崩溃，已关联对应修复PR。

## 4. 重要 PR 进展
过去24小时共合并4项全量核心变更：
1. **[#5472 新增Requesty原生提供商支持](https://github.com/earendil-works/pi/pull/5472)**：已将Requesty网关完整集成到`packages/ai`核心包，所有`requesty/`前缀的模型现在可以开箱即用，无需额外兼容配置。
2. **[#5471 修复自动压缩后无待处理消息触发continue的bug](https://github.com/earendil-works/pi/pull/5471)**：完全修复#5463问题，自动会话压缩完成后如果没有排队的 steer/后续消息，不会再错误触发执行后续流程抛出崩溃。
3. **[#5467 优化models.json配置迁移报错提示](https://github.com/earendil-works/pi/pull/5467)**：此前配置文件解析报错只会提示语法错误，现在会直接返回异常配置文件的绝对路径，大幅降低用户排查配置问题的成本，同时新增对应回归测试用例。
4. **[#5465 新增Mineru文档解析官方技能](https://github.com/earendil-works/pi/pull/5465)**：按照官方Agent Skills标准新增完整的Mineru解析能力，支持URL和本地上传文档，自动轮询解析返回结构化内容，无需用户自行封装调用逻辑。

## 5. 功能需求趋势
从更新Issue中可以提炼出社区当前最关注的三个核心方向：
1. **第三方生态快速扩展**：主流AI网关、国内头部大模型的原生接入需求占比超过30%，开发者不再愿意手动配置通用兼容端点，要求官方直接适配主流服务。
2. **TUI体验精细化定制**：快捷键自定义、大段内容折叠、多模式输入导航相关需求集中爆发，重度终端用户对交互效率的要求持续提升。
3. **开放API能力持续放开**：大量扩展开发者呼吁官方开放更多内部未导出的RPC类型、会话上下文工具，降低自定义扩展的开发门槛。

## 6. 开发者关注点
近期社区反馈的核心痛点集中在三点：
1. **跨运行时兼容性待完善**：此前完全兼容Bun运行时的需求刚通过大重构修复，大量不依赖Node的开发者反馈此前扩展安装逻辑硬编码调用npm，完全无法在纯Bun环境下运行。
2. **长会话稳定性问题突出**：200K+ Token的超长编码会话场景下，工具ID校验、自动会话压缩的边缘错误频发，是重度编码用户投诉最多的稳定性问题。
3. **硬编码逻辑不符合自定义场景**：成本显示硬编码美元符号、剪贴板图片默认存系统临时目录这类不灵活的实现收到大量反馈，用户要求开放更多配置项适配本地化、非美元计价的第三方服务。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-08
> 数据来源：https://github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日Qwen Code核心迭代围绕v0.17版本发布节奏、Daemon服务端ACP生态兼容两大主线推进，过去24小时共上线1个Nightly版本、合并2项核心变更，同时有30条活跃PR、6条更新Issue集中在IDE生态适配、长会话稳定性等高频落地方向。社区对离线局域网部署、自定义多模型调度的需求热度持续走高，多个高优先级体验修复已进入最终评审队列。

## 2. 版本发布
今日发布最新夜间构建版本 **v0.17.1-nightly.20260607.cef26a86a**，核心更新点：
1. 正式将版本基线推进至v0.17.1，由CI自动合并发版变更 [#4742](https://github.com/QwenLM/qwen-code/pull/4742)
2. 修复CLI交互模式下复制输出内容时，会连带输出模型内部思考过程冗余内容的问题 [#对应变更](https://github.com/QwenLM/qwen-code/pulls?q=is%3Apr+fix%28cli%29%3A+skip+thought+parts+in+copy+output)

## 3. 社区热点 Issues
本次共筛选6条过去24小时更新的高价值Issue：
| Issue编号 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- |
| #4514 | 跟踪v0.16-alpha版本后`qwen serve` HTTP/SSE接口剩余的能力缺口，维护优先级排期表 | 12条评论，是所有Daemon服务端特性的总跟踪看板，生态集成的核心 roadmap 公开入口 | [链接](https://github.com/QwenLM/qwen-code/issues/4514) |
| #4782 | 公示ACP Streamable HTTP传输协议的实现进度、对齐RFD规范的升级计划 | 明确宣布Qwen-Code Daemon已经原生支持ACP协议，Zed、Goose、JetBrains等编辑器无需任何适配器即可直接连接，是代码代理生态兼容的里程碑特性 | [链接](https://github.com/QwenLM/qwen-code/issues/4782) |
| #4830 | 长会话场景下主模型不可用时自动 fallback 到兼容备用模型的功能需求 | 已被标识为重复需求关闭，说明该高呼声需求已经在官方现有排期中，面向长时间运行的Agent任务容错设计 | [链接](https://github.com/QwenLM/qwen-code/issues/4830) |
| #4550 | 纯局域网无公网环境下程序一直卡在初始化步骤，无法进入主界面的BUG | 国内大量私有化部署用户的高频痛点，目前已有2条跟进评论，社区迫切需要免联网初始化的配置方案 | [链接](https://github.com/QwenLM/qwen-code/issues/4550) |
| #1206 | 支持从OpenAI兼容端点动态拉取、切换多模型的功能需求 | 持续更新超过半年，获得1个赞，是所有使用第三方自定义大模型服务用户的核心诉求 | [链接](https://github.com/QwenLM/qwen-code/issues/1206) |
| #4794 | 开启紧凑模式后批量合并工具输出时触发全屏闪烁的UI体验BUG | 3条评论，CLI日常高频交互场景的体验问题，直接影响长会话下的阅读效率 | [链接](https://github.com/QwenLM/qwen-code/issues/4794) |

## 4. 重要 PR 进展
筛选10个核心优先级PR：
1. **#4832** 新增扩展诊断HTTP/ACP只读接口，暴露所有已安装扩展的状态、能力统计信息，对应#4514看板的T3.9任务 [链接](https://github.com/QwenLM/qwen-code/pull/4832)
2. **#4816** 为Web Shell新增`/settings`斜杠命令，全栈实现可视化配置界面，无需手动修改配置文件 [链接](https://github.com/QwenLM/qwen-code/pull/4816)
3. **#4812** 新增`POST /session/:id/branch`接口，支持远程客户端直接fork当前运行会话，无需重放历史记录即可快速创建分支任务 [链接](https://github.com/QwenLM/qwen-code/pull/4812)
4. **#4827** 新增29个`_qwen/*` ACP方法，实现ACP协议和原有REST接口的能力100%对齐，代码增量+935行 [链接](https://github.com/QwenLM/qwen-code/pull/4827)
5. **#4773** 新增ACP WebSocket传输层支持，和原有SSE传输共存，大幅降低实时交互场景的延迟 [链接](https://github.com/QwenLM/qwen-code/pull/4773)
6. **#4824** 长会话OOM问题修复，实现三层历史自动压缩机制，在内存压力高时自动清理冗余历史记录，解决连续运行数小时任务时程序崩溃的问题 [链接](https://github.com/QwenLM/qwen-code/pull/4824)
7. **#4793** 自托管大模型工具参数兼容修复，自动将LMStudio、vLLM等本地部署模型返回的数字/布尔型参数强制转换为字符串，避免Schema校验失败导致文件编辑等工具调用报错 [链接](https://github.com/QwenLM/qwen-code/pull/4793)
8. **#4780** CLI新增`/fork <指令>`斜杠命令，可直接生成后台Agent子任务，完全继承当前会话的上下文、工具、模型配置，后台运行不阻塞当前主会话交互 [链接](https://github.com/QwenLM/qwen-code/pull/4780)
9. **#4647** Linux/WSL2环境下剪贴板图片粘贴功能修复，替换原有第三方剪贴板依赖，改用系统原生的wl-paste/xclip工具，解决Wayland环境下无法粘贴图片的历史BUG [链接](https://github.com/QwenLM/qwen-code/pull/4647)
10. **#3165** 新增MiniMax服务商官方适配，默认以MiniMax-M3作为预置模型，开箱即用国内主流大模型服务 [链接](https://github.com/QwenLM/qwen-code/pull/3165)

## 5. 功能需求趋势
从本期动态可提炼出社区三大核心需求方向：
1. **ACP生态全兼容**：将Qwen-Code Daemon打造成通用后端，无需定制开发即可适配所有支持Agent Client Protocol的IDE、编辑器、终端客户端，实现一次部署多端访问。
2. **长会话可靠性体系建设**：围绕连续运行数小时甚至数天的Agent任务，集中落地自动内存压缩、动态模型 fallback、实时时间注入防上下文过时等特性，解决长任务容错问题。
3. **私有化离线部署适配**：重点优化无公网环境下的初始化流程、减少外部依赖，满足企业内网的代码助手部署需求。

## 6. 开发者关注点
本期开发者反馈的核心痛点集中在三点：
1. 自托管部署场景的兼容性问题占比最高，大量用户使用vLLM、LMStudio等本地模型运行时遇到工具调用参数格式不兼容、剪贴板适配异常等本地化BUG。
2. 多端共享同一会话的状态不同步问题是高频吐槽点，多个客户端连接同一个Daemon时，当前选择模型、审批规则的状态没有做到实时同步。
3. 异步后台任务能力缺口明显，用户迫切希望支持将非紧急的大任务放到后台运行，不打断当前正在进行的编码交互流程。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 2026-06-08
项目地址：github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览
今日社区核心迭代对齐v0.9.0正式版交付路线，原本单体架构的命令调度向模块化策略模式的重构已拆解为多个低风险分层小PR逐步落地，开发者集中提交了覆盖安全、并发、异常处理维度的20余项核心Bug修复，此前用户反馈长达1个月的重复回车确认操作痛点已正式闭环解决。过去24小时共更新6条Issue、20条PR，整体迭代节奏平稳可控。

## 2. 版本发布
过去24小时无新增正式Release版本，所有开发内容均合入`codex/v0.9.0-stewardship`开发分支。

## 3. 社区热点 Issues
本次共更新6条活跃Issue，全部值得关注：
1. **#2791 命令调度架构重构从单体匹配改为策略模式**：v0.9.0版本核心架构升级任务，目标将原本耦合在单一文件的命令分发逻辑拆分为独立的命令模块，降低后续功能迭代的维护成本，目前已有6条开发者讨论记录，社区参与度高。链接：https://github.com/Hmbown/CodeWhale/issues/2791
2. **#2870 命令边界重构全流程追踪EPIC**：作为#2791的配套管控Issue，将大体积重构任务拆分为多个可独立合并的小PR，避免大规模代码冲突，目前已对齐分层落地路径，2条评论确认了迭代优先级。链接：https://github.com/Hmbown/CodeWhale/issues/2870
3. **#1257 确认流程优化需求已闭环**：用户此前提出的「每次确认操作都要按两次回车」的体验痛点已正式关闭，大幅降低高频操作的交互负担。链接：https://github.com/Hmbown/CodeWhale/issues/1257
4. **#2886 新增工具生命周期Gherkin E2E测试覆盖**：为了保障大重构过程不引入回归缺陷，计划新增可执行的验收测试层，明确工具全生命周期的预期行为标准。链接：https://github.com/Hmbown/CodeWhale/issues/2886
5. **#2706 v0.9.0 Hugging Face提供商能力打磨**：目标补齐现有Hugging Face路由的校验逻辑、别名兼容和文档对齐，完善本地开源模型的接入体验。链接：https://github.com/Hmbown/CodeWhale/issues/2706
6. **#2872 CI流程卡在冒烟测试环节**：高频阻塞性Bug，CI流水线在构建、单元测试全部通过后，长时间卡在localhost健康检查步骤无报错，大量PR合并流程被阻塞，目前正在定位根因。链接：https://github.com/Hmbown/CodeWhale/issues/2872

## 4. 重要 PR 进展
挑选10个核心高优先级PR：
1. **#2888 命令重构第三层：提取注册表和解析器辅助逻辑**：属于分层重构的第三步，在完全不改变现有命令调度行为的前提下，将共享命令工具从`commands/mod.rs`中移出，进一步解耦代码结构。链接：https://github.com/Hmbown/CodeWhale/pull/2888
2. **#2871 命令重构第一层：清理命令支持边界**：重构首个落地PR，清理冗余的公共命令辅助逻辑，为后续分层改造打好基础。链接：https://github.com/Hmbown/CodeWhale/pull/2871
3. **#2878 命令重构第二层：新增命令一致性校验 harness**：新增命令元数据完整性、别名查找、帮助文档覆盖率的自动化校验逻辑，避免重构过程遗漏原有功能特性。链接：https://github.com/Hmbown/CodeWhale/pull/2878
4. **#2880 修复工具/客户端/命令侧9个临界Bug**：集中修复了PDF文本解析UTF-8边界崩溃、命令参数异常等可能引发panic、数据损坏的核心问题。链接：https://github.com/Hmbown/CodeWhale/pull/2880
5. **#2882 修复5个执行策略相关安全Bug**：补齐了命令拒绝规则空格绕过、工具输入校验缺失等安全漏洞，大幅提升系统运行安全性。链接：https://github.com/Hmbown/CodeWhale/pull/2882
6. **#2883 修复5个并发类Bug**：解决了Mutex中毒级联崩溃、线程耗尽、Windows平台编译失败等长期存在的稳定性问题。链接：https://github.com/Hmbown/CodeWhale/pull/2883
7. **#2874 缓存优化：精简运行时提示词体积**：将审批策略描述从每轮动态提示词中移出，大幅降低前缀缓存失效概率，减少Token冗余消耗。链接：https://github.com/Hmbown/CodeWhale/pull/2874
8. **#2869 修复模型选择器跨提供商遍历Bug**：此前`/model`选择器仅能展示当前激活提供商下的模型，修复后可全量展示所有已配置提供商的本地模型，解决用户找不到自定义模型的问题。链接：https://github.com/Hmbown/CodeWhale/pull/2869
9. **#2887 新增Gherkin风格E2E测试框架示例**：首次引入自然语言可描述的端到端验收测试体系，降低非开发人员的用例编写门槛。链接：https://github.com/Hmbown/CodeWhale/pull/2887
10. **#2879 对齐Hugging Face提供商文档与路由逻辑**：补全HUGGINGFACE_API_KEY、HF_TOKEN环境变量兼容，让文档描述和实际代码行为完全一致。链接：https://github.com/Hmbown/CodeWhale/pull/2879

## 5. 功能需求趋势
从今日迭代内容可提炼出社区当前优先级最高的3个需求方向：
1. **架构底座升级优先**：全量开发资源向v0.9.0版本倾斜，核心目标是解耦原本臃肿的命令体系，为后续大规模功能迭代降低维护成本。
2. **开源模型生态拓展**：重点补齐Hugging Face提供商全链路能力，覆盖大量本地部署开源大模型的用户场景。
3. **质量体系补齐**：新增覆盖全链路的自动化验收测试、校验 harness，从流程上避免架构重构引入大量回归缺陷。

## 6. 开发者关注点
今日高频反馈的开发侧痛点集中在4个方向：
1. 可调试性差：历史代码中大量使用静默丢弃错误的写法，故障无日志留存，排查难度极高。
2. CI流程阻塞：冒烟测试环节无提示卡死的问题已经成为PR合并的核心瓶颈，大幅拖慢迭代效率。
3. 跨环境兼容差：Nix沙盒环境下测试依赖本地可写目录随机失败，Windows平台多线程并发逻辑存在崩溃隐患。
4. 文档同步不及时：部分已上线的新能力没有同步更新文档，新贡献者上手成本高。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*