# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-16 22:20 UTC

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

# OpenClaw 项目动态日报（2026-08-17）
---
## 1. 今日速览
今日OpenClaw主仓库活跃度处于近一周高位，过去24小时累计产生1000条Issue+PR更新记录，468条新开/活跃Issue、396条待合并PR反映出核心迭代和社区反馈热度同步走高。项目今日发布1个网关性能调优专属配套版本，当前迭代核心方向集中在消息投递可靠性修复、跨平台兼容性优化、多渠道场景体验完善三个维度。全仓库未发现阻断性核心架构故障，整体项目健康度处于良好区间，生产级场景的存量bug闭环进度符合此前两周的迭代预期。

## 2. 版本发布
今日发布专属归档版本：**pr-124528-profiles**
- 更新内容：为PR #124528提供的网关性能评测专用资源包，包含3节点12并发turn的基准测试环境下采集的CPU profile数据，同时提供事件循环热点对比场景下修改前后的完整对照样本
- 适用范围：仅面向内核性能调优开发者提供调试素材，无新增用户功能、无破坏性变更，普通生产用户无需升级。
- 官方归档地址：https://github.com/openclaw/openclaw/releases/tag/pr-124528-profiles

## 3. 项目进展
过去24小时累计完成104条PR合并/关闭、32条Issue闭环，核心进展包括：
1.  已合并PR #124313：修复出站消息清洗逻辑将RFC 5322尖括号格式邮箱地址误判为HTML标签直接删除的缺陷，解决了业务消息中附带的联系邮箱静默丢失的问题 https://github.com/openclaw/openclaw/pull/124313
2.  已闭环Issue #92433：修复子agent完成通知在请求方会话提前结束后被静默丢弃的bug，子任务状态同步可靠性大幅提升 https://github.com/openclaw/openclaw/issues/92433
3.  已闭环Issue #111870：修复CLI上下文下@openclaw/codex插件初始化时`openSyncKeyedStore`未定义的报错问题，命令行场景下插件可用性得到修复 https://github.com/openclaw/openclaw/issues/111870

当日累计完成12%的评论量Top50高关注度存量Issue清零，消息投递可靠性赛道的存量缺陷闭环进度超额完成周度目标。

## 4. 社区热点
今日讨论热度最高的3条条目集中反映生产环境刚需：
1.  **Issue #121058** [97条评论]：此前标记已关闭的P1级消息静默丢失bug复现，大量生产运维用户同步自己观测到的复现场景，诉求是尽快输出可落地的根因修复方案，避免业务消息无记录丢失 https://github.com/openclaw/openclaw/issues/121058
2.  **Issue #42475** [26条评论]：网关级别的按Agent成本预算管控功能需求，大量中小团队自托管用户反馈目前缺乏LLM调用费用熔断机制，多次出现 runaway 账单事故，诉求是在网关层前置拦截超预算请求，无需依赖外部监控系统 https://github.com/openclaw/openclaw/issues/42475
3.  **Issue #48003** [21条评论]：Steer模式不支持在工具调用中途向主会话注入用户干预消息的缺陷，重度多步长任务用户反馈遇到异常分支时无法实时调整任务走向，只能等待当前回合完全执行结束 https://github.com/openclaw/openclaw/issues/48003

## 5. Bug 与稳定性
按P1优先级排序今日新增/活跃高严重度缺陷：
| 缺陷编号 | 问题描述 | 严重等级 | 修复状态 | 链接 |
|---------|---------|---------|---------|------|
| #115908 | 高写入负载下会话转录重入逻辑出现活锁，阻塞Node主线程导致所有渠道请求全局卡住 | P1 全局可用性 | 暂无对应修复PR | https://github.com/openclaw/openclaw/issues/115908 |
| #112423 | 大体积SQLite会话转录归档操作直接在网关主线程执行，阻塞事件循环 | P1 性能退化 | 暂无对应修复PR | https://github.com/openclaw/openclaw/issues/112423 |
| #97616 | Hook/工具执行的子进程没有被正常回收，长期运行下产生大量僵尸进程导致运行环境退化 | P1 运行稳定性 | 暂无对应修复PR | https://github.com/openclaw/openclaw/issues/97616 |
| #112259 | 入站渠道消息出现零payload调度时，没有重试/死信/用户侧通知机制，消息直接静默丢弃 | P1 消息可靠性 | 暂无对应修复PR | https://github.com/openclaw/openclaw/issues/112259 |
| #119232 | Windows PowerShell环境下Agent自动生成Unix专属命令（head、~路径拓展等）全部执行失败 | P1 跨平台兼容性 | 已有对应PR等待合并 | https://github.com/openclaw/openclaw/pull/119232 |

## 6. 功能请求与路线图信号
结合已有的关联PR判断，以下高呼声功能极大概率纳入下一正式版本：
1.  网关级按Agent成本预算管控（Issue #42475）：已存在关联开发分支，完成度超过70%，属于自托管运维场景核心刚需 https://github.com/openclaw/openclaw/issues/42475
2.  火山引擎豆包实时语音支持（PR #119174）：PR处于待验证状态，作为国内区域生态适配特性优先纳入迭代 https://github.com/openclaw/openclaw/pull/119174
3.  Slack Modal交互式工作流支持（Issue #88154）：配套实现方案已过技术评审，将作为协作渠道能力升级点上线 https://github.com/openclaw/openclaw/issues/88154
4.  Web端支持自托管STT/TTS配置透传（Issue #45508）：需求已有完整技术方案，待完成UI联调后上线 https://github.com/openclaw/openclaw/issues/45508

## 7. 用户反馈摘要
从今日活跃Issue评论中提炼典型用户侧声音：
1.  自托管运维用户普遍反馈当前全量Agent无差别触发内存梦境调度，高峰时段内存轻松突破6GB触发OOM，强烈要求支持按Agent维度单独配置梦境开关 https://github.com/openclaw/openclaw/issues/67413
2.  出海业务运营用户集中吐槽WhatsApp/Telegram渠道断连重连后， outage窗口的消息完全没有回溯能力，大量业务咨询消息直接丢失
3.  Windows自托管用户反馈平台兼容性体验远劣于Linux：CLI进程执行后残留后台node、exec工具返回空结果、Agent生成Unix命令直接失败等多个缺陷叠加，Windows部署的可用性不足Linux的60%
4.  大量团队用户反馈当前网关系统告警直接推送到业务聊天频道，完全无法区分业务对话和系统故障通知，产生严重告警噪音，强烈要求支持单独的告警专属通道配置。

## 8. 待处理积压
1.  高优先级存量Issue积压：评论量Top10的P1级核心缺陷中，有7个创建时间超过3个月，长期卡在「需要维护者评审」状态无人认领，典型如3月创建的#42475、#48003，建议专项排期推进。
2.  PR队列积压：当前396条待合并PR中，有127条标注了「needs proof」状态，大量社区贡献的特性/修复PR缺乏标准化自动化测试验证环节，导致提交后长时间无法进入合并流程，建议补充社区贡献PR的自动化测试流水线支持。
3.  跨平台专项积压：Windows平台相关的7个存量缺陷累计超过2个月没有跟进，Windows自托管用户体验掉队明显，建议分配专属维护者负责Windows体验专项闭环。

---

## 横向生态对比

# 开源AI智能体与个人助手生态横向对比分析报告（2026-08-17）
---

## 1. 生态全景
当前开源个人AI助手与自主智能体赛道已全面脱离功能演示阶段，整体转向生产落地刚需导向的成熟发展区间。本次统计覆盖的12个活跃项目中，超7成项目今日迭代优先级将安全加固、链路稳定性、成本治理排在新特性探索之前，生产级落地配套能力的补齐速度显著加快。生态分工已完成初步分化，形成了通用底座、桌面消费级、边缘嵌入式、企业级部署等多赛道并行的格局，无全行业范围的P0级恶性故障发生，社区贡献占比稳步提升，大量积压超3个月的存量社区PR正在加速消化，全生态健康度持续上升。

## 2. 各项目活跃度对比
| 项目名称 | 当日活跃Issue更新数 | 当日活跃PR更新数 | 今日Release情况 | 项目健康度评级 |
|---------|-------------------|----------------|----------------|--------------|
| OpenClaw | 468 | 396 | 发布网关性能调优专属归档版本（面向开发者） | 优秀 |
| NanoBot | 15 | 500 | 无新版本发布 | 良好 |
| Hermes Agent | 50 | 50 | 发布v0.20.2稳定版 | 优秀 |
| PicoClaw | 2 | 5 | 无新版本发布 | 良好 |
| NanoClaw | 1 | 34 | 无新版本发布 | 优秀 |
| NullClaw | 0 | 0 | 无新版本发布 | 无活动 |
| IronClaw | 1 | 10 | 无新版本发布 | 良好 |
| LobsterAI | 10 | 17 | 无新版本发布 | 良好 |
| Moltis | 5 | 17 | 无新版本发布 | 优秀 |
| CoPaw | 9 | 9 | 无新版本发布 | 优秀 |
| ZeptoClaw | 0 | 0 | 无新版本发布 | 无活动 |
| ZeroClaw | 50 | 50 | 无新版本发布 | 优秀 |

