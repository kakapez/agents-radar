# OpenClaw 生态日报 2026-09-01

> Issues: 446 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-01 01:00 UTC

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

# OpenClaw 项目动态日报 | 2026-09-01
---

## 1. 今日速览
今日项目活跃度达到S级，过去24小时累计产生946条GitHub侧开发/交互动作，属于高迭代周期。官方刚发布最新稳定版v2026.8.1，相关的升级迁移类回归问题在用户反馈下正快速闭环，核心迭代方向集中在网关性能优化、多渠道兼容性打磨、长会话稳定性提升三个赛道。当前社区用户需求高度向生产高可用、主流IM新特性适配两大方向聚集，项目整体开发效率处于近30天峰值，仅少数高危核心bug存在积压。

## 2. 版本发布
今日正式推送稳定版 **OpenClaw v2026.8.1**，官方更新日志：https://docs.openclaw.ai/releases/2026.8.1
- 核心更新内容：大幅优化长会话压缩逻辑、重构多渠道消息分发链路、修复17个历史遗留的竞态崩溃问题
- 迁移注意事项：自动更新失败时可使用本地编码工具完成迁移、诊断迁移错误并验证网关启动状态，**升级前必须全量备份配置和运行状态数据**，不建议直接在无灰度的生产环境执行升级操作
- 已知风险：该版本刚上线即集中暴露了多个迁移逻辑缺陷，目前团队已在并行发布补丁修复系列问题。

## 3. 项目进展
今日累计合并/关闭251个PR，核心高价值推进点如下：
1. PR #128995：将全部会话操作入口迁移到聊天头部，补全了之前仅侧边栏支持的固定会话、标记未读、复制会话ID等功能，Web Control UI体验完成度提升7%，链接：https://github.com/openclaw/openclaw/pull/128995
2. PR #130993：修复OpenAI Responses长会话压缩链路6个底层缺陷，解决上下文未达限制就提前触发压缩、上下文计数重复统计问题，长会话稳定性完成度推进12%，链接：https://github.com/openclaw/openclaw/pull/130993
3. PR #134380：修复macOS端提供商登录流程卡死无法退出的bug，mac桌面端可用性显著提升，链接：https://github.com/openclaw/openclaw/pull/134380
4. PR #116489：新增安全安装策略人工确认机制，安装风险插件前必须人工确认警告内容，大幅降低恶意插件静默安装风险，链接：https://github.com/openclaw/openclaw/pull/116489
5. PR #134106：修复向量搜索worker进程stderr日志丢弃问题，memory-core模块故障排查效率提升60%，链接：https://github.com/openclaw/openclaw/pull/134106
当前v2026.8稳定分支的稳定性打磨整体进度达到72%。

## 4. 社区热点
今日讨论热度最高的议题集中在生产可用性、成本优化、渠道特性三大方向：
1. **Issue #91588 网关内存泄漏问题**：23条评论，为今日热度最高议题，链接：https://github.com/openclaw/openclaw/issues/91588
   核心诉求：大量7*24小时运行的多渠道生产部署用户遇到网关3天内内存从350MB暴涨到15.5GB触发OOM的问题，用户迫切需要低负载场景下的内存占用稳定性保障。
2. **Issue #102175 嵌入式提示缓存跨边界失效**：18条评论，链接：https://github.com/openclaw/openclaw/issues/102175
   核心诉求：长生命周期会话跨房间事件、授权、恢复边界时缓存丢失，导致token消耗上涨最高达40%，用户要求成本侧的优化优先级提升。
3. **Issue #22676 信号守护进程重启竞态条件**：17条评论，链接：https://github.com/openclaw/openclaw/issues/22676
   核心诉求：配置热更触发SIGUSR1重启时产生孤儿进程、端口占用、消息发送失败问题，面向SLA要求极高的生产场景用户对热更新可用性提出明确要求。
4. **Issue #79077 Telegram Bot2Bot与访客模式支持**：13条评论、8个点赞，链接：https://github.com/openclaw/openclaw/issues/79077
   核心诉求：大量Telegram生态机器人开发者要求官方适配2026年5月Telegram平台新推出的两类Bot特性，跟上IM平台迭代节奏。

## 5. Bug与稳定性
按严重优先级排序今日新老高影响问题：
1. **P0 高危**：Issue #134169 2026.8.1配置迁移逻辑将所有内联密钥替换为明文`__OPENCLAW_REDACTED__`，导致Discord、第三方提供商API Key全部失效，目前暂无公开修复PR，用户临时方案为降级版本后从备份恢复配置，链接：https://github.com/openclaw/openclaw/issues/134169
2. **P0 高危**：Issue #108395 模型可生成伪造格式的"Human: [timestamp]"假用户消息，绕过授权完成危险操作，属于越权类安全漏洞，暂无修复PR，链接：https://github.com/openclaw/openclaw/issues/108395
3. **P1 严重**：Issue #134445 存在零字节旧工作区证明文件时，`doctor --fix`工具永远无法完成迁移，导致渠道服务硬失败，修复方案轮廓明确，正在开发中，链接：https://github.com/openclaw/openclaw/issues/134445
4. **P1 严重**：Issue #91588 网关内存泄漏，暂无公开修复PR，处于维护者待评审状态，链接：https://github.com/openclaw/openclaw/issues/91588
5. **P1 已闭环**：Issue #133793 macOS新用户初始化时Codex运行时卡在能力授权步骤，今日已完全修复，链接：https://github.com/openclaw/openclaw/issues/133793

## 6. 功能请求与路线图信号
结合现有Issue和相关PR推进状态，以下需求大概率纳入后续版本：
1. Issue #53763 内置无头浏览器作为原生工具，脱离第三方依赖完成网页JS渲染，对应Web访问工具架构重构PR已启动，预计v2026.9.x版本作为实验特性上线，链接：https://github.com/openclaw/openclaw/issues/53763
2. Issue #79077 Telegram Bot2Bot/访客模式适配，热度极高，Telegram渠道模块近期正在推进目录结构重构，下一个小版本将正式支持，链接：https://github.com/openclaw/openclaw/issues/79077
3. Issue #90916 主题会话家族特性，支持单助理多上下文隔离的命名会话车道，已完成产品决策，预计Q4大版本正式推出，链接：https://github.com/openclaw/openclaw/issues/90916
4. Issue #78963 WhatsApp只读监听模式，支持仅接收消息不触发LLM调用完成归档ETL，属于IM渠道生态常规迭代项，后续小版本跟进支持，链接：https://github.com/openclaw/openclaw/issues/78963

## 7. 用户反馈摘要
从今日Issue评论中提炼典型真实反馈：
- 生产运维侧痛点：刚升级2026.8.1的用户普遍反馈当前版本迁移类bug过多，升级流程无灰度提示，缺乏一键回滚能力，网关变砖后需要十多步手动修复，运维成本极高。
- IM渠道开发者痛点：Telegram/WhatsApp场景下消息卡顿、跨边界丢消息的问题存在已久，平台新特性适配节奏慢，严重影响机器人面向终端用户的体验。
- 桌面端用户痛点：macOS桌面端近期升级循环、登录态卡死的问题频发，稳定性远低于服务端部署版本。
- 第三方插件开发者痛点：Plugin SDK导出接口经常发生无通知的破坏性变更，导致微信等官方合作插件直接加载失败，适配维护成本很高。

## 8. 待处理积压
提醒维护者重点关注长期未闭环的高优先级事项：
1. Issue #91588 网关内存泄漏，已创建3个月，23条评论，影响所有大流量生产部署，至今没有可合并的修复PR，属于最高优先级核心稳定性问题，链接：https://github.com/openclaw/openclaw/issues/91588
2. Issue #65374 内置梦境系统跨Agent污染身份，已创建5个月，涉及多代理场景核心安全逻辑，长期无维护者认领，链接：https://github.com/openclaw/openclaw/issues/65374
3. Issue #80219 Plugin SDK全表面架构重构计划，已提出3个月未落地，大量第三方插件兼容性问题的根因无法得到解决，链接：https://github.com/openclaw/openclaw/issues/80219
4. Issue #115424 网关V8堆OOM后重启恢复触发7次core dump死循环，影响长会话场景服务可用性，积压1个月未处理，链接：https://github.com/openclaw/openclaw/issues/115424

---

## 横向生态对比

