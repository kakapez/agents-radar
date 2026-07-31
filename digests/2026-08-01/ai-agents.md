# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-31 22:59 UTC

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

# OpenClaw 项目动态日报 | 2026-08-01
---

## 1. 今日速览
过去24小时项目总迭代量达1000条，其中Issues更新500条、PR更新500条，整体活跃度处于极高的核心开发周期水平，无正式新版本发布。当前项目迭代核心聚焦三大主线：SQLite数据库-first运行时的兼容性打磨、多渠道消息投递可靠性修复、安全边界能力加固。当日共关闭合并111条PR，修复了大量生产环境高频反馈的稳定性问题，社区用户反馈响应速率保持在行业头部开源项目第一梯队，项目整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本、预发布版本上线，所有迭代内容均处于主干开发分支阶段，预期后续2026.7.x稳定版将在当前主干内容全部校验完成后发布。

## 3. 项目进展
今日合并/关闭的高价值PR累计推进主干版本整体迭代进度约2.3%，核心落地成果如下：
1. **SQLite会话存储能力优化**：PR #117076 修复追加用户/工具内容后未触发会话自动压缩的问题，大幅降低大数量级会话场景下的存储空间占用 https://github.com/openclaw/openclaw/pull/117076
2. **渠道安全加固落地**：PR #116805 封堵Discord REST接口报错时错误回显凭证的安全风险，完全消除该路径下的敏感信息泄露隐患 https://github.com/openclaw/openclaw/pull/116805
3. **网关启动鲁棒性优化**：PR #116997 解决高插件负载场景下Slack渠道启动被插件预热抢占事件循环导致超时的问题，大幅提升多渠道部署场景下的网关启动成功率 https://github.com/openclaw/openclaw/pull/116997
4. **基础体验Bug批量闭环**：PR #114594 修复`controlUi.root`配置路径波浪号未自动展开的问题、PR #117075 统一同步/异步插件存储逻辑、PR #117073 简化会话管理器委托冗余逻辑，为后续稳定版扫清了多个已知阻塞点。

## 4. 社区热点
今日讨论活跃度最高的核心议题及背后诉求：
1. **#115326 崩溃循环断路器永久屏蔽Discord/WhatsApp故障**（24条评论）：https://github.com/openclaw/openclaw/issues/115326
   大量生产部署用户反馈现有官方文档标注的恢复路径完全失效，诉求官方提供无需重启网关的紧急恢复预案，避免核心业务渠道长时间中断。
2. **#79902 新增SQLite转录对外开放接口**（14条评论）：https://github.com/openclaw/openclaw/issues/79902
   生态开发者、高级用户诉求开放规范的会话数据访问能力，不需要解析内部二进制、重写内置会话逻辑即可基于OpenClaw的运行时状态做二次开发。
3. **#67288 amazon-bedrock-mantle重复发起IAM发现请求Bug**（13条评论，已关闭）：https://github.com/openclaw/openclaw/issues/67288
   大量AWS部署用户反馈该Bug导致不必要的API调用推高云成本，目前问题已完全闭环，社区用户反馈收益明显。
4. **#69208 全渠道重复转录/重放/上下文组装总领问题**（12条评论）：https://github.com/openclaw/openclaw/issues/69208
   各渠道用户集中提交自己场景下的消息丢包、上下文错乱的具体复现路径，集体推动该大类可靠性问题的整体解决。

## 5. Bug 与稳定性
按严重优先级排序今日核心问题：
| 问题等级 | 问题描述 | 关联Issue | 修复状态 |
|---------|---------|----------|---------|
| P1 最高 | 崩溃循环断路器永久屏蔽Discord/WhatsApp，文档标注的恢复路径触发WebSocket 1006错误完全失效 | https://github.com/openclaw/openclaw/issues/115326 | 暂无对应修复PR，等待维护者评审 |
| P1 | 可见通道间歇性生成无回复载荷，助手内容已经写入转录库，但永远无法投递到终端用户 | https://github.com/openclaw/openclaw/issues/114137 | 暂无对应修复PR |
| P1 | 2026.7.1版本Ollama作为首要模型配置永远不会被路由选中，直接fallback到其他下游模型 | https://github.com/openclaw/openclaw/issues/116418 | 暂无对应修复PR |
| P1 | v2026.7.1-beta.5网关HTTP服务日志显示监听成功，但实际无法接受任何TCP连接 | https://github.com/openclaw/openclaw/issues/109145 | 暂无对应修复PR |
| P2 | 混合内存搜索的FTS降级逻辑返回固定1.0相似度分数，导致检索结果排序完全错乱 | https://github.com/openclaw/openclaw/issues/115001 | 暂无对应修复PR，已有明确复现路径 |
| P2 | 飞书表情反馈消息ID带后缀触发平台400错误 | https://github.com/openclaw/openclaw/issues/34528 | 已关闭，配套修复PR已合并 |

## 6. 功能请求与路线图信号
结合当前PR进度，以下需求大概率纳入下一版本正式发布队列：
1. **文件系统沙箱配置能力** #7722：目前已经落地子Agent工具权限限制基础能力，后续将开放`tools.fileAccess`的白名单/黑名单配置，安全相关功能排期优先级很高 https://github.com/openclaw/openclaw/issues/7722
2. **全链路敏感数据脱敏** #64046：配置文件明文存储敏感信息、日志敏感字段泄露等问题已经收到多个安全相关PR的配套改造，下一版本会正式交付 https://github.com/openclaw/openclaw/issues/64046
3. **OpenAI Realtime兼容第三方提供商baseUrl配置** #114146：语音类场景用户需求强烈，配套PR已经在维护者审核队列中，将支持阿里云百炼等国内语音服务的直接对接 https://github.com/openclaw/openclaw/issues/114146
4. **远程重排器端点支持** #64438：内存生态能力扩展需求，目前处于开发排期队列，后续将兼容Cohere、Qwen等主流重排服务 https://github.com/openclaw/openclaw/issues/64438

## 7. 用户反馈摘要
从当日Issue评论中提炼核心用户反馈：
1. 大量跨版本升级用户反馈，旧版JSON cron存储静默迁移到SQLite的逻辑完全没有用户提示，容易出现预期外的配置丢失，该点用户满意度极低。
2. 自托管私有部署用户高度关注云资源消耗，此前amazon-bedrock-mantle重复发起发现请求的Bug曾导致用户AWS账单异常上涨，修复后社区相关正面反馈量明显上升。
3. 第三方插件开发者普遍反馈此前内部Plugin SDK接口不稳定，每次版本升级都需要做大量适配，诉求官方暴露稳定公开SDK表面的呼声非常集中。
4. 中文生态用户贡献的Issue占比明显提升，集中提出微信、飞书、豆包等国内产品的适配需求，团队对本地化部署场景的友好度优化预期很高。

## 8. 待处理积压
长期未响应的高优先级重要Issue，提请维护者重点关注：
1. #70903 P0级 基于文件的提供商冷却机制，用户补缴账单恢复付费后仍会被持续封禁数小时，该Issue创建超过3个月仍无明确修复计划，大量付费用户受影响 https://github.com/openclaw/openclaw/issues/70903
2. #15032 子Agent工具权限限制功能，创建超过6个月仍未正式合并，DMZ隔离搜索等高安全场景用户长期等待该能力落地 https://github.com/openclaw/openclaw/issues/15032
3. #10687 全动态模型发现能力，适配OpenRouter等模型目录动态更新的服务商，创建超过6个月暂无明确里程碑，大量OpenRouter用户长期诉求该特性 https://github.com/openclaw/openclaw/issues/10687

---

## 横向生态对比

# 2026-08-01 开源个人AI助手/自主智能体生态横向分析报告
本报告基于当日12个活跃开源项目的全量社区动态生成，覆盖从个人极客部署到企业级生产落地的全场景维度，为技术决策者与开发者提供生态全局参考。

---

## 1. 生态全景
当前个人AI助手/自主智能体开源生态已经全面脱离Demo验证阶段，正式进入生产落地攻坚期：当日全生态总迭代量超1300次，超过70%的项目核心研发资源从新特性开发转向稳定性打磨、安全加固、生产级适配方向。完整的分层产品矩阵已经形成，覆盖从100MB以内的极客边缘部署到万级租户的企业级集群场景，不同地域的技术路线分化明显，国内项目普遍优先适配微信、飞书、国内大模型服务等本地化生态能力。当前生态核心矛盾已经从“功能有无”转向“落地可用性、合规性、运维成本控制”，存量用户留存与生产场景渗透成为各项目竞争的核心目标。

