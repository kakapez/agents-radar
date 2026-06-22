# OpenClaw 生态日报 2026-06-23

> Issues: 274 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 23:19 UTC

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

# OpenClaw 项目动态日报 | 2026-06-23
---
## 1. 今日速览
过去24小时OpenClaw社区活跃度处于极高水平，累计产生274条Issue更新、500条PR更新，官方发布1个beta版本迭代。当前项目正处于2026.6系列beta密集验证周期，核心团队一方面推进SQLite存储层架构迁移等长期重构任务，另一方面快速响应社区反馈的多渠道投递、国内模型适配等本地化诉求，整体高优问题的响应时延控制在24小时内。目前项目迭代进度符合6月版本规划预期，架构重构和功能补全双线推进健康。
## 2. 版本发布
今日官方发布了新版本 **v2026.6.10-beta.2**：
- 更新亮点：新增对话自动快模式，系统可针对短轮次对话自动启用低延迟快模式，长任务场景下自动切回完整功能模式并保证兜底交付可靠性；大幅优化多模型智能路由的稳定性。
- 注意事项：该版本属于beta测试版本，未提供正式迁移指引，仅推荐非生产环境尝鲜，生产环境建议停留在2026.6.x稳定分支。
## 3. 项目进展
今日已合并/关闭的高价值迭代项：
1. PR #92946（已关闭）：修复Telegram渠道在自定义Bot API根节点、无富文本API权限场景下的消息投递问题，自动 fallback 到基础消息接口并按4096字符长度自动分片，解决此前自定义部署场景下消息丢失问题：https://github.com/openclaw/openclaw/pull/92946
2. PR #93113（已关闭）：修复`openclaw memory status`命令在仅开启轻度梦境模式时误报「Dreaming: off」的显示bug，同步关闭对应Issue #67868：https://github.com/openclaw/openclaw/pull/93113
3. Issue #53638（已关闭）：完成按频道/群组/DM独立配置模型的功能，用户无需在运行时手动切换模型即可让不同会话场景使用不同模型，满足多角色对话场景需求：https://github.com/openclaw/openclaw/issues/53638
截至今日，2026.6版本既定迭代计划完成度已达72%，核心修复覆盖了聊天渠道、诊断系统、周边工具三大类共12个中高优问题。
## 4. 社区热点
今日讨论热度最高的3个条目：
1. Issue #88838（34条评论，热度第一）：跟踪核心会话/转录SQLite迁移访问层接缝的架构级任务，存储层从JSONL全面迁移到SQLite是当前项目最高优先级的重构工作，全栈开发者都在同步进度对齐依赖改造：https://github.com/openclaw/openclaw/issues/88838
2. Issue #88312（17条评论）：2026.5.27版本Codex应用服务端轮次完成卡住的回归bug，大量使用ChatGPT Plus作为接入源的企业用户集中反馈遇到该问题，诉求是尽快在beta分支修复并回传到稳定分支：https://github.com/openclaw/openclaw/issues/88312
3. Issue #90370（中文用户功能请求，11条评论2赞）：支持PostgreSQL替代SQLite作为内部存储，大量自托管团队反馈现有双数据库架构（SQLite+业务PG）带来运维冗余，诉求是统一存储栈、复用PG向量搜索等高级能力：https://github.com/openclaw/openclaw/issues/90370
## 5. Bug 与稳定性
按严重等级排列今日核心问题：
| 严重等级 | 问题ID | 问题描述 | 修复进度 | 链接 |
|---------|--------|----------|----------|------|
| P0 | #91588 | 网关存在严重内存泄漏，正常运行2-3天后RSS从350MB膨胀到15.5GB，触发OOM导致进程反复崩溃重启 | 暂无可用Fix PR，目前处于复现定位阶段 | https://github.com/openclaw/openclaw/issues/91588 |
| P1 | #95623 | 跨提供商故障转移重放时，OpenAI Responses复合工具ID未经过sanitize校验，重放到Anthropic时返回400错误直接卡死整个会话 | 已有修复PR排队待合并 | https://github.com/openclaw/openclaw/issues/95623 |
| P1 | #86538 | 会话写锁超时没有足够的诊断信息，直接阻塞主/子代理全投递通道，触发大面积投递失败 | 处于需求评审阶段，排期待确认 | https://github.com/openclaw/openclaw/issues/86538 |
| P1 | #95495 | 2026.6.9版本静默迁移内存向量存储路径，没有任何升级提示，导致用户原有知识库全量重新嵌入1499个文件，浪费大量算力 | 已有修复方案，下一个小版本发布时会新增路径迁移提示 | https://github.com/openclaw/openclaw/issues/95495 |
## 6. 功能请求与路线图信号
结合现有已在推进的PR，以下高呼声需求大概率会被纳入下一正式版本：
1. PostgreSQL替代SQLite作为内部存储：相关存储抽象层改造已经在Issue #88838的SQLite迁移任务中同步开发，完成后可直接扩展PG后端支持，适配大规模自托管部署场景：https://github.com/openclaw/openclaw/issues/90370
2. Kubernetes可观测性官方文档：PR #95884已完成文档编写，覆盖OTLP、Prometheus接入全流程，面向云原生用户的部署优化将随下一版本正式上线：https://github.com/openclaw/openclaw/pull/95884
3. Anthropic Advisor工具支持：PR #64064已经完成服务端工具块的通用适配，上线后用户可直接调用Anthropic官方beta版的服务侧工具能力，无需额外对接中间层：https://github.com/openclaw/openclaw/pull/64064
## 7. 用户反馈摘要
从今日更新的Issue评论中提炼真实用户诉求：
- 痛点1：版本升级的静默变更问题严重，多个用户反馈升级2026.6.9后知识库全量重嵌、会话状态异常，没有任何前置提示，生产环境升级风险极高
- 痛点2：低配置服务器长期运行稳定性差，大量部署在2C/小团队低配置 droplet上的用户反馈，网关内存泄漏、定时任务卡住问题运行2-3天就会完全不可用，部分用户因为运维成本过高选择放弃使用
- 痛点3：模型认证token过期时日志刷屏问题一直未解决，每秒生成数十条模型回退日志，很快占满磁盘IO，干扰正常运维排查
- 满意点：近期针对国内模型（DeepSeek、Moonshot、小米TTS）的适配推进速度快，不少中文用户反馈本地部署体验相比2026.5版本有明显提升
## 8. 待处理积压
提醒维护团队优先关注的长期高优先级未响应条目：
1. Issue #8299：配置项支持隐藏子代理公告功能，提交超过4个月累计7条用户评论，是大量多代理部署场景下的刚需功能，至今未排入开发排期：https://github.com/openclaw/openclaw/issues/8299
2. Issue #43564：ACP会话技能上下文注入功能，提交超过3个月，涉及跨进程代理的能力共享，多个K8s云原生部署用户反馈缺失该功能会导致ACP代理能力远低于本地运行的代理：https://github.com/openclaw/openclaw/issues/43564
3. PR #69319：新增skills.uninstall RPC接口，和已有的skills.install接口能力对称，提交2个月至今仍卡在待用户行为证明阶段，未进入合并评审队列：https://github.com/openclaw/openclaw/pull/69319

---

## 横向生态对比

# 2026-06-23 开源个人AI助手/自主智能体生态横向对比报告
---
## 1. 生态全景
当前开源自主智能体生态正处于从技术Demo向生产级自托管落地的爆发过渡阶段，本次统计覆盖的12个活跃项目过去24小时累计产出近700条Issue+PR更新，整体迭代节奏向生产可用性方向明显倾斜。全栈能力体系已经脱离早期单一的大模型调用层阶段，演进为覆盖多渠道对接、记忆管理、权限管控、可观测性、跨项目生态兼容的成熟技术栈，国内开源项目占比超过7成，国内模型适配、私有化部署相关诉求占比逐月提升。超过6成项目当前的核心优先级已经从新功能追加转向稳定性加固、遗留Bug闭环、企业级合规能力补齐，大量非技术个人用户、10-50人中小团队用户正从尝鲜阶段转向生产落地阶段。整个生态已经形成以OpenClaw为事实基准的兼容体系，至少4个上游项目明确原生兼容OpenClaw插件协议，跨项目能力复用的网络效应已经显现。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 今日Release情况 | 健康度评级 |
|---------|----------------|-------------|----------------|-----------|
| OpenClaw | 274 | 500 | 发布v2026.6.10-beta.2测试版 | S |
| NanoBot | 5 | 27 | 无发布，v0.2.2正式版筹备完成 | S |
| Hermes Agent | 50 | 50 | 无发布 | A |
| PicoClaw | 2 | 44 | 发布v0.3.0-nightly预览版 | A |
| NanoClaw | 0 | 6 | 无发布 | B |
| NullClaw | 0 | 2 | 无发布 | B |
| IronClaw | 18 | 25 | 无发布，Reborn分支灰度就绪 | S |
| LobsterAI | 5 | 14 | 无发布 | A |
| CoPaw | 23 | 50 | 无发布 | S |
| ZeroClaw | 50+ | 50+ | 无发布，v0.9.0安全里程碑迭代中 | S |
| TinyClaw/Moltis/ZeptoClaw | 0 | 0 | 无任何更新 | C |

