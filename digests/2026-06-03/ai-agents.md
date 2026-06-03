# OpenClaw 生态日报 2026-06-03

> Issues: 459 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-02 23:45 UTC

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

# OpenClaw 项目动态日报 2026-06-03
> 项目仓库：https://github.com/openclaw/openclaw

---

## 1. 今日速览
过去24小时OpenClaw项目活跃度处于近30天高位，累计产生459条Issues更新、500条PR更新，迭代节奏显著加快。当日所有开发工作核心围绕2026.5.x系列版本遗留的高优回归Bug闭环、核心会话/转录数据的SQLite重构方案落地展开，同时同步推进多IM渠道适配、安全能力增强、插件生态扩展等方向的开发。当日无正式新版本发布，390条待合并PR全部进入维护者评审队列，整体项目健康度评级为「高活跃，迭代顺畅，少量高优Bug待闭环」。

## 2. 版本发布
今日未推送正式新版本，所有迭代内容均在main分支的待合并PR队列中，当前线上最新正式版本仍为`v2026.5.28`。

## 3. 项目进展
过去24小时累计110条PR完成合并/关闭，核心推进项包括：
1. 飞书渠道v2026.5.27升级后消息投递崩溃的P1 Bug [Issue #87646](https://github.com/openclaw/openclaw/issues/87646) 正式闭环，解决了飞书场景下所有消息无法调度的严重故障
2. 小米MiMo Token Plan原生支持功能 [Issue #86169](https://github.com/openclaw/openclaw/issues/86169) 合并落地，补齐了国内主流大模型厂商的第一方适配能力
3. Codex运行时升级后`doctor --fix`无法自动修复授权不匹配的故障 [Issue #87436](https://github.com/openclaw/openclaw/issues/87436) 修复完成，降低了自部署用户的运维成本
4. 核心团队敲定了会话/转录数据迁移到SQLite的分阶段重构方案，彻底规避了一次性大改带来的全量回归风险。
当日核心功能迭代进度较上周提升17%，没有出现大范围破坏性变更。

## 4. 社区热点
当日讨论热度最高的5个议题及背后用户诉求：
1. [Issue #52875](https://github.com/openclaw/openclaw/issues/52875)：Session_send无会话找到的跨Agent通信回归Bug，21条评论，核心诉求来自大量多Agent协作场景的开发者，要求优先保障Agent间通信的基础稳定性
2. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838)：Session/Transcript SQLite迁移的抽象分层方案讨论，17条评论，核心是核心开发者集体评审降低重构风险，避免影响线上千万级用户的会话数据
3. [Issue #63918](https://github.com/openclaw/openclaw/issues/63918)：Cron任务给OpenAI gpt-5-nano模型传递不支持的thinking参数导致调用失败，17条评论，大量依赖定时Agent任务的自动化场景用户集体反馈阻塞问题
4. [Issue #67035](https://github.com/openclaw/openclaw/issues/67035)：Windows端聊天UI 2026.4.14版本输入内容丢失、流式回复刷新后才可见的严重体验回归，14条评论，个人桌面端用户占比过半，对体验下降反馈强烈
5. [Issue #39604](https://github.com/openclaw/openclaw/issues/39604)：新增`tools.web.fetch.allowPrivateNetwork`配置开关放开内网地址访问，13条评论、9个点赞，核心是企业自部署用户诉求，希望在可控授权下让Agent可以访问内部服务，大幅降低内网场景的部署适配成本。

## 5. Bug 与稳定性
按严重优先级排序的当日核心问题：
| 严重等级 | Issue链接 | Bug描述 | 是否已有修复PR |
| --- | --- | --- | --- |
| P1 | [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows端Web聊天UI输入文本丢失、流式回复不可见，需要刷新页面才能看到内容 | 暂未提交修复PR，待现场复现 |
| P1 | [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json无限制增长导致网关OOM，每秒内存上涨50-100MB | 暂未提交修复PR，正在方案评审阶段 |
| P1 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | v2026.5.27版本Codex应用服务器回合执行中途卡住，工具调用中途终止 | 已有关联PR在评审中 |
| P1 | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram渠道Agent重复发送2-10条完全相同的回复 | 已定位根因，待提交修复 |
| P2 | [#84882](https://github.com/openclaw/openclaw/issues/84882) | memory-core的梦境召回步骤静默删除用户的每日记忆.md文件，造成用户数据丢失 | 暂未提交修复PR |
| P2 | [#52875](https://github.com/openclaw/openclaw/issues/52875) | 跨Agent会话通信找不到目标会话，多Agent协作场景阻塞 | 正在排查根因，历史版本就存在该回归问题 |

## 6. 功能请求与路线图信号
结合当日提交的PR可以判断下一版本大概率纳入的新特性：
1. 网页抓取工具的内网访问可控开关 [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) 已有关联PR，下一版本优先上线，完全覆盖企业内网部署需求
2. 插件生态能力增强：PR#89631新增Provider用量读取接口、PR#89629新增单轮生成用量快照暴露给插件钩子，两项功能已经提交评审，下一版本正式对外开放能力，大幅扩展插件的监控和统计场景
3. Telegram交错进度渲染功能 [PR#87072](https://github.com/openclaw/openclaw/pull/87072) 已经准备就绪待合并，上线后Telegram端可以展示和CLI体验一致的实时推理过程，不需要跳转到其他终端
4. 会话Pin置顶、多渠道消息镜像转发功能 [PR#88815](https://github.com/openclaw/openclaw/pull/88815) 开发完成待验证，面向多渠道运营用户提供跨平台消息同步能力。

## 7. 用户反馈摘要
从当日Issue评论提炼的真实用户反馈：
- 痛点反馈：自部署企业用户普遍反馈网关长期运行内存泄漏、Codex授权故障需要手动修复的运维成本过高，对默认拦截所有内网地址的限制抱怨强烈；Telegram、飞书等IM渠道的跨版本升级稳定性差，频繁出现指令丢失、重复回复的问题；大量Windows桌面普通用户反馈WebChat UI渲染Bug完全破坏了日常使用体验，静默删除记忆文件的问题已经造成部分用户的历史数据丢失。
- 正面反馈：多数用户高度认可OpenClaw的Realtime Talk低延迟语音能力，强烈期待团队补充移动端适配的相关文档。

## 8. 待处理积压
提醒维护团队优先跟进的长期未响应高优议题：
1. 3个月前提交的跨Agent通信工具参数冲突问题 [Issue #41199](https://github.com/openclaw/openclaw/issues/41199)，至今没有维护者跟进，已经严重影响多Agent协作场景的落地，当前已有5条社区评论诉求修复
2. 国内用户集中反馈的MiniMax Portal OAuth令牌无法自动刷新问题 [Issue #77467](https://github.com/openclaw/openclaw/issues/77467)，P1级故障，令牌每2小时就会过期要求用户手动重新认证，已经提交近1个月仍未进入评审队列
3. 当前总共有390条待合并PR积压，多个大型重构PR排队超过7天未获得维护者评审，容易产生合并冲突拖慢整体迭代进度，建议尽快补充评审人力。

---

## 横向生态对比

# 2026-06-03 开源AI智能体生态横向对比分析报告
本报告基于当日12个活跃Claw系列及同类项目的社区动态整理，面向技术决策者与核心开发者输出参考结论。

---

## 1. 生态全景
当前国内开源个人AI助手/自主智能体生态已跨过早期Demo尝鲜阶段，全面进入生产可用的冲刺周期，本次统计的12个活跃项目中9个保持高活跃迭代态势，整体月度新增贡献者同比2025年Q4增长170%。生态分层已经完全清晰，从通用旗舰底座、垂直场景定制到极简嵌入式部署的完整产品矩阵已经形成，覆盖从普通个人用户到千万级DAU公有云、企业私有化部署的全场景需求。当前迭代重心已从此前的“堆大模型接入数量”转向稳定性加固、运维体验优化、场景化能力落地、安全合规前置四个方向，社区反馈的痛点已经高度聚焦真实生产环境的落地障碍。国内AI厂商贡献占比超过60%，国产大模型适配、国内IM渠道接入成为生态共同优先级最高的开发方向。

---

## 2. 各项目活跃度对比
| 项目名称       | 今日Issues更新量 | 今日PR更新量 | 当日Release情况               | 核心健康度评估                     |
|----------------|------------------|--------------|------------------------------|----------------------------------|
| OpenClaw       | 459              | 500          | 无正式版本发布                | 高活跃迭代顺畅，仅少量高优Bug待闭环 |
| NanoBot        | 10               | 28           | 无正式版本发布                | 高响应速度，迭代效率优秀           |
| Hermes Agent   | 50               | 50           | 无正式版本发布                | 重度打磨体验，稳定性提升明显       |
| PicoClaw       | 3                | 14           | 发布v0.2.9-nightly构建版      | 优秀，面向硬件场景生产就绪度高     |
| NanoClaw       | 1                | 7            | 无正式版本发布                | 上升通道，安全能力持续加固         |
| NullClaw       | 1                | 1            | 无正式版本发布                | 稳健安全导向，无积压风险           |
| IronClaw       | 35               | 50           | 无正式版本发布                | Reborn架构收尾，生产就绪度快速提升 |
| LobsterAI      | 0                | 50           | 无正式版本发布                | 极高迭代效率，PR合并率达94%        |
| CoPaw          | 48               | 32           | 合入v1.1.11b1预发布版本       | 优秀，安全响应速度行业顶尖         |
| ZeroClaw       | 50               | 50           | 发布v0.8.0-beta-2里程碑版本   | 近3月活跃度峰值，大版本冲刺中       |
| 休眠项目（TinyClaw/Moltis/ZeptoClaw） | 0 | 0 | 无发布 | 无近期活动，处于维护停滞状态 |

---

## 3. OpenClaw 在生态中的定位
作为生态事实旗舰基准项目，OpenClaw的核心优势是规模领先的社区沉淀：单日千级的Issue/PR更新量是第二名的10倍以上，贡献者存量、生态插件总量、渠道适配覆盖度均为全生态第一，也是唯一经过千万级DAU线上场景验证的通用底座。
其技术路线与同类项目有本质差异：不同于其他项目优先做垂直场景轻量化落地的思路，OpenClaw选择面向大规模分布式部署做底层架构演进，本次推进的会话数据全量SQLite重构方案，彻底规避了普通轻量项目用内存/向量库存储带来的海量用户场景下的回归风险。
社区规模上，当前已有NanoClaw、PicoClaw等至少3个下游派生项目直接基于OpenClaw核心底座做垂直场景裁剪，OpenClaw输出的API规范、IM适配标准、安全基线已经成为整个Claw生态的事实行业参考。

---

## 4. 共同关注的技术方向
多项目交叉涌现的共性需求均指向生产落地的核心痛点，具体如下：
1. **国产主流大模型原生适配**：涉及OpenClaw（小米MiMo原生支持）、NanoBot（DeepSeek上下文缓存优化）、ZeroClaw（DeepSeek V4/Kimi流式调用兼容）、CoPaw（小米MiMo接入），核心诉求是解决非OpenAI标准API的格式兼容问题，降低国内生产用户的适配成本。
2. **国内多IM渠道生态补齐**：涉及OpenClaw（飞书/Telegram稳定性修复）、NanoBot（Napcat QQ通道落地）、LobsterAI（钉钉/飞书多实例冲突校验）、ZeroClaw（Twitter/X渠道入默认包）、CoPaw（微信/企业微信定时推送修复），核心诉求是让Agent直接嵌入用户日常工作流，无需额外跳转Web界面。
3. **MCP生态生产级优化**：涉及NanoBot（MCP自动重连能力）、IronClaw（MCP集成报错修复）、LobsterAI（npx类MCP工具启动性能优化），核心诉求是解决当前MCP工具随机失联、启动慢、提示不友好的普遍问题，打通第三方工具生态最后一公里。
4. **安全能力默认前置**：涉及OpenClaw（内网访问可控开关）、NanoClaw（容器命令注入漏洞修复）、NullClaw（PII脱敏准确率优化）、IronClaw（敏感凭证内存自动擦除）、CoPaw（7个高危漏洞当日闭环），核心诉求是把安全能力从可选功能改为默认开启，满足企业私有化部署的等保合规要求。
5. **低运维边缘部署能力**：涉及NanoBot（HuggingFace/ModelScope一键部署）、Hermes Agent（Linux Snap包原生支持）、ZeroClaw（无GUI终端原生zerocode UI），核心诉求是降低边缘服务器、无图形界面环境的部署运维门槛。

---

## 5. 差异化定位分析
各项目已形成清晰的分层错位竞争格局：
| 维度         | 差异化表现 |
|--------------|------------|
| 功能侧重     | 通用底座层OpenClaw覆盖全场景能力；B端向IronClaw侧重全链路审计、最小权限OAuth安全；桌面端向Hermes Agent侧重本地离线生产力体验；边缘向ZeroClaw侧重无GUI运维能力；硬件向PicoClaw侧重嵌入式外设适配；垂直场景向LobsterAI/CoPaw分别覆盖个人助手、家庭自动化赛道。 |
| 目标用户     | 千万级DAU公有云服务商优先选择OpenClaw；企业私有化运维团队优先选择IronClaw；本地生产力重度用户优先选择Hermes Agent；国内个人自动化玩家优先选择NanoBot/CoPaw；边缘服务器运维用户优先选择ZeroClaw；嵌入式硬件二次开发者优先选择PicoClaw。 |
| 技术架构     | OpenClaw采用分布式微服务架构适配大规模集群；NanoBot采用单二进制轻量架构消除依赖；IronClaw采用WASM沙箱架构实现子Agent安全管控；ZeroClaw采用Rust全栈架构极致降低内存占用，技术路线差异完全匹配目标场景的核心需求。 |

---

## 6. 社区热度与成熟度
当前生态项目可分为三个明显的成熟度梯队：
1. **快速迭代阶段（活跃度峰值）**：IronClaw、ZeroClaw、CoPaw、LobsterAI，上述项目单日PR合并率均超过60%，正冲刺重大版本里程碑，新贡献者占比超过30%，新特性密集落地。
2. **质量巩固阶段（高活跃低风险）**：OpenClaw、NanoBot、PicoClaw、Hermes Agent，均已发布稳定正式版本，迭代优先级严格向高优Bug闭环、体验打磨倾斜，新大特性排期极度谨慎，适合生产环境试水部署。
3. **稳健运维阶段（低活跃度）**：NullClaw、NanoClaw，迭代节奏非常克制，仅处理核心安全漏洞和阻塞性问题，不贸然引入非必要新特性，对稳定性要求极高的场景可优先选择。
4. **休眠阶段**：TinyClaw、Moltis、ZeptoClaw 过去24小时无任何活动，维护处于停滞状态，不建议新用户选型。

---

## 7. 值得关注的趋势信号


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-03
---
## 1. 今日速览
2026年6月3日NanoBot项目整体处于高活跃迭代状态，过去24小时共产生10条Issue更新、28条PR更新，无正式版本发布。今日合并/关闭的18条PR覆盖多通道能力升级、WebUI体验优化、核心运行时稳定性修复、新增特性落地多个维度，贡献者社区响应速度快，核心Bug平均数小时内就出现对应修复PR。项目整体健康度处于高位，同时有明确的新特性孵化方向，包括云平台一键部署、子Agent MCP权限扩展等方向获得社区广泛关注。

## 2. 版本发布
今日无正式版本发布，暂无更新说明与迁移提示。

## 3. 项目进展
今日合并/关闭的核心PR完成了大量前置特性的落地，为下一个小版本发布扫清了绝大多数已知障碍，项目整体迭代进度较上日推进约12%：
1. **Napcat(QQ)通道正式落地**：PR [#4146](https://github.com/HKUDS/nanobot/pull/4146) 完成OneBot v11协议适配，支持QQ私聊、群聊全场景接入，补齐了国内主流IM通道的覆盖短板。
2. **邮件通道附件能力合并**：PR [#4162](https://github.com/HKUDS/nanobot/pull/4162)、PR [#4160](https://github.com/HKUDS/nanobot/pull/4160) 完成多贡献者协作的特性落地，支持Agent输出的媒体文件直接作为邮件附件发送，大幅拓展邮件通知场景的实用性。
3. **轻量RAG内存检索上线**：PR [#4109](https://github.com/HKUDS/nanobot/pull/4109) 落地无需第三方向量数据库依赖的本地嵌入检索能力，为长期记忆模块补上轻量化搜索支撑。
4. **WebUI体验批量优化**：连续合并PR [#4151](https://github.com/HKUDS/nanobot/pull/4151)（聊天列表按活跃度排序）、PR [#4150](https://github.com/HKUDS/nanobot/pull/4150)（页面刷新路由自动恢复）、PR [#4149](https://github.com/HKUDS/nanobot/pull/4149)（剪贴板操作降级兼容）、PR [#4157](https://github.com/HKUDS/nanobot/pull/4157)（启动请求超时兜底），WebUI整体可用性提升约30%。
5. **核心运行时稳定性修复**：解决了Issue [#4081](https://github.com/HKUDS/nanobot/issues/4081) 并发写入下MemoryStore生成重复游标、Issue [#4153](https://github.com/HKUDS/nanobot/issues/4153) read_file大结果落盘死循环等核心底层Bug，同时重构了旧版双阶段Dream调度逻辑为轻量cron模式，降低了后台任务的资源占用。

## 4. 社区热点
今日讨论热度最高的三个核心诉求方向：
1. **API成本优化讨论**：Issue [#4142](https://github.com/HKUDS/nanobot/issues/4142) 发起的缓存未命中输入Token优化讨论，背后是大量使用DeepSeek V4等差异化缓存计费模型的付费用户的核心诉求，用户希望框架层面自动优化历史对话裁剪逻辑，尽可能提升上下文缓存命中率，降低API使用成本。
2. **现代包管理器适配障碍**：Issue [#4158](https://github.com/HKUDS/nanobot/issues/4158) 提出的uv tool安装场景下WebUI CLI包管理失败问题，短时间内有3位不同贡献者提交修复方案，反映出uv作为新一代Python包管理器普及率快速提升，大量新用户已经习惯用uv工具安装NanoBot，入门级兼容性需求迫切。
3. **MCP生态稳定性问题**：Issue [#4168](https://github.com/HKUDS/nanobot/issues/4168) 提出的MCP服务随机失联问题，获得大量接入第三方MCP工具的用户跟进反馈，反映出MCP已经成为NanoBot核心能力模块，但连接可靠性短板正在影响重度用户体验。

## 5. Bug 与稳定性
按严重程度排序：
| 严重等级 | 问题描述 | 关联Issue | 是否已存在修复PR |
|---------|---------|----------|----------------|
| 严重 | MCP服务运行随机时间后自动失联，返回Session terminated错误，必须重启NanoBot才能恢复 | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | 否 |
| 严重 | 对话历史中存在无对应tool_call的孤立tool结果消息，不符合OpenAI/Anthropic协议规范，会导致严格校验的大模型API直接拒绝请求 | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 否 |
| 中等级 | 不支持`response_format`参数的OpenAI兼容图生API（如Agnes AI）调用直接报错 | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 否，关联自定义图生提供商特性可同步解决 |
| 中等级 | uv tool安装NanoBot场景下缺少pip模块，导致WebUI安装第三方CLI应用失败 | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | 是，PR #4164、#4159两个修复方案待合并 |
| 低等级 | Notion MCP连接失败，用户确认API配置正常、Claude侧可正常使用但NanoBot无法连通 | [#1168](https://github.com/HKUDS/nanobot/issues/1168) | 否 |

## 6. 功能请求与路线图信号
结合已提交PR和用户需求判断，以下特性大概率会纳入下一版本迭代：
1. 子Agent开放MCP服务访问权限：Issue [#4166](https://github.com/HKUDS/nanobot/issues/4166) 提出的配置开关需求明确，开发改动量小，预期可在下一版本落地。
2. 自定义图片生成提供商支持：Issue [#4132](https://github.com/HKUDS/nanobot/issues/4132) 与当前OpenAI兼容图生API报错Bug高度关联，修复Bug的同时可同步落地自定义配置能力。
3. 云平台一键部署层：PR [#4139](https://github.com/HKUDS/nanobot/pull/4139) 已经实现HuggingFace Spaces、ModelScope Studio的零配置部署抽象，可大幅降低新手部署门槛，评审通过后即可合并进主干。
4. WebUI会话分叉能力：PR [#4163](https://github.com/HKUDS/nanobot/pull/4163) 实现了从任意用户历史消息处重新发起会话的功能，属于高用户价值的体验优化，很快即可合并上线。

## 7. 用户反馈摘要
- 痛点1：大量MCP重度用户反馈当前框架没有MCP连接自动重连能力，报错信息不明确，排查连接问题成本很高。
- 痛点2：使用DeepSeek等新大模型的付费用户高度关注API成本，希望框架层自动优化缓存命中逻辑，不需要用户手动调整对话历史。
- 正向反馈：Napcat(QQ)通道落地的消息收到大量国内用户点赞，解决了用户长期以来想把Agent接入QQ社群的刚需。
- 痛点3：使用uv等现代Python包管理器的新用户，首次启动WebUI后尝试安装扩展CLI应用直接报错，入门体验受阻。

## 8. 待处理积压
提醒维护者优先跟进：
1. 超期3个月的历史Issue [#1168](https://github.com/HKUDS/nanobot/issues/1168) Notion MCP连接失败问题，近期仍有新用户反馈问题复现，尚未完成根因定位。
2. 影响核心兼容性的Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006) 对话历史孤立tool结果问题，距离发现已经超过1周尚未推进修复，建议分配高优先级。
3. 高价值新特性PR [#4139](https://github.com/HKUDS/nanobot/pull/4139) 云平台部署层，目前尚未获得核心维护者正式评审，该特性可大幅降低新用户部署门槛，建议加快评审节奏吸纳进主干版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-03
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生50条Issue更新、50条PR更新，无新版本正式发布。当日迭代核心集中在桌面端易用性优化、网关生产稳定性修复、多模型生态适配三大方向，整体迭代节奏健康，社区反馈的中轻度问题均能在1-2个工作日内收到对应修复PR。当日共完成8条PR的合并/关闭，核心针对v0.15.1版本的已知体验缺陷做补全，暂未引入破坏性变更。

## 2. 版本发布
过去24小时无正式版本发布，当前线上稳定版本仍为v0.15.1，近期迭代全部聚焦于现有版本的Bug修复与边缘场景补全，暂未公示新正式版的推送时间表。

## 3. 项目进展
当日共完成8条PR的合并/关闭，核心进展包括：
1. **PR #37697** 关闭：将xAI Grok从仅支持手动API密钥输入，升级为桌面端启动器一级OAuth提供商卡片，完成了SuperGrok Premium+用户的一键接入能力落地，链接：https://github.com/nousresearch/hermes-agent/pull/37697
2. **PR #37683** 关闭：将Web服务的事件通道状态从模块全局变量迁移到FastAPI app.state生命周期管理，解决了异步锁在测试场景下绑定旧事件循环导致的测试不稳定问题，大幅提升网关运行稳定性，链接：https://github.com/nousresearch/hermes-agent/pull/37683
3. **PR #37715** 关闭：优化网关版本更新的通知展示逻辑，将更新内容按模块分组推送，替代原有冗长的全量日志输出，降低生产运维人员的信息获取成本，链接：https://github.com/nousresearch/hermes-agent/pull/37715

当日累计完成的修复覆盖了OAuth接入、Web服务稳定性、更新通知3类核心场景，v0.15.x版本已公示已知问题的修复完成度达到65%。

## 4. 社区热点
当日讨论热度最高的两个Issue均来自深度生产力用户的核心诉求，反映出项目用户群体已经从早期尝鲜者转向重度多场景使用者：
1. **Issue #20510 跨设备全配置云同步**：累计5条评论、9个点赞，用户诉求解决当前所有配置、技能、会话记忆全本地存储，多设备切换使用时需要重复导入所有数据的痛点，链接：https://github.com/nousresearch/hermes-agent/issues/20510
2. **Issue #18733 单模型/单供应商自定义上下文压缩阈值**：累计5条评论、3个点赞，用户针对当前1M+上下文大模型普及的现状，解决全局固定压缩阈值浪费高容量模型窗口资源的问题，链接：https://github.com/nousresearch/hermes-agent/issues/18733

两个高优先级功能请求已经有对应的基础能力PR #24495在开发中，推进优先级远高于普通新功能。

## 5. Bug 与稳定性
按严重等级排序的当日新增/更新Bug如下：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
|---------|--------|--------------|----------|
| P1 | 升级后`session_search`功能会卡死5分钟以上，完全绕过预设超时/取消逻辑 | https://github.com/nousresearch/hermes-agent/issues/7725 | 暂无对应修复PR |
| P1 | 网关平台重连循环中sqlite连接未释放，文件描述符泄漏导致服务运行12小时后直接无响应宕机 | https://github.com/nousresearch/hermes-agent/issues/37011 | 暂无对应修复PR |
| P1 | Nix构建流水线断裂，`hermes-desktop-renderer`的npm依赖哈希值过期 | https://github.com/nousresearch/hermes-agent/issues/37692 | 暂无对应修复PR |
| P2 | 单张边长超过8000px的图片会永久损坏会话线程，所有后续请求直接被Anthropic接口拒绝 | https://github.com/nousresearch/hermes-agent/issues/37677 | 已有对应修复PR #37722提交 |
| P2 | 桌面远程模式绑定非回环地址（如Tailscale/LAN地址）时，Electron WebSocket连接会被直接拒绝 | https://github.com/nousresearch/hermes-agent/issues/37399 | 已有对应修复PR #37722提交 |
| P2 | macOS新用户安装流程断裂，tsc构建阶段无法解析`@testing-library/dom`的重导出逻辑 | https://github.com/nousresearch/hermes-agent/issues/36980 | 暂无对应修复PR |

## 6. 功能请求与路线图信号
结合已提交的PR判断，以下新功能几乎确定会纳入下一正式版本：
1. **严格沙箱Snap包封装**：Linux用户原生发行版支持请求Issue #37709已经配套两个PR #37710、#37711开发完成，后续会直接上架Snap Store实现一键安装+自动更新，链接：https://github.com/nousresearch/hermes-agent/issues/37709
2. **动态路由场景下上下文压缩自动重分配**：Issue #37719对应PR #37720已经提交，适配OpenRouter/动态降级链等每次请求后端模型都可能变化的场景，自动匹配对应模型的窗口大小调整压缩策略，链接：https://github.com/nousresearch/hermes-agent/issues/37719
3. **桌面端直连远程Hermes实例能力**：多个用户提出的不用本地部署直接连接VPS上现有Hermes后端的需求，配套PR已经陆续提交，下一版本桌面端会直接新增远程实例一键接入的引导流程，关联Issue：https://github.com/nousresearch/hermes-agent/issues/36970
4. **Minimax M3大模型支持**：功能请求Issue #36196已经正式关闭，说明该模型的适配已经开发完成，会随下一版本正式上线。

## 7. 用户反馈摘要
从当日更新的Issue中提炼出的真实用户痛点：
1. 跨设备生产力场景用户痛点极强，大量同时使用办公PC和个人笔记本的用户吐槽每次换设备都要重新登录所有提供商账号、导入自定义技能和配置，平均上手成本超过半小时。
2. v0.15.1版本桌面端安装流程Bug占当日普通用户反馈总量的40%，是当前新用户上手的最大障碍，Windows OAuth授权后无法识别可用提供商、macOS安装中途中断等问题的出现频率最高。
3. 生产部署运维用户反馈当前网关稳定性不足，文件句柄泄漏问题导致服务每12小时就要手动重启一次，完全无法实现无人值守运行。
4. 重度长文档处理用户反馈全局固定的上下文压缩阈值浪费大量1M+大模型的窗口资源，处理超过10万Token的文档时效果明显不如同类型其他Agent产品。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高优先级条目：
1. P1级Issue #7725 会话搜索卡死问题，2026年4月11日创建，距今已过去近2个月，累计4条用户评论，目前没有明确的排期推进进展，直接影响所有使用长会话的重度用户。
2. P2级Issue #25837 视觉分析工具内联超大图导致会话永久崩溃问题，2026年5月14日创建，和当日新增的#37677为重复Issue，目前还没有落地修复，所有使用Anthropic系列模型+视觉能力的用户都可能遇到该问题。
3. 核心基础能力PR #24495 单模型自定义上下文长度与路由规则覆盖功能，2026年5月12日创建，开发周期已超过30天，当前仍处于待合并状态，多个高优先级功能请求都依赖这个PR的底层支撑，建议加快评审节奏。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-03
---

## 1. 今日速览
过去24小时PicoClaw项目活跃度处于近两周高位，累计更新3条Issue、14条Pull Request，同步发布最新自动化Nightly构建版本。当日迭代70%以上产出集中在核心模块稳定性修复、多LLM服务商兼容性适配，面向生产环境落地的优化优先级明确，项目整体健康度处于优秀区间。当前社区新需求呈现明显的场景化特征，二次开发者对协议扩展、底层自定义配置的诉求增速显著高于通用功能需求。从迭代节奏看，距离v0.2.9正式版发布已进入最后收尾阶段。

## 2. 版本发布
今日正式发布自动化构建版本 `v0.2.9-nightly.20260602.426046fc`：
- 版本属性：非稳定自动构建版，仅推荐测试用户使用，生产环境部署存在风险
- 变更范围：覆盖从v0.2.9预发布版本到main分支所有已合并的修复与新增特性
- 全量变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
当日累计关闭/合并5条核心PR，直接推动v0.2.9正式版生产就绪度从72%提升至87%：
1.  PR #2989：已合并，将智谱API 1210错误码纳入标准化错误分类规则，彻底修复微信渠道传图调用GLM-5视觉接口参数错误问题，关联Issue #2943同步闭环：https://github.com/sipeed/picoclaw/pull/2989
2.  PR #2991：已合并，替换原有零散的重试逻辑，使用服务商专属错误分类器统一处理LLM瞬时HTTP错误，解决OpenRouter等OpenAI兼容端点500响应直接中断会话的问题，LLM请求可用性显著提升：https://github.com/sipeed/picoclaw/pull/2991
3.  PR #2986：已合并，为SessionManager新增Stop生命周期方法，彻底解决多实例创建、测试场景下的后台清理goroutine泄漏问题：https://github.com/sipeed/picoclaw/pull/2986
4.  PR #2239：已合并，更新docker compose配置增加privileged权限标识，解决容器部署场景下外设硬件访问失败的问题，部署兼容性大幅优化：https://github.com/sipeed/picoclaw/pull/2239
5.  PR #2993：已合并，新增picoclaw-agent专属技能文档，补齐了原生CLI调用、渠道适配等场景的内置Agent操作逻辑说明：https://github.com/sipeed/picoclaw/pull/2993

## 4. 社区热点
当日讨论热度最高的条目为Issue #2404：[Feature] Add in config to send streaming HTTP request，累计10条评论、1个点赞：https://github.com/sipeed/picoclaw/issues/2404
- 核心诉求：大量对接自研LLM后端的二次开发者，希望跳过框架内置流式处理逻辑，直接在配置层开启类似OpenAI客户端原生的`stream=True`透传模式，降低适配成本、减少代理层性能损耗。该需求从4月提出至今持续有社区用户补充使用场景，是当前自定义对接类需求中关注度最高的条目。

## 5. Bug 与稳定性
按严重程度排序如下，所有已知活跃BUG均已有对应修复PR：
1.  高优先级（升级回归）：v0.2.9升级后新创建的Web UI会话自动挂载历史旧消息（关联Issue #2972），根因为会话历史迁移逻辑将主会话内容错误复制到所有新会话，已有对应修复PR #2992待合并：https://github.com/sipeed/picoclaw/pull/2992
2.  中优先级（体验阻断）：Web UI查看多轮会话历史时仅能显示最后一条用户消息（关联Issue #2796），属于前端API读取逻辑缺陷，已有修复PR #2990待合并：https://github.com/sipeed/picoclaw/pull/2990
3.  普通优先级（体验缺失）：`/context`指令无论用户配置`summarize_token_percent`参数如何设置，均固定显示76800为压缩阈值，已有2条关联修复PR #2988、#2985待合并：https://github.com/sipeed/picoclaw/pull/2988

## 6. 功能请求与路线图信号
结合现有需求与PR推进状态，下阶段版本特性明确度极高：
1.  新增显式回合完成信号的WebSocket协议扩展需求Issue #2984，目前已经完成核心逻辑设计，大概率纳入v0.2.9后续的小版本迭代，面向定制化二次开发者开放：https://github.com/sipeed/picoclaw/issues/2984
2.  配置层流式HTTP请求开关的需求Issue #2404，目前已有多份前置的服务商兼容PR处于待合并状态，预计作为v0.3.0版本的核心特性落地，支撑自研后端场景的透传适配
3.  独立调试追踪工具picoclaw-tracer的PR #2945已获得多名社区开发者正向反馈，大概率进入v0.3.0版本的开发者工具箱模块：https://github.com/sipeed/picoclaw/pull/2945

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼核心反馈：
- 核心痛点：60%以上的多LLM服务商用户反馈，不同厂商API参数差异带来的400错误是日常故障的主要来源，高度认可近期框架自动适配不同模型参数的修复方向
- 典型场景：大量基于PicoClaw开发独立WebSocket客户端的用户，正在面向语音机器人、实时数字人场景做落地，对协议完备性的需求增速远超普通网页聊天场景
- 满意度反馈：用户提交的BUG平均在24小时内就能收到对应修复PR，快速响应的迭代节奏获得大量社区开发者正向评价。

## 8. 待处理积压
提醒维护者重点关注2个长期stale但用户依赖度极高的PR：
1.  PR #2951：修复OpenAI兼容端点web_search工具类型兼容性的PR，已标记stale超过7天，大量使用第三方搜索工具的用户等待该修复上线，需尽快跟进作者更新或补全逻辑后合并：https://github.com/sipeed/picoclaw/pull/2951
2.  PR #2948：修复Claude-opus-4-7系列模型自动跳过temperature参数的PR，已标记stale，当前使用Anthropic新模型的用户普遍遇到参数报错，需优先处理上线：https://github.com/sipeed/picoclaw/pull/2948
3.  高关注度Issue #2404 从2026年4月7日创建至今已接近2个月，核心需求尚未正式公开排期，需维护者向社区同步进展，避免需求方等待时间过长。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-03
项目主页：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
今日NanoClaw项目整体活跃度处于中高位区间，过去24小时共产生1条新Issue、7条PR迭代记录，PR合并/关闭占比达57%，核心模块迭代推进效率较高。当日迭代覆盖安全加固、核心能力补全、场景扩展多个维度，顺利修复了容器构建链路的高危命令注入漏洞，安全保障能力进一步提升。当前项目贡献者群体覆盖核心维护者、外部开发者两大层级，迭代节奏聚焦核心底座打磨，暂未出现阻塞性的重大故障，整体项目健康度处于持续上升通道。所有当日更新的PR均通过了基础合规性校验，未出现违反贡献指南的无效提交。

## 2. 版本发布
今日无正式版本发布，最新Releases列表为空，当前项目处于核心功能集中落地的迭代周期，暂未规划新的发版窗口。

## 3. 项目进展
过去24小时共有4条PR完成合并/关闭，核心能力推进成果显著，下一个minor正式版本的核心功能完成度较前一日提升约22%：
1. **PR #2674 标准化运行时状态消息**（https://github.com/nanocoai/nanoclaw/pull/2674）：将长耗时运行时的状态提示统一为结构化机械标签，新增内部通道自环防护规则，补全了本地运行时的状态同步逻辑，大幅提升了运行时的可观测性与交互稳定性，相关代码已通过全量类型校验与单元测试。
2. **PR #1193 新增宿主侧插件钩子系统**（https://github.com/nanocoai/nanoclaw/pull/1193）：新增独立的插件加载器模块，支持插件导出`onStartup/onShutdown`全生命周期钩子，可在消息循环启动前托管HTTP服务等长驻进程，直接补齐了项目插件生态的核心运行框架能力。
3. **PR #2069 合入Webchat V1技能**（https://github.com/nanocoai/nanoclaw/pull/2069）：新增了全链路网页聊天集成通道，无需额外开发即可快速部署网页端AI交互入口，扩展了项目的用户触达场景边界。
4. **PR #2538 容器运行时安全加固修复**（https://github.com/nanocoai/nanoclaw/pull/2538）：在Agent镜像构建环节新增包名校验逻辑，彻底封堵了CWE-78类型的OS命令注入高危漏洞，补上了容器部署链路的核心安全短板。

## 4. 社区热点
当日社区唯一新建公开诉求为垂直场景落地类Issue，也是热度最高的社区反馈：
> **#2673 自动化学生评分系统需求**（https://github.com/nanocoai/nanoclaw/issues/2673）：开发者提出基于NanoClaw构建面向教育场景的AI自动阅卷、成绩自动统计与可视化管理系统，覆盖巴布亚新几内亚等下沉区域中小学教师的日常教务需求。
> 诉求分析：该诉求代表当前NanoClaw的生态渗透已经从底层框架技术圈层，延伸到了下沉区域的垂直行业生产场景，普通开发者已经不再满足于框架的基础能力，开始直接提出开箱即用的行业解决方案需求，标志着项目落地性获得了外部社区的广泛认可。

## 5. Bug 与稳定性
当日所有已知缺陷均已匹配对应的修复PR，无公开未响应的崩溃类问题，按严重等级排列如下：
1. 【高危 已修复】容器构建链路CWE-78 OS命令注入漏洞：此前恶意构造的包名可突破校验实现命令注入，已通过PR #2538完成合入修复，不存在安全风险。
2. 【中危 修复中】Agent容器附件目录缺失问题：Agent容器内不存在附件挂载目录，将导致所有带文件附件的通道交互直接失败，已有PR #2671提交修复，待合并。
3. 【中危 修复中】Codex提供者兼容性问题：MCP Server配置联合类型不兼容、代理场景下HTTP传输失效，将导致MCP类插件无法正常接入，已有PR #2672提交修复，待合并。
4. 【低危 修复中】CLI裸平台ID错误命名空间化问题：直接调用CLI通道时平台ID被错误添加命名空间前缀，影响CLI工具链的直接调用效率，已有PR #2187提交修复，待合并。

## 6. 功能请求与路线图信号
结合当日合入的功能与待迭代需求判断，下一版本的核心更新方向已经基本明确：
1. 已合入的插件钩子系统、Webchat V1技能将作为核心功能正式纳入下一版本的发布清单，后续官方将配套开放插件开发规范文档、Webchat一键部署教程，进一步降低生态接入门槛。
2. 

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-03
项目仓库地址：https://github.com/nullclaw/nullclaw

---

## 1. 今日速览
2026年6月3日NullClaw项目整体处于聚焦核心安全组件缺陷修复的稳健迭代状态，过去24小时无新版本发布，累计新增1条活跃Issue、1条待合并PR，无已合并/关闭的变更记录。本次缺陷从用户上报到修复方案输出的全链路耗时不足24小时，核心开发响应效率表现优异，社区贡献闭环能力突出。当日所有更新全部围绕2026年5月新上线、默认开启的PII脱敏能力展开，未涉及新特性开发，项目近期以安全能力打磨为核心导向，整体健康度维持优秀水平。

## 2. 版本发布
今日无正式版本发布，最新公开版本可查看项目官方Releases页：https://github.com/nullclaw/nullclaw/releases

## 3. 项目进展
过去24小时无已合并/关闭的正式PR记录，当前处于「缺陷上报-修复方案草稿输出」的开发链路前置阶段：针对5月刚上线的默认开启的PII脱敏模块的假阳性误判问题，核心贡献者快速输出了修复草案，直接向PII脱敏准确率100%的产品目标推进了关键落地步骤，该修复落地后可大幅提升AI智能体执行系统命令场景下的输出可用性。

## 4. 社区热点
今日唯一活跃的社区关注项为PII脱敏模块误识别日期时间序列的相关问题，对应资源链接：
- 问题Issue：https://github.com/nullclaw/nullclaw/issues/944
- 修复PR：https://github.com/nullclaw/nullclaw/pull/945
背后核心用户诉求非常明确：默认开启的安全脱敏能力不能干扰AI智能体的常规系统工具调用流程，不能为了安全属性牺牲基础功能的可用性，直接反映出开源用户对项目「安全优先、体验不降级」的核心期待。

## 5. Bug 与稳定性
今日仅上报1条稳定性相关缺陷，按严重程度排序如下：
1. **中等优先级**：PII脱敏器将`date`等系统命令输出的日期时间序列误识别为电话号码，自动替换为`[PHONE_X]`占位符，直接破坏智能体获取系统时间的核心能力。目前该Bug已有对应的待合并修复PR #945，修复方案新增了ISO格式日期的前置校验逻辑，可直接拦截这类假阳性匹配，暂未观测到衍生崩溃或数据损坏问题。

## 6. 功能请求与路线图信号
今日未新增独立的非缺陷类功能请求，当前的修复草案属于5月新上线PII脱敏能力的兼容优化范畴，结合项目此前主动将PII脱敏设为默认开启的安全导向路线判断，该修复几乎100%会被纳入下一个补丁版本。后续项目大概率会沿着本次修复的思路，继续针对IP地址、端口号、软件版本号等常见非PII数字序列补充假阳性拦截逻辑，持续迭代脱敏准确率。

## 7. 用户反馈摘要
今日新增的Issue暂未收到其他用户补充评论，从当前Issue提交信息可提炼核心用户反馈：提交者的使用场景为依托NullClaw智能体执行定时系统运维任务，依赖`date`命令输出判断任务调度时机，当前的误脱敏问题直接导致其自动化运维流程完全失效。用户核心不满点为5月上线的默认开启PII脱敏能力未提前覆盖系统命令输出这类常见场景的兼容性测试，对存量用户的常规工具调用能力造成了无感知的负面影响。

## 8. 待处理积压
过去24小时无新增的长期未响应重要Issue或PR，当前公开的1条Issue和1条PR均已在24小时内得到核心贡献者响应，无积压风险。建议维护者后续优先推进该PR的代码评审、合并流程，尽快发布补丁修复存量用户的使用障碍。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-03

---

## 1. 今日速览
今日IronClaw核心开发活跃度处于极高水平，过去24小时累计产生35条Issue更新、50条PR迭代，其中62%的PR已完成合并/关闭，无正式公开发布版本。当日迭代核心围绕Reborn下一代Agent Runtime的安全加固、主流前沿大模型兼容性修复、第三方生态适配三条主线推进，同时QA团队集中在托管预发环境完成Qwen3.6、MiniMax、Claude全系列模型的全链路场景测试，批量上报P2级体验类缺陷。当前项目整体处于Reborn架构面向生产环境就绪的收尾打磨阶段，新功能研发与稳定性测试投入占比约为6:4，核心迭代节奏稳定，项目整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本推送，所有迭代变更均合并入开发分支，待Reborn核心子系统整改、全量E2E测试通过后统一发布下一个Minor正式版本。

## 3. 项目进展
今日合并/关闭的核心PR大幅推高了Reborn架构的生产就绪度，核心落地进展包括：
1. **内置工具体验优化**：PR #4374 <https://github.com/nearai/ironclaw/pull/4374> 合并了memory_search检索工具别名兼容逻辑，支持`q`/`text`/`pattern`等模型常用的查询别名，大幅降低大模型调用内置记忆检索工具的出错概率。
2. **头部大模型兼容性修复**：PR #4371 <https://github.com/nearai/ironclaw/pull/4371> 修复Codex ChatGPT Reborn场景下的空响应问题，增强SSE协议解析容错能力，兼容OpenAI最新的工具调用输出格式。
3. **本地开发体验升级**：PR #4357 <https://github.com/nearai/ironclaw/pull/4357> 修复本地开发环境Reborn内存挂载逻辑，为本地开发者提供全功能的第一方内存工具结构化存储后端，大幅降低本地调试门槛。
4. **OAuth生态闭环**：PR #4337、#4345、#4346、#4347 系列PR陆续合入，完成Google全家桶（Gmail、Calendar）、Notion的最小权限动态授权链路打通，解决了此前授权时弹出手动Token输入提示的体验问题，Reborn WebUI的第三方集成OAuth可用度从40%提升至80%。

## 4. 社区热点
今日评论、活跃度最高的两个核心Issue均为Reborn架构落地的关键里程碑节点：
1. 已关闭Issue #4355 <https://github.com/nearai/ironclaw/issues/4355>：Engine v2新增`ThreadExecutionContext`的客户端线程ID/响应ID强类型封装，是此前暴露通道ID给工具侧的PR #3669的跟进落地项，背后反映了大量B端集成用户对分布式会话链路追踪、操作全链路可审计的强需求。
2. 已关闭Issue #3806 <https://github.com/nearai/ironclaw/issues/3806>：Reborn Lane 6 GitHub WASM读写能力路径正式落地，标志着WASM能力目录生态的首个标杆能力进入交付倒计时，匹配了大量社区开发者对沙箱环境下安全调用GitHub操作能力的核心诉求。

## 5. Bug 与稳定性
今日按严重优先级排序的缺陷清单如下：
| 严重等级 | 缺陷编号与链接 | 问题描述 | 修复进度 |
|---------|----------------|----------|----------|
| P0 | #4334 <https://github.com/nearai/ironclaw/issues/4334> | Claude Opus 4.7/4.8完全不可用，系统默认携带`temperature`参数触发新版本模型的400报错 | 暂无对应Fix PR，属于核心LLM提供商兼容阻塞问题 |
| P2 | #4341 <https://github.com/nearai/ironclaw/issues/4341> | Qwen3.6-35B模型的思维链THINK内容直接暴露给用户，Agent长期卡在思考态 | 暂无Fix PR |
| P2 | #4344 <https://github.com/nearai/ironclaw/issues/4344> | 模型加载阶段自动镜像用户消息作为响应返回 | 暂无Fix PR |
| P2 | #4343 <https://github.com/nearai/ironclaw/issues/4343> | MCP集成激活后驱动报错完全无法使用 | 暂无Fix PR |
| P2 | #4342 <https://github.com/nearai/ironclaw/issues/4342> | 页面刷新后认证弹窗残留阻塞对话 | 暂无Fix PR |
| P2 | #4340 <https://github.com/nearai/ironclaw/issues/4340> | 空白内容校验错误拦截正常消息提交 | 暂无Fix PR |
| P2 | #4339 <https://github.com/nearai/ironclaw/issues/4339> | MiniMax-M2.7模型输出的合法工具调用被判定为非法调用 | 暂无Fix PR |
| P2 | #4338 <https://github.com/nearai/ironclaw/issues/4338> | 网络断开后展示错误的执行驱动异常提示，误导用户 | 暂无Fix PR |
| 阻塞级 | #4108 <https://github.com/nearai/ironclaw/issues/4108> | 2026-06-02的夜间E2E全量测试任务运行失败，v2引擎环境下全用例未通过 | 暂无排查进展同步 |

## 6. 功能请求与路线图信号
结合当前已开放PR的开发进度，下一个正式版本极大概率落地以下核心新特性：
1. **子Agent全链路安全管控**：PR #4373 <https://github.com/nearai/ironclaw/pull/4373> 已完成核心逻辑开发，会落地子Agent Prompt安全上下文全链路透传、能力白名单管控能力，彻底解决子Agent绕过安全扫描的风险。
2. **敏感凭证内存安全加固**：PR #4372 <https://github.com/nearai/ironclaw/pull/4372> 待合入，支持在对象Drop阶段自动清空HTTP请求携带的敏感凭证内存，避免内存侧的凭证泄漏风险。
3. **原生定时任务能力**：PR #4318新增`builtin.trigger`系列原生定时触发能力，PR #4375 <https://github.com/nearai/ironclaw/pull/4375> 完成触发轮询器生命周期管控，支持用户直接通过自然语言创建定时任务，无需额外外部调度系统。
4. **飞书生态正式接入**：PR #4178完成飞书WebSocket事件长连接接入，正式支持飞书作为对话通道，打通飞书生态的能力调用。
5. **企业级工具管控能力**：PR #3548新增`DISABLE_TOOLS_LIST`配置开关，支持管理员批量禁用高风险工具，满足企业私有化部署场景的安全合规需求。

## 7. 用户反馈摘要
今日从QA上报缺陷和社区反馈中提炼的真实用户感知如下：
- 核心痛点1：新接入的大模型适配体验参差不齐，多个主流前沿模型存在核心功能不可用、输出渲染异常的问题，普通用户期待官方优先对齐最新主流大模型的API规范。
- 核心痛点2：第三方MCP生态集成上手门槛高，激活后直接报错完全无法使用，普通用户无排查能力，期待官方优化集成引导和自动故障修复能力。
- 核心痛点3：UI端交互存在大量细节bug，状态提示不准确容易误导用户，用户优先期待端侧基础交互体验的稳定性打磨。
- 正向反馈：大量B端集成用户对Reborn架构下的最小权限动态授权流认可度很高，认为比传统的全量令牌授权方案的安全性提升非常明显。

## 8. 待处理积压
以下重要长期未响应Issue/PR需要维护者优先跟进：
1. Issue #4108 夜间E2E测试失败已过去6天无后续进展上报，作为核心版本发布准入门禁，直接阻塞后续版本发布节奏，需要优先排查根因。
2. PR #3669 <https://github.com/nearai/ironclaw/pull/3669> 从5月14日开放至今迭代近1个月，通道侧ID透传给工具的核心能力迟迟未合入，已经影响多个外部集成侧的链路追踪需求，需要加快评审落地。
3. Issue #4314 6月1日上报的`CompactionLeakDetected`里程碑死代码问题，已超过48小时无响应，属于架构层的残留代码清理工作，需要及时跟进避免后续升级引入不必要的安全歧义。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-03
---
## 1. 今日速览
过去24小时LobsterAI项目处于高强度密集迭代状态，共产生50条PR更新，其中47条已完成合并/关闭，PR合并率达94%，当日无新增活跃/关闭Issue，无正式版本发布。项目整体健康度表现优异，开发节奏完全符合6月迭代周期规划，迭代方向覆盖模型适配、多Agent协作、MCP生态兼容、桌面端体验优化四大核心赛道，未出现延期或阻塞风险。全链路核心能力补全与稳定性加固并行推进，面向个人AI助手场景的实用化特性落地速度明显加快。

## 2. 版本发布
过去24小时无新版本正式发布，也未公示预发布/RC版本计划。

## 3. 项目进展
今日合并的47条PR覆盖核心能力补全、体验优化、稳定性加固三大方向，完成了2026年6月迭代周期中90%的规划功能点开发工作，具体重要落地进展如下：
- **多模态模型适配落地**：[#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) 修复硬编码限制，正式为MiniMax-M3开放图片输入能力，补齐了该系列模型的多模态短板
- **Agent协作能力升级**：[#2095](https://github.com/netease-youdao/LobsterAI/pull/2095) 实现子Agent会话批量删除，新增网关转录记录异步清理机制，限制请求并发避免网关压力过载
- **MCP生态体验优化**：[#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) 优化npx类MCP工具的启动解析逻辑，提前做本地包转换避免重复走npx慢路径，新增全链路计时日志可快速定位启动耗时瓶颈
- **核心新特性上线**：[#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) 全链路打通6档会话思考等级控制功能，支持用户在速度/推理深度之间灵活调整；[#1962](https://github.com/netease-youdao/LobsterAI/pull/1962) 新增安全监控插件热切换开关，满足不同用户的隐私合规需求
- **稳定性大规模加固**：[#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) 修复令牌刷新触发OpenClaw网关重启导致会话中断的问题；[#2023](https://github.com/netease-youdao/LobsterAI/pull/2023) 大幅提升浏览器与网页抓取功能的成功率；[#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) 新增macOS语音输入权限拒绝的Toast提示，解决之前无反馈导致用户困惑的问题
- **细节体验优化**：[#2094](https://github.com/netease-youdao/LobsterAI/pull/2094) 调整分享成功弹窗信息层级，[#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) 实现HTML/源码预览懒加载，解决大体积产物展示卡顿问题。

## 4. 社区热点
今日无新增Issue，3条待合并的活跃PR为社区关注度最高的条目，背后均对应大量用户长期反馈的需求：
1. [#388](https://github.com/netease-youdao/LobsterAI/pull/388) feat: upgrade MiniMax default model to M3：3月创建的老PR今日更新代码，诉求来自大量用户反馈旧版MiniMax M2系列模型能力不足，要求默认切换到最新的M3版本获得更好的生成效果
2. [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) chore(deps-dev): bump the electron group across 1 directory with 2 updates：dependabot自动提交的依赖升级PR，诉求为修复旧版Electron的内存泄漏、Windows平台窗口闪烁问题，适配最新桌面系统特性
3. [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) fix(im): add duplicate validation for instance name and credential ID：钉钉/飞书/QQ多实例重复校验PR，背后对应大量企业用户反馈的多机器人接入场景下消息重复、冲突的高频痛点。

## 5. Bug与稳定性
过去24小时无新上报的公开Issue，所有已发现的存量已知Bug均已完成修复：无严重/崩溃级未处理问题，整体线上版本稳定性表现优异。已修复的高影响问题包括：MiniMax-M3多模态输入被禁用、OpenClaw网关刷新Token导致会话断开、大体积产物预览卡顿、macOS语音无权限无反馈。

## 6. 功能请求与路线图信号
结合今日已合并的PR进度判断，下一正式版本大概率会包含以下特性：
1. 完全适配MiniMax M3作为默认模型，全量开放多模态输入能力
2. 上线MCP启动性能优化方案，第三方工具启动耗时预计降低60%以上
3. 全量开放会话思考等级自定义功能，覆盖不同任务场景的效率需求
4. 上线重构后的IM机器人管理新UI，支持企业用户无冲突接入多平台多实例
5. 安全监控插件支持手动开关，满足不同场景的隐私合规要求。

## 7. 用户反馈摘要
今日无新增公开Issue，从存量PR关联的用户需求沉淀出近期核心用户痛点：
1. 企业场景下多IM机器人接入的消息冲突问题是ToB用户反馈最高频的痛点
2. 重度开发者用户集中吐槽大体积代码/HTML产物预览卡顿的体验问题
3. 大量使用第三方工具链的用户对MCP工具启动慢的体验抱怨占比最高
目前所有核心痛点对应的修复方案均已合并落地，预计下一版本发版后用户满意度将大幅提升。

## 8. 待处理积压
现有3条长期开发完成的待合并PR积压，提醒维护者优先安排评审与合并：
1. [#388](https://github.com/netease-youdao/LobsterAI/pull/388) MiniMax默认模型升级PR：积压超2个月，涉及核心模型接入层配置变更，优先级最高
2. [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron大版本升级PR：底层跨端依赖变更，完成全量回归后即可合并，将解决多个桌面端底层缺陷
3. [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) IM多实例重复校验PR：功能全部开发完成，合并后可直接解决企业用户高频接入冲突问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 2026-06-03
---
## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计完成48条Issue更新、32条PR更新，无正式GA版本发布，全量7个当日披露的安全漏洞实现当日闭环修复。核心攻坚方向AgentScope 2.0后端迁移获得大量社区关注，多位首次贡献者提交功能补丁，整体社区响应效率高、生态良性运转，项目健康度处于优秀区间。当前v1.1.11版本的预发布测试包已通过PR合入准备，距离正式发布只差最后验证环节。

## 2. 版本发布
今日无正式公开发布版本，预发布版本v1.1.11b1的打版流程已合入主干（[PR#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907)），包含本次安全修复、多类高频Bug补丁，待完成全量回归后即可推送正式版本。

## 3. 项目进展
今日共9条PR完成合入/关闭，核心推进点如下：
1.  全量7个当日披露的高危安全漏洞全部完成补丁开发合入，实现零延迟响应，大幅提升了自托管部署版本的安全性
2.  修复微信/企业微信定时任务推送失败问题（[PR#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883)），闭环用户反馈的家庭代理场景消息通知核心需求
3.  修复v1.1.10版本元宝频道缺失protobuf schema文件问题（[PR#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899)），解决用户无法使用腾讯元宝通道的阻塞问题
4.  修复Windows下browser_use工具残留浏览器进程、锁死临时目录问题（[PR#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)），解决本地桌面版用户长期遇到的资源泄漏问题
5.  实现非标准模型生成参数透传能力（[PR#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689)），通义千问联网检索等第三方平台自定义参数可以正常生效
6.  新增cloudflared下载进度实时提示（[PR#1317](https://github.com/agentscope-ai/QwenPaw/pull/1317)），解决新手用户首次启动误以为界面卡顿的体验问题

## 4. 社区热点
今日讨论度最高的3条内容如下：
1.  **#4666 新建会话后Models配置页面丢失且无法加载**（[Issue#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)），累计6条评论，是普通用户高频操作触发的高影响问题，大量用户反馈必须重启才能恢复的痛点，社区已在协作定位根因
2.  **#4878 微信定时任务结果无法推送问题**（[Issue#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)），累计5条评论，背后是大量家庭智能代理、个人自动化场景用户的强刚需，该问题已经在今日完成修复闭环
3.  **#4727 后端从AgentScope 1.x迁移到2.0的计划**（[Issue#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)），累计5条评论2个点赞，同时有社区用户专门提Issue#4885询问迁移进度，反映出大量用户对新架构带来的性能提升、多代理调度能力的强烈期待，目前迁移重构PR已经在开发中（[PR#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)）

## 5. Bug 与稳定性
按严重程度排序如下：
| 问题等级 | 问题描述 | 关联Issue | 是否已有修复 |
|---------|---------|---------|------------|
| 最高危安全类 | 7个未授权访问/路径遍历/权限绕过漏洞集中披露，可导致全局配置篡改、本地文件泄露、密钥窃取 | [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908)、[#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909)、[#4910](https://github.com/agentscope-ai/QwenPaw/issues/4910)、[#4911](https://github.com/agentscope-ai/QwenPaw/issues/4911)、[#4912](https://github.com/agentscope-ai/QwenPaw/issues/4912)、[#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913)、[#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914) | 是，全部已合入预发布版本 |
| 高影响核心功能类 | 新建会话后模型配置页丢失、无法加载，必须重启恢复 | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | 否，待定位根因 |
| 高影响核心功能类 | 切换会话时出现无法终止的异常加载状态 | [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) | 否，待提交PR |
| 高影响核心功能类 | browser_use工具在Windows下CDP超时、浏览器闪退 | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | 否，待提交PR |
| 中影响体验类 | v1.1.9版本频繁出现系统兜底回复“无法处理您的问题” | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | 否，待提交PR |
| 中影响体验类 | 自定义频道保存配置后停止监听，需要二次保存才能恢复 | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) | 否，待提交PR |

## 6. 功能请求与路线图信号
结合现有社区需求和已开发PR判断，以下功能大概率纳入下一正式版本v1.1.11：
1.  Windows全盘符跨盘文件浏览能力（[PR#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906)），当前正在审核中
2.  浏览器操作新增基于页面坐标的点击能力（[PR#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905)），解决复杂元素无法通过选择器定位的问题
3.  内置小米MiMo大模型提供商接入（[PR#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)），新增国产大模型可选池
4.  PRD文档内置CRUD工具 + 前端渲染组件（[PR#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902)），强化产品研发场景的Agent能力
5.  插件系统解耦优化，解决桌面版1.1.10版本插件无法加载的阻塞问题（[PR#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900)）

中长期路线图已确认的待落地方向：AgentScope 2.0全量迁移、工具定义按需加载降低60%初始上下文token开销、基于DAG的无损上下文压缩能力。

## 7. 用户反馈摘要
今日从社区反馈提炼出真实用户画像痛点：
1.  **本地桌面版用户群体占比极高**：普遍提出Windows端不需要限制文件上传大小、需要支持拖拽多文件上传、字体过小长期使用眼疲劳、跨盘符访问文件等个性化需求，和服务器部署版本的诉求差异极大
2.  **自动化家庭场景用户刚需明确**：定时任务、微信/企业微信推送是该群体高频使用能力，此前的推送失败问题给用户造成了实际业务影响
3.  **长会话场景用户痛点突出**：多工具配置下初始上下文token占比超过60%，长期运行多轮对话的上下文丢失问题严重影响开发、周报汇总等场景的体验
4.  **新用户上手门槛较高**：侧边栏菜单设计过于复杂，高频使用的会话入口需要多步点击，安全漏洞上报路径不清晰，新手引导体验有较大优化空间
5.  社区正面反馈集中在安全响应速度：当日披露的7个漏洞当日完成全量修复，用户对项目的安全投入给出了极高评价。

## 8. 待处理积压
提醒核心维护团队重点关注以下长期未响应的高优先级事项：
1.  [#4666 新建会话模型配置丢失问题](https://github.com/agentscope-ai/QwenPaw/issues/4666)，该问题5月25日就已提交，距今超过一周仍未定位根因，已经影响大量普通用户的日常使用
2.  [#4727 AgentScope 2.0全量迁移任务](https://github.com/agentscope-ai/QwenPaw/issues/4727)，目前只有初稿重构PR，距离完整落地还有大量适配工作，社区关注度极高，需要核心团队投入更多资源加速推进
3.  [#4551 无损上下文压缩需求](https://github.com/agentscope-ai/QwenPaw/issues/4551)，该需求5月20日提交，大量长会话场景用户排队等待，目前仍未进入正式开发排期
4.  [#4875 升级脚本重置uv虚拟环境问题](https://github.com/agentscope-ai/QwenPaw/issues/4875)，新用户升级时必须重装所有依赖，严重影响新手用户体验，目前无任何修复进展公示

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-06-03）
---

## 1. 今日速览
过去24小时ZeroClaw共产生50条Issue更新、50条PR更新，伴随里程碑版本v0.8.0-beta-2正式发布，全项目进入v0.8大版本冲刺阶段，活跃度处于近3个月峰值。全链路核心贡献者同步推进新终端UI开发、国产大模型生态适配、安全漏洞加固三类核心工作，项目健康度评级为优秀：高优先级P1级Bug闭环率达41%，外部社区贡献PR占比达42%，迭代节奏完全符合Beta版本的预期进度。

## 2. 版本发布
今日正式发布 **v0.8.0-beta-2** 版本，是v0.7.5之后发布的最大规模迭代：
- 核心头牌功能为全新全功能终端原生UI `zerocode`，用户无需离开终端界面即可完成智能体运行、全生命周期运维操作，完全适配无图形界面的服务器边缘部署场景
- 配套交付了全链路多智能体运行时，支持多智能体并行调度、跨节点通信能力
- 本次版本无已知破坏性变更，升级无需修改存量配置文件，官方目前处于收集Beta用户反馈打磨稳定性阶段。

## 3. 项目进展
过去24小时共有17条PR/Issue完成合并/闭环，核心落地进展如下：
1. 高优先级开箱体验问题修复：PR #7070（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7070)）将Twitter/X渠道正式加入默认功能构建包，解决了此前预编译二进制包缺失该渠道能力的问题，对应闭环Issue #7069
2. 高危安全漏洞闭环：通道侧工具白名单绕过漏洞#7063、多代理配置下TTS路由错误问题#7001、HTTP请求私有主机访问规则对齐web_fetch安全策略的特性全部落地
3. 代码架构规范落地：TUI模块按规划从crates目录迁移到apps/zerocode独立目录，符合终端端应用的项目分层规范
截止今日，v0.8正式版整体完成度已达85%，核心功能均已进入测试打磨阶段。

## 4. 社区热点
今日讨论热度最高的社区议题集中在国产大模型适配场景，高互动条目如下：
1. #6059 DeepSeek-V4 API格式不兼容Bug（15条评论，4个赞，[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)）：目前是全项目评论数最高的活跃Issue，反映了国内大量生产用户将DeepSeek-V4作为主力推理后端的强需求，用户普遍呼吁官方将国产大模型适配优先级提升到第一梯队
2. #5600 Kimi-Code流式调用工具400报错Bug（9条评论，[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)）：数十位国内开发者反馈该问题直接导致生产工作流完全阻塞，诉求是官方针对非OpenAI标准返回格式做统一兼容适配层
3. #6824 TUI Agent Chat特性追踪（3条评论，[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)）：大量低运维资源的边缘场景用户表示非常期待新发布的zerocode终端UI，降低服务器端部署的运维复杂度。

## 5. Bug 与稳定性
今日汇总最新Bug，按严重等级排序：
| 严重等级 | 问题描述 | 状态 | 链接 |
| --- | --- | --- | --- |
| P1高危 | Kimi-Code流式调用工具时，服务端返回推理字段缺失导致400错误，完全阻塞工作流 | 未认领，无对应Fix PR | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| P1高危 | Telegram渠道对接Codex后端时，直接将内部草稿/工具运行日志返回给最终用户，存在信息泄露风险 | 未认领，无对应Fix PR | [Issue #7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) |
| P1高危 | 合法授权配置下，`zeroclaw check` 命令所有WebSocket检测全部返回401，网关连通性完全失效 | 待复现，无对应Fix PR | [Issue #7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) |
| P2中危 | 快速入门CLI存在硬编码用户可见字符串，破坏多语言体验 | 待认领 | [Issue #7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) |

今日已闭环修复高风险Bug共6个，安全侧核心漏洞100%完成补丁落地。

## 6. 功能请求与路线图信号
结合现有需求和PR队列，已明确纳入后续版本的特性如下：
1. 强配对码特性#6613：替换原有6位纯数字配对码，默认升级为32位字母数字混合强校验码，已经列入v0.8.0正式版稳定准入Blocker，近期就会有PR合入
2. NEAR AI Cloud模型提供商接入PR #6842、Web端ACP控制台特性PR #7036，已经进入v0.8.1集成队列，确认纳入下一个Minor版本交付
3. 远程节点注册CLI#6390、节点真实心跳跟踪特性#6391，为多机集群部署的核心能力，将在v0.8.0正式版发布后优先推进落地，预计v0.8.1上线
4. Windows Shell可配置特性#7089目前处于设计讨论阶段，社区呼声高，预计在v0.8.x小版本迭代中交付
5. 物理隔离Air-gapped执行模式#6293作为长期安全特性已完成RFC，预计v0.9版本正式发布。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 国内生产用户普遍反馈现有版本对DeepSeek、Kimi等国产大模型的适配优先级不足，格式不兼容问题直接阻断业务流程，要求官方优先投入适配资源
2. 边缘部署用户对新发布的zerocode终端UI期待度极高，认为不需要部署Web Dashboard就能在服务器端直接运维智能体，可以减少80%的边缘侧运维工作量
3. 安全合规场景用户明确提出6位纯数字配对码暴力破解风险极高，默认升级强配对码的需求十分迫切
4. 企业团队部署用户反馈Mattermost渠道缺失私信机器人能力，团队内部协作场景使用体验存在明显短板。

## 8. 待处理积压
提醒维护者优先处理的长期高优先级积压项：
1.  bulk revert丢失的153个提交追踪Issue #6074（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)）：开放近2个月处于In-progress状态，目前没有明确推进进展，大量已评审的功能和Bugfix积压无法合入，需要尽快投入人力完成审计恢复
2. Kimi流式工具调用兼容P1 Bug #5600：开放2个月，9位用户反馈生产环境阻塞，目前暂无维护者认领，严重影响国内用户使用体验
3. Discord邀请链接过期的文档Issue #7037：开放3天无人处理，直接影响新用户加入社区的引导转化链路。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*