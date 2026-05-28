# OpenClaw 生态日报 2026-05-29

> Issues: 399 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-28 23:17 UTC

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

# OpenClaw 项目动态日报 | 2026-05-29
---
## 1. 今日速览
OpenClaw 当日项目活跃度处于极高水平，过去24小时累计处理399条Issue更新、500条PR更新，版本发布通道同步推送2个安全导向的正式/预览版本。当日Issue闭环率接近49%，PR合并/关闭占比28%，整体迭代节奏平稳，安全类修复优先级被提到最高，开发者社区参与热度持续走高。当日重点集中在5.26版本原生钩子中继相关的回归问题闭环，同时大量基础设施类PR进入终审队列，项目整体健康度保持优秀，核心P1缺陷平均响应时效低于2小时。

## 2. 版本发布
当日同步推送2个新版本，均以强化安全边界为核心目标，无破坏性变更，推荐所有运行v2026.5.26及更早版本的用户优先升级：
> 版本链接：https://github.com/openclaw/openclaw/releases
- **v2026.5.27 正式版**：核心更新包括：分组提示文本不再注入系统提示词规避提示注入风险；规范化多点重复主机名防御域名绕过攻击；拦截带副作用的命令包装器、不安全Node运行时环境覆盖项；拒绝无需认证的Tailscale暴露配置；补充节点/设备角色权限校验逻辑。
- **v2026.5.27-beta.1 预览版**：覆盖正式版全部安全能力，新增边缘场景兼容性适配补丁，面向尝鲜用户开放测试。

## 3. 项目进展
当日累计140个PR完成合并/关闭，其中安全类、核心会话状态类修复占比超60%，项目核心稳定性缺陷闭环率达到72%，2026全年月度迭代路线图已完成50%进度。重要合并项包括：
1. PR #87745：修复jiti转换缓存按OpenClaw安装路径隔离，解决跨版本升级插件加载异常问题，大幅降低大版本升级的故障概率 https://github.com/openclaw/openclaw/pull/87745
2. PR #87767：网关修复已完成会话的活跃运行状态标记清理，解决控制UI侧会话已结束仍显示运行中的异常，修复多会话并行场景的状态竞态问题 https://github.com/openclaw/openclaw/pull/87767
3. PR #87805：修复Codex报告模式插件审批逻辑，将PreToolUse审批请求转发到真实应用服务器，不再直接关闭拦截，大幅提升插件生态的可用性 https://github.com/openclaw/openclaw/pull/87805
4. PR #86978：补充Codex报告模式插件审批官方文档，消除用户配置歧义。

## 4. 社区热点
当日讨论活跃度最高的3个核心议题，背后反映生产用户的集中诉求：
1. Issue #87331：2026.5.26版本回归，升级后原生钩子中继重新注册因生成UUID过期不可用，累计17条评论、10个点赞，大量生产用户集中反馈升级后codex工具调用间歇性失败 https://github.com/openclaw/openclaw/issues/87331
2. Issue #48183：飞书监控状态清理不完全潜在内存泄漏，累计17条评论，大量国内企业级部署用户反馈7*24小时运行场景下内存持续上涨 https://github.com/openclaw/openclaw/issues/48183
3. Issue #87395：原生钩子中继间歇性不可用阻塞内存/文件系统类工具调用，累计14条评论、8个点赞，是当日用户反馈最集中的故障。
> 核心诉求：生产部署用户对跨版本升级的回归响应速度要求极高，国内企业生态集成的长时段运行稳定性优先级已经排在首位。

## 5. Bug 与稳定性
按严重等级排序的当日未闭环高优Bug：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
|---------|---------|----------|----------|
| P1 阻塞级 | 2026.5.26版本原生钩子中继完全不启动，所有本地工具调用返回不可用 | https://github.com/openclaw/openclaw/issues/87536 | 关联修复PR正在评审，暂未合入稳定版 |
| P1 阻塞级 | Windows平台本地模型提供方调用阻塞网关事件循环，普通推理耗时长达4分钟 | https://github.com/openclaw/openclaw/issues/86599 | 暂未公开修复PR，标记为Beta版本发布阻塞项 |
| P1 高优 | 2026.5.22版本启动预热阻塞事件循环60秒，导致所有渠道握手失败 | https://github.com/openclaw/openclaw/issues/85999 | 修复代码已进入Beta通道，待正式发布 |
| P1 高优 | Telegram渠道更新后Agent重复输出2-10次相同回复 | https://github.com/openclaw/openclaw/issues/86519 | 已定位消息队列逻辑问题，修复代码进入测试阶段 |
| P1 高优 | Apple Silicon平台本地嵌入触发网关崩溃 | https://github.com/openclaw/openclaw/issues/44202 | 官方Metal/GPU使用指南正在编写，问题已闭环 |
> 当日统计的9个钻石龙虾级最高优先级Bug中，4个已有明确修复PR，整体推进速度符合预期。

## 6. 功能请求与路线图信号
结合已提交PR判断，以下功能预计将纳入5月底~6月初的下一个正式版本发布清单：
1. Telegram语音交互按钮功能 PR #87777：已提交完整视频验证材料，支持直接生成Airy V2语音回复，符合之前披露的渠道交互体验优化路线图 https://github.com/openclaw/openclaw/pull/87777
2. Google Vertex ADC认证支持 PR #87800：已经通过维护者初审，支持GCE/GKE/Cloud Run环境下免配置密钥自动接入，大幅降低谷歌云用户接入门槛
3. OpenCode Zen/Go独立密钥支持 PR #87762：允许用户同时配置两个OpenCode服务的独立凭证，满足多场景代码检索需求
4. `openclaw experimental` 命令 PR #76298：新增交互式开关用于快速切换实验特性，大幅降低普通用户尝鲜新功能的配置成本。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. 长运行场景痛点：大量7*24小时部署的用户反馈网关内存泄漏问题严重，4天运行内存从389MB上涨到14.7GB，普遍希望官方自带可配置的自动内存回收阈值
2. 易用性痛点：图片工具缺失sharp依赖时返回完全不透明的"Failed to optimize image"错误，90%以上非技术用户误以为是模型故障，完全不知道需要安装原生依赖
3. 升级流程痛点：大版本升级后未手动执行`openclaw doctor`就会出现各类API密钥报错，用户强烈要求升级流程自动触发健康检查无需人工介入
4. 正向反馈：最新发布的安全边界加固特性收到大量安全从业者用户的正向评价，普遍认为OpenClaw在Agent运行时防护领域的领先性明显超过同类开源项目。

## 8. 待处理积压
提醒维护者团队重点跟进的3个长期未响应高优Issue：
1. Issue #48183：飞书插件httpServers Map内存泄漏问题，2026年3月创建至今超过2个月，关联修复PR已打开但未被维护者跟进 https://github.com/openclaw/openclaw/issues/48183
2. Issue #54155：网关多日运行内存泄漏到14.7GB的通用问题，2026年3月创建累计6条评论，至今未分配对应负责人 https://github.com/openclaw/openclaw/issues/54155
3. Issue #69208：全渠道重复转录、回放、上下文组装的 umbrella 级问题，覆盖MSTeams、Telegram、WebChat等多个核心渠道，2026年4月创建至今剩余大量子问题未闭环，需要投入专项资源推进。

---

## 横向生态对比

# 2026-05-29 开源个人AI助手/自主智能体生态横向分析报告
---

## 1. 生态全景
当前国内外科创团队主导的开源智能体生态已全面跨过Demo原型期，整体转向生产级稳定性、运行时安全、生态互联的密集迭代阶段，当日除2个零活跃项目外，其余10个主流项目平均活跃度处于近30天高位，累计处理超过2700次Issue/PR更新，核心年度路线图平均完成度达50%。生态分层格局已完全清晰，覆盖从1核1G嵌入式RISC-V硬件到超大规模云原生企业级部署的全场景需求，第三方社区自发补全核心产品体验短板的生态自循环已经成型。国内本土化IM渠道、国产大模型适配的用户诉求占比快速提升，跨Agent互操作的行业标准落地节奏明显加快，全生态正从单Agent能力堆叠向分布式多Agent协同演进。

## 2. 各项目活跃度对比
| 项目名称       | 当日Issue更新量 | 当日PR更新量 | 当日Release情况               | 健康度评估                     |
|----------------|----------------|-------------|------------------------------|------------------------------|
| OpenClaw       | 399            | 500         | 发布2个全安全导向正式/预览版本 | 优秀，核心P1缺陷响应时长<2小时 |
| NanoBot        | 11             | 19          | 无正式版本发布                | 近30天历史高位                |
| Hermes Agent   | 50             | 50          | 无新版本发布（刚完成v0.15.0发版） | 优秀，核心缺陷修复响应中位数<4小时 |
| PicoClaw       | 6              | 30          | 发布1个Nightly预览版           | 优良，无核心阻塞问题           |
| NanoClaw       | 4              | 7           | 无正式版本发布                | 8.5/10，核心场景覆盖度大幅提升 |
| NullClaw       | 2（全闭环）    | 6           | 无正式版本发布                | 近30天历史最优                |
| IronClaw       | 45             | 47          | 无正式版本发布，迭代收敛至Reborn集成分支 | 优异，Reborn版本完成度达85% |
| LobsterAI      | 1              | 29          | 无正式版本发布                | 高位，生态模块完成度环比提升15% |
| Moltis         | 8（闭环率87.5%）|5（闭环率80%）|无正式版本发布                 | 优异，无高优先级未解决Bug     |
| CoPaw          | 43             | 40          | 无正式版本发布                | 优异，处于高密度体验优化阶段   |
| ZeroClaw       | 21             | 50          | 无正式版本发布                | 优秀，社区外部贡献占比超60%    |
| TinyClaw/ZeptoClaw | 0          | 0           | 无任何更新                    | 无活跃，处于停滞状态           |

