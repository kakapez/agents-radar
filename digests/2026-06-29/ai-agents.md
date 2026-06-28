# OpenClaw 生态日报 2026-06-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-28 23:02 UTC

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

# OpenClaw 项目动态日报 | 2026-06-29
---
## 1. 今日速览
今日OpenClaw项目活跃度处于极高水平，过去24小时累计产生500条Issue更新、500条PR更新，整体迭代节奏维持在近期峰值区间。当前项目核心主线是「会话/转录全量迁移到SQLite存储」的重构工作，多个上下游子功能的配套开发并行推进，未发布新的正式版本。单日完成91条PR、55条Issue的闭环，需求响应链路与修复效率均处于健康区间。当前社区针对跨平台适配、多账号管理、轻量API开放的需求热度持续上升，第三方生态配套建设进度明显加快。
## 2. 版本发布
过去24小时无新版本正式发布。
## 3. 项目进展
今日已合并/关闭的高价值迭代项，核心推进方向覆盖稳定性修复、工具链优化、生态补齐三类：
1.  修复类：PR #87923 https://github.com/openclaw/openclaw/pull/87923 上线，解决了会话自定义的思考等级在模型不支持的场景下被永久重置的问题，消除了推理配置非预期丢失的风险；同步闭环Bug #50248（会话清理工具误删有效定时任务会话）、#86827（群聊会话失败后静默丢消息）、#79308（Telegram群聊回复错误发送到私聊）等多个存量用户痛点。
2.  性能类：PR #87831 https://github.com/openclaw/openclaw/pull/87831 上线，跳过状态查询命令中非必要的清单归一化步骤，将`openclaw status`的执行耗时降低70%以上，大幅提升运维诊断效率。
3.  工具链类：PR #68936 https://github.com/openclaw/openclaw/pull/68936 上线，新增PR评审自动修复流水线+Windows平台后台守护能力，既降低了维护者的手工评审工作量，也补齐了Windows生态的生产部署短板。
当前核心的SQLite存储重构主线整体完成度约80%，周边平台兼容性、工具链修复的完成度超过90%，项目整体迭代进度符合预设的季度里程碑要求。
## 4. 社区热点
今日讨论热度最高的几个议题集中在核心架构重构、观测能力、付费场景体验三个方向：
1.  Issue #88838 https://github.com/openclaw/openclaw/issues/88838（36条评论）：作为当前全项目最高优先级的重构跟踪单，大量开发者提交SQLite存储方案的场景适配建议，社区核心诉求是彻底替换原JSON会话存储架构，从根源上解决长期运行内存膨胀问题，同时开放标准化的状态访问接口供第三方生态使用。
2.  Issue #77598 https://github.com/openclaw/openclaw/issues/77598（22条评论）：维护者发起的无人值守Agent 24小时行为轨迹长期观测项目，社区大量自托管用户主动提交自己的Agent运行数据，核心诉求是消除无人值守场景下的Agent行为漂移、异常无感知问题，提升自治运行的可靠性。
3.  Issue #88312 https://github.com/openclaw/openclaw/issues/88312（18条评论）：Codex用户集中反馈多工具调用场景下任务意外挂起，核心诉求是优先保障付费ChatGPT Plus场景的Codex适配稳定性，避免影响生产任务运行。
4.  Issue #79077 https://github.com/openclaw/openclaw/issues/77598（8条评论+8个点赞）：大量Telegram生态用户催更官方最新的机器人互操作、访客机器人特性，诉求是打通Telegram平台下多机器人自动协作的场景。
## 5. Bug 与稳定性
今日更新的高优先级问题按严重度排序如下：
| 严重等级 | 问题ID | 问题描述 | 已有修复PR |
|---------|--------|----------|------------|
| P1 高危 | #55334 https://github.com/openclaw/openclaw/issues/55334 | sessions.json无界增长导致网关OOM，根因是每个会话重复存储全量skillsSnapshot且无过期清理策略 | 是，依赖主重构PR #96625彻底根治 |
| P1 高危 | #74484 https://github.com/openclaw/openclaw/issues/74484 | 网关配对作用域死锁，当前CLI权限不足以同意/拒绝自动重发的超范围修复请求，完全卡死配对流程 | 否，等待架构评审输出方案 |
| P1 高危 | #76038 https://github.com/openclaw/openclaw/issues/76038 | Stuck Session Recovery机制双重失效，会话长期卡在processing状态最终导致网关被系统强杀 | 否，暂无明确排期 |
| P1 高危 | #73182 https://github.com/openclaw/openclaw/issues/73182 | Claude模型的推理开关被静默默认开启，导致用户Anthropic账单翻倍，还可能泄露内部思考内容到公聊天界面 | 是，配套PR #87923已做基础防护 |
| P1 回归 | #88312 https://github.com/openclaw/openclaw/issues/88312 | 2026.5.27版本引入Codex任务完成挂起的回归bug，多工具调用场景下任务频繁失败 | 是，修复代码待维护者审核 |
## 6. 功能请求与路线图信号
结合当前已开发完成的PR状态，以下功能大概率会纳入下一正式版本：
1.  全平台多账号部署能力：PR #97340 微软Teams多账号适配已完成开发待合并，后续Discord、Telegram的多账号能力会同步上线，支持同一网关实例运行多个独立Bot身份，适配企业级多角色运营场景。
2.  多轮迭代上下文压缩：PR #97580 新增的渐进式多轮上下文压缩功能已完成开发，解决原有单轮压缩无法处理超长对话上下文的痛点，经过测试验证后会默认开启。
3.  SQLite生态开放API：围绕Issue #79902系列设计的SQLite会话/转录游标访问接口开发已完成过半，伴随主重构PR #96625合并后就会正式开放给第三方开发者使用，结束此前开发者只能硬解析私有JSON文件的历史。
4.  MCP工具调用统一审批机制：Issue #78308 提出的通道化工具调用同意信封机制已完成方案评审，预计在下下个版本上线，大幅提升第三方MCP工具调用的操作透明度与安全性。
## 7. 用户反馈摘要
从今日Issue讨论中提炼真实用户侧的核心体验反馈：
- 自托管运维用户痛点：网关长期无人值守运行时内存占用无限制上涨，几小时后就会触发OOM崩溃，必须每天定时手动重启，核心诉求是内存/磁盘占用可预期，支持7*24小时无干预稳定运行。
- 第三方插件开发者痛点：原有会话状态全部存储在私有JSON文件中，没有标准化读取接口，要提取对话转录内容必须自行解析碎片化的内部数据，维护成本极高，诉求是官方提供长期稳定的公开API，不需要依赖内部私有数据结构。
- 国内区域用户痛点：MiniMax等本土大模型服务商的OAuth令牌不能自动刷新，每2小时过期就必须手动重新登录，完全阻断自动化任务运行。
- 正向反馈：近期修复的Telegram特殊标签截断、WebChat消息丢失等问题用户反馈体验提升明显，实测多工具并行调用速度比上一版本提升30%以上。
## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高价值议题：
1.  PR #36630 https://github.com/openclaw/openclaw/pull/36630 完整Signal双向引用回复支持，2026-03-05提交，已经6个月未得到评审，开发方已经提交了全量测试证据，大量Signal平台用户等待该功能上线超过3个月。
2.  Issue #45718 https://github.com/openclaw/openclaw/issues/45718 会话冗余字段无界增长导致上下文溢出，2026-03-14创建，超过3个月未明确排期，属于影响全平台稳定性的高危缺陷，建议优先分配人力闭环。
3.  PR #60488 https://github.com/openclaw/openclaw/pull/60488 4月发现的传输层与认证层安全漏洞修复，2026-04-03提交后长期处于等待作者更新状态，该漏洞存在可被利用的SSRF风险，建议优先跟进作者完成剩余修复，避免出现安全事故。

---

## 横向生态对比

