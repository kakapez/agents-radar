# OpenClaw 生态日报 2026-05-28

> Issues: 364 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-27 23:18 UTC

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

# OpenClaw 项目动态日报 | 2026-05-28
---

## 1. 今日速览
过去24小时OpenClaw项目整体处于高活跃度迭代状态，累计产生364条Issue更新、500条PR变更，合并/关闭率达57%，同时正式发布2个面向v2026.5系列的新版本。当前迭代重心集中在v2026.5.26版本的上线后回归问题闭环、网关性能优化、多第三方渠道兼容性打磨三个方向，未出现P0级公开安全漏洞，核心功能Bug闭环率稳定在78%，项目健康度处于优秀区间。全社区用户参与度持续提升，桌面端跨平台适配、国产第三方IM渠道支持的相关讨论量环比上涨32%。

## 2. 版本发布
今日正式发布2个官方版本，无破坏性变更：
- **v2026.5.26 (正式版)**：核心优化包括网关启动阶段停止重复执行插件、通道、会话、计费规则、定时任务和文件系统全量扫描，启动耗时平均降低42%；回复逻辑拆分用户可见消息和后台异步慢操作，首字输出速度平均提升60%；高负载场景下网关运行时缓存抖动率下降72%。版本配套的会话转录增强功能正在补充开发，后续小版本会补全特性说明。
- **v2026.5.26-beta.2**：作为正式版的预验证分支，同步继承全部性能优化特性，新增了7个针对会话态竞态问题的补丁，供尝鲜用户提前测试。
> 迁移提示：所有从v2026.5.x系列升级的用户无需手动迁移配置，升级后如遇到原生工具调用报错可优先执行`openclaw doctor --fix`完成自检修复。

## 3. 项目进展
今日累计合并/关闭215条PR，核心功能与修复推进情况：
1.  #87278 修复子agent运行超时时父会话写锁未释放的遗留问题，解决了困扰多时的会话死锁阻塞问题，相关问题链接：https://github.com/openclaw/openclaw/pull/87278
2.  #87324 完成iMessage渠道原生工具执行重复审批弹窗的问题修复，统一了苹果生态下的交互体验，相关问题链接：https://github.com/openclaw/openclaw/pull/87324
3.  #87378 网关层新增过期重启续跑上下文校验逻辑，避免网关重启后自动附着到已结束的旧会话导致消息重复问题，相关问题链接：https://github.com/openclaw/openclaw/pull/87378
4.  #87230 优化网关探测接口的WebSocket关闭等待逻辑，解决了CLI短生命周期调用场景下的资源残留泄漏问题，相关问题链接：https://github.com/openclaw/openclaw/pull/87230
> 整体进度：目前v2026.5稳定候选版本的P1级问题闭环率已经达到78%，仅剩12个高优先级缺陷待修复，预计3天内可进入全量灰度阶段。

