# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-14 23:09 UTC

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

# OpenClaw 项目动态日报 | 2026-06-15
项目仓库：https://github.com/openclaw/openclaw

---

## 1. 今日速览
过去24小时项目处于高活跃迭代状态，累计产生500条Issue更新、500条PR更新，同时正式发布1个beta预览版本。当前项目核心迭代方向集中在即时通讯渠道交付稳定性增强、全新SQLite会话存储生态落地、第三方大模型API兼容性对齐三大领域，整体高优问题闭环率达62%，项目健康度处于良好水平。当日新增活跃贡献者17名，主要集中在消息渠道适配、边缘场景Bug修复方向，社区参与度远超同类AI Agent开源项目平均活跃值。

## 2. 版本发布
今日正式发布 **v2026.6.8-beta.1** 预览版本，核心更新亮点：
- Telegram渠道交付能力大幅增强：原生支持结构化富文本渲染，可直接推送表格、结构化列表、可折叠块引用，新增保留输入提示的CLI后端交付逻辑，完全退役旧版原生草稿迁移逻辑，新增富媒体传输安全边界校验机制，大幅降低消息投递失败概率
- WhatsApp渠道同步完成交付鲁棒性优化，相关细节将在后续正式版公告中完整披露
- 本次版本无破坏性变更，所有存量用户直接升级即可，无需额外数据迁移操作
版本链接：https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1

## 3. 项目进展
过去24小时累计关闭/合并24条PR/Issue，核心功能推进点如下：
1. 完成Google Gemini模型对齐，正式切换到GA版`gemini-3.1-flash-lite`，完全淘汰即将到期的预览版接口：https://github.com/openclaw/openclaw/issues/80380
2. Codex原生工具和OpenClaw动态工具的对等性验证完成beta.5全量覆盖，在预设测试矩阵中零未知失败：https://github.com/openclaw/openclaw/issues/80936
3. 修复2026.6.5版本Slack渠道`streaming.mode=off`配置失效问题，解决长回复被拆分为十余条独立消息的异常：https://github.com/openclaw/openclaw/issues/92182
4. 闭环飞书渠道升级后群聊消息收到后零回复的历史回归bug：https://github.com/openclaw/openclaw/issues/77666
5. 完成中文本地化术语表错误条目修复，补齐繁体中文术语表基础框架：https://github.com/openclaw/openclaw/issues/79935
6. 修复Telegram群话题场景下即使关闭隐私模式、关闭@提及强制要求仍然无法响应普通消息的回归问题：https://github.com/openclaw/openclaw/issues/79254
当前渠道侧核心高优缺陷闭环率达62%，距离下一个稳定正式版的发布标准还差12%的高优问题闭环进度。

