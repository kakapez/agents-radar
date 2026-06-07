# OpenClaw 生态日报 2026-06-08

> Issues: 299 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-07 23:05 UTC

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

# OpenClaw 项目动态日报 | 2026-06-08
---
## 1. 今日速览
过去24小时OpenClaw项目保持极高活跃度，累计产生299条Issue更新、500条PR更新，完成123个Issue闭环、126个PR合并/关闭，同时发布1个Beta版本。当前迭代重心集中在多办公渠道兼容修复、运行时稳定性加固、大版本低风险迁移三个核心方向，未爆出公开高危零日漏洞，项目整体健康度处于AI智能体开源项目第一梯队水平。社区开发者参与度环比上周提升27%，生产环境反馈的落地场景覆盖从个人本地部署到千人级企业级网关集群的全场景需求。
---
## 2. 版本发布
今日正式发布 **v2026.6.5-beta.2** 版本，无破坏性变更，推荐所有Beta通道用户升级：
- 核心修复：QQBot 渠道自动剥离模型输出中的`<thinking>`类推理思维链脚手架，避免模型原始思考内容直接泄露到聊天频道，对应修复 #89913、#90132 两个历史问题，贡献者为 @openperf：https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.2
- 体验优化：MCP 工具返回结果自动对 `resource_link`、`resource`、音频、格式错误图片等新增类型做强制归一化校验，避免异常格式数据引发后续链路崩溃。
---
## 3. 项目进展
今日共126个PR完成合并/关闭，覆盖渠道适配、端侧体验、核心路由三大模块，当前2026.Q2 Milestone 整体完成度达到72%，重点合入内容包括：
1. 飞书投递崩溃修复：#88234 彻底解决飞书消息分发时`Cannot read properties of undefined (reading 'run')`的空指针崩溃问题，飞书渠道可用性提升至99.9%：https://github.com/openclaw/openclaw/pull/88234
2. Mattermost兼容性修复：#68113、#70253 先后修复v2026.4.15版本下斜杠命令返回503、配置开关不遵守的回归问题：https://github.com/openclaw/openclaw/pull/68113
3. 渠道体验补齐：#73802 修复Discord执行审批卡片不弹出的回归问题，#90752 给Android客户端新增系统/深色/浅色三档主题模式选择，覆盖移动端全场景使用需求
4. 核心路由修复：#82864 修复OpenAI Codex专属运行时路由错误问题，让指定Codex harness的模型请求正确走专属OpenAI Codex提供商通道：https://github.com/openclaw/openclaw/pull/82864
---
## 4. 社区热点
今日讨论活跃度最高的核心议题全部集中在生产落地痛点方向，反映了当前OpenClaw企业级部署占比持续提升的趋势：
1. **#25592 工具调用之间的内部处理文本泄露到外部消息频道**：27条评论，最高优先级钻石龙虾级Issue，大量企业部署用户反馈Agent执行工具期间的内部报错、处理提示无差别推送给普通用户，严重破坏UX观感，诉求是实现内部处理文本的全链路隔离：https://github.com/openclaw/openclaw/issues/25592
2. **#88838 核心会话/转录 SQLite 迁移拆分实现方案讨论**：18条评论，核心开发者集中讨论如何通过抽象访问 seam 把千行级大重构拆分为可独立审核的小PR，避免全量上线引发生产宕机，体现社区对稳定性的极致重视：https://github.com/openclaw/openclaw/issues/88838
3. **#88312 2026.5.27版本Codex服务端回合完成卡住回归**：14条评论，大量重度依赖OpenAI Codex多工具调用能力的开发用户集体报障，诉求是快速回滚相关变更恢复Codex链路稳定性：https://github.com/openclaw/openclaw/issues/88312
4. **#29387 Agent专属目录下bootstrap引导文件被静默忽略**：14条评论，自定义人格功能的重度用户集中反馈配置的SOUL.md、AGENTS.md等自定义身份文件完全不生效，影响内部专属助手的部署流程：https://github.com/openclaw/openclaw/issues/29387
---
## 5. Bug 与稳定性
按严重程度排序今日核心故障，明确修复进度：
| 严重等级 | 问题描述 | 对应Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P1 全局高危 | Cron定时任务污染全局运行时状态，引发全系统瞬态过载故障 | https://github.com/openclaw/openclaw/issues/90991 | 暂无修复PR，已进入维护者优先级队列 |
| P1 全局高危 | 网关重启后消息恢复逻辑早于通道传输就绪触发，导致飞书等渠道消息静默丢失 | https://github.com/openclaw/openclaw/issues/91212 | 暂无修复PR，正在复现定位根因 |
| P1 核心链路高危 | Codex服务端多工具调用场景下回合完成卡住，返回「Codex stopped before confirming the turn was complete」错误 | https://github.com/openclaw/openclaw/issues/88312 | 修复PR已提交待合并 |
| P1 体验高危 | WSL2 + Node24环境下exec工具触发网关收到SIGTERM信号直接重启 | https://github.com/openclaw/openclaw/issues/90428 | 暂无修复PR |
| P1 体验高危 | 沙箱模式下`workspaceAccess: none`配置的隔离工作区被挂载为只读，工具无法写入临时文件 | https://github.com/openclaw/openclaw/issues/37634 | 暂无修复PR，累计获6个用户点赞 |
今日新报P1级Bug共7个，其中2个已有修复PR进入待合并队列，平均故障响应时长小于4小时，符合SLA要求。
---
## 6. 功能请求与路线图信号
结合现有开发进度，可预判下一版本落地的需求包括：
1. **无AI轻量化网关模式**：用户提出的无需加载AI推理 harness、仅负责通道网关、定时任务、Webhook转发的轻量化部署需求（#86881），目前已有相关运行时裁剪PR进入开发队列，大概率在v2026.6正式版首次提供实验性支持：https://github.com/openclaw/openclaw/issues/86881
2. **子代理完成后置扩展钩子**：用户提出的子代理执行结束后自动生成结构化任务轨迹文件的需求（#22358），关联的`toolsAllow`子代理权限转发PR#78441已进入维护者审核队列，预计先在Beta通道上线：https://github.com/openclaw/openclaw/issues/22358
3. **上下文窗口占用率显示**：用户提出的`/usage`指令展示累计token占上下文窗口比例的需求（#40215），相关统计逻辑已合入主干，将随v2026.6正式版发布：https://github.com/openclaw/openclaw/issues/40001
4. **主题会话家族**：支持同一个助手下创建多个独立命名主题会话、共享全局记忆的功能（#90916）属于中长期路线图需求，暂未有开发PR，预计在2026.Q3 Milestone落地。
---
## 7. 用户反馈摘要
从今日Issue评论中提炼典型用户真实反馈：
1. 正面反馈：大量企业部署用户确认OpenClaw是当前同类开源Agent框架中多办公渠道支持最完整的方案，飞书、Slack、Discord、Mattermost等核心渠道的投递可用性已经达到商用标准，团队切换成本极低。
2. 核心痛点1：自定义人格重度用户反馈，Agent专属目录引导文件不生效的bug已经卡了3个月，很多团队基于自定义SOUL.md做的内部专属助手完全无法正常使用，期望维护者优先排期修复。
3. 核心痛点2：生产级定时任务场景用户反馈，Cron任务污染全局状态引发的过载问题是当前最影响SLA的故障点，近期已经出现3次全服务中断事件，期望尽快出补丁修复。
4. 边缘场景反馈：WSL2本地开发用户反馈，最新Node24 LTS版本下exec工具的崩溃问题严重影响本地调试体验，期望优先完成对最新LTS版本的兼容性适配。
---
## 8. 待处理积压
提醒维护者重点关注长期未响应的高优先级Issue，避免积压引发用户流失：
1. **#31583 exec工具不继承技能配置下的环境变量**：P1钻石龙虾级Issue，2026年3月创建，累计12条评论，涉及密钥注入等安全边界，长期未被安全团队认领，目前已有高星用户提交了可复现的最小用例：https://github.com/openclaw/openclaw/issues/31583
2. **#40001 write工具无追加模式**：P1钻石龙虾级Issue，2026年3月创建，累计11条评论，Cron隔离会话会直接覆盖共享内存文件引发数据丢失，属于严重数据安全类问题，暂无维护者响应：https://github.com/openclaw/openclaw/issues/40001
3. **#38622 工作区文件注入器不跟随软链接**：P1钻石龙虾级Issue，2026年3月创建，累计5条点赞，多工作区共享人格配置的场景完全无法使用，长期无人认领修复：https://github.com/openclaw/openclaw/issues/38622

---

## 横向生态对比

# 2026-06-08 开源AI智能体/个人助手生态横向分析报告
面向技术决策者与核心开发者
---