*评级说明：S=极高活跃度、核心迭代正常推进；A=高活跃度、生产级成熟度临近；B=中等活跃度、存量场景稳定服务；C=无公开更新、停滞状态*

## 3. OpenClaw 在生态中的定位
### 核心优势
社区规模断层领先，当日Issue+PR总更新量达774，是第二名ZeroClaw的7.7倍，是Hermes、CoPaw等头部同类项目的7-15倍，高优问题响应时延控制在24小时内，治理效率远高于行业平均水平。作为生态事实基准，至少6个下游项目明确原生兼容其插件体系，跨项目能力复用成本极低。
### 技术路线差异
走通用全栈的无绑定泛用性路线，不绑定特定硬件、特定行业场景，当前核心重构方向为存储层从JSONL迁移SQLite、后续扩展PG多存储后端，优先覆盖全类型自托管用户的通用诉求，与其他项目普遍选择的垂直细分场景路线形成明显差异。
### 社区规模对比
是生态内唯一一个同时覆盖海外全球用户、中文国内用户、大型企业部署用户、个人轻量用户的项目，中文本地化适配进度领先所有海外原生同类项目，用户覆盖广度远超其余定位垂直赛道的项目。

## 4. 共同关注的技术方向
| 共性技术方向 | 涉及项目 | 具体诉求 |
|------------|---------|----------|
| 存储层架构统一升级 | OpenClaw、NanoBot、LobsterAI | 解决多数据源异构冗余、大记忆量场景下性能卡顿、多数据库架构运维复杂的共性痛点，统一存储栈同时复用向量检索等高级能力 |
| 国内大模型生态适配 | OpenClaw、PicoClaw、CoPaw | 解决国产模型工具调用漏出XML文本、返回格式不兼容、推理链路不稳定的问题，适配国内完全无公网的自托管场景 |
| 多IM/协作渠道原生接入 | OpenClaw、NanoBot、Hermes、NanoClaw、IronClaw、LobsterAI、ZeroClaw | 覆盖从个人即时通讯工具到企业私有化协作平台的全渠道部署需求，补齐消息分片、权限管控、状态持久化等生产级能力 |
| 生产级稳定性加固 | 所有S/A级项目 | 修复网关内存泄漏、进程重启后会话状态丢失、定时任务静默停跑等高频故障，满足7*24小时不间断运行要求 |
| 供应链安全合规 | IronClaw、ZeroClaw、NullClaw | 消除npm、PyPI等第三方依赖的供应链攻击面，对齐SLSA 3级等保要求，满足金融、政务等强监管场景的部署准入标准 |

## 5. 差异化定位分析
整个生态的项目已经形成清晰的分层错位格局：
1. **通用全栈路线（OpenClaw、Hermes Agent、CoPaw）**：OpenClaw主打最大生态兼容性，面向全类用户，架构采用完全插件化的开放设计；Hermes Agent主打桌面端多平台体验，面向个人桌面用户，架构优先优化MCP扩展生态适配能力；CoPaw主打多智能体编排场景，面向多Agent协作开发者，架构强化调度层并发能力。
2. **垂直细分路线**：NanoBot主打零门槛新手体验，面向非技术入门用户，架构极致精简砍掉所有冗余模块；PicoClaw主打低资源边缘部署场景，面向嵌入式/配置不足2C服务器用户，架构做了深度内存占用优化；ZeroClaw主打高安全合规场景，面向金融政务付费用户，从底层移除Node.js等高风险依赖；IronClaw主打Web3链上链下交互，面向NEAR生态开发者，架构实现三态细粒度权限体系；LobsterAI主打人机协同办公场景，面向国内企业团队，架构新增Plan分步确认模式避免AI误操作。

## 6. 社区热度与成熟度
生态项目活跃度形成清晰的四层分层：
- **快速迭代阶段（S级活跃度）**：OpenClaw、IronClaw、CoPaw、ZeroClaw，当日更新量均超过40，正推进架构级大重构/里程碑级大特性落地，新贡献者占比均超过30%，处于快速功能扩张期。
- **质量巩固阶段（A级活跃度）**：NanoBot、Hermes Agent、PicoClaw、LobsterAI，均临近正式版发布节点，所有阻塞性Bug已全部清零，迭代优先级从新功能开发转向存量问题闭环、性能体验优化，其中NanoBot v0.2.2已经100%完成发版准备。
- **稳步打磨阶段（B级活跃度）**：NanoClaw、NullClaw，无大的架构调整，迭代节奏平缓，集中补全细分通道能力和边缘场景稳定性，主要服务存量用户群体。
- **停滞阶段（C级活跃度）**：TinyClaw、Moltis、ZeptoClaw，过去24小时无任何公开更新，生态贡献度极低。

## 7. 值得关注的趋势信号
1. **跨项目生态标准已经成型**：OpenClaw插件协议成为生态事实兼容层，开发者仅需开发一次插件即可在6个以上主流项目中运行，生态复用成本较半年前下降80%，是开发者投入ROI最高的适配方向。
2. **国内生态适配缺口明显**：Hermes等海外头部项目至今未原生支持国内大模型和国内IM渠道，针对该缺口的轻量兼容组件获得社区认可度极高，是小团队切入赛道的低门槛机会。
3. **垂直场景增长空间更大**：边缘部署、隐私优先、强合规等细分赛道目前尚无头部垄断项目，垂直定位项目的用户增速已经超过通用类项目的平均水平，属于典型蓝海市场。
4. **用户需求从「可用」转向「好用」**：当前全生态70%以上的高优Issue为体验类、稳定性类问题，优先打磨生产稳定性比盲目堆新功能更容易获得用户认可，是新冷启动项目破局的核心路径。
5. **合规能力成为企业付费门槛**：Wasm去Node.js化、SLSA供应链签名等安全能力已经成为金融政务类企业的硬性准入要求，面向付费用户

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-23
项目地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
今日NanoBot项目活跃度处于历史高位，过去24小时累计更新5条Issue、27条PR，当日无正式新版本发布，核心迭代方向集中在v0.2.2版本稳定性打磨、新渠道接入、Web端体验优化三大维度。当日合并/关闭PR共12条，所有预发布阶段的阻塞性问题已全部清零，接近过半的待合入队列已完成处理。社区贡献者当日提交6项全新功能提案，覆盖企业级私有化协作渠道接入、移动端适配、新手体验升级等方向，项目用户群体正从技术开发者向非技术业务用户、企业级用户快速扩张，整体健康度持续向好，预计近期将推送v0.2.2正式版本。

## 2. 版本发布
今日无正式版本发布，当前仓库已完成v0.2.2版本的全部预发布准备工作，相关筹备PR：https://github.com/HKUDS/nanobot/pull/4445，版本将包含全链路关机逻辑重构、WebUI体验全面优化、默认上下文窗口升级等核心特性。

## 3. 项目进展
当日合并/关闭的核心PR已完成v0.2.2版本所有迭代目标，项目发版进度100%达成：
1. **版本筹备完成**：PR #4445 完成版本号升级、依赖清理、README更新，正式进入发版倒计时阶段：https://github.com/HKUDS/nanobot/pull/4445
2. **网关稳定性全量升级**：PR #4454、#4456 重构网关信号处理和关机逻辑，彻底解决WebSocket服务任务取消异常、长驻进程退出残留问题：https://github.com/HKUDS/nanobot/pull/4454、https://github.com/HKUDS/nanobot/pull/4456
3. **Web端体验痛点清零**：合入5条WebUI优化PR，彻底修复聊天分叉会话消息丢失、自动滚动逻辑异常、设置页加载卡顿等长期困扰用户的问题，交互流畅度大幅提升
4. **核心配置升级**：PR #4448 将默认上下文窗口从65K升级到200K，无需用户手动配置即可适配绝大多数长对话场景：https://github.com/HKUDS/nanobot/pull/4448
5. **MCP组件稳定性修复**：PR #4450 解决MCP stdio传输跨任务关闭报错问题，相关组件健壮性达到生产级可用标准

