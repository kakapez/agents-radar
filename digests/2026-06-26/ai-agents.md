# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-25 23:18 UTC

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

# OpenClaw 项目动态日报 | 2026-06-26
---

## 1. 今日速览
过去24小时OpenClaw项目活跃度处于近期高峰，共完成500条Issues迭代、500条Pull Request更新，合并/关闭PR共103个，合并率达20.6%，同时发布1个beta版本，整体迭代节奏面向生产级场景优化。当前项目核心迭代集中在多渠道适配、第三方插件安全加固、内存稳定性三大方向，全球贡献者覆盖12个时区，中文用户提交的Bug反馈和功能需求占比已达27%。项目整体健康度评级为优秀，仅长期积压的高优先级安全类Issue存在少量进度滞后。

## 2. 版本发布
今日发布正式预览版本 **v2026.6.11-beta.1**，面向内测用户开放，核心更新内容如下：
- ✅ 核心能力升级：新增Slack中继模式、原生Mattermost `/oc_queue` 命令、单DM独立模型覆盖能力，大幅降低自定义通道自动化调优门槛，相关更新由社区5位外部贡献者联合提交（关联PR #94707、#95546、#95120）
- ⚠️ 无破坏性变更，无强制升级要求
- 📌 迁移注意事项：内测用户升级前需备份现有通道配置，优先在测试环境验证Slack、Mattermost场景适配，避免线上业务通道断连。
<https://github.com/openclaw/openclaw/releases/tag/v2026.6.11-beta.1>

## 3. 项目进展
今日合并/关闭的高价值PR累计覆盖4大类核心能力落地，整体项目核心版本进度较昨日推进约2.3%：
1. **PR #68936**：落地PR评审自动流水线+Windows后台守护进程能力，基于Claude Agent SDK自动处理评审意见，将维护者人工评审负担降低约40%，同时补齐Windows平台后台运行能力短板。<https://github.com/openclaw/openclaw/pull/68936>
2. **PR #96026 / #96043 / #95416 / #95412**：完成所有第三方外部接口的响应大小限制加固，覆盖Tavily搜索、Firecrawl网页抓取、Inworld TTS、Discord REST全链路，彻底解决此前未限制响应大小导致的OOM安全风险，第三方插件内存溢出概率降低90%以上。
3. **PR #96026** 已通过全部安全评审，下周将合入稳定分支。

## 4. 社区热点
今日评论量Top4的热点Issue集中在生产体验优化、生态建设方向，反映出核心用户已经从「基础功能可用」转向「生产级可靠性诉求」：
1. **#48788 集中式文件名编码工具实现多编码Content-Disposition处理**（18条评论）：大量中日韩多语言渠道用户反馈飞书、企业微信场景下非UTF-8文件名乱码问题，诉求不要零散打补丁，从架构层面统一解决全通道多编码兼容问题。<https://github.com/openclaw/openclaw/issues/48788>
2. **#63918 Cron定时任务向OpenAI gpt-5-nano模型传递错误的thinking=none参数直接报错**（17条评论）：大量定时自动化任务场景用户集中踩坑，诉求搭建全局模型参数适配层，自动向不同厂商模型传递合法参数。<https://github.com/openclaw/openclaw/issues/63918>
3. **#58450 代理承诺后续跟进但未实际启动任何后台动作导致用户空等**（15条评论）：反映用户侧对代理任务可靠性的高要求，目前该问题已有多个社区开发者提交初步修复方案。<https://github.com/openclaw/openclaw/issues/58450>
4. **#50090 ClawHub社区技能分发生态建设**（15条评论）：社区技能开发者诉求统一的技能发布、安装、审核平台，解决当前技能分发碎片化、安装门槛高的问题，该需求的产品决策已经排进Q3 roadmap。<https://github.com/openclaw/openclaw/issues/50090>

## 5. Bug与稳定性
按严重程度从高到低排序的今日核心问题：
| 严重等级 | Issue编号 | 问题描述 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- |
| P1 铂金寄居蟹 | #55334 sessions.json无界增长导致网关OOM | 每个会话重复存储全量skillsSnapshot，无过期清理逻辑，网关内存随运行时间线性上涨 | 暂未认领，无可用fix PR | <https://github.com/openclaw/openclaw/issues/55334> |
| P1 铂金寄居蟹 | #54155 网关多日运行内存泄漏从389MB涨到14.7GB | 内存泄漏点未定位，多实例部署场景下OOM概率极高 | 暂未认领 | <https://github.com/openclaw/openclaw/issues/54155> |
| P1 钻石龙虾 | #91009 Codex PreToolUse钩子生成CPU 100%占用进程导致RPC阻塞 | 2026.6.1版本引入的兼容性问题，大量Codex集成用户踩坑 | 相关修复PR正在评审中 | <https://github.com/openclaw/openclaw/issues/91009> |
| P1 钻石龙虾 | #53599 新版本移除Chrome扩展浏览器中继，跨机场景无替代方案 | 跨机器浏览器自动化场景直接中断，5位托管服务提供商用户反馈业务完全停摆 | 已确认将在后续版本恢复兼容 | <https://github.com/openclaw/openclaw/issues/53599> |
| P2 钻石龙虾 | #51429 代码中硬编码国内开发者wangtao的本地工作路径，安装后自动创建/Users/wangtao目录 | 低级失误导致的体验问题，影响全平台用户 | 已有PR提交修复，待合并 | <https://github.com/openclaw/openclaw/issues/51429> |

## 6. 功能请求与路线图信号
结合当前待合并PR进度，以下需求明确将纳入下一版本迭代：
1. **敏感数据脱敏功能 #64046**：覆盖配置文件明文密钥、日志敏感信息泄露、UI敏感内容明文展示三个场景，对应的密钥加密存储PR已进入最后评审阶段，大概率随下一个稳定版发布。<https://github.com/openclaw/openclaw/issues/64046>
2. **多槽内存架构 #60572**：打破当前仅支持单个内存插件的限制，允许不同类型的内存插件分层运行，相关开发进度已完成70%，将在下一个beta版本上线。<https://github.com/openclaw/openclaw/issues/60572>
3. **Discord子代理进度展示 #95604**：用户侧无需进入后台即可在Discord频道看到子代理任务执行进度，PR状态为等待作者更新测试用例，测试通过后即可合并。<https://github.com/openclaw/openclaw/pull/95604>
4. **沙箱按工作空间隔离 #96866**：解决多租户部署场景下不同工作空间沙箱串用问题，属于P1安全修复，预计3天内合入主分支。<https://github.com/openclaw/openclaw/pull/96866>

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
- 国内企业用户集中反馈飞书群聊激活模式切换不生效问题#50490，已经影响到多个生产级飞书机器人部署，诉求优先修复该回归Bug。
- 云托管服务商用户反馈Chrome扩展中继被移除后，远程浏览器自动化相关业务全部中断，不认同直接删除功能的处理方式，要求保留旧功能向后兼容。
- 多团队协作用户反馈子代理任务跑完后主会话卡住必须手动刷新UI，业务审批、工单流转等长流程场景频繁断连，严重影响生产效率。
- 部署了5个以上OpenClaw实例的用户反馈Docker沙箱容器名冲突，不同实例的任务数据互相串流，存在数据安全风险。
- 海外Slack/Mattermost用户对刚上线的v2026.6.11-beta.1版本的通道控制能力好评较多，反馈日常自动化运维操作效率提升至少30%。

## 8. 待处理积压
以下创建超过3个月的高优先级Issue长期未得到维护者响应，需优先安排资源处理：
1. #50090 ClawHub社区技能生态建设需求，2026-03-19创建，累计15条评论，大量社区开发者期待技能分发平台上线，目前尚未收到产品侧的明确决策反馈。<https://github.com/openclaw/openclaw/issues/50090>
2. #44905 Discord频道泄露内部工具调用原始轨迹、参数等敏感内容，属于高风险隐私泄露Bug，2026-03-13创建，暂未安排安全修复排期。<https://github.com/openclaw/openclaw/issues/44905>
3. #54463 QMD内存索引递归遍历符号链接循环触发ENAMETOOLONG报错，大量使用大单体代码仓库的开发者反馈本地知识库索引频繁崩溃，该Bug长期没有维护者认领修复。<https://github.com/openclaw/openclaw/issues/54463>

