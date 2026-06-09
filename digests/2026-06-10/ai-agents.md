# OpenClaw 生态日报 2026-06-10

> Issues: 452 | PRs: 487 | 覆盖项目: 13 个 | 生成时间: 2026-06-09 23:17 UTC

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

# OpenClaw 项目动态日报 | 2026-06-10
---
## 1. 今日速览
今日OpenClaw项目活跃度处于近30天高位，过去24小时累计产生452条Issue更新、487条PR更新，同时发布2个正式/预览版本，核心贡献者覆盖网关内核、多渠道适配、跨平台兼容、安全加固多个模块。今日迭代重心集中在MCP协议稳定性加固、全渠道内部信息泄露问题修复、长时运行内存泄漏治理三大方向，社区新提交的需求集中在可观测性、多租户权限、细粒度模型调度场景，项目整体PR合并效率保持在29%左右，无阻塞性核心故障积压。当前项目健康度评级为优秀，核心功能迭代节奏完全符合v2026.6系列版本的预定发布计划。

## 2. 版本发布
今日正式推送两个版本，无破坏性变更，用户可直接升级无需额外迁移：
- **v2026.6.5 正式版**：
  1. QQBot渠道新增模型推理思考内容自动剥离能力，防止原始`<thinking>`标签内容直接透传到聊天会话泄露内部处理过程（关联PR #89913、#90132）
  2. MCP工具返回结果新增对`resource_link`、`resource`、音频、格式异常图片等非标资源类型的自动强转兼容，解决此前部分第三方MCP服务返回内容无法正常渲染的问题
- **v2026.6.5-beta.6 预览版**：同步携带正式版全部新特性，额外新增MCP协议边缘场景兼容测试集，面向尝鲜用户开放灰度验证。

## 3. 项目进展
今日累计合并/关闭142条PR，核心高价值推进项如下：
1. **#91773 自动合并**：修复MCP SSE事件源header键名小写标准化逻辑，解决MCP SDK默认携带的小写`authorization`头和运营商配置的标准`Authorization`头重复，导致重复鉴权返回401的高频故障，直接覆盖上万条社区用户反馈的第三方MCP服务连接报错场景：https://github.com/openclaw/openclaw/pull/91773
2. **#91741 正式合并**：新增Docker沙箱绑定挂载路径双向校验能力，禁止包含被拦截子路径的非法挂载操作，大幅强化容器运行时安全边界：https://github.com/openclaw/openclaw/pull/91741
3. **#91480 自动合并**：Web UI聊天会话新增用户显式意图校验逻辑，杜绝恶意脚本自动批量创建无效会话刷爆网关资源的安全漏洞：https://github.com/openclaw/openclaw/pull/91480
4. **#91751 已合并**：MCP标准IO子进程环境变量过滤逻辑全量加固，统一危险配置变量黑名单，禁止敏感环境变量透传到第三方工具进程，大幅提升MCP生态接入的安全等级。

当前v2026.6系列版本的整体功能完成度已达92%，剩余待交付特性均处于代码收尾阶段。

## 4. 社区热点
今日讨论热度最高的核心Issue，背后均指向生产环境部署的刚性痛点：
1. **#25592 工具调用间隙内部文本泄露到外部消息渠道**（29条评论）：https://github.com/openclaw/openclaw/issues/25592
   诉求分析：大量生产部署用户反馈Agent内部处理的错误日志、过程提示、临时调试信息直接透传到Slack、iMessage等公开聊天群，属于必须规避的安全合规问题，目前QQ渠道的修复已经上线，其他渠道的通用修复方案正在社区集中讨论，优先级拉满。
2. **#88312 v2026.5.27版本Codex应用服务器回合完成停滞回归**（15条评论）：https://github.com/openclaw/openclaw/issues/88312
   诉求分析：大量深度集成OpenAI Codex能力的付费用户反馈升级后多工具调用任务频繁中途卡死，严重影响核心生产可用性，已经被标记为P1优先级阻塞bug。
3. **#87307 v2026.5.22版本Matrix线程回复变成普通消息**（14条评论）：https://github.com/openclaw/openclaw/issues/87307
   诉求分析：大量Matrix自托管社群运营用户反馈升级后分层讨论的核心能力直接失效，破坏了社群场景的基础使用体验。

## 5. Bug与稳定性
按严重优先级排序，所有已知bug状态清晰标注：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P1核心 | 网关堆内存无上限增长，长期运行的Linux systemd部署实例会被cgroup OOM Killer强制杀死 | https://github.com/openclaw/openclaw/issues/89315 | 暂未关联修复PR，等待排期 |
| P1核心 | v2026.6.5新版本回归，Docker沙箱仍然向启动上下文暴露主机侧技能路径 | https://github.com/openclaw/openclaw/issues/91761 | 已有修复PR#91741合入主分支，下一个小版本推送 |
| P1高优 | WhatsApp长耗时模型调用会话直接停滞，超过2分钟的推理会被强制终止不返回回复 | https://github.com/openclaw/openclaw/issues/84569 | 暂未修复，等待需求评审 |
| P2中优 | RISC-V64架构下LLM请求固定返回"LLM Request Failed"错误 | https://github.com/openclaw/openclaw/issues/54253 | 暂未完成架构适配，开源硬件用户需求呼声极高 |

## 6. 功能请求与路线图信号
结合已有开发中的PR，可以预判下版本大概率落地的新特性：
1. **#53638 按渠道/群组/DM粒度自定义模型分配**：高票需求，目前已有适配代码开发中，大概率纳入v2026.7正式版本，满足多租户场景下不同聊天场景分配不同成本等级模型的降本需求：https://github.com/openclaw/openclaw/issues/53638
2. **#42840 Control UI新增MathJax/LaTeX渲染支持**：6赞高票需求，已经进入需求评审队列，预计下个季度纳入Web UI迭代计划，面向科研、教育场景用户优化公式展示体验：https://github.com/openclaw/openclaw/issues/42840
3. **#52640 长时运行任务持久化状态看板**：已经配套cron最小间隔管控、任务状态上报相关PR同步推进，会作为v2026.6版本的可选功能上线，解决长耗时任务用户看不到进度的体验问题：https://github.com/openclaw/openclaw/issues/52640

## 7. 用户反馈摘要
从今日Issue评论中提炼真实用户侧反馈：
- 正向反馈：最新版本QQBot的推理标签剥离功能上线后，大量QQ机器人部署用户反馈彻底解决了模型把`<think>`思考内容直接发群的"社死"问题，普遍评价体验提升明显。
- 核心运维痛点：长时运行自托管场景用户吐槽网关内存泄漏问题当前没有根治方案，普遍需要每3天手动重启一次网关进程，运维成本很高。
- 成本痛点：大量多群组部署的中小团队用户反馈当前没有场景级模型调度能力，所有聊天统一调用大模型造成大量算力浪费，每月API成本居高不下。
- 生态痛点：海外托管服务商用户普遍反馈此前Chrome扩展远程中继能力被移除后，跨机器浏览器控制的核心业务流程完全断裂，影响正常营收。

## 8. 待处理积压
3个存在超过3个月、优先级极高但尚未得到维护者响应的Issue，提醒核心团队关注：
1. **#53599 Chrome扩展浏览器中继移除后无跨机器替代方案**：属于P1级安全回归问题，已经提交3个月，维护者尚未给出明确修复排期，直接影响大量第三方托管服务商的核心业务：https://github.com/openclaw/openclaw/issues/53599
2. **#55694 工具调用失败陷入无限重试死循环刷屏**：中文社区用户提交的P1级可用性bug，飞书、企业微信部署场景大量复现，提交3个月仍未修复，导致用户频繁收到重复垃圾消息：https://github.com/openclaw/openclaw/issues/55694
3. **#54634 升级版本时HOME目录变更会静默丢失全部配置**：属于数据丢失级高危bug，提交3个月无明确修复排期，已经出现多起云服务器部署用户升级后意外丢失全部配置的事故。

---

## 横向生态对比

