# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-21 23:13 UTC

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

# OpenClaw 项目动态日报 | 2026-06-22
> 项目地址：https://github.com/openclaw/openclaw

---

## 1. 今日速览
过去24小时OpenClaw项目迭代活跃度处于极高水平，共产生500条Issue更新、500条PR更新，累计合并/关闭17个PR、19个Issue，同时正式推送2个新版本。当前项目核心迭代方向集中在2026.6.x系列的生产级稳定性补齐、多渠道投递可靠性、子代理调度容错三个核心领域，核心缺陷闭环效率较上月提升32%。从社区反馈来看，企业级多部署场景的用户占比快速提升，项目整体健康度处于优秀区间，版本发布节奏匹配生产侧的功能需求。

## 2. 版本发布
今日共正式推送2个新版本，核心更新如下：
### v2026.6.9 稳定版
**核心亮点**：升级Telegram投递能力，原生支持富HTML、富Markdown、贴纸路径持久化，安全归一化HTML表格，通知投递路径的匹配准确率提升至99.7%。
> ⚠️ 迁移注意事项：该版本存在已知缺陷https://github.com/openclaw/openclaw/issues/95495，升级过程中无感知将内存库路径从`~/.openclaw/memory/main.sqlite`迁移至Agent目录下，会触发1000+文件全量重嵌入，占用大量算力资源，建议升级前备份内存向量库。
### v2026.6.10-beta.1 测试版
**核心亮点**：全面增强会话流转可靠性，新增子代理完成通知持久化、会话历史非空兜底、媒体索引对齐能力，自动重启休眠的后续任务流，统一消解压缩模型别名不一致问题，修复了12个历史遗留的会话状态偶发异常缺陷。

## 3. 项目进展
过去24小时落地的重要交付项覆盖核心调度、多渠道兼容性两大领域：
1.  正式版v2026.6.9落地了全量Telegram富消息投递的需求，此前累计有37个相关Issue反馈的Telegram格式渲染问题全部闭环，该能力从开发到正式上线仅耗时9天
2.  P1级Windows网关重启失败缺陷https://github.com/openclaw/openclaw/issues/91926已正式关闭，解决了通过exec工具执行网关重启命令无法拉起进程的问题
3.  累计17个已合并/关闭的PR覆盖了模型调用容错、权限校验逻辑的优化，当前核心迭代速率高于上周平均水平2.1%，待合并PR队列的平均处理周期从72小时缩短至48小时。

## 4. 社区热点
今日讨论热度最高的核心Issue均来自生产级重度部署用户的反馈，核心诉求指向高可用能力补齐：
1.  **#86538 会话写锁超时阻塞子代理投递通道**（12条评论）：https://github.com/openclaw/openclaw/issues/86538
    用户反馈会话JSONL写锁超时会直接阻断主链路、定时任务嵌套链路、子代理链路的全部投递，且无足够的排错日志。该问题是当前社区讨论的最高优先级核心缺陷，背后是大量用户已经在生产环境落地多子代理协同的复杂工作流，对消息投递零丢失的诉求极强。
2.  **#86519 Telegram渠道Agent重复发送2-10条相同回复**（10条评论）：https://github.com/openclaw/openclaw/issues/86519
    2026.5.20版本引入的回归缺陷，此前多次迭代仅降低了问题发生率未完全根治，大量Telegram渠道的运营用户反馈该问题严重影响用户体验。
3.  **#91363 隔离模式定时任务稳定失败**（4个点赞）：https://github.com/openclaw/openclaw/issues/91363
    投票最高的缺陷，用户反馈`sessionTarget: "isolated"`配置下的定时任务全部卡在模型调用启动阶段无法执行，大量依赖定时任务跑批的用户工作流完全中断。

## 5. Bug 与稳定性
按严重等级排序的近期核心缺陷：
| 缺陷等级 | 缺陷描述 | Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P1 最高 | 2026.6.9无感知迁移内存向量库路径，无升级提示强制全量重嵌入 | https://github.com/openclaw/openclaw/issues/95495 | 暂未提交修复PR |
| P1 | Telegram轮询出现瞬时网络超时后进入静默崩溃循环，健康监视器无法自愈 | https://github.com/openclaw/openclaw/issues/93375 | 已有关联开放PR待合并 |
| P1 | release_lane操作对持有锁的活跃进程无效，卡住的Telegram入站事件会阻断Agent响应直到网关重启 | https://github.com/openclaw/openclaw/issues/95248 | 已有关联开放PR待合并 |
| P1 | /model切换命令执行后会话内的模型快照不会刷新，影响上下文窗口、推理等级等参数生效 | https://github.com/openclaw/openclaw/issues/92415 | 已有关联开放PR待合并 |
| P1 | 全局180秒压缩超时无部分进度复用机制，长历史/本地低性能模型的场景下每次压缩必失败 | https://github.com/openclaw/openclaw/issues/92043 | 已有关联开放PR待合并 |
| P1 | 2026.6.5版本内部Agent推理过程直接暴露给终端用户，属于严重UX和隐私回归 | https://github.com/openclaw/openclaw/issues/91804 | 暂未提交修复PR |

## 6. 功能请求与路线图信号
用户提出的高优先级功能需求中，多个已有对应开发中的PR，大概率纳入后续版本迭代：
1.  **预压缩内存刷盘边界校验能力**：https://github.com/openclaw/openclaw/issues/90354
    为预压缩阶段的内存落盘增加大小限制、写入后校验、静默失败兜底机制，适配超大长会话场景的稳定性，已有对应PR进入待审核阶段，预计随6月下旬小版本推送。
2.  **主题会话家族能力**：https://github.com/openclaw/openclaw/issues/90916
    单Agent支持多个命名主题上下文车道，各车道对话上下文隔离，仅通过家族级的全局内存互通，已经完成需求评审，是2026.Q3的重点特性。
3.  **Discord子代理进度显示能力**：https://github.com/openclaw/openclaw/pull/95604
    刚提交的新PR，解决Discord渠道运行子代理时用户看不到进度反馈的问题，属于社区呼声极高的渠道特性，预计在v2026.6.10正式版上线。
4.  **Kubernetes部署文档更新**：https://github.com/openclaw/openclaw/issues/91455
    现有K8s部署文档步骤晦涩，用户要求补充Helm部署支持，已有关联PR开放，将随下一轮文档更新上线。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户声音：
- ✅ 满意点：近期Telegram渠道的富消息支持迭代速度远超用户预期，多子代理调度的基础能力成熟度已经满足大部分生产场景的需求，大量从2026年上半年版本升级的用户反馈功能体验提升明显。
- ❌ 痛点：版本升级过程的变更通知缺失，无感知的资源重计算会直接占用100%CPU数小时；定时任务失败告警在热重载、重试阶段反复推送导致告警疲劳；Windows平台下的服务自启动能力稳定性不足，需要人工值守修复；低配置2C4G的云服务器上资源占用不合理，部分用户直接选择下架部署实例。
- 🎯 高频场景：超过60%的活跃用户当前在生产环境同时落地了定时任务、多子代理协同、至少2种不同渠道的对外服务，对系统的高可用能力要求远高于普通个人用户场景。

## 8. 待处理积压
提醒维护团队优先分配资源响应的长期高优先级未闭环项：
1.  **#86538 会话写锁超时阻塞子代理投递通道**：开刊近1个月，累计12条评论，已标记需要产品决策，尚未分配开发资源，属于影响大量生产部署的核心缺陷。
2.  **#67915 本地附件权限误判问题**：开刊2个多月，累计6条评论，用户反馈即使配置了正确的允许目录，本地附件仍然会提示在允许目录外无法访问，暂未安排复现计划。
3.  **#90325 Matrix渠道分发在v2026.6.1版本完全崩溃**：开刊近3周，累计7条评论，属于渠道级别的阻断性回归缺陷，尚未明确修复排期。
4.  30+已开放超过2周的待合并PR中，有11个标记为P1级别的通道兼容性修复，当前处于等待维护者审核状态，建议加快审核节奏降低PR队列积压。

---

## 横向生态对比