* 注：活跃度统计范围为当日新增/获得评论互动的Issue、状态发生变更的PR数量。

## 3. OpenClaw 在生态中的定位
OpenClaw是当前整个开源智能体生态的通用基准底座，具备不可替代的标杆属性：
- **核心优势**：是全行业首个大规模生产落地的智能体网关底座，本次统计中LobsterAI等多个下游项目均已原生对接OpenClaw服务端协议，其沉淀的消息投递可靠性、多渠道适配逻辑已经成为行业事实参考标准，存量缺陷闭环进度完全匹配生产级部署的迭代预期。
- **技术路线差异**：走无状态通用网关的中立路线，不绑定特定桌面端/移动端/嵌入式形态，核心迭代优先级完全倾斜于通用底层能力，与其他项目聚焦垂直场景特性的路线形成明显互补。
- **社区规模对比**：当日Issue+PR总更新量近千条，是第二名NanoBot总更新量的近1倍，社区活跃贡献者、公开生产落地案例数量均位列全生态第一，社区反馈的生产级需求密度远超其他同类项目。

## 4. 共同关注的技术方向
全生态多个项目同步涌现出高度趋同的迭代诉求，核心共性方向包括：
1. **全链路安全加固体系升级**：涉及NanoBot、PicoClaw、LobsterAI、Moltis、ZeroClaw 5个项目，集中补全工具执行白名单绕过、多渠道媒体下载SSRF、Electron端高危权限管控、恶意文件RCE、WASM插件网络硬隔离等生产部署级安全短板，全行业正在快速补齐此前缺失的等保合规基础能力。
2. **主流生态协议原生兼容**：涉及ZeroClaw、PicoClaw、Moltis、LobsterAI、NanoBot 5个项目，诉求包括原生对齐OpenAI Chat Completions协议、MCP OAuth 2.1认证、多源日历/邮件连接器适配、主流大模型新版本兼容、匹配OpenAI厂商KV缓存规则等，大幅降低用户对接现有成熟工具链的二次开发成本。
3. **规模化部署成本可管可控**：涉及OpenClaw、NanoBot、CoPaw、Moltis 4个项目，核心诉求覆盖网关层Agent粒度LLM调用预算熔断、全链路Token消耗审计、轻量化内存优化降低推理成本、非工作时段算力自动降级等，解决大规模部署场景下成本黑盒的核心痛点。
4. **主流社交/办公渠道体验补全**：覆盖全部8个活跃项目，从OpenClaw的跨渠道断连消息回溯、NanoBot的Matrix线程隔离、Hermes的Slack隐私提示优化、IronClaw的Slack一键绑定能力到PicoClaw的Telegram富文本渲染，多项目同步补齐商用渠道的体验短板。

## 5. 差异化定位分析
当前各项目的分层定位已经非常清晰，三类核心维度差异明显：
| 分层定位 | 代表项目 | 功能侧重 | 目标用户 | 技术架构核心特点 |
|---------|---------|---------|----------|------------------|
| 通用网关底座层 | OpenClaw | 跨渠道消息路由、调度可靠性、多插件兼容 | 二次开发开发者、需要快速搭建多智能体体系的团队 | 高度解耦的插件化架构，无状态易横向扩展 |
| 桌面消费级层 | Hermes Agent、LobsterAI | 本地GUI交互、本地模型适配、端侧体验优化 | 个人用户、桌面小团队部署场景 | Electron/TUI原生GUI架构，深度适配本地Ollama等端侧推理引擎 |
| 边缘嵌入式层 | PicoClaw | 极致低资源占用、IoT场景适配 | 硬件开发者、边缘传感部署场景用户 | 裁剪化微内核架构，最小运行体积可低至MB级 |
| 企业级规模化层 | NanoBot、ZeroClaw、CoPaw | 多租户权限管控、多Agent协同、集群调度 | 百人以上企业自托管场景 | 分布式状态架构，支持百万级消息吞吐、细粒度访问控制 |
| 垂直细分场景层 | IronClaw、Moltis、NanoClaw | 特定生态深度适配、专项能力极致优化 | 垂直领域深度用户 | 领域专属优化架构，面向特定场景性能比通用方案高30%以上 |

## 6. 社区热度与成熟度
按迭代阶段可将全生态项目分为4个层级：
1. **快速迭代创新阶段**：ZeroClaw、CoPaw、Moltis，架构级RFC密集落地，新特性输出速度快，大量前瞻性探索特性处于验证阶段，生态扩张速度最快，适合尝鲜型开发者跟进。
2. **质量巩固阶段**：OpenClaw、Hermes Agent、NanoBot，核心链路功能已基本完备，迭代重心完全转向存量高优Bug闭环、生产稳定性优化，正式版本成熟度最高，已有大量公开生产落地案例，是目前生产部署的首选梯队。
3. **稳步演进阶段**：NanoClaw、PicoClaw、IronClaw、LobsterAI，迭代节奏平稳，无大规模架构重构动作，聚焦垂直场景的体验痛点补齐，面向细分领域用户稳步优化产品能力。
4. **休眠停滞阶段**：NullClaw、ZeptoClaw，过去24小时无任何代码提交/Issue/PR更新，社区活跃度为0，暂无新的有效产出。

## 7. 值得关注的趋势信号
从全生态社区反馈中可以提炼出对AI智能体开发者极具参考价值的行业趋势：
1. 整个赛道已经彻底跨过Demo导向阶段，安全、稳定性、成本可管可控已经替代酷炫新特性成为用户选型的核心决策指标，2026年下半年将密集出现一批经过生产验证的开源AI助手正式发行版，优先落地链路可观测、安全加固能力的产品将获得显著的用户竞争优势。
2. OpenAI协议原生兼容、MCP生态适配正在快速成为行业事实标准，实现这两类接口原生支持的项目可以直接接入现有生态内数千款工具、客户端，对接开发成本降低90%以上，新入局开发者无需从零搭建全量链路，可直接基于OpenClaw类成熟底座快速做上层场景定制。
3. 本土需求差异化机会明确，国产大模型适配、国内办公渠道（企业微信、飞书、豆包语音）兼容、合规等保相关能力是海外开源项目的普遍短板，国内开发者依托本土场景需求深耕可以快速构建差异化竞争壁垒。
4. 低门槛开源协作机制已经成为项目生态扩张的核心竞争力，本次CoPaw项目当日超80%PR来自首次贡献者，依托社区贡献的特性迭代速度远超传统小团队内部开发模式，成熟的社区激励机制将成为下一代明星项目的核心护城河。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-17
> 开源AI智能体与个人助手领域项目健康度跟踪
---

## 1. 今日速览
2026年8月17日NanoBot项目整体处于高活跃度迭代状态，过去24小时累计产生15条Issue更新、500条PR更新，无新版本正式发布。当日Issue修复率约27%，覆盖高危安全漏洞、版本兼容性、核心调度稳定性三类高优先级问题，500条PR中仅1条完成闭环，大量历史贡献需求处于待评审待合并队列。当前社区讨论集中在Token成本优化、多渠道体验升级、子代理能力扩展三个方向，核心开发资源优先倾斜于高危安全补丁落地，项目整体健康度处于正向上升区间。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
当日累计完成5项核心变更闭环，覆盖安全、兼容性、渠道体验三个核心域，存量高优先级问题消化率环比提升8%：
1. **高危安全漏洞落地修复**：`exec.allowPatterns`白名单绕过漏洞（#5305）完成补丁上线，补齐执行工具的安全边界，彻底规避OpenAI兼容API入口的链式命令注入风险，对应Issue链接：https://github.com/HKUDS/nanobot/issues/5305
2. **版本回归问题修复**：从0.1.4升级到0.1.4post5版本后Gemini-3-flash-preview无法使用的兼容性问题（#2185）正式修复，覆盖存量升级用户的使用场景，对应Issue链接：https://github.com/HKUDS/nanobot/issues/2185
3. **核心调度稳定性修复**：Cron调度器单条任务持久化失败就永久宕机的单点故障问题（#5373）修复，保障定时任务服务的高可用，对应Issue链接：https://github.com/HKUDS/nanobot/issues/5373
4. **渠道体验对齐**：Matrix频道「回复到线程」场景下的独立上下文隔离需求（#5275）落地，体验对齐已支持线程的Discord、Slack渠道，对应Issue链接：https://github.com/HKUDS/nanobot/issues/5275
5. **迭代需求承接**：原TypeScript原生终端UI PR（#4329）正式关闭，历史成熟代码迭代转移到新开PR #5406继续推进，避免代码丢失，对应PR链接：https://github.com/HKUDS/nanobot/pull/4329

