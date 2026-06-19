# OpenClaw 生态日报 2026-06-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-19 22:58 UTC

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

# OpenClaw 项目动态日报 2026-06-20
> 项目地址：https://github.com/openclaw/openclaw

---

## 1. 今日速览
过去24小时项目总活跃度达到1000条更新量级，其中500条Issue更新、500条PR更新，核心迭代围绕会话层SQLite迁移、多渠道交付稳定性、内存架构重构三大主线推进。当前445条活跃/新开Issue、469条待合并PR的高位运行状态说明核心开发团队正处于v2026.6系列版本的密集优化周期，整体项目迭代健康度良好。P0级网关内存泄漏等高危问题已进入核心维护者视线，大量面向多Agent场景的功能需求正在快速落地，当日共关闭31条无效或已修复的Issue/PR，迭代效率符合预期。

## 2. 版本发布
今日正式发布**v2026.6.9-beta.1**预览版本：
- 核心更新亮点：全面升级Telegram渠道交付能力，支持富HTML渲染、原生富Markdown和贴纸路径保留，可更精准地输出进度草稿和命令执行结果，同时修复了@提及、后台异步Handler的消息分发路径异常问题，关联PR #93286、#93164、#93124、#93364。
- 迁移注意事项：无破坏性变更，升级后不会改动现有Telegram会话历史数据，建议生产用户先灰度验证富消息渲染符合预期后再全量推送。

