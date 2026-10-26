# OpenClaw 生态周报 2026-10-26

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-26 01:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报
**报告日期**：2026-10-26 | **代码仓库**：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

## 1. 近7天项目概览
本周 OpenClaw 开发保持高速推进，共更新 500 个 Issue 与 500 个 Pull Request，其中稳定版与测试版合计发布 5 个新版本。当前开发重点集中在性能优化、安全加固，以及面向 Windows 与 PostgreSQL 部署场景的平台可靠性修复。项目仍有大量未处理的高危待办事项：共有 397 个处于开启状态的 Issue、220 个待维护者评审的开放 PR。社区活跃度处于较高水平，多个关键缺陷收到受影响用户的数百条评论反馈。

## 2. 版本发布
本周共发布 5 个新版本，分为稳定维护与测试开发两条发布线：
- **[v2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7)**（稳定版）：引入可安全重放的会话恢复机制，为中断的会话保留恢复溯源信息，并留存未完成的工具调用结果以避免数据丢失。已终止的会话在接收新消息前会正确清理终端恢复残留，被拒绝的 Claude CLI 草稿不会进入最终回复。
- **[v2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34)**（扩展稳定版/长期支持版等价版本）：仅面向网关的发布版本，将关键安全更新、可靠性修复、性能优化与新模型支持回移植到 2026 年 9 月的代码基线。
- **[v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6)**（稳定版）：**破坏性变更**——要求 Node 版本达到 24.22.1+（24.x 分支）或 26.12.1+（26.x 分支），以修补 2026 年 10 月 Node.js 安全公告中披露的 TLS 漏洞。Docker 镜像已预先配置完成补丁的 Node 运行时，可直接使用。
- **[v2026.10.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3)**（测试版）：改进 Windows 平台可靠性，包括恢复全新状态初始化与网关启动能力、应用更新过程中隐藏 SQLite 辅助窗口、容忍强制重装网关时启动器时间戳的稳定过程。
- **[v2026.10.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.2)**（测试版）：工作区安全修复，当后续更新目标缺失或上下文不匹配时，会在文件变更前拒绝多文件 `apply_patch` 操作，保留原始工作区以便重试。

**升级注意事项**：使用 2026.10.x 稳定版线的用户，在部署 v2026.10.6 及之后版本前，必须将 Node 运行时升级到上述最低版本要求。使用扩展稳定版 2026.9.x 线的用户，可升级至 v2026.9.34 获取关键安全补丁，且不会引入功能变更。

