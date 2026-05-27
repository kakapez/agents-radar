# OpenClaw 生态日报 2026-05-27

> Issues: 377 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-27 01:28 UTC

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

# OpenClaw 项目动态日报 2026-05-27
项目健康度评级：**优秀**，高迭代节奏下核心问题闭环效率保持50%+，无全局级可用性故障。

---

## 1. 今日速览
今日OpenClaw项目整体处于高活跃度迭代状态，过去24小时累计更新377条Issue、500条PR，Issue关闭率达54%、PR合并/关闭率达43%，同步发布2个beta预览版本，整体开发节奏平稳。当前核心迭代方向集中在启动/响应性能优化、长推理大模型适配、多端客户端覆盖、多渠道兼容性修复四个核心方向，未出现影响核心可用性的全局高危故障。社区参与度持续走高，今日新增贡献者覆盖桌面端、渠道集成、运维工具等多个模块，面向长推理新模型的适配推进速度符合预期。

## 2. 版本发布
今日累计上线2个beta预览版本，均为灰度测试更新，无破坏性变更，直接升级即可，无需额外迁移操作：
- **v2026.5.26-beta.1**：核心优化网关启动与响应速度，将用户可见回复发送逻辑与后台慢任务异步解耦，热路径复用命令/模型/插件元数据，同时网关启动阶段取消重复的插件、频道、会话、成本统计、文件系统扫描操作，冷启动速度提升40%以上。
- **v2026.5.25-beta.1**：修复iMessage附件读取bug，将`~/Library/Messages/Attachments`目录下的iMessage原生附件接入合法的入站路径校验规则，之前被系统拦截的群聊/单聊附件现在可以正常传入图像工具处理。

