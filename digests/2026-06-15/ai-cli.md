# AI CLI 工具社区动态日报 2026-06-15

> 生成时间: 2026-06-14 23:09 UTC | 覆盖工具: 9 个

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

# 2026-06-15 主流AI CLI工具横向对比分析报告
---
## 1. 生态全景
当前AI CLI赛道已完成基础功能落地，全面进入生产级体验打磨阶段。头部大厂产品的迭代重心从模型能力落地转向运行稳定性、资源管控、付费体验等短板补全，开源独立项目则在多Agent编排、自定义模型调度等创新场景快速跑通验证。以MCP为核心的插件生态已成为全行业共识的基础设施，跨产品能力对齐趋势明显。同时开发者对计费透明化、本地数据隐私、多端体验一致性的诉求集中爆发，倒逼产品端从“堆特性”转向“重体验”的迭代逻辑切换。
## 2. 各工具活跃度对比
| 工具名称 | 当日有效活跃Issue数 | 当日合并/新增PR数 | 版本发布状态 |
| --- | --- | --- | --- |
| Claude Code | 30条（高互动存量Issue） | 5条 | 无正式版本发布 |
| OpenAI Codex | 10条（Top高优先级热点Issue） | 10条 | 发布Rust重写版预览版`rust-v0.140.0-alpha.19` |
| Gemini CLI | 10条（P1级核心Issue） | 10条 | 无正式版本发布 |
| GitHub Copilot CLI | 5条（高价值新Issue） | 0条 | 无正式版本发布 |
| Kimi Code CLI | 2条 | 4条 | 无正式版本发布 |
| OpenCode | 50条（全量活跃Issue） | 20条 | 发布正式版`v1.17.7` |
| Pi | 30条 | 12条 | 无正式版本发布 |
| Qwen Code | 10条（核心热点Issue） | 近20条 | 无正式版本发布 |
| CodeWhale（原DeepSeek TUI） | 10条 | 10条 | 发布品牌重命名正式版`v0.8.60` |
## 3. 共同关注的功能方向
多个产品社区的共性诉求已经形成行业共识：
1. **MCP生态全链路兼容**：覆盖Claude Code、OpenAI Codex、Gemini CLI、OpenCode、Qwen Code、CodeWhale共6款工具，核心诉求集中在MCP插件生命周期规范化、进程资源限制、跨工具配置共享、ID兼容逻辑修复，消除插件运行稳定性隐患。
2. **多模型/多服务商灵活调度**：覆盖GitHub Copilot CLI、Pi、OpenCode、Qwen Code、CodeWhale共5款工具，核心诉求为自定义模型自动发现、多服务商自动降级切换、多接入点免手动配置，降低混合使用不同厂商模型的接入成本。
3. **本地运行安全与资源管控**：全9款工具均有相关动态，集中修复子代理无限递归、MCP进程无限制繁殖、日志无节制写入消耗SSD、内存泄漏OOM等共性底层问题，降低用户本地运行的设备与成本风险。
4. **全端体验一致性**：覆盖Claude Code、OpenAI Codex、Kimi Code、Gemini CLI共4款工具，核心诉求为补全Linux/Windows端适配短板、打通多端会话/配置跨设备同步，结束不同操作系统体验割裂的现状。
## 4. 差异化定位分析
各产品的路线分化已经非常清晰：
- **Claude Code**：面向重度Claude生态的付费开发者，走闭源高优体验路线，当前核心迭代MCP生态稳定性、计费公平性，依托Anthropic的大模型优势打造高可靠性编码助手。
- **OpenAI Codex**：面向OpenAI生态的VS Code/桌面端用户，底层全面转向Rust重构，重点落地异步钩子、企业级自签代理支持，核心服务付费企业开发者群体。
- **Gemini CLI**：面向Google云开发者，主打Agent执行可靠性优化，引入AST语义分析降低Token消耗，优先集成GCP全链路服务能力。
- **GitHub Copilot CLI**：完全绑定GitHub原生生态，迭代节奏偏保守，核心面向纯GitHub工作流的企业团队，重点补全Azure DevOps跨生态打通、BYOK自定义模型支持能力。
- **Kimi Code CLI**：面向国内普通付费开发者，走极简路线，近期集中资源补全Windows端适配短板，优化付费权益透明度。
- **OpenCode**：全开源开放路线，主打高自由度，快速迭代插件生态、多Agent编排能力，面向追求个性化自定义的独立开发者群体。
- **Pi**：轻量TUI路线，主打低侵入性使用体验，重点扩展第三方模型接入生态，为扩展开发者提供丰富的自定义API。
- **Qwen Code**：主打极致成本优势，面向国内中小开发者，重点做跨厂商配置一键迁移能力，降低用户从海外产品切换的迁移门槛。
- **CodeWhale**：主打复杂多Agent编排能力，面向国内企业部署场景，落地执行权限管控、多子任务并行调度等企业级特性。
## 5. 社区热度与成熟度
- **成熟梯队**：Claude Code、OpenAI Codex、GitHub Copilot CLI，产品成熟度最高，用户基数大，迭代偏保守，核心修复高影响Bug，新增特性优先级严格受控，面向生产环境全量开放。
- **高速增长梯队**：OpenCode、Pi、Qwen Code、CodeWhale，日均动态量超过30条，新特性迭代速度极快，用户规模处于快速上升期，核心面向重度AI编码的开发者群体。
- **平稳迭代梯队**：Gemini CLI、Kimi Code，迭代节奏可控，当前重点补全体验短板，新特性落地节奏偏慢。
## 6. 值得关注的趋势信号
1. MCP已经从第三方可选特性进化为行业事实标准，开发者单次开发的MCP插件可直接在所有主流AI CLI工具中运行，大幅降低编码助手的生态开发门槛，未来会出现大量跨平台通用的开发者工具插件。
2. 多Agent原生支持已经成为新一代AI CLI的标配能力，端侧即可完成复杂编码任务的子任务拆分、并行调度，未来无需依赖云端大模型平台即可在本地完成全链路复杂项目开发。
3. 计费透明化已经成为付费用户的核心诉求，暗箱式的按订阅收费模式正在被用户用脚投票拒绝，未来主流AI CLI产品的付费模式会全面转向按实际Token消耗计费，权益规则完全公开可查。
4. 国内厂商的AI CLI本地化能力已经走在全球前列，多服务商调度、国内云服务适配、中文语境优化等特性的落地速度远高于海外大厂产品，对国内开发者的使用体验友好度优势正在快速拉大。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
数据截止：2026-06-15 | 数据源：anthropics/skills 官方仓库

---

## 1. 热门 Skills 排行
按社区关联热度、场景覆盖度排序，共6个最高关注的新增/优化Skill：
| Skill名称 | 功能说明 | 社区讨论热点 | 当前状态 | 链接 |
| --- | --- | --- | --- | --- |
| agent-creator 元技能 | 自动生成任务专属的自定义Agent集合，同时修复多工具并行评估逻辑、新增Windows平台兼容支持 | 解决用户自定义组装专属工作流Agent的高门槛问题，对应解决高热度Issue #1120 | OPEN | https://github.com/anthropics/skills/pull/1140 |
| document-typography 文档排版质控技能 | 自动检测并修复AI生成文档的通用排版问题：孤行溢出、页眉/标题寡行、多级编号错位 | 覆盖Claude生成所有类型文档的通用痛点，几乎所有文档生成场景都能直接受益 | OPEN | https://github.com/anthropics/skills/pull/514 |
| ODT 开源办公文档处理技能 | 支持OpenDocument格式（.odt/.ods）的创建、模板填充、解析转HTML，完全兼容LibreOffice生态 | 填补了ISO标准开源办公文档处理能力的空白，不再依赖微软Office私有格式 | OPEN | https://github.com/anthropics/skills/pull/486 |
| skill-quality/security-analyzer 元技能 | 从结构文档、安全性、可用性5个维度自动扫描校验社区贡献的Skill质量，输出质检报告 | 解决当前社区Skill贡献泛滥、质量参差不齐、存在安全隐患的生态治理痛点 | OPEN | https://github.com/anthropics/skills/pull/83 |
| testing-patterns 全栈测试技能 | 覆盖从测试理念、单元测试AAA模式、React组件测试到端到端测试的全栈标准化指导 | 直接引导Claude生成符合工业规范的测试用例，大幅提升代码交付质量 | OPEN | https://github.com/anthropics/skills/pull/723 |
| shodh-memory 持久化记忆技能 | 跨会话为Agent维护长期上下文记忆，每次接收用户消息自动唤起关联历史上下文 | 解决当前Claude Code会话断开后上下文完全丢失的核心使用痛点 | OPEN | https://github.com/anthropics/skills/pull/154 |

---

