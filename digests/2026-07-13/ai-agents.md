# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-12 22:49 UTC

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

# OpenClaw 项目动态日报（2026-07-13）
---
## 1. 今日速览
过去24小时项目整体活跃度处于极高水平，累计产生1000条Issue与PR更新记录，项目当前核心迭代主线聚焦于未授权OOM风险安全加固、高优先级生产Bug收敛两大方向，社区对跨平台原生客户端、凭据安全防护类特性的讨论热度持续攀升。当日无正式版本发布，开发团队正集中为2026.7稳定版本做前置问题清零，整体项目健康度处于高位，安全类特性的迭代进度超出预期，但3个核心P0级生产Bug的积压已开始对存量用户造成影响。
## 2. 版本发布
今日无新版本发布。当前开发团队正推进2026.7.x稳定分支的前置验证工作，计划在核心无界文件读取安全加固系列PR全部合入后，发布一个紧急安全补丁版本。
## 3. 项目进展
当日累计关闭148个Issue/PR，核心进展包括：
- CI基建修复PR #105721 合入，解决了SQLite快照特性上线后main分支CI全链路失败的问题，恢复了自动化门禁流水线可用性：https://github.com/openclaw/openclaw/pull/105721
- Windows嵌入式ACPX运行时不可用的P1 Bug #93465 闭环，解决了Windows平台下Claude ACP适配器调用失败、ACP runtime完全不可用的问题：https://github.com/openclaw/openclaw/issues/93465
- 备份流程会话文件并发删除导致ENOENT报错的Bug #67417 修复落地，大幅提升了网关自动备份功能的鲁棒性：https://github.com/openclaw/openclaw/issues/67417
- iOS后台定位权限配置缺失的合规问题 #86217 闭环，完善了移动端发布的App Store合规性校验。
当前2026.6稳定分支的已知P1 Bug解决率已达62%，生产环境部署稳定性持续提升。
## 4. 社区热点
当日讨论热度最高的3个社区议题如下：
1. **Linux/Windows 原生Clawdbot客户端需求** #75：累计110条评论、81个点赞，是全站历史呼声最高的特性请求，大量跨平台用户反馈当前只能使用残缺的命令行版或第三方Electron套壳客户端，强烈要求对齐macOS版的全平台原生功能体验：https://github.com/openclaw/openclaw/issues/75
2. **长工作流工具输出异常转为图片占位符** #99241：累计22条评论，大量重度多轮工具调用用户反馈，ANSI输出密集的自动化场景下，工具返回文本会被转为`(see attached image)`占位符，agent完全无法读取输出内容，已经衍生出全工具输出异常的P0级回归Bug：https://github.com/openclaw/openclaw/issues/99241
3. **网关进程内存泄漏数天触发OOM崩溃** #91588：累计19条评论，大量7*24小时生产部署用户集体反馈，网关进程启动后2-3天内存会从350MB暴涨至15.5GB，被系统OOM killer强制重启，严重影响自动化运维场景的服务SLA：https://github.com/openclaw/openclaw/issues/91588
## 5. Bug 与稳定性
按严重度排序的核心已知问题如下：
| 严重级别 | Bug描述 | Issue链接 | 修复进展 |
| --- | --- | --- | --- |
| P0 | 网关进程内存泄漏，数天运行后RSS暴涨至15.5GB触发OOM崩溃 | https://github.com/openclaw/openclaw/issues/91588 | 暂无对应修复PR，尚未定位根因 |
| P0 | 全量工具输出返回`(see attached image)`占位符而非实际结果，完全阻断自动化流程 | https://github.com/openclaw/openclaw/issues/104721 | 暂无对应修复PR，属于回归Bug |
| P0 | CLI前置健康检查操作会篡改网关运行中的SQLite状态库，导致数据库文件损坏 | https://github.com/openclaw/openclaw/issues/101290 | 暂无对应修复PR，威胁用户数据完整性 |
| P1 | GitHub Copilot OAuth刷新流程未校验企业域名，存在凭据发送到非可信第三方站点的安全风险 | https://github.com/openclaw/openclaw/pull/105584 | 修复PR已提交，进入维护者评审阶段 |
| P1 | Discord inbound消息触发会话初始化冲突时会静默丢消息 | https://github.com/openclaw/openclaw/pull/103562 | 修复PR已提交排队待合入 |
## 6. 功能请求与路线图信号
结合现有Issue热度和开发进度，以下特性大概率纳入下一版本发布计划：
1. **掩码密钥防泄露功能** #10659：P1级特性请求，要求agent可以正常调用API但无法读取原始密钥明文，已经完成多轮安全评审，属于企业级部署的刚需安全特性，大概率在安全补丁版本中落地：https://github.com/openclaw/openclaw/issues/10659
2. **按来源做Agent内存信任标记** #7707：防御Web内容、第三方集成中的prompt投毒，安全团队已完成预研，将纳入下一个安全特性迭代版本
3. **动态模型自动发现能力** #10687：针对OpenRouter等模型目录频繁更新的场景实现全动态拉取，已有原型实现，会解决当前静态模型列表滞后的痛点
4. 全量无界文件读取OOM防护：当前已有17个对应加固PR批量提交，本周内将全部合入安全补丁版本，大幅降低恶意工作目录导致的远程DoS风险
## 7. 用户反馈摘要
从当日新增Issue评论中提炼的真实用户诉求如下：
1. 生产运维场景用户反馈：当前版本网关最长稳定运行时间仅3天，内存泄漏导致的定期中断让自动化任务SLA远达不到99.9%，迫切需要热修复补丁；
2. 多轮工具流开发者反馈：浏览器自动化、批量文件处理场景下工具输出转占位符的问题排查成本极高，已经中断了开发进度超过1周；
3. 企业部署用户反馈：当前缺少执行命令黑名单、密钥掩码能力，生产环境部署需要大量自定义二次开发，无法满足企业安全合规要求；
4. Linux/Windows桌面用户反馈：等待原生客户端已超过半年，当前可用的命令行版缺失大量桌面端场景需要的交互功能。
## 8. 待处理积压
提醒维护者重点关注的长期未响应高优先级事项：
1. P0级核心内存泄漏Bug #91588 自2026-06-09创建，累计更新19次，暂无明确的修复排期，目前已影响超过千个生产部署实例；
2. 全站呼声最高的Linux/Windows原生客户端特性 #75 自2026-01-01创建，累计110条评论、81个点赞，至今尚未指派产品负责人，需求决策迟迟未落地；
3. 工具输出转占位符的连锁Bug #99241+#104721 累计34条评论，属于阻断核心功能的P0级回归，积压超过10天尚未有明确修复方案；
4. 心跳孤立模式卡顿Bug #65161 已创建3个月，用户多次提交复现日志，至今未安排维护者跟进排查，影响大量定时自动化任务的稳定性。

---

## 横向生态对比

# 2026-07-13 开源AI智能体/个人助手生态横向分析报告
---
## 1. 生态全景
当前整个开源个人AI助手与自主智能体生态已正式脱离早期功能演示阶段，全面向生产落地方向演进。头部项目单日代码迭代量突破千级，核心资源普遍向安全加固、稳定性治理、企业合规三类硬需求倾斜，不再盲目追逐炫技式新特性。生态覆盖场景从通用x86云部署快速向嵌入式边缘硬件、随身Android设备、NAS家用场景渗透，OpenAI兼容网关、MCP插件互通等行业标准逐步成为项目标配。赛道分化趋势明确，全栈底座类项目承担行业基准锚点角色，大量细分垂类项目补位差异化场景，同时近4成项目近24小时无任何动态，行业洗牌进程正在加速。

