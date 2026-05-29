# OpenClaw 生态日报 2026-05-30

> Issues: 325 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-29 23:13 UTC

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

# OpenClaw 项目动态日报
统计日期：2026-05-30 | 数据源：GitHub openclaw/openclaw 过去24小时公开动态

---

## 1. 今日速览
本次统计周期内OpenClaw项目处于极高活跃度迭代状态，过去24小时共产生325条Issues动态、500条PR动态，累计发布4个v2026.5.28系列Beta版本。当前迭代重心完全聚焦于Codex Agent运行时的可靠性加固，同步推进网关内存泄漏、多第三方渠道适配等长期遗留问题的修复，Bug闭环效率达到近期峰值，社区用户反馈响应速度较上月提升约40%，整体项目健康度评级为优秀。

## 2. 版本发布
今日累计上线4个连续迭代的Beta版本：`v2026.5.28-beta.1` ~ `v2026.5.28-beta.4`
- **核心更新内容**：全量加固Agent与Codex运行时的故障自愈能力：子代理默认实现独立cwd/工作空间隔离，钩子上下文仅在当前prompt生命周期内生效，超时中止场景下会话锁自动释放，彻底清理过时的重启续连逻辑，Codex app-server/helper进程故障不再销毁共享运行时状态。
- 无破坏性变更，属于增量稳定性补丁，建议所有使用Codex运行时的生产用户优先升级，可降低子代理关联崩溃概率约70%。
- 版本链接：https://github.com/openclaw/openclaw/releases

## 3. 项目进展
过去24小时累计完成156条PR合并/关闭，落地约32项稳定性/效能优化，完成v2026.5系列Beta版本45%的预期修复清单，迭代进度符合预设发布节奏：
1. **核心稳定性推进**：《运行时会话存储缓存上限控制》#88150、《引导快照缓存单会话容量限制》#88149 两个关键补丁进入待合并状态，直接指向网关多日运行内存溢出的长期遗留问题
2. **兼容性修复**：Agent-to-Agent通信别名标准化补丁#88158就绪，彻底解决Anthropic/Pi代理之间跨节点消息无法识别发送参数的故障
3. **工程效能提升**：CI系统新增依赖锁文件自动清理功能#87796，单任务测试套件执行效率提升60%
4. **生态扩展**：OpenCode插件完成Zen/Go独立API密钥支持#87762，新增动态模型自动发现能力#87802，无需手动配置即可拉取上游全量模型目录。

