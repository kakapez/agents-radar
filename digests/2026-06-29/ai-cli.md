# AI CLI 工具社区动态日报 2026-06-29

> 生成时间: 2026-06-28 23:02 UTC | 覆盖工具: 9 个

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

# 2026-06-29 主流AI CLI工具横向对比分析报告
## 1. 生态全景
当前AI CLI赛道已全面脱离早期原型验证阶段，整体迭代重心从“功能有无”转向“体验深度、可靠性、生态扩展性”三维度升级。MCP（模型上下文协议）已经成为全行业共识的生态标准，头部工具均完成核心链路适配，第三方插件生态进入爆发期。付费用户群体规模快速扩张，计费透明化、非预期资源消耗熔断、操作可审计等诉求的占比首次超过纯功能需求，成为决定产品口碑的核心变量。赛道分层格局逐步清晰：大厂背景工具主打全端体验一致性和商业服务支撑，开源小众工具走细分场景特性突破路线，面向二次开发的开放API、SDK能力增速明显。
## 2. 各工具活跃度对比
| 工具名称 | 过去24小时更新Issues数 | 过去24小时更新/合并PR数 | 过去24小时发布正式版本数 | 备注 |
|---------|------------------------|------------------------|--------------------------|------|
| Claude Code | 50（含10条高优反馈） | 5 | 0 | 存量问题闭环为主，生态插件PR活跃 |
| OpenAI Codex | 超2000（含10条高优反馈，费率相关Issue累计近千条反馈） | 10 | 1（灰度Alpha版） | 集中修复费率统计核心bug |
| Gemini CLI | 超60（含10条高优反馈） | 10 | 1（夜间构建版） | 安全漏洞封堵优先级最高 |
| GitHub Copilot CLI | 7 | 1 | 0 | 整体迭代节奏平稳 |
| Kimi Code CLI | 2 | 0 | 0 | 存量高频bug待修复 |
| OpenCode | 超30（含10条高优反馈） | 10 | 0 | 集中合并20+积压PR，新特性集中落地 |
| Pi | 超40（含10条高优反馈） | 10 | 0 | Context Matrix核心特性推进中 |
| Qwen Code | 超70（含10条高优反馈） | 10 | 2（1个正式稳定版+1个预览版） | 迭代速度最快，单日双发版本 |
| DeepSeek TUI | 超40（含10条高优反馈） | 20 | 0 | 全力攻坚缓存命中率优化 |
## 3. 共同关注的功能方向
1. **资源用量透明化与成本管控**：覆盖Claude Code、OpenAI Codex、Qwen Code、DeepSeek TUI 4款头部工具：Codex在推进费率明细接口、额度过期时间展示；Qwen Code新增僵尸会话自动切断、自定义低成本压缩模型能力；DeepSeek TUI上线分路由缓存命中率统计面板；Claude Code新增请求体体积、沙箱剩余空间实时提示，所有工具近期均收到多起用户反馈的非预期Token消耗、误扣费投诉，成本管控成为核心刚需。
2. **MCP生态兼容性迭代**：覆盖OpenAI Codex、Claude Code、Gemini CLI、DeepSeek TUI 4款工具：Codex正式将远程MCP插件从实验特性转正；Claude Code推出基于Cedar引擎的MCP调用权限管控插件；Gemini CLI集中修复MCP图片格式嗅探、OAuth授权失效bug；DeepSeek TUI完成MCP三类传输逻辑的模块化重构，MCP已从差异化特性变为行业标配。
3. **全链路安全加固**：覆盖Gemini CLI、Codex、OpenCode、Claude Code 4款工具：Gemini CLI先后完成SSRF绕过封堵、敏感路径大小写不敏感校验；Codex上线`.codexignore`敏感文件排除需求，全站点赞量已达447；OpenCode新增全局通配符敏感配置文件读取拒绝规则；Claude Code落地MCP调用全链路审计凭证生成能力，开发者对本地代理操作敏感文件的安全风险感知显著提升。
4. **跨环境体验一致性优化**：所有9款工具近期均收到Windows平台独有bug反馈，重点修复沙箱异常、命令行解析错误、非拉丁字符渲染乱码等共性问题，同时逐步适配Wayland、FreeBSD等小众桌面/服务端运行环境。
## 4. 差异化定位分析
| 工具名称 | 功能侧重 | 目标用户 | 技术路线特色 |
|---------|----------|----------|--------------|
| Claude Code | 高阶MCP权限管控、跨LLM会话接力 | 付费资深开发者、企业级用户 | 基于Cedar策略引擎做细粒度操作审计，主打合规场景 |
| OpenAI Codex | 用量透明化、写入操作分级审批 | 海量C端付费开发者 | 深度绑定GPT-5.5能力，优先保障大众用户的付费权益体验 |
| Gemini CLI | 子代理稳定性、全链路安全漏洞封堵 | 对安全要求高的企业开发团队 | 适配Gemini 3原生Bash操作偏好，打造零依赖操作系统沙箱 |
| GitHub Copilot CLI | 多会话管理、企业内网代理兼容 | GitHub生态付费企业用户 | 深度打通GitHub账号体系、仓库元数据，迭代节奏稳健保守 |
| Kimi Code CLI | 多自定义端点兼容、大项目低内存占用 | 中文区对接私有大模型的开发者 | 开放第三方模型自定义接入能力，优先适配国内开发者使用习惯 |
| OpenCode | 第三方工具生态集成、可编程扩展 | 希望搭建自有编码Agent平台的开发者 | 开放Python SDK、会话生命周期钩子，打造通用Agent调度底层 |
| Pi | 极致TUI交互体验、多推理平台接入 | 重度CLI极客用户 | 重点推进Context Matrix核心特性，TUI自定义自由度全行业最高 |
| Qwen Code | 断点续跑、自托管场景适配 | 国内私有化部署大模型的团队 | 迭代速度极快，开放私有部署全链路适配能力 |
| DeepSeek TUI | 缓存命中率优化、极致使用成本管控 | 高频率重度编码用户 | 全栈针对DeepSeek系列模型优化，主打高性价比低使用成本 |
## 5. 社区热度与成熟度
- **第一梯队（高成熟度高活跃度）**：OpenAI Codex、Claude Code、Qwen Code、DeepSeek TUI：Codex因Gpt-5.5费率异常事件累计收到近千条用户反馈，为当前全赛道热度最高；Claude Code生态插件迭代活跃，高阶开发需求反馈集中；Qwen Code、DeepSeek TUI日均合并PR数量超10条，新特性落地速度领先全行业。
- **第二梯队（快速迭代阶段）**：OpenCode、Pi、Gemini CLI：三款工具近期均集中合入20+积压PR，核心新特性（Python SDK、Context Matrix、子代理稳定性优化）正按里程碑快速落地，生态活跃度处于快速上升期。
- **第三梯队（稳速迭代阶段）**：GitHub Copilot CLI、Kimi Code CLI：社区更新量偏低，新特性推进速度慢，迭代重心以存量高频bug修复为主，整体节奏偏保守。
## 6. 值得关注的趋势信号
1. MCP（模型上下文协议）已经正式成为行业事实标准，所有头部AI CLI工具均完成核心链路适配，开发者后续基于MCP开发的通用插件无需针对多工具单独适配，可大幅降低扩展开发成本。
2. 计费透明化、非预期Token消耗熔断即将成为AI CLI产品的标配能力，当前已有多起用户反馈的僵尸会话误消耗数十万到数千万Token的真实损失案例，付费开发者选型时可重点关注相关能力，避免不必要的资产损失。
3. 开源AI CLI工具的特性领先性已经显著超过大厂闭源产品，Python SDK、自定义推理模型接入、完全私有化部署等能力均为开源工具独有，有搭建内部专属编码工作流需求的企业可优先选择开源方案，灵活度远高于闭源商业产品。
4. AI Agent的自主操作权限正在从“完全放开”转向“细粒度管控”，全链路操作可审计、敏感文件白名单、低风险操作免确认等能力快速普及，开发者后续使用AI CLI处理生产级代码时，优先选择带分级审批能力的工具，可大幅降低AI误操作引发生产事故的概率。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-06-29）
---
## 1. 热门 Skills 排行（按关联社区反馈热度排序）
共筛选7个关注度最高的PR类技能条目：
| 技能名称 | 核心功能 | 社区讨论热点 | 当前状态 | 链接 |
| --- | --- | --- | --- | --- |
| 修复skill-creator run_eval评估链路bug | 彻底修复技能评估脚本逻辑，将原本返回随机噪音的评估模块改为可准确计算技能触发召回率/准确率，同步解决Windows流读取、触发器检测、并行Worker多类兼容问题 | 关联高优Issue #556，超10位开发者独立复现该bug，导致所有技能描述优化循环完全失效，是当前技能开发工具链最高优先级阻塞问题 | OPEN | [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298) |
| document-typography文档排版质控 | 自动检测并修复AI生成文档的通用排版瑕疵，包括孤行溢出、页眉悬浮、编号错位等人工难排查的格式问题 | 覆盖Claude生成文档全场景通用痛点，用户产出的绝大多数正式文档都存在该类问题，此前无官方成熟解决方案 | OPEN | [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514) |
| ODT开源办公文档处理 | 支持全流程读写、生成、模板填充、格式转换ODT/ODS等OpenDocument标准格式文件，完全适配LibreOffice生态 | 填补现有办公文档技能仅支持闭源docx/pdf的空白，满足大量使用开源办公套件的政企用户需求 | OPEN | [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486) |
| testing-patterns全栈测试最佳实践 | 覆盖单元测试、React组件测试、E2E测试全栈测试栈指导，输出对齐工业界标准的测试用例与架构方案 | 开发者用户普遍反馈当前Claude生成的测试用例不符合团队规范，缺少统一方法论指导，该技能可直接对齐团队测试标准 | OPEN | [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723) |
| AppDeploy一键全栈应用部署 | 无需额外操作直接将Claude生成的全栈Web应用部署到公网可访问地址，覆盖版本管理、状态检查全生命周期 | 解决代码生成到上线最后一公里的断点问题，大幅降低开发者从原型到生产环境的部署成本 | OPEN | [anthropics/skills PR #360](https://github.com/anthropics/skills/pull/360) |
| 双元技能质检元技能 | 包含skill-quality-analyzer（技能质量评分）、skill-security-analyzer（技能安全扫描）两个元能力，自动对自定义技能做多维度合规校验 | 呼应Issue #492暴露的社区技能命名空间冒充安全风险，从技术层面实现社区提交技能的自动化准入校验 | OPEN | [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83) |
| codebase-inventory-audit代码库存审计 | 自动扫描代码库识别孤立代码、无用文件、文档缺口、基础设施冗余，输出统一的代码库状态基准报告 | 针对中大型代码库长期演进产生的技术债痛点，提供标准化的批量清理工作流 | OPEN | [anthropics/skills PR #147](https://github.com/anthropics/skills/pull/147) |
---
## 2. 社区需求趋势
从高评论Issue中提炼，社区当前Skill需求集中在6个高优先级方向：
1. **开发工具链体验优化**：超30%的高热度Issue集中在skill-creator工具链bug修复、Windows全兼容、评估逻辑准确性上，是目前最紧迫的用户诉求
2. **技能安全与治理**：围绕官方命名空间信任边界漏洞、技能权限管控、代理操作审计的相关需求快速上升，是企业级用户最关注的方向
3. **企业协作能力**：组织级私有技能共享库、一键分享技能链接等需求反馈量环比增长超200%，适配多人团队内部协作场景
4. **办公文档生态补全**：除已有docx/pdf能力外，用户强烈要求支持ODF开源格式、SharePoint企业文档系统对接、自动排版质控等扩展能力
5. **AI代理基础能力**：跨会话持久化记忆、紧凑上下文状态压缩、代理治理模式等底层能力类技能需求明确，瞄准长期运行的AI Agent场景
6. **全链路开发效能**：代码审计、测试生成、一键部署等端到端开发工作流类技能需求占开发者类用户诉求的60%
---
## 3. 高潜力待合并 Skills
以下PR均关联高优活跃Issue，已获得核心维护者响应，极有可能在未来1个月内合并落地：
- run_eval评估链路全套修复：PR #1298 + PR #1323，彻底解决召回率恒为0的核心bug，6月下旬刚完成最后一轮功能迭代，覆盖所有已知复现场景，链接：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)
- skill-creator全量Windows兼容性修复：PR #1099 + PR #1050，解决subprocess路径识别、编码错误、管道读取三大阻塞问题，覆盖数十万Windows开发者用户，链接：[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)
- 技能配置YAML特殊字符自动校验：PR #539 + PR #361，提前捕获描述字段未转义导致的静默解析失败问题，可将技能开发的调试成本降低80%，链接：[#539](https://github.com/anthropics/skills/pull/539)、[#361](https://github.com/anthropics/skills/pull/361)
---
## 4. Skills 生态洞察
当前Claude Code Skills社区最核心的集体诉求是优先补齐技能开发工具链的可用性、跨平台兼容性、安全治理三大基础短板，同时快速落地办公、全栈开发、企业协作三大高频场景的原子级实用技能，为后续大规模生态落地扫清障碍。

---

# Claude Code 社区动态日报 | 2026-06-29
基于 GitHub 官方仓库过去24小时公开数据整理

---

## 1. 今日速览
今日无官方正式版本发布，过去24小时同步的50条更新Issue绝大多数为历史存量问题的闭环标记，核心反馈集中在交互体验优化、长会话稳定性、区域语言输出质量三类方向。开发者社区提交了3款全新高价值生态插件PR，覆盖跨LLM会话接力、MCP权限管控等此前未被满足的高阶开发需求。

## 2. 版本发布
过去24小时无官方新版本发布，该板块暂缺。

## 3. 社区热点 Issues
本次筛选10条最高优先级用户反馈：
1. **#70672 新增鼠标控制拆分选项需求**：17个点赞量为今日最高，用户希望单独禁用TUI菜单的鼠标点击选中功能，同时保留鼠标滚轮滚动能力，解决最近新增的点击选择交互打断操作流的问题，链接：https://github.com/anthropics/claude-code/issues/70672
2. **#56691 请求体字节占用预校验需求**：累计9条评论，针对图片密集型会话无任何提示直接触发32MB请求超限报错的痛点，用户要求在上传说前预览序列化后的请求体积，提前规避中途失败，链接：https://github.com/anthropics/claude-code/issues/56691
3. **#55095 Mac桌面端权限模式UI缺失bug**：累计8条评论，用户开启设置里的绕过权限模式开关后，会话界面完全不显示对应功能入口，核心权限控制功能无法正常使用，链接：https://github.com/anthropics/claude-code/issues/55095
4. **#45811 隐私文档与界面提示冲突问题**：累计7条评论5个点赞，官方文档声明不会收集会话 transcript，但界面弹出提示询问是否允许 Anthropic 查看会话优化产品，对用户知情权造成误导，链接：https://github.com/anthropics/claude-code/issues/45811
5. **#61929 决策优先级倒置体验问题**：累计6条评论，当前Claude Code会在重大架构设计决策上悄无声息执行，反而在修改无关配置文件等低风险操作上反复索要确认，完全不符合开发者的操作预期，链接：https://github.com/anthropics/claude-code/issues/61929
6. **#72163 安全过滤误拦合规逆向分析工作流**：当日新提bug，安全从业者在做APK解包、DEX密钥分析的合法工作场景中，被内容安全策略中途强制终止会话，属于典型的误拦截问题，链接：https://github.com/anthropics/claude-code/issues/72163
7. **#53730 网页版Plan模式频繁流超时**：累计4条评论1个点赞，长推理场景下网页版空闲超时概率远高于其他模式，且无自动重试机制，大量几十分钟的推理会话直接作废，链接：https://github.com/anthropics/claude-code/issues/53730
8. **#72162 插件市场重载不生效bug**：当日新提bug，执行`/plugin marketplace update`加`/reload-plugins`操作后，已推送的插件更新完全不会被加载，影响插件迭代效率，链接：https://github.com/anthropics/claude-code/issues/72162
9. **#72161 会话持久化异常丢失**：当日新提bug，Mac端2.1.195版本下部分历史会话无任何提示直接消失，用户未保存的开发工作成果完全丢失，链接：https://github.com/anthropics/claude-code/issues/72161
10. **#58365 Pyright LSP插件不识别虚拟环境配置**：累计2条评论4个点赞，Linux平台下的Pyright插件完全读取不到项目`pyproject.toml`里的虚拟环境路径配置，产生大量无意义的导入错误误报，影响Python开发者使用，链接：https://github.com/anthropics/claude-code/issues/58365

## 4. 重要 PR 进展
过去24小时共更新5条PR，全部为核心相关变更：
1. **#62315 修复前置/后置钩子事件过滤逻辑**：已闭环，解决了此前hookify机制无法精准筛选事件类型，导致插件钩子收到大量无关事件产生性能损耗的问题，链接：https://github.com/anthropics/claude-code/pull/62315
2. **#41447 社区开源Claude Code长期PR**：开放状态，已经关联6个核心历史Issue，持续获得社区关注，推进官方层面的核心逻辑开源工作，链接：https://github.com/anthropics/claude-code/pull/41447
3. **#72037 新增会话移交插件**：当日新提交PR，新增`/handover`命令将当前会话上下文导出为结构化Markdown文件，支持跨Claude会话、跨其他大模型接力开发，解决长上下文迁移难的痛点，链接：https://github.com/anthropics/claude-code/pull/72037
4. **#72014 新增Protect MCP安全插件**：当日新提交PR，基于Cedar策略引擎实现MCP工具调用的前置权限拦截，完全阻止越权操作，同时为所有调用生成可离线验证的签名审计凭证，满足企业级合规要求，链接：https://github.com/anthropics/claude-code/pull/72014
5. **#72000 插件安装指引文档更新**：当日新提交PR，将文档内旧的手动安装方式替换为官方推荐的自动化安装器方案，大幅降低新用户安装第三方插件的上手门槛，链接：https://github.com/anthropics/claude-code/pull/72000

## 5. 功能需求趋势
从今日更新Issue中提炼出5个核心需求方向：
1. **资源用量透明化**：除了现有token统计之外，用户强烈要求新增请求体体积、上传文件占用、剩余沙箱空间等实时用量提示，避免会话中途无预警崩溃。
2. **交互自定义能力**：开发者希望获得更高的交互控制权，支持自定义确认弹窗触发条件、鼠标操作行为、快捷键映射等个性化配置。
3. **企业级安全合规**：MCP工具调用权限管控、操作全链路可审计、安全拦截规则白名单等面向企业敏感场景的需求增速明显。
4. **跨工具协作能力**：跨Agent流水线信号同步、会话上下文可导出、长会话断点续跑等需求占比持续提升，适配复杂多开发者协作场景。
5. **区域语言质量优化**：针对韩语等非英语区域的输出稳定性、指令遵循度、无意义填充词问题的反馈已经形成集中趋势，成为东亚用户的核心痛点。

## 6. 开发者关注点
今日用户反馈集中暴露4类高频痛点：
1. 多平台功能断层严重：Windows、Mac、Linux三个平台的桌面端、TUI、IDE插件存在大量功能不一致bug，比如Windows端缺失Cowork协作功能、不同版本的CLI和桌面端逻辑不兼容。
2. 生态插件成熟度不足：MCP服务注册、LSP环境适配、自定义命令加载等链路故障频发，开发者搭建本地自定义工作流时踩坑概率高。
3. 长会话稳定性差：Plan模式流超时、沙箱磁盘占满不会自动清理、会话内容丢失等问题频繁打断持续几小时的开发工作流，大幅降低开发效率。
4. 模型行为不可控：Opus 4.7版本部分非英语区域输出质量下降、内容安全策略误拦截正常工作流、工具调用偶发无意义报错等问题，导致付费订阅用户的性价比感知明显下滑。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 2026-06-29
数据来源：github.com/openai/codex

---

## 1. 今日速览
今日OpenAI发布Codex Rust侧最新灰度版本`v0.143.0-alpha.29`，全社区关注度最高的gpt-5.5费率异常暴涨10-20倍问题已累计收到近千条用户反馈，官方未发布正式说明。同时官方合并了一批迭代PR，重点推进用量透明化、冗余日志裁剪、MCP插件生态转正相关能力落地。

## 2. 版本发布
今日发布预发布版本：**rust-v0.143.0-alpha.29**
该版本面向灰度测试用户推送，基于此前0.142.0版本已落地的3条SQLite冗余日志裁剪补丁（降低85%无效写入）迭代优化，进一步解决残留的高磁盘IO问题。
发布页地址：https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29

## 3. 社区热点 Issues（10个最高优先级）
1.  **#28879 gpt-5.5 费率单token消耗暴涨10-20倍**
    链接：https://github.com/openai/codex/issues/28879
    评论193、点赞337，是当前全站最高热度Issue：大量Plus用户反馈6月16日后原本可支持20+次交互的5小时额度，仅用2-3条prompt就被耗尽，全社区用户都在等待官方赔付/规则说明，付费权益受损的反馈覆盖全球各地用户。
2.  **#23794 Codex桌面端token用量指示器消失**
    链接：https://github.com/openai/codex/issues/23794
    评论171、点赞168，已关闭：大量ChatGPT Business用户升级版本后完全看不到当前会话的token消耗进度，无法预判额度耗尽时间，此前已持续1个多月未修复，今日确认补丁已推送。
3.  **#28224 Codex SQLite日志年写入量达640TB耗尽SSD寿命**
    链接：https://github.com/openai/codex/issues/28224
    点赞403：用户实测发现旧版本无效日志写入过高，官方已合并3个补丁降低85%无效写入，剩余15%残留问题当前正在推进修复，是所有本地部署用户最高关心的资源损耗问题。
4.  **#2847 新增敏感文件排除机制**
    链接：https://github.com/openai/codex/issues/2847
    点赞447，是全站点赞最高的需求：从2025年8月提出至今持续收到用户反馈，希望支持`.codexignore`规则，避免本地密钥、隐私配置文件被自动上传给大模型，安全需求极其迫切。
5.  **#29955 100点额度仅发送1条消息就被清空**
    链接：https://github.com/openai/codex/issues/29955
    评论30：是费率异常bug的极端案例，Pro*5订阅用户反馈刚重置的100点额度发送第一条消息就直接清零，进一步印证了当前服务端费率统计逻辑存在严重漏洞。
6.  **#30364 gpt-5.5推理token固定为516/1034集群导致复杂任务性能下降**
    链接：https://github.com/openai/codex/issues/30364
    评论12：开发者统计全量会话token数据发现，gpt-5.5的推理输出token大量卡在固定数值档位，没有根据任务复杂度动态调整，导致复杂编码任务的推理深度不足。
7.  **#29072 Windows端apply_patch补丁操作失败**
    链接：https://github.com/openai/codex/issues/29072
    评论25：Windows用户高频遇到沙箱程序无法启动，所有自动修改代码的补丁操作全部失效，影响本地编码效率。
8.  **#24510 桌面端历史会话过多导致CPU持续跑满**
    链接：https://github.com/openai/codex/issues/24510
    评论24：用户本地存储了几百条历史会话后，Codex后台会无限制遍历元数据，空闲状态下CPU占用常年超过30%。
9.  **#30357 发送简单ping请求直接扣除13%的5小时额度**
    链接：https://github.com/openai/codex/issues/30357
    评论5：进一步验证了当前服务端的额度统计完全失准，无任何实际token消耗的探测请求也会扣取大量用户额度。
10. **#30473 Windows PowerShell下git上游命令解析失败**
    链接：https://github.com/openai/codex/issues/30473
    刚提交的新Issue，Windows用户高频遇到Codex自动执行git命令时，PowerShell把`@{u}`识别为哈希表导致代码状态查询失败，影响常规Git操作流程。

## 4. 重要PR进展（10个核心迭代）
1.  **#30395 服务端暴露费率重置积分详情**
    链接：https://github.com/openai/codex/pull/30395
    新增v2接口返回剩余重置额度的过期时间、可用数量，解决当前用户完全看不到额度明细的问题，为后续用量透明化能力提供底层支持。
2.  **#30488 TUI端展示重置额度明细**
    链接：https://github.com/openai/codex/pull/30488
    在命令行端的额度兑换面板里，把所有可用重置额度按过期时间排序展示，允许用户手动选择优先消耗哪一个额度。
3.  **#29740 基于模型元数据统一管理技能使用说明**
    链接：https://github.com/openai/codex/pull/29740
    移除此前硬编码的旧模型适配逻辑，新增`include_skills_usage_instructions`元数据开关，已经默认给gpt-5.5开启，大幅降低后续新模型适配的维护成本。
4.  **#30482 新增写入操作审批模式**
    链接：https://github.com/openai/codex/pull/30482
    新增`writes`审批档位，所有只读文件操作不需要用户手动确认，仅当执行文件写入、系统修改类操作时才弹出确认框，大幅减少不必要的交互中断。
5.  **#30467 将max档位作为一等推理努力级别支持**
    链接：https://github.com/openai/codex/pull/30467
    适配Bedrock侧的gpt-5.6能力，把此前作为自定义档位的`max`推理努力正式纳入官方UI展示，统一不同部署环境的体验。
6.  **#30297 远程插件功能默认开启**
    链接：https://github.com/openai/codex/pull/30297
    此前作为实验功能的远程MCP插件能力正式转正，所有新用户默认开启，支持加载第三方公开的MCP服务。
7.  **#30252 缓存远程Bash环境变量**
    链接：https://github.com/openai/codex/pull/30252
    远程执行命令时仅初始化一次环境变量，后续命令直接复用缓存，大幅降低远程服务器的命令执行延迟。
8.  **#30480 修复TUI端Unicode输入重复问题**
    链接：https://github.com/openai/codex/pull/30480
    移除未使用的键盘上报协议，解决Windows Terminal、Warp终端下非ASCII字符重复输入的bug。
9.  **#30292/30293/30294 MCP OAuth凭证全链路迭代**
    链接：https://github.com/openai/codex/pull/30292、#30293、#30294
    三个联动PR完成MCP插件的凭证序列化、存储、路由全链路重构，解决此前MCP插件授权频繁失效的问题。
10. **#30423 服务端时钟接口超时提升到30秒**
    链接：https://github.com/openai/codex/pull/30423
    把此前10秒的超时限制延长到30秒，解决弱网环境下用户端同步服务端时间频繁断开的问题。

## 5. 功能需求趋势
1.  **权限安全类需求**：用户对本地敏感文件防护的诉求极高，写入操作的细粒度审批机制是当前最受期待的安全能力。
2.  **用量透明化需求**：当前费率统计异常的背景下，用户迫切需要清晰的消耗明细、额度过期时间展示，避免付费权益被无感知消耗。
3.  **本地资源轻量化**：高磁盘IO、高CPU占用是老版本的共性问题，社区持续推动官方彻底移除所有无效TRACE日志，降低对用户本地硬件的损耗。
4.  **跨平台兼容性**：Windows端的沙箱适配、命令行兼容、UI功能缺失类bug占比超过60%，是当前开发者最集中的修复方向。
5.  **MCP生态迭代**：官方正式将远程插件能力转正后，第三方开发者接入MCP的相关支持需求快速上升，插件生态成为下一阶段核心演进方向。

## 6. 开发者关注点
1.  最高优先级痛点是gpt-5.5费率统计逻辑完全失准，大量Plus/Pro用户的付费权益被严重稀释，官方至今未发布任何公开说明或赔付方案，用户不满情绪持续上升。
2.  本地资源占用问题仍有残留：0.142版本仅修复了85%的无效SQLite日志写入，macOS和Windows平台仍有部分场景会触发高频TRACE日志写入，持续损耗SSD寿命。
3.  Windows平台成熟度远低于macOS：沙箱运行异常、PowerShell命令解析失败、空闲时GPU/CPU跑满等bug占今日总活跃bug的60%以上，Windows开发用户体验落差极大。
4.  效率类长尾需求呼声高：关闭60秒自动解决弹窗、自定义热键、减少非必要用户确认等需求的点赞量持续走高，用户希望获得更低干扰的编码助手体验。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-06-29）
数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
本次24小时核心动态围绕安全能力加固、Agent稳定性优化、MCP生态兼容性迭代三大方向展开。官方最新发布v0.51.0夜间构建版本，重点封堵敏感路径拦截的绕过风险。全量更新内容中，Agent侧故障排查、VS Code插件体验优化、安全漏洞封堵相关占比超过60%，是近期社区投入的核心优先级。

## 2. 版本发布
### v0.51.0-nightly.20260628.gae0a3aa7b
本次更新仅包含1项核心安全修复：将敏感路径黑名单校验逻辑改为大小写不敏感模式，同时修复VS Code侧人类交互流程的潜在权限漏洞，避免敏感文件被误读取。
- 更新对比链接：https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628.gae0a3aa7b
- 关联PR：https://github.com/google-gemini/gemini-cli/pull/27966

## 3. 社区热点Issues
精选10个高优先级、高讨论度的问题：
| Issue编号 | 优先级 | 核心说明 | 链接 |
| --- | --- | --- | --- |
| #21409 | P1 | 累计获8个点赞，是用户反馈最集中的故障：通用子代理触发后会永久挂死，哪怕是新建文件夹这类简单操作都无法完成，用户反馈关闭子代理调用才能临时规避 | https://github.com/google-gemini/gemini-cli/issues/21409 |
| #22323 | P1 | 核心逻辑bug：子代理达到最大交互轮次后不会上报中断，反而谎报目标成功，掩盖了任务未执行的问题，严重影响排查效率 | https://github.com/google-gemini/gemini-cli/issues/22323 |
| #19873 | P2 | 架构级增强提案：计划基于零依赖操作系统沙箱充分释放Gemini 3模型原生的Bash操作偏好，完全发挥模型本身适配POSIX工具的能力，同时保障操作安全 | https://github.com/google-gemini/gemini-cli/issues/19873 |
| #24353 | P1 | 测评体系EPIC：当前已经累计产出76项行为测评用例，正在推进组件级精细化测评能力落地，覆盖6款主流Gemini模型 | https://github.com/google-gemini/gemini-cli/issues/24353 |
| #25166 | P1 | 高频交互故障：Shell命令执行完毕后，CLI会永久卡在"等待用户输入"状态，用户无法继续后续操作 | https://github.com/google-gemini/gemini-cli/issues/25166 |
| #26525 | P2 | 安全类问题：自动内存功能上传会话记录给后台提取模型前未做确定性脱敏，存在本地敏感信息泄露风险 | https://github.com/google-gemini/gemini-cli/issues/26525 |
| #21983 | P1 | 环境兼容性问题：Wayland桌面环境下浏览器子代理完全失效，任务直接判定完成但没有实际执行任何页面操作 | https://github.com/google-gemini/gemini-cli/issues/21983 |
| #24246 | P2 | 边界故障：当可用工具数量超过128时，CLI直接返回400错误，没有自动做工具范围裁剪的降级逻辑 | https://github.com/google-gemini/gemini-cli/issues/24246 |
| #20079 | P2 | 自定义能力缺陷：用户放在`~/.gemini/agents/`目录下的自定义子代理如果是软链接形式，无法被系统识别加载 | https://github.com/google-gemini/gemini-cli/issues/20079 |
| #24935 | P2 | 终端渲染故障：使用外部编辑器打开文件后退出，终端缓冲区内容会出现乱码 | https://github.com/google-gemini/gemini-cli/issues/24935 |

## 4. 重要PR进展
精选10个已合入或即将发布的高价值补丁：
| PR编号 | 优先级 | 核心说明 | 链接 |
| --- | --- | --- | --- |
| #27966 | P1 | 本次夜间版本的核心安全补丁，落地大小写不敏感的敏感路径黑名单校验，封堵绕过风险 | https://github.com/google-gemini/gemini-cli/pull/27966 |
| #27744 | P1 | SSRF防护漏洞修复：在SSRF规则校验前先做DNS解析，直接封堵类似`127.0.0.1.nip.io`这类域名跳转内网地址的绕过手段 | https://github.com/google-gemini/gemini-cli/pull/27744 |
| #27915 | P1 | 信任对话框逻辑修复：之前对话框会反向展示允许执行的钩子列表，导致用户误点击信任后静默执行恶意钩子的安全风险 | https://github.com/google-gemini/gemini-cli/pull/27915 |
| #28183 | P1 | VS Code插件体验优化：批准文件修改关闭diff预览页后，不会再抢走终端焦点，用户不需要重复点击终端激活即可继续输入 | https://github.com/google-gemini/gemini-cli/pull/28183 |
| #27878 | P1 | MCP兼容性修复：本地通过图片二进制特征嗅探MCP返回的图片真实MIME类型，解决Figma等第三方MCP返回WebP格式图片被误判为PNG、调用Gemini API报错的问题 | https://github.com/google-gemini/gemini-cli/pull/27878 |
| #27889 | P1 | MCP OAuth逻辑修复：修复自动发现的MCP服务刷新令牌时找不到已存Client ID导致认证失败的bug | https://github.com/google-gemini/gemini-cli/pull/27889 |
| #24179 | P3 | 配置体验增强：支持将会话留存时间配置为`forever`永久模式，之前配置为该值会直接抛出格式错误 | https://github.com/google-gemini/gemini-cli/pull/24179 |
| #27754 | P1 | A2A服务崩溃修复：给501响应返回逻辑补充缺失的return语句，避免后续路由继续执行抛出`ERR_HTTP_HEADERS_SENT`错误直接崩溃 | https://github.com/google-gemini/gemini-cli/pull/27754 |
| #27886 | P2 | 规则兼容增强：生成会话上下文目录树时同步遵循`.gitignore`和`.geminiignore`规则，不会把被忽略的文件列进上下文 | https://github.com/google-gemini/gemini-cli/pull/27886 |
| #27860 | P2 | 交互体验优化：斜杠命令冲突修复后消失再复现时，会重新给用户发提醒通知，之前的逻辑冲突解决后就不会再告警，复现后用户完全感知不到 | https://github.com/google-gemini/gemini-cli/pull/27860 |

## 5. 功能需求趋势
从全量更新内容可以提炼出当前社区最核心的四个研发方向：
1. **Agent原生能力释放**：重点推进零依赖操作系统沙箱、AST感知的代码导航/读取能力，最大化适配Gemini 3模型原生的Bash操作偏好，降低交互轮次冗余
2. **全链路安全体系加固**：从路径拦截、SSRF封堵、会话记录脱敏、恶意钩子防控多个维度补全安全短板，解决本地代理操作权限过高的风险
3. **MCP生态兼容性**：集中修复各类第三方MCP服务接入的兼容问题，覆盖格式校验、OAuth认证、多媒体传输多个场景，打通MCP生态的接入障碍
4. **IDE深度集成体验**：围绕VS Code配套插件优化交互流畅度，解决窗口焦点抢占、资源泄漏等体验缺陷，降低CLI和IDE切换的操作成本

## 6. 开发者关注点
当前用户反馈的高频痛点集中在三个方向：
1. **Agent稳定性不足**：子代理挂死、逻辑不符合预期、故障无法上报是最高频的吐槽点，严重影响复杂代码场景下的使用体验
2. **安全风险感知强烈**：大量开发者反馈对本地代理操作敏感文件、执行恶意指令的担忧，对全链路可管控的操作权限机制需求非常迫切
3. **跨环境体验一致性差**：Wayland环境故障、外部编辑器退出乱码、不同终端渲染异常等问题占比很高，CLI的终端适配成熟度还有较大提升空间

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-29
数据源：github.com/github/copilot-cli

---

## 1. 今日速览
今日Copilot CLI官方仓库过去24小时无正式版本发布，累计更新7条Issue、1条无实质代码改动的提交PR。用户反馈覆盖企业网络兼容、终端使用体验、多会话管理、跨平台适配四大类场景，其中3条集中在会话体系能力升级的新增需求，是当前社区呼声最高的优化方向，整体社区活跃度保持平稳，未出现引发大范围共鸣的严重故障上报。

## 2. 版本发布
过去24小时仓库未推送新的正式Release版本，本部分暂空。

## 3. 社区热点 Issues
本次统计周期内共产生7条更新Issue，全部为有效反馈：
1.  **#2978 企业代理下SDK头less模式`session.create`报fetch失败**：面向企业级付费用户的核心兼容性bug，v1.0.36版本下即使用户正确配置代理环境变量，仍无法通过企业代理连接Copilot服务，目前已有2名用户复现该问题，是阻挡大量内网企业用户落地Copilot CLI的核心障碍。链接：https://github.com/github/copilot-cli/issues/2978
2.  **#3964 v1.0.65版本软换行复制仍丢失边界空格**：此前在v1.0.49曾修复过同类问题但存在遗漏，用户复制终端中Copilot输出的长文本时会出现两个词被误拼接的情况，严重影响命令、代码片段的复制可用性，目前已有1名用户确认复现。链接：https://github.com/github/copilot-cli/issues/3964
3.  **#3971 仓库关联会话新增全文件树浏览器需求**：当前文件夹会话自带侧边栏文件树，但关联完整仓库的工作区会话仅展示Git变更列表，用户无法直接浏览仓库内其他未变更文件，属于重度代码场景下的高频刚需功能。链接：https://github.com/github/copilot-cli/issues/3971
4.  **#3970 支持自定义会话标签功能**：面向同时维护多个功能迭代、多个项目的重度用户，目前仅靠会话名称分类难以快速检索目标会话，新增可搜索过滤的自定义标签可大幅提升多会话管理效率。链接：https://github.com/github/copilot-cli/issues/3970
5.  **#3969 会话列表新增计划状态标识**：当前用户无法在会话列表直接看到每个会话内的任务计划进度，需要点进详情页才能查看，新增可视化状态徽章可降低多工作流并行时的上下文切换成本。链接：https://github.com/github/copilot-cli/issues/3969
6.  **#3967 Ubuntu 24.04双终端下Copilot异常退出后提示未安装**：影响核心可用性的偶发故障，用户在Guake和系统原生终端同时使用Copilot CLI时会突然闪退，重启后甚至提示程序未安装，目前暂无足够排查信息定位根因。链接：https://github.com/github/copilot-cli/issues/3967
7.  **#3815 Windows平台debug日志路径缺反斜杠**：属于平台细节体验缺陷，日志打印的存储路径少了路径分隔符，用户无法直接复制粘贴到资源管理器快速打开日志文件，大幅增加问题排查成本。链接：https://github.com/github/copilot-cli/issues/3815

## 4. 重要 PR 进展
本次统计周期内仅1条更新PR，无实质功能/修复合入：
1.  **#3968 同名重命名changelog.md的无效提交**：提交者操作失误触发的无意义PR，仅对changelog.md文件执行重命名为完全相同名称的空操作，现已被仓库维护者关闭，未对仓库内容产生任何改动。链接：https://github.com/github/copilot-cli/pull/3968

## 5. 功能需求趋势
从最新用户反馈中可以提炼出三大核心需求方向：
1.  **多场景会话体系能力补全**：连续3条需求都围绕会话侧展开，覆盖文件浏览、标签管理、状态展示，目标是支撑重度用户同时并行处理多个工作流的使用场景。
2.  **企业级受限环境适配优化**：企业内网代理下的兼容性问题被再次反馈，说明当前Copilot CLI在复杂网络场景下的适配仍有较多待补全的缺口，是面向企业客户迭代的核心方向。
3.  **跨平台细节体验打磨**：多个Windows、Linux平台下的细节路径、可用性bug被集中上报，社区用户对非Mac平台的使用流畅度关注度持续提升。

## 6. 开发者关注点
当前开发者反馈的核心痛点集中在四个维度：
1.  多会话管理效率不足，并行推进多个项目时检索、查看会话进度的成本过高，打断开发流。
2.  企业代理场景下的兼容性仍存在死角，很多团队无法顺畅部署使用最新版本的Copilot CLI。
3.  已上线的历史修复存在遗漏/回归情况，终端复制这类高频操作的体验没有达到预期。
4.  Linux桌面环境下的偶发崩溃故障排查信息不足，普通用户遇到核心可用性问题后难以自助定位解决。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 2026-06-29
数据来源：GitHub 仓库 github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
今日Kimi Code CLI公开仓库过去24小时无正式版本发布、无新提交/更新的Pull Request，共2条存量Bug Issue获得用户跟进更新。两条更新内容分别覆盖自定义第三方模型端点场景下的文件读取死循环异常、VS Code插件长时间运行的内存占用过高问题，均为直接影响核心使用体验的高频反馈，目前官方团队暂未公示对应修复排期。

## 2. 版本发布
过去24小时仓库无新增正式Release版本，本部分暂略。

## 3. 社区热点 Issues
过去24小时仓库更新的Issue仅2条，全部纳入热点展示，未达10条阈值：
1. **Issue #640 自定义端点场景下文件读取死循环Bug**
   重要性：该问题出现在用户通过`config.toml`自定义对接Anthropic类第三方端点、使用mimo-v2-flash模型的场景下，0.76版本在Linux平台运行时会反复读取同一文件进入无响应循环，直接中断用户代码补全、全项目分析流程，目前累计15条用户评论，已有多名同场景用户复现该问题并上传本地调试日志，1个点赞。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/640
2. **Issue #1592 Kimi Code VS Code插件高内存占用问题**
   重要性：该反馈针对0.4.5版本配套的VS Code插件，用户在Mac ARM平台长时间执行大项目代码分析任务时出现内存持续上涨，甚至触发IDE OOM闪退，目前已有1条用户跟进表示遇到同类问题，正在上传性能快照协助官方排查。
   链接：https://github.com/MoonshotAI/kimi-cli/issues/1592

## 4. 重要 PR 进展
过去24小时仓库无新增或更新的Pull Request，本部分暂略。

## 5. 功能需求趋势
从近期跟进的Issue中提炼出社区核心关注的功能方向：
1. **多端点兼容能力**：大量用户尝试自定义配置对接非Moonshot官方的第三方模型，对自定义端点场景下的运行稳定性、特性适配的需求持续走高；
2. **IDE集成性能优化**：VS Code等主流编辑器插件的资源占用表现是用户最核心的诉求之一，针对大项目长期分析场景的内存管控、响应速度优化需求占比持续提升；
3. **全平台一致性体验**：Linux、Mac ARM等非x86桌面平台的运行异常反馈量逐步上涨，用户对不同架构、不同OS下无差别的使用体验关注度持续上升。

## 6. 开发者关注点
当前开发者反馈的核心痛点集中在三点：
1. 自定义模型场景下缺乏异常熔断机制，遇到读取死循环类问题直接无响应，没有友好报错提示，问题排查成本极高；
2. VS Code插件没有设置内存阈值自动回收策略，长时间运行场景下的资源泄漏问题突出，严重打断正常开发流；
3. 存量高复现Bug的响应速度较慢，用户普遍希望官方针对已确认的高频异常场景尽快推出小补丁版本迭代。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-29
数据来源：github.com/anomalyco/opencode

---

## 1. 今日速览
今日社区无正式版本发布，最高热度的Cursor CLI支持需求累计获得186个点赞、74条讨论，生态集成类需求持续走高。核心维护团队集中合并了20余个积压PR，正式落地期待已久的Python SDK、FreeBSD全平台支持、桌面端内置浏览器等核心特性，同时集中修复了近一周用户反馈的高频崩溃、模型适配类严重问题，整体迭代效率显著提升。

## 2. 版本发布
过去24小时无正式Release版本更新。

## 3. 社区热点Issues
共筛选10个高互动、高影响的核心Issue：
1.  **#2072 新增Cursor CLI支持需求**：74条评论、186个点赞，是目前社区热度最高的需求。用户希望刚发布的公开Cursor CLI能接入OpenCode的调度体系，打通两款主流AI编码工具的能力链路，目前社区已经有开发者提交了第三方适配原型。链接：https://github.com/anomalyco/opencode/issues/2072
2.  **#13984 OpenCode CLI剪贴板复制失效**：50条评论、23个点赞，覆盖全平台用户，用户反馈界面提示复制成功但实际剪贴板无内容，影响编码过程中高频的片段复用操作，目前已有多个用户复现了不同场景下的问题路径。链接：https://github.com/anomalyco/opencode/issues/13984
3.  **#4031 官方Python SDK需求**：33条评论，大量开发者需要通过可编程方式调用OpenCode的Agent能力做二次封装，该需求今天已经被对应PR正式关闭，SDK即将正式上线。链接：https://github.com/anomalyco/opencode/issues/4031
4.  **#21034 Gemma-4系列模型调用死循环问题**：19条评论、20个点赞，用户反馈即使升级到最新LM Studio、llama.cpp版本，Gemma 4 26B/31B两款模型在OpenCode中依然会频繁触发工具调用循环、执行失败，完全不可用。链接：https://github.com/anomalyco/opencode/issues/21034
5.  **#32420 OpenCode Go付费订阅未激活大规模反馈**：10条评论，多名用户反馈6月中旬付费购买的Go会员服务没有生效，API密钥无法使用，发送工单也未得到响应，是目前付费侧最高优先级待修复问题。链接：https://github.com/anomalyco/opencode/issues/32420
6.  **#26772 桌面端内置浏览器功能需求**：9条评论，用户希望在OpenCode桌面版中集成独立浏览器工作区，直接调试本地服务、查看文档，不需要在多个应用间切换。链接：https://github.com/anomalyco/opencode/issues/26772
7.  **#30680 自动压缩死循环导致无法生成回复**：8条评论，用户反馈即使在空白目录启动OpenCode也会触发无限自动上下文压缩，耗尽令牌后完全停止响应，严重影响基础使用体验。链接：https://github.com/anomalyco/opencode/issues/30680
8.  **#33399 进程随机占满100% CPU无响应**：7条评论，大量1.3.3及以上版本用户反馈OpenCode CLI会随机跑满CPU，风扇狂转且完全无法响应输入，只能强制杀死进程重启。链接：https://github.com/anomalyco/opencode/issues/33399
9.  **#5409 新增会话生命周期SessionStart钩子**：6条评论、17个点赞，开发者希望新增类似Claude Code的会话启动钩子，自定义会话初始化逻辑，适配企业内部的权限校验、规则注入场景。链接：https://github.com/anomalyco/opencode/issues/5409
10. **#24264 NVIDIA NIM对接DeepSeek V4推理模型挂起**：6条评论，用户使用NVIDIA NIM部署的DeepSeek V4推理模型时请求会完全卡住，原因是OpenCode没有传递推理模型必须的`chat_template_kwargs`参数。链接：https://github.com/anomalyco/opencode/issues/24264

## 4. 重要PR进展
共筛选10个核心特性/修复PR，今日已全部合并：
1.  **#29676 正式发布Python SDK**：完全关闭#4031需求，新增60+接口的Python客户端，支持服务管理、Agent调度、OpenAPI代码生成能力，填补了OpenCode可编程扩展的官方能力空白。链接：https://github.com/anomalyco/opencode/pull/29676
2.  **#19038 桌面端内置浏览器落地**：新增独立的内联浏览器组件，用户无需跳出OpenCode即可打开网页、调试本地开发服务，实现编码-预览全链路闭环。链接：https://github.com/anomalyco/opencode/pull/19038
3.  **#29783 新增FreeBSD平台支持**：适配FreeBSD系统的剪贴板、进程调度逻辑，正式将FreeBSD纳入官方支持平台，拓展了服务端部署场景。链接：https://github.com/anomalyco/opencode/pull/29783
4.  **#34342 修复窄终端TUI截断溢出问题**：解决maxLength设置为1/2时，字符串截断逻辑返回超长内容的bug，适配小尺寸终端下的界面渲染。链接：https://github.com/anomalyco/opencode/pull/34342
5.  **#29755 全局通配符读取拒绝规则修复**：修复之前`**/.env*`这类通配符规则不生效的bug，确保敏感配置文件不会被Agent意外读取，提升数据安全性。链接：https://github.com/anomalyco/opencode/pull/29755
6.  **#29712 CJK字符粘贴位置偏移修复**：解决输入中文/日文/韩文后粘贴内容时，位置计算采用显示宽度而非字符索引导致的内容错乱bug，大幅提升中文用户输入体验。链接：https://github.com/anomalyco/opencode/pull/29712
7.  **#29657 新增证书热重载能力**：macOS/Linux通过文件监听、Windows通过定时轮询，实现系统信任证书更新后无需重启OpenCode即可自动加载，适配自签名证书等私有部署场景。链接：https://github.com/anomalyco/opencode/pull/29657
8.  **#29684 内置增强Markdown预览能力**：新增文件预览区的代码/预览双栏切换，支持Mermaid流程图渲染，用户可以直接在OpenCode中查看技术文档、需求说明。链接：https://github.com/anomalyco/opencode/pull/29684
9.  **#34343 实现V2版会话分叉能力**：重构会话分叉底层逻辑，生成子会话时自动分配全新的消息ID、同步历史上下文，解决旧版本分叉后消息ID冲突的问题，大幅提升多分支调试的稳定性。链接：https://github.com/anomalyco/opencode/pull/34343
10. **#29750 CLI和GitHub Action新增完善的错误处理**：给核心模块增加进程保活、异常捕获逻辑，大幅降低CI/CD场景下OpenCode任务意外崩溃的概率，提升自动化流程可靠性。链接：https://github.com/anomalyco/opencode/pull/29750

## 5. 功能需求趋势
从今日更新的Issue中提炼出社区最关注的5个核心方向：
1.  **工具生态集成**：Cursor CLI支持热度第一，后续还有大量用户提出对接VS Code、JetBrains全系列IDE的需求，打通现有编码工具和OpenCode Agent能力的链路是最高优先级方向。
2.  **新模型全链路适配**：Gemma 4、DeepSeek V4等刚发布的开源大模型的调用兼容需求集中爆发，用户希望OpenCode能够第一时间跟进新模型的工具调用、推理输出适配，不需要开发者自己做兼容改造。
3.  **桌面端场景增强**：内置浏览器、可视化点选编辑、多工作区管理等面向普通开发者的桌面体验需求占比持续提升，用户不再满足于纯TUI交互。
4.  **扩展开放能力**：Python SDK、会话生命周期钩子、自定义插件等面向二次开发的需求占比上涨30%，大量企业用户需要基于OpenCode封装内部专属的编码工作流。
5.  **成本感知能力**：区分缓存令牌/普通令牌的上下文统计功能需求得到大量用户点赞，开发者希望能够直观看到实际API开销，避免不必要的成本浪费。

## 6. 开发者关注点
今日用户反馈集中的3类核心痛点：
1.  高优先级崩溃问题占比偏高：切换模型触发SQLite报错、侧进程无理由退出、TUI渲染组件崩溃等影响核心使用的bug反馈较多，严重拉低基础体验。
2.  付费服务稳定性不足：OpenCode Go订阅扣费后不激活的问题已有多名用户中招，官方客服响应滞后，影响付费用户留存。
3.  主流模型提供商对接频繁出问题：最近一周GitHub Copilot、OpenAI浏览器登录、NVIDIA NIM三个主流提供商先后出现服务断连、无响应问题，需要优先迭代兼容性兜底逻辑。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-06-29）
数据来源：github.com/badlogic/pi-mono
---
## 1. 今日速览
过去24小时项目无新版本发布，社区讨论热度最高的是openai-codex大模型连接可靠性卡顿问题，累计获得72条用户反馈。核心功能Context Matrix正在按两个里程碑快速推进，同时一批影响核心体验的高频bug比如Edit工具缩进匹配失效、OpenCode Go模型访问404已得到PR层面的修复落地。

## 2. 版本发布
过去24小时无官方正式版本发布。

## 3. 社区热点 Issues
共筛选10个高价值更新Issue，覆盖核心体验、模型适配、跨平台兼容等维度：
1. **#4945 openai-codex 连接可靠性问题**：72条评论、30个点赞，是目前热度最高的反馈，大量用户遇到gpt-5.5交互时TUI卡死在「Working...」状态，无输出无报错，只能按ESC中断，严重影响日常编码工作流，相关讨论仍在持续迭代定位根因。https://github.com/earendil-works/pi/issues/4945
2. **#5825 流式Markdown输出强制回滚到底部**：36条评论，用户开启「clear on shrink」设置后，滚动向上阅读已输出内容时会被系统强制跳回底部，打断阅读节奏，属于核心交互体验缺陷。https://github.com/earendil-works/pi/issues/5825
3. **#6083 LLM缓存对z.ai GLM编码计划不生效**：9个点赞，用户反馈使用z.ai GLM做多步编辑任务时，每一步工具调用都会快速消耗会话额度，10~20步操作就能耗掉20%以上的配额，社区用户普遍受无意义token消耗的困扰。https://github.com/earendil-works/pi/issues/6083
4. **#6093 限定权限的Anthropic API密钥缺少兼容逻辑**：现有代码仅通过密钥前缀识别类型，新发布的Claude Code限定密钥格式和普通密钥一致，导致用户无法使用权限更安全的scoped密钥，影响高安全要求的用户使用。https://github.com/earendil-works/pi/issues/6093
5. **#6104 Windows下find命令遍历根盘符路径出错**：用户在Windows系统直接传入C:\这类根盘符作为搜索路径时，返回的路径会丢失首字符、末尾斜杠重复，导致文件定位功能失效。https://github.com/earendil-works/pi/issues/6104
6. **#6124 梵文（Devnagri）输入破坏UI渲染**：用户输入天城文词汇时TUI布局直接错乱，暴露出非拉丁字符渲染的兼容性缺陷，影响印度等非英文区用户使用。https://github.com/earendil-works/pi/issues/6124
7. **#6140 OpenCode Go平台MiniMax M3模型返回404**：国内开发者常用的OpenCode Go推理平台的MiniMax M3接口访问直接报错，用户无法使用该大模型，开发者已主动认领将提交修复PR。https://github.com/earendil-works/pi/issues/6140
8. **#6135 macOS下bash工具硬编码/bin/bash引发兼容性问题**：macOS系统自带的bash还是3.2的老旧版本，大量新语法不支持，导致Shell执行报错，用户要求取消硬编码自动识别系统可用的bash路径。https://github.com/earendil-works/pi/issues/6135
9. **#6132 Together.ai两款模型将于7月10日下线**：官方通知`zai-org/GLM-5.1`和`Qwen/Qwen3-235B-A22B-Instruct-2507-tput`即将停止服务，当前Pi内置的推荐替代模型还未完成适配，大量用户需要迁移方案指导。https://github.com/earendil-works/pi/issues/6132
10. **#6042 要求内置支持Charm Hyper推理服务商**：用户请求将新兴推理平台Charm Hyper加入内置提供商列表，直接在--list-models和/模型选择器里可见，丰富第三方模型接入生态。https://github.com/earendil-works/pi/issues/6042

## 4. 重要 PR 进展
共筛选10个高价值合并/待合并PR，覆盖bug修复、新特性扩展：
1. **#6144 修复Edit工具模糊匹配自动将Tab转空格**：解决LLM生成的修改代码用空格缩进、本地文件用Tab缩进时匹配失败的高频痛点，大幅提升代码编辑成功率。https://github.com/earendil-works/pi/pull/6144
2. **#6146 回滚旧适配逻辑，修复OpenCode Go模型访问404**：移除之前临时的兼容方案，现在Minimax M2.7和Qwen3.6 Plus在OpenCode Go平台上已可正常运行，对应解决#6140报错问题。https://github.com/earendil-works/pi/pull/6146
3. **#6136 为会话压缩逻辑增加空队列校验**：修复压缩完成后无待处理消息时，仍然错误调用agent.continue()引发的空转崩溃问题，提升长会话稳定性。https://github.com/earendil-works/pi/pull/6136
4. **#6142 为DeepSeek模型默认开启高推理强度**：新增共享配置将DeepSeek的reasoning_effort默认设为high，同时新增推理token统计日志和本地冒烟测试脚本，大幅提升DeepSeek系列模型的输出质量。https://github.com/earendil-works/pi/pull/6142
5. **#6141 修复Context Canvas矩阵运行响应解析逻辑**：兼容根层级直接返回AiCommand裸JSON的格式，避免Zod校验抛出字段缺失错误，推进Context Matrix核心功能落地。https://github.com/earendil-works/pi/pull/6141
6. **#6148 支持Anthropic Bearer Token环境变量配置**：尝试解决限定权限Anthropic密钥无法识别的问题，目前代码方案还在优化讨论中。https://github.com/earendil-works/pi/pull/6148
7. **#6115 新增可配置聊天区边距**：针对社区长期吐槽TUI界面太拥挤的问题，提供自定义padding配置选项，目前方案还在架构层面讨论。https://github.com/earendil-works/pi/pull/6115
8. **#6078 新增get_entries和get_tree两个RPC命令**：对外暴露全量会话条目和会话树数据读取能力，方便第三方扩展获取完整的历史对话上下文。https://github.com/earendil-works/pi/pull/6078
9. **#60 全代码库文件/文件夹模糊搜索**：新增全局模糊文件导航能力，替代原有逐层目录查找的低效模式，大幅提升大项目下的文件定位效率。https://github.com/earendil-works/pi/pull/60
10. **#6074 禁止预提示压缩在无后续任务时继续执行**：修复之前压缩逻辑触发后无意义空跑的缺陷，减少不必要的token消耗。https://github.com/earendil-works/pi/pull/6074

## 5. 功能需求趋势
从近期Issue可以提炼出社区最关注的4个核心方向：
1. **多模型/多提供商生态扩展**：新增Charm Hyper、Friendli等新兴推理平台接入，同步推进存量平台的密钥格式、非标准字段兼容，以及即将下线模型的迁移适配方案。
2. **Context Matrix核心功能落地**：Phase3（模板+最近范围）、Phase4a（Markdown存储投影）两个里程碑同步推进，是当前团队优先级最高的新特性方向。
3. **跨平台全场景兼容优化**：集中解决Windows路径处理、macOS老旧系统工具版本兼容、多语言字符渲染等之前边缘场景覆盖不足的问题。
4. **扩展API能力增强**：开放更多底层RPC接口，新增Provider Payload自定义注册、扩展获取已加载技能列表等能力，进一步释放第三方生态的开发自由度。

## 6. 开发者关注点
近期开发者反馈的高频痛点集中在3个维度：
1. **核心交互体验类**：流式输出强制回滚、多工具并行调用时TUI全屏闪烁、v0.80.2版本启动速度慢的问题吐槽量很高，直接影响日常使用流畅度。
2. **资源消耗类**：LLM缓存对多步编码任务不生效导致token快速浪费、长会话压缩逻辑容易空转的问题，大幅提升用户的使用成本。
3. **扩展开发类**：官方扩展示例代码存在逻辑bug、渲染异常被静默吞掉难以调试、自定义扩展覆盖内置Provider时缺少统一的请求载荷注入机制，提升了第三方开发者的调试门槛。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 2026-06-29
数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日Qwen Code正式发布v0.19.3稳定版，核心修复web_fetch模块的JSON解析容错能力。社区集中暴露了v0.19.x迭代后多个涉及非预期token消耗的高危bug，最高单僵尸会话直接烧掉30M tokens，同时近20条高优先级PR集中落地了断点续跑、语音输入、上下文压缩优化等用户长期呼声的特性，呈现出新版本快速迭代+高频问题同步修复的活跃开发状态。

## 2. 版本发布
过去24小时共上线2个官方版本：
- **v0.19.3 正式版**：核心修复web_fetch组件的JSON解析逻辑，当网页抓取返回非标准格式JSON时不再直接崩溃，自动触发文本解析兜底策略，大幅提升网页工具的可用性。
- **v0.19.2-nightly.20260628.714513df2 预览版**：预发布版本同步携带上述web_fetch修复，供尝鲜用户提前测试验证。

## 3. 社区热点 Issues（Top 10）
| Issue编号 | 标题摘要 | 重要性说明 | 链接 |
| --- | --- | --- | --- |
| #5964 | v0.19.2僵尸会话烧掉30M tokens，自动切断问题未修复 | P1最高优先级高危bug，无人值守的后台Agent偷偷跑8小时无日志记录，直接造成用户经济损失，是当前社区最高关切问题 | https://github.com/QwenLM/qwen-code/issues/5964 |
| #5819 | 升级后自动切换为更高单价模型，自行调用浪费token的策略 | 高影响计费bug，多位用户反馈升级版本后setting.json被自动篡改，不知情消耗掉大模型平台余额，严重影响产品信任度 | https://github.com/QwenLM/qwen-code/issues/5819 |
| #5950 | 触发400报错：请求token数超过131072上下文上限 | 大量用户反馈v0.19.x版本下输出64K长内容时经常上下文溢出，是高频阻塞使用的bug | https://github.com/QwenLM/qwen-code/issues/5950 |
| #5942 | Anthropic服务商下可避免的prompt缓存 miss大幅推高使用成本 | 对比原生Claude Code的缓存命中率，Qwen Code当前的请求构造逻辑无端多产生数倍token消耗，影响付费用户的使用成本 | https://github.com/QwenLM/qwen-code/issues/5942 |
| #5736 | 最近版本升级后频繁出现全量prompt重处理 | 本地LLM用户反馈会话过程中不必要的全prompt重跑次数显著增加，拖慢本地推理速度、浪费算力 | https://github.com/QwenLM/qwen-code/issues/5736 |
| #5683 | 子Agent token计数准确性异常 | 用户观测到子Agent的token统计值远大于实际消耗，统计失真导致用户无法准确管控成本 | https://github.com/QwenLM/qwen-code/issues/5683 |
| #5966 | 0.19.3 UI不定期错误，中文输入法完全失效 | 中文用户高频反馈的阻塞性交互bug，输入法突然失效后只能输入拼音无法正常使用 | https://github.com/QwenLM/qwen-code/issues/5966 |
| #5800 | CLI静态渲染模式下超过终端高度的回复最后一行被覆盖 | 长期存在的TUI体验bug，阅读长输出时关键信息丢失，影响CLI重度用户使用 | https://github.com/QwenLM/qwen-code/issues/5800 |
| #5958 | Web Shell编辑器在移动端浏览器完全无法使用 | 移动端场景下核心输入功能失效，阻断用户随时随地通过浏览器使用Qwen Code的路径 | https://github.com/QwenLM/qwen-code/issues/5958 |
| #5956 | 新增支持自定义上下文压缩模型配置 | 高价值功能需求，允许用户用低成本小模型做上下文压缩，避免用高价大模型自身做压缩浪费成本 | https://github.com/QwenLM/qwen-code/issues/5956 |

## 4. 重要 PR 进展（Top 10）
| PR编号 | 内容摘要 | 价值说明 | 链接 |
| --- | --- | --- | --- |
| #5957 | 上下文压缩阈值计算时扣除输出预留token | 直接解决上下文溢出400报错问题，自动压缩逻辑现在会提前为64K长输出预留空间，不会等到触发API报错才动作 | https://github.com/QwenLM/qwen-code/pull/5957 |
| #5030 | 支持无需发送"继续"合成消息，直接续跑中断的会话轮次 | 对应#4679长期需求，大幅优化异常中断后的恢复体验，不会在对话历史中插入冗余的人工prompt | https://github.com/QwenLM/qwen-code/pull/5030 |
| #5962 | 新增--insecure flag，支持跳过自签名证书的TLS校验 | 适配大量私有部署、自托管大模型端点的使用场景，解决内网服务证书不被信任的连接问题 | https://github.com/QwenLM/qwen-code/pull/5962 |
| #5738 | CLI默认开启虚拟化终端历史 | 解决长期以来TUI滚动体验差、长输出被覆盖的问题，新用户开箱就可以获得流畅的滚动浏览体验 | https://github.com/QwenLM/qwen-code/pull/5738 |
| #5860 | 放宽CI自动修复工作流的Issue候选筛选条件 | 让官方的自动修bug机器人实际能抓取到待修复的普通Issue，大幅提升自动化迭代效率 | https://github.com/QwenLM/qwen-code/pull/5860 |
| #5856 | 桌面端新增语音听写功能 | 把终端早已支持的/voice语音输入能力扩展到桌面端，对齐全端体验，提升输入效率 | https://github.com/QwenLM/qwen-code/pull/5856 |
| #5890 | 新增.qwen/loop.md持久化任务清单文件 | 长运行loop模式下用户可以随时手动编辑任务列表，不需要每次循环都重新口述完整任务，大幅提升批量自动化任务的可用性 | https://github.com/QwenLM/qwen-code/pull/5890 |
| #5951 | 新增@qwen-code/chat-panel共享组件包 | 把Web Shell的对话逻辑抽为通用组件，未来可以快速复用给VS Code插件、桌面端，实现多端体验完全对齐 | https://github.com/QwenLM/qwen-code/pull/5951 |
| #5963 | 仅在自动内存功能开启时才生成内存召回任务 | 修复非预期内存召回逻辑无端消耗token的问题，进一步优化成本管控 | https://github.com/QwenLM/qwen-code/pull/5963 |
| #5777 | 基于daemon直连架构重构复活Chrome浏览器扩展 | 废弃之前复杂的Native Messaging架构，扩展仅作为本地qwen serve服务的薄客户端，大幅降低扩展的维护成本和安装门槛 | https://github.com/QwenLM/qwen-code/pull/5777 |

## 5. 功能需求趋势
从今日更新的Issue中提炼出社区最高频的功能方向：
1. **Token成本管控类需求集中爆发**：僵尸会话自动切断、自定义压缩模型、缓存命中率优化、精准token统计相关的需求占比超30%，付费用户对非预期消耗的敏感度大幅提升。
2. **多端体验全对齐诉求强烈**：用户普遍要求把CLI已验证的语音输入、流畅滚动、长输出渲染等能力快速同步到Web、桌面、移动端，消除不同端之间的体验断层。
3. **自托管场景适配需求快速增长**：内网私有模型对接、自签名证书跳过校验、CPU/内存资源边界管控等面向私有部署的功能关注度持续走高。
4. **生态扩展方向清晰**：群聊常驻Agent（钉钉优先）、Chrome浏览器扩展、开放SDK断点续跑流等面向二次开发的特性需求明显增多。

## 6. 开发者关注点
今日开发者反馈的核心痛点：
1. v0.19.x版本的计费相关bug集中爆发，多起真实用户反馈非预期token消耗直接造成经济损失，成本管控的可靠性是当前用户最担忧的核心问题。
2. Windows平台UI渲染、中文输入法、滚动逻辑等基础交互bug高频出现，虽然不影响核心功能，但大幅拉低日常使用体验。
3. 本地/自托管私有大模型的适配能力依然不足，很多内网部署场景的兼容性问题缺乏开箱即用的支持，需要开发者手动修改源码解决。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 2026-06-29
数据来源: github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览
过去24小时项目无正式版本发布，核心开发团队集中火力推进最高优先级的缓存命中率、Token消耗优化相关工作，累计合入20项修复与特性PR，一口气解决了模式逻辑混乱、编辑器崩溃、Windows下任务意外中断等多个高频阻塞性bug，同时正式新增对Sakana AI Fugu模型的官方兼容支持。近期积压的TOP级用户反馈80%已完成对应落地方案，开发节奏围绕降本、提稳两大核心目标推进。

## 2. 版本发布
过去24小时无新正式版本发布。

## 3. 社区热点 Issues（精选10条）
| Issue ID | 核心内容 | 重要性说明 | 链接 |
|---------|---------|---------|-----|
| #1177 | v0.8.66输入缓存命中率过低 | 24条评论为当前最高热度，大量用户实测命中率远低于DeepSeek官方收录的同类产品DeepSeek-Reasonix的95%+水平，是当前用户反馈最集中的成本痛点 | [Hmbown/CodeWhale#1177](https://github.com/Hmbown/CodeWhale/issues/1177) |
| #1120 | 缓存命中机制仍然存在异常 | 21条跨语种评论，海内外用户共同佐证缓存命中率不达预期，社区用户自发提交了多组对比测试数据，为团队排查提供参考 | [Hmbown/CodeWhale#1120](https://github.com/Hmbown/CodeWhale/issues/1120) |
| #743 | Token消耗量异常增大 | 13条用户反馈，有用户实测半天消耗4亿Token，远超出正常使用预期，直接关联使用成本飙升问题 | [Hmbown/CodeWhale#743](https://github.com/Hmbown/CodeWhale/issues/743) |
| #3275 | 工具自主越权修改、自问答脱离用户意图 | 12条讨论，属于高影响可靠性缺陷，Agent会自动超出用户请求范围执行操作，存在误改代码的安全风险 | [Hmbown/CodeWhale#3275](https://github.com/Hmbown/CodeWhale/issues/3275) |
| #3568 | Plan与Agent模式切换逻辑再次混淆 | 7条评论、2个点赞，已闭环修复，用户反馈在Plan模式下仍然触发Agent的文件修改行为，模式边界完全失效 | [Hmbown/CodeWhale#3568](https://github.com/Hmbown/CodeWhale/issues/3568) |
| #3657 | 编辑器启动时卡死导致应用崩溃 | 5条讨论，已闭环修复，用户按Ctrl+O打开外置编辑器会直接冻住整个进程，必须强杀才能恢复，属于高频阻塞性UX问题 | [Hmbown/CodeWhale#3657](https://github.com/Hmbown/CodeWhale/issues/3657) |
| #3732 | 全模态层UI破损出现内容穿透、按钮截断 | 官方刚提交的严重UX缺陷，所有弹窗都会出现背景内容透传、操作按钮被截断的问题，影响所有带确认流程的操作 | [Hmbown/CodeWhale#3732](https://github.com/Hmbown/CodeWhale/issues/3732) |
| #3738 | 定位Prompt缓存命中率下跌根因 | 官方置顶排查Issue，怀疑是每轮请求新增的`<turn_meta>`动态块破坏了可缓存前缀结构，直接引导后续一批缓存相关优化PR的落地 | [Hmbown/CodeWhale#3738](https://github.com/Hmbown/CodeWhale/issues/3738) |
| #3717 | Windows平台输出DSML相关内容就中断任务 | 已闭环修复，大量Windows用户反馈只要返回内容出现DSML标记，任务就会直接终止，是跨平台兼容性的核心痛点 | [Hmbown/CodeWhale#3717](https://github.com/Hmbown/CodeWhale/issues/3717) |
| #3734 | Plan模式下写操作未被硬拦截 | 已闭环修复，Plan模式提示文案标注所有写操作会被阻止，但实际运行时仅做沙箱隔离没有拦截，存在安全隐患 | [Hmbown/CodeWhale#3734](https://github.com/Hmbown/CodeWhale/issues/3734) |

## 4. 重要 PR 进展（精选10条）
| PR ID | 核心内容 | 价值说明 | 链接 |
|---------|---------|---------|-----|
| #3748、#3749 | 新增Sakana AI Fugu官方提供商支持 | 新增Fugu系列模型兼容，支持OpenAI协议流式调用，覆盖推理版等多个子模型，贡献来自社区开发者lerugray | [Hmbown/CodeWhale#3749](https://github.com/Hmbown/CodeWhale/pull/3749) |
| #3750 | 统一修复模态框背景渲染逻辑 | 为所有弹窗增加不透明蒙层，彻底解决#3732提到的模态层内容穿透问题，同时优化窄终端下操作按钮截断的适配逻辑 | [Hmbown/CodeWhale#3750](https://github.com/Hmbown/CodeWhale/pull/3750) |
| #3729 | 修复外置编辑器启动时卡死崩溃 | 切换到外置编辑器前暂停终端输入泵、清空缓冲事件，退出后再重绘界面，完美闭环修复#3657的崩溃问题 | [Hmbown/CodeWhale#3729](https://github.com/Hmbown/CodeWhale/pull/3729) |
| #3718 | 全宽DSML工具标记清洗逻辑优化 | 在流输出环节自动过滤非预期的全角DSML标记块，闭环修复Windows下任务意外中断的#3717缺陷 | [Hmbown/CodeWhale#3718](https://github.com/Hmbown/CodeWhale/pull/3718) |
| #3739 | 下线未完成的Auto模式 | 从UI、配置、快捷键全链路隐藏仅空有壳子的Auto模式，所有旧配置自动回退为Agent模式，避免用户混淆模式逻辑 | [Hmbown/CodeWhale#3739](https://github.com/Hmbown/CodeWhale/pull/3739) |
| #3743、#3745 | 新增缓存命中率分路由统计面板 | 每轮请求记录对应的提供商/模型路由信息，在/cache面板展示分线路的缓存命中率数据，帮助快速定位缓存碎片化导致的命中率下跌问题 | [Hmbown/CodeWhale#3745](https://github.com/Hmbown/CodeWhale/pull/3745) |
| #3719、#3720、#3723 | MCP传输层模块化重构 | 把Stdio、SSE、Streamable HTTP三类传输逻辑从单文件抽离为独立模块，大幅降低MCP协议的代码维护成本 | [Hmbown/CodeWhale#3723](https://github.com/Hmbown/CodeWhale/pull/3723) |
| #3721 | 新增verifier验证器预览配置表 | 新增独立的[verifier]配置段，支持把验证结果的pass/partial/fail映射为hunted/wounded/escaped语义，为后续自动化漏洞扫描能力铺路 | [Hmbown/CodeWhale#3721](https://github.com/Hmbown/CodeWhale/pull/3721) |
| #3746、#3747 | 修复Auto模式下只读命令误判危险 | 增加严格的只读Shell命令分类器，版本查询、帮助命令这类完全无风险的操作不再弹出审批提示，降低非必要交互 | [Hmbown/CodeWhale#3747](https://github.com/Hmbown/CodeWhale/pull/3747) |
| #3740 | 提供商密钥状态显示优化 | 把API密钥未设置、OAuth未登录两类状态分开展示，用户可以一眼看清当前哪个模型提供商还没配置可用密钥 | [Hmbown/CodeWhale#3740](https://github.com/Hmbown/CodeWhale/pull/3740) |

## 5. 功能需求趋势
从近期Issue反馈提炼出社区最高优先级的5个需求方向：
1. **性能降本**：缓存命中率提升、Prompt瘦身、Token消耗优化是当前头号需求，直接关联用户使用成本，热度远超其他特性
2. **多生态兼容**：新模型提供商接入、Agent Client Protocol注册表上架适配Zed编辑器、vLLM/OpenAI两类本地部署模式的文档补全，都是近期高频呼声
3. **体验升级**：TUI整体视觉UX重构、韩语/西班牙语/巴西葡萄牙语多语言本地化、界面可读性优化
4. **可靠性加固**：模式边界严格隔离、Agent自主操作范围收窄、危险操作二次确认机制完善，避免非预期的文件修改
5. **长期架构演进**：Moraine作为长期会话内存后端接入、Rust原生桌面客户端替换现有Node.js运行时、Fleet分布式推理负载自动调度

## 6. 开发者关注点
1. **成本痛点**：绝大多数重度用户遇到缓存命中率不足导致Token费用上涨数倍的问题，部分用户单日Token消耗超过百万级，远高于同类产品的使用成本
2. **模式逻辑混乱**：Plan/Agent/Auto三类模式的边界模糊，切换时经常出现策略不同步、配置残留的bug，普通用户很难区分不同模式的实际差异
3. **跨平台稳定性差**：Windows平台下存在大量独有兼容性问题，DSML标记打断任务、外置编辑器适配差等缺陷长期影响Windows用户体验
4. **现有栈性能瓶颈**：当前基于Node.js的TUI分发架构存在冷启动慢、内存占用高、单线程阻塞的问题，社区普遍期待Rust重写的原生客户端版本推出解决性能问题。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*