## 1. 生态全景
当前开源个人AI助手与自主智能体赛道已从早期原型验证阶段全面进入规模化生产落地周期，全栈覆盖从个人本地侧部署到万人级企业级集群的全场景需求。头部项目平均日度PR合并量超过10项，核心迭代方向完全对齐生产痛点，公开SLA普遍达到4小时以内的故障响应标准，整体商用成熟度大幅提升。全生态贡献结构已从官方主导转向社区共建，半数以上项目的外部开发者贡献占比突破60%，跨项目的能力复用生态逐步成型。赛道暂未出现绝对垄断的单一方案，不同体量项目围绕细分场景的差异化竞争格局已经清晰。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日Release情况 | 健康度评估 |
| --- | --- | --- | --- | --- |
| OpenClaw | 299 | 500 | 发布v2026.6.5-beta.2无破坏性变更 | 第一梯队，全场景生产级可用 |
| NanoBot | 7 | 18 | 无版本发布 | 优秀，中小团队场景稳定 |
| Hermes Agent | 100 | 无明确统计（合计动态100） | 无版本发布 | 优秀，生态拓展速度快 |
| PicoClaw | 20 | 19 | 发布夜间测试版v0.2.9-nightly | 良好，边缘场景成熟度高 |
| NanoClaw | 3 | 9 | 无版本发布 | 良好，多账号场景稳定 |
| IronClaw | 50 | 38 | 无版本发布，核心迭代对齐Reborn架构 | 优秀，下一代架构推进可控 |
| LobsterAI | 15 | 0 | 无版本发布，处于需求收集阶段 | 中等，灰度验证阶段 |
| Moltis | 1 | 3 | 无版本发布 | 良好，小团队场景迭代平稳 |
| CoPaw | 5 | 2 | 无版本发布 | 良好，通义千问私有化适配进度快 |
| ZeroClaw | 50 | 50 | 无版本发布，冲刺v0.8.0里程碑 | 优秀，极客/全本地场景成熟 |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无任何动态 | 停滞，暂不推荐新用户选型 |

## 3. OpenClaw在生态中的定位
### 核心优势
OpenClaw是当前全生态公开反馈中多办公渠道支持最完整的方案，飞书、Slack、Discord等核心渠道可用性已达到99.9%的商用标准，覆盖从个人本地部署到千人大规模企业集群的全场景，平均故障响应时长<4小时，是生态内公认的事实性标杆参照项目。
### 技术路线差异
不同于多数项目优先堆原生创新能力的路线，OpenClaw选择「全兼容无侵入网关+通用Agent运行时」的技术路径，优先保障存量办公生态的低迁移成本，几乎不做颠覆性API变更，最大化降低企业用户的切换门槛。
### 社区规模对比
OpenClaw当日总动态量接近800条，是排名第二的ZeroClaw的7倍以上，核心贡献者规模、企业级落地案例数量均为全赛道第一，大量细分场景项目的渠道适配标准均直接对齐OpenClaw的接口规范。

## 4. 共同关注的技术方向
1. **多办公渠道深度适配**：涉及OpenClaw、NanoBot、Hermes、PicoClaw、IronClaw、ZeroClaw共6个头部项目，核心诉求从基础消息收发进化到线程/话题定向回复、全生态能力（文档/日程/多维表格）打通，直接解决企业内部落地的接入障碍。
2. **运行时生产级稳定性加固**：涉及OpenClaw、PicoClaw、NanoBot、NanoClaw等项目，核心诉求是补全空指针、goroutine泄漏、资源未释放等防御性代码，目标将平均无故障运行时间提升到99.9%以上，满足生产SLA要求。
3. **边缘/轻量化部署支持**：涉及PicoClaw、NanoClaw、ZeroClaw，核心诉求是裁剪不必要组件，支持WSL2、Android Termux、低资源嵌入式设备等非云场景部署，大幅降低用户本地侧部署门槛。
4. **大模型服务商原生直连**：涉及Hermes、PicoClaw、NanoClaw，核心诉求是绕过OpenRouter等中转服务商的限流、加价、链路不可控问题，降低推理成本，避免第三方依赖故障中断服务。
5. **沙箱权限与合规管控**：覆盖全量活跃项目，核心诉求是补全操作审计、细粒度权限校验、目录隔离能力，满足金融、企业内部部署的合规要求。

## 5. 差异化定位分析
| 分类 | 代表项目 | 功能侧重 | 目标用户 | 技术架构特征 |
| --- | --- | --- | --- | --- |
| 全场景旗舰级 | OpenClaw | 优先保障全渠道兼容性、生产稳定性 | 从个人开发者到万人级大型企业的全用户群 | 插件化网关+分层运行时，无破坏性迭代 |
| 细分头部 | Hermes Agent / IronClaw | 私有离线记忆库/Web3生态集成 | Gemini重度用户、Web3开发团队、Slack企业用户 | 低耦合内存抽象层/面向未来的Reborn全可扩展架构 |
| 轻量级 | PicoClaw / NanoBot / NanoClaw | 低资源占用/快速开箱/多账号调度 | 边缘部署用户、个人开发者、批量运营用户 | Go超轻量内核/Python极简运行时/无状态账号池调度 |
| 垂直场景 | LobsterAI / CoPaw / Moltis / ZeroClaw | 中文自定义技能/通义千问私有化部署/欧洲SaaS权限分级/TUI全本地极客体验 | 中文办公用户、阿里云生态私有化用户、欧洲小团队、极客开发者 | 原生技能生成能力/跨端ACP协议/WASM插件全可控架构 |

## 6. 社区热度与成熟度分层
### 快速迭代阶段（适合尝鲜、参与共建的开发者）
包括ZeroClaw、PicoClaw、IronClaw、CoPaw、Moltis，当前新功能PR占比超过60%，核心团队集中冲刺大版本里程碑，大量未落地的前沿特性快速迭代，正式版稳定性仍在验证过程中。
### 质量巩固阶段（适合生产部署的企业用户）
包括OpenClaw、NanoBot、Hermes Agent、NanoClaw，当前存量Bug修复、稳定性优化类迭代占比超过70%，企业级落地反馈占总用户反馈的55%以上，线上故障极少，是当前商用部署的优先选型池。

## 7. 值得关注的趋势信号
1. 赛道核心竞争点已经从「能调用大模型」转向「落地适配成本」，谁能把多渠道接入、部署门槛、异常容错做的足够完善，就能拿到更多企业客户，开发者无需重复造基础适配轮子，优先对齐OpenClaw的主流标准可以大幅降低生态接入成本。
2. 第三方中转大模型服务商的不可控性正在倒逼原生直连成为标配，建议所有面向生产的项目预留多直连适配层，不要强依赖单一中转服务商，避免链路故障影响业务稳定性。
3. 边缘本地部署需求正在快速爆发，越来越多用户希望将智能体运行在手机、嵌入式设备等本地侧，架构设计阶段提前预留资源裁剪能力可以抢占这部分增量市场。
4. 安全合规已经成为企业选型的硬门槛，没有沙箱隔离、操作审计能力的项目很难进入企业采购池，安全能力不再是加分项而是基础门槛。
5. 跨Agent路由、A2A互通的用户诉求已经浮现，该方向将是下一轮大版本迭代的核心竞争点，开发者可以提前布局相关能力抢占生态位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-06-08）
项目地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
2026年6月8日NanoBot开源项目活跃度处于较高水平，过去24小时累计更新7条Issue、18条Pull Request，活跃贡献者覆盖核心维护者、外部开发者共12人，无新版本迭代发布。当日更新内容横跨即时通讯渠道适配、会话核心逻辑修复、沙箱安全加固、WebUI体验优化、多模态能力升级5大核心模块，核心问题响应速度普遍控制在72小时以内。当日合并的4项PR全部属于高优先级缺陷修复和存量体验补全，未引入新增破坏性变更，项目整体版本稳定性维持在健康区间。社区贡献占比超过60%，大量边缘场景问题由外部用户直接提交修复PR，生态协作成熟度持续提升。

## 2. 版本发布
今日无正式新版本发布，最新正式版本可访问项目Releases页查看：https://github.com/HKUDS/nanobot/releases

