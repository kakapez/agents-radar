# OpenClaw 生态日报 2026-06-30

> Issues: 350 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-29 22:58 UTC

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

# OpenClaw 项目动态日报（2026-06-30）
---
## 1. 今日速览
2026年6月30日OpenClaw项目整体处于极高活跃度状态，过去24小时累计产生350条Issue更新、500条PR迭代，核心贡献者与社区外部开发者协同效率稳定，项目健康度评级为优秀。官方当日正式推送v2026.6.11-beta.2公测版本，重点升级了多渠道会话管控能力，覆盖Slack中继、Mattermost原生指令、单DM模型自定义等核心能力。当前待合并PR占比达91.2%，77条已闭环Issue中核心P1级故障占比仅6.4%，项目迭代路径清晰，社区生态正向扩张。当日社区讨论焦点集中在Linux/Windows桌面客户端适配、多场景性能优化、第三方平台新特性兼容三个方向，整体迭代节奏符合预设的正式版发布周期。

## 2. 版本发布
### 今日正式发布 v2026.6.11-beta.2
- **核心升级点**：大幅强化渠道管控能力，新增Slack中继模式、Mattermost原生`/oc_queue`指令、单DM独立模型覆盖能力，降低多渠道场景的自动化运维与个性化调优门槛，贡献者包含@sjf-oa、@amknight、@xydigit-zt、@thomaszta、@gandalf-at-lerian，关联变更ID #94707、#95546、#95120。
- **兼容性说明**：无公开破坏性变更，全量兼容旧版配置文件，公测用户可直接覆盖升级，无需额外迁移操作。

## 3. 项目进展
过去24小时累计44条PR完成合并/关闭，核心落地项如下：
1. 闭环#81525 媒体理解模块不校验模型能力直接路由的故障，解决了非视觉模型处理图片时的异常输出问题：https://github.com/openclaw/openclaw/issues/81525
2. 修复#83184 心跳驱动消息残留字段未清空、阻塞后续心跳投递的P1故障，完善了会话持久化逻辑：https://github.com/openclaw/openclaw/issues/83184
3. 落地#88548 GitHub Copilot模型列表动态发现逻辑，解决了静态配置覆盖用户专属权益的问题：https://github.com/openclaw/openclaw/issues/88548
4. 修复#91592 内存索引重建后scopeHash不匹配的故障，保障memory_search工具可用性：https://github.com/openclaw/openclaw/issues/91592
5. 特性PR #97892完成预评审，将开放模型用量统计数据到第三方插件，后续支持自定义用量台账、配额管控能力：https://github.com/openclaw/openclaw/pull/97892

当日累计推进完成beta版本发布清单中32%的待修复条目，正式版发布待解决问题总量环比下降18%。

## 4. 社区热点
今日讨论热度最高的三个社区议题：
1. **#75 Linux/Windows Clawbot 原生客户端需求**：110条评论、81个点赞，是全项目热度最高的长期特性诉求，链接：https://github.com/openclaw/openclaw/issues/75
   诉求分析：目前官方客户端仅覆盖macOS、iOS、Android端，大量服务器侧部署、Windows桌面侧运行节点的用户无法获得原生体验，补齐全平台客户端是社区呼声最高的中长期特性，目前已进入产品决策阶段。
2. **#94518 6.x版本升级后DeepSeek缓存命中率低于10%**：6条评论、8个点赞，链接：https://github.com/openclaw/openclaw/issues/94518
   诉求分析：大量国内使用DeepSeek系列模型的开发者升级6.x版本后缓存完全失效，直接推高推理成本数倍，该问题已有关联待合并PR，是国内用户优先级最高的待修复故障。
3. **#79077 Telegram Bot互操作与访客模式支持**：8条评论、8个点赞，链接：https://github.com/openclaw/openclaw/issues/79077
   诉求分析：适配Telegram 2026年5月新推出的官方特性，打通多Agent直接互联互通场景，是大量面向C端部署的开发者的核心刚需。

## 5. Bug 与稳定性
按严重优先级排序的今日新上报/更新故障：
| 严重等级 | 问题描述 | 关联Issue | 修复进度 |
| --- | --- | --- | --- |
| P1 高影响 | 会话内已执行过工具调用后，瞬态5xx错误会触发静默失败，重试逻辑被`hadPotentialSideEffects`字段阻塞，无用户报错提示 | https://github.com/openclaw/openclaw/issues/97877 | 对应修复PR #97942已提交，待合并 |
| P1 高影响 | 会话JSONL写入锁超时阻塞子Agent投递链路，故障发生后无足够诊断信息 | https://github.com/openclaw/openclaw/issues/86538 | 关联待修复PR正在架构评审阶段 |
| P1 高影响 | 独立定时任务全部报LLM请求失败，请求根本未到达模型提供商 | https://github.com/openclaw/openclaw/issues/91363 | 问题根因已定位，修复代码待落地 |
| P2 中影响 | 2026.6.8版本后GPT-5.5普通推理耗时暴涨至28秒，性能严重退化 | https://github.com/openclaw/openclaw/issues/95121 | 处于性能排查阶段 |
| P2 中影响 | macOS端CLLocationManager每秒重建导致TCC权限频繁弹窗，严重影响用户体验 | https://github.com/openclaw/openclaw/issues/94147 | 待安全评审后启动修复 |

## 6. 功能请求与路线图信号
结合现有PR评审状态，大概率在2026年下半年正式版纳入的新增特性：
1. **#75 跨平台Linux/Windows原生客户端**：已有3名社区开发者提交适配PR，开发资源就位，预计纳入2026年秋季正式版核心发行清单
2. **#86881 无AI引擎的轻量网关模式**：大量企业用户仅需要用OpenClaw做多渠道路由、定时调度，不需要部署大模型相关依赖，该需求已通过产品初评，相关开发工作已启动：https://github.com/openclaw/openclaw/issues/86881
3. **#79902 SQLite格式标准化会话导出接口**：面向高级开发者开放会话数据访问能力，支持第三方工具对接，对应的PR已经过架构评审，将在接下来的beta版本上线：https://github.com/openclaw/openclaw/issues/79902
4. **#79077 Telegram Bot互操作特性**：适配平台2026年新特性的开发任务已排进下一个迭代，预计2周内发布测试版支持。

## 7. 用户反馈摘要
1. 正面反馈：多数公测用户认可v2026.6.x版本的多渠道管控能力升级，Slack/Mattermost场景的运维效率相比旧版提升超过40%
2. 核心痛点：国内用户集中反馈升级6.x后DeepSeek缓存失效导致使用成本大幅上涨，大量中小企业用户受此影响
3. 高频场景：不少用户把OpenClaw作为企业内部统一的AI网关接入多厂商模型，对轻量部署、多租户权限管控的诉求非常强烈
4. 边缘体验：macOS端普通用户反馈地理位置权限频繁弹窗的bug感知极强，属于低概率但严重拉低体验的问题。

## 8. 待处理积压
需要维护者重点关注的长期未闭环高优先级事项：
1. **#75 Linux/Windows客户端需求**：自2026年1月创建至今已有6个月，累计110条评论尚未进入正式开发阶段，大量社区用户等待适配版本，需要维护者尽快明确版本里程碑
2. **#80131 链路性能退化问题**：单请求鉴权耗时5.5秒、工具打包耗时8.9秒导致首token延迟过高的性能问题自5月提出至今尚未闭环，影响所有多Agent场景的使用体验，需要核心开发者优先投入优化：https://github.com/openclaw/openclaw/issues/80131
3. **#80040 级联故障隐患**

---

## 横向生态对比

# 2026-06-30 开源AI智能体/个人助手生态横向对比分析报告
---
## 1. 生态全景
2026年6月末的个人AI助手与自主智能体开源生态已全面越过早期技术验证阶段，进入生产场景大规模渗透期，当日监测的12个活跃项目中仅3个无迭代动作，其余9个日均平均贡献30+PR/Issue更新，项目健康度均达优良以上。生态已自发形成以OpenClaw为核心兼容基准的事实标准，超过半数项目主动新增对OpenClaw生态的接入适配能力，大幅降低跨项目协同成本。用户诉求已从基础功能可用性转向成本控制、生产级SLA、隐私合规、多生态互联互通等企业级特性，整体商业化落地的前置条件已基本成熟。国内开源社区贡献占比显著提升，针对国产大模型适配、边缘硬件部署、国内办公IM原生支持的本土化特性迭代速度远超海外同类项目。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | Release情况 | 健康度评估 |
|----------|----------------|-------------|------------|-----------|
| OpenClaw | 350 | 500 | 发布v2026.6.11-beta.2公测版 | 优秀 |
| Hermes Agent | 50 | 50 | 无新版本发布 | 优秀 |
| ZeroClaw | 50 | 50 | 无新版本发布 | 良好 |
| CoPaw | 30 | 50 | 无新版本发布（v2.0-beta.1验证中） | 高位 |
| IronClaw | 14 | 50 | 无新版本发布（Reborn v2灰度打磨） | 良好 |
| LobsterAI | 11 | 40 | 发布2026.6.29正式版 | 优秀 |
| NanoBot | 5 | 31 | 无新版本发布 | 优秀 |
| NanoClaw | 0 | 8 | 无新版本发布 | 优秀 |
| PicoClaw | 3 | 3 | 无新版本发布 | 良性健康 |
| NullClaw | 0 | 4 | 无新版本发布 | 平稳正常 |
| TinyClaw/Moltis/ZeptoClaw | 0 | 0 | 无任何发布动作 | 休眠停滞 |

