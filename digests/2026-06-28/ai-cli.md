# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-27 23:02 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 2026-06-28 AI CLI 工具生态横向对比分析报告
面向技术决策者与开发者的专业动态汇总
---

## 1. 生态全景
当前AI CLI赛道已经全面跨过早期功能验证阶段，进入体验深耕、生态扩张、生产级稳定性打磨的全新发展周期。本次统计的8款主流工具中仅1款无活跃迭代，其余7款24小时内总更新Issue/PR数量超过230条，迭代密度处于历史高位。头部工具不再将大模型调用能力作为核心差异化卖点，转而集中攻坚跨平台兼容性、扩展生态稳定性、生产级安全管控、大代码库效率优化等重度开发者刚需痛点，整个赛道的渗透边界正从早期尝鲜用户向团队核心生产工作流快速覆盖。闭源商业工具侧重付费权益透明化、企业级管控能力建设，开源社区工具侧重开放自定义、多模型中立适配，分层竞争格局已经基本成型。ACP（Agent通信协议）跨工具互操作标准开始被各主流厂商采纳，不同AI CLI与编辑器的生态打通趋势已经显现。

## 2. 各工具活跃度对比
| 工具名称          | 当日活跃Issue数量 | 当日活跃PR数量 | 24小时内Release情况                     |
|-------------------|------------------|---------------|----------------------------------------|
| Claude Code       | 10（高优存量）    | 3             | 无正式版本发布                          |
| OpenAI Codex      | 10（高优存量）    | 10            | 发布2个0.143.0版本的Rust SDK alpha预览包 |
| Gemini CLI        | 30（高优跟进）    | 18            | 无正式版本发布                          |
| GitHub Copilot CLI| 16               | 3             | 无正式版本发布                          |
| Kimi Code CLI     | 0                | 0             | 无任何活动                              |
| OpenCode          | 50               | 50            | 无正式版本发布                          |
| Pi                | 26               | 9             | 无正式版本发布                          |
| Qwen Code         | 30               | 50            | 发布v0.19.2夜间构建预览版                |
| DeepSeek TUI      | 14               | 20            | 无正式版本发布                          |

## 3. 共同关注的功能方向
当前至少3款以上工具同步投入资源迭代的共性需求集中在4个方向：
1. **MCP扩展生态稳定性**：Claude Code修复MCP服务无响应卡死全会话问题，OpenAI Codex单日提交10个MCP OAuth竞态冲突修复PR，GitHub Copilot CLI跟进批处理MCP服务启动失败回归bug，5款头部工具同步解决此前MCP服务异常直接拖垮整个CLI进程的痛点，补齐扩展生态的生产可用短板。
2. **生产级权限与数据安全管控**：Claude Code呼声最高的安全白名单机制、OpenAI Codex的.codexignore敏感文件排除需求、Gemini CLI的Auto Memory前置脱敏/高危命令二次确认、Qwen Code紧急闭环路径遍历高危漏洞，所有主流工具均在快速补全防误操作、防敏感数据泄露的安全能力，适配企业生产落地要求。
3. **Windows/WSL跨平台兼容优化**：Claude Code存量Windows 401认证问题复现、OpenAI Codex修复Windows端代码补丁写入功能失效、OpenCode集中攻坚Windows桌面端向WSL发送UNC路径的全量工具调用失败问题，4款工具同步解决此前Windows平台体验长期落后macOS/Linux的历史欠账。
4. **大模型调用成本优化**：Claude Code提出预注入仓库静态RAG图可降低40.9%首轮token消耗，DeepSeek TUI基于DeepSeek V4缓存特性落地最大化缓存上下文模式，Pi补全全链路非2xx错误透传避免无效重试浪费token，3款面向重度开发者的工具均将降低token消耗作为核心迭代方向。

## 4. 差异化定位分析
各工具已经形成清晰的路线分化，不存在同质化竞争：
| 工具名称          | 功能侧重                                                                 | 目标用户                                   | 技术路线核心特征                                                                 |
|-------------------|--------------------------------------------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------|
| Claude Code       | 高算力推理场景稳定性、付费用户权益统一                                    | 高端付费AI原生开发者                       | 依托Opus系列模型的重度推理能力，优先保障高价值用户的核心生产工作流连续性          |
| OpenAI Codex      | 企业级管控能力、生态兼容性                                                | OpenAI生态内的企业开发者群体                | 全链路对齐OpenAI API标准，快速响应用户反馈的高频bug，迭代效率极高                |
| Gemini CLI        | 多代理自主执行能力、全链路自动化评测                                      | 对Agent自动化程度要求极高的硬核开发者       | 基于Gemini 3原生POSIX适配特性，主打零依赖沙箱环境下的原生bash操作体验            |
| GitHub Copilot CLI| 开箱即用体验、GitHub全生态打通                                            | 最广泛的普通开发者群体                      | 深度嵌入GitHub现有工作流，迭代策略偏保守，优先保障整体稳定性                      |
| OpenCode          | 多模型适配、全球化多支付渠道支持                                          | 自托管部署的全球化开发者群体                | 完全中立的开源聚合平台，支持数十款第三方大模型，优先覆盖不同地区的差异化诉求      |
| Pi                | 扩展开放API、二次开发能力                                                | AI CLI插件开发者、自定义Agent集成厂商       | 底层框架型产品，完全放开底层调用权限，可直接作为RPC后端对接上层自定义服务        |
| Qwen Code         | 多人团队协作、跨设备状态同步                                              | 中文开发团队用户                            | 推进ACP云化部署架构，支持Git级团队共享记忆、项目状态跨端同步，主打多人协作场景    |
| DeepSeek TUI      | 中文本地化适配、极致性价比成本优化                                        | 成本敏感的中文独立开发者                    | 深度适配DeepSeek V4低成本缓存特性，开放全场景自定义能力，覆盖开发/内容创作泛需求 |

## 5. 社区热度与成熟度
当前整个赛道可分为三个成熟梯队：
1. **第一梯队：快速迭代成长期**：OpenCode、Qwen Code、DeepSeek TUI位列其中，单日迭代量均超过40条，新特性合并速度极快，社区新用户增长处于高位，新需求不断涌现，目前版本成熟度中等，核心能力仍在高速扩张。
2. **第二梯队：生产可用高活跃期**：OpenAI Codex、Pi位列其中，单日迭代量超过20条，核心存量bug修复响应速度快，生态体系已经趋于稳定，大量付费企业用户开始接入，完全满足生产环境使用要求。
3. **第三梯队：稳健成熟期**：Claude Code、Gemini CLI、GitHub Copilot CLI位列其中，迭代策略偏保守，几乎没有大规模新特性上线，主要资源集中在存量核心bug修复，是当前普通开发者日常生产环境使用的主流工具，用户基数最大、成熟度最高。
剩余Kimi Code CLI暂无公开活跃迭代，处于蛰伏状态。

## 6. 值得关注的趋势信号
对开发者与技术决策者的参考价值：
1. MCP生态已经跨过概念验证期进入生产可用前夜，头部厂商集体集中修复MCP全链路竞态、崩溃问题，预计未来3个月第三方自定义MCP工具会迎来爆发式增长，开发者提前布局垂直场景的MCP服务可以获得早期生态红利。
2. 全行业集中投入安全管控、敏感数据脱敏能力，意味着AI CLI正式从开发者尝鲜阶段进入企业级采购落地阶段，后续团队选型的核心评估指标将从"模型能力强弱"转向"数据安全合规等级"。
3. ACP跨编辑器互操作协议正在成为事实行业标准，多个工具已经启动Zed等主流编辑器的对接适配工作，未来AI CLI的Agent能力将不再和TUI客户端强绑定，开发者可以在自己习惯的任意编辑器内调用同一套自定义Agent工作流，不需要在多个工具之间切换。
4. 多模型中立适配正在成为开源AI CLI的核心竞争力，重度开发者未来无需绑定单一云厂商，可根据不同场景灵活切换低成本、高性能的模型组合，预计整体大模型调用成本将进一步下探30%以上。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-06-28）
*注：因展示PR评论数字段缺失，本次排行基于关联Issue热度、跨开发者协同度、更新频率三维度排序*

