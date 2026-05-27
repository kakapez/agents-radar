# AI CLI 工具社区动态日报 2026-05-28

> 生成时间: 2026-05-27 23:18 UTC | 覆盖工具: 9 个

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

# 2026-05-28 主流AI CLI工具横向对比分析报告
## 1. 生态全景
当前AI CLI赛道已完全脱离早期原型验证阶段，进入生产级落地的爆发期，海外头部厂商官方产品与国内大模型厂商、中立开源项目同步高速迭代，整体呈现“官方旗舰产品筑牢基本盘、开源项目填补差异化场景”的分工格局。行业迭代重心已从基础Agent调用能力，全面转向企业级合规管控、MCP生态互通、成本精细化管控三大核心赛道，核心用户覆盖从独立个人开发者向百人级企业研发团队延伸，用户痛点已从“能不能跑”下沉到边缘场景体验、配额合理消耗、数据隐私保障等深层诉求。全行业正在快速对齐MCP工具扩展统一标准，跨工具生态互通的闭环雏形已经显现，其中面向国内开发者的国产AI CLI迭代速度已整体追平甚至超过海外同类产品，本地化特性补全节奏显著更快。

## 2. 各工具活跃度对比
| 工具名称 | 今日更新Issues总量 | 今日活跃/合并PR总量 | 今日Release情况 |
|---------|-------------------|---------------------|----------------|
| Claude Code | 50条 | 5条高优待合并PR | v2.1.152 正式版 |
| OpenAI Codex | 30条高热度Bug/需求 | 20+核心PR合并/新增 | rust-v0.135.0-alpha.1、rust-v0.135.0-alpha.2 两个底层预发布版 |
| Gemini CLI | 10条精选高优Issue | 10条核心PR | v0.44.0正式版、v0.45.0-preview.0预览版、v0.45.0-nightly 夜间版共3个 |
| GitHub Copilot CLI | 10条热点Issue | 0条新提交公开PR | v1.0.55-2 ~ v1.0.55-6共5个小迭代版本 |
| Kimi Code CLI | 6条高优活跃Issue | 9条核心PR | v1.45.0 正式版 |
| OpenCode | 10条精选高优Issue | 10条核心PR | v1.15.11 正式版 |
| Pi | 50条更新Issue | 20条核心PR | v0.76.0 正式版 |
| CodeWhale(原DeepSeek TUI) | 30条更新Issue | 50个核心PR | v0.8.47 更名后首个正式版 |

## 3. 共同关注的功能方向
1. **MCP生态兼容与权限平衡**：所有8款工具均在迭代MCP相关能力，共同诉求是同时解决“高频调用重复审批打断工作流”和“第三方工具越权访问系统资源”的矛盾，具体动作包括新增非交互场景默认权限规则、暴露MCP运行状态、独立路由MCP日志等。
2. **子代理智能调度与成本管控**：覆盖Claude Code、OpenAI Codex、Gemini CLI、Pi、Qwen Code、CodeWhale共6款工具，核心诉求是实现简单机械任务自动调度低成本小模型执行，从底层解决高成本模型配额无意义异常消耗的普遍痛点。
3. **跨终端全场景兼容补全**：全工具都在集中修复Zellij、tmux、WSL2、Wayland、Termux等非主流终端的适配Bug，高频共性问题集中在复制粘贴失效、快捷键冲突、TUI渲染闪屏三类基础体验故障。
4. **企业级部署适配**：覆盖Claude Code、OpenAI Codex、GitHub Copilot CLI、Qwen Code、OpenCode共5款工具，集中落地SSL代理兼容、组策略管控、无管理员权限沙箱部署、细粒度令牌权限等特性，满足企业IT统一托管的合规要求。
5. **大上下文能力适配**：覆盖OpenAI Codex、Gemini CLI、Pi、OpenCode共4款工具，诉求是放开此前不合理的百万级token输入硬限制，匹配新一代大模型的大长上下文能力，避免大文件上传场景被无端拦截。

## 4. 差异化定位分析
| 工具名称 | 功能侧重 | 目标用户 | 技术路线差异 |
|---------|----------|----------|--------------|
| Claude Code | 优先迭代代码审查一键修复、权限管控核心能力 | 中高端付费个人开发者、资深研发团队 | 闭源优先迭代核心体验，高优先级响应用户提出的开源化需求 |
| OpenAI Codex | 重点落地企业级沙箱部署、OAuth认证体系 | 团队级企业研发用户 | 底层全量用Rust重写核心工具链，优先保障生产环境稳定性 |
| Gemini CLI | 聚焦Agent执行可靠性、本地提示词缓存优化 | 关注端侧隐私、跨场景移动开发的个人用户 | 优先适配安卓Termux、Linux Wayland等小众运行环境 |
| GitHub Copilot CLI | 对齐VS Code配置规则、打通IDE与终端体验闭环 | 深度绑定GitHub/VsCode生态的开发者 | 全量推送新单元格渲染引擎，完全复用现有GitHub账号权限体系 |
| Kimi Code CLI | 重点优化多代理并行调度性能、限流问题 | 国内本土开发者、高并发自动化场景用户 | 从旧Python版本全面迁移到TypeScript重写架构，快速补齐国内生态适配短板 |
| OpenCode | 主打多厂商大模型兼容 | 有大量自定义模型接入需求的开发者 | 完全中立开源路线，优先适配国产大模型、本地LLM等通用OpenAI兼容后端 |
| Pi | 高自由度插件生态扩展 | 自定义工作流、CI/CD集成的扩展开发者 | 优先开放底层API钩子，满足用户个性化自动化编排需求 |
| CodeWhale | 极致成本优化、轻量便携体验 | 追求低token消耗的个人独立开发者 | 主打双模型混合路由、前缀缓存，在不损失效果的前提下把调用成本降低6倍以上 |

## 5. 社区热度与成熟度
第一梯队（社区活跃度最高，迭代速度最快）：Pi和CodeWhale为代表的开源社区驱动产品，单日更新量达到50条Issue/20PR和30条Issue/50PR，贡献者数量多，新特性落地速度远高于官方闭源产品。
第二梯队（成熟度最高，生产落地最广）：Claude Code、OpenAI Codex、GitHub Copilot CLI，均为头部大模型生态的官方旗舰产品，已经大规模进入企业生产环境，核心能力稳定，存量用户基数最大，当前反馈以边缘体验类小bug为主。
第三梯队（高速增长期）：Gemini CLI、OpenCode、Kimi Code CLI，每日Issue/PR更新量稳定，正快速补齐核心体验短板，重点拓展本地大模型适配、国内生态支持等差异化场景。
第四梯队（快速追赶阶段）：Qwen Code，迭代重心集中在基础构建稳定性、Daemon服务化，正面向国内JetBrains生态用户快速渗透。

## 6. 值得关注的趋势信号
1. **MCP已成为行业事实性标准**：所有头部工具均在快速对齐MCP协议，开发者后续开发AI CLI插件优先基于MCP标准实现，可一次适配全生态80%以上的主流产品，无需为不同工具单独做定制开发。
2. **成本管控从附加特性变为核心刚需**：全行业原生落地的子代理调度、输出自动截断、缓存机制可帮助开发者降低70%以上不必要的大模型配额消耗，做长任务自动化工作流时优先选择支持原生成本优化的产品，可大幅降低使用成本。
3. **AI CLI正在从个人工具转向企业基础设施**：企业级合规管控类特性集中爆发，企业IT团队大规模部署前优先评估已经支持SSL代理、组策略、细粒度权限的成熟产品，可避免后续出现合规和数据安全风险。
4. **国产工具本土化优势显著**：国产AI CLI针对国内开发者使用习惯、国产大模型适配、中文场景优化的完成度远高于海外产品，国内开发者优先选型本土工具可大幅降低配置和适配成本。
5. **Daemon后台常驻模式成为下一阶段主流方向**：支持无人值守运行、移动端远程管控的产品正在快速迭代，后续会在DevOps自动化场景快速普及，开发者可以提前适配相关工作流，提升长任务运维效率。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-05-28）
---
## 1. 热门 Skills 排行
按社区关联需求热度排序，共7个高关注度技能：
1. **文档排版质控 Skill（document-typography）**
   - 关联PR: https://github.com/anthropics/skills/pull/514
   - 功能：自动检测修复AI生成文档中的孤行溢出、寡段悬挂、编号错位等通用排版问题
   - 讨论热点：社区用户反馈所有Claude生成的正式文档都存在这类排版瑕疵，此前没有统一的系统性解决方案
   - 当前状态：OPEN
2. **ODT 全格式处理 Skill**
   - 关联PR: https://github.com/anthropics/skills/pull/486
   - 功能：支持OpenDocument格式（.odt/.ods等开源ISO办公格式）的创建、模板填充、解析转HTML
   - 讨论热点：填补了Claude对LibreOffice生态文档的原生支持空白，满足大量使用开源办公软件的企业合规需求
   - 当前状态：OPEN
3. **Skill 质检元技能套件**
   - 关联PR: https://github.com/anthropics/skills/pull/83
   - 功能：包含`skill-quality-analyzer`和`skill-security-analyzer`两个元技能，从结构合规、文档完整度、安全风险等5个维度自动检测第三方Skill质量
   - 讨论热点：当前社区提交的Skill质量参差不齐，用户亟需自动化工具筛选安全可用的技能，避免恶意Skill权限滥用
   - 当前状态：OPEN
4. **前端设计 Skill 优化版**
   - 关联PR: https://github.com/anthropics/skills/pull/210
   - 功能：重写原有`frontend-design`技能，所有指导规则均调整为单对话内可落地执行的具体指令，消除模糊表述
   - 讨论热点：旧版前端技能输出的内容泛化严重，大量开发者反馈生成的前端代码完全不符合工程规范，优化后可直接用于生产级前端交付
   - 当前状态：OPEN