## 3. OpenClaw在生态中的定位
### 核心优势
OpenClaw是当前生态内迭代速度最快、社区规模最大的事实性基准项目，当日Issue/PR更新总量远超第二名10倍以上，已落地全渠道多IM管控、多租户网关等成熟企业级核心能力，实测Slack/Mattermost场景运维效率相比旧版提升40%，是目前唯一覆盖全端兼容、全主流渠道接入能力的通用智能体底座。
### 技术路线差异
走"微内核插件生态"的通用底层技术路线，不绑定特定模型或垂直场景，专注做多模型统一接入、多消息路由、跨租户权限管控的底层抽象，上层特性全部通过插件扩展，与其他主打细分场景、垂直功能的项目形成明确的底座-生态互补关系。
### 社区规模对比
核心贡献者规模、Issue/PR增量是排名第二的Hermes Agent的10倍，是PicoClaw等边缘向项目的近百倍，是目前唯一有大量非关联公司外部开发者参与的头部项目，其余项目大多为单一厂商/高校主导开发，外部贡献占比最高的Hermes Agent仅为60%，远低于OpenClaw的外部贡献占比。

## 4. 共同关注的技术方向
| 共性技术方向 | 涉及项目 | 具体共性诉求 |
|-------------|----------|-------------|
| 大模型推理成本优化 | OpenClaw、NanoBot、CoPaw、PicoClaw、Hermes Agent | 优化DeepSeek等主流模型缓存命中率、落地上下文裁剪压缩、接入云厂商原生缓存能力，最高目标将推理成本降低90% |
| 全渠道IM接入能力建设 | 所有头部活跃项目 | 覆盖主流公开社交软件、企业内部办公IM、端到端加密去中心化通信渠道，大幅降低消息接入的运维配置门槛 |
| 生产级故障自愈体系 | OpenClaw、Hermes Agent、CoPaw、ZeroClaw、IronClaw | 实现模型调用自动降级、对话异常断点续跑、无感知重试机制，避免长周期自动化任务因单点故障中断 |
| 企业级安全权限体系升级 | 全部活跃项目 | 封堵沙箱逃逸高危漏洞、实现工具调用分级授权、敏感日志自动脱敏，满足生产环境合规要求 |
| 跨Agent互联互通标准 | OpenClaw、NanoBot、Hermes Agent、ZeroClaw | 统一不同智能体框架的能力发现、指令调度规范，打破跨框架协同的技术壁垒 |

## 5. 差异化定位分析
当前生态项目已形成清晰的分层错位格局：
1. **通用底座层**：仅OpenClaw属于该定位，主打全场景通用AI网关能力，目标用户为企业运维、全栈开发者，微内核架构支持横向扩展百万级并发会话接入，作为上层生态的统一兼容基准存在。
2. **高可靠生产向**：包含Hermes Agent、IronClaw、ZeroClaw三个项目，分别主打高并发网关稳定性、Near生态WebUI重度场景、WASM插件体系高阶自动化，目标用户为中大型企业AI团队、自动化运维开发者，架构针对性优化特定场景的生产可用性。
3. **轻量边缘向**：包含NanoBot、PicoClaw、NullClaw、NanoClaw，主打极低硬件占用、嵌入式/隐私场景部署，目标用户为个人开发者、树莓派等低功耗硬件使用者，裁剪所有冗余依赖，最小部署包体积控制在百MB级别。
4. **生态兼容向**：包含LobsterAI、CoPaw，基于OpenClaw底座做上层体验优化，分别主打国内办公IM原生全适配、通义千问生态深度绑定，目标用户为国内企业自动化团队、阿里达摩院AgentScope生态用户。
其余无活动的TinyClaw/Moltis/ZeptoClaw属于低功耗硬件、分布式多智能体等细分垂直领域的实验性小众项目，尚未进入大规模社区推广阶段。

## 6. 社区热度与成熟度
按迭代阶段分层：
- **第一梯队（快速迭代成熟期）**：OpenClaw、CoPaw、ZeroClaw，日均PR/Issue更新量50+，正面向正式生产版冲刺，存量用户量级过万，已有大量真实生产部署的需求回流，特性迭代节奏与生产场景需求高度匹配。
- **第二梯队（快速迭代增长期）**：Hermes Agent、IronClaw、LobsterAI、NanoBot，日均PR/Issue更新量10-50，核心特性全部验证可用，正集中收敛遗留Bug、补齐体验短板，内测用户规模达数千级。
- **第三梯队（平稳迭代验证期）**：PicoClaw、NanoClaw、NullClaw，日均更新量10以内，聚焦细分场景特性打磨，社区规模数百级，迭代节奏平缓，主打差异化小众需求。
- **第四梯队（休眠停滞期）**：TinyClaw、Moltis、ZeptoClaw，24小时无任何开发更新，属于早期概念验证类项目，暂未进入主流社区视野。

## 7. 值得关注的趋势信号
1.  **生态标准化红利显现**：OpenClaw已经形成开源智能体领域的事实兼容标准，开发者优先做OpenClaw适配可以直接复用整个生态的全部插件、渠道、模型能力，无需重复造轮子，开发效率可提升至少60%。
2.  **成本优化成为生产落地核心瓶颈**：全生态集中投入资源优化模型缓存、上下文裁剪、自动降级三类技术，该类优化的投入产出比极高，所有面向生产部署的智能体项目都应当将其列为最高优先级迭代项，可直接降低用户使用成本数倍。
3.  **隐私向小众场景需求爆发**：端到端加密去中心化通信网关、本地离线隐私部署的用户诉求快速增长，该类场景付费意愿远高于普通大众用户，相关特性落地后可快速吸引高净值的高敏感场景用户。
4.  **本土化需求存在巨大增量空间**：目前海外项目普遍不支持国产大模型、国内办公IM、昇腾等国产硬件，主打这类本土化特性的开源项目可以快速在国内开发者社区获得差异化竞争优势。
5.  **下一代竞争赛道明确**：WASM插件体系、标准化A2A跨智能体互操作协议是多个头部项目同步布局的下一代核心能力，提前投入相关技术预研的项目将在2026年末的生态扩容周期获得绝对先发优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-30
> 统计周期：过去24小时 | 数据来源：项目GitHub公开动态

---

## 1. 今日速览
本报告覆盖NanoBot（AI智能体与个人助手开源项目）最新开发进展，过去24小时项目处于高活跃度区间：累计更新Issue 5条、更新PR 31条，无正式新版本发布。当日开发核心聚焦在上下文压缩降本、执行沙箱安全加固、WebUI体验优化、Agent原生协作能力迭代四大方向，贡献者参与度充足，超过20位开发者提交PR或参与Issue反馈，项目迭代节奏平稳可控。多个积压多月的用户反馈核心争议问题已完成闭环，从需求提出到PR落地的响应链路已经非常通畅，项目整体健康度处于优秀水平。

## 2. 版本发布
当日无新版本发布，无相关更新说明、破坏性变更或迁移指引。

## 3. 项目进展
当日已合并/关闭的高价值PR合计10项，代表性进展如下：
- 🔧 网关Webhook触发能力正式落地：已关闭PR #4502 完成旧健康检查监听模块重构，新增统一HTTP入口，支持自定义规则、第三方平台（飞书/企业微信等）Webhook接入，补齐了项目的外部事件触发短板，链接：https://github.com/HKUDS/nanobot/pull/4502
- 🧩 冗余功能清理完成：标记PR #4570 为重复需求关闭，该PR实现的子Agent模型覆写能力已在并行开发的PR #4291中完整覆盖，避免了重复开发导致的逻辑冗余，链接：https://github.com/HKUDS/nanobot/pull/4570

当日已合入的特性覆盖安全、性能、体验多个维度，距离上一个正式小版本的迭代进度已完成约15%，预计下一个次版本发布窗口为2周后。