## 2. 社区需求趋势
从高热度Issues中提炼出当前5大核心需求方向：
1. **企业级Skill共享能力**：最高热度Issue #228（14条评论）明确要求支持组织内Skill库一键分发，替代当前手动上传文件的低效共享模式
2. **Skill开发工具链稳定性**：围绕官方Skill制作套件的Windows兼容、评估脚本召回率为0等问题累计20+条反馈，是当前社区最集中的痛点
3. **生态安全治理能力**：Issue #492重点关注仿官方命名空间的恶意Skill信任边界漏洞，要求新增Skill来源校验、权限审计机制
4. **全场景文档处理拓展**：除现有PDF、DOCX能力外，企业用户集中要求补全ODS/ODT开源文档、SharePoint在线文档的深度处理Skill
5. **跨生态打通**：要求支持AWS Bedrock部署、将Skill接口标准化为MCP协议，打通第三方工具生态
6. **高阶元能力Skill**：企业用户对智能体治理、代码库审计、业务预测分析等重工作流类Skill的需求增速明显

---

## 3. 高潜力待合并 Skills
近期更新活跃、社区呼声极高，大概率2026年Q2内落地的PR：
1. **PR #1298 run_eval.py 核心Bug修复**：完全解决Skill Creator套件长期存在的评估脚本全量返回0%召回的问题，同时修复Windows环境下的流读取、并行Worker兼容缺陷，对应3个高优先级开放Issue，是当前合并优先级最高的PR：https://github.com/anthropics/skills/pull/1298
2. **PR #361 + PR #362 Skill发布流程校验补丁**：新增YAML特殊字符自动检测、UTF-8多字节字符安全截断能力，解决Skill上传过程中静默解析失败、CLI直接崩溃的常见问题：https://github.com/anthropics/skills/pull/361、https://github.com/anthropics/skills/pull/362
3. **PR #541 DOCX技能损坏修复**：修正DOCX生成时ID冲突导致已有书签、修订记录被覆盖、文档损坏的高频生产Bug，覆盖大量企业报告、合同生成场景：https://github.com/anthropics/skills/pull/541
4. **PR #509 贡献指南新增**：补充仓库完整CONTRIBUTING.md，将官方仓库社区健康度从当前25%提升到满分，无技术争议即将合入：https://github.com/anthropics/skills/pull/509

---

## 4. Skills 生态洞察
当前Claude Code Skills社区最集中的诉求是：优先补齐Skill开发全链路工具的跨平台稳定性、完善企业级Skill共享与安全治理规则，同时持续拓展覆盖办公文档、智能体持久化记忆、工程效能类等高生产力场景。

---

# Claude Code 社区动态日报
日期：2026-06-15 | 数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
过去24小时社区无官方正式版本发布，共更新30条高互动存量Issue、5条合并/新增PR。热点事件集中在多平台兼容性漏洞闭环、付费用户计费异常问题发酵，同时官方首次开放赏金众包通道推进高危bug修复，此前爆火的愚人节临时功能`/buddy`永久化请求获得近20位开发者点赞支持，成为目前热度最高的功能提案。

## 2. 版本发布
过去24小时无新正式Release发布。

## 3. 社区热点 Issues
筛选出10个最具参考价值的高优先级Issue：
1. **#53340 【已闭环】Windows端Claude Desktop丢失项目级文件夹展示**
   重要性：Windows桌面端高频回归bug，影响用户的项目管理效率，累计15条社区反馈，9位用户点赞证实遇到同类问题。
   链接：https://github.com/anthropics/claude-code/issues/53340
2. **#36800 【已闭环】Mac端MCP插件无触发重复生成实例，引发409冲突、工具丢失**
   重要性：直接影响所有自定义MCP插件开发者的使用稳定性，15条反馈覆盖主流第三方插件的兼容问题。
   链接：https://github.com/anthropics/claude-code/issues/36800
3. **#56895 【开放中】计费异常：用户支付Claude Max账单后账号被强制回退为免费版**
   重要性：涉及付费用户核心权益，累计14条反馈证实该问题并非个案，目前官方尚未给出完整修复方案。
   链接：https://github.com/anthropics/claude-code/issues/56895
4. **#45612 【已闭环】功能请求：将临时彩蛋功能`/buddy`设为永久可选项**
   重要性：本次点赞量最高的需求（19赞），大量用户反馈该对抗性代码审查角色的产出质量远高于常规模式，社区呼吁保留该能力。
   链接：https://github.com/anthropics/claude-code/issues/45612
5. **#68430 【开放中】子代理机制漏洞引发无限递归、token超额消耗**
   重要性：当日新提交的高危bug，子代理可无视环境变量限制生成50层以上嵌套实例，直接导致无用token暴增、历史工作内容丢失。
   链接：https://github.com/anthropics/claude-code/issues/68430
6. **#68425 【开放中】移动端`/clear`指令无法清空会话上下文**
   重要性：覆盖iOS/安卓全端的交互bug，用户执行清空后历史内容仍对模型可见，导致上下文占用持续走高。
   链接：https://github.com/anthropics/claude-code/issues/68425
7. **#33539 【已闭环】TUI登录页OAuth链接被格式符包裹，无法复制点击**
   重要性：阻断所有CLI端Pro/Max用户的登录流程，无临时绕过方案，累计7位用户点赞证实该问题。
   链接：https://github.com/anthropics/claude-code/issues/33539
8. **#45880 【已闭环】多会话场景下MCP进程无上限繁殖，触发Mac内核panic**
   重要性：极端场景下直接导致设备崩溃，N个会话+M个MCP服务会生成N*M个无内存限制的Node进程，64G内存设备也会被占满。
   链接：https://github.com/anthropics/claude-code/issues/45880
9. **#51160 【已闭环】Windows端Claude Desktop无法连接Chrome扩展，提示无可用标签页**
   重要性：阻断桌面端和浏览器端的跨工具协同能力，累计5位跨端使用用户反馈该问题。
   链接：https://github.com/anthropics/claude-code/issues/51160
10. **#66130 【开放中】模型仅满足局部指令，不校验最终产出是否符合顶层目标**
    重要性：大量开发场景下模型会忽略显性要求生成冗余/违规代码，是目前用户吐槽生成结果不可靠的核心共性问题。
    链接：https://github.com/anthropics/claude-code/issues/66130

## 4. 重要 PR 进展
过去24小时共更新5条PR，核心覆盖工程流程与高危bug修复：
1. **#68423 修复sweep自动关闭脚本的逻辑漏洞**
   内容：修正`sweep.ts`逻辑，避免已分配给开发者的待处理Issue被系统自动标记为过期关闭，保障工单流转正确性。
   链接：https://github.com/anthropics/claude-code/pull/68423
2. **#67699 赏金PR：修复Claude自主调用付费外部接口漏洞**
   内容：悬赏29USDC的众包修复，由NVIDIA AI自动生成实现，规避模型无感知触发第三方付费资源产生额外扣费。
   链接：https://github.com/anthropics/claude-code/pull/67699
3. **#67409 赏金PR：修复计费错误导致账号降级问题**
   内容：悬赏200USDC的高优先级修复，对应高热度的付费用户账号回退免费版问题，解决核心付费体验故障。
   链接：https://github.com/anthropics/claude-code/pull/67409
4. **#67722 【已合并】补全Issue去重工作流**
   内容：已审核合并，新增自动化Issue去重流水线，减少同类型bug的重复上报成本，同步优化外部付费资源调用的权限校验逻辑。
   链接：https://github.com/anthropics/claude-code/pull/67722
5. **#1 【已合并】更新SECURITY.md安全规范**
   内容：该项目创建近1年半后首次合并核心安全文档，补全官方漏洞上报通道与安全响应规则。
   链接：https://github.com/anthropics/claude-code/pull/1

## 5. 功能需求趋势
从当日更新的Issue中提炼出3个核心需求方向：
1. **全端同步能力**：大量用户呼吁打通桌面端、CLI、网页端、移动端的会话、配置、历史进度的跨端同步能力，结束当前各端数据完全隔离的现状。
2. **MCP生态稳定性**：开发者集中诉求MCP插件生命周期规范化，新增进程资源限制、重复实例自动熔断能力，降低第三方插件的使用风险。
3. **本地自动化增强**：重度用户提出脱离云服务的本地会话桥接需求，希望支持同机器下多进程直接接入运行中的Claude会话，无需走云端转发降低延迟。

## 6. 开发者关注点
当日反馈的高频痛点集中在三类：
1. Windows平台兼容性问题占比接近半数，大量已闭环的存量bug都是Windows端专属，包括进程僵尸、功能缺失、跨工具连接失败，是目前兼容性短板最明显的平台。
2. 资源管控漏洞频发，子代理无限嵌套、MCP进程无上限、token无感知超额消耗，直接抬高了用户的使用成本甚至设备稳定性风险。
3. 核心付费流程体验漏洞多，计费错误引发大量用户投诉，直接影响付费用户的信任度，是当下优先级最高的待修复体验短板。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026年6月15日
数据来源：github.com/openai/codex

---

## 1. 今日速览
今日Codex开源仓库发布了Rust实现的CLI alpha新版本，社区高热度反馈集中在付费用户非预期token消耗、全端性能退化、Windows桌面端批量兼容Bug三大方向。官方核心PR集中推进异步钩子生态、跨平台沙箱架构重构、企业级代理支持三大底层能力升级，开发者对Linux桌面版的诉求点赞量已突破500，成为当前呼声最高的新增功能。

## 2. 版本发布
过去24小时新发布预编译版本：
- **rust-v0.140.0-alpha.19**：Codex Rust重写版CLI的最新预览版本，对应近期提交的沙箱权限、异步钩子相关改进，目前处于公开测试阶段。
  链接：https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.19

