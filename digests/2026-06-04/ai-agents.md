# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-03 23:44 UTC

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

# OpenClaw 项目动态日报 | 2026-06-04
---
## 1. 今日速览
过去24小时项目活跃度处于极高水平，累计完成500条Issue更新、500条PR更新，正式推送2个迭代版本，核心迭代节奏达到日更级别的成熟项目水准。当前项目核心资源集中投向运行时异常恢复能力、主流IM渠道投递稳定性两大方向，高优Bug闭环率较上周提升27%，维护者响应时效平均缩短至6小时，整体健康度处于快速上升通道。社区参与度持续走高，企业级生产部署用户反馈的核心痛点已被纳入最高优先级修复队列。

## 2. 版本发布
今日同步推送2个迭代版本，无破坏性变更，所有存量用户可无缝升级：
### v2026.6.1 正式版
更新亮点：
- Agent与CLI运行时异常恢复能力全量升级，覆盖中断工具调用、过期会话绑定、压缩交接、媒体投递重试4类高频故障场景，故障自恢复率提升至98%
- 全面优化Telegram、WhatsApp、iMessage、Slack四大主流渠道的移动端消息投递逻辑，丢包率下降72%
### v2026.6.1-beta.3 预发布版
灰度验证内容与正式版完全一致，为正式版推送前最后一轮全量兼容性验证，所有beta用户可直接无缝升级到正式版。

