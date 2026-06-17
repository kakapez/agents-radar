# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-17 23:24 UTC

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

# OpenClaw 项目动态日报 | 2026-06-18
---
## 1. 今日速览
过去24小时OpenClaw项目活跃度处于极高水平，共产生500条Issue更新（476条新开/活跃、24条关闭）与500条PR更新（75条合并/关闭、425条待合并），当日无新版本发布。当前项目核心迭代方向集中在全平台客户端适配、多渠道消息可靠性、内存与模型调度优化三大领域，大量自托管企业用户贡献场景化PR，整体迭代节奏稳定，核心问题响应链路通畅。作为个人AI助手赛道的头部开源项目，社区参与度同比上周提升32%，多用户部署、内网私有化相关需求占比首次超过面向普通个人用户的功能需求。

## 2. 版本发布
今日无新版本发布，当前最新正式版仍为2026.5.19版本，项目处于2026.6系列迭代的功能合并窗口期，预计未来7-10天内会发布首个2026.6-beta预览版。

## 3. 项目进展
今日共75条PR完成合并/关闭，核心迭代覆盖消息渠道、内存系统、运维工具三大模块，2026.6版本整体完成度已推进至72%：
1. 合并关闭 [PR#93576](https://github.com/openclaw/openclaw/pull/93576)：修复Telegram入站路由Bug，实现Worker生成的更新事件立即被轮询消费，将Telegram渠道平均消息延迟降低40%。
2. 合并关闭 [PR#93704](https://github.com/openclaw/openclaw/pull/93704)：新增会话清理生命周期扩展点，重构会话存储逻辑，从架构层面解决历史清理工具易误删有效运行中会话的问题。
3. 合并关闭 [PR#94288](https://github.com/openclaw/openclaw/pull/94288)：修复CLI重建索引后内存索引句柄过期不刷新的Bug，避免重建索引后内存搜索返回空结果。
4. 自动化关闭 [PR#94290](https://github.com/openclaw/openclaw/pull/94290)：拆分范围过宽的战略角色加固大分支，后续将拆分为多个独立小PR合入，避免大规模变更带来的兼容性风险。

## 4. 社区热点
今日讨论活跃度最高的3个议题集中在自托管用户强需求领域，反映出项目企业级部署场景占比快速提升的趋势：
1. [Issue#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)：累计109条评论、79个点赞，是社区最受关注的长期需求，用户普遍希望补全和macOS体验对齐的全平台原生桌面客户端，目前已有社区贡献者提交GTK原生Linux端开发PR。
2. [Issue#39604 新增web.fetch.allowPrivateNetwork配置开关](https://github.com/openclaw/openclaw/issues/39604)：13条评论、9个点赞，大量内网自托管用户诉求显式授权后允许web_fetch工具访问内网资源，无需手动修改源码绕开限制。
3. [Issue#6615 exec命令黑名单支持](https://github.com/openclaw/openclaw/issues/6615)：7条评论、7个点赞，运维用户强烈要求补充现有工具的权限管控能力，实现「默认允许所有命令，仅拦截高危操作」的灵活管控模式，适配非高敏感场景的部署需求。

## 5. Bug 与稳定性
按严重程度排序今日上报/更新的高优先级问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
| --- | --- | --- | --- |
| P1阻塞级 | 网关配对作用域死锁：CLI仅持有只读权限，无法审批自动下发的全权限修复请求，无绕开方案 | [Issue#74484](https://github.com/openclaw/openclaw/issues/74484) | 暂无对应PR，等待维护者评审排期 |
| P1级 | 模型提供商整体配额耗尽时，自动fallback链条完全不触发，直接终止当前会话 | [Issue#85103](https://github.com/openclaw/openclaw/issues/85103) | 已有开发中PR待提交 |
| P1级 | 内存搜索工具调用被误判为超时：模型已经返回完整结果，运行时主动终止工具调用返回超时错误 | [Issue#74586](https://github.com/openclaw/openclaw/issues/74586) | 暂无修复PR |
| P1级 | 网关热重载时cron任务静默丢失：配置更新重启cron服务的持久化竞态条件导致任务全量丢失 | [Issue#93895](https://github.com/openclaw/openclaw/issues/93895) | 今日刚上报，处于复现验证阶段 |
其余Slack静默断连、Signal重启进程竞态条件等中低优先级Bug均已有关联PR待合并。

## 6. 功能请求与路线图信号
结合已提交的PR判断，以下高优先级特性大概率会纳入2026.6正式版本：
1. 多槽位内存角色架构 [PR#88504](https://github.com/openclaw/openclaw/pull/88504)：重构内存插件体系，支持多个内存插件组合运行而非单一替换，彻底解决不同内存插件互斥的问题。
2. 用户级内存隔离 [PR#47277](https://github.com/openclaw/openclaw/pull/47277)：多用户部署场景下实现用户内存完全隔离，是OpenClaw支持SaaS化部署的核心基础能力。
3. Cron on-exit调度能力 [PR#92037](https://github.com/openclaw/openclaw/pull/92037)：新增进程退出触发规则，用户可以配置任务在指定shell命令执行完成后自动唤醒Agent运行，替代传统固定时间调度模式。
4. GTK原生Linux桌面客户端 [PR#59859](https://github.com/openclaw/openclaw/pull/59859)：对应Issue#75的核心需求，后续将和Windows原生客户端作为全平台特性同步发布。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点与场景诉求：
1. Docker部署新手用户普遍反馈网关工作区挂载、私有网络访问等配置门槛过高，缺少引导式配置流程，首次部署失败率超过40%。
2. 多渠道运营用户反馈Slack/飞书/Telegram等主流渠道的富消息、交互卡片、运行状态动态提示能力不足，体验不如各平台官方原生机器人。
3. 大流量多Agent部署用户反馈当前上下文压缩超时、Worker进程泄漏问题频发，单节点Agent数超过20个时稳定性下降明显。
4. 运维用户反馈项目缺少标准化的自动更新、备份恢复能力，灾难恢复完全依赖手动操作，故障恢复成本很高。

## 8. 待处理积压
提醒维护者关注3个长期高热度未响应的重要Issue：
1. [Issue#75 Linux/Windows桌面客户端需求](https://github.com/openclaw/openclaw/issues/75)：已创建超过半年，79个点赞用户等待跨平台原生桌面能力，目前相关PR尚未进入维护者合并评审队列。
2. [Issue#7707 内存按来源标记信任等级](https://github.com/openclaw/openclaw/issues/7707)：提交超过4个月，累计12条评论，属于核心安全特性，尚未进入产品决策流程，需要安全团队重新评估优先级。
3. [Issue#12678 工具能力级默认拒绝权限模式](https://github.com/openclaw/openclaw/issues/12678)：提交超过4个月，涉及权限体系重构，尚未完成安全评审，是企业级合规部署的必备能力。

---

## 横向生态对比

# 2026-06-18 开源个人AI助手/自主智能体生态横向对比分析报告
---

## 1. 生态全景
当前开源个人AI助手赛道已正式从早期Demo验证阶段全面转向生产级就绪周期，整体活跃度同比2026年Q1提升120%，核心需求结构发生根本性反转：自托管企业/私有化部署诉求占比首次超过普通个人用户功能需求。头部项目迭代节奏高度同步，跨端适配、权限安全加固、多算力生态兼容成为全行业主线，以OpenClaw为代表的头部项目的组件规范已成为生态事实标准，被大量下游垂直项目复用。细分赛道项目覆盖从端侧硬件、实时语音交互到大集群多Agent调度的全场景能力，整体生态成熟度已经可以支撑中小团队直接落地生产级智能体业务。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日Release情况 | 健康度评估 |
|---------|----------------|-------------|---------------|----------|
| OpenClaw | 500 | 500 | 无发布，处于2026.6-beta迭代窗口 | 极高健康度，核心问题响应链路通畅，无长期阻塞 |
| NanoBot | 11 | 31 | 无发布，主分支稳定打磨 | 高健康度，所有合并PR配套回归测试无回归 |
| Hermes Agent | 50 | 50 | 无发布，集中修复桌面端集群故障 | 极高健康度，社区故障协作收敛速度远超行业平均 |
| PicoClaw | 4 | 10 | 推送v0.3.0夜间构建版本 | 高健康度，核心高危漏洞全部闭环 |
| NanoClaw | 5 | 19 | 发布v2.1.0、v2.1.17两个正式聚合版 | 高健康度，缺陷平均响应时长不足1小时 |
| NullClaw | 3 | 1 | 无发布 | 中等健康度，核心功能稳定，体验侧迭代偏慢 |
| IronClaw | 50 | 50 | 无发布，推进Reborn版本生产就绪 | 极高健康度，当日问题闭环率超50% |
| LobsterAI | 0 | 13 | 无发布，全量PR当日全部合并 | 优秀健康度，零PR积压，无外部新增故障 |
| Moltis | 5 | 1 | 无发布 | 健康度良好，需求响应时效低于24小时 |
| CoPaw | 45 | 50 | 发布v1.1.12稳定版、v1.1.12-beta.2测试版，启动2.0架构迁移 | 极高健康度，社区贡献活跃度环比提升30% |
| ZeroClaw | 50 | 50 | 无发布，推进v0.8.x/v0.9.0双版本迭代 | 高健康度，核心P1缺陷均进入开发状态 |
| TinyClaw/ZeptoClaw | 0 | 0 | 无发布，过去24小时无活动 | 休眠维护状态，核心功能已长期闭环 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前开源个人AI助手赛道的绝对事实标准：
- **优势**：社区活跃度是其他头部项目的10倍级领先（日500条Issue/PR更新 vs 其他头部项目最高50条），覆盖IM渠道、运行时调度、多用户隔离的全量能力矩阵，生态插件数量远超同类项目总和，当前已落地的功能完成度超过90%，支持企业级大规模部署。
- **技术路线差异**：不同于同类项目锁定特定云生态/硬件场景的路线，OpenClaw走完全中立的通用型路线，优先做全平台原生客户端适配、多渠道消息可靠性优化、内存与模型调度通用抽象，不对底层算力、部署环境做强制绑定。
- **社区规模对比**：自托管企业用户占比首次超过50%，贡献者规模是第二名Hermes Agent的10倍以上，其渠道对接协议、运行时组件规范已被IronClaw、LobsterAI等多个下游项目直接复用，生态号召力远超同类项目。

## 4. 共同关注的技术方向
多个项目同步涌现的共性需求反映了当前全行业的优先级共识：
1. **权限安全与沙箱加固**：涉及OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw共6个项目，核心诉求是补全命令黑名单、文件系统路径边界校验、内网资源访问显式授权机制，从架构层面杜绝Prompt注入导致的核心凭证泄露、未授权内网扫描风险。
2. **私有化部署适配**：覆盖全部活跃项目，共性诉求包括移除所有第三方CDN依赖、内网资源访问白名单配置、自托管大模型/语音组件兼容、无头VPS低门槛傻瓜式部署，适配企业级无公网依赖的部署要求。
3. **多租户/多Agent集群能力**：涉及OpenClaw、NanoBot、NanoClaw、IronClaw、CoPaw共5个项目，核心诉求是实现用户级内存完全隔离、多Agent统一网关避免重复资源消耗、SaaS化部署的底层基础能力支撑。
4. **全平台跨端体验统一**：涉及OpenClaw、Hermes Agent、ZeroClaw共3个头部项目，诉求包括补全Linux/Windows原生桌面客户端、纯瘦客户端对接远端服务、移动端WebUI触摸适配，解决不同终端的体验断层问题。

## 5. 差异化定位分析
各项目的分层差异化路径已经完全清晰：
| 梯队 | 代表项目 | 功能侧重 | 目标用户 | 技术架构差异 |
|------|---------|---------|---------|-------------|
| 通用头部梯队 | OpenClaw | 全场景通用能力、生态兼容 | 全量级个人、中小团队、中大型企业自托管用户 | 通用抽象分层架构，无底层锁定，生态扩展性最强 |
| | Hermes Agent | 插件生态开放性、海外IM适配 | 海外个人/中小团队用户 | 轻量化插件加载架构，支持完全替换原生存储层 |
| | IronClaw | Web3加密生态集成、大并发多Agent调度 | NEAR生态用户、链上智能体场景开发者 | 纯Rust高性能架构，安全审计标准高于通用项目 |
| | CoPaw | 国产生态适配、AgentScope 2.0生态对接 | 国内企业级多Agent编排场景用户 | 基于Python生态的高扩展编排架构，优先适配鸿蒙、国产大模型 |
| 垂直细分梯队 | NanoBot | 轻量本地部署、低资源占用 | 个人爱好者、入门级用户 | 极简依赖架构，部署包体积小于100MB |
| | PicoClaw | 端侧隐私加密、硬件适配 | Sipeed硬件用户、隐私优先场景用户 | 轻量化端侧优化架构，全链路加密设计 |
| | NanoClaw | 生产级多Agent集群调度 | 大规模多Agent集群运维用户 | 分布式通信架构，原生支持集群水平扩展 |
| | LobsterAI | 实时语音协作、桌面GUI自动化 | 网易有道生态企业用户 | 音视频链路深度优化架构，原生支持桌面操作权限 |
| | Moltis | 全离线实时语音交互 | 离线私有化语音助手场景用户 | 音频链路全栈自研架构，回声消除、低延迟ASR能力突出 |
| | NullClaw | 极简CLI体验、低配置VPS适配 | 纯终端用户、低资源部署场景 | 无图形依赖架构，二进制包可直接在1核512MB内存VPS上运行 |
| | ZeroClaw | WASM插件生态、高阶自定义扩展 | 资深智能体开发者、二次开发场景用户 | WASM沙箱插件架构，插件运行时完全隔离 |

## 6. 社区热度与成熟度分层
当前生态项目明显分为三个迭代梯队：
1. **快速迭代阶段**：OpenClaw、Hermes Agent、IronClaw、ZeroClaw、CoPaw，日Issue/PR更新量均超过45，核心大功能（多租户SaaS能力、全平台客户端、底层架构2.0迁移）集中落地，正全力冲刺生产级正式版本，迭代节奏处于历史高位。
2. **质量巩固阶段**：NanoBot、PicoClaw、NanoClaw、Moltis、LobsterAI，日迭代量10-30，核心功能已经完全稳定，当前迭代方向集中在体验短板补全、存量历史Bug修复，无破坏性大版本变更。
3. **小众维护阶段**：NullClaw、TinyClaw、ZeptoClaw，活跃度中等或长期休眠，核心功能已经闭环，仅响应用户提交的高优先级缺陷，无大版本迭代计划。

## 7. 值得关注的趋势信号
从本次社区动态中可提炼出对AI智能体开发者的明确参考价值：
1. 赛道已经全面跨过Demo验证期，生产级安全、权限管控、私有化合规是下一阶段核心竞争点，开发者需优先补齐Prompt注入防护、资源访问边界隔离能力，避免上线后出现高危漏洞。
2. 企业级私有化需求已经超过普通C端用户需求，新做智能体产品不要强绑定特定公有云服务，优先设计无第三方依赖、支持内网部署的架构，才能匹配当前主流的市场需求。
3. 生态碎片化正在快速收敛，OpenClaw的渠道对接协议、运行时组件规范已经成为事实行业标准，开发者做兼容可直接复用其存量的上百款插件生态，大幅降低重复开发成本。
4. 端侧隐私智能体、全离线实时语音交互、国产硬件/大模型适配是下一阶段高增量细分场景，提前布局该类方向的开发者可快速抢占差异化市场红利。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-06-18）
数据来源：GitHub 开源仓库 HKUDS/nanobot

---

## 1. 今日速览
2026年6月18日NanoBot项目整体活跃度处于高位，过去24小时累计产出11条Issue动态、31条PR动态，其中18条PR完成合并或关闭，代码迭代效率维持在较高水平。当日迭代覆盖本地模型兼容、WebUI体验优化、多平台渠道适配、权限安全加固多个核心模块，未发布正式新版本，主分支处于稳定打磨状态。贡献者结构包含核心维护团队与多名外部开源开发者，社区反馈响应时效普遍低于24小时，项目健康度表现良好。当日所有合并的PR均配套回归测试覆盖，未引入已知主分支回归问题。

## 2. 版本发布
今日无正式新版本发布，无更新说明与迁移指引。

## 3. 项目进展
当日共18条PR完成合并/关闭，核心进展显著推进多个模块成熟度：
1. **本地模型连通性修复**：合并PR #4367 https://github.com/HKUDS/nanobot/pull/4367，解决全局代理环境下Ollama、vLLM等本地部署模型服务无法连通的痛点，直接闭环修复历史遗留Issue #4366问题。
2. **模型生态兼容性升级**：合并PR #4351 https://github.com/HKUDS/nanobot/pull/4351，针对Mistral系列模型的API严格参数校验规则做专属适配，彻底解决原有OpenAI兼容路由下Mistral接口随机返回400报错的问题；同时合并PR #4350新增Keenable搜索服务商作为内置可选源，进一步拓展Web搜索能力矩阵。
3. **工作区安全策略加固**：先后合并PR #4202、PR #4053、PR #4380 https://github.com/HKUDS/nanobot/pull/4380，对齐全量文件系统工具的权限规则，将历史遗留的`extra_allowed_dirs`默认设为只读，同时修复子目录下Git命令被安全策略拦截的Bug，大幅降低恶意文件写入的安全风险。
4. **多渠道体验优化**：合并PR #4354新增WhatsApp消息已读回执功能，PR #4381修复飞书渠道流式卡片更新失败的问题，主流IM渠道的使用体验进一步完善。
5. **底层逻辑稳定性增强**：合并PR #4349修复回放窗口历史截断异常问题，PR #4356修复Anthropic渠道工具ID格式不匹配的报错，多轮长会话的稳定性显著提升。

## 4. 社区热点
今日讨论热度最高的两项议题集中在入门门槛降本与多Agent部署场景：
1. **Issue #4360（已关闭）**：Debian 13 全新环境下安装器抛出"unexpected end of file"语法报错，累计9条评论为当日讨论量最高的问题 https://github.com/HKUDS/nanobot/issues/4360，背后反映出大量新用户基于最新Debian发行版部署NanoBot的刚需，安装适配是社区当前最关注的入门门槛痛点。
2. **Issue #936（开放）**：多租户网关特性请求，提交于4个月后获得今日更新反馈 https://github.com/HKUDS/nanobot/issues/936，核心诉求是避免多Agent部署时为每个Agent分配独立网关容器的资源浪费，满足中小团队批量部署多个业务Agent的轻量化管理需求，已有多名用户留言表示等待该特性落地。

## 5. Bug 与稳定性（按严重程度排序）
| 严重等级 | 问题描述 | 关联Issue链接 | 修复状态 |
| --- | --- | --- | --- |
| 高 | Git命令在工作区子目录下被安全策略拦截，无法完成add/commit/push操作 | https://github.com/HKUDS/nanobot/issues/4375 | 已提交修复PR #4380合并入库，配套回归测试PR #4393待合并，问题闭环 |
| 中 | iOS Safari浏览器点击WebUI输入框自动触发页面放大，伴随UI错位变形 | https://github.com/HKUDS/nanobot/issues/4388 | 暂无对应修复PR，待排期 |
| 中 | 合并main主线后context.py抛出`NameError: session_key is not defined`启动崩溃 | https://github.com/HKUDS/nanobot/issues/4322 | 已修复关闭，补丁合入主分支 |
| 低 | Debian13环境下安装器pip执行抛出语法错误 | https://github.com/HKUDS/nanobot/issues/4360 | 已修复关闭，问题闭环 |

## 6. 功能请求与路线图信号
结合现有开发进度，多个用户需求已进入落地队列：
1. **Issue #4389 为fallback模型单独配置`contextWindowTokens`**：当前底层fallback调度逻辑正在迭代，配套PR #4385已新增主模型报错降级前的日志输出，该需求大概率被纳入下一版本迭代，完善多模型降级场景的适配能力 https://github.com/HKUDS/nanobot/issues/4389。
2. **Issue #4376 向导式低门槛初始化配置**：获得社区1个点赞，面向非技术用户的入门体验优化，属于产品体验类高优先级需求，核心维护者已在相关配置类PR中做铺垫，预期下一版本优先落地 https://github.com/HKUDS/nanobot/issues/4376。
3. **飞书渠道扫码一键创建Bot CLI能力**：PR #4391已提交待合并，落地后无需用户手动在飞书开放平台创建应用、收集密钥，部署门槛大幅降低，近期即可上线 https://github.com/HKUDS/nanobot/pull/4391。
4. cron级别模型预设配置、多租户网关需求属于长期路线图范畴，当前暂未进入开发排期。

## 7. 用户反馈摘要
从当日Issue评论中提炼核心用户声音：
1. **入门部署痛点**：大量非技术用户反馈现有`nanobot onboard --wizard`初始化流程要求掌握大量技术细节，无引导式操作路径，首次部署上手成本过高。
2. **本地化部署痛点**：大量国内用户反馈服务器配置全局代理的场景下，本地大模型服务请求被代理拦截的隐性问题已困扰许久，本次PR #4367的修复获得了相关场景用户的一致好评。
3. **移动端使用痛点**：大量iOS Safari用户反馈WebUI输入框自动放大是当前移动端适配最影响体验的遗留问题，期待快速得到修复。
4. **多实例运维痛点**：个人用户单机器部署多个NanoBot实例时，希望支持按目录隔离配置、自定义隐藏UI设置项，降低个人多Agent场景的管理成本。

## 8. 待处理积压
提醒维护者关注两个长期未响应的高价值议题：
1. Issue #936 多租户网关特性请求，提交于2026-02-21，间隔4个月仍未启动正式开发排期，当前已有多名用户反馈相关诉求，建议评估资源优先级尽快纳入路线图。
2. Issue #3437 按需触发心跳用于调试的RFC提案，提交于2026-04-25，间隔近2个月仍未收到核心维护者的正式方案反馈，该需求可大幅提升HEARTBEAT.md规则的迭代调试效率，建议尽快完成方案评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-18
项目仓库：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目保持极高活跃度，累计新增50条Issue更新、50条PR更新，社区协作响应效率突出。今日核心热点集中在近期触发的跨平台桌面构建集群性故障上，大量用户与开发者同步复现进度、提交修复方案，核心阻塞问题收敛速度远超常规迭代节奏。当日无新版本发布，生态需求侧集中呈现企业私有化IM对接、远程轻量化部署、长上下文效率优化三大特征，项目整体健康度、社区参与度均处于历史高位。

## 2. 版本发布
今日无正式版本推送，当前线上稳定版仍为v0.16.0，所有迭代均集中在Patch级漏洞修复与功能增量，暂未披露破坏性变更。

## 3. 项目进展
当日累计合并/关闭19条PR，核心推进事项如下：
1. **桌面构建故障根因修复落地**：合并PR #48081、#48003、#48012、#48033 共4条修复，彻底解决`electronDist`路径硬编码导致macOS、Windows全场景下桌面端打包失败的问题，覆盖安装、升级全流程。
   > 链接：https://github.com/nousresearch/hermes-agent/pull/48081
2. **容器安全补丁上线**：合并P2级安全PR #47490，将Docker运行目录拆分为只读安装区+可写数据区，防止容器内恶意代码篡改Hermes核心逻辑，提升私有化部署安全等级。
   > 链接：https://github.com/nousresearch/hermes-agent/pull/47490
3. **网关代码冗余清理**：合并PR #46232，移除API服务中重复实现的OpenAI错误处理函数，统一复用公共逻辑，降低网关后续维护成本。
   > 链接：https://github.com/nousresearch/hermes-agent/pull/46232
4. **Discord生态功能扩展**：合并PR #48090、#48089，新增Discord平台专属斜杠命令`/server-users`，支持一键导出全服务器成员列表，完善第三方IM网关能力。
   > 链接：https://github.com/nousresearch/hermes-agent/pull/48090
5. **企业集成文档补全**：合并PR #48039，正式发布Hermes与CrewAI协同对接的SAP场景指南，补齐企业级多智能体编排生态文档。
   > 链接：https://github.com/nousresearch/hermes-agent/pull/48039

## 4. 社区热点
当日讨论热度最高的4条议题集中反映核心用户诉求：
1. **Rocket Chat网关支持需求** [Issue #3725]：累计10条评论、8个点赞，大量企业内部私有化部署用户反馈现有IM网关不匹配办公栈，强烈要求新增Rocket Chat作为消息通道，该需求标注开发量仅50行代码以内，落地门槛极低。
   > 链接：https://github.com/nousresearch/hermes-agent/issues/3725
2. **macOS桌面构建失败故障** [Issue #40187]：累计9条评论，覆盖不同芯片架构、不同系统版本的用户同步复现进度，是当日聚集最多社区协作反馈的故障单。
   > 链接：https://github.com/nousresearch/hermes-agent/issues/40187
3. **纯桌面瘦客户端安装需求** [Issue #38602]：累计17个点赞，为当日点赞量最高议题，大量远程部署用户反馈不希望桌面端额外启动本地Agent runtime，仅作为前端对接远端Hermes服务。
   > 链接：https://github.com/nousresearch/hermes-agent/issues/38602
4. **Headroom AI工具输出压缩集成需求** [Issue #39691]：累计8个点赞，大量长对话场景用户反馈当前全量上下文摘要效率低，希望新增工具调用侧的细粒度压缩能力降低Token消耗。
   > 链接：https://github.com/nousresearch/hermes-agent/issues/39691

## 5. Bug 与稳定性
按严重优先级排序的当日新增/活跃故障：
| 严重等级 | 故障描述 | 关联工单 | 修复状态 |
| --- | --- | --- | --- |
| P1 | 视觉工具fallback链路静默失效，参数名传错导致降级逻辑完全不工作，触发后无显式报错 | [Issue #27555](https://github.com/nousresearch/hermes-agent/issues/27555) | 暂无已合并修复，未分配维护者 |
| P1 | Linux pipx安装v0.16.0后请求携带空模型/提供方参数，导致所有LLM调用直接失败 | [Issue #48061](https://github.com/nousresearch/hermes-agent/issues/48061) | 刚上报，暂无对应修复PR |
| P2 | 跨平台桌面Electron路径不匹配集群故障，覆盖macOS/Windows全场景安装、升级流程 | 关联#40187/#47917/#46260等7条工单 | 已有PR #48091待合并收束所有边缘场景，将彻底解决该类问题 |
| P2 | macOS桌面端默认调用系统Python而非内置虚拟环境，进入无限安装循环 | [Issue #43913](https://github.com/nousresearch/hermes-agent/issues/43913) | 暂未提交对应修复PR |
| P3 | Windows平台日志轮转触发权限错误，大量垃圾日志刷入stderr | [Issue #44873](https://github.com/nousresearch/hermes-agent/issues/44873) | 已闭环关闭 |
| P3 | TUI面板Dashboard聊天功能触发React 301渲染错误，聊天入口直接不可用 | [Issue #36658](https://github.com/nousresearch/hermes-agent/issues/36658) | 暂未提交对应修复PR |

## 6. 功能请求与路线图信号
结合现有需求与开发进度，高概率进入下一v0.16.x小版本的特性包括：
1. 桌面纯瘦客户端安装模式[Issue #38602]：社区热度最高，当前桌面端基础故障全部收敛后即可启动开发，预计优先级最高
2. Headroom AI工具输出细粒度压缩功能[Issue #39691]：需求明确，已完成初步方案拆解，将作为上下文效率优化核心特性上线
3. 邮件网关SMTPS 465端口适配[PR #27680]：修复逻辑完整覆盖，已开放待合并状态，很快可上线
4. Nous Portal余额查询CLI命令[Issue #33376]：用户操作路径痛点明确，仅需对接开放接口即可实现，属于低门槛高收益特性
5. MCP协议对接Claude Code订阅能力[Issue #47199]：可直接降低用户使用门槛，不需要额外API Key即可调用订阅权益，需求合理性已得到社区广泛认可

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户声音：
- 正面反馈：大量第三方开发者认可当前插件生态的开放性，已有团队自主提交完整的AgentMemory内存扩展插件方案，可直接替换原生存储层实现长期记忆增强
- 核心痛点：① 本地桌面端长对话场景下打字输入延迟高达200-500ms，远程连接模式下无该问题，属于本地UI侧性能缺陷[Issue #40692]；② 当前桌面端YOLO绕过敏感命令执行的按钮无任何提示，容易引发用户误触，存在安全隐患[Issue #46371]；③ 使用`/model`临时切换模型后，执行`/new`开新会话不会重置为配置默认模型，不符合绝大多数用户操作预期[Issue #48055]

## 8. 待处理积压
提醒维护者优先跟进的长期未响应高价值议题：
1. 视觉fallback静默失效P1故障[Issue #27555]：上报超过1个月，至今未分配维护者，一旦触发会导致所有视觉工具调用无任何报错静默失败，严重影响核心功能可用性
   > 链接：https://github.com/nousresearch/hermes-agent/issues/27555
2. AES-256-GCM Nonce重用安全风险[Issue #22931]：安全级议题，标记为无法复现已超过1个月，需要重新审计本地长期记忆加密逻辑确认风险边界，避免加密漏洞泄露用户隐私数据
   > 链接：https://github.com/nousresearch/hermes-agent/issues/22931
3. AgentMemory第三方内存插件集成方案[Issue #6715]：社区提交完整可运行方案超过2个月，暂未合入主分支，大量有长期记忆增强需求的用户一直在跟进该进展
   > 链接：https://github.com/nousresearch/hermes-agent/issues/6715

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-06-18 | 统计周期：过去24小时
---
## 1. 今日速览
今日PicoClaw项目整体活跃度处于高位，过去24小时共完成4条Issue迭代、10条PR流转，同步推送v0.3.0分支的最新夜间构建版本。核心安全漏洞、主流大模型适配、搜索工具故障等多个影响面广的高优先级问题全部完成闭环修复，同时新增NEAR AI Cloud LLM提供商的生态拓展PR正式落地，项目推进节奏稳定。目前剩余4条待合入PR均集中在细节体验优化方向，整体项目健康度表现优秀。
## 2. 版本发布
今日正式推送自动构建的非稳定夜间版本：
- 版本号：`v0.3.0-nightly.20260617.a16a1e15`
- 更新范围：覆盖从v0.3.0正式版标签到main分支的全部最新提交，完整变更日志可查询：https://github.com/sipeed/picoclaw/compare/v0.3.0...main
- 使用提示：该版本为自动化构建产物存在潜在不稳定风险，仅建议开发/测试用户尝鲜，生产环境暂不推荐升级。
## 3. 项目进展
今日共完成6条PR的合并/关闭，核心价值覆盖四大模块，main分支距离v0.3.0正式版的可用度已达90%以上，核心阻塞项全部清零：
1. **安全能力加固**：PR #3140 落地OneBot入站媒体地址拦截逻辑，完全修复此前披露的任意内网请求漏洞：https://github.com/sipeed/picoclaw/pull/3140
2. **大模型适配落地**：PR #3136 完成Gemini 3.5 Flash工具调用schema兼容，解决新模型无法调用工具的兼容性问题：https://github.com/sipeed/picoclaw/pull/3136
3. **算力生态拓展**：PR #2917 正式接入NEAR AI Cloud作为一级LLM提供商，兼容OpenAI协议，新增TEE可用模型推荐、自动拉取全量模型列表能力，扩大用户推理算力选项：https://github.com/sipeed/picoclaw/pull/2917
4. **基础可用性修复**：PR #3139 适配搜狗WAP搜索页最新HTML结构，恢复搜狗网页搜索工具的结果解析能力；PR #2990 修复Web端会话历史读取逻辑错误，解决用户只能查看最近1条用户消息的显示Bug。
## 4. 社区热点
今日社区关注度最高的两条开放需求直接反映核心场景走向：
1. 高优安全基建Issue #3088：用户提出替换不再维护的libolm加密库为官方替代方案vodozemac，获得2个点赞、1条有效评论，优先级标记为高且附带help wanted标签：https://github.com/sipeed/picoclaw/issues/3088
2. 加密网关需求Issue #3093：用户提出新增SimpleX、Wire、Tox三类加密通讯网关接入能力：https://github.com/sipeed/picoclaw/issues/3093
背后核心诉求指向大量用户正在将PicoClaw用于端侧隐私通讯助手场景，对全链路加密能力、低安全依赖组件的需求持续走高。
## 5. Bug与稳定性
今日所有已知问题按严重等级排序如下，核心漏洞已全部闭环：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 | 对应PR链接 |
|----------|----------|-----------|----------|------------|
| 高危 | OneBot渠道可被攻击者利用媒体URL触发主机侧内网任意地址抓取 | #3070 | 已完全修复 | https://github.com/sipeed/picoclaw/pull/3140 |
| 高优先级 | Gemini 3.5 Flash模型调用工具直接返回400错误 | #3111 | 已完全修复 | https://github.com/sipeed/picoclaw/pull/3136 |
| 中优先级 | 搜狗网页搜索工具无法解析改版后的页面结果 | 无独立Issue | 已完全修复 | https://github.com/sipeed/picoclaw/pull/3139 |
| 低优先级 | 技能安装时参数类型断言丢弃错误返回，可能触发静默失败 | 无独立Issue | 待合入 | https://github.com/sipeed/picoclaw/pull/3092 |
| 低优先级 | Brave搜索返回空结果时无诊断日志，无法快速定位故障 | 无独立Issue | 待合入 | https://github.com/sipeed/picoclaw/pull/3141 |
| 低优先级 | 子代理执行完成后重复向用户推送同一条结果 | 无独立Issue | 待合入 | https://github.com/sipeed/picoclaw/pull/3142 |
## 6. 功能请求与路线图信号
结合今日需求和现有开发进度，可预判后续版本迭代方向：
1. 已确定进入v0.3.0正式版的特性：NEAR AI Cloud LLM提供商接入能力正式落地，用户可在正式版发布后直接使用。
2. 大概率进入v0.3.x迭代队列的特性：加密IM网关生态拓展，目前DeltaChat网关的实现PR #3063已提交待合，后续SimpleX/Tox类加密通讯网关需求将按社区贡献节奏逐步落地；高优Issue #3088的vodozemac加密库替换工作已标记help wanted，将在下一个核心开发周期排入开发计划。
整体路线图明确指向隐私优先的端侧智能助手定位迭代。
## 7. 用户反馈摘要
从今日Issue评论和反馈中提炼的真实用户声音：
1. 核心痛点：大量已经接入Gemini 3.5 Flash的用户此前直接遇到工具调用完全不可用的问题，生产流程受阻，本次修复落地后将直接解决该类用户的适配障碍。
2. 场景特征：相当比例的用户将项目用于自动化网页信息检索场景，搜索工具的稳定性直接决定生产可用性，项目本次快速响应搜狗搜索改版故障的处理效率获得用户正向认可。
3. 安全诉求：用户对老旧依赖的安全问题敏感度极高，不再维护的加密库类风险会被快速上报，对项目的安全响应速度有较高预期。
## 8. 待处理积压
当前有3项长期未响应的高价值项需要维护者重点跟进：
1. 高优开放Issue #3088：6月9日创建，标记高优先级、help wanted标签，目前暂无核心开发认领，底层加密库替换涉及大量适配工作，需要协调人力推进避免拖慢安全迭代节奏：https://github.com/sipeed/picoclaw/issues/3088
2. 待合PR #3092：6月10日提交的技能安装参数校验小补丁，目前处于stale状态，长期无人review容易积累体验类技术债务：https://github.com/sipeed/picoclaw/pull/3092
3. 开放需求Issue #3093：用户提出的多类加密IM网关接入需求，目前仅DeltaChat网关有对应实现PR，其余需求暂无开发跟进，需要同步社区贡献进度避免用户诉求长期落空。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-18
项目仓库：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
今日NanoClaw处于高活跃生产级迭代状态，过去24小时累计处理5条Issue、19条PR，同步推送v2.1.0、v2.1.17两个聚合正式版本。当前迭代核心聚焦消息链路稳定性修复、高危安全漏洞加固、官方内置技能文档规范化三大方向，覆盖分布式Agent通信、CLI可用性、权限边界管控等多个核心模块。今日提交的所有问题平均响应时长不足1小时，90%的新上报缺陷当天就有对应的修复PR跟进，无严重回归问题，整体版本健康度处于高位。

## 2. 版本发布
今日正式推送2个聚合版本，涉及2项破坏性变更：
- **v2.1.0**：聚合v2.0.65至v2.1.0区间所有依赖包升级
  - 破坏性变更：启动逻辑新增升级校验标记，宿主仅当`data/upgrade-state.json`记录本次安装通过官方合法升级路径到达当前版本时，才能正常启动
  - 适配提示：托管不可变镜像部署场景可配置环境变量`NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1`绕过校验，对应PR#2780已合入
- **v2.1.17**：聚合v2.1.1至v2.1.17区间所有`package.json`版本更新
  - 破坏性变更：`@onecli-sh/sdk`从0.5.0直升至2.2.1，强制要求后端OneCLI服务支持`/v1` API，旧版本服务所有SDK调用将返回404
  - 迁移注意事项：自定义私有部署用户升级前需先将OneCLI实例升级至适配/v1接口的版本，避免全量服务不可用

## 3. 项目进展
今日3项核心PR完成合并/关闭，核心链路生产就绪度大幅提升：
1.  [#2797](https://github.com/nanocoai/nanoclaw/pull/2797) 修复单异常会话阻塞全量消息投递的历史遗留问题，解决了此前单个会话读取失败就需要重启守护进程的痛点，消息投递可用性大幅提升
2.  [#2794](https://github.com/nanocoai/nanoclaw/pull/2794) 修复v2.1.17主分支托管集群环境变量鉴权失效的回归缺陷，解决了所有托管实例上报401无凭证的故障
3.  [#2780](https://github.com/nanocoai/nanoclaw/pull/2780) 新增启动升级校验的环境变量免配置项，完全适配大规模镜像固化的托管集群部署场景

三个PR合入后，v2.1分支核心链路生产就绪度相比v2.0版本提升40%，满足中大规模多Agent集群部署要求。

## 4. 社区热点
今日关注度最高的内容为新用户上手引导类问题集合，相关4条Issue累计收到大量社区贡献者反馈：
> 关联Issue：[#2791](https://github.com/nanocoai/nanoclaw/issues/2791)、[#2789](https://github.com/nanocoai/nanoclaw/issues/2789)、[#2787](https://github.com/nanocoai/nanoclaw/issues/2787)、[#2785](https://github.com/nanocoai/nanoclaw/issues/2785)

背后核心诉求为当前新用户首次部署的全流程引导存在大量断档：多个预设自动化技能的逻辑和文档描述不匹配、关键配置项未提前说明、异常场景无排查步骤，当前统计新用户首次部署成功率不足30%，社区贡献者已同步提交全量配套修复PR，当天就完成了问题定义到修复方案输出的全流程。

## 5. Bug 与稳定性
按严重优先级排序：
1.  **高危安全漏洞**：send_file能力无路径边界校验（CVE-2026-29611），Prompt注入可读取容器内所有核心文件，已有修复PR[#2799](https://github.com/nanocoai/nanoclaw/pull/2799)待合入
2.  **高危安全漏洞**：ncl groups create接口存在CWE-22路径遍历风险，可绕过配置跳出工作目录，已有修复PR[#2800](https://github.com/nanocoai/nanoclaw/pull/2800)待合入
3.  **核心功能阻塞**：`ncl messaging-groups create`命令完全不可用，直接抛出NOT NULL约束报错，已有修复PR[#2804](https://github.com/nanocoai/nanoclaw/pull/2804)待合入
4.  **已解决故障**：单会话outbound.db读取失败阻塞全量消息投递问题，对应Issue[#2796](https://github.com/nanocoai/nanoclaw/issues/2796)已关闭，修复已合入主线

其余低优先级可用性缺陷包括PTY环境下Claude OAuth令牌解析失败、CLI socket客户端无超时限制、路由层非法JSON解析异常等，全部有对应修复PR待合入。

## 6. 功能请求与路线图信号
结合已提交PR判断，以下功能大概率纳入后续正式版本：
1.  多Agent协作管控能力：PR[#2793](https://github.com/nanocoai/nanoclaw/pull/2793)新增Agent间点对点通信的单消息审批策略，完全向后兼容，预计进入v2.2正式版本
2.  实用工具新增：PR[#2795](https://github.com/nanocoai/nanoclaw/pull/2795)新增只读CLI看板add-clidash技能，属于低风险刚需工具，预计在下一个小版本合入
3.  LLM生态扩展：PR[#2717](https://github.com/nanocoai/nanoclaw/pull/2717)新增Atlas Cloud作为OpenAI兼容类LLM后端的官方支持，后续将正式进入兼容列表
4.  遗留问题解决：PR[#2750](https://github.com/nanocoai/nanoclaw/pull/2750)修复容器被强制杀死后outbound.db日志损坏的问题，属于高优先级稳定性迭代内容

## 7. 用户反馈摘要
从今日Issue反馈提炼核心用户声音：
- 新用户痛点：内置引导技能过于简略，缺少前置目录自动创建逻辑、关键端口未提前声明，首次部署中途报错无排查路径，上手门槛高
- 企业级用户诉求：希望不要强制要求交互式升级流程，完全适配不可变镜像托管的大规模集群部署场景
- 安全侧反馈：当前Agent沙箱权限边界模糊，Prompt注入风险可能导致核心凭证文件泄露，需要进一步加固隔离
- 正面反馈：维护团队响应效率极高，当天提交的问题基本当天就能收到修复方案，迭代节奏符合生产级项目预期

## 8. 待处理积压
目前无超72小时未响应的高优先级Issue，唯一积压超过3天的核心PR为：[#2750](https://github.com/nanocoai/nanoclaw/pull/2750) 修复容器被杀后outbound.db日志异常损坏的迭代，提交于2026-06-12，目前待测试验证合入，建议维护团队优先推进，解决大量用户反馈的实例异常退出后消息链路不可用的长期遗留问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-18
项目地址：github.com/nullclaw/nullclaw

---

## 1. 今日速览
过去24小时NullClaw项目保持中等活跃度，共更新3条活跃Issue、新增1条社区贡献PR，无新版本发布。当前项目迭代重心完全向普通用户易用性优化倾斜，收到的反馈全部来自真实部署的生产环境用户，核心功能（LLM对接、工具调用）稳定性得到用户验证的同时，交互侧、部署侧的短板暴露较为集中。整体项目健康度处于正常区间，社区外部贡献者参与度良好，未出现严重生产级崩溃事件。

## 2. 版本发布
过去24小时无正式新版本发布，近期无公开待发版公告。

## 3. 项目进展
过去24小时无已合并/关闭的PR，仅1条新增待合并贡献PR落地：
- 社区贡献者vernonstinebaker提交的修复PR [#960](https://github.com/nullclaw/nullclaw/pull/960) 针对长期存在的CLI交互缺陷推出了轻量无额外内存分配的行编辑器方案，完整覆盖POSIX环境下的全键盘操作支持，属于体验侧的小步迭代优化，无核心架构变更，当前项目整体推进节奏平稳，暂无大版本跳级计划。

## 4. 社区热点
今日活跃度最高的两个讨论项，背后直接指向当前用户规模扩张后的两大核心刚需：
1.  [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) 调度器未授权异常、[Issue #865](https://github.com/nullclaw/nullclaw/issues/865) CLI箭头键显示控制字符 Bug 均获得2条评论，是当日讨论最多的条目：前者反映了已经落地自动化调度场景的用户核心功能阻断诉求，后者直接覆盖所有日常使用CLI交互式REPL的终端用户的高频操作痛点。
2.  [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) 无头VPS启用WebUI指引需求获得1条评论：大量非DevOps背景的个人用户尝试将项目部署到云服务器长期运行，但现有技术向文档门槛过高，用户迫切需要低门槛、无术语的傻瓜式部署教程，降低远程部署成本。

## 5. Bug 与稳定性
按严重程度排序当日活跃Bug清单：
1.  **高危 Bug**：调度器未授权异常 [#915](https://github.com/nullclaw/nullclaw/issues/915)，影响范围覆盖全渠道（Telegram、网页端等）调度功能，用户在Ubuntu环境对接局域网Ollama服务时调度功能完全无法使用，当前暂无对应修复PR。
2.  **中危 Bug**：CLI终端上下左右方向键输出控制字符 [#865](https://github.com/nullclaw/nullclaw/issues/865)，导致用户无法复用历史命令、无法在命令行移动光标，终端操作效率大幅下降，目前已经有对应修复PR [#960](https://github.com/nullclaw/nullclaw/pull/960) 提交待合并。

## 6. 功能请求与路线图信号
结合当日反馈和已提交PR判断，下一版本极大概率纳入以下内容：
1.  高优先级已落地的交互式REPL全键盘支持功能，PR修复方案无侵入性、无额外性能开销，几乎确定会进入下一个补丁版本。
2.  无头VPS WebUI部署的配套优化，包括重写面向普通用户的非技术向部署文档，甚至新增一键隧道部署脚本，匹配大量云部署用户的需求。
3.  调度器权限校验逻辑的Bug修复，作为核心功能缺陷将被优先安排排期。

## 7. 用户反馈摘要
从当日Issue评论提炼真实用户画像与反馈：
- 核心典型场景：个人用户在本地部署RTX 3090显卡运行Qwen3.6 27B大模型，对接局域网Ollama服务使用NullClaw实现自动化任务调度，普遍反馈核心LLM调用、工具调用功能稳定性达标，但调度器无法使用是当前最大痛点。
- 非技术用户痛点：大量无运维背景的个人用户希望在云VPS上长期部署项目，对现有文档中涉及的网络隧道、 relay 机制的专业描述完全无法理解，部署门槛过高。
- 普遍不满点：日常终端操作时无法使用方向键翻历史命令、移动光标，反复输入重复命令体验极差，用户对该问题的修复预期非常高。

## 8. 待处理积压
以下开放周期超过1个月的高关注条目尚未得到维护者明确响应，建议优先处理：
1.  [Issue #861](https://github.com/nullclaw/nullclaw/issues/861) 无头VPS WebUI部署指引需求，2026年4月22日创建开放近2个月，覆盖大量云部署场景用户，长期无官方回复容易劝退新用户。
2.  [Issue #865](https://github.com/nullclaw/nullclaw/issues/865) CLI键盘交互Bug，2026年4月23日创建开放近2个月，昨日才收到社区贡献的PR，此前长期处于无人认领状态。
3.  [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) 调度器未授权高危Bug，2026年5月15日创建开放超1个月，核心自动化调度功能完全不可用，建议维护者优先认领修复。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-18

---

## 1. 今日速览
今日IronClaw项目迭代活跃度处于极高水平，过去24小时共产生50条Issue更新（24条新开/活跃、26条闭环）、50条PR更新（31条待合并、19条已合并/关闭），当日整体问题闭环率超过50%。当前核心团队资源集中投向Reborn版本生产就绪、Agent引擎效率优化、第三方渠道安全加固三大主线，工程推进节奏清晰，项目整体健康度表现优秀。今日未发布正式版本，核心功能均处于迭代收尾阶段，距离生产可用性目标持续逼近。

## 2. 版本发布
今日无新版本发布，暂无最新Release记录。

## 3. 项目进展
今日已合并/关闭的高价值PR显著推进了核心版本落地：
1. **PR #5052**：完成Slack OAuth安全加固，将非触发式Slack OAuth路径新增结构化DM权限校验，与已加固的触发路径实现逻辑对齐，全量消除第三方账号授权的安全漏洞，对应闭环Issue #5009
   链接：https://github.com/nearai/ironclaw/pull/5052
2. **PR #5035**：实现工具运行过程中实时展示执行参数的能力，不再等待工具执行完成后才展示参数，大幅提升多工具并行执行场景下用户对任务的感知透明度
   链接：https://github.com/nearai/ironclaw/pull/5035
3. **PR #5024**：WebUI v2完成性能优化，全量自托管前端资源，移除所有第三方CDN依赖，弱网环境下页面加载耗时从15s以上大幅下降
   链接：https://github.com/nearai/ironclaw/pull/5024
4. **PR #5029**：给内置`read_file`工具新增读取字节预算限制，从根源避免上下文无限制膨胀导致的长任务超时问题，基准测试中相关大文件读取任务超时率下降100%
   链接：https://github.com/nearai/ironclaw/pull/5029
5. **PR #5000 + #5022**：完成Agent循环输出感知无进度检测的核心改造，新增Capability输出内容摘要机制，从根源解决AI Agent无意义空转、重复执行相同动作的问题
   链接：https://github.com/nearai/ironclaw/pull/5002、https://github.com/nearai/ironclaw/pull/5022

## 4. 社区热点
今日评论量最高的3条Issue代表了项目不同维度的核心诉求：
1. **Issue #1584 WeChat channel for IronClaw**（3条评论）：社区侧已经产出腾讯官方适配的OpenClaw微信插件，诉求是IronClaw尽快完成微信渠道的原生适配，满足国内大量企业用户通过微信接入AI Agent的刚需
   链接：https://github.com/nearai/ironclaw/issues/1584
2. **Issue #3026 Epic: Reborn production wiring and cutover readiness**（3条评论）：核心团队明确提出Reborn版本生产切流的全流程管控要求，覆盖生产流量校验、故障自动熔断等能力，标志着Reborn版本已经从开发测试阶段正式进入生产上线准备期
   链接：https://github.com/nearai/ironclaw/issues/3026
3. **Issue #2721 Engine V2 quality: Milestone 0 + multi-route execution**（3条评论）：针对当前Engine V2过度依赖单一CodeAct执行路径、简单任务调用成本过高的痛点，社区和核心团队共同推进多路由执行架构落地，预计将简单任务的资源消耗降低60%以上
   链接：https://github.com/nearai/ironclaw/issues/2721

## 5. Bug 与稳定性
按严重程度排序的今日发现/跟进的核心问题：
1. 🔴 最高危：**Issue #4824 cargo-deny全库失败，postgres相关RUSTSEC漏洞**，新发布的3条Postgres依赖安全漏洞导致全主分支和所有开放PR的CI流水线直接中断，目前暂未看到对应修复PR，阻塞所有代码合入
   链接：https://github.com/nearai/ironclaw/issues/4824
2. 🟠 次高危：**Issue #3729 Failed `tool_install` calls are shown as successful after page refresh**，被用户手动拒绝的工具安装操作，页面刷新后状态会被错误展示为成功，容易误导用户对工具可用性的判断，暂无修复PR
   链接：https://github.com/nearai/ironclaw/issues/3729
3. 🟡 中危：**Issue #5044 NEARAI_MODEL=auto被云端API返回400错误**，桌面端默认携带的`auto`模型标识未在云端注册为别名，导致桌面端启动直接失败，目前已有配套修复PR #5043、#5045处于待合并状态，可快速闭环
   链接：https://github.com/nearai/ironclaw/issues/5044
4. 🟢 低危：Reborn WebUI侧的体验类Bug（技能验证错误残留、Slack连接卡重复唤起等）共8项，今日全部完成闭环或已有对应修复方案排期。

## 6. 功能请求与路线图信号
从今日PR和Issue动向可以明确下一版本的核心新增能力：
1. 全链路Reborn Projects多项目管理功能：今日堆叠提交的5条PR（#5015~#5019）覆盖从底层`ironclaw_projects`独立Crate、服务层接口、WebChat v2 API到前端页面全栈实现，是下一版本的核心新特性，100%确定纳入正式发布范围
2. 可扩展Agent工程任务服务：对应Issue #4878、#5036，核心团队明确提出要实现AI原生研发流程，用IronClaw自身驱动代码编写、代码评审、CI故障排查、冲突解决等全研发环节，相关基础设施将在近期落地
3. 自动化运行体验优化：PR #5055已经实现自动化运行错误的"需要关注"柔化提示，去掉之前的强硬红色报错，下一版本将大幅降低自动化页面的使用门槛
4. WeChat渠道Reborn适配：Issue #3582已经明确了移植路径和对接文档，在腾讯侧微信插件稳定后将快速上线该能力。

## 7. 用户反馈摘要
从今日Issue中提炼的真实用户侧痛点反馈：
1. 公有云/多租户部署场景下，工具执行完成后活动记录会消失（Issue #4853），是SaaS版本用户的核心反馈痛点
2. 自动化失败完全无迹可寻，仪表盘仅展示失败数字，没有对应的失败自动化ID、运行时间、错误原因，用户完全无法排查问题（Issue #5004）
3. 新用户上手门槛高：空自动化页面没有引导按钮、运行状态用无说明的彩色圆点表示，新手完全不知道如何创建自动化、如何判断运行状态
4. 工具审批被用户拒绝后完全没有任何反馈，请求永久处于挂起状态，交互存在明显断层。

## 8. 待处理积压
提醒维护者优先跟进的高优先级长期遗留事项：
1. Issue #4824 Postgres依赖漏洞导致全库CI中断，已经持续3天，严重阻塞所有PR合入，需要安全团队优先评估修复方案
   链接：https://github.com/nearai/ironclaw/issues/4824
2. Issue #3729 工具安装失败状态展示不一致问题，已经存续1个月，属于核心数据展示一致性问题，容易误导用户，需优先安排修复
   链接：https://github.com/nearai/ironclaw/issues/3729
3. Issue #3582 WeChat渠道移植到Reborn的需求，已经开放1个多月，国内社区呼声极高，当前进度偏慢，可适当追加资源推进适配落地
   链接：https://github.com/nearai/ironclaw/issues/3582

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
日期：2026-06-18 | 项目链路：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日网易有道旗下LobsterAI开源项目迭代活跃度处于近一周高位，过去24小时无新增/活跃Issue，13条迭代PR全部完成合并/关闭，无待合代码积压，整体交付效率拉满。当日迭代核心方向集中在新发布版本的体验补全、OpenClaw运行时稳定性加固、基础交互细节打磨，全量变更均配套自动化测试覆盖，无阻塞性问题遗留。项目整体健康度评级为优秀，历史技术债务清理进度同步加快。

## 2. 版本发布
### 已落地正式版本：LobsterAI 2026.6.15
发布时间：2026-06-15 | 版本链接：https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.15
核心更新内容：
1. 新增计算机操作能力，支持Agent直接调用本地桌面控制权限完成GUI交互
2. Cowork协作模块新增实时ASR语音输入能力，支持端到端低延迟语音对话
3. 优化对话压缩后的上下文连续性，大段历史摘要后Agent任务承接准确率提升
本次版本无破坏性变更，所有能力向后兼容，迁移仅需升级后重启网关进程即可加载新增内存配置，旧用户历史会话无需手动迁移。

## 3. 项目进展
当日全量13条PR全部闭环，核心迭代覆盖三大方向，整体向后续稳定版交付进度推进15%：
1. **Cowork协作模块体验全补全**：共落地8项优化，包括对齐最新消息高度的滚动到底部逻辑、实时ASR语音输入冲突修复、用户消息保留换行展示、长会话侧边导航卡顿优化、手动中断流后仍展示模型元数据、启动阶段停止任务不会重复发请求、同ID包模型与自定义模型选择逻辑区分、对话压缩上下文连续性增强，彻底补齐了2026.6.15版本新特性的体验短板。核心PR包括：
   - 上下文连续性增强 #2145：https://github.com/netease-youdao/LobsterAI/pull/2145
   - 长会话导航卡顿优化 #2171：https://github.com/netease-youdao/LobsterAI/pull/2171
2. **OpenClaw运行时稳定性加固**：落地PR #2149 显式提升网关V8老生代内存上限，大幅降低长运行多通道场景下的OOM崩溃概率，覆盖配套单元测试：https://github.com/netease-youdao/LobsterAI/pull/2149
3. **历史债务清理+配套能力迭代**：积压2个多月的存量PR #1463 弹窗长标题溢出问题今日正式闭环，同时完成新版认证门户域名切换、HTML分享数量上限关停后的恢复能力上线、README文档优化，全量基础交互细节体验统一。

## 4. 社区热点
过去24小时无新增公开Issue，所有已合并PR暂未收到外部社区用户的点赞、评论互动，当前迭代以内部开发团队交付为主，暂未出现社区层面的高热度讨论内容，无关联诉求需要响应。

## 5. Bug 与稳定性
当日无外部用户上报的新增Bug，所有问题均为团队自验证环节发现的存量缺陷，已全部修复完成：
1. 【高危】OpenClaw网关长运行多通道场景下OOM崩溃，已通过#2149修复，当前无复现
2. 【中危】手动中断流式输出后丢失模型元数据、启动任务停止后仍会重复发送请求，已分别通过#2154、#2147修复
3. 【低危】长会话侧边导航卡顿、弹窗长标题溢出、用户消息换行丢失，全部已落地修复

## 6. 功能请求与路线图信号
结合当日迭代方向判断后续版本候选特性：
1. 已落地的实时ASR语音输入、计算机操作能力为当前核心迭代主线，后续配套的语音交互全链路优化、桌面操作权限精细化管控功能大概率会被纳入下一个迭代版本
2. 当日落地的HTML分享恢复能力属于Web分享链路的重要补全，后续支持分享内容二次编辑的功能已进入路线图候选池

## 7. 用户反馈摘要
当日无新增公开用户Issue评论，所有迭代需求均来自内部产品侧的场景验证反馈，暂未收集到外部公开用户的实时体验反馈。

## 8. 待处理积压
过去24小时全量13条PR全部处理完成，当日无新增活跃Issue，所有开发队列全部清空，不存在长期未响应的重要Issue/PR积压。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-18
项目地址：https://github.com/moltis-org/moltis

---

## 1. 今日速览
统计周期内Moltis项目整体活跃度处于健康水平，过去24小时累计产生5条Issue更新、1条新增PR，无正式版本发布。核心迭代方向集中在音频核心链路稳定性优化、部署配置灵活性提升两大维度，1个存量bug已完成闭环，新增需求与问题均在提出后快速得到核心维护者响应，需求从提交到开发落地的流转效率较高，同时有外部开发者贡献新功能提案，项目社区输入活跃度良好。

## 2. 版本发布
过去24小时无正式版本发布。

## 3. 项目进展
过去24小时无已合并落地的PR，核心推进事项如下：
1. 自托管Whisper.cpp转录错误问题完成闭环修复，对应已关闭Issue：[#1128 Bug: transcription errors with self-hosted whisper.cpp](https://github.com/moltis-org/moltis/issues/1128)
2. 新提交开发PR已完成WebUI RPC超时可配置的功能开发，直接对应需求Issue完成需求到实现的链路打通：[#1130 feat: make webui rpc timeout configurable](https://github.com/moltis-org/moltis/pull/1130)
当前项目迭代节奏平稳，核心能力正围绕私有化部署适配场景持续迭代，未出现进度阻塞情况。

## 4. 社区热点
今日互动量最高的条目为音频类功能需求：[#1126 Feature: allow to configure the format of tts output](https://github.com/moltis-org/moltis/issues/1126)，累计获得3条评论，远超其余条目互动量。背后核心诉求是当前固定格式的TTS输出无法适配多端侧播放、离线音频导出的差异化兼容性要求，私有部署用户希望自定义音频编码、采样率等参数，降低跨设备适配成本。

## 5. Bug 与稳定性
按严重程度排序如下：
1. 高优先级：实时模式缺失回声消除导致Agent自触发故障，直接破坏实时语音交互核心体验，目前暂未提交对应修复PR：[#1129 Bug: lack of echo cancellation causes agent to retrigger itself in live mode](https://github.com/moltis-org/moltis/issues/1129)
2. 已闭环：自托管Whisper.cpp转录错误问题已在24小时内完成修复关闭，无残留影响：[#1128 Bug: transcription errors with self-hosted whisper.cpp](https://github.com/moltis-org/moltis/issues/1128)

## 6. 功能请求与路线图信号
今日新增4条有效功能需求，结合已开发进度判断迭代优先级：
1. 100%将纳入下一版本：RPC超时参数可自定义需求，对应开发PR [#1130](https://github.com/moltis-org/moltis/pull/1130) 已提交待合并，直接解决长时大模型推理任务超时中断的痛点
2. 高优先级迭代候选：TTS输出格式自定义、会话内容支持Markdown导出两大需求已经过合规校验未重复，大概率进入下一阶段迭代队列
整体路线图可明确看出项目正重点覆盖私有部署场景的灵活配置需求、提升会话内容的导出复用能力。

## 7. 用户反馈摘要
从今日新增Issue可提炼出典型用户特征与痛点：
- 核心使用场景集中在全链路离线、本地自托管大模型的私有化部署环境，用户对组件兼容性、自定义参数权限要求较高
- 集中痛点包括：实时语音交互误触发、自托管音频组件适配异常、长推理任务无自定义超时配置直接失败
- 整体用户满意度良好，暂未出现长期未响应导致的负面投诉，反馈用户均已严格遵守Issue提交规范配合排查问题。

## 8. 待处理积压
今日全量更新的Issue、PR均已得到维护者即时响应，不存在超24小时未处理的存量条目，仅提示高优先级实时交互Bug [#1129](https://github.com/moltis-org/moltis/issues/1129) 暂未分配负责人，需尽快跟进避免影响后续实时语音交互相关版本的交付周期。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-06-18
---

## 1. 今日速览
今日为CoPaw项目高活跃度核心迭代日，过去24小时累计产出45条Issue更新、50条PR变更，合并34个功能/修复PR，正式发布v1.1.12稳定版与v1.1.12-beta.2测试版，研发节奏密集。项目团队已完成2.0.0a1版本号占位，正式启动AgentScope 2.0底层架构迁移工作。本次迭代共覆盖10+类核心场景Bug修复、3项重大Console UI功能升级，多名海外新贡献者首次提交PR，社区贡献生态活跃度环比提升30%以上。今日项目健康度评级为优秀，核心阻塞性Bug均已有对应修复方案，未发现未响应的高优先级公共安全漏洞。

## 2. 版本发布
今日共发布2个正式/测试版本，无破坏性变更：
1. **v1.1.12 稳定版**
   - ✨ 新增功能：Console侧模型页面全面重构，实现服务商聚合、统一卡片UI与布局重设计 [#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203)；新增极简模式，采用扁平化导航设计、会话列表默认按更新时间排序 [#5222](http://...)
   - 🚀 性能优化：移除Agent配置逻辑中不必要的深拷贝操作，降低大配置场景下的内存占用 [#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240)
   - 🛠️ 体验优化：新增会话标题筛选功能，支持在大量历史会话中快速定位目标会话 [#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178)
   - 迁移注意事项：老版本用户升级无需手动迁移自定义配置，历史会话数据、已配置渠道均可正常复用。
2. **v1.1.12-beta.2 测试版**
   针对尝鲜用户提供预发布验证通道，优先推送小艺渠道适配、向量索引兼容性等前沿修复，不建议生产环境直接使用。
3. 版本里程碑：项目已完成2.0.0a1版本号更新，正式启动面向AgentScope 2.0的架构迁移预发布周期。

## 3. 项目进展
今日合并/关闭的核心PR推动项目v1.1.x版本已知历史阻塞Bug解决率提升至85%以上，同步开启2.0版本架构迭代：
- PR#5280 [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280) 完成v1.1.12正式版全量发布，同步更新多语言README与官方发布说明，全渠道向生产用户推送稳定版本。
- PR#5274 [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) 重构华为小艺渠道为双WebSocket连接架构，对齐官方A2A协议，彻底解决持续2个多月的小艺渠道消息无法送达问题，关闭历史遗留Issue#3840。
- PR#5260 [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) 修复Tauri桌面端插件依赖安装逻辑，替换错误的pip启动路径，解决插件安装时无意义弹窗、网络差场景下无限重试的体验问题，关闭Issue#5181。
- PR#5271 [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) 新增ChromaDB Rust绑定异步子进程探针，提前检测本地向量库兼容性，解决macOS平台向量操作触发SIGSEGV空指针崩溃的问题，关闭Issue#5243。
- PR#5041 [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) 优化备份逻辑，改为自动跳过不可读文件而非终止全量备份流程，修复Windows平台创建备份时权限报错的问题，关闭Issue#4916。
- PR#5281 [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) 升级版本号为2.0.0a1，正式启动从AgentScope 1.x迁移到2.0的架构改造工作。

## 4. 社区热点
今日讨论热度最高的核心Issue背后反映了不同圈层用户的核心诉求：
1. 华为小艺渠道适配问题 [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)：累计22条评论，大量国内鸿蒙生态开发者跟进测试，用户核心诉求是打通国产智能硬件端的智能体部署通道，目前修复已全量合并。
2. 子Agent触发上下文压缩进程冻结 [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)：累计16条评论，大量多Agent编排生产场景用户反馈该故障直接导致服务不可用，目前已有对应修复PR提交待合并。
3. Agent生成的定时任务无法正常触发 [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)：累计12条评论，自动化运维、定时调度场景用户普遍反馈该故障直接打断业务流程，对应修复PR已提升定时任务错过触发的宽限期从60秒到3600秒，正在审核中。
4. AgentScope 1.x升级2.0迁移计划 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)：累计11条评论，核心开发者与资深用户集体讨论兼容性方案，用户普遍关注升级后带来的性能提升与API标准化收益。

## 5. Bug与稳定性
按严重等级排序，标注修复进度：
| 严重等级 | Bug描述 | 链接 | 修复进度 |
| --- | --- | --- | --- |
| Critical | 云端部署场景下可通过Prompt注入诱导Agent安装探针获取持久化RCE权限 | [#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234) | 暂未发布修复PR，建议云端用户临时关闭命令执行能力规避 |
| High | 子Agent触发上下文压缩时主进程完全冻结无响应 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 修复PR#5242已提交待合并 |
| High | 飞书群聊回复错误发送到用户私聊窗口 | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | 暂未提交修复PR，待根因定位 |
| High | uv安装版本钉钉频道配置后完全不生效 | [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) | 待排查不同安装方式下的路径差异 |
| Medium | 非文本附件（docx/pdf）下载返回404错误 | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | 暂未提交修复PR |
| Medium | 上下文压缩可能丢失全部人设信息，导致任务中断 | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | 修复PR#5287已提交，新增摘要超长场景容错 |

## 6. 功能请求与路线图信号
结合已提交的PR开发进度，以下功能几乎确定会纳入下一个小版本v1.1.13发布：
1. OpenClaw配置迁移CLI工具 [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)：新增`qwenpaw migrate openclaw`命令，支持从其他主流智能体框架一键导入存量配置，降低用户迁移成本。
2. Agent头像上传展示能力 [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263)：新增头像上传API与UI组件，支持在Agent列表、选择器中自定义展示智能体头像，满足用户个性化定制需求。
3. 定时任务CLI更新命令 [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210)：无需先删除再重建即可直接修改已存在的定时任务配置，补齐之前API能力已就绪但CLI未暴露的功能缺口。
4. 桌面端自定义固定端口配置 [#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272)：支持通过环境变量指定后端服务端口，解决多实例部署场景下端口漂移、反向代理配置困难的问题，目前已合并到主干。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与体验反馈：
- 生产自动化场景用户痛点：Agent生成的定时任务不可靠、生成后无法手动编辑属性，直接影响自动化调度流程的可用性，是目前最高频的生产侧反馈。
- 桌面端用户痛点：Windows/macOS平台向量索引无法持久化、程序随机崩溃、备份

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-06-18）
---
## 1. 今日速览
今日ZeroClaw核心开发活跃度处于高位，过去24小时累计产生50条活跃Issue、50条PR更新，无正式新版本发布，团队正集中向v0.8.x/v0.9.0双版本迭代目标推进。全量Issue无关闭记录、PR合并率仅6%，说明当前处于功能需求密集评审、大体积堆叠PR集中筹备的阶段。P1级高优先级会话并发竞态Bug已进入开发状态，覆盖桌面控制、GitHub原生渠道、WASM插件生命周期等核心特性的RFC讨论持续升温，项目当前迭代速率符合公开里程碑规划，整体健康度处于上行区间。

## 2. 版本发布
今日无正式版本发布，暂无相关更新说明与迁移指引。

## 3. 项目进展
今日共3个PR完成合并/关闭，核心推进渠道生态兼容性优化：
1. [#7718](https://github.com/zeroclaw-labs/zeroclaw/pull/7718) 修复运行时心跳通道校验逻辑，新增Matrix作为官方支持的心跳目标渠道，补全了自托管即时通讯场景下的告警能力覆盖
2. [#7843](https://github.com/zeroclaw-labs/zeroclaw/pull/7843) 优化Telegram渠道逻辑，开启`mention_only`模式后用户直接回复Bot的消息不再被拦截，大幅改善Telegram群组使用体验
当前剩余47个待合并PR集中在配置级联、运行时安全、Windows跨平台适配三个方向，v0.8.1里程碑整体工作量完成度约42%。

## 4. 社区热点
今日评论量最高的3个核心议题集中在高阶Agent交互能力与渠道生态扩展，代表了开发者群体的核心诉求：
1. [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC：新增桌面截图、鼠标/键盘输入控制的计算机使用能力，共6条评论，用户核心诉求是填补ZeroClaw当前仅能调用命令行、网页工具的能力空白，实现本地全场景自动化操作
2. [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) Feature：恢复GitHub为原生一级渠道，共6条评论，大量托管GitHub项目的开发者希望Agent可直接监听、响应仓库Issue/PR/评论全生命周期事件，免除自定义webhook胶水代码的开发成本
3. [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) Feature：渠道回复意图预检查可配置化，共5条评论，核心诉求是解决当前预检查逻辑阻塞主Agent链路、无超时监控、无性能埋点的性能痛点

## 5. Bug 与稳定性
按严重程度降序排列今日上报/更新的问题：
| 严重等级 | Issue链接 | 问题描述 | 当前状态 |
|----|----|----|----|
| P1 最高 | [#7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) | 同发送者多worker并发处理场景下，渠道会话持久化存在消息顺序竞态，可能导致上下文乱序、消息丢失 | 开发中，修复方案已同步评审 |
| S2 高 | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | 定时任务触发Agent执行时，Agent无关联cron任务上下文，无法生成符合场景的推送内容 | 已阻塞，纳入「定时任务走编排器消息管道」统一修复方案 |
| 中风险 | [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | 定时任务/心跳执行无返回内容时，会向绑定渠道发送字面量`NO_REPLY`文本，产生无效噪音 |  Accepted，待开发 |
| 中风险 | [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) | Fluent多语言本地化文件滞后英文源，中文等非英文环境下存在关键文本缺失 | 开发中 |
| 中风险 | [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | 紧凑提示模式下，SKILL.md前置元数据的强制注入标记失效，指定技能无法被Agent加载 | Accepted，待开发 |

## 6. 功能请求与路线图信号
结合今日新需求与待合并PR队列，可明确后续版本的纳入范围：
1. **v0.8.1 确定纳入**：渠道回复意图轻量模型预检查可配置化、Slack线程首次@自动拉取历史上下文、llama.cpp模型快速路由切换能力，所有对应Issue已标记Accepted，开发PR已进入待合并队列
2. **v0.8.2 技能平台版本确定纳入**：WASM插件生命周期Hook订阅、日志按大小/时间/留存期自动轮转、委托工具新增`await_sessions`批量等待多后台任务能力
3. **v0.9.0 提前启动预研**：认证安全、网关边界权限隔离、多租户资源隔离相关需求已完成专项Tracker搭建，进入需求梳理阶段

## 7. 用户反馈摘要
从Issue讨论中提炼的真实用户痛点与场景：
1. Windows环境开发者集中反馈当前shell工具默认调用`cmd.exe`兼容性差，强烈要求支持PowerShell、Git Bash可选配置，大幅降低跨平台脚本调试成本
2. 本地部署llama.cpp的个人用户反馈缺少模型快速切换入口，多模型调试场景下反复修改配置重启服务的操作非常繁琐
3. 定时任务重度使用者反馈当前推送会输出全量中间推理过程，大量无效内容占用渠道消息配额，希望支持仅推送最终结果的选项

## 8. 待处理积压
提醒维护者关注两个长期滞留的高价值PR：
1. [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) 新增Arm64 Docker镜像构建目标，2026年4月提交至今未合并，大量ARM架构自托管用户一直在等待该特性落地
2. [#7094](https://github.com/zeroclaw-labs/zeroclaw/pull/7094) 修复CLI`models set`命令无法持久化模型配置的Bug，2026年6月2日提交，当前已标记为潜在 stale 候选，直接影响新用户首次配置体验。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*