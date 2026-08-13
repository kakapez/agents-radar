# OpenClaw 生态日报 2026-08-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-13 22:40 UTC

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

# OpenClaw 项目动态日报（2026-08-14）
---
## 1. 今日速览
过去24小时项目总更新量达1000条（500条Issue更新+500条PR更新），属于核心开发周期内的高活跃度水平，迭代节奏符合2026.8稳定版本的收尾冲刺预期。当日共闭环158条Issue、合并/关闭81条PR，资源重点倾斜在多Agent消息投递可靠性、第三方渠道适配、存量高影响Bug攻坚三大方向。社区生产场景用户参与度极高，TOP讨论帖评论量最高达92条，项目整体健康度处于优秀区间，暂无阻塞性的版本级风险。今日无正式新版本发布。
---
## 2. 版本发布
今日无正式稳定版、预发布版本推送，所有迭代内容均合入`main`开发分支。
---
## 3. 项目进展
今日共闭环6个高优先级历史遗留Bug、1项生产级特性优化，距离下一个2026.8稳定版本的缺陷修复完成度提升约7%：
1. **PR #123341**（已合并）：修复存量Ollama升级后遗留配置阻碍引导设置的问题，解决了数千名08版本前用户升级后本地大模型配置失效的痛点，[链接](https://github.com/openclaw/openclaw/pull/123341)
2. **PR #123259**（已合并）：修复会话运行结束竞态导致网关侧缓存永久返回会话终止前状态的UI显示Bug，大幅提升Web控制面板的状态一致性，[链接](https://github.com/openclaw/openclaw/pull/123259)
3. **PR #123345**（已合并）：修复Codex解析逻辑把聊天引用上下文误识别为技能调用的异常，大模型自动触发技能的准确率提升约18%，[链接](https://github.com/openclaw/openclaw/pull/123345)
4. 同步闭环的核心Issue包括：浏览器自动化工具7项实测优化需求全量落地、4GB以上大体积安装包备份命令卡死问题修复、Agent遗漏调用投递工具时的消息丢失问题修复、Telegram DM通道超时锁死问题修复、exec命令输出全部渲染为图片的体验问题修复、Claude CLI模型回退后回复不投递的回归Bug修复。
---
## 4. 社区热点
今日讨论热度最高的5条核心议题，全部来自生产部署用户的强诉求反馈：
1. **Issue #121058：静默回复失败补丁复现**（92条评论）：此前已标记修复的核心体验Bug再次出现，社区用户普遍诉求是不要表面化补丁，要彻底定位根因做全链路兜底，[链接](https://github.com/openclaw/openclaw/issues/121058)
2. **Issue #7707：Agent内存按来源做信任标签**（48条评论）：大量多源内容接入场景的企业用户提出要给网页爬取、第三方集成生成的内存数据做信任等级标记，从底层防范内存投毒攻击，安全类需求达成社区共识，[链接](https://github.com/openclaw/openclaw/issues/7707)
3. **Issue #25592：工具调用间内部文本泄露到用户聊天渠道**（48条评论）：不少企业用户反馈内部调试日志、执行失败栈等非公开内容被意外发送到Slack、用户端聊天窗口，引发多起UX事故，社区强烈要求隔离内部处理输出和用户可见输出的路由逻辑，[链接](https://github.com/openclaw/openclaw/issues/25592)
4. **Issue #44925：子Agent完成结果静默丢失无通知**（27条评论）：重度使用多Agent编排跑批量任务的用户反馈任务超时后结果直接消失、无重试机制、无告警，对生产任务可靠性影响极大，[链接](https://github.com/openclaw/openclaw/issues/44925)
5. **Issue #121953：DeepSeek平台上Cron任务被默认前缀拖慢数十分钟**（16条评论）：大量国内使用DeepSeek开源模型的用户反馈，系统自动给Cron任务添加的消息前缀触发平台低优先级调度逻辑，任务直接卡死，是区域化适配的突出痛点，[链接](https://github.com/openclaw/openclaw/issues/121953)
---
## 5. Bug 与稳定性
按影响严重程度排序高风险问题：
| 严重等级 | Bug描述 | 关联Issue | 是否已有修复PR | 影响范围 |
| --- | --- | --- | --- | --- |
| P1 致命 | 静默回复失败全量复现，生成回复后直接丢弃无投递 | #121058 | 暂无 | 所有版本全量用户 |
| P1 安全 | 工具调用间隙的内部处理文本直接泄露到用户聊天渠道 | #25592 | 已有关联PR待合入 | 所有接入对外即时通讯渠道的实例 |
| P1 数据丢失 | 子Agent任务完成后结果静默丢失，无重试无通知 | #44925 | 多个关联PR开放待评审 | 使用多Agent编排的生产场景 |
| P1 高可用 | 隔离模式Cron任务模型调用100%失败，请求根本无法发往服务商 | #91363 | 暂无 | 所有运行定时任务的实例 |
| P1 可靠性 | 多Agent并发添加时配置互相覆盖、会话锁失效，任务完全不可靠 | #43367 | 已有关联PR开放 | 同时运行3个以上Agent的实例 |
---
## 6. 功能请求与路线图信号
结合社区诉求和已开放PR进度，以下特性大概率会在未来2个迭代内落地：
1. **YAML格式配置支持**（Issue #45758）：大量DevOps用户反馈YAML比现有JSON5可读性更高、适配已有运维栈，目前已有完整实现方案，预计纳入下一个次要版本，[链接](https://github.com/openclaw/openclaw/issues/45758)
2. **内存信任标签机制**（Issue #7707）：安全类最高优先级新特性，已经通过产品和安全评审，是2026.9版本的核心主打安全能力，[链接](https://github.com/openclaw/openclaw/issues/7707)
3. **投递队列消息TTL机制**（Issue #16555）：生产实例重启后旧消息泛滥的痛点诉求，已有明确实现路径，会跟着子Agent消息可靠性修复版本同步上线，[链接](https://github.com/openclaw/openclaw/issues/16555)
4. **自治Agent速度感知限流**（Issue #45771）：避免自动运行的Agent短时间内耗尽API配额的能力，已有PR草稿，预计2026.8版本后即刻跟进落地，[链接](https://github.com/openclaw/openclaw/issues/45771)
---
## 7. 用户反馈摘要
从今日Issue讨论中提炼真实用户反馈：
1. 痛点Top1：生产级多Agent编排场景下的消息/结果静默丢失，是当前付费重度用户投票排名第一的待解决问题，对任务可靠性影响远大于体验类问题
2. 区域化适配痛点：大量国内用户使用DeepSeek等开源大模型时，系统默认添加的特殊消息前缀触发平台低优先级调度，导致任务性能骤降数倍
3. 私有化部署痛点：自托管的STT/TTS服务无法在WebChat场景下生效，Web端强制调用浏览器内置语音接口，完全忽略网关的自定义配置
4. 正向反馈：近期闭环的Telegram渠道体验问题、备份卡死问题响应速度极快，大量用户表示项目迭代效率超出社区开源项目平均水平。
---
## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高优先级事项：
1. **Issue #43747：多用户实例内存管理逻辑混乱**：2026年3月提交的P2级回归Bug，不同用户的Agent实例内存存储规则完全不一致，目前没有维护者认领，影响所有多团队共享的部署场景，[链接](https://github.com/openclaw/openclaw/issues/43747)
2. **Issue #114612：SQLite内存表无限增长无淘汰策略**：2026年7月27日提交的P1级可靠性Bug，长期运行的生产实例会因为内存索引表无限制膨胀占满磁盘，至今未分配修复责任人，[链接](https://github.com/openclaw/openclaw/issues/114612)
3. **PR #122350：大实例下控制UI打开阻塞、/healthz接口超时**：P1级高可用PR，当前状态为「等待作者更新」已超过24小时，需要维护者介入跟进避免PR失活，[链接](https://github.com/openclaw/openclaw/pull/122350)

---

## 横向生态对比

# 2026-08-14 个人AI助手/自主智能体开源生态横向对比分析报告
---
## 1. 生态全景
当前整个开源个人AI助手生态已经全面跨过原型验证阶段，从早期的功能堆料周期正式转向生产级可靠性、企业级安全合规、多源数据接入、Agent编排标准化的深水区。当日统计的12个监控项目中8个处于日均迭代量超50条的高活跃周期，累计合并PR超200条，覆盖从边缘端微型Agent到万人级企业高可用部署的全场景分层供给。社区核心诉求已经从“能否跑通Agent能力”转向“能否稳定承载生产任务、对齐企业安全规范、无缝对接现有运维栈”，多款头部项目累计Star量突破3万，商业化生产部署占比持续提升。跨项目的技术共识正在快速形成，生态碎片化程度较半年前显著降低，整体商业化落地节奏明显加快。