5. **全栈测试模式 Skill**
   - 关联PR: https://github.com/anthropics/skills/pull/723
   - 功能：覆盖从单元测试、React组件测试到测试策略设计的完整工业界最佳实践体系
   - 讨论热点：此前Claude生成的测试用例普遍不符合团队约定规范，该技能对齐主流测试栈标准，大幅降低测试代码的修改成本
   - 当前状态：OPEN
6. **ServiceNow 全平台 Skill**
   - 关联PR: https://github.com/anthropics/skills/pull/568
   - 功能：覆盖ITSM、SecOps、ITAM、集成开发等全部ServiceNow产品线的助手能力
   - 讨论热点：全球大量中大型企业是ServiceNow重度用户，此前没有适配该平台的专属技能，需求呼声极高
   - 当前状态：OPEN
7. **AURELION 认知框架技能套件**
   - 关联PR: https://github.com/anthropics/skills/pull/444
   - 功能：由结构化思考模板、记忆管理、知识协作4个子技能组成的框架，解决长对话上下文丢失、输出逻辑混乱的痛点
   - 讨论热点：专业用户普遍反馈Claude长对话输出容易逻辑跳脱，该框架可大幅提升复杂问题处理的输出严谨度
   - 当前状态：OPEN
---
## 2. 社区需求趋势
从高热度Issue中提炼出5个核心需求方向：
1. **组织级Skill协作需求**：最高热度Issue #228（13条评论、7个赞）明确要求支持企业组织内直接共享Skill，替代当前手动下载文件、跨渠道传输的低效率模式，打造团队内部统一的Skill市场。
2. **Skill开发工具链稳定化需求**：大量高赞Issue集中反馈`skill-creator`、`run_eval.py`等官方开发工具在Windows平台完全不可用、技能触发率为0等致命bug，开发者群体强烈要求官方优先优化基础开发体验。
3. **跨生态集成需求**：社区高频提出Claude Skills对接AWS Bedrock、适配MCP协议打通工具生态、对接企业SharePoint/私有存储等需求，希望将Claude能力无缝接入现有企业技术栈。
4. **垂直业务场景专属Skill需求**：SAP业务数据预测、n8n低代码工作流搭建、AI代理治理等企业特定场景的Skill提案收到大量正向反馈，To B场景的定制化技能需求远高于C端消费类技能。
5. **全格式文档能力补全需求**：PDF、DOCX等现有文档技能的格式兼容性bug收到大量反馈，用户期望官方覆盖所有主流办公文档格式的无损坏解析和生成能力。
---
## 3. 高潜力待合并 Skills
以下PR均为解决高频通用痛点的优先级补丁，更新时间近且对应明确的已认领Issue，大概率在1-2周内合并上线：
1. Skill-creator Windows管道崩溃修复：https://github.com/anthropics/skills/pull/1099，2026-05-24更新，解决Windows平台下`run_eval.py`子进程读取逻辑崩溃、所有技能触发率显示为0的问题。
2.

---

# Claude Code 社区动态日报 | 2026-05-28
数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
Anthropic 今日正式推送 Claude Code v2.1.152 新版本，核心升级了代码审查一键修复能力与技能命令的权限管控机制。过去24小时社区共更新50条Issue，核心反馈集中在会话历史丢失、跨平台兼容性故障、高成本模型配额异常消耗三大类高频痛点，多个高优先级修复PR已进入待合并队列，社区呼声极高的开源化功能PR仍在持续迭代跟进。

## 2. 版本发布
今日推送正式版 **v2.1.152**，核心更新点如下：
- `/code-review --fix` 能力升级：代码审查完成后自动将可落地的复用、简化、效率优化建议直接应用到本地工作区，原独立命令 `/simplify` 现在直接调用该能力
- 权限管控新增特性：所有自定义Skills和斜杠命令可在前置元数据中配置`disallowed-tools`字段，主动禁用非必要工具权限，降低技能运行风险

## 3. 社区热点 Issues
精选10个影响范围广、社区关注度高的Issue：
1. **[OPEN] macOS 端更新后自动删除项目聊天历史JSONL** #62272
   重要性：属于数据丢失级高危故障，即便用户设置了很高的`cleanupPeriodDays`阈值，更新/重启仍会触发会话历史删除。提交者已开源基于Time Machine的恢复脚本，已有7条用户反馈受影响。
   链接：https://github.com/anthropics/claude-code/issues/62272
2. **[CLOSED] Windows11 更新后 Cowork 协作标签页消失** #49748
   重要性：9条评论、4个点赞，大量Windows端协作场景用户反馈升级后直接丢失协作入口，官方已完成闭环修复。
   链接：https://github.com/anthropics/claude-code/issues/49748
3. **[CLOSED] Claude Design 无法读取本地 .fig 设计文件** #51149
   重要性：9个点赞，大量产品设计、UI开发用户反馈设计交付链路中断，官方已标记无效并推送补丁适配新Figma导出格式。
   链接：https://github.com/anthropics/claude-code/issues/51149
4. **[OPEN] Windows 端 Node SDK  recurring 套接字断连故障** #62146
   重要性：开发者累计采集81个故障样本，确认和status.claude.com服务端错误高峰强相关，故障会同时波及Claude Code CLI和桌面端所有客户端。
   链接：https://github.com/anthropics/claude-code/issues/62146
5. **[CLOSED] Opus 4.7 不会将机械性工作委派给低成本子代理** #51609
   重要性：即便用户在项目规则中明确指定文件重命名、批量迁移等简单任务使用Sonnet/Haiku低成本模型，Opus仍全链路用高成本模型执行，导致配额异常快速消耗。
   链接：https://github.com/anthropics/claude-code/issues/51609
6. **[CLOSED] macOS 端 CLI 粘贴功能失效，Cmd+V 仅输出字母v** #39764
   重要性：7条评论，故障从v2.1.84版本开始出现，影响所有TUI用户的输入效率，官方已完成修复。
   链接：https://github.com/anthropics/claude-code/issues/39764
7. **[CLOSED] Windows 端「开机自动启动」开关无法关闭** #48078
   重要性：5条评论、2个点赞，大量普通用户反馈程序后台驻留占用系统资源，故障已闭环。
   链接：https://github.com/anthropics/claude-code/issues/48078
8. **[CLOSED] 技能崩溃直接连带远程控制会话整体宕机** #49501
   重要性：两个完全独立的子系统没有做故障隔离，云侧代码审查技能因为限流崩溃后，会直接杀掉活跃的移动端远程控制会话，属于架构级缺陷。
   链接：https://github.com/anthropics/claude-code/issues/49501
9. **[OPEN] Windows 端启动时捕获的Git状态快照不会自动更新** #62947
   重要性：用户启动后如果其他同事提交了新代码，Claude Code会基于过期的Git状态做修改，很容易触发代码冲突。
   链接：https://github.com/anthropics/claude-code/issues/62947
10. **[OPEN] Linux 端自动更新失败** #62950
    重要性：v2.1.152版本原生触发，用户收到提示运行`/doctor`也无法修复，目前正在排查根因。
    链接：https://github.com/anthropics/claude-code/issues/62950

## 4. 重要 PR 进展
过去24小时共更新5条活跃PR，均为高优先级待合并项：
1. **#62941 修复ralph-wiggum插件读取助手回复逻辑**：修正原脚本仅读取transcript最后一行的缺陷，支持完整解析包含thinking、text、tool_use多块的完整助手输出，避免停止钩子误判。
   链接：https://github.com/anthropics/claude-code/pull/62941
2. **#62906 修复ralph-wiggum插件Windows路径兼容问题**：给停止钩子脚本增加bash解释器前缀，解决Windows下Git Bash/MSYS环境中带空格路径无法识别的故障。
   链接：https://github.com/anthropics/claude-code/pull/62906
3. **#61742 补充Agent视图TUI工作目录限制文档**：明确说明目前新启动的代理会话会继承父TUI的工作目录，不支持自定义路径，给出多项目并行的临时解决方案。
   链接：https://github.com/anthropics/claude-code/pull/61742
4. **#62821 新增插件-MCP会话ID适配文档**：公开目前插件侧无法直接获取`CLAUDE_CODE_SESSION_ID`的问题，给出env-bridge workaround方案供MCP插件开发者参考。
   链接：https://github.com/anthropics/claude-code/pull/62821
5. **#41447 开源Claude Code核心功能**：社区提交的全量开源PR，目前持续跟进迭代，已经关联关闭多个历史需求Issue。
   链接：https://github.com/anthropics/claude-code/pull/41447

## 5. 功能需求趋势
从今日更新Issue中提炼社区最关注的产品方向：
1. **内存系统精细化管控**：超过4成用户反馈希望独立开关`CLAUDE.md`项目规则和`MEMORY.md`长期记忆的自动加载能力，不要用单一`autoMemoryEnabled`开关同时控制两个独立功能。
2. **UX 友好性优化**：用户强烈要求在界面上直接禁用/隐藏当前模型不支持的effort等级选项，避免误导用户设置无效参数，同时在顶部状态栏展示当前登录账号的邮箱、所属组织信息，便于多账号切换场景识别身份。
3. **子代理智能调度**：希望官方内置自动判断任务复杂度的能力，简单机械任务自动调度低成本小模型执行，从底层减少高成本大模型的不必要消耗。
4. **企业级管控支持**：大量企业用户反馈希望Windows端HKLM组策略的托管配置可以正常下发生效，满足组织统一管控合规要求。

## 6. 开发者关注点
今日反馈集中的高频痛点：
1. **跨平台兼容性断层**：Windows、macOS、Linux端分别存在大量专属故障，集中在路径编码兼容、多语言粘贴、权限校验等基础体验点，不同版本的回归问题频发。
2. **数据风险隐患高**：没有任何二次确认的会话历史自动删除问题已经对不少用户造成不可逆的工作成果损失，开发者普遍要求增加历史备份开关和删除前二次提示能力。
3. **计费/配额逻辑异常**：周配额计数错误、高成本模型无意义消耗的反馈占比超过20%，不少付费用户反馈每月配额远早于预设时间耗尽，完全不符合预期。
4. **API层稳定性不足**：高峰时段批量出现ECONNRESET连接重置、429限流错误，影响长时运行的自动化工作流稳定性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-05-28
数据来源：github.com/openai/codex