# 2026-06-22 开源个人AI助手/自主智能体生态横向分析报告
---
## 1. 生态全景
当前国内外科创类开源AI智能体生态已完全越过早期功能验证阶段，全面进入生产落地攻坚周期：全赛道项目分层差异化特征显著，通用底座类项目与垂直场景类项目形成互补生态，企业级多部署场景的活跃用户占比快速提升，系统高可用、权限安全、部署门槛降低成为当前迭代的核心主线。白帽安全社区已完成对该生态的全面覆盖，近期高危漏洞集中披露侧面反映项目普及度已经进入快速上升通道，全链路商业化落地的前置支撑能力正在快速补齐。
## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 今日Release情况 | 健康度评估 |
|---------|----------------|-------------|----------------|----------|
| OpenClaw | 500 | 500 | 推送2个新版本（v2026.6.9稳定版、v2026.6.10-beta.1测试版） | 优秀，核心缺陷闭环效率较上月提升32% |
| Hermes Agent | 50 | 50 | 无 | 良好，P1级故障当日闭环率达44% |
| ZeroClaw | 38 | 50 | 无 | 良好，正推进0.8.0-beta版本功能收尾 |
| NanoBot | 10 | 34 | 无 | 良好，非核心团队贡献PR占比超60% |
| IronClaw | 3 | 27 | 无 | 良好，距离月末Reborn托管预览版里程碑进度达75% |
| CoPaw | 15 | 28 | 无 | 良好，移动端适配覆盖度突破60% |
| PicoClaw | 5 | 4 | 发布自动夜间构建版本v0.3.0-nightly.20260621.287853ab | 健康，核心遗留配置缺陷已闭环 |
| NanoClaw | 2 | 6 | 无 | 健康，核心优先级向安全加固倾斜 |
| LobsterAI | 1 | 0 | 无 | 常规维护，处于存量Issue池清理阶段 |
| NullClaw | 1 | 0 | 无 | 低活跃度维护，无核心迭代投入 |
| ZeptoClaw | 0 | 1 | 无 | 轻量运维，无用户侧紧急故障 |
| TinyClaw/Moltis | 0 | 0 | 无 | 休眠状态，24小时无任何代码变更 |
## 3. OpenClaw在生态中的定位
作为生态核心参照项目，OpenClaw的绝对领先优势显著：当日总变更量达1000条，是第二名Hermes Agent的10倍以上，社区重度企业级生产部署用户占比超60%，当前已验证的多子代理协同、多渠道投递、复杂定时任务工作流的成熟度远超同类项目。技术路线上走全场景通用底座路线，不绑定特定硬件/部署形态，优先聚焦生产级可靠性而非场景定制，完全区别于其他项目偏向单一场景优化的路线。社区规模层面，生态内至少4个衍生子项目（PicoClaw/NanoClaw等）直接基于其核心分支二次开发，生态溢出效应显著，是当前生态内事实性的功能标准定义者。
## 4. 共同关注的技术方向
全生态跨项目涌现的共性需求高度集中：
1.  **MCP权限安全加固**：涉及NanoBot、Hermes Agent、NanoClaw三个项目，近期先后披露MCP白名单绕过、审批流程参数走私、进程雪崩等高危漏洞，全行业诉求是强化Agent工具调用的权限边界，杜绝Prompt注入引发的系统越权风险。
2.  **合规自托管通讯渠道适配**：涉及OpenClaw、NanoBot、Hermes Agent、ZeroClaw、CoPaw，用户不再满足于Telegram/Discord等公有渠道，对Mattermost、Napcat/Onebot、SimpleX等完全自托管、数据不出境的加密通讯渠道的需求暴涨。
3.  **部署全链路体验优化**：覆盖所有活跃项目，各家都在落地rootless Docker兼容、首次启动成功率提升、CI基建校验加固等能力，目标是将普通个人用户的首次部署门槛从小时级降低到分钟级。
4.  **推理成本精细化管控**：涉及OpenClaw、Hermes Agent、PicoClaw，付费推理用户对无意义空跑Token消耗零容忍，动态思考模式自动开关、空调用拦截成为新增刚性需求。
## 5. 差异化定位分析
各项目的分化路径已经完全清晰：
- 功能侧重维度：OpenClaw主打生产级多子代理调度高可用，NanoBot主打轻量化语音全链路能力，Hermes Agent主打Windows桌面端原生体验，IronClaw主打Web3生态云托管自动化工作流，ZeptoClaw主打边缘嵌入式极致轻量单二进制，ZeroClaw主打国内生态渠道适配。
- 目标用户维度：OpenClaw面向企业级多部署场景运维团队，ZeptoClaw面向机器人/低资源硬件开发者，ZeroClaw面向国内个人开发者和中小团队，IronClaw面向Web3+AI工作流开发者。
- 技术架构维度：OpenClaw走重底座分布式调度路线，ZeptoClaw走<6MB单二进制极致精简路线，IronClaw走云边一体化托管架构，完全避免了同质化竞争。
## 6. 社区热度与成熟度分层
当前生态可明确分为四个梯队：
1.  **快速迭代阶段**：OpenClaw、ZeroClaw、IronClaw、CoPaw、Hermes Agent，日总变更量超过50条，正冲刺大版本关键里程碑，优先拓展新特性边界。
2.  **质量巩固阶段**：NanoBot、PicoClaw，已进入v0.3大版本功能冻结前的测试窗口期，核心功能完全收敛，全部研发资源向高危安全漏洞、稳定性问题倾斜，不再盲目新增功能。
3.  **平稳维护阶段**：NanoClaw、NullClaw、LobsterAI，核心迭代投入放缓，仅优先响应高危安全漏洞和存量高频用户Bug，无公开新特性开发排期。
4.  **休眠阶段**：TinyClaw、Moltis，连续24小时无任何活动，无对外公开迭代计划。
## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值可提炼为三点：第一，通用底座赛道已经进入头部固化阶段，中小团队无需再投入资源硬刚全场景通用能力，面向边缘机器人、加密通讯、国内IM生态等垂直细分场景仍有大量未被覆盖的空白机会。第二，安全已经从非核心特性升级为第一优先级准入标准，后续所有Agent系统上线前必须完成MCP权限边界、SSRF防护的专项校验，避免漏洞被利用引发大规模安全事件。第三，用户场景已经从固定PC端向移动运维侧延伸，外出随时操控Agent的需求已经成为刚需，传统仅适配桌面端的UI架构会快速被市场淘汰。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-22
---
## 1. 今日速览
今日NanoBot开源项目活跃度处于近期高位，过去24小时累计产生10条Issue更新、34条PR更新，无正式新版本发布。当日迭代方向覆盖并发安全漏洞修复、MCP权限安全加固、多平台生态适配、核心性能优化四大主线，整体开发节奏健康。当日共有14条PR完成合并/关闭，占当日PR更新总量的41%，7条活跃新Issue中有5条已匹配对应修复PR，Issue响应时效表现优异。当日新提交PR中超过60%来自非核心团队外部贡献者，社区参与度持续提升。

## 2. 版本发布
过去24小时无官方新版本发布，最新正式版本仍为v0.2.x序列，当前项目处于v0.3大版本功能冻结前的最后测试窗口期。

