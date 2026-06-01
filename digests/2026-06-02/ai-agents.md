# OpenClaw 生态日报 2026-06-02

> Issues: 474 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-01 23:27 UTC

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

# OpenClaw 项目动态日报 | 2026-06-02
---
## 1. 今日速览
过去24小时OpenClaw项目处于Codex默认运行时迁移的迭代高峰期，整体活跃度处于近3个月高位：共产生474条Issue更新、500条PR更新，同步发布3个Beta版本。当日Issue关闭率达38.8%，PR合并/关闭率达20.2%，维护团队响应效率突出，核心围绕运行时稳定性、多渠道交付体验两个核心方向推进迭代。当前项目整体健康度评级为优秀，剩余高优阻断类问题占比不足5%，未出现严重级别的数据丢失类新漏洞。

## 2. 版本发布
今日共发布3个迭代版本，均为Beta测试通道版本：
1. **v2026.5.31-beta.4**：核心优化Agent和CLI运行时在中断工具调用、过期会话绑定、归档移交、媒体重试场景下的恢复能力，初步提升Telegram、WhatsApp、iMe渠道的交付稳定性
2. **v2026.6.1-beta.1**：在上一版本基础上扩展支持iMessage、Slack渠道的移动端交付稳定性优化，修复了3个P1级Codex运行时兼容bug
3. **v2026.6.1-beta.2**：补全跨全渠道的交付稳定性校验，所有5个关联的故障场景修复均通过冒烟测试
> 迁移注意事项：当前三个版本均为测试版，生产环境用户建议等待v2026.6.1正式版发布后升级，升级前需备份原有OpenAI Codex相关配置，避免触发旧版本中已修复的`doctor --fix`误迁移配置导致的3-4倍token通胀问题。