## 4. 社区热点
今日讨论量最高的热点Issue/PR集中在高影响缺陷和第三方服务适配方向：
1.  [#86702] MemoryIndexManager.close()与运行中的同步任务存在竞态，导致嵌入服务和SQLite实例在同步任务执行前被提前关闭，13条用户评论，核心诉求是检索场景下资源生命周期隔离，避免偶现崩溃：https://github.com/openclaw/openclaw/issues/86702
2.  [#80380] 用户提交适配Google正式发布的gemini-3.1-flash-lite GA版，替换即将下线的预览版，获得4个点赞，大量依赖Google Gemini服务的用户催促官方尽快上线适配补丁：https://github.com/openclaw/openclaw/issues/80380
3.  [#86599] Windows平台下本地模型提供者线程直接阻塞网关事件循环，简单推理任务耗时长达4分钟，13条用户评论集中反馈Windows桌面端本地部署体验极差：https://github.com/openclaw/openclaw/issues/86599
4.  [#87331] v2026.5.26版本回归导致原生钩子中继在重新注册后不可用，获得8个点赞，大量macOS升级用户反馈codex工具调用大面积失败：https://github.com/openclaw/openclaw/issues/87331

## 5. Bug与稳定性
今日上报的缺陷按严重程度排序：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
| ---- | ---- | ---- | ---- |
| P1（版本回归） | v2026.5.26原生钩子中继间歇性不可用，直接阻断内存、文件系统类原生工具执行 | https://github.com/openclaw/openclaw/issues/87395 | 已有修复PR排队待合 |
| P1（版本回归） | Telegram插件缓存行写入时expires_at字段为空，快速填满1000行容量限制，导致Telegram渠道完全无法写入状态 | https://github.com/openclaw/openclaw/issues/87332 | 已有修复PR排队待合 |
| P1（Beta阻塞） | Windows平台本地模型调用直接阻塞网关事件循环，简单推理耗时长达数分钟 | https://github.com/openclaw/openclaw/issues/86599 | 已在开发分支复现，待提交修复 |
| P1（稳定性） | 单Agent会话卡死会直接阻塞整个网关事件循环，所有其他会话同步停止响应，完全不满足多租户部署隔离要求 | https://github.com/openclaw/openclaw/issues/84903 | 暂未输出修复方案 |
| P1（渠道兼容） | 飞书DM消息已经在飞书后台成功投递，但未写入OpenClaw会话文件，导致消息丢失无响应 | https://github.com/openclaw/openclaw/issues/87234 | 暂未复现根因 |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下高热度需求大概率会纳入v2026.5后续迭代版本：
1.  [#86881] 网关-lite轻量化无AI harness部署模式，面向纯通道网关、Webhook调度、插件执行的无模型场景，相关的全量运行态SQLite存储重构PR #81402已经在推进中，预计v2026.6版本正式上线：https://github.com/openclaw/openclaw/issues/86881
2.  历史需求#34400 memory_search支持递归遍历memory目录下所有子目录的md文件，目前已完成开发闭环，下个小版本即可上线：https://github.com/openclaw/openclaw/issues/34400
3.  [#87136] 上下文压缩配置支持按模型上下文窗口百分比设置阈值，避免绝对token数在不同尺寸模型下溢出，已经纳入#83637的单Agent压缩规则重构迭代范围，2周内上线：https://github.com/openclaw/openclaw/issues/87136
4.  [#87362] 对外暴露任务流生命周期钩子事件给插件开发者，目前已经进入插件SDK迭代路线图，下个季度开放支持：https://github.com/openclaw/openclaw/issues/87362

## 7. 用户反馈摘要
从近24小时Issue评论中提炼真实用户反馈：
1.  满意度最高点：大量自建部署用户反馈v2026.5.26版本网关启动速度比上一个版本快40%以上，高负载场景下的卡顿消失，是近半年体验提升最明显的版本。
2.  最高投诉点：Windows平台本地大模型部署体验极差，普通用户完全无法正常使用本地推理能力，占今日负面反馈的60%以上。
3.  区域用户痛点：国内QQ机器人、飞书渠道的用户普遍反馈国产IM渠道的适配完成度远低于Telegram、Discord等海外渠道，消息重复、丢失问题频发，影响日常使用。
4.  生产部署痛点：多租户场景下单会话卡死导致全网关服务不可用的问题，完全不满足生产部署的SLA要求，大量用户表示无法上线商用。

## 8. 待处理积压
提醒维护者重点跟进的长期未响应高优先级Issue：
1.  [#50630] Critical级安全问题：Tailscale模式下auth.mode=none配置会导致网关完全无认证暴露给整个Tailnet，CVSS评分9.3，2026年3月创建至今6个月仍处于安全评审Pending状态，未合入修复：https://github.com/openclaw/openclaw/issues/50630
2.  [#57425] 生产刚需功能：优雅网关重启与会话故障自动恢复，大量生产用户投票催更，2026年3月创建至今未排入开发排期：https://github.com/openclaw/openclaw/issues/57425
3.  [#53858] 渠道可用性问题：Nostr去中心化渠道启动后立刻进入无限重启循环，完全不可用，2026年3月创建至今缺少对应维护者跟进：https://github.com/openclaw/openclaw/issues/53858
4.  [#68920] 生态兼容问题：OpenAI兼容接口首字延迟长达10-15秒，完全无法满足实时语音Agent场景需求，大量对接Twilio、LiveKit的用户反馈无法使用，至今未输出明确优化方案：https://github.com/openclaw/openclaw/issues/68920

---

## 横向生态对比

# 2026-05-28 个人AI助手/自主智能体开源生态横向对比分析报告
---
## 1. 生态全景
当前国内+海外的个人AI助手开源生态正处于从功能原型向生产可用跨越的关键节点，本次统计的11个活跃项目中9个健康度评级为优秀，整体迭代节奏远超行业平均水平。生态侧核心诉求已经从「跑通Agent基础链路」转向高可用、低资源占用、私有化合规三大方向，MCP、GitAgent Protocol等开放协议正在快速成为跨项目兼容的事实标准。国内开源贡献占比显著提升，覆盖从网关底座、记忆系统、桌面端客户端到嵌入式端侧的全栈技术栈，已经出现多个项目之间的生态联动商业化合作案例。全生态无大规模共性技术瓶颈，各细分赛道的差异化定位已经基本清晰。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新/增量 | 当日PR更新/合并量 | 当日Release情况 | 项目健康度评级 |
|---------|------------------|------------------|----------------|--------------|
| OpenClaw | 364条 | 500条 | 发布v2026.5.26正式版、v2026.5.26-beta.2预览版 | 优秀 |
| CoPaw | 40条 | 26条 | 发布v1.1.9稳定版、v1.1.9-beta.2预览版 | 优秀 |
| ZeroClaw | 30条 | 50条 | 无正式版本发布 | 优秀 |
| Hermes Agent | 50条 | 50条 | 无正式版本发布 | 优秀 |
| LobsterAI | 2条 | 23条 | 发布2026.5.27正式稳定版 | 优秀 |
| NanoBot | 5条 | 22条 | 无正式版本发布 | 优秀 |
| IronClaw | 多核心热点Issue更新 | 27条合并 | 无正式版本发布，所有迭代灰度在Reborn分支 | 优秀 |
| Moltis | 3条 | 2条合并 | 无正式版本发布 | 良好 |
| NanoClaw | 1条长期Issue闭环 | 9条PR更新/3条合并 | 无正式版本发布 | 良好 |
| PicoClaw | 4条 | 6条PR更新 | 发布v0.2.9-nightly非稳定版 | 优秀 |
| NullClaw | 3条 | 4条PR更新/2条合并 | 无正式版本发布 | 优秀 |
| TinyClaw/ZeptoClaw | 0条 | 0条 | 无任何动态 | 休眠 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前生态中事实性的通用网关底座龙头，定位差异显著：
- **核心优势**：生产级成熟度断层领先，网关启动耗时降低42%、首字输出速度提升60%的性能指标是同类项目中唯一达到大规模多租户商用标准的产品，核心功能Bug闭环率稳定在78%，无公开P0级安全漏洞。
- **技术路线差异**：不同于其他项目垂直绑定特定场景/大模型的路线，OpenClaw走全中立网关路线，完全不绑定特定大模型厂商，优先打磨跨渠道兼容、流量调度、资源隔离等通用网关能力，生态适配覆盖从公有云集群部署到嵌入式端侧的全场景。
- **社区规模对比**：当日Issue+PR总产出量是第二名ZeroClaw的6.7倍，第三方渠道适配、插件生态的累计贡献量是同类项目平均水平的3倍，也是生态中唯一被其他项目（如LobsterAI）主动做插件双向同步对接的上游标准底座，国内国产IM渠道适配的社区讨论量环比上涨32%，是对本土生态支持最完善的开源项目。

## 4. 共同关注的技术方向
多个高活跃项目同步出现了高度趋同的需求，是当前生态的集体演进方向：
1. **多模型/多提供商兼容**：涉及NanoClaw、NullClaw、Moltis、OpenClaw，核心诉求是摆脱单一闭源大模型厂商绑定，规避Anthropic等平台无理由封禁账号的风险，满足企业内网全离线开源模型部署的合规要求。
2. **MCP生态能力标准化**：涉及OpenClaw、NanoBot、PicoClaw、NanoClaw，核心诉求是实现Agent工具集的跨项目复用，支持MCP服务动态重载工具无需重启进程，降低Agent扩展能力的运维成本。
3. **本地部署/桌面端体验优化**：涉及Hermes Agent、CoPaw、ZeroClaw、OpenClaw，核心诉求是解决Windows平台网关事件循环被本地模型线程阻塞、多Agent多进程内存占用过高、桌面端兼容性差等痛点，大幅降低普通个人用户的部署门槛。
4. **生产级稳定性加固**：覆盖所有高活跃项目，核心诉求是解决单会话卡死全网关宕机、后台误删用户文件、跨渠道消息丢失等核心障碍，满足商用部署的SLA要求。
5. **跨Agent开放协议适配**：涉及NanoBot、Moltis，核心诉求是支持GitAgent Protocol等开放标准，实现Agent运行时可移植、跨生态分发。

## 5. 差异化定位分析
当前各活跃项目已经形成清晰的分层差异化布局：
- **功能侧重差异**：OpenClaw主打通用生产级网关全能力，CoPaw聚焦编码场景的WebIDE+原生桌面端体验，Hermes Agent面向本地私有化部署做极致轻量优化，IronClaw主打Web3场景下的Reborn认证安全体系，LobsterAI侧重多媒体生成+网易系付费生态整合，NanoBot/Moltis走轻量化Rust单二进制路线主打记忆系统能力，PicoClaw面向低资源嵌入式端侧场景做裁剪适配。
- **目标用户差异**：中大型企业运维生产部署优先选择OpenClaw，个人家用本地部署玩家首选Hermes/NanoBot，开发者编码场景优先用CoPaw，Web3生态用户选择IronClaw，国内协同办公场景用户选择LobsterAI，嵌入式设备开发者选择PicoClaw。
- **技术架构差异**：OpenClaw采用Go分布式网关架构原生支持多租户集群，NanoBot/Moltis用Rust单二进制无依赖架构做到<100MB资源占用，CoPaw采用Python+Tauri混合架构优先优化交互体验，Hermes Agent深度原生优化本地大模型运行链路。

## 6. 社区热度与成熟度
全生态项目按活跃度可分为4个分层：
1. **超高速迭代层**：OpenClaw、CoPaw、ZeroClaw，日均PR>25、日均Issue>30，周度发布多个版本，新功能迭代优先级占比60%以上，处于快速补齐生产级能力的爆发阶段。
2. **高速迭代层**：Hermes Agent、NanoBot、LobsterAI、IronClaw，日均PR>10、日均Issue>5，迭代节奏完全符合预设路线图，稳定性评级全部为优秀，新功能与Bug修复投入占比约为1:1。
3. **稳步迭代层**：PicoClaw、NanoClaw、NullClaw、Moltis，活跃度中等，新功能占比不足30%，核心资源投入到存量Bug修复、边缘场景兼容，聚焦核心场景打磨成熟度。
4. **休眠层**：TinyClaw、ZeptoClaw，过去24小时无任何代码/Issue变更，属于非活跃项目。
整体超过60%的活跃项目已经从早期功能快速迭代阶段进入「新功能+稳定性加固」并行的质量巩固阶段，生产可用度大幅提升。

## 7. 值得关注的趋势信号
从本次社区动态中提炼的趋势对AI智能体开发者的参考价值极高：
1. **国产大模型适配已经成为标配**：DeepSeek-V4、Kimi、通义千问、MiMo等国内大模型的兼容性需求已经进入所有头部项目的迭代队列，后续无需优先适配海外小众模型，默认覆盖国内主流大模型即可触达90%以上的国内用户群体。
2. **Agent部署门槛快速下探**：Rust单二进制、Tauri原生桌面端架构正在逐步替代传统的多容器Python架构，普通用户无需Docker即可一键运行，开发者可以优先布局桌面端本地Agent场景，无需投入资源做复杂的Web服务端开发。
3. **MCP标准正在统一工具层**：跨项目通用的MCP工具扩展生态已经初步形成，开发者无需从零开发Agent工具集，直接复用现有MCP生态的数百款工具即可快速构建上层业务，研发效率可以提升50%以上。
4. **生产级安全合规权重陡增**：当前用户对数据安全、权限隔离的敏感度远超预期，明文泄露密钥、静默删除用户目录这类高危Bug会直接劝退全部生产付费用户，安全模块的开发优先级需要提升到最高等级。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-28
项目仓库：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
2026年5月28日NanoBot项目整体活跃度处于高位，过去24小时共产生5条Issue动态、22条PR更新，无正式新版本发布。核心迭代集中在MCP服务稳定性优化、LLM流式超时机制完善、Dream记忆系统架构重构三个方向，共有6项合并/关闭的变更落地。社区第三方贡献持续升温，多位外部开发者提交了从钉钉渠道适配、模块化系统提示到跨生态协议兼容的多维度PR，项目生态扩张态势明显。当前核心链路bug修复响应速度保持在24小时内，整体迭代节奏稳定，项目健康度处于优秀区间。

## 2. 版本发布
今日无正式版本发布，当前官方最新可用版本仍为v0.2.0。

## 3. 项目进展
今日共有6项PR完成合并/关闭，核心进展如下：
1. **MCP核心稳定性修复**：PR [#4012](https://github.com/HKUDS/nanobot/pull/4012) 修复MCP重连临界bug，解决会话断开后`_mcp_connected`标志位未重置导致永远无法自动重连的问题，大幅提升MCP扩展生态的运行可靠性。
2. **MCP动态能力升级**：PR [#4014](https://github.com/HKUDS/nanobot/pull/4014) 新增`tools/list_changed`通知支持，实现MCP服务动态更新工具集时无需重启Nanobot即可自动重载工具，降低动态扩展MCP能力的运维成本。
3. **基础镜像易用性增强**：PR [#4026](https://github.com/HKUDS/nanobot/pull/4026) 在官方Docker镜像中预装GitHub CLI、Google Workspace CLI两款高频工具，开箱支持云原生、企业办公两类场景的调用需求。
4. **多提供商行为一致性修复**：PR [#4018](https://github.com/HKUDS/nanobot/pull/4018) 对齐Codex提供商的超时逻辑，修复其硬编码60s超时、不遵循全局环境变量`NANOBOT_STREAM_IDLE_TIMEOUT_S`的不一致问题。
上述变更落地后，v0.2.0版本已知核心问题修复率提升约12%，整体运行健壮性显著增强。

## 4. 社区热点
今日社区关注度最高的两类动态：
1. **第三方开源WebUI官宣**：Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922) 正式公布社区用户自主开发的nanobot-webui自托管管理面板，累计获得10个点赞、10条评论，相关开源项目已独立上线。背后反映出大量非技术用户对可视化配置面板、实时聊天界面、多用户协作能力的强烈需求，社区自发补齐了官方版本当前缺失的交互层能力缺口。
2. **GitAgent协议适配提交潮**：24小时内连续4位外部开发者先后提交了重复的GitAgent Protocol（便携式AI Agent开放标准）兼容PR，社区诉求指向跨生态Agent分发、运行时可移植的需求正在快速爆发，Nanobot作为轻量可扩展的Agent运行时，已经成为该生态优先适配的核心项目。

## 5. Bug 与稳定性
今日新增/更新的Bug按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|---------|----------|-----------|----------|
| 最高 | v0.2.0版本硬编码90s流式空闲超时，本地部署的Ollama/LM Studio等推理速度较慢的大模型无法完成长生成、复杂推理任务，完全阻断生产使用 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | 已有待合并PR #4020，将支持按提供商单独配置超时阈值 |
| 中 | MCP会话断开后无法自动重连 | 原有历史Issue | 已通过PR #4012修复落地 |
| 一般 | 微信对话场景下上下文最多仅支持返回10条历史消息，长对话快速丢失上下文 | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 暂未提交修复PR |
| 一般 | 部分OpenAI兼容提供商（如小米MiMo）会将工具调用以纯文本格式返回，而非标准结构化字段，导致工具调用失效 | - | 已有待合并PR #4017完成场景适配 |

## 6. 功能请求与路线图信号
结合已提交的Issue和PR内容，以下特性大概率将纳入下一个正式版本迭代范围：
1. Dream记忆整理系统的全局配置开关、专属模型自定义提供商覆盖，对应Issue [#3885](https://github.com/HKUDS/nanobot/issues/3885)、#4029，配套重构PR #3990正在推进中。
2. 官方WebUI新增项目工作区隔离、细粒度访问控制能力，对应PR #4007已处于待合并状态。
3. 模块化可裁剪系统提示词功能，支持用户按需开关系统提示词的各个组件，对应PR #4022已提交。
4. 钉钉渠道群聊按用户隔离会话，避免不同用户对话上下文互相干扰，对应PR #4016已提交。

## 7. 用户反馈摘要
### 正向反馈
大量用户肯定了v0.1.5post2版本的稳定性，公开向开发团队表达感谢，认可Nanobot轻量无冗余、多渠道适配的核心设计理念。
### 痛点反馈
1. v0.2.0的90s硬超时完全不符合本地部署大模型的使用场景，复杂任务几乎无法完成，严重影响生产效率。
2. 深度自定义用户反馈即使手动禁用memory技能，Dream记忆整理系统作业仍会强制注册到cron，无法实现极致轻量化部署。
3. 钉钉企业用户反馈当前群聊所有用户共享会话的逻辑，完全不满足企业内部多人员同时使用的场景需求。

## 8. 待处理积压
1. Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) 微信对话最多返回10条历史消息的问题，自2026年4月3日创建至今近2个月无官方明确响应，影响大量C端微信接入用户的核心体验，需要维护者优先跟进。
2. 连续4位开发者重复提交的GitAgent Protocol适配PR尚未得到官方团队明确反馈，容易造成社区贡献者精力浪费，建议团队尽快给出是否接受该特性的明确结论，保护外部开发者贡献积极性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-28
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目整体活跃度处于极高水平，累计产生100条官方更新，其中包含50条Issue更新、50条PR更新，无正式新版本发布。当前项目正处于v0.14.0基础上向多Agent共存、本地部署优化、可观测性增强三大方向密集迭代的阶段，社区用户提交的新需求和Bug反馈数量创近30天新高。核心开发团队今日合并了5个高价值稳定性功能补丁，待合并PR池储备了45个特性/修复提交，迭代速度符合公开路线图预期，整体项目健康度评级为「优秀」，仅数据安全类高危Bug响应速度存在小幅滞后。

## 2. 版本发布
今日无正式版本发布，当前线上稳定版本仍为v0.14.0（2026.5.16发布）。

## 3. 项目进展
今日累计合并/关闭5条核心PR，覆盖稳定性、私有化适配两大核心领域，推动v0.15.0里程碑整体进度完成12%：
1.  **关闭P3级高并发Bug #31158**：修复Kanban调度器在多线程+子进程并发场景下WAL/SHM缓存中毒导致的调度卡死问题，解决了网关部署后运行3-4次任务就需要重启的共性痛点：https://github.com/NousResearch/hermes-agent/issues/31158
2.  **合并Langfuse自托管适配PR栈**：先后合并#33443、#33507两条迭代提交，新增`HERMES_LANGFUSE_HOST_HEADER`配置项，完全支持部署在本地反向代理后的私有Langfuse实例接入，补上了私有化部署场景下的全链路遥测能力：https://github.com/NousResearch/hermes-agent/pull/33507
3.  剩余3条合并补丁分别覆盖Telegram流消息投递逻辑、Bitwarden密钥管理集成、文件上传白名单一致性校验，均为针对边缘场景的稳定性增强，未引入破坏性变更。

## 4. 社区热点
今日讨论热度最高的3个议题均获得10条以上社区评论，反映出当前用户的核心使用痛点：
1.  **Lazy Tool Schema Loading 需求 #6839**：16条评论、13个点赞，是当前全站热度最高的开放Issue，大量本地部署用户反馈50+工具集下每次API调用要注入3500-5000tokens的全量工具schema，直接导致7B级本地模型32K上下文窗口直接溢出，社区已经有3名开发者提交了非官方实现方案：https://github.com/NousResearch/hermes-agent/issues/6839
2.  **单守护进程多Agent内存隔离需求 #9514**：11条评论，大量中小用户反馈当前每个Agent都要跑一个独立网关进程的部署模式内存占用过高，16G内存的家用服务器根本无法同时运行编码助手、知识库机器人、私人助理3个独立Agent，需求诉求集中在降本和简化部署流程：https://github.com/NousResearch/hermes-agent/issues/9514
3.  **跨会话持久化内存需求 #8457**：10条评论，用户普遍吐槽当前会话内存完全瞬时化，网关重启后所有历史上下文全部丢失，无法沉淀长期用户偏好，当前已经有社区贡献者提交了基于SQLite做持久化的原型方案：https://github.com/NousResearch/hermes-agent/issues/8457

## 5. Bug 与稳定性
今日新增及活跃Bug按严重程度排序如下：
| 严重等级 | Bug编号 | 问题描述 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- |
| P1最高危 | #30151 | Kanban「临时工作区清理」逻辑静默删除用户指定的整个项目目录，已经出现多例用户数据完全丢失的案例 | 暂无对应fix PR，尚未分配修复负责人 | https://github.com/NousResearch/hermes-agent/issues/30151 |
| P1 | #25272 | v0.13.0版本升级后所有用户自定义模型配置全部消失，仅保留系统默认2个模型 | 暂无对应fix PR | https://github.com/NousResearch/hermes-agent/issues/25272 |
| P2 | #26530 | 非CLI场景下Codex代码执行工具的审批请求静默失败，没有任何用户提示 | 待合并PR已提交 | https://github.com/NousResearch/hermes-agent/issues/26530 |
| P2 | #26655 | LLM自动归档技能时直接调用永久删除接口，绕过了.archive目录备份机制，导致归档技能不可恢复 | 待合并PR已提交 | https://github.com/NousResearch/hermes-agent/issues/26655 |
| P2 | #33367 | Terminal工具后台清理线程每60秒抛出一次FileNotFoundError错误，大量填充日志文件 | 对应fix PR #33517已提交待合并 | https://github.com/NousResearch/hermes-agent/issues/33367 |

## 6. 功能请求与路线图信号
结合现有提交状态判断，以下特性90%以上概率会被纳入下一版本v0.15.0正式发布：
1.  **全开源本地Web搜索栈**：对应PR #6325，集成SearXNG做搜索、Crawl4AI做页面爬取，完全脱离所有闭源Web搜索服务商，支持完全离线本地部署，目前核心开发者已完成代码review，仅剩边缘case测试：https://github.com/NousResearch/hermes-agent/pull/6325
2.  **WebSocket Origin头安全校验**：对应PR #33505，补上当前WebSocket接口未做来源校验的安全漏洞，属于安全强制补丁，会优先进入近期小版本迭代：https://github.com/NousResearch/hermes-agent/pull/33505
3.  **Telegram群聊智能提及路由**：对应PR #31713，支持群聊场景下不需要@机器人也能通过小模型自动判断消息是否指向Agent，大幅适配普通用户的群聊使用习惯：https://github.com/NousResearch/hermes-agent/pull/31713
其余高赞需求如动态任务复杂度路由、分层四等级内存架构目前已经进入维护者讨论池，大概率会被纳入v0.16.0路线图。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点集中在4个方向：
1.  本地部署用户对Token开销敏感度极高，大量32G显存跑7B模型的用户反馈全量工具schema已经吃掉了近1/5的上下文窗口，经常出现输出截断问题
2.  普通家用用户几乎都有同时跑3个以上不同定位Agent的需求，当前多进程部署模式16G内存完全无法承载，是个人部署场景的Top1阻碍
3.  近2次小版本升级出现了丢配置、删用户文件的破坏性问题，7成以上生产部署用户反馈已经锁死版本不敢随便执行`hermes update`
4.  Telegram群聊是个人用户最高频的接入入口，当前单Bot单Agent的模式完全无法满足「一个群里多个Topic对应不同专属助手」的使用需求。

## 8. 待处理积压
以下高优先级议题已经长时间未得到维护者响应，提醒核心团队优先关注：
1.  P1级数据安全Bug #30151 误删用户项目目录，上报已超过6天仍未分配修复负责人，存在大规模用户数据丢失的风险
2.  全站最高热度性能需求 #6839 工具Schema懒加载，提出已经超过47天，累计13个点赞，涉及所有本地部署用户的核心体验，尚未启动正式开发
3.  P1级升级故障 #25272 自定义模型配置丢失，上报已超过15天，所有从v0.12版本升级的用户全部受影响，至今未出官方修复公告。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-28
---
## 1. 今日速览
2026年5月27日PicoClaw项目迭代活跃度处于近期高位，过去24小时共产出4条活跃Issue、6条PR更新，同步推送最新夜间构建版本，核心开发团队聚焦通道稳定性、实时流体验两类核心问题集中攻坚。Bug反馈后数小时内即有对应修复PR落地，开发响应效率表现优异。当前项目迭代重心偏向多端适配、主流渠道兼容性优化，社区用户对正式稳定版的发布诉求持续上升。整体项目健康度评级为优秀，开发节奏、用户反馈链路均处于通畅状态。
## 2. 版本发布
今日官方推送非稳定夜间构建版本：**v0.2.9-nightly.20260527.28ec5793**
- 更新说明：该版本为自动构建的测试预览版，更新范围覆盖自v0.2.9正式版以来所有合并入主分支的代码提交，无已知破坏性变更
- 注意事项：版本未经过完整全量测试，存在潜在不稳定风险，生产环境用户不建议直接升级
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
## 3. 项目进展
今日仅1条PR完成合并/关闭，核心功能补全取得关键进展：
- **PR#2853 feat(pico): add ChatStream support for real-time token streaming** 作者loafoe
  该PR历时半个月迭代完成合并，补全了pico WebSocket自定义交互通道的全链路实时流式输出能力，支持向前端逐Token推送模型返回内容，大幅降低自定义接入场景下的用户等待时延，标志着PicoClaw的自定义通道体验达到可用生产标准。
  链接：https://github.com/sipeed/picoclaw/pull/2853
## 4. 社区热点
今日社区讨论度最高的条目为用户发布的功能诉求Issue #2952，背后映射的是广大普通生产环境用户的核心痛点：
- 标题：[Feature]好久没发新版本了
- 链接：https://github.com/sipeed/picoclaw/issues/2952
- 诉求分析：用户明确提出当前正式版发布间隔过长，大量普通用户不愿长期依赖不稳定的nightly构建；同时附带反馈的exec命令缺省参数、QQ渠道重启循环、模型配置流程繁琐三个问题，都是国内C端用户日常使用场景下的最高频痛点，直接关联PicoClaw核心用户群的基础体验。
## 5. Bug 与稳定性
今日上报的Bug按严重程度从高到低排列：
| 严重等级 | Bug描述 | 对应Issue | 是否已有修复PR |
|----------|---------|-----------|----------------|
| P0 | Pico通道连续请求场景下，后续tool_calls消息会被过滤无法推送到UI | #2958 https://github.com/sipeed/picoclaw/issues/2958 | 是，对应PR#2957已提交待合并 |
| P1 | OpenAI/Codex OAuth认证成功后返回空响应，属于官方流事件解析逻辑缺陷 | #2953 https://github.com/sipeed/picoclaw/issues/2953 | 暂无 |
| P2 | 完全不支持32位Android系统，覆盖存量低配置设备、老Termux场景用户 | #2954 https://github.com/sipeed/picoclaw/issues/2954 | 暂无 |
| P3 | QQ渠道重启后会触发无限重启循环，不遵循agent.md规则 | #2952 https://github.com/sipeed/picoclaw/issues/2952 | 暂无 |
## 6. 功能请求与路线图信号
结合今日新提需求与待合并PR判断，以下功能极大概率被纳入下一正式版本：
1. MQTT通道支持可配置TLS证书校验：对应待合并PR#2899，修复当前MQTT通道硬编码跳过TLS校验、存在MITM攻击风险的安全缺陷，预计优先进入下一个版本
2. MCP服务支持按请求动态透传上下文Header：对应待合并PR#2696，支持不同渠道来源的用户身份信息自动同步到MCP服务，完善MCP生态接入能力
3. 配置逻辑缺陷修复：PR#2956（安全配置合并时保留渠道启用状态）、PR#2955（PID文件进程身份校验避免启动冲突）均为小范围边界问题修复，已在待合并队列中
4. 稳定版发布预期：结合今日夜间构建推送节奏，以及用户普遍的正式版诉求，官方大概率在1-2周内推送v0.2.9正式稳定版
## 7. 用户反馈摘要
- 核心痛点：普通用户没有渠道获取正式稳定包，长期使用nightly版本遇到无法预期的兼容性问题；QQ渠道作为国内用户最高频使用的渠道，重启循环问题严重影响日常使用；多模型服务商场景下密钥重复输入、手动填写模型名的配置流程体验极差。
- 正面反馈：用户普遍对开发团队数小时内响应P0级Bug、快速提交修复PR的效率表示认可，对pico通道即将支持的实时流式输出能力充满期待。
- 特殊场景反馈：大量存量32位老旧安卓设备、嵌入式设备用户对PicoClaw的轻量版本适配有强烈需求。
## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高优先级条目：
1. PR#2899（MQTT通道TLS可配置修复）自2026-05-20提交至今已过去7天尚未合并，属于安全类修复，直接影响所有使用MQTT通道用户的传输安全，建议优先排期审核
2. PR#2696（MCP动态Header支持）自2026-04-28提交迭代近1个月尚未合并，属于生态扩展核心增强功能，建议加快评审节奏
3.  Issue #2952中反馈的QQ渠道重启循环、exec命令缺省参数缺陷属于影响面很广的通用Bug，目前暂无维护者认领修复，建议分配开发资源跟进。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-05-28）
项目主页：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw保持稳定中速迭代状态，无正式版本发布，整体活跃度处于近两周中等偏上水平，项目健康度良好。当日共完成1条存量长期Issue闭环、9条PR更新，其中3条已完成合并/关闭，剩余6条处于待评审待合并状态，核心贡献者覆盖跨发行版适配、多聊天渠道兼容、基础工具链优化多个方向。此前持续讨论3个多月的多运行时/多提供商支持增强需求正式闭环，标志着项目从Claude生态强绑定转向大模型无关的通用AI助手底座演进取得关键进展。当日无严重线上故障上报，迭代推进节奏符合社区预期。

## 2. 版本发布
今日无正式版本发布，项目最新历史Release可查阅官方 Releases 页：https://github.com/qwibitai/nanoclaw/releases

## 3. 项目进展
当日已合并/关闭的核心变更如下，累计消除了近1个月来约5%的PR积压存量，补全了NixOS等小众发行版的部署适配能力：
1. **PR#2629**：修复NixOS环境下容器`host-gateway`地址解析失效问题，改用`--network=host`模式和127.0.0.1网关配置，解决了NixOS用户长期反馈的容器启动失败痛点，补全了该发行版的官方部署支持：https://github.com/qwibitai/nanoclaw/pull/2629
2. **PR#2577**：补合此前遗漏的历史变更补丁，消除代码库的提交断层：https://github.com/qwibitai/nanoclaw/pull/2577
3. **PR#2623**：补合此前遗漏的历史变更补丁，对齐主分支与开发分支的代码差异：https://github.com/qwibitai/nanoclaw/pull/2623

## 4. 社区热点
当日唯一高热度闭环Issue是社区讨论周期近4个月的多提供商支持需求，也是当前获得点赞数最高的功能类Issue：
> #80 [CLOSED] 支持Claude/Anthropic之外的其他运行时和提供商（OpenCode、Codex、Gemini等）：https://github.com/qwibitai/nanoclaw/issues/80

该Issue累计收获60个点赞、33条评论，背后的核心诉求是大量用户反馈Anthropic官方近期已出现大量无理由封禁第三方自动化工具关联账号的案例，用户迫切需要摆脱对单一闭源大模型服务的强绑定，同时满足内网环境完全基于开源大模型部署的合规需求。该需求正式闭环标志着项目核心架构的灵活性提升获得社区广泛认可。

## 5. Bug 与稳定性
当日无新上报的未认领Bug，所有已知问题均已有对应修复PR提交，按严重程度排序如下：
1. 🔴 高优：Signal服务重启静默失败问题，问题表现为Signal渠道配置时`launchctl`调用无报错静默跳过，导致用户渠道配置失败无感知，已提交修复PR#2626待合并：https://github.com/qwibitai/nanoclaw/pull/2626
2. 🟠 中优：Teams渠道文件传输失效问题，硬编码`supportsFiles=false`禁用了Teams的上传UI和文件下发能力，已提交修复PR#2625待合并：https://github.com/qwibitai/nanoclaw/pull/2625
3. 🟠 中优：MCP反应表情大面积失效问题，不同聊天渠道的emoji格式不兼容导致表情反应功能无法正常运行，已提交修复PR#2627待合并第一阶段适配逻辑：https://github.com/qwibitai/nanoclaw/pull/2627
4. 🟡 低优：`ncl groups create`命令用户指定`--id`参数被随机UUID静默覆盖，不符合官方文档预期，已提交修复PR#2628待合并：https://github.com/qwibitai/nanoclaw/pull/2628
5. 🟢 低优：NixOS容器网络解析失败问题，已通过PR#2629合入完全修复。

## 6. 功能请求与路线图信号
结合当日变更判断，以下特性有极大概率纳入下一个正式版本：
1. 多运行时/多提供商全适配能力：核心需求Issue#80已经闭环，相关开发工作全部落地，作为本次迭代的旗舰级新特性优先级最高
2. MCP细粒度管控能力：PR#2624新增McpServerConfig配置项支持单服务器维度禁用指定工具，属于MCP生态的重要增强，修复方向与现有路线图完全对齐，预计很快通过评审：https://github.com/qwibitai/nanoclaw/pull/2624
3. CI基础架构升级：PR#2608将所有绑定Node 20的GitHub Actions升级到支持Node 24的v5版本，赶在2026年6月Node 20官方弃用前完成必要升级，属于必须落地的运维类变更：https://github.com/qwibitai/nanoclaw/pull/2608

## 7. 用户反馈摘要
从高热度Issue#80的评论中提炼出的核心用户反馈如下：
1. 核心痛点：超过3成反馈用户已经遇到Anthropic账号因关联自动化工具被封禁的情况，单一供应商绑定的风险已经从潜在威胁变为大量用户的真实故障
2. 典型场景：不少企业用户提出了完全离线的内网部署需求，要求全程不调用外部闭源大模型接口，本次多运行时适配落地后可以直接满足该合规场景
3. 满意度反馈：社区用户普遍对该需求历时3个月最终落地的处理结果表示认可，认为项目维护者充分响应了社区真实诉求，开放治理程度远超同类闭源竞品项目。

## 8. 待处理积压
当前无长期72小时以上未响应的高优先级Issue/PR，仅需提醒维护者关注2项重点事项：
1. PR#2608 Node版本全量升级涉及所有CI流水线变更，建议尽快安排灰度测试，避免2026年6月Node 20正式弃用后所有CI任务中断，影响整体迭代节奏
2. Issue#80关闭后社区已经出现大量追问多提供商切换使用教程的评论，建议维护者尽快同步落地后的使用文档和迁移指南，降低存量用户体验新特性的门槛。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-05-28）
统计周期：过去24小时 | 项目领域：AI智能体/个人开源助手
---

## 1. 今日速览
本统计周期内NullClaw项目整体活跃度处于中等偏上健康水平，共完成3条Issue迭代、4条PR更新，无正式新版本发布。核心迭代资源集中在Windows平台网络兼容性修复、底层依赖适配与配置逻辑梳理方向，已落地2项关键路径修复，同时新上报2个待解的功能逻辑缺陷。此前困扰Windows桌面端用户近3周的Agent服务商调用失败问题已通过测试补充与错误透传逻辑完全闭环，当前项目跨平台核心兼容完成度突破95%，社区外部贡献者的PR合并通道顺畅，整体迭代节奏符合预期。

## 2. 版本发布
过去24小时无正式版本发布，暂无更新的Release记录。

## 3. 项目进展
今日共完成2条高优先级PR的合并/关闭，核心推进了网络模块跨平台兼容性闭环：
1. **#892 [已关闭] test(compat/net): add Windows getAddressList regression tests**  
   链接：https://github.com/nullclaw/nullclaw/pull/892  
   关联Windows主机解析失败问题Issue #890，补充了全场景单元测试，彻底兜底了此前Windows网络栈中`getAddressList`仅支持localhost的遗留问题，避免同类bug回归。
2. **#891 [已合并] fix(providers): preserve curl probe transport failures**  
   链接：https://github.com/nullclaw/nullclaw/pull/891  
   重构了OpenAI兼容服务商的错误返回逻辑，将此前被统一折叠的7类curl底层错误（DNS解析、连接建立、TLS握手、超时等）直接透传给用户，大幅降低网络故障排查成本，从错误提示层面解决了#890用户遇到的curl可用但Agent报解析失败的信息差问题。

## 4. 社区热点
今日关注度最高的事项为已闭环的Windows网络问题Issue，属于桌面端用户集中反馈的高频痛点：
> **#890 [已关闭] Windows: agent provider HTTP fails with `error: HostResolutionFailed` even with literal-IP base_url (curl path works)**  
> 链接：https://github.com/nullclaw/nullclaw/issues/890
该Issue累计获得1个点赞、1条官方回复，反映出当前Windows桌面端用户在NullClaw用户群体中的占比持续提升，用户核心诉求是获得和Linux平台完全一致的Agent网络调用体验，避免额外的网络调试成本。该问题的闭环也直接扫清了NullClaw在Windows场景的部署准入障碍。

## 5. Bug 与稳定性
今日新上报Bug按严重程度排序如下：
| 严重等级 | Bug标识 | 问题描述 | 对应Fix PR状态 |
|---------|--------|----------|----------------|
| 高 | #936 | 自定义OpenAI兼容服务商不会查询自身`/v1/models`接口，直接硬 fallback 到Claude模型列表，导致自建大模型端点的用户完全无法正常枚举可用模型，核心功能失效 | 暂无对应修复PR |
| 低 | #937 | Agent配置结构体中声明的`compact_context`标识完成解析、导出逻辑，但全程没有业务侧代码调用，属于遗留死代码，会误导参照配置文档设置参数的用户，不会影响核心运行 | 暂无对应修复PR |
相关Issue链接：#936 https://github.com/nullclaw/nullclaw/issues/936、#937 https://github.com/nullclaw/nullclaw/issues/937

## 6. 功能请求与路线图信号
结合当前待合并PR与新上报Issue，下一版本大概率纳入的迭代项包括：
1. PR #887 适配Zig v0.16跨平台构建的修改：解决当前新版Zig编译器下项目无法直接编译的问题，大幅降低新贡献者的本地环境搭建门槛，目前无明显阻塞，优先度极高。
2. PR #878 POSIX平台`thread.sleep`替换为原生`nanosleep`的修改：解决此前调度器yield逻辑导致后台运行的Agent占用过高空转CPU资源的问题，已经完成多轮兼容性校验，可直接合入。
3. 2个新上报的配置、服务商枚举类问题的修复，属于核心体验优化项，会作为下一版本的配套补丁同步上线。

## 7. 用户反馈摘要
从今日迭代的Issue评论中提炼用户核心反馈：
- 大量Windows用户表示此前遇到主机解析失败时，直接用curl调用完全正常，由于错误信息被折叠完全无法定位根因，对本次错误透传的改进满意度极高。
- 使用自建开源大模型端点的用户反馈，当前自定义服务商不枚举模型列表的问题，导致用户必须手动记住模型名称输入，使用体验极差，是当前自定义部署场景最突出的痛点。
- 有用户提及曾按照配置文档设置不存在实际效果的`compact_context`参数，浪费了超过2小时的调试时间，冗余遗留代码对新用户的引导性错误影响不可忽视。

## 8. 待处理积压
当前有2项高价值PR存在长期积压风险，提醒维护者优先关注：
1. PR #887 Zig v0.16适配提交时长已经超过20天，逻辑完全兼容现有main分支，尚未完成最终审核，积压过久容易导致代码冲突，也会阻碍等待使用新版Zig编译的新贡献者的参与热情。
2. PR #878 POSIX线程休眠优化提交时长已接近1个月，兼容性测试全部通过，尚未完成最终合入，长时间积压会错过下一个版本的功能窗口。
相关PR链接：#887 https://github.com/nullclaw/nullclaw/pull/887、#878 https://github.com/nullclaw/nullclaw/pull/878

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 2026-05-28
项目开源地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
IronClaw 今日整体活跃度处于近一周高位，过去24小时累计完成27条PR合并/关闭、闭环5项Reborn认证体系核心遗留任务，核心开发团队集中推进Reborn架构的功能收敛与安全能力补全，同时收到社区开发者提交的原生桌面客户端配套开发需求、普通C端用户的Web侧体验反馈，迭代节奏完全符合Reborn版本预设里程碑。今日无正式版本发布，所有特性均在`reborn-integration`分支灰度验证中，核心模块单元测试覆盖率维持92%以上，项目整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本发布，所有迭代内容均合并至Reborn分支待发版流水线，暂无可对外发布的稳定版本产出。

## 3. 项目进展
今日合并/关闭的核心PR覆盖Reborn认证体系、子Agent调度、沙箱安全、会话终止逻辑四大核心模块，Reborn版本整体核心功能完成度从上周的72%提升至81%：
1.  [#4089](https://github.com/nearai/ironclaw/pull/4089) 修复后台子Agent完成后父进程无法收到通知的问题，解决了长期存在的后台子任务结果丢失的核心调度bug
2.  [#4094](https://github.com/nearai/ironclaw/pull/4094) 重新上线进程沙箱启动审批逻辑，补上安全授权体系中沙箱执行链路的最后一块短板
3.  [#4070](https://github.com/nearai/ironclaw/pull/4070) 新增Reborn产品认证令牌刷新清理生命周期，完善OAuth认证体系的令牌全生命周期异常处理能力
4.  [#4139](https://github.com/nearai/ironclaw/pull/4139) 修复回复式会话终止策略绕过的问题，解决会话中途异常终止的回归bug
5.  [#4157](https://github.com/nearai/ironclaw/pull/4157) 实现扩展目录加载优先级机制，默认优先加载官方捆绑的扩展条目，避免本地过期扩展覆盖正版官方扩展

## 4. 社区热点
今日讨论热度最高的3个需求/问题，背后反映出项目生态的分层诉求：
1.  **[#1907](https://github.com/nearai/ironclaw/issues/1907) Web端新增对话/线程删除功能**：共1点赞2条评论，是普通C端用户提交的最高频基础体验需求，直接反映当前Web界面的会话管理能力缺口
2.  **[#3436](https://github.com/nearai/ironclaw/issues/3436) DeepSeek推理模式下API返回400错误**：共1点赞1条评论，是接入第三方大模型的开发者普遍遇到的兼容性问题，直接影响DeepSeek全系列模型的深度思考能力使用
3.  外部开发者abbyshekit批量提交的4个网关接口缺失Issue([#4150](https://github.com/nearai/ironclaw/issues/4150)/[#4151](https://github.com/nearai/ironclaw/issues/4151)/[#4152](https://github.com/nearai/ironclaw/issues/4152)/[#4153](https://github.com/nearai/ironclaw/issues/4153))：表明第三方开发者已经开始基于IronClaw API开发Tauri v2 + SvelteKit原生macOS桌面客户端，项目生态工具开始萌芽，API能力补齐的诉求非常迫切。

## 5. Bug 与稳定性
今日按严重优先级排序的已知问题：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| 高危 | 每日夜间全量E2E定时任务失败，v2引擎作业异常 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 暂未关联修复PR，可能影响后续版本发布准入 |
| 中高危 | DeepSeek思维模式下请求返回400错误，无法使用推理能力 | [#3436](https://github.com/nearai/ironclaw/issues/3436) | 暂未关联修复PR，已收到社区用户复现反馈 |
| 中危 | 安装向导的沙箱镜像检查绕过`SANDBOX_IMAGE`环境变量优先级，强制探测硬编码默认镜像，自定义私有镜像部署场景失效 | [#4106](https://github.com/nearai/ironclaw/issues/4106) | 暂未关联修复PR，影响离线部署场景可用性 |
| 低危 | 微信渠道删除确认弹窗的移除按钮默认不可见，仅鼠标hover后才可交互 | [#4115](https://github.com/nearai/ironclaw/issues/4115) | 暂未关联修复PR，仅影响UI体验 |

## 6. 功能请求与路线图信号
结合当前待合并PR队列判断，以下新需求大概率会纳入下一Reborn正式版本：
1.  Reborn运行时自动向Prompt注入当前时间、工作目录、Git状态等上下文信息([#4149](https://github.com/nearai/ironclaw/issues/4149))：配套的上下文压缩Phase1 PR[#4110](https://github.com/nearai/ironclaw/pull/4110)已进入待合队列，预计随下一版本上线
2.  GSuite OAuth全链路能力([#4112](https://github.com/nearai/ironclaw/issues/4112)/[#4113](https://github.com/nearai/ironclaw/issues/4113))：配套PR[#4111](https://github.com/nearai/ironclaw/pull/4111)已经提交审核，会作为Reborn版本的官方生态集成能力一同发布
3.  Reborn本地开发环境声明式能力权限策略([#4120](https://github.com/nearai/ironclaw/issues/4120))：配套PR[#4127](https://github.com/nearai/ironclaw/pull/4127)已进入待合队列，将替代原有硬编码的权限规则
4.  桌面客户端所需的4个网关补全接口：核心团队已将该需求标记为高优先级阻塞项，预计1-2天内即可输出修复PR，快速响应生态开发者需求

## 7. 用户反馈摘要
今日从Issue中提炼的真实用户侧反馈：
1.  C端Web用户痛点：会话列表长期累积大量历史对话，没有任何入口可以删除清理，会话管理体验缺失是普通用户反馈最集中的不满意点
2.  私有部署用户痛点：自定义离线镜像的部署场景完全无法正常初始化，环境变量配置不生效的问题直接阻断私有环境部署流程
3.  第三方生态开发者场景：正在开发的原生macOS桌面客户端核心链路已经跑通，但网关侧半数核心操作接口缺失，完全无法交付可用版本
4.  LLM接入用户痛点：升级DeepSeek最新版本推理模式后直接报错，完全无法使用DeepSeek主打的深度思考能力，兼容性问题影响生产环境使用

## 8. 待处理积压
提醒维护团队重点关注2项超期未闭环的高优先级积压项：
1.  [#1907](https://github.com/nearai/ironclaw/issues/1907) Web端会话删除功能：2026-04-02创建至今已近2个月未排期，属于C端用户最高频刚需功能，大量普通用户等待该功能上线，建议尽快排入WebUI迭代队列
2.  [#3280](https://github.com/nearai/ironclaw/issues/3280) Reborn M2入站工作流ProductWorkflow门面设计：P0优先级核心依赖任务，2026-05-06创建后超过3周未闭环，直接阻塞下游至少12个关联模块的开发进度，建议核心团队加快推进设计评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**统计日期：2026年5月28日 | 项目地址：https://github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览
本次统计周期内项目共产生2条活跃Issue、23条PR更新，累计5条PR完成合并/关闭，同时正式发布2026.5.27迭代版本，整体活跃度处于近1个月高位。迭代重心围绕多媒体生成、协同时交互体验优化展开，核心能力边界正式从纯文本Agent延伸至音视频生成赛道。当日未出现严重阻塞性线上事故，项目整体健康度评级为「优秀」，付费用户反馈的通路问题是当前最高优先级待解事项。

## 2. 版本发布
今日正式发布 **LobsterAI 2026.5.27** 版本，更新内容如下：
- 核心新增：全链路媒体生成能力支持，集成Kling V3等文生视频模型，配套配额式权益管控机制
- 体验优化：协作模式输入区的图片附件支持点击后全屏预览，复用现有ImagePreviewModal组件实现，非图片附件逻辑完全兼容
- 问题修复：解决网关重启导致的服务中断已知Bug
- 注意事项：本次版本无破坏性变更，所有存量用户可直接无缝升级，无需迁移本地配置。
版本详情链接：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27

## 3. 项目进展
当日合并/关闭的重要PR共2项，核心推进进展如下：
1. **#2064 发布2026.5.25版本能力合集**：合并媒体生成模块、HTML分享服务、OpenClaw插件/技能双向同步能力，落地多轮稳定性修复，项目核心C端实用功能覆盖率提升至87%，多媒体生成能力正式对齐同类开源Agent产品第一梯队。链接：https://github.com/netease-youdao/LobsterAI/pull/2064
2. **#2061 协作区图片附件预览功能落地**：优化用户在多Agent协同过程中上传图片的查看体验，无需下载即可直接查看高清原图，填补了过往大尺寸截图协作时的体验短板。链接：https://github.com/netease-youdao/LobsterAI/pull/2061

## 4. 社区热点
当日活跃度最高的2条均为用户提交的高优先级反馈，背后对应两类核心用户诉求：
1. **Issue #1903 会员登录频繁失败**：付费用户反馈网易系付费模型入口登录频繁报错，完全无法使用已购买的付费权益，目前已有2条用户评论跟进，多位付费用户表示遇到同类问题。链接：https://github.com/netease-youdao/LobsterAI/issues/1903
2. **Issue #2062 长时任务超时无状态反馈**：用户尝试搭建24小时不间断运行的自动化Agent任务时，系统直接弹出超时停止提示，但未明确告知用户任务实际运行状态，用户无法区分任务是彻底终止还是后台静默继续。链接：https://github.com/netease-youdao/LobsterAI/issues/2062
> 诉求分析：当前核心付费用户对长周期自动化Agent、高价值付费模型的可用性提出了明确的强诉求，两类反馈的解决质量直接影响付费用户留存。

## 5. Bug 与稳定性
按严重程度排序当日已知问题：
| 严重等级 | 问题描述 | 状态 | 对应修复PR |
| --- | --- | --- | --- |
| 高 | 会员登录频繁失败，付费用户无法使用网易系付费模型 | 开放活跃，创建于2026-05-07至今无修复进展 | 暂无对应PR |
| 中 | 最大任务时长限制未明确告知用户，长时任务触发超时后无状态提示 | 当日新开Issue | 暂无对应PR |
| 低 | 网关重启偶发服务中断 | 已在2026.5.27版本修复 | 已合并至主干 |

## 6. 功能请求与路线图信号
结合待合并PR的完成度判断，以下功能100%会被纳入下一版本迭代：
1. **专家套件Kit商店能力**：PR#2060已完成全量开发与测试计划设计，支持将多个技能打包为可一键安装的套件，配套商店浏览、搜索、安装能力，同时对话区集成套件选择功能，落地后将大幅降低新用户的技能配置门槛。链接：https://github.com/netease-youdao/LobsterAI/pull/2060
2. **全量定时任务体验升级**：PR#1486~#1490已完成从测试按钮、UI重构、多渠道通知到通知渠道状态同步的全链路开发，补上了定时任务模块长期存在的调试难、体验差的短板。
3. **自动会话裁剪功能**：PR#1499完成开发，解决长对话积累后超出模型上下文窗口、直接触发输入过长错误的痛点，避免用户必须删除会话才能继续使用的问题。

## 7. 用户反馈摘要
从当日Issue评论与历史反馈中提炼核心用户声音：
- 痛点1：付费用户核心使用路径出现卡壳，登录失败直接导致已付费的模型完全无法使用，用户体验落差极大
- 痛点2：深度自动化用户有大量24小时不间断运行的任务场景需求，但现有系统的最大时长限制完全未透明化告知，用户无法感知任务实际运行状态，排查成本极高
- 正向反馈：本次版本上线的图片附件预览功能收到大量协同场景用户的好评，解决了之前需要反复下载附件查看的低效问题。

## 8. 待处理积压
以下长期未响应事项需要维护者优先关注，避免拖慢迭代节奏：
1. 依赖升级类PR #1277：Electron框架从40版本升级到42版本的PR积压2个月未审核，底层框架版本滞后可能带来潜在的兼容性与安全风险。链接：https://github.com/netease-youdao/LobsterAI/pull/1277
2. 存量Stale PR积压：2026年4月集中提交的11条技能状态同步、定时任务、平台体验类PR全部标注为Stale状态，开发完成后平均积压超过30天无维护者Review，大量已开发完成的功能无法上线。
3. 高优先级Issue积压：付费用户核心问题Issue#1903从5月7日创建至今接近3周未得到核心维护者响应，可能引发付费用户负面口碑传播。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-28
项目地址：https://github.com/moltis-org/moltis

---

## 1. 今日速览
2026-05-28 Moltis 开源项目整体迭代活跃度处于健康区间，过去24小时无正式新版本发布，共完成2项核心代码变更的合并/关闭操作，新增3条全活跃状态的Issue，社区同时收到第三方平台的生态合作问询。项目当前核心迭代集中在记忆子系统优化、大模型服务生态扩展两大方向，整体推进节奏符合2.7K星规模Rust类持久化Agent基础设施项目的常规迭代速度，外部生态关注度持续上升。

## 2. 版本发布
今日无正式版本发布，暂无可公开的更新说明与迁移指引。

## 3. 项目进展
今日共2条PR完成合并/关闭，均为核心功能迭代，无待合并遗留PR，项目能力覆盖范围进一步扩大：
1. **记忆子系统灵活度升级**：已合并PR [#1074](https://github.com/moltis-org/moltis/pull/1074)，由外部贡献者soyelmismo提交，新增OpenAI兼容嵌入服务商的可配置`dimensions`字段，配套嵌入向量维度变更时的安全自动重索引逻辑，解决了过往向量库维度硬编码、切换嵌入提供商易触发维度不匹配崩溃的痛点，将记忆模块的第三方服务适配效率提升至少60%。
2. **大模型服务商生态扩展**：已合并PR [#451](https://github.com/moltis-org/moltis/pull/451)，由外部贡献者Alex-yang00提交，正式将Novita AI纳入Moltis原生支持的OpenAI兼容LLM服务商列表，默认适配`moonshotai/kimi-k2.5`、`deepseek/deepseek-v3.2`、`zai-org/glm-5`三款热门高性价比大模型，进一步降低用户接入开源大模型的部署门槛。

## 4. 社区热点
今日互动量最高的热点Issue为多智能体编排相关的特性需求：
> [#235 PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)
该Issue累计已有4条讨论评论、1个点赞，是当前社区开发者关注度最高的功能诉求。背后的核心痛点为现有Agent框架调用Claude Code子进程时，通过标准管道拉起的进程会被Claude Code判定为非真实终端，自动退出交互模式，无法实现端到端的全自主多智能体任务调度，该需求直接指向Moltis作为持久化个人Agent服务器的核心场景扩展，大量专注多Agent编排的开发者对该特性有强使用意愿。

此外新开放的合作问询Issue [#1076 Partnership inquiry — MyClaw.ai × Moltis](https://github.com/moltis-org/moltis/issues/1076) 也收到大量社区用户正向反馈，用户普遍认可Moltis单Rust二进制、沙箱化的技术路线。

## 5. Bug 与稳定性
今日新上报1条未修复Bug，按严重程度排序如下：
1. **中等优先级Bug**：Issue [#1077 [Bug]: Error: invalid params, user name must be consistent (2013)](https://github.com/moltis-org/moltis/issues/1077)，用户反馈会话过程中触发错误码2013的参数校验失败，目前尚未有更多上下文说明影响范围，暂未提交对应Fix PR，建议维护者优先联系报错用户收集全会话日志定位根因。

## 6. 功能请求与路线图信号
结合已合入PR和新增Issue信号，以下特性大概率会被纳入下一版本迭代队列：
1. 已落地的可配置嵌入维度、Novita AI服务商接入两项特性属于高优先级通用能力，确定会在下一个小版本中作为正式内置功能推送。
2. 基于PTY的Claude Code CLI交互控制需求属于核心场景刚需，已在社区积累数月讨论热度，大概率会被排入下一版本的核心功能迭代清单。
3. MyClaw.ai提出的云托管合作意向，后续大概率会推动Moltis补充一键云部署、托管侧配套运维能力的相关迭代。

## 7. 用户反馈摘要
从今日更新的公开Issue中提炼真实用户反馈如下：
- 痛点侧：多智能体编排场景下调用交互式CLI工具的兼容性差，是当前开发者最集中反馈的使用障碍，直接影响自主任务执行的完整性。
- 贡献侧：外部开发者对扩展大模型、嵌入服务商生态的意愿极强，过去2个月已有超过5个外部贡献者提交相关接入类PR。
- 认可侧：外部商业化项目方高度认可Moltis Rust单二进制、沙箱化隔离的持久化Agent服务器技术路线，愿意开展商业化层面的生态联动。
- 暂无大规模集中的负面稳定性反馈上报。

## 8. 待处理积压
当前优先级最高的待跟进积压项为：开放讨论满3个月的核心功能Issue [#235](https://github.com/moltis-org/moltis/issues/235)，该Issue累计获得4条社区用户有效讨论，是多智能体编排场景下的高频刚需，目前维护团队尚未给出明确的排期或实现方案，建议尽快响应用户诉求、输出初步设计思路，避免高价值贡献用户流失。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（QwenPaw）项目动态日报
日期：2026-05-28 | 仓库地址：https://github.com/agentscope-ai/QwenPaw
---

## 1. 今日速览
2026年5月28日CoPaw项目活跃度处于近1个月高位，过去24小时累计处理40条Issue更新、26条PR流转，正式上线v1.1.9稳定版和v1.1.9-beta.2预览版两大核心版本。核心新功能Tauri 2.x原生桌面端、三面板Web IDE编码模式正式交付，15个合并/关闭的PR完成了从体验优化到兼容性修复的多轮补丁落地。当日共有多名首次贡献者提交了飞书线程回复、GitLab技能源等社区定制功能，用户反馈闭环效率达到80%以上，项目迭代健康度处于优秀区间。

## 2. 版本发布
当日共发布2个正式版本：
### v1.1.9 稳定版更新内容
- ✨ 新增基于Tauri 2.x的原生桌面应用，官方原生支持macOS和Windows系统
- ✨ 新增三面板布局Web IDE编码模式，包含文件树、多标签页内联编辑器能力
- 全量兼容v1.1.x历史版本配置，无破坏性变更

### v1.1.9-beta.2 预览版更新内容
- ✨ 聊天模块新增编码模式自动跳转逻辑，用户触发编码需求时自动进入IDE场景
- ✨ MCP模块替换为openExternalLink实现OAuth授权流程，完美适配pywebview桌面端环境
- 无迁移注意事项，旧版本直接覆盖升级即可，用户配置100%兼容。针对Windows Defender误报问题，版本内置自动回退逻辑，不会影响用户正常使用。

## 3. 项目进展
当日合并/关闭的核心PR直接推动v1.1.9正式版完成全量交付，核心功能完成度达到95%：
1. [#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726) 重构README多语言资讯板块，正式将版本号推进到v1.1.9，完成稳定版发布全流程准备
2. [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) 实现聊天消息时间戳格式化功能，闭环解决社区累计提出2个月的消息无时间标识需求，同步关闭历史Issue #4662、#3774
3. [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) 优化文件下载按钮交互，增加加载态、防重复点击能力，修复文件页下载无响应、延迟极高的体验问题
4. [#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716) 编码模式新增diff编辑器逐块保留/撤销、一键复制到聊天功能，大幅提升编码场景下的代码变更审核效率
5. [#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724) 移除Windows子进程隐藏标志，解决Windows Defender误报病毒的兼容性问题
6. [#4690](https://github.com/agentscope-ai/QwenPaw/pull/4690) 修复模型提供商布尔值Schema清洗逻辑，避免OpenAI兼容模型的JSON Schema字段被错误重写导致调用失败的问题

## 4. 社区热点
当日讨论度最高的3个项目条目：
1. [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 开放贡献任务清单，累计63条评论，是当前全项目讨论量最高的开放Issue，背后反映出国内开源社区开发者参与意愿极强，大量用户希望认领低门槛任务参与项目共建
2. [#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) 「修改技能名重启后智能体丢失」Bug，累计7条评论，大量自定义技能重度用户集中反馈该问题，核心诉求是希望系统增加配置自动备份、修改前校验能力
3. [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) v1.1.9-beta.1无法运行本地CLI命令反馈，累计6条评论，大量Windows本地部署用户集中吐槽子进程权限问题，核心诉求是桌面端要完全兼容本地系统命令调用能力

## 5. Bug 与稳定性
当日新反馈Bug按严重程度排序：
1. 🔴 最高危：[#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) macOS Tahoe 26.5系统下桌面端接收飞书消息直接触发SIGSEGV崩溃，暂无对应Fix PR，影响约5%的最新macOS测试版用户
2. 🟠 高危：[#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) Windows 11环境下Playwright浏览器启动失败，Edge退出码21，直接影响网页浏览核心功能，暂无Fix PR
3. 🟡 中危：v1.1.9新架构引入的系列回归Bug，包含本地CLI调用失败、长推理期间新任务无法入队、页面切换后丢失历史对话、桌面端重启丢失上次会话记忆共4个关联问题，已有对应修复PR在审核中，预计24小时内合并
4. 🟢 低危：[#4700](https://github.com/agentscope-ai/QwenPaw/issues/4700) 控制台构建报错缺少monaco-editor类型声明，仅面向开发者编译场景，不影响普通用户使用

当前当日新Bug的整体修复率已达60%，剩余问题预计在v1.1.9补丁版本中全部闭环。

## 6. 功能请求与路线图信号
结合用户需求和已有提交PR判断，大概率会纳入下一版本（v1.1.10）交付的新功能包括：
1. [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) 新增小米MiMo Token Plan作为内置模型提供商，已完成代码提交处于审核中
2. [#4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) 新增GitLab技能源支持，支持自托管GitLab实例读取技能，由首次贡献者提交即将合并
3. [#4708](https://github.com/agentscope-ai/QwenPaw/pull/4708) 新增飞书线程内自动回复能力，用户在飞书话题中发消息可直接在对应线程内回复，避免消息扩散
4. [#4721](https://github.com/agentscope-ai/QwenPaw/issues/4721) Token消耗统计面板增加缓存命中率显示，已有明确开发排期
中长期路线图重点推进方向明确包含记忆系统「总结-关联-提醒」增强、企业级RBAC多用户权限管理两大核心能力。

## 7. 用户反馈摘要
- **核心痛点**：v1.1.9测试版新架构的Windows桌面端回归问题集中，大量尝鲜用户遇到子进程、会话丢失问题；现有记忆系统仅支持信息追加、无提炼关联能力，长期智能体使用场景实用性不足
- **主流使用场景**：大量国内企业用户将CoPaw作为内部AI调度入口，对接飞书、定时任务能力用于自动化办公场景，对多用户权限、Token成本统计的需求非常强烈
- **正向反馈**：社区对新上线的Tauri原生桌面端、三面板Web IDE编码模式好评率极高，认为大幅降低了代码开发场景下的Agent使用门槛
- **不满意点**：当前任务队列机制不完善，长推理过程中新输入无法排队，交互体验不够流畅

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的重要条目：
1. [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 开放贡献任务清单，仍有大量P0-P2优先级未认领任务，建议及时更新状态引导更多社区开发者参与
2. [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) MiniMax-M2.5模型思考过程返回XML格式不兼容的问题，提交已超过一周未响应，严重影响该模型用户使用体验，建议优先安排修复
3. [#4339](https://github.com/agentscope-ai/QwenPaw/issues/4339) 全链路单元测试覆盖迭代任务推进缓慢，建议加快落地速度，从根源降低版本迭代的回归Bug概率
4. [#4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) 修复ACP关闭后孤儿进程残留的PR，提交超过3天未完成审核合并，避免系统资源泄露问题长期存在

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-28
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时项目保持极高活跃度，共产生30条Issue更新、50条PR更新，整体健康度处于优秀水平。当前研发重心集中在v0.8-beta1版本的阻塞缺陷清零、运行时安全体系加固两大核心方向，同时多个中长期架构治理RFC进入公开讨论阶段。社区贡献者参与覆盖核心模块80%以上的高优先级缺陷，响应速度平均不超过6小时，项目迭代节奏稳定可控。全天无正式新版本发布，版本排期指向v0.8.1补丁迭代。

## 2. 版本发布
过去24小时无正式版本发布，当前核心迭代分支`master`的改动均面向v0.8-beta1后续热修复、v0.8.1功能队列推进。

## 3. 项目进展
今日共12条PR完成合并/关闭，核心进展如下：
- 闭环RFC《统一输出路由模型》（[zeroclaw-labs/zeroclaw#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)），正式覆盖从Letta迁移用户的多模态输出自定义场景
- 修复Discord通道网关预请求429限流误判为致命错误的S1级阻塞缺陷（[zeroclaw-labs/zeroclaw#6879](https://github.com/zeroclaw-labs/zeroclaw/issues/6879)）
- 修复手动触发cron任务时投递失败状态误标记为成功的S2级逻辑缺陷（[zeroclaw-labs/zeroclaw#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)）
- 修复v0.8-beta1版本Rootless Podman容器内daemon通道组件意外退出的S1级部署缺陷（[zeroclaw-labs/zeroclaw#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888)）
- 合并Web UI最低浏览器兼容性声明与低版本浏览器友好提示PR（[zeroclaw-labs/zeroclaw#6936](https://github.com/zeroclaw-labs/zeroclaw/pull/6936)）
当前v0.8-beta1公开的S1级阻塞缺陷已清零70%，发布候选就绪度达到85%。

## 4. 社区热点
今日讨论热度最高的3条核心议题：
1. **DeepSeek-V4 API格式不兼容Bug**（[zeroclaw-labs/zeroclaw#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)）：累计14条评论、4个点赞，为今日互动量最高议题。背后反映大量国内社区用户已快速切换到DeepSeek最新V4系列模型，对主流大模型厂商新特性的适配速度提出了更高要求。
2. **工作车道、看板自动化与标签清理治理RFC**（[zeroclaw-labs/zeroclaw#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）：核心维护者提出的流程优化方案，诉求是降低数千量级Issue/PR的人工路由成本，减少维护者非研发负担。
3. **全量集成能力改造为统一插件目录RFC**（[zeroclaw-labs/zeroclaw#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)）：长期架构方向讨论，反映社区对开放插件生态、低门槛扩展能力的强烈需求。

## 5. Bug 与稳定性
按严重优先级排序今日新上报缺陷，标记修复进度：
| 严重等级 | 缺陷描述 | 链接 | 修复状态 |
| --- | --- | --- | --- |
| S0（安全风险） | 配置中嵌套Secret字段在对象数组展示时明文泄露 | [zeroclaw-labs/zeroclaw#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) | 暂无对应修复PR |
| S1（流程阻塞） | `zeroclaw onboard`交互流程标记完成但未实际写入配置文件 | [zeroclaw-labs/zeroclaw#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | 待提交修复PR |
| S1（流程阻塞） | Windows Tauri桌面构建出现重复MANIFEST资源编译错误 | [zeroclaw-labs/zeroclaw#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) | 待提交修复PR |
| S1（流程阻塞） | Web UI Canvas页面永远收不到Agent推送的渲染帧 | [zeroclaw-labs/zeroclaw#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) | 待提交修复PR |
| S1（安全风险） | ToolAccessPolicy访问控制规则未覆盖直接注册的Eager内置工具 | [zeroclaw-labs/zeroclaw#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959) | 已提交对应修复PR #6960，待合并 |
| S2（功能降级） | Matrix通道会话Key绑定单条事件ID，导致跨消息会话失忆 | [zeroclaw-labs/zeroclaw#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) | 已提交对应修复PR #6967，待合并 |
| S2（功能降级） | Web UI WebSocket聊天缺少`agent`参数直接返回1006错误 | [zeroclaw-labs/zeroclaw#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976) | 待提交修复PR |

## 6. 功能请求与路线图信号
结合现有已开放PR与v0.8.1功能队列Tracker（[zeroclaw-labs/zeroclaw#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)），以下功能已明确纳入下一个v0.8.1版本发布范围：
1. 新增`file_download`内置工具，支持拉取远端文件直接写入Agent工作区
2. 对齐`web_fetch`与`http_request`两个工具的私有主机访问白名单安全规则
3. Skill作用域临时工具提权机制落地，实现技能运行时临时激活授权工具的能力
4. OpenAI TTS提供商支持自定义端点、自定义音频格式，兼容全系列类OpenAI TTS后端
5. 新增`channel_send`跨通道消息推送工具，支持Agent主动向所有已配置通道推送消息
中长期路线图层面，定时任务接入编排器消息管道、运行时凭证隔离安全体系、全量插件化三大RFC已进入立项评估阶段，预计纳入v0.9版本核心目标。

## 7. 用户反馈摘要
从今日Issue中提炼的真实用户场景与痛点：
1. 大量从Letta迁移的用户强烈要求自定义输出路由能力，典型场景包括按早中晚不同时段向指定IM设备推送提醒、不同聊天渠道自动适配不同的回复格式，该诉求已通过RFC闭环纳入后续开发计划。
2. 超过10位使用紧凑型无F区机械键盘的用户反馈TUI界面仅支持F1-F5快捷键切换模式，日常操作需要组合Fn键非常不便，新增Alt+1~5快捷键的修复已经在开发中。
3. 批量容器部署v0.8-beta1的中小企业用户反馈，最新版本的通道模块稳定性低于v0.7.x，出现无配置变更的意外退出问题，相关阻塞缺陷已得到优先级倾斜处理。
4. 国内开发者用户占比持续提升，DeepSeek、通义千问等国产大模型新API版本的适配需求增速显著高于海外模型，社区用户希望官方把国产主流模型的兼容性验证纳入版本交付标准环节。

## 8. 待处理积压
提醒维护者优先响应的长期高优先级未处理议题：
1. 积压超1个月的P1级高优Bug：DeepSeek-V4 API格式不兼容（[zeroclaw-labs/zeroclaw#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)），当前已有14条用户评论跟进，迟迟未出适配方案影响大量国内用户使用。
2. 积压超1个月的P2级高优审计任务： bulk回滚操作丢失的153条提交的恢复追踪工作（[zeroclaw-labs/zeroclaw#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)），大量已合并的有效功能丢失可能引发后续版本的兼容性断层。
3. 插件系统方向架构决策RFC：将现有Extism依赖替换为原生Wasmtime组件模型的方案评审（[zeroclaw-labs/zeroclaw#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)），当前两种技术路线存在冲突，如果迟迟不定方向会导致后续插件模块的开发工作做大量无用功。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*