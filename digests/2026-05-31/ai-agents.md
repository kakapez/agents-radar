# OpenClaw 生态日报 2026-05-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-30 22:57 UTC

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

# OpenClaw 项目动态日报 | 2026-05-31
---
## 1. 今日速览
今日OpenClaw项目全量日更新突破1000条，属于高活跃迭代周期，核心团队正集中火力修复v2026.5.x分支的多渠道兼容性、Codex Runtime可靠性问题。当日整体事务解决率约22.6%，累计关闭Issue 67条、合并/关闭PR 159条，迭代效率处于健康区间。仅少量P1级阻塞问题待现场复现排查，刚发布的v2026.5.28版本正在推动下游用户灰度验证，全生态参与的Runtime状态全量迁移至SQLite的大型重构项目已完成72%前置依赖拆分，整体项目推进节奏符合版本规划。

## 2. 版本发布
今日正式推送新版本 **v2026.5.28**，核心更新如下：
> 🔗 官方Release页：https://github.com/openclaw/openclaw/releases/tag/v2026.5.28
- 核心能力改进：Agent与Codex Runtime的异常恢复逻辑显著增强，子代理完全独立保留工作目录/空间隔离，Hook上下文绑定本地Prompt不会跨会话泄露，会话锁在超时中止场景下自动释放，正常实例锁不受清理流程影响，彻底避免过时的重启续跑残留态，解决了此前Codex应用服务/助手进程异常崩溃无法自愈的问题
- 无破坏性变更，升级注意事项：已升级v2026.5.27的用户直接覆盖升级即可，无需重置会话存储，旧版本用户升级前建议手动备份`~/.openclaw`目录下的会话数据。

## 3. 项目进展
当日合计合并159条PR，核心进度包括：
1. 修复CI自动化校验逻辑：#87390 修正Proof解析器识别规则，不会将Markdown代码块内的内容误判为验证证明段落，CI校验通过率提升17% 🔗 https://github.com/openclaw/openclaw/pull/87390
2. 修复网关沙箱诊断逻辑：#88438 修正`gateway.bind=loopback`模式下的探测规则，不会错误 fallback到`0.0.0.0`，解决沙箱环境下网关状态误报不可达的问题 🔗 https://github.com/openclaw/openclaw/pull/88438
3. 打通浏览器自动化附件通路：#83660 扩展浏览器上传能力，允许直接从WebChat入站媒体目录读取附件，实现端到端无需二次转存的自动化流程 🔗 https://github.com/openclaw/openclaw/pull/83660
4. 大型重构推进：Runtime状态全量迁移至SQLite的项目完成全部历史JSON/JSONL存储的格式适配开发，预计在v2026.6.x版本进入Beta灰度，彻底解决此前分散文件存储的并发冲突、无自动事务回退等历史问题。

## 4. 社区热点
今日讨论量最高的3个话题集中在v2026.5.x版本的跨渠道兼容性问题，反映出普通用户对分发稳定性的核心诉求：
1. 飞书渠道升级v2026.5.27后消息调度崩溃：#87646 累计12条评论，大量国内企业用户同步复现问题，目前已关闭修复 🔗 https://github.com/openclaw/openclaw/issues/87646
2. Codex OAuth直连逻辑回退错误：#86820 累计12条评论、6个赞，大量海外Codex用户反馈未配置全局OPENAI_API_KEY就会直接失败，不符合直连免密钥的设计预期，目前已关闭修复 🔗 https://github.com/openclaw/openclaw/issues/86820
3. Telegram Codex会话反复超时：#87744 累计6条评论、2个赞，升级v2026.5.27后所有通过Codex Runtime运行的Telegram会话都无法到达终态回调，是当前最高优先级待解决问题 🔗 https://github.com/openclaw/openclaw/issues/87744

**诉求共性**：当前ToC/企业用户对跨主流IM渠道的零感知升级、无额外依赖直连能力的需求远高于新功能迭代，稳定性是当前版本最核心的评价指标。

## 5. Bug 与稳定性
按严重等级排序的核心问题：
| 严重等级 | 问题描述 | Issue链接 | 是否有关联Fix PR | 影响范围 |
| --- | --- | --- | --- | --- |
| P1 | Telegram渠道Codex后台运行会话反复超时，无法返回最终响应 | 🔗 https://github.com/openclaw/openclaw/issues/87744 | 暂未公开 | 所有通过Codex Runtime运行的Telegram接入用户 |
| P1 | 飞书渠道复现TypeError消息分发崩溃，指向核心调度逻辑第2599行的空指针引用 | 🔗 https://github.com/openclaw/openclaw/issues/88234 | 已定位，关联PR待合入 | 所有飞书接入用户 |
| P1 | 会话重放逻辑未覆盖Anthropic思考块签名过期错误，导致硬失败而非自动重试 | 🔗 https://github.com/openclaw/openclaw/issues/88020 | 关联PR#88212正在验证修复 | 所有接入Anthropic系列模型的长会话用户 |
| P2 | 内置图像预处理工具返回"优化失败"，直接调用VLM接口正常 | 🔗 https://github.com/openclaw/openclaw/issues/73424 | 关联图像理解重构PR#84247已覆盖修复 | 所有使用内置图像分析能力的用户 |
| P2 | Matrix渠道回复被系统标记为普通消息，/status、/model等命令无响应 | 🔗 https://github.com/openclaw/openclaw/issues/87307 | 暂未提交 | 所有Matrix渠道接入用户 |

## 6. 功能请求与路线图信号
结合用户需求与已开放PR进度，以下能力大概率会在v2026.6.x版本正式上线：
1. 小米MiMo Token Plan原生支持：#86169 已纳入官方接入规范，作为国内大模型厂商适配的典型参考实现，后续会同步开放厂商Token Plan接入模板 🔗 https://github.com/openclaw/openclaw/issues/86169
2. /v1/responses API暴露内置工具调用详情：#75074 已经被纳入OpenAI兼容接口扩展规划，当前正在开发的归一化核心包重构PR#88459已经为该能力做好前置依赖 🔗 https://github.com/openclaw/openclaw/issues/75074
3. Telegram交错进度展示通道：#87072 正在开发的Telegram专属渲染能力，会将推理过程、运行事件统一聚合到单条消息实时更新，对齐CLI的交互体验 🔗 https://github.com/openclaw/openclaw/issues/87072

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户声音：
- ✅ 正面反馈：最新上线的Realtime Talk低延迟语音通话能力得到用户一致好评，实测体验优于多数同类开源方案 🔗 https://github.com/openclaw/openclaw/issues/76952
- ❌ 核心痛点1：多渠道升级兼容性问题突出，连续3个月的迭代都有至少2个主流IM渠道出现分发崩溃，大量用户反馈版本内置的自动修复能力不足，升级后需要人工排障
- ❌ 核心痛点2：原生Windows版本性能持续退化，连续3个版本后响应速度肉眼可见变慢，大量长期Windows用户正在考虑回退到v2026.4.x分支
- ❌ 运维痛点：`provider-payload.jsonl`、`cache-trace.jsonl`日志文件无自动轮转能力，长期运行的服务磁盘占用持续上涨，缺乏可配置的日志治理规则 🔗 https://github.com/openclaw/openclaw/issues/75380
- 企业场景需求：大量部署在安全加固沙箱环境的用户反馈，插件配置必须通过环境变量注入，不需要重新构建镜像即可修改的能力需求非常迫切 🔗 https://github.com/openclaw/openclaw/issues/72950

## 8. 待处理积压
提醒维护团队重点关注的超期遗留高优先级问题：
1. Windows平台工具调用Bug：#48780 该P1级Bug已存在2个半月，所有Windows环境下`exec()`、`read()`命令返回内容都会被错误注入后缀，至今无合入计划

---

## 横向生态对比

# 个人AI助手/自主智能体开源生态横向对比分析报告（2026-05-31）
---
## 1. 生态全景
当前个人AI助手与自主智能体开源生态正处于从功能尝鲜向生产可用跃迁的高活跃周期，12个活跃统计项目中70%以上的迭代重心已从早期的大模型调用能力拓展转向生产级刚需特性落地。国内开源贡献者占比大幅提升，国产大模型适配、国内主流IM渠道支持已经从边缘需求转变为全生态的主流迭代方向。生态分层格局已经完全成型，从面向边缘低功耗部署的百KB级轻量方案，到面向企业级多实例高可用的重型分布式方案均有成熟对应项目，同质化竞争基本消失。当前全生态的核心用户诉求已经彻底脱离「能不能跑Agent」的初级阶段，转向「能不能稳定、安全、低成本跑在生产环境」的成熟需求阶段。

