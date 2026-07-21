# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 22:57 UTC

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

# OpenClaw 项目动态日报 | 2026-07-22
---
## 1. 今日速览
过去24小时项目累计产生1000条代码与社区动态更新，其中活跃/新增Issue 388条、待合并PR 339条，整体活跃度处于近30天高位，属于核心迭代高峰期。今日社区讨论集中在安全加固、生产部署稳定性、多生态兼容性三大方向，贡献者覆盖核心引擎、第三方渠道集成、多端客户端等全板块。当前项目无已知阻塞性交付风险，整体健康度评级为优良，迭代进度符合2026年7月系列补丁版本的开发预期。

## 2. 版本发布
今日无正式新版本发布，当前最新稳定迭代基线为v2026.7.1。

## 3. 项目进展
今日累计161条PR完成合并/关闭，核心推进的重要功能与修复包括：
1. **#112321 macOS隐私合规修复**：合并后解决了桌面端三大合规缺陷，消除了非预期的终端自动化弹窗、语音唤醒权限校验缺失等问题，完善macOS分发资质要求：[openclaw/openclaw/pull/112321](https://github.com/openclaw/openclaw/pull/112321)
2. **#107935 子代理注册表性能优化**：合并后子代理会话查询效率提升约70%，解决了运行时长超过1个月的高负载实例下子代理调度卡顿的痛点：[openclaw/openclaw/pull/107935](https://github.com/openclaw/openclaw/pull/107935)
3. **3个历史高优Issue批量关闭**：长期影响稳定性的Telegram消息断流Bug #91383、MCP循环冗余日志问题 #98437、GPT-5.5思考内容重放故障 #95441全部正式闭环，显著降低了v2026.6系列版本的运行故障率。
4. **#112334 配置层校验逻辑修复**：合并后解决了自定义模型提供商配置重复校验失败问题，多提供商混合部署场景下的配置报错率下降90%：[openclaw/openclaw/pull/112334](https://github.com/openclaw/openclaw/pull/112334)

## 4. 社区热点
今日讨论热度最高的核心Issue均指向生产环境核心痛点：
1. **#10659 掩码密钥功能请求**：15条评论、4个点赞，是全社区关注度最高的安全类需求：诉求为让Agent可以正常调用API密钥但无法明文读取，从底层阻断密钥泄露和prompt注入偷取凭证的风险，目前已完成方案对齐等待产品决策：[openclaw/openclaw/issues/10659](https://github.com/openclaw/openclaw/issues/10659)
2. **#101290 SQLite库损坏P0级Bug**：13条评论，多名生产用户复现了网关运行时CLI预检直接打坏状态库的故障，诉求为尽快推出紧急补丁避免全量会话数据丢失：[openclaw/openclaw/issues/101290](https://github.com/openclaw/openclaw/issues/101290)
3. **#85030 MCP工具无法注入子代理会话Bug**：11条评论、5个点赞，大量基于MCP生态开发插件的开发者反馈子代理场景下工具能力完全缺失，诉求是打通全链路MCP工具透传逻辑：[openclaw/openclaw/issues/85030](https://github.com/openclaw/openclaw/issues/85030)
4. **#86996 主动内存场景事件循环阻塞问题**：11条评论，大量使用OpenAI Codex+主动内存配置的用户反馈Telegram消息延迟超过30秒、频繁超时，诉求官方优化内存引擎的CPU占用逻辑：[openclaw/openclaw/issues/86996](https://github.com/openclaw/openclaw/issues/86996)

## 5. Bug与稳定性
按严重优先级排序的今日活跃故障列表：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| P0 | macOS环境下CLI启动预检在网关运行时直接损坏SQLite状态库，导致全量数据丢失 | #101290 | 暂未分配开发资源，标记为需要线上复现后开发补丁 |
| P1 | 子代理会话完全无法继承MCP工具权限，所有配置规则失效 | #85030 | 已完成根因定位，等待维护者分配开发任务 |
| P1 | 启用主动内存+Codex模型后出现事件循环长时间阻塞，引发消息超时、服务假死 | #86996 | 多名用户已提交性能采样日志辅助定位，暂无公开PR |
| P1 | 15轮以上长对话场景下write/exec工具参数被静默清空，工具调用返回空 | #53408 | 暂未启动修复 |
| P1 | cron工具的Schema定义不符合llama.cpp格式要求，导致所有离线模型的定时任务能力失效 | #108473 | 暂未启动修复 |

当前3个历史高优Bug已对应到"待维护者审核"队列的PR，预计本周内即可合并发布补丁。

## 6. 功能请求与路线图信号
结合今日新提交的PR，多个用户高频需求已明确进入下一版本交付队列：
1. **密钥掩码+文件系统沙箱安全体系**：对应Issue #10659、#7722，底层密钥抽象层改造已经启动，大概率会在v2026.7.2补丁版本上线，作为核心安全特性交付。
2. **全提供商动态模型目录发现能力**：对应今日新提交的PR #112412，已经完成30+主流模型服务商的适配，上线后用户无需等待OpenClaw官方更新静态Catalog即可直接使用服务商新发布的所有模型，预计直接进入下一版本正式交付。
3. **子代理精细化权限管控系列能力**：对应Issue #15032（单Spawn工具权限限制）、#8299（子代理消息可配置抑制），子代理架构重构工作已完成70%，预计在v2026.8版本集中交付。
4. **安全自动更新+预更新备份能力**：对应Issue #14526，属于企业级生产部署用户最高频诉求，已确定作为企业版专属特性优先交付。

## 7. 用户反馈摘要
今日社区反馈提炼的真实痛点与使用场景：
- 正面反馈：大量离线部署用户反馈v2026.7.1版本对llama.cpp v0.9950的兼容性修复效果很好，本地模型的工具调用成功率提升明显。
- 最高频痛点：超过20名生产部署用户吐槽当前没有内置标准化的备份恢复能力#13616，手动备份流程繁琐，遇到数据库故障时恢复成本超过4小时。
- 核心生态痛点：基于子代理构建隔离工作流的开发者反馈当前子代理完全继承父代理全量工具权限，没有隔离能力，线上部署时prompt注入提权风险极高。
- 渠道适配痛点：国内企业用户反馈飞书集成当前要求全局通讯录只读权限，该权限在绝大多数企业内部审批无法通过，导致OpenClaw飞书场景落地门槛极高。

## 8. 待处理积压
提醒维护者优先介入的长期高优遗留项：
1. 高优先级安全Issue #10659 掩码密钥功能，已开放超过5个月，累计收到数十条社区诉求，尚未得到产品团队明确排期，容易成为后续安全事件的隐患。
2. P0级稳定性Issue #101290 SQLite数据库损坏Bug，已开放超过2周，尚未分配核心开发人员，已有用户报告出现数据完全丢失的生产事故，需要优先处理。
3. 性能优化Issue #14785 降低工具Schema Token开销需求，提出超过5个月，当前单会话固定3500Token的工具开销已经成为大流量部署场景下非常显著的成本负担，长期积压未推进。

---

## 横向生态对比

# 开源AI智能体与个人助手生态横向对比分析报告（2026-07-22）
---

## 1. 生态全景
当前观测的12个活跃项目中80%以上处于有效迭代状态，整个开源个人AI助手/自主智能体赛道已完全告别早期概念验证阶段，全面进入生产级落地的集中攻坚期。全社区迭代重心已经从功能堆叠转向核心稳定性加固、安全权限体系补全、多生态互联互通适配三大方向，生产故障闭环效率、企业级特性交付速度环比显著提升。面向泛亚太区域的本地化适配、国产大模型/国内IM渠道兼容、边缘低算力硬件适配，成为区别于欧美同类项目的差异化迭代主线，出海开发者群体的生态贡献占比持续攀升。目前生态分层格局已清晰形成，覆盖从重量级企业级生产平台到极致轻量嵌入式部署的全谱系产品矩阵。

## 2. 各项目活跃度对比表
| 项目名称 | 今日Issue更新量 | 今日PR更新量 | 今日Release情况 | 健康度评估 |
|----------|----------------|--------------|----------------|------------|
| OpenClaw | 388条活跃/新增 | 339条待合并 | 无正式版本发布，基线v2026.7.1 | 优良（核心迭代高峰期） |
| NanoBot | 11条处理 | 34条流转 | 无正式版本发布 | 优（高交付效率） |
| Hermes Agent | 50条更新 | 50条更新 | 无正式版本发布，基线v0.19.0 | 良好（v0.19版本稳定性打磨期） |
| PicoClaw | 8条迭代 | 8条更新 | 无正式版本发布，基线v0.3.1 | 平稳（低风险迭代） |
| NanoClaw | 1条活跃 | 12条更新 | 无正式版本发布 | 中等（亚太本地化适配推进中） |
| IronClaw | 44条更新 | 50条更新 | 无新增正式版，上周已发布全量重构首个RC版v1.0.0-rc.1 | 冲刺级优秀（v1.0正式版收尾） |
| LobsterAI | 1条活跃 | 10条流转 | 无正式版本发布 | 平稳（端侧体验优化） |
| Moltis | 0条活动 | 1条Dependabot自动更新 | 无正式版本发布 | 低运维平稳 |
| CoPaw | 41条更新 | 46条更新 | 发布v2.0.1-beta.1 | 优秀（v2.0正式版冲刺峰值） |
| ZeroClaw | 50条更新 | 50条更新 | 无正式版本发布 | 高活跃健壮（核心大特性合入窗口期） |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无发布 | 当日无活动 |

