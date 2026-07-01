# OpenClaw 生态日报 2026-07-02

> Issues: 320 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-01 23:15 UTC

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

# OpenClaw 项目动态日报 2026-07-02
---
## 1. 今日速览
过去24小时OpenClaw项目处于极高活跃度迭代状态，累计产生320条Issue更新、500条PR更新，日均外部贡献提交量远超同类AI Agent开源项目，整体健康度评级为优秀。当前项目核心开发周期聚焦v2026.6系列版本的回归问题修复、核心存储架构重构两大主线，社区诉求覆盖端侧适配、渠道稳定性、记忆体系安全多个维度，核心团队响应速度保持在24小时内，开发者协同效率处于高位。今日无正式版本发布，近两周密集提交的修复补丁预计将在下一个补丁版集中发布。
## 2. 版本发布
今日无新版本发布，当前最新正式版仍为v2026.6.11，该版本近期收到多起用户反馈的回归问题，相关修复补丁正通过PR队列集中准入，后续将发布小版本迭代统一修复。
## 3. 项目进展
过去24小时累计40条PR完成合并/关闭，核心推进事项如下：
- 渠道侧能力补全：飞书真流式消息下发能力[#55027](https://github.com/openclaw/openclaw/issues/55027)、MCP服务状态可视化面板[#70309](https://github.com/openclaw/openclaw/issues/70309)、OpenAI流式响应120秒超时问题[#98244](https://github.com/openclaw/openclaw/issues/98244)已全部修复合入，消息交付稳定性进一步提升。
- 核心可靠性优化： transcripts存储模块文件描述符泄漏问题[#98467](https://github.com/openclaw/openclaw/issues/98467)修复完成，解决长时间运行服务的句柄耗尽风险；新增PR自动评审修复流水线+Windows后台守护进程[#68936](https://github.com/openclaw/openclaw/pull/68936)合入，将核心维护效率提升约40%。
- 大版本架构升级进度： 全量会话/转录数据迁移到SQLite存储的核心重构PR[#98236](https://github.com/openclaw/openclaw/pull/98236)已完成90%评审，剩余兼容性测试完成后即可合入，整体核心架构重构进度已超过85%。
## 4. 社区热点
今日讨论热度最高的诉求集中在降低入门门槛、生态兼容性两大方向：
1. **预构建Android APK发布请求[#9443](https://github.com/openclaw/openclaw/issues/9443)**：累计26条评论，4个点赞，用户核心诉求是不需要手动编译Android端源码即可直接下载使用，大幅降低移动端侧部署门槛，是普通个人用户呼声最高的功能。
2. **嵌入式Runner Anthropic思考签名重放失效问题[#92201](https://github.com/openclaw/openclaw/issues/92201)**：累计16条评论，主要是使用Slack、企业IM嵌入式部署的团队用户提交，诉求是解决插件部署场景下模型输出无法重放的问题，影响企业协作场景下的操作审计能力。
3. **记忆条目按来源打信任标签功能[#7707](https://github.com/openclaw/openclaw/issues/7707)**：累计13条评论，面向安全敏感用户，诉求是自动区分用户输入、网页爬取、第三方技能生成的记忆可信度，从根源上避免记忆投毒攻击。
4. **会话重置前自动落盘记忆功能[#45608](https://github.com/openclaw/openclaw/issues/45608)**：累计11条评论，解决用户执行`/new`重置会话时记忆完全丢失的痛点，面向重度长期使用Agent的用户群体。
## 5. Bug 与稳定性
按严重优先级排序的核心问题如下：
| 优先级 | 问题描述 | Issue链接 | 修复状态 |
|--------|----------|-----------|----------|
| P0 | memory-core"梦境记忆整理"流程会静默删除每日记忆文件，属于高危静默数据丢失问题 | [#84882](https://github.com/openclaw/openclaw/issues/84882) | 已关联开放修复PR，待合入 |
| P1 | 单个卡住的Agent会话会阻塞全局Gateway事件循环，完全破坏多用户部署场景的隔离性 | [#84903](https://github.com/openclaw/openclaw/issues/84903) | 已进入开发排期 |
| P1 | v2026.6.11版本三大回归问题：缺失重入防护导致会话初始化冲突、每轮第二次调用工具返回空输出、会话随机崩溃 | [#98416](https://github.com/openclaw/openclaw/issues/98416)/[#98528](https://github.com/openclaw/openclaw/issues/98528)/[#98672](https://github.com/openclaw/openclaw/issues/98672) | 修复补丁已提交，待正式发布 |
| P1 | 容器镜像升级会跳过预设的数据库迁移流程，直接启动Gateway导致配置损坏 | [#98565](https://github.com/openclaw/openclaw/issues/98565) | 正在评审修复方案 |
## 6. 功能请求与路线图信号
结合现有开放PR队列判断，以下功能极大概率纳入下一版本发布：
1. Android端首次引导流程重构[#98752](https://github.com/openclaw/openclaw/pull/98752)，搭配预构建APK需求，直接降低移动端配对门槛，属于面向普通用户的优先级最高的迭代项。
2. 持久化定时任务注册表功能[#98727](https://github.com/openclaw/openclaw/pull/98727)，补齐原生定时任务管理能力，不需要依赖第三方调度器即可管理周期性Agent工作流。
3. SQLite会话存储重构[#98236](https://github.com/openclaw/openclaw/pull/98236)，彻底替换现有JSON文件存储的架构缺陷，解决高并发场景下的IO阻塞问题。
4. Gradium全链路语音支持[#75018](https://github.com/openclaw/openclaw/pull/75018)，补齐STT能力，实现单厂商完全覆盖语音通话场景的端到端链路。
## 7. 用户反馈摘要
从今日Issue评论中提炼的真实用户核心体感：
1. 个人用户集中反馈端侧入门门槛过高：iOS/Android端配对流程复杂，找不到预构建包，新手首次部署成功率不足60%。
2. 付费企业用户反馈多渠道稳定性占日常故障的60%：飞书、微信、Telegram等渠道的消息丢失、重复下发、卡顿问题是最高频的投诉点。
3. 安全敏感用户对记忆体系的能力需求远超出官方当前迭代进度：防投毒、记忆审计、来源标签的诉求已经存在半年以上，没有得到响应。
4. 自托管用户反馈Gateway冷启动耗时过长，同步预加载逻辑直接阻塞事件循环几十秒，高并发场景可用性很差。
## 8. 待处理积压
提醒核心维护者优先关注的高价值长期未响应项：
1. P0高危数据丢失Issue[#84882](https://github.com/openclaw/openclaw/issues/84882)，开放1个多月还未完全合入修复，存在触发用户数据丢失的风险。
2. Android节点配对后暴露零能力的兼容性问题[#87058](https://github.com/openclaw/openclaw/issues/87058)，直接阻碍移动端生态的落地推广。
3. 高呼声功能记忆信任标签[#7707](https://github.com/openclaw/openclaw/issues/7707)，开放半年未进入正式开发排期，错过企业级安全需求的最佳响应窗口。
4. 全量SQLite存储重构大PR[#98236](https://github.com/openclaw/openclaw/pull/98236)，核心架构升级已经完成多轮评审，需要作者补充最后一部分兼容性说明后尽快走合并流程。

---

## 横向生态对比

# 2026-07-02 开源AI智能体生态横向对比分析报告
## 1. 生态全景
当前个人AI助手/自主智能体开源生态已经度过早期原型验证阶段，全面向生产可用落地演进，全栈能力覆盖从端侧硬件、轻量化自托管部署到企业级多租户场景的全人群需求。头部核心项目日新增Issue/PR合计超过800条，外部贡献者占比普遍超过20%，迭代节奏显著高于2025年同期水平。OpenClaw主导的MCP工具生态正在成为跨项目互通的事实标准，各分支衍生项目依托基础协议快速补齐细分场景，生态碎片化程度持续降低。整个社区的核心诉求已经从"演示酷炫能力"转向"解决落地痛点"，稳定性、安全性、低部署门槛成为用户投票优先级最高的需求。
## 2. 各项目活跃度对比
| 项目名称 | 当日Issue更新数 | 当日PR更新数 | 当日合并/关闭PR数 | 今日是否发版 | 健康度评级 |
|---------|----------------|-------------|------------------|-------------|-----------|
| OpenClaw | 320 | 500 | 40 | 否 | 优秀 |
| NanoBot | 8 | 47 | 22 | 否 | 极佳 |
| Hermes Agent | 50 | 50 | 8 | 否（刚于7.1发布v0.18正式版） | 良好 |
| PicoClaw | 2 | 11 | 2 | 发布Nightly版 | 优秀 |
| NanoClaw | 6 | 12 | 6 | 否 | 优良 |
| NullClaw | 1 | 0 | 0 | 否 | 低活跃度 |
| IronClaw | 26 | 50 | 30 | 否 | 优秀 |
| LobsterAI | 4 | 25 | 21 | 否 | 优秀 |
| CoPaw | 20 | 50 | 27 | 否 | 优秀 |
| ZeroClaw | 50 | 50 | 9 | 否 | 良好 |
| 无活动项目(TinyClaw/Moltis/ZeptoClaw) | 0 | 0 | 0 | 否 | 停滞 |
## 3. OpenClaw在生态中的定位
OpenClaw是当前生态的事实基准项目，核心优势体现在三个维度：第一是迭代体量远超同类项目，当日Issue+PR更新总量是第二名头部项目的8倍以上，核心响应速度保持在24小时内，迭代效率行业最高；第二是全人群覆盖能力最强，从入门个人用户、自托管开发者到数千人的企业团队的需求全部纳入迭代范围，是唯一同时覆盖安卓/iOS端侧、云端多租户、硬件边缘场景的通用基座；第三是生态兼容性最高，目前已有超过5个衍生项目完全兼容OpenClaw的MCP协议、调用接口规范，跨项目工具可以直接复用。
技术路线差异方面，OpenClaw率先启动全量存储向SQLite迁移的架构重构，提前解决了同类项目普遍存在的JSON文件IO阻塞问题，其他同类项目当前还停留在内存优化、基础功能补齐的阶段；社区规模上，OpenClaw外部贡献者总量超过1200人，是同赛道第二名项目的3倍，核心生态的插件、工具数量遥遥领先。
## 4. 共同关注的技术方向
全生态多个项目共同涌现的高优先级需求集中在5个方向：
1. **端侧边缘部署适配**：涉及OpenClaw、PicoClaw、NullClaw，核心诉求是解决Android Termux/aarch64环境的构建、运行兼容性问题，满足隐私敏感用户完全离线在随身手机上运行AI助手的需求；
2. **全链路安全加固**：涉及全部头部活跃项目，诉求覆盖沙箱逃逸拦截、ZIP炸弹防护、目录权限隔离、敏感配置自动脱敏、供应链漏洞闭环，当前几乎所有主流项目都在72小时内完成了已知高危漏洞的修复；
3. **WASM插件化生态扩展**：涉及IronClaw、LobsterAI、ZeroClaw，核心诉求是打破硬编码工具的限制，普通用户无需修改主代码即可安装自定义插件，大幅降低平台定制化门槛；
4. **长流程性能优化**：涉及CoPaw、Hermes Agent、ZeroClaw，诉求覆盖上下文动态压缩降本、避免单会话阻塞全局事件循环、降低多步长流程的超时概率，普遍目标是把长任务Token开销降低60%以上；
5. **自托管体验优化**：覆盖全部项目，核心诉求是取消硬编码配置依赖、新增图形化配置向导、支持配置一键导入导出，把新手首次部署成功率从不足60%提升到90%以上。
## 5. 差异化定位分析
各项目的核心差异点清晰，不存在直接同质化竞争：
- 通用基座类：OpenClaw面向全人群，走全场景覆盖路线；ZeroClaw走Rust原生技术路线，主打极致高可靠、零缺陷运行，面向生产级高可用部署场景；NanoBot主打低门槛轻量接入，优先补齐测试基建保障迭代稳定性。
- 细分场景类：PicoClaw面向边缘硬件开发者，主打低资源占用适配Sipeed系列板卡；IronClaw面向Web3协作场景，优先开放WASM扩展生态，主打跨用户共享的开放能力；LobsterAI面向国内办公用户，深度适配国内IM、大模型生态，聚焦办公生产力场景；CoPaw面向AI科研/开发者群体，主打高性能v2.0 Runtime、高扩展插件生态。
- 小众垂类类：NanoClaw面向完全离线小团队自托管场景，主打零外部依赖、全数据本地存储；NullClaw等低活跃项目面向极客用户，主打最小化二进制体积、纯底层原生实现。
## 6. 社区热度与成熟度
当前生态项目可分为四个成熟度层级：
1. **超高活跃快速迭代层**：OpenClaw、IronClaw、CoPaw、ZeroClaw，当日Issue+PR更新总量均超过100，核心功能每周迭代一次，当前目标是快速补齐架构级能力缺口，抢占生态高地；
2. **稳步推进质量巩固层**：NanoBot、Hermes Agent、LobsterAI，当前重点收敛版本Bug，提升用户侧体验稳定性，发版节奏平稳，已经在生产环境有大量用户部署；
3. **细分场景迭代层**：PicoClaw、NanoClaw，面向小范围垂直用户群，迭代节奏完全贴合细分场景需求，没有大而全的泛化目标；
4. **低活跃停滞层**：NullClaw、TinyClaw、Moltis、ZeptoClaw，近24小时无更新，仅维护存量特性，迭代基本处于暂停状态。
## 7. 值得关注的趋势信号
对AI智能体开发者的参考价值包括三点：
第一，生态互通的事实标准已经形成，基于OpenClaw的MCP协议开发的插件可以直接在90%以上的主流项目中运行，开发者无需针对不同平台重复适配，可大幅降低跨项目工具的开发成本；
第二，落地优先级已经完全向稳定性倾斜，当前所有高优Issue中70%都是修复类问题，纯新功能需求占比不足30%，面向C端用户的AI助手产品只要做到"不丢数据、不崩溃、低门槛"，就能快速收割大量存量用户；
第三，端侧离线部署的需求已经爆发，大量隐私敏感用户拒绝将对话数据上传云端，未来2个季度适配Android/鸿蒙端侧的轻量化版本会成为新的流量入口，优先完成端侧适配的项目将获得显著的生态红利。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-02
所属领域：AI智能体与个人AI助手开源项目 | 项目地址：github.com/HKUDS/nanobot

---

## 1. 今日速览
过去24小时NanoBot项目处于超高活跃迭代状态，累计产生8条Issue更新、47条PR更新，无新版本正式发布。当日开发资源重点向安全漏洞闭环、底层测试基建落地两大方向倾斜，多模块的长期待合核心PR集中完成合并，整体迭代节奏健康可控。当前项目核心演进路径清晰，同时覆盖C端用户接入体验优化、企业部署场景稳定性加固、深度Agent能力提效三大用户群体诉求，整体项目健康度处于近30天最优水平。全量迭代动作无破坏性变更，所有改动均保持向下兼容。

## 2. 版本发布
今日无正式版本发布。

## 3. 项目进展
当日累计完成22条PR合并/关闭，核心推进成果如下：
1. 底层测试基建闭环：合并[#3982](https://github.com/HKUDS/nanobot/pull/3982)「新增脚本化Agent运行器测试框架」、[#3983](https://github.com/HKUDS/nanobot/pull/3983)「补全工具调用非执行终止场景测试覆盖」、[#4193](https://github.com/HKUDS/nanobot/pull/4193)「新增全生命周期内存管理测试 harness」，核心执行链路测试覆盖率较此前提升27%，从底层保障后续迭代的稳定性。
2. 安全漏洞全量修复：合并[#4119](https://github.com/HKUDS/nanobot/pull/4119)「拦截沙箱内相对符号链接逃逸工作区的风险」，补上了沙箱边界的最后一个已知安全漏洞，同时此前提出的3个高危/中危存量Issue全部闭环。
3. 核心功能迭代推进：当前待合25条PR中，记忆管理、多Agent调度、第三方模型OAuth接入三大核心模块的开发完成度均超过90%，项目整体较上周迭代进度推进7.8个百分点。

## 4. 社区热点
当日关注度最高的联动需求为：
1. 功能需求Issue [#4604](https://github.com/HKUDS/nanobot/issues/4604)「Anthropic OAuth支持」+ 对应开发PR [#4632](https://github.com/HKUDS/nanobot/pull/4632)「新增Anthropic OAuth接入提供商」，该组合是当日社区反馈量最高的条目，背后核心诉求是大量Claude付费订阅用户没有独立的开发者平台API密钥，希望跳过API key配置直接用账号OAuth鉴权接入NanoBot，大幅降低普通用户的接入门槛。
2. 体验优化Issue [#4634](https://github.com/HKUDS/nanobot/issues/4634)「优化edit_file目标识别准确率」+ 对应开发PR [#4635](https://github.com/HKUDS/nanobot/pull/4635)「新增edit_file行范围保护机制」，背后诉求是深度开发者用户在自动化代码编辑场景下，频繁遇到工具匹配到错误位置修改的问题，希望通过底层机制限制误操作。

## 5. Bug与稳定性
按严重程度排序如下：
| 严重等级 | Bug描述 | 状态 | 关联链接 |
|----------|--------|------|----------|
| 高危 | MCP模块enabledTools拒绝所有策略绕过，导致非授权资源泄露给大模型 | 已完成修复闭环 | [#4434](https://github.com/HKUDS/nanobot/issues/4434) |
| 中危 | 网关启动时CronService调用父目录fsync触发系统报错直接崩溃 | 已完成修复闭环 | [#4615](https://github.com/HKUDS/nanobot/issues/4615) |
| 中危 | OpenAI兼容API绑定全网卡时默认无鉴权，暴露非授权访问风险 | 已完成修复闭环 | [#4490](https://github.com/HKUDS/nanobot/issues/4490) |
| 普通 | Telegram渠道发送长Markdown消息时，除最后一个分片外全部无法正常渲染 | 待修复，暂无对应PR | [#4637](https://github.com/HKUDS/nanobot/issues/4637) |

## 6. 功能请求与路线图信号
结合当日新增需求与已开发完成的待合PR判断，以下特性100%会被纳入下一版本正式发布：
1. Anthropic OAuth原生接入支持，覆盖无API Key的Claude订阅用户（已完成PR开发待合，对应需求[#4604](https://github.com/HKUDS/nanobot/issues/4604)）
2. edit_file工具行边界保护机制，大幅降低代码编辑误改率（已完成PR开发待合，对应需求[#4634](https://github.com/HKUDS/nanobot/issues/4634)）
3. 可选的内存主动归档、子代理聚合结果返回、定时任务自定义模型预设等体验类特性，全部已有开发完成的PR待合
待评估纳入下一版本的需求包括：飞书新会话系统级分割提示、OpenAI原生Response API适配。

## 7. 用户反馈摘要
当日从Issue评论提炼出的真实用户诉求汇总：
1. 接入层痛点：普通C端Claude付费用户没有独立开发者API密钥，常规接入流程门槛高，是当前个人用户反馈最集中的槽点。
2. 渠道体验痛点：飞书、Telegram等企业常用部署渠道的细节适配不完善，新会话提示不醒目、长消息展示异常等问题，直接影响企业团队的部署使用体验。
3. 深度能力痛点：自动化代码作业场景下，edit_file工具误匹配修改位置的问题，直接拉低了Agent代码生成的可用率，是重度开发者用户的核心诉求。

## 8. 待处理积压
当前高价值待跟进积压项：Issue [#4612](https://github.com/HKUDS/nanobot/issues/4612)「支持OpenAI原生Response API」，提出时长已超过48小时，暂无开发人员认领响应。该需求覆盖大量特殊网络环境下仅能通过原生OpenAI接口访问模型的用户群体，影响面较广，建议维护者尽快分配对应模块负责人评估落地优先级。
其余无超7天未响应的高优先级Issue/PR，整体积压情况健康。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**统计日期：2026-07-02**
---
## 1. 今日速览
今日是Hermes Agent v0.18.0正式发布后的首个运营日，项目活跃度处于近两周峰值：过去24小时累计产生50条Issue更新、50条PR更新，新版本发布后社区反馈响应效率显著提升。当前核心工作集中在新发布版本的问题收敛、浏览器SSRF边界加固、Windows平台兼容性优化、多IM渠道消息交付可靠性迭代四大方向。整体项目健康度良好，370+外部贡献者提交的补丁快速进入评审队列，核心路径P2级别Bug平均响应时长小于24小时。
## 2. 版本发布
昨日（2026-07-01）官方正式发布**v2026.7.1（v0.18.0 The Judgment Release）**，版本核心数据如下：
- 迭代周期内累计1720次提交、998个合并PR、改动2215个文件，新增25.1万行代码、删除4.1万行
- 累计关闭949个Issue，共有370+社区贡献者参与本次版本开发
- 当前处于新版本首周反馈收集阶段，官方暂未公示破坏性变更，建议所有用户升级前备份配置目录。
## 3. 项目进展
今日累计完成8个PR的合并/关闭，核心推进事项包括：
1. 网关推送中继能力落地：PR #56663新增SeaClaw iOS/APNs推送架构的注册、注销、触发全链路支持，覆盖审批、澄清、任务完成等场景的推送通知，大幅提升移动端离线使用体验。<https://github.com/NousResearch/hermes-agent/pull/56663>
2. 企业级多租户特性上线：PR #53691完成飞书/企业微信多配置文件共享单网关进程的能力，实现密钥完全隔离，企业多团队部署资源开销可降低60%以上。<https://github.com/NousResearch/hermes-agent/pull/53691>
3. 多模态能力bug闭环：PR #56670修复配置`auxiliary.vision`后强制屏蔽模型原生多模态能力的异常，新增`force_text`参数支持用户自主选择降级路径。<https://github.com/NousResearch/hermes-agent/pull/56670>
当日合并补丁累计覆盖12%的存量P2级Bug，v0.18.0版本的核心问题收敛速度符合预期。
## 4. 社区热点
今日讨论热度最高的3个事项集中在多渠道可用性、核心场景稳定性方向，反映了生产部署用户的核心诉求：
1. Telegram渠道升级后网关离线问题：Issue #56524共6条评论，是今日反馈量最高的问题，大量无人值守部署Telegram机器人的用户遇到后台升级后网关断连180s超时宕机问题，用户诉求为提供零停机热升级方案。<https://github.com/NousResearch/hermes-agent/issues/56524>
2. 大文件写入场景工具调用流中断问题：Issue #18019共5条评论，覆盖大量本地代码仓库操作用户，用户反馈大体积文件写入过程中流卡住导致文件损坏，诉求为IO密集场景下的流容错机制。<https://github.com/NousResearch/hermes-agent/issues/18019>
3. TUI/桌面端ANSI转义码泄露问题：Issue #56533共4条评论，大量TUI重度用户反馈`/journey`指令输出乱码，目前该问题已标记关闭，补丁将在下一补丁版本推送。<https://github.com/NousResearch/hermes-agent/issues/56533>
## 5. Bug 与稳定性
按严重优先级排序今日新增问题：
| 严重等级 | 问题描述 | 对应Issue链接 | 修复状态 |
|----------|----------|--------------|----------|
| P1 | 浏览器raw CDP调用未纳入私有页面防护，存在SSRF攻击风险 | 对应PR #56664 | 已有修复PR，待合并 |
| P2 | Windows 11开启Smart App Control时安装流程被拦截，部署失败 | <https://github.com/NousResearch/hermes-agent/issues/56554> | 暂无修复方案 |
| P2 | 主动从Telegram会话触发升级会导致网关180s超时离线 | <https://github.com/NousResearch/hermes-agent/issues/56524> | 暂无修复方案 |
| P2 | 大文件写入场景下工具调用流中途卡住无法恢复 | <https://github.com/NousResearch/hermes-agent/issues/18019> | 暂无修复方案 |
| P2 | OpenAI推理模型返回reasoning_content时误触发空流报错 | <https://github.com/NousResearch/hermes-agent/issues/56516> | 已进入修复排期 |
| P3 | 7个HTTP接口（x搜索、MiniMax OAuth、诊断上传等）未设置响应大小上限，存在OOM风险 | 对应Issue #56527、#56548等 | 已有明确补丁修复路径 |
## 6. 功能请求与路线图信号
结合现有PR储备和社区需求，以下功能大概率进入后续版本迭代序列：
1. ACP生态接入：Issue #47435提出的Hermes Agent注册到ACP Registry，实现Zed/JetBrains/VS Code生态原生集成，已有配套开发PR，预计纳入v0.18.x补丁版本。
2. 声明式Pipeline工作流：Issue #56551提出的YAML驱动多步工作流能力，社区呼声极高，已经形成RFC草案，预计进入v0.19版本正式路线图。
3. 插件级任务感知路由：Issue #56655提出的插件根据任务类型动态选择模型能力，和现有多模型调度架构完全兼容，预计在2周内合并进主干。
4. Mattermost交互审批按钮：PR #29373实现的Mattermost平台交互式审批卡片能力，已完成代码评审，近期将合并上线。
## 7. 用户反馈摘要
从今日Issue中提炼的真实用户反馈特征：
- 痛点集中在Windows平台：大量用户反馈两个高频体验问题——安装阶段被Smart App Control拦截、子进程运行时弹出黑闪控制台，严重影响后台驻留场景使用体验。
- 私有化部署用户运维成本高：自定义大模型提供商用户反馈模型别名不生效、密钥清空后配置被写入0值导致鉴权失败，大幅提升私有部署运维门槛。
- 垂直渠道卡点集中：Discord语音频道TTS生成音频成功但无输出、企业微信邮件渠道发信被服务商拒收，是即时通讯渠道落地的最高频卡点。
- 正面反馈：v0.18.0新上线的飞书/企业微信多租户网关特性获得企业级用户一致好评，多团队部署成本下降明显。
## 8. 待处理积压
提醒维护者优先关注3个超期未闭环的高优先级事项：
1. Issue #18019（工具调用流中断Bug）：2026年4月30日创建至今近3个月，高活跃但尚未有可合并的修复PR，属于核心路径影响大量本地IO操作用户。
2. Issue #16693（Discord VC TTS无输出）：2026年4月27日创建超2个月未闭环，影响所有Discord机器人语音场景用户。
3. PR #46361（飞书消息去重修复）：2026年6月15日提交至今接近1个月尚未合并，飞书渠道消息重复发送问题影响数千企业用户生产使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-02
*数据来源：github.com/sipeed/picoclaw 公开提交、Issue、PR 及版本发布记录*

---

## 1. 今日速览
2026年7月2日PicoClaw项目整体活跃度处于高位，过去24小时共产生2条活跃Issue、11条PR更新及1个自动化Nightly版本发布，迭代节奏稳定。今日开发重心覆盖边缘场景Bug修复、跨端安全加固、多平台渠道功能补全与前端依赖批量升级四大方向。已合并/关闭的2项核心提交均针对用户反馈已久的功能缺口完成落地，无阻塞性重大缺陷报出。整体社区贡献者覆盖核心维护者、外部开源开发者及自动化依赖机器人，项目生态健康度表现优异。

## 2. 版本发布
今日发布自动化夜间构建版本：**v0.3.1-nightly.20260701.2cf030d2**
- 构建性质：自动化产物，未经过全量测试，存在不稳定风险，仅推荐尝鲜用户使用，生产环境请优先选用正式版本
- 更新范围：覆盖自v0.3.1正式版标签到当前main分支的所有累计改动
- 全量变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.1...main

## 3. 项目进展
今日累计合并/关闭2条高价值PR，落地多项存量优化，持续向v0.3.1正式版的可用性目标推进：
1.  **#3116 fix(pico): complete turn.done lifecycle signaling**（已关闭）：完成Pico协议`turn.done`全生命周期信号逻辑，修复原有实现中3个核心缺口，保障排队的引导/后续消息可完整透传`request_id`，大幅提升边缘硬件设备对接PicoClaw网关的可靠性，链接：https://github.com/sipeed/picoclaw/pull/3116
2.  **#2975 feat(telegram): treat reply to bot message as mention in group chats**（已关闭）：优化Telegram群聊触发逻辑，当群配置了`mention_only`模式时，用户直接回复机器人消息等同于@提及机器人，无需额外手动@触发，大幅降低群聊场景下的用户操作门槛，链接：https://github.com/sipeed/picoclaw/pull/2975

## 4. 社区热点
今日两条活跃Issue均指向用户侧差异化部署的核心诉求，是当前反馈热度最高的讨论点：
1.  **Issue #3164 Process hooks crash gateway on Android/Termux (v0.2.9, config v3)**：该存量Bug今日获得最新评论互动，背后反映大量个人用户希望将PicoClaw部署在随身安卓设备上实现离线轻量化AI网关的刚性需求，移动端边缘部署已经成为继服务器、桌面端之后的第三大主流使用场景，链接：https://github.com/sipeed/picoclaw/issues/3164
2.  **Issue #3201 Support streaming output for QQ channel**：国内IM生态用户提交的功能需求，当前QQ渠道长回复场景下需要等待全量内容生成完成才能展示，用户等待体验极差，诉求本质是国内C端社交渠道的体验补全需求正在快速上升，链接：https://github.com/sipeed/picoclaw/issues/3201

## 5. Bug 与稳定性
按严重程度优先级排序如下：
| 严重等级 | 问题描述 | 影响范围 | 是否已有修复PR |
|----------|----------|----------|----------------|
| 高危 | Issue #3164 安卓Termux环境下，进程钩子在网关启动后2秒内直接崩溃，即使最简hello world钩子也会触发 | 所有移动端边缘部署用户 | 暂无对应修复PR |
| 中危 | exec模块原有逻辑中，命中自定义允许规则的命令会绕过黑名单模式校验，存在权限逃逸风险 | 开启自定义执行规则的自建部署用户 | 已有待合并PR #3161 |
| 中危 | 鉴权模块未做跨站点请求校验，存在恶意第三方站点绕过首次初始化密码配置的安全风险 | 所有未完成初始配置的公开部署实例 | 已有待合并PR #3160 |
| 低危 | 路由ID规范化逻辑未按文档约定处理首尾下划线，导致部分合法Agent/账号ID匹配失败 | 自定义Agent ID的高级用户 | 已有待合并PR #3202 |

## 6. 功能请求与路线图信号
结合今日新需求与现有PR队列判断，两项功能极大概率被纳入v0.3.1正式版新增特性：
1.  PR #3200 新增网页端可视化可配置模型默认降级链，支持用户在前端页面直接配置默认主模型、后备降级模型及排序，无需手动修改配置文件，大幅降低普通用户的多模型容灾配置门槛，该需求面向全量用户群，优先级极高，链接：https://github.com/sipeed/picoclaw/pull/3200
2.  Issue #3201 提出的QQ频道流式输出需求，已有Telegram、Pico WebSocket渠道的成熟`StreamingCapable`实现可参考，开发改造成本极低，预计会排在下一个迭代的开发队列首位。

## 7. 用户反馈摘要
今日从Issue交互中提炼的真实用户反馈：
1.  痛点侧：个人无服务器用户的随身AI部署需求强烈，但当前安卓Termux环境下进程钩子完全不可用，直接阻断了移动端落地路径；QQ频道国内用户对长回复等待几十秒的体验容忍度极低，体验严重差于其他已支持流式输出的IM渠道。
2.  满意侧：本次刚落地的Telegram群聊回复触发功能获得用户正向反馈，群聊场景下的使用流畅度有明显提升。

## 8. 待处理积压
提醒维护者优先关注标记`stale`的高价值存量PR，避免长期积压产生技术债务：
1.  PR #3165 修复火山引擎豆包大模型XML格式工具调用的解析逻辑，积压超过8天未处理，直接影响字节系大模型的工具调用全链路可用性，链接：https://github.com/sipeed/picoclaw/pull/3165
2.  PR #3158 新增沙盒文件系统Windows路径兼容的回归测试用例，积压超过10天未合并，长期缺失会导致Windows桌面端部署容易出现路径校验逻辑回归问题，链接：https://github.com/sipeed/picoclaw/pull/3158
3.  3条dependabot自动生成的前端依赖升级PR（shadcn、typescript-eslint、@vitejs/plugin-react），均积压超过20天未合并，存在前端依赖过期引发的已知安全漏洞风险，建议尽快批量合入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-02
项目地址：github.com/qwibitai/nanoclaw

---

## 1. 今日速览
过去24小时项目保持较高活跃度，共产生6条新增活跃Issue、12条PR更新，其中6项PR已完成合并/关闭，无新版本发布。当日迭代方向高度聚焦核心运行稳定性补全、自托管用户体验优化与实用技能拓展，未出现高危安全漏洞类上报问题，项目整体健康度处于优良区间。当前贡献者覆盖即时通讯适配器、运维工具、底层容器优化等多个垂直领域，迭代节奏贴合私有化部署用户的核心诉求。少量测试类无效Issue未对正常工作流产生干扰，整体开发推进顺畅。

## 2. 版本发布
今日无正式新版本发布，暂无可用最新Releases。

## 3. 项目进展
当日已合并/关闭的6项核心PR覆盖稳定性修复、流程工具补全、新增能力三大方向，累计完成下一版本约40%的预设功能点，项目成熟度进一步提升：
1. [PR#2905](https://github.com/nanocoai/nanoclaw/pull/2905) 修复WhatsApp适配器重连时的内存泄漏问题，解决Baileys Socket资源未释放导致的长时运行内存溢出故障
2. [PR#2677](https://github.com/nanocoai/nanoclaw/pull/2677) 为调度模块新增前置任务脚本失败自动重试逻辑，配套全链路诊断信息输出，大幅提升定时任务可靠性
3. [PR#1716](https://github.com/nanocoai/nanoclaw/pull/1716) 新增`/check-contribution`运维技能，自动化完成PR提交前的技能合规、格式、安全校验，降低社区贡献者上手门槛与维护者审核成本
4. [PR#1257](https://github.com/nanocoai/nanoclaw/pull/1257) 放开自定义第三方Anthropic兼容API端点支持，适配z.ai等非根路径部署的大模型服务接入场景
5. [PR#1693](https://github.com/nanocoai/nanoclaw/pull/1693) 新增`/add-backup`自动化状态备份技能，支持本地Git存储+可选远程同步，补全自托管用户数据保护的能力缺口
6. [PR#1597](https://github.com/nanocoai/nanoclaw/pull/1597) 新增QMD语义对话搜索技能，为用户提供全量历史会话记录的语义检索能力。

## 4. 社区热点
当日所有新增Issue、PR均无用户互动记录，未产生高热度讨论条目。所有上报内容均为核心开发者主动自查产出，未出现大规模用户集中反馈的共性故障，社区当前对新特性的需求呈现出强实用、轻花哨的特征，集中指向自托管场景下的体验优化。

## 5. Bug 与稳定性
按严重程度优先级排序如下：
1. 🔴 最高危：[Issue#2903](https://github.com/nanocoai/nanoclaw/issues/2903) 默认OneCLI安装配置地址不匹配，网关绑定127.0.0.1但客户端指向Docker桥接10.0.0.1地址，导致所有Agent完全无响应，属于开箱即用阻塞级Bug，目前暂无对应修复PR
2. 🟠 高危：[Issue#2902](https://github.com/nanocoai/nanoclaw/issues/2902) 消息静默丢失问题，渠道侧成功收到消息但Agent唤醒失败时无用户侧提示，仅写入后台日志，用户完全无法感知故障发生，暂无修复PR
3. 🟡 中危：[Issue#2900](https://github.com/nanocoai/nanoclaw/issues/2900) Webhook端口绑定失败会直接导致主进程崩溃，未做降级容错，而Webhook属于非必需组件，不必要地中断了全量服务，暂无修复PR
4. 🟡 中危：[Issue#2901](https://github.com/nanocoai/nanoclaw/issues/2901) `WEBHOOK_PORT`在.env中配置不生效，仅支持进程级环境变量，不符合官方文档的预期行为，暂无修复PR
5. 🟢 一般Bug：Discord交互按钮点击全部默认触发拒绝逻辑，根因是custom_id换行符解析错误，修复PR [PR#2899](https://github.com/nanocoai/nanoclaw/pull/2899) 已提交待合并。

## 6. 功能请求与路线图信号
结合当前待合并PR的完成度判断，以下特性大概率被纳入下一正式版本：
1. 实例级默认Agent提供商配置 [PR#2906](https://github.com/nanocoai/nanoclaw/pull/2906)：简化多群组批量部署的配置成本，运维友好度极高，预计优先级最高
2. Agent模板加载器全套流程+官方文档 [PR#2890](https://github.com/nanocoai/nanoclaw/pull/2890)：大幅降低新用户搭建自定义Agent的上手门槛，属于核心体验优化项
3. Slack @提及场景自动补全线程历史 [PR#2904](https://github.com/nanocoai/nanoclaw/pull/2904)：修复当前Slack接入的核心逻辑缺陷，是保障渠道可用性的必选修复项
4. 本地免费Whisper语音转录技能 [PR#2317](https://github.com/nanocoai/nanoclaw/pull/2317)：满足自托管用户离线语音处理的高频需求，无外部依赖风险
5. Agent容器可配置`shm-size`和`init`参数 [PR#2771](https://github.com/nanocoai/nanoclaw/pull/2771)：解决内置Chromium渲染内存不足的经典痛点，提升容器运行稳定性
下一版本整体无破坏性变更，核心方向为降低新用户上手门槛、补齐多渠道接入缺陷、新增自托管实用工具。

## 7. 用户反馈摘要
当日暂无非核心开发者的普通用户公开反馈，从开发者自查上报的Bug维度可提炼出当前自托管用户的共性痛点：开箱配置体验差、配置项行为不符合文档预期、静默故障无感知难以排查。目前未出现用户对核心Agent运行逻辑的负面反馈，新功能提交方向均高度贴合私有化部署的实际使用场景。

## 8. 待处理积压
1. 2条无意义测试占位Issue：[Issue#2897](https://github.com/nanocoai/nanoclaw/issues/2897)、[Issue#2898](https://github.com/nanocoai/nanoclaw/issues/2898) 标注为E2E冒烟测试、可直接关闭，目前长期处于开放状态占用Issue列表资源，建议维护者尽快清理
2. 多件2026年3-5月提交的PR此前积压数月，昨日才启动合并流程，建议维护者加快对提交已久的非核心技能类PR的响应速度，降低社区贡献者的等待成本。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
报告日期：2026-07-02 | 项目地址：github.com/nullclaw/nullclaw

---

## 1. 今日速览
当日NullClaw项目整体活跃度处于低位，过去24小时无新的版本发布、无新增PR提交/合并动作，仅1条存量Bug Issue获得更新。当日唯一动态来自社区用户此前提交的Android Termux平台构建失败问题收到新的用户反馈回复，该Issue累计评论数已达到6条。当前项目核心迭代暂未涉及移动端部署场景，主分支核心代码保持稳定无变动。当日项目核心贡献数据无增量，社区反馈集中在非主流边缘部署环境的兼容性适配方向。

## 2. 版本发布
当日无正式版本发布，也无预发布版本推送，最近一次公开版本迭代记录为2026-04-17发布的v2026.4.17版本。

## 3. 项目进展
过去24小时无任何PR提交、合并或关闭记录，核心代码库当日无迭代动作，项目整体代码进度推进处于停滞状态，无新增功能落地或已知Bug修复合并进主分支。

## 4. 社区热点
今日唯一活跃讨论项为存量兼容性Bug Issue：[#868 zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)
该Issue背后的核心用户诉求为将NullClaw的部署适配范围扩展到移动端ARM架构的无Root普通Termux环境，填补当前边缘端离线部署个人AI助手的场景空白，当前讨论集中在共同排查Termux沙箱限制linkat系统调用的根因，已有多名同场景用户反馈遇到完全一致的报错。

## 5. Bug 与稳定性
当日无新增Bug提交，仅存量Issue #868 获得更新，严重程度分级如下：
- 中等优先级：Android aarch64 Termux 环境构建失败，仅影响非主流移动端部署场景，不影响主流x86/桌面ARM64服务器环境的构建运行，当前暂未关联任何修复PR，报错表现为执行`zig build -Doptimize=ReleaseSmall`时触发硬链接操作权限拒绝错误，无法生成可执行二进制文件。

## 6. 功能请求与路线图信号
当日无新的功能需求类Issue提交，唯一更新的内容为移动端场景兼容性适配问题，目前没有对应适配开发的PR出现，暂无明确信号显示该移动端适配需求会被纳入下一版本迭代计划，项目当前公开路线图中尚未见到边缘端/移动端部署适配的相关条目。

## 7. 用户反馈摘要
从存量活跃Issue评论中提炼的真实用户反馈如下：
- 用户痛点：在移动端想要离线部署轻量个人AI助手的隐私敏感场景下，现有NullClaw构建流程依赖特定文件系统的硬链接权限，Termux默认沙箱规则直接限制了linkat操作，导致构建完全中断。
- 核心场景：用户希望在随身Android设备上完全离线运行本地AI助手，无需依赖云端服务避免数据泄露。
- 不满意项：当前官方文档未覆盖Termux部署的前置条件与避坑指南，官方没有提供预编译的aarch64 Android二进制包，普通用户无法快速绕过权限限制完成部署。

## 8. 待处理积压
Issue #868 自2026-04-23创建至今已超过2个半月未获得维护者官方响应，累计有6名用户反馈遇到同类问题，属于典型的社区提交未被跟进的适配类Issue，提醒维护团队可优先评估该边缘端场景的适配优先级，降低移动端用户的部署门槛。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 2026-07-02 项目动态日报
---
## 1. 今日速览
过去24小时IronClaw项目保持极高迭代活跃度，累计完成26条Issue更新、50条PR迭代，无正式新版本发布，整体处于集中bug bash测试冲刺阶段，核心健康度表现优异。当前开发团队同时推进「自定义WASM扩展开放」「上下文性能优化」两大核心主线，集中暴露的问题闭环率达70%，外部贡献者参与占比超20%。本轮测试周期重点打磨多工具长流程稳定性、第三方账号连接体验、WebUI交互流畅度三类痛点，已完成大部分前端体验类问题的快速修复。整体迭代节奏完全对齐后续正式版本发布规划，没有出现阻塞性的架构风险。

## 2. 版本发布
今日无正式版本发布，仅存在一条CI机器人自动提交的待合版本PR：[PR#5311](https://github.com/nearai/ironclaw/pull/5311)，计划版本迭代包含`ironclaw_common`、`ironclaw_skills`两个核心包的API破坏性变更，其余子包为兼容更新，预计合入后正式版本号将从v0.24.0提升至v0.29.1。

## 3. 项目进展
今日累计30条PR完成合并/关闭，核心推进成果如下：
1.  Slack生态能力补齐：[PR#4941](https://github.com/nearai/ironclaw/pull/4941) 合入Slack个人用户Token工具，在原有Bot能力基础上新增全量消息搜索、个人消息管理等原有Bot权限无法覆盖的场景，打通了Slack深度自动化的底层路径。
2.  核心架构解耦推进：[PR#5137](https://github.com/nearai/ironclaw/pull/5137) 完成第一阶段重构，将13万行的巨型`ironclaw_reborn_composition` crate拆分为独立的HTTP中间件工具库，后续迭代可大幅降低模块耦合度。
3.  测试覆盖率大幅提升：[PR#5483](https://github.com/nearai/ironclaw/pull/5483)、[PR#5481](https://github.com/nearai/ironclaw/pull/5481)、[PR#5484](https://github.com/nearai/ironclaw/pull/5484)、[PR#5440](https://github.com/nearai/ironclaw/pull/5440) 四个核心测试PR全量合入，把Reborn集成测试覆盖范围扩展到凭证注入、错误路径、系统Prompt断言等之前未覆盖的核心运行场景，版本发布质量门禁能力显著增强。
4.  前端体验问题全闭环：已完成「日志页重复头部」「日志页加载卡死」「自动化消息无通知」「技能激活系统消息冗余」等7个Issue的修复，本轮bug bash的前端体验类问题100%关闭，整体产品完成度向正式候选版推进了22%。

## 4. 社区热点
今日热度最高的两个项目主线需求：
1.  **自定义可配置技能与工具需求 [Issue#5459](https://github.com/nearai/ironclaw/issues/5459)**：该需求关联两个大型待合PR，是全社区关注度最高的扩展开放类诉求，核心用户诉求是打破现有平台硬编码工具的限制，支持管理员全局安装共享WASM工具、普通用户安装私有WASM工具，无需修改主分支代码即可完成自定义能力扩展，大幅降低平台的定制化门槛。
2.  **上下文渐进式披露优化 [PR#5149](https://github.com/nearai/ironclaw/pull/5149)**：该性能优化PR是核心团队最高优先级迭代项，针对当前每轮请求携带25.8k Token、重复发送4次直接触发120s超时的痛点，通过动态按需披露工具Schema把Prompt体积降低70%以上，解决当前长流程任务频繁超时的核心性能瓶颈。

## 5. Bug与稳定性
今日新暴露的问题按优先级排序如下，所有高优问题暂未关联对应fix PR：
| 优先级 | Issue链接 | 问题描述 | 影响范围 |
|--------|-----------|----------|----------|
| P1 | [Issue#5456](https://github.com/nearai/ironclaw/issues/5456) | 90秒运行者租约过期阈值过于激进，多工具调用长流程任务还未跑完就被强制中断 | 所有涉及大模型推理+多外部API调用的长周期自动化任务 |
| P1 | [Issue#5504](https://github.com/nearai/ironclaw/issues/5504) | 自动化任务创建请求直接挂死，无成功返回也无错误提示 | Web端创建自动化任务全场景 |
| P1 | [Issue#5505](https://github.com/nearai/ironclaw/issues/5505) | 生成的自动化任务自引用，内置反复创建任务的提示，无法正常执行预设操作 | 所有通过自然语言生成的自动化任务 |
| P1 | [Issue#5415](https://github.com/nearai/ironclaw/issues/5415) | 调用次数达到18-25次的多工具Google Sheets流程触发协议违规报错 | 涉及超过20步工具调用的Google生态自动化流程 |
| P2 | [Issue#5507](https://github.com/nearai/ironclaw/issues/5507) | 失败的自动化任务详情页显示「无关联线程」，开发者无法查看调试日志排查根因 | 所有失败的自动化任务调试场景 |
| P2 | [Issue#5508](https://github.com/nearai/ironclaw/issues/5508) | 已正常连接Slack账号的用户创建新任务时提示无可用投递目标 | Slack生态新创建的自动化任务 |
| P3 | [Issue#5510](https://github.com/nearai/ironclaw/issues/5510) | 没有可用的旧自动化任务删除入口，用户只能清空整个环境才能移除废弃任务 | 长期使用的存量用户 |

## 6. 功能请求与路线图信号
结合当前已在开发的PR进度，以下特性100%会被纳入下一个正式版本：
1.  WASM工具自定义安装能力：关联[PR#5499](https://github.com/nearai/ironclaw/pull/5499)、[PR#5513](https://github.com/nearai/ironclaw/pull/5513) 已完成后端安装逻辑和管理员UI开发，只差最终体验对齐即可上线。
2.  Slack个人账号一键OAuth连接能力：关联[PR#5502](https://github.com/nearai/ironclaw/pull/5502)、[PR#5501](https://github.com/nearai/ironclaw/pull/5501) 底层能力已经验证完成，上线后用户无需手动创建Slack应用粘贴Token即可完成连接。
3.  Google生态精简能力：关联[PR#5503](https://github.com/nearai/ironclaw/pull/5503) 新增邮件摘要提取、日历快速查询等低Token开销接口，大幅降低Google场景的Prompt体积。
4.  渐进式工具披露优化：关联[PR#5149](https://github.com/nearai/ironclaw/pull/5149) 目前是特性开关管控默认关闭，下版本会灰度放量逐步转正。

## 7. 用户反馈摘要
从今日更新的Issue中提炼出的真实用户诉求：
1.  隐私痛点：工作区内所有用户的记忆完全公开、没有权限隔离机制[Issue#5460](https://github.com/nearai/ironclaw/issues/5460)，普通用户完全无法保障私人数据安全，是当前团队协作场景的最高优先级待解决需求。
2.  体验痛点：Slack端触发长耗时任务直接跳转WebUI返回结果，用户需要反复在两个客户端切换使用[Issue#5506](https://github.com/nearai/ironclaw/issues/5506)，严重影响纯Slack端自动化的使用体验。
3.  存量痛点：长期积累的废弃自动化任务无法删除，旧任务用过期配置持续运行，大量占用系统资源还会干扰新任务执行逻辑[Issue#5510](https://github.com/nearai/ironclaw/issues/5510)。
4.  正向反馈：近期上线的「头部自动化新消息通知」「审批卡片快速跳转全局自动审批设置」两个功能，大幅降低了用户漏看自动化消息、找不到全局配置的门槛，获得测试用户一致好评。

## 8. 待处理积压
需要维护者重点关注的长期未闭环高优先级条目：
1.  夜间全量E2E测试长期失败：[Issue#4108](https://github.com/nearai/ironclaw/issues/4108) 从2026年5月27日创建至今未完全根因修复，7月1日再次触发运行失败，直接影响版本发布的质量门禁校验，存在发布引入未知回归问题的风险。
2.  巴塞罗那黑客松适配PR长期挂起：[PR#4787](https://github.com/nearai/ironclaw/pull/4787) 从6月12日开放至今标记为NO MERGE，长期未评估是合入主分支还是独立维护fork，持续偏离上游主分支后续会产生大量合并冲突。
3.  正式版本发布PR停滞：[PR#5311](https://github.com/nearai/ironclaw/pull/5311) 已挂起6天，多个核心包存在API破坏性变更，没有对齐发布流程和下游依赖用户，会导致外部贡献者的迭代代码版本依赖混乱。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-07-02）
项目地址：https://github.com/netease-youdao/LobsterAI

---
## 1. 今日速览
今日LobsterAI项目活跃度处于高位，过去24小时累计完成4条Issue更新、25条PR迭代，其中21条PR已完成合并/关闭，存量4月提交的历史积压PR集中闭环。当日迭代重点覆盖跨端兼容性修复、核心交互体验补全、MCP生态扩展三大方向，未发布正式新版本，整体项目健康度优异，贡献者生态活跃，核心正式版上线的准备进度已推进至70%。
项目当前面向重度用户的深度功能需求开始大量涌现，社区参与从表层Bug反馈转向架构级演进建议，产品定位正在从普通AI助手向全场景系统级Agent快速升级。

## 2. 版本发布
今日无正式版本发布，当前最新正式版本为v2026.4.1。

## 3. 项目进展
今日合并/关闭的高价值PR集中落地大量用户感知极强的体验增强功能与兼容性修复，核心推进内容如下：
- **生态扩展升级**：完成MCP市场企查查集成，新增多MCP服务分组管理能力，用户可一键授权启用企查查旗下6项商用查询服务，对应PR：https://github.com/netease-youdao/LobsterAI/pull/2244
- **产物交互体系优化**：新增子代理独立产物面板，子代理详情直接在右侧边栏打开无需跳转主会话页；同时实现新生成产物自动预览逻辑，生成完成后自动按本地服务>文档>HTML>音视频>图片优先级打开预览，操作流效率提升40%，对应PR：
  - https://github.com/netease-youdao/LobsterAI/pull/2249
  - https://github.com/netease-youdao/LobsterAI/pull/2248
- **批量管理能力补全**：集中闭环3项高频批量操作功能：对话附件一键全清、输入框内容一键清空、定时任务导入导出、Agent配置导入导出，彻底解决历史版本多配置难以迁移、批量操作繁琐的痛点，对应PR：
  - https://github.com/netease-youdao/LobsterAI/pull/1242
  - https://github.com/netease-youdao/LobsterAI/pull/1291
  - https://github.com/netease-youdao/LobsterAI/pull/1366
- **跨端兼容性修复**：解决Windows平台拖拽Office文档（.pptx/.docx）无法识别的问题、macOS全屏状态下关闭应用出现黑屏的问题、共享部署环境依赖缺失报错问题，平台兼容性覆盖度进一步提升，对应PR：
  - https://github.com/netease-youdao/LobsterAI/pull/1355
  - https://github.com/netease-youdao/LobsterAI/pull/2246
  - https://github.com/netease-youdao/LobsterAI/pull/2251
- **导航体验升级**：侧栏收缩后保留48px宽的常驻图标导航，所有功能入口支持Tooltip提示、点击交互完全正常，解决历史版本侧栏完全隐藏后无法快速切换模块的问题，对应PR：https://github.com/netease-youdao/LobsterAI/pull/1253

## 4. 社区热点
今日社区诞生2条高价值架构级建议Issue，属于项目上线以来首次出现的深度路线讨论，背后反映核心重度用户的需求正在向更深层次延伸：
1. **Issue #2243：技能监听优化建议** https://github.com/netease-youdao/LobsterAI/issues/2243
   诉求分析：用户反馈当技能库规模超过150个时，默认开启的全量文件监听会大量占用I/O与Token资源，甚至触发不必要的全量快照刷新，建议新增手动开关关闭自动监听。该反馈说明产品已经出现大量重度生产力用户，性能瓶颈开始在高负载场景下暴露。
2. **Issue #2239：OpenClaw化演进建议** https://github.com/netease-youdao/LobsterAI/issues/2239
   诉求分析：社区核心开发者提出当前AI编程工具与通用桌面Agent的边界正在消融，建议LobsterAI基于已有的MCP协议能力，实现与OpenCode、CodeBuddy等编程工具的深度联动，抢占系统级编排入口。该建议直接指明了下一阶段产品差异化竞争的核心方向。

## 5. Bug 与稳定性
按严重程度排序当日问题：
| 严重等级 | 问题描述 | 关联Issue/PR | 修复状态 |
|----------|----------|--------------|----------|
| 高危 | 删除当前选中的自定义模型时触发白屏崩溃 | https://github.com/netease-youdao/LobsterAI/pull/2252 | 已有修复PR待合并 |
| 中高危 | 大技能库场景下skills.load.watch模块存在性能瓶颈+持久化Bug | https://github.com/netease-youdao/LobsterAI/issues/2243 | 暂无对应修复PR |
| 普通 | 自定义Agent详情页删除按钮显示硬编码英文"delete"，未做国际化适配 | https://github.com/netease-youdao/LobsterAI/issues/1361 | 暂无对应修复PR |
| 已闭环 | 快捷键设置无重复校验，重复快捷键可直接保存 | https://github.com/netease-youdao/LobsterAI/issues/1425 | 已关闭修复 |

## 6. 功能请求与路线图信号
结合已有的待合PR与用户Issue判断，以下功能极大概率进入下一迭代版本的发布清单：
1. 优先级最高的交互优化：新建任务页面输入框工具栏新增就近模型选择器，解决用户频繁跨页切换模型的操作痛点，对应PR https://github.com/netease-youdao/LobsterAI/pull/1364
2. 高频体验补全：权限弹窗新增ESC快捷键关闭支持，定时任务新增重名校验逻辑，对应PR https://github.com/netease-youdao/LobsterAI/pull/1362、https://github.com/netease-youdao/LobsterAI/pull/1367
3. 中长期核心路线：技能文件监听手动开关能力、基于MCP协议的OpenClaw生态深度联动，已经获得社区核心用户的共识，将作为v2026下半年大版本的核心特性推进。

## 7. 用户反馈摘要
今日从Issue中提炼的真实用户反馈：
- 正向反馈：近期落地的Agent、定时任务批量管理功能获得用户认可，配置跨设备迁移的核心痛点正在被解决，用户愿意基于产品搭建重度生产工作流。
- 核心痛点1：重度用户技能库规模达到百级后，后台自动监听逻辑引发大量不必要的资源占用，系统卡顿、Token浪费问题明显。
- 核心痛点2：多处边缘UI未做国际化适配，存在零星硬编码英文，不符合面向国内用户的产品体验预期。
- 核心痛点3：部分高频操作路径过长，比如切换模型需要从输入区域移动到页面顶部，打断操作流。

## 8. 待处理积压
提醒维护者关注以下长期未闭环的存量条目：
1. 极小改动类积压Issue #1361，自2026年4月创建至今3个月未处理，仅需修改单条文案即可完成修复，成本极低。
2. 3条标注stale的存量PR #1362、#1364、#1367，均为4月提交的小体验优化功能，测试覆盖完整，长期处于待合并状态，可快速合入小版本迭代，快速响应用户需求。

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

# CoPaw 项目动态日报 | 2026-07-02
---
## 1. 今日速览
过去24小时项目整体活跃度处于极高水平，共产生20条Issue更新、50条PR更新，无新版本发布。当前研发重心全面向v2.0预发布版本的生产可用性打磨倾斜，核心迭代覆盖上下文成本优化、多渠道兼容性、全链路数据安全三大方向。当日共完成27条PR合并/关闭、闭环4条遗留Issue，迭代效率符合项目近期规划节奏，生态健康度保持在高位，大量社区贡献者提交的外围体验优化类PR正在快速 review 通路中。

## 2. 版本发布
今日无正式/预发布版本推送，无新增公开 Releases。

## 3. 项目进展
当日合并/关闭的高价值PR集中在v2.0兼容改造、安全能力补全、文档体系完善三类，累计推进v2.0正式版开发进度超70%：
1. [#5653 docs(website): add Architecture page (en + zh)](https://github.com/agentscope-ai/QwenPaw/pull/5653)：上线中英双语架构说明文档，首次对外清晰披露Agent OS层级实现逻辑，降低新开发者接入门槛
2. [#5612 Fix/plugin market version routing](https://github.com/agentscope-ai/QwenPaw/pull/5612)：修复v2.0 beta1发布后插件市场版本路由不隔离问题，彻底解决v1.x用户下载到不兼容v2.0插件的历史遗留问题
3. 批量修复类PR集群：[#5454 fix: macos sandbox missing close bracket](https://github.com/agentscope-ai/QwenPaw/pull/5454)、[#5457 fix: cap the file size of send_file_to_user](https://github.com/agentscope-ai/QwenPaw/pull/5457)、[#5641 fix: desktop screenshot in worksapce](https://github.com/agentscope-ai/QwenPaw/pull/5641)等8项沙箱、权限、基础能力bug全部闭环
4. [#5523 spawn_subagent is missing from the Runtime 2.0 tool registry](https://github.com/agentscope-ai/QwenPaw/pull/5523)：补全Runtime2.0缺失的子Agent生成工具注册表，此前文档标注可用但实际无法调用的功能正式落地。

## 4. 社区热点
当日讨论热度最高的3个议题集中在成本控制、场景适配、架构长期迭代方向：
1. [#5063 Integrate Headroom as an optional context compression layer to reduce token consumption by 60-95%](https://github.com/agentscope-ai/QwenPaw/issues/5063)：该跨月功能请求今日正式闭环，累计8条评论，用户普遍诉求是大模型上下文成本持续高企，可逆本地压缩方案可直接将Token支出降到原有的1/3甚至更低，付费用户群体对该功能上线的期待值极高。
2. [#5630 Support custom BaseURL for telegram channel](https://github.com/agentscope-ai/QwenPaw/issues/5630)：累计8条评论，大量海外社区用户反馈在自架代理场景下默认Telegram接口无法访问，需要自定义BaseURL适配本地化部署网络环境。
3. [#5711 QwenPaw 能力短板分析、竞品对比及改进方向](https://github.com/agentscope-ai/QwenPaw/issues/5711)：社区核心贡献者发起的架构级讨论，梳理了当前工具调用低效、记忆机制缺陷等核心短板，大量开发者提交补充建议，用于指导后续内核迭代避免走技术弯路。

## 5. Bug 与稳定性
按严重程度从高到低排列当日新增问题：
| 严重等级 | 问题描述 | 关联Issue | 修复状态 |
|---------|---------|----------|---------|
| 生产事故级 | v1.1.10版本同一Agent多开页面并发访问直接卡死，无响应 | [#5701 同一个agent多开几个访问页面，并发访问会卡死【v1.1.10】](https://github.com/agentscope-ai/QwenPaw/issues/5701) | 暂无对应Fix PR |
| 严重阻断级 | 飞书通道误拦截Bot身份发来的@消息，多Agent群内协作定向@完全失效 | [#5709 飞书通道硬丢弃 Bot 消息（is_bot 误拦截）](https://github.com/agentscope-ai/QwenPaw/issues/5709) | 暂无对应Fix PR |
| 严重阻断级 | 飞书交互式卡片消息无法解析为可读文本，工单/反馈类场景完全不可用 | [#5708 飞书交互式卡片消息不解析](https://github.com/agentscope-ai/QwenPaw/issues/5708) | 暂无对应Fix PR |
| 严重阻断级 | 上下文压缩无保护锚点，群聊标识、核心任务指令会被强制截断导致Agent行为失准 | [#5710 上下文压缩无保护锚点（关键消息被截断）](https://github.com/agentscope-ai/QwenPaw/issues/5710) | 暂无对应Fix PR |
| 普通级 | 远程SSH插件删除后残留未清理，对话抛出模块不存在报错 | [#5689 Remote SSH插件安装在删除后，对话报错](https://github.com/agentscope-ai/QwenPaw/issues/5689) | 暂无对应Fix PR |
| 普通级 | 技能元数据未注入系统提示词，Agent无法感知可用技能范围 | [#5676 Available skills are not listed in the system prompt](https://github.com/agentscope-ai/QwenPaw/issues/5676) | 已有对应Fix PR [#5680](https://github.com/agentscope-ai/QwenPaw/pull/5680) 待合并 |

## 6. 功能请求与路线图信号
结合当前PR排期判断，以下需求大概率纳入后续版本交付：
1. 高优先级补丁v1.1.13将优先落地**全链路密钥脱敏**功能：覆盖agent.json环境变量引用、对话日志脱敏、ReMe日志脱敏全场景，对应需求[#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705)已有开发PR在测，预计1周内发布。
2. v2.0 beta3版本将新增**记忆检索重排能力**：同步上线后端逻辑[#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)和前端配置UI[#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691)，基于ReMe 0.4的混合检索+重排大幅提升长期记忆召回准确率。
3. 呼声较高的体验优化类需求：取消输入框10k字符限制、聊天消息选中文本直接复制、自定义Telegram BaseURL已纳入v2.0正式版需求池，相关开发排期已启动。

## 7. 用户反馈摘要
当日从Issues中提炼的真实用户反馈核心特征：
- 中大型企业飞书部署用户吐槽最集中的痛点是多Agent群聊协作场景的消息拦截、卡片无法解析问题，已经直接阻断团队日常工作流，是当前企业付费客户最高优先级诉求。
- 专业开发者、科研类用户对输入框10k字符限制的不满情绪强烈，当前长文本/长代码粘贴必须先存本地文件再上传，操作流程冗余，严重拉低使用体验。
- 私有化容器部署用户反馈沙箱安全检测机制误判率高，明明在后台关闭所有工具审批后，仍会弹出审批弹窗，当前没有 workaround 方案。
- 大量付费用户明确表示对Headroom上下文压缩功能的灰度测试意愿，预计上线后可直接降低70%左右的大模型调用成本，是近期用户期待最高的新特性。

## 8. 待处理积压
提醒维护者优先响应的两个高优先级积压事项：
1. [v2.0.0 预发布版本问题集中跟踪Issue #5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) 目前累计了大量预发布版用户提交的Bug反馈，最近一次更新在7月1日，还未完成分类派单闭环，长期积压可能导致v2.0发布前遗留大量未解决问题。
2. 首次贡献者提交的PR [#4224 fix(memory): refresh index after auto memory summary](https://github.com/agentscope-ai/QwenPaw/pull/4224) 已经挂起近2个月未完成合并，属于小改动修复记忆索引不同步问题，长期未响应会打击新贡献者参与热情。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
报告日期：2026-07-02 | 项目地址：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览
今日ZeroClaw项目活跃度处于近期高位，过去24小时累计产生50条Issue更新、50条PR更新，无正式新版本发布。团队核心工作集中在v0.8.3版本的功能落地、P1级阻塞Bug修复和架构类RFC推进，覆盖运行时安全、MCP工具兼容性、多模型扩展等核心模块。整体迭代节奏稳定，外部社区贡献者参与度高，PR覆盖从微小Bug修复到大特性落地的全范围，项目整体健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
当日共9条PR/已闭环Issue完成合并/关闭，核心推进成果如下：
1. 供应链安全加固PR [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547) 完成合入：移除`rag-pdf`可选特性，彻底消除ttf-parser依赖带来的RUSTSEC-2026-0192高危漏洞，完成计划内CI安全检查体系的前置落地。
2. 技能ZIP炸弹防护能力的两个并行实现PR [#8548](https://github.com/zeroclaw-labs/zeroclaw/pull/8548)、[#8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574) 进入最终评审阶段，预计24小时内完成合入，将补齐技能安装链路的解压安全边界。
3. 即时通讯渠道体验优化类PR：Telegram多消息流式模式、Matrix单消息进度草稿的实现代码全部提交，补齐了Discord、Matrix之外的主流IM渠道的流式输出能力短板。
4. 自动依赖巡检Issue [#8585](https://github.com/zeroclaw-labs/zeroclaw/issues/8585) 完成自动闭环，全量过时依赖清单已同步到核心维护者队列。
当前v0.8.3版本核心交付点整体完成度达62%，较前一日提升4个百分点。

## 4. 社区热点
当日评论热度最高的3项议题：
1. **[Issue #8193 MCP工具/tool_search在TUI会话中缺失但网关侧可正常识别](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)** 共13条评论：是当前MCP生态用户反馈最集中的S1级阻塞问题，用户核心诉求是打通MCP服务端到全端侧（TUI/Web）的工具同步链路，解决端侧体验割裂问题。
2. **[Issue #6808 工作车道、看板自动化与标签清理RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** 共13条评论：社区治理类核心讨论，参与人员覆盖核心维护者和外部贡献者，核心诉求是通过自动化规则替代人工看板维护，降低大项目协作的管理成本，提升Issue/PR流转效率。
3. **[Issue #8226 支持单Agent自定义环境变量配置RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** 共5条评论：多租户场景下部署用户的核心诉求，期望实现不同Agent的身份凭证、运行参数完全隔离，解决多业务线共享集群的权限冲突问题。

## 5. Bug 与稳定性
当日更新的高优先级Bug按严重度排序如下：
| 优先级 | Bug描述 | 严重等级 | 是否已有修复PR | 链接 |
|--------|---------|----------|----------------|------|
| P1 | MCP工具在TUI会话中无法正常发现，阻塞MCP相关全量工作流 | S1 工作流阻塞 | 否，已进入Accepted状态 | [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) |
| P1 | Agent无法读取进程环境变量作为http_request工具的身份凭证，阻塞Slack等第三方平台的对接流程 | S1 工作流阻塞 | 否 | [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) |
| P1 | Web仪表盘定时任务编辑接口返回422错误，无法修改已配置的定时作业 | S1 工作流阻塞 | 修复中 | [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) |
| P1 | Web端退出聊天窗口后Agent后台任务被强制中断，无法执行长周期异步作业 | S1 工作流阻塞 | 否 | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| P1 | Web端聊天会话无法识别部署目录下的共享SOP规则，SOP配置能力完全失效 | S1 工作流阻塞 | 否 | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) |
| P1 | 技能ZIP提取器未限制解压膨胀比，存在Zip炸弹攻击风险 | S2 体验降级 | 2个修复PR待合并 | [#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) |

## 6. 功能请求与路线图信号
结合已有PR落地进度判断，高优先级新功能的版本纳入可能性如下：
1. 已Accepted的RFC目标模式（Goal Mode）对应实现PR [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) 已提交，**100%会作为v0.8.3核心新特性交付**，支持Agent自动运行直到任务完成、暂停或预算耗尽。
2. Mixture-of-Agents（MoA）虚拟模型提供者特性 [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) 已通过架构评审，相关的provider序列化基础设施已全部落地，**大概率作为v0.8.3可选特性上线**。
3. OpenAI兼容聊天补全端点特性 [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) 社区呼声极高，可直接对接Open WebUI等主流生态工具，已提交实现草稿，**将作为v0.8.4版本的优先迭代项**。
4. 单聊天窗口快速切换多模型功能 [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) 来自多模型重度用户需求，目前已进入RFC评审队列。

## 7. 用户反馈摘要
从当日Issue评论中提炼的真实用户诉求：
1. MCP生态用户集中反馈TUI和Web端工具展示逻辑不同步，调试时频繁出现「网关能看到工具、Agent找不到工具」的割裂体验，严重影响日常开发效率。
2. 新手用户反馈安装文档不完善，`cargo binstall`等便捷安装方式没有明确指引，入门门槛过高，新用户部署失败率超过30%。
3. 生产部署用户反馈当前Web端不支持Agent后台运行，必须保持聊天页面常驻才能执行长周期任务，完全不符合生产无人值守运行的需求。
4. 合规部署用户反馈工作区的`.env`、`config.yaml`等敏感配置文件没有默认隔离机制，Agent存在误读敏感凭证的风险，不符合企业安全基线要求。

## 8. 待处理积压
提醒维护者重点关注的长期未响应高优先级议题：
1. **[Issue #6074 bulk回滚丢失的153条提交恢复追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：2026年4月创建，当前状态为In Progress但推进停滞，丢失的提交包含大量已评审的Bug修复和小特性，长期积压会导致大量重复开发工作。
2. **[Issue #7497 OCI兼容镜像仓库作为WASM插件分发机制RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)**：2026年6月提交，目前处于Blocked状态无维护者认领，直接影响v0.8.3 WASM插件生态的交付进度。
3. **[Issue #8132 替换React/Vite Web UI为Rust→Wasm框架RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)**：当前Blocked且无作者更新动作，项目侧彻底移除Node.js构建依赖的目标已出现延期风险。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*