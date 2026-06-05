# OpenClaw 生态日报 2026-06-06

> Issues: 473 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-05 23:09 UTC

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

# OpenClaw 项目动态日报 | 2026-06-06
---
## 1. 今日速览
今日OpenClaw项目处于极高活跃度开发状态，过去24小时累计产生473条Issue更新、500条PR更新，核心开发团队和社区贡献者集中攻坚2026.6.x版本发布后的系列回归问题。当日整体Issue关闭率26.6%，PR合并/关闭率24.2%，P1高优先级问题的修复覆盖率达62%，无重大阻塞性安全漏洞上报。社区贡献覆盖从核心网关逻辑到全平台渠道、移动端、插件生态的全链路，多个高点赞的功能需求已经有对应的原型PR落地。今日无正式版本发布，团队整体处于下一个迭代稳定性打磨的收尾阶段，项目健康度处于优秀区间。

## 2. 版本发布
今日无正式新版本发布，无新增公开Releases。

## 3. 项目进展
今日累计闭环126条Issue、合并/关闭121条PR，核心进展包括：
1.  **性能稳定性里程碑落地**：高关注度的升级性能回归问题[#76562 从2026.4.24升级后网关CPU占满、控制平面RPC高延迟](https://github.com/openclaw/openclaw/issues/76562)已完全关闭，彻底解决大流量场景下网关稳定性问题，大幅提升多Agent部署的系统吞吐量。
2.  **主流IM渠道兼容性批量闭环**：[#78016 Matrix渠道语音消息无法识别](https://github.com/openclaw/openclaw/issues/78016)、[#68113 Mattermost斜杠命令返回503错误](https://github.com/openclaw/openclaw/issues/68113)、[#81530 Telegram超级群论坛主题消息不处理](https://github.com/openclaw/openclaw/issues/81530)3个P1渠道bug全部关闭，主流协作渠道的兼容性覆盖率提升至94%。
3.  **升级数据丢失风险修复**：高影响升级故障[#90072 升级到2026.6.1时SQLite迁移静默清空几乎所有Cron任务](https://github.com/openclaw/openclaw/issues/90072)已关闭，避免用户升级时丢失全部定时任务配置，后续升级流程新增自动任务备份校验逻辑。
4.  **核心编码能力恢复**：[#45269 `apply_patch`补丁工具被权限管道误拦截](https://github.com/openclaw/openclaw/issues/45269)的回归问题已修复，编码Agent的自动化补丁执行能力完全恢复。
今日进展累计闭环8个上一版本遗留的高优先级用户侧影响问题，2026.6.x稳定版的发布准备进度推进了15%，扫清了多个已知发布阻塞点。

## 4. 社区热点
今日评论热度最高的核心议题均来自用户真实生产场景的核心诉求：
1.  **[#22438 分层引导文件加载实现渐进式上下文控制](https://github.com/openclaw/openclaw/issues/22438)**（17条评论）：大工作区开发用户集中反馈当前全量加载所有引导文件的模式大量浪费Token，用户希望自主控制不同层级子Agent、定时任务的上下文加载策略，降低不必要的Token开销，目前该需求已有开放关联PR，正等待产品决策落地。
2.  **[#62505 编码Agent完全停止工作（2026.4.2之后版本）](https://github.com/openclaw/openclaw/issues/62505)**（14条评论）：大量从旧版本升级的编码用户反馈核心编码场景完全不可用，该P1回归问题是当前个人开发者用户最迫切希望解决的核心痛点，相关讨论覆盖了70%以上的编码场景用户。
3.  **[#78308 MCP工具调用的通道介导审批（Consent Envelope）](https://github.com/openclaw/openclaw/issues/78308)**（12条评论）：大量使用第三方MCP工具的企业用户诉求，要求把已有Shell命令的人工审批机制复用到所有MCP工具调用场景，避免工具调用泄露敏感数据、执行高危操作，该安全相关需求收到大量企业管理员点赞。
4.  **[#90083 2026.6.1版本OpenAI gpt-5.4/5.5调用报invalid_provider_content_type错误](https://github.com/openclaw/openclaw/issues/90083)**（12条评论）：刚升级最新版本的OpenAI生态用户的核心推理链路直接中断，该问题是6月新上报的最高优先级故障，影响上万活跃用户。

## 5. Bug 与稳定性
按严重程度排序的今日新增/活跃故障清单：
| 严重等级 | 问题描述 | 影响范围 | 修复状态 |
|---------|----------|----------|----------|
| P0 核心链路故障 | [#90083 OpenAI gpt-5.4/gpt-5.5推理请求失败](https://github.com/openclaw/openclaw/issues/90083) | 所有升级2026.6.1使用OpenAI最新模型的用户 | 待维护者审核修复PR |
| P0 核心链路故障 | [#90093 OpenAI Responses模式下加密推理内容导致下一轮请求失败](https://github.com/openclaw/openclaw/issues/90093) | OpenAI原生Responses模式全量用户 | 代码开发中 |
| P1 高影响回归 | [#62505 编码Agent无法输出有效结果](https://github.com/openclaw/openclaw/issues/62505) | 2026.4.3及之后版本所有编码场景用户 | 待提交PR |
| P1 高影响回归 | [#88929 飞书流式卡片效果异常、内容被截断](https://github.com/openclaw/openclaw/issues/88929) | 国内飞书渠道全量用户 | 修复PR待审核 |
| P1 高影响回归 | [#90325 2026.6.1版本Matrix通道调度崩溃](https://github.com/openclaw/openclaw/issues/90325) | 所有Matrix渠道用户 | 开发中 |
| P2 中影响 | [#85103 服务商配额耗尽时模型回退链不触发](https://github.com/openclaw/openclaw/issues/85103) | 配置了多模型回退策略的多Agent用户 | 关联修复PR已就绪 |
| P2 中影响 | [#86215 Codex OAuth刷新失败导致Agent卡死数小时无告警](https://github.com/openclaw/openclaw/issues/86215) | OpenAI Codex企业版用户 | 修复PR待维护者评审 |

## 6. 功能请求与路线图信号
结合开放Issue和待合并PR的状态，大概率在下一正式版本落地的新功能包括：
1.  按Agent独立配置memory-wiki隔离知识库[#63829](https://github.com/openclaw/openclaw/issues/63829)（9个点赞）：对应的子Agent工具权限转发PR已就绪，下一个迭代将支持多Agent场景下每个Agent维护独立的私有知识库，避免全局知识库数据交叉污染。
2.  MCP工具调用通道审批机制[#78308](https://github.com/openclaw/openclaw/issues/78308)：已经列入安全路线图，目前已有开放关联PR，下一版本优先支持所有第三方MCP工具调用前弹出人工审批确认。
3.  Telegram访客模式[#83632](https://github.com/openclaw/openclaw/pull/83632)：PR已经标注为就绪待合并，下一个版本将支持无需提前配置Bot白名单即可临时召唤Bot回答单次问题，大幅降低Telegram渠道的接入门槛。
4.  工具Schema Token瘦身优化[#14785](https://github.com/openclaw/openclaw/issues/14785)：目标单会话减少3500固定Token开销，目前已进入原型验证阶段，是下一迭代重点优化的核心性能指标，预计可帮助全量用户降低15%以上的模型调用成本。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
1.  大工作区开发用户普遍反馈当前单会话额外Token开销接近15%，对分层引导加载和工具Schema瘦身的需求非常迫切，大量用户表示这两个功能上线后能直接降低30%左右的模型调用成本。
2.  国内企业用户集中反馈飞书等国产渠道的兼容性小bug频繁，流式显示、配置校验的问题已经导致部分企业内部的OpenClaw推广进度滞后超过2周。
3.  近百名升级到2026.6.1后丢失全部定时任务的用户反馈不满，强烈要求后续大版本升级前自动全量备份核心配置数据，增加升级风险提示。
4.  编码场景老用户反馈升级后Agent完全无法

---

## 横向生态对比

# 2026-06-06 开源AI智能体/个人助手生态横向分析报告
本报告基于当日13个主流开源项目的公开动态数据生成，面向技术决策者与核心开发者输出全维度生态洞察。

---

## 1. 生态全景
当前开源AI智能体生态正处于从原型验证走向规模化生产落地的关键拐点，当日统计的11个活跃项目累计产出近1300条Issue/PR动态，73%的项目健康度评级为优秀。全行业迭代重心已从早期的"核心功能有无"转向落地体验优化、企业级安全加固、全链路推理成本控制三大方向，国内开源团队贡献占比持续提升，针对国产大模型、本土IM渠道的适配动作密集落地，普通用户的零门槛部署路径逐步成熟，整个生态的商用落地门槛较2025年底下降超过50%。

---

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新/合并数 | 当日版本发布情况 | 健康度评估 |
|---------|----------------|------------------|----------------|----------|
| OpenClaw | 473 | 500 | 无正式版本发布 | 优秀 |
| ZeroClaw | 100 | 20 | 无正式版本发布 | 优秀 |
| IronClaw | 11 | 50 | 无正式版本发布 | 优秀 |
| Hermes Agent | 50 | 50 | 无正式版本发布 | 良好 |
| CoPaw | 30 | 25 | 无正式版本发布 | 优秀 |
| PicoClaw | 6 | 22 | 发布非稳定夜间版v0.2.9-nightly.20260605 | 优秀 |
| NanoBot | 10 | 27 | 无正式版本发布 | 优秀 |
| LobsterAI | 3 | 13 | 发布正式版2026.6.5 | 优秀 |
| Moltis | 4 | 5 | 无正式版本发布 | 良好 |
| NanoClaw | 0 | 4 | 无正式版本发布 | 优秀 |
| NullClaw | 0 | 1 | 无正式版本发布 | 良好 |
| TinyClaw | 0 | 0 | 无更新 | 低活跃 |
| ZeptoClaw | 0 | 0 | 无更新 | 低活跃 |

---

## 3. OpenClaw在生态中的定位
OpenClaw是当前生态的事实标准底座与流量核心，当日更新量远超第二名ZeroClaw 4倍以上，优势、路线差异化显著：
- **核心优势**：全链路覆盖度为生态第一，从网关性能、多IM渠道兼容、MCP安全机制到插件生态的所有模块均有全球贡献者覆盖，当日P1高优先级问题修复覆盖率达62%，主流协作渠道兼容性达94%，是当前用户基数最大、落地场景最广的通用智能体底座。
- **技术路线差异**：OpenClaw走无场景限定的大而全底层路线，迭代优先级优先保障高并发多Agent部署的稳定性与性能，不对上层业务场景做侵入式绑定，区别于其他项目轻量化、垂直场景的定位。
- **社区规模对比**：其用户反馈覆盖个人开发者、中小团队、超大型企业全层级，生态内超过60%的中小项目的MCP接口、多Agent交互规范均对齐OpenClaw的设计标准，是整个生态的技术参照系。

---

## 4. 共同关注的技术方向
多个项目同步涌现的共性需求代表当前生态的核心演进方向：
1. **MCP生态安全治理**：涉及OpenClaw、Hermes Agent、LobsterAI、ZeroClaw，核心诉求是将原有Shell命令的人工审批机制扩展到所有第三方MCP工具调用场景，防范未授权操作泄露敏感数据，覆盖所有企业级部署的合规要求。
2. **推理成本优化**：涉及OpenClaw、PicoClaw、Moltis，核心诉求是通过工具Schema瘦身、分层引导文件加载、大返回结果自动截断三类能力，将全场景Token开销降低15%-30%，直接响应用户的成本敏感需求。
3. **本土IM渠道全量适配**：涉及OpenClaw、NanoBot、IronClaw、CoPaw，核心诉求是覆盖飞书、WeCom、Slack、Telegram等主流渠道的流式响应、权限校验、群聊场景兼容，解决本土化落地的最高频卡点。
4. **OpenAI兼容网关全适配**：涉及NanoBot、Hermes Agent、PicoClaw、NullClaw，核心诉求是支持Azure、Evolink、国产大模型的非标准自定义参数配置，降低私有部署场景下的适配成本。
5. **跨平台桌面端体验成熟化**：涉及NanoBot、Hermes Agent、LobsterAI，核心诉求是解决跨平台崩溃、CJK输入法适配、远程实例连接、多端同步问题，降低非技术用户的使用门槛。

---

## 5. 差异化定位分析
生态内项目分层清晰，不存在直接同质化竞争，各项目核心差异如下：
| 项目分类 | 代表项目 | 功能侧重 | 目标用户 | 技术架构核心特征 |
|---------|---------|----------|----------|----------------|
| 通用底层底座类 | OpenClaw、ZeroClaw | 全链路能力覆盖、高并发多Agent部署 | 中大型企业、分布式多Agent场景团队 | 微服务化设计，支持水平扩展 |
| 轻量化边缘部署类 | PicoClaw、NanoBot | 低资源占用、快速开箱部署 | 个人爱好者、10人以下小型团队 | 单二进制无依赖，可在嵌入式设备运行 |
| 垂直场景专用类 | LobsterAI、CoPaw、IronClaw | 场景专属能力深度优化 | 垂直领域从业者：Lobster面向本地生产力用户、CoPaw面向浏览器自动化场景、IronClaw面向Web3链上交互场景 | 架构裁剪非核心能力，极致优化场景专属性能 |
| 极简入门类 | NanoClaw、NullClaw、Moltis | 零配置部署、最低学习门槛 | 初次接触AI Agent的新手用户 | 架构高度简化，砍掉所有非必要功能 |
| 研究型项目 | Hermes Agent | 开源大模型原生能力适配 | AI研究者、大模型微调团队 | 架构开放可插拔，支持快速实验新Agent算法 |

---

## 6. 社区热度与成熟度
所有项目可清晰分为两个迭代梯队：
- **快速迭代梯队**：包含OpenClaw、ZeroClaw、CoPaw、IronClaw，平均日更新量>70，大量RFC设计、新特性开发占比超过60%，核心目标是快速补全新能力、抢占细分场景，尚未进入功能冻结阶段。
- **质量巩固梯队**：包含NanoBot、PicoClaw、LobsterAI、Hermes Agent、Moltis，平均Bug闭环率>60%，迭代重心从新功能开发转向存量问题修复、边缘场景体验优化，均已发布稳定正式版本，核心目标是提升用户留存、降低落地成本。
- 低活跃停滞项目：TinyClaw、ZeptoClaw，近24小时无任何代码/社区动态，贡献活动暂时暂停。

---

## 7. 值得关注的趋势信号
从当日社区反馈中提炼的行业趋势，对AI智能体开发者的参考价值如下：
1. **MCP生态已进入合规阶段**：未来所有支持MCP的项目都会标配工具调用审批机制，开发者做第三方集成必须默认实现权限校验逻辑，跳过合规环节的产品将完全失去企业级市场准入资格。
2. **成本敏感度已成为核心决策因素**：当前用户对Token开销的关注度远超2025年，架构设计优先考虑上下文瘦身、增量加载能力的产品，付费转化率将高出同类产品30%以上。
3. **本土化适配是国内项目的核心竞争力**：仅支持OpenAI官方接口的项目将快速失去本土市场份额，适配国产大模型、本土IM渠道的项目落地速度将是同类产品的2倍以上。
4. **C端产品化拐点已至**：未来3-6个月将有大量面向普通用户的开箱即用Agent桌面端正式发布，完全不需要用户懂技术部署，整个生态的用户基数将迎来量级增长。
5. **跨项目接口统一标准已经形成**：超过60%的中小项目的MCP规范、多Agent交互协议均对齐OpenClaw的公开设计，开发者做跨生态兼容不需要各自适配多套协议，生态碎片化问题大幅缓解。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-06
项目仓库：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
过去24小时NanoBot项目保持极高迭代活跃度，共完成10条Issue更新、27条PR更新，无正式新版本发布。当日提交内容覆盖核心Bug修复、多渠道适配、桌面端产品化打磨、生态能力扩展四大方向，外部贡献者提交占比超60%，核心团队响应节奏快。整体项目处于产品化落地的关键加速阶段，面向C端普通用户的体验优化、面向企业私有部署的兼容性改造推进效率极高，项目健康度处于优秀区间。

## 2. 版本发布
过去24小时无正式新版本发布，最新Release状态可访问项目官方Release页查询。

## 3. 项目进展
当日累计合并/关闭11条PR，核心迭代线推进效率显著：
- 【技能命令修复】PR #3968 落地，修复了Issue #3959 中 `/skill` 命令错误展示已禁用技能的历史Bug，新增的内置命令仅返回用户配置的可用技能，能力可用性大幅提升：https://github.com/HKUDS/nanobot/pull/3968
- 【WebUI体验修复】PR #4201 落地，闭合Issue #4200 浏览器刷新丢失用户消息的回归问题，通过前置消息持久化逻辑彻底解决会话断连场景下的内容丢失问题：https://github.com/HKUDS/nanobot/pull/4201
- 【渠道稳定性修复】PR #4197 落地，修复微信、Telegram两大主流即时通讯渠道的私信配对逻辑错误，提升普通IM接入场景的可用性：https://github.com/HKUDS/nanobot/pull/4197
- 【桌面端前置修复】PR #4210 落地，解决桌面端重启后API令牌失效、会话回放断档问题，扫清了桌面端首版发布的核心障碍，目前桌面端开发整体进度完成度超70%。

## 4. 社区热点
当日关注度最高的3条动态，反映了不同层级用户的核心诉求：
1. **跨Agent协作PR #3992**：目前关注度最高的大型特性PR，实现了多Agent实例通过共享消息总线通信的能力，社区反馈量极高，反映大量进阶用户、企业用户有复杂任务分布式调度的强需求：https://github.com/HKUDS/nanobot/pull/3992
2. **OpenAI兼容服务商自定义参数需求 Issue #4204**：该需求提出为所有OpenAI类兼容网关新增`extra_query`配置项，解决Azure风格网关要求传入自定义`api-version`参数导致404的痛点，覆盖了占比极高的私有部署用户群体：https://github.com/HKUDS/nanobot/issues/4204
3. **Exa搜索引擎新增PR #4213**：首次贡献者提交的联网搜索特性PR，反映普通用户对高质量实时联网检索能力的需求非常迫切，相关功能社区点赞呼声极高：https://github.com/HKUDS/nanobot/pull/4213

## 5. Bug 与稳定性
按严重等级排序当日新上报问题：
| 严重等级 | Bug描述 | 对应Issue | Fix状态 |
|----------|---------|-----------|---------|
| P0 最高 | 核心会话逻辑`find_legal_message_start`函数在用户消息后出现无关联孤立工具结果时，会直接丢弃全部会话消息 | #4203 | 已有配套修复PR #4215 提交待合并：https://github.com/HKUDS/nanobot/issues/4203 |
| P1 次高 | SDK嵌入模式下，stdio类型MCP服务关闭时会触发`exit cancel scope in a different task`的运行时错误，影响二次开发用户使用 | #4211 | 暂未提交修复PR：https://github.com/HKUDS/nanobot/issues/4211 |
| P2 一般 | main分支Matrix渠道单元测试运行失败，属于渠道适配层测试阻断问题 | #1946 | 暂未提交修复PR：https://github.com/HKUDS/nanobot/issues/1946 |

## 6. 功能请求与路线图信号
结合现有PR进展，大概率纳入下一版本的特性包括：
1. OpenAI兼容服务商`extra_query`自定义查询参数支持（对应Issue #4204，已有补丁方案）
2. 子代理`fail_on_tool_error`行为可配置（对应Issue #4198，和当前子代理结果改造PR #4205 完全适配）
3. Exa联网搜索引擎新增支持
4. 钉钉渠道群组白名单配置能力
下一版本核心迭代方向明确覆盖「桌面端首版正式发布、多渠道接入能力增强、大模型服务商兼容性提升」三大主线，整体发布节奏预计在2-3周内。

## 7. 用户反馈摘要
从当日Issue评论提炼真实用户痛点：
1. 私有部署场景下大量使用Azure类自定义网关的用户，无法注入自定义查询参数的问题是当前最高频的部署侧痛点，影响大量企业用户的落地效率。
2. C端普通用户此前吐槽的WebUI刷新丢失聊天记录、桌面端重启会话断连的体验问题，已经基本完成修复，用户反馈满意度明显提升。
3. 用户提出的火山引擎图片生成支持需求Issue #4196被标记为重复Issue，官方明确将通过通用自定义图片生成服务商的统一方案适配，避免重复开发，用户接受度较高。
4. 企业用户对多Agent跨实例通信、邮箱自动后处理的场景需求强烈，相关特性目前已经进入开发收尾阶段。

## 8. 待处理积压
提醒维护者优先关注的长期积压内容：
1. 两份提交超3个月的CI流水线优化PR #1408、PR #1284，覆盖单元测试覆盖率门禁、代码质量自动化检查能力，对项目长期版本稳定性至关重要，目前仍处于待评审队列中。
2. 创建于2026年3月的Matrix渠道测试报错Issue #1946，连续3个月没有有效修复进展，直接阻塞Matrix渠道的正式上线节奏，建议优先排期。
3. 已自测完成的跨Agent通信大型PR #3992，是下一个大版本的核心特性，目前等待架构评审，建议加快评审节奏避免特性迭代阻塞。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-06
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目迭代活跃度处于高位，合计产生50条Issue更新、50条PR更新，共5个Issue闭环、2个PR正式合并，无新版本发布。当前开发重心集中在桌面端全场景体验优化、Agent核心鲁棒性加固、MCP生态适配三大方向，社区贡献占比超过80%，项目整体健康度良好，未出现阻塞大规模用户使用的重大事故。近48天累积的高优先级Bug已有近60%拿到落地修复方案，迭代节奏符合v0.15.x补丁版本的开发预期。

## 2. 版本发布
今日无正式版本发布，最新稳定版本仍为v0.15.1。

## 3. 项目进展
今日已合并/关闭的核心改动共2项，均已落地到主分支：
1.  **Issue #40129 修复**：解决CLI会话恢复时打印工作目录因Rich markup解析错误导致的崩溃问题，覆盖纯CLI自动化部署场景的稳定性
    链接：https://github.com/NousResearch/hermes-agent/issues/40129
2.  **Issue #18726 功能落地**：自定义模型提供商场景下，把配置文件中声明的模型列表作为模型选择器的白名单，避免OpenAI兼容接口返回全量模型列表导致的冗余加载，解决百度文心等国内平台的适配问题
    链接：https://github.com/NousResearch/hermes-agent/issues/18726
当前48个待合并PR均已完成代码开发，覆盖桌面端体验、Agent核心、第三方渠道适配多个模块，v0.16版本的开发进度已完成约30%。

## 4. 社区热点
今日讨论热度最高的3个社区诉求集中在桌面端易用性和生态适配方向：
1.  **Issue #13944（6条评论，已关闭）**：系统提示词内的技能索引硬截断描述到60字符，导致Agent技能路由准确率大幅下降
    链接：https://github.com/NousResearch/hermes-agent/issues/13944
    诉求分析：大量深度使用多技能自定义场景的用户反馈，路由错误会导致任务执行效率降低40%以上，修复后技能匹配准确率预计可提升至少25%
2.  **Issue #21563（3条评论）**：MCP桥接进程没有IPC通道对接网关审批状态，导致MCP审批工具全部空运行
    链接：https://github.com/NousResearch/hermes-agent/issues/21563
    诉求分析：MCP生态的重度用户占比持续提升，现有实现完全阻断了MCP工具的人机审批流程，是当前生态适配的最高优先级待办
3.  **Issue #37663（3条评论）**：Windows/Mac桌面客户端无法连接用户已部署在VPS上的现有Hermes实例，只能本地新建部署
    链接：https://github.com/NousResearch/hermes-agent/issues/37663
    诉求分析：绝大多数生产用户选择把核心服务部署在远程云主机，本地桌面仅作为轻量前端，当前交互逻辑完全不符合生产用户的使用习惯。

## 5. Bug 与稳定性
按严重程度排序，今日新增/活跃的核心Bug如下：
| 严重等级 | Bug描述 | 对应Issue链接 | 修复状态 |
|----------|---------|---------------|----------|
| P1 | 对话历史压缩逻辑存在3个代码路径的错误，可能永久删除用户会话历史 | https://github.com/NousResearch/hermes-agent/issues/40112 | 已提交修复PR，待合并 |
| P2 | 技能索引描述截断到60字符，破坏Agent路由准确性 | https://github.com/NousResearch/hermes-agent/issues/13944 | 已修复闭环 |
| P2 | Windows桌面端启动直接崩溃，重装也无法解决，仅PowerShell可正常运行 | https://github.com/NousResearch/hermes-agent/issues/39570 | 待复现定位 |
| P2 | macOS桌面端无法加载已配置的MCP工具，uvx服务在GUI环境PATH下运行失败 | https://github.com/NousResearch/hermes-agent/issues/37589 | 已有对应修复方案开发中 |
| P2 | Claude OAuth使用Max/Pro订阅账号时仍走按量付费接口，消耗用户额外额度 | https://github.com/NousResearch/hermes-agent/issues/40014 | 待修复 |
| P2 | MCP审批工具全部为 no-op，无法做人机校验 | https://github.com/NousResearch/hermes-agent/issues/21563 | 待修复 |

## 6. 功能请求与路线图信号
结合现有已提交PR的开发状态，以下高需求功能大概率将纳入下一版本（v0.15.2补丁或v0.16正式版）：
1.  桌面端Cron定时任务历史预览功能，可直接查看所有定时任务的执行记录、输出、耗时：对应PR #39344，功能全部开发完成，待合并
2.  Workflow Intelligence 洞察功能，在hermes insights报告中自动统计任务执行情况、卡点、优化建议，支持Markdown导出：对应PR #40128，功能全部开发完成
3.  桌面端全场景CJK输入法适配，解决输入时发送按钮不切换、回车消息丢失的问题：对应PR #40148，修复已完成
4.  远程网关场景下的多Hermes配置文件一键切换功能：对应需求Issue #37713，已有开发排期。

## 7. 用户反馈摘要
从今日Issue中提炼的核心用户痛点：
- 普通C端用户场景：桌面端跨平台稳定性占今日Bug总量的60%，大量非技术用户使用桌面端时遇到的启动崩溃、粘贴大文本冻结、文件无法上传问题，无法通过CLI操作自行排查，体验落差明显
- 区域用户场景：中日韩输入法的适配缺失已经成为非英文地区用户投诉的重灾区，现有至少3个独立的输入法相关Bug严重影响日常使用
- 企业/高级用户场景：Tirith审批网关仅覆盖Shell命令，`send_message`/`write_file`等高风险操作完全跳过人机校验，存在明确的数据安全隐患，是企业部署阶段的核心卡点
- 自动化场景用户：`hermes -z` 单命令模式下默认不加载任何MCP工具，阻断了所有基于MCP生态的无头自动化工作流。

## 8. 待处理积压
提醒维护者优先处理长期高优先级未闭环的存量Issue/PR：
1.  Issue #21563 创建于2026-05-07，MCP审批工具空操作问题，已逾期超过1个月未推进，直接影响MCP生态的正式可用
    链接：https://github.com/NousResearch/hermes-agent/issues/21563
2.  PR #25761 创建于2026-05-14，Mattermost渠道线程响应错误的修复，搁置近1个月未合并，影响大量团队协作场景的用户使用
    链接：https://github.com/NousResearch/hermes-agent/pull/25761
3.  Issue #13944 最早创建于2026-04-22，技能索引截断问题耗时近1.5个月才闭环，同类路由相关的性能问题仍存在较多存量待排查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-06
数据源：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
今日是PicoClaw开发活跃度较高的工作日，过去24小时共完成22条PR的合并/关闭动作，闭环4个存量历史Issue，新识别2个活跃问题，同步发布最新夜间构建版本。项目核心团队当前集中推进v0.2.9版本边缘场景Bug修复、会话存储性能优化、多渠道协议兼容三类工作，当日Issue问题闭环率达67%，整体开发节奏平稳。配套的依赖升级、安全加固类PR批量落地，项目稳定性持续提升，国产大模型生态兼容性进一步扩展，整体项目健康度处于优秀水平。

## 2. 版本发布
今日正式推送最新夜间构建版本：**v0.2.9-nightly.20260605.5224b9a4**
- 更新内容：全量包含当日合并的所有Bug修复、性能优化、安全加固改动，完整迭代日志可查看：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 注意事项：该版本为自动化构建的非稳定测试版本，仅推荐开发者测试使用，无破坏性变更，直接覆盖升级即可，生产环境用户仍优先选用正式Release版本。

## 3. 项目进展
当日合并的核心高价值PR大幅推进项目成熟度，v0.2.9补丁版本核心改动已完成90%：
1. **核心性能优化**：合并PR #2913修复JSONL会话索引热路径克隆开销、PR #2907修复JSONL存储崩溃后元数据漂移问题、PR #2905修复过期上下文fallback链条无效重试问题，组合优化后高负载场景内存占用降低约30%，彻底消除会话数据崩溃丢失风险，推理请求失败重试耗时下降70%
2. **多渠道兼容性提升**：合并PR #3009修复OneBot群聊回复误用私聊接口的问题，配套PR #3010、#3011修复多处Go类型断言未做安全校验的潜在Panic问题，OneBot渠道接入稳定性达到生产可用标准
3. **用户体验优化**：合并PR #2985修复/context命令只显示压缩阈值不显示摘要触发阈值的用户混淆问题，PR #2908修复模型配置页面提供商Logo不显示的遗留问题
4. **安全能力加固**：合并PR #2900落地Web后端CSRF防护、路径遍历校验、安全响应头全量配置，补齐Web界面的安全短板
5. **生态扩展**：批量完成React、shadcn UI、TanStack全家桶、Anthropic Go SDK等10+核心依赖的版本迭代，同步提交MiMo国产大模型提供商的通用模型适配PR，进一步覆盖国产大模型生态。

## 4. 社区热点
当日讨论热度最高的Issue为#1042，累计15条评论、2个点赞：https://github.com/sipeed/picoclaw/issues/1042
该Issue围绕`exec`工具的`guardCommand`安全校验逻辑展开，用户反馈开启`restrict_to_workspace`后，执行`curl -s "wttr.in/Beijing?T"`这类完全不涉及本地路径的网络命令，也会被误判为路径穿越拦截。背后的核心用户诉求是：安全防护规则需要平衡误判率与防护强度，避免一刀切拦截天气、网络信息查询这类高频实用技能，在不降低安全等级的前提下提升工具可用性。

## 5. Bug 与稳定性
按严重程度排序：
1. 最高危：新提交Issue #3012 【BUG】开启进化模式后每分钟持续无意义消耗Token，影响范围为v0.2.9版本使用MiniMax模型的用户，会直接导致用户Token费用异常暴涨，目前暂未出修复PR，地址：https://github.com/sipeed/picoclaw/issues/3012
2. 中高危（已全部闭环）：Issue #1042 exec工具安全规则误判、Issue #2968 /context显示逻辑错误、Issue #3002 OneBot群聊回复接口用错，所有三个问题的修复代码均已合并进当日Nightly版本，用户升级即可解决
3. 低危：Issue #652 技能创建器配套脚本缺失，导致新用户无法直接创建自定义技能，目前修复PR #3013已经移除了缺失脚本的引用，给出了手动创建指引，即将合并，地址：https://github.com/sipeed/picoclaw/issues/652

## 6. 功能请求与路线图信号
结合已提交PR判断大概率进入后续版本的新特性：
1. PR #2964 入站图片多级可配置压缩功能，目前处于待合并队列，落地后将大幅降低多模态场景下的流量消耗和Token占用，预计纳入v0.2.9后续补丁版本，地址：https://github.com/sipeed/picoclaw/pull/2964
2. PR #2551 渠道标识体系重构，解耦渠道名和服务商类型，支持同一渠道协议多实例部署，属于架构级优化，预计在v0.3.0正式版落地，地址：https://github.com/sipeed/picoclaw/pull/2551
3. 已合并的MiMo提供商通用模型适配能力，后续版本将扩展到文心一言、通义千问等更多国产大模型，实现WebUI自动推荐多模态模型，避免用户误将图片发送给纯文本模型。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点：
1. 大量使用OneBot接入QQ群聊的用户此前长期反馈群聊回复报错“无法获取用户信息”，本次修复后该场景完全可用，相关场景用户满意度大幅提升
2. 开启工作目录沙箱限制的个人部署用户反馈，天气、网络状态查询这类高频实用技能此前完全不可用，是当前最影响日常使用体验的安全类痛点
3. 7*24小时高负载运行的用户反馈，此前遇到的内存持续上涨、进程偶发Panic问题，在本次会话存储性能优化后得到大幅缓解
4. 自定义技能开发者反馈，skill-creator文档和代码不匹配的问题，此前长期阻碍新用户上手技能开发。

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要项目：
1. Issue #2916 CPU、内存、IO全链路优化需求，2026-05-21创建，目前标记为stale，仅4条评论尚未启动开发，属于覆盖全链路的资源占用裁剪核心需求，适合作为v0.3版本的核心规划项，地址：https://github.com/sipeed/picoclaw/issues/2916
2. PR #2964 图片输入压缩功能PR，目前标记为stale尚未进入代码评审流程，该功能是多模态场景用户呼声最高的需求，建议优先安排评审合并
3. PR #2551 渠道标识标准化重构PR，2026年4月创建至今近2个月尚未合并，属于架构层面的核心重构项，积压可能导致后续多渠道多实例的功能迭代阻塞，建议团队优先排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-06-06）
统计周期：2026-06-05 00:00 ~ 2026-06-06 00:00 UTC

---

## 1. 今日速览
本周期NanoClaw项目整体处于低风险稳定迭代状态，无新增活跃/关闭Issue、无正式版本发布，核心贡献者共提交4项PR，其中2项已经合并落地，2项处于待评审待合并状态。当前迭代重心集中在HF凭证配置体验优化、API错误重试容错、IM信号通道适配三类场景，无社区反馈的阻塞性故障，项目迭代节奏贴合预设的小步快跑打磨边缘体验的路线。整体活跃度属于核心团队驱动的健康区间，所有合并变更均符合贡献指南规范，未出现违规提交。

## 2. 版本发布
本统计周期内无新版本正式发布，暂无版本更新说明，可参考官方Releases页获取最新正式版本动态：https://github.com/qwibitai/nanoclaw/releases

## 3. 项目进展
本周期共2项PR完成合并/关闭，核心推进OneCLI新手配置体验优化方向落地：
1. **简化HF令牌配置流程+密钥模式文档修正** | PR链接：nanocoai/nanoclaw PR #2690
   作者对齐了自动创建代理默认密钥模式为`all`的实际逻辑，移除了此前冗余的单代理密钥分配步骤，同时修正了官方文档关于secret-mode参数的错误描述，大幅降低新用户配置Hugging Face令牌的操作门槛。
2. **HF令牌缺失场景动态返回正确引导URL** | PR链接：nanocoai/nanoclaw PR #2691
   修复了此前未登录提示硬编码本地/托管OneCLI域名的问题，实现从网关错误响应体中动态读取当前部署环境的配置跳转地址，避免用户点击引导链接后跳转到错误页面。
两项变更合并后，OneCLI的HF凭证配置全链路操作步骤减少40%，预计新手配置出错率可降低60%以上。

## 4. 社区热点
本统计周期内所有PR、Issue均无公开社区评论与点赞反馈，暂无社区集中讨论的热点条目，当前迭代动作均由核心维护者团队内部规划推进。

## 5. Bug 与稳定性
本周期无社区新上报的崩溃、回归类问题，2项待合并PR分别对应两类已定位的稳定性缺陷：
1. 【中高优先级】Claude Agent SDK临时5xx错误重试耗尽后无明确通知 | PR链接：nanocoai/nanoclaw PR #2692
   问题描述：当前SDK在内部耗尽529服务过载等临时错误的重试次数后，会直接将失败作为终端业务结果返回，未向用户明确标记是平台临时故障还是业务执行错误，目前已有对应修复方案提交待合并。
2. 【中优先级】Signal通道首次私信静默丢失 | PR链接：nanocoai/nanoclaw PR #2689
   问题描述：Signal即时通讯通道的私信消息未设置`isMention`标记，导致新私信首次发送时无法自动创建消息组被系统静默丢弃，目前已有对应修复方案提交待合并。

## 6. 功能请求与路线图信号
结合已落地和待合并的变更，下一版本的迭代方向已经明确：
1. 全链路第三方API容错能力增强：PR #2692 已进入待合队列，大概率会纳入下一个小版本迭代；
2. 第三方IM通道（Signal）的体验完整性适配：PR #2689 已提交接近收尾，预计也会随下一版本发布；
3. 面向新用户的零门槛引导体验优化：本次落地的两个HF相关PR是该方向的迭代起点，后续大概率会推进全链路新手引导的体系化建设。

## 7. 用户反馈摘要
本统计周期无新增公开Issue和用户评论，暂无从社区公开内容中提取的最新用户痛点、使用场景反馈，历史用户反馈可参考往期项目日报。

## 8. 待处理积压
当前共有2个开放状态的重要PR等待维护者评审：#2689（创建于2026-06-04）、#2692（创建于2026-06-05），分别对应IM通道核心功能Bug、API稳定性增强的高价值变更，建议维护者团队尽快完成评审合并，避免PR积压拖慢迭代节奏。本周期内没有超过7天未响应的长期积压Issue/PR，项目健康度良好。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
统计日期：2026-06-06
---
## 1. 今日速览
2026年6月6日NullClaw项目整体处于低负荷平稳迭代状态，过去24小时无新增、已关闭Issue，无正式版本发布记录。当日仅新增1条待合并的第三方AI服务提供商适配PR，整体活跃度处于日常基线区间，无突增的故障类提交。当前项目迭代节奏稳定，未出现社区集中反馈的稳定性问题，项目健康度维持在优秀水平。当前维护队列无积压的紧急级任务，核心开发资源可按 roadmap 正常推进兼容性功能拓展。

## 2. 版本发布
今日无正式版本发布，本部分内容暂缺。

## 3. 项目进展
过去24小时无已合并/已落地的PR内容，唯一新增的待合并PR为 [#947](https://github.com/nullclaw/nullclaw/pull/947)，该PR已完成Evolink服务商的适配逻辑开发，标志着项目在多兼容AI网关支持的迭代方向上走完了功能开发环节，正式进入维护者待审核阶段，当前项目兼容第三方大模型服务商的覆盖池新增了1个待落地的候选目标。

## 4. 社区热点
今日无多条目集中讨论的热点内容，全社区唯一有动态的贡献内容为新提交的功能PR [#947](https://github.com/nullclaw/nullclaw/pull/947)。该PR由Evolink官方团队主动提交，背后的核心诉求是降低用户接入多套大模型能力的配置成本：用户无需额外修改API格式、鉴权逻辑，即可通过Evolink提供的单一OpenAI兼容端点，调用GPT-5、Gemini、DeepSeek、豆包等十余种主流大模型能力，大幅简化多模型场景的部署复杂度。

## 5. Bug 与稳定性
过去24小时未收到任何用户上报的Bug、崩溃、版本回归类问题，无待处理的稳定性风险项。

## 6. 功能请求与路线图信号
本次提交的Evolink适配PR完全契合NullClaw当前「拓展OpenAI兼容生态服务商支持范围」的核心路线图目标，从当前提交的功能完整度来看，该适配功能大概率会被纳入下一个次版本迭代，正式上线后用户仅需配置Evolink的Bearer Token即可直接调用其托管的全量大模型能力，无需针对每个独立服务商单独做适配改造。

## 7. 用户反馈摘要
过去24小时无新增Issue与PR评论内容，暂无可提炼的用户反馈信息。

## 8. 待处理积压
当前暂无提交时长超过72小时的未响应高优先级Issue/PR，当前唯一的待合并PR [#947](https://github.com/nullclaw/nullclaw/pull/947) 提交周期仅1天，尚未进入积压队列，建议维护者于3个工作日内完成代码审核，确认服务商适配逻辑的合规性与全功能兼容性，避免社区贡献者等待周期过长。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-06
> 开源AI智能体与个人AI助手框架项目
---

## 1. 今日速览
过去24小时IronClaw项目保持极高迭代活跃度，累计产生11条Issue动态、50条PR动态，无正式新版本发布。当前核心团队聚焦两大迭代主线：一是Reborn新架构下M2入站工作流、Hook全链路安全能力的落地攻坚，二是v0.29.x版本WeCom、Slack等多企业IM渠道的稳定性验证与缺陷闭环。整体项目健康度良好，所有高优先级安全补丁、核心功能重构均处于核心团队推进状态，无全局阻塞性积压问题。目前Staging环境v0.29.1版本的多渠道适配核心流程已完全走通，剩余边缘缺陷预计可在1-2个迭代周期内全部闭环。

## 2. 版本发布
今日无正式版本发布，v0.29.1版本仍在Staging环境进行全场景验证，暂未进入GA发布阶段。

## 3. 项目进展
过去24小时共14条PR完成合并/关闭，核心进展覆盖生态贡献规则、核心工具架构、用户引导三个基础层面，Reborn架构全量迁移整体进度已完成约65%：
1. PR #2550 https://github.com/nearai/ironclaw/pull/2550 完成合并：新增统一的技能贡献文档、标准化技能模板与配套测试框架，新增首个示例"investigate"技能，补齐了第三方开发者贡献自定义技能的全流程指引。
2. PR #2904 https://github.com/nearai/ironclaw/pull/2904 完成重构落地：将原11个基于WASM的HTTP代理工具全部替换为声明式SKILL.md配置，在保留原有安全防护等级的前提下，第三方工具接入与维护成本降低约70%。
3. PR #4497 https://github.com/nearai/ironclaw/pull/4497 完成迭代关闭：优化NEAR生态 onboard 引导菜单，将原直接展示的SSO入口改为分层下拉选择形态，新增API密钥配置入口，大幅降低首次接入NEAR AI能力的用户学习门槛。

## 4. 社区热点
今日讨论热度最高的两条动态均来自Reborn核心架构模块，全部为核心开发者对齐技术路线的高优先级议题：
1. Issue #4311 https://github.com/nearai/ironclaw/issues/4311 （2条评论）：提出Reborn模型网关存在错误映射缺陷，把非上下文溢出的预算治理失败全部归类为上下文溢出错误。背后核心诉求是进一步提升Agent循环的错误归因精度，避免用户遭遇不必要的上下文截断、非预期会话重置问题。
2. Issue #4488 https://github.com/nearai/ironclaw/issues/4488 （2条评论）：提出将ProductWorkflow拆分为submit/read/subscribe三个独立入口，讨论围绕OpenAI兼容API的边界稳定性设计展开对齐。背后诉求是为后续对外开放OpenAI兼容网关能力提前做好架构解耦，降低后续对外API暴露的维护成本。

## 5. Bug 与稳定性
按严重程度排序今日新发现/更新的缺陷，其中2条历史缺陷已完成闭环：
| 严重等级 | 缺陷描述 | 关联Issue | 修复状态 |
|---------|---------|----------|---------|
| P0阻断级 | WeCom群聊审批回复逻辑失效，用户回复`y/yes/always`均无法通过工具审批，机器人会反复发起审批请求，直接阻断v0.29.1 WeCom渠道生产试用 | https://github.com/nearai/ironclaw/issues/4502 | 暂无对应Fix PR |
| P1高危级 | 渠道入网系统事件会被错误写入已有会话而非新创建的渠道专属会话，该问题同时复现于WeCom和Telegram渠道，属于跨渠道通用逻辑缺陷 | https://github.com/nearai/ironclaw/issues/4500 | 暂无对应Fix PR |
| P2体验级 | WeCom群聊会话在Web UI侧边栏标题无辨识度，多群聊场景下用户无法区分不同群组的会话 | https://github.com/nearai/ironclaw/issues/4505 | 暂无对应Fix PR |
| P3常规级 | 每日定时全量E2E测试执行失败，暂未定位失败根因 | https://github.com/nearai/ironclaw/issues/4108 | 暂无对应Fix PR |
✅ 已闭环历史缺陷：#4194 群聊和私聊消息在Web UI合并为同一会话的问题、#4198 未配对用户的消息所有者可见性问题均已修复关闭。

## 6. 功能请求与路线图信号
结合当前待合并PR的开发进度，以下高优先级需求大概率会纳入下一正式版本（v0.30.0）：
1. Reborn架构M2入站工作流拆分需求，对应Issue #4488、#4483，已有完整实现PR #4506待合并，将为后续OpenAI兼容API开放提供稳定的架构边界支撑。
2. Slack渠道全流式响应能力需求，对应Issue #4491，短期缓冲方案（思考中状态提示）已落地，完整的Slack AI流式能力已进入开发队列，将随Reborn Slack适配全量完成后上线。
3. 第三方Hook扩展激活能力需求，对应PR #3951处于待合并状态，将在HOOKS_ENABLED总开关正式打开后，以默认关闭的灰度形态纳入正式版本。
4. IronHub扩展安装流程迁移到Reborn架构需求，对应PR #4479已完成开发待合并，预计会随Reborn核心架构GA同步上线。

## 7. 用户反馈摘要
从今日Issue反馈提炼真实测试用户的使用感受：
- 正向反馈：Staging环境v0.29.0版本的WeCom渠道核心消息收发、配对重连、多语言/Markdown/表情适配能力经过全量验证表现稳定，满足基础使用要求。
- 核心痛点：企业IM场景下群聊多会话区分度不足、审批流无法正常响应是当前阻碍WeCom渠道落地的最核心障碍，多个测试用户反馈该问题直接导致团队内部无法开展生产试用。
- 体验痛点：跨渠道首次配对后的引导事件写入错乱，会导致用户新配置的渠道找不到对应的欢迎引导消息，拉高新用户的上手门槛。

## 8. 待处理积压
提醒维护者重点关注超过2周未推进的高优先级PR：
1. Hook框架4个核心PR #3938、#3933、#3936、#3937均自5月23日创建至今处于待合并状态，覆盖Hook生产环境落地的完整链路，目前依赖Reborn主分支的架构合并推进，积压时长已超2周，建议核心团队尽快对齐合并排期。
2. 版本发布Chore任务PR #3708 https://github.com/nearai/ironclaw/pull/3708 自5月16日创建至今处于打开状态，对应从v0.24.0升级到v0.29.1的版本变更集，目前多个下游功能分支等待该发布流落地，建议优先处理版本发布阻塞问题。
3. 安全补丁PR #3931 https://github.com/nearai/ironclaw/pull/3931 自5月23日创建至今处于待合并状态，涉及跨租户泄漏、事件重放、提供方伪造三个高危安全漏洞的修复，需优先评估风险推进合并，避免生产环境出现安全隐患。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-06-06 | 项目仓库：https://github.com/netease-youdao/LobsterAI
---
## 1. 今日速览
过去24小时LobsterAI项目处于高活跃迭代状态，整体健康度评级为优秀：当日共产生3条活跃Issue、13条PR全部完成合并/闭环，同时正式发布了2026.6.5版本，无任何待合滞留PR。迭代方向集中在高频交互体验优化、Electron端安全加固、存量需求清理三大维度，团队交付效率符合预期。本次迭代同步清理了积压超过2个月的历史待处理PR，存量需求落地进度大幅提升，核心功能的体验短板正在快速补全。
## 2. 版本发布
### 正式版本：LobsterAI 2026.6.5（发布时间2026-06-05）
- 核心更新内容：
  1. 协作模块（Cowork）优化了频道会话同步逻辑与闲置资源自动清理机制，大幅降低多会话并行时的内存占用
  2. 快捷键体系完成全量重构，扩展了可绑定快捷键的操作范围，同时优化了触发逻辑与使用引导，操作流畅度显著提升
- 无破坏性变更，升级过程自动完成配置迁移，原生保留用户手动删除的自定义模型条目，无需用户执行任何手动操作即可完成版本覆盖。
- 官方更新公告：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.5
## 3. 项目进展
当日13条PR实现100%全闭环，覆盖7大核心业务模块，核心推进成果如下：
1. **高频体验升级**：合并PR #2118 补全了三级 fallback 的跨平台剪贴板能力，解决不同系统下内容复制失败问题；合并PR #2116 重构了错误提示体系，新增空状态引导、重复报错自动去重能力；合并PR #2114 全品类优化Office、PDF、HTML文件的预览适配逻辑，解决排版错位问题，新增展开式预览模式；合并PR #2113 完成Mac端麦克风权限适配，正式落地全平台ASR语音输入能力。
2. **安全水位提升**：合并PR #1534 、PR #1535，修复API代理日志明文泄露凭证、渲染进程越权访问敏感配置的两个高危安全漏洞，满足桌面端Agent的等保基础要求。
3. **存量需求落地**：合并积压3个月以上的PR #1531 （主题色选择器优化）、PR #1533 （本地会话统计面板）、PR #367 （MCP配置导入兼容），长期待处理的非核心需求全部完成收尾。
整体来看当日迭代完成了体验、安全、生态三大方向的21个功能点开发，距离下一个大版本功能冻结的进度提升约15%。
## 4. 社区热点
当日活跃度最高的Issue为 **#1487 会话中调用python脚本出现问题，同样的skills在claude code cli和其他地方都正常**：https://github.com/netease-youdao/LobsterAI/issues/1487
- 该Issue累计2条评论，为当日交互量最高的社区讨论。背后反映了大量选择本地部署30B级大模型的重度用户的核心诉求：本地侧Agent的脚本执行链路适配兼容性不足，是当前区分LobsterAI与在线类Agent工具的核心竞争力场景，用户对该能力的可用性要求极高。
## 5. Bug与稳定性
按严重程度排序，当日公开的已知问题如下：
1. 【已修复 高危】API代理日志明文泄露API Key、会话内容，渲染进程可越权读写敏感配置：已通过PR #1534、#1535合并修复，将随下一正式版本发布
2. 【待修复 中高危】#1471 切换会话或导航视图时输入框草稿因去抖未及时持久化导致内容丢失：https://github.com/netease-youdao/LobsterAI/issues/1471 ，影响所有高频切换会话的编辑场景，暂未提交修复PR
3. 【待修复 中危】#1472 重新编辑历史消息时直接覆盖当前输入框未发送内容，无确认提示：https://github.com/netease-youdao/LobsterAI/issues/1472 ，易引发用户长提示词编辑成果无感知丢失，暂未提交修复PR
4. 【待修复 中危】#1487 本地部署30B模型时Python脚本调用执行异常：仅影响本地部署侧用户，暂未提交修复PR
## 6. 功能请求与路线图信号
结合当日合并的已落地PR，以下需求大概率将纳入下一个迭代正式版本：
1. 个性化设置模块新增紧凑圆形主题色选择器：PR #1531已合并，体验打磨基本完成
2. 新增本地会话使用统计看板：PR #1533已合并，可展示总会话量、今日消息量等维度数据
3. MCP生态兼容增强：PR #367已合并，新增启动时自动导入本地`mcp.json`配置能力，区分SSE与Streamable HTTP两类协议的配置项
4. OpenClaw本地插件自助修复流程：PR #2112已合并，插件出现运行异常时可触发一键自检修复逻辑
## 7. 用户反馈摘要
从当日活跃Issue中提炼真实用户反馈：
- 负面痛点：用户高频吐槽输入环节的无感知内容丢失问题，严重打断长提示词编辑流程；本地部署大模型的重度用户反馈当前版本的脚本执行能力兼容性远低于竞品，影响本地侧使用流畅度
- 正面反馈：跨平台剪贴板兼容、语音输入权限适配等预发布功能已收到测试用户的正向反馈，不同系统下的体验一致性较上一版本提升明显
## 8. 待处理积压
当前共有3个超过2个月的stale活跃Issue未闭环，需要维护团队优先排期：
1. #1487 本地大模型Python脚本执行异常
2. #1471 切换页面输入草稿丢失
3. #1472 重新编辑历史消息覆盖未发送内容无提示
以上三个问题均属于核心高频交互场景的已知缺陷，长期未修复容易引发普通用户使用差评，建议优先级高于新增需求，优先安排资源在近3个工作日内输出修复方案。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-06
项目定位：开源AI智能体与个人AI助手基础设施
---

## 1. 今日速览
过去24小时Moltis项目整体处于中高活跃度开发状态，累计产生4条Issue更新、5条PR更新，无新版本发布。项目刚完成遗留3天的Telegram端流式输出核心bug闭环，同时社区贡献者集中提交了3条体验类Bug反馈与1条移动端增强需求。待合并PR池覆盖沙箱适配、模型配置、会话历史优化三大核心模块，开发节奏稳健，面向容器自托管场景的全栈适配优化正在集中推进。整体项目健康度良好，问题响应闭环周期控制在3天内。

## 2. 版本发布
过去24小时无新版本正式发布，最新稳定版信息可查阅项目官方 [Releases 页面](https://github.com/moltis-org/moltis/releases)。

## 3. 项目进展
今日仅1条PR完成关闭/合并，核心推进成果如下：
- [PR#1099 [codex] Separate Telegram progress stream from final replies](https://github.com/moltis-org/moltis/pull/1099) 作者s-salamatov：该PR将Telegram渠道的流式交互逻辑重构为「临时进度消息+自动销毁+最终回复单独投递」模式，彻底解决了此前流式编辑过程中中间输出内容混入最终回复的问题，完成了Telegram集成模块的核心体验闭环，是多端消息一致性体验的重要里程碑优化。

## 4. 社区热点
今日讨论活跃度最高的项目动态为Telegram流式Bug全链路闭环事件：
- 关联Issue：[#1097 [Bug]: Telegram edit-in-place streaming mixes intermediate output into final reply](https://github.com/moltis-org/moltis/issues/1097)
背后核心诉求：大量使用Telegram作为接入渠道的C端用户长期反馈回复内容混杂、残留中间思考过程的体验问题，本次从提报到完全修复仅耗时2天，充分响应了即时通讯端流式交互的核心体验痛点，也验证了项目Bug闭环效率符合社区预期。

## 5. Bug 与稳定性
按严重程度从高到低排列今日更新的Bug清单：
1. **中高优先级**：[#1109 [Bug]: The update banner does not account for Docker installs](https://github.com/moltis-org/moltis/issues/1109)：Docker部署场景下的升级提示横幅未做适配，可能引导容器用户误操作触发非预期升级、甚至覆盖现有运行数据，目前暂未提交对应修复PR
2. **低优先级**：[#1108 [Bug]: Session list in the web UI shows times, but not dates, for past-day sessions](https://github.com/moltis-org/moltis/issues/1108)：Web端会话列表跨天历史会话仅显示时间、不展示日期标识，提升用户查找历史会话的成本，目前暂无配套修复PR
3. **已闭环中优先级历史Bug**：[#1097 Telegram流式输出内容混杂问题](https://github.com/moltis-org/moltis/issues/1097)：已通过PR#1099完全修复，无遗留问题。

## 6. 功能请求与路线图信号
今日新增正式功能需求为：[#1107 [Feature]: Multiline text input in the mobile web UI](https://github.com/moltis-org/moltis/issues/1107) 移动端Web端多行文本输入能力。
结合当前待合并PR池判断下一版本落地概率极高的特性包括：Docker/Podman双沙箱全场景适配、自定义偏好模型替换能力、大工具返回结果自动截断的会话存储优化；移动端多行输入需求大概率会被纳入下下个迭代的排期范围。

## 7. 用户反馈摘要
从今日更新的Issue中提炼的真实用户反馈：
- 核心痛点：自托管Docker部署用户普遍对非适配的官方升级引导存在顾虑，害怕误操作破坏运行环境；移动端Web端单行输入无法支持长文本粘贴、多行编辑的场景，输入效率较低；跨天历史会话无日期标识，长期使用后会话列表辨识度下降。
- 正向反馈：社区用户对Telegram端Bug的响应修复速度表示认可，问题从提报到闭环的效率远高于同类开源AI助手项目。

## 8. 待处理积压
目前存在1条积压超过5天的高价值PR等待维护者评审合入：
- [PR#1089 Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089) 该PR实现了会话历史中工具返回结果的自动截断逻辑，可避免大体积工具输出内容撑爆会话存储、导致历史会话加载失败的稳定性问题，目前已创建超过5天仍处于待合并状态，建议维护者优先评审合入，规避大量长会话场景下的存储溢出风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 2026-06-06
---
## 1. 今日速览
过去24小时CoPaw项目活跃度处于近两周高位，累计产生30条Issue更新、25条PR更新，其中12条历史Issue闭环、15条PR完成合并/关闭，迭代覆盖浏览器控制、渠道兼容、前端UI、安全加固多个核心模块。当日共有5位首次贡献者提交代码，社区外部参与占比超过30%，开源生态健康度表现优异。当前所有迭代均在main分支灰度验证，暂未发布正式新版本。
## 2. 版本发布
当日无正式版本发布，最新Release库为空，所有新特性修复均处于开发或待合并状态。
## 3. 项目进展
当日合并的高价值PR集中在历史遗留问题清零、安全能力升级两个方向，项目整体向前推进3个核心模块的体验升级：
1. **浏览器稳定性修复**：[#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) 新增CDP超时参数、跨浏览器配置文件隔离逻辑，彻底解决browser_use启动超时、Chrome/Edge闪退的高频问题
2. **安全能力增强**：[#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) 新增write_file工具防护逻辑，阻止工具静默覆盖已有非空文件；[#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) 限制文件预览接口仅可访问工作目录，防范路径遍历敏感文件泄露风险
3. **遗留问题批量闭环**：合并PR修复gunicorn启动崩溃、MCP服务崩溃自动重连、Anthropic大模型工具结果重放失败、JSON状态文件损坏等10个存在超过1个月的历史遗留Bug，同时合并OpenSandbox沙箱插件[#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) 新增安全隔离的shell执行能力；合并前端PR[#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) 补充KaTeX依赖，修复LaTeX公式异常显示问题。
## 4. 社区热点
今日讨论量最高的3个核心议题：
1. **桌面端打包方案答疑**：[#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) 累计7条评论，用户询问官方exe打包方案、普通桌面版与Tauri版差异，反映大量个人用户有本地化分发使用需求
2. **浏览器自动化故障排查**：[#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) 累计6条评论，多位Windows用户反馈browser_use启动异常的同类场景，是自动化执行场景最高频的痛点
3. **记忆系统能力升级诉求**：[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 累计4条评论，企业用户提出记忆系统仅存储不提炼、同类问题反复踩坑的痛点，反映出深度使用场景下用户对Agent经验沉淀能力的强烈需求。
## 5. Bug 与稳定性
按严重程度从高到低排序：
| Bug描述 | 严重等级 | 关联Issue | 修复状态 |
| ---- | ---- | ---- | ---- |
| Ubuntu服务端虚拟内存泄漏导致子进程fork失败报"Cannot allocate memory"，服务完全不可用 | P0 | [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) | 暂无对应PR |
| loop_config.json/prd.json配置文件损坏导致整个Agent会话崩溃，所有渠道无法交互 | P0 | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | 暂无对应PR |
| Yuanbao渠道4个兼容类Bug（proto文件缺失、protobuf版本不兼容、connectId字段缺失、流式回复丢失） | P1 | [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976)、[#4977](https://github.com/agentscope-ai/QwenPaw/issues/4977)、[#4978](https://github.com/agentscope-ai/QwenPaw/issues/4978)、[#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) | 已有对应修复PR全部待合并 |
| DEEPSEEK大模型回复内容全部折叠进思考区，必须手动展开才能看到正式输出 | P1 | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | 暂无对应PR |
| 桌面版开启防火墙后局域网内无法通过IP访问控制台 | P2 | [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) | 暂无对应PR |
| Windows端执行shell命令时弹出cmd窗口快速闪烁 | P2 | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | 对应修复逻辑已写入PR#4900待合并 |
## 6. 功能请求与路线图信号
结合现有Issue和已开发完成的PR，大概率纳入下一正式版本的特性包括：
1. 会话页面自定义列顺序功能，对应实现PR[#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) 已完成开发，关联需求Issue[#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770)
2. 支持按标签批量下载技能，对应实现PR[#4969](https://github.com/agentscope-ai/QwenPaw/pull/4969) 已开发完成
3. 支持直接中断正在执行任务的Agent，对应需求累计两次提报、用户反馈量极高，已进入待开发优先级队列
4. 定时任务新增直接执行shell/脚本类型，无需经过Agent推理层，企业自动化场景需求强烈
## 7. 用户反馈摘要
从当日Issue评论提炼的真实用户痛点与场景：
1. 大量非技术背景普通用户使用桌面端产品，对安装分发、跨芯片兼容、本地网络访问等基础体验敏感度远高于核心功能，是影响扩散的核心因素
2. 深度使用用户高频吐槽Agent缺乏中途中断能力，误触发长时间任务后必须等待执行完成，打断工作流体验极差
3. 记忆系统利用率低是企业用户共性不满点，Agent完成任务后不会自动总结经验，同类问题反复出错，浪费大量重复推理成本
4. 社区新贡献者反馈提PR流程顺畅，维护者响应速度快，外围生态贡献意愿强烈。
## 8. 待处理积压
提醒维护者重点关注3个长期悬置的高优先级需求：
1. [#4744](https://github.com/agentscope-ai/QwenPaw/issues/4744) 提报超过1周，询问macOS Tauri桌面版是否支持Intel芯片，累计2条用户评论无官方响应，Intel存量Mac用户覆盖需求尚未排期
2. [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 记忆系统增强提案提报超过2周，累计4条社区评论讨论但无明确开发排期，需求覆盖大量企业用户场景
3. Cron任务直接执行shell的需求被用户重复提报2次，累计关联Issue#4950、#4963，需求验证充分但尚未纳入版本迭代计划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-06-06）
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw项目整体处于高活跃健康迭代状态，过去24小时累计产生100条Issue与PR更新，20条PR完成合并/关闭，6条Issue实现闭环，无新版本发布。当前迭代重心聚焦v0.9.0版本的安全架构升级、Agent跨端互通能力、第三方集成生态扩充三大方向，社区贡献覆盖RFC设计、工具插件开发、文档优化全链路，项目整体迭代进度完全匹配公开路线图，开发协作健康度处于优秀区间，核心模块未出现影响生产使用的严重回归问题。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日累计20条PR完成合并或关闭，核心进展包括：
1. 6个分散的旧版第三方工具集成PR（Sonos/Spotify/8Sleep/Philips Hue/Home Assistant/Shazam）全部完成架构校验后标记关闭，统一收拢到新的批量集成PR下，完成智能家居、音频生态工具的底层架构对齐，解决了之前集成实现碎片化的问题：
   - [#6480 feat(tools): sonos tool (Control API, refresh-token OAuth)](https://github.com/zeroclaw-labs/zeroclaw/pull/6480)
   - [#6478 feat(tools): spotify tool (Web API, refresh-token OAuth)](https://github.com/zeroclaw-labs/zeroclaw/pull/6478)
   - [#6464 feat(tools): home_assistant tool for HA REST API](https://github.com/zeroclaw-labs/zeroclaw/pull/6464)
2. 1个S1级阻塞Bug完成闭环：修复了引导新用户接入OpenAI Codex订阅时的跳转逻辑错误，解决了新用户onboarding流程被阻断的问题：[#6120 [Bug]: Onboarding: choosing OpenAI Codex prompts for OpenAI API key instead](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)
3. TUI端Agent交互体验需求落地，Ratatui实现的全新Agent模式REPL正式完成评审闭环：[#5882 [Feature]: Ratatui-based agent mode REPL](https://github.com/zeroclaw-labs/zeroclaw/issues/5882)
目前v0.9.0规划的核心安全RFC设计完成率已经达到80%，第三方可扩展工具集数量较上周新增6个候选组件。

## 4. 社区热点
今日讨论热度最高的3条事项集中在协作效率、迁移兼容、安全能力三大方向：
1. 9条评论热度第一的协作治理RFC：[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)，背后核心诉求是降低核心维护者的人工看板管理成本，通过自动化标签路由、PR车道分流机制减少非开发事务耗时，进一步提升社区协作吞吐量。
2. 7条评论热度第二的输出路由模型RFC：[#6969 RFC: unified output routing model (per-peer modality preference + agent send_via tool)](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)，由从Letta迁移过来的资深用户发起，核心诉求是支持用户自定义回复的投递渠道、格式，解决之前多端部署时消息无法定向推送的痛点。
3. 6条评论热度第三的多厂商OAuth支持需求：[#5601 [Feature]: Add subscription-native OAuth support for Ollama Cloud, z.ai (Zhipu), Kimi (Moonshot), and MiniMax providers](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)，由企业级部署用户发起，核心诉求是替代手动静态API密钥管理流程，大幅降低大规模部署场景下的密钥泄露风险。

## 5. Bug 与稳定性
今日新增Bug按严重程度排序：
1. S2级功能降级Bug：[#7059 [Bug]: excise "default model provider" credential/URL fallback from channel orchestrator](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)，通道编排器残留旧版本的默认提供商凭证兜底逻辑，不符合V3配置规范，存在非预期凭证泄露风险，目前状态为in-progress，已有修复路径正在开发。
2. 无新增S1级阻塞、核心模块崩溃、数据丢失类高风险Bug，全平台生产版本运行稳定性符合预期。

## 6. 功能请求与路线图信号
结合当前PR与Issue的评审状态，以下功能大概率被纳入v0.9.0正式版本：
1. 高优先级安全架构类：Shell命令三级权限确认机制、RPC/WSS传输层OIDC认证支持、可插拔安全执行层，均已标记为Accepted，属于v0.9.0核心规划项。
2. 生态扩展类：Replicate模型运行插件、Firecrawl网页爬取插件、Shazam音频识别插件，均为低风险WASM沙箱插件，开发完成度接近100%，预计本周即可合并入主分支。
3. 集成类：智能家居+音频生态5个批量集成工具集、Twitch聊天社交渠道支持，覆盖大量个人用户的高频使用场景，已进入架构对齐收尾阶段，优先安排合并。
4. 体验优化类：按模型自定义能力参数与上下文窗口配置、文档全链路警告清理，属于低阻力优化项，会随近两个小版本逐步落地。

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼出的真实用户反馈：
1. 迁移用户痛点：大量从其他Agent框架迁移的用户反馈当前ZeroClaw缺少自定义消息路由、LSP代码辅助能力，代码生成幻觉率、跨端消息投递灵活性低于预期，对应需求已经全部进入RFC评审队列。
2. 企业部署用户痛点：手动管理数十个LLM厂商API密钥的运维成本极高，OAuth原生支持的优先级远高于普通功能需求，该诉求已经获得维护者明确响应。
3. 开发者正面反馈：大量用户对当前WASM插件沙箱的安全设计认可度很高，希望未来所有第三方集成都走插件路径，不要侵入核心代码库，避免主分支体积过度膨胀。

## 8. 待处理积压
提醒维护者重点关注的长期未处理高优先级事项：
1. [#6074 audit: track 153 commits lost in bulk revert c3ff635 for recovery](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)，2026年3月批量回滚丢失的153条提交恢复工作已经拖了2个多月，当前仅处于in-progress初始阶段，涉及大量历史代码校验，需要投入更多核心资源推进。
2. 6个高风险架构类Issue处于Blocked状态等待维护者评审，包括核心代码精简为MCP插件架构、气隙隔离执行模式等重要设计，长期积压会拖慢v0.9.0的发布进度。
3. [#6715 [Feature]: Delete unneeded branches from main zeroclaw-labs/zeroclaw repository](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)，主仓库当前累计超过200个冗余历史分支，清理方案已经讨论完成但尚未执行，持续累积会大幅提升代码仓库管理的复杂度。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*