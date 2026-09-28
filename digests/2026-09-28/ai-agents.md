# OpenClaw 生态周报 2026-09-28

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-28 01:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目周报（截至2026-09-28当周）

---

## 1. 过去7天概览
本周OpenClaw保持了较高的开发推进速度，共更新500个问题（473个开放/进行中，27个已关闭）和500个PR（384个开放，116个已合并/关闭），体现出活跃的问题排查与功能迭代节奏，同时仍有大量待处理工作积压。项目发布了两个新版本：面向macOS的稳定版补丁v2026.9.6，以及v2026.7.35长期支持（LTS）网关更新。
当前活跃问题主要集中在2026.9.x版本线的稳定性回退上，尤其是网关启动性能、内存泄漏、崩溃循环和会话状态一致性相关问题。维护者的精力分为两部分：一是修复2026.9.x的严重bug（在2026.9.7修复问题单中跟踪），二是开展更大规模的重构工作，以降低核心子系统的技术债务。

---

## 2. 版本发布
### v2026.9.6（稳定版，macOS重制版）
- **发布日期**：2026-09-24（UTC时间2026-09-24 09:52重新构建）
- **核心变更**：最初的macOS构建版本启动时崩溃（[#156861](https://github.com/openclaw/openclaw/issues/156861)），现已替换为包含修复的重新公证构建版本（[#156881](https://github.com/openclaw/openclaw/issues/156881)）。
- **迁移说明**：安装了早期故障版本的用户请重新下载DMG安装包，或在应用内从2026.9.5版本升级。无需进行配置或数据迁移。

### v2026.7.35（长期支持版/LTS，仅网关）
- **版本类型**：2026年7月稳定版线的向后移植版本，等效于LTS版本。
- **包含变更**：关键安全补丁、可靠性与性能修复，以及从新版本向后移植的新模型支持。
- **目标用户**：优先考虑稳定性而非新功能的生产环境部署用户。最新全功能版本仍为v2026.9.5/2026.9.6。

---

## 3. 项目进展
过去7天共合并或关闭116个PR，工作涵盖bug修复、用户体验改进、重构和安全加固。关键进展包括：
- **稳定性修复**：会话状态回滚一致性修复（[#159807](https://github.com/openclaw/openclaw/pull/159807)）、子代理交付上下文泄漏修复（[#155320](https://github.com/openclaw/openclaw/pull/155320)）和配置恢复安全性修复（[#152787](https://github.com/openclaw/openclaw/pull/152787)）已进入待审核状态或已合并。
- **用户体验改进**：Web UI侧边栏筛选面板重组（[#150605](https://github.com/openclaw/openclaw/pull/150605)）、编辑器状态栏高度统一（[#160016](https://github.com/openclaw/openclaw/pull/160016)）和个人外部浏览器偏好支持（[#159887](https://github.com/openclaw/openclaw/pull/159887)）均取得进展。
- **技术债务削减**：在通道核心（[#159811](https://github.com/openclaw/openclaw/pull/159811)）、浏览器/内存插件（[#159798](https://github.com/openclaw/openclaw/pull/159798)）和插件运行时（[#159600](https://github.com/openclaw/openclaw/pull/159600)）模块推进了多轮代码清理，移除冗余代码，且无面向用户的变更。
- **平台修复**：为2026.9.6宿主环境提供语音通话插件加载支持（[#159987](https://github.com/openclaw/openclaw/pull/159987)）、Telegram富媒体消息大小上限调整（[#131347](https://github.com/openclaw/openclaw/pull/131347)），以及飞书快捷操作卡片Schema修复（[#79832](https://github.com/openclaw/openclaw/pull/79832)）。

---

## 4. 社区热门话题
按评论数和参与度排序：
1. **#159356: llama.cpp管理器报告就绪但嵌入子进程退出；嵌入请求返回HTTP 500**（25条评论，[链接](https://github.com/openclaw/openclaw/issues/159356)）
   - 本周讨论度最高的问题，在v2026.9.6版本中被报告。用户观察到嵌入服务故障和崩溃循环；问题提交者确认将主机内存从4GB提升到8GB后问题解决，表明内存压力是根本原因。潜在需求：为嵌入运行时的OOM场景提供更完善的内存防护机制和错误提示。
2. **#97616: OpenClaw存在未回收的hook/工具子进程泄漏，导致僵尸进程累积**（16条评论，1个👍，[链接](https://github.com/openclaw/openclaw/issues/97616)）
   - 最早于2026年6月报告的长期存在的回退问题，目前仍处于活跃状态。用户反馈`openclaw-hooks`、`bash`和`codex`僵尸进程会随时间累积，导致运行时性能下降。潜在需求：为工具/hook执行实现完善的子进程生命周期管理与回收机制。
3. **#157531: 2026.9.7修复跟踪**（15条评论，[链接](https://github.com/openclaw/openclaw/issues/157531)）
   - 即将发布的2026.9.7补丁版本的中心跟踪问题，目前包含21项计划修复中的18项P1级问题，涵盖隐私、用户体验和稳定性领域。潜在需求：协调推进2026.9.x版本关键回退问题修复的上线。
4. **#127148: Codex的sessions.compact操作会启动第二个app-server并触发active-writer冲突**（12条评论，[链接](https://github.com/openclaw/openclaw/issues/127148)）
   - 该会话状态bug会导致绑定的Codex会话执行压缩操作失败。潜在需求：优化app-server客户端所有权机制，为会话维护操作提供更好的并发控制。
5. **#155859: 网关启动耗时与启用的插件数量成正比**（11条评论，[链接](https://github.com/openclaw/openclaw/issues/155859)）
   - 2026.9.5版本中的P0级回退问题：网关启动时间随启用插件数量线性增长，其中discord、codex和openclaw-weixin插件每个都会增加数十秒启动时间，经常超出120秒的启动预算。潜在需求：实现插件懒加载，优化插件初始化流程。

---

## 5. 缺陷与稳定性
按严重程度（P0 > P1 > P2）和影响范围排序：
### P0 严重缺陷
| 问题 | 严重程度 | 影响 | 修复PR状态 | 链接 |
|-------|----------|--------|---------------|------|
| 2026.9.7修复跟踪 | P0 | 用户体验版本发布阻塞项；跟踪所有待处理的关键补丁 | 进行中（已准备21项P1候选修复中的18项） | [#157531](https://github.com/openclaw/openclaw/issues/157531) |
| 网关启动耗时与启用的插件数量成正比 | P0 | 崩溃/启动延迟，用户体验版本发布阻塞项 | 暂无关联修复PR | [#155859](https://github.com/openclaw/openclaw/issues/155859) |
| 网关在plugin-doctor-post-session-state阶段陷入崩溃循环 | P0 | 崩溃循环，用户体验版本发布阻塞项 | 暂无关联修复PR | [#157160](https://github.com/openclaw/openclaw/issues/157160) |
| 全新重建的数据库在15-24小时内再次出现SQLite损坏（WSL2环境） | P0 | 数据丢失，崩溃循环，网关模式完全瘫痪 | 暂无关联修复PR | [#126821](https://github.com/openclaw/openclaw/issues/126821) |
| 网关RSS内存超出V8堆限制，导致OOM和关闭超时 | P0 | 崩溃/OOM | 暂无关联修复PR | [#154812](https://github.com/openclaw/openclaw/issues/154812) |
| 状态生命周期租约导致网关启动阻塞31分钟（客户端挂起） | P0 | 崩溃重启循环，用户体验版本发布阻塞项 | 暂无关联修复PR | [#156917](https://github.com/openclaw/openclaw/issues/156917) |
| macOS应用就绪看门狗会向启动较慢的网关发送SIGTERM信号 | P0 | 重启循环，用户体验版本发布阻塞项 | 修复方案已明确，可排入队列 | [#158936](https://github.com/openclaw/openclaw/issues/158936) |
| 目录工作进程几乎在每个请求上都重建发现注册表（内存泄漏） | P0 | 内存泄漏/崩溃 | 暂无关联修复PR | [#159514](https://github.com/openclaw/openclaw/issues/159514) |
| 会话回收超过5秒忙等待超时导致代理数据库被锁定 | P0 | 消息丢失，用户体验版本发布阻塞项 | 暂无关联修复PR | [#148307](https://github.com/openclaw/openclaw/issues/148307) |

### P1 高危缺陷
主要活跃P1问题包括：
- hook/工具执行产生僵尸子进程泄漏（[#97616](https://github.com/openclaw/openclaw/issues/97616)）
- Codex的sessions.compact操作触发active-writer冲突（[#127148](https://github.com/openclaw/openclaw/issues/127148)）
- 配置热重载会中断所有进行中的代理轮次（[#144291](https://github.com/openclaw/openclaw/issues/144291)）
- 升级到2026.9.6后CPU持续高占用（sessions.list物化卡住）（[#157605](https://github.com/openclaw/openclaw/issues/157605)）
- Windows自动更新反复失败（[#157812](https://github.com/openclaw/openclaw/issues/157812)）

---

## 6. 功能需求与路线信号
具备活跃推进动力、或与当前工作高度契合的用户需求功能：
1. **支持模型感知故障转移的多索引嵌入内存**（[#63990](https://github.com/openclaw/openclaw/issues/63990)，1个👍）
   - 生产环境用户希望实现不破坏向量语义的高可用嵌入模型故障转移。鉴于项目当前聚焦生产可靠性和服务提供商降级改进，该功能很有可能纳入未来的2026.10版本或LTS向后移植版本。
2. **侧边栏会话筛选面板重组**（[#150605](https://github.com/openclaw/openclaw/pull/150605)）
   - 该用户体验功能已进入高级审核阶段，极大概率在下一次Web UI小版本更新中上线。
3. **个人外部浏览器偏好**（[#159887](https://github.com/openclaw/openclaw/pull/159887)）
   - 小型用户体验功能，当前处于审核中，预计将在即将发布的2026.9.x补丁中上线。
4. **ChatGPT登录新增beta标签**（[#160011](https://github.com/openclaw/openclaw/pull/160011)）
   - 认证体验优化功能，当前处于审核中，大概率将随ChatGPT集成加固工作同步上线。

---

## 7. 用户反馈总结
### 核心痛点
- **2026.9.x版本稳定性回退**：多位用户反馈升级后出现崩溃循环、启动缓慢、内存泄漏和会话状态问题，不少用户表示暂不升级，继续使用2026.7.x LTS版本。
- **Windows平台短板**：自动更新反复失败（[#157812](https://github.com/openclaw/openclaw/issues/157812)）和工具输出GBK编码损坏（[#113219](https://github.com/openclaw/openclaw/issues/113219)）是中文Windows用户长期面临的痛点。
- **移动端用户体验问题**：iOS应用键盘输入失败（[#122648](https://github.com/openclaw/openclaw/issues/122648)）、展示推理/工具活动时卡顿（[#124759](https://github.com/openclaw/openclaw/issues/124759)），以及安卓端键盘遮挡聊天内容（[#137508](https://github.com/openclaw/openclaw/issues/137508)）是高频反馈问题。
- **插件加载性能**：启用大量插件的用户反馈网关启动时间极长，部分用户通过禁用插件来临时规避该问题。

### 积极反馈
- 使用2026.7.x长期支持版的生产环境用户反馈版本可靠性良好，对向后移植的安全更新和模型支持更新表示认可。
- Codex和多代理功能集持续被高频使用，用户更关注会话一致性和可靠性修复，而非新功能。

---

## 8. 待办观察
等待维护者关注的长期存在、高影响问题/PR：
1. **#97616: 未回收的hook/工具子进程僵尸泄漏**（报告于2026-06-29，16条评论，P1，[链接](https://github.com/openclaw/openclaw/issues/97616)）
   - 已开放3个月，影响长期运行的部署环境，暂无关联修复PR。对用户影响较大，会导致运行时性能逐步下降。
2. **#84110: Codex app-server在工具调用续接时重写prompt，导致OpenAI prompt缓存失效**（报告于2026-05-19，8条评论，2个👍，P2，[链接](https://github.com/openclaw/openclaw/issues/84110)）
   - 已开放4个月，会给使用OpenAI Codex的用户带来显著的成本和性能回退（缓存命中率从93%降至47%）。
3. **#55694: 代理工具调用失败陷入无限循环，导致消息刷屏**（报告于2026-03-27，7条评论，P1，[链接](https://github.com/openclaw/openclaw/issues/55694)）
   - 已开放6个月，重复消息会影响终端用户体验。修复方案已明确且可排入队列，但尚未被列为优先级工作。
4. **#79832: 飞书快捷操作和确认卡片无法发送**（PR提交于2026-05-09，P1，[链接](https://github.com/openclaw/openclaw/pull/79832)）
   - 该PR已停滞4个多月，用于修复飞书渠道交互的关键bug。需要维护者审核并验证修复效果。
5. **#120415: 嵌入代理轮次循环中缺少重复防护机制**（报告于2026-08-08，6条评论，P2，[链接](https://github.com/openclaw/openclaw/issues/120415)）
   - 修复方案已明确，但暂无活跃PR。该问题会导致相同工具调用的无限循环，仅能通过挂钟超时停止。

---

## 横向生态对比

# 跨项目开源AI Agent生态对比报告
*数据来源：截至2026-09-28当周的项目周报汇总*

---

## 1. 生态概述
开源个人AI助手与Agent生态仍处于高速增长、逐步成熟的阶段，各项目都在平衡功能快速迭代与生产级稳定性、企业级就绪能力之间的关系。在所有被追踪的项目中，核心痛点集中在运行时可靠性、上下文/会话管理的正确性、跨平台兼容性以及插件/工具生态的可扩展性。企业与团队部署需求正在加速增长，推动着多租户架构、治理管控和安全加固方面的投入。开源Agent框架正越来越多地分化为不同的细分方向——从通用可扩展核心，到Web3原生及绑定特定生态的产品——同时在内存、工具链、多渠道分发等基础架构层面趋于趋同。

---

## 2. 活跃度对比
| 项目 | 新增更新Issue（新增/关闭） | 新增更新PR（新增/合并） | 本周发布版本数 | 健康度评分（0-10） |
|---------|-------------------------------|---------------------------|--------------------|---------------------|
| OpenClaw | 500（473新增 / 27关闭） | 500（384新增 / 116合并） | 2（稳定版补丁 + LTS回溯补丁） | 7.5 |
| Hermes Agent | 50（39新增 / 11关闭） | 50（43新增 / 7合并） | 2（补丁汇总更新） | 6.0 |
| IronClaw | 4（4新增 / 0关闭） | 10（8新增 / 2关闭） | 1（候选发布版） | 8.0 |
| QwenPaw | 50（34新增 / 16关闭） | 50（41新增 / 9合并） | 0 | 6.5 |
| ZeroClaw | 50（41新增 / 9关闭） | 50（45新增 / 5合并） | 0 | 5.5 |

*健康度评分方法：综合加权Issue关闭率、PR吞吐率、未解决严重Bug的影响程度、发布节奏和社区参与度。*

---

## 3. OpenClaw的市场定位
### 相较于同类项目的优势
OpenClaw在开发速度上是生态中当之无愧的领导者，其Issue和PR体量是紧随其后的项目的10倍，并且拥有面向生产用户的成熟LTS发布线。它具备功能最完善的多Agent（Codex）体系和插件生态，在所有被追踪项目中拥有最广泛的多渠道覆盖（Telegram、飞书、Discord、微信）。其双轨发布模式（稳定版 + 长期支持LTS版）可以同时满足早期尝鲜者和规避风险的企业部署需求，这种成熟度是其他同类项目无法比拟的。

### 技术路线差异
OpenClaw在功能开发的同时，优先推进增量稳定性修复和技术债务清理，拥有庞大的维护者团队，可同时处理数百个Issue。与ZeroClaw转向WASM插件运行时的架构调整不同，OpenClaw采用原生插件运行时，并通过持续重构来减少代码臃肿。其稳定性工作聚焦于生产网关的可靠性，而IronClaw、QwenPaw等新项目则优先推进功能扩展和细分场景落地。

### 社区规模对比
OpenClaw拥有规模最大、活跃度最高的社区，每周500条Issue/PR更新和高参与度的讨论帖（热门Issue评论数超25条）就是证明。其用户群体覆盖个人高级用户到大型生产部署，来自消费端和企业端的反馈共同推动着路线图的优先级制定。

---

## 4. 共性技术关注点
跨项目的需求显示，AI Agent生态存在普遍的基础架构缺口：
1. **插件/工具运行时可靠性**
   - *OpenClaw*：插件加载性能瓶颈（启动时间随插件数量线性增长），需实现懒加载
   - *ZeroClaw*：WASM插件系统运行时迁移、出站流量安全保障
   - *QwenPaw*：MCP自动重连与超时配置
   - *共性需求*：标准化的插件生命周期管理、懒初始化和故障隔离能力。

2. **会话状态与上下文管理的正确性**
   - *OpenClaw*：会话状态一致性、上下文压缩并发冲突、状态回滚Bug
   - *Hermes Agent*：历史记录恢复时消息丢失、重启时内存中状态丢失
   - *QwenPaw*：上下文压缩预算超限、压缩导致工具调用结构丢失
   - *ZeroClaw*：会话恢复时权限撤销绕过漏洞
   - *共性需求*：原子化会话持久化、一致的压缩逻辑，以及长周期Agent工作流的内存安全性。

3. **跨平台安装与兼容性**
   - *Hermes Agent*：Windows平台大面积安装失败、macOS更新时PATH变量Bug
   - *OpenClaw*：Windows自动更新失败、macOS公证问题、WSL2下SQLite损坏
   - *ZeroClaw*：Windows下Ctrl+C触发崩溃、CLI UTF-8编辑Bug
   - *共性需求*：端到端的平台测试、可靠的依赖解析，以及跨操作系统的一致运行时启动流程。

4. **安全加固**
   - *ZeroClaw*：文件下载的SSRF防护、沙箱逃逸补丁、权限提升Bug
   - *OpenClaw*：LTS版本安全回溯补丁、配置恢复安全性
   - *Hermes Agent*：NPM漏洞积压、企业SSH治理需求
   - *共性需求*：主动的依赖维护、最小权限工具执行，以及可审计的安全管控能力。

---

## 5. 差异化分析
| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **核心功能定位** | 通用多Agent平台，丰富的渠道/工具生态 | 桌面优先Agent，企业SSH集群管理 | NEAR Web3原生Agent，集成Google Workspace | 多渠道消费端/团队Agent，支持Hub多租户版 | 安全优先的可扩展Agent，WASM插件架构 |
| **目标用户** | 个人高级用户 + 生产级企业部署 | 桌面高级用户 + 企业DevOps团队 | Web3/加密货币用户、NEAR生态开发者 | 消费端即时通讯用户、中小型团队 | 注重安全的爱好者、自托管玩家 |
| **技术架构** | 单体核心 + 原生插件运行时，双轨发布模式 | 基于Electron的桌面应用，Python后端 | 基于Rust，Web3集成核心 | 基于Python，渠道优先架构 | 基于Rust，WASM插件运行时，聚焦安全沙箱 |
| **核心差异化优势** | 成熟的LTS支持、最全面的功能集、庞大的社区 | 企业SSH集群管理、桌面端用户体验打磨 | 原生NEAR/Web3工具链、稳定的基础版本 | 通义千问生态集成、丰富的中文渠道支持 | 模块化WASM插件系统、安全优先的设计 |

---

## 6. 社区动能与成熟度
### 活跃度分层
- **第一梯队（高速度）**：OpenClaw的运营规模是其他同类项目无法比拟的，吞吐量是其他项目的10倍，表明其拥有庞大的付费维护团队和广泛的贡献者基础。
- **第二梯队（中速度）**：Hermes Agent、QwenPaw和ZeroClaw活跃度相当（每周50个Issue/PR），迭代稳定但维护者产能有限。
- **第三梯队（稳定/低速度）**：IronClaw活跃度极低，聚焦增量补丁和依赖更新，核心稳定，贡献者群体较小。

### 迭代与稳定状态
- **快速迭代中**：ZeroClaw处于v0.8.6前的稳定化阶段，正在推进大规模架构调整（插件迁移、网关拆分）。QwenPaw正在下一个主要版本发布前迭代核心功能（上下文管理、Hub多租户）。
- **稳定优化中**：OpenClaw在功能开发的同时，正大力投入2026.9.x发布线的稳定性修复，以成熟现有功能集为主，而非构建全新功能。IronClaw处于维护/稳定阶段，没有合并重大新功能。
- **混合状态**：Hermes Agent的精力同时投入在企业功能开发（SSH控制平面）和基础Bug修复（Windows安装、依赖环境一致性）上。

---

## 7. 趋势信号
1. **企业/团队部署是增长最快的需求驱动因素**
   从OpenClaw的LTS adoption、Hermes Agent的SSH集群管理，到QwenPaw Hub的路线图讨论，多用户、治理和管理员管控功能的用户需求最高。AI Agent开发者应优先开发团队协作、基于角色的访问控制和审计日志功能，以抢占这个不断扩大的市场。

2. **插件标准化与模块化正成为行业标配**
   从ZeroClaw的WASM插件迁移，到OpenClaw的插件性能优化，再到QwenPaw的MCP可靠性提升，行业正朝着解耦、可扩展的Agent架构发展。构建Agent框架的开发者应采用开放插件标准（如MCP），以降低集成门槛、扩大生态覆盖范围。

3. **长周期Agent可靠性是尚未解决的关键痛点**
   会话状态损坏、上下文压缩失败、内存泄漏和僵尸进程累积是所有成熟项目都面临的普遍高影响问题。投入构建可靠的状态管理、容错能力和可观测性，将成为生产级Agent平台的核心差异化竞争力。

4. **Web3和垂直领域Agent场景是新兴的细分机会**
   IronClaw聚焦NEAR生态并集成代币发行平台，这表明市场对能与行业特定工具和工作流原生集成的垂直领域专用Agent存在需求。开发者可以在通用框架之上构建垂直领域专用的Agent层，来服务尚未被充分满足的市场。

5. **跨平台体验打磨是提升用户满意度的关键因素**
   Windows安装失败、macOS更新Bug、移动端体验缺口是多个项目中用户反馈最多的问题。对于面向消费端的Agent工具，投入端到端的平台测试和原生平台用户体验，比增量添加核心功能更能提升采纳率和用户留存。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目周报（2026-09-28 周）

## 1. 近7天概况
本周 Hermes Agent 项目活跃度较高，共更新 50 个 issue（39 个开放，11 个关闭）和 50 个 pull request（43 个开放，7 个合并/关闭）。项目发布了两个补丁版本，将大量已合并的 PR 打包为稳定标签，供下游用户使用。工作重点集中在安装稳定性（尤其是 Windows 平台）、会话状态正确性、安全依赖更新以及桌面端用户体验优化上。社区讨论主要围绕 Windows 安装失败和 npm 安全漏洞展开，多条高评论量的线程推动了问题分类处理。整体项目维护状态活跃，但在平台兼容性和安全债务方面存在较大的待办积压压力。

## 2. 版本发布
本周发布了两个补丁版本，均是将此前合并的大批量 PR 打包为稳定标签版本，供下游部署（包括 Docker 镜像、Hermes Cloud、托管安装场景）使用：
- **v0.21.5（2026-09-24）**（[发布链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24)）：将 v0.21.4 以来合并的约 460 个 PR 打包为稳定补丁版本。完整的精选更新日志将延后发布，无破坏性变更，也无需执行迁移步骤。
- **v0.21.4（2026-09-21）**（[发布链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)）：将 v0.21.3 以来合并的约 1800 个 PR 打包为稳定补丁版本。完整的精选更新日志将延后发布，无破坏性变更，也无需执行迁移步骤。

## 3. 项目进展
本周合并/关闭的 7 个 PR 推进了桌面端稳定性、日志记录和更新流程相关的修复工作：
- **桌面端级联故障弹性修复**（[PR #124951](https://github.com/NousResearch/hermes-agent/pull/124951)）：修复了一个系统性级联故障——NVIDIA 580 及以上 GPU 触发 EGL 回退时会导致软件渲染、CPU 占满和 API 配额耗尽。
- **自定义提供商身份日志记录**（[PR #73407](https://github.com/NousResearch/hermes-agent/pull/73407)）：在面向用户的日志中，将兼容 OpenAI 的自定义提供商标签映射回已配置的密钥，提升可观测性。
- **macOS 桌面端更新 PATH 修复**（[PR #75314](https://github.com/NousResearch/hermes-agent/pull/75314)）：在重建过程中加入符合 POSIX 规范的 PATH 条目，解决了 macOS 上应用内更新失败的问题，修复了通过 GUI 启动应用时 npm 缺失的错误。
- **TUI Ctrl+F 查找功能收尾**（[Issue #46169](https://github.com/NousResearch/hermes-agent/issues/46169)）：已关闭，完成了在聊天和 UI 编辑器中进行应用内查找的功能需求。
- **TTS PTT 停止功能收尾**（[Issue #40010](https://github.com/NousResearch/hermes-agent/issues/40010)）：已关闭，完成了在 TUI 中按下 PTT 按钮时停止 TTS 输出的需求。
- **推理等级快捷键功能收尾**（[Issue #71627](https://github.com/NousResearch/hermes-agent/issues/71627)）：已关闭，完成了可配置的推理等级升降快捷键需求。
- **桌面端附件存储与配置文件对齐**（[Issue #110662](https://github.com/NousResearch/hermes-agent/issues/110662)）：已关闭，完成了让桌面端附件存储遵循已配置的配置文件工作区的功能。

## 4. 社区热点话题
本周最活跃的讨论围绕 Windows 安装失败和安全漏洞积压展开：
1. **Windows Python 依赖安装失败**（[Issue #125657](https://github.com/NousResearch/hermes-agent/issues/125657)）：16 条评论，2026-09-27 创建。用户反馈在 Windows 11 上“安装 Python 依赖”步骤反复失败，重装、管理员权限、使用 VPN 等变通方法均无效。根本需求：可靠的 Windows 安装程序依赖解析和错误诊断能力。
2. **托管 SSH 部署控制平面功能**（[Issue #118029](https://github.com/NousResearch/hermes-agent/issues/118029)）：10 条评论，全周活跃。企业用户请求为托管 SSH 安装提供固定、经过验证的部署控制平面，以满足安全保障要求。根本需求：企业级部署治理和审计集成能力。
3. **NPM 安全漏洞积压**（[Issue #107356](https://github.com/NousResearch/hermes-agent/issues/107356)）：10 条评论，全周活跃。用户警示 npm 审计发现的 18 个漏洞中有 12 个为高危，且依赖更新进展缓慢。根本需求：主动的安全维护和透明的漏洞修复时间表。
4. **Bot 间 DM 投递 ruamel 依赖失败**（[Issue #122490](https://github.com/NousResearch/hermes-agent/issues/122490)）：8 条评论。当运行器继承了精简存储的 Python 环境时，投递会失败并报错 `No module named 'ruamel'`。根本需求：工作进程间一致的依赖环境隔离机制。
5. **全新 Windows 系统无法安装**（[Issue #125350](https://github.com/NousResearch/hermes-agent/issues/125350)）：7 条评论。全新安装 Windows 10 时存在多个阻断性问题：Git 压缩包缺少 bzip2、ffmpeg 版本固定链接返回 404、镜像源错误返回 403、`-SkipSetup` 标志被拒绝。根本需求：端到端的 Windows 安装测试和规范的依赖版本锁定机制。

## 5. Bug 与稳定性
本周报告/更新的 Bug 按严重程度排序如下：
### P0（严重）
1. **网关重启后内部事件固定内存丢失**（[Issue #125793](https://github.com/NousResearch/hermes-agent/issues/125793)）：网关重启后的第一个内部事件会导致系统提示词翻转，原因是固定存储仅保存在内存中。目前暂无关联的修复 PR。
2. **持久化覆盖导致合并的未回复用户消息丢失**（[Issue #124731](https://github.com/NousResearch/hermes-agent/issues/124731)）：历史记录恢复时，若新用户消息与现有未回复行合并，最终持久化会覆盖合并后的行，导致原始消息丢失。目前暂无关联的修复 PR。

### P1（高危）
1. **PM 激活错误的解释器依赖环境**（[Issue #122555](https://github.com/NousResearch/hermes-agent/issues/122555)）：`activate_dependencies()` 在未进行 ABI 检查的情况下重写 `sys.path`，移除了当前运行解释器的 site-packages，导致环境不匹配故障。目前暂无关联的修复 PR。
2. **Cron 外部工作进程丢失运行时依赖**（[Issue #124279](https://github.com/NousResearch/hermes-agent/issues/124279)）：使用原始 `sys.executable` 启动的外部 cron 工作进程会因缺少依赖而失败，因为它们绕过了受管的 Hermes 运行时引导程序。修复进行中：相关的 bot 投递依赖环境 PR（[#125308](https://github.com/NousResearch/hermes-agent/pull/125308)、[#125865](https://github.com/NousResearch/hermes-agent/pull/125865)）可解决同类 Bug。
3. **PM/源码安装场景下看板工作进程启动失败，提示 hermes_cli 缺失**（[Issue #122487](https://github.com/NousResearch/hermes-agent/issues/122487)）：工作进程在导入时终止，因为尽管父进程中 `find_spec` 检查通过，但生成的子环境中 `PYTHONPATH` 被剥离。与 cron 工作进程依赖类 Bug 相关。

### P2（中危）
- Windows 全新安装多重故障（[#125350](https://github.com/NousResearch/hermes-agent/issues/125350)）：暂无修复 PR。
- Windows Python 依赖安装失败（[#125657](https://github.com/NousResearch/hermes-agent/issues/125657)）：需要复现，暂无修复 PR。
- Bot 间 DM 投递 ruamel 失败（[#122490](https://github.com/NousResearch/hermes-agent/issues/122490)）：修复 PR 已开放：[#125308](https://github.com/NousResearch/hermes-agent/pull/125308)、[#125865](https://github.com/NousResearch/hermes-agent/pull/125865)
- Windows 浏览器子进程在处理 .cmd 文件时挂起（[#107232](https://github.com/NousResearch/hermes-agent/issues/107232)）：暂无修复 PR。
- API 服务器会话未遵循智能审批无人值守模式（[#100532](https://github.com/NousResearch/hermes-agent/issues/100532)）：暂无修复 PR。
- 桌面端消息压缩后出现重复消息（[#123985](https://github.com/NousResearch/hermes-agent/issues/123985)）：暂无修复 PR。
- Slack 清单命令限制不匹配（[#124762](https://github.com/NousResearch/hermes-agent/issues/124762)）：暂无修复 PR。
- 内置技能同步错误提示问题（[#97792](https://github.com/NousResearch/hermes-agent/issues/97792)）：暂无修复 PR。
- 残留的 browser_harness 守护进程（[#121095](https://github.com/NousResearch/hermes-agent/issues/121095)）：暂无修复 PR。

## 6. 功能需求与路线信号
本周用户最关心的功能需求，以及近期纳入开发的可能性评估：
1. **带桌面端同意流程的共享指标 v3**（[PR #125074](https://github.com/NousResearch/hermes-agent/pull/125074)）：可能性高。该开放 PR 新增了可选的指标统计功能，涵盖故障原因、用户留存、安装流程流失和模型成本跟踪，并配有首次运行同意流程。符合产品分析需求，且已通过 CI 评审。
2. **托管 SSH 集群部署控制平面**（[Issue #118029](https://github.com/NousResearch/hermes-agent/issues/118029) / [PR #120719](https://github.com/NousResearch/hermes-agent/pull/120719)）：可能性高。由 14 部分组成的功能系列已进入最终阶段（14/14 PR 已开放），重点是为企业 SSH 集群管理提供可衡量容量的门控机制。与企业安全需求挂钩。
3. **独立于密钥代理的机密管理架构**（[Issue #107700](https://github.com/NousResearch/hermes-agent/issues/107700)）：可能性中等。多个关联 issue 和文档请求概述了一种不依赖特定 vault、带进程隔离的密钥管理模型。目前仍处于设计/决策阶段。
4. **桌面端会话侧边栏按平台分组**（[PR #125893](https://github.com/NousResearch/hermes-agent/pull/125893)）：可能性高。该开放 PR 修复了非白名单网端平台的会话被埋没在通用分组下的问题。属于小型针对性用户体验优化。
5. **本地 PAW PII 脱敏插件**（[Issue #102922](https://github.com/NousResearch/hermes-agent/issues/102922)）：可能性中等。提议将纯本地 PII 脱敏中间件作为出站防护机制。符合安全路线图，但处于早期阶段。
6. **命令中心全会话全文搜索**（[Issue #51694](https://github.com/NousResearch/hermes-agent/issues/51694)）：可能性中等。长期存在的需求，希望在 ⌘K 中实现全文搜索、归档会话搜索和跨配置文件搜索。目前暂无活跃 PR。

**下一版本预计亮点**：Bot 间投递稳定性修复、按平台的侧边栏分组、共享指标 v3 可选功能，以及持续强化 Windows 安装体验。

## 7. 用户反馈汇总
### 痛点
- **许多用户的 Windows 安装功能失效**：多份报告显示，全新 Windows 10/11 系统上完全无法完成安装，且没有可靠的变通方法（[#125657](https://github.com/NousResearch/hermes-agent/issues/125657)、[#125350](https://github.com/NousResearch/hermes-agent/issues/125350)）。
- **安全债务正在侵蚀信任**：用户对 npm 漏洞不断堆积表示不满，目前有 11 个高危问题，且进展肉眼可见地缓慢（[#107356](https://github.com/NousResearch/hermes-agent/issues/107356)、[#125576](https://github.com/NousResearch/hermes-agent/issues/125576)）。
- **错误诊断能力差**：多个 Bug（技能同步失败、投递崩溃）产生的错误信息模糊，没有可操作的调试输出（[#97792](https://github.com/NousResearch/hermes-agent/issues/97792)、[#122490](https://github.com/NousResearch/hermes-agent/issues/122490)）。
- **依赖环境不一致**：工作进程（cron、看板、bot 投递）频繁因模块缺失而失败，原因是生成的子进程间运行时引导机制不一致。

### 正面使用场景
- 企业用户正在基于 Hermes 构建托管 SSH 集群工作流，持续投入安全和治理相关功能（[#118029](https://github.com/NousResearch/hermes-agent/issues/118029)）。
- 高级用户运行持续数月的长周期自主智能体会话以处理复杂工作流，推动了对更好会话管理和稳定性的需求（[#123165](https://github.com/NousResearch/hermes-agent/issues/123165)）。

### 满意度信号
- 近期关闭的用户体验功能（Ctrl+F 查找、PTT TTS 停止、推理等级快捷键）获得了社区正面反馈（已关闭 issue 下收到 👍 点赞）。
- 桌面端附件存储与工作区对齐的功能，解决了配置文件用户长期存在的数据管理痛点（[#110662](https://github.com/NousResearch/hermes-agent/issues/110662)）。

## 8. 待办关注
需要维护者关注的长期重要 issue/PR：
1. **NPM 安全漏洞积压**（[Issue #107356](https://github.com/NousResearch/hermes-agent/issues/107356)，2026-09-10 创建，10 条评论）：12 个高危 npm 漏洞，暂无可见的修复计划。存在侵蚀用户信任和影响企业采用的风险。本周新增了重复 issue [#125576](https://github.com/NousResearch/hermes-agent/issues/125576)，表明用户担忧日益加剧。
2. **Windows 浏览器子进程挂起**（[Issue #107232](https://github.com/NousResearch/hermes-agent/issues/107232)，2026-09-10 创建，6 条评论）：影响 Windows 浏览器工具用户的 P2 Bug，已开放 18 天，修复无进展。
3. **智能审批无人值守模式 Bug**（[Issue #100532](https://github.com/NousResearch/hermes-agent/issues/100532)，2026-09-01 创建，4 条评论）：P2 安全边界 Bug，API 服务器会话会忽略 `approvals.unattended_mode: approve` 配置，产生无法处理的待审批项。已开放 27 天。
4. **内置技能同步错误提示问题**（[Issue #97792](https://github.com/NousResearch/hermes-agent/issues/97792)，2026-08-29 创建，2 条评论）：调试可用性问题，同步失败时不提供诊断输出。已开放 30 天。
5. **PAW PII 脱敏插件提议**（

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目周报
2026年9月28日当周 | 来源: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 过去7天概览
过去7天，IronClaw 项目保持中等强度、以功能为核心的开发节奏，期间新增 4 个未关闭 issue、10 个未合并 PR，关闭 2 个 PR，发布 1 个新的候选版本。工作重点高度偏向版本发布准备、依赖维护和增量功能补充，未开展大规模核心重构。待办事项规模保持稳定，本期无已关闭的 issue，说明当前需求的分类处理与开发工作仍在推进中。未上报任何严重事故或批量 bug 报告，主代码库整体处于基线稳定状态。

---

## 2. 版本发布
### ironclaw-v1.4.1-rc.2（2026-09-24 发布）
这是 1.4.x 系列的第二个补丁候选版本，延续了 RC1 中首次引入的核心修复，未新增功能变更。
- **修复内容**：Google Workspace 扩展（Gmail、Google Calendar）现已支持在运维人员通过 Web UI（而非仅通过环境变量）配置 Google OAuth 客户端的部署场景下激活。该修复填补了 UI 管理的部署工作流此前无法启用 Google 集成的功能缺口。
- **破坏性变更**：无上报。
- **迁移说明**：现有 1.4.0 用户无需执行任何操作；本版本为直接替换式补丁，用于在 1.4.1 正式版发布前测试 OAuth 修复效果。
- **发布 PR**：[#8110 chore(release): cut 1.4.1-rc.2](https://github.com/nearai/ironclaw/pull/8110)

---

## 3. 项目进展
过去7天共关闭 2 个 PR，分别聚焦版本发布编排和已被取代的依赖更新：
1. **[#8105 chore(release): cut 1.4.1-rc.1](https://github.com/nearai/ironclaw/pull/8105)**（2026-09-21 关闭）：完成 1.4.1-rc.1 候选版本的版本号配置，使发布工作流能够标记首个补丁测试构建版本，为后续 RC2 的推出奠定基础。
2. **[#8104 chore(deps): bump the everything-else group across 1 directory with 29 updates](https://github.com/nearai/ironclaw/pull/8104)**（2026-09-27 关闭）：已被更新、规模更大的依赖更新批次（PR #8114，包含 31 个包升级）取代，确保代码库与上游 Rust 生态的最新版本保持同步。

本周期内默认分支未合入任何新功能；所有功能与 bug 修复 PR 均处于评审阶段。

---

## 4. 社区热门话题
过去7天更新的所有 issue 和 PR 均无评论、无互动反馈，因此暂无具备可衡量社区参与度的条目可供排序。最新提交的两个功能提案属于新兴议题，随着社区成员发现后可能获得更多关注：
1. **[#8113 Proposal: opt-in turn-0 tool selection (BM25F + embeddings)](https://github.com/nearai/ironclaw/issues/8113)**（2026-09-27 创建）：提案采用 BM25F + 嵌入向量混合排序方式，在对话的首条用户消息中预测所需工具，仅向智能体展示预测到的工具外加 4 个发现桥接工具。该方案旨在解决工具选择延迟高、终端用户看到无关工具选项的根本需求，提升智能体响应效率。
2. **[#8112 Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)](https://github.com/nearai/ironclaw/issues/8112)**（2026-09-26 创建）：请求为 NEARA（NEAR 主网代币发行平台）开发 MCP 扩展，使智能体能够实现新代币的列表查询、报价、发行和交易功能。这表明社区有拓展 IronClaw 面向 NEAR 生态用户的链上 Web3 功能的需求。

---

## 5. Bug 与稳定性
过去7天未提交明确的 bug 报告（带 bug 标签或分类为 bug 的内容）。仅有的稳定性相关数据点如下：
- **低严重度易用性缺陷**：[#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092)（未关闭）：修复聊天输入框中 IME 输入（用于中文、日文等非拉丁语系语言）会被命令菜单和回车发送处理逻辑打断的问题，该问题对 Safari 用户影响尤为明显。修复 PR 已在评审中。
- **低严重度内置工具边界情况**：[#8108 fix(host-runtime): add builtin.time shift and typed input issues](https://github.com/nearai/ironclaw/pull/8108)（未关闭）：针对 `builtin.time` 工具的功能缺口进行修复，新增用于相对时间计算的 `shift` 操作，并修复类型化输入处理问题。修复 PR 已在评审中。

每日故障分类报告（#8111、#8106）记录的基准测试失败完全由底层模型质量问题（DeepSeek-V4-Flash 的 OCR 与推理错误）导致，并非 IronClaw 代码缺陷，因此不计入应用 bug。

---

## 6. 功能需求与路线图信号
过去7天共提交 2 个新功能需求，均与项目现有优先级高度契合，有望纳入近期版本：
1. **Turn-0 工具选择（Issue #8113）**：本次提出的 BM25F + 嵌入向量混合排序方案直接基于 IronClaw 现有工具发现基础设施构建（保留了 4 个核心发现桥接工具），且设计为可选启用模式，因此发布风险较低，可作为实验性功能纳入 1.4.x 小版本补丁或 1.5.0 版本。
2. **NEARA 发行平台 MCP 扩展（Issue #8112）**：该需求契合 IronClaw 的 NEAR 生态本源定位，且遵循现有 hosted-MCP 扩展模式，因此有望在面向 NEAR 场景的部署版本中优先排期，可能在 1.5.x 发布周期内落地。

其他即将落地的在研功能：
- 意大利语 WebUI 本地化（[#8107 feat(webui): add Italian (it) locale](https://github.com/nearai/ironclaw/pull/8107)）：翻译工作已全部完成，待评审，大概率纳入 1.4.1 正式版或 1.4.2 版本。
- 作用域虚拟技能根目录文档说明（[#8109 docs(skills): clarify scoped virtual skill roots](https://github.com/nearai/ironclaw/pull/8109)）：仅为文档变更，无运行时影响，预计未来 1-2 周内合入。

---

## 7. 用户反馈总结
过去7天的 issue/PR 活动中未收集到终端用户直接的满意/不满意反馈。从提交的条目中可推断出以下痛点与使用场景：
- **部署痛点**：此前 Google Workspace 扩展不支持通过 Web UI 配置 Google OAuth，给通过管理界面而非环境变量管理凭证的运维人员带来了阻碍（已在 1.4.1-rc.2 中修复）。
- **Web3 使用场景**：NEAR 生态用户希望使用 IronClaw 智能体与代币发行平台交互，表明对更多 DeFi/Web3 工具集成存在需求。
- **国际化痛点**：意大利语用户请求提供本地化 WebUI，反映出非英语用户群体正在增长。
- **可访问性/易用性痛点**：聊天输入框的 IME 输入问题给东亚语言用户带来了使用阻碍。

---

## 8. 待办事项关注
以下长期未合并的开放 PR 近期有更新，但仍未合入，可能需要维护者关注以推进进展：
1. **[#7834 chore(deps): bump the wasm group across 1 directory with 4 updates](https://github.com/nearai/ironclaw/pull/7834)**（2026-08-23 创建，已开放 36 天）：该 PR 为 wasm 生态依赖升级（含 wasmtime），已开放超过一个月。鉴于 1.4.1-rc.2 版本已通过锁文件刷新引入了修复版 wasmtime，该 PR 可能已过时，或因兼容性测试受阻需要分类处理。
2. **[#7988 chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)**（2026-08-29 创建，已开放 30 天）：该 PR 为夜间生成的代码库记忆快照更新，尚未合入。长期搁置该 PR 可能会降低内部开发工作流中智能体内置代码库知识的准确性。
3. **[#8078 chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates](https://github.com/nearai/ironclaw/pull/8078)**（2026-09-06 创建，已开放 22 天）：该 PR 为 tokio 生态依赖更新，已开放 3 周，可能因回归测试受阻需要优先排期处理。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目周报（2026-09-28）

## 1. 近7天概览
本周QwenPaw社区活跃度表现强劲，共更新50个Issue（34个处于开放/活跃状态，16个已关闭）和50个PR（41个开放，9个已合并/关闭）。本周未发布新版本，说明项目团队正聚焦于下一个版本前的增量Bug修复与功能打磨。项目保持了高效的响应速度，针对多平台的核心稳定性问题、用户体验痛点以及渠道专属Bug进行了处理。社区参与度持续高涨，尤其是围绕多租户版本QwenPaw Hub的未来发展方向讨论热烈。

## 2. 版本发布
近7天未发布新版本。

## 3. 项目进展
本周合并/关闭的9个PR推动了前端一致性、会话管理和定时任务可靠性的提升：
- **控制台用户体验修复**：PR #7972 ([agentscope-ai/QwenPaw#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972)) 作为v2.2.2b3侧边栏重构的后续优化，将侧边栏会话列表的默认分组方式调整为按`source`分组，解决了Issue #7968中反馈的聊天群组/文件夹可见性问题。
- **渠道Bug修复**：针对QQ官方机器人会话中消息重复处理的问题（PR #7983，[agentscope-ai/QwenPaw#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983)），以及企业微信文案中Markdown表格格式错误的问题（PR #7992，[agentscope-ai/QwenPaw#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992)）的修复方案已提交，目前正在审核中。
- **工具与服务提供商改进**：PR #7988 ([agentscope-ai/QwenPaw#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)) 为`grep_search`新增了二进制文件和内部文件过滤功能，以防止会话状态被污染；PR #7986 ([agentscope-ai/QwenPaw#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986)) 修复了自定义OpenAI兼容端点的上下文窗口推断错误问题。

## 4. 社区热门话题
最活跃的讨论主要围绕产品方向和核心功能缺口展开：
- **QwenPaw Hub多租户路线图**：Issue #7318 ([agentscope-ai/QwenPaw#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)) 以32条评论和4个👍的热度位居本周活跃讨论榜首，该议题收集了社区对v2.2.0推出的面向团队的Hub版本后续发展的反馈。讨论反映出市场对企业级多用户功能、管理员管控能力以及团队部署共享技能库的需求日益增长。
- **ChatGPT-5.5兼容性**：已关闭的Issue #4474 ([agentscope-ai/QwenPaw#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474)) 吸引了9条评论，体现了用户对支持OpenAI最新模型版本的关注，以及对新模型端点配置要求的澄清需求。
- **上下文压缩可靠性**：Issue #7628 ([agentscope-ai/QwenPaw#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)) 收到7条评论，用户反馈上下文压缩后仍会超出服务提供商的请求配额，导致正在进行的对话中断，凸显了上下文管理对于长时间运行的智能体任务的关键重要性。

## 5. Bug与稳定性
本周的Bug涉及核心上下文管理、渠道可靠性和工具安全等方面，按严重程度排序如下：
1. **严重**：Issue #7980 ([agentscope-ai/QwenPaw#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980)) — `grep_search`缺少二进制文件过滤功能，会匹配内部的`history.db-wal`文件，导致不可逆的会话状态污染和死循环。修复PR #7988已开放。
2. **高危**：Issue #7628 ([agentscope-ai/QwenPaw#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)) — 上下文压缩仅基于实时对话上下文触发，未考虑完整的服务提供商请求负载，导致请求配额超限和对话轮次失败。暂无修复PR。
3. **高危**：Issue #7534 ([agentscope-ai/QwenPaw#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)) — 飞书会话队列消费者在处理高优先级卡片消息后会永久卡住，导致会话无响应且无法恢复。暂无修复PR。
4. **中危**：Issue #7946 ([agentscope-ai/QwenPaw#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)) — QQ官方机器人网关在会话恢复时会重放事件，导致消息重复处理。修复PR #7983已开放。
5. **中危**：Issue #7850 ([agentscope-ai/QwenPaw#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850)) — 驱动卡片策略的并发写入会被后台`reload_driver`进程覆盖，导致策略更新丢失。暂无修复PR。

## 6. 功能需求与路线图信号
本周的用户需求指向了短期路线图中可能的优先级方向：
- **定时任务扩展**：Issue #4963 ([agentscope-ai/QwenPaw#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)) 提出支持直接执行脚本/Shell命令的定时任务，无需经过AI智能体处理，实现纯自动化运维。这与当前正在进行的定时任务可靠性优化（PR #7825）方向一致，很可能成为下一个次版本更新的功能。
- **智能体自主上下文管理**：Issue #7733 ([agentscope-ai/QwenPaw#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)) 和Issue #4525 ([agentscope-ai/QwenPaw#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525)) 均呼吁实现由智能体感知的上下文生命周期控制（包括检查点、逐出前预警、定时任务重置），以减少长时间运行工作流中的质量下降问题。鉴于本周有多个上下文管理相关Bug待解决，该领域将是v2.3.0版本的高优先级候选方向。
- **可自定义的预置组件**：Issue #7957 ([agentscope-ai/QwenPaw#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)) 提出允许用户禁用预置模型和渠道，为有特定工作流需求的用户精简界面。这项低成本的用户体验优化有望很快被排期开发。
- **MCP自动重连**：本周关闭的Issue #5900 ([agentscope-ai/QwenPaw#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900)) 此前提出为终止的`streamable_http` MCP会话增加自动重连功能。随着MCP工具超时配置（PR #6874）正在审核中，MCP可靠性改进已纳入路线图。

## 7. 用户反馈总结
从Issue讨论中梳理出的核心用户痛点和使用场景如下：
- **上下文可见性困扰**：用户反馈上下文压缩后聊天历史被截断的体验很差（Issue #7884，[agentscope-ai/QwenPaw#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)），刷新前端后无法查看更早的对话内容，导致用户困惑并丢失工作上下文。
- **团队部署需求**：Hub路线图讨论（Issue #7318）证实，团队对协作式部署QwenPaw存在强烈需求，用户提出了共享技能、基于角色的访问控制和管理员管理工具等诉求。
- **集成可靠性担忧**：飞书、QQ、企业微信等多个渠道的用户均反馈了反复出现的稳定性问题（会话卡住、消息重复、格式错误），影响了生产场景的使用。
- **自定义端点灵活性不足**：使用自托管模型（Ollama、llama.cpp、vLLM）的用户反馈了多个痛点，包括上下文窗口检测错误、连接测试时请求头未透传，以及网络搜索集成能力有限（Issue #1452，[agentscope-ai/QwenPaw#1452](https://github.com/agentscope-ai/QwenPaw/issues/1452)）。

## 8. 待办关注
长期未解决、需要维护者关注的Issue和PR：
- **Issue #2324（在#7318中被提及）**：多用户访问和管理员管理技能功能，这是团队部署的基础需求，已开放超过6个月，随着Hub版本的推出，社区需求进一步放大。
- **PR #6874 ([agentscope-ai/QwenPaw#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874))**：可配置的MCP工具调用超时功能，自8月10日起处于审核中，其依赖的MCP可靠性改进是多位用户的共同诉求。
- **PR #7357 ([agentscope-ai/QwenPaw#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357))**：聊天界面的工具调用可见性开关，自8月27日开放以来一直是高需求的用户体验改进功能，可减少工具调用密集的长对话中的界面混乱。
- **Issue #5856 ([agentscope-ai/QwenPaw#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856))**：上下文压缩过程中工具调用结构丢失导致400错误，自7月开放以来，用户持续反馈相关的压缩失败问题。

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目周报 | 2026-09-28

---

## 1. 过去 7 天总览
过去一周 ZeroClaw 项目活跃度持续走高，共有 50 个 Issue 和 50 个 Pull Request 产生更新 —— 其中 41 个 Issue 处于开放活跃状态，45 个 PR 正在开放评审中，仅关闭/合并了 9 个 Issue 和 5 个 PR。周期内未发布新版本。
工作重点高度集中在架构重构（插件运行时迁移、网关拆分）、安全加固、发布流水线可靠性以及跨模块 Bug 修复，表明项目正处于 v0.8.6 前的稳定阶段，同时推进多个大型工作流。

---

## 2. 版本发布
过去 7 天未发布新版本。

---

## 3. 项目进展（已合并/关闭的 PR）
过去一周仅合并或关闭了 5 个 PR，聚焦于发布基础设施和插件系统基础能力：
- **[PR #11086: fix(release): publish the dashboard bundle preflight verified](https://github.com/zeroclaw-labs/zeroclaw/pull/11086)** —— 修复了发布流水线中上传到 crates.io 的 dashboard 构建包与预飞校验的包不一致的问题，方案为复用预构建的已校验制品。
- **[PR #11178: feat(plugins): admit channel mirrors declared by manifest `provides`](https://github.com/zeroclaw-labs/zeroclaw/pull/11178)** —— 新增支持 WASM 插件清单声明自身可作为内置通道的直接替代方案，这是从编译时插件向运行时插件迁移的核心基础能力。
- **[PR #10070: feat(tools): gate file_download against SSRF with private-host opt-in](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** —— 落地了 `file_download` 工具的 SSRF 加固能力，同时保留了原贡献者提交中的 NAT64 和实时配置支持。
- **[PR #11168: test(plugins): make the egress pin test independent of live DNS](https://github.com/zeroclaw-labs/zeroclaw/pull/11168)** —— 新增确定性的插件出站测试，防止出现连接前重新解析地址的回归问题。
- **[PR #11091: fix(release): verify crates before the GitHub Release](https://github.com/zeroclaw-labs/zeroclaw/pull/11091)** —— 将 crates.io 预飞检查前移至公开 GitHub Release 创建之前执行，降低发布后回滚的风险。

---

## 4. 社区热门话题
讨论量最高的话题（按评论数排序）集中在治理机制、架构方向和核心运行时可靠性上：
1. **[Issue #8692: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15 条评论，开放中）—— 讨论量最高的是用于分类处理 RFC 和设计提案的流程跟踪项，表明随着贡献者数量增长，项目正在完善决策机制。
2. **[Issue #8850: Move optional channels & tools from compile-time feature flags to runtime plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)**（6 条评论，开放中）—— 向基于 WASM 的运行时插件迁移这一核心架构调整仍是最高优先级事项，相关工作正在稳步推进。
3. **[Issue #9381: crates.io publishing, packaging, and cargo-install follow-ups](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)**（5 条评论，开放中）—— v0.8.4 版本发布后的打包与分发跟进工作是维护者的重点关注领域。
4. **[Issue #10523: Bootstrap file truncation at 6000 chars is invisible to the operator](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)**（5 条评论，已关闭）—— 用户反馈的体验 Bug 本周得到解决，该问题表现为代理身份文件被静默截断，导致非预期行为。
5. **[Issue #11036: OpenCode big-pickle returns 403 FreeTierError on v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)**（5 条评论，已关闭）—— OpenCode 免费套餐的提供方兼容性问题已完成排查并关闭。

深层需求：社区当前优先关注**通过插件实现的可扩展性**和**操作透明度**—— 既包括维护者决策流程的透明，也包括终端用户对运行时行为的可见性。

---

## 5. Bug 与稳定性
Bug 按严重程度分级（S0 = 严重，S1 = 高，S2 = 中，S3 = 低）：

### 严重 / S0（数据丢失 / 安全风险）
- **[Issue #11136: concurrent file_edit/file_write calls to the same path silently drop one edit under parallel_tools](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)**（开放中，处理中，高风险）—— 并行工具执行中的竞态条件会导致数据静默丢失。暂未发现关联的修复 PR。
- **[Issue #11198: Delegated memory tools lose principal scope](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)**（开放中，已确认，高风险）—— 子代理委托实例可以访问其所属主主体作用域外的内存，属于权限提升 Bug。
- **[Issue #11197: Session resume restores forwarded environment after admin revocation](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)**（开放中，已确认，高风险）—— 已被撤销的管理员权限可通过恢复旧会话绕过权限限制。
- **[Issue #10966: Git --attr-source can hide a mutating subcommand from approval classification](https://github.com/zeroclaw-labs/zeroclaw/issues/10966)**（已关闭，已修复）—— 通过 Git 全局选项解析绕过安全沙箱的问题本周已解决。

### 高 / S1
- **[Issue #10778: multimodal image cap eviction rewrites earlier history messages and invalidates the cache prefix](https://github.com/zeroclaw-labs/zeroclaw/issues/10778)**（开放中，处理中，高风险）—— 图像上下文淘汰机制会破坏 Anthropic 提供方的对话历史缓存。**修复 PR 进行中：[PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)**
- **[Issue #10008: prove the plugin wasi:http hook dials the pinned address set](https://github.com/zeroclaw-labs/zeroclaw/issues/10008)**（开放中，已确认，高风险）—— 缺少插件出站安全保障的测试覆盖。**修复 PR 进行中：[PR #11168](https://github.com/zeroclaw-labs/zeroclaw/pull/11168)**

### 中 / S2
值得关注的中等严重度 Bug 包括：浏览器探针超时误分类（[#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757)）、Qdrant 向量召回缺少时间边界（[#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921)）、CLI REPL 的 UTF-8 退格键处理问题（[#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795)）以及 Windows 下 Ctrl+C 强制退出问题（[#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)）。

---

## 6. 功能需求与路线图信号
与路线图高度契合、大概率会在 v0.8.6 或 v0.9.0 中落地的用户需求功能：
1. **运行时 WASM 插件系统**（[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)）—— 核心架构调整已在积极落地中；插件目录和通道镜像支持已经开始逐步合并。
2. **知识图谱作为一等内存层**（[#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)）—— 关于将知识图谱从工具提升为原生内存层的 RFC，与项目在内存模块上的投入方向一致。
3. **实时语音托管通道**（[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)）—— 不受后端限制的 WebSocket 语音通道集成，目前处于搁置状态，但与多通道扩展目标一致。
4. **默认卡顿看门狗**（[#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)）—— 低风险的体验优化，用于防止代理轮次挂起，计划在近期版本发布。
5. **Discord 基于角色的授权**（[#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)）—— 高需求的通道访问控制功能，在社区服务器场景下有明确用例。

---

## 7. 用户反馈总结
本周 Issue 中反馈的具体用户痛点和使用场景：
- **静默行为不透明**：用户对 bootstrap 文件被静默截断（[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)）和工具失败未上报（[PR #11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203)）表示不满，体现出对更好的运行时可观测性的需求。
- **提供方兼容性**：免费套餐提供方功能故障（[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)）凸显了需要对非商业及兼容 API 提供方开展更广泛的测试。
- **跨平台体验短板**：Windows 专属的 Ctrl+C 崩溃问题（[#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)）和 REPL UTF-8 编辑 Bug（[#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795)）表明非 macOS/Linux 用户的使用体验仍有打磨空间。
- **分发痛点**：用户对 `cargo install` 支持和可靠的 crates.io 发布的需求（[#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)）表明，用户希望除了预构建二进制文件之外，还有更简单的安装路径。
- **通道功能对齐**：用户要求支持 Signal 的「笔记自我」功能（[#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158)）、WhatsApp PDF 预览（[#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)）和 Telegram 表情回应支持（[PR #10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843)），说明用户期待通道能覆盖完整的原生功能。

---

## 8. 待办事项观察
长期存在、影响较大，等待维护者关注或作者跟进的事项：
- **[PR #7821: canonical sandbox_policy schema with application-layer enforcement](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)**（创建于 2026-06-17，开放中，需作者跟进）—— 基础性的安全策略重构，高风险/超大规模，因作者更新延迟而停滞。
- **[PR #9746: per-agent ownership scoping for session tools and discord_search](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)**（创建于 2026-08-04，开放中，需作者跟进）—— 关键的身份权限范围修复，与当前的 S0 安全 Bug 方向一致，因作者操作阻塞。
- **[PR #10407: persistent session prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**（创建于 2026-08-27，开放中，需作者跟进）—— 面向用户的大型持久会话状态功能，等待维护者评审。
- **[Issue #7432: Runtime and gateway delivery - v0.8.6 and v0.9.0 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**（创建于 2026-06-09，开放中）—— 项目最大架构阶段的总路线图跟踪项，仅 2 条评论表明公开更新频率较低。
- **[Issue #7943: Realtime voice-host channel](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)**（创建于 2026-06-18，开放中，搁置状态）—— 高需求的语音通道功能被搁置在待办列表中，近期无进展更新。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*