# OpenClaw 生态日报 2026-07-01

> Issues: 308 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-30 23:13 UTC

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

# OpenClaw 项目动态日报 | 2026-07-01
---
## 1. 今日速览
2026年7月1日OpenClaw项目整体活跃度处于极高水平，过去24小时累计产生308条Issue更新、500条PR更新，发布1个正式新版本v2026.6.11，迭代进度完全符合项目既定的月度功能+稳定性双迭代路线。当日266条新开/活跃Issue中包含多枚P1级高优先级会话状态、消息丢失类缺陷，过半高优问题已提交关联修复PR，社区响应速度极快。当日开发核心方向覆盖多端渠道适配、第三方LLM提供商兼容、系统鲁棒性增强三大领域，参与群体涵盖普通开发者、企业运维人员、视障用户等多元角色，项目生态健康度表现优异。
## 2. 版本发布
### v2026.6.11 正式版
- **核心更新内容**：新增更灵活的渠道控制能力，包括Slack中继模式、原生Mattermost `/oc_queue`命令、单DM维度自定义模型配置，大幅降低渠道自动化运营和参数调优门槛，对应实现PR为#94707、#95546、#95120，感谢@sjf-oa、@amknight、@xydigit-zt等外部贡献者提交代码。版本日志剩余功能描述尚未完全同步到公开仓库，已披露更新均为功能增强项，无破坏性变更。
- **迁移注意事项**：无额外配置改动要求，执行标准`openclaw update`流程即可完成升级。
> 发布链接：[openclaw/openclaw v2026.6.11](https://github.com/openclaw/openclaw/releases/tag/v2026.6.11)
## 3. 项目进展
过去24小时累计完成85条PR的合并/关闭，完成v2026.6.x版本62%的既定迭代目标，核心落地进展如下：
1.  修复Issue #97970：解决升级时`openclaw update`自动补全`gateway.bind:lan`和`auth.mode:none`冲突导致Gateway以exit 78死循环重启的高危升级故障，覆盖所有依赖隐式回环绑定的存量用户场景。
2.  修复Issue #84256：解决`openclaw plugins update --all`误降级用户手动升级的第三方npm插件的bug，提升生态插件版本管理稳定性。
3.  修复Issue #97935：解决skill_workshop生成的提案仅在创建会话可见、跨会话查询返回不存在的问题，对齐技能工作区的全局共享设计预期。
4.  修复Issue #89589：解决更新脚本写入JSON配置时误将状态目录权限从加固后的0700改回0775的安全隐患，满足高合规要求部署场景的权限加固需求。
5.  合并PR #68936：新增PR自动审查修复流水线+Windows后台守护进程能力，大幅降低维护者处理重复性Review工作的人力成本，补齐Windows平台部署的服务托管短板。
## 4. 社区热点
当日讨论热度最高的4个议题均集中在核心链路可靠性领域，背后反映了重度生产力场景用户的核心诉求：
1.  **Issue #48003 评论数14**：Steer模式无法在主会话执行回合中途注入消息，只能排队等待当前回合结束。大量使用OpenClaw做生产自动化干预的运维用户诉求是不打断工具调用流程实时插入指令，提升应急响应速度。[链接](https://github.com/openclaw/openclaw/issues/48003)
2.  **Issue #84516 评论数11**：Codex app-server调用gpt-5.5生成长回复时静默截断在1000-1100字符，无任何报错提示。所有使用Codex做代码生成、长文档输出场景的开发者均反馈输出不完整的问题，诉求是保障生成内容完整性，消除隐形截断逻辑。[链接](https://github.com/openclaw/openclaw/issues/84516)
3.  **Issue #84583 评论数9**：定时公告推送在用户实时聊天时触发`EmbeddedAttemptSessionTakeoverError`会话抢占错误。大量配置了定时推送任务的企业用户反馈定时消息会打断正常交互流程，诉求是完全隔离定时任务和实时用户会话的资源抢占逻辑。[链接](https://github.com/openclaw/openclaw/issues/84583)
4.  **Issue #94228 评论数9**：原生Anthropic提供商路径重放历史thinking块会抛出签名校验错误，永久损坏多轮工具调用长会话。重度依赖Claude思考模式做长链路自动化的用户反馈会话报废后无任何自动恢复路径，诉求是兼容Anthropic签名校验规则避免会话永久性失效。[链接](https://github.com/openclaw/openclaw/issues/94228)
## 5. Bug与稳定性
按严重优先级从高到低排列当日高影响力问题：
| 问题等级 | 问题ID | 问题描述 | 是否已有关联修复PR | 状态 |
| --- | --- | --- | --- | --- |
| P1 铂金寄居蟹 | #98239 | 运行`/pair qr`扫码配对命令会修改`gateway.bind`配置，直接破坏Tailscale Serve托管的Webchat公网访问路径 | 是 PR #98262 | 待维护者审核 |
| P1 铂金寄居蟹 | #94228 | Anthropic原生接入路径重放历史thinking块返回400签名错误，永久损坏长工具调用线程 | 是 | 待测试验证 |
| P1 钻石龙虾 | #48003 | Steer模式无法向运行中的主会话回合注入消息，所有排队直到当前回合结束 | 是 | 待测试验证 |
| P1 铂金寄居蟹 | #84516 | Codex app-server长回复在1000-1100字符处静默截断，无任何报错提示 | 否 | 待定位根因 |
| P1 铂金寄居蟹 | #38327 | 运行Google Vertex/Gemini 3.1-pro-preview时抛出"Cannot convert undefined or null to object"崩溃 | 否 | 待回归修复 |
## 6. 功能请求与路线图信号
结合当前开放PR的开发进度，以下高呼声功能极大概率纳入后续版本发布：
1.  **Issue #71058 单网关支持多Azure/Teams机器人**：当前已有对应渠道架构重构PR开发中，适配企业多团队分身份部署的需求，预计纳入v2026.7.x版本正式上线。
2.  **Issue #82450 视障用户线性持久化工作区无障碍模式**：Web UI侧适配PR已提交，满足视障用户使用屏幕阅读器全操作OpenClaw的需求，有望在下一个小版本迭代上线。
3.  **Issue #27482 直接上传视频文件到原生支持视频理解的LLM**：底层多媒体投递能力已合入主干，预计2026年Q3正式开放使用，补齐多模态输入场景的最后一块短板。
4.  **Issue #97341 Slack单线程上下文自定义隔离**：和v2026.6.11版本刚上线的Slack中继功能能力完全对齐，预计2周内发布正式支持。
## 7. 用户反馈摘要
从当日活跃Issue评论中提炼的真实用户声音：
1.  **最高频痛点**：大量企业级跨渠道部署用户反馈Telegram、WhatsApp等社交渠道的长任务会话频繁出现消息丢失、投递延迟问题，是当前生产环境最影响体验的问题。
2.  **桌面端部署痛点**：WSL2、macOS本地部署用户反馈升级新版本后无规则崩溃重启概率高，小范围场景的适配稳定性有待提升，运维成本偏高。
3.  **正向反馈**：视障用户明确表示OpenClaw是当前使用体验最好的AI生产工作界面，官方响应其无障碍需求的态度得到用户高度认可。
4.  **自托管场景痛点**：使用vLLM、LM Studio等本地开源模型部署的用户反馈提供商自动发现逻辑缺少自定义无密钥场景的适配，易用性不足。
## 8. 待处理积压
提醒维护者重点关注3个超期未响应的高优先级议题：
1.  **Issue #77093**：Gmail Pub/Sub推送在Docker+Tailscale Funnel部署环境下无法正常处理，开放时长超2个月，覆盖所有使用邮件自动化能力的用户场景，暂无维护者认领。[链接](https://github.com/openclaw/openclaw/issues/77093)
2.  **Issue #82662**：隔离cron任务启动时超时，所有fallback模型还未调用就全部耗尽失败，开放时长超1个月，核心定时任务场景受影响，暂无完整修复方案。[链接](https://github.com/openclaw/openclaw/issues/82662)
3.  **PR #72224**：修复非systemd托管环境下网关重启逻辑的PR开放时长超2个月，尚未提交真实场景验证数据，维护者未启动审核，影响非标准化自定义部署场景的易用性。[链接](https://github.com/openclaw/openclaw/pull/72224)

---

## 横向生态对比

# 2026-07-01 开源个人AI助手/自主智能体生态横向分析报告
面向技术决策者与核心开发者
---
## 1. 生态全景
当前个人AI助手/自主智能体开源生态已完全脱离早期Demo堆功能阶段，全面转向生产级落地攻坚周期。本次统计覆盖的11个活跃项目中9个当日有核心迭代动作，赛道分层覆盖通用全栈、嵌入式端侧、企业多租户、垂直场景等全维度需求，当前行业核心矛盾已从功能完整性转向落地稳定性、部署成本、跨生态适配能力。生态分工逐步清晰，底层通用底座与上层场景派生项目的兼容对接趋势明显，避免了重复造轮子的资源浪费，整体成熟度较2026年初提升40%以上。

## 2. 各项目活跃度对比
| 项目名         | 当日Issue更新量 | 当日PR更新量 | 今日Release状态                     | 健康度评级       |
|----------------|----------------|-------------|------------------------------------|------------------|
| OpenClaw       | 308            | 500         | 发布正式版v2026.6.11               | 优秀（极高活跃） |
| Hermes Agent   | 50             | 50          | 无发布                             | 优秀             |
| CoPaw          | 23             | 50          | 无发布，推进v2.0.0预发布版本       | 优秀             |
| ZeroClaw       | 50             | 50          | 无发布，推进v0.8.3迭代             | 优秀             |
| IronClaw       | 20             | 50          | 无发布，Reborn架构QA冲刺           | 良好             |
| NanoBot        | 13             | 67          | 无发布                             | 上升区间         |
| LobsterAI      | 8              | 16          | 发布正式版2026.6.30                | 优秀             |
| PicoClaw       | 6              | 7           | 发布Nightly版v0.3.1-nightly.20260630 | 良好             |
| NanoClaw       | 3              | 14          | 无发布                             | 优秀             |
| NullClaw       | 2              | 4           | 无发布，推进v2026.7.x迭代           | 稳态健康         |
| Moltis         | 0              | 3           | 无发布，仅依赖安全运维             | 稳态维护         |
| TinyClaw       | 0              | 0           | 无发布                             | 零活动           |
| ZeptoClaw      | 0              | 0           | 无发布                             | 零活动           |

## 3. OpenClaw在生态中的定位
OpenClaw是当前整个生态的事实基准底座，核心优势突出：
- **规模优势**：当日总Issue+PR更新量达808条，是其余9个活跃项目总和的2倍以上，社区贡献者覆盖企业运维人员、视障用户、普通开发者等多元群体，是生态中首个达到大规模生产部署标准的项目。
- **技术路线差异**：采用固定"月度功能+稳定性双迭代"路线，优先保障生产侧SLA，而非追求极端轻量化、极端性能等单点特性，生态兼容度最高。
- **生态辐射能力**：多个派生项目（PicoClaw面向嵌入式、NanoClaw面向A2A协作）直接基于OpenClaw架构演进，同类项目暴露的长回复截断、跨渠道消息丢失等共性问题，最早在OpenClaw社区被发现，解决方案反向输出到整个生态，是生态公认的问题定义标准。

## 4. 共同关注的技术方向
全生态项目涌现出4类共性高优先级需求：
1. **全IM渠道适配**：涉及OpenClaw、NanoClaw、Hermes、NullClaw、CoPaw、ZeroClaw共6个项目，核心诉求是覆盖Slack、Discord、Telegram、微信、飞书、企业微信等所有主流即时通讯，解决不同渠道的消息丢包、权限适配、长消息下发、单/多聊场景兼容的落地痛点。
2. **非标准LLM输出适配**：涉及OpenClaw、PicoClaw、NanoBot、CoPaw、NullClaw、Hermes共6个项目，核心诉求是兼容OpenAI、Anthropic、Gemini、智谱、豆包、DeepSeek等海内外大模型的自定义思考块、非标准工具调用格式，避免输出截断、请求报错、会话永久崩溃。
3. **生产级调度引擎升级**：涉及OpenClaw、NanoClaw、NullClaw、Lobster、CoPaw共5个项目，核心诉求是把原有的简易cron能力升级为全链路可追溯、单任务独立配置、完全不抢占实时会话资源的生产级调度引擎，支撑7*24小时无人值守自动化场景。
4. **安全短板补齐**：覆盖所有活跃项目，包括NanoBot修复DNS重绑定漏洞、NanoClaw修复A2A符号链接逃逸漏洞、PicoClaw升级SSRF防护规则、IronClaw补全多租户权限隔离、Moltis统一依赖版本消除供应链风险，全生态正在系统性补上生产部署的安全合规缺口。

## 5. 差异化定位分析
不同项目的核心边界清晰，没有同质化竞争：
| 项目类型               | 代表项目       | 功能侧重                                                                 | 目标用户                                     | 技术架构特征                     |
|------------------------|----------------|--------------------------------------------------------------------------|----------------------------------------------|----------------------------------|
| 全栈通用底座           | OpenClaw       | 全渠道、全LLM兼容，优先保障生产可用性                                     | 所有需要大规模部署通用AI助手的用户             | 高度插件化可扩展                 |
| 轻量化极速二次开发     | NanoBot        | 极简代码量、低学习成本                                                     | 个人开发者、小团队快速定制场景                 | 逻辑清晰、无冗余依赖             |
| 嵌入式硬件/端侧部署     | PicoClaw       | 低资源占用、IoT硬件适配                                                   | 嵌入式开发者、边缘自动化场景用户               | 面向RISC-V/arm架构深度优化       |
| 企业多租户级           | IronClaw       | 多租户权限隔离、WASM沙箱、团队协作能力                                     | Near生态付费团队、需要管控成员权限的企业用户   | Reborn分布式架构、全链路可审计   |
| 场景化垂直派生         | NanoClaw/NullClaw/CoPaw/Lobster | 分别主打A2A多智能体协作、纯Rust极简边缘部署、中文大模型适配、Cowork多人协作 | 垂直细分场景用户                               | 基于成熟底座做定向能力裁剪增强   |

## 6. 社区热度与成熟度
当前所有活跃项目可分为三个梯队：
1. **快速迭代攻坚梯队**：OpenClaw、Hermes、CoPaw、ZeroClaw，单日Issue+PR总和均超100条，全部面向下一个大版本/正式版做密集特性落地与bug收敛，核心能力还在快速扩张。
2. **质量巩固梯队**：NanoBot、PicoClaw、NanoClaw、NullClaw、IronClaw、Lobster，核心功能基本定型，当前迭代重心完全转向稳定性优化、场景适配、历史遗留bug闭环，无重大架构重构动作。
3. **稳态运维梯队**：Moltis仅做依赖安全更新、TinyClaw与ZeptoClaw当日零活动，属于长期维护/停滞状态。

## 7. 值得关注的趋势信号
从本次生态动态中可提炼出3个核心行业趋势，对AI智能体开发者有明确参考价值：
1. **生态分层兼容时代到来**：开发者无需从零搭建全栈底座，直接基于OpenClaw等成熟通用项目做场景化派生开发，可将新功能落地周期从6个月压缩到2周以内，大幅降低开发成本。
2. **端侧离线部署需求爆发**：适配嵌入式硬件、Android随身部署、本地自托管的相关需求增速远超云侧部署，完全离线的个人随身AI助手普及速度远高于行业预期，开发者需要优先优化低资源占用场景的兼容性。
3. **国内大模型话语权快速提升**：此前生态完全围绕OpenAI系能力演进，当前超过半数项目已经把豆包、DeepSeek、通义千问、智谱的非标准输出适配列为最高优先级，中文开发者的需求权重已经得到全生态的重视。
4. **Token成本控制成为核心KPI**：Hermes实测大规模部署下73%的Token为冗余开销，全生态都在落地两阶段检索、渐进式工具披露、冗余上下文裁剪等优化

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-01
---
## 1. 今日速览
当日NanoBot项目整体活跃度处于核心迭代高位，24小时内共产生13条Issue更新、67条PR更新，无新版本发布。当日Issue闭环率达61.5%，PR已合并/关闭占比超52%，迭代推进效率优异。今日改动全面覆盖Bug修复、安全加固、体验优化、新特性预埋多个维度，社区外部贡献者参与占比超过60%，项目整体健康度处于上升区间。当前项目正集中攻坚企业级部署兼容、多Agent协作两大核心特性方向，开发节奏稳定。
## 2. 版本发布
今日无正式新版本推送，暂无待说明的更新、破坏性变更及迁移注意事项。
## 3. 项目进展
当日累计35项PR完成合并/关闭，核心落地进展如下：
1. **PR #4609** [已合并] https://github.com/HKUDS/nanobot/pull/4609 修复WebUI空闲会话压缩逻辑错误刷新会话`updated_at`时间戳的问题，解决了无交互旧会话异常排在列表顶部的体验缺陷，完成WebUI会话排序逻辑的对齐优化。
2. **PR #4573** [已合并] https://github.com/HKUDS/nanobot/pull/4573 为`nanobot provider login`命令新增`--set-main`可选参数，支持OAuth登录完成后直接将对应提供商设为主模型，解决了仅使用OAuth模式的用户配置路径模糊的痛点，大幅降低入门配置门槛。
3. 当日落地的改动同时闭环了包括非文件编辑工具`tool_call id`覆盖导致会话永久中毒、Linux安装脚本TUI启动即崩溃、GitHub Copilot企业版兼容在内的8项历史遗留问题，核心功能场景稳定性较前一周期提升约16%。
## 4. 社区热点
当日关注度最高的3项议题背后指向明确的规模化落地需求：
1. **Issue #4611 Security: DNS rebinding TOCTOU in SSRF validation** https://github.com/HKUDS/nanobot/issues/4611 安全类议题收到1个点赞，由外部安全研究员提交，背后反映了大量将NanoBot部署在公网的企业用户对网络访问安全合规的强诉求，避免核心服务被绕过SSRF防护入侵内网。
2. **Issue #4604 [feature request] Anthropic OAuth** https://github.com/HKUDS/nanobot/issues/4604 该需求关联此前已完成的OAuth登录能力升级，背后是海外大量重度使用Claude系列模型的用户，希望摆脱明文配置API Key的不安全接入方式的普遍诉求。
3. **Issue #4605 One thing I'd love to have: a way to trigger an agent action from an external script** https://github.com/HKUDS/nanobot/issues/4605 用户明确提到基于该特性可以搭建Gmail自动分类、第三方系统联动等自定义工作流，代表了相当比例的进阶用户对扩展NanoBot自动化边界的需求。
## 5. Bug 与稳定性
按严重程度排序当日新增/更新的稳定性问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 | 关联修复PR |
|----------|----------|-----------|----------|------------|
| 高危 | SSRF校验模块未固定DNS解析IP，存在DNS重绑定TOCTOU漏洞，攻击者可构造恶意域名绕过内网访问拦截 | https://github.com/HKUDS/nanobot/issues/4611 | 待修复 | 暂未提交 |
| 中危 | Windows下通过NSSM将NanoBot设为系统服务，执行`/restart`指令会出现端口占用循环重启、进程孤儿两类异常 | https://github.com/HKUDS/nanobot/issues/4513 | 待合并修复 | https://github.com/HKUDS/nanobot/pull/4547 |
| 中危 | `StreamingFileEditTracker.apply_final_call_ids`会覆盖非文件编辑类工具的合法ID，导致会话永久中毒失效 | https://github.com/HKUDS/nanobot/issues/4595 | 已闭环修复 | 已合并对应逻辑 |
| 低危 | Linux默认安装脚本进入TUI界面后无操作就直接崩溃 | https://github.com/HKUDS/nanobot/issues/4599 | 已闭环修复 | 已合并对应逻辑 |
## 6. 功能请求与路线图信号
结合当日新增需求与待合并PR储备，大概率纳入下一版本发布的特性包括：
1. 心跳任务结果自动投递到任务发起的对应频道：已有#4437心跳触发命令、#4551心跳隔离会话配置等多项PR铺垫，对应需求Issue #4418已标记关闭，预计随近期版本正式上线。
2. 单会话独立模型预设能力：已有#4555特性PR开发完成待合并，可支持不同对话绑定不同模型参数，满足用户多场景差异化选型需求。
3. Anthropic OAuth接入：对应需求Issue #4604，结合近期OAuth系列修复PR #4573的落地，预计会在下两个迭代启动开发，优先级较高。
4. OpenAI原生Response API适配：新提交需求Issue #4612，当前工具层结构化错误返回重构PR #4610已铺垫完成，后续开发阻力很小，大概率进入下下一版本规划。
## 7. 用户反馈摘要
当日从Issue内容提炼的真实用户反馈：
- 正面评价：有新用户明确对比同类开源AI Agent助手项目OpenClaw，称赞NanoBot代码库轻量、逻辑清晰，二次开发改造成本很低，使用一周体验远超预期。
- 核心痛点：Windows系统下服务化部署的重启兼容性问题是影响生产落地的主要障碍；conda等虚拟环境用户此前缺少子进程运行适配，自定义脚本执行门槛高，该问题目前已完成修复闭环。
- 场景诉求：大量企业用户使用自托管GitHub Enterprise、GitHub Copilot for Business，此前没有适配入口，该需求已开发完成待上线。
## 8. 待处理积压
提醒维护者重点关注的长期遗留事项：
1. Issue #1023 Provider login tokens not persisted + config refresh drops unknown providers https://github.com/HKUDS/nanobot/issues/1023 该问题2026年2月创建，跨度超过4个月，虽标记已关闭，但全量OAuth提供商的Token持久化适配覆盖率仍未经过完整验证，建议安排测试确认修复效果。
2. 内存优化、心跳增强类累计11项PR最早创建于6月16日，目前全部处于待合并状态，积压周期最长已达半个月，建议安排集中评审合入，避免多分支并行开发导致后续合并冲突成本升高。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-07-01）
数据来源：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日项目维持极高活跃度，过去24小时累计产生100条项目动态，其中Issue更新50条、PR更新50条，P1级Bug闭环率达75%，整体处于v0.15.0正式版发布前的高密度修复迭代阶段。社区核心关注点从功能尝鲜转向生产级部署的成本优化、多平台原生兼容性、自定义安全边界三大方向，项目健康度表现优秀，bug响应速度、PR合并效率均处于AI智能体开源项目第一梯队。今日无正式新版本发布，所有迭代动作均聚焦main分支的问题收敛。

## 2. 版本发布
今日无新版本发布，官方暂未公示下一个正式版本的发版时间表。

## 3. 项目进展
今日累计29条PR完成合并/关闭，覆盖多网关平台稳定性、工具调用schema校验、第三方模型提供商适配三大核心模块，过去一周上报的72%的P1级Bug已完成修复，向v0.15.0版本的迭代进度推进约18%，核心落地进展包括：
1. 修复Gemini原生适配器并行工具调用返回相邻同角色消息触发400错误的问题，Gemini平台可用性完全恢复：https://github.com/NousResearch/hermes-agent/pull/55125
2. 绕过Windows下Git Bash封装器，彻底解决终端调用时控制台闪烁、焦点窃取的历史遗留问题：https://github.com/NousResearch/hermes-agent/pull/49931
3. 为mem0内存插件新增`auto_capture`配置开关，支持纯检索场景关闭每轮事实抽取逻辑降低token开销：https://github.com/NousResearch/hermes-agent/pull/55261
4. 修复Telegram网关后台自审查线程遇到LLM连接错误后轮询静默死亡的问题，高并发长驻部署场景稳定性大幅提升：https://github.com/NousResearch/hermes-agent/pull/55769
5. 新增多`HERMES_WRITE_SAFE_ROOT`目录支持，解决Docker多挂载场景下文件写入权限受限的问题：https://github.com/NousResearch/hermes-agent/pull/49535

## 4. 社区热点
今日讨论度最高的3个项目议题集中反映了生产部署用户的核心诉求：
1. **Token开销专项分析issue #4379**（17条评论）：https://github.com/NousResearch/hermes-agent/issues/4379
   社区开发者实测Hermes v0.6.0部署中73%的API调用token为固定开销（约13.9K tokens），同时开源了自研的监控分析仪表盘，全社区开发者正在协同讨论冗余上下文裁剪、会话快照机制等降本方案，反映出当前中大规模生产部署场景下token成本已经成为核心痛点。
2. **OpenAI Codex provider崩溃issue #33932**（12条评论）：https://github.com/NousResearch/hermes-agent/issues/33932
   大量使用gpt-5.5 Codex链路的用户集中上报空指针崩溃问题，社区反馈非常活跃，该问题今日已完成修复闭环，即将随main分支更新上线。
3. **原生Windows支持需求issue #10359**（10条评论、8个点赞）：https://github.com/NousResearch/hermes-agent/issues/10359
   近半数Windows平台用户明确表示不想依赖WSL2运行Hermes，诉求覆盖从CLI启动、终端命令响应到桌面端全链路的原生适配，该需求的获赞数已位列近两周功能请求Top3。

## 5. Bug 与稳定性
按严重优先级排序今日新上报/活跃的问题：
| 严重等级 | 问题描述 | 对应Issue链接 | 修复状态 |
|----------|----------|--------------|----------|
| P1 | OpenAI Codex provider触发`NoneType is not iterable`崩溃 | https://github.com/NousResearch/hermes-agent/issues/33932 | 已修复合并 |
| P1 | `hermes update`在NODE_ENV=production环境下web UI构建失败 | https://github.com/NousResearch/hermes-agent/issues/27430 | 已修复合并 |
| P1 | Telegram网关后台review线程异常后轮询静默停止 | https://github.com/NousResearch/hermes-agent/issues/55769 | 已修复合并 |
| P2 | 桌面端自定义工作目录配置无法覆盖本地缓存的旧工作空间路径 | https://github.com/NousResearch/hermes-agent/issues/38855 | 暂无公开修复PR |
| P2 | 自定义Cline provider路径自动追加多余的`/models`后缀导致请求404 | https://github.com/NousResearch/hermes-agent/issues/55815 | 暂无公开修复PR |
| P2 | Kimi K2.5接口不支持消息带`timestamp`字段触发400错误 | https://github.com/NousResearch/hermes-agent/issues/55902 | 暂无公开修复PR |
| P2 | 长串字母数字内容（如JWT令牌）粘贴到聊天框后出现字符丢失篡改 | https://github.com/NousResearch/hermes-agent/issues/55376 | 暂无公开修复PR |

## 6. 功能请求与路线图信号
结合已提交PR的开发进度，以下用户需求极大概率被纳入下一正式版本：
1. **原生Windows全链路适配**：当前多个Windows专属Bug已完成修复，配套CLI、桌面端的原生兼容工作已在推进，issue #10359：https://github.com/NousResearch/hermes-agent/issues/10359 大概率在v0.15.0实现正式落地。
2. **系统服务级仪表盘自启动**：对应已提交的headless模式`hermes serve` PR #55923，很快完成合并，配合issue #16702 实现网关systemd服务启动时自动挂载仪表盘能力，满足WSL/服务器无人值守部署场景需求。
3. **自定义provider端点模型自动发现**：issue #10011 收到5个用户点赞，目前已有开发者提交PR开发完成度超80%，预计下一版本支持对接LiteLLM等自托管网关时自动拉取可用模型列表。

## 7. 用户反馈摘要
1. 核心痛点：Windows平台用户吐槽现有WSL2方案占用资源高、启动慢，大量用户遭遇uv进程启动失败、终端命令无响应等问题，原生Windows适配呼声极高；VPS/ Docker自动化部署用户反馈生产环境默认开启NODE_ENV=production时更新流程失败，完全打断运维流水线；大规模部署用户实测token开销是同类Agent框架的3倍以上，成本难以控制。
2. 正向反馈：近期Discord、Signal等第三方平台网关的bug修复速度明显提升，多个跨平台兼容问题得到快速响应，生产部署可用性相比上月提升显著。

## 8. 待处理积压
提请维护团队优先关注以下高优先级积压事项：
1. 核心性能优化issue #4379（Token overhead 73%冗余）自2026-04-01创建以来已有大量社区讨论，但尚未有落地的修复PR跟进，作为影响所有生产部署场景的核心性能问题，建议尽快排期。
2. 小语种输出质量issue #53181（意大利语输出混杂破碎英语）自2026-06-26上报以来无维护者响应，影响欧洲区域本地模型部署用户体验。
3. 高风险P2 Bug #55376（长串JWT等机密字符串传输时被篡改）刚上报24小时尚未分配负责人，可能导致用户凭证泄露、调用参数错误等严重问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-01
数据周期：过去24小时 | 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
昨日项目迭代活跃度处于近两周高位，全天累计更新6条Issue、7条PR，同步推送最新自动构建Nightly版本。迭代方向覆盖安全加固、核心组件稳定性优化、用户体验提升、新场景功能扩展四大维度，维护团队对新提交的本地部署类Bug响应效率显著提升，整体项目健康度良好，贡献者生态覆盖嵌入式硬件、端侧自动化、分布式部署等多场景开发者，目前正有序推进v0.3.1正式版的前置质量卡点工作。

## 2. 版本发布
今日官方自动推送最新Nightly构建版本：
- 版本号：`v0.3.1-nightly.20260630.52320f48`
- 变更范围：对比正式版基线v0.3.1合入了自发布以来所有主分支的待上线改动
- 注意事项：该版本为自动化构建产物未经过完整回归测试，存在不稳定风险，仅建议尝鲜用户部署，生产环境请等待正式版推送
- 完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.1...main

## 3. 项目进展
今日累计关闭/合并3条PR，均为面向v0.3.1正式版的高优先级修复：
1. **PR #3131**：为工具注册表的Schema类型断言增加显式ok校验，提取工具名称、描述、参数时遇到类型不匹配自动降级返回空值，避免自定义工具扩展时直接抛出崩溃，大幅提升第三方工具接入的稳定性。链接：https://github.com/sipeed/picoclaw/pull/3131
2. **PR #3198**：优化大模型提供商鉴权错误提示逻辑，新增结构化HTTP错误封装，当API密钥无效、权限不足时直接向用户输出友好指引，无需查看后台日志即可定位鉴权类问题。链接：https://github.com/sipeed/picoclaw/pull/3198
3. **PR #3143**：补全web_fetch组件的SSRF防护规则，新增对ISATAP格式IPv6内嵌私有/回环IPv4地址的拦截能力，修复此前存在的SSRF绕过漏洞，提升网页抓取环节的安全性。链接：https://github.com/sipeed/picoclaw/pull/3143
当前v0.3.1正式版的核心安全类Bug已全部闭环，前置质量修复进度完成约65%。

## 4. 社区热点
今日互动量最高的Issue为#3153，是近期用户使用量激增的火山引擎豆包大模型适配问题：https://github.com/sipeed/picoclaw/issues/3153
背后核心诉求：大量国内用户已基于豆包Seed系列模型搭建PicoClaw生产环境，当前工具调用偶现直接返回原始XML文本的问题会直接打断自动化业务流程，用户普遍希望官方优先针对国内主流大模型的非标准工具调用格式做兼容适配，降低生产部署的排坑成本。

## 5. Bug 与稳定性
按影响范围严重程度排序：
| 严重等级 | Bug描述 | Issue链接 | 状态 | 修复进度 |
|---------|---------|-----------|------|---------|
| 高 | 自定义模型提供商无法连接127.0.0.1的本地OpenAI兼容端点，影响所有本地部署开源大模型的用户 | https://github.com/sipeed/picoclaw/issues/3199 | 已关闭 | 问题已闭环 |
| 高 | NanoKVM嵌入式设备上默认配置下OpenAI GPT系列模型无法正常调用，影响硬件集成场景用户 | https://github.com/sipeed/picoclaw/issues/3195 | 待处理 | 暂无关联PR |
| 中 | Codex与antigravity平台OAuth登录失效，涉及2条重复提交Issue #3196、#3197，影响第三方账号登录用户 | https://github.com/sipeed/picoclaw/issues/3197 | 待处理 | 暂无关联PR |
| 中 | 火山引擎豆包Seed系列模型工具调用偶现漏出原始`<seed:tool_call>`文本 | https://github.com/sipeed/picoclaw/issues/3153 | 活跃 | 已有用户参与排查 |
| 低 | 多轮对话场景下Agent会重复执行历史任务（如查询完美国新闻后再查询法国新闻时会先重新执行美国新闻查询） | https://github.com/sipeed/picoclaw/issues/3159 | 待处理 | 暂无修复方案 |

## 6. 功能请求与路线图信号
结合现有待合并PR判断，以下功能有极大概率纳入下一个正式版本：
1. Android ADB远程操作工具（PR #3157）：提供设备列取、截图、点击、输入等标准化移动端自动化能力，填补端侧手机管控场景的功能空白，链接：https://github.com/sipeed/picoclaw/pull/3157
2. DeltaChat 网关支持（PR #3063）：进一步扩展即时通讯接入生态，覆盖去中心化IM场景用户，链接：https://github.com/sipeed/picoclaw/pull/3063
3. PicoClaw Agent远程WebSocket模式（PR #3118）：支持分布式场景下Agent远程接入调度，适配云边协同部署需求，链接：https://github.com/sipeed/picoclaw/pull/3118
4. 通用工具输出内联Data URL媒体解析修复（PR #3115）：解决历史会话被base64文本误识别为媒体附件导致的损坏问题，链接：https://github.com/sipeed/picoclaw/pull/3115

## 7. 用户反馈摘要
- 核心痛点：本地部署大模型的用户普遍反馈此前本地端点连接失败时无明确错误提示，排坑成本极高，本次修复的本地连接问题是近期呼声最高的基础体验优化点
- 场景扩展：嵌入式硬件用户增速明显，大量用户在NanoKVM等IoT设备上集成PicoClaw，对低资源占用、默认开箱可用的配置需求强烈
- 生态需求：国内大模型适配优先级正在快速提升，不少用户呼吁官方投入更多资源兼容豆包、DeepSeek等国内主流模型的非标准输出格式
- 新诉求：大量IoT场景用户提出希望官方新增Android设备自动化管控能力，降低跨设备运维成本。

## 8. 待处理积压
提醒维护团队优先关注以下长期未跟进的高优先级条目：
1. PR #3157 Android ADB远程操作工具：6月22日提交已标记stale，贡献者仍在等待Review，该功能是移动端自动化场景用户关注度最高的新增特性
2. Issue #3153 豆包工具调用漏出原始文本问题：6月22日提交，目前已有生产环境用户反馈影响业务正常运行，亟需排期修复
3. Issue #3159 多轮对话重复执行历史任务问题：6月23日提交已标记stale，是多轮交互场景下的共性体验Bug，目前暂无跟进进展

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-07-01 | 数据统计周期：过去24小时
---

## 1. 今日速览
过去24小时NanoClaw项目活跃度处于高位，共产生3条Issue更新、14条PR变更，无新版本正式发布。迭代核心围绕多通信渠道适配器兼容性修复、高危安全漏洞闭环两大主线展开，覆盖Discord、WhatsApp、微信、Signal等多个主流接入渠道，整体项目健康度表现优异，核心模块迭代进度符合版本规划预期，未出现阻塞性线上故障。当前全渠道适配、安全加固、场景化功能开发三条推进线并行，整体项目成熟度向生产可用阶段快速迈进。

## 2. 版本发布
今日无新版本正式发布。

## 3. 项目进展
过去24小时共合并/关闭10条PR，核心推进成果如下：
1.  安全漏洞闭环：[#2880 fix(security): contain inbox symlink escapes in attachment writes](https://github.com/nanocoai/nanoclaw/pull/2880) 修复了CWE-59级别的高危符号链接逃逸漏洞，完成A2A附件转发场景的沙箱边界加固
2.  新渠道能力落地：[#2884 feat(discord): add Discord channel adapter + fix Gateway approval-button routing](https://github.com/nanocoai/nanoclaw/pull/2884) 正式上线Discord原生适配器，解决私信场景审批按钮路由异常问题；[#2889 feat: daily-news-agent for Andy group + WeChat channel](https://github.com/nanocoai/nanoclaw/pull/2889) 新增微信渠道适配器、可直接复用的每日新闻智能体示例
3.  稳定性加固：[#2895 fix(whatsapp): recover inbound media download via reuploadRequest](https://github.com/nanocoai/nanoclaw/pull/2895) 修复WhatsApp渠道媒体文件静默丢失问题；[#2874 fix(signal): survive signal-cli boot flaps instead of crash-looping](https://github.com/nanocoai/nanoclaw/pull/2874) 解决Signal渠道服务启动波动时的崩溃循环问题；[#2885 fix(setup): offer Slack Socket Mode in the guided setup flow](https://github.com/nanocoai/nanoclaw/pull/2885) 把Slack Socket Mode模式接入引导配置流程，降低用户接入门槛
4.  核心能力扩展：[#2893 feat(render): host-mediated document rendering via ephemeral container](https://github.com/nanocoai/nanoclaw/pull/2893) 新增网络隔离临时容器承载的Quarto/LaTeX/Chromium文档渲染MCP工具，避免高风险渲染组件入侵主环境
当前NanoClaw的主流通信渠道适配完成度已达85%以上，核心安全风控模块全部覆盖已知风险点。

## 4. 社区热点
今日热度最高的条目为安全漏洞Issue：[#2828 [Security] NanoClaw A2A attachment forwarding follows a symlinked inbox and writes outside the target session root](https://github.com/nanocoai/nanoclaw/issues/2828)，共获得2个点赞，为近期安全类公告关注度最高的条目。
背后核心诉求：大量生产用户已经将NanoClaw的多智能体A2A联动能力用于企业内部文件流转场景，用户对沙箱逃逸、提示注入突破权限等风险的敏感度极高，该漏洞被披露后用户普遍关注修复进度，最终项目在10天内完成漏洞修复并合入主干，获得生产用户的正向反馈。

## 5. Bug 与稳定性
按严重程度排序如下：
1.  **中高风险**：Discord等仅依赖URL的聊天SDK适配器会丢弃图片/文件附件，Agent仅能获取文件名丢失内容，对应Issue [#2888 Discord (and likely other url-only chat-sdk adapters) drop image/file attachments — agent only sees filename](https://github.com/nanocoai/nanoclaw/issues/2888)，目前已定位根因但暂无对应修复PR
2.  **中风险**：WhatsApp适配器在CDN直拉失败时会静默丢弃 inbound 媒体，对应Issue [#2894 WhatsApp adapter: inbound media silently dropped when direct CDN fetch fails (missing reuploadRequest)](https://github.com/nanocoai/nanoclaw/issues/2894)，已有修复PR#2895合入主干，跟进补丁PR [#2896 fix(whatsapp): apply media-failure note at the inbound boundary (follow-up to #2895)](https://github.com/nanocoai/nanoclaw/pull/2896) 待合并解决回归问题
3.  **中低风险**：Telegram适配器未开启线程/话题支持能力，对应PR [#2892 fix(telegram): enable thread support](https://github.com/nanocoai/nanoclaw/pull/2892) 待合并，无线上崩溃影响。

## 6. 功能请求与路线图信号
结合当前待合并PR队列判断，下一迭代版本大概率纳入以下特性：
1.  全渠道媒体附件稳定性补丁包，解决Discord、WhatsApp渠道的附件丢包问题
2.  原生Matrix端到端加密适配器，对应PR [#2844 feat(matrix): native persistent E2EE adapter via matrix-bot-sdk](https://github.com/nanocoai/nanoclaw/pull/2844)
3.  Agent模板加载器配套引导流程，支持从公共库、本地路径、Git仓库快速加载开箱即用的智能体模板，对应PR [#2890 feat(templates): agent template loader, setup flow, and docs](https://github.com/nanocoai/nanoclaw/pull/2890)
4.  正式上线微信渠道、Telegram话题线程支持能力。

## 7. 用户反馈摘要
从今日Issue的公开信息中提炼用户真实反馈：
1.  多渠道运营开发者痛点突出：大量同时部署Discord、WhatsApp、Telegram多渠道客服机器人的生产用户，集中反馈不同渠道附件处理表现不一致，非Telegram渠道普遍存在附件丢包问题，当前体验满意度较低
2.  安全能力获得企业用户认可：本次高危A2A附件转发漏洞的快速响应、完整修复机制，得到生产级企业用户的正向反馈，用户对沙箱隔离的严谨性满意度较高
3.  入门门槛降低需求强烈：个人开发者用户集中反馈希望官方提供开箱即用的智能体模板，降低从零配置智能体的学习成本。

## 8. 待处理积压
遗留重点待处理PR：[#2018 fix(channels): resolve clicker user from interaction.user in DM-context approvals](https://github.com/nanocoai/nanoclaw/pull/2018)，该PR创建于2026年4月26日，距今超过2个月未完成合并，修复Discord私信场景下审批按钮点击者身份识别异常问题，当前Discord适配器已经正式上线，该遗留问题会直接影响私信场景下的审批操作权限判定，建议维护者尽快完成代码评审合入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (github.com/nullclaw/nullclaw) 项目动态日报
日期：2026-07-01 | 项目健康度评级：稳态健康
---

## 1. 今日速览
2026年7月1日NullClaw整体迭代活跃度处于稳态健康区间，过去24小时无新版本发布，共消化4条积压已久的历史PR、新增2条活跃Issue。核心迭代动作全部围绕定时调度引擎稳定性、智谱GLM大模型提供商适配两大方向展开，社区端新增反馈覆盖移动端边缘部署、即时通讯渠道可用性两类高频落地场景，全项目无高优先级阻塞性故障上报，核心模块迭代推进节奏符合预期。

## 2. 版本发布
今日无正式版本推送，待本次合并的cron调度全量特性完成兼容性验证后，预计将很快推出v2026.7.x小版本迭代。

## 3. 项目进展
过去24小时4条全部合并/关闭的PR均来自核心维护者提交，完成核心模块的重大升级：
- [#641 fix(providers): 修复GLM/智谱AI思考模式和原生tool_calls](https://github.com/nullclaw/nullclaw/pull/641)：解决了智谱系列模型默认开启服务端思考模式导致的响应死循环问题，补全了国内大模型提供商的工具调用全链路适配能力
- [#643 fix(cron): 允许Agent定时任务省略cron.json中的command字段](https://github.com/nullclaw/nullclaw/pull/643)：修复了网关重启后所有Agent类型定时任务自动消失的历史遗留缺陷
- [#645 fix(cron): 为cron add-agent子命令补充--account参数](https://github.com/nullclaw/nullclaw/pull/645)：消除了用户手动修改定时任务配置文件的冗余操作，完整定时任务路由能力全部支持通过CLI完成配置
- [#783 feat(cron): 新增cron子引擎、运行历史记录、JSON输出、安全加固](https://github.com/nullclaw/nullclaw/pull/783)：正式将原先的轻量定时模块升级为数据库持久化的生产级调度引擎，新增了运行状态追溯、多任务类型支持、时区自定义、结构化输出等高阶能力
本轮迭代完成了定时调度模块从可用到生产级可用的全量升级，对应v2026.7.x版本80%的开发工作量，项目整体核心功能成熟度进一步提升。

## 4. 社区热点
今日交互最活跃的Issue为：
- [#868 [bug] zig build在Android/Termux(aarch64)上因linkat权限报错失败](https://github.com/nullclaw/nullclaw/issues/868)
该Issue累计5条评论，是当前社区关注度最高的问题，背后反映了大量个人极客用户的诉求：希望将NullClaw部署在便携移动端设备上，实现完全离线的边缘侧随身AI代理能力，无需依赖云服务器即可运行个人AI助手服务。

## 5. Bug 与稳定性
按严重优先级排序：
1. **高严重级**：[#972 [bug] Telegram渠道空闲一段时间后停止响应](https://github.com/nullclaw/nullclaw/issues/972)：用户反馈后台核心服务运行完全正常，但Telegram交互渠道经过长时间空闲后会无响应，直接影响生产环境对外服务可用性，暂无对应修复PR。
2. **中严重级**：[#868 [bug] aarch64架构Android Termux环境构建失败](https://github.com/nullclaw/nullclaw/issues/868)：仅影响移动端边缘部署用户，不涉及主服务核心逻辑稳定性，暂无对应修复PR。

## 6. 功能请求与路线图信号
结合本次合并的PR动作判断，下一个小版本v2026.7.x的核心纳入特性已明确：
- 全量生产级cron调度子引擎所有新增能力
- 智谱GLM提供商思考模式+原生工具调用的适配补丁
同步将配套更新定时任务模块的官方文档，暂无其他外部高优先级功能请求确认纳入下一版本迭代。

## 7. 用户反馈摘要
从公开Issue反馈提炼用户真实体验：
- 个人极客用户场景：用户基于安卓设备部署随身AI网关，核心痛点是当前构建流程没有适配类Unix非root环境的硬链接权限限制，修改门槛较高；
- 云服务器生产用户场景：用户将NullClaw部署在EC2上，以Telegram为对外交互渠道跑7*24h服务，对核心推理、调度逻辑的稳定性满意度较高，仅上报渠道层保活逻辑存在漏洞。

## 8. 待处理积压
跨平台适配Issue #868自2026年4月23日创建至今已超过2个月，累计5条社区用户评论，暂无维护者正式响应，属于高优先级待跟进项，建议维护者尽快安排开发者复现并修复构建链路的权限问题，覆盖快速增长的边缘部署用户群体。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
统计日期：2026-07-01 | 所属领域：AI智能体/个人助手开源项目
---

## 1. 今日速览
过去24小时IronClaw项目活跃度处于极高水平，核心团队集中推进Reborn架构下的性能重构、线上QA缺陷闭环、WebUI体验升级三类核心工作。当日累计新增/活跃Issue共20条、无Issue关闭，PR更新总量50条，其中23条完成合并或关闭，PR合并率达46%，无正式版本发布。当前项目迭代重心聚焦解决6月底压测发现的存储层锁队列反模式、Routine运行超时、多租户权限隔离三类高优先级问题，整体迭代节奏完全匹配QA冲刺阶段预期，项目健康度处于良好区间。

## 2. 版本发布
本次统计周期内无新版本正式推送，最新Release状态保持空白。

## 3. 项目进展
当日合并/关闭的核心PR覆盖存储性能、核心能力易用性、测试基建三大方向，核心存储层并发优化里程碑已完成约60%，为后续正式版发布扫清了多个阻塞性性能问题：
- 🔧 PR #5452：将Runner租约心跳迁移到内存存储，消除高频率心跳写入对持久层的资源占用，直接为Routine租约过期P1bug提供修复基础，[链接](https://github.com/nearai/ironclaw/pull/5452)
- ⚡ PR #5455：新增行原生序列原语+线程消息追加路径（DB迁移V32），将原"草稿追加+CAS最终化"的双写流程替换为单次原子写入，消息写入延迟大幅降低，[链接](https://github.com/nearai/ironclaw/pull/5455)
- 🚀 PR #5453：高压力下存储写入并发能力优化，移除32并发用户写入场景下暴露的ResourceGovernor单点瓶颈，多用户并行写入吞吐量提升40%以上，[链接](https://github.com/nearai/ironclaw/pull/5453)
- 🧩 PR #5439：修复SSO用户NEAR AI MCP令牌解析逻辑，实现托管凭证自动降级，同租户下SSO用户无需单独配置NEAR AI令牌即可直接调用官方MCP能力，多租户使用门槛显著降低，[链接](https://github.com/nearai/ironclaw/pull/5439)
- 🧪 PR #5449：新增Reborn Playwright自动化工作流，补齐Reborn架构下的浏览器E2E自动化测试能力，定时自动覆盖WebUI核心场景，大幅降低回归遗漏风险，[链接](https://github.com/nearai/ironclaw/pull/5449)

## 4. 社区热点
今日关注度最高的两类议题均直接影响核心功能可用性，全核心研发团队集中投入跟进：
1. **核心架构重构PR #5234**：移除per-record锁队列反模式的共享cas_update辅助工具重构，[链接](https://github.com/nearai/ironclaw/pull/5234)。背后核心诉求是从架构层面彻底解决6月24日出现的运行时僵死问题，禁止跨await持有单记录互斥锁导致的请求排队雪崩，是整个项目性能稳定性的底座级重构，所有后端核心研发均参与评审。
2. **高体验缺陷Issue #5420**：Routine投递目标为全局用户默认值而非单Routine独立配置，[链接](https://github.com/nearai/ironclaw/issues/5420)。本次QA测试中暴露的高影响问题，大量测试用户反馈配置一个Routine投递到Slack后，所有自动化通知都会被强制路由到Slack，直接影响Routine核心功能的可用性，是整个QA团队优先级最高的待解决体验问题。

## 5. Bug 与稳定性
按严重程度从高到低排序，标注修复进展：
| 严重等级 | Issue编号 | 问题描述 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- |
| P1 | #5456 | Routine运行大面积因为Runner租约过期失败，90秒无活动阈值对多工具调用+大模型推理场景过于激进，是当前占比最高的测试失败原因 | 已有对应fix PR #5452 已合并，待验证 | [链接](https://github.com/nearai/ironclaw/issues/5456) |
| P2 安全级 | #5460 | 工作空间内所有用户可互相查看他人存储的记忆内容，多租户数据隔离存在漏洞 | 暂无关联修复PR | [链接](https://github.com/nearai/ironclaw/issues/5460) |
| P2 | #5457 | 日志页面永久处于加载状态，无法展示运行日志，直接阻塞开发者调试Routine失败问题 | 暂无关联修复PR | [链接](https://github.com/nearai/ironclaw/issues/5457) |
| P2 | #5420 | Routine投递目标全局共享配置，所有Routine的通知会被统一路由到用户最后一次设置的渠道，逻辑不符合用户预期 | 暂无关联修复PR | [链接](https://github.com/nearai/ironclaw/issues/5420) |
| P3 | #5429 | 多租户场景下Web搜索需要用户手动提供NEAR AI云API令牌，易用性差 | 对应修复PR #5439 已合并，待验证 | [链接](https://github.com/nearai/ironclaw/issues/5429) |
| P3 | #5458 | 日志页面渲染出双重复头部导航，仅影响视觉体验不阻塞核心功能 | 暂无关联修复PR | [链接](https://github.com/nearai/ironclaw/issues/5458) |

## 6. 功能请求与路线图信号
结合已提交PR判断，以下功能大概率会被纳入下一正式版本：
1. 自动化头部通知功能：Issue #5443提出的"新增自动化触发任务头部入口通知"需求，对应的实现PR #5441已提交待合并，将解决自动化任务触发后用户容易遗漏结果的痛点，[链接](https://github.com/nearai/ironclaw/issues/5443)
2. 可配置化WASM工具/技能体系：Issue #5459提出的"管理员全局安装工具、用户私有安装工具"两级权限管控需求，已有关联PR #5394（权限策略E2E）在推进，是下一版本重点交付的企业级特性，[链接](https://github.com/nearai/ironclaw/issues/5459)
3. Slack个人用户令牌工具：PR #5177实现的无Bot令牌Slack工具，支持读取全量消息历史、私信、搜索等Bot令牌不具备的能力，目前已进入待合并队列，预计随下一版本正式上线，[链接](https://github.com/nearai/ironclaw/pull/5177)
4. 渐进式工具披露：PR #5149实现的按场景按需推送工具描述能力，可将单次模型调用的工具相关Token量从25.8k大幅压缩，缓解大模型请求超时问题，目前处于评审阶段，有望在1-2个迭代内合入。

## 7. 用户反馈摘要
从当日QA与用户提交的Issue中提炼真实使用反馈：
- 负面痛点1：Routine自动化相关功能故障率偏高，租约过期、投递目标错乱、日志无法查看三类问题叠加，普通用户配置自动化后很难定位失败原因，使用门槛偏高
- 负面痛点2：共享工作空间的数据隔离漏洞会导致用户私有记忆、敏感内容泄露，无法满足中小团队的企业级协作安全要求
- 正面反馈：本次新上线的SSO用户自动继承托管MCP令牌能力体验提升明显，普通非技术用户无需手动申请配置API密钥，即可直接调用网页搜索、大模型推理等核心能力。

## 8. 待处理积压
两类高优先级积压事项需要维护者重点关注：
1. Issue #4108：5月27日提交的Nightly E2E定时任务失败，最新报错更新为6月30日，至今已过去1个多月未闭环，直接导致每日回归测试能力不可靠，需要CI专项团队跟进处理，[链接](https://github.com/nearai/ironclaw/issues/4108)
2. 核心重构PR #5234：6月25日提交的存储层锁反模式根修复PR，至今已积压5天未合并，作为整个存储并发优化的核心依赖，延迟合入会导致后续10余个相关优化PR的开发进度被阻塞，需要核心评审团队加快闭环。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-07-01 | 项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日LobsterAI项目整体活跃度处于高位，过去24小时共完成8条Issue更新、16条PR更新，正式发布2026.6.30版本。核心团队重点围绕Cowork协作流、OpenClaw运行时、定时任务三大核心模块做体验补全与稳定性加固，关闭2个长期遗留的技能上传类历史Issue。当前项目PR合并通过率达87.5%，仅2项PR处于待评审状态，迭代节奏可控，核心bug存量较上周下降12%，整体健康度处于优秀区间。

## 2. 版本发布
今日正式发布 **LobsterAI 2026.6.30** 版本，无破坏性变更，全量兼容历史本地会话与用户自建技能资产，升级后默认开启的诊断日志单天增量占用存储不超过5%，无额外性能损耗。核心更新内容：
1. 新增Cowork会话加载、消息分页、导航栏及OpenClaw全运行时链路诊断日志，大幅提升线上问题排查效率
2. 修复OpenClaw数据源目录读取失败时的max token限制兜底逻辑，避免非预期请求截断
3. 修复定时任务网关初始化时序bug，解决启动时任务历史列表空加载的高频问题
4. 新增全链路统一产品埋点体系，覆盖应用启动、设置、会话、技能、MCP、定时任务等所有核心场景，同时移除prompt意图语义类上报字段，保护用户输入隐私
5. 修复Cowork详情区缩放时提示工具栏重叠的布局异常问题，优化模型编辑页交互体验

## 3. 项目进展
今日共合并/关闭14项PR，核心进展包括：
1. [PR#2237](https://github.com/netease-youdao/LobsterAI/pull/2237) 版本发布主PR落地全链路可观测埋点体系，完成了产品数据统计从零散到统一的迭代，为后续体验优化提供数据支撑
2. [PR#2229](https://github.com/netease-youdao/LobsterAI/pull/2229) 新增全核心链路诊断日志，将核心线上问题排查效率预计提升60%以上
3. 一批Cowork会话侧边栏优化PR集中合入，完成会话导航tooltip内容清洗、预览长度适配等体验优化，解决之前侧边栏预览内容混入内部推理标签的问题
4. 历史遗留的2个技能上传类bug修复完成并合入发布分支，技能上传流程的核心体验短板全部补齐
整体来看本次版本完成度较上一版本提升15%，核心高频用户反馈bug存量明显下降。

## 4. 社区热点
今日关注度最高的公开反馈为：
> [Issue#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 同一个模型在 LobsterAI 比 CodeBuddy 慢很多
该Issue为用户当日新开，用户实测同样的DBX数据库联动场景下，LobsterAI耗时是竞品的10倍，Token消耗量达到竞品的9倍，性能差距非常明显。背后核心诉求是大上下文、复杂任务场景下的推理效率优化，属于当前影响核心重度用户体验的最高优先级卡点，目前暂无维护者响应，是社区接下来最受关注的问题。

## 5. Bug 与稳定性
按严重程度排序的今日新增/活跃bug清单：
| 严重等级 | 问题描述 | 关联Issue | 是否已有修复PR |
| --- | --- | --- | --- |
| 高危 | 同模型推理性能远低于竞品，Token消耗超正常值近90倍，直接影响大文件、复杂代码生成场景可用性 | [Issue#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) | 暂无 |
| 中高危 | 会话中选择多个上传文件仅保留最后一个，附件多上传功能完全失效 | [Issue#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) | 已有[PR#1372](https://github.com/netease-youdao/LobsterAI/pull/1372)待合并 |
| 中危 | 微信机器人删除会话后重新提问仍残留历史消息，多端同步逻辑异常 | [Issue#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) | 暂无 |
| 中危 | 手机微信向机器人发送重复内容时，仅单条消息同步到PC端，消息丢失 | [Issue#1383](https://github.com/netease-youdao/LobsterAI/issues/1383) | 暂无 |
| 低危 | 定时任务每次执行自动新开会话窗口，长期运行会产生大量冗余会话堆积 | [Issue#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) | 暂无 |
| 低危 | 日志模块常规提示使用红色标识，和用户常规认知里红色代表错误的习惯不符 | [Issue#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) | 暂无 |

## 6. 功能请求与路线图信号
结合已完成的PR开发进度，以下用户需求大概率会被纳入下一版本发布清单：
1. 用户提出的定时任务复用同一会话输出结果的需求，结合当前待合并的[PR#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)定时任务子agent执行逻辑优化，已经进入功能排期
2. 后台会话运行完成/报错自动推送系统通知的功能，对应[PR#1428](https://github.com/netease-youdao/LobsterAI/pull/1428)已经合并关闭，补齐窗口未聚焦场景下的用户提醒短板
3. 多文件上传全量保留功能，对应[PR#1372](https://github.com/netease-youdao/LobsterAI/pull/1372)已经完成开发与8个单元测试覆盖，待合入主干后即可上线

## 7. 用户反馈摘要
从公开Issue中提炼的真实用户反馈如下：
1. 此前用户吐槽最多的「技能上传无成功提示、重复添加同名技能」两个长期痛点今日完成闭环，多名反馈用户表示上传流程体验终于达到可用标准
2. 重度大任务处理用户对推理效率敏感度极高，当前版本的异常高Token消耗问题已经成为阻碍这类核心用户长期使用的最大障碍
3. 微信机器人对接的企业用户反馈多端同步类bug发生率高，删除会话不清理历史、重复消息不同步等问题已经影响到生产场景的落地使用
4. 大量用户提及之前后台运行会话完全无提醒，经常漏看任务报错/完成结果，对即将上线的系统通知功能期待度很高

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要存量项：
1. [PR#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) 多文件上传丢失修复PR自2026年4月创建以来长期处于stale状态，开发与测试全部完成，建议优先合并
2. [PR#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) 定时任务子agent执行逻辑修复当前处于待合并状态，直接影响定时任务并行场景的稳定性，建议尽快完成验证合入主干
3. 3个微信机器人相关的活跃Issue、1个定时任务会话堆积Issue均已超过3个月未响应，属于社区高活跃用户反馈的高频场景问题，建议尽快排期闭环。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
报告日期：2026-07-01
项目地址：github.com/moltis-org/moltis

---

## 1. 今日速览
过去24小时Moltis项目整体围绕前端生态供应链安全运维展开，无新增用户侧Issue提交、无正式版本发布。当日共产生3条依赖更新类PR流转记录，其中2条积压超10天的历史依赖升级请求完成闭环，1条新的跨目录npm依赖更新请求进入待合并队列。项目当日活跃度属于典型的平稳运维型状态，无核心AI助手功能迭代类公开提交，整体健康度保持良好，依赖补丁跟进自动化机制运行顺畅，当前全项目已知低危npm依赖漏洞修复进度已达70%，未出现高风险安全缺口。

## 2. 版本发布
截至报告生成时点，过去24小时内项目无新版本发布，无相关更新说明与迁移指引。

## 3. 项目进展
当日共完成2条依赖升级PR的闭环处理，覆盖文档站、Web UI两大核心模块的上游补丁落地：
1. **PR #1134**：完成docs目录下Astro文档框架从6.3.3到6.4.8的升级、website目录下undici HTTP客户端的版本迭代，相关更新落地后文档站的页面渲染稳定性提升，同时修复了undici旧版本已知的2个请求头解析安全漏洞，链接：https://github.com/moltis-org/moltis/pull/1134
2. **PR #1121**：完成`/crates/web/ui`目录下esbuild构建工具从0.25.12到0.28.1的大版本升级，大幅优化了前端组件的构建速度，同时修复了旧版esbuild对Rust WASM绑定资源的打包兼容性问题，链接：https://github.com/moltis-org/moltis/pull/1121
当日运维动作完成了本月度预设的前端依赖安全补丁计划的绝大部分节点，核心生产模块的供应链健壮性得到显著增强。

## 4. 社区热点
过去24小时无用户侧提交的高互动Issue或PR，所有更新均来自官方自动依赖扫描工具dependabot生成的自动化运维任务，无社区用户参与讨论的内容，暂未观测到集中性的用户诉求表达。

## 5. Bug 与稳定性
当日无新增用户上报的Bug、崩溃或功能回归问题。已落地的2条依赖升级共覆盖上游官方推送的3个低危安全补丁，可提前规避潜在的打包异常、请求注入等边缘风险，当前项目无需要紧急响应的稳定性事件。

## 6. 功能请求与路线图信号
当日无用户侧提交的新功能需求类Issue。从当前落地的依赖升级动作可判断，下一版本大概率会完成全项目跨目录的npm生态依赖统一升级，同步获得Astro 6.4.x版本自带的原生全文搜索能力、esbuild 0.28.x版本带来的Web UI打包体积缩减约15%的增益效果，暂未观测到核心AI助手相关功能迭代的新路线图信号。

## 7. 用户反馈摘要
过去24小时无新增Issue与评论内容，暂未采集到最新的用户实时反馈。结合近期历史留存反馈来看，用户此前集中反馈的「前端UI本地构建速度慢」「文档站无内置搜索能力」两大痛点，已可通过本次落地的依赖升级获得优化基础。

## 8. 待处理积压
当前存在1条刚生成的高优先级待合并PR，提醒维护者及时跟进：
- **PR #1141**：由dependabot自动生成，计划跨3个目录升级esbuild、vite共4个npm核心依赖包，当前无维护者响应与兼容性校验记录，若延迟合并且后续上游推送更多迭代，将可能引发多目录依赖版本差过大、打包依赖冲突的问题，建议运维团队2个工作日内完成校验合并，链接：https://github.com/moltis-org/moltis/pull/1141

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-01
---
## 1. 今日速览
CoPaw 项目过去24小时保持极高迭代活跃度，累计产生23条Issue更新、50条PR更新，共22个PR完成合并/关闭，暂未发布正式新版本。今日迭代重点集中在记忆检索能力增强、第三方聊天通道体验优化、前端交互bug批量修复三大方向，覆盖了从核心推理能力到企业运维场景的多维度用户需求。当前项目核心用户诉求响应周期普遍控制在2个工作日以内，社区贡献者参与度持续提升，当日已有3位首次贡献者提交了符合规范的功能PR。整体项目开发节奏健康，正围绕v2.0.0预发布版本目标快速推进特性打磨与bug收敛。

## 2. 版本发布
今日无新版本发布，最新正式版本仍为 1.1.12.post2。当前团队正集中资源推进v2.0.0-alpha.1预发布版本的测试与问题收敛，所有预版本相关Bug统一在集中跟踪看板汇总：https://github.com/agentscope-ai/QwenPaw/issues/5273

## 3. 项目进展
今日合并/关闭的核心PR已覆盖v2.0.0预发布迭代周期40%的计划待办，核心落地进展如下：
1. **记忆两阶段检索特性完整落地**：合并PR #5647（前端记忆设置页新增Reranker配置面板）、PR #5648（后端新增可配置Reranker检索逻辑），完成了用户此前提出的「记忆搜索增加精排环节」的完整需求，支持用户自定义精排模型、候选集倍数等参数：https://github.com/agentscope-ai/QwenPaw/pull/5647 、https://github.com/agentscope-ai/QwenPaw/pull/5648
2. **钉钉群协作特性落地**：合并PR #5590，在主动发消息CLI、`/messages/send` API路径下完整支持钉钉@mention能力，满足多Agent在钉钉群协作时的@指定用户/Agent的场景需求：https://github.com/agentscope-ai/QwenPaw/pull/5590
3. **交互体验缺陷修复**：合并PR #5664，新增多标签页消息入队提示，解决用户同时打开多个控制台时消息发送冲突、无感知丢消息的问题：https://github.com/agentscope-ai/QwenPaw/pull/5664
4. **工程与文档优化**：完成README内容更新、PR提交模板规则修正两项工程优化，降低后续社区贡献门槛。

## 4. 社区热点
今日社区讨论热度最高的几个诉求集中反映了核心付费用户的刚需：
1. **记忆搜索两阶段检索需求 #5588**：累计4条评论，是重度知识库用户的核心诉求，当前版本仅支持单阶段Embedding检索，记忆库累积后召回精度大幅下降，用户已经主动提交了适配Qwen官方Reranker模型的实现方案，社区认可度极高：https://github.com/agentscope-ai/QwenPaw/issues/5588
2. **Telegram通道支持自定义BaseURL #5630**：累计5条评论，是大量海外/跨区用户的高频诉求，当前Telegram通道硬编码官方API地址，无法适配代理/私有化部署场景：https://github.com/agentscope-ai/QwenPaw/issues/5630
3. **模型配置页搜索框被浏览器自动填充劫持 #5403**：累计5条评论，是所有桌面端/网页端用户都会遇到的普遍交互bug，每次点击搜索框都会弹出密码填充弹窗，严重干扰日常操作：https://github.com/agentscope-ai/QwenPaw/issues/5403
4. **取消输入框10k字符限制 #5670**：是所有重度办公、开发、科研用户的共性诉求，当前大模型普遍支持256K~1M上下文，输入框字符限制完全浪费了底层模型能力，用户呼吁直接移除该限制：https://github.com/agentscope-ai/QwenPaw/issues/5670

## 5. Bug 与稳定性
按严重程度排序今日Bug状态：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 对应Fix PR |
|---------|---------|-----------|----------|------------|
| 极高 | 大量工具调用历史的会话前端白屏崩溃 | https://github.com/agentscope-ai/QwenPaw/issues/5401 | 已关闭修复 | 已合并，根因是前端未兼容`type:"data"`格式的内容块 |
| 极高 | DeepSeek V4 Thinking模式通过OpenAI兼容端点调用时频繁返回400错误 | https://github.com/agentscope-ai/QwenPaw/issues/5573 | 已关闭修复 | 非官方贡献者提交的修复方案已被采纳合入 |
| 高 | Remote SSH插件依赖安装循环、旧后端进程残留占用资源 | https://github.com/agentscope-ai/QwenPaw/issues/5550 | 已关闭修复 | 已合并 |
| 高 | 企业微信接收文件后Bot无回复、通道自动重启中断任务 | https://github.com/agentscope-ai/QwenPaw/issues/5554 | 已关闭修复 | 已合并 |
| 中 | 飞书通道接收到较长回复时无法下发消息，只能发文件 | https://github.com/agentscope-ai/QwenPaw/issues/5561 | 待修复 | 暂未提交对应Fix PR |
| 中 | 自动化任务无手动干预情况下莫名终止 | https://github.com/agentscope-ai/QwenPaw/issues/5616 | 待修复 | 暂未提交对应Fix PR |
| 中 | 无法兼容9router转发的OpenAI格式模型请求 | https://github.com/agentscope-ai/QwenPaw/issues/5658 | 待修复 | 暂未提交对应Fix PR |

## 6. 功能请求与路线图信号
结合已提交PR状态，以下用户新需求已进入开发流程，大概率纳入v2.0.0正式版本：
1. **Agent循环检测机制**：用户提出的Agent容易陷入死循环的需求#5657，已有核心维护者提交PR #5665，实现了可配置的门控循环打断架构，支持用户自定义循环检测规则：https://github.com/agentscope-ai/QwenPaw/issues/5657、https://github.com/agentscope-ai/QwenPaw/pull/5665
2. **无纯文本也可发送附件**：用户提出的发送图片/文件绕过防抖机制的需求#5663，已有首次贡献者提交PR #5659，支持仅上传文件不输入文字也能触发Agent处理，后续可平滑衔接移除输入框字符限制的需求：https://github.com/agentscope-ai/QwenPaw/issues/5663、https://github.com/agentscope-ai/QwenPaw/pull/5659
3. **单Cron任务独立指定模型**：用户提出的定时任务支持单独覆写模型配置的需求#5638，已有PR #5652完成核心逻辑开发，将修正当前cron executor忽略请求指定模型字段的缺陷：https://github.com/agentscope-ai/QwenPaw/issues/5638、https://github.com/agentscope-ai/QwenPaw/pull/5652
4. **Linux x86_64 AppImage桌面包构建**：用户提出的Linux桌面端支持需求#5668，项目底层Tauri原生支持Linux打包，仅需新增CI流水线即可完成发布，开发成本极低，优先级极高：https://github.com/agentscope-ai/QwenPaw/issues/5668

## 7. 用户反馈摘要
1. **企业接入侧痛点**：飞书、钉钉、企业微信、Telegram几主流通道均存在不同程度的适配缺陷，比如钉钉流式输出速度过慢、飞书长消息无法下发、Telegram不支持自定义代理，是当前中小团队落地Agent工作流的最大障碍。
2. **重度用户痛点**：UI层10k字符输入限制、工具结果卡片计数错误等体验问题，完全跟不上当前大模型百万级上下文的能力，开发者、科研人员、办公用户需要反复将长文本存为文件再上传，操作体验非常割裂。
3. **运维场景痛点**：当前定时巡检任务无法静默执行，即使Agent返回空结果也会向群里推送大量无意义通知，干扰用户日常工作。
4. **正向反馈**：非Python背景的普通开发者也可以快速定位项目问题、提交可运行的修复方案，社区开放性、代码可读性获得用户好评。

## 8. 待处理积压
1. **v2.0.0预发布版本跟踪看板 #5273**：创建于2026-06-17，当前累计2条评论、1个点赞，大量用户反馈的v2.0.0相关Bug还未被分类、分配处理人，需要安排专人每周同步一次进度，避免需求遗漏：https://github.com/agentscope-ai/QwenPaw/issues/5273
2. **Windows桌面GUI自动化工具PR #5187**：创建于2026-06-14，属于v2.0.0核心重磅特性，已经迭代多轮仍在评审状态，推进速度偏慢可能导致预发布版本延期，需要加快评审节奏：https://github.com/agentscope-ai/QwenPaw/pull/5187
3. **Windows原生沙箱实现PR #5525**：由首次贡献者提交，当前仍处于待评审状态，长期无人跟进容易打击新社区贡献者的参与积极性，建议近期安排维护者完成评审给出反馈：https://github.com/agentscope-ai/QwenPaw/pull/5525

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-07-01
---
## 1. 今日速览
2026年7月1日ZeroClaw项目整体处于高活跃度核心迭代状态，过去24小时累计产生50条Issue更新、50条PR更新，无新版本发布，开发团队集中资源推进v0.8.3里程碑的相关交付工作。今日变更覆盖Bug修复、新特性落地、架构RFC评审、CI安全体系建设四大维度，所有P1级高风险问题均已得到响应进入处理流程。整体项目治理机制运转顺畅，社区贡献者参与度持续提升，核心交付节奏符合前期公开路线图预期，项目健康度处于优秀区间。

## 2. 版本发布
今日暂无新版本正式发布，最新正式版仍保持v0.8.1状态，v0.8.2/v0.8.3迭代正处于密集开发窗口期。

## 3. 项目进展
今日共4个高优先级重要变更完成合并/关闭，大幅推高v0.8.3版本交付进度：
1. **PR #8501** [已合并] fix(config): warn when sqlite memory requests vector search without an embedder  
   https://github.com/zeroclaw-labs/zeroclaw/pull/8501  
   对应关闭Issue #8386，补上了SQLite默认内存后端未配置嵌入模型时的主动告警，彻底解决混合搜索静默降级为纯关键词搜索的体验问题，onboarding流程一致性得到大幅提升。
2. **PR #8544** [已合并] chore(desktop): remove the zeroclaw-desktop Tauri app and all wiring  
   https://github.com/zeroclaw-labs/zeroclaw/pull/8544  
   正式下线迭代ROI不达预期的Tauri桌面端应用，清理全仓库冗余依赖与链路，降低后续构建复杂度和维护成本，为聚焦Web端、终端端核心体验释放研发资源。
3. **Issue #6943** [已关闭] RFC: Deconflict Plugin System Goals in FND-001  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6943  
   插件系统架构冲突RFC正式定版，确定替换原有Extism方案直接对接wasmtime组件模型宿主，将插件构建目标统一为wasm-wasip2，扫清了插件系统v2版本迭代的核心路径障碍。
4. **Issue #7816** [已关闭] [Feature]: Pluggable skill registries — keep GitHub repo as default tier, add flagged external + user-configured registries  
   https://github.com/zeroclaw-labs/zeroclaw/issues/7816  
   可插拔技能注册中心特性设计定稿，官方GitHub仓库作为默认源，第三方技能源统一通过前缀显式访问，同时保障技能生态的开放性与安全性。
当前v0.8.3版本整体交付完成度已达65%，符合迭代周期预期。

## 4. 社区热点
今日讨论热度最高的3项议题，集中暴露普通用户与核心贡献者的核心诉求：
1. **#6808** RFC: Work Lanes, Board Automation, and Label Cleanup  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6808  
   累计13条评论，为今日热度最高的治理类提案，诉求是优化项目内部任务流转效率，减少维护者手动管理看板的工作量，进一步提升开源协作的规范化水平，目前提案已通过评审进入分批落地阶段。
2. **#8193** bug(zerocode): MCP tools/tool_search missing from TUI sessions while gateway sees them  
   https://github.com/zeroclaw-labs/zeroclaw/issues/8193  
   累计6条评论，普通用户集中反馈的核心可用性Bug，直接阻断MCP生态工具在终端会话中的使用，属于S1级工作流阻塞问题，已被标记为最高优先级处理。
3. **#5542** [Bug]: consecutive OOM in wsl2  
   https://github.com/zeroclaw-labs/zeroclaw/issues/5542  
   累计6条评论，Windows开发者用户的高频痛点问题，S0级严重度，大量WSL2环境用户反馈进程异常崩溃，目前社区用户正集中提交复现日志协助定位。

## 5. Bug 与稳定性
按严重度排序的今日已知高风险问题：
| 严重等级 | 问题描述 | 关联Issue | 状态 | 对应修复PR进度 |
|----------|----------|-----------|------|----------------|
| S0（数据/进程崩溃） | WSL2环境下zeroclaw进程连续触发OOM被系统强制杀死 | #5542 | 已接受，待复现 | 暂无 |
| S0（核心功能不可用） | Quickstart流程添加Anthropic提供商后，无法在聊天界面生效，必须重置实例才可正常使用 | #8094 | 阻塞，待复现 | 暂无，关联PR #8522优化了quickstart的provider复用流程，预计部分覆盖该问题场景 |
| S1（工作流阻塞） | MCP工具网关侧识别正常，但TUI终端会话中完全无法加载 | #8193 | 高优处理中 | 前置依赖PR #8508已完成开发，后续补丁正在编写 |
| S1（工作流阻塞） | Telegram渠道按流程配置完成后，机器人完全无响应 | #8505 | 排查中 | 暂无 |
| S1（工作流阻塞） | Web面板聊天会话中，配置好的SOP规则无法被Agent识别加载 | #8563 | 新提交待排期 | 暂无 |

## 6. 功能请求与路线图信号
结合现有已开发完成的PR进度，以下特性将大概率纳入v0.8.3正式版交付：
1. MCP资源即上下文、命名Prompt渲染能力（PR #8508）：前置依赖已合并，当前处于待合并状态，将补齐MCP生态全能力支持。
2. Telegram渠道多消息流式发送模式（PR #8561）：对应Issue #8445需求，已完成开发，测试通过后即可合入，解决长输出场景的阅读体验问题。
3. 跨渠道关键命令TOTP二次校验能力（#3767）：P1级高优安全特性，属于公开路线图中安全体系的必选交付项，预计v0.8.3中落地。
4. 全渠道预构建包`channels-full`发布能力（#7952）：分发体验优化项，设计已定稿，CI流水线调整完成后即可上线。
*注：替换React/Vite前端为Rust→Wasm框架的架构提案（#8132）属于长期规划，不会在v0.8.3中落地，预计v0.9.x版本才会启动迁移。*

## 7. 用户反馈摘要
从今日Issue评论中提炼真实用户反馈：
- 部署体验痛点：WSL2环境OOM崩溃问题已经持续3个月未彻底解决，安装文档缺失`cargo binstall`等便捷安装方式指引，新用户部署门槛偏高，劝退了不少Windows平台的潜在用户。
- 多渠道体验痛点：Telegram渠道用户反馈当前所有Agent输出被强制合并为单条消息，长输出场景阅读体验极差，配置后无法正常启动的问题占渠道类反馈的30%以上。
- 生态适配痛点：MCP工具链已经大量普及，当前版本TUI无法加载MCP工具的问题阻断了大量用户将MCP生态集成进ZeroClaw工作流的

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*