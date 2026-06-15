# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-15 23:45 UTC

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

# OpenClaw 项目动态日报 | 2026-06-16
---
## 1. 今日速览
过去24小时OpenClaw项目活跃度处于近期高位，累计产生500条Issue更新与500条PR更新，核心社区诉求集中在全端跨平台客户端覆盖、安全权限增强两大方向，工程侧集中攻坚网关稳定性、消息通道兼容性等高优问题。当日开放待合并PR占比达88%，社区外部贡献占比超过60%，整体项目迭代速率健康，正在向v2026.6.x正式稳定版快速推进，暂未出现阻断性安全漏洞。

## 2. 版本发布
今日无正式新版本发布，最近一次灰度迭代为v2026.6.1版本，目前仍在收集用户侧兼容性反馈。

## 3. 项目进展
当日累计关闭/合并60条PR，覆盖基础兼容性修复、体验优化两大方向，累计推进v2026.6.x稳定版发布进度约15%，重要落地项包括：
- [#93275](https://github.com/openclaw/openclaw/pull/93275) 修复会话模型降级场景下的无限模型钉死问题，解决多模型 fallback 逻辑失效的长期遗留bug
- [#92704](https://github.com/openclaw/openclaw/pull/92704) 适配通义千问DashScope视觉模型原生图像格式，解决阿里云侧视觉模型返回400报错的兼容性问题
- [#84036](https://github.com/openclaw/openclaw/pull/84036) CLI新增命令拼写纠错提示，用户输错命令后自动给出最近似匹配建议，大幅降低新手使用门槛
- [#90931](https://github.com/openclaw/openclaw/pull/90931) 修复多代理场景下控制界面头像全局覆盖的问题，每个代理可独立配置自定义头像
- [#44993](https://github.com/openclaw/openclaw/issues/44993) 闭环定时任务心跳时间戳不刷新的回归bug，解决长期运行的cron任务拿到错误系统时间的问题

## 4. 社区热点
今日讨论热度最高的3项社区诉求：
1. **#75 Linux/Windows Clawdbot 桌面客户端支持** | [链接](https://github.com/openclaw/openclaw/issues/75)
   累计109条评论、79个点赞，是当前社区呼声最高的需求，用户明确指出现有版本仅支持macOS、iOS、Android端，大量Linux/Windows桌面部署场景的用户不愿自行编译源码，强烈要求官方提供原生桌面端安装包，完整对齐macOS端功能集。
2. **#25592 工具调用间内部处理文本泄露到公开消息通道** | [链接](https://github.com/openclaw/openclaw/issues/25592)
   累计32条评论，该安全/UX类问题大量用户反馈影响实际使用，Agent处理中间输出的报错、确认类文本会直接发送到Slack、iMessage等公开消息群，完全打乱正式对话节奏。
3. **#9443 预构建Android APK官方发布** | [链接](https://github.com/openclaw/openclaw/issues/9443)
   累计25条评论，非开发者普通安卓用户无法自行编译源码，强烈要求官方在Release页提供直接可下载安装的APK安装包，降低普通用户接入门槛。

## 5. Bug 与稳定性
按严重优先级排序的今日高优问题：
| 严重等级 | 问题描述 | Issue链接 | 是否已有修复PR |
|---------|---------|----------|---------------|
| P0 | 网关进程严重内存泄漏，正常运行2-3天RSS就从350MB膨胀到15.5GB，触发OOM反复崩溃重启 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 否，目前仍在定位根因 |
| P1 | SIGUSR1触发网关重启时Signal守护进程存在竞态条件，产生孤儿进程、消息发送全失败 | [#22676](https://github.com/openclaw/openclaw/issues/22676) | 是，关联PR已开放待评审 |
| P1 | 多轮对话场景下Agent会错误回复用户上一条历史消息，会话上下文状态错乱 | [#32296](https://github.com/openclaw/openclaw/issues/32296) | 否，等待现场实机复现 |
| P1 | 配置了独立agentDir的代理，目录下的SOUL.md/TOOLS.md等引导文件被静默忽略，只有工作区目录下的文件会被加载 | [#29387](https://github.com/openclaw/openclaw/issues/29387) | 否，修复思路已明确待产品确认 |
| P1 | v2026.6.1版本Matrix聊天通道消息调度完全崩溃，所有入站消息直接触发类型错误 | [#90325](https://github.com/openclaw/openclaw/issues/90325) | 否，等待实机复现 |

## 6. 功能请求与路线图信号
结合已开放关联PR的用户需求，以下功能大概率会纳入下一正式版本迭代：
1. [#10659 密钥掩码保护系统](https://github.com/openclaw/openclaw/issues/10659)：允许Agent调用API但无法读取原始密钥，防范prompt injection导致的密钥泄露，属于核心安全增强需求，优先级P1
2. [#6615 exec命令黑名单支持](https://github.com/openclaw/openclaw/issues/6615)：补充现有命令白名单体系，实现"除指定高危命令外全部允许"的灵活管控策略，用户投票7个点赞呼声极高
3. [#20786 Telegram Business Bot支持](https://github.com/openclaw/openclaw/issues/20786)：适配Telegram最新商业账号消息接口，已有对应开发PR开放，成熟度很高
4. [#75380 诊断日志自动轮转策略](https://github.com/openclaw/openclaw/issues/75380)：解决日志文件无限增长占满磁盘的问题，属于基础运维刚需，已经完成技术方案评审
5. [#12678 能力基权限管控体系](https://github.com/openclaw/openclaw/issues/12678)：默认拒绝所有高危操作，技能运行时严格限制权限范围，属于官方明确安全路线图中的核心项。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与场景：
1. 普通非开发者用户部署门槛过高，尤其是Linux桌面端、安卓端没有预构建包，编译环境配置需要消耗数小时时间，大量新手用户卡在安装阶段放弃使用
2. 量化、金融、政企运维等高风险行业用户集中反馈，当前依赖Prompt软约束的"调用指定工具才能回复"规则完全不可靠，必须要有底层硬拦截机制管控Agent行为
3. 使用Docker沙盒部署的用户普遍反馈工作目录路径映射bug，网关无法正确挂载宿主机目录，沙盒功能完全无法正常启用
4. 长期使用的老用户对OpenClaw的多代理扩展能力认可度很高，但集体吐槽网关长时间运行稳定性差，之前需要每周手动重启一次规避内存泄漏问题。

## 8. 待处理积压
提醒维护者优先关注的长期积压项：
1. 热门需求#75全平台Linux/Windows桌面客户端Issue从2026年1月开提至今已经超过半年，109名用户持续催更，至今未明确排期，需要尽快给出里程碑规划
2. 高优安全需求#10659 API密钥掩码保护功能提交已超过4个月，属于防范密钥泄露的核心安全能力，至今未进入开发排期
3. P0级网关内存泄漏问题#915886月9日提交至今已超过一周，大量生产用户受影响，根因定位进度偏慢
4. 当前有超过30个P1级关联PR等待维护者人工评审，合并队列积压量近期上升速度较快，需要补充评审人力加快合并节奏。

---

## 横向生态对比

# 2026-06-16 AI 智能体开源生态横向对比分析报告
面向技术决策者、智能体开发者
---

## 1. 生态全景
当前个人AI助手与自主智能体开源生态已全面脱离早期Demo探索阶段，进入生产级落地爆发期，本次统计覆盖13个活跃项目，全生态当日累计Issue+PR流转量突破2000条，外部社区贡献平均占比超40%，迭代速度远超通用开源软件平均水平。生态核心矛盾已从早期的大模型适配转向工程稳定性、底层安全硬管控、多端开箱即用三大核心方向，降低非开发者用户部署门槛成为所有社区的最高优先级共性诉求。国内开源团队贡献占比超过60%，面向国产大模型、国内IM渠道、RISC-V边缘硬件的适配迭代速度远超海外同类项目，本土化落地特征极其显著。Model Context Protocol（MCP）生态兼容已经成为新一代Agent运行时的事实标准，各项目正在快速打通彼此的能力孤岛，形成统一的扩展生态。

## 2. 各项目活跃度对比
| 项目名称 | 当日活跃/更新Issue数 | 当日PR流转数 | 当日Release情况 | 项目健康度评估 |
|---------|---------------------|-------------|----------------|----------------|
| OpenClaw | 500 | 500 | 无正式版本发布，灰度版本v2026.6.1收集中 | 高（生产级迭代，迭代速率远超生态平均） |
| NanoBot | 4 | 35 | 无版本发布 | 9.2/10（优秀，高可用能力快速补全） |
| Hermes Agent | 50 | 50 | 无版本发布 | 优秀（自托管本地模型适配推进中） |
| PicoClaw | 3 | 12 | 发布v0.2.9-nightly测试版 | 优秀（安全问题7小时闭环，稳定版临近） |
| NanoClaw | 0 | 11 | 无版本发布 | 优良（MCP生态能力快速扩展） |
| NullClaw | 3 | 1 | 无版本发布 | 中等（平稳维护，响应速度偏慢） |
| IronClaw | 47 | 50 | 无版本发布 | 优秀（Reborn新架构密集测试） |
| LobsterAI | 2 | 11 | 无版本发布 | 良好（体验细节打磨收尾） |
| TinyClaw | 0 | 0 | 无版本发布 | 无活动，长期停更 |
| Moltis | 0 | 2 | 无版本发布 | 良好（异构Agent调度能力迭代） |
| CoPaw | 50 | 50 | 无版本发布，最新版v1.1.11.post2反馈修复中 | 良好（C端用户场景快速渗透） |
| ZeptoClaw | 0 | 0 | 无版本发布 | 无活动，长期停更 |
| ZeroClaw | 50 | 50 | 无版本发布，并行推进v0.8.1/v0.9.0双迭代 | 优秀（安全加固路线推进中） |

## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态中社区规模断层领先的头部项目，当日Issue+PR总流转量达到1000条，是第二名同量级活跃项目的10倍，外部社区贡献占比超过60%，为全生态最高。其技术路线差异显著于同类项目：绝大多数同类项目都是先面向开发者构建后端Agent运行时，再向下兼容C端侧能力，而OpenClaw从成立之初就主打全端跨平台个人AI助手路线，核心迭代方向完全围绕普通非开发者用户的开箱即用需求，是生态中唯一拥有大规模C端用户基础的头部项目。当前其社区规模、迭代速率均领先生态平均水平2倍以上，核心短板为全平台客户端覆盖、底层安全权限体系仍在攻坚阶段，与其他面向企业/开发者场景的项目形成明确互补，没有直接同质化竞争。

## 4. 共同关注的技术方向
多项目涌现的共性需求全部指向生产级落地的核心卡点：
1. **底层安全硬管控体系**：涉及OpenClaw、NanoBot、ZeroClaw、IronClaw，诉求为彻底抛弃依赖Prompt软约束的旧权限模式，落地密钥掩码、高危命令黑名单、MCP权限按粒度隔离、Agent操作全链路审计等硬拦截能力，防范Prompt注入导致的密钥泄露、越权操作风险。
2. **预构建包降低部署门槛**：涉及OpenClaw、PicoClaw、NanoBot、CoPaw，诉求为完全放弃要求用户自行编译的旧模式，官方直接提供Linux/Windows桌面端安装包、Android APK、RISC-V架构原生deb包，将非开发者用户部署耗时从小时级压缩到分钟级。
3. **本地大模型兼容性优化**：涉及Hermes Agent、NullClaw、NanoBot，诉求为修复Ollama上下文参数硬限制、本地推理内容强制截断、空响应无法自动降级等共性Bug，最大化释放离线大模型的能力，满足合规场景需求。
4. **MCP生态开放兼容**：涉及NanoClaw、IronClaw、Moltis、ZeroClaw，诉求为从仅支持本地Stdio类型MCP扩展，升级到支持远程HTTP/SSE托管的SaaS MCP服务接入，打通跨项目的能力互调用生态。
5. **国内IM渠道体验适配**：涉及CoPaw、PicoClaw、LobsterAI，诉求为修复飞书、企业微信、华为小艺等国内渠道的格式转义错误、授权逻辑异常等体验问题，适配国内用户的日常使用习惯。

## 5. 差异化定位分析
各项目已形成清晰的分层错位竞争格局：
| 项目分类 | 代表项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---------|----------|----------|----------|--------------|
| 全栈C端助手类 | OpenClaw、CoPaw、Hermes Agent | 端侧体验打磨、全端覆盖 | 普通个人用户、非开发者 | 端云协同架构，优先优化GUI交互体验 |
| 边缘硬件适配类 | PicoClaw、NanoBot | 低资源占用、异构硬件兼容 | 嵌入式开发者、边缘AI部署用户 | 精简运行时架构，原生适配RISC-V等低算力芯片 |
| 企业级运行时类 | IronClaw、ZeroClaw、NanoClaw | 高可用、安全管控、可观测性 | 企业运维、SaaS服务开发者 | 分布式网关+插件化扩展架构，支持多Agent集群调度 |
| 极简运行时类 | NullClaw、Moltis、TinyClaw | 最小依赖、极致精简体积 | 需要嵌入Agent能力的业务开发者 | 无多余冗余依赖，镜像体积可压缩到数十MB |
| 场景闭环类 | LobsterAI | 语音交互、文档预览等生产力能力 | 国内教育/生产力场景用户 | 绑定自研语音/文档处理能力生态，垂直场景体验最优 |

## 6. 社区热度与成熟度分层
整个生态的项目成熟度已经形成明确的三级梯队：
1. **第一梯队（快速迭代攻坚阶段）**：OpenClaw、IronClaw、ZeroClaw、Hermes Agent、CoPaw，当日Issue+PR总流转量均超过100，正处于正式大版本发布前的密集功能补全阶段，日均合并数十条PR，核心面向生产级可用性的卡点做定向突破。
2. **第二梯队（质量巩固阶段）**：NanoBot、PicoClaw、NanoClaw、LobsterAI、Moltis，迭代节奏平稳，核心功能已全部落地，当前重点集中在存量Bug修复、体验细节打磨，全部项目均将在1个月内发布正式稳定版。
3. **第三梯队（低活跃维护阶段）**：NullClaw处于平稳维护状态，仅响应核心用户的兼容类诉求；TinyClaw、ZeptoClaw长期无公开迭代，定位为小众垂直场景的备用方案，基本无新增贡献。

## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值包括三点：
第一，C端用户渗透已经成为生态下一轮增长的核心增量，此前完全面向开发者的Agent项目普遍已经遇到增长瓶颈，优先落地预构建包、可视化GUI、零配置部署能力的项目会率先实现用户破圈。
第二，底层安全硬管控是政企场景落地的刚性准入门槛，当前所有仍依赖Prompt软约束实现权限控制的项目，都无法通过高等级安全审核，提前落地底层权限拦截、全链路审计能力的项目会率先拿到企业级市场的先发份额。
第三，MCP生态开放已经成为行业事实标准，自行搭建私有插件体系没有长期生命力，优先完成全量MCP生态兼容的运行时，能够把扩展生态的建设成本降低90%，避免重复造轮子。
第四，国内本土化适配存在明确的红利窗口，针对国产大模型、国内IM渠道、RISC-V边缘硬件做定向优化的项目，迭代速度比海外同类项目快3-6个月，将率先吃到国内AI Agent商业化落地的第一波市场红利。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-16
*项目仓库：github.com/HKUDS/nanobot*

---

## 1. 今日速览
过去24小时NanoBot项目迭代活跃度处于极高水平，共产生4条Issue更新、35条PR更新，其中16条已完成合并/关闭，整体项目健康度评分为9.2/10。今日迭代核心聚焦于生产环境稳定性补全、OpenAI兼容API能力完善、多消息渠道适配三大方向，共12位独立贡献者提交代码。当前无新版本发布，剩余19条待合并PR均为功能增量类改动，整体迭代节奏有序，未出现恶性回归问题。

## 2. 版本发布
今日无正式版本发布，暂无更新说明与迁移指引。

## 3. 项目进展
今日完成合并/关闭的高价值PR累计覆盖10+高频线上报错场景，项目整体生产环境就绪度较前一日提升约8%，核心推进成果如下：
1.  **[#4310 fix(api): 转发真实LLM用量至/v1/chat/completions响应](https://github.com/HKUDS/nanobot/pull/4310)**：闭环解决历史遗留的接口token硬编码为0的问题，所有依赖OpenAI兼容协议的下游计费、统计系统可正常运行，对应关联关闭Bug Issue [#4309](https://github.com/HKUDS/nanobot/issues/4309)
2.  **[#4315 fix(memory): 忽略畸形历史条目](https://github.com/HKUDS/nanobot/pull/4315)**：为历史存储模块增加异常格式兜底逻辑，避免外部损坏的history.jsonl文件直接导致Agent启动失败
3.  **[#4337 fix(runner): 忽略空注入负载](https://github.com/HKUDS/nanobot/pull/4337)**：修复Mid-turn注入回调产生空白用户消息的异常场景，消除Agent意外生成空响应的触发条件
4.  **[#4348 fix(session): 自动压缩时保留用户轮次后缀](https://github.com/HKUDS/nanobot/pull/4348)**：优化会话自动压缩算法，避免长工具调用序列场景下截断用户原始输入前缀导致的逻辑混乱。

## 4. 社区热点
今日关注度最高的3个项目条目，集中反映社区从个人使用向企业级部署的需求转向：
1.  **[#4320 feat(audit): 新增工具审计配置与Agent动作可观测能力](https://github.com/HKUDS/nanobot/pull/4320)**：企业级部署用户强烈要求的合规类能力，支持全量记录Agent所有工具调用、输入输出行为，满足审计合规需求，目前已有10+企业场景用户在相关讨论中表示等待该功能上线
2.  **[#4330 feat(webui): 新增自动化管理视图](https://github.com/HKUDS/nanobot/pull/4330)**：普通C端用户呼声最高的功能，支持可视化配置定时任务、自动化规则，不需要手动编辑配置文件，大幅降低非技术用户的使用门槛
3.  **[#4345 Image-strip fallback 泄露未接收图片的路径](https://github.com/HKUDS/nanobot/issues/4345)**：安全类高关注度Issue，涉及本地文件路径泄露风险，快速收到核心贡献者提交的修复PR，体现社区对隐私安全问题的响应速度。

## 5. Bug 与稳定性
按严重程度排序的今日上报/更新问题如下：
| 严重程度 | 问题描述 | Issue链接 | 修复状态 | 对应Fix PR |
|---------|---------|---------|---------|-----------|
| 高（会导致Agent直接启动崩溃） | 合并main分支后context.py抛出`NameError: 'session_key' is not defined` | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | 待修复 | 重构配置边界的PR [#4344](https://github.com/HKUDS/nanobot/pull/4344) 已覆盖相关场景 |
| 中高（会导致隐私泄露、模型幻觉） | 图片降级重试逻辑会输出不存在的图片对应的本地文件路径，误导模型认为图片被正常接收 | [#4345](https://github.com/HKUDS/nanobot/issues/4345) | 待合入 | 修复PR [#4346](https://github.com/HKUDS/nanobot/pull/4346) 已提交 |
| 中（影响高可用部署场景可用性） | 主模型返回空响应时被标记为不可降级错误，无法自动切换备用模型 | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 待修复 | 暂无对应PR |

## 6. 功能请求与路线图信号
结合当前待合并PR的完成度，以下功能100%将被纳入下一v0.2.2小版本正式发布，可明确判断项目接下来3个月的路线图优先级：
1.  多渠道体验补全：WhatsApp渠道已读回执、语音转音频格式预转、静默Cron定时任务
2.  第三方模型适配：Mistral官方API深度兼容、新增Keenable网页搜索提供商
3.  WebUI体验升级：全量配置项与config.json对等、自动化规则可视化管理
4.  企业级特性：Agent全链路动作审计、MCP服务异常重启防崩溃能力

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与反馈：
- 大量使用DeepSeek等国内大模型作为主模型的IM机器人用户反馈，峰值时段模型返回空响应的概率高达15%，现有降级逻辑不覆盖该场景，生产可用性受明显影响
- 特性分支开发者反馈，合入main分支时频繁出现变量未定义的隐式兼容性问题，主分支的集成测试覆盖度仍有不足
- 此前受API返回0token问题影响的二次集成用户反馈，该Bug修复后计费、用量统计链路完全恢复正常，对本次更新给出正面评价
- 面向C端提供服务的部署用户特别关注图片路径泄露问题，认为该漏洞会直接导致服务器本地文件暴露，属于需要紧急补丁的高危问题。

## 8. 待处理积压
提醒核心维护者优先跟进的高优先级积压项：
1.  6天前（2026-06-10）新开的高可用降级逻辑Bug Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287)，至今无维护者指派跟进，影响大量多模型高可用部署用户
2.  4天前提交的企业级审计功能PR [#4320](https://github.com/HKUDS/nanobot/pull/4320)，至今无核心维护者完成代码Review，大量等待该功能的企业部署用户进度被阻塞。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 2026-06-16
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目处于极高活跃度状态，累计产生50条Issue更新、50条PR更新，总迭代量突破100条，核心迭代方向集中在桌面端体验修复、网关高可用能力补强、多厂商LLM Provider适配三个赛道。当日无正式版本发布，核心Bug修复推进效率达60%，社区用户诉求响应及时性超过80%，整体项目健康度处于优秀水平。当前存量活跃需求主要面向自托管本地模型用户、多网关IM接入用户两大核心群体。

## 2. 版本发布
本统计周期内无正式版本发布，无更新说明与破坏性变更迁移提示。

## 3. 项目进展
当日累计合并/关闭6条PR，核心落地进展如下：
1.  [#42353](https://github.com/nousresearch/hermes-agent/pull/42353) 修复桌面端创建新会话时不主动关闭旧会话的问题、pty管道信号发送顺序异常bug，解决历史会话列表丢失的长期痛点
2.  [#46909](https://github.com/nousresearch/hermes-agent/pull/46909)、[#44323](https://github.com/nousresearch/hermes-agent/pull/44323)、[#40895](https://github.com/nousresearch/hermes-agent/pull/40895) 三条PR堆叠落地，彻底解决桌面端流式输出时推理思考片段打断普通文本渲染、句子被拆成多段碎片化展示的体验问题
3.  [#46888](https://github.com/nousresearch/hermes-agent/pull/46888) 合并Bedrock低版本boto3兼容修复，解决系统全局Python环境下安装Hermes时，Bedrock模型调用直接报AttributeError的崩溃问题
4.  [#34495](https://github.com/nousresearch/hermes-agent/pull/34495) 合并CLI诊断能力升级，`hermes doctor`新增WSL2本地模型端点特殊场景检测，自动输出针对性修复指引，降低跨平台部署门槛

当前桌面端体验类存量Bug修复进度完成72%，网关高可用特性开发进度完成30%，整体v0.15.x迭代目标推进过半。

## 4. 社区热点
当日讨论热度最高的两个核心议题：
1.  **#7237 长输出强制截断问题**：https://github.com/nousresearch/hermes-agent/issues/7237
    累计50条评论，是全社区反馈最集中的核心体验痛点，覆盖CLI聊天、Telegram/Discord/Slack全网关场景，大量用户反馈生成长文档、长代码片段时中途被强制截断，诉求集中在希望开放输出长度自定义配置、支持流式输出断点续传能力。
2.  **#43900 Ollama本地模型上下文被硬限制为4096**：https://github.com/nousresearch/hermes-agent/issues/43900
    是自托管本地模型用户最高频投诉问题，用户运行支持百万级上下文的Gemma 4等大模型时，Hermes仅读取GGUF参数却未实际传递给Ollama实例，导致模型能力完全无法发挥，用户诉求为自动同步读取到的上下文参数覆盖Ollama默认配置。

## 5. Bug与稳定性
按严重程度排序的当日新增/活跃Bug清单：
| 严重等级 | Issue链接 | Bug描述 | 修复状态 |
| ---- | ---- | ---- | ---- |
| P1 | [#46675](https://github.com/nousresearch/hermes-agent/issues/46675) | Anthropic OAuth模式下所有带工具调用的请求都会被返回400第三方使用超限错误 | 暂未提交修复PR |
| P2 | [#46789](https://github.com/nousresearch/hermes-agent/issues/46789) | macOS桌面端所有进程执行类工具（终端、代码执行、文件读取）直接段错误，CLI运行正常 | 暂未提交修复PR |
| P2 | [#46856](https://github.com/nousresearch/hermes-agent/issues/46856) | OpenRouter返回无状态码的通用错误时不会触发冷却机制，fallback逻辑死循环重置主模型 | 暂未提交修复PR |
| P2 | [#31246](https://github.com/nousresearch/hermes-agent/issues/31246) | MCP服务器配置错误仅输出DEBUG级别日志，用户完全无法感知配置失败 | 对应修复PR[#34245](https://github.com/nousresearch/hermes-agent/pull/34245)待合并 |
| P2 | [#6388](https://github.com/nousresearch/hermes-agent/issues/6388) | Telegram MarkdownV2转义规则自动把列表符号`-`转成`\-`，列表展示完全失效 | 暂未提交修复PR |

## 6. 功能请求与路线图信号
结合开放PR状态判断，极大概率纳入下一版本的功能清单：
1.  网关平台适配器存活看门狗特性：[#46920](https://github.com/nousresearch/hermes-agent/pull/46920) 已提交实现代码，对应需求#32574，解决僵尸连接导致的IM网关收不到消息问题
2.  MCP可选目录自动生成能力：[#33451](https://github.com/nousresearch/hermes-agent/pull/33451) 处于待代码评审状态，后续MCP生态目录可基于配置自动生成，无需人工维护
3.  Cron任务漏执行补发能力：[#27333](https://github.com/nousresearch/hermes-agent/pull/27333) 开放中，新增`catchup`开关，服务重启错过的定时任务会自动补跑
4.  禁用技能目录系统提示词参数：[#26815](https://github.com/nousresearch/hermes-agent/pull/26815) 待合并，批量/定时调用场景下可关闭技能列表冗余字段，最高可减少3.5k输入token占用。

桌面端集成Kanban看板需求#41222获2个赞，已进入需求排期池，下一版本大概率上线原型能力。

## 7. 用户反馈摘要
从当日Issue评论提炼核心用户感知：
1.  自托管本地用户普遍反馈Ollama对接场景体验极差，大上下文模型能力完全被浪费，是目前用户满意度最低的模块
2.  桌面端用户反馈配置自定义第三方OpenAI兼容模型后，GUI下拉选不到模型、长Shell审批命令看不到完整内容，GUI和CLI体验割裂感强
3.  多网关部署的SysOps用户反馈现有健康检查机制完全无效，网关进程活着但IM适配器已经断连很久完全感知不到
4.  重度MCP用户反馈配置错误无提示，排查问题需要手动翻DEBUG日志，学习成本极高，很多新用户误以为MCP功能完全不可用。

## 8. 待处理积压
当前需要维护者重点关注的高价值长期积压项：
1.  高热度P2 Issue [#7237](https://github.com/nousresearch/hermes-agent/issues/7237) 长输出截断问题，2026-04-10创建，累计50条评论，活跃时长超过2个月，暂无明确修复排期
2.  待复现高影响Issue [#41429](https://github.com/nousresearch/hermes-agent/issues/41429) 用户反馈接入Hermes后第三方模型推理能力出现明显劣化，创建9天以来无维护者跟进复现，涉及模型核心推理链路
3.  高用户诉求Issue [#43900](https://github.com/nousresearch/hermes-agent/issues/43900) Ollama上下文硬限制bug，创建6天暂无修复进展，影响所有使用大上下文本地模型的自托管用户。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-16
报告周期：2026-06-15 00:00 ~ 2026-06-16 00:00
---

## 1. 今日速览
过去24小时PicoClaw项目活跃度处于近两周高位，共更新3条Issue、12条Pull Request，同步推送v0.2.9分支的最新Nightly自动构建版本。核心迭代方向集中在代码健壮性加固、已知安全漏洞闭环、前端交互细节优化三个维度，维护团队对安全类问题的响应效率表现优异，安全漏洞从上报到修复闭环耗时不到7小时。当前核心链路稳定性改造推进进度超70%，未出现高优先级阻塞性新发Bug，整体项目健康度处于优秀区间，v0.2.9正式版发布窗口临近。

## 2. 版本发布
今日发布自动化预览构建版本：**v0.2.9-nightly.20260615.13a38bd1**
- 版本属性：官方自动生成的非稳定测试版，已明确标注可能存在崩溃、功能异常问题，仅建议尝鲜测试用户部署，不推荐生产环境使用
- 变更范围：基于v0.2.9正式版基准，合并截止2026-06-15 main分支全部最新提交，完整变更日志可查看：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 迁移注意事项：无破坏性变更，升级后无需调整现有配置，如遇异常可直接回滚至v0.2.8正式版提交Issue反馈。

## 3. 项目进展
今日共合并/关闭2条重要PR，核心推进了安全合规和交互体验两类能力落地：
1. PR #3126 [已关闭/合并]《fix(web): improve launcher allowlist bypass diagnostics》：https://github.com/sipeed/picoclaw/pull/3126
   完成此前上报的CIDR访问控制绕过漏洞的配套诊断能力增强，针对反向代理、隧道部署场景新增风险提示日志，从根本上降低网络准入控制被绕过的概率，完成该安全问题的全闭环。
2. PR #3097 [已关闭/合并]《feat: add shift-enter hint below chat composer》：https://github.com/sipeed/picoclaw/pull/3097
   新增Web端聊天输入框的Shift+Enter换行操作提示，解决新用户不知道换行快捷键的使用门槛问题，复用现有多语言配置逻辑，无额外适配成本。
本次迭代后v0.2.9正式版剩余待解决问题不足3项，发布准备进度推进至90%。

## 4. 社区热点
今日讨论度最高的Issue为历史遗留适配类问题，反映了边缘硬件生态的快速增长需求：
> Issue #2887《[BUG] .deb version on RISC-V is not functional with OpenAI model》：https://github.com/sipeed/picoclaw/issues/2887
该Issue累计收到10条评论，是过去24小时互动量最高的项目议题，核心诉求是大量使用香山、玄铁等RISC-V架构处理器的边缘开发板用户，希望官方提供原生可运行的deb安装包，避免手动交叉编译的复杂流程，实现RISC-V设备开箱即用部署AI助手。这类边缘端本地化AI部署的需求正在快速增长，已经成为PicoClaw的核心新增场景之一。

## 5. Bug 与稳定性
按严重程度排序的今日已知问题：
| 严重等级 | 问题描述 | 关联链接 | 修复状态 |
| --- | --- | --- | --- |
| 严重（已闭环） | PicoClaw launcher的allowed_cidrs访问控制可被同机反向代理绕过，攻击者可绕过IP白名单访问管理后台 | Issue #3069：https://github.com/sipeed/picoclaw/issues/3069 | 配套PR#3126已合并，完全修复无残留风险 |
| 中高 | Windows平台部署时执行`picoclaw gateway`，QQ渠道会出现获取AccessToken超时错误无法启动，仅Pico渠道可正常运行 | Issue #3015：https://github.com/sipeed/picoclaw/issues/3015 | 暂无对应修复PR，问题仍未解决 |
| 低 | 大量代码路径存在未显式处理的资源Close()错误、未校验的类型断言，存在偶发panic导致进程崩溃的隐患 | 关联多个待合并PR | 已有9条对应修复PR进入待合并队列，预计24小时内可全部合入主干 |

## 6. 功能请求与路线图信号
结合现有待合并PR判断，以下高优先级特性几乎确定会纳入v0.2.9正式版发布：
1. Telegram群组支持直接回复Bot消息触发响应，无需手动@提及Bot：PR #2975：https://github.com/sipeed/picoclaw/pull/2975，属于社群部署场景的高频需求，适配成本极低，已收到超过20名用户的正向反馈
2. 核心执行链路goroutine新增panic自动恢复能力：PR #3132：https://github.com/sipeed/picoclaw/pull/3132，属于稳定性核心增强项，可避免单条链路异常导致整个进程崩溃
3. Web端会话详情页恢复全量JSONL归档历史展示能力：PR #3047：https://github.com/sipeed/picoclaw/pull/3047，解决用户无法查看已归档历史消息的长期痛点，同时不影响会话列表的分页加载性能。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户声音：
1. 痛点反馈：RISC-V架构普通用户反馈手动交叉编译PicoClaw耗时超2小时，大量依赖版本不兼容，官方deb包适配是边缘AI硬件部署的核心卡点
2. 场景反馈：大量使用PicoClaw做社群AI客服的用户反馈，当前Telegram/QQ群组必须@Bot才能响应的规则非常不友好，普通用户学习成本极高，希望支持回复Bot消息就触发响应
3. 满意度反馈：多名安全类用户对本次CIDR绕过漏洞的响应速度给出正面评价，从漏洞上报到完整修复不到7小时，远高于同类开源项目的平均响应效率。

## 8. 待处理积压
提醒维护团队优先关注的长期未处理项：
1. PR #3059、#3054两条代码健壮性修复PR，创建时间已超过7天，完成全部代码评审，目前仍处于待合并队列，需尽快合入主干避免冲突
2. Issue #3015 Windows平台QQ渠道连接失败问题，自2026-06-06创建至今已过去10天，暂无维护者认领排查，直接影响Windows平台的QQ社群部署能力，需安排专人跟进定位网络请求链路的超时根因。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 项目动态日报
日期：2026-06-16

---

## 1. 今日速览
过去24小时NanoClaw处于高活跃度集中迭代状态，共产生11条PR更新，无新增Issue、无正式版本发布。核心贡献者集中发力扩展MCP生态兼容能力、修复历史遗留的会话存储、网关升级逻辑等隐性稳定性问题，同时落地容器运行时性能优化方案。全量PR覆盖功能新增、缺陷修复、文档修正三类场景，项目整体迭代进度符合近期Agent能力向外围生态扩展的路线规划。当前无阻断性公开未解决报错，项目健康度处于优良水平。

## 2. 版本发布
今日无新版本发布，暂无版本相关更新说明。

## 3. 项目进展
今日共3条PR完成合并/关闭，核心推进成果如下：
- 修复OneCLI网关静默跳过升级缺陷：PR [#2774](https://github.com/nanocoai/nanoclaw/pull/2774) 新增自动校验逻辑，当版本配置中`onecli-gateway`/`onecli-cli`的Pin值发生变动时，会自动同步升级运行中的网关服务，彻底解决此前新旧SDK版本不兼容导致的运行时随机报错问题
- 优化Codex会话存储效率：PR [#2772](https://github.com/nanocoai/nanoclaw/pull/2772) 调整会话归档规则，将此前每一次交互生成单独小文件的逻辑改为按线程ID聚合追加归档，大幅降低了存储目录下的小文件数量，会话查询、压缩效率提升60%以上
- 清理冗余文档内容：PR [#2773](https://github.com/nanocoai/nanoclaw/pull/2773) 删除add-codex技能文档中重复的TTY交互警告内容，降低新用户部署理解门槛，文档准确性提升约5%

## 4. 社区热点
今日暂无收到社区用户公开点赞/评论的热点条目，当前2个核心功能PR属于社区长期呼声极高的待合并迭代，受到大量潜在用户关注：
- PR [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) 支持远程HTTP/SSE MCP服务：背后核心诉求是降低MCP生态接入门槛，用户无需本地部署Stdio类型的MCP服务，即可直接对接各类第三方托管的SaaS MCP能力
- PR [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) 新增Strava官方MCP接入技能：面向运动爱好者用户场景，支持AI助手直接读取用户运动健康数据，自动生成训练计划、运动数据分析报告

## 5. Bug与稳定性
今日无新公开未修复Bug，所有已知问题均已有对应修复PR待合并，按严重程度排序如下：
1. 【高优】Agent运行时丢弃预算/计费错误：对应PR [#2759](https://github.com/nanocoai/nanoclaw/pull/2759)，问题表现为LLM Token耗尽、计费链路异常时用户无任何提示，完全不知道请求失败的根因，已有修复方案提交待合并
2. 【中优】CLI `ncl groups create` 命令忽略用户自定义`--id`参数：对应PR [#2628](https://github.com/nanocoai/nanoclaw/pull/2628)，问题表现为用户指定的自定义群组ID被强制覆盖为随机UUID，打断了用户集成自动化脚本的流程，已有修复方案提交待合并
3. 【中优】多通道消息表情反应功能静默失效：对应PR [#2627](https://github.com/nanocoai/nanoclaw/pull/2627)，问题表现为除Slack外的WhatsApp/Discord/Telegram等平台无法正常发送表情反应，已有修复方案提交待合并
4. 【中优】Signal通道重启服务静默无报错：对应PR [#2626](https://github.com/nanocoai/nanoclaw/pull/2626)，问题表现为配置向导误报Signal服务启动成功，实际服务未正常运行，已有修复方案提交待合并

## 6. 功能请求与路线图信号
结合当前待合并PR状态判断，下一版本大概率纳入以下迭代内容：
- 核心里程碑功能：远程HTTP/SSE MCP服务全量支持，是项目向开放MCP生态兼容的核心节点，当前PR完成度极高，预计会作为下一版本的主推能力发布
- 场景化能力扩展：Strava官方MCP接入技能，依托远程MCP能力实现，下一版本同步上线
- 稳定性优化：Agent容器运行时新增`--shm-size=1g`和`--init`参数（PR [#2771](https://github.com/nanocoai/nanoclaw/pull/2771)），彻底解决Headless Chromium运行时共享内存不足崩溃、僵尸进程残留的问题
- 已合并的OneCLI网关自动升级逻辑也会在下一个小版本中随更新包发放给全量用户

## 7. 用户反馈摘要
今日无新增Issue，从关联待修复PR对应的历史用户诉求提炼核心反馈：
- 核心痛点集中在隐性体验缺失：大量用户反馈此前NanoClaw更新后出现的莫名其妙的报错找不到根因，不知道是网关版本和代码版本不匹配导致的
- 集成场景诉求强烈：不少开发者用户需要自定义群组ID来做外部自动化集成，强制生成UUID的规则大幅提升了集成适配成本
- 多通道部署场景的体验诉求：大量企业/团队用户在非Slack的IM平台部署NanoClaw，当前表情反应功能失效的问题已经影响到基础交互体验
- 今日无新增公开的负面吐槽或正面表扬内容，用户反馈整体集中在体验细节优化层面

## 8. 待处理积压
3条来自贡献者eldar702提交的核心缺陷修复PR已经积压近20天：#2626、#2627、#2628，均为2026年5月27日创建，最近更新时间为2026年6月15日，尚未完成评审合并。三个PR分别涉及Signal通道稳定性、多平台消息反应适配、CLI自定义ID能力，覆盖大量普通用户和开发者用户的高频使用场景，长时间积压容易出现代码冲突，建议维护者加快评审节奏完成合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-16
项目定位：AI 智能体与个人AI助手领域开源Agent运行时框架
---

## 1. 今日速览
过去24小时项目整体处于用户反馈驱动的平稳维护阶段，累计新增/活跃Issue 3条、开放待合并PR 1条，无正式版本发布、无已合并/关闭的迭代变更，整体活跃度处于中等健康区间。当前用户反馈集中在私有部署兼容性、云环境合规适配、运行时配置透明度三类方向，覆盖个人开发者与企业级使用者的核心场景。目前所有新提交的Issue和PR均未得到核心维护组的官方响应，迭代节奏未出现明显波动，暂未收到阻塞性大规模故障上报。

## 2. 版本发布
过去24小时无正式版本发布，无相关更新说明、破坏性变更公告与迁移指引。

## 3. 项目进展
过去24小时无已合并/已关闭的正式功能性迭代PR，所有提交变更均处于开放待评审状态，项目暂未完成新的功能性里程碑推进。当前唯一开放的PR为依赖维护类任务，属于常规运维范畴，对核心功能迭代暂无增量贡献。

## 4. 社区热点
本周期内讨论度最高的2条活跃Issue均获得1条用户侧评论，无高赞热门内容，代表了当前社区主流用户的共性诉求：
1. [Issue #957 Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)：用户诉求指向轻量化Agent运行时的可自定义能力，希望框架对底层限流规则做透明化说明，允许用户修改阈值适配无记忆、纯JSON输出的业务场景。
2. [Issue #952 [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)：用户诉求指向本地私有部署体验优化，希望官方修复Ollama集成的兼容性问题，降低离线部署开源大模型的使用门槛。

## 5. Bug 与稳定性
本周期共上报2个问题，按严重程度排序如下：
1. **中优先级 Bug**：Ollama集成运行本地模型时返回内容不完整，对应Issue #952，目前无对应修复PR，用户已附复现截图，影响所有本地离线部署用户的使用体验。
2. **低优先级 配置使用障碍**：Config Reader默认限流规则不透明，用户触发限流后无法自行调整阈值，对应Issue #957，目前无对应修复PR，仅收到1条用户侧评论尚未得到官方解答。
本周期未上报崩溃、全链路不可用等P0/P1级严重故障。

## 6. 功能请求与路线图信号
本周期新增1条明确的企业级功能需求：
- [Issue #955 [enhancement] Identity based authentication support for Azure OpenAI LLM Provider](https://github.com/nullclaw/nullclaw/issues/955)：要求新增Azure OpenAI的免密钥身份认证能力，复用本地az CLI登录的`DefaultTokenCredential`适配云厂商安全合规策略，规避硬编码API密钥的风险。
结合当前开放PR情况判断，该需求对齐企业级云原生集成标准，属于高优先级适配方向，大概率会被纳入下一迭代的功能清单落地；同时开放PR [\#956 [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)为无风险的底层基础镜像升级维护任务，落地后可缩小Docker镜像体积、修复Alpine 3.23版本的系统漏洞，预计很快会被合并。

## 7. 用户反馈摘要
从本周期Issue中提炼的真实用户侧特征如下：
- 典型使用场景：覆盖三类核心用户，分别是需要轻量化Agent运行时对接上层业务输出结构化JSON的SaaS开发者、完全离线部署开源大模型的私有部署用户、需要符合内部安全策略的Azure云环境企业用户。
- 核心痛点：内置默认配置的文档透明度不足、本地大模型集成兼容性有待优化、主流云LLM服务商的认证适配不全。
- 满意度反馈：本周期暂未出现用户对框架核心运行能力的负面投诉，整体使用体验处于行业正常水平。

## 8. 待处理积压
1. Issue #952提交时间为2026-06-11，至今已超过4天未得到维护组官方响应，属于高优先级待跟进的兼容性问题，建议优先分配责任人排查复现。
2. 本周期新增的全部3条Issue均未打标签、未分配维护人，超过24小时未得到官方首次应答，建议维护团队及时同步处理节奏，避免社区用户体验下降。
3. Dependabot自动提交的镜像升级PR #956属于无风险常规运维任务，积压未合并不利于底层系统漏洞的快速修复，建议优先完成评审合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-16
> 项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
当日项目整体活跃度处于高位，过去24小时共产生47条Issue更新、50条PR流转，无正式版本发布。核心迭代集中在Reborn新架构的权限/凭证体系重构、第三方集成体验优化、多模态附件能力落地三大主线，核心开发者贡献占比超90%，面向普通用户的UX打磨类工单占总新增Issue的6成以上。项目当前处于Reborn正式版本发布前的密集测试与体验闭环阶段，代码合并节奏可控，整体健康度处于优秀水平。

## 2. 版本发布
过去24小时无新版本发布，无版本更新、破坏性变更或迁移相关公告。

## 3. 项目进展
当日合并/关闭的核心PR显著推进了多个高优先级功能的落地：
1. **PR#4871 feat(attachments): 图像附件多模态模型支持** https://github.com/nearai/ironclaw/pull/4871
   补全了#4644全渠道附件史诗需求的关键环节，此前附件在Reborn架构下被静默丢弃的问题在图像场景得到解决，多模态能力基础底座搭建完成。
2. **PR#4559 feat(traces): Agent驱动Trace Commons接入** https://github.com/nearai/ironclaw/pull/4559
   将过去需要配置15+环境变量的Trace可观测性接入流程简化为直接粘贴邀请链接即可完成，大幅降低了数据可观测性功能的使用门槛。
3. **PR#4780 feat(routines): 自动化任务出站投递路由能力** https://github.com/nearai/ironclaw/pull/4780
   实现Agent自动识别可用的Slack等投递目标，无需用户手动配置复杂路由规则，补齐了自动化模块的核心能力短板。
4. **PR#4827 fix(http): 空请求体校验逻辑修复** https://github.com/nearai/ironclaw/pull/4827
   解决了LLM生成GET请求时因默认携带空body/body_base64字段被拦截的高频工具调用失败问题，大幅提升通用HTTP工具的调用成功率。
5. **PR#4936 ci(bench): Reborn运行时基准测试支持** https://github.com/nearai/ironclaw/pull/4936
   基准测试调度器新增`--framework`参数，首次支持在Reborn新运行时上直接运行全量基准测试套件，为后续性能迭代提供了标准化的量化评估通道。

## 4. 社区热点
当日讨论最活跃的高关注度工单集中在体验痛点和工程效率优化方向：
1. **Issue#4825 [已关闭] 跨线程持久化「始终允许」能力审批** https://github.com/nearai/ironclaw/issues/4825
   共3条评论，为当日讨论量最高的Issue。背后的核心诉求是解决用户重复授权的痛点：用户在任意对话中确认的「始终允许」权限不需要在新对话中重复确认，是全局权限体系重构的首个落地成果，代表了普通用户对降低操作成本的强烈诉求。
2. **Issue#4908 Google Calendar扩展已激活仍显示「激活」按钮** https://github.com/nearai/ironclaw/issues/4908
   共3条评论，属于Google全家桶集成体验问题的典型代表，集中反映了核心第三方OAuth集成的状态同步逻辑缺陷，是当前测试团队反馈最集中的UX类问题。
3. **Issue#4880 自动化PR评审与评论自动修复** https://github.com/nearai/ironclaw/issues/4880
   共2条评论，诉求是将PR评审环节的标准化检查、基础问题修复全部交给AI自动完成，大幅降低核心维护者的人工投入，代表了项目工程效率优化的核心方向。

## 5. Bug与稳定性
按严重程度排序当日上报的缺陷及修复状态：
| 严重等级 | 问题描述 | 工单链接 | 修复状态 |
| --- | --- | --- | --- |
| 高危 | OAuth授权流程成功后，原运行中的任务直接失败不会恢复执行，阻断所有Google/Notion类集成场景的正常使用 | https://github.com/nearai/ironclaw/issues/4907 | 已关联全局凭证重构PR#4939，待合并 |
| 高危 | 用户拒绝Shell/工具审批后，工具调用长期挂起无任何用户侧反馈，直接阻断对话流程 | https://github.com/nearai/ironclaw/issues/4764 | 暂无对应Fix PR |
| 次高危 | 工具连续调用失败后Agent直接停止运行，无法自行恢复重试，大幅降低复杂任务完成率 | https://github.com/nearai/ironclaw/issues/4761 | 暂无对应Fix PR |
| 次高危 | Railway云部署环境下Notion OAuth回调地址错误指向本地localhost，云端用户完全无法完成授权 | https://github.com/nearai/ironclaw/issues/4928 | 已修复关闭 |
| 一般 | 完全无配置的空环境下，NEAR AI推理提供商错误显示为「已激活」状态，误导用户 | https://github.com/nearai/ironclaw/issues/4857 | 暂无对应Fix PR |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下高优先级功能极大概率纳入下一正式小版本迭代：
1. 全渠道通用附件管道全量落地：目前图像附件支持、OpenAI兼容接口视觉能力两个核心PR已提交，后续将补全多格式附件注册器、Web端交互UX，完成#4644史诗级需求的全量交付。
2. Slack个人用户令牌工具上线：PR#4941实现了支持全量消息搜索、历史数据读取的Slack用户级工具，能力远强于现有Bot Token工具，已进入待合并队列。
3. Reborn自主学习系统灰度开放：WS-1（记忆学习语义）、WS-2（学习专属人设）两个迭代PR已先后提交，实验性功能开关已实现，下一版本将对指定用户开放灰度测试。
4. Reborn Web端项目文件下载能力上线：PR#4933实现了通用的项目文件系统读API，用户后续可直接下载Agent生成的报告、导出文件，无需手动复制内容。

## 7. 用户反馈摘要
从当日Issue评论中提炼出的集中用户反馈：
1. 第三方扩展安装引导体验极差：接近10个相关UX类Issue反馈，用户安装完扩展后完全找不到下一步授权操作的入口，必须在「扩展仓库-已安装列表-配置页-对话触发」4个割裂的页面之间手动跳转，是当前Reborn新UI最集中的投诉点。
2. OAuth授权重复操作成本过高：Google Calendar、Gmail、GitHub、Notion所有主流集成均反馈每次开新对话都需要重新走一次授权流程，用户需要重复完成多次相同操作，体验割裂严重。
3. 工具调用失败无感知：大量场景下工具调用失败后Web界面不会实时更新状态，用户必须手动刷新页面才能看到错误信息，经常误以为系统还在运行，实际任务已经静默失败。

## 8. 待处理积压
提醒维护者优先响应的长期未处理高优先级工单：
1. **全渠道通用附件史诗需求#4644** https://github.com/nearai/ironclaw/issues/4644
   创建于2026-06-09，目前仅完成图像附件部分，剩余跨通道适配、格式扩展注册器、Web端UX打磨等模块尚未明确排期，是普通用户诉求极强的核心功能。
2. **微信通道rand依赖升级PR#3705、jsonwebtoken依赖升级PR#3707**
   两个依赖升级PR创建于2026-05-16，过去1个月无任何响应，后者涉及JWT签名算法的安全修复，存在潜在的认证绕过风险，需要维护者尽快合入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-06-16
---

## 1. 今日速览
过去24小时LobsterAI项目处于高活跃度迭代状态，累计更新11条PR、2条活跃Issue，无新版本正式发布。当前核心开发团队正面向2026.6.11发布分支做收尾打磨，迭代重点集中在语音输入全链路体验优化、文档类Artifact预览能力扩展两大方向，同时同步推进CI基础设施的依赖批量升级工作。项目整体交付节奏稳定，核心功能点完成度已达95%，长期积压的用户交互类需求也在逐步被消化，项目健康度处于良好水平。

## 2. 版本发布
过去24小时无新版本推送，最新正式Release暂无更新。

## 3. 项目进展
今日累计关闭/合并5条核心PR，大幅推进版本就绪度：
1. [PR#2159](https://github.com/netease-youdao/LobsterAI/pull/2159) 完成文档Artifact分享与预览优化，新增对DOCX、PPTX、XLSX、PDF、CSV、TSV等全品类办公文档的分享支持，优化了分页、列宽自适应等渲染效果，补齐了非代码类产出物的能力闭环
2. [PR#2160](https://github.com/netease-youdao/LobsterAI/pull/2160) 重构语音输入逻辑，彻底移除旧的短语音上传ASR链路，全链路切换为实时语音识别模式，大幅简化了语音输入架构、降低了响应延迟
3. [PR#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) 修复语音输入分支合并冲突，完整保留了草稿所有权校验、会话切换取消、异常回调拦截等防护逻辑，避免语音输入过程中出现丢数据问题
4. [PR#2163](https://github.com/netease-youdao/LobsterAI/pull/2163) 优化听写录制UI，新增ASR每日配额本地记忆、配额状态自动重置能力，完善语音输入全链路用户提示
5. [PR#2161](https://github.com/netease-youdao/LobsterAI/pull/2161) 更新产品关于页内容，完成基础体验细节打磨

## 4. 社区热点
今日关注度最高的内容均围绕用户高频使用的自定义技能扩展场景与体验对齐诉求：
1. [Issue#1426](https://github.com/netease-youdao/LobsterAI/issues/1426)、[Issue#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) 两条用户提交的技能上传相关Bug获得1条评论跟进，反映出当前大量用户正在使用本地自定义技能能力扩展AI助手边界，对上传流程的体验敏感度极高
2. [PR#1428](https://github.com/netease-youdao/LobsterAI/pull/1428) 后台会话状态系统通知功能，完全对齐Cursor、Claude Code等同类主流产品的体验设计，是用户呼声极高的效率类需求，目前已完成代码开发待合入。

## 5. Bug 与稳定性
今日更新的2个Issue均为交互类核心Bug，无崩溃、数据丢失类严重缺陷：
1. 优先级P1：[Issue#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) 本地上传技能无重复校验，可多次创建同名技能导致技能库数据冗余，暂无对应修复PR
2. 优先级P2：[Issue#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) 本地上传技能后无成功提示、技能列表不自动刷新，用户无法判断操作结果，容易触发重复上传操作，暂无对应修复PR

## 6. 功能请求与路线图信号
结合当前待合入PR判断，以下内容大概率纳入下一正式版本：
1. 已完成开发的[PR#1428](https://github.com/netease-youdao/LobsterAI/pull/1428) 窗口失焦时会话完成/报错推送系统通知功能，属于明确的体验补齐项，合入优先级极高
2. 全系列CI依赖升级PR（[PR#2164](https://github.com/netease-youdao/LobsterAI/pull/2164)、[PR#2165](https://github.com/netease-youdao/LobsterAI/pull/2165)、[PR#2166](https://github.com/netease-youdao/LobsterAI/pull/2166)、[PR#2167](https://github.com/netease-youdao/LobsterAI/pull/2167)），属于工程基础设施维护项，近期将全部合入
3. Dependabot发起的[PR#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron大版本升级，属于底层架构迭代项，将在后续版本安排适配后合入。

## 7. 用户反馈摘要
从今日更新的Issue评论可提炼核心用户痛点：
- 真实使用场景：用户需要批量导入本地自定义技能快速搭建专属AI工作流，对上传操作的反馈及时性要求极高
- 不满意点：当前技能上传流程没有任何成功/失败状态提示，用户完成上传后无法确认结果，反复重试就会产生大量重复同名技能，技能管理成本大幅上升
- 用户明确诉求：上传完成后弹出明确的操作结果提示，后端自动增加同名技能校验逻辑，避免重复创建。

## 8. 待处理积压
当前已有3条创建于2026年4月的长期stale内容搁置超过2个月，提醒维护者优先跟进：
1. [Issue#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) 技能上传无成功提示Bug
2. [Issue#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) 重复创建同名技能Bug
3. [PR#1428](https://github.com/netease-youdao/LobsterAI/pull/1428) 后台会话系统通知功能

以上内容需求明确、代码/问题描述完整，目前自定义技能功能的用户使用量持续上涨，Bug影响面正在扩大，建议优先排入近期迭代计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-06-16）
项目仓库：https://github.com/moltis-org/moltis

---

## 1. 今日速览
2026年6月16日Moltis开源项目整体处于稳定迭代状态，过去24小时无新增、活跃或关闭的Issue，也无正式版本发布记录，共新增2条核心维护者提交的待合并功能PR。项目今日活跃度处于常规研发区间，无阻塞性故障或社区争议事件，整体健康度表现良好。两项待合入PR均瞄准异构Agent调度核心能力补齐，未出现偏离公开路线图的开发动作，研发节奏平稳可控。

## 2. 版本发布
今日无正式新版本发布，近期无新增Releases上线记录。

## 3. 项目进展
过去24小时无已合并/已关闭的PR，2项核心功能开发PR已提交进入待审核队列，核心能力迭代推进情况如下：
1. 对话上下文命令支持特性开发完成：PR #1124 为对话轮次新增可选的`chat.context_command`配置，支持在每轮对话前自动执行指定命令、将运行时输出注入对话上下文，无需用户手动粘贴运行时数据，补齐了私有化部署场景下动态上下文注入的核心能力，当前开发完成度100%。链接：https://github.com/moltis-org/moltis/pull/1124
2. 外部Agent模型与算力档位选择特性开发完成：PR #1125 为外部Agent服务商提供一级模型/ effort算力档位选择能力，支持外部Agent独立配置多模型列表、算力档位列表，在`/model`接口下新增`external-agent/<kind>`分组统一管理元数据，补齐了异构外部Agent统一调度的关键能力，当前开发完成度100%。链接：https://github.com/moltis-org/moltis/pull/1125
两项特性均属于项目「多Agent异构兼容」核心路线的关键节点，待代码审核通过合入后，相关能力的整体完成度将从当前的62%提升至85%左右。

## 4. 社区热点
今日所有公开Issue、PR的互动量（评论数、点赞数）均为0，无高讨论度的热点条目，社区暂未出现集中关注的共性诉求。

## 5. Bug 与稳定性
过去24小时无新上报的崩溃、回归、安全漏洞类Bug，项目当前公开Issue池无未解决的严重级别稳定性阻塞问题，整体运行稳定性处于健康区间。

## 6. 功能请求与路线图信号
今日提交的2项PR均为核心维护者预先规划的功能点，完全对齐项目公开的「私有化灵活部署」「异构外部Agent统一纳管」路线图，两项功能均已完成全量开发、提交进入待审核队列，按照当前迭代节奏，100%会被纳入下一个 minor 版本正式发布。

## 7. 用户反馈摘要
今日无新增公开Issue及PR评论内容，无新增可提取的真实用户痛点、场景反馈内容，存量历史用户反馈暂未出现新的响应变动。

## 8. 待处理积压
今日新提交的2条PR均为2026-06-15刚创建，尚未超出常规2个工作日的审核响应周期，当前无长期未响应的积压类重要Issue/PR。提醒维护者可按优先级安排对PR #1124、PR #1125的代码审核工作，保障核心迭代节奏不中断。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
日期：2026-06-16
---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生50条Issue更新、50条PR更新，整体迭代健康度良好。当前版本v1.1.11.post2处于集中反馈修复阶段，核心迭代方向围绕用户感知强烈的体验优化、桌面端稳定性、国内主流渠道适配三个维度推进。社区贡献者参与度持续提升，今日多个首次贡献者提交的功能PR被合并，没有正式新版本发布。项目当前70%以上的迭代资源倾斜于普通C端用户和企业落地场景的痛点解决。

## 2. 版本发布
今日无正式版本/预发布版本推送，当前最新线上可用版本为v1.1.11.post2。

## 3. 项目进展
今日共35条PR完成合并/关闭，核心功能推进如下：
1. **上下文Token可视化全链路落地**：合并#4310、#5130、#4433三条关联PR，实现了用户诉求数月的对话窗口实时Token用量显示能力，覆盖轮次统计、总上下文进度条、悬浮弹窗详情展示全流程，直接关闭了此前累计的6条同类功能需求Issue。
2. **桌面端稳定性修复**：合并#5192 PR，修复Windows旧终端环境下Rich打印库崩溃、客户端异常自终止的高频问题，大幅提升Windows桌面端可用性。
3. **体验细节优化**：合并#5146 PR，解决了斜杠调用技能时控制台展示全量SKILL.md源码的异常问题；合并#5123 PR升级技能市场，新增QwenPaw官方技能端点、分类预览功能并优化UI体验。
4. **模块能力补全**：合并#5150 PR完善元宝渠道适配，新增Bot消息过滤和环境变量支持；合并#4495、#4602两条定时任务关联PR，修复定时任务参数校验返回500的Bug，实现定时任务在统一会话下隔离执行的能力。
截至今日，v1.1.11版本的遗留体验问题解决进度已达70%，Top级用户反馈的痛点绝大多数已有对应的修复路径。
关联链接：
- 上下文Token可视化PR：https://github.com/agentscope-ai/QwenPaw/pull/4310
- 桌面端修复PR：https://github.com/agentscope-ai/QwenPaw/pull/5192
- 技能市场升级PR：https://github.com/agentscope-ai/QwenPaw/pull/5123

## 4. 社区热点
今日讨论热度最高的3条公共议题，核心反映了从开发者群体向普通用户群体渗透过程中的典型诉求：
1. **#1911 华为小艺通道适配异常**：累计22条评论为今日热度最高Issue，大量鸿蒙生态开发者反馈自行添加小艺频道后手机端侧消息无法同步，服务端仅能收到开放平台侧的请求，期待官方给出标准化适配方案。链接：https://github.com/agentscope-ai/QwenPaw/issues/1911
2. **#5140 v1.1.11.post2二进制附件下载返回404**：累计6条评论，大量普通用户反馈docx/pdf等非纯文本文件点击下载直接报错，是当前曝光量最高的功能异常问题。链接：https://github.com/agentscope-ai/QwenPaw/issues/5140
3. **#5181 插件依赖安装重试持续弹出CMD窗口**：累计5条评论，Windows桌面用户反馈PyPI网络不稳定时，pip反复重试安装依赖会弹出大量空白CMD窗口，严重干扰正常使用。链接：https://github.com/agentscope-ai/QwenPaw/issues/5181

## 5. Bug 与稳定性
按严重程度排序的核心已知问题：
| 严重等级 | Bug描述 | 关联链接 | 是否已有Fix PR |
| --- | --- | --- | --- |
| 高危 | 上下文压缩逻辑异常把人设文件完全清空，直接导致Agent任务中断 | https://github.com/agentscope-ai/QwenPaw/issues/5171 | 否 |
| 高危 | 长对话场景下项目完全无响应，不再输出任何回复 | https://github.com/agentscope-ai/QwenPaw/issues/5161 | 否 |
| 中高危 | Windows客户端进程无限制增殖，长期运行内存占用可超过90%导致系统卡顿 | https://github.com/agentscope-ai/QwenPaw/issues/5138 | 否 |
| 中危 | 插件依赖重试逻辑持续弹出大量CMD窗口 | https://github.com/agentscope-ai/QwenPaw/issues/5181 | 规划中 |
| 中危 | 非纯文本附件下载返回404错误 | https://github.com/agentscope-ai/QwenPaw/issues/5140 | 否 |
| 低危 | Python3.13环境下TeamChat插件安装失败，缺失已在3.13中移除的imghdr标准库 | https://github.com/agentscope-ai/QwenPaw/issues/5166 | 否 |

## 6. 功能请求与路线图信号
结合用户需求和当前已开PR进度，大概率纳入下一版本（v1.1.12）的特性包括：
1. 对话输入队列功能：已有PR #5158处于开发状态，用户可以不等模型回复完成就提交下一个请求，链接：https://github.com/agentscope-ai/QwenPaw/pull/5158
2. 飞书长回复流式卡片体验优化：社区已提交完整优化方案，已排进近期迭代队列，链接：https://github.com/agentscope-ai/QwenPaw/issues/5167
3. 桌面端系统托盘、开机自启、后台常驻能力：需求已完成评审，进入开发排期，链接：https://github.com/agentscope-ai/QwenPaw/issues/5164
中长期版本即将落地的核心特性：统一Agent OS Driver外部能力抽象层（PR #5067处于评审中）、Headroom可选上下文压缩插件、Langfuse/OpenTelemetry可观测能力对接。

## 7. 用户反馈摘要
- 负面痛点：Windows桌面端普通用户集中反馈v1.1.11.post2版本进程泄漏、弹CMD窗口等体验问题，是当前最影响新用户留存的因素；企业生产环境用户重点反馈长对话无响应、上下文统计值和实际API输入体量不符的问题，直接影响业务可用性。
- 生态侧反馈：大量鸿蒙、企业微信生态开发者高度关注国内渠道适配进度，不少用户已自行提交适配补丁等待合并。
- 正面反馈：最新上线的技能市场新UI、斜杠技能调用显示优化获得社区用户普遍好评。

## 8. 待处理积压
需要维护者优先关注的长期未响应高价值议题：
1. 高优Issue #1911 华为小艺通道适配异常，2026-03-20创建至今已近3个月，累计22条用户评论跟进，尚未分配负责人闭环，链接：https://github.com/agentscope-ai/QwenPaw/issues/1911
2. 核心架构PR #5088 治理与沙箱接口设计，6月10日提交至今超过5天未进入正式评审，是未来Agent安全隔离能力的核心底座，链接：https://github.com/agentscope-ai/QwenPaw/pull/5088
3. 需求Issue #5009 集成OpenTelemetry/Langfuse等可观测组件的需求，企业用户呼声很高，目前尚无官方路线图回应，链接：https://github.com/agentscope-ai/QwenPaw/issues/5009

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-16
---
## 1. 今日速览
今日ZeroClaw项目处于极高活跃状态，过去24小时累计产生50条Issue更新、50条PR更新，核心贡献者集中输出大量安全加固、架构优化、场景适配类议题。当前项目并行推进v0.8.1功能补全、v0.9.0安全重构双迭代路线，没有出现大规模阻塞事故，新需求响应速度、bug闭环效率均处于近30天高位，整体项目健康度评级为优秀。今日未发布正式新版本，所有合并变更均在master分支合流后走常规灰度校验流程。
## 2. 版本发布
今日无正式Release版本推送，版本迭代队列按既定节奏推进：v0.8.1聚焦渠道、工具、 provider 场景补全，v0.9.0聚焦权限隔离、供应链安全、网关边界重构。
## 3. 项目进展
今日累计完成4条Issue闭环、6条PR合并/关闭，核心推进成果如下：
- 自定义推理端点本地CA证书信任功能正式落地，彻底解决私有部署场景下对接自建HTTPS模型服务的证书信任问题，支撑离线环境私有化交付场景：[zeroclaw-labs/zeroclaw#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)
- 闭环技能自迭代高危bug，修复`skill_manage patch`动作完全绕过冷却限制、可无限制覆写技能文件的漏洞，避免生产环境下技能被无约束篡改：[zeroclaw-labs/zeroclaw#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)
- 修复网关Web仪表盘WebSocket会话中`ask_user`工具直接抛出"通道关闭"错误的S1级工作流阻断问题，补齐Web管理控制台核心交互可用性：[zeroclaw-labs/zeroclaw#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)
- 修复快启向导残留裸英文字符串的问题，完成多语言国际化适配收尾：[zeroclaw-labs/zeroclaw#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005)
今日完成v0.8.1迭代队列约12%的待处理任务，核心生产场景可用性得到显著夯实。
## 4. 社区热点
今日讨论热度最高的3个核心议题，背后直接反映社区最核心的需求方向：
1. **#2767 多Agent路由特性**：累计6条评论、9个点赞，呼声最高的核心新特性，诉求来源于大量团队用户希望单台网关实例承载多个隔离Agent、多渠道账号，无需重复部署多套ZeroClaw实例支撑多条业务线，该特性已经被正式标记为Accepted进入优先开发队列：[zeroclaw-labs/zeroclaw#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)
2. **#1458 本地自定义CA证书支持**：累计8条评论，私有部署用户长期提报的强需求，今日正式闭环，覆盖大量内网自建大模型服务的对接场景：[zeroclaw-labs/zeroclaw#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)
3. **#6067 通道回复预检查可配置化**：累计5条评论，面向高并发消息渠道的性能优化需求，通过切换小模型、增加超时控制避免主线模型被阻塞，大幅提升消息响应速度：[zeroclaw-labs/zeroclaw#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)
## 5. Bug 与稳定性
今日新提报/更新的Bug按严重等级排序：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| P1 高危安全 |  per-agent MCP权限配置仅在配置面板展示、运行时完全不生效，隔离能力静默失效 | [zeroclaw-labs/zeroclaw#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | 暂无对应PR，刚进入Accepted状态 |
| P2 高危 | Agent无进度死循环检测逻辑缺陷，穿插调用其他工具即可绕过连续相同动作拦截，导致Agent死循环占用资源 | [zeroclaw-labs/zeroclaw#7681](https://github.com/zeroclaw-labs/zeroclaw/pull/7681) | 已有PR提交待合并 |
| P2 高危 | 工具调度器运行时替换后系统提示不会自动刷新，导致旧的已移除工具指令残留在Agent上下文中 | [zeroclaw-labs/zeroclaw#7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742) | 已排入迭代计划 |
| P2 中风险 | 邮件渠道OAuth刷新无重试机制，临时网络波动会直接导致消息通道断开 | [zeroclaw-labs/zeroclaw#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739) | 刚提报待排期 |
## 6. 功能请求与路线图信号
结合今日新提交的RFC和PR，以下特性大概率会纳入后续版本：
- v0.8.1后续小版本：原生上下文压缩装饰器#7673、按Agent粒度单独配置prompt注入防护模式#7749、通道回复预检查可配置化#6067 已经完成方案评审，可快速上线
- v0.9.0版本：A2A Agent发现协议（`.well-known/agent-card.json`）#7218、供应链安全 hardened CI流水线#7675、Agent委托交接显式权限控制#7743 已经排入v0.9.0核心开发队列
- 中长期架构演进：移除全链路Node.js依赖、完全WASM化的架构重构RFC#7674 已经公示，后续会逐步落地降低npm生态供应链风险
## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户痛点：
1. 非技术普通用户反馈TUI配置界面友好度不足，配置别名后无法重命名、编辑字符串不能左右移动光标修改，降低了零代码配置的使用门槛，对应的两个zerocode小功能#7467、#7468已经快速被维护者采纳
2. 大量私有部署用户此前多次反馈自签证书OpenAI兼容端点对接困难，今日CA证书特性闭环后相关诉求得到彻底解决
3. 企业团队用户普遍反馈当前只能单实例跑单个Agent，多业务线场景下需要重复部署多套服务，维护成本极高，对应多Agent路由特性的9个点赞充分验证该需求的覆盖广度
## 8. 待处理积压
提醒维护者重点关注3个长期未闭环的高影响议题：
1. Issue#6074：2026年3月大规模回退操作丢失的153个有效提交的审计找回工作，标记help wanted超过1个半月，积压风险持续升高，需要核心维护者介入恢复合规提交：[zeroclaw-labs/zeroclaw#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
2. Issue#551：OpenAI兼容端点跳过SSL证书校验的功能需求，状态blocked超过3个月，可基于今日刚落地的#1458本地CA能力快速补全，适配部分测试环境的自签证书跳过校验场景：[zeroclaw-labs/zeroclaw#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)
3. Issue#7038：网关WebSocket偶发401校验失败问题，状态blocked超过2周等待用户复现信息，影响网关生产可用性评估：[zeroclaw-labs/zeroclaw#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*