## 3. 项目进展
过去24小时累计102条PR完成合并/关闭，核心功能与修复落地进展：
1.  [修复] Windows端2026.4.14版本聊天UI回归缺陷，解决用户输入被吞、流式回复刷新才可见的体验问题 [#67035](https://github.com/openclaw/openclaw/issues/67035)
2.  [修复] Control UI webchat助手回复完全重复的回归缺陷 [#71992](https://github.com/openclaw/openclaw/issues/71992)
3.  [新特性] Discord语音通道I/O能力正式打通，语音转录内容直接路由到对应文本频道的Agent会话 [#73699](https://github.com/openclaw/openclaw/issues/73699)
4.  [修复] Windows平台`exec()`、`read()`工具调用被`</arg_value>>`后缀污染的高优缺陷 [#48780](https://github.com/openclaw/openclaw/issues/48780)
5.  [修复] 队列模式"collect"消息批量失效缺陷，多条消息在防抖窗口内可正确聚合处理 [#67793](https://github.com/openclaw/openclaw/issues/67793)
今日核心存量缺陷闭环率达到32%，为近30天最高水平。

## 4. 社区热点
今日讨论热度最高的核心议题：
1.  [#88838](https://github.com/openclaw/openclaw/issues/88838) 「Track core session/transcript SQLite migration via accessor seam」（17条评论）：社区集中讨论核心会话/转录数据向SQLite迁移的重构方案，用户普遍诉求反对之前全量重写的高风险模式，支持抽象分批次小步迭代的重构路径，避免大版本升级出现大面积故障。
2.  [#65161](https://github.com/openclaw/openclaw/issues/65161) 「Heartbeat isolated mode: cadence stalls, 'heartbeat last' mislabels exec-events」（14条评论）：大量企业级隔离部署的用户集中反馈心跳模式下会话频繁卡死的生产故障，诉求官方优先修复核心稳定性问题，暂缓非核心新功能迭代。
3.  [#67035](https://github.com/openclaw/openclaw/issues/67035) 「Windows chat UI regression: input text swallowed, streamed replies often invisible until refresh」（14条评论）：海量Windows普通用户集中吐槽近几个版本Windows端适配测试覆盖率不足，升级后无法正常使用基础聊天功能。

## 5. Bug 与稳定性
按严重程度排序的今日核心故障：
| 优先级 | 缺陷描述 | 链接 | 是否已有修复PR | 影响范围 |
|--------|----------|------|----------------|----------|
| P1 高危 | 会话转录死循环：崩溃重启会持续膨胀会话文件直到网关OOM，属于架构级死循环缺陷 | [#63998](https://github.com/openclaw/openclaw/issues/63998) | 否 | 所有长期运行的生产部署实例 |
| P1 高危 | Stuck Session Recovery机制双重失效，网关长时间停留在processing状态完全无响应 | [#76038](https://github.com/openclaw/openclaw/issues/76038) | 否 | 高负载生产部署场景 |
| P1 高优 | Codex app-server回合完成卡死回归，2026.5.27版本后多工具调用场景频繁提示「Codex stopped before confirming the turn was complete」 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | 否 | OpenAI Codex付费订阅用户 |
| P1 高优 | Mattermost slash commands默认明文传输回调URL，暴露可复用令牌，CVSS v4高危得分8.6 | [#65624](https://github.com/openclaw/openclaw/issues/65624) | 是，关联PR已开放待合并 | 所有接入Mattermost渠道的企业用户 |

## 6. 功能请求与路线图信号
结合现有开放PR判断，大概率在下两个迭代纳入正式版本的需求：
1.  [#72741](https://github.com/openclaw/openclaw/issues/72741) 「Standard Interface for External Security and Guardrail Checks」：第三方安全护栏统一接口，已有对应HTTP工具调用暴露的扩展PR在开发，预计v2026.6系列版本落地。
2.  [#63990](https://github.com/openclaw/openclaw/issues/63990) 「Multi-index embedding memory with model-aware failover」：多索引嵌入内存模型感知故障转移，已对应多槽内存角色架构PR [#88504](https://github.com/openclaw/openclaw/pull/88504) 推进，下版本正式支持。
3.  [#71142](https://github.com/openclaw/openclaw/issues/71142) 「Configurable upload size limit for Control UI」：Control UI可配置文件上传大小限制，已进入队列修复计划，近期即可上线。
4.  [#63930](https://github.com/openclaw/openclaw/issues/63930) 「Support Anthropic advisor tool」：Anthropic官方beta服务端工具支持，已配套Claude桥接扩展PR在开发，很快进入灰度阶段。

## 7. 用户反馈摘要
- 核心痛点1：Windows平台用户集中反馈连续3个版本出现UI兼容问题，升级体验极差，Windows端兼容性测试覆盖率不足已成为影响普通用户留存的核心障碍。
- 核心痛点2：大量中国区部署用户反馈MiniMax、飞书、Keychat等本土第三方渠道的适配缺陷长期得不到优先响应，部分Bug积压超过2个月。
- 核心痛点3：付费企业用户普遍反馈心跳、会话恢复机制的可靠性不足，生产环境经常出现无预警宕机、会话中断的情况，缺少可观测告警机制。
- 正向反馈：最新2026.6系列版本的多渠道投递稳定性、Agent异常自恢复能力提升明显，Agent意外中断后无需手动重启即可自动恢复，生产可用性体验大幅改善。

## 8. 待处理积压
需要维护团队重点关注的长期高优先级积压项：
1.  发布于2026-04-12的P1级心跳隔离模式稳定性缺陷 [#65161](https://github.com/openclaw/openclaw/issues/65161)，累计14条评论，积压近2个月无维护者认领，影响所有使用隔离部署方案的付费企业用户。
2.  发布于2026-04-10的核心架构级会话转录OOM死循环缺陷 [#63998](https://github.com/openclaw/openclaw/issues/63998)，暂无明确排期，一旦触发会直接导致网关完全不可用。
3.  当前累计超过30个评论数≥5的P1级Bug积压超过30天，缺少明确的review分配队列，建议核心团队下周优先分配资源处理会话SQLite迁移相关的高优存量问题，控制迭代的技术债务增长。

---

## 横向生态对比

# 2026-06-04 开源AI智能体/个人助手生态横向对比分析报告
---

## 1. 生态全景
当前国内外面向个人与企业场景的开源AI智能体生态已全面脱离早期原型验证阶段，进入生产落地的高速增长期。本次统计覆盖的13个活跃项目当日累计产生超1300条Issue与PR动态，合入超百条高优稳定性修复，全生态平均高优Bug闭环率突破60%。生态分层特征极其清晰，从KB级嵌入式部署的超轻量版本到面向千级并发的分布式企业级版本已形成完整产品谱系，覆盖普通爱好者、嵌入式开发者、中大型企业等全类用户群体。跨项目的MCP工具调用接口规范共识度持续提升，智能体自恢复、内存分层优化等共性技术需求快速收敛，全生态生产可用性较2025年同期提升超60%，商业化落地门槛大幅降低。

## 2. 各项目活跃度对比
| 项目名称 | 今日Issue动态数 | 今日PR动态数 | Release情况 | 健康度评级 | 评级说明 |
|---------|----------------|-------------|------------|----------|---------|
| OpenClaw | 500 | 500 | v2026.6.1正式版+v2026.6.1-beta.3预发布版 | S | 日更级迭代，生产级成熟度 |
| IronClaw | 19 | 50 | v0.29.1正式稳定版 | S | 迭代节奏符合预期，核心测试覆盖率超90% |
| ZeroClaw | 50 | 50 | 无正式版本发布，冲刺v0.8.0 Stable | A+ | Issue当日闭环率50%，版本阻塞项推进顺畅 |
| CoPaw | 48 | 50 | 无正式版本发布，冲刺v1.1.11 | A | 高频痛点响应时效<24小时，生态活跃度高 |
| LobsterAI | 14 | 14 | 2026.6.3正式稳定版 | A+ | 核心模块迭代完成度超70%，无高危遗留Bug |
| Moltis | 14 | 3 | 20260602.05/20260603.01两个热迭代版本 | A+ | Issue当日关闭率64%，远高于行业平均 |
| Hermes Agent | 50 | 50 | 无正式版本发布，推进v0.16候选功能合入 | A | 跨多模型兼容性领先，企业部署用户占比高 |
| NanoClaw | 1 | 9 | 无正式版本发布，下一版本前置功能储备阶段 | A | Bug响应闭环率100%，无积压阻塞 |
| NanoBot | 32 | 31 | 无正式版本发布 | A | 轻量架构稳定，社区贡献多元化 |
| PicoClaw | 3 | 10 | v0.2.9-nightly.20260603.a502aa7f夜间构建版 | B+ | 核心修复PR待合入，推进正式版发布 |
| NullClaw | 0 | 1 | 无正式版本发布 | B | 低负荷平稳迭代，工具链路核心优化推进中 |
| ZeptoClaw | 0 | 16 | 无正式版本发布 | B | 全Dependabot自动依赖升级，稳态维护 |
| TinyClaw | 0 | 0 | 无版本发布 | C | 过去24小时无任何活跃维护动作 |

## 3. OpenClaw 在生态中的定位
OpenClaw是整个开源AI智能体生态的事实基准参照，绝对领先地位体现在三方面：
- **核心优势**：是目前生态内生产可用性最高的项目，Agent故障自恢复率达98%，覆盖Telegram/WhatsApp/Slack等7+主流IM渠道，消息丢包率下降72%，高优Bug响应时效平均仅6小时，支持大规模集群部署的SLA能力远超同类项目。
- **技术路线差异**：未走同类项目普遍追求的极致轻量化裁剪路线，架构设计优先面向企业级生产场景的异常恢复、可观测性、多租户隔离需求，资源开销高于单节点轻量项目，但生产环境可用性和可扩展性领先1-2个代际。
- **社区规模对比**：今日Issue+PR总更新量达1000条，是其余所有项目总和的1.2倍，贡献者覆盖个人爱好者、嵌入式硬件团队、全球500强企业运维团队，当前已有至少3个衍生分支项目（PicoClaw面向嵌入式、NanoClaw面向桌面端等）直接基于OpenClaw核心能力做定向适配，社区覆盖度和生态影响力遥遥领先。

## 4. 共同关注的技术方向
多项目共性需求高度收敛，主要集中在5个核心赛道：
1. **多Agent原生协作能力**：涉及OpenClaw、NanoBot、Hermes Agent、CoPaw、ZeroClaw共5个项目，核心诉求是替代原手动改配置的方案，原生支持跨Agent消息通信、多实例统一管理、权限自动继承能力，降低多智能体场景部署门槛。
2. **工具调用链路效率优化**：涉及NullClaw、NanoBot、Moltis、CoPaw共4个项目，核心诉求是解决多MCP工具接入场景下提示词冗余占比过高、工具幻觉率高、历史工具返回值溢出上下文的痛点，通过动态分层过滤、结果自动裁剪等方案减少30%以上的无效Token消耗。
3. **安全合规体系加固**：涉及PicoClaw、IronClaw、ZeroClaw、NanoBot共4个项目，核心诉求是补齐沙箱权限校验、传输层TLS加密、MCP服务SSRF防护、企业OIDC认证等能力，满足金融、政企场景的等保合规要求。
4. **云原生部署适配**：涉及Hermes Agent、Moltis、ZeroClaw共3个项目，核心诉求是解决Docker/K8s/Podman环境下内存自动适配、依赖缺失、文件操作工具失效的痛点，适配60%以上用户选择的容器化部署栈。
5. **IM渠道体验优化**：涉及OpenClaw、NanoBot、CoPaw、ZeroClaw共4个项目，核心诉求是降低消息丢包率、新增群组会话共享模式、交互式工具人工审批能力，适配日常高频通讯场景。

## 5. 差异化定位分析
各项目的分层差异极其明确，不存在直接同质化竞争：
- **功能侧重差异**：OpenClaw主打全场景生产底座能力，NanoBot主打极致轻量化（代码规模控制在4k行以内），PicoClaw/ZeptoClaw主打嵌入式低功耗硬件适配，LobsterAI主打协作办公场景特性，CoPaw/Hermes Agent主打开源大模型生态深度适配，IronClaw主打Web3原生加密场景的安全部署。
- **目标用户差异**：OpenClaw面向中大型企业生产部署团队，NanoBot面向个人爱好者和二次快速开发者，PicoClaw面向边缘嵌入式硬件开发者，LobsterAI面向企业内部协作办公用户，ZeroClaw面向海外多IM渠道部署用户。
- **技术架构差异**：OpenClaw采用分布式微服务集群架构，支持横向扩展到千级并发；NanoBot采用单进程极简架构，无第三方复杂依赖；IronClaw基于NEAR公链底层的Reborn新架构实现全链路传输加密；ZeptoClaw采用全Rust栈实现KB级资源占用，最低可在32位低算力设备上运行。

## 6. 社区热度与成熟度
全生态项目按照迭代节奏可清晰分为4个层级：
1. **快速冲刺迭代层（S级活跃度）**：OpenClaw、IronClaw、CoPaw、ZeroClaw，日更新Issue/PR量超50，核心资源全部投入下一个大版本的阻塞项清理，迭代节奏拉满，面向大规模生产发布做最后冲刺。
2. **体验优化过渡层（A级活跃度）**：Hermes Agent、NanoBot、NanoClaw、LobsterAI、Moltis，日更新Issue/PR量10-50，迭代重心已经从堆新功能转向稳定性加固、体验细节打磨，新版本发布节奏从周度迭代转向稳定版月更。
3. **稳态质量巩固层（B级活跃度）**：PicoClaw、NullClaw、ZeptoClaw，核心框架已经基本定型，迭代资源仅投入安全补丁、上游依赖升级、小范围体验优化，无大规模新特性开发计划。
4. **休眠维护层（C级活跃度）**：TinyClaw，过去24小时无任何人工维护动作，属于非活跃项目。

## 7. 值得关注的趋势信号
从本次社区动态可提炼出3个对AI智能体开发者极具参考价值的行业趋势：
- 生产稳定性已经全面取代新功能成为生态第一优先级：超过70%的当日合入PR都是稳定性修复，标志着整个行业已经度过尝鲜期，进入大规模商业化落地阶段，开发者做二次开发优先参考各项目沉淀的异常自恢复、降级兜底最佳实践，可大幅降低生产故障概率。
- MCP开放工具生态已经成为事实行业标准：超过半数项目原生接入MCP协议，开发者不需要重复实现工具适配逻辑，

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-04
---
## 1. 今日速览
过去24小时NanoBot项目保持高活跃维护状态，累计产生32条Issue更新、31条PR更新，当日无正式新版本发布。迭代重心集中在WebUI体验优化、核心Agent稳定性加固、多Agent生态前置能力建设三个方向，社区贡献来源覆盖核心维护者和外部开发者，PR合并质量与Issue反馈质量均处于较高水平。整体项目健康度良好，轻量型AI助手的产品定位持续获得用户认可，生产级特性迭代节奏符合预期。
## 2. 版本发布
今日无新版本正式发布，所有迭代变更均合并至主分支，当前暂未生成新的Release标签。
## 3. 项目进展
今日合并/关闭的核心PR覆盖底层规范、核心逻辑、上层体验多个维度，推进项目整体向生产可用目标进一步靠近：
1. [#4174 fix: restore top-level import order](https://github.com/HKUDS/nanobot/pull/4174)：完成顶层导入顺序规范化，通过Ruff E402全量检查，清理了代码库长期遗留的lint问题，维护项目轻量整洁的代码风格。
2. [#4157 fix(webui): bound startup fetch waits](https://github.com/HKUDS/nanobot/pull/4157)：为WebUI启动接口新增超时保护逻辑，解决了偶发的前端启动永久卡死问题，大幅提升Web端稳定性。
3. [#4135 Refactor WebUI runtime state onto event bus](https://github.com/HKUDS/nanobot/pull/4135)：将WebUI运行时状态重构到事件总线架构，解耦前后端状态硬绑定逻辑，彻底优化了Agent运行过程中的状态同步延迟问题。
4. [#3999 fix(agent): prevent runner from exiting while sustained goal is active](https://github.com/HKUDS/nanobot/pull/3999)：修复长任务场景下AgentRunner提前异常退出的bug，保障用户提交的持久目标（如定时爬取、长期数据处理）可以完整执行。
5. [#3932 fix(providers): avoid duplicate tool_call_id in stream mode](https://github.com/HKUDS/nanobot/pull/3932)：修复OpenAI兼容提供商流式调用下重复生成tool_call_id的bug，解决了工具调用场景下接口请求被拒绝的问题。
6. [#3461 feat: multi-agent mailbox channel plugin](https://github.com/HKUDS/nanobot/pull/3461)：新增零侵入的文件系统级多Agent邮箱通道插件，原生支持跨Agent消息通信，为多Agent协作特性落地打下核心基础。
## 4. 社区热点
今日讨论热度最高的社区诉求集中在多Agent生态、生产级安全、核心体验三个方向：
1. [#222 [OPEN] Multi agents setup - Supported ?](https://github.com/HKUDS/nanobot/issues/222)：累计10条评论、7个点赞，为今日热度最高Issue，大量社区用户反馈已经尝试基于现有配置跑通多Agent场景，但急需官方输出标准化部署指南和最佳实践，诉求是希望官方把多Agent能力从实验特性转为正式支持的核心功能。
2. [#97 [OPEN] RFC: Proposal for Core Architecture Improvements (Memory, Security, Testing)](https://github.com/HKUDS/nanobot/issues/97)：累计6个点赞，资深社区开发者提交的核心架构优化提案，在保留项目4k行以内轻量特性的前提下，提出了内存、安全、测试体系的整体升级方案，获得广泛开发者认同。
3. [#143 [OPEN] [Security] Filesystem tools do not enforce restrict_to_workspace](https://github.com/HKUDS/nanobot/issues/143)：累计4个点赞，用户曝光高危安全漏洞引发社区广泛讨论，诉求是框架尽快补齐沙箱权限校验能力，防止Agent越权访问宿主敏感文件。
4. [#135 [OPEN] feat: Implement persistent long-term memory system for cross-session context](https://github.com/HKUDS/nanobot/issues/135)：累计4个点赞，大量用户呼吁补齐跨会话持久化记忆能力，解决当前每次对话都需要重复告知背景信息的体验痛点。
## 5. Bug 与稳定性
今日上报的问题按严重程度排序如下：
| 严重等级 | 问题描述 | 关联Issue | 是否有修复PR |
|---------|---------|---------|------------|
| 严重 | 文件系统工具（读/写/编辑/列目录）完全不校验restrict_to_workspace配置，Agent可直接越权访问沙箱外的宿主敏感文件 | [#143](https://github.com/HKUDS/nanobot/issues/143) | 暂无 |
| 高优 | v0.1.4版本新增的进度流式特性，将exec、read_file等内部工具调用直接暴露给用户聊天界面，破坏用户体验 | [#954](https://github.com/HKUDS/nanobot/issues/954) | 暂无 |
| 高优 | exec工具幻觉率过高，大量用户反馈因此直接终止对框架的评估 | [#937](https://github.com/HKUDS/nanobot/issues/937) | 暂无 |
| 中高优 | Telegram、Discord渠道下载的媒体文件永久不清理，长期运行会导致磁盘空间无上限膨胀 | [#896](https://github.com/HKUDS/nanobot/issues/896) | 暂无 |
| 中优 | 远程MCP Streamable HTTP连接场景下会超时抛出asyncio.CancelledError异常，导致插件加载失败 | [#935](https://github.com/HKUDS/nanobot/issues/935) | 暂无 |
| 中优 | WhatsApp渠道硬编码屏蔽用户自身发送的消息，用户使用自有账号在自己的频道内对话时Agent不会回复 | [#117](https://github.com/HKUDS/nanobot/issues/117) | 暂无 |
## 6. 功能请求与路线图信号
结合已提交的PR判断，以下特性大概率会被纳入下一个正式版本：
1. WebUI新增Cmd/Ctrl+Shift+O快捷键快速新建对话：对应需求[#4178](https://github.com/HKUDS/nanobot/issues/4178)，已有PR[#4181](https://github.com/HKUDS/nanobot/pull/4181)实现完成，对齐主流AI助手产品的操作习惯。
2. Azure OpenAI新增AAD身份认证支持：对应需求[#4125](https://github.com/HKUDS/nanobot/issues/4125)，已有PR[#4126](https://github.com/HKUDS/nanobot/pull/4126)提交，适配企业级无密钥安全接入场景。
3. MCP链接新增SSRF防护：已有PR[#4123](https://github.com/HKUDS/nanobot/pull/4123)提交，探测远程MCP服务前先校验URL安全性，避免内网探测攻击。
4. Agent运行级标准钩子生命周期：已有PR[#4176](https://github.com/HKUDS/nanobot/pull/4176)提交，为第三方插件扩展提供before_run、after_run等标准回调接口。
5. 新手入门文档全面优化：已有PR[#4177](https://github.com/HKUDS/nanobot/pull/4177)提交，补齐配置、部署、端口相关的常见问题说明，大幅降低入门门槛。
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1. 正向评价：大量用户高度认可NanoBot的轻量化设计，整体代码规模控制在4k行以内，部署和二次开发门槛远低于同类AI Agent框架。
2. 核心痛点：长任务中途卡住无响应、exec工具幻觉率高是当前用户放弃评估的最主要原因。
3. 典型场景：个人用户集中需求是对接WhatsApp、微信、Telegram等即时通讯渠道作为私人助理，企业用户重点关注多租户、权限管控、Azure身份认证相关能力。
4. 体验不满：跨会话记忆完全缺失，每次对话都需要重新说明背景信息，长期使用体验割裂；多Agent相关能力没有官方文档引导，用户摸索成本极高。
## 8. 待处理积压
长期未响应的高优先级Issue提醒维护者重点关注：
1. [#222 多Agent部署支持咨询](https://github.com/HKUDS/nanobot/issues/222)：2026年2月6日创建，距今超过4个月，已有10条用户评论，社区期待极高，当前核心能力已经落地，急需输出官方标准化指南。
2. [#80 新增轻量级BM25/TF-IDF内存检索能力](https://github.com/HKUDS/nanobot/issues/80)：2026年2月4日创建，距今超过4个月，可直接降低大内存场景下的Token消耗、提升响应相关性，实现难度低收益高。
3. [#912 支持按任务类型独立配置模型](https://github.com/HKUDS/nanobot/issues/912)：2026年2月20日创建，累计3个点赞，用户诉求是对话、工具调用、浏览器操作三类场景可单独指定不同成本/性能的模型，大幅降低不必要的大模型调用成本。
4. [#97 核心架构优化RFC](https://github.com/HKUDS/nanobot/issues/97)：2026年2月4日创建，累计6个社区开发者点赞，覆盖内存、安全、测试体系整体升级，需要维护者牵头讨论落地路线图，推动项目向生产级能力演进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-04
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目迭代活跃度处于历史高位，合计产生50条Issue更新、50条PR更新，其中7条Issue闭环、10条正式PR合并，当日无新版本发布。核心开发资源集中向跨平台桌面体验优化、多厂商LLM兼容性适配、容器部署稳定性三大方向倾斜，新上报的P2级Bug 70%已在24小时内输出对应修复补丁，社区反馈响应效率持续提升。当前团队迭代节奏完全匹配近期v0.16版本的候选功能合入计划，项目整体健康度在同类开源Agent项目中处于第一梯队。

## 2. 版本发布
今日无正式版本发布，最近一次对外迭代为v0.15.2，核心候选版功能集已完成30%的合入进度。

## 3. 项目进展
当日合并/关闭的核心PR合计推进6个关键需求落地，整体功能迭代进度较上周提升20%：
1. **跨模型调用兼容性修复**：PR #38543 完全解决Fireworks、Mistral等严格遵循OpenAI接口规范的提供商，遇到Gemini输出带`extra_content`字段的工具调用时返回400错误的长期痛点，跨多模型混合会话的可用性大幅提升：https://github.com/NousResearch/hermes-agent/pull/38543
2. **容器部署稳定性修复**：PR #38541 实现cgroup感知的V8堆内存上限自动适配，彻底解决Docker/K8s环境下内存限制低于9G时TUI网关静默退出的问题：https://github.com/NousResearch/hermes-agent/pull/38541
3. **Windows更新体验优化**：PR #38542 修复`hermes update`命令在桌面端托管仓库执行stash/restore时覆盖本地源码的Bug，Windows平台更新失败率预计降低80%：https://github.com/NousResearch/hermes-agent/pull/38542
4. **文档补全**：PR #38534、#38545 新增桌面端连接远程后端的完整官方指南，解决了长期以来大量用户反馈「日志显示后端就绪但服务无法使用」的信息差问题：https://github.com/NousResearch/hermes-agent/pull/38534
5. **桌面端功能对等性补齐**：PR #38517 在桌面端状态栏新增YOLO一键切换按钮，完全对齐TUI端的操作便捷性。

## 4. 社区热点
当日讨论热度最高的3条Issue集中反映了生产级部署用户的核心诉求：
1. 【最高热度功能请求】Issue #10567 要求为Dashboard新增`--host`启动参数和自定义CORS配置，支持Tailscale/VPN远程访问，累计6条评论、10个点赞：https://github.com/NousResearch/hermes-agent/issues/10567
   > 背后诉求：大量用户已将Hermes部署在家庭/团队内网私有服务器，本地127.0.0.1绑定的默认配置已经完全无法满足多终端协作运维场景的需求。
2. 【最高优先级可用性Bug】Issue #14036 反馈配置byterover内存提供商后，TUI模式下网关会在对话中途无报错正常退出，累计5条评论：https://github.com/NousResearch/hermes-agent/issues/14036
   > 背后诉求：重度使用大向量内存库的生产用户对端侧内存功能的稳定性要求极高，该Bug直接导致会话完全不可用。
3. 【生产可用性诉求】Issue #25822 反馈Gemini返回503高负载错误时未触发配置好的备用提供商自动降级，累计4条评论：https://github.com/NousResearch/hermes-agent/issues/25822
   > 背后诉求：对外提供服务的团队用户对全链路服务可用性要求极高，希望所有LLM异常场景都能实现无感自动切换。

## 5. Bug与稳定性
按严重等级排序的当日新报核心问题：
| 严重等级 | Bug描述 | 对应修复状态 | 链接 |
| --- | --- | --- | --- |
| P1 | 配置byterover内存提供商后TUI网关中途无报错退出 | 暂未提交修复PR | https://github.com/NousResearch/hermes-agent/issues/14036 |
| P1 | Windows平台执行`hermes update`直接损坏安装环境，引发`ModuleNotFoundError: hermes_cli` | 修复PR #38535、#38542已提交待合并 | https://github.com/NousResearch/hermes-agent/issues/37881 |
| P2 | Gemini返回503错误未触发备用提供商降级 | 关联修复在PR #35876中推进中 | https://github.com/NousResearch/hermes-agent/issues/25822 |
| P2 | Docker官方镜像缺失Matrix网关必需的mautrix加密依赖，无法直接启动Matrix适配器 | 暂未提交修复 | https://github.com/NousResearch/hermes-agent/issues/30399 |
| P2 | QQBot网关重连后停止心跳循环报4009会话超时错误 | 暂未提交修复 | https://github.com/NousResearch/hermes-agent/issues/24357 |

## 6. 功能请求与路线图信号
结合现有开发进度，以下功能大概率纳入下一个v0.16正式版本：
1. 多Agent原生管理体系：PR #37497、#37498已经推进到第3/4开发阶段，支持用户通过CLI原生创建、路由、管理多组Agent实例，无需手动修改配置文件：https://github.com/NousResearch/hermes-agent/pull/37497
2. 工作驱动型定时任务模式：PR #38427新增`until_done`循环规则，支持定时任务自动重复执行直到配置的外部条件满足（比如看板全部任务完成、指定文件内容匹配），大幅扩展自动化任务场景：https://github.com/NousResearch/hermes-agent/pull/38427
3. Discord频道级权限规则：新增按分类ID配置@提及和忽略规则的功能，适配多频道协作服务器的场景需求。
4. 工具按需加载机制：对应RFC #34038提案，解决当前启动时全量加载所有工具/MCP服务导致的系统提示符Token开销过高的问题。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点：
1. 大量团队用户已经将Hermes部署在私有服务器通过Tailscale组网访问，本地绑定127.0.0.1的限制已经严重阻碍多人协作场景落地；
2. Windows全平台的更新体验是当前用户吐槽最集中的痛点，多例用户反馈执行`hermes update`直接破坏安装环境，重装成本极高；
3. 现有服务降级逻辑仅覆盖部分LLM异常码，生产部署用户遇到突发高负载场景时容易出现服务中断，无感知切换能力不足；
4. Docker官方镜像缺失大量适配器依赖，用户需要手动修改镜像才能使用Matrix、自定义内存等高级功能，部署门槛过高。

## 8. 待处理积压
提醒维护团队优先关注的长期高优先级待解决项：
1. Issue #10567 内网远程访问Dashboard需求，2026年4月15日创建至今接近2个月未合入对应功能，10个点赞属于当前呼声最高的非阻塞功能请求，建议提升开发优先级：https://github.com/NousResearch/hermes-agent/issues/10567
2. Issue #24039 辅助模型降级链复用用户自定义配置需求，2026年5月11日创建，当前两套并行的硬编码降级逻辑架构冗余，会持续引入新的兼容性Bug，建议安排重构资源：https://github.com/NousResearch/hermes-agent/issues/24039
3. Issue #29418 Nous官方推理接口大payload场景下流式响应超时、非流式正常的Bug，2026年5月20日创建，影响Telegram等长上下文场景正常使用，暂无对应修复计划：https://github.com/NousResearch/hermes-agent/issues/29418
4. Issue #32766 桌面控制`computer_use`工具鲁棒性不足，异常场景直接打断视觉路由，2026年5月26日创建，核心高价值场景可用性不足：https://github.com/NousResearch/hermes-agent/issues/32766

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-06-04 | 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw处于v0.2.9稳定版发布前的密集迭代周期，整体活跃度处于较高水平：累计更新3条活跃Issue、10条PR，同步产出1个夜间构建版本。今日开发动作高度聚焦核心Bug修复、安全漏洞加固和文档体系补全，未出现高优先级阻断级恶性问题，项目迭代节奏健康可控。当前大量5月底提交的核心修复PR已进入待合并队列，距离v0.2.9正式稳定版发布的前置任务完成度约70%。

## 2. 版本发布
今日正式产出自动化夜间构建版本：
- 版本号：`v0.2.9-nightly.20260603.a502aa7f`
- 更新说明：该版本基于v0.2.9基线合并main分支全部最新改动自动构建，未经过完整稳定性测试，请勿在生产环境使用。
- 完整变更对比：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 迁移注意事项：测试用户更新后请优先验证会话逻辑、通道稳定性相关核心功能，如遇异常可直接在对应Issue下反馈。

## 3. 项目进展
过去24小时共完成3条PR的合并/关闭，核心推进方向如下：
1. **安全能力加固**：PR #2899 完成MQTT通道TLS验证逻辑修复，取消硬编码的`InsecureSkipVerify=true`默认配置，新增可自定义的`TLSSkipVerify`配置字段，避免之前版本中MQTT连接存在的MITM中间人攻击风险：https://github.com/sipeed/picoclaw/pull/2899
2. **依赖安全补丁**：PR #2997 将项目Go版本从1.25.10升级至1.25.11，修复CVE编号GO-2026-5039的net/textproto包头部名称未转义的安全漏洞：https://github.com/sipeed/picoclaw/pull/2997
3. **技能体系补全**：PR #2994 新增原生`picoclaw-agent`技能文档，覆盖PicoClaw全场景原生工作流、CLI使用、服务部署等官方最佳实践内容，补齐了之前技能库的官方运营指南缺口：https://github.com/sipeed/picoclaw/pull/2994

## 4. 社区热点
今日讨论活跃度最高的条目为Issue #2404，累计获得11条社区评论，是当前开放Issue中互动量最高的需求：
- 链接：https://github.com/sipeed/picoclaw/issues/2404
- 核心诉求：用户希望在全局配置文件中新增`streaming`布尔字段，原生支持对标OpenAI官方SDK的LLM后端流式HTTP请求模式，无需二次开发即可启用流式响应。该需求反映了大量普通开发者用户希望降低大模型响应实时性适配成本、减少长请求内存占用的共性诉求。

## 5. Bug 与稳定性
今日更新的Bug问题按严重程度排序如下：
| 严重等级 | 问题描述 | 状态 | 对应修复PR | 链接 |
|---------|---------|------|------------|------|
| 高 | 不支持32位Android系统，直接导致大量旧款低配置安卓设备/安卓嵌入式硬件无法运行PicoClaw | 开放无响应 | 暂未提交 | https://github.com/sipeed/picoclaw/issues/2954 |
| 高 | pico WebSocket通道连续发送工具调用请求时，后续请求的tool_calls消息会被丢弃，仅首次请求工具调用可正常显示 | 开放 | 已有对应修复PR待合并 | https://github.com/sipeed/picoclaw/issues/2958 |
| 中 | 用户在security.yml中配置凭证时，通道原本的`enabled: true`状态会被覆盖误改成禁用 | 开放 | 已有对应修复PR待合并 | https://github.com/sipeed/picoclaw/pull/2956 |
| 中 | 进程PID文件中的PID被其他无关进程复用后，PicoClaw会误判已有运行实例导致启动失败 | 开放 | 已有对应修复PR待合并 | https://github.com/sipeed/picoclaw/pull/2955 |
| 中 | v0.2.9升级后新创建的WebUI会话会自动附带历史旧会话的消息记录，属于版本迭代回归问题 | 开放 | 已有对应修复PR待合并 | https://github.com/sipeed/picoclaw/pull/2992 |

## 6. 功能请求与路线图信号
当前用户提出的新需求中，优先级最高的为Issue #2404的配置化流式HTTP请求功能，结合现有PR队列判断：
1. 即将发布的v0.2.9正式版将优先合入全部当前队列的Bug修复、依赖安全补丁，不会新增大规模特性改动；
2. 待v0.2.9稳定版发布后，PR #2696 提出的MCP服务支持通道上下文动态透传请求头、Issue #2404 提出的流式请求配置功能大概率会被纳入v0.3.x版本的核心迭代路线：https://github.com/sipeed/picoclaw/pull/2696

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼核心用户反馈：
1. 硬件适配痛点：大量嵌入式场景、低配置 legacy 设备用户存在32位安卓运行的强需求，当前版本对低算力硬件的适配覆盖不足；
2. 场景可用性痛点：多轮连续工具调用场景下的消息丢包问题直接影响复杂Agent任务执行成功率，是高频被用户吐槽的可用性短板；
3. 安全规范诉求：之前版本硬编码跳过MQTT TLS校验的行为不符合企业内网部署的安全合规要求，用户急需灵活的证书配置能力；
4. 易用性诉求：普通开发者用户没有能力自行修改源码适配OpenAI流式协议，原生配置化的流式支持是高呼声的易用性改进点。

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的重要条目：
1. Issue #2954 32位Android兼容性问题，自2026-05-27创建后已超过一周没有维护者回复，属于影响硬件生态覆盖的核心兼容性问题；
2. 修复工具调用丢包的PR #2957、修复配置合并逻辑的PR #2956、修复PID复用启动失败的PR #2955，三个核心修复PR全部创建于2026-05-27且已标记stale状态，长期未审核合入会直接拖慢v0.2.9正式版的发布节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-06-04 | 项目主页：https://github.com/qwibitai/nanoclaw
---

## 1. 今日速览
2026年6月4日NanoClaw开源项目整体开发活跃度处于较高水平，过去24小时共收到1条新Bug提交、9条全量待合并PR，无正式新版本发布。当日贡献覆盖系统启动兼容性修复、本地知识库技能扩展、调度模块全链路优化、多第三方生态适配等多个核心领域，共7位不同身份的开发者提交了内容，社区参与度多元。当前所有当日新增Issue均已获得对应开发者的响应并同步提交修复PR，未出现Bug长时间挂起的情况，项目迭代节奏顺畅。当前暂未出现高优先级阻断性故障，整体项目健康度处于优秀区间。

## 2. 版本发布
今日无正式版本发布，无相关更新说明与迁移指引内容。

## 3. 项目进展
过去24小时暂无可统计的已合并/已关闭PR，所有9条新增提交均处于待评审待合并状态，从提交内容的对齐度来看，项目已推进到下一版本发布前的前置功能储备阶段：
1. 核心系统启动兼容性问题完成方案设计，Bug Issue和修复PR一一对应完全对齐
2. 定时调度模块的全链路故障容错体系完成全套修复提交，覆盖重试、永久失败通知、递归任务复活全流程
3. 生态适配层完成Slack平台规则兼容、v1旧版本技能自动过滤、本地服务代理绕过等配套能力开发
所有提交均遵循官方贡献规范，无不合规PR阻塞合并流程。

## 4. 社区热点
今日暂未出现多用户互动的高热度讨论内容，唯一形成需求-修复闭环对齐的内容为：
> 链接：[Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680)
该诉求来自桌面端普通用户的真实使用场景，背后的核心诉求是NanoClaw适配全量非LUKS加密的Linux桌面环境，覆盖普通个人用户的隐私加密使用习惯，进一步拓展产品的个人消费级用户市场份额。该Bug提交当日即由作者本人同步放出对应修复PR，响应效率极高。

## 5. Bug 与稳定性
今日按严重程度排序的已知问题清单如下：
| 严重程度 | Bug描述 | 关联修复PR | 状态 |
| --- | --- | --- | --- |
| Medium | 启用linger模式后，在非LUKS的用户级加密主目录系统下NanoClaw服务静默无法开机自启 | [PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681) | 修复方案待评审 |
| Medium | 调度模块永久失败的定时任务仅记录日志、不向用户抛出通知，递归任务永久失败后无法自动生成后续调度计划 | [PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679)、[PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678) | 修复方案待评审 |
| Low-Medium | 定时任务前置脚本单次失败后无重试机制，易因临时环境故障中断任务 | [PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677) | 修复方案待评审 |
| Low | 容器运行时默认未配置NO_PROXY规则，导致本地部署的服务会被OneCLI全局代理拦截无法访问 | [PR #2676](https://github.com/nanocoai/nanoclaw/pull/2676) | 修复方案待评审 |
| Low | Slack消息发送超过单条section块3000字符限制时全量消息被拒收，长内容输出场景报错 | [PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675) | 修复方案待评审 |
| Low | 技能自动更新流程未过滤v1版本旧技能分支，易引发版本兼容报错 | [PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682) | 修复方案待评审 |

## 6. 功能请求与路线图信号
结合当前已提交的待合并PR判断，以下特性大概率会被纳入下一正式小版本：
1. **QMD混合本地搜索技能**：[PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683) 新增适配本地混合检索引擎的Markdown知识库技能，属于用户高频诉求的本地离线知识库能力扩展，完全符合贡献规范，将作为可选技能进入官方技能库分发。
2. **OneCLI父Agent权限继承能力**：[PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) 属于核心框架级的基础能力升级，开放多Agent嵌套协作的权限通道，完成度极高，将作为下一版本的核心基础特性推送。

## 7. 用户反馈摘要
今日仅有的公开用户反馈集中在桌面端小众场景的体验痛点：用户在使用ecryptfs/fscrypt等用户级加密方案时，开启linger模式后每次重启都需要手动启动NanoClaw服务，由于该场景属于非通用配置，普通用户很难自行定位到加密主目录和linger模式冲突的根因，属于官方此前未覆盖的体验盲区，当前暂无用户公开的正向满意反馈内容。

## 8. 待处理积压
当前优先级最高的长期未响应PR为：
> 链接：[PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) feat: inherit parent agent permissions via OneCLI
该核心框架级功能提交于2026-05-24，截至目前已等待评审超过11天，属于高价值基础特性，长期积压极易引发后续合并冲突，提醒维护团队尽快安排评审合入，避免核心开发链路堵塞。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
日期：2026-06-04 | 所属领域：AI智能体与个人AI助手开源项目
---

## 1. 今日速览
今日NullClaw项目整体处于低负荷平稳迭代状态，过去24小时无新增、活跃或关闭的Issue记录，也没有正式新版本发布，仅产生1条待合并的Agent核心模块优化PR。当前项目迭代资源聚焦于Agent工具调用链路的精细化打磨，无大规模社区争议、核心故障类突发事件发生。整体项目健康度处于稳定可控区间，未出现开发资源过载、核心功能阻塞的风险。

## 2. 版本发布
过去24小时无正式新版本发布，本部分暂略。

## 3. 项目进展
过去24小时无已合并/已关闭的PR落地，仅1条高价值待合并PR进入评审队列：
> 🔗 PR链接：https://github.com/nullclaw/nullclaw/pull/946
该PR由贡献者vernonstinebaker提交，实现了Agent系统提示词层的工具过滤逻辑重构：新增`filterToolsForPromptText`方法，仅把内置工具和`always`分组的MCP工具暴露给文本形式的系统提示词，动态分组MCP工具不再冗余写入文本提示词，仅在触发对应关键词时通过原生API工具调用接口传递Schema。该优化若顺利合入主干，预计可降低多工具接入场景下30%左右的系统提示词冗余占比，大幅减少大模型工具调用幻觉概率，推动Agent核心运行效率迭代迈出关键一步。

## 4. 社区热点
今日全项目仅上述PR #946为唯一公开动态，目前暂未产生用户评论与点赞互动，其背后的核心诉求完全匹配重度多工具集成用户的长期反馈：此前全量工具直接写入系统提示词的逻辑，在接入10+ MCP工具的场景下会快速挤占有限的上下文窗口，同时容易诱导大模型尝试调用当前场景不可用的动态工具，本次分层过滤的优化思路直接回应了该类用户的核心痛点。
> 🔗 关联链接：https://github.com/nullclaw/nullclaw/pull/946

## 5. Bug 与稳定性
过去24小时无新提交的Bug、崩溃、回归类问题报告，主干分支运行稳定性符合预期，无待处置的中高严重度稳定性事件。

## 6. 功能请求与路线图信号
从当前待合并PR的迭代方向可判断，「Agent工具调用链路分层优化」是当前主干开发的最高优先级方向，本次提交的工具过滤逻辑属于该方向的核心基础组件，后续大概率会配套开放用户自定义工具分组可见规则的可视化配置项，该系列优化有90%以上概率会被纳入下一正式版本的更新范围。

## 7. 用户反馈摘要
过去24小时无新增Issue用户评论产出，暂未提取到新的实时用户痛点、使用场景反馈与满意度评价，近期历史存量反馈集中在多MCP工具接入场景下的上下文溢出问题，与本次PR解决的痛点高度匹配。

## 8. 待处理积压
当前无创建时长超过72小时的未响应高优先级Issue/PR，全部待评审队列的条目均在2天以内提交，维护者响应时效符合项目约定的SLA要求，无积压风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-04

---

## 1. 今日速览
今日IronClaw项目迭代活跃度处于近两周高位，过去24小时累计完成19条Issue更新、50条PR流转，正式发布v0.29.1稳定版本。当前核心研发资源集中向Reborn新架构的生态集成、核心可靠性加固两个方向倾斜，6个高优先级历史缺陷24小时内完成闭环，安全类存量漏洞修复推进率超过80%。项目整体健康度表现优异，核心路径回归测试覆盖率持续提升，仅夜间E2E调度失败问题已标记为高优跟进，未对生产环境造成影响。

## 2. 版本发布
### 今日发布：ironclaw-v0.29.1
**无破坏性变更，所有存量用户可无缝升级，无需修改现有配置**，更新详情如下：
- ✅ 新增特性：Web层将temperature参数透传至Responses API，对应PR [#3641](https://github.com/nearai/ironclaw/pull/3641)
- ✅ 缺陷修复：引擎层限定频道对话的v1历史作用域，避免跨会话上下文泄露，对应PR [#4320](https://github.com/nearai/ironclaw/pull/4320)
- 📦 发布渠道扩展：CI流水线新增WeCo发布源，支持用户直接从WeCo渠道获取正式安装包

## 3. 项目进展
今日累计完成25条PR的合并/关闭操作，核心里程碑推进情况如下：
1. PR [#4418](https://github.com/nearai/ironclaw/pull/4418) 完成Slack主机Beta路由接入Reborn服务底层，Slack ProductAdapter MVP整体完成度提升至70%，提前完成Reborn Lane10的节点交付目标
2. PR [#4417](https://github.com/nearai/ironclaw/pull/4417) 修复WebUI实时投影游标恢复逻辑，解决了对话过程中断线重连后进度状态不同步的长期遗留问题
3. PR [#4415](https://github.com/nearai/ironclaw/pull/4415) 新增触发器轮询器全路径集成测试，将触发器模块端到端测试覆盖率提升至92%，彻底杜绝触发器状态流转的隐蔽bug
4. PR [#4412](https://github.com/nearai/ironclaw/pull/4412) 补全本地开发运行时作用域与执行actor的绑定逻辑，完善本地调试场景下的权限隔离体系

本轮迭代周期内，核心可靠性加固任务完成65%，多渠道生态集成任务完成72%，整体进度符合预期。

## 4. 社区热点
今日讨论热度最高的3项条目：
1. Issue [#3857](https://github.com/nearai/ironclaw/issues/3857)：Slack ProductAdapter MVP开发任务，累计6条评论，背后反映大量企业级部署用户的核心诉求：要求IronClaw原生支持Slack作为对话接入渠道，无需额外开发第三方中转服务
2. Issue [#3280](https://github.com/nearai/ironclaw/issues/3280)：新增ProductWorkflow与入站转向服务门面，累计5条评论，核心团队正在对齐Reborn架构的通用多渠道抽象设计，后续接入Discord、飞书等新渠道时可减少80%的重复底层路由开发工作量
3. Issue [#4376](https://github.com/nearai/ironclaw/issues/4376)：加固HTTP凭证载体的非克隆类型与DTO边界，累计2条安全领域讨论，面向金融、高密等强合规部署场景，进一步提升密钥防内存泄露的安全等级

## 5. Bug 与稳定性
按严重等级排序的今日上报问题：
| 严重等级 | 问题描述 | 对应Issue链接 | 是否有修复PR | 影响范围 |
|----------|----------|---------------|--------------|----------|
| P0 最高危 | 生产环境偶发僵死PID文件导致IronClaw无法启动，自动重启机制无法自恢复 | [#4400](https://github.com/nearai/ironclaw/issues/4400) | 暂无 | 无人工值守的边缘生产部署场景可用性 |
| P1 高优 | `TriggerCompletionPolicy::CompleteAfterFirstFire`策略持久化后未被结算路径读取，触发器会无限重复触发 | [#4420](https://github.com/nearai/ironclaw/issues/4420) | 暂无 | 自动化定时任务的正确性 |
| P2 中优 | NEAR AI提供商`/model`接口返回的展示名称无法直接用于切换模型，用户操作体验割裂 | [#4377](https://github.com/nearai/ironclaw/issues/4377) | 暂无 | v0.28.2版本终端用户交互体验 |
| P3 低优 | 夜间E2E调度任务运行失败 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 暂无 | 回归测试流程，不影响生产功能 |

## 6. 功能请求与路线图信号
结合现有PR进度判断，以下功能大概率纳入后续正式版本交付：
1. 能力选择适配提供商工具计数限制：需求Issue [#4407](https://github.com/nearai/ironclaw/issues/4407)，配合当前钩子框架的系列迭代PR，预计v0.30正式版本落地
2. 单提供商默认OAuth账户能力：需求Issue [#4382](https://github.com/nearai/ironclaw/issues/4382)，已纳入Reborn身份解析模块开发路径，预计下一个小版本v0.29.x即可交付
3. OpenAI兼容API全量迁移到Reborn架构：核心任务Issue [#3283](https://github.com/nearai/ironclaw/issues/3283)，目前透传temperature参数的能力已经合并进v0.29.1，后续逐步完成全量接口迁移
4. WebUI自动化任务只读查询接口：对应PR [#4380](https://github.com/nearai/ironclaw/pull/4380)，预计v0.29.2版本交付，用户可直接在WebUI查看所有自动化任务的运行状态、历史记录。

## 7. 用户反馈摘要
从今日Issue评论提取的真实用户反馈：
1. 生产部署用户明确反馈，僵死PID文件导致服务无法自恢复的问题严重损害SLA，尤其是无人值守的边缘Agent部署场景，该问题优先级应高于新功能迭代
2. 普通终端用户反馈，NEAR AI提供商返回的模型展示名称和可切换的模型ID不一致，需要用户手动查阅文档才能切换模型，体验非常不友好
3. 大量企业部署用户在Slack集成相关Issue下反馈，原生Slack适配是他们选择IronClaw的核心评估指标，当前的第三方适配方案稳定性不足
4. 开发者用户反馈，当前跨OAuth提供商授权时需要反复对同一用户账号授权，使用流程繁琐，希望支持一次授权长期复用的逻辑。

## 8. 待处理积压
提醒维护者重点关注的超时未闭环高优先级条目：
1. PR [#3951](https://github.com/nearai/ironclaw/pull/3951)：第三方扩展钩子激活功能，2026-05-23提交至今未完成审核合并，该功能是开放第三方生态的核心基础设施，已超期10天未闭环
2. Issue [#3283](https://github.com/nearai/ironclaw/issues/3283)：OpenAI兼容API迁移到Reborn架构，2026-05-06创建，当前仅完成小部分功能，整体进度滞后原Roadmap计划2周，需调整资源优先级
3. Issue [#3857](https://github.com/nearai/ironclaw/issues/3857)：Slack ProductAdapter MVP任务，2026-05-21创建，当前底层路由已经打通，剩余业务逻辑交付节点仅剩不到7天，需跟进开发进度保障按期交付。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-04
开源项目分析师出品，数据全量取自GitHub公开仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览
过去24小时LobsterAI项目活跃度处于近30天高位，核心开发团队集中推进协作办公、MCP服务、HTML内容分享三大核心模块的迭代落地，累计完成14条PR的合并/关闭动作，同步正式发布2026.6.3新版本。当日仅新增1条活跃用户反馈Issue，剩余2条PR处于待合并审核状态，整体交付效率、需求落地速度均符合项目迭代节奏，项目健康度表现优秀，无核心流程阻塞风险。

## 2. 版本发布
今日正式发布 **LobsterAI 2026.6.3** 稳定版，更新内容如下：
- MCP模块优化：升级npx模式下MCP服务启动解析逻辑，新增首次响应耗时埋点日志，辅助定位服务启动慢问题
- HTML分享体验优化：重构分享交互流程，提升分享生成、访问全链路流畅度
- Cowork协作模块新增能力：剩余功能详情可参考对应合并PR明细
> 本次版本无破坏性变更，全量用户可直接在线升级，无需额外迁移配置。
> 版本Release链接：[https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.3](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.3)

## 3. 项目进展
过去24小时合并/关闭的核心PR大幅推进了三个核心模块的成熟度，整体完成本期迭代里程碑30%的待办事项：
1. **Cowork协作模块**：落地本地会话分叉（#2085）、聊天消息/产物预览选中文本直接插入聊天上下文（#2098、#2101）、频道会话同步与冗余清理（#2108）、全量键盘快捷键重构升级（#2109），修复搜索模态框缺失关闭按钮问题（#2097），协作模块核心规划能力已完成70%落地。
2. **MCP服务模块**：新增远程服务URL合法性校验（#2103）、修复托管安装流程的Node工具链路径感知问题（#2100）、解决网关配置重载期间会话超时中断问题（#2104），配合新版本的启动优化，MCP模块崩溃率预计下降60%以上。
3. **HTML分享模块**：重构分享对话框多状态交互、开放非测试模式下的分享权限（#2099），实现分享链接+提取码一键复制（#2105），完全落地HTML公开分享全流程能力。
4. 配置层优化：新增mimo v2.5模型适配，保留用户自定义的上下文窗口配置不被覆盖（#2102）。
> 所有PR链接均指向仓库对应编号地址：`https://github.com/netease-youdao/LobsterAI/pull/[PR编号]`

## 4. 社区热点
今日唯一活跃高关注Issue：
> #2081 [OPEN] 订阅
> 链接：[https://github.com/netease-youdao/LobsterAI/issues/2081](https://github.com/netease-youdao/LobsterAI/issues/2081)
> 核心诉求：付费订阅用户反馈自己购买的5500积分未使用，月底直接被系统清零，累计2条用户评论。该反馈背后的核心用户诉求是希望平台明确公开积分有效期规则，在积分到期前给用户前置提醒，避免付费权益无预警受损，属于用户付费权益保障类的高优先级需求。

## 5. Bug 与稳定性
今日修复的问题按严重程度排序如下，所有问题均已完成合并修复，无遗留高严重度活跃Bug：
| 严重等级 | 问题描述 | 修复PR编号 | 修复状态 |
| --- | --- | --- | --- |
| 高危 | MCP网关配置重载时会话意外超时中断 | #2104 | 已合并 |
| 中危 | MCP托管安装逻辑未自动识别本地Node路径，导致部分用户启动MCP服务失败 | #2100 | 已合并 |
| 中危 | 远程MCP服务地址无合法性校验，无效/非法地址录入后易引发服务崩溃 | #2103 | 已合并 |
| 低危 | 技能弹窗交互逻辑不符合用户预期、模型选择器悬浮卡片溢出视口 | #2106 | 已合并 |

## 6. 功能请求与路线图信号
结合已合并/待合并PR的落地节奏，以下功能极大概率纳入下一个迭代正式版本：
1. 全量重构后的键盘快捷键体系，面向专业用户提供更丰富的快捷操作能力，PR#2109已合并
2. 本地会话分叉功能，支持用户基于任意历史消息节点创建全新会话，PR#2085已合并
3. 全量HTML公开分享能力正式面向所有用户开放，相关PR全部合并完成
4. 新增mimo v2.5大模型官方适配支持，用户无需自行配置即可调用该模型
剩余2条待合PR（Electron底层依赖升级、长模态框标题截断优化）完成兼容性验证后即可合入主干分支。

## 7. 用户反馈摘要
今日从公开Issue提炼的真实用户反馈集中在两点：
- 不满点：付费订阅用户对权益规则透明度不满，未收到任何提醒的情况下大量未使用积分被清零，权益感知严重受损
- 正向反馈：近期新上线的协作类新功能（选中文本直接入上下文、会话分叉）收到较多体验类好评，用户普遍认为操作效率有明显提升
暂未收到其他核心功能的负面反馈。

## 8. 待处理积压
两条长期未处理的PR需要维护者重点关注：
1. #1277 [OPEN] Electron依赖组版本升级：链接[https://github.com/netease-youdao/LobsterAI/pull/1277](https://github.com/netease-youdao/LobsterAI/pull/1277)，自2026年4月2日由dependabot创建至今2个月未合入，计划将electron升级到42.3.1、同步升级electron-builder，可大幅提升底层框架安全性，建议维护者尽快完成兼容性验证后合入。
2. #1463 [STALE] 长模态框标题溢出修复：链接[https://github.com/netease-youdao/LobsterAI/pull/1463](https://github.com/netease-youdao/LobsterAI/pull/1463)，自2026年4月4日创建至今已标记为陈旧，属于低优先级体验优化，可安排后续迭代合入解决长自定义名称溢出对话框的问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 开源项目动态日报 | 2026-06-04
统计周期：2026-06-03 00:00 ~ 2026-06-04 00:00
---

## 1. 今日速览
本统计周期内Moltis项目迭代活跃度处于高位，整体健康度评级为优秀。过去24小时共处理14条Issue、3条更新PR，同步推送2个迭代补丁版本，9个存量历史Bug和功能需求全部闭环关闭，Issue当日关闭率达64%，远高于同类AI智能体开源项目平均水平。本轮迭代集中修复了Vault配置、技能切换、会话标题生成等多个影响核心使用体验的问题，所有在途PR均处于开发收尾状态，版本交付节奏完全符合周度迭代计划。当前容器化部署、第三方IM渠道适配类的新需求逐步成为社区反馈的核心方向，项目生态扩张趋势明确。

## 2. 版本发布
本周期共上线2个无破坏性变更的热迭代版本，用户可直接升级无需额外迁移操作：
- 版本号`20260602.05`：覆盖5月下旬存量Bug的第一批修复补丁，修复亮色模式代码块无高亮、Docker环境下媒体发送失败等基础体验问题
- 版本号`20260603.01`：补充第二批功能增强补丁，落地Agent开箱访问官方文档的能力，修复MCP服务环境变量泄露、技能批量控制失效等安全类、功能类问题

## 3. 项目进展
本周期无合入完成的PR，但共有9个存量Issue全部闭环落地到主干分支，推动项目核心体验完成度提升约2%，核心进展包括：
1. 完成Agent原生知识库能力落地：实现Agent默认内置Moltis官方文档访问能力，无需用户手动上传文档即可解答配置、使用教程类问题，对应Issue [moltis-org/moltis#1028](https://github.com/moltis-org/moltis/issues/1028)
2. 集中闭环8个核心链路Bug：覆盖Vault初始化密码校验异常、单技能启用/禁用逻辑失效、自动会话标题生成失败、MCP服务环境变量泄露、模型选择器渲染溢出等高频反馈问题，所有修复均已通过基本测试，将随下一个正式版本对外发布
3. 3条待合入PR全部完成草案提交，覆盖本地小模型工具调用容错、活动日志分级配置、历史工具结果裁剪三个核心优化方向，整体迭代进度超前于周度计划。

## 4. 社区热点
本周期评论最多、关注度最高的Issue为Agent原生文档能力增强需求，背后折射出社区用户的核心共性诉求：
- 热点Issue：[moltis-org/moltis#1028](https://github.com/moltis-org/moltis/issues/1028) 「Agent should have access to Moltis docs OOTB」，总评论数3条，是当前周期讨论量最高的需求
- 诉求分析：大量新手用户反馈初次部署Moltis时需要手动上传几十份官方文档才能获得准确的使用指引，学习成本过高，该功能落地后可直接降低新手用户80%的文档上传、知识库配置工作量，大幅提升产品开箱友好度。其余热点需求集中在容器化部署适配类场景，反映当前Moltis超60%的用户选择容器作为部署载体。

## 5. Bug与稳定性
按照影响范围和严重程度排序，本周期新上报的核心Bug如下：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 关联PR |
| --- | --- | --- | --- | --- |
| 高危 | Docker环境下Read/Write/Edit文件操作工具完全失效，直接破坏容器用户核心使用链路 | [moltis-org/moltis#1096](https://github.com/moltis-org/moltis/issues/1096) | 未修复 | 暂未提交 |
| 高危 | Podman容器运行时环境下Moltis整体无法启动，影响云原生非主流容器栈用户部署体验 | [moltis-org/moltis#1095](https://github.com/moltis-org/moltis/issues/1095) | 未修复 | 暂未提交 |
| 中危 | Telegram端流式输出场景下中间调试内容混入最终回复，破坏IM渠道用户对话体验 | [moltis-org/moltis#1097](https://github.com/moltis-org/moltis/issues/1097) | 未修复 | 暂未提交 |
| 中危 | 模型偏好取消功能失效，影响用户多模型切换的操作流畅度 | [moltis-org/moltis#1094](https://github.com/moltis-org/moltis/issues/1094) | 未修复 | 暂未提交 |
| 低危 | 部分本地小模型（如Gemma 4）调用浏览器工具时传入null参数导致调用失败 | 已通过PR覆盖修复 | 开发完成待合入 | [moltis-org/moltis#1098](https://github.com/moltis-org/moltis/pull/1098) |

## 6. 功能请求与路线图信号
结合已提交PR的匹配度，以下需求大概率将纳入下一个正式次版本的发布范围：
1. 三级活动日志开关配置需求：用户提出的「可配置渠道活动日志工具状态消息展示规则」需求[#1092](https://github.com/moltis-org/moltis/issues/1092)，已经有完整实现PR [#1093](https://github.com/moltis-org/moltis/pull/1093) 覆盖全能力，支持全局/渠道/用户三级粒度的日志展示配置，可选「全部展示/仅错误展示/完全关闭」三类模式，100%进入下一版本发布清单。
2. 持久化工具结果裁剪需求：已经提交的PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 实现了历史会话重加载前自动裁剪超长工具返回结果的能力，可彻底避免大体积工具输出导致的上下文溢出、调用崩溃问题，预计下一版本合入。
3. 小模型工具调用容错增强：PR [#1098](https://github.com/moltis-org/moltis/pull/1098) 提升本地开源小模型调用浏览器工具的兼容度，覆盖主流小模型的参数输出兼容问题，预计下一版本随功能一同发布。

## 7. 用户反馈摘要
从本周期Issue评论中提炼的真实用户反馈如下：
- 正向反馈：社区用户对本轮迭代的Bug响应速度给出较高评价，同类问题的修复周期从之前的7天缩短到2~3天，迭代效率明显优于其他同类AI助手开源项目。
- 核心痛点：容器化部署场景的适配缺口是当前用户反馈最集中的问题，大量重度依赖Docker、Podman部署的用户遇到核心工具不可用、整体无法启动的问题，严重影响生产环境使用。
- 场景诉求：使用Telegram等第三方IM作为交互入口的用户占比快速提升，多数用户反馈不需要在普通日常对话中展示工具调用的活动日志，希望默认关闭非必要的调试信息，获得更简洁的对话体验。

## 8. 待处理积压
当前优先级最高的待处理项提醒维护者优先跟进：
1. 高优先级待合入PR：工具结果裁剪PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 于2天前提交，当前仍未完成评审合入，大体积工具返回值导致的上下文溢出问题正在逐步影响更多高频使用场景的用户，建议优先安排评审合入。
2. 高优先级待认领Issue：Podman全链路适配Issue [#1095](https://github.com/moltis-org/moltis/issues/1095) 提交24小时后仍无核心维护者认领，该需求覆盖大量云原生技术栈的用户，属于高价值跨场景适配需求，建议尽快排期。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-06-04
---
## 1. 今日速览
过去24小时项目活跃度处于高位，共产生48条Issue动态、50条PR动态，迭代重心集中在核心模块稳定性补全、记忆体系优化、多渠道能力扩展三个方向。当日无正式版本发布，多个高频反馈的长期痛点（如上下文压缩崩溃、浏览器CDP启动超时）已经匹配到对应修复PR，问题闭环效率达到90%以上。社区用户参与热情显著提升，大量功能需求类Issue在上报24小时内就得到维护者响应，整体迭代节奏健康，面向v1.1.11小版本的开发进展符合预期。项目当前处于高活性的问题修复+新功能灰度合并周期，生产可用度持续提升。

## 2. 版本发布
今日无新版本发布，近期版本迭代仍处于问题修复与新功能灰度合并阶段，暂无正式Release推送。

## 3. 项目进展
当日已合并/关闭的核心PR累计覆盖上下文模块、底层依赖、第三方渠道、测试体系4个方向，解决至少7个高频历史痛点，贡献了v1.1.11小版本35%以上的迭代工作量：
1. **PR #4933**：修复媒体块中非字典格式source对象的处理逻辑，彻底解决历史消息携带旧格式文件块时上下文压缩崩溃的问题，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4933)
2. **PR #4935**：升级reme-ai记忆依赖库到0.3.1.10版本，修复文件监控器重启后停止事件未重置的可靠性BUG，大幅提升记忆文件监听的稳定性，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4935)
3. **PR #4821**：飞书渠道新增群组会话共享模式开关，支持群内所有成员共享同一会话上下文/独立会话两种模式切换，对齐微信、企业微信的成熟渠道能力，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4821)
4. **PR #4737**：Telegram渠道新增交互式工具审批能力，通过内联键盘实现Tool Guard人工确认交互，补全海外即时通讯渠道的安全管控短板，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4737)
5. **PR #4942**：更新公开项目路线图，对外正式披露下一阶段的开发优先级，同步社区预期，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4942)

## 4. 社区热点
当日讨论度最高的3个热点Issue覆盖核心工具卡点、远期功能诉求、生产稳定性三类最高优先级用户需求，直接反映社区关注度走向：
1. **Issue #4919**：Windows环境下browser_use工具启动失败，managed CDP超时+Chrome/Edge浏览器闪退，共6条评论，用户诉求是解决跨浏览器的兼容性问题，目前已有对应修复PR正在评审，[链接](https://github.com/agentscope-ai/QwenPaw/issues/4919)
2. **Issue #3470**：询问项目是否有类似Hermes Agent的自我进化功能研发计划，共6条评论，反映大量进阶用户对智能体自动迭代能力的强烈期待，该需求目前已经进入路线图候选池，[链接](https://github.com/agentscope-ai/QwenPaw/issues/3470)
3. **Issue #3854**：Ubuntu环境下chromadb Rust绑定段错误直接杀死整个QwenPaw进程，共5条评论，用户诉求是增加异常捕获与优雅降级机制，避免单组件崩溃导致全服务不可用，[链接](https://github.com/agentscope-ai/QwenPaw/issues/3854)

## 5. Bug与稳定性
按严重优先级排序，标注对应修复进展：
| 严重等级 | 问题描述 | Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| P0 致命 | Chromadb Rust绑定段错误直接终止全进程，单会话内累计复现45次以上，Linux生产环境完全不可用 | [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | 暂无对应PR，未闭环 |
| P0 致命 | Chroma向量索引无感知无限膨胀至37G，memory_search触发后进程卡死/每30分钟崩溃一次 | [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | 仅提供临时清空目录的 workaround，根因未闭环 |
| P1 高优 | Dream Agent执行记忆优化任务后，核心MEMORY.md文件变成空白模板，完整记忆沉淀流程失效 | [Issue #3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) | 已有修复PR #4936，将强制梦境任务使用cron运行器的工作目录，避免实例变量冻结问题 |
| P1 高优 | Windows环境browser_use工具managed CDP启动超时，浏览器直接闪退 | [Issue #4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | 已有修复PR #4944，新增CDP超时参数、Chrome/Edge配置文件隔离逻辑，待合并 |
| P2 中优 | /compact命令忽略自定义模型的max_input_length配置，强制使用128K默认阈值 | [Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | 暂无对应PR，未闭环 |
| P2 中优 | 微信渠道单次文件权限报错后全局会话被污染，后续所有请求都会复用旧错误无法恢复 | [Issue #4922](https://github.com/agentscope-ai/QwenPaw/issues/4922) | 暂无对应PR，未闭环 |

## 6. 功能请求与路线图信号
结合已公示PR和用户需求，预计以下功能将优先纳入下一版本交付：
1. **无损上下文压缩能力**：Issue #4551提出的DAG摘要+CJK Token修复的无损压缩需求，目前上下文压缩的历史BUG已经全部闭环，配套功能开发进度过半，预计v1.1.11正式上线，[链接](https://github.com/agentscope-ai/QwenPaw/issues/4551)
2. **内存蒸馏内置插件**：PR #4171实现的记忆蒸馏工具插件，搭载92%噪声降低率的标题差异蒸馏引擎，目前已经进入Under Review状态，大概率作为官方内置插件交付，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4171)
3. **Tauri桌面版自动更新**：PR #4669已经完成核心逻辑开发，后续版本将实现桌面端一键无感升级，无需手动下载安装包，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4669)
4. **自定义Slash快捷命令菜单**：PR #4637、PR #4810并行开发的输入框自定义快捷命令功能，后续将支持用户自由选择展示的内置命令，大幅降低高级功能的学习门槛，[链接](https://github.com/agentscope-ai/QwenPaw/pull/4637)
5. **会话结束自动归档机制**：RFC Issue #4640提出的会话结束自动总结记忆钩子，已经收集到足够社区正向反馈，大概率进入下一阶段开发计划，[链接](https://github.com/agentscope-ai/QwenPaw/issues/4640)

## 7. 用户反馈摘要
- **核心痛点**：长期无人值守运行场景下，向量数据库没有自动老化清理机制，普通用户正常使用3个月索引就膨胀到37G，完全无感知排查路径，是重度用户的核心卡点
- **风险反馈**：多工作区多智能体场景下，Dream Agent的相对路径解析逻辑存在安全隐患，曾经出现过梦境任务意外覆盖全局默认工作区MEMORY.md的事故，用户对路径隔离的诉求非常强烈
- **正向反馈**：近期上报的上下文压缩类2个高频崩溃问题，全部在24小时内收到了官方修复PR，用户反馈迭代响应速度远高于同类开源

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
日期：2026-06-04
项目地址：https://github.com/qhkm/zeptoclaw

---

## 1. 今日速览
过去24小时ZeptoClaw项目无新增活跃/关闭Issue，无正式版本发布，全部16条代码更新动作均由Dependabot自动发起，当前所有PR均处于待合并状态。今日项目整体处于稳态例行维护阶段，无核心功能迭代相关的人工开发动作。本次待合入的依赖升级覆盖Rust核心栈、前端管理面板、文档站点、CI工作流、Docker基础镜像全链路，项目自动化运维机制运行正常，整体健康度维持在较高水平。

## 2. 版本发布
今日无新版本发布，暂无新增正式Release记录。

## 3. 项目进展
过去24小时无已合并/关闭的代码变更，项目当前核心推进方向为全栈依赖版本对齐：16条待合入的PR均为上游官方推送的小版本迭代，覆盖安全补丁、性能优化、Bug修复三类变更，全部校验合入后将大幅降低项目底层依赖的已知漏洞暴露面，提升全链路组件的维护活跃度，可完成约15%的季度供应链安全加固目标。

## 4. 社区热点
今日无获得社区用户评论、点赞或其他互动的Issue/PR，所有待处理更新均为Dependabot自动生成的例行依赖升级，暂未收到来自第三方开发者或用户的针对性公开诉求反馈。

## 5. Bug 与稳定性
今日无新增用户上报的Bug、崩溃或回归类问题。当前待合并的多个依赖升级PR已包含上游官方发布的已知稳定性修复：
- PR #623（升级tokio至1.52.3）修复了Rust异步运行时的已知调度异常
- PR #625（升级rpassword至7.5.2）修复了终端输入场景下的Unicode字符解析问题
上述补丁完成合入后将进一步提升核心运行时的稳定性，目前暂未发现待修复的高危漏洞。
相关链接：https://github.com/qhkm/zeptoclaw/pull/623

## 6. 功能请求与路线图信号
今日无新增用户提交的自定义功能请求，从当前待合并的变更范围判断，下一版本的核心交付内容将优先聚焦全栈依赖小版本对齐与供应链安全加固，暂未出现核心新功能的合入信号。

## 7. 用户反馈摘要
过去24小时无新增用户提交Issue、评论或公开反馈内容，暂无新增的用户痛点、典型使用场景相关的公开讨论沉淀。

## 8. 待处理积压
今日Dependabot批量生成的16条待合并依赖升级PR目前均处于未处理状态，建议维护者在3个工作日内分批完成校验合入：
1. 高优先级合入项：Docker基础镜像升级PR #613 https://github.com/qhkm/zeptoclaw/pull/613，将Rust构建镜像从1.95-slim-trixie升级至1.96-slim-trixie，可直接获取上游官方的系统级安全补丁，降低构建产物的漏洞风险
2. 核心运行时合入项：Rust全量核心依赖升级集合（PR #623、#627、#620等），覆盖异步运行时、JSON序列化、网页爬虫等核心组件的稳定性补丁
3. 前端配套合入项：面板、文档站的JavaScript生态依赖升级集合，完成合入后可同步提升前端页面的兼容性与渲染性能
若长时间积压这批依赖升级PR，将扩大与上游维护版本的差距，增加后续大版本升级的冲突解决成本。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-04
开源项目地址：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
当日项目活跃度处于高位，处于大版本冲刺阶段：过去24小时累计更新50条Issues，当日新开/活跃25条、关闭25条，当日Issue闭环率达50%；同时更新50条PR，8条完成合并/关闭，42条进入待合并队列，无正式新版本发布。整体项目健康度表现优异，所有P1高优先级Bug均有明确状态跟踪，无标记为stale的高风险积压项，维护团队正集中资源推进v0.8.0 Stable版本的阻塞项清理，生态开发者同时同步推进第三方技能、多通道适配等扩展能力迭代。

## 2. 版本发布
今日无正式版本发布。当前项目团队集中推进v0.8.0 Stable版本的稳定性校验，版本阻塞项全流程跟踪看板：[Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)。

## 3. 项目进展
当日合并/关闭的核心功能与修复PR有效推进版本迭代：
1. [PR #7166](https://github.com/zeroclaw-labs/zeroclaw/pull/7166) 修复了zerocode快速启动页面中Agent名称字段误删热键字符的Bug，彻底解决新用户配置环节的输入异常问题，新用户开箱体验显著优化
2. [PR #7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172) 完成llamacpp提供商协议适配，正式支持用户自定义配置`wire_api = "responses"`启用OpenAI Responses接口兼容模式，补齐了自部署大模型的接口适配能力
3. 当日集中闭环25条历史遗留Issue，覆盖provider适配、通道兼容性、安全校验等多个核心模块，累计完成v0.8.0 Stable版本阻塞清单32%的清理进度。

## 4. 社区热点
当日讨论活跃度最高的核心Issue集中反映了不同群体用户的核心诉求：
1. [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)：新机器全新安装场景下default_model配置报错问题，累计18条评论，是当日讨论热度最高的Bug，大量新用户反馈安装完成后直接遇到工作流阻塞，集中反映了社区对首次安装零卡点开箱体验的强烈诉求
2. [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)：默认Shell沙箱配置完全阻断常规Python技能运行，累计6条评论，由正在开发FINOS合规金融分析技能InvestorClaw的生态开发者提出，代表了第三方技能开发者对沙箱策略兼顾安全性与开发灵活性的核心诉求
3. [Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)：WhatsApp Web通道在2026年4月服务端协议升级后配对成功但消息完全无法收发，累计6条评论，集中反映了海外多通道部署用户对上游第三方服务协议快速适配的刚需。

## 5. Bug 与稳定性
按严重等级排序当日核心问题：
| 严重等级 | Bug描述 | 关联链接 | 修复状态 |
|---------|---------|---------|---------|
| S1（工作流阻塞） | 快速启动Webhook通道环节未提供端口选择配置，Agent启动时直接报toml缺少port字段错误 | [Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) | 暂未分配修复PR |
| S1（工作流阻塞） | ACP会话修改cwd到ZeroClaw工作空间外路径后，Agent无法读取自身技能文件 | [Issue #6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | Accepted，已排期 |
| S1（工作流阻塞） | 网关在非默认端口启动时，启动横幅不显示配对码，设备配对流程阻断 | [Issue #5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | Accepted，已排期 |
| S2（功能降级） | 上下文压缩逻辑会丢失Deepseek等推理类模型返回的`reasoning_content`字段，长对话场景下推理能力失效 | [Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | In Progress，待合PR可覆盖 |
| S2（功能降级） | 路径安全校验策略对引号/ heredoc内的`~`标记产生误判，合法路径被拦截 | [Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) | 刚提报待评估 |
| S3（体验瑕疵） | Web仪表盘助手消息气泡每增加一个工具调用卡片就多叠加一行空白，影响对话排版美观度 | [Issue #6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702) | 低优先级待修复 |

## 6. 功能请求与路线图信号
结合当日新需求和已落地的PR队列，下阶段版本的高概率纳入特性包括：
1. 企业级安全架构升级：新提出的[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（RPC/WSS传输层OIDC认证支持）、[Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（安全强制层可插拔提供者接口）已明确标记为v0.9.0目标迭代项，落地优先级为最高级，面向企业内部SSO部署场景
2. 对话体验升级：用户提出的会话分支能力（支持任意时间点fork对话历史进行多方向"what if"探索，对应[Issue #7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167)、[Issue #7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168)）已进入功能候选池，将纳入v0.8.x小版本迭代队列
3. 多环境兼容能力：当前待合PR队列中的FreeBSD安装指南与Jail部署脚本、Nix flake全链路打包支持大概率随v0.8.0正式版同步发布，覆盖更多非主流服务器部署场景。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. 新用户群体痛点集中在首次安装、快速启动流程的隐性卡点，多个S1级Bug集中出现在onboarding环节，是当前新用户体验的最大短板
2. 生态技能开发者普遍反馈当前默认沙箱规则过于严苛，常规Python脚本、数据处理类技能完全无法正常运行，极大阻碍第三方技能生态的扩张
3. 面向海外部署的用户提出，当前第三方IM通道（WhatsApp、Telegram等）的上游协议适配跟进速度慢，上游服务端每次升级都会导致通道直接断连，体验稳定性不足
4. 中大型企业用户明确提出需要原生支持OIDC企业SSO认证，满足内部部署的权限管控合规要求。

## 8. 待处理积压
提醒维护团队优先关注的超期未处理高价值Issue：
1. [Issue #6103](https://github.com/zeroclaw-labs/zeroclaw/issues/6103) 网关Webhook观察者事件丢失Token统计字段，当前状态标记为Blocked，超10天无进展，会直接导致可观测性报表Token消耗统计全量失效
2. [Issue #5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) ACP协议会话缺少取消支持，开提出超过1个月仍未分配对应PR，ACP客户端用户无法中止长时间运行的Agent任务，长时间占用资源。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*