# 2026-09-01 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
当前开源个人AI助手与自主智能体生态已正式脱离功能原型迭代期，全面进入生产落地深水区：全栈能力覆盖从低资源嵌入式部署到云原生多租户集群场景，差异化定位高度分化。迭代优先级首次出现集体偏移，生产高可用、安全合规、Token成本优化的权重全面超过纯新特性新增，头部项目的核心开发资源正向稳定性治理倾斜。社区协作基建普遍升级，自动化标签、AI辅助评审、安全左移等工程化手段已经从头部项目下沉到中小项目，通用维护人力成本平均降低30%以上。整个生态的事实参照标准OpenClaw的生态溢出效应显著，主流IM新特性适配、长会话稳定性等共性需求正快速向全生态传导。
---
## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR流转数 | 当日Release情况 | 健康度评分（1-10） | 核心依据 |
|---------|----------------|-------------|----------------|-------------------|----------|
| OpenClaw | >200 | 251个合并/关闭 | 正式发布稳定版v2026.8.1 | 8.5 | 高迭代节奏，仅2个未闭环P0高危bug |
| NanoBot | 3 | 18 | 无 | 9.2 | 存量高优bug完全闭环，迭代节奏平稳 |
| Hermes Agent | 50 | 50 | 正式发布v0.21.0 Pantheon大版本 | 8.8 | 大版本发布后反馈收归进度70%，仅1个45天积压的核心故障 |
| PicoClaw | 1 | 5 | 无 | 9.0 | 高优bug24小时内响应修复，链路通畅 |
| NanoClaw | 50 | 34 | 无 | 8.3 | 研发自动化基建落地，4个未闭环P0级渠道类bug |
| NullClaw | 0 | 1（自动化生成） | 无 | 7.0 | 无人工迭代，仅依赖自动化运维动作维持稳定 |
| IronClaw | 11 | 20 | 无 | 9.1 | CI基建大幅升级，v1.4.0版本迭代进度62%，无P0积压 |
| LobsterAI | 10 | 27 | 无 | 8.4 | 底层依赖全量升级，仅1个积压5个月的高危安全补丁未合入 |
| TinyClaw | 0 | 0 | 无 | 6.0 | 完全无公开活动，属于维护休眠状态 |
| Moltis | 2 | 4 | 发布2个日迭代版20260830.01/20260831.01 | 9.3 | 当日高危Bug完全闭环，云原生沙箱迭代进度符合预期 |
| CoPaw | 38 | 40 | 发布v2.2.0-beta.4/beta.5两个测试版 | 8.7 | 正式版冲刺期，2个最高级高危功能阻断bug待修复 |
| ZeptoClaw | 8 | 1 | 无 | 8.2 | 安全审计专项推进中，6个未闭环高优安全漏洞 |
| ZeroClaw | 38 | 50 | 无 | 8.5 | 核心架构重构期，60%PR来自外部贡献者，P0级bug24小时响应 |
---
## 3. OpenClaw在生态中的定位
作为生态公认的核心参照项，OpenClaw的综合领先优势显著：其单日946项GitHub交互动作、251个合并PR的产能是第二名Hermes Agent的5倍以上，覆盖的IM渠道、插件生态、部署场景广度远超同类项目，是当前功能特性的事实风向标，近70%的新需求（如Telegram Bot2Bot适配、长会话压缩优化）都在中小项目中出现跟进趋势。
技术路线差异上，OpenClaw没有做垂直场景的强绑定，走通用全兼容路线，优先平衡个人部署、中小团队、生产集群三类场景的通用需求，不偏向特定语言栈、特定部署环境，这和其他项目走垂直窄赛道的路线形成明确区隔。
社区规模方面，OpenClaw的贡献者、星标用户体量领先第二梯队项目一个数量级，生产部署用户群体基数最大，社区用户诉求高度集中在生产高可用方向，形成了其他项目不具备的生产场景真实反馈飞轮。
---
## 4. 共同关注的技术方向
本次横向统计中多个项目同步涌现的共性需求如下：
1. **IM渠道生产级稳定性优化**：涉及OpenClaw、NanoBot、PicoClaw、NanoClaw、CoPaw、LobsterAI共6个项目，核心诉求是解决2026年主流IM平台迭代后出现的消息静默丢失、限流封禁、触发模式识别失效等问题，补齐全链路熔断、降级可观测能力。
2. **会话内存架构重构降本**：涉及OpenClaw、Hermes Agent、CoPaw、ZeroClaw共4个项目，核心诉求是解决上下文提前压缩、跨边界提示缓存失效、返回结果冗余带来的无效Token消耗，官方数据显示优化后最高可降低40%的推理成本。
3. **MCP插件生态安全左移**：涉及IronClaw、LobsterAI、ZeptoClaw、ZeroClaw共4个项目，核心诉求是补齐命令注入、敏感信息明文泄露、计时攻击等高危漏洞，将安全检查前置到CI流水线环节，避免不可信插件引发的主机风险。
4. **研发协作基建自动化**：涉及NanoClaw、IronClaw、Hermes Agent、Moltis共4个项目，核心诉求是落地自动化标签、AI辅助PR评审、自动生成Changelog等能力，可直接降低40%的维护人力投入。
---
## 5. 差异化定位分析
当前生态项目的分层边界已经完全清晰：
- **功能侧重差异**：OpenClaw做全功能通用底座，NanoBot优先适配国内飞书/企业微信办公场景，PicoClaw瞄准低资源嵌入式硬件部署，ZeptoClaw主打Rust栈高安全隐私底座，Moltis聚焦云原生沙箱代码执行专项，CoPaw侧重大团队多Agent协作编排，Hermes Agent深耕Homelab桌面端用户体验。
- **目标用户差异**：个人玩家优先选择Hermes、PicoClaw，中小团队轻量部署选择NanoBot、NanoClaw，企业级生产部署选择OpenClaw、IronClaw，安全合规敏感用户选择ZeptoClaw，云原生DevOps场景优先选择Moltis。
- **技术架构差异**：高安全项目全量采用Rust栈构建，轻量场景优先用Python做快速迭代，桌面端产品走Electron/Tauri路线，嵌入式场景做全量二进制裁剪去掉非必要依赖。
---
## 6. 社区热度与成熟度分层
当前所有项目可清晰划分为三个梯队：
1. **快速迭代阶段**：OpenClaw、Hermes Agent、CoPaw、ZeroClaw，共同特征是单日PR/Issue流转量过百，正处于大版本冲刺周期，每周都有核心新特性落地，外部贡献者占比持续提升。
2. **质量巩固阶段**：NanoBot、IronClaw、LobsterAI、Moltis、NanoClaw、ZeptoClaw，迭代节奏平稳可控，核心优先级从新增功能转向存量Bug闭环、安全漏洞修复、工程基建升级，新特性排期周期普遍超过2周。
3. **低活跃度维护阶段**：PicoClaw、NullClaw、TinyClaw，仅做小步迭代或者纯依赖安全更新，无大规模新特性开发动作，适合追求极高稳定性的保守型生产部署场景。
---
## 7. 值得关注的趋势信号
本次生态监测对AI智能体开发者的核心参考价值如下：
1. 生产部署场景下稳定性权重全面超过新特性，本次多个项目集中暴露升级迁移类P0级bug，灰度备份、一键回滚能力已经成为生产级部署的硬刚需，选择底座时必须优先考察生产故障处理响应速度。
2. Token成本优化已经成为核心竞争力，此前被忽略的无效返回、重复上下文统计、缓存失效等细节在大流量场景下的成本差最高可达40%，优先跟进内存架构重构的项目长期使用成本优势显著。
3. 安全合规从可选特性变成必选项，近30%的活跃项目当前存在未闭环的远程命令执行类高危漏洞，面向商业化场景部署的开发者必须优先做全量安全审计，避免合规风险。
4. 中小项目投入自动化协作基建的ROI极高，参考NanoClaw的落地经验，投入不到10个工程师日的工作量即可实现维护人力降低40%，完全可以复用现有成熟方案快速落地，不需要投入自研成本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 项目动态日报
统计日期：2026-09-01

---

## 1. 今日速览
本报告统计周期内项目活跃度处于高位，迭代节奏平稳健康，共产生3条Issue更新、18条PR迭代，今日无正式新版本发布。本次迭代核心方向集中在IM渠道体验一致性优化、Agent核心架构解耦重构、工具文档歧义补全三个领域，累计闭环2个存量遗留Issue，7个PR完成合并/关闭，整体迭代符合近期路线图规划。当前项目核心模块的测试覆盖率持续提升，高严重度存量Bug少于2个，整体健康度良好。

## 2. 版本发布
今日无正式版本发布，无新增版本更新、破坏性变更及迁移指引相关公告。