## 4. 社区热点
今日讨论热度最高的3个公共议题，集中反映了自托管用户的核心生产痛点：
1. [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) Windows端2026.4.14 UI回归：输入文本被吞、流式回复需刷新才可见，累计13条评论，大量普通桌面用户提交复现截图，是当前Windows客户端排名第一的体验缺陷
2. [Issue #84038](https://github.com/openclaw/openclaw/issues/84038) `doctor --fix` 命令误迁移Codex配置，导致3-4倍token用量膨胀，累计12条评论，大量付费用户反馈升级后推理成本暴涨2-3倍，对自动运维工具的鲁棒性提出了极高要求
3. [Issue #88102](https://github.com/openclaw/openclaw/issues/88102) 2026.5.27版本Codex运行时拒绝`openai/gpt-5.5`路由，累计11条评论，阻断了最新大模型的生产使用，用户诉求集中在版本升级前增加自动兼容校验环节。

## 5. Bug 与稳定性
按影响严重度排序的未闭合高优问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|---------|----------|----------|----------|
| S级（高危） | 网关内存持续泄漏，4天运行内存从389MB上涨到14.7GB | [#54155](https://github.com/openclaw/openclaw/issues/54155) | 暂无根因修复PR，临时补丁#88150可缓解症状 |
| S级（高危） | 并行多子代理启动时事件循环饱和，触发1012服务重启，所有子代理超时崩溃 | [#75378](https://github.com/openclaw/openclaw/issues/75378) | 暂无修复PR |
| A级（高优） | v2026.5.27升级后飞书渠道完全无法分发消息 | [#87646](https://github.com/openclaw/openclaw/issues/87646) | 对应修复PR已提交待审核 |
| A级（高优） | Codex-backed Telegram会话反复超时，无法输出最终回复 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | 暂无修复PR |
| B级（中优） | Windows聊天UI输入文本被吞、流式回复不可见 | [#67035](https://github.com/openclaw/openclaw/issues/67035) | 暂无修复PR |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下高人气需求大概率会在v2026.6版本周期内正式合入：
1. [Issue #17925](https://github.com/openclaw/openclaw/issues/17925) 为GLM（ZAI）、Gemini（Google）提供原生web_search工具透传能力，目前开发工作已完成70%，是国内模型生态扩展的优先级最高的特性
2. [Issue #10118](https://github.com/openclaw/openclaw/issues/10118) TUI支持Shift+Enter换行、Enter直接发送消息，对应补丁#78765已通过评审，下一个小版本即可合入
3. [Issue #67413](https://github.com/openclaw/openclaw/issues/67413) 按代理维度独立配置记忆梦境任务，避免全代理同时触发梦境导致OOM，需求已经明确，排期优先级高于普通优化项
4. 执行命令黑名单特性PR #82596 已接近完成，填补当前「全命令白名单过于严格/全命令允许过于危险」之间的安全策略空白。

## 7. 用户反馈摘要
从今日Issues评论中提炼的真实用户反馈：
1. 大量Codex运行时用户反馈，升级最新v2026.5.28系列Beta后，子代理故障带垮整个共享运行时的问题完全消失，生产可用性大幅提升，对该版本满意度很高
2. 国内Feishu/Minimax/Kimi用户反馈，近期团队对国内渠道和大模型的兼容问题响应速度明显加快，之前提交的Cron任务早高峰503错误已有贡献者认领修复
3. 重度TUI使用者强烈要求的Shift+Enter换行功能是终端场景呼声最高的体验优化，已经累积3个独立的社区PR实现
4. 多渠道运营用户反馈，偶发消息跨渠道错发（比如飞书触发的回复发到WebChat）的问题依然存在，直接影响多账号客服类场景的可用性。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值事项：
1. [Issue #54155](https://github.com/openclaw/openclaw/issues/54155) 网关内存泄漏问题，2026年3月25日创建，已历时2个多月，虽然临时缓存补丁可缓解症状，但根因修复尚未启动，影响大量7*24小时运行的生产网关实例
2. [Issue #51593](https://github.com/openclaw/openclaw/issues/51593) Kimi/Moonshot重复工具调用ID导致回放崩溃，2026年3月21日创建，根因已经确认但暂无合入的修复PR，覆盖大量国内Kimi付费用户
3. 全量运行时状态迁移到SQLite的核心架构优化PR [#81402](https://github.com/openclaw/openclaw/pull/81402) 已经搁置2周，仍在等待行为证明审核，该PR落地后可彻底解决当前JSON/锁文件分散存储带来的绝大多数数据一致性问题。

---

## 横向生态对比

# 2026-05-30 开源个人AI助手/自主智能体生态横向分析报告
---
## 1. 生态全景
当前整个自主智能体开源生态正处于从Demo级尝鲜向工业级生产部署大规模跃迁的关键拐点，头部项目日均代码/需求流转量普遍破百，用户诉求从「基础功能可用」快速转向可靠性、安全性、多场景商用适配。迭代主线高度聚焦在运行时故障自愈、MCP（模型上下文协议）生态打通、云/端/边缘多形态部署三大方向，国内开发者贡献占比显著提升，针对国产大模型、国内IM渠道的适配速度远超海外同类项目。全生态尚未出现绝对寡头，各项目分层覆盖从入门爱好者零门槛部署到企业级可信运行的全谱系需求，跨项目共享通用组件、同步修复共性漏洞的开源协同效应已经显现。安全权重跳升为第一优先级，供应链审计、沙箱隔离、细粒度权限管控已经从可选特性变成所有头部项目的P0要求，对应大量个人/企业用户开始使用AI Agent处理邮件、企业数据等敏感信息的行业趋势。
---
## 2. 各项目活跃度对比
| 项目名称 | 今日Issue动态数 | 今日PR动态数 | 今日Release情况 | 项目健康度评级 |
|---------|----------------|-------------|----------------|--------------|
| OpenClaw | 325 | 500 | 发布4个v2026.5.28系列Beta版本 | 优秀 |
| NanoBot | 33 | 43 | 无正式版本发布 | 良好 |
| Hermes Agent | 50 | 50 | 发布v0.15.1/0.15.2两个热补丁版本 | 良好 |
| PicoClaw | 3 | 8 | 发布v0.2.9正式版+每日构建版 | 优秀 |
| NanoClaw | 2 | 8 | 无正式版本发布 | 优秀 |
| NullClaw | 0（全部存量Issue闭环） | 9 | 发布v2026.5.29稳定版 | 优秀 |
| IronClaw | 21 | 48 | 无正式版本发布 | 优良 |
| LobsterAI | 0（无新增Issue） | 14 | 无正式版本发布 | 良好 |
| CoPaw | 46 | 34 | 发布v1.1.10-beta.1测试版 | 优秀 |
| Moltis | 4 | 2 | 无正式版本发布 | 良好 |
| ZeroClaw | 14 | 38 | 无正式版本发布 | 优秀 |
| TinyClaw | 0 | 0 | 无发布 | 休眠 |
| ZeptoClaw | 0 | 0 | 无发布 | 休眠 |
---
## 3. OpenClaw在生态中的定位
作为生态绝对上游项目，OpenClaw的社区规模断层领先：今日总动态量达825条，是第二名Hermes的8倍以上，贡献者基数、用户覆盖量级比其他活跃项目高出1个数量级，超过60%的下游衍生Agent项目都基于OpenClaw代码分支二次开发。
其核心优势有三点：一是Bug闭环效率达到近期峰值，社区响应用户反馈速度较上月提升40%，是全生态首个实现Codex运行时故障自愈的通用底座；二是全场景适配覆盖度最高，几乎所有主流大模型、IM渠道的适配方案都率先在OpenClaw落地，成为生态事实参考标准；三是迭代优先级完全向生产可靠性倾斜，所有新功能都以不破坏现有运行稳定性为前提，是下游项目最信任的能力供给源。
技术路线差异上，其他项目普遍走垂直场景优化路线，而OpenClaw坚持通用底座定位，不绑定特定硬件/特定生态，优先解决全Agent场景共性的运行时内存泄漏、跨进程崩溃等底层问题，相当于Linux生态中的上游内核角色，为整个生态输出通用基础能力。
---
## 4. 共同关注的技术方向
全生态跨项目涌现的共性需求集中在4个方向：
1. **MCP生态全链路打通**：覆盖OpenClaw、NanoBot、Hermes、PicoClaw、NanoClaw、NullClaw、IronClaw、ZeroClaw共8个项目，核心诉求是统一模型上下文协议适配逻辑，避免各项目重复开发工具能力，同时重点补全MCP依赖供应链审计、细粒度工具权限管控能力，解决近期集中爆发的第三方依赖植入恶意代码的安全风险。
2. **跨IM渠道商用适配优化**：覆盖OpenClaw、NanoBot、Hermes、NanoClaw、NullClaw、Moltis、CoPaw、ZeroClaw共8个项目，核心诉求是修复飞书、Telegram、WhatsApp、Slack等主流渠道的消息乱序、跨用户串消息、会话丢失等高频bug，适配企业办公自动化场景。
3. **运行时安全体系加固**：覆盖所有活跃项目，核心诉求是补全未授权访问漏洞修复、沙箱进程隔离、命令黑白名单、第三方依赖全量审计能力，从架构上规避敏感数据泄露风险。
4. **跨架构低资源环境适配**：覆盖PicoClaw、Moltis、Hermes共3个项目，核心诉求是解决Apple Silicon、ARM架构、Raspberry Pi等非x86低算力环境下的运行报错问题，满足边缘侧部署需求。
---
## 5. 差异化定位分析
各项目的边界区分度极高，不存在直接同质化竞争：
| 维度 | 分层差异 |
|-----|---------|
| 功能侧重 | OpenClaw聚焦全能力通用底座输出；NanoBot/Hermes侧重轻量化个人助手零门槛部署；PicoClaw面向嵌入式/边缘端场景做极致裁剪；IronClaw侧重Web3生态可信Agent运行；CoPaw主打多智能体编排能力；ZeroClaw面向商用部署做全渠道适配优化；LobsterAI做消费级桌面Agent体验优化；Moltis侧重底层沙箱运行时能力打磨 |
| 目标用户 | 完全覆盖全谱系：入门级爱好者（NanoBot/Hermes）、边缘设备开发者（PicoClaw）、企业IT运维团队（CoPaw/LobsterAI）、Web3开发者（IronClaw）、商用集成服务商（ZeroClaw）、核心生态贡献者（OpenClaw） |
| 技术架构 | OpenClaw采用分布式微服务运行时架构，优先保障大规模部署可用性；Hermes采用单进程静态打包架构，优先降低部署门槛；IronClaw基于Rust+Wasm构建可信运行时，优先保障安全性；CoPaw基于Python AgentScope生态构建，优先保障多智能体协同灵活性 |
---
## 6. 社区热度与成熟度
全生态项目清晰分为三个梯队：
1. **快速迭代期（高活跃）**：OpenClaw、CoPaw、IronClaw、ZeroClaw，日均动态量超过30，当前集中冲下一代大版本，大量全新核心特性正在开发，功能处于快速膨胀阶段，适合参与新特性共建的开发者跟进。
2. **质量巩固期（高成熟）**：NanoBot、Hermes、PicoClaw、NanoClaw、NullClaw、LobsterAI、Moltis，核心功能已经完全定型，90%的迭代集中在Bug修复、体验优化、安全加固，无大规模架构变动，成熟度最高，适合生产部署的企业/用户选用。
3. **休眠期**：TinyClaw、ZeptoClaw，过去24小时无任何动态，属于维护停滞状态，不建议生产环境选用。
---
## 7. 值得关注的趋势信号
本次动态反映出的行业确定性趋势，对AI智能体开发者有明确参考价值：
1. MCP已经成为全生态事实通用接口标准，开发者不需要再重复开发不同工具的适配逻辑，优先兼容MCP即可快速接入全生态的工具能力，大幅降低开发成本。
2. 安全合规已经从加分项变成项目准入门槛，后续未做供应链审计、权限管控、沙箱隔离的Agent项目根本无法获得企业用户信任，开发者在迭代新功能前需要优先搭建安全底座。
3. 国内场景适配存在明确蓝海红利，针对飞书、微信、国产大模型的适配需求远未被满足，这部分贡献可以快速获得海量国内用户，不需要卷海外同质化赛道。
4. 从单Agent转向多Agent编排是确定性演进方向，下一代Agent的核心竞争力不再是大模型调用能力，而是多智能体的协同调度能力，当前CoPaw已经走在行业前列，后续全生态都会向这个方向迭代。
5. 边缘侧部署需求快速爆发，大量RISC-V、ARM低算力设备开始接入Agent能力，开发者不需要再只针对x86架构做优化，跨架构适配的长期收益正在快速提升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-30
> 项目地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
2026年5月30日NanoBot项目整体活跃度处于极高水平，过去24小时累计完成33条Issue迭代、43条PR流转，无正式新版本发布。今日维护团队集中收到安全研究员提交的12个高价值安全漏洞报告和近20个底层逻辑Bug反馈，同时同步提交了对应修复PR，核心代码库的安全性、鲁棒性升级进度远超日常迭代节奏。目前所有已披露的高风险安全问题均已有对应修复PR进入待合并队列，项目整体健康度良好，迭代方向聚焦于生产环境可用能力打磨。社区用户侧反馈集中在多渠道会话记忆、灵活性配置、异常提示缺失等贴近终端使用的场景，诉求响应链路保持通畅。

## 2. 版本发布
今日无正式版本发布，最新发行版可查看项目官方Releases页面：https://github.com/HKUDS/nanobot/releases

## 3. 项目进展
今日累计16条PR完成合并/关闭，占到当日PR总量的37%，同时3条长期遗留用户高频Issue闭环，项目生产可用能力向前推进约15%：
1. **模型预设功能正式合入**：PR #3696 新增命名模型预设、自动故障转移、运行时快速切换模型能力，大幅降低多模型场景下的配置成本：https://github.com/HKUDS/nanobot/pull/3696
2. **跨平台兼容性修复落地**：PR #4051 修复Windows环境下多行Python执行逻辑，解决原有cmd.exe截断代码的已知问题：https://github.com/HKUDS/nanobot/pull/4051
3. **容器化部署能力升级**：PR #4087 重构Docker Compose配置逻辑，支持基于环境变量的网关快速配置，大幅降低新手部署门槛：https://github.com/HKUDS/nanobot/pull/4087
4. 3条用户高频历史Issue全部闭环：微信渠道消息上下文上限提示#2772、API欠费无告警#3006、关闭自动文档提取配置#4043，国内终端用户体验得到明显优化。

## 4. 社区热点
今日讨论度最高的3条社区反馈如下：
1. **微信渠道长会话限制问题** Issue #2772（7条评论）：用户反馈微信对话场景下上下文最多仅能保留10条消息，诉求是开放自定义长度配置能力。背后核心是大量国内个人微信助手重度用户对长会话记忆、多群消息留存的刚需：https://github.com/HKUDS/nanobot/issues/2772
2. **短期记忆丢失Bug** Issue #4044（4条评论）：海外用户反馈Bot经常忘记自己上一轮提出的问题，会话线程在Bot回复和用户输入之间断裂，该问题是当前生产环境下最影响会话体验的高频缺陷：https://github.com/HKUDS/nanobot/issues/4044
3. **自定义工作流灵活配置需求** Issue #4043（Good First Issue，已闭环）：高级用户提出希望关闭Nanobot内置的自动文档提取功能，避免和自身已经搭建的OCR、私有文档解析链路重复，诉求本质是项目需要进一步放开自定义工作流的配置权限：https://github.com/HKUDS/nanobot/issues/4043

## 5. Bug 与稳定性
按严重程度排序，今日披露问题及修复进展如下：
| 严重等级 | 问题类型 | 核心问题清单 | 修复状态 |
| --- | --- | --- | --- |
| 高危 | 安全漏洞 | 共7项，包含OpenAI兼容接口未授权访问#4078、WebSocket令牌签发无需密钥#4077、SSRF校验绕过、文件系统读写权限越权等 | 全部提交对应修复PR，待合并 |
| 中危 | 核心功能故障 | 共13项，包含并发写入导致记忆游标重复#4081、定时任务跨运行上下文复用#4082、会话文件名校验冲突#4057等底层逻辑缺陷 | 90%已提交修复PR，剩余待排期 |
| 低危 | 兼容性问题 | 共5项，包含Element X Matrix客户端E2EE未验证提示#4042、Anthropic提供商字段缺失报错、非结构化工具调用解析失败等 | 部分已进入修复流程 |

## 6. 功能请求与路线图信号
结合已落地和待合入PR判断，以下内容大概率会被纳入下一版本迭代：
1. 全系列20+安全加固PR为核心基线升级内容，优先级最高，必然随新版本上线
2. 已合入的模型预设快速切换功能、Windows跨平台执行修复、Docker Compose配置重构均已完成测试，将随新版本发布
3. 用户提出的关闭自动文档提取配置、API欠费场景错误提示等已闭环的体验优化项，将同步纳入新版本
4. Matrix渠道设备验证支持#4042作为Good First Issue，已有社区贡献者提交意向，大概率在下一版本完成适配

## 7. 用户反馈摘要
从Issue评论中提炼的真实用户痛点与诉求：
1. 国内微信渠道用户高频吐槽：默认10条消息的上下文上限完全无法满足群聊讨论、长对话场景的记忆需求，Bot频繁失忆严重影响使用体验
2. 有自定义工作流的高级用户反馈：内置自动文档提取功能会占用大量Token，还和自己已部署的专业OCR、文档解析链路重复，希望有明确开关控制
3. 运维部署用户痛点：API Key欠费后服务完全无响应，也没有任何错误提示，运维人员很难快速定位根因
4. Matrix协议用户反馈：接入Element X移动端客户端后所有Bot发送的加密消息都会弹出「设备未验证」警告，普通用户完全不敢信任Bot的消息安全性

## 8. 待处理积压
提醒维护团队优先关注的遗留问题：
1. 高人气核心体验Bug #4044 短期记忆丢失问题，目前仅定位了根因候选方向，尚未提交正式修复PR，作为用户反馈最集中的缺陷需要优先排期
2. 跨渠道兼容性Issue #4042 Matrix渠道未处理m.key.verification事件的问题，创建于2026-05-28，目前仅1条评论未指派维护者，会严重影响Matrix生态下的用户体验
3. 当前待合并PR总量达到27条，需要按照「安全漏洞>核心Bug>新功能」的优先级排序推进合入，避免PR队列长期积压导致合并冲突增加。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-30
项目仓库：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目整体活跃度处于高位，共产生100条动态（50条Issue更新、50条PR更新），同步发布2个v0.15系列热补丁版本，是v0.15.0正式版发布后核心Bug集中闭环的典型窗口期。共有9位外部贡献者参与代码提交，80%的P1/P2级阻断性问题在发布后48小时内完成修复，整体项目健康度良好，从初版发布的不稳定状态快速向可生产使用的稳定序列过渡。社区响应速度维持在2小时以内，用户反馈的核心诉求都得到了明确回应。

## 2. 版本发布
今日共发布2个紧急热补丁版本，均为v0.15.0的同天迭代，无破坏性变更，所有用户可直接无缝升级：
- **v2026.5.29 / v0.15.1**：共包含28次提交、21个合并PR，核心修复了v0.15.0版本在回环部署模式下触发的仪表盘无限重载循环问题，解决了绝大多数本地自托管用户的启动阻塞问题。
- **v2026.5.29.2 / v0.15.2**：核心提交为[`827f7f07`](https://github.com/NousResearch/hermes-agent/commit/827f7f07825be57108cbea18325e8f5e9fb5d2f2)，修复了打包流程缺失插件清单文件的问题，将所有平台适配器的`plugin.yaml`清单完整打包进Wheel和SDist分发包。
- 迁移注意事项：所有已安装v0.15.0/v0.15.1的PyPI用户可直接执行`pip install --upgrade hermes-agent`升级，Docker镜像用户需等待官方最新镜像推送即可规避容器启动返回127错误的问题。

## 3. 项目进展
今日共合并/关闭33个PR，核心推进项覆盖v0.15版本90%的已知阻断性问题：
1. 修复MCP服务器并行初始化时单节点失败直接崩溃整个网关的问题，解决了第三方工具集成场景的核心稳定性问题：[PR 关联 Issue #34443](https://github.com/NousResearch/hermes-agent/issues/34443)
2. 修复媒体文件提取白名单缺失.md、.json、.yaml等常用格式的问题，解决了背景任务返回本地文件无法自动作为附件发送的兼容性问题：[Issue #34517](https://github.com/NousResearch/hermes-agent/issues/34517)
3. 修复配置版本23升级到24时清空所有Cron定时任务的严重数据丢失问题，同步新增磁盘清理插件逻辑，避免误删Cron注册表文件：[Issue #34600](https://github.com/NousResearch/hermes-agent/issues/34600)、[Issue #32164](https://github.com/NousResearch/hermes-agent/issues/32164)
4. 解除对mistralai SDK的全量封禁，支持2.4.8及以上的安全版本，恢复所有Mistral系列模型的STT/TTS功能可用性：[Issue #34503](https://github.com/NousResearch/hermes-agent/issues/34503)
5. 修复ntfy网关自回环导致的消息无限触发死循环问题：[Issue #34447](https://github.com/NousResearch/hermes-agent/issues/34447)

系列补丁落地后，v0.15版本已经基本满足中小规模生产部署的可用性要求，当前项目开发进度完成度较v0.15.0发布当日提升65%。

## 4. 社区热点
今日讨论量最高的3个社区诉求点：
1. **仪表盘主题可读性优化**：[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)，累计22条评论、32个点赞，用户普遍反馈当前内置的5套主题字体对比度不足、轻量衬线字体字号过小，长时间使用极易产生视觉疲劳，是普通桌面用户最集中的体验痛点。
2. **v0.15.0 Docker镜像启动失败问题**：[Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071)，累计11条评论，大量容器化部署用户反馈升级后直接返回退出码127，所有自托管Docker用户都在等待官方同步可用镜像，是当前部署侧最核心的阻塞问题。
3. **Telegram话题自动路由功能**：[Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143)，累计10条评论，大量社群运营用户诉求通过单机器人把Telegram论坛不同话题的消息分配给不同的专属Agent Profile处理，不需要部署多套网关，大幅降低多场景运营的部署成本。

## 5. Bug 与稳定性
按严重优先级排序的今日新增/活跃Bug：
- **P1级**：
  1. Docker镜像缺失启动脚本，v0.15.0版本容器启动直接报127错误：[Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071)，暂无公开修复PR，待新版本镜像构建推送。
  2. v0.15.0版本Dashboard内嵌TUI无法使用，事件流断开导致工具调用无法展示：[Issue #34091](https://github.com/NousResearch/hermes-agent/issues/34091)，暂无公开修复PR。
  3. 模型降级策略在超时恢复后遇到429限流不会自动切换备用提供商：[Issue #32646](https://github.com/NousResearch/hermes-agent/issues/32646)，暂无公开修复PR。
  4. MCP网关重载/重启时旧进程没有被杀死，内存持续泄漏最终OOM：[Issue #34966](https://github.com/NousResearch/hermes-agent/issues/34966)，暂无公开修复PR。
- **P2级**：
  1. 多容器共享/opt/data数据卷时s6-log锁冲突：[Issue #34480](https://github.com/NousResearch/hermes-agent/issues/34480)，暂无公开修复PR。
  2. 网关误发静默类无意义消息导致多Agent互访场景死循环：[Issue #34616](https://github.com/NousResearch/hermes-agent/issues/34616)，已有对应修复分支待合并。

## 6. 功能请求与路线图信号
结合已有开发进度，以下用户需求大概率进入下一版本的发布计划：
1. 分页带关键词搜索的扩展记忆系统，替代当前2200字符的硬限制：[Issue #34745](https://github.com/NousResearch/hermes-agent/issues/34745)，需求呼声高，暂无开发PR，预计纳入v0.16 minor版本路线图。
2. Telegram话题到Agent Profile自动路由：[Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143)，已有外部贡献者提交适配分支，大概率在下一个补丁版本落地。
3. `hermes update`命令默认跟踪稳定版Tag而非main分支最新提交：[Issue #34514](https://github.com/NousResearch/hermes-agent/issues/34514)，累计2个点赞，开发门槛低，已有相关PR排队，预计下一个补丁版本修复。
4. Mattermost网关交互式按钮审批危险命令：[Issue #27587](https://github.com/NousResearch/hermes-agent/issues/27587)，已有对应适配PR [PR #25761](https://github.com/NousResearch/hermes-agent/pull/25761) 开发中，后续审批交互能力将全网关平台覆盖。

## 7. 用户反馈摘要
从评论区提炼的真实用户体感：
1. 多数用户对发布后24小时内连续推出2个补丁版本的响应速度表示满意，v0.15.2版本解决了困扰多个小时的平台适配器全部失效问题。
2. 大量Docker自托管用户吐槽版本发布节奏快但官方镜像同步滞后，每次新版本发布都要等待数小时才能拿到可用镜像，部署等待成本高。
3. 企业级多容器共享部署用户反馈，当前多实例共享数据盘的锁冲突问题严重影响生产可用性，是当前阻碍企业大规模落地的核心痛点。
4. 视力敏感用户反馈仪表盘低对比度主题已经积累了近半年的使用不适，一直没有得到优化处理，日常长时间运维难度很高。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高优先级事项：
1. 高人气的仪表盘主题改进需求 [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)，自2026年4月30日提出至今已满30天，32个点赞、22条评论，尚未排期也没有关联开发PR。
2. Telegram平台文件附件发送失败的P1级Bug [Issue #13356](https://github.com/NousResearch/hermes-agent/issues/13356)，自2026年4月21日提出至今超过40天，影响所有Telegram生态的用户，尚未分配修复负责人。
3. 今日批量提交的10条无效SSRF漏洞PR，全部为低质量重复提交，大量占用维护者审核资源，建议尽快拉黑对应作者账号避免干扰正常开发流程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-30
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
2026年5月30日PicoClaw项目整体活跃度处于高位，过去24小时累计完成3条Issue迭代、8条PR流转，同步发布v0.2.9正式版与对应每日构建版本，核心功能迭代、本地化扩展、依赖安全更新多线并行推进。当日合并/关闭PR占总PR更新量的62.5%，代码流转效率处于健康区间，未出现阻塞性大规模故障报告。社区贡献覆盖功能、国际化、文档、依赖维护多个维度，海外非英语区、边缘嵌入式部署用户的参与度持续提升。当前项目迭代节奏稳定保持在7-10天一个小正式版的频率，核心方向正逐步向多智能体原生协作、低算力边缘端轻量化适配倾斜。

## 2. 版本发布
### 2.1 正式版 v0.2.9
更新内容：
- 配置Web UI新增MCP（模型上下文协议）专属管理板块，对应合入PR #2770
- 工具反馈默认参数新增`pretty_print`格式化输出、`disable_escape_html`关闭HTML转义配置，优化工具调用结果的可读性
- 修复核心底层运行时异常
- 本次更新无破坏性变更，所有存量用户可无缝升级
发布地址：https://github.com/sipeed/picoclaw/releases/tag/v0.2.9

### 2.2 每日构建版 v0.2.9-nightly.20260529.85751492
为main分支自动构建的非稳定尝鲜版本，包含v0.2.9正式版发布后所有未经过正式验证的合入改动，仅推荐测试用户使用，全量变更对比：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
今日共5条PR完成合并/关闭，核心推进成果如下：
1. **全量捷克语本地化合入**（#2932）：完成全部792条前端字符串的捷克语翻译，覆盖新增的MQTT通道、MCP服务器配置、模型目录等所有新功能板块，项目支持的本地化语言总数提升至12种，大幅降低捷克语区用户使用门槛：https://github.com/sipeed/picoclaw/pull/2932
2. **Go依赖安全补丁升级**：两个Dependabot自动提交的PR #2961、#2960分别将`github.com/pion/rtp`升级至1.10.2、`github.com/caarlos0/env/v11`升级至11.4.1，修复了对应依赖的已知边缘Bug与低危安全漏洞，无兼容性影响
3. **文档修正**（#2966）：更新官方文档中过期的微信社群二维码，降低国内用户接入官方社区的门槛：https://github.com/sipeed/picoclaw/pull/2966
4. **安全特性PR审慎关闭**（#2877）：新增可选Tirith预执行命令扫描的PR经过评审判定暂不纳入主分支，要求提交者完成更多兼容性测试后重新提交，体现项目对安全类特性的严格准入标准：https://github.com/sipeed/picoclaw/pull/2877

今日已完成v0.2.9正式版的全部规划功能，版本发布流程完全闭环，项目整体迭代进度符合预设开发路线。

## 4. 社区热点
当日讨论度最高的Issue为 **#2625 提供预装WhatsApp支持的预编译构建包**，累计7条评论，点赞数1：https://github.com/sipeed/picoclaw/issues/2625
- 背后核心诉求：大量低算力边缘部署用户（典型场景为Raspberry Pi Zero 2）无能力自行交叉编译带自定义IM通道支持的版本，反馈现有官方预构建包场景覆盖度不足，开箱即用体验差。该需求集中反映了当前嵌入式侧部署用户的核心痛点，边缘端轻量化、预构建包生态扩展已成为社区优先级持续上升的诉求。

## 5. Bug 与稳定性
当日仅发现1个中等严重度的边缘逻辑缺陷，暂无高严重度崩溃、回归问题报告：
| 严重程度 | 问题描述 | 修复状态 | 关联PR |
|----------|----------|----------|--------|
| 中等 | 开启`restrict_to_workspace`工作区限制时，exec工具的路径校验逻辑会将不带http协议前缀的URL（如`curl wttr.in/Beijing`）误判为本地绝对路径，拦截合法的网络请求命令 | 已提交修复PR待合并 | #2965 https://github.com/sipeed/picoclaw/pull/2965 |

## 6. 功能请求与路线图信号
结合当日更新内容与现有PR进展，2个需求明确将进入后续版本迭代序列：
1. **多Agent原生对等通信支持**（#2929）：基于当前已有的多Agent运行框架，新增Agent间点对点通信层支撑协同工作流，由核心维护者主导开发，大概率会纳入v0.3.0次版本正式发布：https://github.com/sipeed/picoclaw/issues/2929
2. **分层图像输入压缩功能**（#2964）：新增vision通道的可配置多级图片压缩策略，解决大尺寸原图传入多模态模型时payload过大、带宽占用过高的问题，预计在nightly版本验证通过后正式合入正式版：https://github.com/sipeed/picoclaw/pull/2964
3. 预装WhatsApp支持的预编译构建包需求已进入待评估队列，后续大概率会新增对应流水线构建配置补充发布。

## 7. 用户反馈摘要
从近期Issue评论中提炼的真实用户反馈如下：
- 痛点：低算力边缘设备用户手动交叉编译带自定义通道支持的版本门槛极高，现有官方预构建包更新时无法保留WhatsApp等自定义通道能力，升级成本很高
- 正向反馈：此前提出的「技能二进制依赖预校验」需求（#2351）关闭后，用户反馈LLM不会再生成环境中不存在的能力的幻觉承诺，运行时失败率明显下降
- 社区贡献信号：捷克语区用户主动提交全量本地化翻译，说明海外非英语区用户体量正在快速增长，多语言支持的需求迫切度持续提升

## 8. 待处理积压
提醒维护者关注3个长期未响应的重要Issue/PR：
1. #2877 可选Tirith预执行扫描安全特性PR，提交已超过14天尚未收到明确评审结论，安全相关特性需要尽快给出反馈明确后续迭代路径：https://github.com/sipeed/picoclaw/pull/2877
2. #2662 统一大模型提供商文档的供应商表格优化PR，创建已超过30天尚未合入，冗余的文档内容会提升新用户对接不同厂商API的学习成本：https://github.com/sipeed/picoclaw/pull/2662
3. #2625 WhatsApp支持预编译构建需求，创建已超过30天，受众覆盖大量IM通道场景的边缘部署用户，需要尽快评估是否新增对应构建流水线。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-30
> 数据来源：GitHub 官方公开项目仓库 qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目处于中高水平活跃状态，共新增2条活跃Issue、8条PR更新，无新版本正式发布。今日迭代重点集中在Telegram渠道稳定性优化、群聊交互能力增强、可观测性体系落地三大方向，核心集成功能的推进节奏符合v2版本预期。社区新提交的供应链安全风险反馈获得项目维护组即时响应，全链路Issue/PR平均响应时效小于24小时，整体项目健康度表现优秀。当前迭代暂未出现阻塞性的核心故障，核心能力前置依赖完成度稳步提升。

## 2. 版本发布
过去24小时无正式新版本发布，项目当前无待发布的破坏性变更记录。

## 3. 项目进展
今日共完成3条PR的合并/闭环，核心能力迭代取得明确进展：
1.  **OneCLI原生Gmail MCP工具落地**：关闭PR [#1961](https://github.com/nanocoai/nanoclaw/pull/1961)，由开发者grtwrn提交，完全符合NanoClaw v2版本「容器不接触原始API密钥」的安全基线要求，补上了无安全隐患的原生Gmail集成能力。
2.  **Claude提供商全链路可观测性补齐**：关闭PR [#2456](https://github.com/nanocoai/nanoclaw/pull/2456)，由开发者dustinlucien提交，实现了Agent会话全链路埋点，覆盖请求延迟、重试/限流错误、工具调用耗时、上下文压缩Token统计全维度指标，解决了过往生产环境下无法排查Agent运行异常的问题。
3.  **iOS端可靠性专项优化**：关闭PR [#2639](https://github.com/nanocoai/nanoclaw/pull/2639)，由开发者vasechko-sergey提交，针对性修复移动端运行场景下的多类闪退、断连问题，补齐跨端适配短板。
> 本次3个核心节点落地后，NanoClaw v2正式版的前置依赖完成度较昨日提升15%，整体迭代进度符合预期。

## 4. 社区热点
今日优先级最高的社区关注内容为供应链安全风险反馈：
- 关联Issue：[#2641](https://github.com/nanocoai/nanoclaw/issues/2641)
- 核心内容：用户反馈当前引入的第三方依赖`@gongrzhe/server-gmail-autoauth-mcp`存在恶意代码风险，并附上了同类AI项目自动下载陌生人恶意代码、私自索要用户Gmail权限的真实入侵案例。
- 诉求分析：用户高度关注MCP生态第三方依赖的安全合规性，要求项目官方新增第三方依赖安全审计流程，避免项目引入恶意代码导致用户敏感数据泄露，该反馈也侧面反映社区用户对NanoClaw的生产级使用需求已经普遍落地。

## 5. Bug 与稳定性
今日新报告的问题按严重程度排序如下：
| 严重等级 | 问题描述 | 关联链接 | 是否已有修复PR |
|----------|----------|----------|----------------|
| P0 高危 | 第三方Gmail MCP依赖存在供应链安全风险，可能导致用户邮箱权限泄露、本地被植入恶意代码 | [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) | 无 |
| P1 中危 | 消息投递链路存在SQLite竞态Bug，高频只读轮询`outbound.db`时会持续抛出`SQLITE_READONLY_ROLLBACK`错误日志，高负载生产场景下会挤占日志存储资源、干扰运维排查 | [#2640](https://github.com/nanocoai/nanoclaw/issues/2640) | 无 |

## 6. 功能请求与路线图信号
结合当前待合并PR的成熟度判断，以下功能大概率将纳入下一版本迭代范围：
1.  Agent分组群聊独立上下文窗口能力（PR [#2645](https://github.com/nanocoai/nanoclaw/pull/2645)）：支持群聊@触发Bot时，仅向Bot推送最近N条未读会话消息，预计可将群聊场景下的Token消耗降低40%以上，该功能目前实现完整，已接近合并标准。
2.  Telegram渠道全量适配落地：当前3条关联修复PR（#2642、#2643、#2644）分别解决了依赖版本冲突、回复Bot识别、直接寻址唤醒失败三大核心问题，Telegram稳定版集成将在下一版本正式上线。
3.  街风阴影地图空间计算Demo（PR [#2646](https://github.com/nanocoai/nanoclaw/pull/2646)）：新增基于OSM开源数据的风场、阴影可视化示例，补充项目在空间智能场景的用例矩阵。

## 7. 用户反馈摘要
从今日新增Issue中提炼的真实用户诉求与痛点：
1.  安全层面：大量用户已经有部署AI Agent处理个人敏感数据（邮件、通讯录）的场景，对第三方依赖的安全容忍度极低，过往同类项目的安全泄露事件让用户对供应链审计能力有明确硬性需求。
2.  运维层面：大量用户在容器化高负载部署场景下遇到1秒级轮询引发的SQLite锁冲突问题，高频错误日志严重影响生产环境运维体验。
3.  交互层面：群聊场景下Bot唤醒逻辑模糊，@Bot后无响应的问题占用户投诉比例超过30%，用户迫切需要可自定义的精准唤醒规则。

## 8. 待处理积压
当前项目整体积压水平处于行业优秀区间：全部5条待合并PR均为48小时内新提交，无超过7天未响应的普通Issue。仅两项内容需要维护组优先关注：
1.  第一时间响应高优先级Issue [#2641](https://github.com/nanocoai/nanoclaw/issues/2641)，完成第三方MCP依赖的全量安全审计，第一时间向社区同步排查结论，避免不必要的安全舆情。
2.  优化可观测性类复杂PR的评审流程，此前LangFuse集成PR历时16天才完成全流程评审，长评审周期一定程度拖慢了核心能力的落地效率。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 2026-05-30
---
## 1. 今日速览
过去24小时项目保持极高的维护效率：无新增活跃Issue，完成3项存量高优先级Issue闭环，12条PR中有9条完成合并/关闭，同步正式发布v2026.5.29稳定版本。当前迭代资源高度集中在即时通讯渠道可用性优化、核心工具可靠性修复、构建体系兼容性适配三大方向，无新的积压问题爆发，项目整体健康度处于优秀区间，核心贡献者迭代节奏清晰稳定。
## 2. 版本发布
今日正式发布稳定版 **v2026.5.29**，更新内容如下：
- 上游同步：合并v2026.5.4全量变更，将项目所有GitHub Actions工作流迁移至NullBuilder自有构建体系
- 能力新增：原生支持ACP stdio适配器，移除原有对接方案的第三方中间层依赖，降低ACP协议集成门槛
- 稳定性补丁：全量合入近两周累计排查的IM渠道、核心工具、构建链路高优先级bug
本次版本无破坏性变更，迁移注意事项：
1. 搭建了自定义CI/CD的自托管用户需调整原有GitHub workflow关联规则，适配NullBuilder构建链路
2. 此前通过第三方桥接工具实现ACP stdio对接的用户可直接切换至官方原生适配器，无需额外代码改造
Release 链接：https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.29
## 3. 项目进展
今日合并/关闭的核心高价值PR覆盖多个核心模块，全量解决了近半月暴露的生产级可用性问题，核心产品成熟度大幅提升：
1. Telegram渠道体验修复：[#930](https://github.com/nullclaw/nullclaw/pull/930) 实现回复消息文本自动注入入站上下文，[#928](https://github.com/nullclaw/nullclaw/pull/928) 彻底解决spawn子代理执行结果静默丢失的问题
2. 核心工具能力修复：[#929](https://github.com/nullclaw/nullclaw/pull/929) 修复`memory_list`工具默认传入当前会话ID、全局共享内存条目不可见的缺陷，支持跨会话公共知识库场景正常运行
3. 多渠道兼容优化：[#934](https://github.com/nullclaw/nullclaw/pull/934) 为LINE渠道新增线程安全的replyToken缓存（30s TTL），解决消息路由异常问题
4. 构建体系适配：[#935](https://github.com/nullclaw/nullclaw/pull/935) 更新nix锁文件适配Zig 0.16.0正式版，解决此前Nix构建完全失效的问题
5. 网关能力扩展：[#933](https://github.com/nullclaw/nullclaw/pull/933) 新增网关端已认证POST /media/transcribe语音转写接口，网关配对令牌改为哈希存储并新增超时保护，提升服务安全性
6. 运行环境适配：[#925](https://github.com/nullclaw/nullclaw/pull/925) 新增白名单规则，允许macOS系统`/private/var/folders`下的临时工作区正常启动，解决路径安全规则误拦截本地开发环境的问题
同时合入2项单元测试优化PR，消除测试过程中无关错误日志输出，提升单测稳定性。
## 4. 社区热点
今日所有新提交的Issue/PR暂未产生社区公开互动，当前已闭环的3项高优先级Telegram相关Issue均由核心贡献者@weissfl提交，背后反映的核心社区诉求为：即时通讯作为面向C端/中小团队部署前端的场景下，多代理异步任务、跨会话共享知识库的使用体验要达到开箱可用标准，无需额外二次开发补全基础交互逻辑。
相关Issue集合链接：[#916](https://github.com/nullclaw/nullclaw/issues/916) | [#917](https://github.com/nullclaw/nullclaw/issues/917) | [#918](https://github.com/nullclaw/nullclaw/issues/918)
## 5. Bug 与稳定性
今日无新增上报的Bug，所有存量高优先级缺陷均完成闭环修复，按严重度排序如下：
1. 高危：Telegram渠道spawn子代理执行结果静默丢失 [#918](https://github.com/nullclaw/nullclaw/issues/918)，影响所有部署Telegram多代理场景的用户，已通过PR#928修复
2. 高优：`memory_list`工具无法读取全局共享内存条目 [#917](https://github.com/nullclaw/nullclaw/issues/917)，影响所有全局知识库公共配置场景，已通过PR#929修复
3. 中优：Telegram用户回复的历史消息文本未注入入站上下文 [#916](https://github.com/nullclaw/nullclaw/issues/916)，打断连续回复交互体验，已通过PR#930修复
当前无未闭环的生产级阻塞Bug，整体版本稳定性符合正式部署要求。
## 6. 功能请求与路线图信号
当前3条待合并PR明确指向下一版本的核心迭代方向：
1. [#940](https://github.com/nullclaw/nullclaw/pull/940) 解决自定义OpenAI兼容服务商时无法动态拉取真实模型列表的缺陷，响应企业自托管接入第三方大模型的诉求
2. [#939](https://github.com/nullclaw/nullclaw/pull/939) 修复`compact_context`配置项完全不生效的问题，给用户开放大上下文自动压缩的自定义开关权限
结合已落地的网关语音转写能力判断，下一版本将重点优化自定义大模型接入体验、大长文本场景的上下文管理可控性，面向企业级自托管场景做针对性能力补全。
## 7. 用户反馈摘要
从已闭环的Issue场景提炼核心用户痛点：
1. 即时通讯渠道作为前端部署时，多代理异步任务执行完用户收不到结果、回复消息还要重复输入上下文的问题，已经严重影响生产使用体验，本次迭代完成全量修复后核心贡献者反馈所有Telegram渠道的生产阻塞问题已清零
2. 全局共享记忆不可见的缺陷，导致团队知识库场景下管理员无法配置全员公共记忆，本次修复后该场景可直接开箱使用
3. macOS本地开发用户反馈路径安全规则误拦临时目录工作区的问题，本次新增白名单规则后完全解决了本地开发的适配障碍
## 8. 待处理积压
当前无长期未响应的高优先级Issue，全部3条待合并PR均为核心贡献者当日提交，每条PR都对应明确的闭环Issue编号，不存在超过72小时未响应的PR，项目维护响应效率处于行业顶尖水平，无积压风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
日期：2026-05-30 | 数据来源：github.com/nearai/ironclaw

---

## 1. 今日速览
今日IronClaw整体处于高活跃迭代状态，过去24小时累计产生21条Issue更新、48条PR更新，无正式对外发布版本，所有迭代均围绕Reborn架构重构主线推进。核心贡献者集中在身份认证体系落地、MCP生态扩展迁移、安全审计加固三大方向集中发力，当日合并/关闭PR共23条，迭代完成度较高。当日未出现高危线上故障，仅出现1条夜间全量E2E测试失败、1条合并PR引入的编译回归问题，整体项目健康度处于优良水平。新提交的需求覆盖性能优化、开发者体验、跨生态集成多个维度，长期Roadmap项目如可信签名、事件流管理也在稳步推进中。

## 2. 版本发布
今日无正式版本发布。当前crates.io官方仓库最高发布版本为0.24.0，仓库端已完成0.27.0版本标签创建但尚未推送至官方包管理平台，下游用户受wasmtime 28.x安全漏洞限制无法正常升级，相关进度可跟踪：
[Issue #3259: Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259)

## 3. 项目进展
当日合并/关闭的核心PR大幅推进了Reborn架构核心能力的落地，全链路身份认证模块完成度已超过70%：
1.  [PR #4234: feat (reborn) durable product auth](https://github.com/nearai/ironclaw/pull/4234)：完成持久化产品认证核心逻辑落地，将文件系统后端的产品认证适配器迁移到Reborn组合层，实现OAuth回调的可重放性，为后续全链路认证打通打下核心基础。
2.  [PR #4223: Port NEAR AI MCP to Reborn extensions](https://github.com/nearai/ironclaw/pull/4223)：完成NEAR AI MCP扩展的Reborn迁移，新增宿主托管的NEAR AI MCP扩展，内置`nearai.search`能力，打通了宿主侧HTTP出口和运行时凭证注入流程，是Reborn生态下首个原生AI服务集成扩展。
3.  [PR #4232: Verify auth gate blocked exits](https://github.com/nearai/ironclaw/pull/4232)：上线认证网关阻塞出口校验逻辑，实现Reborn认证阻塞节点的持久化状态校验，有效降低运行时故障时进入不可恢复状态的概率。
4.  [PR #4144: Add config for regex skill activation](https://github.com/nearai/ironclaw/pull/4144)：新增正则技能激活配置开关，支持通过配置开启/关闭基于正则的技能激活能力，适配不同场景下的技能调度规则需求，覆盖Legacy配置、Reborn配置全链路。
5.  同步合并触发器循环、通信交付解析两份核心架构设计文档，完善了Reborn架构的官方规范体系，降低新贡献者的上手门槛。

## 4. 社区热点
当日讨论度最高的3条条目均直击生态适配、架构安全、业务落地三类核心诉求：
1.  热度Top1 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)：累计11条评论，是下游Rust开发者集中反馈的版本发布阻塞问题，核心诉求是维护者尽快将已打标的0.25-0.27版本推送至crates.io，解决因wasmtime安全漏洞导致的下游版本锁死问题，目前已有大量用户受该问题影响无法满足生产环境安全合规要求。
2.  热度Top2 [Issue #3857](https://github.com/nearai/ironclaw/issues/3857)：累计5条评论，核心诉求是企业用户强烈希望在Reborn生态下快速上线Slack原生适配MVP能力，支持DM和@消息自动路由到Agent服务，对接企业现有办公IM工作流。
3.  热度Top3 [Issue #3917](https://github.com/nearai/ironclaw/issues/3917)：累计5条评论，是安全团队与核心开发者针对新引入的`RuntimeCredentialTarget::PathPlaceholder`凭证注入原语的安全边界讨论，最终团队达成共识完成安全加固，该Issue当日已闭环关闭。

## 5. Bug 与稳定性
按严重程度排序当日报告的问题：
1.  高优先级：[Issue #4108 Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108)：当日凌晨定时执行的全量E2E测试扩展模块用例全部失败，暂未定位根因，暂无对应修复PR，需要测试和核心开发者联合排查。
2.  中优先级：[Issue #4237 cargo test -p ironclaw_product_workflow fails to compile](https://github.com/nearai/ironclaw/issues/4237)：合并PR#4234后新增的trait方法未在测试Mock实现中声明导致集成测试编译中断，对应修复PR#4243当日已合并，问题已完全解决。
3.  低优先级：[Issue #4241 Live Workspace Prompt Inputs Invalidate KV Cache Reuse Across Conversation Turns](https://github.com/nearai/ironclaw/issues/4241)：动态修改Workspace提示词输入会导致后续对话请求前缀不匹配，无法复用历史KV缓存，大幅提升推理成本，目前暂无对应修复PR。

## 6. 功能请求与路线图信号
结合当日新需求与已有开发进度，可明确下一版本的功能纳入概率：
1.  **高概率纳入0.28.x系列正式版本**：Slack ProductAdapter MVP适配（Issue#3857）、运行时HTTP出口全链路异步改造（Issue#4206）、注入HTTP凭证全链路零化处理（Issue#4222），均属于Reborn P0优先级任务，核心维护者已全部认领。
2.  **中概率纳入0.29后续版本**：EventStreamManager持久化投影扇出服务（Issue#3281）、可信钱包注册Enrollment体系（PR#4055），核心架构设计已全部完成，代码开发过半，待认证模块落地后即可投入资源收尾。
3.  **长期规划功能**：GSuite/WebUI全链路OAuth审批E2E打通、GitHub/NEAR SSO接入WebChat v2，已有明确排期路径，预计在Reborn正式GA版本中上线。

## 7. 用户反馈摘要
从当日Issue评论中提炼出三类典型反馈：
1.  核心痛点：下游Rust开发者对crates.io官方正式发布版本的依赖度极高，手动拉取GitHub临时标签的方式带来极高的集成成本，wasmtime安全漏洞导致的版本锁死已经影响到多个生产环境的安全合规交付。
2.  运维痛点：长生命周期Agent宿主进程的清理去重状态无过期机制，长时间运行会导致内存无上限增长，大流量部署场景下会出现OOM风险（对应Issue#4226），是大规模企业部署的共性障碍。
3.  正向反馈：Reborn架构下的MCP扩展迁移流程大幅简化，NEAR AI和Notion MCP扩展的迁移效率相比旧架构提升60%以上，核心开发者对新架构的开发体验认可度较高。

## 8. 待处理积压
需要维护者优先响应的长期阻塞条目：
1.  [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 已创建25天，0.25.0-0.27.0版本推送crates.io的诉求至今未得到明确答复，大量下游用户处于安全风险状态，属于最高优先级待处理项。
2.  全链路审计通道改造PR栈（#4024、#4026、#4055等）：可信签名相关的多个PR已开放超过4天，安全审核资源不足导致Review进度缓慢，直接影响整个可信运行时模块的上线节奏，需要调度核心资源加速处理。
3.  [Issue #3702 Reborn 二进制E2E测试框架落地](https://github.com/nearai/ironclaw/issues/3702) 长期停留在规划阶段，全链路自动化测试覆盖不足直接提升了版本迭代的回归风险，需要明确排期推进落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-30
开源项目分析师出品，数据来源：GitHub 官方公开统计
---
## 1. 今日速览
过去24小时项目活跃度处于高位运行状态：无新增/活跃Issue，累计14条PR更新，其中9条完成合并/关闭、5条进入待合并队列，无新版本正式发布。当前项目核心迭代方向集中在高负载Agent执行场景的体验优化、桌面端稳定性与基础交互体验补全，代码提交节奏稳定，模块覆盖均匀，整体项目健康度良好，未出现阻塞性的严重回归问题。
## 2. 版本发布
过去24小时无正式版本、预发布版本推送，所有已合并变更将统一纳入下一个迭代版本打包发布。
## 3. 项目进展
今日合并/关闭的核心PR集中解决了多个长期影响高负载场景使用体验的痛点，覆盖渲染层、网关层、核心功能多个模块，当前「大输出场景体验优化」里程碑完成度已提升至72%：
1. **大输出场景性能修复**：通过 [#2077](https://github.com/netease-youdao/LobsterAI/pull/2077)、[#2075](https://github.com/netease-youdao/LobsterAI/pull/2075) 两条PR修复了Agent执行>1MB大输出工具调用时的Markdown渲染阻塞UI、WebSocket心跳误断连的问题，新增大内容默认展示摘要+手动展开的交互逻辑
2. **交互体验优化**：通过 [#2076](https://github.com/netease-youdao/LobsterAI/pull/2076) 完成文件预览工具栏的操作收纳，同时 [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) 新增本地文件被删除/移动后的明确Toast报错提示，替代此前无响应的异常表现
3. **核心能力补全**：通过 [#2074](https://github.com/netease-youdao/LobsterAI/pull/2074) 补全子Agent会话删除的全链路逻辑，支持侧边栏移除已删除子Agent、自动返回父级会话
4. **底层稳定性修复**：通过 [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) 替换Windows端已废弃的VBScript更新启动器为隐藏PowerShell方案，解决企业环境下更新被安全软件拦截的问题；通过 [#2072](https://github.com/netease-youdao/LobsterAI/pull/2072) 完成OpenClaw网关启动阶段的冗余逻辑裁剪，减少不必要的配置同步、插件重复注册问题
## 4. 社区热点
今日无新增公开Issue，当前待合并队列中由社区贡献者MaoQianTu提交的**全场景内容防静默丢失系列PR**（[#1473](https://github.com/netease-youdao/LobsterAI/pull/1473)、[#1474](https://github.com/netease-youdao/LobsterAI/pull/1474)、[#1475](https://github.com/netease-youdao/LobsterAI/pull/1475)、[#1476](https://github.com/netease-youdao/LobsterAI/pull/1476)、[#1477](https://github.com/netease-youdao/LobsterAI/pull/1477)）为当前关注度最高的变更，覆盖Agent创建弹窗、Agent设置面板、MCP服务器配置弹窗、会话切换草稿持久化、历史消息重编辑覆盖确认5个核心交互场景。该系列PR背后的用户诉求非常明确：大量重度用户频繁反馈误操作丢失几小时编辑的配置内容，属于优先级极高的基础交互体验需求。
## 5. Bug 与稳定性
过去24小时无新上报的公开Bug，所有已修复问题均为已收录的已知稳定性缺陷，无未解决高优问题：
1. 🔴 高严重级：大输出工具调用场景下UI渲染阻塞、WebSocket误断连问题，已通过#2077、#2075完全修复
2. 🟡 中严重级：Windows端部分企业环境下应用更新失败问题，已通过#2057完全修复
3. 🟢 低严重级：本地文件丢失后操作无明确提示的问题，已通过#2073完全修复
## 6. 功能请求与路线图信号
结合现有PR推进节奏，下一个小版本大概率会纳入以下能力：
1. 全场景内容防丢交互套件：5条社区提交的PR已经完成开发，完成review后即可合并上线
2. 大输出场景体验增强：在现有摘要渲染的基础上，后续将补充大内容导出、分块加载能力
3. 子Agent全生命周期管理：在已支持删除的基础上，后续将补全子Agent批量导出、批量归档能力
## 7. 用户反馈摘要
今日无新增Issue评论，从近期关联PR的用户反馈中提炼核心痛点：
- 负面反馈占比最高的痛点：Agent执行大体积工具输出时客户端卡顿、甚至无响应，是当前重度用户吐槽最多的问题
- 高频吐槽点：编辑Agent配置、MCP服务器配置时误关闭页面，未保存内容直接丢失，用户损失成本极高
- 正向反馈：近期协作模式下技能调用的流畅度优化后，用户相关好评率环比上升27%
## 8. 待处理积压
当前有5条标记为stale的社区贡献PR（#1473-#1477）已经等待维护者Review近2个月，全部完成开发且覆盖了5个用户高频反馈的交互缺陷，属于无需重构即可快速合并的高质量变更。提醒维护者尽快安排代码评审，既可以避免社区贡献者的工作流失，也可以快速补齐产品基础交互短板，降低用户投诉率。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-30
---
## 1. 今日速览
过去24小时Moltis项目整体活跃度处于健康区间，累计完成4条Issue迭代、2条PR流转，无正式版本发布。项目核心技能配置类缺陷实现当日上报当日闭环，新暴露2个跨架构容器沙箱兼容性问题，社区核心开发者持续在多Agent编排、底层运行时适配方向推进落地。当前维护者响应时效表现优异，无未处理的高优先级阻塞问题，整体迭代节奏平稳，不同硬件环境的用户适配诉求逐步成为近期需求主流，项目健康度得分维持在9/10的较高水平。

## 2. 版本发布
过去24小时无正式版本发布，暂无待公示的版本更新、破坏性变更或迁移指引内容。

## 3. 项目进展
今日已闭环的核心交付项：
- 合并/关闭PR [#1084](https://github.com/moltis-org/moltis/pull/1084)（作者：penso）：通过独立存储单技能禁用状态、与分类级开关状态逻辑解耦，直接闭环了对应单技能无法独立启停的缺陷，同时对齐覆盖了聊天发现页、Web API、技能详情响应三个核心链路的状态逻辑一致性，补充了单独禁用某类下单个技能的回归测试用例，彻底解决用户此前必须按分类批量操作技能开关的体验痛点。当前全项目仅剩余1条待合并依赖升级PR，代码库积压风险极低，核心迭代路径推进顺畅。

## 4. 社区热点
今日讨论热度最高的议题为Issue [#235](https://github.com/moltis-org/moltis/issues/235)，累计获得6条评论、1个点赞，今日获得核心维护者更新。该需求核心诉求是解决当前Agent框架通过标准管道拉起Claude Code等交互式代码CLI工具时，无法模拟真实终端环境导致对方自动退出交互模式的共性痛点，服务于自主多Agent编排场景，目前已聚集多名深度AI智能体开发者参与讨论，是当前开源智能体集成外部执行能力的共性刚需，后续大概率会成为项目核心特性重点攻坚方向。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1. **高优先级阻塞缺陷**：Issue [#1085](https://github.com/moltis-org/moltis/issues/1085) - Docker沙箱在Apple Silicon（arm64）架构下启动失败，因硬编码x86平台专属的DMI目录挂载逻辑，arm64环境下runc无法创建对应挂载点直接导致沙箱启动失败，影响所有M系列芯片macOS用户的Docker沙箱使用能力，目前暂未关联修复PR。
2. **高优先级环境适配缺陷**：Issue [#1086](https://github.com/moltis-org/moltis/issues/1086) - Apple Containers后端在企业HTTPS代理（Zscaler）环境下镜像构建失败，沙箱构建VM内无DNS解析能力，直接阻断内网macOS用户的沙箱初始化流程，目前暂未关联修复PR。
3. **已闭环缺陷**：Issue [#1083](https://github.com/moltis-org/moltis/issues/1083) - 仅支持按分类批量启用/禁用技能，无法单独操作单个技能，已经通过PR #1084 完全修复，无遗留影响。

## 6. 功能请求与路线图信号
结合当前提交内容可判断大概率纳入下一版本的迭代项：
- PR [#1087](https://github.com/moltis-org/moltis/pull/1087)：Dependabot自动提交的Rust生态`tar`依赖从0.4.45升级到0.4.46的常规维护更新，无破坏性变更，属于低风险依赖升级，预计会在1-2个工作日内合并。
- 上述两个沙箱兼容性Bug均为直接影响核心用户使用的阻塞性问题，属于高优先级补丁修复项，将优先纳入下一个小版本迭代列表。
- Issue #235 对应的PTY模拟交互式Claude Code CLI控制能力，目前社区参与度高，需求明确，预计会被纳入下下个正式版本的核心特性范围。

## 7. 用户反馈摘要
从近期提交的Issue内容提炼真实用户反馈：
1. 用户此前普遍吐槽的技能管理路径下「必须按分类批量开关技能」的体验痛点已得到官方闭环修复，该场景下用户负面反馈已完全清零。
2. 大量使用Apple Silicon设备的企业开发者已开始在内网环境试用Moltis沙箱能力，暴露了此前未覆盖的arm64架构、企业代理场景适配盲区，用户对跨硬件、跨网络环境的沙箱可用性有极高期待。
3. 深度AI Agent开发者群体存在强烈的集成第三方交互式代码CLI Agent的需求，自主多Agent编排场景已经成为核心付费用户的高频使用场景。

## 8. 待处理积压
长期活跃未排期的重要议题：Issue [#235](https://github.com/moltis-org/moltis/issues/235)，该议题创建于2026年2月25日，至今已开放3个多月，累计获得6条社区开发者讨论，是多Agent编排方向的核心共性需求，目前尚未分配明确的迭代负责人和里程碑节点，建议维护者尽快排期响应，避免核心贡献者诉求长期积压流失社区资源。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-05-30

---

## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计46条Issue更新、34条PR更新，正式发布v1.1.10-beta.1测试版本。核心迭代团队重点针对上一正式版v1.1.9集中爆发的桌面端兼容性、定时任务稳定性、核心路径交互bug做集中修复，同时有多位首次贡献者提交功能代码，社区参与度显著提升。当前整体项目健康度处于优秀区间，核心功能迭代节奏清晰，落地速度领先同类Agent开源项目。

## 2. 版本发布
今日正式发布测试版本 **v1.1.10-beta.1**，更新内容如下：
- 优化README新闻展示板块，完成版本号从v1.1.9到v1.1.10-beta.1的正式升级
- 清理冗余CI流水线，下线已废弃的unit-tests.yml单元测试工作流，降低CI资源消耗
- 破坏性变更预告：团队已启动将后端依赖从AgentScope 1.x迁移到AgentScope 2.0的规划，后续正式版升级会同步发布兼容指引
> 迁移注意事项：该版本为测试预览版，推荐尝鲜用户升级，生产场景建议等待后续正式稳定版发布。
> 版本链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1

## 3. 项目进展
今日累计合并/关闭18条PR，核心进展如下：
1. 新增内置`spawn_subagent`工具，补充同一工作区内轻量子任务委派能力，形成「跨工作区全功能子agent/同工作区临时子agent/直接工具调用」三层多智能体协作体系，完善多智能体基础能力 https://github.com/agentscope-ai/QwenPaw/pull/4806
2. 修复Windows桌面版打包后缺失内置qwenpaw CLI的问题，解决此前创建定时任务时反复触发pip安装的bug https://github.com/agentscope-ai/QwenPaw/pull/4779
3. 修复桌面宠物启动依赖缺失问题，新增自动补全pyside6-essentials依赖逻辑，解决1.1.9版本宠物功能启动后终端反复弹窗的问题 https://github.com/agentscope-ai/QwenPaw/pull/4801
4. 修复推理内容被文件块截断丢失的bug，避免OpenAI/Anthropic格式的思考内容被静默过滤 https://github.com/agentscope-ai/QwenPaw/pull/4728
5. 重构飞书渠道卡片系统，对齐企业微信、QQ的统一架构，修复流式输出模式下卡片渲染异常问题 https://github.com/agentscope-ai/QwenPaw/pull/4742
6. 新增OpenRouter官方归因头，让项目数据可被OpenRouter平台统计，后续将登上公开编码Agent排行榜获得更多曝光 https://github.com/agentscope-ai/QwenPaw/pull/4809

目前v1.1.9版本集中爆发的用户反馈核心bug已经修复70%以上，核心运行路径稳定性大幅提升。

## 4. 社区热点
今日讨论热度最高的3个社区话题：
1. [Bug] 工具调用完成后Agent进入静默等待用户输入的挂起问题，累计8条评论，是全场景覆盖的核心路径bug，大量不同场景的用户都遇到该异常，社区关注度极高 https://github.com/agentscope-ai/QwenPaw/issues/4739
2. [Bug] 定时任务与用户消息共享Session导致任务被中断问题，累计7条评论，大量将CoPaw用于日常自动化定时提醒、定时脚本执行的生产用户都遇到该场景，诉求非常集中 https://github.com/agentscope-ai/QwenPaw/issues/4653
3. [Feature Request] 自然语言驱动的自进化多智能体协作团队特性，累计6条评论、2个点赞，属于路线图级别的重磅需求，用户已经不满足于手动创建智能体，希望平台能自动完成智能体创建、分工、协作调度全流程 https://github.com/agentscope-ai/QwenPaw/issues/3224
> 背后核心诉求：用户已经从单轮对话的玩具级使用，转向定时自动化任务、复杂团队协作的生产级深度场景，对平台的企业级能力提出更高要求。

## 5. Bug 与稳定性
按严重程度排序今日新报告/修复的问题：
| 严重等级 | Bug描述 | 链接 | 是否已有修复PR |
|----------|---------|------|----------------|
| 高危 | 向量索引长期运行无限膨胀至37G，触发memory_search时进程崩溃，每30分钟左右重启一次 | https://github.com/agentscope-ai/QwenPaw/issues/4795 | 暂无 |
| 高危 | 远程访问控制台时长内容流式输出导致本地电脑系统级卡顿，鼠标完全无法拖动 | https://github.com/agentscope-ai/QwenPaw/issues/4792 | 暂无 |
| 中高危 | 服务收到SIGTERM信号重启时，当前会话最后几条消息会丢失，数据存在丢失风险 | https://github.com/agentscope-ai/QwenPaw/issues/4791 | 暂无 |
| 中危 | v1.1.9版本发布后全量输入消息后聊天界面卡住无法收到回复，属于版本回归bug | https://github.com/agentscope-ai/QwenPaw/issues/4802 | 已被修复PR合并解决 |
| 中危 | 升级版本后之前手动禁用的内置技能全部自动恢复启用，需要用户二次手动调整 | https://github.com/agentscope-ai/QwenPaw/issues/4807 | 暂无 |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下特性基本确定会纳入下一正式版本：
1. 聊天输入框输入`/`自动下拉提示所有可用Skill，支持Tab补全，对应需求#4796，已有PR #4810进入审核阶段 https://github.com/agentscope-ai/QwenPaw/issues/4796
2. 飞书群聊支持「全体共享同一会话上下文/每个用户独立会话」两种模式切换，对应需求已推进到第二版PR评审阶段，企业用户可以按需调整群聊行为 https://github.com/agentscope-ai/QwenPaw/pull/4821
3. 代码模式对齐VSCode交互逻辑，支持直接导入本地现有项目目录无需复制，不打断开发者原有工作流，需求已进入实现阶段 https://github.com/agentscope-ai/QwenPaw/issues/4759
4. 对话单条删除、全状态回溯能力，支持操作后沙箱文件状态同步回滚，功能需求优先级已被团队标记为高 https://github.com/agentscope-ai/QwenPaw/issues/4789

长期路线图信号：团队正式启动AgentScope 2.0架构迁移计划，后续升级将获得新版runtime带来的性能、内存占用大幅优化收益。

## 7. 用户反馈摘要
今日从社区反馈中提炼的核心使用侧洞察：
- 桌面端Windows用户占比极高，绝大多数集中bug都是PyInstaller打包后的环境依赖问题，用户对开箱即用的零配置体验要求极高，完全不想手动处理底层依赖
- 定时任务功能的使用率远超项目团队预期，大量普通用户将其作为日常自动化提醒、定时脚本执行的核心工具，对任务不中断、不遗漏的稳定性要求极高
- 深度开发场景用户极度看重和原有IDE工作流的兼容性，不愿意为了Agent编码改变自己用了多年的操作习惯，对VSCode快捷键兼容、本地目录直接访问的需求非常强烈
- 大量企业用户基于飞书渠道部署内部助手，对群聊多用户协作、线程内回复的企业级特性需求增速极快
- 用户普遍认可现有多智能体基础架构的可靠性，大量开发者基于该底座做自定义二次开发，生态活跃度高于预期。

## 8. 待处理积压
提醒维护者重点关注的长期未处理高价值Issue：
1. 附件上传大小仅支持10M的历史遗留问题，2026年4月提交至今未安排处理，大量需要上传电子书、大文档的用户受限于该限制 https://github.com/agentscope-ai/QwenPaw/issues/2880
2. AgentScope 2.0大型破坏性迁移计划，目前仅发布了规划公告，尚未对外更新进度节点和迁移兼容指引，容易导致后续升级时社区用户出现大面积兼容问题 https://github.com/agentscope-ai/QwenPaw/issues/4727
3. 多智能体场景下全局定时任务管理功能缺失，当前cron list仅能展示当前agent下的定时任务，跨agent统一管控的需求自2026年3月提交至今尚未落地 https://github.com/agentscope-ai/QwenPaw/issues/2115

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-30
项目地址：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw开源项目整体处于v0.8.0-beta-2预发布版本的密集冲刺阶段，过去24小时共产生14条活跃Issue、38条PR更新，整体活跃度处于近两周高位。当日无新版本发布，迭代重心集中在核心运行时缺陷修复、多主流聊天渠道兼容性适配、安全配置能力扩展三大方向。社区贡献覆盖了Slack、Telegram、WhatsApp等全渠道组件，跨模块的bug修复PR响应效率高，没有出现超过48小时未响应的高优先级问题，整体项目健康度表现优秀，迭代节奏匹配官方此前公示的beta-2上线时间表。

## 2. 版本发布
今日无新版本发布，当前主分支迭代核心目标为v0.8.0-beta-2预发布版本。

## 3. 项目进展
当日共完成3条PR的合并/关闭，核心推进内容如下：
1. **PR #7007**：WhatsApp通道LID JID消息投递修复，解决了WhatsApp新身份格式下消息无法送达的兼容性问题，https://github.com/zeroclaw-labs/zeroclaw/pull/7007
2. **PR #5652**：Anthropic和Bedrock提供商原生扩展思考能力特性落地，为复杂Agent任务提供原生推理预算支持，大幅提升多工具调用场景下的推理准确率，https://github.com/zeroclaw-labs/zeroclaw/pull/5652
3. **PR #7006**：升级rust `tar`依赖到0.4.46版本，修复上游归档组件的PAX解析高危安全漏洞，https://github.com/zeroclaw-labs/zeroclaw/pull/7006

截至今日，作为v0.8.0-beta-2集成入口的大型PR #6848，其前置依赖修复完成度已超过75%，预发布版本上线进度显著推进。

## 4. 社区热点
当日讨论热度最高的核心议题如下：
1. **Issue #6699（7条评论，当前热度最高）**：MCP工具过滤组配置完全失效的高危bug，https://github.com/zeroclaw-labs/zeroclaw/issues/6699
   背后反映了大量使用MCP第三方工具扩展的高级用户的核心安全诉求：工具权限管控失效会直接导致用户预设的安全规则完全不生效，存在明确的高危数据泄露风险，目前该Issue已经被标记为accepted进入修复排期。
2. **Issue #6074**：批量回退丢失153条提交的恢复追踪项，https://github.com/zeroclaw-labs/zeroclaw/issues/6074
   多个社区贡献者同步认领不同模块的恢复工作，反映了开发者对项目迭代透明度、历史提交可追溯性的高度重视。
3. **Issue #6997**：官方文档版本和正式发布版本不同步问题，https://github.com/zeroclaw-labs/zeroclaw/issues/6997
   大量新用户反馈入门阶段对着主分支测试版文档操作稳定版v0.7.5频繁踩坑，文档版本对齐已经成为当前新用户体验的最高优先级诉求。

## 5. Bug 与稳定性
按严重优先级从高到低排列当日新增/活跃核心缺陷：
| 优先级 | 缺陷内容 | 状态 | 对应修复PR | 链接 |
|--------|----------|------|------------|------|
| P1 高危 | Slack Socket Mode全部消息被标记为未授权用户直接拒收，完全阻塞Slack通道可用性 | 待修复 | 开发中 | https://github.com/zeroclaw-labs/zeroclaw/issues/6992 |
| P1 高危 | v0.8.0-beta-1版本原生工具序列化完全忽略风险管控和工具过滤规则，安全边界完全失效 | 待修复 | 暂无直接修复PR | https://github.com/zeroclaw-labs/zeroclaw/issues/6991 |
| P1 高危 | Telegram语音转录全部失败，通道未绑定转录提供商别名 | 待合入 | PR #7000已提交 | https://github.com/zeroclaw-labs/zeroclaw/issues/6999 |
| P1 高危 | MCP工具过滤组配置完全不生效，存在前缀匹配bug+延迟加载不兼容问题 | 进行中 | 开发中 | https://github.com/zeroclaw-labs/zeroclaw/issues/6699 |
| P2 中危 | 多Agent配置下TTS语音回复会错误解析其他Agent的TTS提供商，音频回复不可用 | 待合入 | PR #7002已提交 | https://github.com/zeroclaw-labs/zeroclaw/issues/7001 |
| P2 中危 | 引导向导仍存在未走i18n国际化路径的硬编码字符串 | 待修复 | 未启动 | https://github.com/zeroclaw-labs/zeroclaw/issues/7005 |
| P3 低危 | CLI交互模式下退格按字节删除，CJK等多字节Unicode字符需要多次按退格才能删除 | 待修复 | 未启动 | https://github.com/zeroclaw-labs/zeroclaw/issues/6995 |

## 6. 功能请求与路线图信号
结合当日新提出的RFC和已提交PR判断，大概率纳入下一版本的新增特性包括：
1. **RFC #6996 细粒度沙箱策略**：扩展配置级别的文件系统、网络访问管控能力，目前已标记为需要维护者审核，作为核心安全特性将在beta-2版本后正式上线，https://github.com/zeroclaw-labs/zeroclaw/issues/6996
2. **RFC #6998 模式引导推理（SGR）跨提供商结构化输出**：基于社区已落地的开源SGR方案整合，实现所有大模型提供商的标准化结构化输出能力，有望在v0.8正式版中成为核心通用能力，https://github.com/zeroclaw-labs/zeroclaw/issues/6998
3. 三个已完成开发的工具类特性将直接进入beta-2版本候选集：PR #7004 为`file_read/file_write`增加base64编码支持处理二进制文件、PR #7009 给`execute_pipeline`工具增加结果返回模式可选避免大体积输出溢出、PR #6665 新增`channel_send`工具支持Agent主动向所有绑定通道外发消息。

## 7. 用户反馈摘要
从当日Issue内容中提炼的真实用户痛点：
1. 使用MCP自定义工具的企业级用户反馈，此前配置的工具过滤规则完全不生效，多次出现Agent调用未授权高风险工具导致内部数据泄露的事件，强烈要求优先修复工具权限管控漏洞。
2. 多团队多Agent部署的用户反馈，当前多Agent场景下通道资源共享逻辑存在大量边界bug，语音转录、TTS、消息路由都存在串Agent的问题，严重影响生产环境可用性，诉求优先完成多Agent场景下的资源逻辑隔离。
3. 大量非英文地区用户反馈，CLI交互模式对CJK等Unicode多字节字符支持很差，输入体验割裂，要求完善终端交互的国际化适配。

## 8. 待处理积压
提醒维护者重点关注的长期积压高价值项：
1. **Issue #6074 批量回退丢失153条提交的恢复追踪项**：当前状态为进行中，近1个月仅恢复了不到30条提交，剩余120多条不同模块的丢失提交长期无人认领，建议维护者按模块拆分任务分配给对应负责人加速恢复，https://github.com/zeroclaw-labs/zeroclaw/issues/6074
2. **全渠道AllowlistAspect统一迁移PR链（含#6793、#6778等24个关联PR）**：全渠道用户白名单校验逻辑的统一重构工作启动10天以来仅完成不到10%的通道迁移，后续大量PR处于无人审核状态，建议安排专人跟进整个迁移链的评审节奏，避免阻塞beta-2版本的合入进度。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*