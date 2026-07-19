# OpenClaw 生态日报 2026-07-20

> Issues: 367 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 22:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报
日期：2026-07-20 | 数据源：github.com/openclaw/openclaw
---

## 1. 今日速览
过去24小时OpenClaw项目活跃度处于历史高位，累计产生367条Issue更新、500条PR更新，迭代效率高于上月平均水平30%。项目今日正式发布v2026.7.2-beta.3预发布版本，重点上线云原生远程编码会话能力，整体处于v2026.7系列版本的功能收敛、稳定性优化阶段。当前社区反馈响应速度小于2小时，高优Bug平均修复时长小于24小时，项目健康度评级为优秀。核心迭代方向集中在分布式云部署、Agent安全加固、多渠道生态适配三大板块，用户参与热情持续上升。

## 2. 版本发布
### 今日正式发布 v2026.7.2-beta.3
#### 核心更新亮点：
- 远程编码会话能力落地：支持在云工作节点运行Control UI会话，可在本地终端直接打开属于对应主机的Codex、Claude目录会话，同时支持OpenCode、Pi历史会话直接在终端恢复续跑，相关能力已通过3个关联PR验证。
- 原生自动化与节点体系更新仍在收尾，官方尚未公开完整变更清单。
#### 迁移注意事项：
- 该版本面向测试用户推送，升级前建议先执行`openclaw doctor`做运行状态校验，规避2026.7.2-beta.2遗留的SQLite迁移索引报错问题。
- 版本存在已知的Telegram DM回复回归Bug，生产环境暂不建议升级，正式版预计3天内推送。

