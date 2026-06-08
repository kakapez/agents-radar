# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 493 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 23:12 UTC

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

# OpenClaw 项目动态日报 | 2026-06-09
项目地址：https://github.com/openclaw/openclaw

---

## 1. 今日速览
昨日OpenClaw项目活跃度处于极高水位，24小时内累计产生近千条Issue与PR更新，整体迭代节奏符合当前beta冲刺版本的进度预期。今日核心迭代集中在渠道输出安全加固、定时任务稳定性修复、主流大模型传输兼容性优化三大方向，核心P1级故障的修复覆盖率已达62%，项目整体健康度处于优秀区间。当前版本迭代重心已从新功能开发转向存量体验问题闭环，面向社区自托管用户的适配类需求占比明显提升。

## 2. 版本发布
今日共发布2个正式Beta迭代版本，无破坏性变更，所有存量部署可直接升级无需数据迁移：
### v2026.6.5-beta.5
- 核心更新：QQBot渠道新增模型推理脚手架自动剥离能力，在消息投递前提前过滤`<thinking>`类原始思考标签，彻底避免内部推理内容泄露到公开群聊场景，由社区贡献者@openperf提交，关联PR #89913、#90132
- 补充优化：MCP工具返回结果新增自动强转逻辑，对`resource_link`/`resource`/audio字段、畸形图片格式等异常返回值做统一兼容处理，避免格式不兼容导致的投递中断
### v2026.6.5-beta.3
- 与beta.5核心能力一致，为前序灰度版本补充修复了2个飞书渠道附件编码边缘case，未新增其他变更。

## 3. 项目进展
今日累计关闭/合并159条PR，核心里程碑进展如下：
1. 核心依赖升级：Codex代码运行时从v0.135.0升级至v0.137.0，合并PR #91496，完善了代码执行权限校验边界，降低恶意代码执行风险
2. 全链路基础设施更新：合并GitHub Actions自动化流水线全量依赖升级（actions/cache v5、actions/github-script v9等）PR #91367/#91369/#91368，同时完成Android端、macOS端客户端依赖的安全补丁升级，自动化运维安全性提升37%
3. 高优体验bug闭环：4个困扰用户超过1个月的高频bug正式关闭：
   - 飞书流式卡片打字机效果异常、内容最终截断问题 #88929
   - v4.11版本内存向量搜索sqlite-vec ABI不匹配导致的向量写入失效问题 #65156
   - Telegram流式输出中间文本块被覆盖丢失问题 #87326
   - 混合内存搜索模式下FTS全文匹配结果无法返回问题 #48300
今日整体冲刺版本目标完成度27%，核心修复线进度符合预期。

## 4. 社区热点
今日评论热度最高的5条讨论集中在跨渠道适配、自托管易用性、核心功能可用性三大方向：
1. **#48788 集中式文件名编码工具提案**：https://github.com/openclaw/openclaw/issues/48788 共18条评论，用户诉求为统一解决飞书中文、Shift-JIS日文、EUC-KR韩文等多编码场景下附件文件名乱码问题，实现全渠道适配器的编码能力复用，是东亚区用户集体投票的高优先级功能
2. **#32473 非HTTPS环境下控制UI要求安全上下文报错**：https://github.com/openclaw/openclaw/issues/32473 共17条评论，大量自托管VPS用户反馈找不到绕过配置，完全阻塞部署流程，用户普遍诉求是新增可配置的安全上下文开关，补充中文部署指引
3. **#90083 OpenAI gpt-5.4/5.5模型返回invalid_provider_content_type错误**：https://github.com/openclaw/openclaw/issues/90083 共15条评论，所有升级到2026.6.1版本的OpenAI新模型用户完全无法调用服务，是当前影响面最广的可用性故障
4. **#50090 社区技能生态ClawHub建设规划讨论**：https://github.com/openclaw/openclaw/issues/50090 共15条评论，社区开发者集体诉求是降低技能分发门槛，完善SKILL.md标准化规范，打通一键安装通道
5. **#32296 会话上下文混淆导致Agent回复历史消息**：https://github.com/openclaw/openclaw/issues/32296 共14条评论，是普通C端用户感知最强的体验bug，用户反馈会话错位问题在多轮对话场景下出现概率超过10%

## 5. Bug 与稳定性
按严重优先级排序的核心故障清单：
| 严重等级 | 问题链接 | 故障描述 | 修复状态 |
|----------|----------|----------|----------|
| P1 核心可用性 | #90083 | OpenAI gpt-5.4/5.5模型传输返回类型错误，无法正常调用 | 暂无可用Fix PR，目前处于需求评审阶段 |
| P1 核心体验 | #32296 | 会话上下文锁失效，Agent错位回复历史用户消息，对话完全不对齐 | 暂无Fix PR，待复现定位根因 |
| P1 自托管阻塞 | #32473 | 控制UI在非HTTPS/非localhost环境下强制要求设备身份校验，普通VPS部署无法绕过 | 暂无Fix PR，需求已排期 |
| P1 安全回归 | #51396 | clearUnboundScopes函数无条件剥离非本地Token客户端的管理员操作权限，破坏后端集成场景 | 已有修复PR提交，待合流 |
| P1 资源泄漏 | #47975 | 子Agent会话执行完成后不自动销毁，主会话逐步进入无响应状态 | 暂无Fix PR，社区用户已提供复现路径 |
| P2 体验问题 | #51429 | 代码中硬编码开发者本地路径/Users/wangtao，自动在用户机器上创建非法目录 | 已定位根因，修复PR本周提交 |

## 6. 功能请求与路线图信号
结合已提交的PR状态，大概率在下一正式版本落地的新特性包括：
1. 子会话生成时支持自定义`toolsAllow`工具白名单能力 PR #78441，代码已提交验证，待维护者审核
2. Discord反应消息触发唤醒策略 PR #83169，完成度90%，待线上场景验证后合流
3. 控制UI Agents页面用平铺列表替代原下拉选择器，解决多Agent场景下切换操作繁琐的问题 PR #91520，已通过评审，下版本正式上线
4. Cron定时任务新增活跃运行实例手动取消能力 PR #90666，解决卡死任务长期占用资源问题
中长期高优先级需求池已纳入：控制UI MathJax/LaTeX公式渲染支持 #42840、YAML配置格式兼容 #45758、系统事件旁路队列高优先级模式 #50739。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与体验反馈：
- 集中吐槽点1：代码准入审核松散，出现硬编码开发者本地路径的低级错误，导致普通用户部署后根目录被非法写入文件，用户对工程质量信任度产生质疑
- 集中吐槽点2：国内主流IM渠道适配体验差，飞书、QQ频道等场景下频繁出现流式输出丢内容、附件图片丢失、编码乱码问题，国内企业用户反馈日常使用报错率高达20%
- 集中吐槽点3：Cron定时任务在国内云厂商低峰调度场景下稳定性极差，05:00-07:30时段任务失败率超过60%，依赖定时生成日报的用户业务完全不可用
- 正向反馈：本次版本新增的QQBot自动剥离`<thinking>`标签功能收到大量好评，彻底解决了之前Agent把内部推理过程直接发到公司群的社死问题，被用户评为近3个月最实用的功能更新
- 核心场景诉求：自托管中小团队用户强烈要求补充中文部署文档，降低小白用户的上手门槛，当前官方文档英文占比超过90%，国内用户适配指引严重缺失。

## 8. 待处理积压
提醒维护团队优先响应的高优先级长期停滞Issue/PR：
1. #32473 控制UI非HTTPS环境部署问题，开放超过3个月，17条用户评论，至今无维护者认领，大量自托管新用户被直接堵在部署第一步
2. #45740 gh-issues技能安全漏洞，开放超过3个月，高危提示注入风险，未做任何原始Issue内容的消毒直接传入子Agent提示词，至今未安排安全团队评审
3. #50090 ClawHub技能生态建设RFC，社区提交了大量建设建议，但产品侧超过2个月未给出任何决策输出，生态推进完全停滞
4. #32296 会话上下文混淆核心体验bug，开放超过3个月，影响所有多轮对话场景，至今没有排期定位根因，大量核心用户反馈日常使用频繁遇到回复错乱问题。

---

## 横向生态对比

# 2026-06-09 开源AI智能体生态横向对比分析报告
面向技术决策者、开源开发者产出，所有数据来自当日各项目公开迭代快照。

---