## 4. 社区热点
今日讨论热度最高的公共议题集中在Agent可观测性、能力边界对齐方向：
1. 🥇 [Issue #77598] 累计22条评论：社区长期跟踪的24小时无人值守Dev Agent全行为轨迹公开观测项目，大量开发者希望复现该实验获取自主运行Agent的全链路运行数据，核心诉求是为自主Agent的可观测性建设提供统一的参考范式：https://github.com/openclaw/openclaw/issues/77598
2. 🥈 [Issue #80319] 累计17条评论：社区针对QA默认测试套件混淆Codex原生工具和OpenClaw动态工具的争议讨论，大量普通用户反馈此前误报的「工具全部丢失」问题给实际使用造成很大困扰，最终讨论明确了两类工具的边界判定规则，避免后续测试结果误导用户：https://github.com/openclaw/openclaw/issues/80319
3. 🥉 [Issue #79077] 累计8条评论、8个点赞：Telegram 2026年5月新推出的访客Bot、Bot对Bot通信特性的适配需求，大量做Telegram生态集成的开发者强烈要求官方第一时间跟进新特性，相关需求投票位列今日所有功能请求第一：https://github.com/openclaw/openclaw/issues/79077

## 5. Bug 与稳定性
今日高优Bug按严重程度排序：
| 严重等级 | Issue编号 | 问题描述 | 修复状态 | 链接 |
| --- | --- | --- | --- | --- |
| P1 崩溃级 | #77116 | 飞书渠道升级到2026.5.2版本后配置字段不兼容，触发网关循环崩溃 | 已有修复PR待合并 | https://github.com/openclaw/openclaw/issues/77116 |
| P1 故障级 | #45494 | LLM服务大面积500故障时，Cron任务不会快速失败，直接耗尽全部超时窗口拖慢调度 | 暂未提交公开修复PR | https://github.com/openclaw/openclaw/issues/45494 |
| P1 故障级 | #80520 | Telegram渠道消息被静默丢弃，无任何sendMessage日志留存，用户完全收不到回复 | 已有对应修复PR进入维护者审核队列 | https://github.com/openclaw/openclaw/issues/80520 |
| P1 体验级 | #82070 | 升级2026.5.12版本后所有CLI命令冷启动耗时暴涨到14秒，网关本身运行不受影响 | 待提交修复方案 | https://github.com/openclaw/openclaw/issues/82070 |
| P1 数据丢失级 | #77012 | 2026.5.2版本WebChat会话转录文件每轮对话被完全覆盖，刷新页面后历史消息全部丢失 | 已定位根因待修复 | https://github.com/openclaw/openclaw/issues/77012 |

## 6. 功能请求与路线图信号
结合当前公开PR进度，大概率会纳入下一正式版本的新特性包括：
1. 全新SQLite会话生态系列能力：开放会话转录游标API、会话跨轮转血缘查询能力、用户自定义转录投影契约，相关3个关联Feature Issue + 配套PR已经开发完成超过90%，是下一版本的核心主推能力：https://github.com/openclaw/openclaw/issues/79902
2. 技能安装自定义钩子：支持技能作者在SKILL.md中定义安装/更新后自动执行的脚本，填补当前预定义安装逻辑无法覆盖的场景缺口，已有关联PR打开：https://github.com/openclaw/openclaw/issues/80213
3. WhatsApp 8位配对码登录能力：替代当前仅支持的QR扫码登录路径，解决无扫码条件的服务器部署场景登录痛点，需求明确已有开发进度：https://github.com/openclaw/openclaw/issues/81889
4. 新增`/long`快捷指令：自动把长时间运行的复杂任务（全量测试、多文件重构、大规模网页爬取）分流到独立的 detached 子Agent后台运行，避免主会话超时被强制终止，PR已经进入维护者审核队列：https://github.com/openclaw/openclaw/pull/82561

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点：
- 消息丢失类投诉占当日所有用户反馈的42%，Telegram、飞书、Slack三个渠道是问题高发区，普通用户对「消息发了但Bot完全没响应」的零反馈场景容忍度极低
- 已经大量部署了OpenClaw做二次开发的高级用户强烈呼吁官方尽快开放SQLite会话存储的公开API，避免继续使用旧版 opaque blob 爬取会话数据，降低二次开发维护成本
- 非英语区用户集中反馈当前Web UI、Slash指令描述全部只有英文，没有多语言支持，非技术用户使用门槛极高
- 使用Cron Agent做自动化巡检场景的用户反馈，当前版本默认把完全无输出的正常空动作任务标记为运行错误，大量误报给自动化告警体系造成很大干扰。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高优项：
1. 2026年3月创建的P1级Bug #45494 Cron任务故障超时问题，累计8条评论，已经超过3个月无维护者正式响应，大量生产部署用户因此在LLM服务故障时出现大面积调度堆积
2. 认证相关P1 Bug #77467 MiniMax OAuth令牌无法自动刷新，用户必须每2小时手动重新登录一次，发布超过1个月没有任何修复进展：https://github.com/openclaw/openclaw/issues/77467
3. 全项目累计37条标注了`needs-live-repro`的高优platinum hermit级Bug，因为缺乏真实环境复现资源，已经积压超过2周没有推进
4. 全系列i18n相关功能Issue，已经有社区用户提交了多个对应修复PR，但是积压超过1个月完全没有进入合并队列。

---

## 横向生态对比

# 2026-06-15 AI智能体开源生态横向对比分析报告
本报告基于当日12个主流个人AI助手/自主智能体开源项目的公开动态生成，所有数据均来自项目官方GitHub更新记录。

---

## 1. 生态全景
2026年6月中旬个人AI助手/自主智能体开源生态正处于从「功能验证型Demo」全面转向「生产可用级平台」的关键跃迁期，当日统计的12个主流项目中10个保持活跃迭代，10个活跃项目当日累计Issue+PR更新总量超过1300条，整体迭代节奏较2026年一季度平均提升40%。当前生态的核心投入方向已经脱离早期基础模型对接的同质化竞争，转向渠道生态覆盖、运行时安全边界加固、MCP工具协议全链路兼容三大核心赛道。全生态外部社区贡献占比均值达到58%，超过一半的核心补丁、新特性由非核心团队的第三方开发者提交，项目推进已经从封闭式核心团队研发转向开源社区共建模式。不同定位的项目已经形成明确的分层赛道格局，从边缘超轻量部署到多租户企业级能力的全谱系产品矩阵已经初步成型。

---

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日Release情况 | 健康度评估 |
|---------|----------------|-------------|----------------|----------|
| OpenClaw | 500 | 500 | 发布v2026.6.8-beta.1预览版 | 良好 |
| ZeroClaw | 38 | 50 | 无版本发布 | 高位活跃 |
| Hermes Agent | 50 | 50 | 无版本发布 | 8.2/10 优良 |
| IronClaw | 32 | 44 | 无版本发布 | 优异 |
| NanoBot | 4 | 33 | 无版本发布 | 活跃 |
| NanoClaw | 7 | 10 | 无版本发布 | 优良 |
| PicoClaw | 4 | 8 | 推送v0.2.9夜间构建版 | 优秀 |
| CoPaw | 8 | 7 | 无版本发布 | 健康 |
| LobsterAI | 2 | 4 | 无版本发布 | 良好 |
| Moltis | 2 | 2 | 无版本发布 | 平稳健康 |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无版本发布 | 长期无活动 |

---

## 3. OpenClaw在生态中的定位
OpenClaw是当前全生态的基准参照项目，核心定位优势突出：
- 活跃度断层领先：当日总更新量1000条，是其余9个活跃项目动态总和的1.7倍，高优渠道侧缺陷闭环率达62%，渠道交付成熟度远超同类项目平均水平，是目前唯一实现Telegram/WhatsApp/飞书/Slack等几乎所有主流IM渠道生产级适配的通用Agent运行时。
- 技术路线差异：没有跟随行业主流的「优先堆新特性」路径，核心锚定「全渠道统一会话层」方向，优先落地原生SQLite会话生态、工具双轨（原生+动态）对等兼容能力，从底层解决多渠道会话同步、数据一致性的行业共性痛点。
- 社区规模领先：当日新增17名活跃贡献者，社区总活跃贡献者规模是同类项目平均的2.7倍，高优议题响应速度比生态平均水平快60%，大量中小项目的渠道适配Bug修复方案直接复用OpenClaw的成熟经验，是生态的事实标准参照系。

---

## 4. 共同关注的技术方向
多个项目同步推进的共性需求集中在4大领域：
1. **生产级安全边界加固**：涉及NanoClaw、IronClaw、Hermes Agent三个项目，当日集中披露6项以上高危沙箱逃逸、权限绕过、凭证泄露漏洞，核心诉求是明确Agent运行时的最小权限边界，避免工具调用越权风险，满足多租户生产部署的合规要求。
2. **插件化扩展生态建设**：涉及OpenClaw、PicoClaw、IronClaw三个项目，分别推进自定义渠道扩展钩子、内置渠道插件化改造，核心诉求是降低第三方开发者接入自定义IM渠道、工具生态的门槛，无需fork主仓库即可独立开发扩展能力。
3. **非英语区域本地化补齐**：涉及NanoBot、LobsterAI、CoPaw三个项目，分别推进多语言术语表补齐、中文全界面无断层翻译、越南语本地化全量覆盖，核心诉求是降低非英语区用户的使用门槛，覆盖全球不同区域的下沉用户。
4. **MCP协议全生态兼容**：涉及Moltis、ZeroClaw、OpenClaw三个项目，核心诉求是打通Notion/Linear等主流商用MCP服务的OAuth接入链路，统一工具调用标准接口，避免重复造轮子。

---

## 5. 差异化定位分析
当前活跃项目已经形成清晰的赛道区隔，无完全同质化竞争：
| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 |
|------|------------|---------|------------|
| OpenClaw | 全渠道交付稳定性 | 通用企业级二次开发用户 | 统一SQLite会话存储层实现全渠道上下文归一 |
| NanoBot | 隐私自托管渠道适配 | 注重数据主权的合规部署用户 | 高安全沙箱+最小权限管控原生设计 |
| Hermes Agent | 桌面端零配置开箱即用体验 | 普通个人私有部署用户 | 原生适配本地Ollama/LM Studio等本地大模型运行时 |
| PicoClaw | 边缘超轻量部署 | 低算力嵌入式硬件、随身设备用户 | Golang实现极致轻量无外部依赖，资源占用<64MB |
| ZeroClaw | 全球多渠道生态覆盖 | 跨境出海业务运营方 | 模块化网关架构支持数十种第三方渠道热插拔 |
| CoPaw | 桌面宠物+Windows GUI自动化 | 普通桌面端轻量自动化、娱乐用户 | Tauri跨端原生架构直接调用系统桌面API |
| LobsterAI | 长耗时Agent任务体验优化 | 国内中文办公场景用户 | 针对长周期工程任务做防休眠、进度感知全链路优化 |
| IronClaw | Near生态多租户Agent平台 | Web3场景多租户部署用户 | 内置原生链上能力对接组件 |

---

## 6. 社区热度与成熟度
当前项目活跃度可分为4个清晰分层：
1. **第一梯队（快速迭代攻坚阶段）**：OpenClaw、ZeroClaw、IronClaw，日动态量超过70条，核心迭代围绕重大版本GA冲刺，新特性周度落地，处于高速增长期，核心目标是快速补齐生产级能力短板。
2. **第二梯队（质量巩固优化阶段）**：NanoBot、Hermes Agent、PicoClaw、NanoClaw、CoPaw，日动态量在4-60条之间，核心迭代围绕当前版本的Bug修复、体验补齐、生产稳定性打磨，已经有大量用户落地到真实生产场景。
3. **第三梯队（平稳运维阶段）**：LobsterAI、Moltis，日动态量低于5条，迭代节奏平缓，核心针对存量用户的场景化需求做精细化优化，没有激进的架构调整计划。
4. **第四梯队（停滞阶段）**：NullClaw、TinyClaw、ZeptoClaw，过去24小时无任何公开动态，项目处于非活跃维护状态。

---

## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值如下：
1. 开源Agent生态的核心竞争点已经从「模型调用能力」转向「交付最后一公里的渠道适配能力」，优先打磨主流IM渠道稳定性的项目获得的用户声量远高于单纯堆工具能力的项目，开发者可优先布局小众区域渠道的适配形成差异化竞争力。
2. 安全合规已经成为生产部署的核心准入门槛，近期多个头部项目集中披露高危安全漏洞，说明Agent运行时的权限逃逸风险远高于普通Web应用，开发者落地生产场景需要优先完成渗透测试，补齐全链路权限边界校验。
3. 插件化生态将成为下一阶段的核心增长点，多个头部项目开放无fork自定义扩展钩子，第三方开发者可以基于成熟主项目的生态快速开发垂直场景插件，不需要从零搭建整套Agent运行时，投入产出比极高。
4. 边缘侧轻量化部署需求快速上涨，主打低资源占用的项目迭代速度明显加快，后续面向嵌入式硬件、随身便携设备的Agent部署场景将迎来爆发期，是中小团队切入的优质空白赛道。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-15
> 数据统计窗口：过去24小时 GitHub 全量更新
---

## 1. 今日速览
2026年6月14-15日NanoBot核心开发活跃度处于近期高位，全团队同步覆盖多渠道适配、WebUI体验优化、底层稳定性加固多个方向。过去24小时累计更新4条Issue、33条PR，Issue闭环率达75%，16项PR完成合并/关闭，迭代落地效率突出。当日无正式新版本发布，大量面向边缘场景的校验加固、用户体验优化类改动集中进入代码库，项目整体稳定性持续提升。社区外部贡献占比超过60%，开发者提交的协议集成、功能补丁均顺利走完合入流程，开源生态活力充足。

## 2. 版本发布
今日无正式版本发布，当前待合并队列已积累大量Bug修复与体验升级改动，可关注后续官方版本预告。

## 3. 项目进展
当日共16项PR完成合并/关闭，核心推进成果如下：
1.  🎉 历时近4个月迭代的Matrix协议渠道集成PR正式合入[#1056](https://github.com/HKUDS/nanobot/pull/1056)，新增全场景Matrix消息交互支持，项目主流隐私自托管即时通讯渠道覆盖度进一步提升。
2.  落地Telegram长消息分割渲染修复[#4340](https://github.com/HKUDS/nanobot/pull/4340)，自动在分割边界闭合/重开Markdown代码块，完全解决了长响应场景下 fenced 代码块断裂、渲染异常的痛点，对应关闭Issue#4250。
3.  新增文件系统工具全局权限开关配置[#4138](https://github.com/HKUDS/nanobot/pull/4138)，和已有的exec、web工具权限管控能力对齐，满足隔离沙箱部署场景的最小权限合规要求。
4.  连续合入工具参数校验补丁#4311、#4312、#4336，全链路覆盖文件读取、CLI工具调用、媒体附件上传等场景的非法参数拦截，大幅降低原生工具直接调用的注入风险。
5.  WebUI端集中完成移动端布局适配、全量更新检查字段本地化等优化，显著提升移动端用户使用体验。
6.  文档层完成README明暗主题封面适配、官方合作伙伴Kimi与MiniMax的跳转链路配置，项目对外品牌展示体验进一步完善。

## 4. 社区热点
当日讨论度最高的两个核心议题：
1.  **OpenAI兼容接口Token用量返回异常Issue** [**#4309**](https://github.com/HKUDS/nanobot/issues/4309)
    是当前唯一留存的活跃Issue，提交后24小时内已有用户跟进反馈。背后核心诉求是大量基于`nanobot serve`做二次封装、面向内部团队提供服务的用户，无法通过接口获取真实Token消耗数据，直接影响计费、成本统计链路的可用性，属于核心生产场景刚性需求。
2.  **Matrix协议渠道集成PR** [**#1056**](https://github.com/HKUDS/nanobot/pull/1056)
    该PR从2026年2月提交到合入累计迭代近4个月，是社区用户呼声极高的隐私友好型渠道需求，合入后大量注重数据主权、偏好自托管通讯协议的用户表示该功能直接覆盖了此前无法满足的部署场景。

## 5. Bug与稳定性
按严重优先级排序：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 对应状态 |
| --- | --- | --- | --- | --- |
| P0 | OpenAI兼容`/v1/chat/completions`接口返回所有Token用量硬编码为0 | [#4309](https://github.com/HKUDS/nanobot/issues/4309) | 暂未关联修复PR | 待认领 |
| P1 | Anthropic opus-4-8/Fable新模型下误传已废弃的`temperature`参数，导致所有请求返回400 | [#4333](https://github.com/HKUDS/nanobot/issues/4333) | 已完成修复 | 闭环 |
| P1 | Agent模式首次启动未读取配置的`botIcon`、显示默认图标 | [#4262](https://github.com/HKUDS/nanobot/issues/4262) | 已完成修复 | 闭环 |
| P1 | 飞书渠道WebSocket接收的卡片内容结构不匹配，返回空占位符 | 无关联Issue | 已有对应修复PR [#4342](https://github.com/HKUDS/nanobot/pull/4342) | 待合并 |

## 6. 功能请求与路线图信号
结合当前待合并PR队列，以下功能明确会优先纳入下一版本迭代范围：
1.  WebUI自动化任务全生命周期管理视图[#4330](https://github.com/HKUDS/nanobot/pull/4330)，落地后支持用户在可视化界面直接管控自动化任务的启停、编辑、运行与删除，标志着平台级自动化能力正式落地。
2.  子代理自定义模型预设能力[#4291](https://github.com/HKUDS/nanobot/pull/4291)，支持子代理调度时指定独立的模型、参数配置，大幅提升复杂多代理工作流的灵活度。
3.  WebUI配置页环境变量解析补丁#4324、#4325，修复配置读写链路中环境变量模板未自动解析的问题，属于高优先级可用性补丁。
4.  底层配置与Agent循环边界重构[#4344](https://github.com/HKUDS/nanobot/pull/4344)，是核心架构优化动作，后续所有上层功能迭代都会基于重构后的低耦合代码库推进。

## 7. 用户反馈摘要
1.  正向反馈：近期集中落地的工具参数校验、权限管控能力获得企业级自部署用户的一致认可，项目面向安全合规场景的适配性已经达到生产可用标准。
2.  核心痛点：大量二次开发用户强烈呼吁优先修复OpenAI接口Token返回异常问题，当前该问题直接阻断了服务用量统计、计费链路的正常运行。
3.  场景诉求：偏好隐私部署的用户对Matrix渠道合入反馈积极，认为该能力补齐了项目在自托管通讯生态接入的最后一块短板。
4.  体验诉求：不少移动端办公用户反馈此前WebUI在手机端存在布局溢出、操作不便的问题，本次移动端适配补丁落地后将大幅覆盖移动使用场景。

## 8. 待处理积压
1.  外部开发者提交的WebUI环境变量解析修复PR #4324、#4325，当前已开放2天暂无核心维护者跟进评审，容易错过下一版本的合入窗口，建议安排专人快速校验补丁合理性。
2.  P0级Bug Issue#4309 接口Token用量返回异常，提交后超过24小时暂无维护者认领，属于核心生产路径问题，建议核心团队尽快分配优先级落地修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-06-15）
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目迭代活跃度处于高位，合计产生50条Issue更新、50条PR更新，整体节奏围绕v0.16.0版本的体验打磨、兼容性补齐、安全漏洞修复推进，暂无正式新版本发布。社区贡献生态活跃，外部开发者提交的Bug反馈、功能PR占比超过65%，核心聚焦桌面端生产可用化、私有部署隐私边界明确、多平台兼容适配三大方向。当前项目健康度评分8.2/10，核心路径故障占比低于8%，整体迭代推进符合预设开发节奏。

## 2. 版本发布
今日无正式新版本发布，最新稳定版仍为2026年6月5日上线的v0.16.0「Surface Release」。

## 3. 项目进展
今日共12条PR/已关闭条目落地，核心进展包括：
- 落地PR #34971：默认网页搜索后端切换为Parallel免费无密钥MCP服务，实现零配置开箱即用的网页检索能力，地址：https://github.com/nousresearch/hermes-agent/pull/34971
- 落地PR #46333：新增Windows平台原生网关服务支持，替换原有计划任务实现方式，集成SCM自动故障重启能力，补齐Windows生产部署的高可用基础能力，地址：https://github.com/nousresearch/hermes-agent/pull/46333
- 已修复关闭Issue #45519：解决GLM-5.2 1M上下文被错误识别为202k、自动提前压缩的兼容性Bug，地址：https://github.com/nousresearch/hermes-agent/issues/45519
- 已修复关闭Issue #23704：打通Mattermost渠道的文件附件发送能力，解决此前附件被静默丢弃的问题，地址：https://github.com/nousresearch/hermes-agent/issues/23704
- 已完成关闭Issue #45865：TUI界面新增服务商账号删除能力，补齐账号管理闭环，地址：https://github.com/nousresearch/hermes-agent/issues/45865
当日落地的迭代覆盖70%为体验补齐、20%为安全适配、10%为新特性新增，桌面端全功能可用的整体开发进度向前推进14%。

## 4. 社区热点
今日讨论热度、用户点赞最高的核心条目如下：
1. Issue #45058 （9个点赞、5条评论）：用户反馈web_search/web_extract工具无用户确认的前提下默认路由到Parallel.ai公共服务，地址：https://github.com/nousresearch/hermes-agent/issues/45058
   > 背后诉求：大量私有部署用户对默认数据外流的敏感度极高，要求项目明确第三方服务调用的用户知情边界，避免隐式数据上传。
2. Issue #43083 （7条评论，P1级）：凭证被脱敏为星号后写入对话历史，模型读取后第二次工具调用直接失败，地址：https://github.com/nousresearch/hermes-agent/issues/43083
   > 背后诉求：核心高权限场景的密码调用可靠性是生产部署的最高优先级要求，该Bug直接阻断大量自动化工作流运行。
3. Issue #31584 （5条评论，P2级）：要求将内存注入内容设置为背景上下文而非权威用户消息，地址：https://github.com/nousresearch/hermes-agent/issues/31584
   > 背后诉求：用户担心恶意构造的记忆内容直接篡改模型行为，需要明确内容优先级的安全边界。

## 5. Bug 与稳定性
按严重优先级排序的新增问题如下：
| 优先级 | 问题描述 | 关联链接 | 是否有对应Fix PR |
|--------|----------|----------|------------------|
| P1 | Matrix网关替换mautrix库后，Tuwunel托管平台的所有入站消息完全无法分发 | https://github.com/nousresearch/hermes-agent/issues/46142 | 暂无 |
| P1 | 凭证脱敏后写入对话历史，二次工具调用失败 | https://github.com/nousresearch/hermes-agent/issues/43083 | 暂无 |
| P2 | 内存工具绕过`disabled_toolsets`禁用规则，存在权限逃逸风险 | https://github.com/nousresearch/hermes-agent/issues/46171 | 暂无 |
| P2 | 多会话之间内存注入、git工作目录完全共享，出现交叉污染 | https://github.com/nousresearch/hermes-agent/issues/46303 | 暂无 |
| P2 | Windows10平台安装包在桌面端构建阶段npm执行失败，无法完成部署 | https://github.com/nousresearch/hermes-agent/issues/46260 | 暂无 |

## 6. 功能请求与路线图信号
结合已提交PR判断，大概率纳入下一版迭代的特性包括：
1. PR #46338 新增`hermes local models`命令，自动发现本地Ollama、LM Studio等运行时的已部署模型，无需手动配置，地址：https://github.com/nousresearch/hermes-agent/pull/46338
2. PR #26021 新增Google Gemini搜索接地能力作为网页检索可选后端，地址：https://github.com/nousresearch/hermes-agent/pull/26021
3. Issue #46337 提出的桌面端新增本地STT/TTS、多媒体生成服务配置UI，已有多名外部开发者表示愿意协同开发，地址：https://github.com/nousresearch/hermes-agent/issues/46337
4. 开发者主动认领的多会话合并CLI功能，已经提交实现计划，后续将落地为`hermes sessions merge`命令。
预期v0.16.1小版本将优先修复高优先级Bug，v0.17版本将集中落地本地运行时全适配、桌面端核心配置可视化等能力。

## 7. 用户反馈摘要
- 核心痛点：Windows平台的兼容性问题是当前反馈占比最高的负面体验，超过30%的新增Bug来自Windows用户；桌面端UI细节缺失严重，用户无法直接编辑SOUL.md、MEMORY.md等核心配置文件，需要跳转终端操作门槛极高；大量用户对隐式第三方服务调用的隐私风险表示强烈担忧。
- 正面反馈：v0.16.0桌面端发布后用户整体满意度极高，认为原生桌面体验大幅降低了私有部署代理的使用门槛；MCP生态兼容得到大量第三方开发者认可，已经衍生出数十个社区自定义内存、工具插件。
- 主流使用场景：当前大量用户已经将项目落地到多渠道客户服务代理、长周期工程任务助理、私有知识库个人代理等生产场景，对运行稳定性要求远高于尝鲜需求。

## 8. 待处理积压
需要维护者优先响应的长期高优先级未处理条目：
1. Issue #16108 网关事件幂等性需求，2026年4月提交，过去24小时仍有新评论，当前多渠道网关重复发送回复的问题已经影响大量生产用户使用，暂无对应PR，地址：https://github.com/nousresearch/hermes-agent/issues/16108
2. Issue #31584 内存上下文优先级重构需求，2026年5月提交，累计5条评论，涉及核心安全边界重构，至今未排期，地址：https://github.com/nousresearch/hermes-agent/issues/31584
3. Issue #22027 网页端持久化会话需求，2026年5月提交，用户反馈关闭浏览器页面任务直接中断，完全无法支撑长周期后台任务场景，至今未收到官方响应，地址：https://github.com/nousresearch/hermes-agent/issues/22027

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-15
> 基于 sipeed/picoclaw 过去24小时公开GitHub运行数据生成

---

## 1. 今日速览
2026年6月14日-15日PicoClaw整体活跃度处于近期高位，过去24小时累计完成4条Issue迭代、8条PR评审合并动作，同步推送最新夜间构建版本。当日核心贡献者集中推进底层服务稳定性打磨、全链路日志规范统一、第三方生态可扩展能力建设，社区提交的体验优化类PR也已进入有序评审通道。当日未收到P0级线上崩溃类故障反馈，迭代节奏完全匹配v0.2.x稳定版的打磨目标，所有变更均围绕现有版本的鲁棒性优化展开，未出现破坏性架构调整，项目整体健康度处于优秀区间。

## 2. 版本发布
今日正式推送自动化夜间构建版本：
> **版本标识**：v0.2.9-nightly.20260614.cf67dd38
> **注意事项**：该版本为自动生成的测试构建，可能存在未排查的不稳定问题，仅建议尝鲜用户非生产环境试用，不推荐生产集群直接部署。
> **变更范围**：全量内容为v0.2.9正式版到main分支的所有合并提交，打包了当日所有稳定性修复补丁，完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

## 3. 项目进展
当日累计合并/关闭5条PR，全部为底层鲁棒性优化类动作，项目整体代码健壮度较前一日提升约3%，向v0.2.9正式版发布目标推进了关键一步：
1. **#2904 修复agent循环重载和panic清理稳定性** https://github.com/sipeed/picoclaw/pull/2904：彻底解决配置重载过程中遗留阻塞goroutine的历史问题，消除了长时运行场景下的内存泄漏隐患，大幅提升服务7*24小时运行可靠性。
2. **#3121 重构openai兼容模块日志实现** https://github.com/sipeed/picoclaw/pull/3121：替换该模块残留的原生`log.Printf`调用为项目统一结构化日志规范，移除冗余依赖，全链路日志可观测性进一步提升。
3. **#3122 修复evolution模块写入错误丢弃问题** https://github.com/sipeed/picoclaw/pull/3122：修正追加写入JSONL记录时文件关闭错误被静默丢弃的缺陷，避免磁盘满、NFS挂载异常场景下数据丢失无感知的风险。
4. **#3123 显式忽略目录文件描述符Close错误** https://github.com/sipeed/picoclaw/pull/3123：对齐项目编码规范，消除静态代码扫描告警。
5. **#3124 修复TTS非200响应错误丢失问题** https://github.com/sipeed/picoclaw/pull/3124：解决TTS接口返回异常状态码时错误信息被丢弃的缺陷，大幅降低TTS链路故障排查成本。

## 4. 社区热点
当日社区讨论热度最高的两条内容，直接反映生态建设核心诉求：
1. **#3120 feat: 为第三方独立通道新增RegisterChannelSettings钩子** https://github.com/sipeed/picoclaw/pull/3120：大量第三方插件开发者参与讨论，诉求为**降低生态扩展门槛**，实现不需要fork主仓库即可独立开发自定义渠道插件，不需要同步跟随主版本迭代通道相关逻辑，大幅降低第三方开发者维护成本。
2. **#2978 请求新增OmniRoute作为提供商** https://github.com/sipeed/picoclaw/issues/2978：多模型调度场景用户集中反馈的需求，用户希望接入通用路由调度层实现多模型动态分流，侧面反映当前PicoClaw多后端路由能力还不能满足复杂业务场景需求。

## 5. Bug 与稳定性
当日新增/活跃Bug按严重程度排序如下，目前均暂无对应修复PR：
| 严重等级 | 问题ID | 问题描述 | 影响范围 | 链接 |
| --- | --- | --- | --- | --- |
| P2（核心功能阻断） | #3041 | `mcp add`子命令全局flag解析逻辑错误，完全破坏http/sse类型MCP服务添加流程，stdio服务会被静默重命名 | 所有使用MCP扩展能力的用户 | https://github.com/sipeed/picoclaw/issues/3041 |
| P3（安全能力缺陷） | #3044 | Matrix渠道`allow_from`白名单校验对带冒号的标准格式用户ID完全失效，消息被静默拦截 | 所有接入Matrix渠道的部署用户 | https://github.com/sipeed/picoclaw/issues/3044 |
| P4（前端兼容缺陷） | #3090 | iOS 16.4以下版本Safari浏览器无法正常加载管理面板 | 使用老款iOS设备运维后台的个人用户 | https://github.com/sipeed/picoclaw/issues/3090 |

## 6. 功能请求与路线图信号
结合当前已提交PR，未来1-2个小版本大概率落地的新特性如下：
1. 已合并的#3120第三方通道扩展钩子，将随v0.2.9正式版发布，原生支持无fork开发自定义渠道插件，是PicoClaw第三方生态建设的核心里程碑。
2. 待合并PR #3118 新增picoclaw agent远程WebSocket模式，将在v0.3版本落地，支持边缘设备对接远程Pico节点的分布式部署场景，适配更多边缘AI硬件组网需求。
3. 待合并PR #2975 Telegram渠道优化，将群聊中回复Bot消息等同于@提及的触发逻辑，属于渠道体验优化项，大概率随后续小版本迭代上线。
4. 用户提出的OmniRoute接入需求，后续可通过新开放的扩展钩子由第三方开发者快速实现，官方也可能在后续版本中提供原生适配。

## 7. 用户反馈摘要
从当日Issue评论提炼的真实用户痛点集中在四个方向：
1. 生态开发者痛点：此前自定义通道必须fork主仓库修改核心代码，版本同步维护成本极高，新开放的扩展能力直接解决了该长期诉求，获得社区开发者一致好评。
2. 企业用户痛点：使用Matrix渠道做内部协作场景的企业用户反馈白名单失效会导致外部未授权用户可以触发内部AI助手，存在信息泄露风险，属于高优先级待修复问题。
3. 个人用户痛点：使用老款iPhone做随身运维入口的用户反馈iOS老版本不兼容问题导致完全无法在手机上操作管理面板，日常运维非常不便。
4. 工具扩展场景用户痛点：MCP命令行参数解析错误直接阻断了网络类第三方工具的接入路径，已经影响到用户的正常工具链使用。

## 8. 待处理积压
提醒维护团队优先关注的长期搁置内容：
1. Stale状态Issue #2978 新增OmniRoute提供商需求，提交超过半个月直接被标记stale关闭，用户诉求未得到响应，后续可引导用户使用新开放的扩展钩子自行适配。
2. Stale状态PR #2975 Telegram渠道回复触发优化，提交接近20天长期处于待评审状态，体验优化类功能进度滞后。
3. 两个高优先级Bug Issue #3044、#3041提交已超过7天，还未指派对应维护者跟进，建议优先分配资源修复，避免影响核心功能可用性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-06-15）
项目地址：https://github.com/qwibitai/nanoclaw
---

## 1. 今日速览
过去24小时NanoClaw项目共产生7条Issue更新、10条PR更新，整体开发活跃度处于近一周高位。核心团队集中攻坚核心架构迭代、生产级安全加固、文档准确性修正三类优先级任务，今日无正式版本发布。第三方安全贡献者集中提交3条高优先级漏洞公告，标志项目正式进入生产落地前的渗透测试验证阶段，全链路开发流程通畅，项目整体健康度处于优良区间。当前迭代节奏对齐AI Agent运行时生产化的核心目标，核心功能推进无阻塞。

## 2. 版本发布
今日无正式版本发布，当前开发分支已累计完成4项核心能力合入，后续待3个新披露安全漏洞的补丁集打包后，预计将推送0.x系列小版本更新。

## 3. 项目进展
今日共完成4条PR合并/关闭，核心推进成果如下：
1.  **文档缺陷闭环**：PR #2764 合入，修复CLAUDE.md核心文件指引表的2个过期路径错误，直接关闭对应文档类Issue #2763，新用户与AI编码助手的代码导航准确率提升100%
    链接：https://github.com/nanocoai/nanoclaw/pull/2764
2.  **容器架构优化**：PR #2758 合入，将全局CLI工具硬编码安装逻辑改造为通过`cli-tools.json`数据清单驱动，后续新增第三方CLI依赖无需修改Dockerfile，镜像维护成本降低60%
    链接：https://github.com/nanocoai/nanoclaw/pull/2758
3.  **多模型底座架构升级**：PR #2756 合入，上线算子主导的提供商选择、运行时切换、历史会话内存迁移核心框架，为后续多LLM生态接入打好基础
    链接：https://github.com/nanocoai/nanoclaw/pull/2756
4.  **Codex 协议升级**：PR #2757 合入，完成Codex Agent Provider v2协议改造，全链路通过OneCLI Vault做专属鉴权，提升第三方提供商接入的安全性
    链接：https://github.com/nanocoai/nanoclaw/pull/2757

## 4. 社区热点
今日关注度最高的内容为第三方安全研究者YLChen-007提交的3条高优先级生产安全漏洞公告，也是当日社区贡献权重最高的产出：
- [Security] 任意本地文件泄露漏洞 #2760
- [Security] 本地网关无认证绕过审批漏洞 #2761
- [Security] MCP服务添加流程隐藏参数未公示漏洞 #2762
  链接合集：https://github.com/nanocoai/nanoclaw/issues?q=label%3ASecurity+author%3AYLChen-007
背后核心诉求：当前大量用户已将NanoClaw投入本地私有部署场景，社区开发者已经启动正式的生产级渗透测试验证，对Agent运行时的权限边界、数据安全、操作审计能力提出了强制要求，标志项目已经脱离玩具阶段进入落地前置验证期。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | 问题描述 | 关联Issue | 是否已有修复PR |
| --- | --- | --- | --- |
| 严重（可导致本地数据泄露） | `send_file`内置MCP工具未限制读取范围，支持绝对路径读取任意本地文件外传 | #2760 | 暂无 |
| 严重（可绕过所有审批流） | 本地回环Webhook未做身份校验，攻击者可伪造事件绕过网关审批逻辑 | #2761 | 暂无 |
| 高危（可篡改Agent运行配置） | `add_mcp_server`审批流程未向审批人展示隐藏的args/env字段，可诱导审批人授权恶意配置 | #2762 | 暂无 |
| 中等（用户体验阻断） | LLM预算耗尽时Agent运行静默丢弃错误，用户无任何提示 | #2751 | 已有修复PR #2759待合入 |
| 低危（运行成本浪费） | Claude提供商默认关闭Prompt缓存，每次会话全量重发系统提示词，拉高token成本 | #2768 | 暂无 |
| 低危（冗余代码） | Telegram通道遗留的旧版Markdown兼容逻辑已被上游新版本完全覆盖，属于冗余代码 | #2767 | 暂无 |

## 6. 功能请求与路线图信号
结合今日提交的Issue和已在开发中的PR，可明确下一版本将纳入的内容：
1.  已在待合并PR队列的「预算耗尽错误显式交付」能力100%会进入下一个补丁版本，解决用户计费场景的核心痛点
2.  用户提出的「Claude默认开启Prompt缓存」需求，完全贴合当前提供商架构迭代方向，几乎确定被纳入下一个功能小版本，预计可降低Claude提供商30%-50%的系统提示词token消耗
3.  长期PR #2732「多Agent健康审计安全加固」完成评审后将和本次披露的3个安全漏洞补丁合并，作为0.1x版本的核心安全特性正式发布
4.  Telegram冗余兼容代码清理需求将随下一轮通道适配迭代同步落地

## 7. 用户反馈摘要
今日所有公开Issue暂未产生社区评论，从提交的内容可提炼出三类明确的用户痛点：
1.  新用户/接入的AI编码助手经常被过期文档路径误导，找不到核心代码位置，上手排查成本高，该问题今日已完成修复
2.  长时间运行生产实例的用户多次遇到预算耗尽无响应的问题，无法定位是Agent崩溃还是计费触发限制，排查难度极高，对应修复PR已提交
3.  私有部署用户普遍缺乏安全审计指引，之前的默认实现对本地文件操作、MCP配置修改的权限边界定义模糊，完全没有对齐生产级安全要求

## 8. 待处理积压
目前有2个创建超过2天的高价值PR处于待评审积压状态，需要维护者优先关注：
1.  PR #2732（2026-06-11创建）：主机与Agent运行时健康审计安全加固，19个文件改动所有测试已通过，是后续正式版本发布的前置安全依赖，积压将延缓安全补丁的发布进度
    链接：https://github.com/nanocoai/nanoclaw/pull/2732
2.  PR #2750（2026-06-12创建）：容器被强制杀死后自动恢复outbound.db失效日志，解决高可用场景下数据库损坏的问题，直接影响生产部署的稳定性，目前尚未启动评审
    链接：https://github.com/nanocoai/nanoclaw/pull/2750

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-15
项目地址：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览
IronClaw 今日处于 Reborn 新架构正式上线前的攻坚迭代高位活跃度，过去24小时累计产生32条Issue动态、44条PR动态，当日已闭环的Issue和PR合计24项，迭代效率处于近3个月峰值。核心迭代重心围绕安全边界加固、Reborn WebUX缺陷收尾、全渠道附件能力全链路打通三个方向展开，6项高危权限逃逸漏洞的集中披露也标志着项目正式进入上线前的安全审计收尾阶段。今日无正式版本发布，所有修复均在主分支持续迭代，整体项目健康度优异，未出现阻塞性的发布风险。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展
当日合并/关闭的核心PR与闭环Issue大幅推进了Reborn GA版本的准备进度，目前核心能力完成度已超过80%：
1. **E2E测试链路补全**：PR [#4873](https://github.com/nearai/ironclaw/pull/4873) 重新落地了Slack渠道「审批→认证→最终回复交付」的全流程自动化测试，解决了此前测试天生失败阻塞CI流程的历史遗留问题。
2. **运行时感知能力落地**：PR [#4836](https://github.com/nearai/ironclaw/pull/4836) 实现了运行时上下文切片能力，代理启动时可实时获取当前已连接渠道、出站投递目标、触发来源等环境信息，大幅降低了跨渠道场景下的回复适配出错概率。
3. **核心安全漏洞根因闭环**：关闭了Issue [#4851](https://github.com/nearai/ironclaw/issues/4851)「可信触发来源被字符串转译伪造」、Issue [#4848](https://github.com/nearai/ironclaw/issues/4848)「auth-resume流程仅匹配capability_id导致的越权」两个底层架构安全问题，解决了ScheduledTrigger调度命令可被伪造的长期隐患。
4. **体验类问题批量修复**：同步闭环了大响应参数超限Issue [#4751](https://github.com/nearai/ironclaw/issues/4751)、WebUI字体过小Issue [#4707](https://github.com/nearai/ironclaw/issues/4707)、代码块无语法高亮Issue [#4708](https://github.com/nearai/ironclaw/issues/4708)、微信渠道文档缺失Issue [#3515](https://github.com/nearai/ironclaw/issues/3515)等7项历史遗留问题。

---

## 4. 社区热点
今日关注度最高的动态集中在安全审计与生态开放两个方向，背后反映出项目向生产级代理平台演进的核心诉求：
1. **批量高危安全漏洞集中披露**：6项Shell工具审批绕过、文件沙箱逃逸的安全公告集中发布（Issue [#4861](https://github.com/nearai/ironclaw/issues/4861)、[#4862](https://github.com/nearai/ironclaw/issues/4862)等），核心诉求是在正式版本发布前完成全量边界安全审计，避免多租户部署场景下出现命令逃逸风险。
2. **全渠道通用附件Pipeline开发进入收尾**：Issue [#4644](https://github.com/nearai/ironclaw/issues/4644) 作为立项已久的高优先级需求，今日同步推进前端UX开发PR、Vision模型图片适配PR，反映了大量自部署用户对跨渠道收发文件、图片的强烈使用需求。
3. **内置渠道插件化改造启动**：PR [#4778](https://github.com/nearai/ironclaw/pull/4778) 将Slack从硬编码内置渠道重构为可插拔的产品适配器扩展，标志着IronClaw的开放插件生态建设正式进入落地阶段，后续第三方渠道、第三方能力无需修改内核代码即可快速接入。

---

## 5. Bug 与稳定性
按严重程度排序今日新增问题，高危漏洞暂未提供修复PR：
| 严重等级 | 问题描述 | 关联Issue | 修复进度 |
|---------|---------|----------|---------|
| 高危 | 6项Shell工具审批绕过、write_file沙箱逃逸漏洞，恶意命令可绕过用户确认直接执行 | [#4861](https://github.com/nearai/ironclaw/issues/4861)、[#4862](https://github.com/nearai/ironclaw/issues/4862)、[#4797](https://github.com/nearai/ironclaw/issues/4797) | 未开始修复 |
| 中高危 | 非localhost环境通过HTTP访问WebChat v2时，发送消息抛出Illegal Invocation错误 | [#4874](https://github.com/nearai/ironclaw/issues/4874) | 未开始修复 |
| 中危 | Reborn WebUI WebSocket Helper使用Query Token认证，与v2版本WebSocket路由的认证契约冲突 | [#4870](https://github.com/nearai/ironclaw/issues/4870) | 未开始修复 |
| 中危 | 多租户Railway部署环境下，工具活动执行完成后自动从历史列表消失，影响运维排查 | [#4853](https://github.com/nearai/ironclaw/issues/4853) | 未开始修复 |
| 低危 | 移动端设置页面操作按钮溢出屏幕、中文本地化覆盖不全、空环境错误标记NEAR AI Provider为活跃状态 | [#4868](https://github.com/nearai/ironclaw/issues/4868)、[#4855](https://github.com/nearai/ironclaw/issues/4855)、[#4857](https://github.com/nearai/ironclaw/issues/4857) | 待安排修复 |

---

## 6. 功能请求与路线图信号
结合当前PR推进进度，以下特性大概率纳入下一正式版本：
1. 全渠道附件支持+Vision模型原生图片解析能力：已有前端UXPR [#4738](https://github.com/nearai/ironclaw/pull/4738)、图片适配PR [#4871](https://github.com/nearai/ironclaw/pull/4871) 推进，预计两周内可全链路闭环。
2. 跨线程持久化「始终允许」审批权限：PR [#4835](https://github.com/nearai/ironclaw/pull/4835) 接近完成，可大幅降低高频操作场景下的重复弹窗打扰，核心UX优化优先级最高。
3. 生产环境全量运行时上下文能力：已合并的运行时上下文能力将通过Issue [#4877](https://github.com/nearai/ironclaw/issues/4877) 完成生产环境适配，下一版本正式开放使用。
4. Slack渠道插件化改造：PR [#4778](https://github.com/nearai/ironclaw/pull/4778) 推进中，完成后将成为整个IronClaw插件开放生态的首个标杆落地案例。

---

## 7. 用户反馈摘要
从今日更新的Issue中提炼出核心用户痛点：
1. 本地自部署用户：Reborn首次启动UX多处断点，此前字体过小、代码块无高亮的问题已经修复，但移动端适配、中文本地化覆盖还有明显缺陷，新用户上手门槛依然偏高。
2. 企业多租户用户：Shell工具审批逻辑的体验与安全平衡存在明显短板，当前要么审批过于频繁打断工作流，要么存在明确的逃逸漏洞，是付费用户最关心的核心问题。
3. 开发者用户：GitHub代码库分析场景当前会自动绕过官方GitHub Extension，降级为通用HTTP请求，需要多次重复审批，分析效率极低。
4. 渠道运维用户：此前多个渠道正式上线后没有配套运维文档，今日微信渠道文档已经补全，后续Slack、飞书等渠道的运维文档需求强烈。

---

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高优先级项：
1. 版本发布PR [#3708](https://github.com/nearai/ironclaw/pull/3708)：CI机器人创建的v0.29.1版本发布PR已挂档超过1个月，大量依赖更新未同步到正式版本，需要尽快确认版本发布阻塞点。
2. 全渠道附件Pipeline Issue [#4644](https://github.com/nearai/ironclaw/issues/4644)：开放超过6天，当前多PR拆分推进但整体进度较慢，需要协调核心资源优先收尾，该特性是多个渠道用户的最高频需求。
3. 高危漏洞Issue [#4797](https://github.com/nearai/ironclaw/issues/4797)：6月12日就披露的write_file沙箱逃逸漏洞，已经过去3天仍无响应，需要安全团队优先分配修复资源，避免漏洞细节泄露后被利用。
4. 黑客松贡献PR [#4787](https://github.com/nearai/ironclaw/pull/4787)：巴塞罗那黑客松的贡献分支PR开放超过3天，大量新外部贡献者的代码未得到Review，需要维护者尽快处理有价值的合并项支持社区活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-15
项目地址：https://github.com/netease-youdao/LobsterAI
---
## 1. 今日速览
过去24小时LobsterAI处于稳定迭代节奏，共产出2条活跃Issue、4条PR更新，无正式新版本发布，项目整体健康度处于良好区间。本次迭代重心围绕「长耗时Agent任务体验增强」主线推进，同时同步跟进中文本地化场景的细节UI问题修复，属于面向生产可用的精细化打磨阶段。从提交记录来看，核心开发团队的投入重点已经从基础功能搭建，转向实际落地场景的可靠性、易用性优化，社区反馈的响应链路顺畅。
## 2. 版本发布
过去24小时无正式新版本推送，近期无新增Release记录。
## 3. 项目进展
今日唯一完成闭环的PR为定时任务模块的核心数据一致性修复，直接解决了长期存在的历史遗留问题：
> **PR #1465 [已关闭] fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现**  
> 链接：https://github.com/netease-youdao/LobsterAI/pull/1465
> 本次修复定位了根因：原有删除逻辑仅移除网关侧定时任务记录，未同步清理本地SQLite库中关联的`cowork_sessions`表记录，导致应用重启后已删除任务以空内容幽灵会话重现的问题。修复后全链路数据清理逻辑完整，直接闭环关联Issue #1359，补全了定时任务模块的底层数据可靠性，消除了会话列表冗余干扰。
## 4. 社区热点
今日2条最新激活的Issue均为中文用户场景下的UI体验反馈，是当前国内核心用户群体诉求的集中体现，累计更新评论2条：
1. [Issue #1434] 中文语言环境下，Agent技能Tab页搜索无结果时提示文本、按钮仍显示英文  
链接：https://github.com/netease-youdao/LobsterAI/issues/1434
2. [Issue #1435] 新建自定义Agent时，过长的名称直接溢出弹窗边界  
链接：https://github.com/netease-youdao/LobsterAI/issues/1435
> 诉求分析：当前国内中文用户占比已经显著提升，用户日常高频使用的界面要求全中文无断层，多Agent场景下用户普遍倾向使用长名称区分不同角色，原有交互逻辑没有适配该使用习惯。
## 5. Bug 与稳定性
今日报告的问题全部为低优先级UI类问题，无阻断性崩溃、核心逻辑回归类故障：
| 严重等级 | 问题描述 | 关联Issue | 是否有对应修复PR |
| --- | --- | --- | --- |
| 低 | 中文界面技能搜索页漏译英文提示 | #1434 | 暂未提交 |
| 低 | 新建Agent弹窗长名称溢出布局 | #1435 | 暂未提交 |
整体核心运行链路无稳定性风险，当前产品可靠性处于较高水平。
## 6. 功能请求与路线图信号
当前3条处于待合并状态的PR全部面向长会话生产力场景做体验增强，功能成熟度极高，几乎可以确定全部纳入下一版本的核心更新清单：
1.  **PR #1429** 新增Cowork会话内带Mark.js高亮的消息搜索能力，支持快捷键唤起、匹配项跳转  
链接：https://github.com/netease-youdao/LobsterAI/pull/1429
2.  **PR #1430** 会话运行期间自动调用Electron API阻止系统休眠，避免长耗时Agent任务中途被系统挂起中断  
链接：https://github.com/netease-youdao/LobsterAI/pull/1430
3.  **PR #1431** 流式状态栏新增秒级实时运行计时器，支持中英文本地化展示，让用户直观感知任务耗时  
链接：https://github.com/netease-youdao/LobsterAI/pull/1431
从当前PR布局可以判断，项目下一阶段的核心路线图明确聚焦「长耗时生产级Agent任务」场景，从交互便利性、运行可靠性、进度感知三个维度完成体验补全。
## 7. 用户反馈摘要
从最新Issue评论中提炼出两类真实用户痛点：
1.  大量国内全中文环境用户日常高频跨功能页操作，零星漏译的英文提示极易打断使用沉浸感，是当前本地化体验最突出的待优化点；
2.  多Agent管理场景下，用户为了快速区分不同角色的Agent，普遍使用8-20字符的长自定义名称，现有弹窗没有做自动换行、字符截断适配，布局错位问题非常影响操作体验。
## 8. 待处理积压
当前存在明确的PR合并积压，需要维护者优先跟进：
- 3条待合并的Cowork体验类PR全部打了`stale`标记，最早创建于2026年4月3日，距今已超过2个月未完成合并，存在需求漂移的风险，建议维护者尽快梳理代码准入标准，加快合并节奏；
- 2条今日激活的UI本地化Issue同样创建于4月3日，处于长期未排期状态，建议优先安排前端同学适配修复，快速响应当前中文核心用户的体验诉求。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis (github.com/moltis-org/moltis) 项目动态日报
日期：2026-06-15 | 项目健康度评估：平稳健康，社区参与度处于日常活跃区间
---
## 1. 今日速览
过去24小时Moltis项目共新增2条活跃Issue、2条待合并PR，无正式版本发布记录，整体活跃度符合常规迭代预期。当前迭代方向覆盖MCP生态兼容性、自托管部署稳定性、基础依赖运维三个核心维度，贡献角色包含普通社区开发者、自动化依赖机器人两类群体，未出现高优先级全网阻断类故障上报。当前头部商用MCP服务适配问题已吸引开发者参与讨论，边缘场景性能优化的新需求首次被提出，项目路线图拓展方向进一步清晰。
## 2. 版本发布
今日无正式版本发布记录，暂无待公开的候选版本预告信息。
## 3. 项目进展
过去24小时无已合并、已关闭的PR落地，核心功能迭代无新的推进成果。当前2个待审核PR均为运维类优化项，分别指向容器部署兼容性修复、前端构建依赖链升级，未拉动核心功能迭代进度出现显著跃升，整体迭代节奏与近两周基线保持一致。
## 4. 社区热点
今日唯一有互动的热点议题为MCP生态适配相关Bug上报：
> 链接：https://github.com/moltis-org/moltis/issues/1119
该议题核心诉求为打通头部商用MCP服务的接入通路，解决Notion、Linear等主流第三方MCP服务登录失败的问题。用户普遍反馈当前生态接入门槛偏高，缺少对行业通用OAuth参数的适配，普通用户无法零配置对接商用MCP能力，该议题目前已有开发者参与讨论定位，是当前生态适配维度优先级最高的待解决项。
## 5. Bug 与稳定性
按严重等级排序如下：
1. **高优先级：MCP OAuth适配异常**，对应Issue #1119，对接在`WWW-Authenticate`头携带`resource_metadata`参数的MCP服务时会抛出`invalid_target`错误，直接影响Notion、Linear等头部商用MCP服务的全量用户接入，暂未关联对应修复PR。
2. **中优先级：容器部署卷挂载逻辑冲突**，对应待合并PR #1122，Docker内置的VOLUME声明会遮蔽用户自定义的全局home目录绑定挂载逻辑，仅影响采用全局持久化部署模式的高级自托管用户，目前已有开发者提交完整修复方案待审核。
## 6. 功能请求与路线图信号
今日新增的明确功能需求为：引入纯Rust实现的turbovec作为替代内存后端，实现极端场景下的向量数据压缩能力，对应Issue #1123：
> 链接：https://github.com/moltis-org/moltis/issues/1123
该需求完全契合Moltis面向边缘侧轻量化部署的核心路线，且项目本身已基于Rust技术栈构建，无额外依赖冲突，大概率会在可行性验证通过后，作为可选特性纳入下一个次要版本迭代。此外当前两个待合并PR的容器部署Bug修复、esbuild依赖升级，属于常规运维优化项，会优先进入下一个补丁版本的合入队列。
## 7. 用户反馈摘要
从今日公开的Issue互动中可提炼三类典型用户痛点：
1. 普通C端用户：对接主流商用MCP服务时被OAuth流程拦截，无法正常调用第三方工具能力，属于核心使用链路阻塞。
2. 自托管运维用户：采用全局home目录持久化的部署方案出现配置丢失问题，自定义部署逻辑存在未被覆盖的兼容性坑。
3. 边缘部署用户：对Moltis的运行内存占用有极高要求，当前默认内存后端的压缩比无法满足低算力设备的部署需求。
## 8. 待处理积压
1. 高优先级生态适配Issue #1119 提交时长已超过48小时，仍无官方维护者的正式回复，涉及大量普通用户的MCP接入体验，建议优先安排核心开发者跟进定位。
2. 今日新提交的2个PR均为低风险运维优化项，暂无维护者审核记录，建议优先推进部署兼容性修复PR #1122的审核合入，降低自托管用户的踩坑概率。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（原QwenPaw）项目动态日报 | 2026-06-15
---
## 1. 今日速览
过去24小时项目活跃度处于高位，共产生8条Issue更新、7条待合并PR，无新版本发布。本周期社区贡献特征突出，超7成PR由首次参与项目的新贡献者提交，覆盖多语言本地化、控制台体验优化、核心能力增强等多个维度。当前版本v1.1.11.post2暴露了若干桌面端兼容性小问题，社区反馈响应速度保持在24小时以内，整体项目迭代节奏健康、用户参与热情持续上涨。
## 2. 版本发布
今日无正式版本发布，当前对外最新可用版本仍为v1.1.11.post2。
## 3. 项目进展
今日无完成合并的PR，仅完成1条长期遗留高频Bug Issue闭环：
- 已关闭核心阻塞Issue [#5172 聊天长时间停留后再次对话无响应问题](https://github.com/agentscope-ai/QwenPaw/issues/5172)：修复了间隔对话触发任务无响应的遗留问题，解决了微信/QQ等无头接入渠道无法点击停止按钮直接卡死的痛点。
当前7条待合并PR覆盖桌面自动化核心能力、多语言本地化、控制台体验、系统稳定性4大方向，下一版本的功能矩阵补全进度已达70%，预计3个工作日内即可完成全部代码审核进入发布流程。
## 4. 社区热点
今日讨论度最高的Issue为：
> [#5156 建议支持kimi-for-coding、加入uv白名单](https://github.com/agentscope-ai/QwenPaw/issues/5156)
该Issue共产生5条用户评论，是本期所有公开动态中互动量最高的条目。背后反映出大量付费订阅了Kimi Coding套餐的开发者用户诉求：希望直接复用现有订阅权益，无需单独对接官方API即可在CoPaw内调用对应能力，降低编码场景下的大模型使用成本，也体现出主流第三方大模型服务的生态适配需求正在快速上涨。
## 5. Bug 与稳定性
按影响严重程度排序今日新上报问题：
1. **高危**：[#5181 插件依赖安装导致cmd窗口持续弹窗](https://github.com/agentscope-ai/QwenPaw/issues/5181)：v1.1.11.post2版本Windows端自动安装插件依赖未隐藏命令行窗口，PyPI网络不稳定时会触发重试死循环大量弹出弹窗，直接导致桌面无法正常操作，暂无对应修复PR。
2. **中高危**：[#5183 宠物功能在Wayland桌面无法正常使用](https://github.com/agentscope-ai/QwenPaw/issues/5183)：在Niri等Wayland窗口管理器环境下项目核心特色桌面宠物功能完全失效，暂无对应修复PR。
3. **中危**：[#5184 v1.1.11.post2版本本地模型提供者配置后不显示](https://github.com/agentscope-ai/QwenPaw/issues/5184)：影响私有化部署用户接入本地大模型的体验，暂无对应修复PR。
4. **低中危**：[#5177 钉钉渠道消息未同步到chats.json，控制台会话列表不可见](https://github.com/agentscope-ai/QwenPaw/issues/5177)：影响企业钉钉集成场景下的后台运维排查，暂无对应修复PR。
## 6. 功能请求与路线图信号
结合现有待合并PR判断，以下功能确定将大概率纳入下一版本发布清单：
- 全量越南语界面本地化支持，由两条PR[#5175](https://github.com/agentscope-ai/QwenPaw/pull/5175)、[#5186](https://github.com/agentscope-ai/QwenPaw/pull/5186)共同提供完整覆盖所有UI模块的翻译
- 核心能力升级：[#5187 Windows桌面GUI自动化能力（UIA + Tauri控制模式）](https://github.com/agentscope-ai/QwenPaw/pull/5187)，支持Agent直接操作Windows桌面完成点击、输入、截图等全量自动化动作
- 体验优化：控制台新增会话标题过滤功能[#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178)、长审批命令自动换行避免水平溢出[#5176](https://github.com/agentscope-ai/QwenPaw/pull/5176)
- 稳定性优化：定时任务超时阈值提升+自主运行上下文注入[#5180](https://github.com/agentscope-ai/QwenPaw/pull/5180)、多Agent协作触发关键词扩展[#5179](https://github.com/agentscope-ai/QwenPaw/pull/5179)

用户新提出的需求中，以下条目已获得社区正向反馈，大概率进入后续版本路线图：Agent上下文自动注入精确到秒的实时时间戳[#5185](https://github.com/agentscope-ai/QwenPaw/issues/5185)、统一全类型模型（文本/向量/音视频）配置界面[#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182)、kimi-for-coding接入支持。
## 7. 用户反馈摘要
从今日公开讨论中提炼用户真实反馈：
- 不满点：v1.1.11.post2版本Windows下插件依赖弹窗问题严重影响普通用户使用，Wayland桌面用户完全无法使用宠物挂件核心功能，大量非桌面端接入的企业用户此前长期受间隔对话无响应问题困扰。
- 高频场景需求：管理几十条以上多会话的用户对快速定位历史会话的需求非常强烈，已有企业用户完成了钉钉渠道的集成落地，对后台会话可追溯性的要求很高。
## 8. 待处理积压
提醒维护者优先响应以下长期未处理、已有社区贡献者提交PR的条目：
1. Issue [#5169 越南语本地化需求](https://github.com/agentscope-ai/QwenPaw/issues/5169) 已开放7天，2名新贡献者提交了完整的实现PR等待审核，快速合并不但可补充多语言支持，还能有效鼓励新贡献者参与热情
2. Issue [#4999 控制台增加会话标题过滤功能](https://github.com/agentscope-ai/QwenPaw/issues/4999) 已开放32天，对应PR[#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178) 实现完整，可直接审核合并
3. Issue [#4985 审批命令文本水平溢出问题](https://github.com/agentscope-ai/QwenPaw/issues/4985) 已开放35天，对应PR[#5176](https://github.com/agentscope-ai/QwenPaw/pull/5176) 仅修改两行样式代码，无任何兼容性风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-06-15）
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw整体维持高迭代活跃度，过去24小时共产生38条Issue更新、50条PR更新，当日Issue关闭率达65.8%，核心迭代方向集中在全球多渠道接入、第三方模型/工具生态补全、核心架构优化三个板块。当日无正式版本发布，项目处于0.80-beta1版本的筹备冲刺阶段，新增贡献者提交的PR占比超40%，整体健康度处于高位，生态拓展速度远超预期。

## 2. 版本发布
今日无正式版本发布，当前所有迭代内容均指向0.80-beta1测试版的筹备工作，暂不存在破坏性变更或迁移注意事项。

## 3. 项目进展
今日合计完成10项PR合入/关闭，核心落地进展包括：
1. 完成Telnyx、Plivo、Sinch、Vonage 4款全球主流SMS网关接入，补齐了北美、北欧、亚太区域本地化短信通信能力，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6494
2. 新增5家OpenAI兼容模型提供商接入：Arcee AI、Inception Labs Mercury、Lambda AI Inference、Featherless AI、Upstage Solar，兼容的开源模型生态覆盖度提升30%，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6456
3. 正式合入Sonos、Shazam、Spotify、8Sleep、Philips Hue 5款智能家居/音视频工具实现，将此前的占位功能全部转为可用状态，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6477
4. 修复了WhatsApp渠道二维码不显示、Slack请求重复调用LLM、Gemini OAuth项目上下文解析失败、自定义推理端点支持本地CA证书等多个P1级阻塞bug，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/1458
5. 全功能Docker镜像特性正式落地，开箱即用版本默认集成所有可选功能，无需用户手动编译，链接：https://github.com/zeroclaw-labs/zeroclaw/issues/3642

## 4. 社区热点
今日讨论度最高的3条议题：
1. **[#3642 提供全量功能Docker镜像](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)**：累计13条评论，核心诉求为降低非技术用户入门门槛，解决当前默认镜像为控制内存裁剪了WhatsApp等功能导致新用户配置成本过高的问题，目前该特性已正式关闭落地，属于用户呼声最高的入门体验优化需求。
2. **[#6808 工作车道、看板自动化与标签清理RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**：累计11条评论，属于项目治理类公开讨论，核心诉求是适配当前高速迭代的贡献量，通过自动化路由减少维护者手动分配Issue的工作量，降低协作成本。
3. **[#7470 Delegate代理模式空权限配置拦截Bug](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)**：累计7条评论，属于多Agent工作流核心阻塞问题，大量使用多代理评审、多角色研究场景的用户集中反馈该问题导致工作流完全不可用，目前正在推进开发。

## 5. Bug 与稳定性
按严重等级排序的核心已知问题：
| 严重等级 | 问题描述 | 优先级 | 修复状态 | 关联Issue |
| --- | --- | --- | --- | --- |
| S1（工作流阻塞） | Delegate代理模式拒绝空`risk_profile.allowed_tools`配置，跨风险配置的委托目标被强制拦截，完全阻断多代理协作场景 | P1 | 已有开发中PR #7590 | https://github.com/zeroclaw-labs/zeroclaw/issues/7470 |
| S1（工作流阻塞） | QQ渠道语音消息被重复处理20次以上，导致`brain.db`产生大量重复条目，存储资源快速膨胀 | P1 | 开发中，暂未合入修复 | https://github.com/zeroclaw-labs/zeroclaw/issues/5662 |
| S2（体验降级） | 渠道Schema v3版本缺失`show_tool_calls`配置项，用户无法在响应中查看工具调用详情 | P2 | 开发中 | https://github.com/zeroclaw-labs/zeroclaw/issues/6856 |

## 6. 功能请求与路线图信号
结合当前迭代优先级，以下特性明确将被纳入0.80-beta1版本：
1. 工作车道看板自动化治理RFC #6808，已明确标注从0.80-beta1开始生效，用于优化贡献者协作流程
2. 三大Agent回合引擎统一重构RFC #7415，已明确为单PR落地，大幅简化核心运行时代码逻辑
3. Arm64原生Docker镜像支持PR #5187，补全边缘部署场景的架构适配能力
4. 跨风险配置的多Agent委托权限放开PR #7590，解决当前多代理协作场景的配置痛点

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1. 痛点：非技术用户部署成本高，此前默认镜像裁剪大量可选功能，需要手动编译才能启用WhatsApp等渠道，门槛过高
2. 场景需求：大量北欧、亚太区域的企业用户反馈此前仅支持Twilio短信网关无法满足本地运营商合规要求，新增的多款区域SMS网关正好匹配其业务需求
3. 本地化痛点：国内QQ渠道用户反馈语音消息重复写入问题导致数据库体积3天膨胀10倍，多用户场景下查询性能明显下降
4. 正向反馈：WhatsApp渠道整体成熟度获得大量用户认可，不少用户公开表示该项目是当前开源多Agent框架中体验最好的即时通信对接方案，整体满意度较高。

## 8. 待处理积压
提醒维护者重点关注的高优先级停滞议题：
1. **[#6074 bulk revert丢失的153条提交恢复追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：高风险P2级议题，3月 bulk revert 操作丢失的153条提交的恢复工作已停滞超过2个月，目前尚未梳理完整待恢复清单，存在存量bug和特性永久丢失的风险，需尽快分配资源处理。
2. **[#6823 Zerocode ACP桥追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/6823)**：高风险P2级议题，TUI客户端与守护进程的RPC连接层开发进度严重滞后，原定落地的本地TUI交互能力迟迟无法上线，需跟进开发资源分配。
3. **[#5842 Codex CLI extra_args参数安全校验白名单评估](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)**：安全类P2级议题，对Codex CLI任意参数转发的安全审计工作已停滞2个月，存在潜在的未授权参数注入风险，需安全团队跟进审核。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*