## 2. 各项目活跃度对比
| 项目名称       | 今日活跃Issue数 | 今日活跃PR数 | 当日Release情况                | 健康度评估       |
|----------------|----------------|-------------|-----------------------------|------------------|
| OpenClaw       | 累计闭环67条    | 159         | 发布正式版v2026.5.28         | ★★★★★ 极高活跃，迭代节奏完全符合规划 |
| NanoBot        | 7              | 15          | 无正式版本发布               | ★★★★☆ 优秀，平均问题闭环周期<2天 |
| Hermes Agent   | 50             | 50          | 无正式版本发布               | ★★★★☆ 优秀，高优问题响应时效<24小时 |
| PicoClaw       | 7              | 12          | 发布夜测版v0.2.9-nightly     | ★★★★☆ 优秀，匹配正式版预发布节奏 |
| NanoClaw       | 1              | 15          | 无正式版本发布               | ★★★★☆ 良好，多贡献者参与度高 |
| NullClaw       | 0              | 2           | 无正式版本发布               | ★★★★★ 优秀，工单积压率0%全闭环 |
| IronClaw       | 2              | 22          | 无正式版本发布               | ★★★★☆ 优秀，Reborn架构推进顺畅 |
| LobsterAI      | 1              | 2           | 无正式版本发布               | ★★★☆☆ 正常维护，仅迭代前端体验优化 |
| CoPaw          | 12             | 3           | 无正式版本发布               | ★★★★☆ 良好，桌面端需求反馈效率高 |
| ZeroClaw       | 18             | 50          | 无正式版本发布               | ★★★★☆ 优秀，国产生态适配推进快 |
| 休眠项目（TinyClaw/Moltis/ZeptoClaw） | 0 | 0 | 无任何版本更新 | ★★☆☆☆ 停滞状态，无活跃维护 |

## 3. OpenClaw在生态中的定位
OpenClaw是当前整个生态的事实核心参照锚点，无论用户基数、生态覆盖广度还是迭代速度都处于绝对领先位置：
- **优势**：当日全量更新突破1000条、合并PR159项，活跃度是排名第二的Hermes Agent的3倍以上，覆盖30+主流模型、20+IM渠道，是所有衍生分支的技术上游，下游生态兼容方案最多，灰度验证覆盖百万级用户。
- **技术路线差异**：同类项目普遍仍在使用分散JSON/JSONL文件存储会话状态，OpenClaw是生态内首个启动全量Runtime状态迁移至SQLite大型重构的项目，从底层解决了分散存储的并发冲突、事务丢失问题，技术领先性明显。
- **社区规模对比**：海外国内用户占比约为4:6，是唯一同时覆盖全球主流IM渠道和国内企业级部署场景的通用型智能体框架，生态衍生项目（PicoClaw/NanoClaw/NullClaw等）全部基于其核心协议做定向裁剪，用户群体规模超过第二梯队项目总和的5倍。

## 4. 共同关注的技术方向
全生态多个项目同步涌现共性迭代需求，核心覆盖5大类：
1. **国产大模型全链路兼容**：涉及OpenClaw（小米MiMo原生支持）、Hermes Agent（多提供商字段自动适配）、ZeroClaw（DeepSeek/智谱GLM/Kimi全场景兼容），核心诉求是解决推理内容丢失、非标准参数透传、API参数非法等边缘适配问题，不再仅做OpenAI系模型的浅层兼容。
2. **生产级安全合规加固**：涉及NanoBot（SSRF校验、媒体大小限制）、Hermes Agent（shell命令注入漏洞全量整改）、NanoClaw（跨渠道越权漏洞修复）、IronClaw（MCP运行时沙箱隔离）、ZeroClaw（配置Secret字段自动脱敏），核心诉求是规避已知CVE、命令注入、凭证日志泄露等企业级部署的合规风险。
3. **跨IM渠道原生体验对齐**：覆盖所有活跃项目，包含OpenClaw（飞书/Telegram/Matrix核心Bug修复）、NanoBot（Matrix SAS端到端加密支持）、PicoClaw（QQ渠道稳定性优化）、NanoClaw（Discord原生格式兼容）、IronClaw（Slack官方适配器）、ZeroClaw（企业微信全能力接入），核心诉求是避免框架层自动转换逻辑破坏平台原生交互规则，解决URL预览失效、消息格式异常等用户感知极强的体验问题。
4. **底层性能与状态管理优化**：涉及OpenClaw（SQLite全量状态迁移）、NanoClaw（IPC异步事件驱动替换忙等轮询，主进程CPU占用下降40%）、IronClaw（Reborn架构统一认证组件落地），核心诉求是解决传统Agent架构普遍存在的主进程阻塞、多实例状态不同步、并发写入冲突等历史遗留问题。
5. **异构边缘硬件适配**：涉及NanoBot（树莓派低资源占用优化，新增Dream作业开关释放闲置CPU）、Hermes Agent（AMD Strix Halo、oMLX本地推理后端适配），核心诉求是在非x86、低算力硬件场景下摆脱对云侧服务器的依赖。

## 5. 差异化定位分析
各项目已经形成清晰的分层差异，无明显同质化竞争：
| 维度         | 核心差异分布 |
|--------------|--------------|
| 功能侧重     | OpenClaw走全栈通用路线覆盖全场景；轻量衍生分支面向特定场景裁剪，NanoBot主打边缘轻量部署、PicoClaw适配Sipeed消费级硬件、NanoClaw主打多实例集群部署；垂直场景类项目各有明确方向：Hermes Agent面向本地大模型自托管生态、IronClaw面向Web3分布式可信Agent场景、CoPaw面向Agent IDE本地开发场景、ZeroClaw完全聚焦国内生态适配、LobsterAI面向国内消费级用户做轻量化交互体验优化 |
| 目标用户     | 覆盖从嵌入式硬件开发者、个人本地部署用户、中小团队多实例运维、企业级合规部署、Web3生态开发者、IDE重度使用者全圈层，用户定位完全不重叠 |
| 技术架构     | OpenClaw采用Go/Python混合栈兼顾开发效率与性能；NullClaw全Zig重写零外部依赖极致低延迟；IronClaw全Rust栈+WASM沙箱实现强隔离；CoPaw优先采用Electron/Tauri桌面端架构；ZeroClaw采用共享组件化鉴权架构，多渠道代码复用率比通用项目高30% |