---
## 1. 热门 Skills 排行（关注度Top 6）
| 排序 | Skill名称 | PR链接 | 功能说明 | 社区讨论热点 | 当前状态 |
|------|-----------|--------|----------|--------------|----------|
| 1 | skill-creator 全链路评估修复 | https://github.com/anthropics/skills/pull/1298 | 修复技能评估脚本`run_eval.py`永远返回0%召回的根因，打通技能描述自动优化全流程 | 关联Issue #556收到10+独立用户复现反馈，该bug直接导致所有技能自动优化机制失效，是当前社区影响面最广的阻塞性问题 | OPEN |
| 2 | document-typography 排版质量控制 | https://github.com/anthropics/skills/pull/514 | 自动检测AI生成文档的孤行、寡行、编号错位等常见排版问题，输出符合正式出版规范的文档 | 用户普遍反馈Claude原生生成的商务、学术文档排版不合格，是覆盖所有文档类场景的通用增强能力 | OPEN |
| 3 | ODT 开放办公文档处理 | https://github.com/anthropics/skills/pull/486 | 支持OpenDocument格式（.odt/.ods）的创建、模板填充、解析转HTML，完全适配LibreOffice生态 | 填补现有仅支持私有DOCX格式的空白，满足大量开源办公软件用户的文档处理诉求 | OPEN |
| 4 | 技能质量&安全双分析仪 | https://github.com/anthropics/skills/pull/83 | 元技能，从结构文档、运行安全等5个维度自动扫描社区提交的第三方Skill，输出质量评级 | 解决官方仓库缺少自动化Skill审核工具的痛点，应对社区技能冒用官方命名空间的安全风险 | OPEN |
| 5 | testing-patterns 全栈测试规范 | https://github.com/anthropics/skills/pull/723 | 覆盖单元测试、React组件测试、集成测试全栈的最佳实践指引，内置测试反模式避坑规则 | 开发者用户普遍反馈Claude原生生成的测试用例冗余、覆盖率低、不符合团队规范，该技能大幅提升测试生成质量 | OPEN |
| 6 | AppDeploy 全栈应用一键部署 | https://github.com/anthropics/skills/pull/360 | 直接在Claude工作流内完成全栈Web应用的打包、部署，生成公网可访问URL，管理版本迭代 | 打通代码生成到上线的最后一公里，无需切换外部工具，覆盖独立开发者、创业团队的快速验证需求 | OPEN |

---
## 2. 社区需求趋势
从高热度Issue中提炼出当前4大核心需求方向：
1. **安全合规类**：最高热度Issue#492聚焦Skill命名空间信任边界风险，衍生出Agent治理规则、企业内部文档（SharePoint等）权限可控处理、恶意Skill自动扫描等强诉求，企业用户对Skill安全的关注度已经超过功能新增。
2. **组织协作类**：Issue#228提出的Org级共享技能库需求热度最高，用户强烈希望替代当前手动上传.skill文件的低效分发模式，实现团队内技能一键共享、权限管控。
3. **跨平台/生态兼容类**：Windows全链路适配需求占开发类反馈的60%，同时出现大量AWS Bedrock适配、Skill对接MCP（模型上下文协议）的诉求，打破当前Claude Skills仅能在Anthropic原生环境运行的绑定限制。
4. **上下文增效元技能类**：支持跨对话持久记忆、符号化压缩上下文、代码库自动审计这类不面向具体业务场景、直接提升Claude本身上下文利用效率的工具类Skill提案收到最多正向反馈。

---
## 3. 高潜力待合并 Skills（近期待落地）
以下PR经过多开发者验证、覆盖高频痛点、更新活跃，极有可能在未来1~2个版本合并进主仓库：
1. **skill-creator 全平台兼容性修复矩阵**：聚合#1298、#1050、#1099、#1323四个PR的修复内容，覆盖Windows管道读取错误、触发检测失效、并行工作器异常等所有已知阻塞性bug，最近更新时间为2026-06-25，已经完成多轮交叉验证。
2. **YAML元数据预校验工具**：#539、#361两个PR互补，覆盖SKILL.md配置中所有YAML特殊字符的提前检测，避免之前未加引号的描述字段被静默解析为字典导致Skill失效的问题，已经通过200+样例测试。
3. **仓库贡献指南 CONTRIBUTING.md**：#509 PR补齐了官方仓库缺失的贡献流程规范，将GitHub社区健康度评分从25%提升到100%，已经关闭对应需求Issue#452，落地优先级极高。
4. **DOCX书签冲突修复**：#541 PR解决了DOCX技能生成带跟踪修改的文档时，ID和原有书签冲突导致文件损坏的高频bug，已经收集到15+份用户有效复现报告，修复方案达成共识。

---
## 4. Skills 生态洞察
当前Claude Code Skills社区的核心诉求是：在优先补齐核心开发工具链（skill-creator）的稳定性、安全性、跨平台兼容性的基础上，快速覆盖办公文档处理、企业级协作、全链路开发提效三类高频场景，同时推动Skill体系和更广泛的AI Agent生态标准互通。

---