---

## 1. 今日速览
今日OpenAI Codex核心Rust工具链连续发布两个alpha版本迭代，此前大量企业团队反馈的HERMES AGENT OAuth空指针崩溃问题已正式闭环解决。官方代码库昨日累计合并/新增20+核心PR，集中推进Python SDK独立beta通道、Windows企业级沙箱部署、MCP工具权限优化等重点特性落地，社区侧30条高热度bug与功能需求完成更新，整体迭代节奏偏向生产环境稳定性优化。

## 2. 版本发布
今日连续推送2个Codex Rust核心栈预发布版本：
- `rust-v0.135.0-alpha.1`
- `rust-v0.135.0-alpha.2`
两个版本均面向CLI、沙箱、App Server底层能力开放测试通道，暂未放出正式更新日志，后续预计同步修复近两日集中反馈的沙箱执行、远程连接相关回归bug。

## 3. 社区热点 Issues（Top 10）
1. **#24665 [已关闭] HERMES AGENT OAuth空指针崩溃bug** https://github.com/openai/codex/issues/24665
   重要性：累计31条评论、50个点赞，大量团队全员遇到ChatGPT OAuth登录时报错`'NoneType' object is not iterable`，直接阻塞Codex登录流程，目前已完成修复闭环。
2. **#7727 [开放] VSCode Codex插件任务右键菜单新增永久删除选项** https://github.com/openai/codex/issues/7727
   重要性：93个点赞是当前社区热度最高的功能诉求，大量开发者反馈无法直接在IDE内管理已创建的任务，体验断点非常高频。
3. **#24260 [开放] gpt-5.5 xhigh推理模式下桌面端卡顿30分钟才输出首个结果** https://github.com/openai/codex/issues/24260
   重要性：12条评论，多位Windows用户反馈高复杂度大任务场景下UI长时间卡住无响应，影响重度编码工作流的使用体验。
4. **#24373 [开放] Google Drive Sheets连接器可读不可写、共享配额返回429** https://github.com/openai/codex/issues/24373
   重要性：11条评论，大量依赖云文档自动化能力的用户反馈插件重装后写权限异常，直接阻断数据同步类工作流。
5. **#16911 [开放] MCP工具每次调用都要求用户手动审批** https://github.com/openai/codex/issues/16911
   重要性：9个点赞，Pro用户集中反馈高频调用MCP工具时反复弹出审批提示，严重打断连续工作流。
6. **#23952 [开放] iOS端Codex仅显示最近有聊天记录的项目** https://github.com/openai/codex/issues/23952
   重要性：12条评论，移动端用户反馈历史项目全部隐藏，必须退出重登才能刷新全量列表，跨端同步能力存在明显缺陷。
7. **#11806 [开放] WSL环境下Codex运行速度异常缓慢** https://github.com/openai/codex/issues/11806
   重要性：6条评论，大量WSL开发场景的用户反馈近期版本更新后性能暴跌，影响Linux侧开发体验。
8. **#16479 [开放] 技能模块提示词未引导模型完整读取SKILL.md文件** https://github.com/openai/codex/issues/16479
   重要性：大量自定义技能开发者反馈Codex读取SKILL.md时只取片段，导致自定义技能逻辑执行出错，调试成本大幅提升。
9. **#20742 [开放] 输入字符上限1048576的硬限制与GPT-5大上下文能力不匹配** https://github.com/openai/codex/issues/20742
   重要性：用户反馈该字符上限仅对应约30万token，远低于GPT-5.5标称的92万输入token能力，大文件上传场景频繁被拦截。
10. **#22723 [开放] macOS桌面端左上角内容区域右键直接闪退** https://github.com/openai/codex/issues/22723
    重要性：近期新版本UI引入的回归bug，影响全量M系列Mac用户的右键操作体验。

## 4. 重要 PR 进展（Top 10）
1. **#24828 新增Python SDK独立beta发布通道** https://github.com/openai/codex/pull/24828
   解决此前SDK必须跟随核心runtime同步发布beta版本的限制，后续开发者可以单独试用新SDK特性，不需要升级全量底层依赖。
2. **#17931 支持加密本地密钥环认证** https://github.com/openai/codex/pull/17931
   修复Windows凭据管理器2560字节容量限制，解决大体积OAuth载荷、MCP令牌无法持久化存储导致的登录失败问题。
3. **#24831 新增Windows沙箱预部署命令** https://github.com/openai/codex/pull/24831
   允许企业IT运维人员提前完成沙箱的管理员权限配置，普通用户即使没有本地管理员权限也可以直接使用Codex沙箱能力，适配企业托管部署场景。
4. **#24800 Python SDK重命名`AppServerConfig`为`CodexConfig`** https://github.com/openai/codex/pull/24800
   简化SDK调用语义，隐藏底层AppServer传输层的实现细节，已完成合并。
5. **#24830 修复刷新令牌重用分类逻辑** https://github.com/openai/codex/pull/24830
   从底层修复#24665反馈的OAuth空指针崩溃问题。
6. **#24698 将MCP服务器运行状态暴露给App Server** https://github.com/openai/codex/pull/24698
   后续客户端可以直接展示MCP插件的运行状态、版本、能力清单，解决之前用户无法感知MCP是否正常加载的痛点。
7. **#24819 移除冗余的SQLite动态工具存储逻辑** https://github.com/openai/codex/pull/24819
   动态工具已经在会话元数据中持久化，删除多余的SQLite存储路径，为后续多租户命名空间重构做准备。
8. **#24826 为`codex exec`添加客户端元数据参数** https://github.com/openai/codex/pull/24826
   支持自定义自动化脚本传递调用来源标识，方便排查用户侧自定义脚本的执行问题，已完成合并。
9. **#24801 新增出站网络诊断脚手架** https://github.com/openai/codex/pull/24801
   支持通过环境变量`CODEX_NETWORK_DIAGNOSTICS=1`开启脱敏的网络路由、OAuth认证日志导出，大幅降低连接失败问题的排查成本。
10. **#15730 强化符号链接写入防护** https://github.com/openai/codex/pull/15730
    拒绝软链接指向的输出路径和项目配置文件，防止攻击者通过软链接绕过沙箱权限篡改本地文件，提升系统安全性。

## 5. 功能需求趋势
1. **IDE集成体验优化**：最高票需求集中在VSCode插件的交互断点修复，开发者对原生开发环境内的Codex流畅度要求持续提升。
2. **多端协同能力**：iOS/Android远程控制、移动端全量项目同步的需求占比显著上升，用户对跨设备无缝访问Codex工作流的诉求强烈。
3. **MCP生态易用性**：随着MCP插件大规模落地，用户的需求已经从新增功能转向优化审批逻辑、展示运行状态等体验类优化。
4. **企业级部署适配**：无管理员权限的Windows沙箱预配置需求集中爆发，说明Codex已经开始大规模进入企业IT托管环境。
5. **大上下文适配**：不合理的字符硬上限问题被大量用户反馈，要求放开限制匹配GPT-5系列大token能力的趋势明确。

## 6. 开发者关注点
1. 跨平台兼容性问题占比超过40%：Windows、WSL、不同Linux终端下的沙箱执行、TUI渲染、性能bug是当前最集中的痛点，多个平台用户反馈近期升级后出现回归。
2. 认证与第三方连接器稳定性不足：OAuth崩溃、Google Sheets读写失败、移动端远程连接失败的问题近期密集出现，已经阻塞不少团队的日常工作流。
3. 自定义工具/技能开发体验待提升：MCP重复审批、Codex不完整读取SKILL.md的问题，大幅拉高了自定义技能开发者的调试成本。
4. 版本升级兼容性差：大量从0.12x升级到0.13x版本的用户遇到自定义slash命令丢失、本地技能不在列表中显示的回归问题，版本兼容校验机制有待加强。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 2026-05-28
数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
过去24小时项目连续推送3个正式/预览/夜间版本，重点修复了Termux环境适配、PTY终端原生崩溃等高频用户反馈问题。核心团队集中推进子Agent可靠性、Auto Memory安全机制的问题排查，同时合并了本地提示词缓存优化特性，可直接降低用户冗余API调用成本。

## 2. 版本发布
本次过去24小时共发布3个版本：
- **v0.45.0-preview.0**：核心修复Termux环境下的CLI反复重启、终端resize循环挂载bug，大幅提升安卓终端场景的兼容性
- **v0.45.0-nightly.20260527.g41c9260ca**：修复devtools依赖打包缺失导致的解析报错问题
- **v0.44.0 正式版**：汇总前序迭代的全部稳定性、安全修复，是近期面向普通用户的推荐稳定版本

