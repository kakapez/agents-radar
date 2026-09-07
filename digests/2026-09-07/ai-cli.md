# AI CLI 工具社区周报 2026-09-07

> 生成时间: 2026-09-07 01:53 UTC | 覆盖工具: 7 个

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

# AI CLI 开发者工具生态跨工具对比报告
*数据周期：2026-09-01 至 2026-09-07*

---

## 1. 生态概览
AI CLI 工具生态正处于能力快速扩张与平台稳定性加固并行的阶段，企业和高级用户的采用推动了对生产级可靠性、治理能力以及跨工具互操作性的需求。主流厂商和开源项目在推出下一代模型支持（GPT-6 Astra、Claude Fable 5.1）的同时，也在解决上下文管理、权限系统和跨平台一致性等基础痛点。MCP（模型上下文协议，Model Context Protocol）集成已成为全生态的普遍优先级，几乎所有工具都在为自定义工具投入服务器管理、身份验证和 schema 兼容性相关的工作。开源替代方案凭借对供应商灵活性、性能优化和社区驱动可扩展性的关注，正逐步获得市场关注，以此与厂商支持的产品形成差异化。

---

## 2. 活跃度对比
| 工具 | 公开热点问题 | 更新的关键 PR | 热门讨论 | 发布状态 |
|------|---------------------|-----------------|-----------------|----------------|
| Claude Code | 10 个公开（7 个 bug、2 个功能需求、1 个工作流缺口） | 10 个已合并 | 无（未提供讨论数据） | 7 次补丁发布（v2.1.252 → v2.1.263）；默认模型更新为 Claude Fable 5.1 |
| OpenAI Codex | 10 个公开（7 个 bug、3 个功能需求） | 10 个已合并（1 个公开） | 9 个活跃（3 个创意想法、3 个问答、3 个成果展示） | 5 个稳定版（v0.153.0–v0.153.4）+ 3 个 alpha 预览版（v0.154.0） |
| Gemini CLI | 10 个公开（7 个 bug、2 个功能需求、1 个史诗级需求） | 10 个已更新（7 个合并、3 个公开） | 无（未提供讨论数据） | 1 个稳定版（v0.58.0）、1 个预览版（v0.59.0-preview.0）、3 个 nightly 构建（v0.60.0 轨道） |
| GitHub Copilot CLI | 9 个公开（8 个 bug、1 个功能需求） + 1 个已关闭 | 2 个公开 | 无（未提供讨论数据） | 7 次补丁发布（v1.0.83-0 → v1.0.84-1）；新增 GPT-6 Astra 支持 |
| OpenCode | 10 个公开（7 个 bug、3 个功能需求） | 10 个已更新（1 个合并、9 个公开） | 无（未提供讨论数据） | 4 次补丁发布（v1.18.26 → v1.18.29）；聚焦模型兼容性 |
| Pi | 6 个公开、4 个已关闭 | 10 个已更新（5 个合并、5 个公开） | 7 个活跃（2 个创意想法、2 个问答、3 个成果展示） | 2 次次版本发布（v0.85.0 → v0.85.1）；新增 GPT-6 Astra 支持 |
| Qwen Code | 9 个公开、1 个已关闭 | 10 个已更新（全部进行中） | 无（未提供讨论数据） | 1 个稳定版（v0.23.0）、2 个预览版、2 个 nightly 构建、2 次组件发布 |

*注：讨论项标注“无”表示该周期内未提供公开讨论数据，不代表社区不活跃。*

---

## 3. 共同功能方向
在 3 个及以上工具社区中出现的跨生态需求：
1. **MCP（模型上下文协议）集成成熟度**  
   *涉及工具：全部 7 款* —— 全行业普遍聚焦 MCP 服务器管理（Claude Code 组织级托管 MCP）、OAuth 身份验证可靠性（Copilot CLI、Gemini CLI）、schema 兼容转换（OpenCode Anthropic schema 清理）以及用户验证处理（OpenAI Codex）。MCP 已成为扩展 AI CLI 工具能力的事实标准。

2. **上下文与内存可配置性**  
   *涉及工具：Claude Code、OpenAI Codex、Copilot CLI、Gemini CLI、Qwen Code* —— 用户需求包括可配置的压缩阈值（Claude Code MEMORY.md、Copilot CLI 自动压缩）、防止压缩过程中的数据丢失（Claude Code 行为规则丢失、OpenAI Codex 目标重置），以及结构化的按需内存召回（Gemini CLI、Qwen Code）。

3. **成本治理与配额控制**  
   *涉及工具：Claude Code、OpenAI Codex、Pi、OpenCode* —— 反复出现的需求包括 token 消耗限制、多智能体启动上限（Claude Code）、配额感知的任务规划（OpenAI Codex）、供应商侧成本追踪（Pi）以及计费异常解决（OpenCode Go 订阅）。

4. **跨平台一致性与平台专属 bug 修复**  
   *涉及工具：全部 7 款* —— Windows 专属功能回退是最常见的跨工具痛点（OpenAI Codex 功能缺失、Copilot CLI WSL2 快捷键失效、Gemini CLI 标准输出故障、Pi shell 路径问题）。Linux 和 macOS 的专属缺口也依然存在（Claude Code TUI 复制粘贴、OpenCode 桌面端冻结）。

5. **权限系统加固**  
   *涉及工具：Claude Code、OpenCode、Qwen Code、Gemini CLI* —— 聚焦细粒度权限控制、破坏性操作的安全防护（Gemini CLI）、钩子可靠性（OpenCode `permission.ask`）以及会话续期时的一致执行（Qwen Code 技能钩子）。

---

## 4. 差异化分析
| 工具 | 核心聚焦 | 目标用户 | 技术路线 |
|------|------------|--------------|--------------------|
| **Claude Code** | 企业安全、多智能体治理、MCP 组织管理 | 企业团队、注重安全的组织 | 与 Anthropic 的 Claude 模型生态深度整合；优先保障策略执行和可审计性，而非自定义能力 |
| **OpenAI Codex** | 官方 GPT-6 Astra 落地、Vim 模式 UX、工作树管理 | OpenAI/ChatGPT Pro 订阅用户、Vim 高级用户 | 基于 Rust 的核心架构，与 OpenAI 模型 API 紧耦合；大力投入 TUI 工作流打磨和原生平台集成 |
| **Gemini CLI** | 安全加固、沙箱运行时安全、智能体正确性 | Google Cloud/Gemini 企业用户、注重安全的团队 | 基于 Node.js 的架构，配合严格的安全审查；优先保障沙箱隔离和身份合规，而非功能迭代速度 |
| **GitHub Copilot CLI** | 企业策略执行、沙箱灵活性、自定义智能体模型降级方案 | GitHub 企业客户、CI/CD 流水线用户 | 与 GitHub 生态深度整合；聚焦企业管理员控制能力和 Copilot 平台的无缝一致性 |
| **OpenCode** | 多供应商灵活性、插件可扩展性、桌面端性能优化 | 开源爱好者、使用多服务商的高级用户 | 基于 Electron 的桌面应用，采用社区驱动开发模式；通过广泛的供应商支持和插件 UI 可扩展性实现差异化 |
| **Pi** | 供应商弹性、跨传输协议降级、TUI 打磨 | 自托管用户、多服务商折腾玩家 | 轻量级编码智能体架构；聚焦供应商互操作性和服务中断时的优雅降级 |
| **Qwen Code** | OpenTUI 渲染迁移、多智能体网格特性、Web Shell 体验 | 阿里巴巴/通义千问生态用户、中国市场企业团队 | 全栈（CLI + 守护进程 + Web Shell）架构；大力投入渲染性能和多智能体协作功能 |

---

## 5. 社区活跃度与成熟度
### 社区活跃度最高
- **OpenAI Codex**：讨论量最大（9 个活跃线程，包括获 118 赞的回退功能需求），问题互动度高（Windows 连接 bug 有 63 条评论）。
- **Pi**：开源社区活跃，有 7 个讨论线程，一个关于 Codex 可靠性的问题有 76 条评论，还有社区贡献的供应商支持和扩展。
- **Claude Code**：企业问题互动度最高（网络安全防护误报 bug 有 197 条评论），补丁发布速度快（7 天内发布 7 个版本）。

### 迭代速度最快
- **Claude Code**：7 天内发布 7 个补丁版本，解决了企业 MCP 管理、差异对比 UX 和平台功能回退问题。
- **GitHub Copilot CLI**：发布 7 个增量版本，聚焦 GPT-6 Astra 落地和沙箱改进，但公开 PR 活跃度较低（大部分开发在私有仓库进行）。
- **Qwen Code**：正在进行活跃的架构迁移（OpenTUI），有 10 个进行中的 PR 覆盖 CLI、守护进程和 Web Shell 各层面。

### 成熟度评估
- **企业级最成熟**：Claude Code 和 GitHub Copilot CLI —— 两者都有正式的组织策略控制、MCP 管理和企业支持渠道，但 Claude Code 因网络安全防护误报问题面临更高的企业使用门槛。
- **开源可扩展性最成熟**：Pi 和 OpenCode —— 两者都有活跃的社区贡献者基础、广泛的供应商支持和扩展生态。
- **早期高增长阶段**：Qwen Code —— 正在进行重大架构迁移（OpenTUI、网格功能），功能扩张迅速，但 CI 可靠性和安全缺口问题更突出。

---

## 6. 趋势信号
1. **MCP 正成为通用扩展层** —— 每一款主流 AI CLI 工具现在都将 MCP 支持列为优先级，表明该协议已成为 AI 智能体工具的事实标准。开发自定义智能体工具的开发者应优先保障 MCP 兼容性，以最大化在生态中的覆盖范围。
2. **成本治理是企业未被满足的首要需求** —— 多智能体 token 消耗失控、缺乏支出上限、配额不可预测是厂商和开源工具普遍存在的核心痛点，这为提供跨平台成本监控和防护的工具留下了明确的市场空白。
3. **上下文管理仍是基础可靠性瓶颈** —— 压缩数据丢失、上下文窗口溢出、跨会话状态不一致是普遍存在的问题，表明当前的上下文管理架构对于长时间运行的智能体工作流而言还未达到生产级标准。
4. **Windows 是最大的平台一致性缺口** —— 所有工具都报告了数量不成比例的 Windows 专属 bug，表明生态此前优先优化 macOS/Linux 开发者体验，目前正在为 Windows 企业用户补短板。
5. **开源工具正以供应商灵活性实现差异化** —— 随着厂商背景的工具优先整合自家模型，开源替代方案（Pi、OpenCode）凭借支持多供应商降级、自托管模型兼容性和避免厂商锁定的优势，正逐步获得市场关注。
6. **安全与隐私审查正在升级** —— 未脱敏的遥测数据（Qwen Code）、内存系统中的密钥泄露（Gemini CLI）、权限钩子绕过（OpenCode、Qwen Code）正成为优先级越来越高的问题，反映出用户对 AI 编码工具数据安全性的担忧日益增长。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code技能社区亮点报告
*数据截至2026-09-07 | 来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. 热门技能排行
排名依据社区讨论量与Issue/PR交叉引用活跃度（源数据未提供PR评论数字段，排行以Issue关联度、更新频率及关联Issue评论量作为替代指标）：