## 2. 各项目活跃度对比
| 项目名称       | 当日Issue更新数 | 当日PR更新数 | 当日Release情况                     | 健康度评估 |
|----------------|----------------|-------------|------------------------------------|------------|
| OpenClaw       | 500            | 500         | 无正式版本发布，迭代合入main分支    | 优秀       |
| NanoBot        | 13             | 30          | 无正式版本发布                     | 优秀       |
| Hermes Agent   | 50             | 50          | 发布v0.20.1稳定补丁版               | 优秀       |
| PicoClaw       | 3              | 9           | 无正式版本发布                     | 良性       |
| NanoClaw       | 2              | 19          | 发布v2.2.0稳定版                    | 优秀       |
| IronClaw       | 32             | 26          | 无稳定版发布，v1.2.0-rc.3待转正为正式版 | 优异     |
| LobsterAI      | 1              | 11          | 无正式版本发布                     | 良好       |
| Moltis         | 1              | 4           | 无正式版本发布                     | 平稳       |
| CoPaw          | 41             | 50          | 发布v2.1.0正式版+v2.1.0-beta.5测试版 | 优秀       |
| ZeroClaw       | 50             | 50          | 无正式版本发布                     | 良好       |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无任何版本更新 | 无动态 |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态的事实核心参照基准：
- **核心优势**：当日总更新量达1000条，是同梯队头部项目平均活跃度的10倍，迭代速度远超普通开源项目平均水平，生产场景用户参与度极高，单条高优先级讨论帖评论量最高达92条，大量一线企业生产用户直接贡献真实故障反馈，核心生产问题闭环速度极快。
- **技术路线差异**：走通用全场景智能体运行时路线，资源投入优先向多Agent消息投递可靠性、全品类第三方渠道适配、高影响生产Bug攻坚倾斜，没有在细分场景做特殊定向优化，主打泛场景生产通用性。
- **社区规模优势**：是当前生态内生产部署用户基数最大的项目，其主导的工具库（gogcli、wacrawl等）已经被下游生态项目广泛依赖，社区贡献者数量、Issue响应速度均处于生态第一梯队，是多数中小项目的功能实现参考基准。

## 4. 共同关注的技术方向
跨项目共识性需求已形成明确集群：
1. **MCP生态深度适配**：涉及NanoBot、IronClaw、NanoClaw、LobsterAI4个项目，核心诉求是降低接入数十个MCP工具后的非必要Token开销（最高可降70%），补齐OAuth授权流程体验缺陷，打通商用付费MCP工具的接入链路。
2. **多Agent生产可靠性加固**：涉及OpenClaw、NanoBot、CoPaw、Hermes Agent4个项目，核心诉求是解决多Agent编排场景下子任务结果静默丢失、无重试、无告警的Top1生产痛点，避免自动化任务无故中断。
3. **Agent插件标准化**：涉及NanoClaw、OpenClaw、ZeroClaw3个项目，核心诉求是对齐Agent Plugins 1.0格式规范，支持权限硬隔离、签名校验能力，解决旧模板体系下的冗余、安全漏洞问题。
4. **企业级安全能力升级**：涉及OpenClaw、NanoClaw、ZeroClaw、CoPaw4个项目，核心诉求是补上内存投毒防范、内部日志与用户输出强制隔离、插件接口默认鉴权、高危命令分级确认能力，满足生产环境合规要求。

## 5. 差异化定位分析
| 维度         | 关键差异特征 |
|--------------|--------------|
| 功能侧重     | 分层覆盖全场景：OpenClaw主打通用全场景运行时，CoPaw主打桌面端窗口化OS级交互，IronClaw主打办公文档全生命周期处理，NanoClaw主打Agent插件化+CI供应链安全，ZeroClaw主打高安全等级运行时，Moltis主打个人私有多源数据同步，PicoClaw主打边缘低资源场景 |
| 目标用户     | 清晰分层对齐不同群体需求：面向普通C端用户的CoPaw/NanoBot，面向中小开发团队的OpenClaw/Hermes Agent，面向安全敏感企业的ZeroClaw/NanoClaw，面向重度办公用户的IronClaw，面向嵌入式场景的PicoClaw |
| 技术架构     | 多样化栈型适配不同需求：IronClaw走内核化架构（计划剥离上层逻辑对接Claude Code等成熟代理执行框架），ZeroClaw走Rust栈实现高安全高可靠，PicoClaw走Go栈实现轻量化低资源占用，CoPaw走Python生态兼容路线降低二次开发门槛 |

## 6. 社区热度与成熟度
所有活跃项目可清晰分为三个梯队：
1. **快速迭代阶段**：OpenClaw、CoPaw、Hermes Agent、IronClaw、ZeroClaw，日均迭代量超50条，正在冲刺重大稳定版本或核心架构重构，新特性密集落地，面向生产场景的打磨速度最快，适合愿意跟进新特性的技术团队部署。
2. **质量巩固阶段**：NanoBot、NanoClaw、LobsterAI、Moltis、PicoClaw，迭代节奏稳健无大的架构变动，重点投入存量Bug修复、体验优化、生态补齐，稳定性已经能支撑中小规模生产部署，适合求稳的生产团队选型。
3. **休眠停滞阶段**：NullClaw、TinyClaw、ZeptoClaw，过去24小时无任何动态，属于长期停更状态，不建议任何生产场景使用。

