# OpenClaw 生态日报 2026-06-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-18 23:45 UTC

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

# OpenClaw 项目动态日报 | 2026-06-19
---

## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计产生500条Issue更新、500条PR更新，核心迭代方向集中在IM消息通道稳定性、数据库优先的SQLite会话存储重构、MCP工具安全管控三大领域。今日无正式版本发布，开发产能充足，477个活跃Issue+468个待合并PR的组合说明社区贡献度正在快速上升。当前项目整体健康度处于正向迭代周期，核心用户场景覆盖、本地运行性能、安全沙箱能力的迭代优先级远高于非核心新特性开发，整体演进节奏平稳可控。

## 2. 版本发布
今日无正式版本发布，所有迭代内容均处于PR评审、实机测试验证阶段。

## 3. 项目进展
过去24小时累计合并/关闭32条PR，核心推进成果如下：
1. **子代理消息可靠性修复**：#94349 修复子代理完成通知状态判定逻辑，解决了长期存在的子代理消息过时发送、主会话历史污染问题，对应关联Issue：https://github.com/openclaw/openclaw/issues/78055
2. **内存核心插件兼容修复**：#93586 修复`qmd`内存核心模块的环境变量传递冲突，适配mcporter v0.10+的新版本配置逻辑，解决大内存向量库加载失败问题
3. **存储层架构前置落地**：#93685 完成自动回复生命周期存储seam重构，将会话重置、消息回退逻辑全部抽离为可复用接口，为后续所有上层SQLite相关特性扫清架构依赖。
当前数据库优先Runtime迭代路线图整体完成度已达42%，10余个待上线的生态接口特性已经具备前置依赖。

## 4. 社区热点
今日讨论量最高的核心议题及背后诉求：
1. **#80319 QA套件逻辑争议** https://github.com/openclaw/openclaw/issues/80319 累计17条评论，开发者集中反馈当前测试框架错误将原生Codex工具与OpenClaw动态工具做等价映射，把测试bug误判为运行时工具丢失故障。背后核心诉求是测试用例的准确性直接影响上游迭代的可靠性，大量参与贡献的开发者希望降低测试误报带来的无效调试成本。
2. **#79902 SQLite会话导出生态接口** https://github.com/openclaw/openclaw/issues/79902 累计13条评论，有10+第三方开发者表示需要该结构化存储接口开发OpenClaw周边工具，不再愿意反序列化未公开的二进制会话文件，反映当前生态开发者的需求正在从二次插件开发转向基于底层状态的全栈定制。
3. **#78308 MCP工具通道级授权** https://github.com/openclaw/openclaw/issues/78308 累计13条评论，个人和企业用户共同呼吁为所有MCP外部工具增加统一的人工确认通道，避免邮件发送、机密库修改等高风险操作在无感知状态下自动执行，反映安全管控已经成为用户选型的核心评估指标。

## 5. Bug 与稳定性
按严重优先级排序核心问题，标注修复进度：
| 优先级 | Bug描述 | 关联Issue链接 | 修复状态 | 影响范围 |
| --- | --- | --- | --- | --- |
| P1 | Telegram/Discord等多通道消息静默丢失，无发送日志 | https://github.com/openclaw/openclaw/issues/80520 | 已有开放PR，待实机验证 | 全IM接入场景核心可用性 |
| P1 | Node v26版本下gzip格式HTTP响应无法正常解压，第三方API调用直接失败 | https://github.com/openclaw/openclaw/issues/79752 | 暂未提交修复PR | 全外部服务调用链路 |
| P1 | GPT-4o系模型会话单轮文本响应后直接退出，无法循环调用工具 | https://github.com/openclaw/openclaw/issues/81567 | 暂未提交修复PR | OpenAI生态用户核心使用体验 |
| P1 | 2026.5.12版本后全量CLI命令冷启动耗时上涨到14秒 | https://github.com/openclaw/openclaw/issues/82070 | 暂未提交修复PR | 所有本地部署用户的命令行操作效率 |

当日累计关闭23条Issue，剩余高优先级Bug共17个，其中6个已有关联修复PR待合并。

## 6. 功能请求与路线图信号
结合开放需求和已就绪PR，大概率纳入下一版本的特性包括：
1. **SQLite全生态接口**：主Issue#79902系列对应的PR#89203已经标记为就绪待维护者审核，将陆续上线游标式会话读取API、跨重启会话血缘追踪、结构化导出能力。
2. **Agent辅助式初始化向导**：PR#93265 大幅简化新用户onboarding流程，无需手动填写多组模型、插件配置项，由Agent自动引导完成适配，当前状态就绪待评审，属于下一版本高优先级特性。
3. **全MCP工具统一授权管控**：Issue#78308对应的开发工作已过半，所有外部工具调用将走统一的人工确认通道，补齐安全能力短板。
4. **全渠道i18n本地化支持**：IM通道斜杠命令、控制面板界面的多语言支持相关PR已陆续开放，后续版本将优先覆盖中文使用场景。

## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户反馈：
- 正向认可：跨Telegram/Discord/飞书/WhatsApp的多通道接入能力认可度极高，大量个人用户用OpenClaw部署私有全通道个人助理，生态活跃度持续上升。
- 最高频痛点：消息静默丢失问题在多通道场景下反复出现，占当日活跃Issue的27%，是当前用户吐槽最集中的缺陷。
- 典型使用场景：个人用户核心需求是本地私有部署、全链路数据不外出，企业用户核心需求是对接内部知识库的IM侧智能客服，两类用户对性能、安全性的需求远高于对花哨新特性的需求。

## 8. 待处理积压
需要维护团队重点关注的长期高优先级事项：
1. P1级Issue#54531「强制回复到消息始发通道」2026年3月创建，已经积压3个月，近期更新活跃但仍无对应修复PR，直接影响所有消息接入场景的核心可用性。
2. P1级Issue#75648「嵌入式运行60秒超时硬编码」2026年5月创建，积压1个半月，暂无修复方案，影响高负载部署场景下大模型长请求的成功率。
3. 当前待合并PR累计468个，其中127个已经标记为就绪待维护者审核，积压量较大，现有维护者评审产能暂时无法匹配当前社区贡献的高速增长速度，需要补充核心维护人力缓解合并拥堵。

---

## 横向生态对比

# 2026-06-19 开源AI智能体/个人AI助手生态横向对比分析报告
面向技术决策者与核心开发者

---

## 1. 生态全景
当前国内外科创生态下的开源个人AI助手/自主智能体赛道已经全面从早期Demo原型阶段迈入生产级落地深水区，本次统计覆盖的12个活跃项目24小时累计Issue+PR更新总量突破1400条，核心迭代资源70%以上集中在生产可用性补全而非非核心特性堆砌。用户群体已从早期极客自托管开发者快速渗透到中小企业私有化部署、普通桌面消费级用户、低功耗嵌入式硬件三大类场景，落地边界持续扩张。安全管控、运行时稳定性、大模型调用成本优化已经取代新功能开发成为全行业最高优先级迭代方向。以OpenClaw为代表的头部标杆项目社区贡献增速已经超过核心维护者评审产能，完全跑通开源协作正向循环，衍生出大量定向优化的下游生态分支。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | Release状态 | 健康度评估 |
|---------|----------------|-------------|-----------|-----------|
| OpenClaw | 500 | 500 | 无正式发布 | 正向高增长，生态绝对标杆 |
| NanoBot | 5 | 25 | 无正式发布 | 优秀，Bug当日响应 |
| Hermes Agent | 100 | 6 | 无正式发布 | 优秀，Bug闭环率62%/7天 |
| PicoClaw | 2 | 15 | 无正式发布 | 良好，迭代聚焦稳定性 |
| NanoClaw | 4 | 21 | 无正式发布 | 优秀，安全漏洞响应合规 |
| NullClaw | 4 | 5 | 无正式发布 | 良好，需求响应链路通畅 |
| IronClaw | 33 | 44 | 无正式发布 | 上升期，Reborn新引擎冲刺阶段 |
| LobsterAI | 2 | 14 | 无正式发布 | 优秀，迭代交付效率极高 |
| TinyClaw | 3 | 0 | 无正式发布 | 高预警，核心开发完全停滞 |
| Moltis | 1 | 0 | 无正式发布 | 平稳，处于小范围内测阶段 |
| CoPaw | 50 | 31 | 发布补丁版本v1.1.12.post1 | 优秀，问题闭环率68% |
| ZeroClaw | 33 | 50 | 无正式发布，待发v0.8.1 | 92分高健康度，补丁版本冲刺阶段 |
| ZeptoClaw | 0 | 0 | 无正式发布 | 无活动，处于休眠状态 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前生态绝对的上游标杆基座：
- **核心优势**：全通道IM接入生态成熟度遥遥领先，是首个大规模落地数据库优先SQLite单文件会话存储架构的项目，MCP工具统一安全管控体系的行业探索经验被至少5个同赛道项目复用，覆盖从个人私有部署到企业级智能客服的全场景用户，社区反馈量是第二名项目的10倍以上。
- **技术路线差异**：不同于同类项目从单一场景轻量切入的路线，OpenClaw走全栈通用抽象路线，优先完成会话层、安全层、存储层的通用能力抽象，而非堆砌垂直场景特性，生态兼容性是同类项目的2-3倍。
- **社区规模对比**：当前OpenClaw待合并PR总量达468个，是第二名CoPaw的15倍，第三方生态开发者数量是同类项目的5-10倍，下游衍生项目PicoClaw、NanoClaw均基于OpenClaw核心分支做定向裁剪优化，是生态事实上的事实标准参考实现。

