# AI CLI 工具社区周报 2026-09-28

> 生成时间: 2026-09-28 01:30 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 跨工具AI命令行生态对比报告 | 2026-09-28
---

## 1. 生态概览
AI开发者命令行生态正处于高速成熟阶段，前沿模型支持（Claude Opus 5.5、GPT-6系列、Gemini 3.8 Flash）几乎在同一周内完成了对所有主流工具的覆盖。安全加固（路径遍历修复、权限粒度控制、沙箱可靠性）和智能体系统健壮性（子智能体正确性、持久会话生命周期、长时运行工作负载稳定性）已成为全行业普遍的首要优先级，同时标准化MCP（Model Context Protocol，模型上下文协议）集成的需求也在持续增长。企业与高级用户群体正推动对细粒度策略控制、BYOK/自定义服务商灵活性、跨设备/无界面部署模式的需求，而平台特定缺陷（尤其是Windows兼容性与桌面端版本回归问题）仍是闭源与开源产品共同存在的、持续影响用户体验的痛点。

---

## 2. 活跃度对比
| 工具 | 问题（近7天活跃/重点问题） | PR（近7天活跃/重点PR） | 讨论（近7天活跃讨论） | 发布状态（近7天） |
|------|----------------------------|-----------------------|----------------------|------------------|
| Claude Code | 10个重点问题（7个待解决，3个已关闭） | 10个核心PR（4个待合并，6个已合并） | 未纳入（无数据提供） | 4次小版本发布（v2.1.280–v2.1.283） |
| OpenAI Codex | 10个重点问题（全部待解决） | 10个核心PR（全部待合并） | 10条活跃讨论（5条功能设想、2条问答、3条成果展示） | 10个Rust SDK alpha版本（v0.158.0 / v0.159.0 版本线） |
| Gemini CLI | 10个重点问题（全部待解决） | 10个核心PR（7个待合并，3个已合并） | 未纳入（无数据提供） | 7次发布：1个稳定版（v0.61.0）、1个预览版、5个每日构建版 |
| GitHub Copilot CLI | 10个重点问题（8个待解决，2个已关闭） | 4个活跃PR（3个为文档/CI相关，1个为垃圾内容） | 未纳入（无数据提供） | 8个预发布构建版本（v1.0.88–v1.0.89-5） + 1个稳定版补丁 |
| OpenCode | 10个重点问题（9个待解决，1个已关闭） | 10个核心PR（6个待合并，4个已合并/关闭） | 未纳入（无数据提供） | 1个稳定版发布（v1.18.32） |
| Pi | 10个重点问题（8个待解决，2个已关闭/进行中） | 10个核心PR（3个待合并，7个已合并） | 7条活跃讨论（3条功能设想/路线图、2条问答、2条成果展示） | 2次小版本发布（v0.87.0、v0.87.1） |
| Qwen Code | 10个重点问题（9个待解决，1个已关闭） | 10个核心PR（9个待合并，1个已合并） | 未纳入（无数据提供） | 6次发布：3个稳定版（v0.24.4–v0.24.6）、3个每日构建版 |

---

## 3. 共性功能方向
跨社区需求反映出3款及以上工具面临的用户需求趋同：
1. **细粒度权限与安全控制**
   - *涉及工具*：Claude Code、GitHub Copilot CLI、OpenCode、Qwen Code
   - *需求*：全局/会话级工具允许列表（只读 vs 破坏性操作层级）、沙箱加固、路径遍历风险缓解，以及面向企业部署的组织级策略强制执行。
2. **MCP生态健壮性与标准化**
   - *涉及工具*：Claude Code、OpenAI Codex、GitHub Copilot CLI、Pi、Qwen Code
   - *需求*：对可选字段的容错协议处理、稳定的长连接服务器连接、OAuth兼容性，以及MCP工具调用的标准化可观测性。
3. **智能体可靠性与子智能体正确性**
   - *涉及工具*：Claude Code、Gemini CLI、Qwen Code、Pi
   - *需求*：修复虚假成功上报、子智能体循环挂起问题，优化自主工具/技能路由逻辑，以及长时运行智能体工作流的持久会话生命周期。
4. **多模型灵活性与服务商选择自由**
   - *涉及工具*：Claude Code、GitHub Copilot CLI、OpenCode、Pi、Qwen Code
   - *需求*：会话内切换模型、BYOK/本地服务商支持、别名保留，以及跨多服务商目录的透明成本追踪。
5. **长时会话稳定性**
   - *涉及工具*：全部7款工具
   - *需求*：内存泄漏修复、资源泄漏清理（进程槽位、MCP服务器、WAL文件增长）、保留上下文的可靠压缩机制，以及认证令牌刷新的容错能力。

---

## 4. 差异化分析
| 工具 | 核心定位 | 目标用户 | 技术路径 |
|------|----------|----------|----------|
| **Claude Code** | 企业级安全、差异面板交互体验、网关基础设施 | 企业团队、注重安全的开发者、Anthropic生态用户 | 与Anthropic模型栈深度集成；大力投入`sec-default`分层策略执行机制与网关端可观测能力建设。 |
| **OpenAI Codex** | 桌面端稳定性、沙箱技术、MCP工具链 | 主流开发者、OpenAI生态高级用户 | 快速迭代Rust SDK；与OpenAI的Guardian安全层及Electron桌面技术栈深度整合。 |
| **Gemini CLI** | 智能体智能性、安全加固、工作区信任机制 | Google Cloud用户、多智能体工作流构建者 | 原生支持Gemini模型家族；聚焦AST感知代码导航，以及利用模型原生bash亲和性实现的零依赖操作系统沙箱。 |
| **GitHub Copilot CLI** | 生态兼容性、会话交互体验、GitHub集成 | GitHub原生开发者、使用GitHub身份体系的企业团队 | 构建于GitHub身份与连接器生态之上；优先保障跨工具规则文件兼容性（如Claude Code的`.claude/rules`）与托管式同意流程。 |
| **OpenCode** | 多服务商灵活性、社区驱动的插件生态 | 自托管用户、多云/DIY开发者 | 开源、服务商无关架构；社区活跃贡献新服务商适配与插件，聚焦无界面/CI部署模式。 |
| **Pi** | 扩展平台、性能优化、开源模型支持 | 技术爱好者、扩展开发者、开源模型用户 | 高可扩展插件架构；聚焦启动延迟优化，以及广泛兼容自托管/替代服务商。 |
| **Qwen Code** | 托管式智能体架构、企业级持久性、A2A协作 | 构建多智能体系统的企业团队、阿里云用户 | 双路径（传统+托管）引擎架构；大力投入持久会话操作、运行时代理容错能力，以及基于A2A的多智能体拓扑。 |

---

## 5. 社区动能与成熟度
### 最高迭代速度 / 快速演进
- **OpenAI Codex**：7天内发布10个SDK版本，且在功能设想/问答/成果展示板块均有活跃社区讨论，但桌面端版本回归问题表明其高速开发是以稳定性为代价的。
- **Claude Code**：保持每周发布节奏，共推送4个小版本，聚焦渐进式的交互体验与安全改进；问题互动活跃度高（头部问题获35条评论、28个👍）。
- **Qwen Code**：6次发布 + 10个活跃高优先级PR，对应清晰的托管式智能体路线图，结构化的双路径架构推动了协调有序的开发。

### 最活跃社区参与
- **OpenAI Codex**：拥有最活跃的讨论生态，社区自研工具丰富（移动端移植、多智能体协调层），高赞功能需求多（远程控制ChatGPT的需求获191个👍）。
- **Pi**：扩展生态蓬勃发展，有社区精选的插件推荐、第三方服务商集成，以及通过fork向上游贡献功能的活跃模式。
- **OpenCode**：新服务商适配与插件的社区贡献渠道畅通，长期存在的高赞交互体验问题（剪贴板修复获32个👍）表明用户参与度持续稳定。

### 更高成熟度 / 聚焦稳定性
- **GitHub Copilot CLI**：核心代码迭代较慢（仅4个活跃PR，多为文档/CI相关），但预发布版本的交互体验打磨稳步推进；其成熟度体现在生态兼容性建设（支持Claude Code规则）而非核心架构 overhaul 上。
- **Gemini CLI**：发布节奏均衡（稳定版+预览版+每日构建），高度聚焦安全加固与缺陷修复，表明核心平台正趋于成熟。

---

## 6. 趋势信号
对于技术决策者与工具开发者而言，这些社区模式指向了具备落地参考价值的行业趋势：
1. **智能体可靠性成为新战场**：所有工具的用户投诉中，子智能体正确性（虚假成功、循环挂起）和长时会话持久性都是首要问题——胜出的工具将优先打造可观测、可恢复的智能体执行机制，而非单纯堆砌功能数量。
2. **MCP正成为事实标准**：几乎所有工具都在投入MCP兼容性建设，企业用户推动了OAuth、权限范围、跨工具MCP服务器可移植性的需求。具备健壮、符合标准的MCP支持的工具将获得生态锁定优势。
3. **细粒度安全从加分项变为必备项**：用户不再满足于“全部批准/逐个批准”的二元权限模型，转而要求分层读写控制、全局允许列表和组织级策略强制执行——尤其是在企业与生产级智能体部署场景中。
4. **多服务商灵活性是刚性需求**：即便是官方原生工具（Copilot CLI、Gemini CLI）也在新增对竞争模型的支持，而开源工具领域对BYOK/本地模型支持的需求十分旺盛。基于AI命令行工具做开发的开发者期望跨服务商的可移植性，以避免锁定风险与成本风险。
5. **Windows兼容性仍是无差异痛点**：所有主流工具都报告了比例失衡的Windows相关缺陷（沙箱失败、控制台闪烁、路径处理问题）——投入打造一流Windows支持的工具，能够捕获大量未被充分服务的用户群体。
6. **无界面/CI部署是快速增长的使用场景**：开源与企业领域对流水线、容器、服务端部署中命令行工具的需求都在上升，推动了对可复现构建、机器可读输出、API控制的智能体生命周期的需求。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区亮点报告
*数据截至2026-09-28，来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. 热门技能排行榜（按社区讨论/关注度排序）
排名依据为PR活跃时长、更新频率，以及与社区高讨论度Issue主题的匹配度（源数据中评论数标注为未定义，因此采用关联活跃信号进行排名）。