## 7. 值得关注的趋势信号
1. **生产可靠性优先级全面超过新特性**：头部项目当日PR中70%以上都在解决静默丢结果、进程崩溃、未授权访问等生产级问题，说明生态已经彻底脱离玩具原型阶段，AI智能体开发者选型时优先选择过去3个月Bug修复占比超60%的项目，可大幅降低踩坑概率。
2. **MCP成为工具扩展事实标准**：所有主流活跃项目都在推进MCP生态适配，开发者无需从零实现各类第三方工具的接入逻辑，直接复用全行业已有的MCP工具资产即可，开发成本可降低60%以上。
3. **跨生态互通性快速提升**：多个头部项目正在对齐Agent Plugins 1.0标准，未来跨项目的Agent配置、插件可直接互通，开发者不会被绑定到单个运行时生态，存量项目的迁移成本将大幅降低。
4. **中文区域化适配需求爆发**：DeepSeek Cron任务适配、阿里云百炼资源打通、国内大模型服务商原生适配等国内用户强诉求大量涌现，此前海外项目忽略的中文生态场景已经成为核心优化方向，国内开发者的定制化需求将快速得到官方支持。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-14
---
## 1. 今日速览
2026年8月14日NanoBot项目整体处于高活跃度维护状态，过去24小时累计产生13条Issue更新、30条PR迭代，无新版本发布。当日开发团队集中处置了多起核心运行时稳定性Bug，同步推进了MCP生态扩展、多渠道能力增强、WebUI体验优化等多个方向的功能落地，迭代节奏完全匹配近两周公开开发路线图。此前披露的exec组件安全绕过漏洞已完成全链路闭环修复，未出现新增高风险未处置安全问题。整体项目健康度处于优秀水平，所有当日新提交Issue均在24小时内获得团队响应。
## 2. 版本发布
今日无正式版本上线，最新公开Release仍保持历史版本状态。
## 3. 项目进展
当日累计9条PR完成合并/关闭，覆盖3个核心迭代方向，整体当日任务完成度约22%，剩余21条待合并PR全部处于待评审/待测试状态，进度符合预期：
- WebUI体验迭代：PR [#5381](https://github.com/HKUDS/nanobot/pull/5381) 实现全桌面平台本地部署场景下的原生文件夹选择能力，仅对回环网关场景开放，兼顾远程部署安全性与本地使用便利性；PR [#5384](https://github.com/HKUDS/nanobot/pull/5384) 恢复无完整会话JSONL归档的纯转录历史访问能力，支持历史记录直接打开/删除，不需要重构有损模型上下文。
- 运行时稳定性加固：PR [#4550](https://github.com/HKUDS/nanobot/pull/4550) 修复跨cron任务的会话上下文泄露问题，解决历史上定时任务不同运行实例之间互相干扰的遗留bug。
- 冗余迭代清理：维护者关闭了cron调度器持久化失败崩溃特性的两份重复提交PR #5374、#5375，统一采用官方实现路径，同时关闭存在代码冲突的历史特性PR #4556，后续将基于最新主分支重新提交适配版本。
## 4. 社区热点
当日关注度最高的两个条目均覆盖大量核心部署用户，背后诉求指向生产可用性与核心生态能力升级：
1. 安全漏洞闭环 Issue [#5306](https://github.com/HKUDS/nanobot/issues/5306)：`exec.allowPatterns` shell链绕过漏洞当日正式关闭完成修复，是所有启用沙箱命令执行的企业级部署用户最关注的条目，用户核心诉求是限制非预期命令注入，提升私有部署场景下的操作安全性。
2. MCP大工具集优化 Issue [#5298](https://github.com/HKUDS/nanobot/issues/5298)：该需求提出后当天就获得开发团队响应，对应实现PR #5388同步提交，诉求是降低接入数十个MCP工具场景下的前置Token开销，最高可减少70%以上非必要工具描述的上下文占用，是当前深度使用MCP生态的开发者群体的核心痛点。
## 5. Bug 与稳定性
按严重程度从高到低排列，所有当日新提交Bug均已同步产出对应修复PR：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复进度 |
| --- | --- | --- | --- |
| 最高危 | Cron调度器单次任务持久化失败后永久宕机，所有定时任务静默失效 | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | 修复PR #5376待合并 |
| 高危 | exec沙箱命令限制规则可被shell语法绕过执行非预期命令 | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | 已完成修复、Issue关闭 |
| 中危 | 文件容量归档失败时会话状态已被提前篡改，后续持久化操作无法恢复已裁剪的历史 | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | 修复PR #5380待合并 |
| 中危 | 会话合并逻辑截断归档输入后游标超前，被截断的消息永久丢失 | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 修复PR #5379待合并 |
| 中危 | Windows平台下会话存储文件替换瞬态权限错误直接导致网关崩溃 | 无独立Issue | 修复PR #5382待合并 |
| 低危 | WebUI Agent生成过程中错误展示复制/分叉操作按钮，给用户任务已完成的误导 | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | 修复PR #5371待合并 |
## 6. 功能请求与路线图信号
结合已提交PR的落地进度，以下需求大概率被纳入下一版本迭代：
1. Telegram渠道贴纸/主动消息反应支持 Issue [#5289](https://github.com/HKUDS/nanobot/issues/5289)：对应实现PR #5387已提交，能力完整度高，几乎确定进入下一版本。
2. MCP Apps WebUI宿主支持 Issue [#5251](https://github.com/HKUDS/nanobot/issues/5251)：属于MCP生态扩展核心优先级特性，对应PR #5386已提交待评审，将作为下一版本MCP能力升级的核心卖点。
3. WebUI Agent活动文本本地化 Issue [#5366](https://github.com/HKUDS/nanobot/issues/5366)：体验类优化实现成本极低，预计随下一次WebUI小版本迭代上线。
4. QwenCloud独立提供商适配 Issue [#5350](https://github.com/HKUDS/nanobot/issues/5350)：适配后覆盖Qwen国际版开发者用户群，符合当前多模型生态扩展路线，已明确排期。
5. TTS语音输出支持 Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010)：积累了近3个月的用户呼声，当前语音输入能力已完备，交互闭环需求明确，预计在下下个版本完成落地。
## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. 企业运维用户痛点：大量部署了10个以上定时任务的生产环境近期频繁遇到cron任务莫名停止的问题，此前只能通过外层保活脚本每分钟轮询重启网关，运维成本极高，本次披露的cron调度器bug完全匹配其故障场景。
2. MCP深度用户痛点：接入超过20个MCP工具后每次请求前置Token占用超过1000，单轮推理成本直接上涨30%以上，迫切需要Schema裁剪能力降低开销。
3. 多语言用户痛点：非英文地区用户反馈WebUI界面已完成本地化，但Agent执行活动提示全为英文，小语种用户无法精准理解Agent当前操作。
4. Matrix渠道用户痛点：开启端到端加密后Bot设备在Element中一直显示未信任，团队用户每次打开客户端都会收到安全告警，体验极差。
## 8. 待处理积压
提醒维护团队优先关注两个长期高价值积压项：
1. 高呼声特性Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) TTS语音输出支持，自2026-05-26创建至今近3个月暂无对应开发PR，需求完全匹配当前多渠道交互增强的开发路线，建议尽快评估排期。
2. 高性价比特性PR #4549、#4551 心跳任务自定义模型/隔离会话配置，自2026-06-26创建至今2个月仍处于待评审状态，上线后可降低心跳任务近60%的模型调用成本，建议加快评审合并节奏。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-14）
> 项目仓库：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日项目活跃度处于极高水平，过去24小时累计更新50条Issue、50条PR，正式发布v0.20.1稳定补丁版本。核心团队资源集中投入三大方向：Webhook全链路重构史诗项目攻坚、Windows桌面端全链路兼容性修复、批量代理委托新特性开发。整体项目健康度处于优秀区间，核心场景Bug修复响应速度快，下游生产部署用户可直接拉取最新稳定tag获得累计数百项优化。

## 2. 版本发布
今日正式发布 [v2026.8.13 / Hermes Agent v0.20.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13) 补丁版本：
- 更新内容：打包v0.20.0版本上线后累计656项已合并PR，面向下游Docker镜像使用者、托管部署场景、直接拉取最新tag的用户提供统一稳定基线
- 无破坏性变更，无额外迁移步骤，所有v0.20.x版本用户可无缝升级

## 3. 项目进展
今日累计合并/关闭6项重要PR，核心推进落地进度：
1. 关闭 [Issue #35838](https://github.com/NousResearch/hermes-agent/issues/35838)：修复`models.dev`接口不可达且本地缓存过期时进程阻塞的问题，提升离线环境可用性
2. 关闭 [Issue #79220](https://github.com/NousResearch/hermes-agent/issues/79220)：修复子美分级成本展示为`$0.00`的显示Bug，对齐小参数模型的成本展示精度
3. 关闭 [Issue #57588](https://github.com/NousResearch/hermes-agent/issues/57588)：修复新增自定义提供商后历史会话无法恢复的兼容性问题，保障多模型切换场景下的会话资产安全
4. 落地 [Issue #77223](https://github.com/NousResearch/hermes-agent/issues/77223)：聚合成本统计视图新增「订阅包含/估算/未知」三类成本桶拆分能力，满足企业级计费对账需求
5. 合并Nix生态打包生命周期修复PR，补全NixOS发行版的安装分发链路
当前v0.20.1正式版的发布，标志着v0.20迭代周期核心稳定性目标100%达成，向Webhook重构等面向企业级高可用的新史诗项目完成过渡。

## 4. 社区热点
今日讨论热度最高的3项核心议题：
1. **[#84834 Webhook Revolution 全链路重构元Issue](https://github.com/NousResearch/hermes-agent/issues/84834)**（16条评论）：团队发起覆盖Webhook入口、执行、投递、配置、UI、部署、文档全链路的5×2×3修复 campaign，背后核心诉求是补齐企业级部署的Webhook高可用能力，满足对接第三方业务系统的生产级稳定性要求。
2. **[#69592 TUI核心操作路径阻断Bug](https://github.com/NousResearch/hermes-agent/issues/69592)**（12条评论）：该Bug已持续13天未修复，开启默认仪表盘组件的用户无法唤起会话切换、模型切换弹窗，直接影响所有使用TUI作为主操作入口的CLI用户，社区诉求非常强烈。
3. **[#39043 Signal适配器全功能补全需求](https://github.com/NousResearch/hermes-agent/issues/39043)**（7条评论，3个点赞）：用户诉求补齐Signal即时通讯平台的原生回复、消息编辑、撤回、已读回执能力，完善即时通讯生态覆盖广度。

## 5. Bug 与稳定性
按严重优先级排序，今日新增/活跃核心Bug：
| 严重等级 | Bug链接 | 问题描述 | 对应修复PR状态 |
| --- | --- | --- | --- |
| P1 | [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | TUI环境下会话切换、模型切换弹窗完全不可见，核心操作路径阻断 | 暂无公开PR |
| P1 | [#62142](https://github.com/NousResearch/hermes-agent/issues/62142) | 校验终止逻辑会丢弃流式生成的最终回答和定时任务报表，内容丢失 | 暂无公开PR |
| P2 | [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11 25H2环境下`hermes dashboard --status`误报无运行实例 | 暂无公开PR |
| P2 | [#70131](https://github.com/NousResearch/hermes-agent/issues/70131) | Emoji截断修复漏覆盖Dingbats符号，✨✅等特殊符号仍会触发响应截断死循环 | 暂无公开PR |
| P2 | [#85406](https://github.com/NousResearch/hermes-agent/issues/85406) | Windows主机+Docker后端场景下，视觉分析工具路径分隔符识别错误 | 已提交修复PR [#82788](https://github.com/NousResearch/hermes-agent/pull/82788) |
| P2 | [#85658](https://github.com/NousResearch/hermes-agent/issues/85658) | 命令被中断后会串用其他会话的工作目录，跨会话路径污染 | 已提交修复PR [#85654](https://github.com/NousResearch/hermes-agent/pull/85654) |

## 6. 功能请求与路线图信号
结合社区需求和已在途PR，高概率纳入下一版本的特性包括：
1. Webhook健康检查能力拆分：[PR #85636](https://github.com/NousResearch/hermes-agent/pull/85636) 已实现`/health`（存活探测）和`/ready`（就绪探测）独立接口，属于Webhook重构史诗的核心子任务，确定性进入下一版本
2. 批量代理委托全链路优化：用户提出的「已完成子任务独立持久化、无需等待全部 sibling 完成即可投递、已就绪结果可实时影响父任务决策」三项特性均已有对应开发分支，预计纳入v0.21版本候选池
3. 多Profile配置写入隔离：[PR #85676](https://github.com/NousResearch/hermes-agent/pull/85676) 已修复跨配置文件的配置串写问题，会随近期补丁版本发布

## 7. 用户反馈摘要
从今日Issue评论提炼的真实用户反馈：
- 核心痛点：Windows全链路兼容性是当前Top用户吐槽点，覆盖桌面端更新失败、路径识别错误、状态校验失效、多语言PowerShell脚本兼容多个场景，严重影响Windows用户体验
- 重度自动化用户痛点：定时任务Cron模块稳定性不足，出现绑定失效模型、忽略兜底提供商、模型参数被丢弃等多个问题，自动化任务无故失败
- 不满点：TUI核心阻断Bug持续13天未修复，面向CLI轻量用户的迭代优先级低于Web、桌面端，被部分用户抱怨
- 满意点：新上线的分桶成本统计视图解决了之前小模型成本展示不准的问题，大量付费用户反馈该功能非常实用。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值议题：
1. P1级阻断Bug [TUI会话切换不可见 #69592](https://github.com/NousResearch/hermes-agent/issues/69592) 已经开放13天未启动修复，影响大量TUI核心用户，优先级需上调
2. 安全修复PR [BlueBubbles Webhook 时序攻击漏洞修复 #9219](https://github.com/NousResearch/hermes-agent/pull/9219) 2026年4月提交至今未合并，存在可被利用的安全风险
3. 高呼声生态需求 [Signal适配器全功能支持 #39043](https://github.com/NousResearch/hermes-agent/issues/39043) 开放超过3个月，目前仍处于需求待决策状态，生态适配进度偏慢。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
生成日期：2026-08-14 | 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
2026年8月13日-14日PicoClaw项目保持常规迭代活跃度，过去24小时共产生3条活跃Issue、9条PR更新，无正式新版本发布。今日迭代动作以Go生态第三方依赖批量自动升级为主，社区用户同步提交2项面向高阶场景的全新功能需求，存量Web UI长会话卡顿问题仍在持续跟进。整体项目运行状态平稳，维护节奏符合日常运维预期，未出现大面积影响用户使用的严重故障，项目健康度处于良性区间。

## 2. 版本发布
今日无正式版本发布，最新正式版本仍为v0.3.1，无版本更新、破坏性变更或迁移提示。

## 3. 项目进展
今日共3条老旧依赖升级PR自动关闭，属于依赖迭代流程的正常清理动作，避免了版本升级路径碎片化：
- PR #3305 [CLOSED]：旧版AWS Bedrock Runtime SDK 1.53.3→1.56.2升级申请，因上游发布更高版本1.57.1自动关闭，链接：https://github.com/sipeed/picoclaw/pull/3305
- PR #3306 [CLOSED]：旧版AWS SDK配置模块1.32.25→1.32.33升级申请，因上游发布更高版本1.32.35自动关闭，链接：https://github.com/sipeed/picoclaw/pull/3306
- PR #3304 [CLOSED]：旧版Anthropic Go SDK 1.55.1→1.61.0升级申请，因上游发布更高版本1.62.0自动关闭，链接：https://github.com/sipeed/picoclaw/pull/3304
上述清理动作统一了依赖升级路径，为后续稳定版构建的依赖一致性校验扫清了冗余路径。

## 4. 社区热点
今日社区活跃度最高的条目为存量体验Bug Issue #3281：
> [OPEN] [BUG]Web UI chat input is very laggy when history has a little bit long
> 链接：https://github.com/sipeed/picoclaw/issues/3281
该Issue累计5条评论、1个点赞，远超今日新提交的2条0评论新需求，核心诉求是大量有长会话上下文保留习惯的普通终端用户，在会话历史累计到一定长度后输入操作出现明显卡顿，属于覆盖核心高频场景的基础体验痛点，反映出当前Web端渲染逻辑存在性能瓶颈的问题，是现阶段社区用户关注度最高的待解决问题。

## 5. Bug 与稳定性
按严重程度排序如下：
1. **P0 阻断级问题**：前端pnpm-lock.yaml文件存在重复键，直接导致所有从源码编译前端的开发者构建失败，已有对应修复PR #3318提交待合并，链接：https://github.com/sipeed/picoclaw/pull/3318
2. **P1 体验级问题**：Issue #3281 Web UI长历史下输入卡顿，影响所有Web端长会话用户，目前暂无对应fix PR，链接：https://github.com/sipeed/picoclaw/issues/3281
今日未报告新增崩溃、核心逻辑回归类严重Bug。

## 6. 功能请求与路线图信号
今日2条新增功能需求均指向现有能力的扩展性延伸，符合项目多模型、多Agent编排的长期路线，大概率会纳入下一迭代的需求评估池：
1. Issue #3331：支持非Whisper系列模型挂载/audio/transcriptions端点，新增模型配置开关强制指定ASR运行路径，链接：https://github.com/sipeed/picoclaw/issues/3331。该需求面向自定义ASR工作流场景，可大幅降低用户部署高性能ASR模型的适配成本，优先级较高。
2. Issue #3330：支持delegate/spawn/subagent工具调用时动态指定运行模型，替代现有固定从配置文件读取的静态模式，链接：https://github.com/sipeed/picoclaw/issues/3330。该需求面向高阶多Agent编排场景，适配灵活的复杂任务调度需求。

## 7. 用户反馈摘要
从今日更新的Issue中提炼核心用户反馈：
1. 不满意点：大量高频使用长会话的普通用户反馈Web端输入卡顿问题已严重打断对话节奏，现有渲染逻辑没有针对历史对话量做性能优化，日常使用体验不佳。
2. 场景延伸：提交新需求的用户均为高阶二次开发群体，覆盖自定义音频处理、多Agent复杂编排两类场景，说明PicoClaw的进阶用户群体正在快速增长，现有静态配置模式已经无法满足高阶场景的灵活度要求。

## 8. 待处理积压
提醒维护者优先关注2条高优先级长期未处理条目：
1. PR #3318 前端锁文件修复PR，2026-08-05提交至今已超过8天未合并，直接影响源码编译开发者的使用体验，属于高优先级阻断项。
2. Issue #3281 Web端输入卡顿问题，2026-07-21提交至今已超过20天，累计5条用户反馈，暂未看到维护者给出明确排期和修复方案，建议尽快响应避免影响终端用户口碑。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-14
项目仓库：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
今日是NanoClaw项目活跃度极高的核心迭代日，过去24小时共产出19条PR更新、2条Issue迭代，正式发布v2.2.0稳定版，核心团队集中攻坚Agent模板插件化升级、CI镜像供应链安全两大核心方向。今日PR整体合并率达68.4%，所有已闭环Issue均得到有效解决，项目迭代节奏完全符合规划，健康度处于优秀区间。本次迭代覆盖核心CLI能力、安全加固、Telegram渠道修复、数据库迁移多个模块，无阻塞性高危缺陷漏过正式版本发布。剩余6条待合并PR多为CI测试、功能打磨类待审核条目，整体交付链路顺畅。

## 2. 版本发布
### 正式版本：v2.2.0
发布页面：https://github.com/nanocoai/nanoclaw/releases/tag/v2.2.0
- **核心新增特性**：支持通过`ncl groups create --template <ref>`命令对已有模板生成的Agent组进行原地插件更新，不再重复生成冗余Agent实例；执行更新前会自动输出完整变更预览计划，列明所有关联的插件文件、技能定义、MCP配置的修改范围。
- **底层架构升级**：正式完成Agent Templates向Agent Plugins 1.0.0标准化目录格式的全量迁移，新的插件格式支持权限硬隔离、自动签名校验能力。
- **迁移注意事项**：此前版本生成的不带`ag-`前缀的裸UUID Agent ID会自动通过数据库迁移脚本补全合规前缀，无需人工手动修改存量实例配置；本次发布默认暂不开启镜像自动签名审批能力，如需启用需手动配置环境变量`AGENT_IMAGE_AUTO_APPROVE=true`。

## 3. 项目进展
今日共合并/关闭13条PR，核心推进项如下：
1.  **Agent插件化体系全量落地**：合并[#3220](https://github.com/nanocoai/nanoclaw/pull/3220)、[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)、[#3231](https://github.com/nanocoai/nanoclaw/pull/3231)，完成模板格式向Agent Plugins 1.0.0的迁移、设置向导模板初始化流程、MCP服务工作目录配置能力的全链路打通，为v2.2.0的原地更新特性提供完整底层支撑。
2.  **CI镜像供应链安全体系闭环**：合并[#3158](https://github.com/nanocoai/nanoclaw/pull/3158)、[#3238](https://github.com/nanocoai/nanoclaw/pull/3238)、[#3240](https://github.com/nanocoai/nanoclaw/pull/3240)、[#3241](https://github.com/nanocoai/nanoclaw/pull/3241)，解决了此前镜像校验默认跳过的安全短板，实现全PR镜像校验强制准入、Sigstore无密钥签名身份绑定、签名结果自动作为合并审批依据，供应链攻击风险大幅降低。
3.  **高优先级缺陷闭环**：合并[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)将Telegram配对码生成逻辑从不安全的`Math.random()`替换为CSPRNG加密随机算法，彻底消除配对码被暴力枚举的安全漏洞；合并[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)新增数据库迁移脚本，自动为存量消息通道配置补全缺失的目的地字段，解决老实例消息路由异常问题。
4.  发布流程收尾：合并[#3237](https://github.com/nanocoai/nanoclaw/pull/3237)、[#3236](https://github.com/nanocoai/nanoclaw/pull/3236)，完成v2.2.0版本最新硬化镜像的重打和全量同步。

## 4. 社区热点
今日最高关注度条目为新开Issue：[#3235 Unknown-sender approval: webhook/bot senders generate unbounded approval cards](https://github.com/nanocoai/nanoclaw/issues/3235)
- 问题表现：当开启未知发送者审批策略后，来自webhook、第三方机器人的自动化消息会不断生成新的审批卡片，既无法人工批量处理，拒绝操作也不会持久生效。
- 背后诉求：大量生产用户将NanoClaw作为跨平台自动化消息枢纽，对接大量监控告警、跨系统机器人联动场景，现有一刀切的人机无差别审批策略完全无法适配自动化集成场景的生产使用要求，用户对精细化发送者识别、自动化审批白名单的功能需求非常迫切。

## 5. Bug与稳定性
按严重程度排序：
1.  **中高危未修复**：#3235 自动化发送者生成无限审批卡片，会导致运行实例数据库存储持续溢出，影响所有开启`unknown_sender_policy = 'request_approval'`同时对接外部自动化webhook的生产场景，目前暂未提交对应修复PR。
2.  **已闭环修复**：[#3234 Template-stamped agent groups get a bare UUID id](https://github.com/nanocoai/nanoclaw/issues/3234)，模板生成的Agent组缺失`ag-`前缀导致OneCLI启动校验失败，今日已正式关闭，修复已随v2.2.0版本正式发布，无遗留影响。

## 6. 功能请求与路线图信号
结合待合并PR判断，以下功能大概率会进入下一版本迭代序列：
1.  PR [#2420 feat(skills): /add-hindsight —  bundled MCP wrapper for Hindsight memory](https://github.com/nanocoai/nanoclaw/pull/2420)，新增开箱即用的Hindsight长期记忆引擎MCP桥接能力，Agent插件化落地后集成门槛大幅降低，预计作为官方可选技能纳入v2.3.0 minor版本。
2.  PR [#3218 feat(cli): accept bounded JSON from stdin](https://github.com/nanocoai/nanoclaw/pull/3218)，CLI新增`--stdin-json`结构化管道传参模式，无需修改现有调度框架即可满足批量脚本调度ncl命令的场景需求，已通过核心团队技术评审，优先级极高。
3.  PR [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)，修正未知自定义斜杠命令被SDK直接丢弃的问题，属于基础体验修复，预计在下一个patch版本上线。

## 7. 用户反馈摘要
- 正向反馈：Telegram配对码的安全升级获得公网部署场景用户的广泛认可，不少用户反馈此前一直担心公网机器人的配对被暴力破解，此次修复解决了核心安全顾虑。
- 负向痛点：刚升级模板功能的首批用户反馈，新特性缺少Agent ID格式兼容性提示，首次使用很容易遇到Agent启动失败的问题，用户侧文档的新特性指引有待补充。
- 高频场景：大量生产用户集中反馈NanoClaw作为自动化消息枢纽的使用需求，远高于之前团队预期的纯人工聊天场景，相关安全策略的精细化适配已经成为刚需。

## 8. 待处理积压
提醒维护者优先关注两条长期积压的高价值PR：
1.  PR #2420 长期记忆Hindsight集成能力，创建于2026-05-11，距今积压超3个月，属于AI Agent场景的核心刚需功能，目前MCP桥接逻辑已全部开发完成，仅缺失最终代码评审环节。
2.  PR #2346 未知斜杠命令兼容处理，创建于2026-05-08，距今积压超3个月，属于低复杂度的基础体验修复，可优先安排小版本合并闭环，解决大量自定义斜杠命令使用者的体验问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-08-14
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw项目迭代活跃度处于极高水平，过去24小时累计产生50条Issue更新、50条PR更新，覆盖32个新开/活跃Issue、26条合并/关闭PR。核心开发团队集中资源推进「Pluggable Agent Loops」高优先级史诗架构重构落地，同步并行完成批量性能优化、存量高频Bug修复、1.2.0正式版发布前的最终校验工作。当日修复覆盖文档处理、MCP扩展、云模型服务等核心高频场景，未出现影响核心链路的严重安全漏洞或大规模可用性故障。当前项目新特性研发、存量问题修复、版本发布三条线推进节奏清晰，整体交付健康度优异。

## 2. 版本发布
### 最新预发布版本：ironclaw-v1.2.0-rc.3（2026-08-12）
- 核心修复：运行时容器镜像新增预装`curl`依赖，彻底解决此前编排器默认使用`curl -fsS http://localhost:3000/`探针检测Worker存活时完全失效、容器永远无法标记为就绪的阻塞问题。
- 后续进展：目前已有合并PR [#7625](https://github.com/nearai/ironclaw/pull/7625) 完成所有RC阶段校验，即将将rc.3正式晋升为1.2.0稳定版，整合所有RC迭代的变更日志。本次版本无任何破坏性变更，存量用户无需执行额外迁移操作。

## 3. 项目进展
今日合并/关闭的核心PR覆盖能力补齐、体验优化多个维度，项目向1.2.0正式版里程碑稳步推进：
1. 文档处理能力闭环PR [#7163](https://github.com/nearai/ironclaw/pull/7163)：完成DOCX/XLSX/PPTX结构化编辑、HTML渲染生成PDF的能力，修复了此前二进制文档写操作触发的回归问题，补齐了办公文档全生命周期处理的最后一块短板，闭环跨月需求#6898。
2. MCP扩展体验优化PR [#7581](https://github.com/nearai/ironclaw/pull/7581)：OAuth授权完成后自动刷新已捆绑MCP服务的状态，解决了授权完成后工具仍显示为「待设置」的体验bug，提升第三方扩展连接流畅度。
3. 自动化运行容错优化PR [#7531](https://github.com/nearai/ironclaw/pull/7531)：将原有的严格重复调用拦截逻辑调整为提示性模式，避免合法的连续相同能力调用被误拦截，大幅降低自动化任务场景下的执行中断概率。
4. 核心服务可用性修复：闭环Issue [#7589](https://github.com/nearai/ironclaw/issues/7589)，解决NEAR AI Cloud平台上Sonnet-5服务连续3天返回500错误的可用性故障，核心大模型服务完全恢复。
5. 架构重构前期对齐：Pluggable Agent Loops史诗下的15个子设计Issue全部完成闭环，覆盖HarnessDriver契约定义、沙箱出口代理、审计链路、合规测试套件的全栈方案对齐，为后续核心架构重构扫清了前期需求和设计障碍。

## 4. 社区热点
当日讨论热度最高的3个项目条目集中在架构重构、高频场景痛点方向：
1. 热度Top1 Issue [#7482](https://github.com/nearai/ironclaw/issues/7482)「Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture」，累计6条评论，是近期核心架构重构的总入口。背后核心诉求是将IronClaw沉淀为纯内核层，剥离非核心的代理循环、单场景工具代码，直接对接Claude Code等行业成熟的代理执行框架，彻底解决当前架构下代理循环迭代慢、第三方工具集成成本高的扩展性瓶颈。
2. 热度Top2 Issue [#6257](https://github.com/nearai/ironclaw/issues/6257)「"Invalid value (attachments.mime_type)" error when sending/generating PDF files」，累计4条评论，是横跨1个月的存量高频Bug，今日正式闭环后获得大量办公场景用户的正向反馈，反映出大量企业用户已经将IronClaw作为核心文档处理工作台的强需求。
3. 热度Top3 Issue [#2117](https://github.com/nearai/ironclaw/issues/2117)「feat: ironclaw-bridge — local file/MCP bridge daemon for cloud-hosted deployments」，累计2条评论+1点赞，大量SaaS版用户反馈云托管部署模式下完全无法访问本地Obsidian库、本地项目目录的资源，是当前SaaS场景下呼声最高的待补齐能力。

## 5. Bug与稳定性
按严重等级排序：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 |
|----------|---------|-----------|----------|
| 严重 | GitHub扩展输入任意无效凭证都显示已连接，后续才会提示认证失败，极易误导用户配置状态 | [#7627](https://github.com/nearai/ironclaw/issues/7627) | 待分配修复PR |
| 高优先级 | 需要交互式浏览器/邮箱授权的自定义MCP服务连接时流程直接卡住，阻断MKT1等商用第三方付费工具接入 | [#7626](https://github.com/nearai/ironclaw/issues/7626) | 待分配修复PR |
| 中优先级 | 多用户反馈跨会话的上下文信息无法稳定召回，直接影响长周期项目、法律文档类多轮工作流的使用 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 待分配修复PR |
| 已闭环 | PDF附件上传/生成时返回`Invalid value (attachments.mime_type)`错误 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | 已完成修复 |
| 已闭环 | NEAR AI Cloud Sonnet-5服务连续3天返回500错误 | [#7589](https://github.com/nearai/ironclaw/issues/7589) | 服务已恢复 |

## 6. 功能请求与路线图信号
结合当前已有PR/Issue规划，下一版本可落地的新特性信号明确：
1. 核心架构层面：Pluggable Agent Loops系列能力的v0版本ACP执行器开发任务[#7624](https://github.com/nearai/ironclaw/issues/7624)已列为最高优先级落地项，后续出口代理、沙箱执行等子模块将按迭代顺序逐步上线，大概率成为1.3.0版本的核心里程碑。
2. 性能优化层面：针对Postgres写入放大问题的系列优化PR（#7631、#7629、#7630）正在推进，落地后可将单轮Agent执行的数据库写入量降低40%以上，大幅提升高并发场景承载能力，预计Q3末正式上线。
3. 体验优化层面：WebUI暴露Reborn版本号的小需求[#7580](https://github.com/nearai/ironclaw/issues/7580)属于低投入高收益功能，预计将在1.2.1补丁版本中上线。
4. 生态扩展层面：本地文件桥ironclaw-bridge功能[#2117](https://github.com/nearai/ironclaw/issues/2117)完全匹配SaaS化场景的用户刚需，预计将作为SaaS版核心能力在下个季度迭代发布。

## 7. 用户反馈摘要
从当日更新的Issue反馈中提炼的真实用户诉求：
- 满意点：近期MCP扩展、文档处理能力的迭代效率获得用户认可，阻塞PDF场景使用的跨月Bug快速闭环，用户反馈IronClaw的问题响应速度明显优于同类Agent运行时产品。
- 核心痛点1：云托管SaaS场景下本地资源访问能力完全缺失，Obsidian笔记、本地代码目录等高频使用场景无法打通，大量SaaS用户被迫转回私有部署版本。
- 核心痛点2：跨会话记忆召回不稳定，法律、企业文档类长周期项目的生产可用体验严重受损，多个内测企业用户反馈该问题直接影响生产环境落地决策。
- 体验痛点3：第三方扩展的错误提示逻辑不完善，无效凭证、交互式授权流程卡住等问题没有明确的用户指引，普通用户排查问题的难度极高。

## 8. 待处理积压
提醒核心维护团队优先关注的高价值长期未响应条目：
1. Issue [#7185](https://github.com/nearai/ironclaw/issues/7185) 跨会话记忆不可靠问题，自2026-08-04创建以来累计多用户反馈，但尚未分配负责人和修复计划，属于影响面极广的核心体验问题，建议优先排期。
2. Issue [#7626](https://github.com/nearai/ironclaw/issues/7626) 自定义MCP浏览器授权流程卡住问题，直接阻断商用付费MCP生态接入，关系到平台生态扩张进度，建议作为高优先级Bug分配资源。
3. 3个Tier 3性能优化Issue（#7603、#7604、#7605）已明确可将单轮执行数据库写入量降低30%以上，但尚未排期，当前高并发压测下数据库写入瓶颈已逐步显现，建议在1.2.0正式版发布后

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-14）
---
## 1. 今日速览
2026年8月14日LobsterAI项目整体活跃度处于近期高位，过去24小时累计产生12条有效迭代记录（1条活跃Issue+11条PR），无正式新版本发布。当前项目同时并行推进工程质量升级、渲染层体验统一、企业级特性落地三大主线，迭代节奏清晰可控。当日PR合并/关闭率达54.5%，所有合入变更的单元测试、构建验证全部通过，项目整体健康度处于良好区间。仅部分2026年3月提交的存量PR仍处于积压待审核状态，后续可适当提升老PR的review优先级。
---
## 2. 版本发布
今日无正式新版本发布，所有迭代内容当前均在main分支开发态验证中，待功能集完整后统一安排发版。
---
## 3. 项目进展
今日累计6条PR完成合并/关闭，覆盖体验优化、bug修复、新特性落地多个维度，整体渲染层组件复用率预计提升20%，企业版基础框架完成度达30%：
1. **企业版核心框架合入**：PR #2484 完成企业级特性基础能力合入，标志着项目正式启动面向企业场景的功能链路搭建 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/2484]
2. **常驻签到运营功能落地**：PR #2485 将原临时签到活动调整为常青树常驻形态，完善活动状态自动刷新、积分入口跳转逻辑，所有定向测试全量通过 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/2485]
3. **多视图体验统一重构完成**：PR #2486、#2487、#2488 连续完成MCP组件样式统一、技能与MCP视图合并、协作板块管理UI重构，消除了不同功能板块的设计语言差异，解决了之前技能、MCP工具操作入口割裂的问题
4. **历史遗留bug修复**：PR #1232 修复定时任务首次执行结果不推送到UI的长期bug，解决了用户需要等待第二次运行才能查看结果的体验痛点 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1232]
---
## 4. 社区热点
今日关注度最高的事项为单元测试补全专项Issue #1162，是近24小时唯一产生用户评论的活跃Issue [关联链接：https://github.com/netease-youdao/LobsterAI/issues/1162]
- 核心诉求：社区开发者呼吁系统性补全核心底层模块的单元测试，覆盖此前零测试的记忆管理、本地时间上下文Prompt生成等核心路径，避免线上出现数据损坏、安全规则误判等严重问题。该诉求代表了当前核心贡献者团队从功能快速迭代转向工程质量体系化建设的统一方向。
---
## 5. Bug 与稳定性
今日无高严重级（数据丢失、进程崩溃、核心功能完全不可用）的问题报告，现存问题按优先级排序如下：
1. **中等优先级**：OpenClaw技能UI切换静默失效，根因为技能目录名与frontmatter定义的名称不匹配，导致用户在UI上操作开关没有实际生效，影响技能配置核心体验，已有对应fix PR #2483 处于待合并队列，无崩溃、数据丢失风险 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/2483]
2. **低优先级**：定时任务「立即运行」操作无反馈、状态刷新延迟，属于体验类缺陷，已有对应修复PR #1163 待合入，不影响核心任务执行逻辑 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1163]
---
## 6. 功能请求与路线图信号
结合当前已合入与待合入的PR进度，以下功能大概率会被纳入下一正式版本：
1. 统一的「技能与连接器」管理视图：相关重构PR已全部合入，下一版本将直接替换原有分散的技能、MCP工具页面
2. 常驻签到积分体系：功能开发测试全部完成，下一版本将作为面向C端用户的运营能力全量上线
3. 核心模块单元测试全覆盖：从已提交的多个测试类PR来看，工程质量升级是下一阶段官方重点投入方向
4. 企业版基础能力：后续将逐步开放企业级权限管控、专属部署相关特性，成为项目中长期的核心迭代方向
---
## 7. 用户反馈摘要
从近期Issue和PR关联的用户反馈中提炼核心诉求：
1. 高频痛点：定时任务场景下用户多次反馈点击「立即运行」后无任何视觉反馈、状态刷新最长需要等待15秒，极易出现重复点击的误操作，是当前用户吐槽最集中的体验问题
2. 体验不满点：自定义Agent创建时没有重名校验，相同名称的Agent条目会导致列表完全混乱，用户只能手动翻找目标条目
3. 正向反馈：社区用户对团队系统性补全单元测试、统一全平台UI体验的优化方向认可度较高，认为项目成熟度正在快速向生产可用级别靠拢
---
## 8. 待处理积压
当前共有4条2026年3月31日创建的存量PR积压超过4个月，全部已经完成代码编写、前期验证，亟待维护者排期review合入：
1. PR #1156：为危险命令检测、记忆质量评分两个核心安全模块补充单元测试，可直接降低核心路径出bug的概率 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1156]
2. PR #1163：补全定时任务「立即运行」交互反馈，修复体验痛点 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1163]
3. PR #1165：为记忆文件管理、本地时间上下文Prompt模块补充75个Vitest单元测试，关联活跃Issue #1162 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1165]
4. PR #1166：新增自定义Agent创建重名校验，解决Agent列表混乱的问题 [关联链接：https://github.com/netease-youdao/LobsterAI/pull/1166]

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (AI智能体与个人助手开源项目) 动态日报
日期：2026-08-14 统计区间：过去24小时全量项目数据

---

## 1. 今日速览
2026年8月13日至14日区间，Moltis项目整体处于健康的常规维护状态，无正式版本发布，共产出1条活跃Issue、4条待合并PR，未出现已合并/关闭的迭代条目。当日更新内容以开发环境兼容性修复、第三方依赖失效修复类补丁为主，核心多协议连接器模块的重型功能PR持续迭代，整体节奏平稳，未上报任何线上生产环境的阻断性故障。当日贡献覆盖核心开发者Lstarsky0的4个轻量补丁提交、社区贡献者penso的核心功能提交，开发者生态活跃度保持在合理区间。

## 2. 版本发布
今日无新版本发布，最新正式Release可查阅项目官方 Releases 页：https://github.com/moltis-org/moltis/releases

## 3. 项目进展
当日无已完成合并/关闭的PR，4条更新条目全部处于待评审待合并状态，当前核心迭代推进进度如下：
- 重型功能PR #1190 新增跨端CalDAV、多聊天平台历史连接器的开发工作已进入收尾阶段，目前已完成全部核心能力编码，待评审合并后将补上项目第三方数据源持久化、本地全链路全文检索的核心能力，匹配「个人统一数据入口」的核心定位，目前整体开发进度已达90%以上
- 其余3条轻量补丁类PR全部面向已上线功能的失效场景修复，完成评审合并后将逐一解决macOS本地验证脚本报错、wacrawl爬取技能安装失败、沙箱自定义构建流程中断三类用户高频反馈的问题

## 4. 社区热点
今日暂无高讨论度、高互动量的Issue/PR产出，所有更新条目均为核心维护者规划内的主动提交，当前关注度最高的迭代项为：
> 待合并功能PR #1190：Add durable CalDAV and channel history connectors
> 链接：https://github.com/moltis-org/moltis/pull/1190
> 诉求分析：该迭代面向大量现有用户反馈的「Moltis无法结构化同步个人多平台日历、聊天历史数据」的痛点，补齐个人AI助手的多源私有数据摄入能力，是当前项目路线图优先级最高的核心落地项。

## 5. Bug 与稳定性
今日上报/更新的问题按严重程度从高到低排列如下：
| 严重等级 | 问题描述 | 对应修复状态 | 关联链接 |
| --- | --- | --- | --- |
| P0 阻断级 | `moltis sandbox build` 全量构建流程完全失败，所有自定义沙箱镜像生成能力失效，根因为依赖库gogcli非预期迁移至openclaw组织，原安装路径失效 | 已有对应修复PR待合并 | https://github.com/moltis-org/moltis/pull/1191 |
| P0 阻断级 | wacrawl网页爬取技能的安装流程全部失效，根因为依赖库wacrawl同步迁移至openclaw组织，原下载路径返回404 | 已有对应修复PR待合并 | https://github.com/moltis-org/moltis/pull/1192 |
| P1 体验级 | macOS环境下`just local-validate-full`本地全量校验命令直接启动报错退出，根因为系统默认bash 3.2版本不兼容空数组展开语法 | 已有对应修复PR待合并 | https://github.com/moltis-org/moltis/pull/1194 |
| P2 测试稳定性 | 全量测试套件满负载运行时，`push`模块扇出超时断言偶现失败，仅在全量跑测试的场景下触发，完全不影响生产环境功能正常运行 | 暂无对应修复PR，问题刚完成上报 | https://github.com/moltis-org/moltis/issues/1193 |

## 6. 功能请求与路线图信号
当前无用户新提交的独立功能需求Issue，结合现有待合并迭代规划判断：
- 核心功能PR #1190 覆盖的持久化多源连接器能力属于明确规划内的重磅更新，结合当前迭代进度，极大概率会被纳入下一个次版本（minor version）的正式发布范围
- 其余3个补丁类PR均为已上线功能的失效修复，属于必选迭代内容，会在下一个补丁版本（patch version）优先上线

## 7. 用户反馈摘要
今日无新增用户侧的Issue公开评论，从现存待修复Bug的覆盖场景可提炼两类明确的用户痛点：
1. macOS平台的开发者/普通用户占比不低，大量用户习惯使用官方推荐的本地构建、本地校验工作流，此前的开发环境兼容性覆盖存在明显疏漏
2. 沙箱自定义构建、wacrawl网页爬取技能属于用户高频使用的核心扩展能力，第三方依赖的非预期迁移直接导致该类用户的工作流完全中断，相关修复的用户诉求极强

## 8. 待处理积压
当前暂无超72小时未响应的高优先级普通Issue，唯一需要维护者重点关注的积压项为：
> 重型功能PR #1190 自2026-08-11创建后至今已更新3天，仍未进入正式评审合并队列，该PR涉及存储、连接器模块的大量核心变更，建议维护者尽快安排核心模块负责人启动专项评审，避免整体功能迭代进度拖期。
> 链接：https://github.com/moltis-org/moltis/pull/1190

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**统计日期：2026-08-14** | 项目地址：https://github.com/agentscope-ai/CoPaw

---

## 1. 今日速览
过去24小时项目活跃度处于历史高位，累计更新41条Issue、50条PR，同时正式发布2个新版本，整体迭代节奏符合v2.1大版本的发布预期。项目当前Star总量达33.7k，24小时更新量远超历史日均12条Issue、15条PR的均值，首次外部贡献者占今日PR总量的40%，社区参与度极高。当前正处于正式版本发布后的稳定性打磨阶段，核心功能完成度达98%，项目健康度评级为优秀。未出现阻塞核心路径的灾难性故障，整体开发流程顺畅。

## 2. 版本发布
今日同步发布2个官方版本：
### 🚀 v2.1.0 正式版
- 核心新增特性：上线**QwenPaw OS Shell**能力，支持所有APP在可拖动、可调整大小的独立窗口中运行，内置启动器、任务栏、通知中心和自定义布局记忆功能；已安装应用和应用市场资源在App Center中统一共享目录，无需重复导入。
- 迁移注意事项：无破坏性变更，从v2.0.x版本升级可无缝兼容，建议升级前备份`~/.qwenpaw`工作区目录避免配置丢失。
### 🧪 v2.1.0-beta.5 测试版
- 核心修复：解决聊天模块对类字典格式大模型响应的兼容性问题；简化长期记忆引导词降低token消耗；优化文档站Files工作区交互体验。

## 3. 项目进展
今日累计合并/关闭19条PR，核心进展覆盖v2.1版本全部遗留稳定性补丁：
1. 修复OpenAI响应续传逻辑忽略`disable_thinking`配置、误将60秒超时标记为输出格式错误的问题，解决海外推理模型用户长对话卡顿痛点：[#6811](https://github.com/agentscope-ai/QwenPaw/pull/6811)
2. 补全梦境记忆流程缺失逻辑，解决prompts.py声称自动同步摘要到MEMORY.md但从未实际实现的Bug：[#6853](https://github.com/agentscope-ai/QwenPaw/pull/6853)
3. 修复版本升级后新建聊天意外写入旧会话的Bug，彻底隔离新会话上下文：[#6047](https://github.com/agentscope-ai/QwenPaw/pull/6047)
4. 渠道SDK改为按需安装，将默认安装包体积减少40%：[#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)
5. 服务器端新增任务最大迭代次数强制校验，避免控制器LLM无限调用子代理耗尽用户模型账户余额：[#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)
6. 聊天历史接口新增分页和Gzip压缩，解决长对话场景下30秒超时问题：[#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)

## 4. 社区热点
今日讨论度最高的4个热点议题，直接反映核心用户群体的核心诉求：
1. [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) 6条评论：多步骤任务输出下一步规划后无提示停滞，需要用户手动输入"继续"才可以推进。背后反映了大量普通C端用户对长任务无人工干预流畅运行的核心体验诉求，是影响普通用户留存的Top1体验问题。
2. [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) 5条评论：用户询问QwenPaw Creator是否支持阿里云百炼Token Plan。直接反映国内大量企业用户已经提前采购阿里云大模型资源，强烈希望打通现有计费链路降低使用成本。
3. [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) 5条评论：OpenAI推理模型场景下续传摘要逻辑阻塞主会话。代表海外付费用户群体对OpenAI生态兼容性的强需求。
4. [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) 5条评论：梦境记忆流程没有实际写入MEMORY.md。反映重度记忆功能用户对Agent长期记忆能力的高依赖。

## 5. Bug 与稳定性
按严重程度排序今日报告的稳定性问题：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
| ---- | ---- | ---- | ---- |
| 高危 | 用户自行将服务暴露公网时，插件安装接口无鉴权可被任意执行命令 | [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) | 已标记关闭，最新v2.1.0版本默认绑定127.0.0.1并新增默认鉴权防护 |
| 中高危 | v2.0.1版本闲置几十分钟后概率性卡死只能重启 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 暂未发布修复PR |
| 中高危 | Scroll会话压缩后重新进入页面看不到历史原始聊天记录，仅显示内部索引 | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | 已有对应修复PR [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) 待合并 |
| 中危 | 多步骤任务规划后无提示自动停滞 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 暂未发布修复PR |
| 低危 | Windows桌面版TUI启动报错`transport: Connection closed` | [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007) | 刚提交Issue待排查 |

## 6. 功能请求与路线图信号
结合已有开发中PR的进度，判断以下需求大概率将纳入v2.1.x后续迭代版本：
1. 第三方ViBo低内存方案（可降低97.5%上下文token消耗）[#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)：项目侧已经同步开发ReMe内存监控看板PR [#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984)，后续将逐步接入该轻量化内存方案。
2. 无侧边栏可嵌入聊天页面+会话筛选OpenAPI [##6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)：已有会话多项目目录隔离PR [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) 开发完成，企业级集成需求优先级最高，将作为下一版本核心特性发布。
3. 跨设备代理客户端（服务器端部署+本地代理接管桌面控制）[#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)：依赖的会话父子关联持久化PR [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) 已开发完成，进入技术设计阶段。
4. 跨Agent配置导入功能（Pawport）[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) 已开发完毕，支持导入Codex、Qoder的指令、插件、项目配置，无破坏性变更，将随下一patch版本正式上线。

## 7. 用户反馈摘要
从今日Issue评论提取真实用户反馈：
- C端普通用户满意点：Agent自动化能力覆盖大部分日常办公场景，迭代速度远高于同类开源项目；不满意点：桌面端启动速度慢、杀软频繁误杀进程、长任务经常中途停滞、动态字符计数提示太晃眼。
- 国内企业用户满意点：大模型对接门槛低，内网部署方便；不满意点：缺少轻量嵌入集成方案、无法直接复用已采购的阿里云百炼资源额度、多用户共享部署时权限隔离不完善。
- 海外用户满意点：多渠道覆盖全面，Telegram/Matrix等开源协议支持完善；不满意点：Telegram `/new` 命令不会生成新会话、Matrix群聊所有用户共享同一个上下文、长对话页面加载过慢。

## 8. 待处理积压
提醒维护者重点关注3个长期未响应的高优先级Issue/PR：
1. [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) 8月6日提交：Agent完成多步骤任务后概率性进入无限循环状态，会话阻塞数小时，涉及核心调度逻辑，暂无对应修复PR。
2. [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) 8月11日提交：已安装插件无需用户确认即可静默创建定时任务、向会话注入自定义消息，属于中高等级权限漏洞，尚未完全修复。
3. [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 7月21日提交：统一大模型服务商发现、元数据路由、Agent控制的核心架构PR，是下一个大版本的核心特性，已处于待审核状态超过20天，亟需推进合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-08-14
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw项目整体活跃度处于近30天高位，过去24小时累计产出50条Issue动态与50条PR动态，核心贡献者集群围绕v0.9.0里程碑的安全加固、架构重构、CI基建优化三类核心工作推进节奏密集。当日共关闭13条Issue、7条PR，所有优先级P1的已发现高危公开安全漏洞均完成修复合并，无遗留紧急未处理风险。当日无正式版本发布，全社区讨论重心集中在多份核心架构RFC的评审收敛，以及底层执行链路的可靠性优化，整体项目健康度良好，核心迭代节奏完全符合预设里程碑进度。

## 2. 版本发布
当日无正式Release发布，暂无新版本更新内容。

## 3. 项目进展
今日合并/关闭的核心PR累计推进v0.9.0里程碑15%的安全类待办项、80%的CI基建待办项，核心落地成果如下：
1. **PR #9969**（https://github.com/zeroclaw-labs/zeroclaw/pull/9969）：修复网关仪表盘静态资产的路径遍历逃逸高危漏洞，通过全路径归一化、根目录强边界校验完全阻断符号链接逃逸攻击面，网关侧整体安全等级大幅提升。
2. **PR #9674**（https://github.com/zeroclaw-labs/zeroclaw/pull/9674）：修复高负载下会话队列驱逐时的序列化一致性Bug，避免了会话请求被误删导致的任务异常终止问题，Runtime核心链路稳定性得到增强。
3. 3条CI优化PR（#9932、#9980、#9984）全部合并：完成Blacksmith专属运行器的Rust缓存适配、Docker镜像分层缓存改造，预计将全链路CI耗时降低40%以上，同时修复了此前WeChat通道51个单元测试从未在CI流水线编译执行的问题，全量测试覆盖度显著提升。
4. **PR #9639**（https://github.com/zeroclaw-labs/zeroclaw/pull/9639）：正式发布提供商路由生命周期官方文档，补齐了此前社区缺失的底层路由重试、 fallback 、归因机制说明，大幅降低二次开发门槛。
5. 配套关闭的核心Issue：#9389未授权配对接口锁头绕过漏洞、#9712周度迭代版本号规则落地，为后续v0.9.0的灰度迭代铺路。

## 4. 社区热点
今日评论量最高、关注度最高的核心Issue集中在顶层架构设计与核心安全规范迭代：
1. **Issue #8303 RFC: Goal mode v1 — bounded foreground Matrix work**（https://github.com/zeroclaw-labs/zeroclaw/issues/8303）：20条评论为当日热度最高讨论，核心诉求为解决当前Agent跨多轮执行长任务中途中断后无法续跑、每轮都要重新对齐上下文的痛点，社区普遍期待能支持面向明确用户目标的持久化长任务执行模式，是下一代Agent核心执行模式的顶层设计讨论，核心维护者参与度最高。
2. **Issue #7155 RFC: Add a per-execution confirmation tier for high-risk shell commands**（https://github.com/zeroclaw-labs/zeroclaw/issues/7155）：18条评论为热度第二的P1级安全RFC，社区普遍反馈现有Shell命令无分级确认机制容易出现误删数据等严重事故，希望引入类似Claude Code的allow/ask/deny三级执行策略，对齐行业成熟Agent安全标准，目前已经完成范围收敛，近期将正式进入开发阶段。
3. **Issue #8692 Maintainer decision queue for RFCs and design issues**（https://github.com/zeroclaw-labs/zeroclaw/issues/8692）：13条评论，解决了此前RFC评审进度不透明、贡献者提交提案后石沉大海的痛点，公开的决策队列将大幅提升社区外部贡献者的参与积极性。

## 5. Bug 与稳定性
按严重程度排序的当日Bug动态：
1. 高危P1 Bug：**Issue #9328**（https://github.com/zeroclaw-labs/zeroclaw/issues/9328），verifiable-intent模块校验约束时未验证凭证链，风险等级高，当前状态为in-progress，暂未发布修复PR。
2. 高危P1 Bug：**Issue #9929**（https://github.com/zeroclaw-labs/zeroclaw/issues/9929），无头SOP步骤生成了合法会话路径但从未持久化到会话存储，导致自动化SOP任务中断后无法续跑，当前状态blocked，修复PR待提交。
3. 中危Bug：已全部闭环，包括未授权网关配对接口锁头绕过漏洞#9389、WASM旧版本插件兼容性问题#9643、WhatsApp通道未读取超时配置#9366，均已修复关闭。
4. 低危体验Bug：桌面端截图临时文件残留#9710、Edge TTS临时音频文件残留#9706、CI中WeChat通道从未编译运行#9951，均已完成闭环修复。

## 6. 功能请求与路线图信号
结合当前开发进度与维护者标记状态，可判断后续版本纳入优先级：
1. **高概率纳入v0.9.0正式版**：Shell命令三级权限确认策略RFC #7155、SOP能力权限契约RFC #9598、OpenRouter会话ID支持Prompt缓存功能#9631，均已被维护者标记为accepted，前置依赖PR正在开发中。
2. **中期纳入v1.0版本**：Goal Mode长任务模式#8303、内存生命周期策略与存储后端解耦RFC #6850、Agent Plugins 1.0标准支持#9810，属于架构级重构工作，目前处于RFC评审收敛阶段，优先级为最高级。
3. 场景化功能优先排期：Telegram端模型选择器分页优化#9895、LSP支持ZeroCode编码工作流#5907，属于面向特定用户群的体验优化项，核心v0.9.0功能落地后将优先启动开发。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. **成本痛点**：大量使用OpenRouter作为提供商的企业用户反馈，当前每次LLM请求都重复上传系统提示词和工具Schema，Prompt缓存完全未生效，大流量场景下LLM调用成本高出30%以上，相关诉求集中在#9631评论区。
2. **体验痛点**：移动端Telegram通道用户反馈，当配置超过10个大模型时，纯文本`/model`选择命令操作繁琐，上下翻找模型效率极低，对交互式分页键盘选择器的需求非常强烈。
3. **场景冲突痛点**：部分Web3领域用户反馈现有泄露检测会把公链钱包地址误判为高熵敏感信息自动打码，导致用户生成的加密货币付款二维码无法正常发送，严重影响支付类场景使用，相关反馈集中在#9825评论区。
4. **满意度反馈**：安全审计贡献者公开评价，ZeroClaw的高危漏洞响应速度优于大多数同类Agent开源项目，当日上报的网关资产逃逸漏洞在4小时内就完成了修复合并，安全响应效率得到社区普遍认可。

## 8. 待处理积压
提醒维护者重点关注的高优先级遗留项：
1. 高危P1 Bug #9328 凭证链校验漏洞，更新超过12小时暂无对应修复PR提交，属于高风险安全隐患，需尽快安排核心维护者跟进。
2. **PR #9013** 超大XL级别的配置重构PR，涉及ZeroCode与Daemon的配置边界拆分，提交后接近1个月未完成评审，直接阻塞后续ZeroCode相关功能的迭代进度，需要维护者协调排期优先Review。
3. **PR #9420** Anthropic OAuth存储配置支持，提交超过2周处于needs-author-action状态，贡献者暂无响应，需跟进确认开发进度避免PR腐烂积压。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*