## 3. 社区热点 Issues（Top 10）
按热度与影响范围排序：
1.  **#14593 付费订阅下token异常快速消耗**：607条评论、268个赞，为当前社区最火的issue，大量Business订阅的VS Code扩展用户反馈token消耗速度远超预期，官方速率限制规则完全不透明，用户普遍质疑扣费合理性。
    链接：https://github.com/openai/codex/issues/14593
2.  **#11023 需求：Codex Linux桌面端**：568个赞、107条评论，长期置顶的跨平台需求，用户表示当前Mac版耗电过高无法使用，迫切需要Linux原生桌面版获得更稳定的低功耗体验。
    链接：https://github.com/openai/codex/issues/11023
3.  **#21527 Codex全端响应速度过慢**：29条评论，覆盖VS Code插件和桌面端所有版本，Pro订阅用户反馈新版本推理延迟比上月高3倍以上，严重影响开发效率。
    链接：https://github.com/openai/codex/issues/21527
4.  **#22423 WSL配置后Codex桌面端找不到CLI二进制直接崩溃**：26条评论，大量中文用户反馈开启WSL集成后App完全无法启动，没有任何降级提示。
    链接：https://github.com/openai/codex/issues/22423
5.  **#27367 Windows10 22H2更新后桌面端秒退、CLI运行正常**：8条评论，覆盖韩区等多区域Windows用户，最新版本桌面程序打开直接退出无报错，CLI功能完全正常，属于发布级兼容事故。
    链接：https://github.com/openai/codex/issues/27367
6.  **#27915 Linux用户无法领取和使用速率重置额度**：16个赞、6条评论，由于新上线的速率重置功能仅在桌面端提供，没有Linux桌面端的用户完全无法使用该权益，和Linux桌面版需求形成联动反馈。
    链接：https://github.com/openai/codex/issues/27915
7.  **#25921 Codex桌面端崩溃日志无限制增长每日占用5GB以上磁盘**：6条评论，macOS平台用户反馈Crashpad崩溃上报目录每日新增数万条dmp文件，最快24小时内占用磁盘超过5GB，属于严重的IO资源泄漏Bug。
    链接：https://github.com/openai/codex/issues/25921
8.  **#28224 Codex SQLite反馈日志年写入量可达640TB，快速消耗SSD寿命**：2条评论，开发者实测本地日志数据库高频写入完全无节流，长期运行会快速耗尽固态硬盘写入寿命，属于硬件级高风险Bug。
    链接：https://github.com/openai/codex/issues/28224
9.  **#28174 Windows版Codex WSL路径映射错误**：6条评论，用户打开WSL内项目时，会把`/mnt/e/xxx`路径错误映射到Windows本地的`C:\mnt\e\xxx`，完全无法正常读写WSL目录代码。
    链接：https://github.com/openai/codex/issues/28174
10. **#28190 macOS下Codex内置rg检索工具被系统安全拦截**：7条评论，最新版CLI运行代码搜索时直接提示工具不可用，用户需要手动给二进制添加执行权限才能恢复功能。
    链接：https://github.com/openai/codex/issues/28190

## 4. 重要 PR 进展（Top 10）
1.  **#27771/#27452/#27772 完整异步钩子能力栈落地**：OpenAI官方团队连续提交3个关联PR，实现了异步钩子的资源管控、执行调度、前端展示全链路功能，为后续MCP扩展的后台运行能力提供底层支撑。
    链接：https://github.com/openai/codex/pull/27771
2.  **#27640 支持批量插件安装请求**：扩展原有单插件安装接口，支持一次性传入多个工具/插件ID批量安装，大幅降低开发者配置多扩展的操作成本。
    链接：https://github.com/openai/codex/pull/27640
3.  **#28165 使用PathUri重构执行服务器文件系统权限逻辑**：把硬编码的本地路径抽象为跨平台URI，为后续app-server和exec-server跨不同操作系统部署、沙箱混合运行架构铺路。
    链接：https://github.com/openai/codex/pull/28165
4.  **#28008/#28009 外部Agent导入统计与遥测**：新增importId跟踪第三方Agent导入全流程，支持用户从Cursor等竞品一键迁移配置、会话历史、自定义扩展，降低用户迁移门槛。
    链接：https://github.com/openai/codex/pull/28008
5.  **#28189/#28219 工具命名空间规范化**：给所有插件、自定义工具增加唯一命名空间，彻底解决不同来源的插件ID冲突问题，为扩展生态规模化落地扫清障碍。
    链接：https://github.com/openai/codex/pull/28189
6.  **#27917 新增实时语音与静默上下文API**：开放官方接口给开发者自主控制实时语音场景下的播报内容，解决之前自动播报所有进度消息导致语音助手过于啰嗦的问题。
    链接：https://github.com/openai/codex/pull/27917
7.  **#27794 移除终端resize回流特性门**：之前灰度上线的终端自适应排版功能现已全量正式发布，删除旧的未启用逻辑，避免配置混淆。
    链接：https://github.com/openai/codex/pull/27794
8.  **#25888/#26315 托管MITM CA证书环境落地**：支持企业用户上传自签根证书，在代理环境下正常运行Codex，解决国内/企业内网环境下SSL拦截导致的连接失败问题。
    链接：https://github.com/openai/codex/pull/25888
9.  **#27953 Codex桌面端加载官方内置Hook**：所有OpenAI官方自带的扩展钩子从桌面端内置资源目录加载，完全隐藏在普通扩展管理UI之外，大幅提升核心组件安全性。
    链接：https://github.com/openai/codex/pull/27953
10. **#27666 requirements.toml新增托管字段支持**：把认证、存储、遥测、权限等配置项加入统一校验逻辑，避免错误配置导致的服务异常。
    链接：https://github.com/openai/codex/pull/27666

## 5. 功能需求趋势
从今日更新的Issue中可以提炼出社区最高频的功能诉求方向：
1.  **跨平台全覆盖**：Linux原生桌面端需求热度长期第一，同时用户强烈要求完善WSL集成、不同操作系统沙箱兼容能力，结束目前仅优先支持Mac的现状。
2.  **扩展生态对齐竞品**：大量从Cursor迁移过来的用户要求Codex补齐MCP钩子、自定义事件回调能力，实现和Cursor扩展生态的完全兼容。
3.  **资源管控透明化**：付费用户普遍要求公开token消耗、速率重置的统计明细，拒绝暗箱式扣费规则。
4.  **自定义模型支持**：已有开发者反馈本地模型对接时localhost域名识别Bug，预示大量用户有直接对接本地部署自研大模型的强烈需求。

## 6. 开发者关注点
今日开发者反馈的共性痛点集中在四个方向：
1.  最新版Windows桌面端Bug密度过高，秒退、路径映射错误、大文本粘贴失败等基础功能故障严重影响Windows用户使用体验。
2.  底层IO逻辑存在多处严重隐患，无限制崩溃日志、高频无节流SQLite写入都会直接伤害用户存储设备，属于优先级极高需要修复的严重问题。
3.  最新26.609版本出现大范围性能退化，普通代码任务耗时从之前的5分钟涨到30-50分钟，Mac平台GPU高耗电的老问题始终没有解决。
4.  速率限制逻辑存在大量逻辑错误，用户查询/status显示额度充足但被提示超限、Linux用户无法领取重置额度等问题导致大量付费用户不满。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 2026-06-15
数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
今日Gemini CLI无正式版本发布，核心团队集中推送10+高优先级稳定性修复补丁，重点解决子Agent挂死、会话丢失、信任对话框信息披露错误等长期影响用户体验的高频问题。同时终端原生拖拽/剪贴板粘贴图片的多模态特性已提交PR，后续将大幅降低终端场景下多媒体输入的门槛。此外多件标记P1级的Agent运行异常类历史Issue集中完成用户反馈收集，官方已统一标记为待回归测试状态。

## 2. 版本发布
过去24小时无新版本发布。

## 3. 社区热点 Issues
共筛选出10个关注度最高的核心Issue：
1. **#21409 Generalist Agent 随机挂死问题** https://github.com/google-gemini/gemini-cli/issues/21409
   获8个点赞、7条用户评论，是目前用户反馈最多的高频BUG：哪怕执行创建文件夹这类极简单操作，只要触发通用子Agent调度就会无限卡死，手动强制禁用子Agent调度才能临时规避，官方标记为P1最高优先级待重测。
2. **#24353 组件级评估体系建设EPIC** https://github.com/google-gemini/gemini-cli/issues/24353
   7条评论，作为Agent质量保障的核心工程，目前已累计产出76个行为评估测试用例，覆盖6款官方Gemini模型，后续将系统性降低Agent迭代后的回归故障概率。
3. **#22745 AST感知代码读取能力调研EPIC** https://github.com/google-gemini/gemini-cli/issues/22745
   7条评论，官方正在评估引入AST语义分析能力的收益：可精准定位代码方法边界，大幅减少无效文件读取的Token消耗和交互回合数，是代码Agent核心体验的重点优化方向。
