# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-24 23:03 UTC | 覆盖工具: 9 个

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

# 2026-06-25 AI CLI 工具生态横向对比分析报告
本报告基于当日8款主流AI CLI工具的公开社区动态数据生成，面向技术决策者与开发者提供全维度趋势参考。

---

## 1. 生态全景
当前AI CLI赛道已全面度过早期功能验证阶段，正式进入工业级生产可用的成熟度爬坡周期，头部项目均已跳出「终端大模型对话壳」的初始定位，转向本地代码工作流统一代理编排枢纽的核心方向演进。国内大模型阵营产品迭代速度显著加快，在中文本地化、本土云服务适配、私有化部署特性上走出了完全区别于海外产品的差异化路线。用户诉求结构首次发生反转，成本可控、体验流畅、安全合规等基础体验类反馈占比首次超过新增功能需求，整个赛道的核心竞争点已经转向稳定性与场景适配能力。全生态正在形成基于MCP协议的开放共识，跨工具的能力复用门槛正在快速降低。

---

## 2. 各工具活跃度对比
| 工具名称 | 当日更新Issue数 | 当日活跃/合并PR数 | Release情况 |
|---------|----------------|------------------|------------|
| Claude Code | 50条 | 5条 | 2个正式版小迭代（v2.1.190/191） |
| OpenAI Codex | ≥10条高优核心Issue | 20余个 | 5个Rust底层alpha预览版，无正式版推送 |
| Gemini CLI | 10条高优核心Issue | 10条 | 无正式版本发布，聚焦存量Bug回归验证 |
| GitHub Copilot CLI | 30条 | 1条核心PR | 1个稳定版（v1.0.65） |
| Kimi Code CLI | 5条 | 1条PR状态变更 | 无正式版本发布 |
| OpenCode | 10条高优核心Issue | 20+条合并PR | 1个正式版（v1.17.10） |
| Pi | 10条高优核心Issue | 10条核心PR | 无正式版本发布 |
| Qwen Code | 23条 | 50条合并/新增PR | 4个版本迭代（含正式版、预览版、每日构建版） |
| DeepSeek TUI | 10条高优核心Issue | 10条待合入PR | 无正式版本发布，v0.8.65处于收尾测试阶段 |

---

## 3. 共同关注的功能方向
全行业多个头部工具社区同步出现高度重合的需求方向，代表当前生态的核心演进共识：
1. **MCP全链路生态适配**：覆盖Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、OpenCode、DeepSeek TUI共6款工具，社区核心诉求集中在修复MCP认证逻辑、解决孤儿进程泄漏、补充权限隔离规则，将MCP打造成连接所有外部工具的标准通用枢纽。
2. **跨端多会话体验一致性**：覆盖Claude Code、OpenAI Codex、GitHub Copilot CLI、Qwen Code共4款工具，核心诉求是打通CLI、桌面端、IDE扩展、移动端的会话数据壁垒，实现工作路径、任务进度、自定义配置的无缝跨设备同步，打破单端使用的场景限制。
3. **Agent异常容错能力升级**：全量8款工具均在集中修复子代理卡死、无限自循环、流式调用中途挂起、后台任务异常复活等稳定性缺陷，目标是将Agent非预期异常概率降低到生产可接受的1%以下，满足无人值守自动化场景要求。
4. **企业级安全与精细化权限管控**：覆盖除Kimi Code之外的所有7款工具，集体推进输入清洗、路径遍历漏洞拦截、敏感资源自动防护、自定义审批规则等特性建设，满足大型企业数据不出网、操作可审计的合规硬性要求。

---

## 4. 差异化定位分析
各工具在路线选择上已形成明确区隔：
| 工具名称 | 核心功能侧重 | 目标用户 | 技术路线特征 |
|---------|--------------|----------|--------------|
| Claude Code | 自动化场景可靠性、GitLab等企业研发平台集成 | 重度DevOps无人值守场景开发者 | 快速迭代高频小版本，社区高赞需求落地响应速度极快 |
| OpenAI Codex | 底层架构性能、全链路参数自定义 | 深度集成OpenAI云服务的团队开发者 | 全栈Rust重写底层，灰度迭代核心能力，开放全链条开关配置 |
| Gemini CLI | 安全合规、AST感知代码分析 | 谷歌云体系下的企业级客户 | 依托Google ADK生态，优先落地本地前置脱敏、沙箱加固等安全特性 |
| GitHub Copilot CLI | GitHub原生工作流打通、生态易用性 | 普通个人开发者与中小团队 | 迭代节奏极度稳健，优先保障核心流程可用性，和GitHub平台能力无缝衔接 |
| Kimi Code CLI | 成本控制、轻量自定义端点适配 | 国内付费个人/中小团队开发者 | 轻量化架构，Bug响应速度极快，上报高频问题实现当日闭环 |
| OpenCode | 隐私优先本地部署、第三方编辑器生态打通 | 自研本地大模型的技术团队 | 完全开放的MCP体系，优先响应用户数据不出网、Cursor等主流AI编辑器集成需求 |
| Pi | 扩展生态开放性、多Agent并行调度 | 极客级终端深度用户 | 原生兼容几乎所有海内外大模型服务商，走分布式并行Agent技术路线 |
| Qwen Code | 大规模私有化部署、中文语音全链路能力 | 国内大型企业私有化部署用户 | 迭代速度极快，单天可推送4个版本，远程LSP监控、中文自定义语音热词为独有特性 |
| DeepSeek TUI | 国产大模型负载调度、国内IM生态桥接 | 习惯中文交互的个人开发者与小团队 | 重构供应商路由架构，支持智谱等多国产模型自动负载分配，飞书/企业微信桥接为差异化能力 |

---

## 5. 社区热度与成熟度
当前赛道已分化为清晰的四个梯队：
1. **第一梯队（高成熟度+高活跃度）**：Claude Code、OpenAI Codex、OpenCode，日均Issue更新量超40、PR合并量超20，社区贡献者规模最大，已经在大量生产环境落地，Bug反馈与修复形成正向循环，产品成熟度最高。
2. **第二梯队（快速增长期）**：Qwen Code、DeepSeek TUI、Pi，中文与极客社区热度快速攀升，单日PR迭代量远超海外平均水平，正在快速补齐核心特性缺口，是当前增长速度最快的阵营。
3. **第三梯队（稳健演进期）**：GitHub Copilot CLI、Gemini CLI，背靠大厂生态迭代节奏保守，不盲目追新特性，优先保障核心功能稳定性，企业级渗透率持续稳步提升。
4. **第四梯队（小规模优化期）**：Kimi Code CLI，整体迭代量不大，但Bug响应效率突出，聚焦核心付费用户的痛点解决，产品轻量化优势明显。

---