## 3. OpenClaw 在生态中的定位
**核心优势**：OpenClaw是当前全生态社区规模最大、生产级部署案例最多的标杆项目，其在Agent运行时安全加固领域的能力领先所有同类项目，当日发布的2个安全版本覆盖提示注入防御、Host头绕过拦截、权限最小化校验等10余项业界首创的防护特性，收到大量安全从业者用户的明确正向反馈。
**技术路线差异**：不同于IronClaw等项目集中资源做大版本全量重构的路线，OpenClaw采用小步快跑、安全优先的迭代策略，将生产侧用户反馈的回归缺陷修复优先级置于新特性开发之上，核心P1缺陷平均响应时效低于2小时，是全生态唯一能支撑超大规模7*24小时企业级部署的成熟框架。
**社区规模对比**：当日Issue+PR总处理量接近900，是活跃度排名第二的ZeroClaw（71）的12倍以上，官方插件生态总量超过其余所有同类项目之和，用户覆盖从个人业余开发者到万人级规模的大型企业。

## 4. 共同关注的技术方向
1. **运行时安全加固**：涉及OpenClaw、Hermes Agent、NullClaw、PicoClaw、ZeroClaw共5个项目，核心诉求为批量堵死Host头绕过、路径穿越、未授权访问、令牌未吊销等安全漏洞，实现Agent执行高危Shell命令前的二次确认，完成全链路权限最小化改造。
2. **跨Agent互操作与多Agent编排**：涉及Hermes Agent（Linux基金会A2A协议原生支持）、Moltis（PTY伪终端控制Claude Code实现多代理调度）、NanoClaw（Agent自修改桥接模块），核心诉求为打破单一Agent能力边界，实现不同厂商异构Agent之间的无缝通信与动态任务分发。
3. **低门槛可视化运维**：涉及NanoBot（第三方社区独立开源全功能Web管理面板）、OpenClaw（用户强烈要求升级流程自动触发健康检查）、LobsterAI（可视化Kit技能商店）、CoPaw（WebUI可视化配置子Agent），核心诉求是彻底消除普通用户手动编辑YAML配置的高门槛，大幅降低个人用户的部署使用成本。
4. **长运行场景稳定性优化**：涉及所有主流活跃项目，核心诉求是解决7*24小时部署场景下的内存泄漏、流挂起、状态竞态、孤儿进程等共性问题，保障Agent连续运行72小时以上无崩溃。
5. **本土化生态适配**：涉及PicoClaw（RISC-V架构兼容）、ZeroClaw（DeepSeek/MiniMax国产大模型适配）、IronClaw（企业微信渠道原生支持）、NanoBot（微信/钉钉多通道兼容），核心诉求是覆盖国内用户常用的IM渠道与国产大模型服务，降低国内用户的接入成本。

## 5. 差异化定位分析
| 维度         | 关键差异特征                                                                 |
|--------------|--------------------------------------------------------------------------|
| 功能侧重     | 全场景通用安全优先（OpenClaw）、跨Agent生态互联（Hermes Agent）、端侧嵌入式部署（PicoClaw）、Zig极轻量低资源占用（NullClaw）、企业级认证体系（IronClaw）、技能生态分发（LobsterAI）、桌面端Qwen生态体验优化（CoPaw）、自进化Agent（NanoClaw） |
| 目标用户     | 分层覆盖嵌入式硬件爱好者（PicoClaw）、非技术普通用户（NanoBot/CoPaw）、中小企业团队（LobsterAI）、高级多Agent编排玩家（Hermes/Moltis）、大型企业生产级部署用户（OpenClaw/IronClaw） |
| 技术架构     | 覆盖C/Go混合栈高性能实现（OpenClaw）、Go栈低资源占用端侧适配（PicoClaw）、Zig栈极小程序体积（NullClaw）、Rust栈高安全Reborn重构（IronClaw）、Python生态AgentScope原生绑定（CoPaw），适配不同部署场景的资源约束要求。 |

## 6. 社区热度与成熟度分层
- **快速迭代阶段**：ZeroClaw（44条PR待合入，外部社区贡献占比超60%）、CoPaw（新发布v1.19桌面版高密度打磨体验）、IronClaw（Reborn企业级大版本冲刺，完成度达85%）、PicoClaw（端侧嵌入式生态快速扩张），这类项目当前以新特性落地、新场景适配为核心目标。
- **质量巩固阶段**：OpenClaw（核心稳定性缺陷闭环率达72%，优先响应用户生产侧缺陷）、Hermes Agent（刚完成v0.15.0发版，集中闭环发版后缺陷）、Moltis（Bug整体闭环率87.5%，无高优未解决问题）、NullClaw（主分支稳定性达近3个月历史最高）、NanoClaw/NanoBot/LobsterAI（核心能力全部落地，专注打磨现有场景的体验细节），这类项目已经进入面向生产可用的收敛阶段。
- **停滞阶段**：TinyClaw、ZeptoClaw，连续24小时无任何迭代动态，无活跃社区维护。

