# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 484 | 覆盖项目: 13 个 | 生成时间: 2026-06-12 23:17 UTC

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

# OpenClaw 项目动态日报 2026-06-13
---
## 1. 今日速览
过去24小时OpenClaw项目处于极高活跃度迭代状态，累计产生500条Issue更新、484条PR更新，整体健康度评级为优秀。当日正式发布2个全链路安全加固版本，核心迭代方向聚焦安全边界收紧、高优稳定性Bug修复、多端/多渠道体验优化，累计125条PR完成合并或关闭，398个活跃/新开Issue覆盖自托管、移动端、高安全场景等核心用户群体的诉求，项目6月迭代目标整体完成度约85%，进度符合预期。

## 2. 版本发布
今日共正式发布2个新版本：
- **v2026.6.6 正式版**：全链路安全边界大幅收紧，覆盖会话 transcript 权限校验、沙箱绑定规则、主机环境变量继承逻辑、MCP stdio 隔离、Codex HTTP 访问管控、原生搜索策略、高权限发送者校验、已删除代理 ACP 绕过封堵、回环工具限制、Discord 审核规则、Teams 群组动作权限共13类安全场景，封堵了一批历史绕过漏洞。
  链接：https://github.com/openclaw/openclaw/releases/tag/v2026.6.6
- **v2026.6.6-beta.2 测试版**：包含与正式版完全一致的安全加固特性，额外新增沙箱读写权限场景的灰度测试逻辑，供尝鲜用户验证。
  链接：https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.2

⚠️ 迁移注意事项：升级后建议重新校验自定义沙箱规则、第三方渠道权限配置，此前存在的低权限绕过漏洞已全部封堵，部分宽松权限规则可能触发权限拦截。

## 3. 项目进展
今日完成合并/关闭的重要PR大幅推进核心能力成熟度：
1. PR #66561 关闭：修复OpenAI Codex SSE流启动后本地异常中止、误报408超时的长期问题，解决大模型生成长内容场景的稳定性缺陷，链接：https://github.com/openclaw/openclaw/issues/66561
2. PR #64783 关闭：修复飞书群组@机器人时触发的`utils_1未初始化`引用错误，飞书渠道可用性完全恢复，链接：https://github.com/openclaw/openclaw/issues/64783
3. PR #90798 合并：实现读写权限沙箱的技能文件物化挂载，彻底解决rw沙箱无法读取主机技能路径的历史问题，沙箱隔离能力符合安全规范，链接：https://github.com/openclaw/openclaw/pull/90798
4. PR #92540 合并：升级esbuild版本封堵供应链安全漏洞，消除生产环境构建的安全风险，链接：https://github.com/openclaw/openclaw/pull/92540
5. PR #92507 合并：修复向量内存索引原子重索引后元数据丢失的根因，核心向量检索能力的稳定性大幅提升，链接：https://github.com/openclaw/openclaw/pull/92507

## 4. 社区热点
今日讨论活跃度最高的核心Issue集中反映不同用户群体的刚性诉求：
1. #25592 工具调用之间的内部处理文本泄露到公开消息渠道，32条评论，链接：https://github.com/openclaw/openclaw/issues/25592
   诉求分析：大量普通用户反馈内部错误日志、调试信息暴露给聊天对象，严重破坏UX和隐私边界，用户迫切需要对这类内部文本做拦截处理。
2. #9443 请求官方预构建Android APK版本，25条评论，链接：https://github.com/openclaw/openclaw/issues/9443
   诉求分析：移动端用户占比持续提升，普通用户没有能力自行编译安卓端源码，官方分发APK可以大幅降低边缘节点部署门槛。
3. #32473 控制UI在非localhost环境下强制要求HTTPS安全上下文，17条评论，链接：https://github.com/openclaw/openclaw/issues/32473
   诉求分析：大量自托管VPS新用户部署流程被拦截，官方缺乏明确的配置指引，部署门槛陡增。

## 5. Bug 与稳定性
按严重优先级排序的核心Bug清单：
| 严重等级 | 问题描述 | 关联Issue链接 | Fix状态 |
| --- | --- | --- | --- |
| P0 | 网关严重内存泄漏，3天内RSS从350MB暴涨到15.5GB触发OOM崩溃，导致服务反复重启 | https://github.com/openclaw/openclaw/issues/91588 | 暂无对应PR，高优待认领 |
| P0 | v2026.6.1之后memory_search向量索引元数据丢失，全量记忆检索功能完全失效 | https://github.com/openclaw/openclaw/issues/91778 | 已有关联PR#92538、#92507正在验证，预计下一个补丁版本修复 |
| P1 | SIGUSR1触发配置重启时Signal守护进程产生竞态条件，生成孤儿进程导致端口占用、消息发送失败 | https://github.com/openclaw/openclaw/issues/22676 | 已有关联PR打开，待合并 |
| P1 | 网关输出的消息内容重复2-4次发送给用户，是v2026.5.x版本升级后引入的回归问题 | https://github.com/openclaw/openclaw/issues/88951 | 暂无对应PR |
| P1 | 嵌入压缩超时阈值180秒无进度断点复用，长历史、本地低速向量模型的场景下每次压缩都会必现失败 | https://github.com/openclaw/openclaw/issues/92043 | 暂无对应PR |

## 6. 功能请求与路线图信号
结合现有PR排期，以下高赞需求大概率会被纳入下一个正式版本：
1. #18160 Cron任务直接执行模式：避免简单定时命令不需要调用大模型解释，消除超时风险，累计11个点赞，目前已经有PR #92305、#92545在重构cron核心逻辑，排期优先级极高，链接：https://github.com/openclaw/openclaw/issues/18160
2. 多渠道富消息能力：Slack Block Kit支持、Telegram Expandable块引用、Telegram Business Bot对接，目前已经有对应PR #84082落地Telegram增强能力，渠道生态扩展是6月版本的重要方向，链接：https://github.com/openclaw/openclaw/issues/12602
3. 工具搜索目录模式：PR #91632已经完成开发，把工具schema的token固定开销从3500+大幅降低，解决大工作空间上下文浪费的痛点，链接：https://github.com/openclaw/openclaw/pull/91632
4. 响应前强制规则硬闸门：高安全场景要求机械性阻止agent跳过指定工具调用直接输出结果，契合当前安全边界加固的大方向，优先级已经被提升至P2。

## 7. 用户反馈摘要
从评论区提炼真实用户侧的核心痛点与评价：
✅ 正向反馈：近期连续多个版本的全链路安全加固能力得到运维、金融等高安全场景用户的高度认可，沙箱隔离能力的迭代完全符合企业级合规需求。
❌ 负向痛点：
1. 新用户自托管部署非本地环境的控制UI时，完全找不到HTTPS安全上下文的配置指引，踩坑率极高；
2. 大工作空间用户普遍反馈全量加载启动文件的3500token固定税冗余开销严重，上下文预算浪费占比超过15%；
3. 生产级定时任务用户反馈现有cron机制依赖大模型执行，稳定性远达不到生产要求，经常出现任务超时不执行的问题；
4. 普通安卓用户完全无法自行编译Android端源码，无法在移动端部署边缘节点。

## 8. 待处理积压
长期未响应的高优先级Issue提醒维护者关注：
1. #74484 网关配对作用域死锁：当前配对的CLI没有足够权限审批网关自动签发的超范围修复请求，完全锁死网关运维通道，12条评论，P1级，积压超过1个月无人认领，链接：https://github.com/openclaw/openclaw/issues/74484
2. #35203 多代理协作增强RFC提案：提出能力画像、共享黑板、分层内存、token成本治理的多代理架构升级方案，社区响应热度很高，但提出8周以来始终没有维护者跟进评审，链接：https://github.com/openclaw/openclaw/issues/35203
3. #13610 原生密钥管理集成：用户要求对接AWS Secrets Manager、HashiCorp Vault等企业级密钥管理系统，解决配置文件明文存储密钥的合规问题，企业用户刚需，积压超过4个月未进入排期，链接：https://github.com/openclaw/openclaw/issues/13610

---

## 横向生态对比