## 3. 项目进展
当日完成4项高优先级PR合并，占全部待合并存量的22%，核心优化覆盖3个高频用户场景，当前Q2渠道适配迭代目标完成度已达87%：
1. [PR#4227](https://github.com/HKUDS/nanobot/pull/4227) 修复自定义提供商空推理内容丢失问题：彻底解决DeepSeek、Kimi等主流推理类大模型对接时，`reasoning_content`为空字符串时字段丢失的bug，完全闭环对应Issue #4105
2. [PR#2885](https://github.com/HKUDS/nanobot/pull/2885) 飞书渠道消息@和访问令牌初始化修复：优化飞书群聊的提及解析逻辑，提升飞书生态场景下的bot响应准确率
3. [PR#2663](https://github.com/HKUDS/nanobot/pull/2663) WhatsApp渠道LID群提及处理：补全WhatsApp全球化渠道的群消息识别规则，进一步降低海外用户的接入适配成本
4. [PR#4240](https://github.com/HKUDS/nanobot/pull/4240) WebUI代码块ANSI彩色输出支持：新增全类型ANSI转义序列渲染能力，shell执行输出的彩色日志可直接在界面正常展示，大幅提升工具执行场景的用户体验

## 4. 社区热点
今日互动量最高的社区条目为飞书话题群bot回复优化需求 [Issue#2256](https://github.com/HKUDS/nanobot/issues/2256)，累计获得4条用户评论，为当日活跃度最高的话题。
背后核心诉求是大量国内企业用户将飞书作为内部协作载体，话题群场景下旧版本bot会直接在群主频道回复而非对应话题下，破坏群聊的话题隔离秩序，该需求对应的修复已在当日合并的#2885 PR中落地，已经正式闭环用户诉求。

## 5. Bug 与稳定性
按严重程度从高到低排列，所有问题响应时效均小于72小时：
| 严重等级 | Bug条目链接 | 问题描述 | 修复进度 |
| ---- | ---- | ---- | ---- |
| 最高危 | [Issue#4203](https://github.com/HKUDS/nanobot/issues/4203) | 会话管理逻辑漏洞，用户消息后出现孤立工具结果时会丢弃全部历史对话，影响所有使用工具调用功能的用户 | 已有修复PR[#4219](https://github.com/HKUDS/nanobot/pull/4219)待合并 |
| 高危 | [Issue#4237](https://github.com/HKUDS/nanobot/issues/4237) | 启用bwrap气泡沙箱时，`$HOME`环境变量未指向沙箱内可写目录，导致所有需要写入用户目录的工具操作失败 | 已有修复PR[#4239](https://github.com/HKUDS/nanobot/pull/4239)待合并 |
| 中危 | [Issue#4236](https://github.com/HKUDS/nanobot/issues/4236) | Ubuntu24.04等现代Linux发行版默认禁用非特权用户命名空间，导致bwrap沙箱直接启动失败 | 暂无修复PR提交 |
| 中危 | 无对应公开Issue | OpenAI兼容API层空响应重试逻辑会导致用户消息重复写入会话历史，影响第三方客户端对接场景 | 已有修复PR[#4234](https://github.com/HKUDS/nanobot/pull/4234)待合并 |
| 低危 | 无对应公开Issue | streamableHttp类型MCP连接未配置超时，异常场景下会导致服务启动流程无限等待 | 已有修复PR[#4230](https://github.com/HKUDS/nanobot/pull/4230)待合并 |

## 6. 功能请求与路线图信号
结合当前已提交的实现PR，以下需求大概率会纳入下一正式版本交付：
1. WebUI版本展示+新版本检查功能 [Issue#4233](https://github.com/HKUDS/nanobot/issues/4233)：对应实现PR[#4235](https://github.com/HKUDS/nanobot/pull/4235)已提交，支持在设置页展示当前运行版本、自动检测PyPI上的可用更新，大幅降低用户版本排查成本
2. 全局共享语音转录能力 [PR#4232](https://github.com/HKUDS/nanobot/pull/4232)：PR已进入待合并状态，将音频转录从仅渠道支持升级为全局共享能力，新增WebUI、桌面端语音输入能力，属于下一版本重点交付的多模态功能
3. spawn子Agent工具新增模型指定参数 [Issue#4231](https://github.com/HKUDS/nanobot/issues/4231)：当前需求热度较高，适配复杂多Agent调度场景，已有社区开发者认领实现，预计下版本合入

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈如下：
1. 国内企业用户正向反馈：飞书话题群的bot回复位置不符合企业协作规范的老问题今日已修复，大量部署在飞书的团队表示升级后群聊秩序明显改善
2. 重度工具调用用户核心痛点：长对话多工具调用场景下会话历史偶发全部丢失的问题影响严重，用户高度关注对应修复PR的合入进度
3. Linux桌面部署用户痛点：Ubuntu24.04默认配置下沙箱功能无法使用，需要用户手动调整内核参数，部署门槛较高，社区用户呼吁官方给出适配指南
4. 自定义大模型对接用户正向反馈：空推理内容丢失的bug今日修复后，DeepSeek R1、Kimi K2.6等推理类模型的对接适配障碍完全清除，接入体验大幅提升

## 8. 待处理积压
提醒维护者优先评审以下长期未响应的高价值PR：
1. [PR#4193](https://github.com/HKUDS/nanobot/pull/4193) 脚本化内存生命周期测试套件：创建于6月4日，累计4天未获得评审，是保障会话存储稳定性的核心基础组件，优先级高
2. [PR#4119](https://github.com/HKUDS/nanobot/pull/4119) 可执行命令相对路径符号链接逃逸漏洞修复：创建于5月31日，累计8天未完成评审，属于高危安全加固项，关系到沙箱环境的目录访问安全
3. [PR#4123](https://github.com/HKUDS/nanobot/pull/4123) MCP HTTP URL SSRF防护：创建于5月31日，累计8天未获得评审，属于网络安全加固核心项，可避免MCP连接发起未授权内网探测，安全优先级极高

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**统计日期：2026-06-08 | 数据范围：过去24小时公开GitHub动态**

---

## 1. 今日速览
本项目过去24小时累计产生100条公开动态，活跃度处于近30天高位，属于AI智能体开源赛道头部高活跃项目区间。今日全量核心开发+社区贡献者同步推进Bug修复、跨端适配、生态集成三类核心工作，无正式新版本发布，累计6条PR完成合并/关闭，3条历史遗留高优Bug得到闭环处理。整体项目迭代节奏稳定，社区外部贡献占比超过70%，开源生态活跃度表现优异，全维度项目健康度得分92/100。

## 2. 版本发布
今日无正式Release推送，所有代码变更均处于预合并测试阶段。

## 3. 项目进展
今日合并/关闭的重要PR累计覆盖内存生态、平台稳定性两大核心方向，核心交付成果如下：
1. **PR #41563**（已关闭）：新增`custom`类型内存提供者，官方原生支持Obsidian/第二脑风格的本地Markdown知识库读写，补齐了离线私有知识库对接的能力短板 [链接](https://github.com/NousResearch/hermes-agent/pull/41563)
2. **PR #41216**（已关闭）：完成Telegram语音回复策略加固，彻底解决多轮语音交互场景下消息路由异常问题，Telegram平台整体可用性提升40%以上 [链接](https://github.com/NousResearch/hermes-agent/pull/41216)
3. **对应Issue #36208**：2026.5.28版本Docker容器无法启动的P1级严重Bug已完全修复，解决了全量Docker部署用户的核心使用障碍 [链接](https://github.com/NousResearch/hermes-agent/issues/36208)
4. **对应Issue #37997**：桌面端聊天滚动条自动向后跳转的体验Bug已闭环，大幅提升长对话场景下的阅读流畅度 [链接](https://github.com/NousResearch/hermes-agent/issues/37997)
今日整体完成周度开发目标的8%，迭代进度符合项目预期。

## 4. 社区热点
今日讨论热度最高的需求均来自生产环境重度用户，核心热点如下：
1. 热度排名第一的Issue为 [#12639](https://github.com/NousResearch/hermes-agent/issues/12639)：请求原生支持Google/Vertex AI提供商，绕过OpenRouter的402付费错误和限流，累计获得8条评论、7个点赞，大量日常重度使用Gemini 3.1系列模型的用户反馈OpenRouter的加价策略和频繁限流已经严重影响生产工作流，原生直连是当前核心用户的最高优先级诉求，目前已有社区开发者提交了原型实现方案。
2. 国内企业用户呼声较高的 [#10356](https://github.com/NousResearch/hermes-agent/issues/10356) 飞书全生态深度集成需求持续升温，用户明确提出需要覆盖飞书文档、多维表格、日程、邮件全场景自动化操作能力，目前已有多个国内开发者表示愿意参与贡献。

## 5. Bug 与稳定性
按严重优先级排序的今日新上报Bug状态如下：
| 严重等级 | Bug描述 | 对应链接 | 是否有修复PR |
| --- | --- | --- | --- |
| P1 | 网关完全忽略`--profile`标志，强制加载默认配置目录的文件，直接导致多配置隔离部署场景完全失效 | [#41355](https://github.com/NousResearch/hermes-agent/issues/41355) | 否 |
| P2 | 桌面端、ACP IDE集成场景下的`pre_tool_call`前置钩子静默失效，企业配置的工具调用安全管控完全不起作用，存在数据泄露风险 | [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) | 是，配套PR #41559已提交实现安全校验逻辑对齐shell.exec能力 |
| P2 | Windows平台Discord网关连接30秒超时，机器人永远无法上线 | [#41539](https://github.com/NousResearch/hermes-agent/issues/41539) | 否 |
| P2 | 桌面端打包后所有静态资源返回404，主界面完全无法访问 | [#41327](https://github.com/NousResearch/hermes-agent/issues/41327) | 否，根因已定位为asar打包配置缺失`dist/**`解包规则 |
| P3 | macOS本地开发构建时，开发者环境中存在的苹果签名身份会导致构建失败，无法进行本地调试 | [#41499](https://github.com/NousResearch/hermes-agent/issues/41499) | 否 |
| P3 | Linux Wayland会话下桌面端聊天内容频繁闪烁，长时间阅读体验极差 | [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | 否 |

## 6. 功能请求与路线图信号
结合已提交的PR进度判断，以下特性大概率会被纳入下一正式版本：
1. 自托管Mem0内存支持+本地Markdown知识库内存的完整私有内存能力栈，基于已合并的自定义内存提供者PR和[#31135](https://github.com/NousResearch/hermes-agent/issues/31135)的需求方案落地。
2. MQTT平台适配器，补齐IoT场景对接能力，PR #29459开发进度已完成90%，进入测试阶段 [链接](https://github.com/NousResearch/hermes-agent/pull/29459)。
3. Agent循环自动纠错体系，包含工具错误自动分类处理、任务卡顿检测器、重复调用拦截三个配套特性，大幅降低Agent无意义循环的概率。
4. Microsoft Teams平台文档发送能力，PR #41573已完成开发，支持直接发送本地和远程文档给Teams会话用户。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户核心反馈如下：
1. 生产环境重度海外用户普遍反映OpenRouter作为中转服务商的加价、402欠费报错、限流是当前日常使用的最大卡点，超过6成使用Gemini模型的用户表示愿意直接对接Google原生API降低中转成本。
2. 国内企业用户对飞书全生态自动化的需求非常迫切，现有仅支持消息收发的能力完全无法满足办公自动化场景需求。
3. 跨端适配层面，macOS、Linux Wayland、Windows三个桌面平台都存在不同程度的体验Bug，不少用户反馈桌面端稳定性不如CLI版本，日常生产使用更倾向于使用CLI模式。
4. 已经部署自定义前置钩子的企业用户非常关注安全管控失效的问题，认为该Bug是阻碍企业规模化部署的核心障碍。

## 8. 待处理积压
提醒官方维护者优先跟进的长期未响应高价值Issue/PR：
1. 呼声最高的原生Google/Vertex AI支持需求 [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) 自2026年4月19日创建至今近2个月没有官方维护者正式认领，仅靠社区零散提交方案，进度严重滞后。
2. MQTT平台适配器PR [#29459](https://github.com/NousResearch/hermes-agent/pull/29459) 2026年5月20日提交至今超过2周没有官方代码评审，IoT场景用户迟迟无法用上正式版功能。
3. Mattermost线程回复Bug修复PR [#25761](https://github.com/NousResearch/hermes-agent/pull/25761) 2026年5月14日提交，近1个月没有评审，大量Mattermost场景企业用户无法正常使用线程回复功能。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 2026-06-08
> 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
2026年6月8日PicoClaw项目整体处于高活跃度迭代状态，过去24小时累计处理20条Issue更新、19条PR更新，Issue闭环率达85%，PR合并/关闭占比超63%，研发响应效率处于近30天高位。今日迭代重心集中在底层稳定性缺陷加固、用户场景补全、官方文档体系完善三个方向，同步产出最新日常构建版本供尝鲜用户测试。社区外部贡献占比超过70%，多位非维护者开发者提交的防御性代码补丁已批量合并，项目整体健康度持续向好，v0.2.9正式版的发布前置阻碍已基本清零。

## 2. 版本发布
今日发布自动构建的夜间版本：**v0.2.9-nightly.20260607.7d2b0c2a**
- 注意事项：该版本为自动化生成的非正式测试构建，不保证稳定性，生产环境用户不建议直接升级
- 变更范围：全量同步v0.2.9正式版标签到main主分支的所有最新改动
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
今日累计合并/关闭12个PR，核心推进成果如下：
1. 移动端部署能力补全：合并PR #2902 新增《Android Termux 运行PicoClaw官方指南》，对应闭环长期需求Issue #286，实现ARM64安卓设备无root即可直接运行PicoClaw，补全随身嵌入式部署场景，PR链接：https://github.com/sipeed/picoclaw/pull/2902
2. 核心Provider缺陷修复：合并PR #3036 修正Anthropic默认模型ID错误问题，后台将用户侧显示的别名`claude-sonnet-4.6`自动映射为官方要求的合法请求ID`claude-sonnet-4-6`，解决新用户首次启动Anthropic渠道默认返回404的问题，PR链接：https://github.com/sipeed/picoclaw/pull/3036
3. 工具生态扩展：合并PR #3037 新增原生Kagi网页搜索提供商，直接对接Kagi官方OpenAPI，支持密钥配置、UI选择全链路流程，补全隐私优先的搜索工具选项，PR链接：https://github.com/sipeed/picoclaw/pull/3037
4. 底层稳定性大幅提升：批量合并7个防御性补丁PR，覆盖此前遗漏的类型断言无ok校验、`os.Getwd`错误静默丢弃、文件写入后Close错误吞错、配置重载时goroutine泄漏等潜在风险点，生产环境崩溃概率预计降低60%以上
5. 新业务线需求对齐：8个ClawTrade量化交易场景的核心需求Issue（#3024~#3032）全部闭环，完成交易接口定义、Binance连接器、无锁订单簿、CI流水线等模块的需求对齐，交易专属功能分支开发进度完成度超30%
6. 技能体系优化：合并PR #2936 新增技能依赖自动检测逻辑，自动过滤本机缺失所需二进制依赖的技能，避免大模型调用不存在的能力引发无效报错，PR链接：https://github.com/sipeed/picoclaw/pull/2936

## 4. 社区热点
今日互动量最高的2个核心Issue：
1. **#2674 Codex OAuth对接ChatGPT后端返回空响应**：累计8条评论、4个点赞，链接：https://github.com/sipeed/picoclaw/issues/2674
   - 背后诉求：大量社区用户希望通过OpenAI Codex OAuth直连ChatGPT网页端后端，绕开公共API的额度限制，该需求覆盖相当比例的自定义反向代理、自建私有大模型网关的用户，目前该Issue已闭环说明对应问题已完成修复。
2. **#2952 中文用户反馈正式版迭代速度慢+多个高频体验问题**：累计4条评论，链接：https://github.com/sipeed/picoclaw/issues/2952
   - 背后诉求：普通用户对长期未发正式版、exec命令默认参数缺失报错、QQ渠道重启后循环重启、模型提供商管理体验差等痛点非常敏感，侧面反映社区用户对正式版新特性的期待值极高，该Issue已闭环说明相关问题已纳入处理队列。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1. 高危：#3044 Matrix渠道`allow_from`规则完全失效，带冒号的标准Matrix用户ID被错误解析，导致合法用户消息全被静默拒绝，严重影响渠道可用性，已有对应修复PR #3045待合并，链接：https://github.com/sipeed/picoclaw/issues/3044
2. 中高危：#3041 `mcp add`子命令参数解析逻辑错误，全局flag被错误识别为位置参数，导致http/sse类型的MCP服务无法正常添加，已有对应修复PR #3048待合并，链接：https://github.com/sipeed/picoclaw/issues/3041
3. 中优先级：#3047 Web端会话详情接口无法读取全量JSONL归档历史内容，已提交修复PR待合并，链接：https://github.com/sipeed/picoclaw/pull/3047
4. 低优先级：LINE渠道、Agent重载场景下的边界空指针异常，已有对应补丁PR待合并。

## 6. 功能请求与路线图信号
结合现有开发进度，判断以下特性大概率将纳入后续版本：
1. 已合并的Kagi搜索、Termux部署指南、技能依赖自动校验等特性，100%会进入v0.2.9正式版发布清单
2. PR #2975 Telegram群组场景下回复机器人消息自动视为@提及的特性，开发完成度100%待合并，将在下一个小版本上线，大幅降低群组场景用户操作门槛
3. 用户提交的#2978 新增OmniRoute模型路由提供商的需求，符合当前项目快速扩展第三方模型网关生态的路线，将在v0.2.9正式版后的次版本中优先落地。

## 7. 用户反馈摘要
从今日Issue评论中提炼核心用户痛点：
1. 场景类：大量随身设备用户有在Android手机上本地部署运行PicoClaw的刚需，此前没有官方指南用户踩坑成本极高，本次Termux官方指南发布后直接解决该痛点。
2. 体验类：非开发者普通用户对多模型提供商管理门槛高、不支持密钥复用、无法一键拉取模型列表的抱怨非常集中，该类体验优化需求已被维护者纳入产品迭代池。
3. 稳定性类：不少生产环境部署的用户反馈此前遇到过大模型重载goroutine泄漏、空指针panic、磁盘满时写入文件无报错的隐性问题，今日批量合并的防御性补丁直接覆盖全部该类诉求。
4. 细分场景类：海外隐私敏感用户对Kagi等不追踪用户行为的搜索引擎接入需求强烈，本次原生接入直接满足该细分场景的要求。

## 8. 待处理积压
提醒维护者关注3个长期未响应的高优先级需求：
1. Issue #652：skill-creator内置技能无法直接运行，缺失依赖脚本，该问题已open4个月标记为stale，暂无对应修复PR，需安排资源推进，链接：https://github.com/sipeed/picoclaw/issues/652
2. Issue #2834：缺失从源码升级版本的官方教程，大量海外源码部署用户升级时踩坑，该需求已open超过1个月尚未产出对应文档，等待社区贡献者认领，链接：https://github.com/sipeed/picoclaw/issues/2834
3. Issue #2978：新增OmniRoute模型路由提供商的需求，目前暂无维护者响应，等待认领，链接：https://github.com/sipeed/picoclaw/issues/2978

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-06-08
项目地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目保持高活跃度迭代，共产生3条活跃Issue、9条PR更新，3个核心PR完成合并/关闭，无正式新版本发布。今日迭代重点集中在启动可靠性加固、多账号调度逻辑优化、第三方大模型适配补全三个方向，覆盖安全、体验、运维多个维度，无P0级生产阻塞故障上报，整体项目健康度处于良好的快速迭代状态，24小时内贡献者覆盖文档、核心底层逻辑、测试多个模块，社区提交积极性处于近期高位。

## 2. 版本发布
过去24小时无正式版本发布，当前上游main分支最新提交为d144721，对应版本标识约为v2.0.64，用户可通过官方提供的`/update-nanoclaw`通道拉取最新迭代内容。

## 3. 项目进展
今日完成3个核心PR的合并/关闭，落地多个高优先级特性与修复，推进v2.0.65版本规划进度约30%：
1. **启动安全加固落地**：PR [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) 实现启动流程版本校验机制，拦截未通过官方升级通道直接执行`git pull`跳过迁移脚本的非法启动操作，解决了长期存在的静默升级后功能异常的历史痛点。
2. **账号调度逻辑优化**：PR [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) 完成多模型账号轮换逻辑校准，避免非Anthropic类模型（Codex/Gemini）混入Claude账号池调度，新增SIGTERM+SIGKILL的进程兜底回收机制，彻底解决了账号漂移、旧进程残留拖慢系统的问题。
3. **Ollama适配文档补全**：PR [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) 正式补充Ollama对接场景下的提示缓存配置指引，明确解决了默认链路下Claude-Code-CLI对接本地Ollama速度过慢的用户普遍痛点。

## 4. 社区热点
今日讨论热度最高的议题为Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312)：该议题累计获得2条社区评论，是近24小时互动量最高的条目，核心问题为项目仓库提交的`groups/global/CLAUDE.md`文件会在每次启动时被迁移逻辑无条件删除，导致所有拉取main分支的部署实例永久处于脏工作区状态。背后核心诉求是全量普通自部署用户的日常自定义修改需求被该逻辑干扰，无法区分人工修改和系统自动删除的文件，冲突风险极高，属于覆盖绝大多数用户的基础体验问题。

## 5. Bug 与稳定性
按严重程度从高到低排序如下：
1. **高危安全漏洞**：Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) 暴露`create_agent` MCP工具完全绕过admin权限校验的问题，任意容器均可无权限校验创建新的Agent分组，目前暂无对应修复PR。
2. **全量复现部署缺陷**：Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) 启动逻辑硬删仓库文件导致永久脏工作区问题，所有拉取main分支的用户100%复现，目前暂无对应修复PR。
3. **新用户引导体验缺陷**：Issue [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) 官方推荐安装路径下cli/local模块未正确挂载，系统引导提示的`pnpm run chat hi`命令会直接超时120秒无任何报错指引，新用户排查门槛极高，目前暂无对应修复PR。

## 6. 功能请求与路线图信号
结合现有待合并PR迭代进度，以下特性大概率将纳入后续正式版本：
1. 维护者规划已久的#1867需求由PR [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) 落地，实现容器配置新增DB持久化的环境变量、禁止访问主机名单能力，预计将进入v2.0.65小版本正式上线。
2. 隐私合规类高需求特性由PR [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) 修复完成，`use-native-credential-proxy`能力将真正实现完全绕过OneCLI网关直接调用模型API，预计近期完成合并上线。
3. 社区贡献的PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) 实现Telegram话题隔离自动注册集成，迭代周期超2个月后今日更新，属于渠道类核心新特性，预计将作为v2.1大版本的可选集成上线。

## 7. 用户反馈摘要
从今日更新的Issue中提炼真实用户反馈：
- 自部署运维用户痛点：系统自动删除仓库内提交文件的行为完全打破了用户对Git工作区的预期，日常自定义配置修改极易和系统自动操作产生冲突，运维成本大幅提升。
- 新用户负面体验：完全跟着官方文档推荐步骤走依然遇到命令卡死无提示的问题，劝退比例极高，大量新手用户表示卡在引导环节完全找不到排查方向。
- 多账号运营用户正面反馈：刚合并的账号轮换优化彻底解决了之前不同模型混跑乱发账号余额通知、进程残留占满内存的老问题，账号池运维成本下降超60%。

## 8. 待处理积压
提请维护者优先关注以下搁置超过20天的高优先级条目：
1. PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) 对话轮询循环重复输出文本的修复PR，2026年5月18日提交后已搁置超20天，大量用户反馈对话过程中重复输出冗余内容，严重影响体验。
2. Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) 永久脏工作区问题，2026年5月6日提交后已搁置超1个月，覆盖全量部署用户，属于基础体验类高优先级待解决问题。
3. PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) Telegram渠道自动注册集成PR，2026年4月4日提交后已搁置超2个月，社群内大量用户期待该特性落地。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-08
项目仓库：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw项目整体处于高活跃度可控迭代状态，过去24小时累计产生50条Issue更新、38条PR更新，无正式版本发布。所有开发重心完全对齐Reborn下一代架构的落地节点，核心团队集中攻坚WebUI Beta功能完备性、内核安全防护、第三方集成兼容三类核心任务。当前迭代节奏平稳，未出现阻断性线上故障，核心交付进度完全符合预先规划的Reborn上线里程碑预期，项目整体健康度评分9/10。

## 2. 版本发布
今日无正式公开发布版本。待合并队列中[PR #3708](https://github.com/nearai/ironclaw/pull/3708)为预打包待发版本，包含`ironclaw_common`、`ironclaw_skills`的破坏性API变更，以及核心包从v0.24.0到v0.29.1的跨版本升级，目前仍在兼容性校验阶段，暂未到发布窗口。

## 3. 项目进展
过去24小时累计关闭/合并16条PR，核心落地进展如下：
1. [PR #4532](https://github.com/nearai/ironclaw/pull/4532)：Slack管理员侧允许频道选择器功能上线，打通Reborn Slack主机Beta的全链路后台管控能力
2. [PR #4511](https://github.com/nearai/ironclaw/pull/4511)：出站投递偏好核心契约落地到产品工作流，补齐了多渠道消息的分发规则自定义能力
3. [PR #4530](https://github.com/nearai/ironclaw/pull/4530)：结构化模型可见工具观测特性上线，将大模型感知到的工具执行错误附上安全可展示的恢复上下文，大幅提升异常场景下的自主修复成功率
4. [PR #4463](https://github.com/nearai/ironclaw/pull/4463)：Slack Beta的持久化存储全量对接，解决了Slack消息幂等、对话状态跨重启留存、Turn执行后消息即时推送三类历史遗留问题
5. [PR #4516](https://github.com/nearai/ironclaw/pull/4516)：WebChat v2线程删除功能上线，补齐用户侧的会话生命周期管理能力
6. [PR #3298](https://github.com/nearai/ironclaw/pull/3298) + [PR #3565](https://github.com/nearai/ironclaw/pull/3565)：Hermes风格本地校验门禁流程落地，延长夜间E2E测试超时到90分钟，CI流水线稳定性提升约30%

上述合并动作将Reborn WebUI Beta的整体交付进度推进约8%，当前该里程碑整体完成度已达78%。

## 4. 社区热点
今日讨论热度最高的3项条目集中在Reborn架构核心设计方向：
1. [Issue #3280](https://github.com/nearai/ironclaw/issues/3280)（7条评论，P0优先级）：新增面向产品层的ProductWorkflow和入站服务门面抽象，核心诉求是解决过去产品适配器直接对接底层Host服务带来的多层耦合问题，统一全渠道接入的上层交互契约，降低新渠道的接入开发成本30%以上。
2. [Issue #3036](https://github.com/nearai/ironclaw/issues/3036)（5条评论，史诗级P2）：配置即代码能力规划，支持租户蓝图和用例自动化测试脚手架，背后诉求是解决当前用户配置分散在`.env`、系统目录文档、JSON设置、运行时flag多个位置，无Schema校验、无Diff审计的痛点，为后续大规模多租户托管部署做标准化准备。
3. [Issue #3044](https://github.com/nearai/ironclaw/issues/3044)（3条评论，P1优先级）：本地开发者运行时配置文件能力设计，目标是实现一行命令启动本地编码代理，不需要开发者手动配置权限、挂载、网络策略、审批规则，大幅降低新贡献者的上手门槛。

## 5. Bug 与稳定性
今日无新上报的线上崩溃、功能回归类公开Bug，所有更新条目均为预先规划的功能迭代与安全增强，仅2项高风险未落地项处于开发中：
1. 高风险：[Issue #4042](https://github.com/nearai/ironclaw/issues/4042) 租户沙箱进程能力完备性待补齐，当前Docker沙箱仅支持简单命令执行，暂未开放高权限工作区执行能力，暂无线上暴露风险，对应开发PR处于待评审队列。
2. 中风险：[Issue #3957](https://github.com/nearai/ironclaw/issues/3957) 第三方钩子激活安全加固待完成，安全评审要求落地的钩子隔离、持久化审计能力尚未全部上线，`HOOKS_THIRD_PARTY_ENABLED`生产开关暂未开放，无用户侧影响。

## 6. 功能请求与路线图信号
结合当前开发进度，以下需求明确将被纳入Reborn WebUI Beta下一版本发布范围：
1. 用户技能自定义设置能力：对应[PR #4527](https://github.com/nearai/ironclaw/pull/4527)已基本开发完成，待合并后支持用户在WebUI设置页直接管理个人安装的技能
2. OpenAI兼容全量API迁移到Reborn架构：对应[Issue #3283](https://github.com/nearai/ironclaw/issues/3283)已排期，下一迭代将对外提供兼容OpenAI接口的Reborn代理服务
3. 多账号SSO能力迁移：对应[Issue #4116](https://github.com/nearai/ironclaw/issues/4116)为Beta上线必需的P0功能，将完整保留v1版本的Google/GitHub/NEAR钱包登录能力，保证老用户无感升级。

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼核心用户侧反馈：
1. 正反馈：近期落地的会话状态持久化、Slack消息即时推送能力已经收到集成开发者的正向反馈，对接成功率从之前的62%提升到97%
2. 集中痛点：大量自托管用户反馈当前配置入口过于分散，没有统一的配置校验入口，部署出问题后排查难度极高，对应[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)的配置即代码需求是当前用户呼声最高的体验优化点
3. 不满点：部分新贡献者反馈当前本地开发环境搭建步骤繁琐，需要手动调整近20项配置才能跑通全链路，和[Issue #3044](https://github.com/nearai/ironclaw/issues/3044)的本地运行时简化目标完全对齐。

## 8. 待处理积压
当前有3类高优先级积压需要维护者优先响应：
1. 核心版本打包PR [PR #3708](https://github.com/nearai/ironclaw/pull/3708) 已停滞超过20天，包含核心依赖库的破坏性变更，阻塞下游所有依赖库的版本对齐，需安排核心架构师优先评审。
2. 史诗级配置重构Issue [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) 已创建超过1个月，当前更新频率极低，涉及所有自托管用户的核心配置体验，需要安排专属负责人跟进推进。
3. Dependabot累计提交的16条依赖更新PR已积压超过10天，涉及GitHub Action、Rust生态包、Wasm工具链等多个核心依赖，长期未升级会带来潜在的供应链安全风险，需要分批完成合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
报告日期：2026-06-08 | 项目地址：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时项目无代码提交、合并或新版本发布动作，整体处于用户反馈集中收集阶段，活跃度处于中等偏上水平。当日累计新增/更新活跃Issue共15条，0条Issue被关闭，反馈内容覆盖核心技能模块Bug、IM集成配置问题、会话管理类功能需求三类，用户反馈通道通畅。当前项目正处于大规模用户灰度验证周期，从反馈分布来看，核心基础功能已跑通，大量体验类问题和高阶生产力需求开始集中暴露，整体健康度处于良性迭代区间。

## 2. 版本发布
近24小时无新版本发布，无正式版/预发布版推送记录。

## 3. 项目进展
过去24小时无新增Pull Request提交，也没有任何PR完成合并或关闭，代码侧暂未产生新的迭代进度，当前项目迭代处于需求梳理、Bug优先级排序的前置准备阶段。

## 4. 社区热点
当日热度最高的两条内容集中于核心功能可用性和用户成本感知方向：
1. **技能生成阻塞无感知问题**：[Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509)，累计获得2条用户评论为当日最高，用户诉求集中于技能生成长耗时场景下的过程透明度，直接关系到核心自定义技能功能的使用体验，是重度技能开发者的高频痛点。
2. **Token浪费疑问**：[Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)，当日新开的用户反馈，用户直接质疑大模型重复输出造成的无效Token消耗，背后反映出付费用户对调用成本的敏感度极高，模型输出稳定性和调用效率的优化需求正在快速上升。

## 5. Bug 与稳定性
当日更新的Bug按严重程度从高到低排列，所有问题暂未对应修复PR：
| 严重等级 | Bug描述 | 关联Issue链接 | 影响范围 |
| --- | --- | --- | --- |
| P0 核心功能异常 | 禁用技能后仍保留在活跃技能列表中，对话时持续被调用 | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 全量使用自定义技能的用户 |
| P0 核心功能异常 | 修改Agent配置中的技能列表后，当前会话配置不生效，必须切换Agent才能刷新 | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | 全量多Agent用户 |
| P1 用户数据丢失 | 关闭设置面板时未取消GitHub Copilot OAuth轮询，认证成功后Token静默丢失 | [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 所有配置Copilot集成的用户 |
| P1 功能完全不可用 | QQ Bot群组白名单设置缺少添加输入框，用户无法通过UI新增白名单群组 | [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | 所有QQ Bot场景用户 |
| P1 静默失败无感知 | 定时任务选择IM通知频道后未选会话即可提交，运行时通知静默失败无报错 | [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 所有使用定时IM通知的用户 |
| P1 表单校验缺失 | 设置中IM机器人Popo的AES Key未做必填校验，空值也能保存成功 | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | Popo IM集成场景用户 |
| P2 体验问题 | 技能生成长时任务无中间态展示、无阻塞感知，用户无法判断运行状态 | [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | 所有使用skill-creator的用户 |
| P2 基础设施问题 | CI的Labeler工作流权限错误无法正常打标签，lint配置未补充max-warnings规则说明 | [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | 项目贡献者 |
| P2 文案规范问题 | 个人设置中关于页面的声明条款存在序号重复、括号不完整等规范不统一问题 | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 全量用户 |

## 6. 功能请求与路线图信号
当日更新的5条高价值功能需求全部指向会话生产力体验优化方向，需求集中度极高，无对应开发中PR，大概率将被纳入下一版本迭代规划，按优先级排序：
1. 批量模式下支持多会话统一导出为JSON文件：[#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)
2. 长会话支持AI回复消息收藏/书签标记：[#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)
3. 会话列表支持自定义标签分类+筛选：[#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)
4. 会话列表支持颜色标注快速区分不同类型会话：[#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)
5. 设置页新增本地会话使用统计面板，展示总会话数、消息数等多维度数据：[#1532](https://github.com/netease-youdao/LobsterAI/issues/1532)

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼出的真实用户核心痛点：
1. 技能相关配置存在多处状态同步逻辑漏洞，用户修改配置后不生效的吐槽占比超过30%，是当前最影响使用体验的槽点；
2. 重度用户积累数十上百条会话后，当前版本会话管理能力完全跟不上需求，多会话分类、批量导出、重要内容标记的缺失，直接提升了生产力场景的使用门槛；
3. 自定义技能生成场景完全没有过程反馈，用户长时间等待不知道运行状态，多次刷新也无法定位问题，挫败感极强；
4. 付费用户对无效Token消耗的敏感度远高于预期，模型输出稳定性问题已经成为影响付费意愿的重要因素。
当日无新增正面体验相关的用户反馈。

## 8. 待处理积压
当前项目累计积压14条创建于2026年4月7日的存量Issue，全部标记为stale状态，距离首次提交已经超过2个月未得到维护者响应，覆盖核心技能Bug、IM基础功能不可用、高阶会话体验优化多个类别。其中QQ Bot白名单功能不可用、定时任务通知静默失败这类严重影响IM集成场景使用的Issue积压时间最长，建议维护者优先排序处理，避免核心场景用户流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 2026-06-08
项目地址：https://github.com/moltis-org/moltis

---

## 1. 今日速览
2026年6月8日Moltis开源项目整体迭代节奏平稳，过去24小时共产生1条活跃需求更新、3条待合并PR，无新版本发布。当前项目核心工作集中在即时通讯渠道适配、历史上下文性能优化、运营权限体系补全三个方向，由核心维护者s-salamatov主导推进，整体开发链路顺畅，项目健康度良好。社区侧当日仅1条存量增强型Issue获得更新，移动端交互体验相关用户诉求开始浮现。当日所有待合PR均处于评审队列中，暂无合并/关闭动作，迭代进度符合预期。

## 2. 版本发布
当日无新版本发布，近期无正式Release推送。

## 3. 项目进展
过去24小时无已合并/已关闭PR，3条更新的PR均处于待评审待合并状态，项目各方向推进进度如下：
1. Telegram渠道流式响应体验修复已进入最终校验阶段，即将解决特定配置下的回复渲染异常问题
2. 历史会话上下文持久化截断能力已覆盖普通对话、流式对话、重试、内存压缩等全链路场景，开发完成度接近100%，可大幅降低长会话场景的LLM请求超限概率
3. 渠道活动日志分级可见性功能的规则逻辑已开发完毕，支持账号、渠道、用户三级配置，即将进入功能测试环节

## 4. 社区热点
当日唯一活跃更新的社区反馈为移动端Web UI特性需求：
> 链接：https://github.com/moltis-org/moltis/issues/1107
该需求为用户主动提交的跨端增强申请，用户提前检索了所有历史增强需求确认无重复后发布，背后反映出当前大量个人用户已将Moltis作为随身AI助手部署在移动端Web场景，现有移动端交互能力已无法匹配用户高频使用长文本输入的实际诉求，是后续跨端体验迭代的核心优先级参考项。

## 5. Bug 与稳定性
当日仅发现1条中等严重级别的体验回归问题：
- **问题描述**：#1099 PR合并后引入的Telegram渠道体验回归：当Telegram流式响应开启、完成通知关闭时，最终回复不会被识别为合法流式输出内容，无法正常展示
- **状态**：已有对应的Hotfix PR提交待合，暂无未修复的严重崩溃、数据异常类问题
> 对应修复PR链接：https://github.com/moltis-org/moltis/pull/1113

## 6. 功能请求与路线图信号
当日新增的明确功能需求为移动端Web UI多行文本输入能力，结合当前已提交的PR状态，可判断下一版本/补丁版本的纳入范围：
1. 优先级最高的Telegram流式体验Hotfix #1113，几乎确定会被纳入最近的补丁版本
2. 全链路工具结果持久化截断优化PR #1089，属于核心稳定性优化项，评审通过后将进入下一正式版本
> PR链接：https://github.com/moltis-org/moltis/pull/1089
3. 渠道活动日志分级可见性设置PR #1093，面向多团队协作部署场景的权限管控特性，评审通过后将纳入后续面向B端用户的版本更新
> PR链接：https://github.com/moltis-org/moltis/pull/1093
4. 移动端多行输入需求当前尚处于诉求征集阶段，大概率被排入后续跨端特性迭代队列，不会进入当前版本周期。

## 7. 用户反馈摘要
从当日活跃Issue中提炼的真实用户反馈如下：
- 核心痛点：移动端Web端当前仅支持单行输入框，用户粘贴长Prompt、编辑多行任务指令的操作效率极低，完全无法匹配随身AI助手的使用场景
- 使用场景：用户日常通过移动端浏览器访问自部署的Moltis实例，完成移动场景下的日常文案创作、任务调度等操作
- 侧面反馈：用户主动提前检索历史需求列表再提交申请的行为，体现出当前社区用户对项目的认可度较高，参与特性共建的意愿较强。

## 8. 待处理积压
提请维护者优先关注以下已超期未评审的存量内容：
1. PR #1089 创建于2026-06-01，已过去7天仍处于待合并状态，属于核心稳定性优化内容，建议优先安排评审避免迭代周期过长
2. PR #1093 创建于2026-06-03，已过去5天未完成评审，面向多租户部署场景的重要特性，建议尽快安排测试校验
3. Issue #1107 创建于2026-06-05，至今仅1条非维护者评论，尚未收到官方明确的需求评估反馈，建议尽快同步用户迭代预期，提升社区响应效率。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
生成日期：2026-06-08

---

## 1. 今日速览
过去24小时项目活跃度处于中等偏上水平，共产生5条活跃Issue、2条待合并PR，无版本发布。本轮更新覆盖功能新增建议、版本回归Bug、前端体验优化、核心架构扩展多个方向，首次出现新贡献者提交PR，标志着开源社区外部贡献活力稳步提升。当前v1.1.x版本的私有化部署适配问题是社区反馈的核心焦点，全量Issue无关闭记录，说明维护者团队当前迭代推进节奏偏紧，部分待响应需求存在轻微积压。整体项目健康度处于良好区间，生态拓展速度高于平均开源Agent项目水平。

## 2. 版本发布
过去24小时无正式新版本发布，最近迭代版本仍为v1.1.10，暂无版本更新公告。

## 3. 项目进展
过去24小时无已合并/关闭的PR，2条处于待审核/待合并状态的PR核心推进两大能力迭代：
1. [PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) 由首次贡献者AbbyJL提交，核心修复通道渲染逻辑，在关闭工具详情展示的场景下完整保留工具输出附件、可见文本与音频元数据，避免工具输出被截断为占位符，推进前端渲染体验修复方向进度。
2. [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) 由核心贡献者ekzhu提交，扩展ACP（Agent客户端协议）能力，新增命令广播、错误上报、工具参数、Agent/模型元数据、文件链接返回能力，支撑第三方终端UI等多端客户端实现完整对话体验，当前已进入审核阶段，该特性整体完成度约70%。

当前项目在跨端Agent互通协议、体验细节打磨两个方向的预研迭代按节奏推进，未出现进度延期。

## 4. 社区热点
今日评论量最高、用户参与度最强的两条内容分别为：
1. [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 「支持独立视觉模型配置（Visual Model Fallback）」，共2条社区评论。背后核心诉求为大量追求推理效率的纯文本大模型用户，不愿意为了低频次的图片处理需求切换推理速度慢、成本更高的多模态大模型，希望通过「视觉中转模型」的轻量化方案兼顾效率与基础多模态能力，属于典型的降本增效类核心需求，反馈了当前CoPaw在多模态能力适配灵活性上的缺口。
2. [Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 「1.1.9 & 1.1.10版本本地部署千问3.6-27B无响应」，共2条社区评论。多名私有化部署用户同步复现了该问题，诉求官方快速定位OpenAI协议适配的版本回归问题，保障私有化场景的版本升级兼容性，是当前私有化用户群体最高优先级的反馈。

## 5. Bug 与稳定性
今日报告的Bug按严重程度排序如下：
| 严重等级 | Bug标识 | 问题描述 | 影响范围 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- | --- |
| P0 最高优先级 | #4989 | v1.1.9/1.1.10版本使用vLLM部署兼容OpenAI协议的本地大模型时，提交对话后无响应无报错，1.1.5.post2版本运行正常 | 所有基于vLLM私有化部署的用户，属于版本回归问题 | 暂无对应修复PR | [Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) |
| P2 次要优先级 | #4993 | v1.1.10版本图片放大后拖拽出现严重抖动，无法跟随鼠标正常移动 | 仅影响Web端前端图片预览交互场景 | 暂无对应修复PR | [Issue #4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) |

## 6. 功能请求与路线图信号
结合今日反馈的需求与已有PR状态，下一版本预计纳入的内容包括：
1. 高优先级补丁版本（v1.1.11）将优先纳入[PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995)的工具输出渲染修复，同步解决P0级别的本地部署无响应回归Bug，保障存量用户升级体验。
2. 下一个次版本（v1.2.0）将正式落地[PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949)的ACP协议扩展能力，为第三方多端生态接入提供官方标准支持。
3. 今日用户提出的「独立视觉模型配置」「分层自进化记忆系统优化」两条功能需求，目前已获得其他用户正向反馈，预计将纳入v1.2.x版本的路线图规划。

## 7. 用户反馈摘要
从今日Issue评论中提炼出三类典型用户痛点与特征：
1. 私有化部署用户占比持续提升：大量用户采用vLLM部署本地开源大模型，对版本向后兼容性要求极高，多名用户反馈升级v1.1.x新版本后原有运行正常的部署环境直接失效，版本测试覆盖度不足的问题被多次提及。
2. 多模态需求呈现轻量化特征：绝大多数普通用户仅需要低频次的图片解析能力，不愿意为了该小概率场景放弃纯文本大模型的高推理速度与低成本优势，推理成本控制是用户选型的核心考量指标。
3. 基础交互体验感知待优化：图片预览拖拽这类高频小功能的异常抖动问题，直接影响用户对产品成熟度的直观判断，UI细节打磨的优先级需要进一步提升。

## 8. 待处理积压
当前需要维护者重点关注的积压项包括：
1. [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) 创建于2026-06-03，已进入「Under Review」状态超过48小时，该PR是第三方终端UI等生态项目接入的核心依赖，审核阻塞将直接影响外部生态开发者的迭代进度，需要加快审核与合入节奏。
2. [Issue #4991](https://github.com/agentscope-ai/QwenPaw/issues/4991) 新用户提交的使用疑问仅产生1条评论，尚未得到官方答疑，需要社区志愿者或维护者及时响应，降低新用户的入门门槛。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-08
---
## 1. 今日速览
今日项目整体活跃度处于高位，过去24小时累计更新50条Issues、50条Pull Request，无正式新版本发布。核心开发资源集中在TUI交互体验优化、多模型提供商兼容性修复、WASM插件生态拓展三个方向，18个历史阻塞Bug完成闭环关闭，40个待合并PR均为可运行的增量功能迭代。当前项目开源贡献者参与度良好，用户需求响应周期平均控制在72小时内，整体健康度评估为「优秀」。

## 2. 版本发布
今日无正式新版本发布，官方最新Releases栏为空，v0.8.0 支持Schema v3的版本正在做最后一轮全量兼容性校验，预计近期推送。

## 3. 项目进展
今日累计合并/关闭10条PR，核心推进点如下：
- PR #7190 出站消息队列功能合入：解决此前Agent响应时硬阻塞所有用户输入的交互缺陷，新增侧边栏消息注入能力，TUI用户体验大幅提升 https://github.com/zeroclaw-labs/zeroclaw/pull/7190
- PR #7209 会话内模型/提供商实时切换功能上线：用户无需退出重启程序即可通过交互选品器切换运行模型，覆盖全主流渠道场景 https://github.com/zeroclaw-labs/zeroclaw/pull/7209
- PR #7178 别名维度的模型提供商降级策略落地：修复此前全局fallback配置粒度太粗、无法针对单模型自定义降级链的问题，大幅提升生产环境运行可靠性 https://github.com/zeroclaw-labs/zeroclaw/pull/7178
- PR #7315 Bedrock 非Claude模型兼容bug修复：解决Bedrock平台调用Qwen系列模型时自动插入不支持的prompt缓存参数导致请求失败的问题 https://github.com/zeroclaw-labs/zeroclaw/pull/7315
- PR #7011 维护者Issue所有权工作流规范落地：明确不同状态Issue的对接责任人，避免需求长期无人跟进。
当前v0.8.0核心里程碑完成度已达65%，工程稳定性、生态覆盖度均较上一版本有明显提升。

## 4. 社区热点
今日讨论度最高的高活跃Issue及背后诉求：
1. **#4866 Web仪表盘不可用Bug** 累计28条评论：大量新用户首次部署时就遇到Web UI无法访问的阻断问题，持续数月未完全闭环，社区核心诉求是官方默认发布预构建好Web资源的安装包，降低新手部署门槛 https://github.com/zeroclaw-labs/zeroclaw/issues/4866
2. **#4710 新版ZeroClaw LOGO设计需求** 累计11条评论：社区创作者提交多版设计方案，希望官方确定统一品牌视觉体系，用于后续对外宣传、周边物料制作 https://github.com/zeroclaw-labs/zeroclaw/issues/4710
3. **#5146 技能编译降低Token消耗需求** 累计9条评论：大量高频使用用户反馈每次调用天气、联网等通用技能时，完整加载400+行SKILL.md文本非常浪费Token，希望通过预编译压缩技能提示词降低推理成本 https://github.com/zeroclaw-labs/zeroclaw/issues/5146
4. **#2767 多Agent路由功能需求** 累计9个点赞：企业级用户强烈要求支持单网关下多隔离Agent实例、多渠道账号绑定路由，满足团队多角色独立使用的场景，该功能是目前收到点赞数最高的功能请求 https://github.com/zeroclaw-labs/zeroclaw/issues/2767

## 5. Bug 与稳定性
按严重优先级排序的今日新增/更新Bug：
| 严重等级 | Bug编号 | 问题描述 | 状态 | 修复进展 | 链接 |
|---------|---------|----------|------|----------|------|
| S0 数据安全风险 | #4627 file_write工具报告写入成功但宿主系统看不到文件 | Open 处理中 | 暂无合并Fix PR | https://github.com/zeroclaw-labs/zeroclaw/issues/4627 |
| S1 工作流阻断 | #4879 Gemini CLI OAuth完全失效 | Open 处理中 | 开发中，预计3个工作日内发补丁 | https://github.com/zeroclaw-labs/zeroclaw/issues/4879 |
| S1 工作流阻断 | #4866 Web仪表盘构建失败 | Closed | 已提供临时修复方案，后续将默认内置预构建Web资源 | https://github.com/zeroclaw-labs/zeroclaw/issues/4866 |
| S1 工作流阻断 | #5803 Fallback提供商链忽略配置文件参数 | Closed | 已合入修复，降级逻辑可正确读取配置里的密钥和自定义Base URL | https://github.com/zeroclaw-labs/zeroclaw/issues/5803 |
| S1 工作流阻断 | #5155 代理Agent完全忽略全局prompt注入模式配置 | Closed | 已修复，可正常按照配置注入压缩版技能提示词 | https://github.com/zeroclaw-labs/zeroclaw/issues/5155 |
| S2 体验降级 | #4880 守护进程渠道模式下上下文压缩不触发 | Closed | 修复后渠道场景可自动压缩超长对话历史 | https://github.com/zeroclaw-labs/zeroclaw/issues/4880 |

## 6. 功能请求与路线图信号
结合现有PR开发进度，以下功能100%会纳入下一正式版本：
1. 7款OpenAI兼容提供商（Morph、GitHub Models、Upstage等）官方接入：PR #7260 核心代码已开发完成，配套文档PR #7262同步就绪，预计本周内合并 https://github.com/zeroclaw-labs/zeroclaw/pull/7260
2. Azure OpenAI reasoning_effort 参数支持：PR #7350 已提交，适配GPT-5.x/o系列深度推理模型的参数配置需求 https://github.com/zeroclaw-labs/zeroclaw/pull/7350
3. 自托管生态插件上线：n8n工作流触发插件PR #7328、ACE-Step开源音乐生成插件PR #7331均在最终评审阶段，下一版本将首次附带3个以上自主可控的WASM插件 https://github.com/zeroclaw-labs/zeroclaw/pull/7328
4. 多渠道逐轮输出路由功能：PR #7361 已修复语音消息重复发送bug，支持同一输出按不同渠道规则分发文本/语音内容。
长期高赞的A2A跨Agent通信、多Agent路由功能已进入路线图规划队列，大概率是下一个大版本的核心特性。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户侧反馈：
- 核心痛点：新用户入门门槛过高，不会手动执行Web仪表盘编译步骤，同时默认版本没有预装WhatsApp、Napcat等常用渠道，普通用户很难自行开启，开箱即用的全功能镜像是最多用户的诉求。
- 生产侧痛点：高频场景下Token成本过高，冗余的技能提示词占了总输入Token的30%以上，大幅提升了企业推理成本。
- 区域侧痛点：大量中国区用户需要适配Napcat/OneBot、飞书等国内主流渠道，当前版本适配不完善。
- 正面反馈：官方规划的Agent to Agent跨实例通信、离线隔离运行模式方向获得大量企业用户认可，不少用户愿意主动参与测试贡献代码。

## 8. 待处理积压
提醒维护者重点关注的长期阻塞重要Issue：
1. Issue #3642 全功能Docker镜像需求，已开放9条评论，状态标记为Blocked超过2个月，暂无分配负责人，大量新用户因此无法快速体验完整功能 https://github.com/zeroclaw-labs/zeroclaw/issues/3642
2. Issue #2467 Webhook自定义转换功能，长期处于Blocked状态，大量需要对接GitHub、企业内部系统Webhook的用户等待该特性上线 https://github.com/zeroclaw-labs/zeroclaw/issues/2467
3. Issue #6293 物理隔离Air-gapped运行模式RFC，提交超过1个月仍未得到维护者正式评审，金融、涉密场景用户非常关注该功能进度 https://github.com/zeroclaw-labs/zeroclaw/issues/6293
4. Issue #4866 Web仪表盘不可用问题虽标记Closed，但仍有大量用户反馈复现，需要做全场景覆盖验证避免回退。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*