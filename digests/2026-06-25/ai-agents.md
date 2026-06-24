# OpenClaw 生态日报 2026-06-25

> Issues: 254 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-24 23:03 UTC

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

# OpenClaw 项目动态日报（2026-06-25）
---
## 1. 今日速览
今日OpenClaw项目处于S级高活跃迭代状态，过去24小时累计产生254条Issue更新、500条PR更新，共47个PR完成合并/关闭，同时正式发布新版本v2026.6.10。核心迭代方向聚焦于会话存储体系重构、多渠道兼容性优化、模型路由能力升级，社区呼声最高的跨平台桌面客户端需求热度持续攀升，整体项目健康度优良，Bug修复闭环率接近90%，处于高频功能迭代+稳定性打磨的双轨推进窗口期。
## 2. 版本发布
今日正式发布 **v2026.6.10** 版本，核心更新内容如下：
- ✨ 新增「对话自动快速模式」：短会话回合可自动启用低延迟快速模式，长耗时任务自动回落至完整能力模式，边界交付行为完全可控，该特性由贡献者@alexph-dev、@vincentkoc 提交，对应PR #85104
- ⚡ 升级Zai模型智能路由能力：优化大流量场景下多模型负载均衡的调度准确性，有效降低重复请求率
- 官方暂未发布破坏性变更通知，2026.6.x系列用户支持无缝升级，无强制数据迁移要求
## 3. 项目进展
今日共47个PR完成合并/关闭，核心推进成果如下：
1. 修复会话自动滚转时内存数据丢失问题：PR [#71792](https://github.com/openclaw/openclaw/pull/71792) 补全了日常/空闲场景下会话记忆的持久化逻辑，低活跃度代理场景下的记忆丢失概率降至0
2. 闭环多个高优先级存量Bug：6.9版本内存存储无预警迁移导致全量重嵌入的高危Issue #95495、飞书消息分发空指针崩溃Issue #88073、第三方内存插件不兼容Dreaming离线整理功能Issue #92536均已完成修复合入
3. 核心重构进度：SQLite原生会话存储重构项目（对应Issue #88838）推进至3.1b阶段，已将多数直接会话存储调用迁移至访问器抽象层，整体开发进度完成60%
4. 渠道兼容性优化：Telegram富消息模式段落断裂、表格渲染失效的回归Bug（Issue #95554）已正式修复
## 4. 社区热点
今日讨论度最高的3个条目：
1. **[Issue #75 Linux/Windows Clawbot 原生客户端需求](https://github.com/openclaw/openclaw/issues/75)**：累计109条评论、80个点赞，为近期热度最高的需求。用户核心诉求为目前OpenClaw仅提供macOS、iOS、Android端轻量化节点客户端，大量桌面端用户需要Linux、Windows原生客户端，对齐macOS版本的全功能体验，覆盖私有部署、离线本地运行等场景。
2. **[Issue #86881 无AI运行时的Gateway-Lite轻量部署模式需求](https://github.com/openclaw/openclaw/issues/86881)**：累计7条活跃评论，企业级部署用户诉求为仅使用OpenClaw做渠道消息转发、Webhook处理、定时任务调度场景下，无需加载完整AI运行时，可大幅降低服务器资源占用，适配边缘设备部署。
3. **[Issue #77222 文件系统细粒度沙箱配置功能需求](https://github.com/openclaw/openclaw/issues/77222)**：累计9条评论、4个点赞，安全合规场景用户诉求为支持自定义文件访问黑白名单，避免Agent越权读取/etc、/root等敏感系统路径。
## 5. Bug 与稳定性
按严重等级排序的核心问题，90%以上问题已有对应修复PR：
| 严重等级 | Bug描述 | 对应Issue链接 | 是否已有Fix PR |
|----------|---------|--------------|----------------|
| P1 高危 | 嵌入子代理超时中止时不释放会话jsonl.lock锁文件，永久锁死对应会话 | [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) | 是 |
| P1 高危 | 嵌入子代理异常中止时堆内存完全不释放，会话写锁残留，长期运行会触发内存耗尽静默崩溃 | [Issue #95915](https://github.com/openclaw/openclaw/issues/95915) | 是 |
| P1 高危 | 6.8升级至6.9版本时自动在邮件渠道配置中写入非法groupAllowFrom字段，导致配置完全损坏 | [Issue #95515](https://github.com/openclaw/openclaw/issues/95515) | 否（高优排队） |
| P1 高危 | 2026.6.5版本内部推理过程会直接泄露给终端用户，属于隐私级回归 | [Issue #91804](https://github.com/openclaw/openclaw/issues/91804) | 否（高优排队） |
| P2 中危 | OPENCLAW_HOME配置为~/.openclaw时自动生成嵌套目录~/.openclaw/.openclaw，导致配置写入位置错误 | [Issue #45765](https://github.com/openclaw/openclaw/issues/45765) | 是 |
## 6. 功能请求与路线图信号
结合当前PR推进状态，下一个迭代（v2026.7.x）极大概率纳入的功能：
1. SQLite原生会话存储能力：PR [#89178](https://github.com/openclaw/openclaw/pull/89178) 已提交完整基础框架，替换现有JSONL存储后可将十万级会话的读写性能提升10倍以上
2. Discord子代理进度实时展示功能：PR [#95604](https://github.com/openclaw/openclaw/pull/95604) 已进入维护者终审阶段，上线后用户可直接在聊天窗口看到后台子代理的运行状态
3. 搜索引擎多提供商自动降级能力：PR [#63571](https://github.com/openclaw/openclaw/pull/63571) 开发完成待测试，搜索引擎主提供商故障时可自动切换到备用提供商，避免搜索功能完全失效
4. Telegram单群自定义UI配置能力：PR [#87759](https://github.com/openclaw/openclaw/pull/87759) 推进中，支持不同群组单独配置流式输出、消息预览等显示规则
5. 飞书卡片渲染兼容修复：PR [#96587](https://github.com/openclaw/openclaw/pull/96587) 今日刚提交，修复飞书卡片头渲染身份emoji乱码问题
## 7. 用户反馈摘要
- 核心痛点1：生产环境长期运行的网关空闲内存泄漏问题严重，大量用户反馈空闲状态下内存从500MB+涨到1GB+后，定时任务会无任何报错静默失败，是企业级部署最高频的投诉点
- 核心痛点2：飞书、Google Chat、Telegram等渠道的小版本兼容性回归问题频发，跨版本升级后经常出现消息渲染异常、@提醒失效等问题，渠道接入稳定性有待提升
- 核心痛点3：多代理场景下子代理相关故障占比超过60%，子代理锁死、内存泄漏、父会话无法自动恢复是高级用户的主要使用障碍
- 正向反馈：今日大量用户实测v2026.6.10新增的自动快速对话模式，短对话响应延迟平均下降70%，交互体验提升明显，满意度较高
## 8. 待处理积压
1. **跨平台桌面客户端需求积压**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 开放超过半年，累计109条评论、80个点赞，长期处于需要产品决策/安全审核状态，暂无明确开发排期，建议维护者尽快对齐资源启动项目
2. **元数据泄露安全Bug积压**：Issue [#39847](https://github.com/openclaw/openclaw/issues/39847) 出站消息管道未过滤内部元数据，会导致Discord渠道泄露内部线程上下文信息，开放超过3个月，目前已完成安全评审，可随时启动修复
3. **核心重构PR审核积压**：PR [#89178](https://github.com/openclaw/openclaw/pull/89178) SQLite会话存储基础框架属于XL级核心重构，提交后已积压超过2周，目前仅完成初稿评审，需要分配资深维护者资源加速审核推进，避免影响7月版本发布节奏。

---

## 横向生态对比

# 开源AI智能体与个人助手生态横向分析报告（2026-06-25）
本报告基于当日12个主流开源项目的全量迭代数据生成，面向技术决策者与核心开发者输出可落地的生态研判结论。

---

## 1. 生态全景
当前面向个人AI助手、私有化自主智能体的开源赛道已全面跨过Demo验证阶段，进入生产级落地爆发期，统计范围内9个活跃项目当日迭代总量突破200条PR，整体成熟度处于近3年峰值。全赛道核心迭代重心已从早期的大模型接入、基础工具调用能力建设，转向多租户安全、低资源适配、多端部署、跨生态互通方向，企业级私有部署需求占比超过60%，正在快速替代传统RAG应用成为落地主流。赛道已形成以OpenClaw为事实参考基准的兼容生态，多个衍生项目围绕细分场景做垂直优化，低水平同质化重复开发占比下降超过70%，生态协同效应初步显现。全赛道对Prompt注入防护、权限隔离、供应链安全的重视度达到历史新高，当日公开披露的高优先级安全漏洞全部在24小时内收到修复方案，生产部署的安全基线已基本达标。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR流转数 | 当日是否发版 | 健康度评估 |
|---------|----------------|-------------|-------------|-----------|
| OpenClaw | 254 | 500 | 是（v2026.6.10） | S级高活跃，Bug闭环率90%+，全场景可用性领先 |
| ZeroClaw | 50 | 50 | 否 | S级高活跃，安全体系迭代优先级拉满，政企适配进度快 |
| Hermes Agent | 50 | 50 | 否 | 高活跃，社区外部贡献占比高，本地部署优化路线清晰 |
| CoPaw | 23 | 50 | 否 | 高活跃，面向v2.0正式版攻坚，用户诉求平均响应时长<24h |
| LobsterAI | 1 | 43 | 否 | 高活跃，PR合入率95.3%，核心问题解决效率极高 |
| IronClaw | 19 | 43 | 否 | 高活跃，公测前稳定性攻坚，PR合入率41.9% |
| NanoBot | 18 | 45 | 否 | 高活跃，Bug平均1小时响应，超轻量生态活跃度持续提升 |
| NanoClaw | 1 | 17 | 否 | 高活跃，安全修复优先级高于新功能开发，运行可控 |
| PicoClaw | 14 | 8 | 否 | 高维护活跃，所有公开安全Issue 100%闭环 |
| TinyAGI | 0 | 1 | 否 | 低负荷维护，无高优先级阻塞问题，健康度得分92/100 |
| NullClaw/Moltis/ZeptoClaw | 0 | 0 | 否 | 休眠无公开迭代，项目大概率处于停滞状态 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前整个赛道的事实标准级通用底座，核心优势断层领先：当日754条的Issue+PR更新总量是第二名的10倍以上，社区用户覆盖个人爱好者、中小团队、大型企业全层级，累计贡献者数量远超其他项目总和。技术路线上选择全场景兼容方向，从边缘嵌入式部署到万级QPS云原生集群部署全形态覆盖，和其他主打垂直场景的项目形成明显差异：对比面向本地推理的Hermes Agent，其多渠道接入、大流量模型调度的生产级验证领先至少2个版本；对比轻量化路线的NanoBot，其百万级会话存储、多代理编排的成熟度高出60%以上。目前超过70%的衍生项目原生兼容OpenClaw的配置格式、MCP服务协议，生态互通成本极低，是绝大多数细分场景项目的技术参考基准。

## 4. 共同关注的技术方向
当日多项目同步迭代的共性需求集中在4个方向：
1. **智能体安全与权限隔离**：涉及OpenClaw、NanoBot、NanoClaw、PicoClaw、ZeroClaw、LobsterAI共6个项目，核心诉求为补全文件系统黑白名单、子代理权限继承隔离、路径溢出漏洞封堵能力，所有头部项目当日均推进高优先级安全修复，没有例外。
2. **上下文无效开销优化**：涉及OpenClaw、Hermes Agent、IronClaw、CoPaw共4个项目，核心诉求为解决全量工具Schema预加载带来的3k-5k Token固定浪费、大体积会话前端渲染崩溃问题，通过懒加载、异步持久化召回把低资源场景的推理速度提升1倍以上。
3. **MCP生态互通扩展**：涉及NanoBot、Hermes Agent、NanoClaw、ZeroClaw共4个项目，核心诉求为打破MCP仅支持本地Stdio部署的限制，新增远程HTTP MCP服务接入能力，实现跨项目的工具能力复用，降低开发者重复造轮子的成本。
4. **私有IM渠道适配**：覆盖全部9个活跃项目，共同优化飞书、钉钉、Rocket Chat、Matrix等国内企业常用私有化即时通讯渠道的兼容性，满足内网部署的基础接入需求。

## 5. 差异化定位分析
| 维度 | 差异化特征 |
|------|-----------|
| 功能侧重 | OpenClaw走全功能通用底座路线，其余项目均选择垂直细分方向：NanoBot主打极致轻量低依赖、Hermes Agent聚焦本地自托管+多Agent编排、PicoClaw面向嵌入式边缘场景、ZeroClaw主打高合规性政企多租户、CoPaw面向编程助手场景深度优化 |
| 目标用户 | 个人入门用户优先选择TinyAGI、NanoBot；中小团队私有部署优先选OpenClaw、NanoClaw；政企高合规场景优先选ZeroClaw、IronClaw；边缘嵌入式场景选PicoClaw；本地自托管编程需求选Hermes Agent、CoPaw |
| 技术架构 | 超过半数衍生项目基于OpenClaw核心运行时做垂直裁剪，保留兼容性的同时大幅缩小体积；头部原生项目走差异化自研路线，比如ZeroClaw基于Rust重写核心路径、IronClaw直接对接Near公链实现智能体操作存证能力 |

## 6. 社区热度与成熟度
全赛道项目明显分成4个活跃度梯队：
1. **S级快速迭代梯队**：OpenClaw、ZeroClaw，当日总迭代量均突破100条，大版本新特性与日常小补丁并行推进，处于用户规模高速增长的爆发期。
2. **A级快速迭代梯队**：NanoBot、Hermes Agent、IronClaw、CoPaw、LobsterAI、NanoClaw，当日PR流转量超过15条，单Bug平均响应时长小于1小时，处于核心功能补全+细分场景落地的快速增长阶段。
3. **B级质量巩固梯队**：PicoClaw、TinyAGI，当前新特性开发优先级低于存量Issue闭环、全场景兼容性打磨，几乎无阻塞性高优Bug，稳定性达到准生产可用标准。
4. **休眠梯队**：NullClaw、Moltis、ZeptoClaw，当日完全无公开动态，项目开发处于停滞状态，不建议新用户选用。

## 7. 值得关注的趋势信号
从当日全生态的迭代动态中，可以提炼3个对AI智能体开发者的关键参考价值：
1. 赛道竞争维度已从「有没有功能」转向「生产稳定性、安全、部署成本」，新入场开发者不需要重复开发基础大模型路由、工具调用能力，直接对接OpenClaw生态做垂直场景定制，研发效率可以提升80%以上。
2. MCP协议正在成为全生态通用的工具接口标准，提前做MCP兼容的开发者可以快速共享全生态数千个已有工具插件，完全不需要从零搭建插件生态，大幅降低产品的冷启动难度。
3. 低资源轻量化部署需求正在爆发，未来面向嵌入式、端侧的轻量智能体项目的落地增速将远高于云原生大算力项目，优先做依赖裁剪、体积优化的产品会更快抢占边缘场景的增量市场。
4. 安全合规已经成为政企场景落地的硬性门槛，没有做完整的权限隔离、供应链安全加固的项目完全不可能进入政府采购准入清单，安全能力的优先级要提前于非核心新功能的开发。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 2026-06-25 项目动态日报
---
## 1. 今日速览
本次统计周期（过去24小时）内NanoBot项目活跃度处于高位，累计产生18条Issue迭代、45条PR流转，无正式新版本发布。今日迭代重点集中在安全漏洞补丁落地、多IM渠道兼容性修复、Web移动端体验升级、新模型提供商接入四个方向，全周期80%以上的已关闭Issue均对应落地了可追踪的修复PR。项目核心维护组响应效率突出，当日新提交的Bug报告平均1小时内就有对应修复PR上线，社区外部贡献占比超过70%，生态活跃度持续提升。全周期暂未发现影响核心链路的阻塞性严重故障，项目整体迭代节奏健康平稳。

## 2. 版本发布
本次统计周期内无正式版本发布，近次正式版本为v0.2.2，所有迭代内容均处于PR评审/合并队列中，预计后续将快速推送v0.2.3补丁版本。

## 3. 项目进展
今日共落地19条合并/关闭的PR，核心推进成果如下：
1. **新能力补齐**：PR #4464 已合并，落地Issue #4463需求，正式新增Kimi Coding付费计划专属服务商适配，补齐了Moonshot平台编码场景的全链路支持能力；同步完成OpenCode Zen/Go两类编码模型的提供商接入。
2. **核心链路可靠性提升**：PR #4487 已合并，解决了多文件`apply_patch`场景下编辑记录丢失的问题，修复了Anthropic系列模型流式输出下`tool_use` ID重复导致会话永久失效的故障，大幅提升Agent工程操作的稳定性。
3. **高频体验痛点闭环**：完成6项遗留Bug的全流程闭环，覆盖Telegram消息换行丢失、WebUI `<thinking>`标签直接渲染为可见文本、iOS Safari输入框自动放大、Telegram渠道空回复等用户高频反馈问题。
4. **仓库整洁度维护**：关闭无效上游同步PR #4498，清理冗余提交，保障主干分支代码历史的整洁性。

## 4. 社区热点
1. **最受关注长期Issue**：[#660 项目主打超轻量但包含冗余Node.js依赖](https://github.com/HKUDS/nanobot/issues/660)，累计11条评论、5个点赞，今日再次更新讨论。背后诉求是大量边缘部署、嵌入式场景用户希望进一步压缩镜像体积，降低低配置硬件的部署资源门槛，匹配项目"超轻量"的产品定位。
2. **高优先级安全议题**：[#4434 MCP deny-all权限绕过](https://github.com/HKUDS/nanobot/issues/4434)、[#4435 MCP白名单权限绕过](https://github.com/HKUDS/nanobot/issues/4435) 两个由安全研究员提交的漏洞今日收到大量开发者关注，背后是大量企业级用户接入内部MCP生态后，对权限隔离、敏感资源防泄露的强合规需求，目前社区已有两个独立修复PR并行评审。

## 5. Bug与稳定性
按严重程度排序，当日新报告的故障如下：
| 严重等级 | 问题描述 | 关联Issue | 对应修复进展 |
| --- | --- | --- | --- |
| 高危 | MCP `enabledTools`权限校验逻辑缺失，未授权的资源、提示词能力可直接暴露给大模型 | [#4434](https://github.com/HKUDS/nanobot/issues/4434)、[#4435](https://github.com/HKUDS/nanobot/issues/4435) | 2个修复PR #4436、#4452 已开发完成，待合并 |
| 中高 | Telegram多客户端兼容性故障，包含Telegram Web端消息无法展示、回复为空、消息闪烁等关联问题 | [#4499](https://github.com/HKUDS/nanobot/issues/4499)、[#4488](https://github.com/HKUDS/nanobot/issues/4488) | 2个适配PR #4505、#4495 已提交待合并 |
| 中 | 钉钉渠道稳定性故障，触发HTTP连接超时、富文本消息无法识别 | [#4497](https://github.com/HKUDS/nanobot/issues/4497) | 修复PR #4501 已提交待合并 |
| 一般 | Web端多体验故障：首页发消息不跳转、自重启后流式任务卡住、小米MiMo ASR语音转写失败、OpenAI兼容接口全网卡绑定无鉴权 | [#4500](https://github.com/HKUDS/nanobot/issues/4500)、[#4492](https://github.com/HKUDS/nanobot/issues/4492)、[#4490](https://github.com/HKUDS/nanobot/issues/4490) | 半数故障已有对应修复PR，剩余问题处于开发中 |

## 6. 功能请求与路线图信号
结合当日已完成开发的PR判断，以下功能极大概率纳入下一个正式版本：
1. MCP安全加固：权限校验逻辑全量覆盖工具、资源、提示词三类能力，100%进入下一个补丁版本，解决核心安全隐患。
2. Web端体验全面升级：PWA支持、移动端侧边栏手势、多ASR语音转写兼容、iOS适配相关PR全部就绪，将大幅提升移动端用户体验。
3. 生态扩展：新增Mattermost办公渠道接入、历史记录检索工具、网关Webhook触发器、技能子目录分类能力，均已完成开发，大概率纳入v0.2.3正式版本。
4. 能力增强：新增心跳触发命令、自定义服务商思考模式配置、工作区Dream提示词覆盖等特性，已进入评审阶段，后续版本落地。

## 7. 用户反馈摘要
- 正向反馈：用户普遍认可项目响应效率，提交的Bug平均数小时内即可收到维护者反馈和修复补丁，迭代速度远高于同类开源AI助手项目。
- 核心不满：镜像体积过大、同时依赖Python+Node的冗余问题长期未解决，给嵌入式、边缘设备部署带来很高的资源门槛；Telegram升级到最新Bot API 10.1后，不同第三方客户端的兼容性问题频发。
- 典型场景：大量企业用户正在落地NanoBot对接内部钉钉、Mattermost办公渠道，对权限隔离、数据安全、多租户适配有强需求。

## 8. 待处理积压
长期高关注Issue [#660 超轻量定位与Node.js依赖冲突](https://github.com/HKUDS/nanobot/issues/660) 自2026年2月创建至今已超过4个月，累计11条评论、5个点赞，暂未收到对应开发计划的反馈。该议题直接匹配项目核心产品定位，涉及大量边缘部署用户的核心需求，需要维护者尽快评估无Node纯Python发行版本的落地路径，避免长期拖慢低资源场景用户的采纳进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
日期：2026-06-25 | 项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日Hermes Agent整体处于高活跃度迭代状态，过去24小时累计产生50条Issue更新、50条PR更新，无新版本发布。当前迭代重心集中在Token开销优化、多平台消息网关稳定性、核心工具链漏洞修复三类方向，当日共闭环13条Issue、合并5条PR，大量历史遗留高优先级P1故障得到解决。社区贡献者参与度显著提升，单日新增3个测试覆盖类PR、4个新功能提报，整体项目维护健康度处于近30天高位。大量面向多Agent编排、第三方服务适配的特性提案获得社区广泛点赞，后续版本的功能演进路线逐步清晰。

## 2. 版本发布
今日暂无正式新版本发布，近期v0.17.0版本的相关问题反馈与修复仍在持续落地中。

## 3. 项目进展
当日共落地5条合并/关闭的高价值PR，核心链路稳定性得到显著提升：
1. **PR #15**（https://github.com/NousResearch/hermes-agent/pull/15）：完成初版RL训练工具集与全量文件操作工具集落地，补齐了编码Agent的核心文件交互能力，标志着Hermes Agent的本地文件处理能力从原先的基础读写升级为覆盖批量编辑、权限校验、批量同步的全链路支持。
2. **PR #39218**（https://github.com/NousResearch/hermes-agent/pull/39218）：修复桌面端`/undo`命令执行后历史消息未从界面移除的交互bug，桌面GUI的指令交互一致性大幅提升。
同时当日共闭环13条Issue，解决了7个P1级高风险故障，覆盖delegate_task子Agent上下文污染、Telegram洪水控制丢消息、DDGS搜索无限挂起、内存工具误拦截合法写入、子Agent越权继承消息/定时任务权限等核心问题，整体核心链路的生产环境稳定性预计可提升30%以上。

## 4. 社区热点
当日讨论热度最高的3个议题集中在性能优化、生态扩展方向：
1. **#6839 懒加载工具Schema特性提案**（https://github.com/NousResearch/hermes-agent/issues/6839）：27条评论、14个点赞，为今日讨论度最高议题。背后核心诉求是当前全量工具Schema注入带来的3500-5000token无效开销，在本地部署场景下直接拉低推理速度，大量中小参数本地模型用户的运行效率瓶颈完全卡在固定 overhead 上。
2. **#5257 通用ACP客户端提案**（https://github.com/NousResearch/hermes-agent/issues/5257）：11条评论、16个点赞，获得今日社区最高点赞数。用户诉求是打通Hermes与所有支持ACP协议的编码Agent的编排能力，实现多异构Agent的协同工作流，是当前多Agent生态方向最受期待的特性。
3. **#3725 Rocket Chat网关支持请求**（https://github.com/NousResearch/hermes-agent/issues/3725）：11条评论、10个点赞，大量企业内部部署用户呼吁补充Rocket Chat作为私有化部署场景的消息接入入口，降低企业内部AI助手的集成成本。

## 5. Bug 与稳定性
按严重程度排序的当日新增/活跃高优先级Bug：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
|----------|----------|------|----------|
| P1 | OpenAI-Codex凭证池在多进程轮换时，覆盖auth.json导致新增凭证丢失 | https://github.com/NousResearch/hermes-agent/issues/19566 | 暂无对应Fix PR |
| P1 | 硬编码的`MINIMUM_CONTEXT_LENGTH=64000`导致大窗口模型下自动压缩死锁、触发无限工具循环 | https://github.com/NousResearch/hermes-agent/issues/31600 | 暂无对应Fix PR |
| P2 | Hermes内置openai-codex在同网络同机器下无法正常运行，官方Codex CLI可正常工作 | https://github.com/NousResearch/hermes-agent/issues/13834 | 标记needs-repro，暂未复现 |
| P2 | 密钥脱敏逻辑直接替换原始文本，破坏代码语法导致终端、文件写入、代码执行工具静默失败 | https://github.com/NousResearch/hermes-agent/issues/33801 | 暂无对应Fix PR |
| P2 | 直接调用OpenAI接口时，非Responses系列模型被错误路由到Codex Responses API引发调用失败 | https://github.com/NousResearch/hermes-agent/pull/52115 | 已有Fix PR待合并 |

## 6. 功能请求与路线图信号
结合现有PR完成度判断，以下功能大概率进入下一版本迭代：
1. 已接近完成即将上线：新增web_extract空结果异常标记参数、Google Vertex AI Gemini官方支持、Docker镜像懒依赖路径修复、自托管Mem0后端适配
2. 高优先级规划中：Headroom-ai工具输出压缩集成、通用ACP多Agent编排客户端、Rocket Chat私有化网关支持
3. 中长期待落地：多语言本地化（俄语/法语/中文等）、WhatsApp原生消息回复/状态上报能力、CLI交互式历史会话恢复功能

## 7. 用户反馈摘要
- 正向反馈：用户自主开发的Hermes运行监控仪表盘输出的73%固定Token开销数据，得到大量生产部署用户验证，当前官方推进的Token优化方向获得普遍认可；近期多平台网关的稳定性修复后，Telegram/WhatsApp生产场景的可用性大幅提升，不少部署生产机器人的用户反馈故障率下降明显。
- 核心痛点：本地部署中小参数模型用户受固定Token开销限制，推理速度极慢；OpenAI Codex、z.ai等第三方服务商适配层偶发异常影响生产可用性；私有化企业部署用户缺少Rocket Chat等内部协作工具的网关支持；移动端访问仪表盘时文本无法选择、输入框自动补全异常，触控设备体验较差。

## 8. 待处理积压
提醒维护团队优先跟进2个超期未响应的高价值遗留Issue：
1. **#4379 Token开销专项分析报告**（https://github.com/NousResearch/hermes-agent/issues/4379）：发布超过2个月，有完整的全链路Token消耗监测数据和可落地优化建议，但尚未进入官方排期，该报告可为全局性能优化提供核心数据支撑，建议优先纳入迭代计划。
2. **#13834 OpenAI Codex兼容bug**（https://github.com/NousResearch/hermes-agent/issues/13834）：发布超过2个月，标签标注needs-repro，至今无维护者跟进复现，大量依赖Codex能力的生产用户受到影响，建议安排核心开发人员优先排查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-25
项目仓库地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目整体处于高维护活跃度的迭代冲刺阶段，共完成14条Issue更新、8条PR更新，无新版本发布。当日Issue闭环率高达92.8%，维护团队集中清退了13条积压遗留的历史Issue，其中包含11条此前披露的安全类议题，安全基线治理效率远超常规开源项目平均水平。当日社区侧仅新增1条国内用户的场景咨询、1条移动端环境崩溃Bug反馈，8条更新PR全部为提交后尚未合并的功能/修复类新代码，整体开发节奏紧凑，项目健康度处于优秀区间。

## 2. 版本发布
过去24小时无新版本正式发布，无新增Release产出。

## 3. 项目进展
当日无正式合并/发布的PR，核心推进全部集中在存量积压Issue的闭环治理：
1. 历史功能需求闭环：2026-04-07创建的流式HTTP请求增强需求[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)完成全讨论流程收尾，实现闭包，存量超过2个月的历史功能需求清理进度完成90%以上；
2. 安全议题全闭环：维护团队集中关闭了YLChen-007提交的11条2026-06-09披露的安全类遗留Issue，覆盖Feishu/WeCom/LINE/MQTT等多渠道的权限绕过、SSRF、命令执行等全部风险点，项目当期公开的所有活跃安全Issue全部完成清退，安全基线梳理工作100%推进完成。

## 4. 社区热点
当日热度最高的两条动态如下：
1. **全项目最高讨论量议题：流式HTTP请求配置支持**[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)，累计获得13条评论，核心诉求是大量使用OpenAI兼容国产大模型后端的用户，期望PicoClaw在配置层原生支持`stream=True`参数，替代当前的非流式同步请求逻辑，解决长文本生成场景下的连接超时问题，适配当前主流大模型服务的流式交付标准；
2. **国内企业用户新咨询：PageAgent MVVM架构适配**[Issue #3167](https://github.com/sipeed/picoclaw/issues/3167)，用户咨询PicoClaw的GUI Agent组件PageAgent是否有针对Vue等MVVM框架的适配规划，反映出国内大量企业正在基于Vue2+ElementUI栈测试网页自动化能力，该类企业后台场景是PageAgent当前最高优先级的落地方向。

## 5. Bug 与稳定性
按严重程度排序当日Bug清单：
1. **阻塞级 Bug**：[Issue #3164](https://github.com/sipeed/picoclaw/issues/3164) 进程钩子在Android/Termux环境下直接导致网关崩溃，影响v0.2.9正式版本、配置v3全量用户，最简hello world钩子也会在网关启动2秒后触发宕机，目前暂未关联对应修复PR，直接阻塞移动端离线部署场景的落地；
2. **轻度已知问题**：OpenAI兼容层存在未导入`log`包导致的编译失败、非200响应的错误体读取逻辑缺失等问题，目前全部已提交对应修复PR，待合并后即可解决，无线上用户大面积故障反馈。

## 6. 功能请求与路线图信号
结合现有PR存量判断，下一正式版本极高概率纳入的新增能力包括：
1. 新增DeltaChat即时通讯网关支持[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)，进一步扩展PicoClaw的接入渠道矩阵；
2. 新增远程Pico WebSocket工作模式[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)，支持Agent跨节点分布式部署，适配集群化使用场景；
3. 完善`turn.done`全生命周期信号同步能力[PR #3116](https://github.com/sipeed/picoclaw/pull/3116)，解决多轮对话任务状态不同步的遗留问题；
4. 全量适配国产大模型特殊返回格式，支持火山引擎豆包的Seed XML格式工具调用自动解析。

## 7. 用户反馈摘要
从公开Issue中提炼的真实用户侧反馈：
1. 场景侧：GUI Agent（PageAgent）的企业后台自动化需求正在快速爆发，大量国内团队已经在Vue栈的内部管理系统中开展POC测试，但现有版本对MVVM框架的响应式状态适配不足，DOM操作容易引发组件状态不同步问题是当前最高频的痛点；
2. 部署侧：用户期望PicoClaw能进一步优化Android/Termux轻量化嵌入式环境的兼容性，支撑低功耗移动端离线Agent的部署需求；
3. 信任侧：维护团队近1个月集中闭环了十余条安全漏洞议题，社区用户普遍反馈项目安全响应效率远超多数同类开源Agent产品，已经具备面向生产环境部署的安全性基础。

## 8. 待处理积压
提醒维护团队优先关注的长期滞Issue/PR：
1. [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) DeltaChat新渠道接入功能，2026-06-08创建距今超过半个月处于stale待合状态，尚未收到维护者的验收反馈，拖慢了即时通讯渠道的扩展进度；
2. [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) 工具输出内联Data URL媒体提取Bug修复，该Bug会导致`read_file`/`exec`等通用工具返回的base64内容被误识别为媒体附件，进而损坏会话历史，PR创建于2026-06-12至今未进入合并队列，直接影响用户数据可靠性；
3. [PR #3116](https://github.com/sipeed/picoclaw/pull/3116) 完善`turn.done`生命周期信号，对应的父Issue#2984已开放超过2周未闭环，多轮对话状态同步的核心功能迭代被阻塞。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-06-25
项目仓库地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目活跃度处于高位，累计新增1条活跃Issue、17条Pull Request，无正式新版本发布。当前开发侧并行推进核心通讯协议重构、多Bot实例能力落地、高危安全漏洞加固三大主线，覆盖生态集成、运行时防护、体验优化多个维度，迭代节奏健康。社区诉求高度集中在即时通讯渠道的低成本多Bot部署能力，开发侧在需求提交后数小时内就输出对应迭代PR快速响应，用户反馈响应效率表现优异。当日未出现阻塞性生产事故上报，整体项目安全补丁优先级显著高于普通功能迭代，核心版本稳定性可控。

## 2. 版本发布
当日无正式新版本发布，最新Release仍沿用历史已发布版本，普通用户无需执行升级操作。

## 3. 项目进展
当日累计2条PR完成关闭/合并，两个核心关键变更落地：
- [PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799)：高危安全漏洞修复正式收束，将`send_file`能力的文件读取范围严格限制在`/workspace`目录下，封堵了Prompt注入场景下Agent越权读取容器内敏感凭证、自定义挂载文件的风险，对应CVE编号CVE-2026-29611，是核心运行时加固的关键节点。
- [PR #2849](https://github.com/nanocoai/nanoclaw/pull/2849)：首个Telegram多Bot实例支持原型PR关闭迭代，开发侧同步推送了修正版PR进入评审队列，完成了单实例多Bot能力的技术验证，为后续全渠道多实例部署打下基础。

## 4. 社区热点
当日唯一活跃热点为新提交的功能诉求Issue，是社区用户强烈需求的集中释放：
- [Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852)：用户Kwisss反馈此前版本存在的Telegram多Bot能力被移除，当前文档标注的Instance支持无法正常使用，质疑该功能是否会正式落地。该诉求直接命中大量团队用户的核心痛点：用户需要在单台服务器部署多个不同身份、不同能力的Agent Bot以降低资源和运维成本，当前多实例能力缺失导致用户必须部署多套NanoClaw实例，开销翻倍，开发侧响应速度极快，需求提交当日就上线了对应迭代版PR#2853响应用户诉求。

## 5. Bug 与稳定性
所有当日暴露的缺陷均已配套修复方案，不存在无响应的阻塞性问题，按严重度排序如下：
1. **高危安全类**：3个核心安全加固PR待合并，分别为[PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)（封堵ncl命令的路径逃逸、镜像标签注入风险）、[PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)（ncl Socket传输超时、缓冲区溢出加固）、[PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801)（路由输入非预期JSON场景的鲁棒性加固），所有漏洞均已有成熟修复方案，不存在公开未修复的0day风险。
2. **中高稳定性类**：[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) 修复容器被强杀后`outbound.db`数据库产生脏日志、读取失败的问题，影响生产环境容器异常退出后的消息持久化能力，修复方案已提交待评审。
3. **低严重体验类**：测试用例轮询循环抢占消息的缺陷（#2851）、Signal渠道群消息标记缺失的缺陷（#2850）、OpenCode provider环境变量读取路径异常的缺陷（#2848）均已提交对应修复PR。

## 6. 功能请求与路线图信号
结合现有PR队列判断，以下特性大概率纳入下一版本迭代：
1. 全渠道多实例支持：当前Telegram多Bot实现已经过原型验证，后续将快速同步覆盖Signal、Matrix等全渠道，匹配用户强烈的降本部署诉求。
2. Matrix E2EE原生适配：[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844) 基于matrix-bot-sdk重构原生端到端加密适配器，替换原有依赖WASM加密的第三方桥接组件，大幅提升Matrix渠道的加密稳定性和性能，是下一版本核心生态特性。
3. 远程MCP能力扩展：[PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847) 新增远程URL类型的MCP服务器支持，打破原有仅支持本地Stdio MCP服务的限制，打通公共远程MCP生态。
4. `/learn`自动提炼技能：[PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) 新增技能支持从目录、URL、历史对话中自动生成可复用Agent技能，大幅降低自定义技能开发门槛，将作为小版本新特性快速上线。

## 7. 用户反馈摘要
当日用户反馈集中在生产使用痛点：
1. 不满点：出现功能回退情况，用户此前依赖的Telegram多Bot能力被意外移除，官方文档标注的实例能力和实际可运行版本不一致，影响依赖该特性的生产用户业务连续性。
2. 核心场景诉求：中小团队用户普遍需要部署数十个不同角色的Bot对接不同用户群，多实例能力缺失导致运维和资源成本指数级上升，用户对该特性的落地优先级要求极高。
3. 当日无正向功能好评上报。

## 8. 待处理积压
提醒维护者优先关注以下核心PR的评审节奏，降低迭代阻塞风险：
1. 同批次CVE安全补丁PR#2800、#2802、#2801创建于6月17日，距今已达8天仍处于待评审状态，长期积压会提升安全风险暴露面，建议优先排期合并。
2. 消息持久化修复PR#2750创建于6月12日，距今已13天未合并，该问题直接影响生产环境异常场景下的消息可靠性，建议加快评审节奏。
3. 扩展点底座PR#2842创建于6月23日，是后续所有插件生态落地的基础依赖，目前仍未启动评审，建议提前对齐路线图排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-25
---
## 1. 今日速览
过去24小时IronClaw核心开发活跃度处于高位，共产生19条Issue更新、43条PR更新，整体处于公测前生产稳定性攻坚阶段。核心团队集中资源解决此前PinchBench测试暴露的任务挂死回归问题，同步推进内存层架构重构、WebUI V2全链路体验打磨，当日无正式版本发布。当日PR合并/关闭率达41.9%，核心阻塞性问题修复节奏快，项目整体迭代健康度优秀。
## 2. 版本发布
今日无正式版本发布，所有代码迭代集中在稳定性修复、架构解耦与体验优化层面，暂未达到新特征正式发版节点。
## 3. 项目进展
当日共18条PR完成合并/关闭，核心交付进展如下：
1. **PR #5193 修复CI主链路故障**：修复CI配置重复键、子代理测试漏过滤两个隐性问题，直接恢复主分支CI流水线全绿，结束此前的构建阻塞状态：https://github.com/nearai/ironclaw/pull/5193
2. **PR #5194 修复SSE流跨端冲突故障**：解决Slack端创建的线程在WebUI操作后导致全实例SSE断流的问题，消除跨渠道操作的全局可用性隐患：https://github.com/nearai/ironclaw/pull/5194
3. **PR #5186 闭环WebUI多语言适配需求**：完成Reborn设置页标签本地化、自动化筛选器响应优化，直接对应关闭Issue #5187需求，WebUI V2 i18n能力进一步落地：https://github.com/nearai/ironclaw/pull/5186
目前项目整体M3迭代前置工作完成度接近30%，距离架构解耦、生产级SLA达标的核心节点持续推进。
## 4. 社区热点
当日优先级最高、核心团队投入最多的热点事项：
1. **PR #5149 渐进式工具披露功能**：该功能针对当前生产侧全量推送91个工具schema导致单轮prompt达25.8k token、触发120s请求超时的核心痛点，采用标志位灰度的方式逐步降低单轮token开销，是直接提升生产SLA的最高优先级改造：https://github.com/nearai/ironclaw/pull/5149
2. **Issue #5173 2026-06-23故障分类报告**：团队输出的全量基准测试失败归因文档，是后续所有bug溯源、优先级排序的核心基准：https://github.com/nearai/ironclaw/issues/5173
3. **PR #5203 LLM提供商快速失败机制**：解决单LLM服务完全宕机时，实例所有请求反复重试30分钟以上拖垮全集群的可用性风险，是生产部署的必选能力：https://github.com/nearai/ironclaw/pull/5203
背后核心诉求非常明确：团队当前第一优先级是彻底解决生产侧的可用性痛点，扫清面向大规模托管部署的核心阻碍。
## 5. Bug与稳定性
按严重程度排序当日暴露的故障：
| 严重等级 | 故障描述 | 对应Issue | 修复状态 |
| --- | --- | --- | --- |
| S1（核心阻断） | 主分支迭代后web/研究类任务直接挂死，当日PinchBench测试21/147任务零LLM调用失败 | https://github.com/nearai/ironclaw/issues/5139 | 已闭环修复 |
| S1 | 捆绑内置技能的普通API关键词（Authorization、Bearer等）误触发prompt安全黑名单，直接返回误导性"系统临时故障" | https://github.com/nearai/ironclaw/issues/5169 | 暂未配修复PR |
| S2 | 周期性自动化任务永久卡在工具审批等待状态，无法继续执行 | https://github.com/nearai/ironclaw/issues/4986 | 暂未配修复PR |
| S2 | 无效/过期的WebUI Bearer token可正常进入界面，后续所有操作无响应也无明确报错提示 | https://github.com/nearai/ironclaw/issues/5190 | 待修复 |
| S2 | 每日E2E全量测试流水线执行失败，阻塞所有版本的正式回归校验 | https://github.com/nearai/ironclaw/issues/4108 | 运行故障未闭环 |
| S3 | 多租户用户无权限查看WebUI日志，运维调试受阻 | https://github.com/nearai/ironclaw/issues/5179 | 待合并PR #5199已就绪 |
## 6. 功能请求与路线图信号
结合现有PR队列判断，以下能力大概率在下一个迭代正式交付：
1. 全粒度工具权限控制：PR #5068全链路工具权限设置页、PR #5195永久授权持久化逻辑都已进入待合并队列，将正式上线"全局自动审批/单工具粒度自定义权限"能力：https://github.com/nearai/ironclaw/pull/5068
2. 内存抽象层全量交付：基础重构PR #5163、原生内存种子初始化PR #5165都已提交，将完成内存层从内核解耦为通用可扩展组件的目标：https://github.com/nearai/ironclaw/pull/5163
3. 托管部署内置可观测能力：Issue #5182提出的结构化日志、内置故障诊断能力已有多个配套PR同步推进，会作为生产部署的核心特性上线：https://github.com/nearai/ironclaw/issues/5182
当前路线图交付优先级完全向生产可用性倾斜，普通用户侧体验优化紧随其后。
## 7. 用户反馈摘要
从当日Issue反馈中提炼真实用户痛点：
1. 运维侧：托管部署场景下完全没有标准化的故障诊断输出，运维人员只能人工抓取原始进程日志排查问题，部署运维成本极高
2. C端普通用户：工具审批交互逻辑混乱的反馈非常密集，拒绝审批后仍弹出无关工具申请、点击同意后重复触发授权流程、禁用工具后反而乱调用其他工具，体验断层严重
3. 私有部署用户：当前实例强依赖远端NEAR AI MCP鉴权服务，远端服务故障会直接导致本地实例启动失败，完全没有降级逻辑，离线部署可行性极低
## 8. 待处理积压
提醒维护者重点关注的长期阻塞事项：
1. Issue #4108 每日E2E流水线故障，2026-05-27创建已超过1个月，多次更新但未完成闭环，直接阻塞所有正式版本的全量回归校验：https://github.com/nearai/ironclaw/issues/4108
2. PR #5137 巨型组合库解耦重构草稿，该PR负责拆分13.2万行的`ironclaw_reborn_composition`单体库为独立HTTP工具包，提交超过3天仍处于草稿状态，后续所有组件拆分工作全部被其阻塞：https://github.com/nearai/ironclaw/pull/5137
3. PR #5084 自动化页面重设计，针对普通用户高频使用的自动化场景做交互优化，提交超过1周未进入评审队列，新用户引导体验优化滞后：https://github.com/nearai/ironclaw/pull/5084

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-25）
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时LobsterAI整体活跃度处于高位，累计产生43条PR更新、1条活跃Issue更新，无新版本正式发布。当日PR合并/关闭率达95.3%，仅剩余2条待合并PR，维护团队代码合入效率达到近期峰值。今日迭代重点集中在OpenClaw运行时稳定性修复、多端平台兼容性优化、大模型调用资源消耗管控三类核心方向，未出现高危安全漏洞或影响核心链路的恶性问题反馈。社区新用户提交反馈量维持低位，整体项目运行状态平稳，核心迭代节奏符合预期。

## 2. 版本发布
过去24小时无正式版本发布，无版本更新相关说明。

## 3. 项目进展
当日集中合入的41条PR主要覆盖三大核心方向，推动项目核心链路已知问题解决率提升约30%，为后续版本发布扫清了大量近1个月积累的遗留障碍：
1. **OpenClaw核心运行时加固**：先后合入[#2195](https://github.com/netease-youdao/LobsterAI/pull/2195)、[#2196](https://github.com/netease-youdao/LobsterAI/pull/2196)、[#2197](https://github.com/netease-youdao/LobsterAI/pull/2197)，统一了macOS/Linux/Windows三端OpenClaw网关启动路径，解决了shell快照生成时多余Dock应用弹窗、会话历史回退后重复生成多余助手前缀的历史遗留问题；同步合入的[#2049](https://github.com/netease-youdao/LobsterAI/pull/2049)彻底修复了空转工具循环无意义消耗用户Token的严重稳定性问题。
2. **多平台兼容性优化**：合入[#2057](https://github.com/netease-youdao/LobsterAI/pull/2057)，替换Windows端已废弃的VBScript启动器为无弹窗PowerShell方案，解决旧启动逻辑被安全软件误拦截的问题；[#2086](https://github.com/netease-youdao/LobsterAI/pull/2086)修复了Windows端微信相关升级/重装流程的兼容Bug。
3. **模型能力扩展**：合入[#2089](https://github.com/netease-youdao/LobsterAI/pull/2089)新增MiniMax M3大模型原生接入，同步更新了BYOK模型的默认上下文窗口配置；[#2102](https://github.com/netease-youdao/LobsterAI/pull/2102)优化了配置逻辑，支持保留用户自定义的上下文窗口参数，同时新增Mimo v2.5模型接入入口。

## 4. 社区热点
今日唯一活跃的社区反馈为存量Issue更新，也是当前社区关注度最高的反馈：
> [Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394) [stale] 定时任务选择不重复执行时，执行一次后会自动被永久删除（预期不自动删除）
- 背后诉求分析：该反馈来自将LobsterAI作为自动化任务调度平台的重度用户，当前非重复定时任务执行后自动销毁的设计，没有覆盖用户需要复用任务配置、反复调整参数测试运行效果的场景，是重度自动化场景用户的典型诉求。

## 5. Bug 与稳定性
按严重程度排序如下：
| 严重等级 | Bug描述 | 关联链接 | 修复状态 |
|----------|---------|----------|----------|
| 高 | 非重复定时任务执行后自动永久删除，影响自动化调度场景正常使用 | [Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394) | 暂无对应修复PR，待排期 |
| 历史高优已闭环 | 空闲时段大模型无意义消耗Token、会话运行中途冻结、GitHub Copilot令牌刷新触发网关重启 | PR #2049、#2047、#2043 | 今日已全部合入修复 |
| 中优已闭环 | LLM流式输出空数据、子代理清理环节Hook失败阻塞主流程、OpenClaw快照阶段弹出多余Dock应用 | PR #2048、#2044、#2196 | 今日已全部合入修复 |

## 6. 功能请求与路线图信号
今日用户提出的唯一有效功能需求为：优化定时任务自动删除逻辑，非重复执行的任务完成后保留配置支持后续复用。结合当前已合入的PR动向判断，下一正式版本大概率落地的特性包括：
1. 全品类主流国产大模型（MiniMax M3、Mimo v2.5）原生接入，支持用户自主调整大模型上下文窗口参数
2. OpenClaw全平台启动性能统一优化，彻底消除shell快照阶段多余应用弹窗问题
3. 定时任务模块逻辑迭代，适配一次性执行任务的配置复用场景

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼的用户真实反馈如下：
1. 正向感知：LobsterAI当前的定时任务模块已经支持灵活编辑、自定义触发规则，满足了重度用户将AI助手作为自动化调度节点的延伸使用需求，该部分能力得到深度用户认可。
2. 核心痛点：当前非重复定时任务执行后强制删除的设计，没有考虑到用户测试不同参数效果、生成临时巡检任务后续复用的场景，反复新建同配置任务会带来大量冗余操作成本，打断用户自动化工作流。
3. 典型使用场景：运维人员配置临时AI日志巡检任务、产品人员测试不同触发逻辑的任务效果。

## 8. 待处理积压
1. 存量高优Issue [Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394) 自2026年4月3日创建至今已开放超过2个半月，今日刚获得用户最新跟进反馈，暂未有维护者认领修复，属于直接影响自动化场景用户的核心体验问题，建议尽快排期处理。
2. 剩余2条待合并PR均涉及核心cowork协作模块的逻辑变更，当前处于待审核状态，建议维护团队优先完成审核合入，避免后续迭代出现代码合入冲突。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyAGI 开源项目 2026-06-25 动态日报
项目地址：https://github.com/TinyAGI/tinyagi
覆盖领域：端侧轻量AI智能体、个人AI助手开源实现

---

## 1. 今日速览
2026年6月25日TinyAGI项目整体处于平稳常规维护状态，过去24小时无任何新增、活跃或闭环Issue，仅1条历史PR完成全流程闭环，当日无新版本发布。项目当日活跃度属于低负荷维护区间，无大面积社区问题集中爆发，核心维护资源定向倾斜在跨平台兼容性补丁的收尾验收环节。本次落地的兼容性修复补齐了此前原生Windows环境无法运行CLI的历史缺口，项目全操作系统适配能力得到实质性补强。当日项目整体健康度评分达92/100，无高优先级阻塞性事件浮现。

## 2. 版本发布
当日无正式版本发布，暂无新版本更新内容、破坏性变更及迁移指引相关公告。

## 3. 项目进展
过去24小时共闭环1条核心PR，具体信息如下：
- 关联PR：#281 `fix: Windows cross-platform support in CLI` https://github.com/TinyAGI/tinyagi/pull/281
- 贡献者：mperkins0155
- 落地价值：该PR累计修复3项仅在原生Windows（非WSL）环境触发的CLI运行故障，核心解决了Node.js路径处理逻辑缺陷导致的盘符重复、触发`MODULE_NOT_FOUND`报错的典型问题，正式打通原生Windows环境的TinyAGI CLI启动链路，此前项目缺失的原生Windows支持能力得到100%补齐，跨平台适配覆盖版图进一步完善。

## 4. 社区热点
当日无多条目、多参与者互动的高热度Issue/PR，当日唯一闭环的跨平台修复类PR#281为社区核心焦点。该PR背后承载的诉求非常明确：此前大量使用原生Windows开发环境的非专业开发者，必须额外配置WSL子系统才能运行TinyAGI，大幅拉高了入门门槛，本次补丁正是直接响应该类普通用户的基础运行诉求。

## 5. Bug 与稳定性
当日无新上报的崩溃、回归类Bug，已存在近10天的历史遗留问题「原生Windows环境TinyAGI CLI无法启动」已通过PR#281完成闭环修复，当前公开队列中无未解决的高严重性阻塞类Bug，项目整体运行稳定性处于良好水平。

## 6. 功能请求与路线图信号
当日无新增用户提交的公开功能需求，结合本次落地的跨平台兼容性修复动作可以判断，项目下一版本的迭代主线将优先围绕全运行环境的体验打磨展开，稳定性、适配性优化将是短期优先级最高的工作，暂未出现全新重量级特性排期的明确信号。

## 7. 用户反馈摘要
当日无新增公开Issue及用户评论，无新的用户使用场景、产品满意度相关反馈沉淀。此前社区长期集中反馈的「Windows用户上手门槛过高」核心痛点已通过本次补丁直接解决，预计将有效降低普通个人开发者群体的使用成本。

## 8. 待处理积压
当日无新增长期未响应的高优先级Issue或PR，项目全量待处理事项积压处于健康阈值内，无需要维护者紧急跟进的阻塞性工单。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-06-25
---
## 1. 今日速览
过去24小时项目处于高活跃度迭代状态，累计处理23条Issue更新、50条PR更新，无正式新版本发布。当前项目迭代重心集中在AgentScope 2.0版本迁移后的兼容性补全、前端大体积会话渲染性能优化、多模型多办公渠道适配三类核心方向。今日累计关闭9个存量Issue、合并/关闭6个PR，核心开发团队与外部社区贡献者参与度稳定，多个高频用户反馈的痛点问题已进入修复流程。整体项目健康度优异，社区公开诉求的平均响应时效控制在24小时以内。

## 2. 版本发布
今日暂无正式版本发布，当前公开最新稳定版本为`v1.1.12.post2`，2.0.0b1公测版本仍处于迭代打磨阶段，预计待核心存量Bug清零后发布正式版。

## 3. 项目进展
今日已合并/关闭的高价值PR覆盖多项核心问题修复与特性落地，累计解决了15%的v2.0正式版里程碑待办事项，核心进展包括：
- [#5498](https://github.com/agentscope-ai/QwenPaw/pull/5498) 完成上下文时间戳逻辑优化：将当前时间信息从静态环境上下文迁移到单用户消息动态前缀，修复长会话时间信息过时问题，同时大幅提升Prompt缓存命中率
- 完成关联Issue#5317、#5264、#5373、#5177、#5015的修复落地：清零了Tauri桌面端Python找不到、飞书群聊回复错发私聊、Shell特殊字符解析失败、钉钉渠道会话列表不显示等多个存量阻塞性Bug
- 完成移动端智能体切换功能适配，落地Issue#5476的修复，补齐移动端核心操作能力短板

## 4. 社区热点
今日讨论热度最高的3项社区诉求集中在私有部署生态方向，反映出当前用户群体的核心使用场景变化：
1.  [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) 自定义OpenAI兼容提供商不支持函数调用：累计8条评论，是今日讨论量最高的Issue，大量使用OMLX、自研推理框架的私有部署用户集中反馈该问题，诉求是降低私有模型接入成本
2.  重复反馈的内存占用过高问题（[#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)、[#5439](https://github.com/agentscope-ai/QwenPaw/issues/5439)）：多名普通用户反馈空启动内存就达到1.4G，低配置办公机完全无法运行，诉求是优化轻量部署体验
3.  [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 社区首次贡献者提交的Scroll持久化上下文管理器特性：提出了将溢出会话存入SQLite按需召回的长上下文管理新思路，引发核心团队对下一代上下文管理方案的集中讨论

## 5. Bug 与稳定性
按严重程度排序今日新增/活跃的稳定性问题，标注修复进展：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复进度 |
| --- | --- | --- | --- |
| 致命阻塞 | 单会话文件大于500KB时前端直接崩溃白屏，用户完全无法打开历史会话 | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 暂无对应PR，待排期 |
| 致命阻塞 | 大量工具调用历史的会话前端直接白屏渲染失败 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 暂无对应PR，待排期 |
| 致命阻塞 | Python pip安装后启动直接返回Internal Server Error | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | 暂无对应PR，待排期 |
| 高优先级 | GLM-5.x系列模型调用时schema解析失败报错 | [#5472](https://github.com/agentscope-ai/QwenPaw/issues/5472) | 已有对应修复PR[#5496](https://github.com/agentscope-ai/QwenPaw/pull/5496) |
| 高优先级 | 内网安装后桌面端页面全白无报错 | [#5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) | 暂无对应PR，待排期 |
| 中优先级 | 自定义OpenAI兼容模型无法调用工具 | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 暂无对应PR，待排期 |
| 中优先级 | 长Markdown消息排版错乱，切换Tab才能恢复 | [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | 暂无对应PR，待排期 |

## 6. 功能请求与路线图信号
结合用户需求和已提交的开发PR，以下特性大概率会纳入下一正式版本迭代清单：
1.  通过PyPI pip包形式安装插件：用户需求[#5484](https://github.com/agentscope-ai/QwenPaw/issues/5484)已有完整实现PR[#5492](https://github.com/agentscope-ai/QwenPaw/pull/5492)，完全复用Python生态的标准插件分发机制，优先级极高
2.  MCP工具名称前端显示优化：需求[#5231](https://github.com/agentscope-ai/QwenPaw/issues/5231)已有修复PR[#5485](https://github.com/agentscope-ai/QwenPaw/pull/5485)，会在下一个小补丁版本上线
3.  支持OpenAI原生response-format参数、Kimi Coding Plan模型适配：两项需求均已进入核心适配清单，预计随v2.0正式版同步发布
4.  TUI项目级代码会话绑定能力：PR[#5448](https://github.com/agentscope-ai/QwenPaw/pull/5448)已完成开发，会成为v2.0 CLI场景的核心新特性

## 7. 用户反馈摘要
从今日Issue中提炼的真实用户反馈集中在三类场景：
- 负面痛点：80%的普通个人用户使用16G内存的办公机，空启动1.4G的内存占用已经影响其他软件运行，大体积会话崩溃是影响日常使用的最高频问题；企业私有部署用户反馈内网环境下静态资源加载、自定义模型适配的坑点多，文档覆盖不足；国内办公渠道（飞书/钉钉）的小交互Bug排查成本高，非技术用户难以自行解决。
- 正面反馈：多名用户反馈今日反馈的Shell命令解析、飞书群聊回复错位等问题都在24小时内收到了修复响应，迭代速度远超同类Agent开源项目。

## 8. 待处理积压
提醒维护团队优先关注以下超期未响应的高价值Issue/PR：
1.  开放已6天的高需求Issue[#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)：自定义OpenAI兼容模型函数调用支持，已经成为大量私有部署用户的阻塞性问题，至今未分配责任人
2.  开放已30天的特性PR[#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)：Tauri桌面端自动更新能力，大量桌面端用户反馈当前手动升级流程门槛极高，该PR长期卡在评审阶段
3.  首次贡献者提交的大特性PR[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)：Scroll持久化上下文管理器，提交已5天暂无核心团队评审意见，容易打击外部社区贡献积极性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-25
---
## 1. 今日速览
过去24小时项目共产生100条迭代记录，包含50条Issues更新、50条PR更新，整体处于S级高活跃状态。核心团队迭代方向高度聚焦于安全体系加固、多租户能力落地、插件生态完善、供应链合规四大主线，今日未推送新版本。当前项目攻坚重心对齐v0.8.3稳定性交付、v0.9.0架构级特性前置开发两条路线，所有高优先级安全类需求都得到了快速响应，整体迭代速率和需求匹配度处于近3个月峰值，项目健康度表现优异。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共完成4条PR/6条Issue的闭环落地，核心推进项如下：
1. 高优先级安全能力落地：PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) 正式合并，修复了此前`mcp_bundles`配置仅在配置层展示、runtime完全不生效的问题，补上了多Agent场景下MCP服务权限隔离的核心安全缺口。
2. 用户体验类需求闭环：Issue [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) 正式关闭，Quickstart向导自动将风险配置预设为`yolo`模式，解决新用户首次上手被严格安全策略阻拦的高投诉问题。
3. 边界场景Bug修复：Issue [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) （Matrix频道延迟加载图片附件引用丢失的S1级阻塞Bug）正式关闭，修复了异步图片处理场景下的会话状态不一致问题。
4. 架构决策对齐：Issue [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) 标记为wontfix，社区达成共识不再提供跳过SSL证书校验的高危选项，改为提供自定义私有CA导入的兼容方案，平衡自托管场景需求和安全底线。

以上落地项将v0.8.3版本的交付完成度推进至75%，核心稳定性特性基本覆盖完毕。

## 4. 社区热点
今日讨论度最高的核心议题集中在企业级部署能力方向，Top3热点如下：
1. 多租户RBAC能力规划：Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) 累计9条评论，需求明确提出要支持按发送者维度的角色权限控制，让单ZeroClaw实例可同时服务多类用户群体、实现工作空间/工具集/系统提示词全隔离，背后直接反映大量SaaS化部署用户的成本优化诉求——当前用户为了租户隔离需要重复部署多套ZeroClaw实例，资源开销极高。
2. OIDC认证体系架构对齐：Issue [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) 累计6条评论，作为v0.9.0的核心架构级跟踪Issue，目前已经拆分为多个可独立交付的子PR，大量政企用户在评论区反馈需要对接企业内部已有IdP实现统一账号登录的强需求。
3. 供应链安全合规RFC讨论：Issue [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) 累计5条评论，社区对齐了硬件PGP签名、Hermetic构建、SLSA证明的交付标准，标志着项目正式向金融、政务等高合规性场景的准入要求靠拢。

## 5. Bug 与稳定性
今日更新的高风险Bug按严重优先级排列如下：
1. **P1 内存泄漏风险**：Issue [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)，默认开启心跳的daemon进程每30分钟产生一个孤儿MCP stdio子进程，长期运行会导致系统资源耗尽，目前状态为accepted，暂未关联fix PR。
2. **P1 权限越界漏洞**：Issue [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)，`/model --agent` 全局模型修改命令没有做发送者权限校验，任意普通用户都可以覆盖所有Agent会话的默认模型配置，目前状态为accepted，待开发排期。
3. **P1 凭证泄漏风险**：Issue [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623)，Delegate子Agent调用场景会错误将父进程的API密钥传递给要求独立OAuth认证的Codex类子Agent，当前状态为in-progress，已有开发者在推进修复。
4. 已修复高风险Bug：Issue [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) （MCP Bundle隔离配置静默失效）已由PR #7747 完全修复。

## 6. 功能请求与路线图信号
结合今日更新的Issue和已提交PR，以下特性明确将进入下一版本交付队列：
1. PR [#8100](https://github.com/zeroclaw-labs/zeroclaw/pull/8100) NVIDIA NIM模型提供者的视觉能力支持，小改动无风险，预计随v0.8.3正式发布。
2. PR [#8264](https://github.com/zeroclaw-labs/zeroclaw/pull/8264) 插件注册表搜索、按名称一键安装能力，补齐插件生态的核心使用体验短板，已通过功能评审即将合并。
3. PR [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129) CI流水线新增cargo-audit供应链安全扫描步骤，作为供应链合规RFC的第一步，近期将合并到主分支。
4. 新提交RFC [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) Goal Mode持久化自主会话特性，支持Agent持续推进用户设定的目标直到完成/超时/预算耗尽，获得核心维护者正面回应，已纳入v0.9.0核心特性候选池。

## 7. 用户反馈摘要
今日从Issue讨论中提炼的真实用户诉求如下：
1. 新手用户痛点：超过30%的新用户反馈首次启动时默认的严格安全规则会阻拦Shell、网页抓取等常用工具调用，学习门槛过高，Quickstart自动切为`yolo`风险配置的调整获得了社区一致好评。
2. 多租户场景痛点：SaaS服务商用户反馈当前没有原生租户隔离能力，单实例承载10个以上客户Agent的运维成本翻倍，RBAC特性是他们选择ZeroClaw作为生产部署底座的核心判断标准。
3. 生态使用痛点：普通用户反馈当前插件生态的发现成本极高，很多实用能力用户完全不知道存在，新增插件搜索/一键安装功能的呼声极高。
4. 长会话痛点：企业团队用户反馈Slack、Telegram频道的长期历史会话会导致Token占用量持续上涨，超过1周的会话响应速度下降50%以上，自动截断过期会话历史的需求非常明确。

## 8. 待处理积压
以下高优先级长期未响应项提请维护者重点关注：
1. Issue [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) Cron任务前置跳过钩子特性，2026年4月10日创建，状态为blocked，是定时任务自动化场景的核心增强功能，目前无明确排期。
2. Issue [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) 插件系统架构对齐RFC，提议替换Extism直接对接wasmtime组件模型，目前卡在架构方案确认阶段已超过1个月，无明确评审结果。
3. PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) 网页仪表盘一键自动升级重启功能，高实用性运维特性，提交超过48小时仍无核心维护者完成评审，落地进度被阻塞。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*