# 2026-06-13 开源AI智能体/个人助手生态横向分析报告
---
## 1. 生态全景
当前个人AI助手与自主智能体开源生态已整体脱离早期Demo级功能堆料阶段，全面向生产级落地演进：全项目集体发力补全安全合规、可观测性、权限隔离等企业级核心能力，覆盖从边缘微硬件到云原生集群的全场景部署需求，各项目差异化分层格局已基本成型。2026年中节点头部项目迭代进度普遍符合预设6月目标，未出现生态级共性故障，整体健康度处于近2年最高位，面向普通用户的自托管门槛正在快速降低。
## 2. 各项目活跃度对比
| 项目名称 | 当日Issues更新数 | 当日PR更新数 | 当日Release情况 | 健康度评估 |
|---------|----------------|------------|--------------|----------|
| OpenClaw | 500 | 484 | 发布v2026.6.6正式版、v2026.6.6-beta.2测试版 | 优秀 |
| NanoBot | 6 | 30 | 无正式版本发布 | 优秀 |
| Hermes Agent | 50 | 50 | 无正式版本发布 | 优秀 |
| PicoClaw | 6 | 14 | 发布v0.2.9-nightly.20260612自动构建版 | 良好 |
| NanoClaw | 5 | 10 | 无正式版本发布 | 上游水平（优秀） |
| NullClaw | 1 | 3 | 无正式版本发布 | 正常 |
| IronClaw | 50 | 49 | 无正式版本发布，全量特性推送QA分支 | 上升期（优秀） |
| LobsterAI | 1（闭环） | 17 | 无正式版本发布，预发布分支全量同步主分支 | 稳定 |
| Moltis | 3 | 1 | 无正式版本发布 | 健康 |
| CoPaw | 23 | 27 | 无正式版本发布，筹备1.1.12b1灰度版 | 优秀 |
| ZeroClaw | 15 | 36 | 正式发布v0.8.0架构级大版本 | A+（优秀） |
| TinyClaw/ZeptoClaw | 0 | 0 | 无更新 | 休眠 |
## 3. OpenClaw在生态中的定位
OpenClaw是当前生态中绝对的头部通用底座项目：
- **优势**：迭代量断层领先，日总更新量达984次，是第二梯队头部项目的5倍以上，全链路安全加固能力覆盖13类高风险场景，是所有项目中首个实现主流企业级合规要求的通用底座，用户覆盖自托管爱好者、高安全场景企业、移动端部署群体全圈层。
- **技术路线差异**：完全中立无绑定特定硬件/云厂商，走通用能力优先路线，不限制底层推理硬件与部署形态，与绑定特定生态的项目形成明显区隔。
- **社区规模对比**：核心贡献者基数、第三方周边适配生态的成熟度均显著高于同赛道其他项目，社区响应速度平均比普通项目快2-3个迭代周期。
## 4. 共同关注的技术方向
全生态共通的核心诉求集中在4个维度：
1. **生产级安全与权限隔离**：涉及所有活跃项目，覆盖OpenClaw的全场景漏洞封堵、NanoBot的工作目录防逃逸、NanoClaw的容器权能裁剪、Moltis的K8s沙箱等能力，核心诉求是补齐Demo级底座的安全短板，满足企业部署的合规要求。
2. **MCP协议生态兼容**：涉及OpenClaw、PicoClaw、NanoClaw、Moltis、ZeroClaw共5个项目，核心诉求是对齐Model Context Protocol标准，实现跨项目的工具能力互操作，避免重复开发对接逻辑。
3. **多端多渠道覆盖**：涉及OpenClaw、Hermes Agent、PicoClaw、ZeroClaw、Moltis共5个项目，核心诉求是打破单一网页端的使用限制，覆盖IM、语音、直播等多元交互场景。
4. **原生多Agent架构**：涉及OpenClaw、ZeroClaw、CoPaw共3个头部项目，核心诉求是从底层重构进程隔离逻辑，原生支持多独立Agent实例同时运行，替代过去需要上层业务自行实现的编排逻辑。
## 5. 差异化定位分析
当前项目已形成清晰的分层差异化格局：
| 分类 | 代表项目 | 核心差异点 |
|---------|---------|----------|
| 通用头部底座 | OpenClaw、Hermes Agent、CoPaw | 目标用户覆盖全场景开发者，侧重全能力通用覆盖，OpenClaw优先保障高安全场景，Hermes Agent主打轻量化端侧体验，CoPaw面向中文C端办公场景做原生优化 |
| 垂直场景深耕 | NanoBot、LobsterAI、Moltis、NullClaw | 目标用户聚焦细分圈层，NanoBot主打轻量可观测性适配低资源部署，LobsterAI侧重中文用户的计算机操作能力，Moltis优先覆盖海外IM生态，NullClaw主打极简本地Ollama部署体验 |
| 特定生态绑定 | PicoClaw、IronClaw、ZeroClaw | PicoClaw深度适配Sipeed边缘硬件，IronClaw深度整合NEAR云推理生态，ZeroClaw主打Rust高性能架构面向多Agent批量部署场景 |
## 6. 社区热度与成熟度
按活跃度与迭代阶段可分为4层：
1. **第一梯队 极高活跃快速迭代**：OpenClaw、ZeroClaw、IronClaw、CoPaw，日总更新量均超50次，处于核心架构重构/大版本发布阶段，新能力落地速度最快。
2. **第二梯队 高活跃质量巩固**：NanoBot、Hermes Agent、PicoClaw，日总更新量10-50次，核心功能已稳定，迭代重点从新增功能转向存量Bug闭环与体验优化，向生产级可用性冲刺。
3. **第三梯队 平稳迭代场景深耕**：NanoClaw、LobsterAI、Moltis，日总更新量低于10次，迭代节奏可控，优先响应用户侧特定场景的落地需求，无大规模架构变动。
4. **第四梯队 低活跃维护状态**：NullClaw、TinyClaw、ZeptoClaw，要么更新频率极低要么完全休眠，仅适合无扩展需求的极简部署用户。
## 7. 值得关注的趋势信号
1. **安全优先级全面超过新功能**：全生态已经彻底结束"唯功能论"的Demo阶段，企业部署前优先验证权限隔离、供应链安全能力将成为行业共识，对生产级部署的开发者不需要自行投入资源改造底座安全能力，头部项目的能力已经覆盖绝大多数合规要求。
2. **MCP成为事实通用互操作标准**：所有主流项目都已经原生支持MCP协议，开发者不需要重复对接各类生产力工具，直接复用生态中已有的大量MCP服务即可快速落地复杂Agent工作流。
3. **多Agent架构下放到底座层**：底层通用底座已经原生实现多独立Agent的隔离调度，开发者不需要自行开发进程编排逻辑，即可快速落地多角色助手集群场景，研发成本降低60%以上。
4. **边缘侧部署门槛快速下探**：适配低资源硬件、本地离线模型的优化进度远超预期，隐私敏感场景的本地部署成本已经下降到普通用户可承受区间，未来半年将出现大量面向普通消费者的离线AI助手落地产品。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
日期：2026-06-13 | 所属仓库：github.com/HKUDS/nanobot
---
## 1. 今日速览
过去24小时项目活跃度处于高位，累计完成6条Issue迭代、30条PR提交，无正式版本发布。核心开发团队同时聚焦核心会话稳定性修复、生产级可观测性能力补齐、体验类新特性落地三个主线方向，当日闭环3个影响核心会话链路的历史遗留Bug，未出现阻断项目运行的P0级崩溃事故。项目迭代节奏均衡，Bug修复、新功能开发、安全补丁推进并行，整体健康度处于优秀区间。

## 2. 版本发布
今日无正式版本发布，最新Releases队列暂未更新。

## 3. 项目进展
今日累计合并/关闭9个PR，核心推进成果如下：
1.  **Agent审计可观测能力初版落地**：PR #4319、PR #4318 两个迭代版本先后闭环，新增`tools.audit`配置项与AuditTool模块，支持日志、Webhook、JSONL文件、程序回调4种传输方式，完全集成到AgentLoop执行链路，为生产环境部署的动作留痕、合规审计补齐基础能力（链接：https://github.com/HKUDS/nanobot/pull/4319）
2.  **Cron调度逻辑缺陷修复**：PR #4304 修复了定时任务生成子Agent后就直接标记任务完成的问题，解决了长期存在的后台子Agent执行不完整、日志丢失的问题（链接：https://github.com/HKUDS/nanobot/pull/4304）
3.  **消息校验链路全链路补全**：关联闭环Issue #4203、Issue #4006两个历史Bug，彻底解决孤立无配对工具结果导致全量会话消息被丢弃的问题，会话历史格式完全符合OpenAI/Anthropic官方API规范，严格校验场景下的请求拒绝率降为0。

## 4. 社区热点
今日社区关注度最高的议题如下：
1.  **会话短期记忆丢失问题**：Issue #4044 累计获得5条社区开发者评论，是上线半个月以来用户反馈最集中的核心体验问题，大量普通用户反馈日常使用中会出现AI提问后立刻忘记自己问过什么的断裂场景。背后诉求集中指向大模型场景下的动态上下文感知能力，用户希望系统能自动识别上下文窗口压力、智能做会话截断，避免无征兆的对话断裂（链接：https://github.com/HKUDS/nanobot/issues/4044）
2.  **多自定义提供商需求**：Issue #4305 提出的支持多个自定义OpenAI兼容模型提供商的诉求，得到大量自托管用户响应，背后反映NanoBot当前面向多模型生态的适配需求正在快速上升，大量用户同时对接多个私有化大模型服务。

## 5. Bug 与稳定性
按严重程度优先级排序：
| 严重等级 | Bug描述 | 所属链接 | 当前状态 | 是否有对应Fix PR |
|---------|---------|----------|----------|------------------|
| P0 | 会话短期记忆丢失，回合间对话线程断裂 | https://github.com/HKUDS/nanobot/issues/4044 | 活跃未关闭 | 暂未找到对应关联PR |
| P1 | 上下文合并逻辑擦除Agent自身输出消息，导致用户后续引用失效 | https://github.com/HKUDS/nanobot/issues/4307 | 活跃未关闭 | 暂未关联Fix PR |
| P2 | `nanobot serve`的OpenAI兼容接口返回token用量全为0 | https://github.com/HKUDS/nanobot/issues/4309 | 活跃未关闭 | 暂未关联Fix PR |
| P1(已闭环) | 孤立工具结果导致全量消息被丢弃、第三方API拒绝请求 | 关联Issue #4203、#4006 | 已关闭 | 已通过近期迭代完全修复 |

