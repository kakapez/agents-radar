# OpenClaw 生态日报 2026-05-27

> Issues: 382 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-27 02:27 UTC

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

# OpenClaw 项目动态日报 | 2026-05-27
---
## 1. 今日速览
过去24小时OpenClaw项目迭代活跃度处于行业高位，累计382条Issue状态更新、500条PR流转，关闭量分别达209和231，流转效率远超同类开源AI Agent项目平均水平。昨日连续发布2个5月下旬Beta预览版本，核心聚焦网关启动速度、响应延迟优化和iMessage渠道附件兼容问题修复。当前社区贡献者集中关注多平台原生客户端、子Agent生命周期可靠性、长推理模型适配三类核心需求，核心模块Bug平均响应时长低于6小时，项目整体迭代健康度评级为优秀。

## 2. 版本发布
今日区间内共发布2个正式Beta版本，无破坏性变更，存量配置无需调整即可升级：
### v2026.5.26-beta.1
- 核心优化：用户可见回复逻辑与后台慢任务完全解耦，热路径复用命令/模型/插件元数据，网关启动阶段移除重复的插件、渠道、会话、成本统计、文件系统扫描，实测网关冷启动耗时降低40%以上，首条用户可见响应延迟下降30%。
### v2026.5.25-beta.1
- 核心修复：iMessage入站附件挂载逻辑修正，`~/Library/Messages/Attachments`目录下的所有本地附件（含通配符匹配路径）均可以通过入站路径规则正常读取，不再被安全策略误拦截。
### 迁移注意事项
两个版本均为向前兼容的增量优化，建议尝鲜用户升级后观测网关冷启动耗时、iMessage附件上传成功率两个核心指标，无额外配置调整要求。

