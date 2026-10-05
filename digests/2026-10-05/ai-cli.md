# AI CLI 工具社区周报 2026-10-05

> 生成时间: 2026-10-05 01:47 UTC | 覆盖工具: 7 个

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

# 跨工具AI CLI生态对比报告（2026-10-05 社区摘要）
---

## 1. 生态概览
AI开发者CLI工具生态正处于高速成熟阶段，所有主流厂商均在快速迭代发布（平均每周6-10次），重点聚焦平台稳定性、插件/扩展系统以及企业级治理能力。全行业向智能体工作流的转型，正推动各方共同投入子智能体编排、上下文窗口管理以及远程/无头运行能力建设，而Windows及跨平台兼容性仍是普遍痛点。MCP（Model Context Protocol）等开放生态标准已成为所有工具的必备基础，各社区均将厂商与自托管模型提供商之间的互操作性作为优先事项。随着这些工具从实验性设施转变为生产关键型开发者基础设施，企业客户对安全加固、审计追踪和全组织策略执行的要求也日益提高。

---

## 2. 活跃度对比
| 工具 | 热门问题（未解决/总计） | 关键PR（活跃） | 热门讨论 | 发布频率（7天） | 成熟阶段 |
|------|--------------------------|------------------|-----------------|------------------------|----------------|
| Claude Code | 10个未解决 / 总计10个 | 10个活跃 | 无* | 6次稳定版发布（v2.1.284–v2.1.289） | 正式发布（GA） |
| OpenAI Codex | 8个未解决 / 总计10个 | 10个已合并 | 15个活跃（5个创意提案、5个问答、5个成果展示） | 10次alpha预发布（v0.162.0-alpha.4–13） | Beta |
| Gemini CLI | 8个未解决 / 总计10个 | 10个活跃 | 无* | 8次发布（1次稳定版、1次预览版、6次每日构建版） | 正式发布（GA） |
| GitHub Copilot CLI | 4个未解决 / 总计10个 | 3个活跃 | 无* | 9次补丁发布（v1.0.90–v1.0.92-4） | 正式发布（GA） |
| OpenCode | 5个未解决 / 总计10个 | 10个活跃 | 无* | 2次补丁发布（v1.18.33–v1.18.34） | 正式发布（GA） |
| Pi | 7个未解决 / 总计10个 | 10个活跃 | 9个活跃（4个创意提案、2个问答、3个成果展示） | 6次发布（v0.99.0–v1.0.2） | 1.0正式发布（GA） |
| Qwen Code | 8个未解决 / 总计10个 | 10个活跃 | 无* | 7次发布（1次稳定版、5次每日构建版、1次SDK、1次桌面版） | 正式发布（GA） |

*监测期内这些仓库未上报讨论数据；它们可能使用其他社区渠道（如issue评论、Discord、Slack）而非GitHub Discussions。

---

## 3. 共同功能方向
70%以上的工具生态正在趋同核心需求，表明AI CLI的预期能力正在形成标准化：
1. **MCP兼容性与可扩展性**
   - *所有工具*：优先保障MCP服务器稳定性、重连逻辑和跨平台生命周期管理。
   - Claude Code、Pi、Qwen Code：投入构建插件/模组系统，实现深度引擎行为定制。
2. **企业安全与策略执行**
   - Claude Code、OpenAI Codex、Qwen Code：构建组织级权限上限、审计追踪，以及用户安装插件的策略继承机制。
   - Gemini CLI、GitHub Copilot CLI：强化命令注入防护，为自主工作流提供沙箱执行能力。
3. **上下文与成本控制**
   - *除Claude Code外的所有工具*：迭代上下文压缩逻辑，修复无限制令牌留存、使用量统计错误和无限重发循环等问题。
   - OpenCode、Pi：新增可配置的令牌留存上限和重置时间可视化功能，提升使用透明度。
4. **跨平台Windows可靠性**
   - *所有工具*：发布Windows专属bug修复，覆盖ACL/沙箱配置、文件锁冲突、路径处理、终端UI渲染和更新生命周期故障等问题。Windows相关问题占整个生态高优先级问题的30-40%。
5. **远程与无头运行**
   - Claude Code、OpenAI Codex、GitHub Copilot CLI：扩展远程控制能力、守护进程管理和移动设备配对支持。
   - Qwen Code：构建Kubernetes原生运行时，用于托管式智能体部署。
6. **子智能体编排与可观测性**
   - Gemini CLI、Qwen Code、OpenCode：修复子智能体虚假成功上报、卡死问题，新增运行中子智能体状态可视化功能。
   - Pi、OpenAI Codex：探索跨智能体内存共享和多智能体协同能力。

---

## 4. 差异化分析
| 工具 | 核心方向 | 目标用户 | 技术路径 | 独特优势 |
|------|------------|-------------|--------------------|-------------------------|
| Claude Code | 通过模组实现行为定制、企业安全 | 企业工程团队、高级用户 | 自带深度引擎钩子的官方插件系统（Claude Mods）；Anthropic原生模型优化 | 内置风险检测侧边智能体*You Should Know*；针对用户安装插件的组织级工具权限上限 |
| OpenAI Codex | Windows守护进程稳定性、终端UI体验、生态增长 | 个人开发者、OpenAI生态用户 | 基于Rust的运行时保障性能；与ChatGPT/Codex分层体系深度集成 | 最大的社区生态（150+第三方工具）；自适应模型/推理编排提案 |
| Gemini CLI | 智能体执行可靠性、安全加固 | Google Cloud用户、企业团队 | 基于Node.js运行时，聚焦原子状态持久化和损坏恢复 | AST感知的代码工具路线图；零依赖操作系统级沙箱提案；原生Gemini模型亲和性 |
| GitHub Copilot CLI | MCP集成、GitHub生态对齐 | GitHub用户、企业DevOps团队 | 与GitHub身份和OAuth深度集成；聚焦配置系统体验 | 对话前本地/云环境选择器；支持BYOK模型并对接GitHub身份联邦 |
| OpenCode | 自定义提供商灵活性、多端UI一致性 | 自托管AI用户、多模型开发者 | Effect.js核心架构；跨平台终端UI + 桌面应用 | 无可匹敌的自定义/自托管模型兼容性；文件查看器支持Markdown预览；终端UI与桌面端功能对等 |
| Pi | 极简设计、代码模式性能 | 技术爱好者、高级用户 | TypeScript/QuickJS运行时用于代码模式执行；Nix优先的打包方式 | 按思考层级配置采样参数；P2P多智能体扩展；面向智能体工作流的社区微调模型 |
| Qwen Code | 托管式智能体运行时、Kubernetes部署 | 企业托管部署场景、阿里云用户 | Java + TypeScript双栈；带CSI持久工作区的托管智能体模式 | Kubernetes原生工具运行时；后台Shell/监控能力；面向代码任务的Qwen模型优化 |

---

## 5. 社区动能与成熟度
### 迭代速度最快/版本更新最频繁
- **Pi**：7天内发布6个版本，跨越1.0正式发布里程碑，当前正积极优化终端UI性能、提供商兼容性和代码模式稳定性；围绕持久任务和多智能体工作流的第三方扩展生态正在快速形成。
- **OpenAI Codex**：单周发布10个alpha版本，聚焦Windows稳定性；社区讨论量最高，围绕动态编排和跨智能体互操作性的创意讨论活跃；成果展示类生态活动丰富。
- **Claude Code**：发布6个稳定版，核心亮点为Claude Mods正式推出，标志着平台迎来重大扩展；企业安全相关PR推进迅速，以支撑插件普及。

### 最成熟/最稳定
- **GitHub Copilot CLI**：9次补丁发布表明其处于正式发布后的精细化优化阶段，而非核心功能扩张期；PR数量较少，说明代码库成熟稳定，仅聚焦增量改进。
- **Gemini CLI**：保持稳定版/预览版/每日构建版的常规发布节奏，重点聚焦安全加固和可靠性；面向社区的功能较少，但核心智能体执行能力稳健。

### 细分领域动能
- **Qwen Code**：托管式智能体和Kubernetes运行时功能推进迅速，瞄准企业托管部署场景；大力投入托管部署的生产级可靠性建设。
- **OpenCode**：自托管/开源AI社区参与度极高（例如Ollama/Gemma 4兼容性修复获48个👍）；用户对UI定制和多提供商灵活性需求强烈。

---

## 6. 趋势信号
对于技术决策者和工具开发者而言，这些社区模式表明全行业正转向优先布局以下方向：
1. **插件系统成为新的竞争主战场**：Claude Mods的推出，加上所有工具同步投入可扩展性建设，表明AI CLI正从单点工具向平台演进。面向该生态的团队应优先保障MCP兼容性，构建结构化的插件SDK，以抢占生态价值。
2. **企业安全不再是事后补充**：受企业客户需求驱动，全组织策略执行、审计追踪和沙箱加固已出现在所有主流工具中。缺乏原生治理控制能力的工具将在2027年被大型企业采购周期排除在外。
3. **Windows兼容性仍是重要的质量差异化因素**：在所有工具中，Windows专属bug在高优先级问题中占比畸高。投入一流Windows测试和原生平台集成的团队，将获得显著的用户体验优势。
4. **上下文管理是尚未解决的关键问题**：7款工具中有6款正在积极修复上下文压缩bug、使用量统计错误和无限循环问题。随着智能体工作流变得更长、更复杂，准确、可配置的上下文窗口管理将成为关键采购标准。
5. **自托管和BYOK需求加速增长**：社区对自定义提供商支持、Ollama兼容性和BYOK功能对等的高度参与表明，用户希望灵活搭配不同模型，而非被锁定在单一厂商。支持多提供商可移植性的生态工具将获得最快的采用速度。
6. **智能体可靠性是普及的最大障碍**：子智能体卡死、虚假成功上报和静默失败是Gemini CLI、Qwen Code和OpenCode社区的首要痛点。为自主智能体工作流构建 robust 的可观测性、错误恢复和防护机制，是推动智能体编码工具主流普及的关键。

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告
*数据截至 2026-10-05 | 来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. 热门技能排行
按社区关注度和讨论量排序（PR 按评论热度排序，注：提供的数据中原始 PR 评论数标记为 undefined；排名依据为发布时间、更新频率，以及与 issue 关联活动的交叉参考）：

