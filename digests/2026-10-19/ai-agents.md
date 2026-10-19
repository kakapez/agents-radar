# OpenClaw 生态周报 2026-10-19

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-19 01:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报摘要
**日期：2026-10-19 | 报告周期：2026-10-12 至 2026-10-19**

---

## 1. 近7天概览
本周OpenClaw保持高速开发节奏，共更新500个Issue（436个开放/进行中，64个已关闭）、500个Pull Request（253个开放，247个已合并/关闭），发布9个新版本。团队优先推进Gateway可靠性与更新健壮性相关工作，推出多个稳定版与Beta版构建，重点降低内存压力、修复跨平台更新失败问题，并提升多智能体编排稳定性。社区活跃度依旧高涨，讨论集中在关键性能回退、MCP与工具权限的安全加固，以及更优的上下文控制和可观测性相关功能需求。项目整体健康状况良好，当前重点聚焦于解决高优先级稳定性问题，同时迭代优化性能与开发者体验。

---

## 2. 版本发布
本周OpenClaw共发布9个新版本，覆盖稳定版、Beta版和扩展稳定版渠道：

### 稳定版发布
- **v2026.10.5**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5)）：核心升级`openclaw update`命令的可靠性。该命令现已可在不同设备类型、文件系统、pnpm 12、Windows提权及macOS登录shell环境下成功执行。同时新增对过期交接租约和包激活日志的清理能力，避免安装进程挂起，且能在Gateway繁忙或状态异常时优雅恢复。
- **v2026.10.4**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.4)）：修复系统睡眠或时钟跳变后Gateway无法正常存活的问题（此前会导致误判心跳过期并触发不必要的重启，#170790）。同时解决了Gateway关闭/重启时挂起的问题。贡献者：@AnvinaLI、@sgh6688、@waynegault、@RomneyDa。
- **v2026.10.3**（[发布说明](https://docs.openclaw.ai/releases/2026.10.3)）：包含90次提交、79个PR、99位贡献者——完整变更日志见官方文档。
- **v2026.10.2**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.2)）：修复从2026.10.1稳定版首次升级无法干净完成的问题，消除原地更新成功后的误报错误，解决Windows、克隆文件系统及私有Node路径下更新停滞/回滚的问题（#168849、#169031）。
- **v2026.9.33**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.9.33)）：仅含Gateway的`extended-stable`（相当于LTS）版本，包含关键安全补丁、可靠性/性能修复及新模型支持，均从2026年9月代码库向后移植。

### Beta版发布
- **v2026.10.10-beta.1**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.1)）：Gateway性能重大升级。通过将数据库任务迁移至工作线程，减少了聊天回合、会话列表、启动及空闲Gateway操作中的SQLite与主线程负载，提升了高负载主机和大规模智能体集群下的响应速度（#167965、#168002、#168093）。
- **v2026.10.5-beta.4**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.4)）：进一步优化更新可靠性：修复macOS下别名临时目录导致的更新超时问题，systemd用户安装模式可回收废弃的运行时环境，pacman/FreeBSD安装会优先使用原生包管理器，且能提前检测快照失败以避免部分更新。
- **v2026.10.5-beta.3**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3)）：确保更新后Gateway保持运行：pnpm 12安装会将Gateway服务和`openclaw`启动器保留在持久路径下，Windows更新支持限定的计划任务账户和已验证驱动，macOS可接受受保护的Bun服务配置。
- **v2026.10.5-beta.2**（[发布页](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2)）：新增针对过期交接租约、已完成回执及旧版2026.9.8恢复记录的更新恢复逻辑（避免`update-recovery-pending`停滞），更新过程中保留服务堆内存限制与webhook监听器，并修复Windows短路径更新失败问题。

### 破坏性变更与迁移说明
本周发布的版本未记录明确的破坏性变更。使用扩展稳定版v2026.9.x的用户可直接升级至v2026.10.x稳定版，无需手动迁移。但Beta渠道用户请注意：v2026.10.10-beta.1包含数据库工作线程变更，大型会话数据集首次启动时可能需要重建索引。

---

## 3. 项目进展
本周合并/关闭的247个PR中，关键进展覆盖性能优化、Bug修复与代码库健康度提升：