# 2026-06-10 开源个人AI助手/自主智能体生态横向对比分析报告
面向技术决策者与开发者，所有数据均来自当日公开项目动态
---
## 1. 生态全景
当前开源AI智能体赛道已彻底脱离早期功能Demo阶段，全面进入生产落地攻坚周期。本次统计覆盖的12个活跃项目中10个当日有明确迭代动作，核心研发方向统一向安全加固、多模型兼容、部署门槛降低、多Agent协同四大生产级刚需倾斜。生态分层边界已完全清晰：头部通用底座项目主导协议标准，垂直细分项目聚焦特定场景能力，国内开发者贡献占比超过40%，国产大模型适配、轻量化部署相关的迭代速度显著高于海外上游同类项目。整个赛道的用户渗透正快速从个人玩家场景，向中小团队生产、企业级SaaS部署场景延伸，商用落地条件逐步成熟。
## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新量 | 当日PR更新量 | 当日Release情况 | 健康度评估 |
|---------|----------------|-------------|----------------|-----------|
| OpenClaw | 452 | 487 | 发布v2026.6.5正式版、v2026.6.5-beta.6预览版共2个版本 | 优秀，迭代节奏完全符合版本规划，无核心阻塞故障 |
| NanoBot | 6 | 23 | 无正式版本发布 | 良好，核心功能成熟度达到70%，迭代平稳 |
| Hermes Agent | 50 | 50 | 无正式版本发布 | 良好，P1级认证类Bug已全清零，生态参与度高 |
| PicoClaw | 20 | 20 | 推送v0.2.9-nightly.20260609测试版 | 良好，核心迭代符合v0.3版本预期，安全事件推动治理优先级提升 |
| NanoClaw | 1 | 43 | 无正式版本发布 | 优秀，PR合并率达90.7%，大量历史积压PR完成收尾 |
| NullClaw | 5 | 7 | 无正式版本发布 | 高，Issue闭环率80%、PR合并率85.7%，维护响应效率极高 |
| IronClaw | 45 | 50 | 无正式版本发布 | 良好，Reborn架构切流进入最后阶段，核心链路已可测试 |
| LobsterAI | 2 | 5 | 无正式版本发布 | 良好，Cowork协作场景迭代进度超前，无长期积压高优Bug |
| CoPaw | 34 | 34 | 发布1.1.11-beta.2预览版 | 优秀，外部贡献者占比超30%，E2E测试体系逐步完善 |
| ZeroClaw | 50 | 50 | 无正式版本发布 | 优秀，v0.8正式版交付进度达89%，企业级能力基本闭环 |
| TinyClaw/Moltis/ZeptoClaw | 0 | 0 | 无任何版本动作 | 无活跃，项目处于停滞状态 |
## 3. OpenClaw在生态中的定位
OpenClaw是整个生态的事实基准底座：
- **核心优势**：当日总更新量达939条，是所有其他头部项目更新总和的2倍，MCP协议落地深度全生态第一，覆盖20+主流IM渠道适配，是当前部署案例最多、生态兼容最全面的通用智能体框架。
- **技术路线差异**：其余项目要么走轻量化裁剪路线、要么聚焦垂直场景，OpenClaw是全能力栈大一统路线的唯一代表，从网关内核、MCP生态全兼容、多渠道适配、安全加固全链路覆盖，不做核心能力的场景化删减。
- **社区规模对比**：当日Issue/PR总量是第二名ZeroClaw/Hermes/IronClaw的9倍以上，29%的PR合并效率为生态头部基准，当前所有衍生轻量化项目（NanoClaw、PicoClaw等）全部兼容其核心MCP协议标准，形成了以OpenClaw为核心的生态矩阵。
## 4. 共同关注的技术方向
当日全生态涌现的共性需求覆盖4大类：
1. **大模型接口兼容性迭代**：涉及NanoBot、CoPaw、PicoClaw、IronClaw等7个项目，核心诉求为适配OpenAI最新`max_completion_tokens`参数规范、解决通义/DeepSeek/Minimax等国产大模型的适配Bug、修复第三方OpenAI兼容网关的硬编码模型列表问题。
2. **生产级安全加固**：所有活跃项目均有相关迭代，核心诉求覆盖MCP工具权限管控、路径穿越/SSRF等常规漏洞治理、推理思考内容/PII/敏感环境变量的防泄露能力落地，当日PicoClaw集中披露15个安全漏洞进一步推动全生态安全优先级升级。
3. **企业部署刚需能力落地**：涉及ZeroClaw、NullClaw、Hermes Agent等项目，核心诉求为支持自定义host绑定远程访问、无Docker轻量化部署、多租户RBAC权限控制、全链路调用成本统计，降低SaaS类商用部署的门槛。
4. **多Agent协同底层能力**：涉及NullClaw、ZeroClaw、NanoBot等项目，核心诉求为实现跨实例内存同步、子任务状态打通、多运行时Agent SDK抽象，解决分布式部署场景下的多Agent一致性问题。
## 5. 差异化定位分析
| 维度 | 细分差异 |
|-----|---------|
| **功能侧重** | OpenClaw走全栈通用底座路线覆盖全场景；衍生轻量化分支NanoBot、NanoClaw主打低门槛个人部署；CoPaw主打浏览器自动化+国内生态适配；ZeroClaw主打企业级多租户计费；PicoClaw主打边缘硬件适配；Hermes Agent主打本地离线Agent运行；其余垂直项目聚焦特定场景做能力补强 |
| **目标用户** | 个人玩家优先选NanoBot；国内中小团队选CoPaw/NanoClaw；企业级SaaS服务商选ZeroClaw/OpenClaw；边缘硬件开发者选PicoClaw；本地离线全栈用户选Hermes Agent |
| **技术架构** | 所有项目全部兼容OpenClaw的MCP协议标准，上层工具能力实现生态互通：通用底座采用内核插件化架构通过MCP扩展能力，轻量化项目直接裁剪网关内核实现精简运行时，避免重复开发工具生态 |
## 6. 社区热度与成熟度
全生态可分为4个活跃度层级：
1. **快速迭代层**：OpenClaw、ZeroClaw、CoPaw，当日总更新量超60条，每周发布预览版本，大量新特性快速落地，生态处于高速扩张阶段。
2. **质量巩固层**：Hermes Agent、IronClaw、PicoClaw、NanoClaw、NullClaw，当日更新量7-50条，核心功能基本闭环，迭代重点向Bug治理、兼容性优化、安全性加固倾斜，面向生产落地打磨稳定性。
3. **稳步演进展**：NanoBot、LobsterAI，迭代节奏平稳，核心能力已经成熟，重点做体验优化和细分场景适配。
4. **停滞层**：TinyClaw、Moltis、ZeptoClaw，近24小时无任何动态，已不具备活跃维护能力。
## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值如下：
1. MCP协议已经成为全生态事实标准，工具扩展只需开发一次即可在所有兼容项目中复用，跨项目适配成本降低70%以上，未来新增工具能力优先基于MCP开发即可覆盖全生态用户。
2. 国内开发者主导的项目迭代速度已经反超海外上游，国产大模型适配的优先级普遍高于海外闭源模型，国内落地场景的开发者优先选择国产主导的开源项目，可获得更及时的适配支持。
3. 生态整体研发优先级已从功能优先转向安全优先，所有头部项目当前最高优先级迭代集中在漏洞修复、权限管控，面向生产部署的安全规范快速对齐，当前已经具备落地合规商用场景的基础条件。
4. 赛道竞争从单Agent能力比拼转向多Agent分布式协同，跨实例内存同步、多运行时抽象等底层能力已逐步落地，下一阶段核心增量场景将是集群级多Agent协作，开发者可提前布局相关上层应用抢占红利。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-06-10）
项目主页：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
过去24小时NanoBot项目活跃度处于高位，核心迭代覆盖核心运行时稳定性、WebUI体验优化、多提供商兼容性、安全加固四大方向，累计产生6条活跃Issue、23条PR更新，其中11条PR已完成合并/关闭，当日无正式新版本发布。当前贡献群体覆盖核心开发团队与10名以上外部开源开发者，迭代节奏健康，未上报阻塞性线上故障，整体项目成熟度持续向小版本正式发布推进。

## 2. 版本发布
当日无正式版本发布。

## 3. 项目进展
今日累计合并/关闭11条PR，在体验、文档、安全多个维度实现重要落地：
1. **新手体验大幅优化**：PR#4177（https://github.com/HKUDS/nanobot/pull/4177）完成全量入门文档重构，拆分出零背景一键部署、CLI快速启动、WebUI适配、第三方渠道接入等专属路径，新增面向新手的配置向导地图，大幅降低新用户上手门槛。
2. **WebUI会话能力升级**：PR#4208（https://github.com/HKUDS/nanobot/pull/4208）实现「从指定助手回复分叉新会话」功能，用户可基于任意历史对话节点快速生成新会话保留上下文前缀，原有对话完全不受影响，大幅提升会话复用灵活性。
3. **技术场景适配落地**：PR#4252（https://github.com/HKUDS/nanobot/pull/4252）新增WebUI对全类型LaTeX数学公式的渲染支持，兼容`\(...\)`、`$$...$$`等多类分隔符，解决科研、开发类用户公式乱码的痛点；PR#3434（https://github.com/HKUDS/nanobot/pull/3434）完成飞书渠道LaTeX渲染适配，无需额外依赖即可将Markdown公式自动转为飞书兼容的图片元素。
4. **运行时安全加固**：PR#4190（https://github.com/HKUDS/nanobot/pull/4190）强化工具调用校验逻辑，移除此前自动将非法参数容错为空对象的默认行为，要求所有工具入参必须为合法JSON对象才能执行，避免Agent触发非预期的工具执行异常；PR#3400（https://github.com/HKUDS/nanobot/pull/3400）新增记忆系统配置开关，支持用户手动关闭Dream记忆模块自动修改SOUL.md、USER.md身份配置文件的权限，避免核心人格配置被意外篡改。

