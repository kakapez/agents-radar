# OpenClaw 生态周报 2026-10-12

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-12 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目每周摘要 | 2026-10-12
*数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 报告周期：2026-10-05 至 2026-10-12*

---

## 1. 过去7天概览
本周 OpenClaw 保持高速开发节奏，共更新 500 个 issue（344 个开放/活跃，156 个已关闭）和 500 个 Pull Request（328 个开放，172 个已合并/关闭），体现出活跃的 Bug 分类、功能开发与版本发布准备工作。项目本周发布 5 个新版本，包括稳定版 v2026.10.1——该版本由 402 位贡献者提交的 3,055 次 commit 构建而成，此外还有聚焦升级系统加固的 beta 构建版本。核心稳定性与运行时性能仍是社区的首要优先级，多个 P0 级内存泄漏、崩溃和升级阻塞类 Bug 推动了相关讨论与修复工作。升级器可靠性改进是贯穿全周的主题，版本亮点与多个已关闭的 issue/PR 都聚焦于解决导致安装实例卡死的边缘场景。项目整体健康度良好，维护者积极跟进高严重度问题，前端、沙箱化与插件生态功能均取得稳步进展。

---

## 2. 版本发布
### 本周共发布5个新版本：
1. **[v2026.10.1 (稳定版)](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1)**
   - 规模：3,055 次 commit，2,425 个 Pull Request，402 位贡献者
   - 完整发布说明与变更日志可通过[官方文档门户](https://docs.openclaw.ai/release)查看
   - 作为10月的核心稳定版本，涵盖广泛的功能新增与Bug修复

2. **[v2026.10.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1)**
   - 核心亮点：**更安全的升级系统**——在跨设备安装、不同文件系统、Windows 提权场景以及激活中断的情况下均能可靠完成升级
   - 新增从过期租约和变更校验状态中恢复的能力，此类问题此前会阻塞后续升级或导致安装实例卡死
   - 关联 PR：#164636、#164769、#165257、#165863

3. **[v2026.10.1-beta.2 (热修复 beta 版)](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2)**
   - 热修复构建版本，包含自 v2026.10.1-beta.1 以来的 40 次中间 commit
   - 聚焦领域：升级功能与文档修复（源数据中完整变更日志已截断）

4. **[v2026.10.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1)**
   - 10月发布周期的首个 beta 版本，基于 v2026.9.8 构建
   - 核心亮点：Code Mode 键盘快捷键改进（源数据中完整说明已截断）

5. **[v2026.9.9 (稳定版补丁)](https://github.com/openclaw/openclaw/releases/tag/v2026.9.9)**
   - 规模：185 次 commit，112 个 Pull Request，92 位贡献者
   - 针对9月稳定分支的补丁版本，包含Bug修复与安全修复
   - 发布说明：[docs.openclaw.ai/releases/2026](https://docs.openclaw.ai/releases/2026)

*现有发布说明片段中未明确提及破坏性变更或迁移警告；从 2026.9.x 版本升级的用户请参考 v2026.10.1 完整变更日志了解兼容性详情。*

---

## 3. 项目进展
本周合并/关闭的 172 个 PR 中，关键进展覆盖核心可靠性、开发者体验与新功能开发三大方向：
### 升级器与安装修复（已合并/关闭）
- **LXC 容器升级失败问题已解决**：修复了在无特权 Proxmox LXC 容器中，seccomp 阻塞 ioctl 调用导致升级受阻的 `FICLONE EPERM` 错误（[Issue #164113](https://github.com/openclaw/openclaw/issues/164113)，已关闭）
- **升级阻塞恢复修复**：解决了多个因过期交接租约、临时数据库删除或身份记录变更导致升级永久阻塞的边缘场景，与 v2026.10.5-beta.1 的更安全升级工作保持一致（[Issue #167771](https://github.com/openclaw/openclaw/issues/167771)、[Issue #167506](https://github.com/openclaw/openclaw/issues/167506)，均已关闭）
- **堆策略冲突已修复**：解决了显式 `--max-old-space-size` 标志会静默覆盖托管网关中按工作进程设置的资源限制的 Bug（[Issue #157630](https://github.com/openclaw/openclaw/issues/157630)、[Issue #157575](https://github.com/openclaw/openclaw/issues/157575)，均已关闭）

### 运行时与会话可靠性修复
- **工作进程生命周期崩溃已修复**：解决了干净关闭失败的问题——此前 `gateway-server-close` 会抛出"Worker environment inventory has closed"错误，并导致 systemd 单元处于失败状态（[Issue #158126](https://github.com/openclaw/openclaw/issues/158126)，已关闭）
- **MCP 计算机工具租约修复**：修复了计算机工具永不释放执行密钥，导致持续出现 `COMPUTER_HOST_BUSY` 错误的 Bug（[Issue #147420](https://github.com/openclaw/openclaw/issues/147420)，已关闭）
- **SSRF 防护 DNS 超时修复**：解决了 SSRF 防护的固定 DNS 调度器与 Node.js `autoSelectFamily` 之间的冲突，该冲突此前会导致模型拉取出现120秒超时（[Issue #87763](https://github.com/openclaw/openclaw/issues/87763)，已关闭）
- **运行时上下文载体序列化修复**：修复了隐藏的 `display:false` 内部上下文被错误序列化为每个模型请求末尾的用户角色消息的 Bug（[Issue #123265](https://github.com/openclaw/openclaw/issues/123265)，已关闭）

### 功能进展（活跃开发中，计划在未来版本发布）
- **MicroVM 沙箱化**：新提交的 [PR #169534](https://github.com/openclaw/openclaw/pull/169534) 新增了在本地 smol machine microVM 中运行沙箱化工具的支持，无需 Docker/Podman 即可提供内核级隔离
- **Solid UI 重构**：[PR #168612](https://github.com/openclaw/openclaw/pull/168612) 将 Control UI 应用外壳与核心路由从 Lit 迁移至 Solid，目标是提升前端性能
- **OpenShell 代理推理**：[PR #168458](https://github.com/openclaw/openclaw/pull/168458) 新增了在 OpenShell 凭证代理后端运行沙箱化节点推理的支持
- **本地 TTS 语音选择**：[PR #165648](https://github.com/openclaw/openclaw/pull/165648) 为 `tts-local-cli` 提供方启用了语音声明与选择功能，支持 Kokoro、Piper 等后端

---

## 4. 社区热门话题
### 评论数最多的3大活跃Issue
1. **[#143524: Agent SQLite WAL 文件数天内增长至1.4–2.8 GB，阻塞网关启动（Windows）](https://github.com/openclaw/openclaw/issues/143524)**
   - 状态：开放 | P0 | 122 条评论 | 0 👍
   - 分析：这是关注度遥遥领先的问题，该 Bug 影响使用 2026.9.2/9.3 版本的 Windows 用户——尽管设置了检查点，SQLite WAL 文件仍会无限制增长，最终导致网关无法启动。高评论量表明影响范围广泛，报告者与维护者正在积极调试，截至本周尚无修复 PR 合并。

2. **[#91588: 严重网关内存泄漏 — RSS 数天内从350MB增长至15.5GB，触发OOM崩溃](https://github.com/openclaw/openclaw/issues/91588)**
   - 状态：开放 | P0 | 38 条评论 | 1 👍
   - 分析：一个长期存在的严重稳定性问题，持续获得社区关注。该泄漏会导致网关进程在2-3天内消耗基线内存的10–40倍，触发反复的 OOM 杀死与重启循环。根本需求是为长期运行的网关部署提供健壮的运行时内存管理，这是自托管用户的首要痛点之一。

3. **[#97616: OpenClaw 存在未回收的钩子/工具子进程泄漏，僵尸进程持续累积](https://github.com/openclaw/openclaw/issues/97616)**
   - 状态：开放 | P1 | 18 条评论 | 1 👍
   - 分析：一个进程生命周期 Bug——`openclaw-hooks`、`bash`、`codex` 等工具/钩子执行产生的子进程会随时间累积为僵尸进程，降低运行时性能。18条评论反映了用户对不同工具后端资源泄漏问题的共同困扰，该 issue 被标记为需要现场复现才能完成修复。

### 活跃PR的核心主题
升级器可靠性修复是近期 PR 活动的主导方向，本周新开了6个以上相关 PR，解决升级历史写入、配置读取错误、截止时间处理与残留运行时清理等边缘场景。这与 v2026.10.5-beta.1 的更安全升级发布重点直接契合，表明社区与维护者正将升级健壮性作为核心质量指标优先推进。

---

## 5. Bug与稳定性
按严重度排序（P0 > P1 > P2），并标注修复PR状态：

### P0（严重）Bug
| Issue | 描述 | 状态 | 是否存在修复PR？ |
|-------|-------------|--------|----------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Windows 下 SQLite WAL 无限制增长，阻塞网关启动 | 开放 | 否（需维护者评审） |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏 → RSS 达15.5GB，OOM 崩溃 | 开放 | 否（需维护者评审） |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | 网关崩溃：reconcileActive 中出现"Worker environment inventory has closed"未处理拒绝 | 开放 | 否（需现场复现） |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | 原生内存泄漏：每30秒 RSS 增长1 GiB，V8 堆稳定（2026.9.5） | 开放 | 否（需更多信息） |
| [#139082](https://github.com/openclaw/openclaw/issues/139082) | 升级后重启健康检查误报阴性，导致网关停止运行 | 开放 | 否（需更多信息） |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 恢复互锁导致升级永久阻塞，无修复路径 | 已关闭 | 已在 v2026.10.5-beta.1 中解决 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | 无特权 LXC 容器中升级失败并报 FICLONE EPERM 错误 | 已关闭 | 已修复 |

### P1（高优先级）回归与关键Bug
- **2026.10.1 Windows 启动回归**：启动时间从约410秒增加至约1030秒，其中 `sidecars.control-ui-assets` 阻塞477秒（[#168955](https://github.com/openclaw/openclaw/issues/168955)，开放，无修复PR）
- **会话回复丢失Bug**：当第二次运行挤占正在进行的轮次时，回复丢失并提示"no active tool authority snapshot"（2026.9.4 回归）（[#148707](https://github.com/openclaw/openclaw/issues/148707)，开放，无修复PR）
- **插件源码捕获导致SSD损耗**：每个CLI命令重写1.1–1.4 GB数据 / 每次网关启动重写6.5 GB数据，未复用缓存的二进制文件（[#157989](https://github.com/openclaw/openclaw/issues/157989)，开放，无修复PR）
- **Claude CLI 配置路径Bug**：忽略 `CLAUDE_CONFIG_DIR`，导致转录记录重置丢失（[#145309](https://github.com/openclaw/openclaw/issues/145309)，开放，关联PR已开放）
- **字节触发的压缩失败**：压缩失败会抑制重试，导致转录记录增长至大小限制的150倍（[#166665](https://github.com/openclaw/openclaw/issues/166665)，开放，无修复PR）

### 值得关注的稳定性趋势
内存相关Bug（堆泄漏、原生泄漏、WAL文件膨胀）是开放高严重度问题中占比最大的类别，对长期运行的网关部署影响尤为明显。本周多个升级系统Bug已关闭，表明该领域取得了集中进展，但运行时内存与进程生命周期问题仍是用户面临的最大稳定性风险。

---

## 6. 功能需求与路线图信号
### 用户最需要的功能（来自开放的增强/功能类issue）
1. **[#74481: 从提供商 /v1/models 端点动态刷新模型目录](https://github.com/openclaw/openclaw/issues/74481)**
   - 1 👍 | 开放 | P2
   - 需求：从已配置的提供商API自动填充模型选择器，而非使用硬编码列表，以支持代理部署。
   - 上线可能性：**高**——该issue被标记为 diamond lobster（高优先级），且已有源码复现，符合项目的多提供商战略。相关PR很可能已在积极规划中。

2. **[#14785: 降低工具Schema的Token开销（约3,500 tok/会话）](https://github.com/openclaw/openclaw/issues/14785)**
   - 0 👍 | 开放 | P2
   - 需求：通过懒加载或压缩Schema数据，削减加载完整工具JSON Schema的固定3,500 Token/会话成本。
   - 上线可能性：**中高**——成本优化是反复出现的主题，[PR #169483](https://github.com/openclaw/openclaw/pull/169483)（精简技能提示）是相关的活跃PR，遵循了同样的降低提示开销思路。

3. **[#111143: 在Control UI侧边栏中固定插件标签页](https://github.com/openclaw/openclaw/issues/111143)**
   - 1 👍 | 开放 | P3
   - 需求：允许用户将常用插件标签页固定到侧边栏，而非隐藏在"更多"菜单中。
   - 上线可能性：**中等**——正在进行的Solid UI重构（[#168612](https://github.com/openclaw/openclaw/pull/168612)）可能为实现该功能提供契机，作为用户体验改进的一部分，不过目前优先级较低。

### 来自活跃PR的新增功能信号
可能在下一个beta/稳定版本中上线的功能：
- 用于本地工具隔离的Smol machine microVM沙箱
- 会话专属的公共链接预览卡片
- 浏览器策略检查与原生策略设置工具
- 整合的Agent运行时与工作区簿记（性能重构）

---

## 7. 用户反馈总结
### 核心痛点（来自issue报告）
1. **长期运行稳定性是首要痛点**：多位用户表示因难以管控

---

## 横向生态对比

# 跨项目开源AI Agent生态对比报告 | 2026-10-12
---

## 1. 生态概览
开源个人AI助手与Agent生态正处于快速成熟阶段，各项目在核心稳定性加固、功能扩展和部署灵活性之间寻求平衡，以满足个人高级用户、自托管团队和企业部署的需求。在所有追踪项目中，运行时可靠性（内存管理、会话持久化、错误恢复）和更新系统健壮性仍是最普遍被提及的用户痛点，而沙箱、多供应商支持和插件生态方面的工作则表明行业正朝着生产级安全性和可扩展性推进。

整个生态涵盖了从规模大、迭代速度快的核心平台，到小型专业化工具，且各方对标准组件的共识日益增强——例如MCP（Model Context Protocol）集成、多渠道部署和跨会话内存，已成为具备竞争力的Agent运行时的基线要求。社区参与模式显示，用户越来越期望Agent能够处理持久、长期运行的工作流，而非一次性的响应式任务，这推动了对主动式Agent行为、状态一致性和资源效率的需求。

---

## 2. 活跃度对比
| 项目 | 更新的Issue（开放/关闭） | 更新的PR（开放/合并） | 本周新版本数量 | 项目健康度评分（1–10） |
|---------|-------------------------------|----------------------------|------------------------|------------------------------|
| OpenClaw | 500（344 开放 / 156 关闭） | 500（328 开放 / 172 合并） | 5（1个稳定版、1个稳定补丁版、3个测试版） | 9.0 |
| Hermes Agent | 50（47 开放 / 3 关闭） | 50（46 开放 / 4 合并） | 1（补丁版本） | 7.2 |
| IronClaw | 7（6 开放 / 1 关闭） | 11（8 开放 / 3 关闭） | 0 | 6.5 |
| QwenPaw | 50（26 开放 / 24 关闭） | 50（21 开放 / 29 合并） | 0 | 7.8 |
| ZeroClaw | 50（41 开放 / 9 关闭） | 50（47 开放 / 3 合并） | 0 | 7.0 |

*健康度评分基于Issue关闭率、PR合并速度、维护者对高严重性Bug的响应速度、发布频率和社区贡献者广度计算得出。*

---

## 3. OpenClaw的市场定位
### 相较于同类项目的优势
OpenClaw在迭代速度、贡献者规模和发布成熟度方面是生态中当之无愧的领导者：其v2026.10.1稳定版拥有402名贡献者，每周合并172个PR，体量是同类项目的3-10倍。它拥有最成熟的稳定版发布流程，定期推出热修复、测试版构建和稳定补丁版本，处理边界问题（例如LXC容器更新失败、租约更新阻塞过久）的速度快于竞争项目。它在高级基础设施建设方面也处于领先地位，包括MicroVM沙箱和完整的Solid UI重构，这些都是小型项目尚未优先推进的工作。

### 技术路线差异
与专注于细分场景的同类项目不同（例如IronClaw基于Rust、以基准测试驱动质量优化，ZeroClaw采用安全优先的架构），OpenClaw走的是广义平台路线，对运行时稳定性、前端体验、插件生态工具和跨平台部署支持均投入同等资源。其更新系统加固工作是整个生态中最全面的，有专门的测试版发布完全聚焦于更新可靠性——而其他项目仅将此作为次要维护任务。

### 社区规模对比
OpenClaw的社区规模比排名其后的项目（QwenPaw、Hermes Agent）大一个数量级，每周有500条Issue/PR更新，而同类项目仅为50条。其高严重性Bug讨论帖（例如关于SQLite WAL增长问题的帖子有122条评论）显示出更广泛的用户影响和参与度，反映出其生产环境用户基数更大。

---

## 4. 共同的技术关注领域
1. **更新系统可靠性**（OpenClaw、Hermes Agent）：两个项目都面临用户对更新阻塞、状态报告错误和更新后故障的不满。OpenClaw发布了专门用于更新加固的测试版，而Hermes Agent正在处理错误的“网关过时”警告和稳定渠道404错误。
2. **会话状态持久化与可靠性**（全部5个项目）：每个被追踪的项目都存在与聊天记录丢失、任务完成报告错误，或连接错误/刷新后状态损坏相关的未解决Bug。IronClaw的#1993（重载时任务误报成功）、QwenPaw的历史记录丢失报告，以及ZeroClaw的SQLite时间戳重写Bug，都反映了同一个核心挑战：在Agent重启和网络中断时保持状态一致性。
3. **内存与资源效率**（OpenClaw、QwenPaw、ZeroClaw）：内存泄漏、SQLite膨胀和资源累积（僵尸进程、过大的WAL文件）是OpenClaw的头号P0/P1问题，也是QwenPaw和ZeroClaw用户群中长期部署的主要痛点。
4. **MCP（Model Context Protocol）集成加固**（QwenPaw、ZeroClaw、OpenClaw）：三个项目都在积极推进MCP可靠性工作，包括连接错误降级、参数序列化修复、销毁处理，以及配置和诊断方面的可用性改进。
5. **多渠道/消息平台支持**（Hermes Agent、IronClaw、ZeroClaw）：各项目正从Web/CLI界面向外扩展，原生集成Telegram、Discord、iMessage/SMS和电子邮件，始终聚焦于路由可靠性和与标准消息客户端的功能对等性。

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **核心功能聚焦** | 核心平台广度：稳定性、UI、沙箱、插件生态 | 主动式Agent行为、多社区网关定制、消息平台集成 | 基于Rust的Agent循环优化、基准测试驱动质量、扩展生态 | 前端用户体验、多语言支持、多Agent工作流、MCP可用性 | 安全加固、WASM插件生态、持久化内存、知识图谱/RAG |
| **目标用户** | 通用型高级用户、自托管者、企业团队 | 社区/聊天机器人运营商、个人助理用户、多部署管理员 | 技术型自托管用户、注重安全的用户、基准测试团队 | 中国国内市场、国际多语言用户、多Agent流水线构建者 | 安全优先的企业用户、插件开发者、生产通信工作流团队 |
| **技术架构** | 大型单体代码库，贡献者基础广泛，核心为Node.js，前端正在活跃重构（Lit → Solid） | 核心基于Python，网关/CLI/桌面客户端分离，高度聚焦消息平台集成 | 原生Rust实现、核心精简、以基准测试为中心的质量控制、社区驱动扩展 | 全栈架构，包含Web控制台+桌面客户端，内置多语言国际化，MCP优先设计 | Rust核心，安全原语优先（沙箱、身份权限范围）、WASM插件系统、A2A协议路线图 |

---

## 6. 社区动能与成熟度
### 活跃梯队
- **第一梯队（高速度、成熟）**：OpenClaw的运营规模与所有同类项目拉开了差距，拥有庞大的维护者团队、定期的稳定版本发布，以及活跃的高严重性Bug分诊机制。它是唯一拥有完全成熟的稳定版发布节奏和广泛贡献者基础的项目。
- **第二梯队（快速迭代、成熟度提升中）**：QwenPaw和Hermes Agent的周活跃度相当，但QwenPaw的PR合并速度（29个合并 vs Hermes Agent的4个）和Issue关闭率更高，表明其在Bug修复和功能开发方面迭代更快。两者都在扩展功能集的同时，着力解决核心稳定性缺口。
- **第三梯队（稳定维护、细分聚焦）**：IronClaw的活跃度最低，大多数合并的PR都是依赖项更新，面向用户的功能开发有限。它目前处于维护/稳定阶段，社区规模较小但专业化程度高。
- **第四梯队（预发布加固阶段）**：ZeroClaw的开放PR/Issue数量多，但合并速度极低，符合v1.0版本前的加固阶段特征，正专注于为即将推出的v0.8.6和v0.9.0版本构建安全性和基础功能。

### 成熟度趋势
- OpenClaw成熟度最高，拥有成熟的发布流程，专注于渐进式的稳定性和性能改进，而非基础功能搭建。
- QwenPaw成熟速度快，高Issue关闭率体现了维护者对用户反馈Bug的强响应能力。
- Hermes Agent、IronClaw和ZeroClaw仍在构建核心功能集：Hermes Agent专注于扩展使用场景，IronClaw专注于核心循环优化，ZeroClaw专注于安全和插件生态基础。

---

## 7. 趋势信号
1. **从响应式向持久化Agent使用场景转变**：对主动式Agent功能的需求不断增长（Hermes Agent的签到请求、ZeroClaw的持久化内存工作、OpenClaw的跨会话工具）表明，用户正从一次性任务执行转向始终在线的助手部署。Agent开发者应优先考虑状态持久化、后台执行和主动交互框架，以满足这一需求。
2. **安全与沙箱成为入门必备**：MicroVM沙箱（OpenClaw）、firejail配置（ZeroClaw）、RCE漏洞修复（QwenPaw）和危险模式检测（Hermes Agent）方面的工作表明，用户越来越期望Agent运行时具备强大的隔离和安全控制，以应对不可信代码的执行。
3. **插件和扩展生态是关键差异化因素**：所有项目都在投入资源建设插件市场、WASM插件运行时、技能安装流程和扩展API。随着核心Agent功能商品化，可扩展性和第三方生态规模将成为平台采用的主要竞争差异化因素。
4. **多供应商和自定义端点支持是刚需**：关于OpenAI兼容端点设置的困惑（IronClaw）、API密钥格式Bug（Hermes Agent）和动态模型目录请求（OpenClaw）表明，用户期望能够灵活、自助式地集成任何LLM供应商，而非依赖固定的支持平台列表。
5. **长期部署可靠性是最大的采用障碍**：在所有项目中，内存泄漏、崩溃循环、状态损坏和更新失败是用户放弃自托管部署的最常被提及的原因。对于AI Agent开发者而言，投入资源建设可观测性、资源泄漏检测和健壮的更新恢复路径，将对用户留存和生产环境采用产生最大影响。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报 (2026-10-12)

## 1. 近7天概况
Hermes Agent 项目本周保持高速开发节奏，7天内共更新50个Issue与50个Pull Request。绝大多数Issue（50个中的47个）和PR（50个中的46个）仍处于开放状态，表明CLI、网关、Agent运行时、桌面客户端等核心组件均有大量开发工作正在推进。项目发布了新的补丁版本v0.21.6，为Docker和Hermes Cloud部署提供了累积性的稳定性优化。社区参与度集中在更新流程、平台特定边界情况、会话状态可靠性相关的Bug反馈，同时用户对主动式Agent行为功能的兴趣也在持续增长。

## 2. 版本发布
- **v0.21.6**（发布于2026-10-08）
  - 类型：补丁版本
  - 覆盖范围：将v0.21.5以来合并的约2100个PR整合为稳定标签版本，面向Docker和Hermes Cloud发行版提供
  - 说明：本次累积变更的完整精选发布说明将随即将推出的v0.22.0功能版本一同发布。本补丁无破坏性变更，也无需迁移操作。
  - 链接：[Hermes Agent v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6)

## 3. 项目进展
过去7天共有4个Pull Request被合并或关闭，修复了可靠性与用户体验相关问题：
1. **损坏的cron数据库优雅失败处理（[PR #136862](https://github.com/NousResearch/hermes-agent/pull/136862)）：当`jobs.json`损坏或无法解析时，`hermes cron`命令现在会干净地退出，不再输出原始Python traceback。
2. **非交互式`auth add`崩溃修复（[PR #136859](https://github.com/NousResearch/hermes-agent/pull/136859)）：解决了`hermes auth add`在非交互式环境（标准输入耗尽、cron任务、管道关闭）下出现的挂起和崩溃问题。
3. **非交互式会话的浏览器工具准入提示（[Issue #66393](https://github.com/NousResearch/hermes-agent/issues/66393) — 已关闭）**：在非交互式网关/无头会话中缺少`agent-browser`时，浏览器工具现在会返回清晰的安装提示，而非静默失败。
4. **异步委派提示修复（[Issue #69776](https://github.com/NousResearch/hermes-agent/issues/69776) — 已关闭）**：修复了弱能力较弱的模型编造异步委派任务结果的Bug，原因是调度说明错误地指示它们“直接继续”。
5. **桌面会话标签切换性能优化（[Issue #95044](https://github.com/NousResearch/hermes-agent/issues/95044) — 已关闭）**：修复了大型会话工作区中切换标签时的残留卡顿问题，解决了此前#55191优化后仍存在的水合和侧边栏渲染开销。

## 4. 社区热门话题
本周讨论最活跃的事项反映了用户对更新可靠性、平台集成和核心Agent行为的关注：
1. **延迟更新后网关重启警告持续存在（[Issue #107402](https://github.com/NousResearch/hermes-agent/issues/107402)，21条评论）**：用户反馈执行`hermes update`时，若因进行中的任务延迟网关重启，会留下永久的“未重启运行中网关”警告。讨论核心在于如何让更新集群验证时机与实际的延迟重启生命周期对齐。
2. **Telegram论坛主题消息路由Bug（[Issue #136567](https://github.com/NousResearch/hermes-agent/issues/136567)，10条评论）**：关于Telegram私信论坛主题的高优先级讨论：新线程的首条消息发送时不带线程ID，导致大厅恢复时将其错误路由到上一个主题。这会影响启用论坛功能的Telegram私信机器人用户的会话隔离。
3. **Anthropic `sk-ant-usr-` API密钥分类错误（[Issue #133856](https://github.com/NousResearch/hermes-agent/issues/133856)，6条评论，6个👍）**：使用新版Anthropic用户前缀API密钥的用户反馈，这些密钥被错误识别为OAuth令牌，导致按Token付费的认证失效。这是本周获赞最高的Bug，表明随着Anthropic推出新密钥格式，影响范围广泛。
4. **稳定更新频道404错误（[Issue #136281](https://github.com/NousResearch/hermes-agent/issues/136281)，6条评论）**：稳定发布频道的用户无法执行更新检查，因为`hermes-assets.nousresearch.com/releases/channels/stable.json`返回404，说明存在部署或CDN配置问题。
5. **主动签到功能请求（[Issue #9645](https://github.com/NousResearch/hermes-agent/issues/9645)，4条评论，8个👍）**：这项存在已久的功能请求持续获得关注，用户希望Agent能有可选、可控制成本的主动跟进功能，强调需要低摩擦、符合人类沟通感的主动发起的跟进。

## 5. Bug与稳定性
本周报告或更新的Bug按严重程度排序（P1最高，其次为P2）：
### P1 严重级
- **Anthropic用户API密钥认证失败（[Issue #133856](https://github.com/NousResearch/hermes-agent/issues/133856)）：`sk-ant-usr-`前缀的密钥被错误分类为OAuth令牌，导致使用新版Anthropic凭证的用户认证和计费失效。截至本报告发布时，暂无公开的修复PR。

### P2 严重级
1. **更新流程误报“网关过期”警告（[Issue #107402](https://github.com/NousResearch/hermes-agent/issues/107402)）**：延迟网关重启会导致永久的部分更新状态。尚未关联修复PR。
2. **沙箱安装导致Windows PATH污染（[Issue #135037](https://github.com/NousResearch/hermes-agent/issues/135037)）**：从沙箱/测试检出目录运行Hermes会将其bin目录写入共享用户PATH，破坏默认的`hermes`命令解析。尚未关联修复PR。
3. **工具参数强制转换丢失前导零（[Issue #55369](https://github.com/NousResearch/hermes-agent/issues/55369)）**：`int|str`联合类型的工具参数（如“007”）被错误强制转换为整数，丢失字符串格式。尚未关联修复PR。
4. **Telegram网关在提供商已充值时提示“余额不足”错误（[Issue #136801](https://github.com/NousResearch/hermes-agent/issues/136801)）**：用户反馈即便有有效的Nous Portal OAuth和DeepSeek API密钥，仍收到余额错误；该问题需要复现。
5. **`write_file`路径解析不匹配（[Issue #136842](https://github.com/NousResearch/hermes-agent/issues/136842)）**：相对路径基于继承的`TERMINAL_CWD`解析，而非会话报告的工作目录，导致文件保存到意外位置。
6. **终端/进程工具超时截断（[Issue #117906](https://github.com/NousResearch/hermes-agent/issues/117906)）**：420秒的通用工具截止时间会截断运行时间更长的终端/进程任务，并丢弃部分输出。**已有修复PR**：[PR #117907](https://github.com/NousResearch/hermes-agent/pull/117907)让通用截止时间遵循工具特定的超时预算。
7. **网关流式输出重复推理文本（[PR #75562](https://github.com/NousResearch/hermes-agent/pull/75562)）**：开放中的Bug修复PR，解决流式输出界面中文本重复的问题，即最终答案被作为推理内容重复输出。
8. **仪表盘重连导致正在进行的回合中断（[Issue #136713](https://github.com/NousResearch/hermes-agent/issues/136713)）**：Web仪表盘客户端重连（页面刷新、打开第二个标签页）会强制中断正在进行的Agent回合，并以`tui_shutdown`结束原因关闭会话。尚未关联修复PR。

## 6. 功能请求与路线图信号
本周用户最关注的功能请求，以及近期纳入开发的可能性：
1. **网关的按主题/聊天配置覆盖（[Issue #4431](https://github.com/NousResearch/hermes-agent/issues/4431)，10个👍）**：请求允许为每个Telegram群组/Discord服务器/论坛主题设置不同的系统提示、人设和工作目录。社区需求高；鉴于当前网关插件开发正在推进，大概率会在v0.22.x版本中优先安排。
2. **无人值守内存整合显式 opt-in 开关（[Issue #106919](https://github.com/NousResearch/hermes-agent/issues/106919)）**：用户希望对自主内存整合有细粒度控制，保留默认的替换/删除审批门槛。该需求与当前内存系统迭代方向一致，很可能纳入下一个功能版本。
3. **会话边界内存审查触发（[Issue #31597](https://github.com/NousResearch/hermes-agent/issues/31597)）**：请求在会话重置/关闭/压缩节点运行后台内存审查，确保更新后的内存可用于下一个会话。属于小型针对性改进，未来几周内落地的可能性很高。
4. **基于源的主动跟进插件契约（[Issue #125448](https://github.com/NousResearch/hermes-agent/issues/125448)）**：提出的安全网关插件框架，用于让Agent主动回顾过往话题。范围较大，可能与更广泛的插件生态工作一同安排在v0.23.0版本。
5. **配置文件级持久心跳（[Issue #130197](https://github.com/NousResearch/hermes-agent/issues/130197)）**：请求提供配置文件范围的心跳，跨会话携带对话上下文，解决会话范围的`/heartbeat`和cron任务的局限性。优先级中等，取决于cron系统扩展进度。

## 7. 用户反馈汇总
### 痛点
- **更新体验摩擦**：多个问题（#107402、#136281、#135037）表明`hermes update`流程存在系统性可靠性缺陷，从状态报告错误、PATH副作用到资产服务器中断均有涉及。
- **平台特定边界情况**：Windows PATH处理、macOS RTL UI布局Bug（#136275）、Telegram论坛功能缺口，导致不同操作系统和消息平台的体验不一致。
- **认证摩擦**：Anthropic密钥格式分类错误和非交互式认证命令失败，给新用户造成设置障碍。
- **会话状态可靠性**：仪表盘重连丢失回合、Telegram主题路由错误、桌面会话切换卡顿，削弱了用户对长时间运行Agent工作流的信任。

### 积极信号
- 用户对主动式Agent功能（签到、跟进）的强烈兴趣表明，用户正从被动任务执行转向持久的助手式使用场景。
- 对按社区自定义网关的需求显示，生产部署正在单实例上扩展到多种用例。
- 对安全改进（危险模式扩展、密钥脱敏）的关注，反映了企业用户和高级用户对Agent安全运行的重视。

## 8. 待办观察
存在已久、影响较大，但近期未得到维护者关注的高价值事项：
1. **SPA浏览器点击可靠性（[Issue #37244](https://github.com/NousResearch/hermes-agent/issues/37244)，创建于2026-06-02）**：长期存在的Bug：`browser_click`在现代React/Vue单页应用上因元素被遮挡和自定义事件处理器而失败。影响Web自动化场景下的核心浏览器工具实用性。
2. **同步/备份工具的技能目录排除（[Issue #122613](https://github.com/NousResearch/hermes-agent/issues/122613)，创建于2026-09-25）**：简单低风险的变更，将`.stversions`和`_archive`添加到排除的技能目录列表，防止备份制品被索引为技能。
3. **终端工具危险模式扩展（[Issue #17873](https://github.com/NousResearch/hermes-agent/issues/17873)，创建于2026-04-30）**：安全改进，将反向Shell、下载执行、凭证读取模式添加到终端工具的`DANGEROUS_PATTERNS`列表，降低Agent安全风险。
4. **桌面TUI恢复时模型/提供商不匹配（[PR #121629](https://github.com/NousResearch/hermes-agent/pull/121629) + [PR #118982](https://github.com/NousResearch/hermes-agent/pull/118982)，开放中，设计方案未决）**：两个竞争PR解决同一个恢复聊天时模型/提供商不匹配的Bug，等待维护者决定采用哪种方案。
5. **OpenRouter的DeepSeek上下文窗口元数据过期（[PR #42569](https://github.com/NousResearch/hermes-agent/pull/42569)，创建于2026-06-09）**：长期开放的修复，解决通过OpenRouter访问DeepSeek模型时上下文长度报告错误的问题，该问题会导致Token限制计算错误和对话截断。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报 | 2026-10-12
代码仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 近7天概览
过去7天，IronClaw 处于稳定维护与功能迭代阶段，共更新7个Issue（6个开放、1个关闭）和11个Pull Request（8个开放、3个关闭）。期间未发布新版本，工作重点围绕依赖维护、核心智能体循环优化、扩展生态拓展以及 Web UI 稳定性修复展开。项目在自动化依赖维护、社区驱动的功能提案与定向漏洞修复之间保持了健康平衡。基准测试驱动的质量追踪仍是核心运营优先级，每日会发布故障分类Issue，以排查模型性能差距。

---

## 2. 版本发布
近7天未发布新版本。

---

## 3. 项目进展
上周合并/关闭的3个Pull Request均为依赖维护更新，确保项目工具链和运行时依赖保持最新：
- **PR #8114 [已关闭]**：`chore(deps): bump the everything-else group across 1 directory with 31 updates`  
  该Rust依赖更新涵盖31个核心包（包括 `thiserror`、`uuid` 和 `base64`），已被更新一批的依赖更新取代。  
  🔗 https://github.com/nearai/ironclaw/pull/8114
- **PR #8103 [已关闭]**：`chore(deps): bump the actions group across 1 directory with 8 updates`  
  该GitHub Actions依赖更新涵盖8个CI/CD工作流工具，包括 `anthropics/claude-code-action` 和 `actions/setup-node`，已被取代。  
  🔗 https://github.com/nearai/ironclaw/pull/8103
- **PR #8123 [已关闭]**：`chore(deps): bump the tokio-ecosystem group across 1 directory with 3 updates`  
  针对 `tokio-test`、`tower-http` 和 `tokio-tungstenite` 包的Tokio生态更新，已被取代。  
  🔗 https://github.com/nearai/ironclaw/pull/8123

本周期内无面向用户的功能或Bug修复正式合并；所有活跃的功能开发仍在开放的PR中接受审核。

---

## 4. 社区热门话题
按评论数和互动反应排序：
1. **Issue #1993 [开放中]**：`Agent falsely reports task completion after chat is closed and reopened`  
  这是评论数最多的活跃Bug（1条评论），具备清晰的复现步骤，与502错误恢复相关。核心需求：实现可靠的会话状态持久化和任务完成验证，避免虚假成功报告损害用户信任。  
  🔗 https://github.com/nearai/ironclaw/issues/1993
2. **Issue #8131 [开放中]**：`Is this a joke? (ironclaw onboard provider list)`  
  这是唯一获得用户正面反馈（1个👍）的Issue，对项目文档中“20+推理提供商”的说法提出质疑，尤其围绕OpenAI兼容端点的接入流程。核心需求：提供更清晰的提供商配置文档，以及经过验证的自托管/自定义LLM端点接入流程。  
  🔗 https://github.com/nearai/ironclaw/issues/8131
3. **Issue #8130 / PR #8127**：`Sendblue iMessage/SMS extension proposal and implementation`  
  这是一组紧密关联的功能需求与对应实现PR，反映了社区对原生iMessage/SMS集成（使用用户自有凭证）的需求。核心需求：扩展消息渠道支持，同时保障用户数据主权。  
  🔗 提案：https://github.com/nearai/ironclaw/issues/8130 | 🔗 实现：https://github.com/nearai/ironclaw/pull/8127

---

## 5. Bug与稳定性
按严重程度从高到低排序：
| 严重程度 | Issue | 描述 | 修复PR状态 |
|----------|-------|-------------|---------------|
| 高 | [#1993 Agent false task completion after chat reload](https://github.com/nearai/ironclaw/issues/1993) | 出现502错误后，重新打开聊天时智能体会声称任务已成功完成，但实际并未执行（例如未发送的Telegram消息）。这破坏了任务执行的核心可靠性保障。 | 暂无修复PR提交 |
| 中 | [#8124 WebChat stale state & missing notifications in background tabs](https://github.com/nearai/ironclaw/issues/8124) | 在非HTTPS的自托管部署中，由于HTTP下禁用了Web Push，浏览器后台标签页会显示过时的操作状态，且无完成提醒。 | 部分修复已开放：[#8125 fix(webui): keep run state and notification inbox fresh in background tabs](https://github.com/nearai/ironclaw/pull/8125) 解决了状态过时问题；非HTTPS下的Web Push缺口仍未解决 |
| 低 | [#1047 DeepSeek API key configuration failure](https://github.com/nearai/ironclaw/issues/1047) | 配置DeepSeek提供商时出现401未授权错误，本周已关闭。根本原因是用户API密钥格式无效，而非平台Bug。 | 已关闭（用户侧配置问题解决） |

此外还提交了两个每日基准测试失败追踪Issue（#8126、#8129），记录了使用DeepSeek-V4-Flash在 `officeqa` 测试套件中出现的模型质量数值错误和导航错误。这些属于上游模型性能差距，而非IronClaw代码Bug。

---

## 6. 功能需求与路线图信号
实施势头强劲的活跃用户需求功能：
1. **Sendblue iMessage/SMS 扩展**  
  在[#8130](https://github.com/nearai/ironclaw/issues/8130)中提出，完整实现见[#8127](https://github.com/nearai/ironclaw/pull/8127)。该功能新增了iMessage/SMS的用户自有凭证支持，与项目现有对话生命周期设计一致，待审核通过后大概率会在近期版本中上线。
2. **基于Jev分类器的回合起始工具选择**  
  正在通过[#8119](https://github.com/nearai/ironclaw/pull/8119)积极开发中，这一可选功能通过在对话回合开始时预选相关工具，减少 `tool_search` 的往返次数。这项核心循环优化是降低延迟的高优先级路线图事项，大概率会作为实验性功能在下一个发布周期推出。
3. **改进OpenAI兼容提供商接入流程**  
  由[#8131](https://github.com/nearai/ironclaw/issues/8131)中的用户困惑引发，针对自定义LLM端点提供更完善的文档和经过验证的设置流程，可能会在近期进行文档更新，以解决用户接入的阻碍。

---

## 7. 用户反馈总结
### 痛点
- **会话状态可靠性**：用户在连接错误和聊天重启后遇到虚假的任务完成报告，削弱了对智能体执行保障的信任（Issue #1993）。
- **自定义提供商接入清晰度**：用户对如何配置OpenAI兼容端点感到困惑，对项目宣传的20+提供商支持持怀疑态度（Issue #8131）。
- **自托管Web UI缺陷**：非HTTPS的局域网部署缺乏可用的后台通知，且标签页置于后台时会出现状态过时问题（Issue #8124）。
- **模型质量一致性**：基准测试追踪显示，DeepSeek-V4-Flash在办公自动化任务中反复出现数值和导航错误（Issues #8126、#8129）。

### 积极信号
- 社区贡献者正在积极构建扩展（Sendblue iMessage/SMS）和核心性能优化（回合起始工具选择），表明开发者生态健康且参与度高。
- 项目结构化的每日故障分类流程体现了主动的质量监控。

---

## 8. 待办事项关注
需要维护者关注的长期遗留事项：
1. **PR #7834 [开放中]**：`chore(deps): bump the wasm group across 1 directory with 4 updates`  
  自2026-08-23起开放（已8周），这项针对 `wasmtime` 及相关包的中等风险Wasm依赖更新虽经多次更新仍未合并。过时的Wasm依赖可能给项目的沙箱工具执行层带来安全和兼容性风险。  
  🔗 https://github.com/nearai/ironclaw/pull/7834
2. **Issue #1993 [开放中]**：`Agent falsely reports task completion after chat is closed and reopened`  
  自2026-04-03起开放（已超过6个月），这个高严重性的智能体可靠性Bug尽管本周刚有更新，却仅有1条评论，也没有分配修复PR。该问题是终端用户的核心信任缺口，值得优先处理。  
  🔗 https://github.com/nearai/ironclaw/issues/1993

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报 | 2026-10-12
---

## 1. 过去7天概览
过去7天QwenPaw保持强劲开发势头，共更新50个issue（26个开放、24个关闭）和50个PR（21个开放、29个合并/关闭），体现出活跃的社区参与度与快速迭代节奏。项目重点聚焦稳定性修复、运行时韧性提升和前端体验优化，同时开展多平台支持与开发者工具的新功能探索。本周未发布正式新版本，大部分变更仍处于预发布或主分支阶段。项目整体健康度良好，issue关闭率较高，功能开发与bug修复的管线储备丰富多元。

## 2. 版本发布
过去7天无新版本发布。

## 3. 项目进展
本周共合并或关闭29个PR，推动核心功能与可靠性持续提升：
- **运行时与MCP韧性**：多个长期推进的加固PR已落地，包括[PR #1977](https://github.com/agentscope-ai/QwenPaw/pull/1977)（MCP销毁及cron/channel异常处理）、[PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052)（MCP连接错误降级为工具级故障）、[PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783)（通过压缩重试实现上下文溢出自动恢复）。
- **模型与提供商可靠性**：[PR #2520](https://github.com/agentscope-ai/QwenPaw/pull/2520)新增模型预飞检查功能，可明确抛出提供商错误；[PR #1480](https://github.com/agentscope-ai/QwenPaw/pull/1480)通过默认使用127.0.0.1修复了Ollama的IPv6连接问题。
- **插件与桌面端体验**：[PR #5661](https://github.com/agentscope-ai/QwenPaw/pull/5661)和[PR #5612](https://github.com/agentscope-ai/QwenPaw/pull/5612)为插件市场和CDN目录引入版本兼容性过滤功能；[PR #5569](https://github.com/agentscope-ai/QwenPaw/pull/5569)通过两阶段启动加载器解决了Windows桌面端启动白屏问题。
- **MCP易用性**：[PR #1848](https://github.com/agentscope-ai/QwenPaw/pull/1848)和[PR #1978](https://github.com/agentscope-ai/QwenPaw/pull/1978)优化了MCP导入模板、校验、预览及运行时状态诊断功能。
- **内存系统灵活性**：[PR #5732](https://github.com/agentscope-ai/QwenPaw/pull/5732)新增`none`内存后端选项，可通过控制台UI完全禁用ReMeLight。

## 4. 社区热门话题
讨论热度最高的议题集中在核心用户体验痛点与稳定性问题：
1. **子代理生成超时失败**（[Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678)，10条评论，已关闭）：用户反馈在Windows v2.2.0版本中，`spawn subAgent`任务100%失败，即使延长超时窗口仍会超时。该讨论体现出用户对多代理核心功能的强烈不满，也推动了更健壮的子代理生命周期管理需求的落地。
2. **聊天记录丢失与上下文窗口关联问题**（[Issue #8134](https://github.com/agentscope-ai/QwenPaw/issues/8134)，10条评论，开放中）：用户反馈聊天记录意外消失，并强调该问题与LLM上下文窗口限制无关。这反映出数据持久性与用户对对话记录的信任是当前优先级最高的UX痛点之一。
3. **压缩历史记录加载失败**（[Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)，9条评论，已关闭）：用户抱怨可见聊天记录过短，刷新后无法加载更早的消息，凸显了对可靠的长期对话检索功能的需求。
4. **OpenAI Responses API流式响应空回复bug**（[Issue #8162](https://github.com/agentscope-ai/QwenPaw/issues/8162)，7条评论，已关闭）：v2.2.2.b4版本的回归问题导致流式事件类型处理不完整，引发会话突然中断，体现出社区在排查提供商集成问题方面的高参与度。

## 5. Bug与稳定性
过去7天报告的Bug按严重程度排序如下：
| 严重级别 | Issue | 描述 | 修复状态 |
|----------|-------|-------------|------------|
| **严重** | [Issue #8153](https://github.com/agentscope-ai/QwenPaw/issues/8153) | MCP驱动配置接口存在根远程代码执行（RCE）漏洞，已验证可被利用部署挖矿程序 | 已关闭（标记为无效；安全响应细节未公开） |
| **高** | [Issue #8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | 控制台聊天间歇性静默空完成：会话在约1秒内结束，无输出、无模型调用、前端无报错 | 开放中；暂无明确的修复PR |
| **高** | [Issue #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | 嵌入重建索引不完整：超出单条目token限制的CJK文本块会导致整批数据静默丢弃（#5950复现） | 开放中；暂无关联的修复PR |
| **高** | [Issue #8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | GitHub技能安装会损坏二进制文件（图片/字体），将非UTF-8字节替换为U+FFFD | 开放中；暂无关联的修复PR |
| **中** | [Issue #8163](https://github.com/agentscope-ai/QwenPaw/issues/8163) | Windows上的qwenpaw-creator在长路径下会破坏Review决策日志（503 STORAGE_INTEGRITY_ERROR），残留空目录会阻塞重试（409 CAS_CONFLICT） | 开放中；暂无关联的修复PR |
| **中** | [Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | v2.2.2b4版本在多设备上频繁出现页面加载失败 | 已关闭；通过上游 chunk 加载优化与错误边界修复解决 |
| **中** | [Issue #7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 控制台无法从懒加载页面chunk加载失败中恢复；所有导航都停留在错误页面，需完全刷新 | 已关闭；通过重试机制与错误边界修复解决 |

其余正在推进的稳定性修复包括[PR #8183](https://github.com/agentscope-ai/QwenPaw/pull/8183)（保留取消原因，在工具/子代理失败后继续执行代理循环）和[PR #7973](https://github.com/agentscope-ai/QwenPaw/pull/7973)（在代理推理循环中处理媒体URL被拒绝的异常恢复）。

## 6. 功能需求与路线规划信号
近期大概率会落地的核心用户需求功能如下：
1. **西班牙语（es）界面本地化**（[Issue #8160](https://github.com/agentscope-ai/QwenPaw/issues/8160)）：请求在控制台、官网和插件创建工具中全量支持西班牙语界面。鉴于QwenPaw已支持多语言（中、英、日、俄、巴西葡语、印尼语、越南语），该需求与项目国际化路线高度契合。
2. **单聊天工具授权状态服务端持久化**（[Issue #8180](https://github.com/agentscope-ai/QwenPaw/issues/8180)、[PR #8182](https://github.com/agentscope-ai/QwenPaw/pull/8182)）：用户请求将会话级别的授权等级存储在服务端（当前仅存储在localStorage）。目前已有一个XL级别的专属PR正在评审中，极有可能纳入下一个版本。
3. **会话级实时变更通知**（[Issue #8181](https://github.com/agentscope-ai/QwenPaw/issues/8181)）：请求提供会话范围的事件通道，无需全页面刷新即可向前端推送对话更新。该功能可解决核心UX痛点，与当前正在推进的前端体验优化方向一致。
4. **反向代理子路径部署支持可配置控制台basename**（[Issue #8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)）：请求支持Web控制台在自定义子路径（如`/qwenpaw/`）下提供服务，适配反向代理部署场景。这是自托管场景的常见需求，实现路径清晰。
5. **鸿蒙原生客户端**（[PR #8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)）：一个大型在研PR新增了基于ArkUI/ArkTS的无WebView依赖鸿蒙原生客户端。尽管因PR规模为XXXL级，评审周期更长，但标志着项目向中国本土智能设备生态的拓展。

## 7. 用户反馈总结
### 核心痛点
- **聊天记录可靠性**：多名用户（[#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134)、[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)、[#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109)）反馈记录丢失、压缩后加载不完整、流式错误后会话全量清空等问题，是被提及最多的UX痛点。
- **多代理工作流不稳定**：子代理生成失败（[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678)）和消息队列不一致（[#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)）导致复杂代理流水线中断，用户反馈该问题已持续数月。
- **前端渲染与加载问题**：页面加载失败（[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)）、设置页布局异常（[#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122)）以及背景模糊效果的性能问题，引发了用户对分级动画功能的需求。
- **部署灵活性**：自托管用户请求支持反向代理子路径（[#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)）和更完善的跨设备配置同步能力。

### 观察到的使用场景
- 用于数据处理的生产级多代理部署（如`qwenpaw-data`代理模板）
- 个人及团队使用的自托管NAS/Docker部署
- 通过GitHub进行的插件/技能开发与分发
- 面向企业工作流的多渠道部署（飞书、Web控制台）

### 用户情绪
整体情绪褒贬不一：用户认可QwenPaw的灵活性与功能丰富度，但对核心工作流（历史记录、子代理）反复出现的稳定性问题，以及部署文档的缺失表示不满。社区提交的bug报告数量多、根因分析详尽，说明用户群体具备技术能力且高度参与，对项目成功抱有期待。

## 8. 待办关注项
以下长期存在的事项因严重程度、存续时长或用户影响范围，需维护者重点关注：
1. **[Issue #7311](https://github.com/agentscope-ai/QwenPaw/issues/7311)**（开放中，创建于2026-08-26）：v2.1.1b2版本缺失`_qwenpaw_remote_backend`模块，导致Windows上所有工具失效。这一严重回归问题已开放近7周，仅4条评论，受影响用户暂无可行 workaround。
2. **[Issue #7074](https://github.com/agentscope-ai/QwenPaw/issues/7074)**（已关闭，创建于2026-08-16）：运行时频繁崩溃，需刷新页面。虽已关闭，但该问题反映了反复出现的稳定性模式，可能仍影响新版本，补充根因文档将对用户有所帮助。
3. **[Issue #7809](https://github.com/agentscope-ai/QwenPaw/issues/7809)**（开放中，创建于2026-09-16）：工具授权卡片与通知为硬编码英文，缺乏国际化支持。这一可访问性缺陷已开放近一个月，与项目多语言路线相悖。
4. **[Issue #8082](https://github.com/agentscope-ai/QwenPaw/issues/8082)**（开放中，创建于2026-10-02）：心跳功能文档缺失运行时语义说明（静默行为、并发、AGENTS.md章节）。该文档缺口导致用户困惑，解决成本极低。
5. **[PR #7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)**（开放中，创建于2026-09-09）：小型修复，在回退分类器中增加对llama-server和DashScope音频拒绝错误的识别。尽管属于S级低风险高收益的稳定性修复，已开放超过一个月仍未合并。

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报（2026-10-12 当周）
数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 近7天概览
过去7天内，ZeroClaw 开发节奏平稳，共更新50个 issue（41个处于开放/活跃状态，9个已关闭）、50个 pull request（47个处于开放状态，3个已合并/关闭），无新版本发布。项目工作重点围绕安全加固、运行时稳定性以及插件生态成熟度展开，全力推进 v0.8.6 和 v0.9.0 的版本里程碑。其中相当一部分工作用于修复代理身份作用域、沙箱配置中的 S0/S1 级安全漏洞，同时测试可靠性优化、持久化内存一致性等跨领域工作也在持续推进。整体来看，项目处于版本发布前的加固阶段，既在积极交付新功能，也在主动修复稳定性与安全问题。

---

## 2. 版本发布
近7天无新版本发布。

---

## 3. 项目进展（已合并/关闭项）
本周期内共合并/关闭3个 pull request，均为定向修复与优化：
- **PR #11531（已关闭，bug 修复）**：修复了 Tailscale 隧道 URL 上报问题，现已正确显示新版 Tailscale CLI 实际使用的 HTTPS 443 端口，而非错误地广播本地端口。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)
- **Issue #11166（已关闭，功能）**：实现了图片批量淘汰机制，当单请求图片数超出上限时触发该逻辑，减少了长会话中提示词缓存的频繁重写。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11166)
- **Issue #10700（已关闭，bug 修复）**：解决了成本统计作用域异常问题——此前守护进程生命周期内的会话 ID 导致无法按对话拆分消费数据。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)
- 其他已关闭项包括 ZeroCode UI 修复（Issues #11586、#10741）、MCP 参数序列化修复（Issue #11371）、不稳定测试修复（Issue #11180）以及代码清理（Issue #11545）。

---

## 4. 社区热议话题
讨论热度最高的议题体现了社区对测试可靠性、项目治理以及核心子系统成熟度的关注：
1. **Issue #9965（15条评论，开放中）**：该任务旨在加固并行运行时门禁下由运行时生成的可执行测试固件，起因是 cron 调度器测试出现偶发失败。这反映出随着代码规模扩大，社区对测试不稳定影响 CI 可靠性的担忧。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
2. **Issue #8692（15条评论，开放中）**：这是维护者用于跟踪 RFC 与设计问题决策队列的入口，也是架构与政策决策的核心协调点。该议题的高活跃度表明社区对项目治理与设计评审流程的参与度正在提升。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
3. **Issue #8891（10条评论，开放中）**：这是持久化内存路线图跟踪项，目标是让策展、相关性、可操作性层面达到同类代理运行时的同等水平。这说明用户对健壮的跨会话记忆能力需求强烈，而这正是个人 AI 代理的核心差异化特性。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)
4. **Issue #9887（7条评论，开放中）**：用户请求对超尺寸图片进行降级缩放而非直接丢弃，同时支持用0值关闭多模态限制。这反映出实际使用中，用户对生硬的媒体处理限制感到不满。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)

---

## 5. Bug 与稳定性
近7天报告/更新的 bug，按严重程度排序如下：
### S0（严重 / 数据丢失 / 安全风险）
- **Issue #9646**：会话/通道读写工具未按代理划分所有权作用域，导致任意代理都能访问其他代理的会话或 Discord 通道。暂无公开关联的修复 PR；已纳入 v0.9.0 版本规划。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)
- **Issue #9647**：知识图谱未按代理归属，存在跨代理读取/修改知识数据的风险。暂无公开关联的修复 PR；已纳入 v0.9.0 版本规划。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)

### S1（工作流阻塞）
- **Issue #11615**：Telegram 发送路径忽略 429 `retry_after` 响应头，导致立即重试，进一步加剧限流并丢失回复。截至本报发布时，暂无关联修复 PR。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)
- **Issue #11579**：`save_dirty` 会错误地给未迁移的 V1/V2 配置打上 `schema_version = 3` 标记，导致迁移流程被跳过，引发代理配置丢失。截至本报发布时，暂无关联修复 PR；已纳入 v0.9.0 版本规划。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)

### S2（功能降级）
- **Issue #11594**：文档中说明的 `firejail_args` 配置项从未在 firejail 调用时生效，导致沙箱自定义功能失效。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)
- **Issue #11204**：OpenRouter 消费统计显示为 $0.00，且所有 token 都被错误归类为免费额度，导致 OpenRouter 用户的成本追踪功能失效。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)
- **Issue #11420**：SQLite 会话后端会在每轮对话时重写所有消息的 `created_at` 时间戳，导致单条消息的时间戳精度丢失。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)

---

## 6. 功能需求与路线动态
以下是用户提出的核心功能需求，以及大概率会在后续版本中上线的路线图事项：
- **WASM 插件生态（目标版本 v0.8.6）**：多个进行中的 PR（如 #11347、#11311、#11309、#11262）表明 v0.8.6 将推出完整的插件体系，涵盖制品分发、安装/更新流程、快速上手集成，以及 TLS 和出口控制方面的安全加固。
- **工具默认配置优化（目标版本 v0.8.6/v0.9.0）**：PR #11221 提议新安装实例默认启用11个内置工具，并提供全权限开关，标志着项目正转向更易用、更具指导性的默认配置。
- **知识库 / RAG（v0.9.0 候选功能）**：关于文档检索能力的 RFC #11235 与 #8891 跟踪的持久化内存工作高度契合，很可能在 v0.8.6 之后被列为优先开发功能。[查看 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)
- **A2A 协议 crate**：针对独立 `zeroclaw-a2a` crate 的 RFC #11254 正式明确了代理间通信能力，这是项目长期的架构优先级方向。[查看 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)

---

## 7. 用户反馈汇总
本周 issue 中反馈的真实用户痛点与使用场景：
- **媒体处理体验差**：用户反映严格的图片尺寸限制（Issue #9887）与生硬的图片数量上限机制，给实际多模态工作流造成了阻碍，希望能通过缩放实现更平滑的降级处理。
- **成本统计不可靠**：多个报告（#11204、#11613、#10700）指出，第三方服务商的成本统计存在失效或不准确问题，这对自托管和多服务商用户来说是核心痛点。
- **沙箱配置功能缺失**：未生效的 `firejail_args` 选项（Issue #11594）说明用户有自定义沙箱安全设置的需求，但目前文档宣传的功能无法正常使用。
- **通道功能不完善**：邮件的抄送/全部回复功能受限（Issue #9506）、Telegram 限流处理存在 bug（Issue #11615），表明用户将 ZeroClaw 用于生产级通信工作流，期望其通道能力与标准客户端对齐。
- **UI/UX 体验不畅**：ZeroCode 侧边栏状态会在重启后重置（Issue #11586）、对话输入框在轮次交互中丢失焦点（PR #11660），反映出用户对更流畅、有状态的用户体验的需求。

---

## 8. 待办事项关注
需要维护者关注的长期高优先级事项：
1. **Issue #7432（开放中，6条评论，创建于 2026-06-09）**：v0.8.6 与 v0.9.0 的运行时和网关交付跟踪项。作为两个即将发布版本的核心路线图跟踪入口，该议题历史较久但评论量偏少，或许需要更频繁的状态更新来协调整体贡献者节奏。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)
2. **PR #10391（开放中，创建于 2026-08-26）**：代理工具边界加固，用于在多轮对话中保留工作区、工具上限与命令策略。这项 S0 级安全修复已开放超过6周，目前标记为等待作者处理，可能会影响 v0.9.0 的安全承诺交付节奏。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)
3. **PR #10407（开放中，创建于 2026-08-27）**：持久会话提示词附件功能。这项大型跨模块功能已处于评审阶段超过6周，可能需要提升优先级，以解锁后续依赖它的内存与会话持久化相关工作。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)
4. **Issue #9506（开放中，2条评论，创建于 2026-07-28）**：邮件通道的抄送与全部回复支持。这项中优先级的通道功能一直积压在待办列表中，活跃度极低，但对邮件集成用户来说是核心功能缺口。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9506)

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*