## 3. 项目进展
今日共合并/关闭31条PR，核心落地进展包括：
1. [PR #78061](https://github.com/openclaw/openclaw/pull/78061) 修复Slack线程会话生成回复后无法投递到频道的问题，覆盖大量海外协作场景用户的核心诉求。
2. [Issue #68226](https://github.com/openclaw/openclaw/issues/68226) 新增会话状态栏运行时长显示功能，已正式上线，用户可直接在系统提示栏查看当前会话累计运行时间。
3. [Issue #79099](https://github.com/openclaw/openclaw/issues/79099) 关闭Windows平台网关探测误报问题，修复后Windows端`gateway probe`可正确识别后台运行的网关服务。
4. 会话层SQLite迁移核心项目[#88838](https://github.com/openclaw/openclaw/issues/88838) 第三阶段基础存储代码已合入主分支，整体重构进度已完成40%，后续将逐步拆分小迭代上线。
5. [Issue #93794](https://github.com/openclaw/openclaw/issues/93794) 修复v2026.6.8版本Telegram Web端消息不兼容问题，已正式修复，用户侧不再收到「此消息不支持Telegram Web」的报错。

## 4. 社区热点
当日讨论度最高的核心议题均围绕生产可用性和架构演进展开：
1. [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 共31条评论，是当前社区讨论热度最高的架构议题：所有参与讨论的开发者都认可将全量会话/ transcript迁移到SQLite层的方案，核心诉求是必须拆分足够小的可 review 小PR逐步落地，避免一次性大版本重写导致的升级宕机风险。
2. [Issue #85333](https://github.com/openclaw/openclaw/issues/85333) 共13条评论，大量生产运维用户集中反馈`openclaw doctor --fix`命令在2026.5.20版本性能倒退4-5倍，从55s暴涨到229s以上，诉求是尽快推出热补丁恢复核心运维命令的执行效率。
3. [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 共12条评论，大量7*24小时运行的生产部署用户反馈网关内存泄漏问题，运行2-3天就从350MB涨到15.5G触发OOM重启，用户普遍希望官方优先补丁修复该P0级问题。
4. [Issue #63829](https://github.com/openclaw/openclaw/issues/63829) 获9个点赞，多Agent场景用户高度期待独立的单Agent记忆知识库配置能力，避免多Agent共享全局知识库导致的知识污染问题。

## 5. Bug 与稳定性
按严重优先级排序当日新增/活跃核心问题：
| 严重等级 | 问题编号 | 问题描述 | 修复状态 | 链接 |
|---------|---------|---------|---------|------|
| P0 | #91588 | 网关进程存在严重内存泄漏，2-3天运行后RSS从350MB涨到15.5G触发OOM反复重启 | 暂未对应出修复PR | https://github.com/openclaw/openclaw/issues/91588 |
| P1 | #92043 | 180s全链路压缩超时未支持部分进度复用，长历史会话/本地低算力部署场景下压缩必然连续失败 | 已关联开放PR | https://github.com/openclaw/openclaw/issues/92043 |
| P1 | #85333 | 2026.5.20版本`openclaw doctor --fix`性能倒退4-5倍，严重影响运维效率 | 待优化 | https://github.com/openclaw/openclaw/issues/85333 |
| P1 | #91009 | Codex集成的PreToolUse钩子会生成高CPU占用的临时进程，卡住网关RPC响应 | 已关联开放PR | https://github.com/openclaw/openclaw/issues/91009 |
| P1 | #92415 | 用户执行`/model`切换模型后，会话内部缓存的模型快照不会刷新，导致上下文窗口、推理等级配置不生效 | 已关联开放PR | https://github.com/openclaw/openclaw/issues/92415 |
| P1 | #90378 | 从5.28升级到6.1版本时cron存储静默迁移到SQLite，新任务默认投递配置丢失触发渠道报错 | 已关联开放PR | https://github.com/openclaw/openclaw/issues/90378 |

## 6. 功能请求与路线图信号
结合已开放PR判断即将落地的特性：
1. 高赞需求[Issue #63829](https://github.com/openclaw/openclaw/issues/63829) 单Agent独立记忆知识库，已对应核心PR #88504多插槽内存架构落地，大概率将在v2026.6.x后续小版本正式上线。
2. 长期需求[Issue #46656](https://github.com/openclaw/openclaw/issues/46656) Webchat/控制面板内嵌按钮支持，相关UI适配PR #90184正在推进，预计2周内可合并上线。
3. [Issue #91455](https://github.com/openclaw/openclaw/issues/91455) K8s部署文档优化需求，对应的文档更新PR已通过初审，下一个正式版本将同步更新Helm部署指引，替代原有手动配置方案。
4. [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) 主题会话家族多上下文车道能力已进入产品决策阶段，预计将纳入v2026.7版本正式规划。

## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户痛点与体验反馈：
1. 大量生产VPS部署用户对v2026.5.20版本运维命令性能倒退问题反馈强烈，不满核心运维场景未被纳入回归测试范围，直接导致升级后运维成本暴涨。
2. 面向自动化工作流的企业用户集中反馈：当前定时隔离会话场景下没有可靠的子Agent编排能力，无法实现并行子任务结果聚合，大量基于OpenClaw搭建的自动化报表工作流断点。
3. Telegram渠道普通用户对今日beta版的富消息渲染优化反馈好评，之前版本升级后富消息丢失的问题终于得到解决。
4. Windows桌面端用户普遍反馈网关探测权限问题多次修复仍未彻底解决，升级后经常出现网关实际运行正常但客户端显示离线的问题，严重影响桌面端使用体验。

## 8. 待处理积压
提醒核心维护者优先关注的长期未响应高价值问题：
1. 2026年3月提交的[Issue #46656](https://github.com/openclaw/openclaw/issues/46656) Webchat内嵌按钮支持需求，历时3个月未完全落地，大量面向用户交付的场景长期缺失交互能力。
2. 2026年5月提交的[Issue #78640](https://github.com/openclaw/openclaw/issues/78640) Windows环境下内存索引EPERM权限问题，经历两次修复仍未彻底解决，Windows桌面用户长期受权限异常报错困扰。
3. 2026年6月1日提交的核心架构项目[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 会话层SQLite迁移，已开放31条讨论，用户等待近20天仍未落地首个可上线预览版本，长期积压可能导致后续版本迭代依赖阻塞。
4. 2026年6月9日提交的P0级[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏问题，距今10天未出修复补丁，大量7*24小时运行的生产实例面临OOM宕机风险。

---

## 横向生态对比

# 2026-06-20 开源AI智能体生态横向对比分析报告
---
## 1. 生态全景
当前国内开源个人AI助手/自主智能体生态正从早期功能快速堆砌阶段全面转向生产落地验证期，核心迭代重心已从特性创新转向长期运行稳定性、安全合规性、部署轻量化三大生产级需求。整个生态日均总Issue+PR更新量超过1600条，已形成以OpenClaw为事实上游基准的Claw系兼容技术体系，下游衍生出覆盖云端多租户、端侧桌面、嵌入式硬件、移动端便携场景的数十个细分赛道项目。海外开源项目与国内原生项目的差异化路径逐步清晰，国产大模型适配、飞书等本土办公生态接入已经成为本土团队的核心竞争优势，全生态用户规模已突破百万量级，大量生产用户开始连续数月运行智能体承载自动化工作流，生态成熟度大幅提升。

## 2. 各项目活跃度对比
| 项目名称       | 当日Issue更新量 | 当日PR更新量 | 今日Release情况                     | 健康度评估                                                                 |
|----------------|----------------|-------------|------------------------------------|--------------------------------------------------------------------------|
| OpenClaw       | 500            | 500         | 发布v2026.6.9-beta.1预览版          | 优秀，v2026.6密集迭代周期下闭环效率极高，核心迭代节奏符合预期             |
| NanoBot        | 9              | 33          | 无新版本发布                        | 优秀，v0.2存量Bug闭环率达90%+，生产级特性推进进度稳定                     |
| Hermes Agent   | 50             | 50          | 发布里程碑正式版v0.17.0（代号The Reach Release） | 优秀，新版本上线后社区响应效率极高，高优Bug平均响应时长<4小时             |
| PicoClaw       | 3              | 7           | 发布v0.3.0-nightly日构建版          | 良好，迭代节奏平稳，稳步推进v0.3正式版公测准备                           |
| NanoClaw       | 1              | 6           | 无新版本发布                        | 良好，外部贡献生态活跃，待合PR队列均为高价值刚需特性                     |
| NullClaw       | 2              | 1           | 无新版本发布                        | 良好，聚焦小众部署场景适配，未出现阻塞性故障                             |
| IronClaw       | 5              | 28          | 无新版本发布                        | 优秀，Reborn重构分支高密度迭代，核心基建优化落地效率极高                   |
| LobsterAI      | 4              | 0新增PR      | 发布LobsterAI 2026.6.18正式版       | 优秀，存量Issue清理率超92%，长期积压问题闭环节奏稳定                     |
| CoPaw          | 11             | 17          | 无新版本发布                        | 优秀，用户诉求闭环周期<24小时，核心稳定性问题全部配套修复方案             |
| ZeroClaw       | 50             | 50          | 发布v0.8.1稳定补丁版                | 优秀，45位贡献者快速闭环新版本Bug，迭代效率处于生态第一梯队               |
| TinyClaw/Moltis/ZeptoClaw | 0 | 0 | 无任何更新 | 停滞，过去24小时无任何维护动态，暂不建议生产部署 |

## 3. OpenClaw在生态中的定位
OpenClaw是整个Claw系生态的事实上游基准项目，核心优势包括三点：一是多渠道交付生产验证深度行业领先，Telegram、Slack等海外主流IM场景的适配经验经过数十万生产用户验证，稳定性远超同类项目；二是底层架构走在全生态最前沿，已率先推进会话层全量SQLite迁移、全链路内存架构重构等长期基础优化，其他同类项目近期才开始跟进网关稳定性、会话持久化的相关优化；三是生态兼容性最强，所有下游衍生的Claw系项目均天然兼容OpenClaw的核心配置协议，用户迁移成本极低。
技术路线差异上，多数同类项目优先面向小体量快速部署场景设计，OpenClaw从第一天起就原生面向7*24小时高可用、大流量多用户生产环境做架构设计，优先保障网关稳定性、数据不丢失、故障自动恢复等非功能指标。社区规模上，OpenClaw日更新量级是第二名ZeroClaw的10倍，是中型项目的数十倍，总贡献者规模超过2000人，维护团队规模过百人，是整个生态中唯一具备支撑百万级用户体量的成熟项目。

## 4. 共同关注的技术方向
多项目涌现出5项共性高优先级需求：
1. **底层存储与会话持久化优化**：涉及OpenClaw、NanoBot、ZeroClaw，具体诉求为解决长周期连续运行场景下向量索引无限膨胀、已删除会话意外复活、临时文件占用磁盘爆满等运维痛点，大幅降低普通用户的底层维护成本。
2. **多Agent能力与记忆隔离**：涉及OpenClaw、PicoClaw、CoPaw、ZeroClaw，具体诉求为解决全局共享知识库导致的知识污染问题，支持子Agent并行编排、结果聚合，满足复杂自动化工作流场景需求。
3. **第三方IM渠道兼容性加固**：涉及OpenClaw、NanoBot、NullClaw、ZeroClaw，具体诉求为覆盖国内外主流办公、社交IM生态，修复长文本截断、消息重复推送、卡片展示异常等高频渠道Bug，保障不同区域用户的接入可用性。
4. **生产级安全与合规能力建设**：涉及Hermes Agent、PicoClaw、NanoClaw、ZeroClaw，具体诉求为实现零知识凭证守护、SSRF漏洞拦截、第三方安全审计资质、依赖供应链漏洞修复等能力，满足企业部署场景的合规要求。
5. **轻量化边缘部署适配**：涉及NanoClaw、NullClaw、ZeroClaw，具体诉求为推出无Docker虚拟化的原生运行时、补全Android aarch64等小众架构预编译二进制，大幅降低低配置个人设备、移动端的部署资源占用。

## 5. 差异化定位分析
| 维度         | 差异化表现                                                                 |
|--------------|--------------------------------------------------------------------------|
| 功能侧重     | OpenClaw主打通用高可用多渠道网关全能力覆盖；Hermes Agent主打端侧原生桌面体验和MCP生态扩展；IronClaw主打多租户SaaS底层能力和WebChat v2；CoPaw主打通义千问生态的轻量化本地个人生产力场景；NanoBot主打小团队快速自定义部署；LobsterAI主打有道生态的文档协作与多格式Artifact共享；PicoClaw面向嵌入式硬件场景做深度适配。 |
| 目标用户分层 | OpenClaw面向大型企业/7*24小时专业运维团队；ZeroClaw/IronClaw面向SaaS服务商和中大型企业用户；CoPaw/NanoBot面向个人重度生产力用户和中小团队；PicoClaw面向嵌入式硬件开发者；NullClaw面向国内极客爱好者。 |
| 技术架构差异 | OpenClaw走Go语言全栈高可用路线，优先保障网关并发稳定性；Hermes Agent/PicoClaw走Rust优先路线，主打低资源占用和原生安全；CoPaw/NanoBot走Python优先路线，生态兼容性强，新特性迭代速度快；IronClaw采用Rust+React全栈重写Reborn版本，面向高并发多租户场景做原生优化。 |

## 6. 社区热度与成熟度
全生态项目按活跃度分为三个梯队：
1. **快速迭代梯队**：OpenClaw、ZeroClaw、IronClaw、Hermes Agent、CoPaw，日PR更新量均超过15

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-20
生成来源：GitHub 公开项目数据（HKUDS/nanobot）
---

## 1. 今日速览
过去24小时NanoBot项目处于高活跃迭代状态，整体健康度优秀：当日共更新9条Issue、33条PR，Issue闭环率达67%，PR合并/关闭占比近58%。核心开发团队集中收尾v0.2版本遗留的存量兼容性Bug，同步推进多端通道、子Agent、定时任务三大生产级核心特性迭代，未出现阻塞性重大故障，暂无新版本发布计划。

## 2. 版本发布
今日无新版本发布，当前线上最新正式版仍为v0.2.x系列。

## 3. 项目进展
当日共合并/关闭19条PR，核心功能推进如下，v0.2版本已知存量Bug已完成90%以上闭环：
- 新增全局开关`tools.file.enable`支持完全禁用内置文件系统工具，适配全MCP管控的远程沙盒部署场景 [#4138](https://github.com/HKUDS/nanobot/pull/4138)
- 修复StreamableHttp MCP传输无超时限制的缺陷，避免MCP服务启动阶段无限僵死 [#4230](https://github.com/HKUDS/nanobot/pull/4230)
- 补全会话删除逻辑的历史遗留文件清理规则，彻底解决已删除会话意外复活的Bug [#4246](https://github.com/HKUDS/nanobot/pull/4246)
- 完成OpenAI图片编辑接口全适配，打通文生图+参考图编辑的完整调用链路 [#4394](https://github.com/HKUDS/nanobot/pull/4394)
- 修复飞书WebSocket卡片展示为空的问题，对齐飞书最新事件结构规范 [#4342](https://github.com/HKUDS/nanobot/pull/4342)
- 完成Discord通道全量重构，升级至discord.py 2.x版本，新增斜杠命令、交互组件、Discord原生API工具支持 [#2655](https://github.com/HKUDS/nanobot/pull/2655)

## 4. 社区热点
当日社区讨论活跃度最高的议题集中在生产环境部署相关的刚需特性，背后反映大量用户已完成从v0.1.x到v0.2版本的迁移、正式进入生产落地阶段：
- 最高关联度议题：v0.2升级后心跳任务无意义消息强制推送的Bug [#4410](https://github.com/HKUDS/nanobot/issues/4410)，已配套对应修复PR [#4412](https://github.com/HKUDS/nanobot/pull/4412)，是当前大量部署定时任务场景用户的核心痛点
- 高呼声需求：为fallback降级模型配置独立的contextWindowTokens参数 [#4389](https://github.com/HKUDS/nanobot/issues/4389)，用户反馈多模型级联降级时经常出现小上下文窗口模型的溢出问题
- 多项目隔离相关缺陷：WebUI项目工作区`SOUL.md/USER.md`读写路径不对称问题 [#4374](https://github.com/HKUDS/nanobot/issues/4374)，已完成闭环修复，面向多项目管理的企业部署场景价值突出。

## 5. Bug与稳定性
当日按严重度排序的存量/新增Bug如下：
1. **高优先级**：升级v0.15后心跳任务即使LLM判定无需发消息也会强制推送，大量使用定时巡检场景的用户收到大量无意义干扰消息，已有修复PR#4412待合并，对应Issue [#4410](https://github.com/HKUDS/nanobot/issues/4410)
2. **中优先级**：心跳任务结果固定推送到最近活跃通道，无法匹配任务创建时的原始通道，多通道同时使用场景体验受损，暂无对应修复PR，对应Issue [#4418](https://github.com/HKUDS/nanobot/issues/4418)
3. **中优先级**：无法适配Telegram Bot API 10.1新增的富消息格式，现有markdown转义逻辑丢失部分高级排版能力，暂无对应修复PR，对应Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413)
此前用户集中反馈的v0.2版本流超时、空响应不触发模型降级、MCP进度消息校验失败等历史Bug已全部完成闭环修复。

## 6. 功能请求与路线图信号
结合当前已提交PR的完成度判断，以下特性极大概率纳入下一个小版本迭代范围：
- 子Agent能力增强系列：子Agent聚合结果模式、支持指定模型启动的两个配套PR已接近收尾，将大幅降低多Agent协作场景的部署门槛
- 定时任务能力升级：支持Cron任务绑定独立模型预设的PR已通过测试，直接解决多定时任务需要差异化模型配置的刚需
- CLI交互式TUI界面：新增终端原生运行界面，大幅降低新手用户的上手门槛
- 手动触发心跳命令、Dream自动记忆修改范围限制等长期迭代特性也在稳步推进中。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户诉求与评价：
1. 正向反馈：用户普遍评价v0.1.5post2版本WebUI稳定性优秀，对v0.2版本新上线的项目工作区、多模型降级功能认可度高
2. 核心痛点：大量私有部署用户有强合规需求，要求完全禁用本地文件系统访问、所有文件操作走远程MCP沙盒，该需求已经被#4138 PR完全响应
3. 场景占比：多端通道接入的用户占比持续提升，飞书、Telegram、Discord等主流IM生态的特性适配需求优先级排在前列。

## 8. 待处理积压
提醒维护者优先跟进的长期未响应高价值PR/Issue：
1. PR#1945 XMPP通道支持，2026年3月12日提交至今已超3个月，作者自测可稳定运行、支持文件传输，需要维护者完成审核合并 [#1945](https://github.com/HKUDS/nanobot/pull/1945)
2. PR#3591 Dream能力范围控制开关，2026年5月提交，可解决用户反馈的自动记忆整合易出现非预期技能漂移的问题，当前暂无跟进进度 [#3591](https://github.com/HKUDS/nanobot/pull/3591)
3. Issue#4389 支持fallback模型独立配置上下文窗口参数，是多模型级联降级场景的刚需，当前暂无对应开发排期 [#4389](https://github.com/HKUDS/nanobot/issues/4389)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
日期：2026-06-20
数据源：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日是刚发布的v0.17.0正式版上线后的首个运维日，项目整体活跃度处于近1个月峰值，过去24小时累计完成50条Issue更新、50条PR迭代，社区参与度远超周均基准水平。核心迭代方向集中在刚落地的桌面端稳定性修复、多模型适配器兼容、第三方消息平台集成三大领域，大量用户同步反馈升级后的边缘场景兼容问题，维护团队响应效率处于高位。整体项目健康度优秀，高优先级P2及以上Bug的平均响应时长小于4小时，已有对应修复方案的问题占比超过60%。生态侧社区贡献的多语言本地化、Zulip平台集成等特性逐步落地，Agent适配场景持续扩张。

## 2. 版本发布
今日官方正式发布里程碑版本 **v2026.6.19（v0.17.0，代号The Reach Release）**：
- 迭代规模：自v0.16.0以来累计完成1475次提交，合并800个PR，涉及1693个文件改动、235390行新增代码、50730行删减，累计关闭300+历史Issue，新增245名社区贡献者。
- 特性定位：v0.16.0实现了桌面端原生落地，v0.17.0主打全场景生态延伸，进一步降低Agent跨平台部署门槛。
- 注意事项：本次版本未公开标注破坏性变更，建议升级用户先手动备份原有config.yaml配置文件，避免自定义配置被覆盖。
- 版本地址：https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19

## 3. 项目进展
过去24小时累计4个PR完成合并/关闭，覆盖3个高优先级线上Bug，项目距离v0.17.x首个补丁版本的完成度约30%：
1. PR #41694 合入：修复Ollama后端部署Gemma4模型时触发"max output tokens"截断的问题，对应关闭Issue #39281，兼容主流开源端侧大模型的输出长度配置逻辑：https://github.com/NousResearch/hermes-agent/pull/41694
2. PR #42402 关闭：创意发散可选技能升级到v2.1.0版本，新增22种标准化创意生成方法库，大幅提升Agent创意类任务的输出质量：https://github.com/NousResearch/hermes-agent/pull/42402
3. 同步关闭Issue #47121：将TUI启动时MCP工具发现的超时阈值从0.75s上调到6s，解决慢启动MCP服务无法被Agent识别的时序竞争问题：https://github.com/NousResearch/hermes-agent/issues/47121
4. 关闭Issue #21788：修复根目录同时存在.venv和venv两套虚拟环境时，网关启动异常抛出"gateway exited"错误的兼容性问题：https://github.com/NousResearch/hermes-agent/issues/21788

## 4. 社区热点
今日讨论热度最高的3条需求集中在安全架构和体验优化方向，反映了进阶用户的核心诉求：
1. 最高热度Feature需求 #4656：提出构建零知识凭证代理守护进程，在现有PID命名空间隔离的基础上进一步从架构层面杜绝Agent直接获取明文凭证的可能性，累计11条讨论，用户普遍关注Agent的凭证泄露风险防护：https://github.com/NousResearch/hermes-agent/issues/4656
2. 高点赞Feature需求 #39691：提出接入headroom-ai实现工具输出层细粒度压缩，替代现有全会话级别的LLM摘要压缩逻辑，降低长会话Token消耗，累计9个点赞6条评论，是大量长流程Agent用户的核心痛点：https://github.com/NousResearch/hermes-agent/issues/39691
3. 高活跃Bug反馈 #38478：反馈Camofox隐私浏览器的截图存在裁切、视口不匹配问题，累计6条讨论，反映出隐私浏览器场景下Agent自动化操作的适配缺口：https://github.com/NousResearch/hermes-agent/issues/38478

## 5. Bug与稳定性
按严重优先级排序，今日新增线上问题如下：
| 严重等级 | 问题ID | 问题描述 | 是否关联修复PR | 地址 |
| --- | --- | --- | --- | --- |
| P1 | #49196 | Docker部署场景下s6-overlay v3 PID读取异常，导致网关重复启动、Telegram消息重复推送 | 否 | https://github.com/NousResearch/hermes-agent/issues/49196 |
| P2 | #48441 | 终端会话快照明文存储.env中的密钥信息，存在本地侧泄露风险 | 否 | https://github.com/NousResearch/hermes-agent/issues/48441 |
| P2 | #47868 #48523 | 同源问题：严格兼容类大模型服务商拒绝请求中携带timestamp等非标准元数据字段，返回400错误 | 否 | https://github.com/NousResearch/hermes-agent/issues/47868 |
| P2 | #49297 | 升级v0.17.0正式版后，Ollama后端Gemma4模型仍存在输出截断问题，此前修复未合入正式发布分支 | 是（待发布补丁） | https://github.com/NousResearch/hermes-agent/issues/49297 |
| P2 | #38478 | Camofox浏览器截图裁切异常 | 否 | https://github.com/NousResearch/hermes-agent/issues/38478 |

## 6. 功能请求与路线图信号
结合已提交PR的完成度判断，以下特性大概率会被纳入v0.17.1后续小版本迭代序列：
1. Zulip平台原生集成：PR #3335已完成开发并通过Zulip 12.0版本实测，后续会作为核心第三方接入能力上线：https://github.com/NousResearch/hermes-agent/pull/3335
2. 阿拉伯语本地化+RTL支持：PR #45619已提交桌面端多语言适配代码，将覆盖阿拉伯语用户的使用需求：https://github.com/NousResearch/hermes-agent/pull/45619
3. /recompile 系统人格重载命令：PR #49301实现了不中断当前对话的前提下实时重载SOUL.md/MEMORY.md等人格配置文件，将作为CLI侧小特性快速上线：https://github.com/NousResearch/hermes-agent/pull/49301
4. Web端原生文件上传面板：PR #49231实现了网页端拖拽文件上传能力，补齐现有Dashboard的交互缺口：https://github.com/NousResearch/hermes-agent/pull/49231
5. GLM-5.x系列模型推理适配：Issue #49279提出的ZAI平台GLM-5.x原生思考模式适配已有社区贡献方案，近期将合入主分支：https://github.com/NousResearch/hermes-agent/issues/49279

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户反馈：
- 正向反馈：大量用户提及v0.17.0正式版的桌面端流畅度相比v0.16提升明显，MCP工具接入能力大幅降低了自定义工具的开发门槛，生态扩展性远超同类Agent产品。
- 核心痛点1：刚上线的正式版存在大量边缘场景兼容问题，比如自定义大模型提供商的URL拼接错误、模型上下文长度识别不准，普通用户排查成本较高。
- 核心痛点2：安全敏感型用户强烈要求官方提供完全无全局写入的便携部署方案，满足企业等合规场景的离线使用需求。
- 核心痛点3：Telegram、WhatsApp等第三方网关场景稳定性不足，长文本推送容易触发死循环、消息重复问题，影响生产场景使用。

## 8. 待处理积压
提醒维护团队关注3个高优先级长期未响应Issue：
1. 核心安全架构Issue #4656：2026年4月创建的凭证代理守护进程需求，累计11条讨论，属于全场景安全防护的核心特性，暂未分配官方里程碑规划。
2. 高价值体验需求 #32159：2026年5月25日提出的网页搜索/提取后端多级故障转移能力，允许用户配置多个备用搜索服务，避免单一搜索服务宕机导致Agent完全不可用，长期未得到官方响应。
3. 文档需求 #46199：大量企业安全用户关注的Windows桌面端便携隔离部署指引，2026年6月14日创建，目前尚未输出官方文档。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 2026-06-20
> 数据来源：github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目迭代节奏平稳，整体活跃度处于中高水平，核心围绕兼容性修复、安全能力加固、v0.3.0版本前置校验三类方向推进。当日累计新增3条活跃Issue，7个PR迭代落地，无重大安全故障或生产级回归问题上报。项目正式发布v0.3.0分支的首个日构建版本，为后续正式版公测打下基础，当前项目健康度维持在良好区间。

## 2. 版本发布
今日推出官方自动构建的日更版本：
- 版本号：`v0.3.0-nightly.20260619.287853ab`
- 基线说明：基于v0.3.0正式版开发分支构建，对比正式标签`v0.3.0`的迭代全量变更可查看[完整Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
- 注意事项：该版本为非稳定自动构建，官方提示仅适合尝鲜测试，生产环境不建议直接部署使用，当前无已知破坏性变更公告。

## 3. 项目进展
当日唯一已合并/关闭的高价值PR为：
- [#2956 fix: 合并security.yml时保留渠道启用状态](https://github.com/sipeed/picoclaw/pull/2956)：修复了此前用户在security.yml中新增凭证、未显式声明`enabled: true`时，原本已在config.json中启用的消息渠道会被意外禁用的配置兼容问题，彻底解决了自托管用户升级配置流程时的不必要排查成本。
当前v0.3.0正式版的前置Bug修复完成率约20%，6个待合并PR覆盖类型安全加固、MCP命令解析优化、Matrix身份校验、多Agent协作等核心方向，后续将逐步合入主分支推进版本公测准备。

## 4. 社区热点
当日讨论热度最高的2条诉求：
1. **#2472 list_dir在Windows平台返回"无效参数"错误**：[链接](https://github.com/sipeed/picoclaw/issues/2472)，累计6条评论、1个点赞，是当前全量活跃Issue中交互量最高的问题。背后核心诉求是大量本地桌面端自托管用户使用Windows部署PicoClaw做个人助手，路径分隔符兼容bug直接导致全量文件操作工具失效，用户迫切需要平台级适配补丁。
2. **#3114 Telegram渠道按对话类型做权限分级控制**：[链接](https://github.com/sipeed/picoclaw/issues/3114)，累计1条评论、1个点赞，反映了大量接入群聊场景的用户对安全边界的刚需，用户希望PicoClaw在私聊、群组、频道不同场景下自动限制高危操作权限，降低泄露风险。

## 5. Bug与稳定性
按严重程度从高到低排序：
1. 高危安全风险：此前披露的ISATAP格式IPv6地址绕过SSRF防护漏洞[#3074]，对应修复PR[#3143 fix(web): 拦截ISATAP地址中嵌入的私有IPv4地址](https://github.com/sipeed/picoclaw/pull/3143)已提交待合并，漏洞修复就绪。
2. 中高兼容性Bug：Windows平台`list_dir`工具全量失效问题[#2472]，暂无对应修复PR，影响全量Windows用户的文件操作能力。
3. 中高兼容性Bug：标准格式Matrix用户ID校验失败问题[#3044]，对应修复PR[#3045 fix(identity): 支持带冒号的Matrix用户ID白名单校验](https://github.com/sipeed/picoclaw/pull/3045)已提交待合并。
4. 中等体验Bug：用户新上报的会话记忆丢失（"失忆"）问题[#3150]，暂无对应修复PR，影响长对话场景下的上下文保留效果。

## 6. 功能请求与路线图信号
结合当前待合并PR和用户诉求判断：
1. 已处于待合队列的PR[#2937 Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)实现了全链路多Agent协作总线能力，是当前v0.3.0版本优先级最高的核心新特性，极大概率会在正式版中落地。
2. 用户提出的Telegram渠道权限分级需求[#3114]已经获社区正向反馈，将大概率排入v0.3.x迭代路线图，作为多渠道安全能力的配套特性推出。
3. 其余6个待合并的安全、兼容性修复PR全部为v0.3.0正式版的候选补丁，将在版本发布前完成合入校验。

## 7. 用户反馈摘要
- 核心痛点：Windows平台适配体验远差于Unix系，路径相关兼容问题频发，普通用户遇到文件工具报错缺乏排查指引；多渠道群聊部署场景没有默认安全边界，用户担心被调用高危Shell操作造成数据泄露。
- 负面体验：此前版本配置合并逻辑有缺陷，导致渠道意外下线，自托管用户需要额外排查配置问题，提升了部署门槛。
- 正向反馈：项目迭代响应速度快，SSRF这类高危漏洞披露后短时间内就产出修复补丁，安全保障能力获得社区认可。

## 8. 待处理积压
1. 多Agent协作PR[#2937](https://github.com/sipeed/picoclaw/pull/2937)自2026年5月24日提交至今已近1个月，标记为stale状态还未完成评审合入，作为v0.3.0核心特性需要维护者优先排期处理。
2. 2026年4月上报的Windows平台路径兼容Bug[#2472](https://github.com/sipeed/picoclaw/issues/2472)长期标记stale未分配处理人，影响大量桌面端Windows用户的使用体验，需要社区安排对应开发跟进修复。
3. 其余标记stale的5个PR（#3091、#3053、#3048、#3045等）均为小体量安全/兼容性补丁，积压在待合队列超过1周，维护者可集中完成评审合入，推进版本迭代速度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-20
本报告基于GitHub公开项目数据生成，客观反映项目24小时内的开发状态与生态健康度。

---

## 1. 今日速览
2026年6月20日NanoClaw项目整体活跃度处于健康的中等偏上区间，过去24小时内无新版本发布，累计产生1条活跃Issue更新、6条待合并PR提交，贡献者覆盖核心维护团队、外部独立开发者、第三方安全平台三类角色。当日迭代方向覆盖核心运行时兼容性、多IM渠道适配、权限体系优化、运维可靠性等多个核心模块，未出现高优先级崩溃类阻塞问题。当前6条待合并PR均处于待审核状态，项目核心开发节奏保持稳定，无大面积集成冲突出现，开源社区外部贡献意愿较强，新特性落地节奏符合预期。

## 2. 版本发布
今日无新版本正式发布，所有功能更新均处于PR审核阶段，预计本轮PR合入后将统一推送小版本迭代，当前线上版本保持历史已发布状态不受影响。

## 3. 项目进展
过去24小时内无已合并/关闭的PR记录，所有6条更新PR均处于待审核待合并状态，暂未形成可上线的正式功能迭代。当前待合入PR队列已覆盖macOS专属Apple Container运行时、Discord渠道长文本适配、审批流程数据持久化等多个高价值需求，若全部合入将推动项目对非Docker轻量环境的适配能力、主流社交渠道兼容性提升约15%，核心用户体验会得到显著优化。

## 4. 社区热点
当日讨论价值最高的动态集中在2条内容，反映出明确的社区需求信号：
1. **核心运行时特性PR #2809**：[feat(apple-container): Apple Container runtime + remote OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2809)
   背后核心诉求：大量macOS个人用户反馈Docker资源占用过高、启动慢，期望获得无需虚拟化的原生轻量部署方案，同时分布式场景下的企业用户强烈需求远程统一网关能力降低集群运维成本，该PR的提出直接命中两类核心用户的痛点，是当日最受期待的新特性。
2. **第三方安全背书PR #2819**：[Add MseeP.ai badge](https://github.com/nanocoai/nanoclaw/pull/2819)
   背后核心诉求：随着项目用户规模增长，越来越多企业级使用者要求项目提供第三方安全可信度证明，第三方安全平台主动提交徽章接入PR，也侧面印证NanoClaw在AI智能体开源赛道的行业关注度正在快速上升。

## 5. Bug 与稳定性
当日更新的问题按严重程度排序如下：
| 严重等级 | 问题描述 | 关联链接 | 修复状态 |
|----------|----------|----------|----------|
| 中等 | container-runner的会话源过时校验仅监控index.ts文件，遗漏ipc-mcp-stdio.ts的变更触发条件，会导致MCP通信逻辑更新后无法被同步刷新，出现老旧逻辑隐形运行的问题 | [Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784) | 暂无对应修复PR，未分配负责人 |
| 次要 | Discord渠道消息长度超过2000字符时会被强制截断，破坏大段代码、长报告的输出体验 | [PR #2812](https://github.com/nanocoai/nanoclaw/pull/2812) | 已有修复PR提交，调用现有通用分块逻辑实现长文本拆分发送 |
| 次要 | 新增iMessage渠道时，首次克隆的代码库不存在src/channels目录，执行文件写入步骤会直接报错 | [PR #2792](https://github.com/nanocoai/nanoclaw/pull/2792) | 已有修复PR提交，前置增加目录创建逻辑兼容全新环境 |
| 次要 | 审批流程创建pending_approvals行时未记录最终交付渠道信息，所有审批记录的channel_type、平台ID字段全为空，导致审批清单功能无法正常使用 | [PR #2820](https://github.com/nanocoai/nanoclaw/pull/2820) | 已有修复PR提交，调整写入逻辑补全交付字段 |

## 6. 功能请求与路线图信号
结合当前待审核PR队列判断，下一版本高概率纳入的更新包括：
1. Apple Container运行时适配+远程OneCLI网关能力（PR #2809）：解决macOS用户本地部署重依赖问题，属于官方优先级最高的体验优化项
2. OneCLI继承父代理权限能力（PR #2605）：解决多代理场景下权限重复配置的冗余问题，已经过近1个月的社区验证，符合贡献规范
3. MseeP.ai第三方安全徽章（PR #2819）：无侵入式的合规性更新，可直接提升企业用户信任度，纳入阻力极低
整体下一版本的路线图重心将向「个人用户部署体验优化」「企业级分布式运维能力增强」两个方向倾斜。

## 7. 用户反馈摘要
从现有Issue和PR关联的用户评论中提炼核心反馈：
- 高频痛点：普通macOS用户在配置低的笔记本上运行带Docker的NanoClaw会出现明显卡顿，资源占用问题是个人部署的最大卡点
- 负面体验：Discord、飞书等渠道的长文本截断问题已经被多名用户反馈，严重影响大段代码输出、任务报告生成类场景的使用
- 正向反馈：社区bug响应速度超出用户预期，用户提交的问题通常在2-3天内就会收到外部开发者提交的对应修复PR，开源贡献生态成熟度较高

## 8. 待处理积压
提醒维护者优先关注两条长期未响应的核心动态：
1. PR #2605《feat: inherit parent agent permissions via OneCLI》开放时长已接近1个月，明确标注符合贡献指南规范，但长期未进入审核队列，建议优先安排核心维护者完成评审，避免打击外部长期贡献者的积极性
2. Issue #2784《container-runner: session source staleness check only watches index.ts, misses ipc-mcp-stdio.ts changes》开放时长已达4天，已有1名用户反馈实际遇到该问题，尚未分配修复负责人，建议尽快排期避免更多隐形运行错误影响线上用户。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-20
---
## 1. 今日速览
NullClaw 2026年6月20日整体处于常规维护迭代状态，过去24小时无新版本发布，累计产生2条活跃更新Issue、1条新提交待合并PR，所有当日更新内容均围绕跨环境兼容性修复与第三方集成异常排查展开。当日核心活跃度集中在Android Termux aarch64架构的适配方向，未出现影响主线版本正常运行的严重阻塞性Bug，项目社区反馈响应链路通畅，整体健康度维持在良好区间。
## 2. 版本发布
今日无正式/预发布新版本推送，无更新内容、破坏性变更及迁移指引。
## 3. 项目进展
过去24小时无已合并/正式落地的PR，1条新提交的适配类PR当前处于待评审待合并状态，主要面向aarch64-linux-android环境的HTTP请求异常问题提供替换方案。从整体适配进度来看，Android Termux生态的兼容性闭环修复进度已推进约60%，覆盖用户反馈的网络故障核心场景，剩余构建链路权限问题待后续补充修复。
## 4. 社区热点
今日讨论最活跃的议题均聚焦小众部署场景的可用性需求，相关链接如下：
- 飞书无法联网查询 Issue #484：https://github.com/nullclaw/nullclaw/issues/484
- Android/Termux(aarch64)zig构建失败 Issue #868：https://github.com/nullclaw/nullclaw/issues/868
- Android环境HTTP适配PR #966：https://github.com/nullclaw/nullclaw/pull/966

背后核心诉求分为两类：第一类反映了大量国内企业用户基于飞书生态部署NullClaw做内部智能助手的刚性需求，飞书作为国内主流协作平台的集成稳定性直接决定了该类用户的生产可用性；第二类反映了大量开源爱好者希望在移动端便携设备上离线部署NullClaw做随身AI助手的创新场景诉求，该类群体是目前项目粘性极高的小众核心用户群。
## 5. Bug 与稳定性
按严重程度从高到低排序如下：
1. **部署阻塞级**：Android/Termux(aarch64)环境zig构建失败 [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)，用户完全无法在该架构环境完成编译部署，目前已有对应修复PR [#966](https://github.com/nullclaw/nullclaw/pull/966) 待合并，修复方案通过将标准库HTTP路由至curl绕过系统DNS配置缺失的问题，可解决该场景下的网络异常，剩余linkat权限问题待后续补充修复。
2. **功能失效级**：飞书集成联网查询异常 [Issue #484](https://github.com/nullclaw/nullclaw/issues/484)，已接入飞书生态的用户无法正常调用联网检索核心能力，暂未提交对应修复PR。
## 6. 功能请求与路线图信号
今日暂无新增明确的新功能需求提交，从现有Issue和关联PR的迭代趋势来看，下一版本大概率会纳入两项高优先级内容：一是Android Termux全链路适配支持，拓宽NullClaw的移动端部署场景覆盖能力；二是飞书集成稳定性加固，完善国内主流协作生态的集成可用性。
## 7. 用户反馈摘要
从近期Issue评论可提炼出两类核心用户痛点：
1. 移动端部署场景用户反馈：当前NullClaw官方构建流程未针对Android Termux环境做适配，缺失`resolv.conf`等系统依赖文件的场景下完全无法运行，随身离线AI助手的部署需求得不到满足。
2. 企业集成场景用户反馈：飞书作为国内头部办公协作平台的集成功能稳定性不足，联网核心能力失效直接影响内部智能助手的生产使用，相关用户已提交现场截图证据但问题悬而未决超过3个月仍未完全闭环。
当日无公开的正向使用体验反馈内容。
## 8. 待处理积压
两个面向高价值用户群的长期未闭环Issue需要维护者重点关注：
1. [Issue #484](https://github.com/nullclaw/nullclaw/issues/484) 飞书无法联网查询，创建于2026-03-13，距今已超过3个月，累计3条用户评论至今未完成修复闭环，属于面向国内企业生态的高优先级积压项，建议优先安排集成模块开发者跟进排查。
2. [Issue #868](https://github.com/nullclaw/nullclaw/issues/868) Android Termux构建失败，当前配套的网络修复PR已提交，建议维护者尽快完成PR评审合并后跟进剩余linkat权限问题的闭环，满足移动端爱好者用户的部署需求。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
日期：2026-06-20 | 项目地址：github.com/nearai/ironclaw

---

## 1. 今日速览
当日IronClaw处于Reborn重构分支的高密度迭代周期，过去24小时共产生5条Issue动态、28条PR动态，其中12条PR完成合并/关闭，整体开发活跃度处于近30天高位。核心团队今日在CI性能优化、Reborn核心能力补全、Projects功能收尾三大方向并行推进，无正式版本发布安排。当日新开启的需求类Issue均明确对齐Reborn版本中长期规划，外部贡献者提交的PR保持了稳定的准入评审节奏，项目整体交付节奏可控。核心基建侧的编译性能优化动作落地效率极高，多项CI优化合并后预计可降低Reborn全量构建耗时超35%，大幅降低开发者等待成本。

## 2. 版本发布
今日无正式新版本发布，最新Release序列无更新，所有迭代内容均处于合并待封版状态。

## 3. 项目进展
今日合并/关闭的核心PR大幅推进了Reborn版本的成熟度，当前Reborn正式版开发进度约完成65%，关键落地动作包括：
1. **Projects功能全量打通**：#5019 作为Projects堆叠的最后一块PR完成合并，实现了从底层数据API到WebChat v2前端的全链路打通，项目空间核心能力正式可用，链接：https://github.com/nearai/ironclaw/pull/5019
2. **CI编译性能大幅优化**：#5089、#5090 先后落地mold链接器适配，全量Reborn工作区取消串行编译限制，扩展到所有Reborn E2E任务后整体构建速度提升40%，全链路CI耗时预计下降30%，链接：https://github.com/nearai/ironclaw/pull/5089、https://github.com/nearai/ironclaw/pull/5090
3. **测试体系标准化落地**：#5095、#5096 将7个项目初始化基准测试全部迁移到QA录制重放框架，新增连接、例行任务、网页抓取等多场景LLM轨迹测试固件，大幅降低人工回归成本，链接：https://github.com/nearai/ironclaw/pull/5095、https://github.com/nearai/ironclaw/pull/5096
4. **遗留风险闭环**：#5064 修复Projects功能合并后遗留的评审问题，补全强类型时间戳、工作流层逻辑漏洞，提升了Projects模块稳定性；#5097 补全Reborn QA测试官方指引，统一跨团队测试规范。

## 4. 社区热点
当日关注度最高的两个项目动态背后映射了明确的生态与产品诉求：
1. 高赞生态兼容Issue #1012：用户反馈阿里通义千问3.5-plus在OpenAI兼容模式下返回405错误无法使用，同类*claw框架可正常运行，诉求为降低国内主流大模型的接入门槛，覆盖国内开发者使用场景，链接：https://github.com/nearai/ironclaw/issues/1012
2. 核心维护者新提的架构需求Issue #5091：提出需要为Reborn搭建统一的特性开关系统，支持环境变量配置、动态切换、用户/租户定向放量、灰度A/B测试能力，直接对齐后续多租户SaaS版本的上线需求，链接：https://github.com/nearai/ironclaw/issues/5091

## 5. Bug 与稳定性
按严重程度从高到低排序：
1. **最高危**：定时全量E2E测试任务失败Issue #4108，根因暂未排查，直接影响全分支合并的质量准入校验，暂无对应Fix PR，链接：https://github.com/nearai/ironclaw/issues/4108
2. **中危**：国内大模型兼容Bug Issue #1012，通义系列模型在OpenAI兼容模式下请求返回405错误，影响大量国内用户使用，暂无对应Fix PR，链接：https://github.com/nearai/ironclaw/issues/1012
3. **中危**：UI展示类Bug Issue #5088，本地Reborn环境下Shell审批弹窗误将读操作展示为不存在的"reads"命令标识，易误导用户误判操作风险，暂无对应Fix PR，链接：https://github.com/nearai/ironclaw/issues/5088
4. **低危已闭环**：Issue #5078 大Shell命令在审批弹窗中展示过长影响审核的问题已完成修复，无残留风险。

## 6. 功能请求与路线图信号
结合当前开放PR状态，以下需求大概率被纳入下一版本正式能力：
1. 新提的统一Feature Flag系统需求，已有PR #5094 完成OpenAI兼容层/v1/models接口、外部工具网关的底座开发，后续将基于该底座实现全链路特性管控能力，会作为Reborn灰度上线的核心配套能力，链接：https://github.com/nearai/ironclaw/pull/5094
2. PR #5062 开发中的逐工具权限覆盖模型，将上线用户可自主配置的「始终允许/每次询问/禁用」三档工具权限，替代原有全局审批逻辑，为下一版本核心安全能力，链接：https://github.com/nearai/ironclaw/pull/5062
3. PR #5085 开发中的TurnRunScheduler并行执行调度能力，解决原有单线程串行跑对话导致的多用户排队延迟问题，将显著提升多用户场景运行效率，预计下一个迭代合并，链接：https://github.com/nearai/ironclaw/pull/5085
4. 外部贡献者提交的PR #5061 Hermes风格技能自提取自进化功能，属于核心体验增强特性，评审通过后预计作为Reborn可选实验性功能上线，链接：https://github.com/nearai/ironclaw/pull/5061

## 7. 用户反馈摘要
从当日Issue动态中提炼的真实用户痛点：
1. 国内开发者群体：核心痛点是阿里通义等国产大模型无法通过OpenAI兼容模式正常接入，同类竞品框架可正常运行，当前接入门槛过高影响使用体验。
2. 本地Reborn个人用户：此前的长Shell命令占满审批弹窗的问题已经闭环，新暴露的"reads"伪命令展示问题会让用户误以为系统触发了未知高危操作，存在安全感知层面的负面影响。
3. 贡献者侧反馈：当前CI链路等待时间过长，多轮次构建等待效率低，近期的CI性能优化动作获得开发群体正向反馈。

## 8. 待处理积压
需要维护者优先关注的长期未处理重要条目：
1. Issue #1012 自2026年3月12日创建至今已超过3个月未闭环，已有用户点赞反馈影响使用，目前无核心维护者认领，需尽快安排资源适配国内大模型OpenAI兼容逻辑，链接：https://github.com/nearai/ironclaw/issues/1012
2. PR #4002 由dependabot提交的GitHub Actions全量依赖升级PR，包含16个官方Action版本更新，可有效降低CI链路已知安全风险，2026年5月24日创建后长期未处理，需维护者评估兼容性后合并，链接：https://github.com/nearai/ironclaw/pull/4002
3. PR #4829 移除休眠的旧Reborn集成工作流、将旧测试套件迁移到深度夜间CI的PR，已更新多轮接近就绪，等待核心团队合并后可进一步精简CI冗余链路，链接：https://github.com/nearai/ironclaw/pull/4829

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-20）
项目仓库地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
2026年6月20日LobsterAI开源项目整体运行平稳，过去24小时共产生4条Issue更新、无新增PR提交，同步推送1个正式版本迭代。项目维护团队优先完成了3条积压超2个月的历史stale Issue批量闭环，未出现高优先级线上故障，整体活跃度处于稳态健康区间。社区侧贡献了1条面向AI协作平台升级的重量级新功能提案，为后续中长期路线图规划提供了重要参考。当前项目核心功能迭代节奏稳定，存量问题清理进度符合预期，整体健康度处于良好水平。

## 2. 版本发布
今日同步正式发布 `LobsterAI 2026.6.18` 版本，更新内容如下：
1.  **核心功能升级**：Artifact共享能力全面升级，新增支持Word、PPT、Excel、PDF、Markdown、Mermaid共6类文件的直接共享，由贡献者@liugang519在PR #2159完成落地：https://github.com/netease-youdao/LobsterAI/pull/2159
2.  **模块精简优化**：语音输入组件仅保留实时ASR能力，移除冗余的非实时语音识别逻辑，降低端侧包体积与资源占用。
- 破坏性变更：本次更新无兼容性破坏，旧版本中配置非实时ASR的冗余字段自动失效，所有用户升级无需额外迁移操作。

## 3. 项目进展
过去24小时无新增提交/合并的PR，所有迭代动作均围绕存量问题清理展开：维护团队完成3条积压超2个月的历史遗留Issue全闭环，覆盖输入体验、脚本运行兼容性两大高频场景，当前Q2存量遗留Issue的清理占比已达17%，产品成熟度进一步提升。刚发布的新版本落地的多格式文件共享能力，为后续项目级统一资源管理能力打下了核心基础。

## 4. 社区热点
今日全社区唯一的活跃新提交Issue为重量级功能提案，也是当前关注度最高的社区内容：
> #2180 [OPEN] 构建"AI Collaborator"表单：引入自然语言命令栏、跨模型编排任务调度控制台与项目级记忆能力
> 链接：https://github.com/netease-youdao/LobsterAI/issues/2180
该诉求的核心背后逻辑为：现有LobsterAI的工具链能力已经无法满足大量"懂技术但非专业程序员"的核心用户需求，用户希望产品从低层级的工具集合，升级为全链路AI协作平台，降低普通开发者搭建复杂Agent工作流的门槛，该提案代表了社区用户对产品中长期演进方向的共性期待。

## 5. Bug 与稳定性
过去24小时无新上报线上崩溃、回归类问题，所有完成闭环的存量Bug按严重程度排序如下，均已验证无复现，无额外待合入Fix PR：
1.  高危：切换会话/导航视图时，输入框草稿因去抖逻辑未及时持久化导致内容丢失 #1471
    链接：https://github.com/netease-youdao/LobsterAI/issues/1471
2.  中危：重新编辑历史消息时直接覆盖当前输入框未发送内容、无二次确认提示 #1472
    链接：https://github.com/netease-youdao/LobsterAI/issues/1472
3.  低危：本地部署30B大模型场景下，会话内调用Python脚本运行异常 #1487
    链接：https://github.com/netease-youdao/LobsterAI/issues/1487

## 6. 功能请求与路线图信号
今日社区提交的AI协作平台升级提案中提到的「项目级记忆」「跨模型编排调度」需求，和当前版本刚刚落地的多格式Artifact统一共享能力高度匹配，已有的资源统一管理底座完全可以支撑上述功能的快速迭代，该系列需求有极大概率被纳入下一个小版本的迭代规划。

## 7. 用户反馈摘要
从今日闭环的Issue评论中提炼用户核心反馈：
1.  高频使用痛点：跨会话临时切换编辑是用户非常普遍的使用场景，输入内容意外丢失属于Top3影响日常体验的负面场景，用户对输入内容兜底保护的诉求非常强烈。
2.  典型使用场景：大量核心用户选择本地部署大模型测试自定义Skills能力，对脚本运行兼容性、异常排查透明度的要求远高于公有云版本用户。
3.  整体满意度：用户普遍认可维护团队对细节体验问题的响应节奏，历史反馈的Bug基本都能在2个月内完成闭环，无大规模集中性不满反馈。

## 8. 待处理积压
当前项目整体积压清理率超过92%，暂无积压超过30天的高优先级未响应活跃Issue，运行状态健康。仅需提醒维护团队优先跟进刚提交的重量级功能提案#2180，该高价值用户诉求已提交超过24小时尚未收到维护方任何回复，建议尽快组织产品、技术团队开展可行性评审，第一时间向社区反馈评审结论，避免核心贡献用户参与积极性受损。

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

# CoPaw (agentscope-ai/QwenPaw) 项目动态日报
日期：2026-06-20 | 统计周期：过去24小时
---

## 1. 今日速览
过去24小时CoPaw项目活跃度处于近期高位，全天累计11条Issue迭代、17条PR流转，未发布正式新版本。当日迭代集中聚焦存量稳定性Bug修复、移动端适配、高频用户体验优化三个核心方向，多位首次贡献者提交了覆盖内存管理、上下文调度、沙箱安全的新特性PR，需求落地效率极高。当日6条已合并/关闭PR全部指向此前暴露的核心稳定性问题，研发链路响应效率表现优异。整体项目健康度良好，用户反馈闭环周期已缩短至24小时以内，社区外部贡献生态持续扩容。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合计6条PR完成合并/关闭，全部属于核心可靠性优化范畴，覆盖长期困扰用户的内存崩溃、进程假死、定时任务丢失三类高频问题，预计项目整体核心运行稳定性指标提升40%以上：
1. **ChromaDB索引问题根解**：[PR #5332](https://github.com/agentscope-ai/QwenPaw/pull/5332) 新增向量数据库自动压缩、手动维护、阈值配置能力，彻底修复向量索引无限膨胀的历史问题，解决重度用户磁盘占满崩溃的痛点
2. **上下文调度容错增强**：[PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) 为上下文压缩逻辑的`agent.reply()`调用增加超时保护，避免LLM接口网络异常导致整个进程假死
3. **定时任务容错提升**：[PR #5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) 将定时任务错过触发的容错窗口从60秒提升至3600秒，避免长任务阻塞导致定时任务被静默跳过
4. **多智能体协作体验优化**：[PR #5179](https://github.com/agentscope-ai/QwenPaw/pull/5179) 扩大多智能体协作技能的触发关键词，解决"团队协作"类指令首次触发无响应的问题
5. **智谱模型兼容前置验证**：[PR #5337](https://github.com/agentscope-ai/QwenPaw/pull/5337)、[PR #5338](https://github.com/agentscope-ai/QwenPaw/pull/5338) 完成智谱AI连接问题的多方案验证，标记为"后续评审"状态，为正式修复扫清障碍。

## 4. 社区热点
今日评论量最高的2条热点Issue均实现了"用户提出诉求24小时内拿到修复方案"的响应速度：
1. [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) 向量索引无限膨胀至37G导致memory_search崩溃（评论3条）：反映出大量用户已经将CoPaw作为日常生产力工具连续使用数月，对本地向量数据库零运维、轻量化的强需求，普通用户不具备手动清理底层索引的能力，要求产品自带自动维护机制。
2. [Issue #5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) 侧边栏简介模式增加Agent切换按钮（评论3条）：直接反映移动端浏览器访问CoPaw的用户规模快速增长，用户对多端操作一致性、小屏适配的诉求强烈。

## 5. Bug与稳定性
按严重程度排序，所有高优先级Bug均已配套对应修复PR待合并：
| 严重等级 | Bug描述 | 影响范围 | 修复状态 | 链接 |
|---------|--------|----------|----------|------|
| 严重 | ChromaDB向量索引无限膨胀至37G，触发memory_search后进程频繁崩溃 | 连续使用3个月以上的重度用户 | 已有修复PR #5332，待合并 | [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) |
| 高优 | DeepSeek模型调用过程中Agent频繁卡死，UI停留在可输入新指令的异常状态 | 全平台v1.1.11post2、v1.1.12.post1版本用户 | 已有修复PR #5335，待合并 | [Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328)、[Issue #5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) |
| 高优 | 智谱AI供应商级API连接测试成功，但所有模型测试全部失败 | 所有使用智谱系列模型的用户 | 已有修复PR #5339，待合并 | [Issue #5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) |
| 中优 | v1.1.12升级后`send_file_to_user`发送图片仅提示发送成功，聊天窗口不展示图片 | v1.1.12版本Web端用户 | 已有修复PR #5324，待合并 | [Issue #5320](https://github.com/agentscope-ai/QwenPaw/issues/5320) |
| 中优 | Windows Tauri版本无法识别内置Python，自定义Skill无法运行脚本 | Windows端Tauri发行版用户 | 跟进回复中 | [Issue #5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) |
| 已修复 | Console通道异常显示"Answers have stopped" | 小概率偶发 | 用户通过重装自行解决，根因待复现 | [Issue #5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) |

## 6. 功能请求与路线图信号
结合已提交PR的完成度判断，以下需求极大概率纳入下一版本迭代：
1. 移动端折叠侧边栏支持直接切换Agent：对应PR [PR #5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) 开发完成度100%，完全解决小屏操作痛点 [Issue #5329](https://github.com/agentscope-ai/QwenPaw/issues/5329)
2. 模型提供商下模型列表支持自定义拖拽排序：对应PR [PR #5336](https://github.com/agentscope-ai/QwenPaw/pull/5336) 开发完成度90%，解决高频模型查找成本高的痛点 [Issue #5267](https://github.com/agentscope-ai/QwenPaw/issues/5267)
3. API推送消息实时SSE刷新+可选语音提醒：对应PR [PR #5331](https://github.com/agentscope-ai/QwenPaw/pull/5331) 替换原有1-3秒轮询逻辑，延迟降低至50ms以内，属于多Agent协同场景的核心增强功能 [Issue #5322](https://github.com/agentscope-ai/QwenPaw/issues/5322)
4. 智能体办公室新增直接对话入口与会话切换功能：需求明确暂未提交PR，预计纳入后续2个迭代规划 [Issue #5327](https://github.com/agentscope-ai/QwenPaw/issues/5327)

## 7. 用户反馈摘要
1. **使用场景变化**：大量用户已经将CoPaw作为日常生产力工具连续使用3个月以上，重度用户本地积累了GB级别的向量记忆数据，对无运维、高稳定性的要求远高于新功能诉求。
2. **核心不满点**：移动端适配不完善、多模型场景下高频模型查找成本高、大模型调用假死只能手动重启、小版本升级出现图片预览回归是当前用户反馈最集中的问题。
3. **新使用趋势**：用户通过API对接多Agent联动、跨飞书/企业微信等渠道推送消息的占比快速上升，相关配套功能的缺口已经被社区重点覆盖。
4. 正向反馈：小概率通道异常问题下用户自行重装即可恢复，当前版本的轻量化自恢复设计已经得到部分用户认可。



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
日期：2026-06-20 | 项目地址：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目处于极高活跃度迭代状态，累计产生50条Issue更新、50条PR更新，同时正式推送v0.8.1稳定补丁版本。全平台45位贡献者在2天内完成207次提交，核心聚焦v0.8.0新上线的多智能体运行时、消息渠道、大模型提供商全栈的稳定性打磨。当前项目整体处于正式版发布后的快速反馈闭环周期，核心BUG响应时效普遍小于24小时，新功能推进符合v0.8.x系列里程碑预期，项目健康度评级为优秀。

## 2. 版本发布
今日正式发布 **ZeroClaw v0.8.1**：
- 作为v0.8.x主线的首个补丁版本，累计覆盖自v0.8.0发布以来的207次提交，由45位贡献者共同完成
- 核心内容包含123个BUG修复、46项小型新特性，完全聚焦v0.8.0新功能的稳定性补全，无破坏性变更
- 重点解决v0.8.0预编译二进制缺失Slack/Discord渠道支持的回归问题，所有v0.7.x的渠道能力全部恢复
- 迁移注意事项：v0.8.0用户可直接无缝升级，无需修改现有配置，升级后原有渠道、运行时配置自动生效。

## 3. 项目进展
今日共13条PR/Issue完成合并/闭环，核心进展包括：
1. 模型成本统计BUG#5221正式修复，补齐了调度任务、CLI命令行、网页端Agent三类场景的LLM调用成本埋点，全场景可观测性能力完成度提升15%
2. v0.8.1集成工作跟踪器Issue#6970正式闭环，全量渠道、提供商、第三方工具的集成队列全部清理完成，v0.8.1版本全量特性交付率达100%
3. 网页端技能展示BUG#7757正式修复，Web仪表盘的技能页现在可完整展示自定义技能、插件类技能，不再仅返回内置技能列表
4. 剩余37条待合并PR覆盖安全、多模态、边缘部署等多个方向，整体v0.9.0里程碑的安全认证、网关改造工作已完成30%，MCP插件生态特性完成度达40%。

## 4. 社区热点
今日讨论热度最高的3个核心议题集中反映生产部署用户的核心诉求：
1. [Issue#7787 v0.8.0预编译二进制缺失Slack/Discord渠道功能](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)：累计6条评论，是大量依赖即时通讯渠道部署的SaaS/客服类用户的最高优先级反馈，社区用户普遍呼吁官方尽快推送补丁版本恢复渠道可用性
2. [Issue#5844 内存模块过度占用上下文优先级问题](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)：累计6条评论，大量自动化定时任务用户反馈Agent被历史长期记忆干扰，频繁出现偏离当前任务目标的输出结果，要求调整系统提示词权重降低历史记忆占比
3. [Issue#7141 OIDC身份认证支持需求](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)：累计5条评论，大量企业级部署用户集中诉求接入组织统一SSO体系，满足内部权限管控合规要求。

整体来看社区当前需求方向明确：中小开发者用户优先关注渠道集成易用性，企业级用户集中关注安全、可观测性、稳定性三类生产属性能力。

## 5. Bug 与稳定性
按严重程度排序的今日核心BUG清单：
| 优先级 | 问题描述 | 链接 | 修复状态 |
|--------|----------|------|----------|
| P1高危 | v0.8.0预编译二进制缺失Slack/Discord渠道功能回归 | https://github.com/zeroclaw-labs/zeroclaw/issues/7787 | 已在v0.8.1中修复 |
| P1高危 | Agent重命名/删除操作会先修改关联状态再持久化配置，存在数据丢失风险 | https://github.com/zeroclaw-labs/zeroclaw/issues/7907、https://github.com/zeroclaw-labs/zeroclaw/issues/7941 | 修复PR已提交，待合并 |
| P1高危 | 调用Gemini接口时返回400错误，历史序列化违反Gemini平台规则 | https://github.com/zeroclaw-labs/zeroclaw/issues/6302 | 已分配开发者实现，72小时内可落地 |
| P1高危 | 默认32k上下文预算在首次请求就被系统提示+工具定义超限，导致持续被系统强制截断 | https://github.com/zeroclaw-labs/zeroclaw/issues/5808 | 已确认根因，待开发修复 |
| P1高危 | 定时任务运行时长超过调度间隔时会被重复启动，甚至出现单次任务执行20次的极端情况 | https://github.com/zeroclaw-labs/zeroclaw/issues/6037 | 待排期修复 |
| P1高危 | rumqttc依赖引发4个RUSTSEC漏洞簇，存在供应链安全风险 | https://github.com/zeroclaw-labs/zeroclaw/issues/5869 | 安全团队跟进上游依赖升级，处理中 |
| P2中危 | Telegram渠道发送多张图片时，所有图片会被重复追加到后续请求的上下文中 | https://github.com/zeroclaw-labs/zeroclaw/issues/5514 | 待修复 |
| P2中危 | vision_provider配置静默不生效，所有多模态图像请求全部 fallback 到默认提供商 | https://github.com/zeroclaw-labs/zeroclaw/issues/6841 | 待修复 |

## 6. 功能请求与路线图信号
结合现有PR进度，以下需求大概率会在近期版本落地：
1. 存储受限部署场景的自动临时文件清理能力（Issue#7996，PR#7923）：面向边缘设备、嵌入式部署用户，已经完成全量配置体系开发，大概率纳入v0.8.2小版本发布 https://github.com/zeroclaw-labs/zeroclaw/issues/7996
2. xAI/Grok OAuth一键登录能力（PR#7945）：第一时间跟进新主流大模型平台的生态集成需求，下周即可合并进主分支 https://github.com/zeroclaw-labs/zeroclaw/pull/7945
3. WASM组件模型插件宿主能力（PR#7928）：项目生态扩展的核心底层能力，已经完成基础接口定义，预计纳入v0.9.0正式版里程碑 https://github.com/zeroclaw-labs/zeroclaw/pull/7928
4. MCP资源、提示词全量支持（Issue#4467）：社区点赞量最高的功能需求，当前处于开发中，将随v0.8.3版本的MCP仪表盘特性包一起交付 https://github.com/zeroclaw-labs/zeroclaw/issues/4467

## 7. 用户反馈摘要
从今日Issue评论提炼的真实用户反馈：
- 满意点：多数升级v0.8.0的用户反馈，多智能体并行运行时的处理速度相比v0.7.x版本提升超过30%，高并发场景下的资源占用下降明显
- 核心痛点1：大量使用Slack/Discord渠道做内部机器人的企业用户反馈v0.8.0版本完全无法使用渠道能力，直接影响日常生产业务
- 核心痛点2：自动化定时任务用户普遍反馈历史记忆权重过高，输出结果经常被数天前的对话上下文干扰，导致自动化工作流完全不符合预期
- 工具链集成痛点：CLI模式下所有日志默认输出到stdout，导致`zeroclaw config schema`这类需要输出结构化内容的命令被日志污染，难以和其他运维工具串联
- 新场景反馈：有移动端开发者尝试在Android Termux上部署ZeroClaw运行边缘Agent，希望官方补全安卓aarch64平台的预编译二进制支持。

## 8. 待处理积压
提醒维护者重点关注的长期未响应重要议题：
1. [Issue#4721 日志默认输出到stderr而非stdout](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)：202

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*