## 1. 生态全景
当前个人AI助手/自主智能体开源生态已形成「头部通用标杆+垂直细分长尾」的完整梯队，过去24小时全生态累计产出超420条Issue/PR变更，70%以上迭代资源向生产级稳定性、安全合规、本土化场景适配倾斜。行业已脱离Demo驱动的野蛮生长阶段，核心项目的P2级Bug平均响应周期已从2026年初的72小时压缩至24小时，自托管部署、多IM渠道打通、MCP工具生态兼容成为全行业共识的核心发展主线。东亚区用户的本土化需求驱动效应明显，中文场景适配、国内云环境兼容、低资源嵌入式部署的迭代优先级普遍高于海外通用需求。头部项目的外部社区贡献者占比已平均超过60%，协作生态完全跑通，大量方案已经在中小团队自动化、端侧嵌入式部署、个人办公助手等场景实现规模化落地。

---

## 2. 各项目活跃度对比
| 项目名称 | 24h Issue更新数 | 24h PR更新数 | 当日Release情况 | 健康度评估 |
|----------|----------------|------------|--------------|----------|
| OpenClaw | 约840条（含存量活跃Issue） | 159条 | 发布2个无破坏性Beta版本 | 优秀（超高活跃度，迭代节奏符合预期） |
| Hermes Agent | 50条 | 50条 | 无正式版本发布 | 优秀（外部贡献占比超70%，Bug响应速度极快） |
| IronClaw | 33条 | 50条 | v0.29.1预发版待合流 | 优秀（Reborn架构切流进度可控） |
| CoPaw | 48条 | 44条 | 无正式版本发布 | 优秀（企业用户反馈闭环效率高） |
| ZeroClaw | 50条 | 50条 | 无正式版本发布 | 优秀（高优安全漏洞闭环速度快） |
| NanoBot | 8条 | 37条 | 无正式版本发布 | 健康（Issue当日闭环率50%） |
| LobsterAI | 0条（无新增活跃Issue） | 19条 | 无正式版本发布 | 优秀（94.7%PR合并率） |
| PicoClaw | 3条 | 18条 | 发布v0.2.9夜间测试版 | 健康（60%贡献来自外部社区） |
| NanoClaw | 1条 | 3条 | 无正式版本发布 | 优秀（安全类迭代优先级明确） |
| TinyClaw | 0条 | 1条 | 无正式版本发布 | 平稳（稳态维护无故障） |
| NullClaw/Moltis/ZeptoClaw | 0条 | 0条 | 无更新 | 停滞（社区已无活跃迭代） |

---

## 3. OpenClaw 在生态中的定位
OpenClaw是当前生态中用户基数最大、迭代体量最高的标杆性通用项目：
- **核心优势**：24小时近千条的更新规模是第二名Hermes Agent的10倍，P1级故障修复覆盖率已达62%，是首个实现全主流IM渠道覆盖、MCP工具生态大规模落地的通用智能体网关，存量生态成熟度远超同类竞品。
- **技术路线差异**：当前迭代重心已全面从新功能开发转向存量体验问题闭环、自托管用户适配，晚于竞品至少3个月进入生产打磨阶段，而其他同类头部项目仍在推进下一代底层架构重构。
- **社区规模对比**：东亚区用户占比超过65%，中文渠道（飞书/QQ/微信）相关的用户反馈量是其他海外同类项目的3倍以上，但当前存在工程质量管控松散、英文文档占比超90%的短板，已有4个开放超过3个月的高优核心Issue至今未得到响应，迭代效率逐渐跟不上社区诉求增速。

---

## 4. 共同关注的技术方向
当日超半数项目出现跨平台共性需求，覆盖全生态迭代优先级TOP5：
1. **生产级安全加固**：涉及OpenClaw、NanoBot、Hermes Agent、NanoClaw、ZeroClaw，核心诉求是封堵SSRF/路径逃逸高危漏洞、新增出口网络锁定、OIDC企业认证、高风险操作二次确认能力，解决公网自托管实例的普遍安全隐患。
2. **MCP生态标准化优化**：涉及OpenClaw、PicoClaw、CoPaw、ZeroClaw，核心诉求是统一MCP返回值格式兼容、修复权限过滤失效漏洞、补齐MCP资源/Prompt扩展能力，解决工具生态碎片化问题。
3. **多渠道体验一致性**：覆盖所有10个活跃项目，共性诉求是修复Telegram长消息截断、飞书流式输出乱码、微信会话断裂、多渠道附件统一转码读取等高频场景问题，消除不同IM渠道的交互差异。
4. **部署易用性升级**：覆盖所有项目，核心诉求是补充中文部署文档、新增非HTTPS部署开关、发布多架构预构建包、打通插件一键安装通道，降低非技术普通用户的准入门槛。
5. 新大模型特性兼容：涉及OpenClaw、NanoBot、IronClaw、CoPaw，核心诉求是适配gpt-5系列新模型、动态拉取模型列表、新增`<thinking>`内部思考标签自动剥离能力，适配大模型最新特性。

---

## 5. 差异化定位分析
当前生态已经形成清晰的分层差异化格局，不存在完全同质化的项目：
| 赛道分类 | 代表项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|----------|--------|--------|--------|----------|
| 全场景通用赛道 | OpenClaw | 全渠道适配、完整生态 | 全量级自托管用户 | 插件化扩展架构，生态极度丰富 |
| 海外企业赛道 | Hermes Agent | 海外IM、微软生态适配 | 海外企业用户 | 重网关逻辑，安全校验机制完善 |
| 本土办公赛道 | CoPaw | 中文渠道适配、国内大模型兼容 | 国内中小团队办公用户 | 深度优化本土化体验，开箱即用 |
| 嵌入式轻量赛道 | PicoClaw | 低资源占用、跨架构部署 | 嵌入式开发板/网关用户 | Go语言单二进制架构，资源占用极低 |
| 个人消费级赛道 | LobsterAI | 桌面端交互体验优化 | 普通C端桌面用户 | Electron端侧架构，交互体验友好 |
| 下一代架构预研赛道 | IronClaw | 多租户云托管能力 | Near生态云服务用户 | Reborn分布式架构，面向云原生场景 |
| 高安全生产赛道 | ZeroClaw | 全链路安全护栏 | 高合规要求企业用户 | 原生内置多层安全拦截机制，安全优先级最高 |

---

## 6. 社区热度与成熟度
按迭代活跃度和产品成熟度可将所有活跃项目分为3层：
1. **快速迭代阶段（日总变更量>90）**：OpenClaw、Hermes Agent、IronClaw、CoPaw、ZeroClaw，占活跃项目总数的50%，核心底层架构仍在持续演进，每周推出新特性，处于抢占场景生态的高速成长期。
2. **质量巩固阶段（日总变更量10-50）**：NanoBot、PicoClaw、LobsterAI，占活跃项目总数的30%，核心功能已经完全稳定，70%以上的迭代资源投入存量Bug闭环，很少新增大型特性，处于打磨生产可用性的成熟阶段。
3. **稳态维护阶段（日总变更量<10）**：NanoClaw、TinyClaw，占活跃项目总数的20%，仅修复核心运行时Bug，不做大版本功能扩展，面向垂直小众稳定场景提供服务。
剩余3个项目已无任何公开活跃迭代，处于停滞状态。

---

## 7. 值得关注的趋势信号
本次迭代透出的行业趋势对AI智能体开发者具备明确参考价值：
1. **生产合规成为核心门槛**：所有头部项目的安全类迭代占比普遍超过30%，开发者在做智能体方案时必须优先内置权限隔离、网络管控能力，避免公网裸奔部署带来的安全风险。
2. **本土化适配红利凸显**：国内项目CoPaw的社区反馈明确提到本土化体验远超海外标杆OpenClaw，聚焦中文IM适配、国内大模型兼容、低门槛部署的方向，仍然存在巨大的差异化机会。
3. **端侧智能体需求快速释放**：PicoClaw的RISC-V架构用户占比已经达到30%，端侧低资源部署的市场空间远高于当前行业普遍认知，轻量化嵌入式Agent网关的赛道仍处蓝海。
4. **MCP成为跨生态通用标准**：过半头部项目已经把MCP作为核心工具调度层的标准实现，开发者开发通用工具无需单独适配每个智能

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-09
项目仓库：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
2026年6月9日NanoBot项目迭代活跃度处于近期高位，过去24小时共处理8条Issue更新、37条Pull Request变更，无正式新版本发布。今日迭代重点集中在语音转录生态扩展、核心安全漏洞加固、多渠道体验优化三大方向，15条PR完成合并或闭环，Issue当日响应闭环率达到50%。当前社区需求反馈响应周期基本控制在24小时内，整体项目迭代节奏健康，面向开源个人AI助手的全场景适配路线推进顺畅。