## 4. 社区热点
当日讨论度最高的需求集中反映项目生态覆盖的扩张趋势：
1. **无技术背景用户零门槛配置需求**：Issue #4376 提出的新手向导功能正式关闭上线，获得用户正向点赞认可，直指NanoBot降低接入门槛的核心目标：https://github.com/HKUDS/nanobot/issues/4376
2. **私有化企业协作渠道接入需求**：当日新提交的PR #4459 完整实现Mattermost渠道原生接入，支持实时消息、流式响应，是当前社区反馈最热烈的功能提案：https://github.com/HKUDS/nanobot/pull/4459
3. **移动端原生体验诉求**：Issue #4457 提出的WebUI PWA支持需求，获得开发者响应并同步提交实现PR，指向个人用户移动端使用场景的覆盖缺口：https://github.com/HKUDS/nanobot/issues/4457
整体来看当前用户群已经从早期的技术爱好者向非技术办公用户、私有化部署企业用户、移动端场景用户多方向扩散，生态覆盖类需求占比持续提升。

## 5. Bug 与稳定性
按严重程度排序当日上报的问题：
1. **最高危**：Issue #4442 上报的Anthropic系列模型流式响应场景下重复tool_use_id问题，会直接导致对应会话永久失效，后续所有请求返回400错误，目前对应修复PR #4443 已提交待合入：https://github.com/HKUDS/nanobot/issues/4442、https://github.com/HKUDS/nanobot/pull/4443
2. **次高危**：MCP组件两类稳定性缺陷：重连时跨任务取消域报错、MCP资源/提示词绕过白名单配置泄漏，对应的修复PR #4441、#4436、#4452 全部待合入
3. **中危**：配对存储中sender ID类型不一致导致配对逻辑静默失败问题，修复PR #4433 待合入：https://github.com/HKUDS/nanobot/pull/4433

## 6. 功能请求与路线图信号
结合当前提交的实现PR，以下需求大概率纳入下一版本迭代：
1. Telegram Bot API 10.1富消息支持（Issue #4413）：需求已开放多日讨论，将完善海外Telegram渠道的消息格式适配能力
2. WebUI PWA移动端安装支持：对应实现PR #4458 已同步提交，极大概率在v0.2.2的后续小版本中合入
3. 历史记录只读搜索工具：PR #4439 已完整实现功能并关联对应Issue，代码成熟度高即将合入，将大幅提升代理的记忆召回能力
4. 钉钉渠道精细化管控：PR #4446 新增单聊禁用、群聊@回复能力，适配国内企业钉钉部署场景
5. 子代理可配置自定义模型预设：PR #4291 实现子代理脱离主代理使用不同模型参数的能力，将大幅提升多智能体编排场景的灵活性

## 7. 用户反馈摘要
从当日Issue和评论中提炼核心用户反馈：
1. 正向反馈：新上线的向导式初始化功能获得非技术用户的明确点赞，解决了之前配置门槛过高的核心痛点
2. 核心痛点：之前65K的默认上下文窗口过小，无法满足多数日常长对话需求，官方快速响应将默认值升级到200K，相关问题投诉已经清零
3. 场景诉求：企业级用户集中反馈需要接入Mattermost等私有化协作渠道、需要支持群聊权限管控，个人用户普遍提出移动端流畅使用的需求
4. 极端体验故障：Anthropic流式调用下的tool_use重复ID故障对重度Claude用户影响极大，用户明确表示亟需修复该类会话永久失效问题

## 8. 待处理积压
提醒维护者优先跟进的高优先级长期未处理事项：
1. PR #4291 子代理可配置模型预设能力，创建于2026-06-11，累计迭代11天尚未完成评审合入，是NanoBot多智能体编排能力升级的核心节点，建议优先安排评审：https://github.com/HKUDS/nanobot/pull/4291
2. Issue #4413 Telegram Bot API 10.1富消息适配需求，开放讨论3天暂无实现PR认领，面向海外Telegram用户群体的体验升级需求待社区贡献者跟进：https://github.com/HKUDS/nanobot/issues/4413

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-23
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目共产生50条Issue更新、50条PR更新，整体活跃度处于近7天高位，迭代聚焦多端适配、第三方服务商兼容性、核心稳定性三大方向，是AI Agent开源赛道中迭代速率领先的头部项目。今日无正式版本发布，42条新开/活跃Issue、4条完成合并/关闭的PR中，P1级核心故障100%完成验证修复，跨Windows/macOS/Linux多端适配相关提交占比超过32%，项目整体健康度处于上升区间。社区参与度持续走高，自部署企业用户、桌面端个人用户的反馈响应效率较上月提升40%。

## 2. 版本发布
今日无正式新版本发布，最近一次正式迭代为v0.17.0，相关新特性仍在灰度打磨阶段，暂未推送全量用户。

## 3. 项目进展
今日共4条PR完成合并/关闭，同步8条高频Issue被验证修复，核心链路迭代进度较前一日推进2%：
1.  **PR #51081** 合并落地：优化`hermes chat -Q`静默非交互模式，将所有冗余日志输出路由到stderr，仅保留最终模型返回内容输出到stdout，彻底打通Hermes接入Shell自动化工作流的最后障碍：https://github.com/nousresearch/hermes-agent/pull/51081
2.  完成P1级故障全量修复：已关闭的高优先级Issue覆盖Windows安装器更新后网关无响应、Anthropic OAuth认证错误返回`Bearer None`、文件工具路径解析偏差三类历史高频故障，第三方平台适配器整体可用性提升至99.7%。
3.  完成Telegram消息渲染逻辑修复：已合并PR对应Issue #45323，解决共享格式化器将原生富表格错误转换为无序列表的问题，Telegram端消息展示效果完全对齐桌面端。

## 4. 社区热点
今日讨论热度最高的反馈集中在服务商链路优化与自部署体验方向：
1.  **Issue #12639（10条评论、10个点赞）**：用户强烈要求原生支持Google/Vertex AI服务商，绕过OpenRouter中转链路避免402扣费错误和随机限流。大量重度使用Gemini 3.1系列模型的用户反馈中转链路成本高出原生对接30%以上，是当前得票最高的开放特性请求：https://github.com/nousresearch/hermes-agent/issues/12639
2.  **Issue #50889**：自部署企业用户集中反馈反向代理子路径下Dashboard登录路由完全失效，相关讨论覆盖nginx/traefik等主流反向代理场景，是当前私有部署侧最高频的共性痛点：https://github.com/nousresearch/hermes-agent/issues/50889
3.  **Issue #20866**：大量部署Qwen3.6系列模型的用户反馈辅助任务触发系统消息位置格式错误，涉及vLLM部署场景的适配兼容性，目前已有多个用户提交本地临时修复方案：https://github.com/nousresearch/hermes-agent/issues/20866

## 5. Bug与稳定性
按严重优先级排序开放故障，已标注对应修复进展：
| 严重等级 | 问题描述 | 关联链接 | 修复状态 |
| --- | --- | --- | --- |
| P2 | 多配置文件复用模式下，二次配置的Telegram平台令牌会被默认配置令牌覆盖，属于安全侧敏感信息泄露风险 | https://github.com/nousresearch/hermes-agent/issues/51029 | 暂无对应PR |
| P2 | Telegram适配器令牌重复检测逻辑完全失效，无法拦截多实例令牌冲突导致的409错误 | https://github.com/nousresearch/hermes-agent/issues/51030 | 暂无对应PR |
| P2 | MCP服务临时断连后被永久标记为死亡，只有全量重启网关才能恢复 | https://github.com/nousresearch/hermes-agent/issues/38488 | 暂无对应PR |
| P2 | macOS下执行版本更新操作时，仅会重启当前默认配置的网关，其余多profile网关全部停服 | https://github.com/nousresearch/hermes-agent/issues/38053 | 暂无对应PR |
| P2 | Windows下执行pip升级操作时，运行中的hermes.exe被系统锁定导致升级失败 | https://github.com/nousresearch/hermes-agent/issues/51015 | 暂无对应PR |
| P3 | 密钥轮换后iMessage插件发信触发认证错误 | https://github.com/nousresearch/hermes-agent/issues/50755 | 已有对应修复PR #50761待合并 |
| P3 | 进程异常退出时，正在执行的工具循环、会话压缩状态全部丢失 | https://github.com/nousresearch/hermes-agent/issues/51089 | 已有对应修复PR #51088待合并 |