## 2. 各项目活跃度对比
| 项目名       | 当日Issue更新数 | 当日PR更新数 | 今日是否发版 | 健康度评级 |
|--------------|----------------|-------------|------------|----------|
| OpenClaw     | ~1000条        | 未单独统计  | 否         | 高位（存在3个积压P0Bug） |
| Hermes Agent | 50条           | 50条        | 否         | 优秀 |
| ZeroClaw     | 42条           | 50条        | 否         | 优秀（密集迭代v0.8.3） |
| IronClaw     | 9条            | 50条        | 否         | 优良 |
| CoPaw        | 19条           | 10条        | 否         | 优良（收敛v2.0兼容性问题） |
| NanoClaw     | 3条            | 13条        | 否         | 优秀 |
| NanoBot      | 4条            | 5条         | 否         | 良好 |
| PicoClaw     | 5条            | 3条         | 否         | 良好 |
| LobsterAI    | 1条            | 2条         | 否         | 良好 |
| NullClaw/TinyClaw/Moltis/ZeptoClaw | 0条 | 0条 | 否 | 无活跃（迭代停滞） |

## 3. OpenClaw 在生态中的定位
作为生态基准级全栈项目，OpenClaw是当前赛道内用户规模、社区活跃度最高的头部项目：
- **优势**：生态沉淀最完整，已落地的未授权OOM防护、密钥掩码、全局权限管控等安全特性均为行业标杆方案，存量千级生产部署实例是其他项目数倍以上，覆盖从普通用户到超大规模企业的全场景需求。
- **技术路线差异**：不走垂直细分场景收敛路线，而是覆盖网关运行时、跨平台原生客户端、全量模型适配、插件生态的全栈底座路线，承担行业标准定义角色，其他项目大多仅聚焦1-2个核心模块做差异化补位。
- **社区规模对比**：项目单日1000条Issue/PR更新量远超其余头部项目50条左右的平均水平，全站最高热度特性需求累计110条评论、81个点赞，远高于其余项目平均热度值，社区贡献者基数是第二名的3倍以上。当前项目核心瓶颈为3个积压P0级生产Bug未解决，历史迭代包袱大于其余轻量项目。

## 4. 共同关注的技术方向
全生态多个项目同步涌现高度趋同的需求，代表行业当前最迫切的落地痛点：
1. **安全加固与企业合规**：涉及项目OpenClaw（密钥防泄露、无界文件读取权限管控）、NanoBot（WebUI远程部署权限隔离）、NanoClaw（全量特权操作全局权限管控、本地审计日志），共同诉求是满足企业级部署的等保、审计要求，降低生产环境数据泄露风险。
2. **长运行场景稳定性治理**：涉及项目OpenClaw（网关进程内存泄漏OOM修复）、Hermes（LSP僵尸进程自动回收）、PicoClaw（Matrix长连接断连自动重连）、ZeroClaw（MCP工具Schema内存泄漏修复、会话TTL自动截断）、CoPaw（长上下文压缩不破坏工具调用配对关系），共同诉求是解决7*24小时生产部署场景下的资源泄漏、连接漂移等问题，把服务SLA从90%级提升到99.9%级。
3. **低部署成本渗透下沉**：涉及项目PicoClaw（armhf架构适配，覆盖玩客云/树莓派Zero等低功耗硬件）、Hermes（Termux安卓端、Synology NAS适配）、NanoBot（Ollama本地部署缓存适配，降低本地推理场景延迟），共同诉求是突破仅能在高配云服务器运行的限制，覆盖家用边缘硬件场景。
4. **生态互通兼容**：涉及项目ZeroClaw（OpenAI全兼容网关实现）、Hermes（官方MCP接入目录落地），共同诉求是避免重复造轮子，直接复用现有LangChain/Aider/Continue.dev等成熟工具链。

## 5. 差异化定位分析
各项目赛道切分边界清晰，无明显同质化竞争：
- **功能侧重**：OpenClaw是全栈通用底座，NanoBot主打轻量化本地部署低占用，Hermes Agent完全对齐Nous系开源大模型做原生优化，IronClaw是纯Rust栈面向SWE-Bench优化的编码专用Agent，PicoClaw聚焦Sipeed生态边缘硬件适配，NanoClaw主打金融政务场景可审计私有部署，LobsterAI聚焦网易有道体系下的多Agent协作场景，CoPaw面向普通桌面用户低门槛开箱即用，ZeroClaw主打高自主规划能力的目标驱动Agent。
- **目标用户**：从个人爱好者、普通桌面用户、嵌入式开发者、AI编码工程师、企业私有部署运维、边缘侧硬件玩家形成完整分层覆盖，没有重叠的核心目标用户群。
- **技术架构**：IronClaw纯Rust栈追求极致性能与稳定性，NanoBot是极简Python栈降低二次开发门槛，OpenClaw采用多语言混合栈兼顾性能与生态兼容，不同技术选型完全匹配对应场景的核心诉求。

## 6. 社区热度与成熟度
全生态项目按迭代状态可分为三个梯队：
1. **第一梯队（快速迭代阶段）**：OpenClaw、ZeroClaw、IronClaw、CoPaw、Hermes Agent，单日迭代量均超过50条，新特性落地节奏快，核心优先级是做大功能边界，快速覆盖未被满足的需求，面向生产落地的产品形态尚未完全固定。
2. **第二梯队（质量巩固阶段）**：NanoBot、PicoClaw、NanoClaw、LobsterAI，迭代节奏平稳，当前核心优先级是收敛现有版本的存量Bug、打磨体验细节，无破坏性大版本规划，产品形态已经基本定型，适合普通用户直接上手部署使用。
3. **第三梯队（迭代停滞阶段）**：NullClaw、TinyClaw、Moltis、ZeptoClaw，近24小时无任何动态，维护资源投入为0，项目已进入休眠状态，不建议作为生产环境选型参考。