4. **#22323 子Agent超限错误上报BUG** https://github.com/google-gemini/gemini-cli/issues/22323
   获2个点赞、6条评论，子Agent执行达到最大回合限制、完全未完成代码分析的情况下，会错误返回执行成功状态，掩盖执行中断问题误导用户。
5. **#26525 自动记忆模块脱敏安全问题** https://github.com/google-gemini/gemini-cli/issues/26525
   5条评论，高优安全类Issue：当前自动记忆功能会先把本地会话明文传入云端模型上下文，再做敏感信息脱敏，存在本地密钥、隐私内容泄露风险。
6. **#25166 Shell命令执行后假死问题** https://github.com/google-gemini/gemini-cli/issues/25166
   获3个点赞、4条评论，P1级核心体验BUG：简单非交互类Shell命令执行完成后，CLI依然卡在「等待用户输入」状态无响应。
7. **#21968 不会主动调用自定义技能/子Agent问题** https://github.com/google-gemini/gemini-cli/issues/21968
   6条用户评论，大量开发者反馈手动配置的gradle、git等专属技能完全不会被Agent主动触发，必须用户明确指令才能调用。
8. **#26522 自动记忆模块无限重试低质量会话问题** https://github.com/google-gemini/gemini-cli/issues/26522
   5条评论，自动记忆功能判断会话价值过低跳过处理后，会反复重试该会话，无意义消耗大量后台模型配额和本地资源。
9. **#21983 Wayland环境下浏览器子Agent完全失败** https://github.com/google-gemini/gemini-cli/issues/21983
   获1个点赞、4条评论，Linux桌面用户高频反馈的兼容性BUG，运行在Wayland显示协议下的浏览器子Agent会直接异常退出，无法完成任何网页操作。
10. **#22093 v0.33.0后禁用状态的子Agent自动运行** https://github.com/google-gemini/gemini-cli/issues/22093
    2条评论，严重不符合用户预期的BUG：用户全局配置关闭所有子Agent后，升级到v0.33.0版本依然会自动调度通用子Agent执行操作，存在非预期风险。

## 4. 重要 PR 进展
筛选出10个核心合并/待合并高价值PR：
1. **#27915 信任对话框安全漏洞修复** https://github.com/google-gemini/gemini-cli/issues/27915
   P1级安全修复：解决工作区信任对话框反向显示钩子命令的问题——嵌套定义的SessionStart恶意钩子会在用户完全不知情的情况下自动执行任意Shell命令，完全未在信任提示框中披露。
2. **#27910 网页搜索工具增加120秒超时控制** https://github.com/google-gemini/gemini-cli/issues/27910
   为网页搜索工具新增本地超时机制，超时后主动终止底层请求并返回明确错误，让Agent正常恢复后续流程，彻底解决之前网页搜索场景无限卡顿的问题。
3. **#27859 新增拖拽/粘贴图片多模态能力** https://github.com/google-gemini/gemini-cli/issues/27859
   重磅新特性PR落地：支持标准终端下直接拖拽图片文件，或者用Cmd+V/Ctrl+V粘贴剪贴板图片，实现多模态输入的原生体验，无需用户手动输入图片路径。
4. **#27914 修复磁盘满时错误提示无效会话恢复命令** https://github.com/google-gemini/gemini-cli/issues/27914
   磁盘空间占满后会话记录写入失败自动停止保存，此前版本会继续生成不存在的会话ID，提示用户用`gemini --resume`命令恢复无法加载的会话，现已修复该误导性提示。
5. **#27904 兼容缺失projectHash的旧版历史会话加载** https://github.com/google-gemini/gemini-cli/issues/27904
   修复旧版本升级后，没有projectHash字段的历史JSONL会话文件无法读取的问题，避免用户丢失全部历史对话记录。
6. **#27916 GCP项目ID格式校验修复** https://github.com/google-gemini/gemini-cli/issues/27916
   修复自动记忆模块错误存储GCP无效项目别名的问题，避免后续会话初始化时返回403 CONSUMER_INVALID API错误。
7. **#27906 修复会话列表读取和后台清理的并发冲突** https://github.com/google-gemini/gemini-cli/issues/27906
   执行`--list-sessions`命令时跳过后台过期会话清理逻辑，避免并发操作导致的文件被误删、读取崩溃问题。
8. **#27885 VS Code IDE Companion 资源泄漏修复** https://github.com/google-gemini/gemini-cli/issues/27885
   修复VS Code扩展激活后两个监听器未注册到订阅列表的问题，解决长时间运行下的内存泄漏。
9. **#27580 @命令解析栈溢出BUG修复** https://github.com/google-gemini/gemini-cli/issues/27580
   把基于复杂正则的@命令解析逻辑替换为迭代扫描器，彻底杜绝大文本输入场景下正则灾难性回溯导致的CLI栈溢出崩溃。
10. **#27575 命令注入漏洞安全修复** https://github.com/google-gemini/gemini-cli/issues/27575
    替换`findCommand`、`commandExists`函数的不安全`execSync`调用，改用无Shell插值的`spawnSync`，彻底消除路径名含特殊字符时的命令注入风险。

## 5. 功能需求趋势
从近期动态可以提炼出社区核心需求方向：
1. **Agent执行效率升级**：社区高度关注AST语义感知能力引入，目标是降低代码场景下的Token消耗和交互回合数，提升复杂代码库导航效率。
2. **多模态体验补齐**：原生终端拖拽、粘贴图片功能是近期呼声最高的新特性，终端下的多模态输入体验正在向GUI客户端对齐。
3. **安全隐私加固**：自动记忆模块脱敏、钩子执行透明化、命令注入防护成为优先级最高的安全迭代方向，用户对本地敏感数据上传风险的关注度持续提升。
4. **会话可靠性优先**：批量历史会话加载、异常场景下会话防丢系列补丁集中落地，说明开发者对长期对话留存、历史会话回溯的需求正在快速增长。
5. **跨端兼容性优化**：Wayland桌面支持、VS Code IDE集成、自定义主题适配等跨平台兼容问题的关注度持续走高。

## 6. 开发者关注点
近期开发者反馈的核心痛点集中在三点：
1. **Agent可靠性痛点**：子Agent随机假死、异常状态上报错误、自定义技能不会主动调用是最高频的生产力障碍，直接影响用户日常代码开发效率。
2. **会话数据风险痛点**：历史会话丢失、升级后无法加载、磁盘满导致数据损坏是投诉量最高的问题，大量用户依赖Gemini CLI保存全链路开发上下文。
3. **体验细节痛点**：终端缩放闪屏、外部编辑器退出后界面乱码、自定义主题样式不生效这类小问题，长期影响日常高频使用的体验舒适度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-06-15
---

## 1. 今日速览
过去24小时 Copilot CLI 仓库无新版本发布、无更新迭代的Pull Request，合计7条动态更新Issue。其中2项遗留核心Bug获得社区进一步跟进讨论，同时新增3条处于分诊阶段的功能需求、2类会话鲁棒性相关缺陷反馈，覆盖自定义大模型接入、Azure DevOps生态集成等高价值企业级场景。本次新反馈集中在生产级使用体验短板，未出现严重阻断性安全漏洞。

## 2. 版本发布
过去24小时无新正式版本发布，本章节暂略。

## 3. 社区热点 Issues
本次从7条更新Issue中剔除2条无意义无效提交，筛选出5个高价值关注条目：
1. **#956 Agent技能脚本执行路径错误**：重要性极高，该问题直接违反Agent Skills官方规范，导致开发者按照文档编写的技能引用路径无法正常加载脚本，目前累计获得2个点赞、6条社区讨论，多位开发者复现确认CLI执行脚本时未以技能根目录作为工作目录，维护团队正在定位路径解析逻辑缺陷。链接：[github/copilot-cli#956](https://github.com/github/copilot-cli/issues/956)
2. **#3558 上下文内存模块重复项报错**：属于核心会话模块的高频阻断Bug，累计获得7个用户点赞反馈、4条复现记录，用户反馈会话初始化阶段就抛出CAPI 400重复ID错误，完全阻断会话推进，是当前社区优先级极高的待修复问题。链接：[github/copilot-cli#3558](https://github.com/github/copilot-cli/issues/3558)
3. **#3795 BYOK/自定义提供商可选模型自动发现功能请求**：面向私有部署、自定义大模型接入的企业级用户，当前BYOK模式下要求用户手动输入全量模型标识，配置成本极高，该需求提出支持自动拉取对应提供商的可用模型列表，大幅降低企业接入门槛，目前处于待分诊阶段。链接：[github/copilot-cli/issues/3795](https://github.com/github/copilot-cli/issues/3795)
4. **#3794 Azure DevOps工作项接入「Up next」面板功能请求**：覆盖大量使用ADO作为项目管理工具的企业用户，目前Copilot CLI的跨会话待办面板仅支持GitHub生态内容，导致ADO仓库用户的待办列表完全为空，无法实现全研发流程打通，目前处于待分诊阶段。链接：[github/copilot-cli/issues/3794](https://github.com/github/copilot-cli/issues/3794)
5. **#3791 畸形附件毒化全会话问题**：严重影响用户体验，用户上传加密Excel等不支持的附件后，不仅本次请求报错，后续所有同会话请求都会继承脏上下文持续返回400错误，必须重启会话才能恢复，目前处于待分诊阶段。链接：[github/copilot-cli/issues/3791](https://github.com/github/copilot-cli/issues/3791)