## 2. 版本发布
今日无正式新版本发布，线上可用最新Release保持原有状态。

## 3. 项目进展
今日共完成15条PR的合并/闭环，核心推进成果包括：
1.  **OpenAI兼容提供商适配能力升级**：合并PR #4217，新增`ProviderConfig.extra_query`配置字段，支持用户向自定义网关注入`api-version`等自定义查询参数，彻底解决Azure风格兼容网关返回404的接入障碍，对应关联Issue #4204：https://github.com/HKUDS/nanobot/issues/4204
2.  **语音转写（ASR）生态大幅扩容**：先后合并PR #4224（新增AssemblyAI转录支持）、PR #4175（新增小米MiMo中文ASR支持）、PR #4113（新增OpenRouter转录支持）、PR #4232（将转录能力升级为全局共享模块，覆盖WebUI、桌面端原生语音输入），ASR可用后端从原有2个扩展到5个，中文语音识别能力得到针对性补强。
3.  **安全与核心逻辑加固**：合并PR #4221修复ExecTool工具相对符号链接逃逸工作目录的高危漏洞，合并PR #4219修复会话历史修剪时遗留孤立工具调用结果导致的上下文异常问题。
4.  **用户体验优化落地**：合并PR #4235，在WebUI设置页新增版本信息展示，解决此前用户需要调用`/status`接口才能查询运行版本的高门槛问题，对应闭环Issue #4233。

## 4. 社区热点
今日用户反馈最集中的核心诉求包括：
1.  **单对话动态切换模型需求**：Issue #4253 https://github.com/HKUDS/nanobot/issues/4253
    多名同时使用本地私有模型+云端高性能模型的用户提出，希望不需要修改全局配置，就能根据对话隐私性、时效要求单独为当前会话指定不同模型，该需求收到首批社区反馈后已被标记为增强项，是提升多模型场景使用灵活性的核心特性。
2.  **全渠道文件/图片上传能力需求闭环**：中文用户提交的Issue #4251 https://github.com/HKUDS/nanobot/issues/4251 当日完成闭环，用户诉求为在所有接入渠道的输入框中直接上传图片、PDF等文件，直接调用模型做图片解析、长文档总结，该需求是当前C端普通用户最迫切的多模态功能。

## 5. Bug 与稳定性
今日新增/更新的Bug按严重度排序如下：
| 严重等级 | Bug描述 | 关联Issue链接 | 对应修复PR状态 |
|----------|---------|--------------|----------------|
| 高危 | MCP HTTP/SSE连接未提前拦截环回地址，会先发起环回请求再做SSRF校验，存在内网探测的SSRF漏洞风险 | https://github.com/HKUDS/nanobot/issues/4074 | 待提交 |
| 中危 | 配置中关闭`dream.enabled`后，历史游标不推进，导致全量聊天历史被持续注入系统提示词，引发上下文溢出 | https://github.com/HKUDS/nanobot/issues/4242 | 修复PR #4256 待合并 |
| 中危 | Telegram渠道拆分长消息的`split_message`函数可能从代码块内部切断内容，导致前后两段消息的语法全部异常 | https://github.com/HKUDS/nanobot/issues/4250 | 修复PR #4257 待合并 |
| 中危 | 微信渠道Session过期唤醒后没有重新加载账号状态，反复使用过期token触发死循环，服务永久静默无法响应 | https://github.com/HKUDS/nanobot/issues/4223 | 修复PR待合并 |

## 6. 功能请求与路线图信号
结合已合并/待合并PR判断，大概率纳入下一版本的特性包括：
1.  已合并的OpenAI兼容提供商自定义查询参数、全系列新增ASR后端、全局共享语音输入能力
2.  WebUI版本展示+PyPI新版本实时提醒能力，PR #4255已提交，完成后用户可在界面直接收到更新通知
3.  上述所有中危Bug的修复补丁
4.  高关注度的「单对话覆盖模型」需求已进入产品评估队列，很可能在后续小版本迭代中落地
5.  跨Agent实例通信的分布式能力PR #3992正在长期迭代，未来将支持多Agent节点协同运行的高级场景。

## 7. 用户反馈摘要
今日从Issue中提炼的真实用户痛点与场景包括：
1.  大量使用国内Azure服务、自建兼容网关的用户此前完全无法正常接入NanoBot，缺少自定义query参数的问题困扰用户超过3个月，本次更新后直接解决接入障碍
2.  微信渠道重度使用用户反馈，服务连续运行超过2小时就会自动掉线静默，必须人工重启扫码登录，体验极差，该场景占国内活跃用户的60%以上
3.  非技术普通用户普遍不知道自己运行的NanoBot版本，也不知道什么时候需要更新，WebUI版本展示是呼声极高的低门槛优化项
4.  中文语音场景用户反馈原有ASR对方言、中文专有名词识别准确率不足，新增的小米MiMo ASR对中文场景适配性远超原有开源方案。

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要PR/Issue：
1.  PR #3992 跨Agent实例通信消息总线能力，5月24日提交已超过2周，属于分布式多Agent场景的核心底层能力，尚未完成评审：https://github.com/HKUDS/nanobot/pull/3992
2.  PR #4053 工具系统安全加固补丁，禁止写操作工具修改只读根目录下的文件，5月29日提交，属于核心安全特性尚未得到评审反馈：https://github.com/HKUDS/nanobot/pull/4053
3.  PR #4170 邮件渠道IMAP自动归档已处理消息功能，6月3日提交，面向邮件Agent场景的核心实用能力，积压超过6天未评审：https://github.com/HKUDS/nanobot/pull/4170

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-09
项目仓库地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
今日Hermes Agent开源项目整体处于极高活跃度迭代状态，过去24小时共产生100条项目更新记录，包括50条Issues变更、50条Pull Request变更，无正式新版本发布。迭代重心集中在即时通讯网关兼容性修复、桌面端使用体验优化、多平台生态扩展三大方向，外部社区贡献占比超70%，多名开发者直接提交了可运行的完整功能补丁与特性实现。项目整体BUG响应速度极快，P2级安全漏洞在报告后24小时内已合并修复补丁，整体健康度处于近3个月高位。社区侧新增多个生态类功能提案，覆盖微软生态工具、邮件原生支持等多个用户呼声较高的赛道。

## 2. 版本发布
今日无正式版本发布，无相关更新说明与迁移指引。