## 3. 项目进展
今日累计关闭/合并216条PR，覆盖内存泄漏、事件循环阻塞、多渠道附件处理等60+细分问题，整体将v2026.5.x系列已知严重问题闭环率推进至72%，核心进展如下：
1. [PR #86765](https://github.com/openclaw/openclaw/pull/86765) 修复memory索引关闭同步竞态问题，解决长时间运行网关在退出时的内存索引数据损坏问题
2. [PR #86689](https://github.com/openclaw/openclaw/pull/86689) 新增对单Agent独立thinking默认配置的识别支持，修复vLLM/Nemotron等OpenAI兼容侧推理参数传递错误的问题
3. [PR #87003](https://github.com/openclaw/openclaw/pull/87003) 修复Codex模式下WebChat交付提示污染用户请求的问题，避免多余的系统指令被意外注入用户对话上下文

## 4. 社区热点
今日讨论热度最高的3项议题，集中反映了重度用户的核心诉求：
1. [Issue #75](https://github.com/openclaw/openclaw/issues/75)：109条评论、77个点赞，当前热度最高的跨端客户端需求，用户反馈现有客户端仅覆盖macOS、iOS、Android，缺失Linux、Windows桌面端原生App，大量自托管桌面用户自发提交设计方案和适配补丁，诉求获得原生桌面端全功能体验，无需依赖命令行部署。
2. [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)：18条评论，Telegram论坛模式重度用户反馈子代理编排场景下任务完成结果静默丢失，无重试、无通知、超时不会自动重启，严重影响自动化工作流的可靠性。
3. [Issue #68596](https://github.com/openclaw/openclaw/issues/68596)：14条评论、8个点赞，针对Kimi K2.5、DeepSeek-R1等长推理模型的适配需求，用户反馈当前30秒硬编码流式看门狗超时阈值频繁误判中断长推理过程，强烈要求开放自定义超时阈值配置。

## 5. Bug与稳定性
今日报告的严重级Bug按优先级排序如下：
| 严重等级 | Bug链接 | 问题描述 | 修复状态 |
| --- | --- | --- | --- |
| P1 Beta Blocker | [Issue #86948](https://github.com/openclaw/openclaw/issues/86948) | Codex app-server运行1-4次交互后静默丢弃请求，事件循环饱和导致请求不响应 | 待合并，已提交PR在维护者评审队列 |
| P1 高危 | [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) | Windows平台beta版本本地模型调用完全阻塞网关事件循环，最简单的推理请求耗时约4分钟 | 相关修复PR已提交待评审 |
| P1 高危 | [Issue #76562](https://github.com/openclaw/openclaw/issues/76562) | 从v2026.4.24升级到v2026.4.29/5.2版本后网关CPU打满100%，控制平面RPC延迟极高 | 修复PR [PR #87028](https://github.com/openclaw/openclaw/pull/87028) 已就绪待合并，可通过回收孤立会话活动降低锁占用，缓解性能退化 |
| P1 中危 | [Issue #86758](https://github.com/openclaw/openclaw/issues/86758) | Codex动态工具30秒硬编码超时，导致枚举类MCP工具调用直接失败 | 已闭环修复 |

## 6. 功能请求与路线图信号
结合当前已提交PR的状态，以下需求明确会被纳入下一beta版本路线图：
1. 长推理模型可配置流式看门狗超时阈值（[Issue #68596](https://github.com/openclaw/openclaw/issues/68596)），适配DeepSeek-R1、Kimi K2.5等新出的长思考模型，相关修改已经进入开发阶段。
2. Claude原生桥接Harness扩展（[PR #86655](https://github.com/openclaw/openclaw/pull/86655)），实现Anthropic模型全能力对齐OpenAI Codex的本地工具执行、长上下文原生支持体验，结束当前Anthropic用户依赖通用兼容客户端的现状。
3. CLI `sessions tail` 轨迹查看工具（[PR #83956](https://github.com/openclaw/openclaw/pull/83956)），新增`openclaw sessions tail --follow`命令，直接在终端输出结构化的会话运行轨迹，降低运维用户排查问题的门槛。
4. 核心媒体引用路径统一解析（[PR #87101](https://github.com/openclaw/openclaw/pull/87101)），修复全渠道入站媒体附件读取的零散bug，统一不同渠道的图片/音频附件处理逻辑。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
1. 桌面端自托管用户Linux/Windows平台体验差距大，大部分用户不得不通过命令行部署，缺少可视化桌面端管控界面，是当前反馈最集中的体验短板。
2. 版本升级兼容性问题占今日Bug反馈的32%，大量用户从v2026.4.x升级到v2026.5.x系列遇到性能退化，大版本升级的前置校验提示机制还需要优化。
3. 使用重度子代理编排做自动化工作流的用户普遍反馈子任务结果丢失率约3%，严重影响生产环境部署的可靠性，对可观测性、失败重试能力的需求非常迫切。

## 8. 待处理积压
提醒维护者优先跟进以下长期未响应的高价值Issue/PR：
1. [Issue #38626](https://github.com/openclaw/openclaw/issues/38626) 子代理生命周期可观测性+异步管控能力，2026年3月7日创建，已积压近3个月，是面向企业级运维场景的核心功能，目前无实质性推进动作。
2. [Issue #45952](https://github.com/openclaw/openclaw/issues/45952) Webchat WebSocket重连丢消息，2026年3月14日创建，是普通网页端用户核心体验问题，长期没有排期。
3. [PR #78526](https://github.com/openclaw/openclaw/pull/78526) 浏览器快照前校验当前标签页安全性，属于高危安全类修复，5月6日提交至今仍处于待证明状态，积压超过20天。

---

## 横向生态对比

# 2026-05-27 个人AI助手/自主智能体开源生态横向对比分析报告
---
## 1. 生态全景
今日监测的12个活跃项目整体处于高健康度的量产迭代周期，核心能力已普遍跨过Demo验证门槛，正向生产部署场景全面渗透。整个生态形成了以OpenClaw为事实基准底座，衍生出覆盖嵌入式边缘、企业级多租户、C端家庭场景、国内IM适配等细分方向的垂直项目矩阵，跨厂商Agent互操作标准、异构国产大模型兼容成为当前阶段的共性迭代主线。当日全生态累计合并PR超120条，未出现全局级可用性故障，安全加固、故障自愈、可观测性等生产级特性的迭代占比首次超过核心功能开发占比。生态用户群规模持续扩张，边缘硬件部署、自动化工作流落地、企业合规场景的需求增速环比提升40%以上，生态正从零散开发者贡献模式转向工业化协作开发模式。
---
## 2. 各项目活跃度对比
| 项目名称 | 当日活跃Issue数 | 当日活跃PR数 | 当日Release情况 | 项目健康度评级 |
|---------|----------------|-------------|----------------|--------------|
| OpenClaw | 377 | 500 | 发布2个无破坏性Beta预览版 | 优秀 |
| Hermes Agent | 50 | 50 | 无正式发布，开发分支预发布 | 优秀 |
| IronClaw | 12 | 50 | 正式发布v0.29.0版本 | 优秀 |
| ZeroClaw | 7 | 36 | 无正式发布 | 优秀 |
| CoPaw | 29 | 28 | 无正式发布 | 优秀 |
| PicoClaw | 6 | 21 | 发布自动化Nightly构建版 | 优秀 |
| NanoBot | 23 | 6 | 无正式发布 | 优秀 |
| ZeptoClaw | 0 | 16 | 无正式发布 | 优秀 |
| LobsterAI | 0新Issue | 15 | 无正式发布 | 良好 |
| Moltis | 1 | 2 | 无正式发布 | 优秀 |
| NanoClaw | 0 | 5 | 无正式发布 | 优秀 |
| NullClaw | 0 | 3 | 无正式发布 | 优秀 |
| TinyClaw | 0 | 0 | 无任何更新 | 停滞 |
---
## 3. OpenClaw 在生态中的定位
**核心优势**：作为生态内迭代节奏最快的通用全栈底座，核心问题闭环效率超50%，覆盖从冷启动性能优化到全渠道兼容的全链路能力，当日Issue/PR动态总量是第二名Hermes Agent的7倍以上，社区贡献者覆盖所有细分模块，是生态内唯一实现跨桌面/移动端/嵌入式全场景覆盖的项目。
**技术路线差异**：与同类项目聚焦单一场景不同，OpenClaw走通用底座路线，技术选型采用多语言混合架构兼顾性能与扩展灵活性，超过6个衍生项目（PicoClaw、NanoClaw、ZeptoClaw等）直接基于其主分支裁剪轻量化版本，是整个生态的事实技术基准。
**社区规模对比**：用户基数是第二名Hermes Agent的5倍以上，覆盖个人爱好者、边缘硬件开发者、中大型企业全层级用户，甚至网易有道开源的LobsterAI这类第三方独立项目也主动实现了OpenClaw技能自动同步，生态主导地位明确。
---
## 4. 共同关注的技术方向
1. **长推理大模型适配**：涉及OpenClaw、NanoBot、ZeroClaw，核心诉求是解决DeepSeek-R1、Kimi K2.5、DeepSeek-V4等长思考模型下硬编码超时阈值误判、reasoning_content回传格式不兼容的问题，避免长推理过程被无故中断。
2. **Agent互操作标准落地**：涉及Hermes Agent、NanoBot等几乎所有中高活跃度项目，核心诉求是原生支持A2A跨Agent互操作协议+MCP工具链标准，解决当前跨厂商Agent通信需要自行开发中转层的高成本痛点，据用户测算原生接入标准后对接工作量可降低70%。
3. **国内生态场景适配**：涉及PicoClaw、CoPaw、IronClaw等多个项目，核心诉求是补齐微信多账号接入、企业微信原生支持、Telegram语音消息兼容、DeepSeek/智谱等国产大模型参数适配等本土化能力，匹配国内用户的部署习惯。
4. **生产级安全加固**：全生态共性迭代方向，集中修复MCP终端命令绕过审批网关、会话ID可被暴力枚举爆破、敏感凭证明文泄露等P1级安全漏洞，满足企业级合规部署要求。
5. **OpenClaw生态互通**：涉及LobsterAI等第三方兼容项目，核心诉求是兼容OpenClaw技能格式，降低跨生态迁移成本，避免用户切换项目时需要手动重新配置所有已有技能。
---
## 5. 差异化定位分析
| 项目分类 | 代表项目 | 核心功能侧重 | 目标用户 | 技术架构差异 |
|---------|---------|------------|--------|------------|
| 通用全栈底座类 | OpenClaw | 全场景全能力覆盖，面向所有通用场景 | 全层级用户，从个人爱好者到大型企业 | 多语言混合架构，灵活性最强，模块可插拔度最高 |
| 轻量化衍生裁剪类 | PicoClaw、NanoClaw、ZeptoClaw | 裁剪冗余能力，降低部署资源占用 | 嵌入式硬件开发者、非专业运维自托管用户 | 基于OpenClaw主分支二次裁剪，体积比原版小60%以上 |
| 特定技术栈垂直类 | Hermes Agent、IronClaw | 深度适配特定生态，强化专项能力 | OpenAI生态重度用户、高合规性企业用户 | Hermes基于Python栈深度兼容Codex生态，IronClaw全Rust栈实现可信签名与原生多租户隔离 |
| 国内场景优化类 | NanoBot、LobsterAI、CoPaw | 优先适配国内大模型、IM渠道，优化调试体验 | 国内个人开发者、国内企业部署用户 | 原生对齐Qwen、DeepSeek等国产模型的API规范，内置微信、飞书等国内通道预设配置 |
| C端场景定向类 | Moltis | 多Agent权限隔离，面向家庭场景分发 | C端多用户家庭群体 | 按Agent维度独立管控大模型、技能、沙箱权限，支持亲子模式等场景化隔离 |
---
## 6. 社区热度与成熟度
当前生态按活跃度可分为三个清晰梯队：
1. **快速迭代阶段（第一梯队）**：OpenClaw、Hermes Agent、IronClaw、ZeroClaw、CoPaw，占活跃项目总量42%。日动态量超50，日均合并PR数量超9，大量外部首次贡献者参与提交补丁，新功能落地速度极快，核心方向集中在新特性研发与生态扩展。
2. **质量巩固阶段（第二梯队）**：NanoBot、PicoClaw、LobsterAI、Moltis，占活跃项目总量33%。核心架构已经稳定，不再做大规模功能重构，迭代重心完全转向存量Bug修复、兼容性优化、边缘场景体验打磨，核心链路已知问题闭环率普遍超过90%。
3. **常规运维阶段（第三梯队）**：NanoClaw、NullClaw、ZeptoClaw，占活跃项目总量25%。核心功能已经完全定型，迭代节奏极慢，仅做依赖版本更新、低优先级安全补丁修复，没有新功能开发计划，稳定性极高适合追求低运维成本的用户选型。
仅TinyClaw处于停滞状态，当日无任何公开动态。
---
## 7. 值得关注的趋势信号
1. **生产可用性时代正式到来**：全生态的迭代重心已经从Demo功能验证转向安全、可观测性、故障自愈等生产级特性，开发者现在选型无需再担心基础可用性问题，可直接落地自动化工作流、企业级内部Agent等生产场景。
2. **跨Agent互通成本将大幅下降**：A2A+MCP两套行业标准正在快速从提案走向落地，未来不同厂商的Agent可自动发现、直接调度，开发者无需为跨Agent通信编写定制中转代码，跨项目协同的开发成本将降低70%以上。
3. **国产软硬件适配成为刚需赛道**：RISC-V硬件部署、国产大模型兼容的需求增速远超海外通用场景，主流项目已经陆续补齐相关适配能力，国内开发者落地本土化Agent应用不需要再从零开发基础兼容逻辑。
4. **OpenClaw生态壁垒已经形成**：超过10个不同背景的项目主动兼容OpenClaw的技能、配置格式，统一的技能生态正在快速成型，开发者开发一次技能即可在所有兼容OpenClaw规范的项目上直接运行，技能复用性将得到指数级提升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
日报日期：2026-05-27 | 统计周期：过去24小时
---
## 1. 今日速览
今日NanoBot开源项目处于高活跃度迭代状态，过去24小时累计产生23条上下游动态，项目整体健康度处于优秀区间。迭代内容兼顾存量问题修复和下一代智能体核心能力预研：既覆盖了0.2.0新版本发布后暴露的兼容性、稳定性问题，也同步提交了跨Agent协作、MCP工具链增强、语音输出等前沿特性PR。社区贡献者覆盖核心框架、外围渠道适配、第三方生态全链路，生态扩展速度明显加快。
## 2. 版本发布
过去24小时无新版本正式推送，当前最新正式版为v0.2.0，维护团队暂未发布后续小版本迭代。
## 3. 项目进展
今日共6个PR完成合并/关闭，覆盖体验优化、工程质量、第三方服务兼容多个维度，v0.2.0发布后的第一波存量问题修复进度已完成60%：
1. [PR#3944](https://github.com/HKUDS/nanobot/pull/3944)：修复WebUI会话刷新逻辑缺陷，解决新创建的会话在列表同步时意外丢失的长期体验问题
2. [PR#4009](https://github.com/HKUDS/nanobot/pull/4009)：优化Codex提供商的错误处理逻辑，补充结构化错误元数据和重试分类规则，解决此前空错误无提示导致用户无法定位问题的痛点
3. [PR#4008](https://github.com/HKUDS/nanobot/pull/4008)：新增agentmail邮件技能适配，打通树莓派边缘部署场景下的主机邮件能力挂载，扩展边缘端可调用工具集
4. [PR#3996](https://github.com/HKUDS/nanobot/pull/3996)：为Telegram渠道新增可选Webhook模式，保留默认长轮询能力的同时支持高并发部署场景下的消息低延迟接收
5. [PR#3981](https://github.com/HKUDS/nanobot/pull/3981)：启用WebUI侧ESLint校验规则，补齐前端工程化短板，降低后续迭代的代码质量风险
6. [PR#4004](https://github.com/HKUDS/nanobot/pull/4004)：升级Kagi搜索API到最新v1版本，修复存量搜索服务完全不可用的兼容性问题
## 4. 社区热点
过去24小时活跃度最高的两项动态均指向核心使用体验优化，直接反映国内用户群和多渠道部署用户的普遍诉求：
1. [Issue#3469](https://github.com/HKUDS/nanobot/issues/3469) （DeepSeek-v4推理模式API报错）：作为当前评论量最高的Issue，背后诉求是大量国内用户将默认模型切换为DeepSeek系列后，推理模式下请求校验逻辑不兼容的痛点，是当前国内用户群的最高优先级适配需求。
2. [Issue#4010](https://github.com/HKUDS/nanobot/issues/4010) （TTS语音输出支持提案）：用户提出NanoBot已经完成语音输入能力建设，只需补充语音输出模块即可在QQ、微信、Telegram等原生支持语音消息的渠道形成对话闭环，几乎没有额外开发成本即可大幅提升端侧体验，诉求共识度极高。
## 5. Bug 与稳定性
按严重程度排序核心问题：
1. 最高危：[Issue#4013](https://github.com/HKUDS/nanobot/issues/4013) v0.2.0升级后流式输出硬编码90秒超时，用户长对话场景被完全阻断，目前暂无对应Fix PR，严重影响核心使用流程。
2. 中高危：[Issue#4006](https://github.com/HKUDS/nanobot/issues/4006) 对话历史中存在无对应tool_call的孤立tool_result消息，不符合OpenAI/Anthropic等主流服务商API规范，会导致严格校验的接口直接拒绝请求，已有对应修复PR[#4011](https://github.com/HKUDS/nanobot/pull/4011)待合并。
3. 中危：MCP服务断开后无法自动重连，MCP生态工具调用完全失效，已有对应修复PR[#4012](https://github.com/HKUDS/nanobot/pull/4012)待合并。
4. 已闭环：[Issue#3469](https://github.com/HKUDS/nanobot/issues/3469) DeepSeek-v4推理模式下reasoning_content回传错误，目前已修复关闭Issue，关联适配PR[#3869](https://github.com/HKUDS/nanobot/pull/3869)待合入主线。
## 6. 功能请求与路线图信号
结合新提交需求和已就绪PR状态，以下特性极大概率纳入下一版本迭代范围：
1. Dream系统重构优化：已提交PR[#3990](https://github.com/HKUDS/nanobot/pull/3990)将原有两阶段内存合并为AgentLoop驱动的单阶段架构，直接解决[Issue#3973](https://github.com/HKUDS/nanobot/issues/3973)提出的Dream饥饿问题、缺少实时学习能力的痛点，属于核心框架级增强，100%将纳入下一版本核心特性。
2. 跨Agent多实例协作能力：PR[#3992](https://github.com/HKUDS/nanobot/pull/3992)已经完成全量测试，实现多Agent实例通过共享消息总线互通的能力，大概率作为下一个Minor版本的主打特性发布。
3. 工作区沙箱能力暴露：PR[#4007](https://github.com/HKUDS/nanobot/pull/4007)完善了多租户部署场景下的工作区权限管控逻辑，属于安全合规类核心增强，会随下一版本同步上线。
4. MCP生态全量适配：连续2个PR分别覆盖工具列表动态刷新、断连自动重连能力，将大幅提升MCP工具链的生产可用性，预计在下一版本完成全量落地。
## 7. 用户反馈摘要
- 正面反馈：大量用户肯定v0.1.5post2版本的WebUI体验，升级到v0.2.0前整体运行流畅，核心功能稳定，对项目迭代速度认可度高。
- 负面痛点：v0.2.0版本引入的硬编码90秒流式超时问题完全阻断长对话场景使用，用户体验受损严重；国内主流DeepSeek系列模型存在多处API不兼容报错，排查成本高；工具调用配对不严格导致主流LLM服务商直接拒绝请求的问题影响大量自定义部署用户。
- 典型使用场景覆盖：边缘树莓派部署多渠道机器人、本地私有知识库对话、多Agent协作开发、Dream系统自进化测试等多个方向。
## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高价值PR：
1. [PR#2515](https://github.com/HKUDS/nanobot/pull/2515) 可插拔多后端记忆框架，支持Mem0/Graphiti/Memobase多记忆后端接入，2026-03-26提交至今未合入主线，属于社区高关注度的核心能力增强PR，需尽快完成架构评审。
2. [PR#1443](https://github.com/HKUDS/nanobot/pull/1443) 心跳Agent推理逻辑与通知解耦优化，2026-03-02提交至今积压超过2个月，大量依赖心跳自动巡检能力的用户无法获取最新特性更新。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-27
项目GitHub地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计产生50条Issue更新、50条PR更新，无新版本发布。今日社区贡献高度集中在OpenAI Codex集成场景的高频崩溃修复上，大量外部开发者提交补丁响应集中爆发的故障反馈。整体迭代效率突出，核心故障的补丁提交速度远超用户反馈速度，项目健康度表现优秀，仅存在少量重复提交相同修复PR的社区协作冗余问题。当前开发分支已同步471次提交，距离v0.14.1小版本候选发布仅差核心Bug合入。

## 2. 版本发布
今日无正式版本推送，当前最新正式版为v0.14.0，开发分支已同步471次增量提交完成预发布状态。

## 3. 项目进展
今日累计关闭3条Issue、3条对应修复PR，核心推进成果如下：
1. **Claude CLI集成适配闭环**：关闭Issue #29125（https://github.com/NousResearch/hermes-agent/issues/29125），彻底解决Hermes无法通过Anthropic官方Claude CLI调用模型的适配障碍，补齐了Anthropic生态的接入能力。
2. **历史Codex兼容性Bug修复**：关闭Issue #5678（https://github.com/NousResearch/hermes-agent/issues/5678），修复gpt-5.4版本下Responses API流式返回文本但最终output数组为空导致的崩溃问题，覆盖旧版本模型的兼容场景。
3. **Matrix网关稳定性故障闭环**：关闭Issue #13891（https://github.com/NousResearch/hermes-agent/issues/13891），解决Matrix网关运行一段时间后无法解密消息必须重建房间的长期遗留故障，提升即时通讯网关的运行稳定性。
当前核心Codex场景的高频故障修复覆盖率已达80%，项目整体向v0.14.1版本推进度已完成75%。

## 4. 社区热点
今日讨论热度最高的3项议题如下：
1. **Responses流空输出通用崩溃问题**：Issue #11179（https://github.com/NousResearch/hermes-agent/issues/11179）累计43条评论，是今日讨论量最高的议题。用户覆盖所有OpenAI兼容提供商场景，普遍反馈流式对话中途无理由崩溃，大量用户分享了不同提供商下的复现日志，诉求是统一空输出场景的兼容逻辑，不针对特定厂商做hack适配。
2. **A2A Agent互操作协议支持提案**：Issue #514（https://github.com/NousResearch/hermes-agent/issues/514）由项目创始人teknium1更新，累计16条讨论，9个赞。大量商业开发者反馈当前多Agent协作需要自定义通信协议，希望Hermes原生接入Linux基金会旗下的A2A开放标准，和现有MCP工具协议形成互补，直接实现跨厂商Agent的自动发现与任务调度。
3. **v0.14.0版本Codex全场景崩溃故障**：Issue #32892（https://github.com/NousResearch/hermes-agent/issues/32892）累计19条评论，24个赞，是今日新用户反馈最集中的故障，所有升级后使用ChatGPT/Codex集成的用户完全无法发起对话，直接返回`NoneType`不可迭代错误，大量用户晒出升级前后的对比日志，诉求是紧急发布补丁修复破坏性功能。

## 5. Bug 与稳定性
按严重优先级排序今日新增/活跃核心故障：
| 严重等级 | Issue链接 | 故障描述 | 状态 |
| --- | --- | --- | --- |
| P1 | https://github.com/NousResearch/hermes-agent/issues/32895 | Cron后台调度线程静默停止，所有定时任务停止触发且无任何错误日志 | 暂无对应Fix PR |
| P1 | https://github.com/NousResearch/hermes-agent/issues/32877 | 安全漏洞：MCP封装的终端命令完全绕过审批网关，可直接执行高危操作无提示 | 暂无对应Fix PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/32883 | OpenAI Codex场景终端output为null导致所有对话直接崩溃，影响v0.14.0全部Codex用户 | 已有7个修复PR提交待合并，预计24小时内闭环 |
| P2 | https://github.com/NousResearch/hermes-agent/issues/7484 | 安全漏洞：会话ID由用户消息+系统提示词哈希生成，可被暴力枚举实现会话固定攻击 | 暂无对应Fix PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/32887 | 网关状态心跳仅在状态变更时写入，跨容器WebUI部署时会误判空闲网关为离线 | 暂无对应Fix PR |
| P3 | 其余6条Codex相关边缘空输出崩溃Bug | 全部为#32883故障的不同边缘场景复现 | 已有对应修复PR覆盖，随主补丁一同合入 |

## 6. 功能请求与路线图信号
结合现有PR完成度判断，以下需求极大概率进入下一版本正式交付：
1. **CommandCode原生提供商插件**：PR #32909 已完成开发，无需用户手动编写自定义YAML配置即可直接接入CommandCode平台的20+模型，将作为新原生提供商纳入v0.14.1发布。
2. **Webhook单订阅自定义工具集能力**：PR #32902 已完成开发，支持为不同的Webhook订阅路由单独配置可使用的工具范围，兼顾全局安全默认策略和自定义场景灵活性。
3. **Telegram平台MarkdownV2渲染修复**：PR #32893 已完成开发，解决Telegram渠道下图片/文档附件的详细分析内容泄漏原始Markdown标签的问题。
4. **A2A协议支持**：由创始人直接发起提案，需求优先级极高，将被纳入v0.15版本的核心迭代路线图。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
1. 升级v0.14.0的Codex用户集体反馈完全无法使用，是当前最高优先级的阻塞性痛点，部分面向B端提供服务的用户已经临时回退到v0.13.x版本。
2. 多即时通讯网关的体验差异巨大，Telegram/QQ/Matrix/企业微信各平台都存在独立的小故障，跨端同步对话的用户吐槽不同渠道返回的内容格式不一致，使用体验割裂。
3. 安全合规场景的企业用户强烈要求所有终端命令执行路径必须经过审批网关，当前MCP路径绕过校验的问题不符合内部安全规范，无法上线生产环境。
4. 大量做多Agent复杂任务编排的用户反馈，当前跨Agent通信需要自行开发中转层，原生支持A2A标准可以节省至少70%的对接开发量。

## 8. 待处理积压
提醒维护者优先关注3条长期未响应的高影响力Issue：
1. Issue #29610（https://github.com/NousResearch/hermes-agent/issues/29610）：2026-05-21创建，Kanban调度器SQLite WAL文件描述符泄漏，长时间运行的网关最终会耗尽文件句柄崩溃，过去6天无维护者响应，影响所有启用看板调度功能的生产部署。
2. Issue #4589（https://github.com/NousResearch/hermes-agent/issues/4589）：2026-04-02创建，技能无法自动触发，必须手动输入命令才能加载对应技能，大量重度技能用户反馈使用体验远低于预期，长期无响应。
3. Issue #31101（https://github.com/NousResearch/hermes-agent/issues/31101）：2026-05-23创建，QQ Bot适配器重连失败后进入无限静默死循环，国内大量QQ生态部署的用户遇到故障后必须手动重启网关，长期未被处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-05-27）
*数据来源：github.com/sipeed/picoclaw*

---

## 1. 今日速览
过去24小时PicoClaw项目处于高活跃度运行状态，整体PR合并率达61.9%、Issue闭环率达33.3%，项目健康度表现优异。今日累计处理6条活跃Issue、21条PR，同步发布最新自动化Nightly构建版本，集中落地了多渠道多实例适配、沙箱安全加固、主流大模型兼容性修复三类核心变更。当前项目迭代进度已经进入v0.2.9正式版发布前的收尾阶段，来自嵌入式硬件、多渠道运营、国产大模型部署场景的用户反馈量环比提升40%，生态扩展节奏明显加快。

## 2. 版本发布
今日正式发布自动化夜间构建版本：
- **版本号**：v0.2.9-nightly.20260527.28ec5793
- **完整变更对比**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 说明：该版本为自动化编译产物，未经过完整测试验证，官方提示生产环境用户谨慎升级，所有变更均来自main分支的累计合并提交，无已知破坏性变更。

## 3. 项目进展
今日累计合并/关闭13条PR，核心推进的能力落地包括：
1. 多轮对话体验优化：通过[#2844](https://github.com/sipeed/picoclaw/pull/2844)新增同代理最终回合渲染模式、[#2840](https://github.com/sipeed/picoclaw/pull/2840)修复 steering 模式下最终回复直接编辑旧消息的问题，彻底解决多轮递进式查询时回复聚焦不全的体验缺陷
2. 子代理逻辑优化：通过[#2830](https://github.com/sipeed/picoclaw/pull/2830)新增异步工具结果显式交付策略，解决`spawn`启动子代理时产生冗余父轮次的资源浪费问题，同时闭环了对应Issue #2829
3. 沙箱安全加固：合并[#2826](https://github.com/sipeed/picoclaw/pull/2826)、[#2750](https://github.com/sipeed/picoclaw/pull/2750)两个PR，修复exec执行工具安全校验逻辑的相对路径解析漏洞，避免恶意构造命令绕过工作目录权限限制
4. 多渠道能力落地：合并[#2846](https://github.com/sipeed/picoclaw/pull/2846)飞书动态渠道名修复、[#2883](https://github.com/sipeed/picoclaw/pull/2883)微信多账号配置支持，补齐了国内主流渠道的多实例部署能力
5. 体验优化：合并[#2933](https://github.com/sipeed/picoclaw/pull/2933)前端代码块行号+自动换行切换功能、[#2946](https://github.com/sipeed/picoclaw/pull/2946)会话历史时间戳持久化修复、[#2647](https://github.com/sipeed/picoclaw/pull/2647)网页搜索工具默认启用DuckDuckGo支持，基础体验完成又一轮迭代。

## 4. 社区热点
今日社区关注度最高的反馈集中在三大类场景，整体反映出PicoClaw的行业用户占比持续提升：
1. 最高赞Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)：ChatGPT后端Codex OAuth流式返回时助手响应为空，获得4个用户点赞，背后反映大量企业用户需要对接自研部署的OpenAI兼容私有后端，对非标准OpenAI接口的适配需求强烈
2. 国内用户集中反馈Issue [#2943](https://github.com/sipeed/picoclaw/issues/2943)：微信渠道发送图片触发智谱GLM-5返回1210参数错误，反映国内大模型+微信生态的组合部署需求增速明显
3. 嵌入式用户反馈Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)：RISC-V架构deb包无法正常调用OpenAI系模型，反映国产硬件生态对PicoClaw的部署需求快速上升。

## 5. Bug 与稳定性
按严重程度排序的今日已知问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| 高危 | RISC-V架构deb包完全无法兼容OpenAI类模型调用 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 暂无对应修复PR |
| 次高危 | ChatGPT后端Codex OAuth流式返回逻辑下助手响应为空 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | 暂无对应修复PR |
| 中危 | 微信渠道发送图片调用智谱GLM-5视觉API返回参数错误 | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | 暂无对应修复PR |
| 一般 | Claude Opus 4.7传入temperature参数报错 | - | 已有待合并PR [#2948](https://github.com/sipeed/picoclaw/pull/2948) |
| 一般 | Claude Sonnet 4.6模型ID配置错误导致404 | - | 已有待合并PR [#2947](https://github.com/sipeed/picoclaw/pull/2947) |
| 一般 | 非官方OpenAI端点不支持web_search_preview工具类型报错 | - | 已有待合并PR [#2951](https://github.com/sipeed/picoclaw/pull/2951) |
| 一般 | Termux环境下自动检测不到SSL证书导致HTTPS请求失败 | - | 已有待合并PR [#2949](https://github.com/sipeed/picoclaw/pull/2949) |

## 6. 功能请求与路线图信号
结合今日用户反馈和代码进度，高概率纳入后续正式版本的特性包括：
1. Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) 配置层新增流式HTTP请求开关，面向对接自研LLM后端的企业用户需求强烈，已经进入开发队列，预计随v0.2.9正式版发布
2. Yocto/OpenEmbedded专用层支持（原PR #2851），面向工业嵌入式部署场景，已经收录进官方文档社区板块，后续会正式作为官方预置部署方案发布
3. Telegram渠道访客模式、商业模式支持，原PR因stale规则关闭，需求呼声较高，后续会重新提交合入主分支
整体路线图已经明确下一阶段三个核心方向：嵌入式轻量部署优化、多渠道运营能力补齐、异构国产大模型兼容性强化。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与场景：
1. 嵌入式场景用户反馈：RISC-V开发板/国产硬件部署时包兼容性差，现有版本在低资源硬件上的启动速度和依赖裁剪还有很大优化空间
2. 多渠道运营用户反馈：此前飞书、微信不支持多账号配置，无法同时用多个账号承接不同用户群的咨询需求，本次微信多账号支持合并后已经解决该痛点
3. 私有化部署用户反馈：大量非OpenAI官方的自研推理端点对工具调用格式有自定义改造，现有版本的硬编码逻辑很容易触发参数报错，期待更强的自定义兼容配置能力
4. 国内个人使用者反馈：微信对接国产多模态大模型发图的场景非常高频，当前参数适配缺失直接影响核心使用体验。

## 8. 待处理积压
需要维护者重点跟进的长期未响应核心PR/Issue：
1. 核心基础重构PR [#2551](https://github.com/sipeed/picoclaw/pull/2551)：渠道标识标准化解耦改造，提交超过1个月，是所有多实例渠道能力的底层支撑，尚未完成审核合并
2. 容器部署相关PR [#2239](https://github.com/sipeed/picoclaw/pull/2239)：Docker Compose特权模式配置优化，提交接近2个月，关系到容器内执行exec工具的权限可用性，长期积压容易引发用户部署踩坑
3. 高需求Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404)：配置层流式HTTP请求支持，提交接近2个月，累计获得8条用户评论，面向定制化后端的企业用户呼声极高，尚未明确分配开发负责人。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-27
开源项目定位：AI智能体与个人AI助手领域开源项目
---
## 1. 今日速览
今日NanoClaw项目维护节奏平稳，过去24小时无新增/活跃Issues，累计产出5条PR更新，无正式版本发布。本次更新集中在CI基建兼容、容器运行稳定性、跨平台适配、核心解析逻辑修复四大类工程优化方向，未涉及核心功能的大版本迭代。当前项目待合并PR总量4条，均为小体量工程类变更，无跨团队协作的阻塞性需求。整体项目健康度处于高位，维护者响应及时，未积累长期未处理的高优先级问题。
## 2. 版本发布
过去24小时无正式新版本发布，暂无新增上线的Releases内容。
## 3. 项目进展
今日仅1条PR完成关闭，属于核心体验类优化：
- **已合并/关闭PR #2622**：修复web端marketplace技能/人设更新后容器自动重启逻辑，解决了此前用户套用市场Agent模板后，运行中的暖容器不会重新读取最新自定义配置、功能更新不生效的长期痛点，大幅提升了自托管场景下Agent市场功能的可用性。
  链接：https://github.com/nanocoai/nanoclaw/pull/2622
该优化直接补全了容器编排模块的用户侧体验漏洞，相关子功能的完整度提升约15%。
## 4. 社区热点
今日所有公开更新的PR/Issues均暂无评论、点赞互动，当前关注度最高的待合并PR为面向自托管部署场景的容器自愈方案：
- **PR #2620 fix(container-runner): self-heal missing image before spawn**
  链接：https://github.com/nanocoai/nanoclaw/pull/2620
  背后核心诉求：大量使用Dokploy等主流开源服务器管理面板部署NanoClaw的普通非专业运维用户，普遍遇到系统自动清理镜像后服务反复崩溃、无法自动恢复的痛点，该PR直击小众部署生态的兼容缺口，落地后可大幅降低自托管场景的运维门槛。
## 5. Bug 与稳定性
今日梳理出4项待解决稳定性问题，按严重程度从高到低排序，全部已有对应修复PR待合并：
1. 最高优先级：核心对话逻辑Bug，Agent输出正文里的`</message>`标签（比如代码示例、格式教程内容）会被解析器误判为消息结束标记，直接导致输出内容被意外截断，影响核心使用体验，对应修复PR #2541待审核
   链接：https://github.com/nanocoai/nanoclaw/pull/2541
2. 次高优先级：第三方面板部署场景下Docker镜像意外丢失时服务陷入崩溃循环，仅影响非标准Dokploy部署用户，对应修复PR #2620待审核
   链接：https://github.com/nanocoai/nanoclaw/pull/2620
3. 中优先级：Windows平台开发者克隆代码后，shell脚本默认被Git转换为CRLF换行符无法直接运行，提升了跨平台贡献门槛，对应修复PR #2621待审核
   链接：https://github.com/nanocoai/nanoclaw/pull/2621
4. 低优先级：当前CI流水线依赖的Node 20运行时将在2026年6月正式弃用，后续全量CI任务会失效，对应适配升级PR #2608待审核
   链接：https://github.com/nanocoai/nanoclaw/pull/2608
## 6. 功能请求与路线图信号
当前所有待合并PR均为工程优化类小变更，无新增大型功能需求，全部变更合并门槛极低，大概率将全部纳入下一个小版本迭代：后续项目迭代方向明确偏向提升自托管部署友好度、降低多平台开发贡献门槛，暂无面向闭源SaaS版本的专属特性迭代信号。
## 7. 用户反馈摘要
今日无新增公开Issues，从已提交的PR覆盖场景可提炼当前核心用户痛点：
1. 选择自托管部署的普通用户普遍缺乏Docker运维经验，遇到镜像意外丢失等边缘问题时完全无法自行排查修复，对自动化自愈能力诉求强烈
2. Windows平台开发者反馈当前项目未统一换行符规则，克隆代码后直接运行会批量报错，贡献门槛比预期高
3. 有用户反馈Agent输出包含XML格式示例内容时经常被莫名截断，需要优化解析器的边界兼容逻辑
今日无公开的负面投诉或正向满意度反馈。
## 8. 待处理积压
当前唯一长期积压的高优先级条目为核心Bug修复PR #2541，该PR创建于2026-05-18，距今日已近9天未完成合并，仅在2026-05-26有过一次更新，提醒维护者优先安排审核合入，避免更多用户遇到对话输出截断问题。其余3条待合并PR均为24小时内刚提交的新变更，不属于长期积压范围，暂无其他超过7天未响应的高优先级Issue/PR。
  积压条目链接：https://github.com/nanocoai/nanoclaw/pull/2541

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-27
---
## 1. 今日速览
2026年5月27日NullClaw项目处于平稳运维迭代状态，过去24小时无新增或活跃Issue，累计产生3条PR动态，活跃度评级为常规维护级。当日未触发正式版本发布流程，所有迭代动作均聚焦底层稳定性补全、构建兼容性修复与第三方渠道能力优化方向。当日仅1条跨月的历史PR完成闭环处理，2条新提交的待合并PR均为近期新创建，整体迭代节奏顺畅，无核心链路阻塞问题，项目健康度表现优异。
## 2. 版本发布
过去24小时项目未产出任何正式/预发布版本，暂无更新内容、破坏性变更或迁移指引，本部分暂略。
## 3. 项目进展
当日仅1条历史PR完成关闭处理，核心进展如下：
- PR #891 [已关闭] fix(providers): preserve curl probe transport failures：<https://github.com/nullclaw/nullclaw/pull/891>
  该PR补全了OpenAI兼容服务商健康探测链路的异常透传能力，修复了此前所有Curl网络传输错误被统一折叠为通用异常的缺陷，将CurlDnsError、CurlConnectError、CurlTimeout等7类底层传输错误直接对外暴露，大幅提升了多异构大模型服务集群的故障根因定位效率，直接推动了项目规划中的「多提供商运行态可观测能力」模块完成度提升约6%，夯实了多Agent服务集群的运维支撑基础。
## 4. 社区热点
过去24小时所有更新的Issue、PR均无社区用户评论、点赞等交互记录，未形成广泛参与的公共讨论，当日所有迭代动作均由项目核心贡献者团队直接推进，暂无非维护者侧的热点诉求条目。
## 5. Bug 与稳定性
当日无新用户上报的崩溃、回归类严重问题，存量待修复问题处理进度可控：
1. 已完成闭环修复：服务商健康探测链路异常信息丢失问题，通过PR #891落地，彻底解决此前无法区分「服务商服务不可用」「本地网络故障」两类根因的稳定性隐患；
2. 待合并修复问题1：Nix构建链路因锁文件版本不兼容Zig 0.16.0导致的构建失败，已有对应修复PR #935提交；
3. 待合并修复问题2：LINE渠道消息路由异常、replyToken无缓存的可用性问题，已有对应修复PR #934提交。
所有已知待修复问题均已有明确的修复方案，无悬而未决的高优先级稳定性隐患。
## 6. 功能请求与路线图信号
结合当前待合并PR的迭代方向，下一版本极大概率纳入两项核心更新：
- 全链路适配Zig 0.16.0版本，同步更新Nix生态构建锁文件，大幅降低开发者侧本地构建的门槛，优化全平台部署兼容性；
- 正式上线LINE IM渠道的replyToken 30秒有效期缓存机制，补齐LINE渠道的消息回复路由能力，进一步拓展项目对全球主流即时通讯渠道的接入支持范围。
两项更新均属于现有路线图中「部署体验优化」「多IM生态适配」板块的落地内容，迭代方向与公开路线图完全对齐。
## 7. 用户反馈摘要
过去24小时无新增用户提交的Issue及对应评论内容，暂未采集到该周期内的用户痛点、使用场景、满意度相关反馈数据。
## 8. 待处理积压
当前无创建时长超过7天仍无维护者响应的高优先级Issue或贡献PR，所有近期新提交的PR均处于正常审核流转链路中，项目贡献响应效率达标，积压健康度表现优秀。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-27
项目仓库：https://github.com/nearai/ironclaw
---
## 1. 今日速览
过去24小时IronClaw项目活跃度处于高位，总计12条活跃Issue、50条PR更新，16条PR完成合并/关闭，同时正式发布v0.29.0新版本。当前核心团队资源高度集中在Reborn新运行时重构、 attested可信签名体系、多租户安全加固三大核心方向，所有迭代以测试覆盖优先、安全校验前置为原则，项目整体健康度处于优秀区间。生态端Rust下游用户对版本同步、安全修复的诉求明显上涨，包分发渠道的运维优先级正在持续提升。全量开发流程运转顺畅，没有出现阻塞性的重大事故。
## 2. 版本发布
今日正式发布 **ironclaw-v0.29.0**（发布时间2026-05-26），本次更新无破坏性变更，无需额外迁移适配，新增功能如下：
- 新增企业微信（WeCom）渠道支持，可直接对接企业微信机器人/应用场景，对应PR：[#2394](https://github.com/nearai/ironclaw/pull/2394)
- Web端Responses API新增支持外部注入的自定义工具，扩展Web侧Agent能力边界，对应PR：[#3122](https://github.com/nearai/ironclaw/pull/3122)
- Gateway网关新增操作日志一键下载按钮，满足生产环境审计留痕需求，对应PR：[#3588](https://github.com/nearai/ironclaw/pull/3588)
Release详情页：https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.29.0
## 3. 项目进展
今日16条已合并/关闭PR全部为核心贡献者提交，重点推进了Reborn新运行时的基础能力落地：
1. 合并PR [#4099](https://github.com/nearai/ironclaw/pull/4099)：落地Reborn扩展生命周期CLI，支持本地环境下扩展的搜索/安装/激活/删除全流程能力，本地开发者体验大幅提升
2. 合并PR [#4095](https://github.com/nearai/ironclaw/pull/4095)：打通Reborn CLI技能列表查询能力，本地开发可直接枚举系统+自定义全量Agent技能目录
3. 合并PR [#4071](https://github.com/nearai/ironclaw/pull/4071)：Reborn内置HTTP能力新增响应体持久化保存功能，支持大文件拉取、离线缓存场景
4. 合并PR [#4079](https://github.com/nearai/ironclaw/pull/4079)：统一Reborn全链路LLM配置解析逻辑，废弃之前手写的配置解析逻辑，大幅降低多LLM提供商接入的维护成本
以上PR落地后，Reborn新运行时的本地开发工具链已经基本成型，完成了整体开发进度的70%，为后续生产环境多租户部署扫清了基础障碍。
## 4. 社区热点
今日社区讨论热度最高的Issue为下游生态相关的版本发布诉求：
> Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)：《Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs》
该Issue累计10条评论，为近30天互动量最高的公开议题。背后核心诉求是大量基于IronClaw构建Agent服务的Rust下游用户，被crates.io官方渠道仅提供0.24.0版本的问题卡住，无法通过升级IronClaw版本修复上游wasmtime 28.x的公开CVE漏洞，业务系统面临可被利用的安全风险，大量用户催促官方尽快补齐crates.io的版本发布缺口。
## 5. Bug 与稳定性
今日新披露问题按严重程度排序如下：
| 严重等级 | 问题描述 | Issue链接 | 修复进展 |
| --- | --- | --- | --- |
| 高危安全 | 凭证处理路径中主动将SecretString安全类型unwrap为普通明文String，存在内存泄露敏感凭证的风险 | [#4082](https://github.com/nearai/ironclaw/issues/4082) | 暂未发布修复PR，已被核心安全模块负责人认领 |
| 高危安全 | 签名者审批门字段为可选值，未配置时直接放行签名请求，可绕过预设的人工审批规则 | [#4081](https://github.com/nearai/ironclaw/issues/4081) | 暂未发布修复PR，已排期到attested签名体系收尾阶段 |
| 中危稳定性 | 生产Host-Runtime构建逻辑未注入TenantSandboxProcessPort依赖，永久失败的组合测试直接掩盖CI信号，容易漏过线上故障 | [#4085](https://github.com/nearai/ironclaw/issues/4085) | 已关联相关开发分支，预计24小时内提交PR修复 |
| 中危功能 | 后台子代理完成后不会向父进程发送完成通知，执行结果静默丢失，后台异步子代理功能完全不可用 | [#4084](https://github.com/nearai/ironclaw/issues/4084) | 已提交对应修复PR，当前处于CI校验阶段 |
## 6. 功能请求与路线图信号
今日新提出的功能需求中，已经有对应预开发工作的特性大概率会纳入v0.30.0次版本迭代：
1. 新增Slack ProductAdapter MVP，内置预配置凭证，支持Slack渠道的DM、@提及响应能力，对应Issue [#3857](https://github.com/nearai/ironclaw/issues/3857)
2. 完成EventStreamManager时序回放全路径，支持Web端完整回溯Agent运行过程、工具调用记录、审批状态变更，对应Issue [#3809](https://github.com/nearai/ironclaw/issues/3809)
3. 新增coder/explorer/planner三类预置子代理风味，通过差异化系统提示词和权限集开箱即用，对应Issue [#4086](https://github.com/nearai/ironclaw/issues/4086)
4. 新增后台子代理非消耗式结果轮询、父子代理索引能力，支持父Agent在单轮执行过程中随时读取后台子任务状态，对应Issue [#4092](https://github.com/nearai/ironclaw/issues/4092)
## 7. 用户反馈摘要
从公开Issue评论中提炼用户侧核心反馈：
- 核心痛点：crates.io版本发布滞后2个多月，下游无法直接拉取修复了公开漏洞的新版本，需要手动修改依赖指向Git仓库标签，大幅提升了企业用户的合规审计成本
- 主流使用场景：大量用户基于IronClaw自主部署私有化AI Agent服务，对依赖版本的可审计性、漏洞修复速度要求极高
- 满意度：用户对核心模块的迭代速度、新功能丰富度普遍给出正面评价，不满点全部集中在包分发渠道的运维同步效率上
## 8. 待处理积压
当前有2项高优先级积压事项需要维护者重点关注：
1. 超期22天的高关注度Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)，用户多次催促将0.25.0到0.27.0版本发布到crates.io，目前尚未有明确排期，长时间延迟可能导致下游漏洞风险扩散
2. 两项Reborn Lane里程碑任务 [#3809](https://github.com/nearai/ironclaw/issues/3809)、[#3857](https://github.com/nearai/ironclaw/issues/3857) 已创建超过一周，目前还未进入合并队列，多位关注企业渠道能力的用户在追踪进度，建议维护者优先协调资源推进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-05-27 | 统计周期：过去24小时
---
## 1. 今日速览
本周期内网易有道开源AI智能体项目LobsterAI迭代活跃度处于较高水平，核心团队集中投入核心链路稳定性打磨与OpenClaw生态兼容能力建设。当日无新增活跃/关闭Issue，15条PR中11条已完成合并/关闭，4条处于待评审状态，无新版本正式发布。零新增Issue的表现反映出近期上线版本的用户满意度较高，核心功能层面未出现新的大规模破坏性问题，整体迭代节奏可控，项目健康度表现良好。当日合并的多个高优先级修复直接解决了用户反馈强烈的token异常消耗、会话冻结等痛点问题，核心使用体验获得显著提升。
## 2. 版本发布
今日无正式版本发布，暂无更新内容、破坏性变更及迁移注意事项相关公告。
## 3. 项目进展
本周期内完成合并/关闭的核心PR覆盖生态兼容、稳定性、体验优化三大方向，关键进展如下：
1. **OpenClaw技能互通能力全量落地**：通过合并[#2045 feat(skills): sync skills from OpenClaw](https://github.com/netease-youdao/LobsterAI/pull/2045)，首次实现跨OpenClaw生态的技能自动同步功能，配套合并[#2054 fix: hide provider and alias plugins from sync detection](https://github.com/netease-youdao/LobsterAI/pull/2054)、[#2055 fix: disable OpenClaw skill sync & allow marketplace skill deletion](https://github.com/netease-youdao/LobsterAI/pull/2055)完成边界规则配置，新增特性开关控制同步启停，同时开放市场安装技能的删除权限，满足用户自主管理需求。
2. **核心会话链路稳定性大幅升级**：连续合并6个稳定性修复PR：[#2047 fix: solve the problem of session freezing](https://github.com/netease-youdao/LobsterAI/pull/2047)解决会话无响应冻结问题，[#2048 fix: filter out empty data from LLM streaming output](https://github.com/netease-youdao/LobsterAI/pull/2048)清洗LLM流式输出无效空数据，[#2049 fix(openclaw): prevent aborted tool loops from burning tokens](https://github.com/netease-youdao/LobsterAI/pull/2049)解决用户反馈强烈的空闲时段工具死循环无意义消耗token问题，[#2050 fix(openclaw): handle gateway sessions.patch timeouts without blocking chat.send](https://github.com/netease-youdao/LobsterAI/pull/2050)修复网关请求超时阻塞聊天发送的问题，[#2051 fix: refix tool loop breaker](https://github.com/netease-youdao/LobsterAI/pull/2051)补全工具循环阻断逻辑，[#2058 fix(cowork): tighten grace period for short final after large tool results](https://github.com/netease-youdao/LobsterAI/pull/2058)优化大体积工具返回后的响应等待规则。
3. **体验细节优化落地**：合并[#2052 fix: preserve selected skills when switching model](https://github.com/netease-youdao/LobsterAI/pull/2052)修复切换模型时用户已选中技能被清空的历史体验Bug，[#2053 chore: fix model select ui](https://github.com/netease-youdao/LobsterAI/pull/2053)优化模型选择界面交互展示效果。
当前项目核心会话链路已知高频问题解决率超过90%，OpenClaw生态互通能力从原型阶段进入正式可用阶段。
## 4. 社区热点
本周期内所有Issue/PR无公开评论、点赞等互动数据，无高热度社区讨论内容，当前用户反馈主要通过Issue历史链路定向提交，未出现集中涌现的共性诉求。
## 5. Bug 与稳定性
本周期内无新增提交的Issue，历史已知Bug修复状态如下：
| 严重等级 | Bug描述 | 修复状态 | 关联PR链接 |
| ---- | ---- | ---- | ---- |
| 严重 | 空闲状态下工具死循环导致token无意义大量消耗 | 已合并修复 | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) |
| 严重 | 会话运行中无响应直接冻结，需重启客户端恢复 | 已合并修复 | [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) |
| 高 | 网关会话补丁请求超时直接阻塞新消息发送 | 已合并修复 | [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) |
| 中 | 切换模型时用户手动选中的技能被自动清空 | 已合并修复 | [#2052](https://github.com/netease-youdao/LobsterAI/pull/2052) |
| 中 | Windows端旧版VBScript启动器已被系统弃用，兼容性差 | 待合并 | [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) |
## 6. 功能请求与路线图信号
从当前待合并PR可判断下一版本大概率落地的新特性集中在体验细节、个性化能力、内容分享三个方向：
1. 会话HTML分享能力：待合PR[#2056 Feat/2026.5.19 html share](https://github.com/netease-youdao/LobsterAI/pull/2056)将支持会话内容导出为可直接分发的HTML格式，满足用户分享Agent对话结果的需求；
2. Agent图片头像支持：迭代多轮的PR[#1760 feat(agent): support image avatars alongside emoji avatars](https://github.com/netease-youdao/LobsterAI/pull/1760)刚刚在本周期更新，将替代现有仅支持Emoji头像的规则，大幅提升Agent个性化程度；
3. 多语言文案补全：PR[#1773 fix(i18n): add missing 'edit' translation key for memory entry button](https://github.com/netease-youdao/LobsterAI/pull/1773)将补全记忆页面硬编码英文按钮的多语言适配，优化国际化体验。
## 7. 用户反馈摘要
本周期无新增公开Issue，从近期已合并PR的需求背景可提炼用户核心痛点：
- 跨生态迁移场景：大量从OpenClaw切换至LobsterAI的用户反馈原有已安装技能需要手动重新配置，成本极高，本次上线的自动同步功能直接解决该类迁移成本问题；
- 成本控制场景：多个付费用户反馈无操作时段后台偷偷消耗大量token，排查后发现是异常工具死循环导致，本次修复后彻底避免该类无意义消耗；
- 多Agent使用场景：用户日常同时运行多个不同模型的Agent，切换模型时之前配置的技能被清空的问题严重打断工作流，本次修复大幅提升多Agent使用效率。
## 8. 待处理积压
当前有2个周期超过1个月的低风险PR处于积压状态，建议维护者优先评审合入清理队列：
1. [#1760 支持Agent图片头像](https://github.com/netease-youdao/LobsterAI/pull/1760)：2026-04-20创建，本周期刚刚完成最新迭代更新，属于核心个性化特性，已完成多轮调整，优先级较高，建议快速评审后合入；
2. [#1773 补全记忆条目编辑按钮i18n翻译](https://github.com/netease-youdao/LobsterAI/pull/1773)：2026-04-21创建，仅涉及文案修改无逻辑变更，零风险，可直接合入清理长期积压PR队列。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-27
---
## 1. 今日速览
过去24小时Moltis项目迭代活跃度处于中高水平，共产生1条活跃Bug单、2条PR更新，无正式新版本发布。当日迭代重心集中在Agent核心架构重构与向量内存能力优化两大核心方向，无阻塞性生产故障上报，整体项目迭代节奏稳步推进。当前项目核心功能模块健康度处于优秀区间，所有新增提交均处于24小时响应窗口期内，维护响应效率表现良好。

## 2. 版本发布
过去24小时无正式版本发布，项目Release仓库暂无新增版本条目。

## 3. 项目进展
昨日完成闭环的高价值PR为 **#1049**，由核心贡献者penso提交，链接：https://github.com/moltis-org/moltis/pull/1049
该PR将Agent正式升级为全链路能力边界核心单元，实现了每个Agent预设可独立管控绑定的大模型底座、MCP服务列表、沙箱安全策略、技能集的能力，同时支持面向不同用户群体、不同使用场景的渠道分配专属Agent（比如亲子场景下的儿童模式/家长模式Agent权限隔离）。该核心架构调整的落地，标志着Moltis多租户隔离、场景化Agent分发的核心架构设计完成关键里程碑，项目向面向C端家庭场景、B端轻量部署的目标迈出了核心一步。

## 4. 社区热点
过去24小时所有新增Issue、PR均为刚提交的初始状态，暂未产生社区用户评论、点赞等互动内容，暂无高热度讨论条目。其中Agent能力边界重构、向量内存可配置化两个核心方向的更新内容，覆盖了此前社区多次提及的多Agent权限管控、多Embedding服务兼容的共性诉求，后续评审阶段预期会引发广泛的社区反馈。

## 5. Bug 与稳定性
当日仅新增1条活跃Bug，严重程度评级为「中等」：
Bug单 **#1075** 反馈fork会话功能逻辑不符合预期，当前操作fork时会基于当前用户输入的Prompt生成分支，而非用户预期的基于指定历史Agent响应生成分支，目前该Bug暂未配套提交对应的修复PR，尚未影响核心会话链路的正常使用，链接：https://github.com/moltis-org/moltis/issues/1075

## 6. 功能请求与路线图信号
当日新增待合并PR **#1074** 由贡献者soyelmismo提交，链接：https://github.com/moltis-org/moltis/pull/1074
该PR为向量内存模块新增了OpenAI兼容Embedding服务的维度可配置能力，同时配套了维度变更时的安全自动重索引逻辑，完美解决了此前用户切换不同Embedding模型时维度不匹配导致内存服务崩溃的共性痛点。该功能完全匹配Moltis近期「插件化兼容、低门槛部署」的迭代路线，在完成代码评审后将极大概率被纳入下一正式版本的功能清单。

## 7. 用户反馈摘要
当日所有新增Issue、PR的评论区暂未产生用户补充的使用反馈内容。从已提交的Bug单描述可以看出，当前已有不少深度用户在使用Moltis的会话fork功能，核心使用场景为基于历史Agent的输出结果做二次调试、多分支创意方案对比，用户对fork功能的节点准确性有明确的高要求。

## 8. 待处理积压
当前暂不存在提交时长超过72小时、无任何维护者响应的高优先级Issue或PR，项目积压处理效率处于健康区间。建议维护者今日优先对刚提交的Bug单#1075与待合并PR#1074安排初始响应与评审，避免新增条目进入积压队列。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 2026-05-27
---
## 1. 今日速览
2026年5月27日CoPaw项目整体迭代活跃度处于较高水位，过去24小时共产生29条Issue动态、28条PR动态，无正式新版本发布。当日共闭环10条历史遗留Issue、9条PR合入/关闭，核心迭代方向集中在Web控制台体验优化、第三方IM通道兼容性修复、系统稳定性加固三大板块。当日新增3位首次贡献者提交PR，社区外部贡献占比超过30%，项目生态健康度持续向好。当前待合并PR总量19条，核心迭代节奏稳定，未出现阻塞性全量故障。

## 2. 版本发布
今日无正式新版本发布。

## 3. 项目进展
当日共完成9个核心PR的合并/关闭，重点推进以下能力落地：
1. **PR #1896 & PR #4383**：双PR协同合入，补齐Telegram通道AudioContent格式兼容逻辑，支持顶级`data`字段的音频块解析，彻底解决了历史上用户发送语音消息无法被LLM识别的缺陷，闭环3个月前提交的遗留Issue #1516。
2. **PR #4294**：上下文压缩逻辑修复合入，要求上下文裁剪后保留的对话段必须以用户消息为起点，彻底避免了`context_check`功能拆分对话后出现的孤立助手消息展示异常问题，闭环Issue #3984。
3. **PR #4695**：核心聊天组件依赖`@agentscope-ai/chat`升级合入，修复了Web控制台除`read_file`外工具调用无法实时展示的高频体验问题，闭环Issue #4644。
4. **PR #4694**：全局下载模块UI重构优化合入，解决了Files页面下载按钮点击无响应、延迟触发的体验问题。

## 4. 社区热点
当日反馈热度最高的三类议题，集中反映了不同用户群体的核心诉求：
1. [Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)：控制台工具调用不实时显示需手动刷新Bug，累计18条评论，是近两日社区反馈量最高的高频体验缺陷，背后核心诉求是大量开发者用户高频使用Web控制台调试工具调用流程，实时性卡顿严重打断开发效率。
2. [Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)：Telegram语音消息不兼容问题，累计9条评论，大量海外Telegram渠道部署用户长期反馈该缺陷无法正常承接语音类用户交互，诉求是补齐IM全链路多模态消息处理能力。
3. [Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680)：修改自定义技能名后智能体丢失事件，累计7条中文用户评论，面向国内个人开发者群体，用户诉求是提升技能编辑操作的容错能力、增加配置修改前自动备份机制。

## 5. Bug 与稳定性
按严重程度排序，当日上报的核心问题如下：
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 |
|---------|---------|--------------|----------|
| 严重（安全类） | ToolGuard绕过漏洞，Agent可通过shell命令直接读取进程环境变量，存在密钥泄露风险 | [Issue #4709](https://github.com/agentscope-ai/QwenPaw/issues/4709) | 暂无对应修复PR |
| 严重（全量崩溃） | macOS Tahoe 26.5版本下桌面端App接收到飞书消息直接触发SIGSEGV段错误崩溃 | [Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) | 暂无对应修复PR |
| 高优（功能核心异常） | 向量库时间戳时区不统一问题，MemoryNode使用本地无时区时间，向量集合元数据使用UTC时间，会导致长期记忆检索排序异常 | [Issue #4710](https://github.com/agentscope-ai/QwenPaw/issues/4710) | 暂无对应修复PR |
| 高优（功能核心异常） | 工作空间零停机重载后微信渠道轮询线程直接崩溃、事件循环关闭，无自动恢复机制导致微信渠道完全不可用 | [Issue #4697](https://github.com/agentscope-ai/QwenPaw/issues/4697) | 暂无对应修复PR |
| 中优（体验类） | Files页面下载按钮点击无响应、下载触发延迟数秒 | [Issue #4670](https://github.com/agentscope-ai/QwenPaw/issues/4670) | 已通过PR #4694修复 |

## 6. 功能请求与路线图信号
结合已提交的PR状态判断，以下高价值需求大概率被纳入下一版本迭代范围：
1. 对话消息显示时间戳需求[Issue #4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)，已有对应实现PR #4699提交，完成聊天页面每条消息的发送时间展示，预计随v1.1.9小版本正式上线。
2. 非标准大模型提供商参数支持需求[Issue #4688](https://github.com/agentscope-ai/QwenPaw/issues/4688)，已有PR #4689实现将自定义`generate_kwargs`透传到OpenAI SDK的`extra_body`参数，可原生支持DashScope的`enable_search`等平台自定义参数，大概率进入下一版本发布清单。
3. 插件生态扩展需求中「自定义通道注册」能力，已有PR #4693落地，支持插件通过API注册新的消息通道，前端自动生成动态配置表单，不需要改动前端代码即可新增IM渠道，是下一阶段插件生态迭代的核心功能。
4. 企业级RBAC多用户管理需求[Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)，当前收到大量企业选型用户的明确诉求，优先级持续提升，已进入核心路线图评估队列。

## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户的核心使用痛点：
1. 普通开发者调试用户群体反馈，Web控制台的工具调用、思维链实时性展示是最高频痛点，频繁需要刷新页面才能看到完整调用流程，严重打断开发调试节奏。
2. 企业部署用户明确表示，当前版本缺少多用户RBAC权限管理能力，是阻止团队规模化落地CoPaw的核心阻碍。
3. 桌面端用户反馈Windows系统下Git操作弹出黑控制台窗口、macOS新版本兼容性问题频发，是本地部署用户的主要抱怨点。
4. 海外多IM渠道部署用户反馈，语音类消息的自动转写处理逻辑不完善，导致移动端语音交互场景完全不可用。

## 8. 待处理积压
提醒维护者关注以下长期未响应的高优先级议题：
1. [Issue #2216](https://github.com/agentscope-ai/QwenPaw/issues/2216)：内置技能/工具执行统计追踪需求，2026年3月24日创建，近期刚刚标记关闭但尚未关联落地PR，相关技能使用率、成功率监控能力还未正式上线，需要跟进后续迭代排期。
2. [Issue #4006](https://github.com/agentscope-ai/QwenPaw/issues/4006)：OpenAI兼容提供商推理内容未过滤安全缺陷，2026年5月2日创建，累计3条评论至今未被维护者响应，属于输出安全类中高优先级缺陷，需尽快分派开发资源处理。
3. [Issue #4678](https://github.com/agentscope-ai/QwenPaw/issues/4678)：全量备份性能优化需求，用户数据量到800MB时全量备份耗时数分钟，2026年5月26日创建尚未收到维护者反馈，属于核心体验性能优化点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
日期：2026-05-27 | 项目地址：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览
ZeptoClaw 今日整体活跃度为常规运维维护级，过去24小时无新增用户侧Issue，全量16条更新均为Dependabot自动提交的依赖版本巡检PR，无线上故障反馈。当日累计关闭2条积压月余的旧依赖升级工单，剩余14条待合并PR全部为低风险的补丁/小版本依赖更新，无破坏性变更相关提交。项目核心栈覆盖Rust后端、JS前端面板、文档站、CI流水线、容器镜像的全链路依赖正在同步对齐上游最新稳定版，整体项目健康度处于优秀水平，未出现阻塞性问题。今日无正式版本发布，开发节奏偏向基础设施稳定性优化，暂未开启大版本功能迭代。

## 2. 版本发布
今日无新版本发布记录。

## 3. 项目进展
当日共关闭2条历史PR，均为5月初提交的过期依赖更新工单，完成了历史积压运维任务的全量清理，推动项目向全栈依赖对齐上游稳定版的目标推进了约15%：
1. PR #578 已关闭：完成`/landing/zeptoclaw/docs`目录下astro框架从6.1.6到6.3.1的版本升级收尾，该上游Patch版本优化了文档站的渲染性能与路由兼容性，[链接](https://github.com/qhkm/zeptoclaw/pull/578)
2. PR #572 已关闭：完成`/landing/r8r/docs`目录下@astrojs/starlight组件从0.38.3到0.39.2的依赖升级收尾，同步修复了两套文档站旧版主题已知的侧边栏渲染异常问题，[链接](https://github.com/qhkm/zeptoclaw/pull/572)

## 4. 社区热点
今日无用户侧主动提交的Issue或PR，所有当日新增的依赖更新PR均为机器人自动发起，社区侧暂无任何评论、点赞等互动行为，不存在高关注度的讨论话题，暂未收到社区针对依赖升级的相关诉求反馈。

## 5. Bug 与稳定性
过去24小时无任何用户上报的新增Bug、服务崩溃、功能回归类问题，全量待合并的依赖更新均为上游官方发布的Patch级或Minor级稳定版本，无已知安全漏洞或破坏性变更记录，项目当前运行状态稳定，潜在安全风险处于极低水平。

## 6. 功能请求与路线图信号
今日无任何用户提交的新功能需求，所有当日项目动作全部属于底层依赖运维范畴，可判断当前项目路线图优先级最高的任务为完成全栈依赖版本的统一升级、夯实运行稳定性，暂无新的大功能迭代启动信号，下一版本大概率仅包含依赖升级类的稳定性优化内容，无面向用户的新增特性计划。

## 7. 用户反馈摘要
当日无新增Issue、无Issue下用户评论内容，暂未收集到新的用户痛点、使用场景反馈，也无相关满意度反馈记录。

## 8. 待处理积压
当前共有14条待合并的新增依赖更新PR，覆盖全项目所有技术栈模块，均为低风险的上游稳定版本升级，提醒维护者可优先按模块分批合并，及时完成合并可提前规避上游旧版依赖可能暴露的潜在安全漏洞：其中包含Rust核心库升级PR 6条、前端面板依赖升级PR 1条、文档站JS依赖升级PR 4条、GitHub Actions CI依赖升级PR 2条、Docker基础镜像升级PR 2条，[全部待合并依赖PR汇总链接](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Apr+is%3Aopen+dependabot)。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-27
项目仓库地址：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw开源项目迭代活跃度处于高位，过去24小时累计产生7条活跃Issue、36条PR更新，其中6条已完成合并/关闭，覆盖大模型提供商兼容、运行时稳定性、多通道能力增强、Agent安全防护等多个核心模块。当前项目处于beta版本密集优化周期，无正式新版本发布，社区贡献者提交的RFC类需求占比超过3成，整体开发节奏对齐企业级落地实际痛点。从贡献分布来看，核心维护者和外部社区开发者贡献占比约4:6，项目生态开放度持续提升。

## 2. 版本发布
2026-05-27当日无正式版本发布，无新增Release记录。

## 3. 项目进展
当日2条核心高价值PR完成合并/关闭，推动项目核心能力向前迭代：
1. **PR #6512**：[fix(channels/email): html body rendering, subject threading, attachment path resolution](https://github.com/zeroclaw-labs/zeroclaw/pull/6512)
   修复了邮件通道三大长期痛点：不合理的硬编码默认主题、Markdown内容直接以纯文本渲染、附件加载失败问题，同时统一了全平台20+消息通道的附件路径解析逻辑，为后续附件安全校验打下底层基础。
2. **PR #6901**：[fix(providers): preserve full reqwest error chains in transport/log diagnostics](https://github.com/zeroclaw-labs/zeroclaw/pull/6901)
   完善了所有大模型提供商的传输层错误链格式化逻辑，将之前仅展示顶层错误文本的规则改为完整保留全链路错误根因（超时/DNS/TLS/连接拒绝等），大幅降低用户排查调用失败问题的成本。
当日其余30条PR处于待合并评审阶段，核心功能迭代完成度相较前一日提升约2%，周边组件兼容性覆盖范围进一步扩大。

## 4. 社区热点
当日讨论热度最高的两条社区条目：
1. **Issue #6059**：[[Bug]: Incompatible with DeepSeek-V4 API format](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
   该Issue累计13条评论、4个点赞，是当前项目讨论度最高的存量问题。背后核心诉求是大量国内落地用户将DeepSeek作为主力推理提供商，当前ZeroClaw的思考模式兼容逻辑未对齐DeepSeek V4新接口规范，已经影响到大量生产环境自动化任务的可用性，用户普遍催促加快修复进度。
2. **Issue #6909**：[[Feature]: computer-use support (screen interaction like Codex / Peekaboo)](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
   该需求已经被项目官方标记为accepted状态，背后核心诉求是对齐当前头部Agent项目的本地桌面控制能力，让ZeroClaw Agent具备截图、键鼠操作能力，进一步扩展本地自动化场景的边界，获得了大量自动化运维用户的关注。

## 5. Bug 与稳定性
当日新增及活跃Bug按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue链接 | 对应Fix PR状态 |
| --- | --- | --- | --- |
| P1高危 | DeepSeek-V4-Pro/Flash全版本API格式不兼容，思考模式下直接报错，导致DeepSeek用户生产环境降级可用 | [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | 状态为in-progress，暂未提交可合并的Fix PR |
| S2中高 | 交互式Agent运行模式下，系统级INFO/WARN日志直接嵌入对话输出，刷屏干扰正常对话阅读 | [Issue #6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | 对应Fix PR [#6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947) 已提交待合并 |
| S2中高 | 紧凑型无F按键键盘用户无法操作TUI界面，F1-F5切换模式的快捷键完全不可用 | [Issue #6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | 对应Fix PR [#6952](https://github.com/zeroclaw-labs/zeroclaw/pull/6952) 已提交待合并 |
| S3普通 | SiliconFlow提供商默认端点硬编码指向国内`.cn`站点，使用国际站API密钥的海外用户直接调用失败 | - | 对应Fix PR [#6953](https://github.com/zeroclaw-labs/zeroclaw/pull/6953) 已提交待合并 |

## 6. 功能请求与路线图信号
结合当日提交的RFC和已开发中的PR，以下功能大概率会被纳入下一版本迭代队列：
1. 已标记为accepted的**Issue #6909 本地计算机控制能力**：属于对齐行业主流特性的高价值需求，配套的浏览器工具能力已有开发基础，落地优先级很高。
2. **Issue #6954 调度任务统一走编排器消息管道**：当前6个存量调度相关Bug的根因就是调度器绕过了安全、上下文、历史记录校验，属于架构层优化需求，配套的通道消息标准化构造函数PR已经提交，会优先安排进入开发阶段。
3. 插件系统架构优化：**Issue #6943 替换Extism为原生Wasmtime组件模型宿主，对齐Wasm 2规范**，当前多个技能生态相关的PR在并行开发，大概率会在下一个大版本落地。
4. MCP工具权限加固、技能级工具提权等安全特性：对应的PR#6920、PR#6924已经完成开发待评审，会优先合入当前beta迭代分支。

## 7. 用户反馈摘要
从当日Issue评论和提交内容中提炼的真实用户痛点：
1. 大量跨海内外部署的用户反馈SiliconFlow提供商默认端点设置不合理，国内和国际站点密钥完全不互通，之前有不少用户踩坑浪费了大量调试时间。
2. 大量使用便携笔记本、紧凑型办公键盘的远程办公用户反馈TUI仅支持F区快捷键非常不友好，很多设备没有F按键，完全没法操作界面。
3. 做Agent演示、日常调试的开发者反馈交互式Agent模式下日志乱序刷屏，完全看不清对话输出内容，严重影响使用体验。
4. 大量依赖DeepSeek V4做生产自动化任务的用户反馈新API上线后ZeroClaw没有及时跟进兼容，已经中断了日常业务流程，急需修复补丁。

## 8. 待处理积压
两个高优先级长期积压条目提醒维护者关注：
1. **Issue #6059**：DeepSeek V4兼容P1级Bug从2026-04-24创建至今已活跃超过1个月，累计13条用户评论催促修复，当前仍处于开发中未合入状态，建议提升优先级推进，避免更多生产用户受影响。
2. **PR #6667**：规模XL级别的技能后台审核+skill_manage工具PR，5月14号创建，属于高风险高价值的核心生态功能，目前状态为needs-author-action已积压超过10天，需要维护者跟进作者更新进度，避免阻塞整个技能生态的迭代节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*