## 3. 社区热点 Issues（精选10条）
| Issue编号 | 优先级 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- | --- |
| #21409 | P1 | 通用Agent触发后无限挂死，哪怕是创建文件夹这类简单任务也会卡住1小时以上，关闭子Agent自动调度即可临时恢复 | 累计获得8个点赞，是普通用户反馈量最高的高频体验问题，团队已标记待重测 | https://github.com/google-gemini/gemini-cli/issues/21409 |
| #27499 | P1 | v0.44.0正式版新上报的终端resize逻辑崩溃，报错`ioctl(2) failed, EBADF`直接导致进程闪退 | 是刚发布的稳定版暴露的严重新缺陷，直接影响全平台终端调整窗口场景的稳定性 | https://github.com/google-gemini/gemini-cli/issues/27499 |
| #24353 | P1 | 组件级评估体系EPIC | 团队长期迭代的核心基建，目前已沉淀76个行为测试用例，覆盖6种Gemini运行场景，后续将成为版本发布前的必跑校验标准 | https://github.com/google-gemini/gemini-cli/issues/24353 |
| #22745 | P2 | AST感知的文件读取/检索能力调研 | 若落地可通过精准定位方法边界减少大段无关代码读取，降低token消耗的同时减少Agent无效轮次，预计可提升代码检索效率30%以上 | https://github.com/google-gemini/gemini-cli/issues/22745 |
| #22323 | P1 | 子Agent达到最大轮次中断后被误标记为GOAL成功，完全隐藏任务中断事实 | 该缺陷会误导用户认为代码库扫描等任务已经完整执行，实际Agent没有做任何分析，属于严重的结果误导问题 | https://github.com/google-gemini/gemini-cli/issues/22323 |
| #25166 | P1 | Shell命令执行完成后界面仍然卡住，显示"等待用户输入"状态 | 简单命令比如ls、echo都可能随机触发，严重影响日常交互式使用体验，累计获得3个点赞 | https://github.com/google-gemini/gemini-cli/issues/25166 |
| #26525 | P2 | Auto Memory机制的敏感信息泄露风险：本地对话内容直接传入提取模型后才做敏感词脱敏，且后台服务会留存日志 | 属于高优先级安全漏洞，涉及用户本地代码、配置密钥的隐私保护，团队正在推进确定性脱敏方案落地 | https://github.com/google-gemini/gemini-cli/issues/26525 |
| #21983 | P1 | 浏览器子Agent在Wayland环境下完全失败无法启动 | 影响大量Linux桌面用户的网页自动化能力使用，累计获得1个点赞 | https://github.com/google-gemini/gemini-cli/issues/21983 |
| #24246 | P2 | 注册工具数量超过128时，直接触发API 400报错 | 针对重度自定义MCP扩展的用户会直接无法正常运行，要求Agent自动做工具范围裁剪避免超量 | https://github.com/google-gemini/gemini-cli/issues/24246 |
| #22093 | P2 | 即使配置文件完全禁用所有子Agent，系统仍然会自动启动通用子Agent执行任务 | 属于权限管控失效问题，不符合用户预期的安全隔离规则 | https://github.com/google-gemini/gemini-cli/issues/22093 |

## 4. 重要 PR 进展（精选10条）
| PR编号 | 状态 | 核心内容 | 价值说明 | 链接 |
| --- | --- | --- | --- | --- |
| #27496 | 开放 | 加固PTY resize逻辑，通过深度防御策略避免进程退出时调整窗口触发node-pty原生C++崩溃 | 直接解决v0.44.0新上报的`EBADF`闪退问题 | https://github.com/google-gemini/gemini-cli/pull/27496 |
| #27497 | 已合并 | 上线本地Prompt Replay Cache机制，对同一进程内重复的生成式API请求做缓存 | 直接减少冗余token消耗，加速重复任务执行速度，降低用户API调用成本 | https://github.com/google-gemini/gemini-cli/pull/27497 |
| #23236 | 已合并 | 浏览器Agent自动适配Linux环境：检测到无头环境自动切headless模式，检测到Wayland直接调用原生显示协议 | 彻底修复Linux用户浏览器子Agent无法启动的长期问题 | https://github.com/google-gemini/gemini-cli/pull/23236 |
| #27467 | 开放 | 修复stripShellWrapper工具对带转义引号的多行命令的解析错误 | 解决复杂多行shell提交命令被错误转义的问题 | https://github.com/google-gemini/gemini-cli/pull/27467 |
| #22325 | 已合并 | 子Agent终止原因透传修复：达到最大轮次中断的任务不会再被误标记为GOAL成功 | 彻底解决子Agent执行结果误导用户的缺陷 | https://github.com/google-gemini/gemini-cli/pull/22325 |
| #27215 | 已合并 | 非交互模式下MCP服务器默认采用全部拒绝的安全策略，新增显式授权机制 | 修复程序自动化调用场景下未经验证的工具执行安全漏洞，符合安全合规要求 | https://github.com/google-gemini/gemini-cli/pull/27215 |
| #27498 | 开放 | 自动化版本提升到v0.46.0-nightly.20260527.g5cac7c10f | 为下一轮夜间迭代版本做准备 | https://github.com/google-gemini/gemini-cli/pull/27498 |
| #23113 | 已合并 | 为codebase_investigator Agent的Schema校验添加最多3次重试限制 | 避免参数缺失场景下Agent无限重试耗尽用户API配额 | https://github.com/google-gemini/gemini-cli/pull/23113 |
| #25605 | 已合并 | 父进程收到SIGTERM/SIGHUP等终止信号时自动转发给子进程 | 彻底解决退出主进程后残留孤儿进程占用资源的问题 | https://github.com/google-gemini/gemini-cli/pull/25605 |
| #27495 | 开放 | 自动生成v0.45.0-preview.0版本的变更日志，等待审核合并 | 保障版本更新信息公开透明 | https://github.com/google-gemini/gemini-cli/pull/27495 |

## 5. 功能需求趋势
从近期Issues集中反馈来看，社区最关注的迭代方向依次为：
1. **Agent执行可靠性专项优化**：超过40%的开放Issue聚焦子Agent挂死、误判结果、无限重试等核心体验缺陷，是当前团队优先级最高的迭代方向
2. **AST感知代码库操作能力落地**：团队已经启动调研，希望通过AST层面的代码检索替代传统文本搜索，大幅提升大代码库场景下的Agent执行效率
3. **Auto Memory内存系统的安全与稳定性升级**：集中解决敏感信息泄露、无效任务无限重试、无效补丁无法隔离等问题，打消用户对本地对话隐私的顾虑
4. **全场景跨平台兼容性适配**：重点覆盖Termux安卓终端、Linux Wayland桌面、Windows WezTerm等小众运行环境的适配
5. **MCP扩展生态的安全管控**：收紧非交互/自动化场景下的工具权限，避免第三方扩展带来的安全风险

## 6. 开发者关注点
当前用户反馈的高频痛点集中在3个方面：
1. **Agent智能度不足**：用户手动配置的gradle、git等自定义技能/子Agent，模型几乎不会主动调用，必须用户显式指令才能触发
2. **交互体验碎片化**：终端resize闪屏、外部编辑器退出后界面乱码、命令执行完随机卡住等待输入等小概率体验问题频发，影响日常流畅度
3. **隐私安全顾虑**：大量用户对Auto Memory上传本地对话到后台做内容提取的行为存在抵触，普遍要求默认关闭敏感信息上传、提供端侧完全本地化的可选模式

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-05-28
数据源：github.com/github/copilot-cli

---

## 1. 今日速览
过去24小时GitHub Copilot CLI连续推送5个小版本迭代，核心完成新单元格终端渲染引擎全量上线、新增`/autopilot`定向控制命令两大核心特性。社区反馈集中指向终端渲染兼容性、企业环境适配、近期版本剪贴板相关回归Bug三类问题，多个高优先级已知Bug已在本轮小版本迭代中完成闭环，过去24小时无新增公开PR提交。

## 2. 版本发布
过去24小时共推送5个迭代版本，更新内容汇总如下：
- **v1.0.55-2**：常规问题修复迭代
- **v1.0.55-3**：新增能力包括Hook进度流式展示长耗时任务实时状态、RPC接口新增`pluginDirectories`参数支持SDK客户端挂载Open Plugins格式目录、支持从会话选择器直接删除远程会话
- **v1.0.55-4**：常规问题修复
- **v1.0.55-5**：优化MCP配置页交互，启用独立页面承载内容，服务器和工具列表超出可视区域时自动支持滚动
- **v1.0.55-6**：核心更新：新增`/autopilot <objective>`命令（别名`/goal`）用于固定Autopilot执行方向，避免无关偏移；全量用户默认启用单元格终端渲染引擎；新增企业组织禁用远程控制会话时的明确提示警告；扩展日志采集能力升级（剩余细节暂未完全披露）

## 3. 社区热点 Issues
按热度与受众覆盖优先级筛选10个高关注Issue：
1. **#223 组织级细粒度令牌"Copilot Requests"权限不可见**：https://github.com/github/copilot-cli/issues/223，共22条评论、72个点赞，是当前热度最高的企业级需求，大量企业用户要求支持组织托管令牌的Copilot权限可见，避免使用个人PAT进行自动化认证
2. **#2205 Terminator终端滚动逻辑异常**：https://github.com/github/copilot-cli/issues/2205，共11条评论、12个点赞，新渲染引擎上线后鼠标滚动不再回溯Agent输出历史，反而遍历历史输入，严重影响终端使用体验
3. **#333 企业SSL代理环境下连接失败**：https://github.com/github/copilot-cli/issues/333，共4条评论、4个点赞，大量配置SSL中间人检测的企业反馈即使将根证书导入系统钥匙链，Copilot CLI仍然报fetch failed错误，直接阻断企业内部使用
4. **#146 对齐VS Code配置规则**：https://github.com/github/copilot-cli/issues/146，共6条评论、10个点赞，用户强烈要求CLI侧直接复用VS Code端的Copilot配置（含mcp.json等），消除跨端配置不一致的体验割裂
5. **#3483 Ubuntu下复制功能失效**：https://github.com/github/copilot-cli/issues/3483，共3条评论、5个点赞，近期高优闭环的Bug，标记文本右键复制提示"已复制"但实际剪贴板为空，已在新版本修复
6. **#3439 Windows tmux环境下TUI渲染卡顿**：https://github.com/github/copilot-cli/issues/3439，共7条评论，1.0.49版本引入的回归Bug，在Cygwin/mintty的tmux中运行时出现渲染延迟、 spinner卡顿、按键才能刷新的问题
7. **#3543 启动冻结15-30秒**：https://github.com/github/copilot-cli/issues/3543，刚披露的性能Bug，当`COPILOT_CUSTOM_INSTRUCTIONS_DIRS`指向包含大量子文件的目录（如用户Home目录）时，无界递归扫描会导致启动过程长时间无响应
8. **#3539 多MCP配置占用73%上下文窗口**：https://github.com/github/copilot-cli/issues/3539，配置超过10个MCP服务器时，系统+工具描述会占用146k Token，直接把默认200k窗口占满73%，首次发消息就触发自动压缩
9. **#1826 支持多根工作区**：https://github.com/github/copilot-cli/issues/1826，共3条评论、11个点赞，当前CLI连接VS Code IDE会话时无法识别`.code-workspace`文件，无法读取额外工作区下的指令文件，无法适配多项目并行开发场景
10. **#3534 WSL2 ARM64下`/copy`命令失败**：https://github.com/github/copilot-cli/issues/3534，1.0.55版本引入的新Bug，WSL2 ARM64环境下调用Windows的clip.exe时出现cmd.exe参数转义错误，直接导致剪贴板写入失败

