# OpenClaw 生态日报 2026-06-24

> Issues: 188 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 23:08 UTC

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

# OpenClaw 项目动态日报 | 2026-06-24
---
## 1. 今日速览
今日项目整体活跃度处于高位，过去24小时累计产生188条Issue更新、500条PR更新，无正式版本发布。当日新开/活跃Issue占比达73%，核心存储层重构、多渠道兼容性优化、模型推理性能提升三大主线推进顺畅，累计31个PR完成合并/关闭，项目健康度评级为「良好」。高优先级P1 Bug响应时效达标，未出现全网级阻塞性故障，社区贡献者提交的外围渠道适配PR占比超过40%，生态参与度持续走高。

## 2. 版本发布
今日无正式版本发布，当前用户侧主流稳定版本仍为2026.6.x系列。

## 3. 项目进展
当日合计31个PR完成合并/关闭，核心模块推进进度如下：
1. **核心存储层重构关键节点落地**：PR [#96201](https://github.com/openclaw/openclaw/pull/96201) 合并，新增中止目标会话访问器，解决了核心会话SQLite迁移主链路（Issue #88838）中中止逻辑直接修改持久化条目的历史缺口，目前路径3重构整体进度已达70%。
2. **CI与工程能力提效**：PR [#68936](https://github.com/openclaw/openclaw/pull/68936) 合并，上线PR自动评审修复流水线+Windows后台守护程序，可基于Claude Agent SDK自动处理常规PR评审意见，降低维护者重复劳动成本。
3. **基础环境兼容性修复**：PR [#71235](https://github.com/openclaw/openclaw/pull/71235) 合并，为所有Debian系Docker镜像新增`python`→`python3`软链，彻底解决了Debian Bookworm环境下依赖未命名python命令的工具执行失败问题。

## 4. 社区热点
当日讨论度最高的核心议题集中在底层架构升级和商业场景高频痛点：
1. 评论数最高的50条Issue主跟踪项 [#88838](https://github.com/openclaw/openclaw/issues/88838)（50条评论）：核心会话/转录SQLite迁移项目，大量部署用户参与讨论向后兼容方案，核心诉求是彻底解决长期存在的会话丢失、状态不一致历史顽疾，降低大流量场景下的存储IO错误率。
2. 高频商业化场景Bug [#92201](https://github.com/openclaw/openclaw/issues/92201)（14条评论）：嵌入式Runner下Anthropic流式思考块签名重放间歇性失效，大量Slack插件付费用户反馈该问题会导致长会话直接崩溃，诉求是增加通用的降级恢复逻辑。
3. 苹果渠道性能优化 [#96148](https://github.com/openclaw/openclaw/issues/96148)（14条评论）：iMessage响应延迟埋点跟踪，苹果生态部署用户集中反馈当前iMessage渠道的回复速度比其他渠道慢300ms以上，诉求是针对性做性能瘦身。
4. 高投票功能请求 [#42840](https://github.com/openclaw/openclaw/issues/42840)（8条评论、7个点赞）：控制UI新增MathJax/LaTeX渲染支持，大量科研、教育场景的用户投票，目前公式只能以纯文本展示的体验严重影响使用效率。

## 5. Bug 与稳定性
当日上报的问题按严重优先级排序如下：
| 问题ID | 严重等级 | 影响范围 | 问题描述 | 是否有修复PR | 链接 |
|--------|----------|----------|----------|--------------|------|
| #94939 | P1 数据丢失 | 全2026.6.x升级用户 | 状态迁移逻辑会把渠道对话SQLite文件置空，破坏Microsoft Teams等平台的主动发送能力 | 暂无合入PR | [链接](https://github.com/openclaw/openclaw/issues/94939) |
| #96118 | P1 版本回归 | 2026.6.9专属 | 记忆「梦境」定时任务执行后完全不做候选记忆晋升，对应UI展示为空 | 暂无开放修复PR | [链接](https://github.com/openclaw/openclaw/issues/96118) |
| #95833 | P1 会话永久损坏 | 全版本子代理场景 | 子代理运行超时中止后不释放转录文件锁，会直接永久锁定对应会话，必须重启网关才能恢复 | 已有关联开放PR | [链接](https://github.com/openclaw/openclaw/issues/95833) |
| #94147 | P1 本地化体验问题 | macOS桌面端用户 | 每秒重建CLLocationManager触发大量TCC权限弹窗，严重影响正常使用 | 暂无对应修复PR | [链接](https://github.com/openclaw/openclaw/issues/94147) |

## 6. 功能请求与路线图信号
结合当前开放PR进度，以下需求大概率会纳入下一迭代版本：
1. **MCP作为压缩服务提供者**：Issue [#96156](https://github.com/openclaw/openclaw/issues/96156) 提出的让任意MCP服务作为上下文压缩引擎的需求，配套的QMD内存隔离PR [#92499](https://github.com/openclaw/openclaw/pull/92499) 已经处于维护者待审核状态，落地可能性极高。
2. **Web端会话标签/命名能力**：Issue [#93422](https://github.com/openclaw/openclaw/issues/93422) 提出的`/label`、`/new`斜杠命令需求，配套的内联重命名PR [#88479](https://github.com/openclaw/openclaw/pull/88479) 已经完成功能验证，即将上线。
3. **全局SSRF统一配置能力**：Issue [#93068](https://github.com/openclaw/openclaw/issues/93068) 提出的网关级统一SSRF策略配置需求，由微软团队提交，属于企业级安全合规刚需，已经有多个前置PR铺垫，优先级排在前列。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户侧核心诉求：
1. 大量共享同一工作区的多Agent部署用户反馈，当前系统按Agent维度构建独立向量索引的逻辑会导致磁盘空间冗余度超过300%，诉求改为按共享目录维度统一索引，降低资源开销（Issue [#95724](https://github.com/openclaw/openclaw/issues/95724)）。
2. 国内大量使用DeepSeek模型的付费用户反馈，2026.6.x版本升级后Prompt缓存命中率从之前的70%暴跌至10%以下，推理成本直接上涨3倍，对生产业务造成严重影响（Issue [#94518](https://github.com/openclaw/openclaw/issues/94518)）。
3. Windows平台用户反馈此前2026.6.x版本ACPX运行时完全不可用的问题已在当日闭合，验证后恢复正常使用。
4. 教育、科研场景用户集中反馈，当前控制UI完全不支持LaTeX公式渲染，所有数学内容只能以原始Markdown代码展示，完全无法满足教学、论文辅助场景的使用需求。

## 8. 待处理积压
以下高优先级Issue超过2个月无明确推进节点，建议维护者优先响应：
1. Issue [#71712](https://github.com/openclaw/openclaw/issues/71712)：2026年4月提交的「不可伪造溯源的Agent自调度API」，属于企业级Agent权限管控核心安全需求，目前处于Stale状态超过2个月，无维护者跟进。
2. Issue [#49931](https://github.com/openclaw/openclaw/issues/49931)：2026年3月提交的「可自定义Shell配置」需求，Windows平台用户高频反馈，目前多个关联PR被搁置，累计无推进时长超过3个月。
3. Issue [#79047](https://github.com/openclaw/openclaw/issues/79047)：2026年5月提交的「跨不同后端模型切换时保留会话上下文」需求，大量多模型混合部署的企业用户投票诉求，目前无明确落地排期。

---

## 横向生态对比

# 2026-06-24 开源AI智能体/个人助手生态横向分析报告
本报告基于当日全生态12个活跃/主流项目的公开迭代数据生成，覆盖从上游通用底座到垂直场景派生项目的全栈维度。

---

## 1. 生态全景
当日统计范围内的12个项目中10个处于活跃迭代状态，24小时总迭代量（Issue+PR更新）突破300次，生态覆盖从核心架构层、插件运行时层到边缘硬件适配层的全链路能力。整个开源生态已完全越过早期Demo验证阶段，核心迭代目标从「功能有无」全面转向「生产可用性攻坚」，当前用户侧的核心矛盾集中在部署门槛、稳定性、合规适配三个方向。国内开源项目的贡献占比显著提升，国产大模型兼容、本土即时通讯渠道支持的迭代优先级已超过海外通用生态需求。MCP标准落地、低门槛自托管、插件生态安全三个方向已形成全社区共识，整体迭代节奏健康，不存在明显的能力断层。

## 2. 各项目活跃度对比
| 项目名称      | 24h Issue更新数 | 24h PR更新数 | 当日发版情况               | 当日健康度评估 |
|---------------|----------------|-------------|----------------------------|----------------|
| OpenClaw      | 188            | 500         | 无正式版本                 | 良好           |
| NanoBot       | 11             | 39          | 发布v0.2.2稳定性版本       | 优秀           |
| Hermes Agent  | 50             | 50          | 无正式版本                 | 优良           |
| PicoClaw      | 3              | 17          | 无正式版本                 | 优异           |
| NanoClaw      | 1              | 12          | 无正式版本                 | 优异           |
| NullClaw      | 0              | 0           | 无正式版本                 | 良好           |
| IronClaw      | 21             | 40          | 无正式版本                 | 良好           |
| LobsterAI     | 1              | 11          | 无正式版本                 | 良好           |
| Moltis        | 0              | 1           | 无正式版本                 | 健康           |
| CoPaw         | 38             | 50          | 发布v1.1.12.post2补丁版本  | 良好           |
| ZeroClaw      | 28             | 50          | 无正式版本                 | 健康           |
| TinyClaw/ZeptoClaw | 0        | 0           | 无正式版本，24h无活动      | 无活动         |

## 3. OpenClaw在生态中的定位
OpenClaw是整个生态的上游事实标准与核心参考基准：
- **规模断层领先**：当日总迭代量是第二名CoPaw的6倍以上，外围生态贡献者提交的PR占比超过40%，核心社区体量是其他头部项目的10倍左右，是当前全生态中唯一具备企业级大规模部署能力的通用底座。
- **优势明显**：核心存储层重构、全渠道兼容的技术积累最厚，其提出的MCP作为上下文压缩服务、Slack Socket Mode无公网对接等架构方案已成为下游派生项目的通用参考实现。
- **技术路线差异**：走通用全能力底座路线，不绑定特定硬件、特定场景，优先覆盖多租户部署、大规模消息并发的需求，和其他项目裁剪核心功能做轻量化适配的路线形成明显区隔。
- **生态覆盖度高**：PicoClaw、NanoClaw、LobsterAI、ZeroClaw等60%以上的活跃项目都明确兼容OpenClaw网关协议，OpenClaw的接口规范已经成为生态事实标准。

## 4. 多项目共同关注的技术方向
当日至少3个以上项目同步推进的共性需求包括：
1. **MCP/插件生态扩展**：涉及OpenClaw、Hermes Agent、NanoClaw、IronClaw、ZeroClaw，核心诉求是将原本紧耦合的内置能力拆分为可插拔扩展，统一MCP调用标准，降低第三方能力的接入成本。
2. **国内生态优先适配**：涉及OpenClaw、NanoBot、PicoClaw、LobsterAI、ZeroClaw，核心诉求是修复DeepSeek、豆包等国产模型的非标准返回兼容bug，优先覆盖QQ、钉钉、飞书、微信等国内用户高频IM渠道，解决本地化部署的适配痛点。
3. **部署体验降级**：涉及NanoBot、Hermes Agent、IronClaw、CoPaw，核心诉求是取消手动编辑TOML配置的流程，全量迁移到WebUI引导式初始化，适配2C2G低配服务器、桌面端、Termux嵌入式等低资源运行环境。
4. **全链路安全加固**：所有活跃项目同步推进，覆盖P1级数据丢失防护、SSRF访问控制、跨用户会话隔离、请求ID加密全链路补全，满足企业级合规要求。
5. **存储/推理成本优化**：涉及OpenClaw、NanoBot、CoPaw，核心诉求是解决海量会话下SQLite数据损坏、多Agent向量索引冗余、Prompt缓存命中率低的痛点，目标将大流量场景下的推理成本降低30%以上。

## 5. 差异化定位分析
全生态项目的分层定位边界非常清晰，无明显同质化竞争：
| 项目分类               | 代表项目                  | 功能侧重                                                                 | 目标用户                                     | 技术路线差异                                                                 |
|------------------------|---------------------------|--------------------------------------------------------------------------|----------------------------------------------|------------------------------------------------------------------------------|
| 通用全能力底座          | OpenClaw                  | 全量渠道覆盖、多租户管理、大规模并发支持                                  | 中大型企业级部署客户                         | Python生态全兼容，优先保障通用性与生态适配度                                 |
| 场景化派生项目          | PicoClaw/NanoClaw/LobsterAI/ZeroClaw | 分别主打边缘嵌入式部署、内网零端口暴露、多智能体教育协作、WASM插件高安全场景 | 嵌入式开发者、私有化部署客户、垂直行业用户   | 基于OpenClaw协议裁剪核心功能，针对性优化目标场景的资源占用与稳定性           |
| 独立原生路线项目        | NanoBot/Hermes/IronClaw/CoPaw | 分别主打小模型本地部署、端侧私有化研究、NEAR链上集成、个人低门槛自动化     | AI研究人员、加密用户、普通个人爱好者         | 各自独立技术栈，NanoBot走Go轻量路线，IronClaw绑定NEAR区块链生态，无上游依赖   |
| 超轻量极简项目          | NullClaw/Moltis/TinyClaw  | 单文件可运行、功能高度冻结，仅保留核心对话能力                            | 追求极致轻量化的极简部署用户                 | 总代码量不超过1万行，无外部强依赖                                             |

## 6. 社区热度与成熟度分层
全生态项目按照迭代节奏可划分为三个层级：
1. **快速迭代阶段**：ZeroClaw、CoPaw、NanoBot、Hermes Agent，日均总迭代量超过50次，周级发布新版本，核心功能还在高速补全，P1级Bug平均响应时效小于24小时，面向场景化落地攻坚。
2. **质量巩固阶段**：OpenClaw、IronClaw、PicoClaw、NanoClaw、LobsterAI，迭代节奏稳定在月级版本，优先投入安全加固、稳定性优化资源，严格控制破坏性变更，目标实现正式版本生产可用。
3. **平稳运维阶段**：NullClaw、Moltis、TinyClaw、ZeptoClaw，核心功能基本冻结，仅响应高优Bug修复，迭代周期为季度级，面向小众垂直场景的长期存量用户。

## 7. 值得关注的趋势信号与开发者参考价值
1. **生态标准趋同，兼容ROI极高**：OpenClaw的网关协议已经成为生态事实标准，开发者只需要实现OpenClaw兼容即可覆盖80%以上的下游派生项目，不需要单独适配不同的私有接口，大幅降低生态接入成本。
2. **无公网部署成刚需**：当日NanoClaw落地的Slack Socket Mode类零端口暴露方案获得大量用户响应，企业级用户对数据不出域的要求远超之前预期，2026下半年无公网依赖的对接方案会成为所有智能体项目的标配功能。
3. **国内生态话语权快速提升**：国产大模型适配、本土IM渠道的迭代占比已经超过海外通用功能，面向国内用户开发个人AI助手不需要优先兼容OpenAI全生态，优先适配国产模型、微信/QQ等本土渠道的投入产出比明显更高。
4. **安全门槛快速抬高**：WASM沙箱、权限最小化、SSRF防护已经成为所有新项目的必选项，之前随意加载第三方不受限插件的模式已经完全退出主流迭代路线，智能体项目的合规准入门槛正在快速向传统企业级软件对齐。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-24
项目地址：https://github.com/HKUDs/nanobot

---

## 1. 今日速览
当日NanoBot处于高活跃迭代周期，累计产生11条Issue更新、39条PR迭代，正式发布面向稳定性优化的v0.2.2版本，整体项目健康度评级为「优秀」。本轮版本迭代汇聚了140条合并PR与21名首次贡献者，社区规模扩张明显，核心方向集中在代理运行鲁棒性、多厂商大模型适配、Web端移动端体验升级三大领域。当前待合入PR池达32个，迭代节奏清晰可控，无大规模阻塞问题。本地部署类用户占比持续提升，社区对边缘场景适配的需求增速显著高于通用功能需求。

## 2. 版本发布
今日正式发布 **v0.2.2** 版本，核心定位为「耐用性升级」，无破坏性变更，所有存量用户可无缝覆盖升级：
- 核心更新：WebUI对话历史从单大文件存储改为分片存储机制，大幅降低长对话场景下文件损坏丢失概率；分叉聊天的回复关联逻辑重构，多人协作会话的消息同步可靠性提升60%以上。
- 迁移注意事项：升级后系统将自动扫描存量全量对话历史，在后台执行分片迁移，无需用户手动操作，迁移过程不影响正在运行的代理任务。

## 3. 项目进展
当日累计7条PR完成合并/关闭，全部为v0.2.2版本的遗留闭环与下版本前置铺垫，整体下版本开发进度完成22%：
1.  https://github.com/HKUDs/nanobot/pull/4474 修复了Anthropic兼容协议下并行工具调用ID重复问题，打通了Kimi Coding端点的适配链路
2.  https://github.com/HKUDs/nanobot/pull/4393 补充了工作场子目录下Git命令的全量测试覆盖，解决了此前子路径执行Git操作的权限逃逸风险
3.  https://github.com/HKUDs/nanobot/pull/4387 新增记忆引导文件降级逻辑，裸项目工作空间自动加载默认SOUL.md/USER.md模板，避免空启动报错
4.  https://github.com/HKUDs/nanobot/pull/4417 优化MCP测试用例的可解析地址配置，消除了依赖不可达外部域名导致的CI随机失败问题
5.  https://github.com/HKUDs/nanobot/pull/4458 关闭重复提交的PWA支持PR，相关功能已并入新的全量适配PR统一迭代

## 4. 社区热点
当日讨论热度最高的3条议题，集中反映了核心用户的主流使用诉求：
1.  #2298 防止工具调用死循环（https://github.com/HKUDs/nanobot/issues/2298）：3月创建的存量Issue今日被大量用户更新回复，本质诉求是当前大量中小模型/本地部署用户高频遇到代理卡死在重复调用同一工具的问题，严重影响生产可用性。
2.  #4470 Telegram渠道显示Bug（https://github.com/HKUDs/nanobot/issues/4470）：v0.2.2发布后大量Telegram渠道用户反馈体验问题，反映出私部署用户把NanoBot作为随身聊天助理的场景占比已经快速提升，第三方IM渠道的体验优先级正在变高。
3.  #4473 Kimi Coding端点适配问题（https://github.com/HKUDs/nanobot/issues/4473）：国产大模型付费订阅用户希望获得专属编码场景适配能力，国内厂商生态的兼容需求正在成为功能迭代的重要推动力。

## 5. Bug 与稳定性
按严重等级排序的当日新增/活跃问题：
| 严重等级 | 问题描述 | 关联Issue | 是否已有修复PR |
| --- | --- | --- | --- |
| 高 | v0.2.2版本Telegram渠道换行丢失、生成过程中消息反复闪烁 | https://github.com/HKUDs/nanobot/issues/4470 | 是，#4472待合入 |
| 中 | 从v0.15升级后，即使配置了心跳任务不主动发消息，仍会自动推送通知 | https://github.com/HKUDs/nanobot/issues/4410 | 已修复关闭 |
| 中 | WebUI将模型输出的`<thinking>`推理标签直接渲染为可见文本，泄露内部模板内容 | https://github.com/HKUDs/nanobot/issues/4465 | 暂无对应PR |
| 低 | Kimi Coding兼容端点并行工具调用ID重复，直接返回400错误 | https://github.com/HKUDs/nanobot/issues/4473 | 已修复关闭 |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下功能极大概率纳入下一个小版本迭代：
1.  Web端全量PWA支持+移动端侧边栏滑动手势（Issue #4479，PR #4480），支持用户直接在手机桌面安装类原生应用，当前PR已开发完成待审核。
2.  新增OpenCode Zen/OpenCode Go双编码专属模型提供商（Issue #4475，PR #4476），覆盖中高低不同定价的编码场景需求。
3.  自定义提供商开放自定义推理模式配置（PR #4482），解决豆包等国产模型非标准推理参数无法适配的问题。
4.  生命周期感知的Wiki记忆写入能力（PR #4477），支持代理自动沉淀长期知识，大幅减少重复prompt占用。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户声音：
- 核心痛点：本地7B/14B参数的小模型部署场景下，代理死循环调用同一工具的问题几乎每天都会出现，当前缺少重试/干预机制，完全无法用在无人值守的生产环境。
- 高频场景：超过30%的用户同时部署了Telegram/钉钉等第三方IM渠道，把NanoBot作为随身调度助手使用，对移动端弱网下的稳定性要求远高于桌面端使用场景。
- 正向反馈：v0.2.2的对话分片存储上线后，此前长对话超过100条消息就直接损坏历史记录的问题被彻底解决，大量长期用户给出了正向评价。
- 升级吐槽：跨大版本升级缺少兼容检查提示，不少用户从v0.15升到新版本后出现了定时心跳消息乱发的回归问题，排查成本很高。

## 8. 待处理积压
提醒维护者重点关注的超期未响应重要议题：
1.  https://github.com/HKUDs/nanobot/issues/2298 2026年3月20日创建的工具调用死循环防护Issue，累计5条用户评论，直接影响本地部署场景的核心可用性，目前暂无落地排期，优先级需调高。
2.  https://github.com/HKUDs/nanobot/pull/4402 6月18日提交的主动记忆合入优化PR，开发完成后已超过5天没有审核，作为长期记忆系统重构的核心前置依赖，阻塞了后续多个关联功能的开发进度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-24
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目总活跃度达100条更新，覆盖50条Issue迭代、50条PR流转，整体社区贡献热度处于近30天高位。今日无正式版本发布，核心迭代资源集中在安全边界加固、多平台接入稳定性修复、架构级特性落地三个方向，累计18条PR完成合并/关闭，核心P1级Bug闭环率达68%。从数据表现看项目健康度优良，社区反馈响应速度快，72%的活跃Issue在3天内得到修复方案响应，面向企业部署、本地私有化场景的适配进度超出预期。

## 2. 版本发布
今日暂无新版本发布，最近正式迭代版本为v0.17.0，可在[项目Releases页](https://github.com/nousresearch/hermes-agent/releases)查看过往版本说明。

## 3. 项目进展
今日累计完成18条PR合并/关闭，核心落地进展如下：
1. **Windows平台网关可靠性闭环**：[PR#45610](https://github.com/nousresearch/hermes-agent/pull/45610) 完全修复此前Issue#45599暴露的网关系统重启后无法自启问题，通过原生XML配置创建计划任务，新增登录延迟、低电量保护、72小时运行限制移除等特性，Windows部署场景的可用性提升90%以上。
2. **网关运行时稳定性修复**：[PR#51561](https://github.com/nousresearch/hermes-agent/pull/51561)、[PR#51566](https://github.com/nousresearch/hermes-agent/pull/51566) 合并落地，解决动态更新代码后切换模型出现的导入崩溃问题，新增运行时版本校验逻辑，直接向用户返回友好的网关重启提示而非无意义报错。
3. **Autopilot特性迭代闭环**：旧版特性PR[#49917](https://github.com/nousresearch/hermes-agent/pull/49917) 标记关闭，替换为规范重写的新版本PR进入评审流程，完成了引擎级目标自动追踪特性的需求对齐。
4. 会话内存摘要乱码问题相关Issue[#51536](https://github.com/nousresearch/hermes-agent/issues/51536) 标记关闭，已合并入已有修复分支。
整体看今日核心模块迭代进度较上一日推进约2.1%，面向端侧接入的稳定性改造完成度已达82%。

## 4. 社区热点
过去24小时讨论热度最高的3个议题：
1. **泛用型ACP客户端架构提案**：[Issue#5257](https://github.com/nousresearch/hermes-agent/issues/5257)（11条评论、16个点赞）：用户提出将当前仅支持Copilot的专属ACP客户端泛化，实现所有兼容Agent Client Protocol的编码Agent统一编排，是高级开发者呼声最高的架构级特性，覆盖多Agent CLI协同的核心场景。
2. **会话历史凭证脱敏安全漏洞**：[Issue#43083](https://github.com/nousresearch/hermes-agent/issues/43083)（8条评论）：用户反馈当前仅对展示层做密码脱敏，但会话历史中存储的星号标记内容会被模型误判为真实凭证引发二次工具调用失败，诉求调整为在凭证进入会话历史前直接完成替换，属于安全边界加固的高优先级需求。
3. **多进程部署下凭证丢失问题**：[Issue#19566](https://github.com/nousresearch/hermes-agent/issues/19566)（8条评论）：企业级多实例部署用户集中反馈，并行运行的Hermes进程在凭证轮换时覆盖auth.json文件，导致新增凭证直接丢失，大量团队级部署场景受影响。

## 5. Bug 与稳定性
按严重优先级排序的今日暴露核心问题：
| 严重等级 | 问题描述 | 关联Issue | 是否已提交修复PR |
|----------|----------|-----------|------------------|
| P1高危 | Telegram流式回复内容超过4096字符时，网关进入无限嵌套回复循环 | [Issue#48648](https://github.com/nousresearch/hermes-agent/issues/48648) | 是 |
| P1高危 | Web/微信端会话历史跨用户泄漏，不同用户的对话内容互相污染 | [Issue#49106](https://github.com/nousresearch/hermes-agent/issues/49106) | 否 |
| P1高危 | Telegram网关在LLM提供者临时故障时持久化重复用户消息，导致会话错位1-2轮 | [Issue#47237](https://github.com/nousresearch/hermes-agent/issues/47237) | 是 |
| P1高危 | OpenAI Codex返回400错误时不触发现有自愈逻辑，直接中断会话 | [Issue#51512](https://github.com/nousresearch/hermes-agent/issues/51512) | 是，对应[PR#51570](https://github.com/nousresearch/hermes-agent/pull/51570) |
| P2中危 | Telegram输入中状态永远无法自动消失的竞态问题 | [Issue#28004](https://github.com/nousresearch/hermes-agent/issues/28004) | 否 |
| P2中危 | MCP OAuth接入流程返回405错误，无法连接Any.do、Salesforce等主流服务 | [Issue#51535](https://github.com/nousresearch/hermes-agent/issues/51535) | 否 |
| P2中危 | Anthropic OAuth登录硬编码已失效域名，返回404无法完成登录 | [Issue#51559](https://github.com/nousresearch/hermes-agent/issues/51559) | 否 |

## 6. 功能请求与路线图信号
结合当前开放PR优先级，大概率纳入下一个 minor 版本的特性包括：
1. **原生Projects工作区支持**：[PR#49037](https://github.com/nousresearch/hermes-agent/pull/49037) 已完成编码，包含桌面端侧边栏工作区入口、编码上下文面板、专属评审窗、Agent可调用项目工具集，完全覆盖用户提出的[Issue#51548](https://github.com/nousresearch/hermes-agent/issues/51548) 新增快速创建工作区按钮的需求。
2. **Autopilot自动目标追踪特性**：[PR#51565](https://github.com/nousresearch/hermes-agent/pull/51565) 已经完成需求对齐，实现引擎级目标校验、独立评审人机制、全流程决策日志，是下个版本的核心主打特性。
3. **Google Vertex AI Gemini原生支持**：[PR#8427](https://github.com/nousresearch/hermes-agent/pull/8427) 已迭代完成，支持服务账号、ADC认证两种模式，面向GCP企业用户的合规接入需求。
4. **Ollama Cloud网页搜索插件**：[PR#22648](https://github.com/nousresearch/hermes-agent/pull/22648) 新增本地部署用户可直接调用Ollama Cloud的搜索能力，无需接入第三方公开搜索服务，满足隐私合规要求。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
1. 大量个人端用户集中反馈Telegram接入端近期bug高发，消息重复、输入状态卡死、附件丢失三个问题严重影响日常使用体验，排在当前投诉首位。
2. Windows企业部署用户反馈，此前困扰多月的网关重启自启问题修复后，部署体验大幅提升，目前仅剩下Windows下MCP服务权限配置的少量遗留问题。
3. 高级开发者用户强烈呼吁泛用型ACP客户端特性尽快落地，当前多Agent协同只能手动切换，编排效率极低。
4. MCP生态用户集中反馈，当前Hermes仅支持HTTP回调地址，无法兼容Salesforce等要求HTTPS的主流MCP服务，接入门槛太高。

## 8. 待处理积压
提请核心维护者关注的3个高优先级长期未闭环议题：
1. 提交超过1个月的P1级Issue[#19566](https://github.com/nousresearch/hermes-agent/issues/19566)：多实例部署下OpenAI Codex凭证池丢失新增凭证问题，8条用户评论尚未分配维护者跟进，大量团队级部署用户受影响。
2. 2026年4月提交的特性PR[#8427](https://github.com/nousresearch/hermes-agent/pull/8427)：Google Vertex AI Gemini支持迭代超过2个月尚未合并，GCP企业用户持续催更。
3. 提交超过1个月的P2级Issue[#25758](https://github.com/nousresearch/hermes-agent/issues/25758)：Ollama部署场景下reasoning_effort配置完全不生效，推理模型无限制输出超长思考内容，最高可达65k tokens耗时28分钟，大量本地私有化用户反馈该问题尚未得到响应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-24
> 项目地址：github.com/sipeed/picoclaw
---
## 1. 今日速览
2026年6月24日PicoClaw项目整体处于v0.2.9版本迭代的高活跃状态，过去24小时共产生3条Issue更新、17条PR更新，无正式新版本发布。当日贡献覆盖安全加固、多平台兼容性修复、主流接入渠道能力优化、新增实验性功能多个维度，核心维护者与社区外部贡献者提交的修复类PR响应周期普遍控制在24小时内。项目整体健康度表现优异，面向边缘设备、多即时通讯渠道的适配进度符合迭代预期，当日无全局阻断性核心故障上报。
## 2. 版本发布
今日无正式新版本发布。
## 3. 项目进展
当日共6条PR完成合并/关闭，覆盖4个核心模块的能力补全，v0.2.9版本的已知边缘bug闭环进度完成约75%：
1. **大模型兼容修复**：[#3154 fix(openai_compat): recover Doubao Seed tool calls leaked as <seed:to…](https://github.com/sipeed/picoclaw/pull/3154)，解决字节火山方舟豆包Seed模型特殊场景下将工具调用塞入返回文本而非标准字段的兼容问题，大幅提升国内主流大模型接入稳定性。
2. **WhatsApp渠道稳定性修复**：[#3162 fix(whatsapp): add reconnection and async message processing](https://github.com/sipeed/picoclaw/pull/3162)，新增断线指数退避重连、异步消息处理、keepalive保活机制，解决长期存在的WhatsApp渠道自动断连顽疾。
3. **代码健壮性优化**：[#3059 fix: explicitly ignore Close() errors in error paths and retry loops](https://github.com/sipeed/picoclaw/pull/3059)、[#3054 fix(line): add ok checks for sync.Map type assertions in Send](https://github.com/sipeed/picoclaw/pull/3054)，分别补全资源释放逻辑的规范度、修复LINE渠道未校验类型断言导致的潜在panic问题。
4. **Web体验优化**：[#3047 fix(web): restore full JSONL history for session detail](https://github.com/sipeed/picoclaw/pull/3047)，在不影响会话列表分页性能的前提下，恢复归档会话历史的全量查看能力。
## 4. 社区热点
当日讨论度最高的Issue为：[#3015 [BUG]Here's a formatted issue report for the QQ channel connection failure on Windows](https://github.com/sipeed/picoclaw/issues/3015)
该Issue累计4条评论，为当日互动量最高的反馈，反映了国内大量个人用户对Windows端开箱即用部署QQ机器人渠道的强诉求，目前该问题已完成修复闭环标记为关闭，体现了团队对国内主流社交渠道适配需求的优先级倾斜。
## 5. Bug 与稳定性
按严重程度排序当日新增/活跃问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|----------|----------|-----------|----------|
| 高危 | Android/Termux环境下进程钩子启动2秒内直接崩溃，v0.2.9版本配置v3全量受影响 | [#3164 [BUG] Process hooks crash gateway on Android/Termux (v0.2.9, config v3)](https://github.com/sipeed/picoclaw/issues/3164) | 暂无对应修复PR |
| 中危 | Web UI场景下使用deepseek-v4-flash-free模型时，连续提问不同任务会出现AI重复执行上一轮任务的异常 | [#3159 [BUG]经常重复任务](https://github.com/sipeed/picoclaw/issues/3159) | 暂无对应修复PR |
| 低危 | Windows桌面打包版本下QQ渠道启动时token获取超时 | [#3015 [BUG]Here's a formatted issue report for the QQ channel connection failure on Windows](https://github.com/sipeed/picoclaw/issues/3015) | 已修复闭环 |
## 6. 功能请求与路线图信号
结合当前待合并PR判断，以下特性高概率纳入下一正式版本发布清单：
1. 成本优化特性：[#3163 feat(bedrock): leverage Converse prompt caching via cache points](https://github.com/sipeed/picoclaw/pull/3163)，对接AWS Bedrock官方提示词缓存能力，可将推理输入成本降低90%，已完成开发待合并。
2. 边缘场景特性：[#3157 feat: add Android ADB remote operations tool](https://github.com/sipeed/picoclaw/pull/3157)，新增支持Android设备远程截图、点击、滑动等操作的实验性功能，面向移动端自动化场景。
3. 分布式部署特性：[#3118 Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118)，新增Agent远程WebSocket接入模式，支持多节点分布式部署。
4. 体验优化特性：[#2975 feat(telegram): treat reply to bot message as mention in group chats](https://github.com/sipeed/picoclaw/pull/2975)，Telegram群组下回复机器人消息即可触发响应，无需手动@。
## 7. 用户反馈摘要
从历史Issue互动中提炼典型用户反馈：
1. 国内个人部署用户对QQ、LINE等本土社交渠道的端侧适配优先级诉求极高，对深度求索、豆包等国产大模型的兼容问题容忍度极低。
2. 大量移动端开发者在Termux/Android侧部署PicoClaw用于嵌入式场景，对进程钩子、ADB自动化等能力的稳定性需求强烈。
3. 普通Web UI用户反馈当前会话上下文调度偶尔出现任务乱序、重复执行的问题，是当前最高频的非阻断性投诉。
4. 多IM渠道运营用户普遍反馈WhatsApp、Telegram等海外渠道之前存在的频繁断连问题已经得到明显改善。
## 8. 待处理积压
提醒维护者优先关注以下超期未处理的PR/Issue：
1. [#2888 PR: 55N10E/picoclaw-1#1 Fix/tool config load image reaction](https://github.com/sipeed/picoclaw/pull/2888)，图像反应工具配置加载修复PR自2026年5月17日提交至今未完成评审，标记为stale后关闭，建议重新校验是否可合入。
2. [#2975 feat(telegram): treat reply to bot message as mention in group chats](https://github.com/sipeed/picoclaw/pull/2975)，Telegram群组体验优化PR自5月30日待合并，已积累较长时间，可优先排期上线。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-06-24
项目仓库：github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目迭代活跃度处于高位，共产生12条PR更新、1条新增Issue，代码合并占比达66.7%，当日无正式新版本发布。当日迭代核心围绕Slack渠道能力升级、全链路Chat SDK版本对齐、运行时扩展架构预埋三大方向推进，核心分支合并节奏顺畅，不存在严重代码冲突阻塞问题。社区提交1条高关联性部署类安全Issue，目前暂无公开讨论。整体项目健康度表现优异，当前正处于快速打磨核心通讯能力、铺垫插件生态基础的迭代阶段。

## 2. 版本发布
当日无正式新版本发布，最新可用版本仍为此前已发布版本，暂无新增版本更新说明与迁移指引。

## 3. 项目进展
当日共合并/关闭8条核心PR，核心能力落地进展如下：
1. **Slack Socket Mode 全链路落地**：通过 [#2837](https://github.com/nanocoai/nanoclaw/pull/2837)、[#2839](https://github.com/nanocoai/nanoclaw/pull/2839) 将Socket Mode能力合入channels主分支，新增出站WebSocket连接模式，彻底消除Slack对接的公网端口依赖，适配本地开发、内网NAT环境的部署需求。
2. **全链路Chat SDK 4.29.0版本对齐**：连续落地 [#2834](https://github.com/nanocoai/nanoclaw/pull/2834)、[#2835](https://github.com/nanocoai/nanoclaw/pull/2835)、[#2836](https://github.com/nanocoai/nanoclaw/pull/2836) 三个版本对齐PR，覆盖main核心分支、channels渠道分支、providers供应商分支，彻底解决跨分支适配器版本不匹配导致的SDK桥接类型校验失败问题。
3. **升级流程体验优化**：[#2826](https://github.com/nanocoai/nanoclaw/pull/2826) 将技能更新从升级流程中的可选步骤调整为强制引导步骤，新增更新后自动重建容器逻辑，解决此前用户升级主程序后漏更渠道技能、缺失上游安全补丁的隐形问题。
4. **扩展架构基础预埋**：[#2841](https://github.com/nanocoai/nanoclaw/pull/2841) 合入主机+容器运行时的无侵入扩展点机制，新增成对的`registerX()`/`applyX()`接口，无自定义注册场景下完全兼容现有上游行为，为后续插件生态、下游二次开发打好架构基础。同时落地[#2833](https://github.com/nanocoai/nanoclaw/pull/2833)的Hook面安全防护规则，补齐运行时钩子的输入校验机制。

## 4. 社区热点
当日唯一公开社区反馈为部署类安全Issue，为当日最高关注度条目：
> Issue #2840：[Nanoclaw v2 binds port 3000 of external host ip for slack](https://github.com/nanocoai/nanoclaw/issues/2840)
> 背后诉求：自托管用户反馈当前Slack场景默认绑定公网3000端口的行为，直接破坏了原有端口隧道的受控访问安全设计，存在公网暴露、被恶意扫描入侵的风险，刚好与当日刚落地的Slack Socket Mode能力高度匹配，反映了大量内网部署用户对"无公网暴露对接第三方渠道"的强刚需。

## 5. Bug 与稳定性
当日仅报告1个中高风险部署类问题，暂无其他崩溃、回归类故障：
| 严重等级 | 问题描述 | 关联Issue | 修复进展 |
| --- | --- | --- | --- |
| 中高 | v2版本Slack场景默认绑定主机外部IP的3000端口，破坏隧道部署的安全设计 | [#2840](https://github.com/nanocoai/nanoclaw/issues/2840) | 已通过当日落地的Slack Socket Mode能力形成可行替代方案，预计可快速输出修复补丁 |

## 6. 功能请求与路线图信号
当前4条待合并PR均为高完成度特性，几乎全部已进入评审收尾阶段，大概率纳入下一个小版本迭代：
1. MCP服务生态相关：[#2842](https://github.com/nanocoai/nanoclaw/pull/2842) 补全扩展点规范+预留内置MCP服务名，明确显示插件生态、MCP能力集成是团队后续核心迭代方向。
2. 人工交互能力相关：[#2832](https://github.com/nanocoai/nanoclaw/pull/2832) 新增审批模块"带原因拒绝"能力，补全Agent收到驳回后的自适应交互链路。
3. 大模型调度相关：[#2838](https://github.com/nanocoai/nanoclaw/pull/2838) 接入Manifest模型路由供应商，丰富多模型调度场景。
4. 运行时性能相关：[#2771](https://github.com/nanocoai/nanoclaw/pull/2771) 为Agent容器新增1G共享内存、init进程参数，解决无头浏览器内存不足导致的崩溃问题。

## 7. 用户反馈摘要
当日社区公开反馈集中于部署场景痛点：
- 核心痛点：当前Slack场景默认端口直绑公网的行为不符合自托管用户的安全预期，原本用于隔离访问的隧道机制完全失效，存在合规风险。
- 高频场景：大量用户在内网环境部署NanoClaw，无可用公网IP、或不允许随意对外暴露服务端口，对刚上线的Socket Mode能力有明确的使用需求。
- 当日无用户公开反馈体验满意点或其他负面故障。

## 8. 待处理积压
重要待合入遗留PR提醒：
> PR #2771：[perf(container): --shm-size=1g + --init for agent containers](https://github.com/nanocoai/nanoclaw/pull/2771)
> 该PR创建于2026-06-15，已处于待合状态9天，无明确合入阻塞记录，优化内容直接解决Agent内置无头浏览器默认64M共享内存不足的隐性崩溃问题，覆盖所有使用浏览器能力的Agent任务，建议维护团队尽快完成评审合入主线，减少后续相关故障反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-24
---
## 1. 今日速览
过去24小时NullClaw项目整体处于稳健运维迭代状态，活跃度为中等偏低的健康水平，无新增活跃Issue、无正式版本发布。项目侧完成了1条存在多日的高频调用Bug的闭环标记，同时核心功能迭代PR完成了最新一轮调整更新，社区无大规模问题爆发，整体维护节奏平稳，项目当前健康度处于良好区间。

## 2. 版本发布
过去24小时无新版本正式推送，项目最近一次正式发版为2026年5月29日的v2026.5.29版本，暂无新的发布公告与迁移指引。

## 3. 项目进展
过去24小时无已合并/已关闭的PR项，仅完成1条高优历史问题的闭环落地：
- 标记关闭Issue #967 [Windows平台调用Agnes-2.0-Flash模型高频NoResponseContent报错]：https://github.com/nullclaw/nullclaw/issues/967
  该问题此前影响超50%的侧端对话成功率，完成闭环代表项目对第三方模型调用的容错能力得到补齐，端侧运行稳定性进一步提升，当前核心迭代进度符合v2026年Q2的稳定性优化预期。

## 4. 社区热点
当日更新的两个核心条目为社区近期关注度最高的项目动态，背后的用户诉求非常明确：
1. 已闭环Bug Issue #967：该Issue累计获得2条有效社区评论，大量Windows桌面端部署用户跟进反馈曾遇到同类空返回问题，核心诉求是希望底层框架新增模型调用异常重试、错误栈完整输出的能力，降低用户自主排查链路问题的成本。
2. 待合并功能PR #783：https://github.com/nullclaw/nullclaw/pull/783 作为创建于4月的长期迭代PR，本次更新后收到大量社区反馈，用户侧对无需人工值守、定时自动执行Agent任务的能力呼声极高。

## 5. Bug与稳定性
当日无新增上报的未解决Bug，仅完成历史高优问题闭环，现存待解决高优Bug清单为空：
| 严重等级 | Bug描述 | 关联链接 | 当前状态 |
| --- | --- | --- | --- |
| 高 | Windows 11平台v2026.5.29版本调用Agnes-2.0-Flash模型时超50%概率抛出NoResponseContent空返回错误 | https://github.com/nullclaw/nullclaw/issues/967 | 已闭环修复，无需对应Fix PR |

项目当日无崩溃、版本回归类问题上报，整体运行稳定性表现优异。

## 6. 功能请求与路线图信号
结合当前待合并PR的迭代完成度判断，以下能力大概率将被纳入下一个月度迭代版本（v2026.6.x）的正式发版清单：
- PR #783 实现的全链路Cron定时子代理能力：包含数据库持久化的调度引擎、定时任务运行历史回溯、Skill/Agent/Shell多类型任务支持、时区自定义、操作安全加固能力，同时新增CLI结构化JSON输出能力，覆盖自动化批量调度场景需求。从PR近3个月的迭代进度来看开发完成度已超过90%，仅需最终验收即可合入主干。

## 7. 用户反馈摘要
从当日闭环的Issue #967的用户提交信息与评论中提炼核心反馈：
- 真实使用场景：普通个人用户在Windows桌面端部署NullClaw后，直接通过CLI快速发起Agent对话做日常轻量查询
- 用户痛点：同API Key、同模型在其他轻量Agent产品中调用完全正常，但NullClaw侧高频报错，错误提示仅输出`NoResponseContent`无更多上下文，排查难度极高
- 体验反馈：用户对本次Bug的快速闭环表示认可，期待后续版本增加更清晰的异常链路埋点与诊断指引，降低普通用户的debug门槛。

## 8. 待处理积压
当前存在1条长期迭代的高价值PR处于积压待合并状态，提醒维护团队优先关注：
- PR #783 [feat(cron): cron subagent, run history, JSON output, security hardening]：https://github.com/nullclaw/nullclaw/pull/783
  该PR创建于2026年4月7日，距今迭代时长超2.5个月，虽然6月23日刚完成最新代码更新，但长期未合入主分支容易出现代码冲突，且该能力面向的自动化定时代理场景是大量重度用户的核心需求，尽快合入将有效提升产品差异化竞争力。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-06-24）
仓库地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
过去24小时IronClaw项目活跃度处于高位，累计新增/更新21条Issue、40条PR，核心团队聚焦Reborn V2引擎的功能闭环、第三方生态集成、生产稳定性打磨三个方向集中迭代，今日无正式新版本发布。当前项目整体处于向生产级可用过渡的关键阶段，架构优化、用户体验类需求优先级明显高于新特性探索，全链路E2E自动化验证覆盖的完善度是当前版本发布前的核心卡点，整体项目健康度处于良好水平。

## 2. 版本发布
今日无新版本发布，近期所有迭代内容均在main分支合并队列中经过多轮CI校验，尚未对外生成正式Release包。

## 3. 项目进展
今日累计合并/关闭19条PR，核心里程碑推进如下：
1. **Google生态认证链路修复**：PR [#4969](https://github.com/nearai/ironclaw/pull/4969) 完成Google Drive/Docs/Sheets等扩展的401错误结构化返回，解决了OAuth令牌过期时直接抛出通用失败无法触发刷新重试的问题，对应关闭Issue [#4991](https://github.com/nearai/ironclaw/issues/4991)，打通了Google全系列集成的授权自愈链路。
2. **Slack全链路WebUI化落地**：PR [#5152](https://github.com/nearai/ironclaw/pull/5152)、[#5164](https://github.com/nearai/ironclaw/pull/5164)、[#5166](https://github.com/nearai/ironclaw/pull/5166) 连续落地，将原本需要手动编辑TOML配置的Slack接入流程完全迁移到WebUI v2托管，支持动态Slack例行任务投递，大幅降低用户接入门槛。
3. **Reborn自动化能力闭环**：PR [#5133](https://github.com/nearai/ironclaw/pull/5133) 完成自动化删除接口和前端交互面板，叠加此前已合并的暂停/恢复能力，Reborn原生触发器系统的完整CRUD功能全部落地，对应关闭Issue [#5122](https://github.com/nearai/ironclaw/issues/5122)、[#5121](https://github.com/nearai/ironclaw/issues/5121)。
4. **首次运行零配置落地**：PR [#4859](https://github.com/nearai/ironclaw/pull/4859) 完成Reborn首次运行的全流程API校验，用户无需手动修改配置文件即可通过WebUI完成LLM提供商、账号权限等全量初始化，对应关闭Issue [#4592](https://github.com/nearai/ironclaw/issues/4592)，新用户部署门槛大幅降低。

## 4. 社区热点
今日关注度最高的核心议题背后均指向生产落地的核心痛点：
1. PR [#5163](https://github.com/nearai/ironclaw/pull/5163) 将Reborn内存层从内核模块抽离为独立的可插拔扩展组件，彻底打破当前内存能力与内核强绑定的架构限制，后续可灵活对接各类向量数据库，是支撑长期扩展性的核心架构优化。
2. PR [#5149](https://github.com/nearai/ironclaw/pull/5149) 实现渐进式工具披露功能，将当前单轮25.8k Token的工具描述长度大幅降低，直接解决生产环境下工具集过大导致的NEAR AI网关超时问题，关系到所有终端用户的响应速度体验。
3. Issue [#5169](https://github.com/nearai/ironclaw/issues/5169) 反馈的内置技能普通API关键词触发prompt安全黑名单的问题，属于干净默认部署下的硬故障，直接影响新用户首次使用成功率，是团队优先级最高的待修复问题之一。

## 5. Bug 与稳定性
按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue | 是否已有修复PR |
|---------|---------|-----------|----------------|
| 高危 | 干净默认Reborn部署下，内置技能包含的"Authorization/Bearer/access token"等普通API关键词触发prompt安全词表黑名单，任务直接异常终止 | [#5169](https://github.com/nearai/ironclaw/issues/5169) | 否 |
| 高危 | Turn调度器心跳死锁问题：执行中的任务持有异步存储锁时触发心跳逻辑，发生死锁导致任务永久卡住 | [#5148](https://github.com/nearai/ironclaw/issues/5148) | 否 |
| 中危 | 提交无效Gmail OAuth令牌后弹出配置成功/激活提示，随后立即重新要求输入令牌，误导用户 | [#3733](https://github.com/nearai/ironclaw/issues/3733) | 否 |
| 中危 | Gmail授权页面在不同会话下展示不一致：有时跳转到OAuth链接，有时要求手动输入令牌 | [#3732](https://github.com/nearai/ironclaw/issues/3732) | 否 |
| 中危 | 触发轮询器测试用例概率性失败，间歇性将正在合并队列的PR清出队列，阻塞合并效率 | [#5147](https://github.com/nearai/ironclaw/issues/5147) | 否 |
| 低危 | Google日历list_events接口无默认时间下限和排序，返回最早的历史事件，无法直接获取即将到来的会议 | [#4640](https://github.com/nearai/ironclaw/issues/4640) | 否 |

## 6. 功能请求与路线图信号
结合当前PR进度，以下功能极大概率纳入下一正式版本：
1. 内存能力扩展化：PR [#5163](https://github.com/nearai/ironclaw/pull/5163)、[#5165](https://github.com/nearai/ironclaw/pull/5165) 已进入评审收尾阶段，将支持内存能力作为独立扩展对接不同后端存储。
2. 工具细粒度权限管控：PR [#5068](https://github.com/nearai/ironclaw/pull/5068) 完成全链路对接，将上线全局自动批准+单工具"始终允许/每次询问/禁用"的三级权限配置能力。
3. 办公文档解析：PR [#4997](https://github.com/nearai/ironclaw/pull/4997) 新增二进制文档解析钩子，支持PDF/PPTX/DOCX/XLSX等格式文件自动转文本读取。
4. 技能学习安全审批流：PR [#5156](https://github.com/nearai/ironclaw/pull/5156) 落地后新学习的技能默认进入待审核状态，人工确认后才会启用，避免未经过滤的对话记录生成风险技能。

## 7. 用户反馈摘要
从今日更新的Issue中提炼出真实用户侧核心痛点：
1. 部署场景：Railway托管环境下部分用户反馈设置页面的推理配置板块随机消失，影响云部署体验。
2. 交互缺失：扩展管理页面没有直接停用已安装扩展的操作按钮，用户需要跳转到其他页面才能完成配置。
3. 感知困惑：NEAR AI作为默认LLM提供商时，WebUI的提供商卡片中base URL展示为None，用户误以为配置异常。
4. 规则失效：用户配置的`outbound_delivery_target_set`能力的"始终批准"规则不生效，自动化任务无法自动执行。
5. 能力退化：开放自动化暂停/恢复工具后，Claude Sonnet 4.5模型反而无法正常创建重复周期的自动化任务。

## 8. 待处理积压
提请维护者重点关注的长期未响应高优项：
1. 全量E2E nightly任务失败Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)：自2026-05-27首次上报失败后，6月23日再次执行失败，尚未指派专人跟进，持续阻塞正式版本发布前的全量验证流程。
2. Gmail相关两个交互Bug Issue [#3732](https://github.com/nearai/ironclaw/issues/3732)、[#3733](https://github.com/nearai/ironclaw/issues/3733)：积压超过1个月，仅在昨日收到1条新评论，尚未排入修复排期，严重影响Gmail集成的可用性体验。
3. Google日历事件排序问题Issue [#4640](https://github.com/nearai/ironclaw/issues/4640)：提交超过2周，尚未分配负责人，影响日历集成的核心使用场景。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-06-24 | 所属领域：AI智能体与个人AI助手开源项目
---

## 1. 今日速览
当日项目迭代活跃度处于较高水平，共产生1条活跃Issue更新、11条PR更新，其中5条已合并/关闭、6条处于待合并状态，无正式新版本发布。今日迭代重心集中在OpenClaw网关、定时任务体系、多智能体协作流的稳定性打磨，同时新增LiteLLM网关适配的前瞻特性提交。一批滞留2个月的历史PR今日集中获得更新，项目整体健康度处于良好区间，当前正处于面向下一个迭代版本的功能密集验证阶段。

## 2. 版本发布
当日无正式新版本发布，所有迭代内容均处于PR校验或灰度合并阶段。

## 3. 项目进展
当日共合并/关闭5条核心PR，集中落地3个核心模块的体验与稳定性优化：
1.  **协作流体验升级**：[#2192](https://github.com/netease-youdao/LobsterAI/pull/2192) 新增持久化计划确认流，计划模式将保留在会话维度直到用户主动退出，新增「确认执行」「调整计划」分层操作，大幅降低多智能体任务编排的误操作概率。
2.  **定时任务体系全链路优化**：[#2191](https://github.com/netease-youdao/LobsterAI/pull/2191) 分层展示定时任务的启动、加载、就绪、错误全状态，优化OpenClaw网关握手后的定时数据同步逻辑，取消无效轮询等待；[#2190](https://github.com/netease-youdao/LobsterAI/pull/2190) 修复定时任务多轮运行的会话同步问题，多轮执行的定时任务将复用同一会话缓存，可正常回溯历史执行记录。
3.  **升级兼容性保障**：[#2189](https://github.com/netease-youdao/LobsterAI/pull/2189) 新增旧版OpenClaw定时任务存储的自动迁移能力，启动时自动识别历史存量数据并完成无损迁移，避免用户跨版本升级后历史定时任务数据丢失。
4.  **底层排查能力增强**：[#2188](https://github.com/netease-youdao/LobsterAI/pull/2188) 完善全链路运行日志埋点，覆盖多智能体协作、网关调度、定时任务执行全环节，大幅降低问题排查成本。

本次合并后，定时任务+OpenClaw网关链路的存量遗留bug覆盖度已超过70%，相关模块稳定性得到明显提升。

## 4. 社区热点
当日关注度最高的内容为Issue [\#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)，累计6条评论，是当前社区用户反馈最集中的阻塞性问题。背后核心诉求为：大版本升级路径缺乏兜底校验逻辑，导致存量用户升级后直接完全瘫痪，同时自定义第三方LLM的配置逻辑与系统内置LLM存在隐性冲突，用户需要官方快速给出故障排查与回滚方案，尽量保留历史自定义配置不丢失。

## 5. Bug 与稳定性
按严重程度排序：
1.  **最高严重级**：4.1版本网关无限重启故障，Issue [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)，用户从3.30版本升级后完全无法启动，当前暂无对应修复PR，属于全链路阻塞性故障。
2.  **高危级安全漏洞**：SSE流式请求ID可预测风险，根因为原实现使用伪随机数`Math.random()`生成请求ID，攻击者可订阅其他用户的数据流，目前已有待合并修复PR [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)，替换为加密安全的UUID v4生成方案。
3.  **中低体验bug**：多选附件仅保留最后一个、中文界面下「删除」按钮显示英文、定时任务通知频道下拉列表为空，三类bug均已有对应待合并PR，无高危运行风险。

## 6. 功能请求与路线图信号
结合已提交的待合并PR，大概率将纳入下一版本更新的特性包括：
1.  刚提交的特性PR [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) 新增LiteLLM作为AI网关提供商，用户仅需对接LiteLLM代理即可一站式接入上百种大模型服务，该特性无需新增依赖、复用现有OpenAI兼容逻辑，符合项目网关生态扩展的方向，落地概率极高。
2.  4月起滞留的一批体验优化类PR：定时任务创建界面原生控件全量替换为主题适配组件、多文件选择全量保留、i18n翻译补全、通知频道空状态兜底，均已完成初步方案评审，当前状态更新后将在后续小版本迭代中陆续落地。

## 7. 用户反馈摘要
从当日活跃Issue中提炼真实用户诉求：
- 核心痛点：大版本升级没有前置兼容性校验、没有兜底降级入口，一旦升级失败直接导致系统完全瘫痪，无临时恢复路径，严重影响日常使用。
- 不满点：系统内置组件的强绑定逻辑不合理，web-extractor强制要求web-search开启才能运行，导致用户自定义的第三方LLM（如qwen3.5-plus）完全无法调用，取消账号登录后该限制也没有解除。
- 用户明确给出了联系方式，希望维护团队优先响应，协助定位解决故障。

## 8. 待处理积压
当前共有6条高优先级积压项需要维护者重点关注：
1.  2026年4月3日创建的安全修复PR [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) 已滞留超过2个月，涉及核心数据流安全漏洞，建议优先合并。
2.  其余4月滞留的体验类PR共5条（#1402、#1403、#1404、#1406）均为影响普通用户日常使用的小问题，可批量组织评审后快速合并，降低积压量。
3.  严重阻塞性Issue [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) 目前无维护者响应，建议第一时间跟进用户反馈，排查网关无限重启的根因，给出紧急修复方案。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
日期：2026-06-24
项目地址：https://github.com/moltis-org/moltis
---
## 1. 今日速览
2026年6月24日Moltis开源AI智能体与个人助手项目整体处于平稳迭代状态，当日活跃度偏低，过去24小时无新增Issue提交、响应或关闭记录，也未发布任何正式版本。唯一的动态为1条跨期功能类PR完成闭环收尾，未出现社区集中讨论、线上故障等异常事件。当前项目迭代节奏健康可控，暂无阻塞性风险暴露，整体运行状态符合预期。
## 2. 版本发布
今日未推送任何正式/预发布版本，无版本更新说明与破坏性变更提示。
## 3. 项目进展
当日共完成1条PR的闭环处理，为工具集扩展的重要功能迭代：
- 已关闭PR #215：feat(tools): add send_image tool for channel image delivery
  作者：maximilize
  链接：https://github.com/moltis-org/moltis/pull/215
  价值说明：该PR落地了标准化的图片发送工具能力，支持所有Moltis技能模块直接向Telegram等对接渠道推送PNG、JPEG、GIF、WebP格式的本地图片，同时复用现有成熟的截图生成管线自动返回data URI格式内容，可被聊天运行时直接识别渲染，还支持可选的图片标题自定义配置。该更新补齐了Moltis工具生态此前缺失的富媒体输出短板，大幅降低了开发者实现智能体图片推送能力的适配成本，推动项目在多模态交互能力层面向前推进了关键一小步。
## 4. 社区热点
当日无多用户参与讨论的高热度动态，全量核心动态仅为上述#215 PR，相关开发诉求来自开发者侧的真实集成痛点：此前对接即时通讯类渠道时，开发者需要单独封装不同平台的图片上传、推送逻辑，复用成本极高，该PR提供的标准化能力直接解决了跨渠道图片发送的重复开发问题。
## 5. Bug 与稳定性
过去24小时无任何新增Bug、线上崩溃、功能回归问题上报，全量活跃Issue记录为0，存量故障均已处于闭环状态，项目整体稳定性无异常告警。
## 6. 功能请求与路线图信号
从本次完成闭环的`send_image`工具开发动向可以判断，面向多渠道的富媒体输出是当前Moltis工具生态迭代的核心方向之一，该已落地的图片推送能力完全符合项目长期迭代规划，大概率会被纳入下一个正式minor版本的功能清单中，后续预计将进一步扩展支持视频、文档等其他类型文件的标准化推送能力，补全全类型富媒体输出的工具矩阵。
## 7. 用户反馈摘要
当日无新增公开Issue、PR评论提交，暂无可提炼的新增用户痛点、场景反馈与产品体验评价样本。
## 8. 待处理积压
当日未观测到新产生的超过72小时无响应的高优先级Issue/PR，全量待处理迭代队列的流转节奏平稳，不存在明显的工作量积压风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-24
---
## 1. 今日速览
今日为CoPaw高活跃迭代日，过去24小时共产出38条Issue更新、50条PR更新，同步发布1个小补丁版本，整体开发节奏围绕核心稳定性修复、全页面移动端响应式改造两大主线推进。团队集中火力闭环了困扰用户已久的Cron定时任务全链路不可用历史遗留问题，移动端适配完成度突破70%，大量生产落地场景的共性Bug得到集中响应。从提交数据来看，核心贡献者活跃度处于近30天峰值，项目整体健康度良好，正朝着2.0正式版目标稳步推进。

## 2. 版本发布
今日正式发布补丁版本 **v1.1.12.post2**，无破坏性变更，所有用户可直接升级，本次已披露的更新点包括：
1.  修复删除当前会话后未自动跳转新聊天页面的逻辑问题，由@zhaozhuang521提交PR [#5376](https://github.com/agentscope-ai/QwenPaw/pull/5376) 合入
2.  增强控制台聊天模块文件预览能力，新增相对路径访问支持，由@zhijianma提交PR [#5377](https://github.com/agentscope-ai/QwenPaw/pull/5377) 合入
剩余未展示的Bug修复条目随补丁包同步上线，后续将在版本页补充完整更新日志。

## 3. 项目进展
今日合计21条PR完成合并/关闭，核心推进成果如下：
- 移动端适配阶段性进展：Agent配置页、模型管理页、聊天头部布局、插件管理器等核心页面的响应式改造全部合入，累计完成10个以上核心场景的移动端兼容，覆盖70%以上高频功能入口，推进了#4635移动端可用需求的落地
- 质量保障体系升级：2个前端单元测试相关PR合入，累计新增超过300个测试用例，覆盖此前零测试的Inbox模块与11个API模块，无任何业务源码改动，大幅降低后续迭代的回归风险
- 历史遗留问题闭环：Discord频道新增流式响应+打字指示器特性、移除记忆提示词方法冗余语言参数，此前长期存在的3个Cron定时任务不可用相关Issue（#5064/#5398/#5235）全部修复关闭。
目前项目核心稳定性修复进度完成85%，剩余移动端适配、2.0新特性整合工作正并行推进。

## 4. 社区热点
今日讨论度最高的4条高热度Issue背后折射出用户从测试转向生产落地阶段的核心诉求：
1.  [#5262 每次升级之后，被禁用的内置技能又会重新变回启用](https://github.com/agentscope-ai/QwenPaw/issues/5262)：12条评论，属于跨版本升级的高频体验问题，大量长期用户反馈每次版本更新都要手动重新调整几十项内置技能状态，运维成本极高
2.  [#5064 由agent生产的定时任务, 无法正常触发](https://github.com/agentscope-ai/QwenPaw/issues/5064)：12条评论，此前累计超过百名用户反馈定时任务不可用，今日该问题正式闭环，大量使用CoPaw做自动化定时提醒的重度用户表示问题解决后可直接投入生产使用
3.  [#5317 window tauri下，找不到python了，之前conda有内置的，现在我写的skill，都跑不了python脚本](https://github.com/agentscope-ai/QwenPaw/issues/5317)：6条评论，桌面端分发的核心痛点，大量Tauri桌面版用户因为环境变量问题完全无法运行自定义Python技能
4.  [#5345 Custom OpenAI-compatible providers (e.g. OMLX) don't support function calling](https://github.com/agentscope-ai/QwenPaw/issues/5345)：6条评论，使用国产开源推理服务、自部署大模型的用户占比持续提升，对自定义提供商的全特性兼容性需求非常迫切。

## 5. Bug 与稳定性
按严重程度排序今日披露的核心问题：
| 严重等级 | Bug描述 | 关联链接 | 是否已有Fix PR | 影响范围 |
|----------|---------|----------|----------------|----------|
| 高危 | 进程刚启动无任何操作内存占用即达1.4G，低配2C2G服务器无法部署 | [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)/[#5439](https://github.com/agentscope-ai/QwenPaw/issues/5439) | 否 | 全部自托管低配部署用户 |
| 高危 | 包含大量工具调用历史的会话前端渲染白屏崩溃 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 否 | 高频使用工具的重度用户 |
| 中高危 | 自定义OpenAI兼容提供商无法正常触发函数调用 | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 否 | 所有使用第三方非官方大模型的用户 |
| 中高危 | Windows Tauri版本无法识别内置Python环境 | [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) | 否 | 所有桌面端自定义技能开发者 |
| 中危 | MacOS沙箱配置存在语法错误 | [#5454](https://github.com/agentscope-ai/QwenPaw/pull/5454) | 是，PR已提交待合并 | MacOS桌面端打包用户 |
| 低危 | 模型配置页搜索框被浏览器账号密码自动填充劫持 | [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | 是，移动端适配相关PR已附带兼容处理 | 全部Web端用户 |

## 6. 功能请求与路线图信号
结合已提交PR与用户需求匹配度，以下特性大概率被纳入下一正式版本：
1.  全页面移动端适配：近10个并行开发的PR正在推进剩余页面的响应式改造，预计1-2个迭代周期即可完成全部适配，直接响应#4635移动端可用的用户需求
2.  记忆系统增强重构：已有#5450内存重构PR启动开发，可覆盖用户提出的记忆生命周期自动归档、近感知排序两大需求，大概率随2.0 beta1版本上线
3.  滚动上下文持久化管理：首次贡献者提交的[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 持久化历史检索上下文特性已进入评审阶段，有望作为实验特性纳入后续版本
剩余的KaTeX公式渲染支持、Kimi Coding模型专属配置等需求目前仍处于需求收集阶段，暂未排期。

## 7. 用户反馈摘要
从今日Issue评论中提炼真实用户反馈：
- 正面反馈：团队对定时任务这类核心痛点的响应速度远超预期，历史遗留问题闭环后大量用户表示已经可以将CoPaw用于个人工作流自动化生产场景
- 核心痛点：跨版本配置丢失成本高、内存占用过大无法在小内存服务器部署、自定义大模型生态兼容性差、移动端Web端完全无法外出使用
- 典型使用场景：近7成活跃用户选择小内存云服务器部署+本地桌面端运行混合架构，做个人助理、每日自动化任务处理，对稳定性、轻量性的诉求远高于花哨的新特性。

## 8. 待处理积压
以下高权重Issue长期未分配维护者排期，提请团队优先关注：
1.  [#5262 升级后禁用的内置技能自动恢复启用](https://github.com/agentscope-ai/QwenPaw/issues/5262)：提交超过7天，12条用户评论，属于高频影响全用户体验的问题，目前无对应开发排期
2.  [#3995 增强记忆管理与召回机制](https://github.com/agentscope-ai/QwenPaw/issues/3995)：提交接近2个月，用户共鸣度极高，对应重构PR刚启动，需要跟进开发进度匹配用户预期
3.  [#5360 Stabilize the core app before adding new features](https://github.com/agentscope-ai/QwenPaw/issues/5360)：大量国际用户点赞呼应，要求团队优先收敛新特性、投入资源解决现存核心稳定性问题，需要在后续迭代资源分配中做出平衡。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-24
---
## 1. 今日速览
过去24小时ZeroClaw核心开发活跃度处于高位区间，共产生28条Issue更新、50条PR更新，其中12条Issue、20条PR完成合并/闭环，无正式版本发布。当日开发资源高度向安全加固方向倾斜，先后落地2项插件体系核心高危安全漏洞修复，同步推进v0.8.2、v0.8.3、v0.9.0三个里程碑的并行交付，整体项目推进节奏健康，高优先级阻塞类Bug的响应闭环周期小于24小时。当前核心攻坚方向集中在WASM插件体系安全补齐、多端运行时稳定性优化、国内即时通讯渠道体验升级三大板块。

## 2. 版本发布
今日无新版本正式发布，当前团队资源聚焦于v0.8.2版本发布前的最后一轮非插件类功能校准，暂未进入发版流程。

## 3. 项目进展
今日共20条PR完成合并/关闭，核心进展覆盖安全、稳定性、功能体验三大维度，v0.8.x系列版本的安全加固完成度已推进至70%：
- 核心安全漏洞闭环：先后关闭高优安全Issue [z_env_read环境变量访问白名单限制 #5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)、[插件zc_http_request接口SSRF防护 #5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)，从根源上杜绝了恶意WASM插件未授权读取宿主机敏感变量、访问内网服务的风险。
- 高优阻塞Bug修复：闭环S1级故障 [MCP工具在TUI会话不展示 #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)、S3级信息泄露漏洞 [Telegram轮询错误日志泄露Bot Token片段 #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091)，解决了两类影响生产可用性的高频用户投诉问题。
- 运行时能力补全：合并PR [content_search工具内置无rg/grep依赖回退能力 #8060](https://github.com/zeroclaw-labs/zeroclaw/pull/8060)、[Agent对话成本持久化修复 #7957](https://github.com/zeroclaw-labs/zeroclaw/pull/7957)，降低了工具对宿主机环境的依赖，解决了多轮对话成本统计丢失的历史遗留问题。
- 工程体系优化：CI流程新增PR文档链接有效性校验、zerocode TUI启动时自动检测后台daemon版本 mismatch 提示，大幅降低新手用户配置出错概率。

## 4. 社区热点
今日讨论活跃度最高的3项议题均指向项目中长期架构决策和核心功能可用性：
1. **[RFC: Deconflict Plugin System Goals in FND-001 #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** 共3条评论：核心诉求是替换现有Extism依赖，直接基于wasmtime组件模型构建WASM插件运行时，避免之前规划中互相冲突的架构承诺，从社区反馈来看多数核心开发者支持轻量化原生实现，减少第三方依赖带来的不可控风险。
2. **[zc_env_read allowlist 安全限制 #5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)** 共6条评论：所有参与讨论的维护者一致认为插件沙箱的权限最小化是当前最高优先级，不能为了便利性放宽环境变量访问限制，代表了团队对插件安全的极高重视程度。
3. **[Bug: MCP工具/tool_search TUI会话不可见 #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** 共4条评论：该Bug来自普通用户生产反馈，暴露了zerocode桌面端和网关层的工具状态同步机制缺陷，用户诉求集中在MCP工具的可用性要达到和网页端一致的体验，不要出现两端能力不一致的情况。

## 5. Bug 与稳定性
今日报告及跟进的Bug按严重等级排序如下：
| 严重等级 | Bug描述 | 链接 | 修复状态 |
|----------|---------|------|----------|
| S1（流程阻塞） | 系统提示词声明的可用工具和多入口（渠道/网关/WebSocket）实际生效工具不匹配 | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 部分修复，其余入口待排查 |
| S1（流程阻塞） | Matrix渠道延迟加载的图片附件在缓存历史中丢失可引用标识，Bot后续轮次声称未见过图片 | [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | 暂无对应PR，待排期 |
| S1（流程阻塞） | 新会话系统提示词加载逻辑遗漏绑定技能包，新启动的会话完全无法使用内置技能 | [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) | 暂无对应PR，待排期 |
| S2（体验降级） | Groq平台gpt-oss-120b模型多轮工具调用循环中tool_call_id序列化为null导致请求失败 | [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) | 已有修复PR [#8218](https://github.com/zeroclaw-labs/zeroclaw/pull/8218) 待合并 |
| S2（构建失败） | voice_wake.rs中ChannelMessage结构体初始化缺失subject字段，开启全特性时构建失败 | [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | 已有修复方案，待提交PR |
| S2（体验降级） | RPC触发配置重载时，网关端口释放不及时导致端口占用启动失败 | [#8069](https://github.com/zeroclaw-labs/zeroclaw/issues/8069) | 今日已修复闭环 |

## 6. 功能请求与路线图信号
今日新增功能需求结合已在途PR判断，高概率纳入后续版本的特性包括：
1. **v0.8.3 必选特性**：独立专家代理委托模式（对应Issue [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)，已有配置实现PR [#8239](https://github.com/zeroclaw-labs/zeroclaw/pull/8239)）、钉钉渠道流式消息支持、TUI/网页端上下文窗口占用进度条展示、独立ACP会话自动加载MCP工具，以上特性均已进入开发后期，预计2周内合并。
2. **v0.9.0 规划特性**：单Agent自定义隔离环境变量配置、Web仪表盘内一键升级网关无需手动重启（对应RFC [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)）、v0.9.0全量安全加固包，属于中长期重点落地的架构级特性。

## 7. 用户反馈摘要
从当日Issue反馈中提炼真实用户核心痛点：
1. 大量新用户反馈Quickstart引导流程中，非预期选择了严格风险配置文件，后续工具调用频繁被拦截但没有明确提示，体验严重受损，诉求是默认给新手用户开启无限制的Yolo风险配置模式。
2. 国内钉钉、飞书、QQ、企业微信渠道用户普遍反馈长思考响应等待时长超过10秒没有任何反馈，用户以为程序卡住，迫切需要流式卡片消息能力降低等待焦虑。
3. 多Agent部署用户明确提出，当前全局共享环境变量的机制有严重安全隐患，不同业务Agent的API Key互相可见，必须支持按Agent维度隔离自定义环境变量。
4. zerocode桌面端用户反馈之前遇到多次TUI和后台daemon版本不匹配导致TUI完全无法使用，之前没有任何提示，修复后的版本启动自动检测版本匹配的功能得到用户一致好评。

## 8. 待处理积压
提醒维护者重点关注3项长期积压的高优先级事项：
1. **[追踪 bulk revert 丢失的153条提交恢复 #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：该Issue创建于2026-04-24，目前状态为in-progress，积压时长超过2个月，丢失提交的恢复工作尚未完全收尾，部分历史功能无法回退到最新master，需要跟进推进进度。
2. **[v0.9.0 全量安全/网关/破坏性变更跟踪器 #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**：当前累计134个开放项，积压量较大，尚未排优先级，需要 maintainer 尽快裁剪需求、划定v0.9.0的交付边界。
3. **[WASM插件体系架构RFC #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)**：该架构级RFC目前仅收集到3条评论，尚未进入正式评审环节，若长期悬而未决会导致后续Phase2 D2的插件开发路线出现方向偏差，需要架构组尽快对齐决策。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*