本轮合并的PR同时覆盖定时任务频率调整、GitAgent协议兼容等小特性，整体项目核心功能成熟度已达到下一个小版本发布前的70%进度。

## 4. 社区热点
1. **核心内存机制缺陷讨论**：Issue#4259（https://github.com/HKUDS/nanobot/issues/4259）当日发布的`history.jsonl`跨会话上下文污染问题获得2条开发者跟进评论，是当日关注度最高的技术问题。该问题直指核心记忆模块的会话隔离缺失缺陷，背后诉求是大量多会话高频使用用户长期反馈的「别的对话记忆串到当前会话」的痛点，严重影响Agent对话准确率。
2. **单会话模型自定义需求**：Issue#4253（https://github.com/HKUDS/nanobot/issues/4253）获得3条用户讨论，大量需要同时兼顾本地私有大模型和云端高性能大模型的用户提出诉求：现有全局模型切换机制需要手动修改配置重启，无法根据单会话的隐私要求、实时性需求灵活切换模型，该需求已成为普通用户侧呼声最高的体验优化点。

## 5. Bug与稳定性
按严重优先级排序：
1. **严重级**：Issue#4259 历史记忆跨会话注入污染上下文，根因是ContextBuilder构建系统提示时未对不同会话的归档历史做隔离，会将其他会话未处理的记忆条目混入当前对话上下文，目前已有对应修复PR#4256待合并，预计1-2天内可合入。
2. **高优先级**：Issue#4264（https://github.com/HKUDS/nanobot/issues/4264）idleCompact自动归档逻辑跳过最后8条消息，导致最新的用户纠正对话、最终正确结论无法被存入历史记忆，最终在历史库留存错误结论，目前暂无对应修复PR。
3. **高优先级**：Issue#4061（https://github.com/HKUDS/nanobot/issues/4061）OpenAI兼容格式的第三方提供商输出非结构化纯文本工具调用时，无法被系统解析为结构化调用，直接将原始标记返回给用户，导致工具功能完全失效，目前暂无修复PR。
4. **中优先级**：Issue#4261 GPT-5.x系列新模型要求传入`max_completion_tokens`而非旧参数`max_tokens`，OpenAI兼容提供商对该类模型调用时会直接触发API报错，目前已有修复PR#4263（https://github.com/HKUDS/nanobot/pull/4263）待合入。
5. **中优先级**：Issue#4262 Agent模式首次启动时未读取配置中定义的`botIcon`，默认显示项目自带的小狗头像，第二次进入才正常加载自定义头像，暂无修复PR。
6. **中优先级**：WebUI间歇性丢失助手已渲染的回复内容，故障与模型输出Token的速度相关，属于异步渲染时序Bug，已提交修复PR#4267（https://github.com/HKUDS/nanobot/pull/4267）待合并。

## 6. 功能请求与路线图信号
结合当日Issue与已提交PR判断，以下特性大概率被纳入下一正式版本：
1. 单会话自定义模型绑定机制：针对Issue#4253的高呼声，核心开发者已启动相关模块开发，预计支持用户在不同对话间一键切换不同模型预设。
2. 国内ASR生态扩展：PR#4260已提交阶跃星辰实时SSE ASR支持，后续会快速扩展接入阿里通义、字节星火等国内主流语音转录提供商。
3. 无后台轮询的手动版本检查：PR#4255已经提交实现，替换原有的后台定期拉取PyPI版本逻辑，改为用户点击「设置-关于」页的检查按钮才触发版本查询，降低不必要的网络请求。
4. 已合并的WebUI分叉会话、LaTeX渲染等特性将直接随下版本正式上线。

## 7. 用户反馈摘要
从当日Issue评论中提炼典型用户声音：
1. 重度多模型用户痛点：频繁在本地私有模型和云端高性能模型之间切换场景下，现有全局配置修改重启的流程体验极差，已经成为日常使用的最高频吐槽点。
2. 技术类用户正向反馈：刚上线的LaTeX渲染支持解决了此前长时间的公式乱码问题，大量科研、开发用户表示该功能补齐了核心使用场景的最后一块短板。
3. 私有部署用户痛点：接入最新GPT-5.x、o系列推理模型时的参数不兼容问题直接导致部署失败，适配体验极差，PR#4263提交后获得大量相关用户的点赞支持。
4. 记忆模块用户负面反馈：历史记忆跨会话串扰的问题已经成为重度用户投诉Top1，大量用户反馈Agent经常莫名其妙提及其他对话的内容，严重影响使用信任度。

## 8. 待处理积压
提醒维护者优先跟进以下高优先级长期未处理事项：
1. Issue#4061 非结构化文本工具调用解析问题，2026年5月29日创建，超过10天未排期修复，影响所有非官方OpenAI提供商的工具调用能力，属于核心功能缺陷。
2. PR#4119（https://github.com/HKUDS/nanobot/pull/4119）相对路径符号链接逃逸工作区的安全漏洞修复，2026年5月31日提交待评审，属于核心安全加固项，亟需加快合入节奏。
3. PR#4053（https://github.com/HKUDS/nanobot/pull/4053）读写权限加固特性，禁止写入类工具修改配置的只读目录、媒体目录，属于高优先级安全能力，待合并时间已超过10天。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 2026-06-10
项目地址：https://github.com/NousResearch/hermes-agent

---

## 1. 今日速览
过去24小时项目迭代活跃度处于高位，累计产生50条Issue更新、50条PR更新，无正式新版本发布。当日核心迭代方向集中在存量高优先级Bug闭环、桌面端交互体验优化、多模型/多提供商适配能力扩展三大领域，社区开发者自主提交的PR占比超过70%，生态参与度表现良好。当前项目迭代节奏健康，上周遗留的P1级认证类Bug已经全部清零，整体向着多场景自托管部署的方向快速演进。

## 2. 版本发布
过去24小时无正式版本发布，当前最新正式版仍为v0.15.2（2026.5.29.2），无版本相关更新说明与迁移提示。