### 性能与Gateway优化
- **MCP SDK v2迁移完成**（[PR #175403](https://github.com/openclaw/openclaw/pull/175403)）：会话与节点MCP客户端已迁移至拆分后的SDK v2包，完成了内部客户端、传输层、验证器及Gateway适配器的全部迁移工作。
- **状态租用心跳逻辑简化**（[PR #175805](https://github.com/openclaw/openclaw/pull/175805)）：精简了心跳存活协议中冗余的持久租约授权逻辑、同步ACK确认与看门狗开销。
- **控制UI性能提升**：多个PR（[#176696](https://github.com/openclaw/openclaw/pull/176696)、[#176702](https://github.com/openclaw/openclaw/pull/176702)）通过延迟非活动聊天视图加载与实时Talk会话初始化（按需加载），减小了冷启动JavaScript包体积，解决了性能预算超标的问题。

### Bug修复
- **流式回复CPU性能回退已修复**（[PR #175448](https://github.com/openclaw/openclaw/pull/175448)）：解决了因模型控制令牌（如`<|assistant|>`）泄漏导致的CPU二次方增长问题——该问题会使每次增量更新都对完整回复进行重新扫描（65KB回复最多延迟23.4秒）。修复#175444。
- **Discord共同作者归属修复**（[PR #176513](https://github.com/openclaw/openclaw/pull/176513)）：避免无关用户被计入Discord主频道共享任务的贡献者中，确保请求者归属正确。
- **Telegram回调失败修复**（[PR #176679](https://github.com/openclaw/openclaw/pull/176679)）：解决了终端回调失败（查询过期、权限丢失）导致所有聊天更新阻塞的问题。关联#169176。
- **GMI GPT-5.6工具调用修复**（[PR #176709](https://github.com/openclaw/openclaw/pull/176709)）：解决了`gmi/openai/gpt-5.6-sol`模型因`reasoning_effort`参数无效导致工具使用返回400错误的问题。

### 代码库健康度
- **低价值测试批量清理**（[#176648](https://github.com/openclaw/openclaw/pull/176648)、[#176667](https://github.com/openclaw/openclaw/pull/176667)、[#176703](https://github.com/openclaw/openclaw/pull/176703)）：合并了重复的测试固件，移除了Gateway、智能体、UI及插件中的冗余用例，同时保留核心契约校验，降低维护成本。

---

## 4. 社区热点话题
本周讨论最活跃的Issue集中在Gateway稳定性、多智能体可靠性及安全/权限控制方面：

1. **严重Gateway内存泄漏**（[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)，40条评论，P0）：本周参与度最高的Issue，报告RSS内存占用在2-3天内从350MB增长至15.5GB，导致OOM崩溃和反复重启。社区正在分享不同工作负载和平台下的复现数据，维护者正优先开展根因分析。
   
2. **子智能体完成结果静默丢失**（[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)，31条评论，P1）：用户反馈存在多种失败场景，子智能体任务结果会被静默丢弃，无重试、无通知、超时也不会自动重启——对Telegram机器人部署影响尤其严重。讨论聚焦于编排可靠性与失败检测。

3. **大规模部署下Gateway事件循环阻塞**（[Issue #119720](https://github.com/openclaw/openclaw/issues/119720)，25条评论，P1）：同步的智能体持久化与会话记录维护会阻塞大规模部署下的事件循环。目前已有部分修复落地，但社区正在推动持久化路径的全面异步重构。

4. **写入工具追加模式缺失**（[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)，16条评论，P0）：独立的cron会话会覆盖共享工作区文件（如每日内存日志），因为`write`工具缺少追加模式，导致数据静默丢失。用户呼吁将原生追加支持作为高优先级数据完整性修复项。

5. **MCP SecretRef支持**（[Issue #76493](https://github.com/openclaw/openclaw/issues/76493)，11条评论，4 👍）：运维人员请求在`mcp.servers[].env`和`headers` schema中支持SecretRef对象，以遵循密钥间接引用的安全最佳实践，而非要求明文值。这是本周获赞最多的功能讨论。

---

## 5. Bug与稳定性
本周报告或处于活跃状态的高严重度Bug，按优先级排序：

| 严重度 | Issue | 描述 | 修复状态 |
|----------|-------|-------------|------------|
| P0 | [#91588 Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588) | RSS数日内增长至15.5GB，导致OOM崩溃与重启循环 | 暂无修复PR；维护者正在积极调查 |
| P0 | [#40001 Write Tool Missing Append Mode](https://github.com/openclaw/openclaw/issues/40001) | Cron会话覆盖共享文件，导致数据静默丢失 | 暂无修复PR；需产品层确定实现方案 |
| P0 | [#126821 SQLite Corruption on WSL2](https://github.com/openclaw/openclaw/issues/126821) | 全新重建的数据库在15-24小时内出现损坏，导致Gateway进入“瘫痪”模式 | 暂无修复PR；2026.8.1-beta.2引入的回退 |
| P0 | [#137085 macOS App Device Identity Stuck](https://github.com/openclaw/openclaw/issues/137085) | 升级后（7.1→8.2）设备身份卡在“native-importing”状态，原生Gateway握手超时 | 暂无修复PR；macOS版本发布阻塞项 |
| P0 | [#137177 WeCom Plugin Install Failure](https://github.com/openclaw/openclaw/issues/137177) | 内置`@wecom/wecom-openclaw-plugin@2026.7.2`无法成功安装 | 暂无修复PR |
| P1 | [#44925 Silent Subagent Completion Loss](https://github.com/openclaw/openclaw/issues/44925) | 子智能体结果被丢弃，无重试或通知 | 暂无修复PR；需产品层确定重试策略 |
| P1 | [#119720 Event Loop Blocking at Scale](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞大规模集群下的Gateway事件循环 | 部分修复已落地（#140231、#138984）；全面重写正在进行中 |
| P1 | [#157989 Plugin Source Capture SSD Wear](https://github.com/openclaw/openclaw/issues/157989) | 冗余的插件文件复制导致每次CLI命令写入1.1-1.4GB数据，每次Gateway启动写入6.5GB数据 | 暂无修复PR；2026.9.5引入的回退 |
| P1 | [#148707 Reply Loss on Displaced Turns](https://github.com/openclaw/openclaw/issues/148707) | 同一会话第二次运行会挤掉进行中的回合，导致回复丢失，报“no active tool authority snapshot”错误 | 暂无修复PR；2026.9.4引入的回退 |
| P1 | [#132303 Tool Deny Not Enforced for claude-cli](https://github.com/openclaw/openclaw/issues/132303) | `agents.list[].tools.deny`配置在claude-cli后端被忽略，导致危险工具仍处于启用状态 | 暂无修复PR；安全边界问题 |

近期已修复的值得关注的Bug包括SSH进程挂起回退（[#136183](https://github.com/openclaw/openclaw/issues/136183)，已关闭）和Android Talk归档会话复用问题（[#175027](https://github.com/openclaw/openclaw/issues/175027)，已关闭）。

---

## 6. 功能需求与路线图信号
本周用户最关注的功能需求，及近期纳入开发的可能性：

1. **分层引导文件加载**（[Issue #22438](https://github.com/openclaw/openclaw/issues/22438)，19条评论）：实现渐进式上下文控制，避免将所有工作区引导文件加载到每个会话（子智能体、cron任务）中，减少token浪费。已有关联PR处于开放状态，很有希望纳入2026.10.x或2026.11 Beta周期。
2. **MCP SecretRef支持**（[Issue #76493](https://github.com/openclaw/openclaw/issues/76493)，4 👍）：MCP服务器配置的安全加固。鉴于其明确的安全价值与社区支持，很可能在即将发布的次版本中优先开发。
3. **按模型用量统计**（[Issue #13219](https://github.com/openclaw/openclaw/issues/13219)，8条评论）：原生成本追踪与模型组合优化。已有关联PR开放，说明开发正在进行中——预计将在2026.11版本中落地。
4. **OpenRouter动态模型发现**（[Issue #10687](https://github.com/openclaw/openclaw/issues/10687)，4 👍）：为快速迭代的服务商提供完全动态的模型目录更新。这是一项讨论已久的增强功能，随着模型目录不断扩大，需求也在增长；预计在6个月路线图内。
5. **智能体触发的上下文压缩**（[Issue #6757](https://github.com/openclaw/openclaw/issues/6757)，2 👍）：为智能体提供自压缩工具，用于管理自身的上下文窗口。这是一项广受欢迎的体验优化需求，应用场景明确，预计将在下一个功能版本周期中评估。
6. **压缩/LCM备用模型链**（[Issue #56781](https://github.com/openclaw/openclaw/issues/56781)，7条评论）：将现有聊天备用链扩展至压缩和摘要模型，避免主压缩模型故障时会话无限制增长。与当前正在开展的可靠性工作方向一致，可能很快会启动开发。

---

## 7. 用户反馈总结
### 痛点
- **多智能体部署的可靠性缺口**：运行智能体集群的用户反馈，普遍存在消息静默丢失、并发配置覆盖风险（[#43367](https://github.com/openclaw/openclaw/issues/43367)）和子智能体

---

## 横向生态对比

# 跨项目个人AI助手/智能体开源生态报告
*报告日期：2026-10-19 | 来源：5个核心项目的社区周报汇总*

---

## 1. 生态概览
开源个人AI助手与智能体生态正处于快速成熟阶段，头部项目同时推进底层架构重构、生产级多智能体部署的可靠性加固，以及第三方扩展与渠道集成生态的拓展。核心项目覆盖多个方向：从全栈、高迭代速度、以网关为核心的平台（OpenClaw、QwenPaw），到架构迁移后的稳定化工作（Hermes Agent），再到安全优先的插件运行时系统（ZeroClaw），以及社区驱动、聚焦扩展的实现（IronClaw）。整体来看，用户最核心的需求集中在网关稳定性、多智能体编排可靠性，以及工具与插件执行的安全边界可预测性。自托管模型支持、全渠道连接能力，以及闭源智能体平台的低成本可定制替代方案，是推动生态增长的主要动力。

---

## 2. 活跃度对比
| 项目 | 更新的Issues（开启/关闭） | 更新的PRs（开启/合并） | 本周发布版本 | 项目健康度评分（1–10） |
|---------|-------------------------------|---------------------------|--------------------|------------------------------|
| OpenClaw | 500（436 开启 / 64 关闭） | 500（253 开启 / 247 合并） | 9（稳定版、测试版、扩展稳定版） | 9.0 |
| Hermes Agent | 50（30 开启 / 20 关闭） | 50（46 开启 / 4 合并） | 4（重大里程碑版本、补丁、热修复） | 7.2 |
| IronClaw | 4（3 开启 / 1 关闭） | 10（8 开启 / 2 关闭） | 0 | 6.5 |
| QwenPaw | 50（40 开启 / 10 关闭） | 50（40 开启 / 10 合并） | 3（稳定版 + 2 个测试版） | 8.3 |
| ZeroClaw | 50（44 开启 / 6 关闭） | 50（42 开启 / 8 合并） | 1（小版本发布） | 8.0 |

*健康度评分基于Issue/PR处理效率、发布节奏、未解决严重缺陷的等级，以及维护者响应速度计算得出。*

---

## 3. OpenClaw的定位
### 相较于同类项目的优势
OpenClaw是该领域内迭代速度与成熟度的明确领先者，其Issue和PR处理量是第二梯队项目的10倍，PR合并率达49.4%（为所有项目最高），并拥有覆盖稳定版、测试版、面向企业用户的扩展稳定版（LTS）的多渠道发布流水线。它拥有最成熟的多智能体编排技术栈、最大的活跃贡献者群体（单个稳定版版本就有99位贡献者参与），以及最广泛的平台支持（Windows、macOS、Linux、BSD、移动端配套应用）。

### 技术路径差异
与聚焦UI优先或扩展优先架构的同类项目不同，OpenClaw的开发以网关可靠性为核心差异化优势：本周工作重点是提升边缘文件系统与跨平台场景下的更新鲁棒性、降低内存压力、将SQLite性能负载卸载到工作线程，以及完成MCP SDK v2迁移以实现标准化的智能体传输协议。其安全路线图以运维侧加固为核心（MCP SecretRef支持、工具权限边界），而非ZeroClaw和IronClaw采用的沙箱化插件运行时模型。

### 社区规模对比
OpenClaw的社区规模比第二梯队项目大一个数量级：其优先级最高的P0内存泄漏问题有40条评论，相比之下Hermes Agent最受关注的桌面端缺陷有12条评论，ZeroClaw的热门社区讨论仅有5条。它的贡献者群体也最多元，维护者主导的工作流与活跃的社区功能PR、缺陷报告并存，覆盖企业、爱好者和自托管用户群体。

---

## 4. 共同技术聚焦领域
本周有3个及以上项目共同推进的6项跨领域重点方向：
1. **网关稳定性与性能**  
   *涉及项目：OpenClaw、Hermes Agent、ZeroClaw*  
   这三个以网关为核心的项目都在投入资源减少事件循环阻塞、修复状态损坏问题，并提升进程生命周期可靠性。OpenClaw正在优化SQLite工作负载与心跳逻辑；Hermes Agent正在稳定其刚合并的统一网关运行时；ZeroClaw正在推进v0.9.0版本的第三阶段网关分离路线图。

2. **MCP（模型上下文协议）生态拓展**  
   *涉及项目：OpenClaw、IronClaw、QwenPaw、ZeroClaw*  
   MCP已成为智能体工具/扩展集成的事实标准。OpenClaw完成了内部MCP SDK v2迁移；IronClaw正在评估第三方托管式MCP配套扩展；QwenPaw正在调试DashScope MCP商店驱动的兼容性问题；ZeroClaw推出了基于WASM的MCP插件宿主，附带经过验证的 registry 软件包。

3. **多智能体编排可靠性**  
   *涉及项目：OpenClaw、QwenPaw*  
   两个项目都报告了多智能体工作流中存在高优先级的静默失败问题：OpenClaw的P1 Issue追踪了子智能体完成结果丢失的问题，QwenPaw的高严重级缺陷涉及智能体间调用被取消但无日志记录原因的问题。两个社区都将失败检测、重试策略和编排可观测性列为优先工作。

4. **自托管/本地模型兼容性**  
   *涉及项目：Hermes Agent、IronClaw、QwenPaw、ZeroClaw*  
   五个项目中有四个正在推进本地/自托管推理提供商的相关开发或缺陷修复。ZeroClaw正在修复远程端点的llama.cpp URI解析问题；QwenPaw解决了OpenCode API兼容性问题，支持使用本地模型进行离线部署；Hermes Agent正在对齐DeepSeek和OpenRouter的提供商参数支持；IronClaw正在追踪DeepSeek-V4-Flash等开源模型的基准测试质量。

5. **工具与插件的安全边界加固**  
   *涉及项目：OpenClaw、ZeroClaw*  
   两个项目都设有高优先级的安全工作流，用于搭建工具执行防护机制。OpenClaw正在解决MCP密钥管理和工具拒绝列表执行的漏洞；ZeroClaw正在修复允许命令绕过的漏洞，并为插件和技能运行时添加子进程内存/执行限制。

6. **跨平台更新与安装可靠性**  
   *涉及项目：OpenClaw、Hermes Agent、QwenPaw*  
   三个项目都报告了用户遇到的平台特定更新/安装失败痛点：OpenClaw发布了5个稳定/测试版本，聚焦提升跨平台更新的鲁棒性；Hermes Agent修复了Microsoft Store应用构建问题和macOS上launchd网关停机问题；QwenPaw修复了Windows上的陈旧PID探测错误和ZIP文件名编码bug。

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **核心聚焦** | 企业级网关可靠性、大规模多智能体编排 | 跨终端（CLI/TUI/桌面/云）统一会话一致性 | 声明式扩展生态、第三方配套集成 | 控制台用户体验、全渠道企业工作流、本地模型支持 | 安全WASM插件运行时、零信任智能体执行 |
| **目标用户** | 企业运维人员、大规模智能体集群部署者、高级用户 | 桌面/消费级AI助手用户、跨平台爱好者 | 扩展开发者、个人消息智能体用户 | 中国市场企业团队、自托管工作流搭建者 | 注重安全的运维人员、插件生态管理员 |
| **技术架构** | 单体网关 + SQLite持久化、基于MCP的智能体传输 | 重构后的统一网关运行时、多客户端共享会话状态 | Rust核心 + Reborn声明式扩展框架 | Hub/worker分布式模式、渠道优先的集成层 | 模块化运行时 + WASM沙箱化插件宿主、验证式registry |
| **核心差异化** | 生产级多智能体部署成熟度最高、平台支持最广泛 | 所有客户端终端的统一会话模型 | 极简核心、社区驱动的扩展增长 | 一流的控制台用户体验、深度的中国企业渠道集成 | 第三方插件执行的安全边界最强 |

---

## 6. 社区发展势头与成熟度
这些项目可分为三个不同的成熟度与迭代速度梯队：
### 第一梯队：高迭代速度、生产级成熟
- **OpenClaw**：该领域最成熟的项目，持续保持高吞吐量，拥有成熟的发布流水线，工作重点是渐进式的可靠性与性能提升，而非架构重构。它是唯一为企业用户提供类LTS扩展稳定版发布渠道的项目。
- **QwenPaw**：增长迅速，在面向用户的功能、渠道集成和缺陷修复方面投入均衡。其强大的贡献者基础和清晰的前进势头，使其成为企业和自托管场景下快速成熟的替代方案。

### 第二梯队：架构变更后稳定阶段
- **Hermes Agent**：处于v0.22.0“阈值版本”统一网关重构后的稳定阶段。当前大部分工作集中在解决迁移带来的回归问题，本周仅合并4个PR（是活跃项目中合并率最低的）。它拥有庞大的贡献者基础，但近期迭代速度因优先修复缺陷而受到限制。
- **ZeroClaw**：迭代稳定、规划清晰，路线图明确（v0.8.x插件加固、v0.9.0网关分离）。功能开发与安全加固工作均衡，发布节奏稳定，贡献者生态不断壮大。

### 第三梯队：维护模式、社区驱动
- **IronClaw**：活跃度低，本周无版本发布，也无功能PR合并。工作仅限于自动化依赖更新和少量社区贡献的功能提案。它的活跃贡献者群体最小，待办事项审核周期最长。

---

## 7. 趋势信号
以下行业趋势在整个生态中清晰可见，对AI智能体开发者具有实际参考价值：
1. **网关架构成为新的竞争战场**  
   所有头部项目都在向集中式网关模型收敛，将其作为智能体系统的核心，差异化体现在可靠性、大规模性能和跨终端一致性上。开发智能体工具的开发者应优先考虑MCP兼容性和网关原生设计，以契合生态发展方向。

2. **MCP正成为通用扩展标准**  
   五个项目中有四个正在积极投入MCP支持，用于工具、插件和第三方集成，取代项目特定的扩展API。对于工具和服务提供商而言，现在构建兼容MCP的接口，就能以最低的集成成本覆盖最广泛的生态范围。

3. **多智能体可靠性是生产落地的最大障碍**  
   静默数据丢失、子智能体结果丢失、未被观测到的编排失败，是成熟项目中最严重的痛点。构建多智能体系统的开发者应将失败可观测性、幂等任务执行和明确的重试策略作为基础功能，而非事后补充的内容。

4. **自托管与开源模型支持已成为必备能力**  
   从爱好者到企业团队，所有用户群体对本地模型兼容性、离线部署和开源提供商支持的需求都在增长。将开源模型支持作为一等能力（而非次要集成）的智能体平台，正在俘获增长最快的用户群体。

5. **安全加固正在左移至运行时设计阶段**  
   头部项目正在从基础的工具允许/拒绝列表，转向运行时层面的安全：沙箱化WASM插件、密钥引用间接寻址、子进程资源限制。构建智能体平台的开发者应将安全边界设计到核心运行时架构中，因为后期加装的安全控制会带来无法解决的绕过风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报
*2026年10月19日当周 | 代码仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)*

---

## 1. 近7天概览
本周Hermes Agent开发强度较高，核心工作围绕`feat/unified-gateway-runtime`（统一网关运行时）合并后的稳定性修复展开。项目本周共更新50个Issue（30个开放、20个已关闭）和50个PR（46个开放、4个已合并/关闭），同时发布4个新版本，涵盖重大里程碑版本到热修复补丁。项目整体处于稳定阶段：核心v0.22.0「Threshold Release」引入了大规模架构变更，当前工作主要处理此次迁移带来的回归问题和边界场景。社区参与重点聚焦在桌面客户端可靠性、跨平台兼容性以及特定服务商适配修复。

---

## 2. 版本发布
本周共发布4个新版本，涵盖重大里程碑版本、补丁汇总和热修复：

### v0.22.2（2026年10月15日）
- **类型：** 热修复版本
- **核心变更：** 修复v0.22.1的构建错误——该版本由错误的提交构建，包含了未发布的网关功能，导致Microsoft Store应用卡在「正在连接」状态。本版本恢复了v0.22.1原定的功能集。
- **已知问题：** 在v0.22.1网关上运行过的会话可能存在残留状态问题（源数据中发布说明被截断）。
- [版本链接](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2)

### v0.22.1（2026年10月14日）
- **类型：** 补丁版本（已被v0.22.2取代）
- **核心功能：** Windows Store修复、插件更新，以及为Nemotron Super 3.5提供默认参数支持。
- [版本链接](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.1)

### v0.22.0 — The Threshold Release（2026年10月13日）
- **类型：** 重大里程碑版本
- **变更规模：** 相比v0.21.0，包含约24200次提交、约6080个合并PR、约15600个文件变更、约204万行新增、约114万行删除、约7180个关闭Issue和约2520位贡献者。
- **核心主题：** 统一网关运行时架构，集中管理CLI、TUI、桌面端和云端的会话。
- [版本链接](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0)

### v0.21.7（2026年10月11日）
- **类型：** 稳定版补丁汇总
- **核心变更：** 将v0.21.6以来合并的约204个PR汇总为全平台稳定版本，支持macOS Apple Silicon、Windows、Microsoft Store/MSIX、安装包、Docker、Hermes Cloud。
- [版本链接](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7)

---

## 3. 项目进展
本周仅合并/关闭4个PR，符合稳定阶段特征——大部分网关相关修复工作仍在评审中。已完成工作和待合并PR的关键进展如下：
1. **统一网关合并后修复（第10包）：** 针对Issue #140719的跟踪工作流中，已解决网关进程行为、客户端延迟、凭据/设置、桌面会话列表和消息排序相关的41个问题，减少了v0.22.0发布带来的严重回归问题。
   - [Issue #140719](https://github.com/NousResearch/hermes-agent/issues/140719)
2. **会话状态与压缩修复：** 关闭了多个高影响会话Bug，包括主动工具结果裁剪损坏对话记录状态（#124102）、压缩会话恢复时仅显示部分历史记录（#140449）、针对压缩消息的回退操作清空实时对话记录（#140635）。
3. **平台特定修复：** 已解决的问题包括macOS时钟校准后worker预留失败（#140580）、运行时降级后launchd网关宕机（#140418），以及Docker懒加载平台安装时MCP服务器断开（正在通过#136015推进）。
4. **服务商兼容性：** DeepSeek V4推理出力对齐（#140696）和OpenRouter `content: null` 处理（#141322）已进入后期评审，将扩展支持的模型生态。

---

## 4. 社区热门话题
按评论数和参与度排序：
1. **#134889: 跟踪：单个网关管理所有本地会话 — 合并后修复**
   - 186条评论，2026-10-19更新 | [链接](https://github.com/NousResearch/hermes-agent/issues/134889)
   - **核心需求：** 统一网关迁移是项目近期影响最大的变更，用户和贡献者高度关注会话归属、跨客户端一致性和桌面应用可靠性相关的回归问题修复。这是v0.22.0之后所有稳定工作的核心协调Issue。

2. **#127621: 桌面应用：助手回复偶尔重复渲染**
   - 12条评论，8 👍，2026-10-18更新 | [链接](https://github.com/NousResearch/hermes-agent/issues/127621)
   - **核心需求：** 核心聊天体验的可靠性是用户的首要优先级。重复回复会降低用户对桌面客户端的信任，也反映出流式传输/渲染的边界问题会影响桌面用户的日常使用。相关报告#132836也跟踪了macOS上的同类偶发问题。

3. **#139161: 网关修复第3包：Ink TUI和桌面会话、命令与实时事件**
   - 7条评论，1 👍，2026-10-19更新 | [链接](https://github.com/NousResearch/hermes-agent/issues/139161)
   - **核心需求：** TUI和桌面客户端用户都希望网关重构后，核心聊天功能（命令执行、实时事件流）能保持功能一致和稳定。该工作流处理两个界面的19个独立Bug，其中12个已在`main`分支修复。

---

## 5. Bug与稳定性
按严重程度排序（P0最高，依次为P1、P2、P3）：

### 严重（P0）
- **#134889: 统一网关合并后修复跟踪**
  - 严重程度：P0 | [链接](https://github.com/NousResearch/hermes-agent/issues/134889)
  - 影响：影响Windows/macOS/Linux上所有本地会话界面（CLI、TUI、桌面端），存在会话状态、消息投递和平台兼容性风险。
  - 修复状态：多个修复包同步推进；4个包已部分或全部完成，仅传统CLI修复就有14+个PR在评审中（#139158）。

### 高（P1）
- **#124102（已关闭）: 主动工具结果裁剪损坏对话记录并导致state.db膨胀**
  - 严重程度：P1 | [链接](https://github.com/NousResearch/hermes-agent/issues/124102)
  - 影响：每次裁剪提交都会重写整个对话记录，导致Windows上状态数据库永久膨胀和对话记录损坏。
  - 修复状态：本周已关闭。

### 中（P2）
1. **#131375: 智能审批守护程序在事件循环线程崩溃，导致所有标记命令升级审批**
   - [链接](https://github.com/NousResearch/hermes-agent/issues/131375)
   - 影响：破坏桌面/服务会话的自动审批工作流，强制用户手动审批每个标记命令。
   - 修复状态：暂无关联修复PR。
2. **#117869: 403 `server_error`响应被视为凭据拒绝，而非可重试错误**
   - [链接](https://github.com/NousResearch/hermes-agent/issues/117869)
   - 影响：对存在上游临时错误的OpenAI兼容中继服务，会造成不必要的凭据失败。
   - 修复状态：讨论中；暂无专门PR。
3. **#140890: TUI关闭时重复按Ctrl+C会中止会话收尾**
   - [链接](https://github.com/NousResearch/hermes-agent/issues/140890)
   - 影响：被中断的会话无法正常完成收尾，可能丢失状态。
   - 修复状态：新上报，暂无修复PR。
4. **#136015: Docker懒加载平台安装丢失MCP SDK，导致已配置的MCP服务器消失**
   - [链接](https://github.com/NousResearch/hermes-agent/issues/136015)
   - 影响：Docker用户首次安装平台依赖后，MCP工具功能失效。
   - 修复状态：开放中，暂无修复PR。

---

## 6. 功能请求与路线图信号
用户提出且正在开发、或大概率近期会纳入的功能：
1. **临时（无痕）聊天（#139390）**
   - [PR链接](https://github.com/NousResearch/hermes-agent/pull/139390)
   - 状态：活跃开发中，支持桌面端、CLI和TUI。符合用户对无持久历史记录的隐私会话的需求。网关稳定后，大概率在下一个次版本中发布。
2. **桌面端子代理服务商/模型下拉菜单（#141312）**
   - [PR链接](https://github.com/NousResearch/hermes-agent/pull/141312)
   - 状态：新开启，从之前的PR #129142中迁移而来。通过下拉菜单替代自由文本输入，优化子代理配置的用户体验。可能在即将发布的桌面端补丁中上线。
3. **巴西葡萄牙语（pt-BR）文档本地化（#68680）**
   - [Issue链接](https://github.com/NousResearch/hermes-agent/issues/68680)
   - 状态：开放功能请求，有社区贡献者参与。CLI已支持pt-BR语言环境，因此文档本地化是拓展葡萄牙语用户群体的自然下一步。
4. **韩语桌面语言环境及配置文件语言持久化（#40716）**
   - [PR链接](https://github.com/NousResearch/hermes-agent/pull/40716)
   - 状态：长期功能PR，本周有更新。扩展对韩语用户的国际化支持，修复配置文件切换时语言重置的问题。

---

## 7. 用户反馈汇总
### 痛点
- **网关迁移回归问题：** 本周大部分用户报告源于v0.22.0的架构变更，包括会话恢复失败、worker会话数据缺失（#140977）、桌面Bots标签页仅显示默认配置文件（#140417）、本地会话TTS失效（#140398）。
- **桌面客户端可靠性：** 偶发的重复回复（#127621、#132836）和大型会话的会话控制超时（#140667）是桌面用户反复反馈的不满点。
- **跨平台边界问题：** Linux用户报告卸载失败残留损坏的systemd单元（#141305）、PipeWire下TTS中断时有杂音（#141320）、配置中`env:`引用误报警告（#141265）。

### 积极信号
- 社区贡献者积极提交服务商兼容性（如OpenRouter、DeepSeek、飞书）和平台特定问题的修复，表明贡献者生态健康。
- 对无痕聊天和扩展国际化等新功能的兴趣，显示出用户对更多使用场景和区域适配的需求正在增长。

---

## 8. 待办关注
需要维护者关注的长期重要Issue/PR：
1. **#107878: 修复服务商逻辑：缺少凭据时失败关闭，而非回退到计费模式**
   - 开启时间2026-09-11，更新时间2026-10-19 | [PR链接](https://github.com/NousResearch/hermes-agent/pull/107878)
   - 理由：这一关乎安全和计费的关键修复，可避免缺少凭据时意外回退到付费服务商，防止用户产生意外费用。该PR已开放超过5周，涉及多个服务商生态，需要优先处理。

2. **#106704: 飞书群组规则热重载，无需重启网关**
   - 开启时间2026-09-09，更新时间2026-10-19 | [PR链接](https://github.com/NousResearch/hermes-agent/pull/106704)
   - 理由：这是飞书平台运营方高度需求的运维改进，可减少群组配置变更的停机时间。该PR已开放超过6周，需要维护者评审以解锁企业飞书用户的使用。

3. **#124313: 修复PM迁移后uv隔离的遗留问题**
   - 开启时间2026-09-26，更新时间2026-10-19 | [PR链接](https://github.com/NousResearch/hermes-agent/pull/124313)
   - 理由：解决包管理器迁移到uv后遗留的兼容性问题，这些问题可能导致引导失败、二进制文件冲突过旧和Windows安装包问题。对跨平台安装可靠性至关重要。

4. **#68680: 为Docusaurus文档站点添加pt-BR语言版本**
   - 开启时间2026-07-21，更新时间2026-10-18 | [Issue链接](https://github.com/NousResearch/hermes-agent/issues/68680)
   - 理由：这是一个社区贡献的本地化请求，已开放3个月未得到维护者回应。推进该需求将扩充葡萄牙语文档，扩大项目在拉丁美洲的用户群体。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报 | 2026-10-19
代码仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 近 7 天概览
截至 2026-10-19 的 7 天内，IronClaw 项目以中度维护性活动为主：共更新 4 个 Issue（3 个开放、1 个关闭）、10 个 Pull Request（8 个开放、2 个关闭），无新版本发布。PR 活动绝大多数为 Rust、GitHub Actions、JavaScript 代码库的自动化依赖更新，说明团队在持续开展基础设施维护工作。功能开发集中在全新消息扩展以及社区提议的扩展生态扩容上，Issue 跟踪则分为基准测试失败分类和用户上报 Bug 修复两类。整体项目健康度稳定，保持着正常的维护节奏，社区也在稳步探索新功能。

---

## 2. 版本发布
近 7 天无新版本发布。

---

## 3. 项目进展
近 7 天无 PR 合并；有 2 个 PR 未合并即关闭，均被更新的批量依赖更新替代：
- [PR #8132](https://github.com/nearai/ironclaw/pull/8132) [已关闭]: `chore(deps): bump the tokio-ecosystem group across 1 directory with 4 updates` — 已被 PR #8141 中更新的 tokio-ecosystem 批量更新替代。
- [PR #8134](https://github.com/nearai/ironclaw/pull/8134) [已关闭]: `chore(deps): bump the everything-else group across 1 directory with 34 updates` — 已被 PR #8142 中扩容的 everything-else 批量更新替代。

报告期内代码库未新增功能或修复 Bug；所有进行中的功能工作仍停留在开放 PR 和提案阶段。

---

## 4. 社区热点
*按评论和反应数量排序（报告统计时所有条目均为 0 条评论、0 个 👍 反应，按与社区使用场景的功能相关性筛选）*
1. **Issue #8136 提案：基于声明式鉴权与出站规则的可选托管式 MCP Plazmi 扩展**  
   [链接](https://github.com/nearai/ironclaw/issues/8136) | 作者：cairn-agent
   - 分析：该提案反映出社区需求：希望将 IronClaw 的托管式 MCP 扩展生态拓展到第三方伴生应用（Plazmi），同时无需在核心宿主中添加厂商特定逻辑。底层需求是提供稳定的声明式扩展接口，让外部服务可独立接入，这与 IronClaw 的 Reborn 扩展设计理念一致。

2. **PR #8127 功能：新增 Sendblue iMessage 与 SMS 扩展**  
   [链接](https://github.com/nearai/ironclaw/pull/8127) | 作者：lookevink
   - 分析：这项社区贡献的功能满足了用户对 IronClaw 原生支持 iMessage/SMS 连接的需求，复用了现有宿主生命周期与对话链路。这体现出用户希望拓展智能体的全渠道消息能力，同时为保障安全，API 凭证仍由宿主统一托管。

3. **Issue #8025 Bug：输入特殊字符时出现异常行为**  
   [链接](https://github.com/nearai/ironclaw/issues/8025) | 作者：kapibarazoku0422-create
   - 分析：这是本期内唯一关闭的 Issue，共有 1 条评论（在所有更新的 Issue 中评论数最高），说明上报者与维护者已开展针对性排查。该 Bug 可能与此前版本的编码回归问题相关，是影响终端用户核心使用体验的可靠性问题。

---

## 5. Bug 与稳定性
*按严重程度排序*
1. **[中等] Issue #8025：输入特殊字符时出现异常行为**  
   [链接](https://github.com/nearai/ironclaw/issues/8025) | 状态：已关闭（更新于 2026-10-18）
   - 详情：输入框中的特殊字符会被剥离或触发错误，疑似与上一版本的编码变更有关。该 Issue 已在报告期内关闭，说明问题已得到解决（现有数据中未关联对应修复 PR）。
   
2. **[低] 基准测试质量回归（Issue #8138、#8135）**  
   - [#8138（2026-10-15 运行）](https://github.com/nearai/ironclaw/issues/8138)：officeqa 测试集有 50 项任务未通过，均判定为 DeepSeek-V4-Flash 模型本身的质量问题（未发现代码缺陷）。
   - [#8135（2026-10-12 运行）](https://github.com/nearai/ironclaw/issues/8135)：officeqa 测试集有 52 项任务未通过，统一判定为模型质量问题，而非 IronClaw 代码问题。
   - 以上为基准测试性能跟踪 Issue，不属于应用稳定性 Bug。

---

## 6. 功能需求与路线图信号
1. **Sendblue iMessage/SMS 扩展（PR #8127）**  
   [链接](https://github.com/nearai/ironclaw/pull/8127)
   - 需求：内置扩展，提供直连 iMessage/SMS 的功能，包括手机号配对、鉴权 webhook、终端回复、已存储私信目标管理等。
   - 落地可能性：中高 — 该 PR 遵循现有宿主生命周期与安全规范（凭证由宿主托管、采用声明式配置），符合 IronClaw 的扩展模型。这也是当前唯一处于开发中的功能类 PR。

2. **Plazmi 托管式 MCP 伴生扩展（Issue #8136）**  
   [链接](https://github.com/nearai/ironclaw/issues/8136)
   - 需求：可选的第三方 Plazmi 伴生扩展，复用现有声明式托管 MCP 鉴权与出站接口，无需在核心代码中添加厂商逻辑。
   - 落地可能性：中等 — 该提案符合 IronClaw 的 Reborn 扩展指导原则，可在不增加核心维护成本的前提下拓展生态。未来更可能作为社区构建的可选扩展提供支持，而非纳入核心内置功能。

---

## 7. 用户反馈汇总
- **痛点：输入编码可靠性**（Issue #8025）：用户在输入中使用特殊字符时会出现功能异常或报错，这属于核心交互流程问题。该 Bug 在上报后约 6 周内得到解决，体现了团队对功能缺陷的响应效率。
- **使用场景：消息智能体集成**（PR #8127）：社区贡献者正在开发扩展，将 IronClaw 打造为 SMS/iMessage 智能体，说明用户对结合个人通信渠道的 AI 助手场景有需求。
- **使用场景：第三方伴生应用集成**（Issue #8136）：外部服务开发者希望基于 IronClaw 的扩展框架集成自有 AI 伴生应用，体现出项目的声明式扩展架构作为平台的价值已得到认可。
- 报告数据集中无明确的用户满意度/不满度评分（所有 Issue 均为 0 个 👍 反应）。

---

## 8. 待办重点关注
因存续时间较长且功能重要性较高，需要维护者关注的条目：
1. **PR #7834: chore(deps): bump the wasm group across 1 directory with 4 updates**  
   [链接](https://github.com/nearai/ironclaw/pull/7834) | 提交时间：2026-08-23 | 状态：开放
   - 风险：这项针对 wasm 生态（wasmtime、wit-component 等）的中等风险、大规模 Rust 依赖更新已开放近 2 个月。wasm 依赖更新若长期搁置，可能累积安全漏洞与兼容性债务，尤其考虑到项目大概率依赖 WASM 实现扩展沙箱机制。

2. **PR #8127: feat: add Sendblue iMessage and SMS extension**  
   [链接](https://github.com/nearai/ironclaw/pull/8127) | 提交时间：2026-10-06 | 状态：开放
   - 风险：这是当前唯一活跃的社区功能 PR，已开放 13 天且无任何评论记录。若未及时评审，可能会打击外部贡献者未来提交功能增强的积极性。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报（2026-10-13 至 2026-10-19）

---

## 1. 近七日概览
本周QwenPaw开发节奏保持高速，共更新50个issue（40个开放，10个关闭）和50个pull request（40个开放，10个合并/关闭），体现了社区参与度活跃，功能开发与bug修复均稳步推进。本周发布3个新版本，包括稳定版v2.2.2和2个beta版本，带来了控制台体验优化、服务提供商兼容性修复以及基础设施升级。项目贡献覆盖核心运行时、渠道集成、控制台前端和跨平台客户端，反映出贡献者群体广泛且活跃。项目整体健康度良好，维护响应及时，用户面向功能和内部稳定性均有明确的推进势头。

---

## 2. 版本发布
本周共发布3个新版本：

### v2.2.2（稳定版）
**核心变更：**
- **控制台与工作区：** 新增6套主题调色板，支持自定义颜色和圆角调节，包含实时预览与偏好设置保存功能（[#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741)）
- 在聊天界面内新增支持身份验证的多标签页终端（发布说明有截断）
- 无破坏性变更报告，属于向后兼容的小版本更新。

### v2.2.2-beta.6
**核心修复：**
- 端到端测试选择器已与当前控制台UI对齐（[#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247)）
- 支持外部数据库路径历史记录与便携备份（[#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246)）
- 依赖版本升级（发布说明有截断）

### v2.2.2-beta.5
**核心修复：**
- 控制台：粘贴长文本时保留草稿内容（[#8119](https://github.com/agentscope-ai/QwenPaw/pull/8119)，修复 [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)）
- 服务提供商：可识别更新的GPT token限制参数（[#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)）
- 控制台重构（发布说明有截断）

---

## 3. 项目进展
本周合并/关闭的10个PR中，完成的工作包括：
- **陈旧PID探测修复：** 修复Windows下`qwenpaw-creator`探测陈旧进程ID时出现的`SystemError`问题（[#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296)，关闭 [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194)）
- **OpenCode API兼容性：** 实现了必需的`x-opencode-session`请求头支持，解决`MissingSessionID`报错（关联 [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531)、[#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)）
- **Tavily API密钥配置：** 在内置`web_search`工具中新增用户自定义Tavily API密钥的配置入口（关闭 [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)）
- **消息导航修复：** 解决了控制台消息导航中目录定位不准确的问题（关闭 [#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251)）
- **文档优化：** 新增Hub模式的Docker部署说明（关闭 [#8256](https://github.com/agentscope-ai/QwenPaw/issues/8256)）
- **默认代理模型修复：** 将已弃用的默认模型从`mimo-v2.5-free`更新为`mimo-v2.6-flash-free`（关闭 [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218)）

---

## 4. 社区热门话题
按评论数排序：

1. **[#8120: 页面频繁加载失败](https://github.com/agentscope-ai/QwenPaw/issues/8120)**（8条评论，已关闭）
   - 用户反馈v2.2.2b4版本在多设备上普遍出现页面加载失败，严重影响使用体验。该问题已在一周内修复。
   - 核心诉求：控制台访问可靠稳定，无间歇性加载错误。

2. **[#8126: 让技能池下载成为可取消的后台任务](https://github.com/agentscope-ai/QwenPaw/issues/8126)**（7条评论，开放中）
   - 为PR #8055的后续跟进；目前大型技能包下载会触发30秒客户端超时并阻塞UI。用户希望增加进度展示和明确的取消功能。
   - 核心诉求：针对大型技能包，提供健壮易用的技能管理功能。

3. **[#8278: 钉钉渠道长消息降级为纯文本](https://github.com/agentscope-ai/QwenPaw/issues/8278)**（6条评论，开放中）
   - 钉钉中超过3500字符的消息会被静默降级为纯文本，导致Markdown和GFM表格渲染失效——这对数据报表场景至关重要。目前未复用`split_text`分片机制。
   - 核心诉求：无论消息长度如何，所有渠道集成的富文本消息格式保持一致。

4. **[#8171: 音频文件传输会永久卡住LM Studio的会话](https://github.com/agentscope-ai/QwenPaw/issues/8171)**（5条评论，开放中）
   - LM Studio对音频输入返回的400错误未被降级分类器识别，导致`send_file_to_user`音频传输会永久破坏会话。
   - 核心诉求：针对不同模型服务商的媒体能力不匹配问题，提供健壮的错误处理和平滑降级机制。

---

## 5. 缺陷与稳定性
按严重程度排序：

### 高严重度
1. **[#8278: 钉钉长消息格式降级](https://github.com/agentscope-ai/QwenPaw/issues/8278)** —— 长消息格式静默丢失会破坏企业用户的核心使用场景。暂无关联修复PR。
2. **[#8228: base64工具输出导致聊天历史膨胀](https://github.com/agentscope-ai/QwenPaw/issues/8228)** —— 文件/截图工具输出以base64存储，导致长聊天记录超过10MB，必然触发控制台30秒超时。暂无关联修复PR。
3. **[#8252: 代理间调用被静默取消](https://github.com/agentscope-ai/QwenPaw/issues/8252)** —— 多代理编排会话中出现成对的`CancelledError`事件，且无记录原因，最终输出为空。暂无关联修复PR。
4. **[#8171: 音频文件导致会话卡住](https://github.com/agentscope-ai/QwenPaw/issues/8171)** —— 影响LM Studio音频工作流的会话破坏性bug。开放PR [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) 已部分解决。

### 中严重度
5. **[#8270: Windows ZIP文件名乱码](https://github.com/agentscope-ai/QwenPaw/issues/8270)** —— Windows ZIP压缩包中的中文文件名解压后出现乱码。修复PR：[#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301)。
6. **[#8313: QQ群消息被静默丢弃](https://github.com/agentscope-ai/QwenPaw/issues/8313)** —— QQ官方机器人的群消息未被分发，因为事件规范仅匹配`GROUP_AT_MESSAGE_CREATE`。暂无关联修复PR。
7. **[#8225: 代理配置热重载时定时任务被取消](https://github.com/agentscope-ai/QwenPaw/issues/8225)** —— 号称“零停机”的代理重载会静默取消运行中的定时任务，且无用户通知。暂无关联修复PR。
8. **[#8213: Hub重启会停止本地运行时并跳过定时任务](https://github.com/agentscope-ai/QwenPaw/issues/8213)** —— Hub重启后不会恢复应保持运行的本地运行时，导致定时任务静默错过调度。暂无关联修复PR。

### 低严重度
9. **[#1612: 自定义渠道配置中数组/对象显示为`[object Object]`](https://github.com/agentscope-ai/QwenPaw/issues/1612)** —— 结构化配置字段的UI渲染bug。修复PR：[#8305](https://github.com/agentscope-ai/QwenPaw/pull/8305)。
10. **[#2882: Matrix配置粘贴时会添加前置空格](https://github.com/agentscope-ai/QwenPaw/issues/2882)** —— 粘贴的凭据包含多余空白字符，导致连接失败。修复PR：[#8304](https://github.com/agentscope-ai/QwenPaw/pull/8304)。

---

## 6. 功能需求与路线图信号
近期落地可能性较高的用户核心需求功能：

1. **技能池下载优化**（[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)） —— 支持可取消的后台下载并展示进度。高可能性：已有活跃讨论，且存在相关前置PR #8055。
2. **Firecrawl网页搜索提供商**（[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)） —— `web_search`的第三个提供商选项，由Firecrawl团队贡献。高可能性：外部贡献者已准备好开发和维护，且遵循现有提供商模式。
3. **DeepSeek Search提供商**（[#8314](https://github.com/agentscope-ai/QwenPaw/pull/8314)） —— 首次贡献者已提交PR，新增支持带发布日期和权威数据的结构化搜索。高可能性：遵循现有`web_search`提供商架构。
4. **模型收藏与简化切换**（[#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)） —— 用户希望增加模型收藏列表，减少切换模型时的点击次数。中等可能性：与近期推出的会话级模型选择功能方向一致。
5. **QQ机器人流式消息支持**（[#8307](https://github.com/agentscope-ai/QwenPaw/issues/8307)） —— 与飞书的流式消息功能对齐。中等可能性：QQ机器人官方API现已支持该能力。

---

## 7. 用户反馈总结
### 痛点
- **可靠性问题：** 页面频繁加载失败（[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)）和媒体处理导致的间歇性会话中断（[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)）是用户不满的主要来源。
- **渠道集成短板：** 钉钉长消息格式丢失（[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)）、QQ群消息丢弃（[#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313)）、飞书配置重载报错（[#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361)），反映出各渠道集成的成熟度参差不齐。
- **易用性摩擦：** 模型切换体验繁琐（[#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)）、Matrix凭据粘贴bug（[#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882)）、Windows ZIP编码问题（[#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)），这些都是本可避免的用户使用障碍。

### 使用场景
- 面向企业工作流的多代理编排（数据报表、任务流水线）
- 基于本地模型的离线/私有部署（DeepSeek R1、Qwen 3/3.5）
- 跨平台访问：鸿蒙原生客户端（[#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)）正在开发中，用户希望提供免费云托管实例（[#8232](https://github.com/agentscope-ai/QwenPaw/issues/8232)）
- 插件生态：第三方插件市场集成与热安装可靠性

### 满意度信号
- 会话级模型选择功能获得正面反馈（[#8310](https://github.com/agentscope-ai/QwenPaw/issues/8310)）
- 用户认可OpenCode API兼容性等关键bug的快速修复（[#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531)）
- 用户对新平台支持（鸿蒙）和更多提供商选项有强烈兴趣

---

## 8. 待办关注
需要维护者关注的长期遗留issue/PR：

1. **[#1453: 离线CoPaw无法连接离线Qwen 3/3.5模型](https://github.com/agentscope-ai/QwenPaw/issues/1453)** —— 自2026年3月开放，仅4条评论，但代表了关键的离线部署场景。用户反馈DeepSeek R1可正常使用，但Qwen模型失败，表明存在提供商特定的兼容性问题。
2. **[#7396: Claude Code第三方代理框架支持状态](https://github.com/agentscope-ai/QwenPaw/issues/7396)** —— 自2026年8月开放，询问Claude Code支持的路线图更新（目前标注为“即将推出”）。用户对扩展代理框架选项有明确需求。
3. **[#7827: 百炼MCP商店streamable_http驱动激活失败](https://github.com/agentscope-ai/QwenPaw/issues/7827)** —— 自2026年9月开放，影响阿里云官方MCP服务集成。根因已明确（裸HTTP 500未被识别为旧协议特征），但暂无关联修复PR。
4. **[#7654: 音频降级/媒体能力分类器优化](https://github.com/agentscope-ai/QwenPaw/pull/7654)** —— 长期开放的PR，部分解决了音频会话卡住类问题。应优先推进，以修复 [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) 及类似bug。
5. **[#8164: 鸿蒙原生客户端](https://github.com/agentscope-ai/QwenPaw/pull/8164)** —— 自10月10日开放的超大尺寸PR，新增完整的原生ArkUI/ArkTS客户端。代表了重要的社区贡献和平台扩展；需要维护者评审并与路线图对齐。

---
*本摘要基于QwenPaw（agentscope-ai/QwenPaw）的GitHub数据生成，统计周期为2026-10-13至2026-10-19。*

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报
*报告日期：2026-10-19 | 项目仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

---

## 1. 过去7天总览
本周ZeroClaw保持高速开发节奏，共更新50个Issue（44个未关闭，6个已关闭）、50个Pull Request（42个未合并，8个已合并/关闭），同时发布了一个新的次版本。开发活动主要集中在插件系统加固、安全边界改进、ZeroCode用户体验（UX）优化，以及v0.8.x和v0.9.0路线图相关的运行时架构工作。项目贡献者参与度高涨，v0.8.6版本周期内共有74位贡献者提交了代码。项目整体健康度稳定，高严重级别Bug正在积极处理，规划的架构里程碑也在稳步推进。

---

## 2. 版本发布
### v0.8.6
**发布链接：** [ZeroClaw v0.8.6](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.6)
这是一个聚焦插件、身份认证和运行时所有权的版本，包含74位贡献者提交的573次提交。核心亮点：
- 全部7个64位CLI发布包现已内置WebAssembly（WASM）插件宿主。
- 官方插件仓库现已提供针对本版本构建并验证的渠道包和工具包。
- 发布说明中未公布明确的破坏性变更或迁移警告；建议从v0.8.x旧版本升级的用户，对照v0.8.6插件仓库验证插件兼容性。

---

## 3. 项目进展
本周以下已合并/关闭的PR推进了核心功能开发并修复了关键问题：
1. **ZeroCode成本告警可见性提升** – PR [#11692](https://github.com/zeroclaw-labs/zeroclaw/pull/11692) 修复了长期未解决的`cost.warn_at_percent`功能缺口，在ZeroCode控制台中展示预算告警通知（对应Issue [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950)）。
2. **ZeroCode运行时上下文展示** – PR [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513) 在控制台概览页新增了实时运行时上下文（活跃Agent、提供商/模型、会话状态、运行时配置），满足了Issue [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383)中的功能需求。
3. **ZeroCode配置入门引导** – PR [#11508](https://github.com/zeroclaw-labs/zeroclaw/pull/11508) 为ZeroCode中的空配置区块（模型提供商、TTS、路由）新增了解释说明和清晰的添加操作入口，关闭了Issue [#11490](https://github.com/zeroclaw-labs/zeroclaw/issues/11490)。
4. **会话实时更新渲染修复** – PR [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) 通过优化应用事件循环的通知消费逻辑，降低了高负载下ZeroCode会话流式更新的延迟。
5. **带回滚能力的已验证插件更新功能上线** – Issue [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) 跟踪的功能已完成，新增了带失败回滚机制的显式插件更新命令，属于v0.8.6第二阶段插件交付内容。
6. **插件仓库WIT兼容性问题解决** – Issue [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624)（WIT版本锁定不一致导致已发布组件失效）已关闭，更新后的兼容性矩阵已与v0.8.6宿主和插件仓库制品对齐。
7. **Web控制台配对码修复** – Issue [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) 已解决，更新了Web控制台的配对输入框，支持32位字母数字配对码（与更新后的默认`PairingCodePolicy`一致）。
8. **测试稳定性提升** – PR [#11688](https://github.com/zeroclaw-labs/zeroclaw/pull/11688) 通过允许并发写入共享运行时追踪文件，修复了并发会话追踪关联测试的不稳定问题。

---

## 4. 社区热点
本周讨论最活跃的内容围绕运行时架构规划、跨平台可用性和插件系统正确性展开：
1. **运行时与网关交付跟踪** – Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（10条评论）是根据RFC #5574开展的第二阶段运行时工作（v0.8.6）和第三阶段网关分离（v0.9.0）的核心跟踪issue。讨论聚焦于交付顺序、剩余缺口和版本发布协调，体现了社区对项目架构路线图的高度关注。
2. **llama.cpp/自定义提供商URI处理Bug** – Issue [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296)（5条评论）反馈称，获取模型时llama.cpp和自定义提供商的非本地主机URI解析错误。较高的评论量说明这是在路由器或远程端点后自托管模型的用户普遍面临的痛点。
3. **ZeroCode“复制”按钮失效** – Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)（5条评论）跟踪ZeroCode TUI中一键复制功能完全失效的问题，定级为S1（工作流受阻）。用户参与度高，反映出剪贴板核心功能对日常代码编辑工作流至关重要。
4. **规范配置生成与应用跟踪** – Issue [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)（4条评论）讨论了为运行中的消费端实现配置变更采纳账本的方案，这是未来实时应用功能的基础特性。关注者主要是管理多实例部署的运维人员和高级用户。
5. **无限制的agent-browser子进程挂起** – Issue [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)（4条评论）跟踪一个S1级别Bug：卡住的`agent-browser` CLI进程会导致Agent轮次无限期挂起。关注该问题的用户主要依赖浏览器自动化作为核心Agent能力。

---

## 5. Bug与稳定性
本周报告或更新的Bug按严重级别排序如下，并标注现有修复进展：

### S0（安全/数据丢失风险）
- **显式允许的命令绕过高风险命令拦截** – Issue [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058)：当`shell`处于`auto_approve`模式时，`allowed_commands`中字面列出的命令会绕过`block_high_risk_commands`检查，无需审批或日志记录即可运行。安全修复PR [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) 已提交，该PR会在变量替换/子shell边界处拆分POSIX命令，以提升扫描器准确性。

### S1（工作流受阻）
- **Agent-browser子进程无限期挂起** – Issue [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)：可用性探测和`run_command`中的`agent-browser`子进程没有挂钟超时机制，也没有`kill_on_drop`机制。状态：处理中，暂无关联修复PR。
- **Android/Termux上快速入门流程失败** – Issue [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)：由于配置持久化错误，在Android 16/Termux（aarch64）上创建Agent失败。状态：待处理，暂无修复PR。
- **ZeroCode“复制”按钮失效** – Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)：一键复制功能无法写入系统剪贴板。状态：处理中，暂无关联修复PR。
- **ZeroCode静默丢弃待处理的`ask_user`提示** – Issue [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)：被清除的用户询问无任何记录，还会导致工具超时600秒。修复PR [#11624](https://github.com/zeroclaw-labs/zeroclaw/pull/11624) 已提交，会对被丢弃的询问进行应答并记录在会话记录中。

### S2（功能降级）
- **插件验证结果与运行时注册不一致** – Issue [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)：没有`config_schema`的插件能通过CLI的`plugin info`/`list --verify`检查，但会被运行时拒绝加载。状态：已纳入v0.8.6修复计划，暂无修复PR。
- **Windows上进程被杀后端口仍被占用** – Issue [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)：已终止的zeroclaw进程会残留僵尸端口，导致Windows 11上新的守护进程无法启动。状态：已采纳，暂无修复PR。
- **插件`remove`命令会删除已加载插件的错误目录** – Issue [#11357](https://github.com/zeroclaw-labs/zeroclaw/issues/11357)：删除操作使用`plugins_dir/<name>`路径而非已加载插件的实际路径，存在误删无关目录的风险。状态：已纳入v0.8.6修复计划，暂无修复PR。
- **多模态视觉提供商在达到`max_image_turns`后未解除绑定** – Issue [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706)：即使图像历史已被清除，视觉模型提供商仍会在整个会话中保持活跃。状态：待处理，暂无修复PR。
- **插件设置的`config set`操作不会同步到运行中的守护进程** – Issue [#11820](https://github.com/zeroclaw-labs/zeroclaw/issues/11820)：插件配置/出站规则变更只会写入磁盘，导致运行中的守护进程仍使用旧设置。状态：已纳入v0.8.7修复计划，暂无修复PR。

---

## 6. 功能需求与路线图信号
活跃的功能开发和用户需求显示，以下功能很可能会纳入v0.8.7和v0.9.0版本：
1. **持久化会话提示附件** – PR [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) 新增了基于SQLite的持久化提示附件，支持重启后保留。这项高投入、高价值的功能开发进展顺利，极有可能加入v0.8.7。
2. **OpenRouter余额显示** – 两个待合并PR（[#11845](https://github.com/zeroclaw-labs/zeroclaw/pull/11845)、[#11846](https://github.com/zeroclaw-labs/zeroclaw/pull/11846)）实现了在Web控制台中可选、安全的OpenRouter余额展示功能。这项用户呼声很高的体验优化功能大概率会在v0.8.7中上线。
3. **子进程内存监控** – PR [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) 为shell/技能子进程新增了可选的`shell_max_memory_mb`内存限制。这项安全与稳定性功能正在维护者审核中，计划在近期版本发布。
4. **从会话记录中打开ZeroCode文件路径** – PR [#11633](https://github.com/zeroclaw-labs/zeroclaw/pull/11633) 支持点击会话记录中的本地文件路径直接打开。这项UX优化正在积极审核中，预计会加入v0.8.7。
5. **网关分离（v0.9.0里程碑）** – 根据跟踪Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)，第三阶段网关分离仍是v0.9.0路线图的核心内容，运行时组合边界重构（Issue [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)）的基础工作正在进行中。

---

## 7. 用户反馈总结
本周收集到的真实用户痛点和使用场景如下：
- **自托管模型部署阻碍**：在远程端点/路由器后运行llama.cpp和自定义提供商的用户反馈，模型URI解析存在问题（Issue [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296)），凸显了用户对非本地推理端点官方支持的需求。
- **跨平台入门体验缺口**：Android/Termux用户无法完成快速入门流程（Issue [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)），表明移动/边缘平台支持的需求尚未得到满足。
- **ZeroCode UX可靠性问题**：多位用户报告ZeroCode TUI的核心功能存在故障，包括复制失效（Issue [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)）、提示静默丢失（Issue [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)）和上下文不可见（已通过PR [#11513](https://github.com/zeroclaw-labs/zeroclaw/pull/11513)解决）。这些问题反映出ZeroCode是用户高频使用的功能模块，其稳定性和完善度直接影响用户满意度。
- **技能系统局限性**：使用技能包的用户反馈，技能审核/创建工具无法用于包分配的技能（Issue [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333)），且仅能在CLI/定时会话中运行（Issue [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)），说明技能学习循环是一项受重视的功能，但跨渠道支持尚不完善。
- **插件系统信任度与可用性**：运维人员反馈插件验证行为令人困惑（Issue [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)）、缺少WebSocket/socket客户端的出站声明支持（Issue [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552)），以及锁文件权限问题（Issue [#11360](https://github.com/zeroclaw-labs/zeroclaw/issues/11360)），表明插件生态系统需要持续加固，并为管理员提供更清晰的使用体验。

---

## 8. 待办事项观察
以下长期存在、影响较大的事项需要维护者加大关注力度，避免引发用户不满和路线图延期：
1. **Windows端口僵尸Bug** – Issue [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)（2026-07-07提交，S2严重级别）已开放超过3个月，暂无关联修复PR。该问题影响所有使用Web控制台和浏览器工具的Windows用户，严重时会完全阻断守护进程重启。
2. **Anthropic终端响应分类不完善** – PR [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)（2026-07-27提交，高风险，XL规模）已开发近3个月。该修复旨在解决Anthropic提供商响应的正确性问题，包括不完整输出处理和SSE帧处理，对依赖Anthropic模型的用户至关重要。
3. **插件出站DNS超时无法取消阻塞式查询** – Issue [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199)（2026-08-21提交，高风险）仍处于开放状态，暂无关联PR。这一安全/稳定性缺口意味着插件连接超时无法限制DNS解析时长，可能通过慢速或无响应的DNS服务器造成拒绝服务风险。
4. **渠道/Webhook会话未运行技能审核/创建** – Issue [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)（2026-10-01提交，S2严重级别，计划加入v0.8.7）进展甚微，尽管这是技能系统的核心限制，会影响所有非CLI用户渠道。
5. **Discord插件端到端验证** – Issue [#10999](

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*