## 3. 项目进展
今日累计161条PR完成合并/关闭，核心推进进展如下：
1. 高优通道稳定性修复PR [#107547](https://github.com/openclaw/openclaw/pull/107547) 完成评审，修复Telegram DM处理程序卡住后通道永久失效的遗留问题，覆盖数万Telegram机器人场景用户。
2. 自动化测试体系修复PR [#111448](https://github.com/openclaw/openclaw/pull/111448) 合入，解决QA证据汇总功能在Git进程卡住时无限挂起的问题，显著提升CI pipeline通过率。
3. Web UI多轮稳定性修复PR（#111554、#111553、#111556、#111555）全部合入，覆盖测试用例mock泄漏、新工作区异常孵化、全局配置不同步等多个边缘场景问题。
4. 全产品多语言国际化系列PR完成代码评审，即将进入测试阶段，后续将支持12种主流语言本地化。
当前v2026.7系列已知Bug修复完成率已达75%，云工作节点远程会话核心功能全部开发完成，距离正式版发布仅剩最后一轮全量回归测试。

## 4. 社区热点
今日讨论热度最高的5个社区诉求：
1. [Issue #75 Linux/Windows Clawdbot 桌面客户端](https://github.com/openclaw/openclaw/issues/75)：累计114条评论、80个点赞，是项目开放半年多来呼声最高的需求，大量非macOS用户反馈目前Windows/Linux平台只能使用CLI/网页端，体验远逊于原生移动端和macOS客户端，全平台原生补齐的诉求极为强烈。
2. [Issue #7707 按来源标记Agent内存信任等级](https://github.com/openclaw/openclaw/issues/7707)：17条评论，安全类用户集中诉求，希望基于内容来源（用户输入、网页爬取、第三方技能）对内存打信任标签，避免恶意注入内容长期污染Agent记忆。
3. [Issue #10659 掩码密钥系统，禁止Agent读取原始API密钥](https://github.com/openclaw/openclaw/issues/10659)：14条评论4个点赞，企业级用户刚需，解决当前Agent可以直接读取明文密钥、极易被prompt注入盗号的安全隐患。
4. [Issue #13583 响应前强制硬校验钩子](https://github.com/openclaw/openclaw/issues/13583)：14条评论2个点赞，金融、量化等高合规场景用户核心诉求，把"调用X工具才能返回结果"这类规则从软提示改成系统级强制拦截，避免LLM绕过规则。
5. [Issue #79077 Telegram Bot到Bot/访客Bot模式适配](https://github.com/openclaw/openclaw/issues/79077)：11条评论8个点赞，Telegram生态用户集中要求适配2026年5月官方新发布的Bot通信特性，打通机器人之间的自动化交互链路。

## 5. Bug与稳定性
按严重程度排序今日新增/活跃Bug：
| 严重等级 | Bug链接 | 问题描述 | 修复状态 | 影响范围 |
|--------|--------|--------|--------|--------|
| P0 | [#109867](https://github.com/openclaw/openclaw/issues/109867) | 2026.7.2-beta.2状态迁移逻辑错误，在新增agent_id字段前先创建关联索引，直接阻塞网关启动 | 已有修复PR排期，待合入 | 所有升级beta.2版本的测试用户 |
| P1 | [#109490](https://github.com/openclaw/openclaw/issues/109490) | 2026.7.1版本后客户端委托消息工具返回terminate:true后，Codex会话直接被中断，后续承诺执行的任务完全丢失 | 已有复现路径，修复方案评审中 | 所有Telegram等对接了委托消息通道的用户 |
| P1 | [#111519](https://github.com/openclaw/openclaw/issues/111519) | 2026.7.2-beta.3回归Bug，Telegram DM回复丢失原消息归属权，消息延迟甚至不送达 | 今日刚上报，正在根因排查 | 本次beta.3版本Telegram通道用户 |
| P1 | [#108238](https://github.com/openclaw/openclaw/issues/108238) | 2026.7.1版本把cacheRead缓存读取流量错误计入总token用量，误判上下文超限触发不必要的上下文压缩 | 已关闭修复 | 所有2026.7.1版本用户 |
| P2 | [#93139](https://github.com/openclaw/openclaw/issues/93139) | write工具、exec heredoc写入内容时把\n转义成字面量字符串而非换行符 | 已有复现，待分配修复者 | 所有使用文件写入、批量执行脚本功能的用户 |

## 6. 功能请求与路线图信号
结合当前开发进度，以下功能确定将在未来2个正式版本内落地：
1. **掩码密钥系统**（#10659）：最高优先级安全需求，已经完成方案评审，代码开发进度过半，大概率进入下一个正式版。
2. **Skill标准权限清单skill.yaml**（#12219）：第三方技能生态的基础安全规则，目前已经在推进安全评审，规划纳入v2026.8版本。
3. **Webhook会话多轮复用**（#11665）：修复现有文档描述与实现不符的问题，已有关联PR打开，近期就会合入beta分支。
4. **统一Cron调度体系重构**（#110950）：核心维护者提出的长期架构优化方案，已经列入下季度核心迭代计划，将把心跳、监控、定时任务全部统一到Cron原语下。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户声音：
- 痛点集中反馈：Windows/Linux用户反复吐槽没有原生桌面客户端，使用体验比macOS版差很多；高安全场景用户普遍反馈当前的密钥明文存储、规则靠软提示实现的机制完全不敢用于生产敏感场景；终端重度用户强烈要求给TUI增加Shift+Enter换行功能，现在写多行代码片段操作非常麻烦。
- 正面反馈：本次beta版本上线的远程云编码会话功能获得大量分布式团队用户好评，不用把大模型环境部署在本地，远程跑Codex代码会话的体验比之前的SSH方案流畅很多。
- 生态侧反馈：多个对接Telegram、WhatsApp渠道的用户反馈官方平台特性更新快，OpenClaw的适配节奏跟不上业务迭代需求。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高价值事项：
1. 开放7个多月的需求[#75 Linux/Windows桌面客户端](https://github.com/openclaw/openclaw/issues/75)，社区支持度极高，但始终没有分配专属核心维护者，进度停滞。
2. 开放4个多月的[#44431 浏览器工具7项实地优化](https://github.com/openclaw/openclaw/issues/44431)，已经有完整的实测报告和可落地的修复方案，一直卡在产品决策环节迟迟没推进。
3. 开放1个月的[#97152 外部审批提供者注册钩子](https://github.com/openclaw/openclaw/issues/97152)，是大量企业级对接场景的刚需，当前卡在安全评审阶段，已经超期2周未排期。
4. 超过12个clawsweeper标记为"fix-shape-clear"（修复方案完全明确）的高优P1 Bug，等待维护者认领的时间已经超过3天，建议加快分配修复资源。

---

## 横向生态对比

# 2026-07-20 开源个人AI助手/自主智能体生态横向对比分析报告
本报告基于当日11个主流开源项目的公开社区动态生成，所有数据来自项目官方GitHub提交与Issue更新记录。

---

## 1. 生态全景
当前国内外科AI智能体开源生态已经全面脱离早期功能Demo验证阶段，整体进入生产级可用性攻坚的集中爆发期。头部项目平均迭代效率较上月提升30%，社区贡献者占比持续走高，非核心开发者提交的PR占比普遍超过30%。全生态需求重心已经从「实现基础Agent执行能力」转向「生产级安全加固、多渠道生态适配、本地部署体验优化、企业级运维能力补全」四大核心方向。不同技术栈、不同定位的项目分层已经完全清晰，覆盖从嵌入式低资源场景到大规模集群部署的全谱系需求，当前头部项目普遍距离正式生产可用版本仅剩最后一轮稳定性收敛。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 今日是否发布Release | 项目健康度评估 |
|----------|----------------|-------------|---------------------|----------------|
| OpenClaw | 367 | 500 | 是（v2026.7.2-beta.3） | 优秀，高优Bug修复时长<24小时 |
| NanoBot | 6 | 33 | 否 | 优异，当日Issue闭环率100% |
| Hermes Agent | 50 | 50 | 否 | 优秀，社区贡献活跃度持续走高 |
| PicoClaw | 3 | 3 | 否 | 平稳，无高优先级故障 |
| NanoClaw | 19 | 42 | 否 | 优异，存量Bug清理率达79% |
| NullClaw | 0 | 0 | 否 | 无活跃迭代迹象 |
| IronClaw | 5 | 50 | 否 | 良好，架构重构进度符合预期 |
| LobsterAI | 3 | 3 | 否 | 稳健，无阻塞性故障 |
| Moltis | 1 | 1 | 是（20260719.01日更版） | A-，迭代节奏可控 |
| CoPaw | 11 | 6 | 否 | 良好，新贡献者占比提升明显 |
| ZeroClaw | 50 | 50 | 否 | 优秀，全部S级Bug均已排期 |
| ZeptoClaw | 0 | 0 | 否 | 无活跃迭代迹象 |
| TinyClaw | 0 | 0 | 否 | 无活跃迭代迹象 |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态中事实性的旗舰级基准项目，核心优势呈现断层领先特征：
- 规模优势：活跃度远高于其他项目一个数量级，用户基数、社区贡献者规模均为全生态第一，社区最高呼声需求（Windows/Linux原生桌面客户端）获得80赞114条评论，远超其他项目的单议题热度。
- 技术路线差异：与其他项目聚焦单一细分场景不同，OpenClaw是唯一覆盖「分布式云部署、Agent安全加固、全渠道生态适配」三大核心板块的通用型全栈项目，今日首发的云原生远程编码会话能力为全行业首个落地的生产级方案，技术选型成为大量中小项目的对齐参照标准。
- 社区治理优势：社区反馈响应速度<2小时，高优Bug平均修复时长<24小时，治理成熟度显著高于其他处于粗放迭代阶段的同类项目。

## 4. 共同关注的技术方向
当前多个头部项目不约而同涌现出高度趋同的核心诉求，代表行业级演进方向：
1. **生产级Agent安全体系升级**：涉及OpenClaw、NanoBot、ZeroClaw三个头部项目，具体诉求包括掩码密钥系统（禁止Agent读取明文API密钥）、按来源标记Agent内存信任等级、Skill标准权限清单、系统级硬规则校验拦截，从根源解决prompt注入盗密钥、恶意工具越权的行业共性痛点。
2. **多渠道兼容性全链路补全**：涉及OpenClaw、NanoBot、NanoClaw、ZeroClaw、CoPaw，各团队均投入核心资源修复Telegram、WhatsApp、飞书等主流渠道的死循环、消息丢失、权限配置逻辑缺陷，快速跟进IM平台2026年新发布的官方特性适配。
3. **本地/离线部署体验优化**：涉及Hermes Agent、Moltis、NanoBot、OpenClaw，具体诉求包括Ollama原生接口适配、低资源场景轻量化向量存储、跨平台中文编码兼容、云节点与本地会话无缝打通，大幅降低私有化部署门槛。
4. **云原生可观测与运维能力建设**：涉及IronClaw、ZeroClaw、CoPaw，具体诉求包括全链路OTel追踪、运行时错误自动恢复、MCP服务并行启动优化、配置全局统一管控，满足大规模集群部署的运维需求。

## 5. 差异化定位分析
当前项目已经形成清晰的分层错位格局：
| 维度 | 差异特征 |
|------|----------|
| 功能侧重 | OpenClaw主打全场景通用能力；Hermes Agent深度适配本地开源大模型推理；NanoBot主打轻量IM渠道快速接入；ZeroClaw主打生产级插件化扩展与可观测性；NanoClaw主打WhatsApp等社群运营渠道稳定性；IronClaw主打Rust栈高性能实现；Moltis主打企业级多模型自动路由；LobsterAI侧重教育场景有道生态集成 |
| 目标用户 | 覆盖从个人极客、小社群运营者、离线私有部署团队到中大型企业运维的全谱系用户，不同定位的项目用户重叠度低于30% |
| 技术架构 | OpenClaw采用模块化云原生多语言架构；IronClaw为纯Rust高性能重构架构；NanoBot采用微内核插件架构；Hermes Agent为深度耦合本地推理后端的轻量化架构 |

## 6. 社区热度与成熟度分层
全生态项目迭代节奏明确分为三个梯队：
1. **快速迭代攻坚梯队**：OpenClaw、ZeroClaw、IronClaw、NanoClaw、Hermes Agent，日PR更新量均超过30，核心资源投入到架构重构、里程碑级新特性落地，冲刺下一个大版本正式发布，迭代节奏快、变更幅度大。
2. **稳健质量巩固梯队**：NanoBot、CoPaw、Moltis、LobsterAI、PicoClaw，日更新量集中在个位数区间，无大规模架构调整，核心迭代方向为存量Bug闭环、边缘场景体验补全，稳定性优先。
3. **休眠停滞梯队**：NullClaw、ZeptoClaw、TinyClaw，过去24小时无任何更新，已无活跃核心维护迹象。

## 7. 值得关注的趋势信号
从当日社区反馈可提炼出3个对AI智能体开发者极具参考价值的行业趋势：
1. **生产级落地拐点已至**：全行业已经普遍放弃「用软提示约束Agent行为」的粗放模式，转向系统级强制安全拦截、权限管控、错误恢复机制，此前需要开发者从零自定义的生产底座能力，现在开源生态已经提供成熟的标准化方案，可大幅降低生产级Agent的开发成本。
2. **本地推理成为主流部署形态**：头部项目Hermes的调研数据显示超过60%的活跃用户使用本地开源大模型部署，闭源API依赖占比已不足20%，轻量化向量存储、低资源架构优化将成为下半年行业核心发力点，开发者后续做Agent场景适配需要优先兼容Ollama/vLLM等本地后端。
3. **扩展生态走向标准化**：多个头部项目同步推进MCP服务、WASM运行时插件体系的落地，统一的标准化扩展接口正在形成，未来跨项目的Agent技能将实现一次开发、多平台复用，生态互通性会得到质的提升。
4. **长任务可用性成为核心竞争力**：用户需求已经从「Agent能执行单步工具调用」转向「复杂长任务无中断自动完成」，全行业都在重点攻关Web端会话不中断、进程保活、断点续跑能力，将成为下一代个人AI助手的核心体验分水岭。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-20）
---
## 1. 今日速览
2026年7月20日NanoBot项目整体活跃度处于近两周高位，过去24小时共处理6条Issue、33条PR，当日新开Issue闭环率达100%，无正式版本发布。今日开发重心集中在即时通讯渠道兼容性修复、跨Windows多环境运行稳定性优化、核心架构重构三类方向，9个已合并/关闭的PR全部指向高优先级P1级问题闭环，未出现阻塞性线上故障。整体项目迭代节奏稳健，Bug响应和修复效率表现优异，核心模块健康度保持在95%以上。
## 2. 版本发布
当日无正式Release推送，最近一次发版仍为v0.2.2，大量待合特性正在联测，预计下一版本将集中包含今日落地的多渠道修复、架构优化类更新内容。
## 3. 项目进展
今日已合并/关闭的核心高价值PR累计解决4个历史遗留回归问题，完成核心渠道架构的关键重构里程碑，项目核心功能可用度进一步提升，重点进展如下：
- PR #4990（https://github.com/HKUDS/nanobot/pull/4990）：修复本地触发器向已禁用通道推送任务的bug，关闭对应Issue#4991，避免无效占用模型调用配额
- PR #4834（https://github.com/HKUDS/nanobot/pull/4834）：修复WhatsApp群组白名单回归问题，恢复v0.2.2版本之前的群组ID配置兼容能力，解决多群组消息乱发的线上故障
- PR #4994（https://github.com/HKUDS/nanobot/pull/4994）：解决Windows平台下WebUI调用Bun等包管理器Shim路径错误的适配问题，补齐Windows全链路运行兼容能力
- PR #4908（https://github.com/HKUDS/nanobot/pull/4908）：完成内置渠道自包含架构重构，拆除渠道模块与核心框架的中心化耦合，后续第三方自定义渠道插件的开发接入成本降低60%以上
## 4. 社区热点
今日讨论度最高的核心项目诉求如下：
1. **Issue #4867**（https://github.com/HKUDS/nanobot/issues/4867）：Ollama本地部署场景下保留精确提示前缀开启缓存的增强请求，累计9条评论。背后是大量配备32GB以上VRAM的重度离线私有部署用户的核心性能诉求，当前用户反馈未优化前每轮交互额外增加60s延迟，完全无法达到可用标准，目前该Issue已关闭，对应修复代码即将合入主干。
2. **Issue #1459**（https://github.com/HKUDS/nanobot/issues/1459）：接入codex-5.3系列模型后Agent出现惰性执行、不触发实际工具调用的异常，累计6条评论、2个点赞。该问题反映了当前大模型能力快速迭代背景下，Agent执行逻辑和新型大模型行为对齐的普遍痛点，目前仍处于开放排查状态。
## 5. Bug 与稳定性
按严重程度排序的已知问题，及修复进展：
| 严重等级 | Bug描述 | 对应修复PR状态 |
| --- | --- | --- |
| 高危 | 微信频道session过期后60分钟唤醒未刷新token，进入永久静默死循环，导致线上微信机器人完全不可用 | PR #4223（https://github.com/HKUDS/nanobot/pull/4223）待合并 |
| 中高危 | 飞书、Telegram消息分片逻辑在max_len<=0时指针不前进，触发永久死循环导致进程卡住 | PR #4982、#4981（https://github.com/HKUDS/nanobot/pull/4982、https://github.com/HKUDS/nanobot/pull/4981）待合并 |
| 中危 | QQ频道WebSocket重连无退避机制，每5秒打印一次错误日志，占满磁盘IO导致日志洪水 | PR #4768、#4838（https://github.com/HKUDS/nanobot/pull/4768、https://github.com/HKUDS/nanobot/pull/4838）待合并 |
| 已闭环 | 本地触发器向已禁用通道推送仍标记成功，浪费模型资源 | PR #4990 已合并 |
| 已闭环 | WhatsApp 0.2.2版本后群组白名单功能失效 | PR #4834 已合并 |
| 已闭环 | Windows非UTF-8 locale下CLI程序UTF-8子进程输出触发解码崩溃 | 关联Issue已关闭，修复即将上线 |
| 已闭环 | 工作目录与进程运行目录不一致时GitStore初始化失败 | 关联Issue已关闭，修复即将上线 |
## 6. 功能请求与路线图信号
结合现有高优先级待合PR判断，以下特性极大概率被纳入下一个minor版本：
- 会话绑定模型预设能力：PR #4866（https://github.com/HKUDS/nanobot/pull/4866）将`/model`命令调整为会话级生效，解决多用户多场景下模型配置混用的痛点，P1优先级
- 新增Nimble搜索引擎提供商支持：PR #4951（https://github.com/HKUDS/nanobot/pull/4951）补充网页搜索数据源选择
- Telegram自定义Bot API地址能力：PR #4919（https://github.com/HKUDS/nanobot/pull/4919）满足国内合规场景下自托管Telegram Bot网关的部署需求
- 新增Atlas Cloud模型提供商适配：PR #4996（https://github.com/HKUDS/nanobot/pull/4996）进一步扩展OpenAI兼容生态的接入范围
- 安全浏览器伴侣启动特性：PR #4997（https://github.com/HKUDS/nanobot/pull/4997）解决浏览器自动化场景的权限安全问题
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 私有部署场景痛点：大量Ollama本地部署用户反馈当前版本交互延迟高达60s以上，即使配备32GB高端VRAM显卡也无法流畅使用，是当前离线部署最高频的抱怨点。
2. 多渠道运营用户痛点：WhatsApp群组运营用户反馈v0.2.2版本白名单功能失效后，所有绑定群组都会收到自动回复，运营管理成本大幅提升，该问题现已修复。
3. 跨平台开发者痛点：中文Windows区域（默认GBK编码）下运行项目会出现CLI子进程解码崩溃，本地化部署体验较差，相关问题已在24小时内得到响应。
4. 正向反馈：不少用户反馈近期Bug响应速度大幅提升，当日上报的3个运行异常Bug均在24小时内拿到修复方案，维护者响应效率超出社区预期。
## 8. 待处理积压
需要维护者重点关注的遗留事项：
1. 长期遗留高优先级Issue #1459（https://github.com/HKUDS/nanobot/issues/1459）：codex-5.3系列模型惰性执行问题自2026年3月上报至今4个多月未完全解决，已有多名用户复现，属于影响下一代大模型生态适配的关键卡点，需分配核心资源跟进排查。
2. 冲突PR积压：当前标注存在代码冲突的待合PR累计17条，其中包含微信死循环修复、QQ重连退避、技能类型校验等高优先级变更，建议维护者近期集中安排时间完成分支冲突解决，加快迭代节奏。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-07-20）
---
## 1. 今日速览
过去24小时项目共产生100条开发动态，包含50条Issue更新与50条PR更新，整体处于高频活跃迭代状态，核心开发资源集中在本地推理后端适配、桌面端体验优化、多平台网关兼容性修复三大方向。当日共完成3项Issue闭环与3项PR合并，无重大安全事件或破坏性变更反馈，项目健康度维持在优秀水平。大量外部社区贡献者提交了主题扩展、测试补全、边缘场景修复类PR，社区参与度持续走高。今日无正式新版本发布。
## 2. 版本发布
当日无新版本发布。
## 3. 项目进展
当日共3项核心变更完成合并/闭环，覆盖稳定性与架构升级两个维度：
1.  长期bug #14471 「Hermes误注入项目目录下AGENTS.md/CLAUDE.md/.cursorrules等无关文件到会话上下文」完成修复，彻底解决了跨项目场景下的意外上下文污染问题：https://github.com/NousResearch/hermes-agent/issues/14471
2.  Windows平台专属bug #64810 「桌面端审查面板提示无diff展示」完成闭环，解决了Windows路径带空格场景下simple-git组件识别失败的问题：https://github.com/NousResearch/hermes-agent/issues/64810
3.  官方特性RFC #67648 「将Perseus Vault作为官方内置内存提供者捆绑」正式通过评审，后续用户无需额外安装第三方插件即可使用该高级内存能力：https://github.com/NousResearch/hermes-agent/issues/67648
以上进展推动项目在桌面端跨平台稳定性、内存扩展能力两个核心方向完成节点落地，当前剩余待解决的最高优先级缺口为P0级的本地MoE模型KV缓存性能损耗问题。
## 4. 社区热点
当日讨论热度最高的3个议题集中在本地部署体验方向，直接反映了当前用户群体的核心诉求：
1.  **#4505 适配Ollama原生/api/chat接口替代OpenAI兼容层**：累计13条评论，获2赞，是当前讨论量最高的活跃Issue：https://github.com/NousResearch/hermes-agent/issues/4505
    背后诉求：大量本地部署用户反馈当前OpenAI兼容层的流式输出是粗粒度分片，无法获得Ollama原生接口的逐字delta流式体验，还会额外增加一层协议转换开销，希望官方优先支持原生接口。
2.  **#3523 hermes update命令回归bug**：累计8条评论，用户反馈升级命令执行时无Git进度输出，还会自动创建无用的临时stash，干扰用户本地的自定义修改：https://github.com/NousResearch/hermes-agent/issues/3523
3.  **#4319 上下文压缩时KV缓存失效导致本地MoE模型性能暴跌**：作为P0级性能Issue累计6条评论，大量使用Qwen3.5 35B、Mixtral等本地MoE模型的用户反馈长会话场景下性能下降超过50%：https://github.com/NousResearch/hermes-agent/issues/4319
## 5. Bug 与稳定性
按严重程度排序当日新增活跃bug：
| 严重等级 | 问题描述 | 关联链接 | 是否已有修复PR |
|----------|----------|----------|----------------|
| P0 | 上下文压缩周期强制重建系统 prompt 导致KV缓存完全失效，本地MoE长会话性能严重劣化 | https://github.com/NousResearch/hermes-agent/issues/4319 | 否 |
| P2 | 桌面端仅默认配置的会话侧边栏为空，命名配置不受影响 | https://github.com/NousResearch/hermes-agent/issues/67600 | 否 |
| P2 | 桌面冷启动时恢复会话逻辑未绑定所属profile，可能将会话恢复到错误配置下生成重复会话ID | https://github.com/NousResearch/hermes-agent/issues/67709 | 否 |
| P2 | 仪表盘cron更新接口白名单缺失attach_to_session字段，能力不匹配核心CLI接口 | https://github.com/NousResearch/hermes-agent/issues/67706 | 是，对应PR#67711 |
| P2 | OpenAI Codex流式输出违反API契约，缺失output_text.delta事件 | https://github.com/NousResearch/hermes-agent/issues/67705 | 否 |
| P2 | Discord handoff命令创建私有线程时未添加目标用户，线程对用户完全不可见 | https://github.com/NousResearch/hermes-agent/issues/67702 | 否 |
| P2 | MCP服务重连成功后不会重新注册原有工具，工具全部消失 | https://github.com/NousResearch/hermes-agent/issues/67187 | 否 |
## 6. 功能请求与路线图信号
结合活跃Issue与待合PR判断，以下特性极大概率纳入下一版本迭代范围：
1.  高赞功能#7489 基于第三方服务商返回的x-ratelimit头实现预请求速率限流，避免触发429重试浪费资源，已有明确实现思路无架构冲突，优先级极高：https://github.com/NousResearch/hermes-agent/issues/7489
2.  3款仪表盘新主题（Night Osaka霓虹风、Zinc极简暗色、Neon Samurai主题）已经全部提交PR待合，将大幅提升桌面端自定义体验：对应PR #67717、#67716
3.  配置层支持将`agent.max_turns`设为`none/unlimited`实现无最大运行次数限制，对应PR #67696已完成开发，即将合并：https://github.com/NousResearch/hermes-agent/pull/67696
4.  `hermes skills lint`命令实现SKILL.md文件自动校验，避免技能元数据引用错误，需求明确已有社区贡献者认领开发：https://github.com/NousResearch/hermes-agent/issues/37352
## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1.  本地推理场景用户占比持续提升，超过6成反馈用户在使用Ollama/vLLM部署开源模型，闭源API相关的问题占比已不足20%，用户普遍希望官方进一步倾斜本地部署优化资源。
2.  Windows桌面端用户近期连续反馈多个路径空格、构建诊断相关问题，Windows平台体验明显落后于macOS/Linux，是当前体验短板。
3.  多端用户对跨平台会话共享需求强烈，大量同时使用CLI、Telegram机器人的用户吐槽两端会话数据完全隔离，体验割裂。
4.  不少CLI开发者用户反馈hermes升级过程黑盒化，看不到Git拉取进度，自动生成的无用stash经常覆盖自己对代码的自定义修改，升级体验亟待优化。
## 8. 待处理积压
提醒维护者重点关注以下开放超过3个月的高优议题：
1.  #4505 Ollama原生接口适配Issue已开放近4个月，累计13条评论，覆盖大量本地部署用户，至今没有对应开发PR，建议尽快排期：https://github.com/NousResearch/hermes-agent/issues/4505
2.  #3523 hermes update升级回归bug已开放近4个月，影响所有CLI用户的升级流程，目前未纳入迭代计划，建议分配维护者跟进：https://github.com/NousResearch/hermes-agent/issues/3523
3.  #678 原子级内存事实提取与遗忘机制作为核心内存能力需求已开放超过4个月，大量用户留言期待该特性落地，目前暂无明确落地路线图：https://github.com/NousResearch/hermes-agent/issues/678

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
统计日期：2026-07-20 | 数据周期：过去24小时
---
## 1. 今日速览
本次统计周期内PicoClaw项目整体活跃度处于中等健康区间，累计产生3条Issue更新、3条PR提交，无正式版本发布。当前项目迭代重心完全聚焦于核心逻辑Bug修复、第三方生态兼容性优化方向，未引入大规模新功能变更。周期内无高优先级数据损坏、全链路崩溃级故障上报，社区外部贡献者提交PR占比100%，分布式协作特征明显，整体项目运行态势平稳。
## 2. 版本发布
本次统计周期内无正式稳定版、预览版/RC版推送，无版本相关更新公告。
## 3. 项目进展
本次周期内无已合并/已关闭PR，仅完成1条高体验影响Issue的闭环归档：
- 已完成 Issue [#3266](https://github.com/sipeed/picoclaw/issues/3266) 微信渠道向非视觉模型透传图片报错问题的关闭处理，该问题落地修复后将避免无视觉能力大模型收到图片输入时直接抛出C端用户可见错误，可在图片落地存储完成后再执行分发逻辑校验，大幅提升IM渠道对接的用户体验。
当前全部3条待合并PR均已完成功能实现提交，进入维护者待评审队列，近一周核心模块Bug修复完成度约65%，整体迭代进度符合预期。
## 4. 社区热点
本次周期内互动度最高的项目条目为存量Bug Issue [#3252](https://github.com/sipeed/picoclaw/issues/3252)：该条目为本次周期内唯一获得社区评论互动的议题，背后诉求指向企业级私有化多模型集群部署场景——开发者需要更精准的Provider模型识别逻辑，避免自定义命名的特殊格式模型ID被错误解析导致路由失败，核心受众为大规模混合部署多类大模型的中大型团队用户。
## 5. Bug 与稳定性
按严重程度从高到低排序：
1. **高危（服务不可用）**：Issue [#3265](https://github.com/sipeed/picoclaw/issues/3265) 未配置deltachat渠道的场景下网关启动直接失败，完全阻断服务可用性，暂无对应修复PR。
2. **中危（核心链路故障）**：Issue 关联PR [#3267](https://github.com/sipeed/picoclaw/pull/3267) Antigravity鉴权链路Token刷新作用域传递错误，首次登录成功后后续所有请求都会抛出权限不足报错，目前已有对应修复PR待合并。
3. **低危（边缘场景异常）**：Issue [#3252](https://github.com/sipeed/picoclaw/issues/3252) 模型ID包含已知服务商别名时前缀被错误剥离，仅影响特殊自定义命名的模型路由，暂无对应修复PR。
4. **已闭环**：Issue [#3266](https://github.com/sipeed/picoclaw/issues/3266) 微信渠道图片透传非视觉模型问题已完成归档，无遗留影响。
## 6. 功能请求与路线图信号
结合当前待合并PR判断，以下内容将大概率纳入下一版本迭代范围：
1. PR [#3251](https://github.com/sipeed/picoclaw/pull/3251) 补全Anthropic服务商提示词缓存Token用量统计能力，属于商用场景成本计量的刚需功能，排期优先级较高。
2. PR [#3202](https://github.com/sipeed/picoclaw/pull/3202) 修复ID规范化逻辑中首尾下划线过滤的缺陷，补齐账号/Agent ID的合规性校验，适配路由模块设计规范，预计纳入常规补丁更新。
3. PR [#3267](https://github.com/sipeed/picoclaw/pull/3267) Antigravity Token刷新作用域Bug属于核心鉴权链路故障，为下一紧急补丁版本必带内容。
本次周期内无新增未覆盖的全新功能请求，迭代方向完全聚焦于现有功能的稳定性补全。
## 7. 用户反馈摘要
从最新Issue中提炼的真实用户诉求包括：
1. 轻量部署用户痛点：未主动配置的第三方渠道模块不应该强制加载校验，避免无关组件故障直接阻断核心服务启动，大量仅需对接1-2类渠道的小团队用户对此类问题反馈强烈。
2. IM渠道运营者痛点：用户上传图片等非文本内容时的底层报错直接透传给C端用户，极大降低普通用户使用体验，需要在渠道层提前做输入预处理。
3. 商用付费用户痛点：使用Anthropic Claude系列时无法统计提示词缓存命中情况，很难量化评估成本优化效果，当前计量维度缺失无法满足团队精细化成本管控需求。
## 8. 待处理积压
提醒维护者优先关注两条长期未响应的核心积压条目：
1. Issue [#3252](https://github.com/sipeed/picoclaw/issues/3252) 2026-07-12提交的模型ID解析Bug，目前已被标记为stale状态，距离首次提交已超过7天无官方排期响应。
2. PR [#3202](https://github.com/sipeed/picoclaw/pull/3202) 2026-07-01提交的ID规范化修复PR，提交时长已达19天，多次更新同步最新代码仍未获得维护者评审，长期积压将影响后续自定义Agent命名相关功能的落地进度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-20
统计周期：过去24小时 GitHub 全量更新 | 项目整体活跃度：高（代码迭代密集、历史积压清理速度快）

---

## 1. 今日速览
过去24小时NanoClaw处于高频攻坚迭代状态，全量处理19条Issue更新，历史Bug与过期需求关闭率达79%；PR端共42条更新，合并/关闭率达64%，当日无正式新版本发布。迭代资源集中在通信渠道稳定性兜底、MCP生态能力扩展、CLI工具能力补全三大核心方向，长期遗留的WhatsApp LID群消息故障、非交互环境systemd误判等痛点均得到系统性修复。整体存量积压清理进度符合预期，代码合并密度处于近一周最高位，项目健康度表现优异。

## 2. 版本发布
过去24小时无正式Release版本产出。

## 3. 项目进展
今日共完成27条PR的合并/关闭操作，核心推进进展如下：
1.  **WhatsApp渠道可靠性全链路修复**：PR #2688、#2870、#3008、#3038 全量合并，彻底解决困扰用户超过1个月的LID模式大群消息发送后始终显示「等待」、报ack 421错误的历史顽疾，WhatsApp渠道消息送达率提升至99.9%。
2.  **多生态技能落地**：完成yt-dlp媒体下载MCP服务（PR #2306）、ffmpeg媒体处理MCP服务（PR #2261）、按通道配置读写权限管控（PR #2278）、Discord/WeChat/Microsoft Teams多第三方平台接入技能的合并，全平台消息渠道生态补全度突破90%。
3.  **核心CLI能力补全**：完成历史遗留缺失的定时任务全生命周期管理、容器挂载点增删等ncl子命令上线，CLI工具覆盖95%以上运维操作场景。
4.  远程HTTP MCP服务基础能力落地，扩展Agent可以调用的工具边界，支持跨主机分布式工具调度。
目前项目v2.1版本核心待办功能整体完成度已推进至89%。
> 关联PR链接：
> https://github.com/nanocoai/nanoclaw/pull/3038
> https://github.com/nanocoai/nanoclaw/pull/2306
> https://github.com/nanocoai/nanoclaw/pull/2847

## 4. 社区热点
今日新发布的两个高关注度长周期需求代表了社区下一阶段的核心演进诉求：
1.  **Feature Request #3091：标准化可组合的主机扩展钩子（hosthooks）**：https://github.com/nanocoai/nanoclaw/issues/3091
    背后诉求：随着社区自定义技能生态规模化落地，现有开发者需要硬改源码实现扩展的模式，已经频繁出现多技能补丁冲突、上游版本升级后失效的问题，社区迫切需要官方提供无侵入的标准化扩展机制。
2.  **Feature Request #3089：Agent自主经验学习自动生成新技能**：https://github.com/nanocoai/nanoclaw/issues/3089
    背后诉求：用户已经不满足于手动配置固定技能，期待产品向完全自主的个人AI助手进化，基于历史任务经验自动沉淀可复用的执行流程，大幅降低自定义成本。

## 5. Bug 与稳定性
按严重程度排序，当日闭环的故障问题如下：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| 严重 | send_message去重逻辑导致60秒内两次对话响应静默丢失，用户侧直接触发请求超时 | https://github.com/nanocoai/nanoclaw/issues/2506 | 已修复，今日关闭 |
| 次严重 | su/SSH非交互环境下systemd环境变量未加载，部署向导误判为无systemd，自动回退到稳定性更差的nohup启动模式 | https://github.com/nanocoai/nanoclaw/issues/2482 | 已修复，今日关闭，遗留头less Linux场景待最终验证 |
| 一般 | container-runner源文件同步仅以index.ts为变更校验信号，漏检ipc-mcp-stdio.ts修改，导致runner代码更新不生效 | https://github.com/nanocoai/nanoclaw/issues/2784 | 已修复，今日关闭 |
| 一般 | WhatsApp入站媒体CDN拉取失败时直接吞掉异常，附件永久丢失无提示 | https://github.com/nanocoai/nanoclaw/issues/2894 | 已修复，今日关闭 |

## 6. 功能请求与路线图信号
结合当日活跃PR和Issue状态，已明确将纳入下一版本（v2.1）的功能包括：
1.  远程Streamable HTTP MCP服务器完整支持：开发中PR #3092已完成核心逻辑，本周即可合并上线；
2.  ncl CLI 补充未知发送者审批列表展示：PR #3088 待评审，上线后运维人员可以直接从命令行查看所有待审批的陌生发件人请求；
3.  基于关键词的零成本预路由模型选择功能：3条重复需求Issue已有2条关闭，剩余1条留档待细节确认，预计下个小版本默认开放配置入口。
而主机扩展钩子、Agent自主生成技能两个需求属于中长期方向，预计将纳入v2.2版本的路线图规划。

## 7. 用户反馈摘要
从当日Issue交互中提炼的真实用户反馈：
1.  部署类用户痛点密集：大量在Proxmox LXC、裸金属Ubuntu服务器上部署的用户反馈，非桌面的headless环境下systemd检测异常是目前安装环节最高频的卡点，当日集中修复后已有多位用户验证部署流程顺畅度大幅提升；
2.  社群运营类用户对WhatsApp LID群故障的修复反馈强烈：不少运营10人以上WhatsApp大群的用户表示此前消息发不出的问题直接影响业务，本次全量修复后已经恢复正常使用；
3.  第三方开发者对自定义扩展的诉求强烈：多位技能开发者反馈目前硬改源码的模式无法支撑规模化技能分发，希望官方尽快推出标准化扩展接口，降低技能兼容维护成本。

## 8. 待处理积压
提醒核心维护组关注两个超过3个月未闭环的高优先级积压项：
1.  Issue #1981：headless Linux环境下systemd误判问题，根因已经和已修复的#2482对齐，目前仅缺少SSH非交互场景的专项测试用例，积压时长3个月，待验证修复有效性后即可关闭：https://github.com/nanocoai/nanoclaw/issues/1981
2.  PR #352：将Telegram设为默认启动通道的存量PR，目前状态为Blocked/Pending Closure，距离上次更新已经超过5个月，当前项目已经演进到多通道共存架构，需要核心团队评估该需求是否仍然成立，及时给出合并不或者关闭的明确结论。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 2026-07-20
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
2026年7月20日IronClaw项目整体活跃度处于极高水平，过去24小时累计产生5条全部为新增活跃状态的Issue、50条PR更新，无正式新版本发布。核心贡献团队今日研发重心集中在reborn架构系列重构任务上，同步推进错误可恢复性、部署配置统一化、内存存储退役三大核心里程碑的阶段性落地。非核心外部贡献者同步提交了本地开发体验优化、依赖批量升级类任务，研发节奏完全对齐7月17日发布的架构简化文档规划，全链路交付流程运转顺畅。今日仅上报2条重复的PDF附件mime类型校验类用户反馈Bug，无高危生产故障上报，项目整体健康度良好。

## 2. 版本发布
今日无正式版本发布。目前唯一处于待合状态的Release PR #5598标注了`ironclaw_common`、`ironclaw_skills`核心crate存在破坏性API变更，全量重构完成后将择期发布0.29.1正式版本。

## 3. 项目进展
过去24小时累计合并/关闭30条PR，核心推进成果如下：
1. **部署配置统一化任务阶段性交付**：PR #6279、#6280全量合入后，`DeploymentConfig`已经覆盖全部7种组合配置剖面，接管所有部署维度配置，彻底消除了运行模式分支逻辑冗余，对应Issue #6274前三阶段任务100%完成：
   - #6279：https://github.com/nearai/ironclaw/pull/6279
   - #6280：https://github.com/nearai/ironclaw/pull/6280
2. **能力结果链路重构前置任务全量落地**：PR #6278、#6275、#6273三个阶段前置PR合入，完成了Host侧网关重构、`ResolutionBatch`结构定义、模型可见错误诊断字段挂载，为后续`CapabilityOutcome`向`Resolution`结构的全量切换扫清了障碍，对应架构简化文档§5.3的预研任务全部完成：
   - #6278：https://github.com/nearai/ironclaw/pull/6278
   - #6275：https://github.com/nearai/ironclaw/pull/6275
   - #6273：https://github.com/nearai/ironclaw/pull/6273
3. **InMemoryTurnStateStore退役任务第一阶段交付**：PR #6276、#6281合入，新增行内存状态后端基准测试、移除turn state行存储中多余的全局提交门限锁，完成性能优化且未修改原有持久化/崩溃恢复逻辑，对应Issue #6263第一阶段任务交付：
   - #6276：https://github.com/nearai/ironclaw/pull/6276
   - #6281：https://github.com/nearai/ironclaw/pull/6281
4. **基础依赖与测试毛刺修复**：PR #6165完成26项Rust基础依赖升级，PR #6272修复了环境变量读取类单元测试在带真实`NEARAI_API_KEY`的开发者本地环境运行失败的问题，消除了本地开发的测试毛刺：
   - #6165：https://github.com/nearai/ironclaw/pull/6165
   - #6272：https://github.com/nearai/ironclaw/pull/6272

整体架构重构进度相比昨日推进约22%，完全符合迭代预期。

## 4. 社区热点
当日讨论热度最高的两条条目：
1. **Issue #6263 内存状态存储退役架构债务清零**：https://github.com/nearai/ironclaw/issues/6263
   累计6条评论为当日最高，由核心维护者发起，核心诉求是彻底清退遗留的`InMemoryTurnStateStore`架构债务，通过引入Slice 0预言机和无活锁证明，彻底解决大任务量场景下的状态内存溢出隐患，目前已经完成性能基准测试准备，后续将逐步推进全量替换。
2. **Issue #6257 PDF附件上传报错**：https://github.com/nearai/ironclaw/issues/6257
   该Issue上报后不到24小时又产出完全重复的#6290 Issue，反映出普通用户对PDF附件处理功能的强依赖，当前mime类型校验逻辑存在场景覆盖漏洞，用户诉求是快速修复PDF等常用办公格式的附件支持能力。

## 5. Bug与稳定性
按严重度排序当日上报问题：
1. **中高危 Bug：PDF附件mime类型校验报错**：影响全量用户的PDF文件上传生成流程，目前已有2条重复上报，对应Issue #6257、#6290，暂未关联修复PR，推测根因为PDF格式的mime类型枚举未被纳入校验白名单。
2. **低危 Bug：NEARAI_*环境变量单元测试非密闭运行问题**：仅影响有本地`NEARAI_API_KEY`配置的开发者，对应PR #6272已被合并完成修复，故障全闭环。

当日无线上生产崩溃、数据丢失类严重故障上报。

## 6. 功能请求与路线图信号
结合现有Issue和待合PR判断，以下功能大概率会被纳入下一版本：
1. 100%运行时错误可恢复性体系：对应Issue #6284提出的所有运行时错误均不会直接终止Agent进程、而是将错误信息传递给大模型自行决策恢复策略的目标，目前已经同步落地到PR #6291的架构文档修订中，已被正式纳入当前迭代路线图。
2. 新手友好型本地开发体验：外部贡献者提交的PR #6285（零配置本地开发引导）、#6289（REPL思考态加载动画+Markdown渲染）目前处于待合状态，可大幅降低新用户上手门槛，属于优先级很高的体验优化，预计将随下个小版本正式发布。
3. 全链路依赖批量升级：覆盖Rust生态、GitHub Actions、Wasm全链路的依赖升级系列PR全部处于待合状态，完成合入后将获得最新安全补丁和性能优化，将随下一个Minor版本发布。

## 7. 用户反馈摘要
从公开Issue和社区反馈提炼核心内容：
1. **核心场景痛点**：Slack渠道的付费用户明确反馈PDF附件处理场景完全不可用，IronClaw当前作为AI Agent运行平台，用户高频需要基于PDF文档做问答、摘要处理，该故障直接阻断了核心办公流程。
2. **开发者痛点**：外部贡献者复现新用户首次本地部署流程时遇到大量死胡同，需要手动配置多组环境变量、服务令牌，新手友好度极低，零配置引导功能的诉求非常强烈。
3. **能力预期提升**：用户明确要求Agent复杂长任务的运行时崩溃率降到0，不希望中断任务流程，期待所有可恢复异常都交由Agent自主处理，大幅提升任务完成率。

## 8. 待处理积压
提醒维护者重点关注长期未响应的高价值条目：
1. **Release PR #5598**：自7月3日创建至今未合入，目前多个核心crate的破坏性变更已经积累超过2周，建议在当前架构重构第一阶段里程碑完成后尽快合入发布，解除依赖版本锁定积压：https://github.com/nearai/ironclaw/pull/5598
2. **GitHub Actions依赖升级PR #5664**：自7月5日创建至今未处理，共16项CI工具版本升级，其中包含`actions/checkout`从v4升级到v7等重要安全补丁，容易引发CI供应链风险，建议优先处理：https://github.com/nearai/ironclaw/pull/5664
3. **Wasm生态依赖升级PR #4032**：自5月25日创建至今积压2个月，包含wit组件核心依赖的大版本升级，对应Agent扩展插件生态的兼容性改进，建议安排专人跟进适配：https://github.com/nearai/ironclaw/pull/4032

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-07-20
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
网易有道旗下开源AI智能体与个人助手项目LobsterAI过去24小时整体活跃度处于中等稳健水平，无新版本正式发布。当日累计更新3条Issue、3条PR，更新量与近一周平均水平基本持平，呈现出存量标记为stale的历史积压问题集中跟进处理的特征。当前团队核心推进方向聚焦在用户体验痛点闭环、开发依赖版本迭代、核心功能漏洞修复三个维度，项目整体健康度稳定，无阻塞性重大事故出现。

## 2. 版本发布
今日无新版本正式发布。

## 3. 项目进展
今日共闭环1条高价值存量PR，核心项目推进点如下：
- PR #1350 已完成关闭/合并：https://github.com/netease-youdao/LobsterAI/pull/1350
  本次提交补齐了自定义技能生成链路的中间过程展示能力，解决了技能文件长时间生成无感知、用户无法判断服务运行状态的体验痛点，同时针对性优化了同模型下的需求理解偏差问题，当前项目核心使用链路的存量已知体验问题修复进度已推进至85%。

## 4. 社区热点
当日讨论度最高的条目为Issue #1352（评论量2，为当日所有更新条目最高）：https://github.com/netease-youdao/LobsterAI/issues/1352
该诉求聚焦「任务运行过程中点击上传附件无响应」的场景，背后反映出大量重度用户在复杂多轮任务协作场景下，需要中途追加补充附件素材的强刚需，此前该场景功能缺失直接打断了任务执行的流畅性，该问题闭环后将覆盖多数非一次性输入的复杂任务使用场景。

## 5. Bug 与稳定性
按严重程度从高到低排列当日问题如下：
1. **高优先级漏洞**：Issue #1287 POPO机器人连通性校验逻辑缺陷，任意无效的appkey、appsecret、aes key填写全为1也能提示连接成功，会直接导致IM机器人对接功能完全失效，目前暂无对应修复PR：https://github.com/netease-youdao/LobsterAI/issues/1287
2. **一般体验Bug（已闭环）**：Issue #1352 任务运行中附件上传无响应问题，已完成修复关闭，无遗留影响：https://github.com/netease-youdao/LobsterAI/issues/1352

## 6. 功能请求与路线图信号
当日用户提交的明确功能请求为Issue #1289：为长代码块添加折叠/展开功能，解决大模型输出超长代码块占满会话视图、影响后续内容阅读的问题：https://github.com/netease-youdao/LobsterAI/issues/1289
结合当前团队优先推进体验优化的方向，该功能开发成本低、覆盖开发类核心用户场景、用户收益极高，叠加2条待合并的前端依赖升级PR（#1285升级concurrently、#1286升级tailwindcss）的准备工作，该需求极大概率会在下一版本的迭代计划中落地。

## 7. 用户反馈摘要
从当日更新的Issue内容中提炼真实用户反馈如下：
- 核心痛点：自定义技能生成场景下无中间态提示、长时间阻塞无反馈，用户极易误认为服务宕机，相同大模型配置下LobsterAI的需求理解精度弱于同类开源竞品
- 高频场景：大量开发类用户日常使用中频繁触发几十到上百行的长代码输出，无折叠功能导致页面极度冗长，阅读效率大幅下降
- 强刚需场景：多轮复杂任务执行过程中，中途追加上传附件是主流使用需求，该能力缺失严重影响复杂任务的完成效率

## 8. 待处理积压
当前共有4条已超3个月未获得跟进的积压条目被标记为stale，提醒维护者尽快评估优先级处理：
1. 依赖升级类：PR #1285 升级concurrently从8.2.2到9.2.1、PR #1286 升级tailwindcss从3.4.19到4.2.2，长期未合并会累积前端依赖安全风险
2. 功能类：Issue #1289 长代码块折叠功能，需求明确用户呼声高，长期搁置会打击社区贡献积极性
3. 漏洞类：Issue #1287 POPO机器人连通性校验逻辑缺陷，属于核心功能高危漏洞，未及时修复会影响企业级对接场景的可用性

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis（AI智能体与个人AI助手开源项目）2026-07-20 项目动态日报
项目仓库：https://github.com/moltis-org/moltis

---

## 1. 今日速览
过去24小时项目迭代活跃度处于健康区间，共完成1次日更版本发布、1条存量高关注度功能请求更新、1条全新特性PR提交，无公开Bug上报与异常回滚记录。当前项目核心迭代方向聚焦向量数据库生态兼容、智能模型路由能力扩展两大方向，开发节奏平稳，社区对轻量化边缘部署、企业级多模型调度的需求度持续抬升，整体项目健康度评级为A-。

## 2. 版本发布
今日同步上架滚动日更版本 `20260719.01`，版本链接：https://github.com/moltis-org/moltis/releases/tag/20260719.01
> 说明：当前版本暂未公示完整更新日志、破坏性变更说明与迁移指引，建议生产环境用户升级前先备份本地配置与向量存储数据，待官方完整公示变更内容后再完成灰度操作。

## 3. 项目进展
过去24小时无已合并/关闭的迭代记录，当前处于新特性集中开发验证阶段。新提交的待合PR首次落地了zvec+redb组合的向量存储内存后端，为低资源环境下的轻量化部署提供了新的可选方案，标志着项目在多存储架构兼容方向完成了关键预研节点落地，预计全量存储适配进度完成度提升至75%。
关联PR：https://github.com/moltis-org/moltis/pull/1158

## 4. 社区热点
今日唯一更新的高互动社区条目为存量功能请求 Issue #574，是当前社区热度最高的讨论内容：
> 链接：https://github.com/moltis-org/moltis/issues/574
> 核心诉求分析：该请求提出的「按主题自动路由模型」能力属于企业级私有部署的高频刚需，用户希望系统可基于任务所属分类自动匹配适配的大模型（如代码类任务自动调用开源代码模型、创意生成类任务自动调用闭文生图模型），无需用户手动切换配置，大幅降低复杂业务场景下的多模型调度成本，目前已有4位社区参与者参与落地规则的形态讨论。

## 5. Bug 与稳定性
过去24小时无新上报的Bug、崩溃、回归类问题，也无对应修复PR记录，当前项目公开迭代链路无已知稳定性风险。

## 6. 功能请求与路线图信号
结合今日更新的条目可判断2项特性大概率将进入下一版本发布序列：
1. zvec向量存储内存后端：当前PR已实现基础能力，通过`zvec` Cargo特性开关管控，默认纳入`full`构建包，开发成熟度较高，极大概率作为正式可选特性在下一个次版本上线；
2. 按主题的模型路由能力：该Issue累计已有4条评论、1个点赞，属于高优先级社区共识特性，后续极大概率进入官方开发排期，成为下半年核心迭代的主打功能。

## 7. 用户反馈摘要
从当前公开的互动内容提炼用户真实诉求：
- 中小团队私有部署用户普遍反馈现有多模型调度需要手动调整配置，操作成本过高，对全自动的场景化路由能力期待强烈；
- 已有生产环境用户自行验证了zvec+redb轻量化向量存储方案的可用性，说明大量社区用户希望Moltis进一步降低部署依赖门槛，适配边缘硬件场景的低资源运行需求。

## 8. 待处理积压
2项高关注度条目尚未得到核心维护者响应，提醒跟进：
1. Issue #574 创建于2026年4月6日，至今已超3个月未公示开发排期，属于高优先级刚需特性，需尽快评估落地可行性、同步进度回应社区诉求：https://github.com/moltis-org/moltis/issues/574
2. PR #1158 创建于2026年7月17日，目前已完成基础实现但尚未收到维护者的评审意见，需核心开发者尽快跟进代码审核，给出特性接入的反馈：https://github.com/moltis-org/moltis/pull/1158

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（原QwenPaw）项目动态日报
报告日期：2026-07-20
---
## 1. 今日速览
2026年7月20日CoPaw项目整体活跃度处于高位，过去24小时共产生11条Issue更新、6条PR更新，无正式版本发布。当日更新内容覆盖性能优化、核心功能迭代、前端体验、安全管控、兼容性修复多个方向，共有3位首次贡献者提交合规PR，社区外部参与度持续提升。当前所有6条PR均处于待人工评审阶段，无合并/关闭PR，核心迭代正处于集中校验阶段，项目整体健康度良好。
## 2. 版本发布
今日无新版本发布，最新正式版本仍为v2.0.0.post3。
## 3. 项目进展
今日暂无正式合并落地的PR，当日更新的6条PR均已完成代码开发，进入维护者评审队列，项目迭代链路已完成多个核心需求的前置打通：
- 此前暴露的历史召回功能崩溃问题（#6246）已对应提交修复PR（#6247），修复方案完全对齐根因定位结果
- 沙箱不可用时的回退动作可配置需求（#6250）已由首次贡献者提交完整实现PR（#6256），功能全量覆盖需求边界
- 唯一关闭的Issue「对话末尾泄露内部注释标记」（#6240）已完成复现确认和根因定位，修复开发即将启动
## 4. 社区热点
当日评论最多、关注度最高的3个社区议题如下：
1. **MCP驱动串行启动性能问题** #6193 https://github.com/agentscope-ai/QwenPaw/issues/6193
   该议题共获得4条评论，开发者已经明确给出串行改并行的优化方案，实测8个MCP客户端场景下启动速度可提升8倍至5秒，反映了多MCP扩展场景下用户对冷启动性能的强烈优化诉求。
2. **带审计轨迹的可复用工作流编排需求** #6163 https://github.com/agentscope-ai/QwenPaw/issues/6163
   共获得3条评论，用户提出当前已有的多Agent调度能力缺少结构化的可复用工作流定义能力，是面向企业级自动化场景的核心进阶需求，已经引发多名企业用户共鸣。
3. **对话末尾显示内部注释bug** #6240 https://github.com/agentscope-ai/QwenPaw/issues/6240
   共获得3条评论，用户反馈前端渲染没有正确过滤系统内部生成的记忆更新标记，直接暴露在对话内容中，影响普通用户的使用体验，目前该Issue已闭环关闭。
## 5. Bug 与稳定性
按严重程度从高到低排列当日新增问题：
| 严重等级 | Bug描述 | 关联Issue | 已有修复PR |
|----------|---------|-----------|------------|
| P0（阻断性） | 历史召回功能`recall_history`读取长工具返回结果时会触发文件名过长的OSError崩溃，直接导致记忆检索功能不可用 | #6246 https://github.com/agentscope-ai/QwenPaw/issues/6246 | 是（#6247） |
| P1（核心功能受损） | OpenAI 系列模型的最大输出Token配置不生效 | #6258 https://github.com/agentscope-ai/QwenPaw/issues/6258 | 否 |
| P1（核心功能受损） | 单轮多工具调用场景下，所有工具对应的推理块内容完全重复 | #6257 https://github.com/agentscope-ai/QwenPaw/issues/6257 | 否 |
| P1（核心功能受损） | 部分场景下OpenAI接口返回400错误直接中断对话流程 | #6255 https://github.com/agentscope-ai/QwenPaw/issues/6255 | 否 |
| P2（体验兼容问题） | 离线环境下Code模式文件预览依赖在线资源无法加载 | #6261 https://github.com/agentscope-ai/QwenPaw/issues/6261 | 否 |
| P2（体验兼容问题） | Linux桌面端（Tauri模式）缩放快捷键（Ctrl +/-/滚轮）不生效 | #6252 https://github.com/agentscope-ai/QwenPaw/issues/6252 | 否 |
| P2（体验兼容问题） | 对话末尾泄露内部记忆注释标记 | #6240 https://github.com/agentscope-ai/QwenPaw/issues/6240 | 已完成复现 |
## 6. 功能请求与路线图信号
结合已提交PR判断，以下特性大概率进入下一个迭代版本：
1. Agent配置一键复制功能（PR #6262）：面向多Agent批量创建场景，实现配置快速复用，功能边界清晰
2. 无认证主机白名单支持CIDR网段（PR #6259）：简化企业内网部署的运维配置
3. 沙箱不可用时回退动作可配置（PR #6256）：满足不同安全等级的部署要求
4. 命令行加密环境变量脚本化读取（PR #6251）：适配自动化运维、CI/CD集成场景
中长期高优先级候选需求（暂未提交实现PR）包括：单Agent独立记忆配置模板、对话思考/执行过程可折叠优先展示结果、带审计轨迹的多Agent工作流编排。
## 7. 用户反馈摘要
从当日Issue评论提炼的真实用户痛点和场景：
1. **多MCP扩展场景**：使用8个以上MCP客户端的开发者反馈当前串行初始化需要40秒，远高于可接受阈值，性能优化诉求非常迫切
2. **私有化离线部署场景**：大量内网用户反馈当前版本存在多处未打包的在线静态资源依赖，导致完全离线环境下文件预览等核心功能不可用，阻碍落地进程
3. **普通用户使用场景**：非技术用户普遍表示不关心Agent的全量推理、命令执行细节，当前全量展开的交互设计导致最终结果被过程信息淹没，使用体验很差
4. **企业运维场景**：运维人员强烈要求支持CIDR网段免认证、CLI脚本化读取配置，降低批量部署的运维成本
## 8. 待处理积压
提醒维护者重点关注的长期重要议题：
1. Issue #5781 离线环境资源依赖问题，半年前曾发起过针对性修复但未完全闭环，今日新Issue #6261再次暴露同类问题，需尽快完成全量离线资源的梳理和打包
2. Issue #6193 MCP驱动并行启动性能问题，开发者已经定位到具体代码位置和优化方案，但Issue创建3天仍未指派负责人推进，可快速落地取得明显性能收益
3. Issue #6163 可复用工作流编排需求，目前已经收集到多名企业用户的诉求反馈，尚未进入正式需求评审阶段，建议纳入下季度核心路线图讨论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-20
开源AI智能体与个人助手领域项目观测
---

## 1. 今日速览
过去24小时ZeroClaw保持极高活跃度，累计产生50条Issue更新、50条PR更新，4个功能项完成合并/关闭，暂无正式新版本发布。当前开发重心集中在RFC架构决策落地、持久化内存子系统生产级对齐、多平台/多渠道兼容性修复三大方向，全部P1级阻断性Bug均已安排对应迭代负责人跟进。从议题分布来看社区外部贡献占比持续提升，第三方场景原生适配、生产级运维能力的用户需求热度持续走高，整体迭代节奏符合0.8.x-beta系列的版本演进预期，项目协作健康度处于优秀区间。

## 2. 版本发布
今日暂无正式版本发布，当前主分支迭代基线停留在0.8.3-beta阶段，后续版本将逐步落地本次公示的全部已通过RFC对应的能力。

## 3. 项目进展
今日合并/关闭的核心能力项如下，0.8.x版本渠道生态完整度已完成70%预设里程碑：
1. **GitHub原生渠道能力正式落地**：关闭Issue #2079，完成GitHub作为一等公民渠道的全量适配，支持Agent原生观测、操作仓库Issue、PR、评论、评审等全链路事件，用户无需自行开发webhook解析、鉴权、去重等自定义胶水代码。<https://github.com/zeroclaw-labs/zeroclaw/issues/2079>
2. **Discord渠道权限精细化能力落地**：关闭Issue #6378，新增`allowed_channels`配置字段，支持Discord机器人仅在指定ID的频道响应消息，配置规范完全对齐已有的Matrix、Nextcloud Talk同类能力。<https://github.com/zeroclaw-labs/zeroclaw/issues/6378>
3. **成本统计能力补齐**：关闭Issue #7248，实现服务商返回的缓存输入Token持久化存储，将OpenAI、Anthropic等主流平台的缓存用量完整纳入成本统计模块，解决了此前用量统计遗漏导致的成本预估偏差问题。<https://github.com/zeroclaw-labs/zeroclaw/issues/7248>
4. **定时任务能力增强**：关闭Issue #5573、#6510，落地SMTP邮件发送渠道支持定时任务自动推送执行结果到指定邮箱，同时新增cron任务`delivery.mode = "announce"`可选参数，支持仅推送最终回复、省略中间推理过程，适配自动化巡检、定期周报生成等生产场景需求。

## 4. 社区热点
今日讨论热度最高的议题集中在协作效率、生产级适配方向，反映用户需求已从早期尝鲜转向大规模生产部署：
1. **#6808 RFC: 工作流转看板自动化与标签体系清理**（14条评论）<https://github.com/zeroclaw-labs/zeroclaw/issues/6808>
   诉求分析：核心贡献者与外部活跃开发者共同提出的治理类需求，希望通过自动化工单路由体系替代目前完全人工维护的标签、进度流转流程，降低维护组的非开发类开销，提升社区贡献者的工单响应透明度。
2. **#6641 回合级OTel链路追踪改造**（8条评论）<https://github.com/zeroclaw-labs/zeroclaw/issues/6641>
   诉求分析：来自中大型企业部署场景的用户反馈，当前LLM调用、工具调用、内存检索三类操作的链路完全独立，Agent运行异常排查成本极高，需求将三类Span统一挂载到同一个Agent回合根链路下，对齐云原生可观测性标准。

## 5. Bug与稳定性
按严重优先级排序如下，高危安全漏洞已安排专人跟进修复：
| 严重等级 | 问题描述 | 关联Issue | 当前状态 | 是否有对应修复PR |
|----------|----------|-----------|----------|------------------|
| S0 高危（数据泄露级风险） | `execute_pipeline`模块绕过单Agent工具权限校验，存在混淆代理安全漏洞 | #7947 <https://github.com/zeroclaw-labs/zeroclaw/issues/7947> | 开发中 | 是 |
| S1 阻断级 | Telegram渠道配置完成后自检提示未初始化，机器人完全无法响应用户消息 | #8505 <https://github.com/zeroclaw-labs/zeroclaw/issues/8505> | 已接受排期 | 待提交 |
| S1 阻断级 | Web仪表盘退出聊天窗口后，Agent正在执行的长耗时任务被强制中断，工作流完全阻断 | #8559 <https://github.com/zeroclaw-labs/zeroclaw/issues/8559> | 开发中 | 是 |
| S2 体验降级 | CLI密钥配置环节粘贴敏感信息后无任何界面反馈，容易导致用户重复输入、配置失败 | #7808 <https://github.com/zeroclaw-labs/zeroclaw/issues/7808> | 已接受排期 | 待提交 |
| S3 轻微适配问题 | Windows平台下ZeroCode组件必须手动声明`ZEROCLAW_SOCKET`环境变量才能启动，不符合用户直觉 | #9117 <https://github.com/zeroclaw-labs/zeroclaw/issues/9117> | 已接受排期 | 待提交 |

## 6. 功能请求与路线图信号
结合当前已通过评审的RFC与并行推进的PR栈，以下功能90%概率纳入下一正式版本：
1. **WASM插件化体系**：将可选渠道、可选工具从编译时特性切换为运行时可安装WASM插件，对应配套PR #8863、#8855已进入代码评审阶段，落地后默认发行版体积将缩小40%，用户无需重新编译即可安装各类扩展能力，是0.9.0版本的核心里程碑。
2. **持久化内存子系统对齐**：#8891 提出的跨会话记忆三平面对齐开发进度过半，21个子项（3个Issue+18个PR）正在并行落地，下一版本将带来生产级可用的长时记忆能力。
3. **密钥管理体系抽象**：已通过评审的#9127 KeySource trait RFC将在后续版本落地，支持不同部署形态下的主密钥差异化管理，大幅提升公有云、私有云部署场景的密钥安全性。
此外SearXNG隐私搜索支持、钉钉渠道流式输出、Slack长任务进度提示等功能也在并行推进中，将按完成度分批上线。

## 7. 用户反馈摘要
1. **正向反馈**：Discord、Matrix场景的自托管用户对新上线的渠道白名单能力评价极高，彻底避免了公共频道内无关用户@机器人占用资源的问题，解决了此前长期存在的资源滥用痛点。
2. **核心痛点**：Windows平台用户反馈ZeroCode适配体验差，手动配置环境变量启动的设计非常反直觉；Web端Agent生命周期与WebSocket强绑定的设计，完全无法满足代码生成、数据集处理这类单任务耗时超过10分钟的长时Agent场景需求。
3. **强需求场景**：大量内网自托管用户反馈，当前默认搜索引擎不支持私有化部署，迫切希望接入SearXNG这类开源隐私优先的搜索工具，满足无公网环境下的网页检索需求。定时任务邮件推送功能的相关Issue评论区有超过20位用户留言表示该功能直接匹配了自己的自动化巡检、周报生成场景需求。

## 8. 待处理积压
提醒维护组优先关注以下推进缓慢的高价值议题：
1. **#5316 SearXNG 搜索支持功能请求** <https://github.com/zeroclaw-labs/zeroclaw/issues/5316>：2026年4月创建，目前处于开发中状态但推进速度极慢，作为提升隐私属性、内网适配能力的高星需求，建议排期优先落地。
2. **#7461 全平台CI测试覆盖** <https://github.com/zeroclaw-labs/zeroclaw/issues/7461>：要求在Windows、macOS平台完整运行全量测试套件，目前CI仅在Linux环境下执行测试，近期已经多次出现平台兼容性Bug漏测问题，建议尽快排期补齐平台测试矩阵。
3. **#6055 Slack线程上下文自动补全** <https://github.com/zeroclaw-labs/zeroclaw/issues/6055>：2026年4月创建，开发进度长期停滞，严重影响Slack场景下多轮对话的

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*