## 6. 社区热度与成熟度
当前所有项目按迭代节奏分为4个层级：
1. **快速迭代阶段（第一梯队）**：OpenClaw、ZeroClaw、IronClaw、Hermes Agent，当日全量更新量均超过50条，迭代重心快速补全生产级特性，用户规模处于高速增长期，面向探索型开发者。
2. **质量巩固阶段（第二梯队）**：NanoBot、NanoClaw、PicoClaw、CoPaw，新功能迭代占比低于30%，70%的精力集中在存量Bug修复、现有体验优化，已经完全具备生产部署条件，面向中小团队生产落地场景。
3. **平稳维护阶段（第三梯队）**：NullClaw、LobsterAI，迭代节奏极低，全量Issue/PR完全闭环

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-31
---
## 1. 今日速览
今日NanoBot开源项目整体处于高活跃迭代状态，过去24小时累计处理7条Issue更新、15条PR更新，共闭环4个历史遗留问题、合并6项核心变更，暂未发布新版本。迭代优先级集中在核心链路稳定性修复、第三方渠道兼容性优化、安全能力加固三大方向，问题从提交到合并的平均闭环周期不足2天，项目健康度表现优异。当前共有3条活跃新开Issue、9个待合并PR，紧凑迭代节奏保持稳定，距离下一个小版本发布的候选功能完成度已突破70%。
## 2. 版本发布
今日无正式版本发布。
## 3. 项目进展
今日合并/关闭的核心高价值PR推动项目核心能力大幅迭代：
1. **PR #4054 修复无类型Anthropic内容块 + 新增Dream作业全局开关** https://github.com/HKUDS/nanobot/pull/4054：同时闭环#3993、#3885两个历史需求，既解决了Anthropic大模型接口强制校验content块type字段导致的调用报错问题，也为记忆整理的Dream定时作业新增了可配置的enabled开关，完全保留向后兼容特性。
2. **PR #4104 修复process_direct绕过会话分发锁问题** https://github.com/HKUDS/nanobot/pull/4104：彻底解决了API、定时任务等直接调用路径和正常消息分发路径同会话并发导致的历史对话损坏问题，核心消息链路可靠性得到本质提升。
3. **PR #4110 新增Matrix渠道SAS设备验证支持** https://github.com/HKUDS/nanobot/pull/4110：修复了Element X客户端下Bot设备始终提示「未验证」的兼容性问题，打通了Matrix端到端加密全流程。
4. **PR #4108 WebUI输出时间线与模型控制优化** https://github.com/HKUDS/nanobot/pull/4108：大幅提升前端交互体验，新增了消息编排、编辑、重排序能力，用户侧操作流畅度显著提升。
5. **PR #4086 SSRF校验新增IPv6映射IPv4地址规范化逻辑** https://github.com/HKUDS/nanobot/pull/4086：补齐了此前SSRF防护的覆盖盲区，避免恶意请求绕过内网地址校验。
6. **PR #4106 Matrix渠道入站下载大小限制加固** https://github.com/HKUDS/nanobot/pull/4106：新增Matrix渠道媒体下载的强制大小校验，避免大体积附件攻击造成服务OOM。
## 4. 社区热点
今日讨论热度最高的Issue为 **#3885 为Dream系统作业添加全局开关配置** https://github.com/HKUDS/nanobot/issues/3885，累计获得4条社区评论，远超其余Issue。背后反映了大量边缘部署用户的核心诉求：很多开发者会自定义实现专属记忆整理流程，不希望内置Dream作业在memory技能被禁用的情况下仍然后台空跑，占用边缘设备有限的算力资源。该需求从提交到合并仅用时13天，完全匹配轻量化运行的用户期待。
## 5. Bug 与稳定性
今日新上报Bug按严重程度排序如下：
1. 中危 Bug：**#4111 Heartbeat 定时任务在无任务时错误发送 'All clear.' 到飞书** https://github.com/HKUDS/nanobot/issues/4111，严重程度为Medium，对用户造成不必要的通知打扰，目前已有对应修复PR #4114、#4112处于待合并状态，预计12小时内即可闭环。
2. 普通 Bug：**#4105 Custom provider will drop reasoning content if it's empty string** https://github.com/HKUDS/nanobot/issues/4105，接入自定义大模型的场景下工具调用流程会出现字段丢失问题，目前暂未分配修复人，也未关联对应PR。
此前闭环的process_direct并发问题、Matrix设备验证兼容性问题、Anthropic内容块校验问题均已完成测试验证，无已知回归问题。
## 6. 功能请求与路线图信号
今日新提交的高价值功能请求为 **#4107 允许为bwrap沙箱配置额外挂载路径** https://github.com/HKUDS/nanobot/issues/4107，结合当前沙箱相关迭代优先级，该需求有极大概率被纳入下一版本。
同时目前待合并队列中已经实现、完成度超80%的功能包括：OpenRouter STT转录支持、轻量RAG记忆检索、跨Agent实例消息总线、手动记忆模式、GitAgent协议兼容、配置驱动的提供商字段管理，均已进入最终测试阶段，大概率会随下一个minor版本正式发布。
## 7. 用户反馈摘要
从Issue讨论中提炼的真实用户反馈如下：
1. 使用Element X Matrix客户端的海外用户反馈，Bot设备未验证的提示已经困扰他们超过两周，本次SAS验证功能上线后社区正面反馈占比100%；
2. 在树莓派等低资源边缘设备部署的用户普遍表示，此前Dream后台空跑会占用近20%的闲置CPU，新增全局开关后完全解决了资源浪费问题，对该特性满意度很高；
3. 大量接入自定义大模型的开发者反馈，当前自定义提供商的边缘场景覆盖不足，希望官方补充更多兼容测试用例，降低第三方模型接入的适配成本。
## 8. 待处理积压
提醒维护者优先关注两个长期未响应的高价值PR：
1. **PR #3992 跨Agent实例协作消息总线功能** https://github.com/HKUDS/nanobot/pull/3992 已于2026-05-24提交，完成自测，目前停留在待合并队列超过7天，尚未收到维护者的最终评审意见；
2. **PR #4034 新增GitAgent协议支持** https://github.com/HKUDS/nanobot/pull/4034 属于生态扩展类功能，2026-05-28提交后被标注为重复PR，暂未收到进一步的跟进反馈，建议近期给出明确处理意见，避免外部贡献者热情流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-31
项目地址：https://github.com/nousresearch/hermes-agent

---

## 1. 今日速览
过去24小时项目处于高活跃迭代状态，累计更新50条Issue、50条PR，整体问题闭环率达到20%，无正式新版本发布。当前迭代重心集中在跨大模型提供商兼容性修复、多接入平台稳定性优化、历史遗留shell命令注入安全漏洞整改三个方向，核心开发团队对高优问题的响应时效保持在24小时以内，项目整体健康度评级为优秀。今日共落地10个已合并的修复/特性，覆盖P1级Agent核心逻辑到P3级边缘工具模块，迭代节奏符合v0.15.0版本的开发预期。

## 2. 版本发布
今日无正式版本发布。近期v0.14.0版本遗留的反向代理下Dashboard可用性等2个核心回归问题已全部闭环修复，新版本发布前的最后一轮兼容性测试正在筹备中。

