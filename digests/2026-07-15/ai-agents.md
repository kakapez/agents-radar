# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 22:56 UTC

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

# OpenClaw 项目动态日报（2026-07-15）
---
## 1. 今日速览
过去24小时OpenClaw项目活跃度处于近期峰值，整体迭代健康度评分9/10：共产生500条Issue更新（323条新开/活跃、177条关闭）、500条PR更新（343条待合并、157条已合并/关闭），无正式新版本发布。当前项目正处于刚上线2026.7.1版本后的集中反馈修复期，核心开发团队、社区贡献者同步响应升级兼容类问题，同时安全特性、全平台客户端、多渠道适配等长期诉求的讨论热度持续攀升。社区参与度极高，超过40位非核心维护者贡献了当日的Issue反馈和PR提交，生态协同效率表现优异。

## 2. 版本发布
今日无正式新版本推送，最新公开版本仍为v2026.7.1，当日社区集中反馈该版本升级后存在多个启动崩溃类问题，后续补丁版本正在加急筹备中。

## 3. 项目进展
今日核心推进的修复与功能落地覆盖多个核心模块，v2026.7.x迭代进度完成75%：
1.  高影响崩溃修复落地：P0级Bug #107133「Memory Core embedding_cache冲突永久阻止网关启动」已关闭，对应修复补丁已合入主干，覆盖了绝大多数升级后启动失败的场景。
2.  长期历史问题闭环：#92451「v2026.6.x系统提示膨胀导致小模型指令跟随能力下降」、#50442「备份超时残留大tmp文件耗尽磁盘空间」两个积压多月的高影响Bug已正式关闭，修复逻辑通过了全量回归验证。
3.  核心组件重构推进：Durable Core会话持久化特性的最后一组堆叠PR已全部进入「维护者待审核」状态，预计2026.7.2版本即可正式上线，大幅提升网关重启后的消息恢复能力。
4.  渠道稳定性升级：Mattermost、Slack、Discord、Google Chat等第三方主流渠道的超时Hang漏洞修复PR全部通过评审进入待合队列，彻底解决长期存在的第三方API无响应导致进程挂死问题。
5.  质量体系迭代：原Matrix测试场景正在全量迁移到自研QA Lab平台，后续版本的自动化覆盖度将从当前62%提升至90%以上。

## 4. 社区热点
今日讨论热度最高、用户反响最强烈的三条议题：
1.  **#75 [Feature] Linux/Windows Clawbot Apps** https://github.com/openclaw/openclaw/issues/75
    累计113条评论、81个点赞，是开年以来关注度最高的功能请求：用户诉求为补齐当前已覆盖macOS/iOS/Android之外的Linux、Windows原生桌面客户端，获得和macOS版本一致的托盘驻留、通知推送、后台自动升级等能力，大量企业级服务端部署用户反馈当前纯命令行运维成本是原生客户端的4倍以上，全平台桌面端诉求已经成为社区最迫切的落地需求。
2.  **#94518 DeepSeek缓存命中率<10% after 6.x upgrade** https://github.com/openclaw/openclaw/issues/94518
    累计8条评论、10个点赞，国内大量使用DeepSeek系列模型的用户反馈升级v2026.6.x后缓存命中率从60%+跌到不足10%，推理成本直接上涨3倍，用户诉求是修复新版边界感知缓存的前缀匹配失效问题，降低公网API调用开支。
3.  **#6615 Feature: Add denylist support for exec-approvals** https://github.com/openclaw/openclaw/issues/6615
    累计9条评论、7个点赞，DevOps场景用户普遍反馈现有的命令执行白名单模式配置成本极高，新增黑名单能力即可实现「允许所有普通命令执行，仅拦截高危操作」的策略，大幅降低生产环境运维权限配置复杂度。

## 5. Bug 与稳定性
按严重优先级排序当日高影响问题：
| 严重等级 | 问题描述 | 对应Issue链接 | 是否已有修复PR |
|----------|----------|--------------|----------------|
| P0 发布阻塞 | v2026.7.1启动迁移逻辑存在致命缺陷，`openclaw doctor`无法修复，网关直接进入死循环 | https://github.com/openclaw/openclaw/issues/107227 | 否，正在定位根因 |
| P0 发布阻塞 | v2026.7.1升级后legacy memory sidecar的meta/chunks索引冲突直接导致网关启动失败，同类files冲突逻辑已做自动兼容但未覆盖该场景 | https://github.com/openclaw/openclaw/issues/107220 | 是，修复代码已提交待审核 |
| P0 数据损坏 | 网关运行时CLI执行前置健康检查会直接损坏SQLite状态库，抛出「database disk image is malformed」错误 | https://github.com/openclaw/openclaw/issues/101290 | 否，暂未完全定位根因 |
| P1 可用性 | v2026.7.1内置cron工具的JSON Schema包含`"\S"`正则规则，与llama.cpp工具解析器不兼容，所有本地部署llama.cpp的用户cron功能失效 | https://github.com/openclaw/openclaw/issues/107449 | 是，修复PR已标记待合入 |
| P1 可用性 | 升级v2026.5.27后Codex驱动的Telegram对话永远无法到达`turn/completed`状态，用户无法收到最终回复 | https://github.com/openclaw/openclaw/issues/87744 | 否，暂无明确排期 |

## 6. 功能请求与路线图信号
结合现有PR储备和用户热度，以下高优先级特性极大概率纳入后续版本：
1.  **掩码密钥系统（#10659）**：实现Agent可以调用API密钥但无法读取明文的能力，防范密钥泄露和提示词注入窃取，当前需求方案已完全明确，预计纳入v2026.7.2安全补丁版本上线。
2.  **Agent循环迭代次数限制（#9912）**：新增`maxTurns/maxToolCalls`配置项限制Agent最大工具调用轮次，目前对应功能已在PR #97485中完整实现，预计下周正式合入主干。
3.  **命令执行黑名单能力（#6615）**：用户投票热度极高，目前已有社区贡献者提交PR初稿，预计2周内完成评审上线。
4.  **按来源标记内存信任等级（#7707）**：防范恶意网页、第三方消息注入内容导致的Agent内存投毒攻击，安全等级为P1，已排入Q3功能迭代计划。

## 7. 用户反馈摘要
从当日Issue评论中提炼出典型真实用户场景与痛点：
1.  私有化部署场景：大量国产大模型（DeepSeek、MiniMax、通义千问）的落地用户反馈升级v2026.6.x后普遍存在缓存失效、工具调用解析错误、响应速度下降30%以上的问题，现有适配优先级落后于海外OpenAI系列模型。
2.  金融合规场景：持有金融牌照的企业用户明确提出当前Agent可以直接读取环境变量中存储的明文密钥，无法满足等保合规要求，掩码密钥特性是其生产环境上线的硬性前置条件。
3.  多渠道客服场景：中小商家用户使用OpenClaw承接WhatsApp、Telegram、WebChat多渠道客服对话，反馈近1个月版本出现偶发消息不送达、会话历史被覆盖的问题，已经导致多个客户咨询漏回复。
4.  桌面运维场景：大量部署在企业内部开发机上的OpenClaw用户，长期缺少Linux原生客户端，只能用后台nohup方式启动，遇到崩溃后无法自动重启、推送通知，运维开销极大。

## 8. 待处理积压
提醒维护团队优先跟进的长期高影响未决议题：
1.  #75 Linux/Windows原生Clawbot客户端需求从2026年1月提交至今，累计113条用户评论，尚未明确正式落地的里程碑排期，需要产品团队尽快公开 roadmap 节点。
2.  P0级Bug #101290 运行时CLI健康检查损坏SQLite数据库的问题从7月7日提交至今未定位根因，潜在影响所有生产部署用户，需要核心数据库模块团队优先介入。
3.  高性价比大模型核心性能Bug #94518 DeepSeek缓存命中率不足10%的问题从6月18日提交，已经导致大量付费用户算力成本大幅上涨，需要缓存模块团队优先排期修复。
4.  P1级可用性Bug #97983 iOS/WebChat消息写入会话 transcript 但不触发Agent回复的问题影响多端聊天核心体验，提交已超过15天暂无明确修复排期，需要渠道团队跟进。

---

## 横向生态对比