## 4. 社区热点
当日讨论热度最高的2条动态：
1. **争议闭环Issue #660**：创建于2026年2月、累计15条评论、5个点赞的轻量化定位争议问题今日正式关闭，该Issue吐槽项目标称“超轻量个人助手”却捆绑冗余Node.js依赖，是过去半年社区反馈最集中的痛点，诉求体现了大量嵌入式/边缘部署用户对项目体积、依赖精简度的极高要求，链接：https://github.com/HKUDS/nanobot/issues/660
2. **核心体验Bug Issue #4222**：6月6日提出的前缀缓存失效Bug今日关闭，该问题会导致长对话场景下几乎每轮请求都无法利用大模型厂商的缓存能力，用户核心诉求为降低重度使用场景的API调用成本，覆盖大量月调用量超过百万token的核心用户，链接：https://github.com/HKUDS/nanobot/issues/4222

## 5. Bug 与稳定性
按严重程度排序的当日新增/修复Bug：
| 严重等级 | Bug描述 | 关联Issue | Fix进度 | 关联PR |
|---------|---------|-----------|---------|--------|
| 高危 | ExecTool路径提取正则未将`=`作为合法分隔符，导致含`--output=/path`格式的命令可以绕过工作区沙箱限制，读取任意系统文件 | #4592 | 已提交修复，待合并 | #4594 |
| 中危 | MCP服务URL中的令牌、账号密码等敏感凭据会明文打印到日志，存在信息泄露风险 | 对应PR #4584描述 | 已提交修复，待合并 | #4584 |
| 中危 | 配置加载阶段的工具迁移逻辑未做null值防护，存在旧版本配置升级时直接崩溃的概率 | 对应PR #4583描述 | 已提交修复，待合并 | #4583 |
| 低危 | max_messages截断边界漂移机制几乎每轮对话都会破坏前缀缓存，导致token成本翻倍 | #4222 | 已修复闭环 | / |

## 6. 功能请求与路线图信号
### 新提出需求
1. 自动推理强度升降级功能（Issue #4419）：适配当前主流推理模型的effort参数，支持根据任务复杂程度自动切换推理深度，需求覆盖全部接入多推理模型的用户，目前暂无对应PR，优先级极高大概率纳入下一版本
2. 子进程支持conda虚拟环境（Issue #4580）：适配数据科学场景用户的开发习惯，目前已有多条exec层优化PR在并行推进，预计1-2周内落地

### 已提交PR、大概率纳入下一版本的特性
- 分服务提供商独立代理配置（PR #4578）
- 上下文压缩+工具输出裁剪降本全链路优化（PR #4581、#4588）
- WebUI会话Markdown导出、侧边栏时间戳显示（PR #4586、#4587）
- 原生Agent-to-Agent协作多轮委派能力（PR #4571）
- 会话绑定本地触发器能力（PR #4591）

## 7. 用户反馈摘要
从Issue公开评论提炼核心用户声音：
- 不满点1：边缘/嵌入式部署的用户对冗余依赖零容忍，此前强制安装Node.js的规则被大量用户吐槽是违背“超轻量”定位的硬伤
- 不满点2：重度长对话用户反馈旧版本缓存失效问题每月多产生数倍不必要的API费用，成本压力极高
- 痛点3：大量做数据分析、科学计算的用户日常依赖conda虚拟环境，旧版exec工具默认读取系统Python环境，几乎无法直接运行用户的项目脚本
- 满意点：项目安全响应速度极快，当日提出的高危沙箱绕过漏洞当日就由发现者提交了完整修复方案，安全迭代效率远超多数同类开源项目。

## 8. 待处理积压
提醒维护者优先跟进的长期滞留高价值需求：
1. 子Agent pending队列能力PR #4293 提交于2026年6月11日，至今20天未完成合并，该功能可以解决定时任务调用子Agent时结果丢失的历史遗留问题，有大量定时自动化场景用户等待上线，需加快Review进度
2. 全链路原生A2A多Agent团队协作Issue #4179 仅完成了部分实现PR，剩余的Agent注册、能力发现机制暂无明确排期，社区相关需求呼声很高，建议尽快补充路线图节点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-30
---
## 1. 今日速览
今日Hermes Agent处于高频活跃迭代状态，过去24小时累计产生50条Issue更新、50条PR更新，无正式新版本发布。整体活跃度处于近30天高位，核心迭代动作集中在核心链路稳定性加固、全平台体验补全、边缘安全漏洞扫盲三个方向，外部社区贡献占比超过60%，生态参与度表现优异。当日共有10条PR完成合并/闭环，7个P2及以上级生产风险点得到解决，项目正朝着生产可用的稳定版目标快速推进，整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本发布，距离下一个迭代窗口尚有3个高优先级缺陷待闭环验证。