## 3. 项目进展
近7天共有 280 个 PR 被合并或关闭，开发工作围绕三大核心方向推进：
- **性能优化**：多个已合并 PR 聚焦降低内存分配、加速工作负载：
  - [PR #184001](https://github.com/openclaw/openclaw/pull/184001)：移除私有排序清单的冗余拷贝，降低技能优先级检查与插件健康上报的开销。
  - [PR #183997](https://github.com/openclaw/openclaw/pull/183997)：仅采集必要的主机利用率指标，而非全量每核数据，将 Linux 网关的 CPU 采样开销降低 60%。
  - [PR #184002](https://github.com/openclaw/openclaw/pull/184002)：消除 Discord、Slack、X 通道消息渲染流水线中的冗余数组拷贝。
- **缺陷修复**：关闭了一系列关键平台与工作流问题：
  - [PR #183713](https://github.com/openclaw/openclaw/pull/183713)：为初始化交接过程中偶发的仪表盘获取超时增加重试机制，避免网关响应缓慢导致初始化流程失败。
  - [PR #181534](https://github.com/openclaw/openclaw/pull/181534)：关闭看板对话框后恢复键盘焦点，满足无障碍访问规范要求。
  - [PR #183623](https://github.com/openclaw/openclaw/pull/183623)：增加 PostgreSQL 锁恢复确认支持，在确认旧容器租约已失效后，允许替换的网关容器正常启动。
- **测试与基础设施**：[PR #184019](https://github.com/openclaw/openclaw/pull/184019) 修复了 GitHub Actions 测试夹具，确保当测试修改已配置的代理设置时，可正常发布花名册变更。

## 4. 社区热议话题
社区讨论最活跃的内容集中在影响生产部署的稳定性问题上：
- **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)**（136 条评论，P0 版本阻断问题）：Windows 部署环境下，尽管已配置自动检查点限制，代理的 SQLite WAL 文件仍会膨胀至 1.4–2.8 GB，完全阻塞网关启动。这是本周评论数最多的问题，表明对 Windows 用户存在广泛影响。
- **[Issue #160959](https://github.com/openclaw/openclaw/issues/160959)**（54 条评论，P0）：捕获大型外部插件时，网关事件循环会阻塞数分钟，这是 v2026.9.6 引入的回归问题，会中断启动流程与运行时模型重发布。
- **[Issue #164294](https://github.com/openclaw/openclaw/issues/164294)**（33 条评论，P2）：由于进程内读取句柄被占用，网关状态数据库的 WAL 自动检查点永远无法完成，随时间推移导致存储逐步膨胀。
- **[PR #184026](https://github.com/openclaw/openclaw/pull/184026)**（新增，高关注度）：性能优化 PR，移除代理准备与 CLI 结果处理过程中私有对象的冗余拷贝，预计可降低所有代理工作负载的运行开销。

这些问题反映出社区对存储可靠性、插件管理稳定性的核心需求，相关问题在 Windows 与大规模部署用户中尤为突出。

## 5. 缺陷与稳定性
本周上报的高危缺陷按影响严重程度排序如下，并标注了修复状态：
1. **P0 版本阻断问题**：
   - [Issue #143524](https://github.com/openclaw/openclaw/issues/143524)：Windows 平台 SQLite WAL 膨胀导致网关启动阻塞。目前尚无对应的修复 PR 合并，已标记为待维护者评审。
   - [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)：捕获大型插件阻塞网关事件循环（v2026.9.6 引入的回归）。目前尚无修复 PR 合并，已标记为可复现问题。
   - [Issue #153426](https://github.com/openclaw/openclaw/issues/153426)：常规代理行为执行完成后， curated 记忆文件（`MEMORY.md`/`USER.md`）会永久被排除在引导注入流程之外，且无恢复路径。目前尚无修复 PR 合并，已标记为待安全评审。
2. **P1 崩溃与运行时问题**：
   - [Issue #168955](https://github.com/openclaw/openclaw/issues/168955)：v2026.10.1 引入 Windows 启动回归，由于 `sidecars.control-ui-assets` 阻塞，网关就绪时间从约 410 秒延长至约 1030 秒。目前尚无修复 PR 合并。
   - [Issue #159596](https://github.com/openclaw/openclaw/issues/159596)：v2026.9.6 上出现网关内存锯齿状波动，已就绪模型目录工作进程会增长到堆内存上限，每天触发约 200 次严重内存压力事件。目前尚无修复 PR 合并。
   - [Issue #183786](https://github.com/openclaw/openclaw/issues/183786)：Windows 测试版升级卡住，在 npm 暂存完成后，系统会反复查询已停止的前台网关进程 ID。目前尚无修复 PR 合并。
3. **P2 功能缺陷**：
   - [Issue #53408](https://github.com/openclaw/openclaw/issues/53408)：长对话（15 轮以上）结束后，写入/执行类工具参数会被静默丢弃，导致工具调用失败。目前尚无修复 PR 合并，需维护者评审。
   - [Issue #164427](https://github.com/openclaw/openclaw/issues/164427)：定时任务历史清理操作会持有状态数据库写锁长达 9.35 秒，超过硬编码的 5 秒超时阈值，导致网关 sidecar 启动中止。目前尚无修复 PR 合并。

## 6. 功能需求与路线图信号
本周用户呼声最高的功能指向后续版本的灵活性与易用性改进方向：
- **[Issue #67413](https://github.com/openclaw/openclaw/issues/67413)**（14 条评论，5 个点赞）：按代理单独配置“休眠”（记忆整理）功能，避免所有工作区同时运行记忆维护任务导致内存飙升。该功能大概率会被优先排期，用于解决自托管部署中的 OOM（内存溢出）问题。
- **[Issue #101422](https://github.com/openclaw/openclaw/issues/101422)**（10 条评论）：为以 Markdown 为主的工作区提供可配置的记忆召回资格判定与索引排除路径，允许用户将运行时产出物排除在记忆搜索范围之外。该需求与当前正在推进的记忆可靠性改进方向一致，是下一个 2026.10.x 版本的重点候选功能。
- **[Issue #162164](https://github.com/openclaw/openclaw/issues/162164)**（11 条评论）：为 iOS/macOS 应用提供可选的个人身份支持，同时保留团队部署场景下的共享所有者访问权限。这反映出原生客户端应用对多用户个性化能力的需求正在增长。

## 7. 用户反馈总结
本周用户情绪偏中性偏负面，主要不满集中在 Windows 与 PostgreSQL 部署的可靠性问题上：
- **痛点**：Windows 用户普遍反馈启动延迟、更新失败、SQLite 存储膨胀是最影响使用体验的问题。小规格主机上的自托管用户指出，并发工作进程隔离与定时维护任务带来的内存飙升，是在低资源硬件上运行 OpenClaw 的核心障碍。高阶用户则对静默数据丢失场景感到不满，包括工具参数被丢弃、记忆文件被永久排除、消息队列卡住且无恢复 CLI 工具等。
- **正面评价**：用户普遍认可 v2026.10.7 中新引入的可安全重放会话恢复功能，该功能有效减少了会话中断带来的数据丢失。测试版用户对 v2026.10.10-beta.3 中的 Windows 可靠性修复表示肯定，但不少用户指出 Windows 平台的更新流程仍会间歇性失败。
- **典型使用场景**：用户报告的常见场景包括单代理 Windows 网关部署、macOS/Linux 上的多代理团队网关、以及在资源受限的 VPS 硬件上运行的小型自托管实例。

## 8. 待办事项关注列表
以下是长期未闭环、需要维护者重点关注的高优先级事项：
- **[Issue #53408](https://github.com/openclaw/openclaw/issues/53408)**：自 2026 年 3 月开启至今，该工具参数静默丢弃问题影响所有长时运行对话，已有 15 条评论、2 个点赞，但尚无负责的修复 PR。
- **[Issue #67413](https://github.com/openclaw/openclaw/issues/67413)**：自 2026 年 4 月开启至今，这个按代理配置记忆整理的需求已收到 14 条评论、5 个点赞，但仍标记为需要产品决策。
- **[Issue #112313](https://github.com/openclaw/openclaw/issues/112313)**：自 2026 年 7 月开启至今，死信队列中的外发投递记录会被永久锁定，没有 CLI 或 RPC 方法可以清理，导致运维人员持续收到健康检查告警。
- **[PR #137348](https://github.com/openclaw/openclaw/pull/137348)**：自 2026 年 9 月开启至今，该修复用于解决无代理所有者时生成的 ACP 会话失败问题，目前处于等待作者更新状态，阻塞了 IDE 多代理工作流的修复进度。

---

---

## 横向生态对比

# 开源个人AI助手与智能体生态对比报告
*2026-10-26当周 | 核心参考项目：OpenClaw*

---

## 1. 生态概述
当前开源个人智能体领域正处于架构后稳定期，头部项目已从快速迭代功能转向打磨可靠性、安全性与可扩展性，为生产环境部署做准备。OpenClaw、Hermes Agent等成熟项目正优先修复特定平台（Windows、ARM64、PostgreSQL）的部署痛点与性能问题；IronClaw、ZeroClaw等新锐则主打模块化架构，聚焦链上智能体等细分场景。当前全生态的共同优先目标是提升长期记忆可靠性与插件/渠道扩展性，以支持多用户企业级部署。社区正强烈抵制静默数据丢失与模糊错误处理，要求提升生产环境下智能体行为的可观测性与可控性。

---

## 2. 活跃度对比
| 项目 | 近7天更新Issue数 | 活跃未关闭Issue数 | 近7天更新PR数 | 近7天已合并/关闭PR数 | 近7天新版本发布数 | 健康评分（1-10） |
|---------|------------------------------|----------------------|-----------------------------|----------------------------------|---------------------------|----------------------|
| OpenClaw | 500 | 397 | 500 | 280 | 5个（3个稳定版，2个测试版） | 8/10（迭代速度快，仍有大量P0/P1级Bug待处理） |
| Hermes Agent | 50 | 47 | 50 | 10 | 3个（均为稳定补丁版） | 7/10（合并后稳定迭代阶段，专注修复Bug） |
| IronClaw | 6 | 5 | 50 | 3 | 0个 | 5/10（功能迭代慢，主要维护依赖） |
| QwenPaw | 50 | 34 | 50 | 13 | 1个（安全补丁） | 7/10（推进v2.3.0模块化路线图） |
| ZeroClaw | 50 | 38 | 50 | 1 | 0个 | 6/10（预发布阶段功能开发，合并代码量少） |

---

## 3. OpenClaw的行业定位
### 相对其他项目的优势
OpenClaw的社区规模与开发速度远超同类项目，每周Issue/PR活跃度是其他项目的10倍。它是目前唯一提供稳定生产版本、支持全渠道（Discord、Slack、X）并提供企业级PostgreSQL部署方案的项目。其支持重放的会话恢复功能是独特差异化优势，直接解决了用户普遍反馈的会话中断导致数据丢失的痛点。
### 技术路线差异
与优先模块化的同类项目（QwenPaw、ZeroClaw，正积极重构以隔离渠道与插件）不同，OpenClaw采用单体核心架构，拥有成熟的生产级网关管理与存储可靠性基础设施。此外，它针对Windows部署的专项修复数量远超其他项目。
### 社区规模对比
OpenClaw的社区规模比同类项目高一个数量级：其热门讨论帖评论数超136条，Hermes Agent仅合并后的单一跟踪Issue评论数达220+，而同类项目的大部分讨论帖评论数不足30条。

---

## 4. 行业共同技术焦点
| 共同需求 | 涉及项目 | 具体要求 |
|-------------|------------------------|------------------------|
| 记忆子系统可靠性 | OpenClaw、ZeroClaw、Hermes Agent、QwenPaw | 修复并发写入导致的静默数据丢失，防止未检查点的WAL文件膨胀，支持可配置的记忆维护调度以避免OOM，为记忆的纳入/排除增加审计日志 |
| 渠道/插件可扩展性 | QwenPaw、ZeroClaw、IronClaw | 将非核心渠道隔离为子进程插件，为多渠道部署添加可配置的确认反应，支持第三方自动化的Webhook集成 |
| Windows部署可靠性 | OpenClaw、Hermes Agent | 修复启动延迟、安装器依赖失败、SQLite存储膨胀阻塞网关启动、更新流程卡顿等问题 |
| 插件/工作区安全性 | OpenClaw、ZeroClaw | 防止多文件apply_patch部分失败导致工作区损坏，为子智能体强制父工具白名单权限 |

---

## 5. 差异化分析
| 项目 | 核心功能聚焦 | 主要目标用户 | 关键架构特点 |
|---------|---------------------|----------------------|-------------------------|
| OpenClaw | 跨渠道可靠性、会话恢复、企业级PostgreSQL支持 | 生产级多智能体团队部署、Windows高阶用户 | 成熟的单体核心，提供LTS发布渠道 |
| Hermes Agent | 统一网关会话管理、多配置文件部署 | 多工作流连用用户、终端UI爱好者 | 近期重构的统一网关，支持单进程会话管理 |
| IronClaw | 托管MCP支持、链上智能体集成 | Web3/自主智能体开发者 | 极简核心，以依赖维护为重点 |
| QwenPaw | 模块化插件架构、中文社交渠道（钉钉、飞书、QQ）支持 | 中国企业团队部署 | 即将发布v2.3.0版本，重构后将所有非Console渠道隔离为独立插件 |
| ZeroClaw | 限定网关聊天、持久记忆一致性、子智能体策略执行 | 预发布阶段的早期用户，构建带权限感知的多智能体系统 | 预发布阶段模块化运行时，通过显式能力门控保障安全 |

---

## 6. 社区活力与成熟度分层
- **快速迭代层**：OpenClaw（Bug修复与发布速度快，社区对生产稳定性需求强烈）、QwenPaw（积极推进v2.3.0路线图，企业级功能需求强劲）
- **稳定层**：Hermes Agent（统一网关合并后稳定迭代，专注补丁发布，无破坏性变更）
- **早期开发层**：ZeroClaw（v0.9.0预发布阶段的功能开发，合并代码量少，专注核心运行时加固）、IronClaw（功能迭代速度慢，主要维护依赖，聚焦托管MCP用例优化）

---

## 7. 趋势信号
从社区反馈中提取的核心行业趋势：
1. **记忆可靠性已成为所有智能体项目的首要未满足需求**：并发写入导致的静默数据丢失、不可控的存储膨胀、记忆纳入缺乏控制，这些问题对用户信任的侵蚀远大于功能缺失。开发者应优先打造可审计、事务性的记忆子系统与可配置的维护调度，而非接入新模型。
2. **渠道隔离正成为标准架构模式**：各项目正从单体渠道支持转向子进程隔离的插件架构，避免单个渠道故障导致整个网关崩溃，这一模式与现代微服务可靠性实践对齐。
3. **权限透明度是高影响痛点**：所有项目的用户都对模糊的工具拒绝提示、子智能体权限执行不足感到不满；为生产环境添加粒度更细、人类可读的策略说明，是低成本高价值的改进方向。
4. **Windows部署可靠性仍是大规模普及的长期障碍**：即使是成熟项目，也普遍存在未解决的Windows专属Bug；能提供一致、低摩擦Windows安装包与运行时性能的项目，将获得明显竞争优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目每周进展摘要 — 2026-10-26

## 1. 近 7 天整体概览
Hermes Agent 在过去一周保持了高速的开发节奏，共有 50 个活跃更新的 Issue（47 个开放/活跃，3 个已关闭）和 50 个更新的 Pull Request（40 个开放，10 个已合并/关闭），同时发布了 3 个补丁版本。项目当前重点为稳定近期合入的 Unified Gateway 架构、解决 Windows 和 macOS 桌面安装包的兼容性问题，并提升系统整体性能与安全性。开发活动活跃，社区积极参与 Issue 反馈和 PR 贡献，展现出强劲的项目生命力。

## 2. 版本发布
近 7 天共发布了三个补丁版本，均聚焦于增量修复和稳定版本汇总，不含破坏性变更：
- [v0.22.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3)（2026 年 10 月 21 日）：自 v0.22.2 以来合入的约 620 个 PR 的稳定汇总，覆盖 CLI/安装包、Microsoft Store 应用、Docker 和 Hermes Cloud。完整的精选发布说明将在即将发布的 v0.23.0 中提供。
- [v0.22.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.4)（2026 年 10 月 21 日）：包含桌面端 UI 修复（移除了 composer 建议提示条）以及小型插件和控制台补丁，已全渠道部署。
- [v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)（2026 年 10 月 22 日）：自 v0.22.4 以来合入的约 81 个 PR 的稳定汇总，与此前版本采用相同的多渠道部署方式。

这些补丁版本均无需迁移说明。

## 3. 项目进展
近 7 天内，共有 10 个 PR 被合并或关闭，交付了针对性的性能优化和缺陷修复：
- **性能优化**：
  - [PR #144640](https://github.com/NousResearch/hermes-agent/pull/144640)：重构了 provider 插件初始化和重启检查逻辑，减少 git 子进程调用，将 CLI 启动时间缩短约 1 秒（例如 `hermes sessions list` 从 1.45s 提升至 0.44s）。
  - [PR #144647](https://github.com/NousResearch/hermes-agent/pull/144647)：通过维护新的 commit 图并清理过期锁，优化了 git 版本查询速度，将该操作从 0.39s 降至 0.05s。
  - [PR #144625](https://github.com/NousResearch/hermes-agent/pull/144625)：将启动时的临时目录清理任务移至分离的后台进程，消除了用户操作时长达数秒的卡顿（解决了 Issue #143397）。
- **缺陷修复**：
  - [PR #143398](https://github.com/NousResearch/hermes-agent/pull/143398)：通过将系统提示词构建与临时目录清理解耦，解决了系统提示词构建被阻塞的问题。
  - [PR #144661](https://github.com/NousResearch/hermes-agent/pull/144661)：为远程主机不可达的 SSH 工作区文件路由添加了清晰的错误处理，替换了原先信息模糊的 500 错误。

## 4. 社区热点话题
最活跃的讨论集中在 10 月 14 日合入 main 分支的 Unified Gateway 架构的合入后稳定工作：
- [Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889)（已关闭，220 条评论）：Unified Gateway 功能合入后修复的跟踪 Issue，该功能将所有本地会话管理整合到单个网关进程中。
- [Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547)（开放，23 条评论）：main 分支上 Unified Gateway 剩余未解决合入后问题的后续跟踪 Issue。
- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)（开放，20 条评论）：一份提议对 Doc-Chain 底层进行治理和压缩改进的 RFC，聚焦于在会话压缩过程中保留文档来源信息。

**底层需求**：社区当前优先关注核心会话管理系统的稳定性和持久化数据治理，以避免多配置部署场景下出现数据丢失或行为不一致的问题。

## 5. 缺陷与稳定性
近 7 天报告的缺陷按严重程度排序（P0 最高，P3 最低）：
### P2 高严重度缺陷
- [Issue #131199](https://github.com/NousResearch/hermes-agent/issues/131199)：Windows 原生首次安装在 Python 依赖阶段失败。*截至本摘要发布，暂无关联的专门修复 PR。*
- [Issue #144691](https://github.com/NousResearch/hermes-agent/issues/144691)：Windows 平台的桌面安装包（v0.22.4/v0.22.5）在多个 Python 版本上解析 setuptools 和 wheel 依赖时失败。*暂无关联的专门修复 PR。*
- [Issue #143364](https://github.com/NousResearch/hermes-agent/issues/143364)：多配置网关错误地将次要配置的进度更新和通知发送到主配置的 Telegram bot。*暂无关联的专门修复 PR。*
- [Issue #127105](https://github.com/NousResearch/hermes-agent/issues/127105)：Discord 上的后台进程通知被错误地作为用户消息发送（审计回退问题）。*暂无关联的专门修复 PR。*
- [Issue #143659](https://github.com/NousResearch/hermes-agent/issues/143659)：TUI 启动时创建空的会话行，导致会话选择器中出现“(Untitled)”幽灵条目。*暂无关联的专门修复 PR。*
- [Issue #144648](https://github.com/NousResearch/hermes-agent/issues/144648)：新发布的浏览器托管 Webapp Desktop 功能的合入后后续跟踪。*暂无关联的专门修复 PR。*
- [Issue #144669](https://github.com/NousResearch/hermes-agent/issues/144669)：远程主机宕机时，SSH 工作区文件路由返回 500 错误。*已通过 [PR #144661](https://github.com/NousResearch/hermes-agent/pull/144661) 修复。*

### P3 低严重度缺陷
- [Issue #135200](https://github.com/NousResearch/hermes-agent/issues/135200)：用户的 .env 文件可以覆盖 `HERMES_MANAGED_DIR` 部署设置，造成安全边界风险。*暂无关联的专门修复 PR。*
- [Issue #144547](https://github.com/NousResearch/hermes-agent/issues/144547)：生命周期防护拦截了 `hermes gateway restart`，但未拦截 `hermes update`，导致更新过程中可能出现不受防护的网关终止。*暂无关联的专门修复 PR。*

## 6. 功能需求与路线图信号
活跃的开放功能需求显示了即将到来的版本中可能的优先方向：
- [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)：针对 Doc-Chain 底层治理和压缩的 RFC，旨在在会话压缩过程中保留文档来源信息。这表明社区对更健壮的长期记忆管理有需求。
- [PR #144684](https://github.com/NousResearch/hermes-agent/pull/144684)：可选的后台“预备”压缩功能，在达到硬性压缩阈值前触发后台摘要流程，减少用户可见的卡顿。该功能与当前的性能优化方向一致。
- [PR #143346](https://github.com/NousResearch/hermes-agent/issues/143346)：看板调度器改进，在停滞警告中报告限制保持原因，提升工作流自动化用户的可调试性。
- [PR #138287](https://github.com/NousResearch/hermes-agent/pull/138287)：插件安全的目标上下文接口，使插件能够读取和管理常驻 `/goal` 状态且不破坏核心功能。这体现了对插件可扩展性的持续投入。

## 7. 用户反馈摘要
过去一周的核心用户痛点和使用场景：
- **Windows 安装受阻**：多名用户反馈在 Windows 10/11 上的不同 Python 版本中，原生安装和桌面安装均失败，阻碍了新用户上手。
- **多配置网关混乱**：运行带有多个 bot 配置（如 Telegram、Discord）的多路复用网关的用户遇到通知错发和配置凭证警告，增加了多工作流设置的复杂度。
- **TUI 会话杂乱**：终端 UI 的重度用户反馈空会话条目在选择器中不断累积，降低了频繁切换会话用户的工作效率。
- **安装速度关切**：使用慢速存储系统的用户反馈，同步临时文件清理会导致长达数秒的启动延迟，造成明显的界面卡顿。

## 8. 待办事项关注
需要维护者关注的长期未解决问题：
- [Issue #127105](https://github.com/NousResearch/hermes-agent/issues/127105)：自 2026 年 9 月 29 日起开放，Discord 后台通知错发的审计回退问题，此前提交的修复方案已被关闭未合并，至今仍未解决。
- [Issue #121973](https://github.com/NousResearch/hermes-agent/issues/121973)：自 2026 年 9 月 24 日起开放，opencode-go deepseek-v4.1-flash provider 上的标题生成持续因 400 错误失败，原因是未处理结构化输出拒绝格式。
- [PR #127784](https://github.com/NousResearch/hermes-agent/pull/127784)：自 2026 年 9 月 29 日起开放，该安全导向的重构统一了所有环境创建器中的沙箱目标解析逻辑以用于 Docker 隔离，解决了安全边界处理不一致的问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报（2026-10-26）

## 1. 近7天工作概览
在截至 2026-10-26 的一周内，IronClaw 项目保持了平稳的开发节奏，工作重心集中在依赖维护上。项目共处理了 6 个更新的 Issue 和 50 个更新的 Pull Request，其中 5 个 Issue 仍处于开放/活跃状态，3 个 Pull Request 已合并或关闭。本周内没有发布新版本，大部分 PR 活动集中在 Rust、JavaScript、GitHub Actions 和 Python 生态的自动化依赖更新上。

## 2. 版本发布
近 7 天内 IronClaw 没有发布新版本。

## 3. 项目进展
近 7 天共有 3 个 Pull Request 被合并或关闭：
- [#8142](https://github.com/nearai/ironclaw/pull/8142)：`chore(deps): bump the everything-else group across 1 directory with 41 updates`（Rust 依赖组更新）
- [#8133](https://github.com/nearai/ironclaw/pull/8133)：`chore(deps): bump the actions group across 1 directory with 11 updates`（GitHub Actions 依赖组更新）
- [#8149](https://github.com/nearai/ironclaw/pull/8149)：`chore(deps): bump dompurify from 3.4.12 to 3.4.16`（JavaScript 开发依赖更新）

所有已合并/关闭的 PR 均为依赖维护类更新，本周没有合并新功能或 bug 修复相关的代码变更。

## 4. 社区热点话题
由于本周批次的评论和互动数据有限，社区参与亮点基于讨论活跃度和优先级信号整理：
- **[#8146](https://github.com/nearai/ironclaw/issues/8146) Hosted MCP: explicit 127.0.0.1 endpoint enrollment and private credential-account setup bridge**：指出了当前 Hosted MCP 功能的一个关键限制——注册时会拒绝 HTTP/IP 字面量，阻碍了带凭证账户持有者认证的本地连接器使用场景。
- **[#2077](https://github.com/nearai/ironclaw/issues/2077) Contract source for market near ai**：这是构建自主链上 Agent 的开发者长期提出的需求，他们需要已发布的 market.near.ai 合约源码，以避免依赖 IronClaw 的 HTTP API 基础设施。
- **[#8136](https://github.com/nearai/ironclaw/issues/8136) Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress**：提议利用现有的声明式扩展接口，添加一个独立的 Plazmi 配套扩展，避免核心宿主代码出现厂商逻辑臃肿。
底层需求：开发者在 Hosted MCP 生态中优先关注互操作性、本地部署灵活性和模块化扩展支持。

## 5. Bug 与稳定性
近 7 天报告的 Bug 和稳定性问题按严重程度排序如下：
1. **中等严重度**：[#8146](https://github.com/nearai/ironclaw/issues/8146) Hosted MCP 注册拒绝 HTTP/IP 字面量，导致带凭证账户持有者令牌的本地连接器无法注册。目前没有关联的修复 PR。
2. **中等严重度**：[#3168](https://github.com/nearai/ironclaw/issues/3168)（已关闭）缺少 ARM64/aarch64 Docker 镜像支持，曾阻碍 ARM64 机器上的官方镜像部署。该问题在本周内已关闭；数据集里没有关联的修复 PR 记录。
3. **低严重度**：[#8153](https://github.com/nearai/ironclaw/issues/8153) 和 [#8143](https://github.com/nearai/ironclaw/issues/8143) 每日故障分类报告显示 officeqa 测试套件存在未通过用例，绝大多数归因于 DeepSeek-V4-Flash 模型质量问题，而非 IronClaw 核心代码 Bug。

## 6. 功能需求与路线图信号
近 7 天的开放功能需求：
- ARM64 Docker 镜像支持（在已关闭的 Issue [#3168](https://github.com/nearai/ironclaw/issues/3168) 中跟踪）
- Hosted MCP 127.0.0.1 端点注册支持（[#8146](https://github.com/nearai/ironclaw/issues/8146)）
- 带声明式认证和出口控制的可选 Plazmi Hosted MCP 扩展（[#8136](https://github.com/nearai/ironclaw/issues/8136)）
- 面向自主链上 Agent 的已发布 market.near.ai 合约源码（[#2077](https://github.com/nearai/ironclaw/issues/2077)）

预计近期路线图优先级：根据 Issue 数量和开放的 PR 待办，Hosted MCP 注册改进和 ARM64 构建支持很可能是下个发布周期的候选重点，其次是扩展系统优化。

## 7. 用户反馈摘要
本周报告的主要用户痛点：
- 构建自主链上 Agent 的开发者面临基础设施锁定，因为 market.near.ai 仅提供 HTTP API 访问，没有公开合约源码（[#2077](https://github.com/nearai/ironclaw/issues/2077)）
- 本地 Hosted MCP 部署使用场景因 IP 端点的注册限制而受阻（[#8146](https://github.com/nearai/ironclaw/issues/8146)）
- 在该问题关闭前，ARM64 硬件上的用户无法运行官方 Docker 镜像（[#3168](https://github.com/nearai/ironclaw/issues/3168)）
- Officeqa 基准测试失败与底层模型质量有关，而非 IronClaw 平台稳定性问题（[#8153](https://github.com/nearai/ironclaw/issues/8153)、[#8143](https://github.com/nearai/ironclaw/issues/8143)）
本周的数据集里没有记录明确的用户满意度反馈。

## 8. 待办事项关注列表
需要维护者关注的长期待处理事项：
- [#2077](https://github.com/nearai/ironclaw/issues/2077) Contract source for market near ai：自 2026-04-06 开放，最近一次更新在 2026-10-21，开发者对链上 Agent 集成的需求持续存在。
- [#5450](https://github.com/nearai/ironclaw/pull/5450) feat(reborn): frugal default read/grep output to cut carried context：自 2026-06-30 开放，最近一次更新在 2026-10-22，目标是提升 reborn Agent 的上下文窗口效率。
- [#5353](https://github.com/nearai/ironclaw/pull/5353) fix(http): raise http.save body limit so large downloads stream to disk：自 2026-06-26 开放，最近一次更新在 2026-10-22，解决大下载任务时 Agent 工具链超时的问题。
- [#6232](https://github.com/nearai/ironclaw/pull/6232) fix(reborn): auto-activate web-access and Brave-backed web_search：自 2026-07-18 开放，最近一次更新在 2026-10-22，改进 Agent 对内置网页搜索工具的发现能力。
- [#7994](https://github.com/nearai/ironclaw/pull/7994) docs(design-system): DESIGN.md governance + Storybook guidelines：自 2026-08-31 开放，最近一次更新在 2026-10-22，是 Epic #7781 第二阶段设计系统推广的一部分。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 每周项目摘要 —— 2026-10-26

## 1. 近 7 天概览
过去一周，QwenPaw 保持了高速的开发节奏：50 个 Issue 更新（34 个活跃、16 个已关闭），50 个 PR 更新（37 个开放、13 个已合并/关闭），并发布了一个新的补丁版本。项目正积极推进 v2.3.0 路线图，重点聚焦模块化、可扩展性与渠道插件架构。社区参与度持续走高，既有老贡献者也有新贡献者，围绕缺陷报告、功能需求和代码贡献形成了健康的混合生态。在 v2.2.2 发布线之后，本周还集中进行了安全修复和稳定性改进。

## 2. 发布版本
本周发布了一个新的补丁版本 **[v2.2.2.post1](https://github.com/agentscope-ai/QwenPaw/pull/8369)**：
- **chore: Bump version to v2.2.2.post1**，作者 @cuiyuebing（[#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369)）
- **fix(security): Remediate emSign CA trust across dependencies, installers, and builds**，作者 @qbc2016（[#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370)）
- 该版本无破坏性变更，也无需特殊迁移步骤；我们建议所有 v2.2.2 用户进行此次安全更新。

## 3. 项目进展
虽然所提供的数据没有逐条列出全部 13 个已合并/关闭的 PR，但本周已关闭的 Issue 仍能体现关键缺陷修复与功能对齐方面的进展：
- 已关闭 Issue [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)：修复了在 LM Studio 下处理音频文件会导致会话永久卡死的问题，提升了媒体能力分类器的鲁棒性。
- 已关闭 Issue [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)：解决了智能体间调用时静默抛出 CancelledError、导致配对会话在执行中途被取消的问题，这是多智能体集群部署场景下的关键稳定性修复。
- 已关闭 Issue [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)：修复了 Console 在长对话滚动时，重新估算位置会把用户强行拉回 1.1–2.2k px 的问题。
- 已关闭 Issue [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)：修复了定时任务修改过程中的缺陷——错误重置默认时间，以及请求内容显示为 `[object Object]`。
- [PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) 仍在持续推进，目标是将各渠道抽离为独立插件，这是 v2.3.0 的重要架构变革，旨在减少宿主进程膨胀并隔离渠道故障。

## 4. 社区热点话题
本周讨论最活跃的话题反映了用户对可扩展性与跨平台集成的核心需求：
1. **[#338 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook 功能请求**（10 条评论，👍 1）：用户希望引入双向 Webhook 集成，将 QwenPaw 与外部工具连接起来，支持外部系统调用 QwenPaw，并通过返回的 key 异步轮询结果。这表明在现有内置渠道之外，用户对更深层次的自动化和第三方集成有强烈需求。
2. **[#8071 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8071) — 面向插件的主题扩展点**（8 条评论）：插件作者希望提供一个语义化 token 的覆盖层，在当前单一 `colorPrimary` 配置项之外扩展 Console 主题系统，从而打造更精致、更一致的插件 UI。这与项目 v2.3.0 推进插件可扩展性的方向高度一致。
3. **[#8289 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8289) — v2.3.0 轻量化/重构公告**（3 条评论，👍 1）：维护者分享了插件重构计划，目标是让 QwenPaw 更轻量、更模块化，社区也已经开始围绕可扩展性改进给出反馈。

## 5. 缺陷与稳定性
本周报告的缺陷按严重程度排序，其中部分已通过开放中的 PR 着手修复：

| 严重程度 | Issue | 状态 | 详情 |
|----------|-------|------|------|
| 严重 | [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)（Open） | 尚无修复 PR | 飞书渠道在主事件循环中执行同步网络调用，导致网络不可达时整个服务死锁（健康检查超时，SIGTERM 无法退出）。 |
| 高 | [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413)（Open） | 修复 PR：[#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | Shell 自保护机制会错误地拦截针对无关用户进程的合法 `kill $PID` 命令，破坏了标准的守护进程管理流程。 |
| 高 | [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)（Open） | 尚无修复 PR | 即使设置了 `audit_level: all`，`governance/audit.db` 也不再记录每个智能体的工具调用，破坏了企业部署的合规性与可审计性。 |
| 高 | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)（Open） | 尚无修复 PR | 当 `sessionWebhook` 过期时，钉钉渠道会静默丢弃最终回复，且没有 Open API 兜底，导致用户响应丢失。 |
| 中 | [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)（Open） | 尚无修复 PR | Console 的输入草稿按智能体维度而非按会话维度存储，导致同一智能体在不同聊天中会泄露尚未发送的文本。 |
| 中 | [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417)（Open） | 尚无修复 PR | 在火山引擎 AgentPlan 的 glm-5.3-flash 上，上下文压缩会以 400 错误失败，原因是兼容层发送了不支持的 `thinking.type=disabled` 参数。 |

## 6. 功能需求与路线图信号
根据当前活跃的需求与进行中的 PR，以下功能极有可能在 v2.3.0 发布周期内落地：
- **执行过程中对智能体的引导修正**：[PR #8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) 实现了 `/steer` 命令，让用户在不丢失当前进度的前提下，对智能体进行中途纠偏，解决了一个高频易用性痛点。
- **插件化渠道隔离**：[PR #8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) 将所有非 Console 渠道迁移到子进程隔离的插件中，直接落实了 v2.3.0 的模块化路线图。
- **DeepSeek Search 提供方**：[PR #8314](https://github.com/agentscope-ai/QwenPaw/pull/8314) 原生支持 DeepSeek 的 Search 端点，为已有 DeepSeek API key 的用户提供更多网页搜索选项。
- **Hub 全局 Skill/MCP 管理**：Issue [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) 提出在团队部署中提供全局共享的 Skills 和 MCPs，这是企业 Hub 用户的高优先级需求，也与多用户管理路线图相吻合。
- **QQ C2C 流式消息**：[PR #8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) 为 QQ 渠道的私信增加了流式输出支持，改善了国内社交渠道的实时体验。

## 7. 用户反馈总结
本周用户痛点主要集中在企业级稳定性与团队部署易用性方面：
- **多智能体集群可靠性**：用户反馈在复杂的 Orchestrator/Reasoner/Executor/Reviewer/Defender 组合下，会出现静默会话取消与调用中断，且没有清晰的日志说明取消原因。
- **渠道边缘场景**：钉钉、飞书、QQ 渠道的用户遇到消息静默丢失、Webhook 过期失效，以及缺少引用上下文支持的问题，损害了对第三方渠道集成的信任度。
- **团队管理摩擦**：Hub 用户抱怨为每个用户重复配置 Skill/MCP、缺少全局默认 UI 设置，以及硬编码 `127.0.0.1` 就绪探针导致容器部署失败。
- **核心工作流困扰**：桌面端用户重点反馈了草稿跨会话泄露、滚动位置卡住、请求取消后审批弹窗无法关闭等 UI 问题。
总体来看，反馈表明智能体核心功能已经比较扎实，但渠道鲁棒性、企业级治理能力以及 Console 的体验打磨仍是关键改进方向。

## 8. 待办事项关注
以下长期开放或影响较大的事项需要维护者重点关注：
- **[#8078 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/8078)**：跨会话的 `chat_with_agent` 调用被错误地注册为独立聊天，导致同一会话被拆分成多个 UI 页面。该 Issue 自 2026-10-02 起开放，给多智能体用户造成了较大困扰。
- **[#7339 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/7339)**：长期存在的功能需求，希望在流式生成时提供桌面端自动滚动开关，自 2026-08-27 起开放。这是桌面端高阶用户频繁提出的易用性需求。
- **[#7835 (Open, Under Review)](https://github.com/agentscope-ai/QwenPaw/pull/7835)**：该 PR 用于阻止将内部自动记忆召回 payload 泄露到外部渠道，自 2026-09-17 起开放。这是一项针对非 Console 渠道的关键数据泄露修复，需要尽快完成评审与合并。
- **[#7211 (Open, Under Review)](https://github.com/agentscope-ai/QwenPaw/pull/7211)**：该 PR 用于防止注入的请求上下文被持久化到会话历史中，自 2026-08-21 起开放。它影响长期记忆的准确性与隐私性，目前正在等待维护者评审。
- **[#338 (Open)](https://github.com/agentscope-ai/QwenPaw/issues/338)**：Webhook 功能请求自 2026-03-02 起开放，是最老、评论最多的增强需求之一，代表了用户群体尚未被满足的自动化诉求。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报：2026-10-26
## 1. 近 7 天概览
过去一周，ZeroClaw 按照 v0.9.0 发布路线图保持了强劲的开发势头。共更新了 50 个议题（38 个活跃，12 个已关闭）和 50 个拉取请求（49 个开放，1 个已合并），未发布新的公开版本。开发工作主要集中在网关、安全、运行时、内存和渠道集成方面，这表明项目正在为即将到来的功能稳定和发布加固做准备。

## 2. 版本发布
近 7 天未发布新的公开版本。

## 3. 项目进展
在此期间仅合并/关闭了 1 个拉取请求，新功能推出有限。正在进行的开发工作集中在 v0.9.0 版本的核心能力上，包括网关范围聊天、运行时能力管理和渠道体验改进。大多数活跃的拉取请求仍处于审查状态或需要作者更新。

## 4. 社区热点话题
### 活跃议题
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) [开放] [跟踪议题]：运行时、控制台登录和网关交付（15 条评论）
  该跟踪议题协调了 RFC #5574 中剩余的运行时和网关路线图，是即将到来的 v0.9.0 版本的核心优先事项。
- [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) [开放] [跟踪议题]：持久内存 - 将治理、相关性和可操作性平面连接到同等水平（14 条评论）
  这一多 PR 推出旨在使 ZeroClaw 的跨会话内存子系统与成熟的同级代理运行时达到功能对等，解决了用户对可靠长期内存的关键期望。
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) [已关闭] [漏洞]：SOP 引擎在记录步骤的输出模式拒绝之前提升并运行后续步骤（5 条评论）
  运行时守护进程中一个关键的 S1 工作流阻塞漏洞，本周已关闭。
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) [开放] [漏洞]：delegate 绕过父级的工具允许列表 - 子代理可以调用父策略排除的工具（5 条评论）
  一个 S0 安全漏洞，破坏了子代理执行的核心权限边界。

### 活跃拉取请求
- [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) [开放] feat(gateway)：通过核心实现范围控制台聊天
  这个高风险、大规模的 PR 为非管理员登录用户实现了范围控制台聊天，这是与议题 [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) 相关的 v0.9.0 关键功能。
- [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) [开放] feat(runtime)：为轮次入口点添加能力获取构造函数
  这是运行时的架构增强，重构了轮次入口点以明确要求能力，提高了 v0.9.0 的安全性和模块化。
- [#11754](https://github.com/zeroclaw-labs/zeroclaw/pull/11754) [开放] feat(channels)：使确认反应可配置
  这个面向用户的功能允许自定义渠道确认反应，提高了多渠道部署的灵活性。

## 5. 漏洞与稳定性
本周报告的关键和高严重性漏洞：
1. **S0 安全风险：delegate 工具允许列表绕过** ([#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279))：通过 `delegate` 工具调用的子代理可以绕过父工具权限策略，造成潜在的未授权工具执行风险。目前没有专门的修复 PR 开放。
2. **S0 数据丢失：Markdown 内存后端并发写入失败** ([#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797))：对 markdown 内存后端的重叠 `store()` 调用会静默覆盖存储的条目，导致永久性数据丢失。修复已在 PR [#11209](https://github.com/zeroclaw-labs/zeroclaw/pull/11209) 中得到解决，该 PR 拒绝未知后端而不是默认使用 markdown。
3. **S1 工作流阻塞：自定义 OpenAI 兼容提供程序上下文窗口回退** ([#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014))：未指定 `context_window` 的自定义提供程序被错误地分配了硬编码的 32k 限制，导致有效请求被拒绝。目前没有修复 PR 开放。
4. **S0 安全：容器 CA 包信任 emSign 链** ([#11932](https://github.com/zeroclaw-labs/zeroclaw/issues/11932))：发布的容器镜像仍包含不受信任的 emSign 中间 CA 链，造成 TLS 验证风险。该问题本周已关闭。
5. **S2 行为降级：长对话修剪删除旧轮次** ([#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711))：当网关对话超出上下文预算时，历史记录修剪会从会话存储中永久删除旧轮次。目前没有修复 PR 开放。

## 6. 功能请求与路线图信号
v0.9.0 版本中可能即将推出的功能：
1. **范围控制台聊天**：非管理员登录用户将能够与他们有权访问的代理聊天（在 [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) 中跟踪，在 PR [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) 中实现）。
2. **电子邮件渠道改进**：要求操作员配置的电子邮件模板和用于外发电子邮件的净化 HTML 正文（[#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992)），以及在读取策略下的显式附件支持（[#11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996)）。
3. **Shell 策略清晰度**：Shell 命令拒绝消息将包括具体的规则细节和操作员可配置的提示（[#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799)）。
4. **渠道推理流式传输**：Telegram 和 Slack 渠道将支持在草稿消息中流式传输模型推理，与现有的 Matrix 功能相匹配（PR [#11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744)）。

## 7. 用户反馈摘要
本周报告的关键用户痛点：
- 安全策略透明度：用户报告说，shell 策略拒绝消息没有解释*为什么*命令被阻止，这使得调试变得困难，令人沮丧。
- 第三方提供程序可靠性：依赖自定义 OpenAI 兼容提供程序的用户由于硬编码的上下文窗口回退而遇到工作流中断。
- 多渠道一致性：用户希望在 Slack、Telegram 和 Matrix 渠道上获得一致、可定制的确认和推理显示。
- 内存可靠性：并发内存写入的关键数据丢失事件已经侵蚀了用户对持久内存子系统的信任。
- 桌面可用性：PowerShell 方言错误地阻止了包含裸 `@` 符号的有效邮件 CLI 命令，破坏了 Windows 上的常见用户工作流。

## 8. 待办事项观察
需要维护人员关注的关键长期或高优先级项目：
- **#7432 运行时/网关跟踪议题**：自 2026 年 6 月开放以来，这个高优先级的 v0.9.0 跟踪议题本周持续更新（最后更新于 2026-10-23），需要持续协调以满足发布期限。
- **#8891 持久内存跟踪议题**：自 2026 年 7 月开放以来，这个跨会话内存的对等跟踪议题于 2026-10-25 更新，需要持续进展以解决数据丢失风险。
- **#8279 delegate 工具安全漏洞**：自 2026 年 6 月开放以来，这个 S0 安全漏洞仍未解决，需要立即进行修复优先级排序。
- **#11209 内存后端修复**：PR 自 2026 年 9 月开放以来，这个针对 markdown 内存后端数据丢失问题的关键修复仍需要作者更新和维护人员审查才能合并。

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*