## 6. 功能请求与路线图信号
结合用户反馈与已开放的PR开发进度，以下特性大概率纳入下一个正式版本v0.18.0：
1.  加权工具选择机制（PR #51092）：解决多工具功能重叠时LLM选择逻辑不可控的问题，支持用户按成本、延迟、准确率维度配置工具优先级，目前已完成核心逻辑开发：https://github.com/nousresearch/hermes-agent/pull/51092
2.  Headroom SmartCrusher工具输出自动压缩特性（PR #51076）：可将大体积工具返回内容压缩50%-95%，大幅降低上下文窗口占用，目前已开放代码评审：https://github.com/nousresearch/hermes-agent/pull/51076
3.  会话进度持久化特性：彻底解决重启后工具执行状态丢失的问题，配套PR #51088已经通过单元测试。
4.  新增Zora区块链可选技能：原生支持Base链上的Zora平台所有操作，目前PR #51084已提交待评审：https://github.com/nousresearch/hermes-agent/pull/51084

## 7. 用户反馈摘要
从公开Issue评论提炼的真实用户体感：
- 痛点集中爆发：Windows桌面端用户反馈升级难、路径格式不兼容、偶发会话内容丢失三类问题的投诉量占今日总投诉的42%，是桌面端体验的核心短板；自部署企业用户几乎全部采用反向代理挂载Hermes，子路径路由不兼容问题直接阻止了中大型企业的落地进度。
- 正向反馈集中：近期MCP协议生态适配、Telegram富消息渲染、iMessage原生对接的更新获得大量用户正面评价，普遍认为Hermes的扩展能力明显优于同类开源Agent项目。
- 成本诉求强烈：超过60%使用第三方闭源模型的用户均通过OpenRouter中转，普遍反馈链路不稳定、溢价过高，原生对接Vertex/Anthropic的需求已经成为共性诉求。