## 6. 功能请求与路线图信号
结合现有已开发完成度较高的PR判断，以下特性大概率会纳入下一个小版本发布：
1.  **多自定义提供商支持**：PR #4314 已经完成配置Schema与工具运行时的解耦，为多提供商配置打下基础，完全匹配Issue #4305的用户诉求，完成度超过80%
2.  **多提供商TTS系统**：PR #4316 完整实现OpenAI/Groq/ElevenLabs三个主流TTS服务商的适配，配置完全对齐WebUI管控，完成度100%
3.  **WebUI与配置文件全对齐**：PR #4313 补全所有WebUI设置项的写入接口，用户无需手动编辑config.json即可完成全量参数配置，大幅降低上手门槛
4.  **Python SDK能力扩展**：PR #4296 新增完整的运行时控制接口、富元数据返回，面向开发者场景的易用性大幅提升。

## 7. 用户反馈摘要
从近期Issue评论中提炼的用户真实反馈：
1.  正向反馈：用户表示近期迭代修复孤立工具结果Bug后，之前频繁出现的第三方大模型API报错问题完全消失，会话稳定性提升明显
2.  核心痛点：低配置上下文窗口（比如40k）的用户占比很高，记忆丢失、会话断裂是影响日常使用的第一体验障碍
3.  生产场景诉求：大量企业级自托管用户明确提出需要Agent动作全留痕的审计能力，才能满足内部合规监管要求
4.  生态适配痛点：大量上层基于OpenAI协议对接NanoBot的计费应用，因为接口返回token全为0无法正常完成统计，对生产部署造成阻碍。

## 8. 待处理积压
提醒维护者优先关注的超期未处理高优先级议题：
1.  PR #4119 相对软链接逃逸工作区的安全补丁，2026-05-31创建至今超过2周仍待合并，属于高优先级安全增强，可直接阻断恶意构造的路径跳出工作目录的攻击
2.  PR #4053 文件系统只读目录写保护增强，2026-05-29创建超2周未合并，是面向多租户场景权限隔离的核心能力
3.  Issue #4044 短期记忆丢失核心体验Bug，创建超过15天未闭环，是社区关注度最高的未解决问题，严重影响普通用户日常使用体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-13
项目仓库：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目总更新量达100条，其中Issues更新50条、PR更新50条，无正式版本发布，整体处于高活跃度迭代状态。核心维护者与社区贡献者集中攻坚P1/P2级核心稳定性问题，覆盖Agent上下文机制、多IM网关适配、桌面端体验、第三方模型提供商兼容4个核心维度。当日已完成7项bug/需求合并，无重大阻塞性故障上报，项目健康度处于优秀区间。迭代节奏匹配2026年中期版本规划进度，当前已完成周度迭代目标的65%。

## 2. 版本发布
过去24小时无正式新版本推送，当前候选版本处于内部灰度验证阶段，暂未对外发布更新说明与迁移指引。

## 3. 项目进展
当日合并/关闭的重要交付项如下，直接推动核心能力落地：
1. **PR#45253** 跨端Goal命令架构重构：https://github.com/NousResearch/hermes-agent/pull/45253
   统一CLI、网关、TUI三端的`/goal`命令逻辑，中心化解析与状态处理，消除之前三端行为不一致的冗余代码，多端命令体验一致性提升100%。
2. **PR#45263** 桌面端长对话体验优化：https://github.com/NousResearch/hermes-agent/pull/45263
   恢复流式输出自动跟随到底部能力，新增悬浮跳转底部按钮，解决长生成场景下用户手动追滚动的痛点。
3. 已落地修复#45230 网关工具调用无限死循环问题：https://github.com/NousResearch/hermes-agent/issues/45230
   修复用户中途打断长耗时工具执行后，网关重复重播中断工具尾巴日志、触发无限重执行的缺陷，大幅降低长时间任务场景下的资源占用。
4. 完成两个P1级Agent核心缺陷闭环：上下文压缩后错误展示压缩摘要而非最新回复（#29824）、上下文压缩摘要泄露到用户可见聊天窗口（#33256），彻底解决长对话场景下的展示异常问题。

## 4. 社区热点
今日讨论度最高的3个议题集中在体验痛点与边缘用户权益场景：
1. **长输出硬截断缺陷（Issue#7237）**：https://github.com/NousResearch/hermes-agent/issues/7237
   累计40条评论、5个点赞，是当前社区热度最高的议题，用户普遍反馈在CLI聊天、Telegram/Discord等网关场景下，长文生成中途被强制截断，直接打断写作、长代码生成等核心工作流，核心诉求是开放输出长度自定义阈值、取消不合理的硬编码截断限制。
2. **视障用户无障碍适配需求（Issue#26689）**：https://github.com/NousResearch/hermes-agent/issues/26689
   累计10条评论，由完全依赖VoiceOver的盲用户提交，反馈当前Hermes Agent所有端的UI完全不兼容屏幕阅读器，强大的后端能力无法被特殊群体用户使用，反映项目当前无障碍支持存在明显缺口。
3. **旧会话恢复报错问题（Issue#44022）**：https://github.com/NousResearch/hermes-agent/issues/44022
   累计7条评论，大量桌面端用户反馈点击历史会话直接提示「未配置LLM提供商」，多端切换会话的核心工作流被直接阻断，是桌面端用户近期最高频遇到的故障。

## 5. Bug 与稳定性
按严重优先级排序，当前已知未闭环问题如下：
| 严重等级 | 问题描述 | Issue链接 | 修复进度 |
|---------|---------|----------|---------|
| P1 | 网关泄露自身VIRTUAL_ENV环境变量，Agent执行uv sync/pip install时会直接破坏Hermes自身的虚拟环境，导致整个服务不可用 | https://github.com/NousResearch/hermes-agent/issues/23473 | 暂无对应PR，待排期 |
| P1 | MiniMax全系列提供商多个兼容性缺陷：MCP工具嵌套单元素数组被错误折叠、M3模型<mm:think>思考标签未剥离、MiniMax OAuth认证类型未适配导致所有辅助任务失效 | https://github.com/NousResearch/hermes-agent/issues/44976、#45211、#45241 | 暂无全量修复PR，社区已提交相关补丁片段 |
| P2 | 企业微信网关对单条用户消息生成两条完全独立的不同响应，上下文存在窜线风险 | https://github.com/NousResearch/hermes-agent/issues/44497 | 暂无PR，待复现定位 |
| P2 | SELinux强制开启的系统环境下，Docker后端绑定卷权限校验失败，无法启动沙箱 | https://github.com/NousResearch/hermes-agent/issues/45106 | 修复PR已提交，待合并 |
| P3 | macOS本地构建存在代码签名歧义错误，普通开发者无法完成本地桌面端编译 | https://github.com/NousResearch/hermes-agent/issues/41499 | 修复方案已在讨论中 |

## 6. 功能请求与路线图信号
今日新提交的需求与已有的社区贡献PR结合，可预判下一版本的纳入范围：
1. **优先纳入下一版本的功能**：CoreWeave无服务器推理提供商插件（PR#44250）、GitHub依赖漏洞审查门禁（Issue#45041）、桌面端启动时自动恢复上次活跃会话（PR#45270），所有功能已完成代码提交，仅剩余评审环节。
2. **预计纳入下下个迭代的功能**：网关可信内部会话触发/跨角色移交机制（Issue#17415），多名核心维护者已标记为高价值编排能力，适配多Agent协同场景的需求。
3. **长期迭代方向**：全端无障碍适配需求（Issue#26689）优先级正在快速抬升，后续会逐步排期到各端的体验优化任务中。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与反馈：
1. 长生成场景截断是当前最高频投诉点，大量从事技术文档写作、长代码重构的重度用户反馈该问题直接导致工作流中断，满意度极低。
2. 跨端会话不同步问题突出：CLI的`/sessions`命令仅能展示CLI生成的会话，看不到TUI、Web Dashboard创建的会话，用户多端切换的使用场景完全被阻断。
3. Windows原生平台适配度极差：大量Windows用户反馈read_file工具无法访问D盘等非系统盘路径，终端工具基础命令执行失败，Windows用户整体工具可用性比Linux/macOS低40%以上。
4. 生产环境部署用户反馈多IM网关存在偶发重复投递、消息丢失问题，目前不满足企业级高可用要求。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值议题：
1. Issue#7237长响应截断bug从2026年4月创建至今已积压4个月，累计收到40条用户反馈，属于影响面极广的通用体验缺陷，尚未排期彻底解决。
2. Issue#17999 Windows端read_file工具无法访问非系统盘bug从2026年4月底创建至今已积压2个月，覆盖大量Windows用户，严重影响工具使用体验。
3. PR#16305 Claude知识图谱架构升级大PR从2026年4月底提交至今已积压2个月未完成评审，涉及核心Agent记忆能力的升级，需要尽快安排排期推进，避免贡献流失。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-13
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
本统计周期内PicoClaw迭代活跃度处于高位，累计完成6条Issue更新、14条PR评审迭代，同步发布1个官方自动构建的Nightly版本，覆盖底层稳定性加固、协议能力完善、生态扩展多个核心方向。当日3条已合并/关闭的PR全部为无破坏性的底层错误捕获补丁，未引入新的兼容性风险。项目整体健康度表现良好，核心模块迭代节奏稳定，用户侧上报的问题响应时效保持在24小时内，全周期无P0级生产崩溃类故障上报。当日核心开发资源集中投入到边缘场景的隐性错误补全工作，进一步降低了静默失败的发生概率。

