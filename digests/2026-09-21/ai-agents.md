# OpenClaw 生态周报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-21 00:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报 | 2026-09-21
---

## 1. 近7天概览
本周 OpenClaw 项目活跃度极高，共更新 500 个 issue（297 个开放/活跃，203 个已关闭）、500 个 pull request（296 个开放，204 个已合并/关闭）。团队发布了两个新版本，其中包括被广泛部署的 v2026.9.5，该版本包含 64 次直接提交、503 位开发者的贡献，以及 4179 个合并的 pull request。

项目大部分活动集中在 v2026.9.x 版本线的稳定性修复上，多个严重级别较高的崩溃、升级失败和性能回退报告，推动团队将 bug 修复与升级体验优化列为优先事项。除了关键的稳定性补丁外，核心扩展性（Agents API 工具链）、UI 打磨和 CI/CD 效率方面的开发工作也在推进。整体项目健康度表现为：维护响应积极，但受近期大版本发布影响，bug 数量处于较高水平。

---

## 2. 版本发布
### v2026.9.5（稳定版通道）
- **发布链接**：[openclaw/openclaw Release v2026.9.5](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)
- **版本范围**：包含 64 次直接提交、4179 个合并的 pull request，以及 503 位贡献者。完整发布说明请见 [docs.openclaw.ai/rele](https://docs.openclaw.ai/rele)（注：源数据中链接已截断）。
- **Linux 配套更新**：`linux-stable` 通道发布了对应的 v2026.9.5 配套构建版本。
- **分发产物**：
  - [AppImage (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
  - [Debian 软件包 (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)
- **已知升级问题（来自社区反馈）**：多名用户报告从 2026.9.3/9.4 升级到 9.5 时失败，包括 `doctor-failed` 回滚、迁移死锁、迁移前完整性检查超时等问题——详见 *Bug 与稳定性* 部分。
- **破坏性变更 / 迁移说明**：提供的版本元数据中未列出正式的破坏性变更，但由于存在 SQLite 迁移边界案例的相关报告，建议用户升级前备份数据状态。

---

## 3. 项目进展
本周合并/关闭的 204 个 PR 中，关键进展与修复包括：
1. **升级与安装可靠性**
   - [PR #154200](https://github.com/openclaw/openclaw/pull/154200)：修复了前台 Gateway 进程在关闭时持有状态生命周期锁，导致源更新失败的问题，减少了 Doctor 阶段的升级故障。
   - [PR #154160](https://github.com/openclaw/openclaw/pull/154160)：重构了更新的执行与收尾流程，移除了未使用的并行路径和冗余的插件激活步骤，简化了升级工作流。
   - [PR #138085](https://github.com/openclaw/openclaw/pull/138085)：收紧了 Docker 包的验收检查，要求每个包管理器的版本完全一致，防止安装不匹配的产物。
2. **内存与性能优化**
   - [PR #154222](https://github.com/openclaw/openclaw/pull/154222)：降低了 PR 测试中 Git 测试固件的复制开销，减轻了 CI 的文件系统负载。
   - [PR #154150](https://github.com/openclaw/openclaw/pull/154150)：通过保留可复用的编译器状态，缩短了 lint 和类型检查 CI 任务的时间，减少了 CI 运行时长。
   - [PR #154209](https://github.com/openclaw/openclaw/pull/154209)：对于不含模块加载器语法的纯 JavaScript 单元，跳过 Acorn AST 构建，降低了 Code Mode 的源码准备开销。
3. **核心能力扩展**
   - [PR #154208](https://github.com/openclaw/openclaw/pull/154208)：为 Agents API 会话新增 OpenClaw 工具支持，可访问消息收发、内存搜索和插件功能（等待作者更新）。
   - [PR #154217](https://github.com/openclaw/openclaw/pull/154217)：重构了 agent 框架的工具结果记账逻辑，实现跨运行时逻辑共享，为更广泛的 Agents API 工具推出做准备。
   - [PR #154135](https://github.com/openclaw/openclaw/pull/154135)：在设置中新增搜索提供方配置和凭证验证功能，提升了运维人员对搜索路由的管控能力。
4. **用户侧回退问题的 bug 修复**
   - [PR #154098](https://github.com/openclaw/openclaw/pull/154098)：修复了过时的 `claude-cli` 用户代理标头导致与 Anthropic 的 OAuth 认证失败的问题（关闭 Issue #94716）。
   - [PR #153895](https://github.com/openclaw/openclaw/pull/153895)：修复了因日记上下文截断不具有幂等性，导致 Dream Diary 光阶段叙事内容丢失的问题（关闭 Issue #153682）。
   - [PR #153449](https://github.com/openclaw/openclaw/pull/153449)：修复了隔离的 OpenAI 兼容模型补全接口中缺失 `chat_template_kwargs`/`extra_body` 参数的问题（关闭 Issue #153391）。
5. **UI/UX 改进**
   - [PR #151258](https://github.com/openclaw/openclaw/pull/151258)：移除了聊天记录中的空白进度区域，并默认关闭延迟卡片，减少了布局偏移。
   - [PR #154207](https://github.com/openclaw/openclaw/pull/154207)：新增可拖拽、可记忆位置的系统繁忙面板，支持灵活放置监控界面。
   - [PR #154144](https://github.com/openclaw/openclaw/pull/154144)：将侧边栏会话的省略号菜单替换为直接的归档/恢复按钮，简化了会话管理流程。

---

## 4. 社区热点话题
以下 issue/PR 按评论数和参与度排名，反映了本周用户与开发者最关注的讨论：
1. **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)（35 条评论，P0）**：Windows 上 Agent 的 SQLite WAL 文件数天内增长至 1.4–2.8 GB，导致 Gateway 无法启动  
   *核心诉求*：用户需要可靠的数据库检查点机制和存储容量限制，以支持长期运行的 agent 部署，尤其是在 Windows 上 WAL 截断功能似乎失效的情况下。这是单网关生产部署中最突出的稳定性痛点。
2. **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616)（31 条评论，P1）**：未回收的 hook/工具子进程导致僵尸进程累积，运行时性能下降  
   *核心诉求*：长期运行 OpenClaw 实例的运维人员需要完善的进程生命周期管理，以避免资源耗尽和性能逐步衰减。
3. **[Issue #144911](https://github.com/openclaw/openclaw/issues/144911)（31 条评论，P1）**：MCP 服务器初始化超时，因未处理的 Promise 拒绝导致整个 Gateway 崩溃  
   *核心诉求*：用户希望 MCP 服务器故障具备故障隔离能力——单个异常的 MCP 服务器不应导致整个 Gateway 进程宕机。
4. **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)（29 条评论，P1）**：Gateway 内存泄漏，2-3 天内 RSS 从 350MB 增长到 15.5GB，引发 OOM 崩溃  
   *核心诉求*：核心内存稳定性是生产部署的硬性要求，用户反馈因 OOM  kill 导致的重启周期完全不可用。
5. **[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)（21 条评论，P1）**：大规模场景下，同步的 agent 持久化操作会阻塞 Gateway 事件循环  
   *核心诉求*：大规模部署需要非阻塞的状态操作，以维持吞吐量并避免事件循环饥饿。
6. **[Issue #45608](https://github.com/openclaw/openclaw/issues/45608)（12 条评论，4 个赞）**：功能请求：为 `/new`、`/reset` 和每日重置操作，新增重置前的 agent 内存刷新功能  
   *核心诉求*：用户希望会话重置操作之间的内存持久化行为保持一致，与已实现的压缩功能行为对齐。这是本周数据中获赞最高的功能请求。
7. **[PR #82950](https://github.com/openclaw/openclaw/pull/82950)（陈旧 PR，P1）**：修复灾难性正则回溯导致命令授权挂起的问题  
   *核心诉求*：关注安全的用户需要更健壮的输入校验，以防止审批规则中的恶意正则模式引发拒绝服务。这个长期开放的 PR 仍然是高优先级的稳定性缺口。

---

## 5. Bug 与稳定性
按严重程度排序（P0 为最高），已标注可用的修复 PR 状态：
### P0（严重）
1. **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)**：Windows 上 SQLite WAL 无限制增长（2026.9.2/9.3 版本）  
   状态：开放，需维护者审核/补充信息；无关联修复 PR。
2. **[Issue #149538](https://github.com/openclaw/openclaw/issues/149538)**：Gateway 达到就绪状态但从不处理请求，632 个 agent 规模下出现事件循环饥饿  
   状态：开放，需维护者审核/补充信息；无关联修复 PR。
3. **[Issue #153257](https://github.com/openclaw/openclaw/issues/153257)**：v2026.9.5 在原本稳定的环境中引发长达 8 小时的故障恢复会话  
   状态：开放，需维护者审核/补充信息；无关联修复 PR。用户反馈升级后稳定性严重下降。
4. **[Issue #152981](https://github.com/openclaw/openclaw/issues/152981)**：2026.9.5 版本（Windows 11）Gateway 启动时在模型运行时 sidecar 处挂起约 17 分钟  
   状态：开放，需维护者审核；无关联修复 PR。
5. **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)**：使用 google-vertex/gemini-3.1-pro-preview 时出现 "Cannot convert undefined or null to object"（2026.3.2 版本引入的回退）  
   状态：开放，陈旧，需维护者审核；无关联修复 PR。
6. **[Issue #146887](https://github.com/openclaw/openclaw/issues/146887)**：多阶段升级失败（2026.9.3→9.4）：MCP 超时崩溃、lint 硬拦截、服务切换失败  
   状态：开放；相关的部分修复包括 [PR #154098](https://github.com/openclaw/openclaw/pull/154098)（认证修复）和升级流程重构，但尚未确认完全解决。
7. **[Issue #145995](https://github.com/openclaw/openclaw/issues/145995)**：偶发的插件检测失败：SQLite 状态源未稳定  
   状态：开放，可在源码环境复现；无关联修复 PR。
8. **本周已解决的已关闭 P0 bug**：
   - [Issue #152759](https://github.com/openclaw/openclaw/issues/152759)：`openclaw update` 从 2026.9.4 升级到 9.5 时失败，报 `doctor-failed`（已关闭，可能通过 PR #154200/#154160 中的升级流程修复解决）
   - [Issue #153704](https://github.com/openclaw/openclaw/issues/153704)：2026.9.5 更新在迁移前完整性检查中约 299 秒时失败（已关闭）
   - [Issue #152884](https://github.com/openclaw/openclaw/issues/152884)：会话 SQLite 迁移期间出现更新死锁（已关闭）
   - [Issue #153882](https://github.com/openclaw/openclaw/issues/153882)：更新时插件状态迁移死锁（已关闭）
   - [Issue #107220](https://github.com/openclaw/openclaw/issues/107220)：2026.7.1 旧版内存 sidecar 冲突导致崩溃循环（已关闭）

### P1（高优先级）
1. **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616)**：hook/工具产生僵尸子进程泄漏  
   状态：开放，需补充信息；无关联修复 PR。
2. **[Issue #144911](https://github.com/openclaw/openclaw/issues/144911)**：MCP 服务器初始化超时导致 Gateway 崩溃（未处理的拒绝）  
   状态：开放，修复方案已明确/可排期；暂未关联修复 PR。
3. **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)**：Gateway 严重内存泄漏（2-3 天内从 350MB 增长到 15.5GB）  
   状态：开放，需维护者审核/补充信息；无关联修复 PR。
4. **[Issue #139847](https://github.com/openclaw/openclaw/issues/139847)**：主动回复运行期间发送的消息被丢弃（2026.9.2 版本引入的回退）  
   状态：开放，修复方案已明确/可排期；暂未关联 PR。
5. **[Issue #137332](https://github.com/openclaw/openclaw/issues/137332)**：混合终端请求方结算批次在所有权检查后无限重试  
   状态：开放，修复方案已明确/可排期；暂未关联 PR。
6. **[Issue #144742](https://github.com/openclaw/openclaw/issues/144742)**：2026.9.4 发布时未包含切换租例行修复，导致所有配置写入失效（版本发布阻塞问题）  
   状态：开放，在主分支上无法复现（修复在版本分支切出后已合入）。

---

## 6. 功能请求与路线信号
根据用户点赞数、评论活跃度和关联的进行中 PR 判断，以下功能很可能在未来版本中推出：
1. **Agents API 工具支持**（强信号）：多个进行中的 PR（[#154208](https://github.com/openclaw/openclaw/pull/154208)、[#154217](https://github.com/openclaw/openclaw/pull/154217)）正在为 Agents API 会话构建 OpenClaw 工具访问能力，包括消息收发、内存搜索和插件功能集成。这是平台核心扩展性的优先事项。
2. **搜索提供方管理 UI**（强信号）：[PR #154135](https://github.com/openclaw/openclaw/pull/154135) 新增了基于设置页面的搜索提供方配置、凭证验证和路由检查功能——满足了运维人员对集中式搜索管控的需求。
3. **重置前 agent 内存刷新**（中等信号）：[Issue #45

---

## 横向生态对比

# 跨项目对比报告：个人AI助手/智能体开源生态
*2026年9月21日当周*

---

## 1. 生态概览
开源个人AI助手与智能体生态正处于快速成熟阶段，各项目在基础稳定性建设和企业级功能拓展之间保持平衡。头部项目的核心优先级包括：提升长期部署的可靠性、扩展多服务商模型兼容性、优化插件/扩展的隔离机制以支撑第三方生态。社区驱动的路线规划作用日益凸显，企业级多租户部署、精细化安全管控、标准API兼容性成为用户需求的热点。整个领域涵盖了迭代速度极快的核心平台，以及主打稳定性的专业化企业级工具，形成了覆盖个人和组织场景的分层生态。

---

## 2. 活跃度对比
| 项目 | 更新的Issue（待处理/已关闭） | 更新的PR（待处理/已合并） | 发布状态 | 项目健康度评分（1-10） |
|---|---|---|---|---|
| **OpenClaw** | 500（297待处理 / 203已关闭） | 500（296待处理 / 204已合并） | 2个稳定版本（v2026.9.5已广泛部署） | 8.0 / 10（迭代速度快、维护积极，近期重大版本导致Bug数量偏高） |
| **Hermes Agent** | 50（24待处理 / 26已关闭） | 50（38待处理 / 12已合并） | 1个稳定补丁版本（v2026.9.14 / v0.21.3） | 8.2 / 10（Issue关闭率高、严重Bug响应迅速，稳步迭代） |
| **IronClaw** | 3（3待处理 / 0已关闭） | 10（7待处理 / 3已关闭） | 无新版本发布 | 7.0 / 10（以维护性工作为主，处于稳定阶段，社区参与度较低） |
| **QwenPaw** | 50（35待处理 / 15已关闭） | 50（35待处理 / 15已合并） | 2个Beta版本（v2.2.2-beta.1/3） | 7.8 / 10（迭代速度快、社区活跃，2.2.x版本线持续稳定中，配套企业级Hub路线图） |
| **ZeroClaw** | 50（17待处理 / 33已关闭） | 50（44待处理 / 6已合并） | 无新版本发布 | 7.5 / 10（设计阶段活跃度高，处于发布前稳定阶段，已关闭Issue中多数为通过的RFC） |

*健康度评分方法：综合Issue关闭率、PR迭代速度、发布频率、Bug严重程度分布、社区参与度加权计算。*

---

## 3. OpenClaw的定位
### 相较同类项目的优势
OpenClaw在规模和迭代速度上是生态中毫无争议的领导者：其Issue和PR数量是第二梯队项目的10倍，最新v2026.9.5版本共有503名贡献者参与，合并了4179个PR。它拥有最成熟的核心智能体平台，内置能力覆盖最广，包括Agents API工具、插件生态、多渠道支持等。其高严重度Bug的快速修复周期（例如本周关闭5个P0级Bug）体现了维护团队极强的响应能力。

### 技术路线差异
OpenClaw在修复稳定性问题的同时，兼顾平台的广泛可扩展性和UI打磨，重点聚焦生产级网关部署。与正在搭建多租户Hub的QwenPaw、仍在敲定核心架构RFC的ZeroClaw不同，OpenClaw已拥有广泛部署的稳定版本线，正基于成熟产品做增量优化。其在升级可靠性和CI/CD优化上的投入，也反映了用户群体中存在大规模生产部署的需求。

### 社区规模对比
OpenClaw的社区规模比同类项目大一个数量级：每周Issue/PR更新量达500+，而Hermes Agent、QwenPaw、ZeroClaw仅为50，IronClaw仅为3。其Issue评论数（最高优先级P0 Issue有35条评论）也体现了活跃用户基数大得多，其中包括反馈大规模部署痛点的生产运维人员。

---

## 4. 共同技术关注点
| 关注领域 | 涉及项目 | 具体需求 |
|---|---|---|
| **生产环境运行时稳定性** | OpenClaw、Hermes Agent、QwenPaw | 内存泄漏（OpenClaw #91588、Hermes #64488）、僵尸进程管理（OpenClaw #97616）、事件循环阻塞（QwenPaw #7840）、长期运行实例资源耗尽是自托管/生产部署的普遍痛点。 |
| **插件/扩展安全与隔离** | OpenClaw、QwenPaw、ZeroClaw | 供应链完整性（ZeroClaw PR #9134 SHA-256校验）、插件事件循环隔离（QwenPaw #7840 共享循环卡死问题）、扩展激活可靠性（IronClaw PR #8102）是第三方生态规模扩大后各项目的共同优先级。 |
| **多服务商模型兼容性** | Hermes Agent、IronClaw、QwenPaw | 服务商错误分类（Hermes #117117 429错误分类不当）、单请求模型行为控制（IronClaw #7537 思考/算力调整）、兼容OpenAI的服务商接入（QwenPaw PR #7843 AgentScope Platform）是持续投入的方向。 |
| **上下文与内存管理** | OpenClaw、QwenPaw、ZeroClaw | 上下文窗口膨胀（QwenPaw #7853 base64图片累积问题）、内存生命周期策略标准化（ZeroClaw RFC #6850）、内存刷写一致性（OpenClaw #45608 重置前刷写问题）体现了用户对可靠长会话支持的需求日益增长。 |
| **升级与迁移可靠性** | OpenClaw、Hermes Agent | 迁移死锁、升级回滚、状态损坏风险（OpenClaw v2026.9.5升级失败、Hermes PR #117687 存储安全）是已有生产部署的项目中用户反馈的首要痛点。 |

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---|---|---|---|---|---|
| **核心功能方向** | 核心平台可扩展性、Agents API、UI打磨 | 机器人模式用户体验、服务商可靠性、桌面端易用性 | 企业身份/安全、办公任务自动化 | 控制台用户体验、多租户Hub、插件生态 | 架构设计、安全加固、标准API兼容性 |
| **目标用户** | 生产运维人员、企业部署用户、高级用户 | 桌面端/机器人用户、社区部署用户 | 企业/无代码管理员、Google Workspace用户 | 团队/企业、多租户部署用户、本地桌面用户 | 注重安全的自托管用户、生态集成商、技术早期采用者 |
| **技术架构** | 单体网关+插件系统，成熟CI/CD | 模块化智能体核心，桌面端/网关分离 | 基于Rust，以身份为核心（IdentyClaw），支持MCP | 基于TypeScript的控制台+桌面客户端，ReMe内存系统 | 解耦的内存/安全架构，WASM插件沙箱（设计中） |
| **发布节奏** | 高频稳定版发布（每月多次） | 以补丁为主的稳定版发布 | 缓慢、保守的维护版本 | Beta+正式版周期，按里程碑发布 | 发布前阶段，大量RFC设计工作 |

---

## 6. 社区发展势头与成熟度
### 活跃度梯队
1. **第一梯队（高速度、成熟）：OpenClaw** — 活跃度是其他所有项目的10倍，贡献者基数庞大，发布流程完善，拥有生产级用户群体。同时在稳定性和功能拓展上快速迭代。
2. **第二梯队（稳步增长、走向成熟）：Hermes Agent、QwenPaw** — 活跃度中等（每周50个Issue/PR），路线图清晰。Hermes Agent聚焦增量Bug修复和用户体验优化，Issue关闭率达52%。QwenPaw在2.2.x版本稳定化与高优先级多租户Hub里程碑工作之间平衡推进。
3. **第三梯队（稳定阶段）：IronClaw** — 活跃度低，以维护工作为主，无新版本发布。项目处于增量优化模式，优先处理依赖更新和严重Bug修复，而非新功能开发。
4. **第四梯队（发布前、重设计）：ZeroClaw** — 活跃度高，但集中在RFC评审通过和架构设计上。大多数已关闭Issue是设计提案而非Bug修复，表明项目在全面实现功能前正处于共识搭建阶段。

### 成熟度评估
- **最成熟：** OpenClaw（生产部署广泛，发布管理成熟）
- **快速成熟中：** Hermes Agent、QwenPaw（产品市场匹配清晰，Bug加固工作积极）
- **细分领域成熟：** IronClaw（聚焦企业场景，维护缓慢但稳定）
- **早期阶段：** ZeroClaw（设计基础扎实，1.0版本前功能开发中）

---

## 7. 趋势信号
1. **企业/团队采用正在加速** — QwenPaw社区热度最高的讨论（31条评论）围绕多租户Hub功能展开，包括RBAC、共享技能、集中计费。OpenClaw的高严重度Bug越来越多来自大规模集群（632个智能体的部署）的运维人员，表明生产部署规模正在扩大。*对AI智能体开发者的价值：* 从一开始就基于多租户原语和企业级可观测性构建，可减少未来的架构重构工作。

2. **标准API兼容性已成基础要求** — ZeroClaw讨论量第二的RFC（25条评论）提议兼容OpenAI Chat Completions API，以接入现有LLM客户端（Open WebUI、Aider、LangChain）。这反映出用户希望智能体平台能融入现有工具链，而非需要定制适配器。*价值：* 实现标准API接口可大幅扩展潜在用户群，降低集成门槛。

3. **插件生态安全正成为核心差异化优势** — 从ZeroClaw（WASM校验和验证）、QwenPaw（事件循环隔离缺陷）到OpenClaw（插件迁移死锁），插件的安全性和可靠性都是首要痛点。随着第三方生态壮大，用户会优先选择具备完善沙箱和供应链完整性的平台。*价值：* 尽早投入插件隔离机制建设，可避免生态规模扩大后出现信任流失。

4. **精细化安全管控需求旺盛** — ZeroClaw已通过的「按命令设置允许/询问/拒绝的Shell策略」RFC（24条评论），以及OpenClaw的正则回溯授权修复，都反映出用户希望安全管控能平衡安全与易用性，而非全有或全无的工具访问模式。*价值：* 落地分层授权模型，可同时满足注重安全的企业用户和追求低门槛的个人用户需求。

5. **上下文管理是下一个核心竞争点** — QwenPaw用户最持续的不满集中在上下文淘汰的边界问题上，而OpenClaw和ZeroClaw都在投入内存架构重构。随着长期运行的智能体会话越来越普遍，可预测、可靠的上下文和内存管理将成为用户选择的关键因素。*价值：* 构建透明、可配置的上下文管理策略，可提升用户信任度，减少长期运行工作负载中的意外行为。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报 (2026-09-15 ~ 2026-09-21)
## 1. 近7天概览
本周 Hermes Agent 保持高开发速度，共更新 50 个 issue（24 个开放/进行中，26 个已关闭）与 50 个 pull request（38 个开放，12 个已合并/关闭），并发布了一个新的稳定补丁版本。开发活动主要集中在桌面端、网关、CLI 与 Agent 核心组件的 Bug 修复，同时针对 bot 模式、供应商集成和开发者工具进行了定向功能增强。项目健康度保持良好，issue 关闭率达 52%，面向用户的可靠性优化与内部基础设施建设均稳步推进。

## 2. 版本发布
### v2026.9.14 (Hermes Agent v0.21.3)
- **发布日期**：2026 年 9 月 14 日
- **版本类型**：补丁版本
- **核心说明**：该版本汇总了 v0.21.2 以来合并的约 338 个 PR，作为稳定标签版本提供给下游使用方（包括 Docker 镜像、Hermes Cloud、托管部署场景）。版本核心亮点为关键的远程网关登录修复，同时包含前序开发周期累积的 Bug 修复与小型功能改进。该补丁版本无破坏性变更，无需执行迁移操作。
- **链接**：[v2026.9.14 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

## 3. 项目进展
本周共合并/关闭 12 个 PR，推动了以下功能与修复的落地：
- **供应商可靠性修复**：
  - [#117117](https://github.com/NousResearch/hermes-agent/pull/117117)：修复了 CommandCode 429 分类错误问题——此前上游供应商故障会被误判为凭证耗尽，导致正常的 API 密钥被标记为不可用，本次修复避免了该情况。
  - [#117482](https://github.com/NousResearch/hermes-agent/issues/117482)（对应修复已合并）：解决了凭证解析过程中，供应商配额耗尽被误分类为认证失败的问题。
- **Bot 模式与配置修复**：
  - [#116905](https://github.com/NousResearch/hermes-agent/issues/116905)（修复已合并）：修复了 `bot_mode_probe._roster()` 将已删除配置的墓碑条目列为活跃队友 Agent 的问题。
  - [#117401](https://github.com/NousResearch/hermes-agent/issues/117401)（通过 #117014 扩展合并修复）：扩展了 TTS 路由逻辑，使桌面端 bot 聊天中的 GPT-Live 语音会话使用 bot 自身配置的语音。
- **平台与易用性修复**：
  - [#117181](https://github.com/NousResearch/hermes-agent/issues/117181)（修复已合并）：解决了 Windows 端因隔离包中 CRLF/LF 换行符不匹配导致的技能更新误报问题。
  - [#117040](https://github.com/NousResearch/hermes-agent/issues/117040)（修复已合并）：修复了群聊暂停分类器误触发代码块和引用内停用词的问题。
  - [#117216](https://github.com/NousResearch/hermes-agent/issues/117216)（修复已合并）：修复了桌面端由 Agent 生成的提示关闭状态不持久化，导致弹窗重复出现的问题。
- **文档与校验**：
  - [#117267](https://github.com/NousResearch/hermes-agent/issues/117267)（文档已合并）：明确说明 systemd reload 会执行网关优雅重启。
  - [#116667](https://github.com/NousResearch/hermes-agent/issues/116667)（修复已合并）：修复了配置所属供应商目录的模型目录 fallback 逻辑错误。
- **集成功能**：
  - [#112835](https://github.com/NousResearch/hermes-agent/pull/112835)（已合并）：在 `/usage` 命令中新增了 DeepInfra 预付费余额展示。
- **网关关键 Bug**：
  - [#32791](https://github.com/NousResearch/hermes-agent/issues/32791)（已修复/关闭）：解决了 Discord 多 bot 无限确认循环、绕过 bot 白名单防护、以及在自由响应通道忽略人类 STOP 信号的问题。

## 4. 社区热门话题
本周讨论最活跃的内容集中在桌面端用户体验、资源泄漏和 bot 模式易用性方面：
1. **桌面端媒体文件链接失效** ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361), 10 条评论)
   - 两个独立 Bug 导致 `MEDIA:` 文件链接失效：一是标签正则表达式会吞噬末尾的 Markdown 字符，二是通过字符串拼接构造 `file://` URL 时逻辑错误，最终导致静默失败且无有效日志可供排查。核心需求：提升桌面端文件处理的健壮性与可调试性。
2. **Bot 模式聊天氛围优化** ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520), 6 条评论)
   - 用户反馈 Bot 模式的对话读起来像正式的状态报告，而非自然聊天，缺少轻松的社交互动感。核心需求：让 bot 交互的对话风格更拟人，符合真实群聊的预期。对应的实现 PR [#117733](https://github.com/NousResearch/hermes-agent/pull/117733) 已提交开放。
3. **Dashboard TUI 资源泄漏（Linux）** ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488), 6 条评论)
   - 长时间运行的 Dashboard TUI 会话会在浏览器刷新和故障场景下泄漏孤立的 node 进程、内存与未关闭的数据库行。核心需求：为 TUI 后端完善会话生命周期清理机制，避免自托管实例出现资源耗尽。

## 5. Bug 与稳定性
本周上报的 Bug 按严重等级排序（P1 > P2 > P3），并标注对应修复 PR 的状态：
### P1（严重）
- **Discord 多 Bot 无限确认循环** ([#32791](https://github.com/NousResearch/hermes-agent/issues/32791))：本周已修复并关闭。
- **会话存储维护安全问题** ([PR #117687](https://github.com/NousResearch/hermes-agent/pull/117687), 开放中)：正在推进修复，逻辑为当其他进程占用 `state.db` 时拒绝执行存储优化/清理操作，避免数据库损坏。

### P2（高优先级）
- **桌面端媒体文件链接损坏** ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361))：开放中，暂未关联修复 PR。
- **Dashboard TUI 进程/内存泄漏（Linux）** ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488))：开放中，暂未关联修复 PR。
- **桌面端 SSH 后端池存活检测卡死** ([#94381](https://github.com/NousResearch/hermes-agent/issues/94381))：开放中，暂未关联修复 PR。
- **Windows 网关看门狗重启失败** ([#91097](https://github.com/NousResearch/hermes-agent/issues/91097))：修复 PR [#91099](https://github.com/NousResearch/hermes-agent/pull/91099) 已开放，正在评审中。
- **供应商 429 错误被误分类为认证失败** ([#117482](https://github.com/NousResearch/hermes-agent/issues/117482))：已修复并关闭。
- **Termux 上 Modal 沙箱 Token 错误** ([#47264](https://github.com/NousResearch/hermes-agent/issues/47264))：修复 PR [#117737](https://github.com/NousResearch/hermes-agent/pull/117737) 已开放，新增了完善的认证失败诊断逻辑。
- **桌面端 `--ignore-existing` 标志失效** ([#117682](https://github.com/NousResearch/hermes-agent/issues/117682))：开放中，暂未关联修复 PR。
- **自定义供应商会话第二轮返回 500 错误** ([#117710](https://github.com/NousResearch/hermes-agent/issues/117710))：开放中，暂未关联修复 PR。
- **Cron 任务写入竞态条件** ([PR #117731](https://github.com/NousResearch/hermes-agent/pull/117731), 开放中)：修复锁超时场景下 cron 状态损坏的问题。
- **技能管理因描述含冒号失败** ([#117736](https://github.com/NousResearch/hermes-agent/issues/117736))：开放中，暂未关联修复 PR。
- **Nous Portal LongCat 2.0 输出预算耗尽** ([#117725](https://github.com/NousResearch/hermes-agent/issues/117725))：开放中，需复现确认。

### P3（中/低优先级）
- **DeepSeek 模型选择器显示已下线 ID** ([#117516](https://github.com/NousResearch/hermes-agent/issues/117516))：开放中，暂未关联修复 PR。
- **Google Meet 实时 API 弃用** ([#117693](https://github.com/NousResearch/hermes-agent/issues/117693))：开放中，暂未关联修复 PR。
- **Telegram 内联选择器负偏移量 Bug** ([#117717](https://github.com/NousResearch/hermes-agent/issues/117717))：开放中，暂未关联修复 PR。
- **Web 控制台 Vite 配置类型检查失败** ([#117722](https://github.com/NousResearch/hermes-agent/issues/117722))：开放中，暂未关联修复 PR。
- **后见之明记忆在合成轮次上运行** ([#117487](https://github.com/NousResearch/hermes-agent/issues/117487))：暂缓处理，等待上游记忆供应商架构调整。

## 6. 功能需求与路线图信号
本周用户提出的功能需求，以及短期内被纳入开发的可能性：
1. **Bot 模式自然对话风格** ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520))：可能性高。对应实现 PR ([#117733](https://github.com/NousResearch/hermes-agent/pull/117733)) 已开放，扩展了 bot 模式面向用户聊天的协议指引。
2. **Bot 主动发送房间消息** ([#97149](https://github.com/NousResearch/hermes-agent/issues/97149))：可能性中等。该需求允许群聊 bot 在非触发轮次外主动发送消息，获得了社区支持（1 个赞），可填补多 bot 集群的真实工作流缺口，但目前标记为 `needs-decision`。
3. **保留暂停状态的 Cron 计划编辑** ([#117739](https://github.com/NousResearch/hermes-agent/issues/117739))：可能性中高。该功能解决了 cron 任务管理中明确的运维痛点，且当前已有正在进行的 cron 可靠性相关工作 ([#117731](https://github.com/NousResearch/hermes-agent/pull/117731))。
4. **桌面端自定义链接处理器** ([#117715](https://github.com/NousResearch/hermes-agent/issues/117715))：可能性中低。标记为 `needs-decision`，属于扩展桌面导航功能的设计提案，目前尚无活跃开发。
5. **浏览器单调用页面快照** ([PR #115056](https://github.com/NousResearch/hermes-agent/pull/115056))：可能性高。该功能可减少浏览器工具的往返调用，目前 PR 已处于活跃评审阶段。

## 7. 用户反馈总结
### 痛点问题
- **桌面端静默失败**：用户反馈 `MEDIA:` 文件链接损坏时无有效日志，导致无法排查问题 ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361))。
- **Bot 交互风格不自然**：Bot 模式的输出像正式状态报告而非自然聊天，降低了群聊和单聊场景下的交互意愿 ([#117520](https://github.com/NousResearch/hermes-agent/issues/117520))。
- **长运行实例资源泄漏**：使用 Dashboard TUI 会话的 Linux 用户会随时间累积出现内存与进程膨胀问题 ([#64488](https://github.com/NousResearch/hermes-agent/issues/64488))。
- **供应商可靠性边缘场景**：上游临时的 429 错误会导致 API 密钥被误判失效，造成不必要的服务中断 ([#117111](https://github.com/NousResearch/hermes-agent/issues/117111))。
- **Windows 平台功能缺口**：网关看门狗重启失败与技能更新误通知给 Windows 用户带来了额外维护成本 ([#91097](https://github.com/NousResearch/hermes-agent/issues/91097), [#117181](https://github.com/NousResearch/hermes-agent/issues/117181))。

### 积极信号
- 社区在 Bug 修复与功能提案方面贡献活跃，本周共合并 12 个 PR，解决了多个真实用户上报的问题。
- 严重 Bug 响应速度快（例如 Discord 无限循环问题在上报当周就完成修复）。

## 8. 待办事项观察
长期存在、影响较大且需要维护者关注的事项：
1. **#64488 Dashboard TUI 资源泄漏（Linux）** ([链接](https://github.com/NousResearch/hermes-agent/issues/64488))：2026 年 7 月 14 日开放，共 6 条评论。该 P2 级 Bug 会导致长运行实例的资源逐步耗尽，是自托管用户面临的关键可靠性问题。目前暂未关联修复 PR。
2. **#47264 Termux 上 Modal 沙箱 Token 错误** ([链接](https://github.com/NousResearch/hermes-agent/issues/47264))：2026 年 6 月 16 日开放。修复 PR ([#117737](https://github.com/NousResearch/hermes-agent/pull/117737)) 现已提交，应优先评审以解决这个长期存在的 Android/Termux 兼容性问题。
3. **#55310 从网关回复中去除孤立代理项** ([链接](https://github.com/NousResearch/hermes-agent/pull/55310))：2026 年 6 月 30 日开放。该 P2 级消息投递 Bug 会导致 Telegram 等平台在响应包含无效 Unicode 字符时出现失败。PR 已根据评审完成变基与功能扩展，等待最终合并。
4. **#97149 Bot 主动发送房间消息** ([链接](https://github.com/NousResearch/hermes-agent/issues/97149))：2026 年 8 月 28 日开放，标记为 `needs-decision`。该功能需求填补了多 bot 工作流自动化的关键缺口，维护者需就范围与优先级做出决策，以推进开发落地。
5. **#86578 Anthropic 提示缓存策略测试** ([链接](https://github.com/NousResearch/hermes-agent/pull/86578))：2026 年 8 月 15 日开放。该测试基础设施 PR 可防止核心性能功能出现回归，应评审并合入以提升测试覆盖率。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报（2026-09-21 当周）
项目仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 近7日概览
过去7天，IronClaw 以中度维护类活动为主，新增/更新了 3 个公开议题，10 个拉取请求有更新（3个已关闭，7个进行中），无新版本发布。已关闭的 PR 大多为依赖维护更新，另有一项针对 Google Workspace 提供商激活的关键扩展集成修复。进行中的工作涵盖核心架构改进、身份功能扩展，以及持续开展的模型质量性能诊断。本周无重大功能发布，表明项目处于稳定化与渐进式改进阶段。

---

## 2. 版本发布
近7日无新版本发布。

---

## 3. 项目进展
过去7天合并或关闭了以下 PR，提升了平台稳定性与依赖时效性：
1. **[PR #8102: fix(extensions): resolve provider-instance readiness live, administrator configuration first](https://github.com/nearai/ironclaw/pull/8102)**（已关闭，作者：henrypark133）
   - 修复了 Gmail/Google Calendar 扩展的关键激活 Bug：通过 Web UI 配置的 OAuth（管理员配置，而非环境变量配置）在完成授权同意和令牌交换后，最终激活时会因提供商实例错误失败。
2. **[PR #8099: chore(deps): bump the everything-else group across 1 directory with 25 updates](https://github.com/nearai/ironclaw/pull/8099)**（已关闭，作者：dependabot[bot]）
   - 更新了 25 个核心 Rust 依赖（包括 `uuid` 从 1.24.0 升至 1.26.1、`base64` 从 0.22.1 升至 0.23.1），属于常规安全与兼容性维护。
3. **[PR #8079: chore(deps): bump the actions group across 1 directory with 6 updates](https://github.com/nearai/ironclaw/pull/8079)**（已关闭，作者：dependabot[bot]）
   - 更新了 6 个 GitHub Actions 依赖（包括 `anthropics/claude-code-action` 从 1.0.183 升至 1.0.221、`actions/setup-node` 从 4.0.2 升至 7.0.0），以升级 CI/CD 流水线。

---

## 4. 社区热门话题
本周所有事项的互动指标（评论/反应）均偏低，仅 1 个议题有评论互动：
1. **[Issue #7537: feat(llm): generic per-request thinking/effort control (provider-native mapping incl. DeepSeek chat_template_kwargs)](https://github.com/nearai/ironclaw/issues/7537)**（进行中，2 条评论，评论数最高）
   - *核心需求*：项目需要一套与提供商无关的 LLM“思考深度”控制抽象层，该需求源于 DeepSeek V4 Flash（0731 检查点）输出过于冗长的问题。该功能将允许用户按请求（或按模型默认值）调整推理深度，同时各提供商适配器可将该控制映射到自身原生参数（例如 DeepSeek 的 `chat_template_kwargs`）。这表明在多提供商部署场景下，用户对模型行为的精细化控制需求正在增长。
2. 每日失败分类议题（[#8101](https://github.com/nearai/ironclaw/issues/8101)、[#8100](https://github.com/nearai/ironclaw/issues/8100)）（进行中，各 0 条评论）
   - 尽管互动度低，但这些持续出现的诊断贴反映了社区和维护者仍在聚焦 IronClaw 办公任务套件的模型质量基准测试，定位未通过任务的根本原因。

---

## 5. Bug 与稳定性
近7日未收到明确的崩溃或回归 Bug 报告。以下稳定性相关事项已得到处理或已被识别：
1. **扩展激活 Bug（高影响，已修复）**
   - 上报背景：使用基于 Web UI 的 OAuth 配置时，Google Workspace（Gmail/日历）扩展激活失败（已通过 [PR #8102](https://github.com/nearai/ironclaw/pull/8102) 解决，现已关闭）。
2. **MCP 响应泄漏诊断分类（中等影响，修复中）**
   - 跟踪于 [Issue #8009](https://github.com/nearai/ironclaw/issues/8009)，并由进行中的 [PR #8077](https://github.com/nearai/ironclaw/pull/8077) 处理：MCP 出站泄漏阻断诊断缺乏 MCP 侧可见的明确原因码，可能导致安全遥测数据模糊不清。修复方案将统一泄漏标识逻辑，并为 MCP 通道添加规范分类。
3. **OfficeQA 基准测试未通过率（低严重性，持续诊断中）**
   - 记录于 [#8101](https://github.com/nearai/ironclaw/issues/8101)（2026-09-17，35 个未通过任务）和 [#8100](https://github.com/nearai/ironclaw/issues/8100)（2026-09-14，43 个未通过任务）：失败绝大多数源于 DeepSeek-V4-Flash 的模型质量限制（导航和指令遵循能力），而非平台 Bug。

---

## 6. 功能需求与路线图信号
以下公开功能提案和进行中的 PR 表明了中短期路线方向：
1. **通用 LLM 思考/深度控制（[Issue #7537](https://github.com/nearai/ironclaw/issues/7537)）**
   - 这是多提供商 LLM 支持的高优先级增强功能；鉴于它针对当前 DeepSeek 部署的痛点，极有可能纳入下一次次要版本发布。
2. **面向从业者的 IdentyClaw Passport 集成（[PR #7499](https://github.com/nearai/ironclaw/pull/7499)，规模：XL）**
   - 为无进程代理添加主机介导的 Passport 访问能力，以及从业者部署工具包。这将扩展 IronClaw 的身份与安全生态，大概率已纳入未来功能版本的路线图。
3. **持久存储与配置无关的重构（[PR #7456](https://github.com/nearai/ironclaw/pull/7456)，规模：XL）**
   - 对 Reborn 存储进行核心架构重写，使其与配置无关，并改进租户隔离能力。作为中等风险的核心变更，该功能大概率会在经过充分测试后，随主要或次要版本发布。

---

## 7. 用户反馈总结
本周收到的具体用户反馈集中在两大核心痛点：
1. **扩展配置体验摩擦**：通过 Web UI（而非环境变量）管理部署的用户遇到了 Google Workspace 扩展激活失败的问题，这对无代码/低代码操作人员来说是高摩擦问题（已通过 [PR #8102](https://github.com/nearai/ironclaw/pull/8102) 解决）。
2. **模型输出冗长与质量问题**：DeepSeek V4 Flash 用户反馈输出过于冗长，且办公任务基准测试持续失败，由此催生了按请求控制深度的需求（跟踪于 [#7537](https://github.com/nearai/ironclaw/issues/7537)），也推动了持续的模型质量诊断工作。
本周活动中未收集到明确的用户满意度/不满度评分。

---

## 8. 待办事项观察
以下长期存在、高影响的事项仍处于公开状态，等待维护者审核或推进：
1. **[PR #7456: fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456)**（创建于 2026-08-10，规模 XL，中等风险，核心贡献者提交）
   - 这是一项关于存储隔离的基础架构变更；已开放超过 6 周，近期无合并进展，需要维护者在安全和迁移语义方面达成一致。
2. **[PR #7499: feat(identyclaw): host-mediated Passport for practitioners](https://github.com/nearai/ironclaw/pull/7499)**（创建于 2026-08-11，规模 XL，新贡献者提交）
   - 来自外部贡献者的新生态功能；已开放超过 6 周，需要维护者审核以接入身份集成和部署工具。
3. **[Issue #7537: generic per-request thinking/effort control](https://github.com/nearai/ironclaw/issues/7537)**（创建于 2026-08-12）
   - 这是一项高价值增强功能，已有讨论但暂无关联的实现 PR，需要核心维护者确定范围和优先级。
4. **[PR #7834: chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)**（创建于 2026-08-23，规模 L，中等风险）
   - Wasm 依赖更新已开放近 4 周，大概率正在等待沙箱运行时组件的兼容性测试。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报 | 2026-09-21 周
代码仓库：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 近7天整体进展
过去7天 QwenPaw 保持高速开发节奏，共更新50个 issue（35个处于开放/活跃状态，15个已关闭）和50个 PR（35个开放中，15个已合并/关闭），同时发布了2个面向 v2.2.2 版本的新 beta 测试版。开发活动主要集中在控制台用户体验加固、模型提供商兼容性、插件隔离，以及长期存在的上下文管理边界场景上——说明团队正在稳定 2.2.x 版本线，同时朝着多租户 Hub 里程碑推进。社区参与度持续高涨，一个路线图讨论 issue 收获了31条评论，多个社区贡献的 bug 报告和功能建议正在影响待办事项的优先级。项目整体健康度良好：大部分已报告 bug 都有对应的修复 PR 在审核中，发布流水线优化也在陆续上线，以缩短合并等待时间。

---

## 2. 版本发布
本周发布了2个 v2.2.2 的 beta 测试版：
### v2.2.2-beta.3
- **修复（控制台）：** 恢复了此前版本中失效的助手响应操作（[PR #7851](https://github.com/agentscope-ai/QwenPaw/pull/7851)，@zhijianma）
- **修复（端到端测试）：** 重新锚定了因 #7502 重构而失效的控制台选择器，并加固了会话列表断言以减少测试不稳定问题（[PR #7852](https://github.com/agentscope-ai/QwenPaw/pull/7852)，@yutai78786）
- **破坏性变更 / 迁移说明：** 无；本 beta 版为补丁版本，专注于回归修复。

### v2.2.2-beta.1
- **功能（控制台）：** 优化了分组聊天历史体验（[PR #7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)，@zhaozhuang521）
- **功能（记忆）：** 统一了 ReMe 斜杠命令，实现一致的记忆交互体验（[PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)，@jinliyl）
- **日常维护：** 版本号提升至 2.2.2b1（@cuiyuebing）
- **破坏性变更 / 迁移说明：** ReMe 记忆的斜杠命令行为现已标准化——依赖旧版单命令语法的用户请验证自身工作流。

---

## 3. 项目进展
过去7天重点合并/关闭的 PR：
- **[PR #7904](https://github.com/agentscope-ai/QwenPaw/pull/7904)** — 修复了 `qwenpaw-pet` 插件导致工具审批失效的问题，方式是将 `actor` 参数转发给原生审批服务（修复 #[7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)，@Osier-Yi）
- **[PR #7843](https://github.com/agentscope-ai/QwenPaw/pull/7843)** — 新增 AgentScope Platform 作为内置 OpenAI 兼容提供商，支持模型自动发现及 logo/品牌展示（@Osier-Yi）
- **[PR #7894](https://github.com/agentscope-ai/QwenPaw/pull/7894)** — 前端单元测试覆盖率提升3.19个百分点（64.45% → 67.65%，新增1027条语句、543个测试用例）——纯测试优化，无业务代码变更（@yutai78786）
- **[PR #7901](https://github.com/agentscope-ai/QwenPaw/pull/7901)** — 发布冻结现在通过 `workflow_run` 触发器在发布完成后立即解除，消除了之前基于 cron 调度的数分钟延迟，避免其阻塞发布后的 PR 合并（@yutai78786）
- **[PR #7862](https://github.com/agentscope-ai/QwenPaw/pull/7862)** — 发布制品推送现在以测试通过为前置条件，同时将端到端测试 watch 集合标记为阻塞性检查，防止发布版本带缺陷（@yutai78786）
- **[PR #7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) / [PR #7887](https://github.com/agentscope-ai/QwenPaw/pull/7887)** — 处理了来自模型提供商的未知 `input_audio` 内容片段拒绝问题，恢复了音频 fallback 重试和能力学习路径（@axelray-dev、@lorenzozanee）
- **[PR #5836](https://github.com/agentscope-ai/QwenPaw/pull/5836)** — 桌面端：自动识别聊天输出中的本地文件/目录路径，并渲染为可点击链接，点击后在系统文件资源管理器中打开（修复 #[4830](https://github.com/agentscope-ai/QwenPaw/issues/4830)，@wangfei010313）
- **[PR #7345](https://github.com/agentscope-ai/QwenPaw/pull/7345)** — 修复了用户停止正在运行的工具轮次后，工具卡片永远卡在“执行中”状态的问题（@zhaozhuang521）
- **[PR #7813](https://github.com/agentscope-ai/QwenPaw/issues/7813)（通过相关修复关闭）** — 解决了因裸 `null` SSE 帧负载导致的控制台流式输出冻结问题（@wjt0321）

---

## 4. 社区热点话题
按评论数和参与度排序的最活跃社区讨论：
1. **[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版本路线图讨论（31条评论，4个👍）**
   本周参与度最高的讨论帖是关于即将推出的 2.2.0 Hub 版本的社区头脑风暴。核心需求：团队希望有可自托管、由管理员管理的多用户 QwenPaw，支持共享技能、基于角色的访问控制，以及集中式账单/模型管理——这清晰表明企业/团队级采用是社区的首要诉求。
2. **[Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — Windows 2.2.0 版本中子 Agent 生成始终超时（10条评论）**
   有报告称 Windows 桌面端所有子 Agent 生成的任务均因超时而失败，且不受超时设置影响。核心需求：可靠的多 Agent 编排对构建复杂 Agent 工作流的高级用户至关重要。
3. **[Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — ToolResultPruner 跳过媒体块，导致 base64 图片膨胀撑爆上下文窗口（6条评论）**
   一位社区成员提交的研究详尽的 bug 报告，指出了非文本工具输出的上下文裁剪存在缺口。核心需求：多模态工作流中可靠、可预期的上下文管理是核心痛点。
4. **[Issue #5567](https://github.com/agentscope-ai/QwenPaw/issues/5567) — 社区构建的 QwenPaw GitHub Issue 反馈助手 Skill（2条评论，2个👍）**
   一款第三方 Skill，可根据随意的用户反馈自动生成格式规范、已脱敏的 GitHub issue。核心需求：降低社区贡献和 issue 上报的门槛。

---

## 5. Bug 与稳定性
过去7天报告的 bug，按预估严重程度排序：
| 严重程度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| **严重** | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) 工具结果系统提醒中存在持续性提示注入 | 注入的指令被追加到20多轮的系统提醒块中，指示 Agent 删除所有技能；本地磁盘未找到注入源 | 暂无修复 PR；安全调查进行中 |
| **严重** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) 插件共享宿主事件循环——单个同步调用会冻结整个实例 | 单个插件执行同步 I/O 会导致所有 Agent/频道冻结约40秒；无隔离或监控机制 | 暂无修复 PR；插件隔离是已知的架构缺口 |
| **高** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) ToolResultPruner 跳过 `type="data"` 媒体块 | `view_image` 生成的 base64 图片在上下文中无限累积，直到窗口溢出 | 暂无修复 PR；正在积极分诊 |
| **高** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) Windows 2.2.0 版本子 Agent 生成始终超时 | 无论如何配置，所有子 Agent 任务均因超时而失败 | 暂无修复 PR；已确认是 Windows 特有复现问题 |
| **高** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) 桌面端会话与模型配置丢失 | 应用冻结/重启后会话消失；模型配置被重置 | 暂无修复 PR；与此前的 #[7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) 相关 |
| **中** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) 控制台懒加载页面加载失败后不可恢复 | 分块加载失败后显示永久错误页面，需完全刷新才能恢复 | 暂无修复 PR；错误边界存在缺口 |
| **中** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) Edge 浏览器中聊天页面因 `insertBefore NotFoundError` 崩溃 | 浏览器 UI 层会在 React 管理的文本节点外注入 `<font>` 包装器，破坏 DOM 协调 | 暂无修复 PR；浏览器特有问题 |
| **中** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) OpenCode “免费”模型通过 API 调用时报 403 FreeTierError | UI 中标注为免费的模型，API 调用却被拒绝（仅客户端层面的免费层级） | 相关修复 PR：[#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（发送 OpenCode 会话头）审核中 |
| **中** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) 滚动驱逐会丢失工具密集型轮次中的用户消息 | 实时上下文窗口丢失用户请求，但 history.db 中仍有保留 | 暂无修复 PR；上下文管理边界场景 |
| **低** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) 压缩刷新后聊天历史未完全加载 | 用户报告压缩后可见历史被截断 | 暂无修复 PR；可能与驱逐行为有关 |

---

## 6. 功能需求与路线图信号
过去一周用户最希望实现的功能，以及其在 v2.2.2/v2.3 中落地的可能性：
1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub 多租户功能** — 已确认在 2.2.0+ 路线图上；社区反馈正在影响管理工具、共享技能和团队工作区的设计。**极有可能**在 2.2.x 期间逐步发布 Hub 相关功能。
2. **[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) 插件可见的工具调用前策略钩子** — 面向插件的治理流程扩展点。v2.3 版本**中高可能性**；符合插件生态路线图。
3. **[#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) 可自定义网页标题** — 针对运行多个 QwenPaw 实例用户的体验优化需求。v2.2.2 正式版或 v2.3.1 版本**中可能性**；实现成本低。
4. **[#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) 统一所有模型类型的配置方式** — 标准化文本、嵌入、音频和视频模型的配置。v2.3 版本**高可能性**；与正在进行的 PR #[7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) 中的提供商统一工作方向一致。
5. **[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) Agent 自主上下文管理** — 让 Agent 参与上下文驱逐决策。v2.3 版本**中可能性**；基于正在进行的上下文管理器重构。
6. **[#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) Agent 定时任务模型覆盖** — 允许定时任务指定独立于 Agent 默认配置的固定模型。**已关闭/接受**；预计在 v2.2.2 中落地。

---

## 7. 用户反馈总结
### 核心痛点
- **上下文管理可靠性：** 多位用户报告了意外的上下文溢出、压缩后历史丢失、驱逐行为异常等问题——这是 2.2.x 版本最集中的不满来源。
- **插件稳定性与隔离：** 共享事件循环的设计意味着第三方插件可能导致整个实例崩溃，削弱了用户对插件生态的信任。
- **Windows 桌面端数据丢失：** 桌面端会话和模型配置重置是反复出现的投诉，已有多个相关 issue 处于开放状态。
- **提供商兼容性：** OpenCode 模型错误、缺失请求头、免费层级标注错误等问题，给试用内置提供商的新用户带来了上手障碍。

### 积极信号
- 社区贡献者正在提交高质量、研究详尽的 bug 报告（例如 #7853、#7840），附带复现步骤和根本原因分析，说明用户群体技术参与度高。
- 第三方 Skill 开发（例如 #5567）表明扩展生态活跃。
- 用户对即将推出的 Hub 版本充满期待，建设性反馈正在推动路线图演进。

### 观察到的使用场景
- 多 Agent 工作流自动化（子 Agent 生成）
- 团队/企业共享助手部署
- 需要大上下文窗口的长时间编码/研究会话
- 具备本地文件访问能力的桌面端个人生产力工具

---

## 8. 待办关注项
需要维护者关注的长期存在或高影响事项：
1. **[Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — Windows 端子 Agent 生成超时（开放10天，10条评论）**
   在 Windows 2.2.0 版本上可稳定复现；阻碍了桌面用户的多 Agent 使用场景。目前无负责人，也未见修复 PR。
2. **[Issue #7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) — 插件事件循环隔离（开放4天，4条评论）**
   这是一个影响所有插件用户的基础架构稳定性问题。目前尚未发布插件沙箱的路线图或设计文档。
3. **[Issue #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) — 桌面端会话与模型配置丢失（开放9天，5条评论）**
   反复出现的数据丢失问题，已有多个相关报告（例如 #7708）。根本原因尚未公开确认。
4. **[Issue #2324](https://github.com/agentscope-ai/QwenPaw/issues/2324) — 多用户访问与管理员管理技能（在 #7318 中被提及）**
   这一最初的 Hub 功能需求已开放数月；通过 #7318 可以看到进展，但没有专门的里程碑 issue 跟踪具体交付成果。
5. **[PR #7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) — ReMeLight 记忆写入使用独立模型（开放9天）**
   这是一项针对记忆操作的成本优化功能；尽管社区有兴趣，但暂无审核状态更新。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报 | 2026-09-21
代码仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 近7天总览
本周ZeroClaw在架构优化与稳定性建设上动作密集，共更新50个Issue（33个已关闭，17个进行中）和50个Pull Request（6个已合并/关闭，44个进行中）。已关闭的Issue中大部分为已通过的RFC，标志着项目在内存架构、安全体系、渠道支持、运行时治理等领域进入设计共识集中落地的关键阶段。开放的PR主要聚焦安全加固、运行时可靠性修复，以及高优先级子系统的功能补全，其中有多笔高风险、大规模的变更正在评审中。本周无新版本发布，表明项目正处于发布前的稳定性打磨与设计审批阶段。

---

## 2. 版本发布
近7天无新版本发布。

---

## 3. 项目进展
本周合并/关闭的6个PR推动了核心可靠性、插件安全与可观测性能力的升级：
- **[PR #9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) [已关闭]**：修复了插件组件准入逻辑，保留经验证的有效载荷原始字节，消除重读差异，并将WASM清单与可选的SHA-256校验和绑定，提升供应链完整性。
- **[PR #10722](https://github.com/zeroclaw-labs/zeroclaw/pull/10722) [已关闭]**：修复了向ACP/RPC事件消费者传递前置工具 narration 与终端降级内容的逻辑，确保所有渠道接口下的用户体验一致。
- **[PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) [已关闭]**：为历史记录裁剪事件新增Token计量功能，让用户和运维人员可以清晰查看会话截断时的Token用量变化。
- 其余3个已关闭PR处理了构建、CI、文档维护类工作，与已通过的RFC流程更新保持对齐。

---

## 4. 社区热门话题
本周讨论热度最高的是进入最终通过阶段的长期高影响力RFC：
1. **[Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（26条评论，已关闭）**：关于将内存生命周期策略与存储后端解耦的RFC。高参与度反映了社区对模块化内存架构的需求——运维人员可以替换存储后端，而无需重新实现整合、治理与留存逻辑。
2. **[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（25条评论，已关闭）**：关于ZeroClaw Chat Completions配置的RFC。热烈讨论表明用户普遍希望兼容事实上的OpenAI API标准，无需自定义适配器即可对接Open WebUI、LobeChat、Aider、LangChain等主流客户端。
3. **[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（24条评论，已关闭）**：关于高风险Shell命令按执行级别设置确认层级的RFC，采用类似Claude Code的allow/ask/deny策略。高参与度凸显了社区对Agent工具执行环节提供精细化、易用安全控制的重视。
4. **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（23条评论，1 👍，已关闭）**：关于Goal模式v1的RFC，这是一套面向多轮目标的有界前台工作系统。反馈与评论量表明用户需要支持跨Agent轮次持久化的任务追踪能力，同时又不希望核心运行时过于复杂。

---

## 5. Bug与稳定性
本周上报并正在积极修复的高严重级Bug，按风险排序如下：
1. **[PR #10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) [高风险，开放中]**：Git操作绕过了允许的根目录限制，导致Agent可以访问授权目录外的代码仓库。修复PR正由维护者评审。
2. **[PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) [高风险，开放中]**：Bluesky与Reddit渠道缺少发送方授权校验，未认证用户可触发Agent操作。修复PR已提交，等待维护者评审。
3. **[PR #10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803) [高风险，开放中]**：单候选流恢复缺少专用重试预算，且服务提供方过载错误被错误分类，导致高负载下出现不必要的失败。修复PR已提交。
4. **[PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) [高风险，开放中]**：携带图片的请求返回HTTP 400时会直接整体失败，而非跳过问题图片进行降级处理。恢复逻辑实现正在评审中。
5. **[PR #10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) [高风险，开放中]**：Windows计划任务的stdout/stderr日志无大小限制，存在磁盘耗尽风险。实现有界日志写入器的修复PR已提交。
6. **[PR #10849](https://github.com/zeroclaw-labs/zeroclaw/pull/10849) [中风险，开放中]**：ZeroCode的Ctrl+N快捷键会替换当前会话而非新建会话，干扰工作流。修复PR已提交。

---

## 6. 功能需求与路线图信号
已通过的RFC与开放的功能PR预示了短期路线图的可能新增方向：
- **内存架构重构**：4项已通过的RFC（#6850、#9103、#9048、#6165）定义了一套解耦的模块化内存系统，拆分对话历史、长期记忆与增强连接器，是v0.9.0版本的高优先级候选功能。
- **OpenAI Chat Completions API兼容**：已通过的RFC #8603将实现与更广泛LLM客户端生态的对接，是用户呼声极高的面向用户功能。
- **实时语音转语音支持**：针对Gemini Live语音渠道的已通过RFC #8780目前处于待排期状态，但设计共识度高，有望在v0.9.0之后的版本发布。
- **Goal模式v1**：已通过的有界多轮任务执行RFC #8303与核心Agent能力升级方向一致，大概率纳入下一个次版本发布计划。
- **精细化Shell命令安全**：已通过的allow/ask/deny命令策略RFC #7155属于v0.9.0安全架构里程碑内容，目前正在积极实现中。

---

## 7. 用户反馈汇总
从活跃的Issue与PR中梳理出的痛点与使用场景：
- **集成成本高**：用户反复提及需要标准API兼容性（对应RFC #8603），无需定制开发即可将ZeroClaw接入现有工具与工作流。
- **安全易用性**：关于Shell命令策略与工具授权的反馈显示，用户需要既严格又易配置的安全控制，而非非黑即白的全有/全无访问模式。
- **会话可靠性**：多份关于历史记录裁剪、会话重置、轮次状态的Bug报告（如PR #10696、#10801）表明，用户依赖持久、一致的会话状态完成长周期任务。
- **跨渠道体验一致性**：Matrix渠道的语音消息支持（PR #11007）、新渠道的授权缺口等问题，反映出用户期望所有支持的消息平台具备统一功能。
- **本地部署易用性**：关于使用llmfit进行本地模型选择的新增文档（PR #11008）表明，用户对自托管、硬件优化的ZeroClaw部署方案兴趣日益增长。

---

## 8. 待办观察
长期高优先级、等待维护者处理或推进的事项：
- **[PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) [开放中，创建于2026-06-17]**：带应用层强制校验的标准沙箱策略 schema。这项高风险、超大体积的安全功能已开放3个月，当前状态为"需要作者跟进"，阻塞了v0.9.0安全架构里程碑的推进。
- **[PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) [开放中，创建于2026-07-26]**：Anthropic存储式OAuth配置支持。这项由可信贡献者提交的PR状态为"需要作者跟进"，已开放近2个月，推迟了这家主流服务提供方的OAuth集成进度。
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [开放中，15条评论]**：维护者RFC与设计事项决策队列追踪器。当前已通过但未实现的RFC积压较多（包括#8780、#7100、#9106等待排期项），表明维护者的设计评审与优先级排期带宽是当前瓶颈。
- **[Issue #7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) [已通过，暂存状态]**：WASM插件观察者订阅机制。尽管设计已通过，这项插件生态功能仍被延后至暂存队列，近期无实现进展。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*