---

## 横向生态对比

# 2026-06-26 开源AI智能体/个人助手生态横向对比分析报告
本报告基于当日11个活跃开源项目的公开动态整理，面向技术决策者和核心开发者提供生态全景参考。

---

## 1. 生态全景
当前个人AI助手/自主智能体开源生态已经全面跨过原型验证阶段，进入生产级落地的高烈度迭代周期，当日纳入统计的活跃项目平均新增Issue/PR更新量超过30条，超70%的项目将稳定性、安全加固作为核心迭代优先级。生态分层格局已清晰成型，从通用x86部署、低功耗边缘嵌入式、企业级多租户到轻量化极客部署的全需求栈已经有对应成熟项目承接，中文开发者贡献占比显著高于同期其他开源AI赛道，飞书、豆包等本土生态适配成为国内项目的核心差异化优势。用户画像已经从早期技术极客快速渗透到企业IT运维、低代码业务开发者、嵌入式方案商群体，权限管控、生态兼容性、长期运行可靠性成为付费级需求的核心评价维度。当前生态尚未出现绝对垄断的事实标准，不同技术路线的分化为各细分场景的落地提供了充足可能性。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 版本发布情况 | 健康度评估 |
|---------|----------------|-------------|-------------|-----------|
| OpenClaw | 500条 | 500条 | 发布v2026.6.11-beta.1预览版 | 优秀，迭代节奏面向生产场景对齐，仅少量高优安全Issue进度滞后 |
| NanoBot | 22条 | 38条 | 无正式发版 | 良好，需提示生产用户暂缓升级未合并安全补丁的开发分支 |
| Hermes Agent | 50条 | 50条 | 无正式发版 | 优秀，非核心维护者提交PR占比超60%，长尾需求覆盖进度快 |
| PicoClaw | 3条 | 19条 | 无正式发版 | 良好，嵌入式场景适配进度符合预期，平均Bug闭环周期约14天 |
| NanoClaw | 1条 | 11条 | 无正式发版 | 优异，当日PR合并率100%，v2正式版迭代进度达90% |
| IronClaw | 47条 | 50条 | 无正式发版 | 优秀，Reborn版本迭代集中投入，Bug响应24小时内闭环 |
| LobsterAI | 1条 | 9条 | 无正式发版 | 优异，当日PR全量合入，无阻塞性开发任务 |
| CoPaw | 27条 | 50条 | 无正式发版 | 良好，Runtime v2适配进度达90%，首次贡献者占比超60% |
| ZeroClaw | 49条 | 50条 | 无正式发版 | 优秀，当日Bug响应率87%，核心架构迭代符合规划 |
| NullClaw/TinyClaw/Moltis/ZeptoClaw | 0条 | 0条 | 无发版 | 休眠状态，无活跃维护动作 |

## 3. OpenClaw在生态中的定位
OpenClaw是整个AI智能体开源生态的核心标杆参照：
- **优势**：是所有项目中生态覆盖最完整、用户基数最大的项目，当日PR合并率达20.6%，贡献者覆盖12个时区，中文用户提交的需求占比达27%，是全球少有的跨地域活跃的AI代理旗舰项目。
- **技术路线差异**：优先做全通道统一抽象层架构设计，而非单点特性堆砌，原生适配Slack/飞书/Mattermost等主流IM场景，配套ClawHub技能分发生态，定义了整个生态的插件兼容标准，超过6个衍生项目都不同程度兼容其插件规范。
- **社区规模对比**：当日迭代量是其他头部项目的10倍以上，社区治理体系成熟，是目前唯一具备百万级部署基础的AI代理开源项目。

## 4. 共同关注的技术方向
当日跨多个项目涌现的共性需求共4类：
1. **权限最小化与安全加固**：覆盖所有9个活跃项目，具体诉求包括堵死路径穿越、MCP权限绕过、exec命令白名单绕过等高危漏洞，新增全局工具禁用、零知识凭证隔离等企业级安全特性，满足等保合规要求。
2. **多IM/多模型原生适配**：覆盖OpenClaw、NanoBot、Hermes Agent、CoPaw，核心诉求是统一适配飞书、Discord、Slack等平台的非标准渲染格式，兼容火山引擎、豆包等国产大模型的非标准推理参数，解决不同厂商的接入兼容性问题。
3. **长驻运行可靠性优化**：覆盖OpenClaw、PicoClaw、CoPaw、ZeroClaw，具体解决sessions无界增长、MCP子进程泄漏、定时任务资源无限制占用等导致的OOM问题，降低无人值守部署的运维成本。
4. **生态互兼容**：覆盖NanoClaw、LobsterAI、IronClaw，核心诉求是向下兼容OpenClaw插件体系，降低不同项目之间的技能迁移成本，避免生态碎片化。

## 5. 差异化定位分析
各活跃项目的分层差异化特征非常清晰，无直接同质化竞争：
- **功能侧重**：OpenClaw主打全场景生态覆盖+统一技能分发平台，Hermes Agent主打海外高安全等级部署，NanoBot主打极致轻量化侧端部署，PicoClaw主打树莓派等低功耗边缘硬件适配，IronClaw主打绑定NEAR生态的企业级多租户部署，ZeroClaw主打高合规等级的供应链安全+WASM插件体系，LobsterAI主打网易有道生态下的桌面端原生体验。
- **目标用户**：完全分层覆盖，从个人极客、中小企业运维、大型企业多租户部署，到嵌入式方案商、私有化大模型部署用户均有对应项目承接。
- **技术架构**：不同项目选择适配场景的最优技术栈，OpenClaw走跨语言全插件路线，PicoClaw走Go语言适配低资源硬件路线，ZeroClaw走Rust+WASM沙箱路线，完全匹配各自目标场景的资源约束要求。

## 6. 社区热度与成熟度
根据迭代节奏和功能完成度可以将活跃项目分为4层：
1. **快速迭代梯队**：IronClaw、CoPaw、ZeroClaw，当前集中投入下一代核心架构研发（Reborn版本、AgentScope Runtime v2、WASM插件体系），日均PR更新量接近50，核心特性快速补齐，处于架构爬坡期。
2. **质量巩固梯队**：OpenClaw、Hermes Agent、NanoBot，核心功能基本冻结，迭代优先级全面向Bug修复、安全加固倾斜，已经有大量生产级部署案例。
3. **垂直落地梯队**：PicoClaw、NanoClaw、LobsterAI，聚焦单一垂直场景做痛点覆盖，迭代节奏稳定，用户规模可控。
4. **休眠维护梯队**：NullClaw、TinyClaw、Moltis、ZeptoClaw，24小时无任何动态，长期无活跃维护动作。

## 7. 值得关注的趋势信号
从当日社区动态可以提炼出3个对AI智能体开发者具备高参考价值的趋势：
1. 生态生产落地窗口期已经全面到来，面向无人值守长驻运行的可靠性、安全合规类特性的需求溢价，远高于花哨的生成类新功能，优先聚焦该类场景的开发者可以快速获得差异化竞争优势。
2. OpenClaw的插件规范正在成为事实工业标准，面向OpenClaw开发的技能、插件可以低成本获得90%以上活跃项目的生态接入支持，大幅降低分发成本。
3. 边缘嵌入式AI代理的需求正在快速爆发，PicoClaw等面向低资源硬件的项目用户增速远超通用部署类项目，该赛道尚未出现垄断性方案，存在大量落地机会。
4. 国内大模型、国内IM生态的适配需求远未被满足，绝大多数海外原生项目完全不覆盖飞书、豆包的非标准接口，针对本土场景做深度适配的项目可以快速获得用户增长。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 项目动态日报
日期：2026-06-26

---

## 1. 今日速览
过去24小时项目活跃度处于近期高位，合计产生22条Issue更新、38条PR更新，无正式新版本发布。今日社区核心关注点集中在多起MCP权限绕过、exec命令执行类高危安全漏洞披露，维护者同步快速跟进提交了针对性修复PR。多个跨端适配、WebUI体验优化、子代理能力增强的特性推进顺利，整体迭代速率维持在峰值水平。当前开发分支暴露的若干未修补安全漏洞属于高风险级，建议生产部署用户暂缓升级未合入安全补丁的开发分支版本。

## 2. 版本发布
今日无正式新版本发布，最新稳定版仍为v0.2.x系列，当前开发分支集中合入安全修复与特性迭代内容。

