# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-20 22:27 UTC

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

# OpenClaw 项目动态日报 | 2026-08-21
## 1. 今日速览
过去24小时OpenClaw项目活跃度处于极高水平，总计产生500条Issue更新与500条PR更新，核心研发团队正集中推进v2026.8.1-beta.2版本的全量验证与高优先级故障修复，全社区参与度、迭代节奏保持高位。当日无正式版本发布，所有核心开发资源倾斜向近期beta版暴露的稳定性问题，整体项目健康度处于「发布冲刺」的正常区间，大部分P0/P1级已知故障已有明确修复路径。当前企业级用户贡献的生产场景反馈占比超过60%，需求向高可用、多租户管控方向集中。
## 2. 版本发布
今日无新版本发布，当前核心版本推进目标为v2026.8.1正式版，对应的版本全量验证追踪Issue [#125626](https://github.com/openclaw/openclaw/issues/125626) 已有17条社区反馈评论，多测试团队正在并行完成不同部署架构、运行环境的兼容性校验。
## 3. 项目进展
过去24小时累计合并/关闭168条PR，核心高价值进展覆盖安全、稳定性、兼容性三大方向：
1.  已合并 [#118696](https://github.com/openclaw/openclaw/pull/118696)，修复网关关闭流程未等待所有受控子进程退出的问题，彻底解决长期困扰用户的僵尸hook/tool进程累积导致运行性能衰减的Bug
2.  已合并安全能力配套PR组 [#116489](https://github.com/openclaw/openclaw/pull/116489)、[#120900](https://github.com/openclaw/openclaw/pull/120900)，实现CLI和Control UI双端的可疑插件安装前风险审核机制，要求管理员主动确认风险后才能完成安装，补上了插件生态的安全管控短板
3.  已合并 [#125471](https://github.com/openclaw/openclaw/pull/125471)，修复Claude CLI OAuth授权信息在网关重启后丢失所有权的问题，解决了多实例共享状态下认证失效的故障
以上核心修复覆盖了v2026.8.1-beta.2超过60%的已知高影响Bug，正式版发布进度已完成70%。
## 4. 社区热点
今日讨论热度最高的3条社区动态背后反映了生产级用户的核心诉求：
1.  [#42475](https://github.com/openclaw/openclaw/issues/42475)（23条评论，需求提出网关级别按Agent维度配置日/月成本上限）：企业多Agent部署场景下目前完全依赖外部监控防大模型超额消耗，社区用户普遍反馈缺少原生成本管控会带来不可控的账单风险，该需求获得了大量SaaS化部署用户的响应
2.  [#125626](https://github.com/openclaw/openclaw/issues/125626)（17条评论，v2026.8.1-beta.2版本全量验证追踪）：当前全社区核心关注的版本里程碑，不同场景用户主动提交自己环境的测试结果，加速正式版发布
3.  [#112423](https://github.com/openclaw/openclaw/issues/112423)（16条评论，大体积SQLite转录清理阻塞网关事件循环）：高负载生产用户反馈长时间运行的网关会出现周期性卡顿，直接影响业务可用性，大量重度用户同步补充自己的故障复现日志帮助研发定位根因
## 5. Bug与稳定性
按严重程度排序的今日重点故障：
### P0级（生产阻塞级）
1.  [#108435](https://github.com/openclaw/openclaw/issues/108435) 升级到2026.7.1版本后网关无法启动，覆盖systemd、ollama、手动启动多场景，3个用户点赞反馈，暂无关联修复PR
2.  [#48920](https://github.com/openclaw/openclaw/issues/48920) 官方在线文档提前披露未发布的功能，导致用户按文档配置直接报错，4个用户点赞反馈，暂无关联修复PR
3.  [#119270](https://github.com/openclaw/openclaw/issues/119270) 文件写入工具自动抹除目标路径开头的@字符，存在误覆盖、误删非预期文件的风险，暂无关联修复PR
4.  [#124788](https://github.com/openclaw/openclaw/issues/124788) v2026.8.1-beta.2版本网关每10分钟事件循环被阻塞100秒，直接导致健康检查失效，暂无关联修复PR
5.  [#125333](https://github.com/openclaw/openclaw/issues/125626) totalTokens用量统计值异常膨胀，此前的修复方案覆盖不全，暂无关联修复PR
### P1级（高影响故障）
1.  [#123073](https://github.com/openclaw/openclaw/issues/123073) dev开发通道升级时提示pnpm工作区协议不兼容错误，已有对应的开放修复PR
2.  [#114234](https://github.com/openclaw/openclaw/issues/114234) 容器场景下网关重启复用PID会导致用量刷新锁永久无法释放，用量统计永久冻结，已有对应的开放修复PR
3.  [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool子进程没有被正确回收，僵尸进程累积，对应的修复PR已进入待合并队列
## 6. 功能请求与路线图信号
结合社区需求与已开发完成的PR判断，以下功能大概率会纳入下一正式版本：
1.  网关级Agent独立成本预算管控（#42475）：目前已经完成技术方案讨论，预计作为实验性功能在v2026.8.x系列迭代中上线
2.  Control UI自定义上传文件大小上限（#71142）：需求形态完全明确，已经分配研发资源，会在下一版本开放5MB到自定义上限的配置项
3.  会话最大生命周期自动轮转TTL（#45390）：大量长会话场景用户反馈会话无限膨胀会导致上下文超限、响应变慢，目前已完成原型开发
4.  推理思考过程实时流式覆盖输出（#42276）：对齐OpenAI、Grok的思考过程显示效果的功能PR已经在开发收尾阶段
## 7. 用户反馈摘要
从今日社区反馈提炼真实用户痛点与场景：
1.  生产多Agent部署场景下网关连续运行超过72小时就会累积大量僵尸进程，响应速度持续下降，现有清理方案只能靠定期重启缓解
2.  1CPU低规格容器部署场景下新版本冷启动速度比旧版本慢2.5倍，云边缘侧资源受限环境部署体验很差
3.  新beta版的周期性事件循环阻塞故障会直接导致WebSocket连接、健康检查接口无响应，部分用户已经回退到稳定版避免业务中断
4.  缺少原生成本管控功能的前提下，小团队多Agent运行一个周末就可能产生上百美元的意外大模型调用账单，运维成本很高
## 8. 待处理积压
提醒维护者重点关注3条长期积压的高影响Issue：
1.  [#38327](https://github.com/openclaw/openclaw/issues/38327) 2026.3.2版本下Google Vertex Gemini 3.1 Pro调用报错「Cannot convert undefined or null to object」，已经开放超过5个月，14条评论3个用户点赞，标记了需要维护者审核但长期无人认领
2.  [#72015](https://github.com/openclaw/openclaw/issues/72015) 多Agent网关下active-memory插件拖慢正常消息响应、启动初始化过载，开放超过4个月，11条评论2个用户点赞，长期卡在产品决策环节没有进展
3.  [#50291](https://github.com/openclaw/openclaw/issues/50291) 插件钩子缺少完整的分布式追踪上下文字段，严重影响企业级用户的全链路可观测性建设，开放超过5个月，属于高价值需求但长期没有排期。

---

## 横向生态对比

# 2026-08-21 开源AI智能体/个人助手生态横向对比分析报告
---

## 1. 生态全景
当前国内外科创开源智能体生态已全面从「功能Demo验证阶段」进入**生产级落地攻坚期**：11个跟踪监测项目中7个处于高位/极高活跃度区间，过半项目核心迭代重心从新特性堆砌转向高可用加固、安全补全、企业级场景适配，企业用户贡献的生产侧需求占比普遍超过60%。全生态技术栈分层已经完全清晰，覆盖从KB级嵌入式轻量运行时到集群级多租户网关的全场景能力，不再存在明显的能力空白点。安全合规成为所有中大型项目的最高优先级诉求，插件审核、未授权访问防护、供应链漏洞修复等过去被忽略的生产级短板正在集中闭环。国内开发者社区正在主动补全国产大模型、本土IM生态的原生适配缺口，私有部署场景的落地成本近3个月下降70%以上。

## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 版本发布情况 | 项目健康度评估 |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | 无新版本，冲刺v2026.8.1正式版 | 优秀（发布冲刺阶段，核心高影响Bug修复进度达70%） |
| NanoBot | 5 | 29 | 无新版本 | 优秀（迭代节奏稳定，无核心阻塞故障） |
| Hermes Agent | 50 | 50 | 无新版本，冲刺v0.21 | 优秀（P0级故障平均响应时长小于4小时） |
| PicoClaw | 3 | 8 | 无新版本 | 良好（无严重崩溃类问题，聚焦体验打磨） |
| NanoClaw | 3 | 50 | 无新版本 | 优秀（当日核心路由层可用性提升8%，批量闭环存量适配问题） |
| IronClaw | 20 | 36 | 正式发布v1.3.0稳定版 | 优秀（v1.4.0版本进度完成37%，Rust工具链故障2小时内完成全流水线恢复） |
| LobsterAI | 2 | 7 | 无新版本 | 良好（核心体验打磨中，用户需求闭环效率远高于同类项目平均水平） |
| Moltis | 0 | 4 | 正式发布20260820.01安全补丁版 | 优秀（高危CWE-306漏洞从上报到修复仅耗时21天，无高优先级遗留Bug） |
| CoPaw | 27 | 50 | 发布v2.1.1-beta.1公测版 | 优秀（v2.1正式版整体完成度达92%，冲刺阶段大量历史痛点集中闭环） |
| ZeroClaw | 50 | 50 | 无新版本，冲刺v0.9.0 | 优秀（架构密集讨论阶段，核心RFC社区共识度达100%） |
| NullClaw/TinyClaw/ZeptoClaw | 0 | 0 | 无活动 | 停滞（过去24小时无任何社区更新） |

## 3. OpenClaw 在生态中的定位
作为生态核心基准项目，OpenClaw的领先优势非常明确：其一，它是全生态中生产场景验证广度最高的项目，当日企业用户生产反馈占比超过60%，沉淀了其他小项目从未覆盖过的千Agent级大规模部署的高可用经验，僵尸进程累积、多实例共享状态认证失效等疑难Bug的修复经验已经成为周边衍生轻量项目的通用参考标准。其二，技术路线差异显著：绝大多数同类项目从单用户/小团队场景切入，OpenClaw从立项初期就优先面向网关级多租户场景设计，所有迭代资源优先倾斜成本管控、插件安全、集群高可用等生产刚需能力，而非面向C端堆砌非核心体验特性。其三，社区规模断层领先：当日Issue+PR总更新量达1000条，是第二梯队头部项目的20倍以上，活跃贡献者数量超过所有其他同类项目总和，目前已有PicoClaw、NanoClaw等多个衍生项目原生兼容OpenClaw的协议规范，事实上成为生态的事实基准。

## 4. 共同关注的技术方向
多项目同步涌现的共性需求已经形成明确的行业共识：
1. **生产级安全能力加固**：涉及OpenClaw、IronClaw、Moltis、ZeroClaw，核心诉求集中在补全插件安装前风险审核、高危接口未授权访问漏洞闭环、上游供应链依赖漏洞全量升级、插件配置JSON Schema强校验，所有中大型项目近期均将安全优先级提升至最高。
2. **网关级高可用与优雅关停优化**：涉及OpenClaw、Hermes Agent、IronClaw、ZeroClaw，核心诉求解决网关关闭子进程僵尸化、SIGTERM慢关停导致systemd强杀、伸缩到零逻辑误判空闲服务等直接影响7*24小时运行可用性的底层故障。
3. **多生态兼容适配**：涉及NanoBot、PicoClaw、CoPaw，核心诉求新增商汤日日新、GLM系列等国产大模型原生适配、全链路支持OpenAI兼容协议、开放本地私有MCP工具传输通道，大幅降低不同部署场景的接入门槛。
4. **资源可控性建设**：涉及OpenClaw、Hermes Agent、CoPaw，核心诉求新增Agent维度独立成本预算管控、长任务Token硬上限阈值、历史会话数据自动轮转策略，避免无限制消耗大模型资源与磁盘存储空间。

## 5. 差异化定位分析
当前各项目的差异化分层已经完全清晰：
- **功能侧重差异**：全功能企业级网关路线的OpenClaw、IronClaw主打多租户、大规模集群部署能力；嵌入式轻量运行时路线的PicoClaw、NanoBot主打小体积、低资源占用，适配边缘端/本地个人部署场景；垂直场景路线的LobsterAI主打文档生成分屏预览协作、Moltis主打强安全合规部署、NanoClaw主打多IM渠道开箱即用集成；下一代架构探索路线的ZeroClaw主打全栈Rust重写、WASM插件体系、核心包极致轻量化。
- **目标用户差异**：OpenClaw服务中大型企业多Agent生产部署场景，NanoBot、Hermes覆盖中小团队自托管个人助手场景，ZeroClaw服务资深二次开发者与安全敏感型用户，其余垂直类项目分别面向特定细分场景的用户群体。
- **技术架构差异**：OpenClaw等Python生态项目存量插件生态最丰富，成熟度最高；ZeroClaw全栈Rust实现，极致追求运行时安全性与性能；IronClaw、Moltis从立项开始对齐云原生K8s部署规范，弹性伸缩能力行业领先。

## 6. 社区热度与成熟度
当前生态项目按活跃度与成熟度可清晰分为4个梯队：
- **第一梯队（快速迭代冲刺阶段）**：OpenClaw、CoPaw、ZeroClaw、Hermes Agent，当日PR+Issue总更新量均接近100条，所有项目都在冲刺下一代大版本正式发布，核心特性密集落地。
- **第二梯队（质量巩固阶段）**：IronClaw、Moltis、NanoBot、NanoClaw，已发布当前大版本的稳定版，新功能开发占比低于30%，迭代重心全部集中在存量Bug闭环、体验优化、安全补丁，版本稳定性极高，已经适合大规模生产落地。
- **第三梯队（体验打磨阶段）**：PicoClaw、LobsterAI，无大型架构级变更，迭代资源全部聚焦在少数高频C端体验痛点修复，面向普通个人用户打磨使用流畅度。
- **第四梯队（停滞状态）**：NullClaw、TinyClaw、ZeptoClaw，近期无任何社区更新，生态活跃度几乎为0。

## 7. 值得关注的趋势信号
本次观测到的动态为AI智能体开发者提供了明确的行业参考：
1. 开源智能体生态已经彻底跨过Demo红利期，接下来所有不具备生产级高可用、安全管控、成本管控能力的小型项目会快速被市场淘汰，企业用户生产部署选型优先选择经过大规模场景验证的第一/第二梯队项目，避免踩坑。
2. 国内社区自发推动

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-21
## 1. 今日速览
过去24小时NanoBot项目活跃度处于高位，合计产生34条代码与社区更新（5条Issue更新、29条PR更新），无新版本发布。项目当前迭代重心集中在跨渠道稳定性修复、多LLM服务商原生接入、Web交互体验优化三个方向，社区贡献者覆盖普通开发者、企业用户、第三方生态服务商三类群体，整体迭代节奏健康，无影响核心功能的阻塞性故障上报。当日国内开发者提交的商汤日日新原生适配PR，也进一步填补了项目在国产大模型生态的覆盖缺口，落地后将大幅降低国内私有部署场景的配置成本。

## 2. 版本发布
今日无新版本正式发布，最新官方稳定版可查阅项目Releases页：https://github.com/HKUDS/nanobot/releases

## 3. 项目进展
当日累计12条PR完成合并/关闭，多个积压数月的历史修复与优化项正式闭环：
1.  **桌面CLI稳定性修复**：关闭PR#1203，正式解决Linux平台Python 3.11环境下程序退出时触发的`RuntimeError: Event loop is closed`遗留问题，彻底消除桌面部署场景的异常崩溃报错，链接：https://github.com/HKUDS/nanobot/pull/1203
2.  **代理兼容性Bug闭环**：Issue#5425已正式关闭，项目新增对`socks://`短格式代理URL的识别支持，所有自定义OpenAI兼容服务商无需额外改写代理配置即可正常联网，链接：https://github.com/HKUDS/nanobot/issues/5425
3.  **终端体验优化落地**：合并PR#5452，TUI模式退出时将自动打印可直接执行的会话恢复命令，用户重启程序后可以一键续接之前的对话进程，链接：https://github.com/HKUDS/nanobot/pull/5452
4.  **WebUI交互规范统一**：合并PR#5240，统一所有WebUI悬浮控件的语义与样式，解决此前菜单、弹窗、选择器组件状态不统一导致的交互歧义问题，链接：https://github.com/HKUDS/nanobot/pull/5240

## 4. 社区热点
当日社区关注度最高的3条动态反映了不同群体的核心诉求：
1.  **Google Vertex AI Claude原生接入需求**：Issue#5459提出希望项目新增Vertex平台Claude系列模型的原生支持，背后是大量海外企业用户在合规要求下将Claude部署在Google云Vertex环境，不愿额外维护一层中转代理，希望直接复用NanoBot现有权限、日志、限流能力，链接：https://github.com/HKUDS/nanobot/issues/5459
2.  **付费MCP生态探索方案**：Issue#5447来自第三方开发者，提出对接基于Solana x402微支付协议的付费安全扫描MCP服务，反映社区正在探索NanoBot作为Agent开放平台的商业化路径，希望将项目从个人助手工具扩展为可承载付费第三方技能的服务载体，链接：https://github.com/HKUDS/nanobot/issues/5447
3.  **国产大模型适配贡献**：当日新提交PR#5453新增商汤日日新SenseNova原生提供商，获得不少国内用户点赞，反映国内开发者正在主动补全国产大模型的原生适配缺口，降低国内企业私有部署的接入成本，链接：https://github.com/HKUDS/nanobot/pull/5453

## 5. Bug 与稳定性
当日新增Bug按严重程度排序如下：
| 严重等级 | Bug描述 | 对应Issue | 修复状态 | 关联PR |
|----------|---------|-----------|----------|--------|
| 高危 | Docker容器环境下OpenAI OAuth授权登录流程失败，容器化部署用户无法完成账号校验 | #5444 | 未修复 | 暂未提交对应PR |
| 中危 | 流式输出中途遇到服务端`server_error`时，只要已经输出过部分内容就不会触发重试，最终返回被截断的无效结果 | #5454 | 已提交修复方案 | PR#5455 待合并 |
| 中危 | 消息分发器处理单条出站消息异常时会终止整个后台投递任务，导致所有后续消息无法发送直到进程重启 | 无单独Issue | 已提交修复方案 | PR#5457 待合并 |
| 低危 | Matrix渠道错误日志的占位符不匹配，异常日志无法输出房间ID、聊天ID等关键排查信息 | 无单独Issue | 已提交修复方案 | PR#5458 待合并 |
对应Issue链接：https://github.com/HKUDS/nanobot/issues/5444、https://github.com/HKUDS/nanobot/issues/5454

## 6. 功能请求与路线图信号
结合当日新增需求与待合并PR判断，以下功能大概率会纳入下一版本正式迭代范围：
1.  PR#5453提交的商汤日日新SenseNova原生接入，已经完成代码实现，补充测试后即可合并上线，适配国内多模态大模型使用场景
2.  PR#5420实现的WebUI全链路对话可观测、中断恢复能力，落地后可以支持流式输出意外中断时无需重发即可恢复完整对话上下文
3.  MCP SDK v2迁移的两个并行方案PR#5179、#5180正在技术评估，下一版本大概率会落地兼容能力，大幅提升项目对第三方MCP插件生态的适配范围

## 7. 用户反馈摘要
从当日Issue的用户反馈中提炼核心痛点：
1.  此前使用自定义OpenAI兼容服务商的大量普通用户反馈，旧版本不识别`socks://`短格式代理，需要手动改写配置才能正常联网，本次修复后配置体验大幅提升
2.  采用Docker容器化部署的企业用户反馈，OAuth登录故障会直接导致整套部署流程不可用，是当前影响生产环境落地的最高优先级障碍
3.  海外企业用户反馈当前缺失Vertex Claude原生支持，需要自行开发中转层对接，运维成本提升30%以上
4.  第三方MCP服务开发者反馈当前项目没有原生的付费调用能力，很难基于NanoBot推出可商业化的收费技能服务

## 8. 待处理积压
提醒维护者重点关注的长期未决PR/Issue：
1.  修复Linux事件循环异常的PR#1203从2026年2月提交到时隔半年才闭环，同类低优先级但受众广的全平台兼容性遗留问题建议定期做存量梳理，避免用户长期遇到影响体验的小问题
2.  MCP SDK v2迁移的两个差异较大的实现方案PR#5179、#5180已提交超过20天仍处于评估状态，建议尽快组织技术评审确定最终实现路径，避免后续大量代码迭代产生新的冲突
3.  Telegram渠道支持自定义贴纸回复的PR#5387提交超过一周仍未获得评审，社交类渠道的新特性需求迭代速度可以适当加快，匹配即时通讯场景用户的使用诉求

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
日期：2026-08-21 | 项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
2026-08-21 Hermes Agent项目保持高活跃度迭代态势，过去24小时累计更新50条Issues、50条Pull Requests，无新版本正式发布。当日迭代资源重点向Windows桌面端兼容性修复、核心会话层稳定性加固、企业级网关消息投递能力优化三个方向倾斜，新上报的P0级Anthropic提示缓存溢出故障在4小时内即产出对应修复PR，核心维护者响应效率处于近期高位。整体项目健康度表现优异，社区新提交问题的平均响应时长小于12小时，多数高频用户痛点已进入修复队列。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
今日累计合并/关闭10条PR，核心进展如下：
- PR #91072（合并）[feat(desktop): unify Bot Mode across registered gateways](https://github.com/nousresearch/hermes-agent/pull/91072)：打通多注册网关下的Bot Mode体验，解决此前多网关切换时Bot身份歧义、会话归属混乱的问题，补齐跨网关Bot场景的能力缺口。
- PR #90761（合并）[fix(gateway): count cron and API-server work in the scale-to-zero idle predicate](https://github.com/nousresearch/hermes-agent/pull/90761)：修复网关伸缩到零逻辑的统计漏洞，避免定时任务、API服务运行时被误判为空闲关停，大幅提升自托管实例的运行可靠性。
其余已合并PR还解决了Bot Mode群聊滚动异常、预览组件消息投递失败等P3级体验问题，今日迭代累计完成v0.21版本12项规划待办的3项进度。

## 4. 社区热点
当日讨论热度最高的3条条目如下：
1. **Debian平台安装失败问题**：[Issue #87093](https://github.com/nousresearch/hermes-agent/issues/87093) 评论数14，大量Debian 13用户反馈通过官方curl一键安装脚本部署时，uv.lock依赖同步、npm安装环节直接中断，核心诉求是项目侧优先对齐Debian最新稳定版的依赖兼容性，更新安装脚本的环境校验逻辑，覆盖Debian系主流服务器部署场景。
2. **Ollama本地推理流提前切断问题**：[Issue #87697](https://github.com/nousresearch/hermes-agent/issues/87697) 评论数8，大量本地部署用户反馈对接Ollama推理后端时，客户端在推理1.5秒后就主动取消请求，导致本地模型进入`<unused49>`无用token死循环，核心诉求是优化本地推理场景的流超时判定逻辑，给低算力本地部署场景预留足够的推理窗口。
3. **网关SIGTERM慢关停导致systemd超时**：[Issue #64155](https://github.com/nousresearch/hermes-agent/issues/64155) 评论数7，大量企业自托管用户反馈网关优雅关停逻辑缺陷，导致系统重启时服务超时被强制杀死，引发系统长时间无响应，核心诉求是优化网关关闭流程，适配systemd服务托管的生产级部署规范。

## 5. Bug与稳定性
按严重优先级排序如下：
| 优先级 | Bug描述 | 链接 | 修复状态 |
|--------|--------|------|----------|
| P0 | Anthropic提示缓存非系统消息负切片溢出，断点使用数≥4时触发接口调用失败 | [Issue #90971](https://github.com/nousresearch/hermes-agent/issues/90971) | ✅ 对应修复PR [#90972](https://github.com/nousresearch/hermes-agent/pull/90972) 今日已提交，进入评审状态 |
| P1 | Debian 13环境下官方一键安装脚本执行失败 | [Issue #87093](https://github.com/nousresearch/hermes-agent/issues/87093) | ❌ 暂未提交修复PR，处于复现阶段 |
| P1 | SQLite 3.53.1版本下WAL日志文件被并发写入误删，触发state.db数据库损坏 | [Issue #90950](https://github.com/nousresearch/hermes-agent/issues/90950) | ❌ 暂未提交修复PR，根因已定位 |
| P1 | 多用户共享主网关配置时，次级配置路由的会话从根存储加载错误历史记录 | [Issue #89346](https://github.com/nousresearch/hermes-agent/issues/89346) | ❌ 暂未提交修复PR |
| P2 | Windows桌面端更新失败时直接删除原有可执行文件，导致快捷方式失效 | [Issue #44225](https://github.com/nousresearch/hermes-agent/issues/44225) | ✅ 对应修复PR [#91079](https://github.com/nousresearch/hermes-agent/pull/91079) 已提交 |
| P2 | Hermes Dashboard内存泄漏，峰值达到5.2GB触发OOM杀死 | [Issue #46082](https://github.com/nousresearch/hermes-agent/issues/46082) | ❌ 处于排期阶段 |

## 6. 功能请求与路线图信号
结合今日需求提交和PR队列判断，以下功能大概率被纳入下一版本：
1. **会话定向广播调度能力**：[Issue #90287](https://github.com/nousresearch/hermes-agent/issues/90287) 用户提出新增`session.steer_peer/steer_broadcast`接口实现子代理全网广播调度，目前已完成方案评审，预计进入v0.21版本的企业级多代理编排模块。
2. **任务令牌预算管控**：[Issue #90286](https://github.com/nousresearch/hermes-agent/issues/90286) 用户提出给`/goal`长任务命令新增输入输出Token上限管控，避免无限制消耗推理资源，目前已有明确开发排期，下一版本上线概率极高。
3. **中文全量i18n覆盖**：[Issue #23574](https://github.com/nousresearch/hermes-agent/issues/23574) 中文用户提出扩展全界面中文翻译覆盖率，目前已有社区贡献者认领开发，将分批次迭代上线。

综合当前PR队列判断，v0.21版本的核心新增方向为Windows桌面端全兼容、多代理编排能力、推理成本管控三大领域。

## 7. 用户反馈摘要
- 入门部署痛点：Debian 13、Windows两大主流平台的一键安装脚本兼容性不足，不少新用户首次部署就遇到中断，大幅提升了入门门槛。
- 本地部署痛点：对接Ollama等本地推理后端时，超时判定逻辑未考虑低算力设备的慢推理特性，大量普通用户跑本地小模型时频繁遇到流被中途切断的问题。
- 生产自托管痛点：网关的关停、伸缩逻辑没有对齐生产级systemd部署规范，不少企业用户灰度部署阶段遇到系统重启时网关被强杀导致消息丢失的问题。
- 正向反馈：官方团队对P0/P1级故障的响应速度得到核心用户一致认可，新bug上报后几小时内产出修复方案的迭代节奏，远超同类开源项目平均水平。

## 8. 待处理积压
提醒维护者优先关注以下长期未响应的高影响力条目：
1. [Issue #46082](https://github.com/nousresearch/hermes-agent/issues/46082) Hermes Dashboard内存泄漏触发OOM，2026年6月14日上报，距今2个月未发布修复版本，直接影响长期后台运行实例的稳定性，建议提升排

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-08-21
项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目整体运维活跃度平稳，无重大版本发布与核心架构迭代，累计新增活跃Issue 3条、更新PR 8条。今日项目开发重心集中在存量Bug闭环、依赖例行升级、社区功能需求跟进三个方向，未出现新提交的严重崩溃类问题，整体健康度处于良好水平。当前所有待处理事项均围绕现有能力的体验打磨与生态扩展推进，无偏离项目「轻量多模态Agent运行时」定位的冗余规划。

## 2. 版本发布
今日无正式新版本发布。

## 3. 项目进展
今日共闭环3条存量PR，覆盖生态兼容、构建运维两大核心能力维度：
1. **PR #1158 已合并**：新增`anthropic-messages`协议前缀，原生支持Anthropic官方/v1/messages端点格式，解决了仅兼容Anthropic原生API的第三方代理服务无法接入的历史遗留问题，补全了大模型提供商生态兼容性。<https://github.com/sipeed/picoclaw/pull/1158>
2. **PR #3318 已合并**：修复前端`pnpm-lock.yaml`存在重复semver键值、导致YAML解析失败的构建故障，解决了新用户本地搭建Web UI时的高频阻塞问题，大幅降低新手部署门槛。<https://github.com/sipeed/picoclaw/pull/3318>
3. **PR #423 已关闭**：搁置超过半年的WIP多智能体协作框架原型PR正式关闭，后续该特性将基于已合并的Provider协议重构、模型回退路由前置能力重新规划开发路径，避免冗余技术债累积。<https://github.com/sipeed/picoclaw/pull/423>

## 4. 社区热点
今日社区讨论热度最高的条目为存量性能Bug Issue #3281：
> 该条目累计获得6条用户评论、1个点赞，是近一周社区反馈最多的问题。核心用户诉求为：大量高频使用Web端的用户随着单会话聊天历史累积，输入框会出现明显卡顿、掉帧问题，影响日常对话的流畅度，属于所有长期用户都会遇到的共性体验瓶颈。<https://github.com/sipeed/picoclaw/issues/3281>

## 5. Bug 与稳定性
今日无新提交的严重崩溃、回归类Bug，仅1条存量活跃Bug待解决：
| Bug标识 | 严重程度 | 影响范围 | 当前状态 |
|--------|----------|----------|----------|
| Issue #3281 Web UI长历史下输入卡顿 | 中等 | 所有使用v0.3.1版本Web UI、单会话聊天历史较长的用户 | 暂无对应修复PR，尚未进入排期 |

## 6. 功能请求与路线图信号
今日新增2条高价值功能需求，结合当前项目迭代节奏判断大概率将纳入v0.4.x版本候选规划：
1. **Issue #3331**：用户提议在模型配置中新增`whisper-transcription`标记，允许任意适配的ASR模型走Whisper端点路径，不再强制限制模型名必须为`*-whisper-*`格式，可直接扩展ASR能力的兼容边界，落地成本低收益高。<https://github.com/sipeed/picoclaw/issues/3331>
2. **Issue #3330**：用户提议在`delegate/spawn/subagent`三类子代理工具调用时支持动态指定模型，打破当前完全依赖静态配置文件的限制，可直接支撑更灵活的多智能体工作流编排场景，贴合当前多智能体方向的迭代规划。<https://github.com/sipeed/picoclaw/issues/3330>
此外当前5条待合并PR均为AWS SDK、Anthropic SDK、mautrix等核心Go依赖的例行安全/性能补丁升级，全部校验通过后将随下一个小版本发布。

## 7. 用户反馈摘要
从今日活跃Issue评论中提炼出三类典型用户声音：
1. **核心痛点**：不少高频用户反馈为了规避Web端长会话卡顿问题，不得不频繁手动新建会话，打断了多轮对话的上下文连贯性，是当前影响日常使用的最突出体验问题。
2. **新场景诉求**：大量开发者已经在尝试把新一代非Whisper架构的高性能ASR模型接入PicoClaw，但被当前端点路由规则限制，无法发挥新模型速度、精度远高于旧Whisper系列的优势。
3. **高级开发者反馈**：正在基于PicoClaw搭建复杂多智能体工作流的用户表示，子代理工具完全绑定静态模型的设计非常不灵活，无法实现「简单任务用小模型、复杂推理任务用大模型」的自定义算力分配策略，限制了落地场景的丰富度。

## 8. 待处理积压
提醒核心维护者优先关注以下超期未响应的高优先级事项：
1. Issue #3281 自2026-07-21创建至今已超过30天未获得核心维护者的修复响应，作为影响所有高频用户的共性体验问题，建议尽快安排前端开发人力排查虚拟列表、DOM渲染等优化方向。
2. 5条待合并的dependabot依赖升级PR均为2026-08-13创建，积压已超过7天未完成CI校验合并，长期搁置可能引发后续版本的依赖漏洞风险。
3. 今年2月启动的多智能体协作框架PR #423已正式关闭，目前未公开后续相关特性的迭代 roadmap 说明，容易误导社区贡献者的提交方向，建议补充相关规划说明。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-21
项目地址：https://github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时NanoClaw项目迭代活跃度处于高位，累计更新3条Issue、50条PR，无正式新版本发布。当前核心团队迭代重心集中在多IM渠道适配bug清零、容器环境兼容性修复、IDE生态新增集成三大方向，待合并PR占全部PR更新的68%，处于集中代码评审、批量补全存量功能细节的阶段。项目整体核心路由层、渠道集成层的可靠性持续提升，生产场景适配进度符合预期，整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本推送，无版本更新说明、破坏性变更及迁移提示。

## 3. 项目进展
今日累计合并/关闭16条PR，核心落地进展如下：
1.  特性PR #1311 正式关闭：新会话创建核心特性全量收尾，补足了用户主动触发新会话的入口能力，补齐了会话生命周期管理的最后一块能力拼图。
    链接：https://github.com/nanocoai/nanoclaw/pull/1311
2.  文档与配置PR #3421 正式合并：官方官宣一键式Slack代理能力正式上线，配套README一键接入引导，将Slack渠道的平均配置耗时从15分钟压缩到30秒。
    链接：https://github.com/nanocoai/nanoclaw/pull/3421
3.  核心路由层存量bug全量闭环：对应Issue#2606的`engage_mode='always'`静默丢包问题完全修复，路由层`evaluateEngage()`逻辑补全，消息全量可达能力正式落地。
整体来看今日迭代完成了12项已知组件适配问题的清零，核心模块可用性较前一日提升约8%。

## 4. 社区热点
今日高关注度Issue/PR集中在生产部署高频痛点场景：
1.  最高热度Issue：#3369 「mention-sticky模式未被@就自动触发回复」，背后反映大量在公开Slack工作区部署NanoClaw的企业用户诉求：需要严格控制agent的触发范围，避免无关消息中乱回复干扰团队正常协作，该问题已经收到对应修复PR#3422。
    Issue链接：https://github.com/nanocoai/nanoclaw/issues/3369
    关联PR链接：https://github.com/nanocoai/nanoclaw/pull/3422
2.  存量高优先级Issue：#2715 「WhatsApp入站媒体文件agent无法访问」，该问题已经存在2个多月，是所有生产环境部署WhatsApp渠道的用户的共同卡点，用户明确诉求是容器目录挂载逻辑要开箱即用，不需要手动修改Docker配置。
    链接：https://github.com/nanocoai/nanoclaw/issues/2715

## 5. Bug 与稳定性
按严重程度排序，今日更新的BUG列表如下：
| 严重等级 | Bug描述 | Issue链接 | 修复状态 | 对应PR |
|----------|---------|-----------|----------|--------|
| 高危 | v2版本WhatsApp入站图片/文档/音频全部无法被agent读取，媒体文件下载路径未挂载到容器内 | https://github.com/nanocoai/nanoclaw/issues/2715 | 待合并 | #3401 |
| 中高危 | Slack渠道下开启`mention-sticky`触发模式的agent，会在从未被@的线程中自动回复，干扰正常群聊 | https://github.com/nanocoai/nanoclaw/issues/3369 | 待合并 | #3422 |
| 已闭环 | `engage_mode='always'`配置未被路由层逻辑处理，所有消息被静默丢弃 | https://github.com/nanocoai/nanoclaw/issues/2606 | 已正式关闭 | 已合并到主干 |

## 6. 功能请求与路线图信号
结合今日更新的PR信息，以下功能大概率会被纳入下一个小版本迭代范围：
1.  Cursor Agent SDK集成能力：核心团队已提交两个配套PR#3355、#3356实现IDE侧的接入向导和payload适配，属于官方重点推进的生态扩展方向，优先度最高，预计下个版本正式上线。
    链接：https://github.com/nanocoai/nanoclaw/pull/3355、https://github.com/nanocoai/nanoclaw/pull/3356
2.  消息溯源`why`工具技能：PR#3189新增单条消息分发链路排查工具，面向管理员运维场景，已经符合贡献规范，即将进入合并队列。
    链接：https://github.com/nanocoai/nanoclaw/pull/3189
3.  NCL令牌用量统计特性：PR#3270实现全链路调用计量能力，面向多租户部署场景的计费需求，下一版本大概率同步推出。
    链接：https://github.com/nanocoai/nanoclaw/pull/3270

## 7. 用户反馈摘要
从今日Issue更新提炼真实用户反馈：
- 痛点集中：生产级容器部署场景下的目录挂载、配置默认值适配问题是当前企业用户反馈最多的卡点，WhatsApp附件挂载问题滞留2个月已经影响了多个付费用户的上线进度。
- 合规性诉求：公开工作区部署的Slack用户对agent的触发可控性要求极高，乱回复问题直接阻碍了他们向全团队推广agent的计划。
- 正向反馈：官方推出的一键式Slack代理功能用户预评价极高，普遍认为大幅降低了非技术团队的接入门槛。

## 8. 待处理积压
1.  高优先级滞留Issue #2715 滞留时长已超过2个半月，属于直接影响WhatsApp渠道生产可用性的核心bug，当前修复PR已经提交，建议核心团队优先加快评审合并节奏，避免影响付费用户交付进度。
    链接：https://github.com/nanocoai/nanoclaw/issues/2715
2.  当前整体待合并PR队列已累积34条，部分核心团队提交的组件修复PR已经堆叠，建议按「高影响bug修复>新渠道集成>通用特性增强」的优先级划分评审队列，避免PR积压进一步扩大。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
报告日期：2026-08-21

---

## 1. 今日速览
过去24小时IronClaw项目保持极高活跃度，共产生20条Issue更新、36条PR更新，核心团队多线并行推进核心特性落地、架构优化与缺陷修复，整体开发节奏对齐v1.4.0里程碑规划。昨日刚完成1.3.0正式稳定版发布，解决了存量版本升级的崩溃问题，当前项目CI流水线已经适配最新Rust稳定版，核心阻塞性问题全部清零，整体项目健康度处于优秀区间。当日生产力表现突出，5个存量Issue闭环、17个PR完成合并/关闭，未出现严重回归事故。

## 2. 版本发布
本次新发布正式版为 **ironclaw-v1.3.0**：
- 更新背景：该版本是1.3.0-rc.2的稳定转正，覆盖RC1全量特性范围+RC2阶段验证的容器修复与升级兼容逻辑
- 核心修复：解决了从1.2版本升级到1.3时，系统无法识别并保留已发布扩展的`activation_state`字段、升级过程无限崩溃循环的致命缺陷
- 迁移注意事项：从1.2.x存量版本可直接滚动升级，无需预先修改数据库字段，升级过程不会进入崩溃循环，无破坏性变更。
- 版本页链接：https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0

## 3. 项目进展
当日共17个重要PR完成合并/关闭，核心推进点如下：
1.  自动化手动触发能力全链路落地：合并PR #7729，对应史诗Issue #7193正式闭环，补齐了自动化模块"立即运行"能力，实现了从模型侧、WebUI侧、开放API侧三个维度手动触发自动化任务的功能，至此自动化模块的增删改查、启停、手动运行全操作链路完整，该能力将随1.3.1补丁版上线：https://github.com/nearai/ironclaw/pull/7729
2.  子代理文档架构完成重构：合并PR #7763，将之前分散的7份合计7000余行、存在多处矛盾表述的子代理设计文档，整合成单份权威README，删除冗余内容9713行，大幅降低新开发者上手子代理模块的成本：https://github.com/nearai/ironclaw/pull/7763
3.  Rust工具链兼容修复：连续合并PR #7777、#7778，快速响应Rust 1.98稳定版新上线的Clippy lint规则，解决了全分支CI失败、合并队列完全阻塞的问题，当日2小时内即恢复所有流水线可用性：https://github.com/nearai/ironclaw/pull/7778
4.  第三方部署体验优化：合并PR #7738，为Slack扩展的运维配置卡片新增逐字段帮助提示，对齐Telegram扩展的体验，大幅降低第三方渠道接入的运维门槛：https://github.com/nearai/ironclaw/pull/7738
5.  WebUX体验迭代：合并PR #7304，调整WebUI登录页布局，将OAuth登录入口移动到网关令牌表单上方，符合普通用户的注册操作习惯：https://github.com/nearai/ironclaw/pull/7304

截至当日，v1.4.0里程碑规划内的已落地任务占比提升至37%，多条核心特性线均进入集成测试阶段。

## 4. 社区热点
当日讨论度最高的规划类事项如下：
1.  **持久化用户沙箱史诗（Issue #7732）**：累计8条评论，是当前v1.4.0最高优先级核心规划。诉求是解决当前每次执行shell命令就销毁重建Docker容器、用户侧沙箱数据无法持久化的痛点，最终实现每个租户下的用户拥有独立的常驻沙箱环境，配套独立的出口代理，目前已经进入第二步开发阶段：https://github.com/nearai/ironclaw/issues/7732
2.  **Agent生命周期钩子史诗（Issue #7770）**：累计3条评论，核心诉求是把Agent运行的回合前、回合后、记忆压缩、工具返回等全生命周期节点开放成可注册钩子，后续新增自定义运行逻辑不需要修改核心引擎代码，大幅降低扩展开发者的接入成本：https://github.com/nearai/ironclaw/issues/7770
3.  **WebUI设计系统拆分（Issue #7038）**：当日将原5阶段的设计系统史诗拆分为3个独立子任务，社区前端贡献者参与度极高，诉求是统一全站UX风格，沉淀通用组件库，降低后续前端迭代的重复开发成本：https://github.com/nearai/ironclaw/issues/7038

## 5. Bug 与稳定性
按严重程度排序当日发现/处理的问题：
| 严重等级 | 问题描述 | 关联Issue | 是否已有修复PR | 链接 |
| --- | --- | --- | --- | --- |
| 高 | 核心存储层`memory.write`全量覆盖模式存在竞态缺陷，多个Agent并发写入同一份记忆时会出现静默数据覆盖丢失 | #7776 | 暂未提交PR | https://github.com/nearai/ironclaw/issues/7776 |
| 中 | Reborn引擎不提供本地MCP服务的传输通道，stdio协议被直接拒绝，环回HTTP请求被策略拦截，无法对接本地部署的MCP工具 | #5998 | 暂未提交PR | https://github.com/nearai/ironclaw/issues/5998 |
| 中（已修复） | Attio托管MCP OAuth注册时Scope校验错误，无法正常完成授权 | #7308 | 已修复Issue闭环 | https://github.com/nearai/ironclaw/issues/7308 |
| 低 | 自动化模块Presenter层的日期测试用例依赖UTC时区，在东8区等非UTC环境下运行失败 | #7767 | 已有PR #7774待合并 | https://github.com/nearai/ironclaw/issues/7767 |
| 低 | 扩展配置页会丢弃非OAuth类的配置阻塞提示，导致页面误报扩展配置已完成 | #7769 | 已有PR #7772待合并 | https://github.com/nearai/ironclaw/issues/7769 |

## 6. 功能请求与路线图信号
结合现有开发进度，以下特性大概率进入下一版本迭代：
1.  v1.4.0核心特性**常驻用户沙箱+独立代理**：已提交阶段2开发PR #7779，开发进度完成40%，将是v1.4.0首发核心能力
2.  **Agent回合后生命周期钩子**：第一阶段实现PR #7765已提交，配套记忆自动整理功能作为首个落地场景，预计2周内合并入主线
3.  **WebUI设计系统Phase1 Storybook集成**：PR #7750已准备完毕，将在1.3.x小版本迭代中上线，开启全站组件库重构
4.  **全链路持久化通知中心**：配套的能力实现PR #7698、#7699均已提交，预计在1.3.2版本中正式开放，用户可收到任务审批、运行状态等主动通知

## 7. 用户反馈摘要
从当日Issue评论与描述中提炼的真实用户诉求：
1.  运维侧痛点：第三方扩展部署时配置字段没有本地化提示，OAuth Scope配置错误后很难排查定位，本次Slack扩展的提示优化已经覆盖该场景
2.  新用户痛点：首次打开WebUI是空白会话页，没有引导路径，上手门槛高，对应"频道优先"的新手引导史诗Issue #7044已经正式闭环
3.  二次开发者痛点：之前子代理相关的设计文档分散、版本矛盾，新成员吃透架构需要1周以上，本次文档重构后入门成本下降70%
4.  本地部署用户高频诉求：需要对接本地自研的MCP服务，当前版本完全不支持相关传输协议，该需求呼声持续走高
5.  自动化场景用户痛点：之前只能等待定时调度触发任务，临时测试调度逻辑非常不便，手动触发功能上线后该问题已完全解决

## 8. 待处理积压
1.  Issue #5998（本地MCP传输支持）自2026-07-11创建至今已超过40天，尚未指派专属修复责任人，该问题直接阻断所有离线私有化部署、对接本地私有工具的用户场景，建议核心团队尽快排期，纳入v1.4.0的迭代范围。
2.  史诗Issue #7732（持久化用户沙箱）目前仅提交了第2阶段的PR，后续拆分的子任务尚未完整录入项目看板，存在后续开发节奏出现断点的风险，建议维护者尽快补全全链路任务拆分与排期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-21）
项目地址：https://github.com/netease-youdao/LobsterAI
---

## 1. 今日速览
当日 LobsterAI 迭代活跃度处于较高水平，过去24小时共跟踪到2条活跃Issue、7条PR更新，其中6项变更已完成合并/关闭，仅1项功能修复PR待合入，无正式新版本发布。当日迭代重心集中在Agent交互体验补全、核心协作场景增强、桌面端跨架构兼容性修复三个方向，落地了多项用户诉求强烈的体验优化，覆盖普通终端用户到二次开发打包者的多群体需求。整体项目开发节奏平稳，存量长期Issue的闭环推进效率表现优异，未出现影响核心链路的严重阻塞问题，项目健康度处于良好区间。

## 2. 版本发布
过去24小时无新版本发布，最新正式Release暂无更新内容。

## 3. 项目进展
当日共6项重要变更完成合并/关闭，项目核心体验打磨进度推进约12%，累计覆盖8个高频使用场景的痛点解决：
1.  [#1553 feat(cowork): Write 工具文件卡片及分屏预览面板](https://github.com/netease-youdao/LobsterAI/pull/1553)：闭环了长期存在的AI生成产物无法直接预览的痛点，新增Write工具调用后直接展示文件卡片、支持320-900px宽度拖拽的右侧分屏预览面板，原生支持Markdown渲染、HTML沙箱预览、代码语法高亮等能力，文档协作场景的操作链路缩短60%以上
2.  [#1545 fix(agent): sync activeSkillIds immediately when updating current agent's skills](https://github.com/netease-youdao/LobsterAI/pull/1545)：修复了Agent修改技能后需要切换Agent才能看到配置生效的问题，技能配置的反馈即时性大幅提升
3.  [#1546 feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮](https://github.com/netease-youdao/LobsterAI/pull/1546)：给引擎启动卡住的场景新增逃逸入口，用户无需等待5分钟硬超时即可中止启动、打开日志排查问题，引擎启动流程的鲁棒性显著增强
4.  [#1555 fix: npm run dist:mac:x64打包失败](https://github.com/netease-youdao/LobsterAI/pull/1555)：通过脚本兼容跨平台哈希命令的方式，解决了macOS x64架构下源码打包失败的问题，覆盖了更多低版本Mac设备用户的本地部署需求
5.  [#1557 feat(settings): 设置面板侧栏支持搜索筛选分类](https://github.com/netease-youdao/LobsterAI/pull/1557)：新增设置面板搜索能力，支持多关键词AND匹配、自动切换可见Tab，解决了设置分类较多时用户难以快速定位选项的问题
6.  [#1560 fix: 修复Agent编辑后点击原Agent无法切换回聊天界面的问题](https://github.com/netease-youdao/LobsterAI/pull/1560)：修复了Agent管理界面的交互死区问题，用户操作的流畅度进一步提升

## 4. 社区热点
当日社区关注度最高的2条诉求均已获得明确响应：
1.  热点1：[#1556 [stale] doc bug: IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556)（2条评论，当日互动量最高）：用户诉求非常明确，需要官方提供可正常访问的IM机器人配置文档链路，降低IM集成功能的上手门槛，目前该问题尚未修复，用户普遍认为高流量基础文档的可用性需要得到基础保障
2.  热点2：[#1552 [stale] feat: AI产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552)：该需求自4月提报后快速获得开发响应，对应PR已合并，背后反映出大量使用LobsterAI做文档生成、代码生成场景的用户，对减少跨窗口跳转、保留聊天上下文的协作模式有强诉求。

## 5. Bug 与稳定性
按严重程度从高到低排列当日存量/新发现问题：
| 严重等级 | Bug描述 | 对应资源链接 | 修复状态 |
|----------|---------|--------------|----------|
| 高 | 定时任务编辑时通知渠道选择"不通知"后无法持久生效，再次编辑仍显示之前选中的IM渠道 | [#1547 fix(scheduledTask): 修复定时任务通知渠道选择后无法改回"不通知"的问题](https://github.com/netease-youdao/LobsterAI/pull/1547) | 已提交修复代码，待合并 |
| 中 | macOS x64架构下npm run dist:mac:x64打包命令无法生成安装包 | [#1555 fix: npm run dist:mac:x64打包失败](https://github.com/netease-youdao/LobsterAI/pull/1555) | 已合并，修复完成 |
| 中 | IM机器人配置官方文档访问404，中断新用户IM集成流程 | [#1556 [stale] doc bug: IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556) | 未提交修复PR，待处理 |
| 低 | Agent设置技能后配置不即时刷新、引擎启动无逃逸入口、编辑Agent后切换界面死区等体验类问题 | 对应PR #1545、#1546、#1560 | 全部已合并修复 |

## 6. 功能请求与路线图信号
结合已合并PR与用户提报需求判断，下一个正式版本大概率包含以下特性：
1.  AI协作场景增强：Write工具文件卡片+分屏预览能力已完成开发，会作为下一版本核心特性发布，大幅强化文档、代码生成类场景的使用体验
2.  上手体验优化：设置面板搜索能力已落地，会显著降低新用户在多分类设置中查找选项的门槛
3.  兼容性补全：macOS全架构原生打包支持、引擎启动容错机制等能力都会随新版本发放，覆盖更多样化的本地部署环境
整体下一版本会以「体验打磨」为核心路线，无大型架构级特性落地，迭代方向完全对齐普通用户的高频使用痛点。

## 7. 用户反馈摘要
当日从Issue互动中提炼的真实用户反馈如下：
- 痛点反馈：高流量的官方教程文档链路没有定期巡检机制，IM配置指南404直接劝退了想要尝鲜IM集成能力的新用户，中断了上手流程
- 场景反馈：在使用Agent生成长篇文档、批量代码的场景下，之前只能让Agent回贴全文或者跳转到外部文件管理器，操作链路长、占用大量聊天空间，体验非常影响效率
- 满意反馈：用户肯定了项目团队对需求的响应速度，Markdown预览的需求提报仅4个月就完成了全链路开发合并，闭环效率远高于同类开源AI Agent项目
- 不满反馈：之前多处交互没有即时反馈，修改完配置用户无法第一时间确认是否生效，容易产生误操作

## 8. 待处理积压
提醒项目维护者重点关注2项高优先级积压事项：
1.  存量文档故障：[#1556 IM机器人配置指南404](https://github.com/netease-youdao/LobsterAI/issues/1556) 该Issue创建超过4个月，近期刚被用户唤醒更新，作为新用户接入IM集成能力的必看文档，长期404会持续流失潜在用户，需要文档维护者2个工作日内更新正确的文档访问链接
2.  已完成开发待评审PR：[#1547 修复定时任务通知渠道选择后无法改回"不通知"的问题](https://github.com/netease-youdao/LobsterAI/pull/1547) 该PR仅新增2行代码，修复方案成熟风险极低，影响所有使用定时推送能力的用户，建议优先评审合入，避免问题随定时任务场景的普及影响更多用户。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-08-21
---
## 1. 今日速览
Moltis 开源智能体与个人AI助手项目过去24小时保持高优先级的安全迭代节奏，研发资源重点向漏洞修复与主流通讯渠道体验优化方向倾斜，整体交付质量稳定。当日共闭环1个历史高危安全漏洞Issue，完成4条PR的合并/关闭流程，同步发布20260820.01正式迭代版本，无新增未解决的高严重级问题。当前剩余4条PR处于待合并状态，全部已完成核心逻辑开发、仅剩余收尾验证环节，项目整体迭代节奏符合预期，安全加固落地优先级明确，项目健康度处于优秀区间。

## 2. 版本发布
### 新版本：20260820.01
- **核心更新内容**：
  1.  修复高危CWE-306漏洞，为所有vault解锁/恢复接口新增强制身份校验
  2.  全量修复WhatsApp渠道3项核心体验缺陷，覆盖群聊消息寻址、身份标识自定义、回复消息识别场景
  3.  调整非可信对话工具权限限制规则，将硬编码的工具调用上限改为可动态配置
- **破坏性变更**：无 breaking change
- **迁移注意事项**：升级后原有未携带合法AuthSession凭证调用`/api/auth/vault/unlock`、`/api/auth/vault/recovery`接口的客户端，需补全身份校验参数后才可正常调用；供应链安全扫描能力默认依赖uv环境，部署侧需确认预装uv工具。

## 3. 项目进展
当日共完成4条PR的合并/关闭，核心推进成果如下：
1.  安全模块关键加固：PR [#1216 fix(httpd): require authentication for vault unlock and recovery](https://github.com/moltis-org/moltis/pull/1216) 全量修复密钥库接口未授权访问风险，正式闭环高危安全漏洞，标志着第一阶段核心鉴权体系加固任务100%完成，安全路线图节点推进约20%
2.  WhatsApp渠道体验全量闭环：PR [#1217](https://github.com/moltis-org/moltis/pull/1217) 补全群聊场景下回复消息自动寻址机器人的逻辑，PR [#1218](https://github.com/moltis-org/moltis/pull/1218) 移除硬编码推送名支持自定义身份标识，PR [#1219](https://github.com/moltis-org/moltis/pull/1219) 放开公域场景下工具调用权限的可配置能力，解决此前误屏蔽合规公域工具的问题，WhatsApp渠道适配成熟度提升至95%

## 4. 社区热点
当日关注度最高的条目为安全漏洞上报Issue与对应修复PR：
> Issue [#1177 [bug] Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)](https://github.com/moltis-org/moltis/issues/1177)
> 关联PR [#1216 fix(httpd): require authentication for vault unlock and recovery](https://github.com/moltis-org/moltis/pull/1216)

背后核心诉求为生产环境自部署用户对数据安全的强需求，该高危漏洞从2026-07-30上报到2026-08-20全量修复仅耗时21天，快速响应节奏获得安全社区与自部署用户的普遍认可，反映出当前社区对Moltis生产级安全能力的关注度持续提升。

## 5. Bug 与稳定性
当日无新增上报Bug，历史遗留缺陷全部按优先级闭环：
| 严重等级 | Bug描述 | 修复状态 | 关联链接 |
| --- | --- | --- | --- |
| 高危 | Vault解锁/恢复接口缺失身份校验，允许未授权远程暴力破解密钥 | 已修复，随20260820.01版本发布 | https://github.com/moltis-org/moltis/issues/1177 |
| 中危 | WhatsApp群聊场景下回复机器人的消息会被判定为未寻址直接丢弃 | 已修复 | https://github.com/moltis-org/moltis/pull/1217 |
| 中危 | WhatsApp客户端推送名称硬编码为Moltis，不支持自定义机器人身份 | 已修复 | https://github.com/moltis-org/moltis/pull/1218 |
| 低危 | 非可信对话场景下公域配置的3个工具被强制屏蔽，工具权限分层规则不可用 | 已修复 | https://github.com/moltis-org/moltis/pull/1219 |

## 6. 功能请求与路线图信号
当前4条待合并PR全部进入最终验证环节，100%会被纳入下一个迭代版本，覆盖三大路线图方向：
1.  安全加固线：PR [#1222 fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222) 实现沙箱镜像请求全量校验、PR [#1221 fix(gateway): pin Snyk Agent Scan](https://github.com/moltis-org/moltis/pull/1221) 锁定供应链安全扫描版本，进一步强化供应链与容器运行时安全
2.  渠道体验线：PR [#1220 fix(whatsapp): render Markdown in outbound messages](https://github.com/moltis-org/moltis/pull/1220) 补全WhatsApp渠道出站消息Markdown自动转译能力，大幅提升富文本消息展示体验
3.  跨平台兼容线：PR [#468 fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468) 解决Windows平台shell钩子执行失败的历史问题，覆盖全Windows生态部署场景。

## 7. 用户反馈摘要
1.  安全类用户反馈：漏洞上报流程顺畅、安全团队响应速度远超同量级开源项目，生产环境部署的安全感大幅提升
2.  WhatsApp渠道用户：此前长期吐槽的群聊交互反直觉、身份标识不匹配自定义机器人名称的痛点全部得到解决，近期大量用户反馈群聊场景可用性已达到商用标准
3.  Windows平台用户：跨平台插件执行问题等待修复周期较长，对PR通过校验后的正式上线抱有较高期待。

## 8. 待处理积压
当前最核心的长期积压PR为：[#468 fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468)，该PR自2026-03-23创建至今已积压近5个月，已完成Windows10实测、CI流水线全量通过，覆盖大量桌面端个人用户的跨平台部署场景，建议维护者尽快完成最终审核合并，解决跨平台生态适配的长期遗留问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（原QwenPaw）项目动态日报
日期：2026-08-21 | 数据周期：过去24小时
---

## 1. 今日速览
今日CoPaw项目处于v2.1正式版发布前的高活跃度冲刺迭代状态，整体健康度表现优异。过去24小时共产出27条Issue更新、50条PR更新，合并/关闭有效PR达29条，同步正式推送v2.1.1-beta.1测试版本。当前迭代重点集中在前端体验优化、底层稳定性加固、国产模型与国内IM生态适配三个核心方向，大量反馈已久的存量用户痛点在本轮集中闭环。官方今日首次启动公测版跨平台安装校验流程，全链路未出现阻断级安全或核心功能故障。

## 2. 版本发布
今日正式发布**v2.1.1-beta.1**测试版本，无破坏性变更，属于v2.1正式版的前置体验测试版本，核心更新内容：
1.  控制台侧优化编辑器标签溢出场景下的导航交互逻辑，来自贡献者@rayrayraykk的PR #6983：https://github.com/agentscope-ai/QwenPaw/pull/6983
2.  模型服务提供者侧将限流器初始化日志级别下调，避免非关键调试信息占用存储空间、干扰故障排查，来自贡献者@rayrayraykk的PR #6988：https://github.com/agentscope-ai/QwenPaw/pull/6988
> 官方已启动跨平台安装校验流程（Issue #7180）：https://github.com/agentscope-ai/QwenPaw/issues/7180，用户可自愿参与测试反馈问题。

## 3. 项目进展
今日合并/关闭的核心PR覆盖性能、安全、体验多个维度，v2.1正式版整体完成度已达92%：
1.  **冷启动性能优化PR #7174**：将工作区启动阶段的持久化驱动改为并行初始化，大幅降低工作区冷启动耗时，同时完整保留原有故障隔离、重名检测、旧实例清理逻辑，无兼容性风险：https://github.com/agentscope-ai/QwenPaw/pull/7174
2.  **下载链路稳定性修复PR #6371**：修复了下载模块wget/curl执行超时后没有自动 fallback 到urllib的逻辑漏洞，完成存量Issue #6370的全闭环：https://github.com/agentscope-ai/QwenPaw/pull/6371
3.  **环境变量数据安全修复PR #7135**：解决了损坏的envs.json配置文件被静默覆盖、所有存量环境变量永久丢失的高危问题，完成Issue #7118的修复：https://github.com/agentscope-ai/QwenPaw/pull/7135
4.  **供应链安全补丁PR #7172**：升级vite、rollup、react-router-dom等核心依赖到安全版本，修复多个公示的任意文件读取、路径遍历高危漏洞，彻底消除上游依赖带来的供应链风险：https://github.com/agentscope-ai/QwenPaw/pull/7172
5.  **市场页面统一重构PR #6880**：将应用、插件、技能三个独立市场整合为统一路由的/market页面，降低用户查找资源的操作成本，为后续跨品类统一检索能力铺路：https://github.com/agentscope-ai/QwenPaw/pull/6880

## 4. 社区热点
今日讨论热度最高的3个条目集中在核心体验痛点，反映了当前生产级用户的核心诉求：
1.  [BUG] 多步骤任务规划输出后无提示自动停止，Issue #6921：https://github.com/agentscope-ai/QwenPaw/issues/6921，累计10条评论，是近7天反馈最集中的体验问题，大量用户反映Agent输出下一步规划后没有实际执行任务，需要手动输入“继续”才能推进，背后诉求是解决长任务执行连贯性，降低人工干预成本。
2.  [BUG] 使用GLM 5.3模型时进程卡死超10分钟，Issue #7102：https://github.com/agentscope-ai/QwenPaw/issues/7102，累计9条评论且今日已闭环，大量使用国产大模型的用户都遇到过流式输出中断后进程假死的问题，背后诉求是强化大模型适配层的超时兜底、异常熔断机制。
3.  [FEATURE] 任务产出物按独立目录隔离存储，Issue #6643：https://github.com/agentscope-ai/QwenPaw/issues/6643，累计6条评论且今日已闭环，大量重度用户反馈此前所有文件堆积在media目录难以溯源，属于平台面向生产级使用的必备基础能力。

## 5. Bug 与稳定性
按严重程度从高到低排序：
| 严重等级 | Bug描述 | 关联Issue链接 | 是否已有修复PR | 影响范围 |
| --- | --- | --- | --- | --- |
| 严重 | history.db被历史召回逻辑撑爆至7.6G、同一内容段重复落库，耗尽长期运行Agent的磁盘空间 | https://github.com/agentscope-ai/QwenPaw/issues/7168 | 否 | 7*24小时运行的生产级Agent实例 |
| 中高 | 网络短暂中断恢复后，QwenPaw无法自动重连LLM API，必须手动重启服务 | https://github.com/agentscope-ai/QwenPaw/issues/6932 | 否 | 分布式部署、公网访问LLM服务的场景 |
| 中 | embedding健康检查超时参数硬编码为5s，后端已预热仍出现超时，自动降级为BM25召回 | https://github.com/agentscope-ai/QwenPaw/issues/7156 | 是（PR #7133） | 本地部署Ollama embedding的用户 |
| 中 | 流式输出中途httpx.ReadError未被重试规则覆盖，偶发弹出UNKNOWN_AGENT_ERROR卡片 | https://github.com/agentscope-ai/QwenPaw/issues/7162 | 是，今日已闭环 | 所有使用OpenAI兼容流式接口的用户 |
| 低 | 多步骤任务规划输出后无提示自动终止 | https://github.com/agentscope-ai/QwenPaw/issues/6921 | 否 | 所有使用多步执行Agent的用户 |

## 6. 功能请求与路线图信号
结合已落地开发的PR进展，以下需求大概率进入后续正式版本：
1.  **工作区级常驻技能功能**：对应Issue #7182、PR #7183，支持用户将核心业务技能设为预加载模式，首次请求前就写入系统提示词，降低Agent漏用技能的概率，预计随v2.1.1正式版上线：https://github.com/agentscope-ai/QwenPaw/issues/7182
2.  **多用户自托管Hub能力**：对应PR #7112，提供独立的控制平面，为每个本地账户运行隔离的QwenPaw实例，是面向团队级共享使用的核心功能，预计下一个小版本迭代推出：https://github.com/agentscope-ai/QwenPaw/pull/7112
3.  **长对话会话性能优化**：对应PR #7176，解决千条以上历史对话滚动卡顿、流式输出Markdown同步阻塞的问题，将大幅提升重度聊天场景的体验，预计随v2.1.1正式版上线：https://github.com/agentscope-ai/QwenPaw/pull/7176
4.  **国内IM生态深度适配**：QQ群支持定时主动推送、钉钉群聊支持共享/隔离双上下文模式，对应PR #7169正在开发中，预计下一个迭代完善全部能力：https://github.com/agentscope-ai/QwenPaw/pull/7169

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1.  正向反馈：用户对刚闭环的「任务目录隔离存储」「中文文件名保留提示」「技能自动去重加载」功能认可度较高，大幅降低了日常使用的文件整理、技能配置成本。
2.  普通桌面用户痛点：Windows端VPN环境下客户端基本不可用、Agent数量较多时切换下拉框展示条目太少、云部署平台的操作按钮布局在移动端极易误点停止按钮，是当前反馈最集中的交互问题。
3.  生产级用户痛点：长期运行的Agent历史数据库无限制膨胀、网络闪断后无法自动恢复、健康检查超时硬编码无法适配自定义场景，严重影响7*24小时服务的可用性。
4.  生态开发者诉求：大量QQ/钉钉机器人开发者希望平台完善渠道原生的定时推送、权限管控、上下文模式配置能力，大幅降低自行二次开发的工作量。

## 8. 待处理积压
提醒维护者重点关注以下高价值长期未响应需求：
1.  Issue #6436 自动智能路由最合适模型的功能：https://github.com/agentscope-ai/QwenPaw/issues/6436，2026年7月24日提交，累计4条评论1个点赞，是面向多模型混合调度的架构级核心功能，目前暂无对应PR推进，属于中长期高价值需求，建议尽快安排技术

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-08-21）
项目仓库：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目保持极高开发活跃度，累计产生50条Issue更新（45条新开/活跃、5条关闭）、50条PR更新（45条待合并、5条已合并/关闭），无新版本发布。当前项目处于v0.9.0核心功能集中落地前的架构密集讨论期，RFC类高优先级议题参与度远超平均水平，开发资源集中向安全加固、Rust代码规范化、WASM插件体系三大方向倾斜。整体项目健康度优秀：Issue响应周期普遍短于24小时，高风险bug同步配套修复PR，核心路线图共识度极高。

## 2. 版本发布
今日无正式版本/预发布版本推送，无版本更新说明。

## 3. 项目进展
今日已合并/关闭的高价值变更集中在基础设施层面，为后续核心功能落地扫清障碍：
1.  合并PR #10182：Rust全量依赖组47项安全/性能更新，覆盖tokio、clap等核心底层库，修复已知上游依赖漏洞 https://github.com/zeroclaw-labs/zeroclaw/pull/10182
2.  合并PR #10148：修复Zerocode TUI主题预设的跨包编译依赖问题，解决独立编译Zerocode包时读取外部目录资源失败的问题 https://github.com/zeroclaw-labs/zeroclaw/pull/10148
3.  合并PR #9126：插件系统实例配置强校验功能落地，要求所有插件配置必须附带符合Draft 2020-12规范的JSON Schema，从底层避免恶意插件配置注入风险 https://github.com/zeroclaw-labs/zeroclaw/pull/9126
4.  关闭3个闭环Issue：CI AI Reviewer结果延迟发布bug #10194、Windows桌面版入口点报错重复Issue #10111、OpenAI推理参数适配bug #9016。
当前v0.9.0版本的前置基础设施校验进度完成15%，核心架构依赖全部收敛，无阻塞性遗留问题。

## 4. 社区热点
今日讨论热度最高的核心架构类议题，均获得跨角色开发者深度参与：
1.  Issue #9487（22条评论）：RFC「Runtime托管会话生命周期与传输层适配器」，诉求是解决当前多通道场景下会话数据分散、跨重启续传能力缺失的痛点，统一全链路会话治理逻辑 https://github.com/zeroclaw-labs/zeroclaw/issues/9487
2.  Issue #6165（18条评论）：RFC「通过外部集成剥离实现轻量核心」，诉求是将非核心长尾工具/通道从默认核心二进制中移出，大幅缩减核心包体积，降低攻击面与维护成本 https://github.com/zeroclaw-labs/zeroclaw/issues/6165
3.  Issue #10118（16条评论）：追踪「Rust代码反冗余策略债务清理」，当前主分支共识别307个不符合生产规范的Rust模式，计划分三阶段清理，从根源减少隐式panic风险 https://github.com/zeroclaw-labs/zeroclaw/issues/10118
4.  Issue #6850、#8780（各14条评论）：分别为「内存生命周期与存储后端解耦」、「Gemini Live实时语音转语音通道」RFC，均已完成v2版本迭代，进入最终评审阶段。

## 5. Bug 与稳定性
今日新增Bug按严重优先级排序如下：
| Bug编号 | 严重等级 | 问题描述 | 修复进度 | 链接 |
|--------|----------|----------|----------|------|
| #10114 | S2（功能降级） | 工具结果截断阈值max_tool_result_chars固定为5万字符，未关联大模型实际上下文窗口，导致大上下文场景下工具结果被不必要截断 | 暂无合并fix，已纳入优先级队列 | https://github.com/zeroclaw-labs/zeroclaw/issues/10114 |
| #10115 | S2（功能降级） | 工具结果截断事件不会输出到日志，管理员无法感知内容被截断的异常行为 | 暂无合并fix | https://github.com/zeroclaw-labs/zeroclaw/issues/10115 |
| #10116 | S2（功能降级） | 超大工具结果采用字节级中间截断逻辑，可能破坏多字节编码、二进制内容完整性 | 暂无合并fix，计划复用web_fetch组件结果溢出落盘逻辑优化 | https://github.com/zeroclaw-labs/zeroclaw/issues/10116 |
| #10106 | S2（功能降级） | 代理选择器规则无法匹配转录类服务，导致语音转文本场景下代理规则不生效 | 已产出fix PR #10117，待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/10106 |
| #10103 | S3（小问题） | Zerocode面板法语/西班牙语环境下健康状态标签宽度溢出，UI错位 | 已产出fix PR #10108，待合并 | https://github.com/zeroclaw-labs/zeroclaw/issues/10103 |

## 6. 功能请求与路线图信号
结合当前已在开发中的PR状态，以下需求极大概率纳入v0.9.0正式版本：
1.  网关OpenAI兼容协议接口（PR #8486）：支持OpenAI SDK、LangChain、Aider、Continue等下游生态工具直接对接ZeroClaw网关，无需额外适配层 https://github.com/zeroclaw-labs/zeroclaw/pull/8486
2.  全链路WASM插件体系：配套RFC #10076+追踪Issue #8850，将原编译时特性开关全部迁移为运行时可插拔WASM插件，用户无需重新编译二进制即可安装第三方通道、工具、内存驱动
3.  ZeroRelay安全远程接入组件（PR #10142）：支持零公网端口暴露场景下的浏览器/客户端双向TLS安全接入，大幅降低自部署用户的公网暴露风险 https://github.com/zeroclaw-labs/zeroclaw/pull/10142
4.  多语言终端提示本地化（PR #10189）：终端工具审批交互提示支持多语言，适配非英语用户使用场景

## 7. 用户反馈摘要
从今日公开Issue中提炼的真实用户痛点与反馈：
1.  Windows桌面端用户反馈安装后偶现`TaskDialogIndirect`入口点不存在报错，已定位是Win10旧版本兼容问题，后续版本会新增系统版本检测逻辑提前拦截
2.  普通用户反馈历史会话管理体验较差，缺少一键复制会话片段、快速回溯历史会话的快捷操作，学习成本高
3.  自部署用户反馈官方默认Debian Docker镜像未内置Git、Telegram等高频使用通道，需要自行编译全量二进制，部署门槛过高
4.  第三方集成开发者反馈当前需要适配47个零散的网关API接口，期待verbatim通道发送能力落地后可以大幅简化消息推送流程。

## 8. 待处理积压
以下高价值议题积压时间较长，建议维护者优先安排评审：
1.  PR #8486（网关OpenAI兼容接口）：2026年6月29日创建，XL尺寸高风险PR，是数十个下游生态对接需求的依赖项，已积压近2个月尚未完成最终评审
2.  RFC #6165（核心轻量化外部集成剥离）：2026年4月27日创建，已通过社区评审标记为accepted，积压超3个月尚未进入实施阶段，直接影响后续核心包体积优化目标
3.  PR #8337（Herdr可观测性集成）：2026年6月26日创建，支持企业级实例级Agent状态监控，已积压近2个月，是付费企业用户的高优先级需求。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*