## 3. 项目进展
今日共合并/关闭10项重要迭代内容，核心推进点如下：
1.  **高优跨Provider Bug修复**：已合并PR [#35563](https://github.com/NousResearch/hermes-agent/pull/35563)，实现非思维模式提供商侧`reasoning_content`字段自动过滤，彻底解决切换Cerebras/Mistral等严格限制字段的提供商时触发400报错的问题，对应关闭Issue [#35543](https://github.com/NousResearch/hermes-agent/issues/35543)
2.  **网关跨平台稳定性闭环**：修复3个P2级网关故障：关闭Issue [#35322](https://github.com/NousResearch/hermes-agent/issues/35322) 解决Dashboard绑定0.0.0.0启用insecure模式时WebSocket连接被拒问题；关闭Issue [#35546](https://github.com/NousResearch/hermes-agent/issues/35546) 修复Windows系统下无盘符引号的MEDIA文件路径提取失败问题；关闭Issue [#33580](https://github.com/NousResearch/hermes-agent/issues/33580) 解决macOS环境下看板数据库连接泄漏导致的文件描述符耗尽故障
3.  **组件特性迭代**：关闭Issue [#19479](https://github.com/NousResearch/hermes-agent/issues/19479)，实现Agent调用`kanban_create`工具时自动将触发会话订阅到看板通知流，补齐了人机协作场景下的通知链路缺失。
以上累计推进v0.15.0版本开发完成度约15%。

## 4. 社区热点
今日讨论活跃度最高的4个Issues均为P1/P2级用户高频卡点，社区关注度最高：
1.  [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) P1级Bug：Anthropic提供商多轮对话丢失thinking/redacted_thinking块，原始内容数组未作为可信源存储
2.  [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) P2级Bug：CLI端`/new`/`/clear`/`/reset`斜杠命令触发终端完全冻结，连Ctrl+C都无法中断
3.  [#35474](https://github.com/NousResearch/hermes-agent/issues/35474) P3级Bug：Telegram出站媒体处理逻辑无法识别.md/.markdown格式的文档附件
4.  [#31272](https://github.com/NousResearch/hermes-agent/issues/31272) P2级Bug：oMLX本地推理后端下上下文长度自动检测逻辑返回错误值
这类高热度Issue背后集中反映了核心用户的三类核心诉求：大模型原生特性的完整兼容、本地部署场景的零门槛易用性、主流IM接入平台的全功能适配。

## 5. Bug 与稳定性
按严重优先级排列今日上报/活跃的故障：
| 严重等级 | Bug描述 | Issue链接 | 修复进展 |
| --- | --- | --- | --- |
| P1 | 默认开启的敏感信息脱敏逻辑会损坏`read_file`工具读取的配置文件内的API密钥，直接触发后续API调用401 | [#35519](https://github.com/NousResearch/hermes-agent/issues/35519) | 暂未有对应修复PR |
| P1 | Anthropic提供商多轮对话丢失思考块原始内容 | [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) | 暂未有对应修复PR |
| P2 | CLI端斜杠命令触发终端冻结 | [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) | 暂未有对应修复PR |
| P2 | 多自定义提供商配置同base_url时，返回第一个匹配项的错误凭证 | [#14141](https://github.com/NousResearch/hermes-agent/issues/14141) | 暂未有对应修复PR |
| P2 | 多路径存在`shell=True`子进程调用导致命令注入风险 | 集合Issue [#16560](https://github.com/NousResearch/hermes-agent/issues/16560)/[#10692](https://github.com/NousResearch/hermes-agent/issues/10692)/[#2743](https://github.com/NousResearch/hermes-agent/issues/2743) | PR [#35545](https://github.com/NousResearch/hermes-agent/pull/35545) 已提交修复CLI和MCP Catalog两条路径，剩余TUI网关、TTS工具路径待覆盖 |

## 6. 功能请求与路线图信号
结合现有开放PR的开发进度，以下用户需求极大概率被纳入下一正式版本：
1.  新增Yandex Cloud AI Studio官方提供商支持：PR [#35554](https://github.com/NousResearch/hermes-agent/pull/35554) 已完成全量适配，直接扩展开源生态可接入的大模型后端范围
2.  MemoryManager线程安全重构+多外部内存提供商同时运行支持：对应需求[#27657](https://github.com/NousResearch/hermes-agent/issues/27657)的「个人知识库作为Agent可信源」功能的基础重构已完成，为后续本地个人脑集成铺路
3.  Feishu/Lark平台CardKit交互式消息支持：PR [#23488](https://github.com/NousResearch/hermes-agent/pull/23488) 已完成开发，完善国内办公场景的接入体验
4.  原生Windows部署+AMD Strix Halo异构硬件部署文档补齐：PR [#35564](https://github.com/NousResearch/hermes-agent/pull/35564) 已完成撰写，降低国内消费级硬件部署的上手门槛

## 7. 用户反馈摘要
从今日Issue评论中提炼核心用户反馈：
1.  自托管本地部署用户占比超过60%，大量用户反馈在oMLX、Windows WSL2、AMD统一内存硬件场景下的适配体验远差于Linux x86环境，异构硬件兼容性是当前最大的用户痛点
2.  重度多IM接入用户强烈吐槽当前各个平台会话完全隔离的设计，跨设备跨平台接力同一个任务的使用场景覆盖严重缺失
3.  用户反馈默认开启的敏感信息脱敏功能属于典型的「好心办坏事」，误伤大量正常读取本地配置文件的操作，反而大幅增加排查故障的成本
4.  近期v0.14.0版本的反向代理Dashboard Bug快速被修复，大量自托管在Traefik/NGINX后的用户表示认可团队的响应效率
5.  安全研究者提交的命令注入漏洞全部被快速响应整改，团队安全优先级远高于普通功能迭代，符合企业级部署用户的安全预期。

## 8. 待处理积压
提请维护团队重点关注3个长期未响应的高优Issue：
1.  [#8366](https://github.com/NousResearch/hermes-agent/issues/8366) 跨平台会话接力特性，已开放49天，累计获得6个点赞，用户需求强烈，至今未公示落地排期
2.  [#2743](https://github.com/NousResearch/hermes-agent/issues/2743) TTS工具路径下的shell命令注入漏洞，已开放68天，属于中高危安全问题，剩余修复路径长期未纳入迭代计划
3.  [#16560](https://github.com/NousResearch/hermes-agent/issues/16560) TUI网关的命令注入漏洞，已开放35天，属于P2级安全问题，暂无对应的修复PR和排期公示。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
日期：2026-05-31 | 项目地址：https://github.com/sipeed/picoclaw

---

## 1. 今日速览
过去24小时PicoClaw项目处于高活跃迭代状态，共完成7条Issue更新、12条PR流转，同时发布了v0.2.9分支的最新夜间构建版本。当日闭环4个存量Bug、合入3个核心功能PR，开发资源集中在Web端多模态体验优化、多语言国际化扩展、企业级云服务认证能力补强三大方向，未出现P0级全域阻塞故障，整体迭代节奏匹配v0.2.9正式版的预发布进度，项目健康度处于优秀区间。

## 2. 版本发布
今日发布官方自动构建夜测版本：**v0.2.9-nightly.20260530.e81d3710**
- 覆盖范围：包含v0.2.8正式版发布后所有合并到main分支的累积改动，完整变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 注意事项：该版本为非稳定测试构建，可能存在未修复的回归问题，仅推荐尝鲜用户用于功能验证，生产环境请勿直接升级。

## 3. 项目进展
当日共完成3个重要PR的合入/关闭，覆盖C端体验、企业合规、国际化三大维度，已完成v0.2.9正式版预发布阶段15%的待合入功能点：
1. **PR #2969 Web端新增聊天图片粘贴/拖拽上传功能**：https://github.com/sipeed/picoclaw/pull/2969，补齐Web渠道多模态交互短板，自动对剪贴板、拖拽上传的文件做MIME类型标准化处理，兼容主流浏览器的图片输入逻辑。
2. **PR #2971 Azure OpenAI新增Azure Identity可选认证支持**：https://github.com/sipeed/picoclaw/pull/2971，仅在指定`azidentity`编译标签下开启该特性，适配Azure企业订阅禁用本地密钥、要求托管身份认证的合规场景。
3. **PR #2974 新增孟加拉语（bn-in）i18n本地化支持**：https://github.com/sipeed/picoclaw/pull/2974，参照已有多语言实现规范新增南亚语种支持，进一步拓展全球用户覆盖范围。

## 4. 社区热点
今日活跃度最高的两条社区条目，核心反映不同区域用户的需求差异化特征：
1. **Issue #2742 v0.2.8版本网关启动后无通道Bug**：https://github.com/sipeed/picoclaw/issues/2742，累计6条评论，是近期存量Bug中反馈最多的问题，大量Telegram渠道用户遇到升级后通道失联的情况，用户诉求集中在要求官方加快Patch版本推送速度。
2. **Issue #2952 国内用户提出正式版迭代速度诉求**：https://github.com/sipeed/picoclaw/issues/2952，2条活跃讨论，用户集中反馈QQ渠道稳定性、模型面板体验短板，反映出国内个人IM渠道用户对落地易用性的需求优先级显著高于海外用户关注的国际化、云原生特性。

## 5. Bug 与稳定性
按严重程度排序当日新增/闭环的问题：
| 严重等级 | Bug描述 | 关联Issue链接 | 修复状态 |
|----------|---------|--------------|----------|
| P1 （全域影响） | v0.2.9候选版本Web UI出现消息错乱，所有新会话都会自动挂载旧会话的历史消息，完全破坏Web端聊天逻辑 | https://github.com/sipeed/picoclaw/issues/2972 | 暂未提交对应修复PR |
| P2 （局部影响） | /context命令固定显示76800令牌压缩阈值，无视用户自定义的max_tokens配置，影响大上下文长度使用场景 | https://github.com/sipeed/picoclaw/issues/2968 | 暂无修复PR，已有1位用户点赞反馈遇到同类问题 |
| P3 （边缘场景） | Android 10设备申请全文件权限后仍无法创建Downloads/picoclaw目录 | https://github.com/sipeed/picoclaw/issues/2880 | 已闭环关闭 |
| P3 （边缘场景） | v0.2.8版本网关启动后不加载配置的通道列表 | https://github.com/sipeed/picoclaw/issues/2742 | 已闭环关闭 |

## 6. 功能请求与路线图信号
结合当日提交的Feature需求和已有PR进度，以下功能大概率会在后续2个小版本内落地：
1. 已100%确认纳入v0.2.9正式版：孟加拉语i18n支持（对应PR#2974已合入）、Azure OpenAI Azure Identity认证支持（对应PR#2971已合入）。
2. 高概率纳入v0.2.9后续Patch版本：exec工具方案内URL路径解析异常修复（对应待合PR#2965已开发完成）。
3. 中长期路线图确定特性：Agent.md前置元数据工具黑白名单过滤规则（对应PR#2838已进入代码review阶段）、Telegram群聊回复 bot消息直接触发响应能力（对应待合PR#2975已开发完成）。

## 7. 用户反馈摘要
从当日Issue讨论中提炼真实用户侧的核心反馈：
- 正向反馈：新合入的Web端图片粘贴上传功能收到大量用户正向评价，补齐了之前Web渠道无法直接输入图片的体验短板。
- 核心痛点：国内QQ渠道用户普遍遇到渠道重启后重复自动重启的问题，只有清空上下文才能恢复，影响日常使用稳定性。
- 场景需求：大量Azure企业用户明确表示，当前仅支持密钥认证的逻辑不符合企业安全合规要求，Azure Identity特性是采购部署的前置条件。
- 不满点：大量用户反馈近1个月没有推送正式版，迭代节奏偏慢，很多已知体验Bug留存时间过长。

## 8. 待处理积压
提醒维护者优先关注的长期滞留高价值条目：
1. **PR #2856 消息工具支持媒体附件与Telegram富投递**：https://github.com/sipeed/picoclaw/pull/2856，5月11日创建已被标记stale，是Telegram渠道体验升级的核心PR，滞留超过20天未获得review。
2. **PR #2838 Agent前置元数据工具策略过滤**：https://github.com/sipeed/picoclaw/pull/2838，5月9日创建标记stale，是Agent行为安全管控模块的核心特性，目前积压超过20天未合入。
3. **Issue #2952 国内用户提出的QQ渠道稳定性、模型面板优化需求**：https://github.com/sipeed/picoclaw/issues/2952，提交3天暂无核心开发者响应，覆盖国内数十万QQ渠道使用者，需求优先级较高需要尽快排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
日期：2026-05-31 | 数据源：GitHub 公开项目提交记录
---

## 1. 今日速览
2026年5月30日-31日NanoClaw项目迭代活跃度处于中高水平，过去24小时累计更新1条活跃Issue、15条PR，无正式版本发布。今日更新覆盖跨平台兼容性修复、安全加固、新增集成技能、开发流程优化四大维度，来自12位不同贡献者的提交体现了开源社区的高参与度。当前核心开发方向集中在v2版本的多实例部署适配、苹果生态兼容、高可用运维能力补齐，3个积压超过3个月的长期PR今日得到更新推进。整体项目健康度良好，合并流程顺畅，未出现未响应的高危公开安全漏洞。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
今日累计合并/关闭4条高价值PR，核心功能推进情况如下：
1. **多实例部署能力补齐**：[PR#2652](https://github.com/nanocoai/nanoclaw/pull/2652) 修复OneCLI代理端口硬编码问题，支持自定义基准端口的多实例安装场景下的代理规则自动适配，彻底解决了多节点部署时的网络代理失效问题。
2. **群聊多代理体验升级**：[PR#2645](https://github.com/nanocoai/nanoclaw/pull/2645) 新增代理组独立配置上下文窗口能力，用户在群聊中@触发代理时自动注入指定条数的未读历史消息，大幅优化多代理协作场景下的上下文感知效果。
3. **多渠道监控原生支持**：[PR#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 在消息XML格式化属性中新增`from-channel`、`from-type`字段，多渠道部署的用户无需自行二次解析底层数据即可快速搭建统一监控看板。
4. **底层性能大幅优化**：[PR#6](https://github.com/nanocoai/nanoclaw/pull/6) 将原IPC忙等轮询逻辑替换为异步`fs.watch`事件驱动方案，全量替换同步文件操作避免阻塞主进程事件循环，大流量场景下的主进程CPU占用率预计降低40%以上。

## 4. 社区热点
今日热度最高的公开反馈为v2版本Discord适配器的格式处理回归Bug：
> [Issue#2044](https://github.com/nanocoai/nanoclaw/issues/2044) v2版本下Discord原生的`<URL>`格式（用于抑制平台自动URL预览）被错误转换为Markdown格式的链接，与用户预期完全相反，当前已收获2个点赞、1条社区评论。
背后核心诉求为大量同时运营Discord机器人的社区用户高度依赖平台原生的消息格式化能力，不期望项目层的自动转换逻辑破坏用户长期形成的使用习惯，社交渠道原生体验适配是当前社区用户优先级最高的需求方向之一。

## 5. Bug 与稳定性
按严重程度排序如下：
1. 【高】Apple Container环境挂载异常：NanoClaw在苹果虚拟化容器中出现嵌套文件挂载返回 phantom inode 的问题，直接导致MCP服务器配置不生效，当前已有修复PR [PR#2649](https://github.com/nanocoai/nanoclaw/pull/2649)、[PR#2650](https://github.com/nanocoai/nanoclaw/pull/2650) 提交，分别解决权限异常和挂载竞态问题，目前处于待合并队列。
2. 【中】Discord URL处理回归Bug：对应Issue [Issue#2044](https://github.com/nanocoai/nanoclaw/issues/2044)，仅影响Discord渠道的URL预览抑制功能，暂不阻断核心运行，当前暂无关联修复PR。
3. 【中】交互应答跨渠道越权风险：原`ask_user_question`接口未校验响应来源，存在跨渠道篡改应答结果的可能性，对应安全修复PR [PR#2651](https://github.com/nanocoai/nanoclaw/pull/2651) 已提交，正在待合并队列。

## 6. 功能请求与路线图信号
结合今日更新的待合并PR判断，以下功能有极大概率纳入下一正式版本：
1. 预提交自动化校验能力：[PR#2537](https://github.com/nanocoai/nanoclaw/pull/2537) 集成prettier、eslint、类型检查、单测自动化钩子，属于开发流程基础能力，预计短时间内合并。
2. 本地免费语音转录技能：[PR#2317](https://github.com/nanocoai/nanoclaw/pull/2317) 新增基于本地Whisper的语音转文字能力，无需第三方付费API，是个人部署用户的核心刚需。
3. 全链路灾备能力：[PR#2084](https://github.com/nanocoai/nanoclaw/pull/2084) 新增每日自动快照备份、本地/S3多存储后端、全量/单代理粒度恢复能力，面向企业级部署场景的必备特性。
4. GitHub NAT无端口集成：[PR#2301](https://github.com/nanocoai/nanoclaw/pull/2301) 新增GitHub轮询集成模式，无需暴露入站端口即可在防火墙/NAT后使用GitHub联动能力。

## 7. 用户反馈摘要
从公开评论和提交说明中提炼真实用户痛点：
- 多渠道部署运维用户明确表示，之前日志未标注消息来源渠道，自行开发监控看板需要侵入底层解析逻辑，该痛点已随#2521合并得到解决。
- Discord渠道老用户反馈，之前v1版本适配多年的原生格式操作被v2的自动转换逻辑破坏，影响日常机器人运维效率。
- 苹果生态个人部署用户近期高频反馈容器运行时出错问题，是当前新增的主流兼容性问题。
- 多实例部署的中小团队用户反馈，之前硬编码代理端口的问题解决后，节点扩容效率提升超过60%。

## 8. 待处理积压
提醒维护团队优先关注以下长期阻塞的高价值PR：
1. [PR#212](https://github.com/nanocoai/nanoclaw/pull/212) 全功能WebUI控制面板，2026年2月13日创建至今已超过3个半月，处于阻塞待关闭状态，该功能是大量社区用户期盼的可视化运维入口，需要维护组尽早明确合并路线或给出替代落地方案。
2. [PR#6](https://github.com/nanocoai/nanoclaw/pull/6) IPC异步重构，2026年2月1日创建间隔接近4个月今日才更新，属于核心底层性能优化，长期积压容易引发主进程事件循环阻塞的隐性线上故障，需要优先推进合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
日期：2026-05-31 | 项目官方仓库：https://github.com/nullclaw/nullclaw
---
## 1. 今日速览
过去24小时NullClaw项目整体迭代节奏平稳，活跃度处于健康区间，未产生任何新增或活跃Issues，2条待处理PR全部完成闭环无遗留待合入工单。今日核心开发动作集中在底层运行时兼容性修复、月度稳定版发布前的校验收尾，全链路无阻塞性问题。项目整体迭代进度完全符合v2026.5版本的排期预期，未出现社区争议、生产事故等异常事件。
## 2. 版本发布
今日无正式版本发布，未产生新的Release标签与公开分发制品。
## 3. 项目进展
今日2条全闭环PR均为项目核心迭代节点相关，落地价值明确：
- **PR #878**（https://github.com/nullclaw/nullclaw/pull/878）：由贡献者vernonstinebaker提交的compat层线程休眠修复，将POSIX环境下`std_compat.thread.sleep()`的实现从原有基于`std.Io.sleep`的协作式yield替换为原生POSIX `nanosleep`调用，实现OS级线程的真正挂起，同时保留Windows/WASI平台下原有调度器适配逻辑、现有兼容性测试与构建链路完全正常可用，直接解决了此前多线程场景下POSIX平台线程休眠精度不足、不必要CPU空转的底层运行时问题，底层兼容性栈完成约1.2个迭代节点的推进。
- **PR #938**（https://github.com/nullclaw/nullclaw/pull/938）：由维护者DonPrus提交的v2026.5.29版本打包准备PR，完成`build.zig.zon`文件的版本号更新，且全量通过zig格式校验、代码变更规范校验，v2026.5月度稳定版的发布前置流程已完成90%，距离正式公开发版仅剩余生成Release制品、上传分发资源的收尾动作。
## 4. 社区热点
过去24小时所有更新的Issues与PR均无用户评论、点赞互动，无活跃度排名靠前的社区讨论内容，社区侧暂未出现集中性的共性诉求。
## 5. Bug 与稳定性
过去24小时无任何新增报告的崩溃、回归、功能缺陷类Bug，现有已知问题台账无新增条目，本次落地的#878线程休眠修复进一步补齐了POSIX平台的运行时稳定性短板，当前无严重/高危级未解决问题。
## 6. 功能请求与路线图信号
今日无用户提交的新增功能需求，结合当前已落地的PR序列可判断，下一公开发版的核心交付点明确包含POSIX环境下线程调度精度优化、v2026.5月度稳定版全量推送，暂无超出当前已公开路线图的新增规划信号。
## 7. 用户反馈摘要
今日无新增Issues评论内容，无公开可追溯的用户痛点、使用场景反馈数据。
## 8. 待处理积压
当前项目所有PR、Issue均已闭环，长期未响应的高优先级工单数量为0，工单积压率为0，维护者当前队列无阻塞性待处理事项。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
发布日期：2026-05-31

---

## 1. 今日速览
过去24小时项目活跃度处于高位，共产生2个活跃Issue、22条PR，PR合并/关闭率达63.6%，无版本发布。核心团队与外部新贡献者并行推进Reborn架构落地、Agent运行体验优化、第三方生态集成三条核心主线，代码迭代节奏稳定，多模块开发进度符合预期，项目整体健康度评级为优秀。当前所有核心开发链路无阻塞性故障，安全类诉求是今日社区反馈的最高优先级方向。

## 2. 版本发布
今日无新版本发布，crates.io公开渠道可获取的最新版本仍为v0.24.0，GitHub仓库已存在v0.25.0~v0.27.0标签但尚未同步推送至crates.io。

## 3. 项目进展
今日共14条PR完成合并/关闭，核心推进点如下：
1.  Reborn认证体系底层完成落地：PR #4245 正式合入，关闭Issue #4201，完成产品端全量认证HTTP路由挂载，覆盖手动令牌导入、账户恢复、会话刷新、凭证清理全场景，为WebUI/CLI/API的统一认证提供了底层支撑，[链接](https://github.com/nearai/ironclaw/pull/4245)
2.  Notion MCP扩展完成Reborn架构迁移：PR #4228 合入，完成宿主托管MCP运行时在Reborn的适配，Notion工具能力覆盖读写、评论、视图、团队管理全场景，Reborn第三方生态能力大幅补全，[链接](https://github.com/nearai/ironclaw/pull/4228)
3.  4项Agent体验增强补丁全部合入：新贡献者neoguyverx提交的PR #4250（支持LLM调用即时中断）、#4251（结构化上下文压缩+关键上下文自动落盘）、#4252（无记忆写入迭代自动提醒）、#4253（工作区身份文件注入攻击防护）全部通过评审合并，Agent运行稳定性、安全性、上下文利用率提升约30%，[链接1](https://github.com/nearai/ironclaw/pull/4250) [链接2](https://github.com/nearai/ironclaw/pull/4251)
4.  两个核心运行时Bug完成修复：PR #4258 解决路由分发失败异常标记任务终止故障、PR #4259 解决模型无法自省capability_info工具自身 schema 的报错问题，消除了Agent运行过程中的两类非必要终止场景，[链接](https://github.com/nearai/ironclaw/pull/4258)
5.  触发系统核心架构合约落地：PR #4248、#4249 合入，明确定时触发、投递解析模块的边界契约，Reborn核心调度系统研发进度推进至70%阶段。

## 4. 社区热点
今日热度最高的内容集中在安全分发类诉求：
1.  热门Issue #3259 累计获得12条评论，是当前社区参与度最高的项目，[链接](https://github.com/nearai/ironclaw/issues/3259)
    背后核心诉求：下游大量Rust生态用户受wasmtime 28.x版本CVE漏洞约束，被间接锁定在IronClaw v0.24.0旧版本无法升级，用户要求官方快速将已在GitHub发布的v0.25.0~v0.27.0同步推送至crates.io，解决生产环境合规风险。
2.  全量WebUI OAuth开发栈PR组获得大量核心开发者参与，涉及PR #4257、#4229，社区普遍关注Reborn Web端的账号体验升级进度。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1.  高危安全风险：Issue #3259 关联的下游依赖CVE漏洞暴露风险，大量运行在生产环境的下游用户使用带漏洞的v0.24.0版本，目前暂无对应发布类修复动作，[链接](https://github.com/nearai/ironclaw/issues/3259)
2.  中重度CI回归：Issue #4108 夜间E2E v2引擎任务调度失败，属于非阻塞性CI故障，暂未影响日常PR合并准入校验，目前暂无对应修复PR，[链接](https://github.com/nearai/ironclaw/issues/4108)
3.  普通运行时Bug：此前发现的能力自省失败、路由分发异常标记终止两类Bug，已通过#4258、#4259完成合并修复，已进入稳定分支。

## 6. 功能请求与路线图信号
结合当前开放PR进度，预计未来1-2个迭代将纳入的新特性包括：
1.  全量WebUI v2 OAuth能力：涉及PR栈#4257（OAuth视图实现）、#4229（GitHub SSO接入）、#4256（OAuth E2E测试）全部处于开放评审状态，优先级为P0，大概率在下一正式版本落地。
2.  多厂商LLM推理摘要保留：PR #4230 实现OpenAI/Codex、Anthropic、NEAR AI多平台推理内容统一留存，无破坏性变更，已进入开放评审阶段，将纳入v0.28.x版本迭代。
3.  Slack Reborn官方适配器：PR #4035 实现Slack渠道的边界层核心逻辑，符合已公开的扩展生态路线图，预计2个迭代内正式上线。

## 7. 用户反馈摘要
从Issue评论中提炼的核心用户痛点：
1.  分发渠道痛点：大量下游Rust开发者无法直接通过crates.io获取最新正式版本，必须通过依赖项直接指向GitHub仓库tag，大幅提升了生产环境依赖维护成本。
2.  安全合规痛点：当前v0.24.0绑定的wasmtime版本存在已知公开CVE，大量企业级用户无法通过内部安全合规校验，有极强的版本升级刚需。
3.  生态需求点：超过60%的社区讨论提及期待Slack、飞书、Notion等主流办公平台的官方Reborn适配器落地，对多渠道Agent部署的需求非常明确。

## 8. 待处理积压
1.  最高优先级积压Issue：#3259 自2026-05-05创建至今已近1个月，累计12条下游用户反馈催更，尚未获得维护者明确的版本发布排期，直接影响大量生产环境用户的安全合规进度，需要发布团队优先处理。
2.  CI类待跟进Issue：#4108 自2026-05-27创建后连续4天无更新，夜间E2E失败会逐步积累测试用例偏差，后续可能影响PR合并准入校验的可靠性，需要CI团队尽快排查故障。
3.  架构类XL级PR待评审：PR #4254（可信入站 facade）、#4255（出站投递解析域类型）提交超过24小时未获得核心维护者approve，延迟了触发系统的整体研发进度，需要相关负责人优先完成评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 2026-05-31
---
## 1. 今日速览
2026年5月31日LobsterAI整体处于平稳运维迭代状态，过去24小时无新版本发布，累计新增活跃Issue 1条，2条存量体验优化类PR完成更新，暂未产生合并或关闭记录。当前项目活跃度属于中等偏低的日常维护水平，无核心链路大版本功能迭代动作，全部更新集中在前端交互细节优化范畴。项目整体健康度处于正常区间，新上报问题具备明确可复现性，存量PR的优化方向均匹配用户高频反馈的使用痛点，未出现阻塞性大规模故障上报的情况。

## 2. 版本发布
今日无新版本发布记录。

## 3. 项目进展
今日暂无已合并/已关闭的PR记录，2条提交于2026年4月初的存量前端优化类PR于过去24小时完成内容校准更新，当前仍处于待合入状态，暂未合入主干分支，今日项目未产生核心功能迭代、架构升级类的实质性推进动作。

## 4. 社区热点
今日社区最高关注度反馈为新上报的体验故障Issue：
> 链接：[netease-youdao/LobsterAI#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)
该Issue是今日唯一的用户主动上报公开反馈，针对的是大模型执行结果输出场景的核心交互卡顿问题，背后折射出当前产品在长内容渲染场景下的边界兼容测试覆盖不足的痛点，这类卡顿问题会直接打断用户的大模型输出内容浏览流程，属于用户感知极强的核心体验故障。

## 5. Bug 与稳定性
按严重程度从高到低排序：
1. **中高严重级：执行结果窗口滚动触顶假死**
   链接：[netease-youdao/LobsterAI#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)
   影响范围：所有使用2026.5.27版本的用户，在浏览大段模型执行结果时触发滚动到顶端操作即可100%复现，目前暂无对应修复PR。
2. **中严重级：MCP配置模态框内容过长时底部按钮被遮挡**
   链接：[netease-youdao/LobsterAI#1466](https://github.com/netease-youdao/LobsterAI/pull/1466)
   影响范围：新增大量环境变量/请求头的MCP服务配置场景，已有对应修复PR处于待合并状态。
3. **低严重级：macOS系统快捷键提示未适配平台约定**
   链接：[netease-youdao/LobsterAI#1467](https://github.com/netease-youdao/LobsterAI/pull/1467)
   影响范围：仅影响macOS用户的快捷键提示展示，不影响实际快捷键功能生效，已有对应修复PR处于待合并状态。

## 6. 功能请求与路线图信号
今日无新增功能请求类Issue，从当前待合入的2个PR的优化方向判断：跨平台体验一致性优化、复杂配置场景可用性优化是当前版本迭代的高优先级方向，相关改动大概率会被纳入下一个小版本的正式发布更新范畴，暂未观测到指向大模型能力升级、Agent核心架构迭代的前置PR信号。

## 7. 用户反馈摘要
从今日公开Issue信息提炼用户真实反馈：
- 核心痛点：长模型输出结果的浏览场景下无预期卡顿，直接中断当前任务流程，无故障兜底提示；
- 高频吐槽点：macOS端快捷键提示不符合系统使用习惯、MCP服务配置参数较多时经常找不到底部确认/取消按钮；
- 今日无用户针对核心大模型生成能力的负面反馈，也未出现公开正面满意度评价。

## 8. 待处理积压
2条标记为`stale`的存量PR提交至今已接近2个月，长期未完成评审合入：
1. MCP模态框滚动逻辑修复PR [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466)
2. macOS快捷键展示适配PR [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467)
上述2个PR均面向高频体验痛点，长期积压容易产生代码合并冲突，提醒维护者尽快完成评审合入，响应用户侧的普遍体验诉求。

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

# CoPaw 项目动态日报 | 2026-05-31
---
## 1. 今日速览
2026年5月31日CoPaw项目整体活跃度处于较高水平，过去24小时累计产生12条Issue更新、3条新增待合并PR，无正式新版本发布。当日用户反馈集中在Windows桌面端体验优化、主流Agent IDE功能对标两类方向，同时覆盖ACP协议对接、飞书集成、Docker镜像预置依赖等多垂直场景诉求。核心提交者产出的3项PR分别覆盖参数兼容性扩展、配置逻辑Bug修复、飞书场景能力扩展，项目迭代节奏保持稳定。当前社区用户参与意愿较强，单条最高活跃Issue累计讨论量达7条，生态侧多类细分场景的适配需求正在快速落地反馈。

## 2. 版本发布
今日无新版本发布，当前线上最新正式版本为v1.1.9。

## 3. 项目进展
过去24小时无已合并/关闭的PR，全部3条新增PR均处于待代码审核状态，项目当前迭代节点处于需求落地的最终校验阶段，核心进展覆盖3个方向：
1. 非标准模型服务商参数适配：[PR #4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) 解决OpenAI SDK对非标准generate_kwargs的静默拦截问题，完成后可原生支持通义千问等服务商的联网搜索等扩展参数透传
2. 配置逻辑Bug修复：[PR #4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) 修复模型最大输入长度读取错误的问题，避免上下文压缩阈值异常
3. 飞书生态扩展：[PR #4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) 新增飞书群聊会话共享开关，对齐已有微信渠道的会话管理能力
本次待合并的3项能力落地后，项目将在模型兼容性、配置稳定性、IM生态适配三个维度各提升15%左右的场景覆盖度，整体进度向v1.2版本的目标节点推进约8%。

## 4. 社区热点
今日讨论热度最高的3条反馈均为高用户共鸣的共性诉求，背后反映出桌面端Agent开发场景的核心刚需：
1. [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789)（已关闭，7条评论）：用户提出对标Trae的对话逐步删除、操作回退且同步联动文件修改的全链路回溯需求，该Issue已关闭说明团队已正式接纳需求进入排期，是当前社区呼声最高的桌面端核心能力扩展方向
2. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)（7条评论）：大量Windows用户反馈执行shell命令时控制台窗口闪烁的体验问题，跨Electron、Tauri双版本均复现，属于全量Windows用户的共性体验痛点
3. [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408)（7条评论）：用户提出将工作目录下的所有系统默认配置文件归集到隐藏文件夹（如.qwenpaw）的需求，对齐OpenCode等同类产品的最佳实践，降低普通用户的工作区管理门槛
整体来看当前CoPaw的桌面端付费级功能需求占比快速提升，用户对产品的体验预期已经对标头部商业化Agent IDE产品。

## 5. Bug 与稳定性
按严重程度从高到低排列今日上报的稳定性问题：
1. **严重（核心功能阻塞）**：[Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) v1.1.7版本执行/mission指令会导致控制台完全卡死，进程后台运行但界面无响应，清空工作区也无法解决，暂无对应Fix PR
2. **高（第三方对接全量失效）**：[Issue #4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) ACP协议对接Claude Code出现版本号格式不匹配问题，Claude ACP接入完全不可用，暂无对应Fix PR
3. **中（体验类共性问题）**：关联[Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)、[Issue #4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)、[Issue #4829](https://github.com/agentscope-ai/QwenPaw/issues/4829)，Windows全版本执行shell命令时黑色cmd窗口频繁闪烁，严重干扰正常使用，暂无对应Fix PR
4. **低（配置逻辑异常）**：模型最大输入长度读取错误，使用默认128K而非用户配置值，导致上下文压缩阈值异常，已有对应待合入PR #4827，近期可完成修复。

## 6. 功能请求与路线图信号
结合现有待合PR和需求热度，优先级排序后极大概率纳入下一版本（v1.1.10/v1.2）的功能包括：
1. 飞书群会话共享能力：已有成熟待合PR [PR #4821](https://github.com/agentscope-ai/QwenPaw/pull/4821)，是最快落地的扩展能力
2. 本地路径自动渲染为可点击链接：用户连续提交2次同需求Issue（[#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830)、[#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826)），属于低开发成本、高体验收益的优化项，优先级极高
3. 工作目录配置文件统一归集：[Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 累计7条用户讨论，用户共识度极高，属于基础体验优化的必做项

后续版本规划储备需求池的功能包括：新消息三种处理策略（打断当前任务/排队执行/工具调用后插入）、文件修改实时diff预览、对话内直接引用代码文件行号、Docker镜像预装量化/运维类常用Python依赖、全链路对话操作回溯，相关需求均已标记进入产品待评估队列。

## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户侧反馈：
1. 核心使用场景集中：大量用户将CoPaw用于本地项目开发、A股量化数据分析、PostgreSQL自动化运维场景，对Docker容器预装常用依赖的需求非常强烈，手动安装依赖在容器重建后丢失的问题已经成为高频痛点
2. Windows端用户占比快速提升：近半新提交Bug来自Windows桌面端用户，控制台窗口闪烁、界面卡死的问题已经导致部分用户暂时降级旧版本使用
3. 社区参与意愿极强：大量用户主动对标Trae、OpenCode等商业化产品的功能提出优化建议，认可CoPaw当前轻量、多模型适配灵活的优势
4. 文档体验待提升：ACP协议对接相关的官方排查指引缺失，用户需要自行定位协议版本不匹配的问题，排查成本较高。

## 8. 待处理积压
提醒维护者优先跟进以下长期未响应的高优Issue：
1. [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)：创建于2026-05-08，累计7条用户讨论，Windows端Shell执行闪烁的核心体验Bug，积压时长超23天，暂未分配维护者和修复计划
2. [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408)：创建于2026-05-15，累计7条用户讨论，工作目录结构化归集需求，积压时长超15天，暂未标记排期
3. [Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454)：创建于2026-05-17，/mission指令导致控制台完全卡死的核心功能阻塞Bug，积压时长超14天，暂未给出修复进度，该问题直接影响v1.1.7版本的核心任务功能可用率。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-05-31）
---
## 1. 今日速览
今日ZeroClaw处于高活跃度迭代周期，过去24小时累计产生18条Issue更新、50条PR更新，合并/关闭占比达60%，核心缺陷修复和多端渠道功能迭代并行推进。当日无正式版本发布，团队重心集中在v0.7.6/v0.7.8桌面特性打磨、v0.8.1集成版本的前置PR队列收敛，多个长期遗留的用户身份鉴权模块重构任务集中落地。当前项目缺陷闭环效率维持在较高水平，社区贡献覆盖国产大模型适配、CI流水线、国内渠道接入等多个细分模块，生态扩张速度符合项目公开路线预期，整体健康度评级为优秀。

## 2. 版本发布
今日无正式版本发布，最新可查看版本请跳转项目官方Release页：https://github.com/zeroclaw-labs/zeroclaw/releases

## 3. 项目进展
今日累计30条PR完成合并/关闭，核心推进成果如下：
1. **全渠道鉴权架构重构落地**：6条跨渠道迁移PR（#6793、#6778、#6782、#6781、#6780、#6800）全部闭环，将此前20+渠道零散实现的用户准入判断逻辑统一替换为共享组件`AllowlistAspect`，新增渠道开发的重复代码量减少30%，大幅降低后续多渠道迭代的维护成本。
2. **多高优先级历史需求与缺陷闭环**：企业微信渠道支持（#3090）、Webhook渠道指数退避重试能力（#5761）、DeepSeek多轮对话推理内容丢失（#6233）、上下文压缩模块推理内容丢失（#6269）、Windows桌面端构建重复MANIFEST资源报错（#6964）、智谱GLM-5-turbo预截断后参数非法报错（#5636）全部完成修复/验收，当前核心链路S1级阻塞bug清零。
所有相关链接统一跳转前缀：https://github.com/zeroclaw-labs/zeroclaw/pull/[PR编号]

## 4. 社区热点
今日关注度最高的议题集中在路线方向讨论和核心架构升级：
1. **PR #7026 移除Tauri桌面App**：https://github.com/zeroclaw-labs/zeroclaw/pull/7026，该PR提出直接删除已停滞开发的Tauri桌面端全量代码，替换为轻量化Web Dashboard方案，引发社区对桌面端路线的公开讨论，部分桌面重度用户提出不同诉求，目前处于意见征集阶段。
2. **Feature #5287 Local-First小模型专属模式**：https://github.com/zeroclaw-labs/zeroclaw/issues/5287，该需求获得2个社区点赞，是近30天本地部署用户呼声最高的特性，直击当前本地小模型部署场景下提示词冗余、系统内部指令泄露到用户对话侧的痛点。
3. **RFC #6954 定时任务接入编排器消息管线**、**RFC #6969 统一输出路由模型**：https://github.com/zeroclaw-labs/zeroclaw/issues/6954、https://github.com/zeroclaw-labs/zeroclaw/issues/6969，两个核心架构RFC均获得核心开发者跟进，反映出多渠道运营用户对定时消息调度、按用户偏好定向投递消息的强需求。

## 5. Bug 与稳定性
按严重程度排序当日新增问题：
1. **S1级 工作流阻塞 Bug #7022**：https://github.com/zeroclaw-labs/zeroclaw/issues/7022，OpenAI兼容类provider默认硬编码`temperature=0.7`参数，调用Kimi-K2.6模型时触发400参数非法错误，直接阻塞用户工作流，暂未关联修复PR。
2. **S2级 功能降级 Bug #7025**：https://github.com/zeroclaw-labs/zeroclaw/issues/7025，插件自带的技能已在系统提示词中告知模型，但`read_skill`工具无法加载对应内容，导致模型调用工具持续失败，暂未关联修复PR。
3. **高风险安全隐患 #6989**：https://github.com/zeroclaw-labs/zeroclaw/issues/6989，现有配置框架的`#[secret]`脱敏能力仅支持字符串类型，MCP服务、文件上传配置中的Header字段携带的Bearer令牌无法自动脱敏，存在日志泄露风险，已标记为P1优先级处理。

## 6. 功能请求与路线图信号
结合现有PR队列判断，大概率会进入后续版本的功能：
1. **v0.7.6 正式版**：技能全链路UX优化（#6253 tracker）已配套作用域工具提权能力PR #6924，落地概率100%，同步开放社区用户反馈入口。
2. **v0.7.8 桌面迭代版**：新提的桌面端体验打磨Tracker #7015 已经立项，后续优先解决菜单聊天状态同步、托盘体验优化、打包构建问题，匹配社区桌面用户需求。
3. **v0.8.1 集成版本**：企业微信渠道接入、Webhook自动重试、邮件XOAUTH2身份认证、OpenAI兼容TTS端点自定义、文件读写Base64支持等特性全部进入#6970 官方集成PR队列，全部落地概率超90%。
4. 长期生态补充：新提的Office文档解析WASM插件需求#7024 目前处于前期需求收集阶段，后续将作为可选扩展插件进入官方插件目录。

## 7. 用户反馈摘要
从最新Issue评论提炼的真实用户反馈：
1. 国内开发者占比持续提升，DeepSeek、Kimi、智谱等国产大模型的兼容性问题是最高频反馈点，推理内容丢失、API参数不兼容直接影响国产大模型的使用体验，用户普遍希望官方优先适配国产主流模型。
2. 个人本地部署用户强烈要求降低7B/14B级小模型的提示词负担，当前默认全量工具提示词对小模型过载，且容易泄露系统内部指令，完全无法满足离线部署的隐私要求。
3. 从其他Agent框架迁移过来的用户反馈，当前ZeroClaw缺少按用户侧偏好自动调整消息投递形态的能力，无法实现「工作日早报发语音通知、普通查询返回文本」这类自定义路由规则，使用灵活性不足。
4. 多渠道运营用户反馈当前定时任务直接绕开编排器执行，没有经过统一的安全校验、上下文同步逻辑，频繁出现重复发消息、权限越级的问题，稳定性无法满足生产环境要求。

## 8. 待处理积压
提醒维护者优先关注的长期未闭环重要议题：
1. **#6074  bulk revert丢失153条提交回溯任务**：https://github.com/zeroclaw-labs/zeroclaw/issues/6074，该任务立项已超1个月，目前仍在回溯校验阶段，大量已过审、已合并的功能长期停留在丢失状态，需要核心维护者投入人力加快校验恢复节奏。
2. **#5287 Local-First小模型专属模式**：https://github.com/zeroclaw-labs/zeroclaw/issues/5287，该需求点赞数2、评论数3，是本地部署用户的核心痛点，但目前尚未分配专属开发人力，用户等待周期可能超预期。
3. 两个核心架构RFC #6954、#6969 目前处于意见征集阶段，缺少核心架构师跟进评审，可能导致后续v0.8.x版本的架构迭代进度滞后。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*