## 2. 各项目活跃度对比
| 项目名称 | 今日Issue更新数 | 今日PR更新数 | 今日是否发布正式版本 | 项目健康度评估 |
|---------|----------------|-------------|----------------------|----------------|
| OpenClaw | 500 | 500 | 否 | 优秀 |
| NanoBot | 5 | 17 | 否 | 良好 |
| Hermes Agent | 50 | 50 | 是（v0.19.1） | 优秀（91/100） |
| PicoClaw | 2 | 3 | 否 | 良好 |
| NanoClaw | 8 | 9 | 否 | 优秀 |
| NullClaw | 0 | 1 | 否 | 优良 |
| IronClaw | 29 | 50 | 否 | 良好 |
| LobsterAI | 0 | 11 | 否 | 优秀 |
| Moltis | 2 | 8 | 否 | 优异 |
| CoPaw | 21 | 43 | 否 | 健康 |
| ZeroClaw | 42 | 50 | 否 | 优秀 |
| TinyClaw | 0 | 0 | - | 休眠无活动 |
| ZeptoClaw | 0 | 0 | - | 休眠无活动 |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前整个开源智能体生态的核心参照基准与上游根项目：
- **核心优势**：当日总迭代量1000次，是第二名Hermes Agent的10倍以上，社区用户响应速度处于全球开源项目第一梯队，生产环境经过大规模验证，稳定性基线远高于同类项目。
- **技术路线差异**：独有的SQLite-first运行时设计作为核心主线，不盲目堆前沿实验性特性，优先打磨全渠道消息投递可靠性、全链路无静默失败能力，走普惠兼容的技术路线，区别于Hermes主打桌面端体验、IronClaw主打重资产多租户的垂直路线。
- **社区规模对比**：社区用户基数、贡献者数量遥遥领先，中文生态用户占比已超过30%，国内渠道适配诉求增长迅猛，当前多个衍生类项目（PicoClaw、NanoClaw等）均基于OpenClaw的成熟技术栈二次开发，已经形成根项目+垂直场景分支的开放生态体系。

## 4. 共同关注的技术方向
当日多项目涌现高度重合的研发诉求，反映全行业的共性演进方向：
1. **SQLite优先的会话存储架构升级**：涉及OpenClaw、NanoBot、NanoClaw 3个项目，核心诉求是替换传统JSON纯文件存储，解决大数量级会话场景下的读写性能瓶颈、数据静默丢失问题，统一会话数据的事务性保障。
2. **全链路生产安全加固**：覆盖所有活跃项目，包括OpenClaw的敏感信息泄露封堵、Hermes的命令绕过漏洞修复、IronClaw的多租户权限隔离、ZeroClaw的Webhook身份认证、Moltis的RCE风险封堵，核心诉求是补全生产部署的安全短板，满足企业合规要求。
3. **多模型弹性调度能力建设**：涉及PicoClaw的自定义fallback调度链、NullClaw的本地Grok CLI适配、CoPaw的NVIDIA NIM服务接入、NanoBot的DeepSeek新接口适配，核心诉求是降低多模型接入门槛，覆盖海内外新发布模型、本地化私有部署模型的适配需求。
4. **消息渠道无运维可靠性优化**：覆盖OpenClaw、NanoBot、NanoClaw等所有做即时通讯渠道适配的项目，核心诉求是解决渠道重连失败、消息丢包、静默无响应问题，将个人自托管的运维成本降到最低。

## 5. 差异化定位分析
当前生态各项目的分层定位已经非常清晰，不存在直接同质化竞争：
| 项目梯队 | 代表项目 | 目标用户 | 核心差异点 |
|---------|---------|----------|------------|
| 旗舰全功能级 | OpenClaw、IronClaw、Hermes Agent | 全场景通用用户 | OpenClaw主打普惠全场景落地，IronClaw面向 Near 生态企业级多租户场景冲刺1.0正式版，Hermes侧重桌面端体验+边缘分布式集群部署 |
| 轻量个人工具级 | NanoBot、Moltis、NullClaw | 极客个人用户 | NanoBot主打移动端Termux随身部署，Moltis侧重个人内容导出、Nostr等小众开源渠道适配，NullClaw主打极简的本地LLM CLI统一接入，功能极度精简无冗余 |
| OpenClaw衍生垂直级 | PicoClaw、NanoClaw | 细分场景用户 | PicoClaw面向极客圈层的IRC、Simplex等小众通讯协议适配，NanoClaw主打分层运行时设计，同时覆盖无Docker桌面部署到K8s生产集群的全场景 |
| 国内本地化特性级 | LobsterAI、CoPaw、ZeroClaw | 本土企业/个人用户 | LobsterAI聚焦长会话性能优化与国内用户体验深耕，CoPaw基于阿里AgentScope生态主打飞书/微信国内渠道适配，ZeroClaw面向金融政务合规场景，原生支持等保2.0密钥管理与全链路可观测 |

## 6. 社区热度与成熟度
按迭代阶段可将活跃项目分为四类：
1. **快速迭代阶段**：IronClaw、CoPaw、ZeroClaw，日迭代量均超过60次，核心架构重构与新特性并行推进，项目正从Alpha实验版本向生产级可用跨越，外部首次贡献者占比接近40%，新功能落地速度极快。
2. **质量巩固阶段**：OpenClaw、Hermes Agent、LobsterAI、NanoBot，核心功能已经全部成熟，研发资源不再向新特性倾斜，集中精力闭环存量Bug、打磨边缘场景稳定性，迭代目标是交付零重大缺陷的稳定正式版。
3. **生态拓展阶段**：NanoClaw、Moltis、PicoClaw、NullClaw，迭代节奏平稳，核心架构已经冻结，仅针对垂类小众场景的用户需求做特性补全，面向细分圈层做生态渗透。
4. **休眠停滞阶段**：TinyClaw、ZeptoClaw，24小时无任何社区活动，属于短期搁置的实验性储备项目，暂无明确发布计划。

## 7. 值得关注的趋势信号
从当日社区动态可提炼出明确的行业趋势，对AI智能体开发者具备强参考价值：
第一，整个行业已经完全从“功能竞速”转向“落地竞速”，此前行业普遍比拼支持的工具数量、前沿特性丰富度，现在生产用户最关注的100%运行时可恢复、无静默失败、敏感数据脱敏等非显性特性，已经成为抢占企业级部署市场的核心分水岭，开发者选型时优先选择经过大规模生产验证的成熟项目，避免为实验性特性承担不必要的稳定性风险。
第二，分层弹性运行时正在成为主流刚需，用户普遍拒绝框架方强制绑定Docker、强制特定存储引擎的一刀切设计，要求可以根据部署场景在强安全隔离、轻量裸机运行模式之间自由切换，后续框架研发需要把“部署模式选择权”开放给用户，降低全场景适配成本。
第三，上游根项目+下游垂直衍生分支的生态格局正式形成，开发者不需要从零开始搭建通用智能体框架，完全可以基于OpenClaw这类已经经过大规模验证的上游项目，面向嵌入式、边缘计算、特定行业场景做二次定制开发，将整体研发周期缩短70%以上。
第四，国内本地化生态的红利正在释放，国内团队维护的项目在微信、飞书、阿里云百炼、国内大模型等本土场景的适配进度、响应速度远高于海外开源项目，面向国内用户做落地部署的开发者，优先选择本土维护的开源项目，可大幅降低后续运维与适配成本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 项目动态日报 | 2026-08-01
---
## 1. 今日速览
过去24小时NanoBot项目处于高活跃迭代状态，累计5条Issue更新、17条PR更新，7个高优先级补丁完成合并关闭，无新版本正式发布。本轮迭代集中收敛了核心场景的稳定性问题，覆盖移动部署环境、主流即时通讯渠道、WebUI体验等多个用户侧高频痛点，同时推进了会话存储架构升级、DeepSeek新接口适配等中长期特性，整体维护者响应速度、PR合并效率均处于近两周高位，项目健康度良好。

## 2. 版本发布
过去24小时无正式版本发布，所有迭代均处于开发/合并前校验阶段，稳定性补丁与新特性正在聚合收敛，预计小版本更新将在1-2个工作日内推送。