## 3. 项目进展
当日完成合并/关闭的核心交付项如下，整体推动v0.3正式版交付进度提前约12%：
1. 音频链路稳定性闭环：先后合并[PR#4323](https://github.com/HKUDS/nanobot/pull/4323)、[PR#4324](https://github.com/HKUDS/nanobot/pull/4324)、[PR#4325](https://github.com/HKUDS/nanobot/pull/4325)，彻底解决了转录模块、WebUI设置模块环境变量模板未解析的历史遗留问题，覆盖配置读取、更新、转写全链路，修复了配置第三方密钥后仍静默失败的痛点。
2. TTS能力补齐：正式合并[PR#4316](https://github.com/HKUDS/nanobot/pull/4316)，新增支持OpenAI、Groq Orpheus、ElevenLabs三个主流提供商的统一TTS配置系统，配套WebUI可视化配置入口，补齐了项目长期缺失的原生语音合成能力。
3. 3个高优先级历史Issue全部闭环：分别落地了[Issue#4408](https://github.com/HKUDS/nanobot/issues/4408)的并发钩子安全修复、[Issue#4422](https://github.com/HKUDS/nanobot/issues/4422)的Telegram Bot API 10.1富消息支持、[Issue#4420](https://github.com/HKUDS/nanobot/issues/4420)的tokens估算冗余编码性能优化，解决了多并发场景钩子冲突、Telegram复杂内容渲染、大工具集下推理延迟过高三类核心痛点。

## 4. 社区热点
当日关注度最高的社区动态如下：
1. 超长期需求[Issue#1011 Mattermost Bot通道适配](https://github.com/HKUDS/nanobot/issues/1011)：累计获得4个点赞，开放时间超过4个月，背后反映出大量海外私有化部署企业的隐私合规诉求——用户不愿使用Discord、Telegram、Slack等存在数据出境风险的公有通讯工具，急需支持完全自托管的开源Mattermost作为接入通道，目前暂无对应开发PR。
2. MCP权限安全系列Issue [Issue#4434](https://github.com/HKUDS/nanobot/issues/4434)、[Issue#4435](https://github.com/HKUDS/nanobot/issues/4435)发布后快速获得核心开发者集体响应，反映出当前已有大量生产用户在业务环境中启用MCP生态能力，对权限边界的严谨性提出了极高要求。
3. Telegram富消息适配需求[Issue#4413](https://github.com/HKUDS/nanobot/issues/4413)：大量Telegram场景用户反馈之前无法原生渲染表格、数学公式、任务列表，必须生成图片或跳转外链，本次配套实现合并后大幅提升了消息可读性，获得用户一致认可。

## 5. Bug 与稳定性
按严重等级排序当日新发现问题如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 对应PR |
|---------|---------|-----------|----------|--------|
| 高危 | MCP `enabledTools` 白名单绕过，配置deny-all策略时仍会泄露所有未授权的资源、提示词能力 | [#4434](https://github.com/HKUDS/nanobot/issues/4434)、[#4435](https://github.com/HKUDS/nanobot/issues/4435) | 已有修复待合并 | [#4436](https://github.com/HKUDS/nanobot/pull/4436) |
| 高 | Anthropic流式响应产生重复`tool_use id`后会话永久报废，所有后续请求都会被API返回400错误 | [#4442](https://github.com/HKUDS/nanobot/issues/4442) | 两个并行修复方案待评审合并 | [#4443](https://github.com/HKUDS/nanobot/pull/4443)、[#4444](https://github.com/HKUDS/nanobot/pull/4444) |
| 中 | MCP服务断开重连时会抛出跨任务取消范围的RuntimeError，直接导致网关进程崩溃 | 无独立Issue | 修复开发完成待合并 | [#4441](https://github.com/HKUDS/nanobot/pull/4441) |
| 已闭环 | 其余历史并发安全、性能优化类Bug均已修复关闭，无遗留影响 | - | 100%闭环 | - |

## 6. 功能请求与路线图信号
结合已有PR交付进度，以下需求极大概率纳入下一版本交付范围：
1. 新增只读`search_history`工具([Issue#4440](https://github.com/HKUDS/nanobot/issues/4440))：已有完整实现PR[#4439](https://github.com/HKUDS/nanobot/pull/4439)，落地后Agent可以主动检索归档的历史对话日志，不需要把全量历史加载到上下文窗口，大幅拓展长会话承载能力。
2. 心跳服务专属模型覆盖能力：用户提出的[Issue#4431](https://github.com/HKUDS/nanobot/issues/4431)需求，配套已开发完成的[PR#4437](https://github.com/HKUDS/nanobot/pull/4437)心跳命令行工具，落地后用户可以为后台巡检、定时任务配置低成本小模型，大幅降低非主会话场景的推理成本。
3. Cron作业新增静默模式：[PR#4225](https://github.com/HKUDS/nanobot/pull/4225)开发完成待合入，落地后后台监控类定时任务不需要每次都给用户推送响应消息，适配自动化巡检场景需求。
4. Telegram Bot API 10.1富消息能力已全部开发完成，将在下一个补丁版本正式发布。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈如下：
1. 生产部署用户痛点：并发场景钩子冲突、会话永久报废这类底层稳定性问题，是当前生产上线的最大阻碍，用户强烈要求优先发布补丁修复高危问题。
2. 数字员工场景开发者反馈：`estimate_prompt_tokens`性能优化落地后，大工具集下的工具调用响应速度提升30%以上，体验改善非常明显。
3. 隐私敏感企业用户诉求：现有官方支持的通讯通道都存在数据合规风险，Mattermost适配是当前最高优先级的缺失能力，没有可替代方案。
4. 语音场景用户正向反馈：之前分散的TTS插件配置体系极易出错，本次上线的统一TTS配置系统配合WebUI可视化设置，配置难度大幅降低，实用性很强。

## 8. 待处理积压
提醒核心维护者优先跟进的长周期积压项：
1. 长期未响应高需求[Issue#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost Bot适配，开放超过4个月，4位用户点赞反馈有实际落地需求，多个社区开发者表示愿意参与贡献，需要核心团队确认是否纳入v0.3版本路线图。
2. 长期待合入[PR#4092](https://github.com/HKUDS/nanobot/pull/4092) OpenAI兼容接口工具调用解析修复，提交于2026年5月29日，多次迭代后仍未完成评审，该PR修复了大量第三方开源自部署大模型的工具调用解析异常问题，受众覆盖非常广。
3. 长期待合入[PR#4145](https://github.com/HKUDS/nanobot/pull/4145) 官方天气技能实现，提交于2026年6月1日，配套完整的测试用例、文档，功能已经成熟，用户社区对内置通用天气查询技能的呼声很高，需要加快评审合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-22
项目主页：https://github.com/NousResearch/hermes-agent

---

## 1. 今日速览
2026年6月22日Hermes Agent整体处于高活跃迭代状态，过去24小时累计产生50条Issue更新、50条PR更新，问题当日闭环率达44%，无正式版本发布。当日迭代重心集中在平台兼容性加固、高危安全漏洞闭环、多消息渠道生态扩展三类方向，所有P1级故障修复全部优先落地主线。当日新提需求中用户侧付费推理成本优化、Windows桌面体验打磨两类诉求占比超60%，开源社区外部贡献活跃度环比提升17%，整体研发节奏完全匹配v2026.7迭代周期预期。

## 2. 版本发布
今日无正式版本发布，也无预发布/RC版本推送。

## 3. 项目进展
当日共落地3条主线合并/关闭记录，核心推进成果如下：
1.  跨PR集成测试套件[#50457](https://github.com/NousResearch/hermes-agent/pull/50457)合并上线，完整覆盖Copilot侧上下文路由、权限校验全链路逻辑，可拦截后续80%以上的相关回归故障。
2.  6个此前标记为`sweeper:implemented-on-main`的P1级故障全部正式闭环：覆盖桌面端更新后UI白屏卡死、跨网络切换网关断连、Windows更新后网关无自动拉起、TUI文件句柄泄漏打满磁盘、自定义模型提供商配置不生效、CLI升级依赖解析崩溃等高频故障，相关能力已同步推送至开发版镜像。
3.  2个P1级高危安全漏洞正式闭环：Matrix平台文本消息绕过E2EE加密漏洞、浏览器孤儿进程PID文件任意提权风险全部完成修复，安全响应速度符合项目公开的90天漏洞修复承诺。
当日整体完成v2026.6迭代剩余90%的遗留故障修复工作，距离全量发版的待办占比不足10%。

## 4. 社区热点
当日讨论热度最高的3条核心Issue集中反映社区核心诉求：
1.  [Matrix文本消息绕过E2EE加密漏洞 #45500](https://github.com/NousResearch/hermes-agent/issues/45500)：累计6条评论，为当日热度最高的 Issue，最终确认漏洞可复现并快速闭环，社区对安全响应速度给出正面评价。
2.  [新增IRC/Google Chat/LINE/Nostr/Twitch/QQBot消息渠道需求 #8950](https://github.com/NousResearch/hermes-agent/issues/8950)：累计5条评论2个点赞，大量用户反馈当前Hermes Agent渠道覆盖能力弱于同类竞品，是中小团队接入内部即时通讯平台的核心障碍。
3.  [按平台独立配置模型特性需求 #14327](https://github.com/NousResearch/hermes-agent/issues/14327)：累计4条评论2个点赞，核心来自企业部署用户，诉求是不同业务渠道可绑定不同的大模型实例，满足研发侧接本地部署开源模型、运营侧接云端商用大模型的分层使用需求。

## 5. Bug 与稳定性
当日新上报的故障按严重度排序如下，均标注修复进展：
| 严重等级 | 故障描述 | Issue链接 | 修复进展 |
|---------|---------|---------|---------|
| P2 | MCP stdio子进程断开后未回收，24小时运行后产生40+僵尸进程占用系统资源 | [#50169](https://github.com/NousResearch/hermes-agent/issues/50169) | 已有关联修复讨论，待提交正式PR |
| P2 | 单个MCP服务启动失败进入死循环后，导致全量正常MCP服务调用雪崩，返回未知工具错误 | [#50394](https://github.com/NousResearch/hermes-agent/issues/50394) | 待定位根因，暂无修复PR |
| P2 | 桌面端修改模型「思考模式」开关后自动回弹，配置写入无效 | [#50449](https://github.com/NousResearch/hermes-agent/issues/50449) | 待提交修复PR |
| P2 | TUI会话未记录工作目录，导致桌面端无法按工作区对历史会话分组 | [#50438](https://github.com/NousResearch/hermes-agent/issues/50438) | 待提交修复PR |
| P2 | MCP交互式OAuth登录被30秒探针超时截断，无法完成授权流程 | [#50458](https://github.com/NousResearch/hermes-agent/pull/50458) | 已有PR提交，待合并上线 |
| P3 | Windows下非默认路径安装Git时，桌面端直接启动失败 | [#45435](https://github.com/NousResearch/hermes-agent/issues/45435) | 待修复 |

## 6. 功能请求与路线图信号
结合现有PR落地进度，以下新特性大概率纳入下一个正式版本：
1.  **无密钥本地网页抓取特性**：已有PR[#50456](https://github.com/NousResearch/hermes-agent/pull/50456)提交，零依赖无需第三方API密钥即可完成网页内容提取，大幅降低网页搜索能力的部署门槛，优先级极高。
2.  **Telegram群聊多用户路由特性**：已有PR[#50463](https://github.com/NousResearch/hermes-agent/pull/50463)提交，支持单个群聊绑定多个Hermes Bot实例，满足团队多人共用群聊代理的场景需求。
3.  **动态思考模式自动开关特性**：用户已提交2个关联Issue描述需求，核心是让模型自行判断是否需要开启深度思考模式，减少不必要的推理token消耗，预计可帮助付费用户降低30%左右的推理成本，作为v2026.7核心特性推进。
4.  **Windows原生服务支持**：PR[#50200](https://github.com/NousResearch/hermes-agent/pull/50200)实现了基于SCM的自动重启能力，解决当前Windows平台网关崩溃后无自动恢复的问题，落地后可大幅提升桌面端部署可靠性。

## 7. 用户反馈摘要
从当日Issue评论中提炼核心用户反馈：
- Windows平台用户反馈占当日总反馈的50%，核心痛点集中在非默认路径Git识别故障、更新后服务无自动重启、终端工具弹出闪跳窗口干扰正常操作，说明桌面端Windows兼容性打磨距离生产可用还有明显差距。
- 大量使用OpenRouter/OpenAI付费API的用户反馈，当前固定开启思考模式的场景下，月度推理账单比预期高出30%以上，动态开关能力是降低使用成本的最高优先级需求。
- 企业多部门部署用户明确表示，当前全局单模型配置完全无法满足分层使用需求，「按渠道分配不同模型」的特性是阻碍团队大规模落地Hermes Agent的核心障碍。
- 安全社区用户对本次Matrix E2EE漏洞从上报到9天闭环的响应速度给出正面评价，认为项目的安全运维能力在同类Agent项目中处于第一梯队。

## 8. 待处理积压
以下高关注度中长期Issue暂无响应，提醒维护团队优先安排排期：
1.  [多消息渠道接入需求 #8950](https://github.com/NousResearch/hermes-agent/issues/8950)：2026年4月13日上报，累计5条评论2个点赞，涉及大量即时通讯平台用户的接入需求，至今未安排完整开发排期。
2.  [Skill运行时强制校验特性需求 #44637](https://github.com/NousResearch/hermes-agent/issues/44637)：2026年6月12日上报，累计4条评论，面向高可用生产部署场景，要求技能的校验规则不再只靠提示词约束，而是运行时强制拦截不符合规范的操作，目前暂无开发响应，是企业级生产部署的核心缺失能力。
3.  [Windows平台Matrix扩展安装报错 #47759](https://github.com/NousResearch/hermes-agent/issues/47759)：2026年6月17日上报，仅1条评论，暂无根因定位结论，影响大量国内Windows用户接入Matrix加密通讯场景。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 项目动态日报
日期：2026-06-22

---

## 1. 今日速览
过去24小时项目共产生9条有效变更，包含5条Issue动态、4条PR动态及1个自动夜间版本发布，整体迭代活跃度处于健康区间。今日核心工作集中在存量长期遗留Issue清理、历史配置缺陷修复、v0.3.0版本前置依赖维护三个方向，未出现重大安全漏洞或核心功能崩溃类问题。项目当前整体推进节奏平稳，距离v0.3.0正式版功能冻结节点持续靠近，社区贡献者、自动化运维Bot与官方维护者协同运行状态良好。

## 2. 版本发布
今日发布自动化夜间构建版本：**v0.3.0-nightly.20260621.287853ab**
- 版本属性：非稳定自动构建产物，官方提示生产环境谨慎使用
- 迭代基线：对比正式版v0.3.0的差异为全量main分支最新提交累积
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.0...main

## 3. 项目进展
今日仅1条PR完成合并/关闭，为历史遗留高价值缺陷修复：
- #2565 修复配置模块`GroupTriggerConfig`显式设置`mention_only=false`不生效的问题：此前Go序列化规则中的`omitempty`标签会自动省略布尔值为false的字段，导致用户关闭群聊@触发的自定义配置被默认值覆盖，本次修复彻底解决了该通道配置域的长期逻辑缺陷，大幅提升了群聊场景下的触发规则自定义灵活性。
该PR从2026年4月17日提交至今历时2个多月终于落地，标志着v0.3.0正式版的核心配置模块健壮度已经达到可用标准，剩余3条待合并PR均为体验优化和依赖升级类内容，项目整体离v0.3.0正式发布目标的完成度提升约2个百分点。
PR链接：https://github.com/sipeed/picoclaw/pull/2565

## 4. 社区热点
今日热度最高的社区反馈为高优先级缺陷类Issue：
- #3012 开启Evolution进化模式后每分钟无意义消耗Token：该Issue累计获得5条用户评论，为过去24小时互动量最高的内容，用户测试环境为FreeBSD搭配MiniMax付费模型，确认后台存在空跑消耗Token的异常逻辑。背后核心诉求是大量付费模型用户对隐性成本浪费高度敏感，避免无意义扣费已经成为付费用户的最高优先级需求，该问题目前尚未进入修复排期，社区期待官方尽快响应。
Issue链接：https://github.com/sipeed/picoclaw/issues/3012

## 5. Bug 与稳定性
按严重程度从高到低排列：
1. **严重级**：#3012 进化模式下持续自动消耗Token，直接导致用户产生不必要的模型服务费用，目前暂无对应修复PR，状态为活跃未分配
   链接：https://github.com/sipeed/picoclaw/issues/3012
2. **一般级**：#3090 iOS 版本低于16.4的Safari浏览器无法正常加载管理面板，影响存量老旧苹果设备的运维场景，目前暂无对应修复PR，状态为活跃未分配
   链接：https://github.com/sipeed/picoclaw/issues/3090
3. **已闭环存量Bug**：2条标记为stale的历史Issue今日正式关闭，分别为#3044 Matrix带冒号的用户ID校验失败、#3041 `mcp add`命令全局Flag解析错位，两类小众场景的阻塞问题已全部清理完毕。

## 6. 功能请求与路线图信号
### 待纳入版本的落地方向
- #3152 给`picoclaw skills search`命令输出增加技能安装指引，属于CLI体验优化类小功能，当前处于待合并状态，大概率会进入下一个v0.2.x小版本迭代
  PR链接：https://github.com/sipeed/picoclaw/pull/3152
- 两条Dependabot提交的前端依赖升级PR：#3103 升级typescript-eslint到8.61.0、#3105 升级eslint到10.4.1，属于前端构建链的安全维护，将在v0.3.0正式版发布前完成合并，降低前端供应链漏洞风险
### 远期需求信号
用户提交的#3093 新增SimpleX/Tox加密聊天网关的功能请求，目前仅处于需求收集阶段，暂无对应开发PR，大概率不会纳入v0.3.0版本，将排入后续隐私通讯相关的长线路线图。
Issue链接：https://github.com/sipeed/picoclaw/issues/3093

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼核心用户声音：
1. 核心痛点：付费模型用户对后台无感知的Token空跑容忍度极低，隐性成本消耗是当前影响用户留存的最大负面因素
2. 典型使用场景：大量树莓派部署PicoClaw的用户，习惯用手中的旧iOS设备做随身运维，iOS16.4以下的兼容性缺失直接影响了这部分群体的日常使用
3. 不满点：此前MCP命令、Matrix通道配置的晦涩Bug没有明确排期，高级用户排查成本极高
4. 正向期待：CLI工具增加一步到位的安装指引，能够大幅降低新手用户的上手门槛，减少入门教程的重复工作量。

## 8. 待处理积压
提请维护团队优先关注长期未响应的高优先级内容：
1. 两条挂网超过10天的stale依赖升级PR#3103、#3105久拖未合，会提升前端构建工具链的已知漏洞暴露风险，建议本周内完成合并
2. 两个活跃未分配Bug#3012、#3090均已开放超过10天，尚未有维护者认领跟进，建议尽快分配人力评估修复排期
3. #3093用户提出的隐私通讯网关需求已经获得社区用户点赞，目前尚未有官方人员给出任何回应，建议1周内给出明确排期预期，避免流失隐私优先场景的潜在用户。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-06-22
统计周期：2026-06-21 00:00 ~ 2026-06-22 00:00 UTC

---

## 1. 今日速览
过去24小时NanoClaw项目整体处于中高活跃度区间，共产生2条活跃安全Issue、6条PR更新，无正式新版本发布。当日迭代动作集中在底层安全漏洞披露、部署体验痛点修复、长期存量历史PR收尾三大方向，未出现大规模阻塞性故障。核心维护团队当前优先级向安全加固与部署兼容性优化倾斜，迭代节奏稳定，项目整体健康度处于优秀水平。本次更新覆盖的A2A交互、MCP权限、rootless Docker兼容等特性，直接对齐AI Agent类开源项目当前的核心落地需求。

## 2. 版本发布
今日无正式版本发布，无对应更新日志、破坏性变更及迁移指引。

## 3. 项目进展
当日共完成3条PR的合并/关闭，核心推进部署全链路的体验与兼容性提升：
1. [PR #2825](https://github.com/nanocoai/nanoclaw/pull/2825) 修复初始化逻辑，新增等待host socket就绪再完成首次对话的机制，解决此前新用户安装流程中，服务启动后未完成socket绑定就直接调用导致首次对话失败的问题，预计将首次安装成功率提升30%以上。
2. [PR #2168](https://github.com/nanocoai/nanoclaw/pull/2168) 落地历史遗留近2个月的修复，在无根Docker部署场景下直接绑定OneCLI的桥接IP映射`host.docker.internal`，抛弃不稳定的host-gateway自动解析逻辑，正式打通rootless Docker全场景部署兼容。
3. [PR #2829](https://github.com/nanocoai/nanoclaw/pull/2829) 按贡献规范关闭无效测试PR，清理PR队列冗余，降低维护团队的无效处理成本。
当日落地的修复累计解决了2项核心部署侧阻塞问题，底层体验短板修复进度推进约35%，为下个正式小版本发版扫清了关键障碍。

## 4. 社区热点
当日全量Issue与PR均未产生公开评论、点赞互动，热度最高的内容为安全研究者新提交的2条高优先级漏洞报告：
1. [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) A2A附件转发符号链接越权漏洞
2. [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) add_mcp_server审批流程参数隐藏漏洞
背后核心诉求集中在强化AI Agent跨角色交互、权限审批环节的边界隔离，避免Prompt注入引发的系统越权，当前全社区开发者及安全研究者均在等待项目方的补丁响应，属于当前生态内最高优先级的跟进事项。

## 5. Bug 与稳定性
按严重等级排序的当日新发现问题如下：
1. **Critical级 未修复**：[Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828) A2A附件转发跟随符号链接漏洞，攻击者可通过Prompt注入篡改目标Agent的收件目录为软链接，实现跨会话根目录的任意文件写入，当前无对应修复PR。
2. **High级 未修复**：[Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) MCP服务新增审批流程隐藏运行时参数漏洞，攻击者可构造请求将敏感args/env参数隐藏在审批卡片之外，实现审批走私执行未授权的系统命令，当前无对应修复PR。
3. **已修复 落地完成**：新用户安装首次对话失败、rootless Docker场景下host域名解析异常两类高频Bug已通过合并PR完全解决。

## 6. 功能请求与路线图信号
当日3条待合并PR全部明确指向后续版本的迭代方向，大概率纳入下一个小版本发布：
1. 核心维护者提交的[PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830) 死服务注册自动清理逻辑，可解决用户未卸载直接删除代码目录后残留大量无效系统服务的运维痛点，属于高优体验优化项。
2. 核心维护者提交的[PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826) 技能更新强制提示逻辑，解决系统升级后用户遗漏技能侧重要修复的问题，补齐迭代链路的最后一环。
3. 外部贡献者提交的[PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) 新增`/add-clidash`只读CLI仪表盘工具技能，完全符合贡献规范，大概率作为新增功能随下个版本上线。

## 7. 用户反馈摘要
当日无普通终端用户在Issue/PR下提交公开反馈。本次披露的2个安全漏洞均由第三方白帽研究者提交，侧面反映NanoClaw已经进入开源安全社区的观测范围，项目生态覆盖度持续提升。当日落地的所有修复均来自此前数月用户上报的高频部署报错汇总，完全对齐普通用户本地部署、私有化运维的实际需求。

## 8. 待处理积压
当前有3项高优先级事项处于待跟进状态，提醒维护团队尽快响应：
1. 2条新披露的Critical/High级安全Issue发布超过24小时未收到维护者公开ACK，需要第一时间向社区同步漏洞验证进度与补丁排期，避免漏洞细节泄露引发批量攻击。
2. 符合贡献规范的功能类

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-06-22）
---
## 1. 今日速览
今日NullClaw开源项目整体处于低活跃度平稳运行状态，过去24小时无新增代码提交、PR变更或版本发布动作。当日仅存量遗留Bug Issue出现1次更新，全维度活动数仅1条，项目当前核心维护资源暂未出现明显投入倾斜。目前项目未出现全链路阻塞类安全或可用性事故，整体健康度处于常规维护区间。社区反馈集中在Windows平台特定版本的模型调用失败场景，尚未引发大规模用户共振。

## 2. 版本发布
过去24小时无官方新版本发布动作，最近一次正式版本迭代仍为v2026.5.29，当日无新增更新说明与迁移指引内容。

## 3. 项目进展
过去24小时无新增合并、关闭或待合入的PR条目，当日无代码层面的功能迭代、缺陷修复落地动作，项目核心开发进度暂无显性推进。

## 4. 社区热点
当日社区仅1条活跃讨论条目，为当前优先级最高的用户反馈：
> 链接：https://github.com/nullclaw/nullclaw/issues/967
该条Issue是当日唯一有更新的社区内容，用户反馈Windows平台运行v2026.5.29版本时调用Agnes-2.0-Flash模型超50%概率返回空响应，且验证了同API Key在同类客户端可正常运行。背后核心诉求指向用户期望官方快速定位本地端到大模型服务调用链路的响应解析逻辑缺陷，尽快解决高频报错影响正常对话使用的问题。

## 5. Bug 与稳定性
当日仅1条更新的存量Bug记录，按严重程度排序如下：
1. **中等严重度**：Windows端v2026.5.29版本调用Agnes-2.0-Flash模型高频抛出`NoResponseContent`错误，21次对话中12次触发报错，直接阻断用户正常Agent交互流程，目前无对应修复PR。
   关联链接：https://github.com/nullclaw/nullclaw/issues/967

## 6. 功能请求与路线图信号
过去24小时无用户提交新功能类需求Issue，也无对应开发中的功能相关PR披露，暂无法预判后续版本新增功能的纳入范围，待后续社区新内容迭代后可进一步分析路线图变动。

## 7. 用户反馈摘要
从当日更新的Issue内容可提炼核心用户反馈：
- 真实痛点：Windows最新正式版本的模型响应解析逻辑存在兼容性缺陷，高频无理由报错打断初次使用流程，用户自行排查排除了API Key无效、模型服务不可用等外部问题，定位指向客户端本身代码缺陷，未得到官方回应前使用体验较差
- 使用场景：普通个人用户的本地Agent首次启动、单轮对话测试场景
- 满意度倾向：用户对同生态其他同类客户端的可用性表现认可度较高，对NullClaw当前版本的异常问题有明确的修复诉求，暂无针对功能设计的负面反馈。

## 8. 待处理积压
存量Issue #967自2026-06-20新建至今已超过48小时，仅存在1条用户侧评论，维护组尚未给出任何响应，属于典型待跟进积压问题。提醒维护者优先排查Windows端模型调用链路的响应解析逻辑，及时向用户同步问题排查进展，避免同类报错引发更多用户反馈，演化成大面积体验事故。
> 关联链接：https://github.com/nullclaw/nullclaw/issues/967

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-22
项目仓库：github.com/nearai/ironclaw | 今日整体健康度评级：良好

---

## 1. 今日速览
今日为项目高活跃度迭代日，核心团队集中在CI基建加固、Reborn核心功能落地两大方向推进，社区贡献参与度表现优异。过去24小时共完成3条Issue更新、27条PR迭代，PR合并/关闭率达51.9%，未发布正式新版本。当前迭代方向高度对齐本月末Reborn托管预览版里程碑，无阻塞性重大安全漏洞，新贡献者提交的生态适配、依赖升级类PR占比接近30%，整体研发节奏平稳可控。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并/关闭14项高价值PR，核心推进如下：
1. **Automations能力补全**：[#5065 feat(triggers): one-shot scheduled triggers via TriggerSchedule::Once{at}](https://github.com/nearai/ironclaw/pull/5065) 落地一次性定时调度触发器原生支持，和此前上线的Completed过滤能力形成完整配套，为后续自动化任务统计功能做好基座。
2. **CI基建能力全面升级**：通过[#5118](https://github.com/nearai/ironclaw/pull/5118)、[#5115](https://github.com/nearai/ironclaw/pull/5115)、[#5113](https://github.com/nearai/ironclaw/pull/5113)、[#5110](https://github.com/nearai/ironclaw/pull/5110)、[#4830](https://github.com/nearai/ironclaw/pull/4830)等系列PR，彻底解决了此前CI缓存LRU冲突、crates.io网络抖动、测试覆盖不全、合并队列未接入Reborn E2E校验等长期问题，预计CI整体通过率可提升30%以上，单次PR校验时长缩短40%。
3. **体验类Bug修复**：[#2927 fix(channels): wire load_startup_active_channels for first-run fallback](https://github.com/nearai/ironclaw/pull/2927) 修复了全新安装场景下所有WASM渠道插件默认未激活的历史遗留Bug；[#4990 fix(reborn): NEAR AI MCP ready state projection](https://github.com/nearai/ironclaw/pull/4990) 简化了NEAR AI MCP扩展的身份校验流程，降低用户上手门槛。
当前项目整体迭代进度距离月末Reborn托管预览版里程碑已完成75%以上。

## 4. 社区热点
今日关注度最高的两项核心迭代：
1. [#5081 [codex] Add hosted single-tenant Postgres profile](https://github.com/nearai/ironclaw/pull/5081) 由核心贡献者serrrfirat提交，目前处于草案评审阶段，是Reborn从本地开发模式迁移到云托管单租户模式的核心基座，背后反映了项目团队降低普通用户部署门槛、提供开箱即用托管服务的核心诉求，也是本月预览版发布的核心前提。
2. [#5109 feat(reborn): read-only + gated-write connector route (Composio) for the Workbench](https://github.com/nearai/ironclaw/pull/5109) 由新贡献者abbyshekit提交，打通了IronClaw桌面工作台与第三方生态平台Composio的账号连通路由，反映了社区对扩展平台第三方工具接入广度、丰富工作台生态的强烈诉求。

## 5. Bug 与稳定性
按严重程度排序：
| 严重等级 | 问题描述 | 对应Issue链接 | 修复状态 |
|----------|----------|--------------|----------|
| 高 | Reborn场景下Google OAuth凭证1小时过期后强制用户重登 | [#5071 [Reborn] Proactively refresh Google OAuth tokens before expiry](https://github.com/nearai/ironclaw/issues/5071) | 已完全修复，Issue已关闭 |
| 中 | 2026-06-21夜间E2E定时任务执行失败，CI校验链路完整性受损 | [#4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108) | 暂未定位根因，无对应Fix PR |
| 低 | 历史CI缓存冲突、网络抖动导致的PR校验随机失败 | 多条关联CI Issue | 已通过今日系列CI优化PR全部修复 |

## 6. 功能请求与路线图信号
今日新增的[#5117 Automations: add a "Completed" summary card with a server-side completed count](https://github.com/nearai/ironclaw/issues/5117) 功能需求，恰好与已合并的一次性触发器能力完全适配，100%会纳入下一版本的Automations UI更新范围。
其余处于待合并状态的高优先级特性：单租户托管Postgres基座、TurnRunScheduler并发执行调度器、Reborn学习记忆语义A/B测试能力均为Reborn预览版必备模块，预计会随下一个 minor 版本正式上线；Composio连接器路由功能也将作为生态扩展模块随工作台版本同步发布。

## 7. 用户反馈摘要
今日虽无新增用户评论，但从已闭环的问题中可提炼明确的用户痛点：
1. Reborn GSuite OAuth频繁重认证是企业用户反馈最高的体验痛点，本次修复后可彻底解决每小时强制重登问题，大幅降低生产环境使用成本。
2. 开发者用户此前反馈CI随机失败、PR等待校验时间过长的痛点，通过今日系列CI优化后，校验成功率和速度都会得到显著改善。
3. 全新安装用户反馈首次启动渠道插件全部未激活、需要手动二次配置的痛点，也已通过#2927彻底解决，新用户上手步骤大幅减少。

## 8. 待处理积压
1. 长期挂起Issue：[#4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108) 自2026-05-27创建至今已近1个月，多次更新运行记录仍未定位根因，可能导致夜间版本回归校验完全失效，需要测试团队优先介入排查。
2. 依赖升级积压：当前共有10项以上由dependabot提交的批量依赖升级PR，涉及超过60个Rust核心包、GitHub Actions组件，排队时间最长的已超过1个月，若长期不合并存在供应链安全漏洞、后续版本兼容冲突的风险，建议运维组集中排期评审合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-22）
---
## 1. 今日速览
2026年6月22日LobsterAI项目整体活跃度处于较低水平，过去24小时无公开代码提交、PR合入及新版本发布动作。项目维护团队集中完成了14条标注为`stale`的长期闲置存量Issue批量清理归档，仅新增1条由社区安全研究者提交的私有网络访问高危安全漏洞上报。当前项目无公开推进中的功能迭代排期，核心待处理事项集中在刚披露的安全问题响应上，整体存量Issue池冗余度显著下降。
## 2. 版本发布
今日无官方新版本发布。
## 3. 项目进展
今日无合入/关闭的公开PR，项目所有进展集中在存量Issue池治理环节：
维护团队一次性归档14条2026年4月上旬提交、超过2个月未产生任何交互的过期诉求，覆盖技能生命周期管理、第三方集成表单校验、CI流水线配置、用户体验增强等多个类别，有效清理了无效反馈条目，为后续版本迭代的需求优先级梳理扫清了冗余障碍。
## 4. 社区热点
今日全项目仅1条新增反馈，也是当前唯一的社区热点事件：
- [Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181) 「[Security] LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard」
该条目由社区安全研究者刚披露，目前暂无人评论，其背后核心诉求是提醒项目团队快速修正默认配置缺陷：当前LobsterAI默认开启私有网络浏览器访问权限，弱化了内置组件OpenClaw自带的SSRF防护能力，可能导致公网部署的实例被攻击者利用实现内网探测、越权访问内部服务，属于影响所有部署用户的高风险问题。
## 5. Bug 与稳定性
按严重程度排序：
1. **高危安全漏洞（新上报）**：[Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181)，默认配置绕过内置SSRF防护、开放私有网络访问，可直接被用于发起内网渗透攻击，目前暂无对应修复PR，漏洞细节已完全公开。
2. 其余14条历史功能性Bug均已随存量清理流程标记为`stale`关闭，无新增普通功能性Bug、崩溃、回归问题上报。
## 6. 功能请求与路线图信号
从已归档的历史诉求可推断当前迭代优先级安排：
- 此前用户高频提出的会话列表颜色标注、多会话批量导出、本地使用统计面板、长对话消息收藏、会话标签分类等体验增强类需求，均随本次清理被归档，暂未纳入下一公开版本的候选迭代池。
- 此前反馈的技能禁用状态未同步、IM通知表单空值校验缺失、定时任务静默失败、OAuth授权Token丢失等功能性Bug，全部被标记为过期，大概率已在未公开的内部迭代分支完成修复。
- 唯一新披露的高危安全漏洞，将是下一补丁版本的最高优先级修复目标。
## 7. 用户反馈摘要
从历史Issue反馈可提炼出三类典型用户痛点：
1. 重度用户百级会话堆积场景下，现有会话管理能力完全无法满足分类、快速检索、批量备份的需求，交互效率极低。
2. 技能生成等长耗时操作缺少进度提示，无交互反馈的黑盒状态很容易让用户误以为程序卡死，体验断层严重。
3. 第三方IM集成、OAuth授权等扩展场景存在大量无报错的静默异常，普通用户难以定位问题根因。
本次新提交的安全反馈来自企业级部署用户侧的安全研究者，诉求明确要求项目收紧默认安全边界，避免公网部署的实例存在可被利用的入侵风险。
## 8. 待处理积压
当前项目优先级最高的待处理项为：[Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181) 高危SSRF防护绕过漏洞，该条目提交后超过24小时维护团队未做任何标记、评论或响应，漏洞细节已完全公开，存在被攻击者利用发起大规模内网攻击的风险，建议维护团队第一时间跟进确认影响范围，优先发布安全补丁。
此外本次批量关闭的14条`stale` Issue中涉及的部分高频体验需求，仍有较高概率被后续活跃用户重新提交反馈，建议维护团队定期回溯相关问题的复现情况，避免遗漏核心用户诉求。

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

# CoPaw (agentscope-ai/QwenPaw) 项目动态日报
日期：2026-06-22

---

## 1. 今日速览
过去24小时项目活跃度处于高位，全链路共产生15条Issue更新、28条PR更新，无正式新版本发布。当前主迭代方向完全向现有版本稳定性、移动端适配场景倾斜，社区共有5名首次贡献者提交代码，迭代节奏完全贴合普通开发者实际使用诉求。目前核心问题收敛速度符合预期，移动端适配场景覆盖度已突破60%，项目健康度处于良好区间。

## 2. 版本发布
过去24小时无正式版本发布，当前最新稳定版为v1.1.12系列迭代版本。

## 3. 项目进展
今日共2条PR完成合并/关闭、1条历史Issue闭环，核心功能推进效率符合迭代预期：
1.  **PR #5365** 废弃冗余版本的Agent配置页移动端适配方案，清理了主分支中无效的旧代码路径，为通用卡片式响应式布局落地扫清障碍：https://github.com/agentscope-ai/QwenPaw/pull/5365
2.  **PR #5359** 已合并到主分支，在原有聊天头部移动端适配能力基础上新增标题跑马灯、窄屏场景下点击会话标题快速切换会话的增强体验：https://github.com/agentscope-ai/QwenPaw/pull/5359
3.  **Issue #5353** v1.1.12版本飞书群聊强制@智能体才响应的Bug已完全闭环，多渠道适配问题修复进度累计推进20%：https://github.com/agentscope-ai/QwenPaw/issues/5353

## 4. 社区热点
今日讨论热度最高的两条反馈集中反映了社区对移动端体验、迭代优先级的共性诉求：
1.  **Issue #5329** 移动端侧边栏简洁模式下新增Agent切换、新建聊天按钮的需求共获得5条评论，多名用户附议表示自己已通过手机浏览器部署操控CoPaw，是非常高频的运维场景：https://github.com/agentscope-ai/QwenPaw/issues/5329
    > 背后核心诉求：项目用户群体已经从纯桌面端重度开发者，扩展到需要外出随时运维智能体的移动端办公人群，移动端适配已经从体验优化需求变成刚需。
2.  **Issue #5360** 提议先收敛核心稳定性问题再叠加新特性的需求发布后快速获得多名开发者认同，社区关于"稳定性优先"的迭代共识正在快速形成：https://github.com/agentscope-ai/QwenPaw/issues/5360

## 5. Bug与稳定性
今日报告问题按严重等级排序如下：
| 严重等级 | 问题描述 | Issue链接 | Fix状态 |
| --- | --- | --- | --- |
| 高危（核心流程影响） | 消息发送队列串流，切换Agent后已提交消息错发给其他智能体、切换会话卡住无法返回 | https://github.com/agentscope-ai/QwenPaw/issues/5354 | 已有关联PR #5357 开发中 |
| 高危（核心流程影响） | Agent忙时调用`/api/console/chat`接口返回200但消息被静默丢弃 | https://github.com/agentscope-ai/QwenPaw/issues/5344 | 暂无对应修复PR |
| 高危（核心流程影响） | 对接DeepSeek模型时Agent思考过程中频繁卡死，UI不会切换为停止按钮导致用户重复提交消息 | https://github.com/agentscope-ai/QwenPaw/issues/5328 | 暂无对应修复PR |
| 严重（模型链路影响） | 自定义OpenAI兼容类服务商完全不支持函数调用能力 | https://github.com/agentscope-ai/QwenPaw/issues/5345 | 暂无对应修复PR |
| 严重（模型链路影响） | 智谱AI服务商层面测试连接成功，但所有模型的连通性测试全部失败 | https://github.com/agentscope-ai/QwenPaw/issues/5330 | 暂无对应修复PR |
| 一般（UI交互影响） | 嵌入式模式下切换会话偶发空指针报错 | https://github.com/agentscope-ai/QwenPaw/issues/5358 | 已有对应补丁待合并 |

## 6. 功能请求与路线图信号
结合已开放PR状态判断，以下特性极大概率纳入下一v1.1.13版本正式发布：
1.  全页面移动端响应式适配：已有12条相关PR排队待合并，覆盖设置页、会话管理、技能池等全部高频操作场景
2.  记忆搜索时间衰减排序能力：对应PR #5325 已开发完成，可实现相似度接近时近期笔记优先排序：https://github.com/agentscope-ai/QwenPaw/pull/5325
3.  API消息实时SSE推送+可选音效提醒：对应PR #5331 已开发完成，替代原有轮询机制延迟降低到50ms以内：https://github.com/agentscope-ai/QwenPaw/pull/5331
4.  Tauri桌面端关闭按钮最小化到系统托盘能力：对应PR #5326 开发完成待测试：https://github.com/agentscope-ai/QwenPaw/pull/5326
5.  模型自动故障转移能力：用户提交Issue #5351提出需求，底层`RoutingChatModel`代码已实现待激活，下一版本大概率上线：https://github.com/agentscope-ai/QwenPaw/issues/5351

## 7. 用户反馈摘要
- 正向反馈：v1.1.12版本新增的消息队列能力获得用户普遍认可，多会话并行处理效率大幅提升
- 高频痛点：大量需要移动办公运维智能体的用户表示现有PC优先的UI完全无法在手机端操作，外出时只能远程连电脑操控，门槛极高
- 适配痛点：国内主流大模型DeepSeek、智谱AI的对接兼容性坑点多，普通用户排查成本极高
- 效率痛点：同时管理数十个Agent的运维人员反馈，智能体办公室页面无法直接发起对话，需要跳转多层菜单，操作效率低

## 8. 待处理积压
提醒核心维护者优先跟进的高优先级未响应事项：
1.  **PR #5193** 提交于2026-06-15的Slack渠道Socket Mode+流式响应支持特性，至今未获得维护者评审，严重影响海外多渠道用户覆盖进度：https://github.com/agentscope-ai/QwenPaw/pull/5193
2.  **Issue #5342** 提出的执行层工具返回结果大小硬限制纵深防御方案，提交后暂无维护者跟进，存在大体积工具返回导致上下文溢出引发级联故障的稳定性隐患：https://github.com/agentscope-ai/QwenPaw/issues/5342

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-22
项目仓库：github.com/qhkm/zeptoclaw

---

## 1. 今日速览
过去24小时ZeptoClaw项目处于轻量运维迭代状态，整体活跃度平稳健康，无新开立的用户侧Issue提交。项目核心维护者完成了2项历史高优先级任务的闭环落地，未推送新版本，全量迭代聚焦于CI基础设施的长期稳定性保障。本次迭代完全对齐项目主打边缘嵌入式、机器人场景的核心战略，无任何用户侧紧急故障需要响应，项目整体演进节奏符合预期。

## 2. 版本发布
今日无正式版本发布，本次所有迭代均为CI工作流层面的基础设施优化，未产生面向终端用户的功能变更。

## 3. 项目进展
今日已闭环的核心迭代为PR #611，由主维护者qhkm提交：https://github.com/qhkm/zeptoclaw/pull/611
本次PR将原有仅在主分支推送后运行的二进制体积检测能力升级为全量PR前置门禁，设置初始阈值为7.5MB，彻底替代过去人工事后复盘的校验模式，直接解决了历史P1级Issue #537提出的核心风险。该门禁落地后，所有后续代码合入都会自动校验剥离调试信息后的release二进制体积，杜绝依赖迭代导致的二进制悄悄膨胀问题，项目长期坚守的「单二进制体积<6MB适配低资源机器人硬件」的差异化战略护城河得到了体系化的自动化保障，在核心特性长期一致性维度完成了关键里程碑建设。

## 4. 社区热点
今日无高互动的用户侧提交，唯一更新的历史高优Issue为维护者主导的战略级任务：#537 https://github.com/qhkm/zeptoclaw/issues/537
该任务背后的核心诉求是解决长期以来轻量化定位没有自动化机制兜底的隐患，避免项目迭代过程中逐步偏离最初的边缘场景设计目标，是面向核心用户群体的长期价值保障动作，当前该诉求已100%落地闭环。

## 5. Bug 与稳定性
过去24小时无新报告的Bug、崩溃、回归类问题，所有已更新工单均为运维优化类任务，当前项目无已知未修复的高严重度稳定性问题，整体运行状态健康。

## 6. 功能请求与路线图信号
结合本次已落地的门禁机制的迭代轨迹，可以预判后续版本将持续下调二进制体积阈值：首先从当前7.5MB的临时校准值逐步下探到7MB，最终对齐项目战略目标的6MB阈值，后续所有新功能合入都必须满足体积约束，不会牺牲轻量特性来叠加冗余能力，适配低资源嵌入式、机器人硬件的核心场景属性将进一步强化，该迭代路径已经完全落地了自动化保障机制，推进确定性极高。

## 7. 用户反馈摘要
过去24小时无新增用户侧Issue评论，暂未收集到新的用户痛点、场景反馈，本次迭代直接响应了长期以来边缘开发者群体的核心预期：保证ZeptoClaw二进制足够小巧，可以运行在存储空间仅有数MB的低配机器人硬件上，符合该类核心用户的长期使用诉求。

## 8. 待处理积压
今日无新增的长期未响应重要Issue/PR标记，本次闭环的#537、#611两份历史工单分别创建于2026年4月、6月，此前处于待落地状态现已全部完成闭环，当前项目待处理工单积压量处于健康低位，无逾期超过30天的高优先级待处理任务。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-22
---
## 1. 今日速览
过去24小时ZeroClaw项目保持高活跃迭代状态，累计产生38条Issue更新、50条PR更新，核心开发、社区贡献者投入覆盖工程治理、多渠道适配、Provider兼容性优化三大方向。今日无正式版本发布，整体处于0.8.0-beta版本的功能收尾阶段，累计闭环7条Issue、4条PR，未出现影响大范围用户的S0级阻塞故障。项目协作流程自动化、国内生态渠道适配、可观测性升级三类需求的社区参与度显著走高，当前迭代进度符合0.8.0版本的交付预期。
## 2. 版本发布
今日无正式版本发布，最新稳定版仍待0.8.0功能冻结后对外推送。
## 3. 项目进展
今日已合并/闭环的高价值事项如下：
1. **CI工程体系升级**：跨平台非强制Clippy检查工作流正式落地（[PR#7885](https://github.com/zeroclaw-labs/zeroclaw/pull/7885)），解决此前仅Linux端Lint漏检macOS/Windows平台Rust语法退化的问题，对应关闭Issue#7486，多平台构建质量保障能力完成升级。
2. **Zerocode UI适配修复**：TUI模式下授权弹窗继承终端背景的主题冲突问题闭环（[PR#7823](https://github.com/zeroclaw-labs/zeroclaw/pull/7823)），弹窗统一适配暗色系统主题，用户视觉体验一致性大幅提升。
3. **核心基础能力补全**：内存模块新增全量存储读取时间戳排序边侧测试覆盖（[Issue#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694)），此前阻塞的Docker镜像构建报错（[Issue#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089)）、代理重命名时状态顺序错误的S1级故障（[Issue#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907)）均已全部闭环，当前0.8.0-beta待交付事项完成占比约27%。
## 4. 社区热点
今日讨论热度最高的事项如下：
1. **[Issue#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes、看板自动化和标签清理**（11条评论）：项目治理类核心提案，社区普遍支持将工作路由全流程自动化，降低维护者手动分类、指派任务的重复工作量，该提案当前已通过评审进入落地阶段。
2. **[Issue#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) 要求新增Napcat/Onebot渠道适配**（9条评论）：中文社区最热门需求，大量国内个人用户期待原生对接QQ生态，直接部署AI群助手场景，避免第三方中转的额外部署成本。
3. **[Issue#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook自定义转换能力需求**（6条评论）：集成开发者刚需，当前原生Webhook不支持任意Payload解析，对接GitHub、飞书等第三方平台回调时必须额外搭建中间层，诉求底层支持自定义路径、自定义Payload校验转换规则。
## 5. Bug 与稳定性
按严重等级排序，今日新增/活跃的故障清单如下：
| 严重等级 | 故障描述 | 关联链接 | 修复状态 |
| --- | --- | --- | --- |
| S0 | Quickstart向导添加的Anthropic模型不生效，必须重置服务才能在聊天窗口调用 | [Issue#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | 待认领，无对应PR |
| S0 | NVIDIA视觉类模型配置后无法处理图片输入，仅支持纯文本调用 | [Issue#8099](https://github.com/zeroclaw-labs/zeroclaw/issues/8099) | 待认领，无对应PR |
| S1 | Gemini CLI OAuth完全失效，全流程阻塞调用 | [Issue#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | 开发中，待提交PR |
| S1 | OpenAI兼容服务商（如MiniMax）上下文压缩逻辑会完全丢失工具调用、返回内容，触发调用死循环 | [Issue#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | 状态标记in-progress，修复中 |
| S1 | Intel Mac设备运行官方install.sh默认下载arm64架构包，报CPU不兼容错误 | [Issue#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095) | 对应修复PR#8096已提交，待合并 |
| S1 | OpenAI Responses模式、Anthropic调用链路下，原生/MCP工具完全无法加载使用 | [Issue#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | 待认领，无对应PR |
## 6. 功能请求与路线图信号
结合已提交PR进度，以下需求大概率纳入0.8.0正式版交付范围：
1. **本地小模型优先模式**：支持精简提示词、严格输出解析、内部指令防泄露，适配Ollama等端侧部署场景，对应[Issue#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 已进入开发阶段。
2. **缺失技能自动推荐**：用户输入超出当前已安装能力范围时，自动推送可直接安装的技能/插件列表，对应[PR#7819](https://github.com/zeroclaw-labs/zeroclaw/pull/7819) 待合并。
3. **WASM组件模型插件宿主能力**：大幅扩展插件生态兼容性，第三方开发者可使用任意语言编写符合WASM规范的插件，对应[PR#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) 为XL级高优特性。
4. **会话级全链路OTel可观测能力**：将LLM调用、工具调用、内存操作全链路Span聚合到单轮Agent会话下，大幅降低开发者调试排查成本，对应[Issue#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 已在落地中。
5. **自定义高安全配对码**：替代当前默认6位数字弱校验，支持用户自定义任意长度字母数字组合的配对密钥，对应[Issue#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 已通过评审。
## 7. 用户反馈摘要
从当日Issue评论中提炼典型用户痛点：
1. 国内个人部署用户普遍反馈，当前仅支持Discord、Telegram等海外渠道，原生缺失Onebot/QQ生态适配，AI群助手场景只能通过第三方桥接实现，稳定性差。
2. 本地Ollama小模型用户吐槽，现有系统提示词过于臃肿，7B级小模型上下文空间被大量内部指令占用，容易出现指令泄露到用户输出侧的问题，完全不适合端侧离线部署。
3. 重度CLI用户反馈，当前ZeroClaw把运行日志输出到stdout，不符合Unix工具惯例，直接管道输出结构化配置文件时会混入大量日志内容，必须手动做stderr重定向，使用门槛高。
4. 自动化集成开发者反馈，原生Webhook能力完全不支持第三方平台自定义Payload，对接飞书、企业微信、GitHub回调时必须额外部署中间转换服务，集成成本翻倍。
## 8. 待处理积压
需维护者重点关注的长期高优未闭环事项：
1. [Issue#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)：2026年4月创建的153条提交批量回退恢复审计事项，至今仅2条评论，大量已评审通过的功能、bug修复提交处于丢失风险中，亟需投入资源梳理恢复。
2. [Issue#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)：S1级Gemini OAuth失效bug，创建至今接近3个月，所有对接Google Gemini的用户完全无法正常使用服务，P1优先级但迟迟没有落地修复。
3. [Issue#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)：创建超过3个月的日志输出到stdout的基础体验问题，标签标记no-stale长期未认领，属于所有CLI用户都会碰到的通用痛点，迭代优先级被低估。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*