## 3. OpenClaw在生态中的定位
作为生态核心基准参照项目，OpenClaw是当前所有观测项目中社区规模最大的平台，24小时累计动态更新超1000条，Issue/PR总量较其他同类项目高出至少一个量级，是生态内首个大规模进入生产部署场景的通用底座。
- **相对优势**：迭代覆盖核心引擎、渠道集成、多端客户端全板块，积累了最全面的生产级痛点修复经验，无已知阻塞性交付风险，整体成熟度领先其他项目至少1~2个迭代周期。
- **技术路线差异**：走全场景通用底座路线，不绑定特定垂直场景，为衍生项目提供可复用的核心能力抽象，本次统计中多个名称带`Claw`的衍生项目均基于其架构做垂直裁剪二次开发。
- **社区地位**：其提出的密钥掩码、子代理权限隔离、MCP工具透传等技术方案已经成为社区事实参考标准，大量中小项目直接跟进其修复方案规避共性故障。

## 4. 共同关注的技术方向
多个项目同步涌现的共性迭代诉求，代表当前生态的集体攻坚方向：
1. **全链路安全权限加固**：涉及OpenClaw、NanoBot、ZeroClaw等所有活跃项目，核心诉求包括API密钥掩码防Prompt注入窃取、Shell/文件工具工作区强沙箱隔离、子代理细粒度权限管控，当日多个S0级越权漏洞均指向该领域的普遍短板。
2. **MCP生态兼容性优化**：涉及OpenClaw、Hermes Agent、ZeroClaw，核心诉求包括MCP工具全链路透传给子代理、MCP服务断线重连后自动注册工具、MCP Schema内存泄漏修复，是当前扩展生态落地的最高频痛点。
3. **离线本地推理场景性能优化**：涉及NanoBot、OpenClaw、CoPaw，核心诉求包括保留Prompt原生格式兼容Ollama缓存机制、大模型服务商动态目录自动发现、降低工具描述的固定Token开销，解决个人私有部署场景下延迟高、成本高的普遍问题。
4. **数据持久化可靠性加固**：涉及OpenClaw、Hermes Agent、IronClaw，核心诉求包括解决SQLite多进程并发写入损坏、版本升级全量数据丢失、Agent运行状态内存态丢失等生产级故障，补齐生产部署最核心的可靠性短板。
5. **泛亚太本地化渠道适配**：涉及PicoClaw、NanoClaw、ZeroClaw，核心诉求包括飞书、钉钉、LINE、WhatsApp等区域主流IM原生适配，打破此前生态仅兼容欧美Discord/Telegram的局限。

## 5. 差异化定位分析
各项目基于通用底座能力形成了清晰的分层错位：
| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键特性 |
|------|--------------|----------|------------------|
| IronClaw | 全量重构的生产级高可靠Agent平台 | 中大型企业运维团队 | 完全下线历史遗留单体代码，Rust栈全链路持久化，无内存态状态丢失风险 |
| NanoBot | 轻量个人离线部署体验 | 国内个人用户、本地推理爱好者 | 单二进制低部署门槛，原生适配全系列国产开源大模型 |
| CoPaw | 多Agent协同预设工作流 | 办公自动化场景开发者 | 基于AgentScope生态原生支持多子Agent批量调度，内置5种成熟工作流模板 |
| PicoClaw | 低资源嵌入式场景部署 | 边缘硬件开发者 | 极致裁剪运行时体积，最小可在微控制器环境下运行 |
| NanoClaw | 泛亚太出海多渠道适配 | 东南亚、东亚出海开发者 | 优先适配LINE、WhatsApp等区域主流IM渠道，覆盖本地化落地场景 |
| Hermes Agent | TUI端开发者体验 | 命令行偏好的极客用户 | 已落地类桌面端的TUI组件化引擎，开放TUI插件生态 |
| LobsterAI | 端侧多模态协作标注 | 桌面端普通C端用户 | 原生支持网页协作标注、多模态附件流转能力 |

## 6. 社区热度与成熟度分层
- **快速迭代阶段**：CoPaw、IronClaw、ZeroClaw、Hermes Agent，均处于核心大版本/旗舰特性发布前的冲刺周期，日合并PR量均超过15条，大量新功能集中落地，适合尝鲜用户体验前沿特性。
- **质量巩固阶段**：OpenClaw、NanoBot、PicoClaw、NanoClaw、LobsterAI，核心功能已经冻结，迭代重心集中在闭环历史高优Bug、优化边缘场景体验，整体稳定性表现优异，可放心用于非核心生产负载。
- **低运维平稳阶段**：Moltis、NullClaw、TinyClaw、ZeptoClaw，无核心功能迭代动作，仅做依赖漏洞、文档类常规运维，适合已经部署了该栈的存量用户稳定运行。

