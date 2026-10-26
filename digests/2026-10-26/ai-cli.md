# AI CLI 工具社区周报 2026-10-26

> 生成时间: 2026-10-26 01:05 UTC | 覆盖工具: 7 个

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

# Claude Code 技能社区热点报告（2026-10-26）

## 1. 热门技能排名（按讨论关注度排序）
1.  **mcp-builder (PR #1742)** ([链接](https://github.com/anthropics/skills/pull/1742))
    * 功能定位：MCP 集成构建工具链
    * 讨论焦点：修复与 MCP >=2.0.0 版本的兼容性问题（将 `streamablehttp_client` 重命名为 `streamable_http_client`，更新自定义请求头配置逻辑以适配新版 API 变更）
    * 状态：待合并（Open）
2.  **skill-creator (PR #1298)** ([链接](https://github.com/anthropics/skills/pull/1298))
    * 功能定位：技能开发与评测工具集
    * 讨论焦点：拆分触发词评测工作流，修复 Windows 平台 subprocess 调用 `select()` 接口的失败问题，修正触发词评分的假阳性/假阴性问题以及运行时错误处理逻辑
    * 状态：待合并（Open）
3.  **docx (PR #1792)** ([链接](https://github.com/anthropics/skills/pull/1792))
    * 功能定位：DOCX 文档处理自动化工具
    * 讨论焦点：为 LibreOffice 处理超时场景返回明确的错误报告，确认输出的 DOCX 文档已移除所有修订标记后才将任务标记为完成
    * 状态：待合并（Open）
4.  **webapp-testing (PR #1980)** ([链接](https://github.com/anthropics/skills/pull/1980))
    * 功能定位：Web 应用自动化测试套件
    * 讨论焦点：移除 `with_server.py` 中的 `shell=True` 调用，缓解 CWE-78 命令注入安全风险
    * 状态：待合并（Open）
5.  **algorithmic-art (PR #1977)** ([链接](https://github.com/anthropics/skills/pull/1977))
    * 功能定位：生成式算法艺术创作工具集
    * 讨论焦点：修复 `wrapAround()` 函数的取模逻辑，使其能正确处理负值，确保输出结果始终落在预期的 `[0, max)` 区间内
    * 状态：待合并（Open）
6.  **slack-gif-creator (Issue #1868)** ([链接](https://github.com/anthropics/skills/issues/1868))
    * 功能定位：Slack GIF 动图生成工具
    * 讨论焦点：修复 `create_gradient_background()` 函数中差值比例的差一错误，该问题会导致无法正常渲染配置的底部背景色
    * 状态：待处理（Open）
7.  **skill-creator (Issue #1394)** ([链接](https://github.com/anthropics/skills/issues/1394))
    * 功能定位：技能质量评测界面
    * 讨论焦点：修复评测查看器中 `escapeHtml()` 函数属性转义不一致的问题，阻断展示路径上的 XSS 安全漏洞
    * 状态：待处理（Open）

## 2. 社区需求趋势（来自 Issue 反馈）
1.  **安全与治理类技能**：用户对信任边界执行、技能命名空间身份认证、智能体治理模式工具的需求居高不下（Issue #492、#412）
2.  **企业协作工作流**：强烈需要组织级共享技能库，以及无需人工对接的技能分发机制（Issue #228）
3.  **技能可靠性工具**：持续收到关于优化技能触发词评测、上下文效率优化、重复技能自动识别合并的需求（Issue #556、#1487、#189）
4.  **文档处理鲁棒性**：对更稳定的 ODT/DOCX/PDF 格式处理能力有持续需求，要求支持规范的 XML 校验和跨平台兼容性（Issue #2018、#486、#538）

## 3. 高潜力待落地技能
1.  **notion-spec-to-implementation + quantitative-resume-auditor (PR #1245)** ([链接](https://github.com/anthropics/skills/pull/1245))
    * 适用场景：将产品/技术需求文档自动转换为可追踪的 Notion 实施任务，同时提供简历质量量化审计功能
    * 最近更新：2026-10-15（近期活跃）
2.  **md2video-audio (PR #1703)** ([链接](https://github.com/anthropics/skills/pull/1703))
    * 适用场景：基于 Marp 幻灯片生成能力，实现零成本的 Markdown 文档到 MP4 视频的自动编译，搭配拟真的 AI 配音
    * 最近更新：2026-09-15
3.  **proofcore-contract-auditor (PR #1771)** ([链接](https://github.com/anthropics/skills/pull/1771))
    * 适用场景：面向 Solidity/Rust 智能合约的自动化静态分析工具，支持将链上加密审计证明锚定到 TON Blockchain 公链
    * 最近更新：2026-09-16
4.  **pyxel retro game development (PR #525)** ([链接](https://github.com/anthropics/skills/pull/525))
    * 适用场景：基于 Pyxel 引擎，为 Python 复古游戏提供从创建、调试到验证的全流程支持
    * 最近更新：2026-10-23（近期活跃）
5.  **document-typography quality control (PR #514)** ([链接](https://github.com/anthropics/skills/pull/514))
    * 适用场景：解决 AI 生成文档的常见排版问题：孤行、章节标题与正文脱节、编号错位等
    * 最近更新：2026-03-13

## 4. 技能生态洞察
当前社区对技能层面最集中的诉求是生产级可靠性：用户优先关注安全、可预测、跨平台的稳定技能行为，要求避免上下文冗余、触发词误判和安全漏洞，同时推动企业协作流程简化，以及文档处理、开发者工具类细分场景的能力拓展。

---

# Claude Code 社区动态 - 2026-10-26

## 1. 近 7 日要闻
过去一周，Claude Code 连续发布了 7 个补丁版本，重点集中在安全加固、平台兼容性修复和企业可观测性改进方面。社区讨论的热门话题围绕 Bash 工具的 Shell 自定义、意外的用量统计回退，以及干扰正常本地开发工作流的过度宽泛的密码拦截防护机制。近期合并的所有 Pull Request 均强化了安全默认配置、插件隔离和差异对比面板的可靠性。

## 2. 版本发布
### v2.1.304
- 当首次运行的插件跳过用户的 mod 钩子时，新增了一条转录日志记录，包含事件名称和触发插件的详细信息。
- 为 mod `tool.check` 响应新增了 `decider: "person"` 支持，该配置将审批限制为仅通过权限对话框或宿主回调进行，若不符合条件则使用 mod 定义的消息自动拒绝。

### v2.1.305
- 新增了 `sandbox.allowNestedUserNamespaces` 配置，允许 Linux 沙箱化命令创建用户命名空间（适用于 Chromium、无 root 权限的 podman 等工具），同时文档明确说明此操作可能绕过沙箱文件保护机制。
- 新增了 `CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS` 环境变量，用于控制达到用量限制时无人值守重试模式的重试频率。

### v2.1.306
- 修复了 `claude -p` 云会话在未启动会话所需环境变量的情况下运行时，错误地报告“未登录”的问题。
- 修复了 API 错误被误报为“提示词过长”，以及在包含大量 MCP 工具的会话中出现不必要的压缩问题。

### v2.1.307
- 新增了 `/claude-api api-version` 命令，用于将 Claude API 集成迁移至 `2026-10-21` 版本。
- 新增了 `claude_code.safety_event` OpenTelemetry 事件，当工具调用被权限规则、自动模式、安全检查、钩子或沙箱拦截、提示或返回时，都会记录该事件。
- 修复了在网关和兼容服务器背后拒绝 `effort-2025` 请求头时导致的请求失败问题。

### v2.1.308
- 包含常规错误修复和可靠性改进。

### v2.1.309
- 修复了 macOS 和 Linux 上的沙箱化 Bash 命令在每次运行命令前，会在沙箱外执行 Shell 启动文件的问题。
- 修复了 macOS 沙箱的 `denyWrite` glob 模式无法应用于指向真实文件夹位置的符号链接路径的问题。

### v2.1.310
- 为 Bedrock、Vertex 和 Foundry 环境，以及禁用了遥测或非必要流量的部署，新增了 Monitor 工具和插件监控支持。
- 拦截了受限企业环境中的长时间前台休眠操作。
- 解决了与非标准网关之间剩余的请求兼容性问题。

## 3. 热门问题
1.  **[功能需求] 允许用户配置 Bash 工具使用的 Shell 或继承初始 Shell** ([#7490](https://github.com/anthropics/claude-code/issues/7490))
    - 40 条评论，131 个点赞，状态为开放。用户希望能控制 Bash 工具调用的 Shell，或继承用户初始登录的 Shell，使工具与个人环境配置保持一致。这是目前参与度最高的开放问题。

2.  **[错误] 无界面模式 `claude -p` 每 token 消耗的 5 小时窗口配额是交互式 `cli` 的约 1.8 倍** ([#97074](https://github.com/anthropics/claude-code/issues/97074))
    - 29 条评论，50 个点赞，状态为开放。Linux 用户报告称，相同工作负载在无界面模式下比交互式 CLI 多消耗 80% 的速率限制配额，并提供了完整的复现步骤。这是当前最活跃的错误报告。

3.  **对输入密码的硬性拦截破坏了正常的开发/测试工作流** ([#78160](https://github.com/anthropics/claude-code/issues/78160))
    - 18 条评论，25 个点赞，状态为开放。用户希望有一个权限门控的可选选项，用于在个人基础设施上禁用对本地开发和测试工作流的全面密码输入拦截，而非统一拒绝。

4.  **[功能需求] 桌面应用中的终端字体族设置** ([#48805](https://github.com/anthropics/claude-code/issues/78795))
    - 14 条评论，63 个点赞，状态为已关闭。一项被广泛要求的功能，旨在为桌面应用的 Code 标签页添加自定义终端字体选择，现已标记为已解决。

5.  **[功能需求] 自动记忆主题文件的触发式注入** ([#78795](https://github.com/anthropics/claude-code/issues/78795))
    - 13 条评论，状态为开放。用户希望为自动记忆文件添加规则式的 frontmatter，仅在提及相关主题时触发上下文注入，而不是默认加载所有记忆。

6.  **后台任务在精确的 30 分钟内部定时器上被 SIGTERM 终止** ([#84981](https://github.com/anthropics/claude-code/issues/84981))
    - 10 条评论，状态为已关闭。macOS CLI 用户报告称，长时间运行的后台 Bash 任务在恰好 30 分钟后被静默终止，且没有退出码说明；该问题现已标记为过期/已解决。

7.  **可能的用量统计回退：每周限制消耗速度比之前快得多** ([#102667](https://github.com/anthropics/claude-code/issues/102667))
    - 5 条评论，2 个点赞，状态为开放。用户报告称，在近期版本中，相同工作负载的每周配额消耗翻了一番，与无界面模式的用量错误问题一致。

8.  **[错误] Windows：Bash 工具在 Git Bash 解析命令前，将命令中每对反斜杠都减半** ([#100063](https://github.com/anthropics/claude-code/issues/100063))
    - 4 条评论，2 个点赞，状态为开放。使用 Git Bash 的 Windows 用户报告称，所有反斜杠转义都被错误地剥离，破坏了 heredoc 和带引号的路径，而原生 PowerShell 工具则不受影响。

9.  **自动记忆系统无效：记忆在不同会话中无法被可靠地读取或执行** ([#75334](https://github.com/anthropics/claude-code/issues/75334))
    - 4 条评论，状态为已关闭。用户报告称，写入的记忆在不同会话中无法被一致地加载或遵循；该问题现已标记为过期。

10. **[错误] Cowork 工件工具从远程设备桥接中被选择性移除** ([#89120](https://github.com/anthropics/claude-code/issues/89120))
    - 4 条评论，1 个点赞，状态为已关闭。macOS 用户报告称，在运行正常的 Cowork 远程桥接上，`create_artifact`、`update_artifact` 和 `list_artifacts` 工具消失了，而其他所有工具功能保持完好。

## 4. 关键 PR 进展
1.  **docs(plugin-dev)：在技能开发指南中明确技能命名规则** ([#29757](https://github.com/anthropics/claude-code/pull/29757))
    - 已关闭。更新了技能开发文档，要求技能名称采用与目录标识符匹配的 kebab-case 格式，并为命名一致性添加了审核检查。关闭了 #24556。

2.  **fix：解决脚本和工作流中的 10 个错误** ([#62597](https://github.com/anthropics/claude-code/pull/62597))
    - 已关闭。修复了分叉仓库的 CI 脚本兼容性，为计划工作流中的空仓库元数据添加了安全回退，并解决了自动化脚本中的多个边缘情况。

3.  **fix：/install-github-app 对开发容器的支持** ([#16132](https://github.com/anthropics/claude-code/pull/16132))
    - 已关闭。为开发容器镜像添加了官方 GitHub CLI 包源，以修复 `/install-github-app` 操作的身份验证失败问题。

4.  **mods：携带 process.run 截断标志和列表条目的 mtimeMs** ([#97293](https://github.com/anthropics/claude-code/pull/97293))
    - 已关闭。为 `$.process.run` 结果添加了对 stdout/stderr 截断标志的支持，并为 `$.fs.list` 条目添加了修改时间戳，同时添加了测试模拟来验证行为。

5.  **sec-default：对话记录保留不受用户层级限制** ([#97334](https://github.com/anthropics/claude-code/pull/97334))
    - 已关闭。确保组织部署的安全默认 mod 独立于用户层级设置保留对话记录。

6.  **sec-default：收集器记录保留不受用户层级限制** ([#97688](https://github.com/anthropics/claude-code/pull/97688))
    - 已关闭。当启用组织安全默认配置时，防止用户级插件丢弃或重写遥测收集器记录，与现有经典遥测流的行为保持一致。

7.  **diff：面板打开时显示提示通知** ([#99118](https://github.com/anthropics/claude-code/pull/99118))
    - 已关闭。从 `/diff` 面板配置中移除了 `holdToasts: true`，以便在差异对比视图打开时显示其他插件的临时通知。

8.  **sec-default：用户插件可以收紧安全规则，绝不可以放宽** ([#99137](https://github.com/anthropics/claude-code/pull/99137))
    - 已关闭。强制执行已安装的用户插件在 sec-default 激活时，不能覆盖组织的拒绝/询问权限规则或修改固定的安全变量。

9.  **diff：保留空面板，并在有内容时显示** ([#99141](https://github.com/anthropics/claude-code/pull/99141))
    - 已关闭。修复了在内容准备好之前打开的 `/diff` 面板会被丢弃而不是保留的问题，现在会在绘制处理程序附加后自动渲染。

10. **sec-default：组织工具权限上限对用户插件有效** ([#99540](https://github.com/anthropics/claude-code/pull/99540))
    - 已关闭。确保连接器工具的组织级审批要求适用于所有已安装的用户插件，并为策略钩子添加了 `.catch` 处理。

## 5. 功能需求趋势
本周问题中最突出的需求方向是：
- Bash 工具的 Shell 自定义（继承用户登录 Shell，配置默认 Shell 路径）
- 细粒度的安全防护控制（本地开发环境中权限门控的密码输入，可自定义的安全拦截阈值）
- 自动记忆系统改进（相关主题的触发式注入，更可靠的跨会话记忆加载）
- 桌面应用 UI 自定义（终端字体选择，将任务计划块从固定屏幕位置解除固定）

## 6. 开发者痛点
本周开发者反复反馈的高频痛点包括：
- 近期版本中速率限制和每周配额消耗意外过高，尤其是对于无界面 CLI 工作负载
- 过于宽泛的默认安全拦截（密码输入、沙箱中的 Shell 启动执行）破坏了正常的本地开发和测试工作流
- Windows（Bash 工具中的反斜杠剥离）和 macOS（符号链接沙箱路径失败、后台任务超时）上的平台特定错误
- MCP 和 Cowork 工具功能不可靠，包括为空字符串参数生成无效 JSON 以及远程桥接上缺少工件工具
- 桌面和 VS Code 扩展中的 UI 可用性不佳（面板视图中复制/粘贴快捷键失效，工具提示永久卡住）

---
</pre>

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区文摘：2026-10-26
## 近 7 天重点动态
开源 Codex/Rust 仓库发布 [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)，新增可复用提示预设与内联模型/权限配置。社区关注集中在 Windows 回归问题、VS Code 扩展启动失败，以及 Computer Use 浏览器控制失效。已合并的 Pull Request 多为 Guardian/上下文管理与追踪能力的内部改进，尚无面向终端用户的可见新特性。
## 版本发布
- **rust-v0.164.0**
  - 新增 10 个带编号的 `/presets` 槽位，用于存储可复用提示与斜杠命令，并支持通过键盘菜单快速访问。
  - 新增 `/model` 和 `/permissions` 内联参数，可直接设置模型、推理强度、速度与权限配置。
- 已发布 **rust-v0.165.0-alpha.1**、**rust-v0.164.0-alpha.12**、**rust-v0.164.0-alpha.11.1** 等多个 alpha 版本，但现有发布说明未包含面向用户的变更描述。
## 热门问题
- [#51524 Windows Computer Use 在 `get_window_state` 处中断](https://github.com/openai/codex/issues/51524) — 应用与窗口枚举功能正常，但 Codex 无法获取当前 Chrome/Edge 的 URL，导致浏览自动化无法进行。这是当前讨论量最高的缺陷。
- [#56691 Codex VS Code 扩展在 Windows VS Code 1.143.1 上无法启动](https://github.com/openai/codex/issues/56691) — `26.1021.22027` 版本无法初始化 UI。该问题直接阻断基于 IDE 的开发流程，影响范围广。
- [#50737 Windows 委派任务忽略用户级沙箱默认配置](https://github.com/openai/codex/issues/50737) — 新建任务会意外采用 `workspace-write`/`auto_review` 策略。由于权限默认值同时影响安全性与开发者工作流，该问题值得重点关注。
- [#37421 CLI 按两次 Esc 回退时，无法在持久化会话中找到已选提示](https://github.com/openai/codex/issues/37421) — 这是长期存在的 TUI/会话回归问题，目前已关闭，受影响用户主要依赖会话历史与提示导航功能。
- [#50728 macOS Computer Use 出现输入/粘贴重复](https://github.com/openai/codex/issues/50728) — Codex 会干扰 Claude Desktop 与 Opera 中的正常输入和粘贴操作。该问题不仅影响 agent 执行，还会干扰日常桌面使用，影响较大。
- [#40182 Windows 更新程序每小时重复下载 501.8 MB 文件](https://github.com/openai/codex/issues/40182) — 出现 EPERM 激活失败后，更新程序进入循环。会浪费带宽、磁盘空间与用户时间。
- [#54956 提升 Plus 档位 Codex 使用效率，降低模型试用成本](https://github.com/openai/codex/issues/54956) — Plus 用户提出的功能/效率诉求，反映了跨模型使用量难以持续的痛点。
- [#53177 ChatGPT Work Cloud 的 `list_threads` 接口已暴露但无法正常使用](https://github.com/openai/codex/issues/53177) — 该工具在本地执行时看似可用，但在云模式下运行失败。会影响与 ChatGPT Work 集成的工作流。
- [#31186 macOS 程序坞图标设置无法同步到启动器与通知界面](https://github.com/openai/codex/issues/31186) — 影响范围较小的 UX 回归问题，但因问题长期存在且未修复，仍在持续讨论。
- [#34946 允许定时任务指定 SSH 连接的主机作为执行目标](https://github.com/openai/codex/issues/34946) — 并非缺陷，而是高关注度的能力诉求：用户希望对远程 SSH 连接的机器执行定时自动化任务。
## 关键 PR 进展
- [#56560 在提供商设置中配置 GCP 项目与位置](https://github.com/openai/codex/pull/56560) — 不再依赖环境变量来配置 Vertex AI 端点。
- [#56559 移除 Guardian 快照相关的上下文辅助工具](https://github.com/openai/codex/pull/56559) — 内部清理工作，简化快照去重与助手回复保留逻辑。
- [#56557 在 Guardian 传输层测试中启用保留采样机制](https://github.com/openai/codex/pull/56557) — 使传输层测试与生产环境的采样/取消行为保持一致。
- [#56556 所有 Guardian v2 异步分类均使用会话后端](https://github.com/openai/codex/pull/56556) — 将异步分类逻辑迁移至保留会话后端。
- [#56555 在转录准备阶段应用同步 Guardian 消息限制](https://github.com/openai/codex/pull/56555) — 将截断逻辑推迟至转录准备阶段，确保统一应用配置文件限制。
- [#56554 支持使用掩码 AWS 凭证进行本地代理签名](https://github.com/openai/codex/pull/56554) — 为 AWS SigV4 操作提供更安全的本地代理签名支持。
- [#56553 在线程钩子列表中显示环境钩子](https://github.com/openai/codex/pull/56553) — 使执行环境中定义的钩子在线程钩子列表中可见。
- [#56552 NFS 上的 SQLite 数据库默认使用 DELETE 日志模式初始化](https://github.com/openai/codex/pull/56552) — 提升 NFS 环境下 Codex 状态/日志数据库的可靠性。
- [#56516 TUI 启动时遵循服务器审批策略默认配置](https://github.com/openai/codex/pull/56516) — 防止新建 TUI 会话覆盖服务器端的审批默认配置。
- [#56524 在追踪数据中添加轮次、工具与技能的归属信息](https://github.com/openai/codex/pull/56524) — 提升轮次行为、工具调用与技能目录活动的可观测性。
## 热门讨论
### 想法建议
- [#9200 通过 ChatGPT 应用远程控制 Codex](https://github.com/openai/codex/discussions/9200) — 用户希望获得无头守护进程模式，支持通过移动端/远程方式控制本地或桌面端的 Codex 会话。
- [#14067 跨设备同步 Codex 线程与会话上下文](https://github.com/openai/codex/discussions/14067) — 跨设备的会话连续性仍是用户对工作流的核心期待。
- [#12567 Codex 中的记忆功能](https://github.com/openai/codex/discussions/12567) — 社区正在讨论 Codex 是否应引用历史线程，以及记忆功能应如何呈现。
- [#51263 在 Plus 与 Pro 之间新增 35 美元的开发者档位](https://github.com/openai/codex/discussions/51263) — 用户希望获得中间档位的套餐，包含更高的使用额度与云端容量。
### 问答交流
- [#2251 Codex 使用额度问题](https://github.com/openai/codex/discussions/2251) — Plus 档位用户不确定 ChatGPT 应用的使用限制与 Codex 使用限制的关联关系。
- [#8503 Code Review 仍显示有剩余额度，却提示“已达使用上限”](https://github.com/openai/codex/discussions/8503) — 关于 GitHub Connector 与 Code Review 配额统计的长期混淆点。
- [#24258 Codex 如何选择 Chrome 配置文件？](https://github.com/openai/codex/discussions/24258) — 拥有多个 Chrome 配置文件的用户希望获得可预知的浏览器配置文件选择逻辑。
- [#56069 Codex macOS 版本是否支持 MCP 应用的画中画模式？](https://github.com/openai/codex/discussions/56069) — 插件/MCP UI 开发者希望获得官方支持的画中画行为。
### 作品展示
- [#56731 Agoryx：面向 Codex 与 Claude Code 的本地优先共享对话工具](https://github.com/openai/codex/discussions/56731) — 一款社区开发的 GUI，可在统一工作流中协调 Codex 与 Claude Code。
- [#56181 Agent Relay Check：验证新建 Codex 会话是否能正常获取 AGENTS.md](https://github.com/openai/codex/discussions/56181) — 可重复的前后对比校验工具，用于检测指令路径行为。
- [#56856 MarketMirror：通过 Codex 模拟买家测试](https://github.com/openai/codex/discussions/56856) — 社区开发的插件/MCP 服务器，可在实际投放前模拟营销测试。
## 功能需求趋势
- **远程与移动端控制：** 讨论 #9200 与问题 #34946 均指向无头、可远程控制的 Codex 工作流。
- **跨设备连续性：** 用户希望线程、记忆与会话上下文可在不同机器与设备间保留。
- **使用透明度与定价选项：** 多个讨论与问题呼吁更清晰的额度规则、更高的效率，以及中间档位套餐。
- **可预期的浏览器控制：** 用户希望 Chrome/Edge 配置文件选择、URL 检测、下载与自动化功能稳定可靠。
- **远程主机上的定时自动化：** 对 SSH 连接主机的任务调度与远程执行，是长期存在的能力诉求。
## 开发者痛点
- 当前信号集中，Windows 是稳定性最差的平台：VS Code 扩展启动失败、Computer Use 浏览器控制失效、更新程序循环、沙箱策略不匹配、补丁失败等问题反复出现。
- Computer Use 在核心浏览器自动化场景下目前不可靠：URL 检测、滚动/输入控制、粘贴重复、浏览器配置文件选择是用户最常抱怨的问题。
- 使用额度统计易产生混淆，尤其是用户看到尚有剩余配额却收到“已达上限”错误时。
- 会话连续性体验差：持久化线程、历史会话恢复、跨设备同步、记忆引用等工作流对许多开发者而言仍未完善。
- 用户正在围绕 Codex 构建大量外围工具——终端复用器、共享 GUI、AGENTS.md 校验工具、上下文交接工具、营销/模拟插件——原因是原生工作流仍存在功能缺口。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区简报（2026-10-26）
## 1. 近一周亮点
过去一周，Gemini CLI 保持高频的每日夜间版本更新节奏，重点集中在稳定性修复、用户体验优化与开发者工作流增强上。社区解决了与 subagent 行为、UI 渲染和工具兼容性相关的关键缺陷，同时发布了稳定版 v0.65.0，并预览了 v0.66.0。重点工作还包括优化 IDE 集成、安全性与跨平台支持。
## 2. 版本发布
- **v0.65.0（稳定版）**：
  - 为不受信任的文件夹新增只读工作区强制机制（安全改进）。
  - 修复恢复会话时工具响应轮次重复的问题。
- **v0.66.0-preview.0**：
  - 更新 ROADMAP.md，移除过时的 2025 年相关内容。
  - 更新版本号，为即将推出的功能做准备。
- **Nightly v0.67.0 系列（2026-10-21 至 2026-10-25）**：
  - 将 `gsutil` 的使用迁移至 `gcloud storage`。
  - 在 shell 与 git 环境中保留用户级 `~/.gitconfig`。
  - 通过 stdio 实现 IDE 伴侣与容器沙箱的桥接。
  - 保留扩展 token 使用元数据，并对齐每轮上报。
  - 修复终端 UI 中泰文与老挝文 SARA AM 的显示宽度问题。
  - 取消请求后停止续传流处理。
  - 在视口刷新期间保留终端回滚内容。
## 3. 热门问题
1. **#22323：达到 MAX_TURNS 后 subagent 的恢复状态被上报为 GOAL success**（P1，13 条评论）
   - 达到轮次上限的 subagent 会错误地报告成功，误导用户，对可靠性影响重大。
2. **#21409：Generalist agent 挂起**（P1，8 条评论，👍8）
   - 委派给 generalist agent 时会出现无限期挂起，是用户的主要阻碍。
3. **#19873：通过零依赖操作系统沙箱利用模型的 bash 亲和性**（P2，9 条评论）
   - 社区希望在保持安全性的同时，更好地集成原生 bash 工具。
4. **#22745：评估具备 AST 感知能力的文件读取/搜索/映射的影响**（P2，7 条评论）
   - 史诗级议题，用于跟踪 AST 工具链，以减少 token 用量并改善代码导航。
5. **#21968：Gemini 对 skills 与 sub-agents 的使用不足**（P2，7 条评论）
   - 用户反馈：若不进行显式提示，自定义 skills/subagents 未得到充分利用。
6. **#22267：Browser Agent 忽略 settings.json 中的覆盖配置**（P2，4 条评论）
   - Browser agent 忽略 `maxTurns` 等配置，导致行为不一致。
7. **#21983：Browser subagent 在 Wayland 下运行失败**（P1，4 条评论）
   - Linux Wayland 用户会遇到 browser agent 故障。
8. **#24246：Gemini CLI 在工具数量超过 128 个时遇到 400 错误**（P2，3 条评论）
   - 可用工具过多会导致 API 错误；用户希望实现更智能的工具范围限定。
9. **#23571：模型频繁在随机位置创建临时脚本**（P2，3 条评论）
   - 无规范的临时文件创建方式会杂乱工作区。
10. **#22672：Agent 应停止/抑制破坏性操作**（P2，3 条评论，👍1）
    - 用户要求为 `git reset --force` 等危险命令设置防护机制。
## 4. 关键 PR 进展
1. **#29838：基于当前 IDE 工作区根目录解析相对文件路径**（已关闭）
   - 修复文件工具的路径解析问题，使其使用 IDE/Git 根目录而非初始目录。
2. **#29948：在后台输出读取期间响应取消操作**（进行中）
   - 立即取消后台日志读取，而非等待延迟。
3. **#29946：按父会话与端点隔离远程对话**（进行中）
   - 防止远程 agent 会话 ID 跨会话/端点泄露。
4. **#29947：保留超大后台日志尾部**（进行中）
   - 保留单条行数超过 64KB 日志的部分输出。
5. **#29942：扫描完整计划内容并上报读取失败**（进行中）
   - 接受带有长空白前缀的计划，并正确上报不可读的计划。
6. **#29935：保留被引用文件内容中的空白字符**（进行中）
   - 使用 `@file` 引用时，不再修剪首尾空白字符。
7. **#29931：展开 Windows 下相对于用户主目录的路径**（进行中）
   - 解析 Windows 下的 `~\` 路径，用于策略/扩展配置。
8. **#29932：在模型列表中显示准确的输出上限**（进行中）
   - 为 Gemini 2.5 Pro/Flash 正确显示 65,536 的输出 token 上限。
9. **#29871：在轮次前启动循环恢复时保留未发送的请求**（进行中）
   - 防止循环恢复期间函数响应丢失。
10. **#29912：去除 web_fetch URL 末尾的标点符号**（进行中）
    - 清理从提示中解析出的 URL 中无效的末尾逗号/括号。
## 5. 热门讨论
输入中未提供讨论数据，本节已省略。
## 6. 功能诉求趋势
- **AST 感知工具链**：多个问题（#22745、#22746、#22747）聚焦于通过语法感知工具减少 token 冗余、改善代码导航。
- **subagent 可靠性与可观测性**：要求优化 subagent 错误上报、轨迹共享（#22598）与并行协作（#18287）。
- **安全与防护机制**：社区希望默认设置更安全、支持沙箱（#19873）、防止破坏性操作（#22672）。
- **配置灵活性**：支持按工作区设置策略（#18397）、符号链接 agent（#20079），以及为 browser agent 提供 settings.json 覆盖配置（#22267）。
## 7. 开发者痛点
- **subagent 不稳定性**：挂起（#21409）、错误上报成功（#22323）、Wayland 故障（#21983）降低了用户信任。
- **UI/UX 摩擦**：终端回滚内容丢失、调整大小时闪烁（#21924）、非拉丁字符显示问题。
- **工具范围过载**：400+ 工具导致 400 错误（#24246）；用户希望实现智能的自动范围限定。
- **跨平台不一致**：Windows 路径解析问题、扩展更新时的锁错误、YAML lint 失败。
- **工作区污染**：随机创建临时脚本（#23571）、清理行为不佳。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态摘要
**日期：2026-10-26** | **代码仓库：`github/copilot-cli`**

---

## 1. 近 7 天要闻回顾
过去 7 天内，GitHub 发布了一系列快速补丁更新（v1.0.101 至 v1.0.104-3），核心优化方向为自动驾驶会话可靠性、权限系统易用性，以及 ACP 会话兼容性。社区当前最集中的问题包括：会话锁、企业策略刷新错误的新增回归缺陷，以及全新推出的"辅助权限"功能带来的配额消耗异常。本周仅有 1 个合并的 PR，核心优化面向私有仓库用户的安装可靠性。

---

## 2. 版本发布动态
### 最新稳定版：v1.0.103（2026-10-22）
核心稳定更新：
- 完成响应的代码块支持一键复制原始代码
- ACP 会话现在会保留已保存的沙箱设置，以及 `--sandbox`/`--no-sandbox` 标志（包括会话恢复场景）
- CLI 在掉线重连后，会保留云端返回的完整回复文本

### 预发布通道（v1.0.104-0 至 v1.0.104-3）
| 版本 | 核心变更 |
|--------|-------------|
| v1.0.104-0 | *优化*：无需开启实验模式即可使用辅助权限<br>*修复*：当已保存的自动模式偏好不可用时，自动模式会回退到默认偏好，而非每轮交互都报错 |
| v1.0.104-2 | *修复*：托管模型"fusion"现在会以自动模式启动会话，并应用 `fusionTier` 设置<br>交互/SDK 自动驾驶会话现在会等待挂载的后台任务完成（不再在 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 后停止；`-p --autopilot` 仍会遵守该超时设置） |
| v1.0.104-3 | 小幅 bug 修复与稳定性优化 |

### 更早的预发布更新（v1.0.101 至 v1.0.102-1）
- v1.0.102-0：沙箱网络流量在继承主机代理设置时，现在会遵守 `NO_PROXY`/`ALL_PROXY`；修复了插件市场对 git 子目录源和超长插件描述的支持；解决了 Fish shell 选项别名补全失败的问题
- v1.0.102-1：修复了提示模式在 `-p`/管道标准输入运行时，会遵守托管自动模型选择的问题；子代理现在会遵循自定义/MCP 工具的审批规则，消除重复权限提示
- v1.0.101：在支持的模型上，为动态工作流子代理新增原生结构化输出；新增 `assistedApprovalInstructions` 设置，用于引导辅助权限决策

---

## 3. 热点问题
（按社区影响力排序的 10 个重点问题）：
1. **[#4946](https://github.com/github/copilot-cli/issues/4946) [开放] 后台 Shell 补全通知后出现 HTTP 400 `content[].thinking`**<br>重要性：使用思考模式的会话在后台 Shell 命令完成时会触发崩溃，打断长时间运行的工作流。社区反响：8 条评论、1 个点赞，使用自定义模型提供商的用户正在积极调试。
2. **[#4802](https://github.com/github/copilot-cli/issues/4802) [开放] PRU 配额被清空（疑似与辅助权限功能相关）**<br>重要性：使用传统请求计费方案的专业版用户反馈，在启用全新辅助权限功能后，配额会意外耗尽，威胁新上线工具的可信度。社区反响：6 条评论，直接影响付费订阅用户。
3. **[#4233](https://github.com/github/copilot-cli/issues/4233) [开放] [ACP] 触发 `usage_update` 以实现交互状态栏一致性**<br>重要性：ACP 客户端（例如 Zed）无法显示上下文窗口/额度使用情况，尽管 CLI 已经计算了这些数据，造成跨编辑器用户体验的断层。社区反响：3 条评论、4 个点赞，是 ACP 集成开发者广泛呼吁的功能。
4. **[#5253](https://github.com/github/copilot-cli/issues/5253) [开放] v1.0.103：会话锁持久化超时、任务无响应**<br>重要性：长时间运行的会话会因"会话锁获取超时"错误变得不可用，是最新稳定版中的严重回归缺陷。社区反响：2 条评论，在 v1.0.103 发布后 24 小时内即有用户反馈。
5. **[#5109](https://github.com/github/copilot-cli/issues/5109) [开放] 企业版 copilot-cli 因"托管账户策略"错误无法使用**<br>重要性：企业用户因托管账户策略刷新失败，完全无法使用 CLI，对组织内部部署来说是阻断性问题。社区反响：2 条评论、1 个点赞，是企业管理员的高优先级需求。
6. **[#5203](https://github.com/github/copilot-cli/issues/5203) [开放] 功能需求：独立稳定版发布通道**<br>重要性：快速的周度发布节奏带来了频繁的回归问题，影响日常使用，用户呼吁拆分独立的稳定版/预发布通道以降低干扰。社区反响：2 条评论，获得高级用户的广泛认同。
7. **[#5195](https://github.com/github/copilot-cli/issues/5195) [开放] 自定义代理在首次调用后禁用 MCP 工具延迟加载**<br>重要性：首次模型调用后将所有 MCP 工具加载到上下文中，会浪费上下文窗口空间，降低使用大量 MCP 工具的用户的代理性能。社区反响：1 条评论，由配置了复杂多工具环境的用户反馈。
8. **[#5205](https://github.com/github/copilot-cli/issues/5205) [开放] 上下文窗口滚动切换因缺失 checkpoint.md 失败**<br>重要性：长时间运行的代理会话在上下文耗尽时会完全崩溃，无法支持长时间自主工作流。社区反响：1 条评论，对运行数小时任务的用户至关重要。
9. **[#5236](https://github.com/github/copilot-cli/issues/5236) [开放] Windows 平台：MCP 登录后 Entra 代理令牌缓存始终为空**<br>重要性：使用企业 MCP 服务器的 Windows 用户每次启动新进程都需要重新认证，造成严重的工作流摩擦。社区反响：1 条评论，对 Windows 企业用户影响较大。
10. **[#4977](https://github.com/github/copilot-cli/issues/4977) [开放] 内置 ripgrep 在 16KB 页大小的 ARM64 内核（Asahi Linux）上中止运行**<br>重要性：内置 ripgrep 中静态链接的 jemalloc 在 Asahi Linux 默认的 16KB 页大小下会崩溃，导致 Apple Silicon Linux 用户无法使用文件搜索工具。社区反响：2 条评论，帖子中正在积极讨论临时解决方案。

---

## 4. 核心 PR 进展
近 7 天仅有 1 个 PR 更新：
- **[#1960](https://github.com/github/copilot-cli/pull/1960) [已关闭/已合并] 安装流程：使用 `GITHUB_TOKEN` 发起带身份验证的 GitHub 请求**<br>详情：安装脚本现在会将 `GITHUB_TOKEN` 作为授权请求头传给 curl/wget 下载流程，并将其嵌入 `ls-remote` 对应的 git 远程 URL 中。这一改动避免了 GitHub 速率限制，支持从私有仓库完成安装，对内部托管自定义 CLI 发行版的企业用户来说是关键优化。

---

## 5. 热点讨论
原始材料未提供专门的讨论帖数据，因此本章节省略。

---

## 6. 功能需求趋势
近期问题中呼声最高的功能方向包括：
1. **发布通道拆分**：用户希望区分稳定版和预发布通道，避免快速周度发布节奏带来的回归问题
2. **ACP 功能对齐**：ACP 客户端需要 `usage_update` 事件，以及一致的插件/沙箱行为，以匹配交互式 CLI 的功能
3. **子代理可见性**：新增可折叠的后台代理面板，展示活跃子代理、所用模型、推理等级和任务描述
4. **本地网页 UI**：为 CLI 提供浏览器端界面（类似 `opencode web`），将使用场景从纯终端扩展出来
5. **SessionStart 上下文持久化**：在上下文压缩后保留 `sessionStart` 钩子的附加上下文，避免上下文切换时丢失自定义配置

---

## 7. 开发者痛点
开发者反复提及的高频困扰：
1. **回归问题频发**：快速发布节奏反复打断日常使用，稳定版中也会出现关键的会话和策略类 bug
2. **配额不可预测**：用户反馈辅助权限等新功能会带来意外的 PR 配额消耗，且无法清晰了解触发用量的原因
3. **ACP 集成缺口**：ACP 模式与交互模式功能不对等（无用量提示、会话重命名失效、插件支持缺失）
4. **企业部署失败**：托管账户策略刷新错误导致 CLI 对大量企业用户不可用，且没有明确的解决路径
5. **长会话不稳定**：会话锁、上下文切换失败、后台任务超时，打断长时间自主代理工作流

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区简报
2026-10-26 · github.com/anomalyco/opencode

---

## 过去7天亮点
OpenCode 于本周发布 v1.19.4 版本，将内置的 Bun 运行时升级至 v1.4.4，以修复核心网络与内容处理组件中的关键安全漏洞。社区涌现大量与免费模型配额重置、速率限制相关的反馈，同时性能优化与实验性媒体优化功能的开发正在积极推进。

---

## 版本发布
**v1.19.4**（最新，近7天发布）
- **核心改进**：将内置 Bun 运行时升级至 1.4.4，包含针对 Brotli、TLS、HTTP/1.1/2/3、WebSocket 及 `fetch` 的安全修复，并将根证书更新至 NSS 3.131.1。

---

## 热门议题
> 共50条更新议题，展示前10条。🔒 = 已关闭 · 🟢 = 开启中

1. 🔒 **[opencode 模型无限使用漏洞](https://github.com/anomalyco/opencode/issues/34344)** · 56 条评论
    - 用户发现，可通过轮换 VPN 绕过与 IP 地址绑定的免费模型速率限制，实现免费模型的不间断使用。这引发了社区对免费层级资源滥用、项目成本可持续性的严重担忧。
2. 🟢 **[tui: 打包后的 CLI 支持响应式外部 TSX 插件](https://github.com/anomalyco/opencode/issues/39986)** · 7 条评论
    - 打包后的 Bun CLI 无法可靠地将 OpenTUI 的运行时 Solid 转换应用于外部 TUI 插件 TSX，导致解析错误或本地依赖加载异常。这破坏了终端用户的插件功能，阻碍了 TUI 生态的发展。
3. 🔒 **[免费配额超时后永不恢复，86400秒倒计时循环锯齿](https://github.com/anomalyco/opencode/issues/58831)** · 6 条评论 · 👍 2
    - 用户反馈，免费配额倒计时归零后未解锁，反而重置回 86400 秒（24小时），导致免费额度永久不可用。这是多个配额重置逻辑异常的高优先级反馈之一。
4. 🟢 **[V2: 定义前台与后台 Shell 的重启语义](https://github.com/anomalyco/opencode/issues/36348)** · 6 条评论
    - V2 核心设计缺口：当托管服务器重启时，没有为长时间运行的前台/后台 Shell 进程定义明确行为，导致进程归属中断、任务跟踪失效。这对 Shell 集成工作流的可靠性至关重要。
5. 🔒 **[免费额度限制2天以上未重置（免费 OpenCode 模型提示“已达免费使用上限”）](https://github.com/anomalyco/opencode/issues/58814)** · 6 条评论
    - 免费模型使用限制超过48小时未重置，即使用户未耗尽配额也无法访问免费层级。这进一步加剧了普遍存在的配额重置 Bug 反馈。
6. 🟢 **[“代码模式”指令使 Gemma-4-31B 混淆](https://github.com/anomalyco/opencode/issues/53623)** · 6 条评论 · 👍 2
    - “代码模式”提示词误导 Gemma-4-31B，使其错误地认为所有工具都需要“execute”标志。用户要求改进提示词，并提供更好的调试、修改系统提示词的工具。
7. 🔒 **[委托子代理在“询问”权限下的写入操作被静默拒绝（v1 正常，v2 异常）](https://github.com/anomalyco/opencode/issues/57603)** · 5 条评论
    - V2 回归问题：带有“询问”权限的子代理写入操作在没有用户批准提示的情况下被静默失败，破坏了 v1 中正常工作的委托工作流功能。这削弱了用户对 V2 权限系统的信任。
8. 🟢 **[Windows 11 平台免费使用超限，冷却时间长达 59769 秒](https://github.com/anomalyco/opencode/issues/58933)** · 5 条评论 · 👍 1
    - Windows 11 用户反馈，免费模型访问出现任意约16.5小时的冷却时间，且冷却时长无明确解释。这是跨平台配额执行不一致问题的典型表现之一。
9. 🟢 **[桌面端: 文件树开箱即用不可用 — showFileTree 默认为 false 且无设置界面](https://github.com/anomalyco/opencode/issues/56057)** · 4 条评论
    - 桌面端应用的文件树默认禁用，且没有面向用户的设置来启用它，导致新用户无法使用这一核心功能。这是关键的入门体验缺口。
10. 🔒 **[Opencode 完全故障，必须立即修复。](https://github.com/anomalyco/opencode/issues/58828)** · 4 条评论
    - 用户反馈，即使未使用过 Go 和 Zen 模型，也立即遭遇免费使用限制，需等待24小时。这一紧急反馈反映了用户对配额系统故障的普遍不满。

---

## 关键 PR 进展
> 共50条更新 PR，展示前10条。🟢 = 开启中 · 🔒 = 已关闭

1. 🟢 **[feat(desktop): 通过 ./gui 导出提供 GUI 插件](https://github.com/anomalyco/opencode/pull/55246)**
    - 通过 `./gui-experimental` 导出添加对实验性 GUI 插件的支持，允许插件在现有服务器和 TUI 导出的基础上扩展桌面端应用功能。这拓展了平台的插件生态能力。
2. 🟢 **[fix(mcp): 保留独立的 OAuth 刷新取消机制](https://github.com/anomalyco/opencode/pull/59114)**
    - 修复 MCP 工具的并发 OAuth 刷新竞态条件：并发令牌刷新现在共享单个网络请求，同时允许各调用方独立取消，提升可靠性。
3. 🟢 **[perf(core): 在提示词准入阶段预热模型提供商连接](https://github.com/anomalyco/opencode/pull/58803)**
    - 性能优化：在提示词准入阶段预建立模型提供商连接（而非首个请求时），消除 DNS/TLS 握手延迟，加快初始响应速度。
4. 🟢 **[test(core): 覆盖 MCP 表单引导往返流程](https://github.com/anomalyco/opencode/pull/53199)**
    - 为 MCP 表单引导工作流添加测试覆盖，填补了此前仅测试空表单和 URL 模式的空白。提升了 MCP 集成的可靠性。
5. 🟢 **[fix(app): 移除编辑器模型选择器的模型详情悬浮提示](https://github.com/anomalyco/opencode/pull/59108)**
    - 体验修复：从编辑器的模型选择芯片上移除冗余的模型详情悬浮提示，仅在模型选择器中保留有用的详情。简化核心交互界面。
6. 🟢 **[fix(core): 对无输出的回合先重试再判定失败](https://github.com/anomalyco/opencode/pull/56673)**
    - 修复提供商间歇性问题（如 Gemini 以零输出关闭 SSE 流）：为空响应回合添加重试逻辑后再判定失败，减少面向用户的虚假错误。
7. 🟢 **[feat(server): 添加实验性 GET /api/experimental/media/:hash 接口及可选的 experimental-media-uri 能力](https://github.com/anomalyco/opencode/pull/59103)**
    - 实验性功能：添加可选端点，按哈希提供媒体附件，允许客户端避免为媒体发送内联 base64 数据，减少会话加载时间和负载大小。
8. 🟢 **[fix(core): 修复 GitHub Bot 以支持 v2](https://github.com/anomalyco/opencode/pull/58297)**
    - 将 GitHub 集成（`opencode github install`/`run`）从 v1 移植到 v2，为 V2 用户恢复了关键的工作流集成。
9. 🟢 **[feat(core): 为遗留行添加字节保留的离线 media_blob 回填功能](https://github.com/anomalyco/opencode/pull/58742)**
    - 添加实验性离线脚本，将会话数据库中现有的内联 base64 媒体迁移到新的 blob 存储格式，减少长期用户的数据库体积。
10. 🟢 **[fix(core): 发布 MCP 工具进度通知](https://github.com/anomalyco/opencode/pull/59102)**
    - 修复缺失的 MCP 工具进度通知，为长时间运行的 MCP 工具调用启用实时进度更新（仅核心功能；TUI 显示工作另行处理）。

---

## 功能需求趋势
1. **免费层级透明度与灵活性**：多项需求要求更清晰的免费配额核算（包括闲置时间、额度池范围、剩余额度可见性），并扩展支付方式（如支持通过 USDC 订阅 Go 服务）。
2. **工作流权限改进**：要求在权限系统中自动允许只读工具，减少不必要的批准提示；同时修复子代理的静默权限失败问题。
3. **媒体与性能优化**：用户对实验性媒体 blob 存储系统兴趣浓厚，希望降低图片密集型工作流的会话加载时间和负载大小。
4. **TUI 与桌面端体验优化**：要求提升文件树的可访问性、更顺畅的问题导航、更清晰的模型选择界面。
5. **工作区保护**：要求添加工作区锁定功能，防止 OpenCode 在关键工作流阶段修改文件。

---

## 开发者痛点
1. **免费配额系统故障**：最常见的痛点，广泛反馈包括配额重置失败、任意冷却时间、即使未使用或使用无限模型也出现虚假的“已达使用上限”错误。
2. **V2 回归问题不稳定**：多个 V2 核心功能相比 v1 出现故障，包括子代理权限处理、GitHub 集成支持、Shell 进程生命周期管理。
3. **插件兼容性缺口**：TUI 和 GUI 插件功能不可靠，存在 TSX 转换失败、核心工作流缺乏插件支持的问题。
4. **跨平台行为不一致**：配额执行和功能可用性在 CLI 与桌面端、不同操作系统之间存在差异，导致用户困惑。
5. **静默失败与错误可见性差**：关键错误（如子代理权限拒绝、空的子代理结果）无用户反馈地静默失败，导致调试极其困难。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区周报：2026-10-26

---

## 近 7 天重点动态
Pi v1.4.0 版本已发布，核心新特性为全平台多服务商的分类模型新增图片输入支持。本周社区活动主要围绕服务商集成（包括 Kimi、Vertex AI 上的 Claude、以及多个新增托管推理服务商的模型适配）、上下文管理边界场景、终端与 TUI 兼容问题展开。本周已合并多个高优先级缺陷修复，解决了 Windows 路径处理、模型引用解析、代理配置崩溃等问题。

---

## 版本发布
### v1.4.0
新特性：分类模型支持图片输入 —— `codemode` 的 `models.classify()` 现可在 `typesafe`、`cloudflare-workers-ai`、OpenRouter 三个服务商下，为 TypeSafe 的 Jev、Cloudflare 的 Clef 模型传入图片输入。
[版本说明](https://github.com/earendil-works/pi/releases/tag/v1.4.0)

---

## 热门议题
1.  **[#10956] 自定义/压缩上下文下 cacheWarming 的 "idle" 状态静默停止**（OPEN，10 条评论）
    当扩展在上下文内携带自定义或压缩消息处理 `turn_end` 事件时，缓存预热永远不会触发 idle 预热事件。用户会一次性看到 507+ 条 `cache_warming_decision` 事件，且全部 `continuationProbability: 1`，破坏了长会话的降本缓存优化效果。
2.  **[#10628] 全屏 TUI 内的 OSC 52 复制功能被 tmux 吞掉**（OPEN，10 条评论）
    在 tmux 内运行时，全屏 TUI 的选中复制功能会静默失效：tmux 会消费 OSC 52 转义码，不会将其转发给客户端，导致 SSH 场景下用户无法正常使用复制功能。
3.  **[#10274] 支持 MCP 引导交互**（CLOSED，无需处理，6 条评论）
    该特性请求为支持 MCP 客户端引导交互，允许服务端在工具执行过程中请求额外的用户输入。因超出当前规范兼容的范围，已关闭。
4.  **[#10885] llama.cpp 上下文溢出无法被检测，自动压缩失效**（OPEN，5 条评论）
    Pi 无法识别 llama.cpp 服务端返回的上下文大小超限错误，因此自动压缩永远不会触发，破坏了使用自定义本地模型部署的长会话体验。
5.  **[#11208] 更新 Undici 版本锁定，纳入 8.12.2 安全修复**（CLOSED，无需处理，4 条评论）
    请求将核心依赖 Undici 从 8.10.2 升级到 8.12.3，纳入已发布的安全补丁。
6.  **[#11335] MCP HTTP JSON 响应绕过 maxMessageBytes 限制**（OPEN，4 条评论）
    MCP HTTP JSON 传输层未像 SSE 传输层那样强制执行 `maxMessageBytes` 限制，对不可信的 MCP 服务端存在安全风险。
7.  **[#9534] OpenRouter 对 Claude 模型会丢弃仅包含签名的推理块**（OPEN，4 条评论）
    通过 OpenRouter 使用 Claude 模型时，Pi 会丢弃仅包含签名的推理块，可能破坏受支持模型的推理连续性。
8.  **[#11376] [p0] 会话中途移除 Anthropic 工具导致所有后续请求失败**（OPEN，3 条评论）
    会话中途重载扩展移除工具时，后续所有发往 Claude Opus 5.5 的请求都会报错 `tool_reference_unresolved`，对动态扩展工作流是严重的稳定性问题。
9.  **[#11297] 压缩文件列表无限增长**（OPEN，3 条评论）
    每次压缩循环都会把读取/修改的文件列表追加到摘要中，久而久之会造成上下文膨胀，降低长会话的有效可用上下文空间。
10. **[#11311] MCP OAuth 登录成功后卡在 "Connecting…" 阶段**（OPEN，3 条评论）
    基于浏览器的身份验证完成后，MCP OAuth 流程会卡顿 2-3 分钟，且无法取消卡住的连接。

---

## 核心 PR 进展
1.  **[#11411] [CLOSED] fix(tui): keep iTerm2 inline images in fullscreen**
    修复了全屏 TUI 模式下的内联图片渲染问题，此前使用 iTerm2 图片协议时，图片会退化为文本占位块展示。
2.  **[#11399] [CLOSED] fix: normalize path separators in check-entry-graphs on Windows**
    通过在入口图检查脚本中标准化路径分隔符，解决了 Windows 上的跨平台测试失败问题，修复了允许/禁止模式的匹配逻辑。
3.  **[#11397] [CLOSED] fix(coding-agent): resolve provider/id references when the provider id contains a slash**
    修复了服务商 ID 包含斜杠（例如 pi-llama-cpp 扩展生成的基于 URL 的 ID）时的 `--model` 引用解析问题，此前这类场景会返回 "model not found" 错误。
4.  **[#11396] [CLOSED] fix(coding-agent): pass real path as npm prefix when agent dir is a symlink**
    修复了 Pi 代理目录为符号链接时的 npm 安装/卸载行为，避免生成指向符号链接路径的错误锁文件条目。
5.  **[#11395] [CLOSED] fix: unset all supported provider env vars in pi-test.sh --no-env**
    更新测试脚本，在 `--no-env` 模式运行时移除所有当前服务商的 API 密钥环境变量，修复测试隔离问题。
6.  **[#11330] [CLOSED] fix(coding-agent): preserve split UTF-8 output in pi.exec**
    修复了 `pi.exec()` 中多字节 UTF-8 输出乱码的问题（例如中文字符），此前当字符的字节序列跨 stdout/stderr 数据块时会出现乱码。
7.  **[#11355] [CLOSED] fix(ai): support Kimi Coding K3.1 Pro models**
    通过动态 effort 元数据解析新增对 Kimi K3.1 Pro 模型的支持，包含推理强度控制和正确的内容保留逻辑。
8.  **[#11370] [OPEN] feat(ai,coding-agent): add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers**
    为 Pi 内置模型目录新增 6 个托管推理服务商，为开发者提供更多可用模型选项。
9.  **[#11371] [OPEN] feat(ai,coding-agent): serve Claude models on Google Vertex AI**
    新增对 Google Vertex AI 的 Anthropic Messages API 端点上托管的 13 个 Claude 模型的支持。
10. **[#11341] [CLOSED] fix(coding-agent): exit with a clear error for unusable proxy URLs**
    当代理配置值无效时，用友好的用户错误提示替换难以理解的 undici 堆栈追踪信息。

---

## 热门讨论
### 问答板块
1.  **[#11404] 官方 Pi 代码代理 Docker 沙箱镜像？**
    社区提问：Docker Hub 上托管的四个 Docker 沙箱 Pi 镜像是否是 Pi 团队的官方构建版本。
### 作品展示板块
2.  **[#11306] pi-continuity：编码计划用量达限后自动恢复会话**
    社区扩展，命中编码计划用量限制时自动恢复被中断的 Pi 会话，无需手动输入"继续"指令。
3.  **[#11307] pi-better-web-search：跨服务商网页搜索回退**
    社区网页搜索扩展，返回原始服务商结果，当当前激活模型无法使用搜索功能时，自动在已登录的搜索服务商之间切换回退。
4.  **[#11214] 在 Atomic Bot 上运行 Pi：7*24 小时云端 Pi 实例**
    Atomic Bot 平台公告，提供一键部署、持久化的云端托管 Pi 实例，独立于本地笔记本运行。
5.  **[#11196] pi-tidy：将工具调用折叠为单行**
    社区扩展，将多步工具调用的输出折叠为可展开的单行，减少长会话中的滚动操作成本。
6.  **[#11192] Pi Market Terminal：面向金融场景的第二屏工作区**
    面向金融从业者的独立社区扩展，在 Pi 内新增专用的行情工作区界面。
7.  **[#11160] Weasley Subagents：并行评审与后台任务委派**
    Apache 许可证的扩展，用于协调多个子 Pi 代理，支持并行评审、顺序任务链、后台工作委派，并提供终端代理队列视图。
### 通用板块
8.  **[#2483] awto-pi-lot：PPQ.ai 服务商扩展**
    社区扩展，新增 PPQ.ai AutoClaw 按量付费服务商，支持免账号模式和无限循环上限功能。
9.  **[#10126] 为保障供应链安全，将 GitHub 版本发布设为不可变？**
    社区提议将 Pi 的 GitHub 发布版本设为不可变以提升供应链安全，参考了其他开源项目的同类实现。
10. **[#11356] 反馈：1.0 前后的上下文膨胀问题**
    用户反馈 1.0 之后的 Pi 版本初始提示占用的上下文更多，简单请求也会更快触达上下文上限。

---

## 特性需求趋势
本周最高频的需求方向为：
1.  扩展服务商与模型支持，包括更多托管推理平台、对区域模型服务商的一等公民支持。
2.  改进上下文管理能力，减少压缩摘要、长会话状态带来的上下文膨胀。
3.  为 MCP stdio 服务端提供细粒度的环境隔离，避免宿主机进程环境变量泄露给子工具。
4.  更好的终端/TUI 兼容能力，包括可配置的复制目标缓冲区、跨终端模拟器改进的内联图片支持。

---

## 开发者痛点
近期开发者反馈最集中的问题包括：
1.  上下文管理边界场景破坏长会话体验：缓存预热失效、自定义服务端上下文溢出无法检测、压缩摘要无限增长。
2.  服务商与扩展集成缺陷：会话中途移除工具破坏 Anthropic API 调用、MCP 服务端 OAuth 连接挂起、自定义 OpenAI 兼容端点的模型检测错误。
3.  跨平台与终端兼容问题：Windows 上路径处理失败、tmux 内复制功能失效、多字节字符分块输出导致乱码。
4.  MCP 集成的可靠性缺口：消息大小限制未强制执行、面向需要额外用户输入的 MCP 服务端缺少引导交互支持。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 每周技术动态 2026-10-26

## 1. 过去 7 天重点动态
Qwen Code 社区在过去一周发布了 v0.26.x 稳定版本系列及多个 nightly 构建版本，带来了核心安全加固、守护进程（daemon）能力增强以及跨平台运行时改进。社区的关注点仍主要集中在 CI/CD 稳定性、Kubernetes 运行时交付，以及修复 Anthropic Claude 等主流第三方模型提供商的兼容性缺口。

## 2. 版本发布
### 核心 CLI 与桌面端
- **v0.26.1**：稳定版本，包含一项破坏性变更，用于在 thread 作用域下恢复按会话组隔离的能力（[#13882](https://github.com/QwenLM/qwen-code/pull/13882)），同时对 serve 令牌进行了安全加固。
- **v0.26.1-nightly.20261025.8e28d5380c**：nightly 构建版本，新增会话权限规则，并为托管环境添加自动审批功能。
- **desktop-v0.26.1**：桌面客户端版本，内置了 PR [#15023](https://github.com/QwenLM/qwen-code/pull/15023) 中的守护进程令牌持久化功能。
- **v0.26.0**：核心功能版本，为守护进程环境新增了针对会话的 Skill 和 Extension 刷新能力。
- **sdk-typescript-v0.1.22**：TypeScript SDK 版本，与 CLI v0.26.0 基于同一源码分支构建并打包发布。

## 3. 热门 Issue
1. [#14724](https://github.com/QwenLM/qwen-code/issues/14724) [Open，38 条评论]：主 CI 托管代理门禁失败，且未定位到具体测试用例。该问题阻塞了核心托管代理相关变更的合并，表明候选版本的 CI 基础设施不稳定。
2. [#13395](https://github.com/QwenLM/qwen-code/issues/13395) [Open，24 条评论]：Kubernetes 工具运行时进展跟踪。S1 验收工作已接近完成，标志着 Qwen Code 向企业级容器化部署的推进。
3. [#15173](https://github.com/QwenLM/qwen-code/issues/15173) [Open，16 条评论]：Linux Docker 沙箱上的上下文压缩交互流程 E2E 测试失败。凸显了核心交互式会话功能的端到端测试不稳定问题。
4. [#15498](https://github.com/QwenLM/qwen-code/issues/15498) [Open，11 条评论]：CLI v0.26.1 发布后，SDK 0.1.23 的发布因集成超时被阻塞。暴露了多语言 SDK 分发的发布流水线瓶颈。
5. [#8432](https://github.com/QwenLM/qwen-code/issues/8432) [Open，6 条评论]：阿里云百炼个人套餐模型列表不同步，导致图像/视频生成功能异常。这是阿里云模型套餐订阅用户长期存在的痛点。
6. [#15545](https://github.com/QwenLM/qwen-code/issues/15545) [Open，5 条评论]：功能请求：希望在阈值触发时进行交接续跑，而非静默自动压缩。解决长时自主代理运行中的上下文质量衰减问题。
7. [#15552](https://github.com/QwenLM/qwen-code/issues/15552) [Open，5 条评论]：缺陷：保留的目录快照会覆盖 UserPromptSubmit 去重凭证。破坏了近期内存系统更新中引入的 hook 上下文去重逻辑。
8. [#15486](https://github.com/QwenLM/qwen-code/issues/15486) [Open，3 条评论，P1]：自动压缩后，令牌大小估算对待处理工具结果重复计数。导致上下文密集型工作流出现轮次失败或输出截断。
9. [#15542](https://github.com/QwenLM/qwen-code/issues/15542) [Open，3 条评论，P1]：在 Claude Sonnet 5.5/Opus 5.5 上，Anthropic 提供商的 JSON 辅助查询返回 400 错误。阻塞了使用最新 Claude 模型团队的核心功能。
10. [#15567](https://github.com/QwenLM/qwen-code/issues/15567) [Open，4 条评论]：MCP 启动失败时，诊断信息中缺少子进程 stderr。导致开发者几乎无法排查 MCP 服务器集成问题。

## 4. 核心 PR 进展
1. [#15296](https://github.com/QwenLM/qwen-code/pull/15296)：支持 Web Shell 嵌入自定义工作区目录选择器。使第三方应用能够将 Qwen Code Web Shell 与自有文件系统选择器集成。
2. [#15586](https://github.com/QwenLM/qwen-code/pull/15586)：托管代理工作区文件上传功能。允许 WebShell 用户将文件直接上传到本地/SSH 工作区，单文件最大 8 MiB。
3. [#15578](https://github.com/QwenLM/qwen-code/pull/15578)：无人值守自动修复 PR 监控功能，在后台运行修复代理。使自动化修复在后台运行时，交互式会话仍可正常使用。
4. [#13969](https://github.com/QwenLM/qwen-code/pull/13969)：为本地会话 Hook 添加 FileChanged 通知。为自动化工作流提供本地文件系统触发事件。
5. [#15558](https://github.com/QwenLM/qwen-code/pull/15558)：修复不支持的强制 Anthropic 工具选择问题。通过切换到自动工具选择模式，解决了最新 Claude 模型上的 400 错误问题。
6. [#11708](https://github.com/QwenLM/qwen-code/pull/11708)：加固 MCP 池化连接生命周期与销毁顺序。提升了长时间运行的 MCP 服务器连接的稳定性。
7. [#15284](https://github.com/QwenLM/qwen-code/pull/15284)：将 SDK Java 测试任务锁的作用域仅限定于缓存回写。通过移除长期持有的主机锁，减少了 Java SDK 测试运行的 CI 资源竞争。
8. [#15030](https://github.com/QwenLM/qwen-code/pull/15030)：提高工作区 Skill 安装限制。拆分了 Skill zip、GitHub、本地文件夹安装的传输大小与磁盘大小限制。
9. [#15345](https://github.com/QwenLM/qwen-code/pull/15345)：Web Shell 支持纯文本与 Markdown 回复复制。为 Web 界面中的助手回复新增两种独立的复制格式。
10. [#11486](https://github.com/QwenLM/qwen-code/pull/11486)：CLI 支持无需 npm 检索的精确版本更新。使气隙环境或自定义 registry 部署能够锁定特定的更新版本。

## 5. 功能需求趋势
- **上下文管理改进**：用户希望上下文压缩更透明，提供交接报告而非静默摘要，尤其是在长时自主代理运行场景中。
- **更强的诊断能力**：请求改进 MCP 集成、提供商重试和 CI 失败的错误日志，以减少调试时间。
- **托管代理能力**：对生产部署所需的企业级功能（如文件上传、日志持久化、Kubernetes 运行时支持）的需求持续增长。
- **集成灵活性**：请求支持自定义工作区选择器、FileChanged Hook 和外部上下文配置文件，以便将 Qwen Code 嵌入现有开发者工作流。

## 6. 开发者痛点
- **CI/CD 不稳定**：频繁出现测试不稳定失败、SDK 发布因超时被阻塞、基础设施瓶颈等问题，严重拖慢了发布流水线。
- **提供商兼容性缺口**：最新 Anthropic Claude 模型的核心功能出现异常，以及阿里云百炼套餐模型列表不同步问题。
- **MCP 调试困难**：MCP 服务器启动失败时缺少错误诊断信息，导致集成排查效率极低。
- **令牌估算不准确**：上下文压缩后，待处理工具结果重复计数，导致意外的轮次失败或输出截断。

---

规则：
- 仅输出翻译内容。前言、解释或整体使用 markdown 代码块包裹均无需提供。
- 严格保留 Markdown 结构：标题、表格（包括列对齐行）、列表、引用、粗体/斜体、水平分隔线、emoji。
- URL、链接目标、代码片段、代码块、数字和日期保持原样。
- 项目名、仓库标识、用户名、版本标签、文件路径和 API/配置标识符保留原有形式——不要翻译。
- Issue/PR 引用（如 #12345）及其链接文本保持原样。
- 使用自然的技术中文，符合国内开发者 newsletter 的表达风格——避免逐字直译。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*