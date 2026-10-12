# AI CLI 工具社区周报 2026-10-12

> 生成时间: 2026-10-12 02:13 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态跨工具对比报告
*数据截至 2026-10-12 | 社区摘要周期：过去 7 天*

---

## 1. 生态概览
AI 开发者 CLI 生态正步入成熟期：核心编码辅助能力已成为入门标配，竞争焦点转向代理可靠性、平台一致性、企业级安全加固与生态可扩展性。本周 7 款主流工具的维护工作均以安全补丁（路径遍历、凭证泄露、权限绕过）和代理执行稳定性（卡顿、假成功状态、上下文压缩边界问题）为主；功能路线图则共同向多代理协作、MCP（模型上下文协议）管理、长会话成本优化方向收敛。开源及社区驱动工具（Pi、OpenCode、Qwen Code）通过优先支持多模型厂商切换与自定义扩展，正快速缩小与现有商业工具（Claude Code、OpenAI Codex、GitHub Copilot CLI）的能力差距。平台专属 Bug（尤其 Windows 和 Linux 桌面端）仍是普遍痛点，尚无工具在沙箱、终端交互界面（TUI）、系统集成功能上实现完全的跨平台一致体验。

---

## 2. 活跃度对比
| 工具 | 新增未解决问题（近 7 天） | PR 活跃度（近 7 天） | 讨论区活跃度 | 发布状态（近 7 天） |
|------|---------------------------|----------------------|--------------|---------------------|
| Claude Code | 10 个跟进热点问题（开放/关闭混合） | 10 个跟进 PR（6 个关闭，4 个开放） | 无（未提供讨论数据） | 7 次补丁发布（v2.1.290–v2.1.296） |
| OpenAI Codex | 10 个跟进热点问题（6 个开放，4 个关闭） | 10 个已合并 PR | 10 条活跃讨论（4 条功能建议，3 条问答，3 条成果展示） | 2 次稳定版发布（v0.162.0、v0.162.1） + 4 个 alpha 构建版 |
| Gemini CLI | 10 个跟进热点问题（8 个开放，2 个关闭） | 10 个已合并 PR | 无（未提供讨论数据） | 1 次稳定版（v0.63.0） + 1 次预览版（v0.64.0-preview.1） + 4 个 nightly 构建版 |
| GitHub Copilot CLI | 10 个跟进热点问题（7 个开放，3 个关闭） | 3 个开放 PR（2 个非实质性更新） | 无（未提供讨论数据） | 8 次补丁发布（v1.0.94–v1.0.96-2） |
| OpenCode | 10 个跟进热点问题（4 个开放，6 个关闭） | 10 个 PR（9 个开放，1 个关闭） | 无（未提供讨论数据） | 2 次次版本发布（v1.18.35、v1.19.0） |
| Pi | 10 个跟进热点问题（8 个开放，2 个关闭） | 10 个 PR（7 个关闭，3 个开放） | 9 条活跃讨论（4 条问答，1 条功能建议，4 条成果展示） | 3 次发布（v1.0.3、v1.0.4、v1.1.0） |
| Qwen Code | 10 个跟进热点问题（7 个开放，3 个关闭） | 10 个 PR（全部已合并/活跃） | 无（未提供讨论数据） | 1 次稳定版（v0.25.1） + 6 个预览/nightly 构建版 |

*注：讨论区标注“无”仅表示本周摘要未提供对应讨论数据，不代表无社区活动。*

---

## 3. 共性功能方向
3 款及以上工具社区均出现的需求：
1. **长会话上下文与成本优化**
   - *涉及工具：Claude Code、OpenAI Codex、Pi、OpenCode*
   - 需求点：空闲自动压缩避免缓存失效、可独立于主会话配置的压缩模型/思考深度、基于任务复杂度的智能模型路由以避免过度使用高阶模型。
2. **MCP 生态成熟度建设**
   - *涉及工具：Claude Code、OpenAI Codex、GitHub Copilot CLI、OpenCode、Qwen Code*
   - 需求点：图形化 MCP 服务器配置与测试、持久化第三方 MCP 身份认证、基于 glob 规则的工具过滤、协议合规性修复以实现标准化的服务器互操作。
3. **跨平台可靠性与体验一致性**
   - *涉及工具：全部 7 款工具*
   - 需求点：Windows 沙箱/剪贴板/网络问题修复、Linux 桌面端打包（deb/rpm/Flathub）、在各类终端模拟器与多终端工具（Zellij、tmux、Windows Terminal）中保持一致的 TUI 行为。
4. **代理执行可观测性与控制力**
   - *涉及工具：Gemini CLI、Qwen Code、Claude Code、Pi*
   - 需求点：子代理执行轨迹可视化、可配置的子代理限制（最大轮次、执行强度）、子代理工具的细粒度权限控制、子代理与主代理间透明的错误传递机制。
5. **企业级安全加固**
   - *涉及工具：Claude Code、Gemini CLI、GitHub Copilot CLI、OpenCode*
   - 需求点：路径遍历防护、凭证泄露防护、跨子目录的工作区策略强制执行、默认阻断的钩子行为、HIPAA/合规配置模板。

---

## 4. 差异化分析
| 工具 | 核心侧重点 | 目标用户 | 技术路线 |
|------|------------|----------|----------|
| **Claude Code** | 企业治理、基于钩子的安全机制、桌面 CLI 集成 | 企业团队、Anthropic 生态的高级用户 | 与 Claude Desktop 及 Anthropic 网关策略系统深度集成；优先保障安全防护与托管策略落地，而非原生可扩展性 |
| **OpenAI Codex** | TUI 用户体验、Git/worktree 集成、跨设备同步 | 普通开发者、OpenAI 生态订阅用户 | 基于 Rust 开发的 CLI，重度投入全屏 TUI 体验打磨；与 OpenAI Dot 代理及 GitHub 代码审查工作流深度集成 |
| **Gemini CLI** | 代理式代码库智能分析、感知 AST 的代码导航、安全加固 | Google Cloud/Gemini 企业用户、大型代码库团队 | 基于 Node.js 运行时，聚焦代码库理解工具（AST、结构化读取）及 Google Cloud 身份/策略集成 |
| **GitHub Copilot CLI** | 沙箱安全、身份认证集成、企业策略合规 | GitHub 企业用户、微软生态企业 | 绑定 SEA 的 Node 运行时；与 GitHub 及 Microsoft Entra 深度集成；功能发布保守，聚焦沙箱安全性 |
| **OpenCode** | 多模型厂商灵活性、易用性、社区驱动功能 | 开源爱好者、多模型高级用户 | 开源核心，支持广泛的模型厂商（OpenAI、xAI、Copilot）；优先修复社区反馈的 Bug 并保障易用性一致性 |
| **Pi** | 可扩展性、多模型厂商支持、原生打包 | 技术爱好者、自托管用户、扩展开发者 | 基于 Bun/TypeScript 运行时，提供强大的扩展 API；支持 10+ 模型厂商，聚焦终端标准合规（OSC 7501、Kitty 图形协议） |
| **Qwen Code** | 托管式代理架构、多代理协作、网页端 Shell 体验 | 中国市场开发者、自托管企业团队 | 基于 Go 的后端，配套托管式代理团队基础设施；重度投入多代理编排与网页端 Shell 界面 |

---

## 5. 社区动能与成熟度
### 最高活跃度与成熟度
- **Claude Code**：问题互动度最高（最热问题获 58 个赞、30 条评论）；7 天发布节奏快，持续推出安全与功能补丁；企业用户基数最大。社区 PR 贡献度低（摘要数据显示 PR 均为内部提交）。
- **OpenAI Codex**：问题、PR、讨论区活跃度均衡；社区成果展示贡献活跃（自定义技能、钩子、代码检查工具）；发布周期稳定，设有 alpha 渠道用于迭代测试。
- **Pi**：社区生态增长最快；扩展与第三方工具生态繁荣（P2P 代理消息传递、macOS UI、GitHub Actions 运行器）；发布节奏快，同时推出补丁与次要功能更新。

### 快速迭代（较早期阶段）
- **Qwen Code**：托管式代理路线推进激进，每周均有架构相关 PR；核心开发团队活跃，但社区参与度低于头部工具；在网页端 Shell 与多代理功能上领先于其他工具。
- **OpenCode**：社区 PR 贡献强劲（每次发布有 3 名以上外部贡献者）；能快速修复用户反馈的高影响 Bug；功能集持续增长，但用户基数小于商业工具。

### 较低活跃度 / 保守迭代
- **GitHub Copilot CLI**：社区 PR 极少（本周期仅 3 个，其中 2 个为非实质性更新）；发布频率高，但以增量补丁与安全加固为主；公开路线图透明度低，符合 GitHub 企业产品的典型特征。
- **Gemini CLI**：内部开发稳定，但社区参与度低；优先聚焦安全与核心稳定性，而非用户可见功能；与 Google 偏慢的企业发布节奏保持一致。

---

## 6. 趋势信号
1. **代理可靠性成为新的竞争战场**
   所有工具的首要用户痛点已从功能缺失转向代理行为异常：卡顿、假成功状态、子代理配置错误、上下文压缩边界问题。对工具开发者而言，未来 6–12 个月内，投入代理可观测性、确定性执行限制、故障透明化将比新增功能更能提升用户信任。
2. **MCP 正成为标准可扩展层**
   本周期 7 款工具中有 6 款正在推进 MCP 相关工作，覆盖配置、认证、工具过滤等方向。AI 工具开发者应优先保障 MCP 合规性以实现跨平台兼容；MCP 服务器开发者则应针对多类 CLI 运行时进行测试，避免集成摩擦。
3. **成本优化成为企业采购核心标准**
   从开源到企业级的所有工具层级，均出现对智能模型路由、空闲压缩、单次运行预算上限的需求。对工具厂商而言，内置成本防护（而非仅提供用量看板）将成为企业采购的必备功能。
4. **网页端与多设备访问是新兴需求缺口**
   OpenAI Codex（iOS 远程访问）、Qwen Code（网页端 Shell）、Pi（macOS UI）均在投入非 CLI 界面开发，而 Claude Code、Copilot CLI 等头部工具仍以桌面/CLI 为核心。随着用户预期变化，构建代理工作流的开发者应规划多终端访问能力（CLI、网页、移动端）。
5. **安全加固正向左移动至运行时阶段**
   仅本周内，各工具就发布了 10+ 个安全补丁，覆盖路径遍历、凭证泄露、钩子绕过、命令注入等问题。随着代理对用户系统的访问权限不断提升，运行时安全（默认阻断策略、沙箱隔离、最小权限工具访问）已不再是加分项，而是生产环境使用的基础要求。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告