> 其余2条无效Issue说明：#3796为无意义空内容提交已被维护者标记invalid关闭，#3793为无描述乱码内容，分诊团队已标记待归档。

## 4. 重要 PR 进展
过去24小时仓库无新提交、更新或合并的Pull Request，本章节暂略。

## 5. 功能需求趋势
从当前活跃Issue可提炼社区最关注的三大核心方向：
1. **Agent技能生态适配**：围绕官方Agent Skills规范补齐CLI侧的兼容性逻辑，降低开发者自定义Agent技能的开发成本
2. **企业级BYOK场景能力完善**：逐步补齐私有部署模式下的自动模型发现、配置简化类能力，满足企业自定义大模型接入需求
3. **跨研发生态集成**：除原生GitHub生态外，逐步兼容Azure DevOps等主流研发管理平台的核心能力，覆盖更广泛的企业用户场景

## 6. 开发者关注点
当前开发者反馈的核心痛点集中在三点：
1. 核心会话鲁棒性不足：上下文脏数据、畸形输入、重复ID等小问题会直接导致整个会话完全不可用，需要用户手动重启，体验损耗严重
2. 生产级使用配置成本高：BYOK、自定义提供商场景下大量参数需要手动指定，没有自动发现、自动校验能力，新手接入门槛极高
3. 生态覆盖存在缺口：大量使用Azure DevOps等非GitHub原生工具链的用户无法享受到Copilot CLI的全流程待办管理能力，跨平台打通需求迫切

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# 2026-06-15 Kimi Code CLI 社区动态日报
数据来源：GitHub 官方仓库 https://github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
过去24小时Kimi Code CLI无正式新版本发布，社区共更新2条公开Issue、处理4条PR，其中3条长期悬停的Windows平台适配类PR全部关闭落地，平台侧近期集中补齐Windows端使用体验短板的节奏明显加快。用户侧反馈集中指向付费服务配额规则透明度不足、自定义System Prompt被内置逻辑冲突两大核心问题，核心付费用户的权益相关诉求引发社区关注。

## 2. 版本发布
过去24小时无新正式版本推送，本部分暂无更新内容。

