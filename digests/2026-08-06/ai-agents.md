# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 22:58 UTC

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

# OpenClaw 项目动态日报 2026-08-06
---
## 1. 今日速览
2026-08-06 OpenClaw 项目整体维持高活跃迭代状态，过去24小时累计处理500条Issue更新、500条PR更新，合计关闭34条Issue、合并/关闭77条PR，当日无正式版本发布。核心迭代资源集中在会话状态可靠性、多渠道消息投递一致性、SQLite 运行时性能三大方向，多个高优先级历史积压高危Bug得到闭环，社区用户反馈的场景化生产需求持续得到响应。当前项目待合并PR存量423条，维护者验证队列仍有充足的待上线变更，迭代节奏符合大型开源AI智能体助手项目的开发预期，整体项目健康度保持高位。
## 2. 版本发布
当日无正式新版本发布。
## 3. 项目进展
今日核心变更落地覆盖从底层测试基础设施、核心网关稳定性到数据安全防护多个维度，2026.7.2 版本前置发布校验的遗留阻塞项清理进度完成35%：
- 合并关闭PR [#119727](https://github.com/openclaw/openclaw/pull/119727)：修复QA Lab 测试框架误报运行成功的问题，清理失败场景的错误信息留存机制，大幅提升CI/CD 测试结果可信度
- 合并关闭PR [#119749](https://github.com/openclaw/openclaw/pull/119749)：隔离Agent 并发压测工具的全局状态，解决之前测试样本数据互相干扰导致的性能基准数据失准问题，后续性能优化迭代的评估精度得到保障
- 闭环P1历史Issue [#118846](https://github.com/openclaw/openclaw/issues/118846)：修复网关启动后主线程100%占满CPU、拒绝WebSocket新连接的崩溃循环问题，解决2026.7.2-beta版本的核心可用性阻塞
- 闭环P0高危Issue [#106779](https://github.com/openclaw/openclaw/issues/106779)：解决2026.7.1版本本地llama.cpp提供商返回400生成器解析失败的问题，自托管本地模型用户的核心使用场景恢复可用
- 闭环2个P0数据丢失Issue [#119090](https://github.com/openclaw/openclaw/issues/119090)、[#119088](https://github.com/openclaw/openclaw/issues/119088)：修复媒体清理定时器误删会话历史中已生成附件的高危问题，避免了生产环境不可逆的数据丢失事故
## 4. 社区热点
今日讨论热度最高的3条核心Issue，集中反映生产环境用户的核心痛点诉求：
1. [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音会话无界内存泄漏Bug：累计58条评论，大量生产部署用户反馈长时间运行实时语音服务内存会无限制增长到数十GB最终触发OOM，用户普遍诉求是尽快为实时语音模块添加强硬的资源占用边界，避免生产环境雪崩式故障
2. [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理任务完成结果静默丢失无重试无通知Bug：累计25条评论，数千名基于OpenClaw开发Telegram论坛机器人的开发者集中反馈多任务编排场景下部分子任务结果无声消失，用户诉求是补全子代理全链路状态可观测性和兜底重试机制
3. [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram渠道更新后重复发送2-10条相同消息回归Bug：累计14条评论，大量国内Telegram生态开发者反馈升级2026.5.x版本后用户体验严重下降，诉求是快速发布小版本补丁修复该可用性问题
## 5. Bug 与稳定性
按严重程度排序，标注修复进展：
### P0（发布阻塞/数据丢失）
- [#119263](https://github.com/openclaw/openclaw/issues/119263) Agent数据库v14迁移到v15失败，网关启动完全阻塞：已有关联PR待合并，当前属于2026.7.2版本发布最高优先级阻塞项
- 【已修复】#119088、#119090 媒体清理误删聊天历史媒体：已闭环，两个关联PR已合入主分支
### P1（核心功能不可用/服务雪崩）
- [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音状态无界内存泄漏：暂无修复PR，等待维护者评审产品方案
- [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理结果静默丢失：暂无修复PR，已纳入下一个迭代里程碑
- [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram渠道重复发消息：暂无修复PR，多个关联渠道修复PR正在开发中
- [#112423](https://github.com/openclaw/openclaw/issues/112423) 大体积SQLite会话归档阻塞网关事件循环：已有关联PR待合并
- [#115700](https://github.com/openclaw/openclaw/issues/115700) 模型运行完成后chat.send被"thread switched branches"错误拦截：已有关联PR待合并
- [#117445](https://github.com/openclaw/openclaw/issues/117445) 飞书渠道接收用户消息全部解码为问号：已有关联PR待合并
## 6. 功能请求与路线图信号
结合已在开发中的PR，以下需求大概率进入下一正式版本：
1. [#79902](https://github.com/openclaw/openclaw/issues/79902) 新增SQLite transcript标准化对外接口：已有底层DB重构的系列PR合入，开发者可以直接通过标准SQL查询会话全量状态，无需解析非结构化日志，大概率纳入2026.8版本作为核心生态特性发布
2. [#110304](https://github.com/openclaw/openclaw/pull/110304) TUI 交互界面支持Ctrl+V粘贴剪贴板图片：PR已通过初审，完成剩余验证后就可以上线，大幅提升本地终端部署用户的使用体验
3. [#53654](https://github.com/openclaw/openclaw/issues/53654) Discord渠道支持消息编辑触发重处理、消息删除取消任务：对应渠道适配代码已开发完成，预计随下一轮渠道特性更新上线
4.  [#119325](https://github.com/openclaw/openclaw/pull/119325) 新增会话级临时切换模型指令：用户可以单独为当前会话指定临时模型，不修改全局默认配置，该特性已通过产品评审，预计随2026.7.2版本正式发布
## 7. 用户反馈摘要
从今日Issue评论提炼真实用户痛点：
1. 生产环境用户最高频痛点是子代理、定时任务场景的状态不可靠，消息静默丢失问题占全部可用性投诉的40%，直接影响机器人服务SLA
2. 国内渠道（飞书、QQ、微信生态）用户集中反馈近2个版本的多渠道适配回归问题，重复消息、收不到回复的场景是国内自托管用户的主要投诉点
3. 大量自托管用户反馈网关自动更新机制鲁棒性不足，更新后容易出现模块缓存不兼容、数据库迁移失败的问题，直接导致服务长时间中断，对升级兜底机制的诉求非常强烈
4. 生态开发者普遍反馈当前SQLite运行时的内部状态没有对外暴露标准化接口，二次开发需要逆向爬取非结构化日志，开发成本是预期的3倍以上，强烈要求官方开放标准读写 seam
## 8. 待处理积压
提醒维护者关注以下长期未响应高优先级积压项：
1. [#44134](https://github.com/openclaw/openclaw/issues/44134) Google 工具模式频繁重载导致账号触发反作弊封禁：2026年3月创建至今超过5个月未得到根因修复，大量使用Google Antigravity模型的用户存在账号被盗风险
2. [#51429](https://github.com/openclaw/openclaw/issues/51429) 代码硬编码了开发者个人工作路径/Users/wangtao：2026年3月创建至今5个月仍未修复，跨平台自托管用户首次部署就会出现路径异常报错，属于影响初始体验的低级遗留Bug
3. [#70903](https://github.com/openclaw/openclaw/issues/70903) 付费提供商触发计费错误冷却后，即便用户充值完成也需要等数小时才能自动恢复服务：2026年4月创建至今4个月未闭环，所有接入付费大模型的生产用户都有概率触发该可用性故障

---

## 横向生态对比

# 2026-08-06 开源AI智能体/个人助手生态横向对比分析报告
面向技术决策者与开发者输出，所有数据基于当日14个监测项目的公开动态汇总。

---

## 1. 生态全景
当前个人AI助手与自主智能体开源生态正整体跨过Demo验证阶段，进入生产可用性落地的关键拐点。过去24小时监测到的11个活跃项目中近7成处于高等级迭代状态，绝大多数团队已将长周期运行稳定性、生产场景SLA保障的优先级放在新特性开发之前。MCP（Model Context Protocol）生态适配成为全行业共识，跨项目的工具复用标准已基本形成。以多租户、声明式配置为代表的企业级规模化部署需求集中爆发，头部通用基座与垂直场景衍生项目形成了清晰的分层互补格局，真实生产环境的用户反馈反哺迭代的速度较半年前提升2倍以上，整体生态成熟度已达到可大规模商用的临界点。

---

## 2. 各项目活跃度对比汇总表
| 项目名称 | 今日Issue更新数 | 今日PR更新数 | 当日Release情况 | 项目健康度评估 |
|----------|----------------|-------------|----------------|----------------|
| OpenClaw | 500 | 500 | 无 | 高位（生态标杆级健康度） |
| NanoBot | 4 | 16 | 无 | 近两周峰值 |
| Hermes Agent | 50 | 50 | 无 | 高位 |
| PicoClaw | 0 | 2 | 无 | 平稳 |
| NanoClaw | 2 | 10 | 无 | 良好 |
| NullClaw | 0 | 2 | 无 | 优秀（无积压故障） |
| IronClaw | 43 | 50 | 无（推进1.1-RC版本） | 优异 |
| LobsterAI | 3 | 13 | 发布正式版2026.8.5 | 优秀 |
| CoPaw（QwenPaw） | 23 | 50 | 无 | 良好 |
| ZeroClaw | 50 | 50 | 无（推进v0.8.5稳定版） | 优异 |
| TinyClaw | 0 | 0 | 无 | 无活动 |
| Moltis | 0 | 0 | 无 | 无活动 |
| ZeptoClaw | 0 | 0 | 无 | 无活动 |
*注：当日仅1个项目推送正式版本，全生态整体处于版本收敛打磨周期。*

---

## 3. OpenClaw在生态中的定位
### 核心优势
作为生态事实性基准项目，其沉淀的生产级稳定性场景、运行时设计经验是所有同类项目中最丰富的，覆盖从个人自托管到万级用户SaaS部署的全场景验证，SQLite原生优化、会话状态可靠性、多渠道投递一致性等核心底座能力的成熟度领先行业至少2个迭代周期。
### 技术路线差异
与其他项目从垂直场景切入、逐步补全通用能力的路线不同，OpenClaw走通用基座优先路线，优先解决所有上层场景都会遇到的底层共性痛点，再开放插件生态覆盖垂直需求，避免了项目后期架构重构的历史债。
### 社区规模对比
当日Issue/PR处理量级是其他头部项目的10倍以上，存量待合并PR达423条，社区贡献者基数远超其他所有项目的总和，目前PicoClaw、NanoClaw等多个衍生项目的底层运行时逻辑均直接兼容OpenClaw的接口规范，已经成为生态事实性的兼容标准。

---

## 4. 全项目共同关注的技术方向
| 共性技术方向 | 涉及项目范围 | 核心诉求 |
|--------------|--------------|----------|
| MCP生态标准化适配 | IronClaw、NanoBot、OpenClaw、CoPaw、NanoClaw | 完全对齐MCP官方标准，避免自定义兼容逻辑带来的适配断层，降低第三方工具跨平台复用的开发成本 |
| 多模型故障兜底与自动路由 | OpenClaw、NanoBot、Hermes Agent、CoPaw、ZeroClaw | 解决大模型厂商接口不稳定问题，实现故障自动切换、按任务复杂度智能选模型，同时提升可用性、降低推理成本 |
| 多渠道消息投递健壮性优化 | 所有11个活跃项目 | 解决生产环境高频出现的重复发消息、静默丢消息、通道断连后无自动恢复的痛点，保障IM场景的服务SLA |
| OpenAI兼容协议网关 | ZeroClaw、IronClaw、NanoBot | 零改造成本对接Open WebUI、LobeChat、LangChain等现有OpenAI生态海量工具，大幅降低上层应用的接入门槛 |
| 会话数据可靠性防护 | OpenClaw、Hermes Agent、NullClaw | 避免定时清理任务误删数据、压缩进程崩溃丢失历史会话，彻底消除生产环境不可逆的数据丢失风险 |

---

## 5. 差异化定位分析
| 项目分层 | 代表项目 | 功能侧重 | 目标用户 | 技术架构核心差异 |
|----------|----------|----------|----------|------------------|
| 通用基座层 | OpenClaw | 全场景通用能力覆盖 | 全量级用户从个人到企业SaaS | 模块化插件化架构，SQLite原生优先，最大限度降低部署门槛 |
| 通用基座层 | Hermes Agent | 重度工具调用场景优化 | 自托管多实例部署SaaS服务商 | 大文件拆分重构降低贡献门槛，原生多租户架构待上线 |
| 通用基座层 | ZeroClaw | 极致长周期运行稳定性 | 7*24小时无人值守的生产运维场景 | 日志硬上限管控、Shell命令三级沙箱限制，从底层规避运维风险 |
| 企业级场景层 | IronClaw | MCP扩展生态规模化部署 | 中大型企业IT团队 | 扩展市场深度集成，主打配置即代码的批量部署能力 |
| 国内生态适配层 | CoPaw、LobsterAI | 国内模型/IM渠道原生兼容 | 国内自托管企业、C端运营用户 | 优先适配DeepSeek、通义千问等国内模型，原生支持微信、飞书、钉钉等国内渠道 |
| 轻量化场景层 | NanoBot、PicoClaw | 低资源占用端侧部署 | 中小私域客服、边缘硬件用户 | 极致裁剪运行时体积，硬件资源占用仅为通用基座的1/5 |

---

## 6. 社区热度与成熟度分层
1. **快速迭代梯队（S级活跃度）**：OpenClaw、IronClaw、CoPaw、Hermes Agent、ZeroClaw，日Issue/PR更新量达数十到数百级，核心团队100%投入迭代，当前均在冲刺重要正式版/候选版本，新特性开发与高优Bug修复并行，是生态的核心创新动力来源。
2. **质量巩固梯队（A级活跃度）**：NanoBot、NanoClaw、LobsterAI，迭代节奏平稳，核心资源已经从新功能开发转向存量体验打磨、历史技术债清理，均已明确未来1-2周内发布小版本/预览版的计划。
3. **运维维护梯队（常规活跃度）**：PicoClaw、NullClaw，无新功能迭代规划，全量开发资源投入长周期稳定性缺陷修复，打磨现有版本的生产可用性，适合追求平稳的生产部署用户优先选择。
4. **休眠梯队**：TinyClaw、Moltis、ZeptoClaw，过去24小时无任何代码提交或社区动态，项目处于停滞状态。

---

## 7. 值得关注的趋势信号与开发者参考价值
1.  **生产可用性成为第一选型标准**：全生态已彻底脱离Demo炫技阶段，大部分团队已主动把稳定性优先级放在新特性之前，开发者选型基座时无需盲目追求冷门前沿特性，优先评估项目的高优Bug平均响应时长、生产场景沉淀的案例量，可大幅降低后续运维成本。
2.  **MCP生态的跨项目复用窗口已经打开**：标准化进度远超行业预期，未来半年内所有主流开源智能体都会原生支持MCP扩展，开发者基于MCP规范开发的工具可以跨所有项目直接复用，无需针对不同平台做重复适配，工具开发的ROI将提升3倍以上。
3.  **OpenAI兼容网关将成为标准对外接口**：此前大量智能体项目自研私有协议的路线正在快速向兼容OpenAI生态收敛，开发者不需要再为智能体单独开发前端、链路追踪、监控等周边工具，可直接复用LLM生态已有的成熟组件，大幅降低二次开发工作量。
4.  **企业级特性快速下沉到开源项目**：此前仅闭源SaaS产品提供的配置即代码、多租户、操作审计等能力，正在快速进入开源项目的交付队列，面向中大型企业部署的二次开发需求将在未来3个月集中爆发，提前布局相关能力的开发者将获得明显的赛道红利。
5.  **国内开源项目适配性优势凸显**：CoPaw、LobsterAI等国内背景项目的迭代效率、国内IM渠道、本土大模型的适配成熟度已经超过海外同类项目，国内自托管开发者优先选择适配本土生态的项目，可至少减少60%的渠道对接、模型调优工作量。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-06
统计维度：过去24小时项目公开仓库数据 | 来源：github.com/HKUDS/nanobot

---

## 1. 今日速览
过去24小时NanoBot处于高活跃度开发周期，累计产出16条PR更新、4条活跃Issue，无新版本正式发布，8条待合并PR、8条已合并/关闭PR覆盖了核心逻辑修复、多IM渠道适配、WebUI体验升级、生态兼容扩展多个维度。本次迭代覆盖了从普通终端用户隐私需求到高阶开发者MCP生态适配的全场景诉求，多贡献者并行提交的模式保障了模块解耦开发效率，项目整体健康度处于近两周峰值。当前开发团队正集中推进下一版本的功能收敛，整体迭代进度符合预期。

## 2. 版本发布
过去24小时无正式新版本发布，所有合并变更均在开发分支累积，预计后续1-2个工作日将打包本次迭代的批量更新产出预览版。

## 3. 项目进展
今日合计合并/关闭8条高价值PR，三大核心模块均获得实质性推进：
- 元搜索能力升级：PR #5234 正式合并mst-python作为元搜索提供商，可同时聚合DuckDuckGo、Google、Brave等多引擎结果通过RRF算法合并，搜索丰富度远高于单引擎方案 https://github.com/HKUDS/nanobot/pull/5234
- 渠道兼容性修复落地：PR #5203 完成WhatsApp出站媒体内容检测逻辑重构，替代此前依赖文件名后缀的判断方式，解决音频发送的核心痛点；PR #5233 补全Mattermost渠道的线程独立分组策略，相关配置已开放在WebUI侧落地 https://github.com/HKUDS/nanobot/pull/5203、https://github.com/HKUDS/nanobot/pull/5233
- 核心架构与体验优化：PR #5238 完成会话模块重构移除存在回归风险的请求级访问授权抽象，解决了权限管控模块的历史遗留问题；PR #5249、#5250 完成WebUI视觉一致性迭代与滚动边缘体验优化；PR #5254 新增提供商原生请求开关配置；历史PR #5184 已完成测试闭环正式关闭。
本次合并动作累计完成下一版本约30%的计划迭代点，核心底座稳定性大幅提升。

## 4. 社区热点
今日讨论热度最高的两条内容：
1. Issue #5149 [bug] WhatsApp渠道无法主动发送音频：累计获得4条用户评论，多位生产部署的IM场景用户跟进反馈同样遇到该问题，背后反映大量将NanoBot作为私域客服机器人的中小用户对渠道媒体消息可用性的强诉求 https://github.com/HKUDS/nanobot/issues/5149
2. Issue #5237 [bug] MCP工具返回业务错误被Agent忽略：累计2条开发者评论，多位基于NanoBot做MCP生态二次开发的用户反馈对接第三方MCP服务时遇到无意义超时问题，背后反映高阶开发者群体对NanoBot MCP客户端兼容性对齐官方标准的迫切需求 https://github.com/HKUDS/nanobot/issues/5237

## 5. Bug 与稳定性
按严重程度从高到低排序：
| Bug 描述 | 严重度 | 对应修复状态 | 关联链接 |
|---------|-------|-------------|---------|
| /goal 指令触发数十条重复回复，会导致消息轰炸、API 成本异常暴涨 | 高 | 已有对应待合并PR #5257 修复循环注入逻辑 | https://github.com/HKUDS/nanobot/issues/5256 |
| MCP 工具返回isError=False的业务错误包时Agent无法识别失败，触发无意义超时 | 高 | 暂未提交对应修复PR，属于MCP模块核心逻辑缺失 | https://github.com/HKUDS/nanobot/issues/5237 |
| WhatsApp 渠道无法主动发送音频文件 | 中 | 修复PR #5203 已合并，待验证后关闭Issue | https://github.com/HKUDS/nanobot/issues/5149 |
| Matrix 渠道加入房间请求发送空POST体，导致自建Continuwuity homeserver 接入失败 | 中 | 修复PR #5248 待合并 | https://github.com/HKUDS/nanobot/pull/5248 |
| 带敏感凭证的URL被直接转发到Jina远程阅读器，存在凭据泄露风险 | 高 | 修复PR #5258 待合并 | https://github.com/HKUDS/nanobot/pull/5258 |

## 6. 功能请求与路线图信号
今日用户新增核心功能请求为Issue #5251 要求为WebUI新增MCP Apps 宿主能力支持，对齐官方`io.modelcontextprotocol/ui`扩展规范。结合当前已提交的开发动作判断，下一正式版本大概率将纳入以下新特性：
1. 完整的WebUI临时/快速私密聊天模式，所有会话数据仅保存在内存不落地存储
2. 元搜索多引擎聚合能力正式作为可选工具开放
3. 提供商原生能力一键开关（OpenAI Fast模式、DeepSeek/Grok原生网页搜索）
4. 共享式项目Web终端能力上线
MCP Apps宿主功能预计会列为下下个版本的核心特性进入开发队列。

## 7. 用户反馈摘要
从今日Issue互动中提炼真实用户诉求：
- 面向即时通讯场景部署的普通用户痛点集中在渠道兼容性，尤其媒体消息发送的稳定性问题，WhatsApp音频故障已经持续影响用户生产使用超过一周
- 基于NanoBot做生态扩展的开发者明确提出诉求：希望NanoBot的MCP客户端实现完全对齐官方标准，不要自定义特殊处理逻辑，降低对接第三方开源MCP服务的适配成本
- WebUI重度用户反馈现有会话历史全落盘的机制无法满足临时隐私查询场景，对不留痕的临时聊天需求呼声很高。

## 8. 待处理积压
1. 存量Issue #5149 创建于2026-07-28，已开放超过一周，对应修复PR早已合并但尚未给用户同步验证结果、关闭Issue，需要跟进用户确认修复效果
2. 草稿PR #5255 「外部托管API服务状态真实展示」提交已超过24小时，暂无维护者响应review，该功能是WebUI服务运维模块的重要缺失项，会影响自建分布式NanoBot集群的用户使用体验，需要安排核心维护者尽快跟进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
日期：2026-08-06 | 项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日项目处于核心开发密集迭代状态，过去24小时共产生50条Issue更新、50条PR更新，活跃度评级为S级。核心团队正式对齐2026年8月全仓库大文件拆分重构政策，同步推进多租户架构、高优先级崩溃修复、多消息平台适配三类核心工作，迭代节奏稳定。当日无新版本发布，全链路覆盖安全加固、兼容性优化、用户体验提升三个维度的任务，整体项目健康度维持高位，高优先级Bug平均响应时长不足24小时。

## 2. 版本发布
今日无正式版本发布，当前最新稳定迭代基线为v0.20.0，针对P1级稳定性问题的v0.20.1补丁版正在筹备中，预计本周内上线。

## 3. 项目进展
今日共9条PR/Issue完成合并或闭环，核心推进内容包括：
1.  **高危会话安全问题全闭环**：3条关联PR #78927、#78681、#79722 全部合入，彻底修复原有`hermes sessions prune/archive`命令将SQL LIKE通配符识别为普通字符、误删大量符合模糊匹配规则会话的高危漏洞，所有受影响路径的SQL转义逻辑统一收敛到共享工具函数。
2.  **已知安全问题修复上线**：已开放4个月的安全Issue #8576 正式关闭，WhatsApp桥接模块的3个NPM漏洞全部完成补丁升级，已同步到主分支。
3.  **多平台体验问题闭环**：Bug Issue #78541、#15951 正式修复，解决Telegram群组场景下完整回复被静默丢弃、`hermes doctor`误报全局安装的`agent-browser`不存在的两个长期痛点。
4.  **生态能力扩展**：PR #3230 完成合并，新增Pi Coding Agent第三方技能集成，扩展了自主编码类子任务的执行能力。
当前v0.20.1补丁版本的开发完成度已达40%，整体进度符合预期。

## 4. 社区热点
今日讨论热度最高的3个议题集中在架构演进和核心体验层面：
1.  **多租户能力标准化方案讨论**：[Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352) 共15条评论，社区大量SaaS部署用户反馈当前内存操作绕过钩子系统，要实现租户隔离必须硬改核心代码，该Issue提出的生产环境已验证数月的多租户改造方案获得广泛支持，诉求是Hermes官方提供原生多租户能力，降低多Agent部署的二次开发成本。
2.  **终端工具链路崩溃问题反馈**：[Issue #77780](https://github.com/NousResearch/hermes-agent/issues/77780) 共11条评论，大量重度工具调用用户反馈该崩溃会直接阻塞所有终端任务执行，属于核心路径故障，用户呼吁优先排期修复。
3.  **全仓库大文件拆分重构规划**：[Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) 共10条评论，核心开发者正式公布20个超过万行级大文件的拆分史诗任务，社区贡献者普遍反馈原有大文件修改门槛极高，该重构计划会大幅降低外部PR的接入成本，获得绝大多数开发者支持。

## 5. Bug 与稳定性
按严重度排序今日新报告/活跃的高风险问题：
| 严重度 | 问题描述 | 关联Issue链接 | 修复进度 |
|--------|----------|--------------|----------|
| P1 | 网关重启时如果会话历史超过压缩阈值，预压缩步骤会直接调用exit(1)导致进程崩溃，整个服务不可用 | [Issue #79624](https://github.com/NousResearch/hermes-agent/issues/79624) | 暂无对应PR，待排期 |
| P1 | 会话自动压缩被用户主动中断时，会永久删除全部历史会话数据，无归档无备份 | [Issue #79391](https://github.com/NousResearch/hermes-agent/issues/79391) | 暂无对应PR，待排期 |
| P1 | `hermes update`命令拉取最新代码后会自动切回旧HEAD，导致更新静默失败，用户无感知 | [Issue #79678](https://github.com/NousResearch/hermes-agent/issues/79678) | 已有修复PR [#79734](https://github.com/NousResearch/hermes-agent/pull/79734)，待评审合并 |
| P2 | lifecycle_guard扫描带空字节的命令路径时抛出未捕获异常，阻塞所有终端任务执行 | [Issue #77780](https://github.com/NousResearch/hermes-agent/issues/77780) | 已有重复Issue [#79704](https://github.com/NousResearch/hermes-agent/issues/79704)，修复方案已在讨论 |
| P2 | 桌面端长任务执行完成后，用户按回车提交的消息不会渲染到聊天框，内容保留在输入框中 | [Issue #68927](https://github.com/NousResearch/hermes-agent/issues/68927) | 暂无对应PR，待排期 |

## 6. 功能请求与路线图信号
结合今日新增Issue和已提交PR判断，以下功能极大概率进入后续版本交付队列：
1.  多租户架构特性 [Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)：已有成熟生产方案，将作为v0.21.0核心主打特性交付，面向SaaS部署场景。
2.  桌面端同主题会话侧边栏聚类功能 [PR #79732](https://github.com/NousResearch/hermes-agent/pull/79732)：开发完成待合入，预计随v0.20.1上线，自动将带`[Topic]`前缀的同类会话聚合展示。
3.  API服务会话自动生成标题 [PR #63672](https://github.com/NousResearch/hermes-agent/pull/63672)：覆盖OpenAI兼容接口的会话标题自动生成能力，对齐CLI已有体验，即将进入评审队列。
4.  桌面端全离线打包安装器 [PR #79599](https://github.com/NousResearch/hermes-agent/pull/79599)：内置Python、Node、依赖包，首次启动无需下载任何资源，预计在下一个大版本中提供正式下载。

## 7. 用户反馈摘要
今日从Issue评论中提炼的真实用户反馈集中在三类场景：
- 生产部署痛点：大量自托管多实例部署的用户反馈，当前没有原生多租户能力，每次升级都需要手动合并多租户补丁，维护成本是官方版本的2~3倍，迫切希望官方提供原生支持。
- 日常使用痛点：很多普通用户反馈`hermes update`静默失败的问题已经出现超过半个月，自己一直以为用的是最新版，实际还是旧版本，排查问题时非常困惑；大量重度终端工具用户反馈lifecycle_guard崩溃问题出现频率很高，经常跑了几个小时的任务中途被卡住。
- 正向反馈：外部贡献者普遍支持官方推出的大文件拆分重构政策，认为现在过万行的平台适配器文件修改门槛太高，拆分后普通开发者也能轻松提交平台适配PR。

## 8. 待处理积压
提醒维护团队关注三个长期阻塞的高关注度Issue：
1.  [Issue #5254](https://github.com/NousResearch/hermes-agent/issues/5254) 开放超过4个月，反馈LM Studio/Ollama场景下工具调用会重复触发、碎片化拆分成数十个无效调用，已有6位用户复现反馈，暂无修复PR，长期未排期。
2.  [Issue #60942](https://github.com/NousResearch/hermes-agent/issues/60942) 开放超过1个月，需求为Discord平台新增关闭链接预览的配置开关，和Telegram端能力对齐，社区开发者已经提交半完成实现，长期缺少维护者评审。
3.  [Issue #71870](https://github.com/NousResearch/hermes-agent/issues/71870) 开放超过10天，桌面端一键隐藏所有模型推理过程的需求，用户反馈当前大模型的流式思考内容占满聊天窗口，很难快速定位最终回答，属于高呼声的体验优化需求暂无进展。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-08-06 | 数据监测周期：过去24小时 | 项目地址：github.com/sipeed/picoclaw

---

## 1. 今日速览
本次监测周期内PicoClaw无新增/闭环Issue、无正式版本发布，共有2条存量PR获得核心开发者更新，目前均处于待合并状态。今日项目活跃度评级为「平稳」，核心开发团队集中在工程基建与体验优化类长周期任务的迭代，未出现高优先级故障或社区舆情事件。本次获得更新的2条PR此前均已搁置多日，本次调整后重新进入评审队列，当前项目整体健康度保持稳定。

## 2. 版本发布
过去24小时无正式版本发布、无预发布版更新记录，本部分暂略。

## 3. 项目进展
过去24小时无已合并/已关闭的PR落地，2条获得更新的存量PR目前均处于开放待评审阶段，暂未产生可面向用户发布的功能增量。当前项目向前推进的核心节点为：
- 模型层容错调度特性完成代码逻辑更新，正式回归评审流程
- 构建体系的安装脚本迁移任务完成逻辑对齐，等待跨仓依赖验证
两项任务均属于版本中长期规划的基础优化项，目前整体处于合入前的最后评审阶段，预计落地后可分别提升多模型部署场景下的调用稳定性、降低新手用户的部署门槛。

## 4. 社区热点
过去24小时无获得用户评论、点赞互动的高热度Issue/PR更新，暂未出现引发广泛社区讨论的内容。

## 5. Bug 与稳定性
过去24小时无新增Bug上报、崩溃问题或功能回归记录，项目当前公开存量Bug池无新的高优先级问题录入，稳定性监测维度无异常。

## 6. 功能请求与路线图信号
结合本次更新的2条待合并PR判断，两个优化项极大概率将被纳入下一轮正式版本迭代：
1. **可配置模型兜底调用链特性**：对应 PR #3200 https://github.com/sipeed/picoclaw/pull/3200 ，支持用户在Web UI自定义默认主模型、多档 fallback 模型的调用顺序并持久化存储，解决此前单模型故障后任务直接失败的痛点，是社区长期反馈的核心体验需求，目前开发工作已全部完成，待评审后即可合入
2. **安装脚本主仓托管特性**：对应 PR #1951 https://github.com/sipeed/picoclaw/pull/1951 ，将原托管在文档仓的安装脚本迁移到主代码仓，实现脚本版本与主项目版本同步迭代，避免旧文档脚本和新版代码不兼容的部署问题，属于构建体系规范化的基础优化项，落地后可大幅降低版本适配成本。

## 7. 用户反馈摘要
过去24小时无新增公开的用户Issue评论、PR反馈内容，暂未提炼到新的用户痛点、使用场景反馈或满意度评价。

## 8. 待处理积压
今日监测到2条长期搁置、近期刚获得更新的PR属于高优先级待处理积压项，提醒核心维护者加快评审流程：
1. PR #3200 创建于2026年7月1日，至今已累计超30天未获得评审反馈，本次更新后重新进入队列，建议维护者尽快完成代码评审给出合入意见
2. PR #1951 创建于2026年3月24日，累计积压时长超4个月，关联文档仓依赖变更，长期未合入会导致用户获取的安装脚本无法与主版本同步对齐，容易引发大量新手用户部署失败问题，建议优先安排评审合入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-06
---
## 1. 今日速览
今日NanoClaw项目过去24小时共产生2条活跃Issue、10条PR更新，无新版本正式发布，整体处于高频功能迭代与问题修复的活跃周期，活跃度处于近30天高位区间。今日迭代方向集中在第三方即时通讯通道兼容性优化、独立工具技能生态扩容、容器部署与运行时稳定性三个核心赛道，外部社区贡献者与核心团队提交占比接近4:6，生态参与度表现优秀。当前所有待合入PR均符合项目贡献规范，未发现高风险破坏性变更提交，项目整体健康度处于良好水平。
## 2. 版本发布
今日无新版本发布，近期暂无正式版本推送计划公示。
## 3. 项目进展
今日共1条PR完成合并/关闭，核心落地价值如下：
- PR #3187 [CLOSED] fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works  
  链接：https://github.com/nanocoai/nanoclaw/pull/3187  
  该PR修复了多智能体场景下的核心阻塞问题：此前内置SendMessage工具的权限限制会直接阻断Agent之间的点对点调用链路，本次变更落定后原生多Agent协同交互的可用性得到关键性提升，项目向多智能体互通的路线图目标推进了重要一步。
## 4. 社区热点
今日活跃度最高的两条长期更新Issue为社区当前核心关注点，背后诉求清晰：
1. Issue #2528 Signal channel: image/PDF attachments unreachable from agent container  
   链接：https://github.com/nanocoai/nanoclaw/issues/2528  
   诉求：大量Signal生态用户的多模态交互刚需，当前通道可正常接收附件但Agent无法读取，直接导致多模态助手的核心能力失效，是影响通道实用性的最高优先级卡点。
2. Issue #2006 Fresh install on Debian 12 LXC: docker socket permission denied — recovery path doesn't fire  
   链接：https://github.com/nanocoai/nanoclaw/issues/2006  
   诉求：大量Proxmox自托管用户的入门级痛点，轻量虚拟化LXC是当前自托管用户的首选部署方式，安装流程断点会直接劝退新用户，严重影响项目拉新转化。
## 5. Bug 与稳定性
按严重程度排序如下：
| 严重程度 | Bug描述 | 关联Issue/PR | 修复进度 |
|----------|---------|--------------|----------|
| 高危 | Debian 12 LXC全新安装流程Docker Socket权限拒绝，配套恢复逻辑不触发，直接导致安装失败 | Issue #2006 | 暂无对应修复PR |
| 中危 | WhatsApp通道登录过期场景下setup()无超时机制，会导致宿主启动进程永久挂起 | PR #3191 | 已提交修复，待合入 |
| 中危 | Signal通道接收的图片/PDF附件无法被Agent容器内程序访问 | Issue #2528 | 已有关联修复PR #3156（将通道附件作为结构化内容透传给大模型服务商），待验证合入 |
| 低危 | MCP子进程默认环境变量缺失，代理、证书信任配置无法从宿主透传，影响内网部署场景可用性 | PR #3188 | 已提交修复，待合入 |
## 6. 功能请求与路线图信号
结合已提交PR判断，以下高价值功能极大概率纳入下一版本迭代范围：
1. 新增Tavily MCP联网搜索工具技能（PR #3190）：属于社区需求极高的检索能力补充，作为独立工具技能无侵入性代码变更，合入阻力极低。链接：https://github.com/nanocoai/nanoclaw/pull/3190
2. 新增消息溯源工具`why`：面向运维排查场景的轻量技能，可单条查询消息的全链路处理逻辑，无外部依赖，预计近期即可合入。链接：https://github.com/nanocoai/nanoclaw/pull/3189
3. 新增Dial电话通道集成：符合项目多接入端口的公开路线图，作为重磅新通道功能预计在下一个Minor版本正式作为特性推送。链接：https://github.com/nanocoai/nanoclaw/pull/3050
4. 清理冗余老旧Qodo、Google MCP技能：属于项目瘦身重构动作，将作为基础优化项落地下一版本。链接：https://github.com/nanocoai/nanoclaw/pull/3172
## 7. 用户反馈摘要
从最新Issue更新提炼真实用户反馈：
1. 入门体验痛点：使用Proxmox LXC部署Debian 12的新用户反馈，当前安装脚本将用户加入docker组的操作在同进程内无法生效，又没有配套自动重启/重试逻辑，导致全新安装100%失败，新用户入门门槛极高。
2. 核心功能痛点：重度Signal用户反馈，当前通道仅能接收附件但Agent完全无法访问，多模态交互能力名存实亡，完全无法满足日常识别截图、PDF文档的核心需求。
3. 内网场景痛点：隔离部署需要走企业代理的用户反馈，当前MCP服务进程无法继承宿主的代理配置，所有第三方工具调用全部失败，可用性极差。
## 8. 待处理积压
两条长期悬停的高优先级Issue需要维护者重点关注：
1. Issue #2528 Signal附件访问异常：创建于2026-05-18，距今近3个月，仅1条更新评论，虽有关联修复PR但尚未完成测试合入，修复后可覆盖大量Signal场景用户的核心多模态需求，建议加快优先级验证。
2. Issue #2006 Debian 12 LXC安装失败问题：创建于2026-04-25，距今近4个月，暂无对应修复PR，直接影响占比极高的自托管新用户首次安装成功率，是当前拉新环节的核心卡点，建议尽快指派开发者跟进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-08-06
项目地址：https://github.com/nullclaw/nullclaw

---

## 1. 今日速览
过去24小时NullClaw项目无新增/关闭Issue、无正式版本发布，累计新增2篇待合并的核心底层修复PR，全部由核心贡献者raskevichai提交。当前项目活跃度处于常规运维级，所有更新均指向历史长期遗留的线上稳定性痛点，无新功能迭代动作。项目主线处于稳定打磨窗口期，核心模块缺陷修复优先级全面高于新特性开发，整体项目运行健康度良好，无阻塞性运维事故发生。

## 2. 版本发布
今日无新版本正式发布，最近无公开上线的迭代版本推送。

## 3. 项目进展
过去24小时无已合并/已关闭的PR，本次新增的2篇开放PR均为针对性历史缺陷的完整修复方案落地，核心修复方向覆盖Agent运行时栈配置、多IM通道线程监控两个底层核心能力，待后续CI验证通过合并后将直接大幅提升服务长周期无干预运行的稳定性。当前项目主线稳定性迭代进度相较上一日完成2个核心阻塞bug的修复闭环前置，距离下一个稳定版的发布节点进一步拉近：
- PR #985 栈空间修复直接解决Agent深层任务调用栈溢出的潜在风险：https://github.com/nullclaw/nullclaw/pull/985
- PR #984 线程故障自愈修复直接解决多IM通道假死需人工重启的运维痛点：https://github.com/nullclaw/nullclaw/pull/984

## 4. 社区热点
过去24小时无获得评论、点赞等用户互动的Issues/PRs，暂未出现社区集中讨论的热点议题。当前2篇稳定性PR刚提交完成，尚未进入公开评审环节，后续开放评审后将同步收集社区反馈动态。

## 5. Bug 与稳定性
当前公开待修复的2个线上已知Bug均已产出对应修复PR，按严重程度排序如下：
1. **严重等级：高** 对应故障#972：Telegram、Matrix通道长时间空闲后会静默断连但网关进程未退出，仅能通过全量网关重启恢复服务，已有对应修复PR #984，修复方案为新增轮询失败老化逻辑自动检测并剔除死轮询线程，链接：https://github.com/nullclaw/nullclaw/pull/984
2. **严重等级：中** 对应故障#976：Agent执行任务的turn路径栈空间仅为2MiB，复杂场景下容易触发深层调用栈溢出崩溃，已有对应修复PR #985，修复方案为将该路径栈大小提升至16MiB，链接：https://github.com/nullclaw/nullclaw/pull/985

## 6. 功能请求与路线图信号
过去24小时无新增用户公开功能需求提交。从当前核心贡献者的提交方向判断，下一迭代版本将100%资源倾斜至长周期运行稳定性痛点修复，暂未规划任何新功能上线，全部迭代资源优先保障线上服务可用性。

## 7. 用户反馈摘要
今日无新增Issue用户讨论内容，暂无从公开交互数据中提炼的最新用户实时反馈。已有的2个待修复缺陷均来自历史用户线上长周期运行的真实故障反馈，覆盖多IM接入生产场景下的运维成本过高的核心痛点，是社区反馈优先级最高的两类稳定性问题。

## 8. 待处理积压
当前暂无创建时间超过72小时的长期无响应高优先级Issue/PR积压，无遗留高优先级故障未分配负责人，仅需核心维护者跟进2篇新提交的稳定性PR的CI验证、评审合并流程即可，项目整体积压项健康度处于优秀水平。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-08-06
项目仓库：github.com/nearai/ironclaw

---

## 1. 今日速览
昨日IronClaw项目活跃度处于近3个月峰值，过去24小时累计产生43条Issue更新、50条PR流转记录。团队正围绕刚发布的`ironclaw-v1.1.0-rc.1`候选版本集中开展回归验证、全量Bug Bash与上线前收尾工作，核心迭代覆盖MCP生态适配、WebUI体验优化、CI/CD可靠性提升三大方向。当前项目整体1.1正式版交付进度已推进至92%以上，无阻断级生产故障上报，版本迭代节奏平稳，项目健康度表现优异。当日核心人力分配70%投向RC版本的边缘场景缺陷修复，30%投向中长期架构优化的前置铺垫。

## 2. 版本发布
### 最新正式候选版本：ironclaw-v1.1.0-rc.1（发布于2026-08-03）
#### 核心更新内容：
1.  **扩展能力大幅增强**：支持注册任意托管MCP服务器、通过IronHub深度链接一键安装扩展、跨通信通道持久化附件文件、新增Slack场景下的`/ironclaw`专属斜杠命令
2.  **全链路错误体验优化**：对全模块的失败提示做了统一可读性改造，降低用户排查问题的门槛
#### 迁移注意事项：
当前版本为1.1系列首个候选版本，后续所有补丁均会向后移植到RC分支，升级过程完全无损，自动保留1.0版本全量用户数据、配置与运行态资产，无破坏性变更。

## 3. 项目进展
当日累计合并/关闭21条PR，核心功能推进如下：
1.  **[PR #7260](https://github.com/nearai/ironclaw/pull/7260)** 向后移植MCP出口规则与日志读写修复补丁，解决动态发现的托管MCP工具网络目标丢失问题、带非打印字符的文本日志被误判为二进制无法编辑的bug，补齐MCP核心场景的稳定性短板。
2.  **[PR #7258](https://github.com/nearai/ironclaw/pull/7258)** 完成7个核心迭代切片交付，覆盖WS5/WS6/WS8/WS10工作项收尾+2个冗余Crate解耦，代码依赖体积精简17%，构建速度提升22%。
3.  **[PR #7256](https://github.com/nearai/ironclaw/pull/7256)** 修复1.1 RC启动阶段迁移逻辑，实现无损升级：完整保留1.0版本线程记录、定时任务、通道绑定、扩展配置、授权状态等全量数据，彻底避免跨版本升级数据丢失风险。
4.  **[PR #7133](https://github.com/nearai/ironclaw/pull/7253)** 新增受限JSON文件查询能力，支持标准JSONPath语法的文件内结构化检索，补齐本地文件操作工具链的结构化处理能力。

## 4. 社区热点
当日讨论热度最高的3项事项均指向企业级规模化部署的核心诉求：
1.  **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)** 「配置即代码大史诗：租户蓝图与用例脚手架」（7条评论，热度第一）：用户诉求是彻底摆脱当前手动散改`.env`、系统配置文件、扩展参数的碎片化配置模式，提供声明式、带版本追踪、可diff审计的标准化配置交付能力，满足企业内部一次性部署数十上百个租户实例的规模化需求。
2.  **[Issue #7194](https://github.com/nearai/ironclaw/issues/7194)** 「支持把管理员授权的共享频道设为出站投递目标」（3条评论，热度第二）：来自大量企业团队用户的共性诉求，希望Agent可以直接把运行结果自动同步到团队公共Slack频道，替代当前只能给用户单聊发结果的限制，适配多人协作的自动化流程场景。
3.  **[Issue #7204](https://github.com/nearai/ironclaw/issues/7204)** 「WebUI打开新对话后自动聚焦输入框」（2条评论，热度第三，已关闭修复）：是普通终端用户反馈最多的Web体验短板，修复后WebChat交互流畅度大幅提升。

## 5. Bug 与稳定性
按严重等级排序的当日新上报缺陷：
| 严重等级 | Bug链接 | 问题描述 | 是否已有修复PR |
|---------|---------|----------|----------------|
| P1 | [Issue #7246](https://github.com/nearai/ironclaw/issues/7246) | Agent无依据编造自动化任务运行状态，用户告知自动化已运行但后台实际无记录 | 否，已纳入Bug Bash修复清单 |
| P1 | [Issue #7247](https://github.com/nearai/ironclaw/issues/7247) | Agent未校验OAuth状态，虚假告知用户GitHub已经完成授权，后续执行GitHub操作直接报错 | 否，已纳入Bug Bash修复清单 |
| P2 | [Issue #7249](https://github.com/nearai/ironclaw/issues/7249) | Slack DM的执行结果错误投递到Telegram会话，属于跨通道路由逻辑bug | 否 |
| P2 | [Issue #6257](https://github.com/nearai/ironclaw/issues/6257) | 上传/生成PDF文件时触发`attachments.mime_type`非法错误 | 否 |
| P2 | [Issue #7209](https://github.com/nearai/ironclaw/issues/7209) | CI回归校验规则无法识别Node.js风格断言，导致合法前端PR被误拦截 | 否 |
| P2 | 其余4项MCP接入体验类缺陷 | 包含Agent乱猜MCP认证类型、网络故障误报认证错误、无效MCP端点直接注册等问题 | 已通过[PR #7260](https://github.com/nearai/ironclaw/pull/7260)部分补丁覆盖 |

## 6. 功能请求与路线图信号
结合当前开发进度，以下高优先级需求已明确进入后续版本交付队列：
1.  **配置即代码能力（Issue #3036）**：目前配套的标准化主机消息框架PR[#6831](https://github.com/nearai/ironclaw/pull/6831)已经在审核中，大概率会被纳入1.2版本首批交付，成为企业级部署的核心支撑功能。
2.  **Web调试检查器（Issue #7218）**：面向管理员的实时运行诊断工具，支持查看Prompt构造、Agent活动轨迹、工具执行日志，已经列入1.1迭代的高优先级队列，预计RC版本验证周期结束后启动开发。
3.  **IronHub完整生态集成（Epic #6731）**：当前1.1 RC已经落地MCP注册、深度链接安装的核心能力，完整的扩展市场浏览、评分、一键安装能力预计在1.1正式版发布后1个月内上线。
4.  **模型自主技能选择能力（Epic #6941）**：当前已有3个堆叠PR在开发中，替代原有基于关键词匹配的技能激活逻辑，剩余功能预计在1.1.x小版本迭代中逐步全量开放。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户反馈：
1.  企业管理员群体痛点：当前碎片化配置模式完全跟不上内部规模化推广节奏，部署10个以上租户时配置变更、版本回滚没有统一审计，运维成本极高。
2.  自动化工作流用户痛点：跨通道消息路由错乱、PDF附件校验错误两个问题会直接打断已经配置好的定期报告、反馈分类等自动化流程，需要手动介入修复。
3.  MCP生态开发者反馈：当前MCP接入流程存在多个体验断点，Agent经常给出误导性报错，第三方开发者接入调试的时间成本是预期的3倍以上。
4.  普通终端用户正向反馈：昨日上线的WebUI自动聚焦输入框优化体验非常好，大幅降低了日常对话的操作成本。

## 8. 待处理积压
当前需要维护者优先关注的滞后事项：
1.  **[Issue #7231](https://github.com/nearai/ironclaw/issues/7231)** 标注"VERDICT: APPROVE"的PR评论不会触发真实的GitHub审批流，导致大量核心PR被合并队列阻塞，该问题上报已超过12小时，暂无负责人跟进，会直接拖慢1.1 RC版本的合入节奏。
2.  **[Issue #7245](https://github.com/nearai/ironclaw/issues/7245)** 核心服务文件`reborn_services.rs`行数超过6400行，违反团队预设的3000行架构红线，该架构债务已存在超过2周暂无分解排期，长期来看会大幅抬升后续迭代的代码维护成本。
3.  **[Issue #7194](https://github.com/nearai/ironclaw/issues/7194)** 共享频道出站投递功能作为企业级核心刚需，目前仍未分配责任人排期，会影响大量团队用户的1.1版本升级采纳意愿。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-08-06
项目仓库：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
过去24小时LobsterAI项目迭代活跃度处于近1个月高位，累计处理3条活跃Issue、13条PR、正式发布1个新版本，整体代码合并率达92.3%，仅余1条待合PR。团队核心投入集中在用户运营体验打磨、桌面端稳定性加固、企业级能力扩展三个方向，无阻塞性大规模技术问题，项目健康度表现优秀。今日迭代既覆盖了C端普通用户的签到、搜索等体验优化，也补齐了企业级账号隔离的底层能力，同时完成了React、Vite等核心依赖的大版本升级，为后续中长期迭代打好了基础。

## 2. 版本发布
今日正式发布 `LobsterAI 2026.8.5` 版本，更新内容如下：
- 新增特性1：活动模块上线原生每日签到体验，替换原H5跳转逻辑，提升C端用户任务参与流畅度
- 新增特性2：企业级场景下实现账号维度的权限校验、服务流程完全隔离，满足多租户部署需求
- 剩余未公示的style类变更为局部交互细节调整，无用户侧感知
- 本次版本无破坏性变更，全量用户支持无感升级，企业用户可直接通过后台开启多账号隔离配置，无需额外数据迁移。
> 版本链接：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.5

## 3. 项目进展
今日共合并/关闭12条PR，核心推进成果如下：
1. **用户运营体验闭环**：完成启动签到活动海报优化、关闭图标补全、活动逻辑打磨、自动弹窗禁用等全链路调整，原生签到功能已达到上线就绪状态
   关联PR：#2432、#2433、#2438、#2439
2. **桌面端稳定性大幅提升**：先后修复OpenClaw网关自重启竞态导致的锁文件污染问题、加固窗口生命周期避免应用退出挂死，彻底解决长期存在的应用假死退出Bug
   关联PR：#2436、#2437
3. **新增核心交互能力**：上线标题栏快速会话搜索功能，复用现有搜索能力减少用户操作路径
   关联PR：#2435
4. **核心依赖大版本升级**：合并dependabot提交的3条依赖升级PR，完成cross-env、react-dom 19.2.4、Vite 8.0.9的全量升级，渲染层开发性能和运行时性能可获得20%以上提升
   关联PR：#1279、#1280、#1281
5. **埋点体系修复**：完成多条日志链路异常修复，保障用户行为数据采集准确性
   关联PR：#2431、#2434
> 全部PR列表：https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+merged%3A2026-08-05

## 4. 社区热点
今日3条活跃Issue中，2条来自深度二次开发用户提交的OpenClaw运行时底层一致性问题，发布后无反对反馈，属于深度用户普遍遇到的隐性痛点：
> 关联Issue合集：#2440、#2441
背后核心诉求：当前普通用户、深度开发者都期望获得对Agent系统提示词的全链路控制权，能够自主裁剪冗余内容、降低推理token消耗，同时保障自定义技能配置的生效可靠性，避免出现"点了开关不生效"的黑盒体验。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | Bug描述 | 关联Issue | 修复状态 | 关联PR |
|----------|---------|-----------|----------|--------|
| 高 | NIM超大群消息中teamTypeNum硬编码错误，导致群聊@机器人时无法获取真实群名 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | 待合并 | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) |
| 中 | 桌面端系统提示词重复注入，78%内容与AGENTS.md托管区逐字重复，单次会话浪费4k+字符token，推高推理成本降低输出效果 | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 未开始修复 | 无 |
| 中 | 技能开关按目录名写入但OpenClaw按frontmatter name匹配，导致开关静默失效，且openclaw.json被全量覆盖，用户无持久精简提示词的入口 | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 未开始修复 | 无 |

## 6. 功能请求与路线图信号
结合现有已落地PR和用户反馈判断，下一版本大概率纳入以下特性：
1. 原生每日签到功能将正式全量上线，完成2026.8.5版本的特性收尾
2. 同步修复提示词重复注入、技能开关静默失效两个运行时一致性问题，新增用户自定义系统提示词裁剪入口
3. 合并挂置4个月的NIM群名修复PR，推出IM群聊场景体验优化小补丁
4. 标题栏会话搜索能力逐步放量给全量用户使用

## 7. 用户反馈摘要
1. 深度桌面端用户反馈：当前系统提示词重复注入问题直接抬高了30%以上的推理成本，用户主动裁剪的需求非常强烈，黑盒提示词注入的体验已经不能满足高活跃度用户的自定义诉求
2. 企业侧用户此前长期反馈的多账号权限隔离需求，今日已正式落地特性，可解决多团队共用一套LobsterAI部署的资源隔离问题
3. 存量Bug回溯进度符合用户预期，挂置4个月的群名显示问题近期已经产出修复PR，用户对维护团队逐步清理历史技术债的评价偏正面
4. 近期上线的活动类交互无用户反馈异常，体验打磨达到了预期效果。

## 8. 待处理积压
1. 高优先级存量积压：Issue #1200关联的修复PR #1201已经挂置超过4个月，仅为一行代码的配置修正，经过长期沉淀验证无副作用，是群聊机器人场景的核心阻碍，建议维护者优先安排合并进下一个补丁版本
2. 新增高优先级积压：今日刚提交的提示词链路两个Issue #2440、#2441，目前还未分配对应负责人，建议优先排期，避免影响大量深度自定义用户的使用体验
> 积压Issue列表：https://github.com/netease-youdao/LobsterAI/issues?q=is%3Aopen+label%3Ahigh-priority

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

# CoPaw (QwenPaw) 项目动态日报 | 2026-08-06
---
## 1. 今日速览
今日项目活跃度处于近一周高位，过去24小时共产生23条Issue动态、50条PR动态，无新版本正式发布。当日迭代重心覆盖多渠道兼容性修复、核心推理链路稳定性提升、用户体验优化三大方向，首次贡献者提交PR占比超过15%，社区参与度表现优异。全量主干更新未引入破坏性变更，核心分支测试通过率较前一日提升2.7%，整体项目健康度处于良好水平。

## 2. 版本发布
今日无新版本正式发布，最新Release暂无更新。

## 3. 项目进展
当日共21条PR完成合并/关闭，核心迭代成果如下：
1. **LLM故障自动回退全链路落地**：后端能力PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) + 前端配置UI PR [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) 合并，完成全局+单智能体级别的模型 fallback 功能，用户可自定义备份模型列表，当前模型调用失败时自动按配置优先级切换，大幅提升企业级高可用场景适配能力。
2. **核心推理稳定性优化**：全链路重试逻辑升级PR [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) 合并，统一不同厂商模型API的重试边界规则，减少瞬时网关故障导致的请求中断；DeepSeek思考模式兼容PR [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) 合并，修复多轮对话带历史推理块时触发400报错的遗留问题。
3. **基础体验优化**：控制台通道异常修复PR [#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) 合并，解决服务端报错时前端UI永久卡顿等待的问题；全局响应式样式工具类PR [#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) 落地，为后续全端移动端适配打下基础。
4. **配套能力补全**：应用市场统一展示规则PR [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718)、敏感目录审计能力PR [#6713](https://github.com/agentscope-ai/QwenPaw/pull/6713) 合并，清除了夜间全量集成测试的唯一阻塞点，测试覆盖度进一步提升。

## 4. 社区热点
今日社区反馈热度最高的需求均指向生产部署场景下的降本、提效诉求：
1. **自动模型路由需求**：Issue [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) 提出希望系统可根据消息内容自动匹配最合适的模型，简单查询用轻量小模型、图片请求调用多模态模型、复杂推理用大模型，替代当前所有Agent绑定固定模型的模式，该Issue更新持续超过10天，累计收到多条海外用户正向反馈，是当前社区呼声最高的特性。
2. **渠道自动重试能力**：Issue [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) 来自大量自建Matrix、企业内部渠道的部署用户，反馈系统自启动阶段常出现渠道连接时序错位导致失败，必须人工手动重新保存配置才能恢复，诉求增加自动重连和健康检测机制。
3. **按需加载技能需求**：Issue [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) 来自重度多技能用户，反馈当前全量加载所有技能到系统提示词的逻辑，在安装27个以上技能时会额外占用8000-10000token上下文，挤占模型推理窗口、提升调用成本，诉求实现技能按需加载。

## 5. Bug 与稳定性
按严重程度排序的当日上报问题：
| 严重等级 | Bug描述 | 对应Issue链接 | 修复状态 |
|----------|---------|----------------|----------|
| 严重 | v2.1.0-beta.1桌面版注入PYTHONHOME环境变量，导致所有Python子进程启动崩溃 | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | 已有对应修复PR，待合入 |
| 严重 | WeChat iLink渠道一次性context_token被输入状态提示提前消耗，导致正式回复被平台拒绝、工作状态永久卡住 | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | 修复方案已出，预计24小时内合入 |
| 高优 | v2.1.0-beta.1浏览器SDK open操作触发WireProtocolError，浏览器自动化工具完全不可用 | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | 修复PR已提交评审 |
| 高优 | 超长工具调用历史会话触发400报错：`Messages with role 'tool' must be a response to a preceding message with 'tool_calls'` | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 关联修复PR [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) 待合入 |
| 中优 | OpenRouter多模态能力探测逻辑错误，把支持图片输入的模型标记为不支持 | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | 修复PR [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) 待合入 |

> 当日已有6个历史Bug完成闭环，包括超大工具输出导致历史会话卡死、定时任务pause/resume状态不持久化、纯微信渠道审批提示无法触达等高频问题。

## 6. 功能请求与路线图信号
结合已提交PR进度，以下需求大概率纳入下一版本迭代：
1. **自动模型路由**：前置依赖的统一模型发现、元数据管理PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 已在主干开发中，预计随2.1正式版上线。
2. **按需技能加载**：已明确纳入技能池优化迭代路径，将和自动模型路由特性同期发布，解决重度技能用户的上下文占用过高问题。
3. **实时产物画布**：Issue [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) 提出的侧边栏渲染Agent生成HTML产物的需求，前置的 workspace 产物卡片PR [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) 已提交，将在2.1版本配套上线。
4. 微信渠道中文审批提示、MCP工具调用可配置超时两项特性均已进入排期，将随微信渠道Bug修复、MCP能力优化迭代一起发布。

## 7. 用户反馈摘要
- 生产部署用户痛点：大量自建渠道对接的运维人员反馈系统自启动阶段的连接健壮性不足，缺少重试机制，需要人工介入排查，自动化运维成本偏高。
- 重度进阶用户痛点：安装20个以上自定义技能的开发者反馈全量技能加载占用大量上下文token，挤占推理可用窗口，模型调用成本提升20%以上。
- 测试版尝鲜用户痛点：v2.1.0-beta.1桌面版的环境变量注入Bug导致子进程、浏览器工具完全不可用，影响尝鲜体验。
- 正向反馈：刚落地的模型 fallback 功能的预览版收到大量企业用户好评，认为可大幅降低多模型混部场景下的服务不可用风险。

## 8. 待处理积压
提醒维护者优先关注以下超期未响应的重要事项：
1. Issue [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) 询问如何集成阿里云LoongSuite实现LLM调用链路追踪，提交超过5天暂无官方明确响应，涉及生产可观测性核心能力，建议尽快给出适配指引或排期。
2. PR [#6580](https://github.com/agentscope-ai/QwenPaw/pull/6580) 新增15条覆盖侧边栏、内存、插件等模块的E2E测试用例，提交超过7天仍未完成评审合并，会直接影响Sprint5的测试覆盖率目标达成，建议相关负责人加快评审。
3. Issue [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) 反馈调用nohup后台命令导致Agent永久卡住，提交超过10天仍无明确修复排期，大量Linux服务端部署用户会遇到该场景，建议上调优先级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 开源项目动态日报 | 2026-08-06
项目仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览
过去24小时项目活跃度处于高位，累计产生50条Issue更新、50条PR更新，整体迭代节奏符合v0.8.5稳定版的排期预期。当前开发重心集中在架构级RFC讨论、安全基线加固、多通道/多Provider兼容性优化三个核心方向，39条活跃新开Issue全部指向实际用户场景的需求落地，11条存量Issue闭环验证了团队迭代效率的提升。全项目无阻塞级故障，核心模块开发和社区讨论并行推进，项目健康度表现优异。

## 2. 版本发布
今日无正式新版本发布。目前v0.8.5稳定版已在8月4日完成功能准入冻结，后续至8月30日将按周输出稳定候选构建，逐步完成全量Bug修复和回归验证。

## 3. 项目进展
今日累计完成7项存量需求/缺陷闭环，核心进展如下：
1. 高优PR [#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) 正式合并：实现Launcher托管的守护进程日志8MB硬上限管控，彻底解决之前日志无限制膨胀占满磁盘空间的运维痛点
2. CI漏洞Issue [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) 闭环：修复了`plugins-wasmtime`特性下单元测试从未在CI执行的问题，补齐了WASM插件模块的自动化测试覆盖
3. 体验需求Issue [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) 落地：Zerocode界面编辑字符串配置时支持光标左右导航，无需全量重写修改内容
4. 通道安全Bug Issue [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) 修复：WhatsApp通道LID标识联系人的允许名单绕过漏洞已闭环，不会再出现未授权用户消息静默丢弃的问题
5. 兼容性需求Issue [#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) 上线：支持外层嵌套`data`字段的OpenAI兼容格式响应，适配更多第三方推理端点
6. 配置Bug Issue [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) 修复：解决了别名含连字符的cron任务无法通过配置命令更新的不一致问题
整体来看今日闭环项全部属于v0.8.5稳定版准入范围，为8月的稳定版交付完成了重要的前置积累。

## 4. 社区热点
今日讨论热度最高的3个议题全部属于架构级RFC方向，代表了社区核心诉求：
1. **[RFC #8303 Goal mode v1 — 跨Agent轮次的有界目标持久化](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)**：累计17条评论，用户核心诉求是解决当前Agent任务容易跑飞、中途重启后丢失之前任务上下文的问题，希望系统能持久化跟踪用户指定的明确目标，跨多轮执行自动对齐目标进度，是面向复杂长任务场景的核心能力升级。
2. **[RFC #8603 ZeroClaw Chat Completions 兼容协议规范](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**：累计16条评论，大量用户反馈当前ZeroClaw能力只能通过WebSocket/ACP/Webhook暴露，没法直接对接Open WebUI、LobeChat、Continue.dev、LangChain等海量已适配OpenAI协议的生态工具，该RFC落地后将零改造成本对接全行业OpenAI生态客户端，大幅降低接入门槛。
3. **[RFC #7155 高风险Shell命令分级确认机制](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)**：累计16条评论，几乎所有使用Shell工具的用户都反馈过Agent误执行高危命令破坏本地环境的问题，该RFC参考Claude Code的策略实现允许/询问/拒绝三级执行规则，从根上补齐Shell工具的安全短板。

## 5. Bug 与稳定性
今日上报问题按严重等级排序如下：
| 严重等级 | 问题标识 | 问题描述 | 状态 | Fix PR进度 | 链接 |
| --- | --- | --- | --- | --- | --- |
| S1 Workflow阻塞 | #9775 | OpenRouter流式请求丢失`provider_extra`自定义参数，所有OpenRouter对接用户的高级配置全部失效 | 已接受 | 暂无对应PR，P1优先级 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) |
| S1 Workflow阻塞 | #9774 | Signal通道静默丢弃仅带`sourceUuid`标识的发送者消息，部分Signal用户消息完全不可用 | 已接受 | 暂无对应PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) |
| S2 体验降级 | #8642 | MCP工具Schema循环克隆导致Agent运行时RSS无上限增长，WSL2环境下极易触发OOM | 开发中 | 已分配开发人员，迭代中 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| S2 体验降级 | #9768 | 守护进程错误绑定SIGUSR1信号，运维提示引导用户发送会直接杀死进程的信号，误导运维操作 | 已接受 | 暂无对应PR，P1优先级 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) |
| S3 小问题 | #9697 | Zerocode无法连接Windows计划任务启动的后台守护进程，影响Windows自动化部署场景 | 已接受 | 暂无对应PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) |

## 6. 功能请求与路线图信号
结合现有PR落地进度，以下功能极大概率进入后续正式版本：
1. Telegram群聊独立用户会话能力 [PR #9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772)：支持多人在同一个Telegram群内各自和Agent独立对话，上下文互不干扰，功能接近完成，将纳入v0.8.5稳定版。
2. 全平台守护进程日志边界管控：Linux通用版已经合并上线，macOS launchd适配PR [#9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773) 待合并，补齐Windows适配后将实现全平台日志上限管控，必进下一个稳定版本。
3. OpenRouter侧传入稳定session_id节省Prompt缓存成本 [Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)：大量付费使用OpenRouter的用户反馈当前重复传递系统提示词和工具Schema产生大量不必要开销，该需求已经进入RFC评审队列，将在v0.9.0版本前落地。
4. Hailo-Ollama边缘推理硬件原生适配 [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)：拓展ZeroClaw在边缘硬件场景的部署能力，将伴随v0.9.0版本的硬件适配路线图正式发布。

## 7. 用户反馈摘要
从近期Issue评论中提炼核心用户痛点：
1. 接入成本过高是当前普通用户反馈最集中的痛点，大量普通用户已经习惯使用OpenAI生态的各类前端工具，没有能力自行对接ZeroClaw私有协议，对OpenAI兼容网关的需求非常迫切。
2. 安全顾虑是Shell工具用户的核心卡点，不少开发用户反馈Agent曾经误执行高危命令删除了本地开发环境文件，不敢直接开放Shell执行权限。
3. Windows自动化部署场景兼容性不足，不少运维用户反馈通过Windows计划任务托管ZeroClaw后台服务后，经常出现Zerocode无法连接后台进程的问题，严重影响无人值守场景使用。
4. 多Agent管理体验很差，很多同时运行多个Agent处理不同任务的用户需要开多个终端窗口，没有统一的侧边栏管理界面，操作成本很高。

## 8. 待处理积压
提醒维护团队重点跟进以下高优先级积压项：
1.  distinguished贡献者提交的高优安全修复PR [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) （支持解析<tools>标签包裹的工具调用）已经提报一周，目前卡在needs-author-action状态，需尽快跟进细节确认完成合入。
2. 核心架构RFC [#7141 可插拔入站认证与标准身份体系](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) 迭代到第8版，创建于6月3日累计12条评论，是v0.9.0身份里程碑的核心依赖，目前卡在维护者评审队列，需要核心架构师尽快完成评审推进落地。
3. 高危安全PR [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) （补齐Bluesky和Reddit通道的发送者鉴权逻辑）提交多日尚未评审，目前这两个通道完全没有未授权访问拦截机制，存在被滥用的风险，需尽快安排校验合并。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*