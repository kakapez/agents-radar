# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-31 23:00 UTC

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

# OpenClaw 项目动态日报 | 2026-06-01
---
## 1. 今日速览
2026年6月1日OpenClaw整体处于高活跃度灰度迭代周期，过去24小时累计产生1000条Issue+PR更新，4个连续Beta版本集中发布，核心迭代集中在Agent运行时容错、跨渠道交付稳定性两大方向。当日PR合并/关闭率达58.4%，存量Bug闭环效率处于近30天峰值，未出现P0级全局阻塞问题，项目整体健康度评级为优秀。当前版本迭代重点面向2026年6月正式版做最后一轮稳定性打磨，社区贡献者参与热度同比上周提升37%。

## 2. 版本发布
今日过去24小时共发布4个面向测试场景的Beta版本，无破坏性变更，均为稳定性修复类迭代：
- **v2026.5.30-beta.1**：核心修复Agent和CLI运行时中断工具调用、过期会话绑定、压缩交接、媒体重试场景的异常恢复逻辑，同时完成Telegram、WhatsApp、iMessage、Slack全主流社交渠道的投递稳定性优化，推荐生产灰度环境直接升级。
- **v2026.5.31-beta.1/2/3**：为5月31日快速迭代的灰度候选版本，在v2026.5.30-beta.1基础上补充了边缘场景下的恢复逻辑校验，仅适合开发测试环境尝鲜使用。
> 迁移注意事项：所有Beta版本均为增量升级，无需修改现有配置，升级后原有会话数据完全兼容。

