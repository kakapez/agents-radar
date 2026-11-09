# AI CLI 工具社区周报 2026-11-09

> 生成时间: 2026-11-09 02:31 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

⚠️ 横向对比生成失败。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告（2026-11-09）
---
## 1. 热门技能排名（PR 讨论热度最高）
*说明：截至数据集快照，所有列出的 PR 均无记录的评论数或点赞数，以下按更新时间和功能影响排序：*
1.  [PR #2019: fix(xlsx): 修复 external_links_at_risk 中工作表级定义名称和别名的解析问题](https://github.com/anthropics/skills/pull/2019)
    - 功能：改进 xlsx 电子表格技能，修复外部链接风险检测的假阴性问题，新增对工作表作用域定义名称和间接别名引用的支持。
    - 亮点：解决 issue #2013，最新更新时间为 2026-11-03。
    - 状态：OPEN
2.  [PR #2108: docs: 明确文档技能快照状态与同步关系](https://github.com/anthropics/skills/pull/2108)
    - 功能：更新仓库 README，明确官方文档技能的版本控制和同步行为，区分仓库副本与用户端同步的本地技能文件。
    - 亮点：参考历史导出里程碑（#1447、#330）以支持可验证的版本追踪。
    - 状态：OPEN
3.  [PR #1980: webapp-testing: 移除 with_server.py 中的 shell=True 参数](https://github.com/anthropics/skills/pull/1980)
    - 功能：修补 webapp-testing 技能，消除启动服务器进程时使用不安全的 `shell=True` 带来的命令注入（CWE-78）风险。
    - 亮点：针对测试工作流自动化中的关键注入漏洞提供安全导向修复。
    - 状态：OPEN
4.  [PR #1792: fix(docx): 将 LibreOffice 超时报告为错误并验证输出结果](https://github.com/anthropics/skills/pull/1792)
    - 功能：改进 docx 文档技能，正确处理 LibreOffice 超时问题（此前被误报为成功），并新增后处理校验以确认修订标记已完全移除。
    - 亮点：避免将无效、未修改的 DOCX 文件作为成功输出返回。
    - 状态：OPEN
5.  [PR #1298: fix(skill-creator): 隔离触发评估并处理 Windows 平台及运行时失败问题](https://github.com/anthropics/skills/pull/1298)
    - 功能：修复 skill-creator 工具中触发评估结果不准确的问题，解决 Windows 子进程管道故障、工作进程资源冲突以及运行时错误处理缺失的问题。
    - 亮点：改进用户构建和测试新自定义技能所依赖的核心工具。
    - 状态：OPEN
6.  [PR #1771: feat(skills): 新增用于智能合约公证的 proofcore-contract-auditor 技能](https://github.com/anthropics/skills/pull/1771)
    - 功能：新增一款面向 Web3 的技能，可对 Solidity/Rust 智能合约执行静态分析，并通过 ProofCore 的零存储协议将审计证明锚定到 TON 区块链。
    - 亮点：面向 Claude Code 工作流中服务不足的 Web3 开发者细分领域。
    - 状态：OPEN

## 2. 社区需求趋势（来自热门 Issues）
- **信任与安全治理**：参与度最高的 issue（[#492，46 条评论](https://github.com/anthropics/skills/issues/492)）呼吁进行命名空间隔离，防止社区技能冒充 Anthropic 官方发布的技能，以填补信任边界漏洞。
- **团队协作工作流**：[Issue #228（17 条评论）](https://github.com/anthropics/skills/issues/228) 请求实现原生的组织级技能共享，消除团队使用场景下手动文件传输和上传的步骤。
- **技能评估与可靠性**：多个高评论量 issue（[#556、#1352、#1394](https://github.com/anthropics/skills/issues/556)）指出触发评估流水线存在故障，包括测试运行中触发率为 0%、并行工作进程 UUID 冲突导致结果不准确、评估工具存在 XSS 风险等问题。
- **上下文效率**：[Issue #1487（5 条评论）](https://github.com/anthropics/skills/issues/1487) 报告称，大型捆绑技能（例如 claude-api）会预加载多达 15.6 万 token，耗尽上下文窗口，社区由此对延迟加载和按需注入技能内容的需求日益增长。

## 3. 高潜力待合并技能
以下活跃的开放 PR 代表生态系统近期即将推出的改进和新增内容：
- [PR #1730: fix(claude-api): 替换 academy-guide 和 tool-use-concepts 中的失效 URL](https://github.com/anthropics/skills/pull/1730) — 修复 3 个返回硬 404 的文档链接，提升参考资料的准确性。
- [PR #1997: fix(skill-creator): 正确解析 YAML 头部标量值](https://github.com/anthropics/skills/pull/1997) — 解决技能描述和评估命令的元数据解析故障问题。
- [PR #1703: 新增 md2video-audio 技能](https://github.com/anthropics/skills/pull/1703) — 新增一款零成本技能，可通过 Marp 和 TTS 将 Markdown 文档编译为带旁白的 MP4 视频。
- [PR #525: 新增用于复古游戏开发的 pyxel 技能](https://github.com/anthropics/skills/pull/525) — 新增配套工作流，支持基于 Pyxel 引擎构建、测试和调试复古 Python 游戏。
- [PR #1615: 新增 scnet-hpc 技能](https://github.com/anthropics/skills/pull/1615) — 新增 Slurm 和 SSH 工作流支持，用于操作 SCNet 高性能计算集群。

## 4. 技能生态洞察
社区最集中的需求是可靠、上下文高效、支持团队使用的技能工具：当前优先填补安全信任缺口，修复核心技能创建/评估工作流的故障，并减少不必要的上下文开销，以支持个人和组织用户可靠、可扩展地使用 Claude Code 技能。
---

---

# Claude Code 社区周报 - 2026-11-09

## 1. 近 7 天要点
本周 Claude Code 发布了三个增量版本，重点强化隐私防护、企业权限管控与会话透明度。社区近期讨论最热烈的长期功能诉求包括多账户连接器支持、桌面端 UI 与 CLI 对齐，同时集中反馈了多类高影响 Bug：Opus 5.5 行为异常、桌面端性能回退、权限系统边界问题。

## 2. 版本发布
### v2.1.319
- 强化自动模式安全策略：当遥测或功能开关被禁用（包括经 LLM 网关中转的场景）时，无法通过服务端校验的调用将直接弹出提示或被拒绝，不再回退到内置分类器。可添加 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 保留原有逻辑（Bedrock、Vertex、Foundry 集成不受影响）。

### v2.1.318
- 新增会话内用户对模块启用提示回应的持久化记录。
- Claude 应用网关的 `mantle` 上游新增 `assume_role` 支持，可实现跨 AWS 账户角色切换、按开发者维度核算成本。
- 自定义模块新增 `effort` 配置项。

### v2.1.317
- `/schedule` 命令对自动获取未授权连接器的云端定时任务新增警告，并附带移除操作指引。
- 新增预执行检查：Web 或 Shell 工具调用向外网发送用户账户邮箱前，会先提示用户确认。
- Agent SDK 钩子新增 `onFailure: "block"` 配置项。

## 3. 热门问题
1. **[#27302](https://github.com/anthropics/claude-code/issues/27302) [功能] 支持多连接器账户（同一连接器，不同账户）**  
   299 条评论 | 453 👍  
   社区最受期待、持续时间最长的功能诉求：用户希望在网页版 Claude 和 Claude Code 中为同一连接器绑定多个账户（比如多个 GitHub 或 Slack 工作区），这对管理多工作区、拆分个人/工作账户的团队来说是最高优先级需求。

2. **[#79305](https://github.com/anthropics/claude-code/issues/79305) [功能] 桌面端：支持自定义主题/强调色**  
   30 条评论 | 92 👍  
   用户希望桌面端主题/强调色与 CLI 对齐，反馈默认深色模式在多屏环境下很难和其他应用区分开。

3. **[#102828](https://github.com/anthropics/claude-code/issues/102828) [缺陷] 远程控制：start_session 拒绝移动端发送的 user_asked 类型人工消息**  
   15 条评论 | 10 👍  
   跨设备工作流的阻塞性 Bug：移动端发送的人工消息即使用户主动标记，也会被 `start_session` API 拒绝。

4. **[#100212](https://github.com/anthropics/claude-code/issues/100212) [模型] 安全分类器在合法医疗文档处理任务中拦截正常响应**  
   9 条评论 | 1 👍  
   用户反馈安全分类器会误拦截合规的医疗文档类工作，引发了对领域合法工作误判率的担忧。

5. **[#85138](https://github.com/anthropics/claude-code/issues/85138) Skills 需要在 frontmatter 中添加“不参与压缩后重放”的开关**  
   6 条评论 | 1 👍  
   严重可靠性问题：会话压缩后，技能重放会重新执行旧的 `$ARGUMENTS`，可能触发误 `git push` 等非预期操作。用户需要为技能提供这个开关。

6. **[#82144](https://github.com/anthropics/claude-code/issues/82144) 会话压缩后重新注入技能的开销约是压缩摘要的 4 倍**  
   6 条评论 | 0 👍  
   性能问题：压缩后会完整重新注入技能内容，消耗的上下文远大于压缩摘要本身，降低会话效率。

7. **[#83756](https://github.com/anthropics/claude-code/issues/83756) [缺陷] 大批量 MCP `ToolSearch` 调用会使整个会话缓存失效**  
   5 条评论 | 3 👍  
   和官方文档声明的工具搜索性能保证不一致：大批量 MCP 工具搜索会让整段会话缓存失效，导致响应变慢、token 消耗升高。

8. **[#104925](https://github.com/anthropics/claude-code/issues/104925) [缺陷] 旁路模式下，虚假的“危险 rm 操作”提示会阻塞后台子代理**  
   5 条评论 | 3 👍  
   在 `--dangerously-skip-permissions` 旁路模式下，嵌套子 shell 但实际没有执行 `rm` 的命令也会触发危险操作误判，卡住后台子代理的正常工作流。

9. **[#108048](https://github.com/anthropics/claude-code/issues/108048) [缺陷] Opus 5.5 `reasoning_extraction` 模式下拒绝读取用户自己的笔记文件**  
   4 条评论 | 0 👍  
   Opus 5.5 专属 Bug：模型拒绝读取用户本地所有的笔记文件，行为与用户级作用域规则文件相关；Opus 4.8 版本未出现该问题。

10. **[#108238](https://github.com/anthropics/claude-code/issues/108238) [缺陷] 桌面端侧边会话导致成本飙升并引发 macOS 内核恐慌**  
    2 条评论 | 0 👍  
    侧边会话功能上线后出现的回退问题：嵌套侧边会话 + 自动唤醒父会话 + 每个会话独立启动 MCP 服务，会导致每周额度约 1 天就耗尽，还会触发 macOS 看门狗内核恐慌。

## 4. 关键 PR 进展
1. **[#107768](https://github.com/anthropics/claude-code/pull/107768) [已关闭] 模块：新增隐私模块**  
   把 Claude Code 内置 `privacy` 模块的源码发布到 `mods/privacy` 目录，实现透明化并支持用户自定义。该模块的作用是拦截包含已登录账户邮箱的 Shell 调用。

2. **[#37084](https://github.com/anthropics/claude-code/pull/37084) [已开启] 修复：为 GitHub API 脚本新增重试、超时和速率限制处理**  
   抽取出带重试、超时、速率限制处理的公共 `githubRequest` 工具函数，将 4 个现有 GitHub API 脚本迁移过去以消除重复代码，同时新增 52 个单元/集成测试。

3. **[#95698](https://github.com/anthropics/claude-code/pull/95698) [已开启] 修复（插件）：将 ralph-wiggum 和输出样式类 .sh 钩子通过带引号路径的 bash 执行**  
   为解决 `ralph-wiggum` 和输出样式插件的钩子执行失败问题，对未加引号的脚本路径用 bash 包裹并补全正确引号，修复执行报错。

4. **[#106972](https://github.com/anthropics/claude-code/pull/106972) [已开启] 将去重代理任务放到前台执行**  
   在 issue 去重步骤中设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`，避免 Claude 提前结束回合时中断正在运行的代理任务。

5. **[#58673](https://github.com/anthropics/claude-code/pull/58673) [已开启] s**  
   草稿 PR，无描述，状态不明确。

6. **[#106583](https://github.com/anthropics/claude-code/pull/106583) [已关闭] 将 issue 分诊和去重工作流迁移到 Claude Sonnet 5.5**  
   将 issue 分诊、issue 去重、@claude 机器人触发三个内部自动化工作流从旧版 Opus/Sonnet 升级到 Claude Sonnet 5.5。

## 5. 热门讨论
源数据未提供讨论相关信息。

## 6. 功能诉求趋势
- **跨账户连接器支持**：当前最热门的功能，需求来自需要管理多工作区、拆分个人/工作账户的用户。
- **桌面端 UI 与 CLI 对齐**：自定义主题、聊天栏自适应尺寸等 CLI 已有 UI 特性，被大量桌面端用户列入愿望清单。
- **技能自定义控制**：用户希望技能支持 frontmatter 标记，关闭会话压缩后的自动重放，调整技能注入上下文的行为。
- **透明的模型更新路线图**：开发者希望提前获知模型别名变更和大致发布时间，以便安排测试与迁移工作。

## 7. 开发者痛点
- **Opus 5.5 可靠性问题**：多类异常行为被集中反馈，包括安全分类器误拦截、错误拒绝读取文件、工作完成度核验不准确。
- **上下文效率问题**：会话压缩后重复注入技能、MCP `ToolSearch` 缓存失效等问题，导致 token 消耗过高、性能下降。
- **权限系统边界异常**：旁路模式下出现危险操作误判、定时任务意外获取工具权限、Web/Shell 调用存在邮箱泄露风险。
- **桌面端性能回退**：侧边会话嵌套引发成本激增、macOS 系统不稳定，Windows/WSL 环境下 MCP 配置路径异常。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态速递
## 日期：2026-11-09

---

## 1. 近一周要闻概览
本周 Codex 社区的核心工作围绕稳定桌面端与 TUI 工作流、降低会话历史、MCP 启动及 Windows 专属体验的使用门槛展开。社区持续高度关注长期存在的可靠性问题，同时已合并的 PR 显示，团队正积极投入命令中心搜索、会话记录完整性、导航优化及模型/提供商配置相关的改进。

## 2. 版本发布
近一周的最新发布版本：
- `rust-v0.169.0-alpha.3`: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3
- `rust-v0.169.0-alpha.2`: https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2
- `rust-v0.168.0-alpha.7`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7
- `rust-v0.168.0-alpha.6`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6
- `rust-v0.168.0-alpha.3`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3
- `rust-v0.168.0-alpha.2`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.2
- `rust-v0.168.0-alpha.1`: https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.1

仅 `rust-v0.167.0` 包含可查看的发布说明：https://github.com/openai/codex/releases/tag/rust-v0.167.0
### `rust-v0.167.0`
- 新增 `codex agents --no-daemon` 命令，用于打开代理命令中心。
- 在命令中心和会话选择器中新增未读结果指示器。
- 支持在终端会话选择器中切换后端，同时保留草稿内容。

## 3. 热门问题
| 问题 | 重要性 | 社区反馈 |
|---|---|---|
| [#59895 Windows: 应用更新并切换回个人账号后，本地项目消失](https://github.com/openai/codex/issues/59895) | 应用更新与账号切换后出现的高影响 Windows 桌面端回归问题。 | 34 条评论，11 个互动反应；目前是活跃度最高的问题。 |
| [#24948 Codex 会话日志因重复压缩历史和原始工具输出增长至 700MB–2GB](https://github.com/openai/codex/issues/24948) | 长时间运行的 CLI 会话可能生成超大的本地日志/历史文件。 | 31 条评论；是存储/上下文管理痛点的强烈信号。 |
| [#15975 Windows 上 VS Code 更新后，Codex 扩展卡在加载/启动页](https://github.com/openai/codex/issues/15975) | 编辑器集成故障阻断了主流工作流路径。 | 17 条评论，10 个互动反应。 |
| [#21638 Windows 桌面端终端键盘粘贴文本重复插入](https://github.com/openai/codex/issues/21638) | 桌面端终端中直接影响生产力和输入正确性的问题。 | 10 条评论，7 个互动反应。 |
| [#24552 无法进入备用屏幕缓冲区](https://github.com/openai/codex/issues/24552) | TUI 兼容性问题，影响终端工作流的使用预期。 | 7 条评论，5 个互动反应。 |
| [#38839 Windows Terminal 上延迟调整大小重排后，TUI 会完整重放整个会话记录](https://github.com/openai/codex/issues/38839) | 长时间会话视觉干扰严重，使用难度上升。 | 7 条评论，4 个互动反应；已关闭。 |
| [#19260 功能请求：新增控制命令/工具输出折叠的设置项](https://github.com/openai/codex/issues/19260) | 用户希望对长命令/工具输出的展示方式拥有更多控制权。 | 7 条评论，21 个互动反应；是所有问题中最强的功能请求信号。 |
| [#48527 支持便捷复制会话名称与 ID，并在退出时显示名称](https://github.com/openai/codex/issues/48527) | 会话标识对工作交接、调试和恢复工作至关重要。 | 6 条评论。 |
| [#38923 WSL 环境下 Windows Terminal Preview 在 Codex TUI 中重复输入非 ASCII 字符](https://github.com/openai/codex/issues/38923) | 国际化/WSL 工作流的正确性问题。 | 6 条评论；已关闭。 |
| [#60193 已授权的浏览器/计算机控制工具在会话间消失](https://github.com/openai/codex/issues/60193) | 计算机控制功能可靠性不足会消耗使用额度却无法完成任务。 | 6 条评论；本周新提交的问题。 |

## 4. 核心 PR 进展
| PR | 功能 / 修复 |
|---|---|
| [#60320 将早期无条目 Cloud 失败记录纳入完整会话记录](https://github.com/openai/codex/pull/60320) | 改进会话记录加载逻辑，避免早期无条目的失败 Cloud 交互从历史中遗漏。 |
| [#60319 优化 TUI 中侧边聊天的查找与导航](https://github.com/openai/codex/pull/60319) | 在已保存的侧边聊天条目中新增最新用户提问预览，支持缓存与刷新状态。 |
| [#60309 预热选定项目时延迟执行器就绪状态](https://github.com/openai/codex/pull/60309) | 项目选定后，Cloud 会话预热将设置延迟的环境就绪状态。 |
| [#60286 从命令中心搜索任务历史](https://github.com/openai/codex/pull/60286) | 命令中心搜索范围扩展至更广的历史记录，而非仅限于已加载的任务。 |
| [#60280 修复附加到共享应用服务器时的 MCP 启动跟踪](https://github.com/openai/codex/pull/60280) | 避免客户端附加到共享应用服务器并错过 MCP 启动通知时，TUI 出现忙碌状态卡死。 |
| [#31045 将 MCP 授权发现延迟至启动失败时执行](https://github.com/openai/codex/pull/31045) | 可选的 HTTP MCP OAuth 发现逻辑从会话初始化阶段移出，避免拖慢会话创建。仍处于开放状态。 |
| [#60271 无聊天页面可返回时，保持代理概览页打开](https://github.com/openai/codex/pull/60271) | 优化导航状态，无跳转目标时概览页不会异常退出。 |
| [#60270 CLI 配置模型不在 ChatGPT 模型列表中时发出警告](https://github.com/openai/codex/pull/60270) | 针对 CLI 模型覆盖配置与 ChatGPT 可用模型不匹配的情况，新增启动警告。 |
| [#60186 允许登录过程中创建自定义提供商](https://github.com/openai/codex/pull/60186) | 登录选择器现在支持创建自定义提供商/网关，无需预先保存配置。 |
| [#60181 为侧边栏标签页新增键盘与鼠标导航支持](https://github.com/openai/codex/pull/60181) | 侧边栏标签页支持可配置的键盘操作与鼠标滚轮导航。 |

## 5. 热门讨论
### 创意想法
- [#9618 为什么没有 /rewind 或 /revert 功能？](https://github.com/openai/codex/discussions/9618)
  - 社区希望为代理的修改提供撤销/回退能力，认为 Codex 在这方面不如 OpenCode 和 Claude Code。
  - 25 条评论，154 个互动反应；是本周热度最高的产品创意信号。
- [#21742 Windows Codex 应用：安装位置与存储控制](https://github.com/openai/codex/discussions/21742)
  - Windows 用户希望能透明地控制安装位置和存储布局。
- [#27754 实验：在 AGENTS.md 中为可复用项目指导地图开发 Codex 插件](https://github.com/openai/codex/discussions/27754)
  - 社区正在探索仓库级指导地图，以优化后续会话的上下文信息。
- [#9230 Codex：面向 AI 驱动软件开发的更高层级可视化界面](https://github.com/openai/codex/discussions/9230)
  - 用户希望在原始代码编辑之外，拥有更抽象、可视化的编排能力。
- [#45284 可选的每个 GitHub 拉取请求对应独立 Codex 会话](https://github.com/openai/codex/discussions/45284)
  - 呼吁每个 PR 对应一个持久化的评审会话，避免不同提及位置的上下文碎片化。

### 问答交流
- [#33682 MCP 的问题被系统性忽视，这太离谱了](https://github.com/openai/codex/discussions/33682)
  - 用户反馈严重的 MCP OAuth/工具发现漏洞会阻断生产流程。
- [#52835 AI 辅助 KPI 管理系统：开发 4 个月仍无可用应用](https://github.com/openai/codex/discussions/52835)
  - 非开发者用户寻求使用 AI 编码工具开发商业应用的实用指导。
- [#2138 全自动/绕过审批不生效？](https://github.com/openai/codex/discussions/2138)
  - 用户希望在写入和补丁执行过程中减少审批步骤。
- [#57675 Pro 账号：连续 7 天所有模型都提示“所选模型容量已满”](https://github.com/openai/codex/discussions/57675)
  - 反馈账号级别的容量/可用性问题完全阻断使用。
- [#58235 Codex 会从 Rust 重写为 TypeScript 吗？](https://github.com/openai/codex/discussions/58235)
  - 下游分支维护者询问架构方向规划。

### 成果展示
- [#55421 TAHU：寻求开发者试用安全的邮件/代理工作流](https://github.com/openai/codex/discussions/55421)
- [#58849 code-review-skill：为 Codex 提供有依据的代码评审，带 JSON 合并门禁](https://github.com/openai/codex/discussions/58849)
- [#60297 更好的 Codex 上下文（BCC）上下文管理插件](https://github.com/openai/codex/discussions/60297)
- [#60264 通过远程 MCP 将长 Codex 报告发布为网页](https://github.com/openai/codex/discussions/60264)
- [#60116 Pushary：从手机端审批 Codex 操作](https://github.com/openai/codex/discussions/60116)

## 6. 功能请求趋势
- **撤销/回退代理修改。** 讨论 #9618 是最明确的趋势：用户希望获得可靠的回滚能力，无需在修改间手动提交。
- **更好的会话历史控制。** 请求包括更便捷地复制会话名称/ID、更强的历史搜索、持久化 PR 会话，以及减少会话记录重放的干扰。
- **输出与上下文展示控制。** 用户希望拥有折叠偏好设置、上下文窗口可见性，以及对长命令/工具输出的更优处理。
- **Windows 易用性控制。** 安装位置、存储、账号切换稳定性、终端粘贴正确性、扩展可靠性仍是反复出现的需求。
- **自定义提供商/模型灵活性。** 已合并的 PR 和公开讨论显示，用户需要自定义网关、模型覆盖安全保障，以及更清晰的提供商配置方式。

## 7. 开发者痛点
- **Windows 桌面端与终端不稳定。** 多个高参与度问题涉及更新后项目丢失、VS Code 扩展加载卡顿、粘贴重复、会话记录重放行为异常。
- **会话/日志膨胀与上下文疲劳。** 超大日志、压缩历史、长工具输出、重复的会话记录重排，让长时间会话难以管理。
- **MCP 可靠性与启动门槛。** 用户抱怨 OAuth/工具发现漏洞、启动缓慢、共享服务器状态问题，以及 MCP 配置阻断会话创建。
- **审批繁琐与自动化限制。** 用户希望更低门槛的执行、移动端审批，以及针对可信工作流的更好绕过机制。
- **配额、容量与成本可预测性。** 近期讨论显示，用户对额度限制、账号级容量错误，以及 token/配额透明度存在困惑。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态：2026-11-09

## 1. 近一周重点动态
过去一周，Gemini CLI 聚焦于子代理系统的增量稳定性优化，同时针对 Windows 环境与模型解析的边界场景进行了定向修复。社区最高优先级的讨论围绕子代理可靠性 bug 修复展开，同时团队也在持续探索 AST 感知的代码库工具，以提升代理执行效率。
## 2. 版本发布
### v0.68.0-preview.0
- 新增 v0.67.0-preview.0 与 v0.66.0 的更新日志
- 更新 README 文档，明确 Gemini CLI 的适用范围、局限性与工具启动行为
### v0.67.0
- 新增 v0.65.0 的更新日志
- 版本号升级至 0.67.0-nightly.20261020.gb041de017
- 新增 v0.66.0-preview 的更新日志
### v0.67.0-nightly.20261104.g89e9d25d6
- 修复扩展资源下载过程中的流式传输失败问题 [#30100](https://github.com/google-gemini/gemini-cli/pull/30100)
- 在动态模型解析逻辑中保留用户手动指定的 `gemini-2.5-flash` 模型选择
### v0.67.0-nightly.20261103.g0ac57c029
- 修复中断的 Whisper 模型下载被错误标记为已安装的问题 [#30058](https://github.com/google-gemini/gemini-cli/pull/30058)
## 3. 热门问题
1.  **#22323 达到 MAX_TURNS 上限后子代理被误报为目标完成，掩盖中断状态**
    - 链接：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - 最新动态：2026-11-09 更新，该 bug 会将中断的子代理运行伪装成成功完成，破坏用户对任务结果上报的信任。
    - 社区反馈：13 条评论、2 个点赞；已标记为 p1 优先级，需重新验证。
2.  **#19873 通过零依赖操作系统沙箱与执行后意图路由，利用模型的 bash 操作偏好**
    - 链接：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    - 最新动态：2026-11-09 更新，该方案旨在在保障安全性的前提下，释放 Gemini 3 模型的原生 bash 命令能力。
    - 社区反馈：9 条评论、1 个点赞；归类为大规模 p2 级增强需求。
3.  **#21409 通用型代理卡死无响应**
    - 链接：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - 最新动态：2026-11-09 更新，该严重 bug 会导致即使是文件夹创建这类简单任务也出现无限挂起，阻塞代理核心功能。
    - 社区反馈：8 条评论、8 个点赞；p1 优先级，需重新验证。
4.  **#22745 评估 AST 感知的文件读取、搜索与代码映射能力的影响**
    - 链接：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - 最新动态：2026-11-09 更新，该史诗级需求用于跟踪 AST 工具相关研究，以降低令牌消耗并提升代码导航精度。
    - 社区反馈：7 条评论、1 个点赞；p2 级功能请求。
5.  **#21968 Gemini 未能充分利用技能与子代理**
    - 链接：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - 最新动态：2026-11-09 更新，该 bug 指即使任务高度匹配，代理也不会自动调用自定义技能/子代理。
    - 社区反馈：7 条评论；p2 优先级，需重新验证。
6.  **#22267 浏览器代理忽略 settings.json 中的自定义配置（如 maxTurns）**
    - 链接：[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    - 最新动态：2026-11-09 更新，该 bug 会导致用户对浏览器代理的配置失效，破坏预期行为。
    - 社区反馈：5 条评论；p2 优先级。
7.  **#22232 增强 browser_agent 韧性：自动会话接管与锁恢复机制**
    - 链接：[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
    - 最新动态：2026-11-09 更新，该功能请求用于解决浏览器代理遇到锁定配置文件时直接快速失败的问题，降低用户操作阻碍。
    - 社区反馈：4 条评论；p3 级用户功能请求。
8.  **#21983 浏览器子代理在 Wayland 环境下运行失败**
    - 链接：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - 最新动态：2026-11-09 更新，该 p1 级 bug 会导致 Wayland 系统上的浏览器子代理功能完全失效。
    - 社区反馈：4 条评论、1 个点赞；需重新验证。
9.  **#20079 若 ~/.gemini/agents/ 下的 filename.md 为符号链接，则无法被识别为代理**
    - 链接：[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
    - 最新动态：2026-11-09 更新，该 bug 会破坏高级用户基于符号链接组织代理的工作流。
    - 社区反馈：4 条评论；p2 优先级，需补充更多信息。
10. **#24246 启用超过 128 个工具时，Gemini CLI 报 400 错误**
    - 链接：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - 最新动态：2026-11-09 更新，该 bug 会在启用过多工具时导致硬性失败，限制了扩展能力。
    - 社区反馈：3 条评论；p2 优先级，需补充更多信息。
## 4. 关键 PR 进展
1.  **#30090 ci(chained_e2e)：禁止向受控派生仓库的代码暴露 GEMINI_API_KEY**
    - 链接：[#30090](https://github.com/google-gemini/gemini-cli/pull/30090)
    - 状态：开放
    - 价值说明：通过限制仅可信触发的运行才可访问密钥，缓解端到端 CI 工作流中的安全风险，防止派生仓库的代码获取 API 密钥。
2.  **#30082 feat(core)：新增 model.requestTimeoutMs 配置项，用于设置 API 头部超时时间**
    - 链接：[#30082](https://github.com/google-gemini/gemini-cli/pull/30082)
    - 状态：开放
    - 价值说明：为长时间运行的模型请求提供用户可配置的 API 超时时间，替代原有的 60 秒硬编码限制，避免合法的长思考操作被意外中断。
3.  **#30095 fix：修复 Windows 环境下 git diff 权限绕过漏洞**
    - 链接：[#30095](https://github.com/google-gemini/gemini-cli/pull/30095)
    - 状态：开放
    - 价值说明：修补了 Windows 平台的关键安全漏洞——危险的 Git 参数可能被错误分类为安全的只读操作。
4.  **#29946 fix(agents)：按父会话与端点隔离远程会话**
    - 链接：[#29946](https://github.com/google-gemini/gemini-cli/pull/29946)
    - 状态：已关闭
    - 价值说明：防止远程代理调用中跨会话的会话标识符泄漏，修复独立用户会话之间的状态污染问题。
5.  **#29942 fix(core)：完整扫描计划文件内容并上报读取失败**
    - 链接：[#29942](https://github.com/google-gemini/gemini-cli/pull/29942)
    - 状态：已关闭
    - 价值说明：修复了计划文件解析时拒绝开头含空白符的合法内容的问题，同时可正确上报不可读文件，而非错误归类为空文件。
6.  **#29935 fix(cli)：保留引用文件内容中的空白符**
    - 链接：[#29935](https://github.com/google-gemini/gemini-cli/pull/29935)
    - 状态：已关闭
    - 价值说明：保留 `@file` 引入内容中的缩进与换行，避免因空白符被裁剪导致模型上下文损坏。
7.  **#29931 fix(cli)：扩展 Windows 环境下的家目录相对路径解析能力**
    - 链接：[#29931](https://github.com/google-gemini/gemini-cli/pull/29931)
    - 状态：已关闭
    - 价值说明：修复自定义策略与扩展中 `~\` 前缀的 Windows 路径解析问题，使 Windows 路径处理与 POSIX 系统保持一致。
8.  **#29929 fix：在模型列表中展示准确的输出限制**
    - 链接：[#29929](https://github.com/google-gemini/gemini-cli/pull/29929)
    - 状态：已关闭
    - 价值说明：修正了具有误导性的模型输出限制展示，将 Gemini 2.5 Pro/Flash 的实际 65,536 令牌上限准确展示，替代原有的错误 8,192 值。
9.  **#29924 fix(cli)：在会话预览中保留 Unicode 字符**
    - 链接：[#29924](https://github.com/google-gemini/gemini-cli/pull/29924)
    - 状态：已关闭
    - 价值说明：修复了会话预览中 ASCII 以外文本被裁剪的问题，让国际用户可正常使用会话历史功能。
10. **#27423 feat(core)：新增可配置的单工具调用超时设置（tools.callTimeout）**
    - 链接：[#27423](https://github.com/google-gemini/gemini-cli/pull/27423)
    - 状态：开放
    - 价值说明：为单个工具调用（尤其是 shell 命令）添加全局超时设置，避免无限制的执行时间阻塞代理工作流。
## 5. 功能需求趋势
- 代理可靠性与自主运行能力：优化子代理错误上报、自动使用技能/子代理、减少卡死是功能讨论的核心方向，目标是让代理行为更可预测，减少对用户手动干预的依赖。
- AST 感知的代码工具：多个关联问题探讨通过 AST 解析减少令牌冗余、提升代码导航精度，降低代理操作中文件读取不匹配的问题。
- 平台特定的健壮性：针对 Windows 的路径处理、Git SSH 兼容性、权限验证需求，以及 Linux 下浏览器代理的 Wayland 支持，凸显跨平台一致性是核心优先级。
- 可配置的代理行为：可调整超时时间、浏览器代理的会话韧性、细粒度工具范围等需求，反映出用户希望对代理执行参数拥有更强的控制能力。
## 6. 开发者痛点
- 子代理不稳定：反复出现的子代理卡死、中断运行被误报为成功、无法自动调用可用技能等问题，削弱了用户对代理自动化的信任。
- 平台不一致：Windows 用户面临路径解析失效、Git SSH 配置错误、安全绕过等问题；Linux Wayland 用户则遭遇浏览器代理功能异常。
- 执行无限制：长时间运行的工具调用与 API 请求默认无配置化超时机制，导致无限挂起，需要用户手动干预。
- 配置缺失：浏览器代理会忽略用户的自定义配置，基于符号链接的代理组织工作流也无法按预期运行。
- 令牌与上下文冗余：未优化的文件读取与工具列表会导致令牌消耗过高，启用过多工具时还会触发 400 错误。

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态周报
**日期**：2026-11-09

## 1. 近七日亮点
过去一周，Copilot CLI 发布了多预发布版本更新，重点优化跨终端兼容性、沙箱配置灵活性，并修复 MCP token 管理与会话稳定性相关缺陷。面向用户的核心改进包括：原生支持终端程序状态上报、多行输入工作流优化，以及 Windows 平台专属的 MCP 登录流程优化。社区当前主要诉求集中在键盘输入自定义能力优化、MCP 认证可靠性提升，以及长时运行会话稳定性增强。

## 2. 版本发布
### v1.0.108-1
**修复**
- 现在 Grok 4.7/4.6 模型处理 PDF 附件时，会自动降级为文件引用模式，不再出现请求失败问题
- 沙箱模式：执行 `/cd` 切换目录后，本地 MCP 服务会自动重启以继承新目录的权限规则

### v1.0.108-0
**新增**
- 新增 `sandbox.userPolicy.filesystem.enumeratePaths` 配置项，支持 Windows 平台仅授予目录枚举权限
- 新增 `/index` 命令，符合条件的仓库默认启用托管的共享 tgrep 索引
**优化**
- 内置助手现在可直接回答关于 Copilot CLI 行为的相关问题

### v1.0.107（2026-11-06）
**新增**
- 通过 Kitty 直接渲染协议支持 Rex 终端内联图片展示
- 新增 `/code` 命令，可在 VS Code 中打开当前会话
- 在 `copilot config` 中新增 Fusion 层级配置项
**优化**
- `/settings` 命令现在打开统一控制台，支持全局搜索配置项与本地资源

### v1.0.106（2026-11-05）
- 同步 v1.0.107 全部功能至稳定通道发布

### v1.0.106-9
**修复**
- 修正 `apply_patch` 的行数统计逻辑，现在可正确展示实际修改的代码行数
- `copilot config` 现在会在 `settings.json` 值类型无效时发出警告，不再直接忽略整个配置文件

### v1.0.106-8
**优化**
- Windows 平台下载本地模型时，现在会自动安装 llama.cpp 并展示下载进度
- `/memory` 命令在仓库内存作用域不可用时会显示对应状态提示
**修复**
- 当 `-p --agent` 使用无效 frontmatter 键时，现在会在 stderr 输出警告信息

### v1.0.106-7
**新增**
- 同步 v1.0.107 核心功能的相关更新
**优化**
- 内置 browser-use 插件升级至 v0.1.0，安装流程更顺畅

### v1.0.106-6
**新增**
- 统一推出 `/settings` 控制台功能
- 交互式 CLI 现在可向支持的终端上报程序状态（遵循 OSC 7501 协议）
**优化**
- 用户私有的 MCP 内容不再下发给 Agent

### v1.0.106-5
**修复**
- ACP 模式下现在可正确生效 `includeCoAuthoredBy: false` 配置
- 指定参数的 `/settings` 命令现在可直接展示对应配置项

### v1.0.106-4
**修复**
- 空会话不再出现在会话选择列表中
- 被标点或引号包裹的 `@file` 提及现在可正确关联对应文件

## 3. 热门议题
1. **#2776 [状态：开放] [领域：输入-键盘] Shift+Enter 会直接提交提示词，而非换行**
   - 链接：[github/copilot-cli#2776](github/copilot-cli/issues/2776)
   - 影响说明：打破了终端标准多行输入工作流，给需要编写复杂提示词的用户带来不便
   - 社区反馈：9 条评论，5 个点赞；与重复提交的 #3768 议题反馈的问题完全一致

2. **#5112 [状态：已关闭] [领域：终端渲染] 交互式 CLI 支持 OSC 7501 程序状态上报**
   - 链接：[github/copilot-cli#5112](github/copilot-cli/issues/5112)
   - 影响说明：支持终端模拟器展示 Agent 运行状态（工作中/阻塞/空闲），让长时任务的进度更直观
   - 社区反馈：7 条评论，20 个点赞；该功能已在 v1.0.106-6 版本中落地

3. **#5236 [状态：开放] [领域：Windows 平台、MCP] Windows 平台：MCP 登录后 Entra 代理 token 缓存为空**
   - 链接：[github/copilot-cli#5236](github/copilot-cli/issues/5236)
   - 影响说明：Windows 企业用户每次使用 MCP 服务都需要重复认证
   - 社区反馈：6 条评论；与 macOS 平台同类问题 #5250 对应

4. **#508 [状态：开放] 支持 Windows 平台 Git Bash 环境**
   - 链接：[github/copilot-cli#508](github/copilot-cli/issues/508)
   - 影响说明：偏好使用 Git Bash 而非 PowerShell/PWSH 的 Windows 开发者会遇到兼容性问题
   - 社区反馈：4 条评论，7 个点赞；是 2025 年就提出的长期诉求

5. **#5219 [状态：开放] [领域：Agent、模型] 会话卡死：任务子 Agent 因未知模型 ID 触发提示预算错误，无法继续运行**
   - 链接：[github/copilot-cli#5219](github/copilot-cli/issues/5219)
   - 影响说明：导致长时交互会话完全不可用，且没有清晰的恢复路径
   - 社区反馈：4 条评论；影响使用自定义 Agent 配置的高级用户

6. **#4695 [状态：开放] [领域：认证、MCP] MCP OAuth token 无法跨会话稳定复用**
   - 链接：[github/copilot-cli#4695](github/copilot-cli/issues/4695)
   - 影响说明：缓存键无效导致 HTTP MCP 服务需要重复登录认证
   - 社区反馈：4 条评论，2 个点赞；是依赖 MCP 的工作流的核心痛点

7. **#3760 [状态：已关闭] [领域：输入-键盘、Windows 平台] Ctrl+Enter 行为与文档描述不匹配**
   - 链接：[github/copilot-cli#3760](github/copilot-cli/issues/3760)
   - 影响说明：文档与实际行为不一致，让使用 Git Bash 的 Windows 用户产生困惑
   - 社区反馈：4 条评论，12 个点赞；已在最新预发布版本中修复

8. **#5100 [状态：开放] [领域：会话] 主机确认超时 120 秒后，会话事件分发永久失效**
   - 链接：[github/copilot-cli#5100](github/copilot-cli/issues/5100)
   - 影响说明：长时任务运行到一半会失去响应，需要手动恢复会话
   - 社区反馈：3 条评论；对长时间运行的开发工作流影响较大

9. **#4977 [状态：已关闭] [领域：Linux 平台、安装] 内置 ripgrep 在 16KB 页大小的 ARM64 内核（Asahi Linux）上崩溃**
   - 链接：[github/copilot-cli#4977](github/copilot-cli/issues/4977)
   - 影响说明：导致 Apple Silicon 运行 Linux 的用户无法使用核心搜索功能
   - 社区反馈：3 条评论；是针对特定平台的关键修复

10. **#5320 [状态：开放] [待分类] 为 herdr-app/herdr-core 支持 OSC 7501 Agent 状态上报**
    - 链接：[github/copilot-cli#5320](github/copilot-cli/issues/5320)
    - 影响说明：将终端状态集成能力扩展到第三方终端模拟器
    - 社区反馈：3 条评论，11 个点赞；是已关闭议题 #5112 的延伸需求

## 4. 核心 PR 进展
近 7 天共有 4 个 PR 更新，全部重点列出：
1. **#5373 [状态：开放] 文档：新增 Copilot CLI 简体中文 README**
   - 链接：[github/copilot-cli#5373](github/copilot-cli/pull/5373)
   - 说明：新增 README 的完整简体中文翻译，并添加跨语言导航链接，提升中文开发者的使用门槛

2. **#5186 [状态：开放] 更新 feature_request.yml 模板**
   - 链接：[github/copilot-cli#5186](github/copilot-cli/pull/5186)
   - 说明：优化功能需求的议题模板，提升问题分类处理效率

3. **#5339 [状态：开放] [功能] 新增只读 Agent 监控 TUI（关系图 + 时间线）**
   - 链接：[github/copilot-cli#5339](github/copilot-cli/pull/5339)
   - 说明：推出独立的终端查看器，可查看本地 Copilot CLI 的 Agent 层级结构、任务等待时长和执行时间线

4. **#5321 [状态：开放] 新增 ADJU PHONE CAMERA Windows 应用**
   - 链接：[github/copilot-cli#5321](github/copilot-cli/pull/5321)
   - 说明：无关联的第三方贡献，新增 Windows 桌面应用，支持通过 WebRTC 将移动设备作为本地摄像头使用

## 6. 功能需求趋势
热门需求方向：
1. **终端生态集成**：原生支持 OSC 7501 程序状态上报（议题 #5112、#5320），以及内联图片渲染能力优化
2. **输入与易用性优化**：支持自定义多行输入快捷键（修复 Shift+Enter/Ctrl+Enter 行为异常），以及对话回滚记录的组织优化（议题 #4995）
3. **MCP 可靠性提升**：跨会话 token 复用、Windows/macOS 平台 Entra 代理认证修复，以及企业 MCP 注册表访问能力（议题 #4695、#5236、#5250、#4378）
4. **平台支持扩展**：Windows 平台 Git Bash 兼容性（议题 #508），以及 16KB 页大小 ARM64 Linux 支持（议题 #4977）
5. **可观测性增强**：推出只读 Agent 监控 TUI，用于追踪任务执行层级（PR #5339）

## 7. 开发者痛点
高频反馈问题：
1. **键盘输入行为不一致**：跨平台的 Shift+Enter/Ctrl+Enter 行为不统一，破坏用户直觉化的多行提示词编写体验（议题 #2776、#3760、#3768）
2. **MCP 认证体验差**：反复弹出登录提示、token 缓存为空、缓存键无效等问题，打断 MCP 服务的正常使用流程（议题 #4695、#5236、#5250）
3. **长时运行会话不稳定**：会话卡死、事件分发超时、子 Agent 模型降级报错等问题，导致长时间交互会话无法正常使用（议题 #5100、#5219、#5380）
4. **特定平台兼容性缺失**：Windows Git Bash 支持不足、ARM64 Linux 页大小适配问题、沙箱权限不匹配等问题，限制跨平台使用体验（议题 #508、#4977、#5368）
5. **权限配置逻辑不透明**：带空格的命令审批规则无法按文档描述正常生效，需要用户反复手动审批（议题 #4150）

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报（2026-11-09）
## 1. 近 7 天要点回顾
本周 OpenCode 发布**v2.2.6**，引入共享 MCP 连接，以降低进程开销、提升项目间启动速度，同时优化 GUI 插件、新增插件插槽。并行开发重点修复 V2 子代理生命周期关键 bug、Windows 平台兼容问题及免费额度异常问题（目前用户反馈集中于后者）。
## 2. 版本发布
- **v2.2.6**：新增共享 MCP 连接池，让配置相同的项目复用连接，减少冗余进程、加快初始化。同时新增 GUI 插件主题支持与插件插槽。
- **process-daemon v0.5.0 / opencode-pty 0.5.0**：以 `@opencode/pty@0.5.0`（协议版本 8）发布至 npm。
## 3. 热门问题
1. **[#59387] 免费额度限制异常**：当前最活跃问题，已有 333 条评论，集中反馈免费额度触发错误、额度重置失败、桌面客户端版本兼容报错，是免费用户的首要痛点。
2. **[#9541] OpenCode Desktop 直接编辑文件**：已关闭的功能请求，共 17 条评论，希望桌面客户端支持原生文件编辑，补齐核心可用性缺口。
3. **[#48826] V2 子代理提前完成 bug**：14 条评论，关键 bug：后台 shell 命令或子代理尚未完成时就被标记为已完成，结果无法收集。
4. **[#62797] TUI Plan 模式提示持续弹出**：9 条评论，bug：切换代理后 Plan 模式提示仍反复出现，干扰实现类工作流。
5. **[#23655] Go 服务支持 Responses API**：长期功能请求，9 条评论、31 个点赞，希望 OpenCode Go 服务支持 Responses API。
6. **[#59461] 旧 CPU 上桌面端启动崩溃**：7 条评论，新版 Bun 运行时要求 SSE4.2 指令集，导致不支持 SSE4.2 的处理器启动即失败（错误码 134）。
7. **[#62559] Windows 工具参数路径损坏**：6 条评论，bug：Windows 反斜杠路径（如 `X:\workspace\`）间歇性损坏，在传入工具前丢失盘符与反斜杠。
8. **[#62800] 桌面端致命时间线行错误**：3 条评论，Windows Desktop 2.2.6 出现致命错误 "Expected a user-message timeline row"：当虚拟化时间线行类型变化时触发，需重启应用。
9. **[#62556] Gemini cachedContent 失败**：3 条评论，bug：同时设置 `cachedContent` 与系统提示或工具时，Gemini/Vertex API 请求失败（违反 API 约束）。
10. **[#62213] 子代理权限覆盖 bug**：7 条评论（已关闭），bug：内置测试策略 `edit * deny` 规则追加在代理自定义规则之后，覆盖原本允许的权限，阻断子代理的合法编辑操作。
## 4. 核心 PR 进展
1. **[#62802] 服务端代理负载基准测试**：重构服务端代码，对三类代理负载做基准测试、减少冗余流式工作，提升性能度量准确性。
2. **[#60506] 修复 Unix 反斜杠文件名处理**：修正路径归一化逻辑——此前会错误地把 Unix 上合法的反斜杠文件名替换为正斜杠，导致 glob/grep 失效。
3. **[#62806] 增强链路追踪标签**：为 shell、工具与模型流式 span 增加会话、代理、命令标签，提升可观测性与调试效率。
4. **[#62788] Claude 套餐用量上报**：对已登录用户，将 Claude 套餐用量指标上报至 OpenCode Console。
5. **[#62796] 非阻塞式服务端插件加载**：服务端请求处理器不再等待插件加载，目录读取完全非阻塞，降低响应延迟。
6. **[#62801] Console 插件重构**：简化 Console 插件的 `ProviderRefresh` 处理，实现持久化 `SharedCache`，减少临时 workaround。
7. **[#62760] 修复登出后远程配置残留**：用户登出后，不再让 well-known 远程配置（供应商、策略）继续生效，解决“幽灵登录”状态。
8. **[#62769] SQLite FTS5 会话历史索引**：新增实验性后台维护的 SQLite 全文检索索引，用于会话历史，为未来搜索功能打基础。
9. **[#62147] 更健壮的文件读取行为**：`tail` 读取从文件末尾开始，支持负偏移；文件缺失时给出相似文件名建议，减少代理重试循环。
## 5. 热门讨论
源材料未提供相关讨论数据。
## 6. 功能请求趋势
- 桌面端直接编辑文件能力（[#9541]）
- Go 服务集成 Responses API（[#23655]）
- 在规划模式与构建模式间切换时，保留所选标签页的模型（[#54375]）
- 实验视图中的会话固定功能（[#59906]）
- 子代理跟进调用缺失 `sessionID` 时显式报错，避免意外新建代理（[#62793]）
## 7. 开发者痛点
- **免费额度稳定性差**：大量额度误触发、重置失败与版本锁定问题是用户最集中的不满，主要集中在 Issue [#59387]。
- **V2 子代理生命周期 bug**：后台任务提前完成、重启恢复失败（[#48826], [#62792]）破坏长时间运行工作流。
- **Windows 平台兼容性**：路径损坏（[#62559]）、ACP 会话失败（[#62551]）、pwsh 路径含空格问题（[#62683]）持续困扰 Windows 用户。
- **旧硬件支持不足**：新版 Bun 运行时要求 SSE4.2 指令集，导致不支持该指令集的桌面端崩溃（[#59461]），将老旧机器用户挡在门外。
---

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

### 1. 近 7 日要闻
Pi 项目已发布 **v1.5.0**，引入了扩展更新日志（changelog）功能，以提升透明度。本周的重点工作集中在稳定性、跨平台支持（尤其是 Windows）以及开发者体验方面，在 TUI 行为、MCP 集成和性能优化上实现了关键改进。社区贡献也在持续打磨核心工作流，包括上下文管理、OAuth 处理以及 SDK 自定义等方面的修复。

---

### 2. 版本发布
- **v1.5.0**（[详情](https://github.com/earendil-works/pi/releases/tag/v1.5.0)）
  - 新功能：**扩展更新日志**。用户现在可以在更新后的下一次全新启动时，查看已安装扩展包的变更内容。包作者可以自定义更新日志的路径，同时提供了 `collapseChangelog` 选项来折叠这些通知。

---

### 3. 热点议题
以下是过去一周最值得关注的问题，按影响程度和社区参与度排序：

1. **[#7547 [Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)**
   - 这是一个用于收集 Windows 使用反馈的元问题。它已有 94 条评论，反映出有大量用户希望获得更好的 Windows 开箱即用支持。维护者希望根据实际痛点优先安排修复工作和文档完善。

2. **[#11021 openai: ChatGPT sign-in still uses 272K for GPT-6.1 Sol despite 500K account catalog](https://github.com/earendil-works/pi/issues/11021)**
   - 用户报告称，Pi 1.3.0 在通过 ChatGPT 认证时，会低估 `gpt-6.1-sol` 的上下文窗口大小，导致过早进行压缩（compaction）。该问题有 8 条评论和 8 个互动反应，对重度 GPT 用户影响较大。

3. **[#10862 [bug] Hardware cursor jumps to the wrong column while a mouse selection is active (1.2.0)](https://github.com/earendil-works/pi/issues/10862)**
   - 这是一个 TUI bug：在鼠标选取文本时，硬件光标会错位。该问题有 9 条评论，影响了那些在终端中依赖鼠标操作的用户的核心使用体验。

4. **[#10287 [bug] `getContextUsage()` massively overestimates context after retryable network error](https://github.com/earendil-works/pi/issues/10287)**
   - 一个严重的 bug：在网络故障后，上下文使用量会从约 42k 激增至 330k tokens，导致不必要的压缩。已有 8 位用户报告了该问题，它降低了不稳定网络环境下的可靠性。

5. **[#10162 [bug] Too many input images stop the agent task](https://github.com/earendil-works/pi/issues/10162)**
   - 用户报告，在处理过多图片时，Agent 任务会失败。该问题有 8 条评论，暴露了多模态工作流在规模扩展上的局限性。

6. **[#11026 [durable] pi-durable: permanently delete a conversation from storage](https://github.com/earendil-works/pi/issues/11026)**
   - 这是一个功能请求，希望增加一个 `deleteConversation` 方法。该问题有 5 条评论和 4 个点赞，旨在解决持久化会话中的数据生命周期管理问题。

7. **[#6415 [last-read, no-action] Move `lastChangelogVersion` from Config file](https://github.com/earendil-works/pi/issues/6415)**
   - 用户希望将 `lastChangelogVersion` 从主配置文件中移出，以减少同步 dotfiles 时产生的 git 噪音。虽然该问题因“不予处理”被关闭，但获得了 5 个点赞，说明这是一个普遍痛点。

8. **[#10187 [CLOSED] [no-action] Move `deviceId` out of the global settings](https://github.com/earendil-works/pi/issues/10187)**
   - 与 #6415 类似，用户要求将设备特定的标识符从受版本控制的配置中移出。虽然该问题已关闭，但获得了 6 个点赞，反映了更广泛的 dotfile 管理需求。

9. **[#10585 bash temp-file stream errors still crash the whole process on 1.0.4 (ENOSPC on a full /tmp, EACCES)](https://github.com/earendil-works/pi/issues/10585)**
   - 这是一个稳定性问题，临时文件错误（例如 `/tmp` 空间已满）会导致 Agent 崩溃。该问题有 4 条评论，影响了在资源受限系统上运行的用户。

10. **[#11919 [CLOSED] MCP reconnection blocks 2-4 minutes on servers that cannot connect (OAuth missing/expired)](https://github.com/earendil-works/pi/issues/11919)**
    - 用户报告，当服务器需要认证但认证信息缺失或过期时，MCP 重连过程会长时间阻塞 2 到 4 分钟。虽然在最近的清理中已关闭，但它凸显了集成过程中的摩擦问题。

---

### 4. 关键 PR 进展
以下是本周合并或更新的最具影响力的 Pull Request：

1. **[#11857 feat: prompt cache warming in p2](https://github.com/earendil-works/pi/pull/11857)**
   - 实现了提示词缓存预热（cache warming）功能，以避免在空闲一段时间后重新发送完整的提示词。对于使用 Anthropic 模型的用户，据报告这项功能每月可节省约 1,430 美元的成本。

2. **[#11934 tui: decode mintty LF as Shift+Enter](https://github.com/earendil-works/pi/pull/11934)**
   - 修复了 mintty（Windows 终端）中 Shift+Enter 的行为，改善了对话记录搜索中的键盘导航体验。

3. **[#11904 Feat/custom system prompt preamble](https://github.com/earendil-works/pi/pull/11904)**
   - 允许 SDK 用户自定义系统提示词的前缀（preamble），同时不丢失默认的工具描述、规则和文档。

4. **[#11920 fix(codemode): let scripts declare their own tools and console bindings](https://github.com/earendil-works/pi/pull/11920)**
   - 修复了一个语法错误，该错误导致声明了 `tools` 或 `console` 的 codemode 脚本无法运行。

5. **[#11895 fix(coding-agent): match grep globs relative to path](https://github.com/earendil-works/pi/pull/11895)**
   - 修正了 grep 的 glob 匹配逻辑，使其使用指定的 `path` 而非工作目录，解决了文件搜索不一致的问题。

6. **[#11896 fix(coding-agent): wait for image resize worker to terminate](https://github.com/earendil-works/pi/pull/11896)**
   - 通过确保在新的 image resize worker 启动前，旧的 worker 完全终止，来防止处理多张图片时的竞态条件。

7. **[#11893 fix(ai): translate sampling reasoning_effort through thinkingLevelMap](https://github.com/earendil-works/pi/pull/11893)**
   - 确保 `reasoning_effort` 参数能被正确映射到特定模型的参数上，防止无效值被发送到 API。

8. **[#11891 fix(ai): omit empty tools array for tool history on openai-completions](https://github.com/earendil-works/pi/pull/11891)**
   - 修复了 vLLM 0.20+ 返回 400 错误的问题：当没有工具但存在工具历史记录时，不再发送 `"tools": []` 字段。

9. **[#11890 fix(tui): draw fullscreen Kitty images after the rows they cover on every terminal](https://github.com/earendil-works/pi/pull/11890)**
   - 通过确保正确的图层顺序，改进了在 Orca 和 WezTerm 等终端中的内联图片渲染。

10. **[#11888 fix(coding-agent): record the live thinking level on the branch before each prompt](https://github.com/earendil-works/pi/pull/11888)**
    - 修复了分支导航后 thinking level 恢复过时的问题，确保在会话恢复时行为一致。

---

### 5. 热门讨论
*(按类别分组)*

#### 想法建议
- **[#4444 Supporting the Agent Client Protocol (ACP)](https://github.com/earendil-works/pi/discussions/4444)**
  - 这是一项长期提议，建议采用 ACP 作为编辑器集成的标准，以减少对 Pi 特定 RPC 客户端的需求。

#### 问答
- **[#11911 Pi vs OMP for research work (GPT/DeepSeek): scientific reasoning, experimental design, and token efficiency?](https://github.com/earendil-works/pi/discussions/11911)**
  - 一位用户询问在研究任务（如科学推理、实验设计和 Token 效率）方面，Pi 与 Oh My Pi (OMP) 相比如何，引发了关于用例差异化的兴趣。
- **[#11404 offical pi code agent sandbox by docker?](https://github.com/earendil-works/pi/discussions/11404)**
  - 社区确认了用于沙箱隔离的 Docker 镜像，有 3 条评论和 2 个点赞。

#### 成果展示
- **[#11844 pi-mom-slack: a community Slack bot for pi 1.x](https://github.com/earendil-works/pi/discussions/11844)**
  - 一个新的 Slack 机器人集成，可将 Pi 会话映射到 Slack 线程，并具有持久的工作目录。
- **[#11930 Show & tell: Assistant UI adapter for Pi Durable](https://github.com/earendil-works/pi/discussions/11930)**
  - 一个用于 Pi Durable 的 React 集成，可在自定义 UI 中实现对话记录渲染和线程导航。
- **[#11922 Show & tell: omp-web, a self-hosted browser workspace for Pi with a terminal and files](https://github.com/earendil-works/pi/discussions/11922)**
  - 一个为 Pi、Claude Code 和 Codex 提供的基于 Web 的工作空间，支持从笔记本电脑或手机进行远程访问。
- **[#11912 Show & tell: agentswarm.space task-discovery skill for Pi](https://github.com/earendil-works/pi/discussions/11912)**
  - 一个用于 Pi 的技能（skill），可通过 agentswarm.space 查找和提交公共任务。
- **[#11860 Show & tell: CaseClip — save a Pi mistake as a reviewable case card](https://github.com/earendil-works/pi/discussions/11860)**
  - 一个用于捕获和审查 Agent 错误以供后续分析的工具。
- **[#11722 Show & tell: OnlyClaws Android — give Pi a phone claw (live wallpaper, overlay, TTS via `js`)](https://github.com/earendil-works/pi/discussions/11722)**
  - 一个 Android 宿主应用，可运行 Agent 推送的 JS 代码，将手机变成 Pi 的外设。

---

### 6. 功能需求趋势
- **更好的 Windows 支持**：由 #7547 凸显，用户希望更流畅的安装、错误修复和开箱即用的兼容性。
- **可自定义的 SDK 前缀**：[#11317](https://github.com/earendil-works/pi/issues/11317) 和 PR [#11904](https://github.com/earendil-works/pi/pull/11904) 表明，用户希望在不丢失默认设置的情况下，实现个性化的 Agent 身份。
- **改进 MCP 和 OAuth 处理**：#11918 和 #11919 等问题表明，需要更稳健的 MCP 集成，尤其是在会话持久化和重连方面。
- **上下文和内存管理**：[#11026](https://github.com/earendil-works/pi/issues/11026)（删除对话）和 [#11925](https://github.com/earendil-works/pi/issues/11925)（清除上下文命令）等请求反映出，用户希望对会话状态有更精细的控制。
- **配置和 dotfile 规范性**：[#6415](https://github.com/earendil-works/pi/issues/6415) 和 [#10187](https://github.com/earendil-works/pi/issues/10187) 表明，用户希望将非必要的状态信息从受版本控制的配置中移出。

---

### 7. 开发者痛点
- **不稳定的网络行为导致上下文使用量飙升**：[#10287](https://github.com/earendil-works/pi/issues/10287) 表明，瞬时网络错误会严重破坏上下文跟踪。
- **Windows 特有的 bug**：从光标错位（#10862）到控制台关闭问题（PR #11889），Windows 用户面临着持续的摩擦。
- **临时文件和磁盘空间导致崩溃**：[#10585](https://github.com/earendil-works/pi/issues/10585) 凸显了未处理的 I/O 错误会导致 Agent 崩溃。
- **MCP 集成摩擦**：[#11918](https://github.com/earendil-works/pi/issues/11918) 和 [#11919](https://github.com/earendil-works/pi/issues/11919) 表明，OAuth 和重连流程仍不够顺畅。
- **TUI 不一致性**：从 Shift+Enter 失效（#4918）到粘贴标记损坏（#11923），终端用户体验仍是优化的重点领域。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周报 - 2026-11-09

## 1. 过去一周亮点
本周 Qwen Code v0.27.0 正式发布，新增托管代理会话的多任务处理能力，支持并行处理子问题并隔离草稿。项目同步发布了 TypeScript 和 Java 版增量 SDK，以及聚焦渠道可靠性和 CI 加固的桌面端 v0.27.0 版本。社区工作重心主要集中在解决 CI 流水线不稳定问题，以及扩展 Web Shell 功能。

## 2. 版本发布
以下是过去一周最重要的发布版本：
- **sdk-typescript-v0.1.30**：TypeScript SDK 更新，内置 CLI v0.27.0，基于同一发布分支构建。[GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.30)
- **v0.27.0**：正式版，优化托管代理会话，支持多个并行子任务，每个任务拥有独立草稿和错误隔离机制。[GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.0)
- **desktop-v0.27.0**：桌面端发布，修复 GitHub 入站通道读取失败后的恢复逻辑，加固核心续期测试。[GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.0)
- **v0.26.9**：正式补丁版，新增技能 ZIP 上传支持、守护进程 API、TypeScript SDK 集成，以及带恢复保护的批量技能激活功能。[GitHub Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9)

## 3. 热门 Issue
过去一周更新的影响力最大的 Issue 包括：
1. **#14724 - Main CI 失败：托管代理门禁（未识别到测试）**：长期未解决的 Open bug，共 277 条评论，追踪托管代理门禁未报具体失败测试的反复出现的 CI 流水线失败问题。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/14724)
2. **#1377 - API 错误：400 "qwen3-coder:30b" 不支持思考模式**：已关闭的用户反馈 bug，Ollama 托管的 qwen3-coder:30b 在客户端尝试使用思考模式时会抛出 400 错误。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/1377)
3. **#16346 - Main CI 失败：托管代理门禁（ClassSizeRatchetTest）**：Open CI bug，追踪强制执行生产类大小限制的 Java SDK 测试失败问题。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16346)
4. **#16505 - E2E 测试失败：交互式 ink-agent-loop-parity**：Open 临时 E2E 测试失败，涉及交互式代理循环之间的写入批准流程一致性问题。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16505)
5. **#15697 - Web Shell 历史视口冒烟测试不稳定**：P2 优先级的不稳定测试问题，200 条记录的滚动冒烟测试在无关 PR 上超出 120 秒的超时预算。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/15697)
6. **#16259 - 用户消息被系统提醒淹没**：P2 bug，大量系统/内存目录提醒会将用户的实际任务指令挤出模型可见上下文，导致“未找到任务”的响应。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16259)
7. **#15327 - 全端统一代理循环**：P1 功能请求，要求所有 Qwen Code 终端在 `packages/core` 中使用单一共享代理循环实现。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/15327)
8. **#16683 - 桌面端 0.27 在 Intel x64 Mac 上运行失败**：P1 平台 bug，v0.27 桌面端构建版本在 Intel Mac 上因捆绑运行时致命错误而崩溃。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16683)
9. **#16689 - Web Shell 在会话恢复期间清除对话记录**：P3 bug，Web Shell 在重新同步会话事件流时，会短暂清空可见的对话记录。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/16689)
10. **#12113 - 截断响应后 ACP 报告 end_turn**：P2 集成 bug，即使模型输出因令牌限制被截断，ACP 客户端仍会收到 `end_turn` 停止原因。[GitHub Issue](https://github.com/QwenLM/qwen-code/issues/12113)

## 4. 关键 PR 进展
过去一周更新的值得关注的 Pull Request：
1. **#16628 - 修复 CI：自愈临时运行器插槽**：CI 修复，通过清理未认领的残留资源，恢复被孤立 Docker 资源堆积卡住的临时运行器插槽。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16628)
2. **#16528 - Web Shell：会话加载时恢复被中断的回合**：新增功能，会话加载时自动恢复已持久化的中断代理回合，而不是让其停留在手动“继续”按钮后。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16528)
3. **#16324 - Web Shell：托管会话复用宿主外壳样式**：UI 优化，让托管会话继承宿主外壳的头部样式，而不是渲染重复的托管会话外壳。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16324)
4. **#16656 - Serve：排空绑定 PR 监听的待处理状态转换**：守护进程功能，通过新增的带关闭开关的排空管道，将检测到的 PR 状态/CI/冲突转换传递给绑定会话。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16656)
5. **#16075 - 修复权限：匹配 amend 调用而非原始文本**：安全修复，更新 AUTO 模式的 amend 防护逻辑，改为解析 shell 调用，而不是扫描原始命令文本中的 git commit 模式。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16075)
6. **#16697 - 消除 temp-name watcher 和 auto-open disarm 测试的不稳定**：测试稳定性改进，在不修改任何断言或生产代码的前提下，消除两个测试套件的间歇性失败。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16697)
7. **#16629 - Web Shell：按客户端操作系统过滤通知帮助**：UI 修复，根据客户端操作系统显示特定平台的浏览器通知设置说明。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16629)
8. **#16662 - 修复 Web Shell 开发服务器在 QWEN_DAEMON_URL 为空时崩溃的问题**：回归修复，防止 `QWEN_DAEMON_URL` 设置为空字符串时开发服务器崩溃。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16662)
9. **#16687 - CLI：消息排队时保持底部栏挂载**：UI 修复，确保排队消息的“N queued”徽章在消息处于队列的整个期间保持可见。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16687)
10. **#16488 - 托管代理：可选的 Mem0 支持的个人记忆**：新增功能，添加可选的基于 Mem0 的按租户个人记忆存储，可在授权的工作区中复用。[GitHub PR](https://github.com/QwenLM/qwen-code/pull/16488)

## 5. 热门讨论
本期未提供独立于 Issue/PR 的单独讨论数据，因此省略此部分。

## 6. 功能需求趋势
近期 Issue 中最突出的功能需求方向包括：
1. **GitHub 渠道性能优化**：多个相关功能请求（#16690、#16691、#16692）聚焦于通过批量处理、条件请求和交互式提及的预算感知故障转移，减少 PR 状态轮询对 GitHub API 配额的消耗。
2. **统一代理循环**：P1 需求（#15327），将所有 Qwen Code 终端（CLI、Web Shell、桌面端、ACP）整合到单一共享的核心代理循环实现中。
3. **上下文效率**：功能请求（#16173、#16259）旨在通过让模型直接引用文件/工具输出的片段，并保持用户指令不被系统提醒遮挡，减少冗余的上下文膨胀。
4. **Web Shell 用户体验优化**：持续有请求改进 Web Shell 渲染（#16675）、滚动到底部控件（#16658）以及更流畅的会话恢复（#16689）。

## 7. 开发者痛点
开发者反馈的反复出现的不满和高频痛点：
1. **CI 流水线不稳定**：大量开放 Issue 追踪托管代理门禁、E2E 测试套件和平台特定单元测试中反复出现的、通常未分配的 CI 测试失败，许多不稳定测试在无关 PR 上失败（#14724、#15697、#16191）。
2. **上下文窗口污染**：用户反馈系统提醒、技能目录和内存条目会使消息大小膨胀，导致实际任务指令被模型忽略（#16259）。
3. **平台打包 bug**：近期的 v0.27 版本破坏了 Intel Mac 上的桌面端功能，影响了使用旧款苹果硬件的用户（#16683）。
4. **ACP 集成缺口**：通过 ACP 的 IDE 集成缺少核心功能，比如在 JetBrains 中无法渲染任务列表，导致用户体验与同类工具相比存在不一致（#8544、#12113）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*