# Claude Code 社区动态日报 2026年06月28日
数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
过去24小时项目无正式版本推送，社区高互动反馈集中在两类高频故障：Windows平台401认证错误存量问题再次引发21条用户讨论，以及多名开发者集中反馈安全过滤机制批量误拦截开源无人机开发、固件逆向分析等合法工作流。全量更新的3条PR均为工具链小范围优化，无核心功能合并。
当前社区核心诉求集中在跨平台认证bug修复、安全白名单机制补全、不同客户端权限规则统一三个方向。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 社区热点 Issues（精选10条）
1. **[BUG] Windows平台401无效认证凭证报错** [#69706](https://github.com/anthropics/claude-code/issues/69706)
   重要性：该问题是当前评论数最高的存量开放bug，累计21条回复、10个点赞，大量Windows用户反馈会话运行中随机弹出认证失效提示，强制打断工作流，目前官方仍未给出根因修复方案。
2. **[BUG] 桌面端Google Drive连接器误跳转注册页，重复创建账号锁死付费Max用户** [#51002](https://github.com/anthropics/claude-code/issues/51002)
   重要性：涉及付费用户资产安全，累计12条讨论，同邮箱下的Max订阅权益被新账号覆盖，大量用户反馈找回流程成本极高。
3. **[BUG] Linux平台Claude持续无视用户指令、违反预设规则** [#57200](https://github.com/anthropics/claude-code/issues/57200)
   重要性：属于核心模型逻辑bug，累计9条回复、5个点赞，直接影响生产环境任务的可控性，开发者无法保证Claude输出符合预设流程。
4. **[BUG] 安全过滤误拦截合法消费级无人机固件USB协议分析** [#71910](https://github.com/anthropics/claude-code/issues/71910)
   重要性：是当日集中爆发的10余条同类型误拦截bug的典型代表，所有涉及无人机相关的合法开发、文档撰写、测试调试工作全部被安全策略强制阻断，完全中断正常开发流程。
5. **[BUG] 401认证报错后直接损坏claude.json配置文件** [#70002](https://github.com/anthropics/claude-code/issues/70002)
   重要性：叠加了Linux、VS Code多平台适配问题，认证失败不会提示用户重登，反而直接将本地配置文件写坏，用户必须手动修复JSON才能恢复使用。
6. **[BUG] VS Code扩展聊天标签拖入新窗口后AskUserQuestion UI永久消失** [#61665](https://github.com/anthropics/claude-code/issues/61665)
   重要性：影响IDE日常交互体验，用户拆分窗口后无法再唤起用户确认弹窗，只能重启整个VS Code会话恢复。
7. **[FEATURE] 静态分析RAG原语：预注入仓库图可降低首轮token消耗40.9%** [#53224](https://github.com/anthropics/claude-code/issues/53224)
   重要性：提交者公开了完整A/B测试数据，证明当前Claude Code的Glob-Grep-Read常规仓库遍历流程存在大量冗余token浪费，该优化方案经过实测可显著降低大仓库下的首请求等待时长与token成本。
8. **[BUG] macOS 2.1.190+版本过期SSL证书校验功能失效** [#71663](https://github.com/anthropics/claude-code/issues/71663)
   重要性：属于安全回归bug，最新版本客户端无法识别过期/伪造的SSL证书，直接暴露明文传输的账号、代码数据风险。
9. **[BUG] Opus 4.7 xHigh模式在Colossus-1容量扩容后性能大幅下降** [#57692](https://github.com/anthropics/claude-code/issues/57692)
   重要性：累计3个点赞，重度推理用户反馈开启最高算力档位后推理速度、输出质量均不如扩容前，高付费用户权益受损。
10. **[BUG] Windows平台Claude in Chrome MCP服务在Chrome未启动时直接卡死整个CLI会话** [#71922](https://github.com/anthropics/claude-code/issues/71922)
    重要性：MCP生态稳定性问题，用户启动项目时只要Chrome没有运行，整个终端就会无响应，必须手动启动Chrome才能恢复。

## 4. 重要 PR 进展
过去24小时仅更新3条PR，无大规模功能迭代：
1. [#68787](https://github.com/anthropics/claude-code/pull/68787) 修复脚本优化：给`edit-issue-labels.sh`增加无参数调用时的错误提示，解决之前脚本静默退出、运维人员无法排查CI执行失败原因的问题。
2. [#71798](https://github.com/anthropics/claude-code/pull/71798) 空内容提交，无实际功能改动，属于用户误提交的无效PR。
3. [#71530](https://github.com/anthropics/claude-code/pull/71530) 个人fork仓库同步上游main分支的合并PR，不影响主仓库生产代码。

## 5. 功能需求趋势
从今日更新的Issues中提炼出社区最关注的4类需求方向：
1. **开发效率优化**：大量开发者呼吁新增预注入仓库静态图的RAG机制，减少Claude Code冗余的文件遍历操作，大幅降低大仓库场景下的首轮token消耗。
2. **交互体验细节打磨**：包括VS Code编辑事件同步、TUI可点击选项防误触、MCP服务异常场景优雅降级等细节体验优化诉求占比持续提升。
3. **安全过滤白名单机制**：大量安全研究、工控/无人机开发从业者诉求新增自定义场景豁免功能，避免合法技术工作被通用安全策略误拦截。
4. **权限体系透明化**：用户要求公开不同客户端（桌面端/CLI/VS Code/移动端）的额度分配、计费规则差异，解决当前跨端能力不一致的信息差问题。

## 6. 开发者关注点
今日开发者反馈的核心痛点集中在4个方面：
1. 跨平台认证体系bug高发，Windows/Linux平台下的401认证报错不仅没有完全修复，甚至衍生出损坏本地配置文件的次生问题，存量故障修复进度慢。
2. 内容安全过滤假阳性问题集中爆发，大量企业IT运维、固件逆向、开源硬件开发的合法工作全部被误拦截，直接阻断正常生产流程。
3. 多客户端权益规则不统一，Max付费用户经常遇到桌面端可以免费用的高算力模型，CLI端却要求额外按量付费的情况，大量用户在不知情的情况下产生超额账单。
4. MCP扩展生态稳定性不足，当前版本下频繁出现MCP服务加载失败、调用超时直接卡死整个会话的问题，严重影响基于MCP搭建自定义工作流的开发者的使用体验。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-06-28
数据来源：github.com/openai/codex

---

## 1. 今日速览
今日Codex官方连续发布两个Rust SDK alpha预览版本，用于0.143.0正式版上线前的兼容性验证。社区热度最高的焦点为近期gpt-5.5模型速率限制消耗异常暴涨10-20倍的用户集中投诉，官方24小时内密集提交了近20个高优先级PR，重点修复MCP认证可靠性、Windows客户端兼容性等开发者反馈的高频痛点。

## 2. 版本发布
今日共推出2个Rust语言绑定的预览版本，均为0.143.0正式版的前置测试包，暂未公示完整更新日志，面向开发者开放体验验证：
- `rust-v0.143.0-alpha.27`
- `rust-v0.143.0-alpha.28`

## 3. 社区热点 Issues
挑选10个高关注度、高影响力的更新Issue：
1.  **[#28879](https://github.com/openai/codex/issues/28879) GPT-5.5 Plus计划速率限制消耗暴涨10-20倍**：累计185条评论、332个点赞，为当前热度最高的bug。大量用户反馈6月16日之后原本可以支持20+次对话的5小时配额，现在仅2-3次对话就被耗尽，token消耗和配额扣除的换算规则完全不透明，严重影响正常使用。
2.  **[#11023](https://github.com/openai/codex/issues/11023) 需求：Linux版Codex桌面客户端**：累计130条评论、648个点赞，是全站呼声最高的功能请求。大量开发者反馈Mac端Codex功耗过高无法长期使用，迫切需要原生Linux客户端承接开发工作流。
3.  **[#28224](https://github.com/openai/codex/issues/28224) Codex SQLite日志年写入量可达640TB，快速消耗SSD寿命**：累计92条评论、398个点赞，该严重性能问题近期已被官方修复，3个合并后的PR降低了85%的无效日志写入，大量受SSD磨损困扰的用户确认更新后问题得到缓解。
4.  **[#2847](https://github.com/openai/codex/issues/2847) 需求：敏感文件排除机制**：累计79条评论、414个点赞，用户要求新增类似`.gitignore`的`.codexignore`规则，支持全局和仓库级配置禁止Codex读取密钥、内部配置等敏感文件，避免隐私数据上传到大模型，是企业级用户优先级最高的安全需求。
5.  **[#9203](https://github.com/openai/codex/issues/9203) 需求：恢复TUI的/undo命令**：累计50条评论、300个点赞，大量用户反馈Codex经常误删没有被Git追踪的文件，之前的undo回滚功能下线后没有替代方案，已经造成多起用户代码损失事件。
6.  **[#29955](https://github.com/openai/codex/issues/29955) 配额瞬间清空bug**：累计29条评论，Pro*5订阅用户反馈发送1条普通请求就直接耗光100点全部积分和5小时使用配额，属于严重的计费逻辑异常。
7.  **[#29072](https://github.com/openai/codex/issues/29072) Windows端apply_patch功能全部失效**：累计22条评论、19个点赞，Windows沙箱启动程序的包路径解析错误，导致所有代码补丁写入操作失败，大量Windows用户完全无法使用Codex的代码修改功能。
8.  **[#24389](https://github.com/openai/codex/issues/24389) 关闭无响应子代理时线程卡死数小时**：累计14条评论，多代理场景下父线程调用`multi_agent_v1.close_agent`会无限阻塞，属于多工作流模式下的核心稳定性缺陷。
9.  **[#30224](https://github.com/openai/codex/issues/30224) 使用自定义内部头返回不支持该模型的错误**：累计51条评论、18个点赞，高级开发者使用`X-OpenAI-Internal-Codex-Responses-Lite`自定义路由头时直接触发模型不兼容报错，影响自定义模型调用链路。
10. **[#18018](https://github.com/openai/codex/issues/18018) 已关闭：周限额耗尽后Codex仍可运行但不扣除剩余积分**：累计13条评论，该逻辑异常会导致计费统计混乱，官方已完成修复，避免后续出现用户计费纠纷。

## 4. 重要 PR 进展
挑选10个核心功能/修复类的高优先级PR：
1.  **[#29691](https://github.com/openai/codex/pull/29691) 插件市场运行时源策略强制**：已合并，新增企业级管控能力，可通过后台策略自动禁用未在白名单内的已安装插件，大幅提升企业场景下的插件生态安全性。
2.  **[#30384](https://github.com/openai/codex/pull/30384) 提升app-server接口超时时间**：待合并，将外部请求的读取超时从5秒提升到10秒，解决网络质量较差地区的请求被意外中断的问题。
3.  **[#30269](https://github.com/openai/codex/pull/30269) 关闭Rendezvous WebSocket的Nagle算法**：待合并，移除远程执行链路的TCP延迟聚合逻辑，大幅降低远程开发场景下的交互延迟。
4.  **[#30291](https://github.com/openai/codex/pull/30291) 开放环境信息RPC接口**：已合并，客户端可以提前获取远端执行环境的Shell类型、工作目录属性，方便用户在跨设备/跨操作系统场景下选择合适的运行环境。
5.  **[#30327](https://github.com/openai/codex/pull/30327) 核心层稳定合成调用输出ID**：已合并，解决重试场景下对话ID频繁变动导致的上下文状态错乱问题，提升多轮对话的一致性。
6.  **[#30292](https://github.com/openai/codex/pull/30292) MCP OAuth共享凭证存储序列化**：待合并，解决多进程并发读写OAuth凭证导致的竞态冲突，大幅降低MCP服务的认证失败概率。
7.  **[#30302](https://github.com/openai/codex/pull/30302) 自定义工具调用保留命名空间**：已合并，修复对话重放场景下自定义工具标识丢失的bug，提升第三方自定义工具调用的稳定性。
8.  **[#30226](https://github.com/openai/codex/pull/30226) MCP服务恢复后自动更新应用指引**：待合并，修复MCP中途从不可用恢复后，大模型不知道可以调用对应工具的问题，无需重启对话即可恢复全功能。
9.  **[#29017](https://github.com/openai/codex/pull/29017) MCP OAuth刷新操作所有权序列化**：待合并，避免多并发任务同时刷新同一个token导致的凭证直接失效问题。
10. **[#30293](https://github.com/openai/codex/pull/30293) MCP OAuth刷新事务序列化**：待合并，进一步完善OAuth全流程的并发保护机制，基本解决MCP认证全链路的竞态bug。

## 5. 功能需求趋势
从当日更新Issue中提炼出社区最高优先级的需求方向：
1.  **跨平台客户端覆盖**：Linux原生桌面端需求的点赞数远高于其他所有功能，是当前社区最期盼推出的新特性。
2.  **本地数据安全管控**：敏感文件排除机制收到400+点赞，企业级用户的隐私防护需求正在快速增长。
3.  **操作可回溯能力**：恢复undo回滚功能的诉求有300+点赞，用户对Codex自动修改本地文件的风险容忍度极低，操作可追溯、可回滚是普遍要求。
4.  **MCP生态稳定性**：官方今日集中提交了近10个MCP OAuth相关的修复PR，说明MCP第三方工具集成的可靠性是下一阶段核心演进方向。

## 6. 开发者关注点
当前开发者反馈的共性痛点：
1.  **速率限制透明度极差**：近期大量配额异常消耗的投诉说明官方没有对外公示token到配额的换算规则，用户完全无法预估自己的使用量，感知非常差。
2.  **Windows平台体验断层**：24小时更新的Issue中近1/3是Windows平台专属bug，覆盖沙箱故障、进程残留、拼写检查失效、更新后无法重启等多个场景，Windows端的体验远落后于macOS和Linux。
3.  **自动操作可控性不足**：大量用户反馈Codex默认自动执行代码修改、Shell命令，没有逐次确认选项，容易造成非预期的文件改动和线上风险。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-28
数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
过去24小时无新版本正式发布，维护团队集中跟进了30个高优先级存量Issue的迭代状态，同时新上线18个PR覆盖安全加固、核心Bug修复、体验升级三大方向。其中备受用户诟病的代理无感知越权操作、shell执行卡住等高频痛点迎来针对性修复，多模态粘贴、评测自动化等功能也取得实质性进展。

## 2. 版本发布
过去24小时无最新正式Release。

## 3. 社区热点 Issues
挑选10个最高关注度的迭代项：
1. **#21409 通用代理无理由挂死** [链接](https://github.com/google-gemini/gemini-cli/issues/21409)
   重要性：8个评论、8个点赞，是当前用户反馈最集中的P1级Bug，简单的新建文件夹这类轻量操作也会触发代理无限卡顿，只有手动指定不调用子代理才能临时规避，覆盖所有普通用户日常使用场景。
2. **#22323 子代理达到最大回合数后误报任务成功** [链接](https://github.com/google-gemini/gemini-cli/issues/22323)
   重要性：P1级核心Bug，子代理耗尽运行回合后会隐藏中断状态，向主代理返回"目标完成"的错误结论，完全掩盖分析失败的事实，误导用户判断代码库排查结果。
3. **#19873 基于零依赖OS沙箱释放Gemini 3原生bash能力** [链接](https://github.com/google-gemini/gemini-cli/issues/19873)
   重要性：P2级大型增强规划，针对Gemini 3模型原生训练适配POSIX工具的特性，在不新增依赖、不降低安全等级的前提下最大化释放bash链操作的效率，是官方下一代Agent能力的核心方向。
4. **#24353 组件级鲁棒评估体系EPIC** [链接](https://github.com/google-gemini/gemini-cli/issues/24353)
   重要性：跟踪全链路行为评测体系的落地，目前已积累76个评测用例覆盖6个Gemini模型，后续将实现每个组件的独立自动化校验，大幅降低新版本引入回归Bug的概率。
5. **#25166 shell命令执行完成后仍卡在"等待用户输入"状态** [链接](https://github.com/google-gemini/gemini-cli/issues/25166)
   重要性：P1级核心层Bug，3个用户点赞反馈，执行完不需要交互的简单CLI命令后，Gemini CLI会错误地认为进程还在运行，永久挂起无法继续后续操作。
6. **#26525 Auto Memory模块增加确定性脱敏、减少自动日志上报** [链接](https://github.com/google-gemini/gemini-cli/issues/26525)
   重要性：高优先级安全类Bug，当前Auto Memory在将本地会话 transcript 上传到模型上下文之后才做敏感信息擦除，存在密钥泄露风险，大量企业用户反馈该问题影响生产环境落地。
7. **#21968 代理不会主动调用已配置的自定义技能和子代理** [链接](https://github.com/google-gemini/gemini-cli/issues/21968)
   重要性：用户普遍反馈配置的gradle、git等自定义技能完全不会被代理主动触发，只有手动明确指令时才会调用，自定义扩展能力的实用性大幅下降。
8. **#21983 Browser子代理在Wayland环境下无法正常运行** [链接](https://github.com/google-gemini/gemini-cli/issues/21983)
   重要性：P1级适配Bug，所有使用Linux Wayland桌面环境的开发者都无法使用浏览器自动化子代理，覆盖大量后端开发用户群体。
9. **#22745 AST感知的文件读取、搜索、代码映射能力评估EPIC** [链接](https://github.com/google-gemini/gemini-cli/issues/22745)
   重要性：如果落地可实现精准按方法边界读取代码，减少无效token消耗、降低多余工具调用回合数，据评估可提升代码库分析效率30%以上。
10. **#22093 v0.33.0版本后子代理无视配置自动运行** [链接](https://github.com/google-gemini/gemini-cli/issues/22093)
    重要性：用户反馈明确配置了禁用所有Agent模式后，升级到v0.33.0后generalist子代理仍然会自动启动，带来非预期操作的隐私和安全风险。

## 4. 重要 PR 进展
挑选10个最高价值的提交：
1. **#27859 新增终端原生拖放图片、Ctrl/Cmd+V剪贴板图片粘贴能力** [链接](https://github.com/google-gemini/gemini-cli/pull/27859)
   进展：已关闭即将合并，补齐Gemini CLI多模态交互的体验短板，用户无需手动输入路径，直接拖拽终端里的图片或者粘贴截图就能传入CLI进行分析。
2. **#28175 安全加固：shell参数展开操作要求用户显式确认** [链接](https://github.com/google-gemini/gemini-cli/pull/28175)
   内容：交互模式下所有带shell参数展开逻辑的命令都会弹出用户确认提示，非交互/YOLO模式下直接禁止这类高危操作，新增了对应回归测试用例。
3. **#28178 安全修复：Bot补丁制品必须经过显式审批才能进入发布流程** [链接](https://github.com/google-gemini/gemini-cli/pull/28178)
   内容：在CI发布链路增加 fail-closed 校验，只有通过人工审批标记的补丁才能被发布任务消费，避免恶意/未经过审的自动化补丁被直接发布到生产版本。
4. **#28169 新增`eval:coverage`评测覆盖率统计命令** [链接](https://github.com/google-gemini/gemini-cli/pull/28169)
   内容：新增npm run eval:coverage指令，自动交叉匹配工具注册表和评测用例库，生成内置工具的评测覆盖报表，填补之前评测体系的可视化管控空白。
5. **#28171 修复代理初始方案失败后静默扩大操作范围的Bug** [链接](https://github.com/google-gemini/gemini-cli/pull/28171)
   内容：修复用户要求代理仅检查指定行范围时，代理遇到问题就无通知读取全文件、运行额外脚本的越权行为，所有超出用户指定范围的操作都会先弹出确认提示。
6. **#28094 修复A2A服务用户与工作区配置浅合并的Bug** [链接](https://github.com/google-gemini/gemini-cli/pull/28094)
   内容：之前配置加载使用对象展开浅合并，导致工作区配置里的tools、telemetry等嵌套字段会被用户配置完全覆盖，修复后改为深度合并逻辑，符合多配置层叠加的预期。
7. **#27870 限制待处理工具响应的最大容量** [链接](https://github.com/google-gemini/gemini-cli/pull/27870)
   内容：P1级核心修复，超大工具返回结果之前会导致待处理函数响应队列溢出直接崩溃，新增容量上限校验，避免单条大结果拖垮整个CLI进程。
8. **#28053 修复@前缀路径的文件读取"找不到文件"Bug** [链接](https://github.com/google-gemini/gemini-cli/pull/28053)
   内容：解决模型传入带@前缀的路径（比如@policies/test.txt）时，文件系统工具解析逻辑错误返回不存在的问题，同时兼容全量macOS平台的测试用例。
9. **#28055 修复提示词模板替换破坏$字符序列的Bug** [链接](https://github.com/google-gemini/gemini-cli/pull/28055)
   内容：之前模板替换逻辑会篡改技能、子代理描述里的$$、$&等特殊美元序列，导致自定义扩展的提示词被破坏，该修复完全保留原始字符串里的美元字符内容。
10. **#28167 实现Caretaker运维服务的Egress Cloud Run模块** [链接](https://github.com/google-gemini/gemini-cli/pull/28167)
    内容：落地自动化运维的云服务组件，接收Triage Worker的事件指令后自动执行GitHub侧的 Issue 同步、标签管理等运维操作，降低维护团队的重复工作量。

## 5. 功能需求趋势
从本次更新的Issue可以提炼出社区最关注的4个核心迭代方向：
1. **安全与沙箱体系升级**：围绕Gemini 3的原生bash操作特性，在保障不损失能力的前提下搭建多层安全管控，覆盖危险命令二次确认、敏感信息自动脱敏、高危操作沙箱隔离三大场景。
2. **子代理全链路能力增强**：补全子代理的错误状态上报、运行轨迹追溯、分享导出、自定义扩展兼容等缺失能力，释放多代理协作的生产实用性。
3. **代码分析效率优化**：全链路落地AST感知的代码读取、搜索、映射能力，降低无效token消耗和多余工具调用，提升大代码库的分析速度。
4. **自动化评测体系完善**：搭建组件级的全量行为评测和覆盖率统计体系，保障高频迭代过程中的版本稳定性，减少回归Bug。

## 6. 开发者关注点
当前开发者反馈的高频痛点集中在四个维度：
1. **核心体验稳定性差**：代理无理由挂死、shell命令执行完后假等待等高频发生的卡顿问题，已经严重影响开发者日常使用的流畅度。
2. **权限管控不透明**：代理经常无视配置自动启动、超出用户指定操作范围，没有显式提示就执行高风险操作，带来误改文件、数据泄露的顾虑。
3. **自定义扩展兼容不足**：配置好的自定义技能/子代理不会被主动调用、软链接格式的自定义代理配置无法识别，扩展生态的实用性大打折扣。
4. **隐私安全风险**：Auto Memory模块的日志未做前置脱敏、敏感内容提前上传到模型上下文的问题，让大量企业级开发者不敢在生产敏感环境下使用。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-06-28）
数据来源：github.com/github/copilot-cli

---

## 1. 今日速览
今日仓库无新正式版本发布，过去24小时共更新16条活跃Issue、3条活跃PR，核心反馈集中在近期v1.0.65/66版本迭代带来的多平台兼容性回归问题。跨平台用户集中反馈Ubuntu认证、Windows剪贴板、macOS交互等场景的体验缺陷，多个高赞历史功能诉求也重新获得社区跟进。

## 2. 版本发布
过去24小时暂无新版本发布。

## 3. 社区热点 Issues
精选10个最高关注度条目：
| Issue编号 | 核心内容 | 重要性说明 | 社区热度 | 链接 |
| --- | --- | --- | --- | --- |
| #2165 | Ubuntu密钥链支持功能损坏，官方排错文档描述也与实际系统行为不符 | 直接影响Linux平台用户登录认证流程，属于核心可用性bug | 20个点赞、2条评论，是当前热度最高的存量反馈 | [github/copilot-cli Issue #2165](github/copilot-cli Issue #2165) |
| #1799  | 新增alt-screen终端渲染功能引发大量异常，用户要求提供开关切回旧模式 | 新版终端特性强制上线引发大量显示适配问题，用户可感知影响范围广 | 7个点赞、10条评论，是近期用户讨论最集中的体验争议点 | [github/copilot-cli Issue #1799](github/copilot-cli Issue #1799) |
| #3958 | Windows平台v1.0.66版本无法启动后缀为.bat/.cmd的stdio MCP服务，属于1.0.65版本后引入的回归bug | 直接阻断依赖自定义批处理MCP扩展的开发者 workflow | 1条评论，刚提交就被核心维护者标记高优先级 | [github/copilot-cli Issue #3958](github/copilot-cli Issue #3958) |
| #3949 | Windows11平台复制功能完全失效，Copilot提示复制成功但剪贴板为空 | 属于高频使用的核心交互bug，后续已出现多条重复反馈说明影响用户基数大 | 2条评论 | [github/copilot-cli Issue #3949](github/copilot-cli Issue #3949) |
| #3963 | 新增功能需求：在状态栏显示会话保留/过期时间 | 大量用户反馈本地会话无故被清理，会话生命周期不透明是长期未解决的痛点 | 新提交已被标记triage分类 | [github/copilot-cli Issue #3963](github/copilot-cli Issue #3963) |
| #3955 | macOS平台拖放文件到输入框附加文件的功能失效，属于回归bug | 直接打断macOS用户快速上传上下文的常用操作流程 | 新提交的平台专属反馈 | [github/copilot-cli Issue #3955](github/copilot-cli Issue #3955) |
| #2778 | 呼吁将Claude Code的/btw后台上下文快速提问功能移植到Copilot CLI | 属于高期待的竞品特性移植需求，有望大幅提升长会话交互效率 | 2条评论 | [github/copilot-cli Issue #2778](github/copilot-cli Issue #2778) |
| #3959 | TUI界面删除文本后残留幽灵字符，无法正常清空终端渲染区域 | 属于全平台通用的终端渲染bug，影响所有用户输入体验 | 新提交的体验类反馈 | [github/copilot-cli Issue #3959](github/copilot-cli Issue #3959) |
| #3672 | 新增自定义/voice语音听写切换快捷键的功能需求 | 语音功能正式上线后，用户对个性化配置的诉求快速上升 | 近期更新的体验优化需求 | [github/copilot-cli Issue #3672](github/copilot-cli Issue #3672) |
| #3874 | VS Code代理的preToolUse钩子拦截逻辑不生效 | 直接影响插件开发者自定义权限管控的核心扩展能力 | 1条评论，涉及插件生态核心机制 | [github/copilot-cli Issue #3874](github/copilot-cli Issue #3874) |

## 4. 重要 PR 进展
过去24小时共更新3条PR，均为待合并状态：
1. **#3928 新增.gitignore和设置配置规则**：提交者优化了自定义配置目录的文件管理逻辑，完善配置文件的全局忽略能力，[链接](github/copilot-cli PR #3928)
2. **#570 补充macOS安装指引到README**：由Copilot代理自动生成的WIP PR，沉寂半年后今日重新激活更新，有望补全官方文档缺失的平台专属安装说明，[链接](github/copilot-cli PR #570)
3. **#3737 Jigg Empire AI 集成尝试**：第三方大模型生态适配的探索性PR，目前处于初始开发阶段，[链接](github/copilot-cli PR #3737)

## 5. 功能需求趋势
从存量Issue可提炼出当前社区最关注的4大方向：
1. **跨平台兼容性优先**：三大桌面平台均爆出多起近期版本引入的回归bug，社区对版本迭代后的全平台兼容性校验的诉求远高于新特性落地速度
2. **高体验特性跨端移植**：用户普遍期待将竞品中体验优秀的上下文快捷交互、无侵入提问等特性引入Copilot CLI
3. **MCP生态稳定性提升**：近期多起MCP服务启动失败、异常退出的反馈，说明开发者对扩展生态的运行稳定性要求已成为核心关切
4. **产品逻辑透明化**：会话过期策略、配额归属规则等之前未公开的内部逻辑，用户明确要求可查、可感知

## 6. 开发者关注点
当前用户反馈集中暴露的核心痛点：
1. 连续两个小版本v1.0.65、v1.0.66爆出多起核心流程回归bug，覆盖认证、剪贴板、拖放、MCP启动等高频场景，开发者认为新版本的灰度测试环节存在明显缺失
2. 官方排错文档存在内容错误，Ubuntu密钥链故障的指引和实际系统行为不符，大幅提升用户自行排查问题的成本
3. 新增功能可配置性不足，新上线的alt-screen终端渲染能力强制启用没有开关、语音听写快捷键无法自定义，用户自主调整工作流的空间过小
4. 配额归属逻辑存在歧义，已有用户反馈接入自定义第三方模型提供商时仍被扣减GitHub官方AI配额，引发付费用户争议。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-28
> 项目地址：github.com/anomalyco/opencode

---

## 1. 今日速览
今日社区无正式版本发布，核心迭代集中在WSL跨系统路径兼容问题修复、多厂商新接入模型的兼容性校正两大方向。过去24小时共更新50条Issue与50条PR，高赞的加密支付、全量会话管理类功能需求获得大量用户响应，近20条积压PR通过自动化清理流程完成合并落地，覆盖TUI交互体验、服务端稳定性、数十款大模型适配等场景。

## 2. 版本发布
过去24小时无正式版本发布。

## 3. 社区热点 Issues（10条）
1.  **[最高赞需求] 新增OpenCode Go加密货币支付支持**：累计13条评论、24个点赞，大量非信用卡普及地区的用户提出扩展付费渠道诉求，降低订阅门槛。链接：https://github.com/anomalyco/opencode/issues/23153
2.  **TUI会话选择器仅展示近期会话**：累计9条评论、6个点赞，是长期反馈的体验痛点，大量用户无法检索半年前的历史会话，影响长期工作流回溯。链接：https://github.com/anomalyco/opencode/issues/13877
3.  **新增会话手动重命名功能**：累计8条评论，用户普遍反馈现有自动生成的会话标题无辨识度，希望支持自定义标识，替代默认的时间戳命名。链接：https://github.com/anomalyco/opencode/issues/25848
4.  **Windows桌面端向WSL服务发送UNC路径导致全量工具调用失败**：累计7条评论且已附临时解决方案，是Windows+WSL组合开发场景下最高频的崩溃问题，覆盖百万级WSL开发用户。链接：https://github.com/anomalyco/opencode/issues/19473
5.  **1.17.x版本在AMD Zen4 Linux环境下Bun触发SIGILL段错误**：累计6条评论、5个点赞，特定硬件环境下的核心崩溃问题，直接影响企业级自托管部署场景。链接：https://github.com/anomalyco/opencode/issues/33890
6.  **长运行服务端进程内存泄漏峰值达26.8GB**：累计5条评论，生产部署场景下的严重稳定性问题，现有方案只能通过每1.5天重启服务规避内存溢出。链接：https://github.com/anomalyco/opencode/issues/33213
7.  **桌面端v1.16.0错误转换WSL路径导致文件/会话列表异常**：累计6条评论，是最新版本桌面端的高影响BUG，和#19473同属WSL兼容线核心待解问题。链接：https://github.com/anomalyco/opencode/issues/30895
8.  **GLM-5.1提示缓存随机清零产生非预期成本尖峰**：累计4条评论、2个点赞，直接影响付费用户的使用成本，对比测试显示同场景下DeepSeek V4 Flash缓存表现完全稳定。链接：https://github.com/anomalyco/opencode/issues/31348
9.  **无法调用GitHub Copilot企业版内添加的第三方模型**：累计4条评论，影响大量付费企业用户的私有化模型接入能力。链接：https://github.com/anomalyco/opencode/issues/34030
10. **IDE扩展缺失会话管理UI**：用户反馈桌面端完全没有TUI的全量会话浏览、回溯能力，跨端体验断层严重。链接：https://github.com/anomalyco/opencode/issues/34232

## 4. 重要 PR 进展（10条）
1.  `fix(server): 路径校验新增非法目录拦截`：从根逻辑上拦截非当前服务实例所属的目录路径，直接解决#19473、#30895两大WSL路径兼容BUG。链接：https://github.com/anomalyco/opencode/pull/34256
2.  `feat(app): 新增WSL适配UI v2`：配套路径兼容能力，给Windows用户提供更直观的WSL工作流引导界面，新增全新加载组件。链接：https://github.com/anomalyco/opencode/pull/34233
3.  `fix(tui): 兼容管道stdin输入避免破坏UI交互`：一次性解决4条历史遗留的TUI无响应BUG，覆盖所有非TTY场景下的使用问题。链接：https://github.com/anomalyco/opencode/pull/34242
4.  `feat(tui): 新增tool_output_expanded_default配置项`：支持用户设置默认展开所有工具调用输出，适配需要完整查看执行日志的调试场景。链接：https://github.com/anomalyco/opencode/pull/34246
5.  `feat(app): 新增会话列表置顶头部特性`：首页会话列表滚动时"新建会话"按钮始终保持可见，优化长列表操作体验。链接：https://github.com/anomalyco/opencode/pull/34220
6.  `fix(console): 修正Zen订阅部分退款金额计算逻辑`：修复Stripe部分退款场景下余额抵扣错误问题，避免用户账户被重复扣费。链接：https://github.com/anomalyco/opencode/pull/34227
7.  `fix: 保留拖拽/粘贴附件的原始本地路径`：修复之前仅上传文件内容导致的工具无法读取本地关联路径问题，提升附件处理准确率。链接：https://github.com/anomalyco/opencode/pull/34234
8.  `fix(session): 兼容思考类模型的结构化输出要求`：取消强制`toolChoice: required`限制，解决大推理模型下结构化输出报错问题。链接：https://github.com/anomalyco/opencode/pull/29652
9.  `fix(tui): 非TTY环境下屏蔽转义字符输出`：解决CI、管道输出场景下的终端内容乱码污染问题。链接：https://github.com/anomalyco/opencode/pull/29601
10. `fix(auth): 损坏的auth.json自动降级为空配置`：避免配置文件写入中断导致程序直接崩溃，大幅提升启动容错率。链接：https://github.com/anomalyco/opencode/pull/29562

## 5. 功能需求趋势
1.  **全链路会话管理补齐**：用户集中提出全量历史会话检索、自定义重命名、桌面端专属会话UI等诉求，会话模块体验缺口是当前社区最高优先级的迭代方向。
2.  **全球支付渠道扩展**：加密货币等非主流支付方式的需求出现，指向面向全球用户的付费能力多样性迭代。
3.  **新模型适配速度升级**：NIM平台模型、国产大模型系列、Copilot企业版第三方模型的兼容需求集中爆发，社区对新模型上线后的适配响应速度要求持续提升。
4.  **WSL跨环境体验优化**：Windows+WSL开发组合的用户占比持续攀升，跨系统路径适配、交互引导成为桌面端迭代重点。

## 6. 开发者关注点
1.  **自托管生产场景稳定性差**：长运行服务内存泄漏、特定硬件下Bun段错误、长会话高CPU占用无响应是部署用户反馈最高的痛点，现有方案几乎都需要定期重启服务规避故障。
2.  **多模型兼容成本高**：新接入的思考类、多模态类模型经常出现非预期行为，比如无视觉能力模型误触发图片解析报错、提示缓存随机清零产生额外成本，用户强烈要求降低新模型的适配门槛。
3.  **跨端体验一致性缺失**：TUI、桌面端、IDE扩展三者的功能缺口差异大，同个核心能力在不同端的表现不一致，大量用户切换场景时出现操作断层。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-06-28
数据来源：github.com/badlogic/pi-mono

---

## 1. 今日速览
过去24小时Pi项目无正式版本发布，共更新26条Issue、9条Pull Request，集中闭环了一批长期反馈的高频体验Bug，同时多个面向扩展生态的新API正式合并落地。社区同步完成了刷量恶意第三方包的风险处置，排除了扩展生态的安全隐患。

## 2. 版本发布
过去24小时无新增正式Release。

## 3. 社区热点 Issues
共筛选10条高价值更新，覆盖体验、安全、开发场景核心需求：
| Issue编号 | 核心说明 | 重要性 | 链接 |
| --- | --- | --- | --- |
| #5825 | 开启`clear on shrink`设置后，Agent流式输出Markdown时会强制把滚动条拉到底，打断用户向上回溯阅读操作 | 目前讨论量最高的开放Bug，累计34条用户反馈，直接影响核心对话阅读体验 | https://github.com/earendil-works/pi/issues/5825 |
| #5763 | 各模型提供商SDK会吞掉网关/代理返回的非2xx错误响应体，不同服务商的403错误会返回完全不同的无意义提示，完全无法定位问题 | 全平台跨服务商通用问题，大幅升高网络异常排查成本 | https://github.com/earendil-works/pi/issues/5763 |
| #4106 | OpenCode Go源下的Qwen3.5 Plus、Qwen3.6 Plus、MiniMax M2.7三个模型返回404的历史Bug | 存在近2个月的模型适配问题，现已定位原因为内置模型定义字段错误，标记闭环 | https://github.com/earendil-works/pi/issues/4106 |
| #6129 | 第三方包`@hypabolic/pi-hypa`被举报通过刷安装量恶意引流，存在后续植入恶意代码风险 | 生态安全事件，社区已快速标记处置，避免普通用户安装风险包 | https://github.com/earendil-works/pi/issues/6129 |
| #6122 | 提出为Ctrl+G快捷键新增`externalEditor`自定义设置，不依赖系统环境变量`$VISUAL/$EDITOR` | 解决Windows下Git Bash+VS Code场景环境变量被锁、无法自定义外部编辑器的长期痛点，反馈者众多 | https://github.com/earendil-works/pi/issues/6122 |
| #6105 | v0.80.2版本下用户输入的反斜杠字符会被错误转义，显示为空双引号 | 核心输入层Bug，会导致用户输入特殊字符时代码片段、命令出现异常 | https://github.com/earendil-works/pi/issues/6105 |
| #4147 | 要求修改内部工具数组的实现逻辑，让`agent.state.tools`的变更可以实时同步到正在运行的Agent循环 | 扩展开发者的核心诉求，大幅降低自定义工具动态加载的开发复杂度，已完成重构标记闭环 | https://github.com/earendil-works/pi/issues/4147 |
| #6107 | 提出流式输出过程中输入`/reload`命令应该排队等待当前输出结束再执行，而不是直接丢弃命令 | 高频交互体验优化，解决用户来不及停止输出就触发重载时的操作无效问题 | https://github.com/earendil-works/pi/issues/6107 |
| #6127 | `--append-system-prompt`参数无法覆盖Coding Agent的默认身份设定 | 使用Pi作为RPC后端构建自定义Agent的二次开发者核心痛点，无法注入自定义人设 | https://github.com/earendil-works/pi/issues/6127 |
| #6124 | 输入天城文（Devnagri）字符会直接破坏TUI渲染 | 国际化场景Bug，影响南亚地区母语用户的正常使用 | https://github.com/earendil-works/pi/issues/6124 |

## 4. 重要 PR 进展
共筛选9条核心更新，覆盖Bug修复和新特性落地：
| PR编号 | 状态 | 核心内容 | 链接 |
| --- | --- | --- | --- |
| #5735 | 开放讨论 | 实现扩展重载请求的安全延迟机制，`ctx.reload()`现在可在所有扩展上下文调用，仅在Agent执行到安全边界时才实际触发重载 | https://github.com/earendil-works/pi/pull/5735 |
| #5678 | 开放讨论 | 为自定义消息新增`excludeFromContext`属性，标记后的消息可以正常渲染、持久化，但不会被送入LLM上下文，也不会参与会话压缩和分支摘要 | https://github.com/earendil-works/pi/pull/5678 |
| #6123 | 已合并 | 落地`externalEditor`配置项，用户可直接在`settings.json`中指定Ctrl+G唤起的外部编辑器路径，彻底规避环境变量兼容问题 | https://github.com/earendil-works/pi/pull/6123 |
| #6119 | 已合并 | 新增`pi.reportUsage()`扩展API，支持扩展把子代理产生的Token消耗上报到主会话统计面板的用量汇总中，解决之前子代理成本不可见的问题 | https://github.com/earendil-works/pi/pull/6119 |
| #5832 | 开放待合入 | 修复#5763问题，所有模型提供商现在会完整透传非2xx错误的响应体，网关侧的权限错误、限流错误都能直接展示具体原因 | https://github.com/earendil-works/pi/pull/5832 |
| #6115 | 开放讨论 | 新增TUI聊天边距的可配置选项，响应用户去除界面冗余留白的需求，目前项目组还在评估整体TUI配置方案的合理性 | https://github.com/earendil-works/pi/pull/6115 |
| #6099 | 已合并 | 修正Azure OpenAI的模型命名错误，把不存在的`gpt-5.2-chat-latest`重命名为官方实际提供的`gpt-5.2-chat` | https://github.com/earendil-works/pi/pull/6099 |
| #6111 | 已合并 | 新增扩展安装时的settings.json写入权限校验，权限不足时直接抛出明确错误，不再虚假提示安装成功 | https://github.com/earendil-works/pi/pull/6111 |
| #6109 | 已合并 | 修复二进制发行版执行`/reload`时重复执行扩展依赖模块的副作用、导致主题等资源重复注册的异常 | https://github.com/earendil-works/pi/pull/6109 |

## 5. 功能需求趋势
从当日更新Issue中提炼出4个最高频的社区关注方向：
1. **扩展生态API完善**：大量需求面向扩展开发者开放能力，包括自定义包管理器参数、扩展调用系统注册工具、子代理用量上报等，进一步释放扩展生态的可能性
2. **跨平台兼容性优化**：重点解决Windows平台下的特殊路径解析错误、环境变量不一致、非拉丁字符渲染等平台特有问题
3. **新模型适配跟进**：覆盖DiffusionGemma推理块渲染、OpenCode Mimo模型思考开关适配、Azure最新GPT-5.2系列模型命名修正等
4. **交互体验精细化**：流式操作命令排队、自定义TUI边距、滚动行为可控等细节体验优化，满足重度用户的自定义需求

## 6. 开发者关注点
当日反馈集中暴露出3个高频痛点：
1. **错误透明度不足**：此前全链路错误信息丢失严重，模型提供商吞错误体、扩展安装静默失败等问题让开发者排查问题成本极高，目前项目组正在系统性补全全链路错误提示
2. **扩展开发状态一致性差**：此前扩展重载时存在依赖副作用重复执行、状态丢失、事件触发时序错误等大量边缘问题，是目前扩展开发者反馈最多的踩坑点
3. **高阶自定义场景限制多**：使用Pi作为后端搭建自定义Agent、私有RPC服务的开发者，此前无法覆盖自定义人设注入、透传音频流、稳定调用导出等需求，目前项目组正在逐步放开相关底层API的权限。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-06-28）
数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日社区共更新30个Issue、50个PR，官方发布最新v0.19.2版本的夜间构建包，重点落地web_fetch接口的JSON降级兼容修复。全量动态覆盖高危安全补丁、核心体验问题修复、多端生态集成特性研发，同时集中暴露了Windows平台兼容性、多设备协作能力缺失两类高频用户痛点。

## 2. 版本发布
**v0.19.2-nightly.20260627.d93bec905**
- 核心层修复：web_fetch工具新增异常场景下的JSON格式降级兼容逻辑，避免网页抓取全量失败
- 发布流水线推进：自动化CI完成v0.19.2正式版的发布前校验，近期将推送正式稳定版本
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905

## 3. 社区热点 Issues（Top10）
| Issue编号 | 核心内容 | 重要性说明 | 链接 |
|---------|---------|---------|-----|
| #5834 | 高危P1漏洞：源删除接口存在路径遍历风险，恶意构造的slug参数可逃逸sources目录删除系统文件 | 最高优先级安全漏洞，官方已火速闭合全链路防护，是近期安全加固的核心动因 | https://github.com/QwenLM/qwen-code/issues/5834 |
| #5836 | 中文用户提出：任务清单、plans、memories当前全量存在本地`~/.qwen`目录，不支持Git跟踪，无法跨设备、跨团队共享项目状态 | 收到4条核心回复，是当前协作场景下呼声最高的需求，已经进入v0.20版本预研队列 | https://github.com/QwenLM/qwen-code/issues/5836 |
| #5922 | Windows平台下cua-driver.exe在任务完成、Qwen Code进入空闲后仍高CPU后台占用，被用户反馈类似病毒行为 | 大量Windows开发者复现该问题，官方已标记欢迎PR，属于Windows兼容性Top优先级修复项 | https://github.com/QwenLM/qwen-code/issues/5922 |
| #5756 | 默认8K输出上限（CAPPED_DEFAULT_MAX_TOKENS）会强制截断大文件生成内容，导致write_file工具反复重试进入死循环 | 影响所有大代码库重构场景，该问题修复后已直接将默认限制调整为模型原生声明的最大输出值，大幅减少无效重试 | https://github.com/QwenLM/qwen-code/issues/5756 |
| #5942 | Anthropic模型调用侧存在两处逻辑缺陷，导致prompt缓存命中率远低于Claude Code官方实现，用户成本异常升高 | 预计修复后可降低Anthropic调用成本最高60%，目前已标记为高优性能优化项 | https://github.com/QwenLM/qwen-code/issues/5942 |
| #5823 | `/loop`创建的cron定时任务运行时完全无可视化提示，模型自身也无法列出、停止已生成的定时任务，会出现后台静默自动运行任务的异常 | 严重影响调试体验，社区已同步推进前端展示、任务列表管理的配套特性 | https://github.com/QwenLM/qwen-code/issues/5823 |
| #5867 | 新增团队级共享自动记忆的需求：当前USER、PROJECT两层记忆都仅对本地用户私有，期望新增Git同步的团队共享记忆层 | 获得大量团队用户点赞，属于多人协作场景核心特性 | https://github.com/QwenLM/qwen-code/issues/5867 |
| #5677 | ACP（Agent通信协议）能力 gap 追踪，当前已经完成`/lsp`、权限管理接口适配 | 是Qwen Serve云化部署的核心里程碑事项，目前进度已完成80% | https://github.com/QwenLM/qwen-code/issues/5677 |
| #5936 | Claude Chrome扩展架构对比调研，指导Qwen Code新版Chrome扩展落地 | 承接之前的Chrome扩展复兴需求，避免架构走弯路 | https://github.com/QwenLM/qwen-code/issues/5936 |
| #5897 | 启动时反复弹出`unknown format "uint64" ignored in schema`报错，刷屏正常交互界面 | 影响所有MCP工具用户，体验极差，官方已计划在下个小版本修复 | https://github.com/QwenLM/qwen-code/issues/5897 |

## 4. 重要 PR 进展（Top10）
| PR编号 | 核心内容 | 价值说明 | 链接 |
|---------|---------|---------|-----|
| #5777 | 基于Daemon直连架构复兴Chrome扩展，不再依赖旧的Native Messaging方案，扩展作为本地qwen serve的瘦客户端 | 时隔半年后官方重启Chrome扩展研发，落地后可获得27个浏览器原生操作能力 | https://github.com/QwenLM/qwen-code/pull/5777 |
| #5856 | 桌面端新增语音听写功能，输入框工具栏新增麦克风按钮，支持实时波形展示、语音转文字输入 | 补齐桌面端和CLI/Web Shell的语音能力差异，解放开发者双手 | https://github.com/QwenLM/qwen-code/pull/5856 |
| #5919 | 完成Telegram Bot命令菜单注册，对接官方setMyCommands API，新增全局`/cancel`命令 |  Telegram机器人特性即将正式可用，支持远程接入Qwen Code能力 | https://github.com/QwenLM/qwen-code/pull/5919 |
| #5944 | 新增重复Shell巡检防护，当模型反复调用语义等价的git status、git diff等只读Shell命令时自动拦截 | 从根源解决Agent无意义空转、工具调用死循环问题 | https://github.com/QwenLM/qwen-code/pull/5944 |
| #5030 | 支持会话中断无感知续跑，崩溃、断连重启后不需要插入额外的`/continue`人工消息，直接从断点处恢复生成 | 大幅提升异常场景下的交互连贯性，体验贴近本地原生编辑器 | https://github.com/QwenLM/qwen-code/pull/5030 |
| #5938 | qwen serve启动优化：启用V8编译字节码缓存、延后CLI版本获取逻辑， daemon二次启动速度提升40%+ | 降低后台服务重启耗时，提升云部署场景下的弹性扩容效率 | https://github.com/QwenLM/qwen-code/pull/5938 |
| #5890 | `/loop`定时任务新增自动注入的`.qwen/loop.md`持久化任务文件 | 用户可直接编辑该文件修改循环任务指令，不需要停止重启定时任务 | https://github.com/QwenLM/qwen-code/pull/5890 |
| #4909 | 扩展安装能力升级，支持本地.zip/.tar.gz压缩包、远程归档URL直接安装扩展 | 大幅降低私有扩展分发成本，支持企业内网场景离线安装 | https://github.com/QwenLM/qwen-code/pull/4909 |
| #5903 | ACP协议新增`/cd`命令支持，远程客户端可直接通过HTTP接口修改会话工作目录 | 补齐ACP协议能力短板，推进Qwen Serve正式版上线 | https://github.com/QwenLM/qwen-code/pull/5903 |
| #5943 | Web Shell新增多层React错误边界，局部渲染崩溃不会导致全屏白屏 | 大幅提升Web嵌入场景下的可用性，避免单组件bug影响整体服务 | https://github.com/QwenLM/qwen-code/pull/5943 |

## 5. 功能需求趋势
1. **多端协作方向**：跨设备状态同步、Git级团队共享记忆、项目级todo持久化是当前社区需求最集中的方向，大量团队用户期望Qwen Code原生支持多人协作开发场景
2. **生态集成方向**：Chrome扩展、Telegram/钉钉群机器人、第三方扩展生态的接入需求爆发，开发者期望在更多入口直接调用Qwen Code能力
3. **成本与性能优化方向**：大模型调用缓存命中率提升、后台守护进程启动提速、冗余工具调用拦截等优化需求持续增长，降低token消耗、减少空转成本成为用户核心诉求
4. **安全合规方向**：路径遍历防护、参数合法性校验全链路加固、凭证安全增强成为开发团队重点投入方向，连续多个高优漏洞修复显示官方对安全性的重视度大幅提升

## 6. 开发者关注点
1. Windows平台兼容性问题集中爆发，近期连续出现后台驱动高占用、滚动条交互异常、UI边框裁剪等多个体验bug，Windows用户反馈占比远超其他平台
2. 大输出场景原生限制不合理，旧版默认8K输出上限导致大文件写入反复重试的痛点影响大量重度用户，相关修复目前正在全量验证落地
3. 后台调度任务可视化能力缺失，定时循环任务无统一的列表展示、管控入口，后台静默运行容易出现预期外的资源占用问题
4. 项目状态本地孤岛问题突出，当前所有记忆、任务、配置都存储在用户本地私有目录，不支持项目级Git跟踪，跨设备、跨团队同步的体验断点严重影响协作效率

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-06-28
仓库地址：github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览
今日无正式版本发布，核心开发团队集中推进v0.8.66、v0.9.0双里程碑的高优先级特性落地，20个核心PR全部合并上线。14条活跃issue完成迭代，社区关注度最高的Agent模式切换错乱、非开发场景自定义提示词、中文本地化省token等需求均获得实质性进展，对接Zed编辑器ACP生态的适配工作已进入收尾阶段。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 社区热点 Issues
共筛选10个高价值活跃Issue：
| Issue编号 | 核心内容 | 重要性与社区反馈 | 链接 |
| --- | --- | --- | --- |
| #3192 | 申请将项目纳入agentclientprotocol/registry官方列表 | 生态级需求，共10条评论，完成后可直接让Zed编辑器一键安装调用DeepSeek TUI，大幅拓展用户触达范围 | https://github.com/Hmbown/CodeWhale/issues/3192 |
| #2870 | 命令边界分阶段重构EPIC | v0.9.0版本核心架构升级项目，共9条评论，用于拆解大型重构任务为可逐步合并的小模块，降低架构迭代风险 | https://github.com/Hmbown/CodeWhale/issues/2870 |
| #3568 | 反馈plan与agent模式反复错乱的遗留bug | 高频用户痛点，共6条评论、1个点赞，用户已上传完整的对话复现实例，目前正在推进针对性修复 | https://github.com/Hmbown/CodeWhale/issues/3568 |
| #3495 | v0.8.66版本采用Moraine作为长期Agent内存后端 | 共4条评论，接入Apache2.0协议的开源内存工具后，可无损存储所有历史对话，提供全文语义召回能力，彻底解决长会话遗忘问题 | https://github.com/Hmbown/CodeWhale/issues/3495 |
| #1641 | 新增Agent工具调用失败兜底策略 | 共3条评论，解决目前Agent遇到搜索反爬、接口超时等问题时无限重试直到任务失败的痛点，大幅提升工具链可靠性 | https://github.com/Hmbown/CodeWhale/issues/1641 |
| #528 | 缓存最大化上下文模式：自动重读活跃文件替代摘要压缩 | 共3条评论，充分利用DeepSeek V4的输入缓存低价特性，减少不必要的上下文摘要损失，保留源码100%精度，同时降低token消耗 | https://github.com/Hmbown/CodeWhale/issues/528 |
| #3354 | 中文环境下加载中文技能描述节省token | 已关闭，共3条评论，是中文社区呼声最高的本地化需求，估算可降低中文场景下提示词占用的token数量30%以上 | https://github.com/Hmbown/CodeWhale/issues/3354 |
| #3638 | 开放核心系统提示词自定义能力 | 已关闭，共2条评论，用户反馈可将TUI拓展到文学创作、剧本围读等非开发场景，打破原本仅面向软件工程的使用边界 | https://github.com/Hmbown/CodeWhale/issues/3638 |
| #3358 | 内置基于Playwright的浏览器自动化工具 | 共1条评论，补足当前Web工具无法执行JS、点击页面元素、捕获DOM状态的能力，用户可直接通过Agent控制浏览器完成端到端操作 | https://github.com/Hmbown/CodeWhale/issues/3358 |
| #3388 | Token、缓存、上下文管控发布门禁EPIC | 共1条评论，为后续所有版本建立明确的性能基线，自动检测token消耗上涨、缓存命中率下降等回归问题，保障版本质量稳定性 | https://github.com/Hmbown/CodeWhale/issues/3388 |

## 4. 重要PR 进展
共筛选10个核心合并PR：
| PR编号 | 功能/修复内容 | 价值说明 | 链接 |
| --- | --- | --- | --- |
| #3696 | 支持从配置目录覆盖核心系统提示词 | 完全关闭#3638需求，用户无需修改源码或重新编译即可替换默认提示词，快速适配非开发场景 | https://github.com/Hmbown/CodeWhale/pull/3696 |
| #3702 | ACP协议支持会话/提示词增量流式输出 | 对接#3192需求，解决之前ACP适配器全量缓冲输出的问题，让Zed等编辑器可以实时渲染Agent输出内容 | https://github.com/Hmbown/CodeWhale/pull/3702 |
| #3701、#3703、#3705 | 三层工具调用失败兜底机制 | 完全落地#1641需求：首次失败提示针对性降级方案、多次失败自动避免重复调用、搜索失败自动提取域名单机跳转目标URL | https://github.com/Hmbown/CodeWhale/pull/3701 等 |
| #3697 | 实现缓存最大化上下文模式核心逻辑 | 落地#528需求，opt-in模式下自动将高频活跃文件的完整内容注入上下文，减少重复读取文件的工具调用开销 | https://github.com/Hmbown/CodeWhale/pull/3697 |
| #3690 | 实现locale感知的本地化技能描述 | 关闭#3354需求，根据系统语言自动加载对应语种的技能说明，中文场景下无需注入大段英文技能描述，大幅节省token | https://github.com/Hmbown/CodeWhale/pull/3690 |
| #3699 | 新增轻量插件系统，支持文件系统自动发现插件 | 提供完整的插件注册、启用禁用、生命周期管理能力，后续第三方开发者可直接打包自定义技能、MCP服务作为独立插件分发 | https://github.com/Hmbown/CodeWhale/pull/3699 |
| #3706 | 完成命令边界重构第4.2层工作 | 落地#2870 EPIC的核心阶段任务，完成命令注册表清理、架构文档补全、全链路验证，v0.9.0版本架构重构接近收尾 | https://github.com/Hmbown/CodeWhale/pull/3706 |
| #3693 | 新增Token/缓存/成本评分卡与回归检测 | 落地#3388的首个核心模块，自动记录版本基线数据，一旦发现新提交拉高token消耗、降低缓存命中率直接拦截合并 | https://github.com/Hmbown/CodeWhale/pull/3693 |
| #3700 | 验证器模块输出狩猎状态映射 | 落地#2093需求，将自动验证结果的pass/partial/fail自动映射为hunted/wounded/escaped三种狩猎状态，bug排查进度可视化 | https://github.com/Hmbown/CodeWhale/pull/3700 |
| #3695 | 工具调用输出默认折叠正常路径 | 落地#3256需求，成功执行的工具调用结果默认仅展示核心意图，仅失败时自动展开详情，大幅降低TUI界面的信息冗余 | https://github.com/Hmbown/CodeWhale/pull/3695 |

## 5. 功能需求趋势
从本次更新的所有Issue中提炼出社区最高关注的5个方向：
1. **编辑器生态集成**：优先级最高，核心团队集中资源推进ACP协议全适配，目标是快速接入Zed等主流编辑器的插件市场，降低用户使用门槛
2. **长上下文成本优化**：基于DeepSeek V4的缓存特性做深度定制，最大化降低token消耗，同时保留上下文信息的完整度
3. **场景泛化能力**：不再局限于代码开发场景，开放核心提示词自定义、插件扩展能力，覆盖内容创作、运维自动化等多元使用场景
4. **可靠性体系建设**：系统性解决Agent无限重试、模式切换错乱、工具调用无兜底等高频稳定性问题，提升生产环境可用度
5. **开放插件生态**：轻量插件系统落地后，后续将重点推进第三方MCP服务、浏览器自动化、多模态处理等外围能力的生态共建

## 6. 开发者关注点
从本次社区反馈中提炼的高频痛点与需求：
1. 历史Issue积压问题突出，团队刚刚重新激活Stale Issue自动清理机制，后续将批量归档低活跃度、等待用户反馈的过期Issue，优化项目维护效率
2. 中文用户本地化需求占比持续提升，中文技能、中文界面的适配优先级已经拉高到第一梯队
3. TUI之前的输出信息冗余问题饱受吐槽，工具调用默认折叠的特性上线后，几乎所有测试用户都给出了正面反馈
4. 非开发场景的需求增长远超出项目初始预期，开放提示词自定义的特性刚合并就收到超过20条非开发用户的场景反馈，后续将针对性做场景适配优化。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*