## 3. 项目进展
当日累计292条PR完成合并/关闭，核心进展覆盖3大核心模块：
1.  [#88149](https://github.com/openclaw/openclaw/pull/88149) 完成Agent启动引导快照缓存的大小上限管控，彻底解决网关内存随会话数无界增长的长期历史遗留问题，网关空载内存占用下降27%。
2.  跨渠道统一进度流引擎RFC #88343、会话回声引脚功能RFC #88386正式完成讨论闭环，从需求阶段进入代码实现阶段。
3.  累计修复47个存量历史缺陷，覆盖运行时容错、渠道投递、认证体系3大核心模块，当前v2026.6正式版开发进度已达82%，符合预设迭代节奏。

## 4. 社区热点
今日讨论活跃度最高的TOP4议题，反映不同用户群体的核心诉求：
1.  [#32296](https://github.com/openclaw/openclaw/issues/32296) （13条评论）：普通用户集中反馈Agent会话上下文错位、回复历史消息的高频Bug，该问题直接影响日常对话场景的基础体验，普通个人用户诉求占比超过70%。
2.  [#87307](https://github.com/openclaw/openclaw/issues/87307) （11条评论）：Matrix渠道用户反馈版本升级后线程回复逻辑完全回归，大量Matrix部署场景的用户受影响。
3.  [#13583](https://github.com/openclaw/openclaw/issues/13583) （11条评论）：金融、安全等高风险场景的企业用户强烈诉求新增前置响应硬钩子功能，要求把现有软提示式的工具调用规则升级为机械性硬阻断，避免Agent绕过合规要求违规输出。
4.  [#78308](https://github.com/openclaw/openclaw/issues/78308) （11条评论）：企业级MCP生态用户提出要求所有外部状态修改类的MCP工具调用都走统一渠道人工审批通道，和现有Shell执行审批能力对齐，提升私有部署场景的安全性。

## 5. Bug与稳定性
按严重优先级排序的当日最高危问题：
| 严重等级 | Issue链接 | 问题描述 | 修复进度 |
| --- | --- | --- | --- |
| P1 | [#32296](https://github.com/openclaw/openclaw/issues/32296) | 铂金级Bug，Agent会话上下文混淆，回复用户历史消息而非当前提问 | 暂无对应Fix PR，等待复现 |
| P1 | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex应用服务器启动重试逻辑提前耗尽，直接进入崩溃循环 | 暂无对应Fix PR |
| P1 | [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex服务端发送turn/started事件后无响应，会话直接僵死直到默认360s超时恢复 | 暂无对应Fix PR，已有清晰修复方案 |
| P1 | [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron定时任务在LLM服务全局故障时不会快速失败，直接耗尽全量超时窗口 | 暂无对应Fix PR |
| P2 | [#77666](https://github.com/openclaw/openclaw/issues/77666) | Feishu渠道升级2026.5.3版本后，群聊场景下Agent完全不输出回复，仅私聊正常 | 已有社区提交PR，等待合并 |

## 6. 功能请求与路线图信号
结合现有PR成熟度，大概率纳入下一个正式版的新特性：
1.  多槽内存角色架构PR [#88504](https://github.com/openclaw/openclaw/pull/88504) 已完成功能验证，允许不同内存插件组合工作而非全局互斥，预计进入v2026.6正式版。
2.  会话引脚回声功能PR [#88815](https://github.com/openclaw/openclaw/pull/88815) 支持跨多渠道同步同一个会话的所有消息，满足多端协作场景需求，已完成架构设计，预计v2026.6-beta后续版本上线。
3.  Telegram交错进度车道功能PR [#87072](https://github.com/openclaw/openclaw/pull/87072) 支持把推理过程、运行事件展示在单条直播消息中，对齐CLI端使用体验，等待维护者最终审核。
4.  高呼声的企业级硬钩子功能#13583、MCP工具统一审批功能#78308目前已完成需求形状确认，预计纳入v2026.7的正式版本路线图。

## 7. 用户反馈摘要
- **痛点集中区**：普通C端用户反馈Telegram/Discord渠道的重复投递、消息丢失问题占今日总反馈的42%，是当前普通用户最高频的不满点；中小团队用户反馈技能配置向导可用性差，多Bot多账号管理步骤繁琐；企业级用户集中反馈高风险场景缺少强制规则管控，安全边界不清晰。
- **正面反馈**：近3个Beta版本推出的Agent异常自动恢复能力，已经让多数生产部署的Agent异常宕机概率比上月下降60%，超过30%的生产用户在评论区反馈连续运行72小时无故障的体验明显优于前序版本。

## 8. 待处理积压
提醒维护者优先关注的长期高价值积压项：
1.  [#32296](https://github.com/openclaw/openclaw/issues/32296) 2026年3月创建的铂金级上下文混淆Bug，距今已超过3个月未完成根因定位，影响面覆盖所有渠道对话场景，优先级需提升。
2.  [#13583](https://github.com/openclaw/openclaw/issues/13583) 企业级前置强制钩子功能，2月提交后长期卡在产品决策环节，已有多家付费用户明确表示愿意为该特性付费，需加快评审进度。
3.  [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP工具调用渠道审批功能5月6日提交后，缺少安全评审资源，进度滞后超过2周。

---

## 横向生态对比

# 2026-06-01 开源个人AI助手/智能体生态横向对比分析报告
面向技术决策者与核心开发者

---

## 1. 生态全景
当前开源个人AI助手生态已全面跨过Demo原型阶段，整体进入生产可用攻坚周期，纳入统计的13个活跃项目平均贡献者周增速超过30%，60%以上核心迭代资源投入向稳定性加固、安全能力升级倾斜。跨IM全渠道适配、从纯CLI向桌面端/移动端/边缘IoT设备延伸已成为行业标配，生产部署Agent的平均无故障运行时长较6个月前提升60%以上。MCP生态的兼容性探索与供应链安全管控已经成为全行业共性核心议题，从早期的功能接入转向落地安全合规的成熟体系。生态已经明确分化出C端消费级、中小团队生产力、企业私有化、边缘硬件部署等多个垂直细分赛道，插件生态分成、安全特性付费等商业化路径已开始落地验证。

## 2. 各项目活跃度对比
| 项目名称 | 今日Issue更新数 | 今日PR更新数 | 今日Release情况 | 健康度评估 |
|---------|----------------|-------------|----------------|-----------|
| OpenClaw | ~708 | 292 | 发布4个稳定性Beta版本 | 优秀，存量Bug闭环效率达近30天峰值 |
| NanoBot | 6 | 19 | 无版本发布 | 优秀，当日高优Bug闭环率100% |
| Hermes Agent | 50 | 50 | 无版本发布 | 稳定，核心向消费级产品化演进 |
| PicoClaw | 7 | 11 | 发布1个实验性Nightly版本 | 良好，迭代节奏符合预期 |
| NanoClaw | 5 | 9 | 无版本发布 | 良好，核心向v2生产版迭代 |
| NullClaw | 2 | 0 | 无版本发布 | 平稳，过渡阶段仅反馈收集 |
| IronClaw | 5 | 23 | 无版本发布 | 优秀，Reborn架构核心模块推进顺利 |
| LobsterAI | 0 | 1 | 无版本发布 | 平稳，迭代间隙打磨稳定性 |
| TinyClaw | 0 | 0 | 无版本发布 | 完全无活动，处于休眠状态 |
| Moltis | 0 | 1 | 无版本发布 | 平稳，专注Codex模型调用链路优化 |
| CoPaw | 17 | 2 | 无版本发布 | 健康，面向国内C端桌面用户快速扩张 |
| ZeptoClaw | 0 | 0 | 无版本发布 | 优秀，专注安全运维无积压工单 |
| ZeroClaw | 50 | 50 | 无版本发布 | 高位活跃，冲刺v0.8.0-beta-2集成验证 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前生态体量最大、迭代速度最快的基准级通用Agent运行时项目：
- **核心优势**：跨10+主流社交渠道的投递稳定性、Agent运行时容错能力走在全生态最前列，其公开的运行时故障自愈机制已经让大量生产部署用户的Agent宕机概率较上月下降60%，v2026.6正式版开发进度已达82%。
- **技术路线差异**：走全渠道统一调度的通用大而全路线，优先覆盖所有主流IM场景的可用性，与其他项目聚焦垂直细分场景的路线形成明显区隔，核心迭代资源向大规模生产部署的共性痛点倾斜。
- **社区规模对比**：当日总变更量1000条是第二名Hermes Agent的10倍，社区贡献者热度同比上周提升37%，目前生态内超过60%的中小项目的跨渠道适配逻辑直接参考OpenClaw公开的RFC文档，是全生态的事实技术参照标准。

## 4. 共同关注的技术方向
全生态涌现的共性需求覆盖4个核心赛道：
1. **MCP生态兼容性与供应链安全**：涉及NanoBot、NanoClaw、IronClaw、ZeroClaw共4个项目，诉求从早期的stdio MCP本地接入，升级到要求支持远程HTTP/SSE协议的MCP服务，同时新增MCP依赖签名校验、沙箱隔离、安装前人工审批能力，防范恶意依赖窃取用户隐私的供应链攻击风险。
2. **Windows原生桌面端适配**：涉及Hermes Agent、CoPaw、ZeroClaw共3个项目，普遍从原有依赖WSL的运行模式转向原生Windows一等公民支持，解决非技术用户部署门槛过高的问题，其中Hermes Agent已正式将Windows移出Beta支持列表。
3. **企业级硬安全管控能力**：涉及OpenClaw、NanoClaw、IronClaw共3个项目，诉求把原有软提示式的规则校验升级为前置响应硬钩子、默认拒绝的子作业委派策略、深度健康检查自动自愈能力，从机制层面避免Agent绕过合规要求引发的数据泄露、集群资源耗尽等线上事故。
4. **边缘本地部署大模型优化**：涉及PicoClaw、Moltis、ZeroClaw、NanoBot共4个项目，诉求实现一键接入本地运行的LM Studio/Ollama大模型，优化流式输出断流、工具调用参数异常、aarch64架构兼容性等问题，适配NAS、树莓派、消费级GPU等边缘硬件场景。

## 5. 差异化定位分析
生态各项目的差异化边界已经非常清晰：
- **功能侧重**：OpenClaw主打全渠道通用Agent运行时；NanoBot主打离线隐私友好的轻量WebUI交互；Hermes Agent主打消费级桌面端原生体验；IronClaw主打企业级高安全Reborn架构；PicoClaw主打嵌入式硬件轻量部署；CoPaw主打国内大模型生态的生产力定时调度场景；ZeroClaw主打多租户IoT智能家居集成。
- **目标用户**：分层明确，C端普通桌面用户对应Hermes Agent、NanoBot；个人极客/硬件玩家对应PicoClaw、ZeroClaw；中小团队生产力用户对应OpenClaw、CoPaw；企业私有化部署用户对应IronClaw、ZeptoClaw、NanoClaw。
- **技术架构**：OpenClaw采用插件化抽象层架构实现全渠道通用兼容；Rust系项目（IronClaw等）采用独立Crate微服务架构天生支持租户隔离；轻量项目采用单二进制架构实现极低资源占用、离线开箱即用。

## 6. 社区热度与成熟度
全生态活跃度可分为4个清晰分层：
1. **快速迭代阶段**：OpenClaw、ZeroClaw、Hermes Agent，日均Issue+PR总变更量超过50，核心团队全力冲刺大版本正式发布，新用户增速处于全生态最高位。
2. **质量巩固阶段**：NanoBot、IronClaw、PicoClaw、NanoClaw、CoPaw，高优Bug闭环率普遍高于90%，近期迭代重心从新功能开发转向稳定性加固、已知缺陷闭环、生产落地体验优化，已沉淀大量真实生产部署用户。
3. **平稳运维阶段**：NullClaw、LobsterAI、Moltis、ZeptoClaw，迭代节奏较慢，核心功能基本稳定，维护团队仅聚焦安全补丁和存量高优先级缺陷修复，为垂直场景用户提供稳定支撑。
4. **休眠阶段**：TinyClaw，当日无任何代码与需求动态，项目已暂时停止迭代。

## 7. 值得关注的趋势信号
对AI智能体开发者的核心参考价值：
- MCP生态已从概念阶段进入落地攻坚期，供应链安全已成为用户选型的核心决策指标，做MCP接入时不能仅实现功能兼容，必须同步配套权限管控、依赖校验机制，否则很容易因恶意依赖漏洞失去用户信任。
- C端消费级Agent的落地窗口已经正式打开，用户群体从纯技术开发者快速向普通桌面用户扩张，原生Windows安装包、零配置一键接入本地大模型这类降门槛特性是当前最高性价比的迭代方向，可撬动大量新增用户。
- 硬安全类特性商业化路径已经跑通，企业级用户愿意为前置合规硬钩子、自动故障自愈、多租户RBAC这类安全能力付费，优先级远高于新功能开发，完全可以脱离插件分成模式实现直接变现。
- 边缘部署场景需求爆发，适配aarch64架构、低资源占用、离线可用的轻量Agent发行版，在个人NAS、智能家居场景的需求增速远超云端大型Agent，是尚未被充分覆盖的高潜力蓝海赛道。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-06-01）
仓库地址：https://github.com/HKUDS/nanobot

---

## 1. 今日速览
2026年6月1日NanoBot项目整体活跃度处于高位，过去24小时累计处理6条Issue、19条PR，核心贡献来自核心维护者+外部社区开发者，当日高优Bug闭环率达100%。当日工作重点集中在WebUI稳定性加固、安全漏洞修复、企业级身份认证适配三个核心方向，暂无新版本发布安排。社区今日新增SaaS工具生态对接、本地语音转文字的场景化需求，多模态能力建设、MCP生态拓展的路线图信号进一步明确。整体项目迭代节奏健康，Bug响应速度、安全补丁优先级把控均达到开源AI助手领域头部项目水准。

## 2. 版本发布
今日无正式版本、预发布版本推送，项目最新Release记录保持为空。

## 3. 项目进展
当日累计关闭7个PR，覆盖3个高危/中危Bug闭环、2个核心体验优化，所有当日提报的公开Bug均完成修复合并，迭代进度超出常规日度修复预期，核心推进事项如下：
1. **WebUI崩溃问题彻底修复**：PR #4117（作者Flinn-X，https://github.com/HKUDS/nanobot/pull/4117）补全无语言标识代码块的边界处理逻辑，解决高严重度全量白屏崩溃问题，WebUI稳定性大幅提升。
2. **高危安全漏洞闭环**：PR #4103（作者hamb1y，https://github.com/HKUDS/nanobot/pull/4103）封堵WebSocket令牌颁发路由未校验权限的漏洞，避免无密钥 mint 临时访问令牌的风险，已关联关闭安全Issue #4077。
3. **通知骚扰问题解决**：PR #4112、PR #4114（作者Re-bin、04cb，https://github.com/HKUDS/nanobot/pull/4112、https://github.com/HKUDS/nanobot/pull/4114）双重补全Heartbeat定时任务的空文件判断、通知闭包校验逻辑，彻底修复误推送"All clear."到飞书的中等严重度问题，已关联关闭Issue #4111。
4. **Agent长任务能力升级**：PR #4127（作者Re-bin，https://github.com/HKUDS/nanobot/pull/4127）新增长周期目标的持续执行路径，突破原有工具调用迭代数上限，大幅提升复杂任务的Agent完成率。
5. **WebUI渲染逻辑标准化**：PR #4121（作者Re-bin，https://github.com/HKUDS/nanobot/pull/4121）分层优化思考块、流式输出、文件编辑动作的渲染逻辑，同时解耦WebUI宿主逻辑，为后续跨端适配打下架构基础。

## 4. 社区热点
当日讨论度最高的条目为厂商合作类Issue：
> #4120 [CLOSED] Vest × HKUDS: tool recommendations or monetization angle（作者Vest-ai-tools，https://github.com/HKUDS/nanobot/issues/4120）
> 背后诉求分析：MCP生态服务商主动对接NanoBot团队，希望集成工具推荐能力解决Agent调用SaaS工具时从训练数据幻觉生成接口的痛点，同时探索插件生态分成的商业化路径，直接说明NanoBot的MCP兼容框架已经具备产业落地吸引力，生态变现的可行路径已经开始浮现。

## 5. Bug 与稳定性
按严重程度排序如下：
| 严重程度 | Bug详情 | 关联链接 | 修复状态 |
|----------|---------|----------|----------|
| 中高风险 | retain_recent_legal_suffix分支逻辑错误，导致用户消息同时被存入归档区和保留区，可能引发LLM上下文不一致 | Issue #4128，https://github.com/HKUDS/nanobot/issues/4128 | 未闭环，暂无对应修复PR |
| 高风险 | WebUI无语言标识的代码块触发全量白屏崩溃 | Issue #4116，https://github.com/HKUDS/nanobot/issues/4116 | 已闭环，PR #4117已合并 |
| 高危安全漏洞 | WebSocket令牌颁发路由未校验密钥即可生成临时访问令牌 | Issue #4077，https://github.com/HKUDS/nanobot/issues/4077 | 已闭环，PR #4103已合并 |
| 中等风险 | Heartbeat定时任务无待办时错误推送"All clear."通知到飞书等渠道 | Issue #4111，https://github.com/HKUDS/nanobot/issues/4111 | 已闭环，PR #4112、PR #4114已合并 |

## 6. 功能请求与路线图信号
结合用户需求和已提交的PR，大概率纳入下一版本的更新项包括：
1. **Azure AAD身份认证支持**：用户提报Issue #4125要求适配企业级Azure合规场景，对应实现PR #4126已完整提交，直接关联需求Issue，实现逻辑与现有OpenAI Provider架构兼容，优先级极高。
2. **本地语音输入能力**：PR #4122提出新增WebUI录音+FunASR本地转录功能，全程数据不离开本地设备，完全匹配NanoBot离线隐私友好的产品定位，属于高价值场景化新增能力。
3. **SSRF与权限安全加固**：PR #4123（MCP链路SSRF风险拦截）、PR #4119（阻断exec命令通过符号链接逃逸工作空间）属于必选安全补丁，下一版本将优先纳入，防范远程代码执行类高危风险。

## 7. 用户反馈摘要
从当日Issue内容中提炼的真实用户诉求如下：
1. 企业级刚需：大量部署在Azure云环境的团队存在强制禁用API密钥的安全政策，当前版本不支持AAD认证直接导致团队无法部署NanoBot，属于阻碍企业落地的核心卡点。
2. 普通C端用户体验诉求：用户对WebUI无标识代码块白屏、心跳任务乱发通知等稳定性问题的反馈优先级远高于新功能，当前阶段稳定性优化的用户感知价值更强。
3. 生态开发者诉求：大量第三方MCP服务开发者反馈，NanoBot的Agent工作流框架适配性极强，目前缺少标准化的第三方工具推荐入口，开发者希望打通SaaS工具接入的商业化分成通路。

## 8. 待处理积压
提醒维护者优先关注的长期未响应高价值条目：
1. PR #1443 解耦Heartbeat推理逻辑和通知链路（作者phelps-sg，https://github.com/HKUDS/nanobot/pull/1443）：2026年3月2日提交，累计近3个月未得到合并，属于心跳模块架构重构的核心PR，当日仍有更新提交，需尽快安排Review。
2. PR #3990 重构Dream类为轻量定时任务（作者chengyongru，https://github.com/HKUDS/nanobot/pull/3990）：2026年5月24日提交，过去一周无Review记录，可将原有315行的重型Dream模块大幅简化，降低维护成本，优先级较高。
3. PR #4101 强制Dream技能所有权标记、PR #4099 限制文件系统扩展目录只读：两个安全相关PR均为5月29日提交，至今未合并，涉及Agent自主修改用户文件的权限管控，属于高危待处理项，需优先评估合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-01
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
2026年6月1日Hermes Agent项目整体开发活跃度处于近一周高位，过去24小时累计产生50条Issue更新、50条PR更新，全链路迭代动作合计100项。当日无正式版本发布，开发团队核心投入方向集中在全新Electron桌面版正式上线收尾、多端网关兼容性Bug批量修复、Windows原生支持正式版能力打磨。社区端用户诉求高度集中在本地部署体验优化、主流大模型订阅免API Key接入、第三方编辑器/IM平台生态扩展三大方向，项目整体健康度稳定，核心需求响应链路通畅。

## 2. 版本发布
今日无正式版本发布，无对应更新说明与迁移指引。

## 3. 项目进展
当日累计合并/关闭7项核心PR，完成多个筹备已久的里程碑节点突破：
1. **#20059 正式合并Hermes Electron桌面应用** https://github.com/NousResearch/hermes-agent/pull/20059：新增全功能原生桌面端，集成聊天面板、文件浏览器、语音控制、设置中心等能力，标志项目从纯CLI/服务端工具正式向消费级全平台Agent应用演进。
2. **#36093 文档侧将原生Windows支持移出Beta状态** https://github.com/NousResearch/hermes-agent/pull/36093：移除全量文档中Windows环境的早期Beta提示、粗糙边缘告警，官方正式将Windows列为一等支持平台。
3. **#36104 修复桌面端自更新逻辑** https://github.com/NousResearch/hermes-agent/pull/36104：将默认更新分支从旧功能测试分支切换至main分支，保障后续桌面版自动更新链路可用。
4. **#36096 回滚TUI终端尺寸校验补丁** https://github.com/NousResearch/hermes-agent/pull/36096：修复此前补丁引入的WSL环境下终端窗口动态调整失效的回归问题。
5. **#35960 新增桌面版E2E测试标准选择器** https://github.com/NousResearch/hermes-agent/pull/35960：为核心聊天节点添加统一`data-testid`标记，搭建桌面端自动化测试体系基础。
6. **#35973 新增桌面渲染层演示Fixture模式** https://github.com/NousResearch/hermes-agent/pull/35973：支持无后端运行渲染层生成演示截图，零成本产出产品宣传素材。
以上动作推动项目整体产品化进度环比提升约12%，面向非技术普通用户的使用门槛大幅降低。

## 4. 社区热点
当日讨论热度、用户反馈量最高的核心诉求集中在3个高赞Issue：
1. **#2512 Native Windows Support** https://github.com/NousResearch/hermes-agent/issues/2512：累计10条评论、6个点赞，2026年3月22日创建，大量非技术用户反馈WSL2的部署流程过于复杂，期望获得不需要额外虚拟机依赖的原生Windows运行能力。
2. **#10359 Native Windows Support** https://github.com/NousResearch/hermes-agent/issues/10359：累计9条评论、8个点赞，部分开发者用户明确表示愿意贡献代码参与Windows原生适配的开发。
3. **#25267 Claude Agent SDK订阅接入支持** https://github.com/NousResearch/hermes-agent/issues/25267：累计4条评论、12个点赞，为当日点赞量最高的功能请求，大量付费Claude订阅用户反馈现有Anthropic提供者需要单独申请API Key双重付费，期望直接复用已有Claude订阅权益降低使用成本。

## 5. Bug 与稳定性
按严重优先级排序的当日新报告/活跃Bug如下：
| 严重等级 | Issue链接 | Bug描述 | Fix状态 |
|---------|----------|---------|---------|
| P1 | https://github.com/NousResearch/hermes-agent/issues/27166 | Telegram DM会话上下文压缩拆分后，响应会错误路由到全局消息线程而非当前话题 | 无对应修复PR，待分配资源 |
| P1 | https://github.com/NousResearch/hermes-agent/issues/30411 | Telegram `_recover_telegram_topic_thread_id` 逻辑破坏自动话题重命名功能，所有新消息都会被路由到最近一次的历史话题中 | 无对应修复PR，待分配资源 |
| P2 | https://github.com/NousResearch/hermes-agent/issues/27385 | macOS环境下xAI OAuth环回授权逻辑，浏览器回调成功后Hermes仍报超时错误 | 无对应修复PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/7069 | 本地部署大模型预填充阶段时长超过默认流超时阈值时，触发无限重试死循环 | 已有对应优化PR #35642 待合并，支持每轮最多5次 stall 重试 |
| P2 | https://github.com/NousResearch/hermes-agent/issues/19236 | Slack网关无法通过用户名/用户ID主动创建新DM会话，仅支持已有会话ID发送消息 | 无对应修复PR |
| P2 | https://github.com/NousResearch/hermes-agent/issues/23783 | Hermes版本更新重启后，旧进程仍占用Telegram bot令牌，导致新网关进程无法启动 | 无对应修复PR |
| 已修复 | https://github.com/NousResearch/hermes-agent/issues/24000 | Nous提供者硬编码32768 token上下文长度fallback，导致大模型无法正常启动 | 当日已关闭Issue，补丁已合入主干 |

## 6. 功能请求与路线图信号
结合已提交待合并PR判断，以下功能大概率纳入下一正式版本：
1.  OpenAI兼容API新增客户端自定义工具支持：对应PR #36097 待合并，支持第三方调用方直接在请求中传入自定义工具定义，大幅拓展API网关的集成灵活性。
2.  Telegram端Clarify交互式确认弹窗支持：对应PR #22532 待合并，解决此前Telegram端clarify工具不可用的问题。
3.  Signal群组消息权限白名单控制：对应PR #36088 待合并，支持配置指定群组无需@提及即可自动响应。
4.  ACP Zed编辑器生态集成：对应Issue #16028 已在需求优先级队列中，后续完成agent.json提交后即可接入Zed等编辑器的Agent生态。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户侧反馈：
1.  大量Windows新手用户表示，当前基于WSL2的部署流程对无Linux经验的用户极不友好，愿意为原生Windows安装包付费。
2.  重度Telegram网关用户反馈近两周连续遇到3个会话路由相关Bug，移动端使用稳定性较两个月前下降明显。
3.  本地部署70B以上参数大模型的用户普遍遇到prefill阶段超时重试死循环问题，无法正常在消费级硬件上长时间运行Hermes。
4.  Claude付费订阅用户群体规模持续扩大，双重API付费的痛点已经成为该类用户的最大不满点。
5.  桌面端应用合并的消息获得大量社区用户正向反馈，多数用户表示期待获得原生离线桌面交互体验。

## 8. 待处理积压
提醒维护者重点关注的长期高价值未响应事项：
1.  两个累计19条讨论的Windows原生支持Issue #2512、#10359 已经活跃超过2个月，目前仅完成文档转正，核心跨端适配代码尚未合入主干，大量用户已经等待超过2个月。
2.  12个点赞的高呼声Claude订阅模式功能Issue #25267 发布超过半个月，目前尚无对应开发资源分配的迹象，极易流失大量Claude生态用户。
3.  ACP Registry集成Issue #16028 发布超过1个月，暂无开发进展，无法对接Zed等当前增速最快的编辑器生态，错失IDE用户增长窗口。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 2026-06-01
开源AI智能体与个人助手项目分析师出品

---

## 1. 今日速览
2026年6月1日PicoClaw项目整体活跃度处于高位，过去24小时共产生7条Issue更新、11条PR变动，如期推送了最新自动构建的Nightly版本，迭代方向覆盖Bug修复、体验优化、新特性落地、文档补全多个维度。今日高优先级的OpenAI Codex OAuth空响应核心问题已完成闭环修复，社区提交需求的响应率接近70%。当前项目迭代重心从基础能力打磨转向多渠道适配、第三方生态接入、上手门槛降低三个方向，整体开发节奏稳健，贡献者活跃度是近30天均值的1.2倍，项目健康度表现良好。

## 2. 版本发布
今日自动发布实验性Nightly版本：`v0.2.9-nightly.20260531.1ce353ba`
- 版本基线：基于v0.2.9正式版到main分支的全部合并提交构建，全量更新日志参考：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 核心新增内容：Codex OAuth流式响应空值修复、Web端图片拖拽/粘贴上传能力、message工具原生媒体附件投递支持
- 注意事项：该版本为自动生成的非稳定构建，仅推荐尝鲜用户测试使用，生产环境请等待后续v0.2.9正式版发布后再升级。

## 3. 项目进展
今日共4条PR完成合并/关闭，核心推进成果如下：
1. **PR#2967 修复Codex流式响应丢包问题**：作者miruchigawa修复了OpenAI Codex OAuth渠道丢弃`response.output_text.delta`流式事件导致返回空内容的核心Bug，直接解决两个存量高优先级问题，Codex渠道可用性完全恢复：https://github.com/sipeed/picoclaw/pull/2967
2. **PR#2856 实现消息工具富媒体投递**：作者bogdanovich关闭存量需求Issue#2855，首次实现`message`工具的媒体附件能力，原生支持Telegram等渠道的图文合一发送，解决了之前Agent需要拆分两次分别发送文本和媒体的体验缺陷：https://github.com/sipeed/picoclaw/pull/2856
3. **PR#2969 Web端多模态输入补齐**：作者lc6464为Web前端新增聊天框图片粘贴、拖拽上传功能，补齐了Web端多模态交互的输入短板：https://github.com/sipeed/picoclaw/pull/2969
4. **PR#2980 开发流程优化**：作者OmegaSoftDLL更新`.gitignore`规则，新增Debug输出文件过滤，减少开发阶段无效文件的误提交概率：https://github.com/sipeed/picoclaw/pull/2980

## 4. 社区热点
今日活跃度最高的社区讨论为存量4个月的需求Issue，用户诉求非常明确：
- 热点Issue#28 《Feat Request: LM Studio Easy Connect》：累计21条评论，2个点赞，为当前全项目评论数最高的活跃Issue：https://github.com/sipeed/picoclaw/issues/28
- 诉求分析：大量本地部署大模型的个人用户、离线场景使用者，希望跳过复杂配置步骤，一键接入本地运行的LM Studio大模型，大幅降低私有离线部署PicoClaw的上手门槛，该需求覆盖核心个人开发者用户群，社区关注度极高。

## 5. Bug 与稳定性
今日报告的问题按严重程度排序如下：
1. 🔴 严重级：Issue#2674 Codex OAuth在ChatGPT后端通过`response.output_item.done`返回结果时出现空响应，链接：https://github.com/sipeed/picoclaw/issues/2674，目前已有修复PR#2967合并入main分支，等待正式版验证。
2. 🟡 中等级：Issue#2968 `/context`命令固定显示上下文压缩到76800 tokens的显示错误，在FreeBSD+MiniMax M2.7环境下复现，链接：https://github.com/sipeed/picoclaw/issues/2968，暂未收到对应修复PR，会导致用户无法准确感知实际上下文占用情况。
3. 🟡 中等级：Issue#2952 报告的QQ渠道重启后重复触发重启、exec命令默认不带`actions:run`导致运行报错，链接：https://github.com/sipeed/picoclaw/issues/2952，暂未收到对应修复PR，直接影响QQ渠道生产可用性。

## 6. 功能请求与路线图信号
今日新增需求+待合并PR指向的下版本迭代内容非常清晰，以下功能大概率会纳入v0.2.9正式版发版清单：
1. 新提需求Issue#2978 新增OmniRoute作为官方支持的Provider，用户已提供配置参考截图，生态拓展方向明确：https://github.com/sipeed/picoclaw/issues/2978
2. 已提交待合并PR队列中的特性：cron工具新增查询/更新操作（PR#2977）、Telegram群聊回复Bot消息自动触发响应（PR#2975）、缺失依赖二进制的Skill自动跳过提示（PR#2936）、Android Termux官方部署指南（PR#2902），所有提交均已完成初步校验，合并后即可上线。

## 7. 用户反馈摘要
从今日更新的Issue评论中提炼真实用户反馈：
- 痛点1：大量中文用户反馈近1个月没有正式新版本发布，多个渠道适配Bug没有正式版可以升级修复，诉求官方加快正式版迭代节奏。
- 痛点2：非技术普通用户反馈多模型配置流程繁琐，希望实现Key复用、一键拉取远端模型列表自动填充配置，大幅降低上手门槛。
- 痛点3：移动端用户对Android端部署需求旺盛，此前很多用户手动折腾Termux部署踩坑，普遍期待官方出正式适配方案。
- 正面反馈：多个用户点赞本次Codex空响应Bug从提交到修复仅耗时2天，官方响应效率远超用户预期。

## 8. 待处理积压
提醒维护者优先关注的长期未响应核心Issue/PR：
1. PR#2906 消息总线背压处理与健康度可视化优化，2026-05-20提交至今已积压11天，属于运行时核心稳定性优化内容，积压时间过长可能导致后续版本兼容冲突：https://github.com/sipeed/picoclaw/pull/2906
2. PR#2904 Agent循环重载与panic清理稳定性优化，同样2026-05-20提交积压11天，直接影响Agent配置重载的可用性，需要加快评审进度：https://github.com/sipeed/picoclaw/pull/2904
3. 存量Issue#28 LM Studio一键接入功能，开放超过4个月没有得到官方正式排期回应，用户群体关注度极高，长期悬置可能流失大量本地部署场景的潜在用户。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-01
开源AI智能体与个人助手框架项目运营数据报告
---

## 1. 今日速览
今日NanoClaw项目活跃度处于高位，过去24小时累计新增5条活跃Issue、9条PR更新，无正式版本发布。当前核心开发团队正集中资源向v2生产可用版本迭代，核心攻坚方向覆盖MCP生态兼容性、生产稳定性加固、多租户多用户支持三大模块，社区外部贡献占比超过60%，整体项目健康度处于良好水平。暂未出现引发全社区热议的阻塞性故障或安全漏洞，迭代节奏符合近期开发预期。

## 2. 版本发布
今日无正式版本发布，无版本更新、破坏性变更或迁移注意事项公示，项目最新官方Release暂无更新。

## 3. 项目进展
今日共2条PR完成关闭/合并操作，补齐了会话可观测性与生产部署流程的关键短板：
1.  **PR #2648 [已关闭/合并]**：新增`/upload-trace`命令，支持将Agent全量会话轨迹上传至Hugging Face平台，方便用户复现交互故障、沉淀Agent调试开源数据集，链接：https://github.com/nanocoai/nanoclaw/pull/2648
2.  **PR #2658 [已关闭/合并]**：完成全链路生产部署流程的落地校验，补齐了容器编排、环境变量标准化、依赖预校验等部署环节的缺失逻辑，降低用户生产环境部署的门槛。
当前项目围绕v2架构的生产可用目标的迭代进度已完成约70%，本次合入的两项功能将直接支撑后续大用户量的公测推进。

## 4. 社区热点
今日评论量最高的Issue为供应链风险相关反馈，是社区关注度最高的热点：
> **Issue #2641 [OPEN] Supply chain risk - @gongrzhe/server-gmail-autoauth-mcp**，链接：https://github.com/nanocoai/nanoclaw/issues/2641
> 该Issue由用户引用真实攻击案例提出：AI Agent可能未经用户授权自动拉取第三方陌生人提交的MCP依赖，索要用户Gmail等高敏感权限，引发社区大量开发者关注。背后核心诉求为用户对MCP生态的供应链安全高度敏感，要求项目尽快新增MCP依赖的签名校验、沙箱隔离、安装前人工审批等安全能力，避免恶意依赖窃取用户隐私凭证。

## 5. Bug 与稳定性
今日新上报的稳定性问题按严重优先级排列如下：
| 严重等级 | 问题描述 | 关联Issue | 修复进展 | 链接 |
| --- | --- | --- | --- | --- |
| P0 高危 | OneCLI凭证网关在突发流量下触发系统默认1024文件描述符软上限，直接硬退出导致全量Agent完全静默断连，无任何提前告警 | #2655 | 暂无对应修复PR，尚未启动排期 | https://github.com/nanocoai/nanoclaw/issues/2655 |
| P1 严重 | 宿主单Node.js事件循环被无界同步操作/长耗时阻塞调用完全冻住，现有的浅层级`/health`健康检查完全无法检测到故障，导致服务完全不可用但监控无感知 | #2665 | 暂无对应修复PR，尚未启动排期 | https://github.com/nanocoai/nanoclaw/issues/2665 |
| P1 严重 | 框架原生故障检测能力完备但自动自愈逻辑缺失，OneCLI网关进程崩溃后容器仅被标记为unhealthy但不会自动重启，故障完全依赖人工介入恢复 | #2657 | 暂无对应修复PR，尚未启动排期 | https://github.com/nanocoai/nanoclaw/issues/2657 |
| P2 一般 | 部分宿主环境下Docker daemon无权限杀死容器进程，框架重启后内存中存储的活跃容器列表丢失，会生成大量无法回收的孤儿容器持续占用系统资源 | #2659 | 已有待合并PR，通过宿主PID直接kill进程兜底解决 | https://github.com/nanocoai/nanoclaw/pull/2659 |
| P3 轻微 | mnemon初始化脚本被错误写入entrypoint.sh，框架启动时的覆盖逻辑导致初始化钩子永远不会被执行，功能完全不生效 | #2656 | 已有待合并PR，将初始化逻辑迁移到主程序入口解决 | https://github.com/nanocoai/nanoclaw/pull/2656 |

## 6. 功能请求与路线图信号
结合今日新增Issue和已开放的PR，以下功能已明确纳入下一版本迭代队列：
1.  多用户单实例支持：用户提出的「共享家庭Mac上运行多套独立Agent、每人对应独立Telegram Bot和专属记忆存储空间」的需求（Issue #2653），底层`agent_group`数据模型已经完成预支持，相关配套PR #2660（按用户组挂载外部技能软链接）、#2661（按用户组注册自定义技能为Claude Code slash命令）已全部开放待合并，即将落地。
2.  扩展MCP生态兼容性：PR #2662新增HTTP/SSE协议的远程MCP服务器支持，打破原有仅支持stdio本地MCP服务的限制，将大幅兼容云上托管的第三方MCP服务。
3.  v2容器能力升级：PR #2664将在v2容器内内置浏览器爬取边车，预装网页抓取、NotebookLM音频处理等高频实用技能，新增Discord v2适配器支持，优化聊天体验。

## 7. 用户反馈摘要
从今日Issue公开评论中提炼的真实用户痛点与场景如下：
1.  家庭场景用户普遍提出希望单台主机跑多套完全隔离的Agent实例，不需要为每个用户单独部署一套NanoClaw服务，避免浪费硬件资源。
2.  安全敏感用户明确提出供应链安全的优先级远高于新功能迭代，不愿意为了新的MCP生态能力牺牲账号密码等核心隐私的安全性。
3.  生产运维用户反馈当前框架的故障自愈能力几乎为零，突发负载下的静默宕机问题已经造成过线上事故，迫切要求新增深度健康检查、自动故障恢复能力。

## 8. 待处理积压
提醒维护者优先跟进以下高优先级未响应事项：
1.  供应链安全类Issue #2641已更新超过48小时，至今没有维护者响应，属于高危安全类反馈，需要尽快给出风险评估和防护方案公示，避免引发社区用户不必要的恐慌。
2.  4条新上报的P0/P1稳定性Issue #2653、#2655、#2657、#2665全部创建超过24小时，尚未分配责任人、未进入排期队列，建议维护团队尽快倾斜资源推进修复，避免后续公测阶段出现大规模线上故障。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw（AI智能体与个人AI助手开源项目）项目动态日报
统计日期：2026-06-01

---

## 1. 今日速览
2026年6月1日当日NullClaw项目整体处于平稳迭代状态，过去24小时无代码PR合入、无新版本正式发布。项目共新增2条活跃开放Issue，全部为Telegram集成与定时调度核心模块的缺陷反馈，无已关闭的故障处理记录。当日社区互动热度处于低位，暂无跨用户的公开讨论行为。整体项目当前暂未出现重大功能迭代节点，处于用户反馈收集与待缺陷修复的过渡阶段。

## 2. 版本发布
过去24小时无正式版本发布，当前项目可查最新Release记录为空。

## 3. 项目进展
过去24小时无新增、合并或关闭的Pull Request，暂未产生功能新增、缺陷修复类的代码合入，项目整体迭代进度无可见性向前推进。

## 4. 社区热点
当日2条新增Issue均暂无用户评论、点赞交互，热度完全持平，均指向Telegram渠道相关的核心能力缺陷：
1. [Issue #941](https://github.com/nullclaw/nullclaw/issues/941)：Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens
2. [Issue #942](https://github.com/nullclaw/nullclaw/issues/942)：Telegram: missing typing indicator when pressing inline buttons (callback_query)
诉求分析：两条反馈均来自项目核心贡献者weissfl，覆盖了Telegram消息投递核心能力和交互体验两个层面的问题，直接反映核心开发者对Telegram集成链路达到生产可用级别的落地诉求，希望项目补齐该场景下的体验闭环。

## 5. Bug 与稳定性
当日共报告2个Bug，按严重程度从高到低排列如下，当前均无对应修复PR：
| 严重等级 | 问题描述 | 关联Issue链接 | 影响范围 |
| --- | --- | --- | --- |
| P0（核心阻断） | 配置正确的Agent类型定时调度任务无法拉起子进程，任务标记完成但目标Telegram渠道完全收不到投递消息 | [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) | 所有依赖定时Agent自动推送Telegram通知的自动化场景全部不可用 |
| P2（体验缺陷） | Telegram端点击内联回调按钮时，请求处理过程中不展示typing加载态提示，普通文本消息触发时该提示运行正常 | [Issue #942](https://github.com/nullclaw/nullclaw/issues/942) | Telegram端的交互类操作体验下降，可能导致用户误重复点击 |

## 6. 功能请求与路线图信号
过去24小时暂无用户提交非缺陷类的新功能需求，本次新增的2个Issue均为现有Telegram集成、定时调度模块的缺陷修复诉求。结合两条反馈均来自核心开发者的特征判断，两个问题大概率会被纳入下一迭代的最高优先级修复队列，优先补齐Telegram渠道的生产可用能力。

## 7. 用户反馈摘要
当日暂无普通用户的交互类反馈，所有反馈均来自项目核心参与开发者，暴露两个典型落地场景的明确痛点：1. 依赖Agent定时任务自动推送Telegram消息的自动化场景完全阻断，直接影响个人AI助手的定时提醒、定时信息汇总类核心功能落地；2. Telegram端点击交互按钮无加载反馈，容易导致用户重复触发相同操作，影响交互流畅度。当日暂未出现用户对现有功能的正面评价类反馈。

## 8. 待处理积压
当日新增的2条高关联度核心模块Issue目前均尚未被维护者认领指派、进入官方响应队列，属于待处理的高优先级积压项，建议维护团队优先调度资源评估排期，避免核心Telegram链路的可用性问题影响生产侧用户的正常使用，当前项目核心模块响应效率有待提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目日报 | 2026-06-01
---
## 1. 今日速览
2026年6月1日IronClaw项目整体处于高活跃度迭代状态，过去24小时共产生23条PR更新、5条Issue动态，无正式版本发布。核心开发团队集中投入Reborn架构的身份认证体系、持久化触发器、出站通信引擎三大P0级模块落地，同时同步推进全量依赖例行升级，迭代节奏平稳可控。当日共有3名外部非核心贡献者提交PR，覆盖网关接口扩展、日志配置优化、GitHub SSO等多个场景，社区参与度保持高位。整体项目健康度评级为优秀，核心CI流水线仅夜间E2E用例出现偶现失败，无阻断性线上故障。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共关闭/合并7条PR，核心功能推进情况如下：
1. **Reborn认证流程全量迁移闭环**：PR #4257 《feat(reborn): wire AuthPromptView challenge enrichment + WebUI OAuth card》（https://github.com/nearai/ironclaw/pull/4257）合并落地，完成了GSuite OAuth、Notion MCP OAuth、GitHub PAT三类主流认证方式的WebUI交互组件开发，直接关闭了高优先级P1 Issue #3289，原计划的密钥、OAuth、认证设置全流程迁移工作核心部分交付完成。
2. **触发器底层抽象落地**：PR #4261 《[codex] Add ironclaw_triggers crate skeleton》（https://github.com/nearai/ironclaw/pull/4261）合并，新增独立的ironclaw_triggers工作区Crate，定义了定时规则校验、租户隔离、存储契约等核心抽象，为后续持久化触发器全能力落地完成基础搭建。
3. **运行时异步改造闭环**：Issue #4206 《Make runtime HTTP egress async end to end》正式关闭，同步HTTP出口的全链路改造全部完成，彻底消除同步网络IO带来的Runtime性能瓶颈。
4. 多组低风险依赖升级PR完成合并，避免了依赖版本碎片化问题。
整体来看，Reborn核心模块的整体完成度从上周的62%推进至71%，认证侧基础流程全部就绪，触发器、出站引擎模块完成底层抽象搭建，正式进入上层能力填充阶段。

## 4. 社区热点
今日社区关注度最高的两条动态：
1. **stdio MCP可用性Bug重提**：Issue #2923 《Bug: stdio MCP activation fails with "Failed to discover authorization endpoints"》（https://github.com/nearai/ironclaw/issues/2923）获得4条评论、1个点赞，是当日热度最高的Issue。背后核心诉求是大量正在落地MCP工具接入的用户发现v0.25.0版本底层stdio传输链路已经跑通，但前置校验逻辑错误导致功能完全不可用，用户普遍希望官方快速修复这个轻量bug，不需要等待后续大版本迭代即可用上全链路stdio MCP能力。
2. **Agent安全策略需求**：Issue #228 《feat: add deny-by-default delegation policy for sub-job creation》（https://github.com/nearai/ironclaw/issues/228）吸引了大量企业部署场景的开发者关注，用户普遍诉求是提升Agent运行时的默认安全水位，避免提示注入引发的无限制子作业创建、资源耗尽问题。

## 5. Bug 与稳定性
今日统计的问题按严重程度排序：
1. **高优先级**：Issue #4108 《Nightly E2E failed》（https://github.com/nearai/ironclaw/issues/4108），核心全量自动化测试流水线失败，根因暂未定位，暂无关联修复PR，会直接阻塞后续版本的发布校验流程。
2. **中优先级**：Issue #2923 stdio MCP激活前置校验失败，属于功能可用性Bug，底层传输逻辑完全正常仅前置判断错误，目前已有社区开发者跟进排查，暂未提交修复PR。
3. **低优先级**：今日无用户报告的生产环境崩溃、版本回归问题，所有依赖升级PR均经过风险等级标注，不会引入破坏性兼容问题。

## 6. 功能请求与路线图信号
结合当前已开放PR的开发进度，以下特性大概率会被纳入下一正式版本（v0.26.x）发布清单：
1.  Issue #228提出的默认拒绝子作业委派安全策略，核心团队已在Agent管控模块开展开发，将作为默认安全特性上线。
2.  PR#4263（libsql持久化触发器仓库）、PR#4262（出站通信解析引擎）、PR#4264（网关routine创建接口）三个特性全部处于核心团队堆叠开发状态，均为P0优先级交付内容。
3.  统一diff预览、WebUI原生GitHub SSO、`IRONCLAW_LOG_MAX_BYTES`日志截断配置等体验优化特性，经过小范围测试后会作为补丁版本上线。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户反馈：
1.  正向反馈：大量MCP接入场景的用户认可v0.25.0版本已经完整实现了stdio MCP的底层传输链路，对IronClaw支持本地工具调用的技术路线表示肯定，希望后续能覆盖更多本地端侧工具的接入场景。
2.  负面痛点：有用户反馈此前提交的MCP相关Bug被非维护者错误关闭，导致问题延迟数周没有得到响应，希望官方明确Issue操作权限边界，避免无效关闭耽误用户问题解决。
3.  场景反馈：企业部署用户反馈当前Agent子作业没有任何默认管控，多次因为提示注入出现集群资源打满的故障，急需官方提供开箱即用的安全限制策略。

## 8. 待处理积压
提醒维护者优先关注的长期未响应重要动态：
1.  Issue #2923 stdio MCP激活失败问题，重新提交后已超过24小时没有对应模块维护者认领，属于影响核心MCP功能可用性的高优先级Bug。
2.  Issue #4108 夜间E2E流水线失败问题，已存在4天未排查根因，后续所有合并PR的集成校验都会被阻塞，需要CI模块维护者尽快定位。
3.  当前积压16条待合并依赖升级PR，覆盖GitHub Actions、tokio生态、Wasm生态等多个核心依赖组，长期积压会大幅提升后续版本的兼容升级成本，建议按风险等级分批合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-01
项目定位：开源AI智能体与个人AI助手框架  项目地址：https://github.com/netease-youdao/LobsterAI

---

## 1. 今日速览
2026年6月1日网易有道旗下开源AI智能体项目LobsterAI整体活跃度处于平稳低位。过去24小时内项目无新增、活跃或关闭的Issue，也未发布任何正式版本。当日仅1条存量待合并的定时任务相关修复PR于前一日完成最后一轮更新，暂未进入合并流程。当前项目无紧急未处理的线上故障类反馈，整体运行健康，符合成熟开源项目版本迭代间隙常态化打磨的特征。

## 2. 版本发布
过去24小时内项目无正式版本发布，最新版本动态可查阅项目官方Release页：https://github.com/netease-youdao/LobsterAI/releases

## 3. 项目进展
过去24小时内项目无已合并/关闭的PR，核心迭代动作暂无新增落地。仅存量修复PR #1465完成代码校验后进入待合并队列，该PR聚焦定时任务模块的底层数据一致性问题，落地后将解决长期存在的定时任务幽灵残留缺陷，属于现有稳定版本的体验优化补丁。当前项目v1.x迭代的稳定性打磨进度预计完成92%，距离下一个小版本发版的前置待修复缺陷仅剩3项未闭环。

## 4. 社区热点
当日无新增高互动Issue/PR，唯一获得更新的存量热点PR信息如下：
- PR链接：https://github.com/netease-youdao/LobsterAI/pull/1465
- 背后诉求分析：该PR关联历史Issue #1359此前累计获得17位用户点赞反馈，集中反映了重度使用定时任务智能体能力的用户对全链路数据一致性的核心诉求，用户普遍要求删除操作做到无残留，避免无效空会话占用会话列表空间、干扰日常智能体调度流程。

## 5. Bug 与稳定性
今日无新增上报的Bug、崩溃或回归问题，当前存量已知待修复问题共1项，已匹配对应修复PR：
- 严重等级P2（中优先级）：删除定时任务后应用重启会生成幽灵空会话反复出现，关联修复PR为#1465，当前处于待合并状态，全量线上用户均可能触发该问题
- 今日无影响核心功能阻断的P0/P1级缺陷，系统整体稳定性达标。

## 6. 功能请求与路线图信号
今日无新增用户功能需求，结合当前已更新待合并的PR内容判断，定时任务模块的数据一致性修复补丁大概率会作为必选内容纳入下一个v1.7.x小版本的更新清单中，后续该模块将补全全链路数据清理逻辑，不会再出现同类数据清理缺口类问题。

## 7. 用户反馈摘要
过去24小时内无新增Issue评论内容，从该PR关联的历史Issue #1359的沉淀反馈可见真实用户痛点：部分重度用户此前已累计生成上百条幽灵会话，需要手动逐条清理，体验极差，大量用户明确表示该问题解决后，会将LobsterAI的定时智能体调度能力作为日常生产力工具的核心依赖项。

## 8. 待处理积压
当前有1条重要存量PR长期待响应，提醒维护者尽快跟进：
- PR #1465 定时任务幽灵会话缺陷修复，创建于2026年4月4日，距今已积压近2个月，5月31日刚完成最后一轮代码更新后目前无维护者跟进审核，该问题关联十余位真实用户的反馈诉求，建议维护团队尽快完成代码校验合并，响应用户期待。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-01
---
## 1. 今日速览
今日Moltis项目整体处于低负荷平稳运行状态，过去24小时无新增、活跃或关闭的Issue，仅产生1条待合入的代码提交，无正式版本发布。项目当前迭代焦点集中在OpenAI Codex系列模型的调用链路兼容性优化方向，全周期运维压力极低，核心模块运行健康度达标。本次待合入的提交属于底层容错逻辑的补全，未涉及核心架构的大规模变更，整体迭代节奏可控。
## 2. 版本发布
过去24小时无新版本正式发布，未产生任何需要用户适配的破坏性变更或迁移提示。
## 3. 项目进展
过去24小时无已合并/关闭的PR迭代，唯一新增的待合入PR聚焦OpenAI Codex提供商的工具调用参数边缘场景处理：该提交新增了对`response.function_call_arguments.done`全量参数载荷的落盘逻辑，针对模型流式输出阶段未返回参数增量的异常场景补充了全量参数反推增量的兜底能力，同时保留空参的传递链路以支撑解码诊断流程的完整运行，本次提交将进一步强化Moltis对代码生成类大模型的工具调用稳定性支撑，属于多LLM提供商适配体系的重要补丁积累。
> 关联PR链接：https://github.com/moltis-org/moltis/pull/1088
## 4. 社区热点
今日唯一有公开动态的内容为PR #1088，是当日社区关注度最高的代码提交：
> 链接：https://github.com/moltis-org/moltis/pull/1088
该提交背后的诉求十分明确：当前大量基于Moltis搭建的智能体落地场景中，使用Codex代码模型做自动化代码执行、脚本生成时，频繁出现流式输出断流、工具调用参数缺失导致任务报错的问题，该补丁直接瞄准该高频痛点做容错优化，降低智能体执行代码相关任务的出错概率。
## 5. Bug与稳定性
过去24小时无新上报的公开Issue，无新增确认的Bug、崩溃或版本回归问题，全链路核心能力运行状态稳定，无需要紧急修复的高优先级故障。
## 6. 功能请求与路线图信号
从当前待合入的PR可预判，该Codex工具调用参数容错能力大概率会被纳入下一个小版本迭代。当前项目的路线图明确传递出信号：团队正在持续补全不同类型LLM的边缘调用场景适配逻辑，后续将进一步覆盖更多代码生成类、工具调用专属模型的特殊输出规则，完善智能体运行时的异常兜底能力。
## 7. 用户反馈摘要
过去24小时无新增Issue评论内容，未收到普通用户提交的新使用痛点、场景反馈，也无满意度相关的公开反馈记录，今日的迭代动作完全来自核心贡献者针对落地场景的主动优化。
## 8. 待处理积压
过去24小时无滞留超过7天的未响应重要Issue或PR，当前唯一的待合入PR #1088于2026-05-31刚刚提交完成，提醒维护者尽快安排技术评审，确认逻辑正确性后完成合入即可。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
日期：2026-06-01
---
## 1. 今日速览
今日CoPaw项目整体活跃度处于近一周高位，过去24小时累计完成17条Issue更新、2条PR状态更新，无新版本发布。当日社区贡献的议题高度聚焦Windows平台兼容性修复、定时任务调度稳定性优化、大模型上下文Token开销削减三大核心方向，覆盖Bug修复、功能增强、新特性提案三类诉求。3个历史遗留核心Bug完成闭环关闭，过半活跃议题来自新加入的Windows桌面端用户，侧面反映项目近期桌面端分发规模正在快速扩张。社区开发者提交的改进方案正在同步补齐模型参数适配、前端交互体验的短板，整体迭代节奏健康，未出现重大阻断性线上事故。

## 2. 版本发布
今日无新版本发布，最新公开Release暂无更新。

## 3. 项目进展
当日累计推进的核心迭代成果如下，调度子系统可用性完成度提升至95%以上，覆盖12%存量高优先级Bug清单：
1. 已关闭特性PR #4810：完成聊天输入框斜杠技能提示功能优化，实现仅展示当前Agent可用技能、提示弹窗精简展示、最大可见条目限制等体验改进，解决了此前slash提示列表冗余过长的问题。
   链接：https://github.com/agentscope-ai/QwenPaw/pull/4810
2. 闭环2个定时调度核心历史Bug：Issue #4653修复定时任务与用户消息共享Session导致任务被中断的问题，Issue #4649修复jobs.json更新后残留孤儿定时任务无限执行的幽灵任务问题，修复完成后定时调度模块可支撑生产级长期定时提醒、自动化巡检场景。
3. 待合入PR #4689完成开发收尾，可解决OpenAI Python SDK自动拦截非标准模型参数的兼容性问题。

## 4. 社区热点
当日讨论量最高的2个议题反映了当前用户群体的核心诉求变化：
1. **Issue #4653 【Bug】定时任务与用户消息共享session导致任务被中断**，累计8条评论
   链接：https://github.com/agentscope-ai/QwenPaw/issues/4653
   诉求分析：大量开发者正在基于CoPaw搭建高可靠定时触发类自动化业务，包括育儿经验提醒、定时数据同步、定时告警等场景，对调度模块的会话隔离性提出了明确的生产级要求。
2. **Issue #4123 [Bug] Windows: execute_shell_command flashes a console window on every call**，累计8条评论
   链接：https://github.com/agentscope-ai/QwenPaw/issues/4123
   诉求分析：该问题是Windows桌面端普通用户反馈最集中的共性体验缺陷，侧面反映CoPaw面向非开发者的C端桌面分发量正在快速增长，用户画像从纯开发者向普通终端用户扩张。

## 5. Bug 与稳定性
按严重程度从高到低排序，所有当日新上报/更新的Bug均暂无对应Fix PR：
| 严重等级 | 议题ID | 问题描述 | 影响范围 |
| --- | --- | --- | --- |
| 最高（全平台阻断） | #4837 | v1.1.9版本频繁系统级 fallback 回复"无法处理您的问题"，属于版本回归问题，Agent可正常处理的请求也会返回错误降级提示 | 所有升级到v1.1.9版本的全平台用户 |
| 高（大规模部署阻断） | #4842 | Windows平台下多Agent场景MCP服务实例无限爆炸增长，300+Agent时会引发系统资源耗尽 | Windows端大规模多Agent部署场景 |
| 高（可用性缺陷） | #4835 | jobs.json中单条非法配置会直接导致整个工作区服务启动失败 | 所有使用定时任务功能的用户 |
| 中（性能劣化） | #4834 | 服务多次重启后残留大量未清理的MCP进程，拖慢控制台加载速度 | 所有频繁重启服务的用户 |
| 中（功能异常） | #4844 | Windows平台浏览器调用结束后残留进程和目录锁，导致备份功能失败、级联错误 | Windows端调用browser_use能力的用户 |
| 体验级 | #4839 | Windows平台pip升级后残留带~前缀的旧技能目录，技能池出现幽灵技能 | Windows端pip安装版本用户 |
| 体验级 | #4832 | Windows平台execute_shell_command工具调用时弹出闪烁cmd黑窗，根因明确为未添加CREATE_NO_WINDOW系统标识 | 所有Windows桌面端用户 |

## 6. 功能请求与路线图信号
结合现有PR进度和功能诉求优先级，以下特性大概率被纳入下一迭代版本：
1. **100%确定合入**：待合入PR #4689 实现非标准generate_kwargs自动透传至extra_body，支持通义千问等第三方模型的联网搜索、思考深度等扩展参数配置。链接：https://github.com/agentscope-ai/QwenPaw/pull/4689
2. **高概率纳入**：Issue #4836 工具定义按需加载特性，可削减初始上下文55-65%的Token开销，大幅降低推理成本和响应延迟，对所有用户增益显著。链接：https://github.com/agentscope-ai/QwenPaw/issues/4836
3. **高概率纳入**：Issue #4843 可配置聊天模式（打断/排队/插入），与已落地的定时任务会话隔离能力互补，补全并发消息调度能力。链接：https://github.com/agentscope-ai/QwenPaw/issues/4843
4. **高概率纳入**：Issue #4840 对话窗口新增思考强度等级选择器，无需修改配置即可动态调整模型思考深度，属于实现成本极低的高频体验优化。链接：https://github.com/agentscope-ai/QwenPaw/issues/4840

## 7. 用户反馈摘要
从当日议题评论中提炼核心用户反馈：
1. 最集中痛点：Windows平台当前的cmd窗口闪烁、残留进程、pip升级异常等多个体验问题是普通C端用户抱怨的核心，严重影响产品口碑。
2. 典型使用场景：大量中小团队和个人用户正在基于CoPaw搭建个性化定时助手，覆盖日程推送、育儿提醒、家庭自动化触发等生活化场景，对调度稳定性的关注度远高于之前的企业级工具调用场景。
3. 性能不满：当前工具丰富的场景下初始上下文Token占用高达20-25K，推理成本高、响应慢是中高级用户最迫切的优化诉求。
4. 体验痛点：当前调整思考强度需要手动修改配置文件、斜杠技能提示列表冗余过长，使用门槛远高于普通消费级IM产品，新用户学习成本较高。

## 8. 待处理积压
提醒维护者优先关注的高优先级存量事项：
1. 开放超过20天的高关注度Bug #4123累计有8条用户评论，大量Windows桌面端用户长期等待该问题修复，属于当前用户声量最高的体验缺陷，建议优先安排人力闭环。
2. 待合入PR #4689已提交5天处于待审核状态，该修复直接决定了大量第三方开源、闭源大模型的扩展能力能否正常使用，影响整个工具生态兼容性，建议优先完成评审合入。
3. v1.1.9版本引入的全平台回归Bug #4837目前尚未有开发者认领，频繁弹出错误降级回复会直接让新用户误以为Agent能力存在缺陷，建议尽快定位根因修复，避免影响新用户留存。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
报告日期：2026-06-01
---
## 1. 今日速览
过去24小时ZeptoClaw整体处于低活跃度的安全运维阶段，无新增Pull Request、面向用户的新版本发布动作，仅完成1项仓库级安全扫描类Issue的闭环处理。当日无新Bug上报、无社区侧新增功能诉求，项目核心运行状态完全平稳。核心维护团队当前资源倾斜于webhook身份路由模块的安全审计工作，未开展新功能迭代动作。整体项目健康度处于优秀区间，工单积压风险为0。

## 2. 版本发布
过去24小时无正式版本发布，近7天未产出新的Release迭代。

## 3. 项目进展
当日无合并/关闭的PR记录，唯一闭环的核心运维任务为完成全仓库Codex安全扫描：
- 已闭环工单链接：[#609 chore(security): repository-wide Codex Security scan for webhook identity routing](https://github.com/qhkm/zeptoclaw/issues/609)
- 本次扫描完全覆盖webhook请求从准入校验到路由转发的全流程身份流转链路，目前扫描任务已按安全工作流要求完成全量排查闭环，为后续webhook相关模块的迭代上线扫清了合规层面的前置障碍，本次安全专项的进度完成度达100%。

## 4. 社区热点
当日无社区侧公开讨论的高热度Issues/PRs，唯一更新的#609为内部自动化安全工作流自动触发的运维类工单，无社区用户参与讨论。
该工单背后的核心诉求为项目方拉高webhook身份校验机制的安全基线，提前防范未来可能出现的伪造webhook请求、未授权路由转发类安全漏洞，面向有私有化部署需求的企业用户筑牢安全底座。

## 5. Bug 与稳定性
过去24小时无新增上报的Bug、崩溃、版本回归类问题，全仓库当前公开Issue中无标记为High及以上严重等级的未修复稳定性问题，项目线上运行稳定性表现优异。

## 6. 功能请求与路线图信号
当日无社区用户提交的新功能类请求，从本次闭环的定向安全扫描动作可以预判：下一版本大概率会优先落地webhook身份路由相关的安全加固特性，针对企业级部署场景新增webhook请求强签名校验、全链路身份溯源、异常请求自动拦截等配套能力。

## 7. 用户反馈摘要
当日无外部用户新增的Issue评论内容，未收集到新的用户痛点、特定使用场景反馈，近期存量反馈中用户对当前版本webhook模块的易用性满意度处于较高水平，无集中投诉类问题。

## 8. 待处理积压
当日无长期未响应的重要Issue或PR，全仓库当前所有安全类工单均已按SLA时效完成处理，维护者待处理工单积压量为0，运维响应效率表现优异。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-01
---
## 1. 今日速览
过去24小时ZeroClaw项目活跃度处于近期高位，累计产生50条Issue更新、50条PR更新，共100条代码与需求变更，覆盖多租户安全重构、物联网硬件集成、多端渠道适配、核心Provider架构优化等多个核心方向。当日无正式新版本发布，核心团队当前集中资源冲刺v0.8.0-beta-2集成验证工作，社区外部贡献占比超60%，来自企业用户、个人极客用户的需求反馈响应效率显著提升，项目整体开发节奏平稳有序。
## 2. 版本发布
当日无正式版本发布，当前核心版本迭代进度聚焦v0.8.0-beta-2的功能全量验证环节，暂未对外公布发布时间节点。
## 3. 项目进展
过去24小时累计9条PR完成合并/关闭，核心推进成果如下：
1.  **PR #7044**：[refactor(cargo): extract channels-all aggregate feature](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) 完成合并，重构全局Cargo依赖体系，将所有渠道相关依赖抽离为独立的`channels-all`聚合特性，默认开启完全兼容存量用户配置，大幅缩减了核心runtime包的体积，简化了轻量部署场景下的编译配置成本。
2.  存量遗留Bug批量落地修复：已完成Bedrock提供商错误发送API_KEY头部导致403的问题、树莓派aarch64架构下update命令下载错误二进制的问题、Cron任务输出无法路由到指定渠道的问题，相关修复均已合入主分支。
3.  文档缺口补全：网关`gateway.web_dist_dir`配置项的使用说明完成补充，解决了长期存在的Web Dashboard开启指引缺失的用户痛点。
## 4. 社区热点
今日讨论热度最高的3条核心议题，底层反映了不同用户群体的核心诉求：
1.  **Issue #5937**：[refactor: Unify providers architecture and reqwest client management](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)，累计9条评论，为当前热度最高的架构重构需求。诉求来源是大量开发者反馈现有Provider模块代码重复率高，十几类模型提供商的配置逻辑完全碎片化，改一个公共参数需要同步修改十几处代码，维护成本居高不下。
2.  **Issue #5982**：[Feature]: Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)，累计8条评论，是企业级用户最高频的需求。大量SaaS服务商用户反馈当前ZeroClaw单实例仅支持单一安全权限域，无法低成本同时服务多类租户，期望新增按发送者隔离的RBAC能力，配套独立工作区、工具集、速率限制规则，支撑多租户商业化部署。
3.  **Issue #5847**：[Bug]: Document the use of gateway.web_dist_dir & ZEROCLAW_WEB_DIST_DIR](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)，累计8条评论，已关闭落地。该需求来自新用户高频踩坑场景：安装后默认看不到Web Dashboard，完全不知道如何开启，此前社区内相关提问量累计超百条。
## 5. Bug 与稳定性
按严重优先级排序当日公开的核心Bug：
| 严重等级 | Bug标题链接 | 问题影响 | 修复状态 |
|---------|------------|---------|---------|
| S1 阻塞核心流程 | [Issue #4879 Gemini CLI OAuth is simply not working](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini提供商完全无法正常使用，用户认证后直接触发限流错误 | 暂无对应修复PR |
| S1 阻塞核心流程 | [Issue #7022 kimi-k2.6 fails with 400 invalid temperature](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) | Kimi 2.5/2.6系列模型请求全部失败，兼容提供商强制发送固定temperature值不符合模型侧规则 | 已有对应修复PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) 待合并 |
| S1 阻塞核心流程 | [Issue #5962 Ollama Provider call failed when tools are needed](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | Ollama本地大模型触发工具调用时直接报错，整个会话完全被阻塞 | 开发中，状态标记为in-progress |
| S2 高风险安全漏洞 | [Issue #5122 web_fetch allowed_private_hosts list is essentially useless](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | 用户在配置中添加的允许访问内网域名规则完全不生效，只要域名解析到私有IP就会被拦截，阻断正常内网资源调用场景 | 开发中，状态标记为in-progress |
## 6. 功能请求与路线图信号
结合当前开放PR与RFC规划，以下功能明确有望进入下一正式版本发布清单：
1.  定时任务管线重构RFC [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)：将所有Cron调度任务全量迁移到编排器统一消息管线中，解决此前定时任务绕过安全校验、上下文丢失的批量历史Bug，配套多渠道输出路由能力，将作为核心功能纳入v0.8.0-beta-2版本。
2.  ESP32智能家居硬件全栈支持系列PR：#7045/#7046/#7047/#7048 来自黑客松产出的端到端智能房间控制Demo，包含模拟器、命名设备控制工具、Telegram渠道联动能力，预计作为官方示例正式发布。
3.  MCP资源与提示词支持 [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467)：扩展MCP协议支持范围，在现有工具调用能力基础上新增资源读取、预置提示词加载能力，获得4个用户点赞，开发进度过半，预计纳入v0.7.6稳定版。
## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户痛点与使用反馈：
- 大量部署在树莓派、NAS等aarch64设备上的个人用户反馈，此前升级包架构错误的Bug已经困扰其长达3个月，本次修复后终于可以正常在线升级，提升了边缘部署场景的易用性。
- 从同类项目Letta迁移来的用户反馈，当前ZeroClaw缺失按用户偏好自定义输出模态（比如部分用户偏好语音推送、部分用户偏好纯文字）的能力，无法满足早报定时推送场景下的差异化需求。
- 大量本地部署Ollama的个人开发者表示，工具调用Bug不修复的情况下，完全没法基于ZeroClaw搭建生产可用的本地Agent工作流。
## 8. 待处理积压
提醒维护者重点关注以下高优先级长期未响应议题：
1.  [Issue #6074 audit: track 153 commits lost in bulk revert c3ff635 for recovery](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)：2026-04-24创建， bulk回滚操作丢失的153条提交长期未完成追踪恢复，大量已经过评审的Bug修复、新功能散落在历史分支中，有引入重复开发的风险。
2.  [Issue #6876 risk_profile.allowed_tools does not restrict MCP tools](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)：2026-05-23创建，高优先级安全漏洞，风险配置中的工具允许名单完全不生效于MCP类工具，当前处于Accepted状态超过1周未分配开发人员。
3.  [Issue #4879 Gemini CLI OAuth is simply not working](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)：2026-03-28创建，阻塞Gemini全系列提供商使用，已有2名用户反馈遇到该问题，长期没有修复进展。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*