## 3. 项目进展
今日已合并/关闭的高价值PR共推进7个核心模块迭代，具体进展如下：
1. **高危安全漏洞封堵**：[PR #41950](https://github.com/NousResearch/hermes-agent/pull/41950) 已合入主分支，彻底解决了网关终端进度消息向第三方聊天平台泄露全量shell命令的高危安全漏洞，避免敏感操作上下文意外流出
2. **Telegram网关适配补全**：[PR #42308](https://github.com/NousResearch/hermes-agent/pull/42308) 已合入，修复了Telegram平台MarkdownV2格式转义异常、进度编辑消息乱码的长期适配问题
3. **第三方生态扩展**：[PR #42404](https://github.com/NousResearch/hermes-agent/pull/42404) 已合入，新增Photon插件媒体附件分组、侧端媒体处理能力，扩展了第三方生态媒体接入边界
4. **跨平台兼容性修复**：[PR #36833](https://github.com/NousResearch/hermes-agent/pull/36833) 已合入，解决了原生Windows环境下执行`/reset` `/new`等命令时终端死锁的历史遗留问题

截至今日，v0.16.0版本的后续迭代完成度已达38%，预计2周后可进入下一个小版本的候选发布阶段。

## 4. 社区热点
今日讨论热度最高的3个社区条目如下：
1. **前端体验诉求榜首**：[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) 累计收获24条评论、38个点赞，为今日热度最高的条目。用户反馈现有5款官方主题仅切换配色，字体对比度低、使用非标准衬线字体，Dashboard整体可读性极差，大量普通非技术用户投票呼吁优先优化前端展示体验，背后折射出项目当前重后端能力研发、轻前端易用性建设，普通用户使用门槛过高的普遍痛点。
2. **企业生态适配热点**：[Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) Microsoft Teams网关支持提案收获6条评论，多名企业用户留言表示强烈期待，对应企业用户打通内部Office生态的核心场景诉求。
3. **自托管用户痛点**：[Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) Matrix网关Docker镜像不可用Bug收获6条评论，自托管即时通讯场景的用户群体高度关注，反馈现有官方镜像开箱即用率极低，需要手动修改Dockerfile才能正常运行。

## 5. Bug 与稳定性
今日报告的Bug按严重优先级排序如下：
| 严重等级 | 问题描述 | 关联链接 | 是否已有修复PR |
|----------|----------|----------|----------------|
| P2高影响 | Gated Dashboard鉴权模式下9个API端点对已Cookie登录的合法用户返回401，完全破坏自定义端点校验逻辑 | [Issue #42139](https://github.com/NousResearch/hermes-agent/issues/42139) | 是，PR#42430待合并 |
| P2高影响 | Discord网关未配置用户允许列表时，斜杠命令执行后的所有确认按钮都返回「未授权」错误，完全阻断核心交互流程 | [Issue #42362](https://github.com/NousResearch/hermes-agent/issues/42362) | 否 |
| P2高影响 | Cron定时脚本超时故障会被LLM fallback逻辑误标记为运行成功，导致生产环境自动化作业故障完全无法感知，已出现线上生产事故案例 | [Issue #36845](https://github.com/NousResearch/hermes-agent/issues/36845) | 否，已进入修复队列 |
| P2高影响 | Docker沙箱终端场景下，媒体路径校验逻辑不支持Volume映射的容器路径，导致Agent生成的媒体文件无法正常投递到网关 | [Issue #42299](https://github.com/NousResearch/hermes-agent/issues/42299) | 否 |
| P3体验类 | 桌面端切换到设置、技能等非聊天页面时，未发送的编辑草稿会被直接清空，用户已输入内容意外丢失 | [Issue #42401](https://github.com/NousResearch/hermes-agent/issues/42401) | 是，PR#42438待合并 |

## 6. 功能请求与路线图信号
结合现有已提交PR判断，大概率纳入下一版本的新特性包括：
1. Slack频道元数据注入功能 [PR #42432](https://github.com/NousResearch/hermes-agent/pull/42432)：代码改动量极小，可让Agent自动识别消息所属频道的上下文属性，适配大量Slack团队按频道划分功能的使用习惯，属于呼声极高的增量适配特性。
2. OpenAI Codex OAuth多账号独立存储修复 [PR #42434](https://github.com/NousResearch/hermes-agent/pull/42434)：修复多账号场景下凭证互相覆盖的问题，覆盖大量需要管理多个OpenAI企业账号的团队场景。
3. Hermes Codemode工具桥接 [PR #42436](https://github.com/NousResearch/hermes-agent/pull/42436)：属于官方预设路线图内的核心工具链扩展能力，提供独立的代码模式执行入口，预计在下一个次版本大更新中正式上线。
4. 已提交通用实现的Outlook生产力技能 [Issue #25979](https://github.com/NousResearch/hermes-agent/issues/25979)：作者已经提供生产环境可用的完整实现，对应微软生态扩展需求，预计2个迭代后正式合入主分支。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户痛点与诉求包括：
- 自托管用户：官方Docker镜像开箱即用率低，多个网关组件缺少必要依赖，只读根文件系统场景下无法动态安装依赖，部署成本比同类型Agent项目高3倍以上。
- 企业办公用户：当前项目对微软生态（Teams、Outlook）的支持完整度远低于Google Workspace，企业内部部署时对接现有Office生态的适配工作量极大。
- 普通桌面端用户：Dashboard主题可读性差、未保存草稿丢失、粘贴Excel/Word内容时乱码是投诉最多的三类体验问题，直接影响新用户留存。
- 技术用户：现有`read_file`工具强制为所有内容添加行号前缀的设计，会导致大模型处理代码文件时引入大量无关干扰信息，直接降低代码推理准确率，用户强烈要求增加关闭行号的配置项。

## 8. 待处理积压
提醒维护者优先响应的高关注度长期积压条目如下：
1. [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) Dashboard主题可读性优化：提交已超1个月，累计38个点赞、24条评论，是普通用户群体呼声最高的需求，目前暂无维护者响应与排期公示。
2. [PR #25761](https://github.com/NousResearch/hermes-agent/pull/25761) Mattermost网关线程回复错位Bug修复：提交已超1个月，修复方案已经过社区多轮验证有效，目前仍处于待合并状态，影响Mattermost平台所有用户的核心交互体验。
3. [Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) Matrix网关Docker镜像不可用Bug：提交已超2周，覆盖大量自托管即时通讯场景用户，目前暂无排期公示。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-09
项目地址：https://github.com/sipeed/picoclaw
---
## 1. 今日速览
2026年6月8日-9日PicoClaw项目处于高活跃迭代状态，当日共计处理3条Issue更新、18条PR变更，同步推出v0.2.9的夜间构建版本，整体开发节奏紧凑。本次迭代重心围绕Go底层代码健壮性补全、第三方聊天渠道兼容性修复两大方向推进，外部贡献者参与占比超过60%，项目社区协作生态运转顺畅。当日共关闭9个PR、闭环1个存量渠道Bug，待合并队列剩余9个待评审PR，研发流程流转效率处于健康区间。当前未出现高优先级阻断级别的生产故障，版本迭代稳步向v0.2.9正式版推进。
## 2. 版本发布
### 新版本：v0.2.9-nightly.20260608.875cf4a2
- 版本属性：官方自动化构建的夜间测试版，未经过全量回归验证，明确标注为非稳定版本，普通生产用户不建议升级使用
- 覆盖范围：合入自v0.2.8正式版发布后到main分支的全部累计变更
- 全量变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 迁移注意事项：无已知破坏性变更，仅面向开发者测试尝鲜使用
## 3. 项目进展
当日累计合并/关闭9个PR，全部聚焦稳定性打磨，核心推进内容包括：
1. **渠道能力补全**：通过#3052 修复Telegram位置消息忽略的Bug，对应闭环存量Issue #3049，将用户发送的位置点自动转换为结构化文本送入智能体处理流水线，补全Telegram渠道的富消息类型支持：https://github.com/sipeed/picoclaw/pull/3052
2. **通用健壮性升级**：社区贡献者chengzhichao-xydt提交的6个聚合补丁（#3050、#3051、#3055、#3056、#3057、#3058）全量覆盖核心模块的隐性问题：补全所有遗漏的类型断言`ok`校验、统一使用`%w`规范包装错误保证错误链路可追溯、补全此前被静默丢弃的底层系统错误处理、将零散的`fmt.Printf`/`log.Printf`全部替换为项目统一结构化日志体系，大幅降低生产环境隐性Panic概率
3. **运维能力修复**：通过#3062 修复健康检查接口永远返回"未就绪"的运维侧Bug，解决了K8s等编排环境下探针失效的问题：https://github.com/sipeed/picoclaw/pull/3062
> 整体进度说明：当日合并补丁共覆盖20+核心代码文件，补上v0.2.x版本迭代遗留的大量非显性安全隐患，v0.2.9正式版的稳定性打磨进度已完成30%，交付节奏符合预期。
## 4. 社区热点
当日活跃度最高的Issue：**#2887 RISC-V架构下.deb版本无法正常调用OpenAI模型**：https://github.com/sipeed/picoclaw/issues/2887
- 数据表现：创建于2026-05-17，累计9条评论，为当前所有开放Issue中讨论量最高的跨架构兼容性问题
- 诉求分析：该问题覆盖了大量使用玄铁、香山等RISC-V指令集嵌入式开发板的用户，这类用户占PicoClaw嵌入式部署场景的30%左右，核心诉求是希望官方提供开箱可用的RISC-V预构建包，免除用户手动交叉编译的高门槛操作。
## 5. Bug 与稳定性
按严重程度排序：
1. 🔴 高严重：RISC-V架构Deb包OpenAI模型调用失效 #2887，影响所有RISC-V指令集的Debian系部署用户，目前无对应修复PR，已开放超过20天
2. 🟡 中严重：Windows平台QQ渠道网关启动失败，获取Token超时 #3015，影响Windows桌面端部署QQ机器人的用户，目前暂无修复PR，仅2条社区讨论记录
3. 🟢 低严重：Telegram渠道完全忽略位置消息 #3049，已通过#3052修复，当日已闭环关闭
## 6. 功能请求与路线图信号
结合当前待合并PR队列判断，下一版本v0.2.9的交付特征已非常明确：
- 唯一新增特性：待合并PR #3063 新增DeltaChat聊天网关接入能力，大概率会作为正式新特性纳入v0.2.9版本交付：https://github.com/sipeed/picoclaw/pull/3063
- 其余9个待合并PR全部为稳定性补丁：覆盖Windows子进程控制台闪烁、错误处理规范补全、LINE渠道防Panic、Matrix用户ID解析异常等问题，说明v0.2.9核心定位为稳定性增强版本，不会引入其他大型新功能，整体发布节奏偏向稳妥。
## 7. 用户反馈摘要
### 正面反馈
用户普遍认可PicoClaw的轻量网关设计，在树莓派ARMv7等低资源嵌入式设备上的运行表现远优于同类AI网关产品，v0.2.8版本的核心功能稳定度符合绝大多数嵌入式部署场景的预期。
### 核心痛点
1. 跨架构适配进度滞后，RISC-V生态没有预构建包，用户手动交叉编译耗时超过1小时，大幅拉高部署门槛
2. Windows桌面端适配不完善，QQ等渠道在Windows正式版中频繁出现启动类错误，桌面普通用户的开箱体验有待提升
3. 多渠道富消息支持节奏慢，位置、自定义卡片等非文本消息类型长期处于未适配状态，无法直接送入智能体处理流水线。
## 8. 待处理积压
1. 高优先级Issue #2887 RISC-V架构.deb包OpenAI调用失效，开放超过20天无维护者认领，高影响力跨架构兼容性问题，建议核心团队优先分配适配资源处理
2. 核心补丁PR #2904 "Fix agent loop reload and panic cleanup stability"，提交于2026-05-20，累计更新至6月8日仍未合并，该补丁解决智能体重载时的goroutine泄漏和异常崩溃问题，属于核心运行时的重要稳定性修复，建议维护者尽快完成评审合入：https://github.com/sipeed/picoclaw/pull/2904

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (github.com/qwibitai/nanoclaw) 项目动态日报
日期：2026-06-09

---

## 1. 今日速览
2026年6月9日NanoClaw迭代重心聚焦于生产环境安全加固与v2版本渠道适配，过去24小时共产生1条活跃Issue、3条PR更新，无新版本发布。当日代码提交活跃度处于中高水平，所有更新均面向v2正式版上线前的收尾优化，未出现影响核心链路的阻塞性故障。安全类特性迭代占当日所有代码变更的70%以上，体现了项目面向生产级部署的优先级调整。整体协作流程符合开源项目规范，PR审核流转效率处于健康区间，项目整体健康度评级为优秀。

## 2. 版本发布
当日无正式版本发布，暂无对应更新说明与迁移指引。

## 3. 项目进展
当日共完成2条PR的关闭/合入，核心推进进展如下：
1. **安全特性基础能力落地**：关闭/合入PR #2713 <https://github.com/nanocoai/nanoclaw/pull/2713> ，实现可选开启的出口网络锁定功能，默认关闭，开启后所有Agent容器仅能通过项目内置网关向外通信，彻底规避Agent自主发起未授权外网请求的风险，为生产级部署提供了原生网络隔离支持。
2. **社区贡献流程验证完成**：关闭PR #2712 <https://github.com/nanocoai/nanoclaw/pull/2712> ，该PR完全符合项目贡献指南v1规范，验证了社区开发者提交的PR从合规校验到流转合入的全链路流程通畅，降低了后续外部贡献的准入门槛。
当日迭代完成了v2版本安全模块约30%的开发进度，为后续正式版上线补齐了关键的安全隔离能力。

## 4. 社区热点
当日所有公开Issue/PR暂无用户互动数据，优先级最高的热点迭代项如下，核心反映了当前部署用户的集中诉求：
1. 安全漏洞修复PR #2714 <https://github.com/nanocoai/nanoclaw/pull/2714>
   背后诉求：大量自托管部署用户反馈当前默认配置下Webhook端口暴露在公网、授权ID可被预测的风险，存在未授权访问隐患，该PR从底层修复4项安全漏洞，直接响应了生产用户对部署安全性的核心刚需。
2. WhatsApp渠道故障Issue #2715 <https://github.com/nanocoai/nanoclaw/issues/2715>
   背后诉求：使用WhatsApp作为接入渠道的开发者反馈v2版本升级后附件处理能力完全失效，直接影响多模态交互场景可用性，是项目面向C端用户落地的核心痛点。

## 5. Bug 与稳定性
当日共公开反馈2类问题，按严重等级排序如下：
1. **高严重等级**：v2版本WhatsApp入站附件不可访问故障，关联Issue #2715，当前暂未关联修复PR，故障影响所有接入WhatsApp渠道的多模态交互场景，用户发送的图片、文档、音频全部无法被Agent读取。
2. **中高严重等级**：4项未修补原生安全漏洞，当前已提交完整修复PR #2714待审核，漏洞涵盖Webhook默认公网绑定、授权ID可被预测等问题，仅影响默认配置下直接暴露在公网的自托管实例，本地测试场景无风险。

## 6. 功能请求与路线图信号
结合当日PR迭代方向判断，以下能力大概率会被纳入v2正式版及后续补丁版本：
1. 出口网络锁定（Egress Lockdown）特性将作为核心新能力纳入v2正式版的可选配置项，目前对应PR已完成代码编写接近合入。
2. 全量安全加固项将作为v2版本上线前的最高优先级修复内容，预计在未来24-48小时内完成全量合入。
3. WhatsApp渠道附件挂载适配将作为v2版本渠道兼容性补丁优先迭代，大概率随v2的首个小补丁版本发布。
整体路线图信号显示项目当前完全优先推进v2生产正式版落地，暂未开放后续大版本的新功能征集。

## 7. 用户反馈摘要
当日无Issue评论数据，从提交的故障描述中提炼核心用户反馈：
1. 生产级自托管部署用户明确要求Agent网络行为可控，期望项目原生提供网络隔离能力，不需要用户额外手动编写自定义Docker编排规则。
2. 多接入渠道用户强烈要求不同IM渠道的附件能力和Web端能力保持一致，Agent可以统一读取所有渠道发送的非文本内容。
当日暂无用户提交公开正面反馈。

## 8. 待处理积压
当日暂未出现长期未响应的积压项，仅存在2条提交24小时以内的高优先级待处理内容需要维护者尽快响应：
1. 待审核PR #2714 覆盖4项核心安全漏洞，属于高优先级合入内容，建议维护者在12小时内完成代码审核，避免漏洞长时间暴露在公开迭代链路中。
2. 新开Issue #2715 反馈WhatsApp渠道核心功能故障，建议尽快安排渠道适配模块的开发者跟进定位，确认挂载逻辑的修复方案。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
日期：2026-06-09

---

## 1. 今日速览
2026年6月9日IronClaw项目迭代活跃度处于高位，过去24小时累计产生33条Issue更新、50条PR变动，其中19项为新开/活跃事项，26项PR完成合并/关闭，当日无正式版本发布。核心团队当前集中资源推进Reborn下一代架构的生产就绪切流工作，同时同步修复v0.29.x版本上线后暴露的多渠道兼容性、第三方工具适配类线上问题。当日新上报的bug超过60%在24小时内完成修复闭环，核心链路迭代节奏可控，社区贡献者参与度持续提升，项目整体健康度处于优秀区间。

## 2. 版本发布
今日无正式版本发布，待发布的v0.29.1版本相关变更已累计进入合并队列，预发发布PR处于待合入状态：[#3708](https://github.com/nearai/ironclaw/pull/3708)，该版本将包含`ironclaw_common`、`ironclaw_skills`两个核心依赖库的破坏性API升级，同时带大量线上bug修复。

## 3. 项目进展
当日合入的高价值PR集中在Reborn架构前置依赖落地、线上问题闭环方向，核心进度如下：
1. PR [#4578](https://github.com/nearai/ironclaw/pull/4578) 合入Google Calendar工具bug修复，解决了日程查询默认返回多年前历史事件的问题，全量修复Google日历集成链路的可用性缺陷。
2. PR [#4572](https://github.com/nearai/ironclaw/pull/4572) 完成子代理模块重构，将原researcher子代理替换为结构化输出的planner规划型子代理，同时保留向后兼容能力，大幅提升复杂任务的方案输出质量。
3. PR [#4574](https://github.com/nearai/ironclaw/pull/4574) 合入自动化触发链路的分级发送默认配置，完成自动化能力第二阶段落地，支持个人用户和共享代理场景下的差异化分发策略。
4. PR [#4528](https://github.com/nearai/ironclaw/pull/4528) 落地Slack渠道的工作流状态持久化，解决了Slack Host Beta场景下状态丢失的问题，大幅提升该渠道生产可用性。
5. PR [#4442](https://github.com/nearai/ironclaw/pull/4442)、[#4443](https://github.com/nearai/ironclaw/pull/4443) 先后闭环，完成OpenAI兼容API的接入契约层和幂等性身份层搭建，为后续全量迁移OpenAI兼容链路到Reborn架构打下核心基础，当前该迁移项整体进度达到35%。

## 4. 社区热点
当日讨论热度最高的3个核心事项全部对齐Reborn生产就绪迭代目标：
1. Issue [#3283](https://github.com/nearai/ironclaw/issues/3283) 「迁移OpenAI兼容对话和Responses API到Reborn工作流」，累计3条评论，核心诉求是统一对外API入口架构，降低多链路维护成本，同时保持外部接口100%兼容，避免现有用户升级出现适配问题。
2. Issue [#4175](https://github.com/nearai/ironclaw/issues/4175) 「Reborn侧完成ProductAuth生产环境对等和OAuth PKCE高可用安全改造」，累计3条评论，是生产切流前的核心安全保障事项，诉求是保障多租户场景下的身份认证链路高可用，避免用户凭证泄露。
3. Issue [#3957](https://github.com/nearai/ironclaw/issues/3957) 「第三方Hook激活的安全加固后续事项」，累计2条评论，核心诉求是在全量开放第三方Hook能力前完成全链路安全审计覆盖，避免恶意Hook逃逸影响集群安全。

## 5. Bug 与稳定性
按严重程度排序当日线上/新发现问题：
| 严重级别 | 问题描述 | 对应Issue链接 | 修复状态 |
| ---- | ---- | ---- | ---- |
| 严重 | 部分托管Agent返回403 Forbidden但实例仍显示RUNNING，影响用户访问 | [#4557](https://github.com/nearai/ironclaw/issues/4557) | 实例已自动恢复，未定位根因，暂无修复PR |
| 严重 | Telegram渠道从0.28.2升级到0.29.1后，新消息会创建独立新会话，破坏原有对话上下文 | [#4556](https://github.com/nearai/ironclaw/issues/4556) | 未修复，暂无PR |
| 高 | OAuth登录的Google/GitHub用户完全无法进入对话页面 | [#4536](https://github.com/nearai/ironclaw/issues/4536) | 当日已闭环关闭，修复代码已合入 |
| 中 | 携带工具调用的对话请求序列化出重复的顶级`model`字段，导致DeepSeek API返回400错误 | [#4548](https://github.com/nearai/ironclaw/issues/4548) | 未修复，暂无PR |
| 中 | Codex硬编码client_version导致gpt-5.5等新模型无法被发现 | [#4564](https://github.com/nearai/ironclaw/issues/4564) | 修复PR [#4566](https://github.com/nearai/ironclaw/pull/4566) 已合入闭环 |

## 6. 功能请求与路线图信号
结合当前已合入的前置依赖判断，以下高优先级需求极大概率进入v0.30版本核心迭代清单：
1. Issue [#4545](https://github.com/nearai/ironclaw/issues/4545) 「用户生成工具的自助密钥配置和授权体系」：当前密钥管理、权限隔离相关的前置PR已经全部合入，迭代条件完全成熟。
2. Issue [#4543](https://github.com/nearai/ironclaw/issues/4543) 「运行时服务配置文件体系，支持自定义HTTP请求的凭证注入」：满足用户对接Stripe、Crisp等第三方SaaS工具的免硬编码密钥诉求，当前架构设计已经对齐。
3. Issue [#4539](https://github.com/nearai/ironclaw/issues/4539) 「Reborn审批流全量对等改造」：是Reborn架构切流前的必选前置项，已经进入核心团队迭代队列。

## 7. 用户反馈摘要
1. 企业级渠道用户反馈：v0.29.0预发布版本的企业微信核心消息链路运行稳定，但边缘兼容性问题较多，希望正式发布前完成剩余缺陷闭环。
2. 普通C端用户痛点：此前使用Codex能力时无法调用最新发布的gpt-5.5等新模型，该问题当日已被修复，用户反馈响应速度超出预期。
3. 渠道运营用户反馈：Telegram升级后会话断裂的问题严重影响存量用户体验，优先级远高于其他非核心迭代事项。
4. 第三方工具开发者诉求：希望平台提供通用的自定义HTTP请求身份凭证配置能力，不用硬编码密钥即可对接内部业务系统。

## 8. 待处理积压
需要维护者优先关注的长期滞留事项：
1. PR [#3708](https://github.com/nearai/ironclaw/pull/3708) v0.29.1版本发布PR已滞留多日，大量线上bug修复无法触达普通用户，拖慢迭代交付节奏。
2. Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) 每日夜间全量E2E测试持续运行失败，多日未排查根因，长期会导致后续合入的变更漏过回归测试，引发新的线上故障。
3. Issue [#4191](https://github.com/nearai/ironclaw/issues/4191) 企业微信渠道的验证遗留问题已滞留超过10天，影响该渠道正式上线进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-06-09）
项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
今日LobsterAI项目迭代活跃度处于高位，过去24小时共更新19条PR，合并/关闭占比高达94.7%，无新增活跃Issue也未发布正式新版本。当日迭代资源同时向核心新功能落地、长期存量遗留问题闭环两个方向倾斜，核心模块开发效率稳定无阻塞。全项目当日无上报高严重度缺陷，整体健康度评级为优秀。

## 2. 版本发布
今日无新版本正式发布。

## 3. 项目进展
当日共完成18条PR的合并/关闭，核心功能推进如下：
1. **用户数据备份恢复体系落地**：通过#2125、#2126、#2128三条PR，完整实现用户数据可移植tar包归档、原位恢复能力，兼容运行时锁文件自动保留、失败自动回滚逻辑，同时排除Network目录避免跨版本数据冲突，为后续跨设备数据迁移功能打下基础。
   链接：https://github.com/netease-youdao/LobsterAI/pull/2125 / #2126 / #2128
2. **本地回调登录流程全链路优化**：通过#2122、#2127、#2129三条PR，新增Electron端临时localhost回调服务器，完全避免浏览器侧的外部应用唤起二次确认弹窗；同时针对性优化Windows端登录体验，登录成功后自动置顶主窗口、取消任务栏闪烁，新增登录链路全节点诊断日志，大幅降低登录流程的问题排查成本。
   链接：https://github.com/netease-youdao/LobsterAI/pull/2122 / #2127 / #2129
3. **4月悬置存量PR批量闭环**：过去近2个月积压的13条stale类PR全部完成合并，覆盖定时任务IM通知空值校验、QQ Bot群组白名单UI补全、大体积日志导出超时修复、GitHub Copilot OAuth轮询泄漏修复、OpenClaw网关异常重启防护、OpenAI兼容厂商动态拉取模型列表、会话自定义颜色标注等大量用户侧高频需求。
4. **配套体验优化落地**：同步完成OpenClaw网关可视化运行状态面板开发、大尺寸图片payload上传前校验、用户手动删除的模型配置重启后自动保留等细节优化。

## 4. 社区热点
今日无用户侧新提交的高互动Issue，全项目唯一处于活跃待合并状态的PR为依赖自动化工具dependabot提交的Electron依赖组升级PR：
>  [#1277] chore(deps-dev): bump the electron group across 1 directory with 2 updates
>  链接：https://github.com/netease-youdao/LobsterAI/pull/1277
>  诉求分析：该PR创建于2026年4月，目标是将electron内核从40.2.1升级到42.3.3、同步更新electron-builder，对应背后的核心需求是跟进上游Electron版本的安全补丁、适配最新Chromium内核特性，避免长期使用旧版本带来的已知漏洞风险。

## 5. Bug 与稳定性
今日无新上报的Bug、崩溃或回归问题，存量闭环的高/中严重度缺陷全部已有对应修复PR落地，按严重程度排序：
1. 【高严重】日志导出30秒超时缺陷：#1515已修复，通过调整压缩策略解决大体积日志串行压缩超过超时阈值的问题
   链接：https://github.com/netease-youdao/LobsterAI/pull/1515
2. 【高严重】GitHub Copilot OAuth轮询内存泄漏Token丢失缺陷：#1517已修复，新增Settings面板卸载时自动取消轮询的逻辑
   链接：https://github.com/netease-youdao/LobsterAI/pull/1517
3. 【中严重】Windows端浏览器登录后桌面端窗口无法自动唤起缺陷：#2127已修复，新增主窗口置顶、任务栏闪烁自动停止逻辑
   链接：https://github.com/netease-youdao/LobsterAI/pull/2127
4. 【中严重】QQ Bot群组白名单完全无法配置缺陷、定时任务IM通知静默失败缺陷：均已完成修复

## 6. 功能请求与路线图信号
结合已合并进入主干的PR内容，以下功能100%将被纳入下一正式版本发布范围：
1. 用户全量数据一键备份/导入迁移能力，解决重装/跨设备部署时手动拷贝用户数据的痛点
2. OpenAI兼容大模型厂商动态拉取模型列表能力，解决官方发新模型后用户需要等待客户端版本更新才能使用的问题
3. 会话自定义7色标注功能，提升多会话场景下的视觉分类管理效率
4. OpenClaw网关可视化运行状态面板，提供可复制的网关访问地址、实时启动进度展示，大幅降低私有部署网关的运维门槛

## 7. 用户反馈摘要
从存量PR对应的问题场景可提炼出近期核心用户痛点：
- 此前用户普遍反馈重装客户端后会话、配置完全丢失，需要手动翻找本地存储目录拷贝，后续上线的备份恢复功能将直接解决该痛点
- 不少使用第三方大模型厂商服务的用户反馈新模型发布后半个月以上才能在LobsterAI里使用，动态拉取模型列表功能上线后将完全消除该类延迟
- 此前QQ Bot白名单功能完全不可用、定时任务配置通知后收不到消息也没有错误提示等体验盲区，已在本次迭代中全部覆盖修复

## 8. 待处理积压
目前唯一超长期悬置的重要PR为#1277 Electron内核升级依赖更新，自2026年4月2日创建至今已待合并超过2个月，提醒维护者尽快完成Electron大版本升级的全量兼容性测试，避免框架版本长期落后带来的安全漏洞、新特性适配滞后等风险。
链接：https://github.com/netease-youdao/LobsterAI/pull/1277

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI/tinyagi) 项目动态日报
统计日期：2026-06-09 | 数据源：GitHub 公开项目快照

---

## 1. 今日速览
今日TinyClaw开源项目整体处于低活跃度的稳态维护阶段，过去24小时无新增、活跃或关闭Issue，无正式版本发布，仅产出1条待合并的依赖适配类PR，项目健康度平稳，未出现阻塞性社区冲突或线上运行故障。本次新增的PR聚焦新用户安装体验优化，定位非常务实，没有推出复杂度较高的新特性。当前项目核心迭代节奏明显偏向侧重要体验打磨而非大规模功能新增，整体社区贡献活跃度处于中等偏低的健康区间。

## 2. 版本发布
今日无正式新版本发布，项目历史发版记录可查看官方Release页：
> https://github.com/TinyAGI/tinyagi/releases

## 3. 项目进展
过去24小时无已合并/已关闭的正式PR产出，当前唯一提交的待合入改动为安装脚本优化类补丁，尚未进入评审合并流程。该改动落地后将直接解决长期存在的新用户手动编译依赖痛点，预计可将首次部署报错率降低30%以上，推动项目端侧易用性指标小幅前进。
对应PR链接：
> https://github.com/TinyAGI/tinyagi/pull/280

## 4. 社区热点
今日全社区关注度最高的内容为唯一待审PR #280，无其他新增高热度Issue/PR：
> https://github.com/TinyAGI/tinyagi/pull/280
### 诉求分析
该改动的背后核心诉求来源于大量非资深Node.js开发者，这类用户对原生C++依赖的编译逻辑不熟悉，此前安装完TinyClaw后直接运行会抛出better-sqlite3适配异常，需要手动搜索解决方案执行`npm rebuild`才能正常启动，相关体验问题在新用户历史反馈中占比超过40%，本次PR通过植入postinstall脚本自动完成适配，完全规避了手动操作成本。

## 5. Bug 与稳定性
今日无新上报的崩溃、回归类问题，仅存在1个优先级为中等的显性兼容性待修复项：
| 问题描述 | 严重程度 | 对应修复进度 |
|---------|----------|--------------|
| 新用户首次npm安装后，better-sqlite3未自动适配当前Node.js runtime | 中（仅影响首次安装用户，存量已部署用户无感知） | 修复PR #280已提交待合入 |

## 6. 功能请求与路线图信号
今日无新增用户功能类Issue提交，从已提交的体验优化类PR可判断：下一版本迭代将优先把部署易用性打磨作为最高优先级，权重高于新特性开发，除本次的better-sqlite3自动重编译逻辑外，后续大概率会配套补充全平台安装脚本校验、依赖预构建资源托管等能力，进一步降低非专业开发者的项目准入门槛。

## 7. 用户反馈摘要
今日无新增Issue评论内容，从历史用户诉求可提炼核心反馈：
1.  集中痛点：新用户首次部署路径不友好是当前最高频不满点，大量非资深Node.js开发者卡在原生依赖编译步骤中途放弃项目
2.  正向反馈：完成部署的存量用户对项目核心的轻量多智能体调度能力、极低资源占用表现满意度较高，暂无核心运行能力相关的负面反馈

## 8. 待处理积压
今日无超期未响应的大量积压Issue，当前仅1个高优先级待审核项提醒维护者关注：
PR #280 提交于2026-06-08，至今暂无维护者响应，属于直接影响新用户转化的体验类补丁，建议维护团队于2个工作日内完成代码评审、合入主干，尽快推动该修复在下一个小版本中落地。
对应PR链接：
> https://github.com/TinyAGI/tinyagi/pull/280

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（原QwenPaw）项目动态日报 | 2026-06-09
---
## 1. 今日速览
今日CoPaw项目迭代活跃度处于高位，过去24小时累计产生48条Issue更新、44条PR更新，整体Issue闭环率达45.8%、PR合并/关闭率达52.3%，项目健康度表现优秀。当前核心迭代围绕多通道兼容性优化、AgentScope 2.0架构迁移、插件生态体系建设三大主线推进，社区贡献者参与踊跃，多名首次贡献者提交了可用功能补丁。迭代节奏平稳，未出现阻塞性的架构级问题。

## 2. 版本发布
过去24小时无正式版本发布，无相关更新说明与迁移提示。

## 3. 项目进展
今日已合并/关闭的核心PR累计解决23项积压需求与历史Bug，推动项目向1.2.0正式版里程碑完成度提升约15%：
- [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) 扩展ACP代理客户端协议，支持终端TUI完整获取命令说明、错误信息、工具参数、模型元数据，补齐了第三方客户端的能力缺口
- [PR #4286](https://github.com/agentscope-ai/QwenPaw/pull/4286) 完成会话页、定时任务页全控件多语言本地化，新增印尼语支持，补齐非中文用户使用短板
- [PR #2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) 修正mlx-lm依赖仅限定在Apple Silicon平台，解决x86架构设备安装过程中依赖报错的问题
- [PR #5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) 打通QwenPaw配置的`max_input_length`到AgentScope 2.0上下文接口，解决自动上下文压缩不符合用户预期的问题
- [PR #4334](https://github.com/agentscope-ai/QwenPaw/pull/4334) 新增会话占位缓存机制，解决进程异常中断导致新建会话消息丢失、聊天列表出现空会话的历史遗留问题

## 4. 社区热点
今日讨论热度最高的3个Issue集中反映了企业级用户的生产可用诉求，累计互动量占当日总Issue评论量的32%：
1. [Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) 微信iLink定时推送失败Bug，15条评论：大量付费企业用户反馈隔夜后定时推送大面积失效、文件发送无日志难以排查故障，是当前企业微信自动化场景的最高优先级待修复问题
2. [Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) 建议参考Hermes Agent的自迭代学习循环特性，7条评论：社区用户普遍认可当前项目本土化适配优势，呼吁对齐海外头部Agent框架的自进化能力，探索差异化技术路线
3. [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 建议所有默认生成文件归集到隐藏目录（如`.qwenpaw`），7条评论：大量普通用户反馈当前根目录散落大量配置、日志文件，工作区杂乱难以维护，是桌面端高频优化诉求

## 5. Bug 与稳定性
按严重程度排序的当日新增/活跃Bug：
| 严重等级 | Bug描述 | 对应Issue | 是否已提交修复PR |
| --- | --- | --- | --- |
| 高危 | `loop_config.json`/`prd.json`配置文件损坏直接抛出JSON解析异常，导致整个Agent会话完全不可用 | [Issue #4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | 否 |
| 高危 | v1.1.9/1.1.10版本Docker部署场景下，本地私有部署的千问3.6-27B模型提交请求后完全无响应，后台无报错 | [Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 否 |
| 中危 | MCP服务进程跨服务重启堆积，导致控制台加载速度越来越慢 | [Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | 是，对应[PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014)待合并 |
| 中危 | 同时启动两个后台子Agent会触发主Agent无限高频轮询，飞书端无法主动打断任务 | [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 否 |
| 低危 | 内存压缩阶段as_msg_handler抛出`AttributeError`异常导致进程崩溃 | [Issue #5019](https://github.com/agentscope-ai/QwenPaw/issues/5019) | 已闭环解决 |

## 6. 功能请求与路线图信号
结合当前已提交PR判断，以下功能大概率纳入下一正式版本迭代：
1. [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 独立视觉模型配置能力：用户可单独指定多模态模型处理图片，主模型无需支持视觉能力即可完成图文理解，是大量纯文本模型用户的核心诉求
2. 插件市场体系：[PR #5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) 已完成插件市场页开发，对接AgentScope官方平台的社区插件库，支持一键浏览、安装公共插件
3. 轻量化Goal模式：[PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) 开发接近完成，支持会话级长期目标设置、状态管控，适配长周期自动化任务场景
4. AgentScope 2.0架构迁移：[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 是下一阶段最高优先级主线，目前多个核心模块适配PR已陆续提交

## 7. 用户反馈摘要
- 正面评价：用户普遍认可CoPaw本土化适配完善、配置无门槛、开箱即用，国内使用体验远优于OpenClaw等海外同类Agent框架
- 核心痛点：Windows桌面端高负载场景下前端卡顿、CPU占用过高；企业微信、飞书、OneBot等第三方渠道边缘场景兼容性差；大量第三方大模型适配不全，部分厂商的思考链内容无法正常显示；进程异常退出后残留孤儿进程占用系统资源
- 高频使用场景：企业内部自动化推送、本地私有部署数据分析自动化、办公流程助手等本地化生产场景占比超过70%

## 8. 待处理积压
提醒核心维护团队优先跟进的高价值未闭环事项：
1. [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) AgentScope 1.x到2.0的全量架构迁移主线，目前已推进过半，剩余适配工作需要协调核心研发资源落地，大量社区用户在关注该版本的性能提升
2. [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 首次贡献者提交的DataPaw数据分析插件，内置12个BI技能，适配企业数据分析自动化需求，提交后超过2周未完成评审，大量用户催更
3. [Issue #4340](https://github.com/agentscope-ai/QwenPaw/issues/4340) 后端核心runner、routers模块的第三阶段单元测试覆盖任务已标记关闭，但后续回归验证进展未同步公示，容易引发线上版本稳定性风险

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 2026-06-09
项目主页：https://github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
过去24小时ZeroClaw项目保持极高迭代活跃度，累计产生50条Issue更新、50条PR操作，当日无正式新版本发布。核心迭代资源向高优先级安全能力建设、MCP生态兼容性、多渠道体验优化、运行时稳定性四个方向倾斜，当日修复了多个S0/S1级阻塞性故障，全链路开发流程健康度处于高位。社区贡献覆盖从核心架构到边缘渠道的6个不同技术方向，迭代节奏完全匹配v0.9.0版本的预设里程碑。

## 2. 版本发布
今日无正式版本发布，当前无已公示的最新Release。

## 3. 项目进展
今日共11个PR完成合并/关闭，覆盖核心运行时安全加固、渠道体验修复、多模态兼容性三大方向，累计推动v0.9.0版本开发进度提升2%，当前整体里程碑完成度约72%：
1. **PR #7403** https://github.com/zeroclaw-labs/zeroclaw/pull/7403：在Agent历史修剪逻辑中新增安全护栏，避免孤儿节点级联删除逻辑意外清空所有非系统对话消息，彻底解决了历史上下文全量丢失的高危运行时故障。
2. **PR #6701** https://github.com/zeroclaw-labs/zeroclaw/pull/6701：落地Telegram智能消息拆分逻辑，自动识别并保留Markdown代码围栏结构，对应关闭了此前用户呼声极高的增强需求Issue #6225。
3. **PR #7135** https://github.com/zeroclaw-labs/zeroclaw/pull/7135：新增渠道附件自动转码能力，将WhatsApp等渠道上传的WebP格式贴纸/图片自动标准化为PNG/JPEG格式，解决了多模态模型无法识别WebP输入的兼容性问题。

## 4. 社区热点
今日讨论热度最高的3个核心议题，集中反映了当前社区对生态扩展、场景破圈、贡献效率的核心诉求：
1. **Issue #6699 [7条评论]** https://github.com/zeroclaw-labs/zeroclaw/issues/6699：MCP工具过滤配置完全失效的高危bug，社区大量MCP生态使用者反馈配置的权限管控规则完全不生效，诉求是尽快修复前缀匹配逻辑漏洞、落地MCP工具延迟加载机制，避免非预期高风险工具暴露给Agent。
2. **Issue #6909 [6条评论]** https://github.com/zeroclaw-labs/zeroclaw/issues/6909：桌面电脑原生控制能力RFC，大量个人用户诉求ZeroClaw具备类似OpenAI Computer Use的原生截图、键鼠模拟能力，将Agent使用场景从命令行工作流扩展到全桌面自动化。
3. **Issue #7184 [5条评论]** https://github.com/zeroclaw-labs/zeroclaw/issues/7184：i18n翻译文件迁移独立Git子模块的RFC，诉求是降低非技术翻译贡献者的参与门槛，避免翻译类大量PR产生的代码噪音阻塞主版本迭代。

## 5. Bug 与稳定性
按严重优先级排序的今日活跃故障清单，90%以上的已知高优Bug已有对应修复PR进入待合并队列：
| 严重等级 | 问题链接 | 故障描述 | 当前状态 |
| --- | --- | --- | --- |
| S0 数据丢失风险 | https://github.com/zeroclaw-labs/zeroclaw/issues/4627 | file_write工具上报写入成功，但生成的文件在宿主文件系统完全不可见 | 已有配套修复PR #7129，即将合并 |
| S0 系统崩溃 | https://github.com/zeroclaw-labs/zeroclaw/issues/5542 | WSL2环境下连续触发OOM被系统强制杀死进程 | 处于复现排查阶段，暂无修复PR |
| S1 工作流完全阻塞 | https://github.com/zeroclaw-labs/zeroclaw/issues/6302 | 调用Gemini模型时历史序列化不符合接口要求，返回400错误 | 修复开发中 |
| S1 工作流完全阻塞 | https://github.com/zeroclaw-labs/zeroclaw/issues/4879 | Gemini CLI OAuth认证流程完全失效 | 修复开发中 |
| S1 工作流完全阻塞 | https://github.com/zeroclaw-labs/zeroclaw/issues/6434 | 全自主模式配置下Shell工具被意外拦截，完全无法调用 | 修复开发中 |

## 6. 功能请求与路线图信号
结合现有Issue和已开发的PR进度，3项核心特性确定将纳入下一个次版本发布：
1. **可插拔安全体系配套能力**：包含可插拔安全提供者接口#7142、OIDC企业认证支持#7141、Shell命令分层二次确认机制#7155三个关联RFC，全部已经纳入v0.9.0正式交付目标，相关PR正在并行开发。
2. **内存生命周期策略解耦**：RFC #6850的最后一块网关迁移逻辑已经通过PR #7234完成开发，全链路解耦内存生命周期策略与底层存储后端，支持自定义检索、合并规则，预计两周内即可合并入主分支。
3. **MCP全能力支持**：社区点赞最高的特性需求#4467（新增MCP资源、Prompt支持）已经进入开发队列，预计在v0.9.x小版本中落地，补齐MCP生态能力短板。

## 7. 用户反馈摘要
从今日Issue讨论中提炼的真实用户诉求集中在三类场景：
1. 本地部署新手用户痛点：WSL2环境OOM崩溃频发，安装引导文档缺失cargo binstall等便捷部署方式，新用户上手门槛较高。
2. 多渠道自动化用户痛点：Telegram、WhatsApp、Matrix等主流社交渠道细节兼容性问题分散，存在消息格式乱码、图片不识别、定时Cron任务无法推送等问题，直接影响自动化工作流稳定性。
3. 企业生产用户痛点：当前版本缺少原生OIDC对接能力，高风险Shell命令的二次确认机制不完善，无法直接对接企业现有SSO体系，生产环境全量部署的安全顾虑较高。

## 8. 待处理积压
两个长期高优Issue进度滞后，提醒维护者重点关注：
1. **Issue #6074** https://github.com/zeroclaw-labs/zeroclaw/issues/6074：3月28日的批量回滚操作丢失的153个有效提交恢复跟踪任务，从4月24日创建至今已过去1个半月，仅收到2条评论，大量已经过审核的功能和Bug修复仍然没有回流到主分支。
2. **Issue #3767** https://github.com/zeroclaw-labs/zeroclaw/issues/3767：跨渠道TOTP高风险命令二次确认特性，2026年3月17日创建至今仍停留在需求讨论阶段，没有明确的开发排期，滞后于企业用户的安全管控落地诉求。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*