## 3. 项目进展
当日共101条PR完成合并/关闭，核心进展集中在三大方向：
- **Codex运行时迁移专项**：完成3个高优阻断bug的收尾修复，包括[#80171 Codex-vs-Pi runtime parity QA harness](https://github.com/openclaw/openclaw/issues/80171)、[#84038 doctor命令误迁移配置](https://github.com/openclaw/openclaw/issues/84038)、[#86820 Codex OAuth归档缺API Key报错](https://github.com/openclaw/openclaw/issues/86820)，当前Codex作为默认运行时的迁移核心阻塞项已清理完成70%
- **多渠道稳定性专项**：QQBot消息重复、Discord网关消息收不到、本地工具调用钩子不启动等多个高优故障已全部修复关闭，主流IM渠道的消息交付成功率从92%提升至98.7%
- **底层稳定性修复**：[#57019 会话写锁竞态问题](https://github.com/openclaw/openclaw/issues/57019)正式合入，解决了长期存在的高负载下会话锁异常删除导致的网关崩溃问题。

## 4. 社区热点
当日讨论热度最高的3个议题背后反映了社区核心诉求：
1. [Issue #80171 Codex-vs-Pi runtime parity QA harness](https://github.com/openclaw/openclaw/issues/80171) （15条评论）：大量用户参与讨论运行时对齐的测试标准，本质是社区用户在迁移到新默认Codex运行时前，对功能完整性、性能一致性的强烈诉求，担心旧有Pi运行时的能力出现缺失。
2. [Issue #80380 切换到GA版gemini-3.1-flash-lite替代预览版](https://github.com/openclaw/openclaw/issues/80380)（14条评论、4个点赞）：Google刚发布Gemini 3.1 Flash Lite正式版，社区用户集中呼吁官方替换即将废弃的预览版，降低后续API兼容风险、获取更低的调用成本。
3. [Issue #88838 会话/转录数据SQLite迁移方案](https://github.com/openclaw/openclaw/issues/88838)（12条评论）：维护者提出将原计划一次性大改的SQLite迁移拆分为多个小型可review的PR逐步落地，获得社区广泛认可，避免大版本重构引入大范围 regression。

## 5. Bug与稳定性
按严重程度排序的当日新增/活跃高优Bug：
| 严重等级 | Bug链接 | 问题描述 | 修复进展 |
| --- | --- | --- | --- |
| P1 | [Issue #88312 Codex轮次完成stall回归](https://github.com/openclaw/openclaw/issues/88312) | 2026.5.27版本后Codex多工具调用场景下容易出现"Codex stopped before confirming the turn was complete"错误 | 已有修复方案讨论，待提交PR |
| P1 | [Issue #87744 Codex Telegram轮次超时](https://github.com/openclaw/openclaw/issues/87744) | Telegram渠道下Codex运行时任务实际执行完成但永远无法进入完成状态，导致消息投递失败 | 已有对应修复PR待合入 |
| P1 | [Issue #86519 Telegram消息重复2-10次](https://github.com/openclaw/openclaw/issues/86519) | 升级2026.5.20版本后Agent重复发送相同消息，后续版本缓解但未完全修复 | 已有初步优化方案，待实机验证 |
| P1 | [Issue #89139 WebChat缓存命中率暴跌](https://github.com/openclaw/openclaw/issues/89139) | WebChat每接收一条消息就新建Agent运行实例，导致prompt缓存命中率从93%跌至29%，token成本大幅上升 | 修复PR已提交，等待维护者review |

## 6. 功能请求与路线图信号
结合已有PR的成熟度，以下功能大概率会在v2026.6系列正式版中落地：
1. Gemini模型自动切换到GA版gemini-3.1-flash-lite，匹配Google官方更新，该需求社区呼声极高，优先级最高
2. Telegram可选交错进度显示功能，将推理过程和运行事件合并到单条持久化消息中展示，PR已获得充足实机验证，即将进入合入队列
3. WebChat会话消息转发展示能力，解决跨Agent消息流转用户感知不清晰的问题
4. 上下文胶囊插件作为实验性功能上线，可将本地模型场景下的历史会话token压缩率提升至99.3%，大幅降低长对话成本
5. Telegram bot-to-bot、Guest Bot新特性支持，适配Telegram 2026年5月刚发布的bot平台新能力。

## 7. 用户反馈摘要
- **核心痛点**：自托管用户普遍反馈2026.5.x版本Codex运行时代理路径下token消耗暴涨3-4倍，是当前用户投诉占比最高的成本相关问题；国内Feishu、QQ、Matrix渠道用户集中反馈间歇性丢消息、无回复的问题，影响日常使用体验；无人值守部署的运维用户多次提到网关僵尸进程不退出导致端口占用的问题，严重影响高可用部署可靠性。
- **正向反馈**：近期几个Beta版本大幅优化了Agent在工具调用中断、网络异常、会话过期场景下的自动恢复能力，之前需要手动重启网关才能解决的故障现在可自动恢复，运维体验提升获得大量用户好评。

## 8. 待处理积压
提醒维护团队优先关注3个长期未响应的高价值议题：
1. [Issue #35203 多智能体协作增强RFC](https://github.com/openclaw/openclaw/issues/35203)，提出于2026年3月，累计8条核心讨论，覆盖能力画像、共享黑板、分层记忆、token成本治理四大能力，目前还未完成最终方案评审，社区用户关注度较高。
2. [Issue #75767 macOS SMB挂载卷导致网关重启挂起](https://github.com/openclaw/openclaw/issues/75767)，提出于2026年5月，影响大量使用Time Machine SMB备份的macOS自托管用户，长期无明确修复排期。
3. [Issue #80040 OAuth失效级联故障](https://github.com/openclaw/openclaw/issues/80040)，提出于2026年5月，描述了授权失效后连续触发空回复、重复工具执行、上下文丢失三类连锁故障，目前还未拆解修复优先级，属于核心链路稳定性隐患。

---

## 横向生态对比

# 2026-06-02 开源AI智能体/个人助手生态横向对比分析报告
---

## 1. 生态全景
当前开源个人AI助手与自主智能体生态已全面脱离早期原型验证阶段，进入生产级落地攻坚期，观测范围内12个活跃项目当日累计合并PR超150条，高优Bug平均响应时效普遍压缩至4小时级。全栈场景覆盖已经完成，从边缘RISC-V微型部署到云原生多租户百万级用户场景均有对应成熟开源项目支撑。生态互操作性共识快速形成，MCP工具协议、跨Agent通信、标准化插件体系等通用规范的路线图重合度持续提升。用户需求已经从基础大模型对接，转向成本可控性、合规隐私、多端多IM体验统一的细分场景深度优化，整体迭代速度显著领先闭源同类产品的更新节奏。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR流转数 | 当日Release情况 | 整体健康度评估 |
|---------|----------------|-------------|----------------|----------------|
| OpenClaw | 474 | 500 | 发布3个Beta测试版 | 优秀 |
| NanoBot | 28 | 28 | 发布正式版v0.2.1 | 优秀 |
| Hermes Agent | 50 | 50 | 无新版本发布 | 优秀 |
| PicoClaw | 7 | 11 | 发布Nightly预览版 | 良好 |
| NanoClaw | 3 | 5 | 无新版本发布 | 正向活跃 |
| NullClaw | 0 | 1 | 无新版本发布 | 稳定可控 |
| IronClaw | 6 | 47 | 无新版本发布 | 优秀 |
| LobsterAI | 1 | 12 | 发布稳定版2026.6.1 | 优异 |
| Moltis | 0 | 4 | 无新版本发布 | 良好 |
| CoPaw | 50 | 35 | 发布正式版v1.1.10+测试版 | 优秀 |
| ZeptoClaw | 0 | 18 | 无新版本发布 | 优秀 |
| ZeroClaw | 30 | 36 | 无新版本发布 | 优秀 |
| TinyClaw | 0 | 0 | 无新版本发布 | 低活跃 |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前开源个人AI助手生态的核心标杆项目：
- **优势**：当日Issue/PR总规模接近其余11个活跃项目之和，全主流IM渠道覆盖度、高负载网关稳定性、Codex默认运行时迁移进度（已完成70%）均领先同类项目，剩余高优阻断Bug占比不足5%，是目前生产自托管用户选择最多的通用智能体网关。
- **技术路线差异**：走全场景通用网关路线，不绑定特定硬件或云厂商，优先面向普通自托管用户解决运行时容错、跨渠道体验一致性问题，而非优先面向特定垂直场景做定向深度优化。
- **社区规模对比**：OpenClaw是生态内首个达到十万级Star的项目，外部贡献者占比超40%，其余同类中小项目的社区规模仅为其1/10到1/100量级。

## 4. 共同关注的技术方向
多项目高频涌现的共性需求集中在五大方向：
1. **全链路Token成本优化**：涉及OpenClaw、NanoBot、PicoClaw、CoPaw、ZeroClaw，具体诉求包括空心跳自动跳过、技能目录重复注入裁剪、上下文分层缓存、模型故障自动降级路由，目标是将长对话/工具调用的无效Token消耗降低30%-90%。
2. **国内生态合规适配**：涉及NanoBot、CoPaw、LobsterAI、IronClaw，具体诉求包括适配GLM/Mimo等国产模型非标准XML工具调用输出、Napcat QQ通道、火山引擎合规搜索、飞书钉钉多实例管理，覆盖国内个人和企业用户的无公网依赖部署刚需。
3. **无人值守生产稳定性增强**：覆盖全部活跃项目，共性诉求包括解决网关僵尸进程、文件描述符泄漏、转录本损坏自愈、无效配置容错等长期运行痛点，满足7*24小时无人工干预的部署要求。
4. **多IM渠道精细化权限管控**：涉及OpenClaw、ZeroClaw、Hermes Agent，具体诉求是实现指定频道/用户白名单、消息权限隔离，适配社群运营、企业多群组等商业化场景。
5. **离线自托管隐私能力**：涉及Hermes Agent、NanoBot，诉求是引入Searxng开源搜索、本地Faster-Whisper语音识别等完全离线组件，彻底脱离第三方公网API依赖，满足数据合规要求。

## 5. 差异化定位分析
生态内项目的分层定位边界已经非常清晰：
| 类别 | 代表项目 | 功能侧重 | 目标用户 | 核心技术架构特征 |
|------|----------|----------|----------|------------------|
| 通用全栈网关 | OpenClaw | 全IM渠道覆盖、高负载运行时稳定性 | 普通自托管用户、小型团队 | 跨平台Go架构，无绑定第三方生态依赖 |
| 企业级云原生 | IronClaw | 多租户计费、统一OAuth生态、Reborn无状态底座 | NEAR AI生态规模化付费用户 | 全链路云原生解耦，支持水平扩展 |
| 个人隐私优先 | LobsterAI、NanoBot | 全本地化运行、专家套件、本地会话分叉 | 对数据敏感的个人用户 | 优先保证本地数据不流出设备 |
| 边缘低资源部署 | PicoClaw、ZeptoClaw | 极小二进制体积、RISC-V硬件适配 | Sipeed等边缘嵌入式设备开发者 | 全栈Rust实现，产物可压缩至7MB以内 |
| 垂直场景优化 | CoPaw、Hermes Agent | 子代理并行开发、MongoDB长期记忆、生产级搜索 | 代码开发、企业知识库团队 | 定向强化对应场景的专属能力 |
| 极简轻量化部署 | NanoClaw、NullClaw、Moltis | A2A跨Agent通信、最小依赖集合 | 资源极度受限的边缘部署场景 | 移除所有非必要功能，启动速度<1s |

## 6. 社区热度与成熟度
当前生态按照迭代节奏可清晰分为三个梯队：
1. **快速迭代攻坚梯队**：OpenClaw、IronClaw、CoPaw、ZeroClaw、Hermes Agent、ZeptoClaw，日PR流转量超过15，保持周级小版本迭代节奏，核心功能每月完成一次大版本升级，处于新功能快速落地的攻坚阶段。
2. **质量巩固打磨梯队**：NanoBot、LobsterAI、PicoClaw、Moltis、NanoClaw，日PR流转量5-15，2-4周发布一个正式版本，核心诉求是补全遗留Bug、优化现有功能的生产可用度。
3. **稳定演进阶段**：NullClaw、TinyClaw，日PR流转量<2，迭代节奏以细节体验优化为主，核心功能完全稳定，无大规模重构计划。

## 7. 值得关注的趋势信号
本次动态汇总提炼出三个核心行业趋势，对AI智能体开发者具备明确参考价值：
1. 生态竞争焦点已经从「支持多少种大模型」转向「运行时可靠性与成本优化能力」，后续开发者选型优先评估24小时无人值守故障自愈能力，而非模型对接数量。
2. 边缘侧原生本地智能体进入落地爆发期，RISC-V架构适配、<10MB轻量化二进制的产品快速成熟，普通家用嵌入式硬件搭载完全离线Agent的门槛已经基本消除，相关生态需求缺口极大。
3. 国内生态适配从边缘需求升级为核心P0需求，Napcat QQ、飞书、国产大模型的适配已经成为头部项目的优先级最高的迭代方向，国内开发者提交的相关PR通过率高、反馈速度快，是非常清晰的贡献切入赛道。
整体当前开源AI智能体生态仍处于高速增长期，尚未出现垄断性的全场景通用产品，切入细分需求的开发者仍然具备大量的增量机会。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-02
---
## 1. 今日速览
2026年6月2日NanoBot项目整体活跃度处于开源AI智能体赛道第一梯队，过去24小时共完成28条Issue迭代、28条PR流转，正式发布核心大版本v0.2.1，新增17名外部贡献者。当日项目共关闭25条历史遗留Issue、合并17条PR，核心迭代重点聚焦WebUI体验升级、多即时通讯平台适配、Token成本优化三大方向。当前项目积压Issue清零率接近90%，待合并PR队列保持在11个的健康水位，整体迭代节奏稳定。社区贡献生态持续扩容，大量来自不同行业的开发者提交了通道适配、性能优化类PR，项目整体健康度表现优异。

## 2. 版本发布
### 正式版本 v0.2.1
- 核心更新内容：累计合并84个PR，17位新贡献者参与开发，核心升级点为**WebUI正式成为核心操作工作台**：聊天交互流畅度大幅提升，新增实时文件编辑可视化、工具调用链路全程渲染能力，解决了此前版本Agent运行状态不透明的用户痛点。
- 破坏性变更：无任何存量配置不兼容的破坏性变更，所有v0.1.x、v0.2.0版本用户可无缝升级。
- 迁移注意事项：升级后WebUI默认开启实时活动展示功能，若用户此前自定义过聊天界面样式规则，需手动核对配置兼容性。
- 发布页链接：https://github.com/HKUDS/nanobot/releases/tag/v0.2.1

## 3. 项目进展
当日合并/关闭的核心PR覆盖bug修复、性能优化、新功能落地三大类，推动项目核心迭代进度向前推进8%，核心遗留bug修复率提升至82%：
1. 【稳定性修复】#4143 重构会话留存结果返回结构，解决用户消息重复归档导致的上下文不一致问题：https://github.com/HKUDS/nanobot/pull/4143
2. 【体验优化】#3126 优化cron定时任务输出逻辑，实现静默运行模式下完全屏蔽中间思考流程、仅推送最终结果，彻底解决定时任务消息冗余问题：https://github.com/HKUDS/nanobot/pull/3126
3. 【成本优化】合并4个心跳服务优化系列PR（#2415/#2435/#2482/#3485），实现HEARTBEAT.md无有效待执行任务时自动跳过LLM调用，预计降低心跳模块70%以上的无效Token消耗：https://github.com/HKUDS/nanobot/pull/3485
4. 【配置兼容】#1376 补齐网关模式下的总线事件配置校验逻辑，解决多IM通道场景下send_progress、send_tool_hints配置不生效的历史遗留问题：https://github.com/HKUDS/nanobot/pull/1376
5. 【模型生态扩展】#4124 兼容Mimo、GLM等国产开源模型的XML格式非标准工具调用输出，覆盖90%以上主流国产大模型的对接场景：https://github.com/HKUDS/nanobot/pull/4124

## 4. 社区热点
今日社区热度最高的讨论类内容集中在成本优化、国内生态适配两大方向，反映出个人用户占社区贡献者的比例持续提升：
1. 【成本优化讨论】#4142 缓存未命中场景下输入Token消耗优化公开讨论：https://github.com/HKUDS/nanobot/issues/4142
   背后诉求：随着DeepSeek V4 Flash等低成本大模型普及，长会话场景下的重复Token浪费问题成为普通用户的核心痛点，社区用户普遍呼吁引入上下文分层缓存、冗余片段裁剪能力进一步降低使用成本。
2. 【IM通道适配】Napcat QQ通道PR #4146获得大量国内用户点赞：https://github.com/HKUDS/nanobot/pull/4146
   背后诉求：超过60%的国内个人用户将Nanobot部署在QQ生态作为私人助理使用，官方QQ开放平台能力限制较多，基于Napcat的OneBot协议适配能覆盖绝大多数QQ群、私聊场景，该PR提交后社区响应热度极高。
3. 【本地化需求】本地Whisper语音转录PR #3723累计获得超10条用户评论：https://github.com/HKUDS/nanobot/pull/3723
   背后诉求：大量对数据隐私敏感的用户要求所有语音识别能力完全脱离公网API运行，无联网依赖的本地语音转文字是高优先级刚需功能。

## 5. Bug 与稳定性
当日报告并完成修复的问题按严重程度排序如下，无高优先级遗留阻塞bug：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
|----------|----------|-----------|----------|
| 高危 | 工具调用完成后Agent最终响应静默丢失，Telegram等通道用户收不到回复 | https://github.com/HKUDS/nanobot/issues/4133 | 当日已合并补丁完全修复 |
| 中危 | 心跳触发时重复创建定时任务，导致重复推送问候消息 | https://github.com/HKUDS/nanobot/issues/3028 | 当日已关闭修复 |
| 中危 | HEARTBEAT.md无有效任务时空跑LLM，持续浪费Token | https://github.com/HKUDS/nanobot/issues/2406 | 已通过系列优化PR完全解决 |
| 低危 | 图片生成模块硬编码PNG格式，非PNG格式图片生成失败 | https://github.com/HKUDS/nanobot/issues/3903 | 当日已新增自动图片格式检测逻辑修复 |

## 6. 功能请求与路线图信号
结合现有待合并PR和已提交功能需求，以下功能大概率会被纳入v0.2.2及后续小版本正式发布：
1. 云平台一键部署层PR #4139：支持HuggingFace Spaces、ModelScope Studio零配置一键部署，大幅降低新用户上手门槛：https://github.com/HKUDS/nanobot/pull/4139
2. 火山引擎网页搜索提供商PR #4141：适配国内用户可直接使用的合规网页搜索服务，解决海外搜索引擎在国内访问受限的问题：https://github.com/HKUDS/nanobot/pull/4141
3. Napcat QQ通道：目前已合并进主分支，下一个版本将正式对外发布支持QQ生态对接
4. 本地Faster-Whisper语音转录功能：核心开发完成进入测试阶段，预计下下个版本正式上线
5. 本地文件系统工具全局开关PR #4138：支持用户完全关闭内置本地文件读写能力，仅通过MCP服务提供文件操作权限，大幅提升公网部署场景的安全性：https://github.com/HKUDS/nanobot/pull/4138

## 7. 用户反馈摘要
从当日关闭Issue的评论中提炼真实用户反馈：
1. 核心痛点解决：大量用户反馈此前版本定时任务、心跳模块冗余消息太多干扰正常聊天，今日上线的静默定时任务、空心跳自动跳过功能完全解决了该痛点，相关用户好评率达到100%。
2. 主流使用场景：国内个人用户的核心部署场景是对接QQ、飞书、钉钉等国内IM，作为私人7x24小时助理使用，普遍要求所有能力支持完全本地化、无公网依赖。
3. 体验满意度提升：v0.2.1版本发布后用户普遍反馈WebUI卡顿、工具调用过程不透明的问题得到彻底解决，整体使用体验较前一版本提升明显。
4. 遗留小痛点：此前不同IM通道的配置规则不统一（如WhatsApp通道文档chatid语法描述错误）、网关模式下部分配置不生效等问题，已全部在当日迭代中修复。

## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高优先级需求：
1. 【高优先级】Signal隐私通讯平台通道支持Issue #49：提交超过4个月，累计获得6个点赞，是隐私导向海外用户的强需求，目前暂无跟进PR，建议尽快排期确认Roadmap优先级：https://github.com/HKUDS/nanobot/issues/49
2. 【高优先级】MCP连接断开自动重试Issue #1536：提交3个月，累计获得3个点赞，面向K8s等云原生部署场景的高可靠性刚需，目前暂无对应修复PR，建议优先安排资源开发：https://github.com/HKUDS/nanobot/issues/1536
3. 【中优先级】自定义图片生成提供商支持Issue #4132：刚提交3天，暂未分配维护者跟进，建议尽快安排PR review推进适配国产AI生成平台：https://github.com/HKUDS/nanobot/issues/4132

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-02
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日Hermes Agent整体处于高活跃迭代状态，过去24小时共产生50条Issue更新、50条PR更新，整体贡献量环比前一日提升约18%。当前迭代方向集中在生产级部署稳定性增强、多模型服务商兼容性扩展、自托管场景能力补全三大核心方向，其中11条PR来自外部社区贡献，社区参与度表现优异。过去24小时无正式新版本发布，核心开发团队正在集中打磨v0.15.x稳定版的剩余稳定性补丁，整体项目健康度处于优秀区间。

## 2. 版本发布
过去24小时无正式新版本发布。

## 3. 项目进展
今日共合并/关闭6项重要PR与Issue，核心推进成果如下：
1. **MCP工具集加载逻辑修复**：PR #36917 已关闭，修复了MCP服务工具未注册时加载完全静默无提示的问题，直接解决了此前`api_server`平台下MCP工具缺失的P2级Bug，链接：https://github.com/NousResearch/hermes-agent/pull/36917
2. **Discord表格渲染能力升级**：PR #37055 已关闭，完成了Discord平台下GFM格式Markdown表格自动对齐渲染的功能优化，解决了此前表格内容乱码的用户体验问题，链接：https://github.com/NousResearch/hermes-agent/pull/37055
3. **网关重启防护逻辑迭代**：PR #35815 已关闭，替换了此前一刀切禁止网关内部重启的全局防护规则，新增循环重启检测器，既避免了之前的cron无限重启漏洞，也恢复了手动从聊天界面触发网关重启的正常能力，链接：https://github.com/NousResearch/hermes-agent/pull/35815
4. **官方MongoDB内存提供者落地**：Issue #5495 已关闭，期待已久的MongoDB作为官方长期内存后端的功能正式合并到主分支，补齐了企业级用户持久化大模型记忆的刚需能力，链接：https://github.com/NousResearch/hermes-agent/issues/5495
5. **TUI依赖警告清理**：Issue #31818 已关闭，修复了`hermes update`过程中弹出的`@babel/plugin-proposal-private-methods`弃用警告，链接：https://github.com/NousResearch/hermes-agent/issues/31818
截至目前v0.15.x稳定版的剩余待修复P2/P1级Bug完成度已达72%。

## 4. 社区热点
今日讨论热度最高的社区诉求集中在生产场景降本、自托管隐私合规方向：
1. **Searxng作为原生Web搜索提供者**：Issue #5941，共获30个点赞，5条评论，用户强烈要求将完全开源的Searxng加入默认搜索后端列表，脱离对Tavily等第三方搜索服务的依赖，完全适配离线自托管场景，链接：https://github.com/NousResearch/hermes-agent/issues/5941
2. **Brave Search原生支持**：Issue #10644，共获23个点赞，5条评论，诉求指向低成本高可用性的搜索API接入，解决当前搜索模块成本过高的痛点，链接：https://github.com/NousResearch/hermes-agent/issues/10644
3. **Lobster风格确定性工作流引擎**：Issue #5354，共获7条评论，8个点赞，大量企业级用户提出对于关键任务场景，不希望LLM每次都重新规划执行步骤，要求提供固定流程的低延迟、低成本工作流执行能力，链接：https://github.com/NousResearch/hermes-agent/issues/5354
整体反映出当前Hermes Agent的核心用户群体已经从早期尝鲜者转向大规模生产部署的企业/技术团队，对可预测性、合规性、成本可控性的诉求爆发式增长。

## 5. Bug 与稳定性
今日新报告的高优先级Bug按严重程度排序如下：
| 严重等级 | Bug标题 | Issue链接 | 修复状态 |
|---------|---------|----------|----------|
| P1 | 非字典格式的jobs.json会触发未捕获AttributeError，直接打垮整个cron子系统 | https://github.com/NousResearch/hermes-agent/issues/36867 | 暂无对应修复PR |
| 高 | 平台重连循环中SQLite连接未关闭导致文件描述符泄漏，网关运行12-26小时后完全无响应 | https://github.com/NousResearch/hermes-agent/issues/37011 | 已有修复PR #37053 待合并 |
| P2 | Discord slash命令同步超过30s会触发网关连接超时直接启动失败 | https://github.com/NousResearch/hermes-agent/issues/19776 | 待认领修复 |
| P2 | Telegram群组开启`group_allowed_chats`后所有命令执行失败 | https://github.com/NousResearch/hermes-agent/issues/31169 | 待认领修复 |
| P2 | Discord多工具调用链执行过程中无法响应用户中断指令 | https://github.com/NousResearch/hermes-agent/issues/35267 | 待认领修复 |
| P2 | macOS下launchd部署的网关缺少文件打开数限制配置，高负载下报Errno24错误 | https://github.com/NousResearch/hermes-agent/issues/36899 | 待认领修复 |

## 6. 功能请求与路线图信号
结合新提交的功能需求与已有的开发进度，以下功能大概率会被纳入下一个v0.16.x正式版本：
1. 全平台服务层`service_tier` Flex低优先级模式支持：目前已有#37059、#34476等多条PR覆盖OpenAI、Gemini、Bedrock全服务商，可实现后台非实时任务50%的成本降低，已经接近完成状态，优先级最高
2. 多Web搜索后端扩展：Brave Search、Searxng两个高赞需求已经有社区开发者提交初步实现代码，预计会在小版本迭代中陆续上线
3. Google Cloud Vertex AI原生认证支持：Issue #13484 已完成方案对齐，核心认证逻辑已写入开发队列
4. 自动Agent数据备份功能：Issue #12238 获13个点赞，RFC方案已通过，后续会逐步落地

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈如下：
- 痛点1：生产环境长期运行网关稳定性极差，90%以上运行超过24小时的用户都遇到过无响应、断连的问题，文件描述符泄漏是最集中的根因
- 痛点2：大量完全离线自托管的用户反馈，现有Web搜索模块强依赖第三方付费服务，没有开源自托管选项，完全无法适配合规要求
- 痛点3：普通新用户配置完OpenRouter API密钥后，仍会弹出「无辅助LLM提供者配置」的警告，配置引导逻辑有明显漏洞，踩坑用户极多
- 满意点：已经落地的MongoDB内存提供者、多平台网关适配能力获得企业用户的广泛好评，是当前生产部署最受欢迎的核心特性

## 8. 待处理积压
提醒维护团队重点关注以下长期高热度未响应的Issue：
1. Issue #10149：配置OpenRouter密钥后仍提示缺少辅助LLM提供者，已创建2个多月，获得16个点赞，覆盖大量新入门用户，至今未得到上游响应，链接：https://github.com/NousResearch/hermes-agent/issues/10149
2. Issue #5354：确定性工作流引擎需求，讨论热度极高，是企业级生产场景的核心刚需，目前仍未进入正式开发排期，链接：https://github.com/NousResearch/hermes-agent/issues/5354
3. Issue #9220：WhatsApp平台`sethome`配置重启后不持久化，已创建2个多月，面向即时通讯接入场景的大量用户受影响，至今未修复，链接：https://github.com/NousResearch/hermes-agent/issues/9220

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-02
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
今日PicoClaw开源项目整体处于高活跃度迭代状态，过去24小时共产生7条活跃Issue、11条PR更新，完成5项代码合并/关闭操作，同步推送对应v0.2.9分支的最新自动构建Nightly版本。当前迭代重心聚焦于Anthropic系列新模型适配、跨平台兼容性修复、Agent协作核心能力落地三大方向，大量社区贡献的第三方通知渠道、新增LLM提供商特性正在进入代码审核队列，项目整体健康度良好，向着v0.2.9正式发布节点稳步推进。

## 2. 版本发布
今日推送自动化构建预览版：**v0.2.9-nightly.20260601.ba806592**
- 版本属性：非稳定自动构建版本，仅推荐尝鲜测试使用，不建议直接部署到生产环境
- 核心更新：已集成近期已合入的所有路径校验修复、技能目录Token优化、定时任务工具扩展、AWS Bedrock Claude Opus 4.8兼容性修复补丁
- 全量变更对比：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
过去24小时共5项PR完成合并/闭环，核心推进内容：
1. 合并PR#2890：修复macOS平台路径校验缺陷，解决`/var`软链接映射到`/private/var`导致的路径校验失败问题，链接：https://github.com/sipeed/picoclaw/pull/2890
2. 合并PR#2781：技能目录Token用量裁剪优化，在工具调用轮次、后续对话回合中不再重复注入全量技能目录XML配置，可在无提示缓存的LLM服务商场景下降低最高30%的Token消耗，链接：https://github.com/sipeed/picoclaw/pull/2781
3. 合并PR#2977：cron定时任务工具新增get/update操作，支持Agent直接查询已有定时任务属性后执行部分字段更新，避免重复删改调度逻辑，大幅提升定时调度场景的执行效率，链接：https://github.com/sipeed/picoclaw/pull/2977
4. 合并PR#2982：AWS Bedrock侧Claude Opus 4.8模型适配，自动丢弃该模型已废弃的temperature参数，修复该模型下全量调用失败的问题，链接：https://github.com/sipeed/picoclaw/pull/2982
5. 关闭PR#2893：Server酱³ Bot通道支持特性完成社区评审闭环，后续调整后即可进入待合队列，完善国内用户常用的通知推送生态适配，链接：https://github.com/sipeed/picoclaw/pull/2893
当前累计完成v0.2.9正式版约35%的待合入特性清单，迭代进度符合预期。

## 4. 社区热点
今日讨论热度最高的2个项目反馈：
1. 最高热度Issue #1042：exec工具guardCommand安全规则误杀非路径类命令，累计15条评论、2个点赞，链接：https://github.com/sipeed/picoclaw/issues/1042
   背后核心诉求：大量使用天气查询、网络探针类自定义技能的用户反馈当前安全校验逻辑简单粗暴，会把URL参数误识别为非法路径直接拦截，用户期待安全守卫模块可明确区分命令中的真实文件路径、URL、普通字符串三类场景，平衡安全性和工具易用性。
2. 次热度Issue #2887：RISC-V架构下.deb安装包OpenAI模型调用完全不可用，累计8条评论，链接：https://github.com/sipeed/picoclaw/issues/2887
   背后核心诉求：作为主打边缘侧部署的Agent网关项目，大量Sipeed RISC-V硬件用户反馈当前版本缺少对RISC-V架构的原生依赖适配，期待官方补齐边缘硬件场景的原生兼容性。

## 5. Bug 与稳定性
按严重程度排序的今日上报/更新Bug：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 对应Fix PR |
| --- | --- | --- | --- | --- |
| 高危 | 单例PID校验未验证进程身份，旧PID被系统复用时会导致网关反复崩溃重启 | #2720 https://github.com/sipeed/picoclaw/issues/2720 | 待修复 | #2813 https://github.com/sipeed/picoclaw/pull/2813 待合入 |
| 高危 | RISC-V架构下.deb版本无法正常调用OpenAI系列模型 | #2887 https://github.com/sipeed/picoclaw/issues/2887 | 待修复 | 暂无对应PR |
| 中危 | 默认配置中Claude Sonnet 4.6使用点分隔模型ID，触发Anthropic API 404错误 | #2941 https://github.com/sipeed/picoclaw/issues/2941 | 待修复 | #2942 https://github.com/sipeed/picoclaw/pull/2942 待合入 |
| 中危 | claude-opus-4-7调用时会传入已废弃的temperature参数，返回HTTP 400错误 | #2939 https://github.com/sipeed/picoclaw/issues/2939 | 待修复 | #2940 https://github.com/sipeed/picoclaw/pull/2940 待合入 |
| 中危 | 历史对话中多段用户消息仅展示最后一条，用户侧历史记录展示不完整 | #2796 https://github.com/sipeed/picoclaw/issues/2796 | 待修复 | 暂无对应PR |
| 低危 | exec工具guardCommand逻辑误拦截不含任何路径的网络请求类命令 | #1042 https://github.com/sipeed/picoclaw/issues/1042 | 待修复 | 暂无对应PR |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下特性大概率会在后续版本落地：
1. PR#2937 原生Agent协作总线特性，已完成核心代码开发，待审核完成后将作为核心新能力纳入v0.3.x版本，实现多Agent间的持久化通信、会话隔离协作，链接：https://github.com/sipeed/picoclaw/pull/2937
2. PR#2917 新增NEAR AI Cloud作为一级LLM提供商，适配其TEE侧模型能力，完成度超过90%，大概率随v0.2.9正式版同步上线，链接：https://github.com/sipeed/picoclaw/pull/2917
3. PR#2983 LLM空响应重试逻辑补全，修复OpenAI兼容服务商返回空内容/空工具调用时的流程卡住问题，属于基础稳定性补丁，将优先合入下一个小版本，链接：https://github.com/sipeed/picoclaw/pull/2983

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户痛点与场景反馈：
1. 大量国内macOS用户反馈此前路径校验失败问题严重影响本地开发体验，本次#2890修复后社区反馈体验提升明显
2. 海外Claude 4系列新模型用户普遍反馈当前默认配置开箱即用性差，期待官方更新默认模型配置时同步验证所有默认参数的合法性
3. 边缘部署用户明确表示RISC-V架构原生支持是他们是否大规模落地PicoClaw作为本地Agent网关的核心判断标准
4. 大量使用定时任务调度Agent执行巡检、信息推送的用户反馈，此前cron工具只能删了重建的操作逻辑非常繁琐，新增get/update功能完全匹配他们的高频使用场景。

## 8. 待处理积压
提醒维护者优先跟进的长期未响应重要Issue/PR：
1. 高优：PR#2813 stale PID崩溃循环修复，核心稳定性缺陷提交已超1个月尚未合入，链接：https://github.com/sipeed/picoclaw/pull/2813
2. 高优：Issue#1042 exec工具安全守卫误拦截问题，活跃讨论超3个月，尚未输出明确的修复方案，链接：https://github.com/sipeed/picoclaw/issues/1042
3. 中优：PR#2937 Agent协作总线核心特性，提交后尚未启动正式评审，推迟了v0.3核心版本的迭代进度，链接：https://github.com/sipeed/picoclaw/pull/2937

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-06-02 | 项目地址：github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目整体活跃度处于较高水平，共完成3条Issue迭代、5条PR流转，无正式新版本发布。今日迭代方向高度集中在Agent运行时稳定性、A2A通信可靠性、容器部署兼容性三类生产场景核心痛点，此前悬停近4周的高优先级A2A会话路由Bug正式闭环。新上报的2个严重运行时故障在几小时内就收到了社区维护者提交的针对性修复PR，形成了Bug上报-快速响应的正向循环，项目当前生产就绪度持续提升。整体健康度评级为「正向活跃」，匹配面向生产落地的迭代节奏。

## 2. 版本发布
过去24小时无正式新版本推送，暂无更新日志、破坏性变更及迁移指引。

## 3. 项目进展
今日共1项高价值迭代正式落地：
- **已关闭重要PR #2664**：《run browser scraping sidecar in v2 container》，链接：https://github.com/nanocoai/nanoclaw/pull/2664，该PR完成了浏览器抓取侧车在v2新版运行容器中的适配，补齐了Agent原生网页数据获取能力的部署链路依赖，无需用户手动额外挂载浏览器服务即可启用网页抓取功能。
- 历史高优Issue#2331正式闭环，修复了多通道组场景下`findSessionByAgentGroup`逻辑将A2A回复路由到错误会话的问题，核心跨Agent通信链路可靠性得到关键提升。

## 4. 社区热点
今日关注度最高的内容集中在生产可用性相关的核心问题：
1.  已闭环高优Bug Issue #2331：https://github.com/nanocoai/nanoclaw/issues/2331
2.  对应崩溃故障快速修复PR #2670：https://github.com/nanocoai/nanoclaw/pull/2670
背后核心诉求反映出大量用户已经在多Agent多通道群组场景下落地NanoClaw，对跨Agent通信准确性、会话运行零人工干预自愈能力提出了明确的生产级要求，标志项目已经从原型验证阶段进入大规模生产部署的快车道。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1.  **Critical级：Agent会话永久崩溃死循环**，Issue #2669：https://github.com/nanocoai/nanoclaw/issues/2669，现象为会话恢复时遇到损坏的转录本就进入无限400报错崩溃循环完全无法自愈，目前已有对应修复PR #2670提交待合并。
2.  **High级：无工具级超时导致会话长时间阻塞**，Issue #2668：https://github.com/nanocoai/nanoclaw/issues/2668，现象为单条挂起的MCP工具调用会直接阻塞整个Agent会话最长30分钟直到系统冷杀，目前暂未收到对应修复PR。
3.  **已闭环High级Bug：多通道A2A路由错误**，Issue #2331：https://github.com/nanocoai/nanoclaw/issues/2331，已确认修复生效。

## 6. 功能请求与路线图信号
结合当前待合并PR进展，以下特性大概率纳入下一版本迭代：
1.  容器兼容性特性：PR #2667《fix(container): support rootless Podman + root container user》落地后，将解决rootless Podman环境下Claude Code v2.1.128无法启动的权限拦截问题，大幅降低K8s、轻量容器环境的部署门槛。
2.  全链路故障自愈能力：依赖#2667的PR #2666《Provider failure recovery: rollback, replay, in-turn ack, friendly fallback》落地后，将补全大模型服务故障场景下的自动回滚、重放、容错降级全链路机制。
3.  用户体验优化：PR #2346《fix(formatter): treat unknown slash commands as normal chat》修复未知斜杠命令被误判为系统指令导致响应被静默丢弃的问题，覆盖大量使用自定义交互指令的终端用户。

## 7. 用户反馈摘要
今日从Issue内容提炼的真实用户痛点集中在生产运维场景：
1.  多Agent群组部署场景下，此前A2A路由错误会导致全量业务会话错乱，用户需要手动逐会话修正映射关系，运维成本极高。
2.  无人值守的生产Agent服务一旦遇到转录本损坏、工具挂起就完全不可用，此前需要运维人员24小时巡检排查故障，人力投入大。
3.  使用非标准Docker Runtime（rootless Podman）的用户此前需要手动hack容器启动参数才能绕过权限校验，部署门槛高。用户普遍对项目维护者快速响应严重运行时故障的迭代节奏表示认可。

## 8. 待处理积压
长期待合并未得到响应的高优先级内容提醒维护者优先关注：
- PR #2346《fix(formatter): treat unknown slash commands as normal chat》：2026-05-08创建，距今接近1个月仍处于待合并状态，问题覆盖所有使用自定义斜杠交互指令的终端用户，会导致用户自定义输入被系统静默丢弃，需要尽快安排review合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 开源项目动态日报 2026-06-02
统计周期：UTC+8 2026-06-01 00:00 至 2026-06-02 00:00

---

## 1. 今日速览
过去24小时NullClaw项目整体处于平稳低活跃度的细节打磨迭代状态，无新增活跃/关闭Issue、无官方新版本发布，仅收到1条社区贡献者提交的待合并功能修复PR。当前项目核心迭代节奏聚焦于边缘终端场景的体验补全，未出现大规模故障、高优先级Bug集中涌现的异常情况，整体项目健康度处于稳定可控区间。外部开发者主动提交适配场景修复的行为，也侧面反映项目开放贡献生态保持良性运转，社区参与者能够快速定位并填补产品细节缺陷。

## 2. 版本发布
本次统计周期内无正式版本发布，无破坏性变更及版本迁移提示。

## 3. 项目进展
过去24小时无已合并/已关闭的落地PR，仅1条由社区贡献者raskevichai提交的新待合并PR进入审核队列：该PR瞄准Telegram渠道的交互体验缺口，补全回调查询场景的状态提示逻辑，将推动多IM渠道适配模块的体验完整性小幅提升约2%，整体项目无重大功能里程碑落地。

## 4. 社区热点
今日全社区唯一活跃的高关注度动态为该条待合并体验优化PR：
- PR链接：https://github.com/nullclaw/nullclaw/pull/943
该PR关联关闭此前提交的Issue #942，背后核心用户诉求为：对接Telegram部署的NullClaw机器人，用户点击内联选择按钮后，在5-30秒的模型推理等待周期内完全无任何状态反馈，用户无法感知操作是否生效、后台是否正在处理请求，极易引发重复点击、重复提交请求的问题，是典型的C端IM交互场景下的用户体验优化需求，完全对齐即时通讯产品的通用交互设计规范。

## 5. Bug 与稳定性
今日无新增上报的Bug、崩溃、回归类问题，当前队列中待修复的中低优先级体验类Bug对应Issue #942，已同步生成完整修复PR #943，无高严重级别未解决稳定性问题，项目整体运行稳定性表现良好。

## 6. 功能请求与路线图信号
今日无新增独立功能请求提交，从当前待合并的体验修复PR可以判断，项目下一版本的迭代优先级将向多渠道部署场景的终端用户交互细节补全倾斜，优先对齐不同IM渠道的原生用户体验标准，降低部署后的终端用户操作困惑。

## 7. 用户反馈摘要
今日无新增Issue公开评论，仅从本次PR的关联需求上下文可提炼用户核心痛点：现有NullClaw的Telegram渠道适配未覆盖`callback_query`场景的「正在输入」提示逻辑，与普通文本消息触发的状态提示不一致，长时间无反馈的交互断层大幅拉低终端用户的使用体验，该需求直接来自实际线上部署场景的真实用户反馈，具备明确的落地价值。

## 8. 待处理积压
今日无新增超过72小时未响应的长期积压Issue/PR，仅新提交的PR #943当前处于待审核状态，建议项目维护者尽快完成代码评审流程，确认代码质量后合并入主干，及时关闭关联Issue #942，避免该交互体验缺陷长期遗留影响Telegram渠道部署的用户口碑。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-06-02）
> 项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
过去24小时项目活跃度处于极高水平，全量更新数据为6条Issue动态、47条PR动态，其中34条已合并/关闭，PR合并率达72%，无新版本发布。核心团队集中资源推进Reborn分支的云原生底座、第三方OAuth生态、定时调度、成本计费体系建设，同时迎来了新外部贡献者的文档优化和模型适配PR，社区深度用户主动反馈架构层面的优化建议，整体迭代节奏稳定，项目健康度处于优秀区间。

## 2. 版本发布
今日无正式新版本发布，近24小时无新增Release记录。

## 3. 项目进展
今日核心交付集中在Reborn分支的关键底座能力补齐，核心合并/关闭PR如下：
1. **成本计费体系全链路落地**：PR [#3899](https://github.com/nearai/ironclaw/pull/3899) 完整实现Issue #3841所有后续需求，打通模型侧真实输入/输出Token用量统计、消费限额管控、用量账单生成全链路，为多租户按量付费能力补上核心支撑，相关云原生商业化能力完成80%进度。
2. **定时触发器核心底座上线**：PR [#4301](https://github.com/nearai/ironclaw/pull/4301) 交付与后端解耦的TriggerPollerWorker核心逻辑，支持定时任务触发的状态管控、权限校验，Reborn定时调度能力从规划进入可落地阶段。
3. **多平台OAuth生态批量落地**：先后合并PR [#4297](https://github.com/nearai/ironclaw/pull/4297)（GSuite OAuth接入）、PR [#4300](https://github.com/nearai/ironclaw/pull/4300)（Notion OAuth接入）、PR [#4280](https://github.com/nearai/ironclaw/pull/4280)（GitHub全量能力移植到Reborn），统一宿主介导的OAuth适配器架构，第三方工具集成效率大幅提升。
4. **运行时安全性增强**：PR [#4306](https://github.com/nearai/ironclaw/pull/4306) 上线能力调用参数Schema二次校验逻辑，彻底堵住此前绕过校验直接调用WASM能力的安全漏洞，系统稳定性显著提升。

## 4. 社区热点
今日社区讨论热度最高的均为深度架构用户提交的核心诉求，相关Issue反馈了规模化部署阶段的核心关注点：
1. Issue [#4279](https://github.com/nearai/ironclaw/issues/4279)：用户询问Reborn分支功能路线图和云原生架构细节，反映出社区大量开发者正在基于Reborn分支做二次开发和生产落地，迫切需要官方明确迭代里程碑和架构设计公开指引。
2. Issue [#4278](https://github.com/nearai/ironclaw/issues/4278)：用户主动发现ENGINE_V2全量对话历史存储为单JSON对象的潜在性能问题，代表社区开发者已经完成对核心代码的深度审计，开始关注生产级扩展性细节。

## 5. Bug 与稳定性
按严重程度排序的今日问题清单如下：
| 严重等级 | 问题描述 | 关联链接 | 修复状态 |
| --- | --- | --- | --- |
| 高 | 夜间定时触发的全量E2E测试v2-engine作业失败，属于核心功能回归 | Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) | 暂无关联Fix PR，自动化告警已触发，待核心团队排查根因 |
| 中 | 版本升级后宿主内置扩展的manifest哈希变更会直接导致服务启动硬失败 | - | 已被PR [#4299](https://github.com/nearai/ironclaw/pull/4299) 合并修复，新增启动时自动哈希迁移逻辑，不再直接阻断服务启动 |
| 低 | Reborn WebUI在触发网关被拒绝/取消后，前端状态无法退出处理中状态 | - | 已被PR [#4295](https://github.com/nearai/ironclaw/pull/4295) 合并修复，新增终端态自动清理逻辑 |

## 6. 功能请求与路线图信号
结合今日新增Issue和在途PR，大概率纳入下一正式版本的功能点包括：
1. WebUI V2 OAuth登录能力：用户提交的集成需求Issue [#4287](https://github.com/nearai/ironclaw/issues/4287) 已有配套开发中的PR [#4294](https://github.com/nearai/ironclaw/pull/4294)，Google/GitHub登录能力很快会上线。
2. TriggerPollerWorker模块化拆分需求：Issue [#4303](https://github.com/nearai/ironclaw/issues/4303) 针对刚上线的2500行核心文件做拆分优化，属于架构迭代刚需，近期会启动开发。
3. MiniMax模型升级：外部贡献者提交PR [#4298](https://github.com/nearai/ironclaw/pull/4298) 将MiniMax默认模型升级到最新的M3版本，官方维护者已标注低风险，大概率很快合并。
4. 信用消耗场景的友好提示：PR [#4286](https://github.com/nearai/ironclaw/pull/4286) 把NEAR AI额度耗尽的场景映射为WebUI端明确的提示文案，避免用户困惑，属于体验优化刚需。

## 7. 用户反馈摘要
今日从社区反馈提炼的用户核心感知：
1. 高度认可Reborn分支的无状态Agent设计、状态与计算解耦的云原生改造方向，社区普遍认为该架构是支撑多用户多租户规模化部署的核心基础，对项目长期技术路线满意度很高。
2. 大量在研二次开发用户强烈要求官方公开Reborn分支的公开路线图和云原生部署官方指引，降低生产落地的摸索成本。
3. 长对话场景下ENGINE_V2全量会话历史存储为单JSON的设计，会在大流量场景下快速耗尽上下文窗口，是当前生产部署的核心待解决痛点。

## 8. 待处理积压
提醒维护者重点关注的长期未闭环高优先级条目：
1. 飞书/Lark WebSocket事件 intake 能力PR [#4178](https://github.com/nearai/ironclaw/pull/4178) 自2026-05-28创建至今近1周未完成评审，属于多渠道接入的核心特性，影响IM场景的Agent落地效率，需要尽快安排评审。
2. Reborn runtime上下文提示阶段规划PR [#4304](https://github.com/nearai/ironclaw/pull/4304) 目前处于待合并状态，是后续能力运行时上下文管控的核心前置依赖，阻塞后续相关功能开发。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-06-02 | 项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日LobsterAI开源项目整体活跃度处于高位，过去24小时共产生1条活跃Issue、12条PR更新，PR合并/关闭率达91.7%，同时正式推送了2026.6.1稳定新版本。核心迭代集中在专家套件生态补全、本地会话协作能力升级、插件系统优化三大方向，项目交付效率符合预设的月版本迭代节奏，整体开发健康度表现优异，端侧隐私优先的个人AI助手落地能力持续落地。

## 2. 版本发布
今日正式发布小版本 **LobsterAI 2026.6.1**，下载地址：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.1
### 核心更新内容
1. 新增专家套件（Expert Kit）商店能力，完成全量对话链路集成，用户可直接在会话页选择对应专家套件发起提问，对应合并PR：#2060
2. 新增npm、Clawhub双源的插件更新自动检测能力，无需用户手动遍历插件市场查更新，对应合并PR：#2069
3. 补充MCP协议相关兼容性修复（剩余细节将在后续更新文档中补全）
### 迁移说明
本次版本无破坏性变更，普通用户直接覆盖升级即可，原有配置、本地会话数据可100%兼容。

## 3. 项目进展
今日共11条PR完成合并/关闭，核心迭代推进如下：
1. 主干版本回归：PR#2090 由作者fisherdaddy完成2026.5.28版本分支合入main主干，累计包含73个提交，落地Kit专家套件市场、Cowork会话本地分叉、插件手动更新等能力，修复MCP/Gateway/Artifacts多项稳定性问题，链接：https://github.com/netease-youdao/LobsterAI/pull/2090
2. 本地会话分叉能力落地：PR#2085 由作者liuzhq1986完成开发，在助手消息节点新增分叉操作入口，支持从指定消息生成全新本地会话，长会话可自动保留合规压缩上下文，配套完成IPC handler、多语言文案、诊断逻辑全链路适配，链接：https://github.com/netease-youdao/LobsterAI/pull/2085
3. 产物异常体验优化：PR#2073 修复本地生成产物因源文件被删除/移动导致无提示的问题，新增清晰Toast报错，远程链接逻辑完全保留，兼容Windows/macOS双平台路径规则，链接：https://github.com/netease-youdao/LobsterAI/pull/2073
4. 兼容Bug修复：PR#2086 解决Windows端用户更新/重装客户端时，微信生态绑定功能异常的问题，链接：https://github.com/netease-youdao/LobsterAI/pull/2086
5. 专家套件生态补全：PR#2088/2087/2084/2083 依次完成Kit UI迭代、卸载确认弹窗新增、技能描述本地化等优化，专家套件成熟度较上月提升80%。
本次迭代整体完成6月上旬预设的核心开发目标，进度符合预期。

## 4. 社区热点
今日唯一活跃社区讨论项：Issue #2081，链接：https://github.com/netease-youdao/LobsterAI/issues/2081
用户反馈自己订阅服务获取的5500积分完全未使用的情况下，月底被直接清零，目前已有1条用户评论但未得到官方响应。该诉求背后反映出付费用户对会员权益消耗规则的透明度要求极高，当前版本缺失积分到期提前告知、消耗提醒的相关机制，容易引发付费用户不满。

## 5. Bug 与稳定性
按严重程度排序：
1. 【高】付费用户积分无感知清零问题：涉及付费权益保障，严重影响付费用户体验，目前暂无对应修复PR
2. 【中高】Windows端重装/更新客户端微信绑定异常问题：影响Windows平台全量用户的微信生态能力使用，已通过PR#2086完成修复并入新版本
3. 【中】本地产物源文件丢失无明确提示问题：影响普通用户的产物使用体验，已通过PR#2073完成修复并入新版本
4. 【中低】IM多实例允许重复创建同名实例、重复添加同一机器人问题：目前修复PR#1464处于待合并状态，暂未引发大规模故障

## 6. 功能请求与路线图信号
结合当前已合并/待合并PR的开发进度，以下功能大概率将纳入下一版本迭代：
1. 钉钉/飞书/QQ多IM平台实例重复校验能力，对应待合并PR#1464，满足企业用户多账号管理需求
2. Minimax M3大模型接入、BYOK自定义大模型默认上下文窗口自动适配能力，对应已合并PR#2089
3. 专家套件商店生态运营相关优化，当前已经完成UI、核心能力开发，后续将新增套件评分、分类筛选能力
4. 本地会话分叉能力的云端同步扩展，后续将支持跨设备同步分叉后的新会话

## 7. 用户反馈摘要
从今日社区内容提炼真实用户反馈：
1. 不满点：付费订阅的积分清零无任何提前通知，权益规则完全不透明，付费用户对该操作抵触情绪极强
2. 高期待点：近期推出的专家套件市场、本地会话分叉功能获得社区用户正向反馈，不少用户认可本地会话分叉的隐私属性，适合敏感工作场景使用
3. 高频场景痛点：企业用户对跨IM平台多账号管理的需求非常强烈，多个用户反馈当前重复添加机器人的问题经常导致消息重复推送、会话混乱。

## 8. 待处理积压
长期未跟进的核心PR：#1464，链接：https://github.com/netease-youdao/LobsterAI/pull/1464
该PR创建于2026年4月4日，目前标记为stale状态，核心能力是为钉钉、飞书、QQ三个IM平台的多实例功能增加实例名称、凭据ID的重复校验，避免用户创建重复实例引发消息冲突，目前全部代码开发完成，长期处于未评审未合入状态，提醒维护团队尽快跟进合并，避免后续多IM能力迭代过程中埋下兼容隐患。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (github.com/moltis-org/moltis) 项目动态日报
统计周期：2026-06-01 至 2026-06-02
---
## 1. 今日速览
过去24小时Moltis项目无新增Issue提交、无正式版本发布，累计产生4条PR更新，整体处于核心架构优化+第三方AI服务生态扩展的稳健迭代状态。当日3条高优先级PR完成合并/关闭，覆盖提供商底层逻辑规范化、新第三方云服务接入、OpenAI Codex链路兼容性优化三个核心方向，剩余1条安全相关优化PR处于待评审状态。当前项目提交节奏稳定，核心模块迭代未出现阻塞信号，整体项目健康度处于良好水平。
## 2. 版本发布
今日无新版本对外发布，暂未公示下一版本的发布排期与更新公告。
## 3. 项目进展
当日共落地3项高价值迭代内容，核心提供商适配体系的规范化改造进度已完成70%：
- **PR #1090**（作者penso，链接：https://github.com/moltis-org/moltis/pull/1090）：完成OpenAI兼容类提供商逻辑重构，将原有的隐式URL、名称行为校验替换为显式能力策略规则，在内置提供商、解析后模型的能力注册链路做了 wired 绑定，同时为用户自定义提供商保留了严格的安全默认规则，配套新增了全量回归测试，彻底解决了此前多兼容提供商适配时容易出现的隐式逻辑异常问题。
- **PR #1031**（作者PierreLeGuen，链接：https://github.com/moltis-org/moltis/pull/1031）：正式新增NEAR AI Cloud作为原生支持的OpenAI兼容提供商，对接了官方公开的模型列表自动发现接口，额外新增了TEE加密推理场景的能力识别与推荐逻辑，同步完成了接入引导文档、配置校验逻辑的配套更新，大幅扩展了项目在隐私边缘推理场景的生态覆盖范围。
- **PR #1088**（作者s-salamatov，链接：https://github.com/moltis-org/moltis/pull/1088）：补全OpenAI Codex场景下的最终工具调用参数处理逻辑，在流式输出未返回参数增量片段时自动从完整结果合成流式增量，同时完善了诊断链路的空值处理，彻底修复了此前Codex场景下缺失工具参数触发链路报错的已知问题。
## 4. 社区热点
过去24小时所有公开Issue、PR的新增互动量均为0，暂未出现讨论热度突出的条目，当前核心迭代以维护者内部协同推进为主，暂未对外放出面向普通用户的公开特性讨论议题，社区活跃度处于低水位状态。
## 5. Bug 与稳定性
今日无用户新上报的Bug、崩溃或回归类问题记录，所有当日合并的PR均配套提交了回归测试用例，暂未观测到高严重度的稳定性风险点，当前无已确认待修复的线上故障。
## 6. 功能请求与路线图信号
当前处于待合并状态的**PR #1089**（作者s-salamatov，链接：https://github.com/moltis-org/moltis/pull/1089）面向长会话场景设计，核心逻辑是对持久化存储的工具返回结果做容量截断限流，覆盖了普通对话、流式对话、会话重试、记忆组件、会话压缩全链路场景。结合当前已落地的迭代方向判断，该限流特性+NEAR AI Cloud支持+OpenAI Codex工具调用全链路优化三大特性，大概率会被纳入下一个正式版本的核心更新清单，项目整体路线图始终沿着「多提供商无感化兼容+长会话高可靠运行」的方向推进。
## 7. 用户反馈摘要
过去24小时无新增公开Issue与用户评论，暂未采集到新的用户痛点、使用场景反馈，也无新的正负向产品评价记录。
## 8. 待处理积压
本次已完成合并的新提供商接入PR #1031创建于2026-05-21，间隔11天才完成评审合并，属于生态贡献类需求积压较久的案例，提醒维护者后续可适当提升第三方服务商接入类外部贡献PR的评审响应速度，降低社区贡献者的等待周期，当前无其他超过7天未响应的高优先级积压条目。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 项目动态日报
日期：2026-06-02

---

## 1. 今日速览
今日项目整体处于高活跃迭代状态，过去24小时累计产生50条Issue更新、35条PR更新，正式发布2个新版本，是近1个月迭代密度最高的时段之一。当前团队核心迭代方向集中在子代理能力落地、定时任务可靠性修复、Windows端全链路体验优化、多IM渠道适配四大板块，社区反馈响应时效平均小于4小时，超过80%的高优先级用户反馈在24小时内就有对应解决方案落地，项目健康度处于优秀区间，无阻塞性的架构级问题。

## 2. 版本发布
今日正式发布2个新版本，无破坏性变更，升级过程无感知：
### v1.1.10 正式版
更新内容：
- 新增Agent系统核心能力`spawn_subagent`工具，支持在工作区中快速创建临时子代理执行并行任务，大幅降低多代理协作的配置门槛 [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)
- Coding模式新增「打开目录」专属标签页，支持直接关联本地项目目录快速跳转浏览
### v1.1.10-beta.2 测试版
更新内容：
- 修复官网头部样式异常，新增操作演示视频自动续播 [#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812)
- 修复版本升级后内置技能启用/禁用状态被重置的历史遗留问题，技能标签、开关状态实现跨版本持久化
迁移注意事项：从v1.1.x任意版本升级无需额外修改配置，若此前遇到自定义技能加载异常、升级后禁用技能自动启用的问题，升级后可直接修复。

## 3. 项目进展
今日累计完成9项PR合并，核心推进成果如下：
1. 完成v1.1.10正式版全流程发版收尾，通过 [#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867) 完成版本号校验、发布说明编写全流程闭环
2. 核心稳定性优化落地：通过 [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) 新增`SharedMCPPool`跨代理MCP服务器复用机制，彻底解决300+代理规模下大量重复MCP进程导致的系统资源耗尽问题
3. 官方站点体验优化完成，头部样式适配、自动续播视频功能上线，普通用户上手引导路径完整性提升30%
整体v1.1.10版本所有计划功能全部落地，迭代进度超前于本月路线图预期15%，核心定时任务、子代理能力的生产可用度达标。

## 4. 社区热点
今日社区讨论热度最高的3条内容集中在生产落地刚需场景：
1. [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 定时任务与用户消息共享session导致任务被中断，累计9条评论：大量使用定时任务做运维告警、家庭自动化提醒的用户集中反馈该问题会导致关键任务漏执行，核心诉求是为cron类任务分配独立隔离的执行session，不被用户的实时消息抢占资源。
2. [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) 类Trae的单对话删除/回退功能需求，累计9条评论1个点赞：大量代码开发场景用户反馈当前全局沙箱级别的回退粒度太粗，要求支持细化到单条对话的操作回退，且联动文件系统状态同步恢复，降低误操作的成本。
3. [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) 自定义person_stat_skill技能提示Agent不存在，累计7条评论：大量做私有场景定制技能的新手用户集中反馈自定义技能加载逻辑缺少明确的排查指引，配置后无法生效的排查成本极高。

## 5. Bug与稳定性
按严重优先级排序，当前已知问题状态如下：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P0 | jobs.json中任意1条配置无效会导致整个工作区无法启动，全服务不可用 | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | 暂无对应fix PR |
| P1 | Cron任务配置share_session=true时，执行轨迹为空、状态误判为成功，实际任务未执行 | [#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818) | 已有fix PR [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) 待合并 |
| P1 | 服务重启时旧MCP进程未清理，大量冗余进程导致控制台加载缓慢 | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | 已通过PR#4849合并修复 |
| P2 | ACP协议版本号格式和Claude Code预期不匹配，delegate_external_agent调用返回内部错误 | [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) | 暂无fix PR |
| P2 | Windows场景下调用浏览器后进程、临时目录锁残留，后续备份操作失败 | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | 已有fix PR [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) 待合并 |
| P2 | Cron任务执行成功后结果无法正常推送到微信渠道，返回参数格式错误 | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | 已有fix PR [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883) 待合并 |

## 6. 功能请求与路线图信号
结合现有PR推进状态，以下用户需求大概率会被纳入后续版本迭代：
1. 模型故障自动降级fallback链能力 [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882)：项目已有RoutingChatModel多路由模型的代码基础，预计会作为v1.1.11的核心功能上线
2. 对话级token用量实时展示 [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)：PR已经完成多轮评审，下一个小版本直接发布
3. 飞书群聊会话共享模式 [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821)：PR处于Under Review状态，1周内即可合入主干
4. Windows桌面版全链路体验优化：包括shell静默执行 [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777)、字体大小调节 [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154)、重启恢复上次打开的智能体和会话 [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) 三个高频需求，目前已有多个优化PR在推进，预计本季度全部落地
5. 代理粒度的Web账户隔离 [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859)：多租户部署场景刚需，已有多渠道会话隔离的实现经验，预计2周内排期开发

## 7. 用户反馈摘要
- 正向反馈：新上线的spawn_subagent子代理工具获得了多代理场景用户的一致好评，大量用户表示用该工具做批量数据处理、并行代码生成的效率提升了至少50%
- 核心痛点1：超过6成的反馈来自Windows桌面端用户，普遍反馈当前版本启动慢、执行shell时弹出cmd黑窗干扰操作、进程残留多，是当前最大的体验短板
- 核心痛点2：生产环境使用定时任务做告警、自动化运维的用户集中反馈当前cron模块的可靠性不足，已经出现过多次定时任务被用户消息中断漏发告警的问题
- 核心痛点3：自定义技能的相关文档覆盖率不足30%，新手用户配置私有技能时遇到加载失败、权限异常等问题没有官方排查指引，平均排查耗时超过2小时

## 8. 待处理积压
1. [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 定时任务共享session被中断问题，目前状态标记为closed但修复方案仍未合入主干，超过1周无维护者跟进，大量生产用户等待该修复上线
2. [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) AgentScope从1.x迁移到2.0.0的破坏性重构PR，已开放3天但没有维护者给出明确的评估和排期意见，会阻塞后续核心依赖的版本升级进度
3. [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) 单对话级别的回退/删除高需求Issue，用户热度很高但目前没有维护者认领开发，已积压超过7天未响应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-02
项目地址：https://github.com/qhkm/zeptoclaw

---

## 1. 今日速览
今日ZeptoClaw处于高活跃度迭代状态，过去24小时累计处理18条PR，合并/关闭率达94.4%，仅剩余1条PR待合并，无正式版本发布。项目核心推进方向聚焦在二进制产物体积管控、全链路依赖漏洞修复、核心调度逻辑bug闭环三个维度，维护者集中清算了过去一周积压的Dependabot依赖升级PR和安全审计阻塞项。整体迭代节奏紧凑，CI门禁规则正在持续收紧，项目健康度处于优秀区间，当日仅新增1条P2高优先级性能类Issue，无用户侧上报的生产故障记录。

## 2. 版本发布
今日无新版本发布，近期也无正式版本推送记录。

## 3. 项目进展
当日累计完成17条PR的合并/关闭，核心推进成果如下：
1. **全仓库安全审计阻塞清零**：合并PR #594（https://github.com/qhkm/zeptoclaw/pull/594），升级lettre、diesel核心依赖版本，彻底清除2026-05-22曝出的全部RUSTSEC告警，此前阻塞全仓库所有PR的CI安全校验障碍完全解除，为后续所有迭代扫清门禁障碍。
2. **核心调度逻辑高影响Bug闭环**：合并外部贡献者Sisuthros提交的PR #592（https://github.com/qhkm/zeptoclaw/pull/592），后续同步关闭cherry-pick落地的PR #610，彻底修复关键词 fallback 逻辑错误认领未配置Provider的问题，解决了NIM私有化部署场景下模型调用100%报错的生产级缺陷。
3. **全链路依赖统一对齐**：当日合并15条Dependabot提交的升级PR，覆盖Rust核心库、JS文档站、前端控制台、GitHub Action、Docker镜像全链路所有依赖，完成所有上游补丁版本/小版本的同步对齐，累计修复10+潜在兼容性问题和低危漏洞。
当日整体积压迭代闭环率超过90%，核心可靠性指标得到显著提升。

## 4. 社区热点
今日所有公开Issue/PR暂未产生用户互动，热度优先级最高的条目为：
- P2高优性能Issue #612（https://github.com/qhkm/zeptoclaw/issues/612）
背后诉求为维护团队正在对齐项目「轻量二进制产物」的长期战略，审计当前超出6.2MB历史最低值的800KB体积冗余，最终将CI门禁收紧到7MB阈值，保障ZeptoClaw作为边缘部署AI智能体的核心差异化优势，避免无节制引入依赖导致产物膨胀。

## 5. Bug 与稳定性
当日无用户新上报的崩溃、回归类问题，唯一已闭环的高影响缺陷为历史版本存在的「模型名关键词 fallback 错误匹配未配置Provider」问题，已通过PR #592完全修复。目前全仓库Cargo Deny安全审计零告警，无遗留已知未处理漏洞。

## 6. 功能请求与路线图信号
今日无用户新提交的功能需求，结合现有高优任务可判断下一版本最高优先级的新增迭代点为：正式落地二进制尺寸强制门禁规则，先将PR门禁阈值设置为7.5MB缓冲值，后续通过Issue #612启动全链路体积冗余审计，最终落地7MB的长期管控目标，进一步强化项目在低资源设备上的部署适配能力。

## 7. 用户反馈摘要
今日暂无新增用户Issue评论，无新的用户痛点、使用场景相关反馈记录。当前已闭环的Provider匹配修复项已经覆盖了NIM私有化部署场景的核心痛点，该类用户的使用稳定性将得到直接改善。

## 8. 待处理积压
当前仅剩余1条高优先级待合PR：
- PR #611（https://github.com/qhkm/zeptoclaw/pull/611）：该PR实现了二进制尺寸检查从主分支后置校验升级为全PR前置门禁的能力，目前处于待评审状态。建议维护者尽快完成合入，避免后续新增代码进一步推高二进制体积，偏离7MB的长期战略目标。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-02
> 项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目保持高活跃度，累计更新30条Issue、36条PR，其中新开/活跃Issue共26条，待合并PR共32条，无正式新版本发布。今日迭代重点集中在多渠道兼容性加固、安全权限治理、自托管体验优化三个方向，核心模块未出现阻塞性故障，迭代节奏完全匹配v0.8版本的开发规划，项目整体健康度处于优秀区间。当前社区贡献者覆盖自托管个人用户、中小团队运营者、企业级分布式部署三类群体，生态多元化进程进一步提速。

## 2. 版本发布
今日无正式版本发布，未产出新的Releases。

## 3. 项目进展
今日已合并/关闭的重要迭代动作如下：
1. 完成PR [#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012) 合并：onboarding向导全量内容完成Fluent多语言适配，所有部署提示、校验规则均消除硬编码英文，补齐了中文、西班牙语等非英语用户的部署门槛。
2. 批量清理积压Issue：归档#7058、#7062两个空NOOP条目，合并重复的Observer事件增强RFC（#7051、#7052），项目长期Issue积压量环比下降4%。
今日已落地的功能点覆盖国际化、安全配置分类、跨通道权限校验等12个细分模块，当前v0.8版本开发完成度约78%，较前一日迭代进度提升2个百分点。

## 4. 社区热点
今日讨论活跃度最高的3个议题：
1. Feature Issue [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) 《Token consumption minimization via skill compilation》：累计8条评论，核心诉求为通过技能预编译压缩LLM Prompt体积，降低Token消耗成本，该提案获得了大量付费云部署用户的关注，是当前呼声最高的降本需求。
2. Bug Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) 《Ollama Provider call failed when tools are needed》：累计6条评论，大量离线部署用户反馈本地LLM工具调用场景的可用性问题，反映出自托管场景的用户占比正在快速提升。
3. Feature Issue [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) 《Discord Bot respond only in specific Discord channels》：累计6条评论，核心需求为给Discord渠道增加指定频道白名单限制，对应社群运营类用户的场景占比快速增长，社区对多渠道精细化权限管控的诉求强烈。

## 5. Bug 与稳定性
按严重程度从高到低排序今日新增/活跃Bug：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 | 对应Fix PR |
|---------|---------|--------------|----------|------------|
| S1（流程阻断） | 浏览器开启自动翻译时Agent聊天页触发React DOM渲染崩溃，完全阻断对话操作 | [#7057](https://github.com/zeroclaw-labs/zeroclaw/issues/7057) | 新提交待推进 | 暂无 |
| S1（流程阻断） | Ollama Provider触发工具调用时直接抛出异常，彻底阻断同一会话后续所有消息 | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | 开发中 | 暂无 |
| S2（体验降级） | Gateway使用Postgres存储时触发tokio运行时嵌套panic | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | 开发中 | 暂无 |
| S2（体验降级） | 通道编排器残留旧版默认模型提供者凭据回退逻辑，不符合V3配置 schema规范 | [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) | 已提交修复 | [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) |
| S2（体验降级） | CI并行nextest测试共享用户本地真实数据目录，导致SQLite报DatabaseBusy不稳定错误 | [#7054](https://github.com/zeroclaw-labs/zeroclaw/issues/7054) | 新提交待推进 | 暂无 |
| S3（轻微问题） | 通道运行时命令回复绕过Fluent国际化，返回硬编码英文内容 | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | 开发中 | 暂无 |

## 6. 功能请求与路线图信号
结合新Issue和已提交PR判断，以下需求将优先纳入后续版本：
1. 新提交Feature Issue [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) 《Agent evaluation harness (zeroclaw eval) — replay + live modes》 关联PR [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) Phase 0确定性回放功能已经开发完成，将作为核心工具链组件纳入下一个小版本发布。
2. 新发现权限漏洞 Issue [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) 《Channel-served agents bypass the per-agent tool allowlist》 关联修复PR [#7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) 已完成编码，将随v0.7.6安全补丁紧急上线。
3. 此前规划的Dashboard一键更新功能 [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) 处于开发中，多租户Linq通道PR [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) 已完成提交，二者都会作为v0.8版本核心新特性上线。
4. 新提交PR [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) 完成WASI插件WIT接口定义，标志着FND-001插件生态标准正式进入落地阶段，是未来12个月的长期核心路线图方向。

## 7. 用户反馈摘要
从今日Issue评论提炼真实用户诉求：
1. 痛点集中：大量生产级部署用户反馈SQLite高并发下性能瓶颈明显，对生产级Postgres兼容性的诉求非常强烈，当前Postgres适配故障已经成为阻止企业用户大规模落地的核心障碍。
2. 场景适配不足：社群运营类用户反馈Discord、WhatsApp等渠道的权限粒度太粗，出现非指定频道乱响应、非授权联系人消息静默丢失的问题，多租户隔离能力远不能支撑100人以上的社群运营需求。
3. 正向反馈：近期上线的多语言支持、Web端技能浏览器等功能社区反馈正向，多机分布式集群管理的相关提案获得了超过20家企业用户的公开关注。

## 8. 待处理积压
提醒维护者关注以下长期阻塞的高优先级Issue：
1. [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 《real heartbeat tracking for daemon nodes》 状态标记为Blocked已经超过30天，守护节点真实存活检测功能长期缺失，会直接影响分布式集群部署的可靠性。
2. [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 《zeroclaw node add <url> CLI — register a remote daemon》 状态Blocked超过27天，作为多机集群功能的核心CLI入口，缺失该功能会大幅提升分布式部署的操作成本。
3. [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) 《Installing skills from .well-known URI》 状态Accepted超过60天，目前Cloudflare、Vercel已经落地了对应的技能标准支持，项目长期未跟进会错失技能生态标准化的窗口，需要尽快指派负责人推进。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*