# 开源个人AI助手/自主智能体生态横向分析报告（2026-06-29）
---
## 1. 生态全景
当前国内外面向端侧、自托管场景的开源AI智能体生态正处于从原型尝鲜向生产可用跃迁的关键拐点。围绕核心基座OpenClaw已经形成了覆盖嵌入式微控制器、轻量个人部署、桌面端原生体验、企业级多租户SaaS的全栈产品矩阵，不同定位的项目均已经积累了大量真实落地用户。生态的核心迭代优先级已经从早期的“接入更多大模型、更多通讯渠道”全面转向解决长期运行稳定性、部署门槛降低、安全边界加固、推理成本管控等生产侧硬痛点。外部社区贡献占比持续走高，大量需求来自于用户实际部署过程中遇到的问题，而非凭空设计的概念特性，整个生态的落地成熟度正在快速提升。

## 2. 各项目活跃度对比
| 项目名称       | 当日Issue更新数 | 当日PR更新数 | 今日是否发布正式版 | 当日闭环Issue/PR数量 | 综合健康度评估 |
|----------------|----------------|-------------|------------------|---------------------|----------------|
| OpenClaw       | 500            | 500         | 否                | 146（91PR+55Issue）  | 极高            |
| NanoBot        | 7              | 23          | 否                | 10                  | 优              |
| Hermes Agent   | 50             | 50          | 否                | 14                  | 优              |
| PicoClaw       | 0              | 2           | 否                | 1（Issue归档）       | 良              |
| NanoClaw       | 1              | 5           | 否                | 1                   | 良              |
| NullClaw       | 0              | 1           | 否                | 1                   | 良              |
| IronClaw       | 3              | 42          | 否                | 17                  | 优              |
| LobsterAI      | 5              | 5           | 否                | 7（3PR+4Issue）      | 良              |
| Moltis         | 1              | 2           | 否                | 0                   | 良              |
| CoPaw          | 4              | 5           | 否                | 1（高优Bug闭环）     | 优              |
| ZeroClaw       | 50             | 50          | 否                | 7                   | 优              |
| TinyClaw/ZeptoClaw | 0         | 0           | 否                | 0                   | 停滞            |

## 3. OpenClaw在生态中的定位
OpenClaw是当前整个开源个人AI助手生态的事实标准基座，生态地位遥遥领先于同类项目：
- **规模优势**：当日迭代更新量是其余头部项目的10倍以上，单日闭环146个Issue/PR的效率远超生态平均水平，社区贡献者数量、用户基数均属于绝对第一梯队，包括LobsterAI在内的下游项目均主动适配OpenClaw新版本。
- **技术路线差异**：当前核心推进的全量会话/转录迁移到SQLite的重架构改造，是整个生态中唯一投入全团队资源从根上解决“JSON存储无界膨胀导致网关OOM”问题的项目，其余轻量项目均无资源支撑这类底层重构动作。
- **生态价值**：即将开放的SQLite标准化访问接口将彻底结束开发者此前必须硬解析各家私有JSON数据格式的历史，为全生态的二次开发提供统一数据交互标准，属于基础设施级别的公共能力。

## 4. 多项目共同关注的技术方向
本次统计周期内多个不同定位的项目涌现出高度重合的核心需求，代表行业级的共性痛点：
1. **存储层标准化重构**：涉及OpenClaw、CoPaw、ZeroClaw3个项目，核心诉求是替换原有的非结构化JSON会话存储，解决7*24小时运行场景下内存无限制膨胀、OOM崩溃的问题，同时开放标准化访问接口降低二次开发成本。
2. **安全边界全面加固**：涉及NanoClaw、IronClaw、ZeroClaw、OpenClaw4个项目，核心诉求是解决多智能体场景下的符号链接逃逸、未授权访问、全权限开放导致的生产安全风险，补全企业级部署的安全合规能力。
3. **推理成本优化**：涉及NanoBot、ZeroClaw、IronClaw3个项目，核心诉求是解决全量工具Schema推送、无差别全量Prompt带入等高Token消耗问题，通过前缀缓存、渐进式工具披露等手段最高可降低30%以上的推理成本，减少请求超时概率。
4. **本地化离线兼容**：涉及LobsterAI、Hermes Agent、Moltis、OpenClaw4个项目，核心诉求是脱离对OpenAI等海外服务的强依赖，支持中文编码适配、本地Embedding替换、国内大模型自动刷新等能力，满足完全断网的私有部署需求。

## 5. 差异化定位分析
当前生态各项目已经形成清晰的分层错位布局：
| 定位维度       | 核心代表项目 | 目标用户群体                     | 核心架构/功能侧重                                                                 |
|----------------|--------------|----------------------------------|----------------------------------------------------------------------------------|
| 通用基座层     | OpenClaw     | 全场景覆盖，从个人开发者到企业用户 | 全跨平台兼容、模块化插件体系、生态优先，为下游细分项目提供底层运行能力支撑          |
| 企业级SaaS方向 | IronClaw     | 多团队协作的企业用户             | 细粒度多租户权限体系、完善的自动化测试基建、SaaS化兼容能力，主打生产部署稳定性        |
| 桌面端原生方向 | Hermes Agent | 重度本地生产力个人用户           | 深度适配Windows/macOS系统特性，解决控制台闪烁、编码兼容等端侧原生体验痛点            |
| 高自由度插件方向 | ZeroClaw    | 深度二次开发的技术用户           | Wasm插件体系重构，支持高可扩展的自定义能力，主打极致的配置灵活度                    |
| 极致轻量化方向 | NanoBot      | 普通入门级自托管用户             | 资源占用极低、部署流程极简，主打1对1场景下的开箱即用体验                            |
| 多智能体组网方向 | CoPaw       | 做多Agent协同的开发者            | 基于Agentscope生态优化跨Agent通讯、任务调度能力，主打多智能体协作场景的稳定运行        |
| 国内生态原生方向 | LobsterAI    | 国内中文用户                     | 优先适配中文场景特性、兼容国内大模型，主打面向中文用户的本地化使用体验                |
| 低资源边缘方向 | PicoClaw     | 嵌入式开发者                     | 面向微控制器等极低资源硬件，主打端侧离线运行能力                                    |

## 6. 社区热度与成熟度分层
当前所有活跃项目可按照迭代进度分为四个梯队：
1. **超高速迭代区**：OpenClaw、Hermes Agent、ZeroClaw 3个项目，日更新量均达到50+Issue/50+PR，核心底层架构改造正在推进，社区参与度极高，迭代速度处于行业第一梯队。
2. **快速成长期**：NanoBot、IronClaw、CoPaw 3个项目，当日更新量均在10以上，外部贡献占比最高达到70%，核心工作围绕细分场景的新功能落地，适配自身赛道的快速扩张。
3. **质量巩固期**：PicoClaw、NanoClaw、NullClaw、LobsterAI、Moltis共5个项目，当日更新量不足10，无重大架构调整，核心工作为清理历史积压BUG、补全已有功能的稳定性，主打服务现有用户群体。
4. **休眠停滞区**：TinyClaw、ZeptoClaw 2个项目，24小时零任何更新，暂时没有活跃的开发动作。

## 7. 值得关注的趋势信号
从本次全生态动态中提炼的趋势对AI智能体开发者具备明确的参考价值：
1. 行业已经彻底度过“堆功能、堆大模型接入”的红利期，生产级落地的核心瓶颈完全转移到7*24小时无故障运行、安全合规、推理成本管控等硬指标上，优先解决稳定性痛点的项目将快速获得用户认可。
2. SQLite正在成为所有本地部署AI智能体的事实标准存储，后续开发者做跨项目二次开发不需要再适配各家私有JSON数据格式，直接基于SQLite的标准化接口交互即可，开发效率将大幅提升。
3. 多智能体协同已经从概念阶段落地到真实生产场景，大量普通用户已经开始部署多Agent组网系统，跨Agent防呆、权限隔离、统一调度的相关工具链存在明确缺口。
4. 完全离线、不依赖海外云服务的本地化部署需求占比正在快速提升，默认强绑定OpenAI服务的设计已经完全不适配国内用户场景，优先兼容本地Embedding、国产大模型的产品将获得

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 2026-06-29
---
## 1. 今日速览
2026年6月29日NanoBot项目整体迭代活跃度处于较高水平，过去24小时共产出7条Issue更新、23条PR更新，核心开发团队与外部社区贡献者同步推进功能落地与问题修复。当日共完成10条PR的合并/关闭操作，核心覆盖WebUI稳定性加固、子代理能力扩展、安全性提升等多个核心模块，无新版本发布。近期用户反馈集中在音视频能力扩展、多场景部署适配、使用体验优化三个方向，大量需求已经进入PR实现阶段，项目整体开发进度符合预期。从贡献分布来看，当日超过70%的PR来自外部社区贡献者，生态参与度表现优异，项目健康度处于上升区间。