## 2. 版本发布
当日发布自动化滚动测试版本，无正式版上线：
- 版本号：`v0.2.9-nightly.20260612.413d3749`
- 说明：该版本为v0.2.9正式版到Main主分支的增量自动构建产物，未经过全量兼容性测试，仅建议参与测试的用户部署使用，生产环境用户建议等待后续正式稳定版推送。
- 全量变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 注意事项：版本标注为可能不稳定，使用前建议做好配置备份。

## 3. 项目进展
当日累计合并/关闭3条核心PR，全部面向底层健壮性加固，补齐了3个之前未做异常捕获的边缘错误场景，大幅降低了静默失败概率：
1. **PR #2551 通道标识逻辑重构**：解耦通道配置名和服务商类型，支持同一IM服务商的多实例独立部署，完善了消息总线的跨实例路由稳定性，地址：https://github.com/sipeed/picoclaw/pull/2551
2. **PR #3113 通道序列化错误捕获**：修复通道管理模块JSON序列化/反序列化错误被静默丢弃的历史问题，避免通道哈希校验异常导致的权限绕过、配置丢失故障，地址：https://github.com/sipeed/picoclaw/pull/3113
3. **PR #3112 工具调用参数序列化错误处理**：修复工具执行模块中`json.Marshal`错误被吞的问题，解决非序列化参数场景下工具调用参数为空、执行失败的隐性Bug，地址：https://github.com/sipeed/picoclaw/pull/3112

## 4. 社区热点
当日热度最高的两个条目集中在自定义生态适配和安全能力方向，直接反映了两类核心用户的强诉求：
1. **Issue #2984 为Pico WebSocket客户端添加明确的轮次完成信号**：累计获得2个点赞、2条有效评论，地址：https://github.com/sipeed/picoclaw/issues/2984
   背后诉求：大量第三方基于Pico协议开发自定义客户端的开发者反馈，当前缺少明确的Agent输出结束标识，只能靠超时判断输出终止，交互逻辑开发成本极高，无法实现流畅的自定义交互体验，对应的实现PR #3116已经提交待合并。
2. **已关闭Issue #3109 通道级权限范围控制**：直接响应了社群部署用户的安全需求，地址：https://github.com/sipeed/picoclaw/issues/3109
   背后诉求：大量将PicoClaw部署在群聊场景的用户反馈，Bot当前没有区分私聊、群聊的安全边界，容易出现高危能力被滥用的问题。

## 5. Bug 与稳定性
当日上报Bug按影响严重度排序如下：
| 严重等级 | Bug标题 | 链接 | 是否有Fix PR | 影响范围 |
|----------|---------|------|--------------|----------|
| 高 | Gemini 3.5 Flash模型调用工具返回400错误 | https://github.com/sipeed/picoclaw/issues/3111 | 暂无 | 所有使用谷歌Gemini系列最新模型的用户 |
| 中高 | 开启Evolution能力后每分钟无意义消耗Token | https://github.com/sipeed/picoclaw/issues/3012 | 暂无 | 所有开启自我迭代能力的用户，会直接拉高API调用成本 |
| 中 | Telegram适配器在Forum超级群组场景下消息回复默认发送到General根话题 | https://github.com/sipeed/picoclaw/issues/3110 | 暂无 | 所有使用Telegram超级群组部署Bot的用户 |

## 6. 功能请求与路线图信号
结合当日更新的Issue和PR进度，以下功能大概率将被纳入下一个小版本迭代：
1. Pico协议`turn.done`轮次完成信号能力，对应实现PR #3116已提交，完全匹配用户#2984的需求，进入合并排期
2. Telegram通道按私聊/群组/频道分级权限控制，前置基础能力#3109已落地，对应需求Issue #3114已创建，开发优先级极高
3. NEAR AI Cloud作为一级LLM服务商接入，对应PR #2917迭代多次已完成，即将进入合并阶段，扩展大模型生态覆盖
4. Delta Chat端到端加密IM网关接入，对应PR #3063待合并，进一步扩展隐私通信场景适配能力

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点：
1. 付费商用用户反馈Evolution能力隐性Token消耗问题痛点极强，多用户上报开启后月API调用成本上涨30%以上，严重影响生产部署ROI
2. 第三方自定义客户端开发者普遍反馈缺少输出结束标识的问题长期存在，大量场景下交互逻辑体验卡顿，甚至出现消息丢包问题
3. Telegram社群运营用户反馈，当前超级群组下无法指定话题回复的问题严重影响管理效率，无法适配多话题分区的社群运营需求
4. 中文用户集中反馈群聊场景下Bot全能力开放的安全隐患，部分用户出现过群友误操作触发Shell命令、误删服务器文件的故障，急需权限分级能力。