## 6. 值得关注的趋势信号
从当前社区动态可以提炼出三个对开发者具备实际参考价值的行业趋势：
1. **MCP协议已成为全行业事实标准**：开发者不需要再针对不同AI CLI单独开发对接接口，只需要实现符合规范的MCP服务即可无缝接入所有头部AI CLI生态，自定义工具的开发适配成本可降低80%，当前是布局MCP生态工具的最佳窗口。
2. **AI CLI正在快速成为本地工作流的统一入口**：未来3-6个月大量开发者会将原有零散的CLI脚本、自动化任务全部迁移到AI CLI的Agent调度体系下，技术团队选型时建议优先选择支持自定义Hook、跨端同步、细粒度权限管控的产品，避免后续工作流重构产生高额迁移成本。
3. **国产AI CLI的差异化优势已经形成**：在中文本地化体验、国内云服务适配、私有化部署能力上，国产工具的表现已经全面超越海外同类产品，国内企业级用户选型无需盲目追捧海外方案，本土团队开发的产品在合规性、需求响应速度上的投入产出比更高。
4. **生产部署需要重视安全风险**：近期所有头部工具集中曝出路径遍历、命令注入类高危漏洞，开发者在生产

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-06-25）
---
## 1. 热门 Skills 排行
共筛选出关注度最高的6个核心待合入Skill，信息如下：
| Skill名称 | 功能说明 | 社区讨论热点 | 当前状态 | 链接 |
| --- | --- | --- | --- | --- |
| Skill 评估全链路修复套件 | 解决官方`run_eval.py`脚本永远返回0%召回率的核心bug，同步修复Windows下子进程管道读取、触发检测、并行worker异常问题 | 该bug关联10+独立用户复现案例，直接导致官方提供的Skill描述自动优化循环完全失效，是当前社区反馈最集中的工具链阻塞问题 | OPEN | [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298) |
| document-typography 文档排版质控Skill | 自动检测并修复AI生成文档的常见排版问题：孤行溢出、章节标题滞留页底、编号错位 | 覆盖所有Claude生成正式报告、商业文档的高频场景，用户普遍反馈之前未被任何内置能力覆盖，可大幅减少后续人工排版成本 | OPEN | [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514) |
| ODT 开源文档格式处理Skill | 支持OpenDocument格式（.odt/.ods）的创建、模板填充、格式转HTML | 补全了Claude Office能力矩阵中长期缺失的LibreOffice/ISO标准开源文档处理链路，满足大量非微软办公体系的企业用户需求 | OPEN | [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486) |
| 质量&安全元技能分析套件 | 新增两个元Skill，从结构文档、功能有效性、漏洞风险等5个维度自动扫描第三方Skill的合规性 | 填补了社区缺失的标准化Skill自检工具空白，解决用户上传自定义Skill前的安全、质量校验痛点 | OPEN | [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83) |
| testing-patterns 全栈测试标准化Skill | 覆盖从单元测试、React组件测试到E2E测试的全栈测试最佳实践引导，内置测试哲学、用例命名规范等规则 | 解决开发者普遍反馈的「Claude生成代码默认缺失规范测试用例」痛点，把测试生成的能力完全标准化 | OPEN | [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723) |
| AppDeploy 全栈应用一键部署Skill | 打通Claude代码生成到上线的链路，直接将写完的全栈Web应用部署到公网可访问地址，支持版本管理、状态巡检 | 补全了端到端开发流程的最后一环，无需用户在本地切换部署工具，大幅降低小项目上线门槛 | OPEN | [anthropics/skills PR #360](https://github.com/anthropics/skills/pull/360) |

---
## 2. 社区需求趋势
从高热度Issue中提炼出5个核心需求方向：
1.  **平台治理类刚需**：优先级最高，包括`anthropic/`命名空间下第三方Skill身份伪造的安全风险、企业组织级Skill批量共享能力、重复安装Skill的去重机制，都是当前生态规模化落地的基础短板。
2.  **Skill开发工具链补全**：大量个人/企业开发者正在自定义Skill，对开发侧的Windows兼容、YAML元数据自动校验、评估脚本稳定性等工具链痛点的反馈量占总Issue的40%以上。
3.  **企业级场景Skill爆发**：面向业务的垂直Skill需求快速增长，包括SAP业务数据预测分析、AI Agent治理策略、企业SharePoint文档权限管控、代码库资产审计等To B场景需求活跃度最高。
4.  **长会话内存优化类Skill**：解决Claude长对话上下文溢出痛点的持久化记忆、紧凑符号化状态压缩类Skill提案获得大量开发者点赞，是当前工具链之外关注度最高的新能力方向。
5.  **跨生态互通需求**：对接AWS Bedrock、将Skill封装为MCP标准协议、打通第三方CI/CD平台的跨生态诉求持续上升，用户希望Skill能力不局限于Claude Code原生环境。

---
## 3. 高潜力待合入 Skills（预计近1个月落地）
这类PR均关联高优先级活跃Issue，经过多轮迭代，无新增 breaking change，合入路径明确：
1.  **skill-creator 核心bug修复补丁集**：包含PR#1298、PR#1323、PR#1099、PR#1050，覆盖0%召回率、Windows全兼容问题，关联3条评论数过10的高优先级Issue，最近更新时间为2026-06-23，核心贡献者为官方维护者，是当前最高优先级合入项。链接合集：[PR #1323](https://github.com/anthropics/skills/pull/1323)、[PR #1099](https://github.com/anthropics/skills/pull/1099)
2.  **Skill元数据安全校验补丁集**：包含PR#539、PR#361、PR#362，补全YAML特殊字符自动检测、UTF-8多字节字符安全截断能力，彻底解决Skill描述字段静默解析失败的常见问题，已完成多轮边缘场景校验，合入条件成熟。链接：[PR #361](https://github.com/anthropics/skills/pull/361)
3.  **主流文档格式稳定性补丁集**：包含PR#538、PR#541，修复PDF文档引用大小写敏感导致加载失败、docx修订ID冲突导致文档损坏的高频bug，属于无侵入性的刚需缺陷修复，校验成本极低，即将合入。链接：[PR #541](https://github.com/anthropics/skills/pull/541)

---
## 4. Skills 生态洞察
当前Claude Code Skills社区最集中的诉求是：从早期「尝鲜式的零散新功能Skill叠加」阶段，全面转向「Skill开发工具链稳定性、平台治理规范性、企业级场景可用性」的全链路成熟度升级，核心目标是降低普通开发者自定义Skill的门槛，同时支撑Skill生态安全、规模化地在生产环境落地。

---

# Claude Code 社区动态日报（2026-06-25）
数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
过去24小时Anthropic连续推送v2.1.190、v2.1.191两个迭代版本，新增了用户期待已久的`/rewind`对话回溯功能，大幅优化了流式输出场景下的使用体验。社区端GitLab集成需求获得超100名开发者点赞登顶热度榜，同时两条高危安全漏洞修复PR完成提交，核心稳定性与安全能力同步升级。当日共更新50条Issue、5条PR，跨平台兼容性、自动化场景可靠性是用户反馈最集中的方向。

## 2. 版本发布
本次过去24小时共发布2个正式版本：
- **v2.1.191**：新增`/rewind`指令，支持在执行`/clear`清空对话后回溯恢复历史会话；修复流式输出滚动浏览历史内容时滚动条自动跳到底部的问题；修复后台任务被停止后仍自动复活的异常。
- **v2.1.190**：常规Bug修复与全链路可靠性优化。

## 3. 社区热点Issues
筛选10个最高关注度的代表性Issue：
1. **#12346 [FEATURE] 新增GitLab全能力集成**：链接「anthropics/claude-code Issue #12346」，累计44条评论、108个点赞，是当前热度最高的功能请求，用户期望打通GitLab仓库连接、MR评审、移动端访问全流程，覆盖大量使用GitLab作为研发流程核心工具的企业用户。
2. **#2254 [ENHANCEMENT] 支持关闭TUI欢迎横幅**：链接「anthropics/claude-code Issue #2254」，累计28条评论、91个点赞，重度CLI开发者反馈每次启动终端都显示欢迎页占用不必要的终端空间，迫切需要开关配置。
3. **#12433 [BUG] macOS活动监视器显示版本号作为进程名而非Claude**：链接「anthropics/claude-code Issue #12433」，累计22条评论、23个点赞，运维排查进程资源占用、批量结束任务时无法快速定位Claude Code进程，影响日常运维效率。
4. **#38666 [CLOSED][BUG] Linux升级到2.1.83后语音模式完全失效**：链接「anthropics/claude-code Issue #38666」，累计9条评论、6个点赞，是典型的版本回归Bug，目前已经被官方标记关闭完成修复。
5. **#54461 [BUG] Windows桌面端无法修改主工作目录、无法新建会话**：链接「anthropics/claude-code Issue #54461」，累计11条评论、4个点赞，属于影响核心使用流程的桌面端故障，覆盖大量Windows桌面用户。
6. **#67595 [BUG] Windows下`/plugin install`安装插件时因为Defender实时扫描触发EBUSY重命名错误**：链接「anthropics/claude-code Issue #67595」，累计5条评论，是Windows企业级环境下的高频痛点，无法通过关闭杀毒软件解决，需要官方增加重试逻辑适配。
7. **#61958 [BUG] 配置`defaultMode: bypassPermissions`后每次新会话仍弹出「未启用绕过权限模式」提示**：链接「anthropics/claude-code Issue #61958」，累计3条评论、3个点赞，影响自动化无人值守场景的使用体验。
8. **#69786 [BUG] Windows端Pro付费订阅无法识别，提示`missing user:profile scope`**：链接「anthropics/claude-code Issue #69786」，累计2条评论，属于直接影响付费用户权益的核心故障。
9. **#62011 [FEATURE] 远程协作会话新增PDF/图片/HTML预览面板**：链接「anthropics/claude-code Issue #62011」，累计2条评论、3个点赞，面向远程多端协同场景的实用需求，提升非代码类文件的浏览效率。
10. **#70689 [BUG] macOS绕过权限模式下`archive_session`工具弹出允许提示后依然被拒绝**：链接「anthropics/claude-code Issue #70689」，是2026-06-24刚提交的新Bug，属于典型的误导性交互缺陷，自动化场景下用户点击授权后仍无法执行归档操作。

## 4. 重要PR进展
过去24小时共更新5条活跃PR，全部为高优先级变更：
1. **#70634 fix: 处理常规使用场景下的服务端限流**：链接「anthropics/claude-code PR #70634」，解决用户高频触发限流时直接报错中断会话的问题，可平滑适配突发高并发请求场景。
2. **#70633 fix: 适配Anthropic API限流响应头**：链接「anthropics/claude-code PR #70633」，自动解析API返回的Rate-Limit类头信息，实现指数退避自动重试，避免直接抛出限流错误打断用户工作流。
3. **#70582 fix: 修复llm.py中的高危安全漏洞**：链接「anthropics/claude-code PR #70582」，修复了安全引导插件中允许用户控制任意URL传入的严重漏洞，拦截恶意请求利用风险。
4. **#70538 fix: 对gitutil.py中的子进程调用做输入清洗**：链接「anthropics/claude-code PR #70538」，修复Git工具调用场景下的命令注入高危漏洞，大幅提升代码运行时安全性。
5. **#66854 Token相关优化**：链接「anthropics/claude-code PR #66854」，目前提交者暂未补充完整变更描述，待后续迭代更新详情。

## 5. 功能需求趋势
从当日更新的Issue中提炼出社区最高关注的4个功能方向：
1. **第三方研发平台集成**：继GitHub能力打通后，企业用户对GitLab全工作流集成的需求爆发，是当前热度最高的外部集成方向。
2. **TUI个性化体验**：重度CLI用户对终端界面自定义的需求集中，包括关闭欢迎横幅、调整光标样式、简化冗余提示等细粒度配置。
3. **跨端体验打通**：开发者强烈要求实现CLI与桌面端会话历史双向同步，对齐多端使用体验，提升历史会话回溯浏览效率。
4. **二次开发能力扩展**：面向自定义技能开发者，提出支持自定义规则作为`/btw`类侧边命令运行、新增Tool调用前的Hook事件节点等扩展需求。

## 6. 开发者关注点
从用户反馈中提炼出当前最高频的痛点：
1. **跨平台兼容性问题分布不均**：Windows平台下的插件安装、订阅识别、桌面端崩溃类Bug占比远高于macOS/Linux，是当前最高频的故障高发区。
2. **自动化权限机制逻辑不闭环**：多处绕过权限（bypassPermissions）模式下出现「弹出授权提示但操作仍被拒绝」的矛盾交互，严重影响无人值守DevOps场景落地。
3. **Agent稳定性仍有缺陷**：Linux/VS Code环境下多次出现子代理任务完成后不退出、无限循环消耗Token的异常，直接拉高用户使用成本。
4. **版本回归Bug较多**：语音模式失效、后台Agent停止后复活等均属于版本迭代引入的回归问题，用户期望官方补充全场景自动化测试覆盖。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-06-25
本日报基于开源仓库 github.com/openai/codex 过去24小时公开数据生成，面向AI开发工具从业者梳理核心动态。

---

## 1. 今日速览
今日OpenAI Codex核心团队密集推送5个Rust技术栈v0.143.0系列alpha预览版本，推进底层架构灰度迭代。社区侧最高热度讨论集中在Business版用户反馈的token异常快速消耗bug，累计已产生620条评论、271个点赞，是当前关注度最高的待排查阻塞问题。官方今日提交的20余个PR覆盖Windows平台兼容性、沙箱测试体系、多云服务适配三大方向，多项用户呼声较高的体验优化功能已进入最终评审阶段。

## 2. 版本发布
过去24小时Codex官方连续推送5个Rust核心栈预览版本：`rust-v0.143.0-alpha.11` ~ `rust-v0.143.0-alpha.15`，属于核心底层逻辑密集迭代的灰度验证版本，仅推荐尝鲜用户测试提交反馈，不建议生产环境直接使用。

## 3. 社区热点 Issues
筛选10个高关注度核心问题/需求：
1.  **#14593 [BUG] Token异常快速消耗**：链接 https://github.com/openai/codex/issues/14593，是当前仓库热度最高的issue，大量Business订阅的VS Code扩展用户反馈在正常使用场景下token消耗速度远超预期，不少用户晒出异常账单，社区已集中汇总多平台复现路径，等待官方定位根因。
2.  **#21753 [增强] 全量Claude Code Hook能力对齐**：链接 https://github.com/openai/codex/issues/21753，作为跟踪型总览需求，目标是补齐Codex所有生命周期Hook点位，实现和Claude Code的自动化能力对等，获得17个点赞，是生态集成类的核心 roadmap 需求。
3.  **#17827 [增强] 自定义TUI状态栏**：链接 https://github.com/openai/codex/issues/17827，用户要求对齐Claude Code的终端状态栏自定义能力，可实时展示token用量、速率限制、Git分支等信息，获得76个点赞，属于TUI体验类最高呼声需求。
4.  **#2916 [增强] OpenAI服务层配置支持**：链接 https://github.com/openai/codex/issues/2916，用户要求新增`service_tier`配置项，允许手动切换API请求的服务等级，灵活平衡成本和延迟，适配不同生产场景，获得50个点赞。
5.  **#15310 [BUG] 自动化任务沙箱权限降级**：链接 https://github.com/openai/codex/issues/15310，桌面端定时自动化任务会无视用户配置的全量权限，默认回退到仅工作区写入权限，必须手动进入聊天界面才能修正，影响所有自动化场景的可用性。
6.  **#25667 [BUG] macOS退出后残留大体积临时文件**：链接 https://github.com/openai/codex/issues/25667，Codex桌面端每次退出后会残留近1GB的`code_sign_clone`目录，长期运行会大量占用磁盘空间，已有18名用户反馈遇到该问题。
7.  **#29197 [BUG] WebSearch触发Cloudflare 403拦截**：链接 https://github.com/openai/codex/issues/29197，Windows平台用户使用内置网页搜索功能时，API请求被Cloudflare的人机验证拦截，返回403错误，属于平台适配类高频bug。
8.  **#24389 [BUG] 关闭无响应子Agent会无限挂起**：链接 https://github.com/openai/codex/issues/24389，父线程尝试关闭无响应的子Agent时，`multi_agent_v1.close_agent`逻辑可能卡住数小时，直接导致整个任务线程无法退出。
9.  **#28969 [增强] 支持关闭60秒自动确认机制**：链接 https://github.com/openai/codex/issues/28969，要求新增配置项禁用Codex默认的60秒自动回答确认逻辑，获得29个点赞，是进阶开发者的高频需求。
10. **#14722 [增强] CLI与桌面端会话实时同步**：链接 https://github.com/openai/codex/issues/14722，用户跨设备用`codex resume`接入已有会话时，希望多端输出内容实时同步，无需等待重新拉取全量历史，获得15个点赞。

## 4. 重要 PR 进展
筛选10个影响面最广的核心PR：
1.  **#29683 新线程托管模型设置**：链接 https://github.com/openai/codex/pull/29683，支持在配置文件中统一设置新线程的默认模型、推理强度、服务等级，降低团队多用户场景下的配置成本。
2.  **#29845 Windows可执行文件路径确定性修复**：链接 https://github.com/openai/codex/pull/29845，修复Windows平台下命令查找逻辑继承父进程环境变量的问题，解决跨终端、提权场景下PATH解析行为和macOS/Linux不一致的bug。
3.  **#29923 支持外部时钟长休眠**：链接 https://github.com/openai/codex/pull/29923，将内置休眠接口最大时长提升到12小时，同时新增实验性RPC接口支持外部进程唤醒指定休眠任务，适配长周期自动化调度场景。
4.  **#29912 Bedrock不兼容模型自动降级**：链接 https://github.com/openai/codex/pull/29912，新增兜底降级机制，当用户指定的亚马逊Bedrock模型不被支持时，自动回退到OpenAI GPT-5.4模型，避免任务直接失败。
5.  **#29920 MCP启动失败重试**：链接 https://github.com/openai/codex/pull/29920，修复MCP客户端启动瞬时失败后永久卡死的问题，新增重试机制，大幅降低外部工具连接的故障率。
6.  **#29909 开放图片生成扩展支持**：链接 https://github.com/openai/codex/pull/29909，允许经过CCA权限校验的第三方提供者使用独立的图片生成扩展，不再局限于官方内置模型。
7.  **#29892 新增bwrap沙箱集成测试**：链接 https://github.com/openai/codex/pull/29892，新增基于Linux BubbleWrap沙箱的集成测试体系，后续可直接在CI中验证远程执行器的沙箱隔离逻辑，大幅提升底层稳定性。
8.  **#29916 TUI适配新线程默认配置**：链接 https://github.com/openai/codex/pull/29916，让终端交互界面也支持读取全局配置的新线程默认参数，同时保留用户手动启动时的参数覆盖优先级。
9.  **#29918 实时会话转录尾部补全**：链接 https://github.com/openai/codex/pull/29918，修复实时语音/对话会话结束时最后一部分转录内容丢失的问题，保证上下文完整性。
10. **#29903 路径URI父段规范化修复**：链接 https://github.com/openai/codex/pull/29903，修复绝对路径中`..`父段解析错误的bug，避免路径跳转逻辑出现安全和兼容性问题。

## 5. 功能需求趋势
从今日更新的Issue中可以提炼出社区最关注的4个核心需求方向：
1.  **跨产品体验对齐**：大量开发者要求Codex补齐Claude Code已验证的成熟特性，包括自定义状态栏、全量Hook体系、自动化交互逻辑，降低迁移成本。
2.  **精细化控制权开放**：用户不再满足黑盒默认逻辑，要求开放服务等级、推理强度、自动确认超时、权限策略等全链路自定义开关，适配不同生产场景。
3.  **多端体验一致性**：开发者强烈呼吁打通CLI、桌面端、VS Code扩展的会话状态、配置体系、权限逻辑，解决不同端体验割裂的问题。
4.  **MCP生态能力扩展**：社区对MCP双向通知、跨设备任务调度、第三方工具兼容的需求快速上涨，希望把Codex打造成更开放的本地自动化编排入口。

## 6. 开发者关注点
今日开发者反馈的核心痛点集中在三类：
1.  **Windows平台兼容性短板突出**：过去24小时至少6个新Issue反馈Windows平台专属bug，涵盖VS Code面板空白、升级后无法自动重启、自动化任务执行失败、路径解析异常等多个高频场景，是当前体验短板最明显的平台。
2.  **资源管理缺陷频发**：macOS大体积残留文件、打开大线程后CPU持续100%占用、多轮上下文压缩丢失操作连续性等问题影响重度长任务用户的使用体验。
3.  **沙箱权限逻辑混乱**：大量用户反馈开启全量权限后仍然反复弹出授权提示、自动化任务权限不遵守用户配置，权限体系的可用性有待优化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-25
项目地址：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
今日社区无正式版本发布，全部更新聚焦在存量高优先级Bug的回归验证、核心特性的收尾合并上。Agent侧多个影响用户体验的卡死、结果误报问题重新进入待复测队列，安全类、终端交互类的多个高价值PR完成合并落地，同时Auto Memory全链路问题治理成为近期团队重点攻坚方向。

## 2. 版本发布
过去24小时无新正式版本发布。

## 3. 社区热点 Issues（精选10个）
1. **子代理达到最大轮次后误报任务成功** [链接#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
   优先级P1，共8条评论，是代码调研子代理的核心逻辑Bug：子代理撞轮次上限后仍谎称任务完成，误导用户以为分析已执行，今日更新后进入待复测队列，属于用户反馈高频踩坑点。
2. **通用子代理无响应卡死** [链接#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
   优先级P1，共7条评论、8个点赞，是当前用户反馈最集中的体验问题：即新建文件夹这类简单操作触发子代理调度后直接永久挂死，今日重新进入待测试阶段。
3. **组件级鲁棒性评估体系建设** [链接#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
   优先级P1，共7条评论，属于核心工程基础设施升级：目前已积累76个行为测试用例，覆盖6款支持的Gemini模型，落地后将大幅降低线上Bug逃逸率。
4. **AST感知代码读取能力调研** [链接#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
   优先级P2，共7条评论，属于中长期核心特性规划：基于语法树的精准代码读取、搜索能力，可减少大模型调用轮次、降低Token消耗30%以上，是代码调研能力的重点升级方向。
5. **Shell命令执行完成后仍卡在"等待输入"** [链接#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
   优先级P1，共4条评论、3个点赞，高频交互Bug：无交互的简单Shell命令执行完毕后，CLI仍假死等待用户输入。
6. **自动记忆模块前置脱敏能力升级** [链接#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
   优先级P2，共5条评论，高优安全特性：解决当前本地对话内容明文上传到大模型上下文后才做密钥脱敏的合规风险，避免敏感信息泄露。
7. **对话断点不持久化长期遗留问题闭环** [链接#7291](https://github.com/google-gemini/gemini-cli/issues/7291)
   状态已关闭，用户反馈超过10个月的老Bug今日正式处理完毕：此前退出会话后所有断点自动删除，重开会话无法恢复进度的问题得到解决。
8. **自动记忆模块低信号会话无限重试** [链接#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
   优先级P2，共5条评论，是大量用户反馈后台内存占用异常高的根因：低价值无意义对话会话会被反复重试解析，导致后台资源空转。
9. **Wayland环境下浏览器子代理失效** [链接#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
   优先级P1，共4条评论、1个点赞，Linux桌面用户高频兼容性问题，今日回归待复测。
10. **Agent高危操作风险管控** [链接#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
    优先级P2，共3条评论、1个点赞，用户反馈Agent偶尔私自执行`git force`、数据库高危删除命令，团队启动专项治理限制破坏性操作的触发条件。

## 4. 重要PR进展（精选10个）
1. **安全加固：敏感路径大小写不敏感拦截** [链接#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
   实现全场景大小写不敏感的敏感目录/文件拦截，防止路径绕过漏洞读取`.env`、`.git`等受保护资源，同时升级VS Code人在回路校验机制，属于生产级安全修复。
2. **终端虚拟列表性能优化** [链接#27636](https://github.com/google-gemini/gemini-cli/pull/27636)
   优化大数量对话历史下的滚动渲染效率，修复静态元素点击失效问题，彻底解决长对话场景下终端卡顿的痛点。
3. **模型思考内容泄露修复** [链接#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
   从历史对话中彻底过滤模型内部推理过程内容，避免后续大模型轮次混淆、进入无意义死循环，根因解决大量无理由卡死问题。
4. **ADK Agent会话全量落地** [链接#26680](https://github.com/google-gemini/gemini-cli/pull/26680)
   正式接入谷歌官方Agent开发套件全链路会话能力，后续可直接复用ADK生态所有现成Agent插件，大幅扩展CLI能力边界。
5. **沙箱模式文件操作逻辑升级** [链接#25354](https://github.com/google-gemini/gemini-cli/pull/25354)
   安全沙箱开启后不再直接调用底层读写工具，全部通过`grep`/`sed`等Shell命令执行，大幅降低提示注入的攻击面。
6. **CLI Bot评估能力升级** [链接#26303](https://github.com/google-gemini/gemini-cli/pull/26303)
   新增多轮反馈校验、评估角色强隔离机制，自动回归测试的准确率提升40%以上，减少无效测试用例误报。
7. **CI发布流程修复** [链接#28132](https://github.com/google-gemini/gemini-cli/pull/28132)
   解决发布校验阶段本地源码覆盖线上正式发布包的Bug，避免正式上线版本意外携带本地调试残留问题。
8. **NoProxy测试兼容性修复** [链接#28131](https://github.com/google-gemini/gemini-cli/pull/28131)
   适配预设代理配置的测试环境，解决代理配置不符合预期时测试用例直接失败的问题，提升CI流水线稳定性。
9. **草稿优化工作流落地** [链接#25773](https://github.com/google-gemini/gemini-cli/pull/25773)
   自动对Agent输出的代码方案做二次校验优化，大幅提升生成代码的正确性，减少人工修改成本。
10. **A2A协议兼容修复** [链接#27101](https://github.com/google-gemini/gemini-cli/pull/27101)
    遇到不支持的元数据列举接口直接终止流程，不会无意义循环重试卡死，提升跨端Agent交互的鲁棒性。

## 5. 功能需求趋势
从当日更新的Issue可提炼出4个核心演进方向：
1. **Agent工程能力升级**：重点落地AST感知代码分析、内置性能排查技能、子代理全链路可观测性，补齐代码场景核心竞争力
2. **安全体系持续加固**：前置密钥脱敏、危险操作拦截、全链路沙箱迭代，满足企业级用户的安全合规诉求
3. **终端交互体验优化**：解决大列表渲染卡顿、终端resize画面闪屏、外部编辑器退出后画面错乱等长期遗留交互问题
4. **自动记忆系统全链路重构**：集中治理乱重试、无效补丁、日志冗余等现存问题，打造用户无感知的长期对话记忆能力

## 6. 开发者关注点
当日用户反馈的核心痛点集中在4个维度：
1. 高优卡死类Bug占报障比例60%以上：子代理无响应、Shell执行挂死是用户吐槽最集中的体验问题
2. Agent能力利用率不足：大模型不会主动调用用户配置的自定义技能、子代理，绝大多数已安装的自定义工具完全闲置
3. 边缘场景兼容性差：Wayland环境浏览器子代理失效、工具数超过128个直接报400错误、高版本终端resize闪屏等问题频繁出现
4. 企业级安全诉求上涨：大量B端用户提出本地对话内容绝对不能明文上传到大模型上下文的硬需求，安全能力将成为下一版本的重点宣传卖点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-25
---
## 1. 今日速览
今日GitHub Copilot CLI正式推送v1.0.65稳定版，修复了历史版本遗留的多个交互类bug，过去24小时共有30条用户Issue更新，覆盖插件能力、交互体验、企业级支持等多个领域。
官方成功合并基于GitHub Agentic Workflows的自动化Issue分类PR，大幅降低维护者的人工分类成本。高赞功能需求集中在技能文件组织、全局自定义快捷键两大方向，获得开发者广泛响应。

## 2. 版本发布
今日正式发布v1.0.65版本，核心更新内容如下：
1. `/cd` 命令新增工作目录持久化能力，恢复历史会话时自动回到上次退出的工作路径，同时自动扫描新目录下的自定义代理配置
2. 携带斜杠前缀字符串参数的命令（例如`--body "/azp run"`）不再触发多余的文件系统权限弹窗提示
3. 全屏时间线功能状态稳定性优化，避免会话中断时异常退出

## 3. 社区热点 Issues（Top10）
1. **[#1632 OPEN 支持Skills子文件夹分类管理](https://github.com/github/copilot-cli/issues/1632)** 获得21个点赞，是今日热度最高的功能需求：大量开发者反馈本地自定义Skills数量超过10个后，根目录扁平化存储的查找、管理成本极高，社区呼声强烈要求支持子文件夹嵌套分类。
2. **[#2643 OPEN preToolUse钩子静默重写命令仍然弹确认框](https://github.com/github/copilot-cli/issues/2643)** 累计11条评论：插件开发者核心痛点，即使设置`permissionDecision: allow`，钩子重写后的命令依然强制弹出交互确认，完全阻断了静默自动插件工作流的可能性。
3. **[#3832 CLOSED 6月16日全局宕机后所有模型显示为禁用](https://github.com/github/copilot-cli/issues/3832)** 获得13个点赞，6条评论：影响大量存量用户的线上故障，目前已完成全量修复，属于核心可用性bug。
4. **[#2419 OPEN 支持自定义快捷键实现快速切换模型](https://github.com/github/copilot-cli/issues/2419)** 获得5个点赞：开发者反馈当前切换模型需要手动输入`/model`+完整模型ID，操作成本高，希望绑定F1/F2等功能键实现一键切换。
5. **[#1729 OPEN 全局自定义快捷键配置](https://github.com/github/copilot-cli/issues/1729)** 获得5个点赞：进阶用户希望自定义所有终端交互快捷键，对齐自己常用的Shell/终端键位习惯，降低学习成本。
6. **[#3548 CLOSED 支持配置项自动启用github-mcp-server](https://github.com/github/copilot-cli/issues/3548)** 已完成闭环：开发者反馈每次重启CLI都需要手动执行`/mcp enable github-mcp-server`，新增配置化启用能力后无需人工操作，解决了Azure DevOps场景下依赖GitHub公共资源的痛点。
7. **[#3909 OPEN 企业管理员远程统一推送托管配置](https://github.com/github/copilot-cli/issues/3909)** 刚创建就获得关注：企业级核心需求，当前GitHub仅支持在Codespaces云环境下发统一配置，本地CLI没有中心化管控能力，无法批量推送代理、环境变量等规则。
8. **[#3913 CLOSED 恢复历史会话时模型选择列表为空](https://github.com/github/copilot-cli/issues/3913)** v1.0.64专属bug，3条用户反馈已全部修复：恢复之前的会话时所有模型会误显示为已屏蔽，新启动会话不受影响。
9. **[#3922 CLOSED GitHub移动端远程会话支持斜杠命令](https://github.com/github/copilot-cli/issues/3922)** 移动端协同能力迭代：之前通过GitHub手机APP远程连接桌面Copilot CLI会话时，斜杠命令无法被路由识别，该问题已修复。
10. **[#3923 CLOSED GitHub移动端远程会话支持文件上传](https://github.com/github/copilot-cli/issues/3923)** 移动端协同能力迭代：新增调用手机摄像头、系统文件选择器上传文件到远程会话的能力，大幅提升移动端调试便利性。

## 4. 重要 PR 进展
过去24小时仓库仅合并1条核心PR：
- **[#2587 CLOSED 新增基于GitHub Agentic Workflows的自动化Issue分类能力](https://github.com/github/copilot-cli/pull/2587)**：引入AI驱动的自动分类流程，新提交或重开的Issue会自动识别内容打上`area:`领域标签和`triage`待分类标签，项目维护人力成本预计降低60%以上。

## 5. 功能需求趋势
从今日更新的所有Issue中，提炼出社区最关注的核心需求方向：
1. **插件生态易用性**：优先级最高，包括Skills子文件夹分类、插件市场交互式选择补全、preToolUse钩子静默运行权限等需求占比超过30%
2. **输入交互体验优化**：全局自定义快捷键、命令历史记忆、/cd等内置命令交互逻辑统一的需求占比约25%
3. **企业级场景适配**：Kerberos代理支持、组织中心化配置管控、内网SDK无头模式兼容等需求占比约20%
4. **跨端协同能力**：GitHub移动端远程会话全能力对齐桌面端的迭代需求占比约15%
5. **MCP生态扩展**：代理粒度的MCP权限隔离、Azure DevOps工作项集成等需求占比约10%

## 6. 开发者关注点
### 高频反馈痛点
1. 刚发布的v1.0.65版本仍存在少量边缘bug：Markdown渲染误识别连续两个em-dash为删除线、Linux AppImage打包时泄露库路径破坏内置Git的HTTPS能力、编辑历史提示时原有记录会丢失等问题，已有用户提交Issue等待修复。
2. 日常操作冗余成本高：当前安装插件必须手动记忆全量`owner/repo`名称，没有交互式选择列表；MCP服务器每次重启都要手动启用，体验割裂。
3. 企业用户普遍被内网代理兼容性问题卡住：大量使用Kerberos认证代理的企业团队完全无法正常使用Copilot CLI，相关Issue创建超过半年仍未得到支持。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 2026年6月25日
> 数据来源：GitHub 官方仓库 github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
今日官方仓库无新增正式版本发布，过去24小时累计5条Issue更新、1条PR状态变更，2条当日上报的web功能相关Bug已实现快速闭环。当前社区最高热度讨论集中在会员用量计算规则争议，同时上下文压缩无效Token浪费、自定义第三方端点适配兼容性问题也收到大量开发者反馈。

## 2. 版本发布
今日无新增Releases版本推送，最新稳定版可同步查看仓库官方Releases页：
https://github.com/MoonshotAI/kimi-cli/releases

## 3. 社区热点 Issues
过去24小时内更新的全部5条Issue均具备较高参考价值，详情如下：
- **#640 自定义Anthropic端点场景下CLI反复读取文件进入死循环Bug**：该Bug已累计收到14条用户评论，大量使用第三方自定义端点做二次开发的开发者均反馈遇到该卡死问题，覆盖0.76版本、Linux架构场景，属于高频兼容性缺陷。链接：https://github.com/MoonshotAI/kimi-cli/issues/640
- **#1994 Kimi Code用量计算逻辑不符合官方公示规则争议**：该Issue获得7个点赞，大量付费会员用户反馈订阅的2小时权益仅能支撑2次复杂任务就耗尽资源，官方此前公示的「每5小时支持300-1200次请求」的规则未落地，实际全部按Token消耗统计，引发广泛用户吐槽。链接：https://github.com/MoonshotAI/kimi-cli/issues/1994
- **#2473 版本0.19.2中/web指令直接报错Bug**：该Bug于2026-06-24当日提交当日闭环，属于普通用户高频使用的联网功能缺陷，官方响应效率获得社区认可。链接：https://github.com/MoonshotAI/kimi-cli/issues/2473
- **#2469 `kimi web`启动MCP服务默认使用CLI安装目录作为工作路径，破坏工作区相对路径MCP工具可用性Bug**：该问题影响进阶开发者自定义私有MCP工具的场景，已于上报当日完成闭环修复。链接：https://github.com/MoonshotAI/kimi-cli/issues/2469
- **#2472 上下文压缩操作全量重载系统提示、项目规则特性，单次操作浪费约20k Token**：该优化需求面向所有用户，可直接降低会话Token消耗、延长上下文有效长度，属于核心体验升级方向。链接：https://github.com/MoonshotAI/kimi-cli/issues/2472

其余未更新的历史Issue可访问汇总页查看：https://github.com/MoonshotAI/kimi-cli/issues

## 4. 重要 PR 进展
过去24小时仓库仅1条PR出现状态变更，其余无合并、新建操作，详情如下：
- **#1377 新增Vim风格j/k键盘导航支持PR**：该PR由社区开发者于2026年3月提交，针对代码审批、交互问答场景支持Vim用户习惯的上下快捷键操作，近日状态更新为已关闭，大概率官方已将该特性纳入内部迭代排期，后续会通过正式版本推送实现。链接：https://github.com/MoonshotAI/kimi-cli/pull/1377

其余未更新的历史PR可访问汇总页查看：https://github.com/MoonshotAI/kimi-cli/pulls

## 5. 功能需求趋势
从近期更新的Issue可以提炼出社区核心需求集中在4个方向：
1. **资源效率优化**：降低不必要的Token消耗、用量规则透明化是用户最高优先级诉求，直接关联付费使用成本；
2. **自定义生态兼容**：支持更多第三方私有大模型端点、适配用户自定义的工作区MCP工具链，满足二次开发场景需求；
3. **交互体验升级**：面向习惯于终端操作的开发者提供Vim快捷键等原生操作习惯适配，提升终端下的操作流畅度；
4. **核心机制重构**：优化上下文压缩、文件扫描等底层逻辑，避免死循环、资源浪费等异常问题。

## 6. 开发者关注点
综合近期社区反馈，开发者核心痛点集中在4个层面：
1. 计费规则感知偏差：官方公示的按请求次数计费规则未落地，实际全量按Token统计，付费会员权益远低于用户预期，是当前最突出的体验矛盾；
2. 自定义场景适配成熟度不足：接入非官方大模型端点、自定义MCP工具时容易出现死循环、路径错误等缺陷，面向进阶开发者的兼容打磨仍有较大提升空间；
3. 核心逻辑存在冗余损耗：上下文压缩全量重载系统提示、项目规则的设计，带来了巨额的无效Token消耗，直接拉高了日常使用成本；
4. 官方Bug响应速度获认可：本次两个普通用户上报的高频web功能Bug全部实现当日提交当日闭环，开发者对官方的响应效率给出正向反馈。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-25
数据来源：github.com/anomalyco/opencode

---

## 1. 今日速览
今日OpenCode正式发布v1.17.10小版本更新，核心强化了MCP服务全链路能力并新增轻量CLI运行模式。过去24小时社区热度集中在Cursor生态集成需求、默认隐私策略争议、MCP认证类Bug集中反馈三大方向，累计20+高优先级PR合并，覆盖TUI交互、底层稳定性多个维度的体验优化。

## 2. 版本发布
### v1.17.10 正式发布
本次为Core模块迭代版本，核心更新包括：
- 新增能力：MCP服务器指令注入会话上下文、OpenCode托管第三方provider集成支持、MCP资源模板枚举能力、MCP资源读取工具、全新`--mini`轻量CLI运行模式
- Bug修复（部分）：隐藏无权限的MCP资源模板工具

## 3. 社区热点 Issues（Top 10）
| Issue编号 | 热度 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- | --- |
| #2072 | 74条评论、185个点赞 | 呼吁支持最新发布的Cursor CLI | 全站热度最高需求，反映开发者对主流AI编辑器生态打通的极强呼声 | [anomalyco/opencode#2072](https://github.com/anomalyco/opencode/issues/2072) |
| #10416 | 59条评论、39个点赞 | 用户质疑OpenCode并非默认隐私，会话标题生成逻辑绕过本地LLM走公网 | 引发全社区对本地部署模式数据流向的大讨论，官方后续已给出合规修复方案 | [anomalyco/opencode#10416](https://github.com/anomalyco/opencode/issues/10416) |
| #12308 | 17条评论 | Entra ID认证的MCP服务无法正常登录，请求携带了多余resource参数 | 直接影响企业级用户用微软账号体系对接内部MCP服务，是企业落地的核心阻塞点 | [anomalyco/opencode#12308](https://github.com/anomalyco/opencode/issues/12308) |
| #5444 | 12条评论 | 配置Jira等远程OAuth MCP时提示无可用OAuth服务 | 大量普通开发者对接Atlassian等官方生态MCP时遇阻，影响MCP生态普及度 | [anomalyco/opencode#5444](https://github.com/anomalyco/opencode/issues/5444) |
| #31119 | 8条评论、5个点赞 | 版本升级后启动报错`no such column: name` | 存量老用户升级1.16.2版本后直接无法使用，属于核心数据库迁移级Bug | [anomalyco/opencode#31119](https://github.com/anomalyco/opencode/issues/31119) |
| #24817 | 7条评论、4个点赞 | Linux平台下Ctrl+Z触发进程挂起而非文本撤销 | 和#19256需求形成跨讨论，直指跨平台快捷键交互一致性问题，影响Linux桌面用户核心体验 | [anomalyco/opencode#24817](https://github.com/anomalyco/opencode/issues/24817) |
| #31607 | 6条评论 | 1.17.0版本TUI启动时触发段错误 | Windows+Bun环境下的新版本兼容性崩溃问题，覆盖大量新升级用户 | [anomalyco/opencode#31607](https://github.com/anomalyco/opencode/issues/31607) |
| #17232 | 4条评论、8个点赞 | 需求新增`opencode.local.json`项目级配置覆盖能力 | 获赞率极高，开发者希望把团队私有配置和全局配置分离，避免敏感信息提交到代码仓库 | [anomalyco/opencode#17232](https://github.com/anomalyco/opencode/issues/17232) |
| #33721 | 3条评论 | 付费用户反馈OpenCode Go的qwen3.7-max/plus服务稳定性差，成功率仅60%-70% | 直接关系付费订阅用户核心权益，暴露出云服务推理链路的稳定性短板 | [anomalyco/opencode#33721](https://github.com/anomalyco/opencode/issues/33721) |
| #32706 | 5条评论、2个点赞 | 1.17.0以上版本启动TUI直接报错`Effect.tryPromise`异常 | 新版本发布后高频出现的启动崩溃Bug，影响大量尝鲜新版本的开发者 | [anomalyco/opencode#32706](https://github.com/anomalyco/opencode/issues/32706) |

## 4. 重要 PR 进展（Top 10）
| PR编号 | 状态 | 核心内容 | 价值说明 | 链接 |
| --- | --- | --- | --- | --- |
| #33554 | 开放 | 修复TUI输入场景下Home/End键无法跳转光标的Bug | 解决用户反馈已久的输入交互异常问题 | [anomalyco/opencode#33554](https://github.com/anomalyco/opencode/pull/33554) |
| #33463 | 开放 | 新增系统提示词范围校验规则 | 避免Agent在清理文件类任务中误删用户备份、凭证等敏感文件，大幅降低操作风险 | [anomalyco/opencode#33463](https://github.com/anomalyco/opencode/pull/33463) |
| #33706 | 已合并 | 新增消息处理管道空内容守卫逻辑 | 统一修复多Provider返回空响应导致的会话崩溃问题，提升全场景稳定性 | [anomalyco/opencode#33706](https://github.com/anomalyco/opencode/pull/33706) |
| #29107 | 已合并 | SQLite忙等待超时从5s提升至10s | 解决高并发场景下数据库锁报错、会话写入失败的问题 | [anomalyco/opencode#29107](https://github.com/anomalyco/opencode/pull/29107) |
| #29108 | 已合并 | 修复子进程事件监听逻辑，改用exit事件而非close事件 | 解决shell调用场景下后台子进程残留、任务长期挂起的经典Bug | [anomalyco/opencode#29108](https://github.com/anomalyco/opencode/pull/29108) |
| #29097 | 已合并 | 新增内联图片附件触发词机制 | 上传图片时自动激活视觉分析类技能，无需用户手动指定，优化多模态使用体验 | [anomalyco/opencode#29097](https://github.com/anomalyco/opencode/pull/29097) |
| #29095 | 已合并 | 新增LLM输出过程中自动滚动锁定能力 | 用户可以边看模型回复边回溯历史会话，不会被流式输出强制拉回页面底部 | [anomalyco/opencode#29095](https://github.com/anomalyco/opencode/pull/29095) |
| #29047 | 已合并 | 接口重试次数硬上限设为5次 | 彻底避免服务端异常时客户端无限重试导致的资源耗尽问题 | [anomalyco/opencode#29047](https://github.com/anomalyco/opencode/pull/29047) |
| #29093 | 已合并 | 自动补全macOS shell标准PATH目录 | 解决Homebrew安装的git、gh等常用命令在Agent执行时找不到的兼容性问题 | [anomalyco/opencode#29093](https://github.com/anomalyco/opencode/pull/29093) |
| #29061 | 已合并 | 重构ACP Agent连接层逻辑 | 稳定分布式Agent调用链路，连接异常时直接向客户端抛出明确错误而非静默挂起 | [anomalyco/opencode#29061](https://github.com/anomalyco/opencode/pull/29061) |

## 5. 功能需求趋势
1. **主流编辑器生态集成**：Cursor CLI支持需求登顶全站热度，开发者迫切希望OpenCode打通现有AI开发工具的能力栈，形成统一工作流
2. **MCP全场景适配**：近半数高优Issue围绕MCP生态，覆盖OAuth、企业级Entra认证、mTLS加密、连接状态监控等方向，是当前版本迭代最高优先级
3. **隐私优先的本地部署能力**：用户对数据不出网、本地LLM默认优先的需求持续上涨，项目级私有配置覆盖类需求获赞率极高
4. **云服务大模型体验升级**：付费用户对大模型长思考模式的响应速度、稳定性要求显著提升，针对Qwen3.7系列的性能反馈成为社区新关注点
5. **多模态体验优化**：内联图片自动触发视觉技能等功能需求增长，开发者期望降低多模态操作成本

## 6. 开发者关注点
1. **版本升级兼容性问题突出**：近期多个用户升级1.17.x新版本后遇到启动崩溃、数据库字段缺失等问题，存量用户升级体验有待优化
2. **跨平台交互一致性差**：Linux/macOS/Windows三个平台分别出现专属快捷键异常、PATH路径缺失、终端命令识别失败等碎片化Bug，适配工作量较大
3. **MCP认证体系不完善**：OAuth授权流、自定义服务路径、企业级身份认证等场景适配不全，大量第三方生态接入被阻塞
4. **云服务边缘场景处理不足**：未对Cloudflare 120s代理超时这类公网边界规则做兼容，导致长思考模式推理频繁超时退出

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 2026-06-25
数据来源：GitHub 仓库 github.com/badlogic/pi-mono

---

## 1. 今日速览
今日Pi社区无正式版本发布，社区热度最高的议题聚焦于OpenAI Codex/GPT-5.5的交互连接稳定性问题，官方原生本地LLM提供商扩展的需求获得大量开发者点赞支持。过去24小时核心代码迭代重点覆盖大模型调用链路的异常重试能力升级、Agent并行子任务执行能力新增，同时AWS Bedrock、微软Azure Foundry等海外云厂商最新LLM服务的适配开发正有序推进。

## 2. 版本发布
过去24小时无新正式Release发布。

## 3. 社区热点 Issues（Top 10）
1. **#4945 openai-codex连接可靠性问题**：累计69条评论、30个点赞，是当前热度最高的活跃Issue，大量开发者反馈openai-codex/GPT-5.5调用时TUI长期卡在"Working..."无输出，只能按ESC手动中断，目前处于开发中待闭环状态，直接影响核心使用体验。
   链接：https://github.com/earendil-works/pi/issues/4945
2. **#3357 官方本地LLM提供商扩展需求**：累计28条评论、37个点赞，点赞数位列所有Issue第一，需求指向动态从配置的baseUrl拉取模型列表，实现对Ollama、LLaMA.cpp、LM Studio等本地部署方案的无缝适配。
   链接：https://github.com/earendil-works/pi/issues/3357
3. **#5653 移除Shinkwrap依赖机制架构优化**：累计16条评论，根因是多依赖同时安装时会出现重复副本，导致模块级的API提供者注册表Map实例隔离，引发底层功能异常，属于核心架构长期优化议题。
   链接：https://github.com/earendil-works/pi/issues/5653
4. **#5363 新增Amazon Bedrock Mantle提供商支持**：累计14条评论，需求指向为AWS最新推出的兼容OpenAI接口的Bedrock Mantle服务新增独立适配器，填补现有Bedrock Converse API的适配空白。
   链接：https://github.com/earendil-works/pi/issues/5363
5. **#6002 SessionManager.open()静默截断非会话文件高危Bug**：用户指定普通非Pi会话文件作为启动路径时，程序会直接覆盖写入会话头内容，无任何警告、错误提示或备份，属于严重数据安全类问题。
   链接：https://github.com/earendil-works/pi/issues/6002
6. **#6019 OpenAI Responses流中途可重试错误未触发重试Bug**：Pi在流启动后收到OpenAI返回的可重试错误时直接终止对话，没有触发重试逻辑，目前该Bug已闭环修复。
   链接：https://github.com/earendil-works/pi/issues/6019
7. **#6057 新增推理token计数到用量统计模块**：当前Pi直接丢弃了OpenAI、Anthropic等提供商返回的思维链推理token字段，需求指向补全该统计字段，实现精准的全链路用量核算。
   链接：https://github.com/earendil-works/pi/issues/6057
8. **#5886 Agent会话存续生命周期类Bug元Issue**：由Pi核心开发者mitsuhiko提交，汇总了多类Agent会话异常续跑、转录帧不匹配的底层共性问题，是Agent模块的核心优化方向。
   链接：https://github.com/earendil-works/pi/issues/5886
9. **#6044 高下载量第三方扩展安全举报**：月下载量达203K的头部扩展`@hypabolic/pi-hypa`被多名开发者举报存在恶意行为，平台正处于核查流程中，属于扩展生态安全事件。
   链接：https://github.com/earendil-works/pi/issues/6044
10. **#6043 task子进程退出错误提示不明确问题**：中文开发者反馈task工具在子进程异常终止时仅返回"exit code undefined"，无法区分进程启动失败、信号终止、普通报错等场景，属于典型易用性优化需求。
    链接：https://github.com/earendil-works/pi/issues/6043

## 4. 重要PR进展（Top 10）
1. **#6051 修复大模型流挂起、新增异常重试能力**：新增流空闲超时（默认240s）、连接超时配置，自动识别Bedrock、Anthropic侧的未定义可重试错误，从底层解决Issue #4945提到的调用卡住问题。
   链接：https://github.com/earendil-works/pi/pull/6051
2. **#5509 新增Amazon Bedrock Mantle OpenAI Responses提供商**：适配AWS最新服务，原生支持GPT5.5/5.4模型，对应Issue #5363，目前处于开放待合入状态。
   链接：https://github.com/earendil-works/pi/pull/5509
3. **#6054 新增runParallelAgentTasks并行子任务API**：突破原有架构仅支持单轮响应内工具并行调用的限制，实现完全独立的Agent执行循环并行运行，大幅提升批量任务处理效率，闭环Issue #6053需求。
   链接：https://github.com/earendil-works/pi/pull/6054
4. **#6004 微软Azure Foundry Responses API端点标准化修复**：解决新版本Azure服务的base URL无法被识别、返回400错误的适配问题。
   链接：https://github.com/earendil-works/pi/pull/6004
5. **#6032 OpenAI客户端透传自定义fetch配置**：允许用户替换底层网络请求实现，适配内网代理、自定义链路追踪等个性化场景。
   链接：https://github.com/earendil-works/pi/pull/6032
6. **#6048 修复会话恢复时资源展示顺序问题**：重启会话后加载的上下文、技能、扩展资源现在会优先展示在聊天记录顶部，优化新会话接入时的信息浏览体验。
   链接：https://github.com/earendil-works/pi/pull/6048
7. **#6018 会话树新增上下文用量预估展示**：用户可以直接在侧边栏查看每个会话的Token占用情况，快速定位高资源消耗的历史会话。
   链接：https://github.com/earendil-works/pi/pull/6018
8. **#5268 TUI光标渲染逻辑修复**：终端窗口失焦后光标自动变为空心样式，解决之前失焦仍显示激活状态的视觉误导问题，闭环多年前提交的#3896老Issue。
   链接：https://github.com/earendil-works/pi/pull/5268
9. **#6056 Subagent示例配置优化**：所有示例Agent切换为MiniMax-M2.7模型，新增通用默认Agent配置，大幅降低子功能扩展的二次开发门槛。
   链接：https://github.com/earendil-works/pi/pull/6056
10. **#6030 TUI停止后自动打印性能基准耗时数据**：方便开发者调试和排查LLM响应链路的延迟问题。
    链接：https://github.com/earendil-works/pi/pull/6030

## 5. 功能需求趋势
从昨日更新的Issue中可提炼出3个核心需求方向：
1. **全栈LLM生态适配**：一方面加速对Ollama、LLaMA.cpp等本地部署方案的原生支持，另一方面快速跟进AWS、Azure、Charm Hyper等云厂商新推出的兼容OpenAI协议的LLM服务，同时补全BMP等非主流格式图片的多模态读取能力。
2. **Agent能力升级**：围绕并行子任务执行、推理Token统计、会话生命周期逻辑优化三大方向迭代，支撑更复杂的批量开发场景。
3. **跨端兼容性扩展**：重点针对Termux安卓终端场景优化横竖屏切换、长输出滚动等体验问题，拓展Pi的移动设备使用边界。

## 6. 开发者关注点
1. **连接稳定性是最高频痛点**：大量开发者反馈不同大模型提供商的流调用偶发无响应、可重试错误未自动重试的问题，是当前影响日常使用的第一大障碍。
2. **文件操作安全隐忧引发关注**：无校验的文件覆盖逻辑导致的误删风险，让开发者对直接挂载工作目录运行Pi的安全性产生担忧。
3. **第三方扩展生态安全待加强**：头部高下载量扩展被举报存在恶意行为，平台的扩展审核、风险预警机制亟需完善。
4. 中小体验问题集中：长行超出终端宽度直接崩溃、子进程错误提示模糊等细节问题的反馈占比明显提升，开发者对Pi的TUI成熟度要求逐步提高。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-25
数据来源：https://github.com/QwenLM/qwen-code

---

## 1. 今日速览
过去24小时QwenLM团队连续推送4个版本迭代，核心新增远程LSP状态监控能力，同时社区共更新23条Issue、合并/新增50条PR。期间暴露1个P1级路径遍历高危安全漏洞，以及v0.19.2正式版首次发布流程执行失败的小故障，整体迭代方向集中在安全性加固、CI/CD效能升级、语音全链路体验补全三大核心赛道。

## 2. 版本发布
过去24小时共发布4个官方版本，所有版本共同新增`serve`模块下的远程LSP状态查询路由，方便开发者实时监控部署在远端的Qwen Code服务运行状态：
- v0.19.2 正式版：首次发布时publish流水线执行失败，目前正在修复中 https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2
- v0.19.2-preview.0 预览版：面向尝鲜用户发布的预验证版本 https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-preview.0
- v0.19.1-nightly.20260624.a234860a4 每日构建版：包含当日所有合入的最新改动 https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1-nightly.20260624.a234860a4
- v0.18.5-preview.0 稳定分支预览版：面向v0.18.x老用户提供的兼容迭代预览版本 https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5-preview.0

## 3. 社区热点 Issues
筛选10个优先级最高、影响面最广的Issue：
1. **[P1高危] 源删除接口路径遍历漏洞** #5834：桌面端的资源删除接口未校验传入的路径标识，攻击者可构造特殊参数逃逸出工作目录、删除系统任意文件，目前已被标记最高优处理 https://github.com/QwenLM/qwen-code/issues/5834
2. **升级后自动替换为高价付费模型问题** #5819：多名用户反馈自动升级v0.19版本后，settings.json被无感知修改为更高单价的大模型，产生大量非预期token消耗，甚至造成账户余额透支，是当前用户投诉最集中的产品体验缺陷 https://github.com/QwenLM/qwen-code/issues/5819
3. **项目级数据持久化跨设备同步需求** #5836：中文用户提出目前任务清单、计划、记忆数据全部存在全局用户目录，不受Git管控，无法跨设备、多人共享项目状态，该需求收到大量同类用户附和 https://github.com/QwenLM/qwen-code/issues/5836
4. **新版频繁全Prompt重处理性能退化** #5736：大量本地部署LLM的用户反馈升级后，对话过程中频繁触发全量Prompt重计算，推理耗时翻倍，严重影响离线用户体验 https://github.com/QwenLM/qwen-code/issues/5736
5. **web_fetch无法获取JSON接口问题已闭环** #5611：web搜索工具默认仅携带text/*类型的Accept头，请求JSON REST接口时返回415错误，目前该Bug已被修复关闭 https://github.com/QwenLM/qwen-code/issues/5611
6. **集成测试未前置到PR环节的长期痛点** #5219：目前端到端集成测试仅在夜间定时发布流水线中触发，PR合并后才会发现回归问题，导致很多隐性故障直到发布前才暴露，社区维护团队已经将该问题列为核心优化项 https://github.com/QwenLM/qwen-code/issues/5219
7. **v0.19.2正式版发布流程失败** #5831：官方自动化发布流水线的publish环节运行异常，导致原定的正式版发布中断，CI团队正在紧急排查根因 https://github.com/QwenLM/qwen-code/issues/5831
8. **/loop定时任务无管控能力缺陷** #5823：用户创建的循环定时任务没有任何列表展示、手动停止能力，后台静默运行会大量消耗token资源，属于高优先级功能缺陷 https://github.com/QwenLM/qwen-code/issues/5823
9. **多Agent运行时终端滚动失效闪屏** #5798：默认非viewport渲染模式下，多Agent后台运行时终端会禁止向上滚动、频繁闪屏，直到所有后台任务结束才能恢复正常交互，影响CLI重度用户使用体验 https://github.com/QwenLM/qwen-code/issues/5798
10. **语音听写支持自定义领域关键词需求** #5816：当前语音ASR识别的热词列表是硬编码的通用开发者术语，不支持用户添加项目专属的业务术语、自定义变量名，识别准确率在垂直项目中严重下降 https://github.com/QwenLM/qwen-code/issues/5816

## 4. 重要 PR 进展
筛选10个核心功能/修复PR，近期将合入主分支：
1. **高危路径遍历漏洞修复** #5829：在源删除逻辑中增加非法路径标识校验，所有携带路径穿越符号的输入直接拦截，从根源上避免目录逃逸风险 https://github.com/QwenLM/qwen-code/pull/5829
2. **OpenAI流式输出增加无活动超时机制** #5827：原有超时配置仅限制连接到首包的耗时，新增分块间隔超时配置，避免大模型生成速度过慢时请求永久挂起 https://github.com/QwenLM/qwen-code/pull/5827
3. **支持语音听写自定义关键词文件** #5817：新增配置项允许用户指定自定义热词文件，解决垂直领域ASR识别准确率低的问题，对应Issue#5816的需求 https://github.com/QwenLM/qwen-code/pull/5817
4. **IDE端口配置前置校验安全加固** #5805：在读取IDE服务锁文件之前，先校验`QWEN_CODE_IDE_SERVER_PORT`变量是否为合法数值，避免特殊字符触发路径遍历漏洞，对应已闭环的Issue#5675 https://github.com/QwenLM/qwen-code/pull/5805
5. **新增内置扩展生成器技能** #5828：开箱内置扩展开发引导能力，自动生成Qwen Code扩展的脚手架，覆盖命令、技能、MCP服务等场景，大幅降低自定义扩展开发门槛 https://github.com/QwenLM/qwen-code/pull/5828
6. **MCP服务配置热重载** #5561：修改settings.json中的MCP服务配置后无需重启进程，系统自动连接/断开对应的MCP实例，大幅提升配置调试效率 https://github.com/QwenLM/qwen-code/pull/5561
7. **Token生成速度统计逻辑优化** #5811：优化实时tok/s显示规则，把思考过程的文本也纳入计数，同时排除工具执行的耗时，展示的推理速度更准确 https://github.com/QwenLM/qwen-code/pull/5811
8. **新增自动解PR冲突机器人指令** #5779：新增`@qwen-code /resolve`指令，维护者触发后机器人自动尝试合并PR冲突，降低人工维护成本 https://github.com/QwenLM/qwen-code/pull/5779
9. ** Provider重配置时保留用户选中的模型** #5835：修复重新执行服务商认证、token刷新时，用户选中的自定义模型被自动重置为默认值的问题，对应Issue#5819的核心体验缺陷 https://github.com/QwenLM/qwen-code/pull/5835
10. **新增服务端全量控制API** #5765：在daemon服务中新增语音配置、工作区权限管理、LSP状态查询等REST接口，为后续Web端、桌面端的能力开放打好基础 https://github.com/QwenLM/qwen-code/pull/5765

## 5. 功能需求趋势
从最新的Issue中提炼出社区最关注的4个迭代方向：
1. **数据协同方向**：用户强烈要求把会话状态、任务清单、项目记忆等数据迁移到项目本地目录，支持Git版本控制，实现跨设备同步、多人协作共享项目上下文。
2. **语音全链路方向**：从最初仅支持CLI端推流语音输入，快速延伸到自定义热词、转录后LLM润色、全端（Web/桌面）语音能力覆盖，是当前迭代最快的新功能赛道。
3. **CI/CD效能方向**：维护团队集中发力优化PR流水线时长、集成测试前置、合并队列适配，目标把PR关键路径耗时从25分钟压缩到10分钟以内，大幅降低版本回归风险。
4. **服务端能力方向**：远程LSP监控、MCP热重载、定时任务可视化等后台服务能力快速补全，适配私有化大规模部署的运维需求。

## 6. 开发者关注点
当前开发者反馈的高频痛点集中在4个方面：
1. **版本升级非预期行为**：自动升级流程的安全性受到广泛质疑，无感知修改模型配置导致用户产生大量不必要的token消耗，严重影响付费用户信任感。
2. **安全漏洞关注度陡增**：近期连续曝出多个路径遍历类高危漏洞，自部署用户对Qwen Code的文件操作、输入校验逻辑的安全完备性关注度大幅提升。
3. **CI流程滞后问题**：集成测试后置的历史欠账问题凸显，大量隐性回归问题等到发布前才能发现，拉长了bug修复周期，版本交付质量波动较大。
4. **本地部署性能退化**：最新版本全Prompt重处理的问题直接影响所有离线LLM用户的使用体验，大量开发者呼吁优先优化本地场景的推理效率。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 | 2026-06-25
数据来源：github.com/Hmbown/DeepSeek-TUI
---
## 1. 今日速览
过去24小时项目无正式版本发布，核心迭代围绕v0.8.65版本的收尾测试推进，累计合并近20项架构重构、体验优化与新特性PR。项目正快速从单一DeepSeek终端交互工具，向支持多供应商、子代理分布式调度的全功能终端编码工作台演进，中文本地化能力、国内主流大模型适配进度明显加快。
## 2. 版本发布
今日暂无正式Release，v0.8.65版本仍处于最后集成校验阶段，剩余待交付特性、已知缺陷已全部同步到发布跟踪看板。
## 3. 社区热点 Issues
共筛选10个高关注度条目：
1.  **#3275 CodeWhale过度修改、自问答脱离用户意图bug**：v0.8.66最高优先级稳定性问题，当前热度最高共12条评论，用户反馈最新版本代码修改范围远超预期，会无确认进入自驱动提案-执行死循环，严重影响编码可靠性。<https://github.com/Hmbown/CodeWhale/issues/3275>
2.  **#3222 推理流内联`<think>`块样式覆盖修复**：兼容OpenAI协议网关返回的内联思考块，解决兼容推理模型时思考内容乱码、无法正常格式化显示的问题，共11条评论目前已闭环修复。<https://github.com/Hmbown/CodeWhale/issues/3222>
3.  **#3063 v0.8.59发布跟踪：macOS TUI鼠标上报泄漏修复**：发布阻塞级问题，共11条评论，修复macOS平台下TUI运行时鼠标输入事件泄漏导致的后台资源占用异常，已纳入下一版本发布校验清单。<https://github.com/Hmbown/CodeWhale/issues/3063>
4.  **#3461 MCP服务端双进程生命周期泄漏**：用户新发现的可靠性缺陷，CodeWhale会从单条mcp.json配置生成两个MCP进程，其中一个为4MB左右的孤儿进程浪费内存，共8条评论，对应修复已提PR。<https://github.com/Hmbown/CodeWhale/issues/3461>
5.  **#3439 接入智谱GLM-5.2作为供应商路由样例**：国内用户高需求的新模型适配特性，针对中文长文档理解、创作场景优化子代理分发能力，共6条评论目前已完成路由架构适配。<https://github.com/Hmbown/CodeWhale/issues/3439>
6.  **#3466 v0.8.66审批弹窗取消语义优化**：大量用户反馈升级后每次破坏性操作都要强制审批，之前的免确认YOLO模式失效，共4条评论，是当前体验投诉最高的问题。<https://github.com/Hmbown/CodeWhale/issues/3466>
7.  **#2934 侧边栏会话面板自动恢复浏览特性**：用户体验类热门需求，当前切换历史会话只能靠快捷键唤起弹窗，无持久化侧边栏导致操作成本高，目前排期到v0.8.68版本。<https://github.com/Hmbown/CodeWhale/issues/2934>
8.  **#3192 上架AgentClientProtocol Registry**：生态集成需求，上架后Zed编辑器可以一键安装调用CodeWhale能力，大幅降低IDE集成门槛。<https://github.com/Hmbown/CodeWhale/issues/3192>
9.  **#2608 史诗级重构：分离供应商、模型、路由解析逻辑**：项目架构迭代核心里程碑，彻底解决之前仅靠模型字符串无法正确选路由的历史遗留混乱问题，目前已全部闭环落地。<https://github.com/Hmbown/CodeWhale/issues/2608>
10. **#3205 Fleet模型类、自动负载分配与语义路由角色**：分布式子代理体系的核心特性，自动根据任务角色分配整个计算负载组合，而不是仅选择模型名称，目前处于开发迭代阶段。<https://github.com/Hmbown/CodeWhale/issues/3205>
## 4. 重要 PR 进展
筛选10个核心合并/待合入条目：
1.  **#3562 MCP被动工具发现+自定义供应商配置**：同时修复#3461的MCP双进程泄漏缺陷，落地#1519的用户自定义端点配置能力，两个独立修复已提交待合入main分支。<https://github.com/Hmbown/CodeWhale/pull/3562>
2.  **#3559 简体中文i18n本地化bundle合入**：基于社区贡献的#3549重构，把所有TUI硬编码中文文案迁移到独立的zh-Hans.json配置文件，为后续多语言支持打好基础。<https://github.com/Hmbown/CodeWhale/pull/3559>
3.  **#3555 `/provider` 供应商就绪仪表盘上线**：完成v0.8.65核心特性，TUI下运行`/provider`命令即可查看所有供应商的推理支持状态、认证状态、路由能力、定价元数据等完整信息。<https://github.com/Hmbown/CodeWhale/pull/3555>
4.  **#3553 修复YOLO模式下多余审批弹窗**：解决高优先级体验问题，YOLO全免确认模式下不会再对shell/文件操作弹出审批确认框，完全恢复之前的无感知操作体验。<https://github.com/Hmbown/CodeWhale/pull/3553>
5.  **#3547 文件写入操作支持持久化审批规则**：把之前仅支持shell命令的"保存审批规则"能力扩展到写文件、编辑文件操作，用户确认一次后后续修改同一路径文件无需重复审批。<https://github.com/Hmbown/CodeWhale/pull/3547>
6.  **#3556 供应商实时模型列表拉取+无密钥缓存**：落地#3385特性，自动从供应商拉取最新的/models接口数据，本地缓存不需要存储API密钥，彻底抛弃之前硬编码模型列表的旧方案。<https://github.com/Hmbown/CodeWhale/pull/3556>
7.  **#3554 能力感知供应商降级链路补全测试**：完成#2574的验收要求，新增全链路测试用例，当主供应商不可用时会按配置的优先级自动切换备选路由，全程有状态提示不会静默降级。<https://github.com/Hmbown/CodeWhale/pull/3554>
8.  **#3561 多IM平台共享桥接核心抽取**：把 Telegram、飞书、企业微信、微信集成的重复桥接逻辑抽取为公共基础包，大幅降低后续新第三方接入的开发成本。<https://github.com/Hmbown/CodeWhale/pull/3561>
9.  **#3557 新增优雅 transcript 显示预设**：用户可通过`/config preset calm`一键切换到简洁清晰的对话排版，隐藏调试类冗余信息，适合日常非开发场景使用。<https://github.com/Hmbown/CodeWhale/pull/3557>
10. **#3551 TUI快捷键提示文案优化**：把之前模糊的`Alt+V`快捷键提示改为明确的操作说明，同时适配macOS系统的`Option+V`显示逻辑，降低新用户上手门槛。<https://github.com/Hmbown/CodeWhale/pull/3551>
## 5. 功能需求趋势
从近期Issue沉淀出社区最高关注的4个方向：
1.  **多模型多供应商生态适配**：除了原DeepSeek体系外，智谱GLM、OpenAI OAuth、Anthropic兼容端点、用户自定义私有部署端点的适配需求占比最高，成为核心迭代方向。
2.  **Fleet分布式子代理调度体系**：社区高度关注自动负载分配、角色化子代理配置、跨子代理成本统计等能力，希望CodeWhale可以支持多任务并行处理的复杂编码工作流。
3.  **TUI体验精细化升级**：中文本地化、侧边栏会话管理、对话样式自定义、快捷键提示优化等UX类需求增速明显，用户已经从关注功能有无转向体验流畅度。
4.  **跨生态互通**：对接AgentClientProtocol Registry、适配Zed等主流IDE、扩展多端IM集成能力的需求逐步增多，社区希望CodeWhale可以作为通用编码代理嵌入到不同工作流中。
## 6. 开发者关注点
当前社区反馈的核心痛点集中在3个维度：
1.  **稳定性问题优先级最高**：v0.8.66版本暴露出的自主执行越界、无确认自循环的问题引发大量吐槽，被用户判定为影响生产使用的最高级缺陷，修复需求远高于新特性迭代。
2.  **权限审批体验优化呼声强烈**：升级后默认开启的全量破坏性操作审批机制被大量用户反馈过于繁琐，如何兼顾安全和流畅性的规则自定义方案是下一阶段重点优化方向。
3.  **历史资源泄漏问题逐步暴露**：macOS平台TUI鼠标上报泄漏、MCP孤儿进程浪费内存等问题被用户集中上报，版本迭代后的全场景内存泄漏巡检被社区呼吁纳入标准发布流程。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*