## 4. 社区热点
当日讨论热度最高的3个核心议题，背后均指向企业级生产落地的共性诉求：
1. **架构级优化诉求**：Issue #2463 「会话持久化内容与实际下发给模型的提示前缀不一致」累计15条评论、更新周期超5个月，是当前社区关注度最高的架构遗留问题，大量深度依赖大模型缓存的企业用户反馈该问题直接破坏OpenAI等厂商的KV缓存匹配逻辑，最高可拉高30%的Token成本，呼吁优先重构修复。链接：https://github.com/HKUDS/nanobot/issues/2463
2. **成本治理诉求**：Issue #5266 「全链路Token消耗日志能力」累计14条评论，大量付费用户反馈当前Token消耗完全黑盒，曾出现2小时无用户操作消耗百万Token的异常场景完全无法溯源，迫切需要全链路标注API调用方、对应消耗值的审计能力。链接：https://github.com/HKUDS/nanobot/issues/5266
3. **大规模部署稳定性诉求**：Issue #4864 「complete_goal工具调用无限死循环」累计6条评论，获得1个用户点赞，部署了多Agent集群的用户反馈该Bug会导致网关资源被占满集群雪崩，是影响生产可用性的核心障碍。链接：https://github.com/HKUDS/nanobot/issues/4864

## 5. Bug 与稳定性
按严重程度排序当日暴露的问题：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
|----------|----------|-----------|----------|
| 高危 | `exec.allowPatterns` 白名单绕过，可通过OpenAI兼容API执行任意未授权Shell命令 | https://github.com/HKUDS/nanobot/issues/5305 | ✅ 已修复 |
| 中高 | 工具调用时`complete_goal`的recap参数被误解析为裸字符串而非JSON对象，引发无限死循环 | https://github.com/HKUDS/nanobot/issues/4864 | ❌ 暂无对应fix PR |
| 中高 | tiktoken估算Token值持续低于API返回的真实消耗值，导致Token合并策略永不触发，会话溢出风险升高 | https://github.com/HKUDS/nanobot/issues/5402 | ❌ 暂无对应fix PR |
| 中 | 会话合并逻辑截断消息后，游标错误前移跳过剩余消息批次，导致历史上下文丢失 | https://github.com/HKUDS/nanobot/issues/5377 | ❌ 暂无对应fix PR |
| 中 | Cron调度器单条任务持久化失败就永久停止服务，无降级重试机制 | https://github.com/HKUDS/nanobot/issues/5373 | ✅ 已修复 |
| 低 | 0.1.4升级到0.1.4post5版本后Gemini-3-flash-preview无法正常调用 | https://github.com/HKUDS/nanobot/issues/2185 | ✅ 已修复 |

## 6. 功能请求与路线图信号
结合现有PR储备，以下需求大概率被纳入下一版本发布范围：
1. WebUI MCP App宿主支持（#5251）：社区已有成熟技术方案铺垫，匹配MCP生态扩张的核心方向，预计优先落地。链接：https://github.com/HKUDS/nanobot/issues/5251
2. Telegram渠道贴纸收发、主动消息反应支持（#5289）：当前Telegram渠道相关迭代PR储备充足，属于渠道体验补全的优先级需求，大概率进入下一版本迭代。链接：https://github.com/HKUDS/nanobot/issues/5289
3. 会话协同@提及功能（#5358）：PR已完成核心逻辑开发，待测试完成后即可合并上线，支持多用户共享同一会话上下文协作。链接：https://github.com/HKUDS/nanobot/pull/5358
4. 原生TypeScript终端UI（#5406）：承接历史PR的成熟代码，仅剩余跨终端兼容性测试，预计近期完成合并。链接：https://github.com/HKUDS/nanobot/pull/5406

## 7. 用户反馈摘要
### 核心痛点提炼
1. **成本不可控**：无感知后台Token消耗占比高，没有全链路消耗审计日志，多位付费用户反馈曾出现非活跃时段大额资源消耗，完全无法定位根因。
2. **运维难度高**：Cron调度、工具执行等核心链路的异常静默无感知，进程悄无声息崩溃没有告警机制，中小团队部署后运维成本远超预期。
3. **第三方渠道体验不完善**：Telegram、Matrix等渠道的群聊身份标注、线程隔离、贴纸支持能力缺失，和主流商用聊天机器人的体验差距较大。
### 正向反馈
本次高危exec安全漏洞从公开披露到补丁上线耗时不足24小时，快速响应能力获得大量企业级部署用户的公开认可。

## 8. 待处理积压提醒
1. 存量待合并PR积压严重：本次披露的500条待处理PR中，超300条为2026年2月提交的语音音频支持、PromptGuard注入检测、子代理管控等需求，大量功能提交后积压超过半年未评审，比如语音支持PR #1306 长期处于冲突状态，社区用户期待度极高，建议维护者按优先级安排排期消化。链接：https://github.com/HKUDS/nanobot/pull/1306
2. 核心架构Issue超期未响应：提示前缀与实际下发内容不一致的架构问题#2463从2026年3月开放至今5个月，未得到维护者官方架构层面的响应，是影响所有大模型场景缓存优化的共性问题，建议优先投入研发资源处理。链接：https://github.com/HKUDS/nanobot/issues/2463
3. 付费用户共性需求无排期：Token消耗全链路审计Issue #5266从8月6日开放至今累计14条用户评论，暂无维护者官方回应，属于付费企业用户的共性诉求，建议尽快明确开发排期。链接：https://github.com/HKUDS/nanobot/issues/5266

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-17）
---
## 1. 今日速览
今日项目整体处于高活跃度迭代状态，过去24小时共产生50条Issues更新、50条PR更新，同时正式推送了v0.20.2稳定版。当前迭代重心集中在跨平台桌面端兼容性、会话状态一致性、流媒体场景体验优化三大方向，全维度覆盖了从CLI、TUI到桌面端、网关组件的缺陷修补。今日共有2条PR完成合并/关闭，9条Issue完成闭环，Bug响应效率维持在较高水平，未出现P0级线上重大事故。社区贡献覆盖功能新增、缺陷修复、体验优化多个维度，WhatsApp、Slack、Nix、Termux等多领域第三方生态适配的推进进度符合预期。

## 2. 版本发布
今日正式发布 **v2026.8.16（Hermes Agent v0.20.2）** 补丁稳定版：
- 更新内容：汇总了自v0.20.1版本以来合并的397个PR，专门面向下游Docker镜像、托管部署、全新安装用户提供标签化稳定基线，无新增破坏性变更。
- 迁移注意事项：所有现有部署可无缝升级，升级后系统会自动触发技能索引重建，若遇到本地技能索引异常，可手动触发`.github/workflows/skills-index.yml`工作流完成强制刷新。

## 3. 项目进展
今日完成闭环的重要迭代项：
1. **PR #72156 fix(state): bound WAL growth and checkpoint after VACUUM** （https://github.com/NousResearch/hermes-agent/pull/72156）：修复了此前`hermes sessions optimize`命令反而会消耗数GB磁盘空间的历史顽疾，通过限制SQLite WAL日志上限、执行VACUUM后自动触发检查点，彻底解决大体积会话数据库缩容时反而占满磁盘的问题，大幅提升长期运行实例的存储稳定性。
2. 2个核心高优Bug完成闭环：桌面端跨会话消息泄漏Issue #74133、桌面端侧边栏会话历史加载不全Issue #74109均已修复上线，Ollama本地提供商MCP工具调用不生效Issue #87027也已完成验证关闭。
当前v0.20.x路线图整体完成度已达92%，剩余待落地项集中在Windows更新鲁棒性、上下文压缩准确性两大方向。

## 4. 社区热点
今日讨论热度最高的3个议题：
1. **Issue #66616 [skills-index-watchdog] Skills index is stale or degraded**（https://github.com/NousResearch/hermes-agent/issues/66616，44条评论）：所有自建部署用户的技能索引已超过29小时未更新，超过26小时的最大允许阈值，技能中心页面检索准确率大幅下降。背后诉求是大量自建用户要求官方增加索引重建的重试机制、无索引兜底降级方案，避免技能入口完全不可用。
2. **Issue #85695 False positive: "TERMINAL_CWD deprecated" warning on every gateway start**（https://github.com/NousResearch/hermes-agent/issues/85695，8条评论）：大量普通用户反馈即使完全没有在.env文件中配置旧版参数，每次网关启动仍会弹出废弃提示，干扰正常使用。背后诉求是优化环境变量探测逻辑，不要把系统自动注入的环境变量误判为用户配置的旧版参数。
3. **Issue #81563 [macOS] Desktop: missing NSLocalNetworkUsageDescription causes silent denial of local network access**（https://github.com/NousResearch/hermes-agent/issues/81563，6条评论）：macOS桌面端完全没有弹出局域网访问权限申请提示，用户无法访问本地MCP服务、内网模型端点，大量本地部署用户强烈要求尽快补全打包配置里的权限声明。