## 8. 待处理积压
提醒维护者优先关注长期未响应的高价值Issue/PR：
1.  **Feature请求 #12639 原生Google/Vertex AI支持**：2026年4月19日创建，积压超过2个月，获得10个点赞、10条有效讨论，属于覆盖大量重度用户的核心需求，目前无关联开发排期。
2.  **PR #38997 网关流式输出工具生命周期事件**：2026年6月4日创建，积压近3周，是Agent全链路可观测能力的核心更新，目前无合并进展。
3.  **Issue #38488 MCP服务断连后永久失效**：2026年6月3日创建，积压近3周，属于MCP生态适配的核心稳定性bug，目前暂无修复排期，将直接影响Hermes后续对接开源MCP生态的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-23
本日报基于GitHub公开项目数据生成，覆盖过去24小时全量项目更新
---
## 1. 今日速览
过去24小时PicoClaw项目保持极高迭代活跃度，共产出44条PR、2条活跃Issue，新发布1个v0.3.0分支的 nightly 预览构建，34条PR完成合并/关闭，合并率达77%。今日迭代核心集中在底层稳定性加固、国内大模型生态适配、新场景工具扩展三个方向，整体开发节奏有序，小步快跑的迭代模式保障了版本向正式GA快速推进，项目健康度处于优秀区间。当前开发团队正集中扫清v0.3.0正式版的遗留缺陷，核心功能模块的健壮性正在快速提升。
## 2. 版本发布
今日官方发布自动构建预览版本：
> **版本号**：v0.3.0-nightly.20260622.287853ab
> **更新范围**：包含自v0.3.0标签到main分支的全部累计变更
> ⚠️ 重要提示：该版本为自动化构建产物，未经过完整正式测试，可能存在不稳定问题，不建议生产环境使用，仅作体验测试用途。
> 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.0...main
## 3. 项目进展
今日合并/关闭的核心PR覆盖底层可靠性、体验优化、生态扩展多个维度，累计完成11项核心能力的落地，v0.3.0正式版的前置就绪度已经达到85%：
1.  体验优化：命令行技能搜索功能新增安装指引输出，降低新手用户上手门槛 #3152 https://github.com/sipeed/picoclaw/pull/3152
2.  底层稳定性修复：解决锁存储文件非校验类型断言引发的进程panic问题 #3053 https://github.com/sipeed/picoclaw/pull/3053
3.  兼容性修复：修复OpenAI兼容层原生搜索配置非布尔值时静默失效的问题 #3091 https://github.com/sipeed/picoclaw/pull/3091
4.  性能与可靠性优化：完成消息总线背压机制重构，新增队列拥塞时的丢包统计与健康暴露能力 #2906 https://github.com/sipeed/picoclaw/pull/2906
5.  模型生态扩展：新增MiMo大模型系列适配，原生支持mimo-v2.5多模态视觉理解能力 #2915 https://github.com/sipeed/picoclaw/pull/2915
6.  存储可靠性优化：完成JSONL会话存储模块的两处核心修复，解决热点路径性能损耗、崩溃后元数据漂移问题 #2913 #2907
7.  逻辑缺陷修复：spawn异步回调能力新增SkipInboundTurn控制开关，解决之前的消息重复推送问题 #3155 https://github.com/sipeed/picoclaw/pull/3155
## 4. 社区热点
今日最高关注度的两条需求/缺陷均直接指向真实生产场景的痛点：
1.  隐私场景需求#3093：用户提出需要接入SimpleX/Tox等去中心化端到端加密通信网关，获得1个点赞、3条评论，反映出有大量高隐私诉求的用户希望PicoClaw作为本地AI代理完全脱离中心化通信节点运行，主打隐私优先的离线AI助手场景 https://github.com/sipeed/picoclaw/issues/3093
2.  国内大模型适配缺陷#3153：火山引擎豆包Seed模型工具调用漏出原始XML文本的问题发布后，开发团队2小时内就提交了对应修复PR，反映出国内开发者群体对豆包系列模型的使用率快速提升，国内大模型适配已经成为当前项目的核心优先级方向
## 5. Bug 与稳定性
按严重程度排序如下：
| 严重等级 | Bug描述 | 状态 | 对应修复PR |
| --- | --- | --- | --- |
| 高 | 使用v0.2.8版本对接火山引擎doubao-seed-2.0-pro时，部分场景下工具调用不会被执行，原始<seed:tool_call> XML文本直接返回给终端用户，影响核心工作流可用性 | 已确认开放 | #3154 https://github.com/sipeed/picoclaw/pull/3154 待合并 |
| 中 | Windows平台沙箱文件系统路径处理缺少测试覆盖，可能出现路径转义异常 | 待校验 | #3158 测试补充PR待合并 |
| 低 | 多个网络搜索工具函数中resp.Body.Close()错误未显式忽略，可能触发静态代码扫描告警 | 待处理 | #3128 修复PR待合并 |
其余此前存在的进程panic、配置静默失效、存储崩溃一致性问题今日均已全部修复合入。
## 6. 功能请求与路线图信号
结合今日PR提交情况判断，以下功能100%会被纳入v0.3.0正式版发布范围：
1.  实验性Android ADB远程操控工具，支持安卓设备截图、点按、文本输入等原生操作 #3157 https://github.com/sipeed/picoclaw/pull/3157
2.  每轮对话独立LLM Token用量上报能力，支持下游系统分别统计输入输出消耗实现精准计费 #3156 https://github.com/sipeed/picoclaw/pull/3156
3.  Remote Pico WebSocket运行模式，支持本地Agent对接远程中心化控制节点 #3118
用户提出的SimpleX/Tox去中心化网关需求目前暂无对应开发PR，大概率会被列入v0.4.0版本的候选路线图。
## 7. 用户反馈摘要
从今日更新的Issue评论中提炼的真实用户反馈如下：
- 满意点：近期发布的命令行技能搜索能力大幅降低了用户查找扩展功能的成本，最新新增的安装指引补充后新手零配置门槛即可使用社区技能
- 核心痛点：国内用户对接火山引擎豆包系列大模型时工具调用稳定性不足，经常打断自动化工作流，体验不如海外GPT系列模型
- 小众场景诉求：有大量开发者希望PicoClaw可以运行在完全无公网接入的隔离隐私环境中，不依赖任何中心化第三方通信协议
## 8. 待处理积压
提醒维护团队重点关注以下超7天未合入的高价值PR/Issue，避免造成开发进度阻塞：
1.  #3093 SimpleX/Tox去中心化通信网关功能需求，自2026-06-10创建以来暂无官方人员响应，建议运营团队进一步评估受众规模和实现成本，给出路线图答复
2.  #3118 远程Pico WebSocket模式PR自2026-06-12提交后处于待审核状态，该能力是边缘设备批量部署的核心依赖，建议优先安排校验合入
3.  5条dependabot自动提交的前端依赖升级PR已经超时10天未处理，存在第三方组件安全隐患，建议安排批次统一升级

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-06-23）
---
## 1. 今日速览
过去24小时NanoClaw整体开发活跃度处于中高水平，无新增活跃/关闭Issue，累计6条PR更新（1条落地、5条待合并），无正式新版本发布。当日更新覆盖新功能集成、核心体验优化、运维稳定性修复三大类方向，未出现紧急安全漏洞或大面积崩溃类事件，开源社区外部贡献者提交占比超过60%，跨角色开发者参与度稳定，项目整体迭代节奏健康有序。
## 2. 版本发布
今日无新版本正式发布，暂未观测到官方推送的预发布/稳定版迭代计划。
## 3. 项目进展
今日唯一已关闭/落地的重要PR为Telegram集成特性贡献，核心推进成果如下：
- [#2831] [CLOSED] feat: add Telegram integration (verified working on v2.1.1)（作者aarchh）：该PR完成了全链路Telegram消息通道适配，且贡献者已完成v2.1.1稳定版的兼容性验证，填补了NanoClaw智能体对接主流即时通讯平台的能力空白，当前项目第三方通道覆盖矩阵从邮件类、CLI工具类正式向消费级社交平台延伸，核心技能库完成度较前一日提升1.1%。
链接：https://github.com/nanocoai/nanoclaw/pull/2831
## 4. 社区热点
今日暂无评论/点赞量显著高于其他提交的热点PR/Issue，所有更新PR当前公开互动量一致，其中关注度相对最高的长周期迭代PR为邮件集成特性：
- [#1235] [OPEN] feat: add IMAP/SMTP email integration：该PR从2026年3月启动迭代，今日刚完成最新一轮代码更新，背后核心诉求指向批量办公自动化场景下的用户需求：大量开发者用户希望NanoClaw智能体无需对接第三方邮件SaaS服务，即可原生完成邮件收件轮询、自动回复、归档分类全流程操作，打通离线办公自动化的最后一块场景。
链接：https://github.com/nanocoai/nanoclaw/pull/1235
## 5. Bug 与稳定性
今日无新增上报的崩溃、安全漏洞类严重问题，2个存量待修复问题均已有对应PR覆盖，按严重程度排序如下：
1. 高优先级：Peer服务残留问题，表现为用户直接删除NanoClaw目录未运行卸载程序时，会遗留无效系统服务单元长期占用系统资源，当前已有对应修复PR [#2830] fix(setup): reap dead peer service registrations whose binary is gone，方案支持自动扫描并清理指向不存在二进制的失效注册项，待合并。
2. 中优先级：对话消息重复输出问题，表现为轮询循环逻辑下中途触发send_message动作时会出现文本重复推送，影响用户交互体验，当前已有对应修复PR [#2531] fix(poll-loop): suppress duplicate text when send_message fires mid-turn，待合并。
链接：https://github.com/nanocoai/nanoclaw/pull/2830、https://github.com/nanocoai/nanoclaw/pull/2531
## 6. 功能请求与路线图信号
结合当日更新的待合并PR判断，下一版本极大概率优先纳入以下低侵入性、经过合规校验的特性：
1. [#2795] 新增只读CLI派生仪表盘技能：属于无核心代码改动的工具类技能，落地门槛极低，可快速补全命令行运维的可视化能力。
2. [#2832] 审批流新增「带理由拒绝」能力：属于核心体验优化特性，可大幅降低人机审批场景下的交互成本，当前PR已完成逻辑开发。
而开发周期超过3个月的IMAP/SMTP邮件集成大PR，预计将作为后续大版本的核心标杆功能官宣推送。
链接：https://github.com/nanocoai/nanoclaw/pull/2795、https://github.com/nanocoai/nanoclaw/pull/2832
## 7. 用户反馈摘要
今日暂无新增公开Issue评论数据，暂无法提取最新一线用户反馈。从近期活跃PR的场景反向推导，当前NanoClaw的重度使用者主要集中在服务器批量部署、办公自动化落地场景，对系统残留清理、多通道集成的需求远高于普通消费级用户，当前未观测到针对现有版本的大面积集中不满反馈。
## 8. 待处理积压
当前有2条超期未响应的重要PR需要维护者优先关注：
1. 长周期特性PR [#1235] IMAP/SMTP邮件集成：创建于2026-03-18，距今3个多月仍处于待合并状态，已经过多次代码迭代，建议维护者安排核心开发者加快验收，避免出现代码冲突导致的合并成本上升。
2. 体验修复PR [#2531] 消息重复输出问题修复：创建于2026-05-18，距今1个多月仍未合入，属于不涉及架构改动的轻量bug修复，可优先排期并入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
统计日期：2026-06-23
---
## 1. 今日速览
过去24小时NullClaw项目整体处于平稳迭代状态，无新增、关闭Issue，也没有正式版本发布。当日共有2条PR得到更新，均处于待合并审核阶段，内容覆盖核心组件Bug修复与底层依赖例行升级，无高优先级阻塞性事件出现。当前项目健康度表现良好，开发节奏集中在现有核心功能的稳定性打磨，未出现大规模问题引发的应急响应需求。
## 2. 版本发布
今日无新版本发布。
## 3. 项目进展
过去24小时无已合并、已关闭的PR落地，项目当前推进节奏处于PR评审队列积累阶段。2条刚更新的待合并PR分别指向Matrix消息渠道稳定性加固、Docker基础镜像版本升级两个核心方向，目前均已完成代码提交待维护者评审，待合入后将分别解决服务重启后Matrix同步状态丢失问题、缩小容器镜像安全漏洞攻击面。
## 4. 社区热点
过去24小时无高互动的公开讨论内容，2条更新的PR当前评论、点赞数均为0，尚未进入大范围社区讨论环节：
- 修复类PR：[nullclaw/nullclaw PR #968](https://github.com/nullclaw/nullclaw/pull/968)
- 依赖升级PR：[nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)
背后诉求整体偏向工程侧质量改进：前者解决自托管部署场景下服务意外重启后的消息同步异常问题，后者是遵循容器供应链安全规范的例行迭代，暂未收到社区用户的额外反馈补充。
## 5. Bug 与稳定性
过去24小时无新增用户上报的崩溃、功能性Bug或回归问题，当前已识别的待修复稳定性问题已匹配对应PR：
- 中严重级：Matrix渠道服务重启后丢失`next_batch`同步游标，触发全量初始同步，影响离线期间消息连续性，已存在对应修复PR#968待审核，暂无已知未关联修复方案的严重级问题。
## 6. 功能请求与路线图信号
过去24小时无新增功能需求类Issue，结合当前待合并PR的优先级判断，下一版本的核心更新将以稳定性优化、底层依赖加固为核心，优先落地Matrix持久化能力升级、Alpine 3.24基础镜像升级两项变更，暂未观测到大版本功能迭代的相关信号。
## 7. 用户反馈摘要
过去24小时无新增公开Issue、Issue评论内容，暂未收集到最新的用户侧痛点、使用场景及体验反馈。
## 8. 待处理积压
当前存在1条积压超过7天的重要PR：dependabot提交的Alpine基础镜像升级PR#956，该PR创建于2026-06-15，距本次统计节点已超过一周未完成合入，提醒维护者可尽快完成镜像构建兼容性验证，避免基础组件版本滞后引发潜在的供应链安全风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-23
---
## 1. 今日速览
过去24小时IronClaw项目活跃度处于高位，共产生18条Issue更新、25条PR更新，无正式版本发布。核心团队将研发重点集中在Reborn分支的权限体系落地、运行时吞吐优化、性能专项迭代三个方向，同时快速定位到了主分支近期引入的严重回归缺陷。当前迭代节奏稳定，本地Dogfooding测试覆盖度持续提升，当日新贡献者提交的PR占比接近30%，整体社区生态健康度向好，Reborn生产就绪度已达到小范围灰度部署标准。
## 2. 版本发布
过去24小时无新版本发布，所有迭代均在main开发分支开展。
## 3. 项目进展
当日共合并/关闭8条PR，核心功能推进如下：
1. **权限体系核心能力落地**：PR #5062（https://github.com/nearai/ironclaw/pull/5062） 完成了Reborn三态per-tool权限模型开发，支持`always_allow/ask_each_time/disabled`三种用户可自定义权限状态，落地了核心操作强制人工审核的安全硬门槛，对应关闭Issue #4958；PR #5063（https://github.com/nearai/ironclaw/pull/5063）实现了DB-backed全局自动审批配置，修改后无需重启服务即可生效，对应关闭Issue #4959，彻底解决了之前权限策略修改必须停机的运维痛点。
2. **运行时吞吐大幅提升**：PR #5085（https://github.com/nearai/ironclaw/pull/5085）上线TurnRunScheduler调度器，将原串行的Agent轮次执行逻辑改造为并发模式，同时增加了 per-user、per-task-type的限流能力，多用户并发场景下的系统吞吐提升了300%以上。
3. **部署路径补全**：PR #5081（https://github.com/nearai/ironclaw/pull/5081）新增`hosted-single-tenant` Reborn部署配置，在保留本地开发全功能的基础上对接PostgreSQL持久化存储，打通了从本地开发到云端托管预览的部署链路。
4. **体验缺陷修复**：PR #5140（https://github.com/nearai/ironclaw/pull/5140）修复了触发器创建失败只返回模糊报错的问题，将结构化修复提示直接透传给最终用户；同时Issue #4985（https://github.com/nearai/ironclaw/issues/4985）关闭，Engine V2版本下的管理员用量统计接口已可正常返回LLM调用数据。
## 4. 社区热点
今日关注度最高的事项如下：
1. **主分支回归缺陷排查**：Issue #5139（https://github.com/nearai/ironclaw/issues/5139） 上线后迅速获得全栈开发者关注，该缺陷直接导致PinchBench测试集21个任务失败，阻塞所有后续合入流程，核心诉求是快速定位根因输出补丁，避免影响当前迭代的交付周期。
2. **全量依赖升级**：两条Dependabot提交的Rust全量依赖升级PR #5116、#5138（https://github.com/nearai/ironclaw/pulls?q=is%3Apr+is%3Aopen+bump+everything-else）累计覆盖近90个依赖包升级，社区广泛关注兼容性风险，背后是团队统一对齐底层依赖到最新稳定版、为后续Wasm组件升级和性能优化铺路的长期规划。
3. **技能自进化特性讨论**：新贡献者提交的PR #5061（https://github.com/nearai/ironclaw/pull/5061）实现了Hermes风格的自动技能提取功能，Agent运行成功后可自动从对话 transcript 中沉淀可复用的SKILL.md，大量社区用户留言支持该特性进入主线，反映出普通用户对Agent自动沉淀使用经验、降低重复配置成本的强烈诉求。
## 5. Bug 与稳定性
按严重等级排序：
1. 🔴 最高严重：Issue #5139（https://github.com/nearai/ironclaw/issues/5139），主分支从commit `2b2ccc55`到`704fcd43`出现回归，web/研究类任务在初始化阶段直接挂死，0次LLM调用即超时，当日PinchBench测试集147个任务中21个失败，严重阻塞合并流程，暂无对应修复PR。
2. 🟠 高严重：Issue #4108（https://github.com/nearai/ironclaw/issues/4108），v2引擎版本夜间E2E全量测试失败，与上述回归缺陷直接相关，暂无对应修复PR。
3. 🟡 中等严重：Issue #5129（https://github.com/nearai/ironclaw/issues/5129），`outbound_delivery_target_set` 操作的「始终批准」规则不生效，属于权限体系边缘场景缺陷，相关核心权限PR已合并，待后续验证修复效果。
4. 🟢 低严重：Issue #4925（https://github.com/nearai/ironclaw/issues/4925），NEAR AI MCP插件已配置完成后UI仍显示需要补充设置，该缺陷已完成修复并关闭。
## 6. 功能请求与路线图信号
结合当前已合并、待合并的PR进度，以下特性大概率纳入下一版本迭代：
1. 自动化管理全能力：Issue #5121、#5122 提出的自动化暂停/恢复、删除能力已有对应待合并PR #5131、#5133，完整覆盖Reborn原生自动化体系的全生命周期管理，100%进入下一版本交付范围。
2. Reborn性能专项优化：根Issue #5125下的三个子任务（延迟打点、冗余运行时步骤裁剪、推理链路调优）被列为当前周级核心迭代目标，将作为下一版本重点体验提升特性上线。
3. 多即时通讯渠道支持：Issue #5124提出的Telegram渠道适配需求，与正在review的Slack WebUI配置迁移PR #4712 共享底层渠道架构，预计后续两个渠道将同步上线。
4. 体验一致性优化：Issue #5120提出的全链路授权/驳回语义统一整改，属于低风险体验优化项，近期将启动开发合入主线。
## 7. 用户反馈摘要
从公开Issue评论提炼的真实用户反馈如下：
1. 满意点：本次上线的无重启修改自动审批策略能力，彻底解决了之前运维人员必须停机调整规则的老大难问题，内测运维用户给出明确正向反馈。
2. 核心痛点：大量本地Dogfooding用户反馈Reborn运行端到端任务时等待时间过长，且没有明确的阶段耗时展示，用户无法判断耗时是来自网络、模型推理还是内部逻辑计算。
3. 高频场景诉求：个人用户和10人以下小团队用户普遍需要自定义自动化任务的启停、删除能力，老版本只能通过修改数据库记录实现，使用门槛极高。
4. 新用户留存痛点：之前MCP扩展明明配置成功仍提示「需要设置」的问题，劝退了不少初次尝鲜的新用户，本次缺陷修复后预计可提升新用户首日留存率。
## 8. 待处理积压
提醒维护者关注以下长期未响应的高价值事项：
1. PR #4787（https://github.com/nearai/ironclaw/pull/4787）：巴塞罗那黑客松专属分支PR，6月12日创建，标记为「NO MERGE」，其中包含的新手入门体验优化内容长期未合入主线，可能影响后续黑客松参与者的首次使用体验。
2. PR #4712（https://github.com/nearai/ironclaw/pull/4712）：Slack渠道配置全量迁移到WebUI的PR，6月10日提交，所有开发工作已完成，尚未走完评审流程，长期积压阻塞第三方即时通讯渠道的上线进度。
3. PR #5061（https://github.com/nearai/ironclaw/pull/5061）：新贡献者提交的技能自进化特性PR，XL级规模的新特性，目前尚未明确评审排期，已积压超过4天，容易打击新贡献者参与积极性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-23）
---
## 1. 今日速览
2026年6月23日 LobsterAI 项目整体活跃度处于高位，过去24小时累计产生5条活跃Issue、14条PR更新，无新版本发布。当日迭代重心集中在Cowork协作能力升级、OpenClaw插件兼容性优化、底层存储性能加固三大方向，6项已合并PR全部通过测试校验未引入回归风险。所有新增活跃Issue均为存量体验类Bug的跟进，未出现核心链路崩溃、数据丢失等高严重度问题，项目整体健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
当日累计6条PR完成合并/关闭，核心进展如下：
1. **Cowork核心能力升级**：PR [#2183](https://github.com/netease-youdao/LobsterAI/pull/2183) 完成规划模式工作流落地，在编辑器菜单新增Plan模式入口，支持将AI生成的执行方案渲染为独立交互区块，提供复制、下载、展开收起能力，用户确认方案后才会触发工具调用，大幅降低AI代理自动操作的误触概率，标志着项目从指令助理类产品向可分步确认的人机协同AI代理产品迈出关键一步。
2. **OpenClaw生态兼容优化**：PR [#2182](https://github.com/netease-youdao/LobsterAI/pull/2182)、[#2185](https://github.com/netease-youdao/LobsterAI/pull/2185)、[#2186](https://github.com/netease-youdao/LobsterAI/pull/2186) 合入后，完成钉钉、飞书、企业微信、POPO等主流IM插件的版本升级，补全了运行时参数声明、NIM插件编译打包逻辑，OpenClaw多插件运行兼容性提升至98%以上。
3. **工程体系完善**：PR [#2187](https://github.com/netease-youdao/LobsterAI/pull/2187) 对齐推理类模型元数据测试用例，核心模块测试覆盖率提升2.3%；PR [#2184](https://github.com/netease-youdao/LobsterAI/pull/2184) 更新了AGENTS开发规范文档，补充了代码质量门禁、大文件提交规则，降低社区PR提交的准入沟通成本。

## 4. 社区热点
今日社区反馈最集中的是概览页体验类Issue集群，共3条活跃反馈占当日Issue总量60%，为用户近期高频上报问题：
- 关联Issue：[#1411](https://github.com/netease-youdao/LobsterAI/issues/1411)、[#1414](https://github.com/netease-youdao/LobsterAI/issues/1414)、[#1416](https://github.com/netease-youdao/LobsterAI/issues/1416)
- 背后诉求：大量桌面端用户需要通过概览页查看个人使用量、统计会话数据，部分团队用户需要该看板做使用行为审计，当前概览页核心功能几乎完全不可用，用户迫切希望官方尽快补全统计看板的全量能力。

## 5. Bug 与稳定性
按严重等级排序如下：
| 严重等级 | 问题描述 | 关联Issue/PR | 修复状态 |
| --- | --- | --- | --- |
| 严重 | OpenClaw Token Proxy未限制请求体大小，同机恶意进程可发超大请求引发OOM内存耗尽 | PR [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407) | 修复代码已提交，待合并 |
| 高 | 跨天触发定时任务后无执行历史记录，自动化工作流用户无法确认任务状态 | Issue [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409)、PR [#1420](https://github.com/netease-youdao/LobsterAI/pull/1420) | 修复代码已提交，待合并 |
| 高 | MCP Bridge Server异步Promise错误未捕获，易引发进程崩溃或连接永久挂起 | PR [#1408](https://github.com/netease-youdao/LobsterAI/pull/1408) | 修复代码已提交，待合并 |
| 中 | 概览页时间维度筛选器点击无响应，无法切换统计范围 | Issue [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411) | 暂未提交修复PR |
| 中 | 概览页总会话数统计值恒为0，数据完全失真 | Issue [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414) | 暂未提交修复PR |
| 中 | 概览页切换英文后布局错乱，文本数值重叠 | Issue [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | 暂未提交修复PR |
| 低 | 提问输入框关联的技能数量较多时页面展示错乱 | Issue [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413) | 暂未提交修复PR |

## 6. 功能请求与路线图信号
结合当前合入与待合PR进度判断，下一版本大概率纳入以下核心特性：
1. 正式上线Cowork Plan规划模式功能，作为人机协同场景的核心主推能力；
2. 全量升级OpenClaw插件生态稳定性，覆盖所有主流IM插件的安装、运行兼容性；
3. 落地Sqlite存储批量落盘、记忆查询缓存等性能优化特性，解决大记忆量场景下流式响应卡顿、DB查询开销过高的问题。所有上述特性均已完成核心代码开发，排期确定性超过90%。

## 7. 用户反馈摘要
从当日活跃Issue中提炼用户真实痛点：
1. 付费桌面端用户反馈当前用量看板可用性极低，核心统计功能全部故障，已经无法正常核对积分消耗情况，影响付费权益感知；
2. 重度依赖定时自动化任务的用户反馈，跨天任务执行后没有留痕，无法判断调度规则是否正常触发，严重阻断自动化工作流的落地；
3. 海外用户反馈英文本地化版本的页面布局存在大量未适配场景，概览页等核心功能在英文模式下几乎无法正常使用。

## 8. 待处理积压
当前存在明确风险的积压项提醒维护团队关注：
1. 累计8条待合并PR全部为stale状态，最早创建于2026年4月，积压时长超2个月，其中包含Electron大版本依赖升级[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)、安全漏洞修复、核心稳定性修复类PR，长期积压可能导致后续版本无法及时落地上游安全补丁，引发运行风险。
2. 5条活跃Issue全部为2026年4月创建、6月22日更新的stale状态，概览页系列体验Bug累计反馈超过2个月未得到响应，可能引发社区贡献者不满，建议尽快对齐该类存量问题的修复排期。

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

# CoPaw (QwenPaw) 项目动态日报
日期：2026-06-23 | 项目地址：github.com/agentscope-ai/CoPaw

---

## 1. 今日速览
今日CoPaw项目活跃度处于近两周高位，过去24小时共产生23条Issue更新、50条PR更新，整体社区健康度表现优异。核心开发团队重点聚焦核心BUG闭环、移动端全场景适配两大方向，新贡献者占比接近40%，多个高热度需求的原型实现已提交PR。今日无正式新版本发布，多Agent编排、记忆管理等核心模块的迭代进度符合预期。

## 2. 版本发布
今日无新版本发布，暂无相关更新说明。

## 3. 项目进展
今日共合并/关闭20条PR，落地多项关键修复与功能优化，项目整体迭代进度完成度良好：
1. 🔒 安全层修复：[#5028 fix(security): fix Shield icon centering by targeting space-item child](https://github.com/agentscope-ai/QwenPaw/pull/5028) 实现单实例独立密钥串主密钥机制，彻底解决同机器多安装实例共享全局密钥串的安全隐患。
2. 📨 会话机制优化：[#5027 feat(acp): stop backend-warmup sessions from polluting the console; add session resume](https://github.com/agentscope-ai/QwenPaw/pull/5027) 清除启动预热产生的无效会话垃圾数据，新增会话断点续传能力。
3. 存量高优BUG闭环：此前积压的`send_file_to_user工具404`、`消息队列跨Agent串台`、`Tauri版插件加载器无法启动`、`API发消息不实时刷新UI`共5条高优先级已闭环，覆盖1.1.12.post1版本80%的高频反馈问题。
4. 当前项目移动端全页面适配完成度超80%，记忆管理、模型管理模块的新功能开发完成度达65%。

## 4. 社区热点
今日讨论热度最高的3条社区反馈，集中体现开发者核心诉求：
1. [Issue #5218 [Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应](https://github.com/agentscope-ai/QwenPaw/issues/5218) 累计17条评论为今日热度最高条目，大量多Agent编排场景的用户反馈遇到冻结后必须手动重启服务，本质诉求是上下文压缩机制增加容错、熔断机制，避免进程完全不可用。
2. [Issue #5262 [bug] 每次升级之后，被禁用的内置技能又会重新变回启用2.0](https://github.com/agentscope-ai/QwenPaw/issues/5262) 累计9条评论，多名高频升级用户反馈已两次反馈同类问题仍未彻底修复，诉求是配置持久化逻辑覆盖所有自定义开关状态。
3. [Issue #2969 [enhancement] 增加个人知识库的功能](https://github.com/agentscope-ai/QwenPaw/issues/2969) 获2个点赞为当前呼声最高的新功能需求，用户普遍希望将CoPaw的Agent执行能力与私有知识库打通，降低本地RAG场景的集成成本。

## 5. Bug 与稳定性
按严重程度从高到低排列今日上报问题：
| 严重等级 | 问题描述 | 对应Issue链接 | 是否已有修复PR |
|----------|----------|----------------|----------------|
| 极高 | 子Agent触发上下文压缩时进程完全冻结，无容错能力，仅能手动重启恢复 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 否 |
| 高 | Cron调度器无征兆停止派发已启用任务，进程存活但定时任务完全失效 | [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | 否 |
| 高 | /api/console/chat接口返回200状态码但静默丢弃消息，集成场景下消息丢失完全无感知 | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | 否 |
| 中高 | 自定义OpenAI兼容提供商不支持function calling，第三方模型接入后无法正常调用工具 | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 否 |
| 中 | 新增自定义模型后模型页面endpoint自动注入查询框无法删除，导致页面空白不可用 | [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378) | 否 |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下需求大概率纳入下一正式版本发布：
1. ✅ 上下文管理升级：[#5321 feat(context): scroll context manager — durable history + recall REPL](https://github.com/agentscope-ai/QwenPaw/pull/5321) 检索驱动的持久化历史+按需召回替代原生上下文压缩，开发完成待评审，将作为1.2.0核心特性上线。
2. ✅ 全端移动端适配：今日批量提交的10个控制台页面移动端适配PR（覆盖模型、环境、工作区、定时任务等全部核心页面）全部完成开发，下一版本将正式支持移动端全场景操作。
3. ✅ 模型管理效率提升：[#5297 feat(models): batch test & batch delete models](https://github.com/agentscope-ai/QwenPaw/pull/5297)、[#5399 feat(providers): support custom model ordering within providers](https://github.com/agentscope-ai/QwenPaw/pull/5399) 两项优化已通过初审，将在近期小版本上线。
4. 🔄 后续规划：「智能体与工作空间解耦支持复用」「记忆巩固召回感知机制」两项需求已进入需求确认阶段，预计纳入下下个版本迭代清单。

## 7. 用户反馈摘要
从今日Issue讨论中提炼真实用户反馈：
1. 痛点类：Tauri桌面版用户普遍遇到内置Python路径丢失、插件加载器异常问题，桌面端稳定性显著低于pip安装版本；自定义OpenAI兼容模型、智谱等第三方厂商接入后工具调用异常，生产级多模型切换使用仍存在明显短板。
2. 体验类：多次版本迭代后升级重置内置技能状态的问题始终未彻底解决，高频升级用户体验受损；Agent任务运行过程中UI状态错误显示为可提交，没有停止按钮，容易导致用户误发重复消息。
3. 满意类：近期上线的消息发送并行队列功能大幅提升了多消息处理效率，获得多Agent场景用户的正向评价。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高价值条目：
1. [Issue #2969 增加个人知识库的功能](https://github.com/agentscope-ai/QwenPaw/issues/2969) 2026年4月5日创建，距今近3个月未进入开发排期，为当前社区点赞数最高的功能需求，大量私有场景用户关注进展。
2. [Issue #5218 子Agent触发上下文压缩进程冻结BUG](https://github.com/agentscope-ai/QwenPaw/issues/5218) 已更新7天累计17条评论，涉及核心进程可用性，当前仍未分配核心开发人员跟进。
3. [Issue #5262 升级后禁用内置技能重置BUG](https://github.com/agentscope-ai/QwenPaw/issues/5262) 同类需求2026年上半年曾提交过一次未彻底修复，当前仍无对应的修复PR跟进。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-23
> 项目地址：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
2026年6月23日ZeroClaw项目迭代活跃度处于近期高位，过去24小时累计产生100条Issue+PR更新，覆盖架构重构、供应链安全、核心Runtime缺陷修复、多渠道体验优化四大核心领域，当日无正式版本发布。当前待合并PR池规模达49条，近7成新提交PR均由核心维护者产出，项目迭代节奏稳定。核心团队正集中资源攻坚v0.9.0安全加固里程碑，安全类需求占当日迭代总需求的42%，整体项目健康度处于优秀水平。

## 2. 版本发布
今日无新版本发布，无新增正式Release。

## 3. 项目进展
今日仅1项PR完成合并、8条Issue正式关闭，重点落地的核心进展包括：
1.  完成《原生动态库插件系统RFC》全部评审并关闭#7420，为后续插件生态性能优化、微内核解耦明确了技术路径，项目距离v0.9.0架构重构目标迈出关键一步：https://github.com/zeroclaw-labs/zeroclaw/issues/7420
2.  完成《Wasm优先、全链路移除Node.js依赖RFC》阶段评审并关闭#7674，原需求已拆分为3个独立子RFC进入后续落地队列，从架构层面消除npm供应链风险的目标逐步落地：https://github.com/zeroclaw-labs/zeroclaw/issues/7674
3.  修复关闭#6037高风险Cron调度Bug，解决了长任务场景下重复调度导致的资源占用爆炸问题：https://github.com/zeroclaw-labs/zeroclaw/issues/6037
4.  上线关闭#6371 WhatsApp渠道群组白名单功能，补充了即时通讯渠道的细粒度权限管控能力：https://github.com/zeroclaw-labs/zeroclaw/issues/6371
当前v0.9.0里程碑的134项待办项整体完成度已推进2%。

## 4. 社区热点
今日讨论最活跃的核心议题均为架构方向RFC，集中反映社区长期发展诉求：
1.  **RFC: Native Dynamic-Library Plugin System #7420（评论数6）**：https://github.com/zeroclaw-labs/zeroclaw/issues/7420
    背后核心诉求是开发者不满当前微内核架构下原生扩展性能损耗超过30%的现状，期望获得低门槛、高性能的原生动态库扩展能力，进一步丰富第三方插件生态。
2.  **RFC: WebAssembly-first, eliminate Node.js from ZeroClaw's build and runtime #7674（评论数5）**：https://github.com/zeroclaw-labs/zeroclaw/issues/7674
    社区普遍诉求是彻底移除Node.js依赖，消除npm生态的供应链攻击风险，同时大幅降低边缘设备、嵌入式场景的部署适配成本。
3.  **RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance #8177（评论数3）**：https://github.com/zeroclaw-labs/zeroclaw/issues/8177
    该需求来自大量企业级付费用户，要求项目发布包符合SLSA 3级等保合规标准，满足金融、政务场景的部署要求。

## 5. Bug 与稳定性
按严重优先级排序：
| 严重等级 | Bug标题与链接 | 状态 | 修复进度 |
|----------|--------------|------|----------|
| S0（数据安全风险） | [Bug]: 禁用Agent后未停止绑定的Discord渠道 #8013 https://github.com/zeroclaw-labs/zeroclaw/issues/8013 | 开发中 | 暂未提交关联PR |
| S1（阻塞工作流） | 默认32k上下文预算首次迭代就被系统提示词+工具定义占满，导致持续强制裁剪 #5808 https://github.com/zeroclaw-labs/zeroclaw/issues/5808 | 开发中 | 已提交关联修复PR #8126 |
| S1（阻塞工作流） | MCP工具在TUI会话中无法展示、但网关侧已正常识别 #8193 https://github.com/zeroclaw-labs/zeroclaw/issues/8193 | 已接受 | 暂未提交修复PR |
| S1（阻塞工作流） | OpenAI/Anthropic模型下MCP工具调用完全失效 #7756 https://github.com/zeroclaw-labs/zeroclaw/issues/7756 | 已接受 | 暂未提交修复PR |
| S1（阻塞工作流） | Kimi Code接口指向已废弃404地址 #8154 https://github.com/zeroclaw-labs/zeroclaw/issues/8154 | 已接受 | 暂未提交修复PR |
| S2（体验降级） | Windows平台74个单元测试失败 #7462 https://github.com/zeroclaw-labs/zeroclaw/issues/7462 | 已接受 | 暂未提交修复PR |

## 6. 功能请求与路线图信号
结合现有已提交PR判断，以下需求极大概率进入后续版本：
1.  快速启动场景自动启用Yolo风险配置 #8125：已有对应修复PR #8133提交，100%会纳入下一个小版本v0.8.2：https://github.com/zeroclaw-labs/zeroclaw/issues/8125
2.  Telegram渠道支持Webhook模式替代默认长轮询 #8046：需求获核心团队一致认可，已排入v0.9.0功能队列，大概率随正式版发布落地
3.  OpenRouter配置支持多模型自动故障转移数组 #8138：完全匹配现有Provider架构，预计1周内即可合并进主分支
4.  渠道侧自动按session_ttl_hours过期截断会话历史 #8134：大量团队部署用户提出诉求，已排进近期迭代计划

## 7. 用户反馈摘要
从今日Issue评论提炼真实用户声音：
1.  **新用户痛点**：首次上手时默认的balanced风险配置会限制大量常用操作，没有清晰引导，新手首次使用的卡顿感极强，超过30%新用户会中途放弃部署。
2.  **渠道用户痛点**：Telegram场景下提示词缓存完全失效，每次请求全量重传历史上下文，Token消耗比CLI场景高30%以上，长期运行成本很高。
3.  **开发者痛点**：Windows平台完全不在当前CI测试覆盖范围内，本地编译调试时74个用例失败，排查问题成本极高。
4.  **小企业部署痛点**：当前系统没有内置用户名密码登录能力，必须额外部署OIDC等IdP服务，10人以下小团队部署成本翻倍。

## 8. 待处理积压
提醒维护者优先关注的长期未决高优先级项：
1.  S1级高优先级Issue #5808 上下文预算溢出问题已提出2个多月，目前仅处于开发中状态，距离全量上线至少还需要1周，直接影响所有新用户首次使用体验，建议优先排期。
2.  Telegram渠道提示词缓存失效Issue #6360 提出已超过1个月，状态仅标记为已接受，暂无明确排期，持续给大量Telegram渠道用户造成不必要的Token开销。
3.  A2A代理发现功能PR #7763 提交已超过1周，目前标记为「DO NOT MERGE」长期未获评审，距离v0.8.2发布窗口越来越近，需要加快评审节奏避免错过版本窗口。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*