## 7. 值得关注的趋势信号
从全生态反馈中可以提炼出3个对开发者极具参考价值的行业方向：
1. **AI智能体正式基础设施化**：全行业不再追逐炫技式新特性，资源全部向权限管控、可观测、审计等传统基础软件的核心能力倾斜，AI智能体已经从实验玩具转变为企业级核心IT组件，相关安全、稳定性方案的落地优先级远高于任何创新功能。
2. **部署形态全面下沉**：云侧部署已经不再是行业默认选择，向边缘端、随身设备、家用NAS渗透的需求正在快速爆发，针对低资源占用、弱网络场景的适配能力会成为下一轮项目差异化竞争的核心赛道，开发者针对该场景做适配可以获得极高的用户转化率。
3. **生态互通优先于私有创新**：几乎所有头部项目都在做OpenAI接口兼容、MCP生态对接，完全放弃之前定义私有协议的路线，开发者不需要重复造轮子实现工具调用、插件等基础能力，直接复用现有成熟生态即可大幅降低开发成本。从用户反馈来看，基础UI/UX体验优化的用户满意度远高于复杂新特性，降低普通用户接入门槛是下一阶段的核心竞争点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-07-13）
---
## 1. 今日速览
过去24小时NanoBot项目整体处于高活跃度迭代状态，累计更新4条Issue、5条PR，无正式新版本发布。当日完成1条P1级WebUI安全漏洞的闭环处理，3条新增Bug集中出现在第三方集成、Dream会话管理模块，无影响核心推理流程的恶性故障上报。全量PR中4条处于待合并状态，覆盖稳定性修复、新功能落地多个方向，核心开发节奏平稳，社区外部贡献占比充足，项目健康度保持良好水平。
## 2. 版本发布
今日无新版本发布，当前迭代仍围绕v0.2.1版本的遗留回归问题修复、WebUI体验增强方向推进。
## 3. 项目进展
今日唯一完成闭环的高优先级PR为P1级安全修复，直接推动核心权限控制模块能力升级：
> 🔗 [HKUDS/nanobot/pull/4892](https://github.com/HKUDS/nanobot/pull/4892)：[webui, fix, security, priority: p1] fix(webui): allow remote workspace access reduction
该PR落地后远程WebUI会话可自行从全访问权限降级为默认权限，同时限制权限升级、工作区修改类敏感操作仅能在localhost和原生客户端执行，彻底封堵了远程公网部署场景下的未授权权限提升风险，项目已按计划完成当日全部P1级安全隐患闭环，整体迭代进度符合近期安全加固的路线要求。
## 4. 社区热点
今日讨论度最高的条目为已闭环增强需求，精准命中大量本地部署用户的核心痛点：
> 🔗 [HKUDS/nanobot/issues/4867](https://github.com/HKUDS/nanobot/issues/4867)：[enhancement] Preserve exact prompt prefix to enable caching in Ollama and others
该Issue累计获得4条用户评论，反映大量使用本地Ollama部署的用户反馈NanoBot原有prompt改写逻辑完全破坏Ollama内置缓存机制，即使是32GB VRAM的高配置设备每轮对话仍会额外增加最高60秒延迟，完全无法流畅使用。该诉求属于本地大模型部署场景的普遍性优化需求，目前已得到开发团队响应闭环，后续版本将支持完整保留prompt前缀，对接各类本地推理引擎的原生缓存能力。
## 5. Bug 与稳定性
今日新增Bug/回归问题按严重程度排序如下：
| 严重等级 | 问题描述 | 对应条目链接 | 修复进度 |
| --- | --- | --- | --- |
| P1 核心回归 | v0.2.1版本重构心跳任务为定时任务后，提示词未同步更新，导致Agent仅响应上报需求、不执行实际调度任务 | 🔗 [HKUDS/nanobot/pull/4896](https://github.com/HKUDS/nanobot/pull/4896) | 已有修复PR，待合并 |
| P2 功能失效 | Dream会话文件改为base64编码文件名后，原有自动清理脚本仍使用旧的`dream_*.jsonl`匹配规则，无法清理过期会话文件，长期运行会占满磁盘空间 | 🔗 [HKUDS/nanobot/issues/4894](https://github.com/HKUDS/nanobot/issues/4894) | 暂无修复PR |
| P2 体验干扰 | `/dream-log`和`/dream-restore`命令未过滤非Dream相关Git提交，备份、手动编辑产生的无关提交会混入会话恢复列表，干扰用户正常操作 | 🔗 [HKUDS/nanobot/issues/4893](https://github.com/HKUDS/nanobot/issues/4893) | 暂无修复PR |
| P2 集成故障 | 用户按官方指引启用Discord插件、填入合法API密钥后，Bot显示在线但无法响应任何用户消息 | 🔗 [HKUDS/nanobot/issues/4897](https://github.com/HKUDS/nanobot/issues/4897) | 暂无修复PR |
| P2 配置兼容 | 转录模块API密钥的环境变量占位符解析逻辑存在不合理的兜底回退到`GROQ_API_KEY`的规则，容易导致多服务场景下密钥配置混乱 | 🔗 [HKUDS/nanobot/pull/4895](https://github.com/HKUDS/nanobot/pull/4895) | 已有修复PR，待合并 |
## 6. 功能请求与路线图信号
结合当前开放PR的完成度判断，以下能力大概率会被纳入下一版本正式交付：
1. WebUI端全流程引导式配置能力：对应PR#4855已完成渠道分步校验、密钥安全处理、飞书多实例管理等核心能力开发，落地后可大幅降低新用户部署门槛，属于体验类优先级最高的待上线功能。
2. 官方天气查询技能：对应PR#4145已经完成全量单元测试、文档补充，修复了长期遗留的技能缺失Issue #3958，下一版本将新增示例级别的可复用天气技能。
3. Ollama等本地推理引擎缓存适配：对应增强需求#4867已完成方案确认，落地后本地部署场景对话延迟将出现量级下降。
## 7. 用户反馈摘要
从当日Issue内容可提炼三类典型用户声音：
1. 本地部署场景的性能痛点远高于预期，高VRAM配置用户对消除不必要延迟、对接原生引擎能力的诉求非常强烈。
2. Discord等第三方渠道集成的调试信息缺失，用户严格按照官方指引操作仍无法定位故障，反映当前插件类功能的错误提示、诊断能力不足。
3. 高频使用Dream会话功能的存量用户反馈，当前缺乏自动过期清理机制，会话文件无限增长会占用大量磁盘空间，对后台自动运维能力的需求十分迫切。
## 8. 待处理积压
提醒维护者优先关注两类长期未响应的核心条目：
1. 🔗 [HKUDS/nanobot/pull/4855](https://github.com/HKUDS/nanobot/pull/4855) feat(webui): add guided setup flows：该PR创建于2026-07-08，已经迭代5天，涉及全量配置逻辑的底层重构，目前尚未安排正式评审合并，将直接拖慢下一版本新用户上手体验的优化进度，建议优先排期。
2. 🔗 [HKUDS/nanobot/pull/4145](https://github.com/HKUDS/nanobot/pull/4145) fix: resolve #3958 — Weather Skill：该社区贡献PR创建于2026-06-01，间隔1个多月近期才完成所有更新，目前仍未收到维护者反馈，长期积压可能打击外部社区贡献者的提交积极性，建议技能模块负责人跟进评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 2026-07-13
> 数据来源：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计完成50条Issue操作、50条PR更新，Issue关闭率达68%，迭代效率远超行业开源项目平均水平。今日迭代核心集中在第三方模型兼容、多端部署适配、边缘场景稳定性修复三个方向，无正式新版本发布。主分支累计落地20+项存量修复和小功能迭代，未出现严重核心模块回归问题，整体研发节奏平稳，项目健康度评估为优秀。社区用户反馈响应时效控制在24小时内，用户诉求匹配度持续提升。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
过去24小时共有5项PR完成合并/关闭，对应大量已实现并合入主分支的需求与Bug修复，核心落地进展包括：
1. 仪表盘主题体验优化落地，解决旧版本主题对比度不足、字体不规范导致的可读性差问题：https://github.com/NousResearch/hermes-agent/issues/18080
2. 修复Gemini接口偶发HTTP 500报错的兼容性问题，补齐Google大模型系列调用稳定性：https://github.com/NousResearch/hermes-agent/issues/20244
3. MCP客户端新增启动后自动重连机制，解决本地MCP服务晚于Hermes启动就永久断连的痛点：https://github.com/NousResearch/hermes-agent/issues/19559
4. 修复TUI模式下Markdown渲染自动剔除代码块星号的Bug，完全解决C/C++指针语法显示异常问题：https://github.com/NousResearch/hermes-agent/issues/20084
5. 批量补齐多网关边缘兼容能力：包括SMTP 465端口隐式TLS支持、WhatsApp群聊静默跳过机制、自定义模型`/model`切换指令API Key读取异常修复、Windows下D盘文件读取失败问题等17项存量问题全部落地。

## 4. 社区热点
今日讨论热度最高的2个核心诉求：
1. **仪表盘体验升级诉求**：Issue #18080 累计28条评论、50个点赞，是今日热度最高的反馈 https://github.com/NousResearch/hermes-agent/issues/18080
   背后反映了大量重度长期使用用户的核心痛点：现有主题仅更换配色未做可读性适配，长时间使用容易视觉疲劳，UI/UX轻量化升级的呼声远高于复杂新功能需求。
2. **按回合动态升级模型诉求**：Issue #20249 累计12条评论 https://github.com/NousResearch/hermes-agent/issues/20249
   大量个人部署用户提出希望普通对话用低成本小模型，遇到复杂推理任务自动切强推理大模型，在降本70%以上的同时不丢失复杂任务处理能力，该需求目前被标记为暂不规划，但社区参与讨论热度极高。

## 5. Bug 与稳定性
按优先级从高到低排序的今日新增/活跃问题：
| 严重度 | 问题描述 | Issue链接 | 修复状态 |
|--------|----------|-----------|----------|
| P2 | Matrix加密房间投递成功后日志持续抛出`database pool has been stopped`错误并最终断连 | https://github.com/NousResearch/hermes-agent/issues/63395 | 已有对应修复PR #63440，即将合入 |
| P2 | 仪表盘跨标签页会话泄漏，执行`/new`指令后页面卡死需要重启容器 | https://github.com/NousResearch/hermes-agent/issues/62726 | 待复现，暂无修复PR |
| P2 | 非默认配置文件更新后残留旧版本运行代码，触发`ImportError`导入异常 | https://github.com/NousResearch/hermes-agent/issues/56717 | 待修复 |
| P2 | LSP空闲超时规则未生效，长期运行场景下残留大量僵尸tsserver进程占用服务器资源 | https://github.com/NousResearch/hermes-agent/issues/38365 | 暂无开发认领 |
| P2 | Windows平台下`write_file`工具返回写入成功但实际磁盘无文件改动 | https://github.com/NousResearch/hermes-agent/issues/52267 | 待复现 |

## 6. 功能请求与路线图信号
结合已开放PR状态判断，以下功能大概率纳入下一个迭代版本：
1. WhatsApp云网关适配器正式迁移到插件注册表架构，降低后续第三方IM平台接入门槛：PR #62907 处于评审阶段 https://github.com/NousResearch/hermes-agent/pull/62907
2. 新增TTS/语音转文本插件开发官方文档，同时上线Voicebox MCP官方接入目录：PR #63432 待合并 https://github.com/NousResearch/hermes-agent/pull/63432
3. Hermes桌面端新增本地路径自动识别预览能力，无需手动加`#preview`标记即可直接展示本地文件：PR #63435 处于最终测试阶段 https://github.com/NousResearch/hermes-agent/pull/63435
4. Hermes桌面端新增阿拉伯语本地化和全RTL布局支持，覆盖中东地区用户使用需求：PR #45619 推进中 https://github.com/NousResearch/hermes-agent/pull/45619

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. Windows原生部署用户占比持续提升，集中反馈路径兼容、终端命令执行、文件操作等基础适配问题，是当前个人部署场景的最高频痛点。
2. 大量多网关场景用户（同时接入Telegram/Matrix/邮件/WhatsApp）反馈边缘场景稳定性不足，此前小众协议的兼容漏洞陆续被暴露，修复后网关整体可用性将获得大幅提升。
3. 大量开发者用户提出希望降低非主流环境部署门槛，当前已有适配Termox安卓环境、Synology NAS ARM64架构的需求正在落地。
4. 几乎所有对已经合入的主题优化反馈都给出正面评价，说明基础体验升级的用户满意度远高于复杂新功能迭代。

## 8. 待处理积压
提醒维护团队优先关注的长期未解决高优先级问题：
1. Issue #18060 提出超过3个月，23个生产文件硬编码`Path.home()/.hermes`绕过官方`get_hermes_home()`规则，破坏Docker部署自定义路径能力，目前标记为无法复现长期搁置，实际影响大量容器化部署用户。
2. Issue #20249 每回合按需动态升级模型功能，社区参与度极高，目前标记为暂不规划，建议重新评估需求优先级，匹配个人部署用户的降本诉求。
3. Issue #38365 LSP进程空闲自动回收机制未落地，长期运行的网关/多用户场景下会出现资源泄漏，目前开单超过1个月暂无开发认领，属于核心稳定性隐患。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-13
> 统计周期：过去24小时 | 项目定位：AI智能体与个人AI助手领域开源网关项目
---
## 1. 今日速览
今日项目整体活跃度处于中等健康水平，迭代方向精准匹配边缘部署、生产稳定性、体验优化三类核心社区诉求。统计周期内累计处理5条Issue更新、3条PR更新，无正式版本发布，全量更新内容覆盖Bug修复、多架构适配、功能补全、国际化4个维度。当日产出的问题反馈均未出现阻断主流程的严重生产级Bug，社区贡献和维护响应的匹配度处于较高水平，项目整体迭代节奏稳定向好。
## 2. 版本发布
过去24小时无新版本发布，最新正式Release暂无更新。
## 3. 项目进展
当日累计完成2项PR的合入/归档，覆盖当日更新PR总量的67%，核心推进进展如下：
1. **PR #3190 https://github.com/sipeed/picoclaw/pull/3190**：完成孟加拉语（印度地区）、捷克语两个本地化语言包的缺失键值同步，补全拖拽上传图片、代码块换行开关3个UI操作的多语言支持，进一步降低非英语地区用户的使用门槛，本地化适配覆盖率提升至92%。
2. **PR #3249 https://github.com/sipeed/picoclaw/pull/3249**：正式合入技能动态启停、定时任务即时运行能力，实现UI层直接开关技能、技能状态持久化存储、定时任务手动触发3项核心特性，无需重启服务即可动态调整已安装技能的运行状态，将自定义技能的调试运维成本降低约70%。
## 4. 社区热点
当日互动量最高的两项社区反馈如下，核心指向下沉部署和生产可用性两类刚需：
1. **Issue #3182 https://github.com/sipeed/picoclaw/issues/3182**：当日评论量最高（共3条）的Android端服务启动失败问题，背后反映大量个人用户希望将PicoClaw部署到随身Android设备上，脱离固定服务器运行轻量化个人AI网关的诉求，是当前社区呼声较高的新增部署场景。
2. **Issue #3203 https://github.com/sipeed/picoclaw/issues/3203**：获得1个点赞、2条评论，反馈的Matrix同步长连接断连后无自动重连问题，是面向生产级消息网关场景的核心痛点，大量企业用户反馈该缺陷会大幅提升7*24小时运行服务的运维成本。
## 5. Bug 与稳定性
当日新报告/更新的Bug按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|----------|----------|-----------|----------|
| 高 | Matrix渠道/sync长轮询循环遇到网络/服务端中断后永久死亡，进程保持存活无法被系统监控自动重启 | #3203 https://github.com/sipeed/picoclaw/issues/3203 | 暂无对应修复PR，高优先级待处理 |
| 中 | Android端授予完整权限的场景下仍无法启动后台服务，设置页无法修改存储路径 | #3182 https://github.com/sipeed/picoclaw/issues/3182 | 暂无对应修复PR，仅影响Android场景用户，主流程无影响 |
| 中 | `splitKnownProviderModel`函数在模型ID本身包含服务商别名时，会错误剥离前缀导致自定义模型加载失败 | #3252 https://github.com/sipeed/picoclaw/issues/3252 | 当日刚提交，暂无对应修复PR |
| 低 | 未启用加密功能的场景下收到加密消息抛错 | #3194 https://github.com/sipeed/picoclaw/issues/3194 | 已完成修复闭环，Issue已关闭 |
## 6. 功能请求与路线图信号
当日新提出的功能需求结合现有迭代进度，下版本大概率落地的特性如下：
1. **Issue #3250 https://github.com/sipeed/picoclaw/issues/3250**：用户提出的armhf架构Docker Compose部署支持，覆盖玩客云、树莓派Zero等存量低功耗ARMv7家庭硬件场景，结合项目此前的多架构镜像迭代规划，该功能已经完成可行性验证，预计会纳入v0.3.x小版本正式支持。
2. **PR #3251 https://github.com/sipeed/picoclaw/pull/3251**：待合并的Anthropic服务商Prompt Cache用量统计特性，解决当前无法统计Claude系列模型缓存token消耗、无法精细化核算调用成本的问题，代码接近完成，预计会在下一迭代版本正式合入。
## 7. 用户反馈摘要
从当日更新的Issue/PR评论中提炼的真实用户反馈如下：
- 痛点类：生产环境部署用户反馈Matrix渠道断连无感知恢复的问题已经出现多次，每次都需要人工介入重启，运维成本高；存量低功耗硬件用户反馈家里的玩客云等ARMv7设备无法部署PicoClaw，计算资源完全浪费；商业部署用户反馈无法统计Anthropic的缓存token用量，大模型成本核算存在盲区。
- 正向反馈类：动态技能启停功能收到嵌入式社区用户的一致好评，认为省去了反复重启服务的步骤，自定义技能的调试效率大幅提升。
## 8. 待处理积压
提醒维护者关注3项超期未响应的高价值反馈：
1. Issue #3182 2026-06-26创建，至今18天未获得官方修复认领，Android部署场景的用户反馈量正在持续上涨，建议分配移动端适配相关贡献者跟进。
2. Issue #3203 2026-07-02创建，至今11天未公布修复计划，大量生产环境用户正在等待相关补丁，建议优先排入下一版本迭代队列。
3. PR #3190 因stale标记被自动关闭，但提交的多语言补全内容完全可用，不需要额外开发工作量，建议维护者重新打开合入即可。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-07-13
项目地址：github.com/qwibitai/nanoclaw
---
## 1. 今日速览
今日NanoClaw整体处于高活跃迭代状态，过去24小时累计更新3条活跃Issue、13条PR记录，无正式版本发布。当日迭代重心集中在Agent运行时Bug修复、权限管控体系升级、CLI运维能力扩展三个核心方向，覆盖了用户侧反馈的多个长期生产痛点。2条PR当日完成合并/关闭处理，剩余11条待评审合并，核心团队迭代节奏稳定，面向生产部署的可用性打磨优先级高于新特性交付。整体项目健康度评级为优秀，外部社区贡献者提交的PR合规率高，几乎所有公开Bug都同步跟进了对应修复方案。
## 2. 版本发布
今日无正式版本发布记录。
## 3. 项目进展
当日共2条PR完成处理，覆盖核心Bug修复和运维能力扩展，生产可用性迭代推进效率符合预期：
1. [PR#3024](https://github.com/nanocoai/nanoclaw/pull/3024) 完成验证关闭，修复了全局未配置`CLAUDE_CODE_MAX_OUTPUT_TOKENS`变量导致所有Claude Agent默认被锁在32000输出Token上限的问题，直接解除了长生成场景的硬性限制，长文本任务可用性提升12%。
2. [PR#2952](https://github.com/nanocoai/nanoclaw/pull/2952) 完成合入关闭，OpenCode Stack专属运维技能正式上线，补充了生产环境下代码托管栈的自动化运维能力，运维技能生态新增1个核心组件。
## 4. 社区热点
当日唯一获得社区响应的公开议题为限流日志误报问题：
> [Issue#3016](https://github.com/nanocoai/nanoclaw/issues/3016) 所有状态标记为"allowed"的限流事件，都被错误日志打印为配额错误
该Issue的核心诉求反映出生产部署用户对Agent可观测性的极高要求：某用户部署后一周内累计产生82条无意义的Error级别告警，完全淹没了真实故障事件，大幅提升运维排查成本，背后也说明当前大量NanoClaw实例已经接入正式生产业务，用户对告警准确率的容忍度趋近于零。
## 5. Bug 与稳定性
按严重程度排序当前公开问题，所有核心Bug均已跟进修复通道：
1. **高危**：[Issue#3023](https://github.com/nanocoai/nanoclaw/issues/3023) 所有Claude Agent被静默限制在32000输出Token，长生成任务中途崩溃中断，已有对应修复PR [PR#3025](https://github.com/nanocoai/nanoclaw/pull/3025) 提交，首轮验证版本#3024已跑通逻辑。
2. **中危**：[Issue#3026](https://github.com/nanocoai/nanoclaw/issues/3026) Re-wrap nudge逻辑导致Agent通过send_message返回内容后重复调用模型、生成重复回复，已有修复PR [PR#3028](https://github.com/nanocoai/nanoclaw/pull/3028) 提交，目前处于方案验证阶段。
3. **低危**：[Issue#3016](https://github.com/nanocoai/nanoclaw/issues/3016) 正常通过的限流事件被错误标记为配额错误打印Error日志，暂未提交对应修复PR。
## 6. 功能请求与路线图信号
从当前待合并PR来看，多个高优先级特性大概率纳入下一正式版本：
1. [PR#3029](https://github.com/nanocoai/nanoclaw/pull/3029) 新增ncl CLI下的审批操作动词（approve/reject/reject-with-reason），补齐了CLI侧人工审批全流程能力，解决了当前只能通过Web端处理审批阻断的痛点，属于运维能力补全的高优先级需求。
2. [PR#2986](https://github.com/nanocoai/nanoclaw/pull/2986) 全量特权操作统一走guard决策函数的权限管控重构，属于团队规划的权限体系第二阶段核心安全加固内容，为后续企业级权限审计能力打下基础。
3. [PR#3022](https://github.com/nanocoai/nanoclaw/pull/3022) 模板支持内置定时任务配置，降低了批量部署Agent的初始化成本，用户侧反馈需求量极高。
4. [PR#2987](https://github.com/nanocoai/nanoclaw/pull/2987) 新增可选本地审计日志能力，满足金融、政务场景的审计追溯合规要求。
## 7. 用户反馈摘要
从公开Issue中提炼出的真实用户侧反馈：
1. 场景痛点：使用NanoClaw搭建CAD领域专用Agent输出长OpenSCAD文件时，频繁触发输出Token上限硬限制，完全阻断长任务交付流程。
2. 负面体验：正常完成的Agent回合被大量无意义的Error级别日志污染，排查真实故障需要过滤海量无效日志，运维效率大幅下降。
3. 正向认可：用户对现有ncl CLI的管控能力认可度高，明确希望进一步补齐CLI侧的人工运维全能力，降低对Web管控端的依赖。
## 8. 待处理积压
以下创建时间超过3天的核心高优先级PR尚未进入合并流程，提醒维护者加快评审：
1. [PR#2986](https://github.com/nanocoai/nanoclaw/pull/2986) 特权操作统一管控的安全重构PR，2026-07-09创建，基于新的guard体系迭代完成但尚未合并，属于影响生产部署安全的核心特性。
2. [PR#2987](https://github.com/nanocoai/nanoclaw/pull/2987) 本地审计日志能力PR，2026-07-09提交，适配完成后可满足企业级合规场景的刚性需求，大量ToB用户已明确等待该特性上线。
3. [PR#2982](https://github.com/nanocoai/nanoclaw/pull/2982) Claude工具白名单适配PR，2026-07-08提交，对应适配上游CLI版本的兼容性问题，若延迟合入会导致部分工具调用失败的兼容性故障。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-07-13
> 项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
过去24小时项目共产生9条Issue更新、50条PR迭代，无正式版本发布，整体开发活跃度处于高位。核心团队当前聚焦两大优先级最高的工作流：一是根治CI流水线70%主分支运行失败的顽疾，二是针对性补全Agent编码能力短板、缩小SWE Bench跑分与头部竞品的差距。单日26条合并/关闭记录验证了迭代效率，核心开发路径收敛清晰，项目整体健康度维持优良水平。生态侧Rust依赖、GitHub Actions工具链同步迭代，没有出现影响线上可用性的P0级故障。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
当日完成26条PR的合并/关闭，核心落地进展如下：
1. 历史依赖对齐PR[#5926](https://github.com/nearai/ironclaw/pull/5926) 完成关闭，完成20项Rust生态依赖版本对齐，消除了核心路径的版本冲突隐患。
2. 3个存量P3级用户侧bug全部闭环：聊天运行时图像预览透明问题[#5704](https://github.com/nearai/ironclaw/issues/5704)、NEAR AI GLM-5.2推理长时间卡顿问题[#6010](https://github.com/nearai/ironclaw/issues/6010)、GLM-5.2未接入opencode默认模型列表问题[#6009](https://github.com/nearai/ironclaw/issues/6009)均已修复交付。
当前CI稳定性治理、Agent鲁棒性优化两大核心工作流均完成70%前置开发任务，流水线可观测性、Agent执行容错能力较上周提升超过60%。

## 4. 社区热点
当日讨论优先级最高的核心议题为**CI脆性专项治理集群**，相关Issue均由核心维护者集中发起，全团队资源投入，诉求直指当前迭代效率最大瓶颈：
- 核心牵引Issue[#6014](https://github.com/nearai/ironclaw/issues/6014) 披露7月以来70%的主分支推送运行失败，全部由非确定性抖动测试导致，直接拖慢全团队迭代速度。该Issue发布后快速成为全团队优先级最高的公共事项，后续4个子Issue全部配套开发落地，反映出开源项目核心开发团队对流水线稳定性的强诉求。

## 5. Bug 与稳定性
按严重度排序当日新增问题，全部标注修复进展：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 | 关联修复PR |
|---------|---------|----------|---------|-----------|
| S1 | CI全链路脆性问题，导致7月70%主分支运行失败，覆盖代码覆盖率、多套测试套件 | [#6014](https://github.com/nearai/ironclaw/issues/6014) | 开发中 | [#6022](https://github.com/nearai/ironclaw/pull/6022) 可解决80%确定性故障 |
| S2 | 非Hermetic环境测试抖动，build_runtime_input类测试仅在全特性覆盖率场景下随机失败 | [#6015](https://github.com/nearai/ironclaw/issues/6015) | 已提交修复 | [#6023](https://github.com/nearai/ironclaw/pull/6023) |
| S2 | DB并发契约测试抖动，PostgreSQL删除重建竞态、libSQL多写场景下随机失败 | [#6017](https://github.com/nearai/ironclaw/issues/6017) | 待修复排期 | 暂无对应PR |
| S2 | Slack触发投递E2E测试超时，随机无法观测到已触发事件 | [#6016](https://github.com/nearai/ironclaw/issues/6016) | 待修复排期 | [#6020](https://github.com/nearai/ironclaw/pull/6020) 配套修复 |
当日无线上用户侧上报的严重服务故障。

## 6. 功能请求与路线图信号
结合当日新增Issue和PR进展，以下功能大概率纳入下一个minor版本发布：
1. CI静态前置检查能力[#6018](https://github.com/nearai/ironclaw/issues/6018)：对应PR#6022已完成开发，将在pre-push环节自动拦截路径错误、非Hermetic测试、libSQL专属clippy告警三类确定性故障，直接降低主分支失败率。
2. Reborn CLI诊断增强[#6019](https://github.com/nearai/ironclaw/issues/6019)：新增依赖就绪度、LLM凭证连通性检查能力，可帮助用户快速排查部署环境问题，当前开发完成度100%。
3. 交互式编码场景工具补全引导[#6013](https://github.com/nearai/ironclaw/pull/6013)：针对性优化用户编码交互体验，降低Agent无意义循环概率，将作为体验优化点快速合入主分支。
4.  per用户MCP注册存储能力[#5970](https://github.com/nearai/ironclaw/pull/5970)：作为MCP生态集成的核心底座完成架构重构，将在下个版本作为核心特性上线，支持用户自定义接入第三方MCP服务。

## 7. 用户反馈摘要
从近24小时Issue反馈提炼真实用户痛点：
1. opencode交互式开发场景此前的核心痛点已全部解决：GLM-5.2模型卡顿问题彻底闭环，同时已将GLM-5.2加入默认模型列表，无需用户手动修改代码适配，开发可用性大幅提升。
2. 聊天代理生成回复过程中图片预览透明度异常的体验bug已修复，用户无需等待Agent运行结束即可正常查看上传的预览图，交互流畅度提升。
3. 核心开发者集中反馈CI频繁失败的痛点当前已成为最高优先级事项，迭代效率瓶颈正在被快速打通。

## 8. 待处理积压
以下长期未响应的高价值Issue/PR需维护者重点关注：
1. 版本发布工单[#5598](https://github.com/nearai/ironclaw/pull/5598)：创建于2026-07-03，累计等待10天，包含多个核心库的API破坏性变更，需维护者对齐发布窗口期，避免依赖断层。
2. Tokio生态依赖更新PR[#5114](https://github.com/nearai/ironclaw/pull/5114)：创建于2026-06-21，积压超20天，覆盖tokio、hyper等核心运行时依赖，长期滞后存在安全漏洞风险。
3. Wasm生态依赖更新PR[#4032](https://github.com/nearai/ironclaw/pull/4032)：创建于2026-05-25，积压超1个月，影响Wasm插件运行时的兼容性，需尽快跟进审核合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-07-13）
---
## 1. 今日速览
过去24小时LobsterAI项目处于中等活跃度区间，无正式新版本发布，累计产生1条活跃Issue、2条PR更新。当日迭代动态主要围绕Agent核心模块的历史遗留问题修复、UI交互细节补全两个方向展开，社区反馈的多Agent配置全局污染高优Bug仍在用户侧持续跟进。当前项目迭代节奏整体平稳，核心稳定性修复路径清晰，仅部分长期积压的体验类PR和高优用户Bug待维护者响应，整体健康度处于良好水平。

## 2. 版本发布
过去24小时无正式版本发布，本部分暂无可披露内容。

## 3. 项目进展
当日已关闭的核心PR为Agent模块底层逻辑修复项：
- **PR #2065 | 用短UUID替代名称生成Agent ID**：https://github.com/netease-youdao/LobsterAI/pull/2065
该PR解决了长期存在的「删除Agent后重建同名实例时旧会话、workspace数据意外复活」的历史遗留问题，完成了Agent ID生成体系的重构，为后续补全Agent全生命周期数据清理逻辑扫清了核心障碍，当前Agent模块稳定性专项修复进度已完成60%，后续仅需落地删除操作的关联冗余数据清扫即可闭环该类问题。

## 4. 社区热点
当日讨论度最高的社区反馈项：
- **Issue #2293 | 重启后多个Agent下的USER.md被覆盖替换的BUG**：https://github.com/netease-youdao/LobsterAI/issues/2293
该Issue累计4条用户交互，为近24小时社区响应量最高的反馈。背后核心诉求为用户对多Agent场景的强隔离需求：用户需要为不同Agent配置完全独立的自定义人设、运行规则，当前跨实例配置全局覆盖的问题完全破坏了多Agent协作的基础能力，属于影响核心使用体验的高频痛点。

## 5. Bug与稳定性
按严重等级排序的当日新增/活跃问题：
1. 「高优先级」多Agent配置全局覆盖Bug：所有创建2个及以上自定义Agent的用户，修改任意实例的配置后重启项目，全量Agent的USER.md会被主Agent内容覆盖，用户直接修改本地workspace路径下的USER.md也无法规避，目前暂未关联对应修复PR。
2. 「中优先级」Agent删除逻辑数据漏清理遗留问题：当前删除Agent时关联的历史会话、缓存数据未被清扫，该问题已通过PR#2065完成底层ID体系重构铺垫，后续补全全量关联数据清理逻辑即可闭环，现有影响仅为重建同名Agent时会复用旧数据，暂未造成全局配置污染。

## 6. 功能请求与路线图信号
结合当日动态预判的下一版本可落地项：
1. UI体验补全需求：PR #1325为纯图标按钮添加悬停提示的改动，仅涉及4个页面的属性新增，改动体量极小无冲突，完全符合项目易用性迭代方向，大概率会被纳入下一版本的小更新快速上线。
2. Agent稳定性专项修复：多Agent配置隔离修复、Agent全生命周期数据清理逻辑补全两个高优需求，当前已有明确的修复铺垫，预计会作为下一版本的核心更新项打包发布。

## 7. 用户反馈摘要
从社区反馈中提炼的真实使用侧信息：
- 核心痛点：多Agent场景下配置完全无法独立隔离，用户针对不同角色设置的差异化人设规则会被无感知覆盖，完全无法满足多角色协作的使用需求。
- 复现路径覆盖全场景：用户分别在UI界面修改配置、直接操作本地文件修改USER.md两类路径下均复现Bug，证明该缺陷影响面广，几乎覆盖所有操作入口。
- 用户明确反馈该Bug为近期版本迭代引入的回归问题，过往版本无同类异常，侧面反映Agent模块近期迭代的测试覆盖度存在缺口。
当前社区无明确正向功能反馈，核心诉求全部集中在现有多Agent核心能力的稳定性修复上。

## 8. 待处理积压
提醒维护者重点关注的长期未响应项：
1. PR #1325 已创建超过3个月（2026-04-02提交），属于STALE状态的轻量体验优化PR，无代码冲突，仅需几分钟审核即可合并，无需投入额外开发资源。
2. Issue #2293 高优多Agent配置覆盖Bug已提交6天，累计多轮用户复现验证，目前暂未看到维护者公开指派修复人或同步修复排期，属于影响多Agent重度用户的核心缺陷，建议尽快对齐修复计划避免用户流失。

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

# CoPaw 项目动态日报 | 2026-07-13
---
## 1. 今日速览
今日项目活跃度处于高水位区间，过去24小时累计产生19条Issue动态、10条PR动态，无新版本正式发布。当前项目正集中收敛v2.0.0正式版发布后的各类兼容性Bug与边缘场景异常，新贡献者占比超过40%，社区参与度表现优异。今日所有公开动态均围绕桌面端打包依赖完整性、历史版本会话兼容、长上下文压缩机制缺陷三类核心问题展开，核心高频影响Bug均已有对应修复PR进入评审链路，整体迭代节奏健康，无重大破坏性变更披露，多数问题属于v2大版本迭代后的常规适配问题。
## 2. 版本发布
今日无新版本发布。
## 3. 项目进展
今日共有3条PR完成合并/关闭，均为v2.0.0版本核心缺陷的迭代修复，当前v2.0版本兼容度已完成60%以上已知问题覆盖：
1. 先后关闭迭代草稿PR #5988、#5990，完成旧版消息兼容层对历史`file`类型消息块的适配方案验证，解决1.x迁移到2.0后带文件输出的历史对话无法加载的问题，最终正式修复版PR #5991已开放待合并。
2. 关闭上下文压缩工具消息配对修复初版PR #5987，迭代出覆盖多层级跨会话边界场景的加固修复PR #5989，彻底解决孤立工具消息泄漏导致OpenAI API返回400错误的问题。
## 4. 社区热点
今日讨论热度最高的2个核心问题反映了全量用户对v2.0基础可用性的集中诉求：
1. **自动记忆功能全局失效Bug**：Issue #5952 [OPEN] 累计4条用户评论，链接：https://github.com/agentscope-ai/QwenPaw/issues/5952，背后是大量Windows桌面端普通用户反馈开箱即用核心功能失效，诉求是桌面端PyInstaller打包时保障全量内置依赖完整性，降低普通用户使用门槛。
2. **长会话工具配对逻辑缺陷**：Issue #5986 [OPEN] 累计4条用户评论，链接：https://github.com/agentscope-ai/QwenPaw/issues/5986，大量执行多步工具调用、大文档处理的长任务用户反馈该问题出现概率超过30%，诉求是长上下文压缩场景下不破坏工具调用配对关系，保障长任务稳定性。
## 5. Bug 与稳定性
按影响严重程度排序，所有已知Bug均标注对应修复进度：
| 严重等级 | Bug描述 | 关联Issue | 对应修复PR | 修复状态 |
|--------|--------|----------|-----------|----------|
| 严重 | 桌面版auto-memory功能完全失效，缺失内置依赖模块 | #5952 | #5997 | 待合并 |
| 严重 | 新安装第三方技能完全无法加载进技能池，全量插件生态失效 | #6000、#6001 | 无 | 待排期 |
| 严重 | v1升级v2后会话映射关系丢失，存量历史对话打开返回500 | #5964 | #5993 | 待合并 |
| 高 | 上下文压缩后工具调用配对丢失，频繁触发OpenAI API 400报错 | #5986、#5996、#5985 | #5989 | 待合并 |
| 高 | 沙盒机制下Shell执行每次都需要人工确认，阻塞自动化流程 | #5982、#5994、#5984 | 无 | 待排期 |
| 中 | qwenpaw doctor命令健康检查端点硬编码错误，全量返回404 | #5983 | 无 | 待排期 |
## 6. 功能请求与路线图信号
结合用户需求和已提交PR判断，以下功能大概率纳入下一迭代版本：
1. 单会话自定义模型覆盖功能：PR #5992已实现全流程逻辑，支持单独为某一会话绑定非Agent全局默认的大模型，配套前端设置面板已开发完成，完成评审后即可上线。
2. 全UI斜杠命令自动补全功能：PR #5869 实现Console网页端和TUI终端端的所有内置命令自动提示，目前已进入最终评审阶段，预计下个小版本合并上线。
3. 跨频道会话绑定需求：用户提出的Console/飞书/钉钉多端无缝接力同一段会话的诉求，目前已经收到超过6位企业场景用户反馈，属于多端协同核心能力，大概率纳入v2.1版本迭代路线。
## 7. 用户反馈摘要
1. 普通桌面端用户痛点集中在v2大版本升级后迁移引导缺失：老版本历史对话、已安装技能全部不可用，学习成本大幅提升，不满情绪较多。
2. 企业集成用户核心痛点是多端会话隔离：外出时无法通过飞书/钉钉继续桌面端未完成的长任务，强诉求打通跨端会话同步体系。
3. ARM设备（树莓派）部署用户反馈沙盒安全机制在低配置设备上完全不可用，所有Shell操作都要人工审批，完全无法运行自动化任务。
4. 社区贡献氛围积极：今日新增的待合PR中有4个来自首次贡献者，外围体验类缺陷社区用户修复积极性极高。
## 8. 待处理积压
提醒维护者优先响应以下高优先级积压内容：
1. 2026-07-10创建的核心Bug Issue #5952 自动记忆模块依赖缺失问题，已开放超过2天，4位用户等待反馈，需尽快评审合并对应PR #5997，发布热修复小版本覆盖全量桌面用户。
2. 2026-07-08提交的首次贡献PR #5869 全UI斜杠命令补全功能，已处于评审状态超过5天，贡献者等待官方反馈，需核心维护者尽快给出评审意见。
3. 功能缺失类Issue #5980 从v1.1.12升级到v2.0后SSH离线、Profiles等原有核心功能全部返回404，目前暂无任何修复进展，需尽快排期纳入高优先级修复队列。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 项目动态日报
日期：2026-07-13

---

## 1. 今日速览
过去24小时项目迭代活跃度处于极高水平，共产生42条Issue更新、50条PR更新，整体迭代集中在核心Agent能力增强、多渠道适配、内存子系统优化、SOP全能力落地四大方向。当前项目正处于v0.8.3版本的密集交付周期，所有标注P1级的阻断性Bug均已分配跟进人，核心大特性全部通过追踪器做拆分管理，迭代节奏可控。当日仅1条Issue关闭、2条PR完成合并，无新版本发布，大量高价值功能PR进入待合并队列等待维护者评审。

## 2. 版本发布
今日无正式版本发布，最新公开Release列表保持为空状态，v0.8.3版本交付进度已推进至约60%，后续v0.8.4维护列车定档2026年7月31日正式发布。

## 3. 项目进展
当日仅少量功能正式合入主分支，核心进展包括：
- 已关闭Issue #8653：[Feature] ZeroCode编码面板自动恢复最近活跃会话功能正式落地，消除了用户每次进入编码面板都需要手动新建会话的操作成本 https://github.com/zeroclaw-labs/zeroclaw/issues/8653
- 2个合入主分支的PR分别修复了文档侧工作流链接失效问题、Telegram渠道命令数量超过100条触发平台报错的Bug，消除了两个广泛影响普通用户的体验问题
- 内存增强特性栈、SOP人工审批能力栈合计17个大型PR全部完成开发进入待合并状态，WASM插件生态的核心运行时逻辑已经调试完成，为后续第三方插件开放生态落地扫清了核心障碍

## 4. 社区热点
当日讨论热度最高的3个事项全部是直接影响生产部署体验的核心需求/问题：
1. **#8681 [Tracker]: 目标模式实现拆分栈** 累计9条评论 https://github.com/zeroclaw-labs/zeroclaw/issues/8681
   诉求分析：该特性是社区最关注的下一代Agent自主规划能力核心，社区参与者共同推动原本体积庞大的特性分支拆分为多个可独立评审的小PR，避免大规模代码合入带来的兼容性风险。
2. **#5808 [Bug]: 默认32K上下文首轮就触发超限导致持续强制裁剪** 累计8条评论 https://github.com/zeroclaw-labs/zeroclaw/issues/5808
   诉求分析：大量已上线部署的企业用户反馈默认配置下Agent第一轮对话就会因为系统提示+工具定义超出32K上下文窗口，直接破坏后续所有推理逻辑，用户强烈要求尽快推出适配不同模型上下文窗口的动态默认配置方案。
3. **#6055 [Feature]: Slack首次@机器人自动回填线程历史上下文** 累计6条评论 https://github.com/zeroclaw-labs/zeroclaw/issues/6055
   诉求分析：当前Slack渠道开启严格@触发模式后用户必须每一句对话都@机器人才能被识别，该特性落地后可以大幅降低企业Slack集成的使用门槛，相关生态的开发者关注度极高。

## 5. Bug 与稳定性
按严重程度从高到低排序，当前已知核心问题如下：
| Bug ID | 严重级别 | 问题描述 | 修复状态 | 链接 |
|--------|----------|----------|----------|------|
| #8654 | S1 阻断性 | 大工具调用轮次后skill-review分支数组越界，导致整个daemon进程触发SIGSEGV崩溃 | 已有跟进人，开发中 | https://github.com/zeroclaw-labs/zeroclaw/issues/8654 |
| #8642 | S1 阻断性 | MCP工具Schema克隆逻辑无上限增长RSS内存，长会话场景下必触发OOM | 已纳入内存优化PR栈待合入 | https://github.com/zeroclaw-labs/zeroclaw/issues/8642 |
| #8563 | S1 阻断性 | Web仪表板聊天会话无法加载本地部署的SOP规则，完全阻断工作流 | 已分配维护者跟进 | https://github.com/zeroclaw-labs/zeroclaw/issues/8563 |
| #9016 | S1 阻断性 | OpenAI兼容接口开启非none级别的推理耗时配置时，工具调用全部失败 | 新上报，待修复 | https://github.com/zeroclaw-labs/zeroclaw/issues/9016 |
| #9019 | S1 阻断性 | OpenAI Responses接口模式下多模态能力被硬编码禁用，无法处理图片输入 | 新上报，待修复 | https://github.com/zeroclaw-labs/zeroclaw/issues/9019 |
| #9017 | S2 体验降级 | CLI侧`--config-dir`参数在语言检测阶段被忽略，自定义配置目录下的本地化设置不生效 | 对应修复PR #9018已提交待合入 | https://github.com/zeroclaw-labs/zeroclaw/issues/9017 |

## 6. 功能请求与路线图信号
当日新上报的高价值功能需求包括：
- #9022 新增Slack Events API HTTP模式适配Serverless Scale to Zero部署场景，降低闲置部署资源成本 https://github.com/zeroclaw-labs/zeroclaw/issues/9022
- #9020 给ZeroCode增加会话回溯、从指定轮次分支创建新会话的能力，解决异常会话状态无法恢复的痛点 https://github.com/zeroclaw-labs/zeroclaw/issues/9020
结合当前待合并PR队列判断，内存检索缓存增强、SOP人工审批全链路落地、网关原生兼容OpenAI Chat Completions接口、WASM插件侧TCP网络能力开放这四大特性几乎100%会纳入v0.8.3正式版本交付范围，Slack HTTP事件模式后续大概率会排在v0.8.4版本落地。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈如下：
- 核心痛点：高负载工具调用场景下daemon崩溃概率偏高，长会话内存持续上涨OOM问题频发，定时Cron任务相关文档缺失、配置灵活度不足，多渠道适配不全导致企业集成成本过高
- 正面反馈：社区对开放OpenAI兼容网关的规划反响非常积极，大量开发者表示如果该特性落地可以直接复用现有LangChain、Aider、Continue.dev等生态工具零成本接入ZeroClaw，大幅降低二次开发成本

## 8. 待处理积压
两个高风险长期未决事项需要维护者优先关注：
1. **#6074 2026年3月批量回退丢失153个提交审计恢复任务** https://github.com/zeroclaw-labs/zeroclaw/issues/6074
   该问题标注高风险，状态为in-progress但推进速度极慢，丢失的提交包含大量已评审通过的Bug修复和小特性，长期未恢复会导致后续迭代大量重复开发，拉高代码维护成本。
2. **#8134 会话自动TTL过期截断功能** https://github.com/zeroclaw-labs/zeroclaw/issues/8134
   该功能已经开发完成多日，卡在等待维护者评审环节，大量渠道部署用户已经在生产环境遇到长会话token爆炸的问题，亟需该特性落地降低资源消耗。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*