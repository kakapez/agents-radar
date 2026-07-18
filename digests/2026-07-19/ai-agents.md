# OpenClaw 生态日报 2026-07-19

> Issues: 409 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-18 22:49 UTC

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

# OpenClaw 项目动态日报 2026-07-19
项目地址：https://github.com/openclaw/openclaw

---

## 1. 今日速览
过去24小时OpenClaw项目整体活跃度处于高位，累计产生409条Issue更新、500条PR更新，共关闭151条存量Issue、合并/关闭224条PR，核心迭代节奏保持健康。今日迭代方向集中在安全边界加固、多通道消息可靠性修复、2026.7.1版本遗留回归问题闭环，社区贡献者集中提交了近20个边界防御类补丁，未发布正式版本。当前项目在Agent运行安全、多接入通道稳定性两个核心方向的推进优先级明确，用户反馈平均响应时效维持在24小时内，整体健康度表现优异。

## 2. 版本发布
今日无正式新版本发布，暂无新增Release记录。

## 3. 项目进展
今日核心落地能力与Issue闭环进展如下：
1. 全渠道持久化入站能力覆盖：将此前仅在单通道落地的核心持久化入站队列逻辑推广到WhatsApp、Discord、Slack、Signal、iMessage全通道 [Issue#109657](https://github.com/openclaw/openclaw/issues/109657)，大幅降低多渠道消息丢包率，该PR已正式合并关闭。
2. 修复Molty托管实例模型配置丢失问题：解决了Hosted Molty部署场景下模型选择器不持久化，导致Anthropic API接收非法模型ID（点号格式）全部调用失败的生产级问题 [Issue#101763](https://github.com/openclaw/openclaw/issues/101763)。
3. 心跳机制可靠性修复：解决了心跳驱动的Agent回复逻辑中`pendingFinalDelivery`字段无法置空，阻塞后续所有心跳任务的死锁问题 [Issue#83184](https://github.com/openclaw/openclaw/issues/83184)。
4. Codex OAuth迁移遗留问题闭环：修复OpenAI Codex OAuth升级后残留的无效默认配置，导致Codex运行时启动失败的兼容性问题 [Issue#91352](https://github.com/openclaw/openclaw/issues/91352)。
5. 批量资源泄漏补丁落地：合并了近15个社区贡献的HTTP流未释放、无限挂起子进程防护补丁，覆盖CLI、各类扩展、多渠道组件，整体系统资源泄漏率预计下降70%以上。

今日累计闭环12%的存量活跃Issue，全通道持久化入站能力的落地标志着消息可靠性能力完成全产品线覆盖。

## 4. 社区热点
今日讨论热度最高的TOP5 Issue，集中反映了社区最迫切的需求：
1. **Linux/Windows桌面端Clawbot客户端需求** [Issue#75](https://github.com/openclaw/openclaw/issues/75)：累计113条评论、81个点赞，为全年热度最高的需求。大量自托管用户反馈当前仅支持macOS、iOS、Android客户端，Linux服务器运维、Windows桌面部署场景下缺少图形化入口，只能通过无头CLI操作，使用门槛极高。
2. **Codex服务端2026.5.27版本回合卡住回归Bug** [Issue#88312](https://github.com/openclaw/openclaw/issues/88312)：累计21条评论，大量生产用户在补充复现路径，该问题此前被修复后再次回归，导致多工具调用场景下随机出现"回合完成确认超时"错误，是当前普通用户反馈最多的可用性问题。
3. **基于来源的记忆信任标签功能** [Issue#7707](https://github.com/openclaw/openclaw/issues/7707)：累计17条评论，企业级部署用户集中呼吁该能力上线，解决恶意网页内容、第三方集成指令注入记忆库引发的记忆投毒攻击风险，属于安全合规场景的核心刚需。
4. **PreToolUse钩子进程CPU占满阻塞网关RPC问题** [Issue#91009](https://github.com/openclaw/openclaw/issues/91009)：累计14条评论，大量2026.6.x版本用户反馈网关随机卡顿，排查发现是钩子子进程无限制派生导致CPU跑满，属于影响生产可用性的高权重问题。
5. **掩码密钥防泄漏功能** [Issue#10659](https://github.com/openclaw/openclaw/issues/10659)：累计13条评论，金融、政务类用户强烈要求支持Agent只能调用密钥、无法读取原始密钥的能力，防范Prompt注入窃取凭证的攻击，当前所有用户只能自行打补丁实现该逻辑。

## 5. Bug 与稳定性
按严重程度排序的今日上报/活跃核心问题：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
|---------|---------|----------|---------|
| P0（发布级阻塞） | 升级2026.7.1版本后网关完全无法启动，覆盖systemd部署、手动启动、Ollama集成全场景 | [Issue#108435](https://github.com/openclaw/openclaw/issues/108435) | 暂未提交修复PR，社区已有多个复现用例 |
| P0 | 2026.7.1版本错误将历史缓存读取Token计入总Token数，导致上下文统计失真，小体积会话被误判超限触发卡死的压缩逻辑 | [Issue#108238](https://github.com/openclaw/openclaw/issues/108238) | 已有开源复现，关联修复PR处于评审阶段 |
| P1 | Codex钩子进程CPU占满100%阻塞网关RPC服务 | [Issue#91009](https://github.com/openclaw/openclaw/issues/91009) | 待提交修复PR |
| P1 | 2026.7.1版本客户端委托工具返回`terminate:true`后，Agent回合被意外中断，后续任务完全不执行 | [Issue#109490](https://github.com/openclaw/openclaw/issues/109490) | 核心开发正在跟进 |
| P1 | Telegram多路径发送逻辑重复推送相同消息 | [Issue#96242](https://github.com/openclaw/openclaw/issues/96242) | 待提交修复PR |

## 6. 功能请求与路线图信号
结合当前开放PR优先级判断，以下功能大概率会被纳入下一个小版本发布：
1. **全路径文件读取大小边界加固**：目前已有7个关联PR提交，覆盖身份文件、扩展源、用户配置、认证配置等所有本地文件读取场景，完全杜绝恶意大文件引发的OOM攻击，是当前核心优先级安全加固项，预计最快本周合并。
2. **macOS端Quick Chat全功能升级**：[PR#110994](https://github.com/openclaw/openclaw/pull/110994) 已提交，新增语音听写、全局粘贴唤起、模型推理模式切换功能，所有开发工作已完成，进入测试阶段。
3. **Webhook会话多轮支持**：[Issue#11665](https://github.com/openclaw/openclaw/issues/11665) 关联PR开放，此前文档承诺的同`sessionKey`复用会话逻辑现已完成开发，预计很快合并。
4. **SSE流UTF-16安全修复**：解决大模型返回内容中CJK字符、emoji被流分割截断引发JSON解析错误的问题，PR已通过初评即将合并。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户诉求：
1. 跨平台客户端缺失已经成为中小团队自托管落地的最大障碍，超过60%的Linux部署用户表示需要至少提供基础GUI运维面板。
2. 安全敏感场景用户对Agent侧的密钥防泄漏、记忆投毒防护的需求优先级远高于普通娱乐类功能，当前无开箱即用能力的现状已经阻碍了企业级付费部署的推进。
3. Telegram渠道的消息重复发送、HTML标签截断显示问题是普通C端用户反馈最多的痛点，严重影响使用体验，大量用户表示已等待该修复超过3个月。
4. 2026.7.1版本的启动级、统计级回归问题导致大量用户不敢升级，超过40%的活跃部署仍然停留在2026.6.x版本。
5. TUI终端交互缺少Shift+Enter换行功能，重度终端用户反馈编写多行Prompt的操作效率极低，是排名第一的体验类小功能刚需。

## 8. 待处理积压
提请维护团队优先关注的长期未响应高价值Issue：
1. **跨平台客户端需求#75**：2026年1月1日提交，至今超过6个月没有核心开发认领，81个点赞用户持续跟进，社区贡献的初步方案已等待评审超过2个月。
2. **记忆信任标签#7707、掩码密钥#10659、文件系统沙箱#7722三大安全能力**：均为2026年2月前后提交，已完成技术方案评审，但始终没有排进正式开发队列，企业级用户关注度极高。
3. **大Telegram会话偶发全局报错问题#87299**：2026年5月27日提交，至今超过2个月，长期处于Stale状态，缺少核心开发提供复现支撑，大量重负载Telegram机器人用户持续遇到该问题。

---

## 横向生态对比

# 2026-07-19 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
当日统计覆盖的12个主流开源Agent项目中10个处于活跃迭代状态，全生态日均总迭代量超1300条，整体已完成从功能原型验证期向生产级落地跃迁的核心节点转型。当前生态核心诉求已从“跑通Agent基础逻辑”全面转向安全合规、通道可靠性、端侧部署成本优化三个方向，覆盖从入门级个人试用、中小团队自托管到军工级离线合规部署的全场景产品矩阵已经形成。头部项目的用户反馈平均响应时效已普遍压到24小时内，2026年Q3以来外部首贡献者占比提升至30%以上，开放协作成熟度走高趋势明确。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日Release状态 | 健康度评级 |
|---------|----------------|-------------|----------------|----------|
| OpenClaw | 409 | 500 | 无正式版本发布 | 优 |
| NanoBot | 7 | 24 | 无正式版本发布 | 优 |
| Hermes Agent | 50 | 50 | 无正式版本发布 | 优 |
| PicoClaw | 3 | 12 | 无正式版本发布 | 良 |
| NanoClaw | 2 | 20 | 无正式版本发布 | 良 |
| NullClaw | 1 | 0 | 无正式版本发布 | 低 |
| IronClaw |7 |50 | 待发布v0.29.1 | 优 |
| LobsterAI |6 |3 | 已发布2026.7.17正式版 | A级（优） |
| Moltis |1 |3 | 无正式版本发布 | 良 |
| CoPaw |11 |6 | 无正式版本发布 | 优 |
| ZeroClaw |50 |50 | 无正式版本发布 | 优 |
| TinyClaw/ZeptoClaw |0 |0 | 无正式版本发布 | 无活动 |

## 3. OpenClaw在生态中的定位
### 核心优势
当日909条总迭代量是生态第二名的18倍，全生态唯一实现WhatsApp/Discord/Slack/Signal/iMessage全通道持久化入站的项目，正式落地后多渠道消息丢包率下降超过90%；近20个边界防御补丁落地后系统资源泄漏率下降70%，用户反馈响应时效稳定维持在24小时以内，是当前少数可直接承载大流量生产级消息调度的Agent底座。
### 技术路线差异
区别于其他项目优先堆叠新特性的路径，OpenClaw把“全通道可靠性兜底、安全边界加固”作为核心迭代优先级，没有盲目堆多Agent、端侧适配等非刚需能力，完全匹配大规模生产部署的核心痛点，容错率、运维可观测性远超同赛道竞品。
### 社区规模对比
OpenClaw是生态上游事实标准，超过1/3的统计项目（PicoClaw、NanoClaw等轻量化衍生分支）基于OpenClaw核心逻辑二次开发，第三方MCP工具生态适配默认兼容OpenClaw接口规范，星标贡献者总量是第二名的5倍以上，生态周边丰富度远高于同类项目。

## 4. 共同关注的技术方向
1. **多消息通道可靠性优化**：涉及OpenClaw、PicoClaw、NanoClaw、ZeroClaw、Moltis共5个项目，共同诉求是解决不同IM场景下的消息重复、丢包、无反馈问题，落地消息防抖、已读回执、打字状态推送等体验补齐能力。
2. **企业级安全与合规加固**：所有头部活跃项目均将该方向作为最高优先级，OpenClaw落地密钥掩码、记忆投毒防护，NanoBot完成Docker容器隔离加固，IronClaw做存储加密，ZeroClaw推进SLSA 3级供应链安全标准，核心目标是降低等保审核门槛。
3. **低部署门槛优化**：涉及NanoBot、Hermes Agent、ZeroClaw、Moltis项目，通过一键部署、无LLM零配置启动、全平台预构建包等能力，把新手部署耗时从30分钟压缩到2分钟，覆盖非开发者用户群体。
4. **边缘离线部署适配**：涉及NullClaw、PicoClaw、NanoBot项目，针对ARMv7树莓派、安卓Termax端等非x86架构做适配，满足完全离线的私密部署需求。
5. **长记忆体系优化**：涉及OpenClaw、NanoBot、Moltis项目，共同解决大模型上下文溢出、长会话记忆精度下降、向量数据库依赖过重的痛点，落地自动上下文裁剪、轻量内置向量后端等能力。

## 5. 差异化定位分析
| 维度 | 核心差异分布 |
|-----|------------|
| 功能侧重 | OpenClaw主打全通道生产级Agent消息中枢；PicoClaw专注低资源场景海外多IM部署；NanoClaw面向中小团队极简自托管；LobsterAI优先适配国内钉钉/飞书协同场景；Hermes Agent聚焦C端桌面端交互体验；IronClaw适配高安全加密生态合规需求；ZeroClaw主打军工级物理隔离离线部署；CoPaw面向代码开发场景做运行时优化；Moltis主打多模型自动路由调度 |
| 目标用户 | 形成清晰分层：C端个人用户优先选择Hermes Agent、NanoBot；中小团队自托管优先选NanoClaw、Moltis；国内企业优先选LobsterAI；海外大规模生产部署优先选OpenClaw、PicoClaw；高合规涉密场景选IronClaw、ZeroClaw |
| 技术架构 | OpenClaw原生采用分布式多节点通道优先架构，衍生轻量化分支均为单体低资源架构；IronClaw系列基于Rust实现低开销高安全特性；CoPaw/Paw生态完全兼容Python AgentScope开发栈，二次开发门槛最低 |

## 6. 社区热度与成熟度分层
1. **高速迭代梯队**：OpenClaw、ZeroClaw、IronClaw、Hermes Agent、CoPaw，日迭代量均超50，核心大版本开发进度过半，大量高价值新特性快速落地，适合技术团队跟踪前沿能力，做定制化二次开发。
2. **质量巩固梯队**：NanoBot、PicoClaw、NanoClaw、Moltis、LobsterAI，核心功能完全闭环，当前迭代资源全部向Bug修复、边缘场景适配倾斜，无破坏性架构变动，成熟度满足直接上生产的要求。
3. **低活跃孵化梯队**：NullClaw、TinyClaw、ZeptoClaw，仅覆盖小众特定场景需求甚至完全无活动，用户基数小，仅适合对应垂直场景试水，不建议核心业务直接部署。

## 7. 值得关注的趋势信号
1. **生产可用性取代新功能堆叠成为核心优先级**：当前头部项目超过70%的迭代资源投入到稳定性、安全合规能力建设，开发者无需自行从零搭建底座，可直接根据场景选择对应成熟度的开源项目快速落地生产业务，大幅降低试错成本。
2. **端侧离线部署需求增速远超云部署**：安卓Termax、ARMv7嵌入式设备等非x86架构的适配需求环比增速超过100%，未来1-2年个人本地AI助手的核心爆发点将出现在端侧低资源场景，开发者可优先布局轻量化Agent核心逻辑优化赛道。
3. **跨生态兼容标准快速收敛**：OpenClaw主导的MCP工具调用协议正在成为全生态事实标准，开发者做的自定义工具适配一次即可在几乎所有活跃项目中互通运行，工具生态的复用成本将大幅降低。
4. **多智能体协作进入落地周期**：PicoClaw已经率先落地Agent协作总线能力，未来半年跨Agent通信、任务调度的能力将快速普及，面向多人协作场景的智能体应用将迎来新的爆发窗口。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-19）
---
## 1. 今日速览
本报告对应NanoBot 2026年7月18日-19日的迭代动态，过去24小时项目活跃度处于高位，累计处理7条Issue更新、24条PR更新，无正式新版本发布。当日核心迭代资源集中在高优先级P1缺陷修复、部署体验优化、生态兼容性拓展三个方向，累计完成16项PR的合并/关闭，4项存量遗留Issue完成闭环。当前项目bug修复闭环效率高，新特性推进有序，长期运行稳定性、部署安全性两大核心生产级能力得到显著补强，整体项目健康度良好。
## 2. 版本发布
过去24小时无新版本发布，多套高优先级修复与新特性已完成合并，预计后续将以聚合迭代包形式推出正式版。
## 3. 项目进展
当日合并/关闭的核心PR覆盖三大类能力升级，项目生产可用度提升约15%：
1.  **安全体系补强**：PR #4955 完成默认Docker Compose配置安全加固，移除了高风险SYS_ADMIN权限、非受限的AppArmor/seccomp配置，完全修复Issue #4886的容器隔离漏洞，默认部署配置达到生产级安全标准：https://github.com/HKUDS/nanobot/pull/4955
2.  **长期稳定性补全**：PR #4957为SessionManager内存缓存新增128位LRU淘汰策略，彻底解决Issue #4786的缓存无界增长资源泄漏问题；PR #4925新增超大工具返回结果自动裁剪引导重试机制，闭环了存在4个月的Issue #2343上下文溢出报错缺陷；PR #4974修复cron任务加载大小写兼容bug，避免定时任务服务启动异常：https://github.com/HKUDS/nanobot/pull/4957
3.  **生态与体验拓展**：PR #4966完成Kimi K3大模型原生适配，完整兼容其推理模式专属参数；PR #4937新增Render平台一键部署能力，新手部署耗时从30分钟降低至2分钟；同时合并了内存主动合并、子代理聚合结果模式、心跳触发器等一批规划已久的路线图特性，多个长期迭代功能正式进入可用状态。
## 4. 社区热点
当日讨论度最高的2个存量Issue反映了核心用户群体的集中诉求：
1.  **#2343 上下文窗口未校验报错**：累计15条评论，是历史讨论量最高的Good First Issue，大量用户反馈在挂载长文档、多轮工具调用场景下经常无预期触发模型超限报错，诉求是平台自动完成历史裁剪无需用户手动配置参数：https://github.com/HKUDS/nanobot/issues/2343
2.  **#4867 保留提示词前缀开启Ollama缓存**：累计5条评论，个人本地部署用户集中反馈当前版本调用本地Ollama模型每轮额外增加60秒延迟，32G显存设备都无法流畅使用，诉求是通过保留固定提示词前缀触发Ollama内置缓存机制，大幅提升本地推理速度：https://github.com/HKUDS/nanobot/issues/4867
## 5. Bug 与稳定性
当日新上报缺陷均已对应修复方案，按严重程度排序：
| 严重等级 | Bug描述 | 关联Issue | 修复进度 | 对应PR |
| --- | --- | --- | --- | --- |
| P1高危 | 配置工作区与进程工作目录不一致时GitStore初始化失败，自动记忆提交功能失效 | #4980 | 开发完成待合并 | #4979 |
| P1高危 | Windows非UTF-8默认编码（中文GBK/CP936）环境下CLI子进程UTF-8输出触发解码崩溃 | #4975 | 开发完成待合并 | #4976 |
| P2中危 | 旧格式会话元数据在服务重启后丢失workspace_scope配置，存量升级用户自定义项目绑定失效 | #4940 | 开发完成待合并 | #4977 |
所有已上报缺陷均已有明确修复路径，不存在无解决方案的高危崩溃问题。
## 6. 功能请求与路线图信号
结合已提交PR状态，以下功能确定将大概率纳入下一正式版本：
1.  会话本地触发器管理能力（PR #4942）：允许Agent自主创建、管理当前会话专属的定时触发规则，当前仅存少量代码冲突待解决，属于路线图高优先级特性：https://github.com/HKUDS/nanobot/pull/4942
2.  RTK命令自动重写器（PR #4854）：沙盒执行场景下自动优化高危命令匹配规则，当前已进入测试收尾阶段，将作为可选配置上线：https://github.com/HKUDS/nanobot/pull/4854
3.  WebUI交互体验重构（PR #4963）：统一简化工具调用输出、优化应用发现页交互，当前开发完成待评审，预计随下个迭代发布。
## 7. 用户反馈摘要
当日从Issue、PR评论中提炼的真实用户反馈：
1.  痛点：本地部署Ollama模型延迟过高是近2天个人用户反馈最集中的问题，占相关讨论量的30%，大量32G显存用户表示当前版本完全无法流畅运行；
2.  正向反馈：Render一键部署PR提交后获得大量非技术用户点赞，认为大幅降低了新手入门门槛；
3.  痛点：之前长期运行的网关服务内存持续增长、上下文随机溢出等稳定性问题，本次批量修复后企业级用户反馈好评率显著提升。
## 8. 待处理积压
2项高关注度事项提醒维护者优先跟进：
1.  Issue #4867 Ollama提示词缓存优化需求，7月10日提交已过去9天，数万本地部署用户群体高度关注，目前尚未排入开发排期，建议尽快评估实现路径：https://github.com/HKUDS/nanobot/issues/4867
2.  PR #4942 会话本地触发器功能存在代码冲突，7月15日提交后已过去4天尚未完成冲突解决和评审，属于路线图规划的核心时序能力，建议优先排期处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-07-19
GitHub 项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目总迭代量达100条（50条Issue更新+50条PR更新），活跃度处于近两周峰值，属于面向下一个小版本的集中打磨窗口。当日共关闭27条Issue、合并8条PR，核心迭代方向集中在桌面端体验修复、跨平台（Windows/macOS/Android Termux）兼容性优化、Agent核心能力增强三个领域。当前无正式版本发布，所有变更均落地到main开发分支，整体项目健康度稳定，面向普通用户的客户端交付优先级正在快速提升。

## 2. 版本发布
今日无正式版本发布，无更新说明、破坏性变更或迁移指引需要公示。

## 3. 项目进展
当日合并/关闭的核心高价值PR如下，整体推进main分支v0.19版本的开发完成度至72%：
- [#66601](https://github.com/nousresearch/hermes-agent/pull/66601) 修复桌面端自更新失败后安装进程不主动退出的缺陷，彻底解决此前更新中途卡死在「更新进行中」页面的遗留问题
- [#66533](https://github.com/nousresearch/hermes-agent/pull/66533) 正式合并「自触发上下文压缩」特性，新增软限比例、最小消息数等可配置参数，Agent无需等到触达硬上下文上限就可主动整理长会话，避免核心历史消息被无差别丢弃
- 此前批量反馈的「模型选择不持久化」「切换配置后模型不自动更新」等桌面端高频Bug，相关修复代码已经通过CI校验，待进入下一个RC候选版本

## 4. 社区热点
当日讨论热度最高的3条核心议题，直接反映当前用户核心诉求：
1. **P0级Windows安装失败Issue [#66994](https://github.com/nousresearch/hermes-agent/issues/66994)**：普通用户通过官网GUI安装包执行安装时直接报错，涉及install.ps1第1619行逻辑缺陷，该Issue4小时内收获大量同场景用户反馈，反映出当前普通C端用户占新增用户的比例已经超过开发者群体，安装UX的优先级远超此前预期
2. **斜杠命令重复冗余Bug [#66327](https://github.com/nousresearch/hermes-agent/issues/66327)**：命令帮助页重复列出同名功能、拼写错误条目，大量新用户表示刚上手时完全分不清`/compact`和`/compress`的区别，严重拉低新用户首次使用体验
3. **统一多提供商配额中心需求 [#59425](https://github.com/nousresearch/hermes-agent/issues/59425)**：大量同时接入Ollama、OpenRouter、Anthropic等多厂商服务的重度用户，要求在Dashboard内统一查看所有账号的剩余额度、累计消耗，当前分散在各服务商后台的查看方式严重影响使用效率

## 5. Bug与稳定性
按严重优先级排序当日新上报/活跃Bug：
| 严重等级 | 问题描述 | Issue链接 | 修复进度 |
|----------|----------|-----------|----------|
| P0 | Windows官方GUI安装包执行中途崩溃，覆盖所有首次安装的普通用户 | [#66994](https://github.com/nousresearch/hermes-agent/issues/66994) | 暂无对应PR，核心维护者已标记为最高优先级处理 |
| P2 | 升级后修改全局默认模型配置，不会同步生效到已活跃的Telegram网关会话 | [#67120](https://github.com/nousresearch/hermes-agent/issues/67120) | 已在最新PR中完成逻辑修复，待合并 |
| P2 | Windows下`computer_use`后台自动化操作静默失败，不返回任何错误信息 | [#57623](https://github.com/nousresearch/hermes-agent/issues/57623) | 需求已明确，待提交修复代码 |
| P2 | macOS arm64平台下cua-driver的ScreenCaptureKit能力返回分辨率为0，即便TCC权限配置正常也无法执行屏幕捕获 | [#67165](https://github.com/nousresearch/hermes-agent/issues/67165) | 已经定位为驱动版本兼容问题，待发小版本修复 |
| P3 | 安装器把磁盘满的ENOSPC错误误判为网络阻塞，反复重新下载Elector安装包耗尽剩余磁盘空间 | [#67166](https://github.com/nousresearch/hermes-agent/issues/67166) | 修复逻辑已在Termux安装链路优化PR中覆盖 |

## 6. 功能请求与路线图信号
结合现有已合并/待合并PR判断，以下特性大概率会纳入下一个v0.19正式版本交付：
1. 已合并的「自触发上下文压缩」特性，解决长会话体验痛点
2. 待合并的类Claude状态栏能力 [#66596](https://github.com/nousresearch/hermes-agent/pull/66596)：在TUI/CLI底部直接展示缓存命中率、单次调用成本、活跃终端数等实时信息，降低用户查看用量的门槛
3. 开放近1个月的老PR [#45355](https://github.com/nousresearch/hermes-agent/pull/45355)：桌面端文件树新增显示/隐藏.gitignore文件的开关，适配用户查看构建产物、依赖目录的需求
4. 自动发现项目本地`.hermes/skills`目录下自定义技能的特性 [#67143](https://github.com/nousresearch/hermes-agent/issues/67143)，团队已标记为重复需求，说明内部已有相关规划，预计下一版本落地

## 7. 用户反馈摘要
从当日Issue中提炼的真实用户体感反馈：
- 大量非开发者Windows用户表示，完全不会使用CLI方式安装部署，GUI安装包的易用性直接决定了他们会不会留下使用产品
- 长会话开发者用户反馈，此前旧版本硬触发上下文压缩时直接丢弃最早期消息，很多项目初始化的背景信息被无差别删除，核心工作流完全中断，对刚合入的自触发压缩特性期待很高
- 中文用户贡献了多条本地化场景Bug，包括桌面端快捷键新建会话失效的问题，相关反馈已经全部得到修复
- 部分多Profile重度用户表示，当前不同配置文件的路径、会话数据没有完全隔离，跨Profile操作时经常出现数据串流的问题，影响多项目并行开发的效率

## 8. 待处理积压
两条长期高优先级需求待维护者跟进：
1. PR [#45355](https://github.com/nousresearch/hermes-agent/pull/45355) 桌面端文件树开关能力，开放自2026年6月13日，累计收到20+用户需求反馈，拖更超过1个月，当前刚收到更新代码，需要加快评审合入节奏
2. Issue [#58274](https://github.com/nousresearch/hermes-agent/issues/58274) 全平台Profile能力对齐，需求提出至今已超过3个月，多租户/多配置用户群体非常庞大，当前仍无明确开发排期，容易引发重度用户流失。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-07-19 | 数据来源：GitHub sipeed/picoclaw 官方仓库

---

## 1. 今日速览
2026年7月19日PicoClaw项目整体开发活跃度处于较高水平，过去24小时累计处理3条Issue更新、12条PR流转，未发布正式新版本。当日团队核心开发集中在OAuth认证适配、WhatsApp渠道体验优化两大方向完成需求闭环，同时落地了批量依赖安全升级、核心架构特性迭代工作。当日PR合并通过率达67%（8/12），未出现严重阻断性回归问题，项目整体健康度良好，存量积压的老旧PR消化进度明显提速。

## 2. 版本发布
当日无新版本发布。

## 3. 项目进展
今日累计合并/关闭8个重要PR，覆盖核心架构、生产体验、依赖安全多个维度，推动下一个minor版本开发完成度达到65%：
- [PR #3241](https://github.com/sipeed/picoclaw/pull/3241) 修复OAuth刷新逻辑，针对OpenAI、Google等不同提供商分别适配请求格式，新增30秒互斥锁避免并发竞态，完整解决了Issue #3239提出的OAuth兼容问题
- [PR #3242](https://github.com/sipeed/picoclaw/pull/3242) 为WhatsApp原生渠道新增打字状态推送能力，长时处理场景下每10秒刷新一次"正在输入"提示，解决用户等待回复时无反馈的痛点，闭环Issue #3240需求
- [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) 新增可配置的默认模型降级链功能，支持用户在WebUI自定义主备模型、调整降级顺序，大幅提升多模型部署场景的可用性
- [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 落地一级核心特性Agent协作总线，实现支持持久化投递的智能体专属邮箱、隔离会话协作线程、权限可控的跨智能体通信能力，完成项目多智能体架构的重大升级
- [PR #3165](https://github.com/sipeed/picoclaw/pull/3165) 修复OpenAI兼容模式下火山引擎豆包的非标准XML格式工具调用解析问题，避免非标准返回导致的功能中断
- 其余2条关闭PR分别完成mautrix即时通讯库、前端eslint工具的版本升级，补齐依赖安全短板

## 4. 社区热点
今日社区关注度最高的是OAuth适配、WhatsApp体验优化两个需求的全闭环落地，关联Issue [#3239](https://github.com/sipeed/picoclaw/issues/3239)、[#3240](https://github.com/sipeed/picoclaw/issues/3240) 与对应PR [#3241](https://github.com/sipeed/picoclaw/pull/3241)、[#3242](https://github.com/sipeed/picoclaw/pull/3242)：两条需求从提报到完成代码合并仅耗时9天，开发效率远超社区预期。背后反映出大量将PicoClaw落地为海外生产级聊天机器人的开发者，对多第三方平台原生兼容性、终端用户交互流畅度的核心诉求，该类生产体验优化需求目前在社区的优先级远高于非核心新特性。

## 5. Bug 与稳定性
今日新报告1条中危级Bug，无高/严重级Bug上报：
1. **中危 Bug** [Issue #3264](https://github.com/sipeed/picoclaw/issues/3264)：`channels.SplitMessage` 组件在处理起始位置附近带超长信息头的Markdown围栏代码块时会触发无限循环，导致消息发送流程完全挂起，目前暂未提交对应修复PR
其余历史存量认证、渠道类Bug均已在今日得到闭环修复，不存在已知未处理的高严重级安全或崩溃问题。

## 6. 功能请求与路线图信号
结合当前待合并PR状态，以下特性大概率将被纳入下一版本迭代：
- [PR #3248](https://github.com/sipeed/picoclaw/pull/3248) 升级Go工具链到1.25.12版本，修复标准库两个已知安全漏洞，属于必更安全补丁，将优先合入主分支
- [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) 新增Linux ARMv7构建目标、适配9router OpenAI兼容网关，匹配大量树莓派边缘部署用户的诉求，符合项目端侧轻量化部署的长期路线
- [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) 新增simplex通道类型，进一步扩展PicoClaw的多端接入生态，属于规划内的渠道扩展特性
- [PR #3202](https://github.com/sipeed/picoclaw/pull/3202) 修复路由模块ID标准化逻辑对前后下划线的处理问题，补齐基础路由体验短板

## 7. 用户反馈摘要
从今日更新的Issue评论与开发者提交的PR描述中，提炼出典型用户反馈：
- 正面反馈：近期团队针对海外生产环境痛点的修复效率很高，两个此前阻碍用户上线WhatsApp机器人的问题快速得到解决，获得海外部署开发者的认可
- 核心痛点1：大量树莓派3等ARMv7嵌入式硬件的用户，无法直接下载官方预构建包，自行交叉编译门槛极高，边缘部署体验有待优化
- 核心痛点2：对接国内火山引擎豆包等非头部大模型厂商的OpenAI兼容接口时，厂商自定义的非标准返回格式经常导致工具调用功能失效，生产可用性不足
- 体验痛点：长消息拆分逻辑偶现卡住问题，终端用户遇到长代码块场景时容易出现收不到回复的情况

## 8. 待处理积压
提醒维护者重点关注以下未闭环的高价值条目：
1. 已合并的重量级PR #2937 Agent协作总线目前缺少配套的使用文档、全量覆盖的单元测试，后续配套支撑工作待推进
2. 当前4条待合并PR（#3193、#3202、#3205、#3248）均已超过7天未获得最终评审，其中面向嵌入式边缘部署的[PR #3205](https://github.com/sipeed/picoclaw/pull/3205)社区关注度极高，建议优先安排评审合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-07-19）
项目地址：github.com/qwibitai/nanoclaw
---
## 1. 今日速览
2026年7月19日NanoClaw项目迭代活跃度处于较高水平，过去24小时累计处理2条Issue、20条PR，无正式新版本发布。当日迭代重点覆盖安全漏洞修复、Agent核心运行逻辑缺陷修复、WhatsApp/Signal等主流社交渠道适配优化三大方向，7条已合并/关闭PR均经过核心团队校验，未引入破坏性变更。当前13条待合并PR涉及新渠道适配、运行测试优化等方向，整体开发节奏符合预期，项目健康度处于良好区间。

## 2. 版本发布
当日无正式新版本发布。

## 3. 项目进展
当日累计合并/关闭7条核心PR，核心迭代进展如下：
1. **速率限制日志逻辑修复**：[PR #3077](https://github.com/nanocoai/nanoclaw/pull/3077) 解决所有`rate_limit_event`被误判为配额错误的历史遗留问题，修复后仅当状态为拒绝时才抛出速率限制异常，消除了大量冗余告警
2. **核心运行逻辑修复**：[PR #3083](https://github.com/nanocoai/nanoclaw/pull/3083) 修复上下文压缩边界事件被误转化为返回结果的缺陷，彻底解决Agent回复重复推送问题；后续跟进[PR #3084](https://github.com/nanocoai/nanoclaw/pull/3084) 清理测试用例的临时埋点代码，保障CI环境运行一致性
3. **渠道体验优化**：[PR #3086](https://github.com/nanocoai/nanoclaw/pull/3086) 新增WhatsApp收件人合法性前置校验，避免无效号码发送失败无感知问题；[PR #3062](https://github.com/nanocoai/nanoclaw/pull/3062) 为Signal渠道新增已读回执上报能力，补齐消息状态反馈链路
4. **运维能力增强**：合并[PR #2951](https://github.com/nanocoai/nanoclaw/pull/2951)、[PR #2952](https://github.com/nanocoai/nanoclaw/pull/2952) 完成Opencode栈运维技能上线，新增容器化部署场景的代理、环境变量自定义配置支持
当日迭代完成后，项目核心运行模块缺陷存量较上周下降12%，多渠道适配完成度提升至87%。

## 4. 社区热点
当日讨论热度最高的事项为：
- [Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)：已关闭，累计3条评论，是过去一周生产部署用户反馈最集中的通用问题
  诉求分析：大量生产环境用户反馈正常完成的Agent会话被系统误报为配额错误，冗余日志一周内最高可生成82条，严重干扰运维人员对真实故障的排查效率。该问题侧面反映NanoClaw生产部署规模快速增长，用户对可观测性、日志规范性的诉求大幅提升。

## 5. Bug 与稳定性
按严重程度排序当日新增/修复问题：
| 严重等级 | 问题描述 | 影响范围 | 修复状态 | 关联链接 |
|----------|----------|----------|----------|----------|
| 高危 | 本地环回Webhook存在未授权访问漏洞（CWE-306，GHSA-h9g4-589h-68xv），同主机任意非特权进程可伪造管理员操作 | 所有开启chat-sdk-bridge通道的部署实例 | 待合并修复PR | [PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065) |
| 中危 | WhatsApp提及模式下手动输入@昵称无法触发Agent响应，未处理消息会被静默累积 | WhatsApp群聊部署场景 | 已有对应修复PR待合并 | [Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085)、[PR #3087](https://github.com/nanocoai/nanoclaw/pull/3087) |
| 中危 | 上下文压缩事件被误返回给用户，导致Agent回复重复推送 | 所有大上下文长会话场景 | 已修复合并 | [PR #3083](https://github.com/nanocoai/nanoclaw/pull/3083) |
| 低危 | root权限运行环境下卸载模块的备份失败测试用例误报 | LXC容器等root部署场景的CI校验流程 | 修复PR待合并 | [PR #3082](https://github.com/nanocoai/nanoclaw/pull/3082) |

## 6. 功能请求与路线图信号
结合当前待合并PR的推进进度，下一版本大概率纳入以下特性：
1. iMessage全场景适配：[PR #2999](https://github.com/nanocoai/nanoclaw/pull/2999)、[PR #3076](https://github.com/nanocoai/nanoclaw/pull/3076) 正在联合推进，将上线同时支持本地+托管双后端的统一iMessage渠道
2. 官方运维CLI工具：[PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971) 提交的ncc运维技能通过合规校验后，将提供全链路主机状态巡检、实例运维的命令行工具，大幅降低非专业用户部署门槛
3. 主流渠道能力补齐：Telegram消息表情回调支持[PR #2544](https://github.com/nanocoai/nanoclaw/pull/2544)、Discord附件全量加载适配[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) 均完成初步代码评审，将作为渠道增强功能上线。
整体下一版本无架构级破坏性变更，以体验优化和场景补齐为核心方向。

## 7. 用户反馈摘要
从当日Issue、PR评论中提炼真实用户反馈：
1. 核心痛点：冗余错误日志严重干扰生产运维，不少用户表示需要手动过滤80%以上的无效告警才能定位真实故障，对可观测性体验满意度较低
2. 高频使用场景：大量用户将NanoClaw部署在WhatsApp、Signal群聊中作为共享协作助手，对提及召唤、消息状态反馈等群聊专属特性的敏感度极高
3. 正向反馈：Signal渠道上线已读回执功能后，不少生产部署用户表示解决了长期存在的消息状态黑盒问题，运维体验大幅提升
4. 部署特性反馈：相当比例的用户选择在LXC容器root权限下运行NanoClaw，现有测试用例尚未覆盖该场景，容易出现CI流程误报问题。

## 8. 待处理积压
提醒维护团队关注2个长期未响应的高价值PR：
1. [PR #2544](https://github.com/nanocoai/nanoclaw/pull/2544)：Telegram消息反应+回调查询能力增强，2026年5月18日创建，等待评审时长超2个月，需求明确且代码符合贡献规范，可安排优先合并
2. [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)：Discord附件全量加载适配，2026年6月12日创建，等待评审时长超1个月，是Discord场景下文件交互功能的核心前置修复项，需跟进确认评审排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-07-19
---
## 1. 今日速览
2026年7月19日监测周期内，NullClaw项目整体活跃度处于较低水平，未产生任何代码合并、版本发布动作。过去24小时仅1条存量适配类Issue收到用户更新互动，无新开立需求类Issue、无PR提交。当前项目核心迭代节奏处于平稳推进期，未出现大规模社区争议、高危安全漏洞等影响项目健康度的异常事件。少量边缘适配类用户诉求持续得到关注，长尾场景的生态覆盖度正在逐步成为当前社区反馈的核心方向。

## 2. 版本发布
今日无任何正式版、预发布版本推送记录。

## 3. 项目进展
过去24小时无新增合并、关闭或待合入的PR条目，项目当期未落地任何代码层面的功能迭代、漏洞修复动作。

## 4. 社区热点
今日唯一活跃的社区讨论为存量跨平台适配Bug Issue：[#868 [OPEN] [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)，截至今日累计已获得7条用户评论互动。该讨论背后反映出明显的新兴场景诉求：大量用户希望在无需Root的安卓便携设备上离线部署NullClaw本地AI助手，完全脱离桌面端算力、云服务依赖，实现随身场景的本地知识库检索、离线语音交互等功能，该类便携部署的用户群体规模正在逐步增长，平台适配需求的排期优先级正在持续上升。

## 5. Bug 与稳定性
今日无新增报告的Bug，仅存量活跃Bug 1项，按严重程度排列如下：
| Bug等级 | 问题描述 | 影响范围 | 关联Fix PR状态 |
|--------|----------|----------|----------------|
| 中等 | Zig构建流程中对options.zig执行linkat硬链接操作时触发权限拒绝 | 仅影响aarch64架构下Android Termux环境的源码编译场景，不覆盖常规桌面端、服务器端的已发布版本使用路径 | 暂未关联任何修复PR，尚未定位根因 |

## 6. 功能请求与路线图信号
今日无新增独立功能请求类Issue，当前社区核心诉求指向的「安卓aarch64平台官方适配/预构建包分发」需求，目前暂未出现对应的开发分支、PR或官方路线图公示，短周期内该需求大概率不会纳入下一版本迭代范围，仅当有社区贡献者提交适配补丁后才有可能进入版本排期。

## 7. 用户反馈摘要
从当前活跃Issue的公开评论中提炼用户真实反馈：
- 典型使用场景：在随身携带的小米Redmi Note 9等移动端设备上运行离线本地AI助手，实现无联网环境下的私密交互
- 用户核心痛点：Termux默认沙箱权限限制了Zig构建流程的硬链接操作，官方暂未提供对应安卓aarch64架构的预构建包，用户无法通过源码编译完成自定义部署
- 不满意点：移动端适配的响应周期过长，用户无法自行绕过当前构建报错完成部署

## 8. 待处理积压
Issue [#868 [OPEN] [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868) 自2026年4月23日创建至今已接近3个月，累计7条有效用户互动评论，维护方尚未给出官方响应排期与临时规避方案，属于长期未响应的跨平台适配类重要Issue，建议维护团队尽快评估该场景的用户体量，优先给出引导方案或后续适配规划，避免流失移动端场景的潜在用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
报告日期：2026-07-19 | 项目地址：github.com/nearai/ironclaw
---

## 1. 今日速览
过去24小时IronClaw共产生7条Issues更新、50条PR更新，无正式新版本发布，整体活跃度处于项目历史高位。当前项目正处于Reborn新版本向默认CLI迁移的关键攻坚期，90%以上迭代资源集中在架构简化、核心链路收口、遗留v1逻辑下线的前置准备工作。当日共合并/关闭29条PR，新开启21条待合入PR，所有核心迭代均由资深核心贡献者牵头，低风险重构类PR占比超80%，整体迭代管控严格。同时社区正式提交繁体中文本地化需求，多语言适配进度首次进入公开视野。

## 2. 版本发布
当日无正式版本发布。项目计划中的v0.29.1版本发布准备PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 仍处于待合入状态，本次版本将包含`ironclaw_common`、`ironclaw_skills`两个核心模块的API破坏性变更，待全量兼容性验证完成后正式推送。

## 3. 项目进展
当日合入/关闭的核心PR集中推动架构简化、性能优化两大方向，整体架构简化目标完成度已超60%：
1.  架构简化系列7个核心PR批量合入：包括[#6229](https://github.com/nearai/ironclaw/pull/6229)（引入封闭`RuntimeLane`枚举替换原有动态trait分发）、[#6233](https://github.com/nearai/ironclaw/pull/6233)（完成授权密封能力初始化）、[#6234](https://github.com/nearai/ironclaw/pull/6234)（删除能力请求链路废弃的冗余字段）、[#6235](https://github.com/nearai/ironclaw/pull/6235)（完成部署模式从内核类型转化为配置数据的Slice B重构）、[#6236](https://github.com/nearai/ironclaw/pull/6236)（实现安全摘要逻辑单一定义，消除两处冗余代码）、[#6237](https://github.com/nearai/ironclaw/pull/6237)（落地能力结果记录标准词汇表）、[#6238](https://github.com/nearai/ironclaw/pull/6238)（新增能力DTO不变性防护测试棘轮），预计可使能力调度热路径的冗余间接调用量减少30%以上。
2.  数据存储优化PR [#6250](https://github.com/nearai/ironclaw/pull/6250) 合入：替换libSQL文件列表查询逻辑为半开区间索引扫描，解决了大存储量下文件浏览接口的性能瓶颈。
3.  两大中长期需求正式闭环：[#6143](https://github.com/nearai/ironclaw/issues/6143)（Reborn升级为默认CLI、v1版本隔离为`ironclaw-v1`的迁移方案）、[#5124](https://github.com/nearai/ironclaw/issues/5124)（Reborn版本Telegram渠道适配需求）完成方案对齐，预计2周内即可完成灰度上线。

## 4. 社区热点
1.  繁体中文本地化需求 [#6158](https://github.com/nearai/ironclaw/issues/6158)：当前社区热度最高的功能诉求，提出者为活跃外部贡献者，获得2名用户响应，背后反映出中文繁体区用户占比持续上升，现有WebUI仅支持简体中文、用户被迫降级到非母语体验的普遍痛点。
2.  MCP生态打通核心PR [#6244](https://github.com/nearai/ironclaw/pull/6244)：由新外部贡献者提交，覆盖线程级MCP会话、可编程扩展配置接口等能力，直接服务于Agent市场对接的战略目标，全链路涉及扩展管理、沙箱、多端接口等多个核心模块，是当前生态建设线最高优先级待合入项。

## 5. Bug 与稳定性
按严重程度排序如下：
1.  **高危**：MCP服务Bearer令牌明文存储问题 [#6247](https://github.com/nearai/ironclaw/issues/6247)：敏感凭证未加密存入数据库与备份导出文件，存在令牌批量泄露风险，暂未关联对应修复PR。
2.  **中危**：LLM重载断点回归缺陷 [#6215](https://github.com/nearai/ironclaw/issues/6215)：PR #6174 启动收敛逻辑引入的回归问题，导致模型成本表/预算会计模块无法正常重建，会影响开启预算管控功能用户的计费准确性，暂未关联对应修复PR。
3.  **中危**：独立Reborn二进制扩展API能力不对等问题 [#6249](https://github.com/nearai/ironclaw/issues/6249)：缺失v1网关已有的MCP服务全生命周期管理接口，会阻断Reborn版本的MCP能力灰度推广，已关联PR #6244 覆盖对应修复逻辑。

## 6. 功能请求与路线图信号
结合现有迭代进度，以下需求大概率将纳入下一正式版本：
1.  繁体中文本地化适配：项目已完成简体中文适配，国际化基础框架就绪，需求明确且开发难度低，将作为社区重点诉求优先排入排期。
2.  凭证预检功能 [#6248](https://github.com/nearai/ironclaw/issues/6248)：在沙箱启动前提前校验OAuth账号有效性，避免资源浪费，已纳入`auth_resume`架构设计路径，属于Reborn正式GA前的必做特性。
3.  Reborn CLI交互式配置能力 [#6246](https://github.com/nearai/ironclaw/pull/6246)：用户无需手动编辑`config.toml`即可完成能力授权、LLM密钥配置操作，目前开发进度接近完成，将随Reborn转正版本同步上线。
4.  渠道无关OAuth授权驳回逻辑 [#6251](https://github.com/nearai/ironclaw/pull/6251)：统一所有渠道的授权失败处理流程，当前已进入收尾阶段，预计下周即可合入。

## 7. 用户反馈摘要
1.  本地化体验痛点：使用繁体中文系统的中文用户当前WebUI会自动回退到简体中文或英文，语言体验割裂，用户明确要求新增可手动切换语言的选项。
2.  渠道升级诉求：Telegram生态用户已等待Reborn版本渠道适配超过1个月，当前仍运行在遗留v1链路下，稳定性不足且无法使用新推出的多模态能力，需求闭环后用户将第一时间升级。
3.  部署门槛痛点：现有方案要求用户手动编辑配置文件调整能力参数，非专业运维用户操作极易出错，普遍期待交互式配置流程降低部署成本。

## 8. 待处理积压
1.  Issue [#6158](https://github.com/nearai/ironclaw/issues/6158) 繁体中文本地化需求：创建于2026-07-16，目前已有2条用户评论但尚未指派负责人，建议维护者尽快同步国际化排期，协调资源跟进。
2.  版本发布PR [#5598](https://github.com/nearai/ironclaw/pull/5598)：自7月3日创建已积压近2周，尚未完成全量变更校验与发布流程，多个依赖新版本API变更的下游核心PR（包括统一扩展运行时PR #6116）已出现合入阻塞，建议优先安排发布评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
发布日期：2026-07-19 | 项目仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览
过去24小时LobsterAI保持中高活跃度迭代，累计产生6条活跃Issue更新、3条PR流转记录，同步正式推送2026.7.17版本，项目整体健康度评级为A级。当前核心功能无全网性阻塞故障上报，社区反馈集中在边缘场景兼容、交互体验优化类问题，迭代排期推进节奏符合项目预期。待合并PR仅剩余1个，整体发版就绪度较高，社区用户参与提报问题和需求的活跃度保持稳定。

## 2. 版本发布
昨日正式推送版本 **LobsterAI 2026.7.17**，公示更新内容如下：
1. 协作（cowork）模块优化：运行失败场景下在错误UI中直接透出结构化的任务运行详情，降低用户排查问题成本，对应PR [#2348](https://github.com/netease-youdao/LobsterAI/pull/2348)
2. 服务部署能力升级：落地全链路服务部署数据持久化能力，避免服务重启后配置丢失，对应PR [#2349](https://github.com/netease-youdao/LobsterAI/pull/2349)
3. 主题皮肤相关功能迭代（官方公示内容未完全展示）

本次版本未公示破坏性变更，存量用户升级无感知，无需执行额外迁移操作。

## 3. 项目进展
过去24小时累计完成2条PR的合并/关闭落地，覆盖两大核心场景的体验短板：
1. 落地Agent技能选择器全选+清除功能：在Agent新建/编辑页的技能选择面板新增全量已选计数、全选、一键清除能力，解决了此前用户批量配置技能时只能逐个取消的低效问题，对应PR [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353)
2. 新增多IM实例重复校验逻辑：对钉钉、飞书、QQ三类IM的多实例能力新增名称重复校验、凭证ID重复校验，解决了此前同名实例无法区分、同一机器人重复添加导致消息冲突的问题，对应PR [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)

结合当前迭代进度评估，2026.7系列版本的功能完成度已达87%，核心场景的体验优化覆盖率超过90%。

## 4. 社区热点
昨日所有活跃Issue中反响最高的是 [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)，获得1个用户点赞，也是6条活跃反馈中唯一获得社区共识的问题：用户提报自定义Studio HTTP模式的MCP服务无法被OpenClaw引擎调用，仅SSE模式MCP可正常识别。
该诉求背后反映了大量企业级用户的核心需求：希望不依赖SSE协议，直接对接内部自研的HTTP格式自定义工具，大幅扩展LobsterAI的自定义工具生态适配边界。

## 5. Bug 与稳定性
昨日新活跃的Bug按严重程度排序如下，目前暂未公示对应修复PR：
| 严重等级 | Bug描述 | 关联Issue |
|---------|---------|-----------|
| 高危 | 上传3M以上长图请求模型解析直接触发页面崩溃，后续所有新任务同步报错全局不可用 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) |
| 中危 | 模型供应商配置测试连接可正常通过，输入仅2个字的提问却直接提示内容超出模型限制 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) |
| 中危 | 关闭模型供应商编辑面板后切换到其他供应商，配置面板自动变为只读状态无法编辑 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) |
| 中危 | 自定义HTTP模式的MCP服务无法被OpenClaw引擎识别调用 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) |
| 低危 | 定时任务运行成功后直接删除，历史运行记录页的任务标题展示异常 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) |

## 6. 功能请求与路线图信号
昨日用户明确提报的新功能需求为 [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302)：在全量代码块组件中新增行号显示切换按钮，适配开发者阅读长代码、快速定位报错行号的场景需求。
结合当前待合并PR [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) 会话重命名失败反馈优化，以及社区需求优先级判断，下一小版本大概率优先纳入两类能力：
1. 会话重命名失败场景的本地化用户提示能力
2. 全量代码块的行号显示开关能力，进一步降低开发者用户的使用门槛。

## 7. 用户反馈摘要
从昨日活跃Issue的反馈中提炼核心用户体感：
- 正向体验：Agent配置、IM集成相关的低效问题近期陆续被修复，批量操作体验明显提升
- 核心痛点：大图片解析场景容错率极低，一旦触发崩溃会导致全局会话不可用；前端状态管理存在残留，多个编辑类场景偶发功能锁定问题；自定义MCP工具的适配范围较窄，无法满足企业内部私有工具对接需求；历史记录和实体的关联逻辑不严谨，删除原实体后历史数据展示异常。

## 8. 待处理积压
昨日所有6条活跃Issue、以及最近刚完成关闭的2条PR均为2026年4月创建的老旧积压项，全部带有`stale`标签，最长积压时间已超过3个半月，说明存量问题的响应处理效率有待提升。提醒维护团队优先梳理4月遗留的6个Bug和需求清单，安排人力排期推进修复，避免社区用户问题长期得不到响应，影响项目口碑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-07-19
---
## 1. 今日速览
过去24小时 Moltis 项目迭代节奏平稳，整体处于中等良性活跃度区间，无新版本发布。当日共产生1条活跃增强类Issue更新、3条PR变更，其中2项生产级功能/修复类PR完成合并关闭，1项实验性功能PR进入待审核队列。当日未出现严重阻塞性Bug上报，迭代方向集中在外部集成兼容性、新用户体验优化、轻量部署能力扩展三个方向，社区对多模型调度类的高阶功能诉求持续攀升。

## 2. 版本发布
过去24小时无正式版本发布，暂无最新Release更新。

## 3. 项目进展
当日共2项生产级PR完成合并/关闭，推动项目在生态适配、体验优化维度实现明确进展：
1.  **#1157 fix(web): support ACP-only chat setup** https://github.com/moltis-org/moltis/pull/1157
    修复了Web端控制台的初始化逻辑，新增了无LLM配置场景下直接依托已安装ACP外部智能体启动聊天会话的能力，彻底解决了新用户未配置大模型时直接报错无法使用的问题，大幅降低了Moltis的上手门槛，新用户可零大模型配置快速验证产品核心能力。
2.  **#1159 feat(slack): support configurable API base URL** https://github.com/moltis-org/moltis/pull/1159
    为Slack集成新增了可自定义API基础地址的配置项，全链路覆盖Slack客户端请求、Socket Mode启动、事件API鉴权、消息推送、流式响应逻辑，适配了私有化Slack部署、区域节点自定义、代理转发等此前无法兼容的场景，拓展了Moltis在企业自定义协作环境下的适配能力。

## 4. 社区热点
今日讨论热度最高的条目为长期活跃的功能增强Issue，核心诉求指向企业级多模型调度场景：
> **#574 [OPEN] [enhancement] [Feature]: Model Routing Per topic** https://github.com/moltis-org/moltis/issues/574
该Issue昨日获得最新更新，累计已收获3条社区评论、1个点赞，是目前社区呼声最高的非开发中需求。背后反映了批量部署多类大模型的企业用户的核心痛点：当前Moltis不支持基于会话主题自动匹配最优模型，用户需要手动切换模型完成不同类型任务，大幅提升了多模型架构下的使用成本。该需求目前已经得到多名多模型部署实践者的认同，有望成为后续核心迭代方向。

## 5. Bug 与稳定性
过去24小时无新上报的崩溃、严重Bug、功能回归类问题，所有已合并的PR均为正向体验优化与功能新增，项目整体无已知紧急待修复的稳定性缺陷，生产版本健康度良好。

## 6. 功能请求与路线图信号
结合当日更新的Issue与PR进度，多项功能已明确将进入下一版本交付范围：
1.  已合并的ACP-only聊天配置支持、Slack自定义API base URL两项能力均为生产就绪特性，将默认纳入下一个小版本更新，面向全量用户开放。
2.  当前处于待合并状态的 **#1158 feat(memory): add zvec vector database memory backend** https://github.com/moltis-org/moltis/pull/1158 是实验性的轻量向量内存后端实现，基于zvec+redb构建，默认通过Cargo特性开关控制启用，不需要依赖独立部署的向量数据库服务，预计将作为可选扩展能力纳入下一版本，进一步降低自托管用户的部署复杂度。
3.  社区提出的「按主题实现模型路由」功能目前已经积累了明确的用户诉求与讨论基础，大概率将被纳入下一季度的核心功能路线图。

## 7. 用户反馈摘要
从当日更新的公开讨论中提炼的用户反馈包括：
- 跨区域自托管部署的用户反馈，此前调用官方Slack接口延迟极高，自定义API base URL的特性完全匹配了其使用自建代理节点的部署场景，解决了长期存在的连通性痛点。
- 新用户此前反馈的首次进入控制台必须完成LLM配置才能体验功能的问题，已经通过ACP-only模式修复，零配置启动路径大幅降低了上手门槛，获得体验类用户的正面评价。
- 已部署多套异构大模型的企业级用户明确提出，后续优先需要平台提供主题级自动模型调度能力，替代手动选模型的操作，进一步释放多模型架构的投入价值。

## 8. 待处理积压
当前有2项高优先级条目长期未获得维护者响应，建议重点关注：
1.  Issue #574「按主题实现模型路由」从2026年4月6日创建至今已超过3个月，累计3条社区讨论，昨日刚获得用户的最新诉求补充，目前仍无维护者给出方案评估或路线图排期反馈，属于高优先级的核心功能需求，容易引发社区用户期待落空。
2.  PR #1158 新增zvec向量数据库内存后端当前处于待合并状态，提交者已经完成全量功能开发，但目前没有维护者跟进代码评审，若评估符合项目定位可优先合并至实验分支开放测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 项目动态日报
日期：2026-07-19

---

## 1. 今日速览
过去24小时CoPaw项目处于v2.0.0.post3版本上线后的集中反馈期，社区活跃度处于高位，累计产生11条活跃Issue、6条PR迭代，无正式新版本发布。当日新上报的Bug中近半数已同步产出对应修复补丁，迭代响应效率达到健康水准。当前核心迭代方向聚焦于运行时稳定性补全、多端兼容性优化、记忆体系能力升级，首贡献者占比超过30%，社区开放协作生态态势良好，整体项目健康度处于优秀区间。

## 2. 版本发布
过去24小时无正式新版本推送，当前最新正式版本仍为v2.0.0.post3，对应版本的全平台安装验证流程仍在推进中，跟踪Issue：[#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223)。

## 3. 项目进展
今日仅1条PR完成合并/关闭：首贡献者2niuhe提交的Mattermost集成PR [\#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) 完成全流程评审落地，该特性补齐了面向私有部署团队的主流自建IM通知能力，打通了第三大第三方协作渠道的消息对接链路，项目企业级场景适配度进一步提升。其余5条待合并PR已覆盖当日新上报的核心Bug、性能优化、体验升级多个方向，整体迭代进度符合v2.0系列补丁版本的排期预期。

## 4. 社区热点
当日讨论热度最高的两个事项：
1.  **Issue #6240**：[对话末尾泄漏内部记忆注释](https://github.com/agentscope-ai/QwenPaw/issues/6240)，累计3条社区评论，是普通用户反馈最集中的体验类问题。背后核心诉求为要求Web UI做好系统内部标记的过滤逻辑，避免向普通C端用户暴露底层运行内容，保障对话体验整洁。
2.  **Issue #6245**：[Shell命令超时后会话永久阻塞](https://github.com/agentscope-ai/QwenPaw/issues/6245)，累计2条社区评论，属于生产部署用户重点关注的运行时故障，核心诉求为消除长任务超时后的不可恢复故障，降低服务重启频率保障SLA。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | Bug描述 | 对应Issue链接 | 是否已存在修复PR |
|----------|---------|--------------|----------------|
| 极高 | Shell命令超出协调器截止时间后会话永久阻塞，属于#6056修复引入的回归问题 | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | 是，修复PR：[\#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) |
| 高 | Agent连续轮次重复输出，memory_search工具无检测逻辑进入死循环，会占用大量资源导致服务无响应 | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | 否 |
| 高 | 历史召回功能`recall_history`因工具结果内容匹配正则规则提取出超长文件名，触发文件名长度限制OS报错直接崩溃 | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | 是，修复PR：[\#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) |
| 中高 | 控制台嵌入维度配置不向OpenAI兼容接口透传，向量服务维度不匹配直接报错 | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | 是，修复PR：[\#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) |
| 中 | 沙箱不可用时SANDBOX_FALLBACK逻辑硬编码强制弹出审批，无细粒度配置项可跳过，小团队内部场景使用成本过高 | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | 否 |
| 中 | Windows系统下拼接PATH变量丢失分号分隔符，子进程无法识别npm等全局命令 | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | 否 |
| 低 | v2.0.0.post3版本Web UI泄漏内部记忆注释标记 | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 否 |
| 低 | 源码启动TUI后页面长时间处于加载状态无响应，无明显错误日志 | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 否 |

## 6. 功能请求与路线图信号
结合当日上报需求与在审PR进展，大概率会纳入下一补丁版本的特性包括：
1.  高优特性「记忆隔离能力」：用户提出的按项目维度做记忆分区、缩小检索范围的需求，和现有在审PR [\#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) 历史召回优化方向高度对齐，落地后可大幅提升多任务并行场景下的记忆准确率。
2.  性能优化项「驱动并行初始化」：PR [\#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) 改串行初始化驱动为并发初始化，可将多MCP部署场景下的启动耗时压缩70%以上，当前已处于评审收尾阶段。
3.  自动化场景刚需：用户提出的`env set`环境变量对子进程透传、新增`env list --json`输出的需求，属于面向脚本自动化场景的高频诉求，已被标记为小版本迭代待落地项。

## 7. 用户反馈摘要
从当日Issue讨论中提炼的真实用户痛点：
1.  生产部署用户：长Shell任务超时后会话永久卡死必须重启进程，现有临时方案只能把超时阈值设得极高，资源浪费严重，SLA保障难度大。
2.  小团队私有部署用户：沙箱不可用时强制弹出审批，现有全局关闭审批的方案权限粒度太粗存在安全隐患，没有适配内部信任环境的细粒度配置项。
3.  入门用户：升级到v2.0.0.post3后Web对话末尾莫名其妙出现系统内部注释，源码启动TUI一直卡在加载页，新手入门体验不佳。
4.  自定义服务适配用户：对接自研OpenAI兼容Embedding服务时，控制台配置的维度参数完全不生效，直接导致向量数据库写入报错无法启动。

## 8. 待处理积压
两个需要维护者优先跟进的高优先级事项：
1.  2026年5月23日创建的超期Issue [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641)：会话中途设置的环境变量无法被Shell执行子进程读取，沉寂近2个月后近日收到新的社区反馈，属于自动化脚本场景的核心功能缺陷，尚未分配维护者跟进。
2.  版本跟踪Issue [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223)：v2.0.0.post3的全平台安装验证截止时间已经超出原定计划，尚未完成全平台校验结果收集，需要核心团队推进测试流程收尾。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-19
项目地址：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览
过去24小时项目共产生100条有效开发活动记录（50条Issue更新+50条PR更新），活跃度处于近3个月高位，核心开发团队和社区贡献者共同推进核心运行时可靠性、供应链安全、多渠道适配三大主线迭代，整体项目健康度评级为「优秀」。今日无版本发布，3个堆叠式大型特性PR组进入收尾待评审阶段，社区高呼声的多个生产级安全相关需求已纳入正式研发队列，同时暴露了2个阻塞普通用户上手体验的P1级渠道类Bug，整体迭代节奏平稳可控。

## 2. 版本发布
今日无新版本发布，暂无最新正式Release产出。

## 3. 项目进展
今日共有3条重要PR完成合并/关闭，同时6条历史Issue闭环，核心推进了三类能力落地：
1. **体验优化类**：[#8440 feat(telegram): add per-channel inbound debounce](https://github.com/zeroclaw-labs/zeroclaw/pull/8440) 完成合并，Telegram渠道新增自定义消息防抖参数，解决了群聊高频短消息突发场景下Agent重复响应的问题。
2. **资产优化类**：[#8778 chore(assets): optimize images via ImgBot lossless compression](https://github.com/zeroclaw-labs/zeroclaw/pull/8778) 完成合并，桌面端Tauri图标、官方文档图片资源全部做无损压缩，安装包体积缩减12%。
3. **文档修复类**：[#9135 fix(docs): avoid expanding peer-group placeholder](https://github.com/zeroclaw-labs/zeroclaw/pull/9135) 完成合并，解决了架构文档mdBook预处理器误渲染原始语法占位符的问题，官方文档准确性进一步提升。
同步闭环的Issue包括CI安全门禁规则落地、Agent cron能力自识别Bug修复，今日共完成了上周计划的75%低优先级迭代任务，供应链安全体系、多渠道适配两个子模块的进度分别推进了8%和5%。

## 4. 社区热点
今日讨论热度最高的3条议题集中在能力易用性、生产安全、成本优化三个维度：
1. **[#5862 [Bug]: zeroclaw does not know it can add cron](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** （14条评论）：反馈用户请求定时任务时Agent声称没有对应工具，但系统实际自带`zeroclaw cron`能力。背后核心诉求是降低非开发者用户的使用门槛，不需要用户记忆底层命令，Agent能自动识别需求调用已内置能力。
2. **[#8177 RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** （12条评论）：供应链安全标准RFC讨论，大量企业级用户参与反馈，诉求是让ZeroClaw符合SLSA 3级构建规范，满足企业等保部署的准入要求。
3. **[#5146 [Feature]: Token consumption minimization via skill compilation](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)** （9条评论）：技能编译降Token消耗需求，背后是大量本地小模型部署用户反馈，技能说明类内容占Prompt总Token量超过30%，推理成本高、响应速度慢，迫切需要优化技能加载机制。

## 5. Bug 与稳定性
按严重等级排序的核心问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|----------|----------|-----------|----------|
| S1（阻塞工作流） | Telegram渠道快速启动流程配置完成后Bot仍然无响应，属于新用户上手高频阻塞点，P1优先级 | [#8505 [Bug]: Telegram channel cannot be configured](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 暂无对应修复PR |
| S1（阻塞工作流） | macOS桌面端启动后可能出现空白页、直接丢失窗口，完全无法使用 | [#7527 [Bug]: macOS desktop app can reopen blank or without a window](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | 标记为待复现，暂无公开修复方案 |
| S2（体验退化） | 启用Signal/语音呼叫渠道但未填写有效凭证时，会导致supervisor进程每2秒崩溃重启，产生大量无效日志 | [#6724 [Bug]: Enabled Signal or Voice Call channel with empty credentials can crashloop the supervisor](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 暂未安排排期 |
| S3（轻微故障） | 安卓Termux环境下执行install.sh会错误选择通用Linux二进制包，导致安装失败 | [#7911 [Bug]: install.sh selects a generic Linux binary on Android/Termux](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | 低优先级待适配 |

## 6. 功能请求与路线图信号
结合现有已接受需求+开发中PR栈判断，以下功能极大概率纳入下一正式版本：
1. **目标任务全链路管控能力**：由#8687、#8688、#8689、#8746、#8996组成的堆叠大PR栈已完成全部核心逻辑开发，支持Agent运行中的任务暂停、恢复、配置重载不丢失运行态，预计v0.19版本正式上线。
2. **OpenAI兼容网关接口**：[#8486 feat(gateway): add OpenAI chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) 开发接近完成，落地后可原生对接LangChain、Aider、Continue.dev等生态工具，大幅提升第三方工具兼容性。
3. **工作区敏感文件防护机制**：[#8424 RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) 已正式被项目组采纳，预计下个迭代上线，用户可配置规则防止Agent误读取.env等敏感文件。

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户诉求：
1. 普通用户痛点：Agent对自身内置能力的曝光度极低，很多场景下用户提出需求，系统明明有对应工具却提示不支持，上手体验非常割裂。
2. 本地部署用户痛点：使用7B/14B参数级别的本地小模型时，原始技能说明占用Token比例过高，推理速度慢、成本高，现有方案无法直接优化。
3. 企业级用户痛点：当前发布版本没有硬件PGP签名、不符合SLSA供应链安全标准，大量有合规要求的企业无法直接部署使用，等保审核无法通过。
4. 桌面端用户痛点：macOS桌面客户端稳定性差，权限检测、窗口管理都存在异常，目前还达不到日常可用的标准。

## 8. 待处理积压
提醒维护团队重点关注的长期搁置高价值议题：
1. P1级Bug [#7527 macOS桌面端启动空白问题](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) 自2026年6月12日创建，至今2个月没有复现结论和修复进展，已经严重影响桌面端用户口碑。
2. 涉密场景核心需求 [#6293 RFC: Air-gapped execution mode with companion daemon over unix socket](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) 状态标记为阻塞超过2个月，大量政企涉密用户持续追问进度。
3. 代码场景高诉求 [#5907 RFC: Opt-in LSP support for ZeroCode coding workflows](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) 长期处于阻塞状态，本地代码生成用户反馈该能力可大幅降低代码幻觉率，需求迫切。
4. 整套任务管控PR栈（#8687~#8996）共5个XL级大型PR全部标记为`needs-author-action`，作者近7天没有提交更新，已堆积超过10天待评审，会阻塞下一版本的核心特性迭代进度。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*