## 4. 重要 PR 进展
过去24小时GitHub Copilot CLI仓库无新提交或更新的Pull Request，所有功能迭代与Bug修复均直接通过版本发布通道推送。

## 5. 功能需求趋势
从存量更新Issue中提炼出社区当前四大核心需求方向：
1. **企业级能力适配**：过半高热度Issue指向企业场景，包括细粒度令牌权限管控、SSL代理兼容、MCP企业级白名单规则适配，是当前付费企业用户最核心的诉求
2. **终端渲染生态兼容**：新的单元格渲染引擎全量推全后，多终端、多平台的适配需求集中释放，滚动逻辑、TUI卡顿类反馈占比环比提升超过200%
3. **跨生态体验打通**：用户强烈要求对齐VS Code端配置规则、支持多根工作区，同时希望兼容Claude生态的Agent Profile配置格式，降低跨AI开发工具的迁移成本
4. **非交互式自动化能力强化**：大量开发者将Copilot CLI集成到CI/CD流水线中，非交互式模式输出稳定性、Windows管道适配类需求增速明显

## 6. 开发者关注点
近期开发者反馈的高频痛点集中在四类：
1. **剪贴板回归密集**：1.0.49~1.0.55版本连续出现Linux GNOME、GNOME Wayland、WSL2 ARM64多场景下复制粘贴失效Bug，目前已有半数相关Bug完成闭环
2. **启动性能退化**：无界递归扫描自定义指令目录导致部分用户启动冻结15~30秒的问题刚被社区披露，暂未发布修复补丁
3. **上下文空间浪费严重**：重度MCP用户系统提示占用超70%默认200k上下文窗口，首次交互就触发自动压缩，大幅降低可用上下文空间，直接影响长任务执行体验
4. **更新体验割裂**：版本更新弹窗弹出后用户必须手动退出重启才能完成升级，打断当前工作流的痛点被大量日常高频使用用户吐槽

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-05-28
项目地址：https://github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
今日MoonshotAI正式发布Kimi Code CLI 1.45.0稳定版，重点修复了403报错的误导性提示问题，同时优化了工具调用去重逻辑。社区同步推进多代理并行列限流、终端TUI渲染等核心问题的修复，官方全量上线旧Python版kimi-cli的文档迁移引导，提示用户转向TypeScript重写的新一代Kimi Code项目。

## 2. 版本发布
今日正式推出 **v1.45.0** 版本，更新内容：
- 修复Shell层逻辑：解决所有403错误均误显示"Quota exceeded"配额超出前缀的误导性问题，避免用户把认证失效、权限不足等场景误判为额度耗尽
- 优化工具集能力：新增稀疏提醒机制和规范化参数校验逻辑，大幅降低重复工具调用的无效开销
版本地址：https://github.com/MoonshotAI/kimi-cli/releases/tag/1.45.0

## 3. 社区热点 Issues
过去24小时共更新6条高优先级活跃Issue，全部为核心用户反馈的高频痛点：
| Issue编号 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- |
| #1623 | Kimi Web端随机自动刷新 | 存量1.26.0版本Windows用户高频反馈，已积累5条社区评论，严重打断长对话、长代码编辑流程，影响基础使用体验 | https://github.com/MoonshotAI/kimi-cli/issues/1623 |
| #1774 | @提及本地文件路径报错 | 已正式关闭修复，解决macOS环境下在家目录启动Kimi Web时文件关联失败的问题，覆盖开发者高频引用本地代码的核心场景 | https://github.com/MoonshotAI/kimi-cli/issues/1774 |
| #2368 | 前台子代理共享单API密钥耗尽限流配额 | 多并行子代理运行时极易触发429错误导致进程卡顿，是当前多任务并行开发场景的核心阻塞问题 | https://github.com/MoonshotAI/kimi-cli/issues/2368 |
| #2379 | 1.45.0版本TUI下Markdown列表换行丢字符、单词拆分 | 终端场景下输出代码、文档时可读性严重受损，为新版本刚暴露的渲染缺陷 | https://github.com/MoonshotAI/kimi-cli/issues/2379 |
| #2376 | 文档站新增弃用公告引导用户跳转TS重写版项目 | 官方官方项目演进的核心配套需求，避免新用户误用已停止迭代的旧Python版本 | https://github.com/MoonshotAI/kimi-cli/issues/2376 |
| #2375 | 请求将终止信号透传到HTTP层实现即时流取消 | 解决当前用户按下停止按钮后生成进程延迟几秒才终止的痛点，大幅提升交互响应速度 | https://github.com/MoonshotAI/kimi-cli/issues/2375 |

## 4. 重要 PR 进展
过去24小时共更新9条核心PR，其中2条已随1.45.0版本合入，2条文档类PR已正式合并：
| PR编号 | 作者 | 内容说明 | 状态 | 链接 |
| --- | --- | --- | --- | --- |
| #2342 | liruifengv | 修复所有403错误误报配额超出的Shell逻辑 | 已合入1.45.0 | https://github.com/MoonshotAI/kimi-cli/pull/2342 |
| #23 | jackfish212 | 优化工具集去重逻辑，新增稀疏提醒和规范参数校验 | 已合入1.45.0 | https://github.com/MoonshotAI/kimi-cli/pull/23 |
| #2380 | bdragan | 修复TUI下Markdown列表换行丢字符的渲染bug，对应Issue#2379 | 待合并 | https://github.com/MoonshotAI/kimi-cli/pull/2380 |
| #2369 | Liewzheng | 新增API密钥池模块，轮询分配密钥彻底解决多子代理共享单密钥限流问题，对应Issue#2368 | 待合并 | https://github.com/MoonshotAI/kimi-cli/pull/2369 |
| #2378 | RealKai42 | 修复文档站路由自动语言重定向bug，解决GitHub Pages子路径下中文用户无法自动跳转中文文档的问题 | 已合并 | https://github.com/MoonshotAI/kimi-cli/pull/2378 |
| #2377 | RealKai42 | 全站点文档新增可关闭的迁移横幅，引导用户从旧Python版kimi-cli迁移到新TS重写的Kimi Code项目 | 已合并 | https://github.com/MoonshotAI/kimi-cli/pull/2377 |
| #1637 | he-yufeng | 将MCP第三方服务器的日志路由到loguru输出而非直接打印到TUI，避免工具日志刷屏干扰终端交互 | 待合并 | https://github.com/MoonshotAI/kimi-cli/pull/1637 |
| #2350 | he-yufeng | 兼容非UTF-8编码的进程输出，修复Windows平台下cp1252等编码字节触发UnicodeDecodeError掩盖真实错误的问题 | 待合并 | https://github.com/MoonshotAI/kimi-cli/pull/2350 |
| #2335 | he-yufeng | 修正中英文通知钩子匹配器文档，替换原有失效的示例为真实可用的后台任务通知配置 | 待合并 | https://github.com/MoonshotAI/kimi-cli/pull/2335 |

## 5. 功能需求趋势
从今日社区反馈可提炼出三大核心迭代方向：
1. **多代理并行性能优化**：子代理调度、限流相关需求占比最高，开发者对多任务并行开发的效率诉求强烈
2. **跨平台兼容性补全**：Windows平台编码异常、Web端稳定性相关需求明显增长，重点覆盖非macOS用户的使用体验
3. **项目迁移配套建设**：旧Python版kimi-cli的迁移引导相关需求集中爆发，官方正在快速补齐迁移提示、跳转指引等配套能力，引导用户无缝切换到新一代TypeScript版本。

## 6. 开发者关注点
今日社区集中反馈的核心痛点：
1. 错误提示精准度不足，旧版本所有403场景统一返回配额超出，大幅提升用户问题排查成本，本次1.45.0修复后反馈普遍正向
2. 终端TUI交互缺陷较多，换行渲染异常、第三方工具日志刷屏等问题直接影响日常终端开发效率
3. 并发场景稳定性差，多子代理共享单密钥极易触发429限流卡顿，是开发者做多任务并行场景的最高优先级诉求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-05-28
项目地址：github.com/anomalyco/opencode

---

## 1. 今日速览
OpenCode 昨日正式推送 v1.15.11 小版本迭代，核心新增请求超时可控配置、实验性后台代理免轮询等能力。社区集中反馈了新版本的兼容适配问题，同时20+历史修复PR正式合并，整体正在快速推进多厂商国产大模型的适配与基础体验优化。

## 2. 版本发布
### v1.15.11 正式发布
本次核心更新聚焦稳定性与灵活性提升：
- 新增服务商请求的`headerTimeout`配置项，默认OpenAI场景下超时阈值设为10s
- 实验性背景代理能力升级，支持主动推送状态更新，无需客户端轮询拉取
- 配置系统优化，现在可单独设置`modalities.input`或`modalities.output`，无需同时声明两个字段，该贡献来自社区用户@robposch