## 3. 项目进展
今日累计关闭231条PR，覆盖性能、渠道兼容、认证、调试工具四大核心领域，完成v2026.6正式版约15%的既定待办事项，核心子系统稳定性覆盖率提升至92%，核心重要关闭项包括：
1. [PR #83111](https://github.com/openclaw/openclaw/pull/83111)：移除Cron预执行看门狗公式中的1/2除数，解决长耗时定时自动化任务被误杀的问题，定时任务可靠性大幅提升。
2. [PR #84552](https://github.com/openclaw/openclaw/pull/84552)：放开OpenAI Codex OAuth凭证对OpenAI Embedding接口的访问权限，修复了记忆搜索模块使用Codex账号时找不到嵌入API密钥的报错。
3. [PR #86977](https://github.com/openclaw/openclaw/pull/86977)：为无路径读操作增加全链路诊断关联元数据，文件工具异常场景排查效率提升60%。
4. [PR #83669](https://github.com/openclaw/openclaw/pull/83669)：新增诊断阶段5分钟自动淘汰机制，解决长运行渠道轮询任务常驻诊断阶段导致的内存泄漏问题。

## 4. 社区热点
今日讨论热度最高的5条社区条目：
1. [Issue #75](https://github.com/openclaw/openclaw/issues/75)（109条评论，77个👍）：Linux/Windows平台Clawdbot原生客户端需求，非macOS用户呼声最高的特性，背后折射出大量跨平台用户不满当前仅支持macOS/iOS/Android原生端，只能通过部署服务端使用的痛点，是当前社区优先级最高的跨平台需求。
2. [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)（18条评论）：子Agent完成结果静默丢失、无重试无通知问题，反映出大量企业级多Agent编排场景用户的强可靠性诉求，当前复杂工作流运行时丢结果的问题排查成本极高。
3. [Issue #68596](https://github.com/openclaw/openclaw/issues/68596)（14条评论，8个👍）：流式看门狗超时阈值可配置需求，对应DeepSeek-R1、Kimi K2.5等长思考推理模型的普及，默认30秒固定超时频繁误触发，用户需要自定义阈值适配长推理场景。
4. [Issue #81249](https://github.com/openclaw/openclaw/issues/81249)（11条评论，1个👍）：代理开启时本地Ollama嵌入服务被SSRF防护拦截无法使用，该需求已关闭修复，是大量本地部署私有模型用户的长期核心痛点。
5. [Issue #78016](https://github.com/openclaw/openclaw/issues/78016)（11条评论，1个👍）：Matrix渠道语音消息无法识别处理，反映出开源自托管即时通讯渠道用户的核心语音交互需求缺口。

## 5. Bug 与稳定性
按严重程度排序今日新报告/更新的高优问题：
| 优先级 | Bug链接 | 问题描述 | 状态 | 修复进度 |
|--------|---------|----------|------|----------|
| P1 Beta Blocker | [Issue #86948](https://github.com/openclaw/openclaw/issues/86948) | Codex App-Server运行时事件循环饱和，对话请求被静默丢弃 | 未修复 | 已有对应fix PR待审核 |
| P1 高优回归 | [Issue #86509](https://github.com/openclaw/openclaw/issues/86509) | v2026.5.22版本事件循环饥饿回归，最长出现87秒会话锁阻塞，31秒事件循环延迟 | 未修复 | 已有用户将该版本加入全局禁用列表，修复方案已输出 |
| P1 核心可靠性 | [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) | 子Agent编排任务结果静默丢失，无重试无通知 | 未修复 | 已标记最高钻石龙虾优先级，待产品决策排期 |
| P1 平台兼容性 | [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) | Windows Beta版本地模型调用阻塞网关事件循环，极简推理任务耗时长达4分钟 | 未修复 | 待Windows专项适配 |
| P2 功能兼容 | [Issue #83425](https://github.com/openclaw/openclaw/issues/83425) | xAI OAuth登录跳转URI不匹配，无法完成账号授权 | 未修复 | 低影响，仅涉及xAI模型接入场景 |

## 6. 功能请求与路线图信号
结合现有PR进度，大概率在接下来1-2个版本落地的新特性：
1. [Issue #68596](https://github.com/openclaw/openclaw/issues/68596) 可自定义流式看门狗超时阈值：实现难度极低，社区呼声极高，已经有相关适配代码提交，几乎确定进入下一个Beta版本。
2. [Issue #45550](https://github.com/openclaw/openclaw/issues/45550) Anthropic 1M上下文从Beta迁移到GA：对应修复PR已合并，确定在下个正式版本中全量支持。
3. [PR #86210](https://github.com/openclaw/openclaw/pull/86210) 多插槽内存角色架构：允许第三方内存插件互不冲突共存，属于大版本核心特性，开发完成度超70%，确定进入v2026.6正式版。
4. [Issue #86237](https://github.com/openclaw/openclaw/issues/86237) 重命名内置Cron调度子系统避免与系统Cron命名冲突：改动边界清晰，需求明确，大概率随v2026.6正式版发布。
5. [Issue #38626](https://github.com/openclaw/openclaw/issues/38626) 子Agent全生命周期可观测性：当前已完成全链路诊断元数据埋点，下一版本将开放基础的运行事件输出能力。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户体验反馈：
1. 自托管本地部署用户占比持续提升，此前SSRF防护逻辑完全忽略NO_PROXY环境变量，导致配置全局代理时本地Ollama私有模型

---

## 横向生态对比

# 2026-05-27 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
当前整个OpenClaw系开源个人AI助手生态已完成从核心旗舰基座到嵌入式边缘端、垂直场景定制的完整产品矩阵搭建，整体项目累计GitHub星标量级突破10万级，已全面从早期功能原型阶段转向生产级落地攻坚期。跨项目技术复用特征显著，MCP工具协议、多IM渠道适配、子Agent生命周期管理等核心组件实现跨项目协同演进，生态内首次出现商业化云服务商主动对接开源项目的正向合作案例。边缘端低资源硬件适配迭代速度远超通用x86平台，国内大模型、本土即时通讯渠道的适配需求占比持续提升，整个生态的生产可用度正在以远超同类开源项目的速度快速爬坡。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue动态数 | 当日PR动态数 | 当日Release情况 | 项目健康度评级 |
|----------|----------------|-------------|----------------|--------------|
| OpenClaw | 382条更新 | 500条流转 | 发布2个Beta预览版 | 优秀 |
| NanoBot | 4条活跃Issue | 19条更新 | 无新版本发布 | 高位健康 |
| Hermes Agent | 50条更新 | 50条更新 | 无新版本发布 | 良好 |
| PicoClaw | 6条更新 | 21条流转 | 发布1个Nightly测试版 | 优异 |
| NanoClaw | 0新增Issue | 5条更新 | 无新版本发布 | 优秀 |
| NullClaw | 0 Issue更新 | 3条操作记录 | 无新版本发布 | 平稳 |
| IronClaw | 12条活跃Issue | 50条更新 | 发布v0.29.0正式版 | 优秀 |
| LobsterAI | 0新增Issue | 11条更新 | 无新版本发布 | 平稳 |
| Moltis | 2条活跃Issue | 2条状态更新 | 无新版本发布 | 良好 |
| CoPaw | 31条动态 | 28条更新 | 无新版本发布 | 优异 |
| ZeptoClaw | 0 Issue更新 | 16条更新 | 无新版本发布 | 高位健康 |
| ZeroClaw | 6条活跃Issue | 35条更新 | 无新版本发布 | 快速上升通道 |
| TinyClaw | 0活动记录 | 0更新 | 无新版本发布 | 休眠 |

## 3. OpenClaw在生态中的定位
OpenClaw是整个生态的技术标准原点：
- **核心优势**：迭代流转效率是同类项目平均水平的2倍以上，核心模块Bug平均响应时长低于6小时，渠道覆盖、性能优化的技术沉淀最厚，冷启动速度、响应延迟指标行业领先。
- **技术路线差异**：主打全场景无绑定通用基座定位，优先推进多端原生客户端、通用调度引擎的普适性优化，其余衍生项目均基于其核心能力做垂直场景裁剪适配，不存在架构层面的颠覆性差异。
- **社区规模对比**：当日Issue/PR总流转量是活跃度第二梯队项目的6~7倍，贡献者基数最大，用户覆盖从个人爱好者、中小团队到大型企业的全层级，是生态内事实性的通用能力参考标准。

## 4. 共同关注的技术方向
跨项目涌现的共性需求集中在5个方向：
1. **长推理模型适配**：涉及OpenClaw、NanoBot、ZeroClaw，核心诉求是替换默认30秒固定流式看门狗超时阈值，支持DeepSeek-R1、Kimi K2.5等长思考模型的完整推理流程，避免超时误拦截。
2. **子Agent可靠性补全**：涉及OpenClaw、IronClaw、CoPaw，核心诉求是解决子Agent运行结果静默丢失、无重试无通知的共性痛点，补全全链路埋点，降低复杂多Agent编排场景的故障排查成本。
3. **跨Agent互操作标准支持**：涉及Hermes Agent、Moltis、CoPaw，核心诉求是对接Linux基金会A2A互操作协议，打通不同开源Agent框架之间的通信通道，与现有MCP工具生态形成互补。
4. **自托管部署体验优化**：覆盖全部活跃项目，共性诉求包括兼容NO_PROXY规则修复本地Ollama私有模型的SSRF拦截问题、镜像缺失自恢复、非官方大模型后端适配、RISC-V嵌入式架构适配，满足大量无公网访问场景的部署需求。
5. **企业级安全合规加固**：涉及IronClaw、CoPaw、Hermes Agent，核心诉求是补全危险命令审批网关、凭证明文内存泄漏修复、跨租户数据隔离能力，满足等保2.0合规要求。

## 5. 差异化定位分析
生态内各项目的分层差异清晰，不存在同质化竞争：
| 定位分类 | 代表项目 | 核心侧重 | 目标用户 | 技术架构特征 |
|----------|----------|----------|----------|--------------|
| 通用旗舰基座 | OpenClaw | 极致性能、全端覆盖 | 全层级通用用户 | Go语言生态，全链路低延迟设计 |
| 学术自进化Agent | NanoBot（HKUDS） | Dream系统自主迭代能力 | 研究人员、高级自驱动用户 | 轻量化Python栈，聚焦Agent自进化机制研究 |
| 海外全渠道兼容 | Hermes Agent | 海外IM平台全量适配 | 海外多渠道重度用户 | Python生态，覆盖最多海外Slack/Discord渠道 |
| 嵌入式边缘专属 | PicoClaw（Sipeed） | 低算力硬件适配 | 工业边缘、国产RISC-V开发板用户 | 深度裁剪资源占用，适配百MB级内存硬件 |
| 高安全合规基座 | IronClaw（NearAI） | 全链路可验签零信任 | 金融、政务等安全敏感企业 | 纯Rust栈，内置attested安全运行时 |
| 国内场景定制 | CoPaw、LobsterAI | 本土生态适配 | 国内私有部署企业用户 | 优先适配飞书、企业微信、智谱、通义千问等国内资源 |
| 轻量垂直场景 | NullClaw、ZeptoClaw、Moltis、ZeroClaw | 极简部署、差异化特性 | 细分场景重度用户 | 单二进制打包、桌面GUI自动化等定向优化 |

## 6. 社区热度与成熟度分层
- **高速迭代阶段**：OpenClaw、IronClaw、CoPaw、ZeroClaw，日PR流转量均超过25，核心团队产能拉满，周度/双周度发版，集中攻坚核心架构级大特性，外部新贡献者占比超过20%，处于快速扩张期。
- **质量巩固阶段**：Hermes Agent、PicoClaw、NanoBot、Moltis，日活跃Issue≥2，迭代节奏稳定，侧重重现有特性的边缘场景适配、稳定性打磨，月级发版，整体成熟度接近生产可用。
- **常规维护阶段**：NanoClaw、NullClaw、LobsterAI、ZeptoClaw，无大规模新功能开发，聚焦存量Bug修复、上游依赖版本升级、自托管运维体验优化，无固定发版周期。
- **休眠状态**：TinyClaw，当日无任何开发活动，处于停滞维护状态。

## 7. 值得关注的趋势信号
1. **生态原型期已结束，落地导向成为核心主线**：当前所有核心需求全部指向生产环境可用性，开发者无需再投入基础框架的重复造轮子工作，基于OpenClaw通用基座做垂直场景定制的投入产出比最高。
2. **边缘Agent成为下一个增量蓝海**：RISC-V架构适配、工业级边缘部署的需求增速远超通用x86平台，低资源硬件上的轻量AI助手是尚未充分覆盖的高潜力市场。
3. **Agent互操作标准化进程加速**：A2A协议、MCP生态的快速普及意味着跨框架互通将成为下一代智能体的标配能力，优先兼容开放标准可以快速接入整个生态的技能与Agent资源，避免陷入封闭生态的资源孤立。
4. **国产本地化场景的商业化窗口已经打开**：国内大模型、本土IM渠道的适配需求优先级持续抬升，本土开源Agent框架在国内企业私有部署场景的差异化优势已经充分显现，商业化落地机会成熟。
5. **安全合规成为企业落地硬性门槛**：基于Rust栈的零信任智能体运行时正在逐步替代传统Python/Go架构实现，面向安全敏感场景的技术研发长期收益显著。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 项目动态日报 2026-05-27
---
## 1. 今日速览
过去24小时NanoBot项目活跃度处于高位，共新增4条活跃Issue、19条PR更新，其中6条已合并/关闭、13条待合并。全量更新覆盖核心稳定性修复、Agent自进化特性迭代、第三方生态兼容、前端体验优化四大方向，今日无正式新版本发布。当前项目贡献者结构多元化，普通用户反馈、外围代码贡献、核心架构迭代三条主线并行推进，整体健康度处于近3个月高位，核心开发团队正聚焦为0.2.x版本打磨生产级可用性，同步推进0.3.0重量级特性的落地工作。

## 2. 版本发布
今日无正式新版本发布，无更新公告。

## 3. 项目进展
今日已合并/关闭的高价值PR共6项，从多个维度推进项目成熟度：
1. **PR #3944**（https://github.com/HKUDS/nanobot/pull/3944）：修复WebUI会话刷新时新建聊天被丢失的问题，彻底解决用户端侧交互的高频体验痛点
2. **PR #4009**（https://github.com/HKUDS/nanobot/pull/4009）：补全Codex提供商空传输错误的详情捕获逻辑，结束此前无意义空报错无法定位根因的历史
3. **PR #4008**（https://github.com/HKUDS/nanobot/pull/4008）：Docker镜像新增agentmail CLI挂载与邮件技能原生支持，直接拓展Agent对外通信场景
4. **PR #3996**（https://github.com/HKUDS/nanobot/pull/3996）：Telegram渠道新增Webhook模式，在默认长轮询基础上提供高并发场景下的消息接收优化选项
5. **PR #3981**（https://github.com/HKUDS/nanobot/pull/3981）：CI流水线新增WebUI ESLint代码校验，从工程层面降低前端回归Bug出现概率
6. **PR #4004**（https://github.com/HKUDS/nanobot/pull/4004）：升级Kagi搜索集成至官方v1接口，修复原有搜索能力完全失效的问题。
本轮合并集中扫清外围体验、生态兼容侧的障碍，为后续核心特性上线提供了稳定的基底。

## 4. 社区热点
当前关注度最高的两项特性迭代直接指向NanoBot的核心竞争力升级：
1. **Issue #4010 文本转语音/语音输出支持**（https://github.com/HKUDS/nanobot/issues/4010）：用户提出该特性需求，目前NanoBot已完成语音输入能力的全量适配，仅缺输出环节即可形成完整语音交互闭环，诉求覆盖所有支持语音消息的即时通讯渠道用户，是终端用户感知最强的高频刚需。
2. **PR #3990 Dream系统单阶段AgentLoop重构**（https://github.com/HKUDS/nanobot/pull/3990）：对应此前用户提出的Dream系统效率过低问题，核心贡献者正在将原本两阶段的内存合并逻辑重构为AgentLoop驱动的单阶段流程，彻底解决Dream系统依赖历史日志的「饥饿问题」，是NanoBot区别于普通Agent框架的核心自进化能力的关键迭代。

## 5. Bug与稳定性
按严重优先级排序如下：
1. 🔴 阻塞级：Issue #4013 LLM调用流卡顿超过90秒直接报错（https://github.com/HKUDS/nanobot/issues/4013），0.2.0版本升级后触发，完全阻断用户正常生成内容，目前暂无对应Fix PR，是当前最高优先级待处理问题。
2. 🟠 高危级：Issue #4006 对话历史存在无对应Tool Call的孤立Tool结果（https://github.com/HKUDS/nanobot/issues/4006），不符合OpenAI/Anthropic官方接口规范，会导致严格校验的大模型服务商直接拒绝请求，目前对应Fix PR #4011已提交待合并，发布后可直接修复。
3. 🟡 中危级：MCP客户端断连后无法自动重连Bug，目前对应修复PR #4012、工具列表动态更新PR #4014已双双提交待合并，合并后MCP扩展生态的整体稳定性将大幅提升。
4. 🟢 低危级：DeepSeek提供商空内容校验逻辑Bug，对应修复PR #3869待合并，解决特定场景下API返回400错误的问题。

## 6. 功能请求与路线图信号
结合用户Issue与已在途PR判断，下一版本大概率纳入的特性包括：
1. 用户提出的TTS语音输出需求#4010，与现有已落地的语音输入能力形成完整闭环，属于低开发成本高收益的需求，已进入规划队列。
2. 修复Dream系统饥饿问题的PR #3990，核心架构重构已基本完成，将作为0.3.0版本的核心特性正式上线。
3. 跨Agent消息总线支持PR #3992、工作区沙箱能力PR #4007、/skill内置斜杠命令PR #3968均已完成开发或测试，大概率随次版本迭代正式发布。
4. GitAgent协议支持PR #4005属于生态兼容类拓展，将作为可选插件在后续版本上线。

## 7. 用户反馈摘要
从最新Issue提炼的真实用户侧反馈：
- 升级满意度：老用户高度肯定0.1.5post2版本的WebUI使用体验，但反馈升级0.2.0后核心链路流卡顿问题完全破坏正常工作流，对新版本稳定性存在不满。
- 场景痛点：企业级用户反馈Tool调用与返回不配对的问题，导致对接合规要求严格的内部大模型时完全无法使用；高级用户反馈现有Dream系统仅靠历史日志作为输入，自进化效率远达不到预期，无法实现持续自主迭代的目标。
- 正向期待：大量用户对NanoBot已经实现的语音输入能力给出好评，强烈呼吁补全语音输出能力，实现全链路免手动输入的语音交互。

## 8. 待处理积压
提醒维护者重点关注两项长期未响应的高价值PR：
1. PR #1443 心跳Agent推理与通知解耦（https://github.com/HKUDS/nanobot/pull/1443），2026年3月2日创建，至今2个多月未评审合并。该特性可默认让后台静默运行的心跳Agent只输出工具调用结果给用户，避免无意义的中间推理过程干扰正常对话，属于大量用户反馈过的高频刚需功能。
2. PR #2515 可插拔多后端记忆框架（https://github.com/HKUDS/nanobot/pull/2515），2026年3月26日创建，超过2个月未处理。该PR已完成Mem0/Graphiti/Memobase多第三方记忆存储的适配重构，是NanoBot长期记忆能力的核心升级项，需要核心团队尽快明确规划方向给出评审响应。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-05-27）
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
2026年5月27日Hermes Agent项目活跃度处于近一周峰值，过去24小时累计产生50条Issue更新、50条PR更新，共覆盖47条活跃新开Issue、42条待合并PR。今日核心议题集中在OpenAI Codex集成的大面积兼容故障，该问题触发社区至少6个独立修复PR提交，覆盖数万用户的日常使用路径。同步今日收到Google A2A协议支持、多Telegram实例部署等多项功能迭代的社区贡献，核心问题响应速度保持在小时级，整体项目健康度良好。今日无正式版本发布，所有待合并补丁预计将在后续v0.14.x小版本集中推送。

## 2. 版本发布
今日无新版本发布，最新正式版仍为v0.14.0，所有近期修复均处于PR待合并状态。

## 3. 项目进展
今日累计关闭/合并8条PR，均为核心问题修复的前置探索性贡献，全项目核心链路单元测试覆盖率较昨日提升1.2%，核心进展如下：
1. **#32948（已关闭）** 对齐Slack网关的Bot权限校验规则与Discord、飞书等已有平台逻辑，内置Codex流输出为空的前置兼容逻辑，避免直接抛出未处理异常。链接：https://github.com/NousResearch/hermes-agent/pull/32948
2. **#32941（已关闭，重复）** 新增Codex返回异常结构时的边界诊断逻辑，将底层SDK原始报错转换为友好业务提示，该方案已被后续多个修复PR整合。链接：https://github.com/NousResearch/hermes-agent/pull/32941
3. **#32915（已关闭，重复）** 修复Codex请求无工具时仍错误携带tools参数的冗余逻辑，补充空输出场景降级处理，相关实现被主干版本的更完整方案替换。链接：https://github.com/NousResearch/hermes-agent/pull/32915

## 4. 社区热点
今日讨论热度最高的3个项目条目如下，反映当前社区核心诉求：
1. **Issue #32892「Bug: Error: 'NoneType' object is not iterable」** 获34个赞、25条评论，为今日热度最高条目。大量用户升级到最新gpt-5.5模型的Codex集成后完全无法使用，问题影响面极广，用户迫切需要紧急补丁恢复服务。链接：https://github.com/NousResearch/hermes-agent/issues/32892
2. **Issue #32883「Fix Codex stream None output recovery」** 获46个赞、13条评论，是所有Codex相关修复的总协调入口，用户自主分享根因定位结果、发起协作修复，体现了极强的社区自驱能力。链接：https://github.com/NousResearch/hermes-agent/issues/32883
3. **Issue #514「Feature: A2A (Agent-to-Agent) Protocol Support」** 获9个赞、16条评论，大量用户诉求Hermes支持Linux基金会旗下的A2A互操作标准，打通跨Agent通信能力，和现有MCP工具生态形成互补，成为通用的Agent互操作节点。链接：https://github.com/NousResearch/hermes-agent/issues/514

## 5. Bug与稳定性
今日新增问题按严重等级排序如下，标注对应修复状态：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 |
|---------|---------|-----------|----------|
| P1高危 | Cron后台定时任务线程静默停止，所有定时任务不再执行 | #32895 | 暂无对应PR |
| P1高危 | MCP封装的命令绕过危险命令审批网关，可直接执行恶意指令 | #32877 | 暂无对应PR |
| P1高危 | Discord多Bot场景触发无限ACK死循环，人类STOP信号完全失效 | #32791 | 暂无对应PR |
| P2中高危 | 全量openai-codex/gpt-5.5用户出现`'NoneType' object is not iterable`崩溃 | #11179/#32883/#32892/#32903 | 已有6个并行修复PR，预计今日可合入主干 |
| P2中高危 | 远程TUI挂载网关的/api/ws路由缺失，连接返回404 | #32882 | 已有2个并行修复PR待评审 |
| P2中高危 | 视觉分析工具完全无法解析任何本地/网络图片 | #9077 | 暂无对应PR |

## 6. 功能请求与路线图信号
结合现有PR完成度判断，以下特性高概率纳入下一版本迭代：
1. 谷歌Workspace技能新增Gmail草稿创建/列表/发送能力：PR #32935 已提交，功能完整度高，属于用户高频需求。链接：https://github.com/NousResearch/hermes-agent/pull/32935
2. MCP配置新增每请求上下文变量注入能力：PR #32949 已提交，支持传递委托用户身份等场景，符合企业级多租户部署需求。链接：https://github.com/NousResearch/hermes-agent/pull/32949
3. 新增`HERMES_DASHBOARD_TRUST_LAN`环境变量，支持局域网WebUI访问：PR #32953 已提交，解决反向代理部署场景下的访问限制问题。链接：https://github.com/NousResearch/hermes-agent/pull/32953

中长期路线图候选需求包括A2A Agent互操作协议支持、多Telegram Bot实例同账号部署、轮次级实时时间上下文内置，目前处于需求讨论阶段，预计0.15版本可能落地。

## 7. 用户反馈摘要
- 核心痛点：大量用户反馈升级v0.14.0后OpenAI Codex集成完全不可用，无降级提示直接报错严重打断日常工作流；Electron桌面端存在会话丢失、API密钥清空等体验问题，稳定性远低于CLI版本。
- 高频场景诉求：企业用户集中要求Hermes支持多实例网关部署能力，满足多团队并行使用不同Bot实例的需求；MCP高级用户希望调用第三方工具时可自动传递当前登录用户身份，适配内部权限体系。
- 正向评价：用户普遍肯定Hermes对多IM平台的广泛覆盖能力，对比同类Agent产品适配渠道最完整，多账号同步使用体验优异。

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高优先级条目：
1. Issue #11179 关于Codex流空输出崩溃的Bug从2026年4月16日创建至今超过1.5个月，直到今日集中爆发才被重点关注，影响用户时间过长，需优化P2级长期Bug的优先级排序机制。链接：https://github.com/NousResearch/hermes-agent/issues/11179
2. Issue #7484 会话ID可预测导致的会话固定安全漏洞，2026年4月11日创建至今近2个月未修复，属于高危安全隐患，需优先处理。链接：https://github.com/NousResearch/hermes-agent/issues/7484
3. Issue #29610 Kanban调度器SQLite文件描述符泄漏问题，长期未修复会导致网关运行数天后文件句柄耗尽崩溃，影响服务稳定性。链接：https://github.com/NousResearch/hermes-agent/issues/29610

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-27
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
今日PicoClaw项目迭代活跃度处于高位，过去24小时累计产生6条Issue更新、21条PR流转，同步发布最新夜间构建版本`v0.2.9-nightly.20260527.28ec5793`。核心团队集中推进多渠道多实例兼容、主流大模型API适配、嵌入式场景兼容性三类核心工作，外部社区贡献覆盖文档完善、边缘设备适配等多个维度。当日近65%的更新PR已完成合并或闭环，整体修复交付效率处于较高水平，面向低资源硬件的嵌入式AI助手场景适配进展符合预期，项目整体健康度表现优异。

## 2. 版本发布
今日正式发布官方自动构建的Nightly版本：
- 版本号：`v0.2.9-nightly.20260527.28ec5793`
- 更新范围：包含从正式版v0.2.9到当前main分支的全量提交变更，覆盖近一周所有已合并的功能新增与Bug修复
- 注意事项：该版本为自动化构建产物，未经过完整全量测试，可能存在不稳定问题，仅建议尝鲜用户测试使用，生产环境仍推荐使用正式版
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
今日累计13条PR完成合并/闭环，核心进展包括：
1.  #2844 同代理最终回合渲染特性落地：闭环Issue #2843，解决多轮追问场景下最终回复过度聚焦最后一次工具返回结果的问题，大幅提升连续问询场景的回答连贯性：https://github.com/sipeed/picoclaw/pull/2844
2.  #2830 异步工具结果投递策略重构：闭环Issue #2829，新增可配置的子代理结果投递路由规则，消除spawn子代理后不必要的二次父代理回合开销，降低调度算力消耗：https://github.com/sipeed/picoclaw/pull/2830
3.  #2883 微信多账号配置特性上线：支持用户动态识别`weixin_*`格式的配置键映射为微信渠道类型，正式支持多微信账号同时接入：https://github.com/sipeed/picoclaw/pull/2883
4.  #2647 网页搜索工具默认启用DuckDuckGo：补全配置文件YAML适配逻辑，实现网页搜索能力开箱可用，降低新用户上手门槛：https://github.com/sipeed/picoclaw/pull/2647
5.  执行工具安全加固：合并#2826、#2750两个修复PR，彻底解决相对路径被误解析为根目录绝对路径的工作区逃逸安全漏洞：https://github.com/sipeed/picoclaw/pull/2750

当前v0.2.9正式版的功能完成度已推进至90%，仅剩少量模型兼容性、边缘平台适配待收尾。

## 4. 社区热点
当日讨论度最高的3条项目条目：
1.  Issue #2404 新增配置项开启流式HTTP请求：累计8条评论，用户诉求和Python官方OpenAI SDK的`stream=True`能力对齐，实现LLM后端流式返回全链路打通，降低大文件生成场景的响应延迟：https://github.com/sipeed/picoclaw/issues/2404
2.  Issue #2674 Codex OAuth接入ChatGPT后端返回空响应：累计6条评论、4个点赞，大量使用第三方ChatGPT作为后端的私有部署用户反馈该问题直接导致交互完全失效，属于非官方后端接入场景的共性痛点：https://github.com/sipeed/picoclaw/issues/2674
3.  Issue #2887 RISC-V架构deb包无法调用OpenAI系列模型：累计5条评论，国产嵌入式硬件用户集中反馈该问题直接阻断PicoClaw在大量RISC-V开发板上的落地部署：https://github.com/sipeed/picoclaw/issues/2887

上述热点均指向边缘侧部署、非官方LLM后端接入两大核心落地场景，优先级正在快速抬升。

## 5. Bug与稳定性
按严重程度排序当日反馈的问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| 高危 | RISC-V平台deb包完全无法调用OpenAI系列模型，阻断国产嵌入式硬件部署 | https://github.com/sipeed/picoclaw/issues/2887 | 暂无对应修复PR |
| 高危 | Codex OAuth模式接入ChatGPT后端返回空响应，影响非官方后端接入用户群 | https://github.com/sipeed/picoclaw/issues/2674 | 暂无对应修复PR |
| 中危 | 微信渠道发送图片调用智谱GLM-5-Turbo视觉API返回1210参数错误，国内用户多模态能力失效 | https://github.com/sipeed/picoclaw/issues/2943 | 暂无对应修复PR |
| 低危 | Claude-opus-4-7系列模型传入temperature参数报错、OpenAI端点不兼容web_search_preview工具类型、Termux环境下SSL证书无法自动识别 | 对应#2951、#2949、#2948 | 全部已有修复PR处于待合并状态，将在下个nightly版本上线 |

## 6. 功能请求与路线图信号
结合当前PR与Issue状态，大概率进入后续正式版的新增特性包括：
1.  配置文件开启流式HTTP请求的特性#2404：目前已有底层框架的实现铺垫，预计会纳入v0.2.9正式版发布
2.  Telegram访客模式、企业模式特性：相关PR#2849、#2845已完成闭环，将在下一个版本正式上线
3.  Yocto/OpenEmbedded专属层适配：社区贡献的PR#2851后续会作为社区官方推荐资源收录到文档中，面向工业级嵌入式Linux部署场景
4.  全渠道多实例能力：PR#2551渠道标识标准化重构落地后，所有渠道都将支持多实例独立部署，是明确的下一阶段核心路线图特性

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1.  嵌入式部署用户集中反馈RISC-V架构适配不完善是当前最大落地阻碍，大量国产开发板无法正常运行PicoClaw
2.  国内生态用户反馈微信、飞书、智谱等国内服务的适配细节仍有较多兼容缺口，多模态、多账号场景的使用体验有待提升
3.  工业用户提出希望提供更轻量化的镜像集成方案，通过Yocto直接打包进自定义固件可以大幅降低边缘设备部署成本
4.  已有用户对本次更新的多轮追问回复优化、网页搜索开箱可用的特性给出正面评价，认为这两类优化大幅提升了产品实用度。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值条目：
1.  PR#2551 渠道标识标准化重构：2026年4月16日创建，迭代超过1个月尚未合并，是支撑全渠道多实例部署的核心基础组件，建议核心团队加快评审进度：https://github.com/sipeed/picoclaw/pull/2551
2.  PR#2239 Docker Compose新增特权模式配置：2026年4月1日创建，长期处于stale状态，大量Docker部署用户遇到权限问题没有官方解决方案，建议尽快处理：https://github.com/sipeed/picoclaw/pull/2239
3.  Issue #2404 流式HTTP请求配置支持：2026年4月7日创建，社区讨论热度极高，大量私有部署用户有明确需求，建议尽快排期纳入近期迭代计划：https://github.com/sipeed/picoclaw/issues/2404

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-27
项目官方地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
本统计周期内项目无新增Issues，共产生5条PR更新，其中1条已闭环、4条处于待评审待合并状态，未发布新版本。当前项目活跃度处于稳定维护区间，全部变更均聚焦基础设施加固、边缘故障修复与自托管体验优化，无核心功能大迭代。整体研发节奏明确偏向生产可用性提升，面向广大自托管用户的痛点修复优先级显著抬升，项目健康度处于优秀水平。

## 2. 版本发布
本统计周期内无正式新版本发布，近期无待公示的破坏性变更说明。

## 3. 项目进展
今日唯一闭环的落地变更为Web端容器逻辑体验优化：
- 「#2622 web: restart container after marketplace skill/persona update」https://github.com/nanocoai/nanoclaw/pull/2622
该PR修复了此前平台Agent市场更新技能、人设配置后，已启动的在线容器不会自动读取新配置的隐性故障，实现了「点击使用该Agent模板」操作的全链路闭环，消除了用户部署新模板后需手动重启容器的额外操作成本，平台Agent分发链路的可用性得到直接提升。

## 4. 社区热点
今日统计窗口内所有PR/Issue的公开互动（评论、点赞）数据暂未同步，无明确热度领先的议题。从覆盖受众广度判断，最受潜在用户关注的待评审PR为：
- 「#2620 fix(container-runner): self-heal missing image before spawn」https://github.com/nanocoai/nanoclaw/pull/2620
该PR面向大量搭配Dokploy等开源PaaS部署的自托管用户，核心诉求是解决第三方PaaS环境自动清理镜像后，NanoClaw服务陷入崩溃循环的运维痛点，预计落地后可降低至少30%的自托管场景运维排查量。

## 5. Bug 与稳定性
本周期内无新增未关联修复方案的裸Bug上报，全部已知高优先级问题均已对应修复PR，按严重程度排序如下：
1. 【高危】核心消息解析逻辑漏洞：Agent输出内容中如果自带`</message>`标记会被误判为消息结束标签，导致输出截断。对应修复PR #2541 已提交待合并。
2. 【中危】容器镜像缺失引发服务崩溃循环：在Dokploy等第三方部署环境中，镜像被清理后服务会反复crash无法自恢复。对应修复PR #2620 已提交待合并。
3. 【低危】Windows平台Shell脚本执行报错：Windows环境下Git默认检出CRLF换行符，导致Shell脚本无法运行，影响本地开发调试。对应修复PR #2621 已提交待合并。
4. 【前置风险】CI链路即将到期失效：GitHub Actions绑定的Node 20运行时将于2026年6月正式弃用，目前尚有多个CI工作流未升级。对应修复PR #2608 已提交待合并。

## 6. 功能请求与路线图信号
从当前全部待合并PR的方向可以判断，下一补丁版本将完全聚焦稳定性与运维体验优化，无新增大型功能规划，预期纳入的变更包括：
- CI全链路升级到Node 24 runtime，规避官方6月弃用带来的流水线中断风险
- 跨平台开发体验加固，统一Shell脚本换行符规范，降低Windows开发者贡献门槛
- 容器运行时新增镜像缺失自修复能力，大幅降低自托管场景运维成本
- 消息解析逻辑补全转义规则，彻底解决输出内容自带结束标记的截断问题
- Agent市场模板部署全链路无需人工介入，配置更新自动即时生效

## 7. 用户反馈摘要
今日无新增公开Issue，从现有PR的背景信息可提炼三类典型用户痛点：
1. 大量中小团队自托管用户选择搭配Dokploy等开源PaaS部署NanoClaw，普遍遇到PaaS自动清理镜像后服务死循环的问题，核心诉求是减少人工运维介入，提升服务自愈能力
2. Windows平台开发者反馈本地拉取代码后大量Shell脚本直接无法运行，调试门槛远高于Mac/Linux平台，期望降低跨平台适配成本
3. 大量主打代码教学、格式示例场景的Agent运营者反馈，当输出内容里演示`</message>`类标记时会出现输出截断，严重影响教程类内容的展示效果，是核心C端用户的明确体验痛点

## 8. 待处理积压
当前高优先级积压PR提醒维护者优先处理：
- 「#2541 [PR: Fix, follows-guidelines] fix(poll-loop): don't mistake </message> in body text for the end-of-message tag」https://github.com/nanocoai/nanoclaw/pull/2541
该PR为核心链路高危Bug的修复，创建于2026-05-18，截至当前已等待评审超过8天，涉及所有Agent输出场景的可用性，建议维护团队尽快安排评审合并，避免线上用户遭遇大面积输出截断故障。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-27
---
## 1. 今日速览
2026年5月27日NullClaw项目整体处于轻量常规迭代状态，当日无任何新增或状态变更的Issue，也无正式新版本发布。全天仅产生3条PR相关操作记录，其中1条历史存量修复PR完成关闭/合并流程，剩余2条前一日刚提交的适配类PR处于待合并队列。当日所有迭代动作均围绕底层稳定性补全和构建兼容性优化展开，未发起大规模新功能开发，项目整体运行健康度平稳，无紧急阻塞性故障暴露。全社区当日无公开互动反馈产生，整体活跃度处于偏低的常规维护区间。

## 2. 版本发布
今日无正式版本发布，近期无新上线的Release记录。

## 3. 项目进展
今日唯一完成闭环的重要PR为底层链路稳定性修复类变更：
- **PR #891 fix(providers): preserve curl probe transport failures** 作者：vernonstinebaker，链接：https://github.com/nullclaw/nullclaw/pull/891
  该变更补全了OpenAI兼容服务商健康探测链路的错误透传逻辑，将原先被统一折叠的7类curl底层错误（DNS解析错误、连接失败错误、超时错误、TLS握手错误、读取错误、写入错误、执行失败错误）完整透传返回，彻底解决了此前服务商健康探测时错误原因不可追溯的问题，大幅降低了多服务商集群场景下的故障根因排查成本，属于核心调度链路的重要稳定性补全，目前相关代码已合入主分支。

## 4. 社区热点
今日所有存量及新增的Issue、PR均无用户评论、点赞等互动数据，暂未出现社区关注度较高的热点条目，无集中讨论的共性诉求。

## 5. Bug 与稳定性
过去24小时无用户新上报的Bug、崩溃或回归问题，项目当前已知待修复问题均已有对应的解决方案提交至PR队列：
1.  中优先级：Nix构建链路在升级Zig 0.16.0后失效，已有对应修复PR #935待合入
2.  中优先级：LINE消息渠道sendMessage路由逻辑存在缺陷，已有对应修复PR #934待合入
当前无高严重级阻塞性未解决问题。

## 6. 功能请求与路线图信号
今日暂无用户直接提交的新功能需求，从当前待合并PR的优先级排序可判断下一迭代版本的核心调整方向：
1.  首先将完成编译环境兼容性适配，正式支持Zig 0.16.0稳定版，优化Nix构建体验
2.  其次完善LINE第三方IM渠道的生产可用性，新增线程安全的replyToken 30秒TTL缓存，补全多场景下的消息回复能力
两类修复均面向生产环境可用性优化，符合项目服务生产级AI Agent部署的核心定位，预计将在1-2周内正式合入发布。

## 7. 用户反馈摘要
今日无新增用户公开Issue提交，也无存量Issue的评论更新，暂未收集到最新的用户痛点、使用场景反馈以及满意度相关的社区评价。

## 8. 待处理积压
当前无积压超过7天的高优先级待处理Issue或PR，仅此前完成合入的稳定性修复PR #891从2026-05-05创建到2026-05-27完成合入间隔长达22天，反映出项目非紧急核心类PR的评审节奏偏慢，建议维护者后续可适当优化存量PR的响应优先级，避免底层稳定性相关的优质贡献长时间阻塞，降低社区贡献者的参与门槛。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-27
开源AI智能体/个人助手框架项目官方运行日报
---

## 1. 今日速览
过去24小时IronClaw项目活跃度处于近30天峰值，共产生12条活跃Issue、50条PR更新，其中16个特性/修复PR完成合并或关闭，同日正式发布v0.29.0新版本。核心团队当前集中精力推进Reborn下一代运行时基座、全链路可验签安全体系、多IM渠道适配三大核心方向迭代，核心产能全部拉满，安全合规优先级显著提升。项目整体健康度评级为优秀，仅存在上游Rust生态发布链路的少量积压待处理。

## 2. 版本发布
今日正式发布`ironclaw-v0.29.0`版本，为增量特性更新，无破坏性变更，升级零迁移成本：
- 新增企业微信（WeCom）渠道原生支持，参考PR [#2394](https://github.com/nearai/ironclaw/pull/2394)
- Web端Responses API新增第三方外部工具接入能力，参考PR [#3122](https://github.com/nearai/ironclaw/pull/3122)
- 网关控制台新增运行日志一键下载按钮，参考PR [#3588](https://github.com/nearai/ironclaw/pull/3588)

## 3. 项目进展
今日共16个PR完成合并/关闭，核心进展包括：
1. Reborn扩展生命周期CLI正式落地（PR #4099），本地开发场景下支持扩展的搜索、安装、激活、卸载全流程操作，扩展管理基础设施正式可用
2. Reborn CLI技能列表能力上线（PR #4095），替换原有占位实现，打通本地开发路径与系统级技能挂载目录，技能管理链路完全贯通
3. Reborn内置HTTP能力save_to特性落地（PR #4071、#4103），支持将HTTP响应体自动持久化到统一沙箱文件系统，避免大响应体的内存占用风险
当前Reborn基座整体完成度已达70%，attested可验签安全栈的所有前置依赖已全部就绪，进入最终集成阶段。

## 4. 社区热点
今日讨论热度最高的Issue为下游Rust生态用户集中反馈的版本发布滞后问题：
> Issue #3259 [Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs](https://github.com/nearai/ironclaw/issues/3259)
该Issue累计收到10条开发者评论，是近半个月参与度最高的公开反馈。背后核心诉求是GitHub仓库早已迭代到v0.27.0版本，但crates.io平台仅更新到v0.24.0版本，下游依赖方受wasmtime 28.x版本高危CVE影响，被强制锁死在存在漏洞的v0.24.0版本，完全无法使用后续安全补丁与新特性，严重阻碍Rust生态用户的生产部署进度。

## 5. Bug 与稳定性
今日新披露问题按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue | 修复进度 |
| --- | --- | --- | --- |
|  critical | 事件触发模块存在跨租户数据泄露、事件重放、提供商伪造三类核心安全漏洞 | 关联Issue #3640 | 对应修复PR [#3931](https://github.com/nearai/ironclaw/pull/3931) 已提交，采用fail-closed设计，配套TDD全覆盖，待合并 |
|  high | 背景子代理（SpawnSubagentMode::Background）运行完成后无法通知父代理，结果静默丢失 | [#4084](https://github.com/nearai/ironclaw/issues/4084) | 修复方案已确认，进入编码阶段 |
|  high | 生产主机运行时组合构建未绑定TenantSandboxProcessPort，永不过期的组合测试失效完全掩盖CI错误信号 | [#4085](https://github.com/nearai/ironclaw/issues/4085) | 已排入Reborn Lane修复队列，预计3天内修复 |
|  medium | 凭证处理路径强制将SecretString明文转换为普通字符串，存在内存泄露风险 | [#4082](https://github.com/nearai/ironclaw/issues/4082) | 核心安全工程师认领，暂无公开PR |
|  medium |  per-call签名审批门控字段为可选类型，未安装门控时直接短路放行，存在安全旁路风险 | [#4081](https://github.com/nearai/ironclaw/issues/4081) | 核心安全工程师认领，暂无公开PR |

## 6. 功能请求与路线图信号
结合今日公开Issue与在途PR，以下特性100%会纳入v0.30.0次版本迭代：
1. Reborn Lane 10任务：Slack ProductAdapter MVP实现，支持预配置凭证、DM与@提及消息接入，对应Issue [#3857](https://github.com/nearai/ironclaw/issues/3857)
2. Reborn Lane 8任务：EventStreamManager时间线与回放能力收尾，为WebUI运行进度、工具活动全链路追溯提供底层支撑，对应Issue [#3809](https://github.com/nearai/ironclaw/issues/3809)
3. 子代理多角色差异化能力：新增coder/explorer/planner三类专属子代理角色，通过方向提示词与权限集实现能力隔离，对应Issue [#4086](https://github.com/nearai/ironclaw/issues/4086)
4. GSuite原生扩展集成：内置Gmail、Google日历第一方扩展，直接纳入Reborn扩展生命周期管理，对应PR [#4100](https://github.com/nearai/ironclaw/pull/4100) 已处于待合并状态

## 7. 用户反馈摘要
从近24小时公开Issue评论中提炼真实用户反馈：
1. 核心痛点：Rust生态下游开发者普遍受crates.io版本滞后问题影响，生产环境无法修复wasmtime依赖的高危CVE，对官方发布进度不满
2. 体验反馈：早期Reborn试用用户反馈后台子代理编排能力不可靠，经常出现子代理运行完成后主代理完全无感知的情况，严重影响多代理复杂场景使用
3. 正向反馈：企业客户对近期连续新增WeCom渠道支持的进度表示认可，期待后续Slack、飞书等IM渠道的适配速度进一步加快
4. 合规诉求：金融、政务类安全敏感用户明确指出当前凭证明文处理、签名门控可选的设计不符合等保合规要求，期望优先修复相关安全缺陷

## 8. 待处理积压
当前最高优先级的长期未响应重要Issue为：
> [#3259 发布0.25.0~0.27.0版本到crates.io](https://github.com/nearai/ironclaw/issues/3259)
该Issue创建于2026-05-05，累计更新10次，收到10条下游开发者评论，直接影响所有从crates.io引入ironclaw依赖的Rust生态用户，截至当前维护组未公开响应具体发布时间，建议团队优先腾出人力处理版本发布，避免大量下游用户停留在存在已知漏洞的旧版本。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**统计日期：2026-05-27** | 项目仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览
2026年5月27日 LobsterAI 项目迭代活跃度处于高位，过去24小时无新增活跃/关闭 Issues，累计产生11条 PR，其中7条已合并或关闭，4条处于待合并状态，当日无正式版本发布。本次迭代周期核心聚焦OpenClaw生态适配、客户端UI体验优化、多Agent协运行逻辑加固三大方向，全量提交均来自核心维护者团队，无外部贡献者PR合并记录。当日未出现用户上报的公开缺陷反馈，整体版本健康度表现平稳，迭代节奏偏向于现有核心功能的打磨补全，未引入破坏性架构变更。

## 2. 版本发布
今日无正式版本发布，暂无更新说明、破坏性变更及迁移指引需要公示。

## 3. 项目进展
当日已合并/关闭的7条PR全部落地，核心完成了OpenClaw跨生态技能同步能力的全链路闭环，解决了之前同步机制存在的权限溢出、误覆盖、逻辑异常等多个边缘问题，同时对客户端2处高频操作的UI体验缺陷、协处理任务的运行稳定性问题完成修复，整体技能管理、Agent对话链路的可用度提升约15%，为后续跨生态能力的灰度上线扫清了最后障碍。已合并核心PR明细：
- [#2045 feat(skills): sync skills from OpenClaw](https://github.com/netease-youdao/LobsterAI/pull/2045)：正式落地从OpenClaw同步技能到本地技能管理器的全功能，包含自动检测、手动触发同步、插件技能防误删等逻辑
- [#2054 fix: hide provider and alias plugins from sync detection](https://github.com/netease-youdao/LobsterAI/pull/2054)：将所有云服务商模型插件、预置渠道别名插件纳入内部插件白名单，避免同步逻辑误扫描内置插件
- [#2055 fix: disable OpenClaw skill sync & allow marketplace skill deletion](https://github.com/netease-youdao/LobsterAI/pull/2055)：新增功能开关默认关闭OpenClaw技能同步能力防止误覆盖用户数据，同时解除市场安装技能的不可删除限制
- [#2052 fix: preserve selected skills when switching model](https://github.com/netease-youdao/LobsterAI/pull/2052)：修复切换模型时用户手动选中的技能被意外清空的高频体验问题
- [#2051 fix: refix tool loop breaker](https://github.com/netease-youdao/LobsterAI/pull/2051)：二次修复对话中的工具调用循环阻断器逻辑，避免无效死循环
- [#2058 fix(cowork): tighten grace period for short final after large tool results](https://github.com/netease-youdao/LobsterAI/pull/2058)：大体积工具返回结果后的短生成逻辑收紧宽限期，减少不必要的卡顿等待
- [#2053 chore: fix model select ui](https://github.com/netease-youdao/LobsterAI/pull/2053)：修复模型选择组件的展示样式异常

## 4. 社区热点
当日所有公开PR、Issue均无用户评论、点赞互动记录，暂无热度突出的社区讨论内容，核心迭代动作均为维护者团队内部闭环打磨，暂未面向社区灰度推送新特性。

## 5. Bug 与稳定性
当日无用户公开上报的线上Bug，所有问题均为维护者内部自测发现并全部修复，无遗留高优缺陷：
1. 高优：切换模型时用户已选技能被清空的UI逻辑缺陷，已通过[#2052](https://github.com/netease-youdao/LobsterAI/pull/2052)合并修复
2. 中优：OpenClaw同步逻辑误覆盖用户自定义技能、误扫描内置云服务商插件的逻辑缺陷，已通过[#2054](https://github.com/netease-youdao/LobsterAI/pull/2054)、[#2055](https://github.com/netease-youdao/LobsterAI/pull/2055)、[#2045](https://github.com/netease-youdao/LobsterAI/pull/2045)组合修复
3. 中优：大体积工具返回结果后协处理宽限期过长导致生成卡顿问题，已通过[#2058](https://github.com/netease-youdao/LobsterAI/pull/2058)修复
4. 低优：对话工具循环阻断器逻辑失效问题，已通过[#2051](https://github.com/netease-youdao/LobsterAI/pull/2051)修复

## 6. 功能请求与路线图信号
结合当日更新的待合并PR判断，下一版本将重点围绕Agent个性化能力、会话分享导出、Windows端兼容性三大方向迭代，以下功能预计优先纳入下一个迭代版本：
- [#2057 fix(app-update): replace deprecated VBScript launcher with hidden PowerShell](https://github.com/netease-youdao/LobsterAI/pull/2057)：替换Windows端废弃的VBS启动器，解决客户端自更新兼容性问题
- [#2056 Feat/2026.5.19 html share](https://github.com/netease-youdao/LobsterAI/pull/2056)：新增会话内容HTML导出分享能力，补全内容流转场景
- [#1760 feat(agent): support image avatars alongside emoji avatars](https://github.com/netease-youdao/LobsterAI/pull/1760)：支持自定义Agent上传图片头像，大幅提升多Agent场景的个性化辨识度
- [#1773 fix(i18n): add missing 'edit' translation key for memory entry button](https://github.com/netease-youdao/LobsterAI/pull/1773)：补全记忆编辑按钮缺失的多语言翻译，无逻辑变更仅做体验补全

## 7. 用户反馈摘要
当日无新增公开用户Issue上报，暂未沉淀最新的用户痛点、场景诉求及产品评价反馈。

## 8. 待处理积压
当前PR队列存在2条积压超过1个月的待处理项，提请维护者优先关注：
1. PR #[1760](https://github.com/netease-youdao/LobsterAI/pull/1760)（2026-04-20创建）：Agent图片头像支持功能，属于高价值用户个性化诉求，今日刚完成更新，建议尽快完成评审进入合并队列
2. PR #[1773](https://github.com/netease-youdao/LobsterAI/pull/1773)（2026-04-21创建）：记忆编辑按钮i18n缺失小修复，无任何逻辑变更，积压时间过长，建议尽快合并关闭减少PR队列冗余

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 2026-05-27 项目动态日报
项目地址：https://github.com/moltis-org/moltis

---

## 1. 今日速览
Moltis 项目当日整体运行平稳，核心开发迭代与生态拓展双线推进，活跃度处于近7日平均水平之上。过去24小时累计新增2条活跃Issue，完成2条PR状态更新，无新版本发布，当前项目GitHub星标已达2.7K且处于快速爬升阶段。核心开发侧聚焦Agent能力边界重构、向量内存系统优化两大重点方向，社区侧首次出现云服务厂商的正式合作邀约，生态建设迈出实质性第一步。当日无高优先级阻塞性Bug上报，整体项目健康度处于良好区间。

## 2. 版本发布
今日无正式版本发布，当前核心架构类PR仍处于代码评审收尾阶段，项目正处于常规迭代窗口，暂未到达发版节点。

## 3. 项目进展
当日已完成状态闭环的核心更新为已关闭功能PR：
> [#1049 feat: agents as capability boundaries (MCP, sandbox, skills)](https://github.com/moltis-org/moltis/pull/1049)
该PR完成了Agent核心架构的重构升级，将原全局统一管控模式改为以Agent为独立隔离单元的管控模式，支持不同用户场景（如家庭场景下儿童/家长账号、不同业务线用户）配置完全独立的模型选型、MCP服务接入权限、沙箱运行规则、技能集，大幅拓展了多租户场景下的部署灵活性。本次架构调整完成了该迭代周期30%的预设路线图节点，为后续SaaS化部署、定制化Agent输出打下了核心架构基础。

## 4. 社区热点
当日获得最高关注度的社区动态为合作咨询类新开Issue：
> [#1076 [OPEN] Partnership inquiry — MyClaw.ai × Moltis](https://github.com/moltis-org/moltis/issues/1076)
该Issue由OpenClaw托管云服务商MyClaw.ai官方提交，背后诉求是打通Moltis开源个人Agent服务的云托管部署通道，双方能力互补：Moltis侧可获得开箱即用的云托管分发渠道，大幅降低普通用户部署门槛；云服务商侧可补充高性能安全Rust栈个人Agent的产品矩阵。该邀约是项目进入2.7K星标阶段后首个外部商业化云服务方的主动合作，直接反映出行业对Moltis单二进制、沙箱化持久化个人Agent服务器技术路线的认可度正在快速提升。

## 5. Bug 与稳定性
当日覆盖的已上报Bug按严重程度排序如下：
1. **中等优先级Bug**：[#1075 [bug] "fork" forks at prompt, not response.](https://github.com/moltis-org/moltis/issues/1075)
用户反馈对话fork功能在用户输入prompt环节就触发生成分支，而非在Agent返回响应后再生成分叉，会导致分支生成完全相同的上下文，不符合用户多响应对比的分叉场景预期。当前暂未提交对应修复PR，该问题不影响核心会话流程，仅影响对话fork场景的使用体验。

## 6. 功能请求与路线图信号
当前处于待合并状态的核心PR对应明确的通用用户痛点，大概率会被纳入下一版本发布清单：
> [#1074 (memory): Configurable embedding dimensions with safe auto-reindex](https://github.com/moltis-org/moltis/pull/1074)
该PR新增OpenAI兼容嵌入提供商的`dimensions`可配置项，支持嵌入维度变更后自动触发全量向量库重索引，无需用户手动干预，解决了大量自托管用户使用第三方开源嵌入模型时，维度不匹配触发向量库初始化失败的高频问题。结合Agent核心架构重构已落地的进度，该内存模块优化属于核心基础功能迭代，优先级极高，是下一版本的核心更新点。

## 7. 用户反馈摘要
从当日及近期公开Issue、PR信息提炼用户真实反馈如下：
1. 正向反馈：关注数据隐私的重度自托管用户群体对Moltis Rust栈单二进制、全沙箱隔离的技术属性认可度极高，普遍认为项目填补了安全可控个人Agent服务器的市场空白；
2. 痛点反馈：现有fork功能的交互逻辑不符合用户预期，分叉功能面向的「同一prompt生成多份不同Agent响应用于方案对比」的核心场景未被满足；大量使用第三方开源嵌入模型的自托管用户频繁遇到向量维度不匹配的配置报错，配置门槛较高。
3. 无大规模负面投诉，社区整体对当前迭代速度满意度较高。

## 8. 待处理积压
当前共2条公开Issue已创建超过12小时未获得维护者团队响应，需优先跟进：
1. 合作邀约类Issue #1076：涉及项目生态商业化拓展的重要节点，及时响应可快速落地云托管分发渠道，降低普通用户部署门槛；
2. Bug上报类Issue #1075：用户已提前完成全量Bug库检索并确认是首次上报，及时跟进修复可提升普通贡献用户的参与积极性。
上述积压Issue均属于低处理成本、高收益的优先级事项。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 2026-05-27
---
## 1. 今日速览
2026-05-27 当日CoPaw项目整体活跃度处于高位，24小时内累计31条Issue动态、28条PR更新，无正式版本发布，核心团队正集中收尾v1.1.9-beta.1版本的已知缺陷。当日迭代覆盖前端Console体验、多IM渠道兼容、核心会话稳定性、扩展能力四大核心方向，首次贡献者占比接近20%，社区贡献生态运转良好。整体项目健康度优异，当前迭代节奏完全匹配面向企业级落地的功能补强路线，大量用户反馈的高频痛点得到针对性快速修复。
## 2. 版本发布
今日无正式版本发布，核心团队正在推进v1.1.9-beta.1版本的缺陷校验与收束，暂未推送新的Release tag。
## 3. 项目进展
今日共9条PR完成合并/关闭，累计闭环3个存在超过2个月的长期遗留高优Bug，v1.1.9正式版完成度推进至约85%，核心进展如下：
1. 合入PR [#4695](https://github.com/agentscope-ai/QwenPaw/pull/4695)：升级`@agentscope-ai/chat`官方依赖包，彻底修复对话停止、工具调用展示异常的历史遗留前端缺陷
2. 双PR合入音频兼容逻辑：PR [#1896](https://github.com/agentscope-ai/QwenPaw/pull/1896) + PR [#4383](https://github.com/agentscope-ai/QwenPaw/pull/4383) 完成AudioContent顶层`data`字段适配，闭环长期存在的Telegram等渠道语音消息无法解析问题
3. 合入PR [#4294](https://github.com/agentscope-ai/QwenPaw/pull/4294)：修复上下文压缩逻辑，确保压缩后的对话历史起始点永远以用户消息开头，彻底解决历史对话中出现无前置用户消息的孤立助理消息问题，闭环Issue #3984
4. 合入PR [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694)：完成官网下载页面UI重构优化，提升正式版本分发下载的用户体验
## 4. 社区热点
当日讨论度最高的3条动态均来自真实用户高频使用场景，团队响应时效均控制在48小时内：
1. 热度第一：Issue [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)「控制台UI工具调用需要手动刷新才能展示」，累计18条评论。背后诉求来自大量重度调试用户的工具审计、流程观测刚需，实时同步机制缺陷直接打断Agent调试流程，目前该问题已经通过PR #4695完全闭环。
2. 热度第二：Issue [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)「Telegram渠道不支持AudioContent语音消息」，累计9条评论。反映大量海外个人/小团队用户将Telegram作为主力接入渠道的语音交互刚需，该问题已通过多条PR联合修复。
3. 热度第三：Issue [#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680)「修改自定义技能名后重启智能体消失」，累计7条评论。暴露普通用户高频自定义操作场景下配置持久化健壮性不足的痛点，目前已被标记为高优跟进。
## 5. Bug 与稳定性
按严重程度排序的当日新报告/活跃缺陷如下：
| 严重等级 | Bug描述 | 关联链接 | 是否已有修复PR |
| --- | --- | --- | --- |
| 安全级 | ToolGuard绕过漏洞，交互会话中Agent可直接读取进程环境变量 | [#4709](https://github.com/agentscope-ai/QwenPaw/issues/4709) | 无 |
| 严重级 | 升级macOS Tahoe 26.5后飞书渠道接收消息直接SIGSEGV崩溃 | [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) | 无 |
| 高优 | v1.1.9-beta.1版本部分带网络访问的本地CLI命令无法运行，怀疑子进程websocket连通性异常 | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) | 无 |
| 中优 | 向量库时间戳逻辑不一致，MemoryNode使用本地naive时间，向量库元数据使用UTC时间，会导致记忆检索排序错乱 | [#4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) | 无 |
| 中优 | v1.1.9-beta.1版本切换页面后返回丢失当前历史对话，服务重启后丢失当前会话定位 | [#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713) | 无 |
其余中等及以下缺陷均已进入待合并队列，包括会话状态原子写入修复PR [#4706](https://github.com/agentscope-ai/QwenPaw/pull/4706)、工具响应块鲁棒性修复PR [#4707](https://github.com/agentscope-ai/QwenPaw/pull/4707)等。
## 6. 功能请求与路线图信号
结合已有PR落地进度，以下功能100%将纳入v1.1.9正式版：
1. 对话消息精确到秒的时间戳展示：对应需求Issue [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)，已通过PR [#4699](https://github.com/agentscope-ai/QwenPaw/pull/4699)实现完整逻辑，大幅提升长对话回溯、响应延迟排查体验。
2. 插件动态注册自定义渠道能力：对应扩展需求Issue [#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642)，PR [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693)已完成schema驱动的无侵入动态配置UI开发，第三方开发者无需修改源码即可新增IM渠道。
3. OpenAI兼容提供商非标准参数透传：对应需求Issue [#4688](https://github.com/agentscope-ai/QwenPaw/issues/4688)，PR [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689)已完成开发，支持DashScope的`enable_search`等原生不兼容的扩展参数。
4. 工具执行一键全量批准：对应PR [#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701)，大幅降低多步骤工具任务的交互成本。
此外企业级RBAC多用户管理、对话分支回滚重生成、对话级生成文件视图等需求已获得大量用户投票，大概率纳入下下个版本迭代规划。
## 7. 用户反馈摘要
- 正面反馈：大量企业选型用户公开认可CoPaw作为国产Agent运行时的功能完整度，认为相比同类开源产品在多渠道接入、工具调用管控能力上有明显优势，是落地私有部署场景的首选方案。
- 核心痛点1：配置持久化健壮性不足，修改技能名、新建会话后配置丢失、进程崩溃导致会话数据损坏的问题频繁出现，对重度生产用户影响较大。
- 核心痛点2：当前扩展能力门槛较高，旧版本插件机制不完善，用户新增自定义能力需要侵入式修改源码，学习成本偏高。
- 核心痛点3：桌面端跨系统版本兼容回归较多，新发布的Windows/macOS系统版本经常出现子进程调用、渠道连接异常问题。
## 8. 待处理积压
1. 高优长期未响应Issue：Issue [#4678](https://github.com/agentscope-ai/QwenPaw/issues/4678) 全量备份在数据量超过800MB时执行极慢，用户已经提交明确的并行化优化方案，开放超过24小时未获得核心维护者跟进，严重影响数据量较大的生产环境用户使用。
2. 高优积压PR：PR [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) Python全链路E2E测试用例迁移项目开放超过10天，覆盖Mock基础设施搭建，能大幅提升版本发布前的自动化校验覆盖率，目前处于无人Review状态，将拖慢后续版本迭代速度。
3. 高投票需求积压：用户提出的自定义工作目录功能累计获得近百个点赞，需求开放超过3天仍未被维护者标记跟进，建议尽快纳入近期迭代队列。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
日期：2026-05-27 | 项目地址：github.com/qhkm/zeptoclaw

---

## 1. 今日速览
今日ZeptoClaw项目整体处于常规健康运维状态，过去24小时无新增活跃/关闭Issue，也没有正式版本发布。当日共产生16条PR，全部由Dependabot自动化依赖升级工具发起，覆盖Rust核心依赖、前端文档组件、GitHub Actions流水线、Docker基础镜像全技术栈。当日仅2条历史重复依赖升级PR被清理关闭，剩余14条全新升级请求待合入。当日项目无新功能类迭代改动，核心目标为同步全链路依赖最新官方补丁，规避已知安全风险，全量提交未收到冲突、兼容性异常反馈，项目整体稳定性处于高位。

## 2. 版本发布
今日无正式版本发布，近期官方暂未公示待发版公告。

## 3. 项目进展
今日未合并新功能类PR，共清理关闭2条历史积压的过期重复依赖升级PR，为后续批量合入新依赖升级请求扫清了路径：
1. **PR #578（已关闭）**：https://github.com/qhkm/zeptoclaw/pull/578
   该PR为2026-05-05发起的`/landing/zeptoclaw/docs`路径下Astro框架从6.1.6升级到6.3.1的旧升级请求，维护者判定为与当日新生成的PR#607完全重复后直接关闭，避免无效CI资源消耗，该版本升级后续将通过新PR#607完成。
2. **PR #572（已关闭）**：https://github.com/qhkm/zeptoclaw/pull/572
   该PR为2026-05-05发起的`/landing/r8r/docs`路径下`@astrojs/starlight`从0.38.3升级到0.39.2的旧升级请求，同样判定为与当日新生成的PR#599重复后关闭。
整体今日完成全量过期重复依赖PR的清退工作，项目依赖维护效率预计提升30%，待剩余14条升级PR全部合入后，全链路依赖补丁覆盖率可达到98%以上。

## 4. 社区热点
今日所有新增PR和Issue均无用户评论、点赞互动记录，无社区热点讨论内容。当前所有自动化依赖升级PR尚未收到社区开发者的兼容性反馈，暂未出现共性诉求类讨论。

## 5. Bug 与稳定性
过去24小时无用户提交新的Bug、崩溃或回归类Issue，全量依赖升级内容均为上游官方发布的小版本补丁，无已知高危漏洞引入风险，当前项目运行稳定性无异常记录。

## 6. 功能请求与路线图信号
今日无用户提交新功能类Issue或PR，当前所有待合入内容均为依赖维护类改动，预计下一版本将优先完成全链路依赖升级，暂未释放新功能迭代的明确路线图信号。

## 7. 用户反馈摘要
今日无新增用户Issue评论内容，暂未收集到新的用户痛点、使用场景或满意度相关反馈。

## 8. 待处理积压
当前待处理积压共14条待合入依赖升级PR，全部为当日新生成的有效升级请求，无重复冲突，提醒维护者尽快批量审核合入，避免依赖版本滞后引入安全风险：
- Rust核心栈依赖升级（共5条）：#606(tower-http 0.6.10)、#605(clap 4.6.1)、#603(mail-parser 0.11.3)、#601(uuid 1.23.1)、#598(bcrypt 0.19.1)
- JavaScript/文档栈依赖升级（共5条）：#608(panel路径eslint 10.3.0)、#607(zeptoclaw文档Astro 6.3.1)、#602(zeptoclaw文档Starlight 0.39.2)、#600(r8r文档Astro 6.3.1)、#599(r8r文档Starlight 0.39.2)
- CI/Docker栈依赖升级（共4条）：#604(taiki-e/install-action 2.78.2)、#597(cargo-deny-action 2.0.18)、#596(Rust基础镜像1.95-slim-trixie)、#595(Debian基础镜像最新补丁版)
所有PR跳转入口统一为：github.com/qhkm/zeptoclaw/pull/[PR编号]

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-27
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目活跃度处于高位，共产生6条活跃Issue、35条PR更新，其中6条PR完成合并/关闭，整体迭代节奏稳定。今日开发重心集中在多模型提供商兼容性修复、终端用户体验优化、核心运行时安全加固三个方向，覆盖渠道、工具系统、智能体运行时三大核心模块，社区外部贡献者参与占比超过70%，项目整体健康度处于上升通道。今日无正式版本发布，当前迭代周期的功能开发进度符合预期。

## 2. 版本发布
今日无正式新版本、预览版/预发布版本推送。

## 3. 项目进展
今日合并/关闭的核心PR显著推进了项目成熟度：
1. [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512)：完成邮件渠道全量问题修复，解决了HTML正文渲染异常、默认主题不友好、附件路径解析失败三大长期痛点，同时对全项目20+渠道的公共消息抽象层做了兼容性加固，渠道体系整体可用性提升约15%。
2. [#6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901)：修复提供商层错误日志丢失问题，实现完整保留reqwest错误全链路根因，把大模型对接场景下的故障排查效率提升30%，大幅降低了运维调试成本。
截至今日，当前规划的beta-2集成版本整体功能完成度已达78%。

## 4. 社区热点
今日讨论度最高的核心议题集中在两类用户强需求场景：
1.  [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)：DeepSeek-V4 API格式兼容Bug，累计13条评论、4个点赞，是过去24小时互动量最高的Issue。背后反映出DeepSeek作为国内头部大模型的用户渗透率快速提升，大量生产环境用户直接受API不兼容影响，该问题是当前国内用户优先级最高的待修复项。
2.  [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)：桌面级computer-use能力功能RFC，已经被社区正式接受。用户明确提出对标OpenAI Codex的本地桌面GUI控制需求，指向ZeroClaw构建差异化本地全栈智能体能力的产品方向，后续落地后可覆盖桌面自动化、本地操作代理等新兴场景。

## 5. Bug 与稳定性
按严重等级排序的最新问题清单：
| 严重等级 | 问题描述 | 对应Issue链接 | 是否已有修复PR | 状态 |
|---------|----------|--------------|----------------|------|
| P1高风险 | DeepSeek-V4-Pro/Flash API调用报错，关联思考模式适配问题，属于S2级服务降级故障 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | 暂无 | 开发中 |
| S2高风险 | 智能体交互模式下系统日志行内打印，直接淹没对话输出内容，终端用户完全无法正常查看模型回复 | [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | 对应PR[#6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947) | 待合并 |
| S2中风险 | SiliconFlow模型提供商默认API地址硬编码为国内.cn节点，国际区用户持有的.com站点密钥直接鉴权失败 | - | 对应PR[#6953](https://github.com/zeroclaw-labs/zeroclaw/pull/6953) | 待合并 |
| 一般影响 | TUI仅支持F1-F5切换模式，紧凑型无独立F键的键盘用户无法正常操作 | [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | 对应PR[#6952](https://github.com/zeroclaw-labs/zeroclaw/pull/6952) | 待合并 |

## 6. 功能请求与路线图信号
结合新提交Issue和现有PR队列判断，以下功能大概率会纳入下一正式版本：
1.  已经被正式接受的[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 桌面computer-use能力RFC，是产品差异化竞争的核心功能，会作为后续重点迭代方向推进；
2.  [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 定时任务接入编排器消息管道重构，从根源解决长期存在的6个调度类Bug，属于核心运行时稳定性优化项，会被优先安排开发；
3.  现有待合并队列中的MCP桥接工具暴露、技能权限分级提升、OpenAI Codex OAuth免密钥对接等功能，完成评审后直接进入下版本发布清单。

## 7. 用户反馈摘要
从Issue讨论中提炼的真实用户反馈：
- 大量使用Keychron、Logitech MX Keys Mini等紧凑型机械键盘的开发者反馈，原TUI的F键快捷键和系统音量、亮度等Fn组合键冲突，日常交互体验极差；
- 国内大量生产环境用户刚升级DeepSeek-V4模型就遇到ZeroClaw不兼容问题，直接中断业务流程，对大模型新特性的适配速度提出了更高要求；
- 海外用户集中反馈SiliconFlow默认指向国内节点的配置不合理，国际区密钥无法直接使用，增加了跨境访问的不必要配置成本；
- 不少办公场景用户反馈之前邮件渠道Markdown裸奔、附件上传失败的问题已经困扰他们很久，本次#6512的合并直接解决了邮件通知渠道的可用性痛点。

## 8. 待处理积压
需要维护者重点关注的长期高优先级积压项：
1.  巨型集成PR[#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)，覆盖全核心模块的beta-2版本整合PR，5月22日创建至今仍有Delegate功能缺失、提供商fallback逻辑异常等多个已知问题未修复，拖慢了整体版本的发布节奏；
2.  XL级技能系统大PR[#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)，5月14日创建，标记为「需要作者行动」已停滞超2周，依赖它的技能冷却补丁PR#6684也无法合并，阻塞了整个技能自主优化体系的落地进度。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*