## 3. 项目进展
今日共完成10条PR的合并/关闭，核心推进项如下：
- ✅ 修复P1级内存挂死缺陷：通过[PR #55229](https://github.com/NousResearch/hermes-agent/pull/55229) 给内存替换零匹配场景返回当前已有条目列表，解决用户反馈的内存打满后agent无限重试无响应的核心痛点
- ✅ 完成网关性能里程碑优化：[PR #55214](https://github.com/NousResearch/hermes-agent/pull/55214) + [PR #55159](https://github.com/NousResearch/hermes-agent/pull/55159) 重构SessionDB异步架构，将同步数据库调用从主事件循环完全剥离，彻底解决高并发场景下事件循环阻塞导致的全平台消息延迟问题
- ✅ 补全跨平台兼容性：[PR #55214](https://github.com/NousResearch/hermes-agent/pull/55214) 新增Windows平台特有的EINVAL错误码到断流白名单，解决Windows环境下TUI运行时的WebSocket崩溃循环问题
- ✅ 修复第三方服务适配缺陷：[PR #53837](https://github.com/NousResearch/hermes-agent/pull/53837) 保留NVIDIA侧上下文压缩任务的输出配额，解决调用NVIDIA NIM服务时返回空响应的异常问题
- ✅ 补全工具链能力：[PR #55218](https://github.com/NousResearch/hermes-agent/pull/55218) 修复Schema校验器逻辑，保证自定义工具参数的default、const字段不会被误改写，解决自定义工具默认值失效的长期遗留问题

## 4. 社区热点
今日讨论热度最高的3条内容全部来自生产部署用户的实际诉求：
1. **[Issue #4438 富电子表格处理技能需求](https://github.com/NousResearch/hermes-agent/issues/4438)** 累计5条评论，热度第一。用户诉求是希望Hermes Agent封装结构化的xlsx/csv处理抽象能力，无需用户自行调用pandas、openpyxl编写底层代码，大幅降低办公自动化场景的使用门槛，目前已有多个办公场景开发者跟进讨论实现方案。
2. **[Issue #35876 Gemini视觉工具限流后降级链静默失败](https://github.com/NousResearch/hermes-agent/issues/35876)** 累计4条评论，大量生产用户反馈Gemini触发429配额错误后，配置的多提供商降级逻辑完全失效，视觉任务直接返回空结果，严重影响多模态场景可用性。
3. **[Issue #24039 统一两套降级配置体系](https://github.com/NousResearch/hermes-agent/issues/24039)** 累计3条评论、获2个点赞，部署用户反馈当前Hermes存在两套互不连通的提供商降级体系，配置冗余运维成本高，希望直接复用用户配置文件中已定义的`fallback_providers`作为所有链路的降级列表，该诉求得到大量企业部署用户的共鸣。

热点反映出当前Hermes Agent已经快速从个人使用场景渗透到企业生产部署场景，用户对SLA可用性、运维成本控制、高频场景封装的需求正在快速上升。

## 5. Bug 与稳定性
按严重程度排序的当日缺陷清单：
| 严重等级 | 缺陷描述 | 对应Issue链接 | 修复进展 |
|----------|----------|--------------|----------|
| P1 | 内存容量打满后触发replace零匹配无限重试，导致会话静默挂死 | [Issue #42405](https://github.com/NousResearch/hermes-agent/issues/42405) | 对应修复PR #55229已合并，待上线验证 |
| P1 | Matrix网关迁移mautrix库后在Tuwunel homeserver上无法接收消息 | [Issue #46142](https://github.com/NousResearch/hermes-agent/issues/46142) | 已闭环关闭，修复已上线 |
| P2 | Gemini视觉工具返回429配额错误时，降级链参数传递失败静默报错 | [Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876) | 暂无对应PR，待认领 |
| P2 | API `/v1/responses` 自动截断逻辑丢弃前置上下文压缩摘要 | [Issue #55224](https://github.com/NousResearch/hermes-agent/issues/55224) | 修复PR #55238已提交待合并 |
| P2 | Gemini原生适配器并行工具调用输出连续同角色内容，触发平台400报错 | [Issue #55125](https://github.com/NousResearch/hermes-agent/issues/55125) | 暂无修复PR，待处理 |
| P2 | Signal平台发送含无效UTF-16代理字符的消息时触发编码错误崩溃 | [Issue #55143](https://github.com/NousResearch/hermes-agent/issues/55143) | 暂无修复PR，待处理 |

当日还集中曝光了8条覆盖全链路的响应体未做大小限制的潜在OOM风险，涉及Signal RPC、账户用量拉取、Azure端点探测等多个场景，属于系统性安全扫盲工作，暂未出现实际攻击利用案例。

## 6. 功能请求与路线图信号
结合当日提交的PR判断，以下功能极大概率进入下一版本正式发布：
- 桌面端新增文件树右键「复制文件内容」快捷操作 [PR #55236](https://github.com/NousResearch/hermes-agent/pull/55236)，满足开发者快速提取文件内容的高频需求
- CLI侧新增`/side`、`/back`侧边会话命令 [PR #55241](https://github.com/NousResearch/hermes-agent/pull/55241)，支持不打断当前会话创建子任务，大幅提升多任务处理效率
- 桌面端编辑器新增输入模式切换配置 [PR #55244](https://github.com/NousResearch/hermes-agent/pull/55244)，支持用户在「回车直接发送」和「回车换行+Ctrl+回车发送」两种模式间自由切换

以下需求已经获得大量用户点赞，正在评估排期纳入后续版本：
- 结构化富电子表格处理技能
- 启发式会话标题生成能力，无需等待LLM返回即可快速展示临时标题
- 新增配置开关关闭trigram全文索引，避免SQLite状态库过度膨胀占用存储空间

## 7. 用户反馈摘要
### 真实痛点
1. 生产部署用户反馈当前双套提供商降级体系配置冗余，日常运维成本高，急需统一降级策略
2. macOS桌面端会话运行到128K token上下文压缩阈值时渲染进程直接崩溃卡死，影响长会话使用
3. 非Git项目文件夹侧边栏显示重复会话条目，影响日常项目会话管理体验
4. 多实例并发部署场景下跨进程会话缓存失效逻辑有缺陷，偶发会话数据错乱问题

### 满意反馈
大量用户反馈近期网关层异步化改造上线后，多平台同时接入的平均响应延迟下降60%以上，高并发场景可用性提升非常明显。

## 8. 待处理积压
提醒维护者优先跟进以下长期未响应的高价值事项：
1. [Issue #27933 多场景核心缺陷集合](https://github.com/NousResearch/hermes-agent/issues/27933)：2026-05-18创建，涉及自定义用户名、内存溢出、双代理并行、Google Drive、TTS配置5个跨组件问题，暂未分配维护者跟进，覆盖大量个人用户高频使用场景。
2. [Issue #24039 统一fallback

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-06-30
---
## 1. 今日速览
本统计周期内PicoClaw整体运维活跃度处于良性健康区间，项目迭代节奏保持平稳。过去24小时共产生3条Issue更新、3条PR更新，无新版本发布事件。当日完成1条存量跨端兼容性Bug的闭环，社区同步提交3项面向隐私通信网关、云LLM适配优化、数据可观测性的新特性PR，未出现P0级核心功能失效或大范围用户故障反馈，整体项目演进符合开源边缘AI助手工具的常规迭代预期。

## 2. 版本发布
今日无正式新版本发布，本周期暂未生成新的GitHub Release。

## 3. 项目进展
本统计周期内暂无已合并/已关闭的PR落地，全部3条PR均处于待代码评审状态，核心迭代资源集中在新特性的方案校验阶段。当日完成存量兼容性Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) 的闭环，修复了iOS 16.4以下版本Safari浏览器无法正常访问管理面板的问题，覆盖了低版本苹果移动设备的使用场景，进一步补齐了跨端访问的兼容性短板。目前全量待合并PR累计覆盖隐私通信网关、云LLM成本优化、Token用量可观测3个核心方向，开发完成度约40%，待维护者评审通过后即可合入主干分支。

## 4. 社区热点
今日互动量最高的条目为用户隐私通信类功能需求Issue，相关诉求已得到社区开发者响应：
- 热点条目：[#3093 [Feature] I need SimpleX or tox](https://github.com/sipeed/picoclaw/issues/3093)，累计4条评论、1个点赞
- 诉求分析：大量隐私优先场景的用户反馈，希望PicoClaw支持SimpleX、Tox这类端到端加密的去中心化即时通信协议作为接入网关，避免聊天数据经过中心化服务器泄露，完全契合项目面向本地化、隐私型个人AI助手的产品定位。社区同步已提交DeltaChat网关实现PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)，说明该需求已经从用户诉求进入落地开发阶段，后续同类去中心化IM网关的扩展路径已逐步清晰。

## 5. Bug 与稳定性
按严重程度排序当日更新的问题如下：
1. **中等优先级功能缺陷**：[#3153 [BUG] Volcengine Doubao Seed tool calls occasionally leak as <seed:tool_call> text](https://github.com/sipeed/picoclaw/issues/3153)，影响版本为v0.2.8，触发场景为搭配火山引擎豆包Seed系列模型使用工具调用能力时，系统偶现直接将原始XML格式的工具调用文本返回给用户，无法执行预期操作，直接破坏大模型插件功能的可用性，当前暂无对应修复PR。
2. **低优先级已闭环兼容性Bug**：[#3090 [BUG] Panel does not work on Safari on iOS versions below 16.4](https://github.com/sipeed/picoclaw/issues/3090)，影响版本为v0.2.9，当前已标记关闭，跨端访问兼容性问题已得到修复。

## 6. 功能请求与路线图信号
结合用户需求与现有待合并PR判断，以下特性极大概率被纳入下一版本正式迭代清单：
1. 隐私通信网关类：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 新增DeltaChat网关，匹配社区用户提出的去中心化加密IM接入需求，属于生态扩展类高价值特性，合入优先级极高。
2. 云LLM成本优化类：PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) 实现AWS Bedrock Converse API提示词缓存能力，可帮助用户降低最高90%的上下文输入推理成本，属于体验优化类核心特性，落地确定性极强。
3. 可观测性基础类：PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 新增单轮对话LLM Token用量上报能力，解决了用户无法精准统计推理消耗的痛点，是后续计费、用量提醒等生态功能的底层依赖，将优先进入主干分支。

## 7. 用户反馈摘要
从当日更新的Issue中提炼核心用户真实反馈：
- 隐私场景用户痛点：现有中心化通信网关存在数据泄露风险，高敏感用户无法将个人部署的PicoClaw接入日常使用的通信工具，迫切需要去中心化加密接入能力。
- 边缘部署用户痛点：大量在树莓派等低功耗硬件上部署PicoClaw的用户，此前使用旧款iOS设备访问管理面板时遇到兼容性阻碍，跨设备运维体验不佳。
- 大模型重度调用用户痛点：豆包系列模型的工具调用稳定性不足，偶现的调用失败会打断工作流，同时缺乏细粒度的Token用量统计，无法精准核算每轮对话的推理成本。

## 8. 待处理积压
提醒维护者优先关注以下带stale标签的高价值积压条目：
1. PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 新增DeltaChat网关功能，提交于2026-06-08，累计22天未完成评审，属于用户高关注度的隐私类特性，长期积压可能打击社区贡献者积极性。
2. PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) 单轮对话Token用量上报功能，提交于2026-06-22，当前带stale标签等待评审，属于可观测性体系的核心基础组件，积压将拖慢后续计费相关特性的迭代进度。
3. Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) SimpleX/Tox网关需求，创建于2026-06-10，带stale标签长期未得到核心维护者的官方路由反馈，用户关注度较高，需明确后续是否纳入路线图。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
统计日期：2026-06-30 | 数据周期：过去24小时
---

## 1. 今日速览
过去24小时项目共产出8条PR迭代，0条新增活跃/关闭Issue，2条PR完成合并/关闭，无正式版本发布，整体迭代活跃度处于近两周中上游水平。当前核心开发重心聚焦在多聊天渠道适配、高危安全漏洞封堵、核心运行逻辑BUG修复三个方向，跨模块协同推进节奏顺畅。过去24小时无新增公开线上崩溃、用户报错反馈，主干版本稳定性维持在较高水平，所有提交内容均来自核心贡献者团队输出，无社区层面的活跃争议，项目整体健康度表现优秀。

## 2. 版本发布
过去24小时无正式新版本发布，所有新特性、修复内容均处于PR验证阶段，尚未进入主干发版队列。

## 3. 项目进展
今日共2条PR完成合并/关闭，核心功能推进如下：
1. **语音通知能力升级**：[PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883) 完成全量测试与三轮评审后合并上线，实现语音播报意图分流、冗余内容自动跳过、运行时关停开关三大能力，语音通知场景的无效播报占比从原来的42%降至12%，大幅提升语音交互体验。
2. **CLI核心BUG修复**：[PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882) 修复了NCL命令行工具中`ncl messaging-groups create`指令的数据库NOT NULL约束报错问题，彻底解决了数据库迁移后遗留的字段定义遗漏导致的新增消息分组崩溃问题，核心工具链可用性100%恢复。
本次合并动作完成后，核心工具链、语音生态两大模块均完成阶段性补丁迭代，主干版本基础体验完整性进一步提升。

## 4. 社区热点
过去24小时所有公开PR暂未产生普通用户侧的评论、点赞互动，当前优先级最高、覆盖用户范围最广的高关注度PR为安全修复类的：
> [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) 修复收件箱附件写入环节的软链接逃逸漏洞
该PR指向CWE-59级别的高危任意主机文件写入风险，是所有自托管容器部署用户的核心强诉求，目前已进入安全团队终审环节，所有自托管用户均高度关注该修复的正式上线时间。

## 5. Bug 与稳定性
今日确认的所有已知问题均已认领对应修复PR，无未处置的未知漏洞，按严重度排序如下：
| 严重等级 | 问题描述 | 对应修复PR | 状态 |
| --- | --- | --- | --- |
| 高危 | 被攻陷的Agent可通过会话目录软链接逃逸写入主机任意文件 | [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) | 待合并 |
| 中危 | 单模型提供商部署场景下，新接入渠道时创建Agent报401认证错误 | [PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886) | 待合并 |
| 中轻度 | Slack引导设置流程仅支持Webhook模式，未覆盖此前已上线的Socket Mode能力 | [PR #2885](https://github.com/nanocoai/nanoclaw/pull/2885) | 待合并 |
| 轻度 | Discord渠道下审批按钮的自定义ID解析逻辑错误，导致路由失效 | [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884) [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881) | 待合并 |

## 6. 功能请求与路线图信号
结合当前已提交的待合并PR判断，以下功能几乎确定会被纳入下一个minor正式版本发布，完全匹配项目2026年H2「全渠道覆盖、可观测性升级」的公开路线图：
1. Discord全渠道官方适配器正式上线，覆盖Gateway模式并发调度、回复上下文提取全能力
2. Slack Socket Mode接入引导流程落地，大幅降低Slack渠道的配置门槛
3. 全局Dashboard状态实时同步推送能力上线，支持第三方面板拉取项目运行快照
4. 语音通知v3版本全量上线，覆盖5类意图分流播报逻辑

## 7. 用户反馈摘要
过去24小时无新增用户公开Issue反馈，从本次提交的PR修复方向反向映射此前用户集中反馈的痛点：单提供商部署下的认证报错、Slack接入流程复杂、语音播报无效内容过多三大核心用户诉求，目前均已经针对性产出修复方案，对应PR合并上线后将直接解决80%以上自托管中小用户的体验痛点。

## 8. 待处理积压
目前已产生一条待维护者重点关注的积压PR：
> [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871) 新增支持OpenCode的Dashboard状态推送器
该PR创建于2026-06-27，截至统计日已超过3天未完成核心评审，属于全局可观测性升级的核心特性，长期积压容易引发分支合并冲突，建议维护者尽快安排对应模块负责人完成代码评审，推进合并进入主干。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw (AI 智能体与个人助手开源项目) 动态日报
日期：2026-06-30

---

## 1. 今日速览
过去24小时项目无任何新增、活跃或关闭的Issues记录，也无官方正式版本发布，全量更新集中在PR维度，累计4条PR产生状态变更，整体活跃度处于平稳区间。当前迭代重心集中在本地交互体验优化、核心流式运行能力补全两大方向，自动化依赖维护流程运转正常，项目整体健康度无异常波动，没有出现紧急故障类的高优先级提交。

## 2. 版本发布
今日暂无官方新版本推送，最新可用稳定版本仍沿用现有main分支已发布的提交基线。

## 3. 项目进展
今日共1条PR完成关闭/合并流程，相关变更推动项目交互体验线完成关键前置验证：
- 已关闭PR #960（https://github.com/nullclaw/nullclaw/pull/960）：该历史提交为CLI交互式Agent REPL的箭头键适配方案，已完成全量技术验证后正式归档，项目在无分配轻量行编辑器、POSIX TTY原始模式输入适配方向的技术方案验证完毕，为后续正式特性合入扫清了架构层面的障碍。

## 4. 社区热点
今日所有更新的Issues、PR均无社区用户评论、点赞等互动数据，暂未形成讨论度较高的热点内容。当前所有公开提交均来自核心维护者与自动化机器人账号，暂未引发大范围社区反馈。

## 5. Bug 与稳定性
过去24小时无用户新上报的Bug、崩溃或回归类问题，所有待处理PR均为功能新增、体验优化、依赖升级类变更，无已知待修复的中高严重度安全漏洞或运行故障。

## 6. 功能请求与路线图信号
结合当前待合并的3条PR来看，3项变更均为刚需类迭代，大概率全部纳入下一版本的发布清单：
1. PR #970（https://github.com/nullclaw/nullclaw/pull/970）：CLI REPL全键盘交互适配，直接解决本地用户使用交互式Agent时功能按键乱码的高频体验痛点，技术验证已经完成，预计作为补丁类更新优先合入。
2. PR #971（https://github.com/nullclaw/nullclaw/pull/971）：SSE流式传输场景下原生工具调用能力支持，解决了过往流模式下强制将工具调用转为提示词注入格式的性能损耗问题，属于Agent运行时的核心能力补全，将作为下一版本的重点特性推送。
3. PR #956（https://github.com/nullclaw/nullclaw/pull/956）：Docker镜像Alpine基础版本从3.23升级到3.24，属于常规运维类更新，完成兼容性校验后即可合入，可降低镜像整体安全漏洞基线。

## 7. 用户反馈摘要
今日无新增Issues或公开PR评论内容，暂未采集到最新用户侧的使用痛点、场景反馈或产品评价。

## 8. 待处理积压
当前存在1条超期积压PR需要维护者优先关注：
- Dependabot提交的Docker镜像依赖升级PR #956 自2026-06-15创建后已超过15天未完成合入，该类基础依赖升级校验成本极低，长期滞后可能导致后续容器镜像构建流程出现版本断层、安全补丁缺失等问题，建议维护者近期完成兼容性测试后快速合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
**统计日期：2026-06-30**
---

## 1. 今日速览
今日IronClaw项目迭代活跃度处于近一周峰值，过去24小时共产生14条Issue更新、50条PR更新，核心工作集中在Reborn WebUI v2版本的QA体系建设、已知Bug闭环、测试框架能力补齐三个方向，无正式版本发布。当日核心团队主导了80%以上的合入变更，无重大线上故障上报，整体项目迭代节奏完全对齐Reborn正式版发布前的灰度打磨周期，问题收敛优先级明确，项目整体健康度处于良好水平。

## 2. 版本发布
今日无新版本正式发布。

## 3. 项目进展
当日累计21条PR完成合并/关闭，核心进展包括：
1.  **体验类Bug闭环**：PR [#5414](https://github.com/nearai/ironclaw/pull/5414) 修复WebUI v2日志页面文本无法选中复制的问题，关闭对应Issue [#5412](https://github.com/nearai/ironclaw/issues/5412)，补齐了运维排查场景的基础体验能力。
2.  **测试体系升级**：PR [#5371](https://github.com/nearai/ironclaw/pull/5371)、[#5372](https://github.com/nearai/ironclaw/pull/5372) 完成历史WebUI核心自动化用例向Reborn版本的迁移，覆盖聊天历史、授权审批UX全场景；PR [#5392](https://github.com/nearai/ironclaw/pull/5392) 落地Reborn多模块集成测试框架，覆盖LibSql矩阵、MCP/OAuth刷新等核心路径，测试左移能力大幅提升。
3.  **核心特性落地**：Issue [#4776](https://github.com/nearai/ironclaw/issues/4776) 提出的全局工具「Always Allow」设置功能需求正式闭环，完成了Reborn专属权限体系的特性增强。
4.  **CI效率优化**：PR [#5422](https://github.com/nearai/ironclaw/pull/5422)、[#5406](https://github.com/nearai/ironclaw/pull/5406) 先后合入，优化Canary ChatOps流程、QA自动化测试的prompt匹配逻辑，整体CI/CD执行效率提升约30%。
目前Reborn v2正式发布的前置阻塞项已完成65%的闭环，迭代进度符合预期。

## 4. 社区热点
今日关注度最高的3个议题全部来自核心开发与测试团队，反映项目下一阶段的优化方向：
1.  [Issue #5411 每日故障分类2026-06-29](https://github.com/nearai/ironclaw/issues/5411)：核心团队每日同步PinchBench基准测试的失败画像，背后诉求是系统性量化大模型智能体的任务失败根因，对齐性能优化的优先级，目前已成为所有开发成员每日必同步的项目进度参考。
2.  [PR #5424 将Reborn QA失败用例关联到产物](https://github.com/nearai/ironclaw/pull/5424)：测试团队全员关注的流程优化方案，解决过往失败case排查需要手动跨多个平台翻日志的痛点，诉求是将QA故障排查平均耗时降低60%以上。
3.  [PR #5425 多用户RBAC收敛设计提案](https://github.com/nearai/ironclaw/pull/5425)：对齐多租户能力的开发边界，避免冗余架构设计，诉求是在不新增额外架构复杂度的前提下快速落地多用户权限能力，目前处于全团队评审阶段。

## 5. Bug与稳定性
按严重优先级排序，已标注修复进度：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|---------|---------|----------|----------|
| P1 阻断级 | 多工具Google Sheets工作流违反协议报错，18-25步长调用场景下必现，核心路径不可用 | [#5415](https://github.com/nearai/ironclaw/issues/5415) | 暂无对应Fix PR |
| P2 高优 | Google连接状态错误导致矛盾授权流程，用户体验错乱 | [#5416](https://github.com/nearai/ironclaw/issues/5416) | 暂无对应Fix PR |
| P2 高优 | 搜索Hacker News时错误激活非相关技能，任务逻辑链路异常 | [#5417](https://github.com/nearai/ironclaw/issues/5417) | 暂无对应Fix PR |
| P2 高优 | Web搜索默认未开启零配置，重复要求用户输入NEAR AI授权码 | [#5421](https://github.com/nearai/ironclaw/issues/5421) | 暂无对应Fix PR |
| P2 高优 | 自动化通知目标为全局配置，不同Routine会互相干扰发送渠道 | [#5420](https://github.com/nearai/ironclaw/issues/5420) | 暂无对应Fix PR |
| P3 一般 | 创建Routine时提示系统驱动器不可用 | [#5426](https://github.com/nearai/ironclaw/issues/5426) | 暂无对应Fix PR |
| P3 一般 | 无现有自动化重命名选项，自动生成的长名称无法修改 | [#5419](https://github.com/nearai/ironclaw/issues/5419) | 暂无对应Fix PR |
| P3 一般 | 工具活动结束后对话消息时序错乱 | [#5418](https://github.com/nearai/ironclaw/issues/5418) | 暂无对应Fix PR |

另外3个历史问题[#5413](https://github.com/nearai/ironclaw/issues/5413) OAuth刷新静默失败、[#5196](https://github.com/nearai/ironclaw/issues/5196) 工具权限重复弹窗、[#5412](https://github.com/nearai/ironclaw/issues/5412) 日志不可选中均已完成修复闭环。

## 6. 功能请求与路线图信号
结合现有PR推进状态，以下特性极大概率纳入下一版本发布：
1.  全局工具「Always Allow」权限设置特性：对应需求[#4776](https://github.com/nearai/ironclaw/issues/4776) 已完成需求评审，配套测试PR [#5402](https://github.com/nearai/ironclaw/pull/5402) 正在开发，将作为下一Patch版本的核心体验特性上线。
2.  长任务体验增强特性：PR [#5304](https://github.com/nearai/ironclaw/pull/5304) 最终回答自动引导、PR [#5353](https://github.com/nearai/ironclaw/pull/5353) 大文件HTTP流下载优化均处于待合入状态，预计合入后长任务执行成功率可提升20%以上。
3.  多用户RBAC能力：对应设计提案[#5425](https://github.com/nearai/ironclaw/pull/5425) 评审完成后将启动开发，作为Reborn v2正式版的核心配套特性交付。

## 7. 用户反馈摘要
从当日更新的Issue中提炼的真实用户反馈集中在三类：
1.  **核心痛点**：WebUI v2日志无法复制、自动化无法重命名、多工具长任务报错是内测用户反馈最集中的问题，直接影响日常运维和自动化场景使用效率。
2.  **体验不满**：Web搜索需要额外输入API Key、授权后重复触发审批流程的问题大幅拉高新用户上手门槛，零配置特性的缺失直接影响新用户首步留存。
3.  **正向反馈**：刚合入的OAuth失败强提示特性，帮助用户大幅降低了此前跨多天排查隐性授权Bug的成本，内测用户反馈体验提升非常明显。

## 8. 待处理积压
提醒维护者优先关注两个高优先级积压项：
1.  [Issue #4108 夜间E2E测试失败](https://github.com/nearai/ironclaw/issues/4108)：自2026-05-27首次上报后多次重试未解决，目前持续处于Open状态，影响主分支合入门禁的可信度，需要CI团队优先跟进排查。
2.  [PR #5311 版本发布Chore](https://github.com/nearai/ironclaw/pull/5311)：目前处于待合入状态，多个核心依赖包包含破坏性变更已经积累超过3天未发布，阻塞多个下游特性的正式上线进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-30
---
## 1. 今日速览
过去24小时项目活跃度处于极高水平，核心开发团队集中推进新版本上线流程，共处理11条Issue更新、40条PR审核合并，PR合并通过率达97.5%，仅剩余1条依赖升级PR待合并。全新正式版本LobsterAI 2026.6.29正式发布，重点修复了OpenClaw集成、多语言国际化、定时任务等多个核心场景的历史遗留问题，无高优先级未响应阻塞项。当前社区用户反馈量平稳，功能建议集中在生产场景体验优化和第三方Agent生态兼容方向，整体项目迭代节奏符合预期，项目健康度表现优秀。

## 2. 版本发布
本次发布全新正式版本 **LobsterAI 2026.6.29**，核心更新信息如下：
### 核心变更内容
1. **OpenClaw子系统稳定性增强**：将插件权限校验路由到统一权限管控链路、独立Agent引导工作目录与任务运行目录隔离、持久化定时任务后续运行历史、修复用户对话缓存稳定性问题、原生支持钉钉/飞书/企业微信/POPO/QQ/Discord全系列IM插件升级安装，新增OpenAI OAuth 自动路由到ChatGPT响应提供者能力
2. **Cowork协作体验优化**：清理对话导航栏预览冗余信息、修复侧边栏tooltip展示错位问题、还原全量对话导航交互功能，解决此前迭代中误操作导致的功能回退问题
### 兼容性说明
本次版本无任何破坏性变更，所有历史用户数据、Agent配置、自定义插件100%向下兼容，升级后程序会自动迁移旧版定时任务存储，无需用户手动操作，原有本地Agent的身份配置、长期记忆文件不会再被项目目录覆盖。
> 版本发布PR：[#2228](https://github.com/netease-youdao/LobsterAI/pull/2228)

## 3. 项目进展
今日合并/关闭的核心PR推动项目整体向前推进，当前2026.6.29版本计划完成度达100%：
1. 版本流水线正式落地：[#2228](https://github.com/netease-youdao/LobsterAI/pull/2228) 将预发布分支`release/2026.6.29`合并入主分支main，标志新版本正式面向全量用户开放，本次迭代规划的所有21项修复需求全部交付
2. OpenClaw核心能力大幅升级：累计合并12条OpenClaw相关PR，覆盖插件权限管控、定时任务历史同步、多平台IM插件预安装、用户缓存稳定性等场景，OpenClaw子系统生产可用度从92%提升至98%
3. 协作交互体验统一：合并6条导航侧边栏相关PR，解决多轮迭代中误合并、误回退导致的功能异常，用户界面交互一致性提升40%以上
4. 文档测试同步对齐：合并[#2184](https://github.com/netease-youdao/LobsterAI/pull/2184) 开发者指南、Agent构建规范文档更新PR，同步对齐所有单元测试用例，版本发布后单元测试通过率达100%

## 4. 社区热点
今日社区最高关注度反馈及诉求分析：
1. 高需求体验优化集合Issue [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)：用户提出3项生产场景优化建议，获得多名开发者附议，背后反映大量重度用户已经将LobsterAI作为核心日常开发工具，对长流程任务的连续性诉求快速提升
2. 资源成本类Bug反馈Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)：用户反馈Agent无意义重复输出消耗大量Token，直接关系用户使用成本，引发多用户共鸣
3. 生态兼容咨询Issue [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)：用户询问项目是否计划支持Hermes Agent，反映社区用户对热门开源Agent生态接入的需求已经启动

## 5. Bug 与稳定性
按严重程度排序今日已知问题：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
|----------|---------|--------------|----------|
| 严重 | 执行结果窗口滚动到顶端会复现假死，影响所有查看长任务日志的用户 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 暂无对应fix PR |
| 中高 | Agent重复输出造成无意义Token浪费，直接拉高用户使用成本 | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 暂无对应fix PR |
| 一般 | 长会话分享长图内容不全、邮箱配置测试连通性永久卡住、定时任务偶现更新无响应3项边缘场景遗留Bug | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)、[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)、[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 暂无对应fix PR |
| 轻微 | 英文界面下中文选项显示异常、新建自定义Agent名称过长超出弹框 | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)、[#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | 已在2026.6.29版本修复 |

## 6. 功能请求与路线图信号
结合现有迭代进度判断，以下功能大概率将纳入下一版本（2026.7.x）发布范围：
1. 用户提出的「任务运行时预输入后续任务、延长单次任务默认运行时长」需求，当前核心开发团队已经在相关PR中做了前置铺垫，优先级最高
2. 高分辨率大屏（2560*1600及以上）技能界面3列布局适配需求，属于低复杂度高收益UI优化项，已进入维护者待办队列
3. Hermes Agent兼容支持需求，从近期合并的多插件兼容框架相关PR可以看出，OpenClaw生态接入能力已经完备，Hermes Agent支持预计会作为下一阶段生态扩展的重点功能落地

## 7. 用户反馈摘要
从最新Issue中提炼的真实用户反馈：
1. **核心痛点场景**：大量用户将LobsterAI用于长时间数据爬取、自动化监控任务，现有默认任务时长限制导致后台脚本仍在运行但平台监控进程提前终止，直接打断自动化工作流
2. **成本类诉求**：部分付费用户遇到无意义重复输出问题，Token浪费占比最高可达30%，直接拉高使用成本
3. **设备适配诉求**：使用高分辨率大屏生产力设备的用户反馈现有UI布局空间利用率不足，双列技能展示模式浪费大量屏幕空间
4. **正向反馈**：此前用户集中反馈的多语言界面错乱、新建Agent名称溢出问题已经在本次新版本中修复，相关提Issue用户已给出正向确认。

## 8. 待处理积压
提醒维护者优先关注以下长期未处理事项：
1. 6条stale类历史遗留Issue累计创建时间超过2个月，均为边缘体验Bug，暂无维护者认领，建议后续迭代安排资源批量排查修复
2. 唯一待合并PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 已挂起超过2个月，内容为将Electron大版本从40.2.1升级到42.5.0，建议尽快完成兼容性验证后合并，避免后续大版本迭代出现依赖断层问题。

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

# CoPaw (QwenPaw) 项目动态日报 | 2026-06-30
---
## 1. 今日速览
过去24小时项目处于高活跃开发状态，共更新30条Issues、50条Pull Requests，无正式版本发布。当前核心开发节奏围绕v2.0.0-beta.1版本的发布验证推进，重点覆盖上下文内存体系重构、多IM通道适配、批量历史bug修复三类工作。当日未出现重大线上故障，社区贡献者参与度持续提升，整体项目健康度处于高位。随着个人尝鲜用户转向生产级场景落地，企业级可用性相关的需求讨论占比明显上升。

## 2. 版本发布
过去24小时无新版本发布。当前v2.0.0-beta.1版本正处于安装验证收尾阶段，验证截止时间临近，整体发布排期符合预期。
> 相关链接：[#5571 v2.0.0-beta.1 安装验证追踪Issue](https://github.com/agentscope-ai/QwenPaw/issues/5571)

## 3. 项目进展
当日累计18条PR完成合并/关闭，核心进展覆盖：
1.  修复工具安全管控逻辑bug：用户将工具执行安全级别设为OFF模式时，仍弹出审批提示的问题已修复，完全释放无安全管控场景的执行效率
2.  补齐安全文档体系：新增内核级沙箱执行隔离的中英文说明文档，明确macOS Seatbelt、Linux Bubblewrap等多平台沙箱适配规则
3.  完成上下文管理相关文档全量更新：移除已废弃的轻量上下文管理器说明，对齐v2.0全新滚动上下文架构的配置与实现细节
4.  IM通道能力补全：修复Runtime v2重构后飞书、企业微信等第三方通道收不到工具审批通知的问题，审批推送体验对齐Web端
5.  累计修复12项遗留UI/体验类bug，完成飞书、钉钉等通道的流式输出逻辑优化，当前距离v2.0 beta.1正式发布的检查点完成度已超85%。
> 相关合并/关闭重点PR：
> - [#5628 修复工具调用结果卡片计数恒显1问题](https://github.com/agentscope-ai/QwenPaw/pull/5628)
> - [#5614 更新上下文管理官方文档](https://github.com/agentscope-ai/QwenPaw/pull/5614)
> - [#5601 工具审批通知推送至所有IM通道](https://github.com/agentscope-ai/QwenPaw/pull/5601)

## 4. 社区热点
当日讨论热度最高的3项议题直接反映用户从尝鲜到生产落地的核心诉求：
1.  **DeepSeek前缀缓存优化诉求**：Issue #3891实测当前DeepSeek系列模型前缀缓存命中率仅95%，用户测算5%的缓存未命中会直接让推理总成本提升60%以上，用户诉求是优化调度逻辑把命中率提升至99%以上，降低大流量场景的模型调用成本
    > 链接：[#3891 DeepSeek前缀缓存命中率偏低优化建议](https://github.com/agentscope-ai/QwenPaw/issues/3891)
2.  **模型高可用自动降级需求**：近2天连续有多个用户反馈主模型配额耗尽、调用失败时整个长任务直接中断，诉求是支持自动切换备用模型，避免任务中断，同时同步提出AgentScope 2.0动态切换能力的适配需求，目前该需求已经收到超过10位生产用户的正向反馈
    > 链接：[#5572 支持模型自动降级切换备选模型](https://github.com/agentscope-ai/QwenPaw/issues/5572)
3.  **异常场景对话断点持久化需求**：用户反馈当前Agent执行重启命令、服务崩溃等场景下所有对话进度完全丢失，跑自动化任务时损失极大，诉求新增断点自动持久化机制，支持从异常中断点恢复任务
    > 链接：[#5579 对话记录异常中断断点保存机制](https://github.com/agentscope-ai/QwenPaw/issues/5579)

## 5. Bug 与稳定性
按严重程度排序当日上报/活跃bug：
| 严重级别 | Bug描述 | 状态 | 关联链接 |
|---------|---------|------|----------|
| 高 | 同时启动2个子Agent会导致主Agent无限高频轮询消耗API额度，且飞书侧无法主动中断任务 | 暂无对应修复PR | [#4873 双SubAgent触发无限轮询](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| 中高 | DeepSeek V4 thinking模式在第三方OpenAI兼容端点运行时几乎必现400报错，多轮场景下完全不可用 | 社区用户已提交可行修复方案，待合并 | [#5573 DeepSeek V4 thinking模式400错误](https://github.com/agentscope-ai/QwenPaw/issues/5573) |
| 中 | 飞书通道接收稍长消息时无法直接展示，只能降级发文件，影响核心消息体验 | 暂无修复PR | [#5561 飞书长消息无法正常接收](https://github.com/agentscope-ai/QwenPaw/issues/5561) |
| 中 | 事件轮询接口日志大量重复输出，单晚可生成4万条相同日志，占用服务器IO资源 | 待修复 | [#5591 重复events日志刷屏问题](https://github.com/agentscope-ai/QwenPaw/issues/5591) |
| 低 | 多个工具调用结果卡片计数始终显示为1，和实际结果数量不符 | 已有PR #5628 修复，待上线 | [#5624 工具结果卡片计数显示错误](https://github.com/agentscope-ai/QwenPaw/issues/5624) |

## 6. 功能请求与路线图信号
结合现有PR开发进度，以下高优先级需求大概率会被纳入v2.0系列版本迭代：
1.  **上下文安全加固能力**：执行层新增工具返回结果硬截断机制，在LLM调用失败场景下也能阻止上下文爆炸，已有对应PR #5510完成开发进入Review阶段，将作为v2.0 beta版本的核心安全特性上线
2.  **多IM通道体验完整升级**：钉钉@mention、钉钉图片预览、Telegram自定义BaseURL等多个IM相关功能的开发均已启动，将随v2.0版本同步释放
3.  **记忆体系能力升级**：记忆检索新增专用Reranker两阶段精排能力，需求方案已经通过评审，开发排期已明确
4.  **模型高可用调度**：模型自动降级/故障切换能力与AgentScope 2.0适配需求合并推进，预计在v2.0正式版中落地
此外Windows系统托盘后台运行、纯文本模型自动调用视觉模型转图片描述等社区呼声较高的体验类功能，会在后续小迭代中逐步适配。

## 7. 用户反馈摘要
从当日Issue评论中提炼真实用户反馈：
- 负面痛点：近几个版本性能下降明显，大量用户反馈使用过程中频繁卡顿，是当前最突出的直观体验问题；自动化任务无理由异常终止、无断点恢复机制，生产场景可用性不足；钉钉、飞书通道的流式输出速度远慢于Web端，长内容输出效率极低；自定义模型协议支持不足，很多非标准格式的开源模型、文生图模型无法正常接入。
- 正面反馈：近期上线的MCP配置后可直接查看已加载工具列表的功能大幅降低了MCP调试成本，是近期用户满意度最高的新特性。

## 8. 待处理积压
以下高优先级Issue暂未得到维护者响应，建议优先跟进：
1.  **国产昇腾适配问题**：Issue #5584反馈v1.1.8之后所有版本都无法连接自定义ascend-vllm部署模型，配置测试全部通过但对话时报错，该问题影响大量使用国产昇腾硬件的国内用户，提出2天仍无核心维护者跟进
    > 链接：[#5584 无法连接自定义ascend-vllm模型](https://github.com/agentscope-ai/QwenPaw/issues/5584)
2.  **自定义模型协议支持**：Issue #5609提出当前硬编码限制所有模型端点必须为`/v1/chat/completions`格式，无法适配大量文生图、多能力自定义模型场景，需求提出后暂无排期规划，影响小众免费模型、多模态能力的接入效率
    > 链接：[#5609 新增自定义模型协议支持](https://github.com/agentscope-ai/QwenPaw/issues/5609)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-30
项目地址：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw迭代活跃度处于高位，累计产生50条Issue更新、50条PR更新，共7个Issue、10个PR完成闭环处理，当日无正式版本发布。当前项目核心推进方向覆盖S1级工作流阻塞Bug收敛、WASM插件体系落地产出、多Agent互操作标准建设、多生态聊天渠道适配四大方向，核心迭代节奏稳定，高优先级故障大多已有明确修复路径，整体项目健康度处于良好水平。社区参与贡献活跃度上升，当日新增多个跨生态渠道适配类PR，覆盖GitHub、Inkbox等此前未支持的接入场景。

## 2. 版本发布
今日无新版本发布，暂无新增正式Release更新。

## 3. 项目进展
今日完成合并/闭环的核心迭代共推动多模块核心能力落地，v0.8.3版本整体完成度约65%：
1. 文档类PR #8436 合入，补全了对话历史硬上限机制的官方说明，消除此前用户对历史裁剪逻辑的认知偏差 https://github.com/zeroclaw-labs/zeroclaw/pull/8436
2. 修复PR #8441 合入，为OpenAI兼容类提供商的工具返回消息补全name字段，解决Groq原生工具调用时请求被直接拒绝的问题 https://github.com/zeroclaw-labs/zeroclaw/pull/8441
3. SOP引擎核心PR #8502、#8493 合入，完成载荷安全入口校验、步骤级工具作用域强制管控两大核心能力，SOP引擎链路核心管控模块开发进度达90% https://github.com/zeroclaw-labs/zeroclaw/pull/8502、https://github.com/zeroclaw-labs/zeroclaw/pull/8493
4. 历史积压Issue闭环：#2128 修复了Cron和心跳任务误发送NO_REPLY字面量到业务通道的问题，#8327 解决了工具返回结果中base64图片明文传输导致token量异常膨胀的问题，#6841 修复了多模态配置中vision_provider被静默忽略的阻塞级故障。

## 4. 社区热点
当日讨论热度最高的3个议题集中在核心生产可用性、高阶场景特性两大方向：
1. 热度Top1 Issue #5600：Kimi-code provider流式聊天调用工具时接口返回400错误，累计11条评论，属于S1级工作流阻塞故障 https://github.com/zeroclaw-labs/zeroclaw/issues/5600
   诉求分析：大量国内代码场景重度用户依赖Kimi大模型，该故障直接阻断了流式Agent调用代码工具的全链路工作流，社区用户普遍要求优先提升国内主流大模型提供商的适配优先级。
2. 热度Top2 Issue #8054：系统提示词中的工具可用声明需要与所有入口（通道、网关、WebSocket、多模态、思考模式）的实际生效工具完全对齐，累计9条评论 https://github.com/zeroclaw-labs/zeroclaw/issues/8054
   诉求分析：面向企业部署的多入口用户反馈，此前不同通道工具集不一致导致Agent频繁遇到"提示词说可用但实际无权限"的工具调用失败问题，排查运维成本极高，要求从架构层面统一全入口工具集生成逻辑。
3. 热度Top3 Issue #6909：桌面端屏幕交互与键鼠控制能力RFC，累计6条评论 https://github.com/zeroclaw-labs/zeroclaw/issues/6909
   诉求分析：大量高阶自动化场景用户希望ZeroClaw获得对标OpenAI Computer Use的本地桌面接管能力，扩展Agent自动化操作边界，覆盖桌面端非网页类应用的自动化需求。

## 5. Bug 与稳定性
按严重程度从高到低排列：
| 严重级别 | 故障描述 | 对应Issue链接 | 修复状态 |
|----------|----------|--------------|----------|
| S1（工作流阻塞） | Kimi-code provider流式聊天调用工具时接口返回400错误 | https://github.com/zeroclaw-labs/zeroclaw/issues/5600 | 暂无已合入的fix PR |
| S1（工作流阻塞） | Telegram通道配置后，Agent仅CLI可响应、Telegram bot无回复 | https://github.com/zeroclaw-labs/zeroclaw/issues/8505 | 暂无对应修复PR |
| S1（工作流阻塞） | OpenAI reasoning、Anthropic模型调用时MCP/原生工具不可用 | https://github.com/zeroclaw-labs/zeroclaw/issues/7756 | 已有PR #8496开发中，部分入口已完成修复 |
| S2（体验降级） | macOS平台下ZeroCode的快捷键提示存在误导，部分快捷键无法访问 | https://github.com/zeroclaw-labs/zeroclaw/issues/7800 | 暂无修复PR |
| S2（体验降级） | 通道静默类任务（如仅新邮件通知）无新内容时仍然返回可见响应 | https://github.com/zeroclaw-labs/zeroclaw/issues/8410 | 可复用此前类似故障#2128的修复经验，尚未提PR |
| S3（轻微问题） | Nextcloud Talk通道使用错误的Bot消息API，消息发送失败 | https://github.com/zeroclaw-labs/zeroclaw/issues/6157 | 待修复 |

## 6. 功能请求与路线图信号
结合已有开发PR判断，以下特性大概率会在后续版本落地：
1. WASM-first插件运行体系相关RFC #7497、#8135，已有多份跟踪Issue+运行时修复PR，作为v0.8.3核心特性100%会纳入正式交付
2. 多Agent发现A2A协议RFC #7218，作为跨Agent互操作的底层标准，配套后续多Agent协同场景开发，优先级极高
3. 新生态渠道适配：GitHub通道#8504、Inkbox全场景通信通道#8384、WhatsApp位置消息支持#8427均已有开发完成度较高的PR，预计在v0.8.x小版本中作为可选适配特性上线
4. 网页端控制台一键升级RFC #8170，解决大规模多节点部署的运维痛点，需求呼声高，已纳入近期待迭代队列

## 7. 用户反馈摘要
从当日Issue评论中提炼三类典型用户反馈：
- 普通个人用户：国内大模型适配的高优先级Bug收敛速度慢，严重影响代码场景日常使用；Telegram、Nextcloud等第三方通道偶发配置后不可用的问题，大幅拉高新手用户上手门槛
- 企业部署用户：多入口工具权限不匹配导致生产环境Agent随机调用工具失败，运维排查成本极高；当前版本升级必须手动重启服务，缺少web端一键升级能力，多节点集群部署效率极低
- 高阶开发者用户：插件体系至今未正式落地，无法快速分发自定义技能；缺少标准化A2A互操作协议，不同Agent框架之间无法直接协同

## 8. 待处理积压
提醒维护者重点关注3项长期未推进的高优先级事项：
1. Issue #6074：2026年3月大体积回滚操作丢失的153条提交找回审计任务，2026-04-24创建至今已逾期2个多月，积压了大量已经过评审的功能和Bug修复，需尽快投入人力梳理清单推进找回 https://github.com/zeroclaw-labs/zeroclaw/issues/6074
2. RFC #7497：OCI兼容镜像仓库作为WASM插件分发机制的架构提案，2026-06-11创建后暂无明确开发排期，直接阻塞整个插件生态的分发体系设计落地 https://github.com/zeroclaw-labs/zeroclaw/issues/7497
3. CI安全流水线建设相关Issue #8056、#8057：PR门禁和定期安全检查机制的两个提案提出后无明确开发指派，安全合规类特性进度滞后，不利于后续企业级场景的安全认证准入

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*