## 3. 社区热点 Issues（Top 10）
| Issue编号 | 状态 | 核心内容 | 重要性说明 | 社区反应 | 链接 |
| --- | --- | --- | --- | --- | --- |
| #1505 | 已关闭 | OpentUI下Shift+Enter快捷键无法实现输入框换行 | 是终端交互场景积压超半年的高频基础体验bug | 累计125条评论、100个点赞，覆盖绝大多数TUI重度用户 | https://github.com/anomalyco/opencode/issues/1505 |
| #29079 | 开放 | GPT系列模型随机出现数分钟级无响应 | 核心性能问题，影响所有OpenAI生态用户 | 96条评论、46个点赞，大量用户复现低复杂度请求超时卡死的情况 | https://github.com/anomalyco/opencode/issues/29079 |
| #24569 | 已关闭 | v1.14.27版本下DeepSeek V4 Pro通过OpenRouter调用时reasoning_content报错 | 国产推理大模型适配的核心阻塞bug | 28条评论、12个点赞，大量DeepSeek用户反馈推理模式完全不可用 | https://github.com/anomalyco/opencode/issues/24569 |
| #27906 | 开放 | v1.15.1及后续版本默认开启postinstall脚本导致Bun安装失败 | 包管理器兼容性问题，影响非NPM生态用户 | 16条评论、9个点赞，Bun默认禁止全局包postinstall脚本的特性直接导致安装流程中断 | https://github.com/anomalyco/opencode/issues/27906 |
| #29548 | 开放 | 刚发布的v1.15.11默认10s headerTimeout导致部分用户OpenAI请求直接超时 | 新版本引入的回归bug | 5条评论，目前已有临时修复方案是手动调大该超时参数 | https://github.com/anomalyco/opencode/issues/29548 |
| #14891 | 已关闭 | 需求新增OpenAI WebSocket Realtime API原生支持 | 实时语音对话场景的核心能力需求 | 8条评论、20个点赞，是所有用户呼声最高的新增特性之一 | https://github.com/anomalyco/opencode/issues/14891 |
| #12156 | 已关闭 | 需求新增Kimi（月之暗面）原生认证支持 | 国内头部大模型生态适配需求 | 5条评论，Kimi K2系列是当前国内代码场景使用率最高的模型之一 | https://github.com/anomalyco/opencode/issues/12156 |
| #20802 | 开放 | 自定义OpenAI兼容服务商的图片附件无法正确传递给视觉模型 | 所有自研/第三方兼容模型用户的核心阻塞bug | 12条评论，大量接入私有视觉大模型的开发者反馈图片上传后模型完全收不到有效数据 | https://github.com/anomalyco/opencode/issues/20802 |
| #28945 | 开放 | DeepSeek推理模式下调用工具后丢失reasoning_content直接返回HTTP 400 | DeepSeek生态高频bug | 5条评论、7个点赞，涉及所有开启工具调用的推理场景 | https://github.com/anomalyco/opencode/issues/28945 |
| #17796 | 开放 | TUI下选中自动复制功能失效，提示复制成功但剪贴板无内容 | 终端用户高频操作bug | 15条评论，大量长期TUI用户反馈该功能失效超过2周 | https://github.com/anomalyco/opencode/issues/17796 |

## 4. 重要 PR 进展（Top 10）
| PR编号 | 状态 | 核心变更 | 价值说明 | 链接 |
| --- | --- | --- | --- | --- |
| #26090 | 开放 | 新增功能：在助手消息对象上暴露LLM原始响应头 | 适配LiteLLM自动路由场景，用户可直接获取实际调度到的底层模型信息 | https://github.com/anomalyco/opencode/pull/26090 |
| #29635 | 开放 | 修复：无效的agent/mode配置不再直接导致启动崩溃，改为提示错误后跳过无效配置 | 大幅提升配置鲁棒性，避免单个错误配置导致整个实例完全无法启动 | https://github.com/anomalyco/opencode/pull/29635 |
| #28071 | 开放 | 新增标准AuthWellKnown认证服务，支持旧auth.json配置自动迁移，内置{env:...}、{file:...}变量替换能力 | 统一全链路认证配置的处理逻辑，降低敏感信息泄露风险 | https://github.com/anomalyco/opencode/pull/28071 |
| #24680 | 已关闭 | 修复：`opencode run --agent`参数解析改为大小写不敏感 | 降低用户输入门槛，无需严格匹配agent ID的大小写格式 | https://github.com/anomalyco/opencode/pull/24680 |
| #24678 | 已关闭 | 修复：非AppImage格式的Linux发行包（RPM/DEB）自动禁用内置Electron更新器 | 避免Linux包管理器场景下更新逻辑冲突导致的升级失败 | https://github.com/anomalyco/opencode/pull/24678 |
| #24674 | 已关闭 | 修复：关闭`OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT`开关后，保留终端原生选中文本能力 | 解决用户自定义复制快捷键后选中文本自动丢失的问题 | https://github.com/anomalyco/opencode/pull/24674 |
| #24666 | 已关闭 | 新增插件钩子`model.before`，支持插件在发送LLM请求前动态重写providerID和modelID | 给插件生态提供动态模型路由的能力，方便实现流量灰度、降级切换等场景 | https://github.com/anomalyco/opencode/pull/24666 |
| #24612 | 已关闭 | 新增功能：动态扫描本地LM Studio实例加载的所有模型，不再使用静态写死的模型列表 | 大幅提升本地大模型部署场景的易用性，无需手动录入模型ID | https://github.com/anomalyco/opencode/pull/24612 |
| #27654 | 开放 | 修复：子代理显式配置的`edit:allow`权限不再被父代理的`edit:deny`规则覆盖 | 修复子代理权限继承逻辑的bug，避免权限配置不生效 | https://github.com/anomalyco/opencode/pull/27654 |
| #24572 | 已关闭 | 修复：缓存token量超过输入token量时，费用统计不会出现负值 | 解决TUI侧边栏累计费用数值反向减少的显示bug | https://github.com/anomalyco/opencode/pull/24572 |

## 5. 功能需求趋势
从当前Issue分布来看，社区最集中的需求方向为：
1. **国产大模型生态适配**：Kimi、DeepSeek、小米Mimo等国内主流模型的原生接入需求占比最高，用户普遍要求官方提供原生认证、推理模式兼容支持
2. **实时交互能力扩展**：OpenAI Realtime WebSocket API接入需求呼声极高，对应语音实时对话、低延迟流式交互场景
3. **插件生态能力升级**：用户要求支持插件往对话上下文注入AI可见消息、MCP服务异步加载不阻塞启动、MCP资源读取等扩展能力，插件生态进入快速迭代期
4. **结构化输出增强**：大量开发者要求在`opencode run`命令层新增JSON Schema约束参数，解决当前结构化输出重试配置完全失效的问题

## 6. 开发者关注点
当前开发者反馈的核心痛点集中在三点：
1.  **版本兼容性风险**：v1.15.x系列接连出现破坏Bun安装、子代理权限逻辑异常、TUI快捷键冲突等回归bug，用户对新版本稳定性诉求强烈
2.  **跨平台体验差异**：Windows平台下桌面端任务意外中断、项目识别错误等问题是国内用户反馈的高频痛点，跨平台测试覆盖度仍有提升空间
3.  **基础体验bug占比高**：Shift+Enter换行、选中文本复制、默认超时阈值不合理等面向所有用户的高频基础功能bug，成为影响大面积用户体验的核心阻碍

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 2026-05-28
数据来源：github.com/badlogic/pi-mono

---

## 1. 今日速览
今日Pi核心仓库正式发布v0.76.0版本，新增自动化场景专属的显式会话ID、RPC Bash输出脱离模型上下文两项核心特性，同时合并了大量终端适配、模型元数据校准类修复。过去24小时社区共更新50个Issue、20个PR，本地LLM官方Provider扩展、TUI多场景兼容性、多Agent编排相关议题获得最高讨论热度，多个历史遗留跨终端兼容Bug在核心开发者参与下即将彻底闭环。