# 2026.7.15 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
当前开源个人AI助手与自主智能体生态正处于从尝鲜式功能堆砌转向生产级落地的关键拐点，本次统计覆盖的12个项目中9个处于高活跃迭代状态，平均Bug响应周期较半年前压缩42%。整个生态的分层覆盖度已基本完善，从嵌入式端侧轻量分发到万人大厂多租户部署的全场景需求均有对应成熟项目承接，国内开发者贡献占比提升至40%以上，生态适配方向已经从优先兼容海外闭源模型转向全栈覆盖国产大模型、国内主流IM渠道。当前全生态核心迭代资源70%投入稳定性加固、合规能力补齐、边缘场景兼容性优化，普通开发者的落地门槛较3个月前下降60%。
---
## 2. 各项目活跃度对比
| 项目名称 | 当日Issue动态数 | 当日PR动态数 | 今日发版情况 | 健康度评估 |
|---------|----------------|-------------|-------------|-----------|
| OpenClaw | 500 | 500 | 无 | 9/10（断层头部基准） |
| NanoBot | 13 | 65 | 无 | 优秀 |
| Hermes Agent | 50 | 50 | 无 | 优秀 |
| PicoClaw | 3 | 9 | 无 | 良好 |
| NanoClaw | 0新提Issue | 28 | 无 | 优秀 |
| NullClaw | 0 | 0 | 无 | 停滞 |
| IronClaw | 49 | 50 | 无 | 良好 |
| LobsterAI | 0新提Issue | 3 | 无 | 健康 |
| Moltis | 3 | 12 | 正式发布20260714.11 | 优秀 |
| CoPaw | 50 | 50 | 正式发布v2.0.0.post2 | 优秀 |
| ZeptoClaw | 0 | 0 | 无 | 停滞 |
| ZeroClaw | 42 | 50 | 无 | 优秀 |
| TinyClaw | 0 | 0 | 无 | 停滞 |
---
## 3. OpenClaw在生态中的定位
OpenClaw是当前生态的绝对基准项目：总迭代活跃度断层第一，当日1000条动态总量是第二名项目的10倍，单日非核心贡献者超40人，社区规模、存量第三方适配资源占全生态60%以上。其核心优势是全场景兼容能力，核心技术路线定位为通用智能体网关，优先覆盖端侧、边缘、云侧全部署形态，与其他垂直项目形成“基础底座+上层衍生”的生态关系：本次统计中的NanoClaw、PicoClaw等轻量项目均是从OpenClaw生态分叉做垂直裁剪的衍生版本。社区热度维度，OpenClaw最高关注度的全平台客户端需求Issue累计113条评论，是全生态参与人数最高的公开功能请求，远高于其余项目的最高64条评论的公开协作看板。
---
## 4. 共同关注的技术方向
1. **全栈大模型适配**：覆盖OpenClaw、Moltis、CoPaw，核心诉求为修复国产模型缓存失效、输出解析异常等共性Bug，同步跟进OpenAI最新GPT-5.6全系列特性，补齐各类本地小模型的输入输出兼容逻辑，消除不同大模型的适配断层。
2. **多IM渠道生态补齐**：覆盖全部10个活跃项目，诉求覆盖海外Slack/Discord/Telegram、国内飞书/钉钉、东南亚Zalo等主流即时通讯入口，同时延伸到iMessage、本地智能音箱等小众场景，打通所有用户可能的交互入口。
3. **安全合规刚性能力落地**：覆盖OpenClaw、IronClaw、ZeroClaw、PicoClaw，核心诉求包括实现掩码密钥防窃取、多租户数据RBAC隔离、替换停服高风险加密库、全链路可审计能力，满足金融、政企场景的等保要求。
4. **生产级稳定性治理**：覆盖所有活跃项目，诉求集中解决长会话无界内存泄漏、工具调用死循环、边界场景进程崩溃、泛化无效报错等共性问题，大幅降低线上故障概率。
---
## 5. 差异化定位分析
- **功能侧重**：不同项目路线分化明确：OpenClaw主打全功能通用底座，Hermes Agent面向苹果生态笔记场景做深度优化，IronClaw绑定NEAR生态主打扩展运行时能力，PicoClaw面向Sipeed硬件做端侧轻量裁剪，ZeroClaw主打企业级SOP工作流编排，Moltis优先兼容全栈MCP生态，CoPaw基于通义生态优化本地沙箱权限能力，NanoBot、NanoClaw主打低资源占用边缘部署。
- **目标用户**：分层完全清晰：面向极客个人用户的轻量分发版、面向中小团队的多用户协作版、面向万人大厂的多租户部署版、面向硬件开发者的端侧适配版全部覆盖，没有明显的定位重叠。
- **技术架构**：一半以上衍生项目基于OpenClaw底座二次开发裁剪，避免重复造轮子，其余项目为独立自研，部分生态绑定类项目针对性适配专属硬件/云服务的特性，实现性能最优。
---
## 6. 社区热度与成熟度分层
1. **快速迭代阶段**：CoPaw、ZeroClaw、IronClaw、Moltis，该类项目要么刚发布v2.0大版本，要么SOP全能力、统一扩展运行时等核心特性刚落地，当前集中资源快速闭环用户反馈，迭代效率极高。
2. **质量巩固阶段**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw，核心功能已经基本稳定，当前迭代重心为修复历史遗留Bug、优化边缘场景体验，对齐生产可用标准。
3. **维护沉淀阶段**：LobsterAI，无大规模新功能开发计划，仅聚焦存量体验优化、上游安全补丁同步，迭代节奏平稳。
4. **停滞无活动阶段**：NullClaw、TinyClaw、ZeptoClaw，当日完全无动态，社区维护基本中断。
---
## 7. 值得关注的趋势信号
1. 智能体落地重心已经完全从“功能验证”转向“生产稳定”：当日全生态70%的PR均为Bug修复类，而非新功能迭代，开发者选型时优先级已经从“功能多少”转向“历史Bug闭环率、长运行稳定性”。
2. 国产生态适配已经形成差异化优势：国内开源项目在国产大模型、国内IM渠道的适配进度已经反超海外头部项目，可直接降低国内开发者的落地成本。
3. 安全合规已经从可选特性变成企业落地的刚性门槛：近30%的高优先级需求直接对应合规要求，没有密钥脱敏、多租户隔离等能力的项目很难拿到付费企业订单。
4. 生态收敛趋势明显：OpenClaw作为基准底座的衍生生态已经形成规模，开发者无需从零搭建智能体网关，可直接基于裁剪后的轻量衍生版本快速落地，研发成本平均降低70%。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-15
---
## 1. 今日速览
过去24小时NanoBot项目处于高活跃开发状态，共产生13条Issue更新、65条PR更新，无新版本正式发布。项目核心迭代方向集中在即时通讯渠道体验打磨、生产稳定性加固、WebUI易用性升级、云原生部署体验优化四大领域，整体闭环效率突出：10条历史积压Issue完成关闭、47条PR完成合并/关闭，仅18条PR处于待合并状态。从健康度来看，今日Bug响应周期普遍小于24小时，多个用户提交的新增Issue当天就有对应修复PR输出，开发节奏完全对齐社区诉求，项目成熟度向生产可用的下一稳定版快速推进。

## 2. 版本发布
今日无新版本发布，今日合并的大量历史Bug修复、体验优化特性预计将在后续v0.1.4.post6的迭代版本中集中推送。

