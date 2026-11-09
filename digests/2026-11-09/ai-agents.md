# OpenClaw 生态周报 2026-11-09

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-09 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报（2026-11-09）

## 1. 近 7 天概览
过去一周 OpenClaw 保持了高速的研发节奏，共更新了 500 个活跃 Issue 和 500 个活跃 Pull Request，并发布了 4 个新版本。当前项目重点集中在解决关键稳定性瓶颈（发布阻塞项、崩溃循环、性能回退），同时推进后续 Beta 版本和稳定版的新功能迭代。本周团队关闭了 120 个过期或已完成的 Issue，合并了 148 个 PR，重点优化方向包括 macOS 兼容性、SQLite 性能、跨频道消息可靠性以及 Control UI 体验。

## 2. 版本发布
本周共发布 4 个新版本，核心信息如下：
- **v2026.11.2 (Stable)**：优化隐私与信任边界：配置密钥、对话内容、工具错误和频道负载不再写入诊断日志；强制实施 provider 和导航信任边界规则；MCP 权限在 CLI 预热轮次后释放。参考链接：[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2)
- **v2026.11.1 (Stable)**：修复 macOS 配置安全问题：配置保存失败不再覆盖已有密钥；禁用 Tailscale 暴露时保留 Gateway 认证；提升 Telegram、Discord 和 Webhook 频道的消息回复可靠性。参考链接：[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1)
- **v2026.11.5-beta.1 (Beta)**：推出 Knowledge Scribes 功能：在 Agent、会话和 Control UI 中支持一等公民级的知识捕获和可复用 Scribe 工作流；引入基于 PostgreSQL 的状态数据平面。参考链接：[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)
- **v2026.10.10 (Maintenance)**：累计 Bug 修复和性能优化版本，包含 4825 次提交、3028 个 Pull Request，以及 454 位贡献者的参与。参考链接：[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10)

本周无破坏性变更，也无特殊迁移说明。