*数据来源：[anthropics/skills](https://github.com/anthropics/skills)，统计截止至 2026-10-12*

---

## 1. 热门技能排名
由于所有 PR 的明确评论数均标记为未定义，本次排名基于社区参与度综合评定（参考评论活跃度、更新时效性和功能影响力）。以下列出的 PR 均为**开放状态**：

1. **[PR #1742: MCP Builder v2 Compatibility Fix](https://github.com/anthropics/skills/pull/1742)**
   - 功能：修复 MCP Builder 技能在 `mcp>=2.0.0` 版本中的不兼容变更，包括重命名后的 `streamable_http_client` 导入问题，以及通过 `create_mcp_http_client` 更新的自定义 HTTP 头配置逻辑。
   - 讨论亮点：解决了被广泛反馈的兼容性问题（#1668）——该问题导致使用最新 MCP SDK 的用户无法正常完成 MCP 服务器连接流程。
   - 状态：开放，最后更新于 2026-10-08（处于活跃维护中）。

2. **[PR #1298: Skill-Creator Trigger Eval Hardening](https://github.com/anthropics/skills/pull/1298)**
   - 功能：修复技能创建器的触发器误判漏判问题：解决 Windows 环境下子进程 `select()` 调用失败、单 worker 命令探测竞态条件，以及运行时故障分类错误的问题。
   - 讨论亮点：关联多个关于 Windows 端触发器评估失效、技能评分不准确的开放 issue；属于长期迭代优化的 PR，已经过多轮修复。
   - 状态：开放，最后更新于 2026-09-16。

3. **[PR #1771: ProofCore Contract Auditor Skill](https://github.com/anthropics/skills/pull/1771)**
   - 功能：面向 Web3 领域的智能体技能，支持对 Solidity/Rust 智能合约进行自动化静态分析，通过零存储默克尔协议将加密审计凭证锚定在 TON 区块链上。
   - 讨论亮点：这是官方仓库收到的首个区块链专属存证类技能，属于小众但需求旺盛的 Web3 开发者场景。
   - 状态：开放，最后更新于 2026-09-16。

4. **[PR #1245: Notion Spec to Implementation + Quantitative Resume Auditor](https://github.com/anthropics/skills/pull/1245)**
   - 功能：双技能提交：(1) 将产品/技术规格文档转换为可落地的 Notion 任务，附带实现方案和验收标准；(2) 对照职位描述对简历进行量化评分审计。
   - 讨论亮点：是现存最久的活跃功能 PR 之一，覆盖生产力工具和职场工具两大场景。
   - 状态：开放，最后更新于 2026-09-30。

5. **[PR #1961: Skill-Creator Eval Viewer Security Hardening](https://github.com/anthropics/skills/pull/1961)**
   - 功能：修复 `skill-creator` 评估查看器的安全漏洞，包括本地反馈服务器和 HTML 渲染器中的脚本逃逸、DNS 重绑定、跨站 POST 和内容转义漏洞。
   - 讨论亮点：契合社区对不可信技能/评估内容的核心安全关切；自 2026 年 10 月初提交以来更新迭代速度很快。
   - 状态：开放，最后更新于 2026-10-11（是热门 PR 中最近更新的）。

6. **[PR #822: AWT (AI Watch Tester) E2E Testing Skill](https://github.com/anthropics/skills/pull/822)**
   - 功能：零代码端到端测试技能，为 Claude 赋予视觉能力和浏览器控制权限，可自动生成并运行 UI 测试。
   - 讨论亮点：是最受欢迎的测试自动化技能提交之一，响应了社区对 AI 原生测试工具的持续需求。
   - 状态：开放，最后更新于 2026-09-19。

---

## 2. 社区需求趋势
从评论量最高的 issue 中提炼出，最受关注的技能和生态发展方向如下：
1. **安全与信任边界工具**：讨论量最高的 issue（[#492, 44 条评论](https://github.com/anthropics/skills/issues/492)）体现了社区对以下能力的需求：技能来源校验、第三方技能权限审计，以及防范 Anthropic 官方技能仿冒。
2. **企业协作功能**：[Issue #228（16 条评论，8 个👍）](https://github.com/anthropics/skills/issues/228)显示，社区对组织级技能共享能力需求强烈，包括团队共享技能库、直接分享链接，以替代手动文件传输的工作流。
3. **技能开发与评估可靠性**：多个热门 issue（[#556](https://github.com/anthropics/skills/issues/556)、[#1352](https://github.com/anthropics/skills/issues/1352)、[#1383](https://github.com/anthropics/skills/issues/1383)）呼吁修复失效的技能评估流水线（零触发率、Windows 不兼容、并行 worker 竞态条件），并优化技能创建工具。
4. **治理与质量管控技能**：[agent-governance（#412）](https://github.com/anthropics/skills/issues/412)、[Reasoning Quality Gate Pipeline（#1385）](https://github.com/anthropics/skills/issues/1385)等 proposed 技能反映了社区需求：为智能体工作流提供输出安全管控、审计溯源和多步质量校验能力。
5. **上下文效率工具**：[#1487（claude-api 上下文膨胀）](https://github.com/anthropics/skills/issues/1487)、proposed [compact-memory 技能（#1329）](https://github.com/anthropics/skills/issues/1329)等 issue 体现了对 Token 用量优化、长会话智能体内存优化类技能的需求。

---

## 3. 高潜力待合入技能
基于维护活跃度和与生态核心优先级的匹配度，以下活跃且近期更新的 PR 有望很快合入：
1. **[PR #1730: Claude-Api Dead URL Fix](https://github.com/anthropics/skills/pull/1730)** - 低风险文档修复，解决 academy 和工具使用指南中的 404 链接问题，已完成全面验证，自 2026 年 9 月起保持开放。
2. **[PR #1792: DOCX LibreOffice Timeout Error Handling](https://github.com/anthropics/skills/pull/1792)** - DOCX 技能的 bug 修复，将 `soffice` 超时正确识别为错误上报，并验证输出修订标记的移除逻辑；功能范围明确，测试充分。
3. **[PR #1980: Webapp-Testing Shell Injection Fix](https://github.com/anthropics/skills/issues/1980)** - 安全补丁，移除子进程调用中的 `shell=True` 参数，修复 CWE-78 命令注入风险；属于高优先级安全修复。
4. **[PR #1681: Skill-Creator Direct Script Execution Support](https://github.com/anthropics/skills/pull/1681)** - 修复独立运行 `package_skill.py` 时的 `ModuleNotFoundError` 问题，并更新文档路径；契合技能创建器可靠性优化的优先级方向。
5. **[PR #1703: md2video-audio Skill](https://github.com/anthropics/skills/pull/1703)** - 零成本 Markdown 转视频技能，支持拟人化语音播报；填补了内容创作场景的空白，且外部依赖风险极低。

---

## 4. 技能生态洞察
社区需求最集中的方向是**完善技能平台本身的可靠性、安全性和协作基础设施**——包括强化技能创建/评估工具、建立第三方技能信任边界、提供企业级共享功能；同时，智能合约审计、端到端测试等垂直领域的小众高价值技能也有较高需求。

---

# Claude Code 社区周报 | 2026-10-12

---

## 1. 近7天亮点
本周Claude Code发布了7个补丁版本（v2.1.290–v2.1.296），将Claude Haiku 5.5设为默认Haiku模型，增强了Claude Desktop的网关策略控制，收紧了钩子失败的处理逻辑，并修复了会话数据丢失、钩子执行失效等关键问题。社区也围绕标准技能目录支持、空闲会话成本优化、安全过滤器误拦截合法开发工作等话题展开了热烈讨论。

---

## 2. 版本发布
过去7天共发布7个新版本，核心变更如下：
- **v2.1.296**：在Claude应用网关的`managed.policies[]`中新增`code`键（与`cli`设置对应，配合`desktop`键可启用Claude Desktop网关模式）；为子代理前置配置（frontmatter）和`--agents`定义添加了`autoCompactWindow`支持。
- **v2.1.295**：为命令/HTTP钩子新增`onFailure: "block"`选项（失败的钩子会阻断关联操作，而非放行）；为兼容终端添加了程序状态协议（OSC 7501）支持，可显示Claude Code运行状态。
- **v2.1.294**：修复了指令式`prompt`和`agent`钩子（例如“阻止……类命令”）本该拦截却放行了操作的bug；优化了基于指令的`prompt`钩子对Stop/SubagentStop事件的判断逻辑，减少异常行为。
- **v2.1.293**：推出Claude Haiku 5.5（`claude-haiku-5-5`）作为默认Haiku模型（1M上下文窗口，每1M token输入$0.10、输出$0.50；超过100K token的提示词输入$0.50、输出$2.50）；在`subagentStatusLine` payload中新增`agentType`字段，用于自定义子代理类型识别。
- **v2.1.292**：为`claude plugin install`添加`--marketplace <source>`参数（安装前会在现有策略校验下自动添加对应市场源）；为Agent工具新增`effort`参数，可控制子代理的工作投入等级。
- **v2.1.291**：修复了v2.1.290引入的云会话丢失权限提示回复的回归问题；修复了v2.1.288引入的退出时可能丢失会话最后几条消息的回归问题。
- **v2.1.290**：在mod的`turn.step`钩子返回结果中新增`serverToolUses`字段（暴露顾问端的工具调用详情，包括ID、名称、输入和时间戳）；在`tool.check`插件钩子事件中新增`agentId`字段，用于区分子代理与主代理的权限校验。

---

## 3. 热门问题
1. **#16345 [功能请求] 支持标准.agents/skills/目录作为代理技能目录**  
   *状态：开放 | 👍 58 | 评论：30*  
   本周互动量最高的需求，请求在现有`.claude/skills/`路径之外，原生支持行业标准的`.agents/skills/`目录（遵循agentskills.io规范）。该需求对跨工具技能可移植性至关重要，获得了社区广泛支持。  
   🔗 [anthropics/claude-code#16345](https://github.com/anthropics/claude-code/issues/16345)

2. **#66115 功能请求：空闲超时自动压缩上下文，避免缓存失效产生额外成本**  
   *状态：开放 | 👍 21 | 评论：16*  
   请求在会话空闲达到可配置时长时自动压缩上下文，避免提示词缓存（约5分钟）失效后，下一轮对话需要重新完整处理上下文。这是长会话场景下排名靠前的成本与性能优化需求。  
   🔗 [anthropics/claude-code#66115](https://github.com/anthropics/claude-code/issues/66115)

3. **#27665 [功能] 智能模型路由**  
   *状态：开放 | 👍 24 | 评论：14*  
   一个整合型需求，指出Max订阅用户93.8%的token都被路由到Opus，没有自动优化机制，呼吁根据任务复杂度智能选择模型以降低成本，合并了30+相关功能请求。  
   🔗 [anthropics/claude-code#27665](https://github.com/anthropics/claude-code/issues/27665)

4. **#87500 [Bug] Windows下API错误：连接断开（ECONNRESET）**  
   *状态：已关闭 | 评论：17*  
   一个被广泛反馈的Windows网络bug，会导致与Anthropic API的连接持续断开。该问题的修复解决了Windows用户普遍遇到的可靠性痛点。  
   🔗 [anthropics/claude-code#87500](https://github.com/anthropics/claude-code/issues/87500)

5. **#98134 [Bug] 有效的Apple Max 20倍订阅仍被识别为Pro版**  
   *状态：开放 | 评论：9*  
   macOS上的严重认证bug，有效的Max订阅会被错误检测为Pro档位，导致用户无法使用Max专属功能。该问题影响苹果平台用户的计费和核心功能使用。  
   🔗 [anthropics/claude-code#98134](https://github.com/anthropics/claude-code/issues/98134)

6. **#101188 [Bug] 回退功能恢复失败，却覆盖了20小时的编辑内容/删除了文件**  
   *状态：开放 | 评论：2*  
   Windows上的高严重级数据丢失bug：回退/恢复功能提示失败，但仍会修改磁盘上的文件，且对话并未回退。该问题对用户工作成果构成严重风险。  
   🔗 [anthropics/claude-code#101188](https://github.com/anthropics/claude-code/issues/101188)

7. **#98565 [功能] 桌面端侧边栏：为按文件夹分组的会话添加“最近活跃”筛选**  
   *状态：开放 | 👍 4 | 评论：2*  
   请求将现有的“最近活跃”会话筛选功能扩展到侧边栏按文件夹分组的场景，避免重度用户的会话无限累积，提升高级用户的桌面UI使用体验。  
   🔗 [anthropics/claude-code#98565](https://github.com/anthropics/claude-code/issues/98565)

8. **#101410 [Bug][安全] 安全过滤器误拦截无人机遥测数据解析**  
   *状态：开放 | 评论：1*  
   本周新增的6+起网络安全类安全过滤器误报问题之一，这类问题都会拦截合法的软硬件调试工作（无人机遥测、移动应用构建、USB安全密钥排查），导致会话完全中断。  
   🔗 [anthropics/claude-code#101410](https://github.com/anthropics/claude-code/issues/101410)

9. **#89723 [Bug] 插件子代理忽略`model:`前置配置**  
   *状态：开放 | 评论：1*  
   插件生态bug：插件自带的子代理中`model:`前置配置不生效（项目级代理该配置正常）。该问题导致插件开发者无法控制其工具的成本和模型选择。  
   🔗 [anthropics/claude-code#89723](https://github.com/anthropics/claude-code/issues/89723)

10. **#101420 [Bug] StopFailure命令钩子触发后10–50毫秒就被终止**  
    *状态：开放 | 评论：0*  
    自v2.1.246起存在的回归问题（v2.1.296中仍存在）：无头模式下，启动了外部进程的`StopFailure`命令钩子会在执行完成前被销毁，破坏了失败后清理和日志工作流。  
    🔗 [anthropics/claude-code#101420](https://github.com/anthropics/claude-code/issues/101420)

---

## 4. 关键PR进展
1. **#41447 feat: 开源Claude Code ✨**  
   *状态：开放*  
   一个里程碑式的PR，提议将Claude Code完全开源，可关闭5个长期存在的社区需求。这是该仓库历史上最受期待的治理变更。  
   🔗 [anthropics/claude-code#41447](https://github.com/anthropics/claude-code/pull/41447)

2. **#85716 fix(hookify): 从祖先目录的.claude目录加载规则，防止静默绕过**  
   *状态：已关闭*  
   修复了hookify插件中的一个严重安全漏洞：子目录项目会静默绕过父目录的安全规则，对应issue #85613。  
   🔗 [anthropics/claude-code#85716](https://github.com/anthropics/claude-code/pull/85716)

3. **#84711 fix(security): 修复插件脚本中的YAML注入和符号链接覆盖凭证问题**  
   *状态：已关闭*  
   修复了两个高严重级插件安全漏洞：插件配置中的YAML注入，以及通过符号链接覆盖凭证文件的问题，对应issue #76580。  
   🔗 [anthropics/claude-code#84711](https://github.com/anthropics/claude-code/pull/84711)

4. **#84364 fix(hookify): pretooluse钩子出现异常时默认失败关闭**  
   *状态：已关闭*  
   修复了一个安全漏洞：钩子规则评估出现异常（例如导入错误）时，默认会允许工具执行；现在改为默认拒绝，确保安全策略的强制生效。  
   🔗 [anthropics/claude-code#84364](https://github.com/anthropics/claude-code/pull/84364)

5. **#100293 在examples/settings中添加HIPAA设置示例**  
   *状态：已关闭*  
   新增了示例文件`settings-hipaa.json`、`managed-mcp-hipaa.json`及配套文档，面向有HIPAA配置需求的组织，展示如何限制开发者设备上的会话数据外泄。  
   🔗 [anthropics/claude-code#100293](https://github.com/anthropics/claude-code/pull/100293)

6. **#96434 安全指南：阻止审核者访问被拒绝的文件和机密文件**  
   *状态：开放*  
   更新了安全指南的审核工作流，使其遵循`Read`拒绝/询问规则，并将已知机密文件（`.env`、密钥、凭证存储）排除在审核范围之外，同时提供了可关闭该功能的环境变量。  
   🔗 [anthropics/claude-code#96434](https://github.com/anthropics/claude-code/pull/96434)

7. **#79150 文档：将代码审查README与当前基于校验的命令对齐**  
   *状态：开放*  
   修复了过时的代码审查文档，原文档描述的是已弃用的流程（git blame代理、0-100置信度评分），与当前实现不匹配。  
   🔗 [anthropics/claude-code#79150](https://github.com/anthropics/claude-code/pull/79150)

8. **#82320 修复examples/gateway/aws/setup.sh在macOS原生bash 3.2上运行中断的问题**  
   *状态：开放*  
   修复了一个兼容性问题：AWS网关设置脚本使用了bash 4语法，在macOS默认的bash 3.2上会运行失败，导致原生Mac系统无法完成设置。  
   🔗 [anthropics/claude-code#82320](https://github.com/anthropics/claude-code/pull/82320)

9. **#85323 fix(plugin-dev): 解析块标量格式的代理描述**  
   *状态：开放*  
   修复了`validate-agent.sh`中的YAML解析bug：多行块标量格式的代理描述（`|` / `>`语法）无法被正确读取，导致合法的插件代理校验失败。  
   🔗 [anthropics/claude-code#85323](https://github.com/anthropics/claude-code/pull/85323)

10. **#19084 fix(ralph-wiggum): 为停止钩子添加Windows兼容性**  
    *状态：已关闭*  
    为ralph-wiggum插件的停止钩子添加了Windows支持——此前该钩子因硬编码了`/bin/bash`的shebang，在Windows/WSL环境中会运行失败。  
    🔗 [anthropics/claude-code#19084](https://github.com/anthropics/claude-code/pull/19084)

---

## 5. 热门讨论
*本周数据集中未提供讨论内容，该章节省略。*

---

## 6. 功能需求趋势
1. **生态标准化**：最受关注的需求方向是对齐Agent Skills标准（`.agents/skills/`目录）和支持可配置的技能存储路径，实现跨AI开发工具的技能可移植和共享技能库。
2. **成本优化**：多项需求聚焦于降低token消耗，包括空闲时自动压缩上下文避免缓存失效、可配置的上下文压缩模型（用更便宜的模型做摘要），以及基于任务的智能模型路由，避免简单任务过度使用高端模型。
3. **桌面端UI/UX改进**：高级用户呼吁优化会话管理，包括为按文件夹分组的会话添加最近活跃筛选，以及扩展Claude Agents视图的功能（例如在视图中直接创建新会话）。
4. **插件与子代理灵活性**：要求增强插件能力，包括支持插件中子代理的model前置配置、更便捷的市场源插件安装方式，以及更细粒度的子代理行为控制（工作投入等级、窗口设置）。

---

## 7. 开发者痛点
1. **安全过滤器误报**：大量网络安全类过滤器误报问题正在阻断合法开发工作（无人机遥测分析、移动应用调试、硬件安全密钥排查），而静默降级到旧模型通常不足以让会话恢复正常。
2. **Windows平台可靠性**：持续存在的Windows专属bug仍是主要痛点，包括API连接断开、MCP连接器授权失败，以及高严重级的回退数据丢失bug。
3. **钩子可靠性与正确性**：多个与钩子相关的缺陷正在破坏开发者工作流：指令式钩子无法执行规则、无头模式下StopFailure钩子被过早终止、hookify插件的安全规则在子目录中被静默绕过。
4. **认证与订阅检测bug**：跨平台认证问题（Apple Max订阅误判、MCP连接器认证状态过期）导致用户无法使用付费功能，或看到错误的系统状态。
5. **数据丢失风险**：本周修复了两个严重的会话/编辑器数据丢失回归问题（权限提示回复丢失、退出时会话消息丢失），但新出现的回退覆盖文件bug表明，非预期文件修改的风险仍然存在。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区简报 | 2026-10-12
数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 近7天亮点
本周 Codex Rust CLI v0.162.0 稳定版发布，新增托管式 Git worktree 与代理命令中心任务置顶功能；随后推出 v0.162.1 补丁，修复了 TUI 崩溃与启动兼容性的关键问题。Windows 平台问题占据社区反馈主流，沙箱、浏览器工具、剪贴板失效的反馈广泛存在；TUI 易用性与跨设备同步仍是最受关注的功能需求。

---

## 2. 版本发布
### 稳定版频道
- **[rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)**（补丁版）
  - 修复异步提问包含多行内容时导致的 TUI 崩溃问题，换行符与完整超链接目标可正常保留 (#51866)
  - 新增兼容性检查机制，修复后台运行服务与 CLI 默认功能配置不匹配导致的启动失败问题
- **[rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0)**（次版本更新）
  - 新增工具支持从受信任本地项目创建、列出托管式 Git worktree（需启用 `worktrees` 功能，#50148）
  - 代理命令中心新增任务置顶功能，按 `p` 键即可操作；服务端支持时，置顶任务会存入共享的「已置顶」分组 (#51500)
  - 新增 TUI 对话轮次提示导航与复制功能（更新说明仅包含部分内容）

### Alpha 测试频道
本周共发布 4 个 v0.163.0 预发布版本：[alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1)、[alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2)、[alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.4)、[alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5)，持续迭代稳定性与功能。v0.162.0 版本周期内还完成了 3 个额外 alpha 构建版本。

---

## 3. 热门问题
| 问题 | 状态 | 重要性 | 社区反馈 |
|-------|--------|----------------|--------------------|
| [#36040 iOS Remote 仅显示有近期对话的项目](https://github.com/openai/codex/issues/36040) | 处理中 | 属于功能回归问题，对于依赖移动端访问桌面端 Codex 实例的用户，iOS 远程控制核心功能受到影响 | 77 条评论，5 👍 — 本周互动量最高，多位用户确认 iOS/macOS 配对场景下均可复现 |
| [#35446 Windows 10 上 Computer Use 功能在 SoftwareBitmap 转换时死锁](https://github.com/openai/codex/issues/35446) | 处理中 | 属于 Windows Computer Use 用户面临的严重稳定性问题，会导致截屏时功能完全卡死 | 25 条评论 — 多位 Windows 10 22H2 用户反馈出现相同死锁现象 |
| [#50526 桌面端 Guardian 实验重新引入了已废弃的 thread_context](https://github.com/openai/codex/issues/50526) | 处理中 | 属于配置漂移类 bug：即便配置文件已清理，已废弃的设置仍会残留，导致出现令人困惑的警告提示 | 23 条评论，9 👍 — 高点赞数说明用户普遍对误导性的配置提醒感到不满 |
| [#5538 模型响应过程中 CLI 输入消息消失](https://github.com/openai/codex/issues/5538) | 已关闭 | 这一长期存在的 TUI 数据丢失 bug 经过近 12 个月的用户反馈后终于修复 | 21 条评论，12 👍 — 是历史上点赞极高的问题，社区对其修复表示欢迎 |
| [#40125 Windows 端 create_thread 会将「完全访问」权限的 worktree 子项目降级为托管审批模式](https://github.com/openai/codex/issues/40125) | 处理中 | 属于权限回归问题，破坏了受信任 worktree 的工作流，子代理任务需要反复手动审批 | 21 条评论，4 👍 — 企业版与专业版用户反馈对工作流造成了严重影响 |
| [#49829 云端 WebSocket 需要代理时，桌面端无法打开 Dot 任务](https://github.com/openai/codex/issues/49829) | 处理中 | 企业/代理网络用户面临的连通性问题：Dot 工作流在网页端正常，但桌面客户端无法使用 | 18 条评论，3 👍 — 多个企业网络环境下均确认存在该问题 |
| [#7829 TUI 中输入提示时会插入转义序列](https://github.com/openai/codex/issues/7829) | 已关闭 | 输入损坏问题已修复，该问题曾影响终端模拟器兼容性 | 15 条评论，6 👍 — 使用自定义终端配置的用户反馈修复解决了长期存在的输入问题 |
| [#40565 macOS 工作区沙箱禁止在可写工作区中重命名/删除目录](https://github.com/openai/codex/issues/40565) | 处理中 | 沙箱权限越界问题，导致用户受信任工作区中的基础文件操作被阻止 | 9 条评论，8 👍 — 高点赞比说明用户强烈期望改进沙箱权限粒度 |
| [#53098 Windows HiDPI 屏幕下全屏 TUI 鼠标滚轮存在死区](https://github.com/openai/codex/issues/53098) | 处理中 | Windows 高 DPI 显示屏上的易用性回归问题，导致新版全屏 TUI 滚动失效 | 8 条评论 — 在 225% 缩放设置下通过 Windows Terminal SSH 使用时出现该问题 |
| [#53203 Windows v26.1007 版本长对话中响应/压缩失败](https://github.com/openai/codex/issues/53203) | 处理中 | 近期版本更新引入的回归问题，会导致流式连接断开，影响长期项目的开发工作 | 3 条评论 — 属于新出现的问题，多位用户反馈升级后立即受到影响 |

---

## 4. 关键 PR 进展
以下列出的所有 PR 均在近7天内合并/关闭：
1. **[#52990 为 TUI 添加可搜索的 `/config` 偏好设置面板](https://github.com/openai/codex/pull/52990)**  
   核心功能：新增分组式偏好设置标签页（外观、通知、输入、会话、文本选择），支持搜索功能，偏好设置可持久化保存到用户配置中。
2. **[#53224 TUI 支持 Windows 剪贴板文本粘贴快捷键](https://github.com/openai/codex/pull/53224)**  
   修复内容：Windows 端 `Ctrl+V` 现在可正确粘贴文本（不再仅尝试粘贴图片），`Shift+Insert` 也将使用标准剪贴板粘贴路径。
3. **[#53173 支持在 TUI 内重启托管式后台服务](https://github.com/openai/codex/pull/53173)**  
   功能更新：可在 TUI 内通过确认对话框重启后台服务，无需退出 TUI 即可应用配置变更。
4. **[#52972 将 `rmcp` 升级至 3.5.1 并加固生命周期测试](https://github.com/openai/codex/pull/52972)**  
   依赖更新：将 MCP 处理器迁移至新的 `ClientConfig`/`ServerConfig` API，同时提升了取消操作相关测试的可靠性。
5. **[#52967 复用并预热 WSL 剪贴板文本读取器](https://github.com/openai/codex/pull/52967)**  
   性能修复：将每次粘贴时创建 PowerShell 进程的方式替换为常驻的专用读取线程，解决了 WSL 剪贴板卡顿问题。
6. **[#53150 冷恢复时还原对话线程所属的权限](https://github.com/openai/codex/pull/53150)**  
   权限修复：确保冷恢复会话时，线程专属的权限设置会被保留，而不会被全局默认值覆盖。
7. **[#52946 代理命令中心的任务行在进度更新时保持稳定](https://github.com/openai/codex/pull/52946)**  
   体验优化：进度更新时，同一状态分组内的任务顺序保持不变，避免因时间戳变化导致行位跳动。
8. **[#52937 对话压缩时保留客户端标记的工具输出](https://github.com/openai/codex/pull/52937)**  
   功能更新：新增 `retain_tool_outputs_across_compaction` 配置开关（默认关闭），对话压缩时可保留标记为 `retain: true` 的客户端提供的工具输出。
9. **[#53155 关闭过程中确保远程应用服务器事件仍可正常投递](https://github.com/openai/codex/pull/53155)**  
   稳定性修复：在客户端完全断开连接前保持事件接收器存活，避免关闭过程中 WebSocket 关闭帧被丢弃。
10. **[#53152 支持选中并复制 TUI 对话轮次提示](https://github.com/openai/codex/pull/53152)**  
    体验优化：支持鼠标选中并复制轮次提示文本，此前该内容在对话历史记录外无法交互。

---

## 5. 热门讨论
### 功能设想
1. **[#592 为 Web 项目提供图像生成能力](https://github.com/openai/codex/discussions/592)**（112 👍，14 条评论）  
   长期以来投票最高的需求：将 GPT-4o 的图像生成能力集成到 Codex CLI 中，为 Web 开发工作流自动生成占位图与生产可用图片。
2. **[#14067 跨设备 Codex 对话/会话同步](https://github.com/openai/codex/discussions/14067)**（67 👍，13 条评论）  
   多设备工作用户的高需求功能，希望在不同设备间实现无缝的上下文与对话延续。
3. **[#1327 支持 Jujutsu (jj) 版本控制系统](https://github.com/openai/codex/discussions/1327)**（27 👍，1 条评论）  
   对兼容 Git 的 Jujutsu 版本控制系统的支持需求不断增长，希望突破当前仅支持 Git 的工作流限制。
4. **[#14595 远程控制功能路线图](https://github.com/openai/codex/discussions/14595)**（18 👍，7 条评论）  
   用户希望推出官方远程控制功能，达到与 Claude Code 相当的体验，称第三方替代方案的可靠性不佳。

### 问答交流
1. **[#2251 Codex 用量限制是否与 ChatGPT Plus 一致](https://github.com/openai/codex/discussions/2251)**（57 👍，59 条评论）  
   互动量最高的讨论：用户持续关注 ChatGPT Plus 每周 3000 次思考额度的限制是否同样适用于 Codex。
2. **[#8503 代码审查配额剩余 100% 却提示「用量已达上限」](https://github.com/openai/codex/discussions/8503)**（13 👍，28 条评论）  
   用户普遍对 GitHub Connector 的配额统计不一致感到困惑，明明还有可用配额，却无法使用代码审查功能。
3. **[#53079 基于 Codex 构建可靠的全栈开发工作流](https://github.com/openai/codex/discussions/53079)**（1 👍，3 条评论）  
   热门新讨论：用户希望了解如何将 AI 辅助编码与特性分支、代码审查等专业工作流结合的最佳实践。

### 成果展示
1. **[#35149 两款免费的 3D 多人游戏 Codex 技能](https://github.com/openai/codex/discussions/35149)**（2 👍，2 条评论）  
   社区贡献的技能，支持网络同步与游戏可用 GLB 资产生成，专为 3D 游戏开发工作流打造。
2. **[#51406 「无注释」PostToolUse 钩子](https://github.com/openai/codex/discussions/51406)**（1 👍，2 条评论）  
   一款受欢迎的社区钩子，可自动移除代码中 AI 生成的叙述性注释，解决了用户普遍抱怨的注释输出过于冗长的问题。
3. **[#46874 Agent Lint：面向 Codex 配置的开源检查工具](https://github.com/openai/codex/discussions/46874)**（1 👍，2 条评论）  
   被广泛分享的工具，可校验 `.codex/`、`AGENTS.md`、MCP 等 AI 代理配置文件的正确性。

---

## 6. 功能需求趋势
1. **跨设备与远程体验优化**：用户持续需求可靠的远程控制、多机会话同步，以及移动端远程功能与桌面端的体验对齐。
2. **更广泛的 VCS 支持**：越来越多用户呼吁在 CLI、桌面端审查面板、worktree 功能中支持 Jujutsu (jj)，突破当前仅支持 Git 的限制。
3. **记忆与跨会话上下文**：用户希望内置记忆功能，可在不同对话间保留偏好设置、项目上下文与决策历史，同时希望系统能明确告知何时引用了过往对话。
4. **集成式媒体生成**：用户对 Codex 工作流原生支持图像（以及日渐增长的视频）生成需求强烈，尤其是在 Web 与游戏开发场景中。
5. **更精细的沙箱粒度**：用户要求提供更细粒度的工作区权限控制，避免沙箱限制过于严格，导致受信任目录中的基础文件操作被阻止。

---

## 7. 开发者痛点
1. **Windows 平台不稳定**：未解决的 bug 中数量最多的是 Windows 专属问题，包括沙箱配置失败、浏览器工具初始化错误、剪贴板粘贴问题、HiDPI TUI 故障、Computer Use 死锁等。
2. **配额与用量统计混乱**：大量用户反馈用量计数不一致、虚假的「已达上限」错误，以及 ChatGPT 订阅限制与 Codex 功能权限的对应关系不清晰。
3. **配置漂移与误导性警告**：用户反馈即便删除了相关配置项，已废弃的设置警告（例如 Guardian 的 `thread_context`）仍持续出现，增加了排查难度。
4. **连通性与代理兼容性问题**：企业与代理网络用户在托管环境中持续面临 Dot 任务恢复失败、云端 WebSocket 连接失败、GitHub 集成失败等问题。
5. **TUI 回归问题与易用性缺口**：近期全屏 TUI 的推出引入了新 bug（输入消失、滚动死区、粘贴损坏），同时各平台间的无障碍支持与快捷键一致性仍未达标。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区周报 | 2026-10-12

---

## 1. 上周亮点
本周 v0.64.0-preview.1 正式推出，v0.65.0 夜间构建版本也持续迭代，核心修复聚焦于错误处理、会话完整性和工作区安全。社区反馈了多项高优先级的智能体稳定性问题（包括卡顿、成功状态误报），并推动改进子智能体可观测性与沙箱化 bash 执行能力；同时维护者合并了针对路径遍历和环境变量泄露的重要安全加固补丁。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.65.0-nightly.20261012.g9b6e0265d](https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d) | 夜间版 | 增量构建；完整更新日志见链接 |
| [v0.65.0-nightly.20261010.g9b6e0265d](https://github.com/google-gemini/gemini-cli/pull/29658) | 夜间版 | 修复 `fetchJson` 中的 JSON 解析/流式错误；`truncateString` 保留行终止符 |
| [v0.64.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29696) | 预览版 | v0.64.0-preview.0 的精选补丁版本 |
| [v0.65.0-nightly.20261008.g44d764ee5](https://github.com/google-gemini/gemini-cli/pull/29609) | 夜间版 | 修复 CI 取消分配工作流循环问题；强制遵守终端用户轮次不变性 |
| [v0.65.0-nightly.20261007.gef59c532f](https://github.com/google-gemini/gemini-cli/pull/29583) | 夜间版 | 强制非受信文件夹使用只读工作区设置；消除会话恢复时重复的工具响应轮次 |
| [v0.64.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/29450) | 预览版 | 实现 A2A 服务 V1→V2 配置迁移；打通 `PromptResponse.usage` 与 `usage_update` 通知 |
| [v0.63.0](https://github.com/google-gemini/gemini-cli/pull/29468) | 稳定版 | 新增连接恢复过程中的重试进度指示器 |

---

## 3. 热门问题
1. **[#18186 工作区策略文件未生效](https://github.com/google-gemini/gemini-cli/issues/18186)** — 长期存在的企业级 bug（优先级 P3，18 条评论，16 👍），表现为 `.gemini/policies/*.toml` 配置被忽略。社区参与度高，说明该问题对组织批量部署影响广泛。
2. **[#22323 子智能体达到 MAX_TURNS 后误报目标完成](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 级智能体 bug：`codebase_investigator` 将达到轮次上限的情况伪装成执行成功。对智能体工作流的可靠性至关重要。
3. **[#19873 零依赖 OS 沙箱实现原生 bash 执行](https://github.com/google-gemini/gemini-cli/issues/19873)** — 重大增强提案，旨在利用 Gemini 3 的 bash 亲和性，同时通过沙箱和意图路由保障安全，将决定长期的智能体执行模式。
4. **[#25283 OAuth/策略错误导致所有基础工具无法使用](https://github.com/google-gemini/gemini-cli/issues/25283)** — 已关闭的 P1 安全问题："工具执行被策略拒绝" 错误会阻断所有文件/ shell 操作。这一广泛反馈的阻塞问题已得到解决。
5. **[#21409 通用智能体无限卡顿](https://github.com/google-gemini/gemini-cli/issues/21409)** — P1 级 bug，获 8 👍：智能体在执行创建文件夹等简单任务时卡住；临时解决方案是禁用子智能体委派。是当前用户最头疼的问题。
6. **[#22745 支持 AST 感知的文件读取/搜索/映射](https://github.com/google-gemini/gemini-cli/issues/22745)** — 史诗级跟踪议题，研究 AST 感知工具以实现更精准的代码导航、减少 token 冗余和交互轮次。对代码库智能体具有很高战略价值。
7. **[#21968 Gemini 对自定义技能和子智能体调用不足](https://github.com/google-gemini/gemini-cli/issues/21968)** — 用户反馈的行为缺陷：仅在明确指示时，模型才会调用 gradle、git 等自定义技能，限制了自定义智能体生态的价值。
8. **[#29574 使用 ReadFile 工具读取图片时报 400 错误](https://github.com/google-gemini/gemini-cli/issues/29574)** — 近期出现的 P2 级 bug：智能体会话在查看图片时中断，报错 "不支持以模型轮次结尾的请求"，目前正在积极排查。
9. **[#22267 浏览器智能体忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267)** — P2 级 bug：浏览器智能体不遵守 `maxTurns` 等设置，不符合用户的配置预期。
10. **[#20079 符号链接的智能体文件无法被识别](https://github.com/google-gemini/gemini-cli/issues/20079)** — P2 级 bug：`~/.gemini/agents/` 下的智能体 markdown 文件如果是符号链接会被忽略，影响 dotfile 和共享配置方案的使用。

---

## 4. 重要 PR 进展
1. **[#29521 限制旧版检查点路径范围](https://github.com/google-gemini/gemini-cli/pull/29521)** — *安全修复*：防止通过 `x/../../secret` 这类检查点标签进行路径遍历，避免文件写入到检查点目录之外。
2. **[#29522 确保 glob 工具匹配结果限制在已验证目录内](https://github.com/google-gemini/gemini-cli/pull/29522)** — *安全修复*：拦截绝对路径 glob 模式，防止其跳出搜索目录读取任意文件系统路径。
3. **[#29523 外部安全检查器使用最小环境变量并限制输出大小](https://github.com/google-gemini/gemini-cli/pull/29523)** — *安全修复*：从检查器的启动环境中移除 `GEMINI_API_KEY` 等密钥，并限制 stdout 大小以防止内存耗尽。
4. **[#29527 确保请求不以模型轮次结尾](https://github.com/google-gemini/gemini-cli/pull/29527)** — *核心修复*：解决了执行 `/rewind`、流中断或末尾存在空用户轮次后出现的 400 Bad Request 错误。
5. **[#29626 JSON 序列化中保留共享引用](https://github.com/google-gemini/gemini-cli/pull/29626)** — *核心修复*：`safeJsonStringify` 不再将非循环的共享引用（例如 OTel 指标对象）错误标记为 `[Circular]`。
6. **[#29629 限制待处理纯文本高度以减少流式闪烁](https://github.com/google-gemini/gemini-cli/pull/29629)** — *用户体验/性能优化*：限制流式输出时 MarkdownDisplay 的高度，消除全屏重绘导致的闪烁。
7. **[#29510 加固 Windows 子进程参数转义](https://github.com/google-gemini/gemini-cli/pull/29510)** — *安全修复*：通过正确的 shell 参数转义，防止 Windows 下调用差异编辑器时发生命令注入。
8. **[#29708 会话加载历史回放完成后再响应](https://github.com/google-gemini/gemini-cli/pull/29708)** — *ACP 修复*：确保 `session/load` 响应仅在完整历史回放完成后发送，符合 ACP 规范并修复更新顺序错乱问题。
9. **[#29517 线性化 truncateHistoryToBudget 中的数组重建逻辑](https://github.com/google-gemini/gemini-cli/pull/29517)** — *性能优化*：将历史截断中基于 `unshift()` 的 O(n²) 重排逻辑替换为线性重建方案。
10. **[#29664 升级 npm 依赖（共 74 项更新）](https://github.com/google-gemini/gemini-cli/pull/29664)** — *依赖更新*：大型批量更新，包括 `@modelcontextprotocol/sdk` 从 1.23.0 升级到 1.32.0 及其他核心包。

---

## 5. 热门讨论
（暂无讨论数据 — 本部分省略）

---

## 6. 功能需求趋势
1. **沙箱化原生 bash 执行** — 用户强烈希望模型能直接使用 POSIX 工具，同时保障安全性（见 #19873）。
2. **AST 感知的代码导航** — 需求集中在使用 AST 工具实现更智能、token 更高效的文件读取和代码库映射（#22745、#22746）。
3. **改进子智能体可观测性与控制能力** — 用户希望通过 `/chat share` 查看子智能体执行轨迹（#22598）、获得更完善的 bug 报告上下文（#21763），以及可配置的限制参数（#22267）。
4. **智能体自我认知** — 要求 CLI 能准确说明自身的命令行参数、快捷键和执行行为（#21432）。
5. **节省 token 的读取策略** — 对分层式"精准提取"方案有需求，以减少上下文冗余（#19561）。

---

## 7. 开发者痛点
1. **智能体可靠性缺陷** — 卡顿（#21409）、成功状态误报（#22323）和交互式提示死锁（#22465）等问题降低了用户对智能体工作流的信任。
2. **配置不一致** — 策略不生效（#18186）、子智能体忽略设置（#22267）、符号链接支持缺失（#20079）等问题导致预期行为失效。
3. **安全与信任顾虑** — 无防护的破坏性操作（#22672）、随机临时脚本创建（#23571）以及过往的策略执行 bug（#25283）给工作区带来风险。
4. **用户体验/性能摩擦** — 终端调整大小闪烁（#21924）、流式输出重绘（#29629）和转义序列处理 bug（#22466）影响交互式使用体验。
5. **自定义技能/子智能体发现性差** — 模型无法主动调用用户定义的技能和子智能体（#21968），降低了扩展能力的价值。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 | 2026-10-12
数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 过去7天亮点
过去一周，Copilot CLI 团队发布了8个补丁版本（从 v1.0.94 到 v1.0.96-2），重点优化沙箱体验、强化认证能力、提升模型配置质量——包括在 macOS 上原生支持 Microsoft Entra broker，以及实现模型 ID 不区分大小写的处理逻辑。社区新增了50个有效 issue，最受关注的问题集中在 MCP 认证持久化、长会话稳定性、权限系统边界场景上。本期仅收到3个社区 PR，其中最有价值的是对安装脚本校验和验证逻辑的修复。

---

## 2. 版本发布
### v1.0.96-2（最新版）
**修复：** `/model` 和 `/config model` 中的模型 ID 现在支持不区分大小写输入，且规范 ID 会被保存到存储中。
### v1.0.96-1
**新增：** 交互式沙箱设置现在会提示可能的环境密钥，用户还可以在保存前添加需屏蔽的主机。
**修复：** 启动过程中企业策略尚未解析完成时，`/allow-all` 命令仍可正常使用。
### v1.0.96-0
**优化：** 在 Git 仓库中的交互式会话能更快进入输入提示状态；时间线现在会显示每项权限决策的发起方（用户、辅助权限、策略或无人值守回退）。
**修复：** `/add-dir` 现在能正确为当前会话授予沙箱对新增目录的访问权限；修复了 `/user` 命令的一个 bug。
### v1.0.95（2026-10-09）
**亮点：** macOS 上原生支持 Microsoft Entra broker 认证（带浏览器回退机制）；`copilot config` 支持沙箱凭证的 `injectHosts` 键并提供 Shell 补全（Bash/Zsh/Fish）；`--context` 参数现在能正确应用于新建和恢复的 ACP 会话。
### v1.0.94（2026-10-08）
**亮点：** 模型选择和 `--model` 补全中新增 Claude Haiku 5.5；优化了 MCP `add` 命令在初始化中断后的恢复能力；MCP 的启用/禁用现在可以在服务器发现前完成，无需启动服务器。

---

## 3. 热门 Issue（按影响度和参与度排名前10）
1. **#1953 — 始终可见的上下文窗口状态** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/1953)
   获赞数最高的开放功能请求（11 👍）。用户希望上下文使用量能持续显示（类似速率限制计数器），避免在接近上下文窗口上限时出现无感知的性能下降。该需求涉及高级用户的核心使用体验。

2. **#2536 — Atlassian MCP 每次调用 CLI 都需要重新授权** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/2536)
   最突出的 MCP 痛点（3 👍）。第三方 MCP 服务器的凭证持久化功能失效，导致用户需要反复登录——这是企业级 MCP 落地的一大阻碍。

3. **#3081 — NixOS 钥匙串支持失效** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/3081)
   影响较大的平台功能缺口（3 👍）。尽管已安装 libsecret/Keyring，Copilot 在 NixOS 上仍无法访问系统钥匙串，导致整个 Linux 发行版生态的令牌存储功能失效。

4. **#4946 — 后台 Shell 补全后出现 HTTP 400 `content[].thinking` 错误** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/4946)
   评论数最多的活跃 bug（7 条评论）。跨轮次完成的后台 Shell 命令会触发格式错误的思考内容 payload，导致 API 报错。该问题破坏了核心异步执行流程。

5. **#4686 — Node.js 运行约37分钟后OOM崩溃（异步 libuv 句柄泄漏）** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/4686)
   严重稳定性问题：由于 SEA 打包的 Node 运行时存在句柄泄漏，长会话会因堆内存耗尽而持续崩溃。该问题阻碍了生产环境/长任务场景的使用。

6. **#3755 — 推理显示出现流文本乱码、块重复问题** [已关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/3755)
   关注度较高的渲染 bug（2 👍，6 条评论）。流式推理输出会出现文本重复/重叠的情况。该 issue 本周已关闭，是 `showReasoning` 功能的一次质量提升。

7. **#2494 — `copilot login` 自动进入钥匙串 y/N 提示（回归问题）** [已关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/2494)
   本期评论数最多的 issue（12 条评论）。这是一个长期存在的认证回归问题：CLI 在钥匙串提示时会跳过用户确认环节。经过6个月的反馈后，该问题本周已关闭。

8. **#5076 — `/add-dir` 未添加到沙箱允许列表** [已关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/5076)
   该问题已在 v1.0.96-0 中直接修复。用户反馈该命令对当前会话的沙箱权限没有生效——属于沙箱核心可用性 bug。

9. **#5094 — Windows 桌面应用 1.1.27+ 版本捆绑的 Git 无法启动（访问被拒绝）** [未关闭]
   [🔗 链接](https://github.com/github/copilot-cli/issues/5094)
   新报告的 Windows 回归问题：由于捆绑的 Git 二进制文件存在权限错误，所有项目注册功能都无法使用。该问题影响所有使用最新桌面版的 Windows 用户。

10. **#5049 — Windows 上 ACP 模式下 Computer Use 插件不可用** [未关闭]
    [🔗 链接](https://github.com/github/copilot-cli/issues/5049)
    功能一致性缺口：Computer Use 插件在交互式 CLI 中可用，但在 Windows 的 ACP/stdio 模式下无法使用，阻碍了自动化代理场景的落地。

---

## 4. 重点 PR 进展
过去7天仅更新了3个 PR，全部处于开放待审核状态：

1. **#5093 — install: 验证校验和条目与下载的 tar 包匹配**
   [🔗 链接](https://github.com/github/copilot-cli/pull/5093)
   修复了安装脚本校验和逻辑中的两个缺陷：通过 `--ignore-missing` 导致的空验证，以及未校验下载的 tar 包哈希是否确实存在于校验和文件中。这对供应链安全至关重要。

2. **#5106 — Create index.html**
   [🔗 链接](https://github.com/github/copilot-cli/pull/5106)
   看起来是无关主题或测试用的 PR，仅添加了一个独立的 HTML 文件；与 CLI 代码库没有明显关联。

3. **#5046 — Initial commit**
   [🔗 链接](https://github.com/github/copilot-cli/pull/5046)
   空的/初始 PR，未提供描述也没有实质性变更。

---

## 5. 热门讨论
*本期数据集中未提供讨论相关内容。*

---

## 6. 功能请求趋势
从本周的 issue 活动来看，三个明确的功能方向逐渐显现：
1. **更强的可观测性与 UI 辅助功能** — 上下文窗口状态持久化（#1953）、用户输入与助手输出的视觉区分（#2746）、页脚可自定义的身份显示（#4666），这些都表明用户需要更透明、更易快速浏览的界面。
2. **更丰富的插件/自动化 API** — 对可被工具调用的 `cwd`（#3035）的需求，以及 Computer Use 等插件在 ACP 模式下的更高一致性（#5049），表明用户希望基于 CLI 的插件系统构建自定义代理工作流。
3. **MCP 生态成熟度提升** — 第三方 MCP 的持久化认证（#2536）、协议合规性修复（#5079），以及已经发布的 `copilot mcp` 子命令（#590），都证实 MCP 管理是用户重点投入的领域。

---

## 7. 开发者痛点
本周 issue 中反复出现的困扰：
1. **认证与凭证不稳定** — 从钥匙串回归问题（#2494、#3081）到 MCP 重新授权循环（#2536），再到 Entra 边界场景问题，认证是故障报告中最常见的来源。
2. **沙箱与权限系统边界场景问题** — 孤立的权限提示（#4469）、失效的 `/add-dir`（#5076）、策略变更后钩子失效（#5098）、不清晰的 `.copilotignore` 语义（#3785），这些都让高级用户觉得沙箱模型不可预测。
3. **长会话不稳定** — OOM 崩溃（#4686）、句柄泄漏、会话恢复失败（#4889），这些问题削弱了用户对多小时或多日代理任务的信任。
4. **平台功能一致性缺口** — NixOS 钥匙串支持（#3081）、Windows Git/权限问题（#5094、#3535）、Windows 特有的插件不可用问题（#5049），导致不同操作系统的使用体验参差不齐。
5. **渲染与无障碍 bug** — 推理文本乱码（#3755）、深色主题下思考内容输出对比度低（#3866）、响铃通知失效（#3573），这些问题既影响可用性也损害无障碍体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区简报 | 2026-10-12
来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 近7天亮点
OpenCode 发布了 v1.19.0，新增直接大版本升级至 OpenCode 2 的通道、支持 OpenAI `ultrafast` 服务 tier，并加入全新的 `/update` 终端界面命令；同步发布的 v1.18.35 则新增了可供代理读取的统计数据接口，并修复了 xAI 图片处理相关问题。社区已修复长期存在的文件提及索引问题、DSML 工具调用时 AI 中止行为异常，以及 OpenAI 503 间歇性报错等问题；同时活跃的 PR 正在推进无障碍优化、CLI 可靠性提升和 v2 界面打磨。核心安全与权限加固工作也有进展，修复了通过 execute 工具绕过 webfetch 限制的漏洞，以及共享 v2 服务中 API 密钥残留绑定的问题。

---

## 2. 版本发布
### v1.19.0
- **核心功能**：新增 `opencode upgrade --major` 命令，支持直接升级到 OpenCode 2；启用 OpenAI `ultrafast` 服务 tier；强化 PTY 安全，在 PTY 存在性检查前先验证连接来源和票据。
- **终端界面（TUI）**：新增 `/update` 命令，可直接从界面内安装 OpenCode 更新。
- 链接：[v1.19.0 发布页](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)

### v1.18.35
- **核心功能**：为可供代理读取的统计接口新增规范重定向，同时支持 JSON 和 Markdown 数据格式。
- **Bug 修复**：xAI 工具结果现在会仅返回支持的图片格式，跳过不支持的格式（贡献者：@Jaaneek）。
- **贡献者**：3 位社区贡献者参与本版本，包括负责 web 文档的 @dc85。
- 链接：[v1.18.35 发布页](https://github.com/anomalyco/opencode/releases/tag/v1.18.35)

---

## 3. 热门 Issue
1. **#32747 – @ 文件提及无法包含启动后新建的文件** [已关闭]  
   高影响用户体验 Bug（21 条评论，17 个👍）：新建的文件必须重启后才会出现在 `@` 提及选择器中，根源是搜索索引状态过期。已通过更新重扫描逻辑解决。
   链接：[anomalyco/opencode#32747](https://github.com/anomalyco/opencode/issues/32747)

2. **#49050 – AI 输出 `</DSML|tool_calls>` 后异常中止** [已关闭]  
   严重解析器 Bug（18 条评论）：当输出中出现 DSML 工具调用闭合标签时，AI 生成会提前终止。已完成根因修复并关闭 Issue。
   链接：[anomalyco/opencode#49050](https://github.com/anomalyco/opencode/issues/49050)

3. **#52269 – OpenAI 服务不可用间歇性报错（上游连接失败）** [已关闭]  
   高频可靠性问题（17 条评论）：导致跨模型、跨会话出现 503 错误，大 payload 场景下尤为明显。目前正在通过 zstd 请求压缩进行缓解。
   链接：[anomalyco/opencode#52269](https://github.com/anomalyco/opencode/issues/52269)

4. **#49847 – OpenAI ChatGPT OAuth 请求错误使用 Zen API 密钥** [开放中]  
   鉴权集成 Bug（9 条评论）：OpenAI 提供商将 OpenCode Zen API 密钥发送到 ChatGPT 仅支持 OAuth 的 Codex 端点，导致请求被拒绝。可通过手动恢复凭证临时规避。
   链接：[anomalyco/opencode#49847](https://github.com/anomalyco/opencode/issues/49847)

5. **#45249 – 原生上下文自动压缩从不触发，导致 Copilot token 消耗失控** [已关闭]  
   成本相关严重 Bug（5 条评论）：GitHub Copilot 场景下 `session_context_epoch` 始终为 0，导致上下文压缩功能失效，token 消耗暴涨。
   链接：[anomalyco/opencode#45249](https://github.com/anomalyco/opencode/issues/45249)

6. **#48676 – 后续轮次中 AI 会覆盖用户手动修改的代码** [已关闭]  
   严重影响使用体验的问题（4 条评论），由中文用户反馈：文件时间戳（FileTime）校验逻辑存在缺陷，导致 AI 生成的内容覆盖了用户的手动修改。
   链接：[anomalyco/opencode#48676](https://github.com/anomalyco/opencode/issues/48676)

7. **#33137 / #46396 / #41408 – 屏幕阅读器无法读取流式输出的助手内容** [已关闭]  
   无障碍相关集群问题（多个关联 Issue，每个均有 4 条评论）：流式内容容器带有 `aria-hidden` 属性，导致 NVDA 等屏幕阅读器无法实时读取 AI 回复、思考步骤和工具调用过程。v2 版本的修复 PR 已提交。
   链接：[#33137](https://github.com/anomalyco/opencode/issues/33137) · [#46396](https://github.com/anomalyco/opencode/issues/46396) · [#41408](https://github.com/anomalyco/opencode/issues/41408)

8. **#54595 – execute 工具应继承 webfetch 权限** [开放中、已复现、严重程度：高]  
   安全漏洞（2 条评论）：禁用了 `webfetch` 权限的代理可以通过在 execute 工具中运行 `fetch` 绕过该限制。
   链接：[anomalyco/opencode#54595](https://github.com/anomalyco/opencode/issues/54595)

9. **#53207 – `opencode run --format json` 会丢失最后的 `step_finish` 事件** [开放中]  
   CLI 可靠性问题（2 条评论）：JSON 格式的运行输出会省略最后一步的 token/成本数据，导致下游账单和用量统计脚本异常。
   链接：[anomalyco/opencode#53207](https://github.com/anomalyco/opencode/issues/53207)

10. **#40335 – 桌面端新增 MCP 服务器设置和连接测试功能** [开放中、功能需求]
    高票功能需求（5 个👍）：希望提供 GUI 化的 MCP 服务器管理功能，无需在桌面端使用 CLI 或手动修改配置文件。
    链接：[anomalyco/opencode#40335](https://github.com/anomalyco/opencode/issues/40335)

---

## 4. 重点 PR 进展
1. **#54643 – fix(core): 无需重启即可在文件搜索中识别新文件** [开放中]  
   修复 #32747 及相关重复 Issue：同时更新 `ripgrepLayer`（Windows/非版本控制场景）和 `fffLayer`（Linux/macOS Git 仓库场景），确保重扫描后立即返回最新索引结果，消除 `@` 文件提及需要重启的问题。
   链接：[anomalyco/opencode#54643](https://github.com/anomalyco/opencode/pull/54643)

2. **#54570 – fix(core): 对 Codex 和 Responses API 请求启用 zstd 压缩** [开放中]  
   关闭 #52269：对大于约 1 MiB 的请求体启用 zstd 压缩，避免大 payload 导致 OpenAI 上游返回 503 连接失败。
   链接：[anomalyco/opencode#54570](https://github.com/anomalyco/opencode/pull/54570)

3. **#51084 – fix(session-ui): 暴露流式输出的助手步骤** [开放中]  
   针对 #33137 / #46396 / #41408 的 v2 无障碍修复：移除流式助手内容的 `aria-hidden` 属性，让屏幕阅读器可以读取实时回复、思考步骤和工具调用进度。
   链接：[anomalyco/opencode#51084](https://github.com/anomalyco/opencode/pull/51084)

4. **#53208 – fix(cli): 运行结束前输出所有最终步骤事件** [开放中]  
   关闭 #53207：确保 `opencode run --format json` 退出前刷新所有队列中的事件，包括最终的 `step_finish`，保留完整的 token/成本数据供脚本使用。
   链接：[anomalyco/opencode#53208](https://github.com/anomalyco/opencode/pull/53208)

5. **#54660 – fix(core): 中断后恢复时保留子代理任务** [开放中]  
   关闭 #54658：确保后台子代理任务在 `resume=true` 的中断场景下仍然保留，恢复时父代理能正确接收任务完成状态。
   链接：[anomalyco/opencode#54660](https://github.com/anomalyco/opencode/pull/54660)

6. **#54630 – fix(app): 目录选择器锚定到服务器目录并使用原生路径分隔符** [开放中]  
   关闭 #54663（从 #54626 拆分）：修复 Windows web 端目录选择器的默认路径，改为从服务器工作目录启动并使用原生路径分隔符，而非从操作系统用户目录启动。
   链接：[anomalyco/opencode#54630](https://github.com/anomalyco/opencode/pull/54630)

7. **#54662 – [贡献者提交] fix(app): 可重试错误在重试耗尽前隐藏** [开放中]  
   用户体验优化：提供商自动重试期间，时间线中不显示错误卡片，仅在所有重试都失败后才展示失败信息，减少界面干扰。
   链接：[anomalyco/opencode#54662](https://github.com/anomalyco/opencode/pull/54662)

8. **#49865 – feat(opencode): 新增内置 LSP 服务器 sysml-lsp** [已关闭]  
   新增对 OpenSysML 的 `sysml-lsp` 的内置支持，可处理 `.sysml` 和 `.kerml` 文件；若环境已安装 Go，会自动通过 `go install` 作为兜底安装方式。
   链接：[anomalyco/opencode#49865](https://github.com/anomalyco/opencode/pull/49865)

9. **#54426 – [贡献者提交] feat(app): iOS 语音委派显示为语音消息** [开放中]  
   解析 iOS 语音委派提示（头部 + JSON 指令体），并在桌面/ web 界面中渲染为专属的语音消息，与 iOS 端行为保持一致。
   链接：[anomalyco/opencode#54426](https://github.com/anomalyco/opencode/pull/54426)

10. **#54645 跟进：#54641 – fix(nix): flake 构建中禁用自更新器** [开放中]
    关闭 #54022：在 Nix flake 构建中禁用内置自更新器，符合发行版包管理规范，避免更新路径冲突。
   链接：[anomalyco/opencode#54641](https://github.com/anomalyco/opencode/pull/54641)

---

## 5. 热门讨论
*省略 — 数据集未提供 GitHub Discussions 相关数据。*

---

## 6. 功能需求趋势
1. **GUI 优先的 MCP 和工具管理** – 用户强烈希望桌面端 UI 支持 MCP 服务器的配置、测试和调试，无需依赖 CLI 或手动修改配置文件（典型需求见 #40335）。
2. **更完善的无障碍体验对齐** – 持续有用户要求桌面端和 web 端的流式内容、计数器、AI 中间状态都支持屏幕阅读器。
3. **扩展提供商和协议支持** – 需求包括：WinDbg MCP 安全模式支持 XPIA 采样（#54042）、更多内置 LSP 服务器（#49865），以及 MCP 服务更广泛的 OAuth 兼容性。
4. **升级和更新体验优化** – 用户希望产品内升级流程更顺畅（v1.19.0 的 `/update` 命令、大版本升级通道），并支持符合平台特性的更新行为（例如 Nix 版本禁用自更新）。
5. **更清晰的代理工作流可见性和控制权** – 用户关注可展开的 webfetch 响应、更明确的委派提示，以及跨代理工具的更细粒度权限控制。

---

## 7. 开发者痛点
1. **索引新鲜度与文件系统同步** – 文件搜索/提及索引过期需要重启是评论量最高的 Bug，降低了用户对 `@` 提及工作流的信任度。
2. **提供商可靠性与 payload 限制** – 上游提供商的间歇性 503 错误（尤其是大请求场景）以及静默重试，增加了调试成本并干扰工作流。
3. **状态与权限边界问题** – v2 共享服务中登录/登出后 API 密钥残留绑定，以及通过 execute 工具绕过权限的问题，同时带来了功能和安全风险。
4. **CLI 输出一致性** – JSON 运行输出缺失最终事件，导致自动化流水线和用量统计脚本异常。
5. **跨平台 UI 不一致** – Windows 目录选择器路径问题、PowerShell 未在项目目录中打开、嵌套 Markdown 双向文本渲染 bug，导致不同平台体验割裂。
6. **冷启动竞态条件** – 多个命令（`plugin list`、`mcp list`、`model list`、VCS API 端点）首次调用时返回空结果，因为异步初始化在调用完成后才结束。
7. **无障碍功能缺口** – 屏幕阅读器用户无法访问实时流式内容，给辅助技术用户造成了严重的使用障碍。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区简报 – 2026-10-12

## 1. 过去7天亮点
本周**Pi v1.1.0**正式发布，核心特性是通过OSC 7501为终端和Agent面板提供程序状态上报功能；同时推出的v1.0.3和v1.0.4补丁扩展了工具模式控制、Azure Foundry支持，并提升了MCP配置的灵活性。
连接可靠性仍是社区最关注的问题，关于`openai-codex`冻结、"Working…"状态卡住、特定服务商流式传输挂起的讨论帖评论量居高不下。生态方面，打包（deb/rpm Linux构建）、扩展生命周期控制和TUI优化也取得了显著进展。

---

## 2. 版本发布
- **v1.1.0** – 引入基于OSC 7501的**程序状态上报**功能；终端和面板现在可以显示Pi的运行状态：正在工作、因弹窗/登录阻塞、已完成或已失败。[文档](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md#program-status)
- **v1.0.4** – 为`--tools` / `--exclude-tools`添加**glob风格的工具模式**（例如`--tools read,codemode,'mcp__radius__*'`），支持感知MCP的工具过滤，新增`--no-mcp`参数可在单次运行中禁用MCP。
- **v1.0.3** – 扩展**Azure服务商**（原名为`azure-openai-responses`）以支持**Foundry Chat Completions**部署，首个支持模型为`azure/deepseek-v4-pro`。[文档](https://github.com/earendil-works/pi/blob/v1.0.3/packages/coding-agent)

---

## 3. 热门问题
1. **#4945 – openai-codex 连接可靠性问题**（开放中，82条评论，35 👍）  
   本周讨论最多的问题：`gpt-5.5`/codex会话会间歇性卡在"Working…"状态，无流式输出、无工具调用也无报错，必须按Escape中止。这是高级用户面临的主要稳定性痛点。  
   [链接](https://github.com/earendil-works/pi/issues/4945)

2. **#10031 – 用<esc>停止思考时，Pi偶尔会卡在"Working…"**（已关闭，28条评论，3 👍）  
   有用户反馈，ESC中断思考会导致TUI挂起，需要通过`pi -c`完全重启。从v0.84.0版本开始，多台机器上的用户都遇到了此问题；关闭表示修复已上线。  
   [链接](https://github.com/earendil-works/pi/issues/10031)

3. **#7553 – 可配置的上下文压缩思考级别/模型**（开放中，10条评论，3 👍）  
   这是一个长期被需求的功能：目前自动/手动上下文压缩会复用会话的思考预算，导致摘要的成本和质量与常规对话轮次绑定。标记为`待讨论`。  
   [链接](https://github.com/earendil-works/pi/issues/7553)

4. **#10267 – 无用户提示的运行会丢失before_agent_start的提示文本**（开放中，p0优先级，9条评论，4 👍）  
   严重的计费bug：扩展注入的`systemPrompt`/提示段落在后台任务、规划模式续跑、重试和恢复时会丢失，导致提示词被完整重发，产生额外费用。  
   [链接](https://github.com/earendil-works/pi/issues/10267)

5. **#10019 – Anthropic订阅请求在UTC整0分/30分时挂起**（开放中，8条评论，1 👍）  
   订阅用户反馈会出现周期性冻结：返回200响应和心跳，但无`message_start`，时间点与半小时整点的速率窗口相关。Claude Code中未观察到此问题。  
   [链接](https://github.com/earendil-works/pi/issues/10019)

6. **#9602 – 因遗漏早期思考消息导致的上下文压缩溢出**（开放中，bug，8条评论）  
   上下文压缩可能因包含了之前模型请求中已丢弃的思考消息而超出token限制——在本地Qwen3.8/llama.cpp会话达到输出上限时发现了此问题。  
   [链接](https://github.com/earendil-works/pi/issues/9602)

7. **#9512 – 使用最高推理级别的GPT-6 Astra时，上下文压缩达到摘要输出上限**（开放中，7条评论，2 👍）  
   上下文溢出恢复会间歇性失败，因为在`max`推理级别下，GPT-6 Astra的摘要会达到生成token上限。  
   [链接](https://github.com/earendil-works/pi/issues/9512)

8. **#10645 – 编译后的Bun可执行文件中resizeImage返回null**（开放中，进行中，6条评论）  
   自0.87.x版本引入的回归：由于Bun编译的`image-resize`问题，Windows独立二进制文件中所有图片附件都会被忽略，影响RPC模式主机。  
   [链接](https://github.com/earendil-works/pi/issues/10645)

9. **#9656 – Windows + Zellij环境下全屏时鼠标滚轮滚动的是提示历史而非对话记录**（开放中，bug，6条评论，4 👍）  
   TUI中与终端多路复用器交互的bug，仅在Windows → Alacritty → Zellij的环境下可复现；Linux/tmux和直接使用终端均正常。  
   [链接](https://github.com/earendil-works/pi/issues/9656)

10. **#10656 – DashScope/通义千问429 "insufficient_quota"被错误归类为不可重试的计费错误**（开放中，bug，4条评论）  
    阿里云的`insufficient_quota`错误码实际上是临时的TPS/TPM限流，而非配额耗尽——但Pi目前会直接失败而不重试。  
    [链接](https://github.com/earendil-works/pi/issues/10656)

---

## 4. 重点PR进展
1. **#10774 – fix(tui): 在herdr中启用kitty图片支持**（已关闭）  
   修复了1.1.0版本的一个回归：通过恢复kitty图形协议支持，修复了herdr面板中内联图片失效的问题（此前herdr错误地执行了Ghostty检查）。  
   [链接](https://github.com/earendil-works/pi/pull/10774)

2. **#10810 – fix(tui): 在CompactionStatusIndicator中支持覆盖colorFn选项**（已关闭）  
   修复了#10809；上下文压缩状态指示器现在遵循主题覆盖设置，并使用与工作状态指示器一致的推理级别配色。  
   [链接](https://github.com/earendil-works/pi/pull/10810)

3. **#10805 – feat(coding-agent): 支持扩展设置会话工作目录**（已关闭）  
   为`ctx.newSession()`添加`cwd`参数，为`ctx.switchSession()`添加`cwdOverride`参数，允许扩展将会话切换到Git工作树或其他目录。  
   [链接](https://github.com/earendil-works/pi/pull/10805)

4. **#10751 – feat(coding-agent): 使用pi.dev配置模式**（已关闭）  
   将配置模式的`$id`值迁移到pi.dev端点，并标准化模型/设置/快捷键/主题模式的发布流程。  
   [链接](https://github.com/earendil-works/pi/pull/10751)

5. **#10789 – feat(session): 合并会话JSONL写入的系统调用**（已关闭）  
   性能优化：缓冲的会话条目将通过单次系统调用写入，而非逐条写入，同时保留追加操作的同步持久性。  
   [链接](https://github.com/earendil-works/pi/pull/10789)

6. **#10784 / #10782 – feat(coding-agent): 添加Linux的deb和rpm包构建**（已关闭）  
   在发布流水线中添加原生`.deb`和`.rpm`构建支持，用户可在Debian/RHEL系统上通过dpkg/rpm管理安装，替代原有的shell安装脚本。  
   [链接 #10784](https://github.com/earendil-works/pi/pull/10784) · [链接 #10782](https://github.com/earendil-works/pi/pull/10782)

7. **#10766 – feat(coding-agent): 扩展中止后支持同次运行续跑**（已关闭）  
   扩展通过`message_update`在流式传输中中止时，现在可以保留后续待执行的工作，而非直接退出运行循环导致续跑任务丢失。  
   [链接](https://github.com/earendil-works/pi/pull/10766)

8. **#10747 – feat: 允许自定义Cloudflare AI Gateway域名和访问凭证**（开放中）  
   支持自托管/自定义Cloudflare AI Gateway端点和凭证，满足企业/自托管场景需求。  
   [链接](https://github.com/earendil-works/pi/pull/10747)

9. **#10672 – feat(ai,coding-agent): 仅列出密钥有权使用的OpenRouter模型**（开放中）  
   过滤OpenRouter模型列表，仅显示用户密钥可访问的模型，权限信息从`/models/user`接口获取并与Pi目录合并。  
   [链接](https://github.com/earendil-works/pi/pull/10672)

10. **#10739 – fix(coding-agent): 自定义消息启动的运行也会触发before_agent_start**（开放中）  
    修复了`pi.sendMessage(..., { triggerTurn: true })`会跳过`before_agent_start`的问题，该问题导致扩展添加的系统提示段落在首次工具调用后消失。  
    [链接](https://github.com/earendil-works/pi/pull/10739)

---

## 5. 热门讨论

### 问答 / 支持
- **#5572 – 如何注销Hugging Face模型服务商？**（5 👍）  
  用户希望`pi --list-models`和会话内的`/models`命令只显示已配置的服务商，而非所有内置服务商。  
  [链接](https://github.com/earendil-works/pi/discussions/5572)

- **#5936 – 为什么Pi不使用原生终端光标？**（3条评论，2 👍）  
  讨论Pi使用的自定义反相块光标与原生终端光标的区别，以及对主题和可访问性的影响。  
  [链接](https://github.com/earendil-works/pi/discussions/5936)

- **#4575 – Termux (安卓)：流式传输期间无法向上滚动的修复方法**（2 👍）  
  社区贡献的解决方案：将Termux更新到测试版可解决流式传输期间滑动滚动的问题。  
  [链接](https://github.com/earendil-works/pi/discussions/4575)

- **#6547 – 移动项目位置与会话相关问题**（2 👍）  
  用户寻求在Windows上将项目文件夹移动到新路径时，迁移`.pi`会话状态的指导。  
  [链接](https://github.com/earendil-works/pi/discussions/6547)

### 想法建议
- **#10632 – 在工具调用时暂停运行，等待人工批准或客户端结果返回**（2条评论，1 👍）  
  提议实现工具执行的持久化、无内存挂起功能，等待审批或客户端数据，状态持久化到磁盘。  
  [链接](https://github.com/earendil-works/pi/discussions/10632)

### 作品展示
- **#10069 – agent-chat：独立Pi代理的点对点消息传递**（3条评论）  
  该扩展让独立的Pi会话（通常位于不同工作树中）可以通过P2P消息传递进行协作，无需编排器。  
  [链接](https://github.com/earendil-works/pi/discussions/10069)

- **#10808 – Pippa：面向日常Pi任务的原生Mac界面**（1 👍）  
  一款新的MIT许可原生macOS应用，通过悬浮球UI提供Pi的拖放任务功能；基于`pi --mode rpc`构建。欢迎测试者参与。  
  [链接](https://github.com/earendil-works/pi/discussions/10808)

- **#10687 – Orbi：通过GitHub Issues无人值守运行Pi**（1 👍）  
  开源AGPL运行器：监控带有`ai-ready`标签的issue，在全新工作树中启动Pi会话，并提交带有独立审查会话的PR。  
  [链接](https://github.com/earendil-works/pi/discussions/10687)

- **#10581 – 通过models.json头信息设置每次`pi -p`运行的美元硬限额**（1 👍）  
  纯配置方案：利用`models.json`头信息中的`${VAR}`变量扩展，通过本地网关强制执行每次运行的预算上限。  
  [链接](https://github.com/earendil-works/pi/discussions/10581)

- **#10432 – Threshold：基于Pi构建的项目根级测试框架**（1 👍）  
  该框架可在独立的Pi会话之间持久化项目状态，支持检查点设置和工作进程间的任务交接。  
  [链接](https://github.com/earendil-works/pi/discussions/10432)

---

## 6. 功能需求趋势
1. **细粒度的上下文压缩控制** – 为上下文压缩/摘要提供专用的思考级别、模型和传输设置，与主会话解耦。
2. **服务商过滤与目录控制** – 隐藏未使用的服务商（如Hugging Face）、按密钥权限过滤OpenRouter模型，更好地控制`--list-models`的显示内容。
3. **持久化暂停与审批流** – 持久化工具调用状态，让运行可以等待人工批准或客户端数据，而无需占用内存。
4. **扩展生命周期与会话控制** – 中止后续跑、会话工作目录切换，以及扩展稳定的基础提示词追加功能。
5. **原生打包与平台优化** – Linux deb/rpm包、macOS原生UI实验，以及Termux/Windows多路复用器的TUI改进。
6. **MCP功能对齐** – 支持信息采集功能，更丰富的工具模式管理（`--tools` glob、`--no-mcp`）。

---

## 7. 开发者痛点
- **流式传输/卡住状态的可靠性**是首要痛点：`openai-codex`冻结、Anthropic订阅挂起规律、ESC中断思考挂起、无提示的输出上限停止，这些问题都会打断工作流，需要手动恢复。
- **上下文压缩的边界情况**在长会话中会快速累积：高推理级别下的输出token上限、之前被省略的思考消息导致的溢出、传输设置不匹配。
- **提示词/计费意外** – `before_agent_start`提示词丢失导致重复计费，以及服务商错误分类（DashScope 429）导致直接失败而非重试。
- **平台特定的TUI/UX bug** – Zellij/Windows中的鼠标滚轮行为、编译二进制文件中的图片渲染回归、CJK强调渲染，以及Termux滚动问题。
- **扩展集成脆弱性** – 缺少自定义消息触发运行的钩子、中止语义导致续跑丢失、依赖警告（如`node-domexception`）外泄。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周报 | 2026-10-12

---

## 1. 近 7 天亮点
本周 Qwen Code 项目发布了 v0.25.1 版本，覆盖核心 CLI、桌面端和 TypeScript SDK，无破坏性变更，重点优化了托管智能体（managed-agent）的健壮性、会话恢复能力及跨平台修复。社区围绕多智能体架构设计、Linux 发行版改进、Web Shell 可用性展开了活跃讨论；核心维护者则推进了 Hosted Agent Team 能力建设，并修复了一批 MCP 配置解析和内存压缩相关的 Bug。

---

## 2. 版本发布
近 7 天的所有版本均记录在 [QwenLM/qwen-code releases 页面](https://github.com/QwenLM/qwen-code/releases)。

### 稳定版
- **v0.25.1** — 官方稳定版。
  - 核心层：修复 Android Activity 重建后纯文本连接恢复、会话/工作空间路由校验问题；保留会话创建失败的诊断信息，便于调试。
  - 智能体层：修复远程 Host 替换逻辑，避免丢失已有绑定关系。
  - 桌面端：[desktop-v0.25.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.1) 与核心 v0.25.1 版本对齐。
  - TypeScript SDK：[sdk-typescript-v0.1.19](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.19) 内置 CLI v0.25.1。

### 预览版 / 每日构建版
- v0.25.1-preview.0 / preview.1 / preview.2 — 迭代预览版，主要验证智能体远程主机绑定修复（[#13430](https://github.com/QwenLM/qwen-code/pull/13430)）及合并后的测试覆盖率。
- v0.25.1-nightly.20261011.01d3e6d81a
- v0.25.0-nightly.20261010.9763580b84
- v0.25.0-nightly.20261009.085a44f336
- v0.25.0-nightly.20261007.8003d28042

---

## 3. 热门 Issue
1. **[#12380 — proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)**
   - 重要性：本周讨论热度最高的 Issue（53 条评论），定义了托管智能体的长期架构——将模型推理与工具提供分离，赋予会话持久所有权和工作空间绑定能力，并支持可恢复的工具执行。
   - 反响：在路线图各赛道（session-management、multi-agent、platform-distribution）均被广泛标记，是当前众多进行中 PR 的总纲。

2. **[#13004 — perf(memory): add a bounded cooldown after no-op extraction](https://github.com/QwenLM/qwen-code/issues/13004)**
   - 重要性：提出了一种节奏控制策略，避免在连续无操作（no-op）轮次后启动冗余的内存提取器，减少 Token 和算力浪费。
   - 反响：10 条评论；社区正在讨论策略的边界设定，以及如何区分合理的无操作与空闲时段。

3. **[#13492 — XML tool-call recovery drops outer calls containing quoted tool markup](https://github.com/QwenLM/qwen-code/issues/13492)**
   - 重要性：这是一个工具调用正确性的核心 Bug——当调用内部包含带引号的 XML 标记时，恢复过程会丢弃外层调用。
   - 反响：10 条评论；[#13515](https://github.com/QwenLM/qwen-code/pull/13515) 已完成部分修复，剩余工作在 [#13579](https://github.com/QwenLM/qwen-code/pull/13579) 中跟踪。

4. **[#13807 — "ERROR 500 An unsupported generation guide was used" with macOS Foundation Models as Fast Model](https://github.com/QwenLM/qwen-code/issues/13807)**
   - 重要性：导致 macOS 用户无法将 Apple 内置的 `fm serve` Foundation Models 用作生成任务的快速模型。
   - 反响：6 条评论；目前正在围绕 OpenAI 兼容端点处理、生成指南兼容性问题进行活跃调试。

5. **[#13680 — bug(desktop): vendored x64-linux ripgrep SIGSEGVs on every startup probe](https://github.com/QwenLM/qwen-code/issues/13680)**
   - 重要性：Linux 桌面端 P1 级 Bug——由于链接后 ELF 重写（RUNPATH $ORIGIN + 程序头移位），打包的 ripgrep 二进制文件在启动时崩溃。
   - 反响：4 条评论；该问题会导致 x64 Linux 桌面版的搜索/索引功能失效，优先级很高。

6. **[#13908 — Web Shell: 4-5 split panes exhaust per-origin HTTP/1.1 connection pool](https://github.com/QwenLM/qwen-code/issues/13908)**
   - 重要性：当用户打开 4-5 个分屏窗格时，会触发 "Connection lost: Fetch is aborted" 错误，因为 HTTP/1.1 单源 6 个连接的限制被耗尽。
   - 反响：3 条评论；直接影响使用分屏视图进行多会话工作流的重度用户。

7. **[#12444 — feat(web-shell): support pinning workspaces/projects to top of sidebar](https://github.com/QwenLM/qwen-code/issues/12444)**
   - 重要性：最受期待的 UI 功能——当前仅支持会话置顶，而跨多个仓库工作的用户希望支持工作空间级别的置顶。
   - 反响：7 条评论；另有重复 Issue [#13888](https://github.com/QwenLM/qwen-code/issues/13888) 被提交后关闭，足见需求强烈。

8. **[#13920 — fix(core): CJK teammate names collapse in sanitizeName (Agent Teams spawn)](https://github.com/QwenLM/qwen-code/issues/13920)**
   - 重要性：国际化 Bug——CJK（中日韩）团队成员名称会被清理为空字符串，导致模型只能生成拼音作为替代。
   - 反响：3 条评论；影响中日韩用户使用 Agent Teams 的体验。

9. **[#13925 — Release notes duplicates PRs released in previous releases](https://github.com/QwenLM/qwen-code/issues/13925)**
   - 重要性：发布工具问题——生成的更新日志会累积旧 PR，而非仅展示每个版本的新内容。
   - 反响：3 条评论；降低了最终用户阅读发布说明的质量和可读性。

10. **[#13597 — Subagent tool doesn't report error message to the main agent](https://github.com/QwenLM/qwen-code/issues/13597)**
    - 重要性：多智能体可靠性问题——子智能体失败（如超时）时仅返回通用的 "failed" 消息，导致主智能体无法调整限制，只能进行无效重试。
    - 反响：4 条评论；已通过传递详细错误上下文的修复关闭。

---

## 4. 重要 PR 进展
1. **[#13330 — fix(managed-agent): connector and broker robustness from the #12692 R2 review](https://github.com/QwenLM/qwen-code/pull/13330)**
   - 根据 R2 架构评审的结论，强化了托管智能体连接器和 broker 层；已纳入 v0.25.1 稳定版。

2. **[#13731 — fix(channels): preserve Markdown structure when splitting messages](https://github.com/QwenLM/qwen-code/pull/13731)**
   - 拆分钉钉/企业微信/普通 Markdown 长消息时，会在结构边界（链接、表格、代码块）处断开，而非从内容中间截断；目标长度 3800 单位，上限 20000 单位。

3. **[#13568 — fix(lsp): route file queries to applicable servers](https://github.com/QwenLM/qwen-code/pull/13568)**
   - 根据声明的扩展名/语言及解析后的工作空间路径，将文件级 LSP 操作路由到正确的就绪服务器，提升了多根工作空间/多 LSP 场景下的可靠性。

4. **[#13928 — feat(managed-agent): member board tools ride the session_command channel end to end (H4e-b3b)](https://github.com/QwenLM/qwen-code/pull/13928)**
   - 支持 Hosted Agent Team 成员通过持久化命令通道读写组长的任务看板，无需组长侧额外的模型轮次。

5. **[#13923 — feat(managed-agent): Stop Hosted team members with request_shutdown (H4e-b3a)](https://github.com/QwenLM/qwen-code/pull/13923)**
   - 实现了 `request_shutdown` 能力，Hosted 团队组长可优雅停止成员；为后续 H4e 批次的计划模式奠定基础。

6. **[#13816 — fix(managed-agent): hand back the Workspace mount when a tool turn goes recovery blocked](https://github.com/QwenLM/qwen-code/pull/13816)**
   - 新增 broker 内部的挂载释放端点，当工具轮次进入恢复阻塞状态时，释放托管工作空间会话的执行挂载，避免挂载泄漏。

7. **[#12513 — feat(serve): batch workspace session live-state snapshots](https://github.com/QwenLM/qwen-code/pull/12513)**
   - 新增只读端点，支持单次调用获取 1–20 个选定工作空间的实时会话快照，每个工作空间返回独立的成功/错误结果。

8. **[#11854 — feat: add hybrid code mode](https://github.com/QwenLM/qwen-code/pull/11854)**
   - 引入 `tools.mode` 枚举（`direct`、`code_mode`、`code_mode_only`），搭配与 Codex 对齐的 JavaScript `exec` 工具及嵌套工具声明，支持工具+代码混合工作流。

9. **[#13219 — fix(managed-agent): bound retry loops with terminal states](https://github.com/QwenLM/qwen-code/pull/13219)**
   - 为托管智能体栈中的每个异步重试循环设置了次数上限和终止状态，修复了投影永久卡住、永久性故障无限重试的问题。

10. **[#13642 — feat(runtime-broker): add bounded retention for terminal JDBC history](https://github.com/QwenLM/qwen-code/pull/13642)**
    - 新增可选的、有上限的 JDBC 清理机制，清理已退役绑定下的旧终端 Runtime Broker 历史记录；清理任务在独立调度器上运行，不影响恢复/发布/存储的核心权限。

---

## 5. 热门讨论
源数据中未提供 GitHub Discussions 相关内容，本节暂略。

---

## 6. 功能需求趋势
从本周的 Issue 中，可以看出三个清晰的功能方向：
1. **Web Shell 用户体验优化** — 工作空间/项目置顶（[#12444](https://github.com/QwenLM/qwen-code/issues/12444)）、会话概览和分屏视图的快捷键（[#13175](https://github.com/QwenLM/qwen-code/issues/13175)），以及更丰富的多窗格工作流。
2. **更广泛的平台分发** — 在 qwen.ai 提供官方桌面端下载并自动更新 README 链接（[#13656](https://github.com/QwenLM/qwen-code/issues/13656)）、Linux 平台上架 Flathub（[#13924](https://github.com/QwenLM/qwen-code/issues/13924)），以及更完善的 Linux 开箱即用打包。
3. **托管智能体与多智能体可扩展性** — 分阶段的双路径架构（[#12380](https://github.com/QwenLM/qwen-code/issues/12380)）、面向公共工作空间会话的前台 Shell 配置（[#13271](https://github.com/QwenLM/qwen-code/issues/13271)），以及 Agent Team 协作原语（看板工具、成员生命周期控制）。
4. **内存与语义召回增强** — 内存提取的无操作冷却限制（[#13004](https://github.com/QwenLM/qwen-code/issues/13004)），以及原生支持自托管、基于嵌入向量召回的语义内存（[#10684](https://github.com/QwenLM/qwen-code/issues/10684)）。

---

## 7. 开发者痛点
- **MCP 配置解析脆弱** — MCP 配置文件（[#13595](https://github.com/QwenLM/qwen-code/issues/13595)）和导入的 Claude 配置（[#13710](https://github.com/QwenLM/qwen-code/issues/13710)）中的 UTF-8 BOM 会导致静默加载失败，是 "MCP 不工作" 类报告的常见原因。
- **发布说明质量不佳** — 不同版本间 PR 条目重复（[#13925](https://github.com/QwenLM/qwen-code/issues/13925)），用户难以分辨新版本实际变更了什么。
- **Linux 桌面端可靠性** — x64 平台上 ripgrep 启动时段错误（[#13680](https://github.com/QwenLM/qwen-code/issues/13680)）、缺乏 Flathub/标准打包方式（[#13924](https://github.com/QwenLM/qwen-code/issues/13924)），影响 Linux 开发者体验。
- **多智能体可观测性与可恢复性不足** — 子智能体返回模糊错误（[#13597](https://github.com/QwenLM/qwen-code/issues/13597)）、会话重开时调度任务滞留、恢复阻塞轮次下的挂载泄漏，都增加了托管智能体部署的调试难度。
- **Web Shell 连接与体验打磨不足** — 多窗格视图下连接池耗尽（[#13908](https://github.com/QwenLM/qwen-code/issues/13908)）、自动回顾忽略用户设置（[#13911](https://github.com/QwenLM/qwen-code/issues/13911)）、缺少工作空间级置顶（[#12444](https://github.com/QwenLM/qwen-code/issues/12444)），都是常见的用户侧摩擦点。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*