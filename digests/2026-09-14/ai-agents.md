# OpenClaw 生态周报 2026-09-14

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-14 00:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报 | 2026-09-14
*数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 统计周期：2026-09-07 至 2026-09-14*

---

## 1. 近 7 天总览
本周 OpenClaw 保持高速开发节奏，共有 500 个 issue 更新（284 个待处理/处理中，216 个已关闭）和 500 个 PR 更新（254 个待合并，246 个已合并/关闭），体现出活跃的缺陷排查、功能交付和版本支持工作。项目发布了 3 个新版本，聚焦安全加固、更新可靠性和 LTS 维护，同时修复了网关运行时、通道投递和子代理编排领域的高严重级稳定性问题。社区反馈集中在核心可靠性痛点：进程泄漏、会话状态损坏，以及 2026.9.x 近期版本的更新失败。整体项目状态活跃，但短期面临压力，需解决 2026.9 稳定通道中阻塞发版的稳定性回归问题。

---

## 2. 版本发布
本周共发布 3 个新版本，涵盖稳定通道更新和长期支持版本维护：

### v2026.9.4（最新稳定版）
- **详情**：20 次直接提交，1,558 个已合并 PR，294 位贡献者
- **发布说明**：[docs.openclaw.ai/releases](https://docs.openclaw.ai/rele)
- **重点**：2026.9 稳定线的累计稳定性与安全补丁，在 v2026.9.3 的更新安全改进基础上构建。

### v2026.9.3
- **亮点**：
  - 更安全的更新流水线：核心与插件变更在激活前，会先在隔离的候选状态中进行演练
  - 支持符合条件的 2026.9.2 版本迁移
  - 可恢复已废弃的更新记录，无需停止运行正常且匹配的网关
- **相关追踪**：[#136997](https://github.com/openclaw/openclaw/issues/136997)、[#138839](https://github.com/openclaw/openclaw/pull/138839)、[#141109](https://github.com/openclaw/openclaw/pull/141109)、[#141175](https://github.com/openclaw/openclaw/pull/141175)

### v2026.6.35（扩展稳定版 / LTS）
- **状态**：2026 年 6 月 LTS 最终版本
- **亮点**：更安全的供应商与通道边界：捆绑的供应商和通道适配器现在会限制不受信任的响应体大小，在高开销处理前拒绝超大输入，并在传输故障期间保留安全恢复能力。

---

## 3. 项目进展
本周关闭/合并的 PR 推进了核心可靠性、多通道支持、内存系统可扩展性和用户体验方面的工作：
- **子代理 schema 修复**：[#146715](https://github.com/openclaw/openclaw/pull/146715) 解决了 CLI 后端中 `sessions_spawn` 的 `outputSchema` 被忽略的问题，直接修复了 [#141474](https://github.com/openclaw/openclaw/issues/141474) 中的静默挂起缺陷。
- **MCP 子代理工具注入修复**：issue [#85030](https://github.com/openclaw/openclaw/issues/85030)（6 👍）已关闭，解决了在 `bundle-mcp` 和白名单配置下，MCP 工具未被注入到已生成的子代理会话中的问题。
- **通道投递修复**：
  - [#135111](https://github.com/openclaw/openclaw/issues/135111)（claude-sonnet-5 上偶发的 JSON 工具调用格式错误）已关闭。
  - [#145563](https://github.com/openclaw/openclaw/issues/145563)（微信通道回复分发失败，报错 `PreparedModelCatalogConfigReplacedError`）已关闭。
  - [#137927](https://github.com/openclaw/openclaw/issues/137927)（内部上下文块泄漏到 Telegram 消息中）已关闭。
- **更新与运行时可靠性**：
  - [#140162](https://github.com/openclaw/openclaw/issues/140162)（Windows 网关重启时将启动缓慢的网关误判为过期进程并终止）已关闭。
  - [#146958](https://github.com/openclaw/openclaw/issues/146958)（2026.9.2 → 2026.9.3 更新因 llm-task 包所有者元数据失败）已关闭。
- **内存与存储**：
  - 功能请求 [#79904](https://github.com/openclaw/openclaw/issues/79904)（带游标的 SQLite 对话记录读取 API）、[#79903](https://github.com/openclaw/openclaw/issues/79903)（持久化会话血缘 API）和 [#79905](https://github.com/openclaw/openclaw/issues/79905)（带类型的对话记录投影）已完成关闭，推进了 SQLite 运行时重构总议题 (#79902)。
- **UI/UX**：
  - [#147540](https://github.com/openclaw/openclaw/pull/147540)（macOS 端将已完成工作折叠到聊天回复上方）已关闭，提升了长对话的可读性。
  - [#147506](https://github.com/openclaw/openclaw/pull/147506)（共享插件注册测试固件）已关闭，减少了测试重复。

---

## 4. 社区热门话题
讨论最活跃的 issue 和 PR 反映了社区对核心运行时稳定性、子代理可靠性和更新失败问题的关注：
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592) - 工具调用之间的文本泄漏到消息通道（40 条评论，1 👍）**
   状态：待处理，P1，钻石龙虾等级，涉及安全 + 会话状态影响
   社区诉求：明确内部代理处理输出与用户可见通道消息之间的边界；当前行为会在 Slack、iMessage 等通道中造成用户体验混淆和潜在信息泄漏。

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616) - OpenClaw 存在未回收的 hook/工具子进程泄漏，导致僵尸进程累积（30 条评论，1 👍）**
   状态：待处理，P1，银贝类等级，涉及崩溃循环 + 消息丢失影响
   社区诉求：实现可靠的 hook/工具执行进程生命周期管理；长期运行的实例会因僵尸进程堆积出现运行时性能逐步下降。

3. **[#44925](https://github.com/openclaw/openclaw/issues/44925) - 子代理完成结果静默丢失 —— 超时后无重试、无通知、无自动重启（28 条评论，2 👍）**
   状态：待处理，P1，钻石龙虾等级，涉及数据 + 消息丢失影响
   社区诉求：打造健壮的子代理编排能力，具备故障可见性和恢复机制；用户反馈在 Telegram 论坛机器人部署中出现任务静默失败，且无任何错误提示。

4. **[#91009](https://github.com/openclaw/openclaw/issues/91009) - Codex PreToolUse 原生 hook 中继生成 CPU 密集型 openclaw-hooks 进程（23 条评论，2 👍）**
   状态：待处理，P0，银贝类等级，涉及网关 RPC 停滞 + 崩溃循环影响
   社区诉求：优化 Codex 集成 hook 中继的性能；用户反馈每个生成的进程 CPU 使用率达 100% 以上，导致网关不稳定。

5. **[#119720](https://github.com/openclaw/openclaw/issues/119720) - 大规模部署下同步代理持久化会阻塞网关事件循环（19 条评论）**
   状态：待处理，P1，钻石龙虾等级
   社区诉求：为大规模部署提供异步持久化架构；目前已有部分修复落地，但完整解决方案仍在推进中。

---

## 5. 缺陷与稳定性
缺陷按严重程度排序（P0 > P1 > P2），优先处理活跃回归问题和影响崩溃/可用性的问题：

### P0（严重）
| Issue | 严重级影响 | 状态 | 修复 PR |
|-------|-----------|------|---------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook 中继 CPU 飙升 + 网关 RPC 停滞 | 崩溃循环，可用性 | 待处理 | 无关联 |
| [#146394](https://github.com/openclaw/openclaw/issues/146394) 2026.9.3 全局安装失败 | 体验类发版阻塞问题 | 待处理 | 无关联 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) 2026.9.3/9.4 更新/恢复可靠性追踪 | 体验类发版阻塞问题 | 待处理（追踪中） | 关联多个 |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) 2026.9.2 → 9.4 托管更新在候选 Doctor 阶段 v1 交接租约处失败 | 崩溃循环，发版阻塞 | 待处理 | 无关联 |
| [#143334](https://github.com/openclaw/openclaw/issues/143334) 子代理完成结果丢失导致排队用户消息饥饿；重启恢复失败 | 消息丢失，发版阻塞 | 待处理 | 无关联 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) 代理 SQLite WAL 增长至 1.4–2.8 GB，阻塞网关启动（Windows） | 崩溃循环，发版阻塞 | 待处理 | 无关联 |
| [#147160](https://github.com/openclaw/openclaw/issues/147160) 2026.9.4 在 finalize:doctor 阶段更新失败 | 体验类发版阻塞问题 | 待处理 | 无关联 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) MCP 服务器初始化超时因未处理的拒绝导致网关崩溃 | 崩溃循环 | 待处理 | 修复方案明确，可排入队列 |

### P1（高优先级）
值得关注的回归问题和高影响缺陷：
- [#139847](https://github.com/openclaw/openclaw/issues/139847)：活跃回复运行期间发送的消息被丢弃（2026.9.2 版本引入的回归）
- [#144809](https://github.com/openclaw/openclaw/issues/144809)：claude-cli 运行时长超过 `RUN_STALE_TAKEOVER_MS` 会丢失全部生成的回复
- [#132765](https://github.com/openclaw/openclaw/issues/132765)：`agents_wait` 忽略 `timeoutSeconds` 参数，约 60 秒后作为工具错误终止
- [#113701](https://github.com/openclaw/openclaw/issues/113701)：大型工具输出超出上下文窗口，压缩无法恢复，会话进入失败循环

---

## 6. 功能请求与路线图信号
用户提出的、参与度高或关联开发工作、有望在后续版本中落地的功能：
1. **[#27445](https://github.com/openclaw/openclaw/issues/27445) 为子代理完成通知路由提供 `announceTarget` 选项（5 👍，关联 PR 待合并）**
   理由：参与度高，有已开启的关联 PR，解决了多步骤工作流编排的核心缺口。有望在 2026.9.x 小版本中上线。
2. **[#81182](https://github.com/openclaw/openclaw/issues/81182) 溢出恢复应在完整自动压缩超时前截断工具结果（2 👍，关联 PR 待合并）**
   理由：针对常见痛点的直接体验优化，有已开启的关联 PR，与正在进行的上下文溢出可靠性工作方向一致。
3. **[#58057](https://github.com/openclaw/openclaw/issues/58057) 白名单的动态身份解析（`dmPolicy: dynamic`）（1 👍）**
   理由：解决多用户部署的可扩展性问题，尤其是 iMessage/BlueBubbles 通道场景。本周因过期被关闭，但仍是高价值的企业级用例；可能在 2026.9 稳定性工作完成后重新评估。
4. **[#60381](https://github.com/openclaw/openclaw/issues/60381) 浏览器工具：为点击操作添加强制参数，并暴露 evaluate 动作（1 👍）**
   理由：提升 Playwright 浏览器工具与现代前端框架的兼容性。本周因过期被关闭，但属于自动化场景中频繁被请求的增强功能。

---

## 7. 用户反馈总结
本周 issue 中反映的真实用户痛点和使用场景：
- **更新可靠性受挫**：多名用户反馈在 macOS、Linux/arm64 和 Windows 平台上从 2026.9.2/9.3 升级到 9.4 失败，伴随回滚失败和服务中断（[#146394](https://github.com/openclaw/openclaw/issues/146394)、[#145192](https://github.com/openclaw/openclaw/issues/145192)、[#147160](https://github.com/openclaw/openclaw/issues/147160)）。
- **子代理编排不可靠**：在 Telegram、Discord 和 Kubernetes 上的生产部署反馈子代理静默失败、完成结果丢失、会话卡住且无恢复路径（[#44925](https://github.com/openclaw/openclaw/issues/44925)、[#143334](https://github.com/openclaw/openclaw/issues/143334)、[#137332](https://github.com/openclaw/openclaw/issues/137332)）。
- **资源泄漏与性能下降**：长期运行的实例出现僵尸进程堆积（[#97616](https://github.com/openclaw/openclaw/issues/97616)）、SQLite 数据库无限制增长（[#114612](https://github.com/openclaw/openclaw/issues/114612)、[#143524](https://github.com/openclaw/openclaw/issues/143524)），以及 Codex hook 中继导致的 CPU 飙升（[#91009](https://github.com/openclaw/openclaw/issues/91009)）。
- **上下文溢出边缘情况**：处理大型工具输出（网页抓取、截图、执行结果）的用户反馈会话进入无法恢复的失败循环，压缩和截断机制均无法生效（[#113701](https://github.com/openclaw/openclaw/issues/113701)、[#81182](https://github.com/openclaw/openclaw/issues/81182)）。
- **积极信号**：MCP 工具注入修复（[#85030](https://github.com/openclaw/openclaw/issues/85030)）收到 6 个 👍 反应，表明社区对 MCP 生态支持有强烈需求。

---

## 8. 待办事项关注
长期存在的高影响 issue 和 PR，近期未得到维护者解决，值得关注：
1. **[#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用之间的文本泄漏到消息通道**
   创建时间：2026-02-24 | 存续时长：约 7 个月 | P1，安全影响
   状态：需维护者评审、产品决策和安全评审；关联 PR 已开启，但未沟通解决路径。
2. **[#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成结果静默丢失**
   创建时间：2

---

## 横向生态对比

# 跨项目AI Agent生态对比报告
*报告日期：2026-09-14 | 数据来源：5个主流开源个人AI Agent项目的每周项目摘要*

---

## 1. 生态概览
开源个人AI助手与Agent生态正处于快速成熟阶段，2026.9发布周期内，各项目均在核心可靠性加固与生态扩展之间寻求平衡。在所有受访项目中，近期重大重构（会话存储、更新流水线、状态管理）引发的稳定性回退是短期首要任务，同时多租户部署支持需求、MCP（Model Context Protocol）集成成熟度，以及面向全球用户的本地化需求也在不断增长。生态正从单用户个人工具向生产级团队与企业部署转型，安全加固、运维可靠性与可扩展性受到越来越多的关注。各项目在多Agent、多用户部署模式的共享协议支持上正逐步对齐。

---

## 2. 活跃度对比
| 项目 | 已更新Issue（开放/关闭） | 已更新PR（开放/已合并） | 本周发布次数 | 健康度评分（1-10） |
|---------|-----------------------------|-----------------------------|---------------------|---------------------|
| OpenClaw | 500（284 开放 / 216 关闭） | 500（254 开放 / 246 已合并） | 3（2个稳定版，1个LTS版） | 7/10（活跃、迭代速度快，面临2026.9稳定渠道的稳定性压力） |
| Hermes Agent | 50（42 开放 / 8 关闭） | 50（44 开放 / 6 已合并） | 2（v0.21.x 补丁发布） | 6/10（活跃，处于会话存储重构后的稳定阶段） |
| IronClaw | 5（5 开放 / 0 关闭） | 27（18 开放 / 9 已合并） | 0 | 7/10（迭代速度稳定，专注于安全与增量修复） |
| QwenPaw | 50（37 开放 / 13 关闭） | 50（32 开放 / 18 已合并） | 3（1个稳定版，2个预发布版） | 8/10（健康度良好，社区增长强劲，交付节奏稳定） |
| ZeroClaw | 50（41 开放 / 9 关闭） | 50（50 开放 / 0 已合并） | 0 | 6/10（迭代速度快，处于v0.8.5前的稳定阶段，待评审积压任务多） |

*健康度评分方法：综合考量活跃度、合并吞吐量、发布稳定性、Issue分类响应速度，以及开放严重Bug的严重程度加权计算。*

---

## 3. OpenClaw的定位
### 相较于同类项目的优势
- **规模与迭代速度**：OpenClaw的开发吞吐量领先一个数量级，Issue与PR体量是次大项目的10倍，体现了其最大的贡献者群体（最新稳定版有294位贡献者），以及最成熟的LTS支持节奏，拥有活跃的扩展稳定发布线。
- **渠道支持广度**：支持最广泛的消息渠道（Slack、Telegram、微信、iMessage等），跨渠道交付修复的记录最成熟。
- **MCP生态成熟度**：MCP集成最为先进，已解决工具注入Bug，并积极推进标准化对齐。

### 技术路线差异
OpenClaw优先打造企业级网关运行时可靠性、大规模子Agent编排，以及分布式部署的更新流水线安全性，而规模较小的项目则专注于桌面端用户体验或单用户工作流。其架构以网关-运行时模型为核心，采用插件化扩展机制，而同类项目多采用更单体或轻量级的设计。

### 社区规模对比
OpenClaw拥有最大且最活跃的社区，核心稳定性Issue的评论量最高，贡献者与维护者体系最完善。相比之下，QwenPaw和Hermes Agent的社区规模较小但仍在增长，IronClaw和ZeroClaw的团队规模更小且更聚焦。

---

## 4. 共同技术关注领域
1. **状态存储 / SQLite 可靠性**
   - *涉及项目*：OpenClaw、Hermes Agent、QwenPaw
   - *需求*：三个基于SQLite的项目均报告了严重的SQLite WAL增长、状态损坏与会话持久化Bug。OpenClaw报告1.4–2.8 GB的WAL膨胀导致启动阻塞；Hermes Agent在v0.21.0重构后出现多起WAL删除回退问题；QwenPaw报告会话索引同步失败与幽灵会话问题。

2. **MCP（Model Context Protocol）集成成熟度**
   - *涉及项目*：OpenClaw、IronClaw、QwenPaw
   - *需求*：OpenClaw已解决MCP子Agent工具注入Bug；IronClaw正在处理多租户MCP目录隔离与跨用户数据泄露问题；QwenPaw在v2.2.x中出现MCP连接回退问题。所有项目均在投入资源提升MCP的安全性、可靠性与标准化对齐程度。

3. **更新流水线可靠性**
   - *涉及项目*：OpenClaw、Hermes Agent、QwenPaw
   - *需求*：OpenClaw在2026.9.x版本中存在多个P0级更新失败Bug；Hermes Agent因临时文件问题导致桌面端更新失败；QwenPaw报告插件安装阻力与更新用户体验缺口。安全、原子化、可恢复的更新是跨项目的共同优先级。

4. **子Agent编排可靠性**
   - *涉及项目*：OpenClaw、QwenPaw、ZeroClaw
   - *需求*：OpenClaw报告子Agent静默完成丢失与超时失败问题；QwenPaw面临子Agent生成超时Bug与模型覆盖问题；ZeroClaw存在SOP引擎步骤验证Bug，允许下游步骤在验证失败后仍继续运行。

5. **多租户 / 团队部署支持**
   - *涉及项目*：IronClaw、QwenPaw、OpenClaw
   - *需求*：IronClaw正在修复跨用户MCP数据泄露问题；QwenPaw的社区对Hub多租户功能与管理员管理的共享工作区需求旺盛；OpenClaw通过渠道级安全加固满足企业多用户部署需求。

6. **本地化（i18n）需求**
   - *涉及项目*：Hermes Agent、QwenPaw
   - *需求*：两个项目均有社区贡献的巴西葡萄牙语桌面端本地化内容，成熟可发布的PR正等待维护者评审，反映了全球用户群体的增长。

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|----------|----------|
| **核心功能方向** | 企业级网关可靠性、多渠道交付、LTS支持 | 桌面端 + TUI体验、会话存储性能 | MCP安全、多租户服务器部署、基准测试 | 内存系统（ReMe、Auto Fin）、插件生态、Hub团队功能 | 核心运行时安全、SOP工作流引擎、边缘网格架构 |
| **目标用户** | 企业自托管运维人员、大规模机器人部署方 | 个人高级用户、全球桌面/TUI用户 | 多租户SaaS运营商、MCP生态构建者 | 个人生产力用户、小型团队 | 技术高级用户、边缘计算爱好者 |
| **技术架构** | 网关-运行时、插件化、分布式编排 | 单体桌面端 + 会话存储重构、提供商抽象 | 基于Rust、MCP优先、多租户隔离 | 单体架构+插件商店、内存中心设计 | 基于Rust、SOP引擎、模块化安全框架 |
| **发布节奏** | 稳定渠道 + LTS、频繁补丁发布 | 快速小版本发布、重构后补丁密集 | 缓慢、增量式、本周期无发布 | Beta + 稳定双轨制、功能驱动发布 | 基于稳定里程碑、批量合并发布 |

---

## 6. 社区动能与成熟度
### 活跃度梯队
1. **高速度、规模化成熟**：OpenClaw — 社区最大、吞吐量最高、发布节奏成熟且具备LTS支持、贡献者治理体系最完善。
2. **高速度、成长阶段**：QwenPaw — 功能交付快速、贡献者群体不断增长、从个人用例向团队用例扩展、社区参与度高。
3. **活跃、稳定阶段**：Hermes Agent — 活跃度高但专注于重构后的Bug修复、合并吞吐量较低、i18n社区贡献强劲。
4. **稳定、聚焦开发**：IronClaw — 持续取得增量进展、专注于安全与MCP、团队规模较小但效率高、优先级明确。
5. **高速度、预发布稳定阶段**：ZeroClaw — v0.8.5版本积累了大量待合并PR、专注于流程成熟与架构工作、当前合并吞吐量较低。

### 成熟度评估
- **最成熟**：OpenClaw（治理体系完善、LTS支持、企业级）
- **增长最快**：QwenPaw（功能集不断扩展、社区增长、团队路线图清晰）
- **流程成熟最快**：ZeroClaw（投入建设RFC流程、扩展贡献者工作流）

---

## 7. 趋势信号
1. **从个人部署向团队/企业部署转型**
   - *证据*：QwenPaw Hub多租户路线图需求、IronClaw多租户安全修复、OpenClaw企业渠道安全加固。
   - *对开发者的价值*：在架构设计早期就优先考虑租户隔离、基于角色的访问控制、共享工作区原语，为团队路线图打下基础。

2. **MCP正成为事实上的Agent扩展标准**
   - *证据*：所有项目均在投入资源提升MCP的可靠性、安全性与标准化程度（SEP-414调用方归因、工具注入修复、多租户MCP隔离）。
   - *对开发者的价值*：将MCP兼容性与合规性作为核心扩展层投入，而非可选集成项。

3. **SQLite是主流状态存储，但WAL与持久性仍是未解决的痛点**
   - *证据*：5个项目中有3个因近期重构面临严重的SQLite WAL膨胀、损坏与并发Bug。
   - *对开发者的价值*：投入资源做好SQLite WAL管理、连接处理、连接池设计与持久性测试，作为核心基础设施投资。

4. **可靠性已超越功能迭代速度成为首要优先级**
   - *证据*：所有项目均处于稳定阶段，社区最关注稳定性回退、更新可靠性与Bug修复，而非新功能开发。
   - *对开发者的价值*：优先开展稳定性测试、回归测试套件建设与重大重构的增量发布，避免因发布后Bug导致用户流失。

5. **本地化是社区驱动的高影响力增长杠杆**
   - *证据*：Hermes Agent与QwenPaw均有社区贡献的完整本地化PR，包含数千行翻译内容，以极低的维护者投入推动了高参与度与全球用户增长。
   - *对开发者的价值*：尽早建立i18n框架与贡献指南，充分利用全球社区贡献扩展用户群体。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报 | 2026-09-14
代码仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 近7天概览
本周Hermes Agent开发活跃度较高，核心工作围绕v0.21.x版本会话存储重构的上线推进，期间共更新50个issue（42个待处理、8个已关闭）和50个PR（44个待处理、6个已合并/关闭）。核心攻坚工作主要聚焦于v0.21.0引入的`state.db` WAL（预写日志）稳定性回归问题，该问题导致Linux、macOS及多配置部署场景下出现会话中断。项目已发布两个补丁版本解决状态存储的核心脆弱性，同时社区贡献也推动了国际化、平台专属修复及新服务商支持等工作。整体项目处于活跃但偏向稳定化的阶段，维护团队将状态存储可靠性的优先级置于新功能开发之上。

---

## 2. 版本发布
本周v0.21.x系列共发布2个补丁版本，均针对重构后的会话存储稳定性问题：
- **[v2026.9.11 / v0.21.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.11)** – *State.db 补丁版本*  
  修复了v0.21.0重构后会话存储连接处理的脆弱性，具体解决了第二个`state.db`写入进程会抵消彼此锁、进而损坏正常会话的问题。
- **[v2026.9.7 / v0.21.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7)** – *汇总补丁版本*  
  汇总了v0.21.0以来`main`分支的变更，面向带标签部署和下游使用者，无独立功能集。

*破坏性变更/迁移说明：无；两个版本均为v0.21.0用户的可直接替换的补丁升级。*

---

## 3. 项目进展
近7天共合并/关闭6个PR，为核心组件带来修复与渐进式优化：
1. **修复MCP OAuth令牌持久化bug** – 解决了issue [#62333](https://github.com/NousResearch/hermes-agent/issues/62333)，该问题中OAuth `refresh_token`在每次令牌刷新时都会被清除，导致登录后约1小时MCP服务器连接就会中断。
2. **修复飞书/Lark WebSocket崩溃问题** – 解决了issue [#67358](https://github.com/NousResearch/hermes-agent/issues/67358)，该问题中正常的WebSocket关闭帧（代码1000）会导致整个网关进程退出，而非优雅重连。
3. **修复控制台会话卡死状态bug** – 解决了issue [#108383](https://github.com/NousResearch/hermes-agent/issues/108383)，该问题中Web控制台的聊天会话会永久停留在"需要设置"/排队状态，而同一网关上的CLI聊天却能正常运行。
4. **优化模型选择器推理强度UX问题** – 实现了功能 [#85209](https://github.com/NousResearch/hermes-agent/issues/85209)，仅展示所选模型原生支持的推理强度等级，移除了针对能力有限模型的具有误导性的7级强度标尺。
5. 另外2个已关闭PR填补了v0.21.x上线相关的文档和测试稳定性缺口。

---

## 4. 社区热门话题
本周讨论度最高的话题围绕状态存储可靠性和本地化需求展开：
1. **[Issue #40239: 新增葡萄牙语（巴西葡语pt-BR）桌面端国际化支持](https://github.com/NousResearch/hermes-agent/issues/40239)**  
   *12条评论，4 👍 | 待处理，需决策*  
   本周互动量最高的issue：社区强烈要求推出完整的pt-BR界面本地化，指出后端/终端界面已有成熟的葡萄牙语支持。配套的待处理PR [#92590](https://github.com/NousResearch/hermes-agent/pull/92590) 包含3400多行桌面端翻译文本，是一项成熟、可直接上线的社区贡献。
2. **[Issue #109727: Linux上第二个Hermes进程会删除运行中state.db的WAL文件](https://github.com/NousResearch/hermes-agent/issues/109727)**  
   *8条评论 | 待处理，P1 严重*  
   v0.21.0会话存储重构后被广泛反馈的回归问题：即使是只读的CLI命令（例如`hermes sessions list`）也会删除WAL文件，进而中断运行中的网关会话，触发`DeletedWalGenerationError`。
3. **[Issue #109641: macOS WAL预连接拒绝机制无效](https://github.com/NousResearch/hermes-agent/issues/109641)**  
   *5条评论 | 待处理，P1 严重*  
   Linux WAL bug的后续问题：v0.21.2的WAL保护补丁仅在Linux上生效，macOS仍存在网关重启竞态问题，会导致会话中断，且13分钟内WAL文件就会膨胀至4.2GB。

社区核心诉求：用户优先关注核心会话状态的稳定性，同时强烈需求扩大本地化支持，以匹配Hermes不断增长的全球用户规模。

---

## 5. Bug与稳定性
本周上报的bug以v0.21.x会话存储回归问题为主，按严重程度排序如下：
### 严重（P1）
| Issue | 严重程度 | 状态 | 修复PR |
|-------|----------|--------|--------|
| [#109727](https://github.com/NousResearch/hermes-agent/issues/109727) – Linux上第二个进程删除WAL导致运行中网关故障 | 会话数据丢失 / 完全中断 | 待处理 | [#110179](https://github.com/NousResearch/hermes-agent/pull/110179)（持有锁时拒绝state.db写入；重放被转移的会话记录） |
| [#109641](https://github.com/NousResearch/hermes-agent/issues/109641) – macOS WAL持有者扫描仅支持Linux，引发网关重启竞态 | 会话中断 + WAL膨胀 | 待处理 | 进行中，计划实现跨平台持有者检测 |
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) – 集群重启后遗留长期存活的WAL持有者，数小时内阻止新进程打开 | 多实例宕机 | 待处理 | 与WAL生成切换重构相关 |
| [#110106](https://github.com/NousResearch/hermes-agent/issues/110106) – 并发`tui_gateway`进程频繁触发WAL淘汰，中断进行中的会话 | 会话静默失败 | 待处理 | [#110179](https://github.com/NousResearch/hermes-agent/pull/110179) 部分修复 |
| [#109946](https://github.com/NousResearch/hermes-agent/issues/109946) – 桌面端全配置侧边栏触发运行中网关的WAL删除 | 多配置宕机 | 待处理 | 暂无PR |
| [#110276](https://github.com/NousResearch/hermes-agent/issues/110276) – macOS单进程多句柄WAL分裂导致自重启循环 | 桌面端崩溃循环 | 待处理 | 暂无PR |
| [#110421](https://github.com/NousResearch/hermes-agent/issues/110421) – Windows安装器在包管理器shim处理的`uv`环境下安装失败 | 安装失败 | 待处理 | 关联PR [#110421](https://github.com/NousResearch/hermes-agent/pull/110421) 中包含修复 |

### 高优先级（P2）
核心P2 bug包括：
- [#107905](https://github.com/NousResearch/hermes-agent/issues/107905)：恢复防护机制将压缩副本计入统计，导致被深度压缩的长会话无法恢复
- [#107899](https://github.com/NousResearch/hermes-agent/issues/107899)：内部诊断消息泄露到面向客户的WhatsApp部署中
- [#110416](https://github.com/NousResearch/hermes-agent/issues/110416)：即使开启`security.redact_secrets: true`，会话存储仍会明文保存凭证（存在安全边界风险）

---

## 6. 功能需求与路线图信号
本周用户提出的功能需求指向了近期可能的路线图优先级，大概率会在v0.22或下一个次要版本中落地：
1. **葡萄牙语（巴西葡语pt-BR）桌面端本地化**（[#40239](https://github.com/NousResearch/hermes-agent/issues/40239) + PR [#92590](https://github.com/NousResearch/hermes-agent/pull/92590)） – *上线概率极高*：贡献已完成，包含3400多行翻译文本，仅待维护团队决策。
2. **桌面端按任务设置推理强度**（PR [#110435](https://github.com/NousResearch/hermes-agent/pull/110435)） – *上线概率高*：与近期合并的模型选择器强度等级修复 [#85209](https://github.com/NousResearch/hermes-agent/issues/85209) 对齐，将现有CLI功能扩展到桌面端。
3. **桌面端多智能体工作区**（[#50750](https://github.com/NousResearch/hermes-agent/issues/50750)） – *中长期*：支持可调整大小的分屏视图，同时监控多个智能体，用户需求持续存在但暂无活跃PR。
4. **终端横幅显示OpenRouter余额**（[#50305](https://github.com/NousResearch/hermes-agent/issues/50305)） – *上线概率中等*：低复杂度的体验优化功能，社区关注度稳定。
5. **Lanseq模型服务商支持**（PR [#110019](https://github.com/NousResearch/hermes-agent/pull/110019)） – *上线概率高*：完整兼容OpenAI接口的服务商实现，附带测试，面向亚太地区用户。

---

## 7. 用户反馈汇总
本周收集到的真实用户痛点与使用场景：
- **首要痛点**：v0.21.x状态存储不稳定，导致自托管和多配置用户出现生产环境宕机，反馈包括会话静默失败、网关崩溃循环、重启后数小时无法使用等问题。多名用户表示已降级到v0.20.x作为临时解决方案。
- **平台专属阻碍**：Windows安装器因包管理器shim问题失败、macOS桌面端在AMD GPU上出现渲染崩溃（[#76947](https://github.com/NousResearch/hermes-agent/issues/76947)）、Linux systemd依赖缺失（PR [#110440](https://github.com/NousResearch/hermes-agent/pull/110440) 已处理），这些问题都构成了用户上手的障碍。
- **国际化需求**：非英语用户对本地化的需求优先级很高，巴西葡语和印尼语社区主动提交了完整的翻译PR（[#92590](https://github.com/NousResearch/hermes-agent/pull/92590)、[#92192](https://github.com/NousResearch/hermes-agent/pull/92192)、[#93632](https://github.com/NousResearch/hermes-agent/pull/93632)）。
- **密码管理器体验缺口**：用户反馈1Password/Bitwarden集成仅支持登录项中保存的第一个URL（[#110423](https://github.com/NousResearch/hermes-agent/issues/110423)），已有3个社区PR提交修复该问题。
- **积极信号**：用户正积极基于Hermes构建面向客户的应用场景（WhatsApp客服智能体、飞书机器人部署），表明企业/运营端采用率正在增长。

---

## 8. 待办关注
以下长期存在的高影响事项仍待维护团队跟进，存在进一步滞后的风险：
1. **[Issue #40239 / PR #92590: 巴西葡语桌面端本地化](https://github.com/NousResearch/hermes-agent/issues/40239)** – 2026年6月开启，完整的社区PR于2026年8月提交。尽管是本周互动量最高的issue，仍处于"需决策"状态；若迟迟不处理，可能导致贡献者流失。
2. **[Issue #76947: Linux + AMD RX 7900 XTX 环境下桌面端渲染崩溃循环](https://github.com/NousResearch/hermes-agent/issues/76947)** – 2026年8月开启，即使禁用GPU也仍存在该问题。暂无分配的维护人员或修复PR，导致高端Linux AMD用户的桌面端体验完全不可用。
3. **[PR #36202: 飞书CardKit原生流式卡片支持](https://github.com/NousResearch/hermes-agent/pull/36202)** – 2026年6月开启，旨在解决飞书的主要体验问题（更新闪烁、速率限制、无打字机效果）。尽管飞书用户群体活跃，且近期有相关飞书bug修复，该PR仍处于停滞状态。
4. **[Issue #50750: 桌面端多智能体窗口](https://github.com/NousResearch/hermes-agent/issues/50750)** – 2026年6月开启，社区反复更新需求，但未得到官方路线图回应。与竞品AI智能体相比，这是核心高阶用户功能的缺口。
5. **[PR #95401: 桌面端更新的Gitignore OMH临时运行时修复](https://github.com/NousResearch/hermes-agent/pull/95401)** – 2026年8月开启，修复了常见的桌面端更新失败问题——残留的临时文件会阻止自动更新。暂无审核或合并时间安排。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报
*报告日期：2026-09-14 | 代码仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

---

## 1. 近7天整体进展
过去7天，IronClaw 项目保持稳定开发节奏，当前有5个活跃的未关闭 Issue（无新增关闭），27个 Pull Request 有更新（9个已合并/关闭，18个处于开放状态）。工作重点集中在 MCP（模型上下文协议）的安全性与功能修复、Web UI 易用性优化、依赖维护，以及基准测试失败分类的持续跟进。本周未发布新版本，说明团队正在下一个版本发布前，推进增量修复与功能打磨。
依赖更新的PR数量占比可观（27个PR中有14个为依赖升级），体现了团队对基础设施的持续维护；而针对跨用户数据泄露、输入法输入Bug的定向修复，则显示出团队对安全性与终端用户体验的积极关注。

---

## 2. 版本发布
近7天无新版本发布。

---

## 3. 项目进展（已合并/关闭的PR）
本周共有9个PR被合并或关闭，覆盖核心功能、安全性与跨平台支持的优化：
- **MCP 目录合并修复**：[PR #8083](https://github.com/nearai/ironclaw/pull/8083) 修复了共享服务器上单个用户的MCP工具发现结果会覆盖所有其他用户目录的严重问题，修复方式为将发现的目录进行合并而非直接替换。
- **Hosted-MCP 提供商打包**：[PR #8089](https://github.com/nearai/ironclaw/pull/8089) 为 agent.market 托管的MCP提供商新增了官方内置包，附带预发现的备用工具声明。
- **空环境变量处理修复**：[PR #8088](https://github.com/nearai/ironclaw/pull/8088) 修复了空字符串环境变量会静默回退到默认值的问题，避免运维人员因输入拼写错误导致配置异常。
- **共享频道歧义修复**：[PR #8076](https://github.com/nearai/ironclaw/pull/8076) 优化了助手的行为逻辑，可区分已断开连接的共享频道与未配对账户，并在产品端、适配器端和兼容OpenAI的接口端提供统一的拒绝提示信息。
- **Telegram 命令菜单支持**：[PR #8072](https://github.com/nearai/ironclaw/pull/8072) 实现了Telegram扩展激活时自动注册Bot API命令菜单（`/model`、`/status`、`/new`、`/stop`、`/interrupt`）的功能。
- **依赖更新**：共关闭3个依赖升级PR，包括 [PR #8097](https://github.com/nearai/ironclaw/pull/8097)（24项Rust“其他全部”分组依赖更新）和 [PR #8080](https://github.com/nearai/ironclaw/pull/8080)（21项Rust“其他全部”分组依赖更新）。

---

## 4. 社区热点话题
本次数据集中所有PR和Issue的评论数均未定义，因此排序基于Issue/PR的相关性及相关工作的关联度：
1. **Hosted-MCP 跨用户元数据泄露**（[Issue #6778](https://github.com/nearai/ironclaw/issues/6778)，2条评论）：这是当前活跃Issue中评论数最多的问题，暴露了一个安全漏洞：工具目录仅按扩展ID索引，未关联用户安装信息，导致多主体服务器上出现跨用户数据泄露。目前已衍生出3个相关修复PR，说明这是维护者的最高优先级事项。
2. **WebChat v2 输入法组合Bug**（[Issue #8091](https://github.com/nearai/ironclaw/issues/8091)）：这是用户上报的终端用户易用性回归问题，表现为按回车确认输入法输入时会误发送聊天消息。对应的修复PR（[#8092](https://github.com/nearai/ironclaw/pull/8092)）在1天内就已提交，体现了团队对用户侧Bug的快速响应。
3. **每日失败分类跟踪**（[Issue #8093](https://github.com/nearai/ironclaw/issues/8093)、[Issue #8081](https://github.com/nearai/ironclaw/issues/8081)）：这是两个持续跟进的基准测试分析Issue，分别跟踪officeqa测试套件中42个未通过的任务，问题主要集中在DeepSeek-V4-Flash模型的数值计算错误和导航失败上，反映了团队在模型质量基准测试方面的持续投入。

---

## 5. Bug与稳定性
近7天上报的Bug，按严重程度排序如下：
1. **严重：Hosted-MCP 跨用户工具目录覆盖**  
   - 来源：[Issue #6778](https://github.com/nearai/ironclaw/issues/6778)  
   - 描述：在多用户的Hosted-MCP服务器上，使用某一用户凭证发现的工具目录会按扩展ID全局发布，导致跨用户元数据泄露，并覆盖其他用户的工具列表。  
   - 修复状态：部分修复已合并（[PR #8083](https://github.com/nearai/ironclaw/pull/8083) 新增了目录合并逻辑）；另一项按调用方索引的修复正在进行中（[PR #8090](https://github.com/nearai/ironclaw/pull/8090)）。
2. **高危：运维安装的扩展无法使用**  
   - 来源：[Issue #8085](https://github.com/nearai/ironclaw/issues/8085)（含Bug描述的PR）  
   - 描述：扩展清单构造函数与校验逻辑不一致，导致运维安装的包即使构建成功也无法使用。  
   - 修复状态：修复PR已提交（[#8085](https://github.com/nearai/ironclaw/pull/8085)）。
3. **中危：WebChat v2 输入法输入会提前发送消息**  
   - 来源：[Issue #8091](https://github.com/nearai/ironclaw/issues/8091)  
   - 描述：按回车确认输入法组合内容时，会直接提交聊天消息，而非仅完成文本输入，导致用户误发送未完成的消息。  
   - 修复状态：修复PR已提交（[#8092](https://github.com/nearai/ironclaw/pull/8092)）。
4. **中危：`ironclaw skills list` 命令行不显示运行时安装的技能**  
   - 来源：[Issue #8086](https://github.com/nearai/ironclaw/issues/8086)  
   - 描述：命令行的技能列表仅显示当前配置用户的技能，不显示代理或其他用户安装的技能，会误导调试人员。  
   - 修复状态：暂无修复PR提交。
5. **低危：提示词上下文限制硬编码为128k**  
   - 来源：[PR #8087](https://github.com/nearai/ironclaw/pull/8087)  
   - 描述：提示词上下文的Token配额是硬编码常量，使用更大上下文模型的部署场景需要修改代码才能调整。  
   - 修复状态：功能PR已提交，拟将其改为可覆盖的配置项。

---

## 6. 功能需求与路线图信号
以下是正在推进的功能开发和用户请求的能力，有望在后续版本中上线：
1. **Hosted-MCP 调用的 SEP-414 调用方归因**（[PR #8084](https://github.com/nearai/ironclaw/pull/8084)）：这是一项可选启用的标准，支持向MCP服务器传递会话ID和重试元数据，从而实现按会话状态管理和幂等重试。该功能与当前MCP生态的标准化方向一致，预计很快会作为可选功能发布。
2. **可配置的提示词上下文限制**（[PR #8087](https://github.com/nearai/ironclaw/pull/8087)）：将硬编码的128k Token配额替换为可覆盖的配置项，这是使用大上下文模型的部署场景的高需求功能。
3. **按调用方隔离的Hosted-MCP目录**（[PR #8090](https://github.com/nearai/ironclaw/pull/8090)）：在已合并的目录合并修复基础上，实现按用户完全隔离工具目录，是多租户部署场景的关键安全改进。
4. **轮次链路回归测试覆盖**（[PR #8098](https://github.com/nearai/ironclaw/pull/8098)）：扩充了轮次状态链路元数据的测试覆盖，体现了团队对代理状态可靠性的持续投入。

---

## 7. 用户反馈总结
本周Issue中反映的真实用户痛点与使用场景：
- **多租户部署的安全痛点**：Hosted-MCP跨用户数据泄露问题（#6778）凸显了运行共享IronClaw实例的运维人员面临的核心缺口——用户数据隔离是这类场景的核心需求。
- **终端用户输入体验摩擦**：用户`supermomonga`上报的输入法组合Bug（#8091）体现了非拉丁文字用户面临的实际易用性痛点，且该问题被注明是此前已修复问题的复现。
- **调试工具的功能缺口**：`ironclaw skills list` 的可见性问题（#8086）反映出用户预期（命令行应显示代理可访问的所有技能）与当前行为的 mismatch，导致用户浪费调试时间。
- **部署灵活性需求**：硬编码的上下文限制（PR #8087）和空环境变量处理修复（PR #8088）都反映了运维人员的反馈：配置不灵活会增加运维负担。

---

## 8. 待办事项观察
需要维护者关注的长期开放事项：
1. **WASM 依赖组更新**（[PR #7834](https://github.com/nearai/ironclaw/pull/7834)，创建于2026-08-23，已开放22天）：这是一项规模较大、中等风险的Rust WASM依赖升级（涉及wasmtime、wit-component、wit-parser），已开放超过3周，仍待审核与测试。
2. **GitHub Actions 依赖组更新**（[PR #8079](https://github.com/nearai/ironclaw/pull/8079)，创建于2026-09-06）：这是一项包含6个action的更新，其中`actions/setup-node`从v4大版本升级到v7，合并前可能需要进行流水线验证。
3. **Hosted-MCP 按安装隔离目录修复**（[Issue #6778](https://github.com/nearai/ironclaw/issues/6778)，创建于2026-07-28）：这个最初的跨用户数据泄露问题已开放近7周，部分修复已合并，但完整的按安装索引功能仍在推进中。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报 | 2026-09-14
代码仓库：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 近7天项目概览
过去一周 QwenPaw 保持高速开发节奏，共更新 50 个 Issue（37 个开放/活跃，13 个已关闭）和 50 个 Pull Request（32 个开放，18 个已合并/关闭），同时发布了 3 个 v2.2.1 系列新版本。项目在智能体模型路由、内存管理、多协议兼容等核心能力上取得进展，同时修复了桌面端、MCP 集成、会话可靠性等多个用户反馈的 Bug。社区参与度持续走高，围绕多租户 Hub 功能、插件商店用户体验、长时任务稳定性展开了热烈讨论。项目整体健康度良好，新贡献者 PR 源源不断，Issue 处理响应及时。

---

## 2. 版本发布
本周共发布 3 个新版本，均属于 v2.2.1 发布周期：
### v2.2.1（稳定版）
- [发布链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1)
- **核心变更**：
  - 新增单智能体模型路由配置，支持服务商偏好设置和故障转移逻辑（[#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)）
  - 引入 Auto Fin 主动内存巡检功能，并升级 ReMe 内存系统
- 无破坏性变更，可从 v2.2.0 增量升级。

### v2.2.1-beta.2（预发布版）
- [发布链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2)
- **核心变更**：
  - 优化控制台 UI 中的移动端智能体选择器（[#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623)）
  - 统一 QwenPaw CSS 选择器，保障前端样式一致性
  - 版本号升级至 2.2.1b2（[#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643)）

### v2.2.1-beta.1（预发布版）
- [发布链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)
- **核心变更**：
  - 初步实现智能体模型路由设置功能（[#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)）
  - 更新 v2.2.0 版本的官网文档（[#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517)）
  - 修复流式传输过程中的聊天会话同步问题

---

## 3. 项目进展
本周关闭/合并的 PR 推动了以下领域的进展：
- **本地化**：巴西葡萄牙语（pt-BR）语言支持已合并（[#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009)），后续 PR（[#7734](https://github.com/agentscope-ai/QwenPaw/pull/7734)）完成了全量键值对齐并修复了翻译错误。
- **Telegram 频道优化**：Telegram 端 Markdown 表格渲染修复已合并（[#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)），将原始管道字符替换为格式化的 `<pre>` 块。
- **Bug 修复**：
  - 解决了 `subagent_model` 覆盖不生效的问题（子智能体始终继承父智能体模型）（[#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676)），诊断 PR [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) 提升了根因排查透明度。
  - 修复了导致"幽灵会话"的会话索引与磁盘文件同步问题（[#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698)）。
  - 修复了 2.2.1-beta.2 中切换智能体时静默创建新对话的回归问题（[#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687)）。
- **插件商店 UX**：针对多步骤插件安装/更新流程的反馈（[#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582)）已完成分类处理，计划在后续 UI 改版中落地，Issue 已关闭。

---

## 4. 社区热门话题
本周讨论最活跃的话题围绕团队使用、内存可靠性、移动/桌面端 UX 展开：
1. **QwenPaw Hub 多租户路线图讨论**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）
   - 26 条评论，4 个👍 — 本周互动量最高的 Issue。
   - 核心诉求：随着 QwenPaw 从个人使用场景向团队场景扩展，社区强烈需求面向团队的功能，包括管理员管理技能、共享智能体工作区、多用户访问控制等。

2. **部署页面 UX 优化**（[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)）
   - 10 条评论 — 相关反馈已纳入 v2.2.1 beta 版 UI 更新，Issue 已关闭。
   - 核心诉求：移动端用户反馈控制按钮难以点击，还容易误触"停止"按钮，反映出网页控制台的移动端使用量正在增长。

3. **停止任务未真正终止执行**（[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)）
   - 6 条评论。
   - 核心诉求：用户需要可靠的任务生命周期控制，尤其是对于长时运行的智能体工作流，部分执行可能会产生副作用（例如文件修改、API 调用）。

4. **内存持久化与一致性问题**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)、[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)、[#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)）
   - 三个相关 Issue 合计 10 条评论。
   - 核心诉求：用户依赖 QwenPaw 处理长上下文开发和工作流任务，因此内存/会话丢失、配置漂移是影响严重的痛点，会削弱用户信任。

---

## 5. Bug 与稳定性
本周上报的 Bug 按严重程度排序如下：
| 严重程度 | Issue | 描述 | 修复 PR 状态 |
|----------|-------|-------------|---------------|
| 严重 | [三条路径叠加导致内存耗尽](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 无界流缓冲区、长连接实例堆叠、死循环门控逃逸共同导致内存以约1MB/s的速度增长，直至 OOM。 | 修复 PR 尚未分配；Issue 中包含初步修复方案。 |
| 高 | [飞书会话队列消费者卡死](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 高优先级卡片消息后，单个飞书私聊会话会永久无响应，不重启无法恢复。 | 暂无修复 PR；正在调查中。 |
| 高 | [桌面端会话与模型配置丢失](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Windows 桌面端 v2.2.1 在插件部署/关闭周期后，会丢失对话历史和已保存的模型设置。 | 暂无修复 PR；关联此前的相关 Issue [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)。 |
| 高 | [任务停止 UI 状态与后端不同步](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 点击"停止"后执行指示器隐藏，但任务仍在运行，导致新请求出现 409 冲突。 | 暂无修复 PR。 |
| 中 | [2.2.x 版本 MCP 连接失败](https://github.com/agentscope-ai/QwenPaw/issues/7716) | 在 2.1.1b3 中正常工作的 MCP 服务器，升级到 2.2.x 后无法连接/注册。 | 修复 PR [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735)（保留解码后的 HTTP 错误响应）开放中；[#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729)（Java MCP SDK 兼容性）也开放中。 |
| 中 | [子智能体生成始终超时](https://github.com/agentscope-ai/QwenPaw/issues/7678) | v2.2.0 中所有子智能体任务都超时失败，与超时时长设置无关。 | 诊断 PR [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) 开放中，用于暴露配置加载失败问题。 |
| 中 | [无代理配置时 Daily Paper 静默失败](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 当 arxiv.org 无法访问时，ReMe Daily Paper 定时任务返回"无内容"，隐藏了真实的网络错误。 | 暂无修复 PR。 |
| 低 | [PDF 块仍被发送至多模态端点](https://github.com/agentscope-ai/QwenPaw/issues/7689) | 修复 #7621 仅解决了非多模态模型的问题；兼容 OpenAI 协议的多模态端点仍会拒绝 PDF 文件块。 | 暂无修复 PR。 |

---

## 6. 功能请求与路线图信号
用户提出的、大概率会纳入后续版本的功能请求：
1. **独立内存模型配置**（[#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664)）
   - 请求为 ReMe 内存写入操作（摘要、梦境）配备轻量专用模型，以降低使用昂贵旗舰聊天模型时的 Token 成本。
   - 实现 PR [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) 已开放，因此极有可能在 v2.2.2 或 v2.2.1 补丁版本中上线。

2. **插件商店 UX 改进**（[#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582)）
   - 包括一键更新插件、更新通知、安装多个插件时保留浏览状态等。
   - 用户对多设备插件管理需求强烈，且与 Hub 多租户推进方向一致，预计 1-2 个次要版本内上线。

3. **A2A 协议支持**（[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)）
   - 用户要求在现有 MCP 实现之外，新增官方 A2A（Agent-to-Agent）协议支持，作为统一 Driver 架构的一部分。
   - 架构文档中已有提及，开发工作大概率计划在 v2.2 稳定版周期之后启动。

4. **循环上下文压缩命令**（[#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679)）
   - 新增 `/compact` 命令，用于长时循环/任务模式下，当上下文超过阈值时进行压缩，以降低 Token 消耗。
   - 与正在进行的内存和上下文管理工作方向一致，是下一个次要版本的理想候选功能。

5. **历史记录 UI 布局自定义**（[#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739)）
   - 支持将对话历史移至右侧边栏，缓解小屏笔记本上的界面拥挤问题。
   - 属于低工作量前端改动，大概率会在后续控制台更新中实现。

---

## 7. 用户反馈总结
### 核心痛点
- **桌面端可靠性问题**：多位 Windows 用户反馈会话丢失、模型配置丢失、子智能体任务卡死，说明 v2.2.x 桌面版存在稳定性回归，影响日常使用。
- **内存一致性问题**：依赖 QwenPaw 进行持续开发工作流的用户反馈，智能体对项目路径、规则、上下文的记忆会随时间退化，需要反复重新指示。
- **插件管理流程繁琐**：拥有多个 QwenPaw 安装实例的高级用户认为当前插件商店过于依赖手动操作，缺少批量更新和变更通知功能。
- **停止按钮不可靠**：UI 状态与后端执行不同步，存在误操作的实际风险，尤其是对于会修改文件的任务。

### 积极信号
- 社区对 QwenPaw Hub 多租户功能热情高涨，积极为路线图优先级提供反馈。
- 首次贡献者生态持续壮大，不断提交服务商、频道和核心 Bug 的修复，体现出社区健康扩张的态势。
- 用户正将 QwenPaw 用于更复杂的场景：插件开发流水线、日常科研自动化、多智能体团队工作流等。

---

## 8. 待办事项观察
需要维护者关注的长期重要 Issue/PR：
1. **子智能体的单任务模型选择**（[#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)）
   - 2026 年 6 月开放，3 条评论，对 Token 成本优化价值很高。与近期修复的 `subagent_model` Bug 相关；完整功能实现仍待推进。

2. **Playwright 浏览器驱动自愈**（[#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776)）
   - 2026 年 8 月开放，已就绪等待人工审核。修复了 Playwright 驱动崩溃时浏览器后端永久失效的问题；对浏览器自动化用户影响很大。

3. **Atlas Cloud 服务商集成**（[#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499)）
   - 2026 年 7 月开放，首次贡献者提交的 PR。属于低风险的新 OpenAI 兼容服务商新增；等待审核中。

4. **团队协作指令首次触发无效**（[#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113)）
   - 2026 年 4 月开放。新 PR [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737)（扩展多智能体协作触发关键词）可解决该问题；需要维护者审核以关闭这个长期 Issue。

5. **Docker 镜像中内置 Himalaya 和常用 CLI 工具**（[#3429](https://github.com/agentscope-ai/QwenPaw/issues/3429)）
   - 2026 年 4 月开放，本周已关闭，但反映了用户对预配置 Docker 环境的反复需求。值得关注是否会纳入官方镜像路线图。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报
*截至2026-09-18当周 | 仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

---

## 1. 近7天总体进展
本周ZeroClaw保持高速且稳定的开发节奏，7天内共更新了50个issue和50个pull request。项目目前处于v0.8.5版本的稳定化与功能加固阶段，暂未发布新版本；所有50个已更新的PR均处于开放状态（无合并/关闭），说明开发工作正在累积，预计后续将进行批量合并。
讨论主要集中在治理流程优化、运行时稳定性缺陷、安全加固和服务提供商可靠性方面，维护者主导的RFC和跟踪议题是issue活动的主要驱动力。PR未合并但开放数量居高不下，表明项目正在处理一批评审工作量大、风险较高的变更（涉及安全、架构、核心运行时），而非开发停滞。

---

## 2. 版本发布
近7天未发布新版本。当前活跃的稳定化里程碑为v0.8.5，跟踪见[Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)。

---

## 3. 项目进展
近7天无PR合并或关闭，所有50个已更新的PR仍为开放状态。通过issue层面推进和活跃开发取得进展的工作包括：
- 关闭9个issue，主要涉及配置修复、小型工具缺陷和CI优化
- RFC流程优化取得进展，简化投票和明确PR评审规则的提案已获通过
- 核心运行时方面，成本跟踪、委托子循环和ACP会话持久性相关工作正在积极推进
- 安全功能包括OIDC验证、RPC主体认证和shell权限策略实现正在评审中

---

## 4. 社区热门话题
按评论数和参与度排序：
1. **[Issue #8692: 维护者RFC与设计议题决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15条评论）—— 这是当前最活跃的讨论线程，用于跟踪维护者层面关于RFC、设计议题和发布策略的决策。这表明随着项目贡献者规模扩大，流程成熟度正在提升，需要为高风险架构决策建立正式的队列机制。
2. **[Issue #10549: RFC：移除强制讨论窗口以简化RFC投票](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)**（10条评论）—— 该提案建议取消RFC固定的48/72小时强制讨论窗口，并让REVISE操作中止当前投票快照。核心诉求是在不牺牲评审质量的前提下，减少不必要的流程摩擦，提升RFC处理效率。
3. **[Issue #10366: RFC：明确PR评审依据、时效警告和作者操作边界](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)**（7条评论）—— 该RFC旨在规范化PR评审标准，包括为已有审批的干净PR设立快速合并通道，解决贡献者因评审要求模糊、合入时间不一致产生的不满。
4. **[Issue #10734: RpcDispatcher::process_line运行时栈使用量接近2 MB栈警戒值的2%以内](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)**（7条评论）—— CI发现了一个Windows平台特有的栈溢出缺陷，暴露出跨平台运行时稳定性的短板。

---

## 5. 缺陷与稳定性
按严重程度排序（S0 > S1 > S2 > S3）：
### 严重/高优先级（S1, p0/p1）
1. **[Issue #10066: SOP引擎在记录步骤输出模式拒绝结果前就推进并执行后续步骤](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)**（S1, p0, 开放, 处理中）—— 这是一个阻塞工作流的缺陷：步骤输出验证失败后未终止下游步骤执行，导致运行时行为错误。暂无关联修复PR。
2. **[Issue #10603: OpenCode服务提供商从不发送x-opencode-session头，导致Go模型失效并存在账号标记风险](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)**（S1, p1, 开放, 处理中, 3 👍）—— 该缺陷导致OpenCode Go模型兼容性失效，且存在用户账号被标记的风险；是本周唯一获得用户正面反馈的缺陷。暂无关联修复PR。
3. **[Issue #10785: zerocode：通知延迟导致所有运行中的会话轮次被取消](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)**（p1, 高风险, 开放, 处理中）—— 这是一个严重的回归问题：通知重同步错误地取消了所有活跃的运行中轮次，在实际多会话使用场景中被上报。暂无关联修复PR。
4. **[Issue #10788: 失败的Code/ACP轮次会将已接受的提示词和已完成的工具交互从持久化历史中丢弃](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)**（S2, p1, 高风险, 开放, 处理中）—— 这是一个数据丢失缺陷：失败的轮次会丢失所有部分进度，降低用户体验和可调试性。暂无关联修复PR。
5. **[Issue #10635: 运行时配置的成本限制未反映实际生效的全局每日预算](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)**（S2, p1, 开放, 已接受）—— 成本限制展示存在误导性：配置显示无成本上限，但实际轮次会被隐藏的10美元/天全局限额阻断。暂无关联修复PR。
6. **[Issue #10734: Windows平台RpcDispatcher::process_line栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)**（S2, p1, 开放, 处理中）—— 核心RPC调度模块存在Windows平台特有的栈溢出问题，由专项CI发现。暂无关联修复PR。

### 中等严重程度（S2, p2）
值得关注的项包括配置验证漏洞（[#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320)）、服务提供商重试逻辑缺陷（[#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)、[#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)）、流式回退失败（[#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)）以及ACP会话消息数不一致（[#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)）。

### 本周关闭的缺陷
- [#10721: knowledge.db_path波浪线展开全局替换缺陷](https://github.com/zeroclaw-labs/zeroclaw/issues/10721)（2026-09-13关闭）
- [#10324: cron手动触发跨agent重命名竞态条件](https://github.com/zeroclaw-labs/zeroclaw/issues/10324)（2026-09-13关闭）
- [#10533: model_routing_config拒绝有效的自定义服务提供商槽位](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)（2026-09-13关闭）
- [#10580: 文档链接校验仅检查新增链接，未覆盖全仓库](https://github.com/zeroclaw-labs/zeroclaw/issues/10580)（2026-09-13关闭）
- [#10534: 受限委托任务会静默移除委托工具](https://github.com/zeroclaw-labs/zeroclaw/issues/10534)（2026-09-12关闭）
- [#10837: RPC config/set会持久化无效值](https://github.com/zeroclaw-labs/zeroclaw/issues/10837)（2026-09-13关闭，为#10320的重复项）

---

## 6. 功能需求与路线图信号
### 大概率纳入v0.8.5/近期上线的功能
这些功能正在积极开发中、已被接受或关联到v0.8.5稳定化跟踪器：
1. **[Issue #10822: config/set-many —— 通过RPC实现原子化批量配置变更](https://github.com/zeroclaw-labs/zeroclaw/issues/10822)**—— 原子化批量写入配置，避免多次RPC调用产生的中间状态；目前正在开发中，是提升配置可靠性的高优先级功能。
2. **[PR #10840: 在mdBook构建中生成llms.txt和llms-full.txt](https://github.com/zeroclaw-labs/zeroclaw/pull/10840)**—— 文档基础设施优化，用于支持LLM友好的文档索引；范围小，预计很快合并。
3. **[Issue #10826: 显式选择ZeroCode会话根目录并保留恢复后的根目录](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)**—— 面向用户的Code/ACP会话目录处理优化；已被接受的后续改进项。
4. **[PR #10255: OIDC令牌验证服务提供商](https://github.com/zeroclaw-labs/zeroclaw/pull/10255)** 和 **[PR #10259: 认证RPC主体](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)**—— 来自#8289路线图的核心安全功能；目前正由核心贡献者积极评审。

### 中期路线图信号
1. **[Issue #10360: 可选的家庭边缘网格，支持拉取式工作器和签名回执](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)**—— 一项关于在用户自有设备间分配工作负载的重大架构提案；处于早期RFC阶段，社区关注度高，预计在v0.8.5之后推进。
2. **[PR #9809: 每个服务提供商配置支持多模型](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)**—— 呼声很高的服务提供商配置优化；是一个长期开放的PR，需要更多评审。
3. **[PR #8965: 声明式技能自动激活](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)**—— 技能系统增强功能；最近完成了代码变基，正进入评审阶段。

---

## 7. 用户反馈总结
### 痛点
- **服务提供商可靠性**：多位用户上报了OpenCode兼容性相关缺陷（[#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)）、配额耗尽重试行为问题（[#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)）和流式回退失败（[#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)），表明第三方服务提供商集成一直是痛点。
- **配置不透明**：用户反馈成本限制展示有误导性（[#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)）、验证失败无提示（[#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320)）、服务提供商槽位规则令人困惑（[#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)）—— 说明需要完善配置防护和反馈机制。
- **ZeroCode/ACP稳定性**：通知延迟导致轮次取消（[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)）、失败轮次进度丢失（[#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)）和会话指标不一致（[#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802)）是高级用户面临的实际可用性问题。
- **跨平台差距**：Windows平台特有的栈溢出（[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)）和测试失败（[#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793)）表明次要平台的质量滞后。

### 积极信号
- [OpenCode会话头缺陷](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)收到了3个👍反应，说明用户认可该问题上报，且对修复有较高需求。
- 流程改进类RFC的高参与度表明，贡献者认可对开发工作流质量的投入。

### 使用场景
- 多设备边缘计算工作负载分配（家庭网格提案[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)）
- 多会话、大上下文的ACP/Code工作负载（在通知延迟缺陷[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)中被暴露）
- 通过MCP实现远程agent配对（文档PR [#10283](https://github.com/zeroclaw-labs/zeroclaw/pull/10283)）

---

## 8. 待办观察清单
这些高重要性、长期存在的事项近期未得到解决，需要维护者关注：
1. **[PR #9109: 原生Hailo-Ollama支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)**—— 自2026-07-17开放，标记为`status:blocked`和`do-not-merge`。该功能通过Ollama添加对Hailo AI加速器的支持；因上游兼容性工作受阻，有失效风险。
2. **[Issue #9381: crates.io发布、打包和cargo-install后续工作](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)**—— 自2026-07-26开放，从v0.8.4延期。其中包括影响用户的crate发布Windows符号链接问题；尽管对用户影响很大，但近几周无明显进展。
3. **[PR #9584: 插件安装和列表的出站授权流程](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)**—— 自2026-07-31开放，是一项大型插件权限安全功能。尽管是核心安全路线图项，但评审陷入停滞。
4. **[PR #9535: 基于模型窗口比例锚定的上下文压缩](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)**—— 自2026-07-29开放，标记为`needs-author-action`。该功能改进了不同模型大小的上下文窗口管理；因长期无活动有代码腐坏风险。
5. **[Issue #8691: ADR清单和已接受RFC决策记录](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)**—— 自2026-07-04开放，活跃度低，但随着项目规模扩大，对架构文档沉淀和组织知识传承至关重要。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*