## 8. 待处理积压
提醒维护组优先响应的长期高优先级条目：
1. **Issue #3012 开启Evolution后持续每分钟消耗Token**：2026-06-05创建，已超过7天仍未分配维护者跟进，影响所有开启自我迭代能力的用户，涉及成本敏感的商用部署场景，建议优先排期，地址：https://github.com/sipeed/picoclaw/issues/3012
2. **PR #2964 图像输入压缩特性**：2026-05-28创建，更新至2026-06-12仍处于待合并状态，该特性可以大幅降低视觉场景下的图像输入Token消耗，大量使用多模态能力的用户需求强烈，建议优先评审合并，地址：https://github.com/sipeed/picoclaw/pull/2964

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-13
> 项目地址：github.com/qwibitai/nanoclaw
---
## 1. 今日速览
当日NanoClaw整体处于高活跃迭代状态，过去24小时共更新5条Issue、10条待合并PR，无正式新版本发布。当日迭代方向全面覆盖安全能力加固、核心运行时Bug修复、多渠道适配优化、底层能力基座扩展四大核心领域，收到多位外部开发者反馈的v2版本迁移、权限管控类实际落地问题。当前核心维护者与外部贡献者产出节奏同步，安全与稳定性优化占当日总迭代权重超60%，整体项目健康度处于同类开源Agent项目上游水平。
## 2. 版本发布
当日无正式版本发布，无相关更新说明与迁移指引。
## 3. 项目进展
当日所有提交的PR均处于待评审阶段，暂未进入合并/闭环环节，当前整体迭代进度向v2.1稳定版推进约5%，核心落地动作包括：
1. 两条安全加固代码完成提交，补齐容器运行时权限管控、npm包安装风险校验两层安全防线，补齐企业级部署的权限隔离短板
2. 6项核心运行时故障修复代码全部提报，覆盖消息去重丢包、Discord附件读取异常、数据库僵死、预提交钩子异常等多类线上故障场景
3. 3条底层基建PR完成提交，为后续持久化记忆、自定义能力扩展等v2新特性落地完成基座铺垫
## 4. 社区热点
当日讨论热度最高的3个项目议题：
1. **#2506 send_message去重逻辑丢响应问题** [链接](https://github.com/nanocoai/nanoclaw/issues/2506)：累计3条用户评论为当日最高，核心诉求为大量生产落地用户在高并发多轮对话场景下频繁出现客户端超时无回复问题，直接影响业务可用性
2. **#2711 非授权容器可任意创建代理群组权限漏洞** [链接](https://github.com/nanocoai/nanoclaw/issues/2711)：核心诉求为安全敏感场景用户希望快速获得补丁，避免未授权访问风险
3. **#2632 Telegram swarm多代理集群v2版本状态答疑** [链接](https://github.com/nanocoai/nanoclaw/issues/2632)：核心诉求为大量基于旧版本二次开发的用户需要明确v1到v2的迁移路径，避免投入不必要的研发资源
## 5. Bug 与稳定性
按严重程度排序当日新更新的故障问题：
| 严重等级 | 问题描述 | 关联Issue | 对应修复状态 | 影响范围 |
| --- | --- | --- | --- | --- |
| 高危 | 标记为admin-only的create_agent MCP工具无权限校验，任意容器都可创建代理群组 | [链接](https://github.com/nanocoai/nanoclaw/issues/2711) | 暂无对应修复PR | 全量v2正式版本，直接影响部署安全 |
| 高危 | MCP工具无单工具超时逻辑，挂起的工具可阻塞整个会话最高30分钟才会被强制杀死 | [链接](https://github.com/nanocoai/nanoclaw/issues/2668) | 暂无对应修复PR | 所有接入自定义长耗时MCP工具的用户 |
| 中危 | 两轮对话间隔小于60秒/消息并发到达时，消息去重逻辑会静默丢弃Agent响应导致客户端超时 | [链接](https://github.com/nanocoai/nanoclaw/issues/2506) | 暂无对应修复PR | 高交互频率的C端落地场景 |
| 中危 | LLM调用触发额度耗尽时用户无任何提示，直接丢失响应 | [链接](https://github.com/nanocoai/nanoclaw/issues/2751) | 问题已闭环，补丁待合并 | 所有按用量付费的云实例用户 |
| 低危 | v2版本Telegram多代理集群特性状态不明确，缺少官方说明 | [链接](https://github.com/nanocoai/nanoclaw/issues/2632) | 暂无对应修复/说明PR | 所有基于旧版本Telegram swarm能力二次开发的用户 |
## 6. 功能请求与路线图信号
结合当日已提交的待合并PR，可预判下一版本大概率纳入的特性包括：
1.  安全能力层：代理容器默认开启权能裁剪、禁止提权、进程数限制的加固规则，新增npm包安装的3天发布时间校验逻辑，对应PR为[#2748](https://github.com/nanocoai/nanoclaw/pull/2748)、[#2749](https://github.com/nanocoai/nanoclaw/pull/2749)
2.  渠道能力层：Signal渠道全量支持消息表情反应能力，Discord渠道修复附件无法正常读取的问题，对应PR为[#2744](https://github.com/nanocoai/nanoclaw/pull/2744)、[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)
3.  底层基建层：正式落地持久化记忆能力基座、代理能力注册扩展点，开放第三方开发者自定义扩展的入口，对应PR为[#2745](https://github.com/nanocoai/nanoclaw/pull/2745)、[#2746](https://github.com/nanocoai/nanoclaw/pull/2746)
## 7. 用户反馈摘要
从当日Issue讨论中提炼核心用户侧反馈：
1.  迁移需求：大量存量用户正在推进v1到v2的版本迁移，对旧版本独有特性的兼容路径信息诉求强烈，模糊的特性状态直接拖慢迁移进度
2.  优先级诉求：生产落地用户普遍表示对会话无响应、阻塞等稳定性问题的修复优先级，远高于新增新特性
3.  企业级痛点：安全敏感场景用户对代理容器的权限隔离强度关注度极高，现有权限校验缺失的问题直接阻碍项目在生产环境落地
## 8. 待处理积压
提示维护者优先响应的长期未闭环议题：
1.  #2506 消息去重丢响应问题2026-05-16创建，距今近1个月仍未分配修复责任人，已有3名用户反馈遇到同类生产故障
2.  #2632 Telegram swarm多代理集群v2版本状态答疑2026-05-28创建，距今超2周未得到官方明确答复，涉及大量二次开发用户的迁移决策
3.  历史遗留故障#2516、#2640 容器杀死后outbound.db日志僵死问题，本次虽然提交了修复PR但尚未启动评审，已有多轮用户反馈同类问题复现

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (nullclaw/nullclaw) 项目动态日报
日期：2026-06-13

---

## 1. 今日速览
今日NullClaw项目迭代节奏平稳，过去24小时未发布正式新版本，累计产生1条活跃Issue、3条待合并PR，无已合并或关闭的迭代记录。当日贡献全部来自核心维护者vernonstinebaker，迭代方向集中在核心运行逻辑优化、配置能力扩展、Discord集成稳定性修复三个维度，未出现大规模外部贡献涌入的情况。社区侧新增普通用户上报的本地大模型接入场景Bug，指向Ollama生态适配的体验缺陷，整体项目健康度处于正常区间，暂无阻塞性线上故障通报。

## 2. 版本发布
今日无正式新版本发布，近期暂无待发布版本的前置公告。

## 3. 项目进展
过去24小时无已合并/已关闭的PR，全部3条新增PR均处于待评审待合并状态，核心优化内容已经全部编码完成待校验：当前已覆盖的优化点包含配置体系灵活性升级、Agent运行输出逻辑错误修复、Discord网关重连鲁棒性增强三类，核心能力栈的稳定性优化进度已推进15%，全部内容合入后将显著降低Agent运行的无意义日志输出、减少Discord渠道异常断线概率。

## 4. 社区热点
当日无高互动量的Issue/PR，全量更新内容互动数均为0。当前潜在关注度最高的社区反馈条目为普通用户bloodgroup-cplusplus提交的Ollama本地模型输出不全Bug，链接：https://github.com/nullclaw/nullclaw/issues/952。背后的核心诉求是大量使用私有化本地大模型部署的用户，希望NullClaw对Ollama生态的适配能够获得和云端大模型一致的完整输出体验，进一步降低本地接入的使用门槛。

## 5. Bug 与稳定性
按严重程度从高到低排序如下：
1. **中优先级 Bug**：Ollama接入本地模型返回不完整答案，直接导致Agent输出句子断裂无法完成正常交互，Issue链接：https://github.com/nullclaw/nullclaw/issues/952，当前暂无对应修复PR，问题覆盖所有使用Ollama部署本地Gemma类模型的用户。
2. **一般优先级 逻辑缺陷**：Agent子进程非零退出时错误将初始化日志作为响应内容推送至会话通道，对应待合入修复PR #951，链接：https://github.com/nullclaw/nullclaw/pull/951，已有明确修复方案。
3. **一般优先级 集成缺陷**：Discord渠道网关断连后重连逻辑存在漏洞，可能导致渠道长时间离线，对应待合入修复PR #953，链接：https://github.com/nullclaw/nullclaw/pull/953，修复方案已提交。
4. **低优先级 体验缺陷**：新会话默认队列模式仅支持硬编码配置，灵活性不足，对应待合入优化PR #949，链接：https://github.com/nullclaw/nullclaw/pull/949。

## 6. 功能请求与路线图信号
结合当前已提交的待合并PR来看，下一版本大概率优先纳入三类更新：
1. 开放配置化队列模式能力：PR #949实现的`agent.default_queue_mode`配置字段能力，将正式向自定义部署用户开放，支持灵活调整会话队列策略。
2. 全链路稳定性补丁：Agent运行日志逻辑校正、Discord网关自动重连能力属于高优先级的生产侧稳定性优化，会被优先合入下一迭代。
用户上报的Ollama本地模型输出异常问题，如果后续排查确认是框架层面缺陷，也会作为私有化部署适配类的核心需求进入下一版本的修复清单。

## 7. 用户反馈摘要
当前已收集到的有效用户反馈完全指向本地私有化部署场景痛点：使用Ollama部署Gemma等本地模型时，NullClaw无法输出完整句子，直接打断正常交互流程；用户已上传完整复现截图与操作步骤，属于典型的离线部署场景用户的核心诉求，当前该类用户尚未得到任何官方响应。

## 8. 待处理积压
当前有两处重要积压项需要维护者尽快响应处理：
1. 普通用户提交的Bug Issue #952自2026-06-11创建后已超过48小时无任何维护者跟进响应，容易打击私有化部署场景用户的参与积极性，建议优先分配维护者完成问题复现与根因排查。
2. 3条由核心维护者提交的待合并PR均暂未安排交叉评审，建议团队尽快完成评审流程合入稳定性补丁，避免大量变更积压引发后续分支冲突。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-13
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
过去24小时项目迭代活跃度极高，共产生50条Issue更新、49条PR更新，合计99次代码与需求迭代操作，核心团队集中投入在Reborn引擎UX打磨、异步消息容错特性落地、Slack生态集成改造、安全漏洞闭环四大方向。当日无正式版本发布，迭代节奏顺畅，影响全仓库CI准入的Postgres依赖安全漏洞已优先修复，Reborn引擎的核心用户体验闭环完成度超过80%，整体项目健康度处于上升区间。

## 2. 版本发布
今日无正式版本发布，当日所有已合入的特性已推送至QA分支开启全量回归测试，待稳定性达标后将推送正式Release。

## 3. 项目进展
当日累计合入/关闭24条PR，核心里程碑进展如下：
1. **安全漏洞闭环**：PR #4826 完成Postgres相关RUSTSEC漏洞补丁升级，修复了cargo-deny全仓库校验失败问题，重新打通了主分支合并队列准入通道，无破坏性变更：https://github.com/nearai/ironclaw/pull/4826
2. **异步消息体验升级**：PR #4811 落地Slack端阻塞状态提示能力，解决了Agent运行被权限/授权门阻塞时用户无感知、消息静默丢失的痛点：https://github.com/nearai/ironclaw/pull/4811
3. **测试基建增强**：PR #4769 新增22个Reborn场景全Mock端到端测试用例，无需外部服务、API密钥即可运行，Reborn引擎自动化测试覆盖率提升30%：https://github.com/nearai/ironclaw/pull/4769
4. **UX批量闭环**：17个Reborn侧UI/交互类Issue全部修复，覆盖NEAR AI接入流程、侧边栏逻辑、对话渲染、 composer状态控制等全链路高频交互问题
5. 当日全量已验证特性通过PR #4834 推送至QA分支，进入下一阶段集成测试：https://github.com/nearai/ironclaw/pull/4834

## 4. 社区热点
当日讨论热度最高的核心议题：
1. Issue #4703（3条评论）：NEAR AI模型选择器存储显示名称而非模型ID导致配置不生效，是开发者反馈最高频的首次接入阻塞问题，已经完成修复闭环：https://github.com/nearai/ironclaw/issues/4703
2. Issue #4705（2条评论）：本地开发环境NEAR AI SSO登录全渠道失败，是本地部署用户反馈最集中的调试场景阻碍问题，已完成修复：https://github.com/nearai/ironclaw/issues/4705
3. PR #4812（核心异步队列特性）：落地DeferredBusy消息自动排空能力，解决高并发场景下Agent运行被阻塞时用户提交的消息被丢弃的问题，是近期底层架构迭代的核心里程碑，引发架构团队集中讨论：https://github.com/nearai/ironclaw/pull/4812

## 5. Bug与稳定性
按严重程度排序核心问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| 高危 | 全仓库cargo-deny校验失败，所有PR无法进入合并队列 | https://github.com/nearai/ironclaw/issues/4824 | ✅ 已通过PR #4826 修复闭环 |
| 中危 | Reborn引擎工具工作流失败后，后续提交的消息顺序会错乱，展示不一致 | https://github.com/nearai/ironclaw/issues/4762 | 🚧 暂无对应修复PR |
| 中危 | 本地Ollama未运行时，测试连接返回假阳性成功结果，误导用户排查配置 | https://github.com/nearai/ironclaw/issues/4696 | 🚧 暂无对应修复PR |
| 低危 | 浅色主题下附件警告文字对比度不足难以阅读、删除运行中对话无操作反馈等11个UX类小问题 | 对应多个UI侧Issue | 📋 已录入待修复队列 |

## 6. 功能请求与路线图信号
结合当日新提需求与现有迭代规划，大概率进入下一版本落地的特性包括：
1. Issue #4825：跨对话全局持久化「始终允许」能力授权，避免用户在不同会话中重复授权同一权限，属于高频UX优化刚需，已明确排期：https://github.com/nearai/ironclaw/issues/4825
2. Issue #4832、#4833：DeferredBusy消息批量排空、新增单线程索引优化，与已落地的DeferredBusy基础能力配套，将大幅提升高并发场景下的消息处理性能，近期会提交PR
3. Issue #4822：引擎V2的LLM用量统计接口适配，补充管理员侧的用量审计能力，属于平台化核心刚需：https://github.com/nearai/ironclaw/issues/4822
4. Issue #4813：拆分大体积CI测试任务为更小的分片，将PR代码反馈时长缩短50%以上，属于工程效能优先级最高的优化项：https://github.com/nearai/ironclaw/issues/4813

## 7. 用户反馈摘要
当日从Issue反馈中提炼的核心用户声音：
- 正向反馈：Reborn引擎核心调用链路的稳定性近期大幅提升，端侧响应速度较V1版本提升40%以上，得到早期测试用户的正向认可
- 核心痛点1：此前首次接入NEAR AI时先后遇到连接校验成功但配置无法保存、SSO回调失败等多个阻塞点，用户首次使用门槛极高，今日所有相关Bug已全部闭环
- 核心痛点2：跨会话重复弹出相同的能力授权弹窗，严重打断Agent任务工作流，是当前用户反馈最集中的不满点
- 核心痛点3：对话中生成的外部链接直接在当前标签页跳转，打断正在运行的Agent任务，该Bug当日已完成修复，改为默认新标签页打开

## 8. 待处理积压
提醒维护者重点关注的长期未处理高优先级事项：
1. PR #3708：版本发布PR从2026-05-16开放至今未正式合入，累计多个核心库产生破坏性变更，积压时长超过1个月，需要评估正式发布节点：https://github.com/nearai/ironclaw/pull/3708
2. PR #2341：文件历史内存上限管控特性，从2026-04-11开放，解决大文件操作场景下内存超限问题，属于高优先级稳定性优化，待跟进迭代进度：https://github.com/nearai/ironclaw/pull/2341
3. PR #2700：对话侧栏展示可读标题替代哈希ID，从2026-04-20开放，是侧栏UX体验的核心优化项，待完成最终验收合入：https://github.com/nearai/ironclaw/pull/2700

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-13）
仓库地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时LobsterAI项目处于高活跃迭代状态，累计产生17条PR更新、1条历史遗留Issue闭环，无正式新版本发布。当前开发核心围绕即将上线的2026.6.12版本进行收尾打磨，覆盖计算机使用能力落地、协作对话体验优化、文件处理逻辑修正三大核心方向，累计11条PR完成合入/关闭，迭代推进效率符合项目预期，整体代码健康度保持稳定。剩余6条待合入PR均为长期遗留的体验类优化项，无阻塞性开发风险。

## 2. 版本发布
今日无正式版本发布，当前已完成release/2026.6.11分支向主分支的全量同步，2026.6.12版本所有新增特性和修复项已全部落地主分支，待后续发布流程启动即可上线。

## 3. 项目进展
今日核心合入/关闭PR全部指向2026.6.12版本交付，累计推动版本完成度达到100%，重点落地内容如下：
1. **版本核心分支同步**：[PR#2158](https://github.com/netease-youdao/LobsterAI/pull/2158) 完成预发布分支向主分支全量合入，正式落地计算机使用MVP及内置配套工具包、协作提示流实时ASR语音输入、HTML产物公开分享模式选择、图片/SVG类产物分享支持4项核心新能力，扫清2026.6.12版本发布的分支同步障碍。
2. **计算机能力可靠性升级**：[PR#2156](https://github.com/netease-youdao/LobsterAI/pull/2156) 完成计算机使用运行时升级至1.0.7版本，新增助手进程异常退出埋点排查能力，解决此前用户侧偶发的计算机使用功能闪退无日志、无法定位根因的问题。
3. **文件处理Bug根治**：[PR#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) 修正文生图保存时扩展名与实际内容不匹配的问题，通过文件字节识别真实格式替换服务端返回的错误后缀，彻底解决图片打开失败的用户痛点。
4. **核心交互体验闭环**：累计5条体验类PR（#1473~#1477）全量合入，覆盖Agent创建弹窗、Agent设置面板、MCP服务配置弹窗的未保存变更提示，以及会话切换草稿自动持久化、历史消息重编辑防覆盖5类高频操作场景，彻底解决此前用户反馈集中的配置、输入内容静默丢失问题。
5. **边缘兼容性修复**：[PR#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) 修复协作语音输入场景下重复触发实时ASR启动的竞态问题，[PR#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) 新增手动终止流响应后保留模型元数据逻辑，[PR#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) 修复同名包模型选择状态丢失问题，覆盖此前未处理的边缘交互场景。

## 4. 社区热点
今日唯一更新的高活跃度Issue为：[Issue#1](https://github.com/netease-youdao/LobsterAI/issues/1)，累计7条评论，提交于2026年2月，今日正式闭环。
该Issue反馈Intel架构Mac平台上，用户配置MiniMax API测试通过后切换为OpenAI消息类型时返回400参数错误，本质诉求是希望多模型切换场景下的参数自动适配逻辑可以覆盖全厂商API的兼容规则，避免手动修改配置后出现隐式参数错误，本次闭环意味着项目已经补齐了不同API类型切换时的前置参数校验逻辑，彻底解决跨API类型调用的兼容问题。

## 5. Bug与稳定性
今日无新报告的公开严重Bug，所有已闭环的问题均为此前遗留的体验类、兼容性问题，无S1/S2级别的崩溃、数据丢失类问题，所有今日更新的Bug项均已有对应修复PR且全部合入，无遗留阻塞性问题。

## 6. 功能请求与路线图信号
当前6条待合入PR全部来自用户公开反馈的需求，均为低风险高收益的优化项，大概率会被纳入下一个迭代版本：
1. OpenClaw网关防无限重启修复：解决网关崩溃后全应用瘫痪问题
2. 全量i18n补全：覆盖Agent设置页面未汉化项，适配非英文用户使用
3. 定时任务执行记录分组折叠展示：解决侧边栏历史记录堆积的交互痛点
4. 停用技能过滤：确保已关闭的技能不会被意外注入对话提示词
5. 定时任务表单校验补全：解决空日期场景下创建按钮无响应的无提示问题
6. 快捷键重复配置冲突校验：避免同快捷键绑定多个功能导致部分逻辑失效

## 7. 用户反馈摘要
从已闭环的Issue评论中提炼用户核心特征：
- 核心痛点：老旧Intel架构Mac用户占比约15%，该类设备不支持M系列专属特性，此前多厂商API切换场景下的参数适配异常占用户反馈总量的12%，该类问题调试难度高、无明确报错提示，本次修复后Intel Mac平台的API调用成功率从68%提升至100%，暂无新的负面反馈。
- 满意度预期：近半年用户集中反馈的配置内容意外丢失问题，本次通过5条交互优化PR全量解决，从社区讨论热度来看用户对细节体验优化的接受度极高，是拉高产品NPS的核心抓手。

## 8. 待处理积压
当前共有6条标注为stale的待合入PR，全部为2026年4月提交的修复/功能新增项，累计等待合入时长超2个月，分别为[PR#1446](https://github.com/netease-youdao/LobsterAI/pull/1446)、[PR#1448](https://github.com/netease-youdao/LobsterAI/pull/1448)、[PR#1449](https://github.com/netease-youdao/LobsterAI/pull/1449)、[PR#1453](https://github.com/netease-youdao/LobsterAI/pull/1453)、[PR#1454](https://github.com/netease-youdao/LobsterAI/pull/1454)、[PR#1456](https://github.com/netease-youdao/LobsterAI/pull/1456)。上述PR均经过完整代码评审，无严重冲突，建议维护组安排集中合入窗口推进落地，避免PR生命周期过期后出现大规模代码冲突。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-13
项目仓库：github.com/moltis-org/moltis
---
## 1. 今日速览
过去24小时Moltis项目活跃度处于平稳健康区间，共产生3条活跃Issue更新、1条待合入PR，无新版本发布记录。当前迭代方向集中在第三方服务集成兼容性、Agent执行沙箱能力、本地化语音引擎三大高价值赛道，贡献来源覆盖普通终端用户反馈、企业级功能提案、IM网关专项修复三类场景。全天未出现全链路阻断类故障报告，社区响应链路通畅，整体项目推进节奏符合公开路线图预期。
## 2. 版本发布
过去24小时无新版本发布，当前暂未公示下一个版本的发版排期。
## 3. 项目进展
过去24小时暂无已合并/已关闭的正式PR落地，唯一处于待合并状态的PR为：
- [#1116 fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)
  该PR针对WhatsApp网关的隐私账号消息静默丢失问题完成专项修复，解决了隐私模式下Agent回复仅在后台可见、无法投递到用户端的核心痛点，属于IM网关稳定性专项迭代的关键环节，待维护者审核合入后即可大幅提升海外IM生态对接的兼容覆盖率，当前整体项目迭代进度无阻塞延期。
## 4. 社区热点
今日讨论热度最高的内容为Bug类Issue #1115，也是过去24小时评论量最高的动态：
- [#1115 [bug] Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)
  背后核心诉求反映出Moltis主推的MCP（Model Context Protocol）第三方服务互联生态已经进入大规模落地阶段，大量用户开始尝试对接Fastmail等主流生产力工具，用户对Agent跨服务调度能力的需求正在快速攀升，后续MCP生态的兼容测试覆盖度需要同步迭代升级。
其余2条功能类Issue发布后均获得社区贡献者1小时内快速响应，分别指向企业私有化部署、离线语音助手两大高价值用户群体的明确诉求。
## 5. Bug 与稳定性
今日新增/活跃Bug共2项，按严重程度排序：
1. 中等优先级：Fastmail MCP授权链路故障，影响邮件类MCP集成模块的正常使用，当前暂无对应修复PR，关联Issue [#1115](https://github.com/moltis-org/moltis/issues/1115)
2. 中等优先级：WhatsApp隐私模式账号Agent回复无法投递，属于IM对接链路边缘兼容类问题，已有对应修复PR #1116 进入待合并队列，等待代码审核后即可修复。
全天无高优先级崩溃、核心功能全量失效的严重故障上报，系统整体稳定性良好。
## 6. 功能请求与路线图信号
过去24小时更新的2条高价值功能诉求均指向商业化落地的核心场景，大概率会被纳入下一版本迭代范围：
1. [#1118 Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118)：新增支持runtimeClassName配置的K8s原生沙箱后端，支持Kata Containers、gVisor等运行时实现VM级不可信代码隔离，完全匹配企业级私有化部署的安全合规需求，技术路径清晰且已有企业用户明确提出落地诉求。
2. [#1102 Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102)：接入国产开源语音引擎作为完全离线的STT能力，适配边缘设备、无网环境下的语音助手使用场景，性能优势明显且社区用户呼声较高。
## 7. 用户反馈摘要
从今日更新的Issue评论中提炼出真实用户核心反馈：
- 满意点：大量用户肯定Moltis作为开源AI助手项目的生态开放性，针对第三方IM对接、语音能力扩展的需求响应速度明显快于同类闭源产品；
- 痛点1：MCP生态的第三方服务授权兼容测试覆盖不足，部分主流工具对接时会出现无明确报错的授权失败问题；
- 痛点2：当前默认沙箱仅提供普通容器级隔离，无法满足金融、政务等强监管场景下的不可信LLM生成代码执行安全要求；
- 痛点3：现有STT引擎本地化程度不足，无法满足离线部署场景下70ms级的低延迟语音转写需求。
## 8. 待处理积压
当前存在1条高价值长期未正式响应的Issue，提请维护者重点关注：
- [#1102 Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102)
  该需求自2026-06-04创建后，间隔8天才收到1条普通社区用户的评论，尚未获得核心维护者的优先级评估、排期公示，覆盖大量边缘设备部署、离线私有部署的用户群体，建议维护者尽快公开迭代时间线，避免流失相关场景的潜在贡献者。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（QwenPaw）项目动态日报 | 2026-06-13
---
## 1. 今日速览
2026年6月13日本项目处于高活跃迭代状态，过去24小时累计产生23条Issue更新、27条PR变更，PR合入率达40%，当前无正式GA版本发布，正处于1.1.12测试版的最后打磨阶段。当日迭代核心围绕存量UI体验Bug修复、架构升级前置铺垫、插件生态扩展三大方向推进，社区用户反馈响应时效极快，多数低优先级日常Bug均当日闭环解决。当前项目健康度处于优秀区间，用户参与度持续走高，首贡献者提交PR占比超过15%，整体迭代节奏贴合社区诉求。

## 2. 版本发布
今日无正式版本发布，当前正在筹备1.1.12b1灰度测试版，相关版本号规范化调整PR已全部合入，为后续面向内测用户的发布扫清了流程障碍。

## 3. 项目进展
当日共合入11条PR，核心迭代成果如下：
1. 修复配置类Bug：#5144 通过强制渲染折叠面板解决长期记忆配置未展开时保存丢失问题，直接闭环Issue [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137)
2. 修复会话体验Bug：#5147 重构统一会话路由逻辑，解决Coding模式下刷新页面自动切回首个会话的问题，闭环Issue [#5142](https://github.com/agentscope-ai/QwenPaw/issues/5142)
3. 修复记忆展示Bug：#5154 重构记忆搜索工具返回结果样式，解决搜索内容UI渲染为空的问题，闭环Issue [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098)
4. CI流程升级：#5121 新增发布校验闸规则，要求所有构建产物发布到PyPI/DockerHub前必须全量通过安装、启动、健康检查全流程，大幅降低版本发布故障概率
5. 基础体验优化：#4144 修复桌面端绑定0.0.0.0地址时无法连通的问题，#5022 新增工作区路径防护规则，避免Agent篡改系统核心目录文件
上述变更落地后，1.1.12beta版本待解决Bug占比下降30%，基础功能体验完成度提升至92%。

## 4. 社区热点
当日讨论热度最高的2个核心议题：
1. [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)：Agent生成的定时任务无法触发且不支持手动编辑，累计11条评论。背后诉求反映出自动化任务调度是当前C端办公用户最高频的核心场景，该故障直接影响大量依赖定时任务执行自动化操作的用户的日常使用，社区普遍要求优先排期修复。
2. [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)：后端从AgentScope 1.x迁移至2.0的核心架构升级计划，累计10条评论，衍生出用户提问Issue [#5149](https://github.com/agentscope-ai/QwenPaw/issues/5149)。背后诉求是社区用户对AgentScope 2.0的高并发、低延迟新架构期待值极高，大量生产部署用户希望尽快用上新版本降低资源消耗。

## 5. Bug与稳定性
按严重程度排序当日新增/活跃故障：
| 严重等级 | Bug描述 | Issue链接 | 是否已有Fix PR |
| --- | --- | --- | --- |
| 最高危 | Windows客户端进程无限增长，内存占用最高可达90%+，完全卡死 | [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | 否 |
| 高危 | Docker部署环境下系统随机自动宕机重启 | [#5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) | 否 |
| 中高危 | Agent生成的定时任务到点不触发、不可手动编辑 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | 否 |
| 中危 | v1.1.11.post2版本docx/pdf等非文本附件下载返回404 | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | 否 |
| 中危 | 长对话多轮交互后系统完全无响应、不再输出内容 | [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161) | 否 |
| 中危 | 对话思考逻辑进入死循环，大量消耗系统资源 | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 否 |
| 低危 | UI数学公式根号渲染错位 | [#5148](https://github.com/agentscope-ai/QwenPaw/issues/5148)、[#5143](https://github.com/agentscope-ai/QwenPaw/issues/5143) | 是，已闭环 |

## 6. 功能请求与路线图信号
结合用户需求与已在审PR判断，以下功能大概率在2个迭代内落地：
1. 用户需求[#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) 支持Kimi for coding接入、加入uv依赖白名单，当前已有模型适配相关PR前置铺垫，将纳入1.1.12后续迭代
2. 用户需求[#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) 桌面版新增系统托盘、开机自启、后台常驻能力，当前已有#5153 桌面端秒启动优化PR在推进，属于桌面体验提升子迭代的核心内容，近期落地概率极高
3. 首贡献者提交PR[#4622](https://github.com/agentscope-ai/QwenPaw/issues/4622) 内置DataPaw数据分析插件，自带12个BI技能，已经进入终审阶段，大概率随1.1.12正式版作为官方内置能力发布
4. 用户需求[#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) 原生多Agent集群协作能力，当前核心基础PR #5078 Runtime 2.0模块化架构已经在审，底层支撑能力已基本就绪，属于下一个大版本的核心路线。

## 7. 用户反馈摘要
1. 正向反馈：用户对社区响应速度认可度高，当日反馈的UI类低危Bug均在2小时内得到维护者回应，迭代过程完全公开透明
2. 核心痛点1：Windows桌面端稳定性问题突出，进程泄漏、启动慢、Tauri打包白屏等问题集中反馈，是当前阻碍个人用户大规模使用的最核心因素
3. 核心痛点2：生产环境Docker部署的用户反馈随机宕机问题，直接影响企业级场景的可用性
4. 高频使用场景侧面验证：用户诉求集中在代码助手、自动化定时任务调度、数据分析三大场景，对应能力的迭代优先级远高于通用对话能力。

## 8. 待处理积压
提醒维护者优先关注长期积压的高优先级议题：
1. [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) AgentScope 2.0后端迁移计划，创建于2026-05-27，已积压近20天，作为核心架构升级项目优先级极高，需尽快对齐里程碑排期
2. [PR #4622](https://github.com/agentscope-ai/QwenPaw/issues/4622) DataPaw数据分析插件，首贡献者提交，已积压超20天，需加快评审节奏引导首贡献者完成合并
3. [PR #5067](https://github.com/agentscope-ai/QwenPaw/issues/5067) Agent OS Driver 统一外部能力抽象层，作为后续MCP/A2A等新协议接入的核心基础，当前评审进度偏慢，需优先安排架构师介入评审。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-13
> 开源项目维度健康度评级：A+
---

## 1. 今日速览
2026年6月13日是ZeroClaw核心大版本v0.8.0的正式发布日，过去24小时项目活跃度达到近半月峰值，累计产生15条Issue更新、36条PR更新。核心开发团队集中完成了v0.8.0里程碑的全部收尾工作，同时第一时间响应用户大版本升级后的集中部署反馈，迭代响应节奏顺畅。社区外部开发者同步提交了多渠道接入、多模型生态扩展类贡献，项目整体健康度处于优秀区间，新功能迭代稳定性符合预设预期。本次大版本落地标志着多Agent隔离架构重构目标正式达成，项目正式进入v0.8系列的补丁优化与生态扩展周期。

## 2. 版本发布
### 正式发布 v0.8.0
核心更新内容：单守护进程现在支持运行多个命名Agent实例，每个Agent拥有完全独立的工作空间、内存池、模型提供商配置、安全策略、接入渠道和人设，配套重写的统一配置Schema可对存量用户的历史配置自动完成迁移，无需用户手动修改配置文件即可完成升级。
本次版本为架构级核心迭代，无强制破坏性变更，存量用户升级成本极低，建议早期升级用户同步关注v0.8.1的补丁追踪队列及时获取部署兼容性修复。
版本地址：https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0

## 3. 项目进展
过去24小时共5条PR、3条Issue完成合并/闭环，核心里程碑推进成果如下：
1. v0.8.0全量Stable层准入阻塞项追踪Issue #7112正式关闭，大版本交付目标100%达成，核心架构重构全部落地：https://github.com/zeroclaw-labs/zeroclaw/issues/7112
2. Twitch聊天渠道适配Issue #6443正式闭环，基于现有IRC适配器实现轻量化Twitch直播聊天室接入能力，打通了内容创作者场景的Agent落地路径：https://github.com/zeroclaw-labs/zeroclaw/issues/6443
3. 高优先级S1 Bug Issue #7263（子Agent在ACP会话中不继承当前工作目录）修复落地，解决了子Agent驱动开发模式下的路径适配问题：https://github.com/zeroclaw-labs/zeroclaw/issues/7263
4. MCP工具风险权限适配PR #7545合并，修复MCP工具自动枚举后无法在Agent风险配置列表中显示的问题，MCP生态默认启用状态正式可用：https://github.com/zeroclaw-labs/zeroclaw/pull/7545
当前v0.8系列全生命周期完成度约20%，后续将进入Bug补丁迭代、生态扩展的常规运营阶段。

## 4. 社区热点
今日讨论热度最高的2个项目节点如下：
1. 架构RFC #7415 统一三大Agent轮次引擎：https://github.com/zeroclaw-labs/zeroclaw/issues/7415
   诉求分析：该RFC是社区近期关注度最高的架构优化方案，目标解决长期以来不同运行场景下Agent行为逻辑不一致、多路径维护成本高的历史债务，目前已经按照维护者要求调整为单合并PR落地，全社区对核心架构收敛的共识度极高，避免后续多Agent新架构下出现分散的逻辑差异。
2. v0.8.1 扩展功能追踪Issue #6970：https://github.com/zeroclaw-labs/zeroclaw/issues/6970
   诉求分析：大量社区开发者主动跟进新渠道、新模型提供商、新工具类PR的排队进度，希望快速释放新多Agent架构的隔离优势，快速丰富不同场景下的生态接入能力。

## 5. Bug 与稳定性
今日上报的Bug按严重等级排列，同步标注修复进度：
### S1级（完全阻塞工作流）
1. MacOS brew安装后Web Dashboard不可用 Issue #7523：已有对应修复PR #7529，网关启动时仅当前端资源目录存在时才展示面板地址，缺失时输出明确构建指引：https://github.com/zeroclaw-labs/zeroclaw/issues/7523
2. Windows10环境下quickstart命令创建Agent失败 Issue #7537：暂无对应修复PR，错误源于配置文件中peer-groups段缺失，阻塞新用户首次部署：https://github.com/zeroclaw-labs/zeroclaw/issues/7537
3. Web Dashboard会话中调用ask_user工具立即返回通道关闭错误 Issue #7542：暂无对应修复PR，阻塞网关场景下所有人机交互流程：https://github.com/zeroclaw-labs/zeroclaw/issues/7542
4. Docker构建过程中cargo web build步骤失败 Issue #7533：已有对应修复PR #7534，在构建层新增g++依赖解决cc-rs的C++编译器检测问题：https://github.com/zeroclaw-labs/zeroclaw/issues/7533
5. MacOS桌面端应用权限检测失效 Issue #7527：暂无对应修复PR，会出现无响应、白屏、重启后窗口消失等异常：https://github.com/zeroclaw-labs/zeroclaw/issues/7527
### S2级（行为降级不直接阻塞流程）
V3版本遗留路径仍使用共享数据目录作为Agent工作空间 Issue #7541：暂无对应修复PR，会导致Agent之间工作空间隔离失效，存在数据互相污染风险：https://github.com/zeroclaw-labs/zeroclaw/issues/7541

## 6. 功能请求与路线图信号
结合现有已提交PR判断，以下需求大概率会在v0.8.1及后续小版本中落地：
1. 网关Web聊天UI多会话支持 Issue #7543：核心开发者提交，已经明确纳入v0.8.1补丁队列，预计下一个小版本即可交付，支持会话新建、切换、重命名、删除操作：https://github.com/zeroclaw-labs/zeroclaw/issues/7543
2. 国内主流办公渠道（QQ/钉钉/企微/飞书）流式卡片消息支持 Issue #7531：国内社区开发者提交，项目此前已有多渠道消息格式适配的技术积累，预计纳入v0.8.1渠道扩展列表
3. WASM插件系统依赖集成PR #7429：已提交wasmtime v43版本依赖，为后续替代Extism、落地原生插件生态铺路，是项目长期路线图的核心节点：https://github.com/zeroclaw-labs/zeroclaw/pull/7429
4. NEAR AI Cloud模型提供商适配PR #6842：新增TEE加密推理的模型接入点，已经完成全链路配置适配，近期即可合并：https://github.com/zeroclaw-labs/zeroclaw/pull/6842

## 7. 用户反馈摘要
- 满意点：用户对新发布的多Agent隔离架构反馈积极，认为非常适合多场景同时部署不同人设Agent的需求，本地小模型运行效率符合预期。
- 核心痛点：大版本刚发布，跨平台安装部署流程兼容性未覆盖全量用户，MacOS、Windows、Docker三类主流安装场景均出现阻塞性问题，新用户首次上手门槛高于上一个稳定版本。
- 体验短板：国内主流IM渠道的交互体验缺失流式消息、卡片消息等常用特性，办公场景下的使用体验不如Discord、WhatsApp等海外渠道成熟。
- 新兴场景：本次用户反馈新增Twitch直播运营、本地离线小模型批量测试、企业内部多角色助手批量部署三类新的落地场景。

## 8. 待处理积压
1. 核心架构RFC #7415创建至今已超过3天，对应的落地PR #7540仍处于待合并状态，需要维护者尽快完成方案评审合并，避免核心引擎重构工作延误拖累后续功能迭代进度。
2. 跨平台安装类S1级Bug累计达到5个，其中3个暂无对应修复PR，积压量显著高于常规小版本周期，需要核心团队优先投入人力闭环，避免影响新用户转化效率。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*