### #1 skill-creator 评估框架修复（PR #1298）
- **功能**：针对skill-creator工具链的核心修复——通过将评估产物安装为正式技能，解决了`run_eval.py`中普遍存在的召回率为0%的bug；同时修复了Windows流读取、触发检测逻辑以及并行工作器行为相关问题。
- **讨论亮点**：直接回应了被广泛反馈的#556 Issue（12条评论，7个👍），已有10+次独立复现；评估流水线失效导致技能描述优化循环只能基于无效数据运行。
- **状态**：开放 | [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 document-typography 技能（PR #514）
- **功能**：面向AI生成文档的质量管控技能，可预防常见排版缺陷：孤行换行、页面底部孤立章节标题、编号对齐异常。
- **讨论亮点**：被视为对Claude所有文档输出的普适性质量升级，解决了用户很少明确提出但总能察觉到的问题。
- **状态**：开放 | [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 scnet-hpc 技能（PR #1615）
- **功能**：高性能计算集群管理技能，支持基于配置的SSH访问与Slurm工作流自动化，涵盖作业生成、集群发现及计算资源使用指导。
- **讨论亮点**：填补了企业级HPC工作流支持的空白，面向科研与计算科学场景。
- **状态**：开放 | [PR #1615](https://github.com/anthropics/skills/pull/1615)

### #4 ODT 文档技能（PR #486）
- **功能**：OpenDocument格式支持技能，覆盖ODT/ODS文件创建、模板填充、解析及转HTML功能；在提及LibreOffice、OpenDocument或ISO标准文档需求时触发。
- **讨论亮点**：响应用户对开源文档格式与现有DOCX/PDF技能功能对齐的需求。
- **状态**：开放 | [PR #486](https://github.com/anthropics/skills/pull/486)

### #5 ServiceNow 平台技能（PR #568）
- **功能**：全面的企业级平台技能，覆盖ServiceNow ITSM、ITOM、ITAM/SAM、FSM、HRSD、SPM、SecOps、CSDM及IntegrationHub工作流。
- **讨论亮点**：存活时间最长的活跃企业级技能PR（已更新超过5个月），表明社区对IT运维场景有持续兴趣。
- **状态**：开放 | [PR #568](https://github.com/anthropics/skills/pull/568)

### #6 Hivemind 多智能体编排技能（PR #1628）
- **功能**：成本优化类技能，将机械性工作委派给免费模型的无界面工作器，同时保留Claude Code作为规划者、评审者与合并者，以保障高价值上下文窗口的使用效率。
- **讨论亮点**：契合多智能体架构模式与智能体工作流成本效益日益增长的需求。
- **状态**：开放 | [PR #1628](https://github.com/anthropics/skills/pull/1628)

### #7 self-audit 质量门禁技能（PR #1367）
- **功能**：通用输出审计技能，先执行机械性文件校验，再按危害严重程度依次开展四维推理质量检查；适用于所有技术栈与模型。
- **讨论亮点**：与社区正在推进的推理质量门禁流水线提案（Issue #1385）相呼应。
- **状态**：开放 | [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. 社区需求趋势
提炼自得票最高、讨论最多的开放Issue：

1. **信任与安全治理**
   - 最高优先级Issue（#492，43条评论）：在`anthropic/`命名空间下发布的社区技能存在信任边界滥用风险，用户可能向非官方技能授予过高权限。
   - 推进方向：明确标注官方/社区技能、实现命名空间隔离、提供安全审计工具（例如PR #83中待合并的`skill-security-analyzer`技能）。

2. **企业协作与共享**
   - 高需求功能（#228，16条评论，8个👍）：组织范围内的技能共享功能，用于替代手动文件传输工作流，可通过共享技能库或团队直接共享链接实现。
   - 相关痛点（#189，6条评论，9个👍）：重叠插件包产生的重复技能浪费了上下文窗口空间。

3. **技能开发工具链可靠性**
   - 普遍反馈的bug（#556，12条评论，7个👍）：评估流水线失效，所有测试查询的触发率均为0%，破坏了技能迭代工作流。
   - 次要痛点：skill-creator脚本存在多个Windows兼容性bug（PR #1099、#1050），限制了跨平台技能开发。

4. **智能体输出质量保障**
   - 活跃提案（#1385）：多阶段推理质量门禁流水线（任务前校准→对抗性评审→交付验证），用于减少幻觉与输出错误。
   - 与正在开发的自审计及质量分析类技能方向一致。

5. **上下文窗口效率**
   - 严重bug反馈（#1487）：`claude-api`技能会一次性注入约15.6万token，单次工具调用就会耗尽上下文窗口。
   - 相关优化方向：使用符号表示法的紧凑型记忆技能，降低持久化状态的token开销（Issue #1329）。

---

## 3. 高潜力待合并技能
以下活跃PR具备明确使用场景、清晰范围定义且近期有更新，大概率将在近期合并：

| 技能 | PR 链接 | 价值定位 |
|-------|---------|-------------------|
| Buffer API Agent Skill | [#1627](https://github.com/anthropics/skills/pull/1627) | 基于Buffer GraphQL API实现跨智能体社交媒体排期；支持Claude、Cursor、Codex等多类智能体平台 |
| testing-patterns Skill | [#723](https://github.com/anthropics/skills/pull/723) | 全测试栈覆盖，从测试理念（测试奖杯模型）到React组件测试最佳实践 |
| skill-quality-analyzer + skill-security-analyzer | [#83](https://github.com/anthropics/skills/pull/83) | 元技能，用于评估技能的结构、文档、安全性并给出质量评分 |
| frontend-design Skill Improvement | [#210](https://github.com/anthropics/skills/pull/210) | 重写的frontend-design技能，提供可落地、Claude可执行的指令，实现更优质的UI输出 |
| Orphaned DOCX Comment Detection | [#1734](https://github.com/anthropics/skills/pull/1734) | 文档完整性技能，用于检测DOCX文件中未关联的评论残留（最新PR，于2026-09-06提交） |
| UIZZE UI Quality Partner Skill | [#1595](https://github.com/anthropics/skills/pull/1595) | 反UI敷衍技能，可选通过MCP访问80万+真实产品界面参考 |

---

## 4. 技能生态洞察
社区在技能层面最集中的需求是**可信、高效、有质量保障的智能体工作流**——涵盖技能分发的安全性与命名空间清晰度、构建与验证技能的可靠工具、上下文高效的执行方式，以及内置质量门禁以保障输出正确性。

---

# Claude Code 社区简报 — 2026年9月7日

## 1. 过去7天亮点
Claude Code 发布了7个补丁版本（v2.1.252 → v2.1.263），核心更新包括 Claude Fable 5.1 成为新的默认模型、未提交变更全屏差异面板，以及面向组织的 MCP 服务器管理功能。社区层面，网络安全防护误报和多智能体token消耗失控是讨论焦点，同时有大量插件和安全修复的 PR 已合并。

---

## 2. 版本发布
| 版本 | 亮点 |
|---|---|
| [v2.1.263](https://github.com/anthropics/claude-code/releases/tag/v2.1.263) | 问题修复与可靠性提升 |
| [v2.1.261](https://github.com/anthropics/claude-code/releases/tag/v2.1.261) | 在 `/status` 和 `claude doctor` 中新增组织策略加载原因说明；新增 `bashOutputMaxChars` / `taskOutputMaxChars` 设置项 |
| [v2.1.260](https://github.com/anthropics/claude-code/releases/tag/v2.1.260) | 全屏差异面板（通过 `/diff` 切换）可查看未提交的编辑内容；在 `/cost` 中新增提示缓存未命中的根本原因说明 |
| [v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259) | 新增 `managedMcpServers` 组织设置，用于 HTTP/SSE MCP 部署；新增 `--permission-prompts none` 标志，适用于无头无人值守场景 |
| [v2.1.258](https://github.com/anthropics/claude-code/releases/tag/v2.1.258) | 修复 macOS 12 (Monterey) 启动回归问题；修复权限审批重新发送后远程/定时会话失败的问题 |
| [v2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257) | **Claude Fable 5.1** 成为默认 Fable 模型（1M 上下文，输入/输出每百万token 10/50美元，缓存读取每百万token 0.25美元）；新增 `timeFormat` 和 `timeZone` 设置项 |
| [v2.1.252](https://github.com/anthropics/claude-code/releases/tag/v2.1.252) | 修复 macOS 上"任务输出交换被拒绝"问题；修复无 `.claude/settings.local.json` 时"始终允许"设置无法保存的问题；修复远程控制会话卡顿问题 |

---

## 3. 热门问题
1. **[#84352](https://github.com/anthropics/claude-code/issues/84352) — 已通过 CVP 审批的组织仍触发网络安全防护拦截**  
   197 条评论 / 27 👍。此前已获批的组织会重新触发拦截，而门户显示状态为"审核中"。本周讨论度最高的问题，直接影响企业工作流。

2. **[#26224](https://github.com/anthropics/claude-code/issues/26224) — Claude Code 挂起/冻结5–20分钟以上**  
   130 条评论 / 151 👍。终端界面长时间无响应且无错误输出。获赞最多的 bug，自2月以来一直处于开放状态。

3. **[#62699](https://github.com/anthropics/claude-code/issues/62699) — Linux 上无法从终端界面输出复制文本**  
   42 条评论 / 68 👍。在终端 UI 中 `Ctrl+Shift+C` 和右键复制均失效。Linux 用户呼声很高的体验修复需求。

4. **[#91188](https://github.com/anthropics/claude-code/issues/91188) — 可配置的 MEMORY.md 压缩阈值**  
   28 条评论。用户希望能自主控制自动内存触发压缩的时机，而非使用硬编码限制。最受关注的内存相关功能需求。

5. **[#89467](https://github.com/anthropics/claude-code/issues/89467) — Windows 桌面应用始终置顶**  
   16 条评论 / 14 👍。没有开关可禁用强制窗口置顶状态。Windows 桌面用户的主要使用痛点。

6. **[#80015](https://github.com/anthropics/claude-code/issues/80015) — 任务列表工具（TaskCreate/Update/List/Get）不再对模型开放**  
   14 条评论 / 13 👍。界面中仍可看到任务，但更新后模型无法调用任务工具，导致智能体驱动的任务工作流中断。

7. **[#67500](https://github.com/anthropics/claude-code/issues/67500) — 上下文压缩丢失关键行为规则**  
   12 条评论。在 macOS 上，会话状态块、内存写入和无停止策略会在压缩后丢失。影响长会话的可靠性。

8. **[#74662](https://github.com/anthropics/claude-code/issues/74662) — 多账户支持：从其他账户打开本地会话**  
   7 条评论 / 5 👍。同时使用个人和工作账户的用户在切换账户时无法访问原有会话。最受关注的多账户增强需求。

9. **[#77943](https://github.com/anthropics/claude-code/issues/77943) — `code-review` 工作流消耗110万+ token 且返回空结果**  
   5 条评论。处理少量文件时 token 消耗异常高且无有效输出。引发工作流用户对成本和质量的担忧。

10. **[#92580](https://github.com/anthropics/claude-code/issues/92580) — 工作流 AI 解决方案审查流程未定义**  
    新提交的问题。反馈工作流 AI 中缺失或未定义审查行为。是工作流文档缺口的早期信号。

---

## 4. 重要 PR 进展
1. **[#87079](https://github.com/anthropics/claude-code/pull/87079) — `**` 通配符模式现在可匹配零深度路径**  
   修复了安全模式规则因 `**/*.ts` 要求字面量 `/` 而静默排除顶层文件的问题。属于安全正确性修复。

2. **[#87077](https://github.com/anthropics/claude-code/pull/87077) — 修复 pr-review-toolkit 智能体中无效的 YAML 前置元数据**  
   智能体描述中未加引号的 `key: value` 行会被解析为嵌套映射，导致前置元数据加载为空。

3. **[#68707](https://github.com/anthropics/claude-code/pull/68707) — 新增 `/bug` 命令，可从终端提交 GitHub 问题**  
   新增 `bug-reporter` 插件，支持在会话中向 `anthropics/claude-code` 仓库提交问题。

4. **[#68689](https://github.com/anthropics/claude-code/pull/68689) — 阻止安全指南配置读取时的符号链接逃逸**  
   防止恶意仓库使用符号链接的 `claude-security-guidance.md` 读取本地文件（如 `~/.ssh/id_rsa`）。属于安全修复。

5. **[#68786](https://github.com/anthropics/claude-code/pull/68786) — 通过标准输入重定向避免 test-hook.sh 中的 shell 注入**  
   移除了 `bash -c` 字符串内的 `$TEST_INPUT` 插值，封堵了插件开发工具中的 shell 注入漏洞。

6. **[#68785](https://github.com/anthropics/claude-code/pull/68785) — 插件钩子示例：JSON 输出到标准输出、更严格的通配符、CI/JSON 修复**  
   修正了三个作为参考实现的示例钩子脚本。

7. **[#68699](https://github.com/anthropics/claude-code/pull/68699) — Hookify：Python 封装 + Windows 路径规范化**  
   修复了 Windows 上 Hookify 的反斜杠路径和 Microsoft Store `python3` 存根问题。

8. **[#68693](https://github.com/anthropics/claude-code/pull/68693) — 重复标签采用累加方式添加，而非替换所有标签**  
   防止分类自动化在标记重复项时擦除已有的领域/平台标签。

9. **[#68701](https://github.com/anthropics/claude-code/pull/68701) — 在 Windows 上的 Python 版本探测中去除 CRLF**  
   修复了 Windows 上安全指南中因 `\r\n` 导致的版本比较失败问题。

10. **[#68702](https://github.com/anthropics/claude-code/pull/68702) — 在 macOS bash 3.x 上防护 `PROMPT_PARTS` 展开受 `set -u` 影响**  
    修复了默认 macOS bash 上 ralph-wiggum 插件设置失败的问题。

---

## 5. 热门讨论
未提供讨论数据 — 本节略去。

---

## 6. 功能需求趋势
- **成本与智能体管控**：多次提出需要token/消耗限制、智能体生成上限，以及为多智能体扩散场景选择成本更优模型的功能（[#90664](https://github.com/anthropics/claude-code/issues/90664)、[#77964](https://github.com/anthropics/claude-code/issues/77964)、[#89596](https://github.com/anthropics/claude-code/issues/89596)）。
- **内存可配置性**：可配置的 MEMORY.md 压缩阈值，以及对自动内存行为的更好控制（[#91188](https://github.com/anthropics/claude-code/issues/91188)）。
- **多账户与会话管理**：支持在个人/工作账户间切换，同时保留本地会话访问权限（[#74662](https://github.com/anthropics/claude-code/issues/74662)）。
- **密钥管理**：提供官方认可的安全方式向 Claude 传递密钥，避免密钥在上下文或日志中暴露（[#90301](https://github.com/anthropics/claude-code/issues/90301)）。
- **UI/UX 优化**：Linux 终端界面文本复制、Windows 窗口置顶开关、Cowork 聊天按最后活动时间排序（[#62699](https://github.com/anthropics/claude-code/issues/62699)、[#89467](https://github.com/anthropics/claude-code/issues/89467)、[#87723](https://github.com/anthropics/claude-code/issues/87723)）。

---

## 7. 开发者痛点
- **网络安全防护误报**：即使是已通过 CVP 审批的组织也会触发拦截，干扰合法的安全工作和代码分析（[#84352](https://github.com/anthropics/claude-code/issues/84352)、[#92565](https://github.com/anthropics/claude-code/issues/92565)）。
- **多智能体成本失控**：多份报告显示，无限制的智能体生成、自我验证循环和重试循环会快速耗尽配额，且无防护措施（[#77964](https://github.com/anthropics/claude-code/issues/77964)、[#87178](https://github.com/anthropics/claude-code/issues/87178)、[#91682](https://github.com/anthropics/claude-code/issues/91682)、[#89964](https://github.com/anthropics/claude-code/issues/89964)）。
- **终端界面冻结/挂起**：持续5–20分钟的无响应且无诊断输出，仍是获赞最多的未解决 bug（[#26224](https://github.com/anthropics/claude-code/issues/26224)）。
- **上下文压缩数据丢失**：压缩过程会静默丢弃行为规则、任务工具和内存写入，破坏长会话的可靠性（[#67500](https://github.com/anthropics/claude-code/issues/67500)、[#80015](https://github.com/anthropics/claude-code/issues/80015)）。
- **平台特定回归问题**：Windows 控制台闪烁、macOS 启动失败、Linux 复制粘贴问题、WSL 内存检测 bug，导致体验碎片化（[#70200](https://github.com/anthropics/claude-code/issues/70200)、[#89467](https://github.com/anthropics/claude-code/issues/89467)、[#62699](https://github.com/anthropics/claude-code/issues/62699)、[#92448](https://github.com/anthropics/claude-code/issues/92448)）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区周报 | 2026-09-07
---
## 1. 过去7天亮点
Codex Rust 核心端发布了5个稳定版本（v0.153.0–v0.153.4），重点推进 GPT-6-Astra 落地（包括 Bedrock 集成、可见性修复、API 配置支持）以及 Vim 模式的撤销/重做功能，同时推出了3个 v0.154.0 alpha 预览版。社区问题中 Windows 平台 bug 占比最高，关于连接设置缺失的讨论帖累计63条评论，同时大量用户反馈模型容量错误影响 Pro 版工作流。生态方面，MCP 工具链开发、TUI 工作树管理、语音主机音频管线相关的 PR 均已合并，开发进展活跃。

---
## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [rust-v0.153.4](https://github.com/openai/codex/compare/rust-v0.153.3...rust-v0.153.4) | 稳定版（bug 修复） | 修复了 GPT-6-Astra 在自带模型选择器中的可见性问题（未显式设置模型时默认启用，#42874）；更新 Astra 引导逻辑，仅当会话中可用对应工具时才发起异步提问（#42878） |
| [rust-v0.153.3](https://github.com/openai/codex/releases/tag/rust-v0.153.3) | 稳定版（功能 + 修复） | 在 Amazon Bedrock 模型选择器中为 Mantle 和 Runtime 全局/美国路由新增 GPT-6-Astra 选项（#42805）；修正 Astra 异步澄清问题引导逻辑，适配支持的工具并可识别纯文本输入（#42809） |
| [rust-v0.153.2](https://github.com/openai/codex/compare/rust-v0.153.1...rust-v0.153.2) | 稳定版（bug 修复） | 将 GPT-6-Astra 快速档的显示文本修正为“2x speed, increased usage”（无功能变更，#42632） |
| [rust-v0.153.1](https://github.com/openai/codex/compare/rust-v0.153.0...rust-v0.153.1) | 稳定版（功能） | 支持通过 API 配置 GPT-6-Astra，无需修改默认模型，也不会在模型选择器中显示该模型（#42605） |
| [rust-v0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0) | 稳定版（功能） | Vim 模式现支持 `u` 撤销和 `Ctrl+R` 重做，可完整保留草稿内容，包括粘贴内容和附件（#41941, #42140）；插件 CLI 新增列表/安装/移除功能 |
| rust-v0.154.0-alpha.1/2/3 | 预览版 | 下一次要版本的预发布构建（完整更新日志待发布） |

---
## 3. 热门问题
1. **[#28919](https://github.com/openai/codex/issues/28919) [Windows] 设置 > 连接中缺失“控制其他设备”选项卡**  
   *63 条评论，59 👍* —— 本周热度最高的问题：Windows Pro 用户无法使用远程设备控制功能，导致跨设备 Codex 工作流中断。该 bug 自2026年6月起一直存在，官方尚未修复，引发大量用户不满。

2. **[#41790](https://github.com/openai/codex/issues/41790) 频繁出现“所选模型已满负荷”错误，中断 Codex 任务**  
   *16 条评论，9 👍* —— ChatGPT Pro 用户反馈自8月31日起，即使使用量很低，执行普通智能体任务时也频繁出现容量错误。本期周报发布当天就有用户提交了重复问题（[#43322](https://github.com/openai/codex/issues/43322)），说明问题仍在持续且影响范围广。

3. **[#29811](https://github.com/openai/codex/issues/29811) 目标压缩会在目标继续执行前重新激活已完成的手动引导步骤**  
   *14 条评论，8 👍* —— macOS 上的严重上下文管理 bug：长时间运行的 `/goal` 任务在压缩后会重新执行已完成的手动引导指令，浪费配额且导致 Pro 20x 用户得到错误结果。

4. **[#40596](https://github.com/openai/codex/issues/40596) [Windows] 统一执行沙箱失败，报错 `helper_unknown_error: setup refresh had errors`**  
   *13 条评论* —— Windows Plus 用户无法启动统一执行沙箱，导致核心智能体工具调用功能失效。该错误自8月底起可稳定复现，暂无临时解决方案。

5. **[#8317](https://github.com/openai/codex/issues/8317) 新增命令/任务的定时调度功能**  
   *7 条评论，38 👍* —— Codex CLI 得票最高的增强需求之一：原生支持延迟任务、间隔运行和条件轮询（例如“每10分钟检查一次日志”）。目前用户需依赖外部 cron 任务或手动重新运行。

6. **[#40228](https://github.com/openai/codex/issues/40228) [Windows] Chrome 原生宿主版本过旧；插件卸载和反馈上传失败**  
   *10 条评论* —— Windows 上 Chrome 浏览器控制仅为只读模式，点击/输入/导航操作均因原生宿主版本不匹配而失败，重新安装扩展也无法解决问题。

7. **[#42182](https://github.com/openai/codex/issues/42182) 支持配额感知的主动任务规划，避免任务中途中断**  
   *6 条评论* —— 用户高度期待的增强功能：Codex 应将剩余5小时/每周使用配额纳入任务规划，将长时间运行的工作拆分到配额重置周期后执行，而非中途执行失败。

8. **[#32927](https://github.com/openai/codex/issues/32927) [macOS] 新建任务编辑器中缺失工作树模式选择器**  
   *6 条评论，4 👍* —— macOS 应用的回归问题：为 Git 仓库创建新任务时，环境选择器（本地/工作树）不再显示，任务默认在本地检出版本中运行。

9. **[#42714](https://github.com/openai/codex/issues/42714) [Windows] Codex 桌面端更新后进程启动但无窗口显示**  
   *3 条评论* —— v26.901.2854.0 版本的严重更新后 bug：ChatGPT.exe 后台进程正常运行，但无渲染进程或 UI 窗口弹出，应用完全无法使用。

10. **[#43237](https://github.com/openai/codex/issues/43237) GPT-6 Astra 在 CLI 中拒绝“hi”这类简单提示，报错 `invalid_prompt`**  
    *2 条评论* —— v0.153.4 中出现的意外回归问题：GPT-6 Astra 会拒绝“hi”这类极简提示并返回 invalid_prompt 错误，在 Linux 和 macOS 上均可复现。该 bug 引发了对 Astra 提示验证逻辑的质疑。

---
## 4. 重要 PR 进展
以下列出的 PR 除特别标注外，均在过去7天内合并。
1. **[#43308](https://github.com/openai/codex/pull/43308) 用 socket 请求替代 Windows 应用服务器关闭文件**  
   将 Windows 应用服务器的关闭流程改为通过本地 `/daemon/shutdown` socket 端点处理（需验证 PID），替代原有的基于文件的触发方式，提升可靠性与安全性。

2. **[#43286](https://github.com/openai/codex/pull/43286) 为 TUI 新增托管工作树浏览器**  
   为本地仓库的 `/worktree` 命令新增可搜索的“浏览工作树”选项，用户可查看工作树检出列表、所有者元数据，还可恢复会话线程或复制工作目录。

3. **[#43289](https://github.com/openai/codex/pull/43289) 新增基于能力门控的 MCP 用户验证处理逻辑**  
   通过 `openai/elicitation/create` 为支持该功能的客户端实现 MCP `openai/userVerification` 请求处理，包含字段验证和大小限制。

4. **[#43279](https://github.com/openai/codex/pull/43279) TUI 会话发现功能纳入关联工作树**  
   修复了目录范围的会话查找逻辑，将同一仓库关联工作树中的对话也纳入查找范围；同时将托管工作树的创建操作从 TUI 事件循环中移出，减少卡顿。

5. **[#43253](https://github.com/openai/codex/pull/43253) 恢复对话时若遇活跃写入者，显示只读对话**  
   恢复另一个应用中已打开的对话时，不再直接返回活跃写入者错误，用户现在可以只读模式查看对话记录，稍后再重试操作。

6. **[#43248](https://github.com/openai/codex/pull/43248) 连接语音主机 RTP 音频与扬声器播放**  
   修复语音主机逻辑，通过带抖动缓冲、解码和扬声器输出的 GStreamer 管线实际播放传入的 RTP 音频（此前数据包会被静默丢弃）。

7. **[#31471](https://github.com/openai/codex/pull/31471) (1/4) 将应用缓存逻辑提取到 ConnectorRuntimeManager 中**  
   *开放中* —— “更快连接器”计划系列 PR 的第一篇：将 Codex Apps 工具缓存重构为按账户/用户/工作空间划分的专用管理器，并支持过期上下文清理。

8. **[#43304](https://github.com/openai/codex/pull/43304) 将 Bazel 构建提交元数据与 Rust 编译输入隔离**  
   通过将构建标识（用户、主机、时间戳）与 Rust 编译输入分离，提升 Bazel 构建的远程缓存复用率，让不同开发者构建相同提交时可共享缓存命中。

9. **[#43265](https://github.com/openai/codex/pull/43265) 新增实验性用户验证 API 契约**  
   在 `experimentalApi` 能力下定义实验性 API 端点（`userVerification/status`、`enroll`、`delete`、`verify`），包含请求/响应 schema 和错误类型。

10. **[#43325](https://github.com/openai/codex/pull/43325) 对 JSON schema 对象键排序，保证 Cargo 和 Bazel 输出一致**  
    通过递归排序对象键（保留数组顺序），确保应用服务器协议的 JSON schema 在 Cargo 和 Bazel 构建中完全一致，消除构建输出偏差。

---
## 5. 热门讨论
### 创意想法
1. **[#9618](https://github.com/openai/codex/discussions/9618) 怎么会没有 /rewind 或 /revert 功能？**  
   *20 条评论，118 👍* —— 本周得票最高的想法：用户要求 Codex 编辑功能支持原生撤销/回退，指出 OpenCode 和 Claude Code 等竞品早已支持该功能。没有该功能的话，用户必须每次修改后手动提交才能避免丢失工作。

2. **[#14067](https://github.com/openai/codex/discussions/14067) 功能需求：跨设备同步 Codex 线程和会话上下文**  
   *10 条评论，61 👍* —— 多设备工作流用户的高需求功能：在工作/个人设备之间同步 Codex 线程和上下文，而非将会话绑定到本地存储。

3. **[#7366](https://github.com/openai/codex/discussions/7366) 引用被 gitignore 的文件**  
   *2 条评论，7 👍* —— 用户希望能用 `@` 提及引用被 `.gitignore` 忽略的文件，因为 gitignore 规则是针对版本控制的，而非针对 Codex 上下文（常见用例：引用本地库依赖）。

### 问答
1. **[#3024](https://github.com/openai/codex/discussions/3024) 集成终端中 Shift + Enter 会执行命令而非换行**  
   *54 条评论，116 👍* —— IntelliJ 集成终端中长期存在的快捷键冲突问题：Shift+Enter 会运行命令，而非在多行输入时插入换行，不符合用户预期。

2. **[#43257](https://github.com/openai/codex/discussions/43257) 实验性上下文管理中的历史记录查询如何计入 Codex 使用限制？**  
   *2 👍* —— 随着 GPT-6 Astra 和实验性上下文功能的推出，这个问题非常及时：用户希望明确历史记录检索操作是否计入5小时/每周配额。

3. **[#12668](https://github.com/openai/codex/discussions/12668) 新会话启动时会加载哪些内容到上下文中？**  
   *4 条评论，1 👍* —— 用户希望完全了解会话启动时除 `AGENTS.md` 外还有哪些文件会被自动加载到上下文，以及如何控制预填充的上下文内容。

### 作品展示
1. **[#16329](https://github.com/openai/codex/discussions/16329) Awesome Codex CLI —— 收录150+生态工具的精选列表**  
   *5 条评论，1 👍* —— 社区整理的150+ Codex CLI 工具索引，包括子智能体、技能、插件、MCP 服务器等，解决了生态资源分散的问题。

2. **[#41157](https://github.com/openai/codex/discussions/41157) CodexFuse 1.2.0 —— 本地 Windows 版 Codex 速率限制仪表盘**  
   *2 条评论，1 👍* —— 一款独立 Windows 工具，可追踪已用/可用速率限制、下次重置时间和每小时使用量，无需 API 密钥。

3. **[#42041](https://github.com/openai/codex/discussions/42041) agent-watch —— 后台运行 codex exec 时区分任务完成、失败和停滞**  
   *2 条评论，1 👍* —— 一款适用于后台 `codex exec` 工作流的工具，可区分已完成、失败和卡住（等待审批）的工作进程，解决了并行任务编排中的一大痛点。

4. **[#42517](https://github.com/openai/codex/discussions/42517) Signal Monitor —— 小巧的原生 macOS 状态栏 Codex 任务监控工具**  
   *2 👍* —— 一款轻量级 macOS 菜单栏应用，可将选中的 Codex 任务显示在紧凑的浮动条中，用户无需打开完整侧边栏就能查看哪些任务需要处理。

---
## 6. 功能需求趋势
1. **会话/上下文可移植性** —— 随着越来越多用户跨多设备工作或协作处理 Codex 任务，跨设备线程同步（#14067）、团队共享会话（#25580）、账户间线程移交（#22356）一直是排名靠前的需求。
2. **任务生命周期与撤销功能** —— 编辑原生回退/撤销（#9618）、定时任务调度（#8317）、配额感知主动规划（#42182）是工作流改进需求的主流，反映出用户正从临时使用转向长期、生产级的 Codex 工作流。
3. **用户体验与导航优化** —— 对话内用户提示跳转快捷键（#37693, #28073）、更好的 Chrome 插件体验、更清晰的上下文可见性（#12668），体现出随着会话变长变复杂，用户对产品打磨的需求日益增长。
4. **扩展平台功能一致性** —— 随着用户群体多元化，Linux 桌面应用官方 Computer Use 支持（#42846）、Windows 与 macOS 功能一致化是反复出现的需求。

---
## 7. 开发者痛点
1. **Windows 平台不稳定** —— 前30个问题中有11个是 Windows 专属问题，涵盖功能缺失（#28919）、沙箱执行故障（#40596）、Chrome 集成失败（#40228, #403

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态摘要 | 2026-09-07
---

## 1. 近7天亮点
本周，Gemini CLI 项目推进了 v0.60.0  nightly 版本的迭代，在扩展安全、工作区安全和 OAuth 流程方面做了加固，同时发布了 v0.59.0-preview.0 里程碑版本。社区反馈的问题主要集中在认证可靠性、智能体执行Bug（子智能体状态上报、Shell 挂起、浏览器智能体兼容性）以及 Auto Memory 系统的边界情况处理上。仓库还合并了一批核心稳定性修复，涵盖符号链接处理、行尾规范化、MCP 工具名称冲突，同时完成了沙箱运行时的关键升级——从已停止维护的 Node 20 迁移到 Node 22。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.60.0-nightly.20260907.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260907.g85aca163f) | Nightly | 自动版本号升级；整合此前 nightly 版本的增量修复。 |
| [v0.60.0-nightly.20260905.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f) | Nightly | <ul><li>**扩展安全**：新增环境变量变更的同意提示，并对会影响运行时的环境变量做净化处理（[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)）</li><li>**工作区安全**：在命令安全逻辑中增强了路径边界检查和符号链接解析</li></ul> |
| [v0.60.0-nightly.20260904.g87a9c71d5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260904.g87a9c71d5) | Nightly | <ul><li>在 MCP OAuth 流程中强制执行 RFC 9207 发行方标识，进一步提升认证安全性（[#29117](https://github.com/google-gemini/gemini-cli/pull/29117)）</li></ul> |
| [v0.59.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0) | Preview | 里程碑版本，整合 v0.58.0 → v0.59.0 的变更，包括核心符号链接评估修复和代码重构。 |
| [v0.59.0-nightly.20260902.g4963a4456](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260902.g4963a4456) | Nightly | 优化了 web 抓取工具的目标地址校验和连接路由（[#29120](https://github.com/google-gemini/gemini-cli/pull/29120)）；@diegogodinezr 首次贡献代码。 |
| [v0.58.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0) | Stable | 稳定版，修复了忽略路径处理中符号链接评估不一致的问题（[#28915](https://github.com/google-gemini/gemini-cli/pull/28915)）并完成了核心代码重构。 |

---

## 3. 热门问题
1. **[#19936 验证流程陷入死循环](https://github.com/google-gemini/gemini-cli/issues/19936)**（开放, P2, 19 条评论, 5 👍）  
   讨论量最高的 Bug：Pro 账号在浏览器中认证成功，但 CLI 始终卡在验证循环中。对付费订阅用户影响较大，2026 年 2 月上报至今仍处于活跃状态。
2. **[#22323 子智能体达到 MAX_TURNS 上限后仍上报为目标成功](https://github.com/google-gemini/gemini-cli/issues/22323)**（开放, P1, 13 条评论, 2 👍）  
   严重的智能体正确性 Bug：`codebase_investigator` 子智能体即使在达到最大轮次上限仍未完成分析的情况下，也会返回 `success`/`GOAL` 状态，静默掩盖了失败情况。
3. **[#28088 OAuth 将已授权的企业组织账号判定为未授权](https://github.com/google-gemini/gemini-cli/issues/28088)**（已关闭, P2, 12 条评论, 5 👍）  
   企业认证功能回退：公司管理的 Gemini Code Assist Standard 账号突然被登出并标记为未授权。本周经分类处理后关闭，但暴露出企业认证的脆弱性。
4. **[#27466 -p/--print 模式在 Windows 下无标准输出](https://github.com/google-gemini/gemini-cli/issues/27466)**（已关闭, P2, 7 条评论）  
   Windows 无头模式 Bug：API 调用成功但无任何内容输出到标准输出，导致非交互式/CI 工作流中断。本周因长期无活动被关闭。
5. **[#22745 评估支持 AST 感知的文件读取、搜索和映射能力](https://github.com/google-gemini/gemini-cli/issues/22745)**（开放, P2, 7 条评论, 1 👍）  
   大型特性规划议题，跟踪 AST 感知工具能否减少 Token 冗余、降低交互轮次并提升代码库导航效率，是长期智能体能力升级的重要方向。
6. **[#21968 Gemini 对技能和子智能体的调用不足](https://github.com/google-gemini/gemini-cli/issues/21968)**（开放, P2, 6 条评论）  
   常见用户痛点：即使是高度匹配的任务（如 gradle/git 相关技能），智能体也不会主动调用自定义技能/子智能体，需要用户明确指令。
7. **[#26525 新增确定性脱敏机制并减少 Auto Memory 日志输出](https://github.com/google-gemini/gemini-cli/issues/26525)**（开放, P2, 5 条评论）  
   安全隐患：Auto Memory 会在**脱敏前**将对话内容发送给提取模型，且会记录现有技能内容，存在敏感数据泄露到模型上下文的风险。
8. **[#25166 Shell 命令执行卡在 "Waiting input" 状态](https://github.com/google-gemini/gemini-cli/issues/25166)**（开放, P1, 4 条评论, 3 👍）  
   高影响核心 Bug：即使是简单的 Shell 命令执行完成后，CLI 仍挂起并显示 "Awaiting user input"，导致工作流自动化中断。
9. **[#28203 isAuthenticationError 错误匹配包含 "401" 的非认证消息](https://github.com/google-gemini/gemini-cli/issues/28203)**（开放, P2, 3 条评论, 1 👍）  
   认证错误误判问题：任何包含 "401" 的错误消息（如端口号、行号）都会被错误归类为认证失败，导致错误处理逻辑误导。
10. **[#22672 智能体应阻止/劝阻破坏性操作](https://github.com/google-gemini/gemini-cli/issues/22672)**（开放, P2, 3 条评论, 1 👍）  
    安全功能需求：当存在更安全的替代方案时，智能体应避免或主动警告破坏性操作（如 `git reset --force`、批量数据库修改）。

---

## 4. 重要 PR 进展
1. **[#28973 fix(sandbox): bump sandbox image from node:20-slim to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28973)**（已合并, P1, 安全）  
   关键安全升级：将沙箱运行时从已停止维护的 Node 20（EOL 2026-04-30）迁移到 Node 22，以持续获得安全补丁支持。
2. **[#29184 fix(core): validate git args in Windows sandbox to block silent `git diff --output`](https://github.com/google-gemini/gemini-cli/pull/29184)**（开放, P1, 安全）  
   Windows 沙箱漏洞修复：`git diff --output=<path>` 此前被判定为只读操作，无需确认即可执行，可能导致任意文件被截断。本次新增参数校验，拦截破坏性参数。
3. **[#28975 fix(core): keep glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975)**（已合并, P2, 核心）  
   修复了通过符号链接访问的工作区根目录（macOS 上 `/tmp` → `/private/tmp` 为默认行为）glob 匹配失效的问题，该问题会导致合法模式出现 "No files found" 错误。
4. **[#28971 fix(core): keep truncated MCP tool names unique](https://github.com/google-gemini/gemini-cli/pull/28971)**（已合并, P2, 核心）  
   修复了 MCP 工具名称冲突问题：长限定名工具被截断为前/后 30 个字符时可能重名，引发注册冲突。本次新增了唯一性校验逻辑。
5. **[#29134 fix(cli): protect current session from deletion](https://github.com/google-gemini/gemini-cli/pull/29134)**（开放, P2, CLI）  
   防止通过 `--delete-session` 误删当前活动会话：通过传入活动会话 ID 并仅匹配精确的短 ID 后缀实现，同时补充了回归测试。
6. **[#28972 fix(core): guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28972)**（已合并, P1, 核心）  
   修复了 `formatTruncatedToolOutput()` 在 `maxChars` 为 0 或负数时输出损坏的问题，该情况会导致负切片偏移和无效截断。
7. **[#28982 Add Build Remote Agent phone pairing (gbr/1)](https://github.com/google-gemini/gemini-cli/pull/28982)**（已合并, 功能）  
   新增示例扩展，支持运行 Build Remote Agent 的手机与桌面端 Gemini CLI 会话配对以实现旁听功能，基于现有 `gbr/1` 协议实现。
8. **[#28978 docs(hooks): document missing HookDecision values (ask, approve)](https://github.com/google-gemini/gemini-cli/pull/28978)**（已合并, 文档）  
   填补文档空白：更新 hooks 规范，补充所有支持的 `HookDecision` 值说明（此前仅列出 `allow`/`deny`）。
9. **[#29106 fix(core): flush final SSE event on EOF without trailing blank line](https://github.com/google-gemini/gemini-cli/pull/29106)**（已合并, 核心）  
   修复了流在末尾无空行时（如连接中断、非标准代理）最终 SSE 事件（如 `finishReason`、用量元数据）丢失的问题。
10. **[#29137 chore(deps): bump npm-dependencies group with 77 updates](https://github.com/google-gemini/gemini-cli/pull/29137)**（开放, 依赖, 超大规模）  
    大规模依赖升级，覆盖 77 个 npm 包（包括 `simple-git`、`@modelcontextprotocol/sdk`），保持代码库依赖与时俱进。

---

## 5. 热门讨论
本期无 GitHub Discussions 数据，该板块暂略。

---

## 6. 功能需求趋势
从开放议题和社区反馈来看，最受期待的功能方向包括：
1. **智能体自主性与智能化**：优化技能/子智能体的自动选择逻辑，无需用户明确提示；新增 AST 感知的代码库读取/搜索/映射能力，以减少 Token 消耗并提升分析精度（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）。
2. **智能体安全护栏**：内置破坏性操作防护机制（如强制 git 操作、数据库修改），并通过 `/chat share` 提升子智能体执行路径的可见性（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
3. **Auto Memory 系统加固**：在内容进入模型上下文前完成确定性密钥脱敏，限制低信号会话的无限重试，优化无效内存补丁的处理逻辑（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）。
4. **浏览器智能体鲁棒性**：自动会话接管/锁恢复能力、Wayland 兼容性，以及正确遵循 `settings.json` 中的覆盖配置（如 `maxTurns`）（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）。
5. **扩展与集成生态**：扩展更多扩展能力（如远程智能体配对），完善 hooks 及高级功能的文档。

---

## 7. 开发者痛点
反复出现的问题和高频用户反馈痛点：
1. **认证可靠性**：Pro 账号持续验证循环、意外登出、非认证错误被误判为认证失败等问题，困扰个人和企业用户（[#19936](https://github.com/google-gemini/gemini-cli/issues/19936), [#28088](https://github.com/google-gemini/gemini-cli/issues/28088), [#28203](https://github.com/google-gemini/gemini-cli/issues/28203)）。
2. **智能体执行正确性**：静默失败（子智能体达到 MAX_TURNS 后仍上报成功）、Shell 命令执行完成后挂起、交互提示卡住（如 Vite 应用创建），破坏工作流可信度和自动化流程（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）。
3. **跨平台不一致**：Windows 专属 Bug（打印模式下标准输出失败、CRLF 行尾问题导致全文件 diff、git 沙箱参数校验漏洞）造成平台体验差异（[#27466](https://github.com/google-gemini/gemini-cli/issues/27466), [#29132](https://github.com/google-gemini/gemini-cli/pull/29132), [#29184](https://github.com/google-gemini/gemini-cli/pull/29184)）。
4. **工作区与路径处理脆弱**：符号链接解析错误、符号链接根目录下 glob 失效、临时脚本文件散落在各目录，增加清理成本并引发异常行为（[#28975](https://github.com/google-gemini/gemini-cli/pull/28975), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）。
5. **工具限制与上下文管理**：工具数量超过 128 时返回 400 错误、大模型下上下文相关的监听器泄漏/死循环、换行符转义处理不当，降低性能和可靠性（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#28313](https://

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 | 2026-09-07

## 1. 过去7天亮点
本周 Copilot CLI 团队发布了 v1.0.84 版本，新增对 GPT-6 Astra 的支持，同时对沙箱灵活性、Windows 11 任务栏集成以及自定义智能体模型回退行为进行了增量优化。社区反馈最集中的问题是队列管理、按仓库范围限定插件、自定义智能体推理强度配置方面的易用性不足；企业用户则反馈了模型策略和 MCP 认证可靠性相关问题。

## 2. 版本发布
| 版本 | 发布日期 | 核心变更 |
|---------|--------------|-------------|
| v1.0.84-1 | 2026-09-07（最新） | ✅ 新增对 GPT-6 Astra 的支持 |
| v1.0.84-0 | 2026-09-06 | ✅ 可通过经批准的绕过提示，在当前会话剩余时长内禁用托管沙箱会话<br>🐛 修复了 PowerShell 沙箱拦截提示中提供“在沙箱外运行命令”选项的问题<br>🐛 修复了凭据存储中存在多个 GitHub 账号时，沙箱内 `gh` 命令的行为异常问题 |
| v1.0.83 | 2026-09-04 | ✅ 新增 Windows 11 任务栏集成，运行中的会话可通过悬停查看实时状态卡片<br>✅ 为 MCP OAuth 登录新增 Client ID Metadata Document (CIMD) 支持<br>✅ 自定义智能体现在支持有序模型回退列表，可通过 `model-policy: required` 强制仅使用列表内的模型 |
| v1.0.83-5 | 2026-09-03 | ✅ Windows 11 任务栏实时状态卡片<br>⚡ 强化了 macOS/Linux 沙箱的网络隔离能力（阻止访问本地服务；macOS 还会阻止沙箱内命令启动的 127.0.0.1 服务） |
| v1.0.83-4 | 2026-09-02 | ✅ 为 MCP OAuth 登录提供 CIMD 支持<br>⚡ 默认禁用“中断会话恢复”提示，恢复大型会话时输入响应速度更快<br>🐛 修复了沙箱内文件工具的路径处理问题 |
| v1.0.83-2 | 2026-08-31 | ✅ 自定义智能体多模型回退 + 新增对 `claude-fable-5.1` 的支持<br>⚡ Linux 沙箱网络出站流量限制为仅可通过已配置的代理访问 |
| v1.0.83-1 | 2026-08-30 | ✅ 会话侧边栏支持排序（按最近使用/创建时间/名称/不排序），偏好设置可保存<br>✅ 新增企业级 `forceLoginOrgs` 托管设置，可将登录组织固定为已批准的组织<br>⚡ 优化了 `/mcp config` 的用户体验 |
| v1.0.83-0 | 2026-08-29 | ✅ 模型/网页请求自动支持 HTTPS 代理 mTLS 客户端证书<br>✅ 新增 `herdr` 终端复用器检测（修复了 herdr 窗格中的 Kitty 协议、配色方案和通知问题） |

## 3. 热门问题
1. **#1665 — 支持项目/仓库范围限定的插件（已关闭）**
   - 重要性：按用户全局安装插件的方式会破坏仓库专属工具链配置，也不符合团队插件标准化工作流。
   - 社区反馈：18 👍，14 条评论；该需求最早于 2026 年 2 月提出，是长期存在的功能请求，本周关闭（摘要中未说明具体解决方案）。
   - 链接：[github/copilot-cli#1665](https://github.com/github/copilot-cli/issues/1665)

2. **#1857 — 支持在执行前取消/移除已入队的消息（开放中）**
   - 重要性：（通过 `Ctrl+Q`/`Ctrl+Enter`）入队的消息在智能体忙碌或执行 `/compact` 期间无法撤回，用户不得不等待非预期命令执行完成。
   - 社区反馈：28 👍，11 条评论；本周获赞最高的开放问题，凸显了高级用户面临的核心体验痛点。
   - 链接：[github/copilot-cli#1857](https://github.com/github/copilot-cli/issues/1857)

3. **#2904 — 自定义智能体的 YAML frontmatter 应支持配置推理强度（开放中）**
   - 重要性：推理强度目前仅支持全局配置，无法针对不同智能体的任务需求（需要更深或更浅的推理深度）进行单独优化。
   - 社区反馈：23 👍，8 条评论；深受自定义智能体开发者欢迎的需求。
   - 链接：[github/copilot-cli#2904](https://github.com/github/copilot-cli/issues/2904)

4. **#4328 — WSL2：因 WT_SESSION 泄漏，Ctrl+H 被误识别为 Ctrl+Backspace（开放中）**
   - 重要性：在 Windows Terminal 上使用 WSL2 的用户会遇到核心文本编辑快捷键失效的问题，基础输入体验受损。
   - 社区反馈：7 条评论，0 👍；属于平台特定的回归问题，影响 Windows/WSL 开发者的工作流。
   - 链接：[github/copilot-cli#4328](https://github.com/github/copilot-cli/issues/4328)

5. **#4695 — HTTP 服务器的 MCP OAuth 令牌无法在会话间可靠复用（开放中）**
   - 重要性：重复的缓存键条目导致 HTTP 类型的 MCP 服务器需要反复重新认证，破坏了 MCP 工作流的流畅性。
   - 社区反馈：5 条评论，0 👍；是 MCP 高级用户面临的关键可靠性问题。
   - 链接：[github/copilot-cli#4695](https://github.com/github/copilot-cli/issues/4695)

6. **#4692 — 企业默认模型在 CLI 中不被识别（在 VS Code/GitHub Desktop 中正常）（开放中）**
   - 重要性：GitHub Copilot 各端的模型策略执行不一致，会造成管理混乱，破坏企业工作流。
   - 社区反馈：4 条评论，0 👍；本周企业用户反馈的头号问题。
   - 链接：[github/copilot-cli#4692](https://github.com/github/copilot-cli/issues/4692)

7. **#4537 — ACP 模式自动批准工具调用（#845 的回归问题）（开放中）**
   - 重要性：`--acp` 模式下不再发送 `session/request_permission` 请求，导致无值守的 Shell 命令、文件编辑和删除操作可直接执行，属于安全回归。
   - 社区反馈：2 👍，2 条评论；对于依赖权限提示的 ACP 集成来说，这是高严重性回归问题。
   - 链接：[github/copilot-cli#4537](https://github.com/github/copilot-cli/issues/4537)

8. **#4725 — Linux 上频繁出现 JavaScript 堆内存不足（开放中）**
   - 重要性：CLI 每隔几分钟就会因 OOM 错误崩溃（堆内存占用约 4GB），导致无法用于长时间运行的会话。
   - 社区反馈：1 条评论，0 👍；是 Linux 用户面临的严重稳定性问题。
   - 链接：[github/copilot-cli#4725](https://github.com/github/copilot-cli/issues/4725)

9. **#4710 — 会话空闲时 `copilot-file-search` 线程失控，持续占用 CPU/磁盘（开放中）**
   - 重要性：空闲会话会占满一个 CPU 核心并无限制写入诊断日志，导致性能下降和磁盘空间占用膨胀。
   - 社区反馈：1 条评论，0 👍；属于资源泄漏 bug，影响后台会话的可靠性。
   - 链接：[github/copilot-cli#4710](https://github.com/github/copilot-cli/issues/4710)

10. **#1688 — 在 config.json 中新增可配置的自动压缩阈值（开放中）**
    - 重要性：对于速度较慢的高容量模型（例如 Claude Opus 4.6），内置压缩触发时机过晚，在上下文使用率达到 45-60% 时会出现严重延迟。
    - 社区反馈：5 👍，3 条评论；深受使用大上下文窗口用户欢迎的需求。
    - 链接：[github/copilot-cli#1688](https://github.com/github/copilot-cli/issues/1688)

## 4. 重要 PR 进展
过去7天仅有 2 个 PR 有更新：
1. **#4739 — 文档：提出由终端拥有 macOS 通知的方案（开放中）**
   - 描述：文档记录了 macOS 通知点击交互的问题，并新增了一份 MIT 许可的、由终端拥有通知的参考实现，附带可移植的回归测试。这是一份文档/参考方案提案，并非对已发布 CLI 的功能变更。
   - 作者：anujb-msft
   - 链接：[github/copilot-cli#4739](https://github.com/github/copilot-cli/pull/4739)

2. **#3771 — 初始项目搭建（开放中）**
   - 描述：无摘要；该 PR 于 2026 年 6 月首次提交，本周有更新。
   - 作者：limenpchuolto112-creator
   - 链接：[github/copilot-cli#3771](https://github.com/github/copilot-cli/pull/3771)

*注：本周公共仓库的 PR 活跃度较低，大部分核心开发工作可能在私有上游仓库中进行。*

## 5. 热门讨论
*省略 — 数据集中未提供讨论相关内容。*

## 6. 功能需求趋势
从本周的问题中可以看出三个明确的功能方向：
1. **自定义智能体可配置性**：用户希望支持按智能体设置推理强度（#2904），并扩展多模型策略控制，在已发布的有序模型回退功能基础上做进一步增强。
2. **工作流控制与用户体验**：用户提出队列取消（#1857）、标准文本选择快捷键（#2644）、可配置上下文压缩阈值（#1688）等需求，希望能对会话行为进行更细粒度的控制。
3. **插件/扩展灵活性**：范围限定的插件安装（#1665 已解决）和改进的插件状态管理（#4471）仍然是管理仓库专属工具链的团队最关心的问题。

## 7. 开发者痛点
1. **MCP 可靠性短板**：多个问题反映出 MCP 集成不够稳定，包括 OAuth 令牌复用失败（#4695）、初始化协议不匹配（#4525）、扩展重载钩子处理器崩溃（#4590）以及第三方 MCP 服务器兼容性中断（#4647）。
2. **企业管理摩擦**：各端模型策略执行不一致（#4692、#4272）、数据驻留端点不匹配（#4527）、可信安全项目集成有限（#4322），这些问题给企业团队带来了额外的管理成本。
3. **稳定性与资源泄漏**：导致 OOM 崩溃的内存泄漏（#4725）、空闲时失控的文件搜索线程（#4710）、语音服务器死锁（#4740）等问题降低了长时间运行会话的可靠性。
4. **平台特定回归问题**：WSL2 快捷键失效（#4328）、Windows 25H2 沙箱不兼容（#4652）、macOS SSH 剪贴板故障（#4551）、Android Studio 终端滚动行为异常（#3194），导致跨平台体验不一致。
5. **ACP 模式安全/一致性短板**：权限提示回归（#4537）、提示时无条件中止会话（#4555）、后台任务期间缺少空闲信号（#4743）等问题，不符合集成 ACP 的工具的预期。

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报 | 2026-09-07
*来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. 过去7天亮点
OpenCode 发布了4个补丁版本（v1.18.26 至 v1.18.29），重点优化了模型兼容性（支持 GPT-6、Claude 5、Bedrock）并提升了核心服务提供商的可靠性；社区则反馈了多个高优先级问题，包括权限系统漏洞、Go 订阅配额异常以及 MCP/Anthropic 集成失败等。工程侧，贡献者 @Hona 提交了一系列聚焦性能的 PR，旨在解决导致桌面端卡顿和大规模粘贴操作缓慢的渲染器状态持久化瓶颈。

---

## 2. 版本发布（v1.18.26 → v1.18.29）
| 版本 | 核心变更 |
|---------|-------------|
| [v1.18.29](https://github.com/anomalyco/opencode/releases/tag/v1.18.29) | **核心修复**：Codex OAuth 模型筛选现在支持识别整数形式的 GPT 版本（如 `gpt-6`）；修复了 OpenAI 订阅用户无法看到 `gpt-6-astra` 的问题。社区贡献：修复中文文档粗体渲染问题（@Peter267）。 |
| [v1.18.28](https://github.com/anomalyco/opencode/releases/tag/v1.18.28) | **核心**：会话 ID 会作为 GitHub Copilot 交互请求头发送，便于更好地追踪请求。**桌面端修复**：设备认证使用正确的客户端 ID；放大「在其他应用中打开」的图标以提升可见性。 |
| [v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27) | **核心修复**：默认服务提供商请求头和流式分块超时设置为5分钟（设为 `false` 可禁用）；Anthropic 的 `thinking.blockBinding` 现在支持通过配置选择退出，以保留服务提供商的默认设置。 |
| [v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) | **核心修复**：Claude 5 会话可兼容失效的思考块（不再因提示词/工具变更而失败）；Bedrock GPT-5.6 支持 `none` 推理强度；改进 Bedrock 推理/重放处理（@pengzh1）；工具调用的计时准确性在中断后仍可保持。 |

---

## 3. 热门问题（按影响范围和互动量排名前10）
1. **[#7006: `permission.ask` 插件钩子已定义但未触发](https://github.com/anomalyco/opencode/issues/7006)**  
   *开放中 · 16 条评论 · 25 👍*  
   高影响漏洞，导致插件开发者无法使用新的权限系统——由于钩子始终不触发，自定义自动审批逻辑无法运行。这是本周评论数最多的开放问题，引发了开发者的普遍不满。

2. **[#24335: 权限通配符 `*` 会覆盖低优先级权限](https://github.com/anomalyco/opencode/issues/24335)**  
   *开放中 · 10 条评论 · 5 👍*  
   违反了文档中规定的权限评估顺序（「最后匹配的规则生效」），导致「通用规则+特定规则」的常用配置模式失效。阻碍了依赖细粒度权限控制的团队使用。

3. **[#42935: DeepSeek V4 Flash 缓存读取量降至0后，OpenCode Go 配额在约20分钟内耗尽](https://github.com/anomalyco/opencode/issues/42935)**  
   *开放中 · 8 条评论 · 3 👍*  
   疑似严重的缓存/计费漏洞，导致 Go 订阅用户的配额突然意外耗尽。引发了对生产环境使用成本可预测性的担忧。

4. **[#47613: Go 订阅：尽管使用量很低，仍持续返回 HTTP 429（重试间隔12小时）——受限约3天](https://github.com/anomalyco/opencode/issues/47613)**  
   *开放中 · 7 条评论 · 0 👍*  
   付费 Go 用户面临严重服务降级：速率限制每12小时无限重置，导致服务3天以上无法使用，且无解决途径。

5. **[#46628: 未针对 Anthropic 清理 MCP 工具 schema：顶层 anyOf/oneOf/allOf 返回 400 错误](https://github.com/anomalyco/opencode/issues/46628)**  
   *开放中 · 5 条评论 · 0 👍*  
   使用 Anthropic 模型时，所有带复杂 schema 的 MCP 服务器都无法工作，因为 OpenCode 在将 JSON Schema 传递给 Anthropic API 前，未转换其中不支持的结构。

6. **[#47703: Go 配额60美元月度额度仅用了24.54美元就被封禁——免费模型也被禁用](https://github.com/anomalyco/opencode/issues/47703)**  
   *开放中 · 1 条评论 · 0 👍*  
   又一个配额计算漏洞：尽管使用量未达总上限，用量总和却显示为101%，导致连免费模型都无法访问。进一步加剧了对 Go 计费系统稳定性的担忧。

7. **[#43758: [功能请求] 会话级终端 + 可选的终端上下文供模型读取](https://github.com/anomalyco/opencode/issues/43758)**  
   *开放中 · 4 条评论 · 0 👍*  
   高需求的用户体验改进：当前工作区级终端会在不同聊天标签页之间泄露上下文。用户希望提供按会话隔离的终端，并支持让 AI 选择性查看终端状态。

8. **[#32202: 技能重复根目录导致 available_skills 在重启后发生变化](https://github.com/anomalyco/opencode/issues/32202)**  
   *开放中 · 8 条评论 · 1 👍*  
   当多个根目录下存在同名技能时，技能加载结果不确定，导致重启后行为不一致，破坏了智能体配置的可复现性。

9. **[#47545: 自动模式会导致终端中反复出现虚假权限通知](https://github.com/anomalyco/opencode/issues/47545)**  
   *开放中 · 3 条评论 · 0 👍*  
   自动模式的干扰性漏洞：Warp/Orca 等 AI 终端即使已设置自动审批，仍会持续弹出权限提示，导致无人值守运行无法实现。

10. **[#46156: [功能请求] 插件数据流面板——为会话级指标预留 UI 空间](https://github.com/anomalyco/opencode/issues/46156)**  
    *开放中 · 3 条评论 · 1 👍*  
    插件生态的热门需求：为插件提供专属 UI 区域，用于展示实时日志、指标和仪表盘，而不干扰聊天流。

---

## 4. 重点 PR 进展（前10）
1. **[#47704: perf(app): 渲染层缓存存储命名空间并批量写入](https://github.com/anomalyco/opencode/pull/47704)**  
   *开放中 · @Hona*  
   渲染器持久化改造的第一层：参照 VS Code 的存储架构，将逐次写入的 IPC 替换为批量的命名空间加载/写入，减少主线程阻塞。

2. **[#47705: perf(app): 按计划序列化持久化存储，而非每次 setter 调用都执行](https://github.com/anomalyco/opencode/pull/47705)**  
   *开放中 · @Hona*  
   第二层：将存储序列化操作合并到固定的保存窗口（加上所有者清理和页面隐藏事件）执行，而非每次状态变更都序列化，与 VS Code 的 `Memento` 契约保持一致。

3. **[#47706: perf(app): 将大型草稿文本外置为内容寻址分块](https://github.com/anomalyco/opencode/pull/47706)**  
   *开放中 · @Hona*  
   第三层：大型草稿文本将以固定大小、内容寻址的分块形式存储，而非存放在状态数据库中，这样大规模粘贴时每次保存只需上传一个分块，而非全文。

4. **[#47695: fix(desktop): 将渲染器状态持久化到 SQLite，而非 electron-store](https://github.com/anomalyco/opencode/pull/47695)**  
   *已合并 · @Hona*  
   修复了关闭会话标签页时 Windows 系统出现3-5秒卡顿的问题：将渲染器持久化从同步的 `electron-store` 写入（会阻塞主线程）迁移到 SQLite。

5. **[#47702: fix: 将 Muse Spark 模型路由到 Responses API，而非 Chat Completions](https://github.com/anomalyco/opencode/pull/47702)**  
   *开放中 · @qubixal*  
   通过使用正确的 Responses API 端点而非 Chat Completions，修复了 Muse Spark 1.2/1.3 模型返回0令牌响应和 HTTP 500 错误的问题。

6. **[#47427: fix(desktop): 防止大文本粘贴导致崩溃](https://github.com/anomalyco/opencode/pull/47427)**  
   *开放中 · @hufangyuan460-blip*  
   解决了在桌面端提示框中粘贴大量文本时出现的 UI 卡顿、无响应和崩溃问题。

7. **[#45424: fix(core): 为 AI SDK 包无原生路由的提供商提供调度支持](https://github.com/anomalyco/opencode/pull/45424)**  
   *开放中 · @SeeRay11*  
   修复了三个硬编码包（`@ai-sdk/openai`、`@ai-sdk/anthropic`、`@ai-sdk/...`）之外的 AI SDK 提供商的路由问题，支持接入更多提供商的 SDK。

8. **[#45482: fix(task): 让异步子智能体任务按顺序如实回答一次后停止](https://github.com/anomalyco/opencode/pull/45482)**  
   *开放中 · @NamedIdentity*  
   修复了子智能体任务行为：现在所有异步子任务完成后，智能体只会收到一次确认，避免重复或乱序响应。

9. **[#47699: fix(cli): 将 `--model` 参数传递给 TUI 入口](https://github.com/anomalyco/opencode/pull/47699)**  
   *开放中 · @holny*  
   修复了 `opencode --model <id> --prompt ...` 命令在 TUI 启动前丢失模型参数的问题，确保 CLI 指定的模型能在会话中实际生效。

10. **[#47262: fix(workflows): 在 Fork 仓库中跳过 close-issues 和 close-prs 任务](https://github.com/anomalyco/opencode/pull/47262)**  
    *开放中 · @niStee*  
    修复了定时工作流错误关闭 Fork 仓库中 issue/PR 的问题，该问题会破坏贡献者的开发流程。

---

## 5. 热门讨论
*略——数据集中未提供 GitHub Discussions 数据。*

---

## 6. 功能请求趋势
1. **插件生态可扩展性**：需求集中在更完善的插件能力——可用的 `permission.ask` 钩子、专属的数据流/指标 UI 面板，以及改进 TUI/Node 构建版本的插件加载体验。
2. **终端体验优化**：会话级终端（而非工作区级）、模型可查看终端上下文、减少自动模式下的通知干扰。
3. **自定义与控制力**：可配置的项目名称（独立于文件夹名称）、会话收藏/置顶功能、更细粒度的权限系统控制。
4. **提供商与模型对齐**：需求包括文档化的 Standard Compute 提供商设置流程、Nous Research API 集成，以及从 `.claude/` 目录发现 Claude Code 智能体。

---

## 7. 开发者痛点
1. **Go 订阅计费与配额不稳定**：多起报告显示配额计算错误、配额突然意外耗尽、无明确原因的持续 429 速率限制——正在削弱付费用户对成本可预测性的信任。
2. **权限系统漏洞**：两个高严重级问题（`permission.ask` 钩子不触发、通配符规则顺序违规）破坏了核心权限工作流和自定义插件逻辑。
3. **MCP 集成缺陷**：与 Anthropic 模型的 schema 不兼容、远程 MCP OAuth 元数据查找失败、未处理的 MCP 请求超时，给构建基于 MCP 的工作流带来阻碍。
4. **桌面端性能与稳定性**：关闭标签页时卡顿、大文本粘贴导致崩溃、Windows 系统 GPU 进程启动失败、删除 `.git` 目录后会话列表数据丢失，影响日常使用体验。
5. **TUI 与 CLI 边缘问题**：空闲加载动画导致 CPU 占用100%、Termux（安卓）支持失效、符号链接配置文件被覆盖、恢复会话时工作目录不正确。
6. **2.0 测试版回归问题**：多个 v2 专属漏洞（TUI 插件加载、CLI 偏好设置符号链接处理、serve 基础认证失败）给早期采用者带来困扰。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区简报 — 2026-09-07

---

## 1. 过去 7 天亮点
Pi 项目发布了 v0.85.0 和 v0.85.1 版本，核心更新包括支持 GPT-6 Astra（可通过 OpenAI API 密钥及 Codex 订阅使用），以及在支持的 Anthropic 传输通道上实现 Claude 思考算力持久化。社区活动主要聚焦于 OpenAI Codex 连接稳定性、Windows 兼容性缺口，以及全屏 TUI 的使用体验；同时维护者合并了多项修复，涵盖供应商路由、DNS 解析，以及传输错误时的跨供应商回退机制。

---

## 2. 版本发布
- **v0.85.1**
  - 新增 **GPT-6 Astra** 支持，可通过 OpenAI API 密钥和 OpenAI Codex 订阅使用。文档：[API Keys](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys)、[OpenAI Codex](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#openai-codex)
- **v0.85.0**
  - 新增 **Claude 思考算力持久化**：支持的 Anthropic 传输通道可保留每轮对话的算力配置，并能在签名思考不匹配时安全恢复。文档：[Model Configuration](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

---

## 3. 热门议题
1. **#4945 — openai-codex 连接可靠性问题** [开放中，处理中]
   - `openai-codex` / `gpt-5.5` 会间歇性导致 TUI 卡在 `Working...` 状态，无流式输出、无工具调用也无报错，需按 Esc 恢复。
   - **影响**：直接影响 Codex 核心工作流的稳定性。**反响**：76 条评论，32 个 👍 — 为本周活跃度最高的议题。
   - [earendil-works/pi#4945](https://github.com/earendil-works/pi/issues/4945)

2. **#7547 — 你如何在 Windows 上使用 Pi？遇到了哪些问题？** [开放中，Windows，收集帖]
   - 一项社区调研，旨在了解 Windows 开发者使用 Pi 的方式，从而确定修复、文档优化与外部打包工作的优先级。
   - **影响**：Windows 是一大未被充分覆盖的用户群体，调研结果将决定平台路线规划。**反响**：57 条评论，2 个 👍。
   - [earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)

3. **#9052 — 全屏模式下滚轮滚动速度比普通模式慢 3 倍** [开放中]
   - 全屏 TUI 的固定输入框很受用户欢迎，但滚轮滚动性能明显下降。
   - **影响**：全屏模式的使用体验倒退，直接影响日常工作流。**反响**：6 条评论，3 个 👍。
   - [earendil-works/pi#9052](https://github.com/earendil-works/pi/issues/9052)

4. **#8826 — 限制代理重试退避时长，应对长时间瞬时故障** [开放中]
   - 提议为 coding-agent 的指数重试延迟设置可配置的上限，确保上游长时间故障时，重试间隔保持在合理范围内。
   - **影响**：提升供应商持续宕机（如 503 错误/连接洪泛）时的系统韧性。**反响**：4 条评论。
   - [earendil-works/pi#8826](https://github.com/earendil-works/pi/issues/8826)

5. **#9209 — GitHub Copilot GPT-6 Astra 被路由到不支持的 Chat Completions 接口** [已关闭]
   - `github-copilot/gpt-6-astra` 曾被路由到 `/chat/completions` 接口，被 Copilot 拒绝；现已改为通过 Responses 接口路由修复。
   - **影响**：导致发布后不久 Copilot 通道的 GPT-6 Astra 无法使用。**反响**：4 条评论；修复已在 PR #9253 中发布。
   - [earendil-works/pi#9209](https://github.com/earendil-works/pi/issues/9209)

6. **#9229 — Windows：shell_path 配置被忽略，即使禁用 WSL 功能也始终优先使用 WSL bash** [已关闭，bug]
   - 在 Windows 11 上，即使禁用了 WSL 功能但系统中存在 `wsl.exe`，Pi 仍会忽略 `shell_path` 配置，强制使用 WSL bash。
   - **影响**：破坏了非 WSL 用户的 Windows 终端自定义配置。**反响**：4 条评论。
   - [earendil-works/pi#9229](https://github.com/earendil-works/pi/issues/9229)

7. **#8834 — 为技能和提示词模板引入可选的包命名空间（pi.namespace）** [已关闭，暂不处理]
   - 提议在 `package.json` 中新增 `pi.namespace` 字段，将技能/提示词模板的解析统一为 `<命名空间>:<名称>` 格式。
   - **影响**：可实现更安全的多包扩展组合。**反响**：5 条评论；已关闭，待进一步设计。
   - [earendil-works/pi#8834](https://github.com/earendil-works/pi/issues/8834)

8. **#9246 — anthropic-messages：将未使用的第 4 个缓存断点用于稳定的对话检查点** [已关闭]
   - `convertMessages` 此前仅使用了 Anthropic 4 个缓存断点中的 3 个；提议将第 4 个用于稳定的对话检查点。
   - **影响**：提升 Anthropic 长会话的缓存命中率，降低成本。**反响**：3 条评论。
   - [earendil-works/pi#9246](https://github.com/earendil-works/pi/issues/9246)

9. **#9247 — JSON/RPC：暴露供应商原生的终端故障分类** [已关闭]
   - 提议在 JSON/RPC 事件中提供机器可读的故障分类（如上下文溢出、安全策略拒绝、速率限制等）及是否可重试的标识。
   - **影响**：使扩展和嵌入方能够对故障做出智能响应。**反响**：3 条评论。
   - [earendil-works/pi#9247](https://github.com/earendil-works/pi/issues/9247)

10. **#8827 — tui(latex)：旧版字体命令（\rm、\bf、\it）会强制整个块回退到原始源码显示** [开放中]
    - 包含 `\rm` 等旧版字体命令的 LaTeX 块会回退显示原始源码，而非渲染为 Unicode 数学公式。
    - **影响**：降低了常见旧版 TeX  notation 的渲染质量。**反响**：3 条评论。
    - [earendil-works/pi#8827](https://github.com/earendil-works/pi/issues/8827)

---

## 4. 重要 PR 进展
1. **#6881 — feat(ai)：响应中包含成本信息时，使用供应商上报的成本** [开放中，处理中]
   - 当可用时，在 `usage.cost.total` 中使用供应商计费的成本，否则回退到目录定价。覆盖 OpenAI 补全接口及 Vercel AI Gateway 上游的成本明细。
   - [earendil-works/pi#6881](https://github.com/earendil-works/pi/pull/6881)

2. **#9253 — fix(ai)：通过 Responses 接口路由 Copilot GPT 模型（修复 Astra 问题）** [开放中]
   - 将 GitHub Copilot GPT 模型（含 Astra）路由到 Responses 接口而非 `/chat/completions`，以此修复 #9209；与 Copilot 当前的产品目录向前兼容。
   - [earendil-works/pi#9253](https://github.com/earendil-works/pi/pull/9253)

3. **#9251 / #9249 / #9248 — feat(coding-agent)：传输错误时跳转至备用供应商** [已关闭]
   - 新增可选的跨供应商回退机制，在传输/不可达错误时，会话可切换到配置的备用供应商继续运行，而非直接失败。修复了 #9242。
   - [#9251](https://github.com/earendil-works/pi/pull/9251) / [#9249](https://github.com/earendil-works/pi/pull/9249) / [#9248](https://github.com/earendil-works/pi/pull/9248)

4. **#9252 / #9250 — fix(coding-agent)：将 undici 的连接查找绑定到系统 dns.lookup** [已关闭]
   - 将 undici 的 DNS 查找绑定到系统 `dns.lookup`，修复了通过操作系统解析器解析 MagicDNS / 水平分割主机名时出现的 `ENOTFOUND` 问题。与 #9244 相关。
   - [#9252](https://github.com/earendil-works/pi/pull/9252) / [#9250](https://github.com/earendil-works/pi/pull/9250)

5. **#9080 — feat(tui)：新增跳转到最新消息控件** [已关闭]
   - 新增 TUI 控件以跳转到最新消息，基于此前新消息指示器的相关工作开发。
   - [earendil-works/pi#9080](https://github.com/earendil-works/pi/pull/9080)

6. **#7610 — feat(ai)：新增 LLM Gateway 和 LLM Gateway DevPass 供应商** [开放中]
   - 新增 [LLM Gateway](https://llmgateway.io) 作为内置 `openai-completions` 供应商，由 LLM Gateway 团队贡献。
   - [earendil-works/pi#7610](https://github.com/earendil-works/pi/pull/7610)

7. **#9137 — feat(coding-agent)：新增 Nix flake 支持** [开放中，进行中]
   - 为 coding agent 包添加 Nix flake 支持，目前仍在开发中。
   - [earendil-works/pi#9137](https://github.com/earendil-works/pi/pull/9137)

8. **#9096 — feat(ai,coding-agent)：新增 Meta 供应商，支持 Muse 订阅 OAuth** [开放中]
   - 新增 Meta 作为供应商，支持 Muse 订阅 OAuth；其特性包括每日令牌重签发，以及突发式“伪”流式输出。
   - [earendil-works/pi#9096](https://github.com/earendil-works/pi/pull/9096)

9. **#79 — feat(coding-agent)：监听 .git/HEAD 以感知分支变更** [已关闭]
   - 当 git 分支被外部更改时（例如在另一个终端执行 `git checkout`），自动更新 TUI 页脚。
   - [earendil-works/pi#79](https://github.com/earendil-works/pi/pull/79)

10. **#9163 — feat(tui)：简化剪贴板处理** [已关闭]
    - 移除了一个过于冗余的 Rust 依赖，简化了剪贴板处理，支持在 NixOS 及其他平台上构建。
    - [earendil-works/pi#9163](https://github.com/earendil-works/pi/pull/9163)

---

## 5. 热门讨论
### 创意提议
- **#9207 — 建议：从系统消息中移除“可用工具”部分**
  - 提议从系统提示词中移除静态的“可用工具”列表，以节省令牌。2 👍，0 条评论。
  - [earendil-works/pi#9207](https://github.com/earendil-works/pi/discussions/9207)
- **#9177 — 希望登录时能集成 CommandCode Plan。**
  - 请求在登录时原生集成 CommandCode Plan。1 👍，0 条评论。
  - [earendil-works/pi#9177](https://github.com/earendil-works/pi/discussions/9177)
- **#9213 — 在 README 中嵌入代理友好度评分徽章**
  - 一位社区贡献者分享了 Pi 86.2/100 的代理友好度评分，并提议添加对应徽章。1 👍，0 条评论。
  - [earendil-works/pi#9213](https://github.com/earendil-works/pi/discussions/9213)

### 问答
- **#3373 — 你最喜欢搭配 Pi 代理使用哪些插件、附加组件或扩展？**
  - 一个长期运行的帖子，征集大家喜爱的扩展。8 👍，15 条评论。
  - [earendil-works/pi#3373](https://github.com/earendil-works/pi/discussions/3373)
- **#9146 — 支持按仓库覆盖 API Key 并忽略 auth.json**
  - 请求支持按仓库配置 API 密钥覆盖，而非使用全局 `auth.json`。1 👍，2 条评论。
  - [earendil-works/pi#9146](https://github.com/earendil-works/pi/discussions/9146)

### 展示与分享
- **#9017 — 基准测试：在同一本地模型上对比 Pi 与官方 DeepSeek Harness（16 次运行，可复现）**
  - 分享了 Pi 0.73.1 与 DeepSeek Harness 在同一本地 Qwen3 模型上的配对基准测试结果。1 👍，0 条评论。
  - [earendil-works/pi#9017](https://github.com/earendil-works/pi/discussions/9017)
- **#8803 — 介绍 pi-verdict — 一款极简的 Pi 权限网关**
  - 发布了 `pi-verdict`，一款零依赖的轻量级允许/询问/拒绝权限网关。1 👍，0 条评论。
  - [earendil-works/pi#8803](https://github.com/earendil-works/pi/discussions/8803)

---

## 6. 功能请求趋势
- **供应商灵活性与韧性**：传输错误时跨供应商回退、重试退避时长限制、供应商上报的成本使用统计，以及新增供应商集成（Meta、LLM Gateway、OpenCode Go 会话头）。
- **TUI 打磨**：全屏模式性能修复、跳转到最新消息控件、剪贴板处理简化、LaTeX 渲染改进，以及更好的输入法/终端兼容性。
- **扩展与配置能力**：向扩展暴露模型运行时、按仓库 API 密钥覆盖、自定义工具确认流程，以及基于命名空间的包解析。
- **Windows 平台成熟度**：收集使用模式，从而确定 Windows 开发者相关修复、文档和开箱体验的优先级。
- **缓存与成本优化**：利用未使用的 Anthropic 缓存断点，以及将 OpenRouter 免费层的 maxTokens 限制到基础模型上限。

---

## 7. 开发者痛点
- **Codex 连接不稳定**：`openai-codex` 导致 TUI 卡死的问题（#4945）是评论数最多的单一痛点，目前尚无完整解决方案。
- **Windows 使用摩擦**：Shell 路径行为异常、强制使用 WSL、Shift+Enter 按键问题，以及支持的运行时不明确，导致上手体验不佳（#7547、#9229、#7175）。
- **全屏 TUI 体验倒退**：滚轮滚动缓慢、图片渲染 bug，以及流式输出时的重绘/滚动位置跳动，破坏了全屏使用体验（#9052、#8306、#9240）。
- **供应商路由 / 兼容性意外问题**：Copilot GPT-6 Astra 接口不匹配、OpenRouter 免费层令牌限制、OpenCode Go 请求头要求，以及通过网关访问时 Sonnet-5 编辑调用被截断（#9209、#9224、#9230、#9212）。
-

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周报 | 2026-09-07

---

## 1. 过去7天亮点
本周Qwen Code项目发布了v0.23.0稳定版，同时推出了一批预览版和每日构建版本。核心用户体验改进集中在Web Shell的动态工作流管理，以及分支选择器的Git状态提示功能。社区也在积极推进OpenTUI渲染迁移工作，同时修复CLI、守护进程和Web Shell层面的多项性能、安全及CI稳定性问题。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.23.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0) | 稳定版 | - 分支选择器现在会在“更新项目/提交/推送”操作旁显示Git状态提示（例如 `↓3 · origin/main`、`Up to date`）<br>- 无已知破坏性变更 |
| [v0.23.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.1) | 预览版 | - `feat(web-shell)`：可视化并管理动态工作流运行实例 ([#10594](https://github.com/QwenLM/qwen-code/pull/10594))<br>- `perf(web-shell)`：推导会话对应的工作流项目 |
| [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0) | 预览版 | 功能集与v0.23.1-preview.1完全一致 |
| v0.23.0-nightly.20260906 / 0905 | 每日构建 | 滚动构建版本，包含Web Shell动态工作流与会话工作流推导相关变更 |
| [live-host-v0.2.0](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.2.0) | 组件 | - `fix(ci)`：支持调节共享ECS Vitest并发数 ([#10667](https://github.com/QwenLM/qwen-code/pull/10667))<br>- `feat(cli)`：OpenTUI迁移第四批 |
| [cua-driver-rs-v0.20.3](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3) | 组件 | 预构建的Qwen CUA Driver二进制文件：含经过代码签名的macOS通用二进制、Linux x86_64/arm64版本（要求glibc 2.31+），以及带UIAccess工作进程的Windows x86_64/arm64版本 |

---

## 3. 热点问题
按影响范围、优先级和社区活跃度筛选：

1. **[#8662 将TUI渲染层从ink迁移到OpenTUI（追踪issue）](https://github.com/QwenLM/qwen-code/issues/8662)**  
   *P3 · 增强功能 · 30条评论*  
   这项长期架构迁移工作（从带1000+行自定义补丁的ink 7迁移到OpenTUI）仍是讨论度最高的issue，旨在解决当前技术栈下难以修复的闪屏和渲染限制问题。

2. **[#11198 使用统计遥测会将原始工具错误文本（包括Shell命令行）未脱敏就上传到RUM](https://github.com/QwenLM/qwen-code/issues/11198)**  
   *P1 · 安全 · 数据隐私 · 2条评论*  
   一项严重的隐私/安全问题：默认开启的遥测会发送未脱敏的Shell命令行和工具错误文本。已标记为`ready-for-human`，并列为最高优先级处理。

3. **[#6181 移动端会话切换卡顿（全量同步转录渲染、未压缩的全历史加载）](https://github.com/QwenLM/qwen-code/issues/6181)**  
   *P1 · 性能 · web-shell · 3条评论*  
   移动端Web Shell切换会话时可能卡顿数秒，原因是四层开销叠加：侧边栏轮询、全量转录渲染、未压缩历史加载、每帧O(n)复杂度运算。

4. **[#11180 技能的`PreToolUse`钩子在`--continue`后失效，但指令仍保留在上下文中](https://github.com/QwenLM/qwen-code/issues/11180)**  
   *P1 · 安全 · skills · hooks-events · 3条评论*  
   一项安全回归问题：使用`--continue`继续技能会话时，作为安全闸门的`PreToolUse`钩子会失效，但技能指令仍在上下文中生效。

5. **[#11031 修复：停止在每个导出的HTML文件中嵌入Web Shell运行时](https://github.com/QwenLM/qwen-code/issues/11031)**  
   *P1 · Bug · 已关闭 · 6条评论*  
   已修复导出的HTML会话哪怕是空会话也有约19.5MB的问题，原因是重复打包了React/Web Shell运行时。相关后续issue [#11100](https://github.com/QwenLM/qwen-code/issues/11100) 仍在开放中。

6. **[#11109 release.yml存在重复工作，且一个耗时20分钟的步骤无实际校验内容](https://github.com/QwenLM/qwen-code/issues/11109)**  
   *P2 · CI/CD · 4条评论*  
   本周有两次发布流水线超时，原因是`release.yml`中存在冗余工作，且一个长耗时步骤未执行任何实际校验——这是CI效率的主要痛点。

7. **[#11146 提前中止的工具请求会排在不相关的活跃批次后面等待](https://github.com/QwenLM/qwen-code/issues/11146)**  
   *P2 · core · 工具调度 · 4条评论*  
   `CoreToolScheduler`的一项Bug：已取消的请求仍会排在不相关的活跃批次后面等待，浪费调度器容量并造成不必要的延迟。

8. **[#11186 通道所有权模型未覆盖主目录工作区读取用户范围设置的场景](https://github.com/QwenLM/qwen-code/issues/11186)**  
   *P2 · core · 设置 · daemon · 3条评论*  
   当`qwen serve`绑定到用户主目录时，设置加载器会禁用工作区范围，导致[#11083](https://github.com/QwenLM/qwen-code/pull/11083) 引入的通道所有权模型出现覆盖缺口。

9. **[#11228 右键上下文菜单打开时不拦截按键：输入框和工具审批对话框会响应同一次按键](https://github.com/QwenLM/qwen-code/issues/11228)**  
   *P2 · UI · 快捷键 · 2条评论*  
   `KeypressContext`采用广播分发模型，因此打开的上下文菜单无法拦截按键——导致菜单打开时，输入框或审批对话框会误触发操作。

10. **[#11227 `/effort` 指令未传递给通用的OpenAI兼容后端](https://github.com/QwenLM/qwen-code/issues/11227)**  
    *P2 · 增强功能 · core · 2条评论*  
    `/effort` 命令仅在内部更新状态，但未将值发送给第三方OpenAI兼容API后端（例如本地NInfer部署），这对自托管用户来说是一项功能缺口。

---

## 4. 重要PR进展
本周更新的10个值得关注的PR：

1. **[#11152 feat(cli): OpenTUI功能对齐收尾（对话框、输入框、Shell模式）](https://github.com/QwenLM/qwen-code/pull/11152)**  
   *作者：chiga0 · autofix/takeover*  
   补上了OpenTUI与ink渲染器之间最后一批已知行为差异，覆盖认证对话框启动行为、输入框更新和Shell模式对齐——这是[#8662](https://github.com/QwenLM/qwen-code/issues/8662) 迁移工作的重要里程碑。

2. **[#11086 feat(serve): 将扩展限定到工作区运行时范围](https://github.com/QwenLM/qwen-code/pull/11086)**  
   *作者：ytahdn · autofix/takeover*  
   实现全局扩展目录按工作区通过选定的运行时提供，将扩展状态同步到活跃的工作区运行时中，并更新了守护进程和SDK的访问路径。

3. **[#10504 feat(dingtalk): 显示动态生命周期标签](https://github.com/QwenLM/qwen-code/pull/10504)**  
   *作者：BenGuanRan · autofix/takeover*  
   为钉钉集成添加了本地化、隐私安全的轮次状态反馈（思考中/读取中/搜索中/运行中/编辑中/重试中/替换中），不会暴露原始工具输入/输出。

4. **[#10183 feat(memory): 添加结构化按需召回功能](https://github.com/QwenLM/qwen-code/pull/10183)**  
   *作者：ZijianZhang989 · autofix/takeover*  
   将自动记忆从扁平提示词升级为结构化的推拉召回协议，采用两级引用/标题树结构，并支持针对查询的元数据检索，快速找到相关轮次。

5. **[#11015 feat(channels): 实现命名会话工作树重置（第4B部分）](https://github.com/QwenLM/qwen-code/pull/11015)**  
   *作者：doudouOUC*  
   为工作树隔离的命名Channel会话提供`/clear`、`/new`和`/reset`支持，在重置会话历史的同时保留守护进程认证过的工作树/分支状态。

6. **[#11225 feat(mesh): 添加隐藏主机会话启动器](https://github.com/QwenLM/qwen-code/pull/11225)**  
   *作者：yiliang114*  
   添加了工作区级别的隐藏mesh主机，支持私有启动路由，包含生命周期管理、跨启动复用和桥接回收恢复能力。

7. **[#11169 fix(web-shell): 补全本地文件桥接中的信任闸门和旁观缺口](https://github.com/QwenLM/qwen-code/pull/11169)**  
   *作者：wenshao*  
   作为已合并的本地文件桥接功能（#10962）的后续修复，解决了4项评审发现的问题，包括为工作区路由判断新增保留的“解析中”状态。

8. **[#10421 fix(review): 探针授权的每一次重写都要执行屏幕内容过滤](https://github.com/QwenLM/qwen-code/pull/10421)**  
   *作者：wenshao · review/self-reported*  
   确保效力探针的内容过滤器在每一次树重写步骤（创建、恢复、清理）都执行，补上了未过滤内容可能绕过检查的缺口。

9. **[#10991 refactor(daemon): 解耦扩展激活与刷新](https://github.com/QwenLM/qwen-code/pull/10991)**  
   *作者：callmeYe · autofix/takeover*  
   将扩展激活完成与会话实时刷新解耦，新增`extension_activation_explicit_refresh`能力标志位用于客户端兼容。

10. **[#10188 fix(autofix): 将回归问题计入制动计数，并限制测试弱化改动](https://github.com/QwenLM/qwen-code/pull/10188)**  
    *作者：wenshao · autofix/takeover*  
    补上了自动修复循环中回归防护的两个缺口：现在回归会计入连续失败制动计数，同时对弱化测试的改动进行闸门限制。

---

## 5. 热门讨论
本期无相关讨论数据，该部分暂略。

---

## 6. 功能需求趋势
从开放issue和PR中提炼：
1. **OpenTUI迁移与TUI用户体验改进** — 从ink到OpenTUI的全量迁移，持续推进对话框、输入框、Shell模式和渲染质量的功能对齐。
2. **扩展与运行时隔离** — 工作区级别的扩展、运行时专属的扩展目录，以及更完善的激活生命周期管理。
3. **记忆与上下文管理** — 结构化按需记忆召回、改进的转录规范化，以及重放过程中附件状态的保留。
4. **Agent团队/多智能体稳定性** — 多智能体工作流的持续质量审计和体验需求积压处理。
5. **Channel/命名会话工作树** — 扩展工作树隔离的会话功能，支持重置/清空/新建操作，并完善所有权模型。
6. **Mesh功能集** — 隐藏主机会话、线程状态追踪、每轮运行绑定，以及相关的mesh基础能力。
7. **钉钉与集成用户体验** — 为第三方平台集成提供动态生命周期状态反馈。

---

## 7. 开发者痛点
反复出现的问题和高频需求：
1. **CI稳定性与效率** — 发布流水线频繁超时、`release.yml`存在冗余工作、macOS/Linux端到端测试分片不稳定，以及ECS资源池竞争导致的20分钟平超时。
2. **导出性能臃肿** — 由于运行时包重复，导出的HTML文件体积过大（已部分修复，转录条目清理的后续工作仍在进行中）。
3. **工具调度边界情况** — 已取消的请求卡在队列中、取消时缺少完成清理逻辑、批次优先级Bug导致延迟。
4. **安全与隐私缺口** — 错误日志中未脱敏的遥测数据、内容过滤加固回归、会话续期时技能钩子强制失效绕过。
5. **移动端Web Shell性能** — 由于全量转录渲染、未压缩历史加载和未优化的轮询，会话切换时卡顿严重。
6. **第三方后端兼容性** — `/effort`等功能未传递给通用OpenAI兼容后端，限制了自托管使用场景。
7. **转录重放一致性** — 用户`resource_link`附件在转录规范化过程中丢失，导致通过SDK重建历史时出现问题。
8. **快捷键与UI交互Bug** — 上下文菜单无法拦截按键，导致输入框和对话框中出现意外的并发操作。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*