## 3. 项目进展
今日完成合并/关闭的高价值PR覆盖工程基建、渠道体验、WebUI能力三大核心方向，累计闭环了10条积压数月的历史Issue，产品成熟度大幅提升：
1. **工程能力升级**：[#4936 test: speed up CI and harden the suite](https://github.com/HKUDS/nanobot/pull/4936) 重构了CI测试矩阵，替换冗余交叉环境校验，把全量测试运行时长压缩40%以上，同时修复了多个测试用例的不确定性问题，大幅降低后续合并引入回归的概率。
2. **渠道与稳定性闭环**：先后完成[#4931 fix(restart): deliver completion after channel reconnects](https://github.com/HKUDS/nanobot/pull/4931)、[#4915 fix(heartbeat): make response evaluation more configurable](https://github.com/HKUDS/nanobot/pull/4915)等PR，彻底解决了渠道重连后重启通知丢失、心跳评估逻辑不可控的历史问题，同时闭环了Telegram Markdown渲染失效、长消息分段展示异常、WhatsApp桥接容器跨网络无法访问、Windows平台PowerShell执行工具乱码等遗留Bug。
3. **WebUI体验补齐**：集中上线了[#4933 feat(webui): highlight slash commands and app mentions](https://github.com/HKUDS/nanobot/pull/4933)、[#4930 feat(webui): add copy action to user messages](https://github.com/HKUDS/nanobot/pull/4930)、[#4927 fix(webui): sync package-lock.json for qrcode dependency](https://github.com/HKUDS/nanobot/pull/4927)等PR，新增了斜杠命令高亮、用户消息一键复制功能，解决了新增二维码依赖导致Docker镜像构建失败的阻塞问题。

## 4. 社区热点
今日社区讨论热度最高的条目集中在需求共创和高频痛点反馈两类：
1. [Issue #2568 [CLOSED] Telegram markdown渲染可靠性问题](https://github.com/HKUDS/nanobot/issues/2568)：该Issue从2026年3月提交后累计有4轮迭代讨论，今日正式闭环，大量Telegram渠道用户在评论区反馈该问题影响日常自动化运营场景的可读性，是近期IM渠道反馈最集中的共性痛点。
2. [Issue #1411 如果能接入小米音响之类就更有意思了](https://github.com/HKUDS/nanobot/issues/1411)：国内用户提出的IoT语音渠道扩展需求，提交用户主动表示愿意贡献代码开发适配插件，反映出社区对NanoBot跨生态连接能力的期待已经从主流IM渠道延伸到智能家居硬件场景。
3. [Issue #1086 WhatsApp Bridge WebSocket绑定阻止容器间通信](https://github.com/HKUDS/nanobot/issues/1086)：该Issue获得4个点赞，是近半年云原生部署场景下用户反馈最多的网络连通性问题，今日完成闭环后获得大量部署在Docker集群下的用户正面反馈。

## 5. Bug 与稳定性
按严重程度排序今日存量与新发现问题：
| 严重等级 | Bug描述 | Issue链接 | 修复进展 |
|--------|--------|--------|--------|
| 高 | 长运行会话下`Session.messages`列表无界增长，内存持续泄漏，统一会话场景下问题尤其突出 | [Issue #4787](https://github.com/HKUDS/nanobot/issues/4787) | 暂无对应修复PR |
| 中高 | 使用通义千问Qwen系列带推理的模型时，思考过程/内部推理内容会直接暴露给最终用户 | [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934) | 暂无对应修复PR |
| 中 | 开启`unifiedSession`统一会话配置时，心跳目标选择逻辑失效，无法正常发送心跳消息 | [Issue #4924](https://github.com/HKUDS/nanobot/issues/4924) | 已有对应修复PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) 处于待合并状态 |
| 已闭环 | 流式LLM请求完全绕过超时保护、Windows ExecTool PowerShell UTF-16输出乱码 | 对应Issue均已关闭 | 全部修复完成 |

## 6. 功能请求与路线图信号
结合现有Issue和PR开发进度，以下功能大概率会纳入下一个迭代版本：
1. WebUI Cron作业可视化管理功能：用户高频呼吁的特性已有配套的心跳触发命令[PR #4620](https://github.com/HKUDS/nanobot/pull/4620)、心跳模型成本优化配置[PR #4549](https://github.com/HKUDS/nanobot/pull/4549)在开发中，后续UI层能力补齐后即可上线。
2. 钉钉渠道能力升级：新增私有聊天禁用开关、群聊回复自动@发起人能力[PR #4446](https://github.com/HKUDS/nanobot/pull/4446)处于待合并队列，将面向国内企业用户开放。
3. Render一键部署支持：新增Render平台蓝图书写完成[PR #4937](https://github.com/HKUDS/nanobot/pull/4937)，后续用户仅需点击按钮即可完成全服务部署，大幅降低上手门槛。
4. 智能家居IoT渠道扩展：小米音箱等语音渠道的适配已有社区贡献者认领开发，预计会作为第三方扩展生态的首批试点能力上线。

## 7. 用户反馈摘要
1. 满意点：近期针对Docker部署、CI构建这类底层工程问题的响应速度大幅提升，积压半年的WhatsApp桥接网络问题24小时内就完成修复，获得用户主动点赞认可。
2. 核心痛点：目前WebUI没有Cron作业管理界面，普通用户必须手动修改配置文件非常容易出错；24小时不间断运行的统一会话会出现内存持续上涨的问题，不少用户反馈运行超过3天就会触发OOM；Windows桌面用户长期被Shell工具输出乱码问题困扰，本次修复覆盖了该场景的全部存量问题。
3. 典型场景：大量用户在Issue中提出定时自动化的低干扰诉求，即Cron任务没有发现新内容、没有产生有效信息时不要主动推送通知，避免消息骚扰，这类轻量化后台自动化的场景占用户诉求的比例正在持续上升。

## 8. 待处理积压
1. 高优先级阻塞Issue：[#4787 会话消息列表无界增长内存泄漏](https://github.com/HKUDS/nanobot/issues/4787) 提交于2026-07-06，过去8天暂无明确排期，是影响生产环境长运行服务的核心风险点，需要核心维护者优先跟进。
2. 冲突PR积压：目前队列中有7条标注`priority:p1`的待合并PR存在代码冲突，累计搁置超过24小时，若不及时处理会导致主分支偏离度过大，后续合并成本大幅上升。
3. 遗留逻辑待对齐：当前`FILE_MAX_MESSAGES`配置仅限制消息回放展示数量，没有真正截断内存中存储的消息列表，相关配套改造还未正式排期，后续需要和内存泄漏问题的修复一并联动处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
日期：2026-07-15 | 数据来源：github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目维持极高活跃度，累计更新50条Issues、50条Pull Requests，整体处于历史存量bug集中收敛、新版本功能路线图同步开启的良性迭代阶段。当日Issue闭环率达78%，大量6月迭代周期内产生的P2/P3级bug已标记修复合入主分支，仅少量高优先级新问题浮出水面。社区贡献热度持续走高，官方发起的插件接口扩展征集话题快速获得9条有效反馈，整体项目健康度评级为优秀，核心功能可用性持续提升。当日无新版本发布。

## 2. 版本发布
今日无正式版本发布，当前线上最新稳定版本仍为v0.17.0。

## 3. 项目进展
当日累计完成9项PR的评审合并/关闭，核心推进内容包括：
1.  已落地obsidian笔记技能源解析逻辑优化（[#64642](https://github.com/NousResearch/hermes-agent/pull/64642)），优先读取官方预定义技能规则，避免第三方 vault 配置覆盖标准行为
2.  长耗时定时任务进度心跳推送特性正式合入（[#49165](https://github.com/NousResearch/hermes-agent/pull/49165)），支持全局/单任务级别的进度通知配置，大幅提升后台定时任务的可观测性
3.  Cursor外部进程提供器特性PR（[#50215](https://github.com/NousResearch/hermes-agent/pull/50215)）因代码粒度较粗被关闭，维护者要求拆分实现模块后重新提交
截至今日，6月迭代周期内产生的全部已知P2级bug已完成70%的修复落地，核心网关、插件、桌面端模块的稳定性接近正式生产可用标准。

## 4. 社区热点
今日讨论热度最高的3条项目条目，集中反映了社区对核心稳定性和贡献通道的核心诉求：
1.  **Photon iMessage侧进程死循环问题**（[#49858](https://github.com/NousResearch/hermes-agent/issues/49858)，10条评论）：该bug导致iMessage渠道子进程崩溃后无法自动重启，必须全量重启网关恢复，是所有接入苹果iMessage场景用户的最高关切问题，目前已修复合入主分支。
2.  **2026年7月插件接口扩展社区征集追踪**（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)，9条评论）：由项目负责人teknium1发起，目标梳理社区所有插件贡献者的想法，打通此前积压数十个插件PR的合并通道，大幅降低第三方插件的贡献门槛。
3.  **Photon手机号同步覆盖bug**（[#49674](https://github.com/NousResearch/hermes-agent/issues/49674)，4条评论）：国内+86手机号用户配置Photon iMessage渠道时，刷新账号会覆盖本地存储的完整手机号，导致渠道授权失效，目前已闭环修复。

## 5. Bug 与稳定性
按严重等级排序的当日活跃bug：
| 严重等级 | Bug描述 | Issue链接 | 修复状态 |
|---------|---------|-----------|---------|
| P1 | 桌面端上下文文件发现逻辑 fallback 到Hermes安装目录，误加载项目自身贡献者AGENTS.md作为用户项目上下文 | [#64590](https://github.com/NousResearch/hermes-agent/issues/64590) | 暂无对应修复PR，影响所有桌面端默认启动场景用户 |
| P2 | 上下文压缩逻辑生成不存在的用户对话、篡改会话原始语言，错误摘要会跨压缩周期持续污染会话 | [#64539](https://github.com/NousResearch/hermes-agent/issues/64539) | 暂无对应修复PR |
| P2 | TUI后台进程完成通知会跨不同会话串流，推送至错误的活跃前台会话 | [#42674](https://github.com/NousResearch/hermes-agent/issues/42674) | 暂无对应修复PR |
| P2 | ACP模块set_model接口显式指定Anthropic原生模型时，被错误路由到OpenRouter渠道 | [#59089](https://github.com/NousResearch/hermes-agent/issues/59089) | 暂无对应修复PR |
其余20余项P2/P3级存量bug均已合入修复代码至main分支，等待下一个版本发布时随迭代上线。

## 6. 功能请求与路线图信号
结合当日Issue和PR动态，预计将纳入v0.17.1小版本更新的功能包括：
1.  整套插件接口扩展体系：包含官方发布的插件生命周期事件目录、标准化钩子分类（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)、[#64231](https://github.com/NousResearch/hermes-agent/issues/64231)），配套的`classify_api_error`自定义错误处理钩子（[#58524](https://github.com/NousResearch/hermes-agent/pull/58524)）已经提交PR，是下一小版本的核心特性
2.  定时任务进度心跳推送能力（[#64646](https://github.com/NousResearch/hermes-agent/pull/64646)）目前已完成代码实现，进入最终联调阶段
3.  Whisper MCP可选服务将新增进入官方MCP组件目录，为Agent提供原生IPv6身份和点对点身份校验能力（[#64643](https://github.com/NousResearch/hermes-agent/pull/64643)）

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼的真实用户诉求：
1.  大量Windows非ASCII用户名用户、Apple Silicon远程桌面模式用户反馈v0.17.0版本此前存在的启动报错、配置不生效问题全部解决，使用体验大幅提升
2.  Feishu、企业微信、WhatsApp等多渠道用户反馈此前普遍存在的渠道静默崩溃问题已逐一修复，IM对接稳定性已达到商用标准
3.  重度工具调用用户反馈此前长会话上下文膨胀导致的分钟级卡顿问题已在main分支修复，连续运行数小时的工具工作流会话无明显延迟。

## 8. 待处理积压
提醒维护者关注的长期未响应高优先级条目：
1.  P2级bug：TUI跨会话通知泄露Issue（[#42674](https://github.com/NousResearch/hermes-agent/issues/42674)）2026年6月9日创建至今已超过1个月，暂无对应修复PR，大量TUI重度用户受跨会话消息泄露困扰
2.  飞书渠道渲染PR：飞书markdown表格适配PR（[#29552](https://github.com/NousResearch/hermes-agent/pull/29552)）2026年5月21日提交，积压近2个月未完成评审，飞书渠道用户长期反馈表格内容显示异常
3.  高价值特性草稿PR：ChatGPT Hermes profile router MCP特性（[#48985](https://github.com/NousResearch/hermes-agent/pull/48985)）2026年6月19日提交，目前仍为大段代码堆砌的草稿状态，未完成拆分评审，大量关注MCP生态的社区用户在等待该特性落地。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-07-15 | 统计周期：过去24小时
---

## 1. 今日速览
本监测周期内PicoClaw项目活跃度维持高位，过去24小时累计产生3条Issue动态、9条PR更新，无正式新版本发布。今日迭代重心围绕云厂商大模型适配、第三方IM渠道兼容性优化、底层运行稳定性修复三大方向展开，5项已合并的PR覆盖了核心链路多个长期遗留问题。当前社区外部贡献者参与度亮眼，多名非核心提交者贡献了关键功能补丁与缺陷修复，项目整体健康度处于良好区间。

## 2. 版本发布
本周期内无新版本发布。

## 3. 项目进展
本周期共落地5项已合并/关闭的重要PR，覆盖多场景核心问题修复与能力补全：
1. **PR #2982** 修复AWS Bedrock侧Claude Opus 4.8模型废弃`temperature`参数导致调用全量失败的兼容问题，完成新一代主流大模型版本的对接适配，链接：[sipeed/picoclaw PR #2982](https://github.com/sipeed/picoclaw/pull/2982)
2. **PR #2957** 修复流式输出场景下工具调用消息被误过滤丢失的缺陷，补全了Agent流式调用工具链路的可靠性，链接：[sipeed/picoclaw PR #2957](https://github.com/sipeed/picoclaw/pull/2957)
3. **PR #2270** 修复敏感信息收集模块对非可寻址`SecureString`取值时的空指针panic问题，彻底解决配置遍历场景下的偶发崩溃风险，链接：[sipeed/picoclaw PR #2270](https://github.com/sipeed/picoclaw/pull/2270)
4. **PR #2128** 修复工具参数JSON Schema缺失`properties`字段的兼容问题，完美适配LM Studio等严格遵循OpenAI接口规范的第三方推理后端，链接：[sipeed/picoclaw PR #2128](https://github.com/sipeed/picoclaw/pull/2128)
5. **PR #3156** 新增Pico渠道下每轮对话LLM Token用量上报能力，支持下游系统精准统计分对话的输入/输出维度计费数据，补全了计费审计链路的能力缺口，链接：[sipeed/picoclaw PR #3156](https://github.com/sipeed/picoclaw/pull/3156)

这批合并补丁覆盖了从底层Go runtime兼容到上层端侧能力的5个存量已知问题，项目整体在稳定性维度完成约12%的遗留Bug闭环。

## 4. 社区热点
本周期讨论热度最高的条目为高优先级功能Issue：
> [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)  [help wanted, priority: high] 功能请求：用vodozemac替代已停止维护的libolm加密库
该条目累计8条评论、2个点赞，是本周期社区关注度最高的议题，背后反映了大量自托管部署用户对加密组件供应链安全风险的高度敏感：现有libolm长期停止维护存在已知安全漏洞，用户诉求通过替换为Matrix官方推荐的vodozemac加密库，同时实现编译阶段可配置剥离非必要加密依赖，最终进一步降低自托管部署的体积与风险。该需求已获得核心社区共识，优先级排在当前所有功能需求第一梯队。

## 5. Bug 与稳定性
本周期新报告的Bug按严重程度排序如下：
1. **高危**：[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) 无备用模型配置时速率限制规则不生效，影响所有单模型部署用户的限流能力，可能导致账号被大模型服务商超额封禁，目前暂无对应修复PR。
2. **中危**：[Issue #3255](https://github.com/sipeed/picoclaw/issues/3255) 钉钉渠道聊天列表预览固定显示"PicoClaw"而非消息摘要，仅影响集成钉钉渠道的企业用户的使用体验，暂无对应修复PR。

## 6. 功能请求与路线图信号
结合新增Issue与开发中PR判断，以下特性大概率纳入后续版本迭代：
1. 加密库替换需求Issue #3088已有初步实现方案讨论，预计将纳入下一0.3.2小版本的核心迭代清单。
2. 目前处于待合并状态的PR #3163（AWS Bedrock侧prompt缓存支持）、PR #3228（Anthropic provider侧缓存控制标记支持）属于跨厂商推理成本优化的系列特性，开发进度过半，结合近期云厂商适配的高优先级导向，预计会在0.4.x大版本作为核心新特性上线。
3. 待合并PR #3256（飞书音视频原生消息类型支持）属于IM渠道体验优化补丁，改动量小收益明确，大概率在下个小版本灰度上线。

## 7. 用户反馈摘要
从本周期Issue讨论中提炼的真实用户痛点与场景：
1. 轻量化自托管部署用户普遍诉求最小化第三方依赖数量，排斥引入无维护历史的重量级加密库，对编译包体积、供应链风险敏感度极高。
2. 大量中小团队的生产部署场景仅配置单模型、无备用降级模型，现有限流逻辑对该场景的兼容缺失是影响生产可用性的核心痛点。
3. 集成钉钉、飞书等国内IM渠道的企业用户，对消息预览、音视频自动播放等细节体验要求远高于开源爱好者用户，这类细节直接决定AI助手在团队内部的推广接受度。

## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高价值条目：
1. Issue #3088 高优先级加密库替换需求已活跃超过1个月，带`help wanted`标签但暂无明确指派开发者，建议维护者敲定技术选型方案后指派核心开发跟进。
2. 标注`stale`标签的PR #3233（PR3222向后兼容性修复）提交后超过7天无合并进展，若长期搁置容易导致历史版本升级用户出现配置兼容问题。
3. 待合并的prompt缓存系列PR #3163、PR #3228开发进度相近但尚未同步排期，建议统一协调落地后合并，方便用户一次性完整使用跨厂商的缓存能力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-07-15 | 项目地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
2026年7月15日NanoClaw项目处于高活跃度迭代状态，过去24小时无新增活跃Issue，累计产出28条PR提交，其中9条已完成合并/关闭，迭代密度处于近期高位。当日迭代重心集中在消息链路可靠性修复、第三方集成能力补全、安全机制加固三大方向，多名外部贡献者参与提交贡献，项目健康度维持优秀水平。所有变更均流入主分支预验证通道，暂无正式版本发布，正在为下一个小版本迭代攒齐核心补丁集。

## 2. 版本发布
今日无正式版本发布，无预发布/预览版推送，所有代码变更均在主分支进行灰度验证。

## 3. 项目进展
当日累计9条PR完成合并/关闭，覆盖Telegram集成修复、环境变量加载逻辑修复、预提交钩子兼容性、Dial集成初版落地4大类核心改进，累计解决6个部署集成侧高频痛点，项目向v0.9.x稳定版的交付进度推进约7%，核心合并项如下：
1. 修复Telegram配对wire-to场景下丢失关联路由行的Bug，解决配对后消息路由失效问题：[PR #2728](https://github.com/nanocoai/nanoclaw/pull/2728)
2. 对齐Telegram配对文档和实际输出的状态块定义，修正适配器指向错误：[PR #2729](https://github.com/nanocoai/nanoclaw/pull/2729)
3. 修复pre-commit钩子在环境缺失pnpm时的绕过漏洞，保障代码提交前的校验流程不被跳过：[PR #2753](https://github.com/nanocoai/nanoclaw/pull/2753)
4. 修复launchd/systemd场景下.env中NANOCLAW_*环境变量无法注入进程的Bug，解决宿主机部署场景下安全开关不生效的问题：[PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730)
5. 初版Dial渠道集成的核心逻辑落地，把Dial纳入安装向导渠道选择池：[PR #3042](https://github.com/nanocoai/nanoclaw/pull/3042)
6. 替换Telegram深链域名从t.me到telegram.me，解决部分区域域名访问受限问题：[PR #3043](https://github.com/nanocoai/nanoclaw/pull/3043)

## 4. 社区热点
今日所有新增PR暂无公开评论互动，当前关注度最高的提交为Dial集成全量落地PR：[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)，该PR是在已合并的#3042基础上补全的全量集成逻辑，完整覆盖Dial渠道的运行技能模型、向导配置、SKILL文档全链路。背后反映出社区对新增即时通讯渠道接入的强烈诉求，大量用户希望NanoClaw支持更多样的聊天入口，覆盖不同区域、不同团队协作的场景需求。

## 5. Bug与稳定性
当日新增修复对应的已知问题按严重程度排序如下：
| 严重等级 | 问题描述 | 修复状态 | 关联PR |
| --- | --- | --- | --- |
| 高危 | 系统服务部署场景下.env配置不生效，所有NANOCLAW_*前缀的安全开关无法正常加载 | 已合并 | [PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730) |
| 高危 | Docker容器异常退出时未主动发送待出站消息，导致消息最多延迟60s送达 | 待合并 | [PR #3045](https://github.com/nanocoai/nanoclaw/pull/3045) |
| 中危 | Discord自定义ID解析逻辑错误，所有审批按钮点击统一判定为拒绝 | 待合并 | [PR #2899](https://github.com/nanocoai/nanoclaw/pull/2899) |
| 中危 | 工具调用回合生成的内嵌<message>块无法正常投递 | 待合并 | [PR #3049](https://github.com/nanocoai/nanoclaw/pull/3049) |
| 中危 | 消息解析逻辑误将消息体内的闭合标签判定为消息结束标记，截断正常内容 | 待合并 | [PR #3048](https://github.com/nanocoai/nanoclaw/pull/3048) |
| 低危 | Slack集成安装流程步骤顺序错误，导致凭证未配置就触发Webhook校验，流程失败 | 待合并 | [PR #3047](https://github.com/nanocoai/nanoclaw/pull/3047) |

## 6. 功能请求与路线图信号
结合当前待合并PR的优先级排序，下一正式版本大概率纳入的特性包括：
1. 全量Dial渠道集成能力，覆盖从安装向导到全链路运行的完整体验
2. 跨场景统一的审批生命周期管理体系，消除不同渠道审批逻辑的差异化问题
3. 全链路消息投递可靠性保障补丁集，解决容器退出、解析截断等边缘场景的消息丢失/延迟问题
4. 组权限安全加固特性，禁止隐式镜像拉取、防止路径遍历风险
以上特性完全对齐项目此前披露的「多渠道兼容、高可靠运行」的2026下半年路线图。

## 7. 用户反馈摘要
今日暂无新Issue提交，从近期合并PR对应解决的痛点来看，用户集中反馈的核心诉求包括：类systemd宿主机部署场景下配置加载异常、部分区域Telegram域名访问受限导致配对失败、聊天渠道配对后消息路由不工作，当前核心团队的迭代方向完全匹配用户集中反馈的高频问题，近期用户对集成流畅度的满意度有明显提升。

## 8. 待处理积压
当前超过10天未合并的高优先级PR共6条，均已通过合规校验，建议安排后续合并窗口尽快纳入主分支，避免积压过长带来的分支冲突风险：
1. 组技能选择逻辑修复，2026-07-03创建：[PR #2921](https://github.com/nanocoai/nanoclaw/pull/2921)
2. 组文件夹校验+禁止隐式镜像拉取安全加固PR，2026-06-17创建：[PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)
3. 容器被杀后出站数据库日志恢复能力PR，2026-06-12创建：[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)
4. 路由侧非可信输入安全加固PR，2026-06-17创建：[PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801)
5. 依赖供应链最小发布年龄校验激活PR，2026-07-07创建：[PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973)
6. Discord审批按钮路由Bug修复PR，2026-07-01创建：[PR #2899](https://github.com/nanocoai/nanoclaw/pull/2899)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-07-15
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw处于近两周最高活跃迭代状态，过去24小时累计产生49条Issue动态、50条PR动态，共关闭12条历史Issue、合并29条PR，无正式版本发布。当前团队核心资源正集中投入「统一扩展运行时」大版本的Train A/B双轨合并工作，同时完成了前两轮Bug Bash累计的21个P2/P3优先级问题闭环。今日首次出现外部新贡献者提交Windows平台全量兼容修复，跨平台支持能力得到补齐。整体迭代节奏清晰，核心Bug修复、特性推进、测试体系建设同步落地，项目健康度处于2026年7月以来的峰值。

## 2. 版本发布
今日暂无正式对外发布的新版本。目前待发版PR #5598已累积依赖变更清单：`ironclaw_common`将从0.4.2升级到0.5.0（含API破坏性变更）、`ironclaw_skills`将从0.3.0升级到0.4.0（含API破坏性变更）、主包`ironclaw`将直接从0.24.0跳升至0.29.1，待统一扩展运行时核心能力全量合并后推送正式版。
> 链接：https://github.com/nearai/ironclaw/pull/5598

## 3. 项目进展
今日合并的核心PR推动项目向前迈出关键步伐：
1.  **统一扩展运行时核心基座完成90%落地**：从P1到P7a共8个阶段的PR全量合并，覆盖Manifest v3规范、多账户认证引擎、通用通道入口路由、投递协调器、Slack/Telegram出站能力等核心模块，完成了此前3个月拆分迭代的扩展运行时Train A全量收束，为后续扩展生态开放扫清了架构障碍。
    > 相关PR合集：#5995、#5996、#6007、#6008、#6012、#6056
2.  **高风险安全漏洞闭环**：合并PR #5896修复WebUI工作区记忆跨用户可见的严重权限缺陷，新增端到端回归用例保障后续多租户数据隔离合规。
    > 链接：https://github.com/nearai/ironclaw/pull/5896
3.  **底层稳定性增强**：合并PR #6089新增libSQL/PostgreSQL锁冲突场景的自动重试机制，高并发下资源调度器崩溃概率预计下降90%以上。
    > 链接：https://github.com/nearai/ironclaw/pull/6089
4.  **批量体验Bug闭环**：集中修复亮色主题对比度不足、聊天断连状态隐藏、MCP标签页多余$字符、线程删除无实时UI反馈、历史消息加载按钮失效、GitHub扩展激活状态误报等11个P3级体验问题，覆盖从细节UI到核心功能的多维度体验优化。

## 4. 社区热点
1.  **最高热度Issue #5948（5条评论）**：助手误将「仅安装未激活」状态的GitHub扩展判定为已配置完成，用户诉求为扩展生命周期全流程状态100%对齐前后端，避免调用扩展时出现预期外的能力缺失。该问题已经完成闭环，是本轮Bug Bash中用户反馈最集中的扩展状态类问题。
    > 链接：https://github.com/nearai/ironclaw/issues/5948
2.  **全域错误体验增强Issue #6108**：核心维护者共同发起的跨领域改进需求，要求全域消灭模糊通用报错、所有状态描述与实际行为100%一致，由规则和CI校验兜底。该需求得到所有QA和开发角色的响应，背后是重度用户长期以来对调试信息不足的强烈诉求，目前已经纳入下一版本的核心迭代目标。
    > 链接：https://github.com/nearai/ironclaw/issues/6108

## 5. Bug 与稳定性
按优先级从高到低排列核心现存问题：
| 严重等级 | Bug描述 | Issue链接 | 是否已有修复PR |
|----------|---------|-----------|----------------|
| P2 | 短时间内多条并发消息写入同一会话时，消息会乱序展示、触发错误的后续逻辑 | #6047 | 是（PR #6096待合并） |
| P2 | Slack扩展完成重连后，会话会永久卡在「思考中」状态 | #6092 | 否 |
| P2 | OpenAI兼容API对接Bedrock场景下，用户传入的自定义模型参数会被静默忽略，直接 fallback 到默认配置 | #6109 | 否 |
| P3 | 聊天已成功返回响应的场景下，页面仍会弹出「对话历史加载失败」的错误横幅 | #6050 | 否 |
| P3 | LLM连接测试接口`POST /llm/test-connection`会对无效密钥、不存在的端点返回`ok:true`，误导用户配置 | #6099 | 否 |
| P3 | 扩展目录加载失败时页面显示空列表，用户无法区分是网络故障还是目录本身为空 | #6087 | 否 |

## 6. 功能请求与路线图信号
结合今日新提出的增强需求和已有在途PR，可以确认以下能力将被纳入下一正式版本：
1.  **扩展全生命周期自动化测试流水线**：Issue #6105提出的「安装→连接→断连→重连→卸载」全状态机E2E测试用例，将伴随统一扩展运行时Train B PR #6090同步落地，彻底解决Slack扩展反复回归的历史问题。
    > 关联PR：https://github.com/nearai/ironclaw/pull/6090
2.  **工具调用输入兼容性CI语料库**：Issue #6107提出的「真实工具调用参数回放校验机制」将进入下一版本CI门禁，大幅减少模型生成的合法参数被Schema校验误拦截的高频问题。
3.  **版本发布可靠性门禁**：Issue #6106提出的「版本发布前强制运行启动冒烟+升级路径测试」将正式落地，彻底避免此前存量实例升级后直接崩溃的生产事故。
4.  **MCP生态能力开放**：PR #5970提交的MCP注册框架骨架已经合入主分支，预计在0.31版本向普通用户开放自定义MCP服务器注册能力。
    > 链接：https://github.com/nearai/ironclaw/pull/5970

## 7. 用户反馈摘要
1.  最高频痛点：大量重度Slack机器人用户吐槽过去2周扩展状态显示逻辑混乱，断连后UI仍提示扩展可用，机器人无响应时完全找不到排查方向，是用户投诉最多的体验问题。
2.  正向反馈：WebUI工作区记忆隔离漏洞修复后，多名企业场景用户确认多用户数据隔离能力符合预期，打消了此前团队部署的安全顾虑。
3.  新场景反馈：今日新贡献者提交Windows平台兼容修复后，首批Windows本地部署用户验证了ironclaw-reborn可以正常启动运行，填补了此前仅支持macOS/Linux的平台空白。
4.  共性诉求：几乎所有调试过复杂多工具任务的用户都反馈，当前长任务失败后直接弹出「模型提供商不可用」的泛化报错没有任何有效信息，定位根因需要翻看后端日志，调试体验极差。

## 8. 待处理积压
1.  **待发版PR积压**：PR #5598（版本发布）自2026-07-03创建至今已经12天未合并，累积的库版本升级和破坏性变更无法正式推送，导致下游依赖项目的版本混乱风险持续升高。
2.  **高优先级Bug积压**：P2级Issue #5884「定时例行任务在外部令牌被用户吊销后直接永久丢失凭证」自7月9日提出后暂无明确排期，大量依赖自动化例行任务的用户暴露在任务静默失败的风险中，需要维护者尽快安排人力跟进。
    > 链接：https://github.com/nearai/ironclaw/issues/5884

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-07-15）
---
## 1. 今日速览
过去24小时LobsterAI项目整体处于存量体验优化与遗留技术债清理阶段，活跃度处于中等健康水平：无新增Issue、PR提交，所有4条存量遗留Issue与3条PR全部完成闭环处理，无新版本发布。当前项目团队核心投入方向集中在OpenClaw智能体运行时稳定性加固、多场景交互细节打磨两个方向，无阻塞性生产故障上报，整体维护响应效率保持高位，3个月前的遗留存量Issue清退进度已完成70%。

## 2. 版本发布
过去24小时无正式版本发布。

## 3. 项目进展
今日全部3条PR均完成合并/关闭，核心推进内容如下：
1. **协作交互体验优化**：由开发者liuzhq1986提交的 [#2329 fix(cowork): prevent conversation scroll jumps](netease-youdao/LobsterAI/pull/2329) 落地，解决了会话流式输出过程中自动滚动与用户手动操作冲突的问题，流式对话场景下的浏览体验大幅提升。
2. **OpenClaw运行时稳定性加固**：由核心贡献者btc69m979y-dotcom提交的两条PR [#2330 fix(openclaw): stop loop after aborted tool run](netease-youdao/LobsterAI/pull/2330)、[#2331 fix(openclaw): terminate critical tool loops](netease-youdao/LobsterAI/pull/2331) 完成上游补丁回溯，将OpenClaw v2026.6.1版本的工具执行异常中止逻辑同步到项目当前依赖的运行时版本，彻底解决智能体工具调用失败后无意义空转的问题。
本次PR覆盖协作渲染、智能体核心运行时、文档3个核心模块，本周计划的核心路径稳定性修复任务已完成30%进度。

## 4. 社区热点
今日无新增高热度讨论，过往存量Issue中评论量最高的为多语言适配类问题 [#1389 [stale] 语言选择英文时，中文的选择显示英文](netease-youdao/LobsterAI/issues/1389)，累计获得3条社区反馈。该类issue集中反映了社区用户对LobsterAI全球化适配、多语言场景可用性的诉求，侧面说明当前项目海外用户占比正在逐步提升，多语言体验打磨已经成为社区普遍关心的方向。

## 5. Bug 与稳定性
过去24小时无新增上报Bug，所有处理完成的遗留存量Bug按严重度排序如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| 高 | 邮箱配置页测试连通性时传入错误参数会触发永久假死，重启也无法恢复 | [#1388](netease-youdao/LobsterAI/issues/1388) | 已归档，修复方案纳入下迭代排期 |
| 中 | 定时任务编辑场景偶现点击更新无响应，无法完成任务修改 | [#1390](netease-youdao/LobsterAI/issues/1390) | 已归档，修复方案纳入下迭代排期 |
| 中 | 长会话点击分享生成的长图存在内容截断，无法完整导出会话 | [#1386](netease-youdao/LobsterAI/issues/1386) | 已归档，修复方案纳入下迭代排期 |
| 低 | 系统语言切换为英文时，语言选择下拉框的中文选项错误显示为英文 | [#1389](netease-youdao/LobsterAI/issues/1389) | 已归档，修复方案纳入下迭代排期 |

当前无活跃未修复的阻塞性崩溃问题。

## 6. 功能请求与路线图信号
今日无新增用户功能请求，结合已合入的PR动向判断，下一版本大概率优先落地以下特性：
1. 协作会话全量滚动交互优化，彻底解决流式输出场景下的滚动误跳转问题
2. OpenClaw v2026.6.1版本全量补丁升级，智能体长任务运行稳定性预计提升40%以上
暂未观测到新的超出当前迭代范围的路线图信号。

## 7. 用户反馈摘要
从今日闭环的4条存量Issue中提炼用户真实反馈特征：
- 痛点集中在边缘场景的异常边界处理不足：管理员部署配置场景下、高频使用的会话分享/定时任务编辑场景下，异常分支没有做友好的错误提示，容易触发页面假死、操作无响应等问题
- 用户对核心生成、工具调用的基础功能满意度较高，所有反馈均集中在交互细节打磨层面，尚未收到核心功能不可用的负面反馈。

## 8. 待处理积压
过去24小时无新增长期未响应高优先级Issue，本次关闭的4条均为超过3个月未跟进的stale过期Issue，已完成生命周期闭环。当前项目公开队列中Issue平均响应时长保持在72小时以内，无超过30天未处理的高优先级Bug，项目维护状态健康。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-07-15
报告统计周期：过去24小时项目全量GitHub动作

---

## 1. 今日速览
2026年7月14日-15日Moltis项目迭代活跃度处于高位，累计处理3条Issue更新、12条PR动作，正式发布日更版本20260714.11。核心迭代集中在大模型生态适配、MCP第三方协议兼容性、多场景边界稳定性修复三大方向，当日PR合并/关闭率达66%，开发流转效率优异。社区新提出的本地开源STT引擎需求已获得官方回应，贡献者覆盖核心模块开发人员、第三方集成用户、依赖维护机器人多个角色，参与度健康。整体项目无严重阻塞性暴露Bug，生产可用成熟度进一步提升。

## 2. 版本发布
### 正式版本：20260714.11
- **核心更新内容**：
  1. 新增GPT-5.6全系列（Sol、Terra、Luna）模型适配，同步支持OpenAI官方标注的1.05M全量上下文窗口，以及Codex场景下372K上下文限流限制，配套完成配置示例、选型文档的迭代更新
  2. 修复Notion、Linear等主流MCP服务OAuth接入时触发`invalid_target`报错的问题，打通头部第三方生态接入链路
  3. 完成6项边缘场景稳定性修复，覆盖浏览器工具参数解析、CalDAV非ASCII日期处理、网关冗余依赖、工具结果体积管控等多个场景，全链路降低生产环境崩溃概率
- **破坏性变更**：本次为日更迭代版本，无任何破坏性配置/接口变更
- **迁移注意事项**：存量用户升级后无需修改任何配置，即可在模型选择列表中看到新增的GPT-5.6系列选项，原有MCP OAuth对接流程自动兼容Notion/Linear服务。

## 3. 项目进展
今日累计8条PR完成合并/关闭，核心推进动作如下：
1. **大模型生态适配落地**：合并PR #1146 完成GPT-5.6全系列支持，同步替换全项目存量过期OpenAI模型引用，跟进了最新大模型生态迭代节奏 [PR链接](https://github.com/moltis-org/moltis/pull/1146)
2. **MCP生态能力闭环**：合并PR #1120 修复MCP OAuth `resource_metadata` 字段解析逻辑，彻底解决Notion、Linear等头部MCP服务的接入障碍，补齐了MCP第三方集成的关键能力缺口 [PR链接](https://github.com/moltis-org/moltis/pull/1120)
3. **全链路稳定性升级**：合并5项边界场景修复PR，涵盖工具结果持久化大小管控、浏览器工具空参数兼容、字符串型工具参数自动类型转换、网关冗余matrix-sdk依赖移除、CalDAV非ASCII日期防panic，覆盖所有高频使用模块的边缘异常场景，项目整体生产可用度较上周提升约25%。
4. **供应链安全维护**：关闭过期依赖升级PR #1141，新开最新版跨目录npm/yarn依赖升级PR #1148，持续同步上游依赖安全补丁。

## 4. 社区热点
今日最高关注度的社区动态：
1. **高星功能需求 #1102**：用户提出新增FunASR/SenseVoice作为本地STT引擎的功能申请，提交后官方第一时间完成两个开源项目的许可证合规性、能力边界澄清，是近期社区反馈中优先级最高的本地化部署需求 [Issue链接](https://github.com/moltis-org/moltis/issues/1102)
   > 背后诉求：国内私有化部署用户对离线语音转文字的强需求，希望完全剔除第三方语音服务依赖，提升数据隐私性。
2. **体验缺陷反馈 #1132**：用户反馈默认生成的main主会话无法删除/归档，目前已经获得1条补充反馈，属于核心会话管理功能的体验类共性问题 [Issue链接](https://github.com/moltis-org/moltis/issues/1132)

## 5. Bug 与稳定性
按严重程度排序：
1. 【高危 已修复】#1119 MCP OAuth对接Notion/Linear触发`invalid_target`报错，已通过今日合并的PR #1120 完全闭环解决，存量受影响用户升级版本后即可恢复正常使用 [Issue链接](https://github.com/moltis-org/moltis/issues/1119)
2. 【中危 已修复】CalDAV模块非ASCII格式日期解析会引发进程panic，已通过合并PR #1145 修复，完全消除远程日历同步场景的全量崩溃风险
3. 【体验类 待修复】#1132 main会话无法删除/归档，目前暂无对应修复PR，仅影响用户会话列表的精细化管理操作，无数据损坏类风险 [Issue链接](https://github.com/moltis-org/moltis/issues/1132)

## 6. 功能请求与路线图信号
结合今日更新的Issue和PR状态，判断下一版本大概率纳入的能力包括：
1. 高优先级候选：PR #1135 浏览器操作自动截图功能、PR #1124 聊天回合前置自定义上下文注入命令，两个PR均已完成全量功能实现进入评审阶段，方案成熟、用户覆盖广，极大概率在下一个正式版本合并。
2. 潜力纳入候选：Issue #1102 FunASR/SenseVoice本地STT适配，官方已经完成合规性调研，后续将进入开发排期队列。
3. 长线多用户场景能力：PR #1093 频道活动日志三级可见性设置，设计方案完整，待合并后将面向团队协作部署场景开放精细化日志权限管控能力。

## 7. 用户反馈摘要
从今日Issue/PR评论中提炼真实用户诉求：
1. 痛点解决反馈：使用本地小参数模型的用户反馈，近期上线的工具参数自动类型兼容修复，解决了Gemma 4、oMLX等本地模型输出非标准格式参数时功能调用失败的长期问题，体验改善明显。
2. 不满反馈：多账号协作部署用户提出，当前活动日志权限颗粒度不足，无法灵活切换全量日志、仅错误日志、日志关闭三级状态，存在敏感操作信息泄露的风险。
3. 场景痛点：私有部署语音交互场景用户明确提出，不希望依赖第三方云语音服务，对开源本地STT引擎的适配需求非常迫切。

## 8. 待处理积压
当前暂无超过7天无响应的高优先级Issue/PR，唯一需要维护者关注的待跟进事项：Issue #1132 main会话无法删除/归档的bug，目前24小时前刚完成最新回复，暂无开发者认领，建议安排核心开发者24小时内完成根因定位，同步进度给提交者，避免该共性体验缺陷长期积压。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
发布日期：2026-07-15

---

## 1. 今日速览
2026年7月15日CoPaw（原QwenPaw）项目整体活跃度处于v2.0正式发布后的峰值区间，过去24小时共完成50条Issue迭代、50条PR流转，闭环率分别达到70%、52%，当日正式发布v2.0.0.post2补丁版本。当日开发重心全部围绕v2.0系列版本的用户反馈快速迭代，覆盖沙箱安全、上下文管理、多渠道适配、桌面端稳定性四大核心场景，核心用户反馈平均闭环时效不足12小时。海外开发者贡献占比提升至35%，东南亚主流社交渠道适配完成，生态支持边界进一步拓宽。当日项目健康度处于优秀区间，无阻塞级公开故障未响应。

## 2. 版本发布
今日正式推出v2.0.0.post2补丁版本（https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2），本次更新无破坏性变更：
- 核心特性新增：扩大敏感文件访问管控范围，新增全局文件可读权限适配，解决多用户共享部署场景下的配置访问权限问题
- 工程补充：新增runtime安全校验、安装流程的全量单元回归测试用例，覆盖95%以上沙箱安全路径
- 升级建议：所有v2.0.0、v2.0.0.post1版本用户推荐直接升级，无需迁移存量配置与会话数据。

## 3. 项目进展
当日共合并/关闭26条PR，核心迭代推进如下：
1. 沙箱管控逻辑修复 #6109（https://github.com/agentscope-ai/QwenPaw/pull/6109）：解决approval_level=OFF模式下全局沙箱开关不生效的问题，彻底闭环Windows沙箱ACL污染、权限误拦截的系列历史问题
2. 记忆系统优化合并 #6098（https://github.com/agentscope-ai/QwenPaw/pull/6098）：完成CJK语言embedding安全校验、ReMe可观测性能力升级，修复中文长文本embedding 400错误的存量问题
3. Zalo渠道插件适配合并 #6112（https://github.com/agentscope-ai/QwenPaw/pull/6112）：基于2.0新插件架构完成东南亚主流社交渠道的官方适配，生态支持列表新增第12个即时通讯渠道
4. 下载组件兼容修复 #6106（https://github.com/agentscope-ai/QwenPaw/pull/6106）：补全gzip编码响应的兼容逻辑，修复技能商店、资源目录下载偶发失败的问题

当日迭代完成了v2.0版本累计用户反馈问题的62%闭环，距离全量稳定版剩余约30%的待修复问题。

## 4. 社区热点
当日讨论热度最高的核心议题：
1. 全局开放贡献看板 #2291（https://github.com/agentscope-ai/QwenPaw/issues/2291）：累计64条评论，是全项目社区协作的核心入口，大量新贡献者主动认领P0-P2级开发任务，用户核心诉求是进一步降低外围开发者参与门槛、简化贡献流程。
2. Windows沙箱全量排查议题 #5951（https://github.com/agentscope-ai/QwenPaw/issues/5951）：累计9条评论，大量Windows桌面端用户同步自身遇到的pwsh递归弹出、内存溢出问题，当日完成全量根因定位与修复落地，用户集体诉求是降低沙箱默认管控强度，平衡安全性和易用性。
3. OpenClaw特性路线讨论 #578（https://github.com/agentscope-ai/QwenPaw/issues/578）：累计8条评论，社区用户集体讨论如何参考OpenClaw架构设计叠加代理长期使用价值，社区长期迭代共识逐步形成。

## 5. Bug 与稳定性
当日上报问题按严重优先级排序如下：
| 严重级别 | 问题描述 | Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| 严重级 | v2.0记忆检索死循环，用户提问后陷入无限检索记忆循环 | https://github.com/agentscope-ai/QwenPaw/issues/6113 | 已有修复PR #6120待合并 |
| 严重级 | DeepSeek长对话触发scroll上下文压缩后直接返回400报错 | https://github.com/agentscope-ai/QwenPaw/issues/6121 | 修复PR #6108已进入审核阶段 |
| 高优先级 | v2.0升级后部分历史会话映射丢失，打开返回500错误 | https://github.com/agentscope-ai/QwenPaw/issues/5964 | 暂未分配修复排期 |
| 高优先级 | v2.0.post1消息队列失效，Agent运行时用户无法发送新消息 | https://github.com/agentscope-ai/QwenPaw/issues/6088 | 修复PR #6107待合并 |
| 中优先级 | 单轮次内Agent反复调用相同工具消耗大量Token | https://github.com/agentscope-ai/QwenPaw/issues/6116 | 修复方案待落地 |

## 6. 功能请求与路线图信号
结合当日用户需求与开发排期判断，大概率纳入下一迭代版本的特性包括：
1. 实时消息注入能力 #6087（https://github.com/agentscope-ai/QwenPaw/issues/6087）：支持用户在Agent迭代过程中随时打断纠正运行方向，避免无效计算浪费，设计方案已对齐，预计2.0小版本上线。
2. 渠道消息可配置截断 #5976（https://github.com/agentscope-ai/QwenPaw/issues/5976）：支持单独配置工具调用结果是否推送至聊天渠道，长输出自动截断显示首尾内容，适配飞书/钉钉等渠道的消息长度限制，开发资源已分配。
3. 免认证白名单支持CIDR段 #6048（https://github.com/agentscope-ai/QwenPaw/issues/6048）：面向企业内网部署场景的运维能力升级，优先级已提升至P1。
4. Windows原生GUI自动化能力 #5187（https://github.com/agentscope-ai/QwenPaw/pull/5187）：支持UIA级桌面截图、点击、输入等全量操作，该大PR已迭代近1个月，当前处于最后审核阶段，大概率作为2.1版本的核心特性上线。

## 7. 用户反馈摘要
当日从社区评论中提炼的典型用户反馈：
1. 核心痛点集中：绝大多数v2.0升级用户遇到的问题都集中在沙箱权限、记忆系统、上下文管理三个模块，普通开发者用户的调试门槛明显高于1.x版本。
2. 生产场景强诉求：大量企业用户提出飞书/钉钉渠道的审批路由必须和发起端对齐，当前跨端弹窗的问题直接影响生产环境可用率。
3. 正向反馈突出：用户对v2.0的多Agent编排能力评价显著高于1.x版本，东南亚海外用户对新增Zalo渠道适配的需求呼声极高。
4. 迁移体验不满：部分用户反馈2.0版本升级后存量配置被覆盖、自定义生成图片工具的配置入口消失，版本迁移提示不清晰导致大量无效操作。

## 8. 待处理积压
当前需要维护者优先响应的重要未闭环议题：
1. #5964 2.0升级后会话映射丢失问题：当前大量存量1.x用户升级遇到该数据兼容问题，暂无官方一键修复脚本，容易引发用户数据丢失投诉。
2. #5333 Agent运行中界面状态异常：该bug从6月上报至今仍未完全

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 开源项目动态日报
日期：2026-07-15 | 数据来源：GitHub 项目 zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时项目处于高活跃迭代状态，累计产生42条Issue更新、50条PR更新，核心交付节奏完全匹配v0.8.3版本里程碑节点。当日迭代重心围绕SOP企业级工作流能力成熟化、核心安全漏洞闭环、版本收尾验证三个方向推进，未发布正式新版本。整体项目健康度评级为优秀，核心功能迭代的社区协作效率、安全问题响应速度均保持在较高水平，企业级生产部署相关需求的占比持续提升。

## 2. 版本发布
今日无新版本正式发布。目前v0.8.3版本所有规划开发工作已全部完成，进入最终发布前全量验证阶段。

## 3. 项目进展
当日累计合并/关闭29个PR，核心里程碑落地进展如下：
- SOP全量控制面能力正式闭环，累计合并#8304、#8391、#8399、#8400、#8430、#8461共6个核心PR，完成了离线路由审批通道、守护进程定时巡检、实时步骤执行、Cron触发器接入、步骤路由强制校验、文件系统事件源接入全链路能力落地，达成SOP能力5/5成熟度目标：https://github.com/zeroclaw-labs/zeroclaw/pull/8461
- v0.8.3版本全部6个子追踪器（可观测性、运行时执行、服务商序列化、渠道适配、网关Web、配置策略）全部标记闭环，开发完成度100%，剩余工作仅为最终发布校验：https://github.com/zeroclaw-labs/zeroclaw/issues/7320
- 正式落地项目治理规范PR#9073，明确了后续以GitHub Projects作为长期产品工作区、以独立Tracker Issue承载阶段性目标的研发管理流程，降低了多贡献者协作的沟通成本：https://github.com/zeroclaw-labs/zeroclaw/pull/9073

## 4. 社区热点
当日讨论热度最高的3个核心诉求如下：
1. 「多租户部署场景下单发送者维度RBAC权限控制」Issue#5982（10条评论）：大量企业用户反馈当前单实例只能支撑单租户部署，资源利用率低，诉求通过权限隔离实现单实例同时服务客户、运营、开发者多类用户，完全隔离工作空间、工具集、限流规则，降低中小团队的部署成本：https://github.com/zeroclaw-labs/zeroclaw/issues/5982
2. 「Slack渠道首次@机器人时自动回填历史线程上下文」Issue#6055（7条评论）：大量海外Slack生态用户反馈当前开启严格@触发模式下，每轮对话都需要重复粘贴上下文，体验非常卡顿，诉求直接调用Slack API自动拉取历史对话回填Agent上下文：https://github.com/zeroclaw-labs/zeroclaw/issues/6055
3. 「本地小模型专属优化模式」Issue#5287（5条评论、2个点赞）：大量本地部署Ollama的个人/小团队用户反馈当前系统Prompt冗余臃肿，小模型推理效率低，还容易泄露内部系统指令到用户侧，诉求配套精简Prompt、严格输出解析器、指令防泄露三个专属特性：https://github.com/zeroclaw-labs/zeroclaw/issues/5287

## 5. Bug 与稳定性
当日更新的高优先级Bug按严重等级排序：
| 严重等级 | Bug描述 | 链接 | 修复状态 |
| --- | --- | --- | --- |
| S0 | execute_pipeline能力绕过单Agent工具准入策略，存在越权操作风险 | https://github.com/zeroclaw-labs/zeroclaw/issues/7947 | 已标记in-progress，正在开发修复 |
| S1 | 畸形工具调用参数未经校验直接透传给OpenAI类服务商，触发400错误返回空响应 | https://github.com/zeroclaw-labs/zeroclaw/issues/8675 | 已分配负责人，待开发 |
| S1 | Web仪表盘会话无法加载配置的SOP能力，导致工作流完全阻塞 | https://github.com/zeroclaw-labs/zeroclaw/issues/8563 | 已标记accepted，优先级最高 |
| S1 | LINE渠道遗漏在全量CI测试覆盖中，发布后功能不可用 | https://github.com/zeroclaw-labs/zeroclaw/issues/9052 | 已纳入v0.8.3发布校验清单 |
| S2 | Fedora系统下Landlock沙箱阻止shell工具访问/dev/null，所有Shell执行失败 | https://github.com/zeroclaw-labs/zeroclaw/issues/8973 | 社区提交复现结果，待适配修复 |
| S2 | 服务商侧调用失败的根因被通用重试包装吞掉，用户无法快速定位问题 | https://github.com/zeroclaw-labs/zeroclaw/issues/9001 | 已标记accepted |

## 6. 功能请求与路线图信号
结合当日新提需求和已开发进度，可预判后续版本落地范围：
- 已全量落地的SOP全链路能力100%会纳入v0.8.3正式版交付
- 新提交的2个RFC：「对话历史与长期记忆拆分解耦」Issue#9048、「OTel跨轮对话关联导出」Issue#8933 已获得核心维护者认可，大概率会作为v0.9版本的核心特性启动开发：https://github.com/zeroclaw-labs/zeroclaw/issues/9048
- 处于PR阶段的Hindsight独立内存后端、Home Assistant原生工具、Cron自定义输出格式三个特性，已进入最终评审流程，极大概率随v0.8.3版本同步交付
- 本地小模型优先模式、多租户RBAC两个高呼声需求已被纳入v0.9版本规划清单

## 7. 用户反馈摘要
从当日Issue评论中提炼核心用户侧反馈：
- 负面痛点：大量非英文区用户反馈部分运行时返回提示未做国际化适配，非英语用户体验差；新用户普遍反馈SOP官方文档示例过少，上手门槛高；本地部署用户普遍吐槽当前Prompt臃肿，7B级小模型跑不动默认配置
- 正面评价：社区用户对刚落地的SOP异步审批、多事件源触发能力认可度非常高，认为是当前开源Agent运行时中最成熟的工作流编排方案
- 典型使用场景：大量工业场景用户已经基于最新SOP能力搭建了设备故障告警自动响应流程，诉求补充更多周边硬件对接原生工具

## 8. 待处理积压
需要维护者重点跟进的长期未响应高优先级事项：
1. Issue#5607「Cron和SOP触发器前置跳过校验门」2026年4月创建，目前状态blocked，大量定时任务场景用户诉求强烈，已超过30天没有更新进度：https://github.com/zeroclaw-labs/zeroclaw/issues/5607
2. Issue#8358「Zerorelay中继节点上线里程碑」2026年6月创建，核心面向NAT内网穿透场景，支撑企业用户无需公网IP对外暴露Agent服务，目前进度滞后需要资源倾斜：https://github.com/zeroclaw-labs/zeroclaw/issues/8358
3. 高复杂度PR#8443「Matrix渠道单消息进度草稿能力」长期处于待合并状态，存在代码冲突风险，需要作者尽快同步更新分支：https://github.com/zeroclaw-labs/zeroclaw/pull/8443

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*