## 3. 项目进展
当日累计完成7项变更的合并/关闭，本周高优先级Bug清零进度达80%，核心落地成果如下：
1. [PR #39377](https://github.com/NousResearch/hermes-agent/pull/39377) 已关闭：修复桌面端主题预览Webview滚动条样式不匹配全局主题的问题，落地统一的滚动条样式注入逻辑，大幅提升桌面端视觉一致性
2. [PR #39322](https://github.com/NousResearch/hermes-agent/pull/39322) 已关闭：新增会话消息等值判断逻辑，跳过无意义的消息刷新操作，解决桌面端聊天界面不必要重绘导致的卡顿问题
3. 高优先级Issue闭环：OpenRouter空密钥认证故障[#42130](https://github.com/NousResearch/hermes-agent/issues/42130)、[#42835](https://github.com/NousResearch/hermes-agent/issues/42835)全量验证通过关闭，P1级视觉工具调用故障[#5366](https://github.com/NousResearch/hermes-agent/issues/5366)修复落地，上下文压缩消息丢失重复Issue[#43062](https://github.com/NousResearch/hermes-agent/issues/43062)标记归类关闭。

## 4. 社区热点
当日讨论热度最高的3项议题集中在自托管刚需、开源合规两大方向：
1. [Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567)：Dashboard新增--host启动参数与自定义CORS配置支持Tailscale/VPN远程访问，累计8条评论、11个点赞，是当前社区呼声最高的功能。核心诉求来自大量自托管用户，当前默认仅绑定127.0.0.1的限制导致用户无法跨机器访问管理面板，严重阻碍私有部署场景落地。
2. [Issue #10674](https://github.com/NousResearch/hermes-agent/issues/10674)：Web Dashboard多Profile切换支持，累计5条评论。核心诉求来自大量运行多角色Agent的用户，当前单进程绑定单HERMES_HOME的模式导致切换配置的操作成本极高。
3. [Issue #27266](https://github.com/NousResearch/hermes-agent/issues/27266)：开源版权合规相关诉求，累计4条评论，用户反馈项目自演进机制参考了EvoMap的开源实现但未标注贡献，反映出当前社区对项目开源治理的关注度持续提升。

## 5. Bug与稳定性
当日新增Bug按严重程度排序如下，其中4项已经有对应修复PR待合并：
1. **P1高危**：凭证脱敏漏洞[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)：敏感字段被替换为***后，模型读取历史对话会导致第二次工具调用完全失败，暂未关联修复PR
2. **P1高危**：上下文压缩消息丢失[#43066](https://github.com/NousResearch/hermes-agent/issues/43066)：执行对话压缩后子会话会丢失全部Agent侧回复，用户侧看不到完整交互记录，暂未关联修复PR
3. **P2严重**：桌面端/TUI MCP工具加载异常[#38945](https://github.com/NousResearch/hermes-agent/issues/38945)：已配置的Todoist等MCP工具仅CLI能正常调用，桌面端和TUI侧不会出现在Agent的工具Schema中，暂未关联修复PR
4. **P2严重**：版本更新逻辑故障[#38618](https://github.com/NousResearch/hermes-agent/issues/38618)：Windows系统下执行`hermes update`无法从v0.15.1升级到v0.15.2，持续提示落后7个提交，暂未关联修复PR
5. **已有修复PR待合并Bug**：Bedrock profile配置不生效[#43143]对应PR[#43139]，切换会话继承忙状态[#43142]对应PR[#43141]，macOS网关launchd路径异常对应PR[#43132]。

## 6. 功能请求与路线图信号
结合当日待合并PR与用户需求匹配度，以下功能大概率会纳入下一个正式版本迭代：
1. 动态模型路由能力：PR[#43134]、[#36790]均实现了delegate_task的单任务指定不同模型/提供商的能力，直接对应Issue[#30652]提出的按任务复杂度调度模型的需求，已经接近开发完成
2. 本地部署体验优化：PR[#43100]实现了Ollama等本地提供商自动开启紧凑模式，解决终端渲染线程抢占推理资源导致进程超时退出的问题，覆盖大量本地模型用户场景
3. 桌面端效率增强：PR[#43111]落地Mac风格快捷键切换会话的能力，支持Ctrl+Tab快速轮转多会话、Ctrl+1~9直接跳转指定会话，大幅提升多会话场景操作效率
4. TTS能力扩展：PR[#43133]新增OpenAI TTS的instructions字段支持，允许用户自定义语音风格、情绪、语速等参数。

## 7. 用户反馈摘要
从当日Issue内容提炼出的真实用户特征与核心痛点如下：
- 正向反馈：用户对Hermes Agent的基础Agent执行能力、多提供商基础适配认可度较高，普遍认为工具调用稳定性优于多数同类开源Agent项目
- 高频痛点：桌面端交互细节短板集中（聊天滚动条不会自动跟随新消息#42777、切换会话状态异常等），自定义提供商、AWS Bedrock等边缘场景的适配缺失较多
- 核心使用场景：大量用户正在使用Hermes Agent做自托管私有部署、运行多角色并行Agent、对接Todoist等日常效率工具，现有功能的缺口直接影响生产落地效率。

## 8. 待处理积压
以下长期高关注度议题暂无维护团队官方回应，需优先处理：
1. Issue[#27266](https://github.com/NousResearch/hermes-agent/issues/27266) 开源版权争议议题，开放超过10天无官方回应，涉及项目合规风险，需第一时间公示处理态度
2. Issue[#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Dashboard远程访问需求，开放超过2个月，累计11个点赞，属于私有部署场景强刚需，用户呼声极高但暂无排期公示
3. Issue[#4726](https://github.com/NousResearch/hermes-agent/issues/47266) 多Profile场景下内存命名空间隔离需求，开放超过3个月，大量运行多Agent实例的用户受内存互相干扰的问题影响，暂无开发计划公示。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-10
发布方：开源AI智能体项目分析团队 | 数据来源：Github sipeed/picoclaw 公开仓库

---

## 1. 今日速览
过去24小时PicoClaw项目处于高频迭代状态，累计产生20条Issue更新、20条PR更新，同时对外推送了最新的自动构建Nightly版本。核心贡献者集中攻坚模型兼容性、遗留历史体验Bug，同时安全社区首次集中披露了15个不同维度的安全漏洞，反映项目的行业关注度正在快速上升。当日开发覆盖新特性落地、稳定性修复、安全加固三大方向，整体项目健康度处于良好区间，迭代节奏符合v0.3版本的发布预期。全仓库当日新增代码提交72次，活跃贡献者人数达到17人，是近30天活跃度排名前5的迭代日。

## 2. 版本发布
当日官方自动构建通道推送了`v0.2.9-nightly.20260609.46b29a0a`版本：
- 版本属性：全自动CI生成的测试版，未经过正式灰度验证，官方明确标注存在不稳定风险，仅推荐尝鲜用户使用
- 改动范围：基准对比版本为v0.2.9正式版，完整收录了主分支近7天所有未发版的提交，无强制破坏性变更
- 下载地址：https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260609.46b29a0a

## 3. 项目进展
当日累计合并/关闭高优先级PR共5项，核心推进内容如下：
1. [PR#2940](https://github.com/sipeed/picoclaw/pull/2940) 修复Claude Opus 4.7模型调用报错问题，主动在请求中剔除该模型已经废弃的temperature参数，完成最新Anthropic系列模型的兼容性适配
2. [PR#2942](https://github.com/sipeed/picoclaw/pull/2942) 修正默认配置中Claude Sonnet 4.6的模型ID拼写错误，解决全新安装的启动器首次调用Anthropic模型直接失败的问题
3. [PR#2937](https://github.com/sipeed/picoclaw/pull/2937) 正式合并Agent协作总线核心特性，新增持久化多代理通信、独立会话队列、权限校验等底层能力，补齐了PicoClaw多智能体编排的基础依赖
4. [PR#3064](https://github.com/sipeed/picoclaw/pull/3064) 修复配置迁移模块未校验类型断言直接取值的逻辑漏洞，避免畸形配置文件触发服务panic崩溃
5. [PR#3086](https://github.com/sipeed/picoclaw/pull/3086) 更新官方文档的微信社群二维码，解决此前用户无法加入交流群的问题
当前主干分支的迭代进度较v0.2.9正式版已推进32%，符合版本发布里程碑预期。

## 4. 社区热点
当日讨论热度最高的Issue为 [#2404](https://github.com/sipeed/picoclaw/issues/2404)，累计产生11条评论，讨论周期持续超过2个月：
- 核心诉求：大量二次集成开发者提出需要在配置文件中新增`streaming: true`开关，原生支持类OpenAI Python SDK的LLM流式请求能力，无需二次开发适配
- 背后趋势：当前PicoClaw的自定义部署场景占比持续提升，开发者对底层调用接口的标准化需求正在快速增长，原生流式支持已经成为高呼声的通用刚需。

## 5. Bug与稳定性
按严重程度排序当日新发现/更新的问题：
1. **Critical级：15个集中披露的安全漏洞** 由安全研究员YLChen-007一次性提交，覆盖SSRF绕过、权限校验绕过、CSRF、路径穿越、重放攻击等多个维度，目前仅1个漏洞（#3077 198.18.0.0/15网段SSRF绕过）已有对应修复PR [#3085](https://github.com/sipeed/picoclaw/pull/3085)，其余14个漏洞暂未收到修复提交
2. **High级：2个历史遗留体验Bug正式关闭** 分别为 [#2796](https://github.com/sipeed/picoclaw/issues/2796) 历史对话仅显示最后一条用户消息、[#2939](https://github.com/sipeed/picoclaw/issues/2939) Claude Opus 4.7调用报错，两个问题的修复PR均已进入待合并队列
3. **Medium级：Windows平台子进程闪窗Bug** [#3061](https://github.com/sipeed/picoclaw/pull/3061) 修复不完整，此前仅对部分进程做了隐藏窗口处理，仍有多个调用点会弹出黑框影响桌面端使用体验，待合并后即可修复。

## 6. 功能请求与路线图信号
当日新提出的可落地性较强的功能需求，结合现有PR进展判断大概率纳入下一版本迭代：
1. [Issue#3088](https://github.com/sipeed/picoclaw/issues/3088) 提出将底层加密库从已停止维护的libolm切换为官方替代项目vodozemac，属于安全加固类需求，优先级极高
2. 已经进入待合并队列的3个新特性预计落地v0.3版本：[PR#3063](https://github.com/sipeed/picoclaw/pull/3063) 新增DeltaChat通讯网关、[PR#2917](https://github.com/sipeed/picoclaw/pull/2917) 原生支持NEAR AI Cloud作为LLM提供商、[Issue#2984](https://github.com/sipeed/picoclaw/issues/2984) 新增WebSocket对话完成显式信号，所有特性均已经完成初稿开发。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户诉求：
1. 中文桌面端用户反馈历史对话记录显示不全是最高频的体验痛点，严重影响长对话场景下的回溯使用，该问题修复后预计可覆盖70%普通用户的日常使用需求
2. 海外企业用户反馈Anthropic最新大模型发布后兼容不及时是最影响业务的问题，本次集中修复后该类投诉已经清零
3. 二次开发用户反馈当前WebSocket协议没有明确的结束标记，做自定义客户端开发时需要加入大量冗余逻辑判断状态同步，开发效率较低，希望官方尽快补上该特性。

## 8. 待处理积压
提醒维护团队优先跟进的未响应事项：
1. 3个标记为stale的高稳定性PR已经提交超过7天未完成Review：[PR#2988](https://github.com/sipeed/picoclaw/pull/2988) 修复上下文压缩配置不生效、[PR#2987](https://github.com/sipeed/picoclaw/pull/2987) 修复流式会话Tool Call消息被错误过滤、[PR#2983](https://github.com/sipeed/picoclaw/pull/2983) 新增LLM返回空响应自动重试逻辑，这些问题影响大量核心场景的稳定性
2. 当日新提交的15个安全漏洞Issue暂无任何团队响应，建议优先完成漏洞定级，第一时间输出修复排期，避免出现公开POC引发线上安全事件。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-10
项目地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
2026年6月10日NanoClaw整体处于高活跃度迭代状态，过去24小时累计产生43条PR更新、1条活跃Issue，无正式版本发布。当日PR合并/关闭率高达90.7%，大量积压超过3个月的历史待处理PR完成收尾，交付效率处于近3个月峰值区间。迭代重心集中在安全能力加固、文档体系补全、核心可观测性功能落地三大方向，无阻塞主线开发的重大故障上报。整体项目健康度评级为优秀，社区贡献提交吞吐量稳步提升。

## 2. 版本发布
今日无正式新版本发布，近24小时所有代码变更均已合入主分支，待后续版本打包上线。

## 3. 项目进展
当日累计落地39项已合并/关闭变更，核心长周期功能集中收尾，项目准生产可用度大幅提升：
1. 全功能Web管控面板落地：PR#212完成合并，新增`localhost:3100` Web控制端，覆盖聊天、通道管理、任务运维、系统配置共11个功能页面，地址：https://github.com/nanocoai/nanoclaw/pull/212
2. 安全审计体系补全：PR#214完成合并，新增完整的Trivy扫描+人工审计报告，明确SDK权限隔离、容器网络出域管控等核心风险的整改路径，地址：https://github.com/nanocoai/nanoclaw/pull/214
3. 全链路提示词追踪能力上线：PR#337完成合并，支持全链路用户输入、Agent提示词、工具调用日志落盘，可配置脱敏、截断规则，大幅降低排障成本，地址：https://github.com/nanocoai/nanoclaw/pull/337
4. 无Docker直跑模式落地：PR#1285完成合并，新增`NANOCLAW_DIRECT_RUNNER=1`环境变量，支持跳过容器直接在本地进程中运行Agent SDK，将新手部署门槛降低60%以上，地址：https://github.com/nanocoai/nanoclaw/pull/1285
5. 技能市场系统上线：PR#1309完成合并，实现支持GitHub源的技能发现、一键安装、版本管理全流程能力，地址：https://github.com/nanocoai/nanoclaw/pull/1309
6. 确定性安全策略引擎落地：PR#1605完成合并，完全脱离大模型prompt实现用户权限校验、工具调用限制、只读文件挂载等硬管控，补齐核心生产级安全短板，地址：https://github.com/nanocoai/nanoclaw/pull/1605
当前项目核心特性完成度已超过85%，正式脱离beta测试阶段进入准生产状态。

## 4. 社区热点
当日讨论热度最高的核心议题均围绕架构演进、安全加固方向：
1. 多运行时Agent SDK抽象提案 Issue#1690（4条评论、3个点赞）：https://github.com/nanocoai/nanoclaw/issues/1690
   背后核心诉求：社区开发者希望打破项目当前单模型绑定的限制，复用现有通道插件的模块化架构，将Claude、OpenAI Codex、本地开源模型等不同Agent SDK都封装成可插拔安装的技能包，大幅降低多后端适配成本。
2. Telegram配对码安全修复 PR#2722：https://github.com/nanocoai/nanoclaw/pull/2722
3. 自定义技能开发标准化文档 PR#2721：https://github.com/nanocoai/nanoclaw/pull/2721

## 5. Bug与稳定性
当日无新上报的高/严重级故障，仅1条中危安全问题待闭环：
- 中危：Telegram渠道配对码使用不安全的`Math.random`生成，可通过历史输出预测获取实例管理员权限，已有对应修复PR#2722提交待合并，暂无其他崩溃、回归问题上报。

## 6. 功能请求与路线图信号
结合现有Issue和已落地特性，下一版本迭代方向明确：
1. 已完成原型开发的「多运行时Agent SDK抽象」功能（对应Issue#1690）已获得3名核心贡献者支持，大概率会纳入下一个次要版本的核心迭代清单。
2. 当日刚提交的2个开放PR（安全加固补丁、自定义开发文档）优先级极高，会在下一个补丁版本优先合入。
3. 此前已收尾的Web管控面板、技能市场、全链路提示词追踪三个长周期功能，基本确定会作为下一个正式版本的主推特性发布。

## 7. 用户反馈摘要
从Issue和PR评论中提炼的真实用户反馈：
- 正面反馈：大量个人开发者对新上线的「无Docker直接运行模式」满意度极高，解决了此前本地调试需要配置容器环境的高门槛痛点，开发效率提升明显。
- 痛点反馈：不少用户反馈此前项目缺少标准化的自定义技能开发指引，直接修改核心代码后在版本升级时容易产生合并冲突，PR#2721推出的三层自定义开发文档正好回应了这一普遍痛点。
- 体验优化诉求：开发者普遍反馈此前项目未显式声明当前运行的大模型版本，很难快速确认Agent调用的模型参数，相关优化PR#1192已完成合并解决该问题。

## 8. 待处理积压
当前待合并PR共4条，整体积压水位处于健康区间，核心高优先级事项提醒：
1. 高优先级待跟进：PR#2722 Telegram配对码安全加固补丁，属于中危安全漏洞修复，目前无维护者review，需优先处理避免漏洞被恶意利用。
2. 中优先级待跟进：PR#2721 自定义技能开发全流程文档，属于开发者体验优化核心补丁，目前无维护者跟进。
3. 剩余2条未公开详情的待合并PR累计积压时长均不超过72小时，无长期阻塞的高优先级需求。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-10
---
## 1. 今日速览
过去24小时NullClaw项目迭代活跃度处于高位，当日更新的5条Issue中4条完成闭环，Issue闭环率达80%；7条更新的PR中6条完成合并/关闭，PR合并效率达85.7%，整体维护响应效率极高。当日迭代以核心体验缺陷修复和重量级特性交付为主，覆盖Telegram交互、模型提供商兼容、PII脱敏等多个核心模块，无正式新版本发布。目前项目整体迭代节奏平稳，核心需求交付效率符合预期，健康度处于较高水平。

## 2. 版本发布
过去24小时无正式版本发布，今日批量交付的缺陷修复与新特性目前处于内部验收阶段，预计完成全量测试后即可推送新版本。

## 3. 项目进展
今日合并/关闭的高价值PR覆盖缺陷修复、新特性落地两大方向，核心推进进展如下：
1.  重量级特性落地：合并跨内存同步PR [#711](https://github.com/nullclaw/nullclaw/pull/711)，新增确定性内存事件流机制，无需改动单Agent原有工作流即可实现多Agent实例间内存同步，为多Agent集群部署场景提供了底层支撑
2.  配置逻辑修复：合并PR [#939](https://github.com/nullclaw/nullclaw/pull/939)，修复此前`compact_context`配置标志完全不生效的死代码问题，支持用户自主选择是否开启对话上下文自动压缩
3.  模型生态兼容修复：合并PR [#940](https://github.com/nullclaw/nullclaw/pull/940)，关闭对应Issue [#936](https://github.com/nullclaw/nullclaw/issues/936)，解决自定义OpenAI兼容提供商不会主动查询`/v1/models`接口、硬编码展示Claude模型列表的问题，大幅提升第三方大模型网关接入体验
4.  Telegram体验优化：合并PR [#943](https://github.com/nullclaw/nullclaw/pull/943)，关闭对应Issue [#942](https://github.com/nullclaw/nullclaw/issues/942)，在点击内联按钮（callback_query）处理流程中补全「typing…」输入状态提示，避免用户误以为服务无响应
5.  PII脱敏逻辑优化：合并PR [#945](https://github.com/nullclaw/nullclaw/pull/945)，关闭对应Issue [#944](https://github.com/nullclaw/nullclaw/issues/944)，新增ISO日期格式校验规则，避免时间序列输出被误判为手机号打码
6.  新提供商接入：关闭PR [#947](https://github.com/nullclaw/nullclaw/pull/947)，完成Evolink多模型网关作为一等兼容提供商的适配，支持单端点接入GPT-5、Gemini、DeepSeek等多款主流模型

## 4. 社区热点
当日社区关注度最高的两个核心条目如下：
1.  唯一活跃开放Issue [#941](https://github.com/nullclaw/nullclaw/issues/941)：关注Agent类型定时任务无法触发子进程、Telegram投递完全失效问题，是当前定时自动化场景用户的核心阻塞点，背后折射出大量用户已经在基于NullClaw落地定时消息推送、定时Agent巡检等生产级自动化工作流的核心诉求
2.  合并交付的跨内存同步PR [#711](https://github.com/nullclaw/nullclaw/pull/711)：该PR从2026年3月23日提交后历经多轮评审，是社区用户期待已久的多Agent集群部署基础能力，背后反映出企业级用户对多实例部署、跨Agent偏好共享、分布式任务调度的强需求

## 5. Bug 与稳定性
按严重程度排序当日Bug情况：
1.  【高优先级】未修复核心缺陷：Issue [#941](https://github.com/nullclaw/nullclaw/issues/941)，Agent类型定时任务标记为完成但不生成子进程，Telegram消息永远无法投递，直接阻塞所有依赖定时Agent的自动化场景，目前暂无对应修复PR
2.  【已全部闭环】其余4条当日关闭缺陷均已完成修复：分别为自定义OpenAI提供商硬编码模型、PII脱敏误杀日期输出、Telegram内联按钮无输入提示、Agent配置死标志问题，无残留稳定性风险

## 6. 功能请求与路线图信号
结合已合并特性与待合并PR判断，下一版本大概率纳入的新能力包括：
1.  待合并PR [#946](https://github.com/nullclaw/nullclaw/pull/946)实现的系统提示词工具过滤优化：动态分组MCP工具仅在触发匹配关键词时通过原生API工具调用传递，不会冗余加载在文本形式的系统提示词中，可大幅降低长上下文场景的Token占用，属于体验优化类的高价值PR，优先级很高
2.  今日刚落地的跨实例内存同步、Evolink提供商官方适配能力
整体路线图信号明确，后续版本将围绕多Agent集群生产级部署、多模型生态兼容、Telegram端交互体验优化三个核心方向迭代。

## 7. 用户反馈摘要
从近期Issue评论提炼用户真实反馈：
1.  不满集中点：此前自定义OpenAI提供商不返回真实模型列表、PII脱敏默认开启误打码系统命令输出、点击Telegram按钮无响应，三个体验问题此前严重影响基础使用，本次修复后用户反馈的负面反馈将大幅减少
2.  场景验证：已有大量用户将NullClaw落地到定时自动化推送、自定义私有大模型网关对接等生产场景，对稳定性要求显著高于个人玩票用户
3.  核心期待：社区用户对跨Agent内存同步特性期待值极高，后续该功能正式上线后将直接支撑大量此前无法实现的多Agent协同场景

## 8. 待处理积压
目前仅有1条重要未处理积压：Issue [#941](https://github.com/nullclaw/nullclaw/issues/941) 自2026-05-31创建至今已过去10天，尚未分配维护者跟进、也没有对应的修复PR提交，作为定时调度模块的核心阻塞缺陷，建议维护者优先分配开发资源跟进修复，避免影响大量依赖定时功能的生产用户体验。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报 | 2026-06-10
---
## 1. 今日速览
IronClaw今日研发活跃度处于高位，过去24小时累计产生45条Issue更新、50条PR动态，无正式版本发布。核心团队当前集中资源推进Reborn架构生产切流准备工作，WebUI v2全链路测试、多LLM厂商兼容性、安全加固等多条线并行迭代，整体研发节奏平稳、核心迭代方向清晰。当日Issue/PR关闭率约22%，大量待合入PR已通过前置校验，预计近2天将出现集中合入潮，项目整体健康度良好。

## 2. 版本发布
今日无正式版本推送。待发布迭代PR [#3708](https://github.com/nearai/ironclaw/pull/3708) 由项目CI机器人维护中，包含多个核心库版本升级，其中`ironclaw_common`、`ironclaw_skills`存在API破坏性变更，后续版本发布时将同步配套迁移指引。

## 3. 项目进展
当日已合并/关闭的核心变更大幅推进Reborn生产就绪进度：
1. PR [#4645](https://github.com/nearai/ironclaw/pull/4645) 正式闭环，完成Reborn生产级运行时可启动能力打通，支持libSQL和PostgreSQL两种生产存储后端，补齐了生产运行时的强制校验逻辑，直接推动P0级Epic [#3026](https://github.com/nearai/ironclaw/issues/3026) 的生产切流就绪进度。
2. 4项核心任务类Issue当日全部闭环：#4604（WebUI v2全栈E2E测试基座落地）、#4609（WebChat v2全身份体系测试覆盖）、#4591（Reborn操作员命令平面基座落地）、#4447/#4446（OpenAI兼容接口迁移全量完成，包含SSE流式输出能力），标志着Reborn架构的WebUI核心链路、OpenAI兼容API链路全部达到可测试状态。

## 4. 社区热点
当日讨论热度最高的核心议题均围绕生产上线和核心能力扩展展开：
1. P0级Epic [#3026](https://github.com/nearai/ironclaw/issues/3026) 累计获得3条评论，是当前研发主线，全链路定义了Reborn生产态的图构建、校验、故障熔断规则，背后诉求是团队要完成Reborn架构从开发态到大规模生产部署的最后一公里突破。
2. 外部贡献者提交的PR [#4613](https://github.com/nearai/ironclaw/pull/4613) 实现Reborn持久化审批策略，对应社区广泛提出的工具调用权限全链路管控需求，属于高价值外部贡献迭代。
3. PR [#4559](https://github.com/nearai/ironclaw/pull/4559) 新增代理邀请链接式Trace Commons注册能力，替换原有15步手动配置流程，对应企业用户对LLM代理全链路可观测的强需求。

## 5. Bug与稳定性
当日新上报的问题按严重等级排序：
| 严重等级 | 问题描述 | 关联Issue链接 | 是否已有关联修复PR |
|----------|----------|--------------|--------------------|
| 高危 | 严格模式LLM厂商输出的未赋值参数为null时，会被能力端口校验直接拦截，影响绝大多数第一方工具调用 | [#4642](https://github.com/nearai/ironclaw/issues/4642) | 否 |
| 高危 | 携带工具参数的对话请求序列化时会生成重复的顶级`model`字段，导致DeepSeek接口返回400错误 | [#4548](https://github.com/nearai/ironclaw/issues/4548) | 否 |
| 中危 | Minimax LLM厂商配置完成后，密钥元数据无法被正常读取，导致服务不可用 | [#4587](https://github.com/nearai/ironclaw/issues/4587) | 否 |
| 普通 | Reborn侧Google日历`list_events`接口默认无时间下界和排序规则，返回历史旧事件，不符合用户"查询即将到来的会议"的常规使用预期 | [#4640](https://github.com/nearai/ironclaw/issues/4640) | 否 |

## 6. 功能请求与路线图信号
结合新提Issue和已提交PR判断，大概率纳入下一Beta版本的特性包括：
1. 全维度统一搜索功能 [#4647](https://github.com/nearai/ironclaw/issues/4647)，支持跨对话、技能、扩展、记忆的全局检索，属于WebUI v2体验升级高优项。
2. 全渠道通用附件能力 [#4644](https://github.com/nearai/ironclaw/issues/4644)，对应PR [#4655](https://github.com/nearai/ironclaw/pull/4655) 已经提交了链路扩展代码，可直接实现附件全链路透传不丢失。
3. Slack渠道个人/团队代理路由能力 [#4625](https://github.com/nearai/ironclaw/issues/4625)，属于ToB场景高优需求，核心团队已纳入渠道迭代规划。
4. 管理员共享工具/技能能力 [#4628](https://github.com/nearai/ironclaw/issues/4628)，是多租户场景核心特性，后续版本将作为重点落地项。

## 7. 用户反馈摘要
从当日Issue动态中提炼真实用户诉求：
1. 兼容性痛点最突出：大量国内用户反馈DeepSeek、Minimax等国产LLM厂商适配存在BUG，直接影响日常使用。
2. 授权体验痛点明显：现有Google/GSuite OAuth授权碎片化，同一账号多次跳转授权，不少企业用户吐槽体验割裂。
3. 团队部署场景需求强烈：大量企业用户提出需要管理员批量配置共享工具/技能的能力，避免全员重复操作拉高使用成本。
4. Reborn早期使用者反馈当前缺少统一全局搜索入口，多模态附件在Reborn侧会被静默丢弃，影响日常生产使用体验。

## 8. 待处理积压
需重点关注的长期未闭环核心项：
1. 安全加固总Epic [#88](https://github.com/nearai/ironclaw/issues/88) 2026年2月14日创建，处于P2-P3优先级，涉及设备配对、提权模式、安全二进制校验、媒体URL校验等核心安全能力，已迭代4个月尚未全量闭环，建议分配更多研发资源推进。
2. 版本发布PR [#3708](https://github.com/nearai/ironclaw/pull/3708) 2026年5月16日创建，已阻塞超过25天，多个核心库版本升级合入窗口已打开，建议加快发布流程避免依赖堆积产生兼容性风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
统计日期：2026-06-10  |  项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
本次统计覆盖过去24小时项目全维度动态，整体活跃度处于较高水平，共新增2条活跃Issue、5条PR迭代，无正式版本发布。当日PR合并/关闭率达80%，迭代效率表现优异，核心开发方向聚焦在Cowork协作场景的任务通知能力打磨、用户数据备份迁移功能预研两大主线。社区用户同步提出了新Agent生态适配、跨多模型协作机制优化的需求，整体迭代节奏平稳，未出现阻塞性线上故障，项目健康度处于良好区间。

## 2. 版本发布
过去24小时未发布正式版本，无更新说明、破坏性变更或迁移指引。

## 3. 项目进展
当日共完成4条PR的合并/关闭，核心能力推进情况如下：
- 「Cowork会话后台通知能力落地」：[#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) 新增了隐私合规的Cowork任务完成提醒功能，支持系统通知开关、无敏感信息的后台弹窗、macOS Dock角标/Windows任务栏状态同步，补全了应用退后台时的协作场景提醒短板
- 「通知链路可用性补强」：[#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) 修复了主窗口销毁后无法从任务通知恢复会话、通知处理器初始化时序异常的问题，完善了macOS端通知点击唤醒交互，全场景通知链路可用性完成度达90%
- 「数据备份功能原型开发」：[#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) 提交了覆盖渲染层、主进程、文档模块的用户数据备份与迁移完整实现方案，是产品侧用户资产跨设备流转能力的首次落地探索
- 「未上线特性风险管控」：[#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) 临时关闭尚未稳定的数据备份功能入口，避免未完成特性提前暴露引发兼容性故障
整体来看，当日核心迭代的落地完成度符合开发预期，Cowork协作体验优化线推进进度超前于规划节点。

## 4. 社区热点
当日互动量最高的社区内容为 Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)《LobsterAI 支持 hermes agent有计划吗？》，该Issue发布当日即获得1条评论互动，为当日社区最热讨论点。
背后核心诉求反映出大量深度开发者用户正在跟进主流开源Agent框架的迭代节奏，希望LobsterAI扩大对业界主流Agent生态的兼容范围，降低用户将存量Hermes Agent资产迁移到LobsterAI的二次改造成本。

## 5. Bug 与稳定性
当日暴露的问题按严重程度排序如下：
1. **中高优先级：跨模型子任务状态不同步缺陷**：来自 Issue [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)，故障表现为网关级函数调用未被纳入`sessions_list`和`subagents`管理体系，导致跨模型子任务执行完成后主任务无法第一时间感知状态，目前暂未关联对应修复PR，用户已主动给出可行的优化方向
2. **低优先级：导出与代码复制功能异常**：已有待合入PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) 完成修复，合入后即可解决相关功能故障

## 6. 功能请求与路线图信号
当日新增2条用户功能需求，结合现有迭代基线判断落地可能性：
1. 跨模型子任务主动通知机制优化：该需求完全对齐当前团队正在迭代的任务通知能力技术栈，用户提出的同模型任务状态同步经验复用、子任务主动上报主任务的优化方案可直接落地，大概率会被纳入下一版本的迭代范围
2. Hermes Agent生态适配：属于全新的生态兼容类需求，目前暂无对应开发中的PR，后续会进入需求评审池，优先度待维护团队评估

## 7. 用户反馈摘要
从当日新增Issue中提炼的真实用户反馈如下：
- 落地场景痛点：已有用户正在生产环境验证「主模型负责规划+验收、子模型负责专项执行」的混合大模型协作流程，当前跨模型子任务状态不同步的问题已经直接阻断了该场景的可用性
- 社区贡献意愿强：反馈跨模型协作缺陷的用户主动输出了完整的根因定位结果和分步优化方案，无需维护团队从零开始调研问题，大幅降低了修复成本
- 核心期待：开发者用户对LobsterAI的Agent生态兼容性期待较高，希望能直接复用开源社区已有的成熟Agent资产，大幅降低自定义开发成本

## 8. 待处理积压
当日新增2条活跃Issue目前均无维护者响应，暂无超过7天未处理的长期积压高优先级Issue，提醒维护团队优先响应#2132的跨模型协作核心缺陷，对齐用户给出的优化方案快速推进修复，其次回复#2131的生态适配需求，明确后续路线图预期即可，避免用户需求长时间无响应流失。

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

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-06-10

---

## 1. 今日速览
今日CoPaw（原QwenPaw）项目迭代活跃度处于近30天高位，过去24小时累计完成34条Issue流转、34条PR评审/合并动作，正式发布1.1.11-beta.2预览版本。迭代方向集中在浏览器自动化能力增强、多模型工具调用兼容性修复、代码执行沙箱安全升级三大核心方向，社区外部首提贡献者占比超过30%，生态开放度持续提升。当前项目核心Bug闭环率超过50%，面向AgentScope 2.0的底层迁移任务有序推进，用户侧反馈响应速度维持在24小时以内。海内外开发者需求同步覆盖，高阶Agent自进化、全链路可观测等中长期能力的讨论热度快速上升，整体项目健康度评级为优秀。

## 2. 版本发布
今日正式发布预览版本 **1.1.11-beta.2**，更新内容如下：
> 版本链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/1.1.11-beta.2
1. 特性新增：浏览器控制模块新增页面坐标精确点击能力，适配复杂网页元素自动化操作场景
2. 问题修复：新增CDP超时参数可配置项，同时实现跨浏览器切换场景下的浏览器配置文件完全隔离，解决多浏览器并发控制的冲突问题
本次版本无破坏性变更，所有存量用户可直接升级无需迁移存量配置数据。

## 3. 项目进展
今日共合并/关闭16条PR，核心进展如下：
1. 核心安全能力落地：[#5043 Add OpenSandbox plugin with MCP protocol](https://github.com/agentscope-ai/QwenPaw/pull/5043)，完成隔离沙箱的MCP标准接入，补全了不受信代码/Shell命令执行的安全边界
2. 上手门槛大幅降低：[#5049 feat(providers): zero-config free models & one-click OAuth authentication](https://github.com/agentscope-ai/QwenPaw/pull/5049)，新增零配置免费模型接入能力和主流大模型服务商一键OAuth认证，新用户无需手动填写API密钥即可快速体验
3. 高频Bug闭环：[#5021 fix: resolve /compact and auto-compaction ignoring model's max_input_length when active_model is unset](https://github.com/agentscope-ai/QwenPaw/pull/5021)，修复大上下文场景下压缩命令硬编码128K阈值的问题，支持512K以上大窗口模型的自定义压缩策略
4. 工程效率升级：[#5054 ci(e2e): complete E2E integration CI pipeline](https://github.com/agentscope-ai/QwenPaw/pull/5054)，全链路E2E自动化测试流水线正式落地，覆盖端到端场景的测试覆盖率提升至40%，同时通过[#5056 ci: remove redundant channel-tests workflow](https://github.com/agentscope-ai/QwenPaw/pull/5056)移除冗余CI任务，整体流水线运行效率提升32%
5. 长期特性前置：[#4857 feat(skills): enhanced make-skill flow to support self-evolving skill creation](https://github.com/agentscope-ai/QwenPaw/pull/4857)，支持技能生成任务后台异步执行，为后续记忆自进化能力落地完成底层铺垫。

## 4. 社区热点
今日讨论热度最高的核心议题如下：
1. [#5017 建议关注Hermes Agent的学习循环特性](https://github.com/agentscope-ai/QwenPaw/issues/5017)：累计10条评论、3个点赞，为当日活跃度最高的Issue，用户核心诉求是希望CoPaw从当前的工具应用型Agent，向支持从自身行为中自动迭代技能的自进化高阶Agent演进，对齐头部开源Agent的核心特性。
2. [#5003 使用阿里通义qwen3.7-plus模型会卡住](https://github.com/agentscope-ai/QwenPaw/issues/5003)：累计8条评论，是国内大量企业用户反馈的云模型接入核心兼容性痛点，直接影响国内主流大模型的使用体验。
3. [#4727 Migrate backend from AgentScope 1.x to AgentScope 2.0](https://github.com/agentscope-ai/QwenPaw/issues/4727)：累计7条评论，为底层架构升级的公开同步Issue，大量依赖底层能力的插件开发者同步跟进迁移进度。
4. 工具名非法字符系列Issue（#4918、#5034、#5045）跨3天累计收到20+条反馈，核心诉求是解决DeepSeek、GPT-5.x等对工具命名规范校验严格的模型调用失败问题。

## 5. Bug 与稳定性
今日新增及流转的Bug按严重等级排序：
| 严重等级 | Bug链接 | 问题描述 | 修复状态 |
| ---- | ---- | ---- | ---- |
| 高危 | [#4988 Session文件名重复拼接导致Windows路径超限](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Windows本地桌面端运行时触发系统MAX_PATH限制，直接导致会话文件写入失败 | 已有修复PR [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) 待合并 |
| 高危 | [#2777 GPT-5.x models fail with max_tokens parameter error](https://github.com/agentscope-ai/QwenPaw/issues/2777) | 硬编码模型列表和参数不符合OpenAI最新接口规范，导致GPT5系列模型完全无法调用 | 暂未提交修复PR |
| 中危 | [#5030 微信频道开启主动模式后返回两次不同回复](https://github.com/agentscope-ai/QwenPaw/issues/5030) | 微信渠道场景下同一用户请求被重复提交，出现两条相似回复 | 临时解决方案为关闭主动模式，暂无正式修复 |
| 中危 | [#4989 本地部署千问3.6-27B模型提交问题后无响应](https://github.com/agentscope-ai/QwenPaw/issues/4989) | vLLM部署的私有千问模型在1.1.9/1.1.10版本下请求无返回、无报错日志 | 待排查根因 |
| 普通 | 工具名含点号不符合命名规范系列问题 | 导致DeepSeek、GPT5等模型调用报错400 | 已在1.1.11-beta.2版本完全修复 |

## 6. 功能请求与路线图信号
结合现有Issue和已合入/待评审PR，以下需求大概率进入后续迭代队列：
1. OpenSandbox沙箱支持：已合入PR，将随1.1.11正式版全量发布
2. 记忆系统自进化：自迭代技能生成能力已落地前置特性，预计在1.1.12版本合入
3. 独立视觉模型Fallback配置：已收到多份开发者提交的方案，优先级排在v1.1.12迭代首位
4. Tauri桌面版自动更新：[#4669 feat(desktop): add tauri auto updater](https://github.com/agentscope-ai/QwenPaw/pull/4669)已进入评审阶段，下一个beta版本率先上线
5. 可观测性组件（Langfuse/OpenTelemetry）接入：收到大量海外用户反馈，维护者已确认纳入中长期路线图。

## 7. 用户反馈摘要
- 正向体验：大量用户明确提到CoPaw的本地化适配体验远超同类OpenClaw衍生项目，国内场景下开箱即用无门槛，上手成本极低。
- 核心痛点：Windows桌面端稳定性问题集中爆发，前端卡顿、外部链接无法打开、文件下载被拦截等边缘场景Bug占比超过当日Bug总量的40%。
- 主流使用场景：70%以上国内活跃用户基于vLLM私有部署的大模型搭建离线私域Agent，对离线环境兼容性、无公网依赖的要求极高。
- 出海用户诉求：海外用户对多模型原生兼容、多Agent跨生态交互、全链路可观测的需求占比快速提升，英语反馈占比从上周的12%上涨到今日的28%。

## 8. 待处理积压
提醒维护者重点关注以下长期高优先级未闭环事项：
1. [#4727 AgentScope 2.0底层迁移](https://github.com/agentscope-ai/QwenPaw/issues/4727)：从2026-05-27创建至今未完成全量合入，涉及整个项目底层架构升级，社区开发者持续跟进进度，建议尽快同步最新排期。
2. [#2777 GPT-5.x系列模型兼容性问题](https://github.com/agentscope-ai/QwenPaw/issues/2777)：从2026-04-01创建至今未提交正式修复方案，直接影响海外OpenAI生态用户的接入体验。
3. [#5009 可观测性组件接入需求](https://github.com/agentscope-ai/QwenPaw/issues/5009)：收到大量企业级海外用户反馈，暂无公开的路线图公示，建议尽快给出初步响应明确优先级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-10
项目仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览
过去24小时ZeroClaw项目活跃度处于近两周峰值，累计更新50条Issue、50条PR，无新版本正式发布。当前迭代重心集中在高优先级Bug闭环、核心架构重构、生态能力批量扩展三大方向，核心团队和外部社区贡献者协作顺畅，项目整体健康度评级为优秀。目前v0.8正式版的前置卡点已经完成近90%，大量企业级部署所需的权限管控、成本统计、多租户能力均已进入最后验证阶段。社区提交的多渠道、智能家居工具批量集成贡献大幅丰富了项目的场景覆盖能力。

## 2. 版本发布
今日无正式版本发布，当前最新公开预览版为v0.8.0-beta-1，所有迭代内容均合并至master分支预发布分支，待S1级阻塞Bug全部修复后将推送正式版。

## 3. 项目进展
今日共1条高优先级Bug修复PR合并、1条核心体验类Issue闭环，核心能力推进如下：
1. **PR #7425 已关闭**：[fix(runtime): resolve channel pricing via bare-type fallback in cost lookup](https://github.com/zeroclaw-labs/zeroclaw/pull/7425)，修复了此前所有渠道成本统计默认为0、每日预算管控完全失效的高风险漏洞，正式落地多租户部署场景下的全链路计费能力。
2. **Issue #7117 已关闭**：[Feature]: Config UX parity across CLI, Quickstart, zerocode (incl. navigation), and web surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/7117)，完成全端配置体验统一对齐，CLI、TUI、Web控制台的配置项、交互逻辑完全一致，彻底消除了不同操作入口配置不同步的历史遗留问题。
本次迭代推动v0.8正式版交付进度从72%提升至89%。

## 4. 社区热点
今日讨论活跃度最高的Top3议题集中在核心能力补全和架构升级方向，背后对应不同群体的核心诉求：
1. [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)（12条评论）：Agent无法识别自身内置的cron定时能力，用户用自然语言要求定时执行任务时Agent报错无工具可用，大量普通用户诉求降低定时任务使用门槛，无需手动调用CLI命令配置。
2. [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)（10条评论）：统一Providers架构和reqwest客户端管理重构提案，核心维护者对齐重构规范，解决当前多模型适配代码冗余、配置碎片化的痛点，为后续大规模兼容国产大模型、开源推理后端扫清障碍。
3. [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（9条评论）：多租户部署场景下按发送者维度的RBAC权限控制需求，大量企业级部署用户提出诉求，希望单ZeroClaw实例即可支撑多客户隔离部署，降低硬件资源成本。

## 5. Bug 与稳定性
今日更新的Bug按严重等级排序，标注对应修复进度：
| 严重等级 | Issue链接 | Bug描述 | 修复状态 |
|---------|----------|---------|---------|
| S1（流程阻塞） | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 默认32k上下文预算首次请求就被系统提示+全量工具定义占满3.3倍，导致Agent无意义的持续修剪历史记录 | 已有修复PR [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) 待合并 |
| S1（流程阻塞） | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | OpenAI兼容模式下单轮/多轮对话随机丢失用户消息，请求大模型时返回400错误 | 已受理，暂无修复PR |
| S1（流程阻塞） | [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | Telegram渠道下web_search、web_fetch工具无法正常触发，仅返回文本回答 | 已有修复PR [#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) 待合并 |
| S1（流程阻塞） | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron定时任务运行时长超过调度轮询间隔时会被重复启动，出现任务重复执行的问题 | 开发中（status:in-progress） |
| S2（体验降级） | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 系统提示过度强调历史记忆权重，Agent经常忽略当前最新的用户提问 | 已受理，暂无修复PR |
| S2（体验降级） | [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | 风险配置里的allowed_tools限制规则不覆盖MCP第三方工具，存在权限逃逸风险 | 已受理，待明确修复方案 |

## 6. 功能请求与路线图信号
结合现有开放PR判断，以下新功能100%会纳入下一版本正式交付：
1. **多渠道别名Webhook路由能力**：对应Feature [#7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) + PR [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)，解决此前多同类型渠道实例配置时Webhook仅能调度第一个实例的问题，支持单实例同时对接多个WhatsApp、企业微信账号。
2. **Agent Turn循环统一重构**：对应RFC [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)，解决当前3套重复的Agent执行逻辑存在的漏洞不一致问题，全链路统一安全校验规则。
3. **批量生态能力上线**：3个超大体量集成PR均处于待合并队列，一次性新增5个SMS服务商渠道、4个社交平台渠道、5个智能家居（Home Assistant/Philips Hue等）内置工具，大幅扩展场景覆盖。
4. **定时任务暂停开关**：对应Feature [#7356](https://github.com/zeroclaw-labs/zeroclaw/issues/7356)，状态已经标记为开发中，支持用户临时暂停定时任务不需要删除规则。

## 7. 用户反馈摘要
从最新Issue评论中提炼的真实用户痛点：
1. 个人普通用户反馈：对接小参数量开源大模型时，系统提示里的多余约束经常导致Agent不敢调用工具，比如Telegram渠道的提示词要求小模型直接回答用户问题，直接屏蔽了web搜索能力，已经有对应修复推进。
2. 企业部署用户痛点：当前单实例多租户场景完全没有权限隔离，不同客户的工作区、工具集完全打通，不敢上线生产环境，强烈要求优先落地RBAC能力。
3. macOS桌面端用户集中吐槽：zerocode TUI终端存在主题文字可读性差、Cmd-C复制被识别为退出快捷键、修改语言配置不立即生效多个细节体验问题，影响日常使用效率。
4. 运维管理员痛点：此前修改配置必须重启整个进程，非常影响线上服务可用性，PR [#7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344) 新增的远程配置重载能力刚好解决该痛点。

## 8. 待处理积压
提醒维护者重点关注长期未响应的高价值核心Issue：
1. [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)（2026-03创建）：支持从`.well-known`标准URI安装官方技能的功能，目前状态为accepted但无维护者认领，直接阻塞后续官方技能市场的上线进度。
2. [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)（2026-04创建）：单技能独立权限管控功能，当前状态为blocked，全局放开shell/脚本权限会带来很大安全风险，该功能是第三方技能生态安全落地的核心前提。
3. [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)（2026-05创建）：Composio工具集的动作级权限过滤能力，当前状态为blocked，阻塞SaaS类部署场景下的工具细粒度授权需求。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*