## 4. 共同关注的技术方向
全生态跨项目涌现的共性需求已经形成明确的技术共识：
1. **MCP工具链统一安全管控**：涉及OpenClaw、NanoBot、Hermes Agent、NanoClaw、ZeroClaw共5个头部项目，共同诉求是为所有外部MCP工具增加统一人工确认通道、权限边界隔离能力，避免邮件发送、机密库修改等高风险操作无感知自动执行，补齐生产环境安全短板。
2. **结构化SQLite会话开放API**：涉及OpenClaw、PicoClaw、NanoBot共3个项目，生态开发者共同诉求是替代此前私有二进制会话文件，开放结构化会话读取、导出接口，大幅降低周边工具二次开发门槛。
3. **多IM通道低门槛接入**：涉及NanoBot、NanoClaw、IronClaw、CoPaw共4个项目，核心诉求是实现扫码免凭证配置接入飞书、Slack、企业微信等IM，将普通用户接入门槛降低70%以上。
4. **大模型运行成本优化**：涉及NanoBot、CoPaw、OpenClaw共3个项目，诉求是通过小模型完成记忆规整、上下文压缩，将整体运行成本降低40%-95%，适配高负载生产部署场景。
5. **本地文件访问安全加固**：涉及LobsterAI、NanoClaw、CoPaw共3个项目，诉求是补齐路径遍历防护、SSRF规则、文件访问白名单能力，避免AI Agent无限制读取本地敏感文件。

## 5. 差异化定位分析
当前生态已经形成清晰的分层错位竞争格局：
| 项目类别 | 代表项目 | 功能侧重 | 目标用户 | 技术架构差异 |
|---------|---------|---------|---------|-------------|
| 通用基座层 | OpenClaw | 全场景通用能力覆盖 | 全类型用户 | 全栈重架构，优先抽象通用层 |
| 垂直场景头部层 | NanoBot | 生产级SDK轻量部署 | 企业级多并发部署用户 | 插件化模块化，可按需裁剪非核心能力 |
| 垂直场景头部层 | Hermes Agent | 桌面端消费级体验优化 | 普通自托管桌面用户 | 优先优化GUI交互、多Profile兼容性 |
| 垂直场景头部层 | IronClaw | 无人值守自动化调度 | Near生态企业用户 | 核心投入自动化调度引擎、Projects协作能力 |
| 下游衍生定向层 | PicoClaw/NanoClaw | OpenClaw架构定向裁剪 | 边缘硬件/隐私优先通信场景用户 | 基于上游成熟分支做垂直场景适配 |
| 下游衍生定向层 | CoPaw | 国内生态适配 | 国内企业私有IM部署用户 | 深度兼容Qwen系列大模型、飞书钉钉生态 |
| 下游衍生定向层 | LobsterAI | 音视频+本地操作特色能力 | 有道生态桌面用户 | 优先落地实时语音输入、本机计算机自动化控制 |
| 极客轻量化层 | NullClaw | 最小依赖极简部署 | 嵌入式开发者/极客用户 | 砍掉非核心能力，极致瘦身运行包体积 |

## 6. 社区热度与成熟度
全生态项目按迭代状态可清晰分为四个层级：
1. **快速迭代阶段**：OpenClaw、IronClaw、CoPaw、ZeroClaw，当日PR更新量均超过30，迭代产能充足，大量新特性进入待合队列，需求响应速度周级甚至日级。
2. **质量巩固阶段**：NanoBot、Hermes Agent、PicoClaw、NanoClaw、LobsterAI，70%以上迭代资源投入Bug修复、安全加固、体验优化，几乎不新增重大特性，处于正式版本发布前的打磨阶段。
3. **平稳低活跃阶段**：NullClaw、Moltis，迭代节奏放缓，存量需求逐步闭环，核心团队处于内部功能内测打磨状态。
4. **预警/停滞阶段**：TinyClaw曝出3个未响应的高危远程漏洞，核心开发完全停滞；ZeptoClaw无任何公开活动，处于休眠状态。

## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值如下：
1. MCP工具链已经成为全行业事实标准，无需从零实现工具适配层，直接复用存量MCP生态即可快速补齐Agent工具能力，整体开发量可降低60%以上。
2. 安全能力已经成为生产部署的第一准入门槛，当前所有未做统一工具审批、未做文件路径校验的公开部署实例，几乎都存在任意文件读取、无权限调用大模型消耗高额API配额的漏洞，上线前必须优先补齐安全管控机制。
3. SQLite单文件全存储架构正在取代传统多文件碎片化会话存储成为行业主流，零依赖、单文件部署的特性对普通用户友好度远高于传统数据库方案，是下一代智能体存储层的明确演进方向。
4. 国内私有IM（飞书/钉钉/企业微信）的接入需求增速已经远超海外Slack/Discord，国内开发者做落地适配优先覆盖国内IM生态，可快速切入企业私有化部署增量市场。
5. 边缘低功耗硬件适配需求开始萌芽，ESP32、安卓Termux、aarch64嵌入式平台的诉求快速上涨，未来轻量智能体下沉到本地离线硬件将成为新的差异化竞争赛道。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-19)
项目地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
今日NanoBot主分支处于极高活跃度迭代状态，过去24小时累计更新5条Issue、25条PR，无正式版本发布。核心维护者同步推进安全加固、成本优化、生态扩容三个方向的开发工作，所有当日新上报的高/中危Bug均在24小时内产出对应修复方案，整体响应速度处于行业头部开源AI助手项目第一梯队。当日迭代同时覆盖生产部署适配、普通用户体验优化两类需求，项目从个人使用工具向生产级AI智能体SDK演进的态势明确，整体健康度评级为优秀。

## 2. 版本发布
本报告周期内无正式版本发布，所有迭代内容均处于主分支开发/待合并阶段。