## 7. 值得关注的趋势信号
1. **行业竞争维度切换**：生态已经彻底告别「堆新功能」的早期阶段，SQLite数据可靠性、沙箱安全、权限隔离等底层基础能力的成熟度，已经成为能否拿下企业级部署增量市场的核心指标，先补齐这类短板的项目将获得显著的先发优势。
2. **亚太开发者话语权快速提升**：面向中国、东南亚市场的本地化适配、国产大模型兼容已经从边缘需求变为大量用户的刚性诉求，欧美原生项目此前完全忽略的飞书、LINE、ModelScope适配现在均进入高优迭代队列，国内开源开发者在生态中的贡献权重持续上升。
3. **自主长任务特性进入落地前夜**：多个头部项目均在集中重构子代理架构、落地Goal Mode能力，支持无人值守长周期任务自主推进的Agent产品，有望在未来1~2个月内集中正式上线，带来场景空间的新一轮扩张。
4. **生态裂变效应显现**：基于OpenClaw通用底座做垂直场景

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-22）
统计周期：2026-07-21 00:00 ~ 2026-07-22 00:00
---
## 1. 今日速览
本统计周期内NanoBot项目迭代活跃度处于近30天高位，过去24小时共处理11条Issue，闭环率高达81.8%，34条PR中完成合并/关闭22条，合并率64.7%。核心迭代方向集中在安全性加固、本地模型推理性能优化、国产大模型生态兼容三大方向，多个积压3个月以上的历史高优先级漏洞均完成闭环修复，海内外开发者贡献的新功能特性持续涌入，项目整体交付效率、问题响应速度表现优异，健康度评级为优。
## 2. 版本发布
本统计周期内无正式新版本发布。
## 3. 项目进展
今日合并/关闭的核心PR覆盖安全、兼容、体验多个维度，累计完成v1.8版本75%的预设里程碑进度：
1.  [#4663](https://github.com/HKUDS/nanobot/pull/4663) 完成工具结果隔离修复，彻底解决了工具调用链路中重复/缺失/非法tool_call_id的异常状态问题，覆盖全场景回归测试用例，对应闭环历史Issue [#4058](https://github.com/HKUDS/nanobot/issues/4058)
2.  [#5010](https://github.com/HKUDS/nanobot/pull/5010) 更新官方安全文档，明确引导用户优先使用环境变量引用存储API密钥，替代明文配置方案，响应安全类Issue [#4803](https://github.com/HKUDS/nanobot/issues/4803) 的风险诉求
3.  [#4965](https://github.com/HKUDS/nanobot/pull/4965) 完成ModelScope官方模型提供商接入，全兼容其OpenAI范式接口，覆盖Qwen、DeepSeek等主流国产开源模型的对话、文生图能力，解决了国内用户手动适配推理服务的繁琐问题
4.  批量落地多个高优先级稳定性补丁：包括UTF-16特殊字符编码请求失败修复 [#4952](https://github.com/HKUDS/nanobot/pull/4952)、定时任务类型校验异常修复 [#4983](https://github.com/HKUDS/nanobot/pull/4983)、配置文件原子写入防损坏修复 [#4984](https://github.com/HKUDS/nanobot/pull/4984)、转录服务环境变量插值失效修复 [#4989](https://github.com/HKUDS/nanobot/pull/4989)、OpenAI Codex Fast模式能力支持 [#5019](https://github.com/HKUDS/nanobot/pull/5019)
## 4. 社区热点
1.  热度最高Issue：[#4867](https://github.com/HKUDS/nanobot/issues/4867) [enhancement] 保留精准Prompt前缀以支持Ollama等本地推理服务的缓存机制，累计获得22条评论，为近期讨论度最高的需求。背后反映出大量个人私有部署用户的核心诉求：当前版本对Prompt格式的改动完全破坏了Ollama原生的缓存逻辑，哪怕32G显存的高性能硬件下每轮推理都会额外增加60秒无效等待，离线本地低延迟推理场景的性能优化需求极为迫切。
2.  高热度新Issue：[#5013](https://github.com/HKUDS/nanobot/issues/5013) 中文用户提出的Shell命令执行前增加人工确认机制，上线单日就获得大量国内开发者点赞，反映出国内面向个人用户的IM渠道部署场景下，使用者对工具操作可控性、风险防控的强需求。
## 5. Bug 与稳定性
按严重优先级排序：
| 严重等级 | Bug描述 | 对应Issue链接 | 修复状态 | 关联PR |
| --- | --- | --- | --- | --- |
| P0 | 工作区路径校验逻辑可绕过，可能导致Agent越权读取宿主任意敏感文件 | / | 修复PR待合并 | [#4987](https://github.com/HKUDS/nanobot/pull/4987) |
| P1 | complete_goal工具陷入死循环，网关将recap参数解析为裸字符串而非JSON对象，用户口头停止指令无法覆盖高优先级系统级Goal提示 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | 临时方案待合入 | [#5022](https://github.com/HKUDS/nanobot/pull/5022) |
| P1 | Qwen系列模型（如qwen3.6-flash）内部思考推理内容直接暴露在面向用户的聊天响应中 | [#4934](https://github.com/HKUDS/nanobot/issues/4934) | 修复PR待合入 | [#5023](https://github.com/HKUDS/nanobot/pull/5023) |
| P1 | Shell安全防护正则未将`=`识别为路径分隔符，`curl --output=/etc/passwd`类命令可绕过工作区限制 | / | 修复PR待合入 | [#4594](https://github.com/HKUDS/nanobot/pull/4594) |
| P2 | 历史遗留内存/资源泄漏类问题：大文件读取OOM、会话消息无上限内存增长、子进程孤儿化、工具运行器拦截系统级异常 | 全系列历史Issue | 已全部闭环修复 | 对应7个历史Issue均已关闭 |
## 6. 功能请求与路线图信号
结合现有Issue与PR推进进度，以下特性大概率纳入下一正式版本：
1.  [#4911](https://github.com/HKUDS/nanobot/issues/4911) 受控工具网关开放能力：支持IM、实时语音等第三方渠道直接调用Agent侧工具，目前相关开发已进入收尾阶段，将大幅拓展多端渠道的场景适配能力
2.  [#5013](https://github.com/HKUDS/nanobot/issues/5013) Shell命令人工确认机制：社区诉求强烈，已经关联多条待合入PR，将作为核心安全特性上线
3.  [#4399](https://github.com/HKUDS/nanobot/pull/4399) WebUI配置分区隐藏功能：支持管理员面向非技术用户裁剪UI显示内容，适配多实例托管部署场景，当前仅剩余少量冲突代码待解决
4.  [#5018](https://github.com/HKUDS/nanobot/pull/5018) 技能显式预加载能力：解决自定义集成场景下用户无法手动指定加载所需技能的痛点，功能开发已基本完成
所有新增特性全部指向「降低普通用户部署门槛、强化全链路安全管控、拓展国内大模型生态适配」三大核心迭代方向。
## 7. 用户反馈摘要
1.  核心痛点：大量使用Ollama本地部署的普通用户反馈当前版本延迟过高，32G显存环境下推理速度远达不到Ollama原生部署的表现，是当前普通用户投诉最多的问题
2.  生态适配诉求：国内用户普遍反馈之前适配ModelScope等国内推理服务商需要手动修改大量代码，本次官方原生支持ModelScope的更新上线后获得大量正向评价
3.  生产环境痛点：长期运行生产部署的用户反馈，此前会话消息无限增长、孤儿进程累积的问题会导致服务运行3~5天就出现OOM崩溃，本次全量修复该类漏洞后稳定性表现得到明显提升
4.  风险诉求：个人部署用户普遍担心Agent调用Shell命令误操作破坏本地文件系统，对人工确认类安全特性的期待度很高
## 8. 待处理积压提醒
1.  P0级安全PR [#4987](https://github.com/HKUDS/nanobot/pull/4987) 存在代码冲突，提交24小时尚未完成评审合入，该补丁用于修复高危文件系统越权风险，建议维护者优先排期处理
2.  高热度增强需求Issue [#4867](https://github.com/HKUDS/nanobot/issues/4867) 累计22条评论等待进展，目前尚未明确合入时间表，大量使用Ollama的用户在等待该缓存优化特性，建议尽快排期落地
3.  面向多租户部署的WebUI裁剪特性PR [#4399](https://github.com/HKUDS/nanobot/pull/4399) 从6月18日提交至今尚未完成合并，大量第三方部署服务商反馈缺少该特性很难面向非技术普通用户推广，建议跟进后续迭代进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-07-22
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生50条Issue更新、50条PR更新，无正式新版本发布，整体处于v0.19.0版本发布后的集中打磨阶段。当日Issue层面新开+活跃条目共38条，关闭12条，PR层面仅1项高优先级特性完成合入、其余49个PR均处于待评审待合并状态，迭代范围覆盖核心Agent运行时、MCP生态、多端桌面/TUI体验、跨平台适配、安全合规五大维度，社区开发者参与度高，项目整体健康度良好。当前开发团队的核心目标是修复存量体验问题、补齐v0.19版本的生产级稳定性短板，为后续小版本迭代做准备。

## 2. 版本发布
过去24小时无新版本发布，当前线上最新正式版仍为v0.19.0，所有Bug修复与特性迭代均在main分支开发中。

## 3. 项目进展
今日累计完成1项核心特性合入、6个高优先级Bug修复，整体向v0.19.1补丁版本的发布进度推进约15%：
1.  **核心基础设施落地**：PR [#20379](https://github.com/nousresearch/hermes-agent/pull/20379)（TUI Widget网格布局引擎+背景感知主题引擎）正式关闭合入，标志着Hermes TUI端完成了类桌面端的组件化架构底座搭建，为后续TUI插件生态开放提供了基础支撑。
2.  多个影响面广的存量Bug已确认合入main分支：包括全新安装后web搜索/提取/爬虫工具静默失败问题（Issue [#27683](https://github.com/nousresearch/hermes-agent/issues/27683)）、多profile网关下二级用户默认使用主账号bot token的越权安全问题（Issue [#54675](https://github.com/nousresearch/hermes-agent/issues/54675)）、网关崩溃后旧锁残留导致无法二次启动的问题（Issue [#28561](https://github.com/nousresearch/hermes-agent/issues/28561)）、v0.18版本多个stdio类型MCP服务器握手失败的系列问题（Issue [#65677](https://github.com/nousresearch/hermes-agent/issues/65677)/[#65673](https://github.com/nousresearch/hermes-agent/issues/65673)/[#62212](https://github.com/nousresearch/hermes-agent/issues/62212)）。

## 4. 社区热点
当日讨论热度最高的3个核心Issue反映出用户向生产级部署迁移的核心诉求：
1.  **Issue #47349 [13条评论，热度最高]**：[可配置内存后端特性请求：弃用固定memory.md，支持honcho/fact_store等第三方内存服务](https://github.com/nousresearch/hermes-agent/issues/47349)。大量中高级开发者反馈当前硬编码的双文件内存系统完全无法适配长上下文、多租户的复杂生产场景，诉求将内存系统全面插件化，该需求是社区呼声最高的下一代核心特性。
2.  **Issue #25083 [7条评论]**：[不可变受保护技能特性：防止Agent未经用户批准修改核心安全类技能](https://github.com/nousresearch/hermes-agent/issues/25083)。大量企业部署用户反馈当前全量技能可被Agent自由编辑的机制存在极高安全风险，需要将治理规则、安全约束等核心技能设置为强制受保护状态，该需求直接面向生产场景的合规要求。
3.  **Issue #67187 [7条评论]**：[MCP休眠服务器重连成功后未重新注册工具Bug](https://github.com/nousresearch/hermes-agent/issues/67187)。大量使用自定义MCP服务的开发者反馈MCP连接异常恢复后对应工具直接凭空消失，完全中断工作流，是当前MCP生态适配的最高频痛点。

## 5. Bug 与稳定性
按严重优先级排序，标注对应修复进展：
### P1 最高优先级（影响核心功能/存在数据丢失风险）
1.  [#68915 核心运行时死锁Bug](https://github.com/nousresearch/hermes-agent/issues/68915)：Agent执行带`&`后台启动参数的shell命令时，子进程会永久持有stdout管道导致Worker进程完全死锁，无法自动恢复，暂无对应修复PR。
2.  [#68474 Windows升级数据全量丢失Bug](https://github.com/nousresearch/hermes-agent/issues/68474)：Windows平台桌面端升级到v0.19.0过程中，用户核心session数据库state.db会被全量置空为null字节，直接导致所有历史对话数据销毁，暂无对应修复PR。
### P2 高优先级（影响部分核心功能）
1.  [#68920 会话租约泄漏Bug](https://github.com/nousresearch/hermes-agent/issues/68920)：桌面/TUI运行时间较长后，活跃会话租约文件持续累积，最终触发`max_concurrent_sessions`上限导致完全无法新建会话，暂无对应修复PR。
2.  [#68858 大体积数据库IO占满卡死Bug](https://github.com/nousresearch/hermes-agent/issues/68858)：大体积state.db场景下，v0.19.0的就地压缩+双FTS索引维护逻辑会占满磁盘IO，导致网关进程无法正常关机，暂无对应修复PR。
3.  [#68963 Discord同步超时无重试Bug](https://github.com/nousresearch/hermes-agent/issues/68963)：Discord插件遇到接口限流后不会自动重试同步slash命令，功能永久异常，已有对应修复PR [#68967](https://github.com/nousresearch/hermes-agent/pull/68967)。
4.  [#68944 CLI参数解析Bug](https://github.com/nousresearch/hermes-agent/issues/68944)：`hermes mcp add`命令中`--env`参数放在`--args`后面时会被静默吞掉，配置不生效，已有对应修复PR [#68957](https://github.com/nousresearch/hermes-agent/pull/68957)。

## 6. 功能请求与路线图信号
结合社区需求与现有PR进展，多个特性大概率会纳入下一版本迭代：
1.  面向TUI生态的Widget App SDK（PR [#68306](https://github.com/nousresearch/hermes-agent/pull/68306)）：基于已合入的布局引擎开发，附带3个官方参考示例，预计很快会合入main分支，v0.19.1版本将正式开放TUI插件开发能力。
2.  不可变受保护技能机制（Issue [#25083](https://github.com/nousresearch/hermes-agent/issues/25083)）：面向生产部署的安全特性，已有社区提交原型代码，优先级被运维类用户拉高，预计会在v0.19.2版本上线。
3.  新平台适配：新增Block开源Buzz自托管团队消息平台的对接支持（Issue [#68871](https://github.com/nousresearch/hermes-agent/issues/68871)），以及Atom Hermes移动端作为消息投递目标的跨端协同能力，均已纳入近期迭代规划。
4.  智能失败降级机制：将大模型服务商返回503过载错误的场景加入故障自动 fallback 链路，不再重复重试当前服务商直接切换到备用模型池（Issue [#68771](https://github.com/nousresearch/hermes-agent/issues/68771)），属于核心Agent调度逻辑优化，预计下一个小版本上线。

## 7. 用户反馈摘要
从今日Issue评论提炼真实用户痛点与场景反馈：
- 大量多Worker生产部署用户集中吐槽v0.19版本的SQLite多进程并发写入逻辑不完善，kanban.db和state.db索引损坏问题频发，是当前最高频的稳定性投诉点。
- Windows平台用户近期反馈了3个专属兼容性问题，分别是Telegram网关连接卡住、Signal平台SSE流直接中断、桌面升级数据丢失，说明Windows适配的完善度远低于macOS/Linux，需要提升优先级。
- 高频TUI使用者反馈`/compress`会话压缩命令运行时会完全阻塞输入，无法在压缩过程中打字准备下一条指令，长对话场景下操作体验很差。
- 业务侧用户反馈网关默认强制掩码所有E.164格式手机号，没有白名单跳过脱敏的配置选项，打断了需要精准展示客户联系方式的客服类部署场景。
- 普通用户反馈已删除的大模型提供商不会从模型下拉列表中完全移除，残留旧条目造成配置体验混乱。

## 8. 待处理积压
提醒维护团队优先关注的长期高优先级未处理事项：
1.  Issue [#34385](https://github.com/nousresearch/hermes-agent/issues/34385)：2026-05-29提交的Kanban DB多进程WAL模式下索引损坏问题，已有5条社区评论，属于核心数据稳定性风险，长期未得到根因确认与修复排期。
2.  Issue [#53819](https://github.com/nousresearch/hermes-agent/issues/53819)：2026-06-27提交的高并发Worker负载下Kanban DB写入无序列化导致损坏问题，已有3条评论，属于同类型核心数据风险，尚未给出明确修复方案。
3.  Issue [#68736](https://github.com/nousresearch/hermes-agent/issues/68736)：当前main分支的dev依赖存在多个高风险NPM安全漏洞，目前仅提交了部分修复的PR [#68966](https://github.com/nousresearch/hermes

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-22
开源AI智能体与个人助手框架项目观测
---

## 1. 今日速览
2026年7月22日PicoClaw整体活跃度处于健康运行区间，过去24小时累计完成8条Issue迭代、8条PR更新，覆盖安全优化、渠道适配、体验修复三类核心议题。项目当前迭代重心集中在第三方平台兼容性升级、多渠道交互体验优化、生产部署安全性加固三个方向，无正式新版本发布。社区用户上报的高优先级故障均已匹配到对应修复方案，整体迭代节奏平稳，核心模块故障率保持在极低水平。当前共有5个功能类PR处于待合并状态，待维护者完成Code Review后即可进入主干分支。

## 2. 版本发布
过去24小时无正式版本发布，最新正式版本为v0.3.1，下一个迭代版本暂无明确排期公示。

## 3. 项目进展
今日共完成3项PR的合并/关闭，落地了多类核心能力优化：
1. **PR #303**：新增`bot_name`可配置字段，解决此前Telegram、钉钉渠道问候语硬编码为"PicoClaw"的问题，支持私有化部署用户自定义Bot品牌身份，完全匹配自定义`soul.md`的身份设定。链接：https://github.com/sipeed/picoclaw/pull/303
2. **PR #3282**：新增策略管控的系统执行节点`system.exec.v1`，在slim侧实现无Shell直接调用执行，同时从可执行路径、工作根目录、环境变量、超时阈值、输出上限多维度做沙箱限制，大幅提升工具调用场景下主机操作的安全性。链接：https://github.com/sipeed/picoclaw/pull/3282
3. **PR #3233**：修复PR#3222引入的向后兼容性问题，保障存量v0.2.x版本用户升级到v0.3.x时无需修改现有配置即可正常运行，无升级感知障碍。链接：https://github.com/sipeed/picoclaw/pull/3233

## 4. 社区热点
今日交互量最高的议题为高优先级安全需求Issue #3088：
> 核心诉求为将当前依赖的已停止维护、存在已知安全风险的libolm加密库，替换为Matrix官方推出的原生替代库vodozemac，同时支持编译期可选移除libolm依赖。该议题累计获得9条评论、2个点赞，是过去两周社区关注度最高的安全类需求，反映出大量面向加密即时通讯场景部署PicoClaw的生产用户，对依赖库供应链安全的强诉求，项目已标注`help wanted`标签开放给社区贡献者认领。链接：https://github.com/sipeed/picoclaw/issues/3088

## 5. Bug 与稳定性
今日新报+迭代的故障按严重等级排序如下：
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 | 关联Fix PR |
|---------|----------|--------------|----------|------------|
| 高危 | Matrix同步循环无自动重连逻辑，网络/服务端中断后进程静默挂死，无法触发systemd重启策略，直接影响所有Matrix渠道部署的可用性 | https://github.com/sipeed/picoclaw/issues/3203 | 待修复 | 暂无 |
| 高危 | Antigravity（谷歌模型）OAuth登录被谷歌安全策略拦截，新用户完全无法完成授权 | https://github.com/sipeed/picoclaw/issues/3278 | 待合并 | https://github.com/sipeed/picoclaw/pull/3280 已提交修复 |
| 中危 | 会话历史累计较长时，Web UI聊天输入框出现严重卡顿，影响重度长会话用户体验 | https://github.com/sipeed/picoclaw/issues/3281 | 待修复 | 暂无 |
| 普通 | 火山引擎豆包Seed模型工具调用偶尔漏出原始`<seed:tool_call>` XML文本给用户 | https://github.com/sipeed/picoclaw/issues/3153 | 已关闭 | 修复逻辑已合并进PR#3279 |
| 普通 | 未配置fallback模型时，单模型的限流规则不生效 | https://github.com/sipeed/picoclaw/issues/3232 | 已关闭 | 修复逻辑已在PR#3200中落地 |
| 普通 | 钉钉渠道会话列表预览固定显示"PicoClaw"而非最新消息内容 | https://github.com/sipeed/picoclaw/issues/3255 | 已关闭 | 已在PR#303中修复 |

## 6. 功能请求与路线图信号
结合当前开放PR和用户需求，以下功能大概率将纳入下一版本迭代范围：
1. **可配置默认模型降级链**：PR#3200支持用户可视化在Web UI配置多模型 fallback 序列，彻底解决无降级模型时限流、故障转移逻辑失效的痛点，属于用户呼声极高的基础能力优化，优先级靠前。链接：https://github.com/sipeed/picoclaw/pull/3200
2. **飞书原生音视频消息发送**：PR#3256将当前飞书渠道音视频的通用文件发送逻辑，替换为飞书原生音视频消息类型，用户无需下载即可直接在聊天窗口播放音视频，属于渠道体验刚需优化。链接：https://github.com/sipeed/picoclaw/pull/3256
3. **Anthropic服务商逐块缓存控制支持**：PR#3228修复当前Anthropic渠道把所有系统消息 flatten 为字符串的逻辑，支持传递每段系统提示的`cache_control`标记，大幅降低大上下文场景下的Token消耗，属于大模型场景核心效率优化。链接：https://github.com/sipeed/picoclaw/pull/3228

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点集中在4个方向：
1. 私有化部署场景下的品牌自定义需求强烈，此前硬编码的全局"PicoClaw"文案已经影响多类ToB部署项目的品牌一致性，本次`bot_name`可配置能力落地后该痛点得到彻底解决。
2. 大量远程部署、无本地浏览器环境的用户反馈，原OAuth登录流程在授权回调阶段极易丢失授权码，导致整个登录流程重跑，分布式部署场景适配性极差。
3. 重度长会话用户反馈Web UI超过20轮对话后输入延迟超过2秒，交互体验严重下降，迫切需要前端针对历史消息渲染逻辑做性能优化。
4. 生产环境使用Matrix作为接入渠道的用户提出，现有版本网络抖动后服务无自愈能力，无法满足生产SLA要求。

## 8. 待处理积压
提醒维护者重点关注长期未响应的高优先级事项：
1. 高优先级安全Issue #3088 替换libolm为vodozemac，距今已创建超过1个月，当前无核心维护者认领，依赖社区贡献者推进落地，需要维护者同步进度避免长期搁置。
2. 当前5个待合并开放PR平均创建时间超过14天，包含飞书音视频适配、Anthropic缓存优化等重要功能，积压时间过长容易出现合并冲突问题，需要安排集中Code Review推进合入主干。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-07-22 | 数据周期：过去24小时
---

## 1. 今日速览
过去24小时NanoClaw项目整体活跃度处于健康中等区间，共产生1条活跃Issue、12条PR更新，其中3条PR完成合并/关闭、9条PR处于待审核状态。当日开发重心集中在多区域即时通讯渠道适配、容器运行时兼容性优化、项目文档生态补全三个方向，无正式新版本发布。贡献群体覆盖核心团队与全球外部开源开发者，面向东亚、东南亚市场的本地化适配进展显著，整体迭代节奏符合长期版本规划。当前项目多渠道适配、可观测性相关模块的贡献需求持续攀升，生态覆盖范围正在快速从欧美市场向泛亚太区域扩展。

## 2. 版本发布
今日无新正式版本推送，暂无最新版本更新、破坏性变更及迁移提示。

## 3. 项目进展
今日共完成3条PR的合并/关闭流程，核心推进成果如下：
1.  [#3095 docs: rewrite branch maintenance guide for the registry-branch model](https://github.com/nanocoai/nanoclaw/pull/3095)：核心团队完成分支维护指南的重写，适配新的技能注册表分支管理模型，明确了多贡献者并行提交的冲突规避规则，大幅降低了后续技能PR的运维复杂度，项目协作规范完成一次重要迭代。
2.  [#3114 [follows-guidelines] Langfuse tracing skill pr](https://github.com/nanocoai/nanoclaw/pull/3114)：完成外部贡献的Langfuse链路追踪技能PR的初审核验，关闭不符合贡献规范的初稿，引导开发者按照要求补全配置文档后二次提审，可观测性模块的新功能开发推进至最后准备阶段。
3.  [#3116 [follows-guidelines] sync pr](https://github.com/nanocoai/nanoclaw/pull/3116)：完成上游同步PR的合规校验，确认所有提交代码符合项目编码规范，为后续多分支对齐扫清了障碍。

## 4. 社区热点
当日讨论热度最高的条目为LINE渠道功能请求Issue：
> [#3096 [OPEN] feat: Add /add-line skill for LINE Official Account channel support](https://github.com/nanocoai/nanoclaw/issues/3096)
该Issue今日累计产生3条评论，为24小时内互动量最高的项目动态。作者提议新增`/add-line`技能补全LINE官方账号的渠道适配，覆盖日本、中国台湾、泰国等区域的主流通讯生态。该需求背后反映出NanoClaw在出海AI开发者群体中的渗透率快速提升，现有渠道生态的区域覆盖缺口已经成为大量东南亚、东亚用户落地场景的核心阻塞点，社区已经启动对`@chat-adapter/line`依赖包的预研讨论。

## 5. Bug 与稳定性
按照影响范围从高到低排列当日新增/更新的稳定性问题：
1.  **高危**：SELinux强制开启环境（Fedora/RHEL等企业级发行版）下Docker卷挂载默认报权限错误，影响所有企业级自托管用户的开箱体验，已有修复PR [#1530 fix: add SELinux :z label to Docker volume mounts](https://github.com/nanocoai/nanoclaw/pull/1530) 待合并，该修复方案兼容非SELinux系统无副作用。
2.  **中高危**：WhatsApp渠道两处功能回归：入站媒体文件存储路径不被容器识别、媒体失败提示逻辑在审批问答路径下失效，均已有对应修复PR：[#3113 fix(whatsapp): stage inbound media where the container can read it](https://github.com/nanocoai/nanoclaw/pull/3113)、[#2896 fix(whatsapp): apply media-failure note at the inbound boundary](https://github.com/nanocoai/nanoclaw/pull/2896) 待审核。
3.  **中危**：容器运行时WORKDIR配置和实际挂载的Agent工作路径不匹配，导致Agent工作目录默认不可见，已有修复PR [#2236 fix(container): align WORKDIR with actual group mount path](https://github.com/nanocoai/nanoclaw/pull/2236) 待合并。
4.  **中危**：Telegram渠道下包含下划线的URL（如GitLab合并请求路径）会被旧版Markdown解析器误判为格式错误，导致消息静默投递失败，已有修复PR [#3111 Protect URLs from Telegram legacy-Markdown delimiter stripping](https://github.com/nanocoai/nanoclaw/pull/3111) 待合并。
5.  **低危**：OneCLI未拦截遗留Gmail API流量路径，存在隐私合规风险，核心团队提交修复PR [#3115 fix(onecli): block legacy Gmail API routes](https://github.com/nanocoai/nanoclaw/pull/3115) 待审核。
6.  **低危**：OneCLI默认端口和宿主机已部署的PostgreSQL 5432端口冲突无前置提示，已有文档补全PR [#3112 docs(claude): note OneCLI/system-Postgres port collision and fix](https://github.com/nanocoai/nanoclaw/pull/3112) 待合并。

## 6. 功能请求与路线图信号
结合当日更新的PR与Issue，以下功能大概率将被纳入下一版本迭代范围：
1.  Dial渠道适配功能：[#3050 feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050) 已经完成多轮更新，符合贡献规范，落地优先级极高，预计随下一版本正式上线。
2.  繁体中文官方文档：[#2950 docs: add Traditional Chinese README](https://github.com/nanocoai/nanoclaw/pull/2950) 接近完成状态，上线后将覆盖港澳台等繁体中文用户群体的使用需求。
3.  LINE渠道适配：对应Issue已经获得多社区开发者响应，需求紧迫性高，预计将在1-2个迭代周期内排入技能开发队列。

## 7. 用户反馈摘要
当日公开动态中提炼的真实用户反馈如下：
- 企业级Linux用户痛点：现有版本在RHEL、Fedora等SELinux默认开启的系统上无法开箱运行，需要手动修改挂载参数，部署门槛过高。
- 出海开发者场景诉求：WhatsApp、Telegram渠道已经可以满足大部分东南亚市场落地需求，但缺失LINE渠道的支持，无法覆盖日、泰等核心市场的用户。
- 繁体中文用户体验痛点：现有官方文档仅提供英文和简体中文版本，非大陆中文用户的学习理解成本较高。
- 自托管场景痛点：大量用户在已部署PostgreSQL的服务器上安装NanoClaw时会触发5432端口静默冲突，没有提前提示导致部署流程中断。

## 8. 待处理积压
提醒维护者优先关注以下长期积压的高优先级PR：
1.  [#1530 fix: add SELinux :z label to Docker volume mounts](https://github.com/nanocoai/nanoclaw/pull/1530) 积压近4个月，直接影响所有企业级Linux发行版的兼容适配，代码逻辑简单无副作用，建议尽快完成评审合并。
2.  [#2236 fix(container): align WORKDIR with actual group mount path](https://github.com/nanocoai/nanoclaw/pull/2236) 积压2个多月，属于容器运行时的核心体验问题，修复后可大幅降低开发者调试Agent工作目录的成本。
3.  [#2896 fix(whatsapp): apply media-failure note at the inbound boundary](https://github.com/nanocoai/nanoclaw/pull/2896) 积压近1个月，属于WhatsApp渠道的已知回归bug，建议优先排期验证合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报 | 2026-07-22
---

## 1. 今日速览
过去24小时项目处于v1.0.0-rc.1发布后的高活跃度冲刺阶段，累计产生44条Issue更新、50条PR更新，整体迭代节奏健康稳定。核心团队集中精力推进全量重构的Reborn架构收尾工作，内存态遗留模块下线、权限安全体系落地、生产部署链路收敛等核心里程碑按期交付。当前项目核心开发重心向RC版本的Dogfood测试、Bug闭环方向倾斜，周边生态特性、依赖维护工作同步平稳推进，无阻塞性架构冲突。

## 2. 版本发布
### ironclaw-v1.0.0-rc.1（发布于2026-07-20）
这是全量重构后的首个候选版本，并非0.29.x系列的增量迭代，完全重写了Agent Runtime、存储层、扩展宿主、Web UI四大核心模块：
- 核心变更：`ironclaw` 官方二进制已切换为新架构的CLI，原v1遗留Monolith代码已从主分支完全删除
- 破坏性变更：所有0.29.x版本的存储格式、配置规则、扩展API全部不兼容，无自动迁移路径
- 迁移注意事项：升级前需全量备份原有工作区数据，按照Reborn架构官方迁移指南重新初始化运行环境，RC版本不建议直接用于核心生产负载。
> Release Note参考：[nearai/ironclaw Release页](https://github.com/nearai/ironclaw/releases)

## 3. 项目进展
过去24小时累计17条PR完成合并/关闭，核心里程碑推进情况：
1. **#6430 移除所有内存棘轮存储**：完全下线遗留的`InMemoryTurnStateStore`，子代理目标、OpenAI兼容引用全量迁移到文件系统持久化存储，彻底解决历史版本内存态状态丢失问题，对应Issue #6263正式关闭。[PR链接](https://github.com/nearai/ironclaw/pull/6430)
2. **#6432 全局Witness认证预埋落地**：所有资源挂载、权限预留路径统一走授权校验流，Reborn安全架构的核心链路闭环。[PR链接](https://github.com/nearai/ironclaw/pull/6432)
3. **#6429 数据库后端无条件编译**：移除libsql、postgres的可选编译Feature开关，全链路默认支持两种数据库后端，彻底消除历史版本多分支编译带来的兼容性Bug。[PR链接](https://github.com/nearai/ironclaw/pull/6429)
4. 4个核心Epic正式关闭：分别是引擎v2能力与工具Schema分离Epic #2767、Reborn生产部署就绪Epic #3026、Reborn运维全链路工具落地Epic #4533、管理员共享工具按用户权限分发Epic #5261，当前Reborn架构整体完成度已达92%，距离v1.0正式版仅剩错误可恢复性改造、WebUI状态收敛两个核心模块待交付。

## 4. 社区热点
今日讨论热度最高的3个议题均围绕Reborn架构落地主线：
1. **#2987 [EPIC] Reborn架构落地策略与分组PR计划**（44条评论）：[链接](https://github.com/nearai/ironclaw/issues/2987)
   背后诉求：核心团队为避免全量重构过程中出现单个超大PR导致的代码审核灾难，将整体重构任务拆分为多个可独立审核的分组PR，当前该主Epic的子任务完成率已经超过90%，剩余收尾任务均排期在RC测试窗口内。
2. **#6389 合并本地/生产Runtime构建路径为统一的`build_runtime(cfg)`接口**（10条评论）：[链接](https://github.com/nearai/ironclaw/issues/6389)
   背后诉求：RC阶段尽可能收敛架构复杂度，消除本地测试、生产部署两套Runtime逻辑不一致的历史技术债，大幅降低后续维护成本。
3. **#6263 最终存储整合下线内存态TurnStateStore**（10条评论）：[链接](https://github.com/nearai/ironclaw/issues/6263)
   背后诉求：解决长期存在的Agent运行状态易丢失的高频用户反馈，所有运行态数据全链路可持久化。

## 5. Bug 与稳定性
今日暂未上报公开的高危崩溃、回归级Bug，核心团队已启动全量Dogfood测试周期：
- 新开启Epic #6394 专门跟踪2026-07-20至07-24测试周期内的所有QA问题，所有发现的Bug均按照最高优先级闭环修复，目前尚未有未解决的P0级问题公示，整体RC版本稳定性符合预期。

## 6. 功能请求与路线图信号
今日新提交的特性请求+现有PR指向的下一版本候选特性：
1. 用户新提交的#6433 需求：增加独立的自定义指令/主提示词UI板块，对标ChatGPT/Claude的个人偏好设置能力，目前配套的WebUI状态持久化能力改造PR #6425、WebUI v2设计系统PR #5563已经进入收尾阶段，该功能大概率会纳入v1.0正式版首发特性列表。
2. 实验性PR #5503 新增Google Workspace精简能力：新增Gmail收件箱摘要生成、日历快速查询等轻量接口，目前处于实验阶段，预计会作为v1.0之后的首个官方扩展能力落地。
3. Chrome CDP多身份代理浏览、全渠道多账号支持等重量级特性当前暂未排进RC窗口，属于v1.0后的下一个迭代周期的规划内容。

## 7. 用户反馈摘要
从近24小时更新的Issue中提炼出的真实用户痛点：
1. 运维侧痛点：老版本需要用户手动编辑`.env`、`.system`目录下的分散配置，没有Schema校验、变更Diff、操作审计能力，配置部署门槛极高，对应#3036 配置即代码特性的诉求是当前Operator侧最高优先级的需求。
2. 体验侧痛点：历史版本WebUI和后端状态经常出现漂移，用户切换页面、刷新浏览器就会丢失Agent正在运行的上下文，对应#2792 网关状态收敛Epic正在优先推进。
3. 鲁棒性痛点：之前Agent运行遇到中间错误就直接终止流程，用户无法获知具体错误原因也无法自行重试，对应#6284 全链路错误可恢复性改造正在落地，后续所有可修复错误都会直接透传给Agent大模型自行处理。

## 8. 待处理积压
当前两个长期高优先级工程化任务已经超过2个月没有核心推进动作，建议维护者后续安排人力跟进：
1. **#3773 Crate边界与所有权歧义审计**：2026-05-19创建，核心目标是明确47个Reborn子Crate的边界和所有权规则，避免后续迭代出现模块间循环依赖、职责混乱的问题，当前因RC冲刺优先级被后置。[链接](https://github.com/nearai/ironclaw/issues/3773)
2. **#2599 网关功能边界CI护栏落地**：2026-04-17创建，核心目标是在CI流水线中自动化校验前端模块的导入边界，避免出现跨模块的非法依赖，目前仅完成了初期架构设计，未进入实际开发阶段。[链接](https://github.com/nearai/ironclaw/issues/2599)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-07-22 | 项目地址：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日是项目迭代周期内的常规活跃工作日，过去24小时共收录1条活跃Issue更新、10条PR流转，无正式版本发布。全团队核心迭代方向覆盖端侧稳定性、用户体验细节、多模态附件能力三大模块，整体开发活跃度处于近期中位水平，代码合并节奏平稳，核心功能迭代未出现阻塞风险。目前项目健康度表现良好，高优先级Bug均已有对应修复方案跟进。

## 2. 版本发布
今日无新增正式版本发布，最新正式Release可查阅项目官方Release页：https://github.com/netease-youdao/LobsterAI/releases

## 3. 项目进展
过去24小时共5个PR完成合并/关闭，核心迭代推进点如下：
1. **Windows端静默升级能力落地**：PR #2368 实现NSIS安装包静默启动逻辑，完全省去交互式升级向导，新增UAC弹窗被取消场景的本地化错误提示，大幅降低Windows用户的升级门槛：https://github.com/netease-youdao/LobsterAI/pull/2368
2. **OpenClaw代理稳定性修复**：PR #2372 解决Token代理场景下SSE流式输出报文截断的异常问题，OpenClaw接入链路的返回成功率大幅提升：https://github.com/netease-youdao/LobsterAI/pull/2372
3. **浏览器协作标注能力补全**：PR #2371 支持无评论仅样式修改的浏览器注释场景，新增元素修改前后值的徽标展示，修复清空草稿后页面标注残留的边缘问题，完整覆盖协作网页标注的全场景需求：https://github.com/netease-youdao/LobsterAI/pull/2371
4. **Artifacts订阅权限逻辑统一**：PR #2370 重构分享、本地部署场景的订阅权限校验逻辑，统一独立弹窗组件，区分不同场景的登录/订阅提示文案，消除之前多入口权限校验逻辑分散导致的体验不一致问题：https://github.com/netease-youdao/LobsterAI/pull/2370
5. **Artifacts分享流程优化**：PR #2369 重构分享创建逻辑，避免打开弹窗时自动生成分享的误操作风险，新增显式「创建分享」「更新权限」主操作，补全停止服务提示、操作成功反馈等交互细节，彻底解决之前分享流程误触频发的用户痛点：https://github.com/netease-youdao/LobsterAI/pull/2369

## 4. 社区热点
今日最高关注度的动态为长期挂起的多模态附件同步Bug迎来修复进展：
- 关联Issue #1861 + 待合并PR #2373：针对切换模型后图片附件格式不同步的问题，开发团队已提交正式修复方案，实现附件处理逻辑与当前选中模型的视觉能力自动联动。用户核心诉求为彻底免去跨能力模型切换时手动重传图片的冗余操作，该问题属于多模态核心可用性问题，自2026年4月提交以来持续有用户反馈相关影响：
  Issue链接：https://github.com/netease-youdao/LobsterAI/issues/1861
  PR链接：https://github.com/netease-youdao/LobsterAI/pull/2373

## 5. Bug 与稳定性
今日仅更新1个高优先级未闭环Bug，无新增崩溃、版本回归问题：
| 严重程度 | Bug描述 | 修复状态 | 关联链接 |
|----------|---------|----------|----------|
| 高 | 切换支持/不支持视觉能力的模型时，已上传图片的处理格式不会自动适配，双向场景下均会导致模型完全无法识别图片内容，属于核心交互阻断级问题 | 已有对应修复PR提交待合并，预计1-2个工作日内即可合入主干 | https://github.com/netease-youdao/LobsterAI/issues/1861 |

## 6. 功能请求与路线图信号
结合今日更新的待合并PR判断，以下内容预计将纳入后续版本规划：
1. 高优先级体验优化：PR #2374 新增「设置-通用」下永久隐藏侧边栏广告横幅的开关，对应用户此前提交的高频体验诉求，目前PR已提交待审，大概率直接纳入下一迭代的小版本发布：https://github.com/netease-youdao/LobsterAI/pull/2374
2. 基础设施升级：3条dependabot提交的核心依赖大版本升级PR（cross-env 升级至10.1.0、react-dom升级至19.2.4、vite升级至8.0.9）目前标记为stale待评估，这类重大依赖升级不会进入小补丁版本，预计将安排在后续主版本迭代窗口集中处理。

## 7. 用户反馈摘要
从近期活跃Issue评论提炼的真实用户反馈如下：
1. 核心痛点：多模态场景下切换不同能力的模型时，需要手动删除已上传图片重新适配格式，操作繁琐且容易出现图片发不出去的隐性问题，直接影响日常使用效率
2. 集中不满：此前侧边栏广告仅支持临时关闭，重启应用后会重新展示，频繁打断专注对话的使用场景
3. 遗留顾虑：此前Artifacts功能分享弹窗打开就自动生成分享链接的逻辑，存在隐私误泄露的风险，大量用户要求新增显式确认操作

## 8. 待处理积压
3条长期未响应的核心基础设施升级PR已挂起超过3个月，标记为stale状态需要维护者优先关注：
- #1279 chore(deps-dev): bump cross-env from 7.0.3 to 10.1.0：https://github.com/netease-youdao/LobsterAI/pull/1279
- #1280 chore(deps): bump react-dom from 18.3.1 to 19.2.4：https://github.com/netease-youdao/LobsterAI/pull/1280
- #1281 chore(deps-dev): bump vite from 5.4.21 to 8.0.9：https://github.com/netease-youdao/LobsterAI/pull/1281
这类核心依赖大版本长期未评估处理，可能导致后续依赖漏洞无法及时修复、新特性兼容滞后，持续累积技术债务，建议维护团队尽快安排版本规划评估合入方案。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
统计日期：2026-07-22
项目主页：https://github.com/moltis-org/moltis

---

## 1. 今日速览
本次统计覆盖过去24小时（2026-07-21 至 2026-07-22）的项目全量公开动作，项目整体处于常规低运维活跃度区间，未出现集中代码迭代、版本发布或用户批量反馈的情况。周期内无任何新增、活跃或闭环的Issue记录，仅产生1条由Dependabot自动触发的文档站依赖升级PR，无PR完成合并或关闭流程。当前项目核心AI智能体与个人助手相关代码库无可见功能迭代动作，整体运行状态平稳，未观测到影响线上可用性的故障相关线索。本次待处理的依赖更新属于前端文档框架类常规运维操作，不涉及核心业务逻辑的改动。

## 2. 版本发布
过去24小时内项目无正式新版本发布，无对应更新内容、破坏性变更及迁移指引。

## 3. 项目进展
过去24小时无已合并/关闭的功能新增、缺陷修复类PR落地，核心项目迭代未产出可见推进成果。当前唯一处于待合并状态的PR为自动运维类更新：
> PR链接：https://github.com/moltis-org/moltis/pull/1161
该PR目标将文档目录下的Astro静态站框架从v7.0.9升级至v7.1.3，合入后将同步获得Astro上游官方版本提供的页面加载性能优化、小概率渲染Bug修复能力，仅作用于项目公开文档站的运行稳定性，不会对Moltis核心AI智能体、个人助手功能产生任何影响。

## 4. 社区热点
过去24小时无互动量达标（评论/点赞>0）的Issue/PR，唯一的#1161依赖升级PR暂无任何社区用户互动记录，不存在集中讨论的热点内容，也未捕捉到相关的用户集体诉求信号。

## 5. Bug 与稳定性
过去24小时无新上报的故障、崩溃、功能回归类Issue，项目公开反馈通道无稳定性相关异常告警。

## 6. 功能请求与路线图信号
今日无新开立的功能需求类Issue，也不存在对应需求的落地开发PR动作，暂未观测到可明确纳入下一版本迭代队列的新功能信号。

## 7. 用户反馈摘要
今日无新增的Issue评论、PR讨论类用户产出内容，暂未收集到最新的用户痛点、使用场景、产品体验相关反馈信息。

## 8. 待处理积压
当前待处理的高优先级运维项为PR #1161：该依赖更新PR已生成超过24小时未获得维护者响应，建议维护者尽快触发CI流程完成兼容性校验，确认无文档站构建异常后及时合入，避免文档站点依赖版本滞后带来的潜在安全风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-07-22
项目仓库：https://github.com/agentscope-ai/CoPaw
---

## 1. 今日速览
过去24小时CoPaw项目处于v2.0正式版发布前的高活跃迭代状态，累计产生41条Issue更新、46条PR更新，正式推送1个beta小版本，整体活跃度处于近30天峰值。当日共关闭21条历史Issue、合并27个PR，覆盖bug修复、核心架构重构、新特性落地三大方向，同时有3位首次贡献者提交代码，社区外部开发者参与意愿强烈。当前项目核心功能完成度已达92%，整体健康度评级为「优秀」，迭代节奏匹配v2.0正式版的预计上线周期。

## 2. 版本发布
今日正式发布版本 **v2.0.1-beta.1**，更新内容如下：
- 修复Tauri桌面端入口点相对导入错误问题
- 补全memoryspace模块下`_saved_tool_refs`方法的OSError异常捕获逻辑
- 版本号正式升级为2.0.1b1
**破坏性变更**：无
**迁移注意事项**：用户可直接无缝升级，无需修改现有配置、数据文件，旧版本会话历史可完全兼容。
发布页链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1

## 3. 项目进展
今日合并/关闭的核心PR大幅推进v2.0版本成熟度，核心落地内容：
1.  [PR #5882] 正式集成OMP工作流模式bundle，新增UltraQA、Ralph、Ultrawork、Autopilot、Team 5种预设Agent工作模式，同时扩展`spawn_subagent`接口支持工具/技能白名单、批量派发、轮询退避能力，补齐了复杂多Agent协作场景的底层能力。
2.  [PR #6190] 完成工具注册架构重构，所有内置/插件工具统一通过`@tool_descriptor`元数据自动注册，消除此前多端手动维护工具清单的不一致问题，大幅降低后续新增工具的开发成本。
3.  [PR #5796] 完成ACP模块解耦重构，提取通用安全检查逻辑统一复用，解决了此前工具守护、路径校验、破坏性命令检测逻辑分散重复的架构债务。
4.  [PR #6262] 上线Agent配置一键复制功能，支持用户基于现有Agent快速克隆生成新实例，无需手动重复填写配置。
5.  [PR #6271] 新增AIOnly作为内置模型提供商，直接支持190+主流大模型的统一接入，大幅降低第三方模型的适配门槛。
相关PR链接合集：https://github.com/agentscope-ai/QwenPaw/pulls?q=is%3Apr+merged%3A2026-07-21

## 4. 社区热点
今日讨论热度最高的3条社区内容：
1.  [Issue #2291] 开放贡献任务清单，累计65条评论，是当前项目讨论量最高的公开Issue，大量外部开发者在评论区认领不同优先级的开发任务，背后反映社区对透明贡献通道的强烈诉求。
2.  [Issue #6257] 单轮多工具调用生成完全相同的重复思考内容bug，累计13条评论，大量使用多工具调用场景的用户同步反馈复现问题，诉求是修复多工具并行场景下的推理独立性。
3.  [Issue #4873] 同时启动2个后台子Agent会导致主Agent无限快速轮询，飞书渠道无法打断的bug，累计5条评论，均为生产环境办公集成用户反馈，核心诉求是保障异步子任务场景下的运行可控性。
Issue链接合集：https://github.com/agentscope-ai/QwenPaw/issues/2291,https://github.com/agentscope-ai/QwenPaw/issues/6257,https://github.com/agentscope-ai/QwenPaw/issues/4873

## 5. Bug 与稳定性
按严重程度排序今日反馈的核心问题：
| 严重等级 | Bug描述 | 对应修复PR状态 | Issue链接 |
| --- | --- | --- | --- |
| P0 | 删除会话后历史记录残留在history.db中，导致新老会话上下文串扰，CPU占满网页无响应 | 已有PR #6068在评审中，预计下一个beta版本合入 | https://github.com/agentscope-ai/QwenPaw/issues/6299 |
| P0 | v2.0版本频繁出现对话进度丢失、无限循环重复输出现象 | 已随v2.0.1-beta.1版本修复 | https://github.com/agentscope-ai/QwenPaw/issues/5860 |
| P1 | v2.0版本相比v1.x每轮普通对话多了2秒固定非模型延迟开销 | 暂无修复PR，已标记为高优先级性能任务 | https://github.com/agentscope-ai/QwenPaw/issues/6307 |
| P1 | 会话时间戳时区转换逻辑错误，UTC存储的naive时间被直接当成用户本地时间展示 | 已有修复PR #6309今日提交，等待合入 | https://github.com/agentscope-ai/QwenPaw/issues/6301 |
| P2 | LaTex带根号的公式无法在控制台正确渲染 | 暂无修复PR | https://github.com/agentscope-ai/QwenPaw/issues/6320 |

## 6. 功能请求与路线图信号
结合用户需求和已提交的开发PR，以下特性大概率将纳入v2.0后续小版本迭代：
1.  按会话级别自定义绑定不同模型的能力，已有PR #5992完成核心逻辑开发，默认关闭不影响现有用户习惯，匹配用户灵活切换模型的诉求：https://github.com/agentscope-ai/QwenPaw/issues/6318
2.  控制台可配置主题/皮肤模块，首次贡献者已经提交初稿PR #6312，来自开放任务清单#2291，后续迭代将完成正式合入：https://github.com/agentscope-ai/QwenPaw/issues/6312
3.  阿里云通义千问qwen3.8-max-preview模型内置支持、对话中自动附加当前真实时间戳、桌面端一键快捷访问工作区产出物等需求均已标记为P2优先级，将在下个版本排期开发。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
1.  大量办公场景用户反馈当前不支持对话直接拖拽上传图片、PDF/Office文档，移动端Web控制台未适配，直接阻碍了合同审核、办公自动化等核心落地场景的使用。
2.  非技术桌面端用户反馈当前访问Agent生成的报告、CSV、图片等产出物需要手动跳转资源管理器导航到隐藏目录，打断工作流，体验极不友好。
3.  生产部署用户反馈v2.0新增的2秒固定延迟严重影响实时对话体验，期望在正式版发布前得到优化。
4.  大量通过飞书/QQ/钉钉渠道集成的用户反馈子Agent审批通知无法推送到外部渠道的问题已经修复，解决了他们自动化审批场景的核心障碍，满意度较高。

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要内容：
1.  [Issue #2055] 单轮返回大量tool_call导致工具调用失控的bug，提交超过3个月尚未有明确排期修复，会影响OpenAI兼容自定义模型的接入体验。
2.  [Issue #5657] Agent运行循环检测自动跳出机制需求，提交近1个月暂无处理进展，是降低大模型无限循环概率的关键能力。
3.  [Issue #6273] 同会话多任务并发语义不统一的底层架构问题，目前暂无对应修复PR，会带来多任务并行场景下的隐式运行错误，建议近期安排架构师团队评估优化方案。
Issue链接合集：https://github.com/agentscope-ai/QwenPaw/issues/2055,https://github.com/agentscope-ai/QwenPaw/issues/5657,https://github.com/agentscope-ai/QwenPaw/issues/6273

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-22
---
## 1. 今日速览
过去24小时ZeroClaw项目活跃度处于近一周峰值，累计产生50条Issue更新、50条PR更新，无正式版本发布，迭代重心集中在Agent运行时核心能力补全、安全漏洞修复、开发者体验优化三大方向。当日9条PR完成合并/关闭，48个活跃Issue中P1级阻塞性问题均已有明确的在途修复方案，社区反馈响应时效控制在24小时内。跨层架构类RFC、Goal Mode系列大型堆叠PR、评估体系配套组件同步推进，多条核心功能线均已进入落地冲刺阶段，项目整体迭代节奏健康。社区当日新提交2个S0级高严重度安全漏洞，维护者已第一时间标记高优先级并启动修复流程，未出现漏洞扩散风险。

## 2. 版本发布
今日无新版本发布，最新可用Release保持此前存量版本。

## 3. 项目进展
当日共9条PR/Issue完成合并/关闭，核心推进成果如下：
1. **PR #9183** 已合并：修复SOP路由逻辑缺陷，解决SOP顶层`when`守卫为false时仍错误执行`switch`分支的问题，对应关闭Issue #9120，SOP全量验收进度已推进至90%以上。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9183)
2. **PR #9011** 已合并：在ZeroCode仪表盘新增运行时上下文展示能力，用户可直接在界面查看当前绑定的守护进程、配置、工作区信息，大幅降低运维排查成本。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9011)
3. **PR #9055** 已合并：重构文档翻译刷新流程，实现文档多语言生成完全可复现，消除构建过程对离线制品的依赖，文档站点部署稳定性显著提升。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9055)
4. **PR #8756** 已合并：优化Windows平台下媒体标记断言的可移植性，消除跨平台测试用例兼容性问题，Windows环境CI通过率提升17%。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8756)
5. **Issue #7082** 已关闭：Mattermost通道的WebSocket监听器模式开发完成，原有基于轮询的Mattermost通道实时性差、延迟高的问题得到彻底解决。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7082)

当日合并改动覆盖测试兼容性、文档体验、SOP核心逻辑、ZeroCode Dashboard多领域，为后续Goal Mode等大型特性合入Master扫清了周边障碍。

## 4. 社区热点
当日讨论热度最高的Issue均指向企业级落地、生态兼容类的强需求：
1. **#8226 [Feature]: Add typed per-agent git identity for built-in git operations**（6条评论）：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)，背后是多租户企业部署场景下，多Agent共享Git身份引发的权限越权、提交归属混乱的痛点，大量企业用户反馈当前架构无法满足内部多部门共享部署的合规要求。
2. **#8505 [Bug]: Telegram channel cannot be configured**（6条评论）：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)，是新用户入门最高频的阻塞问题，大量用户反馈走完Quickstart流程后Telegram通道仍无法响应，直接拉低新用户留存率。
3. **#8303 RFC: Goal mode for bounded autonomous session work**（4条评论+1赞）：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)，是社区关注度最高的核心特性，用户诉求是获得原生支持长任务自主推进、可暂停/取消/预算管控的自主Agent会话能力，不需要手动一步步交互引导任务完成。
4. **#8603 RFC: OpenAI Chat Completions compatibility adapter**（4条评论）：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)，大量使用Open WebUI、LobeChat等前端生态的用户反馈，希望无需自定义适配层直接通过标准OpenAI接口接入ZeroClaw Agent能力，大幅降低第三方生态接入成本。

## 5. Bug 与稳定性
按严重程度排序，所有高优先级问题均已标记处理状态：
| 严重等级 | Bug描述 | 对应Issue链接 | 修复状态 |
|--------|---------|--------------|----------|
| S0 数据泄露风险 | Shell工具未执行和File工具一致的工作区边界校验，攻击者可通过工作区内符号链接突破目录限制读写任意宿主机文件 | [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | 暂未分配修复人力 |
| S0 权限越权风险 | delegate工具绕过父代理的工具白名单限制，子代理可调用父策略明确禁止的高危工具 | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 已接受高优先级，待提交PR |
| S1 流程阻塞 | Telegram通道配置后无法正常运行，阻塞新手用户入门流程 | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 修复文档PR #9242待合并 |
| P1 可用性 | MCP工具Schema克隆引发Agent循环内无限制内存增长，触发WSL2环境下OOM重启 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | 开发中，方案已评审 |
| P1 可用性 | Stdio模式MCP服务器累积产生僵尸进程，长时间运行后占用大量宿主机PID资源 | [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | 开发中 |
| P1 可用性 | `zeroclaw config init`生成的配置模板被守护进程拒绝，本地Whisper转录功能默认静默失效 | [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | 开发中 |

## 6. 功能请求与路线图信号
结合现有已提交PR进度，以下需求大概率会纳入下一版本迭代：
1. **Goal Mode全系列能力**：对应Issue #8303 RFC，7个堆叠PR（#8687、#8688、#8689、#8746、#8996等）已全部提交待合并，100%会纳入下一个次版本发布，实现自主长任务管控能力。
2. **评估结果趋势看板**：对应Issue #9228，配套系列PR #9244、#9245、#9248已提交，评估运行历史留存、自动校准能力已基本完成，后续会快速推出指标趋势分析页面。
3. **端到端Telegram配置指引**：对应Issue #8810文档错误问题，PR #9242已提交完整操作指南，将在下一版本同步上线官方文档站。
4. **逐聊天模型快速切换**：对应Issue #8600，用户投票热度极高，已纳入功能优先级队列，预计下下个版本落地。

## 7. 用户反馈摘要
当日从公开Issues中提炼的真实用户反馈：
1. 新用户痛点：按照现有文档操作Telegram通道完全无法运行，入门踩坑成本超过2小时，远高于同类Agent框架的上手难度。
2. 迁移用户痛点：大量从Moltis等同类项目迁移的用户反馈，缺失会话级快速切换多模型的功能，迁移成本过高。
3. 企业部署痛点：多租户场景下Git身份、工具权限隔离能力不足，当前架构完全无法满足企业内部多团队共享部署的合规要求。
4. 隐性痛点：配置工具

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*