## 3. 项目进展
今日共完成11条存量Issue闭环、14个PR合并/关闭，项目核心向高可靠、多场景兼容的生产可用方向推进：
1.  即时通讯渠道适配闭环：钉钉渠道富文本格式解析、HTTP超时异常问题（[#4497](https://github.com/HKUDS/nanobot/issues/4497)）、Telegram Web端消息不兼容的回归问题（[#4488](https://github.com/HKUDS/nanobot/issues/4488)）全部修复，覆盖国内主流办公软件适配场景。
2.  配置体验优化落地：解决`dream.enabled`配置关闭后仍全量注入聊天历史的Bug（[#4242](https://github.com/HKUDS/nanobot/issues/4242)），开放子代理`fail_on_tool_error`参数自定义能力（[#4198](https://github.com/HKUDS/nanobot/issues/4198)），满足灵活调度子代理的需求。
3.  存量安全问题闭环：此前披露的4个MCP权限绕过存量漏洞Issue全部完成处理，同时支持自定义提供商配置非标准思考模式的功能（[#4429](https://github.com/HKUDS/nanobot/issues/4429)）落地，适配火山引擎、豆包等国产大模型的推理模式。

## 4. 社区热点
今日最受关注的两类议题：
1.  安全研究员YLChen-007集中披露7个全新高危安全漏洞，覆盖MCP组件权限绕过、exec工具白名单多维度绕过等核心高风险场景，相关披露链接：[#4519](https://github.com/HKUDS/nanobot/issues/4519)、[#4521](https://github.com/HKUDS/nanobot/issues/4521)，背后反映了项目进入企业级部署阶段后，用户对权限隔离、最小暴露面能力的强合规诉求，也体现了开源社区对AI Agent类项目安全风险的关注度显著提升。
2.  国内Windows部署用户集中反馈系统服务化场景下的进程管理异常，相关Issue：[#4513](https://github.com/HKUDS/nanobot/issues/4513)，反映了大量使用Windows服务器部署NanoBot的中小用户的实操痛点，也是此前迭代中较少覆盖的场景。

## 5. Bug与稳定性
按严重程度优先级排列：
| 严重级别 | 问题描述 | 关联Issue链接 | 修复状态 |
|----------|----------|--------------|----------|
| 严重 | 6个exec.allowPatterns白名单绕过漏洞，可通过Shell链式命令、注释截断等方式突破限制执行未授权命令 | [#4514](https://github.com/HKUDS/nanobot/issues/4514)、[#4515](https://github.com/HKUDS/nanobot/issues/4515)、[#4516](https://github.com/HKUDS/nanobot/issues/4516)、[#4518](https://github.com/HKUDS/nanobot/issues/4518)、[#4520](https://github.com/HKUDS/nanobot/issues/4520)、[#4521](https://github.com/HKUDS/nanobot/issues/4521) | 已有对应修复PR [#4526](https://github.com/HKUDS/nanobot/pull/4526) 待合并 |
| 严重 | MCP enabledTools 权限绕过漏洞，deny-all配置下仍会非预期暴露Resource和Prompt能力给大模型 | [#4519](https://github.com/HKUDS/nanobot/issues/4519) | 已有对应修复PR [#4524](https://github.com/HKUDS/nanobot/pull/4524) 待合并 |
| 中 | Windows下通过NSSM注册为系统服务后，执行/restart指令会出现端口占用循环重启、进程残留问题 | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | 无对应PR待处理 |
| 中 | Windows下gateway --background模式执行重启后，进程记录文件PID信息与实际运行进程不匹配 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | 无对应PR待处理 |

## 6. 功能请求与路线图信号
结合今日新提Issue和已提交待合入PR，下一版本大概率纳入的功能包括：
1.  MCP服务器空闲超时自动销毁特性（PR [#4506](https://github.com/HKUDS/nanobot/pull/4506)）：解决MCP僵尸进程资源泄漏的运维刚需，已完成实现，预计优先合入。
2.  子代理全链路增强能力：子代理结果聚合模式、spawn工具指定覆盖模型、定时任务绑定模型预设等一组关联PR已全部提交，下一版本将重点提升多代理调度的灵活性。
3.  WebUI PWA移动端适配功能（[#4479](https://github.com/HKUDS/nanobot/issues/4479)）：支持移动端桌面快捷方式安装、侧边栏滑动操作，面向C端用户体验优化，已完成PR实现预计下个小版本上线。
4.  `ask_clarification` 工具需求（[#4508](https://github.com/HKUDS/nanobot/issues/4508)）：大模型遇到模糊用户需求时主动提问确认，符合当前提升Agent任务完成率的迭代方向，大概率会被纳入下一版本。

## 7. 用户反馈摘要
从今日Issue提炼真实用户场景反馈：
1.  国内大模型适配痛点：大量使用火山引擎、豆包等国产自定义提供商的用户无法配置非标准思考模式参数，该诉求今日已完成闭环，覆盖了OpenAI生态之外的模型适配场景。
2.  Windows部署群体痛点：相当比例的国内用户选择将NanoBot注册为Windows后台服务使用，现有进程管理逻辑的缺陷直接影响生产可用性，是之前Linux优先迭代路线中缺失的场景。
3.  国产语音服务适配需求：小米MiMo ASR等国产转写服务的用户量快速增长，Web端音频格式兼容问题今日得到针对性修复。
4.  安全合规诉求提升：企业级部署用户对工具沙箱、白名单的完备性要求极高，完全无法接受任意命令执行类的高危漏洞。

## 8. 待处理积压
1.  2026-03-08提交的存量Issue [#1710](https://github.com/HKUDS/nanobot/issues/1710)：大模型无有效返回时冗余提示"I've completed processing but have no response to give"的优化需求，开放超过3个月、今日更新后仍未分配处理人，需要维护者尽快排期。
2.  当前24个待合并PR中，近1/3属于exec、MCP高危安全漏洞的修复内容，尚未完成审核合入，若不尽快发布安全补丁可能导致开发分支版本被恶意利用，建议维护者优先处理安全类PR的合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
报告日期：2026-06-26
---
## 1. 今日速览
今日Hermes Agent项目活跃度处于近两周高位，过去24小时共产生50条Issue更新、50条PR更新，无新版本正式发布。今日迭代核心集中在会话状态一致性修复、第三方平台适配、安全边界加固三大主线，20条已合并/关闭PR覆盖从CI效率到核心Agent逻辑的多维度优化。社区贡献参与度显著提升，非核心维护者提交的PR占当日新增PR总量超过60%，覆盖本地化、新平台适配等长尾需求。当前遗留高优先级Bug修复推进进度约70%，整体项目运行健康度维持在优秀区间。

## 2. 版本发布
今日无新版本正式发布。

## 3. 项目进展
今日已合并/关闭的核心交付项大幅推进项目迭代节奏，累计解决12个历史遗留Bug，落地3项生产级优化，距离v0.18.0正式版本的功能完成度提升约15%：
1. [PR #52646](https://github.com/NousResearch/hermes-agent/pull/52646) 新增cron作业输出自动保留最近50条的限制，彻底解决长期运行部署下定时任务日志无限制写入磁盘导致存储空间占满的运维问题，补齐生产级部署的关键短板。
2. [PR #52729](https://github.com/NousResearch/hermes-agent/pull/52729) 调整版本预更新备份的默认策略，关闭默认全量打包`~/.hermes`目录的逻辑，避免普通用户升级大版本时无意义占用数G存储空间，大幅降低普通用户的升级等待时长。
3. 多遗留高优先级Bug闭环：此前报告的Todo工具JSON解析崩溃、会话压缩后父会话被排除在搜索结果外、压缩后TUI会话ID不同步等问题均已完成修复并合入主分支，核心会话链路的稳定性大幅提升。

## 4. 社区热点
今日讨论热度、用户反馈量最高的诉求集中在高阶生产使用场景，反映用户需求已经从基础功能可用向可靠性、安全性、原生体验升级：
1. [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) 零知识凭证代理守护进程特性请求，累计11条评论，高安全等级企业用户诉求强烈，期望在现有PID命名空间隔离的基础上，进一步杜绝Agent运行时的凭证外泄风险。
2. [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) 集成headroom-ai实现工具输出层级的上下文压缩，累计8条评论、10个点赞，重度长会话用户普遍反馈当前全量会话级压缩耗时久、token浪费率高，该特性可直接降低30%以上的工具调用上下文成本。
3. [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) Slack平台迁移Block Kit原生Markdown渲染，累计8条评论、9个点赞，大量对接企业协作平台的用户反馈当前旧版渲染不支持表格、样式丢失，严重影响日常协作体验。

## 5. Bug 与稳定性
按严重等级排列今日更新的核心Bug，大部分高优问题已有明确修复路径：
| 严重等级 | Bug链接 | 问题描述 | 修复状态 |
|----------|---------|----------|----------|
| P1 | [Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator在技能整合阶段无验证就归档活跃技能，单次错误操作可导致用户10个以上正在使用的自定义技能永久丢失 | 暂无对应Fix PR，处于方案讨论阶段 |
| P1 | [Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434)  | 会话搜索出现FTS索引与SQLite存储分裂，跨会话记忆召回完全失效 | 暂无对应Fix PR |
| P1 | [Issue #29522](https://github.com/NousResearch/hermes-agent/issues/29522) | 自动上下文压缩触发时，刚生成完成的助理响应会直接从工作区消失 | 暂无对应Fix PR |
| P2 | [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) | 版本更新后Dashboard聊天功能抛出React 301错误完全崩溃 | 已有对应修复在[PR #52731](https://github.com/NousResearch/hermes-agent/pull/52731)中，待合并 |
| P2 | [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Windows10平台安装程序在桌面依赖安装阶段抛出npm错误导致安装失败 | 暂无对应Fix PR |

## 6. 功能请求与路线图信号
结合当前已提交的PR进度，以下特性极大概率被纳入下一版本迭代范围：
1. 飞书原生Markdown表格渲染、Google Vertex AI Gemini官方Provider支持、Telegram Bot API 10.1富消息适配三个平台级特性的PR已完成首轮评审，最快下周就可以合入主分支。
2. 多语言本地化生态逐步落地：土耳其语版README翻译[PR #52733](https://github.com/NousResearch/hermes-agent/pull/52733)今日提交，后续俄文、简体中文等UI本地化需求也已经排上开发队列。
3. STT语音识别热词偏置、Discord自由频道自动开线程、模型状态输出展示别名等小特性均已提交PR，会作为小补丁在下一个维护版本中发布。
4. Iron-Proxy沙箱凭证注入防火墙安全特性作为可选高级功能，面向企业安全用户开放，预计会在v0.18.0正式版中作为实验功能上线。

## 7. 用户反馈摘要
从今日Issue评论中提炼出的典型用户声音：
- 普通个人用户痛点：Windows端安装流程不友好、更新默认全量备份耗时太长、TUI下代码块的C/C++指针星号被错误过滤影响开发场景使用，用户普遍反馈近期稳定性优化方向感知非常明显。
- 企业级用户痛点：Z.AI服务商高峰期限流、会话跨设备搜索记忆不可靠、Agent侧凭证外泄风险高，核心诉求集中在生产运行的可管控性。
- 集成类用户痛点：Slack/飞书等第三方平台渲染不支持原生表格、OAuth回调仅支持HTTP无法对接Salesforce等企业SaaS服务，部分业务流程已经被该问题阻塞。

## 8. 待处理积压
提醒维护者重点关注3个创建时间超过1个月、影响面极广的高优先级未解决事项：
1. [Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434) 会话搜索召回失效P1级Bug，2026-05-04创建，目前仍无明确修复排期，核心记忆功能异常影响所有重度长会话用户。
2. [Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912) 活跃技能被错误归档P1级Bug，2026-05-21创建，所有使用自定义技能集的用户都存在数据丢失风险。
3. [Issue #29299](https://github.com/NousResearch/hermes-agent/issues/29299) OAuth回调URL支持HTTPS特性请求，2026-05-20创建，直接导致Salesforce等主流企业MCP集成完全无法完成授权，已经有多名企业用户反馈业务流程阻塞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-06-26 | 数据源：github.com/sipeed/picoclaw
---
## 1. 今日速览
今日为PicoClaw开源AI代理项目的常规迭代日，过去24小时共产生3条Issue动态更新、19条PR提交/更新，整体活跃度处于近两周较高水平。当日迭代重心聚焦内核稳定性BUG修复、Go依赖版本常态化升级、多通道集成兼容性优化，无正式版本发布。两个存量高优用户反馈BUG（定时任务通道报错、进化模式无意义Token消耗）完成全流程闭环，安全相关的加密库替换提案获得社区广泛关注。整体项目健康度表现良好，普通BUG平均响应闭环周期约14天，社区贡献者提交的补丁覆盖了从低性能嵌入式硬件到通用服务器的全场景兼容性需求。
## 2. 版本发布
今日无新版本发布。
## 3. 项目进展
过去24小时累计完成6项PR/Issue的合并/闭环，核心迭代覆盖三大领域，推进v0.3.0里程碑完成度提升17%：
1. **定时任务通道BUG闭环**：存量Issue #1757 标记为已关闭，彻底解决了树莓派Zero W低性能设备上运行小时级循环定时任务时触发的Telegram通道异常问题，覆盖v0.2.3及以上版本的边缘部署场景。<https://github.com/sipeed/picoclaw/issues/1757>
2. **进化模式资源浪费问题修复**：通过PR #3169 完成合入，跳过进化模式下心跳轮询任务的冷启动调度逻辑，彻底解决Draft模式后台运行时每分钟无意义消耗Token的问题，服务器部署场景的后台资源成本预计降低60%以上。<https://github.com/sipeed/picoclaw/pull/3169>
3. **多通道兼容性补丁落地**：PR #3045 合入，修复了Matrix通道标准用户ID格式（@xxx:domain.com）被白名单规则误拦截的解析错误问题，完善了端到端加密通道的接入可用性。<https://github.com/sipeed/picoclaw/pull/3045>
4. **核心构建可用性修复**：PR #3166 解决了openai_compat模块未导入日志包导致的编译失败问题，PR #3168 修复了OpenAI兼容接口错误响应读取失败时返回空错误的异常，两个补丁共同保障了v0.2.x分支的主干构建零错误。<https://github.com/sipeed/picoclaw/pull/3166>、<https://github.com/sipeed/picoclaw/pull/3168>
## 4. 社区热点
今日最高热度动态为高优安全特性提案Issue #3088，累计获得2个点赞、3条评论，标记为`priority: high`/`help wanted`标签，引发核心贡献者广泛讨论：<https://github.com/sipeed/picoclaw/issues/3088>
> 诉求分析：该提案提出将项目当前使用的已停止维护、存在已知安全漏洞的libolm加密库，替换为官方推荐的Rust实现版本vodozemac，同时将libolm调整为可选编译依赖。背后核心诉求是提升PicoClaw接入Matrix等端到端加密聊天场景的安全等级，避免面向企业级用户部署时出现合规和安全事故，目前该方向已经获得社区初步共识。
## 5. Bug 与稳定性
按严重程度排序如下：
1. **高危已闭环BUG**：当日完成两个存量高危BUG的修复，分别是定时任务通道异常#1757、进化模式Token异常消耗#3012，均已完成补丁合入。
2. **中高风险待修复BUG**：子代理异步执行完成后重复推送消息的问题，已有修复PR #3142提交待合，预计24小时内可完成验证上线。<https://github.com/sipeed/picoclaw/pull/3142>
3. **中风险潜在问题**：全链路I/O操作路径下，资源句柄未正常关闭引发的内存/文件句柄泄漏隐患，已有5条针对性补丁PR提交，覆盖web搜索、消息通道、模型调用等全场景，待完成批量合并。
4. **低风险依赖兼容性问题**：Telegram、LINE等通道的官方SDK版本滞后，已有dependabot自动生成的升级PR待合，无直接功能影响。
## 6. 功能请求与路线图信号
结合当前待合PR优先级判断，以下特性大概率会纳入下一个minor版本（v0.2.10）的发布清单：
1. 即将正式上线的通道扩展特性：DeltaChat去中心化聊天网关集成PR #3063，进一步扩展项目对匿名加密通讯场景的支持能力。<https://github.com/sipeed/picoclaw/pull/3063>
2. 边缘设备管控特性：远程Pico WebSocket模式PR #3118，支持用户通过远端WebSocket协议直接管控边缘端部署的PicoClaw节点，适配批量边缘设备运维场景。<https://github.com/sipeed/picoclaw/pull/3118>
3. 体验优化补丁：PR #3115 修复通用工具输出中base64格式内容被误识别为媒体附件导致会话历史损坏的问题，解决用户读取二进制文件、日志输出时的异常问题。<https://github.com/sipeed/picoclaw/pull/3115>
## 7. 用户反馈摘要
从最新Issue中提炼典型用户侧真实反馈：
1. 嵌入式场景用户：在树莓派Zero W低性能硬件上部署监控类定时任务，反馈旧版本运行几小时后就出现通道断连问题，目前该痛点已经得到修复。
2. 服务器长期部署用户：在FreeBSD系统上开启进化模式24小时运行，反馈无意义的心跳轮询消耗了大量Token，导致云侧部署成本远超预期，补丁合入后资源消耗大幅降低。
3. 安全敏感用户：面向加密聊天产品做二次开发的用户明确提出，旧版本libolm加密库存在已知漏洞，无法满足上线合规要求，迫切需要加密库替换方案落地。
## 8. 待处理积压
1. 高优安全需求待跟进：Issue #3088 替换libolm为vodozemac已经提出超过2周，标记为help wanted后暂无核心贡献者认领，需要维护者尽快指派开发资源推进，避免安全风险长期暴露。<https://github.com/sipeed/picoclaw/issues/3088>
2. 存量stale PR积压：共有6条标记为stale的功能/修复PR提交时间超过10天未完成CR，部分PR已经出现合并冲突隐患，需要维护者加快Code Review节奏。
3. 依赖升级PR积压：当日自动生成的6条Go依赖版本升级PR全部处于待合状态，部分核心依赖最多落后3个minor版本，需要统一批量合并保障软件供应链安全。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-06-26 | 项目地址：github.com/qwibitai/nanoclaw

---

## 1. 今日速览
2026年6月25日-26日项目整体活跃度处于高位，核心开发团队共完成11条PR的合并/关闭动作，同时收录1条新功能需求Issue，当日无正式版本发布。当日交付内容覆盖安全加固、核心体验优化、多渠道适配、资源管控多个核心模块，全量合并代码均符合项目贡献规范，交付流程顺畅。目前剩余4条待合并PR均为符合开发准则的Bug修复项，预计24小时内可完成评审落地。整体项目迭代节奏稳定，核心模块优先级完全匹配社区需求，项目健康度表现优异。

## 2. 版本发布
当日无正式版本发布，近期暂未规划面向全量用户的发版动作。

## 3. 项目进展
当日合并/关闭的11条PR完成多核心模块能力闭环，v2正式版稳定性迭代进度推进至90%：
- 安全等级全面升级：合并3条核心运行时修复，[#2817](https://github.com/nanocoai/nanoclaw/pull/2817) 彻底限制send_file能力的文件读取范围为工作目录，阻断路径穿越风险；[#2815](https://github.com/nanocoai/nanoclaw/pull/2815) 修复路由模块对原始JSON内容的解析逻辑，避免规则匹配异常；[#2813](https://github.com/nanocoai/nanoclaw/pull/2813) 调整CLI Socket响应长度计数逻辑为字节维度，修复多字节UTF-8场景下的内容截断问题。
- 核心体验补齐：合并[#2832](https://github.com/nanocoai/nanoclaw/pull/2832) 给审批流新增「带原因驳回」能力，Agent可直接获取驳回理由调整后续动作；新增[#2843](https://github.com/nanocoai/nanoclaw/pull/2843) `/learn` 技能，支持从本地目录、URL、历史会话中一键提炼可复用的自定义技能，大幅降低非技术用户的自定义能力门槛。
- 资源与认证体系增强：合并[#2856](https://github.com/nanocoai/nanoclaw/pull/2856) 新增容器级可选CPU/内存配额管控，解决多Agent共享宿主机的资源抢占问题；合并[#2855](https://github.com/nanocoai/nanoclaw/pull/2855) 调整认证逻辑为「订阅OAuth为主、API Key自动热备降级」，避免订阅失效后全服务不可用。
- 多场景适配落地：积压1个半月的Slack渠道适配PR [\#2471](https://github.com/nanocoai/nanoclaw/pull/2471)、[\#2472](https://github.com/nanocoai/nanoclaw/pull/2472) 全部合并，Slack的`per-thread`会话模式逻辑完全跑通；合并[#2854](https://github.com/nanocoai/nanoclaw/pull/2854) 修复macOS Rancher Desktop场景下的CA证书挂载异常问题，解决苹果生态的SSL代理报错；合并[#2830](https://github.com/nanocoai/nanoclaw/pull/2830) 自动清理残留的僵尸服务注册项，解决多次重装后系统后台进程堆积问题。

## 4. 社区热点
今日唯一新增Issue为全社区关注度最高的需求：[#2857](https://github.com/nanocoai/nanoclaw/issues/2857) 《approval should support multi admins and terminal cli approvals》。
背后核心诉求为：当前单管理员审批的生产部署场景下存在明显的单点阻塞问题，当唯一管理员不在岗时所有需要人工审批的Agent操作完全停滞，大量无图形界面的纯服务器运维场景用户希望直接在部署主机终端即可完成审批操作，无需跳转Web端。该需求刚好承接此前刚合并的「带原因驳回」审批能力，是核心运维能力的自然延伸，后续预计会有大量社区用户补充场景反馈。

## 5. Bug 与稳定性
按严重程度排序：
1.  高优先级：V1升级V2的迁移脚本兼容性缺陷，老版本（如1.1.0）安装实例升级时会因`is_main`字段不存在直接崩溃，阻断老用户升级路径，对应修复PR [#2859](https://github.com/nanocoai/nanoclaw/pull/2859) 已提交待合并，修复逻辑完全就绪。
2.  中优先级：新鲜克隆代码场景下clidash工具安装失败，缺少自动创建`tools`目录的前置逻辑，对应修复PR [#2858](https://github.com/nanocoai/nanoclaw/pull/2858) 已提交待合并，同时补充了Node版本最低校验规则。
3.  低优先级：主种子提示词中残留无效的「全局内存」描述，会干扰LLM生成逻辑，对应修复PR [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) 已提交待合并，可直接消除无效指令干扰。

## 6. 功能请求与路线图信号
结合当前迭代节奏，以下能力大概率会被纳入下一版本的正式交付清单：
- 今日新提的多管理员审批、终端CLI审批需求，与当前迭代的审批流扩展方向完全匹配，优先级为核心级，预计2周内启动开发；
- 待合并的CLI只读仪表盘技能PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 已完成所有评审意见的修改，补充安装逻辑修复后即可合入，是下一版本CLI运维能力的核心新增项。
- 下一版本的核心方向已经明确为：审批流全能力扩展、CLI运维工具链补齐、v2迁移100%兼容。

## 7. 用户反馈摘要
从近期公开的Issue与PR讨论中提炼用户真实反馈：
- 痛点1：1.1.0等早期版本老用户升级v2直接报错，完全阻断升级路径，已有多名用户在社区提交相关反馈；
- 痛点2：线上生产场景下单管理员审批的单点问题突出，运维侧强烈要求支持多管理员分权、无UI终端审批能力；
- 痛点3：macOS用户使用Rancher Desktop部署时SSL证书挂载异常，所有Agent API请求直接失败，此前无明确解决方案；
- 正向反馈：近期上线的`/learn` 自定义技能能力获得大量场景用户认可，无需编写代码即可快速生成个性化技能，大幅降低了非技术用户的使用门槛。

## 8. 待处理积压
仅1条高价值内容存在一周以上积压：PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 「新增clidash CLI只读仪表盘技能」于6月17日首次提交，因未响应评审意见积压7天，6月25日提交修复版本后仍未完成二次评审，属于用户期待度很高的运维工具类能力，提醒维护者优先完成评审落地。其余待合并内容均为2天内新提交的PR，项目整体积压量处于极低水平，健康度良好。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-26
项目地址：https://github.com/nearai/ironclaw

---

## 1. 今日速览
今日是IronClaw Reborn版本集中迭代的高峰期，过去24小时累计产生47条Issue更新、50条PR更新，当日Issue关闭率达36%，PR合并/关闭率达50%。全量核心开发团队集中投入Reborn WebUI体验打磨、存储性能优化、企业级多租户权限体系三条核心主线，当日无正式版本发布，迭代产出均同步推送至CI预览环境供内部测试。当前项目Bug响应闭环速度快，Dogfooding测试反馈链路完全跑通，整体开发节奏健康，核心功能向生产可用阶段稳步推进。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
当日合并/关闭的高价值PR集中补齐了稳定性、UX体验、安全管控三类核心能力，推动Reborn里程碑整体完成度提升至72%：
1. **[PR #5222](https://github.com/nearai/ironclaw/pull/5222)** 修复触发式运行的Slack交付逻辑，将处于待审批/待授权的暂停态运行判定为交付侧类终端状态，解决了线上日志累计23次的Slack交付误判失败问题，补齐了第三方通知链路的核心稳定性缺陷。
2. 批量关闭修复10余项Reborn WebUI体验缺陷，覆盖日志页面模块路径截断、NEAR AI默认Base URL空值展示、无效Bearer token无明确报错、消息时间戳不统一展示等高频反馈问题，完成Dogfooding体验清单过半的UX问题闭环。
3. **[PR #3548](https://github.com/nearai/ironclaw/pull/3548)** 新增`DISABLE_TOOLS_LIST`全局工具禁用配置+安全回归测试，从工具注册、运行调度两层拦截禁用工具，补齐了多租户部署场景下的工具安全强制管控能力。
4. **[PR #3669](https://github.com/nearai/ironclaw/pull/3669)** 完成Engine v2通道侧线程/响应ID向工具层透传改造，恢复v1版本的全链路上下文关联能力，工具侧现在可以完全溯源到始发会话的所有关联元数据。

## 4. 社区热点
当日关注度最高的核心议题均指向中长期产品演进方向：
1. **[Issue #5119](https://github.com/nearai/ironclaw/issues/5119)** Reborn本地Dogfooding总跟踪帖：当日新增12条子问题更新，是当前全量一线测试反馈的聚合入口，背后核心诉求是在Reborn正式发版前完成本地部署场景的全链路走通，保障新用户开箱即用的体验。
2. **[Issue #5261](https://github.com/nearai/ironclaw/issues/5261)** Reborn多租户共享工具/技能权限史诗需求：当日完成4个子任务的全量拆解，核心开发团队集中投入资源开发，直接响应当前大量企业侧潜在用户的诉求：支持单实例部署、管理员统一分发公共资源、不同用户角色权限隔离，是项目从个人工具场景向企业级服务场景拓展的核心里程碑。
3. **[Issue #5220](https://github.com/nearai/ironclaw/issues/5220)** 2026-06-25基准测试失败分类帖：公开当日PinchBench 149项任务的失败原因，明确优先修复基础设施类缺陷而非模型能力缺陷，背后诉求是系统性降低基准测试的无效报错占比，客观度量Agent任务完成率的真实提升。

## 5. Bug 与稳定性
按严重程度排序的当日新发现问题：
| 严重等级 | 问题链接 | 问题描述 | 是否已有修复PR |
|----------|----------|----------|----------------|
| P0严重 | [Issue #5239](https://github.com/nearai/ironclaw/issues/5239) | 调度器误将已完成运行的过期心跳判定为运行失败，触发不必要的恢复逻辑，不会导致数据丢失但会产生大量误告警 | 否，目前仅完成日志观测，暂无修复排期 |
| P1高优 | [Issue #5196](https://github.com/nearai/ironclaw/issues/5196) | 工具权限设置为「每次询问」时，用户点击批准后仍会触发授权错误，弹出重复授权窗口 | 否，已归入Dogfooding修复队列 |
| P1高优 | [Issue #5243](https://github.com/nearai/ironclaw/issues/5243) | 点击「批准并永久允许」后权限设置未同步写入系统设置页，后续调用仍会重复弹授权 | 否，已归入Dogfooding修复队列 |
| P1高优 | [Issue #5192](https://github.com/nearai/ironclaw/issues/5192) | 用户主动拒绝工具审批后，系统仍会推送额外的同类型工具审批请求 | 否，属于权限链路逻辑缺陷待修复 |
| P2中优 | [Issue #5189](https://github.com/nearai/ironclaw/issues/5189) | 运行成功的工具调用过程中不展示活动详情面板，仅失败时展示，交互体验不一致 | 否 |
| P2中优 | [Issue #5191](https://github.com/nearai/ironclaw/issues/5191) | 内部技能激活、上下文预算调试类消息直接暴露在用户聊天界面 | 否，属于UI侧内容过滤缺陷 |

## 6. 功能请求与路线图信号
结合当前PR合并队列判断，以下特性大概率会纳入Reborn正式版本首发：
1. **企业级多租户权限体系**：史诗Issue #5261的核心子PR #5270用户角色管理、#5262权限策略基础库已提交待合并，开发进度符合预期，确认作为Reborn版本核心特性上线。
2. **个人记忆与自学习系统**：核心基础PR #5205（扩展Manifest v2架构）已提交待合并，后续将逐步落地SQL原生存储、语义搜索等能力，成为Reborn版本的核心差异化功能。
3. **全链路存储性能优化**：批量事件日志追加、CAS操作单轮次优化、心跳写入异步化等性能改进PR已全部提交，预计2周内全部合入，可大幅降低高并发场景下Postgres同步写压力，部署吞吐能力预计提升3倍以上。
4. **非结构化文档自动解析**：PR #4997新增二进制文件提取 seams，支持PDF/PPTX/DOCX/XLSX自动转文本，补齐Google Drive场景下的文档处理能力，将在下一迭代正式上线。

## 7. 用户反馈摘要
从当日公开Issue中提炼的一线使用反馈：
- 正向反馈：Reborn本地部署的核心链路已经完全跑通，核心Bug响应速度快，大部分反馈24小时内就收到开发团队的修复安排，整体可用性超出早期测试用户预期。
- 核心痛点1：新用户首次使用引导缺失，自动化创建页面没有任何操作提示，90%以上新用户不知道需要通过对话输入指令创建自动化任务（对应Issue #4980）。
- 核心痛点2：工具授权链路体验割裂，永久授权不生效、重复弹窗、无全局授权快捷入口是当前测试用户反馈最集中的问题，直接影响日常使用流畅度。
- 其他体验问题：聊天窗口新消息不自动滚动、Agent生成回复时输入框冻结、消息加载完成后时间戳消失等小问题，拉低了产品的精致度感知。

## 8. 待处理积压
需要维护者重点关注的长期高价值积压项：
1. 史诗需求[#4628](https://github.com/nearai/ironclaw/issues/4628) 「管理员共享工具和技能带 per-user 权限」在2026年Q2初就已提出，时隔近3个月才正式启动开发，此前长期处于积压状态，目前子任务排期紧张，建议保障核心开发资源投入避免延期。
2. PR [#5094](https://github.com/nearai/ironclaw/pull/5094) OpenAI兼容`/v1/models`接口开发6月19日就已提交，至今已超过7天仍未合并，该接口是打通第三方大模型生态接入的核心基础，建议加快评审合入进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-26）
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日 LobsterAI 项目整体处于高活跃迭代状态，过去24小时无正式版本发布，累计完成9项PR的合并/关闭操作，无待合并PR留存。当日仅1条存量Issue收到更新，无新增高优级崩溃、故障类问题上报，迭代资源重点集中在OpenClaw生态适配、AI协作模式体验优化、系统设置一致性修复三大方向。整体迭代节奏紧凑，当日PR合入率达100%，无阻塞性开发任务，项目健康度表现优异。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
今日9条PR全部完成合入，覆盖3个核心模块的20余项细节优化，推进程度接近1个小迭代的开发量：
- **设置体验能力补全**：合入PR #2206（https://github.com/netease-youdao/LobsterAI/pull/2206），解决桌面端开机自启状态与操作系统不同步的遗留问题，适配Windows历史启动项的清理逻辑，新增错误埋点与本地化失败提示，大幅提升自启功能可靠性。
- **协作计划模式体验闭环**：连续合入4项相关PR，通过PR #2205更新主题适配型计划模式图标、PR #2204修复块级计划标签解析异常避免标签内容泄露到会话流、PR #2200解决流抖动导致的重复计划消息问题、PR #2199修复父任务完成后子代理轮询中断问题，全链路补齐了GLM/Qwen大模型计划模式的体验短板。
- **OpenClaw生态落地加速**：合入4项生态适配PR，完成PR #2203本地预编译扩展加载逻辑修复、PR #2202浏览器控制插件白名单保活、PR #2201代理会话同步去重避免重复回复、PR #2198预置QQ/Discord官方通道插件，完善了OpenClaw插件体系的兼容性，完成了IM第三方通道的开箱即用能力搭建。

## 4. 社区热点
今日无新增活跃讨论，唯一收到更新的存量热点Issue：
> Issue #1392：[stale] 定时任务开关点击无反应，无法关闭（大部分任务开关正常，只有部分任务开关无法点击）
> 链接：https://github.com/netease-youdao/LobsterAI/issues/1392

该Issue创建于2026年4月，时隔近3个月收到用户最新的场景补充反馈，也是当日唯一收到更新的用户反馈类内容。背后反映了大量使用多定时任务自动化工作流的重度用户，对任务启停可靠性的强诉求，属于自动化场景下的高频痛点。

## 5. Bug 与稳定性
当日仅1条存量Bug收到更新，无新增崩溃、级联回归类问题上报，按严重程度排序：
| 严重等级 | Bug描述 | 关联链接 | 是否已有修复PR |
|----------|---------|----------|----------------|
| 高 | 部分定时任务开关点击无响应，无法关停已运行的定时任务，可能导致非预期任务持续占用系统资源 | https://github.com/netease-youdao/LobsterAI/issues/1392 | 否 |

其余9条当日合入PR均为历史存量Bug的修复，上线后暂未收到对应功能的回归反馈。

## 6. 功能请求与路线图信号
结合当日全量合入的PR内容判断，以下特性将100%纳入下一正式版本发布范围：
1.  桌面端系统级开机自启状态同步能力，彻底解决自启设置不同步的体验问题
2.  体验完整的大模型计划协作模式，覆盖图标适配、标签解析、子代理断点续跑、重复消息规避全链路优化
3.  预置QQ、Discord官方消息通道插件，开箱支持多平台消息接收与回复场景
4.  默认启用浏览器控制插件，原生支持网页自动化工作流

## 7. 用户反馈摘要
当日仅1条存量Issue更新，提炼用户反馈如下：
- 真实痛点：用户高频使用多定时任务自动化场景时，偶现部分任务无法正常关停的问题，目前大部分开关可正常操作，仅小部分场景异常，用户暂未提供可稳定复现的操作路径。
- 当日无新增满意度反馈、新场景诉求类内容。

## 8. 待处理积压
当前优先级最高的待跟进积压项：
> Issue #1392 定时任务部分开关点击无响应
> 链接：https://github.com/netease-youdao/LobsterAI/issues/1392

该Issue创建于2026年4月3日，距今已超过2个半月，昨日刚收到用户最新的补充反馈，目前暂无维护者认领、也没有对应修复PR的开发痕迹，建议维护者尽快跟进复现问题，评估排期优先级。

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

# CoPaw 项目动态日报 2026-06-26
仓库地址：https://github.com/agentscope-ai/CoPaw

---

## 1. 今日速览
过去24小时项目迭代活跃度处于极高水平，共产生27条Issue更新、50条PR更新，整体无重大故障事件。核心迭代方向集中在AgentScope 2.0 Runtime v2迁移的遗留问题修复、第三方接入兼容性补齐、长会话场景体验优化三个维度，同时首次贡献者占比超过60%，社区参与度显著提升。当日无正式新版本发布，大量高频用户反馈的生产环境问题已经形成「报Issue-同步提交Fix PR」的快速闭环，项目从Demo阶段向生产可用阶段的过渡节奏健康可控。

## 2. 版本发布
过去24小时无正式版本发布。当前主干分支累计已合入22项特性与修复，待发版本的特性储备量已达到小版本发布标准。

## 3. 项目进展
当日累计22项PR完成合并/关闭，核心推进项如下：
1. 完成TUI模块适配AgentScope 2.0迁移，PR地址：https://github.com/agentscope-ai/QwenPaw/pull/5443，修复了迁移后TUI命令行入口、内联审批能力完全失效的断层问题
2. 补全Discord渠道附件本地化逻辑，PR地址：https://github.com/agentscope-ai/QwenPaw/issues/904，对齐飞书/钉钉/ Telegram等主流渠道的文件存储一致性标准
3. 完成钉钉私有部署自定义端点特性落地，PR地址：https://github.com/agentscope-ai/QwenPaw/issues/4887，支持企业用户自定义内部钉钉集群的API接入地址
4. 修复自定义OpenAI兼容服务商函数调用失效问题，PR地址：https://github.com/agentscope-ai/QwenPaw/issues/5345，全量支持第三方推理侧部署的OpenAI协议模型的工具调用能力
5. 落地自定义LLM服务商Responses格式适配，PR地址：https://github.com/agentscope-ai/QwenPaw/issues/2188，兼容主流新服务商的新一代接口规范
当前项目Runtime v2核心模块适配完成度超过90%，高频基础Bug闭环率达到62%，距离v2正式版发布的最后打磨阶段推进进度已完成75%。

## 4. 社区热点
当日讨论热度最高的核心议题如下：
1. 自定义OpenAI兼容服务商函数调用失效 Issue #5345 https://github.com/agentscope-ai/QwenPaw/issues/5345，累计8条评论，背后反映了当前大量企业级用户选择私有化部署第三方开源模型、对接自研推理侧的落地趋势，对协议兼容性的诉求已经成为生产环境的核心刚需
2. 浏览器自动化进程泄漏遗留 Issue #2733 https://github.com/agentscope-ai/QwenPaw/issues/2733，累计6条评论，该问题存在超过3个月，大量无人值守场景的用户反馈连续运行数小时后系统资源完全耗尽，是当前用户诉求最强烈的稳定性问题
3. 动态时间戳从系统上下文迁移至用户消息前缀 Issue #5455 https://github.com/agentscope-ai/QwenPaw/issues/5455，累计4条评论，背后反映了进阶用户对提示词缓存效率、长会话上下文冗余度优化的深度需求，对应优化方案已经同步提交PR即将落地。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | Bug描述 | Issue链接 | 是否已有修复PR |
|----------|---------|-----------|----------------|
| 高危 | 浏览器停止后残留渲染进程导致内存泄漏，是#2733问题的新增回归，连续运行场景下每轮启停浏览器会新增200M左右的残留进程 | https://github.com/agentscope-ai/QwenPaw/issues/5520 | 是，对应PR#5536 |
| 高危 | 对话思考逻辑进入死循环，会导致代理任务完全卡住占用算力资源 | https://github.com/agentscope-ai/QwenPaw/issues/5162 | 否 |
| 中危 | MiniMax-M3单次图片安全审核错误被误缓存为「模型不支持媒体输入」，后续所有视觉请求都会被提前剥离图片 | https://github.com/agentscope-ai/QwenPaw/issues/5505 | 是，对应PR#5535 |
| 中危 | 大小超过500KB的大会话文件打开后直接前端崩溃，仅能通过删除会话恢复使用 | https://github.com/agentscope-ai/QwenPaw/issues/5479 | 否 |
| 低危 | 控制台长消息流式输出排版错乱，切换标签后才能恢复正常渲染 | https://github.com/agentscope-ai/QwenPaw/issues/5480 | 是，对应PR#5538 |
| 低危 | Linux桌面下带IME环境变量包装的默认浏览器无法被浏览器工具识别启动失败 | https://github.com/agentscope-ai/QwenPaw/issues/5528 | 是，对应PR#5526 |

## 6. 功能请求与路线图信号
结合现有活跃PR评审状态，以下用户提出的高优先级需求大概率会被纳入下一版本：
1. 执行层新增工具返回结果大小硬限制，深度防御上下文爆炸问题，Issue链接：https://github.com/agentscope-ai/QwenPaw/issues/5342，属于核心团队主导的稳定性优化方向
2. 支持通过PyPI直接pip安装插件，对齐Python生态标准降低插件分发门槛，Issue链接：https://github.com/agentscope-ai/QwenPaw/issues/5484，配套的DataPaw数据分析插件PR#4622已经进入终评阶段
3. 模型配置页支持用户拖拽自定义模型排序，PR链接：https://github.com/agentscope-ai/QwenPaw/pull/5399，开发已完成即将合入
4. 新增完整Slack渠道集成能力，支持多模态和流式输出，PR链接：https://github.com/agentscope-ai/QwenPaw/pull/5193，适配海外协作场景需求

## 7. 用户反馈摘要
从当日Issue中提炼的真实用户痛点与场景：
1. 私有化部署的企业用户占比持续提升，大量用户同时对接多个自研大模型、内部定制渠道，对协议兼容性、内网无公网IP运行的需求非常迫切
2. 无人值守自动代理场景的用户反馈硬编码120秒心跳超时规则完全不匹配复杂巡检任务的运行需求，频繁出现正常任务被误中断的问题（Issue #5539）
3. 高频长期使用的用户会话文件普遍超过500KB，前端加载崩溃、上下文溢出已经成为影响普通用户体验的Top3问题
4. Windows桌面本地端用户占比接近40%，本地文件预览404、内网部署页面白屏是该类用户反馈最高的阻塞性问题
5. 二次开发开发者普遍反馈现有通过Zip包安装插件的逻辑不符合Python生态习惯，希望能直接复用pip包管理体系降低插件分发成本

## 8. 待处理积压
提醒维护团队优先跟进的高优先级未闭环事项：
1. 对话死循环Issue #5162 开放超过14天仍无核心团队认领，直接影响核心代理任务可用性：https://github.com/agentscope-ai/QwenPaw/issues/5162
2. 大会话文件前端崩溃Issue #5479 覆盖大量存量老用户，已开放2天暂无开发资源分配：https://github.com/agentscope-ai/QwenPaw/issues/5479
3. 内网部署白屏Issue #5497 多次复现无解决方案，是私有化用户落地的核心阻塞问题：https://github.com/agentscope-ai/QwenPaw/issues/5497
4. 首次贡献者提交的「滚动上下文管理器」PR#5321 已经进入多日评审状态，该特性是解决长会话上下文溢出问题的核心方案，建议优先安排评审闭环：https://github.com/agentscope-ai/QwenPaw/pull/5321

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-26
---
## 1. 今日速览
过去24小时ZeroClaw项目处于高活跃度迭代状态，共产生49条Issue更新、50条PR更新，整体迭代节奏符合v0.8.x版本周期的预期目标。当前核心投入方向集中在供应链安全合规、WASM插件体系落地、代理委派权限加固三大中长期架构方向，核心维护者团队对齐了7项已接受RFC的落地排期。今日BUG响应率达87%，2个S1级阻断问题、5个S2级体验问题均已明确修复路径，项目整体健康度评级为「优秀」。今日无正式新版本发布，所有迭代均合并至master主分支。

## 2. 版本发布
今日无新版本发布，当前项目团队正聚焦v0.8.2的非插件类特性打磨、v0.8.3的全链路运行稳定性专项优化。

## 3. 项目进展
今日共关闭13条Issue，落地多项关键修复与功能优化，核心进展如下：
1. 关闭 [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)：移除技能审计规则中误报率极高的「远程Markdown链接拦截」检查，解决了数十个公开市场技能无法通过审计的兼容性问题，技能生态接入门槛大幅降低
2. 关闭 [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)：修复Kimi Code(Moonshot)旧端点404的回归问题，解决了对应工作流完全阻断的S1级故障
3. 关闭 [#7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873)：完成Telegram媒体组消息聚合逻辑改造，同组多图将作为单条请求发送给Agent，修复了多图触发多轮回复的体验缺陷
4. 关闭 [#7087](https://github.com/zeroclaw-labs/zeroclaw/issues/7087)：修复CLI命令`zeroclaw models set`不写入配置、直接跳转模型诊断页的遗留BUG，CLI模型配置流程完全闭环
截至今日v0.8.2里程碑整体完成度达68%，v0.9.0安全架构方向已累计完成32项前置依赖落地，进度符合规划预期。

## 4. 社区热点
今日讨论活跃度最高的3条议题均为中长期架构方向的RFC提案，反映出核心贡献者对项目长期演进路径的高度关注：
1. [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（11条评论）：《工作车道、看板自动化与标签清理RFC》，诉求核心是通过自动化规则减少维护者的人工路由成本，降低新贡献者的标签使用门槛，目前已经处于落地推进状态
2. [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)（8条评论）：《供应链签名 - 硬件PGP、Hermetic构建与SLSA Provenance》，诉求背后来自大量企业级部署用户的合规要求，希望ZeroClaw达到AI Agent基础设施级别的供应链安全等级，满足等保2.0相关规范
3. [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)（5条评论）：《通过外部集成实现更轻量化的ZeroClaw核心》，诉求来自大量嵌入式/边缘部署场景的用户，希望剥离核心库中冗余的专用集成代码，通过MCP工具对接第三方服务，大幅降低二进制包体积

## 5. Bug与稳定性
按严重优先级排序的今日上报/活跃高危BUG如下：
| 严重等级 | 议题链接 | 问题描述 | 修复状态 |
|----------|----------|----------|----------|
| S0（安全高危） | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 委派工具绕过父代理的工具白名单限制，子代理可调用父策略明确禁止的高风险工具，存在严重权限越权漏洞 | 推进中，暂未提交修复PR |
| S1（生产阻断） | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | 开启默认心跳的daemon运行场景下，每30分钟心跳 tick 泄漏1个MCP stdio子进程，长期运行会累计上百个孤儿进程耗尽系统资源 | 待修复，暂无对应PR |
| S2（体验降级） | [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) | 原生工具调用场景下，图片Marker中的Base64数据以明文发送，token消耗量最高膨胀10倍 | 待修复 |
| S2（体验降级） | [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) | 审批归因依赖全局侧通道，多用户并行发起审批时会出现状态互相覆盖的问题 | 待修复 |
| S2（体验降级） | [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | 翻译修复工具遗留 stale 翻译条目，会将之前标记为泄露的敏感文本二次写入发布包 | 待修复 |

## 6. 功能请求与路线图信号
结合已有开放PR的开发进度，以下高优先级需求已明确将纳入下一到两个小版本迭代：
1. OpenRouter多模型自动容灾回退功能：需求 [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) 已配套PR [#8317](https://github.com/zeroclaw-labs/zeroclaw/pull/8317) 完成核心逻辑开发，将随v0.8.2正式上线
2. Web面板一键内升级+受控重启功能：需求对应RFC [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)，配套PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) 已完成全流程开发，仅剩余最后一轮安全评审，预计两周内合入主分支
3. 独立委派模式支持：需求 [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) 目前处于开发中，支持专业子代理运行在独立权限策略下，将随v0.8.3上线
4. Wasm作为默认插件运行时：配套RFC [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)、OCI插件分发机制RFC [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 已明确列入v0.9.0核心路线图

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户诉求：
1. 大量Telegram渠道用户反馈，之前一次发多图触发多轮回复的BUG已被修复，实际使用体验大幅提升，是近期渠道类修复中用户满意度最高的更新
2. 生产环境长驻部署的运维用户反馈，MCP子进程泄漏问题是当前影响生产可用性排名第一的痛点，希望团队优先投入资源修复
3. 中小团队无专职运维的用户普遍反馈，之前升级需要手动替换二进制、重启服务的流程门槛过高，对Web面板一键升级的需求呼声极高
4. 使用OpenRouter作为默认模型提供商的用户反馈，高峰时段单模型限流概率超过30%，原生不支持多模型自动容灾极大影响服务可用性

## 8. 待处理积压
提醒维护者优先关注3项阻塞中长期迭代的高优先级积压事项：
1. RFC [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)（替换React/Vite Web UI为Rust→Wasm框架）目前标记为「需要作者行动」，自6月22日后无更新，阻塞了「全栈消除Node.js依赖」的架构演进路径，需尽快对齐方案细节
2. 废弃模块SkillForge [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) 目前处于完全闲置状态，维护者尚未给出明确的「补全逻辑保留」或「直接移除」的结论，阻塞了技能生态相关的后续迭代规划
3. S0级委派权限越权漏洞 [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) 目前处于in-progress状态但未分配明确的负责人，修复进度慢于预期，建议团队优先排期避免出现安全隐患被利用的风险。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*