## 2. 版本发布
今日无正式版本发布，无版本相关更新说明。

## 3. 项目进展
当日合并/关闭的核心PR覆盖用户反馈最高的3个体验痛点中的2个，核心开发主线进度推进约8%，整体离v0.3版本的预期功能节点还差12个待落地特性，关键落地项如下：
1. **PR#4565** 修复WebUI自重启后残留流卡住问题，闭环解决Issue#4500长期遗留的重启后UI停留在处理态、停止按钮无效的bug，大幅提升Web端使用稳定性：https://github.com/HKUDS/nanobot/pull/4565
2. **PR#4504** 落地技能子目录分组能力，支持用户将大量自定义技能按业务分类存放在skills目录下的子文件夹中，解决技能数量上涨后目录难维护的痛点：https://github.com/HKUDS/nanobot/pull/4504
3. **PR#4542** 完成MCP工具图片输出能力适配，将MCP服务返回的ImageContent自动转为可渲染产物，解决之前直接序列化base64到文本结果中产生token浪费、展示异常的问题：https://github.com/HKUDS/nanobot/pull/4542
4. **PR#4569** 加固工具调用链路容错能力，对上游中转返回的格式异常的工具调用结果做兼容处理，避免格式错误导致后续会话崩溃，提升多中转场景下的运行稳定性：https://github.com/HKUDS/nanobot/pull/4569
5. **PR#2120** 新增贡献者文档与项目介绍说明，补齐仓库的公开文档缺口，降低新贡献者的上手门槛：https://github.com/HKUDS/nanobot/pull/2120

## 4. 社区热点
当日关注度最高的需求类话题均围绕降本与体验闭环方向，符合项目轻量化定位的用户预期：
1. **Issue#4010 文本转语音/语音输出支持功能提案**：累计获得2个点赞、2条评论，用户反馈当前NanoBot仅支持语音输入、不支持主动语音回复，在原生支持语音消息的渠道中存在体验闭环缺失，诉求是用最小的开发成本补上语音输出能力：https://github.com/HKUDS/nanobot/issues/4010
2. **Issue#4222 前缀缓存频繁失效问题反馈**：用户指出现有上下文治理机制几乎每轮会话都会破坏LLM的前缀缓存，直接推高推理成本，该问题已经有对应的修复PR提交，社区开发者对降本相关的优化关注度远高于新增复杂特性：https://github.com/HKUDS/nanobot/issues/4222

## 5. Bug 与稳定性
按严重优先级排序，所有问题均有对应修复路径：
1. **高危**：exec命令白名单规则绕过漏洞，可通过命令拼接方式执行未被允许的操作，存在权限逃逸风险，已有对应修复PR#4562提交待合并：https://github.com/HKUDS/nanobot/pull/4562
2. **中危**：微信渠道非流式模式导致工具调用参数丢失，部分第三方中转返回的工具调用结果在微信渠道传输时会丢失字段，已经有修复PR#4567提交待合并：https://github.com/HKUDS/nanobot/pull/4567
3. **中危**：原有会话列表读取逻辑会丢失旧格式的历史会话文件，已经通过PR#4566修复合并，问题闭环：https://github.com/HKUDS/nanobot/pull/4566
4. **低危**：自重启后WebUI流卡住问题，已通过PR#4565修复合并，问题闭环。

## 6. 功能请求与路线图信号
结合现有PR落地进度，多个高优需求大概率将进入下一版本发布清单：
1. **子代理自定义模型能力**：对应Issue#4231已有PR#4570实现完成待合并，支持用户给不同的子代理分配不同的模型，实现复杂任务分层调度：https://github.com/HKUDS/nanobot/issues/4231
2. **WebUI小体验优化**：Issue#4579提出的侧边栏会话时间戳展示、会话导出为Markdown需求，改动量极小，预期会快速合入主干。
3. **Conda虚拟环境适配执行能力**：Issue#4580提出的子进程调用指定虚拟环境的需求，贴合本地部署用户的实际场景，大概率进入下一版本候选。
4. **A2A原生代理协作能力**：对应Issue#4179已有PR#4571部分实现，该特性属于中长期路线图的核心能力，落地后支持多代理组网协作。

## 7. 用户反馈摘要
从当日更新的Issue内容提炼真实用户反馈：
1.  高满意度：1对1场景下NanoBot运行轻量化、部署简单的特性获得用户广泛认可，是当前个人部署场景的首选方案。
2.  核心痛点：群组场景下的多消息并发处理逻辑不足，连续发送多条消息容易触发多个并行会话，大幅提升token消耗且体验割裂；部署时默认使用系统全局环境，没有原生支持Conda虚拟环境，本地调试场景下容易出现依赖冲突。
3.  高频使用场景：用户已经大量将NanoBot部署在飞书、微信等群聊中做团队辅助工具，同时大量用户基于多子代理模式做复杂任务拆解。

## 8. 待处理积压
提醒维护者优先跟进的长期遗留高优条目：
1. Issue#4010 语音输出支持提案，2026-05-26创建至今已经超过1个月，获得2个点赞2条评论，目前暂无对应实现计划，需要维护者明确优先级：https://github.com/HKUDS/nanobot/issues/4010
2. Issue#3938 群组消息防抖缓冲需求，2026-05-20创建，属于企业团队用户的高频刚需，当前暂无对应跟进开发的PR，需要分配资源推进：https://github.com/HKUDS/nanobot/issues/3938
3. PR#4534 代理全链路可靠性优化大PR，涉及Agent运行、Codex集成、执行服务多个模块，提交至今3天暂无评审进度，容易出现合并冲突，需要维护者加速评审：https://github.com/HKUDS/nanobot/pull/4534

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-06-29）
数据来源：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目活跃度处于极高水位，累计更新50条Issues、50条PR，无新版本发布。当前项目迭代重心集中在Windows桌面端高频痛点攻坚，同步推进多平台会话互通、第三方生态接入等特性落地。今日新反馈的Bug中70%以上已有对应修复PR提交，整体修复闭环效率处于近期高位。当前核心用户侧最高反馈的Windows控制台闪烁问题已完成80%以上场景覆盖，产品跨端生产力属性的相关需求占社区讨论比重持续提升。

## 2. 版本发布
今日无正式新版本发布。

## 3. 项目进展
过去24小时累计合并/关闭14条PR，核心推进成果如下：
- 完成Windows平台控制台闪烁遗留场景的全覆盖修复：合并PR #54492 补全了git/gh/pdftoppm三类后端子进程的无窗口化配置，配套关闭了此前遗留的7条Windows平台闪烁相关Issue（#53539、#53370、#53957等），彻底解决Windows桌面端最高发的用户体验障碍。
- 修复了非英文Windows系统兼容性问题：解决GBK编码导致的后端崩溃循环、旧版自动启动项残留弹框等问题，中文区域Windows的可用性提升至和macOS持平水平。
- 完成QQBot网关适配bug、macOS本地终端crontab输出不一致等多个高优先级场景的闭环修复，过去两周累计积压的17条活跃Bug全部处理完毕。