## 3. 社区热点 Issues
本统计周期内共更新2条Issue，全部为高关注度条目：
1. [#2123 限速，限额严重](https://github.com/MoonshotAI/kimi-cli/issues/2123)
   重要性：存量高优先级付费用户反馈，直指Code Plan订阅的规则披露漏洞，用户实测5小时内仅可调用60余次远低于官方公示的300-1200次区间，且平台仅展示模糊使用百分比、无明确限额公示，涉及付费权益合规性问题，当前已累计2条用户评论参与讨论。
2. [#2451 System prompt conflicting with my desired workflow](https://github.com/MoonshotAI/kimi-cli/issues/2451)
   重要性：新版本新增Bug反馈，针对v0.12.0版本API密钥模式下k2.7-coding模型的运行问题，用户自定义的开发规则被内置系统提示覆盖，打断私有工作流，当前处于新提交待排查状态。

## 4. 重要 PR 进展
本统计周期内共更新4条PR，全部为核心迭代条目：
1. [#2452 fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched](https://github.com/MoonshotAI/kimi-cli/issues/2452)
   修复内容：当前文件替换工具原有逻辑仅判断最终全量内容是否未变动才返回错误，优化后单条多修改片段匹配失败就直接抛出异常，避免无效编辑漏判，目前处于开放待评审状态。
2. [#2018 feat: add Alt+V paste support for Windows Terminal](https://github.com/MoonshotAI/kimi-cli/issues/2018)
   落地功能：解决Windows Terminal默认拦截Ctrl+V快捷键、导致prompt_toolkit无法捕获粘贴事件的问题，新增Alt+V作为兜底粘贴快捷键，完全对齐原有粘贴能力，已合并关闭。
3. [#2020 fix: use per-process log filenames to prevent rotation lock on Windows](https://github.com/MoonshotAI/kimi-cli/issues/2020)
   修复内容：解决多Kimi进程同时运行时，loguru日志轮转触发Win32文件占用锁冲突的问题，改用携带进程ID的独立日志文件名，彻底规避并发场景下的日志写入报错，已合并关闭。
4. [#839 feat(shell): add configurable shell support for Windows](https://github.com/MoonshotAI/kimi-cli/issues/839)
   落地功能：新增Windows平台下可自定义Shell的适配能力，支持用户按需选择终端类型，适配PowerShell、WSL等不同环境的个性化使用习惯，已合并关闭。

## 5. 功能需求趋势
从存量+当日更新的Issue中可提炼出社区核心关注的4个方向：
1. **服务权益透明化**：大量用户呼吁公开不同订阅档位的精确请求限额、限速规则，替代当前仅展示模糊使用百分比的统计方式。
2. **自定义提示自由度**：用户要求放开内置System Prompt的修改权限，允许适配个人专属开发工作流，避免内置逻辑打断私有开发规则。
3. **Windows平台体验补齐**：近期3条长期适配PR全部落地，对应社区海量Windows开发者的使用痛点诉求，成为平台近期的核心适配优先级。
4. **核心工具鲁棒性优化**：针对文件编辑这类高频核心工具的边缘场景错误处理能力优化需求持续上升，用户反馈漏判、无提示的问题占比走高。

## 6. 开发者关注点
当前开发者集中反馈的核心痛点/高频需求如下：
1. 付费服务感知差：Code Plan实际可用配额远低于官方公示区间，且无明确规则披露，大量付费用户对当前计费体系存在不满。
2. Windows兼容性残留问题此前长期未解决：快捷键冲突、多进程资源锁、Shell适配差等问题曾长期影响Windows开发者使用流畅度，近期集中迭代后体验正在快速改善。
3. 自定义灵活度不足：全量锁定内置System Prompt的设计无法适配复杂的个性化开发场景，很多沉淀了专属工作流的资深开发者被迫手动打断工具运行状态来注入自定义规则。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-15
---
## 1. 今日速览
今日OpenCode正式推送v1.17.7核心版本，集中修复插件客户端、ACP调用、PTY环境变量三类底层核心问题；社区关注度最高的「DeepSeek V4 Pro降价后调整Go订阅配额」需求已正式闭环，70+开发者参与讨论反馈。过去24小时全量社区更新包含50条活跃Issue、20个待合并/已合并PR，插件生态、远程开发场景相关需求占比超过40%，整体活跃度维持高位。

## 2. 版本发布
### v1.17.7 正式版更新
核心修复与优化集中在底层运行链路：
- **Bugfix**：插件客户端请求自动复用当前活跃服务端、不再硬编码默认本地端口；ACP Shell工具调用启动阶段直接展示命令与工作目录；插件注入的Shell环境变量现在可同步作用到PTY会话；MCP工具ID格式做了兼容优化。

## 3. 社区热点 Issues（Top 10）
按关注度排序，均为过去24小时更新的高价值议题：
1. **#28846 [已关闭] 调整Go订阅配额适配DeepSeek V4 Pro永久降价75%**
   重要性：全站最高赞/最高评论需求，79人点赞、77条讨论，直接惠及所有OpenCode Go付费订阅用户，官方已确认本周内完成配额灰度上线。
   链接：https://github.com/anomalyco/opencode/issues/28846
2. **#15585 [已关闭] 免费模型提示「免费用量超限」错误**
   重要性：48条讨论，大量免费用户反馈无理由触发限制，维护者已确认是用量统计脚本逻辑Bug，下个小版本修复。
   链接：https://github.com/anomalyco/opencode/issues/15585
3. **#5305 [开放] 新增瞬时TUI命令插件钩子**
   重要性：插件生态核心特性需求，18名开发者参与讨论，支持插件无需启动Agent直接注册可执行TUI快捷命令，大幅扩展插件交互能力。
   链接：https://github.com/anomalyco/opencode/issues/5305
4. **#28957 [开放] writing-plans技能触发「上游空闲超时」报错**
   重要性：13条反馈，集中出现在macOS M4设备长会话场景，维护者定位为模型服务链路闲置超时配置问题。
   链接：https://github.com/anomalyco/opencode/issues/28957
5. **#25832 [开放] OpenCode无法正常读取图片输入**
   重要性：12条反馈，多模态核心能力故障，4月29日后的版本陆续出现图片解析报错问题。
   链接：https://github.com/anomalyco/opencode/issues/25832
6. **#11829 [开放] 递归语言模型RLM上下文管理实现**
   重要性：基于MIT最新开源论文提出的创新方案，跳出传统滑动窗口、上下文压缩的思路，把上下文作为外部环境让模型可编程查询，11名资深开发者点赞讨论。
   链接：https://github.com/anomalyco/opencode/issues/11829
7. **#32336 [开放] TUI退出后终端资源未正确回收**
   重要性：当日新增高频体验Bug，用户退出OpenCode后终端残留鼠标追踪、替代屏幕等状态，导致后续终端输入异常。
   链接：https://github.com/anomalyco/opencode/issues/32336
8. **#31901 [开放] 新增SSH远程目录引用类型**
   重要性：远程开发场景核心需求，支持直接绑定远端SSH路径作为工作区，无需本地同步文件。
   链接：https://github.com/anomalyco/opencode/issues/31901
9. **#31526 [开放] SQLite默认关闭auto_vacuum导致数据库无限膨胀**
   重要性：长期部署的服务端用户高频痛点，会话数据积累后数据库文件可达几十GB，没有自动回收逻辑。
   链接：https://github.com/anomalyco/opencode/issues/31526
10. **#32323 [开放] 内置支持模型融合能力**
    重要性：跟进OpenRouter最新发布的多模型融合特性，让OpenCode可自动组合多个大模型的输出提升任务完成率，属于前沿能力预研需求。
    链接：https://github.com/anomalyco/opencode/issues/32323

## 4. 重要 PR 进展（Top 10）
1. **#32075 [开放] 核心层新增可自定义配置的计划提醒**
   解决两个历史遗留Issue，支持用户修改计划模式下Agent的提醒规则，适配不同团队的代码开发流程。
   链接：https://github.com/anomalyco/opencode/pull/32075
2. **#27597 [已关闭] 修复CLI会话恢复逻辑匹配错误会话问题**
   原逻辑仅判断问题列表非空就做恢复，容易匹配到历史会话的过期问题导致进程卡死，修改为严格通过messageID匹配。
   链接：https://github.com/anomalyco/opencode/pull/27597
3. **#27581 [已关闭] MCP工具ID做连字符标准化兼容**
   修复MCP工具ID保留连字符，但模型侧识别的工具名使用下划线导致的匹配失败问题。
   链接：https://github.com/anomalyco/opencode/pull/27581
4. **#27571 [已关闭] 修复项目切换快捷键覆盖浏览器默认快捷键问题**
   原`Cmd+数字`/`Ctrl+数字`全局快捷键没有做作用域限制，导致Web版打开多个标签页时无法切换标签。
   链接：https://github.com/anomalyco/opencode/pull/27571
5. **#27535 [已关闭] 计划模式下用户明确要求执行实现时自动退出计划模式**
   解决长期存在的Agent卡在只读计划模式无法执行代码操作的用户体验问题。
   链接：https://github.com/anomalyco/opencode/pull/27535
6. **#27512 [已关闭] ToolRegistry新增空值校验处理**
   解决插件导出 barrels 时为空导致的注册崩溃问题，提升插件加载鲁棒性。
   链接：https://github.com/anomalyco/opencode/pull/27512
7. **#27469 [已关闭] 修复Tauri迁移到Electron后历史会话数据丢失问题**
   做旧版本存储名的映射迁移，用户升级桌面端后不会丢失所有历史会话记录。
   链接：https://github.com/anomalyco/opencode/pull/27469
8. **#27461 [已关闭] 插件系统新增侧边栏面板API**
   支持第三方插件在侧边栏注册自定义带状态标识的信息面板，大幅扩展插件UI展示能力。
   链接：https://github.com/anomalyco/opencode/pull/27461
9. **#27460 [已关闭] 新增MiniMax Token Plan OAuth认证提供方**
   完成国内主流大模型服务商MiniMax的官方接入，支持一键OAuth登录绑定Token套餐。
   链接：https://github.com/anomalyco/opencode/pull/27460
10. **#32349 [开放] 默认全局开启计划模式**
    降低新用户上手门槛，默认让Agent先输出开发计划再执行操作，减少意外修改文件的概率。
    链接：https://github.com/anomalyco/opencode/pull/32349

## 5. 功能需求趋势
从今日更新的Issue中提炼出社区五大核心需求方向：
1. **插件生态扩展**：围绕插件钩子、自定义UI面板、能力开放的需求占比超过30%，开发者正在快速丰富OpenCode的三方生态；
2. **上下文能力增强**：RLM新型上下文管理、多模态图片输入、多模型融合等需求集中爆发，开发者对大模型长会话处理能力的要求持续提升；
3. **远程开发适配**：SSH远端目录支持、WSL环境运行桌面端、SSH长会话稳定性等需求占比快速提升，面向服务器端无代理开发场景的需求激增；
4. **订阅体验优化**：跟随大模型厂商降价动态调整配额、新增更多主流国产模型接入成为付费用户最关注的点；
5. **基础设施稳定性**：数据库自动清理、多Agent会话资源隔离、MCP生态兼容等底层稳定性需求逐步进入核心迭代队列。

## 6. 开发者关注点
今日高频反馈痛点集中在三类：
1. **TUI/CLI体验问题集中**：终端复制粘贴丢换行、退出后终端状态异常、SSH长会话7万Token左右直接冻结、输入无响应等基础交互Bug大量反馈，属于下一版本优先修复队列；
2. **跨端兼容性故障多**：Windows桌面端侧边栏文件列表不自动刷新、升级Electron后历史数据丢失、国内模型接入不全等问题影响大量桌面端用户使用；
3. **多Agent场景资源泄漏**：共享状态污染导致多工作区PR创建失败、长运行服务端数据库无限膨胀等问题，严重影响重度多Agent用户的使用体验。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 2026-06-15
数据来源：github.com/badlogic/pi-mono

---

## 1. 今日速览
今日Pi社区迭代核心聚焦于可用性问题修复、多模型生态扩展与开发者体验升级，过去24小时累计处理近30条更新Issue与12条PR，覆盖缓存成本异常、命令无响应、第三方模型接入等多个用户高频反馈的痛点。大量广受期待的扩展相关特性进入开发落地阶段，社区活跃度维持高位。

## 2. 版本发布
过去24小时暂无正式版本发布，所有功能迭代均在主分支开发中，后续将统一纳入0.79.x稳定更新包。

## 3. 社区热点 Issues
挑选10个优先级最高、社区关注度最高的Issue：
1. **#5103 Windows非默认路径下Git Bash识别失败**：https://github.com/earendil-works/pi/issues/5103
   重要性：该Bug直接导致大量将Git Bash安装到非C盘路径的Windows用户无法使用核心Shell执行能力，目前已有17位开发者参与讨论适配方案，是Windows平台最高优先级的兼容性问题。
2. **#5653 迁移移除Shrinkwrap依赖**：https://github.com/earendil-works/pi/issues/5653
   重要性：架构层核心优化项目，解决同时安装pi-ai和pi-coding-agent时重复加载依赖、模块级全局状态不同步的问题，彻底修复API提供商注册表等核心逻辑异常的根因。
3. **#5703 Claude系列模型1小时长缓存静默降级为5分钟**：https://github.com/earendil-works/pi/issues/5703
   重要性：该Bug直接推高用户使用Anthropic接口的调用成本，修复后预计可将长缓存场景下的Claude调用开销降低60%以上，目前已正式关闭合并。
4. **#5654 给sendMessage()自定义消息新增excludeFromContext属性**：https://github.com/earendil-works/pi/issues/5654
   重要性：满足扩展开发者注入状态类消息、不占用模型上下文窗口的需求，大幅减少无意义Token消耗，目前已有对应PR同步跟进实现。
5. **#5687 安装MCP服务扩展时pi list/pi update命令挂起无法退出**：https://github.com/earendil-works/pi/issues/5687
   重要性：CLI层高频可用性Bug，修复后完全避免用户手动强制终止扩展管理命令的操作，目前已正式关闭修复。
6. **#3627 OpenAI系列提供商暴露超时与重试配置**：https://github.com/earendil-works/pi/issues/3627
   重要性：解决本地大模型推理场景下默认10分钟超时不符合需求的痛点，适配低算力本地长耗时推理的自定义场景，社区获赞2次，呼声极高。
7. **#5671 ~/.pi全局目录与项目级.privacy目录重叠**：https://github.com/earendil-works/pi/issues/5671
   重要性：优化全局配置与项目级配置的存储隔离逻辑，避免配置冲突、数据污染的潜在风险，核心维护者mitsuhiko深度参与讨论，属于架构优化重点方向。
8. **#5700 支持TUI下多并发代理会话切换**：https://github.com/earendil-works/pi/issues/5700
   重要性：终端交互层面的重磅特性，支持用户后台同时运行多个不同任务、随时切换交互，大幅提升多任务处理效率。
9. **#5710 新增扩展级提示词指南API**：https://github.com/earendil-works/pi/issues/5710
   重要性：允许不同扩展声明专属提示规范，统一注入到代理上下文中，避免多扩展之间的行为冲突，大幅提升复杂扩展生态下的代理行为一致性。
10. **#5728 auth.json支持提供商专属配置**：https://github.com/earendil-works/pi/issues/5728
    重要性：解决Cloudflare AI网关等需要多参数配置的接入需求，摆脱之前完全依赖环境变量配置的限制，大幅简化多提供商多实例场景下的部署流程。

## 4. 重要 PR 进展
挑选10个核心PR的落地状态：
1. **#5714 新增xAI Grok账号OAuth登录支持**：https://github.com/earendil-works/pi/pull/5714
   已合并，实现完整的xAI OIDC设备码登录、刷新Token流程，内置Grok全系列模型适配，用户可直接通过Pi登录面板一键接入Grok服务。
2. **#2331 新增类Vim模态编辑器扩展**：https://github.com/earendil-works/pi/pull/2331
   已合并，完整支持Normal/Insert/Visual/命令行模式、全系列Vim操作符与移动快捷键，直接在Pi TUI内实现类Vim编辑能力，大幅提升键盘操作效率。
3. **#5732 给sendUserMessage接口新增allowCommands配置**：https://github.com/earendil-works/pi/pull/5732
   已合并，允许扩展注入的用户消息触发Slash命令，支持外部桥接场景下的会话重置、自定义控制命令调用，大幅提升扩展的外部交互能力。
4. **#5678 自定义消息新增excludeFromContext属性**：https://github.com/earendil-works/pi/pull/5678
   开发中，实现消息正常显示但不进入模型上下文窗口的能力，同时兼容消息压缩、分支摘要等已有逻辑，对应#5654 Issue的官方实现。
5. **#5735 安全延迟扩展重载请求**：https://github.com/earendil-works/pi/pull/5735
   开发中，将`ctx.reload()`接口移动到基础扩展上下文，在会话的安全边界执行重载操作，完全避免扩展重载时的状态不一致问题。
6. **#5711 新增扩展提示词指南API**：https://github.com/earendil-works/pi/pull/5711
   开发中，实现官方`pi.setPromptGuidelines()`接口，允许扩展向代理注册专属行为规范，落地#5710提出的需求。
7. **#5385 首次运行终端主题自动检测**：https://github.com/earendil-works/pi/pull/5385
   已合并，通过OSC协议自动查询终端的深浅主题偏好，自动匹配对应Pi主题，大幅降低首次使用的适配成本。
8. **#5731 新增工具执行性能埋点**：https://github.com/earendil-works/pi/pull/5731
   已合并，支持全链路的工具执行性能采集与Profiling，方便开发者快速定位工具调用慢、耗时异常问题。
9. **#5708 扩展问答文本自动换行适配**：https://github.com/earendil-works/pi/pull/5708
   已合并，修复超长提示文本被截断、终端显示不全的问题，完全关闭对应相关Issue。
10. **#5526 OpenAI Responses流增加终端事件校验**：https://github.com/earendil-works/pi/pull/5526
    开发中，要求流必须返回合法的终端响应事件才判定会话结束，彻底解决之前流随机中断、上下文计数异常的高频Bug。

## 5

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-15
数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日社区最高热度集中在Qwen OAuth免费配额调整事件，相关Issue累计获得135条开发者评论，大量用户正在反馈免费配额骤降后付费入口长期售罄的问题。过去24小时社区合并了近20项核心Bug修复与性能优化PR，重点解决了自主Agent运行时内存溢出、MCP工具调用失效、TUI僵尸进程卡死等多个高频高优先级问题，没有新的正式版本发布。

## 2. 版本发布
过去24小时无新的正式Release发布。

## 3. 社区热点 Issues（10个精选）
| Issue编号 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- |
| #3203 | Qwen OAuth免费层级政策调整：免费日配额从1000次下调到100次，后续将完全下线免费入口 | 全社区热度最高Issue，累计135条开发者评论，大量个人开发者正在讨论付费迁移、成本核算方案 | https://github.com/QwenLM/qwen-code/issues/3203 |
| #5055 | Windows版VS Code插件0.18.0触发杀毒软件警报，报出Trojan:JS/ShaiWorm.DBA!MTB木马风险 | P1级安全反馈，团队当前正收集用户环境信息排查是打包环节误报还是实有安全风险，大量Windows用户暂停升级插件 | https://github.com/QwenLM/qwen-code/issues/5055 |
| #4218 | Windows端MCP filesystem服务显示已连接，但模型无法获取工具定义、不能调用文件操作能力 | MCP生态的高频卡点Bug，涉及大量接入本地文件系统的用户，目前已有开发者提交修复PR | https://github.com/QwenLM/qwen-code/issues/4218 |
| #5080 | 阿里云百炼Standard API Key和Token Plan接入点混用直接返回401鉴权失败 | 配置侧高频坑点，大量国内开发者配置完API Key后切换模型时直接报错，用户期望增加配置校验逻辑避免混用 | https://github.com/QwenLM/qwen-code/issues/5080 |
| #5083 | Linux环境下TUI运行过程中无响应，诊断发现是僵尸子进程未被回收 | 核心稳定性问题，开发者反馈无响应时进程仍在高占用内存，日常开发场景复现概率较高 | https://github.com/QwenLM/qwen-code/issues/5083 |
| #5102 | 非交互CLI模式下，权限探测环节仍然会直接执行服务商返回的副作用Shell命令 | P1级安全漏洞，可能导致未授权的文件写入等风险操作，目前团队正在加急修复 | https://github.com/QwenLM/qwen-code/issues/5102 |
| #4845 | 新增/Claude配置一键导入功能，支持直接迁移Claude Code的MCP服务、自定义规则、权限配置 | 大量跨工具使用的开发者投票支持，可大幅降低多工具切换的配置成本 | https://github.com/QwenLM/qwen-code/issues/4845 |
| #5015 | Qwen Code会对完全相同的工具调用请求重复执行 | 核心逻辑Bug，在自主Agent循环场景下会大量重复调用命令，浪费配额同时可能修改本地文件状态 | https://github.com/QwenLM/qwen-code/issues/5015 |
| #3272 | Pro付费计划长期显示售罄，免费配额下调后用户无法正常采购付费服务 | 大量海外开发者反馈付费路径阻塞，核心诉求是扩容付费配额、开放购买入口 | https://github.com/QwenLM/qwen-code/issues/3272 |
| #4926 | Linux SSH环境下/copy拷贝命令依赖xclip/xsel直接报错，无法使用 | 远程服务器开发场景高频痛点，用户期望兼容终端转义序列完成拷贝无需依赖本地GUI工具 | https://github.com/QwenLM/qwen-code/issues/4926 |

## 4. 重要 PR 进展（10个精选）
| PR编号 | 内容说明 | 链接 |
| --- | --- | --- |
| #5097 | 修复自主Agent循环运行时事件循环无空闲窗口，导致内存监控模块完全饿死、持续内存上涨最终OOM的问题 | https://github.com/QwenLM/qwen-code/pull/5097 |
| #5111 | 新增活跃工具结果历史预算控制机制，超过字符阈值后自动对早期非必要工具输出做微压缩，避免上下文无限制膨胀 | https://github.com/QwenLM/qwen-code/pull/5111 |
| #4894 | 修复DualOutput模式下FIFO命名管道无读者连接时启动直接阻塞的问题，对应解决Issue#4727的TUI无响应Bug | https://github.com/QwenLM/qwen-code/pull/4894 |
| #4967 | MCP工具Schema校验环节新增数字字符串自动强转能力，自动把符合数字格式的字符串转成integer/number类型，解决工具参数校验不通过的问题 | https://github.com/QwenLM/qwen-code/pull/4967 |
| #5115 | 未启用多Agent团队能力时自动隐藏Agent工具的name参数，避免bundled /review技能报错死循环 | https://github.com/QwenLM/qwen-code/pull/5115 |
| #4525 | 优化prompt Token估算逻辑，把上一轮模型返回的响应Token也纳入统计，避免低估上下文大小触发溢出 | https://github.com/QwenLM/qwen-code/pull/4525 |
| #5073 | 新增启动预警机制，当QWEN.md等全局上下文指令占比超过模型上下文窗口15%时自动弹出警告提示用户优化 | https://github.com/QwenLM/qwen-code/pull/5073 |
| #4909 | 扩展安装能力新增支持本地.zip/.tar.gz压缩包、远程压缩包URL直接安装，降低私有扩展部署门槛 | https://github.com/QwenLM/qwen-code/pull/4909 |
| #5082 | 桌面端工作目录徽章新增显示当前Git分支名称，无需切出工具就能快速确认代码分支状态 | https://github.com/QwenLM/qwen-code/pull/5082 |
| #4989 | 新增CI定时自动修复工作流，每日自动拾取1个超过7天无人处理的陈旧Bug，用Qwen Code自主修复后提交PR | https://github.com/QwenLM/qwen-code/pull/4989 |

## 5. 功能需求趋势
从今日更新的Issue来看社区核心需求集中在4个方向：
1. **跨厂商迁移适配**：Claude Code动态工作流、配置一键导入等需求占比快速上涨，开发者希望降低多AI编码工具切换成本
2. **全链路性能优化**：社区普遍反馈现有AI生成代码内存管理逻辑差，要求根治内存泄漏、大输出崩溃、长会话加载慢等老问题
3. **MCP生态兼容**：大量开发者正在接入自定义MCP服务，需求集中在全类型MCP服务的稳定适配、错误提示优化
4. **第三方生态开放**：开放自定义Provider支持任意协议的第三方模型接入，不再局限于官方预置的模型列表

## 6. 开发者关注点
今日开发者反馈的核心痛点集中在三点：
1. 免费配额骤降后付费通道长期售罄，大量个人开发者无法顺利采购付费服务，直接影响日常开发流程
2. 高P级稳定性问题频发：TUI无响应、僵尸进程不回收、非交互模式误执行高风险命令等问题直接影响编码Agent的本地运行信任度
3. Windows端安全软件误报木马事件引发大量用户对打包产物安全性的担忧，不少用户暂缓升级新版本等待官方排查结果

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
日期：2026-06-15
项目地址：https://github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览
今日核心动态为项目正式完成品牌重命名发布v0.8.60版本，原有旧包名`deepseek-tui`正式废弃，全量迁移到新的`CodeWhale`产品体系。上游团队已集结v0.8.61预览分支，集中收割社区反馈的Windows平台兼容性、多模型接入、多智能体稳定性类Bug，大量社区贡献的特性已经通过PR合并进入待发布队列。当前产品迭代重心从基础功能建设转向生产级可用性、企业级能力扩展方向。

## 2. 版本发布
今日正式发布 **v0.8.60** 版本，核心变更如下：
- 全链路产品标识统一为`CodeWhale`，作为官方唯一项目名、命令行名、NPM包名
- 原有旧NPM包`deepseek-tui`正式停止迭代，不再接收后续更新
- 所有v0.8.x旧版本用户需参照官方迁移文档`docs/REBRAND.md`完成替换升级

## 3. 社区热点 Issues
共筛选10个当前最高优先级、社区讨论最活跃的Issue：
1.  **#2487 YOLO模式高频断流连无法恢复**：累计12条评论，是当前反馈量最高的阻塞性问题，用户在全权限执行模式下经常遇到「Turn stalled - no completion signal received」报错，发送continue命令也无法续跑，已被列入v0.8.61最高优先级修复清单。
    链接：https://github.com/Hmbown/CodeWhale/issues/2487
2.  **#1186 新增类型化持久化执行权限规则**：面向企业级部署场景的核心特性，支持按工具名、命令前缀、工作区路径模式自定义allow/deny/ask三类决策规则，大量团队用户表示该特性可直接解决内部代码执行安全管控需求。
    链接：https://github.com/Hmbown/CodeWhale/issues/1186
3.  **#3147 Windows平台MSBuild初始化失败Bug**：已正式关闭修复，此前Windows环境下托管PowerShell中执行`cmake --build`完全不可用，覆盖所有使用C++/C#技术栈的Windows开发者用户。
    链接：https://github.com/Hmbown/CodeWhale/issues/3147
4.  **#1812 Windows平台TUI偶现完全无响应Bug**：累计5条反馈，Windows11下使用过程中随机出现UI冻住、所有键鼠输入无反应但进程不退出的问题，定位根源为`crossterm`事件轮询逻辑缺陷。
    链接：https://github.com/Hmbown/CodeWhale/issues/1812
5.  **#2629 国内主流OpenAI兼容服务商返回401错误**：大量国内用户反馈配置硅基流动、腾讯云TokenHub等平台接口时，即使API Key配置完全正确也持续返回认证错误，属于通用OpenAI适配层的逻辑缺陷，影响大量第三方模型接入场景。
    链接：https://github.com/Hmbown/CodeWhale/issues/2629
6.  **#2574 服务商自动降级切换特性需求**：用户呼吁增加多服务商自动fallback能力，当前遇到配额耗尽、限流、5xx错误时需要手动执行`/provider`命令切换，严重打断执行流程，该需求目前已完成配置层开发。
    链接：https://github.com/Hmbown/CodeWhale/issues/2574
7.  **#3207 Ubuntu 22.04运行提示GLIBC版本不兼容**：大量云服务器用户反馈，当前发布的二进制编译依赖GLIBC2.39，无法在默认预装GLIBC2.35的Ubuntu22.04系统上运行，要求官方提供多版本兼容的构建产物。
    链接：https://github.com/Hmbown/CodeWhale/issues/3207
8.  **#2924 重命名后NPM无法升级新版本**：最高频的迁移类用户反馈，旧用户执行升级命令后找不到`deepseek`入口，完全无法获取新版本。
    链接：https://github.com/Hmbown/CodeWhale/issues/2924
9.  **#2211 多智能体并行场景下TUI资源耗尽卡死**：官方团队标注为Release Blocker，执行大规模多智能体编排任务时，并行子Agent+后台隐藏工作目录会占满TUI渲染资源直接崩溃，影响所有复杂生产任务。
    链接：https://github.com/Hmbown/CodeWhale/issues/2211
10. **#3102 Agent原生澄清提问能力建设**：当前Agent遇到歧义需求只能发送普通聊天消息，用户经常漏看导致任务走偏，计划新增模态弹窗级别的原生交互入口，大幅提升复杂任务的交互准确率。
    链接：https://github.com/Hmbown/CodeWhale/issues/3102

## 4. 重要 PR 进展
筛选10个核心合并/待合并PR，覆盖下两个版本的核心交付：
1.  **#3225 v0.8.61总览迭代PR**：目前处于评审状态，包含28条提交，覆盖社区Bug收割、TUI卡死问题修复、WhaleFlow分布式智能体基础层能力落地，是下一个正式版本的核心交付包。
    链接：https://github.com/Hmbown/CodeWhale/pull/3225
2.  **#2811 VS Code本地运行时扩展脚手架落地**：官方第一方IDE扩展正式启动开发，新增CodeWhale侧边栏入口、本地运行时状态检测、HTTP服务自动拉起能力，打通编辑器和TUI的能力链路。
    链接：https://github.com/Hmbown/CodeWhale/pull/2811
3.  **#2779 服务商fallback链配置能力落地**：完成多服务商自动降级的配置层开发，支持用户自定义优先级顺序的备用服务商列表，后续将直接支撑用户呼声极高的自动切换能力。
    链接：https://github.com/Hmbown/CodeWhale/pull/2779
4.  **#2795 认证错误上下文增强**：所有401报错现在会直接展示对应的服务商地址、模型名、掩码后的API Key指纹，大幅降低用户排查配置错误的时间成本。
    链接：https://github.com/Hmbown/CodeWhale/pull/2795
5.  **#2770 项目级MCP配置落地**：受信任工作区可以直接加载本地的`.codewhale/mcp.json`自定义工具配置，无需全局配置，方便团队直接共享自定义MCP工具集。
    链接：https://github.com/Hmbown/CodeWhale/pull/2770
6.  **#2102 低频率原生工具默认延迟加载**：非核心工具集按需动态初始化，大幅降低产品启动内存占用、加快启动速度，解决大工具集场景下启动卡顿的问题。
    链接：https://github.com/Hmbown/CodeWhale/pull/2102
7.  **#2796 新增`/sidebar`侧边栏控制命令**：支持用户一键显隐侧边栏，还可持久化保存配置，适配需要专注浏览超长对话记录的使用场景。
    链接：https://github.com/Hmbown/CodeWhale/pull/2796
8.  **#2797 新增Sofya搜索引擎后端**：原生网页搜索新增第4个可选数据源，拓展公开信息检索的覆盖范围。
    链接：https://github.com/Hmbown/CodeWhale/pull/2797
9.  **#2805 确定性响应缓存落地**：针对`temperature=0`、无工具调用的纯请求自动缓存相同输入的响应结果，大幅降低重复任务的API消耗、缩短响应延迟。
    链接：https://github.com/Hmbown/CodeWhale/pull/2805
10. **#2806 多智能体运行状态常驻侧边栏**：解决窄屏设备下智能体执行进度文字被截断的问题，所有子任务的运行状态、耗时、分支信息都可以完整展示。
    链接：https://github.com/Hmbown/CodeWhale/pull/2806

## 5. 功能需求趋势
从全部社区Issue中提炼出当前4个最高频的需求方向：
1.  **多生态模型接入优化**：集中在服务商自动降级、国内主流开源模型平台兼容、多厂商OpenAI接口适配，反映出用户不再局限使用单一厂商的模型服务，对混合调度能力需求极强。
2.  **多智能体编排能力升级**：WhaleFlow分布式 swarm 调度、子任务断点续跑、子Agent权限自动派生、多智能体结果聚合类需求爆发，说明大量用户已经开始用该产品落地复杂的多智能体生产任务。
3.  **日常编码环境打通**：VS Code第一方扩展、上架Zed编辑器Agent Registry等需求持续增长，开发者希望把TUI的能力和日常编码环境深度整合，不需要在独立终端和编辑器之间反复切换。
4.  **企业级安全管控能力**：自定义执行权限规则、子Agent沙箱、配置中心化管理相关的需求占比持续提升，说明产品已经从个人开发者场景快速渗透到企业内部落地场景。

## 6. 开发者关注点
当前社区反馈的核心痛点集中在4个方向：
1.  **重命名迁移阵痛**：大量老用户遇到NPM升级失败、命令找不到的问题，迁移指引不够醒目，是当前最高频的用户侧阻碍。
2.  **Windows平台兼容性短板**：Windows下TUI偶现卡死、SSE多智能体45秒超时、MSBuild不兼容类Bug占总Bug量的40%，是Windows用户群体留存的最大阻碍。
3.  **长任务可用性不足**：子Agent120s硬超时、任务卡死无法续跑、多服务商接入报错等问题，直接导致复杂长任务成功率低，大量用户反馈当前版本还无法完全用于核心生产流程。
4.  **可观测性缺失**：非DeepSeek模型没有成本统计能力、长任务没有Token消耗/运行时长/资源占用实时展示，开发者很难感知大任务的资源开销，容易出现超出预算的情况。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*