1. **skill-creator（触发评估修复 & Windows 运行时修复）**  
   - PR: [#1298](https://github.com/anthropics/skills/pull/1298) | 状态：开放 | 作者：MartinCajiao
   - 功能：修复技能触发评估中的误漏判/无效得分问题，解决Windows上`select()`子进程管道故障，并防止无关工具中断触发扫描。
   - 讨论亮点：与多个高评论量Issue（#556、#1383）反馈的触发评估失效、Windows兼容性缺口问题高度契合，是技能构建者领域的核心基础设施优先级事项。
   - 最后更新：2026-09-16

2. **mcp-builder（MCP 2.0 兼容性 & 自定义请求头）**  
   - PR: [#1742](https://github.com/anthropics/skills/pull/1742) | 状态：开放 | 作者：Kuldeeep18
   - 功能：新增对MCP >=2.0.0版本中重命名后的`streamable_http_client`导入的支持，并支持通过`create_mcp_http_client`配置自定义HTTP请求头。
   - 讨论亮点：修复了所有MCP集成技能普遍存在的失效问题（对应Issue #1668），直接响应了生态向MCP 2.0标准迁移的趋势。
   - 最后更新：2026-09-27

3. **AWT (AI Watch Tester) – 零代码端到端测试技能**  
   - PR: [#822](https://github.com/anthropics/skills/pull/822) | 状态：开放 | 作者：ksgisang
   - 功能：开源技能，为Claude赋予视觉能力与浏览器控制能力，可自动化生成、执行和调试端到端测试。
   - 讨论亮点：活跃时间最长的功能PR之一（2026年3月开放至今），契合社区对低代码测试自动化的需求（与`testing-patterns`技能PR的诉求相呼应）。
   - 最后更新：2026-09-19

4. **proofcore-contract-auditor – Web3 智能合约审计技能**  
   - PR: [#1771](https://github.com/anthropics/skills/pull/1771) | 状态：开放 | 作者：ProofCore-Protocol
   - 功能：智能体技能，可对Solidity和Rust编写的智能合约进行自动化静态分析，通过零存储默克尔协议将加密审计证明锚定至TON区块链。
   - 讨论亮点：代表了近期技能提交中增长最快的细分领域（Web3/安全），为AI审计工作流引入了区块链原生的存证能力。
   - 最后更新：2026-09-16

5. **notion-spec-to-implementation + quantitative-resume-auditor**  
   - PR: [#1245](https://github.com/anthropics/skills/pull/1245) | 状态：开放 | 作者：mrdesouzaphd-cmyk
   - 功能：双技能提交：(1) 将产品/技术规格转化为可执行的Notion任务，附带实施计划和验收标准；(2) 基于数据进行简历质量审计。
   - 讨论亮点：截至2026-09-28最新更新的长周期功能PR，满足了工作流自动化和生产力工具集成的高需求。
   - 最后更新：2026-09-28

6. **testing-patterns – 全栈测试方法论技能**  
   - PR: [#723](https://github.com/anthropics/skills/pull/723) | 状态：开放 | 作者：4444J99
   - 功能：全面的测试指南，涵盖测试奖杯模型、单元测试AAA模式、React组件测试、端到端最佳实践和边界用例设计。
   - 讨论亮点：已活跃6个月以上且持续更新，填补了AI生成代码标准化测试指导的空白。
   - 最后更新：2026-09-21

---

## 2. 社区需求趋势（来自热门Issue）
评论量最高的Issue反映出四大优先需求方向：
1. **信任与安全治理**：Issue #492（43条评论）指出社区技能存在冒充官方`anthropic/`命名空间技能的严重风险，推动了对验证机制、命名空间隔离和安全审计工具的需求（与拟议的`skill-security-analyzer`和`agent-governance`技能方向一致）。
2. **企业协作与共享**：Issue #228（16条评论，8个赞）请求提供组织级技能共享库，以替代手动文件传输，体现了对团队/权限化技能分发工作流的需求。
3. **技能构建者基础设施可靠性**：Issue #556（12条评论，7个赞）、#1383、#1390均反馈了评估流水线故障、触发检测失效和平台兼容性缺口问题——核心工具链改进是技能创作者最迫切的技术需求。
4. **上下文效率与质量控制**：Issue #1487（`claude-api`技能的Token注入过量问题）、#1385（推理质量门禁流水线提案）和#514（文档排版质量技能）均反映了对减少Token浪费、强化输出质量管控的技能需求。

---

## 3. 高潜力待落地技能
以下活跃且近期更新的PR预计将很快合并，解决社区核心痛点：
- **docx 孤立评论检测** ([#1734](https://github.com/anthropics/skills/pull/1734))：扩展广泛使用的docx技能套件，新增未关联评论识别能力，补充近期的docx可靠性修复（#1792、#541）。
- **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703))：零成本实现Markdown转MP4，配逼真语音旁白，填补了高需求的内容创作细分场景。
- **blast-radius** ([#1776](https://github.com/anthropics/skills/pull/1776))：针对批量/破坏性写入任务（归档、权限撤销、批量删除）的前置操作检查清单，解决操作安全缺口。
- **LibreOffice 超时错误处理（docx）** ([#1792](https://github.com/anthropics/skills/pull/1792))：修复docx变更接受流程中静默假成功的bug，是对文档工作流可靠性的高价值改进。
- **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615))：支持SSH/Slurm工作流的高性能计算集群操作技能，面向高性能计算用户群体。

---

## 4. 技能生态洞察
Claude Code Skills社区最集中的需求在于**核心基础设施可靠性提升（触发评估、跨平台兼容性）以及技能分发的信任/安全管控**，同时，能够为企业和开发者用户减少手动工作量的工作流自动化、测试工具类技能的兴趣也在快速增长。

---

# Claude Code 社区周报 | 2026-09-28
数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 近7日亮点
本周发布了4个小版本（v2.1.280–v2.1.283），核心更新包括 **Claude Opus 5.5** 正式成为默认Opus模型、网关基础设施优化，以及面向终端和桌面用户的体验改进。社区方面，近期Chat/Cowork界面合并引发的回归问题、Windows平台bug，以及agent钩子和MCP集成的权限/安全边界问题被集中反馈。开发侧团队正重点迭代差异面板、`sec-default` 安全策略执行，以及跨插件层级的遥测管道一致性。

---

## 2. 版本发布
近7天共发布4个版本：

- **v2.1.283**
  - 新增 `x-claude-code-prompt-id` 网关提示头（通过环境变量 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 开启），便于LLM网关对同一条用户prompt关联的请求进行分组。
  - 新增 `availableModelsMatch` 托管配置项；`"exact"` 模式下仅允许选择 `availableModels` 列表内的模型。
- **v2.1.282**
  - 新增 `maxProseWidth` 配置项，用于限制宽终端下Claude文本输出的最大宽度，表格和代码块仍保持全宽显示。
  - 在启动通知、`/status` 命令和 `claude doctor` 输出中，新增项目配置文件内被忽略的遥测变量列表。
- **v2.1.281**
  - 为 `desktop` 策略块中的新版Claude Desktop密钥新增Claude应用网关支持，包括 `blockReadsOutsideWorkingDirectories` 和 `disableBypassPermissionsMode` 配置。
  - 为Claude应用网关的Bedrock上游新增 `assume_role` 支持，允许网关以指定的IAM角色调用Bedrock服务。
- **v2.1.280**
  - 正式推出 **Claude Opus 5.5**（模型标识 `claude-opus-5-5`）作为新的默认Opus模型：上下文窗口100万token，定价为输入$4/百万token、输出$20/百万token，缓存读取价格为$0.20/百万token。
  - 扩展全屏模式下的鼠标支持：`/skills` 列表支持滚轮滚动，`/plugin` 中的技能状态选项支持点击操作。

---

## 3. 热门问题（按影响/活跃度排名前10）
| # | 标题 | 状态 | 重要性 | 社区反应 |
|---|-------|--------|----------------|--------------------|
| 1 | [#76694 Cowork: new projects lost "Choose a folder" — context menu replaced with Chat-style upload-only knowledge menu after Chat/Cowork merge](https://github.com/anthropics/claude-code/issues/76694) | 未解决 | 界面合并后，新用户的Cowork项目核心创建流程被破坏，同时影响Windows和macOS平台。 | 35条评论，28 👍 — 本周互动量最高的问题，用户普遍要求恢复原有的文件夹选择工作流。 |
| 2 | [#93482 Cowork: `device_commit_files` reports success on overwrites but on-disk content lags exactly one commit behind (silent stale write, fresh mtime)](https://github.com/anthropics/claude-code/issues/93482) | 未解决 | Windows平台的静默数据丢失bug：文件写入显示成功，但磁盘上实际仍为旧内容。 | 14条评论，0 👍 — 对依赖文件同步的Cowork用户属于严重问题。 |
| 3 | [#89398 Slash-command picker does not open unless "/" is first character of the composer, but the command still runs on submit](https://github.com/anthropics/claude-code/issues/89398) | 未解决 | Windows桌面端的UI不一致问题：斜杠命令自动补全面板不弹出，但提交时命令仍会执行，导致行为不符合预期。 | 15条评论，7 👍 — 高频使用斜杠命令的高级用户普遍反馈的痛点。 |
| 4 | [#92007 `/model opusplan` fails with "Unsupported model" — worked for months until today](https://github.com/anthropics/claude-code/issues/92007) | 未解决 | Windows平台模型别名发生不兼容变更，影响依赖 `opusplan` 简写的用户。 | 7条评论，12 👍 — 用户强烈要求保留别名或提供迁移指引。 |
| 5 | [#94675 `UserPromptSubmit` fires for agent/system-injected messages with no `prompt_source`/`is_meta` in payload — hooks cannot tell them from typed input (prompt-injection surface)](https://github.com/anthropics/claude-code/issues/94675) | 未解决 | 安全漏洞：钩子无法区分用户输入和agent生成的消息，存在提示注入风险。 | 3条评论，1 👍 — 被关注安全的开发者标记为重要问题。 |
| 6 | [#97701 `claude-bin --channels` churns sessions and repeatedly kills the plugin MCP server (2.1.283 regression)](https://github.com/anthropics/claude-code/issues/97701) | 未解决 | 最新版本的回归问题：macOS平台上MCP服务器被反复重启，破坏了长生命周期的守护进程/通道工作负载。 | 1条评论，0 👍 — 对生产环境无头部署至关重要。 |
| 7 | [#97058 Desktop: finished Project threads keep live sessions and fill the process cap, so new Project sessions are refused](https://github.com/anthropics/claude-code/issues/97058) | 未解决 | macOS桌面端的资源泄漏问题：已完成的项目仍占用进程槽位，导致新会话无法创建。 | 1条评论，0 👍 — 影响同时管理多个项目的用户。 |
| 8 | [#76606 Prompt cache invalidated by rewrites of messages in long sessions](https://github.com/anthropics/claude-code/issues/76606) | 已关闭 | 已修复成本问题：长会话中消息的静默重写会清空提示缓存，导致用量激增。 | 7条评论，0 👍 — 问题已解决，受到关注成本的用户欢迎。 |
| 9 | [#74447 `/color` command: support arbitrary hex colors (terminals already support truecolor)](https://github.com/anthropics/claude-code/issues/74447) | 已关闭 | 功能增强已上线：`/color` 命令现在支持真彩色十六进制值，不再局限于原有的8种命名颜色。 | 5条评论，2 👍 — 受TUI用户欢迎的体验优化功能。 |
| 10 | [#88128 MCP `tools/list` and `resources/list` rejected as invalid when optional `ttlMs`/`cacheScope` cache hints are omitted (protocol 2026-07-28)](https://github.com/anthropics/claude-code/issues/88128) | 未解决 | Linux平台的协议兼容bug：MCP的可选缓存字段被当作必填项校验，导致兼容服务器无法正常工作。 | 2条评论，0 👍 — 对MCP服务器开发者很重要。 |

---

## 4. 重要PR进展（前10）
| # | 标题 | 状态 | 描述 |
|---|-------|--------|-------------|
| 1 | [#97688 `sec-default`: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688) | 未合并 | 确保组织级 `sec-default` 策略可阻止用户安装的插件丢弃或篡改发往收集器流的遥测记录，将 `telemetry.log` 的执行范围扩展至用户层级之外。 |
| 2 | [#97334 `sec-default`: the rows a conversation keeps continue past the user tier](https://github.com/anthropics/claude-code/pull/97334) | 未合并 | 将会话行保留策略的执行范围扩展至用户/组织全层级；依赖引擎侧 `session.append` 支持，且需等待已发布CLI的兼容性验证。 |
| 3 | [#97241 `sec-default`: the system prompt's sections continue past the user tier](https://github.com/anthropics/claude-code/pull/97241) | 未合并 | 扩展系统提示词的章节组合逻辑，确保组织级 `sec-default` 规则优先级高于用户层级的修改；依赖引擎 `prompt.compose` 支持。 |
| 4 | [#94847 `diff`: the first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847) | 未合并 | 修复体验问题：此前对未跟踪/被忽略文件或工作区外文件的编辑会打开空白的差异面板，现在仅在存在可显示的已跟踪变更时才打开面板。 |
| 5 | [#95587 `diff`: a resumed session with edits opens the pane, `/clear` leaves it up, and the session line follows the engine's start](https://github.com/anthropics/claude-code/pull/95587) | 已合并 | 统一差异面板与内置面板的行为：恢复带编辑记录的会话时立即打开面板，执行 `/clear` 不关闭面板，生命周期时序与引擎保持一致。 |
| 6 | [#96434 `security-guidance`: keep denied and secret files out of the reviewer's reach](https://github.com/anthropics/claude-code/pull/96434) | 未合并 | 修复安全漏洞：此前安全指引审核器可通过Stop钩子、提交和推送审核提示中的 `git diff`/`git show` 命令，访问被会话权限规则阻止的文件。 |
| 7 | [#96487 `telemetry`: rows carry the engine's version, base version and build time from `$.session.version()`](https://github.com/anthropics/claude-code/pull/96487) | 已合并 | 通过读取 `$.session.version()`（2.1.281及以上版本支持）为遥测行添加引擎版本元数据，修复了外部构建中版本数据缺失的问题。 |
| 8 | [#96363 `diff`: pass `--no-color` so forced git colors do not empty the diff body](https://github.com/anthropics/claude-code/pull/96363) | 已合并 | 修复用户git配置中设置 `color.ui=always` 或 `color.diff=always` 时差异输出为空的问题，为差异命令禁用颜色输出。 |
| 9 | [#95423 `diff`: a shell command the tool held read-only fetches nothing](https://github.com/anthropics/claude-code/pull/95423) | 已合并 | 优化差异面板性能：执行只读shell命令（如 `ls`、`git status`、`grep`）后跳过重新拉取，与内置面板行为保持一致。 |
| 10 | [#95409 `mods/agents-md`: the AGENTS.md project-instructions mod](https://github.com/anthropics/claude-code/pull/95409) | 已合并 | 在 `mods/agents-md` 路径下新增 `agents-md` 模组源，功能为读取 `AGENTS.md` 指令文件，逻辑类似引擎处理 `CLAUDE.md` 的方式，可通过 `instructionFiles` 配置。 |

---

## 5. 热门讨论
暂缺 — 本周数据集未提供讨论数据。

---

## 6. 功能需求趋势
1. **自定义与体验控制**：用户希望获得更细粒度的TUI自定义能力（本周已上线任意十六进制颜色支持，用户仍持续需求布局、宽度控制功能，如 `maxProseWidth`）。
2. **模型灵活性**：用户强烈希望保留模型别名（如 `opusplan`），并要求模型选择变更有更清晰的文档说明，同时期望支持细粒度的 `availableModels` 匹配策略。
3. **网关与企业级管控**：对网关侧可观测性（`x-claude-code-prompt-id` 请求头）、Bedrock上游的IAM角色切换，以及桌面端和应用部署的组织级策略执行的需求持续增长。
4. **MCP生态健壮性**：开发者希望MCP协议处理更宽容（可选字段处理、更合理的启动顺序），以支持更多第三方服务器。
5. **Agent与钩子扩展性**：用户请求提供更丰富的钩子元数据（如用于区分用户/系统消息的 `prompt_source`），以及更可靠的长生命周期agent/通道部署能力。

---

## 7. 开发者痛点
1. **Chat/Cowork合并导致的回归**：界面整合破坏了"选择文件夹"项目创建等核心工作流，造成广泛的功能缺失和使用困惑。
2. **Windows平台稳定性差**：Windows平台bug数量显著偏多，包括斜杠命令选择器失效、Bash反斜杠转义问题、权限白名单路径与盘符匹配问题，以及Cowork文件同步滞后问题。
3. **会话生命周期泄漏**：桌面端和无头部署用户均遭遇资源泄漏问题 — 已完成的项目会话仍占用进程槽位、通道守护进程反复重启MCP服务器、长会话内存持续累积。
4. **权限与安全边界问题**：白名单MCP工具行为不一致、WSL2沙箱中符号链接指向的被拒绝路径绕过限制、钩子缺乏区分用户输入与agent生成消息的上下文等问题。
5. **缓存与成本不可控**：会话的静默重写和压缩副作用会导致提示缓存失效，造成长对话中成本意外飙升、性能下降。
6. **模型别名频繁变动**：模型简写（如 `opusplan`）发生不兼容变更却无明确迁移路径，破坏了现有工作流和自动化脚本。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区摘要 | 2026-09-28

---

## 1. 近 7 天亮点
本周 Rust SDK 快速发布了 10 个 alpha 版本（覆盖 v0.158.0 和 v0.159.0 版本线），同时 Windows 和 Linux 平台的桌面客户端出现了一波稳定性回退问题，26.924 构建版本被多次报告出现程序无响应、启动失败和沙箱相关问题。社区还围绕跨设备同步、远程控制，以及基于 Codex 钩子（hook）与 MCP 生态构建的第三方工具展开了深入讨论。

---

## 2. 版本发布
过去 7 天共发布了 10 个 Rust SDK alpha 版本，涵盖 `v0.158.0` 和 `v0.159.0` 两条开发线。版本标签未附带详细更新日志，但从本周的 PR 和 issue 活跃度来看，发布节奏与沙箱、应用服务器（app-server）和 CLI 功能的活跃开发进度一致。
- [rust-v0.159.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.11)（最新版本）
- [rust-v0.159.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.10)
- [rust-v0.159.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.9)
- [rust-v0.159.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.8)
- [rust-v0.159.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.7)
- [rust-v0.159.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.6)
- [rust-v0.159.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.5)
- [rust-v0.159.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.4)
- [rust-v0.158.0-alpha.15.3](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.3)
- [rust-v0.158.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.2.1)

---

## 3. 热门问题
1. **#45119** — *macOS 14.2：沙箱启动失败，报错 TIOCSTI 变量未绑定*  
   Apple Silicon 平台长期存在的沙箱 bug，已有 33 条评论；会影响 CLI 和桌面端的沙箱初始化。  
   [openai/codex#45119](https://github.com/openai/codex/issues/45119)

2. **#42739** — *Windows 桌面端更新后，本地项目从侧边栏消失*  
   32 条评论，被广泛报告的回退问题：更新后「项目」板块内容清空，但聊天和文件不受影响。  
   [openai/codex#42739](https://github.com/openai/codex/issues/42739)

3. **#48189** — *Linux：Codex Desktop 26.924.20706 卡在「正在启动你的任务」界面无响应*  
   42 个赞、24 条评论 — 本周获赞最多的 issue。回退到 26.917.71314 版本可解决，确认为 26.924 版本的明确回退问题。  
   [openai/codex#48189](https://github.com/openai/codex/issues/48189)

4. **#48554** — *Linux：Electron 运行时覆盖了 libuv 的 SIGCHLD 处理器，子进程无法被回收*  
   这是 26.924 Linux 版本中「Git 不可用」、Shell 超时和线程无响应问题的深层技术根因。  
   [openai/codex#48554](https://github.com/openai/codex/issues/48554)

5. **#48333** — *Windows：26.924.1866.0 版本启动时一直转圈，需结束 app-server 的 codex.exe 进程才能恢复*  
   22 条评论；Windows 端应用服务器启动时死锁，与 Linux 端的无响应问题模式相似。  
   [openai/codex#48333](https://github.com/openai/codex/issues/48333)

6. **#46388** — *Windows CLI 0.155.0 版本回退：提权沙箱在运行时路径验证阶段初始化失败*  
   20 条评论；0.154.0 版本正常，0.155.0 版本提权沙箱功能损坏 — 又是一个明确的版本回退问题。  
   [openai/codex#46388](https://github.com/openai/codex/issues/46388)

7. **#48422** — *Windows：每个会话/每轮交互时，Shell 子进程都会弹出可见的控制台窗口闪烁*  
   18 个赞、16 条评论；CLI 0.157.1 版本中非常影响体验的问题，与守护进程的生成行为有关。  
   [openai/codex#48422](https://github.com/openai/codex/issues/48422)

8. **#16786** — *Windows 应用反复执行 `git ls-files`，导致 NTFS 非分页池持续增长*  
   长期存在的性能泄漏问题（17 条评论，4 月起就已 open），与后台过量的 Git 查询有关。  
   [openai/codex#16786](https://github.com/openai/codex/issues/16786)

9. **#43803** — *`request_user_input_async` 提问卡片在最终消息渲染时自动消失*  
   8 个赞、11 条评论；会导致 macOS 桌面端搭配 GPT-6-Astra 时的交互式澄清流程失效。  
   [openai/codex#43803](https://github.com/openai/codex/issues/43803)

10. **#47444** — *macOS CLI 中按 F2 查看状态栏警告后，警告标识不会消失*  
    9 个赞、5 条评论；CLI 0.156.1 版本中虽小但被频繁报告的 TUI 细节优化问题。  
    [openai/codex#47444](https://github.com/openai/codex/issues/47444)

---

## 4. 重要 PR 进展
1. **#48829** — *短暂等待 Windows 沙箱配置服务启动*  
   最多轮询 5 秒服务状态，在不增加整体超时成本的前提下减少误报的启动失败问题。  
   [openai/codex#48829](https://github.com/openai/codex/pull/48829)

2. **#48799** — *修复 Windows 终端捕获时的 SGR 鼠标报告问题*  
   单独发送 SGR 编码请求，让 ConPTY 能在 Windows 上正确转换传统鼠标报告格式。  
   [openai/codex#48799](https://github.com/openai/codex/pull/48799)

3. **#48772** — *修复通过长符号链接路径连接 Unix 套接字失败的问题*  
   当对外暴露的套接字路径超过 Unix 套接字长度限制时，会解析符号链接并重试连接。  
   [openai/codex#48772](https://github.com/openai/codex/pull/48772)

4. **#48812** — *为空闲线程添加带历史感知的预热机制*  
   预构建包含历史记录和已执行工具元数据的 WebSocket 响应，降低下一轮交互的延迟。  
   [openai/codex#48812](https://github.com/openai/codex/pull/48812)

5. **#48783** — *新增单服务器 MCP 状态发现功能，支持复用线程连接*  
   用户无需执行完整的清单扫描或建立新连接，即可查看单个 MCP 服务器的状态。  
   [openai/codex#48783](https://github.com/openai/codex/pull/48783)

6. **#48814** — *保留 Mermaid 标签中的标点符号和分号*  
   修复了标签中包含分号、数组语法或类成员标点时 Mermaid 图表的渲染问题。  
   [openai/codex#48814](https://github.com/openai/codex/pull/48814)

7. **#48796** — *为 Guardian 熔断器中断新增可选的结构化错误返回*  
   引入 `auto_review.circuit_breaker` 结构化错误，用于表示 Guardian 拒绝请求，该功能需通过可选开关开启。  
   [openai/codex#48796](https://github.com/openai/codex/pull/48796)

8. **#48805** — *允许模态框打开时通过滚轮滚动对话记录*  
   用户在显示「是否执行此计划？」模态框时，仍可查看计划上下文内容。  
   [openai/codex#48805](https://github.com/openai/codex/pull/48805)

9. **#48824** — *保持语音 RTP 时间戳与 20ms 数据包对齐*  
   防止因抖动/静音偏移偏离 20ms 帧网格，导致音频接收器拒绝接收数据。  
   [openai/codex#48824](https://github.com/openai/codex/pull/48824)

10. **#564** — *feat: watch mode（监听模式）*  
    长期推进的 PR（始于 2025 年），新增被动文件监听模式：当检测到 `// CODEX:` 注释标记时触发 Codex 执行。  
    [openai/codex#564](https://github.com/openai/codex/pull/564)

---

## 5. 热门讨论

### 创意想法
1. **#9200** — *新增从 ChatGPT 应用远程控制 Codex 的能力*  
   互动量最高的创意（191 个赞、50 条评论）；用户希望能通过移动端 ChatGPT 界面控制无界面/守护进程模式的 Codex。  
   [openai/codex#9200](https://github.com/openai/codex/discussions/9200)

2. **#14067** — *跨设备同步 Codex 线程和会话上下文*  
   64 个赞、12 条评论；使用多台设备的开发者希望能在工作和家用设备间共享线程/上下文状态。  
   [openai/codex#14067](https://github.com/openai/codex/discussions/14067)

3. **#40291** — *为 Codex/Agent 功能推出高用量固定价格的个人套餐*  
   6 条评论；重度用户希望推出公平使用前提下的近乎无限用量档位，无需时刻关注用量限制。  
   [openai/codex#40291](https://github.com/openai/codex/discussions/40291)

4. **#7366** — *支持引用被 gitignore 的文件*  
   7 个赞；用户希望 `@` 文件引用功能可用于 `.gitignore` 忽略的文件（例如本地依赖、配置文件）。  
   [openai/codex#7366](https://github.com/openai/codex/discussions/7366)

5. **#46658** — *超越自动模式：学会智能分配模型、工具和子 Agent*  
   将推理资源、模型和子 Agent 的自适应分配作为核心功能进行开发。  
   [openai/codex#46658](https://github.com/openai/codex/discussions/46658)

### 问答
1. **#8503** — *明明代码审查用量显示还剩 100%，却提示「已达使用上限」*  
   21 条评论；GitHub 连接器报告配额耗尽，但仪表盘显示配额充足 — 属于用量统计不一致问题。  
   [openai/codex#8503](https://github.com/openai/codex/discussions/8503)

2. **#45938** — *PreToolUse 可以拦截/重写工具调用，但无法替换工具返回结果 — 这是有意设计的吗？*  
   探讨了在 Codex 之上构建「体验层」时钩子系统的能力边界。  
   [openai/codex#45938](https://github.com/openai/codex/discussions/45938)

3. **#48512** — *如何使用自定义部署的 OpenAI 模型和 API KEY 运行 Codex*  
   自托管/自定义模型部署场景下的常见配置问题。  
   [openai/codex#48512](https://github.com/openai/codex/discussions/48512)

### 作品展示
1. **#40840** — *LikeMinds — 无需人工消息总线即可协调多个独立的 Codex Agent*  
   多设备 Codex 协调层，可在 Windows/macOS 端 Agent 间同步项目上下文。  
   [openai/codex#40840](https://github.com/openai/codex/discussions/40840)

2. **#47231** — *移动端 Codex — 直接在 Android 上运行 Codex，无需远程 PC*  
   这款 Android 应用通过 app-server 打包了 Codex 移植版和移动端 UI；从客户端侧满足了 #9200 提出的远程使用需求。  
   [openai/codex#47231](https://github.com/openai/codex/discussions/47231)

---

## 6. 功能请求趋势
1. **跨设备与远程访问** — 线程同步（#14067）、移动端/远程控制（#9200）和 Android 原生运行时（#47231）始终是排名靠前的需求。
2. **灵活的用量模式** — 高用量固定价格档位（#40291），以及更清晰、更准确的用量统计（#8503、#42983）。
3. **更深层的工作区集成** — Gitignore 文件引用（#7366）、桌面端 UI 显示项目/当前工作目录/Git 分支信息（#28977），以及动态对话重命名（#14044）。
4. **Agent 自主性与智能性** — 模型/工具/子 Agent 的自适应分配（#46658），以及跨 Agent 共享的持久化项目记忆（#26397）。
5. **用户体验优化** — 禁用侧边栏悬停展开（#31538）、CLI 中支持 Shift+Enter 换行（#14104），以及更粗/可自定义的滚动条（#36270）。

---

## 7. 开发者痛点
1. **26.924 桌面版跨平台不稳定** — Linux 端无响应/任务失败（#48189、#48554、#48345、#48417），Windows 端启动转圈卡死（#48333、#48463、#48522），目前通用的临时解决方案是回退到 26.917 版本。
2. **Windows 控制台窗口闪烁** — 守护进程/钩子/Shell 生成时会弹出可见的终端窗口（#48422、#44768、#48325、#48356），是 CLI 和桌面用户最头疼的问题之一。
3. **沙箱功能回退** — macOS TIOCSTI 错误（#45119）、Windows 提权沙箱路径验证失效（#46388），以及 Chromebook Linux 套接字挂载隔离错误（#48523）。
4

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区周报 | 2026-09-28
*数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

---

## 1. 过去 7 天亮点
本周发布了稳定版 `v0.61.0`、`v0.62.0-preview.0` 以及多个 nightly 构建版本，核心修复包括代理解析、重试指示器问题，并新增对 Gemini 3.8 Flash / 3.5 Flash Lite 模型的初步支持。安全与智能体可靠性是当前开发的重点，已有 10+ 个 PR 处理路径遍历风险、工作区信任传递，以及长期运行智能体循环中的内存泄漏问题。社区上报的主要 Bug 集中在子智能体异常（误报任务成功、运行挂起）和 Auto Memory 系统可靠性问题上。

---

## 2. 版本发布
| 版本 | 发布日期 | 核心变更 |
|---------|--------------|-------------|
| [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) | 2026-09（稳定版） | v0.61 功能集正式可用（完整更新日志见发布页链接） |
| [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-preview.0) | 2026-09 | 修复 A2A 服务端任务元数据端点不支持存储的边界场景问题 |
| [v0.62.0-nightly.20260923.g62364cb20](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260923.g62364cb20) | 2026-09-23 | 新增对 Gemini 3.8 Flash 和 3.5 Flash Lite 模型的支持（[PR #29443](https://github.com/google-gemini/gemini-cli/pull/29443)） |
| [v0.62.0-nightly.20260922.gd5b3e3acc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260922.gd5b3e3acc) | 2026-09-22 | 修复 proxy-agent 的 esbuild 互操作性问题，解决环境代理解析异常；修复 ACP 模式下权限请求前 tool_call 的更新时机问题 |
| [v0.62.0-nightly.20260924.g8e70c862f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260924.g8e70c862f) | 2026-09-24 | 新增连接恢复过程中的重试进度指示器；修复 VSC 集成测试存在性检查逻辑 |
| [v0.62.0-nightly.20260925.gbedef96ef](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260925.gbedef96ef) | 2026-09-25 | 修复 CLI 逻辑，可区分 MCP 启用配置缺失与配置格式错误两种情况 |
| [v0.63.0-nightly.20260926.g2fe7c2d3f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260926.g2fe7c2d3f) | 2026-09-26 | 移除核心模块中无效的 `diff.external` 覆盖配置 |

---

## 3. 热门问题（按影响范围和社区参与度排名前 10）
1. **[#21409: 通用智能体运行挂起](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *优先级 P1，8 👍，8 条评论*  
   严重用户侧 Bug：通用智能体在处理简单任务（如创建文件夹）时会无限期挂起。用户反馈的临时解决方法是禁用子智能体委派功能。这是本周获赞最多的问题，说明影响范围广泛。

2. **[#22323: 子智能体达到 MAX_TURNS 后仍报告目标达成](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *优先级 P1，2 👍，13 条评论*  
   `codebase_investigator` 子智能体在达到最大轮次限制时会误报任务完成，隐藏工作流中断问题。这会误导用户对任务完成状态的判断，降低对智能体输出的信任。

3. **[#19873: 零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *优先级 P2，1 👍，9 条评论*  
   重大功能增强提案：通过安全沙箱利用 Gemini 3 原生的 bash 适配能力，让模型既能原生使用标准 POSIX 工具，又能保障安全性。这是本周期内讨论度最高的功能设想之一。

4. **[#22745: 评估支持 AST 感知的文件读取、搜索与映射能力](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *优先级 P2，1 👍，7 条评论*  
   用于追踪 AST 感知代码库工具调研工作的史诗级 Issue，该工具可减少 token 冗余、降低交互轮次，并提升 `codebase_investigator` 智能体的代码导航精度。

5. **[#21968: Gemini 对技能和子智能体的调用不足](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *优先级 P2，0 👍，6 条评论*  
   普遍存在的用户反馈：即使任务高度匹配相关技能（如构建操作对应的 gradle/git 技能），模型也不会自主调用自定义技能或子智能体。反映出智能体的工具调用路由逻辑存在不足。

6. **[#26525: 新增确定性脱敏能力，减少 Auto Memory 日志输出](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *优先级 P2，0 👍，5 条评论*  
   安全隐患：Auto Memory 会在密钥脱敏完成前就将对话内容发送给模型，且日志可能暴露技能内容。对处理敏感代码库的用户至关重要。

7. **[#26522: 阻止 Auto Memory 无限重试低价值会话](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *优先级 P2，0 👍，4 条评论*  
   Auto Memory 会重复处理被提取智能体跳过的低价值会话，造成资源浪费并挤占收件箱空间。这是本周活跃的三个 Auto Memory 质量相关关联问题之一。

8. **[#22267: 浏览器智能体忽略 settings.json 中的覆盖配置（如 maxTurns）](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   *优先级 P2，0 👍，4 条评论*  
   Bug：尽管 AgentRegistry 能正确加载合并后的配置，浏览器智能体却不遵循全局/项目级 `settings.json` 中的配置（如 `maxTurns`）。影响需要按项目自定义智能体行为的用户。

9. **[#21983: 浏览器子智能体在 Wayland 环境下运行失败](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *优先级 P1，1 👍，4 条评论*  
   平台兼容性 Bug：浏览器子智能体在 Linux Wayland 系统上运行失败，且会误报任务完成。阻碍了使用现代发行版的 Linux 桌面用户采用该功能。

10. **[#24246: 工具数量超过 128 个时返回 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)**  
    *优先级 P2，0 👍，3 条评论*  
    扩展性限制：当可用工具超过 128 个时，Gemini CLI 会返回 400 错误。拥有大量技能/智能体库的用户会触发该限制，需要更智能的工具范围限定逻辑。

---

## 4. 核心 PR 进展（按优先级和影响排名前 10）
1. **[#29527: fix(core): 确保请求内容不以模型轮次结尾](https://github.com/google-gemini/gemini-cli/pull/29527)**  
   *优先级 P1，状态：开放*  
   修复执行 `/rewind`、流中断或末尾存在空用户轮次后出现的 400 Bad Request 错误——此前这类场景会因历史记录以模型轮次结尾（不被支持）导致请求失败。

2. **[#29528: fix(cli): 在无头模式下传递解析后的文件夹信任状态](https://github.com/google-gemini/gemini-cli/pull/29528)**  
   *优先级 P1，状态：开放*  
   解决无头模式下的“脑裂”问题：此前无头模式会无条件报告文件夹信任已启用，即使工作区不受信任。这是针对自动化/CI 工作流的关键安全修复。

3. **[#29523: fix(core): 为外部安全检查器提供最小化环境并限制输出大小](https://github.com/google-gemini/gemini-cli/pull/29523)**  
   *优先级 P2，安全相关，状态：开放*  
   防止第三方安全检查器二进制文件访问 `GEMINI_API_KEY` 等密钥（通过进程环境变量），并限制其标准输出大小，避免因检查器存在 Bug 或恶意逻辑导致内存耗尽。

4. **[#29522: fix(core): 限制 glob 工具匹配结果在已验证的搜索目录内](https://github.com/google-gemini/gemini-cli/pull/29522)**  
   *安全相关，状态：开放*  
   修复 `glob` 工具中的路径遍历漏洞：在 glob v12 版本中，绝对路径模式（如 `/etc/*.conf`）会绕过已验证的搜索目录限制。

5. **[#29521: fix(core): 将旧版检查点路径限制在检查点目录内](https://github.com/google-gemini/gemini-cli/pull/29521)**  
   *优先级 P1，安全相关，状态：开放*  
   修复旧版检查点解析中的路径遍历 Bug：精心构造的标签（如 `x/../../secret`）可在指定检查点目录外写入或删除文件。

6. **[#29451: fix(core): 限制工具输出大小，优化长期运行智能体循环的内存生命周期](https://github.com/google-gemini/gemini-cli/pull/29451)**  
   *优先级 P1，状态：已关闭/已合并*  
   通过限制工具输出大小、优化多轮执行过程中的内存清理，解决了长期智能体工作流（构建、测试套件、大文件操作）中的内存无限制增长问题。

7. **[#29404: feat(cli): 新增支持 JSON 输出的 'gemini models list' 命令](https://github.com/google-gemini/gemini-cli/pull/29404)**  
   *优先级 P3，状态：开放*  
   新增机器可读的 `gemini models list -o json` 子命令，让集成工具无需硬编码即可获取有效的模型 ID。填补了 CI/CD 和自动化场景的功能空白。

8. **[#29411: fix(cli): 将 resume latest 解析为最近活跃的会话](https://github.com/google-gemini/gemini-cli/pull/29411)**  
   *优先级 P2，状态：开放*  
   修复 `--resume` 逻辑：现在会加载最近*活跃*的会话，而非最新*创建*的会话，避免拥有长期主会话的用户意外恢复到已过期的短期会话。

9. **[#29520: fix(cli): 保留滚动位置，合理分配待处理内容的高度预算](https://github.com/google-gemini/gemini-cli/pull/29520)**  
   *优先级 P1，状态：开放*  
   消除了流式输出过程中、工具确认提示时以及展开内容查看时出现的突兀滚动位置重置问题，是交互式终端使用体验的重大优化。

10. **[#28676: fix(cli): 将终止信号转发给重启后的子进程](https://github.com/google-gemini/gemini-cli/pull/28676)**  
    *优先级 P2，需要帮助，状态：开放*  
    确保终止信号（SIGTERM、SIGINT 等）能从启动父进程转发给重启后的子进程，避免 CLI 被 systemd/容器运行时监管时出现孤儿进程。

---

## 5. 热门讨论
*源数据集中未提供讨论数据，本节暂缺。*

---

## 6. 功能请求趋势
1. **智能体智能性与工具路由**：用户希望子智能体/技能的自主选择能力更出色，同时期待支持 AST 感知的代码导航工具，以减少 token 消耗并提升代码库分析精度。
2. **沙箱化原生执行**：用户对安全、零依赖的操作系统沙箱需求强烈，希望在不牺牲系统安全性的前提下，充分利用 Gemini 3 原生的 bash/POSIX 工具适配能力。
3. **持久化任务追踪**：用户请求用基于文件、跨会话的任务追踪功能替代上下文内的待办工具，解决“上下文失效”和会话间记忆丢失的问题。
4. **提升可观测性**：用户希望能更方便地查看子智能体的执行轨迹（例如通过 `/chat share`），并获取更完整的子智能体会话 Bug 报告上下文。
5. **机器可读的 CLI 输出**：对 JSON 格式输出（如模型列表）的需求持续增长，以支持 CI/CD 集成和第三方工具开发。
6. **浏览器智能体韧性增强**：用户请求实现自动会话接管、锁恢复能力，并提升平台兼容性（如 Wayland 支持）。
7. **工作区级别的策略管理**：用户关注按工作区管理策略的能力，而非仅支持全局策略，以适配多项目工作流。

---

## 7. 开发者痛点
1. **子智能体可靠性 Bug**：频繁出现误报成功（MAX_TURNS 被掩盖为目标完成）、无限期挂起、子智能体忽略用户配置覆盖等问题。
2. **Auto Memory 质量与安全漏洞**：无效补丁被静默跳过、低信号会话被无限重试、脱敏前数据泄露等问题，既影响功能可用性，也降低用户信任。
3. **终端使用体验不顺**：调整窗口大小/快速输入时出现闪烁、流式输出时滚动位置意外重置、`\n` 转义行为不一致等问题，影响交互体验。
4. **工作区信任边界场景问题**：无头模式和 A2A 服务端工作流中信任状态传递不一致，在 CI 环境中会带来安全风险和异常行为。
5. **工具扩展性限制**：128 个工具的上限会导致拥有大型技能/智能体库的用户触发 400 错误，且目前没有内置的动态范围调整机制。
6. **路径遍历与安全漏洞**：近期针对 glob、检查点、外部检查器的多项安全修复，说明文件系统操作的输入验证仍存在不足。
7. **临时文件杂乱**：模型经常在随机目录中创建临时脚本，给用户准备干净提交时增加了清理工作量。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 — 2026-09-28
---
## 1. 过去7天亮点
过去一周，Copilot CLI 团队发布了8个预发布版本（v1.0.88 至 v1.0.89-5），新增了更多模型支持（Claude Opus 5.5、GPT-6 Sol/Luna），优化了会话用户体验（侧边栏未读标记、双击 Esc 恢复未发送提示），并初步实现了 Claude Code 规则文件兼容。权限粒度、模型切换灵活性以及长时间运行会话的鉴权稳定性仍是社区最关注的问题，多个高票功能需求引发了新一轮讨论。

---
## 2. 版本发布
### v1.0.89 系列（预发布，2026-09-22 至 2026-09-27）
**新增能力**
- 模型扩展：模型选择器中新增 `claude-opus-5.5`，以及可用的 GPT-6 Sol 和 GPT-6 Luna。
- Claude Code 生态兼容：支持将 `.claude/rules` 规则文件作为自定义指令。
- 会话体验：侧边栏会话中已完成的交互回合会显示蓝色未读圆点；空聊天输入框双击 `Esc` 可恢复本地会话中未发送的提示；空输入框按 `上方向键` 可恢复待执行的队列消息。
- 路由与模型切换：自动推荐路由层级，支持一键/快捷键切换；手动切换模型后会弹出快速反馈提示。
- MCP：预注册的 OAuth 客户端将遵循已配置的 `oauthScopes`。
- 输入交互：在 `ask_user` 和引导表单字段中，左键点击可将光标定位到精确位置。
**修复与优化**
- 直接插件安装支持开启/关闭；已禁用的录制插件将不再加载。
- 询问用户表单中，不同问题的自定义“其他”答案将相互隔离。
- 当工具提供商发送扁平化的 `view_range` 参数时，view 工具能正确处理行范围。
- 托管连接器授权流程在连接/重新连接时会显示可复制的授权 URL。
- 在受支持的 Windows 版本上，沙盒命令支持得到了优化。
  > 相关仓库：[github/copilot-cli Releases](https://github.com/github/copilot-cli/releases)

### v1.0.88（稳定版，2026-09-22）及补丁版本
**新增功能**
- 为直连的 Ghostty 和 WezTerm 会话提供可选的 OSC 777 终端通知。
- 底部锚定对话框（包括登录设备码页面）支持文本选择。
**问题修复**
- 托管设置刷新失败时保留 `/allow-all` 配置；记住缺失路径的具体会话授权（可在 `/list-dirs` 中查看，通过 `/reset-allowed-tools` 清除）。
- 代理隧道失败导致的沙盒网络拒绝现在能被正确处理。
**功能优化**
- 技能发现过程中支持命名空间自定义技能，并可忽略指定技能目录。
- MCP 和插件视图会显示服务器显示名称和插件描述，状态展示更清晰。
  > 相关仓库：[github/copilot-cli Releases](https://github.com/github/copilot-cli/releases)

---
## 3. 热门问题（10个值得关注的问题）
1. **#179 — 全局可配置的允许工具列表** [🔗](https://github.com/github/copilot-cli/issues/179)
   - 状态：开放 | 43 👍 | 更新于 2026-09-27
   - 重要性：这是历史最久、得票最高的权限相关需求 — 用户希望能在 `config.json` 中配置类似 Claude Code 的全局工具允许列表，避免每次会话都需要手动授权的繁琐。该需求创建11个月以来，社区参与度始终很高。
2. **#3709 — 允许在同一会话中通过 `/model` 在多个模型（包括 BYOK/本地模型）间切换** [🔗](https://github.com/github/copilot-cli/issues/3709)
   - 状态：开放 | 33 👍 | 更新于 2026-09-27
   - 重要性：BYOK 用户目前只能通过 `COPILOT_MODEL` 在每个会话中锁定单个模型，`/model` 选择器仅显示 GitHub 托管的模型选项。随着本地/BYOK 部署的普及，这已成为工作流中的主要障碍。
3. **#1613 — 内置 git worktree 生命周期管理** [🔗](https://github.com/github/copilot-cli/issues/1613)
   - 状态：开放 | 38 👍 | 更新于 2026-09-27
   - 重要性：用户希望代理能为多任务工作流自动创建/销毁隔离的 worktree，减少上下文切换和意外的文件冲突。高票数表明该功能需求强烈。
4. **#1973 — 功能需求：交互模式的工具白名单** [🔗](https://github.com/github/copilot-cli/issues/1973)
   - 状态：开放 | 29 👍 | 13 条评论 | 更新于 2026-09-27
   - 重要性：当前交互模式下，每次工具调用都需要手动批准（包括 `grep`、`cat`、`git log` 等安全的只读操作），而 `/allow-all` 又权限过大。用户希望有更细粒度的读/写权限分级。
5. **#1857 — 允许用户在执行前取消/移除已入队的消息** [🔗](https://github.com/github/copilot-cli/issues/1857)
   - 状态：开放 | 29 👍 | 12 条评论 | 更新于 2026-09-27
   - 重要性：通过 `Ctrl+Q`/`Ctrl+Enter` 入队的消息，在代理忙碌或执行 `/compact` 期间无法取消，用户只能等待不需要的任务执行完成。这是高级用户的核心体验痛点。
6. **#1305 — 为远程 OAuth MCP 服务器提供 CIMD 支持** [🔗](https://github.com/github/copilot-cli/issues/1305)
   - 状态：已关闭 | 39 👍 | 更新于 2026-09-27
   - 重要性：该需求已解决，支持使用 CIMD（客户端发起的双向 DCR）而非标准 DCR 的 OAuth MCP 服务器，扩展了企业级 MCP 兼容性。高票数反映了企业用户的广泛关注。
7. **#2627 — 可配置的系统提示（降低固定 token 开销）** [🔗](https://github.com/github/copilot-cli/issues/2627)
   - 状态：开放 | 21 👍 | 更新于 2026-09-27
   - 重要性：默认系统提示在接收任何用户输入前就会消耗约 20,500 个 token（占 200K 上下文窗口的约10%），外加约 8,500 个工具定义 token。用户希望能精简不需要的指令，以节省成本并扩展可用上下文。
8. **#4929 — 进程内鉴权 token 停止刷新；重启前所有提示均失败** [🔗](https://github.com/github/copilot-cli/issues/4929)
   - 状态：开放（待分类） | 7 条评论 | 更新于 2026-09-27
   - 重要性：新报告的严重可靠性 bug — 长时间运行的 CLI 进程会永久失去鉴权，`/login` 也无法恢复，只能重启解决，会中断长时间的开发会话。
9. **#4905 — 桌面应用：会话生成后几分钟内就会终止，原因是 GitHub MCP 凭证注册过期** [🔗](https://github.com/github/copilot-cli/issues/4905)
   - 状态：开放（待分类） | 4 👍 | 更新于 2026-09-27
   - 重要性：桌面应用用户经常遇到会话崩溃问题，即使 `gh auth` 状态有效，也与 MCP 服务器目录过期有关。这影响了桌面用户的核心 MCP 功能使用。
10. **#2285 — 复制命令时包含不可见字符，导致“command not found”错误** [🔗](https://github.com/github/copilot-cli/issues/2285)
    - 状态：已关闭 | 10 👍 | 更新于 2026-09-27
    - 重要性：常见体验 bug 已修复 — 此前从代码块复制的内容包含不可见字符，会导致在外部终端粘贴命令时失效。该问题对日常工作流的用户影响较大。

---
## 4. 重点 PR 进展
（注：过去7天仅有4个活跃 PR 有更新。）
1. **#4948 — 更新 github-script action 版本锁定** [🔗](https://github.com/github/copilot-cli/pull/4948)
   - 状态：开放 | 更新于 2026-09-24
   - 维护者提交的 PR，将锁定的 `actions/github-script` 依赖升级到 v9.0.0，以提升 CI 安全性和兼容性。已通过 `git diff --check` 验证，无运行时依赖变更。
2. **#4770 — 文档：说明 WebSocket 响应的关闭方法** [🔗](https://github.com/github/copilot-cli/pull/4770)
   - 状态：开放 | 更新于 2026-09-22
   - 文档类 PR，新增了禁用 WebSocket 模型响应的指导说明。对于网络屏蔽 WebSocket 或遇到 `400 input item ID does not belong to this connection` 错误的用户来说，这是一个关键的解决方案。
3. **#4739 — 文档：提出终端归属的 macOS 通知方案** [🔗](https://github.com/github/copilot-cli/pull/4739)
   - 状态：开放 | 更新于 2026-09-21
   - 参考文档提案，讨论 macOS 通知的点击行为，包含一个 MIT 许可的终端通知示例及可移植的回归测试（无 CLI 代码变更）。
4. **#3817 — kCreate "#"** [🔗](https://github.com/github/copilot-cli/pull/3817)
   - 状态：开放 | 更新于 2026-09-27
   - 低质量/垃圾 PR，无有效描述，已标记待关闭。

---
## 5. 热门讨论
*略 — 本周数据集未提供讨论数据。*

---
## 6. 功能需求趋势
1. **细粒度权限与工具控制** — 排名第一的趋势方向：用户希望能配置全局和单会话的工具允许/拒绝列表（区分只读与破坏性操作），以替代“全部批准/逐个批准”的二元模式（由 #179、#1973 驱动）。
2. **灵活的多模型工作流** — 需求集中在实现在同一会话中无缝切换所有类型的模型（GitHub 托管、BYOK、本地提供商），以及更完善的路由层级控制，与 v1.0.89 新增的路由推荐功能相契合（#3709）。
3. **会话与上下文管理优化** — 需求包括 worktree 生命周期管理、共享上下文的会话分叉，以及能保留活跃任务上下文的可靠压缩功能（#1613、#1697、#1571、#3703）。
4. **Token 与成本优化** — 用户希望能配置或精简默认系统提示和工具定义的开销，以减少 token 使用量并扩展可用上下文窗口（#2627）。
5. **队列与输入体验优化** — 对队列消息取消功能和待处理提示更好控制的需求持续存在，是在 v1.0.89-2/3 部分修复基础上的进一步诉求（#1857）。

---
## 7. 开发者痛点
1. **长时间运行会话不稳定** — 鉴权 token 刷新失败（#4929）、MCP 凭证/会话崩溃（#4905），以及空闲会话中泛滥的虚假 MCP 重连通知（#4907），导致用户需要频繁重启，打断了工作流的连续性。
2. **权限模型僵化** — 开发者反馈，安全的只读工具也需要反复手动批准，使用体验很差；而 `/allow-all` 权限又过宽，在生产环境中存在安全风险。
3. **BYOK/自定义提供商限制** — 除了单模型锁定问题，用户还反映强制的贪婪采样（`temperature=0`）会导致推理模型效果下降，以及静默的上下文溢出挂起问题（#4950），此外 vLLM 提供商的 `reasoning` 字段事件未被处理（#3195）。
4. **压缩功能可靠性问题** — 多名用户反馈压缩后出现上下文丢失或指令损坏，需要手动返工才能恢复任务状态（#1571、#3703）。
5. **MCP 集成缺口** — 技能/插件注入不一致（代理系统提示中缺失插件技能，#2753）、交互回合中工具列表不更新（#3125），以及企业 OAuth 兼容缺口，给重度依赖 MCP 的工作流带来了可靠性问题。
6. **平台特定 bug** — Windows 沙盒的边界情况问题，以及 Copilot CLI 导出的空 `GIT_CONFIG_VALUE` 导致 Windows 上 VS Code Git 发现失败的问题（#4531）。

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报 | 2026-09-28
*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. 过去7天亮点
本周 OpenCode 项目发布 v1.18.32 版本，针对 Bedrock 图像处理和 Together AI 流式用量统计进行了定向修复；社区注意力则集中在长期存在的 CLI 易用性缺陷、v2 迁移回归问题，以及多位置/MCP 工作流中的资源泄漏问题上。此外，还出现了一批围绕会话压缩、收件箱持久化和 Electron 权限处理的合规标记类新 bug 报告，表明社区正在积极审视 v2 核心可靠性的边缘场景。

---

## 2. 版本发布
### v1.18.32
- **核心 Bug 修复**
  - 将 Bedrock 图片附件提升逻辑限定为仅 Claude、Nova 和 Llama 4 模型，避免其他 Bedrock 模型系列收到无效请求负载。
  - 修复了 Together AI 流式用量统计的问题，现在可以正确追踪流式响应过程中的资源消耗。
- **社区贡献致谢**：@dc85 贡献了 DeepSeek V4.1 Flash 文档，并为 Zen 网关添加了 Grok 4.7 模型支持。
*版本链接：[anomalyco/opencode v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)*

---

## 3. 热门问题
| # | 问题 | 重要性 | 社区反应 |
|---|-------|----------------|--------------------|
| 1 | [#13984 CLI 复制粘贴失效，但仍显示"已复制到剪贴板"提示](https://github.com/anomalyco/opencode/issues/13984) | 现存最久、评论最多的 UX  bug（64 条评论，32 👍）；影响所有 CLI 安装环境的基础开发工作流。 | 32 个点赞，自 2026 年 2 月起持续有排查进展；最新更新于 9 月 27 日。 |
| 2 | [#32157 支持可配置的运行中提示交付模式（队列模式 / 引导模式，具备压缩感知语义）](https://github.com/anomalyco/opencode/issues/32157) | v2 版本中点赞数最高的功能需求（84 👍）；定义了长时间运行代理会话的核心交互模型。 | 84 个点赞，自 2026 年 6 月起持续进行设计讨论。 |
| 3 | [#49133 TUI 中 Tab 键无法切换代理；Shift+Tab 反而循环切换](https://github.com/anomalyco/opencode/issues/49133) | 影响较大的 v2 TUI 回归问题，破坏了用户切换代理的肌肉记忆（16 条评论）。 | 已修复关闭；在 macOS 上 v2.0.3 版本验证通过。 |
| 4 | [#51003 全局 stdio MCP 服务器每加载一个目录就启动一个实例，导致内存耗尽](https://github.com/anomalyco/opencode/issues/51003) | 对多项目/OpenChamber 用户影响严重的资源泄漏问题；可能导致主机 OOM 并破坏 API 健康检查。 | 9 月 24 日提交的新问题，已稳定复现。 |
| 5 | [#37495 SQLite WAL 文件无限制增长（10–15 GB），直到完全退出程序](https://github.com/anomalyco/opencode/issues/37495) | 桌面端严重的数据/存储 bug，由多个长期存活的 SQLite 读事务阻塞 WAL 检查点导致。 | 桌面端已确认；用户反馈磁盘会被占满至 0 字节可用。 |
| 6 | [#49027 代理配置的额外字段被原样转发给上游提供商，导致 invalid_request_error](https://github.com/anomalyco/opencode/issues/49027) | v1/v2 核心兼容性 bug，会导致多个提供商（kimi-k3、glm-5.3、gpt-5.6-luna）的自定义/厂商代理属性失效。 | 在 Windows 11 系统、opencode-ai 1.18.31 / Zen 网关环境下复现。 |
| 7 | [#50885 OpenCode Go 订阅用户没有个人 API 密钥](https://github.com/anomalyco/opencode/issues/50885) | 最主要的计费/访问障碍问题（9 👍）；Go 订阅用户无法使用 `/connect`，因为密钥页面仅创建服务账号。 | 多个用户反馈"我也遇到了"；9 月 23 日提交。 |
| 8 | [#50916 v2 砍掉了 LSP 支持？](https://github.com/anomalyco/opencode/issues/50916) | 依赖 LSP 诊断功能的 v1 用户最关心的迁移问题；文档确认 v2 不运行语言服务器。 | 3 个点赞；社区呼吁提供官方迁移方案。 |
| 9 | [#37888 新增 OPENCODE_DISABLE_INSTALL 环境变量，用于跳过启动时的 npm 安装](https://github.com/anomalyco/opencode/issues/37887) | 高需求的 CI/CD 和容器化功能；当前行为会破坏可复现/离线环境的运行。 | 3 个点赞；Docker 和流水线场景均有需求。 |
| 10 | [#49948 Shell 裸重定向绕过权限检查](https://github.com/anomalyco/opencode/issues/49948) | 与安全相关的 bug：`> file` 等零命令 shell 结构会完全跳过审批流程。 | 新近确认；影响核心 shell 工具扫描器。 |

---

## 4. 关键 PR 进展
| # | PR | 描述 |
|---|----|-------------|
| 1 | [#51743 fix(core): 处理 MCP stdio 超大帧时失败但不关闭传输连接](https://github.com/anomalyco/opencode/pull/51743) | Bug 修复：此前 MCP stdio 服务器返回超过 ~10 MiB 的消息时会断开整个连接。现在单次调用会干净地失败，但传输连接保持活跃。 |
| 2 | [#51741 fix(core): 对无内容返回的长度结束场景进行失败处理](https://github.com/anomalyco/opencode/pull/51741) | Bug 修复：提供商以 `finish_reason: "length"` 结束步骤，但没有文本/推理/工具调用内容时，现在会被判定为失败，而非静默完成。 |
| 3 | [#46912 fix(opencode): 退出前等待 stdout 写入完成，避免管道传输的 JSON 被截断](https://github.com/anomalyco/opencode/pull/46912) | Bug 修复：`export`、`session list --format json` 和 `db --format json` 命令此前可能在 `process.exit()` 前只写入部分输出。本次修复确保 stdout 刷新完成，适用于流水线场景。 |
| 4 | [#51736 feat(opencode): 为 `opencode web` 新增 --no-open 参数](https://github.com/anomalyco/opencode/pull/51736) | 新功能：`opencode web --no-open` 可启动 Web 服务器但不打开浏览器，支持服务/容器/WSL 部署模式。 |
| 5 | [#38283 docs: 将 opencode-quota 加入生态系统列表](https://github.com/anomalyco/opencode/pull/38283) | 文档更新：将仍在活跃维护的 `opencode-quota` 插件添加到生态系统/插件页面。 |
| 6 | [#51734 docs: 添加 Bee by HEOSSI 提供商设置指南](https://github.com/anomalyco/opencode/pull/51734) | 文档更新：添加 Bee by HEOSSI 作为 OpenAI 兼容提供商的设置指南，替代了此前因合规自动化关闭的 PR。 |
| 7 | [#50221 chore(nix): 更新 nixpkgs 以适配 Bun 1.4](https://github.com/anomalyco/opencode/pull/50221) | 重构：更新 flake.nix 的 nixpkgs 输入源，提供 Bun 1.4.2+ 版本，修复 Nix 下 node_modules 哈希计算问题。 |
| 8 | [#45759 fix(core): 启动失败后恢复 Console 模型可用状态](https://github.com/anomalyco/opencode/pull/45759) | Bug 修复（因清理关闭）：此前启动时加载失败（如 DNS/配置端点中断）的 Console 模型会永久不可用；现在网络恢复后模型清单会自动刷新。 |
| 9 | [#45598 fix(desktop): 保留窗口权限](https://github.com/anomalyco/opencode/pull/45598) | Bug 修复（因清理关闭）：现在会在共享会话上一次性配置 Electron 权限处理器，并授权所有活跃的主窗口，避免打开第二个窗口时破坏第一个窗口的权限。 |
| 10 | [#45579 fix(enterprise): 撤销共享会话数据](https://github.com/anomalyco/opencode/pull/45579) | Bug 修复（因清理关闭）：取消共享会话时现在会正确删除快照和压缩数据，避免因前缀列表不完整导致遗留孤立对象。 |

---

## 5. 热门讨论
*暂缺 —— 本数据集未提供讨论线程数据。*

---

## 6. 功能需求趋势
1. **运行中交互控制**：用户强烈需求为代理运行期间提交的提示提供原生的 `queue` / `steer` / `break` 语义，并具备压缩感知行为（[#32157](https://github.com/anomalyco/opencode/issues/32157)）。
2. **CI/CD 和无头运行能力**：`OPENCODE_DISABLE_INSTALL`（[#37888](https://github.com/anomalyco/opencode/issues/37888)）和 `opencode web --no-open`（[#51736](https://github.com/anomalyco/opencode/pull/51736)）等需求反映出社区对在容器、流水线和服务端部署 OpenCode 的强烈兴趣。
3. **桌面端 UX 打磨**："恢复关闭的标签页"（[#51717](https://github.com/anomalyco/opencode/issues/51717)）、Mermaid 预览（[#51702](https://github.com/anomalyco/opencode/issues/51702)）和更丰富的会话元数据（[#45590](https://github.com/anomalyco/opencode/pull/45590)）等需求表明，用户希望桌面端体验更接近浏览器、内容更丰富。
4. **插件/会话能力对齐**：用户要求开放目前插件无法访问的 5 项核心会话能力（[#49389](https://github.com/anomalyco/opencode/issues/49389)）。
5. **生态系统/提供商扩展**：社区驱动的新提供商（DeepSeek V4.1、Grok 4.7、Bee by HEOSSI）和插件（opencode-quota）不断涌现，显示第三方生态充满活力。
6. **通知/告警灵活性**：Termux 通知适配器（[#45676](https://github.com/anomalyco/opencode/pull/45676)）和声音/告警优化需求，反映出用户对多环境告警能力的改进诉求。

---

## 7. 开发者痛点
1. **基础 CLI UX 回归问题**：尽管有成功提示，CLI 的复制粘贴功能仍完全失效（[#13984](https://github.com/anomalyco/opencode/issues/13984)）；v2 中 TUI 的 Tab 键切换代理等快捷键逻辑颠倒（[#49133](https://github.com/anomalyco/opencode/issues/49133)）。
2. **v2 迁移缺口**：LSP 支持缺失（[#50916](https://github.com/anomalyco/opencode/issues/50916)）、v1 和 v2 加载器之间 `OPENCODE_CONFIG_DIR` 行为不一致（[#32825](https://github.com/anomalyco/opencode/issues/32825)），以及工具调用验证逻辑差异（[#51661](https://github.com/anomalyco/opencode/issues/51661)），都给升级带来了阻碍。
3. **资源泄漏与稳定性问题**：SQLite WAL 无限制增长（[#37495](https://github.com/anomalyco/opencode/issues/37495)）、每个目录重复启动 MCP 服务器（[#51003](https://github.com/anomalyco/opencode/issues/51003)），以及重载时遗留孤立的 Location MCP 进程（[#51731](https://github.com/anomalyco/opencode/issues/51731)），都会降低长时间运行会话的稳定性。
4. **OpenCode Go 上手与计费障碍**：Go 订阅用户缺少个人 API 密钥（[#50885](https://github.com/anomalyco/opencode/issues/50885)）、订阅有效但 CLI 认证失败（[#51388](https://github.com/anomalyco/opencode/issues/51388)），以及桌面端凭据错误（[#51689](https://github.com/anomalyco/opencode/issues/51689)）是最主要的支持阻塞问题。
5. **配置与提供商兼容性问题**：自定义代理配置字段泄漏到上游提供商请求中，导致 `invalid_request_error`（[#49027](https://github.com/anomalyco/opencode/issues/49027)）。
6. **数据完整性边缘场景**：删除会话会遗留旧版数据库行（[#50260](https://github.com/anomalyco/opencode/issues/50260)）、不完整的压缩摘要会推进历史边界（[#51747](https://github.com/anomalyco/opencode/issues/51747)），以及崩溃时入队和认领之间的收件箱输入可能丢失（[#51746](https://github.com/anomalyco/opencode/issues/51746)）。
7. **Shell 工具的安全面问题**：裸重定向等零命令 shell 结构会完全绕过权限扫描器（[#49948](https://github.com/anomalyco/opencode/issues/49948)）。
8. **桌面端 UI 渲染故障**：短终端下页脚行重叠（[#51563](https://github.com/anomalyco/opencode/issues/51563)）、带斜杠的行内代码被错误渲染为文件链接（[#51723](https://github.com/anomalyco/opencode/issues/51723)），以及 Electron 各窗口权限处理器冲突（[#51748](https://github.com/anomalyco/opencode/issues/51748)）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区摘要 — 2026 年 9 月 28 日
来源：[earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. 过去 7 天亮点
Pi 发布了 v0.87.0 和 v0.87.1 版本，扩展了前沿大模型的支持范围，并对核心会话架构进行了优化；社区也积极反馈了 Windows 兼容性、启动延迟、扩展生命周期可靠性相关的问题。与此同时，MCP/codemode 集成、Bedrock Mantle 支持、智能体 LLM 调用可观测性对齐等核心工作线也在稳步推进。

---

## 2. 版本发布
- **v0.87.1**
  - 通过支持的服务商（包括 GitHub Copilot）新增了对 Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna 的支持。文档：[Choose a Model](https://github.com/earendil-works/pi/blob/v0.87.1/packages/coding-agent/docs/models.md#select-a-model)
  - 默认模型切换为 Grok 4.7。
- **v0.87.0**
  - 引入了规范的会话上下文编辑能力与扩展边界生命周期钩子（无需重写完整历史记录）。文档：[ContextEditEntry](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)

---

## 3. 热点问题
1. **#7547 — [Windows] 如何在 Windows 上使用 Pi？你遇到了哪些问题？**（68 条评论）  
   这是一个长期开放的社区讨论帖，用于优先排期 Windows 端安装路径、文档、Bug 修复等方面的支持投入，是平台路线图的重要参考。  
   🔗 [earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)

2. **#10031 — 按 \<esc\> 停止思考时，Pi 偶尔会卡在 "Working..." 状态**（16 条评论，已关闭，原因 `no-action`）  
   约从 v0.84.0 版本开始可在多台设备上复现；用户必须按 CTRL+C 终止，再用 `pi -c` 恢复会话。该问题被判定为上游/服务商的固有行为，但仍是用户体验的核心痛点之一。  
   🔗 [earendil-works/pi#10031](https://github.com/earendil-works/pi/issues/10031)

3. **#7739 — 设定启动时间预算，目标是达到与 jcode 相当的延迟和内存表现**（10 条评论）  
   明确了对标 jcode 的性能基线目标（对比版本为 jcode v0.9.1888-dev 与 pi 0.62.0），是后续多个相关 Issue 跟踪的启动延迟优化工作线的核心依据。  
   🔗 [earendil-works/pi#7739](https://github.com/earendil-works/pi/issues/7739)

4. **#5581 — 通过 `pi.sendMessage()` 且设置 `triggerTurn: true` 的自定义消息会绕过 `before_agent_start`**（8 条评论，状态 `inprogress`）  
   该问题导致自定义触发的会话轮次无法触发扩展钩子，影响依赖此生命周期事件的可观测性、鉴权、安全围栏类扩展。  
   🔗 [earendil-works/pi#5581](https://github.com/earendil-works/pi/issues/5581)

5. **#8810 — 扩展注册的服务商：新建会话会忽略 defaultProvider/defaultModel 配置**（7 条评论）  
   系统会静默回退到其他服务商的默认配置，不符合用户预期，在使用扩展新增的服务商时可能产生意外费用或异常行为。  
   🔗 [earendil-works/pi#8810](https://github.com/earendil-works/pi/issues/8810)

6. **#10033 — 压缩提示词包含全部思考文本，导致超出上下文窗口限制**（6 条评论）  
   长会话使用推理类模型（如 DeepSeek V4.1）时，自动压缩会持续失败，因为完整的思考块会让摘要提示词膨胀到超出长度限制。  
   🔗 [earendil-works/pi#10033](https://github.com/earendil-works/pi/issues/10033)

7. **#9974 — Pi 对 llama.cpp 的 Responses API 工具调用处理异常（重复/损坏）**（6 条评论）  
   与 llama.cpp SSE 流返回的 OpenAI Responses API 格式存在兼容性问题，导致工具执行失败。影响自托管/开源模型用户。  
   🔗 [earendil-works/pi#9974](https://github.com/earendil-works/pi/issues/9974)

8. **#7658 — 用于持久化 API 密钥凭证（auth.json）的扩展 API**（5 条评论）  
   缺少该能力导致扩展无法端到端地完整管理自定义服务商，用户必须手动编辑鉴权文件。  
   🔗 [earendil-works/pi#7658](https://github.com/earendil-works/pi/issues/7658)

9. **#9905 — Anthropic 模型：`thinking.display` 始终为 "summarized"，无 CLI 覆盖方式**（5 条评论）  
   Anthropic 模型的思考输出被强制设为摘要模式，用户无法自主控制，限制了调试能力和完整思考过程的查看。  
   🔗 [earendil-works/pi#9905](https://github.com/earendil-works/pi/issues/9905)

10. **#9980 — OpenRouter 上热门开源模型的成本计算偏差达 2–3 倍**（5 条评论）  
    当前使用模型目录中最低服务商的价格计算成本，导致多服务商提供的热门开源权重模型的费用报告不可靠。  
    🔗 [earendil-works/pi#9980](https://github.com/earendil-works/pi/issues/9980)

---

## 4. 核心 PR 进展
1. **#10040 — feat(coding-agent): Codemode and MCP**（开放中，@mitsuhiko）  
   大型 PR，一次性新增 codemode（沙箱化模型执行，尤其适配 Jev）和 MCP 支持，将重构 Pi 的智能体能力边界。  
   🔗 [earendil-works/pi#10040](https://github.com/earendil-works/pi/pull/10040)

2. **#8572 — feat(ai): Amazon Bedrock Mantle**（开放中，@cristinaponcela）  
   进行中：新增对 Bedrock Mantle API 层（Bedrock 上的 GPT/openai.gpt-5.x 系列模型使用该接口）的支持，修复 Converse 路由失败问题。对应 Issue #5363。  
   🔗 [earendil-works/pi#8572](https://github.com/earendil-works/pi/pull/8572)

3. **#10085 — feat(agent,coding-agent): emit `pi.ai.request` spans from the agent loop**（已合并，@manno23）  
   将现有的 `AI_TELEMETRY_SCHEMA` 接入生产环境智能体运行链路，可观测性扩展（如 Langfuse）终于能获取单请求的追踪跨度和 token 使用量。对应 Issue #10084。  
   🔗 [earendil-works/pi#10085](https://github.com/earendil-works/pi/pull/10085)

4. **#9776 — Per thinking sampling parameters**（开放中，@mrexodia）  
   实现 `samplingParamsByThinkingLevel` 能力，可对思考模式和非思考模式应用不同的采样参数，符合开源模型的使用建议。  
   🔗 [earendil-works/pi#9776](https://github.com/earendil-works/pi/pull/9776)

5. **#10067 — feat(coding-agent,tui): System theme**（已合并，@mitsuhiko）  
   基于终端颜色查询和 OKHSL 颜色工具新增了一套默认主题；改为基于背景色检测亮/暗模式，而非简单信任系统配置。  
   🔗 [earendil-works/pi#10067](https://github.com/earendil-works/pi/pull/10067)

6. **#9948 — feat(ai,coding-agent): unify image and classifier model infrastructure**（已合并，@mitsuhiko）  
   重构模型系统，支持对话模型之外的模型类型（图像、分类器），是多模态能力扩展的基础。  
   🔗 [earendil-works/pi#9948](https://github.com/earendil-works/pi/pull/9948)

7. **#10091 — Expose message decoration hook for user and assistant text**（已合并，@ajunwalker）  
   新增 `ctx.ui.setMessageDecorator()` 接口，可自定义 TUI 中用户/助手消息的渲染效果（包括流式输出和恢复的会话），支持开发体验更丰富的 UX 扩展。  
   🔗 [earendil-works/pi#10091](https://github.com/earendil-works/pi/pull/10091)

8. **#8635 — fix(ai): preserve aborted stop reason during lazy setup**（开放中，@Mallikarjun-0）  
   在流式懒加载初始化过程中透传中止信号，并正确上报初始化中止的失败原因。修复 Issue #8409。  
   🔗 [earendil-works/pi#8635](https://github.com/earendil-works/pi/pull/8635)

9. **#10066 — fix(tui,coding-agent): prefer clipboard file paths over the icon image**（已合并，@1dustycy）  
   修复 macOS Finder 复制行为的问题：此前按 `Ctrl+V` 会粘贴文件图标而非实际图像。解决 Issue #9999。  
   🔗 [earendil-works/pi#10066](https://github.com/earendil-works/pi/pull/10066)

10. **#10020 — feat(coding-agent): add hidden-message toggle to HTML exports**（已合并，@rwachtler）  
    在 HTML 导出中新增隐藏 `CustomMessage` 条目的显示/隐藏控件，并保留工具/思考内容的切换状态。修复 Issue #8896。  
    🔗 [earendil-works/pi#10020](https://github.com/earendil-works/pi/pull/10020)

---

## 5. 热门讨论

### 想法与路线规划
- **#3337 — 将 pi-agent-core 用作客户托管的定时智能体平台运行时**  
   企业用户验证了将 pi-agent-core 嵌入作为定时智能体运行时的使用场景，体现了 B2B/平台化方向的潜在需求。  
  🔗 [earendil-works/pi#3337 (discussion)](https://github.com/earendil-works/pi/discussions/3337)

- **#9312 — Pi 上下文记忆：将决策追溯到原始对话**  
  社区关于上下文压缩后决策溯源的实验——上下文被压缩后，智能体还能否追溯某一决策的产生原因？这与长会话可靠性高度相关。  
  🔗 [earendil-works/pi#9312 (discussion)](https://github.com/earendil-works/pi/discussions/9312)

- **#10098 — 我在自己的 Fork 里修复了两个我认为是 Bug 的问题**  
  Fork 维护者分享了两项修复：`/new` 命令现在会保留当前使用的模型（而非回退到默认模型）；无响应体的 413 错误现在会触发上下文压缩。有望合入上游。  
  🔗 [earendil-works/pi#10098 (discussion)](https://github.com/earendil-works/pi/discussions/10098)

### 问答
- **#3373 — 你最喜欢和 Pi 智能体搭配使用的插件、附加组件或扩展有哪些？**（20 条评论，9 👍）  
   本周活跃度最高的社区帖子：众包推荐优质扩展，可作为 Discord 讨论的补充。  
  🔗 [earendil-works/pi#3373 (discussion)](https://github.com/earendil-works/pi/discussions/3373)

- **#1558 — 适用于 Pi 编程智能体的 CursorAI Agent CLI 自定义服务商**（9 👍）  
   社区开发的 `@netandreus/pi-cursor-provider` 扩展新增了 CursorAI 作为模型服务商；虽在核心库外维护，但广受好评。  
  🔗 [earendil-works/pi#1558 (discussion)](https://github.com/earendil-works/pi/discussions/1558)

### 作品展示
- **#10107 — omp-ntfy：免费、零配置的手机推送通知，适用于长耗时任务和输入提示场景**  
   新扩展（Pi + oh-my-pi 生态），基于 ntfy.sh 实现，可在智能体执行长耗时任务或等待用户输入时，向手机推送免费提醒。  
  🔗 [earendil-works/pi#10107 (discussion)](https://github.com/earendil-works/pi/discussions/10107)

- **#10069 — agent-chat：独立 Pi 智能体之间的点对点消息传递（无需编排器）**  
   该扩展支持不同 Pi 会话（例如跨工作树的会话）之间进行 P2P 消息传递，可共享 Docker、数据库等本地资源。  
  🔗 [earendil-works/pi#10069 (discussion)](https://github.com/earendil-works/pi/discussions/10069)

---

## 6. 功能需求趋势
1. **更深度的扩展平台能力** — 包括凭证持久化（`auth.json` API）、消息装饰钩子、更完善的生命周期事件覆盖、扩展发起的 LLM 调用的可观测性对齐。
2. **启动/性能预算** — 用户持续要求达到与 jcode 相当的冷启动延迟和内存表现，对于安装了大量扩展（70+ 扩展导致会话创建耗时数分钟）的用户来说，需求愈发迫切。
3. **服务商与模型生态扩展** — 包括 Bedrock Mantle 支持、更多开源模型兼容性（Mistral、vLLM、llama.cpp Responses API）、更丰富的推理/思考显示控制。
4. **MCP 与 codemode** — 社区对标准化 MCP 集成和沙箱化 codemode 抱有极高期待，将用于下一代智能体工作流。
5. **Windows 端一等支持** — 社区持续推动明确 Windows 受支持的运行路径、修复 Bug、改善开箱即用体验。

---

## 7. 开发者痛点
- **成本报告不可靠** — OpenRouter 多服务商定价模式导致热门开源模型的成本估算偏差较大（误差 2–3 倍）。
- **扩展生命周期不稳定** — 自定义消息流会绕过 `before_agent_start` 等钩子；扩展无法持久化 API 密钥；扩展输出会泄露到 TUI 界面。
- **上下文压缩可靠性差** — 完整思考块会导致压缩提示词膨胀；本地大模型运行时内存占用飙升；持久化的使用记录格式异常会导致会话恢复时崩溃。
- **服务商兼容性长尾问题** — llama.cpp、Mistral、代理服务、自托管网关之间的 Responses API/工具调用格式差异，会导致工具调用重复、400 错误、不可重试的失败。
- **启动与会话创建臃肿** — 每个会话都会重复加载扩展；长时间运行的宿主进程延迟持续升高；没有明确的性能基线管控机制。
- **Windows 平台支持不明确** — 用户反馈 Windows 上不受支持/差异过大的运行路径太多，官方指引不清晰，使用体验受阻。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区简报 | 2026-09-28

---

## 1. 上周亮点
过去一周，Qwen Code 项目推进了**Managed Agent 双路径架构**的落地，在10余个活跃PR中完成了持久会话操作、Hosted Harness 集成、分阶段引擎兼容性检查等核心进展。团队发布了3个稳定版本（v0.24.4 → v0.24.6）及3个夜间构建版本，扩展了Java SDK的能力、修复了会话创建诊断问题，并关闭了关键的UI和Bug反馈。社区活跃度保持高位，共更新50个问题，聚焦运行时代理弹性、配置安全和跨平台UI一致性。

---

## 2. 版本发布
### 稳定版本
- **v0.24.6** ([发布页](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6))：新增Java SDK Hosted Harness私有客户端支持；修复服务端会话创建失败的诊断问题；为TypeScript SDK绑定了CLI v0.24.6。
- **v0.24.5** ([发布页](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5))：将群组成员通道访问权限与senderPolicy解耦；同步桌面端与SDK的功能对齐。
- **v0.24.4**（夜间构建基线）：解决了延迟工具桥接失效和文档缺失问题。

### 夜间构建版本
- v0.24.6-nightly.20260926 ([发布页](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a))
- v0.24.5-nightly.20260925 ([发布页](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-nightly.20260925.c3a4058a0c))
- v0.24.4-nightly.20260923 ([发布页](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260923.d0cd622a68))

### 桌面端与SDK更新
- Qwen Code Desktop v0.24.5 / v0.24.6：与核心CLI功能和诊断修复保持同步。
- TypeScript SDK v0.1.15 / v0.1.16：绑定最新CLI构建以保证兼容性。

---

## 3. 热门问题（按影响和参与度排名前10）
1. **#12380: Managed Agent 双路径架构提案** [开放中，36条评论]
   核心路线图问题，定义了持久会话、可恢复工具执行和WebShell功能对齐的分阶段交付计划。驱动了10余个活跃PR，是本周讨论度最高的事项。
   [链接](https://github.com/QwenLM/qwen-code/issues/12380)

2. **#12737: ACP Bridge Stage B 主机集成（传统引擎 + 托管引擎）** [开放中，9条评论]
   双路径架构的后续工作：让普通 `qwen serve` 主机可以同时运行配对的传统引擎和托管引擎，对增量迁移至关重要。
   [链接](https://github.com/QwenLM/qwen-code/issues/12737)

3. **#12826: Webview 在 @file 引用时因 CodeMirror 竞态条件崩溃** [已关闭，7条评论]
   影响v0.24.6 Remote-SSH用户的高优先级P1 UI Bug；使用 `@file` 提示时会触发崩溃。社区提供复现步骤后，问题当天即解决。
   [链接](https://github.com/QwenLM/qwen-code/issues/12826)

4. **#12856: 辅助模型选择器在baseUrl中泄漏以NUL分隔的凭据** [开放中，5条评论]
   涉及安全的P2 Bug：5个设置键会存储 `authType:<id>\0<baseUrl>` 格式的内容，其中嵌入了用户信息（如API密钥），导致凭据在公开界面暴露。
   [链接](https://github.com/QwenLM/qwen-code/issues/12856)

5. **#12835: 即使排除了Skill工具，技能列表仍会被注入** [开放中，5条评论]
   P2核心Bug：尽管使用了 `--exclude-tools skill`，技能系统提示仍会出现在提示词中，导致工具上下文泄漏并增加提示词体积。
   [链接](https://github.com/QwenLM/qwen-code/issues/12835)

6. **#12874: macOS桌面端右侧边栏切换按钮失效** [开放中，4条评论]
   v0.24.6中的P2 UI回归问题：用户打开右侧扩展面板后无法将其折叠，且无临时解决方案（Esc键/拖拽均无效）。
   [链接](https://github.com/QwenLM/qwen-code/issues/12874)

7. **#12844: `qwen mcp reconnect` 在统计功能禁用时仍会发送遥测数据** [开放中，4条评论]
   涉及隐私的P2 Bug：即使设置了 `privacy.usageStatisticsEnabled: false`，`session_start` 事件仍会被上传，违反了用户的选择退出设置。
   [链接](https://github.com/QwenLM/qwen-code/issues/12844)

8. **#12766: Runtime Broker 重启后无法接管/停用工作进程** [开放中，4条评论]
   Managed Agent的关键弹性缺陷：重启后的代理会遗留孤立的本地工作进程，且无法恢复现有READY状态的绑定。
   [链接](https://github.com/QwenLM/qwen-code/issues/12766)

9. **#12878: Ollama 拒绝零参数工具（缺少`properties`字段）** [开放中，3条评论]
   集成类P2 Bug：Qwen Code对无参数工具省略了 `properties` 字段，导致本地部署的Ollama JSON Schema验证失败。
   [链接](https://github.com/QwenLM/qwen-code/issues/12878)

10. **#10151: 通过结构化召回和无损迁移优化自动记忆功能** [开放中，4条评论]
    长期存在的功能需求：为记忆文件添加结构化元数据以实现按需召回，并支持向后兼容的迁移。与上下文性能路线图相关。
    [链接](https://github.com/QwenLM/qwen-code/issues/10151)

---

## 4. 重点PR进展（前10）
1. **#12883: 托管引擎配置兼容性评估（M3）** [开放中]
   实现了会话在托管引擎上运行前所需的严格只读配置快照和兼容性检查，管控从传统路径到托管路径的分阶段迁移。
   [链接](https://github.com/QwenLM/qwen-code/pull/12883)

2. **#12881: 实现会话关闭/归档/删除的持久化操作（Stage D4）** [开放中]
   完成Managed Agent路线图的Stage D阶段：新增支持202状态异步完成的持久化生命周期操作，填补了合约测试的缺口。
   [链接](https://github.com/QwenLM/qwen-code/pull/12881)

3. **#12848: 门控Hosted前台Shell交互** [开放中]
   在私有Hosted工作区循环中新增Shell执行能力，标准输出/错误会持久化到SQL会话存储中，并对模型访问进行了限制。扩展了Hosted Harness的能力，不再局限于文件操作。
   [链接](https://github.com/QwenLM/qwen-code/pull/12848)

4. **#12855: 提交Stage H记录与serve任务列表（H0c）** [开放中]
   为托管代理实现Stage H记录持久化和控制面任务列表重建，基于此前定义的H0b记录合约构建。
   [链接](https://github.com/QwenLM/qwen-code/pull/12855)

5. **#12582: 通过A2A添加远程Qwen/Codex/Claude运行时** [开放中]
   在A2A层引入远程执行运行时，支持一次性注册令牌、可撤销凭据和协调器的工作租赁机制。扩展了多代理执行拓扑。
   [链接](https://github.com/QwenLM/qwen-code/pull/12582)

6. **#12107: 并行化扩展加载循环** [开放中]
   性能优化：有界并行扩展加载保留目录顺序，对资源耗尽情况重试一次，并在失败时保留先前的运行时状态，提升启动速度。
   [链接](https://github.com/QwenLM/qwen-code/pull/12107)

7. **#12799: 保留未修改编辑区域的换行符** [开放中]
   修复编辑工具行为：本地编辑会复制匹配范围外的字节，插入内容时使用周围的换行符；全文件替换会保留CRLF设置。避免意外的文件格式变更。
   [链接](https://github.com/QwenLM/qwen-code/pull/12799)

8. **#12545: 对没有Skill工具权限的子代理隐藏SkillManager** [开放中]
   修复上下文泄漏问题：没有Skill工具权限的子代理不再访问会话的SkillManager，解决了捆绑引用的内联解析问题，减少了不必要的提示词注入。
   [链接](https://github.com/QwenLM/qwen-code/pull/12545)

9. **#12864: 收尾延迟的Hosted无工具CI门禁后续工作** [已关闭]
   强化了Hosted Harness的Java集成测试覆盖：验证了完整测试族的执行、偶发测试的缓解措施和CI一致性。无生产代码变更，但提升了发布信心。
   [链接](https://github.com/QwenLM/qwen-code/pull/12864)

10. **#12839: 针对执行日志丢失的W0e终端恢复防护** [开放中]
    为运行时日志已确认丢失的执行新增 `ABANDONED` 终端状态，保留幂等收据和请求数据，但不会臆造结果。提升运行时代理的容错能力。
    [链接](https://github.com/QwenLM/qwen-code/pull/12839)

---

## 5. 热门讨论
*省略：本数据集中未提供讨论类（创意/问答/作品展示）数据。*

---

## 6. 功能需求趋势
1. **Managed Agent 健壮性与功能对齐**：最核心的需求集中在持久会话生命周期、可恢复工具执行，以及传统引擎与新托管引擎之间的功能对齐（由#12380及8个以上关联的问题/PR驱动）。
2. **Runtime Broker 弹性**：用户希望实现重启时的工作进程接管/停用、托管工具交互的故障门控，以及执行丢失恢复（#12766、#12670、#12872）。
3. **UI/UX 增强**：需求包括消息引用到输入框、跨会话消息文档清晰度优化，以及视口内容对齐（#12682、#12866、#9305）。
4. **多代理与远程执行**：对远程运行时集成、持久化工作区代理和基于A2A的代理协作的兴趣日益增长（#12582、#11206、#10954）。
5. **记忆与上下文改进**：结构化自动记忆召回、无损迁移和记忆债务解决（#10151、#12853）。

---

## 7. 开发者痛点
1. **配置中的凭据泄漏**：持久化的以NUL分隔的baseUrl中嵌入了API密钥，导致凭据在多个设置界面暴露（#12856）。
2. **遥测选择退出失效**：即使禁用了使用统计，MCP重连期间仍会意外上传 `session_start` 数据，削弱了用户对隐私控制的信任（#12844）。
3. **桌面端UI回归**：macOS侧边栏切换失效和Remote-SSH下的CodeMirror竞态崩溃，干扰了日常工作流（#12874、#12826）。
4. **代理配置缺口**：CUA SDK原生载荷下载忽略HTTP(S)代理设置，导致在受限网络下安装失败（#12829）。
5. **工具上下文泄漏**：即使排除了Skill工具，技能列表仍会出现，导致提示词臃肿并产生意外行为（#12835）。
6. **Ollama集成摩擦**：零参数工具的Schema不匹配，导致本地Ollama用户普遍遇到400错误（#12878）。
7. **批量API结果不一致**：`qwen batch collect` 显示完全交付，但在停止条件下会静默省略文档段落（#12825）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*