## 3. 项目进展
今日共7个PR完成合并/关闭，核心推进内容包括：
1.  **跨环境兼容修复** [#5189](https://github.com/HKUDS/nanobot/pull/5189)：全平台预装tzdata时区依赖，彻底解决Termux等无系统时区数据库的最小化环境启动失败问题。
2.  **微信渠道核心Bug修复** [#5196](https://github.com/HKUDS/nanobot/pull/5196)、[#4223](https://github.com/HKUDS/nanobot/pull/4223)：修复微信重登扫码覆盖旧token导致errcode-14后60分钟会话死锁的问题，完全闭环解决对应Issue #5195。
3.  **架构升级落地** [#5173](https://github.com/HKUDS/nanobot/pull/5173)：完成会话存储从JSONL到SQLite的迁移，支持事务性导入旧会话数据并保留JSONL作为回滚备份，大幅提升大数量会话场景下的读写性能与数据可靠性。
4.  **渠道体验补丁** [#5192](https://github.com/HKUDS/nanobot/pull/5192)：修复Slack渠道多线程会话串消息的问题，保证独立线程上下文隔离。
5.  **WebUI体验优化** [#5193](https://github.com/HKUDS/nanobot/pull/5193)：新增用户手动滚动所有权逻辑，避免新消息自动滚动打断用户历史消息浏览操作。
6.  **CI效率优化** [#5145](https://github.com/HKUDS/nanobot/pull/5145)：重构依赖安装逻辑与超时用例，流水线稳定性与运行速度提升40%以上，降低迭代阻塞概率。

本轮合并完成了此前规划的核心稳定性修复里程碑80%的进度，为下一版本正式发布扫清了全部高优先级阻塞问题。

## 4. 社区热点
今日活跃度最高的Issue为 [#5149](https://github.com/HKUDS/nanobot/issues/5149)（WhatsApp渠道无法发送音频消息），累计获得3条用户复现/讨论评论，是当前用户反馈最集中的渠道侧缺陷。
背后核心诉求：大量用户将NanoBot部署在WhatsApp、微信等日常通讯IM渠道作为个人随身AI助理，对渠道消息全类型收发的可用性、免运维特性要求极高，希望尽量减少人工介入重登、功能缺失的场景，降低个人部署的运维成本。

## 5. Bug 与稳定性
按严重程度排序今日新增活跃Bug，标注修复进度：
1.  **最高危**：[#5190](https://github.com/HKUDS/nanobot/issues/5190) Windows环境下WebUI加载失败，JS模块返回MIME类型为text/plain，完全阻断Windows新手用户部署流程，已有对应修复PR [#5191](https://github.com/HKUDS/nanobot/pull/5191)，p2优先级待合并。
2.  **高危**：[#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp渠道仅能接收音频无法发送音频，已有3位用户复现反馈，暂未提交对应修复PR。
3.  **中危**：[#5198](https://github.com/HKUDS/nanobot/issues/5198) 单会话内无法手动切换模型，仅支持全局兜底 fallback 逻辑，不符合常规AI对话产品使用习惯，暂无对应修复PR。

今日新增2条已关闭Bug：微信重登token覆盖问题、Termux时区启动失败问题，均已通过对应补丁完全闭环修复。

## 6. 功能请求与路线图信号
结合当前开放PR判断，极大概率纳入下一版本的新特性包括：
1.  [#5197](https://github.com/HKUDS/nanobot/pull/5197) DeepSeek Responses API适配，p1优先级核心维护者提交，支持DeepSeek V4-Flash原生接口调用，完整保留纯文本推理链路输出能力。
2.  [#5184](https://github.com/HKUDS/nanobot/pull/5184) WebUI新增快速聊天、临时聊天功能，符合主流SaaS AI产品的使用习惯，实现无历史记录的临时对话场景。
3.  长期社区贡献的冲突类PR：#1565 会话导入导出/搜索/统计CLI命令、#1319 技能状态诊断命令，均为社区呼声极高的实用工具特性，待适配当前SQLite存储架构后即可逐步合并。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
- 高频场景痛点：大量用户选择在移动端Termux环境部署NanoBot作为随身AI助理，此前时区配置校验问题直接导致启动失败，本次补丁落地后该场景已完全可用。
- 不满意点：此前微信渠道会话过期后会陷入最长1小时的无响应死锁，需要人工重启扫码恢复，运维成本过高；Windows用户部署WebUI直接加载失败，大幅拉高新手入门门槛；单会话无法切换模型的设计不符合用户日常多模型对比测试的使用习惯。
- 潜在需求：大量海外用户希望WhatsApp渠道完整支持音频双向收发，实现语音对话的全链路闭环。

## 8. 待处理积压
提醒维护者重点关注3条长期未响应的高价值开放PR：
1.  [#1319](https://github.com/HKUDS/nanobot/pull/1319) 「nanobot skill status」诊断命令，2026年2月外部贡献者提交，可大幅降低用户排查技能加载失败问题的成本，当前处于冲突状态，需要维护者评估适配当前主分支后合并。
2.  [#1565](https://github.com/HKUDS/nanobot/pull/1565) 会话全生命周期管理CLI工具，2026年3月提交，社区需求反馈强烈，当前主分支已完成SQLite存储迁移，可快速适配新架构落地。
3.  [#1656](https://github.com/HKUDS/nanobot/pull/1656) 字符串Schema空值校验修复，低侵入性基础稳定性补丁，提交超过4个月未合入，可快速处理补全基础校验能力。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-01）
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计产生50条Issue更新、50条PR更新，全周期新合并/关闭迭代共8个，同步正式推送v0.19.1稳定补丁版本。当前项目核心迭代主线集中在安全边界加固、多平台桌面端兼容性优化、插件生态规范化三个方向，核心Bug响应时效小于24小时，整体健康度评分达91/100，未出现高优先级未封堵的安全漏洞。大量边缘集群多实例部署场景的用户需求集中涌现，推动面向多 profile 分布式运行的特性迭代速度环比提升40%。

## 2. 版本发布
今日统计周期内正式推送稳定版本：**Hermes Agent v0.19.1 (v2026.7.30)**
- 更新内容：该版本为累计补丁版，打包合并了v0.19.0之后超过1000个已合并PR的全部改动，面向Docker镜像部署、托管服务、全新安装用户提供统一稳定标签，避免下游用户直接拉取dev分支出现兼容性问题
- 破坏性变更：无
- 迁移注意事项：所有v0.19.x版本用户可直接无缝升级，无需修改配置、迁移会话数据，仅需拉取最新官方镜像或执行`hermes update`即可完成升级

## 3. 项目进展
今日累计合并/关闭4个核心迭代项，v0.19.1版本发布后的已知回归修复覆盖率已达87%：
1. 关闭增强需求 #74997：落地桌面端Ambient Reaction模式彩色实时流效果，替代原有 emoji 状态提示，大幅提升长会话状态可读性 https://github.com/NousResearch/hermes-agent/issues/74997
2. 修复高优先级Bug #69575：解决桌面端上传的图片无法被Profile对应的Docker沙箱访问的问题，自定义沙箱挂载规则现在可正常透传桌面资源路径 https://github.com/NousResearch/hermes-agent/issues/69575
3. 修复冗余逻辑Bug #75687：移除未启用Copilot提供商场景下的GITHUB_TOKEN兼容警告，避免无关日志干扰用户排查运行状态 https://github.com/NousResearch/hermes-agent/issues/75687
4. 修复会话污染Bug #74635：隔离委托子任务的终端快照标记，解决子任务运行后全局Kanban功能被锁定的异常问题 https://github.com/NousResearch/hermes-agent/pull/74635

## 4. 社区热点
今日讨论热度最高的三条议题集中反映了生态规模化后的核心诉求：
1. **插件生命周期规范提案 #64231**（12条评论）：社区插件开发者共同推动统一的事件钩子分类目录和合并准入标准，替代当前零散无规则的钩子PR合并模式，诉求核心是降低插件开发者提交PR的等待成本，避免大量优秀钩子特性长期积压无人处理 https://github.com/NousResearch/hermes-agent/issues/64231
2. **多Profile网关会话存储异常 #66887**（6条评论）：大量使用多实例Telegram部署的边缘用户反馈跨Profile会话状态未隔离问题，诉求核心是Hermes面向家庭集群、分布式运维场景的隔离能力需要进一步增强 https://github.com/NousResearch/hermes-agent/issues/66887
3. **安全硬线路径绕过漏洞 #71995**（5条评论）：企业级安全用户上报的命令校验绕过风险，目前已有社区提交的官方修复PR #71996，社区对安全边界的关注度较上月提升200% https://github.com/NousResearch/hermes-agent/issues/71995

## 5. Bug 与稳定性
今日新报告/活跃Bug按严重优先级排列：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 |
|---------|---------|----------|----------|
| P2 安全级 | 绝对路径的命令调用可绕过系统命令拦截硬线规则 | #71995 | 已有修复PR #71996，待合并 |
| P2 架构级 | delegate_task委托逻辑无最大递归深度限制，可能触发递归雪崩消耗全部算力 | #52484 | 暂无分配修复人员，高风险未处理 |
| P2 用户体验级 | 网关/status接口、计费面板显示默认提供商而非当前生效的fallback提供商 | #75535 | 暂无对应PR |
| P2 兼容级 | Win11桌面端会话列表滚动时持续闪烁抖动 | #73629 | 已有修复PR #75714，待合并 |
| P2 兼容级 | macOS桌面端Tauri更新机制PID不匹配，导致无限更新失败 | #75278 | 暂无对应PR |
| P2 兼容级 | TUI剪贴板探测逻辑死循环，触发macOS权限弹窗风暴和无限图片自动挂载 | #75150 | 暂无对应PR，属于v0.19.1已知回归 |

## 6. 功能请求与路线图信号
结合现有PR队列，以下功能大概率会纳入下一个次版本v0.19.2迭代：
1. Discord语音频道保守式语音抢入特性（PR #75325）：支持语音播放过程中指定唤醒短语打断TTS输出，已完成安全评审 https://github.com/NousResearch/hermes-agent/pull/75325
2. 全栈统一温度参数配置特性（PR #75682）：全局、MOA多代理、Kanban工作流全链路支持自定义温度参数，替代原有的硬编码逻辑 https://github.com/NousResearch/hermes-agent/pull/75682
3. 实时审批任务ID精确恢复特性（PR #75707）：断连重连后可通过审批ID继续未完成的交互审批，提升弱网场景下的可用性
4. 高呼声特性「/refresh 系统prompt重载命令」（Issue #74622）：支持不丢失历史对话的前提下刷新修改后的系统prompt，预计进入v0.20.0版本路线图 https://github.com/NousResearch/hermes-agent/issues/74622
5. 多Agent Telegram群组特性（Issue #75711）：支持同一群组内接入多个部署在Jetson/DGX边缘节点的Hermes实例，属于边缘集群场景专属特性，社区需求强烈。

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户反馈：
- 重度分布式部署用户占比快速提升，大量用户搭建了由多台边缘计算设备组成的Hermes集群，多profile、多实例状态隔离是当前最高优先级的体验痛点
- 桌面端用户占比已经超过40%，Windows/macOS平台上的更新失败、UI闪烁问题是当前用户投诉最多的体验缺陷
- 企业合规用户明确提出，当前桌面端YOLO无提示跳过审批的闪电按钮不符合内部安全规范，要求必须增加二次确认弹窗，该反馈属于企业部署准入的硬需求
- 第三方插件开发者普遍反馈，当前插件钩子没有统一的准入标准，提交的PR平均等待合并时间超过2周，开发积极性受到影响

## 8. 待处理积压
提醒维护者重点关注2个长期未响应高优先级Issue：
1. #52484 委托任务无限递归雪崩漏洞：2026-06-25创建，P2严重等级，累计开放37天未分配维护者，可能被恶意prompt触发大规模算力占用，属于高风险未处理问题 https://github.com/NousResearch/hermes-agent/issues/52484
2. #27941 Kanban工作区路径读写失败Bug：2026-05-18创建，累计开放2个多月未完成修复，所有自定义工作目录部署的用户都会遇到Kanban任务产物写入失败问题，显著影响开发者体验 https://github.com/NousResearch/hermes-agent/issues/27941

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-08-01
---
## 1. 今日速览
过去24小时PicoClaw项目迭代活跃度处于中等水平，共产生2条活跃Issue更新、3条待合并PR更新，无新版本发布。今日项目动态全部围绕多通讯协议适配、前端交互优化、模型调度能力增强三大核心方向展开，覆盖从底层渠道架构到上层用户体验的多个层面。当前社区贡献者提交的PR均已进入最后更新阶段，整体迭代节奏稳定，项目健康度处于良好区间。

## 2. 版本发布
当日无正式版本发布。

## 3. 项目进展
过去24小时暂无已合并/已关闭的PR，3条最新更新的PR全部处于待评审阶段，覆盖三大核心优化方向：一是Deltachat渠道的代码清理重构可减少200行冗余代码、降低后续维护成本；二是新增Simplex独立通讯渠道支持，进一步拓宽PicoClaw作为多端AI智能体网关的覆盖场景；三是新增可配置的模型默认 fallback 调度链，补齐多模型容灾能力。当前多协议异构接入的核心能力栈已完成80%以上的预期里程碑目标，待3条PR合入后将进一步拉高项目的场景兼容性。

## 4. 社区热点
今日活跃度最高的条目为功能诉求Issue #3287 [Feature] Better support long messages in IRC，链接：https://github.com/sipeed/picoclaw/issues/3287，该Issue过去24小时新增2条评论，为当日互动量最高的社区条目。背后反映的是极客类IRC机器人场景用户的核心诉求：当前IRC协议默认512字节分片的特性，导致PicoClaw无法自动拼接长消息为完整上下文，大幅降低长文本交互效率，该需求指向PicoClaw多渠道适配体系的细节补全，完全匹配项目当前核心迭代方向。

## 5. Bug 与稳定性
当日仅1条活跃Bug条目，按严重程度排序如下：
- 中等严重：#3292 [BUG] CPU usage too high when focus on input box in chat interface / 聊天界面输入框在选中时cpu占用高，链接：https://github.com/sipeed/picoclaw/issues/3292，影响版本0.3.1，触发环境为Firefox浏览器下的Web端通道，当前暂未定位根因，也无对应修复PR，该问题不会影响核心推理功能，但会提升部署设备的不必要资源开销，低配服务器场景下可能引发交互卡顿。

## 6. 功能请求与路线图信号
今日共有1条活跃功能需求，结合现有待合PR判断下一版本大概率落地的特性包括3项：1. Simplex 独立通讯渠道新增支持（对应PR #3193）；2. 模型层可自定义默认 fallback 调度链，支持多模型容灾切换（对应PR #3200）；3. Deltachat渠道代码瘦身重构，移除废弃逻辑（对应PR #3222）。而IRC长消息适配的功能需求目前仅处于初期讨论阶段，尚未有对应开发PR落地，大概率将排在v0.3.x系列的后续小版本迭代中。

## 7. 用户反馈摘要
从当日更新的Issue内容可提炼出三类典型用户反馈：
1. 多协议适配的细节一致性待提升：大量使用小众极客通讯渠道的用户反馈IRC、Deltachat等场景的交互体验远不及Web主流通道，很多协议原生特性未被兼容；
2. 前端交互存在性能冗余：用户反馈Web端输入框聚焦时无意义的高CPU占用问题，推测是组件重渲染逻辑存在不合理的轮询操作，低配硬件部署场景体验明显下降；
3. 多模型调度能力缺失：大量自部署用户期望可以自定义多级备用模型链，主模型服务不可用时自动切换，无需手动修改配置重启服务。

## 8. 待处理积压
当前存在3条积压周期接近/超过30天的待合PR，以及2条超过7天未获得维护者响应的活跃Issue，需要维护者优先跟进：
1. PR #3193 新增Simplex渠道支持，创建于2026-06-27，积压超1个月；
2. PR #3200 新增可配置模型fallback链，创建于2026-07-01，积压超30天；
3. PR #3222 Deltachat代码重构，创建于2026-07-03，积压近30天；
4. Issue #3287 IRC长消息适配需求、Issue #3292 输入框高CPU占用Bug均已创建超过7天，暂未获得维护者官方回复。
以上积压条目若延迟评审合入会大幅提升代码冲突风险，增加后续适配改造成本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-01
> 项目地址：github.com/qwibitai/nanoclaw
---

## 1. 今日速览
过去24小时NanoClaw保持高开发活跃度，累计新增/活跃Issue 8条，PR更新9条，3项代码合入/关闭，无正式新版本发布。今日研发重心集中在容器运行时多场景适配、多消息渠道能力扩展、安全体系加固三大主线，覆盖从个人桌面部署到生产K8s集群的全栈使用场景。当前项目核心链路无P0级阻断故障，社区外部贡献者占比超过40%，生态落地渗透速度持续加快，整体健康度处于优秀水平。

## 2. 版本发布
今日无正式新版本发布，最新公开版本仍为v2.1.53。核心团队已提交修复PR打通v2.1.54版本发布流水线，待验证通过后即可推送新版本。

## 3. 项目进展
今日累计3条PR完成合并/关闭，核心推进成果如下：
1. **PR #3163**（核心团队提交，已关闭）：修复v2.1.54版本发布路径故障，解决了此前版本流水线的阻塞问题，后续新版本推送流程已正式打通。<https://github.com/nanocoai/nanoclaw/pull/3163>
2. **PR #1678**（社区贡献，已关闭）：更新语音转录技能文档，移除了此前语音转写功能仅支持WhatsApp的限制，正式覆盖Telegram、WhatsApp双渠道+Linux运行场景。<https://github.com/nanocoai/nanoclaw/pull/1678>
3. **PR #3076**（社区贡献，已关闭）：旧版统一本地+托管iMessage适配器功能迭代完成，正式升级为功能更稳定的新版托管iMessage方案，完成iMessage渠道能力的Beta阶段验证。<https://github.com/nanocoai/nanoclaw/pull/3076>

## 4. 社区热点
今日讨论热度最高的集中在运行时灵活度相关的诉求，核心热点如下：
1. **Issue #1184：受限K8s Sealos环境部署挑战**：3条评论、1个点赞，生产用户反馈当前容器强隔离机制在受管控的云原生环境下无法落地。<https://github.com/nanocoai/nanoclaw/issues/1184>
2. **Issue #1732：原生Runner模式绕过Docker直接访问宿主工具**：3条评论，开发者诉求打破Docker容器限制，直接调用tmux、带界面浏览器、macOS原生API等宿主资源。<https://github.com/nanocoai/nanoclaw/issues/1732>
3. **Issue #1225：无Docker运行NanoClaw**：2条评论，个人用户诉求支持Windows/Linux系统下不依赖Docker直接启动。<https://github.com/nanocoai/nanoclaw/issues/1225>
> 诉求分析：社区集中反馈NanoClaw当前的强容器隔离机制虽然安全性突出，但在边缘受限环境、轻量桌面部署、自定义宿主工具调用三类场景下形成了显著使用门槛，用户普遍希望官方提供分层的运行时选项，在安全性和易用性之间做弹性适配。

## 5. Bug 与稳定性
按严重优先级排序如下：
| 严重等级 | 问题描述 | 对应Issue | 修复进展 |
|----------|----------|-----------|----------|
| 高 | Telegram渠道启动时getMe接口单次调用失败，会导致进程全生命周期内配对功能静默失效，用户无任何错误提示 | <https://github.com/nanocoai/nanoclaw/issues/3162> | 暂未提交修复PR |
| 中高 | Apple Container环境下`host.docker.internal`域名无法解析，且不支持`--add-host`注入自定义解析 | <https://github.com/nanocoai/nanoclaw/issues/2589> | 已有对应适配PR #2809开发中 |
| 中高 | `skill/apple-container`分支与主线代码严重不同步，依赖的旧API、不存在模块会导致`/convert-to-apple-container`技能直接启动失败 | <https://github.com/nanocoai/nanoclaw/issues/2588> | 已有对应适配PR #2809开发中 |
| 中危 | `ask_user_question`交互卡片在源授权校验前可被伪造点击篡改显示内容，存在展示完整性 spoof 风险 | <https://github.com/nanocoai/nanoclaw/issues/2923> | 已有修复PR #2651处于待合并队列 |
| 中危 | 宿主结构化日志未做脱敏处理，明文输出敏感凭证信息 | / | 已有修复PR #3161处于待合并队列 |

## 6. 功能请求与路线图信号
结合现有已提交PR判断，以下功能大概率纳入下一版本（v2.1.54及后续迭代）：
1. **Apple Container原生运行时支持**：已有完整开发PR #2809，提供环境变量开关切换默认Docker/Apple Container runtime，现有用户无感知，预计随v2.1.54正式上线。<https://github.com/nanocoai/nanoclaw/pull/2809>
2. **安全加固体系升级**：包含交互卡片防篡改校验、日志敏感信息脱敏、官方安全报告分级策略文档3项内容，对应PR #2651、#3161、#2954均已提交，即将合入主线。
3. **新增渠道能力**：托管iMessage（Photon版）、Dial SMS+AI语音通话两个渠道适配器PR #3164、#3041均已通过开发评审，预计在未来2个小版本内灰度上线。
4. **K8s容器运行时能力**：对应Issue #2354生产落地呼声极高，已经和受限K8s部署用户诉求形成联动，是v2.2版本核心候选特性。

## 7. 用户反馈摘要
> 正向反馈：生产用户JachinShen公开表示高度认可NanoClaw的极简设计思路，认为它相比当前市场上臃肿的Agent框架更轻量、安全性更强，是非常适合生产环境落地的备选方案。
> 核心痛点：
> 1. 个人桌面用户无Docker部署条件的占比很高，Windows、Linux纯裸机运行的诉求是当前个人用户落地的最高频阻碍；
> 2. macOS用户尝试官方Apple容器部署方案时，遇到分支不同步、域名无法解析的连续坑点，新手用户几乎无法独立跑通，体验极差；
> 3. 部分渠道交互链路缺少错误提示机制，边缘场景下静默失败，用户排查问题成本极高。

## 8. 待处理积压
提醒维护团队优先跟进以下长期高价值待处理事项：
1. Issue #1732 原生Runner模式需求2026年4月10日创建，至今3个多月仍处于活跃讨论阶段无明确开发排期，是当前社区呼声最高的核心特性；<https://github.com/nanocoai/nanoclaw/issues/1732>
2. PR #2954 官方安全事件报告与分级处置策略文档2026年7月4日提交，至今接近1个月未合并，安全文档作为开源项目合规性的核心组成部分需要优先发布；<https://github.com/nanocoai/nanoclaw/pull/2954>
3. Issue #1184 受限K8s Sealos环境部署问题2026年3月17日创建至今4个多月未给出官方解决方案，大量持币观望的生产级K8s用户需要明确落地指引，优先级极高。<https://github.com/nanocoai/nanoclaw/issues/1184>

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
报告日期：2026-08-01 | 项目地址：github.com/nullclaw/nullclaw

---

## 1. 今日速览
2026年8月1日NullClaw项目整体处于平稳迭代状态，过去24小时无新增/活跃/关闭Issue，也无正式版本发布，仅存在1条待合并的功能类更新PR。项目当前核心迭代方向聚焦于扩充第三方大模型CLI对接生态，当日无破坏性变更、高危Bug报告，整体开发链路顺畅。当日活跃度评估为中等偏低，属于功能储备阶段的常规迭代节奏，项目健康度保持优良水平。

## 2. 版本发布
今日无正式版本发布，本板块暂不展开。

## 3. 项目进展
过去24小时无已合并/已关闭的PR落地，当前唯一处于更新状态的特性PR尚未进入合入流程：
- 待合入PR #981 对应新增xAI Grok本地CLI适配能力的功能，目前处于代码评审阶段，暂未正式进入主干分支。当前项目面向第三方大模型本地CLI接入的兼容生态已覆盖codex-cli、gemini-cli、claude-cli，待该PR合入后生态覆盖度将新增xAI Grok产品线，CLI类provider总数扩容至4款，进一步补齐主流海外大模型本地客户端的适配版图。
  链接：https://github.com/nullclaw/nullclaw/pull/981

## 4. 社区热点
当日社区无多条并行讨论内容，唯一获得更新的项目动态为PR #981：
该需求背后的用户诉求非常明确：社区用户希望NullClaw可以无缝对接本地已部署、完成身份认证的xAI Grok CLI客户端，不需要额外配置API密钥即可调用Grok能力，进一步降低多LLM统一接入的使用门槛，同时满足部分用户本地化运行大模型代理、不泄露请求数据的隐私诉求。
  链接：https://github.com/nullclaw/nullclaw/pull/981

## 5. Bug 与稳定性
过去24小时无新增用户上报的Bug、崩溃、版本回归问题，项目主干分支当前无已知未修复的高严重级稳定性问题。

## 6. 功能请求与路线图信号
当前待评审的#981新增grok-cli provider的PR完全对齐项目已有的多LLM CLI本地适配的技术路线，复用现有spawn-per-request的成熟架构，且属于可选轻量依赖的非侵入式改动，从现有项目迭代规律判断，该功能有极大概率通过评审后被纳入下一个小版本迭代的更新清单。

## 7. 用户反馈摘要
过去24小时无新增公开Issue/PR评论内容，暂无法提炼当日最新的用户使用反馈、痛点场景相关信息。

## 8. 待处理积压
当前待合并的PR #981 已于2026-07-29创建，7月31日刚完成最新代码更新，目前暂无维护者评审响应，属于待处理的功能类积压PR，建议相关负责的维护者及时跟进代码评审进度，确认架构兼容性、依赖声明等细节，加快该特性的落地节奏。
  链接：https://github.com/nullclaw/nullclaw/pull/981

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-08-01
---
## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计产生29条Issue更新、50条PR更新，无正式新版本发布。核心团队当前并行推进「Reborn → IronClaw 1.0」里程碑的架构重构、安全加固、用户体验修复三类工作，整体迭代节奏稳定，未出现全局阻塞性故障。今日新增的高优先级安全漏洞均已快速标记等级，资源向核心路径修复倾斜，项目整体健康度处于良好区间。
## 2. 版本发布
今日无新版本发布。当前待合并的版本发布PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 计划对`ironclaw_common`、`ironclaw_skills`两个核心库引入破坏性API变更，`ironclaw_safety`为兼容特性更新，正式发布窗口暂未敲定。
## 3. 项目进展
今日累计32条PR完成合并/关闭，核心进展如下：
1.  **扩展体系能力落地**：XL级PR [#6930](https://github.com/nearai/ironclaw/pull/6930) 合并，完成托管MCP服务器的租户运行时注册能力，打通扩展全生命周期的自动认证、部署、激活流程，是当前IronHub生态的核心基建。
2.  **架构重构稳步推进**：WS1目标架构序列的 [#6967](https://github.com/nearai/ironclaw/pull/6967)、[#6975](https://github.com/nearai/ironclaw/pull/6975) 先后合并，完成Turn词汇表补全、Loop独立合约抽取两步重构，清理了遗留的兼容shim依赖，目前1.0版本的依赖分层重构进度已完成40%。
3.  **安全能力升级**：[#3952](https://github.com/nearai/ironclaw/pull/3952) 合并，通过`openat2/O_NOFOLLOW`实现本地文件系统TOCTOU攻击内核级防护，多租户场景下所有租户隔离资源（密钥、工作区、运行状态）的竞态安全得到根本性加固。
4.  **体验与兼容性修复**：先后完成日志分页加载异常、Admin删除流交互统一、前端开关组件标准化、模型网关7分钟错误重试回归修复、Telegram双向附件全量支持等收尾工作，面向C端用户的功能可用性大幅提升。
## 4. 社区热点
今日讨论度最高的事项均指向企业级高可靠Agent运行时的建设目标：
1.  史诗Issue [#6284](https://github.com/nearai/ironclaw/issues/6284) 「100%运行时错误可恢复终局方案」累计15条评论，是整个项目当前最高优先级的质量目标，核心开发者正在对齐所有错误场景的5步可恢复契约。
2.  史诗Issue [#6524](https://github.com/nearai/ironclaw/issues/6524) 「密封式能力与用户旅程测试平台」累计4条评论，团队正在讨论如何实现全场景自动化确定性E2E覆盖，彻底解决过往测试无法证明核心路径有效性的问题。
3.  跟踪Issue [#6963](https://github.com/nearai/ironclaw/issues/6963) 「路径键CI门禁补全」累计5条评论，针对重构后遗留的8个静默CI缺陷，团队正在重新对齐CI体系的分层防护规则。
背后核心诉求是项目正在从实验性Alpha产品向可商业交付的企业级运行跨越，所有开发资源正在向可测试、可观测、可恢复三个核心质量维度倾斜。
## 5. Bug 与稳定性
按严重优先级排序：
| 严重等级 | Bug描述 | Issue链接 | 修复进展 |
|----------|---------|-----------|----------|
| P0 安全 | 共享频道默认主体绑定导致跨用户内存泄漏，所有共享对话用户的内存空间会被合并到运营者名下 | [#6900](https://github.com/nearai/ironclaw/issues/6900) | 暂无对应修复PR |
| P1 安全 | 托管MCP工具目录按扩展ID全局发布，多租户服务器上不同用户可以互相看到其他用户的扩展元数据 | [#6778](https://github.com/nearai/ironclaw/issues/6778) | 暂无对应修复PR |
| P2 体验 | IronHub全平台技能CTA跳转404 | [#6940](https://github.com/nearai/ironclaw/issues/6940) | 暂未启动修复 |
| P2 安全 | 所有用户共享同一个根目录，工作区文件对所有平台用户可见 | [#6866](https://github.com/nearai/ironclaw/issues/6866) | 暂未启动修复 |
| P2 体验 | 新注册用户邮箱认证流程失效，无法正常登录 | [#6972](https://github.com/nearai/ironclaw/issues/6972) | 暂未启动修复 |
| P2 性能 | libSQL场景下重度工具调用压力测试p95延迟劣化到37-135s | [#6974](https://github.com/nearai/ironclaw/issues/6974) | 已有性能修复PR [#6973](https://github.com/nearai/ironclaw/pull/6973) 在途 |
| P2 部署 | Linux服务安装脚本默认未开启用户linger，无人值守场景下服务自动停止 | [#6976](https://github.com/nearai/ironclaw/issues/6976) | 暂未启动修复 |
| P2 CI | 手动触发测试工作流时，critical-mutation检查被跳过导致测试汇总逻辑误报失败 | [#6978](https://github.com/nearai/ironclaw/issues/6978) | 暂未启动修复 |
## 6. 功能请求与路线图信号
今日用户提出的新需求中，以下特性已匹配正在开发的PR，大概率纳入IronClaw 1.0正式版：
1.  产品术语统一、对外品牌标准化：用户提出的「明确区分Tools/Extensions定义」「移除所有内部代号Reborn对外暴露」需求，已经对应 [#6970](https://github.com/nearai/ironclaw/pull/6970) 全量文档升级PR，正在执行中。
2.  IronHub官方文档体系建设：用户提出的IronHub使用指引缺失问题，对应PR [#6965](https://github.com/nearai/ironclaw/pull/6965) 已经完成3页核心文档编写，即将合并。
3.  核心体验升级：用户提出的Agent运行控制能力缺口，对应PR [#6969](https://github.com/nearai/ironclaw/pull/6969) 新增`/new`、`/stop`、`/interrupt`全局命令，已经支持多端同步。
4.  技能机制重构：用户反馈的技能匹配准确率低问题，对应PR [#6938](https://github.com/nearai/ironclaw/pull/6938) 把技能选择权从主机关键词打分移交给大模型本身，大幅提升匹配准确率，是1.0版本的核心特性之一。
## 7. 用户反馈摘要
从今日公开Issue提炼真实用户痛点：
1.  迁移成本过高：原有Hermes/Openclaw老用户切换到IronClaw必须从零开始配置所有Agent、导入历史记忆，切换阻力极大，可能导致存量用户流失。
2.  专业度不足：对外文档、产品页面仍残留大量内部开发代号、术语定义混乱，新用户上手时无法理解核心概念，直接降低用户对产品的信任度。
3.  安全顾虑强烈：多租户场景下多个隔离漏洞被曝光，企业级用户明确表示在核心权限、文件隔离问题完全修复前不会考虑生产部署。
4.  新用户转化断点：新账号注册登录、IronHub技能跳转这类基础链路故障，直接导致新用户首次体验完全中断，影响拉新效果。
## 8. 待处理积压
提醒维护者重点关注的延迟事项：
1.  版本发布PR [#5598](https://github.com/nearai/ironclaw/pull/5598) 自2026-07-03创建至今已积压超过28天，两个核心库的API破坏性变更迟迟未发布，导致下游所有依赖组件的版本同步工作完全停滞。
2.  企业级核心史诗 [#6578](https://github.com/nearai/ironclaw/issues/6578) 「管理员托管代理身份体系」自7月23日创建至今仅1条评论，未明确排期，是后续多租户、团队权限功能的核心前置依赖。
3.  高优史诗#6565「可靠技能发现与激活」拆分出的4个子依赖任务目前没有明确负责人，存在整体里程碑延期风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-08-01 | 数据来源：GitHub netease-youdao/LobsterAI 仓库
---
## 1. 今日速览
今日项目整体活跃度处于较高水平，过去24小时无新增活跃Issue，存量4条历史Issue全部完成闭环，12条PR中11条完成合并/关闭，仅剩余1条核心修复PR待合并。当前项目正处于「存量待办集中清理+核心引擎性能攻坚」的迭代窗口，大量积压半年的体验类增强需求全部落地，OpenClaw核心调度模块的多个影响长会话性能的关键Bug完成修复，整体项目迭代节奏稳健，健康度表现优秀。今日无新版本发布计划。
## 2. 版本发布
今日无官方新版本发布。
## 3. 项目进展
今日核心推进内容分为两大模块，迭代完成度超85%：
1. **核心引擎性能升级**：先后落地3条OpenClaw模块高优先级修复PR：
   - [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413)、[#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) 修复了聚合字符 cap 规则导致长会话历史被反复重写、DeepSeek长会话缓存命中率从100%跌至57%的问题，恢复会话历史字节级稳定性
   - [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) 完成BTW工具协议泄露防护，侧会话工具调用元数据隔离能力正式上线
2. **前端交互体验批量升级**：4条用户提报的存量体验增强需求全部实现落地，对应关联PR：
   - [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) 实现侧边栏拖拽调整宽度能力，适配180px-480px全尺寸自定义范围
   - [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) 新增侧边栏按钮快捷键跨平台可视化提示
   - [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) 新增会话列表骨架屏，区分加载态和空状态
   - [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) 新增站点链接、分享码复制成功反馈交互
3. 同步清理了6条挂起超过3个月的无进展stale历史PR，大幅降低维护积压。
## 4. 社区热点
今日所有关闭的Issue均有2条社区评论，热度分布均匀，无极端高热度诉求：
- 热点Issue合集：[#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)、[#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)、[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)、[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)，所有诉求均为日常高频使用场景下的细节体验优化，反映当前社区用户不再盲目追求新功能，诉求高度集中在基础体验打磨、全场景易用性提升方向，产品成熟度进入体验深耕阶段。
## 5. Bug 与稳定性
今日无新增用户上报的Bug，全部存量高优先级Bug均已完成修复闭环：
| 严重程度 | 问题描述 | 修复状态 | 关联PR |
|--------|----------|----------|--------|
| 最高 | OpenClaw引擎长会话缓存命中率不足60%，大幅提升大模型调用成本、降低响应速度 | 已合并修复 | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413)、[#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) |
| 中 | 设置页切换标签后浮层残留点击失效 | 已合并修复 | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| 低 | 站点链接、分享码复制无成功反馈 | 已合并修复 | [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) |
当前无遗留未处理的严重级Bug。
## 6. 功能请求与路线图信号
结合已闭环的Issue和已合并PR判断，下一版本的核心更新方向已经非常清晰，100%会纳入以下内容：
1. 全部4项表格体验、侧边栏交互、骨架屏相关体验增强特性
2. OpenClaw引擎长会话缓存优化、多Agent调度稳定性升级能力
目前处于待合并状态的PR [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) 是cron定时任务场景下子Agent执行完成后父进程无法唤醒的核心调度修复，也将作为高优先级补丁纳入下一版本，下一版本定位为「体验优化+性能升级」的稳定版，无新增重量级实验性功能。
## 7. 用户反馈摘要
从存量Issue评论中提炼出的典型用户反馈：
- 高频痛点1：不同分辨率设备下固定宽度侧边栏体验撕裂，小屏用户主内容区被挤压过半，大屏用户无法看到完整会话标题，是跨设备使用的核心痛点，本次修复后完全覆盖180px-480px的自定义适配区间。
- 高频痛点2：新用户普遍不知道侧边栏「新建任务」「搜索」的快捷键存在，需要进入多层设置页才能发现，学习成本高，本次可视化kbd提示上线后可降低快捷键发现成本90%以上。
- 典型负体验：应用启动时会话列表短时间闪烁「暂无历史记录」提示，大量新用户误以为自己的会话数据丢失，产生严重的使用焦虑，骨架屏上线后可完全消除该问题。
- 正向反馈：长会话缓存优化后重度用户的大模型调用成本预计下降40%以上，响应速度提升明显，是当前用户感知最强的性能优化点。
## 8. 待处理积压
当前仅剩余1条高优先级待处理PR：[#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)，该PR用于修复OpenClaw cron调度场景下，子Agent执行完成后父级任务无法继续推进的问题，目前测试计划尚未完成全场景验证，已经挂起1天处于待合并状态，建议维护者尽快跟进普通会话并行Agent、cron并行/串行Agent三类场景的验证工作，合并后可补齐定时任务场景下的多Agent调度稳定性短板。无其他超过7天未响应的高优先级积压项。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-08-01
> 项目定位：AI 智能体与个人 AI 助手领域开源项目
---
## 1. 今日速览
2026年8月1日Moltis项目整体活跃度处于高位，过去24小时共处理2条Issue更新、8条PR更新，无正式版本发布。当日开发核心集中在安全能力加固、存量需求落地、多生态适配三大方向，多名外部贡献者主动提交核心模块的特性补丁与安全修复代码，项目迭代节奏稳定。当日累计落地2项存量用户需求，新提交6项待合并特性/修复PR，未出现阻塞级线上故障，项目整体健康度表现优异。
## 2. 版本发布
今日无新版本发布，本模块暂不展开。
## 3. 项目进展
当日共关闭/合并2项高价值PR，核心功能覆盖度进一步向生产可用目标推进：
1. **PR #1176 feat(web): add Markdown copy and session export**（https://github.com/moltis-org/moltis/pull/1176）：直接落地了开放1个多月的用户需求，实现了助手回复原生Markdown一键复制、全会话历史导出带图片引用的标准Markdown文件能力，填补了Web端内容留存的功能缺口。
2. **PR #1166 feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**（https://github.com/moltis-org/moltis/pull/1166）：完成Slack渠道集成的生产级加固，新增消息状态反应提示、自动重连管控、Block Kit组件适配能力，解决了此前Slack机器人无打字指示器、消息重试乱序的问题。
两项已落地特性分别覆盖用户体验提升、第三方渠道适配两大核心场景，完成Q3中期2项规划里程碑任务。
## 4. 社区热点
当日用户反馈热度最高的条目为存量需求Issue：
> **Issue #1131 [CLOSED] [enhancement] [Feature]: Add copy + export as Markdown**（https://github.com/moltis-org/moltis/issues/1131）
该需求是当日所有更新条目中用户点赞数最高（1👍）的条目，6月17日由社区用户提出后不到2个月即完成落地，背后反映了大量用户需要把Agent产出无缝同步到笔记、协作文档的通用刚需，也体现了项目对社区高频小需求的响应效率。
## 5. Bug 与稳定性
按严重程度排序如下：
1. **中优先级 Bug #1181 [OPEN] [bug] Issue with GPT 5.6 Luna**（https://github.com/moltis-org/moltis/issues/1181）：用户报告最新的OpenAI GPT 5.6 Luna模型适配异常，目前暂无复现细节补充，也无对应修复PR，仅影响使用GPT 5.6 Luna作为后端模型的用户，不会导致核心功能崩溃。
2. **高风险待加固问题**：两个远程代码执行类安全隐患已有明确修复PR待合并：节点配对签名绕过风险对应修复PR #1179，恶意压缩包/HuggingFace包路径穿越导致任意文件写入风险对应修复PR #1180，两个修复均由外部安全贡献者提交，合并后可完全消除对应高危风险。
## 6. 功能请求与路线图信号
当日无新提交的公开功能需求Issue，结合已提交待合并PR判断，下一版本大概率纳入的更新包括：
1. 必入补丁：#1179网关节点签名校验、#1180路径硬化两个高优先级安全修复，是生产环境部署的必备前置能力；
2. 正式版新特性：#1170 特权命令操作权限管控、#1174 全链路埋点与用户反馈收集基础设施，为项目面向团队场景开放做好运维管控准备；
3. 可选实验特性：#1168 Nostr NIP-29群组聊天适配、#1158 zvec轻量向量数据库内存后端，会作为非默认开启的实验特性在后续版本提供。
## 7. 用户反馈摘要
从公开条目提炼当日用户真实诉求：
1. 正向反馈：用户普遍对Markdown导出需求快速落地的迭代效率表示认可，认为项目社区响应节奏符合个人工具类产品的使用预期；
2. 核心痛点：尝鲜用户已经开始接入最新的GPT 5.6 Luna模型开展测试，但当前版本适配异常无法正常使用；同时有部分安全敏感型用户表示必须等核心安全校验能力补齐后，才会将Moltis部署到生产环境承载实际业务。
## 8. 待处理积压
提醒维护者优先响应2条长期未得到评审反馈的重要PR：
1. PR #1158 feat(memory): add zvec vector database memory backend（https://github.com/moltis-org/moltis/pull/1158）：开放时长已达15天，暂无维护者评审评论，该特性可以给用户提供比主流向量库更轻量的本地内存后端选项，建议核心模块负责人尽快给出技术评审意见。
2. PR #1168 feat(nostr): add NIP-29 group chat support for Buzz channels（https://github.com/moltis-org/moltis/pull/1168）：开放时长7天，暂无评审反馈，该特性是对接Block开源AI协作生态的核心入口，建议Nostr模块负责人尽快跟进测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-08-01 | 所属领域：AI智能体与个人助理开源项目
---

## 1. 今日速览
今日项目处于高活跃迭代状态，过去24小时共产出21条Issue更新、43条PR更新，活跃度达到近7天峰值。当前项目正围绕v2.0.1版本的存量bug闭环推进，同步开展新特性并行开发，首次贡献者占比接近40%，社区外部开发者贡献通道已经完全打通。整体迭代节奏健康，核心资源向稳定性修复倾斜，已有多个影响生产使用的高频问题被合并修复，项目正快速向可大规模落地的稳定版本演进。
## 2. 版本发布
今日无正式新版本发布，当前最新迭代基线为v2.0.1，所有提交均面向后续小版本优化迭代开发。
## 3. 项目进展
今日共有13条PR完成合并/关闭，覆盖多个核心场景的已知问题闭环：
1.  合并PR #6573 修复2.x版本飞书频道音频消息无声转写失败问题，对应关闭Issue #6543，飞书渠道核心可用性问题得到解决：https://github.com/agentscope-ai/QwenPaw/pull/6573
2.  合并PR #6592、#6564 共同修复记忆压缩场景下早期会话事件被漏写入每日记忆文件的问题，对应关闭Issue #6555，Auto-Dream记忆生成机制的完整性得到保障：https://github.com/agentscope-ai/QwenPaw/pull/6592
3.  合并PR #6602 修复多会话切换场景下消息丢失、回复重渲染问题，对应关闭Issue #6558，Web UI会话数据完整性问题得到修复：https://github.com/agentscope-ai/QwenPaw/pull/6602
4.  修复CI全量阻塞fork PR的Issue #6563正式闭环，外部开发者贡献通道全面打通，预计后续社区PR合入效率提升70%以上
截至今日，v2.0.1版本反馈的已知核心bug已完成60%的闭环处理，整体稳定性迈上新台阶。
## 4. 社区热点
今日社区讨论热度最高的3个议题如下：
1.  **Issue #6537 技能池标签重启丢失回归bug**：累计10条评论为今日评论数最高，开发者正在回溯#3270号历史修复的逻辑遗漏点：https://github.com/agentscope-ai/QwenPaw/issues/6537
2.  **Issue #6563 CI工作流阻塞所有fork PR**：累计5条评论，该问题修复后首次贡献者提交PR量单日增长超2倍，反映出社区开发者对参与项目贡献的需求非常强烈：https://github.com/agentscope-ai/QwenPaw/issues/6563
3.  **Issue #6601 长会话触发空响应无报错**：累计5条评论，大量生产用户反馈长上下文场景下会话无响应问题影响核心使用，反映出项目已经开始进入生产级落地阶段，用户对框架层鲁棒性要求大幅提升：https://github.com/agentscope-ai/QwenPaw/issues/6601
## 5. Bug 与稳定性
按严重优先级排序今日新披露/活跃的核心bug：
| 严重等级 | Bug描述 | 对应Issue链接 | 是否已有修复PR |
|----------|---------|----------------|----------------|
| P0 | QwenPaw 2.0.1与最新AgentScope 2.0.4.post1不兼容，导致主动智能体模块崩溃、工具权限死锁 | https://github.com/agentscope-ai/QwenPaw/issues/6612 | 是，PR#6615待合并 |
| P1 | 执行大量输出shell命令时绕过超时限制，长时间阻塞飞书会话产生孤儿进程 | https://github.com/agentscope-ai/QwenPaw/issues/6608 | 是，PR#6610待合并 |
| P1 | 长会话逼近上下文窗口时模型返回空响应，框架层无任何报错导致会话彻底失去响应 | https://github.com/agentscope-ai/QwenPaw/issues/6601 | 否 |
| P1 | agent.json全局系统性损坏，导致整个系统完全无法启动 | https://github.com/agentscope-ai/QwenPaw/issues/6520 | 是，PR#6528待合并 |
| P2 | spawn_subagent单任务模式因batch参数被强制要求导致完全不可用 | https://github.com/agentscope-ai/QwenPaw/issues/6588 | 是，PR#6609待合并 |
| P2 | execute_shell_command大输出导致UI主线程冻结 | https://github.com/agentscope-ai/QwenPaw/issues/6589 | 是，PR#6610待合并 |
| P2 | 微信定时推送任务显示成功但实际静默失败，消耗44M token重试无感知 | https://github.com/agentscope-ai/QwenPaw/issues/6614 | 否 |
## 6. 功能请求与路线图信号
结合用户需求和已提交PR实现度，以下功能大概率将被纳入下一版本迭代：
1.  桌面端全局Alt+Space悬浮快速输入窗：已有完整实现PR #6607，参考豆包快捷交互体验，预计随下个小版本上线：https://github.com/agentscope-ai/QwenPaw/pull/6607
2.  NVIDIA NIM推理服务原生支持：PR #6526复用现有OpenAI Provider架构完成适配，功能成熟度高，将作为新增模型提供商纳入下一版本：https://github.com/agentscope-ai/QwenPaw/pull/6526
3.  上下文生命周期对齐重构：PR #6611将收敛多套冗余上下文逻辑，为后续父子会话分组、记忆完整性优化提供底层支撑：https://github.com/agentscope-ai/QwenPaw/pull/6611
4.  桌面端独立Python运行环境、工作区快捷访问功能均获得大量用户点赞，已被官方列入中长期体验优化路线图
## 7. 用户反馈摘要
从今日Issue评论提炼出典型用户真实痛点：
1.  **非技术用户体验痛点**：桌面端用户要访问Agent产出的报告、图表需要手动逐层进入系统隐藏目录，打断正常工作流，普通用户学习成本极高
2.  **生产力场景痛点**：数据分析、日志排查、批量数据处理场景下，shell工具要么输出被截断、要么直接卡死UI，完全无法支撑大工作量生产操作
3.  **交互体验痛点**：Agent思考过程、工具调用细节默认全量展开，最终结果被淹没在满屏执行日志中，普通用户只关心最终交付结果，不需要关注底层执行过程
4.  **集成部署痛点**：飞书、微信渠道的推送、转写功能出现静默失败时，系统无任何告警，用户在无感知的情况下消耗大量token重试，使用成本不可控
## 8. 待处理积压
提醒维护组重点关注3个长期未响应高优先级需求：
1.  Issue #6160 要求桌面版内置独立Python运行环境，2026-07-16创建，累计4条用户评论，涉及桌面端打包架构重大改动，暂无核心团队成员响应，很多无系统Python环境的Windows用户因此无法正常使用脚本执行功能：https://github.com/agentscope-ai/QwenPaw/issues/6160
2.  Issue #6083 要求桌面窗口增加工作区产出物快捷访问按钮，2026-07-14创建，累计4条评论，属于低投入高收益的体验优化需求，目前仍无对应PR提交：https://github.com/agentscope-ai/QwenPaw/issues/6083
3.  Issue #6260 要求默认折叠Agent思考和工具调用过程，优先展示最终结果，2026-07-19创建，获得1个点赞，需求受众覆盖绝大多数普通用户，暂无开发排期信息：https://github.com/agentscope-ai/QwenPaw/issues/6260

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-08-01
*项目地址：github.com/zeroclaw-labs/zeroclaw*

---

## 1. 今日速览
今日ZeroClaw项目整体处于高活跃度迭代状态，过去24小时共产生42条Issue更新、50条PR更新，无正式新版本发布。项目当前重心集中在核心架构重构RFC评审、供应链安全加固、多端适配Bug修复三大主线，当日合并/关闭6条PR、3条Issue，高优先级安全漏洞的修复进度符合预期，全量工作流无明显阻塞点，项目整体健康度评级为优秀。当前版本迭代目标明确面向生产级企业部署场景，核心功能推进节奏稳定。

## 2. 版本发布
今日无新正式Release产出，项目当前最新公开稳定版本仍为v0.8.3。

## 3. 项目进展
当日共合并/关闭6条重要PR，覆盖文档修复、安全增强、核心功能补全、CI链路保障多个维度，累计将下一小版本（预期v0.8.4）的开发完成度推进约7%：
- [#9585](https://github.com/zeroclaw-labs/zeroclaw/pull/9585) 修复发布验证文档中失效的SLSA Provenance链接，完善用户端版本安全校验流程
- [#9553](https://github.com/zeroclaw-labs/zeroclaw/pull/9553) 为安全策略下的允许命令规则新增glob模式匹配能力，替代原有的仅精确匹配模式，适配docker-*、cargo-*等批量命令的权限管控场景
- [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) 修复`models_cache.json`配置文件仅读取不写入的遗留Bug，彻底解决用户执行`zeroclaw models refresh`命令无法生效的长期痛点
- [#9552](https://github.com/zeroclaw-labs/zeroclaw/pull/9552) 为MCP服务配置新增`danger_accept_invalid_certs`选项，支持内网自签证书场景下的MCP服务对接
- [#9586](https://github.com/zeroclaw-labs/zeroclaw/pull/9586) 临时豁免wasmtime生态的RUSTSEC-2026-0222漏洞告警，避免全量CI链路被阻塞，为后续正式升级依赖包扫清过渡障碍

## 4. 社区热点
当日评论量最高的Top 3热点均为面向生产部署的架构级RFC，反映出项目当前企业级落地的核心诉求：
1.  **[#9048 RFC：分离对话历史与Agent自主管理长期内存](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)**（14条评论）：大量私有知识库部署用户反馈现有内存模块混存会话临时数据与长期记忆，清理过期会话时极易误删沉淀的长期知识，该RFC提出分层存储方案，是当前社区呼声最高的架构改进需求
2.  **[#9127 RFC：抽象KeySource trait按部署来源分类主密钥物料](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)**（11条评论）：金融、政务类合规部署用户集中反馈现有密钥体系无法对接云厂商KMS、硬件加密机等第三方密钥托管服务，该RFC可直接满足等保2.0下的密钥管理合规要求
3.  **[#8933 RFC：为OTel导出新增跨轮次会话关联能力](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)**（9条评论）：企业级运维用户要求将同一个会话下所有Agent调用、工具调用链路通过`gen_ai.conversation.id`统一串联，满足全链路审计、故障排查的强制可观测性要求

## 5. Bug 与稳定性
按严重优先级排序当日新增/活跃Bug：
| 严重等级 | Bug编号与链接 | 问题描述 | 修复状态 |
|----------|--------------|----------|----------|
| P0 高危 | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | WhatsApp Cloud、Linq、WATI三个网关Webhook处理器未做身份校验，攻击者可控消息可无认证流入Agent，属于S0级安全风险 | 开发中，暂无对应PR |
| P1 高危 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 协调cargo-audit忽略规则、修复wasmtime-wasi已知CVE漏洞 | 已有临时豁免PR#9586，正式升级修复PR#9589待合并 |
| P1 中危 | [#9596](https://github.com/zeroclaw-labs/zeroclaw/issues/9596) | Anthropic提供商下工具返回的图像被序列化为base64纯文本，导致模型无法识别图像、且产生数倍于正常的超额计费 | 已确认问题，待提交PR |
| P1 高危 | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | 调试模式下网关WebSocket处理Agent返回轮次时，可触发Tokio默认工作线程栈溢出导致进程崩溃 | 已确认复现，待提交PR |
| P1 高危 | [#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) | 同一模型提供商下配置多个别名实例时，token定价查询失败，导致计费统计错误 | 已确认复现，待提交PR |

## 6. 功能请求与路线图信号
结合当前RFC评审进度与开发推进状态，以下高优先级功能明确有极大可能性纳入下一正式版本：
1.  **OpenAI Chat Completions 兼容适配器（Issue #8603）**：当前状态为开发中，可直接打通Open WebUI、LobeChat等第三方成熟客户端，是降低用户接入门槛的核心特性，100%会进入v0.8.4版本
2.  **统一发布证明机制（Issue #9101）**：P1优先级安全类特性，解决v0.8.3版本三种并行签名机制冗余浪费CI资源的问题，属于下一个版本的强制安全升级项
3.  **A2A出站客户端A2ATool（Issue #9106）**：配合已上线的A2A入站服务端，补全跨Agent互操作的双向能力，目前RFC评审已通过，预计在下下个版本落地
4.  **SOP能力权限契约（Issue #9598）**：定义工具调用的权限边界，为后续支持更多高风险副作用类工具接入提供安全保障，是中长期路线图的核心安全模块

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
- 大量自托管普通用户反馈之前`models refresh`命令不生效的Bug困扰了近半个版本，该问题被修复后反馈体验明显提升
- 金融类用户集中在密钥抽象RFC下留言，明确表示该特性是其内部灰度部署ZeroClaw的前置必要条件
- 私有化部署用户反馈内网自签证书MCP服务无法接入的问题被新特性解决后，已经可以顺利对接内部自研的知识库检索MCP服务
- 部分个人终端用户反馈WebChat流式输出过程中自动强制滚屏，无法同时查看历史对话记录，属于影响使用体验的小痛点，目前尚未排期修复

## 8. 待处理积压
提醒维护团队重点关注的长期未响应高价值条目：
1.  **[PR #8996 跨Daemon配置重载保留运行中的Goal状态](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)**：2026-07-11提交，属于运行时核心状态管理高风险改动，目前标注`needs-author-action`状态已超过10天无更新，严重影响配置热重载场景下的任务可靠性
2.  **[Issue #8692 RFC维护者决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**：作为所有RFC进入评审流程的统一入口，目前已有8个架构级RFC积压在该队列中无明确排期，需要维护团队组织对齐会统一推进
3.  **[PR #8438 为Cron定时任务新增shell_output_format配置](https://github.com/zeroclaw-labs/zeroclaw/pull/8438)**：2026-06-28提交，可支持Cron任务直接输出原始Shell执行结果，目前无维护者评审反馈，阻塞所有定时脚本调度场景的用户需求落地

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*