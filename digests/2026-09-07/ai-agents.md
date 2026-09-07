# OpenClaw 生态周报 2026-09-07

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-07 01:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报 | 2026-09-07 周
**代码仓库**：[openclaw/openclaw](https://github.com/openclaw/openclaw)  
**报告日期**：2026-09-07  
**统计周期**：2026-08-31 至 2026-09-07

---

## 1. 近 7 天概览
本周 OpenClaw 保持高速开发节奏，共更新 500 个 Issue（375 个处于开放/活跃状态，125 个已关闭）与 500 个 Pull Request（309 个开放中，191 个已合并/关闭），体现了社区的活跃参与度与维护者稳定的处理效率。项目本周发布了 4 个新版本（v2026.8.1 至 v2026.9.2），重点优化聊天响应速度、跨平台图表渲染能力与桌面端 Agent 停靠栏功能。稳定性仍是核心优先级，目前 Windows 平台与 9.x 最新版本已上报多起 P0/P1 级回归问题，同时还有大量重构与性能优化类 PR 正在评审中。整体来看，项目正处于健康的功能交付阶段，同时在推进 2026.9 版本线的发布后稳定性修复工作。

---

## 2. 版本发布
本周共发布 4 个新版本，包含 2 个主要功能版本与 2 个增量更新版本：
- **[v2026.9.2](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2)**
  - 核心亮点：将长对话记录处理与持久化历史读取操作从 Gateway 事件循环中剥离，减少冷启动负载并新增仪表盘直接查询能力，实现了更快速、更灵敏的聊天与仪表盘体验。相关 PR：#136862、#138
  - 破坏性变更：无官方记录
  - 迁移说明：无特殊迁移步骤，按标准升级流程操作即可
- **[v2026.9.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1)**
  - 核心亮点：全聊天端（Control UI、macOS、iOS、Android 应用）上线 Mermaid 图表渲染能力，支持预览放大与移动端渲染失败重试功能。相关 PR：#134913、#135746、#135470、#135342
  - 破坏性变更：无官方记录
  - 迁移说明：目前仅提供部分发布说明，完整内容待补充
- **[v2026.8.2](https://github.com/openclaw/openclaw/releases/tag/v2026.8.2)**
  - 核心亮点：新增可停靠的 Home Agent（通过 `Cmd/Ctrl+Shift+H` 切换显示），可与工作上下文并行运行，支持工作上下文快照预览/移除，以及选中内容附加功能。相关 Issue：#133632，PR：#133676
  - 破坏性变更：无官方记录
  - 迁移说明：无特殊迁移步骤
- **[v2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1)**
  - 核心亮点：完整发布说明可查看 [docs.openclaw.ai/releases/2026.8.1](https://docs.openclaw.ai/releases/2026.8.1)
  - 迁移说明：若自动更新失败，可使用本地编码开发环境完成更新、诊断迁移错误并验证 Gateway 启动。升级前请备份配置与状态数据。

---

## 3. 项目进展
本周已合并/关闭的 191 个 PR 中，核心进展包括：
- **性能与基础设施**：
  - 已关闭 [#137056](https://github.com/openclaw/openclaw/issues/137056)：将 memory-core 维护操作从搜索/监听热路径中移出，并实现按文件失效机制，降低了内存操作的延迟干扰。
  - 开放中（待评审）[#125900](https://github.com/openclaw/openclaw/pull/125900)：对看板元数据查询进行批量处理，合并重复的仪表盘读取请求，以提升高会话量 Gateway 下的 Control UI 性能。
  - 开放中 [#140597](https://github.com/openclaw/openclaw/pull/140597)：通过消除重复的全量目录重建操作，降低了插件打包目录的查询开销。
- **Bug 修复（已关闭/已合并）**：
  - 已关闭 [#124991](https://github.com/openclaw/openclaw/issues/124991)：修复了 SQLite 会话存储下 CLI 会话重新播种失败的问题，该问题由 `loadCliSessionEntries` 错误读取旧版 JSONL 文件导致。
  - 已关闭 [#138803](https://github.com/openclaw/openclaw/pull/138803)：解决了 Control UI 测试中 Talk 端到端音频采集卡顿的问题，该问题由浏览器音频状态残留导致。
- **开发者体验与重构**：
  - 多个重构 PR 用于合并重复代码路径：统一的 Chat Completions 请求组装逻辑（[#140604](https://github.com/openclaw/openclaw/pull/140604)）、Responses 函数工具组装逻辑（[#140592](https://github.com/openclaw/openclaw/pull/140592)）以及插件已安装索引复用逻辑（[#140600](https://github.com/openclaw/openclaw/pull/140600)）。
  - CI 优化：PR 提交时跳过 Linux 打包流程（[#140589](https://github.com/openclaw/openclaw/pull/140589)），并将 iOS 常规检查缩减为构建冒烟测试（[#140585](https://github.com/openclaw/openclaw/pull/140585)），以缩短反馈周期、降低 CI 成本。

---

## 4. 社区热门话题
按评论数与参与度统计的最活跃 Issue 和 PR 显示，用户核心关注点集中在运行时稳定性、Windows 兼容性以及子 Agent/可扩展性性能上：
1. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（14 条评论，1 👍）**：钩子/工具执行导致僵尸子进程泄漏
   - 分析：长期使用的用户会遇到运行时性能逐步下降与崩溃循环问题，原因是未被回收的 `openclaw-hooks`、`bash` 和 `codex` 进程不断累积。这是一个高优先级稳定性问题，被标记为“金虾”级别，说明该问题对用户存在持续的影响。
2. **[#135111](https://github.com/openclaw/openclaw/issues/135111)（14 条评论）**：v2026.8.1 版本搭配 claude-sonnet-5 时出现偶发的 JSON 工具调用格式错误
   - 分析：这是 2026.7.x 版本引入的回归问题，会导致 Agent 运行意外中断，且无稳定复现步骤。最新稳定版用户均受影响，亟需定位根因并修复。
3. **[#119720](https://github.com/openclaw/openclaw/issues/119720)（12 条评论）**：大规模场景下同步 Agent 持久化操作会阻塞 Gateway 事件循环
   - 分析：这是高用量部署场景下的核心可扩展性瓶颈。虽然已落地部分修复（planner-statistics 修复），但 Gateway 线程阻塞的根本问题仍未解决，限制了项目的大规模应用。
4. **[#96975](https://github.com/openclaw/openclaw/issues/96975)（12 条评论，1 👍）**：子 Agent 完成任务时向父上下文注入了过多子会话内容
   - 分析：重度使用子 Agent 的用户会遇到上下文膨胀与性能下降问题。用户提出的“隔离子 Agent 状态/仅返回链接”的需求，反映了业界对更高效多 Agent 架构的诉求。
5. **[#48920](https://github.com/openclaw/openclaw/issues/48920)（10 条评论，4 👍）**：在线文档超前于版本发布（功能已文档化但尚未上线）
   - 分析：这是本周获赞最多的 Issue，凸显了文档与版本管理的痛点：用户尝试使用文档中提到的功能（如 `IsolatedSessions` 心跳配置），但这些功能在稳定版中并不存在，导致用户困惑与时间浪费。

---

## 5. Bug 与稳定性
本周上报/更新的 Bug 按严重程度排序（P0 > P1 > P2），并标注回归状态与修复进展：
### P0（严重）
| Issue | 严重等级 | 问题描述 | 是否为回归问题 | 是否已有修复 PR |
|-------|----------|----------|----------------|----------------|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | UX 版本阻塞问题 | 2026.9.1 更新后 Windows Gateway 启动失败：`--task-supervisor` 标志静默退出，未生成子进程 | 是（2026.8.2 → 2026.9.1） | 否 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | UX 版本阻塞问题 | Windows 德语版（de-DE）升级到 2026.8.2 后，Doctor 维护工具被阻塞，且残留旧版工作区状态 | 是（2026.7.x → 2026.8.2） | 否 |
| [#114967](https://github.com/openclaw/openclaw/issues/114967) | 崩溃循环、UX 版本阻塞问题 | Agent 驱动的实时更新导致 launchctl 保活作业每 2 分钟强制重启一次 Gateway | 否 | 否 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | UX 版本阻塞问题 | 在线文档包含的功能（如 `IsolatedSessions`）未出现在最新稳定版中 | 是 | 否 |

### P1（高优先级）
核心 P1 Bug 包括：
- 僵尸子进程泄漏（[#97616](https://github.com/openclaw/openclaw/issues/97616)）：长期运行会导致性能下降与崩溃循环；暂无修复 PR。
- 同步持久化导致 Gateway 事件循环阻塞（[#119720](https://github.com/openclaw/openclaw/issues/119720)）：影响大规模部署场景；已落地部分修复，完整解决仍在推进中。
- 溢出重试成功但最终消息未送达（[#132762](https://github.com/openclaw/openclaw/issues/132762)）：导致消息静默丢失；修复方案已明确，已排入待开发队列。
- 活跃回复运行期间消息丢失（[#139847](https://github.com/openclaw/openclaw/issues/139847)）：2026.9.2 版本引入的回归问题；修复方案已明确，已排入待开发队列。
- Windows 睡眠/唤醒后 WebSocket 重连延迟（[#140010](https://github.com/openclaw/openclaw/issues/140010)）：唤醒后存在 30-60 秒以上的不可用时间；为新上报问题，暂无修复 PR。

---

## 6. 功能需求与路线图信号
以下为用户呼声最高的功能需求，结合维护者参与度与现有开发基础，评估了其在近期版本中落地的可能性：
1. **[#99583](https://github.com/openclaw/openclaw/issues/99583) 智能会话自动命名**（7 条评论，2 👍）：使用轻量模型延迟生成标题，并支持基于主题重命名。
   - 落地信号：代码库中已存在 LLM  slug 生成器，可降低实现成本。有中等概率在 2026.9.x 或 2026.10 版本中上线——该功能解决了常见的用户体验痛点，且风险较低。
2. **[#71058](https://github.com/openclaw/openclaw/issues/71058) 单个 Gateway 支持多个 Azure/Teams 机器人**（8 条评论，1 👍）：支持在单个实例上运行多个 Teams 机器人身份。
   - 落地信号：已标记为“需产品决策”，说明需求正处于评估阶段。有中等概率在未来面向企业的版本中推出。
3. **[#51572](https://github.com/openclaw/openclaw/issues/51572) 重置/清理时触发会话内存钩子**（8 条评论，1 👍）：在空闲重置、每日重置和清理操作时触发钩子，而非仅在压缩时触发。
   - 落地信号：与现有会话生命周期相关工作方向一致。有中等概率落地——该功能是对现有特性的扩展，且有明确的使用场景。
4. **[#14376](https://github.com/openclaw/openclaw/issues/14376) 支持原因感知的 cron 防护机制**（5 条评论）：为 cron 任务提供支持配额/鉴权/速率限制的退避与熔断机制。
   - 落地信号：该功能针对运维可靠性场景，是 Issue 中反复出现的主题。在下一个次要版本中落地的概率为中低，具体取决于稳定性工作的优先级。
5. **[#139850](https://github.com/openclaw/openclaw/pull/139850) 团队报告插件**（开放 PR）：内置 GitHub 与 Discord 活跃度报告功能。
   - 落地信号：维护者提交的活跃 PR，有很高概率在下一个功能版本（2026.10）中上线，或作为内置插件发布。

---

## 7. 用户反馈总结
### 核心痛点
- **Windows 升级与运行时不稳定**：多起 P0/P1 上报（#137813、#136203、#140010）显示，Windows 用户在更新和日常使用中频繁遇到故障，常出现静默失败且恢复时间长的问题。
- **文档与版本不匹配**：Issue #48920（获 4 赞）表明，用户对文档提及稳定版不存在的功能感到不满，这会浪费大量调试时间。
- **消息/轮次静默丢失**：Issue #112259、#132762、#92241 与 #139847 均描述了用户消息在无可见错误的情况下静默丢失的场景，会削弱用户对系统的信任。
- **子 Agent 与上下文效率问题**：Issue #96975 与 #113701 指出，多 Agent 工作流存在上下文膨胀与压缩效果差的问题，限制了其在复杂任务中的实用性。

### 积极信号
- 社区参与度高（每周更新 500 个 Issue/PR），说明项目 adoption 率高，用户群体投入度强。
- 发布节奏快（一周 4 个版本），体现了团队快速交付用户面向功能的能力。
- 许多 Bug 已有明确修复路径并排入开发队列，体现了维护者响应及时的 triage 能力。

---

## 8. 待办事项观察
以下是长期存在、影响较大且近期未得到解决的 Issue 和 PR，值得维护者关注：
1. **[#41201](https://github.com/openclaw/openclaw/issues/41201) Control UI 头像不显示**（创建于 2026-03-09，11 条评论）：这是一个回归问题，外部 URL 与本地路径的头像均无法显示。尽管是明显的 UX 问题，但已开放 6 个月仍无修复 PR。
2. **[#54488](https://github.com/openclaw/openclaw/issues/54488) 会话通道饥饿**（创建于 2026-03-25，6 条评论）：后续的排空操作会占用会话通道，导致入站消息被阻塞 20-30 分钟。这是一个严重的可扩展性问题，已开放 5 个多月仍未解决。
3. **[#92241](https://github.com/openclaw/openclaw/issues/92241) 更新/回滚后模块导入路径过时**（创建于 2026-06-11，6 条评论）：回滚后由于导入缓存过时，入站消息会被静默丢弃。这是一个可靠性问题，已开放 3 个月仍无修复 PR。

---

## 横向生态对比

# 跨项目对比报告：个人AI助手/Agent开源生态（2026-09-07）

## 1. 生态概览
开源个人AI助手与Agent生态持续快速成熟，各层级项目都在功能交付、稳定性加固和企业级能力之间寻求平衡。本周所有追踪项目均保持了较高的开发速度，重点聚焦于提升多Agent工作流可靠性、跨平台兼容性以及生产级可运维性。整个赛道呈现出清晰的分层格局：通用助手框架、垂直领域企业解决方案、安全优先的运行时平台三足鼎立；而会话状态管理、渠道一致性、开发者体验等共性痛点，正推动跨项目层面的创新协同。

## 2. 活跃度对比
| 项目 | 更新Issue数（新增/关闭） | 更新PR数（待合并/已合并） | 本周发布版本数 | 健康度评分（1-10） |
|---------|-------------------------------|---------------------------|--------------------|---------------------|
| OpenClaw | 500 (375/125) | 500 (309/191) | 4 (v2026.8.1–v2026.9.2) | 8.5 |
| Hermes Agent | 50 (48/2) | 50 (46/4) | 1 (v0.21.0 "Pantheon Release") | 7.8 |
| IronClaw | 42 (26/16) | 50 (25/25) | 0 | 8.2 |
| QwenPaw | 50 (33/17) | 50 (33/17) | 5 (v2.2.0 stable + 4 betas) | 8.0 |
| ZeroClaw | 50 (39/11) | 50 (44/6) | 1 (v0.8.5) | 7.9 |

*健康度评分基于Issue关闭率、PR合并速度、严重缺陷修复进度以及版本发布稳定性计算得出。*

## 3. OpenClaw的生态地位
OpenClaw在社区规模和开发吞吐量上是当之无愧的生态领导者，其Issue和PR体量是排名第二项目的10倍，体现出它作为通用AI助手平台的压倒性采用率。其技术路线主打"快速功能交付+迭代稳定"的双轨模式，单周发布4个版本，同时推进2026.9系列版本的发布后回归问题修复，这一发布节奏是其他竞品无法企及的。
与专注安全的ZeroClaw、面向企业的QwenPaw相比，OpenClaw覆盖了最广泛的用户群体——从个人开发者到企业级部署，拥有最成熟的插件和多Agent生态。其相对短板在于未解决的稳定性问题（尤其是Windows平台）数量较多，且文档与版本存在不匹配的情况，这都是更快发布周期带来的副作用。

## 4. 共性技术关注方向
1. **会话状态与上下文可靠性**（OpenClaw、Hermes Agent、QwenPaw）：三个通用项目均存在上下文丢失、重复消息持久化、消息静默丢弃等关键缺陷，用户对执行可预测性的优先级已经超过新功能交付。
2. **多Agent工作流效率**（OpenClaw、Hermes Agent、QwenPaw、IronClaw）：共同需求包括减少子Agent输出导致的上下文膨胀、父子任务进度可视化、任务自主断点续跑，所有项目都在积极开发任务委派基础设施。
3. **跨平台功能对齐与Windows稳定性**（OpenClaw、Hermes Agent、ZeroClaw）：三个提供桌面端/自托管运行时的项目都上报了Windows特有的P0/P1级缺陷，包括启动静默失败、测试套件不兼容、更新流水线中断等问题。
4. **渠道体验一致性**（IronClaw、QwenPaw、ZeroClaw、Hermes Agent）：支持多渠道（Telegram、飞书、Discord、Matrix）的项目都在推进标准化工作，覆盖引导流程、错误提示、媒体处理、进度展示等全链路跨平台体验。
5. **插件与工具链可靠性**（全项目）：共性痛点包括MCP集成的可调试性、工具Schema正确性、插件沙箱安全性，无论是功能导向还是安全导向的项目，在这一领域的诉求高度一致。

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **核心定位** | 功能全面的通用个人助手 | 主打任务委派能力的高增长Agent框架 | 聚焦UX/设计系统的中型Agent平台 | 企业团队协作与多租户Hub | 安全优先、沙箱边界加固的运行时平台 |
| **目标用户** | 个人开发者、高级用户、企业团队 | 早期尝鲜开发者、多Agent工作流搭建者 | 注重设计的团队、Telegram/渠道优先用户 | 企业团队、工作空间协作场景 | 安全敏感的运维人员、生产环境部署 |
| **技术架构** | 单体核心+插件生态，运行时以Gateway为中心 | 模块化委派架构，功能迭代速度快 | Rust + TypeScript技术栈，UI以设计系统为驱动 | 多租户Hub + 数据模块，原生支持工作空间 | 运行时持有会话模型，WASM/WASI插件系统，集成操作系统级沙箱 |
| **发布节奏** | 极高（每周4版） | 里程碑式（大版本次要更新） | 平稳，以补丁修复为主 | Beta到正式版的发布列车模式 | 安全/功能里程碑式发布 |

## 6. 社区动能与成熟度
### 活跃度分层
- **第一梯队（超大规模）**：OpenClaw——活跃度比同赛道竞品高出一个数量级，拥有成熟的贡献者群体和完善的治理机制。
- **第二梯队（高增长中层）**：Hermes Agent、QwenPaw——两者的Issue/PR新增关闭比都处于较高水平，表明功能扩张速度快，贡献者群体持续壮大。
- **第三梯队（稳定聚焦开发）**：IronClaw、ZeroClaw——PR合并率均衡，在缺陷修复、技术债偿还和功能开发之间投入相当，体现出更成熟、更聚焦的开发周期。

### 成熟度状态
- **稳定化阶段**：IronClaw——本周无新版本发布，重点推进设计系统整合、技术债削减和缺陷修复。
- **快速迭代阶段**：Hermes Agent、QwenPaw——刚完成重大里程碑版本（分别为v0.21.0和v2.2.0）发布，目前正积极处理发布后缺陷，同时推进新功能路线图落地。
- **高速交付阶段**：OpenClaw——在成熟规模下运行，持续交付功能的同时，同步推进近期发布版本线的稳定性加固。
- **架构驱动增长阶段**：ZeroClaw——聚焦于运行时与安全架构的基础RFC工作，辅以增量式的功能发布。

## 7. 趋势信号
1. **多Agent工作流正从实验性能力转向生产核心能力**：所有项目的用户反馈都将子Agent可靠性、进度可视化、上下文效率放在纯功能数量之上，表明多Agent架构已成为生产场景的核心需求，而非小众特性。
2. **企业与团队采用正在推动平台路线图演进**：QwenPaw推出多租户Hub、OpenClaw推进企业级可扩展性工作、Hermes Agent上线团队协作功能，都指向组织级采用正在加速，权限控制、共享技能库、集中化管理正成为基础必备能力。
3. **安全与沙箱加固正从差异化优势变为标配要求**：ZeroClaw主打细粒度沙箱策略和WASM插件运行时，加上全行业对插件安全的投入持续增加，反映出随着部署走向生产，用户对Agent执行安全性的担忧日益提升。
4. **渠道功能对齐是核心用户预期**：用户现在要求Web端、桌面端以及各类消息平台（Telegram、飞书、Discord、Matrix）的行为、功能集和UX体验保持一致，这给支持多渠道的项目带来了显著的工程负担。

对AI Agent开发者而言，这些趋势表明：投入会话状态可靠性、多Agent可观测性、安全插件生态建设，将带来最高的用户价值；而面向企业场景的团队，应在开发早期就优先规划多租户架构和细粒度访问控制能力。

---

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目每周摘要（2026-09-07 周）

---

## 1. 近7天概览
本周 Hermes Agent 项目持续保持高开发活跃度，共更新 50 个 issue（48 个开放，2 个关闭）和 50 个 Pull Request（46 个开放，4 个合并/关闭）。团队发布了重要的 v0.21.0 版本「Pantheon Release」，累计关闭约 2100 个 issue，贡献者超 760 人。当前工作集中在核心会话可靠性、网关平台兼容性、委派功能以及开发者体验优化上。开放与关闭issue的比例表明，项目正处于功能快速迭代与bug持续分类并行的阶段，这是高速成长的AI Agent框架的典型特征。

---

## 2. 版本发布
### v2026.8.31: Hermes Agent v0.21.0（"The Pantheon Release"）
**发布日期：** 2026年8月31日  
**发布链接：** [v2026.8.31](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.31)

这是一个里程碑式的重大版本，包含以下规模的变更：
- 约 5800 次提交
- 约 2475 个合并的 PR
- 约 5680 个文件变更
- 新增约 86.9 万行代码，删除约 13.5 万行代码
- 关闭约 2100 个 issue
- 超 760 位贡献者参与

**不兼容变更与迁移说明：**
现有数据中未包含官方迁移文档，但从变更规模（含13.5万行代码删除）来看，用户升级时需谨慎测试，尤其要关注以下模块：
- Cron 任务调度架构（适配 systemd 重启安全的相关变更）
- 会话状态管理
- 上下文压缩逻辑
- 插件工具注册路径

---

## 3. 项目进展
本周共合并/关闭 4 个 PR，核心进展如下：

1. **委派功能基础设施基础搭建**（[#104299](https://github.com/NousResearch/hermes-agent/pull/104299)、[#104373](https://github.com/NousResearch/hermes-agent/pull/104373) – 列为已合并的基础工作）
   - 完成了委派功能核心完成单元架构
   - 为即将推出的「就绪依赖注入」功能奠定基础

2. **已关闭的检查点 PR（已被替代）：**
   - [#104426](https://github.com/NousResearch/hermes-agent/pull/104426) – 委派注入交付检查点，已被 #104434 替代
   - [#104419](https://github.com/NousResearch/hermes-agent/pull/104419) – 基分支错误的委派尝试，已被 #104434 替代

大部分工作仍在活跃开发中，46 个开放 PR 正推进性能优化、平台支持、核心Agent逻辑等方向的迭代。

---

## 4. 社区热门话题
按评论数与互动量排序：

### 热门Issue
1. **技能索引过期/质量下降**（[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)）– 169 条评论
   - **问题：** 自动化新鲜度探测失败，技能索引已过期 29.8 小时（超出 26 小时上限）
   - **核心诉求：** 稳定的自动化文档与技能索引基础设施；用户依赖 Skills Hub 发现 Agent 能力
   - **状态：** 开放，优先级 P3，标签 `sweeper:risk-automation`

2. **桌面端关闭后机器人群聊持久化运行**（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)）– 25 条评论
   - **问题：** 群聊应无需保持桌面端开启，即可跨设备持续运行
   - **核心诉求：** 带会话可移植性的去中心化多Agent协作；用户希望机器人群组可在本地服务器/VPS 上独立运行
   - **状态：** 开放，优先级 P2，社区关注度高

3. **按规范化主题隔离邮件会话**（[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)）– 9 条评论，2 个👍
   - **问题：** 新增可选模式，支持按邮件主题而非发件人隔离会话
   - **核心诉求：** 更好的邮件工作流组织能力；用户需通过邮件同时处理多个项目
   - **状态：** 开放，优先级 P3

4. **可自定义的 Cron 响应模板**（[#73327](https://github.com/NousResearch/hermes-agent/issues/73327)）– 6 条评论，3 个👍
   - **问题：** Cron 交付包装逻辑为硬编码，用户希望自定义头部/尾部
   - **核心诉求：** 自动化 Cron 任务输出的品牌化与工作流定制
   - **状态：** 开放，优先级 P3

### 热门活跃PR
1. **委派就绪依赖注入**（[#104434](https://github.com/NousResearch/hermes-agent/pull/104434)、[#76230](https://github.com/NousResearch/hermes-agent/pull/76230)）
   - 实现父Agent做出决策前实时展示委派任务结果的能力
   - 高优先级功能，满足并行Agent工作流需求

2. **流式传输密钥脱敏修复**（[#70093](https://github.com/NousResearch/hermes-agent/pull/70093)）
   - 修复 WhatsApp/Signal/企业微信 上流边界处的凭据泄漏问题
   - 跨平台影响的关键安全修复

3. **统一包管理器**（[#102765](https://github.com/NousResearch/hermes-agent/pull/102765)）
   - 集中管理运行时版本锁定、工具安装与依赖管理
   - 影响全平台的重大基础设施改进

---

## 5. Bug与稳定性
按严重程度排序（P1 > P2 > P3）：

### P1 严重Bug
| Issue | 描述 | 修复PR |
|-------|-------------|--------|
| [#92837](https://github.com/NousResearch/hermes-agent/issues/92837) | 心跳计时被标记为已触发但从未投递；agent-cache 空闲淘汰后唤醒丢失 | 无开放PR |
| [#42719](https://github.com/NousResearch/hermes-agent/issues/42719) | ACP 提供的 MCP 工具已注册，但在模型请求中被丢弃 | 无开放PR |
| [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) | systemd 249（Ubuntu 22.04）上重启安全的 Cron 调度失效 – OOMPolicy=kill 被拒绝 | 无开放PR |
| [#104653](https://github.com/NousResearch/hermes-agent/issues/104653) | 入站用户轮次被重复持久化（网关 + Agent 刷新）；历史记录出现重复消息 | ✅ [#104673](https://github.com/NousResearch/hermes-agent/pull/104673) |

### P2 高危Bug
| Issue | 描述 | 修复PR |
|-------|-------------|--------|
| [#100302](https://github.com/NousResearch/hermes-agent/issues/100302) | 桌面端 DOM 归一化移除活动光标节点；macOS 上输入中断 | 无开放PR |
| [#104357](https://github.com/NousResearch/hermes-agent/issues/104357) | Discord Cron 附件返回 404，而文本消息投递正常 | 无开放PR |
| [#104671](https://github.com/NousResearch/hermes-agent/issues/104671) | CLI 后台完成积压导致每个陈旧进程产生一整轮Agent轮次 | ✅ [#104686](https://github.com/NousResearch/hermes-agent/pull/104686) |
| [#104678](https://github.com/NousResearch/hermes-agent/issues/104678) | Anthropic Pro/Max 计费失败后永久锁定；需手动重置认证 | 无开放PR |
| [#94921](https://github.com/NousResearch/hermes-agent/issues/94921) | Ghostty 终端上 CLI 按 Shift+字母输出原始转义序列（modifyOtherKeys 回归问题） | 无开放PR |
| [#104176](https://github.com/NousResearch/hermes-agent/issues/104176) | 继承的 ContextCompressor 摘要覆写在 bypass_cooldown 下失效 | 无开放PR |
| [#100836](https://github.com/NousResearch/hermes-agent/issues/100836) | `hermes doctor --fix` 泄漏数据库连接；误检测到活跃写入器 | 无开放PR |
| [#104666](https://github.com/NousResearch/hermes-agent/issues/104666) | Windows 上通过 npm 安装的 Codex 无法启动 codex_app_server（PATHEXT 问题） | 无开放PR |

### 本周已修复的P2 Bug
1. [#99398](https://github.com/NousResearch/hermes-agent/issues/99398) – 预检预估器对 `reasoning` 字段重复计费，导致上下文膨胀约42%，引发压缩循环
2. [#70328](https://github.com/NousResearch/hermes-agent/issues/70328) – 图像token固定成本（1500）导致重视觉会话在压缩触发前就命中服务商400错误

### 稳定性评估
核心会话状态管理与网关投递是当前主要痛点，存在多个与重复写入、心跳丢失、消息投递失败相关的P1/P2 bug。多个严重bug已有正在推进的修复PR，体现了维护团队的响应速度。

---

## 6. 功能需求与路线图信号
### 下个版本高概率上线功能
基于活跃PR与社区参与度判断：

1. **委派就绪依赖注入**（[#85648](https://github.com/NousResearch/hermes-agent/issues/85648)，实现PR：[#104434](https://github.com/NousResearch/hermes-agent/pull/104434)）
   - 委派任务的就绪结果将在父Agent决策前展示
   - 已完成多轮迭代，接近合并状态

2. **飞书平台改进**
   - [#46361](https://github.com/NousResearch/hermes-agent/pull/46361) – 稳定消息UUID + 流块去重
   - [#89929](https://github.com/NousResearch/hermes-agent/pull/89929) – DNS黑洞场景下按IP维度WebSocket连接故障转移
   - [#104684](https://github.com/NousResearch/hermes-agent/pull/104684) – 私聊顶层线程作为会话的开关
   - 多个成熟PR表明飞书支持扩展是当前优先级方向

3. **仪表盘性能优化**（[#98205](https://github.com/NousResearch/hermes-agent/pull/98205)）
   - 仪表盘响应与轨迹存储启用Gzip压缩
   - 非破坏性性能改进，大概率即将发布

4. **macOS 仪表盘 LaunchAgent 管理**（[#104022](https://github.com/NousResearch/hermes-agent/pull/104022)）
   - 为Web仪表盘提供原生服务生命周期管理
   - 实现了需求 [#44106](https://github.com/NousResearch/hermes-agent/issues/44106)

### 新兴路线图信号
- **统一包管理器**（[#102765](https://github.com/NousResearch/hermes-agent/pull/102765)）– 重大基础设施变更，落地时间可能较晚但影响深远
- **渠道能力上下文注入**（[#104685](https://github.com/NousResearch/hermes-agent/pull/104685)）– 按消息平台标准化行为适配
- **凭据优先级管理**（[#104638](https://github.com/NousResearch/hermes-agent/issues/104638)）– 用户可控制凭据池排序

---

## 7. 用户反馈汇总
### 痛点问题
1. **会话可靠性问题**
   - 用户反馈跨网关存在重复消息、心跳丢失、会话状态损坏问题
   - v0.21.0 升级后 Ubuntu 22.04 上 Cron 任务失效（[#104453](https://github.com/NousResearch/hermes-agent/issues/104453)）
   - 后台进程通知导致 CLI 中Agent轮次风暴（[#104671](https://github.com/NousResearch/hermes-agent/issues/104671)）

2. **平台特定问题**
   - Discord Cron 附件投递失败（[#104357](https://github.com/NousResearch/hermes-agent/issues/104357)）
   - Windows 上 Codex 运行时启动失败（[#104666](https://github.com/NousResearch/hermes-agent/issues/104666)）
   - 飞书 WebSocket 连接挂起与消息重复（[#46361](https://github.com/NousResearch/hermes-agent/issues/46361)、[#89929](https://github.com/NousResearch/hermes-agent/issues/89929)）

3. **凭据管理短板**
   - Anthropic 配额重置后计费错误仍持续（[#104678](https://github.com/NousResearch/hermes-agent/issues/104678)）
   - 无法对凭据池中的凭据设置优先级（[#104638](https://github.com/NousResearch/hermes-agent/issues/104638)）
   - 请求计数统计仅支持 `least_used` 策略（[#104637](https://github.com/NousResearch/hermes-agent/issues/104637)）

### 正面使用场景
- **多Agent群组协作** – 用户对可跨设备运行的机器人群聊功能热情很高（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)）
- **邮件工作流自动化** – 用户希望通过高级邮件会话隔离实现项目管理（[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)）
- **委派评审工作流** – 带实时结果注入的并行Agent工作可满足复杂任务编排需求（[#85648](https://github.com/NousResearch/hermes-agent/issues/85648)）

---

## 8. 待办事项观察
需维护者关注的长期重要issue/PR：

1. **技能索引监控降级**（[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)）– 创建于 2026-07-18，169 条评论
   - 关键文档基础设施问题，已开放约7周
   - 高评论量说明对社区持续造成影响
   - 需要自动化工程资源投入

2. **按主题隔离邮件会话**（[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)）– 创建于 2026-05-15，9 条评论，2 个👍
   - 已开放约4个月，使用场景明确
   - 复杂度低，对邮件网关用户价值高
   - 标签 `needs-decision`

3. **插件的已认证网关上下文**（[#69882](https://github.com/NousResearch/hermes-agent/issues/69882)）– 创建于 2026-07-23，2 条评论
   - 插件生态所需的安全边界功能
   - 阻塞插件开发者构建依赖授权的工具
   - 标签 `needs-decision`

4. **仪表盘 React 崩溃（#520）**（[#45125](https://github.com/NousResearch/hermes-agent/issues/45125)）– 创建于 2026-06-12，1 条评论
   - 仪表盘加载时全量崩溃，影响所有标签页
   - 已开放约3个月，仅1条评论
   - 尽管有用户影响，可能未被充分分类

5. **流式传输密钥脱敏修复**（[#70093](https://github.com/NousResearch/hermes-agent/pull/70093)）– 创建于 2026-07-23
   -

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报
*报告日期：2026-09-07
*项目仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 过去7天总览
过去一周 IronClaw 项目保持高速开发节奏，共更新42个 issue（26个开放/进行中，16个已关闭）和50个 pull request（25个开放，25个已合并/关闭）。未发布新版本。工作重点集中在 WebUI 设计系统整合、Telegram 频道体验修复、LLM 提示词缓存与工具 Schema 可靠性提升，以及子代理基础设施加固。依赖维护作为持续性后台工作有序推进，针对 Rust crate 和 GitHub Actions 提交并合并了多批版本升级 PR。整体项目健康度良好，在功能开发、问题分级处理和技术债务消减三方面进展均衡。

---

## 2. 版本发布
过去7天未发布新版本。

---

## 3. 项目进展
过去一周，以下已合并/关闭的 PR 推进了核心功能开发并解决了已知问题：
- **OpenAI 提示词缓存落地** — [PR #8062](https://github.com/nearai/ironclaw/pull/8062)（已合并）：为所有 OpenAI 系列及兼容 OpenAI 的请求路径实现了稳定的、按域隔离的提示词缓存键，解决了 [Issue #7921](https://github.com/nearai/ironclaw/issues/7921) 中追踪的缓存命中率暴跌问题。
- **Telegram 引导流程与错误提示清晰度优化** — [PR #8054](https://github.com/nearai/ironclaw/pull/8054)（已合并）：修复了未绑定用户的 Telegram `/start` 流程，首次接触时将返回连接/绑定提示而非命令列表（解决 [Issue #7956](https://github.com/nearai/ironclaw/issues/7956)）。[PR #8073](https://github.com/nearai/ironclaw/pull/8073)（已合并）：改写了 Telegram 个人账户设置失败的提示文案，明确说明是管理员配置问题而非用户操作错误（解决 [Issue #7955](https://github.com/nearai/ironclaw/issues/7955)）。
- **WebUI 组件标准化** — 多个已合并 PR 将核心界面的原生 UI 控件迁移至共享设计系统组件，涉及：[PR #8017](https://github.com/nearai/ironclaw/pull/8017)（扩展配置表单/反馈）、[PR #8018](https://github.com/nearai/ironclaw/pull/8018)（SettingsField 控件）、[PR #8019](https://github.com/nearai/ironclaw/pull/8019)（自动化状态横幅）、[PR #8020](https://github.com/nearai/ironclaw/pull/8020)（工作区/日志搜索筛选器）。
- **TypeScript 技术债务消减** — 完成三项相关清理工作：[PR #8033](https://github.com/nearai/ironclaw/pull/8033)、[PR #8035](https://github.com/nearai/ironclaw/pull/8035)、[PR #8036](https://github.com/nearai/ironclaw/pull/8036) 移除了生产组件、测试基础设施和正常编译文件中冗余的 `@ts-nocheck` 指令，并通过 CI 校验防止回退。
- **GitHub 扩展性能优化** — `list_repos` 响应载荷膨胀问题（[Issue #7986](https://github.com/nearai/ironclaw/issues/7986)）已完成修复并关闭 issue，单调用 519KB 的载荷规模得到缩减。
- **依赖更新** — 多批依赖升级 PR 已合并，包括 [PR #8049](https://github.com/nearai/ironclaw/pull/8049)（19个 Rust crate 更新）、[PR #7835](https://github.com/nearai/ironclaw/pull/7835)（5个 GitHub Actions 更新）、[PR #7020](https://github.com/nearai/ironclaw/pull/7020)（tokio-tungstenite 升级），确保依赖树保持最新。

---

## 4. 社区热门话题
按 issue 和 PR 的评论活跃度排序，讨论量最高的话题如下：
1. **设计系统史诗任务范围调整与路线图对齐** — [Issue #7038](https://github.com/nearai/ironclaw/issues/7038)（3条评论，已关闭）、[Issue #7781](https://github.com/nearai/ironclaw/issues/7781)（2条评论，开放中）、[Issue #7042](https://github.com/nearai/ironclaw/issues/7042)（2条评论，开放中）：团队将原5阶段的 WebUI 设计系统项目重组为3个边界清晰的史诗任务，第1阶段已完成，第2-3阶段整合至 #7781，第4-5阶段在 [Issue #7782](https://github.com/nearai/ironclaw/issues/7782) 中追踪。核心诉求：对齐 UI/UX 工作流、明确负责人，并分阶段推进 UI 迭代的治理。
2. **持久化按用户沙箱执行器架构调研** — [Issue #7903](https://github.com/nearai/ironclaw/issues/7903)（2条评论，开放中）：探讨将完整的代理循环迁移至受信任主机内核背后的持久化按用户沙箱中，以减少新增 CLI 工具的主机-沙箱通信开销，同时保留权限边界。核心诉求：在不牺牲安全性的前提下，提升代理执行环境的可扩展性和性能。
3. **MCP 出站错误可诊断性** — [Issue #8009](https://github.com/nearai/ironclaw/issues/8009)（1条评论，开放中）：反馈 `mcp_http_error` 会将所有失败统一归为通用的 `"response_error"` 标记，导致托管 MCP 发现故障无法调试。核心诉求：提升 MCP 集成故障的可观测性和调试能力。相关修复正在通过 [PR #8077](https://github.com/nearai/ironclaw/pull/8077) 推进。

---

## 5. 缺陷与稳定性
过去7天报告的缺陷或回归问题，按预估严重程度排序：
| 严重程度 | Issue | 描述 | 修复状态 |
|----------|-------|-------------|-----------|
| 高 | [Issue #7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI 系列后端未发送 `prompt_cache_key`，导致调用量超过约200次后缓存命中率从约82%暴跌至29% | **已修复**，通过 [PR #8062](https://github.com/nearai/ironclaw/pull/8062)（已合并） |
| 高 | [Issue #7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` 基于白名单重建工具 Schema，会静默丢弃未被禁止的顶层约束 | 开放中，暂无对应 PR |
| 高 | [Issue #8041](https://github.com/nearai/ironclaw/issues/8041) | `FailureKind` 分类错误，导致工具失败时模型进入不可恢复的执行路径 | 开放中，暂无对应 PR |
| 中 | [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) | MCP 出站错误被统一归为 `"response_error"`，掩盖了根本原因 | **修复中**，通过 [PR #8077](https://github.com/nearai/ironclaw/pull/8077)（开放中） |
| 中 | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) | 处于断开连接的共享频道中的已绑定用户，会收到未绑定用户的连接提示文案 | **修复中**，通过 [PR #8076](https://github.com/nearai/ironclaw/pull/8076)（开放中） |
| 中 | [Issue #8025](https://github.com/nearai/ironclaw/issues/8025) | 输入框中的特殊字符会被剥离或引发错误，可能与近期的编码变更有关 | 开放中，暂无对应 PR |
| 低 | [Issue #8066](https://github.com/nearai/ironclaw/issues/8066) | 结果累积时，命令结果卡片会收缩为水平线 | **修复中**，通过 [PR #8071](https://github.com/nearai/ironclaw/pull/8071)（开放中） |
| 低 | [Issue #8065](https://github.com/nearai/ironclaw/issues/8065) | 斜杠命令菜单元数据对齐异常，降低了信息可读性 | **修复中**，通过 [PR #8070](https://github.com/nearai/ironclaw/pull/8070)（开放中） |
| 低 | [Issue #7956](https://github.com/nearai/ironclaw/issues/7956) | 未绑定用户的 Telegram `/start` 返回命令列表而非绑定提示 | **已修复**，通过 [PR #8054](https://github.com/nearai/ironclaw/pull/8054)（已合并） |
| 低 | [Issue #7955](https://github.com/nearai/ironclaw/issues/7955) | 管理员未配置 API 凭证时，Telegram 个人账户绑定显示通用错误提示 | **已修复**，通过 [PR #8073](https://github.com/nearai/ironclaw/pull/8073)（已合并） |

---

## 6. 功能请求与路线动向
以下功能请求和路线图事项本周关注度上升，大概率将在 v1.4.0 版本或近期里程碑中落地：
- **设计系统第2-3阶段**（[Issue #7781](https://github.com/nearai/ironclaw/issues/7781)，标记为 `v1.4.0`）：包括 `DESIGN.md` 治理规范、主题更新和全量 UI 改版，目前已有多个配套的组件迁移 PR 合并。
- **WebUI 用户体验优化**：命令结果卡片关闭功能（[Issue #8064](https://github.com/nearai/ironclaw/issues/8064)）、菜单中运行中命令的可见性优化（[Issue #8063](https://github.com/nearai/ironclaw/issues/8063)）、元数据对齐一致性优化（[Issue #8065](https://github.com/nearai/ironclaw/issues/8065)）——均为小体量高价值的体验优化项，相关 PR 正在推进中。
- **子代理弹性提升**：针对滞留的后台交付任务的启动/周期扫描机制（[PR #8067](https://github.com/nearai/ironclaw/pull/8067)）和子代理并发数量上限控制（[PR #8061](https://github.com/nearai/ironclaw/pull/8061)）属于核心基础设施工作，已接近完成。
- **提示词预算准确性**（[Issue #8057](https://github.com/nearai/ironclaw/issues/8057)）：请求将非对话类提示词内容（身份设定、技能、工具 Schema）纳入上下文预算统计，与当前正在进行的 LLM 可靠性工作直接相关。
- **Telegram Bot API 命令菜单**（[PR #8072](https://github.com/nearai/ironclaw/pull/8072)）：激活时将已声明的命令注册到 Telegram 内置菜单，属于近期 Telegram 工作流配套的频道体验优化。

---

## 7. 用户反馈汇总
从 issue 报告和 PR 上下文中梳理出的痛点与使用场景：
1. **可调试性不足**：用户和运维人员反馈，在 MCP 出站、工具 Schema 约束和失败分类场景下排查故障难度大——错误提示过于通用（[Issue #8009](https://github.com/nearai/ironclaw/issues/8009)、[Issue #7987](https://github.com/nearai/ironclaw/issues/7987)、[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)）。
2. **频道引导流程有摩擦**：Telegram 用户在首次接触、绑定和设置过程中会遇到混淆或错误的提示信息——尤其是管理员配置缺失的场景下（[Issue #7956](https://github.com/nearai/ironclaw/issues/7956)、[Issue #7955](https://github.com/nearai/ironclaw/issues/7955)、[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)）。
3. **WebUI 易用性问题**：命令结果卡片堆积、菜单对齐异常、原生控件与设计系统不一致等问题降低了聊天体验（[Issue #8066](https://github.com/nearai/ironclaw/issues/8066)、[Issue #8065](https://github.com/nearai/ironclaw/issues/8065)、[Issue #8064](https://github.com/nearai/ironclaw/issues/8064)）。
4. **性能相关担忧**：GitHub 扩展载荷膨胀和 OpenAI 缓存命中率下降，给重度用户带来了成本和延迟方面的问题（[Issue #7986](https://github.com/nearai/ironclaw/issues/7986)、[Issue #7921](https://github.com/nearai/ironclaw/issues/7921)）。
现有数据中未包含明确的满意度/不满度评分，但高影响力缺陷和体验问题的快速修复，体现了项目维护的响应效率。

---

## 8. 待办关注项
长期存在或高影响力、尚未得到维护者关注，且近期无解决方案或活跃 PR 的事项：
- [Issue #7903](https://github.com/nearai/ironclaw/issues/7903)：持久化按用户沙箱执行器架构决策调研（创建于2026-08-26，2条评论）：这是一项高风险架构决策，对可扩展性与安全边界有广泛影响；落地前需维护者团队对齐意见。
- [Issue #7782](https://github.com/nearai/ironclaw/issues/7782)：设计系统第4-5阶段 —— 智能交互、组件与信息架构（创建于2026-08-20，1条评论）：长期史诗任务，目前暂无活跃 PR；需在第2-3阶段完成后进行范围界定和优先级排序。
- [Issue #7890](https://github.com/nearai/ironclaw/issues/7890)：移除 app.css 中的 Tailwind 颜色别名兼容层（创建于2026-08-25，1条评论）：这是阻碍 WS3b 改版的技术债务，暂无关联 PR 或近期活动。
- [PR #7834](https://github.com/nearai/ironclaw/pull/7834)：Wasm 组依赖升级（创建于2026-08-23，开放中）：长期开放的中等风险依赖更新，无评论或合并进展，需审核或分级处理。
- [Issue #7987](https://github.com/nearai/ironclaw/issues/7987)：工具 Schema `flatten_top_level` 静默丢弃约束问题（创建于2026-08-28，1条评论）：高严重性正确性缺陷，暂无活跃修复 PR，存在导致工具定义 Schema 静默损坏的风险。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报 | 2026-09-07

## 1. 过去7天概览
过去一周QwenPaw保持高速开发节奏，共更新50个issue（33个开放/活跃，17个已关闭）和50个pull request（33个开放，17个已合并/关闭）。项目发布了5个新版本，以v2.2.0稳定版的推出为核心，该版本带来了期待已久的多租户QwenPaw Hub，以及QwenPaw Data模块的重大更新。社区关注焦点集中在v2.2.0的发布上，大家围绕团队协作功能、多智能体工作流可靠性和跨渠道一致性展开了积极讨论。项目整体健康度保持强劲：维护团队快速修复漏洞，快速合并首次贡献者的修复代码，并根据用户反馈的痛点调整开发优先级。

## 2. 版本发布
本周共发布5个新版本，逐步推进至v2.2.0稳定版：
- **v2.2.0（稳定版）**
  - 核心新增功能：
    - 自托管多用户QwenPaw Hub，支持本地进程或Docker运行时、工作区级访问控制、凭证管理以及反向代理支持（[#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)）
    - QwenPaw Data模块扩展（部分更新日志见版本说明）
  - 破坏性变更/迁移说明：全代码库已将`ModelInfo.max_tokens`字段迁移为`max_output_length`；使用旧版`max_tokens`键的自定义服务商配置将无法加载，必须进行更新。
- **v2.2.0-beta.7**：修复了内存模块中后端特定的嵌入维度归一化问题；为网页UI新增深色模式样式覆盖。
- **v2.2.0-beta.6**：桌面版构建已打包ReMe入口插件；控制台单元测试新增617个用例，语句覆盖率提升10.61个百分点。
- **v2.2.0-beta.5**：实现了渠道契约检查的可移植性与完整性；内存模块中嵌入重建索引的作用域已明确并显式化。
- **v2.2.0-beta.4**：对上下文处理中过大的单行工具返回结果做了边界限制；统一了桌面UI入口行为。

## 3. 项目进展
本周已关闭/合并的PR及主要功能进展：
1. **QwenPaw Hub上线**（[#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)）：推出首个生产级多租户Hub，满足社区最迫切的团队部署能力需求。
2. **内存模块稳定性提升**：合并了嵌入维度归一化修复（[#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465)）和显式嵌入重建索引修复（[#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)），降低了数据损坏风险。
3. **桌面版构建可靠性优化**：修复了自定义服务商加载回归问题，并在安装包中正确打包ReMe插件（[#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458)）。
4. **测试覆盖率提升**：通过新增617个测试用例，将控制台单元测试覆盖率提升10.61个百分点（[#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452)），增强了回归检测能力。
5. **上下文管理优化**：对过大的单行工具返回结果设置了边界限制，防止上下文窗口溢出（[#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)）。

## 4. 社区热门话题
按评论数排序的最活跃讨论issue和PR：
1. **QwenPaw Hub路线图讨论**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) · 23条评论 · 3 👍）
   - 主题：维护者就新上线的多租户Hub的下一步优先级向社区征集反馈。
   - 潜在需求：在组织内部使用QwenPaw的团队，希望在现有Hub功能基础上，获得细粒度权限控制、共享技能库和集中式使用分析功能。
2. **局域网LLM服务器客户端断开故障**（[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) · 12条评论）
   - 主题：用户反馈通过局域网连接本地LM Studio服务器时，客户端频繁断开连接且重试超时。
   - 潜在需求：需要更健壮的网络重试逻辑、可配置的超时设置，以及对网络不稳定的自托管LLM端点的更好支持。
3. **多步骤任务静默卡顿**（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) · 12条评论 · 已关闭）
   - 主题：智能体在规划多步骤子任务后会停止执行且无可见反馈，需要用户手动输入"继续"才能推进。
   - 潜在需求：更可靠的智能体执行循环，内置恢复逻辑，并为长时间运行的任务提供透明的进度指示。
4. **多智能体进度轮询缺失**（[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) · 8条评论）
   - 主题：父智能体不会主动检查子智能体的任务状态，导致工作流停滞，需用户手动查询进度。
   - 潜在需求：原生的事件驱动或定时子智能体状态轮询机制，实现端到端多智能体任务的自主执行。
5. **任务进行中发送新消息返回409错误**（[#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) · 5条评论）
   - 主题：在活跃任务期间发送新消息或文件会返回409错误，而非将输入加入队列。
   - 潜在需求：原生消息队列系统，支持用户在任务中途添加输入，且不中断正在运行的工作流。

## 5. 漏洞与稳定性
本周报告的漏洞，按严重程度排序：
1. **严重：上下文丢失导致智能体行为异常**
   - 相关issue：[#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584)、[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)
   - 描述：模型回复已持久化存储，但后续请求的上下文中缺失，导致智能体遗忘最近的输出、重复操作，并陷入无限工具调用循环。
   - 修复状态：截至周报发布时尚无已合并的修复方案；问题正在积极调查中。
2. **严重：飞书会话队列消费者卡住**
   - 相关issue：[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)
   - 描述：单个高优先级消息消费者卡住后，会阻塞飞书会话的所有后续消息，导致聊天无响应且无错误日志。
   - 修复状态：修复PR已开放（[#7547](https://github.com/agentscope-ai/QwenPaw/pull/7547)），可恢复卡住的消费者并防止死锁。
3. **高危：网页UI停止任务未终止后端执行**
   - 相关issue：[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) · 已关闭待审核
   - 描述：在网页UI点击"停止"后，前端进度指示器消失，但后端任务仍在运行，导致后续请求返回409错误。
   - 修复状态：根本原因已确认；正在开发前后端停止同步的修复方案。
4. **高危：同步调用阻塞事件循环，超时失效**
   - 相关issue：[#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363)
   - 描述：桌面应用启动时卡顿118–135秒，每条消息处理卡顿约126秒，原因是同步调用阻塞了异步事件循环，且配置的超时未触发。
   - 修复状态：尚无已合并的修复方案；根本原因已确定为桌面运行时启动过程中的阻塞I/O。
5. **中危：DeepSeek模型上下文压缩错误**
   - 相关issue：[#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541)
   - 描述：滚动上下文压缩会插入`role=user`而非`role=system`的`[context compressed]`块，导致DeepSeek API抛出执行错误。
   - 修复状态：有临时解决方案（禁用滚动压缩）；尚无官方修复合并。

## 6. 功能需求与路线图信号
极有可能纳入即将发布版本的热门用户需求功能：
1. **工作区级技能预加载策略**（[#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) · 已接受并关闭）：允许工作区将特定技能标记为预加载，而非按需发现，从而减少首轮工具调用开销。大概率在v2.2.1中上线。
2. **阻塞式子智能体等待工具**（[#7580](https://github.com/agentscope-ai/QwenPaw/issues/7580)）：新增内置工具，让父智能体可阻塞等待直至子智能体任务完成，替代通过`check_agent_task`进行的不可靠轮询。与正在进行的多智能体可靠性工作方向一致；大概率在v2.3中上线。
3. **技能版本控制与依赖元数据**（[#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)）：为技能添加版本标签和依赖声明，便于跨工作区更新。与Hub团队协作路线图一致；大概率在v2.3中上线。
4. **顾问模式**（PR [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)）：一种新的循环模式，将强大的"顾问"模型与更便宜的"工作"模型配对，在降低成本的同时提升输出质量。PR已在积极开发中；是v2.2.1的有力候选功能。
5. **技能创建v2工作流**（PR [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)）：基于审批和脚本的技能创建工作流，支持草稿-发布流程。已标记为"待合并"；大概率在下一个次版本中上线。

## 7. 用户反馈总结
### 核心痛点
- **多智能体工作流不透明**：用户反馈父子智能体架构中频繁出现意外卡顿，没有内置的进度跟踪或自动恢复功能（[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)、[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）。
- **上下文可靠性担忧**：多位用户反馈意外的上下文丢失导致智能体"失忆"、工作流中断，削弱了对长时间任务执行的信任（[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)、[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)）。
- **跨渠道不一致**：用户期望网页、桌面、Telegram和飞书渠道的会话行为和功能统一，但目前各渠道的用户体验存在差异，功能也不完整（[#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541)、[#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585)、[#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586)）。
- **v2.2.0 UI回归问题**：用户批评取消了工作目录的直接路径输入功能，称新的文件选择器在处理深层目录结构时操作繁琐（[#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588)）。

### 值得关注的使用场景
- 企业团队部署QwenPaw Hub用于内部共享智能体工作区，需要访问控制和集中式技能管理功能（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）。
- 插件开发者使用QwenPaw进行端到端代码开发和部署工作流，需要持久化记忆来保存路径和配置偏好（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）。
- 内容创作者使用Creator插件进行媒体生成工作流，需要调度和A/B对比功能（PR [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486)）。

### 满意度信号
- 飞书CardKit流式输出和v2.2.0 Hub上线获得正面反馈，用户正积极为两者贡献功能增强（[#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570)、[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）。
- 社区参与度高，首次贡献者提交了针对用户反馈漏洞的针对性修复，表明贡献者生态友好且活跃。

## 8. 待办事项关注
需要维护者关注的长期存在或高影响事项：
1. **同步事件循环阻塞与超时失效**（[#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) · 已开放11天）：导致Windows上桌面应用严重无响应；尚无专门的修复PR分配。
2. **DeepSeek滚动上下文压缩不兼容**（[#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) · 已开放40天）：影响所有进行长对话的DeepSeek用户；修复方案简单（调整压缩块的角色）但尚未处理。
3. **可配置心跳超时**（PR [#2134](https://github.com/agentscope-ai/QwenPaw/pull/2134) · 已开放5个月以上）：长时间运行任务的高需求功能；PR已完成但尚未合并。
4. **MCP工具调用超时配置**（PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) · 审核中28天）：执行时间较长的MCP工具需要该功能；审核似乎陷入停滞。
5. **注入上下文持久化漏洞**（PR [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) · 审核中17天）：修复了请求注入上下文泄露到永久聊天记录的漏洞；该PR来自首次贡献者，正等待维护者批准。

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报 (2026-09-07)
代码仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 近7天概览
本周 ZeroClaw 围绕架构层面开展了大量开发工作，共有 50 个 Issue 更新（39 个开放、11 个关闭）和 50 个 PR 更新（44 个开放、6 个合并/关闭）。社区核心聚焦运行时安全加固、跨平台稳定性、RFC 治理流程简化，同时推出了新版本。v0.8.5 的发布是一个重要里程碑，包含来自 73 位贡献者的 454 次提交，核心投入方向为连接能力、安全边界和运维体验。项目整体健康度良好，维护者积极参与高严重性 Bug 修复和战略设计讨论。

---

## 2. 版本发布
- **v0.8.5**（[发布页面](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.5)）
  - 该版本聚焦安全、连接能力与运维体验，由 73 位开发者贡献的 454 项改动整合而成。
  - 核心新增组件：ZeroRelay 与 ZeroRouter 基础设施，用于扩展传输和路由能力。
  - 核心改进：扩展了实时聊天与服务提供商集成支持；加固了插件、沙箱、Webhook、凭据及文件处理的安全边界。
  - 发布摘要中未披露破坏性变更或迁移说明。

---

## 3. 项目进展
本周合并/关闭的 6 个 PR 和关闭的 11 个 Issue 推进了问题修复、测试覆盖和服务提供商稳定性：
1.  **平台与安装修复**
    - 关闭 [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)：解决了 `install.sh` 在 Android/Termux 上选择通用 Linux 二进制文件的问题，修复了 aarch64 Termux 环境下的架构检测逻辑。
    - 关闭 [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)：新增了 Windows 平台下自更新替换/回滚/边车路径的运行时测试覆盖，加固了 Windows 更新流程。
2.  **服务提供商可靠性提升**
    - 关闭 [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575)：将兼容 OpenAI 的服务提供商预热请求从 `/chat/completions` 改为 `/models`，修复了预热请求无效的问题。
3.  **运行时与安全重构**
    - 关闭 [#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593)：重构了后台委托机制，让 `TaskRecord` 成为唯一的生命周期所有者，消除了重复的状态追踪。
    - 关闭 [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653)：修复了 WASI HTTP 插件信任存储的缺失问题，通过读取操作系统信任根证书，使插件出站请求与服务提供商请求行为保持一致。
    - 关闭 [#10048](https://github.com/zeroclaw-labs/zeroclaw/issues/10048)：在 v0.8.5 发布前完成了 Rust 1.98.0 在本地 CI、演示环境和跨平台发布管道中的验证。
4.  **频道 Bug 修复**
    - 合并 [#10487](https://github.com/zeroclaw-labs/zeroclaw/pull/10487)：修复了 Matrix 频道转录服务提供商的解析逻辑，改为从实时配置中读取，而非使用构建时的静态快照。

---

## 4. 社区热点话题
最活跃的讨论围绕运行时基础架构重构和治理效率展开，体现了社区对长期可维护性和安全性的重视：
1.  [#9487 RFC: 运行时托管的会话与会话传输层适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（34 条评论，开放中）
    - 核心需求：重新设计会话所有权机制，将传输层生命周期与智能体执行解耦，在加固安全边界的同时支持更灵活的频道与网关集成。
2.  [#9488 RFC: 会话界面的统一文件与附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)（27 条评论，开放中）
    - 核心需求：在所有会话频道中标准化文件/附件处理逻辑，减少重复代码，提升安全校验能力，确保跨平台媒体行为一致。
3.  [#6996 RFC: 细粒度沙箱策略——文件系统限制](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)（25 条评论，开放中）
    - 核心需求：将应用层路径准入策略与操作系统级沙箱后端（Bubblewrap、Landlock、Seatbelt）对齐，消除策略偏差，降低智能体的文件系统风险暴露。
4.  [#6808 RFC: 工作泳道、看板自动化与标签清理](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（24 条评论，推进中）
    - 核心需求：通过规范工作泳道和自动化标签来简化 Issue 路由与维护者工作流，降低人工分类开销。
5.  [#7462 [Bug]: Windows 上 74 个测试失败——仅 Unix 可用的测试命令、路径语义、控制台编码](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（19 条评论，处理中）
    - 核心需求：实现测试套件在 Windows 平台的完全对等支持，解决导致 Windows 构建不可靠的跨平台兼容性缺口。

---

## 5. Bug 与稳定性
本周上报的 Bug 集中在运行时可靠性、平台兼容性和频道行为方面，按严重程度排序如下：
| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| S1（严重） | [#10230 守护进程启动/重载时在智能体初始化阶段栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 处理中 | 未关联 |
| S1（严重） | [#9421 终端不完整响应被判定为成功](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 处理中 | [#9447 fix(anthropic): 对不完整终端响应进行分类](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |
| S1（严重） | [#9191 Cron 智能体任务缺少 wall-clock 超时；运行中锁仅在进程启动时清除](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | 处理中 | 未关联 |
| S1（严重） | [#10533 `model_routing_config` 拒绝有效的自定义服务提供商槽位](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | 处理中 | 未关联 |
| S2（主要） | [#7462 Windows 上 74 个测试因仅 Unix 可用的命令/路径语义失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 处理中 | [#10668 fix(ci): 限定 Windows 测试的区域资源范围](https://github.com/zeroclaw-labs/zeroclaw/pull/10668)（部分修复） |
| S2（主要） | [#10302 ZeroCode 代码面板在浏览历史时卡在处理中状态，CPU 占用过高](https://github.com/zeroclaw-labs/zeroclaw/issues/10302) | 处理中 | 未关联 |
| S2（主要） | [#10625 内部 `[media attachment]` 占位符被发送给使用非视觉模型的用户](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 已接收 | 未关联 |

---

## 6. 功能请求与路线信号
本周用户提出的功能需求与项目扩展频道能力、提升开发者体验、增强运行时可观测性的发展方向一致。近期版本中大概率会落地的候选功能包括：
1.  **持久化会话提示附件**（[#10407 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)）：基于 SQLite 的单会话持久化提示附件，附带管理和运行时注入工具。该功能正在积极评审中，与当前正在进行的会话架构工作方向一致。
2.  **Telegram 智能体进度可见性**（[#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)）：在 Telegram 上向用户展示长时间运行的智能体任务的进度更新。这解决了消息频道集成中用户普遍反映的痛点，也与当前活跃的频道功能开发方向对齐。
3.  **Web UI 中分字段的 Cron 调度输入**（[#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)）：带校验和人类可读预览的引导式 Cron 调度输入。这项体验改进已被接收，实现风险低。
4.  **子智能体委托进度展示**（[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)）：向父智能体和终端用户展示子智能体的执行进度。这与当前正在进行的委托架构重构相关，也是一项高需求的可观测性功能。
5.  **可组合的 WASM 插件运行时**（[#10076 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)）：标准化的 WASM 插件 API 和类型化扩展点。这是一项较长期的路线图内容，目前正在进行活跃的设计讨论，预计在 RFC 获批后将在未来的次版本中发布。

---

## 7. 用户反馈总结
本周从 Issue 和 PR 中收集到的具体用户痛点与使用场景：
- **跨平台安装阻碍**：在 Android/Termux 上运行 ZeroClaw 的用户反馈安装脚本的架构检测功能失效（[#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)），体现了用户对官方原生支持非主流平台的需求。
- **消息频道体验缺口**：Telegram 用户反馈长时间运行的智能体任务看似卡住、没有进度更新（[#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)）；Matrix/Discord 用户则希望各频道的媒体和转录行为保持一致。
- **Cron 任务可靠性担忧**：运维人员反馈守护进程崩溃后会出现无法终止的卡住 Cron 任务和锁泄漏问题（[#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)），表明生产部署需要更强的任务生命周期保障。
- **配置易用性问题**：用户反映 Web UI 中的原始 Cron 表达式输入难以使用（[#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)），且路由配置中的自定义服务提供商槽位会出现意外的校验失败（[#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)）。
- **Windows 开发者体验不佳**：Windows 平台的贡献者反馈大量测试失败和平台专属 Bug（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)），这给 Windows 开发者参与项目贡献造成了障碍。

---

## 8. 待办关注
长期高优先级、等待维护者处理或解决的事项：
1.  [#6996 RFC: 细粒度沙箱策略——文件系统限制](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)（创建于 2026-05-28，25 条评论）：这是一项高风险安全 RFC，已开放超过 3 个月，目前仍在推进中尚未最终获批，阻碍了相关沙箱加固工作的开展。
2.  [#7462 Windows 测试套件失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（创建于 2026-06-10，19 条评论）：这是一个 P1 级平台对等性 Bug，已开放 3 个月，相关工作仍在进行但尚未完全解决，影响了 Windows 平台支持的可靠性。
3.  [#9109 原生 Hailo-Ollama 服务提供商支持 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（创建于 2026-07-17，标签 `do-not-merge`）：这是一项针对边缘硬件支持的大型功能贡献，已开放近 2 个月，正在等待最终评审和合入许可。
4.  [#8692 RFC 维护者决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（创建于 2026-07-04，15 条评论）：这是一个设计决策积压的治理追踪项，目前仍开放，表明 RFC 评审吞吐量仍存在瓶颈。
5.  [#9378 持久化失败/取消的 ACP 轮次转录 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9378)（创建于 2026-07-26，标签 stale-candidate）：这是一项会话持久化的 Bug 修复，已开放超过 6 周并被标记为过期候选，存在贡献者工作成果流失的风险。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*