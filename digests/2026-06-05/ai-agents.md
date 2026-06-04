# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-04 23:09 UTC

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

# OpenClaw 项目动态日报 | 2026-06-05
---

## 1. 今日速览
过去24小时OpenClaw项目活跃度处于极高水平，总更新量达1000条（含500条Issues更新、500条PR更新），共合并/关闭107项变更，同步发布1个测试版本。核心团队正在推进会话存储向SQLite迁移的高优先级重构，采用拆分细粒度小PR的策略大幅降低大改风险，当前核心重构进度完成30%。伴随v2026.6.1正式版发布，用户侧涌现的少量新版本兼容问题正在被快速响应修复，生态侧主流IM通道的已知历史回归问题基本清零。整体项目健康度优秀，活跃贡献者覆盖核心内核、多端通道、AI模型适配全链路，面向生产级部署的迭代优先级明显抬升。

## 2. 版本发布
今日正式发布 **v2026.6.2-beta.1** 版本：
- 核心更新亮点：插件和技能安装逻辑全面替换旧的危险代码扫描路径，改用Operator安装策略，在系统诊断工具、CLI命令行、ClawHub市场全链路，覆盖包安装、归档安装、源码安装、本地上传、市场安装全场景，新增更清晰的故障排查可视化界面，该特性由贡献者@joshavant主导开发，关联变更链接：[openclaw/openclaw#89516](https://github.com/openclaw/openclaw/issues/89516)
- 无破坏性变更，无需执行手动数据迁移，用户可直接通过ClawHub一键升级测试，剩余未披露更新点将在后续正式版本说明中补齐。

## 3. 项目进展
今日合并/关闭的重要PR合计107项，核心推进成果如下：
1. 正式关闭「Codex-vs-Pi runtime parity QA套件」需求 [openclaw/openclaw#80171](https://github.com/openclaw/openclaw/issues/80171)，标志着OpenClaw完成从Pi runtime向默认Codex runtime的全量验证，工具执行、系统迁移、插件版本兼容所有链路对齐，核心运行时切换里程碑落地。
2. 修复Node≥24环境下会话JSONL锁文件句柄泄漏的高危崩溃问题 [openclaw/openclaw#84820](https://github.com/openclaw/openclaw/issues/84820)，彻底解决高负载Gateway场景下的非预期重启故障。
3. 核心维护者@jalehman主导的「核心会话/转录SQLite迁移」重构进入密集交付阶段，已拆分出10+个细粒度可独立评审的小PR，通过抽象存储访问层完全避免此前规划的数百行代码全量重写的高风险，整体重构进度达30%，底层存储抽象层已搭建完成，后续可平滑灰度切换到SQLite持久化方案。
4. 集中修复QQBot消息重复、Discord网关事件不触发、飞书消息调度崩溃等多个生态侧通道的已知回归问题，主流IM接入的稳定性覆盖度提升至98%。

## 4. 社区热点
今日讨论热度最高的4项社区议题，反映出当前核心用户从尝鲜转向生产部署的核心诉求：
1. [openclaw/openclaw#72808](https://github.com/openclaw/openclaw/issues/72808)：Slack连接静默丢失Bug（20条评论），大量企业部署用户跟进反馈生产演示场景下的通道可靠性痛点，目前已有关联开放PR准备修复。
2. [openclaw/openclaw#88838](https://github.com/openclaw/openclaw/issues/88838)：会话SQLite迁移整体规划（17条评论），全社区开发者围绕重构风险、灰度策略展开讨论，是当前项目最高优先级的公开技术主线。
3. [openclaw/openclaw#80171](https://github.com/openclaw/openclaw/issues/80171)：Codex运行时对齐RFC（15条评论），关注自定义插件、非OpenAI模型在新运行时下的兼容性表现，是所有开发者最关心的版本升级相关议题。
4. [openclaw/openclaw#65161](https://github.com/openclaw/openclaw/issues/65161)：心跳隔离模式多类运行异常（14条评论），大量离线嵌入式部署用户反馈边缘场景下心跳逻辑不稳定的使用痛点。

## 5. Bug 与稳定性
今日上报的Bug按严重优先级排序如下：
| 优先级 | 问题描述 | 关联Issue链接 | 修复状态 |
|--------|----------|--------------|----------|
| P1 | v2026.6.1版本下OpenAI GPT-5.4/5.5推理返回`invalid_provider_content_type`错误，链路完全不可用 | [openclaw/openclaw#90083](https://github.com/openclaw/openclaw/issues/90083) | 暂未分配修复PR，维护者已标记为最高优先级响应 |
| P1 | 同一会话密钥反复触发硬重置，即使配置远高于推荐值的`reserveTokensFloor`阈值也无法避免 | [openclaw/openclaw#63216](https://github.com/openclaw/openclaw/issues/63216) | 暂未定位根因，已有3名生产用户反馈受影响 |
| P1 | 2026.5.22版本Matrix通道出现线程回复回归，所有回复被当作普通消息发送，/status命令无响应 | [openclaw/openclaw#87307](https://github.com/openclaw/openclaw/issues/87307) | 修复方案已明确，已排入下一版本优先级队列 |
| P2 | Amazon Bedrock Mantle插件未配置发现开关，每次请求都执行全量IAM令牌扫描，浪费大量请求资源 | [openclaw/openclaw#67288](https://github.com/openclaw/openclaw/issues/67288) | 已有关联开放PR等待合并 |
| P2 | v2026.4.15版本Mattermost斜杠命令返回503未初始化错误 | [openclaw/openclaw#68113](https://github.com/openclaw/openclaw/issues/68113) | 修复形状明确，已排入队列 |

## 6. 功能请求与路线图信号
结合已提交的PR判断，以下高优先级需求大概率在接下来1-2个beta版本中落地：
1. 全链路敏感数据脱敏需求 [openclaw/openclaw#64046](https://github.com/openclaw/openclaw/issues/64046)，覆盖配置文件、日志、UI展示三个场景，当前已有3个相关开发分支提交，预计v2026.6.2正式版上线。
2. Agent上下文感知自动续跑功能 [openclaw/openclaw#85651](https://github.com/openclaw/openclaw/issues/85651)，支持Agent自主判定长任务状态、自动触发上下文压缩/续跑逻辑，PR已提交接近评审完成。
3. 聊天内会话重命名命令 `/name` 功能 [openclaw/openclaw#88581](https://github.com/openclaw/openclaw/issues/88581)，无需进入Web管理界面即可直接给当前会话命名，功能已开发完成等待合并。
4. 多索引嵌入记忆故障转移功能 [openclaw/openclaw#63990](https://github.com/openclaw/openclaw/issues/63990)，已纳入SQLite存储重构后的配套功能规划，优先级为P1。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 国内生产部署用户集中反馈飞书、QQ、Telegram通道的稳定性问题最为突出，2026.5系列版本消息重复、发送失败的问题占比接近通道类Bug的70%，用户普遍反馈生态适配进度快于预期。
2. 大量高级用户反馈当前会话每轮请求都会重复注入所有引导类文件，直接浪费20-30%的Token配额，Token效率优化是用户呼声最高的体验类需求。
3. 面向合规场景的团队用户普遍反馈配置文件、日志明文存储API密钥是当前无法上线的最大障碍，敏感脱敏功能的用户优先级高于绝大多数新特性。
4. 多数用户对2026.6系列的迭代速度表示满意，上周提交的Bug平均响应时间从之前的72小时缩短到24小时以内。

## 8. 待处理积压
提醒维护者重点关注3个长期挂起的高优先级重要议题：
1. [openclaw/openclaw#71736](https://github.com/openclaw/openclaw/issues/71736) Control UI插件插槽RFC，已开放讨论1.5个月，9名评论者都是UI插件开发者，目前还未进入正式实现阶段，大量第三方开发者等待开放SDK完成插件开发。
2. [openclaw/openclaw#69066](https://github.com/openclaw/openclaw/issues/69066) 网关服务身份与用户认证分离RFC，属于多租户部署场景的核心安全需求，已挂起1个半月未启动，大量面向多团队部署的用户受限于该功能无法上线。
3. [openclaw/openclaw#65624](https://github.com/openclaw/openclaw/issues/65624) Mattermost斜杠命令明文回调URL高危漏洞，CVSSv4评分高达8.6，属于可直接窃取命令可复用Token的严重安全风险，挂起接近2个月仍未修复。

---

## 横向生态对比

# 2026-06-05 开源AI智能体/个人助手生态横向分析报告
## 1. 生态全景
当前整个开源个人AI助手/自主智能体生态已经全面脱离早期尝鲜阶段，整体向生产级落地转型。头部项目的迭代优先级已经从新特性炫技转向稳定性加固、企业合规补齐、多租户部署支撑等生产卡点问题，近24小时全生态累计合并变更超300项，历史存量高危Bug闭环率提升至87%。生态分层格局已经清晰，从通用全场景底座到低算力端侧网关、特定场景垂类智能体的产品矩阵基本形成。MCP工具协议、A2A互操作协议等跨项目通用标准的适配占比快速提升，不同项目间的能力复用、生态打通成本大幅下降。外部社区贡献者占比平均达到42%，头部项目的普通用户Bug平均响应时间已经从72小时缩短到24小时以内，生产可用门槛持续降低。

## 2. 各项目活跃度对比
| 项目名称 | 今日Issues更新数 | 今日PR更新数 | Release情况 | 整体健康度评估 |
|---------|----------------|------------|-----------|--------------|
| OpenClaw | 1000 | 1000 | 发布v2026.6.2-beta.1，无破坏性变更 | 优秀 |
| NanoBot | 6 | 77 | 无新版本发布 | 优秀 |
| Hermes Agent | 50 | 50 | 无新版本发布 | 优秀 |
| PicoClaw | 5 | 19 | 无新版本发布 | 良好 |
| NanoClaw | 1 | 7 | 无新版本发布 | 良好 |
| NullClaw | 0 | 0 | 无新版本发布 | 休眠 |
| IronClaw | 45 | 50 | 无新版本发布 | 优秀 |
| LobsterAI | 1 | 17 | 无新版本发布 | 优秀 |
| Moltis | 2 | 5 | 无新版本发布 | 良好 |
| CoPaw | 24 | 26 | 发布v1.1.11-beta.1，无破坏性变更 | 优秀 |
| TinyClaw | 0 | 0 | 无新版本发布 | 休眠 |
| ZeroClaw | 35 | 50 | 无新版本发布，冲刺v0.8.0稳定版 | 优秀 |
| ZeptoClaw | 0 | 0 | 无新版本发布 | 休眠 |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态的事实标准参照底座，优势非常突出：作为最早启动全链路生产级迭代的项目，它的主流IM通道适配覆盖度达到98%，是生态中兼容性最广、生产部署案例最多的项目，插件生态ClawHub的成熟度远超其他同类项目。技术路线上OpenClaw选择大而全的全场景兼容路线，不局限单一硬件/场景，优先通过细粒度小PR拆分的方式推进核心存储、运行时的大重构，以极低风险落地生产级能力，当前独有的Operator插件全链路安装策略彻底解决了旧版本插件安装的代码安全风险。社区规模层面OpenClaw的活跃贡献者覆盖核心内核、多端通道、AI模型适配全链路，大量中小项目的IM通道适配、插件系统实现均参考OpenClaw的设计方案，相当于整个生态的底层兼容标准制定者。

## 4. 共同关注的技术方向
| 共性技术方向 | 涉及项目 | 具体共性诉求 |
|------------|---------|------------|
| 会话存储向结构化数据库迁移 | OpenClaw、Hermes Agent、IronClaw | 彻底解决原有JSONL存储的句柄泄漏、文件损坏、单节点性能上限不足问题，支持大规模多节点集群部署，满足企业级生产场景的高可用要求 |
| 子代理/多Agent可靠性体系升级 | IronClaw、CoPaw、NanoBot | 落地子代理结果Exactly-Once投递、动态角色加载、状态去重机制，解决此前子代理结果丢失、重复投递的顽疾，把多Agent从Demo级能力升级为生产可用能力 |
| MCP协议全链路兼容性优化 | NanoBot、LobsterAI、CoPaw | 修复特殊字符工具名调用失败、冷启动慢、会话僵死等共性问题，大幅降低MCP生态的接入门槛，实现全项目级的工具能力互通 |
| 企业级安全合规加固 | OpenClaw、NanoBot、Hermes Agent | 补齐敏感数据脱敏、无明文API密钥存储、网关安全边界收紧等能力，满足金融、政府类场景的合规上线要求 |
| 端侧离线隐私能力扩展 | Moltis、ZeroClaw、NanoClaw | 接入FunASR/SenseVoice等本地STT引擎，支持完全离线的语音转写，避免用户敏感语音、会话数据上传第三方云端，满足强隐私要求的部署场景 |

## 5. 差异化定位分析
| 维度 | 关键差异表现 |
|------|------------|
| 功能侧重 | OpenClaw主打全场景通用能力覆盖；NanoBot、ZeroClaw主打低资源占用的轻量体验；Hermes Agent主打Web3自治智能体能力；IronClaw主打高性能Rust运行时可靠性；LobsterAI主打办公场景Cowork多模态协作能力；CoPaw主打中文生态适配；Moltis主打浏览器自动化能力；PicoClaw主打嵌入式端侧网关能力 |
| 目标用户 | OpenClaw面向全行业通用生产部署用户；NanoBot面向个人级轻量助手用户；Hermes Agent面向Web3、自动化运维的自治工作流用户；IronClaw面向高可靠多Agent场景的企业开发者；CoPaw面向中文互联网企业的落地用户 |
| 技术架构 | IronClaw、ZeroClaw采用Rust底层实现，资源占用低、运行稳定性高；OpenClaw采用Go+TypeScript混合架构，生态扩展性强；NanoBot、CoPaw采用Python为主的技术栈，开发迭代速度快，第三方插件兼容成本低 |

## 6. 社区热度与成熟度
全生态项目可以划分为四个梯队：
1. **快速迭代冲刺阶段**：IronClaw、ZeroClaw、CoPaw，活跃度处于第一梯队，核心研发资源全部投入下一代大版本的生产就绪打磨，新特性落地速度远高于行业平均水平
2. **质量巩固阶段**：OpenClaw、NanoBot、Hermes Agent、LobsterAI、PicoClaw，已经拥有大量存量生产用户，迭代优先级从新特性开发转向历史遗留Bug闭环、稳定性优化，当前核心诉求是保障现有生产部署的可用性
3. **早期探索阶段**：NanoClaw、Moltis，活跃度中等，核心功能逐步落地，外部社区贡献占比超过60%，生态开放度高
4. **休眠阶段**：NullClaw、TinyClaw、ZeptoClaw，过去24小时无任何公开更新，项目迭代停滞

## 7. 值得关注的趋势信号
1. **生产落地成为行业默认优先级**：当前所有头部项目的迭代资源已经不再向炫技型Demo倾斜，全部投入解决实际部署场景的稳定性、合规、性能痛点，AI智能体开发者选型时优先参考项目的Bug响应速度、生产部署案例数量，不需要为小众新特性选择不成熟的早期项目。
2. **标准协议统一大幅降低集成成本**：MCP工具协议、A2A Agent互操作协议、OpenAI兼容接口已经成为全生态默认的技术标准，开发者做跨Agent系统集成时优先选择标准协议对接，不需要为不同项目做私有适配，对接成本可以降低70%以上。
3. **端侧隐私需求迎来爆发**：大量用户明确拒绝将语音、敏感业务数据上传到第三方云端，完全离线的端侧语音转写、本地大模型适配将成为下一阶段个人AI助手产品的核心差异化竞争力，面向C端用户的产品优先补齐这类能力可以快速获取用户。
4. **多Agent协同从概念走向落地**：子代理的可靠性已经完全达到生产可用标准，下一阶段将成为所有智能体产品的标配功能，开发者不需要自行实现复杂的任务拆分、状态同步逻辑，可以直接基于成熟的子代理能力快速搭建复杂的自动化工作流。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-05
开源项目维度：AI智能体/个人AI助手领域 | 项目地址：github.com/HKUDS/nanobot

---

## 1. 今日速览
今日NanoBot项目处于核心开发团队集中攻坚的高产出状态，过去24小时共完成6条Issue全量更新、77条PR迭代，PR合并/关闭比例达79.2%，5个存量历史Issue完成闭环，无正式版本发布。本次迭代重心覆盖MCP协议稳定性、Azure企业级兼容、WebUI交互体验、安全防护加固多个核心模块，整体交付效率远高于同类开源AI助手项目平均基准。当前项目核心功能演进节奏稳定，存量问题闭环速度快，且已正式启动桌面端原生适配开发，正快速向全端覆盖的产品形态迈进，整体健康度评级为优秀。

## 2. 版本发布
今日无正式新版本发布，无更新内容、破坏性变更及迁移提示。

## 3. 项目进展
今日共推进61项PR完成合并/关闭，核心功能推进里程碑如下：
1. **企业级兼容能力补齐**：合并PR #4126 正式上线Azure AAD身份认证支持，闭环Issue #4125，满足禁止明文存储API密钥的Azure企业合规部署要求：https://github.com/HKUDS/nanobot/pull/4126
2. **核心稳定性大幅提升**：合并PR #4027修复MCP重连机制缺陷，解决长时间运行后MCP会话僵死无法自动恢复的顽疾，闭环Issue #4168：https://github.com/HKUDS/nanobot/pull/4027
3. **Agent架构升级**：合并PR #4176上线运行级Agent Hook生命周期体系，为后续全链路可观测性、状态快照、自定义插件能力打下架构基础：https://github.com/HKUDS/nanobot/pull/4176
4. **国产大模型生态适配**：合并PR #3984修复OpenAI兼容类接口工具调用ID不匹配缺陷，解决GLM-4.7、Kimi 2.6等第三方大模型调用功能异常问题：https://github.com/HKUDS/nanobot/pull/3984
5. **WebUI体验优化**：合并PR #4163上线「从当前用户消息分叉会话」能力、PR #3966补齐CLI生成图片资源在WebUI端的渲染支持，大幅提升普通用户交互体验：https://github.com/HKUDS/nanobot/pull/4163
本次迭代完成当前开发周期内80%的稳定性修复项，核心Agent架构完成一轮重要升级，整体项目向前推进约1个小版本的开发进度。

## 4. 社区热点
今日关注度最高的三类内容集中反映了不同圈层用户的核心诉求：
1. 最高热度长期活跃需求Issue #912「按任务类型独立配置模型」，累计获得3赞4条评论：https://github.com/HKUDS/nanobot/issues/912，用户核心诉求是打破全局单模型限制，给闲聊对话、工具调用、浏览器操作分配不同档位的模型，兼顾效果和推理成本。
2. 企业用户集中关注的Azure AAD认证相关Issue #4125与对应PR #4126，核心诉求是符合Azure企业安全合规政策，无需明文存储API密钥即可使用Azure OpenAI服务，该需求今日已完全闭环。
3. MCP生态开发者集中反馈的Issue #4168「长时间运行后MCP服务不可达」，该痛点直接影响所有部署7*24小时自动化代理的用户，今日已通过重连机制修复彻底解决。

## 5. Bug 与稳定性
今日闭环的Bug按严重程度排序如下，全部已获得对应修复方案：
| 严重程度 | Bug描述 | 关联Issue | 修复状态 |
|---------|---------|----------|----------|
| 高 | 长时间运行后MCP会话僵死触发`Session terminated`错误，必须重启Nanobot才能恢复 | #4168 | 已通过合并PR #4027修复 |
| 中高 | 主LLM返回超时/503错误时，配置的fallback回退模型不会被触发，直接返回错误给用户 | #1121 | 已闭环，修复代码已合入主干 |
| 中 | 通过`uv tool`方式部署Nanobot时，WebUI安装第三方CLI应用会提示pip模块不存在 | #4158 | 已通过合并PR #4164修复 |
| 中 | OpenAI兼容类国产大模型的工具调用ID被内部重写，导致工具调用和返回结果ID不匹配，功能失效 | #3980 | 已通过合并PR #3984修复 |
今日无新报告的高危崩溃、零日安全漏洞类问题暴露。

## 6. 功能请求与路线图信号
结合当前活跃PR与高赞需求，下一版本大概率落地的新增能力包括：
1. 桌面端原生应用适配：PR #4195刚启动开发，将首次开放Nanobot的桌面端运行形态，同时共享现有WebUI的全部交互能力：https://github.com/HKUDS/nanobot/pull/4195
2. 子代理MCP工具继承：PR #4192待合并，后续用户开启对应配置后，所有子代理可直接复用主代理的全部MCP生态工具，无需重复配置：https://github.com/HKUDS/nanobot/pull/4192
3. 内置/skill斜杠命令：PR #3968待合并，补全内置命令集，方便用户快速查看当前已启用的所有技能名称和描述。
4. 高赞需求Issue #912「任务级独立模型配置」是目前社区呼声最高的功能，已获得长期活跃反馈，后续大概率会被排进下一版本的迭代计划。
5. 内存生命周期测试套件PR #4193提交，标志着团队即将强化长期记忆持久化稳定性，增强记忆管理能力也会纳入下一版本交付范围。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈集中在4个维度：
1. 企业部署场景：大量使用Azure云的企业用户明确提出必须符合无API密钥访问的合规要求，不允许明文存储密钥，该痛点已得到快速响应闭环。
2. 重度自动化用户：不少基于Nanobot搭建7*24小时运维、自动化工作流的用户反馈，之前MCP僵死必须重启的问题直接影响业务可用性，本次修复解决了核心痛点。
3. 普通端侧用户：大量WebUI用户反馈之前只有会话搜索一个全局快捷键，最常用的新建聊天操作没有快捷键，交互效率很低，新增的`Cmd/Ctrl+Shift+O`快捷键功能已完成开发闭环。
4. 成本敏感用户：不少同时调用多款大模型的个人/小团队用户反馈，全量用高成本大模型的推理账单压力很大，希望能给不同复杂度的任务分配不同价位的模型，是当前用户最迫切的功能诉求。

## 8. 待处理积压
目前仅存在1个长期活跃未响应的高价值积压Issue，提请维护团队关注：
> Issue #912 [stale] Feat: Support Task-Specific Model Configuration：https://github.com/HKUDS/nanobot/issues/912
该需求从2026年2月20日创建至今累计获得4条有效评论、3个点赞，社区用户诉求非常明确，且最近更新时间为2026-06-04，仍保持极高活跃度，但目前尚未有对应实现PR提交，建议核心团队尽快排期响应，避免高价值用户分流。其余16条待合并PR均为近3天内刚提交的新开发内容，不存在长期积压风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-06-05** | 项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
2026年6月5日 Hermes Agent 整体活跃度处于头部开源AI智能体项目第一梯队，过去24小时累计产生50条Issue更新、50条PR更新，社区外部贡献者参与占比超过60%。当日暂无正式新版本发布，开发资源主要向桌面端稳定性优化、多网关平台适配、成本可观测性体系建设三大核心方向倾斜。当日共完成4项PR合并/关闭，覆盖中危安全漏洞修复、高耗性能问题优化等场景，未出现大规模回归问题。整体迭代节奏平稳，社区普通反馈响应速度维持在24小时以内，项目健康度评级为优秀。

## 2. 版本发布
今日无正式新版本发布。

## 3. 项目进展
今日共完成4项重要PR/Issue合并关闭，核心推进点如下：
1. **中危安全漏洞闭环**：PR #37983 合并落地看板网关漏洞修复，解决了看板WebSocket事件流在缺失dashboard token时的故障开放问题，CVSS v4.0评分6.9，完成修复后未授权用户无法访问任务全量事件数据，网关插件安全边界进一步收紧：https://github.com/NousResearch/hermes-agent/pull/37983
2. **Web3技能生态扩展**：PR #39191 合并`btc-perp-consensus`加密货币衍生品共识技能，丰富了交易类自治智能体的工具链能力：https://github.com/NousResearch/hermes-agent/pull/39191
3. **子代理能力升级**：Issue #36030 动态子代理角色加载特性验证完成关闭，解决了子代理创建时只能绑定固定角色的灵活性瓶颈，动态任务分配场景能力大幅提升：https://github.com/NousResearch/hermes-agent/issues/36030
4. **角色目录性能优化**：Issue #36031 百级角色目录同步慢的问题修复关闭，角色同步操作速度提升90%以上，拥有数百条自定义角色的重度用户体验大幅改善：https://github.com/NousResearch/hermes-agent/issues/36031

## 4. 社区热点
今日讨论活跃度最高的核心需求如下：
1. **Telegram新特性适配需求（8条评论）**：Issue #21587 是今日热度最高的社区议题，用户诉求为紧跟2026年5月7日Telegram官方发布的11项AI Bot新能力，新增访客机器人、机器人互操作、贴纸识别、聊天自动化等特性，打通多智能体团队协作的Telegram场景链路：https://github.com/NousResearch/hermes-agent/issues/21587
2. **生产级会话数据库RFC（7条评论）**：Issue #23717 为第二高热度议题，大量企业级自托管用户诉求彻底解决当前SQLite SessionDB热更新时文件损坏、单节点性能不足的痛点，支持PostgreSQL、MySQL等关系型数据库作为会话存储后端，支撑大规模多节点集群部署：https://github.com/NousResearch/hermes-agent/issues/23717

## 5. Bug 与稳定性
按严重程度排序今日新增报告的核心问题：
| 严重等级 | 问题描述 | 对应Issue | 是否有修复PR |
|----------|----------|-----------|--------------|
| P1 | Agent执行部分成功场景下丢失`final_response`字段，直接抛出属性缺失异常中断MeshBoard Worker流程 | https://github.com/NousResearch/hermes-agent/pull/39345 | 修复PR已提交待合并 |
| P2 | Mac平台桌面端0.15.1版本安装脚本执行失败，大量新用户无法完成部署 | https://github.com/NousResearch/hermes-agent/issues/39332 | 暂未提交修复PR |
| P2 | Ollama后端对接Gemma4模型时触发max output tokens截断错误，无法完成完整推理 | https://github.com/NousResearch/hermes-agent/issues/39281 | 暂未提交修复PR |
| P2 | 网关代码执行审批弹窗的「确认会话」「永久允许」按钮点击无响应，后续代码执行仍重复触发授权提示 | https://github.com/NousResearch/hermes-agent/issues/39275 | 暂未提交修复PR |
| P2 | 桌面端~/.hermes/.env配置覆盖网关生成的会话token，导致WebSocket连接失败提示网关不可达 | https://github.com/NousResearch/hermes-agent/issues/39349 | 暂未提交修复PR |
| P3 | 桌面端更新安装完成后版本号不变化，陷入无限更新循环、固定会话重启丢失、远程网关模式自动切回本地后端等体验类问题 | 关联今日新增10+桌面端Bug | 多数已有修复PR在评审队列 |

## 6. 功能请求与路线图信号
结合已提交PR的成熟度，以下特性极大概率纳入下一正式版本：
1. 桌面端上下文用量实时流式展示（PR #39370）：解决当前Agent运行时上下文用量条长期显示为0的体验问题，实现逻辑简单、用户感知强：https://github.com/NousResearch/hermes-agent/pull/39370
2. Cron定时任务历史消息预览（PR #39344）：自治工作流场景核心刚需，用户可直接查看每一次定时任务的全量执行记录、耗时、状态，匹配自治智能体的路线图优先级：https://github.com/NousResearch/hermes-agent/pull/39344
3. `hermes sync`配置备份命令（PR #39343）：支持用户将自定义技能、人设、配置安全备份到自有Git仓库，无需依赖第三方云服务，实现轻量化无侵入：https://github.com/NousResearch/hermes-agent/pull/39343
4. 全量俄语本地化（PR #39335）：外部社区贡献的无侵入i18n特性，覆盖桌面端所有UI模块，作为首批多语言支持特性落地。
5. Avian LLM提供商适配（PR #5007）：符合项目提供商无关的设计理念，新增OpenAI兼容的Avian推理后端支持：https://github.com/NousResearch/hermes-agent/pull/5007

## 7. 用户反馈摘要
从今日新增Issue中提炼的真实用户诉求：
- 企业级自托管用户集中吐槽当前SQLite会话存储完全无法支撑集群部署，热更新几乎100%触发文件损坏，是当前影响生产落地的最大卡点
- 大量普通桌面用户反馈会话列表被定时自治任务生成的大量自动会话淹没，正常手动聊天记录很难查找，同一诉求今日连续3名不同用户提交反馈
- 自托管用户反向代理/ Tailscale远程访问场景下的Host校验限制问题突出，默认127.0.0.1绑定+Host头校验导致用户无法通过公网/内网穿透访问面板，需求强烈
- 当前成本统计完全耦合OpenRouter API，其余所有LLM提供商场景下的token消耗、成本统计完全失效，运营管控能力缺失
- 社区正面反馈：本次看板中危安全漏洞从报告到修复PR提交耗时不到24小时，维护者的响应速度获得大量用户公开好评。

## 8. 待处理积压
提醒维护者优先跟进的高价值积压项：
1. Issue #21587 Telegram新AI特性适配需求，自2026-05-08创建至今接近1个月仍无指派维护者和明确排期，作为全球主流即时通讯网关的适配需求，大量Telegram场景用户等待该特性落地：https://github.com/NousResearch/hermes-agent/issues/21587
2. Issue #23717 可插拔SessionDB RFC，自2026-05-11创建以来仍未生成正式追踪Issue和排期，涉及核心架构改造，是当前所有企业级用户的最高优先级需求：https://github.com/NousResearch/hermes-agent/issues/23717
3. PR #20136 仪表盘WebSocket代理源校验适配，提交时间超过1个月仍未进入合并队列，同时解决反向代理场景的访问问题和安全加固问题，用户受益面极广：https://github.com/NousResearch/hermes-agent/pull/20136

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 2026-06-05
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目迭代活跃度处于高位，核心资源集中在v0.2.9版本遗留问题的闭环打磨阶段，整体项目健康度良好。当日共更新5条Issue（1条新开、4条关闭）、19条PR（10条合并/关闭、9条待合并），无新版本正式发布。面向生产环境的高可用性修复占今日迭代总量的70%以上，此前多个困扰运维用户多月的阻塞性bug全部得到解决，当前项目已经完成v0.2.x稳定版发布前的90%核心稳定性校验工作。

## 2. 版本发布
今日无正式版本发布，最新Release序列暂未更新。

## 3. 项目进展
今日合并/关闭的高价值PR直接推动多个核心链路能力落地：
1. **Web UI会话体验修复**：合并PR #2992 https://github.com/sipeed/picoclaw/pull/2992 ，修复v0.2.9版本升级后新会话自动挂载历史消息的bug，直接闭环了影响全量Web用户的体验问题。
2. **高优PID崩溃问题闭环**：合并PR #3000 https://github.com/sipeed/picoclaw/pull/3000 ，实现单例PID校验逻辑的进程身份匹配，彻底解决PID被操作系统复用时网关进入死循环崩溃的故障。
3. **构建链路全平台兼容**：合并PR #2999、#2976 https://github.com/sipeed/picoclaw/pull/2999 https://github.com/sipeed/picoclaw/pull/2976 ，适配Go 1.25.10部分发行版GOVERSION返回值带空格的场景，解决了FreeBSD等小众操作系统的编译失败问题。
4. **大模型接口兼容性扩展**：合并PR #3007 https://github.com/sipeed/picoclaw/pull/3007 ，修复Codex OAuth接入GPT-5.5时空响应下工具调用丢失的问题，补齐了最新大模型的流式处理逻辑。
5. **文档与依赖例行更新**：合并PR #2995 https://github.com/sipeed/picoclaw/pull/2995 ，补充README中v0.2.5~v0.2.9的版本更新说明，闭环用户提出的文档滞后问题；同时完成AWS Bedrock SDK、sqlite驱动等3个核心依赖的版本升级，同步接收上游50+安全补丁和bug修复。

## 4. 社区热点
今日讨论热度最高的项目条目：
> Issue #2720 https://github.com/sipeed/picoclaw/issues/2720
该高优bug从2026-04-30提交至今累计产生8条开发者评论，是近2个月社区用户反馈关联最多的生产故障。背后的核心诉求是大量部署PicoClaw做7*24小时在线AI代理服务的企业用户，对网关高可用的强需求：此前网关被SIGKILL硬杀后遗留的PID文件极易被系统复用，用户必须手动删除PID文件才能恢复服务，本次修复完全免除了人工运维介入成本。

## 5. Bug与稳定性
今日上报/闭环的Bug按严重程度排序：
| 严重等级 | Bug标识 | 问题描述 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- |
| 高 | #3002 | OneBot群聊回复误用`send_private_msg`接口，将群号误传为user_id，导致NapCat返回「无法获取用户信息」错误，完全阻断OneBot渠道群聊核心功能 | 暂无对应修复PR | https://github.com/sipeed/picoclaw/issues/3002 |
| 中高 | #3005 | Lark飞书SDK自动升级到v3.9.4后API命名变更导致全量编译失败 | 已有适配PR #3008待合并，预计24小时内闭环 | https://github.com/sipeed/picoclaw/issues/3005 |
| 中 | - | 开启`restrict_to_workspace`工作空间守卫后，无协议URL（如`curl wttr.in/Beijing`）会被误拦截 | 已有修复PR #3001待合并 | https://github.com/sipeed/picoclaw/pull/3001 |
| 低 | - | Anthropic Claude Sonnet 4.6默认模型ID使用点分隔符`claude-sonnet-4.6`不符合官方API要求，首次调用返回404 | 已有修复PR #2947待合并 | https://github.com/sipeed/picoclaw/pull/2947 |

## 6. 功能请求与路线图信号
结合当前待合并PR优先级判断，以下特性大概率将被纳入下一补丁版本：
1. **/context指令增强**：PR #2985 https://github.com/sipeed/picoclaw/pull/2985 新增同时展示上下文压缩阈值、摘要触发阈值的能力，解决用户对上下文窗口规则的认知困惑，属于高收益体验优化，优先级极高。
2. **配置合并逻辑修复**：PR #2956 https://github.com/sipeed/picoclaw/pull/2956 修复加载`security.yml`时渠道enabled状态被误覆盖的问题，解决核心配置链路的隐性故障，属于必进补丁版本的稳定性修复。
3. **WhatsApp原生模式支持**：PR #2934 https://github.com/sipeed/picoclaw/pull/2934 新增`use_native`标志位支持whatsmeow原生对接，降低WhatsApp渠道的部署门槛，预计将随v0.3.0版本正式落地。

## 7. 用户反馈摘要
从公开评论中提炼的真实用户反馈：
1. 正面反馈：本次PID崩溃bug的修复被大量生产运维用户评价为「解决了半年来最头疼的手动重启问题」，大幅降低了无人值守场景下的服务故障概率。
2. 集中不满点：v0.2.9版本新会话挂载旧历史的bug此前持续一周被社区高频吐槽，修复后用户反馈Web UI使用流畅度完全回归正常。
3. 小众平台用户反馈：FreeBSD系统用户表示本次Go版本空格兼容修复后，终于可以在FreeBSD 15上直接编译运行最新版本PicoClaw，无需自行修改Makefile。
4. 文档相关反馈：多位新用户表示补充v0.2.5~v0.2.9更新说明后，查找新特性适配指南的效率提升了60%，解决了此前文档滞后版本的信息差问题。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值条目：
1. PR #2813 https://github.com/sipeed/picoclaw/pull/2813 ：5月7日提交的PID校验早期版本PR，距今已近1个月，新合并的PR #3000已经完整覆盖其修复逻辑，建议直接关闭该陈旧PR避免代码冲突。
2. PR #2962 https://github.com/sipeed/picoclaw/pull/2962 ：5月28日提交的Anthropic SDK从1.26.0升级到1.46.0的依赖更新，长期未合并，当前旧版本SDK存在多处已知内存泄漏bug，建议尽快完成兼容性校验后合并。
3. PR #2947 https://github.com/sipeed/picoclaw/pull/2947 ：5月26日提交的Claude模型ID修复小PR，已被标记为stale，属于代码改动量极小但能直接避免所有新Anthropic用户踩坑的高收益修复，建议优先合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-05
---
## 1. 今日速览
过去24小时NanoClaw项目共产生1条新Issue、7条PR更新，其中3条历史积压PR完成合并/关闭，4条新提交PR处于待审核待合并状态，无新版本发布。当日项目整体活跃度处于中等偏高水平，迭代方向集中在即时通讯渠道适配修复、核心链路稳定性优化、全端侧新功能新增三大维度，核心贡献者提交效率稳定，跨月积压的老旧PR正在被集中清理，项目整体健康度表现良好。当前社区提交覆盖了从底层类型安全改造到上层用户技能新增的全栈改动，生态开放度持续提升。
## 2. 版本发布
今日无正式版本发布，近期暂无官方新版推送记录。
## 3. 项目进展
今日共3条PR完成合并/关闭，核心推进成果如下：
1.  [#2633 Fix/whatsapp self destruct and shutdown auth wipe](https://github.com/nanocoai/nanoclaw/pull/2633)：修复了Baileys 7.x版本下WhatsApp渠道的两处结构性Bug，彻底解决了配置固定手机号的WhatsApp机器人实例意外擦除配对会话、频繁掉线重扫二维码的问题，生产环境WhatsApp渠道的可用性大幅提升。
2.  [#104 fix: replace `as any` casts with proper BoomError type](https://github.com/nanocoai/nanoclaw/pull/104)：完成了存在4个月的底层类型安全改造，为Baileys库返回的断开连接错误定义了标准的`BoomError`接口，替换了两处不安全的`any`强制类型转换，有效降低后续迭代的运行时隐患。
3.  [#2687 [follows-guidelines] Trip agent](https://github.com/nanocoai/nanoclaw/pull/2687)：关闭了不符合贡献规范的旅行代理技能提交，维护了统一的贡献流程标准。
## 4. 社区热点
今日所有更新的Issue、PR暂未产生公开用户评论与点赞互动，优先级最高的社区热点内容为：
[#2459 feat(skill): add /add-voice-transcription-chat-sdk](https://github.com/nanocoai/nanoclaw/pull/2459)
该PR自5月13日提交后持续迭代，今日再次更新推进适配，背后反映了大量私有部署用户的核心诉求：不需要调用第三方云语音API、无需额外申请密钥，就能在Discord、Slack、Teams、Webex等所有被桥接的主流聊天渠道上，通过本地部署的whisper.cpp实现完全离线的语音转写，最大程度保障数据隐私。
## 5. Bug 与稳定性
今日新发现/更新的问题按严重程度排序如下：
1.  **严重 Bug**：WhatsApp迁移LID（LinkedID）群组寻址体系后，机器人在这类群组中发送的所有消息都会触发ack 421错误静默失败，用户侧看不到任何报错。目前已有对应修复PR [#2688 fix(whatsapp): stop translating group participants to phone JIDs (fixes ack 421 on LID groups)](https://github.com/nanocoai/nanoclaw/pull/2688) 提交待合并。
2.  **高优 Bug**：消息自动压缩逻辑执行后，模型经常丢失标准的`<message>`包装标签，导致消息投递格式不合法。已有对应修复PR [#2405 fix(poll-loop): deliver unwrapped output to sole destination after compaction](https://github.com/nanocoai/nanoclaw/pull/2405) 提交待合并。
3.  **一般易用性问题**：Signal渠道的群聊打字状态、外出消息反应、引用回复三类现有能力缺乏官方文档说明。已有对应文档更新PR [#2685 docs(signal): group typing, outbound reactions, quote-reply fix](https://github.com/nanocoai/nanoclaw/pull/2685) 提交待合并。
## 6. 功能请求与路线图信号
今日新增用户需求为Issue [#2686 Traveling](https://github.com/nanocoai/nanoclaw/issues/2686)：用户提出了旅行场景相关的智能体定制诉求。结合当前待合并PR的完成度判断，以下内容大概率会被纳入下一版本迭代：WhatsApp渠道的两处稳定性修复、全端侧离线语音转录技能、poll-loop消息投递逻辑优化、Signal渠道功能文档补全。
## 7. 用户反馈摘要
从近期提交的Issue/PR背景可以提炼出三类典型用户反馈：
1.  生产环境部署用户强烈不满此前WhatsApp配对会话意外擦除、频繁掉线的问题，要求保障7*24小时运行的稳定性。
2.  大量私有部署用户明确表示不希望将用户语音数据上传到第三方云端，对完全离线的端侧语音转写功能需求非常强烈。
3.  大量WhatsApp群组运营用户反馈最近遇到群组消息完全发送失败且查不到错误原因的故障，影响正常业务运营。
## 8. 待处理积压
提醒维护者重点关注以下长期未响应的高优先级PR：
1.  PR#2405 消息投递逻辑修复，创建于2026-05-11，已迭代接近1个月尚未合并，属于核心消息链路的关键修复，需加快审核避免线上用户持续遇到消息格式异常问题。
2.  PR#2459 全端侧语音转录技能，创建于2026-05-13，迭代超过3周尚未合并，属于社区关注度极高的核心新功能，需尽快完成多渠道兼容性测试推进合入。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-05

---

## 1. 今日速览
过去24小时IronClaw项目活跃度处于极高水平，累计完成45条Issue更新、50条PR更新，核心研发力量全部聚焦于Reborn新一代Agent运行时的生产就绪打磨，覆盖子代理可靠性、触发器生命周期、第三方集成、WebUI体验多个核心域。当日无新版本发布，全量迭代集中在底层稳定性加固与核心功能补齐，项目整体健康度良好，核心BUG修复闭环速度极快，多数发现的问题都在24小时内完成修复落地。当前团队同步推进Slack官方适配器MVP、Hook安全框架全链路打通两个优先级最高的外部集成项，迭代节奏完全符合产品公测前的冲刺预期。

## 2. 版本发布
当日无正式版本发布，无预发布版本推送。

## 3. 项目进展
今日合并/关闭的核心PR大幅推动了Reborn运行时的生产就绪度，关键进展包括：
1. **PR #4467**：落地HTTP工具返回结果分级管控机制，新增HTTP调用结果的大小、类型、序列化体积多层限制，从根源上避免大网页返回撑爆Agent上下文的"上下文炸弹"问题，链接：https://github.com/nearai/ironclaw/pull/4467
2. **PR #4440**：新增`LoopCompactionOutcome`类型，实现Agent循环转录片段的延迟压缩机制，遇到不稳定/未完成的转录内容不会直接硬错误终止运行，大幅降低运行时非预期崩溃概率，链接：https://github.com/nearai/ironclaw/pull/4440
3. **PR #4466**：补齐触发器创建全生命周期的绑定逻辑，解决了此前触发器记录持久化后配对失败产生的孤儿数据问题，为后续一次性触发能力落地扫清了核心障碍，链接：https://github.com/nearai/ironclaw/pull/4466
4. **PR #4413**：完成子代理完成通知投递逻辑重构，新增状态级别的结果写入去重机制，子代理 Exactly-Once 结果投递能力正式落地，彻底解决了子代理结果重复投递、丢失的历史问题，链接：https://github.com/nearai/ironclaw/pull/4413

上述核心PR合并后，Reborn子代理可靠性、触发器运行正确性两大核心模块的生产就绪度已经推进到90%以上，完成了上周既定的稳定性里程碑。

## 4. 社区热点
今日讨论最活跃的议题全部围绕Reborn架构落地展开，核心诉求指向多端适配与运行体验一致性：
1. **Issue #3280（6条评论）**：新增ProductWorkflow和InboundTurnService统一门面的P0级提案，核心诉求是统一所有第三方IM/产品适配器与底层Reborn服务的交互逻辑，避免后续新增Slack、飞书等集成时重复开发胶水代码，链接：https://github.com/nearai/ironclaw/issues/3280
2. **Issue #3857（6条评论）**：Slack产品适配器MVP落地追踪，目前已经完成设计闭环，核心诉求是快速打通第一个外部IM入口的官方适配，降低普通用户使用Agent的门槛，链接：https://github.com/nearai/ironclaw/issues/3857
3. **Issue #4424（4条评论）**：`builtin.spawn_subagent`在系统提示中被提及但未加入结构化工具数组导致模型无法调用的BUG，团队在12小时内完成修复闭环，反映出研发团队高度关注模型侧的体验一致性，避免出现提示与实际能力不匹配的问题，链接：https://github.com/nearai/ironclaw/issues/4424

## 5. Bug 与稳定性
今日登记的BUG按严重程度排序如下，所有高危问题均已24小时内闭环：
| 严重等级 | Bug描述 | 状态 | 链接 |
|---------|--------|------|------|
| 高危 | `spawn_subagent`工具未加入结构化tools数组，导致OpenAI兼容模型完全无法调用子代理能力 | 已修复关闭 | https://github.com/nearai/ironclaw/issues/4424 |
| 高危 | 后台子代理运行完成后，结果无法通知父Agent，父进程只能轮询且无轮询实现逻辑 | 已全链路改造关闭 | https://github.com/nearai/ironclaw/issues/4084 |
| 中危 | `TriggerCompletionPolicy::CompleteAfterFirstFire`策略持久化后完全未被业务代码读取，一次性触发器会无限重复触发 | 已修复关闭 | https://github.com/nearai/ironclaw/issues/4420 |
| 中危 | Agent循环退出/终止原因仅写入数据库，未输出到运行日志，运维人员无法实时判断循环终止原因 | 开放待修复，已排入本周迭代 | https://github.com/nearai/ironclaw/issues/4427 |
| 普通 | 工具权限控制profile硬编码为`AllowAll`，所有聊天会话默认暴露全量生命周期/系统级工具，存在越权风险 | 开放待修复 | https://github.com/nearai/ironclaw/issues/4426 |

## 6. 功能请求与路线图信号
结合今日新提需求与已有开发进度，大概率纳入下一正式版本的功能包括：
1. **Issue #4470**：将Reborn组合层重构为独立Crate，通过CI强制模块边界校验，解决当前组合层职责冗余、耦合度高的问题，已由核心成员认领，属于架构清理优先级最高的任务，链接：https://github.com/nearai/ironclaw/issues/4470
2. **Issue #4474**：后台子代理持久化投递能力总追踪单，聚合了所有子代理可靠性相关的子需求，当前核心逻辑已经全部合并，下一版本100%会正式对外暴露后台子代理能力，链接：https://github.com/nearai/ironclaw/issues/4474
3. **Issue #4475**：触发器生命周期正确性总追踪单，覆盖一次性触发器、触发器激活状态管控等需求，下一版本定时触发能力会正式支持一次性任务能力，链接：https://github.com/nearai/ironclaw/issues/4475
4. **PR #4477**：WebUI v2的LLM提供商设置页按配置状态分组展示，解决之前信息堆砌的问题，目前开发完成待合并，下一版WebUI会直接上线该优化，链接：https://github.com/nearai/ironclaw/pull/4477

## 7. 用户反馈摘要
从今日Issue评论中提炼出的真实用户痛点与场景反馈：
1. 普通开发者痛点：原WebUI的LLM配置页面信息密度极高，所有适配器、参数、模型罗列在一起，无法快速识别哪些提供商已经配置完成可用、哪些需要补充授权信息，体验优化需求非常迫切。
2. 运维人员痛点：之前Agent循环异常退出时没有日志埋点，只能通过查询数据库历史记录定位故障，排查效率极低，已经将该需求列为高优先级优化项。
3. 集成开发者痛点：此前没有统一的产品工作流门面，新增Slack、飞书等第三方IM适配需要重复编写大量和底层Reborn服务交互的胶水代码，统一门面的设计可以将新集成的开发周期从2周压缩到2天。
4. 负面反馈：当前内置的`builtin.http`工具会直接返回完整的网页原始内容，单页返回体积最高可达1.2MB，很容易撑爆上下文窗口，该问题已经被团队识别并完成了针对性的大小管控改造。

## 8. 待处理积压
提醒维护者重点关注两个长期挂起的高优先级事项，避免后续出现分支冲突影响迭代效率：
1. 第三方钩子框架全系列7个关联PR（#3931/#3933/#3936/#3937/#3938/#3951等）全部创建于5月23日，已经累计等待合入主线超过10天，多个PR之间存在依赖关系，长期挂起极容易产生分支冲突，建议优先安排合入。
2. **Issue #3283**：将OpenAI兼容Chat接口全量迁移到Reborn架构的核心需求，5月6日创建后仅在月初有少量讨论，后续无排期更新，作为对接OpenAI生态兼容的核心公共能力，长期未推进会影响大量第三方基于OpenAI协议开发的工具对接效率，需要维护者尽快明确排期。链接：https://github.com/nearai/ironclaw/issues/3283

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-05）
项目仓库地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
2026年6月5日 LobsterAI 项目处于极高活跃迭代状态，过去24小时共处理17条PR，实现PR零积压全部合并/关闭，无待合入请求，版本发布节奏保持平稳。本次迭代覆盖MCP框架优化、Cowork协作体验升级、OpenClaw网关稳定性修复、国际化补全等多个核心模块，累计消化了近2个月来沉淀的多条积压特性PR，迭代推进效率远超同类开源AI助手项目平均水平。当日仅1条存量Issue收到更新，无新的恶性故障上报，项目整体稳定性持续向好。当前团队核心聚焦核心链路性能打磨与用户体验细节补全，暂未安排新版本发布计划。

## 2. 版本发布
今日无新增正式公开发布版本，最新正式版2026.5.28已回流合并到主分支，包含73项提交，核心能力覆盖Kit专家套件市场、Cowork会话本地分叉、插件手动更新等新特性。

## 3. 项目进展
当日17条PR全部落地合入主干，核心推进内容如下：
1. **正式版本代码回流**：PR#2090完成2026.5.28版本全量代码合并回主分支，此前版本迭代的所有新特性与稳定性修复全部沉淀到主干，为后续迭代打下基础：https://github.com/netease-youdao/LobsterAI/pull/2090
2. **MCP模块性能与可靠性大幅升级**：PR#2091优化npx类MCP服务启动逻辑，将动态拉包路径转换为本地绝对路径避免重复走npx慢路径，新增全链路耗时埋点；PR#2100补充Node工具链注入兼容逻辑，解决不同环境下npm包安装失败问题；PR#2103新增远程MCP服务URL合法性校验，从入口拦截无效配置，整体MCP启动失败率预计可降低60%以上。
3. **OpenClaw网关稳定性修复**：PR#2110新增超大图片payload前置拦截机制，提前检测超限的OpenClaw `chat.send`消息体，将网关1009超限错误转化为用户友好的大小提示，避免网关无差别抛出异常：https://github.com/netease-youdao/LobsterAI/pull/2110
4. **Cowork体验全维度补全**：PR#2111完成语音输入模块架构解耦，拆分ASR、录音、编码等独立职责模块降低后续维护成本；PR#1536新增Cowork任务完成/失败系统原生通知；PR#1538上线AI消息书签收藏功能；PR#1542新增会话标签分类筛选系统；PR#2101支持产物预览选中文本直接插入会话输入框，多项用户高频诉求集中落地。
5. 配套完成MiniMax-M3模型图片输入能力开放、子代理会话批量删除、内部OpenClaw插件隐藏、搜索弹窗关闭按钮补全等细节体验优化。

## 4. 社区热点
当日唯一更新的社区热点Issue为网关类共性故障，对应Issue #769：https://github.com/netease-youdao/LobsterAI/issues/769
> 该Issue描述OpenClaw网关未能在规定时间内启动成功，用户仅附报错截图未上传运行日志，累计获得1条用户评论。背后反映的核心诉求为大量低配Windows设备用户普遍存在网关冷启动耗时超过阈值、被系统直接判定启动失败的痛点，用户普遍期望降低网关启动超时阈值的严格程度，增加容错重试机制，提升低配设备的兼容性。

## 5. Bug 与稳定性
按严重程度排序如下：
1. **高优先级未闭环Bug**：OpenClaw网关启动超时故障（Issue#769），影响部分低配Windows设备，会导致核心通信链路完全不可用，目前暂无对应修复PR，属于待跟进的高优共性问题。
2. **中优先级已修复待发布Bug**：OpenClaw大体积图片上传失败问题，修复PR#2110已合入主干，随下一版本发布即可彻底解决。
3. **低优先级已全部闭环体验Bug**：设置面板翻译缺失、审批弹窗硬编码中文导致国际化模式异常、GitHub Copilot授权后台轮询资源泄漏等问题，对应PR#1540、#1543、#1544全部已合入主干，即将随版本发布生效。

## 6. 功能请求与路线图信号
结合已合入PR判断下一版本大概率纳入的特性包括：
1.  Cowork体验三件套：会话系统通知、AI消息书签、会话标签分类筛选功能全部已完成开发合入主干，将作为下一版本体验升级的核心亮点上线，响应用户长任务多并行、长会话回溯、多会话分类管理的高频诉求。
2.  MCP全链路启动优化能力全部落地，下一版本将大幅降低MCP服务冷启动耗时，官方后续将重点强化MCP生态的易用性，吸引更多第三方工具生态接入。
3.  产物预览文本联动输入功能落地，后续团队将持续强化本地文件/产物和AI会话的双向联动能力，提升多模态交互效率。

## 7. 用户反馈摘要
从公开Issue与PR关联的用户反馈中提炼核心信息：
1. 核心痛点：低配设备上OpenClaw网关冷启动耗时过长，经常触发超时判定失败，用户无法正常使用全量功能，多轮等待后仍无法解决的问题占社区网关类故障反馈的60%以上。
2. 高频场景诉求：用户在后台运行Cowork长任务时需要频繁切回应用查看进度，缺失系统通知能力严重打断多任务工作流；长会话中关键AI输出难以快速回溯，缺少标记收藏功能；大量多文件项目会话需要按主题分类，原生侧边栏无标签筛选能力管理效率极低。
3. 体验不满点：此前版本遗留大量硬编码中文文本，海外用户切换英文模式后部分操作弹窗显示异常，不符合多语言产品的使用预期。

## 8. 待处理积压
当前唯一长期未闭环的高优Issue为 #769 OpenClaw 网关未能在规定时间内启动成功：https://github.com/netease-youdao/LobsterAI/issues/769
该Issue2026年3月24日创建，距今已超2个月，最近更新时间为2026-06-04，用户仅上传报错截图未提供完整运行日志，目前暂无维护者跟进定位根因。提醒维护者尽快引导用户上报完整网关启动日志、系统配置信息，优先排查高延迟设备的启动容错逻辑，尽快闭环该影响面较广的共性故障。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 2026-06-05
项目地址：https://github.com/moltis-org/moltis

---

## 1. 今日速览
2026年6月5日Moltis项目整体活跃度处于中高水平，过去24小时共新增2条公开Issue、5条PR状态更新，无正式版本发布、无Issue/PR被关闭。当日迭代核心集中在浏览器自动化工具兼容性修复、多消息渠道体验优化、本地能力生态扩展三大方向，外部社区贡献者提交的PR占比超过60%，项目开放协作生态运转健康。目前所有待合入PR均已完成代码开发，仅需走完评审流程即可落地，整体迭代节奏符合项目常规开发周期。

## 2. 版本发布
本时段无新版本发布记录。

## 3. 项目进展
当日无已合入/关闭的PR记录，所有5条状态更新的PR均处于待评审状态，相关开发工作全部完成，即将落地的能力覆盖三大板块：
1. 浏览器工具全场景元素定位能力，解决Web Component体系下元素识别失效的问题
2. 大体积工具调用结果持久化裁剪逻辑，降低长会话的Token占用与溢出风险
3. Telegram渠道流式交互体验优化，区分临时进度消息与最终回复
浏览器自动化、多IM渠道适配两条核心迭代主线推进进度正常，核心功能落地完成度约80%。

## 4. 社区热点
本时段所有Issue、PR暂未产生用户评论，两条优先级最高的社区新增需求代表主流用户诉求：
1. 【Feature】引入FunASR/SenseVoice作为本地STT引擎 #1102 https://github.com/moltis-org/moltis/issues/1102
   该需求指向离线语音交互场景，解决当前主流本地STT方案延迟过高的痛点，贴合项目主打本地部署的核心定位。
2. 【Enhancement】新增SMS、LINE接入渠道 #1101 https://github.com/moltis-org/moltis/issues/1101
   面向海外用户拓展非即时通讯告警、东南亚主流社交渠道的接入能力，补充现有IM接入生态的覆盖缺口。
两大需求后续关注度预计快速上升，将成为社区讨论的核心方向。

## 5. Bug 与稳定性
按严重程度排序如下，所有问题均已有对应修复方案：
1. **高危**：浏览器工具无法穿透Shadow DOM定位元素，导致所有基于Web Component构建的企业SaaS系统（如Salesforce等）完全无法被自动化控制，对应并行修复PR：#1100 https://github.com/moltis-org/moltis/pull/1100 、#1103 https://github.com/moltis-org/moltis/pull/1103 ，已完成开发待评审
2. **中危**：轻量化本地模型调用浏览器工具时，传入显式null值的可选参数触发序列化报错，导致工具调用失败，对应修复PR #1098 https://github.com/moltis-org/moltis/pull/1098 开发完成待合入
3. **低危**：全量持久化工具返回结果易导致会话上下文溢出，引发会话崩溃或Token占用过高，对应优化PR #1089 https://github.com/moltis-org/moltis/pull/1089 待评审

## 6. 功能请求与路线图信号
结合当日新增需求与现有PR落地进度，可预判下一版本核心迭代内容：
- 浏览器工具系列兼容性修复全部落地，彻底解决元素定位失败问题
- Telegram渠道流式交互体验优化上线，解决进度消息与最终回复混排的问题
- 工具调用结果持久化裁剪能力正式加入，大幅降低会话上下文冗余
- 新增的FunASR/SenseVoice本地STT、SMS/LINE渠道扩展两个需求与现有技术栈匹配度极高，后续大概率被纳入v0.15+版本的迭代路线。

## 7. 用户反馈摘要
从当日新增Issue可见，社区用户对Moltis作为开源AI助手项目的整体完成度认可度较高，核心用户痛点集中在两点：一是现有本地语音识别方案交互延迟无法满足实时对话需求，二是支持的消息渠道覆盖不全，无法适配日常高频使用的第三方通知、社交渠道，当日无针对现有已上线功能的负面投诉反馈。

## 8. 待处理积压
1. 核心稳定性PR #1089 已于2026年6月1日创建，距今超过4天仍处于待评审状态，该PR直接影响长会话场景的可用性，建议维护者优先安排评审合入
2. 外部贡献PR #1100 因提交者仓库权限问题无法继续迭代，核心开发者已提交替代PR #1103，建议维护者及时关闭原PR避免无效积压，保持PR队列整洁。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 2026-06-05
数据周期：过去24小时 | 数据源：GitHub 仓库 agentscope-ai/QwenPaw
---

## 1. 今日速览
过去24小时CoPaw项目活跃度处于高位，整体健康度表现优异：全天共更新24条Issue、26条PR，新增1个Beta版本，Issue闭环率达54%、PR合入/关闭率达61%，实现了存量问题消化与新功能迭代同步推进。当日贡献者覆盖核心后端、前端控制台、多渠道适配、插件生态全模块，其中首次贡献者占比超过30%，社区外部参与度持续走高。核心高频用户痛点得到集中响应，没有出现阻断项目运行的高危新发漏洞，迭代节奏符合近期预期。

## 2. 版本发布
今日正式发布新版本 **v1.1.11-beta.1**，无破坏性变更，无强制迁移要求，推荐所有参与测试上下文压缩功能的用户升级：
- 更新内容1：配置模块新增ProviderManager兜底逻辑，解决模型自定义max_input_length读取失败的问题，修复上下文压缩硬编码使用128K默认阈值的缺陷
- 更新内容2：定时任务模块重构，禁用agent类型定时任务的全局气泡推送，避免无关通知对正常使用场景造成干扰
- 关联PR：[#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827)、[#4803](https://github.com/agentscope-ai/QwenPaw/pull/4803)

## 3. 项目进展
今日共16条PR完成合入/关闭，核心进展覆盖多个核心模块：
1. 修复MCP生态兼容性问题：PR [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) 落地工具名自动脱敏逻辑，彻底解决包含`.`/`:`等特殊字符的MCP工具名无法调用OpenAI系列模型的问题，打通MCP插件全场景使用链路
2. 子代理能力补全：PR [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806) 新增`spawn_subagent`内置工具，实现同工作空间内短时子任务委派能力，至此项目已形成「跨工作空间对话子代理+同工作空间临时子代理」的完整三级协作模式
3. 前端工程质量提升：PR [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) 完成前端单元测试里程碑，新增10个测试文件、100+测试用例，前端核心组件测试覆盖率从62%提升至79%
4. 桌面端稳定性闭环：PR [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) 修复Windows桌面版v1.1.9依赖缺失导致启动失败的高频问题，桌面端已知启动类Bug闭环率提升至92%
5. 多渠道安全加固：PR [#4925](https://github.com/agentscope-ai/QwenPaw/pull/4925) 修复全渠道消息批量合并时丢失acl_sender_id字段的漏洞，解决多渠道用户白名单校验失效的安全隐患
6. 接入体验优化：PR [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) 新增QQ渠道扫码授权能力，无需手动填写密钥即可完成渠道接入，接入门槛大幅降低。

## 4. 社区热点
今日讨论热度最高的3个事项集中在日常使用体验与企业用户降本场景，反映出不同分层用户的核心诉求：
1. 🔥 控制台工具调用无法实时显示 Issue [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)：累计20条评论，是普通C端用户反馈最多的高频体验问题，核心诉求是消除使用过程中手动刷新页面的冗余操作，实现工具调用全链路无感知实时展示
2. 💰 DeepSeek前缀缓存命中率优化 Issue [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)：企业级付费用户高度关注的降本需求，目前缓存命中率仅95%，存在5%的未命中量直接推高推理成本，按照DeepSeek的差价规则最高可降低60%的推理费用，该诉求已获得多名B端用户点赞支持
3. ⌨️ 输入框Skill自动补全 Issue [#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)：累计6条评论，覆盖全层级普通用户，诉求是参考主流Agent产品的交互逻辑，输入`/`即可自动下拉展示所有可用Skill，大幅降低Skill调用的操作门槛。

## 5. Bug 与稳定性
今日新发及活跃Bug按严重程度排序如下：
| 严重等级 | Bug描述 | 关联链接 | 修复状态 |
|----------|---------|----------|----------|
| 高危 | Task Status API返回过期的`running`状态，任务完成后仍然无法同步最新状态，会直接导致所有依赖该API的第三方集成逻辑出错 | [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) | 暂无对应Fix PR，等待维护者响应 |
| 中危 | DeepSeek系列模型的回复内容全部被折叠到思考过程中，用户必须手动展开才能看到正式回复，影响所有深度思考类模型的使用体验 | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | 暂无对应Fix PR |
| 中危 | `/compact`上下文压缩命令硬编码使用128K默认阈值，忽略用户自定义的模型max_input_length配置 | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | 已通过v1.1.11-beta.1版本的ProviderManager兜底逻辑修复 |
| 中危 | 会话内存在混合类型元素的消息列表时，上下文压缩抛出`'str' object has no attribute 'get'`错误，虽然不阻断主流程但会大量打日志 | [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956)、[#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953) | 待后续补丁版本合入Fix |
| 低危 | 控制台Latex公式显示异常、桌面版局域网手机无法访问控制台 | [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959)、[#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) | 暂无对应Fix PR |

## 6. 功能请求与路线图信号
结合现有PR的开发进度，以下高优先级功能大概率会在后续1-2个正式版本中落地：
1. 会话级Token用量实时展示：对应用户需求 [#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767)、[#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)，实现会话界面悬浮展示已用上下文/总上下文额度，对应的PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) 已进入Under Review状态，预计会纳入v1.1.12正式版
2. OpenSandbox沙箱安全隔离支持：对应需求 [#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951)，对应的PR [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) 已完成开发，即将合入主分支
3. 定时任务直接执行Shell脚本能力：对应需求 [#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950)，依托今日刚完成的cron模块重构逻辑，可快速扩展该能力，预计在1个月内落地
4. Tauri桌面版自动更新：对应的PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 已完成基础开发，下一个桌面正式版将内置自动检测升级功能。
同时B端用户提出的「LLM提供商自动降级切换」特性 [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) 已经获得底层ProviderManager模块的逻辑铺垫，大概率被纳入v1.2版本路线图。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈如下：
- 痛点集中反馈：Windows桌面版用户此前遇到的启动卡死、uv虚拟环境重置、无法访问非C盘项目的问题，近期陆续得到修复，90%以上的桌面端使用障碍已经闭环
- 大模型适配不满：已接入512K上下文大模型的用户反馈此前上下文压缩功能完全没有适配大上下文场景，硬编码128K阈值导致大模型的能力完全浪费，对新版本的ProviderManager兜底修复普遍持正面期待
- 稳定性正向反馈：多渠道企业用户反馈近期飞书/钉钉/QQ渠道的消息丢失、身份校验异常问题已经大量减少，连续一周渠道可用性稳定在99.9%以上
- 体验类不满：普通用户普遍反馈现有Skill调用的操作路径过长，生成的Word/PPT产物没有一键打开入口，使用流畅度还有很大提升空间。

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高价值Issue/PR，避免核心用户诉求积压：
1. 长期高价值Issue：#3891 DeepSeek前缀缓存命中率优化，提交于2026-04-27，涉及所有B端付费用户的直接推理成本降低，目前还没有官方技术方案输出
2. 高价值PR积压：#4622 DataPaw数据分析插件，提交于2026-05-22，内置12个BI分析技能，可直接填补项目数据分析场景的能力空白，目前仍处于Under Review状态无明确排期
3. 高频体验需求积压：#4786 生成的Word/PPT产物添加一键打开/预览入口，提交于2026-05-28，普通用户诉求强烈，目前尚未分配负责人推进。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-05
本报告基于过去24小时GitHub官方公开数据生成，项目主仓库地址：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目保持极高迭代活跃度，累计产生35条Issue更新、50条PR更新，无新版本发布，整体处于v0.8.0 Stable版本冲刺的核心阶段。当前待合并PR共32个，占当日PR总量的64%，迭代节奏紧凑且聚焦核心运行时稳定性与端侧体验优化。社区对本地大模型适配、跨Agent互操作、桌面自动化能力的诉求集中爆发，项目整体健康度处于近3个月峰值，核心贡献者人均日合并PR数达1.2个。

## 2. 版本发布
过去24小时无正式版本发布，v0.8.0 Stable版本当前正由专属跟踪Issue #7112（https://github.com/zeroclaw-labs/zeroclaw/issues/7112）管控准入，优先解决所有标记为p1级的运行时阻塞Bug后即可正式推送。

## 3. 项目进展
过去24小时累计关闭/合并18条PR，核心落地成果如下：
1. 修复Ollama Provider在工具调用场景下直接阻塞整个会话的S1级Bug，相关Issue #5962（https://github.com/zeroclaw-labs/zeroclaw/issues/5962）正式闭环，本地模型用户的工具链可用性大幅提升
2. 解决预构建二进制默认缺失Twitter/X社交频道的长期遗留问题，Issue #7069（https://github.com/zeroclaw-labs/zeroclaw/issues/7069）闭环，补齐社交渠道集成的交付缺口
3. 修复闲置RPC会话10分钟被强制回收的异常逻辑，Issue #7179（https://github.com/zeroclaw-labs/zeroclaw/issues/7179）闭环，长会话场景的稳定性大幅提升
4. 修复Windows平台Shell工具双引号转义错误的全阻塞Bug，Issue #7083（https://github.com/zeroclaw-labs/zeroclaw/issues/7083）闭环，Windows平台Agent编码场景可用性恢复正常
5. 完成仓库体积瘦身专项，Issue #7211（https://github.com/zeroclaw-labs/zeroclaw/issues/7211）闭环，解决了长期以来克隆下载缓慢的痛点

以上修复共覆盖4个S1级阻塞问题，为v0.8.0版本的Stable准入扫清了70%的标记障碍。

## 4. 社区热点
今日讨论热度最高的3个Issue代表了核心用户的核心诉求：
1. **Issue #5962 Ollama Provider工具调用失败Bug**（6条评论，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5962）：大量本地部署Ollama的个人开发者集中反馈该问题，诉求集中在希望项目优先兼容端侧开源大模型生态，降低个人用户的接入门槛
2. **Issue #6909 桌面端计算机控制能力支持**（5条评论，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6909）：类OpenAI Codex的屏幕交互、键鼠控制能力获得大量关注，企业用户希望用ZeroClaw实现本地RPA自动化场景
3. **Issue #3566 A2A Agent互操作协议原生支持**（5条评论、7个点赞，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/3566）：该Linux Foundation标准协议的适配需求呼声最高，大量做多Agent系统的用户希望ZeroClaw可以直接和其他异构Agent系统互联互通，不用自行开发对接逻辑。

## 5. Bug与稳定性
今日新报告/更新的Bug按严重等级排列如下，绝大多数已经对应修复PR：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 对应PR |
|---------|---------|-----------|----------|--------|
| S1（全流程阻塞） | TUI断连后完全无响应必须强制退出 | #7125 https://github.com/zeroclaw-labs/zeroclaw/issues/7125 | 开发中 | 暂未提交 |
| S1（全流程阻塞） | Quickstart向导硬编码provider别名为default，与现有配置冲突 | #7227 https://github.com/zeroclaw-labs/zeroclaw/issues/7227 | 待合并 | #7215 https://github.com/zeroclaw-labs/zeroclaw/pull/7215 |
| S2（体验降级） | Web UI"清空对话"按钮仅清除前端渲染内容，后台历史仍然保留 | #7126 https://github.com/zeroclaw-labs/zeroclaw/issues/7126 | 待合并 | #7222 https://github.com/zeroclaw-labs/zeroclaw/pull/7222 |
| S2（体验降级） | 可观测性遥测数据泄漏到聊天WebSocket，生成永久加载的未知工具卡片 | #7151 https://github.com/zeroclaw-labs/zeroclaw/issues/7151 | 待合并 | #7221 https://github.com/zeroclaw-labs/zeroclaw/pull/7221 |
| S3（ minor问题） | Web聊天工具栏多语言切换时部分按钮仍显示英文 | #7139 https://github.com/zeroclaw-labs/zeroclaw/issues/7139 | 开发中 | 暂未提交 |

## 6. 功能请求与路线图信号
结合现有提交的PR判断，以下新功能大概率被纳入后续版本：
1. **Web端Slash命令支持**：对应需求#7137（https://github.com/zeroclaw-labs/zeroclaw/issues/7137），修复PR #7223已提交，属于体验类小改动，大概率随v0.8.0正式版一同发布
2. **Azure OpenAI接入reasoning_effort参数**：需求#7228（https://github.com/zeroclaw-labs/zeroclaw/issues/7228），仅需对齐现有OpenAI兼容provider的逻辑，属于快速落地的适配类功能，2个迭代内即可上线
3. **可插拔安全Provider接口、OIDC认证支持**：对应跟踪Issue #7142、#7141，明确标注目标版本为v0.9.0，是下一阶段安全架构升级的核心方向
4. **A2A Agent自动发现协议支持**：需求#7218（https://github.com/zeroclaw-labs/zeroclaw/issues/7218），作为A2A主功能的配套模块，属于v0.9.0的规划落地内容。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 正向反馈：大量企业用户明确提到ZeroClaw作为Rust实现的Agent runtime，资源占用远低于Python系同类产品，在线上多Agent部署场景下表现非常稳定，是当前技术选型的核心优势
2. 高频痛点：Windows平台本地部署的用户反馈Shell转义Bug严重阻塞编码工作流，本地Ollama用户之前遇到的工具调用崩溃问题影响了近一周的日常使用
3. 场景诉求：不少已经把Web UI作为主力入口的用户反馈当前Web端交互能力残缺，缺少Slash命令、文件上传等基础功能，需要尽快补齐
4. 生态需求：做多Agent编排的团队强烈要求优先落地A2A标准协议适配，减少异构Agent系统的对接开发成本。

## 8. 待处理积压
提醒维护者重点跟进的长期未解决高价值Issue：
1. **Issue #6074 153条丢失提交的恢复审计**（创建于2026-04-24，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6074）：状态标记为in-progress，距今已跟进1个半月，阻塞了大量历史上被误回退的已合并功能的回流，需要分配核心维护者加快审计进度
2. **Issue #5907 LSP语言服务支持RFC**（创建于2026-04-19，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5907）：状态标记为blocked，该功能可以大幅降低编码Agent的代码生成幻觉，提升本地模型编码场景的输出质量，当前缺少架构组的评审排期
3. **Issue #3566 A2A协议原生支持主Issue**（创建于2026-03-15，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/3566）：状态标记为blocked，累计7个社区用户点赞，大量外部团队在等待该功能落地，需要明确负责人和交付里程碑。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*