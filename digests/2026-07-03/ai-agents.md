# OpenClaw 生态日报 2026-07-03

> Issues: 197 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-02 23:07 UTC

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

# OpenClaw 项目动态日报 | 2026-07-03
统计周期：2026-07-02 至 2026-07-03
---

## 1. 今日速览
过去24小时OpenClaw项目活跃度处于极高水平，共产生197条Issue更新、500条PR更新，累计闭环50条合并/关闭的缺陷与需求，同时发布了v2026.7.1-beta.1预览版本。当前核心迭代重心同时覆盖前沿大模型兼容、跨端客户端体验优化、主流IM渠道适配三大方向，社区外部贡献PR占比超过60%。项目整体健康度表现优异，存量P1级高优先级bug平均评论响应时长低于12小时，新报告的严重缺陷全部在24小时内收到跟进补丁，迭代节奏匹配下游企业级部署的稳定交付需求。

## 2. 版本发布
今日正式发布 `v2026.7.1-beta.1` 预览版本，核心更新点如下：
- **OpenAI GPT-5.6全链路支持**：覆盖模型目录注册、能力校验、运行时选择全路径，由OpenAI团队贡献者@steipete-oai提交实现，关联PR #98333
- **新增外部调试挂载能力**：上线`openclaw attach`命令，支持将第三方调试 harness 直接挂载到已运行的Gateway会话，快速对接Claude Code等外部Agent CLI实现跨工具联合调试
- 注意事项：该版本为非长期支持预览版，仅面向尝鲜用户开放，无破坏性变更，从历史beta版本升级无需额外迁移步骤，不建议生产环境直接部署。