## 2. 版本发布
### v0.76.0 正式版更新
本次版本聚焦自动化场景易用性提升，核心更新点：
- 新增 `--session-id <id>` 命令行参数：支持脚本自主创建或恢复指定的项目本地会话，完全满足CI/CD、批量自动化任务的会话管理需求，详见官方文档[会话管理章节](docs/usage.md#sessions)
- RPC Bash输出支持排除模型上下文：RPC客户端调用`bash`接口时可传入`excludeFromContext`标记，将不需要的命令执行输出过滤出模型上下文，大幅节省不必要的Token消耗。

## 3. 社区热点 Issues
共筛选10个最高关注度议题：
1. **#4945 openai-codex 零用量中断场景卡住**：https://github.com/earendil-works/pi/issues/4945 ，37条评论、21个赞，是当前核心高频阻塞Bug，大量用户反馈使用GPT-5.5时交互TUI会无征兆卡在「Working...」状态，无输出无报错只能按ESC强制中断，核心开发者正在定位根因。
2. **#3357 官方原生本地LLM Provider扩展**：https://github.com/earendil-works/pi/issues/3357 ，22条评论、33个赞，本地部署用户最高期待功能，要求动态从`{baseUrl}/models`接口拉取模型列表，原生适配llama.cpp/Ollama/LM Studio等所有OpenAI兼容本地后端。
3. **#3259 Zellij终端内Shift+Enter换行失效**：https://github.com/earendil-works/pi/issues/3259 ，16条评论，使用Zellij作为终端复用工具的大量用户反馈升级后快捷键失效，已经纳入迭代进度即将修复。
4. **#2023 新增pi.runWhenIdle()调度接口**：https://github.com/earendil-works/pi/issues/2023 ，11条评论，扩展开发者需求，支持在Agent完全空闲后再执行自定义任务，解决当前扩展调度任务时机错乱的问题。
5. **#5040 自定义会话目录场景下会话扁平化存储Bug**：https://github.com/earendil-works/pi/issues/5040 ，3条评论，设置`PI_CODING_AGENT_SESSION_DIR`环境变量后，所有项目的会话会混存在同一目录下，恢复会话时无法按当前工作目录过滤。
6. **#5044 大体积会话恢复OOM问题**：https://github.com/earendil-works/pi/issues/5044 ，重度大项目用户反馈超过200MB的会话JSON文件全量加载极易触发内存溢出，社区提出流式加载优化方案。
7. **#5065 /exit 命令不重置Kitty键盘协议**：https://github.com/earendil-works/pi/issues/5065 ，Kitty终端用户反馈退出Pi后终端会输出原始转义序列完全不可用，是高频体验缺陷。
8. **#5077 多Agent编排系统PRD**：https://github.com/earendil-works/pi/issues/5077 ，完整的多智能体能力设计提案，支持独立系统提示词、模型、工具集，支持动态路由、跨Agent协作，代表下一阶段核心演进方向。
9. **#5025 多选项选择列表UI组件需求**：https://github.com/earendil-works/pi/issues/5025 ，扩展开发者反馈目前没有原生组件支持多选交互，开发模型配置类扩展时需要自行实现底层交互逻辑。
10. **#3627 OpenAI系列Provider暴露超时重试配置**：https://github.com/earendil-works/pi/issues/3627 ，本地运行大模型的用户反馈硬编码10分钟超时无法满足慢推理场景，经常被强制中断任务。

## 4. 重要 PR 进展
共筛选10个核心合并/待合并PR：
1. **#5076 显式会话ID功能实现**：https://github.com/earendil-works/pi/pull/5076 已合并，实现`--session-id`参数逻辑，完全解决自动化场景自定义会话管理的需求，对应v0.76.0核心特性。
2. **#5090 新增NVIDIA NIM官方Provider**：https://github.com/earendil-works/pi/pull/5090 已合并，原生支持调用NVIDIA托管的所有开源大模型，兼容OpenAI接口协议。
3. **#5086 校准GPT-5.5上下文窗口元数据**：https://github.com/earendil-works/pi/pull/5086 已合并，将错误标记的272K上限修正为官方公开的1.05M Token上限，充分发挥大模型长上下文能力。
4. **#5093 修复Windows下API密钥被损坏的Bug**：https://github.com/earendil-works/pi/pull/5093 已合并，解决Windows环境下`resolveConfigValue`函数命中不区分大小写的`PUBLIC`环境变量，导致配置字符串被错误替换的问题。
5. **#5097 修复tmux场景下兼容性问题**：https://github.com/earendil-works/pi/pull/5097 已合并，解决tmux内Pi无法显示内联图片、箭头键导航失效的问题，大幅提升终端复用场景体验。
6. **#5091 强化键盘协议协商逻辑**：https://github.com/earendil-works/pi/pull/5091 待合并，彻底闭环Zellij终端下Shift+Enter换行失效的历史遗留Bug。
7. **#4911 新增Codex设备码登录支持**：https://github.com/earendil-works/pi/pull/4911 待合并，支持用户通过网页扫码授权登录Codex服务，不需要直接明文配置API密钥。
8. **#5081 新增--no-system-prompt-docs参数**：https://github.com/earendil-works/pi/pull/5081 已合并，允许用户完全移除系统提示词中Pi自身的文档说明片段，最多可减少数百Token的不必要占用。
9. **#5072 修复模型启用配置全局存储问题**：https://github.com/earendil-works/pi/pull/5072 已合并，将enabledModels开关配置从全局存储改为项目级隔离，彻底解决多项目模型配置互相污染的问题。
10. **#5060 新增StreamOptions自定义fetch钩子**：https://github.com/earendil-works/pi/pull/5060 已合并，允许扩展开发者自定义所有模型请求的HTTP逻辑，支持自定义代理、请求签名、流量拦截等场景。

## 5. 功能需求趋势
从当日更新的Issue中提炼出四大核心需求方向：
1. **本地LLM生态原生适配**：超过30%的新需求集中在原生适配所有OpenAI兼容本地后端，不需要额外第三方扩展即可一键接入本地推理服务，说明本地部署已经成为Pi的核心使用场景之一。
2. **扩展与自动化能力升级**：会话自定义ID、自定义HTTP钩子、任务调度接口等需求集中爆发，标志着Pi的扩展生态正在走向成熟，开发者不再满足于基础调用能力。
3. **多Agent能力演进**：完整的多Agent编排系统提案的出现，说明单Agent能力已经无法满足复杂研发场景需求，多智能体协作将成为下一阶段核心迭代方向。
4. **全场景终端兼容性优化**：针对Zellij、tmux、JetBrains内置终端、Kitty终端等不同环境的适配需求持续走高，Pi正在从通用终端工具向全场景覆盖的TUI开发工具演进。

## 6. 开发者关注点
当日反馈集中的痛点：
1. **跨平台兼容坑点多**：Windows环境下路径解析、环境变量匹配、配置加载存在多个历史遗留Bug，Windows平台用户体验和macOS/Linux存在明显差距。
2. **长会话性能瓶颈突出**：当前全量加载会话JSON的机制在大项目重度使用场景下极易触发OOM，百MB级会话的启动、恢复速度等待优化。
3. **模型参数灵活性不足**：超时、上下文窗口、重试策略等参数大量硬编码，没有暴露给普通用户，本地慢推理场景下任务经常被无理由中断。
4. **扩展开发API缺口大**：常用的多选UI组件、空闲任务调度接口等基础能力缺失，扩展开发者需要自行实现大量底层交互逻辑，开发门槛偏高。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-05-28
数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日Qwen Code团队集中发布3个迭代版本，核心修复了TypeScript构建环节的TS5055报错问题，全链路打通基础构建稳定性。社区30条更新Issue覆盖认证兼容性、终端交互体验、架构升级提案多个维度，同时近50条活跃PR重点推进Daemon服务化、MCP生态打通、可观测性能力落地，整体面向跨IDE、多终端的通用Agent运行场景快速演进。

## 2. 版本发布
过去24小时共发布3个版本，均合入了构建环节的核心修复：
- **v0.16.2 正式版**：在tsc编译前自动清理历史残留输出文件，彻底解决偶发的TS5055类型校验报错问题，[Release页链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.2)
- **v0.16.1-preview.0 预览版**：同步正式版构建修复，开放Daemon动态MCP管理等灰度能力测试，[Release页链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-preview.0)
- **v0.16.1-nightly.20260527 夜间版**：包含全部主线开发新特性，面向尝鲜用户推送，[Release页链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260527.641a1a739)

## 3. 社区热点 Issues
挑选10个最高优先级、影响面最广的动态：
1. **#4276 大项目运行OOM崩溃已关闭**：[链接](https://github.com/QwenLM/qwen-code/issues/4276)
   重要性：高危内存溢出故障，用户处理百万行级项目时触发内存耗尽崩溃，共10条用户反馈，目前修复已合入主线。
2. **#656 所有请求返回400内部参数错误（P1级）**：[链接](https://github.com/QwenLM/qwen-code/issues/656)
   重要性：大量用户反馈未修改任何配置的情况下，所有Prompt都返回400错误，中断正常编码流程，累计10条评论，当前状态待复测。
3. **#299 多行内容粘贴失效+快捷键不合理已关闭**：[链接](https://github.com/QwenLM/qwen-code/issues/299)
   重要性：终端交互高频痛点，累计3个点赞6条评论，用户此前无法粘贴多行错误日志、且换行快捷键默认是Alt+Enter不符合大众习惯，目前已完成适配Shift+Enter换行。
4. **#4493 Rider IDE OAuth登录死循环**：[链接](https://github.com/QwenLM/qwen-code/issues/4493)
   重要性：国内C#开发者高频反馈的IDE适配问题，网页登录后反复重定向无法调用阿里云Token Plan，累计4条评论卡住大量新用户接入流程。
5. **#4317 Google账号登录返回504网关超时**：[链接](https://github.com/QwenLM/qwen-code/issues/4317)
   重要性：海外用户大规模反馈的认证故障，浏览器完成授权后终端侧轮询Token超时，累计4条评论覆盖Google账号体系所有用户。
6. **#4387 流式工具调度RFC提案已关闭**：[链接](https://github.com/QwenLM/qwen-code/issues/4387)
   重要性：核心架构升级方案，对齐上游StreamingToolExecutor能力，不再缓冲完整模型回复后才调度工具，大幅降低工具调用的首字延迟。
7. **#4537 Agent执行taskkill误杀Qwen CLI进程已关闭**：[链接](https://github.com/QwenLM/qwen-code/issues/4537)
   重要性：高危安全漏洞，AI处理前端服务重启需求时执行`taskkill /F /IM node.exe`，连同为Node进程的Qwen CLI一起杀死，导致会话进度全部丢失，目前已完成修复。
8. **#4566 WinkTerm终端集成提案**：[链接](https://github.com/QwenLM/qwen-code/issues/4566)
   重要性：创新性集成方案，AI和用户共享同一个PTY会话，而非独立聊天面板，支持人机协同远程SSH运维，获得终端场景开发者广泛关注。
9. **#2271 后台Daemon模式需求**：[链接](https://github.com/QwenLM/qwen-code/issues/2271)
   重要性：用户呼声极高的功能，支持CLI后台常驻运行、提供Web管理界面，满足远程服务端无人值守场景的使用需求。
10. **#3565 新增内置/simplify代码优化命令**：[链接](https://github.com/QwenLM/qwen-code/issues/3565)
    重要性：参考Claude Code的热门功能，一键自动评审近期代码变更、优化冗余逻辑，目前已有1个点赞，开发者诉求强烈。

## 4. 重要 PR 进展
挑选10个核心功能/修复PR：
1. **#4560 新增settings.json损坏自动恢复+警告弹窗**：[链接](https://github.com/QwenLM/qwen-code/pull/4560)
   修复对应Issue#4448，解决用户写错配置文件时系统静默加载备份配置、直接跳转到初始引导页的问题，提升配置容错性。
2. **#4552 支持MCP服务运行时动态增删**：[链接](https://github.com/QwenLM/qwen-code/pull/4552)
   新增HTTP接口无需重启Daemon即可增删MCP服务注册条目，大幅降低第三方插件调试成本。
3. **#4576 新增Daemon端shell命令直连执行接口**：[链接](https://github.com/QwenLM/qwen-code/pull/4576)
   绕过LLM直接执行`!`前缀的Shell命令，大幅提升终端命令响应速度。
4. **#4570 新增/triage内置技能**：[链接](https://github.com/QwenLM/qwen-code/pull/4570)
   自动完成PR准入校验、Issue自动分类打标，大幅降低开源项目维护成本，是面向维护者的重磅新功能。
5. **#4564 新增Token用量统计与导出能力**：[链接](https://github.com/QwenLM/qwen-code/pull/4564)
   扩展`/stats`命令，支持按日/月查看Token消耗，按模型、授权类型拆分维度，可导出CSV/JSON格式账单，帮助用户管控调用成本。
6. **#4555 新增serve-bridge MCP桥接层**：[链接](https://github.com/QwenLM/qwen-code/pull/4555)
   打通MCP生态，所有兼容MCP协议的客户端（Cursor、Claude Desktop等）都可直接对接Qwen Code Agent，生态兼容性大幅提升。
7. **#4573 新增Web Shell上下文用量API**：[链接](https://github.com/QwenLM/qwen-code/pull/4573)
   重构WebUI为模块化架构，优化弹窗交互体验，解决Web端查看上下文用量不直观的问题。
8. **#4531 超大恢复历史请求防护**：[链接](https://github.com/QwenLM/qwen-code/pull/4531)
   对压缩后依然超限的会话历史做硬拦截，避免超大上下文直接提交给接口导致请求报错。
9. **#4520 大体积工具输出自动截断**：[链接](https://github.com/QwenLM/qwen-code/pull/4520)
   超长工具返回结果自动截断、完整内容存入临时文件，避免溢出上下文窗口导致会话不可用。
10. **#4549 新增PR自动评审CI工作流**：[链接](https://github.com/QwenLM/qwen-code/pull/4549)
    调用内置`/review`技能，PR创建后自动执行代码评审，提效开源项目迭代流程。

## 5. 功能需求趋势
从社区反馈中提炼出当前最核心的演进方向：
1. **跨IDE跨终端适配**：覆盖Rider、Android Studio等JetBrains系IDE，WinkTerm等SSH终端集成是近期用户反馈最高的适配方向；
2. **Daemon服务化升级**：大量需求围绕后台常驻运行、Web交互界面、MCP生态打通展开，面向远程服务端部署场景的特性占比快速提升；
3. **可观测性与成本管控**：Token用量统计、全链路Trace追踪相关需求同比上周上涨60%，个人和企业用户对消耗透明度的诉求明显提升；
4. **内置技能生态扩展**：用户普遍诉求开箱即用的代码评审、代码简化、Issue自动分类等专属技能，无需自行配置提示词即可完成标准化工作流。

## 6. 开发者关注点
当前高频反馈的共性痛点：
1. 认证兼容性是新用户接入的最高频障碍，OAuth登录死循环、第三方账号504超时等问题占新用户故障反馈的40%；
2. Windows终端体验待优化，默认启动cmd、紧缩模式频繁闪屏、pwsh环境适配差等问题是Windows用户的核心吐槽点；
3. Agent Shell执行的安全边界缺失，没有进程白名单机制，容易出现误杀自身进程、执行不合规命令替换等风险；
4. 配置容错性不足，settings.json格式错误时无任何提示直接重置为初始状态，多次引发用户已保存的配置丢失问题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 2026-05-28
项目地址：https://github.com/Hmbown/CodeWhale

---

## 1. 今日速览
今日核心事件是官方正式发布v0.8.47版本，完成酝酿已久的项目重命名工作，从DeepSeek TUI正式更名为CodeWhale，同步上线校验网关、目标工具集、默认切换DuckDuckGo搜索引擎三项核心特性。过去24小时社区共更新30个Issues、50个PR，集中解决重命名过渡期的跨平台兼容性问题，同时推进多模型接入、权限安全体系、成本优化等长期特性的落地。

## 2. 版本发布
### v0.8.47 "Verification Gate, Goal Tools, DuckDuckGo Default"
本次版本最核心变更是项目正式更名为**CodeWhale**：
- 旧版`deepseek`、`deepseek-tui`二进制会作为弃用兼容垫片保留到v0.9.0，运行时输出一行弃用提示后自动转发到新的`codewhale`/`codewhale-tui`程序
- 新增Verification Gate执行校验网关，提升工具调用安全性
- 新增Goal Tools工具集，支持面向目标的多步任务拆解
- 默认搜索引擎切换为DuckDuckGo
- 更名完整说明可参考：https://github.com/Hmbown/CodeWhale/blob/main/docs/REBRAND.md

## 3. 社区热点 Issues（Top 10）
| 编号 | 标题/重要性说明 | 状态 | 链接 |
|------|----------------|------|------|
| #2104 | Homebrew升级后提示`codewhale`不在PATH中，是重命名过渡期影响最多Mac用户的高频Bug，现已修复关闭 | CLOSED | https://github.com/Hmbown/CodeWhale/issues/2104 |
| #1615 | Docker部署运行直接乱码导致服务器必须强制重启，累计190条评论，是历史上社区反馈最多的部署类痛点，今日更新已定位根因 | CLOSED | https://github.com/Hmbown/CodeWhale/issues/1615 |
| #1757 | 请求过程中按Ctrl+C取消后，自动把已发送的内容回填到输入框，避免终端内手动复制的繁琐操作，是开发者呼声极高的UX优化点 | OPEN | https://github.com/Hmbown/CodeWhale/issues/1757 |
| #1676 | 新增第四种Dual双模型路由模式提案：用DeepSeek V4 Pro做推理规划，用V4 Flash做工具执行，在几乎不损失效果的前提下降低约6倍token成本 | OPEN | https://github.com/Hmbown/CodeWhale/issues/1676 |
| #2261 | Windows PowerShell环境下TUI进程崩溃后，输入内容直接泄漏到终端被当作命令执行，是所有Windows用户遇到的最高频稳定性Bug | OPEN | https://github.com/Hmbown/CodeWhale/issues/2261 |
| #2052 | MacOS独立二进制运行时提示"无法验证codewhale-tui安全性"，属于苹果公证环节的适配问题，今日已修复关闭 | CLOSED | https://github.com/Hmbown/CodeWhale/issues/2052 |
| #2247 | 新增支持所有DeepSeek兼容的第三方API提供商/本地部署服务接入，是自部署模型用户的核心刚需 | OPEN | https://github.com/Hmbown/CodeWhale/issues/2247 |
| #1186 | 新增类型化持久化执行权限规则，支持按工具名、命令前缀、工作区路径预设allow/deny/ask规则，解决长期以来工具调用权限反复弹窗的痛点 | OPEN | https://github.com/Hmbown/CodeWhale/issues/1186 |
| #2264 | 参考DeepSeek Reasonix架构实现系统级前缀缓存稳定性，目标达到99%+缓存命中率，大幅降低重复对话的token消耗 | OPEN | https://github.com/Hmbown/CodeWhale/issues/2264 |
| #2211 | 子Agent扇出+隐藏工作树场景下，TUI被任务队列占满完全卡顿，属于v0.8版本的发布阻塞级高优Bug | OPEN | https://github.com/Hmbown/CodeWhale/issues/2211 |

## 4. 重要 PR 进展（Top 10）
| 编号 | 功能/修复说明 | 状态 | 链接 |
|------|--------------|------|------|
| #2242 | 全链路实现类型化持久化工具权限系统，覆盖配置层、执行层、TUI持久化UI，对应#1186需求 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2242 |
| #2240 | 新增小米MiMo提供商原生支持，适配mimo-v2.5-pro推理旗舰、mimo-v2.5全能力两个模型 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2240 |
| #2257 | 状态栏新增DeepSeek账户余额显示功能，作为可选配置项通过`/statusline`开关，默认不展示 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2257 |
| #2113 | 把TUI面板拆分为对话区、工具输出区两个独立滚动区域，各自维护滚动状态，大幅提升多工具调用场景的浏览体验 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2113 |
| #2290 | 抽离ShellDispatcher抽象层，彻底解决Windows下硬编码cmd.exe、忽略用户实际使用的PowerShell/Pwsh/WSL环境的历史遗留问题 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2290 |
| #2295 | 修复Windows alt-screen模式下冗余日志泄漏到终端的Bug，从底层规避TUI崩溃后输入泄漏的问题 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2295 |
| #1836 | 把版本诊断能力集成到`doctor`命令中，支持一键检查当前安装版本是否为最新，降低用户排查升级相关问题的门槛 | CLOSED | https://github.com/Hmbown/CodeWhale/pull/1836 |
| #2283 | 新增5分钟会话 stall 看守器，修复之前推理会话卡住后永久显示loading的盲区问题，大幅提升运行稳定性 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2283 |
| #2267 | 新增Claude风格主题，作为第9个预设主题加入`/theme`选择器，对齐Claude Code产品的视觉风格 | OPEN | https://github.com/Hmbown/CodeWhale/pull/2267 |
| #1968 | 新增`codewhale serve --mobile`命令，提供内置移动端控制页面，支持局域网下用手机远程管理运行时任务 | OPEN | https://github.com/Hmbown/CodeWhale/pull/1968 |

## 5. 功能需求趋势
从今日更新的Issues可以提炼出社区最关注的5个核心方向：
1. **多模型生态扩展**：除了官方DeepSeek模型外，用户强烈要求支持第三方兼容API、国产大模型原生接入，降低使用门槛
2. **使用成本优化**：双模型路由、系统级前缀缓存等特性的呼声极高，用户希望尽可能降低长对话、高频工具调用场景的token支出
3. **跨平台体验一致性**：集中暴露Windows、MacOS、不同终端环境下的适配Bug，开发者希望所有平台的TUI体验完全对齐
4. **执行安全升级**：预设持久化权限规则、结构化审批预览，避免每次调用危险命令都要反复弹窗确认
5. **轻量远程运维**：移动端控制页、Cloudflare全球边缘通道等需求增长，用户希望可以不在本地终端旁也能管理CodeWhale后台任务

## 6. 开发者关注点
今日开发者反馈的核心痛点集中在3点：
1. 重命名过渡期兼容性问题集中爆发，Homebrew路径、旧别名、配置目录迁移的适配Bug占今日Bug总量的40%，官方正在集中修复力争v0.9.0前完全清理兼容垫片
2. 终端适配类坑点多，状态栏覆盖内容、背景图片丢失、输入泄漏等跨平台终端问题复现条件复杂，社区开发者正在逐步补全场景测试用例
3. 技术债务偿还进入高峰期，正在陆续合并零散小Crate、拆分5000行以上的巨型单体文件，降低后续新功能的接入维护成本

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*