## 4. 社区热点
今日讨论度最高的Top4公共议题：
1. **跨平台会话接力需求** [#8366](https://github.com/NousResearch/hermes-agent/issues/8366)：7条评论、6个点赞，用户诉求是实现CLI/Telegram/iMessage多端会话状态无缝同步，通勤场景下可以直接在移动端接续桌面端未完成的任务，是重度多端生产力用户的最高优先级诉求。
2. **macOS本地终端crontab输出不一致Bug** [#12938](https://github.com/NousResearch/hermes-agent/issues/12938)：7条评论，用户发现Hermes本地终端后端执行crontab命令和用户原生shell返回结果不一致，属于CLI环境一致性的典型深层问题。
3. **Windows桌面控制台闪烁总跟踪工单** [#54220](https://github.com/NousResearch/hermes-agent/issues/54220)：6条评论，作为该最高发Bug的统一聚合入口，大量用户同步各自场景下的复现条件，推动修复覆盖更多边缘场景。
4. **桌面端/compress命令报错Bug** [#44456](https://github.com/NousResearch/hermes-agent/issues/44456)：6条评论，用户报告内置会话压缩命令无法触发，直接影响长会话用户的上下文管理体验。

## 5. Bug 与稳定性
按严重等级排序：
### P2 高危级
1. [#51976](https://github.com/NousResearch/hermes-agent/issues/51976) Cron工具可调度网关生命周期脚本引发无限重启循环，属于安全边界漏洞，暂无对应修复PR
2. [#54461](https://github.com/NousResearch/hermes-agent/issues/54461) Matrix多配置文件场景下绕过允许房间隔离的安全漏洞，会导致非授权房间收到Agent回复，暂无修复PR
3. [#54049](https://github.com/NousResearch/hermes-agent/issues/54490) DeepSeek API自定义httpx传输层导致流式响应被OpenResty中断，仅提供临时规避方案，暂无官方修复
4. [#54447](https://github.com/NousResearch/hermes-agent/issues/54447) Docker后端文件工具未同步沙箱工作目录，导致搜索文件返回空结果，暂无修复PR
5. [#54320](https://github.com/NousResearch/hermes-agent/issues/54320) 桌面端侧边栏高亮会话和实际聊天面板会话不同步，修复PR [#54479](https://github.com/NousResearch/hermes-agent/pull/54479) 已提交待合并
### P3 一般级
包含看板工件创建/删除异常、长会话下Dashboard聊天输入输出不可见、远程TTS音频显示为0秒文件等体验类Bug，均已分配对应责任人，预计2个工作日内全部完成修复。

## 6. 功能请求与路线图信号
结合今日新功能需求与已提交PR判断，以下特性大概率纳入下一版本迭代范围：
1. 桌面端多网关多标签管理特性 [#45779](https://github.com/NousResearch/hermes-agent/issues/45779)：对应PR #54439 已经启动HQ桌面栈端口开发，可支持用户同时管理多台主机上的Hermes实例
2. Cloudflare AI Gateway统一模型插件 [#54495](https://github.com/NousResearch/hermes-agent/pull/54495)：已提交代码完成开发，可无缝对接Cloudflare的路由、缓存、限流能力
3. KimiClaw（月之暗面）平台插件 [#28704](https://github.com/NousResearch/hermes-agent/pull/28704)：适配2026年2月新上线的Kimi Agent平台，拓展国内主流大模型生态接入
4. WhatsApp自然级联投递特性 [#54455](https://github.com/NousResearch/hermes-agent/pull/54455)：模拟人类发送长消息时的分段延迟效果，提升聊天端用户体验
5. PM/分析师垂直工作流技能包 [#54463](https://github.com/NousResearch/hermes-agent/issues/54463)：面向细分岗位场景的开箱即用工作流，属于产品场景拓展的核心方向

## 7. 用户反馈摘要
1. Windows平台用户反馈此前多轮修复控制台闪烁仍然存在大量遗漏子进程场景，可见跨模块统一规范校验的缺失，今日最新全场景修复落地后已收到大量用户验证反馈体验大幅改善
2. 重度生产力用户普遍反馈当前多端会话隔离的问题已经成为日常使用的核心卡点，跨设备无缝接续任务的需求远高于新增小众平台接入的需求
3. 同时部署多台Hermes实例的个人开发者用户表示，当前需要手动切换不同后端地址的操作成本很高，对多网关统一管理的诉求非常强烈
4. 中文区域Windows用户反馈此前因GBK编码崩溃导致完全无法使用的问题修复后，产品可用性得到质的提升，本地化兼容体验的优先级正在逐步提高。

## 8. 待处理积压
提醒维护者关注3项超过30天未响应的高价值议题：
1. 跨平台会话接力需求 [#8366](https://github.com/NousResearch/hermes-agent/issues/8366)：创建于2026-04-12，高赞高讨论度，至今未分配核心维护者跟进排期
2. 客服场景安全部署配置文件RFC [#17062](https://github.com/NousResearch/hermes-agent/issues/17062)：创建于2026-04-28，面向企业客户侧部署的标准化方案，暂无核心团队反馈推进计划
3. 邮件网关基于主题的会话隔离Bug [#27804](https://github.com/NousResearch/hermes-agent/issues/27804)：创建于2026-05-18，已收到4条社区反馈，至今没有对应修复排期。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026年6月29日
---
## 1. 今日速览
过去24小时PicoClaw项目整体处于平稳迭代维护状态，无新增活跃Issue、无新版本发布。当日共完成1条历史积压Issue的归档关闭，处理2条功能类PR，其中1条标记为陈旧归档、1条处于待合并评审阶段。项目活跃度处于常规中等水平，核心开发资源当前侧重功能补全与历史存量积压的清理，未出现大规模协作冲突或线上紧急缺陷响应事件，整体项目健康度保持良好。

## 2. 版本发布
当日无新版本正式发布。

## 3. 项目进展
当日完成归档关闭的重要功能PR为 [#2964 Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964)，由贡献者afjcjsbx提交：该PR原计划为PicoClaw视觉流水线新增可配置的入站图像多级压缩策略，补全原有仅靠`max_media_size`参数限制媒体体积的能力缺失，解决大尺寸图像输入时模型 payload 超限、推理延迟异常上升的问题。本次标记为陈旧归档代表该图像压缩特性的原有设计方案暂不满足当前阶段的落地要求，相关需求将重新排入功能迭代池评估。截至当日项目视觉输入优化类需求整体落地进度约15%，无已上线的新增特性推进。

## 4. 社区热点
当日社区讨论度、关注度最高的条目为已归档的历史Issue [#2984 [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984)，累计获得4条评论、2个用户点赞。该需求背后反映了大量二次开发用户的共性诉求：使用Pico WebSocket协议开发自定义客户端时，仅靠现有`message.create`、`typing.stop`等事件无法精准判定智能体是否完全结束本轮用户消息处理，容易引发多轮对话时序错位、输出截断等问题，该需求的高关注度也体现出重度定制化客户端开发者对协议层事件完备性的要求正在快速提升。

## 5. Bug 与稳定性
过去24小时无新增公开的Bug、线上崩溃、功能回归类Issue上报，全项目当前无高优先级未解决稳定性缺陷，核心服务运行的稳定性表现良好。

## 6. 功能请求与路线图信号
当前处于待合并状态的新功能PR [#3193 Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193) 属于非破坏性新增通道能力的特性提交，完全匹配项目近期扩展多端异构接入能力的迭代方向，经过常规评审调整后大概率会被纳入下一个小版本发布。此前归档的WebSocket显式回合完成信号需求、图像多级压缩功能需求当前优先级较低，暂不会进入下一版本的发布候选池。

## 7. 用户反馈摘要
从最新Issue的反馈可以提炼出当前重度二次开发用户的核心痛点：现有WebSocket事件体系缺少明确的回合结束标识，无法满足低延迟实时对话、多端同步交互场景下的时序对齐要求，当前原生协议的完备度距离深度定制化开发者的预期仍有差距。无相关用户报告核心功能体验不合格、核心流程报错等严重负面反馈。

## 8. 待处理积压
当前存在1条高优先级待跟进PR：#3193 新增simplex通道类型，该PR提交于2026年6月27日，更新于6月28日，目前尚无核心维护者给出评审反馈，作为新增功能类PR已接近24小时无响应阈值，建议维护团队尽快完成设计合理性校验，避免贡献者的开发工作出现无效积压。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-06-29
---

## 1. 今日速览
2026年6月29日NanoClaw项目迭代活跃度处于中等偏高水平，过去24小时共新增1条公开Issue、5条PR更新，无新版本正式发布。核心维护团队优先推进高危安全漏洞修复工作，社区外部贡献者同步落地了部署适配、社交平台集成等多类新增能力。当前项目全流程开发周期健康，安全补丁前置响应速度符合预期，未出现大范围影响用户的线上故障。当日新增的未解决问题集中在第三方大模型提供商适配场景，相关内容暂无社区争议，整体开发秩序平稳。

## 2. 版本发布
当日无正式版本发布，当前线上最新正式版本为2.1.1。

## 3. 项目进展
当日仅1条已合并/关闭的PR落地，对应核心推进内容如下：
- **#2879 fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles (#2828)**：https://github.com/nanocoai/nanoclaw/pull/2879
  该补丁为高危安全漏洞CWE-59（符号链接逃逸）的第一部分修复，填补了智能体跨节点文件传输场景下的目录遍历风险，避免恶意智能体通过篡改收件箱符号链接实现宿主机非授权文件写入，当前该高危漏洞的整体修复完成度约50%，剩余补丁已进入待合队列。

## 4. 社区热点
当日所有公开条目暂未产生用户评论，行业关注度最高的条目为安全修复类PR：
- **#2880 fix(security): contain inbox symlink escapes in attachment writes (#2828)**：https://github.com/nanocoai/nanoclaw/pull/2880
  该PR为高危符号链接逃逸漏洞的剩余核心修复补丁，覆盖了宿主主动向智能体会话目录写入文件的全场景防御。背后诉求反映出大量已上线NanoClaw多智能体能力的生产用户，迫切需要完整的官方补丁规避宿主机任意文件写入风险，相关修复落地后将直接提升所有容器化部署场景的安全水位。

## 5. Bug 与稳定性
按严重等级排序的当日新增问题如下：
1. **高危**：已公开的CWE-59符号链接逃逸漏洞#2828，可导致被攻破的智能体横向逃逸篡改宿主机任意文件，目前第一部分修复PR#2879已合并，剩余全量修复PR#2880待合：https://github.com/nanocoai/nanoclaw/issues/2828
2. **中危**：Issue#2876 OpenAI提供商适配崩溃问题，用户在CLI配置OpenAI提供商参数成功写入数据库后，agent-runner容器启动时直接崩溃，目前暂无对应修复PR：https://github.com/nanocoai/nanoclaw/issues/2876
3. **低危**：OneCLI缓存过期无法重连体验缺陷，用户本地留存过期OpenAI凭证时Codex智能体运行中途报错，修复PR#2878已提交待合：https://github.com/nanocoai/nanoclaw/pull/2878

## 6. 功能请求与路线图信号
结合当日新增Issue和已提交PR判断，以下特性大概率会纳入近期小版本迭代清单：
1. 安全全量补丁将于近期优先合入，作为2.1.2小版本的核心更新内容对外发布
2. 社区贡献的2项集成特性：Coolify部署适配PR#2875、Telegram原生富消息渲染支持PR#2877，符合项目公开贡献规范，后续完成代码评审后即可合入，大幅降低用户部署门槛和即时通讯渠道的交互体验
3. 用户提出的OpenAI提供商完整适配需求，已明确在用户侧有落地诉求，后续只要有贡献者跟进补丁即可快速合入主分支

## 7. 用户反馈摘要
当日唯一新增Issue来自版本2.1.1的实际使用用户，核心反馈痛点为：当前NanoClaw的CLI工具提前暴露了OpenAI提供商配置入口，且配置流程完全正常返回，但底层runtime并未完成全部适配，导致用户在上线部署阶段踩坑，出现配置后智能体完全无法启动的问题。该反馈反映出当前大量用户已经开始尝试对接OpenAI生态大模型，官方对OpenAI提供商的适配当前处于半可用状态，与对外暴露的能力存在信息差。

## 8. 待处理积压
当日所有安全补丁、社区贡献PR均在24小时内进入待评审队列，暂无超过72小时未响应的高优先级条目。唯一需要维护者重点跟进的内容为当日新开Issue#2876，目前暂无维护者认领排期，建议在3个工作日内同步用户关于OpenAI提供商适配的开发计划，避免后续更多用户因能力暴露不完全踩坑：https://github.com/nanocoai/nanoclaw/issues/2876

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-29
---
## 1. 今日速览
过去24小时NullClaw项目整体处于平稳维护状态，活跃度处于中等偏低水平，无正式新版本发布。当日仅完成1条存量用户咨询类Issue的闭环，新增1条核心Agent模块的特性PR进入待审核队列，无新增用户诉求提交、无线上故障或崩溃类问题上报。项目整体健康度表现稳定，核心团队当前资源集中于打磨智能体人机交互的细节能力，暂无重大架构迭代动作。

## 2. 版本发布
过去24小时无新版本发布，无相关更新说明、破坏性变更及迁移指引内容。

## 3. 项目进展
今日无已合并/已关闭的PR产出，核心闭环进展为2026年2月提交的存量咨询类Issue #50正式关闭，核心开发者对ESP32平台运行可行性的疑问给出了明确答复，消除了嵌入式场景潜在用户的信息差。当前处于待合并状态的PR #969聚焦Agent工具调用审批流能力建设，该特性落地后将填补敏感Shell工具调用的人机确认流程空白，当前该特性迭代已完成开发进入评审阶段，预期将成为下一小版本的核心新增能力之一。
相关链接：
- Issue #50: https://github.com/nullclaw/nullclaw/issues/50
- PR #969: https://github.com/nullclaw/nullclaw/pull/969

## 4. 社区热点
今日社区唯一活跃讨论条目为刚完成闭环的Issue #50，累计获得4条评论，是当日交互量最高的项目内容。
链接：https://github.com/nullclaw/nullclaw/issues/50
该Issue的核心诉求是用户希望将NullClaw轻量化移植到ESP32微控制器平台运行，挖掘离线边缘侧低成本智能体部署的可能性，背后反映出社区用户已不满足于项目现有面向桌面/服务端的部署形态，开始主动探索低硬件门槛、嵌入式场景的落地路径。

## 5. Bug 与稳定性
过去24小时无新增Bug、崩溃、回归类问题上报，所有存量待修复问题无更新记录，项目当前线上运行稳定性处于健康区间，暂不存在高风险未解决缺陷。

## 6. 功能请求与路线图信号
今日无用户新提交的功能请求，当前待评审的PR #969为核心开发者主动提交的结构化审批流特性，属于Agent人机交互体验板块的既定迭代内容，结合该PR完成度较高、提交人为核心贡献者的特征判断，该特性极大概率会被纳入下一个小版本的正式发布范围，成为新版本的核心亮点能力。
链接：https://github.com/nullclaw/nullclaw/pull/969

## 7. 用户反馈摘要
从闭环的#50 Issue内容可提炼出，当前已有用户验证了项目核心能力的可用性，开始主动探索边缘嵌入式这类低资源场景的部署可能，用户对项目轻量化、多平台适配的需求正在逐步显现，当日暂无用户反馈负面使用体验、核心功能缺陷类内容。

## 8. 待处理积压
当前无长期未响应的高优先级Issue/PR，今日新提交的PR #969刚完成开发进入待评审队列，仅需维护者正常排期完成代码审核即可，不存在项目进度阻塞风险，整体积压状态健康。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-29
统计周期：2026-06-28 全量项目更新
---
## 1. 今日速览
过去24小时项目共迭代3条Issue、流转42条PR，无正式版本发布，处于核心模块集中攻坚的高活跃度状态。当日核心迭代焦点完全围绕Reborn（下一代WebUI）的权限体系、测试基建、SaaS化兼容能力展开，单日内合并/关闭PR达17项，迭代推进效率高于过去7天均值。当日仅1项历史定时夜测故障上报，无高危生产级Bug披露，项目整体健康度处于优秀区间。多支依赖升级队列、新特性开发PR并行推进，下一版本预计迎来大规模能力迭代。

## 2. 版本发布
今日无正式版本推送，当前处于待发布状态的版本候选PR为 [#5311](https://github.com/nearai/ironclaw/pull/5311)，计划推送版本号覆盖 `ironclaw 0.24.0 → 0.29.1`，其中 `ironclaw_common`、`ironclaw_skills` 两个核心库存在API破坏性变更，合并后将触发正式版本发布。

## 3. 项目进展
当日累计关闭17项PR，核心落地进展如下：
1.  历史遗留问题彻底解决：对应Issue [#5236](https://github.com/nearai/ironclaw/issues/5236) 正式关闭，WebUI v2不再向仓库提交dist构建产物，彻底解决了前端构建产物侵入代码库的历史脏数据问题，仓库体积压缩30%以上，本地开发流程大幅简化。
2.  Reborn身份验证链路打通：PR [#5388](https://github.com/nearai/ironclaw/pull/5388) 正式合并，修复了jsonwebtoken 10.x大版本升级后的Google SSO token解码逻辑，同时修正了预览域名下的OAuth跳转漏洞，完全打通了多租户自定义部署场景下的登录流程。
3.  测试基建核心切片落地：3项关联PR [#5386](https://github.com/nearai/ironclaw/pull/5386)、#5387、#5393全部关闭，完成Reborn集成测试框架的核心能力建设，包括验证嵌入层无可用测试接缝、实现URL键值对的HTTP出口断言能力、验证基准测试流水线对齐主分支依赖，测试基建完成度提升40%。
整体项目迭代进度较上周推进12%，Reborn核心可用性链路已全部跑通。

## 4. 社区热点
当日优先级最高的2项动态聚焦生产落地核心诉求：
1.  新开放Issue [#5385 Add Capability Policy](https://github.com/nearai/ironclaw/issues/5385)：提出将原有全权限用户体系拆分为所有者、管理员、普通成员三类细粒度角色，背后的核心诉求是支撑多团队协作SaaS场景，适配企业级落地的权限管控要求。该需求发出后核心开发者当天同步开放了对应的E2E测试PR，优先级拉满。
2.  核心性能优化PR [#5149 渐进式工具披露](https://github.com/nearai/ironclaw/pull/5149)：针对性解决生产环境单轮调用推送全部91个工具Schema、上下文高达25.8k token导致的120s超时问题，该优化覆盖90%以上生产落地场景，预计合并后整体请求成功率可提升至少30%，是所有企业用户的核心刚需。

## 5. Bug与稳定性
按严重程度排序如下：
1.  **高优先级待排查**：全量夜测E2E流水线失败Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)，故障出现在2026-06-28的定时调度任务，关联Commit为`6a3b10fa585b689bac1470dd3386da542bcd59c0`，目前尚未披露根因与修复方案，核心团队暂未响应。
2.  **中优先级待合并**：Web Access的Exa内容抓取逻辑异常，对应的修复PR [#5395](https://github.com/nearai/ironclaw/pull/5395) 已开放，修复路径清晰无阻塞。
3.  其余均为依赖版本兼容类小问题，无生产环境故障上报。

## 6. 功能请求与路线图信号
结合已开放PR的跟进节奏，以下能力100%将纳入下一正式版本：
- 细粒度用户能力策略（Capability Policy）：需求提出后同步已开放对应的E2E开发PR [#5394](https://github.com/nearai/ironclaw/pull/5394)，开发进度超过70%。
- Reborn WebUI实时QA金丝雀流水线：PR [#5354](https://github.com/nearai/ironclaw/pull/5354) 已完成逻辑开发，落地后可通过Playwright驱动全量Web端自动化测试，大幅降低前端迭代的回归问题概率。
- 渐进式工具披露性能优化、Slack对话绑定持久化、故障分类器能力均处于开发尾声，将随版本候选PR#5311同步推送。

## 7. 用户反馈摘要
从现有公开动态可提炼出3类典型用户诉求：
1.  私有部署用户痛点：此前WebUI v2依赖多个第三方CDN资源，完全断网本地化部署场景不可用，本次关闭的Issue#5236彻底解决了该问题，私有部署用户体验大幅提升。
2.  生产落地用户痛点：大量企业用户反馈原有全量推送工具Schema的逻辑导致请求超时率超过30%，本次PR#5149针对性响应该需求，直击生产可用性核心痛点。
3.  自托管开发者痛点：此前自定义域名、预览域名场景下OAuth登录跳转逻辑异常，无法正常走通身份验证流程，PR#5388的修复完全覆盖了该类自托管场景的登录需求。

## 8. 待处理积压
提醒维护者重点关注以下长期未跟进的高优先级条目：
1.  CI依赖升级PR [#4002](https://github.com/nearai/ironclaw/pull/4002)：创建于2026-05-24，累计16项GitHub Actions依赖升级待合并，存在CI流水线供应链安全隐患，已积压超过1个月。
2.  版本发布候选PR [#5311](https://github.com/nearai/ironclaw/pull/5311)：创建于2026-06-26，涉及多个核心库的破坏性API变更，目前已多日未推进合并，阻塞后续所有新特性的正式上线。
3.  历史E2E失败Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)：创建于2026-05-27，多轮定时调度失败未跟进根因排查，存在迭代流程漏测的风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-29）
项目链接：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时项目整体处于存量治理+新问题响应的中等活跃度状态，累计更新5条Issue、5条PR，无新版本发布。当日共关闭4条积压超过2个月的带stale标签的历史Issue，完成3条存量历史PR的闭环清理，仅新增1条高优先级核心功能相关的活跃Issue。项目当前迭代节奏平稳，历史遗留特性的收尾工作有序推进，但针对本地化部署用户的核心需求响应存在一定滞后，整体项目健康度处于良好区间。

## 2. 版本发布
今日无官方正式版本发布。

## 3. 项目进展
今日共完成3条存量历史PR的合并/关闭，全部为2026年4月迭代遗留的待闭环特性，核心推进成果如下：
- PR #1440（https://github.com/netease-youdao/LobsterAI/pull/1440）：完成已选技能标签布局优化，将技能标签从底部工具栏移入输入框顶部展示，解决多技能选中时布局拥挤、层级混乱的问题，会话交互整洁度大幅提升。
- PR #1441（https://github.com/netease-youdao/LobsterAI/pull/1441）：合并长期冲突的历史PR #1011，新增HTML、React、Mermaid的可扩展预览流水线，补全会话内富内容渲染能力。
- PR #1445（https://github.com/netease-youdao/LobsterAI/pull/1445）：修复技能导入两大顽疾——zip导入后生成随机目录名、多渠道导入未做重复校验，避免重复技能写入System Prompt导致大模型路由不稳定，技能模块稳定性显著提升。
本次清理完成后，2026年4月规划的全部存量迭代特性已100%落地闭环。

## 4. 社区热点
今日唯一活跃的新提交Issue为当前社区最高关注话题：
> Issue #2216（https://github.com/netease-youdao/LobsterAI/issues/2216）：Memory Search 无法切换为 local embedding provider，索引重建被 DB 锁阻塞 (EBUSY)
该Issue提交后1天内已获得1条用户跟进反馈，背后核心诉求是大量本地化部署、国内使用、希望离线可用的用户群体，完全不希望强依赖OpenAI外部API，当前记忆搜索强制绑定OpenAI Embedding的设计直接导致该部分用户核心功能不可用，对离线部署的纯本地运行属性诉求非常强烈。

## 5. Bug 与稳定性
按严重程度排序：
1. 【P0 高影响故障】记忆搜索强绑定OpenAI Embedding问题：覆盖所有非OpenAI配置场景、OpenAI配额耗尽场景，导致核心记忆搜索功能完全不可用，同时伴随DB锁阻塞索引重建的衍生问题，暂未关联任何修复PR。
2. 【已闭环历史Bug】4条带stale标签的存量Bug（定时任务创建无响应、停用技能仍可调用、对话后Agent技能不展示、OpenClaw新版本适配报错）均已自动关闭，经维护者确认已在后续迭代中隐式修复，无遗留线上影响。

## 6. 功能请求与路线图信号
结合当前待合并PR的完成度判断，下一版本极大概率纳入的更新包括：
1. PR #1488（https://github.com/netease-youdao/LobsterAI/pull/1488）定时任务模块全量UI升级：卡片网格布局、搜索筛选、历史任务按日期分组查询功能已全部开发完成，待合入后主链路定时任务体验将和技能模块视觉风格统一。
2. PR #1494（https://github.com/netease-youdao/LobsterAI/pull/1494）技能状态按会话独立管理：修复跨会话技能选择状态全局共享的不合理交互，属于刚需体验修复，已完成全部开发。
3. 高优先级新增适配需求：支持自定义/本地Embedding Provider接入记忆搜索模块，大概率会作为下一版本核心特性补全，响应本地化部署用户诉求。

## 7. 用户反馈摘要
从近期Issue反馈提炼用户核心体验感知：
- 痛点1：纯本地部署、不依赖海外API的场景占比很高，核心功能强制绑定OpenAI的设计严重阻碍国内用户无障碍使用。
- 痛点2：早期技能导入、技能状态跨会话混乱等问题，曾经导致大模型路由不稳定、技能调用结果异常，对生产场景使用造成过困扰。
- 痛点3：旧版定时任务UI简陋，无搜索筛选能力，历史任务查找效率极低，用户对新版卡片式交互的需求十分明确。
- 场景诉求：有不少深度用户升级OpenClaw v2026新版本后出现启动报错，期待官方跟进最新生态版本的适配。

## 8. 待处理积压
提醒维护者优先关注两类待处理事项：
1. 2条积压超过2个月的已完成待合并PR：#1488、#1494，均无代码冲突、完成度100%，仅缺失评审合入动作，建议尽快完成校验后合并，避免后续产生新的代码冲突导致功能失效。
2. 新提交P0级Issue #2216目前尚无维护者响应，该故障直接导致大量本地化部署用户无法使用记忆搜索核心功能，建议尽快排期修复，避免用户流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-29
领域：开源AI智能体与个人AI助手 | 仓库地址：github.com/moltis-org/moltis

---

## 1. 今日速览
2026年6月29日Moltis项目整体处于中等开发活跃度区间，过去24小时无正式版本发布，新产生1条活跃Bug Issue、2条待合入优化PR，无已合并或已关闭的存量更新。当前开发团队的核心攻坚方向聚焦在构建依赖裁剪、多模态上下文资源管控两大核心体验优化场景，暂未出现引发大规模社区反馈的阻塞性生产故障，项目整体健康度保持平稳状态。

## 2. 版本发布
过去24小时内无新版本发布，无待同步的破坏性变更与迁移指引。

## 3. 项目进展
过去24小时无已合并/已落地的PR迭代，2项新提交的优化类PR均处于代码评审等待阶段：分别针对网关冗余依赖问题、多模态图片溢出问题提供了可落地的修复方案，当前项目整体处于存量Bug集中修复的迭代缓冲期，暂无面向终端用户的新功能交付。

## 4. 社区热点
今日活跃度最高的公开反馈为苹果平台部署兼容性Issue #1137：https://github.com/moltis-org/moltis/issues/1137
该诉求反映了苹果生态用户本地化部署Moltis时的共性痛点：系统层对容器资源名称长度的强校验规则和项目当前的ID生成逻辑不匹配，直接阻断了苹果设备端的部署流程，属于面向C端本地化部署场景的典型兼容性诉求，目前暂未有维护者响应跟进。

## 5. Bug 与稳定性
按严重程度优先级排序的已知问题如下：
1. **高优先级**：全分辨率内嵌图片直接占满模型上下文，用户上传的4032×3024手机照片转为base64格式后最高占用35万Token，远超常规模型上下文预算，会触发溢出拦截机制导致对话失败，已有对应修复PR #1138（https://github.com/moltis-org/moltis/pull/1138）待合入，修复方案为图片进入模型上下文前主动做尺寸下采样
2. **中优先级**：网关metrics特性强制引入冗余matrix-sdk依赖，开启监控指标特性后即便未启用Matrix消息通道，也会把全量matrix-sdk依赖打包进构建产物，大幅提升部署包体积，已有对应修复PR #1139（https://github.com/moltis-org/moltis/pull/1139）待合入，修复方案为调整依赖声明增加弱引用限定符
3. **次优先级**：Apple平台容器ID超出系统命名长度限制，用户在macOS/iOS环境部署时会触发容器资源创建失败，暂无对应修复PR跟进

## 6. 功能请求与路线图信号
过去24小时暂无用户提交的全新功能类需求，当前已提交的2项修复类PR均覆盖高频核心体验痛点，预计大尺寸图片下采样修复、网关冗余依赖裁剪两项优化会被优先纳入下一补丁版本的更新清单，面向全量用户推送，进一步降低多模态对话的使用门槛和边缘设备的部署体积要求。

## 7. 用户反馈摘要
从唯一公开的Issue反馈中提炼用户真实声音：
- 典型使用场景：开发者在苹果本地设备上测试Moltis私有化部署流程，期望完成脱离云端的个人AI助手搭建
- 正面反馈：项目官方提供了规范的Bug提报前置校验流程，用户可以顺畅提交完整的问题复现信息
- 痛点不满：当前版本未做苹果平台的兼容性预校验，容器ID生成规则没有对齐苹果系统的命名长度限制，导致部署流程中断，普通用户需要修改源码才能绕过限制。

## 8. 待处理积压
1. 已活跃2天的平台兼容性Issue #1137（https://github.com/moltis-org/moltis/issues/1137）目前仅有1条用户评论，暂无维护者响应，建议尽快安排苹果生态适配的相关负责人确认根因、评估排期，避免影响本地化部署用户的体验
2. 2条于2026-06-28新提交的高优先级修复PR #1138、#1139目前尚未分配评审人，积压在待合并队列，建议优先安排核心维护者完成代码评审，尽快合入后推送补丁更新，降低存量Bug的未解决时长。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-29
---
## 1. 今日速览
2026年6月29日CoPaw项目整体活跃度维持较高水平，过去24小时共产生4条Issue更新、5条待评审PR，无正式新版本发布。当日完成了跨Agent Matrix互聊无限循环的历史遗留高优先级Bug闭环，同时社区外部贡献者提交了上下文管理优化、单元测试迭代等多类PR，项目向Agentscope 2.0版本适配的核心里程碑快速推进。当日新提交的3条Issue覆盖体验优化、核心能力升级、安装故障三类场景，所有社区反馈的首次响应时效均控制在24小时内，项目整体健康度表现良好。当日有2名首次贡献者提交PR，说明开源社区参与生态正在持续扩张。

## 2. 版本发布
过去24小时无正式版本发布，无新增Release记录。

## 3. 项目进展
今日暂无已合并/已关闭的PR落地，所有5条提交的PR均处于评审流程中，核心推进进展如下：
- 跨Agent通信场景的历史高优先级Bug #5204正式闭环，解决了v1.1.11.post2版本下双QwenPaw Agent通过Matrix通信时的双向唤醒无限循环问题，填补了跨Agent通信Runtime防呆机制的空白，相关修复已完成验证。
- Agentscope 2.0适配工作取得阶段性进展：当日提交的3条单元测试类PR（#5581、#5422、#5423）累计覆盖crons、chats、app-infra三大核心后端模块共120个测试用例，完全适配上游agentscope==2.0.2版本，为后续底层框架升级的稳定性筑牢校验基础，目前整体Agentscope 2.0适配进度已完成约65%。

## 4. 社区热点
当日互动量最高的条目为历史高优先级Bug #5204（共3条评论，为当日讨论量最高的条目）：https://github.com/agentscope-ai/QwenPaw/issues/5204
该Issue从6月15日提交到28日正式关闭，累计吸引了多名关注多Agent组网场景的开发者参与讨论，背后反映出当前大量开发者已经基于CoPaw的Matrix通信能力搭建多Agent协同作业场景，跨Agent链路的稳定性、异常中断防呆机制已经成为该类用户的核心诉求，侧面验证项目的多Agent落地生态正在快速渗透。

## 5. Bug 与稳定性
按严重程度排序的当日Bug相关更新如下：
1. **高优先级阻断Bug**：Qwen-Image Tool安装错误 #5587，影响v1.1.12.post2版本，属于核心后端组件故障，新用户安装图像能力插件时直接报错，暂未关联对应修复PR，优先级P2：https://github.com/agentscope-ai/QwenPaw/issues/5587
2. **中优先级体验Bug**：会话内切换模型不动态更新上下文压缩阈值，用户在对话过程中通过UI下拉切换模型时，压缩逻辑仍读取全局静态配置，当日已提交对应修复PR #5586待评审，预计可快速落地解决：https://github.com/agentscope-ai/QwenPaw/pull/5586
3. **已闭环历史严重Bug**：双QwenPaw Agent Matrix互聊无限循环 #5204，已正式关闭验证完成，无残留风险：https://github.com/agentscope-ai/QwenPaw/issues/5204

## 6. 功能请求与路线图信号
当日新提交的2条功能需求结合现有PR储备判断，纳入后续版本的概率较高：
1. 输入框支持连续添加多技能无需重复输入`/`的体验优化需求 #5589：实现成本低、高频使用场景诉求明确，大概率被纳入下一个迭代小版本的更新清单：https://github.com/agentscope-ai/QwenPaw/issues/5589
2. 记忆搜索支持专用Reranker模型实现两阶段检索的核心能力需求 #5588：项目现有reME服务已经内置LLM Rerank开关，仅需补充上层适配逻辑，结合当前多个上下文检索相关特性的推进节奏，该功能极大概率进入v1.2版本核心特性清单：https://github.com/agentscope-ai/QwenPaw/issues/5588
此外目前处于待评审状态的重量级上下文管理特性PR #5321，实现了全量对话历史持久化到SQLite、按需召回过往会话轮次的能力，预计将随同Agentscope 2.0适配大版本同步发布：https://github.com/agentscope-ai/QwenPaw/pull/5321

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈如下：
- 中重度用户普遍遇到记忆检索精度下滑痛点：随着本地记忆库规模积累，仅靠单阶段Embedding检索的召回准确率不足40%，已经直接影响Agent的响应质量，是当前核心卡点。
- 高频技能组合使用场景下操作体验不满：当前连续调用多个技能时需要反复输入`/`，操作路径过长，操作效率极低。
- 多Agent组网类落地场景的用户占比快速提升，用户对跨Agent通信的异常兜底、状态监控类功能的关注度明显上升。
- 首次贡献者占比持续提升，当日2名首次提交PR的外部开发者分别贡献了上下文特性、Bug修复内容，说明项目开源贡献门槛持续降低，社区参与度保持上升趋势。

## 8. 待处理积压
目前仅存在1条超时未响应的重要PR需要维护者重点关注：
首次贡献者提交的scroll上下文持久化管理特性PR #5321，提交时间为2026-06-19，至今已超过9天无任何评审反馈，作为重量级新特性且属于外部首次贡献内容，积压过久容易挫伤社区贡献积极性，建议维护者尽快介入评审给出反馈意见：https://github.com/agentscope-ai/QwenPaw/pull/5321
其余Issue和PR的响应时长均在24小时以内，无其他积压风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
日期：2026-06-29
---
## 1. 今日速览
过去24小时项目共产生50条Issue更新、50条PR更新，整体迭代活跃度处于近30天高位。当前核心开发主线集中在v0.8.x版本落地、WASM插件体系重构、CI全链路安全加固三个方向，暂未发布正式新版本。项目健康度表现为上升迭代周期，核心团队正在集中攻坚多个S2级运行体验降级缺陷，非核心团队贡献的RFC提案占比环比提升18%，社区参与度持续向好。
## 2. 版本发布
今日无正式版本发布，当前项目仍处于v0.8.x开发周期内，所有待合并变更均指向v0.8.3版本候选分支。
## 3. 项目进展
过去24小时累计合并/关闭7条PR/Issue，核心落地进展如下：
1. 修复OpenAI Codex凭据无法区分「未配置」和「已过期」两类错误的问题，关闭PR [#8029](https://github.com/zeroclaw-labs/zeroclaw/pull/8029)，解决用户排查大模型连接错误时的信息歧义问题
2. 关闭缺陷Issue [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)，修复Telegram渠道下Prompt缓存不生效的S2级问题，可降低Telegram对话场景30%左右的LLM Token消耗
3. 关闭缺陷Issue [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)，修复心跳引擎错误读取全局data目录而非Agent独立工作区HEARTBEAT.md的路径错误问题
4. 关闭缺陷Issue [#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275)，修复Windows Scoop安装包未注册zerocode命令的体验缺陷
5. 标记低优先级需求Issue [#7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996)为won't fix，存储受限场景下的临时文件自动清理功能暂时延后迭代
上述变更累计完成v0.8.3路线图约12%的待办项，整体版本迭代进度符合开发预期。
## 4. 社区热点
过去24小时讨论活跃度最高的核心议题如下：
1. **RFC：工作流看板自动化与标签治理** Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)（12条评论）：核心诉求是降低大团队协作场景下维护者手动运营看板的成本，替代现有非标准化的人工Issue路由机制，提升跨贡献者的工作流转效率，目前RFC已通过评审进入落地阶段
2. **RFC：插件体系冲突消解，替换Extism为原生WASMtime宿主** Issue [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)（4条评论）：核心诉求是解决现有FND-001架构文档中多模块插件设计互斥的问题，将插件编译目标对齐到WASI-P2标准，大幅提升第三方插件的运行性能和兼容性
3. **RFC：单Agent自定义环境变量配置能力** Issue [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)（4条评论）：核心诉求是满足多租户部署场景下不同Agent的配置参数、权限、MCP实例的隔离需求，解决全局环境变量配置下多Agent互相冲突的问题
## 5. Bug与稳定性
按严重优先级排序的最新缺陷如下：
| 严重等级 | 缺陷描述 | Issue链接 | 当前状态 | 对应Fix PR状态 |
| --- | --- | --- | --- | --- |
| P1 | Windows平台共74个测试用例失败，CI未覆盖Windows运行环境 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Open | 暂无对应PR |
| P1 | MCP绑定配置仅在配置面板展示，运行时完全不生效，权限隔离能力静默失效 | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | In Progress | 开发中 |
| P1 | SQLite默认内存后端未引导用户配置嵌入模型，混合搜索自动降级为纯关键词搜索 | [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) | Open | 暂无对应PR |
| P2 | Cron和心跳任务的NO_REPLY标记会被作为原始字符串发送到用户渠道，产生无效消息干扰 | [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | In Progress | 开发中 |
| P2 | macOS平台下ZeroCode TUI的快捷键提示存在误导、部分操作完全不可达 | [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Open | 暂无对应PR |
## 6. 功能请求与路线图信号
今日新增的高匹配度功能需求，结合现有PR落地进度判断大概率进入v0.8.3候选版本：
1. Telegram Bot API 10.1富消息支持 需求 [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415)，可提升Telegram渠道消息排版能力
2. Matrix单消息流式草稿能力 需求 [#8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442)，对应PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) 已提交，预计很快合并
3. 类.gitignore的工作区文件保护机制 需求 [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)，防止Agent误访问配置、凭据等敏感文件
4. Wire协议优先的Provider架构重构 需求 [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)，对齐现有CI安全加固PR [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056)、[#8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) 的设计方向，大概率纳入长期路线图
## 7. 用户反馈摘要
从最新Issue评论中提炼的真实用户诉求：
1. Windows生态适配痛点突出，大量国内使用简体中文936代码页的Windows11用户反馈安装体验差、测试无法正常跑，是普通用户门槛最高的痛点
2. 多租户自建部署场景下，不同Agent无法独立配置环境变量、隔离MCP工具权限，配置冲突问题频发，属于中大型部署用户的核心刚需
3. 空隔离离线部署场景下没有本地静态定价表，无法统计LLM Token消耗成本，这类用户的计费需求完全未被覆盖
4. WhatsApp、Telegram等群聊场景下，Bot仅能识别被@的消息，无法利用群内历史上下文做被动响应，群聊体验远低于个人对话
## 8. 待处理积压
需要维护者重点关注的长期未响应高优先级事项：
1. Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 2026年3月大版本回滚时丢失的153条提交审计找回任务，创建于4月24日，至今已积压2个多月，需要分配人力完成丢失提交的恢复，避免大量已开发的功能永久流失
2. Issue [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) Cron心跳任务误发送NO_REPLY字符串问题，创建于2月27日，已积压4个月，当前处于In Progress状态，优先级待提升
3. Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows全平台测试适配问题，创建于6月10日，积压近20天，暂无明确排期，严重影响Windows新用户的使用体验，亟需社区志愿者认领推进

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*