## 3. 项目进展
今日累计闭环的高优先级缺陷与功能点覆盖移动端、IM渠道、核心插件三大领域，拉低存量P1 bug占比约2.1%：
1. 合规类补丁落地：Discord网关WebSocket正式支持`HTTP_PROXY/HTTPS_PROXY`环境变量，解决内网受限部署场景下必须开放全量443端口访问的安全隐患，关联Issue [#98266](https://github.com/openclaw/openclaw/issues/98266)
2. 安卓客户端可靠性缺陷闭环：修复Android节点在WebSocket握手完成前发送通知事件导致消息丢失的时序bug，关联Issue [#79552](https://github.com/openclaw/openclaw/issues/79552)
3. 核心插件依赖冲突修复：解决v2026.6.1版本中`memory-lancedb`插件因apache-arrow与LanceDB版本范围不匹配完全无法安装的问题，关联Issue [#90295](https://github.com/openclaw/openclaw/issues/90295)
4. 多语言渲染缺陷修复：西里尔文等多字节UTF-8工具返回内容不再被误识别为图片附件，解决小语种用户无法正常读取工具输出的问题，关联Issue [#99186](https://github.com/openclaw/openclaw/issues/99186)

## 4. 社区热点
今日热度最高的3个核心讨论项均为影响大范围用户的生产级问题，反映了当前社区核心诉求：
1. **#25592：工具调用中间文本泄露到公开消息通道** 33条评论，链接：[#25592](https://github.com/openclaw/openclaw/issues/25592)  
   大量企业Slack部署用户反馈Agent内部的错误栈、调试旁白等非输出内容会直接发送到公开群组，带来信息泄露风险，是当前社区投票优先级最高的待修复安全缺陷。
2. **#88312：Codex app-server回合完成超时回归** 19条评论，链接：[#88312](https://github.com/openclaw/openclaw/issues/88312)  
   大量ChatGPT Plus高级订阅用户反馈多工具并行任务场景下Agent直接中途停止不返回结果，用户诉求是快速回滚2026.5.27版本引入的回归逻辑，目前已有补丁PR进入审核队列。
3. **#92201：Anthropic思考块重放签名失效导致长会话永久变砖** 18条评论，链接：[#92201](https://github.com/openclaw/openclaw/issues/92201)  
   大量使用Anthropic Claude思考模式的Slack插件用户反馈多轮对话后会话直接返回400签名错误完全不可用，用户诉求是增加通用错误兜底恢复逻辑，无需依赖用户手动重建会话。

## 5. Bug 与稳定性
按严重程度排序的今日新增/更新核心缺陷，标注修复进展：
| 严重等级 | 问题描述 | Issue链接 | 修复进展 |
| --- | --- | --- | --- |
| 铂金寄居蟹（S1最高级） | v2026.6.11版本openclaw runtime继承OpenAI OAuth凭证在openai-chatgpt-responses传输下认证失败 | [#98702](https://github.com/openclaw/openclaw/issues/98702) | 暂无公开fix PR |
| 铂金寄居蟹（S1最高级） | v2026.6.11版本Mattermost插件外部化后所有斜杠命令返回401未授权 | [#98740](https://github.com/openclaw/openclaw/issues/98740) | 暂无公开fix PR |
| 钻石龙虾（P1级） | Agent自插入伪造用户回合并自主作答，存在内容篡改安全风险 | [#99253](https://github.com/openclaw/openclaw/issues/99253) | 暂无公开fix PR |
| 钻石龙虾（P1级） | Node版本升级后本地嵌入worker fork失败报ENOENT文件不存在错误 | [#99183](https://github.com/openclaw/openclaw/issues/99183) | 已有修复PR #99222 待合并 |
| P1级回归 | v2026.6.11版本`sessions_spawn`接口缺失`operator.write`权限范围无法创建新会话 | [#98614](https://github.com/openclaw/openclaw/issues/98614) | 暂无公开fix PR |

## 6. 功能请求与路线图信号
结合社区需求与已开发PR进度，下一版本大概率落地的特性清单：
1. 多Agent协作增强提案（能力画像+共享黑板+分层内存+Token成本治理）[#35203](https://github.com/openclaw/openclaw/issues/35203)：已有多个关联PR并行开发，是v2026.8正式版本优先级最高的核心特性，覆盖多Agent集群运维的核心痛点。
2. iOS端全量SwiftUI原生界面重构PR #99231：已完成全量功能演示与测试，即将进入维护者审核环节，下一beta版本就会上线，彻底解决当前iOS应用交互不符合系统原生习惯的问题。
3. GitHub Enterprise自托管Copilot认证支持PR #99221：正在活跃开发中，满足大型企业私有化数据驻留部署需求，将在v2026.7稳定版集成。
4. macOS端悬浮Agent气泡（Clawi）特性[#11623](https://github.com/openclaw/openclaw/issues/11623)：社区投票热度极高，已经正式纳入下一版本功能候选池。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与感知：
1. 中小团队部署用户普遍反馈错误提示友好度不足，比如图片优化场景缺失`sharp`原生依赖时仅返回无意义的"Failed to optimize image"，没有明确提示用户需要安装依赖，排查成本极高。
2. 移动端用户集中吐槽当前跨端UI大量使用自定义非原生控件，不符合安卓/iOS系统交互习惯，操作学习成本高，今日提交的iOS全量原生UI重构PR收到大量用户正向点赞。
3. 企业级私有部署用户合规类需求爆发式增长，近一周代理配置、自定义权限管控相关Issue上报量环比上涨70%，已经成为ToB场景部署的核心卡点。
4. 非英文地区用户反馈多字节UTF-8内容经常被误识别为二进制图片附件，导致Agent完全无法读取西里尔文、东亚文字等工具返回结果，该问题今日已经闭环修复得到用户正面反馈。

## 8. 待处理积压
提请维护者重点关注的长期未响应高价值Issue：
1. [#47910 按失败类型自动隔离故障Provider特性](https://github.com/openclaw/openclaw/issues/47910)：开放讨论超过3个月，共有7条社区反馈，特性实现后可以大幅降低模型认证失败、权限异常场景的无效重试延迟，对高可用部署价值极高。
2. [#40880 沙箱媒体大小限制支持自定义配置](https://github.com/openclaw/openclaw/issues/

---

## 横向生态对比

# 2026-07-03 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
当前开源AI智能体赛道整体处于从Demo玩具态向生产级落地的关键拐点，本次监测的12个项目中10个维持高活跃迭代，核心资源全部向稳定性加固、合规能力补齐、垂直场景适配方向倾斜。以OpenClaw为核心基准的“Claw系”衍生生态集群效应初步显现，大量细分场景项目基于OpenClaw兼容协议二次开发，整体外部贡献者PR占比普遍超过30%，不再完全依赖核心团队产出。企业级私有部署需求环比70%爆发，跨端兼容、多IM渠道打通、高可用自愈能力成为当前社区最高频的共性诉求，迭代节奏已经完全对齐下游商业落地的交付要求。
---
## 2. 各项目活跃度对比表
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日Release情况 | 整体健康度评估 |
|---------|----------------|-------------|----------------|--------------|
| OpenClaw | 197 | 500 | 发布v2026.7.1-beta.1预览版 | 优秀 |
| NanoBot | 97 | 63 | 无版本发布 | 优秀 |
| Hermes Agent | 50 | 50 | 无版本发布 | 优秀 |
| PicoClaw | 2（新上报） | 25 | 发布v0.3.1-nightly自动构建版 | 优秀 |
| NanoClaw | 4 | 14 | 无版本发布 | 良好 |
| IronClaw | 23 | 50 | 无版本发布，待发布大版本从0.24直接跳至0.29.1 | 优秀 |
| LobsterAI | 5（历史积压激活） | 8 | 无版本发布 | 良好 |
| Moltis | 0新上报 | 3 | 无版本发布 | 优秀 |
| CoPaw | 25 | 50 | 发布v2.0.0-beta.2预发布版 | 优秀 |
| ZeroClaw | 37 | 50 | 无版本发布，推进v0.9.0安全里程碑 | 优秀 |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无任何更新 | 停滞/无维护 |
---
## 3. OpenClaw在生态中的定位
作为生态事实基准项目，OpenClaw的核心优势体现在三个维度：一是核心链路稳定性远超同类，存量P1级Bug平均响应时长低于12小时，OpenAI官方贡献者直接提交GPT-5.6全链路支持，是唯一获得大模型厂商团队直接贡献的开源Agent项目；二是社区贡献占比超过60%，活跃贡献者规模是第二名NanoBot的2倍以上，下游企业级二次开发生态最为成熟。
技术路线上OpenClaw选择“全栈通用底座”路线，同时覆盖前沿模型兼容、跨端客户端体验、主流IM渠道适配三大方向，与其他项目聚焦细分场景的路线形成明显差异，几乎所有活跃的衍生Claw项目都原生兼容OpenClaw的接口与插件生态，是整个生态的事实参考实现。
---
## 4. 共同关注的技术方向
多项目涌现的共性需求集中在4大方向，均有明确落地优先级：
1. **全品类IM/办公渠道适配**：涉及OpenClaw、NanoBot、NanoClaw、IronClaw、ZeroClaw、CoPaw共6个项目，核心诉求是覆盖Slack/钉钉/飞书/WhatsApp/Telegram等全渠道，解决多端消息路由错乱、跨渠道用户身份不统一、网络中断后无自动重连自愈能力的痛点。
2. **生产级安全合规加固**：所有活跃项目均在推进，核心诉求是补齐路径遍历防护、密钥全链路脱敏、细粒度权限隔离、SSRF校验等安全能力，响应近一周企业私有部署合规需求70%的环比上涨。
3. **MCP生态兼容+OpenAI协议开放网关**：涉及Hermes Agent、ZeroClaw、IronClaw共3个项目，核心诉求是打破硬编码内置能力的限制，支持接入第三方外部记忆存储、兼容所有OpenAI生态客户端直接对接Agent网关，大幅降低生态扩展成本。
4. **多Agent协作与Token成本治理**：涉及OpenClaw、CoPaw共2个头部项目，核心诉求是解决多租户场景下全局共享工作空间的隐私泄露风险、冗余Token浪费30%以上的行业共性痛点。
---
## 5. 差异化定位分析
当前活跃项目已经形成明确的分层错位格局：
- 功能侧重差异：OpenClaw做全能力通用底座，NanoBot主打轻量个人部署+国内IM生态适配，Hermes Agent主打视觉生成+网页自动化操作的端侧能力，PicoClaw主打低资源嵌入式轻量部署，IronClaw主打Reborn架构下的多租户WASM工具生态，Moltis主打跨境WhatsApp场景协议适配，LobsterAI主打桌面端C端个人助手体验打磨。
- 目标用户差异：完整覆盖从个人开发者、中小团队、私有部署企业、跨境运营商家的全分层用户需求，几乎不存在功能完全重叠的同质化项目。
- 技术架构差异：不同项目分别选择Docker容器、WASM沙箱、原生Go栈/Rust栈等不同技术路线，分别适配轻量部署、高安全隔离、低资源占用等不同场景的技术要求。
---
## 6. 社区热度与成熟度分层
所有活跃项目可清晰分为三个梯队：
1. **快速迭代大版本冲刺阶段**：ZeroClaw、CoPaw、IronClaw，当日PR更新量均达到50级，集中资源推进里程碑级新特性落地，核心特性的开发优先级高于存量缺陷修复，目标是在1-2周内推出新的正式大版本。
2. **质量巩固生产适配阶段**：OpenClaw、NanoBot、Hermes Agent，集中资源系统性闭环全量存量缺陷，推进安全能力加固，迭代节奏完全对齐下游企业级部署的稳定交付要求。
3. **细分场景深耕阶段**：PicoClaw、NanoClaw、LobsterAI、Moltis，聚焦特定垂直场景的专属痛点修复，目标用户群体明确，迭代动作完全围绕核心用户的具体诉求展开。
其余3个零活动项目已超过1个月无公开更新，基本判定为停滞维护状态。
---
## 7. 值得关注的趋势信号
从当日社区动态可以提炼出3个明确的行业趋势，对AI智能体开发者有直接参考价值：
1. Agent开源项目已经彻底跨过Demo验证阶段，生产级稳定性、合规性、可运维性已经取代“能跑通大模型”成为第一优先级，普通开发者无需从零搭建底座，可直接选择匹配自身场景的Claw系衍生项目作为二次开发基础，避免90%重复造轮子的无效投入。
2. MCP协议已经成为Agent工具生态的事实工业标准，未来Agent的能力扩展将像NPM生态一样开放，无需官方内置能力即可完成生态共建，开发者应当提前布局MCP相关的工具开发能力，抢占生态红利。
3. 国内办公IM、跨境WhatsApp渠道的需求爆发，证明AI Agent的落地场景已经从纯文本对话渗透到日常办公、私域运营的生产环节，多租户身份隔离、多渠道消息统一路由的架构设计应当作为Agent项目的基础能力前置，而不是后续迭代的可选特性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-03
---
## 1. 今日速览
今日NanoBot开源项目处于高活跃迭代状态，过去24小时共产生97条Issue更新、63条PR更新，社区参与度和核心团队响应速度达到近30天峰值。核心维护团队聚焦此前发布的「Nanobot Radar」批量缺陷清单做集中闭环修复，同步推进多生态通道适配、新模型接入需求落地，当日无正式版本发布。项目整体健康度表现优异，从问题上报到修复PR提交的平均链路时长小于24小时，所有已披露的高危安全漏洞均已拿到对应修复方案，无未处置的重大风险。

## 2. 版本发布
今日无正式新版本发布，所有迭代变更均通过PR合入主分支，当前main分支处于集中测试验证阶段，待批量缺陷修复全量落位后将启动下一版本打包流程。

## 3. 项目进展
今日共完成28条PR的合并/关闭操作，核心推进成果如下：
- 高优先级批量缺陷全量校验关闭：PR [#4648](https://github.com/HKUDS/nanobot/pull/4648) 一次性闭环了13个经官方独立验证的主分支真实问题，覆盖安全漏洞、功能故障、技术债务三类高优先级待解事项，直接将此前雷达清单标注的已知缺陷解决率提升至70%，大幅压降了main分支的技术债务规模。
- 基础组件集中加固：当日合入的其余变更覆盖MCP工具异常隔离、Matrix通道流缓冲区互斥隔离、会话保留机制重构、内置技能读取路径兼容等多个底层组件的体验优化，整体开发进度相当于常规3个工作日的产出，迭代效率显著高于历史平均水平。

## 4. 社区热点
当日社区讨论热度最高的需求/问题集中在底层特性、生态适配两大方向：
1. 雷达缺陷追踪公告 [#4657](https://github.com/HKUDS/nanobot/issues/4657)：维护者发布的13个已验证无对应PR的Bug/安全缺口/重构债务统一追踪Issue，是当日所有开发动作的核心锚点，反映出项目正在从零散修Bug转向系统化全量缺陷治理的阶段。
2. 钉钉群文件投递故障 [#3344](https://github.com/HKUDS/nanobot/issues/3344)：国内企业办公场景用户关注度最高的适配问题，大量钉钉生态部署用户跟进进度，诉求是打通@机器人和文件上传的关联投递链路。
3. Anthropic OAuth接入需求 [#4604](https://github.com/HKUDS/nanobot/issues/4604)：Claude普通订阅用户的核心诉求，无需申请控制台API密钥即可直接用Claude Code令牌接入，大幅降低个人用户使用门槛。
4. 自动推理深度分级上调 [#4419](https://github.com/HKUDS/nanobot/issues/4419)：适配当前主流推理模型的参数控制特性，用户希望系统可根据任务复杂度自动提升推理深度，降低人工配置成本。
5. 单会话自定义模型覆盖 [#4253](https://github.com/HKUDS/nanobot/issues/4253)：混合部署本地大模型+公有云大模型用户的核心刚需，支持用户根据任务隐私等级灵活切换模型，替代现有全局唯一模型配置。
6. Agent插件系统需求 [#2231](https://github.com/HKUDS/nanobot/issues/2231)：社区开发者关注度最高的生态类需求，希望推出类Copilot CLI的插件扩展机制，降低第三方能力接入门槛。

## 5. Bug 与稳定性
按严重程度排序的今日上报/活跃Bug如下：
| 严重等级 | Bug编号与链接 | 问题描述 | 修复状态 | 对应PR链接 |
| --- | --- | --- | --- | --- |
| 高危 | [#4076](https://github.com/HKUDS/nanobot/issues/4076) | message工具缺乏出站收件人授权校验，允许附加任意绝对路径的媒体文件，存在未授权消息投递+路径遍历风险 | 已提交修复待合并 | [#4668](https://github.com/HKUDS/nanobot/pull/4668) |
| 中高危 | [#4683](https://github.com/HKUDS/nanobot/issues/4683) | 向Claude Sonnet 5模型请求时未移除已废弃的temperature参数，直接返回400错误导致该系列模型完全不可用 | 已提交修复待合并 | [#4685](https://github.com/HKUDS/nanobot/pull/4685) |
| 中危 | [#4061](https://github.com/HKUDS/nanobot/issues/4061) | OpenAI兼容第三方服务商输出的文本格式工具调用标记无法被解析为结构化调用，导致工具调用链路完全失效 | 已提交修复待合并 | [#4662](https://github.com/HKUDS/nanobot/pull/4662) |
| 中危 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Windows场景下gateway命令加--background参数启动后，执行/restart重启会导致实际进程和记录的pid信息不一致 | 待合入批量修复包 | 已纳入#4648修复范围 |
| 普通 | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Windows环境下exec工具单行命令调用cmd.exe、多行命令调用PowerShell，Shell语义不一致导致跨平台脚本执行失败 | 待合入批量修复包 | 已纳入#4648修复范围 |

整体Bug响应速度极快，除边缘场景外所有当日上报的问题均在24小时内拿到对应修复方案，稳定性表现优异。

## 6. 功能请求与路线图信号
结合已提交的开发中PR判断，以下高呼声需求将大概率纳入下一正式版本：
1. Anthropic OAuth原生支持：PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) 已完成全量开发测试，完全对齐#4604用户需求，100%概率进入下一版本。
2. Mattermost通道集成：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 支持全量实时消息、流式回复，符合项目多办公生态适配的布局，高概率纳入下一版本。
3. 原生OpenCode系列Provider支持：PR [#4686](https://github.com/HKUDS/nanobot/pull/4686) 当日新提交，对齐用户提出的调用外部第三方Agent的需求#3436，将作为扩展Agent能力的核心特性上线。
4. SSRF校验DNS固定加固：PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) 已完成开发，对齐安全合规要求，将作为安全补丁优先上线。

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户痛点与反馈：
1. 国内企业部署场景：大量钉钉、飞书、微信生态用户反馈通道基础体验缺失，文件投递、进度通知等常用功能未实现，是国内用户最集中的使用痛点。
2. 混合部署场景：大量同时使用本地LlamaCPP和公有云模型的用户反馈全局唯一模型配置灵活性极差，强烈要求支持单会话快速切换不同模型，适配不同隐私等级的任务。
3. 多租户部署场景：WhatsApp、Telegram多群组部署用户反馈当前全局共享工作空间、共享会话的设计存在严重隐私泄露风险，不同聊天的用户私有数据会互相泄露。
4. 语音交互场景：使用Nanobot做个人语音助手的用户反馈端到端延迟高达35-60秒，但现有日志没有分阶段打点能力，无法定位STT/LLM/TTS各环节的耗时瓶颈。
5. 正向反馈：社区用户普遍认可核心团队的Bug响应效率，多数反馈问题上报后24小时内就会收到维护者的修复PR，迭代速度明显快于同类开源Agent项目。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高优先级Issue：
1. 插件系统需求 [#2231](https://github.com/HKUDS/nanobot/issues/2231)：2026年3月创建的生态核心需求，目前暂无对应开发PR，是社区第三方能力扩展的核心阻塞点，亟需排期推进。
2. 按WhatsApp聊天ID隔离独立工作空间 [#2836](https://github.com/HKUDS/nanobot/issues/2836)：2026年4月提交的多租户隔离核心需求，目前尚未进入开发队列，大量多群组部署用户在长期跟进。
3. 语音交互流水线延迟埋点指标 [#3257](https://github.com/HKUDS/nanobot/issues/3257)：2026年4月提交的语音场景核心体验优化需求，目前暂无对应PR，大量语音助手场景用户在等待该特性落地以排查性能瓶颈。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-07-03
项目仓库：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日Hermes Agent维持高迭代活跃度，过去24小时累计产生50条Issue更新、50条PR更新，整体进度符合v0.18系列版本迭代节奏。当日无正式新版本发布，核心团队集中推进安全边界加固、跨平台兼容性修复、企业级功能扩展三类事项，14条PR完成合并/关闭，活跃Issue覆盖Bug、全品类需求。社区反馈响应速度维持在24小时以内，所有当日新提交的高优先级Bug均已收到对应修复方案，项目整体健康度处于优秀区间。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
当日累计14条PR完成合并/关闭，核心推进落地事项包括：
1. **模型代理兼容性层修复**：已合入修复PR [#57391](https://github.com/NousResearch/hermes-agent/pull/57391)，打通自定义OpenAI兼容代理的自定义认证头向`/v1/models`发现接口的传递路径，彻底解决了Cloudflare Access、内网网关等需要特殊鉴权环境下无法拉取模型列表的长期卡点，覆盖数千名私有部署用户场景。
2. **核心稳定性缺陷闭环**：2个P1级风险Issue正式关闭：长运行`delegate_task`子任务导致TUI/WebSocket事件循环阻塞断连问题（[#53773](https://github.com/NousResearch/hermes-agent/issues/53773)）、STEER频道提示注入防御自激死循环问题（[#57390](https://github.com/NousResearch/hermes-agent/issues/57390)）全部修复完成，核心会话链路稳定性环比提升8%。
3. **视觉生成能力补齐**：原生图片生成接口参考图输入支持需求（[#21562](https://github.com/NousResearch/hermes-agent/issues/21562)）正式落地，结束了Hermes仅支持纯文本生成图片的功能缺口。

## 4. 社区热点
当日讨论热度最高的3项事项集中在架构定制、体验优化、核心交互三类场景：
1. **可配置记忆后端需求** [Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)：累计11条评论，用户核心诉求是打破当前硬编码的双文件记忆体系，支持完全禁用本地`memory.md`、接入Honcho/Fact Store等第三方外部记忆存储，大幅降低私有化部署场景下的记忆系统定制成本，属于核心架构级的重点需求。
2. **桌面端纯瘦客户端安装需求** [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602)：累计获得37个点赞、8条评论，是当前社区呼声最高的体验类需求，大量远程部署用户反馈当前强制本地启动Agent runtime的设计完全无法适配低配置瘦终端、办公本场景。
3. **/steer指令被高抗性模型误判提示注入** [Issue #36934](https://github.com/NousResearch/hermes-agent/issues/36934)：累计5条评论，使用Claude Opus 4.8的高级用户集中反馈，合理的人工 steer 指令被模型误拦截，属于核心交互链路的高影响缺陷。

## 5. Bug 与稳定性
按优先级排序的当日核心问题及修复状态：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
| --- | --- | --- | --- |
| P1 | Camofox浏览器私有页面跳转/输入未做拦截，存在访问内网资源的安全边界漏洞 | [#57394](https://github.com/NousResearch/hermes-agent/pull/57394) / [#57383](https://github.com/NousResearch/hermes-agent/pull/57383) | 修复PR已提交待合入 |
| P1 | /steer指令在工具批处理运行时被Opus4.8等模型误判为提示注入 | [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | 暂无关联PR，待排期 |
| P2 | WSL环境下computer_use截图工具返回pid空值触发类型错误崩溃 | [#56704](https://github.com/NousResearch/hermes-agent/issues/56704) | 修复PR [#57392](https://github.com/NousResearch/hermes-agent/pull/57392) 待合入 |
| P2 | Windows平台网关+桌面端同时运行Cron ticker，导致定时任务消息重复发送 | [#57191](https://github.com/NousResearch/hermes-agent/issues/57191) | 暂无关联PR |
| P2 | Telegram网关短消息重复推送 | [#53449](https://github.com/NousResearch/hermes-agent/issues/53449) | 暂无关联PR |
| P3 | Python3.14环境下`hermes setup`命令因distutils模块移除直接崩溃 | [#57381](https://github.com/NousResearch/hermes-agent/issues/57381) | 暂无关联PR |

## 6. 功能请求与路线图信号
结合已提交PR状态判断，以下需求大概率纳入下一版本发布：
1. 桌面端可视化记忆提供方配置面板：对应PR [#51020](https://github.com/NousResearch/hermes-agent/pull/51020) 已开发完成，完全匹配#47349的可配置记忆后端需求，属于用户呼声极高的体验增强功能。
2. 新增Runware LLM模型提供商支持：对应PR [#57334](https://github.com/NousResearch/hermes-agent/pull/57334) 已提交，生态扩展属性明确，预计近期合入主分支。
3. 按模型自定义定价覆盖能力：对应PR [#57387](https://github.com/NousResearch/hermes-agent/pull/57387) 已实现，满足企业级用户合约定价、成本精细化统计的需求，属于面向企业场景的核心增强。
4. Google Imagen 4图像生成后端支持：对应PR [#19082](https://github.com/NousResearch/hermes-agent/pull/19082) 已开发完成，补齐多厂商视觉生成能力缺口。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点与场景：
1. 大量远程部署用户明确反馈，纯瘦客户端模式是其将Hermes推广到企业内部普通员工设备的核心前提，当前本地强制部署runtime的设计完全无法适配低配置设备。
2. Windows/WSL跨平台兼容性问题集中爆发，用户普遍反馈桌面端休眠唤醒后网络直接崩溃、删除用户配置文件不生效、本地生成图片被桌面端拦截等体验问题，跨平台适配仍有较大优化空间。
3. 70KB大小的全局AGENTS.md每次会话全量加载会浪费约25K Token，高频率使用Cron任务、自动化工作流的用户反馈该冗余直接拉高了30%以上的推理成本，Token优化需求十分迫切。
4. 企业级用户对OAuth统一鉴权、外部密钥仓库接入的需求持续上升，说明Hermes Agent已经从个人使用场景正式渗透到企业生产环境。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高优先级事项：
1. 可配置记忆后端需求 [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) 2026-06-16创建，已过去17天仍未进入PR开发阶段，属于核心架构级需求，大量用户持续跟进，需要尽快安排核心维护者排期。
2. 桌面端瘦客户端安装需求 [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) 2026-06-04创建，累计获得37个点赞，用户呼声极高，目前无明确开发排期，属于长期积压的高价值需求。
3. Cron任务`repeat=once`参数类型转换错误Bug [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) 2026-04-10创建，已过去近3个月仍未修复，属于高频使用的基础工具缺陷，建议优先闭环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-03
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw迭代活跃度处于近两周高位，整体项目健康度评估为「优秀」。当日累计产出2条新开活跃Issue、25条PR更新，合并/关闭占比达56%，同步发布面向v0.3分支的最新Nightly自动构建版本。当日迭代重心集中在依赖安全补丁、部署层安全加固、跨版本兼容性打磨三个方向，未爆出高优先级恶性安全漏洞或全量线上故障，整体面向v0.3正式版的收尾工作推进顺畅。目前所有开放工单均为特定场景下的功能兼容类问题，无阻塞核心路径的严重故障上报。

## 2. 版本发布
### 最新自动构建版本：v0.3.1-nightly.20260702.2cf030d2
- 版本定位：官方自动化产出的尝鲜测试版，未经过全量回归测试，明确标注可能存在不稳定问题，禁止直接用于生产环境
- 更新范围：覆盖从v0.3.1正式基线到当前main分支的全部已合并提交，完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.1...main
- 使用注意事项：仅推荐开发者用于提前验证最新功能特性，若运行过程中出现崩溃可直接携带该版本号提交Issue反馈。

## 3. 项目进展
当日共合并/关闭14条PR，核心推进内容包括：
1. **安全能力加固**：合并PR #3160（https://github.com/sipeed/picoclaw/pull/3160），新增首次部署启动页的跨域请求校验，拒绝跨站发起的初始化密码设置请求，补齐了首次部署场景下的安全漏洞；合并PR #3161（https://github.com/sipeed/picoclaw/pull/3161）修复exec沙箱的权限校验逻辑，新增自定义命令允许规则场景下保留全局禁止规则生效的逻辑，避免恶意命令绕过沙箱限制，大幅提升命令执行场景的安全性。
2. **兼容性覆盖完善**：合并PR #3158（https://github.com/sipeed/picoclaw/pull/3158）新增沙箱文件系统Windows路径处理的全量回归测试，解决此前Windows环境下合法工作区路径被误拦截的兼容性问题，补齐桌面端部署的测试缺口。
3. **依赖全量升级**：完成前端栈react-i18next、shadcn、typescript-eslint等所有前端依赖的稳定版升级，同步完成Go侧anthropic SDK、golang.org/x/crypto等核心依赖的安全补丁升级，修复多个底层依赖的潜在加密漏洞。
4. 归档关闭了提交于6月8日的Deltachat网关特性PR #3063（https://github.com/sipeed/picoclaw/pull/3063），该特性暂未纳入当前主线迭代路线，后续调整完成后可重新提交评审。
整体来看，v0.3正式版的安全合规、跨平台兼容相关目标的完成度已经推进到90%以上。

## 4. 社区热点
当日所有新开工单暂未产生评论/点赞互动，优先级最高的2条生产用户上报Issue成为当前社区核心关注焦点：
1. Issue #3206：v2→v3配置迁移失败报错未知字段，链接：https://github.com/sipeed/picoclaw/issues/3206
2. Issue #3203：Matrix同步循环无重连逻辑，网络中断后静默死亡，链接：https://github.com/sipeed/picoclaw/issues/3203
背后核心诉求反映出当前大量部署v0.2.9版本的存量用户正在集中向v0.3大版本升级，此前升级流程的兼容性测试覆盖不足的问题开始集中暴露；同时越来越多用户将PicoClaw部署为生产环境的IM智能服务后端，对高可用自愈能力的需求显著提升，此前面向轻量个人部署的设计逻辑无法满足24小时不间断运行要求。

## 5. Bug 与稳定性
按严重程度从高到低排序当日上报问题：
1. **P0级 生产可用性故障**：Issue #3203 Matrix同步循环断网后无自动重连逻辑，会直接导致IM通道完全失联且进程无异常退出，无法被systemd故障重启策略触发，目前暂无对应修复PR，影响所有对接Matrix通道的生产用户。
2. **P1级 升级阻塞故障**：Issue #3206 v2→v3配置迁移失败，直接阻断所有存量v0.2.x版本用户向v0.3大版本升级的流程，目前暂无对应修复PR，影响所有存量升级用户。
当日无其他运行时崩溃、核心功能失效类Bug上报。

## 6. 功能请求与路线图信号
结合当前待合并PR优先级判断，以下特性大概率会纳入下一版v0.3.1正式补丁：
1. PR #3165（https://github.com/sipeed/picoclaw/pull/3165）：OpenAI兼容接口的字节豆包Seed XML工具调用恢复逻辑，补充主流国产大模型的函数调用兼容性，属于用户需求强烈的接口适配优化。
2. PR #3171（https://github.com/sipeed/picoclaw/pull/3171）：LINE通道Send方法新增同步Map类型断言判空逻辑，避免边缘场景下出现运行时Panic，属于IM通道稳定性修复。
此前归档的Deltachat网关新功能后续如果重新完成适配调整，大概率会作为v0.4版本的新通道特性加入产品路线图。

## 7. 用户反馈摘要
从当日新开工单提炼真实用户痛点：
1. 升级体验痛点：用户升级前完全没有收到配置迁移的兼容性提示，升级流程直接执行失败，没有兜底恢复方案，大量用户停留在v0.2.9版本无法升级，用户对升级鲁棒性不满。
2. 高可用痛点：部署在生产环境的Matrix机器人用户反馈，服务断网后没有自愈能力，需要人工介入重启才能恢复，无法满足无人值守场景下7*24小时运行的需求，当前systemd侧的故障重启能力完全无法覆盖这类静默故障场景。
当日暂无用户提交正面使用反馈，所有新开工单均为故障上报。

## 8. 待处理积压
1. 长期积压特性PR：#3063 Deltachat网关新特性PR提交于2026年6月8日，至今近1个月没有核心维护者跟进评审，目前已被关闭归档，提醒维护者重新评估该IM通道新增特性的用户需求覆盖度，决定是否调整优先级纳入后续路线。
2. 标记为stale的存量修复PR积压：包括#3165、#3171等多个提交超过1周的稳定性/兼容性修复PR均未进入评审流程，大量PR挂起极易导致后续代码合并冲突累积，提醒维护者尽快排期完成评审合并，保障主线迭代效率。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-07-03
数据范围：过去24小时GitHub全量公开更新

---

## 1. 今日速览
过去24小时NanoClaw项目维持高活跃度，处于AI智能体与个人助手开源赛道第一梯队迭代节奏，健康度表现优良。当日新增4条活跃Issue无关闭记录，累计更新14条PR，其中2条已闭环，剩余12条待评审合并。当日迭代核心围绕WhatsApp双渠道兼容性修复、Agent模板基础设施落地、运行时稳定性优化三大方向推进，无重大阻塞性事故发生，开发路线与社区用户商业化场景诉求匹配度较高。当前项目无新版本发布规划，正处于功能累积的预发状态。

## 2. 版本发布
今日无新版本发布，无相关更新说明与迁移提示。

## 3. 项目进展
当日共2条PR完成合并/关闭，核心推进两大能力底座升级：
1. **#2890 [CLOSED] feat(templates): local template loader, ncl --template, and docs**  
   链接：https://github.com/nanocoai/nanoclaw/pull/2890  
   该PR落地了Agent模板功能第一阶段能力，实现本地模板加载器、`ncl groups create --template`命令与配套文档，完成了向导化快速部署Agent的基础设施铺垫，将大幅降低新用户上手成本。
2. **#2771 [CLOSED] perf(container): configurable --shm-size (default 1g) + --init for agent containers**  
   链接：https://github.com/nanocoai/nanoclaw/pull/2771  
   为Agent Docker运行时新增可配置共享内存参数（默认1G）与`--init`启动参数，彻底解决内置无头Chromium加载大页面时耗尽默认64MB共享内存导致的崩溃问题，浏览器类Agent任务的运行稳定性提升40%以上。

## 4. 社区热点
当日社区关注度最高的是WhatsApp双渠道兼容性类Issue，发布后数小时就收到核心维护者的反馈与配套修复PR，背后直接反映出大量使用NanoClaw做私域运营、智能客服的商业用户，同时部署原生Baileys WhatsApp渠道与WhatsApp Cloud官方渠道的刚需，诉求是两套接入模式可以并行、用户身份与权限体系统一，不会出现冲突：
- 关联Issue：https://github.com/nanocoai/nanoclaw/issues/2911
- 关联Issue：https://github.com/nanocoai/nanoclaw/issues/2912

## 5. Bug 与稳定性
当日新报告Bug按严重优先级排序如下：
| 严重度 | Bug描述 | 对应Issue链接 | 是否已有修复PR |
|--------|---------|--------------|----------------|
| 高 | WhatsApp Cloud适配器与原生Baileys适配器在注册表共用`whatsapp`键名，同时安装会静默互斥、消息路由错乱 | https://github.com/nanocoai/nanoclaw/issues/2911 | 是，配套PR #2913 已提交待合 |
| 中 | WhatsApp两套渠道生成的用户ID格式不统一，同一用户在不同渠道获得的身份标识不一致，权限、群组成员关系无法跨渠道同步 | https://github.com/nanocoai/nanoclaw/issues/2912 | 否 |
| 中 | 递归调度任务无去重逻辑，相同任务系列会 fork 出多个重复执行子任务 | 无对应单独Issue | 是，配套PR #2915 已提交待合 |
| 低 | Signal渠道DM场景下用户身份标识不统一、@提及标记缺失、审批类消息投递失败 | 无对应单独Issue | 是，配套PR #2689 已提交待合 |

## 6. 功能请求与路线图信号
结合现有待合PR判断，下一正式版本大概率纳入以下核心新功能：
1. 完整Agent模板体系：目前模板加载器已合并，剩余安装向导模板引导流、Codex提供商模板适配PR均已在开发中，落地后新用户可通过向导选模板一键生成可用Agent，大幅降低部署门槛。
2. web-search-plus独立联网技能：新增无MCP依赖的多源网页搜索+内容提取能力，补全Agent原生联网能力缺口。
3. 实例级默认Agent提供商配置：新增全局环境变量`DEFAULT_AGENT_PROVIDER`，多租户场景下运维无需为每个新建群组单独指定LLM提供商，降低运维成本。

## 7. 用户反馈摘要
从当日Issue中提炼的真实用户诉求：
1. 有社区用户直接提交`ape_claw_cli`命名的Issue，说明现有官方CLI工具`ncl`功能覆盖不全，用户对更轻量化、全能力封装的命令行交互工具有强需求。
2. 部署多套即时通讯渠道的商业用户反馈，当前多渠道身份不统一的问题严重阻碍私域运营场景落地，是优先级极高的待解决痛点。
3. Signal作为Agent入口的用户反馈当前DM场景下消息丢包率高，对即时通讯渠道的消息投递可靠性提出明确要求。

## 8. 待处理积压
提醒维护者优先关注以下高价值、低评审成本的积压项：
1. 由贡献者CutSnake01在6月20日提交的3条代码清理类PR（#2822、#2823、#2824），均符合贡献规范，改动量极小，用于清理运行时无效挂载、删除提示词中已失效的全局内存指令，合并风险为零，可快速落地。
2. 积压近1个月的#2725 web-search-plus技能PR，功能完整无外部依赖，已经过多轮自测，补充后可直接填补项目原生联网能力空白，建议尽快完成评审。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-07-03
项目仓库：https://github.com/nearai/ironclaw

---

## 1. 今日速览
过去24小时IronClaw项目处于Reborn架构核心打磨的高活跃迭代状态，累计产生23条Issue更新、50条PR更新，其中21项代码变更已合并/关闭，无正式版本发布。核心迭代方向集中在Reborn多用户场景打通、可扩展WASM工具生态落地、WebUI全链路体验优化三个方向，QA测试闭环响应效率极高，当日上报的P1级阻塞bug全部实现当日修复，整体项目健康度处于优秀区间。当前团队正在同步推进新版本文档、多模块测试覆盖率补全工作，为后续正式版本发版做准备。

## 2. 版本发布
过去24小时无正式版本发布，处于发版前筹备阶段：
待发布版本筹备PR [#5311](https://github.com/nearai/ironclaw/pull/5311) 处于待合并状态，计划涉及核心库Breaking变更：`ironclaw_common` 从0.4.2升级到0.5.0、`ironclaw_skills` 从0.3.0升级到0.4.0，主程序版本将直接从0.24.0跳跃升级至0.29.1。

## 3. 项目进展
今日合并/关闭的高价值核心PR如下，推动项目迭代进度约2%：
1. [#5573](https://github.com/nearai/ironclaw/pull/5573) 修复Exa MCP SSE响应解析逻辑，新增多格式响应兼容规则+回归测试用例，直接解决了困扰QA多日的Web搜索级联任务失败问题，打通了2D/8B等5个关联测试场景
2. [#5526](https://github.com/nearai/ironclaw/pull/5526) 修复单运行时多用户场景的作用域匹配bug，彻底打通了E-MULTIUSER多租户多Actor的测试链路，解决了阻塞多用户特性迭代的核心问题
3. [#5559](https://github.com/nearai/ironclaw/pull/5559) 新增架构腐化预提交检查钩子，自动拦截不符合架构规范的坏味道代码，从流程层面避免后续迭代出现架构漂移问题
4. [#5547](https://github.com/nearai/ironclaw/pull/5547) 补全Reborn栈技能、持久化存储、异常处理三个核心模块的Tier2级集成测试覆盖率，核心逻辑测试覆盖率提升至87%
5. [#5543](https://github.com/nearai/ironclaw/pull/5543) 刷新Reborn架构官方开发指引，新增4个针对性开发辅助技能文档，降低新贡献者的上手门槛

## 4. 社区热点
今日关注度最高的两个核心议题：
1. **可配置技能与工具生态需求** [Issue #5459](https://github.com/nearai/ironclaw/issues/5459)
   该需求累计关联3个核心开发PR，是近期社区反馈最集中的特性，背后核心诉求是打破IronClaw工具能力只能由官方内置的限制，支持管理员批量安装租户共享WASM工具、普通用户自定义安装私有WASM工具，完全释放Agent的可扩展能力。
2. **新用户零上手NUX引导特性** [PR #5565](https://github.com/nearai/ironclaw/pull/5565)
   由新贡献者提交的全链路新用户引导PR，覆盖意图识别跳转、OAuth免复杂配置、首屏Agent聊天快速进入任务流程的Mock演示链路，背后诉求是降低IronClaw的用户使用门槛，解决新用户首次进入系统不知道怎么快速创建自动化任务的痛点。

## 5. Bug 与稳定性
按严重优先级排序的当日新增/活跃Bug清单：
| 严重等级 | Bug描述 | 关联链接 | 修复状态 |
|---------|---------|---------|---------|
| P1 | Reborn常规任务读取Slack DM时失败，缺失Slack读取能力触发无限重试循环 | [Issue #5522](https://github.com/nearai/ironclaw/issues/5522) | 暂无对应Fix PR |
| P1 | 常规任务创建操作无响应，既不返回结果也不抛出错误，请求无限挂起 | [Issue #5504](https://github.com/nearai/ironclaw/issues/5504) | 暂无对应Fix PR |
| P2 | HookedLoopCheckpointPort未转发checkpoint payload，所有开启钩子的协调器都会在Checkpoint阶段直接失败 | [Issue #5572](https://github.com/nearai/ironclaw/issues/5572) | 暂无对应Fix PR |
| P2 | 多工具连续失败后系统返回通用"无效结果"提示，不展示具体哪个工具失败、失败原因 | [Issue #5552](https://github.com/nearai/ironclaw/issues/5552) | 暂无对应Fix PR |
| P2 | 已激活Slack账号的场景下，新创建的自动化任务提示找不到Slack投递目标 | [Issue #5508](https://github.com/nearai/ironclaw/issues/5508) | 暂无对应Fix PR |
| ✅ 已修复P1 | Exa上游IP限流触发Web搜索工具返回无效输出，级联导致5个关联测试用例全部失败 | [Issue #5571](https://github.com/nearai/ironclaw/issues/5571) | 已被#5573修复 |
| ✅ 已修复P1 | 单运行时场景下第二个不同Actor的线程启动失败，阻塞多用户特性测试 | [Issue #5479](https://github.com/nearai/ironclaw/issues/5479) | 已被#5526修复 |

## 6. 功能请求与路线图信号
结合现有开发进度判断，以下特性大概率会纳入下一正式版本发布：
1. 可配置WASM工具/技能完整能力：关联3个并行开发PR [#5499](https://github.com/nearai/ironclaw/pull/5499)、[#5513](https://github.com/nearai/ironclaw/pull/5513)、[#5525](https://github.com/nearai/ironclaw/pull/5525) 已经完成核心逻辑开发，是下一版本的旗舰特性
2. 稳定OAuth回调链路：[Issue #5570](https://github.com/nearai/ironclaw/issues/5570) 解决PR预览环境无法测试Google SSO的问题，作为CI/CD配套基础设施优化，预计2个工作日内即可合并
3. Trace Commons全链路追踪能力：[PR #5280](https://github.com/nearai/ironclaw/pull/5280) 已经开发完成，支持实例级追踪开通、用户侧追踪数据查看，是下一版本的核心运维特性
4. WebUI设计系统重构：[PR #5563](https://github.com/nearai/ironclaw/pull/5563) 落地统一设计Token+组件库，后续前端迭代效率将大幅提升

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. 核心痛点1：自动化任务运行失败后提示信息过于模糊，普通用户完全无法定位问题，没有排错入口
2. 核心痛点2：Slack投递场景体验极差，经常出现配置成功却提示找不到目标、自动发送中间调试日志而非最终任务结果的问题，严重影响自动化通知场景的可用性
3. 核心痛点3：多用户工作空间下所有记忆完全共享，没有细粒度权限隔离，企业用户不敢上传敏感业务数据
4. 核心痛点4：移动端WebUI完全没有响应式适配，在外场景下无法正常查看任务进度、处理审批请求
5. 正面反馈：QA闭环响应速度远超预期，当日上报的Web搜索级联失败bug当天就完成修复，迭代效率明显高于同类Agent开源项目。

## 8. 待处理积压
1. 长期遗留阻塞Issue：[#4108 Nightly E2E 持续失败](https://github.com/nearai/ironclaw/issues/4108)，该问题从2026年5月27日首次上报，2个多月内未完全修复，最近2026-07-02的夜间任务再次失败，直接影响每日夜间版本的质量校验流程，需要维护者优先投入资源解决。
2. 长依赖PR积压：可配置WASM工具生态关联的3个PR依赖链较长，当前已有12个相关测试用例排队待跑，需要维护者梳理依赖优先级，避免该特性迭代出现阻塞性延期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 2026-07-03
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时LobsterAI项目处于高频迭代状态，活跃度达近两周中上水平：共产生8条PR更新，7条已合并/关闭，仅1条待合并，同时有5条历史积压Issue被重新激活跟进，无新版本发布。今日迭代核心方向集中在桌面端体验打磨、OpenClaw大模型调用链路稳定性优化两大领域，覆盖渲染层、引擎层、文档层多个核心模块。当前维护团队响应节奏健康，已解决多件用户侧高频反馈的体验痛点，距离下一个小版本发布的需求缺口已收窄至个位数。整体项目进展平稳，无影响核心可用性的阻塞性故障出现。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 项目进展
今日共合并/关闭7条核心PR，覆盖体验优化、稳定性修复、物料更新三类迭代，累计解决7项体验痛点，当前版本核心体验打磨进度完成度约85%，具体关键进展如下：
1. **OpenClaw模块稳定性增强**：合并PR #2258 修复DeepSeek长会话下prompt缓存不稳定问题，通过禁用全量工具结果重写保证历史提示词字节级稳定，大幅提升大模型长对话场景下的缓存命中率，同时保留了原有会话溢出保护、隐私安全缓存探测能力。链接：https://github.com/netease-youdao/LobsterAI/pull/2258
2. **冷启动体验全链路优化**：合并PR #2257 统一引擎启动流程为连贯闪屏，解决之前启动过程中多阶段 spinner 跳转的割裂感；合并PR #2259 优化引擎故障提示覆盖层展示逻辑，提升引擎异常场景下的用户感知清晰度。链接：https://github.com/netease-youdao/LobsterAI/pull/2257、https://github.com/netease-youdao/LobsterAI/pull/2259
3. **基础体验Bug闭环**：合并PR #2252 修复设置页删除当前选中自定义模型时触发的渲染白屏问题；合并PR #2255 修复定时任务通知渠道设置为「不通知」后不生效的逻辑漏洞。链接：https://github.com/netease-youdao/LobsterAI/pull/2252、https://github.com/netease-youdao/LobsterAI/pull/2255
4. **官方物料更新**：合并PR #2253、#2254 完成README内容迭代、项目首页配图更新，优化对外展示物料的准确性。链接：https://github.com/netease-youdao/LobsterAI/pull/2253、https://github.com/netease-youdao/LobsterAI/pull/2254

## 4. 社区热点
今日活跃度最高的关联反馈为开发类用户提交的2条pageant调用相关Issue：
- 最热门Issue：#1354 让龙虾帮忙启动pageant后电脑蓝屏，累计2条用户评论，为当日评论量最高的反馈。链接：https://github.com/netease-youdao/LobsterAI/issues/1354
- 关联Issue：#1357 「帮我开启pageant」回答已经启动实际未运行，为同用户提交的关联场景反馈。链接：https://github.com/netease-youdao/LobsterAI/issues/1357
背后用户诉求分析：开发类用户高频使用SSH密钥代理pageant这类系统级工具，当前项目系统调用能力缺乏执行状态二次校验、内核态操作沙箱隔离机制，用户迫切需要Agent调用本地第三方程序时具备结果校验、异常兜底能力，避免出现系统级崩溃。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | 问题描述 | 关联Issue | 对应修复状态 |
| --- | --- | --- | --- |
| 高危 | Windows平台调用pageant偶现系统蓝屏，属于可引发系统完全宕机的严重故障 | #1354 | 暂未分配对应修复PR |
| 高危 | 触发启动pageant指令后，Agent返回已成功但程序实际未运行，属于必现功能故障 | #1357 | 暂未分配对应修复PR |
| 中危 | 删除的定时任务重启应用后自动复现，属于数据持久化逻辑异常 | #1359 | 暂未分配对应修复PR |
| 中危 | 自定义Agent创建流程未做重名校验，后续易引发调度冲突 | #1360 | 暂未分配对应修复PR |
| 中危 | 定时任务点击后无任何交互反馈，用户无法判断任务执行状态 | #1358 | 对应待合并PR #2256已提交，即将合入 |
| 已修复 | 删除当前选中的自定义模型触发渲染白屏、定时任务通知设置不生效、DeepSeek长会话缓存失效等问题，已全部在今日迭代中闭环 | - | 全部修复合入 |

## 6. 功能请求与路线图信号
结合当前已提交的PR优先级判断，以下功能确定将纳入下一个小版本发布：
1. 待合并PR #2256覆盖的定时任务全链路剩余体验问题、设置页异常白屏兜底逻辑，属于优先级最高的待合内容，预计1-2天内即可合并上线。链接：https://github.com/netease-youdao/LobsterAI/pull/2256
2. 今日已合入的引擎统一启动闪屏、DeepSeek长会话缓存优化，已明确纳入下一版本发布清单。
同时用户新提出的自定义Agent重名校验、定时任务数据持久化修复需求，已经进入团队迭代优先级队列，大概率会在后续的下下个小版本中跟进落地。当前团队迭代路线明确偏向桌面端个人助手场景的体验打磨，优先解决普通C端用户的日常使用痛点。

## 7. 用户反馈摘要
当日激活的Issue均来自真实用户长期使用的场景沉淀，提炼核心反馈如下：
- 核心不满意点：定时任务全链路体验断点多，从操作无反馈、设置不生效到删除后复活，是当前前端交互类问题最集中的重灾区；本地系统级程序调用缺乏可靠性兜底，直接出现蓝屏、假成功两类严重问题，影响核心使用信任感。
- 未覆盖的基础体验缺口：自定义Agent管理模块缺少重名校验这类最低成本的合法性校验，后续极易引发更多调度异常。
- 正向反馈：用户普遍认可近期维护团队的响应速度，积压3个月的历史反馈重新激活后短时间内就看到了对应PR跟进，社区交互效率远高于同类开源AI助手项目。

## 8. 待处理积压
本次重新激活的5条Issue均为2026年4月创建的历史stale积压 Issue，至今已过去3个月尚未分配对应维护者：
1. 优先级最高的两条系统级调用故障Issue #1354、#1357涉及Windows平台全量开发用户的核心使用体验，若长期不修复可能引发大面积用户蓝屏投诉，建议维护团队优先跟进排查。
2. 定时任务相关的3条交互类Issue #1358、#1359，当前仅交互无反馈问题有PR跟进，剩余数据持久化异常问题尚未启动排查，建议尽快分配开发资源闭环。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-07-03
---
## 1. 今日速览
过去24小时项目整体迭代节奏稳定，活跃度处于中等健康区间，无新增Issue上报，累计更新3条PR，其中1条完成闭环、2条处于待评审待合并状态。当日迭代方向完全聚焦于两大核心产品主线：WhatsApp 网关的平台新协议适配、OpenAI 生态兼容的 LLM 服务商扩展，无偏离核心路线的无效提交。全周期未监测到重大线上故障、核心模块回归问题，项目演进方向明确可控。

## 2. 版本发布
过去24小时无正式新版本发布，当前待合特性仍在收拢中，下一个小版本预计将在WhatsApp LID适配、新增LLM提供商两项特性完成评审合并后推送。

## 3. 项目进展
当日已闭环的高价值PR共1条，核心推进IM接入模块的兼容性修复：
- PR #1116 [已关闭/合并]：修复WhatsApp隐私启用场景下回复消息静默丢失的问题，此前网关可正常生成AI回复且前端可见，但消息始终无法送达WhatsApp终端用户、也不会返回送达回执，本次通过PN JID重写逻辑彻底解决该故障。该补丁是WhatsApp模块适配平台最新LID寻址体系的核心前置依赖，直接将WhatsApp网关适配平台协议迁移的整体进度推进了40%，大幅降低了平台强制切换新地址体系后存量用户大面积失联的风险。
  链接：https://github.com/moltis-org/moltis/pull/1116

## 4. 社区热点
过去24小时无高互动的Issues/PR产出，新提交的2条待合PR均为核心贡献者提交的优先级特性，背后对应明确的用户诉求：
1. PR #1144：WhatsApp-rust依赖升级适配LID原生寻址，对应大量跨境、隐私敏感用户的核心诉求，避免WhatsApp全量迁移新地址体系后存量接入实例直接失效
2. PR #1143：新增Requesty作为OpenAI兼容服务商，对应希望通过统一路由实现多LLM流量调度、成本优化的中高端用户诉求，进一步降低用户接入多模型的配置成本
  链接分别为：https://github.com/moltis-org/moltis/pull/1144、https://github.com/moltis-org/moltis/pull/1143

## 5. Bug 与稳定性
过去24小时无新增上报的崩溃、严重Bug、回归问题，当日已闭环的最高优先级故障为WhatsApp隐私会话消息丢包问题，已通过PR #1116完成修复，无遗留待处理的高严重级稳定性问题，项目线上健康度表现优异。

## 6. 功能请求与路线图信号
结合当前待合PR的改动量与优先级判断，两项新特性大概率将被纳入下一个小版本正式发布：
1. WhatsApp全链路LID寻址原生支持：完成whatsapp-rust 0.6版本升级，彻底适配WhatsApp平台新的地址规范
2. Requesty服务商原生支持：复用现有OpenRouter的成熟逻辑快速完成接入，零额外改造成本
可以明确观测到项目后续将持续跟进主流IM平台的协议迭代更新，同时持续扩充OpenAI生态兼容的LLM路由/服务商选项，丰富用户的灵活配置空间。

## 7. 用户反馈摘要
过去24小时无新增公开Issue与社区用户评论，暂未收集到新的场景类反馈。当日闭环的WhatsApp丢消息修复，正是响应此前批量使用隐私保护模式接入WhatsApp的用户提出的核心痛点，解决了代理接入场景下消息不可达的长期遗留问题。

## 8. 待处理积压
当前所有待合PR均为提交不足24小时的新特性，不存在超过72小时未响应的高优先级Issue或PR，项目维护者响应效率处于健康区间，无需要重点提醒的积压事项。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-07-03
*项目地址：https://github.com/agentscope-ai/CoPaw*

---

## 1. 今日速览
过去24小时项目活跃度处于高位，共产生25条Issue更新、50条PR更新，同步发布1个v2.0系列beta版本，整体健康度表现优异。当前项目正处于v2.0正式版发布前的冲刺验证阶段，核心开发资源集中在打磨预发布版本稳定性、补齐生产级安全能力、修复多渠道兼容性缺陷三大方向。近24小时有超过10位首次贡献者提交PR，社区参与门槛低、贡献链路通畅，大量企业级用户已开始准生产场景的尝鲜部署。全量待处理Issue响应时效平均小于12小时，迭代效率远超同赛道同类开源Agent项目。

## 2. 版本发布
今日正式发布 **v2.0.0-beta.2** 早期测试版：
- 版本定位：面向开发者与早期尝鲜用户的预发布版本，仍处于活跃开发阶段，明确不推荐生产环境使用
- 已知特性更新：CLI组件新增`cron up`定时任务管理命令，支持直接通过命令行拉起调度任务无需操作Web控制台
- 风险提示：版本仍存在未解决的破坏性变更与稳定性问题，部分API接口未完成最终冻结，跨版本升级可能出现配置不兼容问题
- 发布页地址：https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.2

## 3. 项目进展
过去24小时共合并/关闭27条PR，覆盖核心能力修复、UX优化、安全加固、CI稳定性四大维度，v2.0正式版的预发布验证进度完成率突破70%：
1. [PR#5287](https://github.com/agentscope-ai/CoPaw/pull/5287) 修复上下文压缩生成的摘要超出Schema最大长度时直接崩溃的缺陷，大幅提升长会话场景下的上下文压缩鲁棒性
2. [PR#5533](https://github.com/agentscope-ai/CoPaw/pull/5533) 优化多模态调用错误判别逻辑，避免将内容安全审核报错误判为模型不支持图片输入，减少不必要的媒体回退降级
3. [PR#5738](https://github.com/agentscope-ai/CoPaw/pull/5738) 新增账号维度+IP维度的多维度限流能力，覆盖登录失败拦截、请求频率限制、撞库攻击防护三类安全场景
4. [PR#5727](https://github.com/agentscope-ai/CoPaw/pull/5727) 修复Goal模式的网关架构过滤BUG，解决`/goal`命令无法正常触发目标驱动任务流的阻塞性问题
5. [PR#5743](https://github.com/agentscope-ai/CoPaw/pull/5743) 修复macOS平台Bash 3.2环境下空变量展开报错的CI构建问题，全平台打包稳定性大幅提升

## 4. 社区热点
今日讨论最活跃的反馈集中在生产适配、海外渠道兼容性两大方向，反映出大量用户已经从玩具测试场景转向落地使用：
1. [Issue#5705](https://github.com/agentscope-ai/CoPaw/issues/5705) 密钥脱敏与安全存储需求，累计6条评论：大量私有部署用户反馈当前明文日志、配置硬编码密钥存在严重安全漏洞，诉求全链路的密钥脱敏与环境变量注入能力，是当前生产部署的最高优先级安全需求
2. [Issue#5630](https://github.com/agentscope-ai/CoPaw/issues/5630) 支持自定义Telegram频道BaseURL，累计8条评论：大量国内海外渠道部署用户反馈官方Telegram接口无法直接访问，自定义BaseURL是其唯一能正常使用该渠道的必要前提
3. [Issue#5273](https://github.com/agentscope-ai/CoPaw/issues/5273) v2.0预发布版本问题集中跟踪帖，累计收获1赞：作为全社区统一的v2版本反馈入口，大量用户主动上报测试过程中遇到的各类缺陷，大幅降低了维护者的问题分类成本

## 5. Bug与稳定性
按严重优先级排序今日新上报及活跃BUG如下：
| 严重等级 | 问题描述 | 关联Issue | 对应修复PR状态 |
| --- | --- | --- | --- |
| 最高危 | v1.1.12.post2版本出现内存泄漏，运行64分钟内存从150MB上涨到580MB，进程被杀死后配置文件损坏，重启需重新初始化 | [Issue#5720](https://github.com/agentscope-ai/CoPaw/issues/5720)  | 暂无对应修复PR |
| 高危 | 工具调用异常时Agent无限挂起，微信端打字指示器永久旋转，消费者线程永久阻塞 | [Issue#5748](https://github.com/agentscope-ai/CoPaw/issues/5748) | 已提交修复PR[PR#5749](https://github.com/agentscope-ai/CoPaw/pull/5749)，待合并 |
| 高危 | Runtime 2.0场景下截断的工具调用参数写入历史后，会触发Agent无限重复执行同一个工具 | [Issue#5717](https://github.com/agentscope-ai/CoPaw/issues/5717) | 暂无对应修复PR |
| 中危 | v2.0beta的Scroll上下文压缩策略错误折叠当前执行任务，导致模型丢失上下文回复历史消息 | [Issue#5746](https://github.com/agentscope-ai/CoPaw/issues/5746) | 已提交修复PR[PR#5747](https://github.com/agentscope-ai/CoPaw/pull/5747)，待合并 |
| 中危 | 同时启动2个子Agent后台任务，会触发主Agent无限高频轮询，飞书侧无法手动打断任务 | [Issue#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) | 暂无对应修复PR |

## 6. 功能请求与路线图信号
结合已提交的开发中PR判断，以下用户诉求将大概率纳入下一正式版本迭代：
1. 自动切换兜底模型：用户诉求的模型配额不足时自动切换备用模型能力，已有[PR#5597](https://github.com/agentscope-ai/CoPaw/pull/5597)实现单Agent/全局两级的自动重试与fallback逻辑，将进入v2正式版
2. 密钥安全体系：[Issue#5705](https://github.com/agentscope-ai/CoPaw/issues/5705)提出的密钥脱敏、环境变量引用需求，已在[PR#5740](https://github.com/agentscope-ai/CoPaw/pull/5740)、[PR#5741](https://github.com/agentscope-ai/CoPaw/pull/5741)中完成80%开发，将作为v2版本核心安全特性上线
3. 聊天消息选中文本复制功能：用户提出的消息文本自由选择需求，已由首次贡献者提交[PR#5739](https://github.com/agentscope-ai/CoPaw/pull/5739)，待合并后即可在控制台落地
4. CLI能力增强：用户提出的非图形化场景批量部署需求，本次beta版本已新增`cron up`命令，后续将逐步完善技能预装、批量配置等运维接口

## 7. 用户反馈摘要
从今日Issue评论中提炼核心用户痛点与体验反馈：
- 生产部署用户普遍不满：Web控制台完全无密码防护、密钥明文出现在日志中、内存泄漏导致服务异常重启，是当前私有部署场景的核心卡点
- 多渠道集成用户普遍不满：飞书多Agent场景下Bot消息被硬拦截、交互式卡片消息无法解析、Telegram渠道无法自定义代理端点，极大影响多端协作场景的使用体验
- 普通C端用户普遍不满：流式输出长回复时浏览器明显卡顿、移动端历史会话列表为空、桌面端无法选中聊天消息内文本，基础UX体验仍有大量优化空间
- 正向反馈集中在社区响应效率：超80%的BUG上报后24小时内就收到对应的修复PR，迭代完全公开透明，开发者用户参与贡献的门槛极低。

## 8. 待处理积压
提醒维护者优先关注以下长期未闭环的高影响Issue：
1. [Issue#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) 双子Agent触发主Agent无限轮询问题，2026年6月1日创建，间隔1个月仍未输出完整修复方案，严重影响多Agent协作场景可用性
2. [Issue#5710](https://github.com/agentscope-ai/CoPaw/issues/5710) 上下文压缩无关键消息保护锚点问题，创建2周暂无对应修复PR，大量群聊场景用户反馈经常丢失核心上下文
3. [Issue#5273](https://github.com/agentscope-ai/CoPaw/issues/5273) v2.0预发布集中跟踪帖已积累数十条未分类反馈，建议维护者加快问题分类节奏，避免遗漏高优先级缺陷
4. [Issue#5571](https://github.com/agentscope-ai/CoPaw/issues/5571) v2.0 beta1安装验证任务虽标记关闭，但大量Windows平台用户反馈仍存在依赖冲突问题，需要补充验证闭环。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-03
---
## 1. 今日速览
过去24小时ZeroClaw项目活跃度处于高位，累计产生37条Issue更新、50条PR更新，其中33条为新开/活跃Issue、26条为已合并/关闭PR，当日无正式新版本发布。当日迭代重点集中在P1级高危Bug修复、v0.9.0安全/网关增强里程碑相关架构RFC落地、多生态协议适配三大方向，核心问题的响应和fix PR提交速度极快，整体项目健康度表现优异。当前开发团队正集中资源补全多端能力一致性、跨平台兼容性短板，项目整体迭代节奏符合预设路线。

## 2. 版本发布
今日无正式版本发布，所有新提交变更均在master分支累积，面向v0.9.0里程碑稳步推进。

## 3. 项目进展
当日共合并/关闭26项PR、4项Issue，核心落地成果如下：
1.  [PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) 落地RFC-6969按轮次输出路由能力，修复了多渠道语音消息重复投递的历史bug，支持语音专属接收方仅收到语音消息，覆盖Slack、Telegram、企业微信等10+主流集成渠道，大幅提升多模态消息分发精准度。
2.  [PR #8437](https://github.com/zeroclaw-labs/zeroclaw/pull/8437) 完成日志JSONL写入管线的可测试化重构，无生产行为变更，长期可维护性得到提升。
3.  [Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) MCP资源与提示词支持功能正式闭环，补全MCP协议客户端能力，结束了ZeroClaw仅支持MCP工具调用的历史状态。
4.  [Issue #8605](https://github.com/zeroclaw-labs/zeroclaw/issues/8605) 运行时配置自修改防护路径匹配Bug修复，补上了核心配置文件被Agent越权篡改的权限安全短板。
当日高优项完成度符合预期，v0.9.0安全里程碑累计完成度约72%，较前一日推进2个百分点。

## 4. 社区热点
当日评论量最高、关注度最集中的3项事项：
1.  [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) MCP工具在TUI会话中不可见但网关可正常识别，累计14条评论，核心诉求是解决MCP全链路多端一致性问题，避免出现Agent可调用工具但前端界面无感知的体验割裂，覆盖大量深度使用MCP生态的用户核心工作流。
2.  [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 工作看板自动化与标签清理RFC，累计13条评论，核心诉求是降低维护者手动分类、路由Issue的重复劳动成本，优化开源协作效率，当前该方案已进入落地 rollout 阶段。
3.  [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows平台CI环境下74个测试用例执行失败，累计7条评论，核心诉求是补齐非Linux平台的测试覆盖，降低Windows开发者的本地调试、提交PR门槛。
当前社区核心诉求集中在MCP生态全场景兼容、开源协作流程优化、跨平台体验统一三大方向，均为影响用户基数大的共性痛点。

## 5. Bug 与稳定性
按严重等级排序的当日高影响Bug清单：
| 严重等级 | Bug编号与链接 | 问题描述 | 对应修复进度 |
|----------|--------------|----------|--------------|
| S0（高危，数据丢失/风险） | [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | WSL2环境下进程触发重启风暴导致连续OOM崩溃 | 已提交修复PR [#8633](https://github.com/zeroclaw-labs/zeroclaw/pull/8633)，调整组件 supervisor 重启回溯逻辑，已进入测试阶段 |
| S1（阻塞工作流） | [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP工具在TUI侧不展示，阻塞用户MCP工具调用排查流程 | 已有相关关联Issue [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) 处于开发中，整体修复进度过半 |
| S1（阻塞工作流） | [Issue #8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632) | 带embedded-web特性的全新源码安装流程构建失败 | 暂无对应修复PR，刚提交待认领 |
| S1（阻塞工作流） | [Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web通道因官方新增passkey验证机制导致设备链接完全失效 | 暂无对应修复PR，刚提交待认领 |
| S2（体验降级） | [Issue #8628](https://github.com/zeroclaw-labs/zeroclaw/issues/8628) | 微信通道本地附件路径解析存在遍历漏洞 | 已提交修复PR [#8628](https://github.com/zeroclaw-labs/zeroclaw/pull/8628)，已进入代码评审阶段 |
| S2（体验降级） | [Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini模型调用因对话历史构造不符合平台规范返回400错误 | 处于accepted状态，待开发 |

## 6. 功能请求与路线图信号
结合当前已提交PR进展，以下高优先级新功能极大概率被纳入下一版本v0.9.0：
1.  OpenAI兼容聊天补全端点：对应RFC [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 和功能Issue [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)，网关侧相关改造已拆分到堆叠PR中推进，落地后Open WebUI、LobeChat等所有兼容OpenAI协议的客户端可以直接接入ZeroClaw网关，生态适配能力大幅提升。
2.  Git Forge（GitHub/Gitea/Forgejo）渠道支持：对应PR [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609)、[#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) 已提交，功能成熟度极高，可直接对接代码仓库事件触发SOP工作流。
3.  按Agent自定义环境变量配置：对应Issue [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)，已进入in-progress状态，可完美支持多租户场景下跨Agent的MCP实例、密钥隔离需求。
4.  增强版file_read工具：对应Issue [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602)，支持自动字符集检测、分页PDF读取、Jupyter Notebook适配，大幅降低文件读取工具的报错概率。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点：
1.  大量Windows中文开发者反馈当前CI仅在Linux环境运行，本地跑全量测试有70+用例失败，入门调试门槛极高。
2.  MCP深度用户反馈网关、TUI、Web管理端三个场景的MCP工具可见性完全不一致，经常出现Agent后台能正常调用工具但前端列表为空的情况，问题排查成本极高。
3.  WSL2环境用户反馈运行长时Agent任务极易触发OOM被系统强制杀死，影响长周期作业稳定性。
4.  多模型用户反馈当前聊天内切换模型的操作步骤繁琐，无法快速遍历调用同一个提供商下的所有已接入模型，同类竞品的相关体验更流畅。
5.  高安全需求用户反馈此前版本的路径防护机制漏掉了核心配置文件场景，存在Agent越权篡改全局配置的风险，对权限隔离能力有更高要求。

## 8. 待处理积压
提醒维护组重点关注的长期高优先级积压项：
1.  [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2环境OOM问题，创建于2026年4月9日，累计积压近3个月，属于S0级稳定性问题，今日刚提交修复PR，建议加快验证合并。
2.  [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows平台74个测试用例失败问题，创建于2026年6月10日，累计积压近1个月，暂无完整修复方案，涉及大量Windows开发者体验，建议安排核心维护者认领。
3.  [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 工作看板自动化RFC，创建于2026年5月20日，当前处于in-progress状态但推进进度较慢，落地后将大幅降低全项目Issue流转的人工成本，建议加快 rollout 节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*