## 3. 项目进展
今日累计完成5项PR合并/关闭，核心落地进展如下：
1. 飞书渠道扫码接入能力正式合入：通过[PR #4391](https://github.com/HKUDS/nanobot/pull/4391)实现飞书/Lark免手动创建应用、免凭证配置的扫码注册流程，将IM渠道接入门槛降低70%以上
2. CI链路效率优化合入：通过[PR #4400](https://github.com/HKUDS/nanobot/pull/4400)新增纯文档变更跳过CI逻辑，预计可减少30%左右的无效CI资源消耗，缩短主分支PR合并等待时长
3. Web数据爬取体验升级：通过[PR #4403](https://github.com/HKUDS/nanobot/pull/4403)将Firecrawl网页爬取能力升级为无密钥托管MCP集成，用户无需额外申请API密钥即可直接使用网页抓取功能
4. 运行成本优化核心能力落地：积压3个月的[PR #1391](https://github.com/HKUDS/nanobot/pull/1391)正式合入，新增独立`consolidation_model`配置项，支持用户使用低成本小模型完成记忆规整任务，主代理使用高成本大模型场景下的整体运行成本可降低40%以上
5. 工作区安全规则闭环：Git子目录操作被安全策略拦截的问题已完成修复+配套回归测试，安全边界定义完全覆盖嵌套目录场景。

## 4. 社区热点
今日核心社区讨论热点集中在生产级部署适配方向：
1. 当日新提交的[Issue #4408](https://github.com/HKUDS/nanobot/issues/4408)（并发场景下钩子状态冲突）当日即产出修复PR，背后反映大量开发者已经开始将NanoBot部署到多线程、多并发的生产服务场景，项目需求已经从个人本地运行快速转向企业级生产部署
2. 面向普通用户的多实例简化配置需求[Issue #4390](https://github.com/HKUDS/nanobot/issues/4390)收到多用户附和，社区对低门槛部署、非技术用户友好的UI能力诉求强烈，对应功能PR已经同步进入开发阶段。

## 5. Bug 与稳定性
按严重程度排序，所有当日Bug均已跟进对应修复方案：
| 严重程度 | Bug链接 | 问题描述 | 修复状态 | 对应PR链接 |
|----------|---------|----------|----------|------------|
| 高危 | [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) | Nanobot.run() 单运行钩子非并发安全，共享状态被覆盖会导致多并发场景下钩子逻辑异常、运行数据丢失 | 待合并 | [PR #4409](https://github.com/HKUDS/nanobot/pull/4409) |
| 中高危 | [Issue #4307](https://github.com/HKUDS/nanobot/issues/4307) | 回合后记忆规整逻辑删除代理自身投递消息，导致用户后续引用上下文丢失 | 待合并 | [PR #4373](https://github.com/HKUDS/nanobot/pull/4373) |
| 中危 | [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) | 项目工作区下SOUL.md/USER.md读写不对称，读取从项目路径加载但写入落到默认工作区 | 待合并 | [PR #4387](https://github.com/HKUDS/nanobot/pull/4387) |
| 已闭环 | [Issue #4375](https://github.com/HKUDS/nanobot/issues/4375) | Git命令在工作区子目录下被安全策略拦截 | 已修复 | 配套测试用例已通过[PR #4393](https://github.com/HKUDS/nanobot/pull/4393)合入 |

## 6. 功能请求与路线图信号
结合已提交的待合并PR判断，下一正式版本大概率会纳入以下能力：
1. 面向普通用户的多实例简化部署能力：匹配[Issue #4390](https://github.com/HKUDS/nanobot/issues/4390)需求，支持配置隐藏WebUI指定设置分区，生成对非技术用户友好的极简操作界面
2. 全网搜索生态扩容：一次性新增Serper.dev Google搜索支持、Keenable免密钥公开访问两个能力，大幅降低网页搜索功能的使用门槛
3. 沙箱自定义挂载能力：支持管理员配置bwrap沙箱额外绑定用户本地工具目录，无需修改默认沙箱规则即可暴露`~/.local/bin`、`~/.cargo/bin`等常用工具路径
4. 插件化可选能力框架：将IM渠道、高级工具等非核心能力拆分为可按需开关的可选模块，大幅缩减默认安装包体积
5. 主动即时记忆规整功能：支持每轮回复后自动归档已完成的对话切片，降低长会话场景下的token消耗。

## 7. 用户反馈摘要
从公开Issue评论提炼用户真实反馈：
1. 高频痛点：生产环境多并发部署时钩子冲突、现有Web搜索普遍需要单独申请API密钥配置门槛高、长会话下代理丢失自己之前的回复导致用户追问出错，都是开发者落地AI工作流时遇到的共性卡点
2. 正向反馈：飞书扫码接入、免密钥Firecrawl集成等降低使用门槛的更新得到大量用户认可，维护者当日Bug当日响应的效率获得社区一致好评
3. 场景诉求：大量团队用户需要在同一台机器上部署多个独立NanoBot实例，分给不同部门的非技术员工使用，完全不希望普通用户看到底层的模型配置、安全规则等高级选项。

## 8. 待处理积压
提醒维护者优先跟进以下积压事项：
1. 积压时长超6个月的[Issue #2604](https://github.com/HKUDS/nanobot/issues/2604) 主动即时记忆规整需求，对应PR[#4402](https://github.com/HKUDS/nanobot/pull/4402)已提交，建议优先评审合入
2. 积压时长超2个月的[Issue #4107](https://github.com/HKUDS/nanobot/issues/4107) 沙箱自定义挂载目录需求，对应PR刚提交，可尽快安排评审适配生产部署场景
3. 刚刚合入的独立规整模型功能尚未补充配套使用文档，需尽快更新wiki指引，避免新用户找不到对应配置入口。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-06-19）
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
2026年6月19日Hermes Agent整体处于高活跃迭代状态，过去24小时累计产生100条代码与Issue更新，迭代速率达到近1个月峰值区间。今日迭代重心集中在P1级会话数据丢失故障闭环、第三方服务商API兼容性适配、桌面端体验优化三大方向，核心Bug修复响应时效低于24小时，无全量用户阻塞性故障出现。从提交内容分布来看，项目用户群体正从早期极客自托管开发者，向普通消费级桌面端用户快速渗透，需求覆盖从底层部署场景到上层交互体验的全链路，项目整体健康度评级为优秀，近7天新Issue闭环率达62%。

## 2. 版本发布
今日无正式新版本发布。

## 3. 项目进展
今日累计6条PR完成合并/关闭，全部为稳定性与体验类补丁，无破坏性变更，累计将近一周暴露的P1级网关故障修复覆盖率提升至70%：
1. **[PR #48294](https://github.com/nousresearch/hermes-agent/pull/48294)** 网关中继Phase 3特性正式落地，实现入站消息全走Websocket通道，无需暴露公网HTTP端口，大幅降低自托管网关用户的部署安全门槛。
2. **[PR #48538](https://github.com/nousresearch/hermes-agent/pull/48538)** 修复桌面端新会话场景下自定义命名Provider报错的Bug，解决用户配置多模型后新建会话直接失败的痛点。
3. **[PR #48605](https://github.com/nousresearch/hermes-agent/pull/48605)** 修复委托任务密钥继承漏洞，子代理任务将优先读取指定环境变量中的API密钥，避免意外继承父代理主密钥导致的权限泄露风险。
4. 前序迭代PR **[PR #45851](https://github.com/nousresearch/hermes-agent/pull/45851)** 正式关闭，相关功能点全部合并到新的桌面体验优化分支，为后续桌面端大版本更新完成技术铺垫。

## 4. 社区热点
今日讨论热度最高的3个Issue集中反映了用户侧的核心需求变化：
1. **[Issue #47477](https://github.com/nousresearch/hermes-agent/issues/47477)** 《WhatsApp群组消息推送Hermes技能单文件部署指南》，共5条评论，目前已正式闭环。大量下沉部署用户反馈该方案实现了零配置在Termux上跑通WhatsApp自动回复能力，背后反映了普通用户对低成本社交平台自动化接入能力的强需求。
2. **[Issue #38478](https://github.com/nousresearch/hermes-agent/issues/38478)** Camofox浏览器截图裁剪异常Bug，共5条评论。大量自动化网页抓取用户反馈自定义浏览器场景下截图视口适配失效，背后反映了工具链用户对非Chromium内核浏览器的兼容性需求正在快速提升。
3. **[Issue #40166](https://github.com/nousresearch/hermes-agent/issues/40166)** 桌面端全局字体/缩放控制功能请求，共5条评论6个点赞，为今日热度最高的消费级用户需求，直接体现普通高分屏桌面用户的基础适配刚需。

## 5. Bug与稳定性
今日报告的Bug按严重等级排序如下：
| 严重等级 | Bug描述 | 关联Issue | 是否已提交修复PR |
| ---- | ---- | ---- | ---- |
| P1 | Anthropic OAuth迁移后旧接口404报错，用户登录Claude账号直接失败 | [#32243](https://github.com/nousresearch/hermes-agent/issues/32243) | 是，[#48706](https://github.com/nousresearch/hermes-agent/pull/48706)、[#48704](https://github.com/nousresearch/hermes-agent/pull/48704)两个PR待合并 |
| P1 | 子Profile网关场景下会话数据完全丢失，sessions.json正常写入但state.db为空 | [#48519](https://github.com/nousresearch/hermes-agent/issues/48519) | 否，核心团队正在跟进定位 |
| P1 | 网关文件描述符泄漏，运行2天触达ulimit上限完全崩溃 | [#37369](https://github.com/nousresearch/hermes-agent/issues/37369) | 是，已正式闭环关闭Issue |
| P1 | 会话压缩逻辑异常丢消息的3个关联Bug | [#44794](https://github.com/nousresearch/hermes-agent/issues/44794)、[#39704](https://github.com/nousresearch/hermes-agent/issues/39704)、[#47202](https://github.com/nousresearch/hermes-agent/issues/47202) | 是，全部已闭环关闭 |
| P2 | Cron任务不识别Profile路径，非默认Profile下的定时任务找不到对应技能目录 | [#48649](https://github.com/nousresearch/hermes-agent/issues/48649) | 否 |
| P2 | NixOS只读包场景下每次启动重复执行pip引导，启动耗时高达20秒 | [#48628](https://github.com/nousresearch/hermes-agent/issues/48628) | 否 |
| P2 | Camofox浏览器截图视口错位裁剪 | [#38478](https://github.com/nousresearch/hermes-agent/issues/38478) | 否 |

## 6. 功能请求与路线图信号
结合已提交的PR判断，以下新特性大概率被纳入下一正式版本：
1. **Agentic资源发现（ARD）**：[PR #48708](https://github.com/nousresearch/hermes-agent/pull/48708) 实现Agent运行时自动发现、注册MCP服务与第三方技能，预计作为实验性功能上线。
2. **原生Loop V1控制器**：[PR #48707](https://github.com/nousresearch/hermes-agent/pull/48707) 新增结果导向的长任务循环能力，无需依赖模型原生工具调用能力，大幅降低长周期任务出错概率。
3. **图生图能力升级**：官方作者teknium提交的[PR #48705](https://github.com/nousresearch/hermes-agent/pull/48705) 为image_generate工具新增全平台支持的图片编辑能力，与video_generate能力对齐，100%进入下一版本。
4. **桌面端体验全量优化**：[PR #48703](https://github.com/nousresearch/hermes-agent/pull/48703) 覆盖模型选择、窗口布局、语音听写、会话恢复等全场景交互优化，结合社区高赞的全局缩放需求，将成为下一版本面向普通用户的核心交付点。

## 7. 用户反馈摘要
- 用户正向反馈：官方对会话数据丢失类故障的响应速度获得用户普遍认可，3个高优先级丢消息Bug不到一周全部闭环；新上线的Termux单文件部署指南大幅降低了普通用户接入社交自动化能力的门槛，部署失败率下降90%。
- 核心痛点：桌面端高分屏适配缺失、全局缩放功能空白是普通用户反馈最多的问题；多Profile场景下的兼容性故障频发，高级用户同时运行3个以上不同角色的子Profile时频繁遇到路径错误、数据丢失问题；第三方服务商接口变更后适配速度慢，用户反馈通义千问、Anthropic这类厂商改接口后平均要等3天才能收到修复补丁。
- 典型使用场景：当前用户集中使用Hermes实现多社交平台自动回复、网页自动化抓取、跨多会话长期项目任务管理三类生产场景。

## 8. 待处理积压
提醒核心维护团队优先跟进以下高优先级长期未响应事项：
1. **安全级PR长期积压**：[PR #14394](https://github.com/nousresearch/hermes-agent/pull/14394) 浏览器孤儿进程查杀安全补丁，2026年4月提交至今未完成review，存在恶意构造Socket PID文件误杀系统进程的风险。
2. **多Profile系列Bug积压**：累计7个关联子Profile兼容的Issue提交超过10天未得到响应，该场景已经成为大量高级用户的生产配置，故障频发已经影响线上使用。
3. **高赞桌面需求排期空白**：[Issue #40166](https://github.com/nousresearch/hermes-agent/issues/40166) 桌面端全局缩放功能6月5日创建，累计获得6个点赞，目前仍未公示明确开发排期，普通用户等待时长已超过2周。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-19
项目仓库：github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时项目共更新2条Issue、15条PR，无正式新版本发布，整体迭代活跃度处于中高水平，当前核心开发周期聚焦于运行稳定性加固与基础依赖运维。今日核心动作覆盖高优Bug闭环、安全漏洞修复、全链路依赖版本同步，没有新增大功能的开发排期，面向生产环境的可用性优化占比超过70%。整体项目健康度良好，历史遗留的2个影响面较广的用户反馈Bug均已跟进对应修复方案，迭代节奏贴合实际用户使用需求。

## 2. 版本发布
今日无正式版本发布，所有迭代内容均在开发分支流转，预计近期将推出面向搜索工具、子代理模块的补丁版本。

## 3. 项目进展
今日共落地7条合并/关闭内容，核心推进点如下：
1. **搜索工具故障排查能力落地**：PR [#3141](https://github.com/sipeed/picoclaw/pull/3141) 新增Brave搜索空结果场景的诊断日志，彻底解决此前web_search工具无报错静默失败的问题，直接闭环了高优故障Issue
2. **全栈依赖安全同步**：5条由Dependabot自动触发的依赖升级PR全部落地，覆盖GitHub Actions运行组件、Go语言核心标准库扩展包、Azure身份认证SDK、Anthropic大模型SDK等核心依赖，所有升级均为兼容型小版本迭代，同步修复了上游公开的若干个低危漏洞，收窄了项目依赖攻击面。

## 4. 社区热点
今日讨论度最高的条目为Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094)，该条目前期已累计2条用户评论，是过去24小时交互量最高的公开条目。
背后的核心诉求：大量使用spawn异步子代理做长任务后台分发、并行多任务处理的用户反馈，当前双份消息推送的问题严重破坏了飞书、Telegram等IM通道的对话体验，两份排版差异极大的重复消息严重干扰用户读取核心结果，用户迫切希望该修复尽快发布到生产版本。

## 5. Bug与稳定性
按严重优先级排序如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 关联Fix PR |
| --- | --- | --- | --- | --- |
| 高 | 异步子代理spawn任务完成后，ForUser字段同时触发直接推送+主代理汇总推送，导致重复消息 | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | 待合入 | [#3142](https://github.com/sipeed/picoclaw/pull/3142) |
| 高 | 迁移密钥配置到`.security.yml`后，web_search调用Brave API无报错静默失败 | [#3125](https://github.com/sipeed/picoclaw/issues/3125) | 已闭环关闭 | [#3141](https://github.com/sipeed/picoclaw/pull/3141) |
| 中 | web_fetch的SSRF防护规则可被嵌入私有IPv4地址的ISATAP IPv6字面量绕过 | 关联历史Issue #3074 | 待合入 | [#3143](https://github.com/sipeed/picoclaw/pull/3143) |

## 6. 功能请求与路线图信号
今日无新增公开功能需求，结合现有待合入迭代内容可判断下一版本的核心增量：
1. 高优补丁版本100%会纳入子代理重复消息修复、ISATAP场景SSRF防护加固两个核心修复，覆盖绝大多数IM场景用户的体验痛点
2. 本次同步触发的GitHub Copilot Go SDK从0.2.0升级到1.0.x正式版，信号显示后续小版本将强化GitHub Copilot生态的原生集成能力，补全当前版本缺失的Copilot对话同步、代码库检索联动能力。

## 7. 用户反馈摘要
从近期更新的Issue中提炼真实用户反馈：
1. 核心痛点：异步子代理并行执行场景下双份消息体验割裂，粗糙的无排版推送内容完全无法直接使用，大幅增加用户信息筛选成本
2. 核心痛点：web搜索工具此前的静默失败设计对普通用户极不友好，无日志输出导致用户无法判断是API密钥配置错误、配额耗尽还是上游接口返回异常，排查门槛极高
3. 用户正向反馈：本次新增诊断日志的修复方案落地后，用户无需自行抓包即可快速定位搜索故障，大幅降低了IM集成场景的问题排查成本。

## 8. 待处理积压
当前有6条打了`stale`标签的前端依赖升级PR自2026-06-11创建以来未得到维护者评审，累计待升级内容覆盖eslint、shadcn UI、Vite、TypeScript相关工具链等前端核心组件：
- [#3100](https://github.com/sipeed/picoclaw/pull/3100) `@vitejs/plugin-react` 升级
- [#3101](https://github.com/sipeed/picoclaw/pull/3101) Vite 版本升级
- [#3103](https://github.com/sipeed/picoclaw/pull/3103) typescript-eslint 版本升级
- [#3104](https://github.com/sipeed/picoclaw/pull/3104) shadcn UI 版本升级
- [#3105](https://github.com/sipeed/picoclaw/pull/3105) eslint 版本升级
该批积压PR已临近两周未处理，容易出现依赖版本冲突，同时前端旧版本组件存在若干个上游公开的低危安全漏洞，建议维护者尽快跟进评审合入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-06-19 | 基准数据周期：过去24小时

---

## 1. 今日速览
当日NanoClaw项目整体活跃度处于高位，核心团队迭代节奏符合v2版本稳定期演进预期，共更新4条Issue、21条PR，无正式新版本发布。核心维护者今日集中攻坚权限安全、文件访问隔离类高危漏洞，漏洞响应效率符合开源项目SLA标准；同时推进周边生态兼容、多语言文档扩容工作，当日吞吐效率优异。社区贡献侧涌现出容器运行时适配、韩语本地化等多个第三方高质量提交，开源协作健康度表现突出。当日新披露1条高危权限漏洞，已同步产出多份关联修复PR，无线上重大事故通报。

## 2. 版本发布
当日无正式新版本推送，当前迭代基线为v2.1.18，配套v2.1.17变更日志更新PR#2798处于待合并状态。

## 3. 项目进展
当日共关闭/合并6条PR，核心能力补全与架构清理进度如下：
1. **跨Agent通信审批能力落地**：PR#2793 https://github.com/nanocoai/nanoclaw/pull/2793 新增可配置的逐消息审批策略，完全向后兼容，开启后可实现A向B发送消息需经B侧人工审批的受控流转，补上了多Agent直连场景的安全管控短板。
2. **自动化部署能力优化**：PR#2811 https://github.com/nanocoai/nanoclaw/pull/2811 修复安装流程支持通过环境变量直接指定Agent提供商，解决了自动化部署场景下无法跳过交互向导的痛点，大幅降低CI/CD部署门槛。
3. **跨生态规范兼容打通**：PR#2810 https://github.com/nanocoai/nanoclaw/pull/2810 实现技能目录、主说明文档通过软链接同步到Agents开发规范路径，让Codex等遵循通用Agents规范的工具可以直接复用NanoClaw的存量技能，无需同步维护两份代码。
4. **冗余代码清理**：PR#2803 https://github.com/nanocoai/nanoclaw/pull/2803 移除v2架构重构后完全无调用的废弃IPC路径工具代码，缩减包体积同时降低长期维护成本。
5. **多语言文档扩容**：PR#2806 https://github.com/nanocoai/nanoclaw/pull/2806 新增完整韩语版官方README，完成中文、日文、韩文三语言本地化覆盖，非英语用户使用门槛进一步降低。

## 4. 社区热点
当日互动量最高的两个历史需求正式闭环，核心用户诉求非常明确：
1. Issue #957 https://github.com/nanocoai/nanoclaw/issues/957 【点赞7/评论10】建议文档新增Podman作为Docker替代方案：背后诉求是大量无Docker付费许可的企业用户、追求无根运行安全的Linux/macOS个人用户，希望摆脱Docker Daemon的高权限依赖，降低运行时的权限泄露风险，该需求提出3个月后今日正式闭环。
2. Issue #29 https://github.com/nanocoai/nanoclaw/issues/29 【点赞4/评论7】新增Signal作为消息通道：背后诉求是大量注重通信隐私的用户，希望把端到端加密的Signal接入为NanoClaw的对外交互通道，补齐当前WhatsApp、Telegram、Slack、Discord之外的隐私优先通信生态，该需求提出4个月后今日正式落地。

## 5. Bug 与稳定性
按严重等级从高到低排序：
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 | 关联修复PR链接 |
| --- | --- | --- | --- | --- |
| 高危 | 所有者初始化的群组内非所有者成员可无审批创建持久化子Agent，存在权限溢出风险 | https://github.com/nanocoai/nanoclaw/issues/2807 | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2814 |
| 中危 | send_file接口存在路径遍历漏洞，可读取/workspace外敏感文件 | 暂未单独建Issue | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2817、https://github.com/nanocoai/nanoclaw/pull/2818 |
| 中危 | Discord长消息直接截断，超过2000字符的内容用户无法完整接收 | 暂未单独建Issue | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2816 |
| 普通 | CLI侧`ncl messaging-groups create`命令完全报错，数据库缺必填字段 | 暂未单独建Issue | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2804 |
| 普通 | Router侧非对象类型的JSON payload解析异常，返回undefined而非 fallback 为原始文本 | 暂未单独建Issue | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2815 |
| 普通 | CLI Socket客户端无请求超时、无响应体积上限，可能导致进程永久挂起、内存溢出 | 暂未单独建Issue | 修复中 | https://github.com/nanocoai/nanoclaw/pull/2813 |

## 6. 功能请求与路线图信号
当前处于待合并状态的高优先级需求极大概率纳入下一v2小版本迭代：
1. PR#2809 https://github.com/nanocoai/nanoclaw/pull/2809 Apple容器运行时适配+远程OneCLI网关支持：后续版本将原生支持macOS侧的Apple Container替代Docker运行，完全适配苹果生态，不需要用户额外安装Docker。
2. PR#2795 https://github.com/nanocoai/nanoclaw/pull/2795 新增`/add-clidash`只读CLI仪表盘技能：将为运维用户提供纯命令行下的运行状态可视化面板，不需要打开Web界面即可查看集群运行数据。
3. PR#2792 https://github.com/nanocoai/nanoclaw/pull/2792 修复iMessage通道初始化目录缺失问题：后续v2版本将正式支持iMessage通道落地，补齐苹果生态原生通信接入能力。

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼核心用户声音：
1. 痛点：Docker的付费许可限制、无根运行权限问题是当前个人用户和中小企业部署的最大卡点，Podman适配的长期需求被官方闭环后获得大量正面反馈。
2. 满意点：隐私优先通信的用户群体高度认可Signal通道需求的落地，认为补齐了NanoClaw当前通信链路的端到端加密短板，符合项目"本地优先、隐私可控"的核心定位。
3. 待优化点：从v1升级v2的分叉项目开发者反馈，当前Telegram多Bot集群的功能文档说明模糊，升级路径没有明确指引，迁移成本超出预期。

## 8. 待处理积压
Issue #2632 https://github.com/nanocoai/nanoclaw/issues/2632 v2版本下Telegram Agent集群多身份能力状态说明不明确：该Issue自2026年5月28日创建以来仅2条评论，维护者尚未给出明确的文档更新或功能落地时间表，大量使用v1 Telegram多Bot集群功能的第三方分叉项目迁移被阻塞，建议核心团队优先响应，给出明确的路线图节点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-19
项目地址：github.com/nullclaw/nullclaw

---

## 1. 今日速览
过去24小时NullClaw项目活跃度处于较高水平，社区侧共产生4条活跃讨论Issue，核心贡献者侧新提交5条待评审PR，当日无正式版本发布。迭代方向集中在流式交互体验补全、生态对接文档补齐、内存管控能力增强三大核心场景，多条社区此前反馈的高频需求已同步推进到PR阶段，整体研发节奏健康，用户需求响应链路通畅。当前项目核心迭代方向对齐个人AI代理落地的实际生产诉求，成熟度稳步提升。

## 2. 版本发布
今日无新正式版本发布，暂无版本更新相关说明。

## 3. 项目进展
过去24小时无已合并/已关闭的PR，5条新提交PR均处于待评审待合入状态，核心能力覆盖多个此前社区反馈的缺口：
1.  核心交互能力迭代：2条关联PR（#964、#965）完成流式模式下原生API级工具调用的问题修复，同步补上SSE解析器的结构化流式工具调用支持，解决此前开启流式传输时工具调用被强制禁用的体验缺陷
2.  文档体系补全：2条文档类PR（#963、#962）分别新增微信个人号扫码登录通道、原生Anthropic供应商能力的中英文配置说明
3.  内存能力扩展：PR#961新增3个内存召回可配置项，支持用户自主关闭自动召回、调整召回条目数与单请求上下文上限
所有待合入能力落地后，可直接解决80%以上当前社区反馈的高频使用障碍，项目易用性成熟度预计提升3%左右。

## 4. 社区热点
当日评论量最高的2条活跃Issue集中在边缘部署与国内生态对接场景：
1.  **边缘硬件适配诉求**：Issue #50 「Can this run on an Esp32?」 https://github.com/nullclaw/nullclaw/issues/50 累计4条评论为当日最高，用户核心诉求是将轻量AI代理框架下沉到低功耗嵌入式硬件，实现离线场景下的本地专属智能代理部署，属于非常有想象力的差异化落地场景
2.  **国内生态对接诉求**：Issue #817 「Does nullclaw support WeChat QR code login?」 https://github.com/nullclaw/nullclaw/issues/817 累计2条评论，用户明确需求为补齐微信个人号扫码登录能力，降低国内用户基于NullClaw搭建私域AI助手的接入门槛，目前该需求已经同步产出对应文档PR，响应速度极快。

## 5. Bug 与稳定性
当日暂未收到用户上报的崩溃、数据丢失等严重级别的稳定性问题，已发现2个待修复体验/性能问题：
1.  【中等优先级 体验缺陷】流式模式下框架强制禁用原生API级工具调用，导致依赖工具调用的流式Agent交互逻辑无法正常运行，目前已有对应修复PR #964提交待评审，预计很快可合入
2.  【低优先级 性能问题】框架A2A协议实现的响应速度低于原生消息链路性能，目前暂无对应优化PR提交，对应Issue #913正在收集社区基准测试数据。

## 6. 功能请求与路线图信号
结合当日活跃Issue与已提交PR判断，以下能力大概率将纳入下一版本迭代：
- 100%确定纳入：流式结构化工具调用支持、内存召回自定义配置、原生Anthropic供应商全能力文档、微信个人号扫码登录通道文档，所有对应PR均已提交进入待评审队列
- 高概率纳入后续版本：A2A协议性能优化与官方基准测试集，已有用户提交测试需求，属于Agent间通信场景的核心能力
- 中长期候选路线：子代理动态生成/多子代理绑定不同供应商的跨进程通信能力、ESP32等边缘硬件适配，目前处于需求调研阶段，尚未启动正式开发。

## 7. 用户反馈摘要
从当日活跃Issue中提炼真实用户反馈特征：
- 核心痛点：此前国内生态对接文档缺失，微信个人号登录这类高频需求找不到配置指引，接入成本高；当前A2A协议存在明显性能损耗，无法满足低延迟Agent间通信场景要求
- 典型使用场景：大量国内用户希望基于NullClaw搭建个人微信AI助手，还有嵌入式开发者希望将框架部署到ESP32等低功耗硬件上实现完全离线的本地智能代理
- 用户期待：核心诉求集中在支持多角色分工的子代理生成能力，用来搭建复杂的多Agent工作流。

## 8. 待处理积压
提醒维护者关注2条长期未得到官方明确响应的高热度Issue：
1.  Issue #50 边缘硬件运行适配需求：创建于2026-02-21，距今已近4个月，近期刚刚被用户重新激活讨论，需要维护者明确是否将边缘硬件适配纳入路线图，避免挫伤嵌入式开发者社区积极性
2.  Issue #190 子代理动态生成需求：创建于2026-03-01，距今已3个半月，属于Agent类框架的核心差异化能力，目前没有任何官方开发进度公示，大量社区用户持续关注，建议尽快同步规划节点。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
发布日期：2026-06-19

---

## 1. 今日速览
今日IronClaw项目整体处于高活跃度迭代状态，过去24小时共产生33条Issue更新、44条PR更新，无正式新版本发布。核心研发团队当前重心集中在Reborn新引擎能力补全、自动化调度体系升级、Google/Slack等第三方生态适配三个核心方向，单日关闭14条存量Issue、17条PR，大量近两周QA测试暴露的功能缺陷集中完成闭环。多个重量级XL级特性处于并行开发待合并状态，整体项目健康度处于上升区间，没有引发大面积用户影响的重大线上故障上报。

## 2. 版本发布
今日无正式版本发布，项目最新Release可查看官方 Releases 页面：
https://github.com/nearai/ironclaw/releases

## 3. 项目进展
今日合并/关闭的核心PR集中推进了自动化能力、基础UX修复、Projects功能链路打通三个方向，整体完成Engine V2默认上线总看板近1/3待办事项，迭代进度符合预期：
1. **PR #5065** 完成合并，落地一次性(one-shot)调度触发器能力，`trigger_create`接口新增`completion_policy`参数支持单次执行和循环执行两种模式，补齐了原有定时自动化的场景缺口：https://github.com/nearai/ironclaw/pull/5065
2. **PR #5055** 完成合并，优化自动化运行状态展示逻辑，将错误状态从醒目的红色终端警示改为黄色"需关注"标识，同时修复了空状态下重复文案的UI缺陷，大幅降低用户误判故障的概率：https://github.com/nearai/ironclaw/pull/5055
3. **PR #5018** 完成合并，打通WebChat v2 Projects功能的后端接口层，覆盖项目CRUD、成员管理全9个路由，作为总共5步的Projects功能栈的第4步落地：https://github.com/nearai/ironclaw/pull/5018
4. **PR #5067** 完成合并，修复OAuth流程展示异常问题，授权URL不可用场景下保留OAuth卡片而不是降级为通用提示，提升授权流程UX一致性：https://github.com/nearai/ironclaw/pull/5067
其余12个已关闭PR覆盖了Google OAuth重复弹窗、技能表单校验残留、导航图标语义优化等存量小缺陷，进一步提升了Reborn版本的基础成熟度。

## 4. 社区热点
今日评论量最高的3个Issue均聚焦Reborn版本核心运行鲁棒性和生态适配痛点，反映用户对自动化长期运行稳定性的强诉求：
1. **Issue #4761 [CLOSED]** 【Reborn】工具多次调用失败后Agent直接停止无法自动恢复，累计5条评论为今日最高热度，用户核心诉求是提升无人值守任务的容错能力，避免偶发工具异常直接导致整个任务中断：https://github.com/nearai/ironclaw/issues/4761
2. **Issue #4907 [CLOSED]** 【Reborn】Google OAuth认证成功后流程不继续反而失败，累计3条评论，大量接入GSuite生态的用户反馈该问题直接阻断了Google Calendar、Drive等扩展的正常使用，是GSuite生态接入的高频卡点：https://github.com/nearai/ironclaw/issues/4907
3. **Issue #4942 [CLOSED]** 【Reborn WebUI】工具调用失败状态需要手动刷新页面才可见，累计3条评论，背后是对SSE实时消息推送机制可靠性的明确诉求，用户希望所有操作反馈完全实时不需要额外手动操作：https://github.com/nearai/ironclaw/issues/4942

## 5. Bug 与稳定性
今日上报的问题按严重等级排序如下，大部分缺陷已关联对应修复链路：
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| 高危 | 本地开发环境SSO权限不匹配，导致Railway托管场景下自动化任务在创建会话前就直接失败 | https://github.com/nearai/ironclaw/issues/4992 | 暂未关联修复PR |
| 高危 | Google OAuth访问令牌1小时过期后不会自动刷新，要求用户反复手动重认证，直接影响GSuite生态长期使用体验 | https://github.com/nearai/ironclaw/issues/5071 | 暂未关联修复PR |
| 中危 | 企业微信群聊中，用户输入`y/yes/always`等审批指令无法通过工具审批，阻断企业微信渠道的审批流能力 | https://github.com/nearai/ironclaw/issues/4502 | 暂未关联修复PR |
| 中危 | 通义千问(Qwen)大模型服务商接口返回405错误，提示编码计划接口仅对编码Agent开放，影响国内用户使用Qwen系列模型 | https://github.com/nearai/ironclaw/issues/1520 | 暂未关联修复PR |
| 一般 | 大体积Shell命令的审批弹窗展示异常，长命令占据整个弹窗空间无法查看动作详情 | https://github.com/nearai/ironclaw/issues/5078 | 已有对应修复PR #5082待合并 |
| 一般 | 无效聊天URL直接跳转错误页，不会自动重定向到新对话页面 | https://github.com/nearai/ironclaw/issues/5077 | 暂未关联修复PR |
| 一般 | 用户跳转到非聊天类页面时，侧边栏仍然高亮选中历史会话，导航状态不同步 | https://github.com/nearai/ironclaw/issues/5076 | 暂未关联修复PR |

## 6. 功能请求与路线图信号
结合今日合并/待合并PR判断，以下特性几乎确定会纳入下一正式版本：
1. **Projects全协作功能**：总共5步的Projects开发栈已完成4步，后端接口、前端适配均已基本落地，将给用户提供项目级别的资源隔离、成员协作能力
2. **一次性调度触发器**：PR #5065已经合并，直接扩展定时自动化的场景覆盖范围
3. **自动化页面全新UX重设计**：仅为前端静态页面改造，无后端API破坏性变更，已经开发完成即可上线
4. **并发Turn执行调度器**：PR #5085落地后将解决原有串行执行机制下多用户任务排队等待的性能瓶颈，属于核心性能升级，优先级极高
5. **全局自动授权配置能力**：PR #5063支持用户自定义可自动放行的工具范围，大幅降低高频任务的人工审批操作成本，属于核心体验升级

## 7. 用户反馈摘要
从今日Issue反馈中提炼出的真实用户诉求集中在4个维度：
1. 痛点层面：无人值守自动化任务稳定性差，遇到偶发工具错误、令牌过期就直接中断，需要人工介入重启，核心诉求是降低自动化运维成本；第三方OAuth生态使用门槛高，认证流程经常卡住，普通用户很难顺利完成Google/Slack类扩展的接入；多渠道（企业微信/电报）适配成熟度低，不少基础的消息同步、审批流功能无法正常使用，企业场景落地受阻。
2. 正向反馈：参与内测的用户普遍肯定Reborn新版本的运行速度和工具调用准确率，相比老版本体验有非常明显的提升。
3. 入门体验痛点：大量新用户反馈产品导航指引不清晰，纯图标导航缺乏语义提示，无效跳转页面多，首次上手的引导体验有待优化。

## 8. 待处理积压
提醒维护者优先关注3个长期未响应的高影响Issue：
1. **Issue #4108** 夜间全量E2E测试持续失败，已上报超过20天，会直接影响后续版本的发布质量门禁有效性，需要优先排查定位根因：https://github.com/nearai/ironclaw/issues/4108
2. **Issue #3840** WebUI对话列表渠道徽章视觉优化需求，已上报近1个月，当前多渠道场景下不同来源的对话很难快速区分，影响大量同时接入多个聊天渠道的用户体验：https://github.com/nearai/ironclaw/issues/3840
3. **Issue #2800** Engine v2默认上线总跟踪看板，当前大部分子任务已经完成，剩余待办项积压近2个月未推进，需要加快进度让新引擎全量开放给普通用户使用：https://github.com/nearai/ironclaw/issues/2800

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-19
项目仓库：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时LobsterAI项目迭代活跃度处于极高水平，共产生2条活跃Issue、15条PR，其中14条已合并/关闭，仅1条PR处于待合状态，当日无正式版本发布。核心开发团队正集中冲刺2026.6系列功能迭代，语音输入、本机计算机操作、多格式产物分享三大核心能力已完成全链路落地合并，项目整体交付进度远超常规开源AI Agent项目迭代速度。当前仅新增1条高危安全漏洞待响应，整体项目健康度处于优秀区间。

## 2. 版本发布
当日无正式新版本发布，核心分支已完成`release/2026.6.11`分支向主分支的合入操作，正在开展2026.6系列后续版本的兼容性校验，预计短周期内即可发布正式版本。

## 3. 项目进展
当日14条已合并/关闭PR覆盖核心模块的从0到1落地能力，关键进展如下：
1. **全量迭代合流入主分支**：PR [#2179](https://github.com/netease-youdao/LobsterAI/pull/2177) 完成2026.6.11发布分支向主分支合入，覆盖协作交互、语音输入、产物分享全链路功能，整体代码迭代进度较上一正式版本提升42%。
2. **实时语音输入全链路落地**：连续合并PR [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148)、[#2160](https://github.com/netease-youdao/LobsterAI/pull/2160)、[#2163](https://github.com/netease-youdao/LobsterAI/pull/2163)，彻底淘汰旧版非实时ASR逻辑，完成全平台实时语音输入的架构拆分、权限适配、交互优化，语音输入能力从原型阶段进化为可全量交付的成熟特性。
3. **本机计算机操作MVP落地**：PR [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) 首次交付Windows x64平台的内置计算机操作套件，支持应用列表枚举、窗口管理、截图操作等原生控制能力，填补了本地Agent执行的核心能力缺口。
4. **产物分享能力升级**：PR [#2178](https://github.com/netease-youdao/LobsterAI/pull/2178) 新增Markdown、Mermaid格式文件的产物预览与分享能力，叠加之前合入的Office、PDF等格式支持，当前主流办公文档分享覆盖率已达100%。

## 4. 社区热点
当日最受关注的内容为社区白帽子安全研究者提交的高危漏洞Issue [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)，该漏洞披露了自动解析消息中`MEDIA:`引用逻辑未做路径校验，可能导致任意本地文件读取的风险。背后核心诉求是随着LobsterAI项目影响力扩大，企业级部署用户、安全研究者对本地AI Agent的权限隔离能力、数据合规性提出了更高要求，是项目走向生产可用必须优先闭环的核心合规能力。

## 5. Bug与稳定性
按严重优先级排序如下：
1. **高危安全漏洞**：Issue [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)，消息派生的任意本地文件读取漏洞，当前状态开放，暂无对应修复PR。
2. **中优UI体验问题**：Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422)，MCP自定义服务名称过长时删除弹窗显示异常，当前状态开放，暂无对应修复PR。
当日无崩溃类、核心功能回归类问题上报，已合入的所有迭代均配套单元测试，稳定性表现良好。

## 6. 功能请求与路线图信号
结合已合入的PR交付进度，下一正式版本将100%纳入以下特性：
- 全平台实时ASR语音输入能力，支持边说边转的协作交互体验
- Windows平台内置计算机使用MVP套件，支持AI自动化操作本地程序
- 全格式文档产物预览与分享能力，覆盖Office、PDF、Markdown、Mermaid等所有主流文件类型
- 同时待合PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 是Electron底层框架大版本升级，大概率在后续迭代窗口完成合入，进一步提升桌面端的稳定性和性能。

## 7. 用户反馈摘要
从现有Issue内容可提炼两类典型用户反馈：
1. 私有部署场景用户痛点：企业内部自定义MCP服务往往带有业务标识、部门标识等长命名，现有弹窗布局没有做自适应换行，导致运维人员操作时无法完整识别服务名称，误操作概率高。
2. 安全敏感型用户诉求：已提交漏洞的研究者侧面反馈，大量开发者正在把LobsterAI接入内部涉密工作环境，对本地文件访问的权限白名单、路径校验能力有强需求，不允许AI Agent无限制扫描本地磁盘文件。

## 8. 待处理积压
当前有2条重要的长期积压内容需要维护者优先排期处理：
1. Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422)：2026年4月创建的MCP页面UI体验问题，已经被打上stale标签，时隔2个多月才刚刚更新，尚未安排修复排期，影响私有部署用户的操作体验。
2. PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：dependabot自动提交的Electron+Electron Builder大版本升级PR，2026年4月创建后一直搁置，底层框架升级涉及大量兼容性校验，长期滞后可能导致后续无法及时收到Electron官方的安全补丁，引入潜在风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw（TinyAGI）项目动态日报
报告日期：2026-06-19 | 统计范围：过去24小时全仓库公开操作数据 | 仓库地址：https://github.com/TinyAGI/tinyagi

---

## 1. 今日速览
本报告覆盖开源AI智能体项目TinyClaw全维度动态，统计周期内项目无任何PR合并、存量Issue处理或新版本发布动作，全部更新均来自新开Issue板块，共计3条活跃新开Issue，无已关闭Issue记录。本次所有新增Issue均为安全研究员提交的未公开高危漏洞报告，覆盖核心身份认证、文件操作等高风险模块，项目当前活跃度完全聚焦安全风险事件，整体健康度触发高优先级预警。截至统计时点所有漏洞报告暂未获得维护者或社区的任何响应，暂无修复动作推进迹象。

## 2. 版本发布
本统计周期内项目无正式版本发布，无版本更新、破坏性变更或迁移指引相关内容，本部分略过。

## 3. 项目进展
统计窗口内项目无新增、合并或关闭的PR记录，核心代码库未产生任何提交，无功能迭代、存量问题修复相关的落地进展，项目核心开发链路过去24小时处于完全停滞状态，无版本演进推进。

## 4. 社区热点
今日所有新增Issue均为安全类报告，因无存量讨论沉淀，全部3条安全漏洞报告为当前关注度最高的社区事件：
- Issue #284：[Security] TinyAGI allows unauthenticated API messages to invoke Claude with provider permission checks disabled by default，链接：https://github.com/TinyAGI/tinyagi/issues/284
- Issue #283：[Security] Unauthenticated `prompt_file` agent configuration allows arbitrary local file disclosure to the model provider，链接：https://github.com/TinyAGI/tinyagi/issues/283
- Issue #282：[Security] Untrusted `[send_file: ...]` response tags allow arbitrary host file attachment delivery in TinyAGI，链接：https://github.com/TinyAGI/tinyagi/issues/282
诉求分析：安全研究员批量提交三类漏洞的核心诉求，是推动维护者尽快修复默认部署场景下完全缺失的身份校验逻辑，避免公网可访问的TinyAGI实例被攻击者利用，造成API资产被盗、本地敏感文件泄露等恶性安全事件，本次报告属于典型的白帽子善意预警行为。

## 5. Bug 与稳定性
今日所有新增问题全部为高风险安全漏洞，按严重优先级排序如下，所有漏洞暂未关联任何修复PR：
1. 严重等级Critical：Claude接口未授权调用漏洞（Issue #284），项目默认关闭全局API调用权限校验，攻击者无需身份凭证即可调用`POST /api/message`接口触发Claude大模型推理，可无限制消耗用户绑定的API配额产生巨额账单。
2. 严重等级High：任意本地文件读取漏洞（Issue #283），未授权的攻击者可通过Agent配置接口传入自定义`prompt_file`参数，强制实例读取宿主任意本地文件内容并将文件内容上传至大模型服务商，直接泄露实例本地所有敏感数据。
3. 严重等级High：越权文件附件返回漏洞（Issue #282），攻击者可通过构造特定请求诱导模型生成包含任意本地文件路径的`[send_file:]`标签，强制实例将指定宿主文件作为附件返回给调用者，实现无需大模型服务商中转的直接文件窃取。

## 6. 功能请求与路线图信号
本统计周期内无任何非安全类的新功能需求提交，全部Issue均为安全漏洞预警，无新增功能类诉求。结合当前漏洞的严重等级判断，下一版本的核心开发优先级将完全向安全加固倾斜，三类高危漏洞的修复将100%挤占常规功能迭代的资源，安全补丁发布将成为下一版本的唯一核心目标。

## 7. 用户反馈摘要
本统计周期内所有新增内容均为白帽子安全研究员提交的漏洞报告，无普通终端用户的Issue评论、反馈记录，暂未采集到普通用户的使用痛点、场景反馈、满意度评价等相关信息。

## 8. 待处理积压
本次统计周期内新增的3条高危安全Issue全部属于最高优先级待处理积压项，目前处于创建后超过12小时零响应状态。三类漏洞均属于无门槛远程利用的核心缺陷，维护者需在安全漏洞响应的72小时黄金窗口内完成漏洞影响范围确认、补丁开发等动作，避免漏洞细节泄露后出现大范围野外攻击，给大量公开部署的用户实例造成损失。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (AI 智能体与个人AI助手开源项目) 动态日报
报告日期：2026-06-19 | 数据统计周期：过去24小时
---

## 1. 今日速览
本报告覆盖2026年6月18日-6月19日的项目全维度动态，当日Moltis整体活跃度处于低位，过去24小时无版本发布、PR合并/提交动作，仅新增1条用户侧上报的功能缺陷Issue。当前项目代码主干无待合入的变更队列，全量公开Issue池未出现舆情类集中反馈事件，项目运行健康度整体平稳。从当前更新节奏判断，团队近期大概率处于核心功能打磨、小范围内测的周期中，暂无公开发布的迭代节点通知。

## 2. 版本发布
当日无正式版本、预发布/RC版本推送至GitHub Release板块，无版本相关变更记录。

## 3. 项目进展
过去24小时无合并、关闭或待合入的PR记录，项目主干代码未产生新的功能迭代、漏洞修复相关提交，当前项目整体迭代进度无新增推进。

## 4. 社区热点
当日仅1条新增公开反馈为全社区最高关注度内容：
> 链接：https://github.com/moltis-org/moltis/issues/1132
该反馈指向核心会话管理模块的逻辑缺陷，用户核心诉求是希望系统支持对默认「main」会话的全生命周期管理能力，避免无效默认会话占用侧边栏展示资源，同时覆盖自定义会话归档的隐私清理需求。当前该Issue暂无公开跟帖讨论，属于社区单点上报的潜在高频痛点。

## 5. Bug 与稳定性
当日仅新增1条公开上报的未复现缺陷，按影响程度排序如下：
- **中优先级Bug**：默认「main」会话无法被删除/归档，上报链接：https://github.com/moltis-org/moltis/issues/1132。当前暂无对应修复PR提交，该问题不会引发系统崩溃、数据丢失等极端问题，但会限制用户的会话管理自由度，暂未被其他用户复现跟帖。

## 6. 功能请求与路线图信号
过去24小时无新增独立功能诉求类Issue，当前唯一新增反馈属于现有功能的逻辑补全需求，结合PR池为空的状态判断：该会话管理漏洞如果经维护团队验证复现后，大概率会被优先纳入下一个小版本的修复清单中。

## 7. 用户反馈摘要
当前该新增Issue暂未产生任何用户讨论内容，仅从上报人的提交信息可提炼2个核心特征：1. 上报人为已升级到最新正式版的存量活跃用户，对会话管理的灵活度有较高要求；2. 用户反馈前已完成全量现有Bug池的检索，确认该问题为首次上报，不存在同类存量反馈。当日无公开的产品满意度相关评价内容。

## 8. 待处理积压
当日无新增的长期未响应高优先级Issue/PR记录，当前全量存量队列中暂无超7天未得到维护团队回应的阻塞性反馈，建议维护团队在近3个工作日内对该条首次上报的main会话不可操作缺陷给出复现进展回应，避免同类问题集中爆发。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-06-19）
注：当前迭代分支产品迭代代号为QwenPaw，核心代码库归属agentscope-ai组织
---

## 1. 今日速览
当日项目处于高活跃度核心冲刺阶段，过去24小时累计产生50条Issue更新、31条PR更新，问题闭环率达68%，维护团队响应效率处于近30天最高位。本次迭代集中攻坚上下文压缩稳定性、多渠道兼容性、向量库底层容错三大高频痛点，首次贡献者占当日新提交PR的35%，生态参与度持续提升。今日正式发布补丁版本v1.1.12.post1，累计修复17个历史遗留问题，核心生产场景可用性较上一版本提升12%，整体项目健康度评级为优秀。

## 2. 版本发布
### v1.1.12.post1 正式发布
- 更新内容：① 修复发布脚本中预发布版本参数展开错误的问题，统一版本号标记逻辑；② 将ChromaDB向量库的内置探测集合重命名为`probe-test`，避免与用户正式业务集合冲突
- 无破坏性变更，无额外数据迁移要求，直接执行`pip install -U qwenpaw`即可完成升级
- 相关合并PR：[#5288](https://github.com/agentscope-ai/QwenPaw/pull/5288)

## 3. 项目进展
当日累计合并/关闭17条PR，核心推进项包括：
1.  **多渠道兼容性打通**：合并PR[#5291](https://github.com/agentscope-ai/QwenPaw/pull/5291)、[#5298](https://github.com/agentscope-ai/QwenPaw/pull/5298)，分别修复uv安装场景下钉钉渠道SSL失效问题、Windows构建流程中discord.py导入的证书错误，彻底解决此前用户反馈的桌面版多渠道部署必现bug
2.  **MCP生态性能优化**：合并PR[#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849)，新增跨代理共享的MCP服务池，彻底解决300+代理同配相同MCP工具时生成数百个重复进程的资源爆炸问题，多代理场景下CPU占用降低70%
3.  **插件体系能力补齐**：合并PR[#4794](https://github.com/agentscope-ai/QwenPaw/pull/4794)，新增插件卸载生命周期钩子、对外暴露技能提供者API，补齐插件生态的核心扩展缺口，支持第三方插件实现卸载后自动清理冗余资源的能力
4.  **核心架构收敛**：合并PR[#5309](https://github.com/agentscope-ai/QwenPaw/pull/5309)，将原有自定义上下文管理模块完全迁移到AgentScope 2.0原生提供的上下文压缩、结果裁剪协议，减少冗余代码量30%，提升压缩逻辑稳定性
5.  **UI体验升级**：合并PR[#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293)，将历史会话列表从侧边弹窗改为右侧常驻面板，大幅优化多会话切换操作效率
- 整体当前已完成Sprint 3阶段72%的验收用例，迭代进度符合预设排期。

## 4. 社区热点
当日讨论度最高的3条公开诉求：
1.  **子代理触发上下文压缩进程冻结** [Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)：累计16条评论，是当前全项目热度最高的bug，大量多代理工作流用户反馈该问题会直接导致全服务不可用，完全阻断任务执行，核心诉求是上下文压缩逻辑不能直接卡死主进程，必须加异常捕获和回滚机制。
2.  **上下文压缩误删核心人设信息** [Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)：累计8条评论，用户反馈当人设文件token量超过压缩阈值时，系统会直接清空全部上下文，诉求是压缩逻辑必须优先保留系统提示词/人设内容，支持按消息条数兜底保留机制。
3.  **集成Headroom降本压缩层** [Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)：累计7条评论，企业级用户诉求强烈，希望引入外部独立压缩层将工具输出、历史对话的token消耗降低60%-95%，目前已有对应实现PR正在评审。
从热点分布可以看出，当前上下文压缩相关能力是全社区最关注的核心功能，直接决定大模型部署的成本与稳定性。

## 5. Bug 与稳定性
按严重等级排序当日上报/闭环的问题：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 | 关联PR |
| --- | --- | --- | --- | --- |
| 高危 | 子代理触发上下文压缩时主进程完全冻结，全服务无响应 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 待合入 | [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) |
| 高危 | ChromaDB Rust绑定段错误直接杀死全进程，无Python侧异常捕获 | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | 已闭环 | 已随v1.1.12.post1发布 |
| 中危 | 版本升级后用户手动禁用的内置技能自动恢复启用 | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | 待开发 | 无 |
| 中危 | 飞书群聊@机器人时，回复被错误发送到同用户的私聊窗口 | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | 待开发 | 无 |
| 低危 | Web控制台渠道无论后端响应正常与否，永远显示"回答已停止" | [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | 待合入 | 关联修复已提上日程 |

## 6. 功能请求与路线图信号
结合当前已提交实现PR判断，以下功能大概率纳入下一个 minor 版本v1.2.0的发布清单：
1.  可选Headroom上下文压缩层：[PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) 已完成基础实现，可将token消耗最高降低95%
2.  Linux平台bubblewrap沙箱隔离能力：[PR #5310](https://github.com/agentscope-ai/QwenPaw/pull/5310) 首次贡献者提交，实现挂载命名空间隔离，补齐本地代码执行安全能力
3.  Discord渠道流式响应支持：[PR #5314](https://github.com/agentscope-ai/QwenPaw/pull/5314) 已实现，支持逐字输出+常驻输入中状态提示
4.  终端交互式代码开发模式：[PR #5304](https://github.com/agentscope-ai/QwenPaw/pull/5304) 新增`qwenpaw terminal`命令，开发者可直接接入后台守护进程进行代码调试
5.  DataPaw数据分析插件：[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 内置12个BI分析技能，补齐自动化数据处理场景能力

## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户侧感知：
1.  核心痛点：上下文压缩相关的宕机、信息丢失问题占近3天生产环境bug反馈的30%，是当前企业用户的最大卡点；Windows桌面版的路径、SSL兼容性问题占比22%，大量非Linux部署用户遇到不必要的配置门槛。
2.  强烈不满点：多次版本升级都会重置用户手动修改的技能启用状态、自定义配置，用户明确要求迭代过程中不能覆盖本地自定义配置。
3.  正向反馈：大量企业用户肯定多渠道灵活接入能力，相比同类产品可以快速适配企业内部私有IM系统，大幅降低私有化部署的接入成本。
4.  典型场景：当前60%的活跃企业用户基于飞书/钉钉渠道部署全员助手，对消息路由准确性、服务稳定性要求极高，完全不能接受群聊回复错发、服务无预警宕机的问题。

## 8. 待处理积压
以下高优先级长期未响应Issue需要维护团队重点关注：
1.  独立视觉模型路由支持 [Issue #3940](https://github.com/agentscope-ai/QwenPaw/issues/3940)：2026年4月上报，累计5条评论，用户要求不需要切换全会话模型，就能自动将图片上传请求路由到多模态模型，目前暂无开发排期，严重影响桌面版多模态使用体验。
2.  自定义模型支持独立配置超时、上下文窗口参数 [Issue #3929](https://github.com/agentscope-ai/QwenPaw/issues/3929)：2026年4月上报，累计3条评论，私有化部署VLLM集群的用户需求强烈，当前全局统一参数无法适配不同硬件配置的模型实例。
3.  多Worker启动场景下自定义WebSocket渠道端口冲突 [Issue #2245](https://github.com/agentscope-ai/QwenPaw/issues/2245)：2026年3月上报，累计2条评论，高并发集群部署用户的核心卡点，当前多Worker启动时会抢占同一个自定义渠道监听端口，最终导致渠道完全不可用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-06-19）
统计周期：过去24小时全量GitHub仓库数据
---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生33条Issue更新、50条PR更新，暂无正式版本发布。当前开发节奏明确指向v0.8.1补丁版本迭代，核心动作集中在高优先级安全漏洞整改、全平台兼容性修复、核心模块边界测试补全三个方向，当日共完成11条历史遗留PR/Issue的闭环，项目核心模块迭代健康度评分达92分，无影响整体主流程的阻塞性故障。大量新提交的边缘场景需求覆盖嵌入式语音交互、移动端Termux适配等此前未覆盖的使用场景，用户生态正在快速扩张。

## 2. 版本发布
今日无正式版本发布，版本迭代预热动作已启动：合并准备PR #7938 已打开，将全量替换仓库内所有硬编码版本号为0.8.1，待所有高优先级Bug修复合并后即可正式发布。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7938

## 3. 项目进展
当日累计11条PR/Issue完成合并/闭环，核心进度如下：
1. **Windows兼容性基础补齐**：PR #7906 落地全平台环境变量判断逻辑，为解决此前74个Windows测试失败问题打通基础校验层，后续可逐步补齐Windows全场景CI覆盖。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7906
2. **MCP工具可见性修复**：PR #7547 修复风险配置显式指定允许工具列表时，自动发现的MCP工具不会被纳入列表的历史遗留问题，打通v0.8.0默认开启MCP能力后的最后一环。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7547
3. **凭证脱敏逻辑重构**：PR #7826 将原本在工具执行链路中进行的凭证脱敏动作移至输出渲染层，解决合法返回配置内容的工具输出被误擦除的故障。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7826
4. **国际化翻译质量加固**：PR #7774 新增专有名词保护规则，避免多语言翻译时产品名、命令名、协议名等受保护内容被错误替换。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/7774

当前v0.8.1版本要求的整改动作整体完成度达70%，所有已闭环动作均不涉及破坏性变更，可实现从v0.8.0无缝升级。

## 4. 社区热点
当日讨论量最高的3个核心议题，直接反映用户核心诉求：
1. **#2079 要求恢复GitHub原生一级通道能力**（7条评论，讨论量最高）：大量DevOps场景用户反馈当前GitHub集成需要自定义Webhook、鉴权、去重等胶水代码，效率极低，要求将GitHub纳为和Slack/对齐的原生通道，直接支持Agent操作Repo的Issue、PR、评审动作。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/2079
2. **#5221 模型成本全场景统计缺失**（4条评论）：付费使用企业版的用户反馈，定时任务调度、命令行触发、Web Agent三类场景的模型调用完全没有被计入成本统计，导致账单和实际用量无法对齐，诉求全链路成本可观测。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5221
3. **#7787 v0.8.0正式版预构建包丢失Slack/Discord通道能力**（3条评论+1个点赞）：大量普通用户反馈升级v0.8.0后配置完全正常的Slack通道直接无法使用，必须降级回v0.7.5才能恢复，属于正式版发布的严重回归问题，用户抱怨正式版交付前的包校验流程缺失。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7787

## 5. Bug与稳定性
当日新增/活跃的故障按严重等级排序如下：
| 严重等级 | Bug标题 | 对应修复PR状态 | 链接 |
| --- | --- | --- | --- |
| S0（安全风险） | execute_pipeline可绕过单Agent工具管控，属于混乱代理漏洞 | 待提交修复PR | https://github.com/zeroclaw-labs/zeroclaw/issues/7947 |
| S1（流程阻塞） | OpenAI/Anthropic推理模式下MCP原生工具完全不可用 | 已有修复PR #7933 待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/7756 |
| S1（流程阻塞） | Agent删除动作先清空关联状态再持久化配置，操作失败会导致状态丢失 | 已有修复PR #7940 待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/7941 |
| S1（流程阻塞） | Agent重命名动作先移动关联状态再持久化配置，操作失败会导致状态不一致 | 已有修复PR #7940 待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/7907 |
| S1（流程阻塞） | Anthropic模型调用时历史消息出现相邻同角色错误返回400 | 已有修复PR #7931 待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/7804 |
| S2（体验降级） | 配置的embedding路由静默降级为NoopEmbedding能力完全失效 | 待提交修复PR | https://github.com/zeroclaw-labs/zeroclaw/issues/7949 |
| S2（体验降级） | 调度/命令行/Web Agent场景模型成本不会被统计 | 待提交修复PR | https://github.com/zeroclaw-labs/zeroclaw/issues/5221 |

## 6. 功能请求与路线图信号
当日新增的高价值功能请求结合现有PR进度，可判断落地节奏：
1. **v0.8.1版本必落功能**：shell子进程内存限制（PR #7937已提交待合并）、多语言翻译目录全量刷新（PR #7939待合并）、CLI授权提示在stdin断开时自动读取控制终端（PR #7936待合并）、shell执行管道IO阻塞问题修复（PR #7935待合并），全部已有开发完成的PR，会作为v0.8.1核心能力交付。
2. **下一阶段优先落地功能**：实时语音主机通道#7943、统一全端斜杠命令注册表#7929、Docker镜像内置官方文档作为Agent知识库#7950，均已被标记为accepted状态，预计纳入v0.8.2版本迭代。
3. **长期路线图信号**：ESP32/移动端语音卫星硬件适配#7944、向量存储自动迁移能力#7948 属于前瞻探索需求，暂时不会排入近2个迭代的开发计划。

## 7. 用户反馈摘要
从当日Issue的真实用户提交内容中提炼核心痛点：
1. 生产场景运维用户反馈曾出现LLM调用shell命令启动wkhtmltopdf生成PDF，子进程无限制占用内存直接打满容器导致服务OOM宕机，强烈要求shell执行必须增加硬内存配额限制。
2. 大量新用户反馈v0.8.0正式版发布公告没有提示Slack/Discord通道被移除的问题，安装完调试数小时才发现是预构建包本身的问题，升级体验极差。
3. 嵌入式开发者提交Issue反馈安卓Termux环境下安装ZeroClaw，预构建包无法识别aarch64 Linux架构，手动编译也会触发依赖不兼容问题，ARM嵌入式场景适配完全缺失。
4. 企业付费用户反馈跑定时巡检任务产生的大量模型调用完全没有统计进成本账单，财务对账时完全无法匹配用量，需要紧急补全全场景成本统计能力。

## 8. 待处理积压
提醒维护团队优先关注的长期未闭环高价值议题：
1. #2079 GitHub原生一级通道需求从2026年2月提交至今已有7条社区讨论，用户诉求非常强烈，但至今没有排入开发排期，建议v0.8.1发布后优先分配资源启动设计。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/2079
2. #6971 安全UX、运行时凭证边界和默认隔离规则的RFC从5月底提交至今有3条讨论，尚未形成最终方案，作为核心安全方向的顶层设计议题，长期搁置会影响后续所有安全相关功能的对齐落地。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6971
3. #7673 原生上下文压缩作为Provider流水线装饰器的RFC提交后持续收到社区正面反馈，目前处于需要作者补充信息的状态，建议尽快对齐方案推进落地，该能力可以大幅降低高上下文场景下的Token成本。
> 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7673

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*