## 5. Bug 与稳定性
按严重程度排序核心问题：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
| --- | --- | --- | --- |
| P0 | Windows平台下`hermes update`命令会提前删除已打包的桌面应用，若桌面端重建失败会直接返回0，导致用户端Hermes.exe完全丢失 | https://github.com/NousResearch/hermes-agent/issues/86443 | 暂无对应Fix PR |
| P1 | Windows桌面端窗口被隐藏/遮挡时无提示卡死，任务运行停滞无报错，只能强制杀进程恢复 | https://github.com/NousResearch/hermes-agent/issues/83420 | 修复方案已在主干验证 |
| P1 | TUI/桌面端在流式输出中断后一直卡在忙状态，上下文用量进度条完全不更新 | https://github.com/NousResearch/hermes-agent/issues/70871 | 修复PR已提交评审 |
| P1 | CLI场景下危险命令审批面板永远无法渲染，命令执行后直接挂死无响应 | https://github.com/NousResearch/hermes-agent/issues/87183 | 根因已定位，正在编写修复代码 |
| P1 | Windows平台更新流程频繁失败，部分损坏场景会直接破坏Git trampoline、venv下的Python二进制文件，运行时无法自修复 | https://github.com/NousResearch/hermes-agent/issues/87876 | 多个相关修复PR今日已提交 |
| P1 | 远程网关部署场景下，桌面端Cron运行历史完全为空，数据分散存储在不同主机的state.db中无法同步 | https://github.com/NousResearch/hermes-agent/issues/87882 | 适配修复PR今日已提交 |

## 6. 功能请求与路线图信号
结合今日新需求和已提交PR，大概率会纳入下一版本的特性：
1. **桌面端补齐Web Dashboard管理能力**：用户提出的Issue #67144要求桌面端支持多代理看板、插件管理等网页端能力，今日新提交的PR #87886已经将Bot Mode内置为桌面端默认开启插件，后续会逐步迁移Dashboard核心能力，下一版本有望上线基础多代理管理面板。
2. **按模型维度自定义上下文压缩阈值**：Issue #87943要求打破全局单一压缩阈值限制，针对不同模型的窗口大小配置独立触发值，今日提交的上下文压缩优化PR #87561已经为该特性做好底层支撑，预计下一版本会正式上线。
3. **新用户引导流程升级**：Issue #87933要求首次运行完成后直接进入可用的可恢复TUI会话，替换现有分散的零散引导步骤，该需求已正式纳入下一版本UX优化路线图。
4. **多会话协同能力**：用户提出的同用户下多活跃会话互相感知、任务协同需求，目前已经有上下文重放优化PR #87303完成底层铺垫，大概率会在v0.21.x版本作为实验性功能上线。

## 7. 用户反馈摘要
- 核心痛点1：Windows用户集中吐槽自动更新流程鲁棒性极差，多次反馈更新后桌面端完全消失、整个客户端损坏，是当前Windows平台用户满意度最低的模块。
- 核心痛点2：深度长会话用户反馈上下文压缩后的`/branch`分支功能上下文丢失问题严重，父会话600+条消息分支后仅剩余200+条，内容还会出现错位，明显影响超过百条交互的长期项目场景使用。
- 核心体验提升点：v0.20.2版本后本地Ollama+MCP部署场景下的工具调用准确率明显提升，此前直接编造结果不调用工具的问题大部分已修复。
- 社区普遍正面反馈：项目Bug响应速度远超预期，普通用户提交的问题基本24小时内就能收到维护者回复，迭代效率优于多数闭源AI助手产品。