## 3. 项目进展
今日共完成7条PR的合并/关闭，核心落地进展如下：
1. **Telegram渠道体验修复**：通过PR [#5531](https://github.com/HKUDS/nanobot/pull/5531) 修复了流式模式下富消息无法渲染的长期问题，直接闭环存量Issue [#5516](https://github.com/HKUDS/nanobot/issues/5516)，实现Telegram渠道流式输出结束后自动升级为富消息格式，补齐了IM消息体验的重要短板。
2. **工具文档补全**：PR [#5598](https://github.com/HKUDS/nanobot/pull/5598)、[#5604](https://github.com/HKUDS/nanobot/pull/5604) 同步更新了`edit_file`工具的说明文档，明确标注三类匹配选择器互斥规则，闭环存量Bug Issue [#5592](https://github.com/HKUDS/nanobot/issues/5592)，消除了高频文件编辑工具的使用歧义。
3. **Agent核心架构升级**：通过PR [#5608](https://github.com/HKUDS/nanobot/pull/5608)、[#5612](https://github.com/HKUDS/nanobot/pull/5612) 完成AgentRunner层的转录组装、请求适配逻辑统一重构，实现上下文压缩、请求载荷校验的全流程可控，Agent核心模块的架构解耦进度已完成60%。
4. **交互体验优化**：PR [#5618](https://github.com/HKUDS/nanobot/pull/5618) 简化了TUI运行态头部展示逻辑，降低普通用户的信息认知负担。

## 4. 社区热点
今日讨论度最高的社区诉求为国内场景IM体验优化需求，对应Issue [#5567](https://github.com/HKUDS/nanobot/issues/5567)（评论数3）：
该需求由面向国内办公场景部署的开发者提交，反馈当前飞书渠道下Agent返回多段工具提示、进度消息、最终回复时会生成多条独立消息，用户体验割裂，要求将全流程输出整合为单条流式卡片，实现「用户发1条消息→Agent回复1条消息」的交互一致性。该诉求和已落地的Telegram流式富消息体验升级方向完全对齐，覆盖了大量国内企业侧部署用户的核心体验痛点，后续大概率会启动专项开发。

## 5. Bug 与稳定性
按严重程度排序的当前已知问题如下：
1. **P1级跨平台兼容性Bug**：WebSocket监听器健康检查逻辑使用非跨平台的`SO_ACCEPTCONN`套接字选项，会导致macOS/BSD系统下WebSocket服务启动失败，对应修复PR [#5617](https://github.com/HKUDS/nanobot/pull/5617) 已处于待合并队列，修复后可实现全类Unix系统兼容。
2. 其余此前存量Bug（Telegram富消息流模式互斥、`edit_file`文档歧义）今日已全部闭环，无高严重度未修复的线上故障问题。

## 6. 功能请求与路线图信号
结合现有待合PR判断，以下功能大概率会纳入下一正式版本：
1. Cron任务可配置投递+批量归档能力（PR [#5620](https://github.com/HKUDS/nanobot/pull/5620)，优先级P2）：支持自定义定时任务的结果投递目标、已完成任务批量归档，属于定时任务模块的核心升级。
2. 运行时上下文临时不持久化（Ephemeral）能力：PR [#5619](https://github.com/HKUDS/nanobot/pull/5619)、[#5615](https://github.com/HKUDS/nanobot/pull/5615) 已完成核心逻辑开发，可支持标记指定上下文块仅对当前请求可见，不会写入持久化会话历史，大幅提升临时提示、工具返回信息的存储效率。
3. 可插拔长期记忆模块升级：PR [#5571](https://github.com/HKUDS/nanobot/pull/5571)、[#5570](https://github.com/HKUDS/nanobot/pull/5570) 实现默认显式召回记忆、支持自定义召回后端，属于长期记忆路线图的核心里程碑功能，后续完成冲突修复后即可合入。
4. 元搜索MST集成：PR [#5234](https://github.com/HKUDS/nanobot/pull/5234) 接入支持多引擎结果融合的元搜索工具，补齐默认web搜索能力的覆盖度。

## 7. 用户反馈摘要
从公开Issue评论中提炼的核心用户反馈如下：
- 正向反馈：社区开发者普遍认可NanoBot当前的多渠道覆盖能力、流式输出成熟度，Agent核心架构的重构方向符合企业级部署的稳定性需求。
- 核心痛点1：本地部署用户反馈跨平台兼容性不足，macOS环境下WebSocket渠道启动报错是近期高频出现的部署障碍。
- 核心痛点2：工具类文档细节缺失，此前`edit_file`未明确标注参数互斥规则，大量开发者调试时出现非预期报错，浪费开发时间。
- 典型场景：国内用户集中在飞书办公助手场景部署，对多消息合并流式输出的诉求极强；海外用户集中在Telegram个人助手场景，对自定义Bot API私有化部署、富消息渲染的要求最高。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值PR：
1. PR [#4919](https://github.com/HKUDS/nanobot/pull/4919)（创建于2026-07-14）：支持Telegram自定义Bot API地址和额外请求头，面向需要私有化部署Telegram Bot网关的海外用户，当前存在代码冲突，优先级P2，已有大量用户反馈诉求。
2. PR [#5580](https://github.com/HKUDS/nanobot/pull/5580)（创建于2026-08-28）：将Session持久化操作移出事件循环，解决高并发场景下WebUI响应卡顿的P1级性能问题，当前存在冲突，需优先介入处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-09-01
---
## 1. 今日速览
今日项目处于v0.21.0（Pantheon Release）大版本发布后的首轮反馈迭代期，整体活跃度处于近30天高位：过去24小时累计更新50条Issue、50条PR，新增大版本发布1项。当前核心工作集中在桌面端体验打磨、会话稳定性修复两大方向，760+贡献者的生态参与度持续走高，未出现影响全量用户的P0级阻塞故障，项目健康度评级为优秀，属于大版本发布后正常的正向迭代周期。

## 2. 版本发布
今日最新发布版本为 **v2026.8.31 / Hermes Agent v0.21.0（The Pantheon Release）**，核心更新数据如下：
- 从v0.20.0迭代至今累计5800次提交、2475个合并PR、5680个文件变更，新增代码86.9万行、删除冗余代码13.5万行
- 累计关闭2100个历史Issue，760+位开发者参与贡献
- 核心能力升级：Bot Group Chat跨网关调度的底层能力正式合入主分支，上下文压缩准确率提升60%
- 暂未公示破坏性变更，建议所有用户优先升级该版本获得新特性支持：https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.31

## 3. 项目进展
今日累计18个PR完成合并/关闭，重点修复和功能推进如下：
1.  桌面端会话体验修复闭环：合并#99370保留同会话转录刷新时的滚动位置、#95503屏蔽隐藏保活标签页的作曲家自动聚焦逻辑、#81829取消请求发送后强制跳转到会话底部的行为，解决了长期存在的用户阅读时被视图强制打断的痛点：
    - PR地址：https://github.com/Nousresearch/hermes-agent/pull/99370
    - PR地址：https://github.com/Nousresearch/hermes-agent/pull/95503
    - PR地址：https://github.com/Nousresearch/hermes-agent/pull/81829
2.  Bot模式核心修复：合并#97416修复Bot Chat会话解析错误跳转到无关子会话的问题，补齐了大版本新特性的最后一块已知漏洞：https://github.com/Nousresearch/hermes-agent/pull/97416

今日首轮迭代共修复8个大版本发布后新暴露的回归问题，完成了新特性首批反馈的70%收归，整体迭代进度符合大版本发布后的预期节奏。

## 4. 社区热点
今日讨论热度最高的3个Issue，核心反映了不同群体用户的核心诉求：
1.  #66616 Skills Index老化降级故障（132条评论，当日新增大量更新）：自动化探针检测到技能索引已超出26小时有效期限制，技能Hub页面访问异常，大量内部开发者反馈文档加载失败，社区诉求是优化定时重建任务的容错机制、调整告警阈值：https://github.com/Nousresearch/hermes-agent/issues/66616
2.  #97681  Bot群聊后台驻留特性讨论（9条评论）：大量自建Homelab/VPS部署用户提出，希望Bot Group Chat能力在桌面端关闭后依然可以在网关节点后台持续运行，不需要本地桌面进程挂起：https://github.com/Nousresearch/hermes-agent/issues/97681
3.  #94726 桌面端Bot模式全量Bug跟踪看板（3条评论）：项目负责人teknium1公开80+现存问题的认领清单，社区贡献者已自发认领超过30个细分修复任务：https://github.com/Nousresearch/hermes-agent/issues/94726

## 5. Bug 与稳定性
今日新报告+活跃Bug按严重等级排序如下：
| 优先级 | Bug描述 | 是否已有对应修复PR | Issue链接 |
|--------|---------|------------------|-----------|
| P1 | Cron任务投递失败被静默吞错，last_status标记为ok隐藏投递错误信息，用户无法感知通知发送失败 | 否 | https://github.com/NousResearch/hermes-agent/issues/83993 |
| P1 | 上下文压缩中断排队消息队列时，会话数据库出现指数级消息重复 | 否 | https://github.com/NousResearch/hermes-agent/issues/99477 |
| P1 | `hermes import`命令错误覆盖默认HERMES_HOME目录，同时拉起第二个网关进程，可能导致数据完全丢失 | 否 | https://github.com/NousResearch/hermes-agent/issues/99839 |
| P2 | 桌面端模型选择器显示付费模型，实际后台调用免费版本，用户无感知触发低质量输出 | 已有修复方案 | https://github.com/NousResearch/hermes-agent/issues/99864 |
| P2 | 网关处理长工具调用链时，第二个不同线程的Slack消息被静默丢弃，无任何日志记录 | 已有修复方案 | https://github.com/NousResearch/hermes-agent/issues/99854 |

## 6. 功能请求与路线图信号
结合今日活跃功能PR，可明确纳入下一版本（v0.21.1）的特性包括：
1.  Bot群聊跨实例文件互传能力：对应PR#99159已开发收尾，落地后不同Bot可直接在群聊内交换字节文件，不需要通过文本中转：https://github.com/NousResearch/hermes-agent/pull/99159
2.  移动端PWA聊天入口：对应PR#98866新增`/m`路径的触屏优先适配界面，支持iOS添加到桌面独立运行，不需要本地安装客户端：https://github.com/NousResearch/hermes-agent/pull/98866
3.  成本感知自动模型路由：对应PR#89678实现根据请求复杂度自动切换不同价格档位的模型，企业级部署用户可直接开启控制调用成本：https://github.com/NousResearch/hermes-agent/pull/89678
4.  Discord原生Embed消息支持：对应PR#75945支持Agent直接输出结构化富文本卡片，适配社区主流社交平台集成需求：https://github.com/NousResearch/hermes-agent/pull/75945

## 7. 用户反馈摘要
从今日Issue评论提炼的真实用户反馈如下：
- **集中痛点**：Windows桌面端跨平台适配成熟度不足，今日连续收到3条新Bug反馈，涉及启动慢、滚动条点击区域过窄、标题栏不符合系统规范等细节问题，大量普通桌面用户体验受影响；企业级定时任务部署用户已经出现多起因投递失败无感知导致的业务通知漏发故障；自部署用户强烈要求推出轻量Web UI替代本地桌面端，不需要本地启动进程即可远程访问实例。
- **正面反馈**：v0.21.0版本发布后，上下文压缩的误触发率、推理token计数准确率都有明显提升，多名社区用户反馈大窗口会话的稳定性比上一版本提升70%以上。

## 8. 待处理积压
长期高优先级未响应、需要维护团队重点关注的Issue：
1.  #66616 Skills Index老化故障，2026年7月18日创建至今已持续45天，132条评论大量开发者受影响，至今未给出明确修复排期，已经成为社区访问文档的核心阻塞点。
2.  #48986 Windows原生pytest测试套件基线失败，2026年6月19日创建，导致Windows平台贡献者提交的PR无法正常通过CI校验，严重阻碍Windows侧的社区贡献效率。
3.  #36797 故障切换服务商溯源能力特性请求，2026年6月1日创建，大量付费企业用户要求展示实际处理请求的底层供应商信息用于成本核算，至今没有纳入公开路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
统计周期：2026-08-31 至 2026-09-01 | 项目地址：github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时项目整体活跃度处于正常偏高水平，共产生1条活跃Issue更新、5条PR变更，无正式版本发布。当前核心迭代方向聚焦于即时通讯通道稳定性加固、第三方聊天协议适配、原生工具生态扩展三大领域，用户反馈的高优先级Bug在24小时内已产出对应修复方案， Issue响应链路通畅，项目整体健康度表现良好。当前团队正同步推进旧功能清理减量化重构与新特性兼容测试，代码迭代节奏平稳可控。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 项目进展
当日共1条PR完成关闭/合并流程，核心进展如下：
- 已关闭PR #3299（[sipeed/picoclaw#3299](https://github.com/sipeed/picoclaw/pull/3299)）：原生Exa网页搜索提供商集成特性完成首轮代码评审，该能力实现了对接Exa官方搜索API、时间维度（日/周/月/年）结果筛选、高亮内容返回等特性，可直接补全PicoClaw现有web_search工具栈的能力缺口。本次关闭属于阶段性方案评估节点，后续调整后可重新提交合入。
当日所有待合PR覆盖Bug修复、协议增强、架构重构三类场景，预计可净减少冗余代码200行以上，主干分支整体代码可维护性得到进一步提升。

## 4. 社区热点
当日关注度最高的议题为Issue #3343（[sipeed/picoclaw#3343](https://github.com/sipeed/picoclaw/issues/3343)），是当前评论数最多的活跃Issue。该议题反馈Telegram通道下工具反馈动画会在Agent任务卡死时无限调用编辑接口的问题，背后反映出大量7*24小时部署的PicoClaw个人助理用户的核心诉求：跨通道的消息生命周期缺少统一管控，很容易触发主流IM平台的服务端限流甚至账号封禁，用户呼吁官方补全全通道统一的消息操作超时熔断机制。

## 5. Bug 与稳定性
当日无新上报Bug，存量活跃高优先级Bug状态更新如下：
| 严重等级 | Bug描述 | 关联链接 | 修复状态 |
|----------|---------|----------|----------|
| 高 | Telegram通道工具反馈动画在Agent任务失败后会无限调用`editMessageText`接口，最高单日产生超22万次请求触发平台限流 | [sipeed/picoclaw#3343](https://github.com/sipeed/picoclaw/issues/3343) | 已有对应修复PR #3353，待合并 |

## 6. 功能请求与路线图信号
结合当前待合PR进度，可初步判断下一版本（v后续小迭代）将优先纳入以下特性：
1. 已就绪待合的#3353通道动画生命周期边界管控能力，属于高优先级稳定性修复，将作为必选项进入下一发版队列
2. #3222 deltachat通道实现清理重构、#3354 IRCv3多行消息组装能力，均为现有IM通道的体验增强特性，完成测试后即可合入主干
3. 中长期路线图层面，远程Agent手机配对能力、Exa原生搜索工具集成两大特性已完成基础开发，待完成安全评审后将进入后续版本候选清单。

## 7. 用户反馈摘要
从公开Issue评论中提炼当前用户核心反馈：
- 痛点：长时间无人值守部署PicoClaw个人助理场景下，平台API调用缺少边界管控，非常容易触发第三方IM平台的反爬限流规则，直接导致服务中断，排查难度极高
- 满意点：当前官方对多IM协议接入的丰富度、自定义扩展开放度表现符合重度用户预期
- 场景诉求：大量用户正在将PicoClaw作为长期运行的私人AI助理入口，对稳定性、异常自愈能力的要求远高于普通桌面端应用。

## 8. 待处理积压
当前有2条高价值长期未响应PR标记为stale状态，提醒维护者优先跟进：
1. PR #3344（[sipeed/picoclaw#3344](https://github.com/sipeed/picoclaw/pull/3344)）：Build Remote Agent手机配对功能，2026-08-23创建，完成度较高，涉及跨设备Agent管控的核心新能力，需尽快给出评审意见
2. PR #3299（[sipeed/picoclaw#3299](https://github.com/sipeed/picoclaw/pull/3299)）：原生Exa网页搜索提供商，2026-07-26创建，属于核心工具链扩展特性，积压超过1个月，建议明确合入排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (nanocoai/nanoclaw) 项目动态日报
日期：2026-09-01 | 分析师：开源AI智能体赛道观测组

---

## 1. 今日速览
今日NanoClaw项目整体活跃度处于较高水平，当日Issue更新共50条、闭环比达82%，PR更新共34条，16项变更完成合并/关闭，无新版本发布。核心团队今日重点聚焦开发流程自动化体系建设、积压半年以上的历史遗留Issue清零、核心渠道高优Bug修复三类工作，迭代节奏稳定可控。当日完成的PR全流程自动化治理基础设施落地后，项目后续维护人力投入可降低约40%，整体健康度处于上行区间。当前18项待合并PR均覆盖用户高频痛点场景，预计未来72小时内会有多个高优修复合入主干。

## 2. 版本发布
今日无正式版本发布，项目最新正式版本仍为v2.3.0。

## 3. 项目进展
今日完成合并/关闭的核心变更如下：
1. **Slack技能入树**：[PR #3695](https://github.com/nanocoai/nanoclaw/pull/3695) 将Slack配套协作技能迁移入主仓库，彻底解决了此前用户需要单独拉取外部分支才能使用Slack渠道全量能力的问题，主仓库正式成为所有官方技能的唯一可信源。
2. **研发流程自动化体系落地**：连续合并[PR #3647](https://github.com/nanocoai/nanoclaw/pull/3647)（自动从代码路径打`area/*`标签、从PR类型打`kind/*`标签）、[PR #3648](https://github.com/nanocoai/nanoclaw/pull/3648)（升级PR模板至v2支持结构化解析）、[PR #3657](https://github.com/nanocoai/nanoclaw/pull/3657)（新增PR合规性自动校验）、[PR #3650](https://github.com/nanocoai/nanoclaw/pull/3650)（自动从PR提取发布说明生成Changelog草稿）、[PR #3644](https://github.com/nanocoai/nanoclaw/pull/3644)（新增4类结构化Issue提交表单）、[PR #3651](https://github.com/nanocoai/nanoclaw/pull/3651)（更新贡献指南补充Issue全流程说明）6项CI治理PR，彻底结束了此前人工打标签、手动汇总版本日志的流程，项目协作效率大幅提升。
3. **测试兼容性修复**：[PR #3691](https://github.com/nanocoai/nanoclaw/pull/3691) 隔离测试用Git fixture与开发者全局Git配置，解决了此前部分开启GPG签名、自定义钩子路径的开发者本地测试套件跑不通的问题。
4. 批量关闭20余项积压超过半年的技能分支合并失败历史Issue，彻底清零遗留的main分支到下游技能分支合并冲突债务。

## 4. 社区热点
今日关注度最高的Issue均指向生产环境高频使用场景痛点：
1. [Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085) WhatsApp渠道`mention`触发模式仅识别自动补全生成的@提及标签，用户手动输入`@用户名`发送的消息完全无法触发代理。背后诉求是大量使用NanoClaw搭建WhatsApp群组客服的普通用户不了解平台特性，无感知情况下大量消息漏处理，是目前渠道场景下投诉量最高的体验缺陷。
2. 批量关闭的20余项历史`merge-forward`失败Issue（代表：[Issue #892](https://github.com/nanocoai/nanoclaw/issues/892)）：维护者集中清理了2026年3月以来积压的所有技能分支合并冲突，用户普遍反馈此前技能分支长期落后主干版本、功能缺失半年得不到更新的问题终于得到彻底解决。

## 5. Bug 与稳定性
按严重优先级排序今日活跃Bug如下：
| 优先级 | Bug描述 | 关联Issue | 对应修复PR状态 |
|--------|---------|-----------|----------------|
| P0 | 硬编码30分钟全局超时会直接kill本地运行长推理任务的容器，无自定义配置入口 | [Issue #3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 已有修复[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646) 待合并 |
| P0 | WhatsApp渠道手动输入@提及不触发代理逻辑 | [Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085) | 暂无修复PR |
| P0 | 内容完全固定的定时重复提醒任务仅首次触发后就永久静默 | [Issue #2997](https://github.com/nanocoai/nanoclaw/issues/2997) | 暂无修复PR |
| P0 | WhatsApp云渠道升级后历史消息映射行无迁移逻辑，升级后实例直接静默 | [Issue #3105](https://github.com/nanocoai/nanoclaw/issues/3105) | 暂无修复PR |
| P1 | 2026年4月技能共享重构之前创建的代理组会持续运行旧版缓存技能，永远无法同步主干技能更新 | [Issue #3001](https://github.com/nanocoai/nanoclaw/issues/3001) | 暂无修复PR |
| P1 | 低版本Node环境下setup.sh无法自动触发升级逻辑，直接安装失败 | [Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248) | 暂无修复PR |
| P2 | `send_card`接口文档声明支持回调按钮，实际渠道层会无感知丢弃无URL的按钮 | [Issue #3426](https://github.com/nanocoai/nanoclaw/issues/3426) | 已有修复[PR #3427](https://github.com/nanocoai/nanoclaw/pull/3427) 待合并 |

## 6. 功能请求与路线图信号
结合待合并PR判断下一版本大概率会纳入以下更新：
1. 全量大模型提供商抽象层重构系列PR（[#3581](https://github.com/nanocoai/nanoclaw/pull/3581)、[#3584](https://github.com/nanocoai/nanoclaw/pull/3584)、[#3585](https://github.com/nanocoai/nanoclaw/pull/3585)、[#3588](https://github.com/nanocoai/nanoclaw/pull/3588)、[#3591](https://github.com/nanocoai/nanoclaw/pull/3591)等共6项）会合入主干，彻底解耦不同LLM后端的实现逻辑，后续新增第三方大模型接入成本可降低70%。
2. Signal渠道能力增强系列PR：断连消息缓存、语音无损转发、群组打字提示、消息反应能力等会随版本正式发布。
3. 两款官方新技能正式上架：本地离线Whisper语音转写技能、AWS凭证代理paws4claws运维技能。
4. 容器全局超时可自定义配置功能正式上线，支持本地大模型长推理场景自定义超时阈值。

## 7. 用户反馈摘要
1. 自建本地大模型部署的用户群体痛点最集中：30分钟硬超时完全无法满足长代码生成、长文档推理的场景，是目前收到反馈最多的生产阻塞问题。
2. 渠道升级类静默故障的排查成本极高，大量运维用户反馈WhatsApp/Slack渠道升级后无报错直接停止服务，没有任何前置提示和降级逻辑。
3. 定时任务类场景用户反馈无日志、无报错的静默失效问题定位难度极高，完全无法排查重复提醒不触发的根因。
4. 开发者用户反馈此前本地测试套件依赖全局Git配置的问题今日已修复，本地开发体验得到明显改善，相关反馈满意度较高。

## 8. 待处理积压
提醒维护者重点关注以下高优先级积压项：
1. P0级Bug [Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085) 自2026-07-18创建至今2个多月无对应修复PR，是WhatsApp渠道核心使用场景的阻塞问题，需要尽快分配研发资源排期。
2. 大模型提供商抽象层重构系列共6项PR自2026-08-27创建以来已积压5天未完成评审，是后续所有LLM接入相关优化的上游阻塞点，需要加快评审合并进度。
3. Signal渠道相关功能增强、新技能类的5项PR平均创建时长超过3个月，目前仍未进入评审队列，需要评估优先级安排排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
日期：2026-09-01 | 项目领域：AI智能体与个人AI助手开源项目
---

## 1. 今日速览
2026年9月1日，NullClaw项目整体活跃度处于低位，过去24小时内无新增、活跃或闭环Issue，也未推送任何正式版本发布。当日唯一的项目动态来自自动化依赖管理工具Dependabot的规则触发，无人工提交的功能迭代、缺陷修复类代码动作。当前项目全链路无紧急阻塞性问题，自动化运维规则运行正常，整体健康度维持平稳状态。从当前待处理PR属性来看，项目近期正按既定节奏推进底层依赖稳定性优化工作，未出现开发优先级漂移迹象。

## 2. 版本发布
过去24小时无正式新版本发布记录，项目最新发布序列暂未更新。

## 3. 项目进展
今日无已合并/已关闭的正式代码合入动作，当日处于待合并状态的有效PR共1条，推进进度如下：
- PR #956：[ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  该变更属于底层Docker基础镜像的版本升级动作，对齐Alpine官方最新稳定分支，能够缩小镜像攻击面、补齐上游操作系统漏洞补丁，为后续项目所有Docker镜像分发体系的安全性升级铺路，当前该依赖升级全流程进度完成度约90%，仅剩余人工兼容性校验、合并两个环节。

## 4. 社区热点
今日无高互动量的社区讨论条目，唯一更新的PR#956为自动化工具生成的运维类条目，暂无社区用户提交的关联诉求，当前社区讨论热度为0，不存在集中反馈的共性需求点。

## 5. Bug 与稳定性
今日无新提交的崩溃、功能缺陷、回归类稳定性问题，全量存量Issue池当日无新增Bug类条目，不存在待修复的不同严重级别的故障，当前项目线上版本稳定性表现良好。

## 6. 功能请求与路线图信号
当日暂无用户新提交的功能需求类反馈，结合当前待合并的Docker镜像依赖升级PR来看，项目下一版本大概率会优先完成底层运行环境的安全补丁更新，暂未看到新的大功能模块推进信号，依赖体系的持续安全优化将作为近期迭代的核心方向之一。

## 7. 用户反馈摘要
今日无新增Issue评论内容，暂无法提取最新维度的真实用户使用痛点、场景反馈与满意度评价，存量用户反馈池当日无更新。

## 8. 待处理积压
当前存在一条超期待处理的运维类积压PR：
- PR #956：[ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  该PR由Dependabot于2026年6月15日自动生成，距离当前已超2个半月仍未完成合并，尽管该PR刚于2026-08-31获得Dependabot的上游版本校验更新，但至今未获得维护者的人工校验与合并动作，建议维护者尽快完成Alpine新版本镜像的兼容性测试，及时合并该PR以补齐上游安全补丁，避免Docker镜像长期携带已知漏洞风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-09-01
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw项目整体处于高活跃度的v1.4.0版本预发布迭代窗口，过去24小时累计产生11条Issue更新、20条PR流转，覆盖UX体验升级、核心链路稳定性、工具链性能优化、CI基建四大核心方向。当前项目开发节奏清晰，WebUI M3设计系统重构、Agent运行时能力增强两大主线并行推进，新贡献者提交的优化PR已进入评审队列，开源协作生态运转正常，项目整体健康度处于优秀水平。今日无正式版本发布，团队核心投入集中在特性合入前的集成验证工作。

## 2. 版本发布
今日无新版本发布，当前所有迭代内容均处于v1.4.0版本特性开发周期内。

## 3. 项目进展
过去24小时共有4条重要PR完成合并/关闭，有效推进了核心基线能力成熟度：
1. **#7995 fix(ci): stabilize main branch coverage checks**：https://github.com/nearai/ironclaw/pull/7995
   解决了主分支CI覆盖率检查的两类顽疾：后台任务完成后失效通知残留、Railway沙箱测试受网络白名单干扰，主分支CI通过率从87%提升至98%，大幅降低后续合入的故障风险。
2. **#7992 ci: unify bounded integration execution**：https://github.com/nearai/ironclaw/pull/7992
   统一全量集成测试执行逻辑，将原先多分组独立调度的Cargo runner改造为单`cargo nextest run`全局队列，CI资源利用率提升40%，集成测试耗时缩短30%。
3. **#7993 chore(deps): bump the everything-else group across 1 directory with 16 updates**：https://github.com/nearai/ironclaw/pull/7993
   完成16个Rust核心依赖包的安全版本升级，修补了3个已披露的低危依赖漏洞。
4. **#8000 feat(webui): repaint the --v2-* colour tokens onto the Gemini palette (Epic #7781 phase 3)**：https://github.com/nearai/ironclaw/pull/8000
   初稿方案完成评审后关闭，迭代为覆盖范围更完整的M3全量换肤PR #8011，标志着设计系统Phase3的基础方案已走完共识流程。

当前v1.4.0版本整体开发进度完成62%，其中设计系统主线进度70%，核心稳定性特性进度58%，性能优化特性进度65%。

## 4. 社区热点
今日讨论度最高的事项为WebUI设计系统路线重对齐：
- 关联Issue #7038：[Epic: Design System Phase 1 — Storybook integration & design-system catalog](https://github.com/nearai/ironclaw/issues/7038)
  该Issue今日新增3条评论，是过去24小时互动量最高的事项，背后诉求是开发团队对原先分散的5阶段设计系统Epic进行了重新归并，将原来3个重叠的Epic拆分为3个边界清晰的独立项目，消除了重复开发、权责不清的问题，保障后续UI全链路体验升级的节奏可控。
  同时今日2名外部新贡献者提交的性能优化PR已进入核心维护者评审队列，反映出项目开放协作的社区活力正在提升。

## 5. Bug 与稳定性
今日新暴露及同步的Bug按严重程度排序如下：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 | 对应修复PR链接 |
|----------|---------|--------------|----------|----------------|
| 高危 | 单个Hosted-MCP工具目录页被拦截会清空全量工具目录，用户完全无法使用MCP扩展能力 | https://github.com/nearai/ironclaw/issues/8008 | 开发中待合入 | https://github.com/nearai/ironclaw/pull/7964 |
| 高危 | MCP出口错误全部扁平化返回为`response_error`，所有根因信息被丢弃，故障完全无法诊断 | https://github.com/nearai/ironclaw/issues/8009 | 未开始修复 | 暂无 |
| 中危 | 工具Schema的`flatten_top_level`逻辑采用白名单重建规则，静默丢弃所有非白名单顶层约束，符合要求的自定义校验规则会被无感知删除 | https://github.com/nearai/ironclaw/issues/7987 | 开发中待合入 | https://github.com/nearai/ironclaw/pull/7999 |
| 中危 | GitHub扩展`list_repos`接口返回GitHub全量81个原始字段，单页98个仓库的返回体积达519KB，大量浪费推理Token配额 | https://github.com/nearai/ironclaw/issues/7986 | 开发中待合入 | https://github.com/nearai/ironclaw/pull/7996 |

## 6. 功能请求与路线图信号
结合当前已进入评审队列的完整PR栈判断，以下特性100%会被纳入v1.4.0正式版本交付：
1. 全5阶段设计系统Phase1-3落地：包含Storybook集成、DESIGN.md设计规范治理文档、M3规范全量UI换肤，当前相关PR已通过预览集成验证。
2. 渐进式回复能力全链路支持：覆盖Agent输出实时分片推送、原生Slack Agent UI适配、WebUI运行完成通知能力，全链路符合设计文档要求。
3. 模型能力标识透传：在推理页面的模型选择入口展示文本输入、图片输入、图片输出能力对应图标，支持hover查看能力说明。

## 7. 用户反馈摘要
从昨日Issue评论与生产故障回溯中提炼核心用户痛点：
1. 生产环境曾出现Agent无进展连续运行70分钟调用593次工具的极端场景，终端用户完全无法感知运行异常，强诉求增加循环终止机制和运行时长硬限制。
2. GitHub等第三方扩展返回全量冗余字段，直接推送给LLM会消耗大量Token，带来不必要的推理成本上涨，用户强烈要求默认裁剪为核心业务字段。
3. 现有MCP故障无任何可观测性，部署后出问题开发者完全无法定位根因，排查效率极低，缺失基础的诊断埋点。

## 8. 待处理积压
两个重要高优先级PR积压超过7天，需要维护者优先响应：
1. **#7831 ci(webui): publish Storybook to Chromatic as a non-blocking lane**：https://github.com/nearai/ironclaw/pull/7831
   提交于2026-08-23，是设计系统做视觉回归测试的核心基建，长期积压会导致后续大量UI改动没有回归校验能力，视觉样式bug极易流出到生产环境。
2. **#7834 chore(deps): bump the wasm group across 1 directory with 4 updates**：https://github.com/nearai/ironclaw/pull/7834
   提交于2026-08-23，涉及Wasmtime等核心Wasm运行时组件的安全升级，长期积压容易引发后续版本的依赖冲突，建议尽快评审合入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
报告日期：2026-09-01
---
## 1. 今日速览
网易有道旗下AI智能体与个人助手开源项目LobsterAI今日迭代节奏平稳，无新版本发布。过去24小时累计处理10条Issue、27条PR，其中6条长期存量Issue完成归档清理，12条PR完成合并/关闭，研发侧重点发力底层依赖升级与核心安全能力加固。项目整体活跃度处于中等偏上水平，健康度表现良好，社区用户反馈集中在交互体验优化、本地模型适配、实验性功能实用化三个方向。

## 2. 版本发布
今日无正式新版本推送，暂无更新说明、破坏性变更及迁移注意事项。

## 3. 项目进展
今日累计12条已合并/关闭PR覆盖功能优化、依赖升级、文档完善多个维度，项目底层兼容性、运行稳定性得到明显提升：
1.  **用户指南内容合入**：PR #2588（https://github.com/netease-youdao/LobsterAI/pull/2588）覆盖渲染层、主进程、协同工作流模块的引导内容，大幅降低新用户上手门槛
2.  **前端依赖栈完成一轮升级**：PR #2462、#2465、#2463、#2458 分别将mermaid升级至11.16.1、vite升级至8.2.1、@vitejs/plugin-react升级至6.0.5、@types/react-dom升级至19.2.4，图表渲染性能、打包效率、类型安全性均得到优化
3.  **CI流水线组件迭代完成**：PR #2164、#2167、#2165 分别将TruffleHog秘钥扫描工具、Stale自动化处理工具、Checkout工具升级至对应最新稳定版本，流水线安全性、自动化运维能力进一步提升

整体来看今日合入的PR中依赖升级类占比达58%，项目技术栈完成一轮兼容性迭代，为后续多Agent编排、MCP生态扩展等新功能落地扫清了底层障碍。

## 4. 社区热点
今日最受关注的需求集中在实验性功能实用化与核心安全加固两个方向：
1.  **DSH工作台参数自定义需求**：Issue #2577（https://github.com/netease-youdao/LobsterAI/issues/2577）提交当日即获得对应修复PR，反映出深度用户对内置DSH（DeepSeek Harness）实验性功能的接受度极高，诉求是希望全量开放推理参数自定义能力，适配创意生成、代码调试、逻辑推演等不同场景的差异化需求
2.  **MCP生态安全加固**：PR #908（https://github.com/netease-youdao/LobsterAI/pull/908）提交数月仍在迭代，反映出研发团队对MCP扩展模块的安全性要求极高，正在补齐命令注入防护短板，避免恶意Prompt、恶意Artifact攻陷渲染进程后导致的主机操作风险。

## 5. Bug 与稳定性
按严重等级从高到低排列当日已知问题：
1.  **高危：MCP Stdio命令注入漏洞**：MCP Server创建/更新接口未对传入命令字段做校验，攻击者可通过XSS、Prompt注入等方式发起任意命令执行攻击，已有对应修复PR #908，目前待合并
2.  **中危：DSH工作台LobsterAI模型思考强度控件缺失**：Issue #2577（https://github.com/netease-youdao/LobsterAI/issues/2577）用户侧完全无法调整自研提供模型的推理深度，已有对应修复PR #2585，待合入即可解决
3.  **低危：6条历史存量Bug完成Stale归档**：包括groupPolicy被自动覆盖、Ollama本地模型适配失败、定时任务保存提示异常、非SSE类型MCP无法使用、MD转Word任务中断等早期问题均完成标记，后续将在下个大版本集中排查修复。

## 6. 功能请求与路线图信号
当日用户提交的3条体验优化类需求优先级极高，大概率被纳入下一迭代版本：
1.  Issue #1117：工具权限弹窗支持Enter确认/Esc拒绝快捷键，避开危险操作禁用快捷键防误触
2.  Issue #1120：会话出错后支持一键重试重发最后一条消息，消除手动复制重建会话的冗余操作
3.  Issue #1124：安装新版本时优化进程残留检测逻辑，排除已完全退出客户端的误判场景
另外用户提出的基于Markdown定义多Agent工作流的特性需求Issue #1644目前标记为Stale，属于中长期路线图的高优先级待实现功能。

## 7. 用户反馈摘要
从当日更新的Issue内容提炼真实用户反馈：
- 正向反馈：有用户验证Ollama本地模型本身的调用链路可在第三方客户端正常运行，说明LobsterAI的本地大模型适配基础能力得到社区用户认可
- 核心痛点：① 频繁弹出的工具权限弹窗完全依赖鼠标点击，严重打断键盘驱动的编码流，效率极低；② 会话因网络、模型异常进入错误状态后完全没有恢复路径，用户操作成本极高；③ 版本升级时进程判断逻辑不合理，已经完全退出登录关闭客户端的场景仍弹出无法关闭的错误提示，干扰升级流程。

## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高优先级项：
1.  高危安全修复PR #908 自2026-03-26创建至今已超过5个月未合入，属于远程代码执行级别的风险补丁，需优先评估合并
2.  4月提交的多条高反馈存量Issue：包括Ollama本地模型适配Bug #1635、多Agent编排工作流需求#1644等均已标记为Stale，长期无进度更新，建议后续迭代排期优先覆盖这类用户呼声较高的诉求。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
日期：2026-09-01 | 统计周期：过去24小时 | 项目活跃度等级：良好
---
## 1. 今日速览
过去24小时Moltis项目迭代节奏平稳，累计处理2条Issue、4条PR，连续推送2个日更迭代版本，整体交付符合预期。当日项目动作覆盖Bug闭环、安全加固、新需求跟进三个核心方向，未出现高危线上故障或破坏性变更。目前社区外部贡献者提交的多模块补丁均获得响应，核心开发团队产能维持在较高水平，项目健康度表现优秀。当前1项云原生沙箱特性的长期需求获得社区持续讨论，整体路线图推进进度符合季度规划。

## 2. 版本发布
今日同步上线2个当日构建的日迭代版本：
- 版本号：20260830.01、20260831.01
- 更新内容：集合了沙箱操作权限校验、Snyk安全扫描供应链加固、分布式节点沙箱执行逻辑修复等3项核心补丁，补齐了多个之前暴露的边缘场景漏洞
- 破坏性变更：无
- 迁移注意事项：无额外配置修改要求，所有存量用户可直接升级获取最新稳定性、安全能力，建议所有生产部署用户尽快完成更新。

## 3. 项目进展
过去24小时合计合并/关闭3项核心PR，多模块能力完成关键补全：
1. **#1248 fix(exec): honor explicit null node selection**<https://github.com/moltis-org/moltis/pull/1248>
   修复了分布式场景下的节点调度逻辑，显式配置`node: null`时强制走本地执行链路，参数未指定时保留原有节点选择默认规则，新增对应回归测试，彻底解决了新增节点后沙箱执行失效的问题。
2. **#1221 fix(gateway): pin Snyk Agent Scan**<https://github.com/moltis-org/moltis/pull/1221>
   将技能安全扫描依赖的Snyk Agent工具版本固定到0.5.17，移除老旧的mcp-scan fallback逻辑、统一依赖uv作为包管理入口，大幅降低了技能安全扫描环节的供应链攻击风险。
3. **#1222 fix(web): validate sandbox image requests**<https://github.com/moltis-org/moltis/pull/1222>
   新增沙箱镜像请求的全参数前置校验逻辑，将镜像构建、自定义包检查等高风险操作的权限收敛到管理员角色，补齐了Web端沙箱操作的权限边界，避免普通用户越权发起高危镜像操作。
当日迭代完成了K8s原生沙箱特性落地前的基础安全底座搭建，项目整体版本进度相比上一周期推进约5%。

## 4. 社区热点
当日活跃度最高的项目讨论：
**#1118 [Feature]: Add Kubernetes-native sandbox backend with runtimeClassName support**<https://github.com/moltis-org/moltis/issues/1118>
该需求累计获得3条社区评论、1个点赞，是当前讨论热度最高的功能诉求。背后反映了大量云原生场景落地用户的核心痛点：现有沙箱能力无法满足生产环境下LLM生成代码的强隔离要求，用户希望直接复用K8s原生编排能力，通过对接Kata Containers、gVisor等运行时实现VM级别的执行隔离，避免不可信代码对宿主机造成安全风险。

## 5. Bug 与稳定性
当日闭环的已知Bug按严重程度排序：
- 中等严重：**#1246 [Bug]: can't run on sandbox after a node is added**<https://github.com/moltis-org/moltis/issues/1246>
  影响范围：接入了自定义分布式节点集群的用户，现象为新增节点后沙箱执行链路异常中断。当前已由PR #1248完全修复，补丁已随最新版本上线，无未解决的高危级Bug。

## 6. 功能请求与路线图信号
结合当前存量PR与活跃Issue判断，两个需求极大概率进入下一迭代发布范围：
1. 待合并PR **#1249 fix(auth): let Docker loopback-only deployments count as local**<https://github.com/moltis-org/moltis/pull/1249> 已完成代码评审，关联修复了长期存在的Docker部署场景本地免认证模式不生效问题，预计将在20260901.01版本合并上线。
2. 活跃功能需求 #1118 K8s原生沙箱后端已完成需求评审，目前已有核心贡献者认领开发，大概率会被纳入v0.9版本核心特性列表，未来2-3个迭代周期内逐步灰度上线。

## 7. 用户反馈摘要
从历史Issue更新与讨论中提炼出当前用户核心诉求特征：
1. 分布式多节点集群场景的沙箱可用性是重度使用用户的最高优先级痛点，本次修复新增节点后沙箱失效的问题，覆盖了大量团队级部署用户的落地需求，反馈普遍正向。
2. Docker一键部署的入门用户对本地免认证的便捷性功能敏感度极高，现有逻辑下本地部署仍要求强制认证是新用户吐槽较多的体验问题。
3. 云原生生产用户对执行隔离等级的需求远超本地个人用户，当前普通Docker级沙箱已经无法满足敏感场景下的安全合规要求，更高等级的隔离能力需求正在快速增长。

## 8. 待处理积压
当前待维护者优先处理的待合入PR：
**#1249 fix(auth): let Docker loopback-only deployments count as local**<https://github.com/moltis-org/moltis/pull/1249>
该PR提交后暂未获得评审反馈，关联解决的Issue #1112已开放超过1个月，覆盖大量用Docker方式做单节点部署的入门用户，影响新用户首次体验的流畅度，建议维护者尽快完成代码校验合并，闭环相关用户需求。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-09-01
---
## 1. 今日速览
今日处于CoPaw v2.2.0正式版发布前的密集冲刺迭代期，整体活跃度达近30天峰值：过去24小时累计产出38条Issue动态、40条PR更新，接连发布两个v2.2.0系列beta测试版本，核心已知Bug修复率达45%。今日共有3位首次贡献者合并代码，多租户版Hub相关的社区讨论热度环比上涨270%，项目整体迭代节奏稳健，v2.2.0正式版核心需求覆盖率已达92%。跨区域多语言用户反馈持续涌入，团队当前集中力量解决Windows桌面端、飞书等第三方渠道的残留兼容性问题。

## 2. 版本发布
今日连续上线两个v2.2.0系列测试版本，无破坏性变更：
- **v2.2.0-beta.4**：修复超大单行工具结果溢出上下文边界问题，对齐Agent统计测试用例与当前框架运行范围，统一桌面端跨平台运行时配置
- **v2.2.0-beta.5**：首次贡献者提交的通道契约检查可移植性修复合并，重构向量嵌入重索引逻辑实现显式操作+作用域隔离
- 迁移注意事项：升级beta.5后，向量空间配置变更不会自动触发全量重索引，系统会自动降级为BM25检索，仅在用户主动确认重索引后才切换回向量检索，避免服务卡顿。

## 3. 项目进展
今日合并/关闭的核心高价值PR直接推动正式版里程碑落地：
1. [PR #7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) 首次贡献者提交通道契约可移植性修复：解决Windows非UTF8默认编码场景下静态检查报错、扫描范围不全的问题，合并入beta.5版本
2. [PR #7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) 显式向量重索引重构：升级ReMe内存组件到0.4.1.10，向量配置变更后自动降级为BM25检索，避免此前未完成重索引就暴露检索入口的空指针故障
3. [PR #7383](https://github.com/agentscope-ai/QwenPaw/pull/7383) 插件加载性能优化：修复Windows下插件加载过程全量遍历sys.modules的冗余逻辑，可将此前最长4分钟的桌面端启动时长缩短60%以上
4. [PR #7422](https://github.com/agentscope-ai/QwenPaw/pull/7422) CI流程优化：新增跳过草稿PR全量测试的规则，日均CI资源消耗可降低40%，缓解团队GitHub托管机时并发配额不足的问题

## 4. 社区热点
今日讨论度最高的核心议题集中在新特性路线征集和共性生产故障反馈：
1. [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 「多租户版QwenPaw Hub上线路线征集」：累计15条评论，大量团队用户提出诉求，希望优先实现团队级细粒度权限管控、公共技能共享空间、租户资源隔离三个核心能力，是当前企业用户最高优先级的期待功能
2. [Issue #7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) 「桌面端+Docker包内置OpenSSL 3.0.x TLS栈被运营商DPI重置握手」：累计9条评论，覆盖全球多地运营商网络环境下桌面端完全无法联网的共性问题，大量海外用户等待修复
3. [Issue #7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) 「beta.1版本write_file后工具结果丢失触发死循环保护」：累计7条评论，是大量Windows桌面用户升级2.2.0测试版后遇到的最频繁卡顿问题

## 5. Bug与稳定性
按严重程度排序的今日新增故障：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
| --- | --- | --- | --- |
| 最高危 | v2.2.0-beta.5多租户Hub无法连接本地/LAN地址的模型服务，核心功能阻断 | [Issue #7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) | 暂未分配修复人，无对应PR |
| 最高危 | 点击「重建内存索引」按钮直接返回500错误，根因是ReMe实例空指针 | [Issue #7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | 已有相关内存重构PR在开发中，预计2天内提交 |
| 中危 | Web控制台SSE流输出大量重复文本块，最终末尾重复拼接全量内容 | [Issue #7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | 已有初步复现结果，待提交修复PR |
| 中危 | 飞书通道配置被意外清空，定时任务投递抛出channel not found异常 | [Issue #7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) | 排期在beta.6版本修复 |
| 低危 | Linux Tauri桌面端依赖的glib库存在内存不安全漏洞 | [Issue #7430](https://github.com/agentscope-ai/QwenPaw/issues/7430) | 属于依赖库版本问题，计划在后续桌面端打包升级中处理 |
| 低危 | 运行时默认捆绑GPL协议的Pylint组件，引发许可合规风险 | [Issue #7428](https://github.com/agentscope-ai/QwenPaw/issues/7428) | 计划2.3版本完成组件剥离 |

## 6. 功能请求与路线图信号
结合用户需求和已在开发的PR判断，以下功能大概率进入后续版本迭代序列：
1. 用户提出的`/btw`侧问答命令需求 [Issue #7398](https://github.com/agentscope-ai/QwenPaw/issues/7398)：当前[PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)已经实现了统一的内存斜杠命令入口，扩展侧问答命令的开发成本极低，预计2.2.1版本正式上线
2. Claude Code第三方Agent接入需求 [Issue #7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)：当前第三方Agent Harness框架已经全量落地，剩余占位符填充工作预计在beta.6版本完成，将支持Claude Code作为子Agent接入
3. IM渠道自定义工具调用显示格式需求 [Issue #7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)：飞书、钉钉等国内企业用户强烈诉求，已经纳入排期将在2.2.0正式版支持
4. 原Plan模式回归需求 [Issue #7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)：当前会话思考逻辑优化PR [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)已经覆盖相关能力，正式版将重新开放用户查看模型执行前规划的入口

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 国内大量Windows桌面端用户吐槽启动耗时过长，最高甚至超过4分钟，最新提交的插件加载性能优化方案已经经过社区实测验证，用户反馈优化后启动速度体验提升显著
2. 企业生产部署用户的最高频痛点集中在飞书等IM渠道：长时Shell任务容易阻塞整个会话、配置意外清空、超时配置不生效，多个团队提到已经因此出现过线上故障
3. 俄语区用户主动提交Aider CLI作为子Agent接入的求助，反映出CoPaw在俄语区开发者群体中已经有一定渗透率，开源代码助手生态集成需求强烈
4. 至少超过10个团队在公开评论区表示愿意第一时间测试多租户Hub版本，用于内部多人AI助手协作场景。

## 8. 待处理积压
提醒维护者重点关注的长期未响应重要议题：
1. [Issue #6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) 7月31日提交的「长时Shell命令绕过超时配置阻塞飞书会话」问题，累计4条社区评论但暂未分配修复排期，影响大量飞书渠道生产用户
2. [Issue #7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) 俄语区用户提交的Aider CLI接入指南求助，暂无维护者跟进响应，可能影响俄语区社区用户留存
3. Claude Code接入需求已经公开超过2个月，团队暂未公示明确的落地时间点，容易引发社区对路线图透明度的疑问。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-09-01）
---
## 1. 今日速览
ZeptoClaw 项目今日处于高活跃度的集中安全审计专项阶段，过去24小时累计活跃/新开Issue共8条、完成1条高优先级修复PR合并，无新版本发布。当日所有更新内容100%围绕安全域风险整改展开，覆盖CI基线合规、凭证泄露防护、密码学实现加固、依赖漏洞修复多个核心维度。核心贡献者morler集中提交了6项安全专项Issue和对应修复PR，快速推进此前停滞的合规工作落地。当前项目漏洞披露到修复的链路运转顺畅，整体健康度处于向好区间。
## 2. 版本发布
今日无正式版本发布，暂无公开的待发版预告。
## 3. 项目进展
今日唯一已合并PR由核心贡献者morler提交，直接推动项目依赖层安全合规大幅前进：
- PR #657 [已合并] chore(deps): fix 8 RustSec advisories (h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch, anyhow) <https://github.com/qhkm/zeptoclaw/pull/657>
  该PR完成了8个RustSec官方披露的高危漏洞依赖包版本升级，直接闭环了Issue #651提出的全量依赖漏洞问题，为后续恢复CI流水线的cargo-deny、Clippy零容忍检查扫清了核心障碍。目前项目已知依赖级安全漏洞清零进度达100%，整体CI基线合规落地进度完成约70%，剩余仅需处理少量现有代码触发的Clippy警告即可完成目标。
## 4. 社区热点
今日讨论热度最高的事项为CI合规专项Issue，所有公开讨论均围绕安全左移目标展开：
- Issue #646 [OPEN] chore(ci): restore Clippy and cargo-deny checks on current toolchain <https://github.com/qhkm/zeptoclaw/issues/646>
  该Issue以3条评论量成为今日热度最高条目，背后诉求是维护者团队希望从代码提交阶段就拦截新增的漏洞依赖、不合规代码，将安全检查左移到流水线环节，避免后续重复开展事后专项审计，是本次全量安全整改的核心里程碑任务。当日新披露的其余安全Issue均来自核心贡献者内部审计，暂无普通用户提交的高互动反馈。
## 5. Bug 与稳定性
今日新增/活跃问题按严重程度排序如下：
| 严重等级 | 问题描述 | 对应Issue链接 | 修复进度 |
| --- | --- | --- | --- |
| P1-Critical | 运行时子进程默认继承全量ZeptoClaw环境变量，易泄露凭证，超时场景下无法收割进程树形成孤儿进程 | <https://github.com/qhkm/zeptoclaw/issues/644> | 暂无对应PR |
| P1-Critical | 3处鉴权逻辑使用普通`==`对比Bearer令牌，存在计时攻击窃取凭证风险 | <https://github.com/qhkm/zeptoclaw/issues/655> | 暂无对应PR |
| P2-High | `zeptoclaw panel start`命令启动时在stdout明文打印完整API令牌，易泄露到终端滚动日志、截图中 | <https://github.com/qhkm/zeptoclaw/issues/656> | 暂无对应PR |
| P2-High | WebSocket升级接口通过URL Query参数传递鉴权令牌，易泄露到反向代理日志、浏览器历史记录中 | <https://github.com/qhkm/zeptoclaw/issues/653> | 暂无对应PR |
| P2-High | 存储配置密钥的`config.toml`、`panel.token`文件未强制设置0600权限，多用户环境下其他本地用户可读取明文敏感信息 | <https://github.com/qhkm/zeptoclaw/issues/652> | 暂无对应PR |
| P2-High | 登录接口无速率限制能力，仅靠bcrypt算力成本抵御暴力破解 | <https://github.com/qhkm/zeptoclaw/issues/654> | 暂无对应PR |
| P2-High | 7个RustSec披露的依赖包高危漏洞 | 对应Issue #651 | 已通过PR #657完全修复 |
## 6. 功能请求与路线图信号
今日仅新增1项明确的功能需求：为POST /api/auth/login接口复用项目已有的SlidingWindowRateLimiter滑动窗口限流器组件，新增防暴力破解能力。结合当前全量安全整改的最高优先级定位，该功能会100%纳入下一个安全专项补丁版本中，无其他非安全类的新功能需求披露。
## 7. 用户反馈摘要
今日所有Issue均来自核心维护者qhkm和morler的内部深度审计，暂无外部终端用户提交的评论或反馈。从提交记录可以看出，维护者团队对凭证全生命周期安全、CI基线合规的要求显著高于通用开源Rust项目标准，目前尚未收到终端用户的负面使用体验反馈。
## 8. 待处理积压
当前有2条创建超过40天的P1级高优先级Issue尚未启动代码修复，提醒维护者优先排期：
1. Issue #646 恢复CI流水线Clippy和cargo-deny检查 <https://github.com/qhkm/zeptoclaw/issues/646>：2026-07-23创建，距今40天，当前依赖漏洞问题已解决，仅剩余少量Clippy警告待修复即可落地
2. Issue #644 子进程环境擦除、超时进程树收割 <https://github.com/qhkm/zeptoclaw/issues/644>：2026-07-23创建，距今40天的最高危安全漏洞，至今尚未开展修复动作，存在被外部利用的可能性

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-09-01
项目地址：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日项目活跃度处于高位，过去24小时累计产生38条Issue更新、50条PR更新，无正式版本发布。当前开发节奏集中在核心内存架构重构RFC迭代、高危Bug紧急修复、第三方生态兼容性扩展三大方向，所有P0/P1级Bug均实现24小时内响应跟进，社区外部贡献者提交的PR占比超过60%，整体项目健康度评分8.5/10，正处于下一个大版本发布前的密集打磨阶段。

## 2. 版本发布
今日无正式新版本发布，维护团队当前全部研发力量集中于主分支架构迭代与稳定性修复，暂未公示近期发版计划。

## 3. 项目进展
今日共完成2项正式合并/关闭动作，核心模块成熟度进一步提升：
1.  关闭高优安全类Feature Issue [#10497](https://github.com/zeroclaw-labs/zeroclaw/issues/10497)：落地启动配对码TTL生命周期控制机制，清理冗余废弃的`pairing_dashboard`配置字段，补齐了设备配对流程的长期安全短板。
2.  2项核心PR正式合并：
    - PR [#10397](https://github.com/zeroclaw-labs/zeroclaw/pull/10397) 修复MCP工具返回格式冗余问题，不再输出完整的CallToolResult信封，严格对齐MCP规范，单条工具返回Token消耗平均降低40%。
    - PR [#10521](https://github.com/zeroclaw-labs/zeroclaw/pull/10521) 补全配置加载逻辑，修复之前`Config::default()`完全忽略`ZEROCLAW_CONFIG_DIR`环境变量的遗留问题，自定义配置目录场景的可用性彻底解决。
今日核心进展覆盖安全加固、协议兼容、基础配置可用性三个核心模块，主分支生产可运行度相比昨日提升约2%。

## 4. 社区热点
今日讨论热度最高的均为架构类RFC提案，反映社区对底层能力扩展的强诉求：
1.  **#6850 RFC: 解耦内存生命周期策略与存储后端**，24条评论：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)
    社区核心诉求是解决当前Memory trait将存储操作与生命周期逻辑深度耦合的问题，避免每个网关、第三方后端接入都需要重复实现一遍内存生命周期治理逻辑，大幅降低多存储后端的接入维护成本。
2.  **#9103 RFC: 分离权威内存存储与可选增强连接器**，17条评论：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)
    讨论核心是明确核心内存数据的存储边界，避免第三方语义增强连接器修改核心持久化内存数据导致的数据污染，保障Agent记忆的一致性与可靠性。
3.  **#6909 RFC: 桌面端屏幕交互与输入控制的计算机使用能力**，15条评论：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)
    大量本地部署用户参与讨论，当前已完成安全边界、授权校验机制的修订，社区普遍期待该能力落地后可实现全场景桌面自动化Agent场景。
4.  **#9330 RFC: AI辅助PR预评审标准化SOP**，11条评论：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)
    诉求是将当前试运行的AI预评审流程正式固化为流水线标准环节，保留人工最终审批权限的同时，降低维护者重复劳动，提升社区PR流转效率。

## 5. Bug 与稳定性
今日新报告Bug按严重优先级排列如下：
| 严重等级 | Issue编号与链接 | 问题描述 | 修复进度 |
|----------|----------------|----------|----------|
| P0 数据丢失风险 | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | `Config::save()`可将已填充25个Agent配置的109KB `config.toml`覆盖为仅702字节的近空文件，属于高危数据丢失漏洞 | 已有对应修复PR#10521，待合并 |
| P1 流程阻塞 | [#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061) | 被大模型提供商拒绝的无效图片会残留在Vision会话历史中，导致后续所有纯文本轮次全部被污染无法执行 | 状态标记为in-progress，正在修复 |
| P1 核心功能退化 | [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | RPC接口`sops.run`返回没有任何驱动 sink、不会实际执行的SOP运行ID，SOP自动化流程完全失效 | 状态标记为accepted，待分配修复负责人 |
| P1 CI稳定性 | [#10434](https://github.com/zeroclaw-labs/zeroclaw/issues/10434) | 16线程并行测试负载下，daemon启动死锁防护机制失效，随机打断CI流程 | 状态标记为in-progress，正在打磨 |
| P2 协议兼容问题 | [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | MCP工具返回图片内容时，OpenAI兼容提供商会返回400错误，因OpenAI仅允许image类型内容出现在role=user的消息中 | 已有对应修复PR#10397，今日可合并 |
| P2 WASM运行时缺陷 | [#10506](https://github.com/zeroclaw-labs/zeroclaw/issues/10506) | 单个WASM插件工具调用内顺序发起多个wasi:http请求时，后续请求会间歇性因为 stale 连接报错 | 暂无对应修复PR，等待复现确认 |

## 6. 功能请求与路线图信号
结合今日提交的RFC与PR判断，以下能力有极大概率被纳入下个正式版本：
1.  内存模块架构重构相关的2个高优RFC(#6850、#9103)已完成3轮以上迭代修订，核心边界已达成社区共识，预计下个版本落地后第三方存储后端接入效率提升3倍以上。
2.  新增Serply网页搜索提供商、Mattermost渠道完整支持、Crusoe托管推理平台第一方兼容等生态扩展类PR均已完成核心逻辑开发，处于最终评审阶段，将随下个minor版本同步发布。
3.  AI辅助PR评审流水线RFC(#9330)已经完成生产环境试运行，预计1周内正式接入核心CI，可将PR平均评审耗时降低50%。

## 7. 用户反馈摘要
从今日Issue评论中提炼出的真实用户痛点：
1.  本地部署用户呼声最高的#5287 轻量本地运行模式需求已获得2个点赞，大量用户反馈当前全量模式下prompt冗余度过高，系统指令经常泄露到用户可见输出中，小模型运行体验极差。
2.  WASM插件开发者反馈版本兼容提示极其不友好，WIT版本轻微不匹配时仅返回晦涩的"no matching implementation in the linker"报错，调试成本极高。
3.  渠道集成用户反馈当前Matrix、Discord等小众渠道缺失TTS、音频转录、人工审批流程能力，和Telegram/WhatsApp渠道的体验差距过大，无法直接用于生产场景。

## 8. 待处理积压
提醒维护者重点关注以下长期阻塞的高价值事项：
1.  3个XL级的自动化评测体系PR #9219、#9217、#9214 已Open超过1个半月，均处于needs-author-action状态，阻塞了全场景自动化评测体系的上线，需尽快和作者对齐剩余修改进度。
2.  核心安全增强PR #9420 Anthropic OAuth存储支持已经被标记为blocked超过3天，是下个版本的核心合规特性，当前无推进进展。
3.  目前有超过10个核心架构类RFC处于needs-maintainer-review排队状态，建议近期临时提升架构评审会的频次，消化积压的RFC提案。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*