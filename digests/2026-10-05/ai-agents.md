# OpenClaw 生态周报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-05 01:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报（2026-10-05）
**数据来源：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
**统计周期：** 截至 2026-10-05 的 7 天

---

## 1. 近 7 天整体概况
本周 OpenClaw 保持高速开发节奏，共更新 500 个 issue（350 个活跃中，150 个已关闭）和 500 个 PR（309 个开放中，191 个已合并/关闭）。项目发布了 5 个新版本，包括 1 个新稳定版和多个扩展稳定版（相当于 LTS）的网关更新，体现了活跃的功能开发与持续的安全/可靠性维护并重。

核心工作重点包括更新管道可靠性、状态与会话管理的性能优化，以及多智能体和渠道集成 bug 修复。社区参与度持续走高，围绕成本治理、内存系统改进、多智能体权限范围等话题讨论热烈。项目整体健康度良好，bug 修复与前瞻性功能开发稳步推进。

---

## 2. 版本发布
本周共发布 5 个新版本，覆盖稳定版和扩展稳定版渠道：

### v2026.9.8（稳定版）
- **数据：** 58 次提交、43 个 PR、21 位贡献者
- **详情：** 最新稳定版，完整变更日志见[官方发布说明](https://docs.openclaw.ai/releases/2026.9)
- **链接：** [openclaw/openclaw Release v2026.9.8](https://github.com/openclaw/openclaw/releases/tag/v2026.9.8)

### v2026.9.7（稳定版）
- **数据：** 518 次直接提交、2818 个 PR、334 位贡献者
- **详情：** 重要稳定版，包含大量功能更新与 bug 修复；发布说明见[官方文档](https://docs.openclaw.ai/rel)
- **链接：** [openclaw/openclaw Release v2026.9.7](https://github.com/openclaw/openclaw/releases/tag/v2026.9.7)

### 扩展稳定版（仅网关）（相当于 LTS）
基于 2026 年 8 月基线发布了 3 个扩展稳定版更新，重点为安全补丁、可靠性修复、性能优化和新模型支持：
- v2026.8.35：[openclaw/openclaw Release v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)
- v2026.8.34：[openclaw/openclaw Release v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34)
- v2026.8.33：[openclaw/openclaw Release v2026.8.33](https://github.com/openclaw/openclaw/releases/tag/v2026.8.33)

现有发布数据中未提及破坏性变更或强制迁移步骤。

---

## 3. 项目进展
在本周合并/关闭的 191 个 PR 中，核心进展如下：

### 更新与安装可靠性
- **[PR #165257](https://github.com/openclaw/openclaw/pull/165257)：** 修复非特权容器中 `openclaw update` 失败的问题——当 FICLONE ioctl 被拒绝时回退到字节拷贝方式（解决 #164113）
- **[PR #165242](https://github.com/openclaw/openclaw/pull/165242)：** 修复相同包更新时的旧配置处理逻辑，避免准入后配置被拒绝
- **[PR #165233](https://github.com/openclaw/openclaw/pull/165233)：** 修复原地更新成功后，因清理代码导入过时导致的 CLI 误报错误

### 性能优化
- **[PR #165249](https://github.com/openclaw/openclaw/pull/165249)：** 消除冗余消息跳转，降低 worker 任务传输的持续开销
- **[PR #165186](https://github.com/openclaw/openclaw/pull/165186)：** 通过细化 SQLite 持有警告归因和复用完整性证明，提升共享状态性能
- **[PR #165221](https://github.com/openclaw/openclaw/pull/165221)：** 限制对话记录源读取量，防止大型会话历史操作时出现 100MB 以上的堆内存峰值

### Bug 修复
- **[PR #165210](https://github.com/openclaw/openclaw/pull/165210)：** 修复 Code Mode 中，当提供商在多个响应中复用工具调用 ID 时导致的嵌套调用失败问题
- **[PR #142888](https://github.com/openclaw/openclaw/pull/142888)：** 修复兼容 OpenAI 的提供商在增量消息中重发完整内容时，实时助手文本重复的问题（解决 #136262）
- **[PR #144488](https://github.com/openclaw/openclaw/pull/144488)：** 让内存嵌入请求超时可配置且支持恢复，修复慢提供商导致的索引永久卡顿问题

### UI/UX 改进
- **[PR #164607](https://github.com/openclaw/openclaw/pull/164607)：** 在个人资料 UI 中为网关管理员新增渠道身份链接管理功能
- **[PR #165199](https://github.com/openclaw/openclaw/pull/165199)：** 修复侧边栏固定编辑器与排序把手控件重叠的问题

---

## 4. 社区热门话题
本周讨论最活跃的 issue 反映了用户在成本控制、运行时稳定性和内存系统行为方面的核心诉求：

1. **网关层面按智能体实施成本预算管控**
   - **Issue：** [#42475](https://github.com/openclaw/openclaw/issues/42475)（25 条评论，1 👍）
   - **分析：** 运维人员希望在网关层面为每个智能体设置原生的日/月成本上限，无需外部监控工具即可避免费用失控。这解决了多智能体部署中的核心运维痛点——当前按会话跟踪的方式无法提供主动的预算防护。

2. **钩子/工具执行导致僵尸子进程泄漏**
   - **Issue：** [#97616](https://github.com/openclaw/openclaw/issues/97616)（17 条评论，1 👍）
   - **分析：** 用户反馈 `openclaw-hooks`、`bash` 和 `codex` 子进程不断累积且未被回收，随时间推移会降低运行时性能。对于长期运行的网关实例，这是高优先级稳定性问题。

3. **短期记忆保留驱逐机制阻碍记忆升级**
   - **Issue：** [#150635](https://github.com/openclaw/openclaw/issues/150635)（17 条评论，0 👍）
   - **分析：** 当短期记忆达到 512 条上限后，夜间“深度梦境”阶段无法将记忆升级到长期存储，原因是每晚都会摄入零回忆条目。对于高会话量的用户，这破坏了内存系统的核心功能。

4. **内存核心表中 SQLite 无限制增长**
   - **Issue：** [#114612](https://github.com/openclaw/openclaw/issues/114612)（16 条评论，0 👍）
   - **分析：** `memory_index_chunks` 和 `memory_embedding_cache` 表无限制增长，存在磁盘耗尽风险。对于长时间运行的生产部署，这是关键持久性问题。

---

## 5. Bug 与稳定性
本周报告/更新的 bug 按严重程度（P0 > P1 > P2）和影响排序：

### P0（严重）
1. **[#164396](https://github.com/openclaw/openclaw/issues/164396)：** 在全新安装 Windows 11 + Node 22 LTS 的环境中，OpenClaw 2026.9.8 无法连接本地网关
   - 影响：新 Windows 用户上手失败；暂无修复 PR
2. **[#160959](https://github.com/openclaw/openclaw/issues/160959)：** 捕获大型外部插件时网关阻塞数分钟（2026.9.6 引入的回归）
   - 影响：事件循环饥饿；暂无修复 PR
3. **[#157415](https://github.com/openclaw/openclaw/issues/157415)：** `doctor --fix` 拒绝对外部安装的 acpx 和 codex 执行会话后插件迁移
   - 影响：插件用户迁移失败；暂无修复 PR
4. **[#158390](https://github.com/openclaw/openclaw/issues/158390)：** plugin-captures 临时目录未被垃圾回收，持续占用磁盘
   - 影响：磁盘耗尽；社区支持 1 👍；暂无修复 PR

### P1（高优先级）
1. **[#97616](https://github.com/openclaw/openclaw/issues/97616)：** 钩子/工具导致僵尸子进程泄漏（见社区热门话题）
2. **[#114612](https://github.com/openclaw/openclaw/issues/114612)：** 内存 SQLite 表无限制增长（见社区热门话题）
3. **[#161379](https://github.com/openclaw/openclaw/issues/161379)：** 因 OpenAI 目录刷新循环（60 秒 TTL 短于单智能体刷新时间），网关 CPU 核心持续满载
   - 影响：单核心 100% CPU 占用；暂无修复 PR
4. **[#161976](https://github.com/openclaw/openclaw/issues/161976)：** 重启后 WhatsApp 私信回复在持久化注册交接时失败
   - 影响：消息丢失；暂无修复 PR
5. **[#144291](https://github.com/openclaw/openclaw/issues/144291)：** 配置热重载会中止所有进行中的智能体轮次
   - 影响：会话中断；暂无修复 PR

### 值得关注的回归问题
- [#97616](https://github.com/openclaw/openclaw/issues/97616)（僵尸进程）：相较早期版本的回归
- [#161379](https://github.com/openclaw/openclaw/issues/161379)（CPU 满载）：2026.9.6 引入的回归
- [#160959](https://github.com/openclaw/openclaw/issues/160959)（插件捕获阻塞）：2026.9.6 引入的回归

---

## 6. 功能需求与路线图信号
最受用户需求、且大概率纳入路线图的功能：

1. **按智能体实施成本预算管控**（[#42475](https://github.com/openclaw/openclaw/issues/42475)）
   - 在网关层面为每个智能体设置日/月支出上限。对企业部署具有很高运维价值；鉴于讨论活跃且已被维护者标记评审，大概率会被优先安排。

2. **按智能体设置 agentToAgent 和会话可见性范围**（[#59149](https://github.com/openclaw/openclaw/issues/59149)）
   - 将全局唯一的多智能体权限设置替换为按智能体范围配置。已获得 2 👍 反应，且有相关 PR（相关 issue 中引用了 [#155442](https://github.com/openclaw/openclaw/pull/155442)），是即将发布版本的有力候选。

3. **共享工作区内存索引**（[#95724](https://github.com/openclaw/openclaw/issues/95724)）
   - 按源目录而非智能体索引内存，避免同一工作区下多个智能体重复存储向量库。可提升性能并减少资源占用，契合当前内存系统优化方向。

4. **Swarm agents.run 的受限启动契约**（[#156632](https://github.com/openclaw/openclaw/issues/156632)）
   - 为 Swarm 智能体验证通道添加受限执行边界。已有关联实现 PR（#155442），表明正在积极开发中。

---

## 7. 用户反馈总结
### 痛点
- **更新可靠性：** 多平台出现更新失败、回滚和安装卡住的问题（macOS 非 root [#164422](https://github.com/openclaw/openclaw/issues/164422)、Windows 全新安装 [#164396](https://github.com/openclaw/openclaw/issues/164396)、非特权容器 [#164113](https://github.com/openclaw/openclaw/issues/164113)）。
- **资源泄漏：** 插件捕获导致的磁盘和内存泄漏 [#158390](https://github.com/openclaw/openclaw/issues/158390)、内存表增长 [#114612](https://github.com/openclaw/openclaw/issues/114612) 以及僵尸进程 [#97616](https://github.com/openclaw/openclaw/issues/97616)，是长期部署中的反复出现的问题。
- **渠道投递问题：** WhatsApp [#161976](https://github.com/openclaw/openclaw/issues/161976)、Signal [#143581](https://github.com/openclaw/openclaw/issues/143581)、iMessage [#143632](https://github.com/openclaw/openclaw/issues/143632) 和 Telegram [#143278](https://github.com/openclaw/openclaw/issues/143278) 上的消息丢失和投递失败，影响核心用户信任。
- **多智能体使用障碍：** 权限范围 [#59149](https://github.com/openclaw/openclaw/issues/59149)、子智能体投递失败 [#143334](https://github.com/openclaw/openclaw/issues/143334) 以及 claude-cli 多智能体 bug [#164972](https://github.com/openclaw/openclaw/issues/164972)，阻碍了团队型智能体工作流的普及。

### 使用场景
- 具备成本治理和分层权限模型的企业多智能体部署
- 跨多个聊天渠道、用于个人/团队生产力的长期自托管网关
- 基于 Codex 和 claude-cli 后端的 Code Mode 与开发自动化
- 用于知识工作和长期项目上下文的记忆增强智能体

### 满意度信号
- 社区贡献活跃（每个版本有 21-334 位贡献者），表明用户参与度高
- 回归 bug 分类处理迅速（多个 2026.9.x 回归问题已得到即时关注）

---

## 8. 待办关注
需要维护者关注的长期存在或高影响 issue/PR：

1. **[#84037](https://github.com/openclaw/openclaw/issues/84037)：** 优化 Codex 应用服务器稳态 CPU 占用和辅助进程开销
   - 创建时间：2026-05-19；11 条评论，1 👍；P1 优先级。影响 Codex 用户的性能问题，暂无修复 PR。

2. **[#95724](https://github.com/openclaw/openclaw/issues/95724)：** 按源目录而非智能体索引内存
   - 创建时间：2026-06-22；6 条评论，1 👍；P2 优先级。针对多智能体工作区的效率改进，暂无关联 PR。

3. **[#59149](https://github.com/openclaw/openclaw/issues/59149)：** 按智能体设置 agentToAgent 和会话可见性范围
   - 创建时间：2026-04-01；6 条评论，2 👍；P2 优先级。已有关联 PR 但仍处于开放状态，等待产品决策。

4. **[#119055](https://github.com/openclaw/openclaw/pull/119055)：** fix(code-mode): keep waiting results durable across retries
   - 创建时间：20

---

## 横向生态对比

# 跨项目个人AI助手/智能体开源生态对比报告
*报告周期：截至2026-10-05的7天*

---

## 1. 生态概述
开源个人AI助手与智能体生态仍处于高速增长、快速迭代阶段，各项目同时推进基础可靠性建设，以及面向企业和高级用户部署的需求驱动型功能拓展。本次调研的五个项目中，核心投入方向包括运行时稳定性、内存系统优化、多渠道集成，以及多智能体部署的成本管控。社区贡献率保持强劲，新贡献者在各层级项目中均提供了针对性修复与功能补充，而安全加固与沙箱机制仍是生产级部署不可妥协的优先级。当前生态按使用场景划分为三类：通用网关型平台、本地优先的轻量智能体、工作流优化型助手，分别面向不同用户群体与部署模式。

---

## 2. 活跃度对比
| 项目 | 更新的Issue（活跃/已关闭） | 更新的PR（待合并/已合并） | 新版本发布 | 健康度评分（1-10） |
|---------|--------------------------------|---------------------------|--------------|---------------------|
| OpenClaw | 500（350 活跃 / 150 已关闭） | 500（309 待合并 / 191 已合并） | 5（2个稳定版，3个扩展稳定版） | 9.0 |
| Hermes Agent | 50（46 待处理 / 4 已关闭） | 50（44 待合并 / 6 已合并） | 0 | 7.2 |
| IronClaw | 7（7 活跃 / 0 已关闭） | 13（10 待合并 / 3 已合并） | 1（稳定补丁版） | 7.8 |
| QwenPaw | 50（46 待处理 / 4 已关闭） | 50（39 待合并 / 11 已合并） | 1（测试版） | 7.5 |
| ZeroClaw | 50（47 待处理 / 3 已关闭） | 50（45 待合并 / 5 已合并） | 0 | 7.0 |

*健康度评分基于发布节奏、Bug处理速度、社区贡献量，以及待处理严重问题的影响程度计算。*

---

## 3. OpenClaw的市场定位
OpenClaw是本次调研范围内明显的市场与成熟度领跑者，其Issue与PR体量是排名第二梯队项目的10倍，拥有完善的多渠道发布管线（稳定版+扩展稳定版/LTS），且贡献者基数最大（每个版本贡献者数量在21–334人之间）。它采用网关为核心的技术路线，优先发展多智能体编排、跨渠道集成，以及企业级运营管控能力（成本治理、权限范围控制），这些能力在同类项目中仍处于起步阶段。
与规模更小的同类项目相比，OpenClaw拥有更成熟的企业用户基础，这体现在社区对生产可扩展性、成本控制、长期部署可靠性的关注上；而Hermes Agent与QwenPaw更侧重终端用户体验与前端打磨，IronClaw聚焦安全优先的沙箱执行，ZeroClaw则瞄准本地优先、注重隐私的部署场景。

---

## 4. 共同技术关注方向
1. **运行时稳定性与资源泄漏治理**
   全项目共性优先级：五个项目均存在内存泄漏、进程泄漏或事件循环阻塞相关的待解决问题。OpenClaw报告了僵尸子进程泄漏与SQLite内存表无限制增长问题；QwenPaw记录了因流式缓冲区无限制导致的每秒1MB内存增长问题；ZeroClaw正在解决SQLite会话后端效率问题；Hermes Agent提到了WebSocket重连循环导致的CPU占满问题；IronClaw在跟踪基准测试管线的稳定性缺陷。
2. **安装/更新可靠性**
   OpenClaw、Hermes Agent与ZeroClaw均报告了平台特定的安装失败问题：OpenClaw修复了非特权容器更新失败与Windows全新安装的连接问题；Hermes Agent记录了Termux/ARM64与Windows平台Python 3.14环境下的更新崩溃问题；ZeroClaw提到了Android/Termux快速入门流程失败的问题。
3. **聊天/对话记录体验可靠性**
   Hermes Agent、QwenPaw与OpenClaw均优先修复流式输出与对话记录完整性Bug：Hermes Agent解决了桌面端消息重复渲染与滚动跳变问题；QwenPaw处理了压缩历史加载失败与跨会话消息归属错误问题；OpenClaw修复了兼容OpenAI的服务商下实时助手文本重复问题。
4. **插件/工具系统健壮性**
   OpenClaw、Hermes Agent、QwenPaw与IronClaw均有正在推进的插件可靠性工作：OpenClaw修复了插件捕获磁盘泄漏与迁移失败问题；Hermes Agent处理了并发加载插件导致的崩溃问题；QwenPaw解决了插件同步调用冻结问题；IronClaw正在推进Turn-0工具选择优化。

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **核心方向** | 企业级多智能体网关、跨渠道编排 | 桌面/CLI客户端体验、看板工作流 | 安全优先的沙箱执行、WASM工具链 | 前端控制台易用性、多服务商/多渠道兼容 | 本地优先隐私保护、运行时安全加固 |
| **目标用户** | 企业运维人员、大规模多智能体部署方 | 高级用户、知识工作者、桌面优先用户 | 安全意识强的团队、浏览器自动化用户 | 自托管团队、重度依赖即时通讯的工作流 | 注重隐私的用户、本地模型部署者 |
| **技术架构** | 单体网关+插件生态、基于SQLite的状态存储 | 跨平台桌面端（类Tauri）+ CLI客户端、Python运行时 | Rust核心、WASM沙箱工具执行 | Web/桌面控制台、Python后端、多渠道适配器 | Rust运行时、Tailscale/ZeroRelay网络、沙箱执行 |
| **核心差异化优势** | 双稳定版发布管线、网关级成本/权限控制 | 看板任务委派、CLI与桌面端会话无缝切换 | Wasmtime安全工具沙箱、支持身份认证 | 移动端Web适配、广泛支持即时通讯渠道（飞书/企业微信） | local_small轻量运行时配置、配置完整性保障 |

---

## 6. 社区动能与成熟度
### 第一梯队：成熟、高迭代速度（稳定化+功能拓展并行）
- **OpenClaw**：成熟度最高的项目，安全补丁、Bug修复与前瞻性功能开发节奏均衡。其稳定版/扩展稳定版双发布管线，以及每周191个PR的合并量，体现了成熟的发布工程能力与充足的维护者资源。项目处于持续增长阶段，在推进可靠性加固的同时，优先发展企业运营相关功能。

### 第二梯队：中等成熟度、活跃开发（功能优先迭代）
- **QwenPaw**：迭代节奏稳定，聚焦前端体验与服务商/渠道兼容性。其测试版发布节奏与每周11个PR的合并量，反映出项目在处理Bug的同时积极推进功能开发，首次贡献者带来的社区贡献持续增长。
- **Hermes Agent**：PR待合并与已合并比例较高，说明项目正处于活跃开发周期，重点聚焦桌面体验与工作流功能，暂无即将发布的稳定化版本。社区对跨设备连续性与看板可靠性的强烈需求是路线图的核心驱动力。
- **IronClaw**：活跃度体量较小但稳定，工作内容涵盖安全补丁发布、依赖维护与早期架构研发。外部贡献者参与度提升表明社区认可度不断扩大，其对沙箱安全的聚焦使其成为小众但高信任度的选择。

### 第三梯队：预稳定阶段、基础加固
- **ZeroClaw**：大量高优先级Bug与架构类增强需求仍在推进中，说明项目仍在为v0.8.6与v0.9.0里程碑夯实基础可靠性。其对本地优先隐私与运行时安全的聚焦吸引了小众用户群体，但合并速度较慢、多个功能处于搁置状态，说明维护者资源少于第一/第二梯队项目。

---

## 7. 趋势信号
1. **企业运营管控能力已成为生产落地的必备条件**
   OpenClaw社区最受关注的需求是网关级的单智能体成本预算，加上对单智能体权限范围控制的需求，表明多智能体部署正从试点走向生产，需要原生治理工具而非外部监控的临时方案。面向企业场景的AI智能体开发者应优先内置成本上限、审计日志与细粒度权限模型。
2. **本地优先与隐私导向的部署需求加速增长**
   ZeroClaw的`local_small`运行时配置需求极高，加上用户对本地模型下提示词冗余、内部指令泄漏的不满，反映出市场对针对本地部署与消费级硬件优化的轻量、隐私保护型智能体模式的需求正在增长。开发者应针对本地部署目标优化提示词体积，并禁用不必要的宽松降级策略。
3. **跨设备、跨渠道连续性是核心体验差异化点**
   Hermes Agent的CLI与桌面端无缝切换功能、QwenPaw的移动端Web适配工作、OpenClaw的多渠道集成修复，均表明用户期待智能体能够在不同设备与聊天平台间无缝访问。仅支持单一接口的智能体在2026年将面临越来越大的体验竞争压力。
4. **内存系统的可靠性与可扩展性是尚未解决的核心痛点**
   OpenClaw的短期内存淘汰Bug与SQLite无限制增长问题，加上QwenPaw的压缩历史加载失败问题，表明当前内存架构无法满足高负载、长期运行的部署需求。智能体开发者应优先实现有界内存存储、历史对话分页，以及可靠的长期记忆升级管线。
5. **用户对沙箱安全的预期已超出现有实现水平**
   IronClaw对WASM沙箱加固的聚焦、ZeroClaw的macOS Seatbelt Bug修复，以及Hermes Agent用户对未沙箱化的`browser_exec`代码的意外反馈，都说明用户默认预期的安全边界强于多数项目当前的实际能力。清晰透明的沙箱范围文档，以及工具执行路径的一致安全管控，是建立用户信任的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报 | 2026-10-05

## 1. 过去7天概览
过去一周Hermes Agent项目保持高强度开发节奏，共更新50个Issue（46个待处理，4个已关闭）和50个Pull Request（44个待处理，6个已合并/关闭），无新版本发布。工作重点集中在桌面端流式传输稳定性修复、插件加载、安装/打包流程以及看板工作流正确性优化，同时针对性新增了跨设备会话流转和仪表盘用户体验改进功能。待处理与已关闭工作项的比例表明，项目正处于活跃开发周期，有多条改进线并行推进，而非发布前的稳定阶段。维护者的优先级明显向兼容性和安装/更新可靠性倾斜，多个来自社区的包管理和平台特定修复PR已被纳入待处理队列，等待最终审核。

## 2. 版本发布
过去7天未发布新版本。

## 3. 项目进展
以下已合并/关闭的PR在过去一周交付了完整功能和修复：
- **桌面端消息重复渲染修复** ([PR #130448](https://github.com/NousResearch/hermes-agent/pull/130448))：解决了Issue #130396中描述的问题——在桌面端对话记录里，包含Markdown表格的助手回复在工具调用后会渲染两次。该修复调整了流式消息气泡的落定逻辑，改用工具调用后的最终回复内容，而非重新绘制已有内容。
- **桌面端流式消息气泡终态修复** ([PR #128873](https://github.com/NousResearch/hermes-agent/pull/128873), 已关闭)：解决了助手回复重复的根本原因——将补全内容落定到最后一个带有文本的助手消息气泡上，避免工具调用后的空白气泡接收重复内容。
- 另有4个已关闭的PR（包含Bug修复和无效/重复条目）完成了本周的合并/关闭队列，其中大部分关闭项针对桌面客户端流式传输稳定性。

## 4. 社区热点话题
讨论最活跃的事项反映了用户对客户端用户体验Bug、插件/安装可靠性痛点的不满：
1. **桌面端对话记录重复 + 流式传输时滚动跳变** ([Issue #128468](https://github.com/NousResearch/hermes-agent/issues/128468), 13条评论, 1 👍)：本周互动量最高的Issue，由一位使用v0.21.5版本的Linux桌面用户上报。核心诉求是可靠、无卡顿的流式用户体验——重复消息和滚动跳变破坏了聊天的核心可用性，也削弱了用户对对话记录准确性的信任。
2. **插件并发加载崩溃："dictionary changed size during iteration"** ([Issue #125746](https://github.com/NousResearch/hermes-agent/issues/125746), 6条评论)：影响运行时间长、插件数量多的安装环境，表现为间歇性故障，会静默丢失已注册的工具。用户需要在重度定制场景下拥有稳健的并发插件发现机制，避免功能静默丢失。
3. **看板调度器Worker出现ModuleNotFoundError崩溃** ([Issue #125649](https://github.com/NousResearch/hermes-agent/issues/125649), 6条评论)：在受管Python运行环境下，看板功能完全不可用。依赖看板进行任务委派的用户需要Worker在不同运行环境中保持一致的启动行为。

## 5. Bug与稳定性
过去一周上报/更新的Bug，按严重程度排序（P1 > P2 > P3）：
### P1（严重）
- **上下文压缩流转内容被重新发布为助手回复** ([Issue #132934](https://github.com/NousResearch/hermes-agent/issues/132934))：在长时间CLI会话中，上下文压缩内容会被当作实时助手回复展示，开头带有改写内容，绕过了摘要分类。目前暂无关联修复PR；该问题会破坏会话连贯性，可能误导用户对智能体实时输出的判断。

### P2（高影响）
- **OpenAI-Codex会话中途模型切换静默失败** ([Issue #132935](https://github.com/NousResearch/hermes-agent/issues/132935))：执行`/model --provider openai-codex`命令显示成功，但实际未绑定实时API客户端，导致下一条消息返回403错误。暂无关联修复PR。
- **SSH远程配置回归** ([Issue #88994](https://github.com/NousResearch/hermes-agent/issues/88994))：当本地配置名与远程`remoteProfile`不一致时，SSH连接会断开，这是commit 30299efa3引入的回归问题。暂无关联修复PR。
- **Bot模式 / Bot间投递缺少`ruamel`模块** ([Issues #125091](https://github.com/NousResearch/hermes-agent/issues/125091), [#125654](https://github.com/NousResearch/hermes-agent/issues/125654))：在负载解释器上启动的投递运行器缺少PM依赖目录，导致持续失败。暂无关联修复PR。
- **自定义提供商身份不同步** ([Issue #102725](https://github.com/NousResearch/hermes-agent/issues/102725))：两个共享`base_url`但`api_mode`不同的自定义提供商，始终只会解析到第一个条目，造成展示/运行时不匹配。暂无关联修复PR。
- **仪表盘WebSocket无限重连循环** ([Issue #132999](https://github.com/NousResearch/hermes-agent/issues/132999))：短暂的连接断开会触发250ms周期的重连循环，导致CPU占用率达到100%，这是PR #95951附近引入的回归问题。暂无关联修复PR。
- **`hermes prompt-size`执行未文档化的网络调用** ([Issue #132998](https://github.com/NousResearch/hermes-agent/issues/132998))：尽管文档说明该命令为离线运行，但实际会获取OpenRouter的模型列表，违背了用户对纯本地运行的预期。暂无关联修复PR。

### P3（中/低影响）
- 磁盘清理插件对`tracked.json`的竞争条件 ([Issue #132943](https://github.com/NousResearch/hermes-agent/issues/132943))、Home Assistant插件过度迁移 ([Issue #132814](https://github.com/NousResearch/hermes-agent/issues/132814)) 以及看板拆解父任务排序Bug ([Issue #133008](https://github.com/NousResearch/hermes-agent/issues/133008)) 属于较低严重程度的稳定性问题，目前暂无关联修复PR。

## 6. 功能需求与路线信号
过去一周用户提出的功能需求，以及近期纳入开发的可能性评估：
1. **CLI到桌面端的会话流转 + 深层链接** ([PR #125903](https://github.com/NousResearch/hermes-agent/pull/125903))：提供`/handoff desktop`命令和`hermes://session/<id>`深层链接，支持用户在桌面应用中继续CLI中的对话。**可能性高**：该PR基于早期社区工作整理而来，符合跨设备用户体验趋势，目前正处于活跃审核阶段。
2. **桌面端会话状态分组全面改版** ([PR #133020](https://github.com/NousResearch/hermes-agent/pull/133020))：将侧边栏状态从"进行中/已完成"拆分为"进行中/受阻/待处理/未激活"，提升任务可见性。**可能性高**：属于低风险用户体验改进，用户价值明确，已进入CI审核状态。
3. **看板Worker创建/链接权限粒度控制** ([Issue #100944](https://github.com/NousResearch/hermes-agent/issues/100944))：允许限制Worker的卡片创建/链接权限，同时保留生命周期管理工具。**可能性中等**：标记为`needs-decision`，说明路线图优先级尚未确定。
4. **`hermes config set`支持命名列表条目** ([Issue #132963](https://github.com/NousResearch/hermes-agent/issues/132963))：支持通过名称寻址列表类型的配置键（例如`custom_providers`）。**可能性中等**：属于小幅易用性改进，使用场景明确，如果配置工具相关工作排期，大概率会被纳入。
5. **Browser exec Python运行框架Docker沙箱化** ([Issue #133010](https://github.com/NousResearch/hermes-agent/issues/133010))：将`browser_exec`的Python代码放在配置的Docker沙箱中运行，以增强安全性。**近期可能性较低**：已被记录为已知限制，需要更广泛的沙箱架构改造工作。

## 7. 用户反馈总结
本周Issue报告中反映的核心痛点和使用场景：
- **核心聊天用户体验退化**：多名用户报告桌面客户端存在消息重复渲染和滚动跳变问题，其中一位用户提供了WebSocket帧追踪数据，排除了后端原因。这是导致用户不满的首要因素，因为它破坏了用户对聊天界面的基本信任。
- **安装/更新阻碍**：Termux/ARM64用户、Windows Python 3.14用户以及插件数量多的用户均报告了持续的更新失败问题（Python包布局不匹配、`uv lock`崩溃、插件并发加载错误）。这些入门和维护故障为非标准平台用户设置了很高的使用门槛。
- **看板工作流中断**：多名企业/自托管用户报告，在受管运行环境下看板Worker完全失效，阻断了任务委派使用场景——而这正是高级用户的核心价值主张之一。
- **安全预期未被满足**：启用了Docker沙箱的用户惊讶地发现`browser_exec`实际运行在主机而非容器中，说明文档记录的限制与用户对安全边界的认知存在差距。
- **跨设备连续性需求**：会话流转功能PR与用户反复提出的在CLI和桌面界面间转移对话的需求相契合，反映了用户在终端开始工作、在图形界面完成工作的使用场景。

## 8. 待办关注项
长期存在、高影响且等待维护者关注的事项：
1. **后台自我改进范围违规** ([Issue #72082](https://github.com/NousResearch/hermes-agent/issues/72082), 创建于2026-07-26, 2条评论)：回合后后台审查会在只读范围的回合中写入技能库，且不会披露创建的文件。这违反了范围保证，已开放超过10周，进展有限。
2. **NixOS隔离实例支持** ([PR #75946](https://github.com/NousResearch/hermes-agent/pull/75946), 创建于2026-08-01)：一个功能完整的NixOS模块，用于部署带有安全加固和生命周期管理的隔离Hermes智能体实例，已开放超过9周，尽管在安全性和部署方面价值广泛，但仍未合并。
3. **网关会话命令延迟执行** ([PR #116295](https://github.com/NousResearch/hermes-agent/pull/116295), 创建于2026-09-19)：一项稳定性修复，将安全的会话命令延迟到当前活跃回合完成后再执行，以防止状态损坏，已审核超过2周未合并，尽管它解决了核心会话状态风险。
4. **Matrix线程回复保留** ([PR #125648](https://github.com/NousResearch/hermes-agent/pull/125648), 创建于2026-09-27)：修复Matrix平台的线程回复和回退链处理问题，已开放超过1周，阻碍了社区用户可靠使用Matrix适配器功能。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报 — 截至2026-10-05
*代码仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

---

## 1. 近7天总览
过去7天，IronClaw 开发节奏保持稳定，共有7个活跃 issue（无关闭）、13个更新的 PR（3个已合并/关闭），同时发布了一个新的稳定版本。项目在 v1.4.1 中推出了安全与功能补丁，当前 ongoing 工作集中在依赖维护、用户体验优化，以及工具选择和分布式 worker 的早期架构增强上。依赖更新在未合并 PR 中占比最高，10个未合并 PR 中有5个是自动依赖升级，体现了持续的基础设施维护工作。新贡献者的社区提交在功能和修复类 PR 中占比可观，反映出外部参与度正在提升。整体项目健康度稳定，发布工程、核心功能、开发者体验等各条线均有活跃进展。

---

## 2. 版本发布
- **[ironclaw-v1.4.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1)**（2026-09-29 发布）：1.4.1-rc.2 候选版本的正式稳定版。
  - **核心变更**：
    1.  修复了在运营方通过 Web UI 提供 Google OAuth 客户端的部署场景下，Google 扩展（Gmail、Google Calendar）无法激活的问题。
    2.  纳入了 Wasmtime 安全更新，用于沙箱化 WASM 工具执行。
  - **破坏性变更**：无上报；本次为补丁级稳定版本。
  - **迁移说明**：无需手动迁移。1.4.0 或更早 1.4.x 候选版本的用户可通过官方安装器或包管理器正常升级。

---

## 3. 项目进展
近7天共合并/关闭3个 PR，推进了发布工程和 Web UI 稳定性：
1.  **[PR #8120](https://github.com/nearai/ironclaw/pull/8120)** — *chore(release): promote 1.4.1-rc.2 to 1.4.1*（已关闭/已合并）：完成 v1.4.1 正式版发布工作，升级版本号并更新更新日志，同步了 RC2 中的 Google OAuth 修复和 Wasmtime 安全补丁。
2.  **[PR #5132](https://github.com/nearai/ironclaw/pull/5132)** — *fix(webui-v2): redirect invalid chat thread routes*（已关闭/已合并）：修复了聊天线程深度链接失效的问题，将无效/保留的 `/chat/:threadId` 路由重定向回聊天主页面，并为聊天页面路由流程补充了回归测试。
3.  **[PR #8078](https://github.com/nearai/ironclaw/pull/8078)** — *chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates*（已关闭）：已被更新的 tokio 生态依赖升级 PR #8123 取代，属于常规依赖维护节奏。

---

## 4. 社区热门话题
按评论数和讨论活跃度排序：
1.  **[Issue #2358](https://github.com/nearai/ironclaw/issues/2358)** — *feat(browser): add BrowserProfileStore trait with encrypted tarball persistence*（1条评论，2026-10-01 更新）：本周评论数最多的未关闭 issue，聚焦于在智能体运行之间持久化浏览器会话（Cookie、localStorage），避免重复的用户身份验证。核心需求：智能体浏览器工作流需要持久、安全的登录态会话存储，这是浏览器自动化场景中关键的易用性缺口。
2.  **[Issue #7889](https://github.com/nearai/ironclaw/issues/7889)** — *RFC: extend the scheduler/orchestrator with opt-in remote edge workers*（1条评论，2026-09-29 更新）：一项关于将 IronClaw 的 worker 池扩展到单主机之外、利用闲置边缘硬件的提案。核心需求：有多主机基础设施的运营方希望分布式部署智能体工作负载，以提升可扩展性和资源利用率，同时不破坏项目“安全优先”的审计模型。
3.  **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — *feat(identyclaw): host-mediated Passport for practitioners*（2026-10-01 更新）：一项社区贡献的功能，集成 IdentyClaw Passport 实现无需进程的智能体身份验证。核心需求：用户希望为智能体工作流提供内置、安全的身份证明，无需 shell 访问或安装外部扩展。

---

## 5. Bug 与稳定性
按预估严重程度排序：
1.  **[Issue #8122](https://github.com/nearai/ironclaw/issues/8122)** — *`ironclaw serve` fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile)*（严重程度：高）：v1.4.1 在 macOS 苹果芯片设备上的关键启动故障，`local-dev` 配置无法读取 web-app 扩展的凭据，尽管 `ironclaw doctor` 所有检查均通过。截至本期周报发布时，尚无关联的修复 PR。
2.  基准测试稳定性问题（严重程度：中）：两个每日失败分类 issue（2026-10-01 的 [#8121](https://github.com/nearai/ironclaw/issues/8121)、2026-09-28 的 [#8116](https://github.com/nearai/ironclaw/issues/8116)）记录了测试套件持续存在的不通过率。大部分失败归因于基准测试端的种子缺陷和模型质量问题，而非 IronClaw 核心 bug，但也表明测试流水线可靠性仍有提升空间。
3.  轻微 UI/UX bug（严重程度：低）：
    - Web UI 命令面板焦点丢失（[PR #8117](https://github.com/nearai/ironclaw/pull/8117)，修复中）：关闭 Cmd/Ctrl+K 面板后，焦点停留在页面 body 而非原始输入元素。
    - CLI 配置配置可见性问题（[PR #8118](https://github.com/nearai/ironclaw/pull/8118)，修复中）：当 `IRONCLAW_REBORN_PROFILE` 环境变量未设置时，CLI 命令不会上报当前生效的启动配置。

---

## 6. 功能需求与路线图信号
以下用户需求功能已有活跃开发或明确的路线图对齐，大概率会进入后续版本：
1.  **基于嵌入向量的 Turn-0 工具选择（[Issue #8113](https://github.com/nearai/ironclaw/issues/8113)、[PR #8119](https://github.com/nearai/ironclaw/pull/8119)）**：一项可选功能，在首次模型调用前就根据用户消息对已授权工具进行排序，省去一轮 `tool_search` 往返。目前已有开放的实现 PR，极有可能加入下一个次版本更新。
2.  **Tsubasa 模型提供商注册项（[Issue #8115](https://github.com/nearai/ironclaw/issues/8115)）**：请求新增命名的 Tsubasa 提供商，支持 32K 上下文窗口路径，基于 IronClaw 现有的 OpenAI 兼容后端实现。这符合项目扩展支持模型提供商的常规路线，大概率会纳入后续版本规划。
3.  **加密浏览器配置持久化（[Issue #2358](https://github.com/nearai/ironclaw/issues/2358)）**：一项长期推进的浏览器会话持久化增强功能。虽仍处于早期设计阶段，但它解决了浏览器自动化用户的核心痛点，是工作区与密钥管理方向的路线图优先级事项。

---

## 7. 用户反馈汇总
整理自近期 issue 和社区 PR：
- **痛点问题**：
  1.  macOS 本地开发环境凭据后端启动失败（Issue #8122），给试用默认 `local-dev` 配置的新用户带来直接阻碍。
  2.  基于浏览器的智能体工作流需要重复验证身份（Issue #2358），是生产环境浏览器使用场景的主要易用性障碍。
  3.  缺乏官方第一方 Tsubasa 模型提供商支持（Issue #8115），增加了使用 Tsubasa 端点用户的配置成本。
- **积极信号**：
  - 多位新贡献者提交了修复和功能 PR（例如 PR #8117、#8118、#7499），表明社区参与度和新人贡献入门流程成效良好。
  - v1.4.1 版本解决了部署运营方长期存在的 Google OAuth 激活痛点。
- **反映的使用场景**：
  - 由运营方管理 OAuth 凭据的自托管部署。
  - 拥有闲置多主机基础设施的运营方的分布式边缘工作负载。
  - 面向从业者场景的带身份验证的智能体工作流。

---

## 8. 待办事项关注
以下长期存在的事项潜在影响较大，且近期无关闭进展，值得维护者关注：
1.  **[PR #7834](https://github.com/nearai/ironclaw/pull/7834)** — *chore(deps): bump the wasm group across 1 directory with 4 updates*（2026-08-23 起开放）：Wasmtime/WASM 工具链依赖升级，与 WASM 沙箱执行的安全加固相关。鉴于项目近期在 v1.4.1 中重点更新了 Wasmtime 安全补丁，应优先审核合并这个待处理的升级 PR。
2.  **[Issue #2358](https://github.com/nearai/ironclaw/issues/2358)** — *BrowserProfileStore trait with encrypted tarball persistence*（2026-04-12 起开放）：一项高价值的浏览器会话持久化增强功能，上线6个月仅1条评论。该 issue 解决了用户核心痛点，需要维护者进行优先级梳理，将其纳入活跃开发流水线。
3.  **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — *feat(identyclaw): host-mediated Passport for practitioners*（2026-08-11 起开放）：来自新贡献者的大型新功能 PR，近期无审核进展。及时对社区贡献的重大功能给出反馈，有助于留存贡献者并拓展项目的身份功能集。
4.  **[PR #6698](https://github.com/nearai/ironclaw/pull/6698)** — *docs: update OpenWiki wiki*（2026-07-27 起开放）：一项自动文档更新 PR，已搁置超过2个月。合并该 PR 可让说明文档与当前代码库保持同步，便于新用户和贡献者使用。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报 (2026-10-05)

---

## 1. 近7天概览
过去一周，QwenPaw 保持高强度开发节奏与社区活跃度：共更新 50 个 Issue（46 个处于开放/活跃状态，4 个已关闭）、50 个 Pull Request（39 个开放，11 个已合并/关闭），并发布了一个新的 Beta 版本。
工作重点集中在前端控制台易用性、服务商兼容性及运行时稳定性三个方向，内容涵盖 bug 修复、功能迭代开发以及社区反馈的回归问题处理。项目贡献者流转健康，多位首次贡献者提交了针对性修复。整体项目状态稳定，高严重度稳定性 bug 正被积极分拣处理，用户体验优化工作也在稳步推进。

---

## 2. 版本发布
### v2.2.2-beta.4
本次为新的 Beta 迭代版本，已确认的变更如下：
- **功能**：为 `ReMeLightMemoryCard` 新增重排序模型（reranker）UI 配置面板（PR [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)，贡献者：@lecheng2018）
- **杂项**：版本号升级至 2.2.2b4（PR [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892)，贡献者：@cuiyuebing）
- **性能**：控制台聊天依赖拆分包（发布说明仅部分公开）

本次 Beta 版本未明确列出破坏性变更或迁移指引。

---

## 3. 项目进展（已合并/关闭 PR）
近7天共合并或关闭 11 个 PR，推进了以下领域的工作：
- **控制台 UX 修复**：
  - [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347)：修复富文本输入框高度超出上限时，光标不可见的问题
  - [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)：通过 Tauri window-state 插件实现桌面端窗口几何状态持久化（启动时恢复窗口位置/尺寸）
- **聊天载荷校验**：
  - [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299)：对运行中的任务拒绝接收冲突的聊天载荷，避免 API 确认未处理的用户消息
- **Matrix 频道兼容性**：
  - [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535)：针对 Element 专属 Matrix 兼容性（恢复密钥验证、MSC2965 OIDC 登录）的功能需求已完成并关闭
- **LLM 流式超时配置**：
  - [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604)：桌面端 LLM 流空闲超时硬编码为 30 秒的 bug 已关闭，现在可通过 WebUI/envs.json 配置
- **飞书会话隔离**：
  - [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)：修复多 UI 会话场景下，控制台停止请求会取消活跃飞书会话的 bug，已关闭

---

## 4. 社区热门话题
讨论热度最高的议题（按评论数排序）集中反映了用户在聊天历史管理和 WebUI 交互上的核心痛点：
1. **Issue #7884**（8 条评论，开放中）— [前端刷新后压缩的聊天历史无法完整加载](https://github.com/agentscope-ai/QwenPaw/issues/7884)
   - 底层需求：用户期望能持久、完整地访问长聊天历史；当前的上下文压缩机制导致体验割裂，刷新后无法查看之前的对话内容。
2. **Issue #7997**（8 条评论，开放中）— [支持 WebUI 内消息撤回/编辑及工作区回滚](https://github.com/agentscope-ai/QwenPaw/issues/7997)
   - 底层需求：用户希望能掌控对话上下文，包括修正输入错误、回退智能体生成的文件变更，以维持整洁的工作状态。
3. **Issue #7722**（6 条评论，开放中）— [内存耗尽问题由三重因素叠加导致：无界流缓冲区、保活实例堆叠、厄运循环门规避](https://github.com/agentscope-ai/QwenPaw/issues/7722)
   - 底层需求：生产环境部署要求可靠的内存稳定性；报告的 1MB/s 内存增长及最终 OOM 问题对自托管和云端运行用户至关重要。
4. **Issue #6281**（6 条评论，开放中）— [Web 控制台移动端适配](https://github.com/agentscope-ai/QwenPaw/issues/6281)
   - 底层需求：用户希望能通过移动设备管理和与 QwenPaw 智能体交互，这是一项长期存在的可访问性需求。
5. **PR #7542**（开放中，规模/XXXL）— [聊天消息向上滚动分页加载](https://github.com/agentscope-ai/QwenPaw/pull/7542)
   - 与 Issue #7884 直接相关；这个大型功能 PR 旨在通过对存储在 `history.db` 中的历史消息进行分页，解决历史记录加载不全的问题。

---

## 5. Bug 与稳定性
近7天报告/更新的 bug，按预估严重度排序：
| 严重度 | Issue | 描述 | 修复 PR 状态 |
|----------|-------|-------------|---------------|
| 严重 | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存耗尽由三重因素叠加导致（无界流缓冲区、保活实例堆叠、厄运循环门规避），内存以约 1MB/s 速度增长最终引发 OOM | 暂无关联修复 PR |
| 严重 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 插件同步调用会导致整个实例冻结（无事件循环隔离/监控），影响所有智能体和频道 | 暂无关联修复 PR |
| 高 | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` 的文件/图片内容块 + 空助手消息会污染上下文，导致后续所有模型请求持续返回 400 错误 | 测试 PR [#8097](https://github.com/agentscope-ai/QwenPaw/pull/8097) 中提及了部分修复 |
| 高 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | 控制台启动闪屏无重试/错误提示；更新后 WebView2 缓存过期会导致永久无法启动 | 修复 PR [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102)（开放中）新增了带重载功能的启动看门狗 |
| 高 | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek 服务商：使用 `send_file_to_user` 发送 PDF 会永久破坏会话（后续请求返回 400 `file must have file_id/file_data`） | 运行时媒体能力修复 PR [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) 已解决该问题 |
| 高 | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 压缩后的历史记录刷新后无法完整加载 | 大型功能 PR [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542)（开放中）实现了向上滚动分页功能 |
| 中 | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | OpenAI 服务商：gpt-6 系列模型连接测试失败返回 400（最大 token 参数白名单仅匹配 gpt-5*/o* 系列） | 修复 PR [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)（开放中）已识别更新的 GPT token 限制参数 |
| 中 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | v2.2.2-beta4 对话页面通过局域网访问时无法进入 | 修复 PR [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089)（开放中）为非安全上下文新增了 UUID 生成回退机制 |
| 中 | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | 在历史会话间切换时会错误地创建新会话 | 修复 PR [#8091](https://github.com/agentscope-ai/QwenPaw/pull/8091)（开放中）通过侧边栏点击追踪最后活跃的聊天 ID |
| 中 | [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | `chat_with_agent` 跨会话消息被注册为独立聊天，导致同一会话对话被拆分到多个 UI 页面 | 修复 PR [#8095](https://github.com/agentscope-ai/QwenPaw/pull/8095)（开放中）将智能体间消息归属到当前用户 |

---

## 6. 功能需求与路线图信号
用户呼声最高、大概率会纳入后续版本的功能：
1. **消息编辑/撤回 + 工作区回滚** ([#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997))：社区参与度高，与更广泛的 UX 优化方向一致；预计纳入 v2.3 版本规划。
2. **移动端 Web 控制台适配** ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281))：相关 PR 开发已在进行中（例如 [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) 将设置页迁移到了移动端抽屉）；预计在未来 1-2 个次版本中逐步推出。
3. **用户消息 Markdown 渲染** ([#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975))：复杂度低的 UX 优化，用户需求持续存在；大概率纳入下一个 Beta 版本。
4. **`ask_user_question` 人机回环（Human-in-the-Loop）工具** ([#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274))：与智能体安全性和可控性的优先级方向一致；大概率加入官方工具集路线图。
5. **IM 频道 @ALL 消息过滤** ([#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945))：开发成本低、对飞书/钉钉/企业微信用户体验提升大；预计在后续补丁版本中实现。

---

## 7. 用户反馈总结
**核心痛点**：
- 聊天历史的持久性与可访问性是头号投诉点：用户反映刷新后丢失上下文、无法滚动查看更早的消息 ([#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884))。
- 生产部署的运行时稳定性令人担忧：内存泄漏 ([#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)) 和插件引发的冻结问题 ([#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)) 是自托管用户的主要痛点。
- v2.2.2-beta4 的前端回归问题：局域网访问失败 ([#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)) 和启动卡住 ([#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094)) 对早期尝鲜用户的体验造成负面影响。
- 模型服务商兼容性缺口：gpt-6 系列 ([#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074))、DeepSeek ([#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026), [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064)) 和 OpenCode Go ([#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)) 用户均报告了集成失败问题。

**积极信号**：
- 用户认可项目支持的频道和模型广度，且正主动提交详细的 bug 报告，附带复现步骤和根因分析（例如 [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)、[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)）。
- 第三方智能体生态（例如 Qoder 集成）使用活跃度高，用户提交了针对性的改进需求 ([#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077))。

---

## 8. 待办事项关注
需要维护者关注的长期高优先级事项：
1. **Issue #6281** ([Web 控制台移动端适配](https://github.com/agentscope-ai/QwenPaw/issues/6281))：自 2026-07-20 起开放，6 条评论，用户需求持续存在；已有初步 PR 工作，但完整适配尚未完成。
2. **Issue #2975** ([用户消息 Markdown 渲染](https://github.com/agentscope-ai/QwenPaw/issues/2975))：自 2026-04-06 起开放，复杂度低，用户反复提出需求。
3. **PR #7542** ([聊天消息向上滚动分页](https://github.com/agentscope-ai/QwenPaw/pull/7542))：自 2026-09-04 起开放的 XXXL 级大型功能 PR，直接解决用户头号痛点；需维护者评审以推进合并。
4. **PR #7774** ([Hub 启动配置器白名单推导](https://github.com/agentscope-ai/QwenPaw/pull/7774))：自 2026-09-15 起处于评审中，修复 Hub 与其他入口点之间的不一致问题。
5. **Issue #6274** ([`ask_user_question` 人机回环工具](https://github.com/agentscope-ai/QwenPaw/issues/6274))：自 2026-07-20 起开放，获社区点赞支持；尚未得到官方路线图确认。

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报（2026-10-05 周）

## 1. 过去7天概览
过去7天ZeroClaw项目活跃度较高，共更新50个Issue（47个开放/进行中，3个已关闭）、50个Pull Request（45个开放，5个已合并/关闭），无新版本发布。
活动集中在核心运行时稳定性、安全加固、配置可靠性与跨平台易用性领域，当前有大量高严重级别的Bug修复与架构层面的增强工作正在推进。项目保持活跃开发节奏，重点夯实v0.8.6与v0.9.0交付版本的基础可靠性，社区贡献的功能需求仍在队列中等待审核。

## 2. 版本发布
过去7天未发布任何新版本。

## 3. 项目进展
过去一周，以下已关闭/已合并的PR与已完成的Issue推进了项目进度：
- **已关闭Issue #7108：CI Rust构建缓存与关键路径优化** [zeroclaw-labs/zeroclaw#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)
  本次CI优化旨在缩短小改动下PR构建15-20分钟的耗时，目前已全部完成，提升了Rust构建缓存效率与任务调度性能。
- **已关闭Issue #10662：Anthropic OAuth缓存标记大小错误修复** [zeroclaw-labs/zeroclaw#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)
  修复了OAuth系统前缀缓存标记低于Anthropic最低缓存阈值、浪费缓存断点槽位的问题。
- **已关闭Issue #11335：无终端环境下CLI审批提示报错异常** [zeroclaw-labs/zeroclaw#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335)
  修复了CLI审批提示在无控制终端场景（如定时任务、CI流水线）下，运行时默认拒绝会错误返回`Denied by user`的问题。
- **已合并PR #11518：保留CLI输入失败的溯源信息** [zeroclaw-labs/zeroclaw#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)
  实现了Issue #11335的修复方案，确保CLI审批提示遇到EOF或读取错误时，会将“输入不可用”的结果同步至审计日志与模型上下文。
- **已合并PR #11521：运行时组合异常审批文档** [zeroclaw-labs/zeroclaw#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521)
  正式确认核心团队对受限运行时组合异常的审批结果，更新项目文档以反映最终敲定的政策。

## 4. 社区热门话题
讨论量最高的内容围绕运行时测试可靠性、本地优先用户体验与CI性能展开：
1. **Issue #9965：并行运行时门控下加固运行时可执行测试固件**（14条评论）[zeroclaw-labs/zeroclaw#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
  本周讨论量最高的问题，核心是并行运行时测试套件中，因测试固件在多线程初始化后写入可执行垫片导致测试偶发失败。根本需求：提升测试套件可靠性，让运行时改动的CI验证更快、结果更可信。
2. **Issue #5287：精简local_small运行时配置与提示预算约定**（9条评论，2个👍）[zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
  本地模型用户呼声最高的增强功能，目标是减少提示冗余、禁用宽松兜底解析、防止内部工具指令泄露到用户输出中。根本需求：为算力与上下文窗口受限的本地优先部署场景，提供轻量、注重隐私、高性能的运行模式。
3. **Issue #7108：CI Rust构建缓存优化**（9条评论）[zeroclaw-labs/zeroclaw#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)
  这项刚关闭的CI优化引发了持续讨论，大家关注如何降低长PR构建时间给开发者带来的阻碍。根本需求：提升贡献者的开发迭代速度。

## 5. Bug与稳定性
过去7天上报或仍在处理的Bug，按严重程度排序如下：
1. **P0/S0：Issue #10495 - Config::save()会将已有内容的config.toml覆盖为几乎空白的文件** [zeroclaw-labs/zeroclaw#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)
  属于数据丢失级严重Bug：工作区测试运行时，可能将109KB、包含25个agent的配置文件替换为仅702字节的最小配置。状态：修复中。修复PR：#11527（禁止未经校验的全量保存覆盖已加载的配置文件）[zeroclaw-labs/zeroclaw#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)
2. **P1/S1：Issue #11525 - Android/Termux上快速启动流程失败** [zeroclaw-labs/zeroclaw#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)
  属于阻塞工作流的Bug：因配置持久化失败，无法在Android 16/Termux上创建agent。状态：已开放，暂未分配修复PR。
3. **P1/S1：Issue #10536 - macOS Seatbelt对Shell命令忽略已配置的allowed_roots** [zeroclaw-labs/zeroclaw#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)
  属于沙箱安全Bug：用户配置的额外文件系统根目录未被Shell命令生效，导致出现`Operation not permitted`错误。状态：修复中，暂未关联修复PR。
4. **P1/S1：Issue #10673 - 守护进程RPC路径下失败的ACP回合未持久化（ZeroCode代码面板）** [zeroclaw-labs/zeroclaw#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673)
  属于阻塞工作流的Bug：ZeroCode代码面板中失败/取消的回合未被保存，与此前已修复的#9378用户影响一致，但出现在不同代码路径。状态：已开放。
5. **P1/S2：Issue #11420 - SQLite会话后端每个回合都会重写所有消息的created_at时间戳** [zeroclaw-labs/zeroclaw#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)
  属于功能降级问题：全量对话记录重写时会将所有行的时间戳更新为当前时间，导致单条消息的时间戳数据丢失。状态：已开放，暂未关联修复PR。
6. **P2/S2：Issue #11517 - Web聊天中途刷新页面会导致用户提示从屏幕与localStorage中丢失** [zeroclaw-labs/zeroclaw#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517)
  属于前端Bug：回合进行中用回合前快照做水合时，会覆盖本地状态。状态：已开放。
7. **P3/S1：Issue #11418 - ZeroCode一键“复制”功能失效** [zeroclaw-labs/zeroclaw#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)
  ZeroCode TUI的剪贴板功能失效。修复PR：#11529（新增Linux本地剪贴板写入逻辑与明确的复制结果提示）[zeroclaw-labs/zeroclaw#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)

## 6. 功能需求与路线动态
当前活跃的功能需求与路线图对齐工作，大概率将在后续版本上线：
- **v0.8.6 大概率纳入功能**：
  - 频道线程中恢复Slack“正在思考”状态（Issue #11416，进行中）[zeroclaw-labs/zeroclaw#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)
  - MCP嵌套对象参数序列化修复（Issue #11371，已确认纳入v0.8.6）[zeroclaw-labs/zeroclaw#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371)
  - Tailscale隧道WSS/注册端点发布（PR #11530、#11531）[zeroclaw-labs/zeroclaw#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) [zeroclaw-labs/zeroclaw#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)
- **v0.9.0 路线图动态**：
  - 网关拆分与运行时交付里程碑在Issue #7432中跟踪 [zeroclaw-labs/zeroclaw#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)，包括标准配置生成发布（Issue #10892，进行中）[zeroclaw-labs/zeroclaw#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)
  - ZeroRelay 认证主体透传（Issue #10766），支持多用户托管中继部署 [zeroclaw-labs/zeroclaw#10766](https://github.com/zeroclaw-labs/zeroclaw/issues/10766)
- **中期功能候选**：
  - 基于任务量的本地/云端模型路由（Issue #7951，进行中，暂列待办池）[zeroclaw-labs/zeroclaw#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)
  - Web端可视化cron调度编辑器（PR #10698，暂列待办池）[zeroclaw-labs/zeroclaw#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)
  - Sendblue iMessage/SMS 频道支持（PR #10768，暂列待办池）[zeroclaw-labs/zeroclaw#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)

## 7. 用户反馈汇总
近期Issue上报中反映的痛点与使用场景：
1. **本地模型易用性痛点**：使用本地模型运行ZeroClaw的用户反馈存在提示冗余、内部指令泄露、缺少专门轻量配置的问题，推动了`local_small`运行模式的需求（Issue #5287）[zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)。
2. **跨平台部署缺口**：Android/Termux用户无法完成快速启动上流程（Issue #11525）[zeroclaw-labs/zeroclaw#11525]，macOS用户则面临用户配置的允许文件系统根目录沙箱不生效的问题（Issue #10536）[zeroclaw-labs/zeroclaw#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)，凸显了非标准平台与桌面端平台支持的不足。
3. **数据可信度担忧**：配置文件被覆盖（Issue #10495）[zeroclaw-labs/zeroclaw#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)、费用台账记录损坏（Issue #11515）[zeroclaw-labs/zeroclaw#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515)、消息时间戳丢失（Issue #11420）[zeroclaw-labs/zeroclaw#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) 等问题上报，表明用户对数据完整性与持久化可靠性存在顾虑。
4. **用户体验摩擦**：ZeroCode剪贴板功能失效（Issue #11418）[zeroclaw-labs/zeroclaw#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)、Slack缺少“正在思考”提示（Issue #11416）[zeroclaw-labs/zeroclaw#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)、Web聊天刷新丢失用户输入（Issue #11517）[zeroclaw-labs/zeroclaw#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) 等问题，反映核心界面功能的日常使用体验有所下降。

## 8. 待办关注项
长期存在、影响较大，需要维护者关注的事项：
1. **Issue #5287：local_small运行时配置**（创建于2026-04-04，9条评论，2个👍）[zeroclaw-labs/zeroclaw#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
  本地优先部署场景下用户呼声最高的增强功能，风险与优先级均较高，目前仍在开发中，已开放6个月。
2. **PR #10698：可视化cron调度编辑器**（创建于2026-09-07，待清理/待办池状态）[zeroclaw-labs/zeroclaw#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)
  面向用户的体验优化功能，目前处于“需作者跟进”/待办池状态，存在贡献者流失风险。
3. **PR #10768：Sendblue iMessage/SMS 频道**（创建于2026-09-10，待清理/待办池状态）[zeroclaw-labs/zeroclaw#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)
  大型跨平台频道贡献，可扩展非Apple设备的iMessage支持，目前因等待维护者审核处于停滞状态。
4. **Issue #7951：基于任务量的本地/云端模型路由**（创建于2026-06-19，待办池状态）[zeroclaw-labs/zeroclaw#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)
  本地/云端混合部署场景下的高价值路由功能，开发中但优先级下调至待办池。
5. **Issue #9190：服务商API密钥轮换失效问题**（创建于2026-07-20，无过期标记）[zeroclaw-labs/zeroclaw#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190)
  高严重级别的服务商Bug：密钥轮换时能选中备用密钥但无法生效，近期无进展更新。

---

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*