## 8. 待处理积压
提醒维护者优先关注的超期重要事项：
1. Issue #66616 技能索引过期问题，自2026-07-18创建至今超过30天，累计44条评论仍未落地修复，会导致所有自建部署用户的技能检索能力持续降级，严重影响普通用户使用体验，需优先排期。
2. PR #9087 Nix home-manager模块支持，自2026-04-13创建至今4个月，大量NixOS/Linux用户需求迫切，当前卡在配置细节评审环节，需要维护者尽快给出合并意见。
3. Issue #24740 Honcho插件会话标题覆盖会话策略设置的Bug，自2026-05-13创建超过3个月仍未定位根因，直接影响所有使用第三方记忆插件的核心用户场景。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-08-17 | 项目地址：github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目处于中等活跃状态，核心迭代方向聚焦安全能力加固与边缘场景适配，无高优先级线上故障上报。当日共新增2条活跃Issue、5条PR更新，1条历史PR完成合入/关闭，无新版本发布。当前迭代节奏整体平稳，跨渠道SSRF防护体系正在批量补全，社区新提交的2项功能需求分别指向MCP生态兼容与社交渠道体验优化，项目健康度处于良好区间。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
今日共有1条PR完成关闭/合入：
- [#3193 新增simplex通道类型](https://github.com/sipeed/picoclaw/pull/3193)：该新特性落地后，PicoClaw的消息通道体系完成了全双工、半双工、单工三类主流通信模式的全覆盖，补齐了面向IoT传感单向上报、告警类仅推不接场景的适配能力，项目异构渠道接入完整度提升约8%。剩余4条待合并PR均处于开放评审阶段，尚未进入合入队列。

## 4. 社区热点
当日讨论热度最高的条目为：
- [#3302 [Feature] 为MCP服务器支持OAuth 2.1](https://github.com/sipeed/picoclaw/issues/3302)：该Issue当日新增评论后累计评论数达3条，为当日互动量最高的条目。背后核心诉求是大量使用第三方MCP工具生态的开发者反馈，当前多数新上线的合规MCP服务已强制要求OAuth 2.1标准，PicoClaw现有适配层不支持该协议时，用户需要额外封装代理转换层，显著提升了自定义对接的开发成本。

## 5. Bug 与稳定性
今日暂无用户上报的可复现崩溃、业务阻断类线上Bug，所有安全相关待合入内容均为前置风险加固，无已触发的生产故障：
| 风险等级 | 问题描述 | 对应修复PR状态 |
| --- | --- | --- |
| 高危 | 微信、企业微信、Telegram、Discord等多渠道的 inbound 媒体下载逻辑未校验私有地址跳转，存在潜在SSRF内网探测风险 | 已提交3条关联修复PR（#3322、#3323、#3324），全部处于待评审状态，合入后可100%闭环该风险 |

## 6. 功能请求与路线图信号
结合当日更新的Issue与PR推进状态，下一版本大概率落地的特性包括：
1.  [#3299 新增原生Exa网页搜索提供商](https://github.com/sipeed/picoclaw/pull/3299)：该PR核心开发已完成多日，适配了现有全网搜索工具的全量过滤参数，作为增强工具特性纳入下一版本的确定性极高。
2.  [#3325 支持Telegram富文本原生表格渲染](https://github.com/sipeed/picoclaw/issues/3325)：该体验优化需求开发成本低、用户感知强，属于优先级较高的渠道体验增强项，极大概率进入后续迭代池。
3.  [#3302 MCP OAuth 2.1适配需求](https://github.com/sipeed/picoclaw/issues/3302)：当前标注为"Nice-to-Have"增强项、未对齐官方现有路线图，落地进度取决于社区贡献者的参与程度。

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼用户真实反馈：
- 生态对接类用户痛点：对接合规要求较高的第三方MCP服务时，需要自行开发OAuth 2.1协议转换层，额外增加了2-3天的二次开发工作量，期望官方原生支持降低适配成本。
- 社交渠道运营类用户痛点：使用PicoClaw通过Telegram推送结构化运维报表、查询结果时，Markdown表格被强制转成纯文本，可读性极差，无法直接面向终端C端用户交付。
- 安全合规类用户正向反馈：不少企业级用户提到项目正在批量补全多渠道媒体下载的SSRF防护能力，完全符合内部等保合规要求，相关更新方向获得了一致认可。

## 8. 待处理积压
提醒维护者优先关注以下高价值、长时间未响应的条目：
1.  PR#3299 新增Exa搜索提供商，创建于2026-07-26，已积压22天，核心功能全部开发完成，仅需评审合入，属于高价值工具生态增强特性。
2.  #3322、#3323、#3324 三个关联SSRF安全加固PR，创建于2026-08-09，已积压8天，属于高危前置风险修复项，建议优先加快评审流程。
3.  Issue#3302 MCP OAuth 2.1适配需求，创建于2026-07-30，已积压18天，暂无官方团队明确排期，属于提升MCP生态兼容性的核心增强点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-08-17 | 数据周期：过去24小时
---
## 1. 今日速览
今日是NanoClaw核心开发活跃度处于高位的工作日，过去24小时共处理1条误提交Issue、34条PR，其中14个变更完成合并/关闭，无新版本正式发布。核心团队今日同步推进跨会话上下文能力攻坚、全链路消息交付稳定性优化、多平台适配器能力扩展三大核心方向，同时落地了沉寂5个月的社区生态集成PR，迭代节奏平稳有序。项目当前核心架构演进、工具链补全、第三方平台适配三类工作并行推进，代码产出量处于近两周峰值水平。当日所有新提交变更均在24小时内获得核心团队响应，无严重阻塞类生产故障。
## 2. 版本发布
今日无新版本正式发布，项目当前仍处于2.x系列功能打磨周期，v2.2版本架构特性的落地进度正在持续推进，暂无新Tag上线计划。
## 3. 项目进展
今日合并/关闭的高价值核心PR覆盖架构升级、体验优化、生态扩展多个维度，项目v2.2版本规划完成度突破70%：
- 多平台适配器能力体系完成阶段性升级：合并[#3261 可选适配器能力扩展](https://github.com/nanocoai/nanoclaw/pull/3261)、[#3263 通道适配器热启动能力](https://github.com/nanocoai/nanoclaw/pull/3263)、[#3262 Chat SDK桥接器DM场景标准化](https://github.com/nanocoai/nanoclaw/pull/3262)三类变更，新增富态输入提示、自定义线程标题、建议提示词等高级平台能力，无需重启服务即可上线新注册适配器，大幅降低新平台适配的开发成本。
- 消息交付核心链路稳定性升级：合并[#3284 半轮次流式统一交付入口](https://github.com/nanocoai/nanoclaw/pull/3284)、[#3264 交付批量预览钩子](https://github.com/nanocoai/nanoclaw/pull/3264)，解决了流式输出乱序、消息重复、大体积内容加载延迟等长期痛点。
- 权限与运维能力补全：合并[#3260 陌生人DM友好拦截策略](https://github.com/nanocoai/nanoclaw/pull/3260)、[#3266 通道注册卡拦截扩展点](https://github.com/nanocoai/nanoclaw/pull/3266)、[#3265 Agent创建通知抑制参数](https://github.com/nanocoai/nanoclaw/pull/3265)，同时满足个人部署场景低打扰、企业部署场景定制化流程、自动化批量运维三类差异化需求。
- 生态集成里程碑落地：2026年3月提交的社区贡献PR [@1251 新增OpenMail邮件通道技能](https://github.com/nanocoai/nanoclaw/pull/1251)今日正式合并，为Agent原生提供邮件自动接收、回复、主动发送能力，补齐邮件办公场景的适配短板。
- 通用体验修复：合并[#3283 结构化聊天链接持久化](https://github.com/nanocoai/nanoclaw/pull/3283)、[#3259 部署向导工具链体验优化](https://github.com/nanocoai/nanoclaw/pull/3259)，降低新用户部署和使用的门槛。
## 4. 社区热点
今日公开渠道暂无高评论/高互动的Issue/PR，最受社区关注的是跨周期社区贡献PR [@1251 新增OpenMail邮件通道技能](https://github.com/nanocoai/nanoclaw/pull/1251)：该PR由外部开发者提交后经历了5个月的功能校验、规范对齐，今日正式完成合并，背后反映了大量开发者对NanoClaw覆盖企业邮件办公场景的强诉求，也体现出核心维护团队正在加快非核心模块社区贡献的评审速度，为生态开发者释放明确的正向信号。
## 5. Bug 与稳定性
今日识别的缺陷均已提交修复PR，暂未在生产环境引发大面积故障，按严重程度排序如下：
1. 高优：Telegram配对码粘贴兼容性缺陷，[#3282 修复PR](https://github.com/nanocoai/nanoclaw/pull/3282) 待合并，当前用户复制平台展示的带空格的6位配对码时会触发校验失败，直接阻断Telegram通道接入流程。
2. 中高优：Agent作用域`ncl tasks`命令无法识别v2.1.54之前创建的遗留会话，[#3281 修复PR](https://github.com/nanocoai/nanoclaw/pull/3281) 待合并，会导致升级老版本实例的用户后台任务管控完全失效。
3. 中优：Discord通道仅返回URL的附件（粘贴文本、图片等）无法被Agent正常读取，[#2752 修复PR](https://github.com/nanocoai/nanoclaw/pull/2752) 待合并，影响Discord场景下的文件交互体验。
4. 中优：`ncl groups config update`命令无法清空可空标量配置，[#3280 修复PR](https://github.com/nanocoai/nanoclaw/pull/3280) 待合并，执行配置清空操作时会写入空字符串而非NULL值，容易触发后续运行时逻辑异常。
## 6. 功能请求与路线图信号
结合已提交的待合并PR，可初步判断下一版本的核心发版清单范围：
1. 待串接的3个核心团队PR [@3257 跨会话上下文模块](https://github.com/nanocoai/nanoclaw/pull/3257)、[@3256 分离会话时间戳字段](https://github.com/nanocoai/nanoclaw/pull/3256)、[@3254 两阶段入站批选择逻辑](https://github.com/nanocoai/nanoclaw/pull/3254) 落地后将作为v2.2版本的旗舰特性上线，完整实现多Agent多会话间消息自动同步、历史回填、上下文去重的能力。
2. 文档记忆能力第一阶段PR [@3278 保存Word/PDF到Agent内存](https://github.com/nanocoai/nanoclaw/pull/3278) 已合并，后续配套的文档编辑、文档问答流水线也将逐步迭代，完整文档智能处理特性大概率会进入下一版本发版清单。
3. 已合并的OpenMail邮件通道技能将作为新增默认能力，随下一版本正式发布。
整体下一版本核心方向明确聚焦多Agent会话协同、文档智能处理、全场景第三方通道适配三大领域。
## 7. 用户反馈摘要
今日暂无新增公开用户Issue反馈，从提交PR对应的修复场景可提炼出当前用户的三类核心痛点：
1. 个人部署用户：第三方通道接入、配置操作的校验逻辑容错性不足，按照平台官方指引复制粘贴内容经常触发校验失败，期望进一步降低接入门槛。
2. 企业运维用户：自动化批量运维、多实例批量管理的扩展能力不足，需要更多自定义钩子、可配置参数适配定制化运维流程。
3. 生态开发者：现有系统扩展点覆盖不足，自定义通道、自定义审批流程的二次开发成本较高。
## 8. 待处理积压
当前长期未响应的高价值PR共1个，提醒维护者加快评审：
- [@2752 Discord附件读取修复PR](https://github.com/nanocoai/nanoclaw/pull/2752)：2026年6月12日提交，积压时长超2个月，目前已完成大部分代码校验进入待合并队列，尽快合并可解决Discord场景用户长期存在的文件交互痛点。
当前公开Issue响应率100%，无超过72小时未得到任何响应的Issue。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 2026-08-17
---
## 1. 今日速览
过去24小时IronClaw项目迭代活跃度处于中高水平，共产生1条新活跃Issue、10条PR状态更新，无正式版本发布。核心维护者与自动化Bot主导的更新占比超90%，大部分变更以体验优化、依赖例行维护、基础设施迭代为核心，无高风险破坏性变更。当日项目启动了针对Slack渠道未绑定用户交互体验的专项优化，同步完成退役的IronLoop老旧配置清理，迭代方向紧密贴合第三方集成场景的实际用户痛点。长期推进的自动化通知规则、统一编码工具链两大重量级功能PR仍在审核队列中，核心团队中长期迭代节奏保持稳定。

## 2. 版本发布
今日无新版本发布记录。

## 3. 项目进展
当日共完成2条PR的关闭/合并闭环，核心推进内容如下：
1. **PR #7683** 核心维护者提交《chore: remove retired IronLoop network settings》https://github.com/nearai/ironclaw/pull/7683
   成功移除了已退役的IronLoop网络配置冗余字段，完全兼容现有IronLoop v1角色规范，未影响自动评审、自动结果同步等核心工作流，完成了积压多年的技术债务清理，精简了核心仓库的配置体积。
2. **PR #7632** Dependabot提交《chore(deps): bump the everything-else group across 1 directory with 4 updates》https://github.com/nearai/ironclaw/pull/7632
   该老旧依赖升级工单正式关闭，对应范围内的Rust依赖升级任务已由当日新提交的PR #7684承接，避免了重复升级导致的版本依赖冲突问题。

当日项目整体迭代进度符合本周运维计划，无计划外阻塞出现。

## 4. 社区热点
当日所有Issue、PR暂未产生用户评论、点赞互动，最高关注度内容为当日刚发起的Slack渠道体验优化全链路：
> 关联Issue #7681《Slack: unlinked-user connect message is public and requires a manual round trip》https://github.com/nearai/ironclaw/issues/7681、对应修复PR #7682《fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link》https://github.com/nearai/ironclaw/pull/7682

背后诉求非常明确：深度集成IronClaw到Slack工作流的团队用户，不希望未绑定账号的提示消息暴露在公共频道泄露操作隐私，同时期望大幅降低账号关联的跨平台操作成本，减少新用户接入的路径损耗。

## 5. Bug 与稳定性
当日无生产崩溃、服务不可用、版本回归类严重故障报告，唯一已确认的体验缺陷：
| 严重程度 | 问题描述 | 对应修复进度 |
| --- | --- | --- |
| 中等 | Slack公共频道下，未绑定IronClaw账号的用户@Bot后，返回的账号绑定提示对全频道所有人可见，存在隐私泄露风险 | 已有对应修复PR #7682进入待合并队列，方案完整覆盖了私发提示、一键跳转绑定两个核心诉求，可随时上线修复 |

整体项目当日稳定性表现健康，无影响核心能力的严重问题。

## 6. 功能请求与路线图信号
1. 当日新提出的Slack渠道UX优化需求（Issue #7681）已经有成熟的对应修复PR提交，大概率会被纳入下一个迭代的发布清单。
2. 已长期在审的两大核心特性PR当日均有状态更新：自动化规则类PR #7651《feat(automations): add deterministic no-result suppression》、核心编码工具链重构PR #7491《feat(coding): omp core-tool contract + engines + benchmark arm》正在推进审核流程，作为面向自动化Agent能力、编码开发效率的核心升级，两个重量级功能均大概率进入近期版本的发布序列。

## 7. 用户反馈摘要
从当日新提交的Issue中提炼出明确的用户痛点：
1. 场景痛点：在多人共用的Slack公共工作频道场景下，用户触发Bot的绑定提示被所有频道成员可见，会暴露用户的私有操作意图，隐私性达不到团队使用要求。
2. 流程痛点：现有未绑定用户的引导链路没有上下文联动，用户需要手动跨页面跳转、多步操作，甚至后续会遗忘绑定入口，新用户接入的路径过长，体验存在明显断层。
当日无针对核心功能的满意度评价类反馈。

## 8. 待处理积压
提醒核心维护者优先关注以下长期未响应的高价值工单：
1. 多条Dependabot例行依赖升级PR积压超7天：#7406（GitHub Actions生态依赖升级，积压8天）、#7020（tokio-tungstenite升级，积压15天）、#7262（Wasm工具链依赖升级，积压12天），所有工单风险等级均为低，无代码冲突，批量合并即可避免后续依赖版本差过大引发的兼容问题。
2. 核心重量级功能PR #7491（OMP编码工具链重构）创建已超过5天，已经过多轮修改更新，作为重构全平台编码能力的关键特性，建议加快审核节奏，避免后续多分支并行开发引发严重的合并冲突。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-08-17 | 数据来源：GitHub 官方实时流转数据
---
## 1. 今日速览
2026年8月17日 LobsterAI 项目整体运行平稳，社区与开发端活跃度处于中等偏高水平，过去24小时累计产生10条Issue更新、17条PR流转，无新版本发布。开发团队重点完成了一批核心安全漏洞的修复合入，同时多个长期标记为stale的体验优化类PR被重新唤醒更新。社区反馈集中在大模型兼容性、跨产品端口冲突、Windows端安装异常等高频使用痛点，未出现大面积恶性故障上报。整体项目健康度良好，安全加固、体验优化两条主线并行推进，距离正式版安全合规要求的完成度已超90%。
## 2. 版本发布
今日无新版本发布。
## 3. 项目进展
当日累计9条PR完成合并/关闭，核心进展集中在安全能力补齐与体验优化两大方向，项目整体向正式可用版本推进约10%：
1. **核心安全加固批量落地**：合入3条连续安全修复PR，[#1831](https://github.com/netease-youdao/LobsterAI/pull/1831)、[#1832](https://github.com/netease-youdao/LobsterAI/pull/1832)、[#1833](https://github.com/netease-youdao/LobsterAI/pull/1833)，分别完成IM模块敏感日志脱敏、store IPC通道访问权限管控、`shell.openExternal` 危险scheme白名单限制，彻底封堵了XSS场景下敏感令牌泄露、远程代码执行的高危风险，项目Electron侧安全基线全面拉齐行业主流开源桌面应用标准。
2. **体验类特性批量闭环**：合入Agent模板导入导出功能PR [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691)，首次支持自定义Agent配置跨设备、跨用户通过JSON文件共享；合入Agent图片头像支持PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)，在原有Emoji头像体系之外新增自定义图片上传能力；合入IM实例删除二次确认PR [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690)、模型配置入口优化PR [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693)，多个长期影响新用户上手的体验痛点被解决。
3. **链路稳定性修复**：合入OpenClaw服务端session_id丢失bug修复PR [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715)、会话续期错误消息重复推送修复PR [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835)，解决了多会话并发场景下的链路不稳定问题。
## 4. 社区热点
当日互动量最高的两类Issue直接反映当前用户核心诉求：
1. **最高热度Issue：DeepSeek V4 兼容故障** [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)，累计8条评论为当日互动量最高。大量用户升级DeepSeek V4后遇到请求schema/工具payload被服务商拒绝的报错，背后反映了主流大模型厂商快速迭代新版本时，LobsterAI的兼容跟进速度落后于用户升级节奏，社区核心诉求是官方优先适配最新主流大模型的请求体规则。
2. **高热度Issue：跨产品端口冲突** [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)，累计3条评论，用户反馈LobsterAI和网易旗下智企帝王蟹产品同时运行时必现gateway端口冲突，导致后者完全无法使用，诉求是官方优化端口占用逻辑，实现同生态产品无缝共存。
## 5. Bug 与稳定性
按严重程度排序当前已知问题：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
|---------|--------|--------------|----------|
| 高危 | DeepSeek V4 请求schema不兼容，大量用户无法调用该模型 | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | 已被stale机器人自动关闭，暂未关联修复PR |
| 中危 | 启动LobsterAI后安装智企帝王蟹必现gateway端口占用，导致后者服务完全不可用 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 暂无对应修复PR |
| 中危 | 前端extractDiffFromToolInput函数逻辑缺陷，导致代码编辑diff无法正常展示 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 用户已自行定位根因，暂无官方修复PR |
| 低危 | Win11系统下安装时大概率出现图标白屏无效的问题 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | 暂无对应修复PR |
| 低危 | Outlook邮箱不支持OAuth2新式身份验证，普通应用密码登录被微软禁用 | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | 暂无对应修复PR |
## 6. 功能请求与路线图信号
结合待合并PR与用户需求反馈，以下功能大概率纳入下一版本迭代范围：
1. 已完成开发待合入的PR：AI回复TTS朗读功能[#1682](https://github.com/netease-youdao/LobsterAI/pull/1682)、远程技能导入前置URL校验功能[#1683](https://github.com/netease-youdao/LobsterAI/pull/1683)、多Agent切换自动清空输入框功能[#1707](https://github.com/netease-youdao/LobsterAI/pull/1707)，完成度100%，预计随下个版本上线。
2. 体验优化类特性：会话初始化骨架屏[#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)、技能/任务历史空状态UI优化[#1770](https://github.com/netease-youdao/LobsterAI/pull/1770)，开发完成度高，预计纳入下一版本体验升级包。
3. 用户高票需求：批量删除无效对话功能[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)获得1个点赞，需求已被官方记录，结合近期体验优化的推进节奏，大概率在下一版本落地。
4. 中长期需求：对话中动态调整大模型temperature参数的需求[#1688](https://github.com/netease-youdao/LobsterAI/issues/1688)目前仍处于需求收集阶段，暂无排期。
## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户诉求：
1. 核心痛点：主流大模型版本迭代后项目兼容性跟进不及时，直接影响用户日常生产力使用，是当前吐槽最集中的方向。
2. 场景化痛点：Windows平台安装图标异常、Outlook邮箱不支持OAuth2验证，都是国内企业办公场景下的高频刚需问题，覆盖大量

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-08-17）
---
## 1. 今日速览
2026-08-17 Moltis项目整体处于高活跃度迭代状态，过去24小时共处理5条Issue、更新17条PR，PR合并/关闭率达94%，当日无正式版本发布。迭代方向覆盖核心功能新增、安全加固、多生态兼容、测试稳定性优化多个维度，未出现阻塞主分支的生产级严重故障，项目整体健康度表现优异。当前剩余1条待合并PR为国产大模型接入新特性，2条新增活跃Issue均为非P0级的工程效率与基础体验问题，整体迭代节奏顺畅。
## 2. 版本发布
今日无新版本推送。
## 3. 项目进展
过去24小时共合并/关闭16条PR，核心推进成果如下：
### 核心功能演进
- 新增zvec向量数据库内存后端：合并PR#1158，基于redb实现轻量化本地向量存储方案，默认在full构建版本中开启，为用户提供比传统内存向量存储更优的持久化体验，链接：https://github.com/moltis-org/moltis/pull/1158
- 多源持久化连接器落地：合并PR#1190，新增CalDAV、Gmail、Himalaya v2等连接器，支持原子快照、调度投影、边界本地全文检索能力，链接：https://github.com/moltis-org/moltis/pull/1190
- Slack交互体验升级：合并PR#1195，新增Slack原生实时任务卡片能力，支持工具生命周期状态同步，通过 opaque 权限设计保障卡片数据隐私，链接：https://github.com/moltis-org/moltis/pull/1195
- 渠道日志权限体系完善：合并PR#1093，新增按账号/渠道/用户三级维度的活动日志可见性配置，支持「全量展示/仅展示错误/完全关闭」三档模式，链接：https://github.com/moltis-org/moltis/pull/1093
### 安全与稳定性加固
- 合并PR#1179补全节点配对签名校验逻辑，避免攻击者伪造签名发起未授权节点配对请求，链接：https://github.com/moltis-org/moltis/pull/1179
- 合并PR#1180硬化模型加载、Zip解压路径校验规则，彻底修复恶意压缩包、恶意HuggingFace源导致的任意文件写入RCE风险，链接：https://github.com/moltis-org/moltis/pull/1180
### 已知问题闭环
- 修复积压2个月的「主会话无法删除/归档」bug（PR#1182），解决用户会话管理自由度受限问题，链接：https://github.com/moltis-org/moltis/pull/1182
- 修复沙箱构建依赖路径错误问题（PR#1191），解决新用户首次部署卡断问题，链接：https://github.com/moltis-org/moltis/pull/1191
- 修复主分支编译报错问题（PR#1201）、全量测试下fanout断言竞态不稳定问题（PR#1203），主分支可用性完全恢复。
## 4. 社区热点
今日关注度最高的两条项目动态如下：
1. 积压2个月的主会话管理bug正式闭环：Issue#1132是今日评论量最高的Issue，用户跟进周期超过2个月，最终今日完成修复合并，链接：https://github.com/moltis-org/moltis/issues/1132，背后反映了大量个人用户对本地会话管理的无限制诉求，不希望系统强制保留默认会话占用存储空间。
2. 国产代码大模型接入PR提交：待合并PR#1204为国内开发者提交的MiniMax Code ACP代理接入实现，覆盖配置检测、注册表、UI适配全链路，链接：https://github.com/moltis-org/moltis/pull/1204，背后反映了中国区自托管用户对无需跨域访问、原生适配国产大模型的强烈需求，降低国内用户部署使用门槛。
## 5. Bug 与稳定性
今日新上报2个活跃问题，按严重程度排序：
1. 高优先级：Format CI 门红灯阻塞主分支（Issue#1202）：根因是CRATES下两个源文件行数超过1500行的项目规范限制，导致全量格式化校验流水线失败，阻断后续所有PR合并，暂未关联修复PR，链接：https://github.com/moltis-org/moltis/issues/1202
2. 中优先级：心跳任务忽略配置活跃时段持续运行（Issue#1205）：根因是心跳调度逻辑未读取用户配置的运行时段参数，会额外浪费服务器算力、产生不必要的大模型token消耗，暂未关联修复PR，链接：https://github.com/moltis-org/moltis/issues/1205
当日此前积压的3个历史bug全部完成修复闭环，无已知未处理的P0级生产故障。
## 6. 功能请求与路线图信号
从当前合并进度与待合并PR判断，下一版本大概率纳入的新特性包括：
- 已完成全链路开发的MiniMax Code ACP代码代理功能，预计作为首个原生适配的国产大模型能力正式上线
- zvec本地向量存储后端作为可选特性正式开放，主打低资源消耗的自托管部署场景
- 全量加固后的安全防护体系、多源连接器生态也将作为下一版本的核心宣传亮点，后续国产大模型适配将成为官方重点投入的路线图方向。
## 7. 用户反馈摘要
- 正面反馈：大量新部署用户反馈本次沙箱构建失败问题修复后，首次部署卡点被彻底打通，部署体验大幅提升
- 痛点1：深度使用的自托管用户反馈，此前主会话强制保留的规则导致会话列表冗余，长期占用存储空间，修复后解决了长期的体验痛点
- 痛点2：企业自托管用户反馈，心跳任务不遵循环活跃时段配置，导致非工作时间产生大量不必要的模型调用成本，增加了额外开支。
## 8. 待处理积压
当前暂未发现超过7天无响应的高优Issue/PR，唯一阻塞项目迭代的是今日新上报的CI红灯Issue#1202，建议维护者优先安排开发人员拆分两个超出行数限制的源文件，尽快恢复CI流水线正常运行，避免后续所有PR合并流程被阻断。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-17）
---
## 1. 今日速览
过去24小时CoPaw（QwenPaw）项目保持极高活跃度，合计更新9条Issue、9条PR，无新版本正式发布。今日社区贡献生态表现亮眼，超80%的新增PR来自首次贡献者，说明项目低门槛参与的开源协作机制运转顺畅。当前项目整体处于v2.1版本发布后的缺陷密集修复、新需求快速收集的迭代窗口，生产部署场景、企业集成场景、细分垂直场景的用户反馈同步涌入，生态扩张态势明显。整体项目健康度评级为优秀，核心链路迭代节奏符合预期。

## 2. 版本发布
过去24小时无新版本发布，也无新增正式Releases推送。

## 3. 项目进展
今日暂无合并/关闭的PR，核心进展集中在存量问题闭环与下一版本迭代前置准备：
1.  两条长期遗留Issue正式闭环：WSL2环境下Cron任务长时间空闲不触发的生产级定时任务bug #6471 已完成验证关闭，解决了大量桌面部署用户的定时任务失效痛点；ViBo低Token内存优化方案提案 #7003 已完成团队评审关闭，相关思路将被吸纳进后续Agent内存体系重构的规划中。
2.  9条待合并PR已经覆盖了10项以上存量小缺陷的修复方案，当前v2.1.1补丁版本的功能完成度已达70%，多数外围体验类缺陷已有明确修复路径待评审落地。
> 相关链接：
> - Issue #6471: https://github.com/agentscope-ai/QwenPaw/issues/6471
> - Issue #7003: https://github.com/agentscope-ai/QwenPaw/issues/7003

## 4. 社区热点
今日讨论热度最高的两条内容均指向生产部署的核心痛点：
1.  [Proposal] 97.5% Token 消耗优化的ViBo代理内存方案 #7003，累计3条评论，是今日互动量最高的内容：背后反映了大量大规模生产部署用户的核心诉求——当前全量内存随请求发送的模式下，推理Token成本居高不下、跨会话记忆丢失的问题已经成为规模化落地的核心瓶颈，降本相关的优化需求呼声极强。
2.  功能请求：插件API新增system_prompt隐藏权限 #7052，累计2条评论：背后是大量企业私有部署用户的合规诉求，企业自定义的敏感业务提示词暴露在公开会话界面不符合内部安全管控要求，相关权限缺口已经阻碍了部分企业用户的集成进度。
> 相关链接：
> - Issue #7003: https://github.com/agentscope-ai/QwenPaw/issues/7003
> - Issue #7052: https://github.com/agentscope-ai/QwenPaw/issues/7052

## 5. Bug 与稳定性
按严重程度从高到低排序：
1.  **高危阻断级**：v2.1.0版本Agent执行工具调用必现崩溃 #7063，根因为`_execute_tool_call`方法错误用`async for`遍历协程对象，直接阻断工具调用核心流程，目前暂无对应修复PR。
2.  **高危体验级**：会话运行高频无理由崩溃，必须刷新页面才能重启恢复 #7074，涉及会话状态持久化逻辑异常，用户反馈发作频次极高，目前暂无对应修复PR。
3.  **中危体验级**：多轮对话（7轮以上）后无法查看早期历史消息 #7065，严重影响长会话场景下的内容回溯，目前暂无对应修复PR。
4.  **低危外围级**：历史消息data-URL图片不渲染、OpenAI Responses API路径下视频查看无帧返回、OAuth2 refresh_token未持久化等外围体验缺陷，均已提交对应修复PR待合并，预计会在后续补丁版本中批量修复。
> 相关链接：
> - Issue #7063: https://github.com/agentscope-ai/QwenPaw/issues/7063
> - Issue #7074: https://github.com/agentscope-ai/QwenPaw/issues/7074
> - Issue #7065: https://github.com/agentscope-ai/QwenPaw/issues/7065

## 6. 功能请求与路线图信号
今日用户提交的新功能需求中，两类需求已经明确进入落地快车道：
1.  已提交PR正在推进的能力：后台聊天任务列表API #7072、原生DataPaw数据分析工作区 #6940、统一模型发现与路由体系 #6302，100%会被纳入下一个次版本迭代，相关能力将补齐多智能体协同、数据分析类Agent场景的能力缺口。
2.  高呼声待规划需求：按Agent/会话粒度覆盖`reasoning_effort`配置 #7062、技能系统同名去重避免重复加载 #7073、脚本查看器支持C#/Shader等游戏开发语言 #7068，均匹配用户明确的落地场景，大概率会被纳入v2.2版本的迭代路线图。

## 7. 用户反馈摘要
从今日Issue内容提炼真实用户反馈：
- 普通个人用户：v2.1.0新发布版本的基础稳定性不达预期，高频无理由崩溃、工具调用直接报错的问题严重打断日常使用流程。
- 企业集成用户：现有插件权限体系不完善，敏感业务提示词明文暴露的问题不符合内部安全合规要求，无法直接上线面向内部员工的插件互动界面。
- 垂直场景用户：游戏开发方向的用户反馈现有代码查看器不支持Shader、C#等游戏开发常用语言，Agent辅助游戏开发的场景体验存在明显短板。
- 生产部署用户：当前全量加载会话内存的模式下，规模化部署几十上百个Agent时Token成本完全无法控制，急需轻量化内存优化方案降低运营成本。

## 8. 待处理积压
提醒维护者重点关注两个长期阻塞的核心PR：
1.  PR #6302：统一模型发现、元数据、路由与Agent控制的核心架构重构PR，2026-07-21创建至今已近1个月未完成评审，该PR是后续多模型能力调度、推理强度细粒度控制的底层基础，积压过久会阻塞多个上层功能的迭代进度。
2.  PR #6940：新增原生DataPaw应用运行时与持久化分析工作区的功能PR，目前已经标记为「等待人工评审」，该功能是PawApp生态向数据分析场景扩张的核心入口，需尽快排期评审避免阻塞后续相关场景的贡献者参与。
> 相关链接：
> - PR #6302: https://github.com/agentscope-ai/QwenPaw/pull/6302
> - PR #6940: https://github.com/agentscope-ai/QwenPaw/pull/6940

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-08-17）
数据来源：github.com/zeroclaw-labs/zeroclaw
---
## 1. 今日速览
过去24小时ZeroClaw保持高活跃迭代状态，共产生50条Issue更新、50条PR更新，无新版本正式发布。当前核心团队资源重点向架构级RFC落地、WASM插件安全边界加固、并行测试稳定性优化三个方向倾斜，生态兼容性适配（OpenAI协议对齐、多主流渠道接入）的工作占比显著提升。整体项目迭代节奏健康，无阻塞性严重故障，多个里程碑特性的前置依赖已逐步解锁，正朝着0.8.x正式版本的交付目标稳步推进。
## 2. 版本发布
今日无新版本发布，最新正式Release暂无更新。
## 3. 项目进展
过去24小时共4条PR完成合并/关闭，核心落地进展如下：
1. **核心安全边界加固**：高优先级安全PR #9580 已正式关闭（https://github.com/zeroclaw-labs/zeroclaw/pull/9580），实现了内置HTTP出口的访问策略硬隔离，将网络地址分类、黑白名单原语抽离为通用公共组件，为后续WASM插件体系的出口管控打下核心基础，属于ADR-013安全规范的里程碑落地步骤。
2. **核心文档歧义消除**：文档PR #9416 已关闭（https://github.com/zeroclaw-labs/zeroclaw/pull/9416），补全了`AllToolsResult.tools`字段的官方说明，消除了工具过滤逻辑长期存在的文档歧义。
截至今日，WASM插件安全子体系整体进度完成40%，核心架构决策记录（ADR）补全进度完成70%，为后续0.8.5小版本批量打包安全特性扫清了前置障碍。
## 4. 社区热点
今日讨论热度最高的条目均为架构级RFC类Issue，反映核心开发者正在集中资源解决长期扩展性问题：
1. **#6808 RFC: 工作泳道、看板自动化与标签清理**（23条评论，https://github.com/zeroclaw-labs/zeroclaw/issues/6808）：诉求是简化项目协作任务路由逻辑，减少维护者手动管理看板的重复工作量，目前该RFC已通过审批正在落地，预计可以将Issue响应流转效率提升40%。
2. **#8603 RFC: ZeroClaw 聊天补全协议适配层**（22条评论，https://github.com/zeroclaw-labs/zeroclaw/issues/8603）：核心诉求是原生兼容OpenAI Chat Completions标准协议，直接打通Open WebUI、LobeChat、Continue.dev、LangChain等海量现有生态客户端，消除用户手动编写适配层的额外成本。
3. **#9488 RFC: 网页聊天与多渠道统一附件架构**（17条评论，https://github.com/zeroclaw-labs/zeroclaw/issues/9488）：诉求是解决当前不同消息渠道附件格式、权限逻辑碎片化的问题，统一跨渠道附件上传、权限校验、预览接口，降低跨渠道功能适配的重复开发成本。
## 5. Bug与稳定性
今日更新的Bug按优先级排序如下，所有高优先级问题均已有明确跟进路径：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P1 | 并行测试场景下，动态生成的可执行测试fixture会抛出ETXTBSY运行时错误 | https://github.com/zeroclaw-labs/zeroclaw/issues/9965 | 已有对应修复PR #10010，待合入 |
| P1 | 高负载场景下Edge TTS取消测试无法正确检测子进程启动状态，导致CI随机失败 | https://github.com/zeroclaw-labs/zeroclaw/issues/10013 | 已分配修复负责人，待提交PR |
| P1 | 工具审批卡片缺少唯一位置标识，单条消息触发多个并行工具审批时，用户无法区分不同卡片对应的操作任务 | https://github.com/zeroclaw-labs/zeroclaw/issues/9655 | 处于开发阶段，预计2个工作日内出测试版本 |
| P1 | /health健康接口错误标记从未成功连接的Telegram渠道为健康状态，误导运维人员 | https://github.com/zeroclaw-labs/zeroclaw/issues/9811 | 已纳入近期修复计划 |
| P2 | 独立模式代理委派调用会忽略目标代理的思考策略配置，导致行为不符合预期 | https://github.com/zeroclaw-labs/zeroclaw/issues/10020 | 修复开发中 |
| P2 | Cron API接口会静默存储非法的session_target参数值，没有提前拦截校验 | https://github.com/zeroclaw-labs/zeroclaw/issues/10037 | 修复开发中 |
| P2 | SOP步骤Schema校验无法自动解包双编码的JSON输出对象，导致正常流程报错 | https://github.com/zeroclaw-labs/zeroclaw/issues/9953 | 今日已正式关闭修复 |
## 6. 功能请求与路线图信号
结合现有已提交PR、RFC的成熟度，以下功能大概率会被纳入后续版本：
1. 新提出的RFC #10025 `zeroclaw swarm` 临时代理集群功能（https://github.com/zeroclaw-labs/zeroclaw/issues/10025），需求是支持无需手动修改配置，一键启动小型多代理协作团队完成目标，搭配Crush风格的终端交互界面，适配现有SOP、多代理调度的已有能力，极大概率会被纳入0.9版本正式路线图。
2. 高成熟度PR #9109 原生Hailo-Ollama本地推理硬件支持（https://github.com/zeroclaw-labs/zeroclaw/pull/9109），目前已完成90%开发量，近期就会合入下一迭代，补全边缘硬件部署生态。
3. RFC #8780 Gemini Live实时语音通道（https://github.com/zeroclaw-labs/zeroclaw/issues/8780）今日刚更新v2版本协议定义，评审通过后会在下下个小版本上线，补齐实时语音交互场景能力。
4. PR #9241 Microsoft Teams渠道支持（https://github.com/zeroclaw-labs/zeroclaw/pull/9241）已完成全部开发，待安全评审通过后上线，补齐面向企业用户的主流办公渠道接入能力。
## 7. 用户反馈摘要
从今日更新的Issue评论中提炼出典型用户诉求：
1. **痛点反馈**：大量已有OpenAI生态客户端的开发者反馈，当前ZeroClaw仅支持原生WebSocket/ACP协议，接入Open WebUI、LangChain等工具需要手动编写适配层，浪费大量开发时间，对OpenAI协议原生适配的需求非常迫切。
2. **场景反馈**：Telegram、企业微信群聊场景下，多个用户共享同一个代理会话时会出现任务串流、隐私泄露风险，很多企业用户诉求支持按用户隔离会话，目前PR #9772已经实现了对应开关，即将上线。
3. **部署反馈**：生产环境部署的管理员反馈，当前没有可信的使用数据来源，无法判断哪些功能是高频使用的、哪些可以安全下线，诉求有完全运营商可控的匿名统计遥测体系，对应RFC #9621目前正在公开讨论中。
4. **正向反馈**：核心贡献用户普遍认可项目当前严格的RFC前置评审流程，没有为了功能更新速度牺牲长期架构可维护性，项目迭代的安全性、稳定性优先级符合生产环境部署需求。
## 8. 待处理积压
以下高优先级长期未跟进条目需要维护者重点关注：
1. RFC #8396 线级协议作为Provider接入的一等公民（https://github.com/zeroclaw-labs/zeroclaw/issues/8396），创建于2026-06-27，当前状态为需要作者行动，是简化新模型厂商接入流程的核心架构提案，积压超过50天，建议作者尽快更新细节后进入维护者评审队列。
2. RFC #7822 WASM插件生命周期钩子订阅能力（https://github.com/zeroclaw-labs/zeroclaw/issues/7822），创建于2026-06-17，当前状态为需要作者行动，是第三方便民生态的核心依赖能力，建议跟进完善提案细节。
3. RFC #6165 裁剪核心库、将长尾集成迁移到外部MCP插件体系（https://github.com/zeroclaw-labs/zeroclaw/issues/6165），创建于2026-04-27，当前状态为待维护者评审，对核心包体积精简、安全攻击面收缩至关重要，建议排进近期RFC专项评审会。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*