| 排名 | 技能 / PR | 功能说明 | 讨论亮点 | 状态 |
|------|-----------|----------|----------|------|
| 1 | [skill-creator trigger eval fix (#1298)](https://github.com/anthropics/skills/pull/1298) | 修复技能触发评估中的漏报问题：解决了按 worker 分配的命令探测竞争、Windows `select()` 子进程管道故障，以及无关工具扫描干扰问题；同时修正了运行时故障导致负例误判通过的问题。 | 讨论度最高的核心基础设施修复；直接关联多个关于触发评估失效、触发率为 0% 的未解决 issue（#1383、#556）。 | 开放中 |
| 2 | [mcp-builder MCP 2.0 support (#1742)](https://github.com/anthropics/skills/pull/1742) | 通过更新 `streamable_http_client` 导入路径，并支持通过 `create_mcp_http_client` 自定义 HTTP 头，新增对 `mcp>=2.0.0` 的支持。 | 关联 issue #1668；解决了所有兼容 MCP 2.0 的技能的失效问题，该类技能是生态中增长最快的细分领域。 | 开放中 |
| 3 | [proofcore-contract-auditor (#1771)](https://github.com/anthropics/skills/pull/1771) | Web3 技能，可对 Solidity 和 Rust 智能合约执行自动化静态分析，并通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。 | 2026 年 9 月批次中流量最高的新功能 PR 之一；填补了 Web3 开发者工具的空白。 | 开放中 |
| 4 | [md2video-audio (#1703)](https://github.com/anthropics/skills/pull/1703) | 零成本技能，使用 Marp 生成幻灯片并结合音频合成管线，将 Markdown 文档转换为带拟人化配音的专业 MP4 视频。 | 用户对内容创作自动化兴趣浓厚；是首个拟加入官方合集的视频生成类技能。 | 开放中 |
| 5 | [Notion Spec to Implementation + Quantitative Resume Auditor (#1245)](https://github.com/anthropics/skills/pull/1245) | 包含两项技能：1）将产品/技术规格转换为结构化的 Notion 任务，附带实现方案、验收标准和进度追踪；2）对照量化基准审计简历质量。 | 活跃时间最长的功能 PR（2026 年 6 月创建）；是横跨效率工具和职业工具的双用途提交。 | 开放中 |
| 6 | [docx orphaned comment detection (#1734)](https://github.com/anthropics/skills/pull/1734) | 检测 DOCX 文件中的孤立评论（即未关联到文档内容的评论）。 | 属于 DOCX 相关修复集群的一部分（与 #1792 LibreOffice 超时修复配对），旨在填补文档处理技能的空白。 | 开放中 |
| 7 | [AWT (AI Watch Tester) E2E testing (#822)](https://github.com/anthropics/skills/pull/822) | 具备视觉能力的端到端测试技能，基于开源 AI Watch Tester 工具，支持 Claude 零代码生成测试用例并自动运行浏览器测试。 | 讨论度最高的测试类技能提交；响应了市场对 AI 原生端到端 QA 工作流的需求。 | 开放中 |

---

## 2. 社区需求趋势
从评论量最高的 issue 中提炼出的最受期待的技能方向如下：
1. **信任与安全治理** – 对安全边界执行、技能来源审计、防止信任边界滥用类技能的需求强烈（由评论量最高的 #492 issue 推动，共 43 条评论）。用户希望明确官方/社区技能的标识，以及智能体治理模式（在 #412 中提出）。
2. **技能基础设施可靠性** – 核心技能工具的修复需求迫切：触发评估失效（#556，12 条评论）、skill-creator 基准/评估 bug（#1383）、mcp-builder 评估失败（#1390），以及 `claude-api` 等技能注入过量导致的上下文窗口膨胀（#1487）。
3. **企业协作与共享** – 得票最高的功能需求（#228 获 8 个 👍），支持组织范围内的技能共享，替代手动分发 .skill 文件的工作流。
4. **文档处理质量** – 对提升文档技能覆盖度的需求持续存在：ODT 支持、DOCX 边缘场景修复、排版质量控制（#514），以及重复技能消解（#189，9 个 👍）。
5. **AI 质量管控管线** – 对推理门禁管线（#1385）和交付前验证 AI 输出质量的技能有兴趣，覆盖任务前校准、对抗性审查和验证等环节。

---

## 3. 高潜力待落地技能
以下为 2026 年第三季度有更新的活跃 PR，基于其与生态优先级的匹配度和更新速度，大概率将很快合入：
- [proofcore-contract-auditor (#1771)](https://github.com/anthropics/skills/pull/1771) – 带链上证明锚定的 Web3 智能合约审计技能
- [blast-radius (#1776)](https://github.com/anthropics/skills/pull/1776) – 批量/破坏性操作的部署前检查清单，填补安全与风险缓解方面的空白
- [scnet-hpc (#1615)](https://github.com/anthropics/skills/pull/1615) – 支持 SSH + Slurm 工作流的 HPC 集群运维技能
- [testing-patterns (#723)](https://github.com/anthropics/skills/pull/723) – 全栈综合测试方法学技能，覆盖从单元测试到 React 组件测试的完整链路
- [pyxel retro game development (#525)](https://github.com/anthropics/skills/pull/525) – 基于 Python 的复古游戏创作、调试与验证技能
- [compact-memory（在 #1329 中提出）](https://github.com/anthropics/skills/issues/1329) – 用于降低智能体状态内存占用的符号化标记技能，是极具潜力的效率优化方向

---

## 4. 技能生态洞察
社区在技能层面最集中的需求是**提升核心技能基础设施的可靠性、可信度和易用性**——包括修复失效的触发评估、明确官方/社区技能的边界、减少上下文窗口膨胀——优先级高于拓展小众新技能类别。

---

# Claude Code 社区周报 | 2026-10-05

## 1. 过去 7 天亮点
本周 Claude Code 快速迭代发布了 6 个版本（v2.1.284–v2.1.289），核心亮点是 **Claude Mods** 正式推出——这是一套支持深度行为定制的插件系统，同时还上线了内置副代理 *You Should Know*、默认切换为 Claude Sonnet 5.5 模型，以及扩展了 mod/CLI 相关 API。安全加固仍是工程团队的首要重点，目前有多份正在推进的 PR 旨在为用户安装的插件强制执行组织级工具权限上限；社区方面则反馈了多个高优先级问题，包括长会话下顾问工具失效、Windows 更新/会话生命周期缺陷，以及模型兼容性回归问题。

---

## 2. 版本发布
| 版本 | 核心变更 |
|---------|-------------|
| **v2.1.289** | 修复：受管设备上通过 mod 审批后，复合 shell 命令的拒绝/询问规则未持久化的问题；包含未闭合 `<script>` 标签或深层 `${}` 嵌套的短代码块导致终端卡死的问题；部分 `Read` 拒绝逻辑的 bug。 |
| **v2.1.288** | 新增 `$.ui.selection()` mod API（返回最近一次全屏选中的文本及对应的会话行上下文）；为未安装 GitHub CLI 的云端会话内置 `gh api` 支持；修复内置命令对控制字符的处理问题。 |
| **v2.1.287** | **Claude Mods** 正式上线：插件现在可修改核心引擎行为；推出内置副代理 mod *You Should Know*（用于提示遗漏的风险，可通过 `/plugin enable cc-plugin-you-should-know@builtin` 启用）。 |
| **v2.1.286** | 为堆叠式权限提示新增进度计数（如“2/5”）；全屏模式下“还有 N 条”列表行支持鼠标交互（点击跳转，含悬停/按下状态）；多项 Claude Code 进程稳定性修复。 |
| **v2.1.285** | 新增 `CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量，用于禁用 WebFetch 工具；新增 `claude --desktop` 命令，可直接为指定目录/会话打开桌面应用；新增 `claude plugin configure <plugin>` 命令（部分灰度）。 |
| **v2.1.284** | 新增 **Claude Sonnet 5.5**（`claude-sonnet-5-5`）作为默认 Sonnet 模型（1M 上下文，输入/输出定价为 $2/$10 每百万 token，缓存读取 $0.20 每百万 token）；为工作目录外的自动模式读取提示新增“是，但下次仍询问”选项。 |

---

## 3. 热门问题
1. **#67609: 对话超过 10 万 token 时，claude-fable-5 的顾问工具不可用**  
   当 Fable 5 对话达到约 10 万 token 后，服务端顾问工具会直接返回硬错误，导致长会话下该功能完全失效。这是本周评论数（27 条）和点赞数（45 个）最高的未解决 issue。  
   🔗 [anthropics/claude-code#67609](https://github.com/anthropics/claude-code/issues/67609)

2. **#91763: 残留的 git fsmonitor 守护进程导致 Windows MSIX 更新被阻塞**  
   Claude Code 启动的 `git fsmonitor--daemon` 会继承 AppX 容器作业，强制更新关机后仍会残留，阻塞新版本重启并报错 0x80070020。提交者附上了根因分析和无需重启的临时解决方案。  
   🔗 [anthropics/claude-code#91763](https://github.com/anthropics/claude-code/issues/91763)

3. **#92007: Windows 上 `/model opusplan` 报错“不支持的模型”**  
   此前可用的模型选择功能在 Windows 桌面端突然失效，13 个点赞表明影响范围较广，波及依赖 Opus 规划工作流的用户。  
   🔗 [anthropics/claude-code#92007](https://github.com/anthropics/claude-code/issues/92007)

4. **#98310: 远程控制会话取消归档后挂起**  
   服务端模式的 `claude remote-control` 会话在 claude.ai 上被归档再取消归档后，不会重新调度到运行中的主机，消息一直停留在“发送中…”，随后显示离线错误，破坏了长时服务端工作流的连续性。  
   🔗 [anthropics/claude-code#98310](https://github.com/anthropics/claude-code/issues/98310)

5. **#98345: 自动权限模式在会话首轮失效**  
   配置了 `defaultMode: "auto"` 的会话，首轮往往仍以手动模式运行，需桌面应用重新发送权限设置后才会切换为自动模式，不符合新会话的自动化预期。  
   🔗 [anthropics/claude-code#98345](https://github.com/anthropics/claude-code/issues/98345)

6. **#99265: Mod 的 AbovePrompt 提示条同一时间仅在一个桌面聊天窗口渲染**  
   Windows 桌面应用中并排打开两个 Code 聊天窗口时，mod 的 `AbovePrompt` UI 仅在其中一个窗口显示，尽管 mod 在两个窗口中都在运行，降低了多会话下的 mod 使用体验。  
   🔗 [anthropics/claude-code#99265](https://github.com/anthropics/claude-code/issues/99265)

7. **#99535: 桌面应用中 mod 的 diff 格式代码渲染为纯文本**  
   带有 `format: 'diff'` 的 mod `Pane` 在桌面应用中仅显示原始 diff 文本（无红绿底色、无行号栏、无单词高亮），但在终端中渲染正常，给 mod 开发者带来了 UI 一致性问题。  
   🔗 [anthropics/claude-code#99535](https://github.com/anthropics/claude-code/issues/99535)

8. **#99513: 过期的 MCP 缓存向所有会话注入已断开连接的工具**  
   `~/.claude.json` 中过期的 `claudeAiMcpEverConnected` 缓存条目，会将 16 个已断开连接的 claude.ai MCP 连接器的完整工具定义注入到每个 CLI 会话中，导致工具列表臃肿且引用失效。  
   🔗 [anthropics/claude-code#99513](https://github.com/anthropics/claude-code/issues/99513)

9. **#71585: 外部文件变更系统提示断言了无法验证的变更原因**  
   自动生成的文件变更提示称修改是“由用户或 linter 完成”，并暗示用户知晓该变更，模型会将其作为事实转述——即便变更来自其他进程，存在误导模型推理的风险。  
   🔗 [anthropics/claude-code#71585](https://github.com/anthropics/claude-code/issues/71585)

10. **#99541: Windows 重启后，桌面侧边栏的会话分组映射丢失**  
    会话分组本身仍存在，但单个会话与分组的对应关系在 Windows 重启后消失，导致会话全部变为未分组状态，影响同时管理多个项目的用户的整理效率。  
    🔗 [anthropics/claude-code#99541](https://github.com/anthropics/claude-code/issues/99541)

---

## 4. 重点 PR 进展
1. **#99540: sec-default — 组织级工具权限上限适用于用户安装的插件**  
   确保组织级的工具批准/拒绝策略（通过 policy mod 配置）始终为有效上限，即使用户安装了第三方插件也无法突破。每个决策钩子都包含 `.catch` 容错处理。  
   🔗 [anthropics/claude-code#99540](https://github.com/anthropics/claude-code/pull/99540)

2. **#99137: sec-default — 插件仅能收紧、不能放宽继承的规则**  
   作为 #99540 的补充：用户插件可添加更严格的拒绝/询问规则或固定变量，但不能放松组织设置的策略。该功能兼容现有已发布的引擎，无需新增 API。  
   🔗 [anthropics/claude-code#99137](https://github.com/anthropics/claude-code/pull/99137)

3. **#40572: 新增全局 Hookify 规则支持**  
   除了项目级 `.claude/` 目录下的规则外，还会从全局 `~/.claude/` 目录加载 Hookify 规则，用户无需逐项目配置即可统一跨仓库的钩子和规范。  
   🔗 [anthropics/claude-code#40572](https://github.com/anthropics/claude-code/pull/40572)

4. **#81672: fix(hookify) — 包导入与安装目录名解耦**  
   修复了插件目录名不恰好为 `hookify` 时（例如从应用市场安装后目录带哈希），Hookify 插件导入失败的问题，解决了两个关联 bug。  
   🔗 [anthropics/claude-code#81672](https://github.com/anthropics/claude-code/pull/81672)

5. **#99206: diff — 停靠面板标题对齐到引擎头部行下方**  
   减少了停靠式 `/diff` 面板标题上方的多余空白：引擎现在会为面板的关闭按钮预留顶部空白行，消除了冗余内边距。  
   🔗 [anthropics/claude-code#99206](https://github.com/anthropics/claude-code/pull/99206)

6. **#99141: diff — 面板在有内容可渲染前保持存活**  
   在主机页面挂载前（或尚无任何变更时）打开的 `/diff` 面板现在会保留其面板槽位，一旦内容就绪就会自动填充，而不是静默失败。  
   🔗 [anthropics/claude-code#99141](https://github.com/anthropics/claude-code/pull/99141)

7. **#99118: diff — 允许面板/对话框打开时显示 toast 通知**  
   移除了 `/diff` 面板和对话框的 `holdToasts: true` 行为，其他插件的临时 toast 通知现在可以正常显示，而不是排队等到 diff 视图关闭后才弹出。  
   🔗 [anthropics/claude-code#99118](https://github.com/anthropics/claude-code/pull/99118)

8. **#94847: diff — 仅在首次编辑被跟踪文件时自动打开面板**  
   避免了首次编辑目标为忽略文件、仓库外路径或不同工作树时，diff 面板空打开的问题。现在面板仅在有实际被跟踪的变更可显示时才会打开。  
   🔗 [anthropics/claude-code#94847](https://github.com/anthropics/claude-code/pull/94847)

9. **#98445: diff — 单个 git 进程读取所有文件变更块**  
   将按文件调用 git（每次工具调用最多 50 次）改为单个进程读取所有变更块，大幅降低了进程 spawn 开销——对进程启动较慢的 Windows 效果尤为显著。  
   🔗 [anthropics/claude-code#98445](https://github.com/anthropics/claude-code/pull/98445)

10. **#20448: 新增 web4-governance 插件，支持 R6 工作流的 AI 治理**  
    推出一款原生信任型治理插件，具备加密溯源、实体见证和 R6 审计追踪能力，面向 AI 代理工作流的问责场景。  
    🔗 [anthropics/claude-code#20448](https://github.com/anthropics/claude-code/pull/20448)

---

## 5. 热门讨论
*本报告周期内未提供讨论数据。*

---

## 6. 功能需求趋势
1. **插件/mod 系统可扩展性** — 随着 Claude Mods 生态启动，对全局跨项目 Hookify 规则、更丰富的 mod UI API（选择上下文、diff 渲染一致性）以及治理类插件的需求正在加速增长。
2. **会话组织与共享上下文** — 用户希望侧边栏分组能承载跨会话的共享指令和组级上下文，并且分组成员关系在重启后保持持久。
3. **CLI/桌面端高级功能一致性** — 用户持续要求 diff 格式、mod UI 元素和 MCP 行为在终端、桌面应用和网页端之间保持一致。
4. **移动端与无头工作流支持** — 越来越多用户希望能在移动设备上使用 Dispatch 和远程控制会话，无需一台始终在线的桌面主机。
5. **可定制的 UI 外壳** — 用户希望能精细控制状态栏元素（例如独立隐藏模式指示器而不影响提示文本），减少自定义配置下的信息冗余。

---

## 7. 开发者痛点
1. **Windows 平台不稳定** — 一组高影响的 Windows 专属问题占据了 issue 活跃度前列：孤立 git 进程导致的 MSIX 更新失败、重启后会话分组丢失、凭证存储中 VSCode OAuth 竞态条件，以及 MCP 原生宿主复制失败。
2. **权限模式与安全策略缺口** — 自动模式首轮不生效，加上组织策略与用户安装插件的交互逻辑不明确，给企业团队带来了信任和自动化方面的缺口。
3. **长会话可靠性** — 超过 10 万 token 的 Fable 5 会话中顾问工具直接失效，破坏了长时间编码会话和大型仓库工作的核心流程。
4. **桌面 UI 渲染不一致** — 多个 mod UI 相关 bug（AbovePrompt 提示条、diff 格式）仅在单个聊天窗口显示或渲染错误，降低了面向桌面端开发 mod 的信心。
5. **会话生命周期与远程控制脆弱性** — 归档/取消归档的远程会话无法重新调度，以及更新重启中断正在运行的会话，都会破坏长时和无头工作流。
6. **缓存过期 / 状态泄漏** — 注入过期的 MCP 工具、错误的文件变更归因提示会引入误导性状态，可能以难以调试的方式影响模型行为。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区简报 | 2026-10-05
---

## 1. 过去7天亮点
本周 Rust Codex 运行时发布了10个快速预发布版本（v0.162.0-alpha 系列），重点聚焦 Windows 稳定性、TUI 使用体验与远程控制工作流。社区关注集中在 Windows 平台问题（队列错误、ACL 沙箱失效、远程配对问题），以及恢复分支选择等 UI 控件的需求。生态活跃度大幅提升，社区新推出了跨智能体内存、配额管理、会话监控等工具。

## 2. 版本发布
`v0.162.0-alpha` 系列共推出10个 Rust 预发布版本，聚焦 Windows 守护进程可靠性、TUI 易用性改进、远程控制守护进程化以及 ACL 错误恢复：
- 完整版本范围：`rust-v0.162.0-alpha.4` → `rust-v0.162.0-alpha.13`
- 核心主题：Windows 终端/守护进程加固、TUI 全屏体验增强、远程控制守护进程管理、环境就绪状态变化时的工具暴露稳定性
- 发布页面：[github.com/openai/codex/releases](https://github.com/openai/codex/releases)

## 3. 热门问题
| 问题 | 摘要 | 重要性 | 社区反应 |
|-------|---------|----------------|--------------------|
| [#48774](https://github.com/openai/codex/issues/48774) | [bug] Codex 远程配对在 Android 上失败 | 阻碍移动端用户的核心远程工作流；影响跨设备认证流程 | 53 条评论，26 👍 — 本周评论数最多的未解决问题，用户影响范围广 |
| [#49532](https://github.com/openai/codex/issues/49532) | [增强建议] 恢复 Codex 应用中的分支选择功能 | 回退的 UI 功能，对多分支开发工作流至关重要 | 37 条评论，69 👍 — 获赞最高的需求，用户强烈要求回退该变更 |
| [#15310](https://github.com/openai/codex/issues/15310) | [bug] 桌面自动化无提示回退到 workspace-write 沙箱 | 安全/可靠性缺陷：计划任务忽略配置的权限级别 | 23 条评论，17 👍 — 长期存在的 bug，影响自动化信任度 |
| [#49975](https://github.com/openai/codex/issues/49975) | [bug] 消息卡在发送队列：Windows 上出现 "undefined" JSON 错误 | 导致 VS Code 扩展核心消息功能失效 | 21 条评论 — 对 Windows 平台工作流造成高影响中断 |
| [#49264](https://github.com/openai/codex/issues/49264) | [bug][已关闭] Windows CLI 每条命令都会闪烁终端窗口 | 影响 CLI 可用性的回归问题；本周 alpha 版本已修复 | 16 条评论，7 👍 — 修复已确认，解决了普遍存在的体验困扰 |
| [#36953](https://github.com/openai/codex/issues/36953) | [bug] 规则删除后浏览器站点权限仍保持 blocked 状态 | 权限状态损坏导致浏览功能失效 | 16 条评论，5 👍 — 持久化状态 bug，暂无明确解决方法 |
| [#49477](https://github.com/openai/codex/issues/49477) | [bug] Windows 原生端：durable-task 后续任务因 AbsolutePathBuf 错误失败 | Windows 路径处理问题导致跨环境任务互操作失效 | 14 条评论，2 👍 — 阻碍云端到本地的任务连续性 |
| [#19821](https://github.com/openai/codex/issues/19821) | [bug] WebSocket 连接失败在 HTTP 回退前耗尽重试次数 | 代理用户（尤其是中国大陆用户）会话启动时延迟极高 | 14 条评论，2 👍 — 国际用户长期存在的连接痛点 |
| [#20489](https://github.com/openai/codex/issues/20489) | [增强建议] 新增适读屏软件的 TUI 模式 | 无障碍缺陷：装饰性终端 UI 破坏屏读软件体验 | 11 条评论 — 贡献者已有本地修复方案，等待维护者审核 |
| [#50265](https://github.com/openai/codex/issues/50265) | [bug][已关闭] VS Code 提示消失且未被处理 | 影响企业用户的严重数据丢失 bug；本周已解决 | 8 条评论，3 👍 — 修复已确认，解决了大量文本丢失报告 |

## 4. 关键 PR 进展
本周所有合并的 PR 均聚焦稳定性、用户体验与平台兼容性：
1. [#50940](https://github.com/openai/codex/pull/50940) — **Windows ACL 恢复**：安全恢复格式错误的 `deny_read_acl_state.json`，不修改现有文件限制或内容。
2. [#50962](https://github.com/openai/codex/pull/50962) — **稳定环境工具特性开关**：新增默认关闭的 `stable_environment_tools` 开关，确保即使执行器就绪状态变化，基于环境的工具仍保持可用。
3. [#50964](https://github.com/openai/codex/pull/50964) — **轮次分析工具追踪**：在轮次配置中新增 `tools_change_count`，追踪会话期间可用工具的变化频率。
4. [#50803](https://github.com/openai/codex/pull/50803) — **远程控制托管守护进程**：让 `codex remote-control` 复用托管守护进程（启用自动启动时），而非运行前台服务器。
5. [#50802](https://github.com/openai/codex/pull/50802) — **Windows 联接点回退**：当原生联接点更新被 Windows 策略阻止时，回退到 `cmd.exe / mklink /J` 方案，修复守护进程版本选择问题。
6. [#50782](https://github.com/openai/codex/pull/50782) — **Windows 守护进程发布重试**：针对杀毒/扫描工具导致的临时文件锁，增加发布重试机制。
7. [#50811](https://github.com/openai/codex/pull/50811) — **TUI 推理摘要默认设置**：在新的 TUI 线程中遵循服务端推理摘要默认配置，而非强制关闭摘要。
8. [#50764](https://github.com/openai/codex/pull/50764) — **运行中轮次归档**：支持在轮次中途执行 `/archive`，并提示归档将终止活动会话。
9. [#50727](https://github.com/openai/codex/pull/50727) — **任务详情界面更新**：将模型、推理强度、项目和用量信息移至任务详情顶部，提升可见性。
10. [#50720](https://github.com/openai/codex/pull/50720) — **Windows Terminal Shift+Enter 修复**：将 Windows Terminal 的 `ESC[13;2u` 序列解码为 Shift+Enter，确保编辑器中正确插入换行。

## 5. 热门讨论
### 创意想法
| 讨论 | 摘要 |
|------------|---------|
| [#46658](https://github.com/openai/codex/discussions/46658) | 模型、工具与子智能体的自适应分配：建议将选择过程视为共享动态优化问题，而非静态配置。 |
| [#26397](https://github.com/openai/codex/discussions/26397) | 跨智能体项目上下文同步：用户对需要在 Codex 和 Claude Code 之间分别维护项目内存感到不满。 |
| [#36238](https://github.com/openai/codex/discussions/36238) | 权限模型通配符支持：字面量参数匹配导致常见安全模式（例如变量 git 命令）限制过严。 |
| [#49977](https://github.com/openai/codex/discussions/49977) | 动态模型/推理编排：呼吁支持运行时调整模型和推理级别，而非静态的全局任务选择。 |
| [#50875](https://github.com/openai/codex/discussions/50875) | 组织管理的技能配置：请求为企业团队提供云端和桌面端统一管控、版本锁定的行为配置。 |

### 问答
| 讨论 | 摘要 |
|------------|---------|
| [#2251](https://github.com/openai/codex/discussions/2251) | Codex 用量限额一致性：本周最活跃的讨论，质疑 ChatGPT 应用和 Codex 的 Plus 套餐限额是否一致（每周3000次思考）。 |
| [#8503](https://github.com/openai/codex/discussions/8503) | 剩余额度100%却提示"已达用量上限"：GitHub Code Review 连接器错误报告限额耗尽。 |
| [#21935](https://github.com/openai/codex/discussions/21935) | `codex remote-control` 定位：澄清该新入口的设计意图（是 API 后端还是完整远程 UI）。 |
| [#37960](https://github.com/openai/codex/discussions/37960) | 跨厂商协调本地/远程智能体：在不同机器上管理异步 Codex 和 Claude Code 智能体的工作流。 |
| [#46001](https://github.com/openai/codex/discussions/46001) | Windows 权限配置验证：如何确认桌面端实际生效的权限配置与所选配置是否一致。 |

### 作品展示
| 讨论 | 摘要 |
|------------|---------|
| [#16329](https://github.com/openai/codex/discussions/16329) | Awesome Codex CLI：精选的150+生态工具列表（含子智能体、技能、MCP 服务器、插件）。 |
| [#39282](https://github.com/openai/codex/discussions/39282) | Lians：采用 Apache-2.0 协议的本地 MCP 内存层，实现跨智能体（Codex/Claude Code/Cursor）项目连续性。 |
| [#50222](https://github.com/openai/codex/discussions/50222) | QuotaCrew for Codex：Windows 账户管理器，支持配额追踪、自动切换和任务续跑。 |
| [#46874](https://github.com/openai/codex/discussions/46874) | Agent Lint：开源 linter，支持 Codex、AGENTS.md、MCP、Claude Code 和 Cursor 配置文件检查。 |
| [#50548](https://github.com/openai/codex/discussions/50548) | codex-unlock：用于诊断线程写入锁并恢复符合条件的已完成会话的 CLI 工具。 |

## 6. 功能需求趋势
1. **权限模型灵活性**：命令权限支持通配符/glob、范围化 URL 审批、更清晰的实际权限可见性。
2. **动态编排**：根据任务阶段自适应运行时选择模型、推理强度、工具和子智能体，而非静态配置。
3. **跨智能体互操作**：Codex、Claude Code 和 Cursor 之间共享项目内存、上下文同步和会话消息传递。
4. **企业管控**：组织管理的技能/行为配置，支持版本锁定、审计追踪和策略执行。
5. **UI/UX 恢复与改进**：恢复分支选择、"复制为 Markdown"、屏读软件无障碍支持、持久化 UI 偏好设置。
6. **用量限额灵活性**：延长累计额度重置有效期、更清晰的限额统计、更好的跨功能限额一致性。

## 7. 开发者痛点
1. **Windows 平台不稳定**：ACL/沙箱设置反复出现 bug、守护进程文件锁冲突、终端窗口闪烁、路径反序列化错误。
2. **远程配对与连接失败**：Android 配对循环、代理用户 WebSocket 重试延迟、远程控制线程锁定问题。
3. **消息/队列数据丢失**：VS Code 扩展提示消失、发送队列卡住、重复提交 bug，近期多个版本均受影响。
4. **权限状态损坏**：浏览器/站点权限残留、自动化沙箱回退错误、实际生效配置与配置文件不匹配。
5. **用量限额不透明**：不同界面限额报告不一致、重置额度意外过期、ChatGPT 与 Codex 套餐权益不明确。
6. **跨环境任务连续性**：云端到本地任务同步失败、dot/会话放置错误、移动/桌面客户端线程锁定。

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区周报 | 2026-10-05
---

## 1. 上周亮点
本周 Gemini CLI 项目发布了稳定版 v0.62.0、预览版 v0.63.0，以及截至 v0.64.0-nightly.20261005 的每日夜间构建版本，修复内容主要聚焦于 CLI 交互可靠性、状态持久化安全性、Agent 执行稳定性与安全加固。社区最活跃的讨论围绕 Agent 可靠性 Bug（子 Agent 误报成功、通用 Agent 卡死、浏览器 Agent 边界场景），以及支持 AST 感知的代码工具、优化子 Agent 可观测性的需求展开。维护者还合并了一批核心性能与安全改进，包括 Windows 平台子进程参数处理加固、grep 命令注入防护等。

---

## 2. 版本发布
- **v0.64.0-nightly.20261005.gfb972b2f8** (2026-10-05)：自动版本号迭代的夜间构建；完整变更日志：[compare link](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8)
- **v0.64.0-nightly.20261003.gfb972b2f8**：修复了选择列表 UI 中 Enter/空格键确认不可靠的问题 ([PR #29502](https://github.com/google-gemini/gemini-cli/pull/29502))
- **v0.64.0-nightly.20261002.gc9096a847**：在 `ChatRecordingService` 中实现了仅追加式增量补丁 + 有限历史窗口；新增原子状态持久化能力，支持从备份中恢复损坏数据 ([PR #29568](https://github.com/google-gemini/gemini-cli/pull/29568))
- **v0.64.0-nightly.20261001.gc6bccb7ec**：修复了代码中 `@` 符号导致的 CPU 卡死 + 引号吞掉问题；对文件工具操作进行序列化处理，支持原子写入 ([PR #29557](https://github.com/google-gemini/gemini-cli/pull/29557))
- **v0.64.0-nightly.20260930.g38700b4b3**：在非交互模式下启用自主计划执行；修复了 `formatTruncatedToolOutput` 中 `maxChars <= 0` 时的截断逻辑错误 ([PR #29539](https://github.com/google-gemini/gemini-cli/pull/29539))
- **v0.63.0-preview.0**：新增连接恢复过程中的重试进度指示器 ([PR #29468](https://github.com/google-gemini/gemini-cli/pull/29468))
- **v0.63.0-nightly.20260929.gfe6350238**：修复了由文件竞争、无界面密钥环、Supervisor 状态丢失导致的无限鉴权循环问题 ([PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448))
- **v0.62.0** (稳定版)：包含 A2A 服务端元数据端点修复，以及累计的预览版变更；发布页面：[v0.62.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0)

---

## 3. 热门 Issue
| Issue | 重要性 | 社区反馈 |
|---|---|---|
| [#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 级 Bug：`codebase_investigator` 子 Agent 在达到最大轮次后会误报任务成功，掩盖任务失败事实并产生误导性结果。 | 13 条评论（本周最活跃），2 👍 |
| [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 级 Bug：调用通用子 Agent 执行文件夹创建等基础操作时会出现 indefinite 卡死（最长可达 1 小时以上）；临时解决方案是禁用子 Agent。 | 8 条评论，8 👍（点赞数最高） |
| [#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | 大型增强功能：利用 Gemini 3 原生的 bash 亲和性，在保障安全的同时支持 POSIX 工具链调用，用于代码库探索。 | 9 条评论，1 👍 |
| [#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC 级跟踪项：调研 AST 感知工具能力，以减少交互轮次、降低 token 冗余、提升代码导航精度。 | 7 条评论，1 👍 |
| [#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | 用户反馈的体验缺口：模型无法主动调用自定义技能/子 Agent，必须显式指示才会触发，限制了自动化价值。 | 7 条评论 |
| [#22186 get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 级崩溃问题：get-shit-done 工作流在输出最终总结时崩溃，影响用户任务完成。 | 3 条评论 |
| [#21983 Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 级兼容性 Bug：Linux Wayland 环境下浏览器 Agent 无法使用。 | 4 条评论，1 👍 |
| [#22267 Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | Bug：浏览器 Agent 会忽略 `settings.json` 中的 `maxTurns` 等配置项，导致用户自定义配置失效。 | 4 条评论 |
| [#23571 Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571) | 工作流整洁度问题：模型生成的临时编辑脚本分散各处，增加清理成本，污染工作区。 | 3 条评论 |
| [#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | 安全/护栏需求：当存在更安全的替代方案时，应阻止或不建议执行危险操作（如 `git reset --force`、破坏性数据库变更）。 | 3 条评论，1 👍 |

---

## 4. 重点 PR 进展
1. **[#29632 Bump npm-dependencies group (75 updates)](https://github.com/google-gemini/gemini-cli/pull/29632)**  
   P1 级核心依赖更新，包含 `@modelcontextprotocol/sdk` 从 1.23.0 升级至 1.30.1、`@octokit/rest` 从 22.0.0 升级至 22.0.1，解决上游修复问题并提升 MCP 兼容性。
2. **[#29629 Cap pending plain text height to reduce streaming flicker](https://github.com/google-gemini/gemini-cli/pull/29629)**  
   通过将 MarkdownDisplay 待渲染文本高度限制在终端尺寸内，修复了流式输出时全屏清屏/重绘导致的闪烁问题，直接回应用户反馈的终端闪烁问题 ([#29628](https://github.com/google-gemini/gemini-cli/issues/29628))。
3. **[#29536 Harden grep against command-line option注入](https://github.com/google-gemini/gemini-cli/pull/29536)**  
   CWE-88 安全修复：为 `git grep` 和系统 `grep` 均显式使用 `-e` 模式分隔符，防止恶意搜索模式引发参数注入。
4. **[#29510 Harden Windows subprocess argument quoting](https://github.com/google-gemini/gemini-cli/pull/29510)**  
   Windows 平台安全修复：为 `shell: true` 调用新增 `quoteCmdArg` 辅助函数，防止 diff/编辑器子进程调用中的命令注入风险。
5. **[#29432 Settle queued tool calls on scheduler disposal](https://github.com/google-gemini/gemini-cli/pull/29432)**  
   核心可靠性修复：调度器销毁时拒绝排队的工具批次、取消未启动的工具任务，避免出现孤立的审批请求和卡死问题。
6. **[#29505 Support rootless Podman with keep-id](https://github.com/google-gemini/gemini-cli/pull/29505)**  
   P1 级沙箱兼容性修复：在 rootless Podman 会话中正确保留主机 UID/GID，修复 rootless 容器用户的沙箱启动失败问题。
7. **[#29404 Add `gemini models list` with JSON output](https://github.com/google-gemini/gemini-cli/pull/29404)**（已关闭/已合并）  
   新功能：提供支持编程式模型发现的 CLI 子命令，不再需要在集成中硬编码模型 ID。
8. **[#29411 Resolve resume latest to most recently active session](https://github.com/google-gemini/gemini-cli/pull/29411)**（已关闭/已合并）  
   UX 修复：`--resume` 现在会选择最近活跃的会话，而非最新创建的会话，解决了用户恢复到已失效的短生命周期会话的问题。
9. **[#29626 Preserve shared references in JSON serialization](https://github.com/google-gemini/gemini-cli/pull/29626)**  
   `safeJsonStringify` 修复：由于全局 `seen` WeakSet 的存在，重复的非循环对象引用（如 OTel 指标的 `endTime`）曾被错误替换为 `[Circular]`，该问题已修复。
10. **[#29517 Linearize array reconstruction in truncateHistoryToBudget](https://github.com/google-gemini/gemini-cli/pull/29517)**  
    性能优化：将历史截断逻辑中基于 O(n²) `unshift()` 的重排序方式，替换为线性数组构建，提升长聊天会话的压缩速度。

---

## 5. 热门讨论
*本周期未提供 GitHub Discussions 相关数据。*

---

## 6. 功能需求趋势
1. **AST 感知代码工具**：多个关联 Issue（#22745、#22746、#22747）呼吁推出基于 AST 的文件读取、搜索和代码库映射能力，以减少 token 消耗、降低交互轮次、提升代码导航精度。
2. **增强子 Agent 可观测性与控制力**：用户希望通过 `/chat share` 暴露子 Agent 执行轨迹 (#22598)、Bug 报告中包含子 Agent 上下文 (#21763)，以及优化自定义技能/子 Agent 的默认调用逻辑 (#21968)。
3. **浏览器 Agent 加固**：支持配置覆盖 (#22267)、持久会话锁恢复 (#22232)、Wayland 兼容性 (#21983) 等需求，旨在让浏览器 Agent 能在各类环境中生产可用。
4. **持久化文件级任务跟踪**：用基于文件系统的 CRUD 式任务跟踪 (#18836、#21000) 替代上下文中的 `WriteToDo`，减少上下文失效问题，跨会话保留状态。
5. **沙箱与安全护栏**：对零依赖操作系统级沙箱 (#19873)、破坏性操作护栏 (#22672)、rootless Podman 支持 (#29505) 的需求，用于保障自主执行的安全性。
6. **Agent 自我认知能力**：要求 CLI Agent 能准确理解自身的参数、快捷键和执行行为 (#21432)，成为可自我支撑的工具。

---

## 7. 开发者痛点
1. **Agent 可靠性回退**：频繁的卡死问题（通用 Agent #21409、Vite 应用创建 #22465）和误报成功问题 (#22323) 削弱了用户对自主 Agent 工作流的信任，迫使用户禁用子 Agent 作为临时方案。
2. **子 Agent 默认行为不佳**：除非显式提示，否则模型不会调用已安装的技能和子 Agent (#21968)，降低了自定义 Agent 生态的价值。
3. **终端 UX 体验摩擦**：流式输出闪烁 (#29628、#21924)、选择列表输入不稳定 (#29502)、会话恢复排序异常 (#29410) 等问题，给日常使用带来困扰。
4. **工作区整洁度问题**：模型生成的临时脚本分散各处 (#23571)，增加清理成本，还会污染版本控制工作区。
5. **跨平台兼容性缺口**：Wayland 下浏览器 Agent 失效 (#21983)、Windows 子进程参数引用漏洞 (#29510)、rootless Podman 不兼容 (#29505) 等问题，导致不同开发者环境的体验割裂。
6. **编程式访问能力有限**：缺少机器可读的模型发现能力（已由 #29404 解决）、Agent 定义不支持符号链接 (#20079)，阻碍了与 dotfiles 和自动化流水线的集成。
7. **错误报告不透明**：ripgrep 静默失败 (#29552)、Bug 报告缺少子 Agent 上下文 (#21763)、工具数超过 128 时返回 400 错误 (#24246) 等问题，导致问题排查缓慢且困难。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区摘要 | 2026-10-05
*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

---

## 1. 近7天亮点
Copilot CLI 团队在 v1.0.90–v1.0.92 版本区间内发布了9个补丁版本，核心更新包括新增 `copilot config` 子命令、对话前可通过 Ctrl+E 环境选择器切换本地/云端运行，以及 MCP 连接响应速度和首次启动时间的大幅优化。社区活动主要围绕 macOS 和 Windows 上的 MCP 可靠性痛点、BYOK（自带密钥）模型兼容性问题，以及优化导航和任务栏自定义的用户体验需求展开。

---

## 2. 版本发布
过去7天共发布9个新版本（v1.0.90 至 v1.0.92-4）：
- **v1.0.92-4**
  - 新增：`copilot config` 子命令，支持列出、读取、设置和删除配置项
  - 优化：通过子进程捆绑 CLI 提取流程提升首次启动速度；多 MCP 服务器场景下启动更快；Canvas 操作现在支持返回图片
- **v1.0.0.92-3**
  - 新增：对话前 Ctrl+E 环境选择器，可切换本地和云端运行模式
  - 修复：快速交互时键盘、粘贴和鼠标输入的有序响应问题；代理拦截目标地址时沙箱shell网络绕过提示异常
- **v1.0.0.92-2**
  - 修复：Windows 沙箱中原地重命名工具的临时文件写入问题；提示模式下 sessionEnd 钩子在 Stop 钩子执行完成后触发
- **v1.0.0.92-1**
  - 修复：Streamable HTTP 空闲过期后 MCP 远程服务器重连失败问题；新消息到达时后台代理的转向逻辑异常；上下文滚动恢复问题；隐藏自动沙箱 CA 设置提示
- **v1.0.0.92-0**
  - 修复：OAuth 重新认证后，工具定义未变更时 MCP 工具持久化失效问题
- **v1.0.0.91 / v1.0.0.91-1**
  - 新增：`copilot sandbox ca` 命令（检查/创建/信任/轮换/删除），支持 Windows 无人值守设置；`/sandbox ca install` 拆分为 `create` 和 `trust` 两个命令
  - 优化：CLI 关闭时遥测数据刷新增加有限延迟；会话时间线的忙碌状态在回合中断后会自动清除
- **v1.0.0.91-0**
  - 优化：只读可分析的shell管道支持执行证据审核；不完整管道需要显式批准
  - 修复：Windows 上 Node/npm 因 EACCES 套接字拒绝导致的沙箱网络绕过问题
- **v1.0.0.90 / v1.0.0.90-7**
  - 新增：GPT-6.1 Sol 模型选择支持；`--mcp-github-auth` 参数，可将 GitHub 授权范围限定为已批准的 MCP 来源；会话级别的只读目录批准
  - 修复：中断会话恢复后权限提示无法响应的问题

---

## 3. 热门问题
1. **[#640: Invalid session ID `read_sql_files` error](https://github.com/github/copilot-cli/issues/640)**（已关闭，24 条评论，10 👍）  
   这一长期存在的问题表现为 Copilot CLI 在读取工具时抛出无效会话ID错误，在 Gemini 3 预览版中尤为常见。社区高参与度反映了该问题对多工具工作流的广泛影响。

2. **[#4998: `.mcp-writer.binding` stale device ID breaks CLI after macOS reboot/update](https://github.com/github/copilot-cli/issues/4998)**（开放中，8 条评论，8 👍）  
   macOS 上的严重回归问题：重启后因文件系统绑定设备ID过期，所有会话都会失败。该问题热度快速上升，影响 macOS 1.0.90-3 版本上所有依赖 MCP 的工作流。

3. **[#5008: "Failed to read model provider attribution: Not authenticated" startup race condition](https://github.com/github/copilot-cli/issues/5008)**（已关闭，7 条评论，5 👍）  
   1.0.89 版本引入的启动错误，由属性加载与登录完成之间的竞争条件导致。近期补丁已修复，但也暴露了认证初始化的脆弱性。

4. **[#2795: `--agent` ignores `--plugin-dir` when used with `-p` prompt](https://github.com/github/copilot-cli/issues/2795)**（已关闭，6 条评论，17 👍）  
   高投票Bug：在非交互式提示模式下，插件目录中的自定义代理无法被发现。修复后打通了基于代理的自动化 CI 工作流。

5. **[#4012: BYOK reasoning effort not supported for `glm-5.2:cloud`](https://github.com/github/copilot-cli/issues/4012)**（已关闭，4 条评论，23 👍）  
   投票最高的 BYOK 兼容性问题：即使自定义模型原生支持，`--reasoning-effort max` 仍会失败。反映了用户对 BYOK 功能与官方模型看齐的需求日益增长。

6. **[#4839: Option to disable taskbar icon](https://github.com/github/copilot-cli/issues/4839)**（已关闭，5 条评论，4 👍）  
   热门用户体验需求：同时运行多个会话的用户希望隐藏任务栏图标以减少杂乱。已通过新增的 `copilot config` 设置系统解决。

7. **[#4832: Workspace `.mcp.json` never loads in 1.0.83](https://github.com/github/copilot-cli/issues/4832)**（已关闭，4 条评论，0 👍）  
   严重回归问题：项目本地的 MCP 服务器被完全忽略，导致按仓库配置的 MCP 工作流失效。近期补丁版本已修复。

8. **[#4971: Hourly "Authorization error. Your credentials may be expired"](https://github.com/github/copilot-cli/issues/4971)**（开放中，3 条评论，0 👍）  
   持续存在的凭证过期Bug：重新登录也无法解决每小时一次的认证失败问题。影响长时间运行的后台会话和开发者工作效率。

9. **[#4840: BYOK with Deepseek broken by `tools[4].type: custom` deserialization error](https://github.com/github/copilot-cli/issues/4840)**（开放中，3 条评论，1 👍）  
   与非 OpenAI 提供商的 BYOK 集成失败：这些提供商返回 `custom` 工具类型而非 `function`。暴露了第三方模型支持的 schema 僵化问题。

10. **[#5015: Keyboard-accessible pager mode for chat history with Vim/less navigation](https://github.com/github/copilot-cli/issues/5015)**（开放中，2 条评论，3 👍）  
    键盘优先用户高度期待的用户体验功能：提供比整页 Page Up/Down 更精细的滚动控制，尤其适用于长差异对比和工具输出场景。

---

## 4. 重要PR进展
过去7天仅3个PR有更新：
1. **[#5046: Initial commit](https://github.com/github/copilot-cli/pull/5046)**（开放中）  
   处于早期草稿阶段的新PR，暂无描述或详细信息。

2. **[#5036: Update default model version in README](https://github.com/github/copilot-cli/pull/5036)**（开放中）  
   文档更新，将 README 内容与当前 Copilot CLI 默认模型版本对齐，减少因文档过时导致的用户困惑。

3. **[#5000: Publish npm tarballs from published Copilot CLI releases](https://github.com/github/copilot-cli/pull/5000)**（开放中）  
   CI/CD 优化：通过 OIDC 可信发布（无需静态 npm 令牌）从 GitHub 发布自动触发 npm 发布，并提供基于标签的手动恢复路径。提升了 npm 用户的供应链安全性和发布自动化程度。

---

## 5. 热门讨论
无讨论数据，本部分省略。

---

## 6. 功能需求趋势
1. **增强导航与键盘用户体验**：多次提出 Vim/less 风格的分页导航、`/agent` 和 `/model` 自动补全，以及长输出场景下的滚动控制优化（[#5015](https://github.com/github/copilot-cli/issues/5015)、[#1634](https://github.com/github/copilot-cli/issues/1634)）。
2. **精细化UI自定义**：用户需求包括开关任务栏图标、控制待处理聊天行等视觉元素（[#4839](https://github.com/github/copilot-cli/issues/4839)）。
3. **BYOK 功能对等**：用户希望推理强度参数、自定义工具类型、第三方模型兼容性等功能与官方模型完全一致（[#4012](https://github.com/github/copilot-cli/issues/4012)、[#4840](https://github.com/github/copilot-cli/issues/4840)）。
4. **MCP 配置灵活性**：需求包括可配置的慢连接警告阈值，以及更健壮的工作区级 MCP 配置加载（[#2907](https://github.com/github/copilot-cli/issues/2907)、[#4832](https://github.com/github/copilot-cli/issues/4832)）。
5. **优化权限与配置控制**：用户需求包括持久化目录白名单和集中式配置系统（已在 v1.0.92-4 中通过 `copilot config` 实现）（[#4482](https://github.com/github/copilot-cli/issues/4482)）。
6. **ACP API 扩展**：需求包括通过 ACP 接口暴露模型列表和选择功能，以支持无头/SDK 客户端（[#4880](https://github.com/github/copilot-cli/issues/4880)）。

---

## 7. 开发者痛点
1. **MCP 可靠性与生命周期Bug**：macOS 上设备ID过期导致重启后会话失效（[#4998](https://github.com/github/copilot-cli/issues/4998)）；Windows 上通过封装程序启动的 MCP 工作进程在退出后仍存活（[#4972](https://github.com/github/copilot-cli/issues/4972)）；Cloudflare MCP 服务器在 OAuth 后因订阅限制错误失败（[#4991](https://github.com/github/copilot-cli/issues/4991)）。
2. **认证不稳定**：每小时一次的凭证过期问题，重新登录也无法解决（[#4971](https://github.com/github/copilot-cli/issues/4971)）；启动竞争条件导致虚假“未认证”错误（[#5008](https://github.com/github/copilot-cli/issues/5008)）；企业代理后会话恢复失败（[#2978](https://github.com/github/copilot-cli/issues/2978)）。
3. **BYOK 兼容性缺口**：第三方模型提供商因严格的工具 schema 验证而失败（[#4840](https://github.com/github/copilot-cli/issues/4840)）；缺少对推理强度参数等常用功能的支持（[#4012](https://github.com/github/copilot-cli/issues/4012)）。
4. **会话与代理状态不一致**：工具读取时出现无效会话ID错误（[#640](https://github.com/github/copilot-cli/issues/640)）；后台代理在完成后仍显示为运行中（[#3412](https://github.com/github/copilot-cli/issues/3412)）；GitHub Mobile 会话在 CLI 响应后仍保持“排队中”状态（[#4569](https://github.com/github/copilot-cli/issues/4569)）。
5. **输入与渲染故障**：Windows 上从时间线单行复制粘贴失败（[#3496](https://github.com/github/copilot-cli/issues/3496)）；复制粘贴后中日韩字符乱码（[#3369](https://github.com/github/copilot-cli/issues/3369)）；重复的待处理聊天行占满屏幕（[#4532](https://github.com/github/copilot-cli/issues/4532)）。
6. **权限系统脆弱**：持久化的允许目录配置在启动时不生效（[#4482](https://github.com/github/copilot-cli/issues/4482)）；会话恢复后权限提示不一致。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报 — 2026年10月5日当周
---

## 1. 近7天亮点
本周发布了两个聚焦平台稳定性的补丁版本（v1.18.33 / v1.18.34），修复了macOS兼容性问题、优化了模型提供方超时处理，并修正了会话身份标头。社区优先推进了队列管理、上下文压缩以及TUI与桌面端的UI功能对齐，而OpenCode Go套餐的计费/订阅问题则成为用户反复反馈的痛点。

---

## 2. 版本发布
### v1.18.34
- **核心修复**：
  - 在模型请求中携带带命名空间的会话及父会话身份标头
  - 对本地编译的macOS二进制文件重新签名，确保在macOS 27及以上版本上可稳定运行（@ryangamerdev）
  - 使用开发者ID对macOS CLI发布版本的二进制文件进行签名
- **贡献者**：3位社区贡献者
- **链接**：https://github.com/anomalyco/opencode/releases/tag/v1.18.34

### v1.18.33
- **核心修复**：
  - Cloudflare AI Gateway模型现在会遵循提供方的响应超时和流式超时设置（@danlapid）
  - 当启动器立即退出时，现在会上报MCP浏览器启动失败的问题
  - 调试配置输出现在会脱敏凭证和敏感标头
  - 部分修复了Gemini的思考行为问题
- **链接**：https://github.com/anomalyco/opencode/releases/tag/v1.18.33

---

## 3. 热门问题
| 问题 | 状态 | 重要性 | 社区反响
|---|---|---|---|
| [#20995 — Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API](https://github.com/anomalyco/opencode/issues/20995) | 已关闭 | 解决了Ollama托管的Gemma 4的严重不兼容问题——此前流式`tool_calls`无法被识别，导致热门本地模型用户的智能体工作流中断。 | 38条评论，48 👍 —— 自托管AI社区参与度极高。 |
| [#4821 — Add ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821) | 已关闭 | 交付了用户长期呼吁的功能：用户可在需要纠正智能体行为时取消已排队的消息，提升了智能体可控性并减少了算力浪费。 | 30条评论，105 👍 —— 本周期获赞最多的功能需求之一。 |
| [#32706 — TUI crash with "An error occurred in Effect.tryPromise" on 1.17.0+](https://github.com/anomalyco/opencode/issues/32706) | 处理中 | 1.17.0及以上版本在Windows上TUI无法启动，导致部分用户无法使用核心功能。 | 12条评论，3 👍 —— 正在积极调试中。 |
| [#14187 — Add markdown preview toggle in file viewer sidebar](https://github.com/anomalyco/opencode/issues/14187) | 已关闭 | 新增了切换开关，可将.md/.mdx文件渲染为格式化预览，而非显示带语法高亮的原始文本。 | 10条评论，29 👍 —— 深受文档工作流用户欢迎的体验优化。 |
| [#42170 — Desktop fails to load sessions: no such column: project_id](https://github.com/anomalyco/opencode/issues/42170) | 处理中 | 桌面端v1.18.17启动时崩溃，原因是workspace表的schema迁移出现回归，导致会话完全无法访问。 | 9条评论，1 👍 —— 高严重性的数据完整性问题。 |
| [#32366 — UI stuck on 'thinking' indefinitely after stream error](https://github.com/anomalyco/opencode/issues/32366) | 处理中 | 流式错误（如API断开连接）会导致桌面端UI卡在"思考中"状态且无法恢复，用户必须重启应用并丢失会话状态。 | 8条评论，3 👍 —— 影响所有桌面用户的可靠性痛点。 |
| [#52269 — Intermittent OpenAI Service Unavailable: upstream connection failure](https://github.com/anomalyco/opencode/issues/52269) | 处理中 | OpenAI提供方偶发上游连接失败，导致重试及跨模型、跨会话的不一致行为。 | 7条评论 —— 正在积极排查网络/提供方层面的问题。 |
| [#50650 — desktop: custom provider save always throws "unavailable on this server"](https://github.com/anomalyco/opencode/issues/50650) | 处理中 | 由于设置保存处理函数存在无条件报错，桌面端无法保存自定义OpenAI兼容提供方，导致自托管和第三方模型支持失效。 | 6条评论，3 👍 —— 阻碍了桌面端自定义提供方的工作流。 |
| [#43250 — [2.0] keep.tokens is not honoured: compaction walk-back is unbounded](https://github.com/anomalyco/opencode/issues/43250) | 处理中 | 上下文压缩忽略了`keep.tokens`设置，智能体会话通常会占用配置token上限的5–15倍，推高了成本和延迟。 | 4条评论 —— 对成本控制和上下文窗口管理至关重要。 |
| [#51346 — Bug: Context compaction causes infinite resend loop when attached file exceeds limit](https://github.com/anomalyco/opencode/issues/51346) | 处理中 | 当附件超出模型上下文限制时，会触发无限压缩-重发循环，而非返回明确错误。 | 2条评论 —— 会导致程序挂起和无效API调用。 |

---

## 4. 关键PR进展
| PR | 状态 | 描述 |
|---|---|---|
| [#53080 — fix(core): preserve OpenAI OAuth model context limits](https://github.com/anomalyco/opencode/pull/53080) | 处理中 | 保留通过ChatGPT OAuth连接时的模型特定上下文和输入限制，移除了统一的400K/272K覆盖设置。 |
| [#53247 — feat(app): show running subagents and shells in session header](https://github.com/anomalyco/opencode/pull/53247) | 处理中 | 将运行中的子智能体和后台shell移至会话头部，实现一键访问，此前需要在会话摘要中点击两次。 |
| [#53254 — fix(opencode): show reset time on free usage limit](https://github.com/anomalyco/opencode/pull/53254) | 处理中 | 为免费版429错误添加重置时间显示，与现有Go订阅限制的行为保持一致，使用`retry-after`标头实现。 |
| [#53253 — fix(edit): match LF regions of mixed-ending files](https://github.com/anomalyco/opencode/pull/53253) | 处理中 | 修复了混合LF/CRLF换行符文件的换行检测问题，避免编辑时错误重写仅含LF的区域。 |
| [#53076 — fix(app): match TUI inbox, steer, queue, and revert behavior](https://github.com/anomalyco/opencode/pull/53076) | 处理中 | 对齐GUI与TUI在收件箱、转向、队列、撤销/重做以及压缩方面的行为，TUI保持不变。 |
| [#47417 — fix(app): Path key normalization](https://github.com/anomalyco/opencode/pull/47417) | 已合并 | 标准化项目路径键，使同一路径下的项目被识别为同一项目，修复了Windows上跨驱动器路径不匹配的问题。 |
| [#52568 — fix(ai): place Anthropic system updates before the next assistant turn](https://github.com/anomalyco/opencode/pull/52568) | 处理中 | 修复了对话中途Anthropic系统消息的放置位置，以符合Anthropic API要求，避免在会话中途更新系统提示词时出现API错误。 |
| [#53238 — fix(core): preserve active sessions during idle cleanup](https://github.com/anomalyco/opencode/pull/53238) | 处理中 | 防止正在运行的活跃会话因闲置超时而被清理，修复了等待用户输入的长时间运行智能体任务被意外取消的问题。 |
| [#53232 — refactor(ai): untangle stream event handlers and inner protocol helpers](https://github.com/anomalyco/opencode/pull/53232) | 已合并 | 重构了所有LLM/媒体协议的流式事件处理程序，减少代码重复并提升可维护性。 |
| [#47353 — feat(opencode): support managed OTLP exporter settings](https://github.com/anomalyco/opencode/pull/47353) | 已合并 | 为端点托管的OpenCode部署新增了仅托管版的OTLP遥测导出器设置，包括端点配置功能。 |

---

## 5. 热门讨论
*省略——数据集中未提供讨论内容。*

---

## 6. 功能需求趋势
1. **智能体工作流控制**：如#4821和#53159所示，用户需求集中在更完善的消息队列管理（取消排队、回退）以及对智能体执行的细粒度控制。
2. **UI/UX对齐与自定义**：用户需求包括Markdown预览（#14187）、选择性复制对话记录（#22871）以及可配置的消息摘要退出选项（#6228），以便根据自身工作流定制界面。
3. **自定义提供方灵活性**：包括从/models端点自动检测上下文限制（#53235）、修复自定义提供方保存问题（#50650），以支持自托管和第三方模型。
4. **透明度与可见性**：优化使用限制的可见性，显示免费版额度重置时间（#53252），以及展示运行中的子智能体/shell状态（#53247）。
5. **上下文与成本控制**：提供可配置的上下文窗口管理（#43250）和摘要生成退出选项（#6228），以减少token用量和成本。

---

## 7. 开发者痛点
1. **计费与订阅不稳定**：多份关于OpenCode Go套餐重复扣费、订阅丢失和403错误的反馈（#52595、#52592、#52596、#52605、#52589）表明，支付和账户系统存在严重障碍。
2. **桌面应用可靠性**：迁移问题导致的频繁崩溃和状态丢失（#42170）、流式错误导致的UI冻结（#32366）以及自定义提供方支持失效（#50650），都降低了桌面端使用体验。
3. **上下文压缩缺陷**：无限制的token保留（#43250）和无限重发循环（#51346）会导致意外成本，并在大上下文场景下破坏工作流。
4. **TUI启动问题与UI不一致**：TUI与GUI的行为差异（#53076）以及TUI特有的崩溃问题（#32706、#50566），给跨平台用户带来困惑。
5. **提供方兼容性问题**：与Ollama/Gemma 4（#20995）、Anthropic会话中途系统更新（#52568）、MCP SSE传输（#43311）以及Cloudflare AI Gateway超时（#v1.18.33）的集成，需要持续进行兼容性修复。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区摘要 — 2026年10月5日
*来源：[github.com/earendil-works/pi](https://github.com/earendil-works/pi)*

---

## 1. 过去7天亮点
Pi 在7天内发布了6个版本，更新至 v1.0.2，带来了默认全屏 TUI、Nix flake 支持、按思考层级采样控制，以及一系列 codemode/MCP 质量修复。社区讨论最活跃的话题集中在 TUI 性能退化、供应商兼容性缺口，以及面向多智能体和持久化任务工作流的新生态扩展。

---

## 2. 版本发布
| 版本 | 亮点 |
|---------|------------|
| **v1.0.2** | **按思考层级采样** — `models.json` 中的 `samplingParamsByThinkingLevel` 可为 OpenAI 兼容 API 按思考层级设置 `temperature`/`top_p`。[文档](https://github.com/earendil-works/pi/blob/v1.0.2) |
| **v1.0.1** | **Nix flake** — 执行 `nix run github:earendil-works/pi/stable` 即可运行最新版本；使用 `nix profile add` 进行安装。[文档](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi) |
| **v1.0.0** | **默认全屏** — TUI 默认全屏运行；设置 `tuiMode: "regular"` 可保留滚动回溯功能。[文档](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display) |
| **v0.99.2** | 默认暴露 `codemode` 的 MCP 服务器不再打乱 `codemode` 描述，也不会阻塞首次提示；工具可通过 `searchTools()` 发现。 |
| **v0.99.1** | 支持 OpenAI、Azure 和 OpenAI Codex 上的 GPT-6.1 Sol（Codex 新默认模型）。[文档](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model) |
| **v0.99.0** | **Codemode + MCP** — 可连接 MCP 服务器并运行并行调用工具的 JavaScript。[MCP 文档](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md) |

---

## 3. 热门问题（按影响与参与度排名前10）
1. **#2870 — [已关闭] 遵循 XDG 基础目录规范**（24条评论，63 👍）
   长期存在的 Linux 用户体验问题：Pi 之前会在 `$HOME` 目录下生成大量文件。经过社区6个月的反馈后已解决。[→](https://github.com/earendil-works/pi/issues/2870)

2. **#6665 — [开放中] 流式输出时 TUI 占满一个完整CPU核心**（14条评论，6 👍）
   严重性能退化：未缓存的 `Intl.Segmenter` + 逐块 Markdown 重建导致长会话中 CPU 占用率达100%。可在核心版本（`pi -ne`）中复现。当前最活跃的 Bug。[→](https://github.com/earendil-works/pi/issues/6665)

3. **#8643 — [开放中] Bedrock：OpenAI 模型拒绝 `toolResult.content` 中的图片**（10条评论）
   供应商功能差距：Bedrock 上的 OpenAI 模型不会提取工具结果中的图片（`openai-completions` 支持该功能）。修复方案及测试已在 fork 仓库中就绪。[→](https://github.com/earendil-works/pi/issues/8643)

4. **#10314 — [开放中] 重新考虑全屏模式下 Home/End 键的默认行为**（9条评论，5 👍）
   v1.0.0 全屏版本将 Home/End 键从行编辑行为改为文档滚动行为。社区对默认行为的看法存在分歧。[→](https://github.com/earendil-works/pi/issues/10314)

5. **#8301 — [开放中] 无法在队列中穿插执行压缩与提示请求**（7条评论）
   工作流 Bug：`/compact` 会取消会话，而不是在待处理提示之后排队执行。影响批量工作流。[→](https://github.com/earendil-works/pi/issues/8301)

6. **#9134 — [开放中] Anthropic 适配器会移除工具 schema 顶层的 `anyOf`**（6条评论）
   隐蔽的正确性 Bug：带有顶层 `anyOf` 的自定义工具，其约束会在发送到 Anthropic 模型前被移除，导致无效的工具调用。[→](https://github.com/earendil-works/pi/issues/9134)

7. **#10330 — [开放中] CLI 模式下自动压缩不启动**（6条评论）
   模式功能差距：`pi --mode json` 永远不会运行自动压缩，尽管 TUI 在 #6994 修复后已正常工作。[→](https://github.com/earendil-works/pi/issues/10330)

8. **#9335 — [已关闭] 支持 `configuration_update` 以在保留缓存的情况下更改推理设置**（5条评论，7 👍）
   GPT-6 优化请求：希望通过 `configuration_update` 调整推理强度且不破坏提示缓存。目前暂不处理，已关闭。[→](https://github.com/earendil-works/pi/issues/9335)

9. **#10287 — [开放中] 网络错误后 `getContextUsage()` 估算值偏高**（4条评论）
   可靠性 Bug：可重试的 WebSocket/fetch 失败会导致上报的上下文使用量飙升（例如从42k涨至330k token）。[→](https://github.com/earendil-works/pi/issues/10287)

10. **#10291 — [已关闭] MCP：将认证信息存储在密钥链中，而非 `mcp-auth.json`**（3条评论）
    安全改进请求：将 MCP 令牌从明文磁盘文件转移到系统密钥链。暂不处理，已关闭。[→](https://github.com/earendil-works/pi/issues/10291)

---

## 4. 关键 PR 进展（前10）
1. **#9776 — 按思考层级设置采样参数**（已合并 → v1.0.2）
   实现了 `samplingParamsByThinkingLevel`，可为思考/非思考模式设置不同的采样参数。[→](https://github.com/earendil-works/pi/pull/9776)

2. **#9137 — 添加 Nix flake**（已合并 → v1.0.1）
   新增 Nix flake 支持，可通过 `nix run` 一键运行/安装。[→](https://github.com/earendil-works/pi/pull/9137)

3. **#10440 — 修复：每个进程仅解析一次 QuickJS wasm 路径**（已合并）
   修复了 #10439：执行 `pnpm global update` 后 codemode 失效的问题，原因是 wasm 路径在每次调用时都会重新解析。[→](https://github.com/earendil-works/pi/pull/10440)

4. **#10383 — 性能优化（TUI）：对比原始行的指针相等性**（已合并）
   全屏 TUI 优化：未发生变化的行保留引用相等性，以减少重渲染。[→](https://github.com/earendil-works/pi/pull/10383)

5. **#8734 — OpenAI Responses 供应商的顶层指令支持**（开放中）
   新增 `systemPromptFormat` 选项，可将系统提示移至顶层 `instructions`（避免重复，提升缓存命中率）。关闭了 #8388。[→](https://github.com/earendil-works/pi/pull/8734)

6. **#9714 — 支持 Azure Foundry Chat Completions 部署**（开放中）
   将 Azure 供应商的支持范围从 Responses API 扩展到 Chat Completions 部署（例如 DeepSeek V4 Pro）。关闭了 #9645。[→](https://github.com/earendil-works/pi/pull/9714)

7. **#10382 — 原生 llama.cpp 分类器模型支持**（开放中）
   通过 `/v1/systemone` 探测 llama.cpp 模型；决策模型（Julia-1、Laya 等）使用原生分类能力，而非回退到聊天模式。[→](https://github.com/earendil-works/pi/pull/10382)

8. **#10410 — 暴露持久化思考、WebSocket、会话选项**（开放中）
   向持久化 `ConversationStreamOptions` 中添加了 `thinkingBudgets`、`websocketConnectTimeoutMs` 和 `sessionId`。[→](https://github.com/earendil-works/pi/pull/10410)

9. **#10397 — 对重复使用的调用对去重工具调用 ID**（已合并）
   修复了当供应商重新发出参数修改后的相同 `(call_id, id)` 时，出现重复工具调用块的问题。[→](https://github.com/earendil-works/pi/pull/10397)

10. **#10328 — 移除 Bedrock 上不匹配的思考块**（已合并）
    关闭了 #10324：使用 Bedrock `thinking-binding-controls-2026-08-01` 测试版功能移除过期思考块，而非返回400错误。[→](https://github.com/earendil-works/pi/pull/10328)

---

## 5. 热门讨论
### 创意想法
- **#10128 — 能否添加禁用分享功能的选项？**（2条评论，3 👍）
  重新被提起的请求：希望提供分享功能的关闭开关，契合 Pi 的极简设计理念。[→](https://github.com/earendil-works/pi/discussions/10128)
- **#10126 — 让 GitHub 版本发布不可变？**（2 👍）
  供应链安全提议：固定发布产物，防止发布后被篡改。[→](https://github.com/earendil-works/pi/discussions/10126)
- **#10151 — 将工作记忆作为提示分段（任务 + 过往会话）**（1条评论，1 👍）
  提议将技能式懒加载扩展到任务状态和跨会话记忆。[→](https://github.com/earendil-works/pi/discussions/10151)
- **#5936 — 为什么不使用原生终端光标？**（2条评论，2 👍）
  关于 Pi 自定义反相块光标与终端原生光标的用户体验讨论。[→](https://github.com/earendil-works/pi/discussions/5936)

### 问答
- **#10446 — 为什么更新这么频繁？**（1 👍）
  社区对发布节奏突然加快（每天多次发布）的疑问。[→](https://github.com/earendil-works/pi/discussions/10446)
- **#10230 — Codemode 基准测试 / token 节省情况？**（2条评论，1 👍）
   将 codemode "仅代码"模式与英伟达 SoL-Pi "动作融合"研究进行对比的讨论。[→](https://github.com/earendil-works/pi/discussions/10230)

### 展示与分享
- **#10069 — agent-chat：独立 Pi 智能体的 P2P 消息传递**（2条评论，1 👍）
  无需编排器即可实现跨会话智能体协作（共享 Docker/端口/数据库）的扩展。[→](https://github.com/earendil-works/pi/discussions/10069)
- **#10447 — pi-durabletask-mcp：带引导与恢复功能的委派任务**（1 👍）
  扩展了 `pi-delegate-mcp`，支持基于 SQLite 的持久化任务以及 `steer`/`follow_up` 功能。[→](https://github.com/earendil-works/pi/discussions/10447)
- **#10432 — Threshold：以项目为根的多会话连续性测试框架**（1 👍）
  本地测试框架，通过检查点在独立的 Pi 工作会话间保留项目状态。[→](https://github.com/earendil-works/pi/discussions/10432)
- **#10331 — 为 Pi 微调的 Qwen 3.8 26B**（1 👍）
  社区分享的开源模型，专门为 Pi 智能体工作流做了微调。[→](https://github.com/earendil-works/pi/discussions/10331)

---

## 6. 功能请求趋势
1. **TUI 自定义与默认控制** — v1.0.0 全屏版本发布后，Home/End 键行为、原生光标、可主题化选择、分享功能开关、输出内边距一致性等都是大家最关心的问题。
2. **跨模式功能对等** — CLI/JSON/RPC 模式在自动压缩、显示转换和队列管理方面落后于 TUI。
3. **供应商与模型兼容性** — 扩展对 Azure（Foundry/Chat Completions）、Bedrock（图片处理、思考块）以及开源模型（llama.cpp 分类器、Qwen 微调版本）的支持。
4. **安全与供应链加固** — 基于密钥链的 MCP 认证、不可变的 GitHub 版本发布、XDG 规范合规。
5. **持久化与多智能体工作流** — 对跨会话记忆、委派任务、恢复功能和 P2P 智能体协作的需求不断增长。

---

## 7. 开发者痛点
1. **TUI 性能退化** — 全屏模式引入了 CPU 密集型流式输出（占满一个核心）和视觉故障（Windows 上视口跳转），是目前最活跃的 Bug 领域。
2. **供应商间隐蔽的 schema/行为差异** — 工具 schema 被静默移除（Anthropic 的 `anyOf`）、图片处理缺口（Bedrock）、`maxTokens` 丢失（Codex），这些问题导致难以调试的失败。
3. **Codemode 脆弱性** — 包更新后路径解析失效，且 MCP 版本协商对不符合规范的服务器兼容性差。
4. **压缩功能不一致** — 无法正确排队、CLI 模式下不运行、网络错误后上下文使用量上报不可靠。
5. **扩展 API 缺口** — 缺少结构化日志、无法通过 `ToolExecutionApi` 执行嵌套工具、RPC 消费者缺少仅显示用的文本转换功能。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态摘要 | 2026-10-05
*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

---

## 1. 近7天亮点
本周Qwen Code v0.24.7稳定版正式发布，同时保持每日 nightly 构建更新，核心修复了代码模式（Code Mode）的文本对齐问题与权限处理逻辑。社区重点推进了托管智能体运行时的稳定性优化，解决了死锁、CI 偶发失败、会话生命周期相关缺陷，同时也在持续打磨 Kubernetes 运行时、后台 Shell/监控支持等实验性功能。

---

## 2. 版本发布
- **Qwen Code v0.24.7（稳定版）**  
  无破坏性变更。核心特性：在托管智能体模式下，绑定工作区的会话无需执行即可准入。  
  [发布链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7)

- **v0.24.7 nightly 构建（2026-09-29 至 2026-10-04）**  
  所有 nightly 构建均包含两项重复修复：
  1. `fix(core)`：结合惰性工具发现机制对齐 Code Mode 文本（[PR #12990](https://github.com/QwenLM/qwen-code/pull/12990)）
  2. `fix(permissions)`：正确遵循已批准的权限状态
  最新 nightly 版本：[v0.24.7-nightly.20261004.9915c7ff8f](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261004.9915c7ff8f)

- **SDK TypeScript v0.1.17**  
  捆绑了 CLI v0.24.7，与 SDK 基于同一源分支构建。  
  [发布链接](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.17)

- **Qwen Code Desktop v0.24.7**  
  新增会话创建失败诊断信息留存能力，以及 Java SDK 托管运行时相关补充功能。  
  [发布链接](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.7)

---

## 3. 热门问题
（按影响范围与社区参与度排名前10）
1. **#13333 [P1 缺陷] 普通硬件上≥8个并发轮次（Turn）出现停滞（锁护送）**  
   托管智能体存储路径中的严重并发缺陷，会导致会话数较高时吞吐量骤降。已通过新增的端到端测试框架复现问题。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13333)

2. **#13413 [P1 缺陷] 会话存储短暂中断会导致运行中轮次永久卡死**  
   数据库临时中断会造成会话日志写入永久失败，将瞬时故障转化为永久挂起，对托管部署场景影响严重。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13413)

3. **#13395 [特性] Kubernetes 工具运行时进度追踪**  
   追踪提案 #12389 下基于 Kubernetes 的工具运行时实现，包括可移植性与验收准入标准。6条评论显示跨团队正在积极协调推进。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13395)

4. **#9693 [已关闭缺陷] Windows 端 MCP 启动时报 -32000 连接错误**  
   已修复 Windows 桌面端即使禁用 MCP 仍会报 MCP 连接错误的问题，该问题曾影响 Windows 集成可靠性。共9条评论——为本周评论数最高的问题。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/9693)

5. **#13415 [缺陷] 本地 Qwen3.x 模型被默认拥有1M上下文窗口**  
   对于上下文窗口更小（如262k）的本地部署场景，自动压缩机制永远不会触发，导致上下文触达上限时出现硬故障。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13415)

6. **#12878 [缺陷] Ollama 拒绝零参数工具（缺少 parameters 字段）**  
   由于 Qwen Code 省略了 `properties` 字段，Ollama 会对无参数工具返回400错误。1个点赞，4条来自本地部署用户的反馈评论。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/12878)

7. **#13255 [缺陷] HostedWorkspaceToolTurnIT 中 CI 偶发失败**  
   Java SDK CI 流水线（MySQL 8.4 / Java 21）中的测试不稳定，会导致不相关 PR 出现误报构建失败，拖慢审核速度。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13255)

8. **#13392 [缺陷] Desktop/ACP 0.24.7 中 PreToolUse 的 `updatedInput` 被忽略**  
   该回归问题破坏了基于钩子的工具参数修改能力，阻塞了依赖传输层参数注入的 MCP 集成。是 #12922 的后续问题。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13392)

9. **#13280 [缺陷] 记忆发现机制会从父目录加载 QWEN.md/AGENTS.md**  
   配置文件会从 Git 根目录的上一级加载，这一异常行为破坏了 monorepo 场景下的项目隔离性。  
   [问题链接](https://github.com/QwenLM/qwen-code/issues/13280)

10. **#13387 [缺陷] 自定义命令会将 `@{...}` 文件内容误判为模板语法**  
    被引用文件中的字面模板语法会被二次求值，导致自定义命令工作流中出现意外的变量替换。  
    [问题链接](https://github.com/QwenLM/qwen-code/issues/13387)

---

## 4. 重点 PR 进展
（本周更新的影响力最高的10个 PR）
1. **#13289 feat(runtime): 实验性 Kubernetes CSI 运行时 + 持久化 Worker 确认**  
   将 Kubernetes 运行时从一次性临时会话扩展为 CSI 支持的持久化工作区，同时保留 Pod 身份持久化与授权状态。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13289)

2. **#13265 feat(managed-agent): H3 后台 Shell 与监控运行时**  
   为托管智能体路径实现后台 Shell 执行与监控能力，配套双语设计文档已先行发布。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13265)

3. **#13361 fix(managed-agent): 强化并诊断托管冷加载拒绝门控**  
   通过新增埋点与加固托管会话冷加载拒绝逻辑，解决 #13255 中 CI 偶发失败的问题。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13361)

4. **#13299 fix(core): 在 models.dev 目录中支持带点号和短横线的模型 ID**  
   修复目录键值逻辑，兼容不同服务商的两种命名规范（如 `glm-4-5v` / `glm-4.5v`），解决模型查找失败问题。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13299)

5. **#13400 feat(managed-agent): 有界审批输入预览**  
   为原生文件与 Shell 审批请求新增8192字节的有限预览能力，截断标识会通过公共 API 与 WebShell API 对外暴露。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13400)

6. **#13179 fix(managed-agent): 强化托管面板故障生命周期 + Worker 路径 containment**  
   包含三项鲁棒性修复：托管运行时 Worker 的路径穿越防护、优化后的故障生命周期处理等。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13179)

7. **#13219 fix(managed-agent): 用终止状态约束重试循环**  
   彻底消除托管智能体技术栈中的无限重试循环，新增重试预算与永久故障的终止状态处理机制。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13219)

8. **#13250 fix(qqbot)!: 在线程作用域下恢复按组会话隔离**  
   QQ 机器人频道的破坏性修复：移除强制单会话覆盖逻辑，当 `groupAllPolicy` 设置为 `keyword` 或 `all` 时，恢复按组隔离能力。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13250)

9. **#13276 fix(serve): 为冷加载409错误中的托管恢复拒绝分支命名**  
   将22个拒绝位点的通用 `hosted_turn_recovery_required` 错误码替换为细分标签，简化 CI 偶发失败的调试流程。  
   [PR 链接](https://github.com/QwenLM/qwen-code/pull/13276)

10. **#13342 fix(web-shell): 托管会话 UI 正确性修复**  
    修复托管会话中的10个 UI 问题（2个严重问题，8个鲁棒性问题），包括错误横幅残留、轮次边界稳定状态异常等。  
    [PR 链接](https://github.com/QwenLM/qwen-code/pull/13342)

---

## 5. 热门讨论
源材料未提供 GitHub Discussions 相关数据——本部分省略。

---

## 6. 特性需求趋势
1. **Kubernetes 原生运行时交付**：对生产级容器化工具执行的需求强烈，目前在平台分发路线图中追踪。
2. **托管智能体功能扩展**：后台 Shell/监控、审批预览、更完善的多会话工作区处理是托管智能体路线图上的主流需求。
3. **模型目录灵活性**：用户希望支持动态推理强度档位，并更好地兼容不同服务商的变体模型 ID 命名格式。
4. **Web Shell 功能对齐**：需求集中在记忆面板优化（自动记忆浏览、多语言支持），以匹配桌面端能力。
5. **CI/CD 可靠性提升**：多条反馈要求减少测试不稳定问题，加快社区贡献 PR 的审核流转速度。

---

## 7. 开发者痛点
1. **托管智能体并发与死锁缺陷**：锁护送、间隙锁死锁、会话存储中断导致挂起等多个 P1/P2 问题，是生产环境最主要的摩擦来源。
2. **CI 不稳定**：Java SDK 集成测试（尤其是 MySQL 流水线）的偶发失败会浪费开发者时间，延迟 PR 合并。
3. **本地模型兼容性缺口**：上下文窗口检测缺失、零参数工具参数省略、硬编码假设等问题，会破坏本地/Ollama 部署的工作流。
4. **钩子系统回归**：`PreToolUse` 钩子输出被忽略的问题，破坏了依赖运行时参数修改的扩展与 MCP 集成。
5. **错误诊断不清晰**：通用的409错误码与缺失的诊断上下文，导致托管会话故障在没有深入系统知识的情况下难以调试。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*