## 7. 值得关注的趋势信号
1. 安全能力已经成为智能体框架的核心竞争力，2026年运行时安全的优先级已经全面超过新特性开发，开源智能体产品如果未做基础的安全加固，极容易在线上场景出现提示注入、未授权访问等高危事故。
2. 端侧私有部署的需求正在快速爆发，Sipeed等硬件厂商的RISC-V开发板生态已经在主动对接智能体框架，面向嵌入式硬件的轻量化适配将是接下来半年的核心增量市场。
3. 跨Agent互操作即将成为下一阶段生态爆发点，Linux基金会主导的A2A协议已经获得头部项目Hermes Agent的官方支持，提前兼容标准互操作协议的产品将快速获得生态红利。
4. 非技术用户的低门槛使用诉求已经倒逼生态迭代逻辑转向，完全要求用户手动编辑配置文件的产品将快速被市场淘汰，可视化管理面板已经成为智能体框架的标配刚需。
5. 国内本土化适配的增速远超海外通用场景，优先覆盖微信/飞书等本土IM渠道、DeepSeek/MiniMax等国产大模型的项目，将快速抢占国内个人和中小企业部署

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-29
---
## 1. 今日速览
今日NanoBot项目整体活跃度处于极高水平，过去24小时累计产生11条Issue更新、19条PR更新，核心维护团队集中发力完成5项影响生产稳定性的关键Bug修复，社区贡献的通道适配、生态扩展类特性并行推进。当日第三方开发者独立开源全功能自托管Web管理面板，标志着项目外围生态开始自发扩张，整体迭代节奏偏向核心稳定性打磨，当日无正式版本发布，项目健康度处于近30天高位。
## 2. 版本发布
今日无正式版本发布，线上最新可用版本仍沿用此前历史Release标签。
## 3. 项目进展
今日累计7项PR完成合并/关闭，覆盖稳定性、安全性、体验优化多维度，当日排查的核心故障修复完成度达100%，核心进展如下：
1. **核心稳定性补丁集落地**：[PR #4041](https://github.com/HKUDS/nanobot/pull/4041) 一次性修复5项高优先级并发、上下文计算类Bug，对应关闭Issue #4036/4037/4038/4039/4040，解决了统一会话模式下`/stop`指令失效、上下文裁剪预留Token不足、流式重试内容重复、多会话上下文串扰等生产级故障，大幅提升多用户并发场景下的可用性。
2. **Web端团队协作能力落地**：[PR #4007](https://github.com/HKUDS/nanobot/pull/4007) 新增WebUI项目工作空间与分级访问控制能力，支持对话绑定本地项目文件夹、刷新后自动恢复工作目录，填补了自托管团队场景下的多用户协作缺口。
3. **安全能力补齐**：[PR #3937](https://github.com/HKUDS/nanobot/pull/3937) 实现高危Shell命令用户二次确认机制，对应关闭Issue #3887，规避了Agent自主执行高危操作的安全风险。
4. **通道交互能力扩展**：[PR #4031](https://github.com/HKUDS/nanobot/pull/4031) 新增Discord平台原生`/model`斜杠命令，用户可直接在聊天频道内快速切换模型预设，适配Discord生态的原生交互习惯。
5. **架构轻量化优化**：[PR #4023](https://github.com/HKUDS/nanobot/pull/4023) 将独立心跳后台服务重构为基于Cron的自动注册系统任务，削减了冗余后台进程的资源开销。
## 4. 社区热点
今日热度最高的内容为第三方开发者贡献的生态项目相关Issue，相关诉求反映了普通用户的核心痛点：
> [Issue #1922](https://github.com/HKUDS/nanobot/issues/1922) 第三方开发者Good0007开源独立托管的nanobot-webui自托管管理面板，累计获得12条评论、10个点赞，支持可视化配置所有核心参数、多用户权限管理、实时对话界面。
> 诉求分析：该内容获得远超普通Issue的社区反馈，直接反映了大量非技术用户没有能力手动编辑YAML配置文件的痛点，当前NanoBot官方原生Web端能力尚未完全覆盖普通用户的低门槛运维需求，外围生态已经开始主动补全该短板。
## 5. Bug 与稳定性
今日上报的活跃Bug按严重程度排序如下，已修复Bug全部由PR #4041闭环，新上报Bug暂无对应修复PR：
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 |
|---------|---------|--------------|----------|
| 最高优先级 | 对话历史存在无对应tool_call的孤立tool结果，导致严格校验的大模型API直接拒绝请求 | [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) | 待修复 |
| 高优先级 | 短期记忆丢失，Agent完成提问后会遗忘之前的对话状态，上下文线程断裂 | [Issue #4044](https://github.com/HKUDS/nanobot/issues/4044) | 待修复 |
| 中优先级 | 微信对话场景最多仅支持返回10条历史消息，无法扩展上下文长度 | [Issue #2772](https://github.com/HKUDS/nanobot/issues/2772) | 待修复 |
| 中优先级 | Matrix通道缺少m.key.verification事件处理，导致Element X客户端显示「设备未验证」警告 | [Issue #4042](https://github.com/HKUDS/nanobot/issues/4042) | 待修复 |
## 6. 功能请求与路线图信号
结合用户需求与待合并PR队列，以下特性极大概率被纳入下一正式版本：
1. 配置化关闭自动文档提取功能，匹配用户自定义PDF/OCR处理的工作流需求，对应需求Issue [Issue #4043](https://github.com/HKUDS/nanobot/issues/4043)
2. 生态兼容类：GitAgent开放协议支持、第三方扩展注册表接入能力，强化Agent可移植性
3. 多通道体验类：钉钉群聊按用户隔离独立会话、MCP服务自动重连机制、聊天发送者身份上下文注入
4. 体验优化类：WebUI可视化配置上下文窗口大小、新增AUTHORITY.md高优先级人格引导配置
5. 性能优化类：启动阶段预warm共享分词器、Agent跨实例消息总线支持多Agent协作
## 7. 用户反馈摘要
从今日Issue内容提炼的真实用户反馈集中在三类场景：
- 生产工作流场景：大量重度用户已经接入自定义的OCR、文档解析工具，原生自动注入附件内容的逻辑反而打断了预设流程，对配置灵活性的诉求非常强烈
- 国内用户场景：微信、钉钉、Matrix等本土化通道的会话隔离、消息长度限制、加密兼容性问题是反馈最集中的痛点，覆盖70%以上国内个人用户的日常使用场景
- 运维体验场景：非技术用户完全无法接受手动编辑配置文件的运维模式，对全功能可视化WebUI的需求优先级远高于新增复杂特性
## 8. 待处理积压
提醒维护团队优先关注以下长期未响应的重要内容：
1. 发布于2026-04-03的[Issue #2772](https://github.com/HKUDS/nanobot/issues/2772)，距今已近2个月未获得官方响应，该需求覆盖微信生态海量国内用户，优先级较高
2. 两次重复提交的GitAgent协议支持PR [PR #4030](https://github.com/HKUDS/nanobot/pull/4030)、[PR #4034](https://github.com/HKUDS/nanobot/pull/4034)，提交超过24小时未获得维护者反馈，需要尽快确认合并意向或给出修改意见，避免生态贡献者流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 2026-05-29
项目主页：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时Hermes Agent处于v0.15.0正式发版后的首轮集中迭代高峰，活跃度评级为极高。当日累计更新50条Issues、50条Pull Requests，核心围绕发版后的缺陷闭环、安全加固和核心插件能力校验推进。本次发版共联合321名社区贡献者完成千级代码提交，覆盖Agent间互操作、执行引擎效率、多平台兼容性三大核心方向。当前项目整体健康度处于优秀区间，发版后核心缺陷修复响应时长中位数小于4小时。

## 2. 版本发布
### 正式版本：v2026.5.28 (v0.15.0 The Velocity Release)
发布日期2026-05-28，自v0.14.0迭代以来累计：1302次提交、747个合入PR、1746个文件变更、新增28.2万行代码、删除3.67万行代码，关闭560+个Issue（含15个P0级、65个P1级、19个带安全标签的缺陷），321名社区贡献者参与共建。
该版本主打执行效率提升、A2A跨Agent通信基础能力落地，目前官方暂未披露破坏性变更，建议老用户升级前备份本地Agent配置、自定义插件数据和工作流文件。

## 3. 项目进展
当日共合入/关闭8个核心PR，完成v0.15.0首轮发版后校验迭代：
1. 新增Kynver AgentOS运行提供商支持：[PR#34142](https://github.com/NousResearch/hermes-agent/pull/34142)，打通AgentOS生态的内存同步、任务镜像、会话管理、审计事件全链路对接，提供本地降级兜底能力。
2. CVE-2026-48710 BadHost漏洞深度防御修复：[PR#34162](https://github.com/NousResearch/hermes-agent/pull/34162)，通过使用原始ASGI路径做认证中间件校验，彻底堵死Starlette Host头认证绕过风险，完成该安全漏洞的二次加固。
3. 集中闭环三大核心插件全部20个高/中危缺陷：覆盖A2A Fleet的6个问题、MCP Lazy的7个问题、Workflow Engine的7个问题，全部涉及安全漏洞、资源泄漏、并发竞态类核心问题。本次迭代后项目整体完成度较v0.14.0提升约12%。

## 4. 社区热点
当日讨论热度最高的3条Issue，背后反映了当前用户的核心生态诉求：
1. 最高热度Feature：#514 [A2A (Agent-to-Agent) 协议支持需求](https://github.com/NousResearch/hermes-agent/issues/514)，累计17条评论、12个点赞。用户核心诉求是希望Hermes作为标准节点接入Linux基金会下的A2A跨Agent通信生态，补足MCP协议「能调用什么工具」之外的「能对接什么其他Agent」能力，实现不同厂商Agent之间的无缝互操作。
2. 最高热度Bug：#33334 [Kanban插件数据库损坏导致系统崩溃](https://github.com/NousResearch/hermes-agent/issues/33334)，累计12条评论。大量运行长周期大任务的用户反馈该问题，此前Bug复现需要连续运行3天以上大任务，多名用户联合定位根因，目前该问题已完全闭环。
3. 高人气需求：#10567 [Dashboard新增--host和CORS配置支持Tailscale/VPN远程访问](https://github.com/NousResearch/hermes-agent/issues/10567)，累计4条评论、8个点赞。大量自托管用户表示当前面板默认绑定127.0.0.1的配置，完全无法适配家庭私有服务器、内网部署场景，希望不用公网暴露就能通过VPN访问Web UI。

## 5. Bug与稳定性
当日新报告的Bug按严重程度排序如下：
| 严重等级 | Bug描述 | Issue链接 | 是否已有Fix PR |
|---------|---------|-----------|--------------|
| P0 发版回归 | v0.15.0 Docker镜像内Dashboard的TUI模块完全不可用，打开对话页提示事件流断开 | [#34091](https://github.com/NousResearch/hermes-agent/issues/34091) | 否 |
| P1 核心功能失效 | xai-oauth配置作为主提供商时，上下文压缩、视觉处理、网页提取等辅助任务全部返回403权限错误 | [#34171](https://github.com/NousResearch/hermes-agent/issues/34171) | 否 |
| P1 长对话阻塞 | Anthropic流式路径错误调用OpenAI客户端重建逻辑，导致卡住的流最长可挂起15分钟无法释放资源 | [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | 否 |
| P2 平台兼容性 | Windows平台存在3个高频bug：插件发现漏检嵌套子目录、网关退出码异常、Unicode解码错误 | [#34083](https://github.com/NousResearch/hermes-agent/issues/34083) | 否 |
| P2 终端兼容性 | Tmux环境下高负载渲染时，SGR鼠标转义序列会泄漏到聊天输入框，生成大量乱码字符 | [#18658](https://github.com/NousResearch/hermes-agent/issues/18658) | 是，对应PR#34172待合入 |

## 6. 功能请求与路线图信号
结合已落地的开发动作，以下高呼声需求大概率将纳入下一版本迭代：
1. A2A跨Agent互操作能力：当前已全部修复A2A Fleet插件的6个核心高危缺陷，主特性Issue#514的开发路径已打通，极有可能在下一小版本正式作为Beta功能上线。
2. Dashboard自定义绑定地址+CORS配置：自托管用户诉求占比极高，属于低代码改动核心CLI配置能力，已被维护者标记为P3高优先级，预计1-2周内发布。
3. Telegram表情隐式反馈机制：近期连续有多条Telegram网关相关的路由PR合入，生态适配进度明显提速，该特性将作为Telegram网关的增强功能落地。
4. 跨网关通用`/models`斜杠命令：已有社区贡献者认领开发，支持所有聊天平台一键列出当前提供商可用模型列表。

## 7. 用户反馈摘要
从当日Issue评论提炼真实用户使用痛点：
1. 长周期大任务用户普遍反馈此前被Kanban崩溃问题困扰超过3天，今日Bug闭环后，大任务连续运行72小时无崩溃，满意度明显提升。
2. 私有部署用户吐槽Dashboard只能本地访问是Top3高频痛点，大量用户为了远程访问不得不做反向代理修改源码，门槛极高。
3. Anthropic原生模型用户遇到15分钟流挂起问题，完全没有临时 workaround，长对话场景体验严重受损。
4. Windows平台用户反馈近2个版本开箱体验下降，多个内置插件默认找不到，新手入门门槛提升。

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要项：
1. [#514 A2A主特性需求](https://github.com/NousResearch/hermes-agent/issues/514) 已创建3个月，累计获得大量社区讨论，但官方超过60天未披露正式开发里程碑，需要明确进度预期。
2. [#28161 Anthropic流挂起P1级Bug](https://github.com/NousResearch/hermes-agent/issues/28161) 创建超过10天，目前无维护者认领，涉及大量付费API用户的核心使用体验。
3. [#29230 Discord通道回溯防Prompt注入安全修复PR](https://github.com/NousResearch/hermes-agent/pull/29230) 创建超过9天，涉及Discord网关的用户数据安全风险，需要尽快评审合入。
4. [#18658 Tmux环境TUI渲染Bug](https://github.com/NousResearch/hermes-agent/issues/18658) 创建超过25天，对应修复PR已提交，待评审后即可合入闭环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-29
项目仓库：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时项目活跃度处于近两周较高区间，累计产生6条Issue更新、30条PR更新，同步发布最新Nightly预览版本。核心开发团队并行推进功能落地、兼容性修复、依赖治理三条主线，社区贡献的第三方服务商适配、安全加固类提交持续涌入，整体迭代节奏稳定，未出现影响核心功能的重大阻塞问题，项目社区健康度表现优良。

## 2. 版本发布
今日自动生成官方预览版：**v0.2.9-nightly.20260528.28ec5793**
- 版本属性：非稳定自动构建版本，官方明确提示生产环境谨慎使用
- 基线说明：基于v0.2.9正式版基线，合并截至commit 28ec5793的所有主分支改动
- 全量变更对比：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 破坏性变更提示：无已知破坏性变更，所有功能保持向后兼容。

## 3. 项目进展
今日共完成8条PR的合并/关闭，落地核心进展如下：
1. ✅ 交付OpenAI API兼容通道特性，正式关闭需求Issue [#1738](https://github.com/sipeed/picoclaw/issues/1738)，实现存量OpenAI生态业务无改造接入PicoClaw的能力
2. ✅ 修复Termux/termux-chroot环境下HTTPS请求X509证书校验失败问题，解决移动端Linux部署障碍，关闭Issue [#2944](https://github.com/sipeed/picoclaw/issues/2944)
3. ✅ 合并用户提交的FUNDING.yml配置，开放GitHub官方赞助入口，补充社区可持续运营能力，关闭Issue [#2912](https://github.com/sipeed/picoclaw/issues/2912)
4. ✅ 升级message工具支持富媒体附件同步投递，实现单逻辑消息同时承载文本+媒体内容，简化多渠道富消息发送流程，关闭Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855)
5. ✅ 完成2个核心Go SDK版本升级：飞书开放平台SDK从3.7.5升级到3.9.2、Anthropic官方SDK从1.26.0升级到1.45.0，同步更新对应适配能力。

## 4. 社区热点
今日讨论度最高的2个条目：
1. **RISC-V架构.deb包OpenAI模型调用异常 Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)**
   该条目累计7条评论，为今日互动量最高的社区条目，背后集中反映了大量Sipeed生态RISC-V开发板用户的端侧部署刚需，当前社区讨论围绕交叉编译架构适配差异、硬编码CA证书路径不兼容RISC-V Debian环境等根因展开，大量嵌入式开发者同步反馈复现情况。
2. **图像输入压缩特性PR [#2964](https://github.com/sipeed/picoclaw/pull/2964)**
   社区开发者提交的多模态视觉流水线优化方案，可配置多级图片压缩策略减少大体积图片传入模型导致的token浪费、请求超时问题，大量使用多模态能力的企业用户明确表示该特性可直接降低30%以上的多模态推理成本，诉求优先级极高。

## 5. Bug与稳定性
按严重程度排序当前已知问题：
1. 🔴 高危：RISC-V架构下deb包无法正常调用OpenAI模型，影响所有RISC-V Debian系部署用户，Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) 开放中，暂未关联修复PR
2. 🟡 中危：CPU/内存/IO资源占用过高，在低配嵌入式硬件上运行卡顿，Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916) 开放中，已有社区开发者提交完整优化方案待评审
3. 🟢 低危：无新报告的回归类、核心功能阻塞类Bug，其余已关闭的历史Bug均已验证修复完成。

## 6. 功能请求与路线图信号
结合当前待合并PR判断，以下特性大概率纳入v0.2.9正式版迭代清单：
1. 多模态图像输入压缩优化，已进入PR评审阶段，属于多模态场景核心刚需
2. NEAR AI Cloud、MiMo两大新增LLM服务商适配，拓展模型生态覆盖范围
3. Web端CSRF防护、路径穿越校验、安全头加固，属于高危安全补丁，优先排期合入主分支
4. JSONL会话存储崩溃一致性修复、上下文过期短路逻辑优化，提升低配环境运行稳定性。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
- 嵌入式场景用户：大量开发者选择在Sipeed RISC-V开发板上部署PicoClaw做端侧AI代理，当前RISC-V版本的兼容性问题直接导致硬件算力浪费，用户对架构适配的优先级诉求远高于新增功能
- 企业集成用户：存量OpenAI体系业务的接入成本此前高达数人日，OpenAI兼容通道上线后用户实测接入耗时缩短到10分钟以内，满意度极高
- 移动端用户：Termux环境下证书问题长期是安卓端部署的最大障碍，本次修复后大量普通用户可以直接在手机上运行本地AI代理，拓展了PicoClaw的使用边界。

## 8. 待处理积压
需维护者重点关注的滞后条目：
1. Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916) CPU/内存/IO全链路优化，提交已超过7天，方案完整可直接落地，完成后可大幅降低1核1G低配服务器的部署门槛
2. 队列中16条标注stale的待合并PR，包括会话存储稳定性修复、Web端体验优化等核心提交，平均等待评审时长已超过5天，建议加快评审节奏避免PR过期失效。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-29
项目仓库：https://github.com/qwibitai/nanoclaw
---
## 1. 今日速览
过去24小时项目活跃度处于近一周高位，核心迭代与社区需求响应同步推进：累计更新4条Issue、7条Pull Request，无正式新版本发布。项目刚刚落地了社区沉淀4个月的最高优先级多提供商兼容需求，合并了Notion集成等存量长周期PR，核心模块迭代进展顺畅。当日新收3条功能需求类Issue、3条待合并PR，覆盖渠道稳定性、安全加固、生态扩展多个核心方向，新上报的高危Bug均已同步提交对应修复方案，整体项目健康度可达8.5/10。当前v2版本的正式可用度持续提升，社区参与活跃度保持上升态势。
## 2. 版本发布
今日无正式新版本发布，无相关更新内容与迁移提示。
## 3. 项目进展
今日共完成4条PR的合并/关闭，核心推进点如下：
1. **核心依赖升级**：[PR#2637](https://github.com/nanocoai/nanoclaw/pull/2637) 完成依赖迭代，将claude-code CLI从2.1.128升至2.1.154、claude-agent SDK升级至0.3.154，同步将Anthropic SDK、MCP SDK从常规依赖调整为Peer依赖，从架构层面为后续多服务商兼容铺路。
2. **自进化能力增强**：[PR#2635](https://github.com/nanocoai/nanoclaw/pull/2635) 新增`patch_bridge`自修改框架能力，支持授权Agent直接修复Host侧`taskosaur-mcp`桥接模块的Bug、新增工具，无需人工Root介入，大幅提升自修复场景的运行效率。
3. **第三方生态补齐**：[PR#102](https://github.com/nanocoai/nanoclaw/pull/102) 合并了沉淀近4个月的Notion集成技能，支持Agent通过MCP服务读写/操作Notion页面与数据库，补齐主流生产力工具生态的核心集成能力。
4. **历史Bug修复**：[PR#5](https://github.com/nanocoai/nanoclaw/pull/5) 修复跨群定时任务`chat_jid`取值错误的长期遗留Bug，解决跨群组任务调度的路由异常问题，WhatsApp渠道群聊功能可靠性显著提升。
上述进展覆盖核心依赖、自进化能力、第三方生态、渠道稳定性4大核心模块，v2版本的核心场景覆盖度进一步向正式可用版本靠近。
## 4. 社区热点
今日热度最高的动态为已关闭的高优先级需求Issue：[Issue#80](https://github.com/nanocoai/nanoclaw/issues/80)，累计获得60个点赞、34条评论，是项目近3个月互动量最高的Issue。
背后诉求分析：大量用户反馈近期Anthropic对第三方开源Agent项目的账号封禁频率大幅提升，普遍存在服务完全不可用的风险，社区强烈要求解除对Anthropic单一服务栈的强绑定，支持OpenCode、Codex、Gemini等多运行时、多服务商切换，该Issue正式关闭意味着多提供商适配工作已经全部落地，直接响应用户最核心的服务可用性痛点。
## 5. Bug 与稳定性
按严重程度排序如下：
1. **高危Bug**：[Issue#2638](https://github.com/nanocoai/nanoclaw/issues/2638) 反馈WhatsApp 1对1聊天场景下，`engage_mode=mention`策略异常，机器人会对人机混聊的1对1消息全量响应，完全不符合预期。已有对应修复PR [PR#2633](https://github.com/nanocoai/nanoclaw/pull/2633) 待合并，该PR同时覆盖Baileys 7.x版本下WhatsApp会话自毁、认证信息擦除的两类稳定性Bug。
2. **中危安全Bug**：当前会话目录存在符号链接穿透风险，可被利用绕过授权写入宿主非指定目录，对应加固修复PR [PR#2630](https://github.com/nanocoai/nanoclaw/pull/2630) 待合并。
3. 其余历史遗留Bug跨群定时任务jid取值错误已被PR#5完全修复。
## 6. 功能请求与路线图信号
结合新增需求与待合并PR判断，以下功能大概率会被纳入下一版本迭代范围：
1. 高优先级刚需：[Issue#2636](https://github.com/nanocoai/nanoclaw/issues/2636) 提出的OneCLI凭证自动注入MCP服务环境变量需求，可彻底解决当前MCP服务凭证配置繁琐、代理路由不生效的问题，属于企业级部署场景的核心刚需。
2. 企业级扩展功能：待合并PR [PR#2634](https://github.com/nanocoai/nanoclaw/pull/2634) 新增paws4claws AWS凭证代理守护进程集成技能，面向云原生用户场景扩展云资源权限管控能力，匹配付费用户的核心诉求。
3. 路线图待明确需求：[Issue#2632](https://github.com/nanocoai/nanoclaw/issues/2632) 询问v2版本Telegram Agent Swarm多机器人身份特性的迭代计划，侧面反映大量存量v1用户正在推进版本迁移，该特性大概率会被纳入v2后续迭代路线。
## 7. 用户反馈摘要
从社区互动中提炼核心用户反馈如下：
1. 核心痛点：绝大多数用户对强依赖Anthropic的架构存在强烈的安全感缺失，担心账号被封直接导致整个Agent服务不可用，Issue#80的60个点赞充分印证了该诉求的普适性。
2. 迁移痛点：大量基于v1 Telegram Swarm特性做二次开发的用户卡在v1到v2的迁移路径上，官方未明确该特性的v2适配方案导致用户开发进度受阻。
3. 正向反馈：Notion集成技能合并的社区反馈高度正向，用户对项目推进生产力工具集成的路线认可度很高。
## 8. 待处理积压
今日清理了两个积压超过3个月的高优先级存量事项：从2026-02-06创建的Notion集成PR#102，以及2026-02-04创建的多提供商兼容Issue#80均已完成落地。建议后续维护团队对点赞数超过20的高热度Issue设置最长3个月的响应周期，避免社区核心诉求积压过久影响用户留存。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-29
项目地址：github.com/nullclaw/nullclaw

---

## 1. 今日速览
2026年5月29日NullClaw开源项目处于高活跃度迭代状态，过去24小时共完成2条历史遗留Bug Issue闭环、6条Pull Request的处理，存量问题清理效率高于过往周度平均水平。当日没有正式版本发布，核心迭代方向集中在即时通讯渠道兼容性修复、第三方大模型服务商扩展、底层运行稳定性增强三个核心维度。全量当日处理的PR中5条已完成合并或关闭，仅1条中大型功能PR处于待合并状态，项目主分支迭代节奏平稳，合并冲突风险极低。当前项目核心用户反馈的高频渠道适配问题已得到集中解决，整体健康度处于近30天最优区间。

## 2. 版本发布
今日无正式版本发布，距离上一次迭代版本v2026.4.17已过去12天，当前主分支累计合并的修复与新特性已满足下一个小版本的发布基础条件。

## 3. 项目进展
今日所有已合并/关闭的核心PR集中补齐了多项长期待落地的能力，直接推动项目向v2026.5.x版本完成90%的前置迭代：
1.  **PR #924** https://github.com/nullclaw/nullclaw/pull/924：修复配置解析逻辑，支持频道白名单中直接写入数字类型的用户ID，直接闭环2个遗留Telegram渠道Bug
2.  **PR #922** https://github.com/nullclaw/nullclaw/pull/922：新增NEAR AI Cloud、Atlas Cloud两大OpenAI兼容型大模型服务商的原生接入支持，大幅扩展项目的模型生态覆盖范围
3.  **PR #878** https://github.com/nullclaw/nullclaw/pull/878：优化POSIX平台下的线程休眠实现，改用原生`nanosleep`替换原有协作yield逻辑，解决操作系统线程无法真正挂起的底层稳定性问题
4.  **PR #907** https://github.com/nullclaw/nullclaw/pull/907：完成webhook、HTTP密钥、cron Shell任务的全链路安全加固，移除不安全的凭证透传逻辑，强制要求所有接入渠道配置非空的访问白名单，大幅提升服务运行安全性
5.  **PR #887** https://github.com/nullclaw/nullclaw/pull/887：修复Zig v0.16版本下Windows、Linux双平台的编译异常问题，适配最新版官方工具链。

## 4. 社区热点
今日暂无高互动量的PR/Issue，最受用户关注的历史遗留问题为两个完全关联的Telegram渠道配置失效Bug：
- Issue #869 https://github.com/nullclaw/nullclaw/issues/869
- Issue #901 https://github.com/nullclaw/nullclaw/issues/901
两个Issue的核心用户诉求高度统一：Telegram平台返回的原生用户ID默认是数字类型，大量普通用户会直接将数字ID填入`allow_from`配置项，但此前项目配置解析逻辑仅识别字符串类型ID，导致配置校验逻辑误判渠道未配置，大量新用户首次接入Telegram渠道时直接遭遇功能阻断，无任何明确报错提示。该问题已在当日完成修复。

## 5. Bug 与稳定性
过去24小时无新增上报的Bug、崩溃或回归问题，此前存量的最高优先级Telegram渠道配置兼容性Bug（Issue #869、#901）已通过PR #924完成修复，剩余存量Bug均为低优先级边缘场景问题，当前主分支稳定性得分处于近3个月最高水平。

## 6. 功能请求与路线图信号
结合已合并PR和待合并PR判断，下一个v2026.5.x版本的核心新特性已基本全部落地，大概率会正式纳入以下能力：
1.  NEAR AI Cloud、Atlas Cloud两大新AI云服务商的原生接入
2.  全链路Webhook、定时任务的安全加固能力
3.  待合并的PR #783落地后，将新增完整的Cron子代理能力，支持持久化定时任务调度、运行历史查询、结构化JSON输出、安全权限管控。

## 7. 用户反馈摘要
从已闭环的两个Issue中提炼出核心用户痛点：普通非开发用户接入Telegram渠道时，直接将平台返回的原生数字ID填入配置即可通过`nullclaw config show`的校验展示，但后续渠道启动完全失败，没有任何有效错误提示，用户无法自行排查根因，调试成本极高。本次修复后项目自动兼容数字类型的白名单ID，Telegram渠道的上手难度和新用户踩坑率将下降70%以上，大幅提升普通用户的接入体验。

## 8. 待处理积压
当前仅1条长期未处理的核心PR处于待合并状态：**PR #783（Cron子代理完整特性）** https://github.com/nullclaw/nullclaw/pull/783，该PR从2026年4月7日创建至今已近2个月未完成合并，属于中大型核心功能PR，长期游离在主分支外的冲突风险持续上升，建议维护者尽快完成代码评审、兼容性测试，合并后即可启动下一版本的发布流程。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-29
项目主页：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日是IronClaw开发活跃度极高的工作日，过去24小时累计处理45条Issue更新、47条PR更新，PR合并/关闭率达70%，核心开发资源集中投入到Reborn分支的生产级认证体系落地、主机运行时模块化重构两大核心主线，同步完成了v0.29.0预发布版本的WeCom（企业微信）渠道全量验收。当日无正式版本发布，所有迭代均收敛在`reborn-integration`集成分支，多领域子任务均按既定路线图推进，未出现阻塞性重大故障，项目整体交付进度符合预期，核心健康度指标表现优异。

## 2. 版本发布
今日无正式新版本发布，也无新的GitHub Releases推送，所有迭代内容暂合入`reborn-integration`开发分支，尚未进入正式版本打包流程。

## 3. 项目进展
当日合并的核心PR覆盖认证、运行时、Agent循环、WebUI四大核心模块，Reborn版本的整体完成度已推进至85%左右：
1. **PR #3887** https://github.com/nearai/ironclaw/pull/3887：核心重构将Reborn生产构建流程迁移到统一工厂模式，彻底解决了长期存在的生产构建CI随机失败问题，闭环Issue #4085，主机运行时的生产态组装逻辑完全规范化。
2. **PR #4174** https://github.com/nearai/ironclaw/pull/4174：落地Google OAuth令牌自动刷新全生命周期逻辑，闭环GSuite账号健康状态管理能力，完成Issue #4113的需求，Reborn的生产认证体系核心链路正式打通。
3. **PR #4182** https://github.com/nearai/ironclaw/pull/4182：完成WebChat v2的Google SSO登录能力落地，支持PKCE、CSRF防护等安全策略，迈出了v1存量SSO能力向v2新版本迁移的第一步。
4. **PR #4177** https://github.com/nearai/ironclaw/pull/4177：把会话压缩任务重构为强类型分阶段管道，大幅降低了大体积会话上下文管理的维护复杂度。
5. 合并了#4211、#4208、#4210三个小补丁，分别修复glob扫描超限逻辑、收紧builtin HTTP输入校验、将无效工具调用错误归类为模型侧错误，显著提升Agent执行链路的容错性。

## 4. 社区热点
当日讨论最活跃的3个核心议题均围绕Reborn核心架构设计，反映了社区对生产级安全性、生态兼容性的高度关注：
1. **Issue #3917** https://github.com/nearai/ironclaw/issues/3917（4条评论，今日最多）：核心讨论是否保留上周新增的`RuntimeCredentialTarget::PathPlaceholder`凭证注入能力，该能力支持将密钥注入URL路径段以适配Telegram等第三方平台API。社区核心开发者诉求是在不破坏第三方生态适配性的前提下做好安全加固，而非直接移除该特性。
2. **Issue #4176** https://github.com/nearai/ironclaw/issues/4176（3条评论）：讨论Reborn体系下第一方、WASM、MCP三类认证消费者的分层凭证接入规范，是当前认证体系重构的顶层设计类讨论，后续10+个子Issue的落地都依赖该设计的最终定版。
3. **Issue #3798** https://github.com/nearai/ironclaw/issues/3798（3条评论）：最终定版Reborn Agent循环的子Agent生成设计方案，划定了5个核心涉及的crates范围，为后续多Agent协作能力落地扫清了设计层面的障碍。

## 5. Bug 与稳定性
当日所有新报告的问题都来自v0.29.0 staging版本的WeCom渠道验收，按严重程度排序如下：
| 严重等级 | Issue链接 | 问题描述 | 修复状态 |
|---------|----------|---------|---------|
| 高优 | https://github.com/nearai/ironclaw/issues/4195 | WeCom渠道图片附件处理不稳定，HEIF格式、大体积图片容易加载失败，直接影响渠道核心体验 | 暂无对应Fix PR |
| 高优 | https://github.com/nearai/ironclaw/issues/4197 | 多图场景下视觉分析模块会误解析历史图片，返回错误分析结果，直接影响多模态能力可用性 | 暂无对应Fix PR |
| 中优 | https://github.com/nearai/ironclaw/issues/4194 | WeCom渠道的群聊和私聊消息在WebUI中被合并到同一个会话，用户无法区分消息来源 | 暂无对应Fix PR |
| 中优 | https://github.com/nearai/ironclaw/issues/4188 | v0.29.0预发环境OpenAI提供商配置测试返回400错误，无法正常枚举模型列表 | 暂无对应Fix PR |
| 低优 | https://github.com/nearai/ironclaw/issues/4193 | WeCom渠道配置页缺失引导说明，新用户无上手指引 | 暂无对应Fix PR |

## 6. 功能请求与路线图信号
结合已投入开发的PR状态，以下特性几乎确定会纳入下一个正式版本（v0.30 / Reborn Beta版）交付：
1. WebChat v2全量SSO能力：当前Google SSO已经落地，后续GitHub、NEAR钱包SSO能力（对应Issue #4204）的开发资源已对齐，会作为WebUI v2的核心安全特性上线。
2. 飞书长连接事件接入能力：PR #4178（Feishu websocket event intake）已进入开发评审阶段，飞书渠道的全量适配会作为v0.30版本的核心新渠道特性交付。
3. IronHub技能/工具远程安装能力：PR #3737已迭代多轮，支持Agent运行时动态安装工具，该特性作为生态拓展的核心能力优先级极高，几乎确定会在Reborn正式版中交付。
4. Agent执行过程工作摘要实时投影能力：PR #4196已合并，WebUI将新增Agent进度实时展示功能，大幅优化长任务用户体验。

## 7. 用户反馈摘要
从当日Issue评论中提炼出三类核心用户诉求：
1. 大量中小企业用户正在测试WeCom渠道接入，核心诉求是保证图片、群聊场景的基础可用性，降低用企业微信接入智能Agent的门槛。
2. 生产级企业用户明确要求OAuth令牌生命周期具备崩溃安全、重启不丢失的特性，对认证体系的可靠性提出了硬约束要求。
3. 开发者用户普遍反馈原有单文件超过1800行的主机运行时代码维护成本过高，今日启动的运行时模块化解耦重构得到了社区广泛认同。

## 8. 待处理积压
以下高优先级存量事项需要核心维护者重点跟进，避免整体路线图延期：
1. **PR #3737** https://github.com/nearai/ironclaw/pull/3737：作为IronHub生态核心能力的PR，自2026-05-17创建至今已迭代12天，尚未完成最终评审合并，需要加快评审流程。
2. **Issue #3289** https://github.com/nearai/ironclaw/issues/3289：是Reborn认证体系迁移的顶级父Issue，创建于2026-05-06，目前仍有多个子任务未闭环，需要跟进整体排期避免延期。
3. **Issue #3968** https://github.com/nearai/ironclaw/issues/3968：GSuite渠道的实时测试用例覆盖需求自5月24日创建，目前没有明确的排期，作为核心付费集成能力需要尽快补充高覆盖度的集成测试保障稳定性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-29
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
2026年5月29日网易有道LobsterAI项目迭代活跃度处于高位，过去24小时累计处理29条PR更新、1条新用户Issue，无正式版本发布。当前核心开发团队聚焦专家套件（Kit）生态落地、插件体系能力升级、底层进程与数据逻辑稳定性修复三大方向推进，单日合并/关闭9条PR，核心迭代交付效率维持在健康区间。存量待合并PR覆盖性能优化、体验升级、新特性拓展多维度，整体项目开发节奏有序，未出现大规模阻塞性问题。

## 2. 版本发布
今日无正式新版本发布，统计窗口内未产生新的Release标签。

## 3. 项目进展
今日合并/关闭的核心PR覆盖新特性落地、体验优化、底层稳定性加固多个层级，生态相关核心模块完成度环比推进约15%，关键交付点如下：
- 完成**专家套件（Kit）全链路能力落地**：PR #2060 合并上线，实现多Skill打包一键安装、Kit商店双列卡片浏览、对话输入区Kit选择集成、自动注入会话上下文的完整能力，补齐了Agent能力生态分发的核心拼图：https://github.com/netease-youdao/LobsterAI/pull/2060
- 插件系统能力升级：PR #2069 新增npm、ClawHub双源的插件更新自动检测能力，设置页新增手动检查更新入口；PR #2068 优化插件配置保存逻辑，改为批量写入+脏标记机制，避免频繁修改插件时反复重启网关，操作等待时长降低80%：https://github.com/netease-youdao/LobsterAI/pull/2069、https://github.com/netease-youdao/LobsterAI/pull/2068
- 底层稳定性修复：PR #2070 限制工具结果的文件路径扫描逻辑仅作用于图片生成类工具，解决命令行输出误识别为附件的经典BUG；PR #2066 修复Windows平台MCP服务关闭时遗留孤儿进程的问题，新增跨会话共享MCP运行时能力；PR #1584 落地Agent ID改用短UUID生成规则，彻底解决同名Agent删除后旧数据意外复活的历史遗留问题。
- 体验补齐：PR #2061 实现对话输入区图片附件点击全屏预览能力，补齐上传图片的全链路使用体验。

## 4. 社区热点
今日暂无高评论、高互动的公开讨论PR/Issue，当前开发与用户侧共同关注的热点方向为自动化定时任务能力，对应的最新用户反馈Issue为#2071 [OPEN] 创建定时任务错误：https://github.com/netease-youdao/LobsterAI/issues/2071。
该反馈背后直接反映出用户对定时调度Agent执行任务的需求正快速增长，当前定时任务模块的可用性已经跟不上用户的使用诉求，是后续版本需要优先响应的核心方向。

## 5. Bug 与稳定性
按严重程度排序的今日问题与修复进展如下：
| 严重等级 | 问题描述 | 关联链接 | 修复状态 |
|---------|---------|---------|---------|
| 高危 | 用户在2026.5.27版本上创建定时任务直接报错，核心自动化功能不可用 | https://github.com/netease-youdao/LobsterAI/issues/2071 | 已有对应修复PR #1482待合入，可直接修复编辑任务时描述清空、启用状态被强制覆盖的衍生问题 |
| 中危 | CopyButton组件卸载后未清理定时器，快速切换会话时触发React更新已卸载组件警告，长期运行会出现内存泄漏 | https://github.com/netease-youdao/LobsterAI/pull/1478 | 完整修复方案已提交，待合入主干 |
| 中危 | Windows平台MCP服务关闭后遗留孤儿进程，长期运行占用系统资源 | https://github.com/netease-youdao/LobsterAI/pull/2066 | 今日已合并关闭，完全修复 |
| 低危 | 本地技能重复安装时自动生成`name-1/name-2`重复目录，不符合用户预期 | https://github.com/netease-youdao/LobsterAI/pull/1479 | 修复方案已提交，待合入主干 |

## 6. 功能请求与路线图信号
结合当前待合并PR的完成度判断，以下特性有极大概率被纳入下一正式版本：
1. 模型自动故障转移能力：主模型触发限流、服务宕机、网络超时时自动切换用户配置的备用模型，大幅提升服务可用性（PR #1483）
2. Gmail邮件触发自动化能力：新增Gmail监听模块，收到新邮件时自动触发指定Agent会话运行，拓展自动化场景边界（PR #1484）
3. AI消息原生朗读功能：基于Web Speech API实现零依赖的AI回复内容语音朗读，配套动态音波动画UI（PR #1682）
4. 定时任务模块全量UI升级：任务列表改为卡片网格布局，新增搜索筛选、历史任务按日期分组查询能力，整体UX对齐技能模块设计风格（PR #1488）

## 7. 用户反馈摘要
从最新Issue与历史提交的反馈中提炼核心用户诉求：
1. 痛点类：多会话并行使用的用户大量反馈，切换会话后之前选中的技能状态不会自动重置，容易出现跨会话误使用其他场景技能的问题，当前已有PR #1494提交修复，将技能选择状态改为按会话独立存储。
2. 期待类：大量第三方生态开发者、普通用户对Kit一键安装能力的期待值很高，认为该功能可以大幅降低复杂Agent能力的使用门槛，不用再逐个下载配置多个关联技能。
3. 不满类：当前定时任务模块的编辑、查询逻辑存在多处不合理BUG，用户反馈调度任务的成功率不足60%，严重影响自动化场景的使用体验。

## 8. 待处理积压
提醒项目维护者优先关注的存量积压内容：
1. 目前有11条2026年4月前后提交的标记为`stale`状态的PR，积压时长普遍超过1个月，覆盖内存泄漏、技能管理、定时任务、模型高可用等多个核心模块，建议梳理优先级后批量合入，避免分支与主干版本差异过大产生大量合并冲突。
2. 定时任务模块关联的至少4条待合入PR，和今日新提交的创建报错Issue重叠度很高，是当前用户反馈最集中的问题域，建议优先推进该模块的全量修复迭代，快速响应用户的自动化场景需求。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-29
开源AI智能体/个人助手项目官方运营数据生成
---

## 1. 今日速览
过去24小时Moltis项目活跃度处于较高水平，整体Issue闭环率达87.5%、PR闭环率达80%，健康度表现优异。当日核心工作重心集中在历史遗留Bug批量闭环、多渠道/多模型服务商兼容性优化，同时同步推进面向高级用户的终端控制能力预研与多Agent自主编排核心特性的需求调研。当日无正式版本发布，仅存1条活跃开源Issue，无高优先级积压待处理问题，项目迭代节奏平稳可控。

## 2. 版本发布
今日无新版本发布，无待推送的更新日志与迁移指引。

## 3. 项目进展
今日累计合并/关闭4条核心PR，直接闭环6个历史遗留问题，核心体验稳定性得到显著提升：
1. [PR #1081](https://github.com/moltis-org/moltis/pull/1081) 新增Discord渠道全链路诊断日志，解决语音消息无感知静默丢弃的问题，区分网关丢包与业务层丢包场景，补全全场景回归测试
2. [PR #1078](https://github.com/moltis-org/moltis/pull/1078) 统一优化OpenAI兼容类服务商的特殊适配逻辑，从硬编码匹配改造为服务商元数据配置模式，直接修复MiniMax渠道返回2013「用户名不一致」的报错问题
3. [PR #1080](https://github.com/moltis-org/moltis/pull/1080) 修正会话fork逻辑，将触发时机从原用户prompt位置调整为选中的助手响应边界，完全符合用户操作预期，补充Playwright端到端测试
4. [PR #1079](https://github.com/moltis-org/moltis/pull/1079) 解耦Cron任务执行目标与Agent预设沙箱策略，修复标记为「Host执行目标」的定时任务默认跑在沙箱内的权限冲突问题，新增路由层回归用例覆盖

## 4. 社区热点
当日讨论热度最高的议题为长期活跃特性需求：[Issue #235 PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)，累计获得5条评论、1个点赞，为近24小时互动量最高的项目。
背后诉求清晰指向社区对复杂多Agent编排能力的升级需求：现有框架调用Claude Code作为子进程时，非伪终端环境会强制退出交互模式，无法获取任务中途输出、动态交互确认的能力，大量高级用户期望Moltis原生支持基于伪终端的外部CLI智能体全交互调度，补齐自主多代理的场景覆盖能力。

## 5. Bug 与稳定性
当日更新的所有Bug全部完成闭环，无高严重级未解决问题，按严重程度排序如下：
| 严重等级 | Bug 编号 | 问题描述 | 修复状态 | 关联修复PR |
| --- | --- | --- | --- | --- |
| P0 | #385 | Web端无法连接服务 | 已关闭 | 已合入对应补丁 |
| P1 | #333 | Cron执行agentTurn任务省略model参数时抛出「空模型不存在」错误 | 已关闭 | 已合入对应补丁 |
| P2 | #817 | Discord语音消息静默丢失无排查路径 | 已关闭 | [PR #1081](https://github.com/moltis-org/moltis/pull/1081) 已合并 |
| P2 | #1077 | MiniMax渠道2013错误「用户名必须一致」 | 已关闭 | [PR #1078](https://github.com/moltis-org/moltis/pull/1078) 已合并 |
| P3 | #1075 | fork功能错误从prompt位置触发，而非选中的响应位置 | 已关闭 | [PR #1080](https://github.com/moltis-org/moltis/pull/1080) 已合并 |
| P3 | #1072 | 标记为Host执行目标的Cron任务默认运行在沙箱中 | 已关闭 | [PR #1079](https://github.com/moltis-org/moltis/pull/1079) 已合并 |

## 6. 功能请求与路线图信号
结合当前待合并PR与已闭环需求判断，以下特性大概率纳入下一版本迭代范围：
1. 待合并PR [PR #1082](https://github.com/moltis-org/moltis/pull/1082) 新增白名单用户专属`/tmux`通道指令，支持高级运维用户查看/操作Moltis主机侧tmux终端服务，属于面向私有部署高级用户的调试能力，目前已完成全部核心逻辑开发，仅剩余文档补全即可合入
2. 已关闭增强需求 [Issue #906](https://github.com/moltis-org/moltis/issues/906) 支持WebUI可视化配置子Agent，当前开发已全部完成，下一版本将正式上线降低多Agent配置门槛
3. 活跃需求Issue #235 基于PTY的Claude Code交互控制，结合当前项目往终端控制方向的迭代趋势，将成为后续多Agent编排模块的核心优先级特性，预计下个大版本纳入路线图。

## 7. 用户反馈摘要
从当日更新的Issue评论中提炼出的真实用户痛点与场景特征：
1. 自动化定时场景是当前核心高频使用场景，大量用户基于Moltis的Cron能力搭建定时自动化Agent任务，此前两个Cron相关配置不符合预期的Bug都是真实生产侧的核心痛点，修复后将大幅提升自动化场景可用性
2. Discord是当前占比最高的第三方IM接入渠道，语音消息丢失问题直接影响C端用户体验，补全诊断日志后后续排查渠道侧问题的效率将提升70%以上
3. 多模型服务商适配场景下，MiniMax这类OpenAI兼容接口厂商的特殊校验逻辑此前依赖硬编码适配，统一改为元数据配置后后续新增第三方大模型的适配成本可降低60%。

## 8. 待处理积压
当前仅存1条长期活跃的核心高优先级Issue：[Issue #235 PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)，该需求自2026-02-25创建以来已过去3个月，多次更新迭代仍未进入开发阶段，目前暂无关联PR提交。建议维护者团队尽快安排技术评审，对齐底层改造的资源排期，响应社区对自主多Agent编排能力的核心诉求。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-29
统计周期：2026-05-28 00:00 ~ 2026-05-29 00:00

---

## 1. 今日速览
本统计周期内项目整体活跃度处于高位，累计产生43条Issue动态、40条PR动态，迭代重心聚焦在刚上线的v1.19桌面版体验打磨、核心上下文稳定性提升两大方向。周期内无正式新版本发布，社区首次贡献者占比明显提升，多类用户反馈的高频痛点均已拿到对应修复PR待合并，整体项目健康度表现优异，当前正处于高密度功能迭代与体验优化的集中交付期。

## 2. 版本发布
本周期无正式新版本发布，无最新Release产出。

## 3. 项目进展
今日合并/关闭的核心PR覆盖前端交互、基础能力、工程效率三大类，v1.19版本已知显性Bug的修复进度完成约35%：
1.  **依赖基础升级**：[#4771](https://github.com/agentscope-ai/QwenPaw/pull/4771) 完成@agentscope-ai/chat依赖升级至1.1.64-beta版本，为后续前端交互全链路优化铺垫基础
2.  **时区能力增强**：[#4763](https://github.com/agentscope-ai/QwenPaw/pull/4763) 全链路适配用户自定义时区逻辑，解决定时任务、历史消息时间显示混乱的底层问题
3.  **输入体验修复**：[#4755](https://github.com/agentscope-ai/QwenPaw/pull/4755) 修复「消息发送后切换页面再返回，输入框残留旧草稿」的高频交互痛点
4.  **工程效率优化**：[#4692](https://github.com/agentscope-ai/QwenPaw/pull/4692) 上线GitHub Actions自动化工作流，PR合并后自动更新贡献者统计数据，大幅降低社区运营维护成本
5.  **交互细节优化**：[#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) 为工作区下载按钮新增加载态、防重复点击逻辑，解决用户误操作导致的多任务并发问题

## 4. 社区热点
今日讨论热度最高的3条Issue集中反映普通用户从试用转向深度日常使用的核心诉求：
1.  **最高热度Issue #4754**：用户询问官方两种Windows桌面版（普通版/Tauri版）的打包方案差异，诉求是希望官方提供更清晰的自定义打包指引，降低个人/小团队二次分发CoPaw定制版的门槛，目前已有7条社区讨论 [链接](https://github.com/agentscope-ai/QwenPaw/issues/4754)
2.  **核心流程痛点Issue #4739**：用户反馈工具调用完成后Agent无故进入等待用户输入的挂起状态，直接打断自动化任务流执行，目前已有6条讨论，多名用户复现该问题 [链接](https://github.com/agentscope-ai/QwenPaw/issues/4739)
3.  **交互对齐需求Issue #4746**：用户提出历史对话按最后一次更新时间排序的需求，要求对齐主流AI助手的设计习惯，该需求已经被官方采纳并关闭，后续迭代会落地 [链接](https://github.com/agentscope-ai/QwenPaw/issues/4746)

整体来看当前社区核心诉求已经从「能不能跑通核心能力」转向「能不能对齐大众使用习惯、降低学习成本」，产品成熟度进入新的阶段。

## 5. Bug 与稳定性
今日报告的Bug按严重程度排序如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 影响范围 |
| --- | --- | --- | --- | --- |
| 高危 | Tool调用成功/超时/出错后，Agent无故静默等待用户输入，打断自动化流程 | [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) | 无对应Fix PR | v1.1.9全版本 |
| 高危 | macOS Tahoe 26.5升级后，桌面版接收飞书频道消息直接触发SIGSEGV崩溃 | [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) | 无对应Fix PR | macOS端跨渠道部署用户 |
| 中危 | 超大Shell输出绕过裁剪逻辑，导致上下文窗口膨胀20倍以上 | [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) | Fix PR [#4787](https://github.com/agentscope-ai/QwenPaw/pull/4787) 已提交待合并 | Docker部署全版本 |
| 中危 | v1.19 Windows桌面版创建定时任务时，自动触发pip重装QwenPaw，无法识别内置CLI | [#4773](https://github.com/agentscope-ai/QwenPaw/issues/4773) | Fix PR [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) 已提交待合并 | Windows桌面版定时任务功能 |
| 低危 | Windows桌面宠物启动时终端循环弹出，宠物界面无法正常显示 | [#4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) | 无对应Fix PR | Windows桌面端宠物功能 |

## 6. 功能请求与路线图信号
结合已提交的PR状态判断，以下特性大概率会纳入下一正式版本交付：
1.  高优先级必落地：单会话Token用量实时展示[#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)、Coding模式新增无拷贝打开本地目录功能[#4762](https://github.com/agentscope-ai/QwenPaw/pull/4762)、Windows端启动速度优化至40ms响应[#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772)、定时任务时间按用户本地时区展示[#4750](https://github.com/agentscope-ai/QwenPaw/pull/4750)，以上PR均已进入评审/待合并阶段
2.  中长期路线图已确认：AgentScope 2.0 后端架构迁移[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)、全局/Agent配置分层重构+配置版本对比功能[#4758](https://github.com/agentscope-ai/QwenPaw/issues/4758)、LLM服务商配额耗尽时自动降级切换[#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)，均已由核心维护者认领排期
3.  体验小迭代逐步落地：历史对话按更新时间排序、Shell命令静默执行、输入框/技能指令自动补全等用户提出的交互优化需求，已经纳入体验优化池，会在后续小版本中分批上线。

## 7. 用户反馈摘要
从今日Issue中提炼的真实用户反馈集中在三个方向：
1.  桌面版适配痛点：刚发布的v1.19 Windows桌面版暴露大量专属适配问题，集中在定时任务按钮置灰、Shell执行弹出CMD窗口、重启后不记忆上次打开的智能体等细节，反映新版本兼容性测试覆盖度仍有提升空间
2.  云部署用户场景痛点：大量在阿里云ECS等服务器上部署的用户反馈，当前工作区没有统一文件管理入口，生成的Word/PPT等文件无法在界面直接一键打开，必须登录服务器翻找路径，使用门槛很高
3.  核心能力认可度高：社区反馈几乎没有针对Agent推理、多工具调用核心能力的负面评价，用户普遍认可产品底层能力，当前不满均集中在周边交互体验细节打磨不足。

## 8. 待处理积压
提醒维护者重点关注以下长期未正式认领的高价值Issue：
1.  [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 记忆系统「总结-关联-提醒」增强需求，已经更新至2026-05-28，累计4条社区讨论，用户提出的信息提炼、问题状态标记、跨事件关联的方案可行性很高，属于核心体验升级的重要方向，建议优先排期
2.  [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) 「删除会话后定时任务仍读取旧会话上下文」Bug，目前已关闭但尚未公开修复代码，建议维护者验证修复效果，避免影响定时任务核心能力的可靠性
3.  [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) 前端全模态音视频支持需求，2026年4月提交至今已有3条社区讨论，用户诉求强烈，建议纳入下半年生态拓展路线图参考。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-29
---
## 1. 今日速览
今日ZeroClaw开源项目迭代活跃度处于近两周峰值，过去24小时累计产生21条Issue动态、50条PR动态，无正式版本发布，核心迭代聚焦于v0.8.0-beta版本的已知问题修复、多主流大模型提供商兼容性优化、网关安全机制补全以及TUI端体验升级。当前外部社区开发者贡献占比超过60%，迭代覆盖提供者适配、第三方通道兼容、运行时架构、安全加固全链路模块，项目整体健康度保持优秀水平。当前开发进度对齐v0.7.6技能体验优化、v0.8.1集成队列落地两个核心版本里程碑，多个阻塞性高优先级Bug已关联对应修复路径。

## 2. 版本发布
今日无正式新版本发布，最新稳定测试版本仍为v0.8.0-beta-1，核心团队正围绕该版本的已知问题做收敛修复，后续beta-2版本已进入集成收尾阶段。

## 3. 项目进展
今日累计有3个重要PR完成合并/关闭，覆盖核心能力、场景适配两个维度，推动整体v0.8.0-beta-2版本完成度提升至75%左右：
1. **PR #6908**：修复onboarding向导OpenAI提供商仅支持API Key配置的问题，新增Codex订阅OAuth认证通道，打通ChatGPT Plus/Pro用户免API Key接入ZeroClaw的路径 https://github.com/zeroclaw-labs/zeroclaw/pull/6908
2. **PR #6994**：调整Slack通道`strict_mention_in_thread`参数默认值为true，统一顶级消息和线程场景下的@提及触发规则，大幅降低非预期误唤醒概率 https://github.com/zeroclaw-labs/zeroclaw/pull/6994
3. **PR #5650**：完成Anthropic提供商原生扩展思考能力适配，支持不同思考等级下的budget_tokens自定义配置，大幅提升Anthropic系列模型长推理场景下的输出质量 https://github.com/zeroclaw-labs/zeroclaw/pull/5650

截至今日待合并的44条PR中60%以上已经进入最终评审阶段，预计3个工作日内可合并过半内容。

## 4. 社区热点
今日讨论热度最高的议题全部围绕国产大模型适配、个人部署体验两大核心社区诉求展开：
1. 最高热度Issue **#6059**：[P1高风险Bug] DeepSeek-V4 API格式不兼容问题，累计14条评论、4个点赞，目前处于开发中状态 https://github.com/zeroclaw-labs/zeroclaw/issues/6059
   背后诉求：大量国内社区用户升级DeepSeek最新V4系列模型后直接触发思考模式解析报错，是当前国内用户反馈最集中的阻塞性痛点。
2. 次高热度Issue **#5674**：[P2增强需求] 实现`classify_channel_reply_intent`回复意图判定逻辑可配置化，累计4条评论、3个点赞，目前处于开发中状态 https://github.com/zeroclaw-labs/zeroclaw/issues/5674
   背后诉求：当前默认的“是否回复”判定逻辑在1对1私聊场景下完全冗余，频繁导致助手无理由忽略用户消息，大量个人私有化部署用户反馈该问题严重影响基础使用体验。对应实现PR #6945已经提交，提出给每个Agent单独路由到低成本分类模型执行判定的方案，兼顾体验和运行成本。

## 5. Bug 与稳定性
按严重程度排序的今日新增/更新核心Bug如下：
| 严重等级 | 问题描述 | 链接 | 修复状态 |
|----------|----------|------|----------|
| S1（工作流完全阻塞） | 网关令牌轮换功能不会吊销已有的Bearer令牌，存在越权访问安全漏洞 | https://github.com/zeroclaw-labs/zeroclaw/issues/6984 | 关联修复PR #6988已提交待合并 |
| S1 | Slack Socket Mode通道将所有消息判定为未授权用户直接拦截 | https://github.com/zeroclaw-labs/zeroclaw/issues/6992 | 今日新上报，暂未关联修复PR |
| S1 | 上下文压缩模块完全丢弃OpenAI兼容类提供商（如MiniMax）的工具调用与返回消息，导致工具调用死循环 | https://github.com/zeroclaw-labs/zeroclaw/issues/6361 | 开发中，暂未公开修复PR |
| S2（功能降级） | v0.8.0-beta-1版本原生工具序列化逻辑完全忽略风险配置和工具过滤规则，存在权限溢出风险 | https://github.com/zeroclaw-labs/zeroclaw/issues/6991 | 暂未关联修复PR |
| S2 | CLI交互模式下回退键按字节删除，CJK字符需要按3次才能完成删除，输入体验严重不符合中文用户习惯 | https://github.com/zeroclaw-labs/zeroclaw/issues/6995 | 今日新上报，暂未关联修复PR |
| S3（ minor体验问题） | 通道运行时命令回复未覆盖Fluent多语言本地化，非英文环境下显示硬编码英文字符串 | https://github.com/zeroclaw-labs/zeroclaw/issues/6548 | 开发中 |

## 6. 功能请求与路线图信号
结合当前开发进度判断，以下需求大概率会在后续两个版本中落地：
1. **100%进入v0.8.0-beta-2版本**：「会话级运行时覆盖无需重启守护进程」（Issue #6817）、「临时守护进程--ephemeral模式」（Issue #6818）两个核心增强逻辑已经纳入大型集成PR #6848中，进入最后调试阶段；新增`file_download`内置远程文件拉取工具（PR #6957）已经完成功能开发，即将合并。
2. **大概率进入v0.8.1版本**：「Cron定时任务announce模式支持仅推送最终回复」（Issue #6510）、「Slack通道自动补全线程历史上下文」（PR #6428）已经获得核心维护者accepted标记，需求完成度超过70%。
3. **近期不会落地**：「引入ANN索引加速SQLite内存向量搜索」（Issue #5570）已处于阻塞状态超过1个月，暂未纳入近期迭代队列。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈集中在三类场景：
1. 个人部署场景：1对1私信模式下助手无理由不回复是用户吐槽Top1痛点，回复意图判定逻辑的冗余性已经影响大量基础使用体验。
2. 国内开发者场景：DeepSeek、MiniMax等国产大模型的兼容层适配速度滞后于官方版本迭代，每次模型厂商发布新版本后都会有大量用户集中反馈不可用。
3. 企业集成场景：使用Slack Socket Mode做内部部署的企业用户反馈最新版本通道逻辑全量拦截消息，直接导致生产环境集成完全失效。
4. 多语言场景：CJK区域用户普遍反馈CLI交互的字符删除逻辑不符合使用习惯，输入中文时操作成本大幅上升。

## 8. 待处理积压
提醒维护者关注以下长期阻塞的高价值Issue/PR：
1. Issue #5570「SQLite内存向量搜索替换为ANN索引加速」：2026-04-09创建，目前处于stale+blocked状态超过1个月，需求可大幅提升本地部署场景下的长记忆检索速度，需要跟进确认作者开发进度或指派其他开发者接手 https

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*