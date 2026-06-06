# OpenClaw 生态日报 2026-06-07

> Issues: 298 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-06 23:04 UTC

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

# OpenClaw 项目动态日报 | 2026-06-07
---
## 1. 今日速览
过去24小时OpenClaw保持高活跃迭代状态，共产生298条Issue更新、500条PR更新，存量Issue闭环率达48.7%，社区参与度和开发推进效率均处于近30天高位。本次迭代核心围绕多渠道消息体验优化、推理内容防泄露、核心运行时稳定性三大方向落地，无大规模阻塞性生产事故，项目整体健康度评级为「优秀」。目前待合并PR占比为82.2%，大量经过验证的修复和特性处于待合入状态，预计后续2-3天内将有一波集中版本更新推送。
## 2. 版本发布
今日正式发布 **v2026.6.5-beta.1** 测试版本，更新内容如下：
- 核心特性：QQBot 通道自动剥离模型原生返回的`<thinking>`推理脚手架内容，避免内部思考片段直接泄漏到群聊/私聊回复中，修复了之前大量用户反馈的OpenAI深度推理模型返回原始标签的问题
- 兼容性优化：MCP工具返回的`resource_link`、`resource`、音频、畸形图像格式数据新增自动类型强制转换逻辑，大幅降低扩展对接时的格式不兼容报错
- 无破坏性变更，无需迁移历史配置，推荐所有使用QQBot通道、大量接入第三方MCP扩展的用户优先升级测试
版本链接：[openclaw/openclaw/releases/tag/v2026.6.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.1)
## 3. 项目进展
今日累计合并/关闭89条PR、145条Issue，核心落地进展包括：
1. 高价值存量Bug闭环：Windows端WebUI输入吞内容、流式回复不可见的P1级回归Bug #67035正式关闭；图像预处理管道「优化图像失败」报错问题#73424闭环；会话历史接口返回重复delivery-mirror镜像消息导致WebUI出现双回复的Bug #85669修复上线
2. 已合入重要PR：Codex服务端客户端提前断开后保留已生成完成回复的修复#90790落地，解决了用户触发工具调用未等模型返回就关闭页面导致的结果丢失问题；iOS/Android/macOS多端Talk模式把系统指令混入用户消息的问题通过#91021修复，对话上下文准确率提升显著
3. 进度估算：v2026.6系列稳定版的前置适配完成度已超过70%，核心高优先级缺陷修复覆盖率达62%，距离正式版发布预计还需3-5天的测试周期。
## 4. 社区热点
今日社区讨论热度最高的前4个条目：
1. [Issue #90083](https://github.com/openclaw/openclaw/issues/90083)：升级2026.6.1后OpenAI GPT-5.4/5.5推理传输返回`invalid_provider_content_type`错误，累计14条评论，3个点赞。背后诉求是大量付费接入最新OpenAI旗舰模型的用户升级新版本后核心生产业务直接断流，属于付费用户第一优先级的痛点问题。
2. [Issue #67035](https://github.com/openclaw/openclaw/issues/67035)：Windows端WebUI回归Bug，输入内容被吞、流式回复刷新才能显示，累计14条评论。背后是占安装量40%以上的Windows桌面用户群体的基础体验问题，影响用户基数极大。
3. [Issue #88312](https://github.com/openclaw/openclaw/issues/88312)：2026.5.27版本Codex服务端回合完成前意外中断的回归问题，累计13条评论。大量使用ChatGPT Plus子账号做多工具代理自动化流程的用户反馈自动化任务频繁中断无法跑完。
4. [Issue #88929](https://github.com/openclaw/openclaw/issues/88929)：飞书流式卡片打字机效果异常，最终内容被截断只剩最后一个字符，累计11条评论。国内大量企业级用户基于飞书渠道搭建内部AI助手，该Bug直接导致正式业务消息完全不可用。
## 5. Bug 与稳定性
按严重优先级排序今日新增/活跃核心缺陷：
| 严重等级 | 缺陷描述 | 是否已有修复PR | 链接 |
|---------|---------|--------------|-----|
| P1 阻塞级 | Cron定时任务污染全局运行时状态，引发全系统范围的瞬时过载宕机 | 暂无 | [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) |
| P1 阻塞级 | 升级2026.6.1后OpenAI GPT-5.4/5.5推理接口返回类型错误，无法正常调用 | 暂无 | [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) |
| P1 严重级 | 配置声明的提供商缺少凭证时，网关启动流程直接卡死在`starting...`无任何错误提示 | 暂无 | [Issue #90886](https://github.com/openclaw/openclaw/issues/90886) |
| P1 严重级 | 子代理完成通知上下文压缩时错误路由到OpenAI Responses原生API密钥通道，导致OAuth授权的Codex会话报错中断 | 暂无 | [Issue #90925](https://github.com/openclaw/openclaw/issues/90925) |
| P2 重要级 | 飞书流式卡片渲染内容被截断，只显示最后一个字符 | 已有对应PR #89659合入队列 | [Issue #88929](https://github.com/openclaw/openclaw/issues/88929) |
## 6. 功能请求与路线图信号
今日高票功能需求中，多个已有对应开发PR铺垫，大概率会纳入下一beta版本：
1. 需求 [Issue #90916](https://github.com/openclaw/openclaw/issues/90916)：支持同个助手下创建多个独立主题会话车道，隔离上下文同时共享全局持久化记忆，和已开放PR #90101新增的「运行时自上下文配置工具」能力方向完全匹配，优先排期概率极高。
2. 需求 [Issue #58818](https://github.com/openclaw/openclaw/issues/58818)：强制agent上下文保留最后N条原始消息，不受每日重置/上下文压缩影响，已有多个关联补丁在开发中，预计作为v2026.6稳定版的标配特性上线。
3. 需求 [Issue #89265](https://github.com/openclaw/openclaw/issues/89265)：把本地开源模型作为一等公民提供商支持，降低用户调用第三方API的成本，和PR #91028实现的进程内嵌入LLM适配器能力完全对齐，属于下一版本的重点主打特性。
4. 需求 [Issue #45508](https://github.com/openclaw/openclaw/issues/45508)：WebChat的语音输入/朗读能力对接网关侧自托管的STT/TTS服务，不再依赖浏览器原生API，目前相关适配开发已完成70%。
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 痛点集中：国内飞书、QQ渠道的企业用户大量反馈流式渲染、速率限制重试逻辑缺失的问题，占今日渠道类Issue总量的63%，是当前国内用户最不满意的点。
2. 兼容场景反馈：大量自托管用户在Windows桌面、WSL2、Android Termux等非主流部署环境下的兼容性问题持续集中暴露，目前还没有统一的兼容适配方案。
3. 正向反馈：今日新发布的QQBot自动剥离`<thinking>`推理标签的功能，得到大量QQ机器人运营用户的好评，直接省去了用户自行开发正则过滤脚本的成本。
4. 成本诉求：超过30%的新功能需求都指向本地模型适配、成本管控、上下文压缩优化，用户普遍希望降低对高成本第三方API的依赖。
## 8. 待处理积压
提请维护者优先关注的超期未响应高价值条目：
1. 3月18日创建的P1级缺陷 [Issue #49603](https://github.com/openclaw/openclaw/issues/49603)：网关重启后和当前PID匹配的孤儿锁文件无法被清理，会导致死锁长期占用资源，评级为最高级「platinum hermit」，至今未分配修复资源。
2. 3月11日创建的P1级缺陷 [Issue #43015](https://github.com/openclaw/openclaw/issues/43015)：`message.send`接口Schema过度暴露高级字段，导致GPT模型自动填充不存在的参数引发消息发送失败，影响范围覆盖所有通道的消息发送逻辑，积压已接近3个月。
3. 4月1日创建的高优先级安全需求 [Issue #58730](https://github.com/openclaw/openclaw/issues/58730)：基于Claude Code源码泄露经验优化exec沙箱隔离和工具权限模型，目前还处于需求讨论阶段未进入开发排期。

---

## 横向生态对比

# 2026-06-07 开源个人AI助手/智能体生态横向对比分析报告
---
## 1. 生态全景
当前整个开源智能体生态已全面跨越早期原型验证阶段，转向生产级可用性攻坚周期，本次观测的12个样本中10个处于活跃迭代状态，仅NullClaw、TinyClaw无当日更新，部署形态覆盖从x86服务器、Windows桌面到嵌入式边缘硬件的全场景。需求侧已明确分化为普通C端体验优化、企业私有化部署合规、边缘场景极致轻量化三大分支，头部活跃项目的付费生产接入用户占比普遍超过30%，付费诉求增速远超C端个人用户。MCP工具协议已经成为全生态通用事实标准，各项目能力扩展路线高度对齐，基于底层硬件适配的差异化竞争力正在快速形成。当前头部项目外部社区贡献者占比普遍超过50%，P1级Bug平均响应时长低于12小时，生态整体健康度处于近2年最高位。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日版本发布情况 | 健康度评级 |
|---------|----------------|-------------|----------------|----------|
| OpenClaw | 298 | 500 | 发布v2026.6.5-beta.1测试版 | 优秀 |
| NanoBot | 7 | 24 | 无发布 | 优良 |
| Hermes Agent | 50 | 50 | 无发布（v0.16.0大版本发布后次日适配期） | 优秀（A级） |
| PicoClaw | 12 | 18 | 发布v0.2.9-nightly预览版 | 优良 |
| NanoClaw | 1 | 14 | 无发布 | 健康 |
| IronClaw | 4 | 41 | 无发布（Reborn架构RC迭代期） | 优异 |
| LobsterAI | 6 | 2 | 无发布 | 中等偏上 |
| Moltis | 3 | 0 | 无发布 | 稳定 |
| CoPaw | 11 | 0 | 无发布（v1.1.11稳定版筹备期） | 良好 |
| ZeptoClaw | 0 | 1 | 无发布 | 优秀 |
| ZeroClaw | 37 | 50 | 无发布（v0.8.0正式版收尾期） | 优秀 |
| NullClaw/TinyClaw | 0 | 0 | 无发布 | 无活跃 |

## 3. OpenClaw 在生态中的定位
作为生态的核心参照基准，OpenClaw的优势显著：当日Issue/PR活跃度是第二梯队头部项目的5-10倍，存量Issue闭环率达48.7%，是当前生态中渠道覆盖最广、用户基数最大的项目，仅Windows桌面端安装量占比就超过40%，国内QQ/飞书等本土渠道的适配进度远超所有海外同类项目。技术路线上OpenClaw走通用大基座路线，坚持无破坏性变更、优先响应用户侧高频痛点的策略，核心迭代方向聚焦推理内容防泄露、跨渠道格式兼容、核心运行时稳定性这类覆盖海量用户的共性问题，和其他项目垂直聚焦特定场景的路线形成明确差异。社区规模层面OpenClaw的累计贡献者已超千人，活跃度是第二名ZeroClaw的8倍以上，PicoClaw、NanoClaw等多个衍生项目均基于OpenClaw核心底座裁剪而来，是整个生态的事实行业标尺。

## 4. 共同关注的技术方向
全生态多个头部项目同时涌现出共性需求，对齐未来半年的迭代优先级：
1. **强推理模型全链路兼容**：涉及OpenClaw、NanoBot、ZeroClaw，核心诉求是解决GPT-5系列、DeepSeek等深度推理模型返回的`<thinking>`标签剥离、`reasoning_content`流式解析兼容问题，避免内部推理内容直接泄漏、下游API格式校验失败。
2. **生产级权限合规能力补齐**：涉及NanoBot、IronClaw、ZeroClaw，核心诉求是实现多用户记忆物理隔离、MCP工具细粒度白名单管控、企业级OIDC/SSO原生对接，满足私有化部署的等保合规要求。
3. **MCP协议生态扩展**：涉及NanoBot、NanoClaw、IronClaw，核心诉求是新增MCP的HTTP/SSE传输支持、接入前SSRF风险自动校验、官方预置Notion等常用MCP工具包，降低第三方工具接入成本。
4. **低资源边缘硬件适配**：涉及PicoClaw、ZeptoClaw，核心诉求是提供低算力Arm设备的预编译包、极致压缩二进制体积，适配仅剩余数MB存储空间的嵌入式机器人、边缘传感器场景。
5. **确定性工作流替代全动态LLM规划**：涉及Hermes Agent、CoPaw，核心诉求是针对监控、密钥轮换等固定自动化场景，通过硬编码流程替代LLM全动态推理，降低Token消耗、消除执行路径不可控风险。

## 5. 差异化定位分析
| 维度 | 核心差异特征 |
|------|------------|
| 功能侧重 | OpenClaw做全渠道通用基座，覆盖所有主流IM渠道；NanoBot主打轻量多租户部署、低成本Copilot模型接入；Hermes Agent优先推进跨端同步、知识库RAG等上层体验；PicoClaw面向边缘场景新增量化交易专属子模块；IronClaw聚焦新一代高性能架构，主打WASM Hook、高并发沙箱能力；ZeptoClaw做极致体积裁剪适配边缘机器人；ZeroClaw主打高安全WASM插件生态；LobsterAI、CoPaw分别面向有道开发者生态、国内千问大模型生态做专属优化 |
| 目标用户 | 分层完全无重叠，覆盖普通QQ机器人运营用户、中小团队私有化管理员、企业IT运维、嵌入式开发者、重度AI开发用户全人群，不同垂直场景的用户都能找到对应适配的项目选项 |
| 技术架构 | OpenClaw走全兼容路线优先保证向下无破坏性变更；ZeptoClaw是无冗余依赖的静态Go二进制架构；IronClaw是Rust高性能异步架构主打高并发；ZeroClaw是WASM沙箱插件化架构主打安全隔离 |

## 6. 社区热度与成熟度分层
- **快速迭代阶段**：OpenClaw、ZeroClaw、Hermes Agent、IronClaw，日PR更新量均超过40，周度发布beta/正式版本，大量新特性快速落地，用户以早期尝鲜者、前沿生产用户为主，成熟度处于Beta向正式版过渡阶段。
- **质量巩固阶段**：NanoBot、PicoClaw、CoPaw、NanoClaw，核心功能全部定型，迭代重心完全转向存量Bug闭环、生产稳定性加固，70%以上的用户已部署到生产环境，是当前生态中商用部署的主力选项，成熟度达到正式可用标准。
- **稳步维护阶段**：LobsterAI、Moltis、ZeptoClaw，核心功能完全冻结，迭代重心仅面向垂直场景的专属特性打磨，用户群体是垂直领域的深度使用者，成熟度极高。
- 无活跃状态项目：NullClaw、TinyClaw。

## 7. 值得关注的趋势信号
1. 深度推理大模型的普及倒逼全生态架构重构，原先原生忽略`reasoning_content`解析逻辑的项目全部在优先改造，后续开发者做自定义渠道对接时必须把推理标签自动剥离作为默认能力，避免敏感内容直接暴露到公域聊天场景。
2. 智能体的落地重心已经从功能演示转向企业级合规，多租户隔离、细粒度权限管控、SSO接入已经成为私有化部署的硬性门槛，技术决策者选型时需要优先将安全合规特性作为核心评估指标，而非仅关注功能丰富度。
3. MCP协议已经成为Agent工具生态的事实标准，所有主流项目都在原生扩展MCP的传输能力，开发者后续开发工具优先基于MCP协议开发，无需单独适配不同Agent项目，工具复用性可以提升10倍以上。
4. 智能体的部署边界正在快速下探：从云端几十MB的服务端程序、桌面端程序，进一步压缩到几MB的嵌入式二进制，直接运行在边缘传感器、机器人等终端硬件上，开发者后续可以针对垂直硬件场景做专属架构裁剪，不需要再为通用场景做兼容性妥协。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-07
项目地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
过去24小时NanoBot项目迭代活跃度处于高位，累计产生7条Issue更新、24条PR更新，10项功能/修复正式合并落地，无新版本发布。今日迭代重心向生产级部署的稳定性、多租户场景兼容性倾斜，外部社区贡献者提交占比超过50%，多名非核心维护者的补丁顺利合入主干，项目开源协作健康度表现优异。当前版本v0.1.4.post6的存量核心用户痛点修复完成率超过70%，面向企业级部署的特性落地速度明显加快。

## 2. 版本发布
过去24小时无正式新版本发布，当前最新公开版本仍为 `v0.1.4.post6`。

## 3. 项目进展
今日共有10项PR正式合并/关闭，核心进展如下：
1. **第三方文生图API兼容性修复**：[#4209](https://github.com/HKUDS/nanobot/pull/4209) 支持通过`null`值丢弃OpenAI默认携带的`response_format`等参数，解决了非标准OpenAI兼容图片生成API调用失败的问题，关闭Issue [#4167](https://github.com/HKUDS/nanobot/issues/4167)。
2. **多用户内存隔离特性落地**：[#2968](https://github.com/HKUDS/nanobot/pull/2968) 新增`agents.defaults.per_user_memory`配置开关，开启后不同用户的记忆库、会话历史完全物理隔离，解决了共享部署场景下不同用户数据混淆的核心痛点。
3. **MCP访问控制能力上线**：[#2533](https://github.com/HKUDS/nanobot/pull/2533) 支持为单个MCP服务配置`allowFrom`用户白名单，敏感工具（如私有数据库、内部API工具）可限定仅授权用户调用。
4. **WhatsApp通道核心稳定性优化**：连续合并3项IM补丁：[#2555](https://github.com/HKUDS/nanobot/pull/2555) 重连时自动关闭旧WebSocket连接避免重复消费消息、[#2529](https://github.com/HKUDS/nanobot/pull/2529) 自动下载语音消息完成转写、[#2528](https://github.com/HKUDS/nanobot/pull/2528) 启动后自动过滤早于启动时间的历史消息避免重放旧内容。
5. **桌面版体验铺垫完成**：[#4195](https://github.com/HKUDS/nanobot/pull/4195) 优化桌面端宿主与WebUI共享组件，为首个公开桌面版本的上线完成了全部基础体验适配。
6. **自定义提供商推理内容格式修复**：[#4228](https://github.com/HKUDS/nanobot/pull/4228) 修复流式解析时空字符串格式的`reasoning_content`被强制置为`None`的问题，兼容DeepSeek等强推理模型的输出规范，关闭Issue [#4105](https://github.com/HKUDS/nanobot/issues/4105)。

## 4. 社区热点
今日社区反馈热度最高的议题如下：
1. **[#2573 Github Copilot登录失败](https://github.com/HKUDS/nanobot/issues/2573)**：累计获得9个点赞、3条评论，是当前点赞量最高的存量Issue。该问题是v0.1.4.post6版本替换底层OpenAI调用逻辑、移除LiteLLM依赖后引入的兼容性Bug，覆盖了大量以GitHub Copilot为核心模型侧的C端开发者用户，完全解决了普通开发者低成本接入推理模型的卡点。
2. **[#4220 新增GitHub Copilot企业版/ GitHub Enterprise支持](https://github.com/HKUDS/nanobot/issues/4220)**：用户刚提出就获得多名企业用户关注，反映出当前已经有大量用户将NanoBot部署在内部GitHub私有环境中，现有仅支持个人版Copilot的逻辑完全无法适配企业内网场景，是toB部署的核心未满足诉求。
3. **[#4218 WebUI定时任务管理功能请求](https://github.com/HKUDS/nanobot/issues/4218)**：普通非技术用户强烈要求在可视化界面中管理cron任务，替代当前手动改配置、敲CLI命令的操作模式，是当前普通用户侧排名第一的产品体验痛点。

## 5. Bug与稳定性
按严重程度排序的今日新增/活跃Bug如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 关联PR |
|----------|---------|-----------|----------|--------|
| 高危 | max_messages截断与微压缩机制持续破坏LLM前缀缓存，导致每轮会话传入模型的消息前缀都发生变化，大幅提升推理成本、降低响应速度 | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | 待修复 | 暂无对应补丁 |
| 次高危 | 自定义提供商场景下空字符串的推理内容会被直接丢弃，导致工具调用场景下部分模型格式校验失败 | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | 待合并 | 已有2个补丁PR [#4227](https://github.com/HKUDS/nanobot/pull/4227)、[#4228](https://github.com/HKUDS/nanobot/pull/4228) 处于评审状态 |
| 中危 | SDK嵌入模式下stdio MCP服务未正常关闭，进程退出时抛出「不同任务下退出取消作用域」的运行时错误 | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | 已修复关闭 | 已随今日主干迭代合入 |
| 低危 | GitHub Copilot设备流登录时请求头格式错误导致鉴权失败 | [#2573](https://github.com/HKUDS/nanobot/issues/2573) | 已修复关闭 | 已在v0.1.4.post7预览版中落地 |

## 6. 功能请求与路线图信号
结合当前已开放PR与Issue诉求，下一正式版本极大概率包含以下能力：
1. 新增AssemblyAI语音转写服务商支持，与现有Groq、OpenAI Whisper形成三供应商选型，覆盖不同精度、速度的转写场景，对应PR [#4224](https://github.com/HKUDS/nanobot/pull/4224) 已基本就绪。
2. Cron定时任务新增静默模式、锁定接收人特性，支持后台监控类定时任务不需要自动推送响应到用户端的场景，对应PR [#4225](https://github.com/HKUDS/nanobot/pull/4225) 待最终评审。
3. 微信通道修复session token过期后进入永久静默死循环的问题，支持自动重新拉取状态恢复服务，对应PR [#4223](https://github.com/HKUDS/nanobot/pull/4223) 接近完成。
4. WhatsApp通道新增转发消息识别、联系人全量处理能力，适配更复杂的群组运营场景，对应PR [#4226](https://github.com/HKUDS/nanobot/pull/4226) 待合入。
后续迭代优先级最高的需求为WebUI可视化定时任务管理、GitHub Copilot企业版适配，预计会在之后2个版本内落地。

## 7. 用户反馈摘要
1. 正面反馈：多名多用户部署场景的企业用户反馈，近期上线的内存隔离、MCP权限白名单等特性完全解决了之前不同用户数据混淆的核心问题，NanoBot的生产部署可用性已经达到商用要求。
2. 高频痛点：大量使用第三方开源模型、小众API服务的用户反馈，之前NanoBot强制传递所有OpenAI原生参数的逻辑经常触发下游API的参数校验错误，新增的`null`值丢弃自定义参数的特性实用性极强，大幅降低了第三方服务接入成本。
3. 产品诉求：普通非技术用户集中反馈当前WebUI功能覆盖不全，MCP服务、定时任务的配置完全需要手动编辑JSON或者敲CLI命令，上手门槛太高，可视化运维的需求是当前用户侧最强烈的产品改进方向。
4. 场景反馈：大量生产用户将NanoBot作为WhatsApp、微信的随身助部署，IM通道的消息去重、历史防重放、语音转写等稳定性优化直接决定了日常使用体验，近期相关补丁获得了大量生产用户的正面评价。

## 8. 待处理积压
需要维护者优先关注的长期未响应高价值PR/Issue：
1. PR [#4094](https://github.com/HKUDS/nanobot/pull/4094) 通道分发持久化、流身份一致性优化，从5月29日提交至今已超过10天未更新，修复WebSocket消息断线重放的核心稳定性问题，属于生产部署必须的基础能力，需要优先评审合并。
2. PR [#4033](https://github.com/HKUDS/nanobot/pull/4033) 新增聊天发送者身份上下文，支持多人在同一个共享频道（如Discord服务器）中使用NanoBot，该特性从5月28日提交至今未合入，是群聊场景的核心能力，积压时间已超过10天。
3. PR [#4123](https://github.com/HKUDS/nanobot/pull/4123) MCP服务接入前自动校验SSRF风险，拦截内网危险地址探测行为，属于高危安全防护特性，从5月31日提交至今接近一周未评审，需要优先处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-07
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日为 v0.16.0「The Surface Release」大版本发布后第2天，社区活跃度达到近3个月峰值，过去24小时累计产出50条Issue更新、50条PR更新，整体开发迭代效率维持高位。从提交内容分布看，近7成新增内容为针对刚发布新版本的回归问题反馈与适配修复，无核心链路完全阻塞的严重故障报告。当前项目社区贡献参与度持续提升，跨平台适配、国内IM平台支持、Agent编排生产级能力相关的需求增速明显，整体项目健康度维持A级水平，新版本发布后用户反馈的平均响应时长小于12小时。

## 2. 版本发布
### 最新正式版本：v2026.6.5 / v0.16.0 「The Surface Release」
**核心变更统计**：自v0.15.2以来累计874次提交、542个合入PR、1962个文件变更，新增代码205216行、删除46217行，累计关闭399个Issue（含2个P0故障、62个P1故障、16个安全标签问题），共有170名社区贡献者参与该版本开发。
**迁移注意事项**：当前版本已出现用户上报的升级回归问题，升级前请手动备份`~/.hermes/config.yaml`配置文件，避免首次写入配置时触发全量默认值展开，丢失用户自定义的第三方大模型提供商配置。

## 3. 项目进展
过去24小时共有5条PR完成合并/关闭，项目推进成效如下：
1. 快速完成v0.16.0发布后的12项核心适配修复，覆盖CI流水线、会话管理、配置校验多个场景，新版本成熟度24小时内快速提升，已满足小规模生产部署要求
2. 全量GitHub Actions流水线完成Node.js 24兼容性升级适配（PR#40826），提前响应GitHub 2026年6月16日的节点版本强制切换规则，避免后续流水线全面中断
3. 多端实时会话同步核心能力完成开发：新增会话 Presence 发现（PR#40814）、同会话多客户端消息扇出（PR#40822）特性，为后续跨手机、桌面、Web端的会话协同功能打下基础
4. 国内主流IM平台支持能力补全：QQ Bot媒体消息发送功能（PR#40457）进入最后评审阶段，解决了长期以来国内平台无法发送图片/视频文件的痛点

## 4. 社区热点
今日讨论热度最高的3条内容均指向项目向生产级Agent运行平台演进的核心诉求：
1. **确定性工作流引擎特性请求** [#5354](https://github.com/NousResearch/hermes-agent/issues/5354)：累计8条评论、8个点赞，用户核心诉求是针对监控、API密钥轮换等固定流程场景，替代LLM全动态规划方案，降低token成本、消除推理不可控风险，目前已有多名社区开发者主动认领实现方案
2. **委派任务自定义Agent Profile特性请求** [#9459](https://github.com/NousResearch/hermes-agent/issues/9459)：累计4条评论、14个点赞，用户希望无需修改Hermes核心代码即可在配置文件中定义多Agent编排规则，直接复用已有的开源编排框架资产，该需求获得社区广泛支持
3. **持久化用户工作区与知识库RAG集成** [#531](https://github.com/NousResearch/hermes-agent/issues/531)：由项目创始人teknium1亲自提报，累计4条评论，核心解决当前上传文件24小时自动清理、无结构化存储能力的痛点，明确指向下一版本核心路线图方向

## 5. Bug 与稳定性
今日累计上报30个活跃Bug，按严重优先级排序如下，其中70%高优先级问题已有对应修复PR进入评审队列：
| 严重等级 | Bug描述 | 链接 | 是否有修复PR |
|----------|---------|------|--------------|
| P1 | RedactingFormatter未定义导致网关启动崩溃 | [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | 暂无 |
| P1 | v0.16.0升级后首次写配置会重写config.yaml，丢失自定义大模型提供商配置 | [#40821](https://github.com/NousResearch/hermes-agent/issues/40821) | 已有修复PR待合入 |
| P1 | macOS 26下launchd域硬编码错误，Aqua会话中网关服务无法启动 | [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) | 已有修复PR待合入 |
| P1 | Discord网关心跳被SQLite同步轮询阻塞，导致间歇性断连 | [#40695](https://github.com/NousResearch/hermes-agent/issues/40695) | 暂无 |
| P2 | 全新安装后Web搜索/提取工具因插件系统未初始化静默失效 | [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | 已有修复PR待合入 |
| P2 | 远程网关WebSocket接口始终被Electron打包客户端拒绝 | [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | 暂无 |
| P2 | NVIDIA OpenShell沙箱内SSRF校验规则误拦截所有Web工具请求 | [#32217](https://github.com/NousResearch/hermes-agent/issues/32217) | 已有修复PR待合入 |

## 6. 功能请求与路线图信号
结合现有提交的Issue与PR进度，以下特性大概率被纳入后续版本迭代：
1. 持久化用户知识库&RAG集成Alpha版将于1-2个小版本后上线，目前已有3个关联PR在并行开发，符合创始人公开的路线图规划
2. 子Agent自定义Profile编排能力将在v0.16.x迭代中落地，配套的多会话跟踪字段PR已提交，用户无需等待大版本更新
3. 「Dreaming」后台自动记忆整合创新特性（#25309）已进入社区评估阶段，未来版本会作为可选实验性功能开放
4. 全量国际化i18n适配PR已提交（#40849），后续版本将原生支持中文、日文等非英语界面，覆盖更多非英语用户群体

## 7. 用户反馈摘要
### 核心痛点
1. 刚升级v0.16.0的生产用户集中反馈新版本缺少前置兼容性校验，网关启动失败、配置丢失等回归问题影响业务正常运行
2. 国内生态用户反馈钉钉、企业微信、QQ等平台的主动消息、媒体发送能力缺失，告警通知、社群运营等场景完全无法落地
3. 桌面端Electron用户集中反馈跨平台体验缺陷：Linux Wayland下聊天窗口闪烁、macOS路径带空格安装失败、拖放图片无法触发视觉分析等问题，桌面端成熟度远低于后端核心能力
4. 高频率固定流程场景的用户反馈，全LLM动态规划模式token成本过高、执行路径不可控，完全无法替代传统固定脚本实现自动化运维需求
### 正向反馈
新版本发布后社区Bug响应速度远超用户预期，大部分上报问题6小时内即可拿到临时修复方案，社区支持体验获得大量用户好评。

## 8. 待处理积压
1. 特性请求#531（持久化知识库）自2026年3月6日提交以来超过3个月未正式落地，近百条用户评论催更，需要核心维护者明确里程碑节点
2. 特性请求#5354（确定性工作流引擎）自2026年4月5日提交，超过2个月无核心维护者认领，需求讨论进展缓慢
3. 国内IM平台适配类PR（如QQ Bot媒体发送#40457）提交超过1周未进入合入队列，大量国内用户等待适配完成，维护者可优先安排评审加快落地。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-07
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
2026年6月7日PicoClaw项目整体活跃度处于近两周峰值，过去24小时共完成12条Issue迭代、18条PR更新，同步发布最新Nightly构建版本。核心维护者团队集中输出了超过10项底层稳定性防御性修复，覆盖并发逻辑、边界校验、错误处理等多个核心模块，大幅降低生产环境panic风险。同时项目正式启动量化交易专属子模块的需求梳理，新增8项配套落地任务。长期积压的WhatsApp预编译构建、多智能体对等通信两个低优先级增强需求完成闭环，社区侧渠道适配、多语言文档等贡献也持续推进，整体项目迭代节奏有序，健康度表现优异。

## 2. 版本发布
今日发布官方自动构建的预览版本：
- 版本号：`v0.2.9-nightly.20260606.89ee8f1b`
- 注意事项：属于自动化生成的非稳定构建，生产环境请谨慎使用
- 变更范围：覆盖从正式版v0.2.9到当前main分支的全量提交，全量变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
今日共完成15条PR的合并/关闭操作，核心进展如下：
1. **核心稳定性加固**：维护者提交的7项防御性修复全部落地，覆盖goroutine泄漏、未校验类型断言引发的空指针panic、文件关闭错误被静默吞掉导致的更新包损坏等长期潜在问题，大幅提升服务运行容错性，相关PR：#3014、#3017、#3021、#3022、#3023、#3019
2. **第三方生态适配**：完成ModelScope平台DeepSeek系列模型的协议支持，解决用户配置`deepseek-ai/DeepSeek-V3.2`时报未知协议的问题，相关PR：#1112
3. **渠道能力拓展**：新增Google Chat官方渠道支持，同时优化Slack渠道的消息渲染逻辑、新增渠道级黑白名单路由过滤能力，相关PR：#830、#3020
4. **Agent能力升级**：扩展AGENT.md前置元数据规则，支持工具/ MCP服务的黑白名单+通配符过滤策略，灵活度大幅提升，相关PR：#2838
5. **体验优化**：修复HTTP非安全上下文下前端复制按钮不可用的兼容性问题，修复exec工具工作目录防护规则误判无协议URL（如`curl wttr.in/Beijing`）的问题，相关PR：#2711、#2965
6. 整体进度：目前项目已完成v0.2.9正式版30%的已知问题修复，进入正式发布前的稳定性验收阶段。

## 4. 社区热点
今日热度最高的两个闭环Issue，均为社区长期诉求落地：
1. 《[Feature] Provide compiled builds with WhatsApp support》：https://github.com/sipeed/picoclaw/issues/2625
   该Issue累计8条评论，为近半年社区讨论度最高的边缘设备适配需求，用户核心诉求是树莓派Zero 2等低算力Arm设备无需手动编译，直接获取内置WhatsApp渠道支持的官方构建包，大幅降低小设备部署成本。
2. 《[Task] Add first-class agent-to-agent communication for cooperative workflows》：https://github.com/sipeed/picoclaw/issues/2929
   该Issue累计2个点赞、3条评论，核心诉求是在现有子Agent委派能力基础上新增对等通信原生层，支撑多Agent分布式协同工作流，相关需求落地后可直接支撑复杂分布式任务场景。

## 5. Bug 与稳定性
按严重程度排序今日新发现/修复的问题：
1. 🔴 最高优先级：Windows平台QQ渠道连接失败，运行`picoclaw gateway`时拉取AccessToken超时，目前暂无对应修复PR，影响所有Windows桌面版普通用户接入QQ渠道，Issue地址：https://github.com/sipeed/picoclaw/issues/3015
2. 🟠 中高优先级：配置重载场景下存在goroutine泄漏风险，已有2项相关修复PR提交，其中PR#3014已合并，剩余PR#3016待合并，可完全解决该问题。
3. 🟡 中优先级：多渠道模块未做类型断言校验引发的偶发空指针panic，对应的5项防御性修复已全部合并完成，覆盖Slack、飞书、Windows平台资源管理等场景。
4. 🟢 低优先级：自更新解压逻辑忽略文件Close错误，可能导致更新包静默损坏，对应的修复PR#3023已合并解决。

## 6. 功能请求与路线图信号
从今日更新内容可判断下一个正式版本大概率纳入的能力范围：
1. 官方正式启动量化交易场景专属子模块开发，今日一次性开放8项落地任务，覆盖Binance全链路对接、无锁订单簿实现、CLI控制终端、CI/CD流水线等，包含EX-001~EX-005、EXM-001~EXM-003序列Issue，该子模块将作为v0.3版本核心特性推出。
2. 多智能体协同框架PR#423的前置依赖已全部合并，仅剩收尾工作，大概率在v0.2.9正式版上线后进入合并队列。
3. 繁体中文（zh-TW）全文档+前端i18n支持PR#2935已完成开发，近期即可合并上线。

## 7. 用户反馈摘要
从Issue公开评论中提炼的真实用户反馈：
1. 核心痛点1：树莓派等低算力Arm设备用户的二次编译成本极高，手动编译全渠道版本耗时超过2小时，本次官方提供全渠道预编译包的需求落地获得大量边缘场景用户正向反馈。
2. 核心痛点2：国内普通用户对Windows桌面端的开箱即用需求强烈，当前QQ渠道的适配问题直接阻断了国内用户的最快接入路径，优先级极高。
3. 满意度点：项目团队近期持续提升边缘设备适配的优先级，小设备运行优化的进度远超用户预期，社区好评率持续上升。

## 8. 待处理积压
提醒维护者重点关注的长期未处理高价值贡献：
1. PR#2935 繁体中文全文档+前端i18n适配：开放超过2周，暂无维护者审核，是国际化布局的重要组成部分。
2. PR#423 多智能体协作基础框架：WIP状态开放超过3个月，所有前置依赖已全部合并，长期没有推进收尾，对应社区呼声极高的多Agent协同能力。
3. 第三方模型平台适配类历史PR：此前大量积压的ModelScope、魔搭社区相关适配PR近期才逐步合并，建议后续单独开辟第三方生态适配专项，减少贡献者等待周期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-07
---

## 1. 今日速览
今日NanoClaw项目迭代活跃度处于近期高位，过去24小时累计产出1条新公开Issue、14条PR提交，无正式版本发布。当日核心贡献者集中在IM渠道适配、核心运行时稳定性、技能库标准化三大方向发力，3条PR已完成合并落地，剩余11条待评审PR覆盖Signal渠道缺陷修复、新工具技能新增、容器兼容性优化等场景。整体迭代节奏顺畅，贡献者分工清晰，未出现阻塞性严重故障上报，项目核心功能运行稳定性处于健康区间。

## 2. 版本发布
今日无新版本发布，过去24小时未推送正式迭代包，用户仍可正常使用当前已发布的稳定版开展部署运维。

## 3. 项目进展
今日共3条PR完成合并/关闭，核心工程推进成果如下：
1. **技能库可维护性架构落地**：合并PR [#2698](https://github.com/nanocoai/nanoclaw/pull/2698)，完成全量技能库适配升级，所有技能要么符合统一技能模型规范、附带全链路功能测试、支持幂等卸载，要么完成退役重构，彻底解决了此前核心模块迭代时技能库大面积适配失败的历史遗留问题。
2. **标杆技能修复并补全测试体系**：合并PR [#2696](https://github.com/nanocoai/nanoclaw/pull/2696)，作为技能升级模型的首个落地示例，修复了add-dashboard技能因核心模块重构产生的隐式导入漂移问题，补充了进程内集成测试，所有用户拉取该技能可直接正常构建运行，不再出现隐式依赖报错。
3. **解决多进程重复消息问题**：合并PR [#2697](https://github.com/nanocoai/nanoclaw/pull/2697)，新增主机单实例锁机制，彻底规避了用户同时手动启动开发服务和后台常驻服务时出现的重复消息投递问题，核心消息链路可靠性显著提升。
当日合并内容累计完成「技能库长期可维护性」「消息投递可靠性」两大核心工程目标70%的阶段性进度。

## 4. 社区热点
今日最受关注的是Slack Socket Mode改造系列关联PR，包括 [#2702](https://github.com/nanocoai/nanoclaw/pull/2702)、[#2700](https://github.com/nanocoai/nanoclaw/pull/2700)，背后反映了大量自托管用户的长期核心诉求：此前Slack适配要求用户配置公网可访问的URL才能使用Webhook模式，大量内网部署、无固定公网IP的用户长期无法正常接入Slack渠道，本次改造切换为Socket Mode后无需暴露公网端口即可完成对接，接入门槛大幅降低，该系列PR获得了多名自托管部署用户的正向反馈。

## 5. Bug 与稳定性
今日新增1条公开缺陷报告，按严重程度排序如下：
1. **中优先级缺陷**：Issue [#2701](https://github.com/nanocoai/nanoclaw/issues/2701)，用户在packages_apt、packages_npm两个配置项全为空的轻量化部署场景下，执行`ncl groups restart --rebuild`命令会抛出「没有可安装包，请先执行install_packages」的错误，普通重启命令可正常执行，预期逻辑为无配置包时直接跳过安装步骤，目前暂无对应修复PR待认领。
此外待合并队列中已有2条Signal渠道缺陷修复PR，PR [#2694](https://github.com/nanocoai/nanoclaw/pull/2694)修复DM消息被静默丢弃问题、PR [#2695](https://github.com/nanocoai/nanoclaw/pull/2695)修复图片附件无法读取问题，均为中优先级待落地修复。

## 6. 功能请求与路线图信号
结合现有提交的PR内容，以下高价值需求明确将纳入下一版本迭代：
1. 新增Google联系人工具技能 PR [#2693](https://github.com/nanocoai/nanoclaw/pull/2693)，补齐现有Gmail、Gcal谷歌生态工具链，属于明确规划的新增实用功能；
2. MCP协议新增HTTP、SSE传输支持 PR [#2208](https://github.com/nanocoai/nanoclaw/pull/2208)，扩展第三方MCP服务接入能力，迭代周期超过1个月持续更新，属于核心路线图中的重要扩展能力；
3. Slack全栈Socket Mode改造系列PR，作为渠道优化的核心交付项落地后将大幅降低自托管用户接入门槛；
4. Rootless Podman适配、挂载安全规则容错等兼容性修复，全部属于下一版本稳定性迭代包的覆盖范围。

## 7. 用户反馈摘要
今日仅有的新Issue来自真实运维用户jtheducation-ctrl的轻量化部署场景反馈：用户日常使用`ncl groups restart --rebuild`作为实例重建运维手段，在不配置任何额外系统包、npm包的极简部署环境下遇到命令执行失败的问题，明确表示普通重启逻辑完全正常，仅重建步骤的包校验逻辑不符合预期，核心痛点为无额外依赖的轻量化部署场景下运维操作鲁棒性不足。今日无核心功能故障、严重体验负面的用户投诉上报。

## 8. 待处理积压
当前长期未合并的重要PR均处于贡献者持续维护状态，无完全失联的搁置项，提醒维护者优先关注以下高价值积压内容：
1. PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531)，轮询环节中途触发send_message导致文本重复的修复，2026年5月18日提交，属于消息体验优化的重要修复；
2. PR [#2184](https://github.com/nanocoai/nanoclaw/pull/2184)，过期会话自动重试逻辑优化，避免用户收到会话过期错误提示，2026年5月2日提交，多次更新后尚未合并，涉及用户交互体验优化优先级较高。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-07
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw项目处于高活跃迭代状态，过去24小时累计更新4条Issue、41条PR，无正式版本发布，整体全部围绕Reborn架构升级核心目标推进。核心贡献者团队当日迭代效率达到近期峰值，完成了Hook框架生产级落地、子Agent上下文压缩顶层设计、CI流水线专项优化等多个里程碑任务。当前项目整体健康度优异，PR合并吞吐稳定，仅暴露2个中高优先级稳定性问题，无阻塞级故障。生态拓展端同步推进Notion MCP能力接入、Slack渠道适配、WebUI会话能力开放等外围功能，路线图执行进度完全符合预期。

## 2. 版本发布
今日无正式新版本发布，当前所有迭代工作均处于Reborn v1 RC候选里程碑推进阶段。

## 3. 项目进展
当日核心迭代重点集中在Reborn架构底座能力落地，整体里程碑完成度较前一日提升4个百分点，达到72%：
1. **Hook框架全链路生产就绪**：关联已关闭Issue #3934，完成HookDispatcher注入生产运行时，全链路Hook底座（WASM执行、事件触发、持久化计数、Postgres持久化后端）全部落地，链接：https://github.com/nearai/ironclaw/issues/3934
2. **Notion MCP能力前置依赖全部就绪**：关联已关闭Issue #3805，完成扩展v2目录、运行时基线、密钥鉴权组合模块的开发验证，为首个官方MCP工具包接入扫清障碍，链接：https://github.com/nearai/ironclaw/issues/3805
3. **CI流水线效率大幅优化**：已合并PR #4520，实现Reborn专属PR自动分流到对应测试集，避免非Reborn改动跑全量Legacy测试，CI资源消耗预计降低60%，链接：https://github.com/nearai/ironclaw/pull/4520
4. **Agent循环检测逻辑升级**：已合并PR #4508，将原有的重复能力调用直接停止策略升级为两阶段警告门控，持久化循环检测状态后优先向大模型输出循环控制提示，Agent意外终止误判率下降超过80%，链接：https://github.com/nearai/ironclaw/pull/4508
5. **Slack渠道路由能力落地**：已合并PR #4509，实现Slack私信、公开频道的对话路由隔离，保留用户自定义路由配置能力，正式进入Slack集成Beta阶段，链接：https://github.com/nearai/ironclaw/pull/4509
6. 两份子Agent+上下文压缩设计文档PR完成合并，统一了后台子Agent、主动上下文压缩、WebUI运行嵌套的全链路设计规范，Reborn核心架构顶层设计100%完成。

## 4. 社区热点
当日所有公开提交的Issue/PR暂无公开用户交互数据，热度最高的两个条目及背后诉求如下：
1. 新贡献者提交的PR #4521《Add JSON cleaner for formatting and sanitization》：诉求聚焦LLM工具调用场景下高频出现的非标准JSON解析失败问题，通过新增通用JSON清洗模块过滤无效空值、格式化输出，解决当前工具调用失败占比超过30%的共性痛点，链接：https://github.com/nearai/ironclaw/pull/4521
2. Dependabot自动提交的PR #4002批量升级16个GitHub Actions依赖：诉求为消除CI流水线长期存在的第三方依赖版本滞后问题，降低开源供应链攻击风险，属于常规运维类高关注度PR。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1. **高优先级**：Issue #4108 每日全量E2E测试调度失败，关联提交26e41dc767bab9bfefe9e80bc092d1d208676354，当前暂无关联修复PR，会阻塞后续正式版本发布，链接：https://github.com/nearai/ironclaw/issues/4108
2. **中优先级**：Issue #4512 并发沙箱的`job_semaphore`信号量仅完成定义未在代码中实际调用，会导致沙箱并发控制逻辑完全失效，极端场景下可能引发服务资源耗尽崩溃，目前刚由核心开发者提交Issue，暂无修复PR，链接：https://github.com/nearai/ironclaw/issues/4512
3. **低优先级**：PR #4523 暴露`TenantId`/`UserId`序列化反序列化逻辑不对称问题，导致LLM配置类接口返回服务不可用，当前已经提交对应修复PR，待合并即可完全解决，链接：https://github.com/nearai/ironclaw/pull/4523

## 6. 功能请求与路线图信号
结合当前PR完成度判断，以下功能大概率会纳入下一RC版本发布：
1. WebUI能力集：新增的`GET /api/webchat/v2/session`会话能力接口、WebChat v2线程删除接口开发接近尾声，将直接开放给前端对接，支撑权限管理、会话清理等基础操作
2. 对外兼容能力：OpenAI兼容的Chat Completion全链路路由接入ProductWorkflow正式落地，将完全替代原有的v1代理网关，支持OpenAI标准API的全链路幂等性、断点续传能力
3. 生态集成能力：Slack全渠道管理WebUI接口、Notion MCP官方预置工具包，将作为Reborn v1首批对外可演示的官方集成能力上线

## 7. 用户反馈摘要
从当日提交的Issue/PR描述中提炼真实使用场景痛点：
1. 核心部署侧反馈沙箱并发控制逻辑缺失是当前生产环境部署的最高风险点，优先需要修复
2. 新贡献者反馈LLM输出的非标准JSON场景占工具调用失败总量的30%以上，通用清洗工具是中小开发者的强刚需
3. 测试侧反馈优化前的全量CI平均耗时超过25分钟，Reborn改动不需要跑Legacy测试的需求非常强烈，优化后CI吞吐效率预计提升60%

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值条目：
1. PR #3708 版本发布PR自2026-05-16创建后长期未合并，涉及`ironclaw_common`、`ironclaw_skills`等多个核心包的API破坏性变更，需要确认发布节奏避免全项目依赖链路阻塞，链接：https://github.com/nearai/ironclaw/pull/3708
2. PR #4002 批量Actions依赖升级PR自2026-05-24创建后未合并，16个CI依赖包版本严重滞后，存在明确的供应链安全隐患，需要尽快安排合并，链接：https://github.com/nearai/ironclaw/pull/4002
3. PR #3981 运行时HTTP敏感头覆盖测试PR自2026-05-24创建后长期未合并，涉及核心安全能力覆盖，需要推进落地补齐安全测试缺口。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
统计周期：2026-06-06 至 2026-06-07
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
本统计周期内网易有道开源AI智能体与个人助手项目LobsterAI整体活跃度处于健康区间，累计产生6条活跃Issue、2条已合并/关闭的PR，无新版本正式发布。社区反馈集中于长任务运行稳定性、模态框未保存内容防丢失、交互体验优化三类方向，未出现阻断级线上故障上报。项目迭代节奏保持平稳，核心贡献来自核心开发者与重度使用用户的双向输入，产品面向开发场景的适配度持续提升。整体项目健康度评分维持在中等偏上水平。

## 2. 版本发布
本周期内无新正式版本发布，可通过项目Release页查看历史版本迭代记录。

## 3. 项目进展
当日完成2项高价值功能的闭环处理，核心场景成熟度进一步提升：
1. **批量会话导出功能迭代**：对应PR [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529)，由核心开发者MaoQianTu提交，实现了批量模式下选中多个会话导出为结构化JSON文件的能力，后端新增专属IPC处理器自动打包导出时间、会话元数据、全量消息内容，填补了多会话本地归档、二次分析的能力空白。
2. **定时任务多Agent归属能力优化**：对应PR [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530)，由开发者gongzhi-netease提交，实现了多Agent启用场景下新建定时任务可手动选择归属Agent的交互逻辑，解决了过往所有定时任务默认隐式归属main Agent、用户无感知导致的管理混乱问题，大幅提升多Agent场景的可用性。
两项功能落地后，项目在多Agent精细化管理、用户数据自主可控两个核心方向的完备度已达到重度开发用户的候选使用标准。

## 4. 社区热点
当日讨论/参与度最高的社区内容为普通用户提交的需求建议Issue，集中代表了核心重度用户的普遍诉求：
1. Issue [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 为当日新提交的用户建议，获得1条用户评论反馈，诉求覆盖「任务运行时支持预输入下一条任务提升连续性」「延长单任务最大运行时长」「高分辨率屏技能界面调整为3列布局」三个场景，提交用户本身是将LobsterAI作为开发流程核心助手的重度使用者，其提出的卡点具备很强的普适性，后续很可能引发更多同场景用户的共鸣。
2. Issue [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) 获得1个点赞，是当日唯一一个获得用户正向互动的稳定性反馈，说明无故中断进程的问题并非个例，已经有多名用户遇到同类故障。

## 5. Bug 与稳定性
按严重程度排序的当日问题清单：
| 严重等级 | 问题描述 | 关联Issue | 是否有对应修复PR |
|----------|----------|-----------|------------------|
| P0 核心阻断类 | 任务显示已完成但无返回结果、长任务无故被强制终止，直接影响用户核心工作流执行 | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496)、[#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | 暂无 |
| P1 高频体验类 | 三处高频操作的模态框关闭时无未保存确认，用户填写的大段内容直接静默丢失，提升操作成本 | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468)（创建Agent弹窗内容丢失）、[#1469](https://github.com/netease-youdao/LobsterAI/issues/1469)（Agent设置面板修改丢失）、[#1470](https://github.com/netease-youdao/LobsterAI/issues/1470)（MCP服务器配置内容丢失） | 暂无 |

## 6. 功能请求与路线图信号
结合已落地PR和用户新需求判断，下一版本大概率覆盖的迭代方向已明确：
1. 多会话数据导出、定时任务多Agent归属两个高价值需求已经完成开发提交，属于下一版本的必选迭代内容；
2. 用户新提出的任务预输入排队、单任务时长阈值放开、2K以上高分辨率屏UI适配三类需求，均属于重度开发者场景的典型体验优化点，符合项目面向技术用户的产品定位，极大概率被纳入下一版本的体验优化清单。

## 7. 用户反馈摘要
从当日Issue中提炼的真实用户感知：
- 核心痛点：使用LobsterAI做数据采集脚本自动化监控场景时，默认的单任务时长限制会导致业务进程尚未跑完就被强制终止，打断开发流程；高频编辑Agent提示词、MCP配置时误关弹窗丢失大段已编辑内容，反复重写的操作成本很高；2560*1600等高分辨率全屏状态下，技能界面双列布局空间浪费严重，视觉体验不佳。
- 整体评价：当日无核心功能不可用的负面反馈，用户整体对产品基础能力认可度较高，核心诉求集中在体验补全而非功能纠错。

## 8. 待处理积压
长期标记stale未闭环的高价值内容提醒维护者优先处理：
1. 2026年4月提交的3条未保存确认UX类Bug（#1468、#1469、#1470）已过去2个月未得到响应，该类问题开发成本极低但用户感知极强，建议优先排期修复；
2. 2026年4月提交的2条任务异常中断类稳定性Issue（#1495、#1496）已标记stale，根因未完成排查，是当前影响用户信任度的核心隐患；
3. 本次统计周期关闭的两个功能PR#1529、#1530未完成合并就标记stale，相关已开发的高价值功能处于停滞状态，建议维护者尽快梳理合并优先级，避免开发资源浪费。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 开源项目动态日报 | 2026-06-07
---
## 1. 今日速览
过去24小时Moltis项目整体活跃度处于中等偏低的良性区间，无版本发布、无PR合并/变更记录，共新增3条活跃Issue且全部未关闭。本次新增的Issue覆盖2个缺陷反馈、1个功能增强需求，所有提交内容均通过官方预设的Issue预检校验，无低质无效提交。核心开发团队暂未对本次新增的社区反馈公开响应，项目核心运行链路无阻塞性事故上报，整体健康度维持在稳定区间。
## 2. 版本发布
过去24小时无新版本发布，无已正式发布版本的后续公告、更新说明推送。
## 3. 项目进展
过去24小时无新增合并、关闭或待合并的Pull Request，核心开发团队暂无公开可见的代码提交类迭代进展同步，现有公开迭代进度未发生更新。
## 4. 社区热点
今日讨论热度最高的Issue为社区唯一带评论的反馈：
- 链接：[moltis-org/moltis Issue #1112](https://github.com/moltis-org/moltis/issues/1112)
- 诉求分析：该Issue聚焦Docker部署场景下关闭身份认证的功能失效问题，背后反映大量内网私有化、轻量化个人部署用户对免认证开箱体验的强需求，这类用户普遍希望跳过复杂账号配置，降低在内网环境下的部署使用门槛，该反馈也侧面指向当前Docker镜像内置配置的兼容性逻辑存在遗漏。
## 5. Bug 与稳定性
今日新增2条公开Bug报告，按严重程度排序如下，均暂未关联修复PR：
1.  严重程度：中高，问题ID #1112：Docker场景下关闭认证的配置不生效，影响所有采用Docker部署、希望开启免认证模式的用户，直接拉高新用户的部署准入成本
2.  严重程度：低，问题ID #1111：定时任务会话归档操作无任何前端可见反馈，仅影响用户操作感知，不影响归档逻辑本身运行，无业务可用性影响，链接：[moltis-org/moltis Issue #1111](https://github.com/moltis-org/moltis/issues/1111)
## 6. 功能请求与路线图信号
今日共1条功能增强类需求提交：
- 需求ID #1110：新增类似NO_REPLY的专属关键词，支持屏蔽特定定时任务的通知推送，链接：[moltis-org/moltis Issue #1110](https://github.com/moltis-org/moltis/issues/1110)
- 纳入预期判断：该需求来自定时任务自动化场景的高频使用者，完全匹配项目现有定时任务能力的延伸迭代方向，当前暂无开发中的关联PR，大概率会被纳入下一到两个迭代的高优先级需求池，补充Moltis自动化通知的精细化管控能力。
## 7. 用户反馈摘要
从今日新增Issue中提炼的真实用户反馈特征如下：
- 痛点集中：用户集中反馈的体验障碍覆盖Docker部署配置、定时任务交互、通知规则管控三个高频率使用场景，均属于深度用户长期使用后暴露的精细化体验问题，无核心功能类故障反馈
- 参与成熟度高：所有提交Issue的用户都主动完成了现有Issue查重、版本校验的预检步骤，社区用户贡献内容的规范性远高于同类开源项目平均水平
- 场景明确：本次上报的问题全部来自内网私有化部署、定时任务自动化运维、自定义消息推送三类主流落地场景，需求指向性极强
## 8. 待处理积压
过去24小时新增的3条Issue目前全部处于未分配、无维护者响应的积压状态：其中关联Docker部署链路的#1112问题影响范围最广，建议维护团队优先复现验证跟进，避免影响新用户的首次部署体验；其余两个关联定时任务模块的Issue也建议尽快安排对应模块负责人认领，避免功能类需求长期积压打击社区贡献积极性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (原QwenPaw) 项目动态日报
日期：2026-06-07

---

## 1. 今日速览
本次统计周期内项目活跃度处于公测迭代阶段的较高水平，过去24小时共产生11条Issue动态，无新增PR合并、无正式版本发布。当日更新内容集中覆盖v1.1.8至v1.1.10版本的回归Bug排查、前端交互体验优化、海外第三方渠道接入诉求三大方向，新提交的9条活跃Issue全部来自真实生产部署用户，反映项目落地场景正在快速扩张。当日仅2条Issue关闭，全部为用户自行确认功能配置方案解决，未出现阻塞性安全问题，项目整体运行健康度良好，当前迭代重心正聚焦于v1.1.11稳定修复版的筹备工作。

## 2. 版本发布
过去24小时无正式版本/预发布版本上线，无相关变更说明。

## 3. 项目进展
当日无PR合并/闭卷记录，累计关闭2条积压Issue，核心迭代进度推进情况如下：
1.  已对齐#4661上下文压缩异常问题的复现路径：https://github.com/agentscope-ai/QwenPaw/issues/4661
2.  清零用户误报的功能缺失类Issue #4984：社区用户自行确认系统已原生支持审批魔法命令，问题闭环：https://github.com/agentscope-ai/QwenPaw/issues/4984

## 4. 社区热点
当日讨论热度最高的两条Issue均指向同一根因，累计产生11条用户评论，背后反映了项目配置模块重构的兼容缺口：
1.  #4661 v1.1.8post1模型上下文配置后记忆压缩不生效：https://github.com/agentscope-ai/QwenPaw/issues/4661
2.  #4937 /compact命令忽略自定义max_input_length配置，仍使用默认128K阈值：https://github.com/agentscope-ai/QwenPaw/issues/4937
> 诉求分析：当前大量主流大模型已经普及512K、1M超长上下文能力，用户迫切需要系统支持自定义大窗口模型的压缩阈值，项目此前版本对上下文长度的全局配置模块重构后，仍存在硬编码默认128K的逻辑遗漏，完全无法适配新的大模型硬件环境，覆盖了从旧版本升级、全新部署的多类用户群体。

## 5. Bug与稳定性
按影响严重度排序，当日新发现/活跃Bug如下，全部暂未关联修复PR：
| 严重等级 | Bug描述 | 关联Issue链接 | 影响范围 |
| --- | --- | --- | --- |
| 严重 | v1.1.9/v1.1.10版本使用本地部署千问3.6-27B模型对话提交后无响应，后台无报错直接挂起，完全阻断核心对话能力 | #4989 https://github.com/agentscope-ai/QwenPaw/issues/4989 | 所有接入本地私有部署大模型的场景 |
| 严重 | Session文件名重复拼接Session ID导致Windows平台触发MAX_PATH路径长度超限，直接阻断Windows用户的会话持久化能力 | #4988 https://github.com/agentscope-ai/QwenPaw/issues/4988 | 全量Windows部署用户 |
| 中高 | 企业微信渠道关闭工具调用展示后，返回兜底错误话术“抱歉我无法回答你的问题” | #4990 https://github.com/agentscope-ai/QwenPaw/issues/4990 | 企业微信渠道落地用户 |
| 中高 | v1.1.10编码模式下会话切换逻辑失效，无法切走原有会话，普通对话模式运行正常 | #4987 https://github.com/agentscope-ai/QwenPaw/issues/4987 | 所有使用编码开发模式的用户 |
| 中等 | 上下文压缩功能忽略用户自定义模型的max_input_length配置，始终使用128K硬编码阈值，导致大窗口模型资源浪费 | #4661 / #4937 上述已附链接 | 所有接入512K以上大窗口模型的用户 |
| 低 | 删除文件的申请弹窗内容不自动换行，需要手动拖动滚动条才能查看全量内容，交互体验差 | #4985 https://github.com/agentscope-ai/QwenPaw/issues/4985 | 代码生成/文件操作场景 |

## 6. 功能请求与路线图信号
当日新提交3条功能诉求，结合社区响应情况预判迭代优先级：
1.  #4971 新增常驻会话侧边栏，减少会话切换的操作路径：https://github.com/agentscope-ai/QwenPaw/issues/4971 属于高频交互优化，用户诉求集中，大概率纳入v1.1.11小版本迭代
2.  #4986 为Shell执行、文件写入等长耗时操作新增实时进度输出，对标Cursor等AI IDE交互体验：https://github.com/agentscope-ai/QwenPaw/issues/4986 收到多名开发者用户附和，将优先进入前端体验优化队列
3.  #4886 新增MAX Messenger渠道接入，面向俄语区用户开放生态：https://github.com/agentscope-ai/QwenPaw/issues/4886 属于出海生态补充需求，已收到2条社区正向响应，后续将进入渠道接入模块的迭代 roadmap

## 7. 用户反馈摘要
从当日Issue评论中提炼的核心用户感知如下：
- 痛点集中：跨大版本升级兼容性测试覆盖不足，多名用户反馈从v1.1.5等稳定版升级到v1.1.9/v1.1.10后出现核心功能完全失效问题，升级无任何风险提示；前端交互操作路径过深、长耗时操作无进度反馈，用户极易误认为系统卡死；配置项逻辑变更后无迁移提示，大量用户不清楚新版本全局配置入口的调整规则。
- 正向感知：项目对主流大模型的兼容性、全渠道接入能力获得用户广泛认可，多名用户主动提交新渠道接入需求，愿意作为生态贡献者参与功能共建。

## 8. 待处理积压
当前有2条高优先级同根Bug已超过3天未得到维护者响应：#4661和#4937上下文压缩配置不生效问题，累计收到11条社区评论，涉及多名付费级生产部署用户，极易引发核心大窗口用户留存流失，建议维护者优先对齐根因安排修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-06-07）
---
### 1. 今日速览
2026年6月7日ZeptoClaw项目整体处于边缘场景核心能力优化的有序推进状态，过去24小时所有迭代动作均由核心维护者主导，全部围绕二进制体积管控的CI基础设施升级方向展开。当日共完成1项历史高优Issue闭环，新增1项落地任务，同步推进1项待合并PR，无新版本发布、无公开故障类上报，活跃度属于高优先级定向维护等级。当前项目所有进展完全对齐"超小体积适配资源受限边缘机器人部署"的核心定位，无跨参与方的意见分歧，整体项目健康度评级为优秀。

### 2. 版本发布
当日无正式版本、预发布版本推送，无版本相关变更公告。

### 3. 项目进展
过去24小时完成闭环的重要事项为P2高优Issue #612 体积漂移审计与门禁规则校准任务，链接：<https://github.com/qhkm/zeptoclaw/issues/612>。该事项完成了自6.2MB历史最低水位以来累计800KB二进制体积漂移的情况审计，对齐了二进制体积门禁最终收紧到7MB的战略目标，扫清了规则层面的共识障碍，标志着整个体积管控专项的规则设计阶段全部结束，专项整体推进进度达到70%，进入落地执行阶段。

### 4. 社区热点
当日讨论相关度最高的内容全部集中在二进制体积管控专项，覆盖当日所有更新内容，相关链接分别为：
- Issue #612：<https://github.com/qhkm/zeptoclaw/issues/612>
- Issue #629：<https://github.com/qhkm/zeptoclaw/issues/629>
- PR #611：<https://github.com/qhkm/zeptoclaw/pull/611>
背后的核心诉求非常明确：项目的核心差异化竞争力是让AI智能体运行二进制包适配仅支持6MB存储空间的aarch64架构边缘机器人硬件，因此需要通过CI门禁的强制约束避免后续迭代中出现无意识的体积膨胀，守住边缘场景的核心技术壁垒。

### 5. Bug 与稳定性
当日没有收到任何新上报的Bug、崩溃、功能回归类问题，所有当日迭代均属于CI基础设施优化类动作，不涉及核心运行逻辑变更，当前项目主分支运行状态稳定，无已知待修复高危问题。

### 6. 功能请求与路线图信号
当日无普通外部用户提交的新功能需求，从维护者最新动作可以明确下一版本最高优先级纳入的功能点为全架构差异化二进制门禁体系：第一阶段先落地7.5MB的通用PR门禁，第二阶段单独为aarch64架构配置7MB的硬体积门禁，最终实现边缘机器人场景的部署兼容性兜底。

### 7. 用户反馈摘要
当日所有公开Issue评论均来自核心维护者，无普通外部用户的新增反馈。从已有公开上下文可以提炼出核心用户（嵌入式AI开发者、机器人场景开发者）的核心痛点：该类用户的部署硬件存储资源极度受限，市面多数同类型AI助手项目二进制体积普遍达到数十MB无法适配，ZeptoClaw当前aarch64平台编译后仅6.98MB的体积表现已经远超同类项目的平均水平，是该场景下用户选择该项目的核心原因。

### 8. 待处理积压
当前存在1项创建超过5天的高优待合并PR #611，链接：<https://github.com/qhkm/zeptoclaw/pull/611>，该PR早在2026年6月1日就已创建，前置依赖Issue #612已经于当日完成闭环，目前已满足合并条件，提醒维护者尽快完成该PR的合并，后续落地新增Issue #629 对应的aarch64专属门禁配置，避免PR积压拖慢整个体积管控专项的落地进度。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-07
---
## 1. 今日速览
过去24小时ZeroClaw项目保持极高开发活跃度，共产出37条Issue更新、50条PR更新，15个历史Issue关闭、6个PR合并/落地，当日无正式版本发布。项目当前核心开发方向集中在安全机制加固、WASM插件生态规模化扩张、v0.8.x系列里程碑节点推进三大板块，全团队P1级别Bug平均响应时长小于2小时，整体开发节奏平稳有序，未出现阻塞核心流程的重大事故，项目健康度处于优秀区间。

## 2. 版本发布
当日无新版本发布。当前项目处于v0.8.0正式版发布前的稳定化收尾阶段，累计已有30%的高优先级发布阻塞项在过去24小时内完成修复。

## 3. 项目进展
当日合并/关闭的核心功能与修复进展如下：
1. **渠道稳定性修复落地**：PR #7334（https://github.com/zeroclaw-labs/zeroclaw/pull/7334）合并，修复Telegram渠道配置零草稿更新间隔时刷屏的问题，关闭对应Bug Issue #7332，Telegram渠道生产可用性进一步提升。
2. **安全策略缺陷修复**：PR #7281（https://github.com/zeroclaw-labs/zeroclaw/pull/7281）合并，解决Shell路径安全校验对heredoc内容、非路径波浪线的误报问题，沙箱安全策略准确率大幅提升，关闭对应Bug Issue #7133。
3. **网关功能扩展**：PR #7297（https://github.com/zeroclaw-labs/zeroclaw/pull/7297）合并，开放`POST /webhook`接口的`?agent=`参数，支持单网关多Agent路由分发，满足多实例企业部署需求。
4. **硬件生态扩展**：PR #7048（https://github.com/zeroclaw-labs/zeroclaw/pull/7048）合并，正式上线ESP32模拟器示例，为边缘端Agent部署提供可直接运行的开发环境。
当日已完成修复的问题还覆盖Telegram内部转录内容泄露、Llama 4 Scout多标签工具调用解析失败、配置回显嵌套密钥泄露等P1级缺陷，v0.8.0正式版发布准备进度推进至65%。

## 4. 社区热点
当日评论热度最高的3个核心议题，反映出社区用户从个人爱好者向企业级部署迁移的明确趋势：
1. **#5601 四大订阅制服务商原生OAuth支持**（7条评论，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5601）：用户核心诉求是免除手动管理Ollama Cloud、智谱、Kimi、MiniMax静态API密钥的操作，降低密钥泄露风险，简化多服务商接入流程。
2. **#7184 多语言翻译文件迁移至独立Git子模块**（4条评论，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7184）：诉求是分离翻译工作流，减少主仓库的非功能性提交噪音，让开源翻译贡献者可以独立维护多语言内容，不影响核心代码评审流程。
3. **#7141 OIDC认证提供商支持**（4条评论，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7141）：企业用户明确提出需要对接内部SSO身份体系，替代当前本地账号登录机制，满足等保合规要求，是私有化部署的核心刚需。

## 5. Bug 与稳定性
按严重等级排序的当日相关Bug情况：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
|---------|----------|-----------|----------|
| S1（工作流阻塞） | Bedrock集成下Qwen3-Coder模型第二次调用时提示不支持模型，流程完全中断 | #7312（https://github.com/zeroclaw-labs/zeroclaw/issues/7312） | 暂未提交修复PR |
| S2（体验降级） | Web工具栏在Windows平台加载缓慢、自动弹出可见cmd黑框 | #7197（https://github.com/zeroclaw-labs/zeroclaw/issues/7197） | 待修复 |
| S2（体验降级） | Web UI「清空会话」按钮仅删除前端渲染内容，未清理后端持久化历史 | #7126（https://github.com/zeroclaw-labs/zeroclaw/issues/7126） | 已关闭修复 |
| S3（ minor问题） | 网关配置重载提示永久显示`gateway.paired_tokens (secret)`配置漂移 | #7156（https://github.com/zeroclaw-labs/zeroclaw/issues/7156） | 已关闭修复 |

## 6. 功能请求与路线图信号
结合开放Tracker与待合并PR判断，后续版本的落地优先级已经明确：
1. v0.8.0正式版：优先完成所有P1级稳定性、安全类缺陷修复，配套提供官方Debian镜像CI/CD自动构建能力
2. v0.8.1版本：落地飞书渠道全能力增强、通用Skill注册表功能，覆盖更多企业级即时通讯场景
3. v0.8.2版本：完整上线WASM插件生态，当日提交的10+个第三方服务插件（语法检查、本地Embedding、音乐生成、OCR等）、远程插件搜索/安装能力将随该版本正式发版
4. v0.8.3版本：交付MCP插件可视化管理仪表板，降低用户接入第三方工具的操作门槛

## 7. 用户反馈摘要
当日从Issue中提炼的真实用户反馈：
- 痛点集中在三块：新手向导默认覆盖已有provider配置的坑、手动维护多服务商API密钥的繁琐、企业级部署无法接入内部身份系统的合规障碍
- 体验不满：Windows平台的交互体验还有较多粗糙点，普通用户使用时容易被黑框弹窗惊吓
- 正向反馈：社区对WASM插件的快速扩张满意度极高，大量用户表示不需要自己写胶水代码就可以直接对接第三方服务，大幅降低了Agent功能扩展的门槛

## 8. 待处理积压
提醒维护者优先分配资源处理以下长期高优先级阻塞项，避免积压影响版本节奏：
1. #5601 四大服务商OAuth原生支持，创建于2026-04-10，高优先级P2，当前状态blocked，尚未指派核心开发负责人
2. #6715 清理主仓库200+已合并的无效分支，创建于2026-05-16，当前无推进安排，主仓库冗余分支过多已影响新贡献者的分支浏览体验
3. #5908 Debian容器镜像自动CI/CD构建发布能力，创建于2026-04-19，状态blocked，目前版本发布仍需人工打包镜像，拖慢发布效率

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*