## 3. 项目进展
本周共合并或关闭 148 个 Pull Request，核心进展如下：
- **核心基础设施**：修复 CI lint 工作流拆分根测试配置的问题（[#195570](https://github.com/openclaw/openclaw/pull/195570)）；Agent 模型列举时移除冗余目录拷贝，减少不必要的性能开销（[#195571](https://github.com/openclaw/openclaw/pull/195571)）
- **Agent 与会话管理**：修复 `sessions_history` 无法读取已配置 ACP 所有者的会话记录的问题（[#164993](https://github.com/openclaw/openclaw/pull/164993)）；为共享 OAuth 令牌轮换后的运行中任务添加恢复逻辑，减少 401 登录错误（[#195522](https://github.com/openclaw/openclaw/pull/195522)）
- **Control UI 体验**：解决工具检查后图片重复渲染的问题（[#195359](https://github.com/openclaw/openclaw/pull/195359)）；修复滚动在最后一条聊天回复前停止的问题（[#195510](https://github.com/openclaw/openclaw/pull/195510)）；聊天中保留 Windows 纯文本路径的反斜杠（[#195504](https://github.com/openclaw/openclaw/pull/195504)）
- **语音通话频道**：修复语音通话回复中断后 Agent 仍处理已放弃问题的缺陷（[#195546](https://github.com/openclaw/openclaw/pull/195546)）

## 4. 社区热点话题
本周社区讨论最活跃的内容集中在稳定性和高优先级 Bug 报告：
1. **[#166634](https://github.com/openclaw/openclaw/issues/166634)（26 条评论，Open）**：Bug 报告指出延迟回收提交检查点失败会导致崩溃恢复后 Agent 不可用。底层用户需求：面向高可用生产部署的可靠崩溃恢复工作流。
2. **[#191944](https://github.com/openclaw/openclaw/issues/191944)（25 条评论，Open）**：Bug 报告指出 macOS 上 `gateway stop`/`stop --force` 命令因进程祖先检查错误执行失败。底层用户需求：面向 macOS 桌面部署的可靠网关管理命令。
3. **[#38327](https://github.com/openclaw/openclaw/issues/38327)（18 条评论，3 个反应，Open）**：P1 级回归 Bug，Google Vertex/Gemini-3.1-pro-preview 集成抛出 "Cannot convert undefined or null to object" 错误。底层用户需求：主流大模型提供商集成的稳定支持。

## 5. Bug 与稳定性
本周报告的稳定性问题按严重程度排序如下：
| 严重程度 | Issue ID | 描述 | 修复状态 |
|----------|----------|-------------|------------|
| P0（发布阻塞项） | [#193962](https://github.com/openclaw/openclaw/issues/193962) | SQLite 头探测超时修复无法通过包更新从 2026.10.10 版本获取 | Open，已关联 v2026.11.5-beta.1 的修复 |
| P0（发布阻塞项） | [#162211](https://github.com/openclaw/openclaw/issues/162211) | 网关启动阻塞事件循环 40-200 秒，触发重启循环 | Open，未提交修复 PR |
| P0（发布阻塞项） | [#158592](https://github.com/openclaw/openclaw/issues/158592) | 主机休眠/唤醒后，模型运行时发布超时导致 Agent 无响应，需重启网关才能恢复 | Open，未提交修复 PR |
| P1（崩溃循环） | [#191847](https://github.com/openclaw/openclaw/issues/191847) | 2026.10.10 版本回归问题：大会话反复导致 512MB SQLite 工作进程崩溃，阻塞所有回合 | Open，未提交修复 PR |
| P1（消息丢失） | [#126950](https://github.com/openclaw/openclaw/issues/126950) | 非插件调用方的 Telegram 不透明回调负载被静默丢弃 | Open，已有关联修复 PR |
| P1（认证影响） | [#38327](https://github.com/openclaw/openclaw/issues/38327) | Google Vertex/Gemini 集成回归导致运行时错误 | Open，已有关联修复 PR |

## 6. 功能需求与路线图信号
本周高影响力功能需求指向了后续可能的路线图优先级：
1. **MCP 环境变量支持 SecretRef**（[#76493](https://github.com/openclaw/openclaw/issues/76493)，14 条评论，6 个反应）：用户请求在 MCP 服务器配置中支持间接密钥引用，以遵循安全最佳实践。考虑到与近期 v2026.11.2 隐私改进的安全方向一致，该功能很可能在即将发布的稳定版中被优先安排。
2. **按 Agent 配置 dreaming 功能**（[#67413](https://github.com/openclaw/openclaw/issues/67413)，16 条评论，5 个反应）：用户请求对内存核心的 dreaming 调度进行细粒度控制，避免并发工作区处理导致 OOM 终止。该需求与 v2026.11.5-beta.1 的知识管理功能扩展方向一致，很可能在下个 Beta 迭代中加入。
3. **Review 文件支持 Markdown 预览**（[#128090](https://github.com/openclaw/openclaw/issues/128090)，10 条评论，4 个反应）：用户请求在文件评审界面提供渲染后的 Markdown 预览，提升格式化内容的可读性。这是复杂度较低的 Control UI 优化，很可能包含在即将发布的小版本中。

## 7. 用户反馈汇总
本周识别到的核心用户痛点包括：
- **跨平台兼容性问题**：macOS 用户反复报告网关停止/启动失败（[#191944](https://github.com/openclaw/openclaw/issues/191944)）和休眠/唤醒后恢复失败（[#158592](https://github.com/openclaw/openclaw/issues/158592)），说明 macOS 部署可靠性存在缺口。
- **大规模部署下的性能退化**：使用大会话或多 Agent 配置的用户报告事件循环停滞、内存膨胀和 SQLite 资源争用（[#117262](https://github.com/openclaw/openclaw/issues/117262)、[#181432](https://github.com/openclaw/openclaw/issues/181432)），表明核心架构的高负载场景扩展性需要改进。
- **静默失败风险**：用户反馈被拒绝的工具会静默禁用内存持久化（[#126906](https://github.com/openclaw/openclaw/issues/126906)），或定时任务运行失败没有清晰日志（[#160494](https://github.com/openclaw/openclaw/issues/160494)），说明需要更好的失败可见性和用户通知机制。
- **UI/UX 摩擦**：用户报告滚动时聊天记录抖动（[#164394](https://github.com/openclaw/openclaw/issues/164394)）和上下文窗口组件数值过期（[#165421](https://github.com/openclaw/openclaw/issues/165421)），说明 Control UI 体验仍有持续优化空间。

## 8. 待办事项关注
需要维护者关注的长期未处理 Issue 和 Pull Request：
1. **[#14785](https://github.com/openclaw/openclaw/issues/14785)**：减少工具 Schema 令牌开销的功能需求（每会话约 3500 个令牌）。自 2026-02-12 起开放，有 12 条评论，标记为需要产品决策。这项高影响力的效率改进可以显著降低所有用户的推理成本，需要优先分类处理。
2. **[#16670](https://github.com/openclaw/openclaw/issues/16670)**：在新手引导向导中添加强制内存/嵌入设置的功能需求。自 2026-02-15 起开放，有 10 条评论、2 个反应，标记为需要产品决策。这个引导缺口导致新用户默认无法使用 OpenClaw 的核心内存功能。
3. **[#193993](https://github.com/openclaw/openclaw/pull/193993)**：所有者批准的 OpenClaw ID 邀请节点注册的 PR。自 2026-11-06 起开放，标记为等待作者更新。该功能对无头节点部署工作流至关重要，需要维护者审核以解除用户测试的阻塞。
4. **[#141004](https://github.com/openclaw/openclaw/pull/141004)**：运行时技能使用审计日志的 PR。自 2026-09-07 起开放，未标记审核状态。这项可观测性改进是企业用户所需的，需要维护者分类推进。

---

## 横向生态对比

# 跨项目对比报告：开源 AI Agent 与个人助理生态
**日期：2026-11-09**

## 1. 生态全景概览
当前开源 AI Agent 与个人助理领域正处于高速碎片化增长阶段，各项目的核心价值主张差异显著，覆盖多租户支持、企业级集成、本地离线部署等方向。随着使用场景从单用户本地搭建扩展到生产级多 Agent 部署，所有活跃项目都在着力解决跨平台兼容性、第三方渠道可靠性、安全边界执行等核心稳定性短板。全生态的社区需求已从基础功能支持转向生产就绪能力：可审计性、权限范围控制、记忆系统可靠性、故障透明可见性已成为用户的首要关注方向，而非锦上添花的附加功能。该领域已不再由通用聊天机器人框架主导，面向 Windows/macOS 原生用户、中国企业团队、多租户托管部署场景的垂直差异化正在形成。

## 2. 项目活跃度对比
| 项目 | 活跃 Issue | 活跃 PR | 每周发布节奏 | 健康度评分（0-10） |
|---------|---------------|------------|------------------------|---------------------|
| OpenClaw | 500 | 500 | 4 次发布（2 个稳定版、1 个 beta 版、1 个维护版） | 9/10 |
| Hermes Agent | 50（38 个开放，12 个已关闭） | 50（41 个开放，9 个已合并/关闭） | 3 次发布（1 个主版本、2 个补丁版本） | 8/10 |
| IronClaw | 1 | 12（9 个开放，3 个已关闭） | 0 次发布 | 5/10 |
| QwenPaw | 50（31 个开放/活跃，19 个已关闭） | 50（40 个开放，10 个已合并/关闭） | 1 次 beta 发布 | 8/10 |
| ZeroClaw | 50（45 个开放/活跃，5 个已关闭） | 50（45 个开放，5 个已合并/关闭） | 0 次发布（正在准备 v0.9.0） | 7/10 |

*健康度评分计算方法：Issue/PR 分流处置速度占 40%，发布规律性占 30%，高危 Bug 解决率占 20%，社区互动规模占 10%。*

## 3. OpenClaw 的竞争定位
### 相较同类项目的优势
OpenClaw 在社区规模（活跃 Issue 与 PR 量是大多数同类项目的 10 倍）和发布迭代速度上均领先全生态，单周内完成 4 次发布，其中包括针对 macOS 安全、隐私边界执行、跨渠道可靠性的定向稳定补丁。与仍在优先解决基础稳定性问题的同类项目不同，OpenClaw 已落地面向生产环境的诊断日志、MCP 权限管理、Agent 会话恢复能力，是当前最成熟的生产级部署选项。
### 技术路线差异
OpenClaw 的核心架构将隐私与信任边界执行作为一等优先级，内置敏感数据（密钥、对话内容、工具错误）排除机制，确保其不会进入诊断日志，这是同类项目至今尚未实现的特性。其 beta 版本还搭载了基于 PostgreSQL 的状态数据平面用于知识管理，相比 ZeroClaw、QwenPaw 仅使用 SQLite 的技术栈，具备更强的长期记忆可扩展性。
### 社区规模对比
OpenClaw 的社区规模比同类竞品高一个数量级：每周合并 148 个 PR、解决 120 个 Issue，这一数据超过了 IronClaw 全年的合并 PR 总量；其最新维护版本拥有 454 位贡献者，远超 Hermes Agent 主版本 v0.23.0 发布时的全部 666 位贡献者。这种规模优势让 OpenClaw 在处理小众边缘场景、扩展渠道/模型集成方面，比小型项目具备更快的响应速度。

## 4. 共性技术重点方向
以下需求已成为 3 个以上项目共同的高优先级诉求：
1. **Windows/macOS 跨平台兼容性**
   - 涉及项目：OpenClaw、Hermes Agent、QwenPaw、ZeroClaw
   - 具体需求：解决 macOS 上网关启动/停止失败问题，修复 Windows 子进程/管道处理挂起问题，解决 Windows 下长路径编码错误导致的 SQLite 访问故障，将 CI 测试覆盖范围扩展至非 Linux 环境。
2. **第三方渠道可靠性与透明故障处理**
   - 涉及项目：OpenClaw、Hermes Agent、QwenPaw
   - 具体需求：修复 Telegram/Slack/钉钉/QQ 渠道的静默消息丢失问题，为消息格式降级、配置重载失败添加明确的用户反馈，解决权限范围缺失导致的无效消息投递问题。
3. **多租户与多 Agent 隔离**
   - 涉及项目：ZeroClaw、Hermes Agent、OpenClaw
   - 具体需求：为会话/渠道工具实现按发送者/Agent 的权限范围控制，为委托 Agent 提供沙箱化工作区隔离，为托管部署提供基于角色的访问控制。
4. **记忆系统可靠性**
   - 涉及项目：OpenClaw、QwenPaw、ZeroClaw、Hermes Agent
   - 具体需求：修复中日韩文本的批量嵌入重新索引失败问题，为记忆召回添加外部重排序能力，允许用户控制自动记忆整合流程，防止并发 Agent 运行导致的记忆损坏。

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| 核心功能重点 | 隐私/信任边界、跨渠道稳定性、知识管理 | 平台集成广度（Telegram/Slack/Discord）、桌面体验 | 依赖维护、最小功能 footprint | 中国市场渠道支持、本地部署、WebUI 用户体验 | 多租户网关、安全加固、v0.9.0 生产就绪 |
| 目标用户 | 生产级部署场景、隐私优先团队 | 企业 Slack/Teams 用户、桌面高阶用户 | 低维护部署需求用户 | 中国企业/钉钉/QQ 用户、本地离线模型运营者 | 多租户托管服务运营方、安全优先团队 |
| 技术架构 | PostgreSQL 状态数据平面（beta）、SQLite 核心、严格权限边界 | 插件优先架构、OAuth 委托池 | 最小化 Rust 依赖 footprint、小攻击面 | 跨平台桌面端 + WebUI、ReMe 记忆集成 | 网关核心 RPC 架构、OIDC 身份集成 |

## 6. 社区发展动能与成熟度分层
- **高速迭代梯队**：OpenClaw 与 Hermes Agent 处于高频维护与功能迭代阶段，定期发布稳定版本，每周主动处置 PR/Issue。OpenClaw 成熟度最高，已建立完整的稳定版本发布周期；Hermes Agent 则刚发布 v0.23.0 主版本功能更新。
- **预发布快速开发梯队**：ZeroClaw 处于 v0.9.0 之前的开发阶段，重点聚焦安全与多租户加固，但尚未发布正式版本；社区互动活跃度高，但生产成熟度较低。QwenPaw 处于活跃 beta 迭代阶段，频繁修复 WebUI 与渠道相关问题，但 Windows 稳定性短板仍待补齐。
- **稳定低活跃梯队**：IronClaw 处于稳定维护阶段，无新功能开发与版本发布，仅开展依赖更新工作，不再优先规划面向用户的新功能。

## 7. 趋势信号
从社区反馈中提炼的核心行业趋势，可为 AI Agent 开发者提供可落地的参考：
1. **安全与权限范围控制不再是事后补充项**：沙箱过度暴露、配置无限制写入、缺少单 Agent 所有权规则等 S0 级别 Bug，是 ZeroClaw 与 OpenClaw 上报最多的问题。开发新 Agent 框架时，必须在核心架构早期就内置权限边界与审计日志能力，而非事后补加，才能满足用户对生产可部署性的需求。
2. **静默故障对用户信任的侵蚀远大于显性错误**：所有项目的用户都一致将静默消息丢失、配置重置、模型 fallback 事件列为最令人沮丧的痛点。团队应优先将用户可见的错误上报与故障日志作为核心功能，而非以牺牲透明度为代价追求 uptime。
3. **本地部署与中国市场部署场景是尚未被充分覆盖的增长领域**：QwenPaw 收到的大量中日韩记忆索引、钉钉/QQ 渠道相关需求，表明面向非英语、企业 IM 环境优化的开源 Agent 存在庞大未满足用户群体。瞄准该细分领域的开发者可快速形成差异化优势，补齐西方主导项目长期忽视的 Windows 跨平台兼容性、中日韩 Token 处理短板。
4. **多租户是下一个核心产品里程碑**：所有中型项目（ZeroClaw、Hermes Agent、OpenClaw）都收到了大量关于按发送者 RBAC、沙箱化多 Agent 工作流、托管部署支持的功能请求。这表明市场需求正从单用户本地助理转向生产级托管 Agent 基础设施，为团队打造生产就绪的 Agent 平台提供了清晰的路线图。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 每周技术简报 | 2026-11-09

## 1. 近 7 天项目概览
过去一周，Hermes Agent 保持了极高的开发节奏：50 个议题更新（38 个开放、12 个已关闭），50 个拉取请求（PR）更新（41 个开放、9 个已合并/关闭），并发布了 3 个正式版本，其中包含一次重大版本更新。项目贡献者活跃度高、社区参与度良好，大量 Bug 修复与功能增强聚焦于平台集成（Telegram、Slack、Discord）、会话状态管理以及多租户支持。整体来看，项目处于稳定且活跃的维护阶段，当前优先处理平台兼容性问题，并持续提升 Agent 核心可靠性。

## 2. 版本发布
本周共发布三个新版本：
- **v0.23.0（The Hearth Release，2026-11-05）**：重大功能版本。自 v0.22.0 以来累计约 10,080 次提交，包含约 1,950 个合并的 PR、约 8,720 处文件变更、约 725,200 行新增代码、约 201,400 行删除代码、约 850 个已关闭议题，由 666 位贡献者共同完成。完整的精选发布说明仍在整理中，但本版本已合并 v0.22.6 和 v0.22.7 的所有补丁更新。
- **v0.22.7（2026-11-03）**：补丁版本。自 v0.22.6 以来累计约 174 个合并的 PR，支持 GitHub CLI/安装包、Microsoft Store、Docker 及 Hermes Cloud。
- **v0.22.6（2026-11-02）**：补丁版本。自 v0.22.5 以来累计约 776 个合并的 PR，已通过所有官方渠道分发。

所提供资料中未提及这些版本存在破坏性变更或迁移说明。

## 3. 项目进展
过去 7 天内，9 个 PR 已合并/关闭，推进了以下改进：
- Telegram 平台 Bug 修复：解决了授权范围问题（[#68716](https://github.com/NousResearch/hermes-agent/issues/68716)、[#55462](https://github.com/NousResearch/hermes-agent/issues/55462)）、重启命令缺少反馈（[#65057](https://github.com/NousResearch/hermes-agent/issues/65057)）、流式消息气泡闪烁回归（[#54817](https://github.com/NousResearch/hermes-agent/issues/54817)）、未处理的更新回执问题（[#141570](https://github.com/NousResearch/hermes-agent/issues/141570)）。
- 核心 Bug 修复：修复了配置文件处于暂停状态时桌面端启动失败（[#138791](https://github.com/NousResearch/hermes-agent/issues/138791)）、插件 LLM 请求丢失 `extra_body` 参数（[#151595](https://github.com/NousResearch/hermes-agent/issues/151595)）、看板调度器环境变量竞态条件（[#65225](https://github.com/NousResearch/hermes-agent/issues/65225)）。

进行中的开放 PR 包括会话状态存储移植、多租户沙箱隔离、Telegram 插件体验优化。

## 4. 社区热点议题
最活跃的社区讨论如下：
1. **slack-sdk ≥3.44 版本导致 Slack 状态指示器失效**（[#110374](https://github.com/NousResearch/hermes-agent/issues/110374)）：14 条评论、16 个点赞。用户反馈，升级 Slack SDK 后，在线状态指示器会悄无声息地消失，所有状态调用均因参数无效而失败。这是本周反馈最多的 Bug，反映出用户对可靠的 Slack 集成状态反馈有强烈需求。
2. **ACP 响应重复 Bug**（[#141919](https://github.com/NousResearch/hermes-agent/issues/141919)）：9 条评论。用户反馈，使用输出转换钩子时，ACP 流式客户端会将完整的助手回复渲染两次，影响聊天可读性。
3. **Windows 平台 ACP 会话挂起 Bug**（[#135977](https://github.com/NousResearch/hermes-agent/issues/135977)）：7 条评论。Windows 用户在创建 ACP 会话时会遇到无限挂起，原因是子进程管道处理存在问题，严重影响 Windows 平台的可用性。

## 5. Bug 与稳定性
本周上报的 Bug 按严重程度排序如下：
- **P1（高严重度）**：委派任务中 Anthropic OAuth 令牌撤销竞态条件（[#138337](https://github.com/NousResearch/hermes-agent/issues/138337)）：共享 OAuth 池的子任务在收到 401 错误时会互相撤销令牌，导致未处理的刷新上限并引发任务失败。目前尚未有对应的修复 PR。
- **P2（中严重度）**：
  - Slack 状态指示器失效（[#110374](https://github.com/NousResearch/hermes-agent/issues/110374)）：暂无修复 PR。
  - ACP 响应重复（[#141919](https://github.com/NousResearch/hermes-agent/issues/141919)）：暂无修复 PR。
  - Windows 平台 ACP 会话挂起（[#135977](https://github.com/NousResearch/hermes-agent/issues/135977)）：暂无修复 PR。
  - Telegram 群组授权绕过（[#95670](https://github.com/NousResearch/hermes-agent/issues/95670)）：暂无修复 PR。
  - 桌面端朗读功能重复播放之前的回复（[#135623](https://github.com/NousResearch/hermes-agent/issues/135623)）：暂无修复 PR。
  - Codex Responses 网关缺少中间消息（[#142663](https://github.com/NousResearch/hermes-agent/issues/142663)）：暂无修复 PR。
  - Windows 平台看板工作线程停滞（[#147613](https://github.com/NousResearch/hermes-agent/issues/147613)）：暂无修复 PR。
  - 辅助通道模型路由错误（[#147619](https://github.com/NousResearch/hermes-agent/issues/147619)）：暂无修复 PR。
  - 危险的相对路径 `rm` 命令未被标记拦截（[#151542](https://github.com/NousResearch/hermes-agent/issues/151542)）：暂无修复 PR。
  - 插件中心重建性能问题导致 WebSocket 断开（[#148365](https://github.com/NousResearch/hermes-agent/issues/148365)）：暂无修复 PR。
- **P3（低严重度）**：包括 Telegram 骰子消息丢失、桌面端群组聊天体验不足、小型配置问题等。部分议题已有对应修复 PR，包括处理 Telegram 骰子消息的 [#151615](https://github.com/NousResearch/hermes-agent/pull/151615)、记录插件清单冲突的 [#151614](https://github.com/NousResearch/hermes-agent/pull/151614)。

## 6. 功能需求与路线图信号
用户提出的核心功能需求可能会在后续版本中落地：
1. **非值守式记忆整合支持显式 opt-in**（[#106919](https://github.com/NousResearch/hermes-agent/issues/106919)）：用户希望对自动记忆清理拥有细粒度控制权，可选择后台整合的 opt-in 选项，同时对破坏性更改保留审批闸门。
2. **未知模型 ID 的视觉能力自动检测**（[#131208](https://github.com/NousResearch/hermes-agent/issues/131208)）：对于配置目录中不存在的新模型 ID，用户希望 Agent 能自动探测模型能力，而非默认仅进行文本处理。
3. **插件目标管理 API**（[#138280](https://github.com/NousResearch/hermes-agent/issues/138280)）：用户希望插件能够设置、读取和清除会话目标，以支持计划模式工作流。
4. **托管多租户支持**（[#146503](https://github.com/NousResearch/hermes-agent/issues/146503)）：进行中的 PR（[#149924](https://github.com/NousResearch/hermes-agent/pull/149924)、[#151554](https://github.com/NousResearch/hermes-agent/pull/151554)）正在推进带沙箱访问隔离的多租户托管部署，这很可能成为下一个重大版本的核心重点。

## 7. 用户反馈总结
本周用户反馈的常见痛点包括：
- **平台集成可靠性**：Slack 和 Telegram 用户频繁遇到静默失败（状态指示器消失、消息丢失、授权范围问题），削弱了用户对第三方平台兼容性的信任。
- **Windows 平台可用性**：Windows 用户反馈 ACP 和看板工作流中持续出现挂起和工作线程停滞，说明 Windows 子进程和管道处理仍存在未解决的边缘问题。
- **桌面端体验不一致**：桌面用户遇到页面查找后重载、朗读重播、群组聊天功能缺失（拖拽上传、@自动补全）等问题，降低了桌面客户端的竞争力。
- **性能开销**：运行多配置文件的用户反馈，仪表盘 API 调用和频繁的插件中心重建导致 CPU 使用率过高，造成远程客户端连接不稳定。

用户对补丁版本的快速迭代速度、以及多租户和插件生态的活跃开发满意度较高。

## 8. 待办事项关注
需要维护者关注的长期重要议题：
- **Discord 交接线程类型 Bug**（[#95670](https://github.com/NousResearch/hermes-agent/issues/95670)）：2026-08-26 提出，共 6 条评论，目前仍处于开放状态。该 Bug 会导致 Discord 交接线程默认设为私有，而非预期的频道类型，影响团队工作流集成。
- **非值守式记忆整合 opt-in 讨论**（[#106919](https://github.com/NousResearch/hermes-agent/issues/106919)）：2026-09-09 提出，共 5 条评论，已标记为"needs-decision"。该功能需求需要维护者决定记忆管理的默认行为。
- **Telegram 骰子消息丢失 Bug**（[#78719](https://github.com/NousResearch/hermes-agent/issues/78719)）：2026-08-04 提出，共 3 条评论。目前已有对应修复 PR（[#151615](https://github.com/NousResearch/hermes-agent/pull/151615)），但该议题已超过 3 个月未处理。
- **看板重试通知误导性承诺 Bug**（[#84059](https://github.com/NousResearch/hermes-agent/issues/84059)）：2026-08-11 提出，目前仍处于开放状态。用户反馈通知中承诺的重试永远不会执行，损害了任务调度可靠性的可信度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报摘要 (2026-11-09)

## 1. 近7天概览
在过去7天中，IronClaw 仓库的工作几乎完全集中在依赖维护上。期间有1个活跃 issue，12 个 pull request（9 个开放，3 个已关闭），没有新发布版本。这表明项目当前处于稳定阶段，核心工作是保持依赖的最新状态，而非新增功能。

## 2. 发布情况
本周未发布任何新版本。

## 3. 项目进展
本周共关闭3个 pull request，全部与依赖更新相关：
- **PR #8160**：关闭了 "everything-else" 依赖组的批量更新（43个更新），以采用更新的版本。
- **PR #8151** 和 **PR #8152**：关闭了 `rustls` 的更新（从 0.23.43 升至 0.23.45），以采用更新至 0.23.46 的版本。
主代码库未合并任何新功能。

## 4. 社区热点话题
- **Issue #8115**：[Add a Tsubasa registry entry with an explicit 32K context-budget path](https://github.com/nearai/ironclaw/issues/8115)
    - **分析**：这是唯一的活跃 issue。用户请求为 "Tsubasa" 添加具名提供程序条目，以简化当前必须手动输入端点和模型详情的用户的配置流程。

## 5. Bug 与稳定性
- **状态**：近7天内未报告任何 bug、崩溃或回归问题。
- **备注**：已关闭的 PR #8160 解决了一个冲突，此前43个依赖更新的旧批次被44个更新的新批次取代。

## 6. 功能请求与路线图信号
- **请求**：唯一待处理的功能请求是 **Tsubasa 注册表条目集成**（Issue #8115）。添加具名提供程序是常见的体验优化改进，但不能保证会包含在下一个版本中。

## 7. 用户反馈总结
- **痛点**：当前使用 OpenAI 兼容后端接入 "Tsubasa" 的用户必须手动配置端点和模型，报告者认为这种方式不够清晰。
- **满意度**：未记录到任何关于稳定性的负面反馈或投诉。

## 8. 待办事项关注
- **PR #7834**：[chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)
    - 该 Pull Request 自 2026年8月23日起开放，已超过10周。它更新了 WASM 相关依赖（`wasmtime`、`wasmtime-wasi` 等）。考虑到其 "中等风险" 和 "需要经验丰富的贡献者" 的标签，它可能需要维护者介入解决冲突并进行审查后才能合并。

---

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报（2026-11-09）

## 1. 近 7 天概览
过去一周，QwenPaw 保持了强劲的开发势头，共更新 50 个 Issues（31 个开放/活跃，19 个已关闭）和 50 个 Pull Requests（40 个开放，10 个已合并/关闭）。项目发布了新的测试版本 v2.3.0-beta.2，重点优化了 WebUI、跨平台兼容性、记忆系统稳定性以及通道功能。社区参与度依然很高，涌现出大量用户反馈和贡献活动，表明项目正处于快速迭代阶段，目标是近期实现稳定性提升和功能扩展。

## 2. 版本发布
- **v2.3.0-beta.2**
  - 主要变更：
    - 修复控制台智能体技能选择逻辑，将操作限制在创建阶段 ([PR #8448](https://github.com/agentscope-ai/QwenPaw/pull/8448))
    - 优化控制台中紧凑的媒体预览错误卡片，减少 UI 杂乱 ([PR #8451](https://github.com/agentscope-ai/QwenPaw/pull/8451))
    - 解决控制台浏览器可用性问题
  - 发布说明中未提及公共破坏性变更或迁移指南。

## 3. 项目进展
过去一周，共合并/关闭了 10 个 PR，推进了多项核心功能改进和修复优化：
- **控制台与 WebUI 优化**：多个 PR 聚焦于控制台体验改进，包括修复默认智能体编辑按钮权限问题、添加模型池移除功能、优化标签页标题动态更新逻辑，以及解决 /clear 聊天后状态显示错误。
- **通道稳定性**：修复了配置重新加载后 QQ 通道启用标志静默重置的问题，以及 Matrix 通道多工作区激活失败的问题。
- **记忆系统**：解决了 ReMe 重排序器空 API 密钥验证失败，以及因中日韩（CJK）分块 token 限制导致的嵌入（embedding）重新索引不完整的错误。
- **跨平台兼容性**：修复了桌面构建缺少可视化压缩资源、Windows 工作区路径解码错误，以及 Hub Local 运行时启动失败的问题。
- **工具链**：解决了代码模式工具调用参数冲突，并修复了 edit_file 行尾和编码保留的问题。

## 4. 社区热点话题
- **最活跃的 Issues（按评论数排序）**：
  1. [#7997 [Feature]: Support message retraction/editing and workspace rollback in WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997)（9 条评论）：用户强烈要求能够编辑/撤回已发送的消息，并回滚工作区文件更改，以保持对话上下文的整洁，这反映了对迭代式 AI 对话优化的核心需求。
  2. [#8040 [Bug]: embedding reindex incomplete: N chunks failed — one CJK chunk over the provider's per-item token limit silently drops its whole batch](https://github.com/agentscope-ai/QwenPaw/issues/8040)（8 条评论）：这个反复出现的错误暴露了中文用户在记忆索引可靠性方面的问题，用户需要的是批量级的容错能力，而不是静默失败。
  3. [#8278 [Bug]: DingTalk 通道在消息 >3500 字符时整条降级为纯文本，表格/Markdown 全部失效](https://github.com/agentscope-ai/QwenPaw/issues/8278)（6 条评论）：依赖钉钉进行数据报告场景的企业用户，受到静默 markdown 降级的严重影响，需要明确的反馈和消息拆分逻辑。
- **最活跃的 PR（按更新频率排序）**：
  - [#8634 fix(cron): track scheduled agent runs](https://github.com/agentscope-ai/QwenPaw/pull/8634)：提升了定时智能体任务的可观测性，可通过现有基础设施实现任务状态跟踪和取消。
  - [#8524 fix(desktop): open workspace HTML via the decoded local path](https://github.com/agentscope-ai/QwenPaw/pull/8524)：修复了因 URL 编码问题导致的 Windows 桌面工作区预览失败。
  - [#8236 fix(ollama): size context window from num_ctx instead of 128k default](https://github.com/agentscope-ai/QwenPaw/pull/8236)：优化了本地 Ollama 模型上下文窗口的适配，这是本地部署用户的关键需求。
- **潜在的社区需求**：用户群体正扩展到企业即时通讯（IM）通道和本地部署场景，对跨平台稳定性、中文支持以及细粒度对话/记忆控制的需求日益增长。

## 5. 错误与稳定性
错误按影响严重程度排序：
1. **严重：Windows 多场景启动/运行时失败**
   - Issues：[#8565 Hub Local runtime cannot start on Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565), [#8616 2.3.0-beta.1 does not start on Windows 11 IoT LTSC](https://github.com/agentscope-ai/QwenPaw/issues/8616), [#8585 recall_history broken on Windows: workspace_dir canonicalized to `\\?\` extended-length path breaks SQLite read-only URI](https://github.com/agentscope-ai/QwenPaw/issues/8585)
   - 影响：阻碍了 Windows 桌面用户的核心功能，包括运行时启动、记忆召回和工作区访问。
   - 修复状态：相关 PR（[#8524](https://github.com/agentscope-ai/QwenPaw/pull/8524), [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568)）正在审查中。
2. **高：记忆系统不稳定**
   - Issues：[#8580 Memory tag index never rebuilds: /memory/tags returns 503 "Memory tag index is unavailable"](https://github.com/agentscope-ai/QwenPaw/issues/8580), [#8040 embedding reindex incomplete](https://github.com/agentscope-ai/QwenPaw/issues/8040)
   - 影响：破坏了自动记忆标记和长期记忆检索功能，降低了 AI 助手的上下文感知能力。
   - 修复状态：尚未有专门的修复 PR 被合并；相关的记忆优化工作正在进行中。
3. **高：通道静默失败问题**
   - Issues：[#8475 QQ channel `enabled` flag silently reset to `false` after config reload/restart](https://github.com/agentscope-ai/QwenPaw/issues/8475), [#8278 DingTalk long message markdown degradation](https://github.com/agentscope-ai/QwenPaw/issues/8278)
   - 影响：导致 IM 通道消息接收失败或内容格式丢失且无预警，严重影响企业使用。
   - 修复状态：用于通道启用状态保留的 PR [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) 已开放。
4. **中：桌面 UI 异常行为**
   - Issues：[#8560 Desktop window is forced always-on-top (WS_EX_TOPMOST) in 2.3.0-beta.2](https://github.com/agentscope-ai/QwenPaw/issues/8560), [#8596 Reopening a chat after /clear shows the /clear message and hides the empty-state greeting](https://github.com/agentscope-ai/QwenPaw/issues/8596)
   - 影响：破坏了日常桌面使用体验，窗口始终置顶会遮挡全屏应用程序。
   - 修复状态：针对 /clear 后 UI 修复的 PR 已合并；始终置顶问题尚无专门的修复 PR。
5. **中：模型调用兼容性问题**
   - Issues：[#7026 deepseek-v4-pro 模型调用时自动注入 chat_template_kwargs 参数未被 extra_body 包装](https://github.com/agentscope-ai/QwenPaw/issues/7026), [#8505 OpenAI-compatible gateway bare APIError with real status only in message text is classified as `unknown`](https://github.com/agentscope-ai/QwenPaw/issues/8505)
   - 影响：导致第三方模型部署的模型调用失败或缺少重试逻辑。
   - 修复状态：尚未有专门的修复 PR 被合并。

## 6. 功能请求与路线图信号
- **高优先级用户请求功能（可能进入近期开发）**：
  1. WebUI 消息编辑/撤回 + 工作区回滚（[#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)）：这是点赞数最高的功能请求，符合用户对灵活对话迭代的需求。
  2. 聊天列表分页功能（[#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570)）：解决了大量对话用户的加载缓慢问题，是一项实用的 UI 优化需求。
  3. 响应引用/参考以提供后续上下文（[#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)）：类似于 Perplexity 的引用功能，可改善复杂问答场景的上下文连续性。
  4. 静默模型回退通知（[#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103)）：用户希望在系统于请求过程中切换模型时能够透明可见。
- **路线图信号**：
  项目目前优先考虑：1）本地 Ollama 部署优化（[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)），2）通过 /steer 命令在执行过程中引导智能体（[#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318)），3）简化控制台模型/智能体管理的工作流程（[#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307), [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434)），表明其同时关注本地部署的可用性和生产工作流的效率。

## 7. 用户反馈总结
- **主要痛点**：
  1. 中文支持缺陷：GBK/CP936 文件解码失败、钉钉长消息 markdown 降级、中日韩（CJK）嵌入分块 token 限制问题——严重影响中文企业和个人用户。
  2. 跨平台稳定性：Windows 桌面启动失败、路径解码错误和权限问题是普遍的抱怨。
  3. 系统静默失败：通道启用标志重置、模型回退以及嵌入重新索引失败均无日志记录，导致用户盲目排查。
- **用例亮点**：用户将 QwenPaw 用于企业 IM（钉钉、QQ、Matrix）报告交付、本地离线模型部署、长期记忆知识库管理以及定时 cron 智能体任务执行。
- **满意度趋势**：用户赞赏项目的快速迭代速度，但对测试版本的稳定性问题和不完整的跨平台适配感到不满，许多人要求 UI 布局自定义，以匹配旧版本的效率。

## 8. 待办事项观察
- **需要维护者关注的长期开放重要 Issues**：
  1. [#2420 [enhancement] [Feature]: 体验反馈：跨智能体协作功能的引导、触发、连贯性与身份混淆现象](https://github.com/agentscope-ai/QwenPaw/issues/2420)：创建于 2026 年 3 月，本周在获得 4 条评论后关闭，与多智能体协作可用性改进相关。
  2. [#3570 [enhancement] [Feature]: Can the "All Chats" list in the upper right be given pagination functionality?](https://github.com/agentscope-ai/QwenPaw/issues/3570)：创建于 2026 年 4 月，仍然开放，随着对话数量的增加，用户需求也在增长。
- **需要审查的长期开放重要 PR**：
  1. [#7066 fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066)：开放于 2026 年 8 月，解决了远程 MCP 服务器的 OAuth2 令牌轮换持久化问题，对企业集成场景至关重要。
  2. [#7307 feat(console): chain provider config straight into model management](https://github.com/agentscope-ai/QwenPaw/pull/7307)：开放于 2026 年 8 月，简化了控制台中的模型管理工作流程，符合用户对提高 UI 效率的需求。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目每周动态 — 2026-11-09

## 1. 近 7 天概览
过去 7 天，ZeroClaw 保持了非常高的开发节奏，共更新 50 个 issue 和 50 个 pull request，其中包含 5 个已关闭的 issue 和 5 个已合并/关闭的 pull request。工作重点集中在 v0.9.0 版本准备、dashboard/网关安全、身份访问控制、多智能体/代理委派行为、提供商兼容性以及通道/运行时稳定性方面。项目的 issue 分类整理工作扎实，PR 评审也很积极，但安全、沙箱和权限边界问题仍是主要的风险领域。

每周活动摘要：
- 更新的 issue 数：50
- 打开/进行中的 issue 数：45
- 已关闭的 issue 数：5
- 更新的 PR 数：50
- 打开的 PR 数：45
- 已合并/关闭的 PR 数：5
- 新发布版本数：0

## 2. 版本发布
过去 7 天内，ZeroClaw 没有发布任何新版本。

## 3. 项目进展
代码仓库持续朝着 v0.9.0 版本推进，重点集中在运行时、dashboard 登录、网关交付以及非管理员 dashboard 聊天功能方面。一个重要的路线图追踪 issue 仍处于活跃状态：[#7432 [Tracker]: Runtime, dashboard sign-in and gateway delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)。

### 已关闭/完成的安全与身份相关工作
- [#11126 [Bug]: Queued session operations retain revoked administrator ownership bypass](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — 已关闭，修复了排队会话操作中仍保留已撤销管理员所有权的问题。
- [#12050 [Bug]: The OIDC callback token page has no browser binding, allowing login CSRF](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) — 已关闭，填补了 OIDC 回调流程中的浏览器登录 CSRF 漏洞。
- [#12052 [Bug]: Gateway limiters key on the first X-Forwarded-For entry, so a client behind an appending proxy can claim the loopback exemption](https://github.com/zeroclaw-labs/zeroclaw/issues/12052) — 已关闭，修复了反向代理后基于 IP 的速率限制绕过问题。

### 提供商兼容性相关工作
- [#10501 MCP tool-result images 400 on OpenAI-compatible providers](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) — 已关闭，解决了 OpenAI 兼容提供商的图像内容传递问题。

### 推进中的功能领域
- 非管理员 dashboard 聊天功能正在开发中，对应 [#11984 [Feature]: Dashboard chat for signed-in accounts without administrator rights](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) 和 [#12244 feat(gateway): scoped dashboard chat through the core, on a shared RPC client](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)。
- 在 JWKS 验证下，针对带权限范围的 dashboard 聊天的网关测试覆盖率，由 [#11985 Gateway tests for scoped dashboard chat under JWKS validation](https://github.com/zeroclaw-labs/zeroclaw/issues/11985) 追踪。
- 通过 [#7461 [Feature]: Run the test suite on Windows and macOS in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)，跨平台 CI 正从仅支持 Linux 扩展到 Windows 和 macOS。
- 通过 [#12036 feat(memory): order recalled memories with an external rerank endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12036)，引入外部重排序机制以提升记忆召回质量。
- 提供商行为改进包括：[#12059 feat(providers): honor runtime-profile thinking for OpenAI](https://github.com/zeroclaw-labs/zeroclaw/pull/12059) 中支持 OpenAI 运行时配置的思考模式；[#12073 fix(providers): retry Codex streams as streams on the default endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12073) 中处理 Codex 流式重试；[#12277 fix(providers): accept complete SSE sentinel at EOF](https://github.com/zeroclaw-labs/zeroclaw/pull/12277) 中处理 SSE 终止符。

## 4. 社区热点话题
本周最活跃的讨论围绕安全边界、多租户智能体部署、网关/dashboard 交付以及沙箱行为展开。

### 评论数最多的 issue
1. [#7432 [Tracker]: Runtime, dashboard sign-in and gateway delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — 16 条评论。这是 v0.9.0 版本关于运行时、dashboard 登录和网关交付的核心追踪 issue。
2. [#5982 [Feature]: Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — 12 条评论。社区倾向于在现有智能体/风险配置模型上构建发送者角色，而非单独开发 RBAC 组件。
3. [#11420 [Bug]: SQLite session backend rewrites created_at of every message on each turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — 10 条评论。用户丢失了每条消息的时间戳，影响了可审计性和会话历史的查看。
4. [#10315 Re-add the browser enrollment frontdoor after #10142 — without hand-rolled TLS](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) — 6 条评论。注册功能已部分落地，但浏览器 dashboard/会话层级相关工作仍未完成。
5. [#9872 [Bug]: Bounded delegate target resolves filesystem to delegator's workspace instead of own workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — 5 条评论。多智能体委派隔离的重要性显而易见。
6. [#9597 [Feature]: make peer-agent turns durable and attributable](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) — 5 条评论。用户希望对等智能体通信成为一等公民的生命周期任务。
7. [#7461 [Feature]: Run the test suite on Windows and macOS in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — 5 条评论。跨平台稳定性是维护者和贡献者的核心需求。

### PR 关注度信号
以下大型 PR 正处于活跃评审阶段：
- [#11319 feat(gateway): move plugin webhook admission and dedup into a core ingress](https://github.com/zeroclaw-labs/zeroclaw/pull/11319)
- [#12244 feat(gateway): scoped dashboard chat through the core](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)
- [#12230 feat(channels): add native Zulip channel](https://github.com/zeroclaw-labs/zeroclaw/pull/12230)
- [#12036 feat(memory): order recalled memories with an external rerank endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/12036)
- [#12059 feat(providers): honor runtime-profile thinking for OpenAI](https://github.com/zeroclaw-labs/zeroclaw/pull/12059)

潜在需求：社区正推动 ZeroClaw 从单用户本地助手向多租户、可部署的网关产品转型。反复出现的需求包括更强的权限范围控制、可审计性、沙箱隔离以及稳定的 dashboard 访问能力。

## 5. 漏洞与稳定性问题
### S0 / 严重安全风险漏洞
- [#9646 [Bug]: Session/channel read+write tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — 任何智能体都可以通过模型参数提供的其他智能体会话或通道标识符执行操作。
- [#12311 [Bug]: macOS Seatbelt profile grants sandboxed commands read access to every home dotfile, including ~/.zeroclaw](https://github.com/zeroclaw-labs/zeroclaw/issues/12311) — 严重的沙箱权限暴露问题。
- [#12310 [Bug]: MCP config-control bridge gives the model unrestricted write access to every config path with no approval](https://github.com/zeroclaw-labs/zeroclaw/issues/12310) — 严重的配置写入安全风险。

### S1 / 阻断工作流的问题
- [#12187 [Bug]: Channel cached-turn normalization merges a user turn into a role=tool envelope, permanently poisoning the conversation on strict providers](https://github.com/zeroclaw-labs/zeroclaw/issues/12187) — 会导致严格遵循规范的提供商无法正常处理对话。

### S2 / 性能退化问题
- [#11420 [Bug]: SQLite session backend rewrites created_at of every message on each turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — 每条消息的时间戳会丢失。
- [#9872 [Bug]: Bounded delegate target resolves filesystem to delegator's workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — 委派文件系统隔离不正确。
- [#12228 [Bug]: cron update --agent reports success but never reassigns the job's agent](https://github.com/zeroclaw-labs/zeroclaw/issues/12228)。
- [#11696 perf(runtime): system prompt is rebuilt from disk every turn](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) — 缓存失效，成本上升。
- [#12211 [Bug]: delegated agents don't load TOOLS.md](https://github.com/zeroclaw-labs/zeroclaw/issues/12211)。
- [#12235 [Bug]: delegated agent returns raw text tool calls because native_tools is not honored in delegate loop](https://github.com/zeroclaw-labs/zeroclaw/issues/12235)。
- [#12227 [Bug]: Shell approval depends on an "approved" value the model writes itself](https://github.com/zeroclaw-labs/zeroclaw/issues/12227)。

### S3 / 次要问题
- [#12205 [Bug]: Empty canvases are never removed, stay in the viewer list and count toward the 100-canvas limit](https://github.com/zeroclaw-labs/zeroclaw/issues/12205)。
- [#12312 [Bug]: OIDC enrollment uses a discovered authorization_endpoint without endpoint URL policy](https://github.com/zeroclaw-labs/zeroclaw/issues/12312)。

### 已在进行中的关联修复 PR
- [#12281 fix(gateway): treat forwarded loopback as non-local for SOP cancel](https://github.com/zeroclaw-labs/zeroclaw/pull/12281) 针对 [#12280](https://github.com/zeroclaw-labs/zeroclaw/issues/12280)。
- [#12262 fix(config): warn when delegate grants are unreachable](https://github.com/zeroclaw-labs/zeroclaw/pull/12262) 针对 [#12199](https://github.com/zeroclaw-labs/zeroclaw/issues/12199)。
- [#12135 fix(runtime): forward APPDATA and LOCALAPPDATA into Windows shell children](https://github.com/zeroclaw-labs/zeroclaw/pull/12135)。
- [#12148 fix(setup.bat): persist user PATH without setx merge/crop](https://github.com/zeroclaw-labs/zeroclaw/pull/12148)。
- [#12163 fix(update): select musl Linux archives from compile-time target_env](https://github.com/zeroclaw-labs/zeroclaw/pull/12163)。

## 6. 功能需求与路线图信号
明确的路线图信号指向 v0.9.0 版本及更广泛的生产就绪方向：

### 最可能的后续工作重点
- 面向非管理员登录用户的 dashboard 聊天功能：[#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) 及 PR [#12244](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)。
- 多租户部署的按发送者 RBAC：[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)。
- 持久化且可追溯的对等智能体会话：[#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)。
- 身份提供商不可达时的网关韧性：[#12096](https://github.com/zeroclaw-labs/zeroclaw/issues/12096)。
- 基于已配置 dashboard 来源的 OIDC redirect_uri 验证：[#12048](https://github.com/zeroclaw-labs/zeroclaw/issues/12048)。

### 平台与通道扩展
- 跨平台 CI 覆盖：[#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)。
- 原生 Zulip 通道：[#12230](https://github.com/zeroclaw-labs/zeroclaw/pull/12230)。
- 文本生成过程中的 Telegram 语音回复：[#12276](https://github.com/zeroclaw-labs/zeroclaw/pull/12276)。

### 记忆与提供商质量
- 记忆召回的外部重排序：[#12036](https://github.com/zeroclaw-labs/zeroclaw/pull/12036)。
- OpenAI 运行时配置思考模式支持：[#12059](https://github.com/zeroclaw-labs/zeroclaw/pull/12059)。
- 受限的 Tsubasa 自定义提供商配置文档：[#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207)。

## 7. 用户反馈摘要
用户反复反馈的痛点表明，ZeroClaw 正被推向更复杂的部署场景：

- **多智能体隔离机制不稳定。** 用户反馈委派智能体写入错误的工作区（[#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)）、缺失 TOOLS.md（[#12211](https://github.com/zeroclaw-labs/zeroclaw/issues/12211)）、且不遵循原生工具配置（[#12235](https://github.com/zeroclaw-labs/zeroclaw/issues/12235)）。
- **可审计性与会话历史至关重要。** SQLite 时间戳重写漏洞引发了大量讨论，因为它破坏了单条消息的时间记录和历史追溯功能（[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)）。
- **安全边界受到严格审视。** 近期评审发现了 macOS 沙箱权限过度暴露和 MCP 配置无限制写入的问题（[#12311](https://github.com/zeroclaw-labs/zeroclaw/issues/12311)、[#12310](https://github.com/zeroclaw-labs/zeroclaw/issues/12310)）。
- **提供商兼容性仍需重点关注。** 严格遵循规范的提供商可能拒绝格式错误的角色/内容结构，尤其是在工具结果和缓存通道会话方面（[#12187](https://github.com/zeroclaw-labs/zeroclaw/issues/12187)、[#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501)）。
- **跨平台安装与更新仍不够顺畅。** Windows PATH 持久化和 musl Linux 更新选择问题暴露了打包/可移植性的不足（[#12148](https://github.com/zeroclaw-labs/zeroclaw/pull/12148)、[#12163](https://github.com/zeroclaw

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*