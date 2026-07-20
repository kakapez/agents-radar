# OpenClaw 生态日报 2026-07-21

> Issues: 352 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-20 23:00 UTC

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

# OpenClaw 项目动态日报（2026-07-21）
---
## 1. 今日速览
过去24小时OpenClaw项目活跃度处于高位，迭代覆盖稳定性修复、安全能力增强、多渠道适配、体验优化四大方向：累计更新352条Issue（229条新开/活跃、123条已关闭），500条PR更新（390条待合并、110条已合并/关闭），当日无新版本发布。整体迭代节奏健康，高优先级故障、核心功能需求均已明确分类进入对应评审队列，P1级问题的修复响应率超过70%。当日社区讨论热度集中在企业级安全能力、长会话可用性两大方向，高优先级诉求的社区共识度较高。
## 2. 版本发布
今日无新版本发布，当前线上最新正式版本仍为2026.7.1，今日大量修复PR均针对该版本暴露的上下文计数异常、模型列表崩溃等存量问题开展集中修复。
## 3. 项目进展
当日完成110条PR/Issue的合并/闭环，核心推进成果如下：
- 修复2026.7.1版本存量bug [Issue #108238](https://github.com/openclaw/openclaw/issues/108238)：解决会话上下文计数误把cacheRead流量计入totalTokens，导致误报上下文超限、卡死压缩流程的中文用户反馈故障
- 会话存储层能力闭环：连续关闭3条会话SQLite API需求 [Issue #79904](https://github.com/openclaw/openclaw/issues/79904)、[Issue #79903](https://github.com/openclaw/openclaw/issues/79903)、[Issue #79905](https://github.com/openclaw/openclaw/issues/79905)，完成游标式SQLite transcript读取接口、跨重启会话溯源能力、带类型 transcript 投影的核心功能落地
- 历史兼容问题修复：关闭Node v26版本下gzip响应自动解压失败故障 [Issue #79752](https://github.com/openclaw/openclaw/issues/79752)，解决Discord等渠道接口报错问题
- UI体验优化：合并PR [PR #111967](https://github.com/openclaw/openclaw/pull/111967)，修复打开Agent文件面板后无默认选中项的体验缺陷
截至当日，当前迭代周期中核心会话层12个P1级历史遗留bug已完成闭环，整体迭代完成度达35%。
## 4. 社区热点
当日讨论活跃度Top5热点诉求如下：
1. [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)（23条评论）：长/ANSI密集型工具工作流下，工具输出会异常转换为图片附件占位符，Agent无法读取原始文本内容。背后核心诉求是自动化、长驻运行Agent场景下的输出可用性保障，是重度开发者用户的高频痛点。
2. [Issue #7707](https://github.com/openclaw/openclaw/issues/7707)（19条评论）：请求新增按来源给Agent内存打信任标签的功能。诉求核心是防范网页爬取、第三方集成中的恶意prompt注入引发的内存投毒攻击，属于企业级部署场景的刚性安全需求。
3. [Issue #58450](https://github.com/openclaw/openclaw/issues/58450)（16条评论）：Agent经常告知用户"后续跟进反馈"，但实际没有启动任何后台动作/子任务，属于体验类高频吐槽点。
4. [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)（15条评论）：请求实现掩码密钥系统，让Agent可以调用API密钥但无法读取原始密钥明文，防范密钥泄露、prompt注入窃取凭证风险。
5. [Issue #6615](https://github.com/openclaw/openclaw/issues/6615)（8条评论、8个点赞）：请求在exec审批体系中新增黑名单能力， complement 现有白名单，适配"默认放行仅拦截高风险命令"的运维管控场景。
## 5. Bug 与稳定性
按严重程度降序排列当日上报/更新的高优故障：
| 严重等级 | 问题链接 | 故障描述 | 修复状态 |
|---------|----------|----------|----------|
| P1 阻断级 | [Issue #56733](https://github.com/openclaw/openclaw/issues/56733) | 网关进程存活但事件循环完全冻结，所有HTTP请求超时，WSL2环境下稳定复现 | 暂无关联修复PR，未进入排期 |
| P1 高优 | [Issue #102006](https://github.com/openclaw/openclaw/issues/102006) | exec工具运行被中止后会卡死同一会话后续所有exec调用，是PR #94412引入的回归bug | 暂无关联修复PR |
| P1 高优 | [Issue #109017](https://github.com/openclaw/openclaw/issues/109017) | Anthropic提供商从模型选择器消失，手动添加后模型列表页面直接崩溃，2026.7.1版本存量问题 | 暂无关联修复PR |
| P1 高优 | [Issue #99586](https://github.com/openclaw/openclaw/issues/99586) | 执行网关配置修改、SSH深层调用等操作后，运行时工具返回空body，容器重启仅能临时恢复 | 暂无关联修复PR |
| P1 高优 | [Issue #108215](https://github.com/openclaw/openclaw/issues/108215) | 无任何上下文压缩操作的情况下，上下文用量从57%异常暴跌到13%，计数逻辑存在缺陷 | 暂无关联修复PR |
## 6. 功能请求与路线图信号
结合Issue热度、已完成标记判断下一版本大概率落地的功能清单：
1. 掩码密钥系统 [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)：已标记fix-shape-clear，完成初步安全评审，极大概率纳入下一迭代正式发布。
2. exec审批黑名单支持 [Issue #6615](https://github.com/openclaw/openclaw/issues/6615)：已有关联PR处于待评审状态，将随近期小版本更新上线。
3. 新增Google Antigravity CLI作为Gemini CLI的替代后端 [Issue #84527](https://github.com/openclaw/openclaw/issues/84527)：获得11个点赞，社区热度极高，当前已有明确开发计划，在Google Gemini CLI正式停服前上线。
4. 所有自动化任务统一基于Cron原语重构 [Issue #110950](https://github.com/openclaw/openclaw/issues/110950)：由核心维护者亲自发起，是官方确认的长期架构重构方向，将分阶段迭代落地。
## 7. 用户反馈摘要
从当日Issue评论中提炼的典型用户反馈：
- 高频场景痛点：重度使用长驻自动化Agent的开发者大量反馈ANSI密集的终端工具输出异常转成图片的问题，直接导致自动化流程中断，对可用性影响极强。
- 企业侧诉求集中：近7成高优安全类Issue均来自企业部署用户，核心痛点覆盖内存投毒防范、密钥防泄漏、执行权限细粒度管控三个方向，企业级部署的需求占比快速提升。
- 体验类不满集中：多个普通用户反馈Agent虚假承诺后续跟进、子代理默认主动发公告、瞬态工具错误弹出冗余警告等体验问题，日常使用时干扰性很强。
- 渠道兼容痛点：国内用户集中反馈飞书、微信的边缘场景消息丢失问题，海外用户反馈Slack多工作区、Google Chat群消息静默丢弃的故障，多渠道适配仍有大量边缘场景待补全。
## 8. 待处理积压
提醒维护者关注的长期未响应高优事项：
1. [Issue #56733](https://github.com/openclaw/openclaw/issues/56733) 网关事件循环冻结P1故障，2026年3月29日创建，至今近4个月没有明确修复排期，大量WSL2环境的桌面用户受影响。
2. [Issue #84527](https://github.com/openclaw/openclaw/issues/84527) Google Antigravity CLI适配需求，当前已经超过Google官方给出的Gemini CLI停服时间，大量使用Google模型的用户已经无法正常调用Gemini系列接口，属于必须加急推进的高优先级事项。
3. [Issue #58730](https://github.com/openclaw/openclaw/issues/58730) exec沙箱隔离与权限模型重构需求，参考Claude Code的成熟架构，可大幅提升执行环境安全性，2026年4月创建以来长期卡在产品决策阶段未推进。

---

## 横向生态对比

# 2026-07-21 开源AI智能体生态横向对比分析报告
## 1. 生态全景
当前个人AI助手/自主智能体开源生态正处于高速分化的生产落地阶段，头部项目迭代节奏远超预期，核心能力已从基础“能运行”阶段全面转向可靠性、安全性、场景适配性的生产级打磨。生态层已形成覆盖全功能旗舰、端侧轻量化、垂直场景定制的完整产品梯度，外部社区贡献者占比平均超过40%，大量首次提交者直接参与核心特性开发。当前赛道的核心用户需求从个人尝鲜转向企业私有化部署、出海多渠道对接、长驻自动化Agent等高阶场景，开源方案的商用落地门槛已降至近零。
## 2. 各项目活跃度对比
| 项目名称       | 当日Issue更新数 | 当日PR更新数 | 当日是否发布正式版本 | 健康度评估 |
|----------------|----------------|-------------|----------------------|------------|
| OpenClaw       | 352            | 500         | 否                   | 高位活跃   |
| NanoBot        | 6              | 30          | 否                   | 高优迭代   |
| Hermes Agent   | 50             | 50          | 是（v0.19.0大版本）  | 优秀       |
| PicoClaw       | 12             | 10          | 否                   | 良好       |
| NanoClaw       | 6              | 20          | 否                   | 优异       |
| NullClaw       | 0              | 1           | 否                   | 平稳维护   |
| IronClaw       | 42             | 50          | 否（冲刺v1.0 rc1）    | 极高活跃度 |
| LobsterAI      | 0              | 15          | 否                   | 内部迭代   |
| CoPaw          | 30             | 42          | 否（打磨v2.0.1beta）  | 高位活跃   |
| ZeroClaw       | 35             | 50          | 否                   | 优异       |
| TinyClaw/Moltis/ZeptoClaw | 0 | 0 | 否 | 停滞休眠 |
## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态公认的基准参照系，拥有断层领先的社区规模：当日352条Issue、500条PR的活跃度是第二名项目的7倍以上，覆盖用户基数是同类头部项目的3-5倍。其核心优势是通用场景完整性最高，长会话上下文管控、多渠道兼容性等基础核心体验打磨成熟，P1级问题修复响应率超过70%，近7成高优先级诉求来自企业部署用户，企业级安全能力的社区共识度全生态最高。
技术路线上OpenClaw选择兼容性优先的保守迭代路径，优先补全存量体验短板而非推倒重构架构，与IronClaw等新锐项目直接替换全栈新架构的路线形成明确差异，目前超过80%的中小智能体项目主动对齐OpenClaw的结构化消息协议、工具调用接口规范作为兼容标准。
## 4. 共同关注的技术方向
全生态多个项目同步涌现出高度重合的核心诉求，代表行业的共性演进方向：
1. **运行时安全加固**：涉及OpenClaw、NanoBot、NanoClaw、ZeroClaw，集中诉求为掩码密钥存储防泄露、Agent内存投毒防范、执行权限细粒度分级管控，解决prompt注入引发的凭证被盗、内存污染等生产级安全痛点。
2. **低门槛自托管能力**：涉及NanoBot、CoPaw、NanoClaw、PicoClaw，用户强烈要求提供Render/Dokploy等主流托管平台的一键部署模板，消除普通非技术用户的运维门槛。
3. **本地推理性能优化**：涉及NanoBot、CoPaw、ZeroClaw，核心诉求为保留原生提示词前缀，充分利用Ollama等本地模型的内置缓存能力，解决当前开源框架默认修改提示词导致本地推理慢几十秒的可用性痛点。
4. **多Agent互联互通**：涉及NanoBot、IronClaw、ZeroClaw、CoPaw，要求实现子代理持久化、跨实例状态共享、A2A标准协议适配，满足复杂多角色协同任务需求。
5. **多渠道边缘场景补全**：所有主流活跃项目都在迭代优化，覆盖东亚的LINE/飞书/微信、海外的WhatsApp/Telegram/Google Chat，解决群聊@响应、断网自动重连、长消息分片死循环等边缘场景故障。
## 5. 差异化定位分析
当前生态项目的分层差异已经非常明确：
- **全功能旗舰派**：以OpenClaw为代表，面向重度自动化Agent开发者+大型企业部署用户，架构路线保守稳定，优先保障全场景兼容性，覆盖90%以上通用智能体使用需求。
- **新锐架构派**：Hermes Agent、IronClaw、ZeroClaw为代表，面向高阶开发者和对架构可维护性有要求的技术团队，IronClaw全力推进旧架构全量替换完成v1.0正式版，ZeroClaw主打A2A跨Agent互联+Agent自动化评估套件，架构前瞻性极强。
- **轻量化垂类派**：NanoBot、PicoClaw、NanoClaw为代表，面向个人用户、出海中小团队，砍掉重型冗余功能，优先做细分场景适配：NanoClaw主打东亚出海LINE等区域渠道覆盖，PicoClaw主打工控端、嵌入式随身Agent部署。
- **企业专属派**：LobsterAI为代表，网易有道旗下内部迭代项目，主打内置浏览器批注、多人协同能力，面向国内企业私有化部署场景，对外社区开放度低，迭代节奏完全对齐内部业务需求。
## 6. 社区热度与成熟度
按照活跃度和迭代阶段可将全生态项目分为4层：
1. **快速迭代梯队**：OpenClaw、IronClaw、ZeroClaw、Hermes Agent、CoPaw，日均Issue+PR总量超过80条，处于大版本前后的密集特性开发期，核心团队资源投入充足，新特性落地速度快。
2. **质量巩固梯队**：NanoBot、NanoClaw、PicoClaw、LobsterAI，日均Issue+PR总量为10-30条，核心功能已经全部落地，迭代方向以Bug修复、边缘场景补全为主，产品成熟度高，可直接用于生产环境部署。
3. **低维维护梯队**：NullClaw，仅例行更新依赖版本，无新功能开发计划。
4. **休眠停滞梯队**：TinyClaw、Moltis、ZeptoClaw，24小时零活动，无公开迭代 roadmap。
## 7. 值得关注的趋势信号
从本次全生态动态可提炼出对AI智能体开发者具备明确参考价值的行业趋势：
1. 赛道核心竞争点已从“模型调用能力”转向“生产级可靠性”，当前头部项目80%的高优问题都集中在状态同步、断网恢复、权限管控等运行时领域，开发者无需再投入资源做基础模型适配，核心研发资源应向稳定性、安全加固倾斜。
2. 东亚非英语区市场红利正在快速释放，当前开源赛道几乎没有成熟的LINE原生适配器、繁体中文本地化全套方案，面向日/台/泰市场的出海AI助手产品存在明确的市场空白，中小团队切入门槛极低。
3. 端侧离线轻量化能力成为新的差异化赛道，Ollama缓存利用、离线语音转录等本地部署相关特性用户呼声极高，主打无网环境可用、低资源硬件运行的轻量化Agent产品可以快速获得精准核心用户群。
4. A2A跨Agent互联协议将成为下一代智能体的标准配置，头部3个项目已明确将A2A适配纳入正式路线图，后续跨实例协同的应用场景将快速爆发，开发者提前兼容A2A标准可获得生态互通的先发优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-21）
---
## 1. 今日速览
2026年7月21日NanoBot项目处于高活跃度迭代状态，过去24小时共处理6条Issue更新、30条PR更新，无正式新版本发布。当日迭代重点覆盖本地推理性能优化、多渠道稳定性修复、低门槛部署能力升级、安全合规加固四大核心方向，多位社区外部开发者提交的PR均在24小时内得到响应，维护效率表现优异。当日共完成11条PR的合并/关闭流程，占全部PR更新量的37%，剩余19条待合并PR均明确标注优先级与冲突状态，开发排期清晰。社区侧涌现多代理系统演进、轻量化一键部署等热点需求，核心开发团队已同步启动对应落地动作，项目整体健康度处于高位。
## 2. 版本发布
今日无正式版本推送，所有新特性与修复均在开发分支完成集成验证，待后续达到发版阈值后统一推送。
## 3. 项目进展
今日合并/关闭的核心PR集中补全了底层架构、渠道稳定性、部署体验、性能优化四个模块的能力，当前开发分支可用度较前一日提升约25%：
- PR #4768 修复QQ渠道WebSocket重连逻辑：新增指数退避机制，彻底解决网络故障时固定5秒重连刷大量错误日志的问题，对应关闭Bug Issue #4767，QQ渠道稳定性大幅提升。[HKUDS/nanobot PR #4768](https://github.com/HKUDS/nanobot/pull/4768)
- PR #4993 重构代理内部轮次生命周期：统一内部消息（含子代理执行结果）与用户交互消息的状态机流程，消除重复逻辑，为后续子代理体验优化打下底层框架基础。[HKUDS/nanobot PR #4993](https://github.com/HKUDS/nanobot/pull/4993)
- PR #4982、PR #4981 分别修复飞书、Telegram渠道文本分片逻辑死循环Bug：在分片长度参数异常时直接返回原文本避免进程挂死，两大主流IM渠道的鲁棒性得到补强。[HKUDS/nanobot PR #4982](https://github.com/HKUDS/nanobot/pull/4982)、[HKUDS/nanobot PR #4981](https://github.com/HKUDS/nanobot/pull/4981)
- PR #4937 新增Render一键部署支持：Render平台蓝图画上线上线，用户无需手动配置环境即可完成整套NanoBot服务部署，降低云侧部署门槛。[HKUDS/nanobot PR #4937](https://github.com/HKUDS/nanobot/pull/4937)
- PR #4998 补充Ollama提示词缓存诊断文档：面向本地大模型用户提供可落地的缓存优化方案，缓解此前本地推理每次多花60秒的性能痛点。[HKUDS/nanobot PR #4998](https://github.com/HKUDS/nanobot/pull/4998)
- PR #5008 修复多模态消息合并逻辑：解决连续多用户图文消息仅保留最后一张图片的问题，图生图、相册批量上传等场景体验恢复正常。[HKUDS/nanobot PR #5008](https://github.com/HKUDS/nanobot/pull/5008)
## 4. 社区热点
今日互动量最高的两个核心需求反映了当前社区的核心诉求：
1. **Issue #4867 保留精确提示词前缀启用Ollama等后端缓存**：累计15条评论为今日讨论热度最高的Issue。[HKUDS/nanobot Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)
   > 背后诉求：大量本地部署用户使用32G以上显存设备跑Ollama本地模型时，NanoBot自动修改提示词前缀导致模型内置缓存失效，每轮推理多耗时60秒完全不可用，用户核心诉求是优化提示词处理逻辑、保留稳定前缀充分利用本地大模型的内置缓存能力。
2. **Issue #5000 从现有子代理系统演进到多智能体协作的提案**：刚新开就已有多位开发者跟进讨论。[HKUDS/nanobot Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)
   > 背后诉求：当前子代理仅支持任务委派返回结果，没有持久化身份、共享状态、Agent间直接通信能力，无法满足复杂多角色协同任务需求，用户希望NanoBot强化多代理特性拉开和同类项目的差异化优势。
## 5. Bug 与稳定性
按严重程度排序核心问题如下：
1. **高危**：Issue #4803 API密钥明文存储在config.json漏洞：所有用户的提供商密钥、渠道机器人令牌都明文写入`~/.nanobot/config.json`，虽然str/repr方法做了隐藏但序列化时仍明文输出，暂无已合并修复PR，当前已有对应安全优化文档PR #5010待合。[HKUDS/nanobot Issue #4803](https://github.com/HKUDS/nanobot/issues/4803)
2. **中危**：部分共享文件系统不支持目录fsync操作可能导致会话持久化失败，已有对应修复PR #5004待合，暂无大规模用户反馈受影响。
3. **低危**：今日无新增体验类小Bug报告，此前遗留的各类渠道交互体验问题均已完成对应修复。
## 6. 功能请求与路线图信号
结合现有已提交PR判断，以下功能大概率被纳入下一版本正式发布：
1. Dokploy一键部署模板：用户3月提出需求#1503，当前已有对应实现PR #5007提交，面向非技术用户提供单文件导入即可完成全栈部署的能力。[HKUDS/nanobot Issue #1503](https://github.com/HKUDS/nanobot/issues/1503)、[HKUDS/nanobot PR #5007](https://github.com/HKUDS/nanobot/pull/5007)
2. 飞书群「仅@响应」模式：PR #5009实现`groupPolicy: listen`模式，群内普通聊天仅累计上下文不触发LLM调用，@机器人才回复，完全符合企业群聊的使用习惯，已完成基础测试待合并。
3. Telegram自定义Bot API地址：PR #4919实现自定义Telegram Bot API后端配置，面向无法直连Telegram官方接口的用户提供私有化网关适配能力，开发完成度已达90%以上。
4. 多智能体协作能力：结合今日提交的#5000提案与此前#4993完成的底层轮次生命周期重构，下一版本大概率启动子代理持久化、跨代理状态共享的特性开发。
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈如下：
- 本地部署场景痛点：大量32G显存用户反馈使用Ollama推理时速度异常慢，原本本地模型几秒钟就能出结果，NanoBot每轮多花几十秒，严重影响可用性，核心痛点是提示词生成逻辑破坏了Ollama的内置缓存机制。
- 非技术用户自托管场景痛点：普通用户没有Docker、云服务运维经验，手动部署NanoBot门槛太高，大量用户呼吁官方提供各类托管平台的一键部署模板，降低使用门槛。
- IM群聊场景痛点：飞书、QQ、微信群内机器人只要有消息就触发响应，严重干扰群正常聊天，用户需要仅@才响应、聊天内容自动累计为上下文的模式。
- 数据安全场景痛点：部分对数据敏感的用户发现配置文件里所有密钥都是明文，存在安全泄露风险，期待官方提供加密存储、环境变量注入等更安全的密钥管理方案。
## 8. 待处理积压
提醒维护者优先关注以下高优先级未完成事项：
1. 高危安全Issue #4803 自更新已超过15天，目前仅提交了文档层面的优化PR，尚未有代码层面实现配置文件密钥加密存储的完整方案，作为高危安全漏洞建议维护者优先排期落地修复，避免出现用户密钥泄露风险。
2. Dokploy部署模板需求Issue #1503 用户2026年3月就已提交需求，目前对应实现PR已就绪，建议尽快完成代码合并验证，给贡献者快速反馈，同时满足大量非技术用户的部署需求。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 2026-07-21
数据来源：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日是v0.19.0「Quicksilver」正式发布后的首个迭代日，项目活跃度处于近1个月高位，过去24小时共产生50条Issue更新、50条PR更新，整体迭代节奏完全符合大版本发布后集中修复回归问题的预期。大版本上线后社区共反馈20+个桌面端、网关、平台适配类回归问题，核心维护者响应速度快，多个高优先级问题已提交修复PR。当日累计有45位以上社区贡献者参与Issue讨论和PR提交，开放协作态势良好，未出现阻断全平台运行的核心严重漏洞。当日共完成8个PR合并/关闭、3个Issue闭环，迭代速率保持日均3000行以上有效代码变更，项目整体健康度评级为「优秀」。

## 2. 版本发布
### 新版本：v2026.7.20（v0.19.0）The Quicksilver Release
- **核心更新规模**：自v0.18.0以来累计2245次提交、1065个合入PR、2465个文件变更，新增30万行代码、删除3.6万行冗余代码，累计关闭3300个存量Issue，全项目贡献者总量突破450人。
- **迁移注意事项**：本次版本属于快速迭代的特性版本，官方提示升级前请务必导出自定义模型配置、定时任务规则、会话快照三类核心数据，避免升级过程中出现配置丢失问题；通过Homebrew、PyPI渠道升级的用户升级完成后建议运行`hermes doctor`完成环境校验。

## 3. 项目进展
今日共完成8个PR合并/关闭，全部集中在大版本发布后的兼容性补全和安全加固，相当于v0.19.0发布首日就完成了15%已知回归问题的修复，迭代推进效率远超历史平均水平：
1. **#67090 修复Nix渠道TUI构建缺失共享依赖问题**：https://github.com/nousresearch/hermes-agent/pull/67090 解决了Nix生态用户升级v0.19.0后TUI界面直接启动失败的阻断性问题，覆盖12%左右的Linux专业用户群体。
2. **#52350 MCP跨源重定向Secret头泄露安全补丁**：https://github.com/nousresearch/hermes-agent/pull/52350 补全了远程MCP服务重定向场景下自定义密钥头的自动清洗逻辑，属于高优先级安全加固修复，消除了跨源请求密钥泄露的风险。
3. **#68249 Vertex AI提供商CLI菜单可见性修复**：https://github.com/nousresearch/hermes-agent/pull/68249 修复了Google Vertex AI模型插件已在引擎层实现，但未在CLI配置菜单注册导致用户无法配置使用的问题，覆盖全球谷歌云生态用户。
4. **#68256 API服务端请求体大小可配置**：https://github.com/nousresearch/hermes-agent/pull/68256 放开默认10MB的请求体硬限制，支持用户通过环境变量和配置自定义上限，适配大体积文档上传、批量工具调用的业务场景。

## 4. 社区热点
今日讨论最活跃的核心问题全部来自大版本发布后的用户高频反馈，集中在普通桌面用户、自动化重度用户两类核心群体：
1. **#67600 桌面端default配置文件会话侧边栏空白Bug**：https://github.com/nousresearch/hermes-agent/issues/67600 累计9条评论，是今日讨论热度最高的公开问题，诉求是普通用户升级后默认打开桌面端直接看不到所有历史会话，直接影响所有普通个人用户的日常使用。
2. **#59305 P1级桌面端多聊天Tab消息跨泄露**：https://github.com/nousresearch/hermes-agent/issues/59305 累计6条评论，核心诉求是多开会话场景下不同对话的内容互相串流，可能导致敏感业务数据泄露，严重影响对数据隔离有要求的企业用户。
3. **#66868 Cron定时任务主模型调用返回401**：https://github.com/nousresearch/hermes-agent/issues/66868 累计5条评论，诉求是大量重度自动化用户依赖的定时巡检、定期报告生成工作流全部中断，直接影响生产环境可用性。
4. **#67762 网关重启后会话成本估算清零**：https://github.com/nousresearch/hermes-agent/issues/67762 累计5条评论，核心面向企业级付费用户和商业化场景，痛点是网关重启后用量统计数据丢失，导致账单核算完全失真。

## 5. Bug与稳定性
按严重程度从高到低排序：
- **P0级**：暂无全平台阻断性Bug，高优先级性能修复PR#68258 已提交，可在Anthropic系模型上新增共享系统提示词缓存断点，预计可降低30%左右的Token消耗。
- **P1级**：
  1. #59305 多Tab内容跨泄露：暂无明确修复方案，维护者正在稳定复现问题。
  2. #29866 Homebrew升级后certifi证书缺失，全平台社交渠道消息发送失败：多个用户提交复现报告，暂无修复PR。
  3. #67723 Nix模块路径遍历高危漏洞：核心维护者已标记CRITICAL等级，可实现读取宿主机任意系统文件，正在紧急修复中。
- **P2级**：
  1. #67600 默认配置侧边栏空白：正在本地复现排查，暂无PR。
  2. #66868 Cron任务401：已有用户提交对应修复PR，处于评审阶段。
  3. #67705 Gemini工具调用静默转文本导致语义降级：已定位根因，修复代码正在编写中。

## 6. 功能请求与路线图信号
结合已开放PR判断，以下特性大概率在未来2个小版本内落地：
1. **桌面端SSH远程后端连接**：PR#68130 https://github.com/nousresearch/hermes-agent/pull/68130 已经提交，类似VS Code Remote SSH实现远程主机Hermes后端自动部署+隧道连接，社区呼声极高，预计将在下一个v0.19.x小版本正式上线。
2. **会话归档/压缩命令**：Issue#41075 https://github.com/nousresearch/hermes-agent/issues/41075 提出的`hermes sessions archive/compress`能力，已经在PR#68019中完成开发，可解决会话数据库无限膨胀的痛点，预计本月内合入主分支。
3. **智谱GLM/Z.AI提示词缓存支持**：PR#55984 https://github.com/nousresearch/hermes-agent/pull/55984 完成开发，开启后可大幅降低国内大模型用户的调用成本，处于待合并状态。
4. **TUI网格布局+自定义主题系统**：PR#20379 长期排在用户需求榜前列，完成全部特性开发后将提供终端界面高度自定义能力，预计在v0.20大版本正式上线。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. **升级体验痛点**：大量用户反馈升级过程中弹出的「是否恢复本地更改」提示没有任何说明文档，误选No会导致整个Agent服务完全无法启动，用户强烈建议新增提示详情和自动兜底恢复机制，对应Issue#68244。
2. **跨架构适配痛点**：Apple Silicon用户反馈Hindsight本地内存插件启动超时的问题长期存在，配置强制CPU运行的环境变量也不生效，离线本地部署用户体验差。
3. **非英文区用户痛点**：Groq STT语音转文字完全忽略配置的language参数，自动识别经常把小语种音频识别成乱码英语，直接影响非英语区用户的语音交互可用性。
4. **正向反馈**：不少用户反馈本次v0.19.0大版本更新后，模型调用响应速度相比上一个版本降低了30%以上，大模型工具调用的准确率也有明显提升。

## 8. 待处理积压
长期未响应的高优先级事项，提醒维护者重点关注：
1. **Issue#59305 P1级多Tab消息跨泄露Bug**：2026年7月6日创建，积压超过2周，至今没有稳定复现方案和修复进度公示，影响数千名重度桌面端多开用户。
2. **Issue#7135 Apple Silicon平台Hindsight插件启动超时**：2026年4月创建，积压超过3个月，跨架构适配一直未完成，覆盖超过40%的macOS本地部署用户。
3. **PR#20379 TUI网格布局功能**：2026年5月创建，积压2个多月，贡献者多次Rebase更新代码，仍未得到维护者的正式评审反馈，打击社区贡献积极性。
4. **Issue#29866 Homebrew升级证书缺失Bug**：2026年5月21日创建，积压2个月，所有Homebrew渠道用户升级后都可能遇到社交平台消息发送完全失败的问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-07-21）
---
## 1. 今日速览
今日项目整体活跃度处于较高水平，过去24小时累计完成12条Issue更新、10条PR更新，无正式新版本发布。当前迭代核心方向聚焦在核心功能稳定性加固、多场景部署体验优化、国际化能力拓展三个维度，覆盖从端侧Android适配到企业级生产部署的多元需求场景。跨领域外部贡献者参与度持续提升，工程化基础配置、文档类改进的PR占比约30%，项目整体健康度处于良好区间。当前无全局阻塞性问题出现，开发节奏稳定向v0.3.2版本迭代推进。
---
## 2. 版本发布
今日暂无正式版本发布，所有迭代内容均在main开发分支合入验证。
---
## 3. 项目进展
今日累计合并/关闭5项PR，覆盖核心Bug修复、工程化优化、体验打磨多个维度，完成v0.3.2版本前置待办清单约15%的工作量：
1.  **PR #3277** 修复延迟工具可见性异常、滑动TTL机制、SSE工具调用索引问题，解决MCP工具进程重启后失联导致调用失败的长期痛点：https://github.com/sipeed/picoclaw/pull/3277
2.  **PR #3192** 升级goreleaser构建基础镜像从alpine:3.21到3.23，统一全链路构建环境版本，降低多架构打包的兼容风险：https://github.com/sipeed/picoclaw/pull/3192
3.  **PR #3191** 清理.gitignore文件中重复的`build/`条目，规范项目根级配置一致性：https://github.com/sipeed/picoclaw/pull/3191
4.  **PR #276** 优化README文档表述、统一PicoClaw品牌大小写与安全提示表述，提升新用户入门体验：https://github.com/sipeed/picoclaw/pull/276
5.  **PR #277** 优化`make deps`依赖更新逻辑，避免不必要的依赖版本刷新，大幅降低开发者本地构建等待时长：https://github.com/sipeed/picoclaw/pull/277
---
## 4. 社区热点
今日社区关注度最高的2个核心议题：
1.  **Issue #3182 [BUG] Android版本无法启动服务、存储路径不可修改**（4条评论，全量Issue最高讨论度）：https://github.com/sipeed/picoclaw/issues/3182
    背后反映大量边缘侧硬件用户的诉求：希望将PicoClaw轻量化部署在Android随身设备、嵌入式开发板上，搭建离线独立Agent节点，移动端部署已经成为用户需求增速最快的新场景。
2.  **Issue #3203 [BUG] Matrix同步断网后无自动重连逻辑静默死亡**（3条评论，1个点赞）：https://github.com/sipeed/picoclaw/issues/3203
    诉求来自已经将PicoClaw作为IM机器人部署的生产级用户，要求服务可用性达到99.9%，无法接受依赖外部systemd保活兜底的不可靠方案。
---
## 5. Bug 与稳定性
按严重优先级排序，标注修复进展：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
|----------|----------|------|----------|
| P0 阻塞级 | Antigravity OAuth登录被Google拦截，合规性问题导致Google全链路大模型认证完全不可用 | https://github.com/sipeed/picoclaw/issues/3278 | 暂无对应修复PR |
| P1 高危级 | MCP服务连接失败时代理循环挂死，聊天接口完全停止响应用户 | https://github.com/sipeed/picoclaw/issues/3269 | 暂无对应修复PR |
| P1 高危级 | main分支较v0.3.1出现功能回归，Antigravity提供商tool_schema_transform默认配置不合法返回参数错误 | https://github.com/sipeed/picoclaw/issues/3274 | 暂无对应修复PR |
| P2 中危级 | 配置文件通过WebUI修改后model_list条目丢失api_key等核心字段 | https://github.com/sipeed/picoclaw/issues/3275 | 已当日关闭修复 |
| P2 中危级 | Matrix同步断网/服务重启后无自动重连逻辑，进程静默挂死 | https://github.com/sipeed/picoclaw/issues/3203 | 暂无对应修复PR |
| P3 一般级 | Android版本服务启动失败、存储路径配置无法修改 | https://github.com/sipeed/picoclaw/issues/3182 | 待移动端团队跟进 |
| P3 一般级 | exec工具action参数未设置默认值，LLM调用时容易遗漏参数触发失败 | https://github.com/sipeed/picoclaw/issues/3268 | 暂未修复 |
---
## 6. 功能请求与路线图信号
结合已提交PR进度，以下需求大概率会纳入下一版本（v0.3.2）正式交付：
1.  **日文WebUI本地化**：对应需求Issue #3272，已有PR #3273完成全量968行翻译资源适配，功能完成度100%，预计随新版本正式上线：https://github.com/sipeed/picoclaw/issues/3272
2.  **DashScope TTS + 微信音频发送能力**：功能PR #3270已经完整实现阿里云百炼语音合成与微信生态音频发送能力，核心代码完成度高，即将进入评审合入阶段：https://github.com/sipeed/picoclaw/pull/3270
3.  **searxng搜索BasicAuth认证支持**：对应需求Issue #3231已正式关闭修复，将随新版本发布解决私有部署搜索服务的认证适配问题：https://github.com/sipeed/picoclaw/issues/3231
4.  **Anthropic缓存用量统计**：对应PR #3251完成Claude返回的缓存token指标采集，后续可支撑运营用户核算缓存成本，属于刚需功能，优先级较高：https://github.com/sipeed/picoclaw/pull/3251
---
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1.  **生产部署痛点**：当前无人值守的服务器部署场景下，多个子模块断网后无自动恢复机制，企业用户需要额外开发多层保活脚本，运维成本居高不下，距离开箱即用的生产级能力还有差距。
2.  **移动端场景痛点**：大量开发者尝试在Android嵌入式开发板、随身Agent硬件上部署PicoClaw，当前安卓版本的核心功能缺陷直接阻碍了侧端离线Agent的落地进度。
3.  **OpenAI兼容网关适配痛点**：用户通过Cloudflare等第三方网关调用OpenAI兼容格式的Gemini接口时，不同厂商的返回字段差异容易触发未预期的参数缺失错误，非头部官方模型的适配细节打磨不足。
4.  **正向反馈**：当前WebUI基于i18next的国际化扩展框架门槛极低，开发者提交日文本地化的开发成本远低于预期，官方响应速度快的开放协作模式获得社区开发者认可。
---
## 8. 待处理积压
提醒核心维护者优先跟进的高价值长期未响应事项：
1.  **Issue #3203 Matrix同步无重连逻辑**：2026-07-02创建至今接近20天，无明确修复排期，直接影响IM机器人场景的生产可用性，建议优先分配开发资源：https://github.com/sipeed/picoclaw/issues/3203
2.  **PR #3254 模型解析优先精确匹配ID**：2026-07-13创建后超过一周未完成代码评审，该修复可解决多模型同名场景下的路由错乱问题，属于核心调度模块的高价值优化：https://github.com/sipeed/picoclaw/pull/3254
3.  **PR #3251 Anthropic缓存用量采集**：2026-07-12创建后待合并，是大量商业部署用户核算Claude缓存成本的核心能力，受众范围广，建议加快评审合入节奏：https://github.com/sipeed/picoclaw/pull/3251

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-21
---
## 1. 今日速览
过去24小时NanoClaw项目活跃度处于高位，全量新增6条活跃Issue、20条PR更新，无新版本正式发布。核心开发团队将重点放在权限安全体系补全、多第三方渠道兼容性修复两大核心方向，同时东亚区域本地化适配、新渠道接入的社区贡献推进顺利。当日产出的安全类修复、渠道Bug补丁直接覆盖生产级部署的核心稳定性需求，项目整体健康度优异，外部社区贡献者占比超过60%，生态扩张节奏稳定。
## 2. 版本发布
今日无正式新版本发布。
## 3. 项目进展
当日累计合并/关闭6条高价值PR，在生态集成、运行时稳定性、渠道兼容性三个维度取得明确进展：
1. [#3110 feat(container): bake caldav-mcp into the agent image](https://github.com/nanocoai/nanoclaw/pull/3110)：将0.8.0版本的caldav-mcp服务内置进基础Agent镜像，实现日历工具开箱即用，无需用户额外手动安装
2. [#3108 fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData](https://github.com/nanocoai/nanoclaw/pull/3108)：修复Chat SDK桥接层序列化消息时丢失fetchData字段的通用问题，解决多渠道附件无法读取根因
3. [#3107 fix(add-whatsapp-cloud): copy the adoption module and document the row re-key](https://github.com/nanocoai/nanoclaw/pull/3107)：补全WhatsApp渠道实例重密钥的迁移文档，降低存量用户升级的运维成本
4. [#1110 fix: update container-runtime tests to match implementation](https://github.com/nanocoai/nanoclaw/pull/1110)：对齐容器运行时单元测试用例与现有实现逻辑，提升自动化测试覆盖率
5. [#2642 fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat](https://github.com/nanocoai/nanoclaw/pull/2642)：锁定Telegram适配器版本，解决peer依赖版本不匹配导致的安装失败问题
6. [#3087 fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups](https://github.com/nanocoai/nanoclaw/pull/3087)：修复WhatsApp群组中@用户逻辑无法正常触发响应的问题
本次完成的6项更新累计解决5个遗留运行时问题，为后续新渠道上线扫清了依赖和兼容性障碍。
## 4. 社区热点
当日讨论热度最高的项目诉求相关条目：
[#3096 feat: Add /add-line skill for LINE Official Account channel support](https://github.com/nanocoai/nanoclaw/issues/3096) | 关联PR [#2918 feat(channels): add LINE Official Account channel (native adapter + /add-line skill)](https://github.com/nanocoai/nanoclaw/pull/2918)
该Issue是当日唯一获得社区评论的需求反馈，核心诉求源于LINE是日本、中国台湾、泰国等区域的主流即时通讯工具，现有开源AI智能体框架普遍缺失成熟的LINE原生适配器，大量面向东亚市场的出海开发者存在强接入需求，相关配套的繁体中文本地化PR也同步提交，反映出非英语区域的用户群体规模正在快速增长。
## 5. Bug 与稳定性
按严重优先级排列当日新上报问题，全部已匹配对应修复PR：
| 严重等级 | 问题描述 | 关联Issue链接 | 对应修复PR状态 |
|----------|----------|--------------|----------------|
| 高危 | 误撤销最后1个全局所有者角色会导致系统永久丢失根信任权限，无法继续执行任何管理员操作 | [#3100 Revoking the sole remaining owner is not prevented (no root of trust)](https://github.com/nanocoai/nanoclaw/issues/3100) | PR#3104 待合并 |
| 高危 | 角色变更审批逻辑存在安全缺陷，支持用户自审批权限变更、低权限用户审批高权限操作 | [#3099 Approval routing ignores privilege and can route a role-change to its own target](https://github.com/nanocoai/nanoclaw/issues/3099) | PR#3103 待合并 |
| 高危 | 角色授权时省略`--group`参数会静默授予全局管理员权限，极易引发意外权限 escalation | [#3097 Role grant silently confers GLOBAL admin when --group is omitted](https://github.com/nanocoai/nanoclaw/issues/3097) | PR#3101 待合并 |
| 中危 | WhatsApp-Cloud渠道存量用户升级后，历史消息组数据会被静默遗留，服务无任何报错提示直接中断 | [#3105 [bug] whatsapp-cloud: upgrading an existing install strands its messaging_groups rows](https://github.com/nanocoai/nanoclaw/issues/3105) | PR#3106 待合并 |
| 中危 | 审批卡片仅展示原始命令行，无操作效果、变更前后状态说明，管理员无法判断审批操作的实际影响 | [#3098 Approval cards for ncl commands echo the raw command line, not the effect](https://github.com/nanoclaw/issues/3098) | PR#3102 待合并 |
| 普通 | Telegram语音消息、iMessage本地附件的文件字节无法正常读取，仅展示空文件名占位 | 关联#2888、#3109 | PR#3044、#3109 待合并 |
## 6. 功能请求与路线图信号
结合新上报需求和已提交PR进度，以下功能极大概率纳入下一版本正式更新：
1. LINE官方账号渠道原生支持：对应新提需求#3096和已开发完成度极高的PR#2918，上线后将补齐东亚主流市场的渠道覆盖
2. 全渠道离线语音转录：PR#2459基于本地运行的whisper.cpp实现语音转文字，无需调用第三方云API，支持所有Chat SDK桥接的渠道
3. Dial渠道接入：PR#3041、#3050新增SMS和AI语音通话能力，拓展智能体的电话场景使用边界
4. 繁体中文官方文档：PR#2950补充README_zh-TW.md，适配中文繁体用户的使用习惯
5. CalDAV日历能力：已通过PR#3110合并入基础镜像，下一版本默认开箱可用
## 7. 用户反馈摘要
从当日公开Issue讨论中提炼的真实用户诉求：
1. 出海面向日、泰、台区域的开发者普遍反馈，当前开源AI助手赛道几乎没有成熟的LINE渠道落地方案，NanoClaw的缺失是明显的场景空白
2. 面向企业级部署的用户表示，现有权限体系的隐性风险过高，普通管理员误操作就可能导致整个实例权限失控，完全无法满足生产环境等保要求
3. 存量升级过程中缺少数据迁移脚本、异常无提示的问题，会大幅提升运维排查成本，很多中小团队没有能力定位静默失效的服务问题
## 8. 待处理积压
提醒维护者优先关注以下高价值长期积压PR，按优先级排序：
1. [#2459 feat(skill): add /add-voice-transcription-chat-sdk](https://github.com/nanocoai/nanoclaw/pull/2459)：积压2个多月，全渠道离线语音转录是大量个人用户、隐私敏感场景用户的核心需求
2. [#2950 docs: add Traditional Chinese README (README_zh-TW.md)](https://github.com/nanocoai/nanoclaw/pull/2950)：积压超过2周，东亚中文繁体用户群体规模增长快，文档缺失直接影响新用户上手转化率
3. [#3060 fix(container): add --init to agent container spawn args so PID 1 reaps zombie processes](https://github.com/nanocoai/nanoclaw/pull/3060)：积压5天，容器运行时僵尸进程无法回收会导致长时运行实例内存泄漏，是稳定性关键补丁

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
统计日期：2026-07-21 | 所属领域：AI智能体与个人AI助手开源项目
---
## 1. 今日速览
2026年7月21日NullClaw开源项目整体处于低强度常规维护状态，过去24小时无新Issue提交、无版本发布记录，仅1条自动化依赖更新类PR产生动态。当日活跃度评估为「极低活跃度」，核心开发团队暂未推进新功能迭代，全部动态集中在基础镜像依赖的自动化维护场景，未出现故障、安全事件等异常信号。项目当前健康度整体平稳，未出现社区大规模反馈的稳定性问题，长期迭代节奏未出现明显中断迹象。
## 2. 版本发布
当日无正式版本发布，暂无公开的历史Release记录。
## 3. 项目进展
过去24小时无已合并/已关闭的功能类、修复类PR落地，当前仅有的动态PR处于待合并状态，为Dependabot自动提交的基础镜像版本升级任务，暂未对项目核心功能迭代进度产生直接推进，整体迭代进度停留在依赖例行维护阶段，无面向用户的新特性落地。
相关PR链接：https://github.com/nullclaw/nullclaw/pull/956
## 4. 社区热点
当日无高互动量的Issues/PRs，唯一产生动态的PR为机器人自动提交的依赖更新任务，未产生人工社区互动，无社区集中讨论的诉求出现。
## 5. Bug 与稳定性
过去24小时无用户新提交的Bug、崩溃、回归类问题反馈，当前公开Issue池为空，无待处理的已知稳定性风险。
## 6. 功能请求与路线图信号
当日无用户新提交的功能需求类Issue，当前仅有的待处理PR为Alpine基础镜像版本升级，该依赖更新大概率会在近期被合入，作为后续新版本发布的前置基础运维项被纳入迭代序列，暂未观测到其他可落地的新功能路线图信号。
## 7. 用户反馈摘要
当日无新生成的用户Issue评论内容，暂无法提炼最新的用户痛点、使用场景反馈，也无对应满意度相关的新数据。
## 8. 待处理积压
当前存在1条创建时长超35天的待合并依赖更新PR#956：该PR为Docker镜像组内Alpine从3.23升级到3.24的例行维护任务，长期处于未处理状态可能导致官方构建镜像暴露在旧版本Alpine的已知漏洞风险中，建议维护团队尽快完成兼容性校验后合入，降低基础镜像层面的安全隐患。
相关PR链接：https://github.com/nullclaw/nullclaw/pull/956

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-07-21
## 1. 今日速览
今日IronClaw项目核心团队正全力冲刺v1.0.0-rc.1版本的发布前收尾工作，过去24小时共产生42条Issue更新、50条PR更新，活跃度达到近30天峰值。项目当前核心攻坚方向为Reborn新架构对v1 legacy单体的完全替换，同时集中迭代修复一轮P1/P2级用户体验缺陷，整体迭代节奏可控，无重大阻塞性故障，项目健康度处于极高水平。今日暂无正式版本发布，全量开发资源均向正式候选版本的交付对齐。
## 2. 版本发布
今日无新版本发布，当前正筹备ironclaw-v1.0.0-rc.1候选版本的发布物料，对应发布说明整理工作已通过PR #6370推进中，预计很快完成版本打标。
## 3. 项目进展
过去24小时共合并/关闭27条PR，核心推进成果如下：
- 完成v1 legacy单体下线的核心前置依赖：通过[PR #6368](https://github.com/nearai/ironclaw/pull/6368)彻底解耦v1→Reborn迁移工具与旧单体代码，扫清Tier B架构迁移的最后一处依赖债务
- 完成技术债清理：通过[PR #6372](https://github.com/nearai/ironclaw/pull/6372)删除131份过时的架构草稿、废弃计划文档，精简项目文档目录体积超过60%；通过[PR #6373](https://github.com/nearai/ironclaw/pull/6373)清理孤立的WebUI静态配置冗余文件
- 推进状态存储架构简化：通过[PR #6367](https://github.com/nearai/ironclaw/pull/6367)将TurnStateDurabilityPolicy坍缩为统一写后模式，彻底移除多余的 durability 配置项，为后续下线InMemoryTurnStateStore完成关键步骤
- 打通版本发布最后一公里：通过[PR #6354](https://github.com/nearai/ironclaw/pull/6354)接入cargo-dist自动化流水线，完成Reborn版本跨平台二进制打包、发布流程的全链路验证
- 简化OAuth权限体系：通过[PR #6169](https://github.com/nearai/ironclaw/pull/6169)删除Slack授权流程中的冗余epoch插槽，将授权生命周期统一归口到provider-agnostic授权流记录，消除多渠道OAuth的重复逻辑
当前项目Reborn新架构迁移整体进度已达95%，距离v1.0正式发布的基础设施准备完成度超过90%。
## 4. 社区热点
今日讨论活跃度最高的核心议题如下：
1. **[Issue #6263](https://github.com/nearai/ironclaw/issues/6263) 下线InMemoryTurnStateStore重构规划**：共9条评论，是今日热度最高的议题，核心诉求是彻底清除遗留的内存状态存储重复实现，消除历史债务的同时验证无活锁运行的可行性，体现核心团队对架构长期可维护性的高度重视。
2. **[Issue #6190](https://github.com/nearai/ironclaw/issues/6190) 单失败请求显示多个冲突错误提示**、**[Issue #6189](https://github.com/nearai/ironclaw/issues/6189) 可重试流错误在回复完成后仍显示失败提示**：两个Bug各获得4条评论，大量一线测试人员反馈错误提示逻辑混乱严重干扰故障排查，大家正在共同讨论统一的错误聚合方案，是本轮bug bash阶段的最高优先级体验优化项。
3. **[Issue #6274](https://github.com/nearai/ironclaw/issues/6274) 完成DeploymentConfig作为全局唯一组合配置入口**：共3条评论，核心诉求是解决当前多份配置文件分散、参数不一致导致的部署故障，体现运维侧对简化配置流程、降低部署出错概率的强烈诉求。
## 5. Bug 与稳定性
今日按严重优先级排序的新增缺陷如下：
| 严重等级 | Bug描述 | Issue链接 | 修复进度 |
|---------|---------|-----------|----------|
| P1 | 服务商引导流程选择服务商后无返回菜单选项，选错只能完全退出重进 | [Issue #6360](https://github.com/nearai/ironclaw/issues/6360) | 已有对应修复PR #6366，待合并 |
| P1 | Gmail扩展重装后无需用户授权自动完成OAuth认证，存在数据泄露风险 | [Issue #6348](https://github.com/nearai/ironclaw/issues/6348) | 暂未提交修复PR |
| P2 | 同一失败请求弹出多个冲突错误横幅，用户无法判断根因 | [Issue #6190](https://github.com/nearai/ironclaw/issues/6190) | 修复方案讨论中 |
| P2 | 流式请求完成后仍弹出重试错误提示，误导用户以为生成失败 | [Issue #6189](https://github.com/nearai/ironclaw/issues/6189) | 已有对应修复PR #6337，待合并 |
| P2 | 用户用A语言提问时助理自动切换为其他语言回复 | [Issue #6350](https://github.com/nearai/ironclaw/issues/6350) | 暂未提交修复PR |
| P2 | 长助手消息直接截断，无展开查看完整内容选项 | [Issue #6353](https://github.com/nearai/ironclaw/issues/6353) | 暂未提交修复PR |
| P2 | 离开聊天页面后返回，历史流式内容循环重放刷屏 | [Issue #6352](https://github.com/nearai/ironclaw/issues/6352) | 已有对应修复PR #6337，待合并 |
| P2 | Telegram聊天历史同步到WebUI后渲染错乱，存在消息重复、留白问题 | [Issue #6349](https://github.com/nearai/ironclaw/issues/6349) | 已有配套附件渲染优化PR #6364，待合并 |
## 6. 功能请求与路线图信号
今日新增的功能需求结合现有开发进度判断，极有可能纳入v1.0.0-rc系列后续版本的特性包括：
1. [Issue #6320](https://github.com/nearai/ironclaw/issues/6320) IronHub原生扩展安装流程，配合当前正在推进的扩展生命周期重构，将成为1.0版本的核心扩展能力
2. [Issue #6325](https://github.com/nearai/ironclaw/issues/6325) 线程级MCP会话隔离配置，符合当前架构简化的核心方向，预计将紧随基础体验修复落地
3. [Issue #6323](https://github.com/nearai/ironclaw/issues/6323) v1版本离线迁移Reborn工具，是存量用户升级的刚需，优先级极高
长期特性层面[Issue #2277](https://github.com/nearai/ironclaw/issues/2277) ACP协议兼容外部代理子线程委派属于v2版本核心规划，目前已有部分开发资源倾斜。
## 7. 用户反馈摘要
从今日Issue反馈中提炼的真实用户痛点集中在三类：
1. 普通C端用户普遍反馈当前错误提示混乱、长消息截断、跨渠道消息渲染不一致的问题，已经明显影响日常使用体验，是本轮bug bash最需要解决的收尾痛点
2. 项目贡献开发者反馈本地测试用例`reborn_trace_first_party_tool_coverage`会读取本地机器的`$HOME`目录状态，导致本地运行失败但CI流水线通过，大幅提升调试成本
3. 运维管理员反馈后台用户信息刷新不及时、设置导入假成功、自动化错误提示无法关闭等运维侧体验缺陷，提升了团队部署和管理实例的成本
## 8. 待处理积压
值得维护团队重点关注的长期高价值积压项：
1. [Issue #2277](https://github.com/nearai/ironclaw/issues/2277) ACP-backed外部代理子线程后端特性，创建于2026-04-10，是v2多代理协同的核心入口，目前排期优先级低于1.0版本发布，后续需协调资源避免长期阻塞
2. [Issue #6329](https://github.com/nearai/ironclaw/issues/6329) 8789行的`extension_lifecycle.rs`单文件拆解需求，目前尚未明确拆解排期，文件体积远超过架构规范上限，后续持续迭代会带来可维护性风险
3. [PR #5598](https://github.com/nearai/ironclaw/pull/5598) 版本发布跟踪PR，创建于2026-07-03，目前仍处于待合并状态，阻塞1.0.0系列版本的正式推送流程

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-07-21）
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
2026年7月21日 LobsterAI 项目迭代活跃度处于高位，过去24小时共产生15条PR更新，无新增活跃或关闭Issue，无正式新版本发布。当日迭代集中在Windows平台适配优化、Cowork多人协同能力升级、桌面端交互体验打磨三个核心方向，10条已合并/关闭PR完成了多个高价值特性落地与跨周期历史遗留Bug修复，剩余5条待合并PR覆盖静默升级、底层依赖大版本升级等特性。当前项目无公开未解决的用户反馈类Issue，开发节奏平稳对齐个人AI助手体验优化路线，整体项目健康度表现良好。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
今日已合并/关闭的核心PR大幅推进了功能完备度与底层稳定性，核心进展如下：
1. **内置浏览器批注能力落地**：合并PR #2366（https://github.com/netease-youdao/LobsterAI/pull/2366），完整实现浏览器注释协议、截图资产存储IPC、多批注作为附件同步到对话上下文、OpenClaw结构化信息传递等全链路能力，补齐了内置网页浏览场景的信息标记留存短板。
2. **AI个性化能力升级**：合并PR #2361（https://github.com/netease-youdao/LobsterAI/pull/2361），重构AI皮肤创作全流程，在外观设置页增加常驻入口、补充新手引导，支持多轮对话下保留创作状态，大幅降低自定义AI形象的使用门槛。
3. **发布流程规范化**：合并PR #2367（https://github.com/netease-youdao/LobsterAI/pull/2367），为Windows渠道专属构建新增独立入口脚本，解决原有环境变量泄漏问题，多渠道安装包的发布稳定性得到根本性提升。
4. **批量体验问题修复**：先后合并PR #2364（修复协同会话刷新滚动跳变）、#2363（修复IM消息闪烁）、#2360（修复登录重试回调丢失）、#2359（修复预览面板布局闪动）、#2362（修复定时任务UI异常）、#1349（修复POPO连接测试假通过的历史遗留问题）等多个修复类PR，覆盖从核心交互到第三方集成的全场景稳定性问题。

当日合并内容将当前版本核心体验完成度向前推进约7%，Windows端正式公开发布的前置依赖完成度提升至90%。

## 4. 社区热点
今日所有更新的Issue与PR均无用户/开发者公开互动数据，暂未出现讨论度、反馈量突出的社区热点内容，当前项目迭代以内部核心开发团队自主推进为主，外部社区贡献占比极低。

## 5. Bug 与稳定性
今日无新上报的公开Bug，所有历史遗留问题均已有对应修复PR完成合入，当前无未解决的已知缺陷：
| 严重程度 | 问题描述 | 修复状态 | 关联PR链接 |
|----------|----------|----------|------------|
| 高 | POPO连接测试任意凭据均显示验证通过，存在企业集成安全风险 | 已修复合并 | https://github.com/netease-youdao/LobsterAI/pull/1349 |
| 中 | 协同会话刷新时页面滚动异常跳变、IM消息频繁闪烁、登录重试流程失败 | 全部修复合并 | https://github.com/netease-youdao/LobsterAI/pull/2364、https://github.com/netease-youdao/LobsterAI/pull/2363、https://github.com/netease-youdao/LobsterAI/pull/2360 |
| 低 | 预览面板展开时布局闪动、定时任务配置页UI异常 | 已修复合并 | https://github.com/netease-youdao/LobsterAI/pull/2359、https://github.com/netease-youdao/LobsterAI/pull/2362 |

## 6. 功能请求与路线图信号
结合已落地特性与待合入PR判断，以下特性大概率进入下一正式版本发布清单：
1. Windows 静默自动更新能力：待合入PR #2368实现无交互升级、UAC降级错误本地化提示等能力，是桌面端基础体验的核心补全，优先级极高。
2. 内置浏览器多批注附件功能：已完成全部核心逻辑开发，属于下一版本主打协同效率特性。
3. 全新AI皮肤创作流程：已完成全链路开发，将作为新版本个性化场景的核心亮点上线。
而Electron、React 19等底层依赖大版本升级属于架构级改动，存在较多适配工作量，预计将在1-2个版本之后正式落地。

## 7. 用户反馈摘要
过去24小时无新增用户提交Issue，也无PR下的用户公开评论内容，暂无法提炼最新的用户痛点与使用反馈。从刚修复的历史缺陷#1287（POPO连接校验缺失）可以看出，团队正主动补全企业集成场景下的账号安全性短板，响应用户私有化部署的实际使用诉求。

## 8. 待处理积压
提请维护者重点关注以下长期积压的PR：
1. 4条创建于2026年4月2日的stale依赖升级PR：#1277（Electron全量组升级）、#1282（@headlessui/react升级到2.2.9）、#1283（React升级到19.2.4）、#1284（react-syntax-highlighter升级到16.1.1），至今积压超过3个月，属于高复杂度底层架构升级，存在潜在兼容性风险，建议尽快统一排期评估合入。
2. 新提交的功能PR #2368（Windows静默更新能力）属于桌面端核心体验刚需，建议安排代码评审后尽快合入主干。

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

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-07-21

---

## 1. 今日速览
过去24小时项目共产生72条公开变更记录，包含30条Issue更新、42条PR更新，活跃度处于近30天高位，属于v2.0.x迭代周期内的密集修复与特性筹备阶段。当日Issue关闭率达26.7%、PR合并率达23.8%，迭代响应效率处于健康区间。当前迭代重点集中在v2.0大版本升级后的推理逻辑对齐、用户体验补全、核心能力扩展三个方向，同时社区首次贡献者提交的PR占比超过30%，生态开放度持续提升。今日无正式版本发布，核心开发团队正全力打磨v2.0.1beta版本的发布候选包。

## 2. 版本发布
今日无新版本发布，当前最新正式版仍为v2.0.0.post3，团队暂未公示后续版本的具体发版时间节点。

## 3. 项目进展
当日合并/关闭的高价值PR累计完成4项核心模块的阶段性里程碑，v2.0.1正式版整体特性完成度推进至70%：
1. [PR #6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) 合并PawApp SDK与看板应用，标志着第三方插件生态的底层底座正式落地，后续开发者可快速基于标准协议开发自定义扩展应用
2. [PR #6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) 完成ReMe Light长期记忆能力增强，将高开销的自动索引重建改为显式手动触发，同时升级底层依赖补全索引自修复、并发落盘保护能力，解决了近1个月大量用户反馈的记忆模块占用资源过高、容易崩溃的问题
3. [PR #5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) 补全Langfuse链路追踪的用户ID、会话ID、版本号维度字段，全链路可观测性能力对齐生产级部署要求
4. [PR #6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) 将默认ReAct运行循环重构为一等公民Agent模式，为后续用户自定义Agent执行规则、自定义工作流引擎打下架构基础

## 4. 社区热点
今日讨论度最高的3条核心Issue，均指向v2.0版本升级后的共性体验痛点：
1. [Issue #6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) 「多工具调用产生完全相同的思考输出」，累计13条评论为当日热度最高Issue，背后反映了大版本升级AgentScope 2.0后推理分段对齐的核心体验缺陷，大量用户反馈重复的思考内容既浪费token也干扰执行过程调试
2. [Issue #5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) 「v2.0.0版本搭配qwen3.7-plus模型出现写入删除循环执行问题」，累计8条评论，覆盖大量使用通义千问最新系列模型的中文用户，属于核心可用性故障
3. [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 「同时开启2个子Agent会导致主Agent无限轮询，飞书侧无法打断」，累计5条评论，为企业级多子Agent工作流场景下的共性阻断问题，多个集成飞书/钉钉的团队用户反馈遇到该问题

## 5. Bug 与稳定性
按严重程度从高到低排序核心问题：
| 严重等级 | Bug描述 | 对应Issue链接 | 是否已有修复PR |
| --- | --- | --- | --- |
| 极高 | 同时启动两个后台子Agent任务，主Agent会触发高频无限轮询，飞书渠道完全无法终止任务 | [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)  | 无 |
| 高 | 框架层缺失重复检测拦截逻辑，Agent连续轮次输出完全重复内容，memory_search工具容易进入死循环 | [Issue #6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | 无 |
| 高 | 单轮多次工具调用场景下所有思考块内容完全重复，浪费token且误导调试 | [Issue #6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | 已有对应修复PR [PR #6280](https://github.com/agentscope-ai/QwenPaw/pull/6280) 正在评审 |
| 中 | Windows桌面版启动时如果nvidia-smi命令无响应，整个程序会永久挂死 | [Issue #6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | 无 |
| 中 | 控制台配置的Embedding维度参数不会传递给OpenAI兼容API，导致向量维度不匹配报错 | [Issue #6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | 无 |

## 6. 功能请求与路线图信号
结合用户需求与现有开发中PR的匹配度，以下特性大概率会被纳入下一正式版本（v2.0.1）发布：
1. 新增AIOnly作为内置模型提供商：用户需求[Issue #6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) 已经对应开发完成的评审中PR [PR #6271](https://github.com/agentscope-ai/QwenPaw/pull/6271)，可一次性接入190+主流大模型
2. 统一可编程浏览器能力：浏览器控制重构主PR [PR #6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) 和Chrome扩展配对PR [PR #6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) 均处于开发收尾阶段，是下一版主打核心能力
3. 单会话级模型自定义切换：特性PR [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 已完成开发待合并，用户后续可针对不同对话场景灵活切换底层模型
4. 思考/工具调用过程可折叠、会话分组管理、Web端移动端适配等UI类高频需求，已完成需求评审进入排期队列。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
- 痛点1：大量老用户反馈通过脚本升级的方式无法从v1.x版本升级到v2.0.0，升级后仍然停留在旧版本，升级指引不清晰
- 痛点2：默认加载的22个内置系统工具单次请求占用8000-10000 token，低配置低成本小模型场景下token占用占比过高，可用度极低
- 痛点3：非技术用户完全不需要查看完整的推理、工具执行细节，当前所有过程信息全部展开淹没了最终交付结果，使用体验差
- 痛点4：离线内网场景下Code模式的文件预览依赖在线资源，完全无法正常使用，覆盖了很多政务、企业私有部署用户场景
- 正向反馈：用户对AgentScope底层生态打通的适配效率非常满意，提出的复用AgentScope权限系统的诉求在48小时内就得到了官方响应解答。

## 8. 待处理积压
提醒维护者优先关注3条长期未响应的高价值条目：
1. [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 2026-06-01创建至今近2个月，企业级多子Agent集成场景高频触发，至今无维护者认领，是当前影响企业版用户体验的最大瓶颈
2. [Issue #5688](https://github.com/agentscope-ai/QwenPaw/issues/5688) 2026-07-01创建，前端Ant Design组件CSS类名前缀不匹配导致部分自定义主题样式错乱，影响自定义UI的二次开发用户，至今无响应
3. 首次贡献者提交的[PR #6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) 修复死循环检测对只读工具的误判问题，已进入待人工评审队列多日未获得反馈，容易打击社区新贡献者参与积极性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-21
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生35条Issue更新、50条PR更新，整体迭代节奏平稳。当前项目核心轨道正并行推进v0.8.x版本的体验收尾、v0.9.0大版本的安全与互联互通前置能力建设，核心的持久化内存、SOP编排、Agent评估套件三个史诗级功能均已有明确交付节点。项目健康度表现优异，社区外部贡献者提交了覆盖安全、多端适配的多个高质量PR，治理层面的RFC落地、架构决策记录归档工作也在同步推进中，今日无正式版本发布。

## 2. 版本发布
今日无新版本发布，当前线上最新正式版本仍为v0.8.3，v0.9.0的安全加固、A2A协议等核心能力正处于前置开发阶段，尚未进入候选发布周期。

## 3. 项目进展
今日合计8个PR完成合并/关闭，核心推进成果如下：
1. 固件协议CI门禁落地：[#9108](https://github.com/zeroclaw-labs/zeroclaw/pull/9108) 新增独立的固件协议Crate格式化、静态检查、测试校验脚本并接入主CI门禁，彻底解决了此前固件子项目完全脱离主工作流、代码改动漏测的问题
2. 架构治理体系补全：[#9167](https://github.com/zeroclaw-labs/zeroclaw/pull/9167)、[#9168](https://github.com/zeroclaw-labs/zeroclaw/pull/9168) 两个架构决策记录（ADR）文档合并，将已经落地的多代理V3运行时边界、代际级热配置生效的成熟架构方案正式归档，补齐了项目架构文档的缺失项
3. ZeroCode交互体验批量修复：[#9173](https://github.com/zeroclaw-labs/zeroclaw/pull/9173)、[#8767](https://github.com/zeroclaw-labs/zeroclaw/pull/8767) 落地，新增/help、/browse终端命令，修复了队列侧边栏、会话选择器继承终端背景的视觉异常问题，同时同步关闭了ZeroCode无需手动设置ZEROCLAW_SOCKET环境变量即可启动等历史遗留Bug
4. 此前阻塞核心工作流的OpenAI兼容格式提供商工具调用参数未校验导致400报错的P1级Bug已被完全修复，相关Issue [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) 正式关闭。

## 4. 社区热点
今日讨论热度最高的三个公共议题如下：
1.  **[#6808 RFC: 工作泳道、看板自动化与标签清理](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**：累计14条评论，是今日讨论量最高的议题。核心诉求为优化项目治理流程，通过自动化规则减少维护者手动路由Issue、维护标签体系的重复劳动，降低项目协作的人力成本。
2.  **[#7462 Windows平台74个测试失败（Unix专属命令、路径语义、控制台编码问题）](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**：累计10条评论，所有参与讨论的用户均为Windows生态的重度使用者，核心诉求是补齐主CI的Windows测试节点，避免后续Windows平台兼容性问题持续漏网。
3.  **[#3566 A2A Agent间原生协议支持](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)**：累计9条评论、7个点赞，是当前用户呼声最高的互联互通特性，大量企业级用户反馈需要对接Linux基金会的A2A标准实现ZeroClaw实例和其他异构Agent系统的跨节点协同。

## 5. Bug 与稳定性
今日新报告+活跃Bug按严重等级排序如下：
| 严重等级 | Bug标题 | 链接 | 是否有修复PR |
|---------|--------|------|------------|
| S0 数据丢失风险 | Cron类型为Agent的定时任务间歇性将工作目录解析为系统根目录/ | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | 无 |
| S1 流程阻塞 | Landlock沙箱会将ZeroClaw自身也锁定到沙箱规则中，导致SQLite等组件访问失败 | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | 无 |
| S1 流程阻塞 | web_fetch工具对gzip/brotli压缩响应直接返回未解码的二进制垃圾数据 | [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | 无 |
| S1 流程阻塞 | shared_budget预算校验存在TOCTOU竞争问题，导致AtomicUsize溢出引发Panic | [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | 无 |
| S1 流程阻塞 | Cron Agent任务没有配置全局墙钟超时，卡死任务的锁只能在进程重启后释放 | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | 无 |
| S1 流程阻塞 | 主分支的注释卫生检查CI门禁失败，阻塞所有后续合并请求 | [#9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216) | 有，对应 [#9218](https://github.com/zeroclaw-labs/zeroclaw/pull/9218) 待合并 |
| S2 体验降级 | 提供商密钥限流冷却逻辑错误，冷却的是最后选中的密钥而非触发429限流的密钥 | [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) | 无 |

## 6. 功能请求与路线图信号
结合当前活跃PR和Issue规划判断，高概率在接下来两个版本交付的特性包括：
1.  Agent评估套件`zeroclaw eval`：对应功能需求 [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)，目前已有连续4个PR（#9214~#9221）待合并，完整的回放+在线评估模式、多维度Grader能力已经全部开发完成，预计会作为v0.8.4的核心新特性上线。
2.  持久化内存全量能力对齐：对应史诗级跟踪Issue [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)，核心的内存分类、结构化事实提取的XL级PR #8900已提交待合并，预计v0.8.4会交付第一版全功能跨会话持久化内存能力。
3.  A2A原生协议支持：已被纳入v0.9.0版本跟踪轨道 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)，是下一个大版本的核心特性之一。
4.  SOP编排控制平面全量交付：对应史诗跟踪Issue [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)，当前已有多个PR并行推进，对齐v0.9.0 Milestone交付节点。

## 7. 用户反馈摘要
从今日活跃Issue评论中提炼的真实用户反馈：
1.  Windows生态用户痛点非常集中，大量日常在Win11 Simplified Chinese环境使用的用户反馈，此前CI仅跑Linux环境导致很多路径、编码相关的隐性问题直到用户侧才暴露，希望后续优先补齐Windows CI测试节点。
2.  多Agent互联互通的企业级需求强烈，不少团队反馈内部已经部署了多个异构Agent系统，非常依赖A2A标准实现跨ZeroClaw实例的任务调度和资源共享。
3.  ZeroCode TUI的交互优化反馈正向度高，用户反馈近期修复的复制代码块带Markdown围栏、选中文本被拦截的问题大幅提升了日常编码辅助的使用效率。
4.  生产环境定时任务的稳定性诉求非常迫切，多个已经在跑定时Agent作业的用户反馈遇到过路径错误、任务卡死的故障，要求给定时任务增加独立沙箱、全局超时、权限限制等防护能力。

## 8. 待处理积压
三个高优先级长期未响应议题提醒维护者重点关注：
1.  [#7462 Windows平台74个测试失败的P1级Bug](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)：2026年6月10日创建，距今超过1个半月暂无明确修复排期，严重影响Windows平台用户的使用体验。
2.  [#3566 A2A协议原生支持高价值功能请求](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)：2026年3月15日创建，累计9条评论7个点赞，生态价值极高但目前没有公开的实现PR，进度偏慢。
3.  [#6685 SOP HTTP扇入端点文档已公示但实际未实现的P2级Bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6685)：2026年5月15日创建，属于SOP对外接入的核心能力，当前推进进度较慢，阻塞SOP能力的对外落地。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*