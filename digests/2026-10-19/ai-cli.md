# AI CLI 工具社区周报 2026-10-19

> 生成时间: 2026-10-19 01:00 UTC | 覆盖工具: 7 个

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

# 跨工具对比报告：AI CLI 开发者工具生态（2026-10-19）
---

## 1. 生态概览
AI CLI 开发者工具生态正处于快速成熟阶段，各竞品在核心智能体编码工作流上趋于同质化，同时通过平台支持、模型灵活性和企业级就绪度实现差异化。本周所有主流工具的开发工作均围绕三大通用主题展开：智能体可靠性（卡顿、子智能体正确性、权限安全）、上下文/内存管理（压缩控制、跨会话状态、持久化内存）以及平台一致性（Windows 稳定性、Linux TUI 优化、远程/SSH 支持）。
生态内对开放互操作标准（MCP、ACP）、多智能体编排和模型供应商灵活性的需求也在持续增长，标志着行业正从单一供应商锁定向可组合、可插拔的 AI 编码工作流转变。开源和社区驱动的工具凭借可扩展的插件系统与第三方生态集成不断扩大影响力，而老牌供应商则在加紧补齐企业管理、安全防护和使用透明度方面的短板。

## 2. 活跃度对比
| 工具 | 热门问题（已追踪） | PR 活跃度（已追踪） | 讨论区（已追踪） | 发布状态（近 7 天） |
|------|----------------------|-----------------------|------------------------|-------------------------------|
| Claude Code | 10 个开放（功能增强 + Bug） | 10 个活跃 PR（核心 + 插件修复） | 无（未提供 Discussions 数据） | 5 次增量发布（v2.1.299 → v2.1.303），均为稳定版 |
| OpenAI Codex | 10 个开放（Bug + 功能需求） | 10 个活跃 PR（9 个已合并，1 个开放） | 14 个活跃话题（创意、问答、作品展示） | 1 次稳定发布（rust-v0.163.0）、3 个 alpha 构建版（v0.164.0-alpha.1/2/3） |
| Gemini CLI | 10 个开放（P1 级 Bug + 功能增强） | 10 个活跃 PR（核心修复 + 用户体验） | 无（未提供 Discussions 数据） | 1 次稳定发布（v0.64.0）、1 个预览版（v0.65.0-preview.0）、5 个 nightly 构建版 |
| GitHub Copilot CLI | 10 个问题（6 个开放，4 个关闭） | 1 个开放 PR（仅维护类） | 无（未提供 Discussions 数据） | 10 次增量发布（v1.0.98 → v1.0.100-1），稳定版/补丁版 |
| OpenCode | 10 个问题（7 个开放，3 个关闭） | 10 个活跃 PR（功能 + Bug 修复） | 无（未提供 Discussions 数据） | 3 次 1.x 系列稳定发布（v1.19.1 → v1.19.3） |
| Pi | 10 个问题（6 个开放，4 个关闭） | 12 个活跃 PR（功能 + 修复） | 8 个活跃话题（创意、问答、作品展示） | 2 次次版本稳定发布（v1.2.0、v1.3.0） |
| Qwen Code | 10 个开放（路线图 + Bug + 功能） | 10 个活跃 PR（核心 + CI + 托管智能体） | 无（未提供 Discussions 数据） | 1 次稳定发布（v0.25.2 CLI/桌面端/TS SDK）、3 个预览/nightly 构建版 |

## 3. 共性功能方向
本周期内 3 个及以上工具社区均出现的需求：
1. **可配置的上下文与压缩控制**（Claude Code、OpenAI Codex、Pi、Qwen Code）：用户要求支持调整或关闭自动压缩阈值、提供上下文使用量可视化、支持服务端压缩，以减少 token 浪费并保留长会话状态。
2. **子智能体与多智能体编排优化**（Claude Code、Gemini CLI、GitHub Copilot CLI、Qwen Code）：用户普遍要求提升子智能体可靠性、支持并行执行、实现权限继承、降低交接延迟、支持父子智能体间共享内存。
3. **会话生命周期管理**（Claude Code、OpenAI Codex、Gemini CLI、Qwen Code）：普遍存在会话归档/取消归档、批量删除、重启后状态持久化、空闲/已完成会话自动清理的需求。
4. **MCP（模型上下文协议）互操作性**（Claude Code、OpenAI Codex、GitHub Copilot CLI、Pi）：所有主流工具都在投入支持 MCP，共同的痛点集中在身份验证、服务端卡顿处理、跨环境 MCP 路由以及基于 RPC 的 MCP 编排。
5. **终端与平台用户体验优化**（全工具）：反复出现的需求包括更好的 TUI 主题、减少流式输出闪烁、优化键盘导航、支持 WSL2/SSH/远程环境剪贴板、实现 Windows/Linux/macOS 功能一致性。
6. **使用量与配额透明度**（Claude Code、OpenAI Codex、Gemini CLI、OpenCode）：用户希望更清晰地了解 token 消耗、配额限制，以及按功能（子智能体、缓存、工具）拆分的使用明细，同时改进配额耗尽时的错误处理。

## 4. 差异化分析
| 工具 | 核心聚焦 | 目标用户 | 技术路径 |
|------|------------|-------------|--------------------|
| Claude Code | 企业团队工作流、Cowork 项目上下文、可观测性 | 企业开发团队、Anthropic 模型重度用户 | 深度集成 Anthropic 模型生态、原生支持 MCP 与 OpenTelemetry、带安全防护的插件化扩展机制 |
| OpenAI Codex | 计算机操作/浏览器控制、实时响应引导、社区驱动扩展 | 通用开发者、OpenAI 模型重度用户、技术爱好者 | 基于 Rust 的高性能核心、深度集成 OpenAI 最新模型特性、繁荣的第三方工具/智能体生态 |
| Gemini CLI | 智能体可靠性、AST 感知代码智能、Google 生态集成 | Google Cloud 用户、专注代码库调研的开发者 | 原生集成 Gemini 模型、投入智能体正确性与代码智能工具建设、增量 nightly 发布节奏 |
| GitHub Copilot CLI | GitHub 生态集成、企业策略管理、沙箱执行 | 企业 GitHub 用户、基于 GitHub 工作流标准化的团队 | 深度 GitHub 平台集成（Skills、仓库信任、管理策略）、HydraFusion 模型路由、沙箱化 Shell 执行 |
| OpenCode | 开源模型灵活性、v2 TUI/权限加固、浏览器自动化 | 开源爱好者、免费/自托管模型用户 | 社区驱动的开放开发模式、1.x/2.x 双发布轨道、基于 MCP 的浏览器扩展、实验性自动模型路由 |
| Pi | 多供应商支持、持久化智能体执行、插件/扩展能力 | 重度用户、自托管部署场景、扩展开发者 | 模块化架构（pi-ai、pi-durable、coding-agent）、原生支持 OpenRouter、为长运行智能体提供持久化执行原语 |
| Qwen Code | 托管智能体平台成熟度、企业租户隔离、SDK 生态 | 基于 Qwen 模型构建的企业团队、自托管部署场景 | 分阶段的托管智能体双路径架构、多语言 SDK、针对自动化工作流的故障门控可靠性测试 |

## 5. 社区动能与成熟度
- **社区活跃度最高**：OpenAI Codex 和 Pi 的社区参与度领先，活跃的 Discussions 频道中展示了大量第三方工具、功能创意和问答内容。Pi 的 PR/问题比也最高，体现出快速迭代节奏和强劲的贡献者动能。
- **迭代速度最快**：GitHub Copilot CLI 7 天内发布了 10 个版本，但 PR 活跃度极低（本周期仅 1 个维护类 PR），表明其采用封闭核心开发模式，仅高频发布补丁。Gemini CLI 和 Qwen Code 发布节奏也很快，设有稳定版/预览版/nightly 多渠道发布。
- **企业就绪度最成熟**：Claude Code 和 GitHub Copilot CLI 在企业级功能（组织级共享、管理策略、安全遥测、沙箱）方面领先，Qwen Code 凭借租户隔离和托管智能体可靠性工作正快速补齐差距。
- **崛起中的开源竞争者**：Pi 和 OpenCode 展现出强劲的社区增长势头——Pi 以持久化执行和多供应商支持形成差异化，OpenCode 则围绕 v2 TUI 和 MCP 浏览器自动化构建开放生态。

## 6. 趋势信号
对开发者和决策者具有参考价值的关键行业趋势：
1. **智能体可靠性成为新战场**：所有工具中，子智能体卡顿、状态上报错误和权限故障都是用户投诉的重灾区。下一阶段的竞争将从功能数量转向智能体正确性、容错能力和透明的执行追踪。
2. **开源模型灵活性渐成标配**：对 BYOK、本地模型支持和多供应商切换的需求（见于 Copilot CLI #3709、Pi 的 OpenRouter 集成、OpenCode 的自动路由）表明，用户对供应商锁定的抵触情绪日益增长。拥有开放供应商生态的工具将在企业和重度用户群体中获得更多市场份额。
3. **持久化长运行智能体正成为核心基础能力**：Pi 的持久化执行工作、Qwen Code 的托管智能体架构，以及社区对暂停/恢复/人工介入工作流的需求，都表明行业正从短时长交互式会话，转向处理多步骤、数小时任务的后台持久化 AI 智能体。
4. **互操作标准（MCP、ACP）正在统一生态**：支持 MCP 现已成为所有主流 AI CLI 工具的基线要求，投入方向正从基础合规转向高级特性，如 RPC 编排、基于 MCP 的浏览器控制和跨工具会话交接。
5. **平台一致性差距仍是主要 adoption 障碍**：Windows 稳定性、Linux TUI 优化、远程/SSH 功能一致性是所有工具共同的痛点。评估 AI CLI 工具的团队应优先针对自身开发环境做平台专项测试，目前尚无工具能完全消除跨平台差距。

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告
*数据截至 2026-10-19 | 来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. 热门技能排行
排名基于社区关注度指标（PR 更新时效、更新频率、与高讨论度 issue 主题的契合度；源数据集中评论数标记为 `undefined`）：

1. **[mcp-builder（MCP 2.0 兼容性修复）](https://github.com/anthropics/skills/pull/1742)**
   - 功能：修复 MCP Builder 技能的导入路径和自定义请求头配置，支持 `mcp>=2.0.0`，适配重命名后的 `streamable_http_client` 及新增的 `create_mcp_http_client` API。
   - 讨论亮点：解决了 MCP 工具开发者广泛反馈的破坏性变更问题，同时针对连接脚本的边界场景补充了修复。
   - 状态：开放（2026-10-08 更新）

2. **[skill-creator（触发评估隔离与跨平台修复）](https://github.com/anthropics/skills/pull/1298)**
   - 功能：修复触发评估得分假阴性问题，解决 Windows 子进程 `select()` 调用失败问题，避免无关工具干扰技能触发扫描。
   - 讨论亮点：关联了多个关于技能评估流水线故障、Windows 兼容性的未解决 issue，是技能开发者的核心痛点之一。
   - 状态：开放（2026-09-16 更新）

3. **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)**
   - 功能：将 Notion 中的产品/技术规范转换为结构化、可执行的任务，附带验收标准与进度追踪，供 Claude Code 执行。
   - 讨论亮点：最受关注的全新工作流技能提案之一，已通过多次迭代更新优化了规范解析的粒度。
   - 状态：开放（2026-10-15 更新）

4. **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)**
   - 功能：面向 Web3 领域的 agent 技能，可对 Solidity/Rust 智能合约进行静态分析，并通过零存储 Merkle 协议将审计证明锚定到 TON 区块链。
   - 讨论亮点：表现突出的垂直领域技能，反映出市场对专业安全工具与区块链工具的需求持续增长。
   - 状态：开放（2026-09-16 更新）

5. **[skill-creator 评估查看器加固](https://github.com/anthropics/skills/pull/1961)**
   - 功能：修复 skill-creator 评估查看器中的安全漏洞，包括脚本逃逸、DNS 重绑定、跨站 POST 及 HTML 转义缺陷。
   - 讨论亮点：直接回应了社区对技能相关安全风险（见 Issue #492）及不可信模型输出处理的担忧。
   - 状态：开放（2026-10-11 更新）

6. **[md2video-audio](https://github.com/anthropics/skills/pull/1703)**
   - 功能：零成本技能，通过 Marp 幻灯片生成与音频合成技术，将 Markdown 文档转换为带拟人化配音的专业 MP4 视频。
   - 讨论亮点：高需求的创意/内容生成类技能，填补了多模态输出能力的空白。
   - 状态：开放（2026-09-15 更新）

7. **[document-typography](https://github.com/anthropics/skills/pull/514)**
   - 功能：面向 AI 生成文档的质量控制技能，可修复孤行词、寡行段落及编号错位问题。
   - 讨论亮点：长期受欢迎的提案，解决了 Claude 文档输出中普遍存在但鲜少被专门提出的痛点。
   - 状态：开放（2026-03-13 更新）

---

## 2. 社区需求趋势
从高评论量 issue 中提炼出的最受期待技能方向如下：
1. **安全与信任**：对技能安全审计工具、信任边界强制执行、安全的技能分发机制有明确需求（驱动来自 [Issue #492: namespace trust abuse](https://github.com/anthropics/skills/issues/492)、[Issue #1394: eval viewer XSS](https://github.com/anthropics/skills/issues/1394)）。
2. **企业协作**：支持组织级技能共享、团队技能库与权限管理，简化内部技能部署流程（驱动来自 [Issue #228: org-wide skill sharing](https://github.com/anthropics/skills/issues/228)）。
3. **创作与评估工具**：稳定可靠的跨平台技能创建、测试与基准测试流水线，可在 Windows 上正常运行，并输出准确的触发/性能得分（驱动来自 [Issue #556: 0% trigger rate in evals](https://github.com/anthropics/skills/issues/556)、[Issue #1383: silent benchmark failures](https://github.com/anthropics/skills/issues/1383)）。
4. **Agent 治理与质量控制**：为 agent 驱动的工作流提供形式化推理关卡、对抗性审查与合规模式（驱动来自 [Issue #412: agent-governance proposal](https://github.com/anthropics/skills/issues/412)、[Issue #1385: reasoning quality gate pipeline](https://github.com/anthropics/skills/issues/1385)）。
5. **文档工具可靠性**：修复文档类技能的 bug，扩展对 DOCX、PDF、ODT 等格式的支持，以处理无效 XML 生成、格式兼容性等边界场景（驱动来自 [Issue #2018: docx merge_runs XML bug](https://github.com/anthropics/skills/issues/2018)、[Issue #486: ODT skill proposal](https://github.com/anthropics/skills/issues/486)）。

---

## 3. 高潜力待上线技能
以下 PR 均处于活跃维护状态，结合近期更新节奏与生态核心优先级的契合度，大概率即将合并上线：
1. **[architecture-advisor](https://github.com/anthropics/skills/pull/2040)** – 为软件架构决策提供选型建议及书面依据，属于 harness SDD 套件的一部分（创建于 2026-10-16，活跃更新中）。
2. **[harness SDD suite](https://github.com/anthropics/skills/pull/2039)** – 包含三项流程类技能，覆盖规范驱动开发、任务调度规范与对抗性评审，已在真实项目中经过实战验证（创建于 2026-10-16，活跃更新中）。
3. **[docx orphaned comment detection](https://github.com/anthropics/skills/pull/1734)** – 文档质量工具，可识别 DOCX 文件中的孤立评论，填补现有文档类技能的能力空白（开放，近期有更新）。
4. **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** – 面向高性能计算用户的 HPC 集群运维技能，支持基于配置的 SSH 连接与 Slurm 工作流调度（开放，功能范围已完整）。
5. **[skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** – 元技能组合，用于评估技能的质量（结构、文档、易用性）与安全性，直接回应社区最核心的信任顾虑（长期开放 PR，相关性极高）。

---

## 4. 技能生态洞察
社区最集中的需求方向是**可信赖的生产级技能工具与治理体系**——涵盖安全的技能创作/评估流水线、清晰的官方/社区技能信任边界，以及正式的质量与安全审查框架，从而支撑团队安全、规模化地采用技能。

---

# Claude Code 社区周报 | 2026-10-19
*数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

---

## 1. 过去 7 天亮点
本周 Claude Code 共发布 5 个增量版本（v2.1.299 → v2.1.303），重点优化可靠性、可观测性和可配置的运行时行为——核心更新包括空闲会话内容压缩、精细化的自动模式模型控制，以及扩展的 OpenTelemetry 链路追踪能力。社区关注点集中在认证 bug、会话管理缺陷，以及子代理工作流导致的异常 token 消耗问题，同时用户对 Cowork 项目上下文的更强管控能力和会话归档功能需求强烈。

---

## 2. 版本发布
过去 7 天共发布 5 个版本，累计更新内容如下：
- **v2.1.303**：常规 bug 修复与可靠性提升。
- **v2.1.302**：新增 `CLAUDE_CODE_AUTO_MODE_MODEL` 环境变量，可选择客户端自动模式分类所用的模型（不影响服务端自动模式）；在 `/config` 中新增**空闲压缩**开关。
- **v2.1.301**：新增 `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` 环境变量，用于限制无人值守重试模式下等待使用限额重置的最长时间；在 `claude-api` 技能中补充 OpenTelemetry 链路追踪指引。
- **v2.1.300**：为模型提示词装饰新增 `virtualText` 功能（提示词内文本不会进入草稿或提交内容）；将 OpenTelemetry `api_request` 事件中的缓存写入指标拆分为 `cache_creation_5m_tokens` 和 `cache_creation_1h_tokens`。
- **v2.1.299**：新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量（仅将 `@` 提及的文件路径传递给 Claude，不传递文件内容）；针对 token 数超 200K 且空闲约 54 分钟的会话，引入终端空闲内容压缩机制。

---

## 3. 热门问题
| # | 问题 | 重要性 | 社区反应 |
|---|-------|----------------|--------------------|
| 1 | [#40043 Allow removal of local folders from a Cowork project's context](https://github.com/anthropics/claude-code/issues/40043) | 用户无法从 Cowork 上下文中排除不需要的本地文件夹，导致上下文冗余和 token 浪费。 | 104 👍，33 条评论——本周获赞最多的开放增强需求，自 2026 年 3 月起持续活跃。 |
| 2 | [#98134 Active Apple Max 20x subscription still recognized as Pro](https://github.com/anthropics/claude-code/issues/98134) | 订阅 Max 20x 套餐的 macOS App Store 用户因订阅档位识别错误，无法使用更高阶功能。 | 22 条评论，正在调查中——影响 Mac 用户的付费功能访问。 |
| 3 | [#61172 `/clear` inherits previous session name instead of resetting it](https://github.com/anthropics/claude-code/issues/61172) | 执行 `/clear` 后仍保留旧会话名称，导致 `/resume` 中出现重复条目，会话管理异常。 | 27 👍，16 条评论，已复现确认——影响核心会话管理的规范性。 |
| 4 | [#67835 Session archive is one-way: no unarchive tool, no Archived view in desktop](https://github.com/anthropics/claude-code/issues/67835) | 归档后的会话实际上无法访问：既没有 MCP `unarchive_session` 方法，桌面端也没有归档会话视图。 | 12 👍，12 条评论——被指出存在数据丢失风险和工作流缺口。 |
| 5 | [#78537 Feature request: org-level default sharing for published artifacts](https://github.com/anthropics/claude-code/issues/78537) | 团队希望发布的技能/例程能默认在组织内共享，而非逐个手动设置共享。 | 27 👍，10 条评论——企业/团队工作流的强烈需求。 |
| 6 | [#88583 claudeAiOauth wiped from Keychain when concurrent Desktop sessions race refresh tokens](https://github.com/anthropics/claude-code/issues/88583) | 桌面端多会话并发时的竞态条件会导致 macOS 钥匙串中的 OAuth token 被清空，用户被迫重新登录。此前的相关修复仅覆盖了 MCP 凭证。 | 10 条评论，4 👍——影响严重的认证回归问题，根因已确认。 |
| 7 | [#73837 Markdown inline code (codespans) ignore custom theme overrides on Linux TUI](https://github.com/anthropics/claude-code/issues/73837) | Markdown 输出中的行内代码使用固定基础调色板颜色，绕过自定义主题的 `overrides` 配置——破坏了无障碍适配和个性化设置。 | 15 👍，9 条评论——长期存在的 TUI 主题不一致问题。 |
| 8 | [#103309 Max 20x: subagents waiting on long Bash commands lose 5-min prompt cache, burn 54% of weekly limit in <24h](https://github.com/anthropics/claude-code/issues/103309) | 长时间运行的 Bash 命令会导致 5 分钟提示词缓存过期，子代理随后会重写全部上下文，造成隐蔽的巨额 token 超额消耗。 | 仅 1 条评论，但成本/透明度影响严重——被列为高级用户的关键回归问题。 |
| 9 | [#97729 Desktop: in-app Browser in SSH remote sessions](https://github.com/anthropics/claude-code/issues/97729) | 用户希望连接 SSH 远程会话时也能使用内置浏览器，而非仅支持本地环境。 | 8 👍，5 条评论——远程优先的桌面端功能对等需求日益增长。 |
| 10 | [#103308 memory: project subagent spawn creates empty `.claude/agent-memory/<agent>/` under parent session cwd](https://github.com/anthropics/claude-code/issues/103308) | 子代理内存初始化时会在父会话的工作目录中生成孤立目录，而非写入正确的工作树位置。 | 仅 1 条评论，但指向一类更广泛的子代理隔离/状态管理 bug。 |

---

## 4. 关键 PR 进展
| # | PR | 描述 |
|---|----|-------------|
| 1 | [#94847 diff: the first edit opens the pane only when it has a file to list](https://github.com/anthropics/claude-code/pull/94847) | 修复了差异面板空打开的问题（例如写入被忽略的文件或仓库外文件时），现在会等到确认有受跟踪的文件变更后才打开面板。 |
| 2 | [#89404 validate-agent.sh: don't abort at the first warning and stop false-flagging valid agents](https://github.com/anthropics/claude-code/pull/89404) | 修复了插件开发验证器中 `set -euo pipefail` 导致的提前中止和误报问题；解决了 issue #83803。 |
| 3 | [#97293 mods: declarations carry `process.run` truncation flags and list entries' `mtimeMs`](https://github.com/anthropics/claude-code/pull/97293) | 为 `$.process.run` 结果的 `isStdoutTruncated`/`isStderrTruncated` 和 `$.fs.list` 条目的 `mtimeMs` 补充类型声明，并更新了测试模拟对象。 |
| 4 | [#66416 fix(plugin-dev): validator scripts abort on first finding due to `set -e`](https://github.com/anthropics/claude-code/pull/66416) | 与 #89404 解决同一验证器中止问题，覆盖三个插件开发脚本（`validate-agent.sh`、`hook-linter.sh`、`validate-hook-schema.sh`）。 |
| 5 | [#27140 Add memory-bridge plugin for session context consolidation](https://github.com/anthropics/claude-code/pull/27140) | 推出 `memory-bridge` 插件，提供 `/bridge` 命令用于将经验沉淀到持久记忆（MEMORY.md、CLAUDE.md、技能）中，并在接近自动压缩阈值时提供提醒性 Stop 钩子。 |
| 6 | [#97688 sec-default: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688) | 在启用 `sec-default` 的组织中，防止用户级插件丢弃或篡改安全采集器的遥测记录，保障审计完整性。 |
| 7 | [#57888 Scope `child_process_exec` to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888) | 修复了安全提醒钩子的误报问题：此前 Python 的 `asyncio.create_subprocess_exec(` 会命中针对 Node.js `child_process.exec()` 的 `exec(` 规则。 |
| 8 | [#95698 fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with a quoted path](https://github.com/anthropics/claude-code/pull/95698) | 修复了三个内置插件的钩子执行失败问题，方式是通过 `bash` 并使用正确转义的路径来调用它们的 `.sh` 钩子（相关 issue #95673、#78490）。 |
| 9 | [#98374 diff: the pane reads the diff again after a rebase that finished](https://github.com/anthropics/claude-code/pull/98374) | 确保变基完成后差异面板能正确刷新，而非停留在“无法获取差异”状态。 |
| 10 | [#95423 diff: a shell command the tool held read-only fetches nothing](https://github.com/anthropics/claude-code/pull/95423) | 在执行只读 shell 命令（如 `ls`、`grep`、`cat`）后跳过差异重新获取，与内置面板行为保持一致，减少不必要的操作。 |

---

## 5. 热门讨论
本周期无 GitHub Discussions 数据。

---

## 6. 功能需求趋势
从本周的 issue 活动来看，三个清晰的功能方向逐渐显现：
1. **更完善的上下文控制与记忆管理**：核心需求包括从 Cowork 上下文中移除本地文件夹（#40043）、原生多上下文可视化（#18027），以及跨会话的持久记忆桥接（#27140）。
2. **完整的会话生命周期管理**：用户需要支持双向归档并提供归档会话视图（#67835）、修复 `/clear` 后的会话命名问题（#61172），以及更丰富的侧边栏组织能力（含子分组和未读标记）（#102108）。
3. **远程与跨设备工作流拓展**：对 SSH 远程会话支持内置浏览器（#97729）、通过设备选择器从移动端启动桌面会话（#91815）的需求日益增长。
4. **团队/企业管理能力**：发布产物的组织级默认共享（#78537）、通过 Claude 应用网关支持 1 小时提示词缓存 TTL（#98793）是企业用户的核心诉求。

---

## 7. 开发者痛点
本周反复出现的问题包括：
1. **跨平台认证不稳定**：macOS 钥匙串 token 竞态（#88583）、Apple 订阅档位识别错误（#98134）、GitHub Codespaces OAuth “无效代码”错误（#91176）都会导致用户被迫重新登录、无法访问功能。
2. **token 使用不透明且异常**：因子代理工作流中长命令导致提示词缓存过期，会无声消耗使用限额（#103309），用户无法清晰了解成本构成。
3. **桌面端/CLI 功能不对等**：`immediate: true` 的插件命令在桌面端无法立即执行（#101863）、macOS 桌面端提示建议功能失效（#103259）、Windows 桌面端远程控制失败但 CLI 正常（#103301）。
4. **插件与代理工具脆弱性**：验证器脚本遇警告即中止（#89404、#66416）、钩子在路径边界场景下失败（#95698）、子代理内存隔离失效导致目录泄露到父工作区（#103308）。
5. **主题与用户体验不一致**：Linux TUI 下 Markdown 行内代码忽略自定义主题覆盖（#73837），差异面板在常见场景下出现空状态或过期数据（已有多个在研 PR 处理）。

---
*本摘要于 2026-10-19 基于 GitHub 仓库公开数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区周报 | 2026-10-19

---

## 1. 过去 7 天亮点
本周 **rust-v0.163.0** 稳定版正式发布，带来了重新设计的 `/config` 偏好设置中心以及实时中途响应调控功能；同时 v0.164.0 已推出三个 Alpha 构建版本，标志着下一个版本正处于快速迭代阶段。社区 bug 反馈中，Windows 稳定性问题和 Computer Use/浏览器控制失败问题占比最高；而完成通知、可配置上下文压缩等长期被呼吁的功能需求热度持续攀升。更广泛的生态中也涌现出一批社区打造的工具，覆盖任务交接、会话编排、智能体护栏等场景。

---

## 2. 版本发布
所有版本均基于 `openai/codex` 的 Rust 核心开发：
- **[rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0)**（稳定版）：
  - 全新 `/config` 界面，支持跨类别偏好搜索、设置即时生效，可查看哪些修改需要重启生效（[#52990](https://github.com/openai/codex/issues/52990)、[#53429](https://github.com/openai/codex/issues/53429)）。
  - 支持在 Codex 响应过程中发送后续消息，实现轮次中途输出调控；中断轮次时也会同时终止运行中的代码模式单元。
- **[rust-v0.164.0-alpha.1 / alpha.2 / alpha.3](https://github.com/openai/codex/releases)**（预发布版）：v0.164 早期预览版本，详细更新日志尚未公布。
- 额外 v0.163 Alpha 构建：`v0.163.0-alpha.8` 至 `alpha.11`，以及 `alpha.10.1` 和 `alpha.10.2`（预发布稳定迭代版本）。

---

## 3. 热门问题
| 问题 | 重要性 | 社区反馈 |
|-------|----------------|--------------------|
| [#25271 Computer Use 无法在 Windows 上识别 Chrome URL](https://github.com/openai/codex/issues/25271) | 导致 Windows 上 Computer Use 核心功能失效——哪怕是基础的 `chrome://newtab` 地址都无法解析。 | 62 条评论，12 👍；活跃度极高，2026 年 5 月首次上报，至今仍未解决。 |
| [#3962 Codex 完成提示/任务时播放提示音](https://github.com/openai/codex/issues/3962) | 得票最高的功能需求：在多标签/多窗口间工作的用户需要听觉提示来感知长时任务的完成。 | 56 条评论，201 👍；是历史最久、最受欢迎的未关闭增强需求之一。 |
| [#4106 自动压缩参数可控](https://github.com/openai/codex/issues/4106) | 硬编码的约 22 万 token 压缩阈值会影响长代码会话体验；专业版用户希望获得完全控制权，包括关闭压缩的选项。 | 29 条评论，126 👍；依赖持久上下文的高级用户需求强烈。 |
| [#52873 dot 无法读取用户创建的 Codex 线程](https://github.com/openai/codex/issues/52873) | 核心互操作性缺陷：`dot` CLI 能发现本地项目，但因后端格式/区域错误无法读取原生 Codex 线程。 | 17 条评论，5 👍；目前正在积极排查中。 |
| [#40091 应用内浏览器 Basic Auth 对话框闪现后消失](https://github.com/openai/codex/issues/40091) | macOS 应用无法通过内置浏览器访问受 HTTPS Basic Auth 保护的站点，阻碍了大量企业/内部工作流。 | 11 条评论，2 👍。 |
| [#25914 补充文档：应用服务器客户端发现当前桌面端活动线程的方式](https://github.com/openai/codex/issues/25914) | 基础集成路径缺失文档：本地工具没有官方支持的方式来接入当前打开的 Codex 桌面端会话。 | 10 条评论，2 👍；对扩展和工具开发者至关重要。 |
| [#45006 Codex Chrome 浏览器控制失败](https://github.com/openai/codex/issues/45006) | macOS 上系统安装的 Chrome 浏览器控制失败，限制了 Apple Silicon 设备的 Computer Use 能力。 | 10 条评论。 |
| [#54841 BYOK 模式下搭配本地工具时，工作模式无法发送消息](https://github.com/openai/codex/issues/54847) | Windows 上的 BYOK（自带密钥）用户无法同时使用工作模式和本地浏览器/计算机工具——这对自托管/企业工作流是严重的功能倒退。 | 9 条评论，5 👍。 |
| [#39839 已归档聊天页面无删除选项](https://github.com/openai/codex/issues/39839) | 用户体验不一致：无法从归档视图删除已归档聊天，与官方帮助中心文档描述不符。 | 6 条评论，9 👍；相对于问题复杂度，用户不满情绪较高。 |
| [#50923 Windows 并发轮次最终导致工作区路由超时 + MCP 卡顿](https://github.com/openai/codex/issues/50923) | Windows 桌面应用在多会话并发工作时频繁卡顿，影响 MCP 发现和轮次队列处理。 | 6 条评论；问题可复现，已有明确的观测数据。 |

---

## 4. 重要 PR 进展
以下 PR 均来自 `openai/codex` 仓库：
1. **[#55149 安装成功后清理未使用的独立发布版本](https://github.com/openai/codex/pull/55149)**（已合并）：安装后清理旧的独立发布版本，同时保留当前/上一版本以及运行中进程使用的版本，减少磁盘占用。
2. **[#55144 新增仅观测用的模型请求生命周期钩子](https://github.com/openai/codex/pull/55144)**（已合并）：新增 `PreModelRequest` / `PostModelRequest` 钩子，覆盖重试场景，并提供模型、会话、轮次、子智能体和 token 用量等上下文——支持自定义可观测性工具开发。
3. **[#54961 特性开关：允许智能体消息唤醒空闲的根会话](https://github.com/openai/codex/pull/54961)**（已合并）：支持在父会话结束后，工作智能体唤醒空闲会话，无需依赖未完成的持久休眠（默认关闭）。
4. **[#54930 为应用服务器 WebSocket 添加协商式 zstd 压缩](https://github.com/openai/codex/pull/54930)**（已合并）：为 TCP 和 Unix 套接字 WebSocket 添加 zstd 流压缩，减少大型工具输出和响应流的带宽占用。
5. **[#54754 降低工具 JSON 模式的内存开销](https://github.com/openai/codex/pull/54754)**（已合并）：优化 `JsonSchema` 存储（将字符串/序列存入 Arc，移除未使用的 map 容量），降低大型工具目录的内存占用。
6. **[#54742 将斜杠命令前缀渲染为编辑器提示标记](https://github.com/openai/codex/pull/54742)**（已合并）：将斜杠命令的开头 `/` 移入不可编辑的提示标记中，与 shell 模式的 `!` 行为对齐，保持历史记录中的偏移量一致性。
7. **[#54741 通过 `multi_env_copy_file` 特性开关控制文件复制扩展](https://github.com/openai/codex/pull/54741)**（已合并）：为即将推出的跨环境文件复制扩展添加默认关闭的开关，表明多上下文文件工作流正处于积极开发中。
8. **[#54761 将 `zip` 升级至 9.0.0 并更新插件归档提取逻辑](https://github.com/openai/codex/pull/54761)**（已合并）：升级 zip  crate，确保插件归档保留可执行权限，同时出于安全考虑移除 setuid/setgid/粘滞位。
9. **[#54763 停止对托管守护进程应用 macOS 后台优先级](https://github.com/openai/codex/pull/54763)**（已合并）：移除 macOS 上对托管应用服务器/更新进程的 `taskpolicy -b` 包装，修复后台智能体工作的性能节流问题。
10. **[#30866 修复(应用服务器)：恢复时协调已加载的线程历史](https://github.com/openai/codex/pull/30866)**（开放中）：在 `thread/resume` 时将已加载的空闲线程与其持久化回滚状态进行协调，支持回滚/历史注入的序列化，并在活动轮次中保留实时覆盖层。

---

## 5. 热门讨论
### 创意想法
- **[#3962 (Issue) 完成声音通知](https://github.com/openai/codex/issues/3962)**——被交叉引用为最受期待的用户体验改进。
- **[#50754 功能需求：向已有的本地 Codex 桌面端聊天推送事件](https://github.com/openai/codex/discussions/50754)**——希望提供官方支持的方式，让外部应用无需轮询即可将异步结果推送到已打开的桌面会话中（1 条评论，1 👍）。
- **[#54124 模型选择器自定义快捷键](https://github.com/openai/codex/discussions/54124)**——请求添加键盘快捷键，无需打开选择器即可切换模型（1 条评论，1 👍）。
- **[#54390 最新 CLI 版本感觉是一种倒退](https://github.com/openai/codex/discussions/54390)**——有用户批评新的会话/线程功能为已经使用 tmux/zellij 的终端用户增加了不必要的冗余（2 条评论，1 👍）。

### 问答
- **[#2251 Codex 使用限制](https://github.com/openai/codex/discussions/2251)**——持续讨论的问题：Plus 套餐的限制（每周 3000 次思考）在 ChatGPT 应用和 Codex 中是否一致（59 条评论，57 👍）。
- **[#8503 尽管代码审查用量显示剩余 100%，仍提示“已达使用上限”](https://github.com/openai/codex/discussions/8503)**——GitHub 代码审查连接器错误提示配额耗尽；目前正在排查中（29 条评论，13 👍）。
- **[#45938 PreToolUse 可以阻止/重写调用，但无法替换工具结果——这是有意设计的边界吗？](https://github.com/openai/codex/discussions/45938)**——探讨钩子 API 的设计边界，用于构建自定义“体验”层（5 条评论，1 👍）。
- **[#52835 AI 辅助 KPI 管理系统：4 个月还没做出可用应用——求建议](https://github.com/openai/codex/discussions/52835)**——非开发者出身的运营经理寻求用 Codex 构建业务应用的实用指导（3 条评论，1 👍）。

### 作品展示
- **[#49129 Codex CLI 进入全屏时代](https://github.com/openai/codex/discussions/49129)**——官方演示全新全屏终端 UI，支持可展开差异对比、固定编辑器、交互式复制功能（7 条评论，5 👍）。
- **[#54335 agent-guard-checks：4 个 MIT 许可的编码智能体工作流检查工具](https://github.com/openai/codex/discussions/54335)**——轻量级 Python CLI 工具集，涵盖完成声明提醒、不可逆命令预检、人工修正处理、现有内容预检功能（4 条评论，1 👍）。
- **[#55086 KiraBridge + ThreadDesk：7 款工具组成的语音驱动氛围编程技术栈](https://github.com/openai/codex/discussions/55086)**——社区打造的工具集，支持范围化任务交接、预算限制、跨中断的项目上下文保持（3 条评论，1 👍）。
- **[#54976 ctx-kit：面向 Codex + Claude Code 的基于文件的任务交接工具](https://github.com/openai/codex/discussions/54976)**——基于 Markdown 的工作流，可将任务状态保存到项目文件中，方便其他聊天/智能体接手工作（2 条评论，1 👍）。
- **[#54302 SWEGCA-VRS-FCC：用全上下文组装替代压缩的 Codex CLI 分支](https://github.com/openai/codex/discussions/54302)**——实验性 Linux 分支，移除了压缩功能，使用 `libvrs` 从原始会话记录组装模型请求（2 条评论，1 👍）。
- **[#53200 Codex 额度重置提醒服务（短信/Telegram）](https://github.com/openai/codex/discussions/53200)**——社区打造的通知服务，推送额度重置公告，还提供按时率仪表盘（1 条评论，2 👍）。

---

## 6. 功能需求趋势
1. **可配置的上下文控制**：用户强烈希望自动压缩阈值可调整（或可关闭），对应获 126 赞的 #4106 以及 #54302 中的实验性全上下文 CLI 分支。
2. **通知与感知类用户体验**：听觉/视觉完成提醒（#3962，201 👍）和跨会话状态追踪工具，仍是长时任务场景下用户的首要诉求。
3. **互操作性与可扩展性**：
   - 提供接入活动桌面端线程的官方应用服务器 API 文档（#25914）
   - 向现有聊天推送事件的能力（#50754）
   - 扩展钩子能力（例如 #45938 中提到的工具结果替换）
4. **多智能体 / 跨上下文工作流**：ctx-kit、estafeta、Octuo 等交接工具的爆发式涌现，表明用户对原生支持任务委派、跨会话状态、多智能体编排有强烈需求。
5. **自定义能力**：包括自定义快捷键（#54124）、可通过特性开关关闭的可选 UI 冗余功能（#54390）、BYOK 模式功能对齐（#54841）。

---

## 7. 开发者痛点
1. **Windows 平台不稳定**：反复出现的进程崩溃问题（#55088 —— 20 小时内崩溃 6 次）、MCP/并发卡顿（#50923）、沙箱执行受阻（#51736）、语音输入时 V8 内存溢出（#50236）、编辑器 UI 消失（#43274）。
2. **Computer Use / 浏览器控制脆弱**：全平台普遍存在失败问题：Windows Chrome 地址检测（#25271）、macOS Chrome 控制（#45006）、macOS Computer Use 服务启动失败（#52191）、Windows CUA 初始化退出（#54101）、Basic Auth 对话框异常（#40091）。
3. **使用限制不一致且不透明**：用户对 ChatGPT Plus 限制是否适用于 Codex 存在困惑（#2251）、代码审查中出现虚假的“已达上限”错误（#8503）、过度自动审查调用导致配额消耗突增（#49572）、重置行为不明确（#55145）。
4. **Dot / 应用服务器互操作性缺陷**：`dot` 无法读取原生 Codex 线程（#52873）、跨中继任务跟进拒绝有效授权（#50521）、委派任务同意权限无法正常传播（#51349、#51834）、云端任务创建间歇性失败（#52449）。
5. **BYOK 模式功能倒退**：Windows 上工作模式 + 本地工具组合无法使用（#54841），阻碍企业/自托管场景应用。
6. **会话管理用户体验缺陷**：项目会话导致全局最近列表混乱（#44334）、已归档聊天缺少删除选项（#39839）、移动端与桌面端同步不一致（#53489）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区周报 | 2026-10-19
*数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

---

## 1. 近 7 天亮点
Gemini CLI 项目发布了稳定版 v0.64.0、预览版 v0.65.0 以及多个 nightly 构建（最新为 v0.66.0-nightly.20261018），核心优化方向为 UI 稳定性、智能体执行准确性与工作流打磨。社区关注度仍高度集中在智能体可靠性（卡顿、状态上报错误、子智能体能力局限），以及终端交互、配额处理、设置持久化相关的用户体验改进上。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) | 稳定版 | 实现 A2A 服务 V1→V2 设置迁移；打通 `PromptResponse.usage` 并为 ACP 新增 `usage_update` 通知 |
| [v0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0) | 预览版 | 在不受信任的文件夹中强制启用只读工作区设置；修复会话恢复时工具响应轮次重复的问题 |
| [v0.65.0-nightly.20261012 – v0.65.0-nightly.20261014](https://github.com/google-gemini/gemini-cli/releases) | Nightly | 修复 Unicode 字符展开时反向搜索的高亮索引问题；将仅含空白字符的 UTF-16/UTF-32 文件识别为空文件；单个扩展未通过白名单校验时仍会继续加载其他扩展 |
| [v0.66.0-nightly.20261016 – v0.66.0-nightly.20261018](https://github.com/google-gemini/gemini-cli/releases) | Nightly | 新增横幅提示 Gemini CLI 未针对 Gemini 4 优化；清理 README 中已过时的内容；修复 UI 同步问题；清理 CI 中不受支持的配置项 |

---

## 3. 热门问题（按影响范围与社区参与度排名前 10）
1. **[#22323: 子智能体达到 MAX_TURNS 后仍上报目标执行成功](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   P1 优先级 Bug：`codebase_investigator` 即使在完成分析前就达到最大轮次限制，仍会返回 `status: success` 且终止原因为 `GOAL`，对用户隐藏了中断状态。共 13 条评论，截至 2026-10-19 仍在活跃跟进。

2. **[#21409: 通用智能体无限卡顿](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   P1 优先级 Bug，获 8 个 👍（社区参与度最高）：通用智能体在执行创建文件夹这类简单任务时会永久无响应；用户反馈目前唯一的解决办法是显式禁用子智能体委派功能。共 8 条评论。

3. **[#19873: 零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   高成本增强提案：利用 Gemini 3 模型原生的 bash 亲和性，为 POSIX 工具执行添加安全沙箱，在模型偏好的工作流与用户安全之间取得平衡。共 9 条评论。

4. **[#22745: 评估 AST 感知的文件读取、搜索与映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   EPIC 跟踪项：调研基于 AST 感知的工具链，旨在减少 token 冗余、降低因读取不匹配导致的额外轮次，并提升代码库导航效率。共 7 条评论。

5. **[#21968: Gemini 不会自主调用技能与子智能体](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   用户反馈的行为缺陷：即使是高度匹配的任务（例如 gradle/git 操作），模型也几乎不会主动调用自定义技能或子智能体，必须由用户显式指令触发。共 7 条评论。

6. **[#21983: 浏览器子智能体在 Wayland 环境下运行失败](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   P1 优先级平台 Bug：浏览器子智能体在搭载 Wayland 的 Linux 系统上会崩溃，导致大量用户无法使用基于智能体的浏览器自动化功能。共 4 条评论。

7. **[#22267: 浏览器智能体忽略 settings.json 中的覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   Bug：尽管 AgentRegistry 在初始化时已正确合并配置，但浏览器智能体仍不生效全局/项目级 `settings.json` 中的配置（例如 `maxTurns`）。共 4 条评论。

8. **[#24246: 启用超过 128 个工具时返回 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   扩展性 Bug：当启用的工具超过 128 个时，Gemini CLI 会返回 400 错误，需要更智能的工具范围限制逻辑。共 3 条评论，标记为 needs-information。

9. **[#22672: 智能体应停止/劝阻破坏性操作](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   安全功能需求：当存在更安全的替代方案时，模型仍偶尔会使用 `git reset --force` 这类破坏性命令；用户希望对高风险操作设置防护机制。共 3 条评论，1 个 👍。

10. **[#22465: CLI 在交互式提示处卡住（例如创建 Vite 应用时）](https://github.com/google-gemini/gemini-cli/issues/22465)**  
    工作流 Bug：智能体运行带交互式提示的工具（例如 `npm create vite`）时会卡住，无法自动处理 stdin 提示。共 2 条评论。

---

## 4. 核心 PR 进展（10 项最受关注的变更）
1. **[#29800: 仅在 Auto 配额耗尽时才跨模型等级降级](https://github.com/google-gemini/gemini-cli/pull/29800)**  
   核心修复：重构 Auto 模式的配额路由逻辑，仅在配额真的耗尽时才在 Pro/Flash 等级间切换，修复了会话永久卡死和容量故障误判的问题。

2. **[#29762: 切换认证身份时保留磁盘上的编辑内容](https://github.com/google-gemini/gemini-cli/pull/29762)**  
   设置修复：避免保存认证变更时覆盖用户已修改的 `settings.json` 内容；仅写入变更的属性路径，而非重写整个启动快照。

3. **[#29629: 限制待渲染纯文本高度以减少流式输出闪烁](https://github.com/google-gemini/gemini-cli/pull/29629)**  
   UX 改进：限制 `MarkdownDisplay` 中流式纯文本的高度以适配终端，消除了每次流式更新时全屏清空重绘的问题。

4. **[#29799: 保留配额中断的会话，按 Esc 可停止](https://github.com/google-gemini/gemini-cli/pull/29799)**  
   可靠性修复：当请求因配额不足或用户取消而中断时，保留对话历史以便后续恢复；现在按 Esc 键可立即关闭配额重试对话框。

5. **[#29818: 改进 /skill-name 激活提示并补充手动激活文档](https://github.com/google-gemini/gemini-cli/pull/29818)**  
   功能优化：强化了手动激活技能的默认提示（此前仅为 `Use the skill <name>`），并正式完善了 `/<skill-name>` 工作流的文档说明。

6. **[#29801: 修复 MCP 代理 fetch 与 Undici dispatcher 的配对问题](https://github.com/google-gemini/gemini-cli/pull/29801)**  
   兼容性修复：通过将 fetch 与正确的 Undici dispatcher 配对，解决了 Node 26 上 HTTP MCP 连接失败的问题，确保 JSON/SSE 初始化时认证头正常传递。

7. **[#29700: 同步工作区 package.json 版本与 lockfile，并在 CI 中强制校验](https://github.com/google-gemini/gemini-cli/pull/29700)**  
   构建基础设施：将工作区依赖版本与 `package-lock.json` 对齐，并扩展 CI 检查以防止版本不一致，支持 Nix 等全封闭构建工具。

8. **[#29621: 保留子智能体多模态工具响应的各部分内容](https://github.com/google-gemini/gemini-cli/pull/29621)**  
   智能体修复（已关闭/合并）：修复了本地子智能体向父模型返回工具结果时，函数响应附带的图像数据被丢弃的问题。

9. **[#29810: 模型等级解析为首选选项时保留别名的 generateContentConfig](https://github.com/google-gemini/gemini-cli/pull/29810)**  
   核心修复：避免当解析后的模型与等级的首选选项匹配时，`customAliases` 条目静默丢失自定义 `generateContentConfig`（温度、最大 token 数、思考层级）。

10. **[#29806: WSL2 剪贴板降级方案与非 PNG 图像格式支持](https://github.com/google-gemini/gemini-cli/pull/29806)**  
    平台修复：通过新增 Wayland/X11 显示服务器降级方案与 `image/bmp` 格式支持，修复了 WSL2 与极简 Linux 环境下的图片粘贴（`Alt+V`）问题。

---

## 5. 热门讨论
*略：数据集未提供 GitHub Discussions 相关数据。*

---

## 6. 功能需求趋势
1. **更智能的智能体工具与子智能体编排**：需求包括自动调用技能/子智能体、带共享内存的并行子智能体协作，以及通过 `settings.json` 发现子智能体。
2. **AST 感知的代码智能**：社区对基于 AST 的文件读取、搜索与代码库映射有强烈需求，以期降低 token 消耗并提升代码库调研任务的精准度。
3. **破坏性操作的安全防护**：要求针对高风险命令（强制推送、数据库修改、破坏性 git 操作）内置保护机制，并增加确认提示。
4. **持久化文件型任务追踪**：推动用持久化文件型 CRUD 追踪器替代上下文内的待办列表，解决上下文失效与跨会话记忆丢失问题。
5. **浏览器智能体弹性能力**：需求包括自动会话接管、锁恢复，以及更广泛的平台支持（Wayland、自定义配置文件）。
6. **更强的可观测性**：希望能通过 `/chat share` 更便捷地查看子智能体执行轨迹，并在 Bug 报告中提供更丰富的上下文（包括子智能体内部状态）。

---

## 7. 开发者痛点
1. **智能体可靠性回退**：通用智能体卡顿、MAX_TURNS 失败时错误上报成功状态、子智能体执行 Bug 是上报最多的高严重级别问题。
2. **终端用户体验不佳**：响应流式输出闪烁、调整窗口大小时行为异常、对话框/取消流程后焦点管理问题，是持续引发用户不满的来源。
3. **设置与认证行为不符合预期**：认证变更时设置被覆盖、浏览器智能体忽略配置覆盖、配额状态不透明，都降低了用户对配置工作流的信任。
4. **平台兼容性缺口**：Wayland 下浏览器智能体故障、WSL2 剪贴板限制、智能体文件的符号链接支持不足，给非标准 Linux 环境用户带来了使用障碍。
5. **工具规模限制**：128 个工具的上限会触发 400 错误，阻碍了拥有大量自定义工具/扩展的用户使用。
6. **交互式提示处理能力不足**：智能体无法处理交互式 CLI 提示（例如脚手架工具），导致常见开发工作流需要用户手动介入。
7. **临时文件创建不受控**：模型会在各个目录中生成零散的临时脚本，给维护干净 git 工作树的用户带来了清理负担。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 | 2026-10-19

---

## 1. 近7天亮点
本周共发布10个增量版本（v1.0.98 至 v1.0.100-1），重点优化了会话可靠性、MCP 稳定性、沙箱代理能力，并新增 Gemini 4 Argon 支持，同时修复了 MCP 服务器挂起和凭据信任失败等问题。社区反馈的问题主要集中在模型提供商灵活性（BYOK/本地模型切换）、会话性能瓶颈，以及 Windows、macOS 和远程 SSH 环境下的跨环境兼容性缺口。本周仅新增1个 PR，为功能需求提交流程的模板更新。

---

## 2. 版本发布
过去7天累计发布10个版本，核心变更如下：

- **v1.0.100-1**
  - 优化：统一会话浏览器现已作为 `/sessions`、`/session` 和 `/resume` 的默认界面；账号发现结果上限设为500条，并支持 `Retry-After` 响应头。
  - 修复：沙箱主机规则流量现在会遵循 `HTTPS_PROXY` 和 `HTTP_PROXY` 环境变量。
- **v1.0.100-0**
  - 优化：当受防护的主机变更时，会提示更新沙箱代理 CA 证书。
  - 修复：策略变更时，现有会话中的托管插件会正确更新激活状态；MCP 服务器在工具加载阶段挂起时，会话不再卡死。
- **v1.0.99-3**
  - 新增：`--disable-client-telemetry` 参数，用于关闭客户端遥测数据上传。
  - 修复：沙箱内执行 shell 命令时，若出现凭据代理证书信任失败，会给出说明并提供在沙箱外重新执行的合规选项；未保存的会话重新打开时，已保存的 `/diff` 评审评论会被保留。
- **v1.0.99-2**
  - 优化：当管理员托管的设置覆盖了你选择的模型时，会显示清晰提示；在线会话默认启用语义代码搜索。
  - 修复：Linux 下的沙箱命令启动更稳定，不再出现偶发的回环接口配置失败；从 MCP 资源详情页返回导航功能正常。
- **v1.0.99-1**
  - 新增：`--trust-folder` 参数，适用于通过 `-p` 或标准输入管道启动的一次性提示模式会话；支持通过 `copilot plugin install "ghapp://air/install?..."` 从 GitHub 安装链接安装已验证的 Skills/插件。
  - 优化：Microsoft Entra 的 `/login` 支持缓存的账号选择。
- **v1.0.99-0**
  - 新增：不带参数的 `/share` 会打开全屏操作菜单，用于分享当前会话。
  - 优化：`/sandbox` 支持仅在当前会话启用沙箱（不全局生效）；受信任仓库的插件会在聊天运行前自动安装/更新。
- **v1.0.98**（2026-10-14）
  - 新增 Gemini 4 Argon 支持；修复了 Node 子进程退出信号丢失导致的命令钩子可靠性问题；分屏会话切换后，MCP 状态和 `/mcp` 命令保持同步；会话恢复时会跳过已废弃的待权限请求。
- **v1.0.98-2**
  - 优化：可通过 `Ctrl+E` 展开 `/ask` 的回答，`Ctrl+Y` 复制完整回答，通过 `/ask` 或 `/btw` 重新打开上一个已完成的回答。
  - 修复：Node 子进程退出信号丢失场景下的命令钩子可靠性问题。
- **v1.0.98-1**
  - 新增 Gemini 4 Argon 支持；修复了分屏切换后的 MCP 状态同步问题，以及会话恢复的权限处理问题。
- **v1.0.98-0**：通用修复与变更。

---

## 3. 热点问题
过去7天最受关注的10个问题，按社区影响和参与度排序：

1. **#4998 [已关闭] [area:mcp] macOS 更新/重启后 Copilot CLI 无法使用，因 `.mcp-writer.binding` 保留了过期的文件系统设备 ID**  
   [链接](https://github.com/github/copilot-cli/issues/4998) | 11 条评论 | 11 👍  
   重要性：这是一个严重的 macOS 兼容性 bug，系统重启后会完全导致 CLI 功能不可用，影响基于 MCP 的工作流。本次修复解决了文件系统绑定状态管理中的平台特定边缘情况。

2. **#3709 [开放中] [area:models] 支持在同一会话中通过 `/model` 在多个模型间切换，包括 BYOK/本地提供商**  
   [链接](https://github.com/github/copilot-cli/issues/3709) | 10 条评论 | 34 👍  
   重要性：本周获赞最高的开放功能需求。用户希望在单个会话内即可在 GitHub 托管模型和自托管/BYOK 模型之间无缝切换，这对于运行自定义模型部署的团队来说是核心缺口。

3. **#3442 [已关闭] [area:sessions, area:enterprise] v1.0.51 远程会话未启用，请联系组织管理员启用远程会话**  
   [链接](https://github.com/github/copilot-cli/issues/3442) | 8 条评论 | 11 👍  
   重要性：解决了企业版中关于远程会话启用的配置困惑，明确了影响众多组织部署的管理员策略要求。

4. **#4849 [开放中] [待分类] 降低子代理工作流的延迟和评审循环开销**  
   [链接](https://github.com/github/copilot-cli/issues/4849) | 6 条评论 | 0 👍  
   重要性：凸显了智能体驱动开发的一大性能痛点：子代理交接和评审周期需要数分钟的往返时间，导致小型任务的自动化代码修改比手动操作还慢。

5. **#1436 [已关闭] [area:platform-windows] Shell 模式下支持加载 PowerShell 配置文件**  
   [链接](https://github.com/github/copilot-cli/issues/1436) | 5 条评论 | 1 👍  
   重要性：这是长期以来被广泛呼吁的 Windows 易用性修复。此前 Shell 模式启动 PowerShell 时会携带 `-NoProfile` 参数，导致用户的自定义配置、别名和环境配置失效。

6. **#3100 [开放中] [area:authentication, area:mcp] 配置了 Bearer token 的 HTTP MCP 服务器会触发 OAuth 发现失败，而非回退到请求头认证**  
   [链接](https://github.com/github/copilot-cli/issues/3100) | 2 条评论 | 11 👍  
   重要性：这是一个高优先级的 MCP 认证 bug：CLI 会忽略显式配置的 Bearer token 请求头，转而尝试（并失败于）OAuth 发现，导致与众多自托管 MCP 服务器的集成失效。

7. **#5042 [开放中] [area:context-memory, area:models, area:tools] HydraFusion：路由的模型返回400后，会话被重新路由到无法加载静态提示的小上下文模型；会话中途工具集发生变更**  
   [链接](https://github.com/github/copilot-cli/issues/5042) | 2 条评论 | 0 👍  
   重要性：暴露了 HydraFusion 回退机制的严重缺陷：当主模型故障时，路由会静默切换到更小的模型，而该模型无法处理现有会话上下文，导致工具链中断，并在会话中途出现非预期行为。

8. **#4576 [开放中] [待分类] `includeCoAuthoredBy: false` 不会被子任务代理继承；它们的提交仍然会带有 Co-authored-by 尾部信息**  
   [链接](https://github.com/github/copilot-cli/issues/4576) | 1 条评论 | 5 👍  
   重要性：这是一个影响隐私和署名的配置一致性 bug：用户禁用 Copilot 共同作者尾部信息的设置，会被子代理任务忽略，导致产生非预期的提交元数据。

9. **#4714 [开放中] [area:sessions] 恢复会话速度极慢，且无加载状态 UI 提示**  
   [链接](https://github.com/github/copilot-cli/issues/4714) | 1 条评论 | 2 👍  
   重要性：同时存在性能和 UX 缺口：会话恢复速度慢得不可接受，且没有加载指示器，导致用户无法判断 CLI 是卡死了还是正在运行。

10. **#5180 [开放中] [待分类] `web_fetch` 拒绝解析为 Surge Fake-IP 地址的公共域名（macOS 下 CLI 1.0.98 版本）**  
    [链接](https://github.com/github/copilot-cli/issues/5180) | 1 条评论 | 0 👍  
    重要性：这是一个网络兼容性 bug，会导致 macOS 上使用 Surge 代理工具的用户无法使用 `web_fetch`，而这是网络受限地区开发者的常见配置。

---

## 4. 重点 PR 进展
过去7天仅更新了1个拉取请求：

- **#5186 [开放中] 更新 feature_request.yml**  
  [链接](https://github.com/github/copilot-cli/pull/5186) | 作者：Bilalabdulkadir  
  这是对功能需求 issue 模板工作流的维护性更新，新增了对无效 PR 自动关闭的 CI 校验。无面向产品的变更。

---

## 5. 热门讨论
本周期未提供讨论数据，本章节暂略。

---

## 6. 功能需求趋势
本周的 issue 中显现出三大核心功能方向趋势：

1. **开放模型提供商灵活性**：多个需求（#3709、#2710）呼吁为 BYOK、本地和第三方模型提供商提供原生支持，包括会话内切换和标准化配置界面，摆脱对 GitHub 托管模型的绑定。
2. **子代理工作流性能与可观测性**：降低子代理延迟（#4849）和为 HydraFusion 路由决策提供 OpenTelemetry 追踪（#4825）的需求，反映出用户对多智能体和模型路由工作流的透明度和速度有更高要求。
3. **终端与平台 UX 打磨**：长时间运行任务的系统通知（#2616）、OSC 7501 程序状态上报（#5112）、vi 风格的 j/k 菜单导航（#4152）、Windows 下的 Git Bash 支持（#508）以及 PowerShell 配置文件加载（#1436）等需求，表明用户希望更深的终端集成和平台原生的使用体验。

---

## 7. 开发者痛点
本周开发者反馈的反复出现的困扰：

- **HydraFusion 路由不稳定**：多个 bug（#5042、#5097）显示，模型回退是静默无通知的，会破坏上下文窗口、变更工具集，并在用户不知情或无明确感知的情况下降低输出质量。
- **MCP 集成缺口**：认证失败（#3100）、过期的文件系统绑定（#4998）、资源二进制解析 bug（#4916）以及服务器挂起导致的会话卡死（已在 v1.0.100-0 中修复），给基于 MCP 生态构建的用户带来持续摩擦。
- **会话性能与 UX**：会话恢复缓慢（#4714）、子代理工作流延迟（#4849）以及缺失加载状态，导致用户无法判断进度，也无法信任 CLI 正在正常运行。
- **跨平台与环境兼容性**：缺口包括 macOS 下 Surge 代理冲突（#5180）、macOS 下远程 SSH 剪贴板失效（#4551）、Windows Git Bash 支持缺口（#508）以及 Linux 沙箱回环接口配置失败（已在 v1.0.99-2 中修复）。
- **配置不一致**：`includeCoAuthoredBy: false` 等设置不会传播到子代理（#4576），以及管理员模型覆盖（已在 v1.0.99-2 中优化），都会导致违背用户预期的非预期行为。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报 | 2026-10-19

---

## 1. 过去7天亮点
OpenCode 1.x 系列推出了3个补丁，分别用于稳定变体配置、更新目标适配、移除会话共享功能；而10月17日控制台安全漏洞事件后，大量免费版身份验证相关bug成为用户反馈的重灾区。核心工程团队在 TUI 可用性、权限系统加固、插件运行时一致性方面取得进展，新增50个 issue 和50个 PR，反映出 v2 版本的迭代优化和社区贡献都十分活跃。

---

## 2. 版本发布
过去7天共发布3个1.x系列版本：
- **v1.19.3** – 核心改进：模型推理选项现在会生成推理变体，在保留用户配置的变体覆盖规则的前提下，替代了原有的目录变体。
- **v1.19.2** – 核心修复：1.x 版本安装后仅会检查 `opencode-ai` npm 的 `latest` 标签获取更新，确保不会将2.x版本作为常规升级推送；用户仍可通过 `/update` 命令主动选择升级到v2。
- **v1.19.1** – 核心修复：全面停用时会话共享功能；现有分享链接、会话共享命令、从URL导入功能均不再支持。

---

## 3. 热门 Issue
1. **#56324** – `[OPEN] [severity:high]` Windows 系统下官方 OpenCode TUI v2.0.32 中免费模型报错，提示“免费版仅可在 OpenCode 内使用”。  
   *重要性：* 导致 Windows TUI 用户的核心免费版功能无法使用；该 issue 有66条评论、30个👍，是本周活跃度最高的问题，影响范围较广。  
   🔗 [anomalyco/opencode#56324](https://github.com/anomalyco/opencode/issues/56324)

2. **#56442** – `[CLOSED]` 无法通过 GitHub OAuth 登录 OpenCode 网页控制台。  
   *重要性：* 身份验证故障影响所有网页控制台用户；在问题修复前，16条评论反映出用户受到的直接影响。  
   🔗 [anomalyco/opencode#56442](https://github.com/anomalyco/opencode/issues/56442)

3. **#50206** – `[OPEN]` OpenCode Go 系列模型生成的 XML/DSML 工具调用输出格式错误，导致工具执行失败。  
   *重要性：* 是使用 Go 模型调用工具的用户面临的核心可靠性问题；已有12条评论，目前仍在调查中，该问题已持续一个月未解决。  
   🔗 [anomalyco/opencode#50206](https://github.com/anomalyco/opencode/issues/50206)

4. **#41763** – `[OPEN] [2.0]` 无声卡的 Linux 系统在交互过程中会产生大量 ALSA 错误，导致 TUI 界面错乱。  
   *重要性：* 降低了 Linux 平台上 v2 TUI 的使用体验；12条评论和3个👍反映出无头设备或无音频配置环境下的可用性痛点长期存在。  
   🔗 [anomalyco/opencode#41763](https://github.com/anomalyco/opencode/issues/41763)

5. **#34344** – `[CLOSED]` 无限使用漏洞：通过切换 VPN IP 可绕过绑定 IP 的免费模型速率限制。  
   *重要性：* 涉及免费版的安全与成本问题；issue 已关闭，说明团队已修复速率限制逻辑。  
   🔗 [anomalyco/opencode#34344](https://github.com/anomalyco/opencode/issues/34344)

6. **#33300** – `[OPEN] [FEATURE]` 桌面端应用支持语音输入功能。  
   *重要性：* 是本期得票最高的功能请求（10个👍）；反映了用户对手解放交互方式的需求。  
   🔗 [anomalyco/opencode#33300](https://github.com/anomalyco/opencode/issues/33300)

7. **#56470** – `[OPEN]` 权限的“询问（ask）”效果对 shell 命令失效：命令会直接执行，同时客户端提示返回404。  
   *重要性：* 属于严重安全漏洞——权限校验并未实际阻止命令执行，对智能体安全是高风险问题。  
   🔗 [anomalyco/opencode#56470](https://github.com/anomalyco/opencode/issues/56470)

8. **#51209** – `[OPEN] [FEATURE]` 向插件开放 v2 TUI 编辑器能力（实现v1版本的同等功能）。  
   *重要性：* 阻碍了插件生态向 v2 迁移；收到了来自插件开发者的7条评论和3个👍。  
   🔗 [anomalyco/opencode#51209](https://github.com/anomalyco/opencode/issues/51209)

9. **#51887** – `[OPEN] [2.0] [Bug]` Windows 平台上 OpenCode 2 CLI 会不断弹出窗口并抢占焦点。  
   *重要性：* 导致 Windows 上 v2 CLI 几乎无法使用；7条评论反馈该问题严重干扰工作流程。  
   🔗 [anomalyco/opencode#51887](https://github.com/anomalyco/opencode/issues/51887)

10. **#56833** – `[OPEN]` Go 订阅用户：10月17日控制台漏洞事件后 API 密钥被无期限吊销，且官方未公布正式补偿政策。  
    *重要性：* 漏洞事件后的信任与沟通问题影响付费用户；反映出用户对更清晰的事件响应和补救方案的诉求。  
    🔗 [anomalyco/opencode#56833](https://github.com/anomalyco/opencode/issues/56833)

---

## 4. 重点 PR 进展
1. **#56910** – `fix(tui): keep Home and End in the session prompt`（贡献者：argszero）  
   修复 #56890：确保提交后 Home/End 键会移动输入框光标，而非滚动会话记录。  
   🔗 [anomalyco/opencode#56910](https://github.com/anomalyco/opencode/pull/56910)

2. **#56900** – `fix(tui): share host runtime with compiled plugin consumers`（moritzWa）  
   修复 #55454（npm TUI 场景），是对 #56644 中仅服务端修复的补充；保留了编译后宿主运行时中的 OpenTUI/Solid 导入。  
   🔗 [anomalyco/opencode#56900](https://github.com/anomalyco/opencode/pull/56900)

3. **#56908** – `feat(core): route unpinned sessions by prompt complexity`（neony1027）  
   新功能：未固定的会话会根据提示词复杂度自动选择目录模型；在 TUI 模型选择对话框中新增“自动（Auto）”选项，该功能位于 `experimental` 实验性开关后。  
   🔗 [anomalyco/opencode#56908](https://github.com/anomalyco/opencode/pull/56908)

4. **#56909** – `fix(app): keep permission actions visible for long commands`（HootRock）  
   关闭 #49644 并解决 #56863：限制权限面板高度，确保长命令场景下审批按钮始终可见。  
   🔗 [anomalyco/opencode#56909](https://github.com/anomalyco/opencode/pull/56909)

5. **#56659** – `feat(core): edit saved permissions`（rekram1-node）  
   支持编辑已保存的“始终允许”权限（此前仅支持查看和删除），为审核和收窄授权范围提供了 UI 支持。  
   🔗 [anomalyco/opencode#56659](https://github.com/anomalyco/opencode/pull/56659)

6. **#56897** – `feat(desktop): ship the CLI as opencode and put it on the Windows PATH`（Hona）  
   将各平台捆绑的 CLI 从 `opencode-cli` 重命名为 `opencode`，并加入 Windows PATH 环境变量，用户可在任意终端直接使用 `opencode` 命令。  
   🔗 [anomalyco/opencode#56897](https://github.com/anomalyco/opencode/pull/56897)

7. **#52818** – `feat(browser-extension): add OpenCode Browser, an extension agents control over MCP`（R44VC0RP）  
   推出一款 Chromium 扩展，让 AI 智能体可通过 `browse` MCP 工具控制浏览器，支持标签页管理、截图、网络抓包和 Playwright 集成。  
   🔗 [anomalyco/opencode#52818](https://github.com/anomalyco/opencode/pull/52818)

8. **#21111** – `fix(acp): forward session title updates to ACP clients via session_info_update`（kevinWangSheng，贡献者）  
   关闭 #21013：实现 ACP 协议的 `session_info_update` 事件推送，让 ACP 客户端能接收到会话标题和 `updatedAt` 的变更。  
   🔗 [anomalyco/opencode#21111](https://github.com/anomalyco/opencode/pull/21111)

9. **#56905** – `fix(core): log providers removed by policy`（opencode-agent[bot]，贡献者）  
   当 `provider.use` 策略（例如“仅允许托管服务商”）移除某个模型服务商时，新增调试日志，方便排查模型不可用的错误。  
   🔗 [anomalyco/opencode#56905](https://github.com/anomalyco/opencode/pull/56905)

10. **#56896** – `feat(ui): open images from their place in the message`（kitlangton，贡献者）  
    新增流畅的原位图片预览动画（从缩略图放大）并附带背景变暗效果，与 Claude 桌面端体验一致，同时保留上下文位置。  
    🔗 [anomalyco/opencode#56896](https://github.com/anomalyco/opencode/pull/56896)

---

## 5. 热门讨论
*略——本周数据集未提供相关讨论数据。*

---

## 6. 功能请求趋势
1. **语音输入**：桌面端语音输入是得票最高的功能请求（#33300），用户对手解放式的提示词输入需求持续稳定。
2. **插件平台一致性**：插件访问 v2 TUI 编辑器（#51209）、编译插件运行时共享（#56900）是开发者的核心诉求，是打通插件迁移的关键。
3. **权限体验优化**：已保存权限的编辑功能（#56659）、长命令下审批按钮可见性（#56909）、更完善的子智能体权限提示（#56906）形成明显趋势，用户需要更精细、易用的权限控制。
4. **更智能的模型选择**：基于提示词复杂度的自动模型路由（#56908）契合用户减少手动切换模型成本的需求。
5. **浏览器自动化集成**：OpenCode Browser MCP 扩展（#52818）反映出用户对智能体控制网页浏览这一核心能力的兴趣日益增长。

---

## 7. 开发者痛点
1. **免费版客户端身份验证bug**：大量反馈（#56324、#56598、#56573、#56543、#56609、#56585）显示，官方客户端会错误触发“免费版仅可在 OpenCode 内使用”的报错，尤其在 Windows 平台——这是本周期最频繁的用户问题，10月17日控制台漏洞导致的密钥吊销进一步加剧了该问题。
2. **Windows 平台 v2 稳定性**：弹窗无限抢占焦点（#51887）和安装路径冲突（#56904）导致 Windows 上 v2 CLI/桌面端的使用体验不稳定。
3. **Linux TUI 音频报错干扰**：无声卡 Linux 系统上 ALSA 错误刷屏导致终端错乱（#41763）是 v2 TUI 的长期痛点，目前尚未发布修复版本。
4. **Go 模型的工具调用可靠性**：Go 模型输出格式错误的 DSML/XML（#50206）会导致工具执行失败，影响用户对这些模型下智能体工作流的信任。
5. **权限系统的正确性与可观测性**：shell 命令的“询问”权限失效（#56470）是严重安全漏洞，而被策略移除的服务商无任何日志记录（#56905），导致调试困难。
6. **漏洞事件后的沟通与补偿**：受10月17日 API 密钥吊销影响的 Go 付费订阅用户（#56833）反馈，官方对补救方案和正式补偿政策的说明不清晰。
7. **ACP 协议缺口**：缺少 `session_info_update` 事件（#21013）、Zed 会话创建等 ACP 集成功能故障（#53799），阻碍了生态兼容性。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区摘要 – 2026-10-19

---

## 1. 过去 7 天亮点
本周 Pi 项目发布了两个小版本（v1.2.0 和 v1.3.0），新增了按密钥区分的 OpenRouter 模型列表，以及可配置的 `/share` 上传目标。维护团队还合并了一批 Windows/PowerShell 修复，改进了 RPC 模式的 MCP 支持，并通过 Responses API 引入了服务端压缩能力。社区活跃度保持高位，有 50+ 个 issue 和 PR 得到更新，还涌现出多个新的第三方客户端和扩展展示。

---

## 2. 版本发布

### v1.3.0
- **可配置的 `/share` 目标：** 新增 `sessionShareDestination` 设置，用户可选择 `auto`、`gist` 或 `radius` 作为会话分享的目标。
  文档：[Sessions and context](https://github.com/earendil-works/pi/blob/v1.3.0/packages/coding-agent/docs/settings.md#sessions-and-context)

### v1.2.0
- **按密钥区分的 OpenRouter 模型列表：** Pi 现在仅展示当前 OpenRouter 密钥可访问的模型，包括 `models.json` 中定义的、对应密钥的上下文大小、最大输出长度、定价和区域端点。
  文档：[OpenRouter](https://github.com/earendil-works/pi/blob/v1.2.0/packages/...)

---

## 3. 热门 issue

| # | 标题 | 状态 | 重要性 |
|---|-------|--------|----------------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | macOS 长会话下 CPU 占用过高 | 处理中（OPEN） | 评论数最高的 issue（20 条评论，11 👍）。用户反馈长会话时 CPU 占用达 50–110%，内存占用 600–800 MB，大概率与上下文大小相关，是核心性能问题。 |
| [#10895](https://github.com/earendil-works/pi/issues/10895) | 支持最高优先级的系统级配置（MDM） | 已关闭（不处理） | 11 条评论。为满足企业/MDM 安全合规要求提出（如 `/etc/pi/models.json`）。被标记为不处理，说明当前的配置层级是有意设计的。 |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | Anthropic 工具调用：损坏的非 ASCII 编辑参数被静默接受 | 处理中（OPEN） | 10 条评论。使用 Claude 模型对韩文（及其他非 ASCII 文本）进行编辑时，经常失败或损坏文件，原因是 `\uXXXX` 转义 bug —— 这是影响国际用户的正确性问题。 |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` + 模型切换会破坏思考块归一化 | 处理中（OPEN） | 9 条评论。当设置了 `requiresReasoningContentOnAssistantMessages` 时，会话中途切换模型可能导致思考内容错误内联，引发推理模型间的兼容性问题。 |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | 内置 PowerShell 工具在交互模式下使用 PS 5.1，但在 `-p` 模式下使用 pwsh | 已关闭 | 8 条评论。Windows 上 PowerShell 版本选择不一致导致用户困惑，修复已合并。 |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | Windows + Zellij 环境下，全屏时鼠标滚轮滚动的是提示词历史而非会话记录 | 处理中（OPEN） | 8 条评论，4 👍。Windows 上终端多路复用器的交互 bug，降低了全屏使用体验。 |
| [#9409](https://github.com/earendil-works/pi/issues/9409) | 推理模型上会话在达到上下文上限后永久卡住 | 处理中（OPEN） | 7 条评论。即使自动压缩重试后，会话仍会陷入“长度”停止原因的循环，对长时间运行的推理会话是严重的可靠性问题。 |
| [#10976](https://github.com/earendil-works/pi/issues/10976) | 当 pwsh 7 是 Microsoft Store 安装版本时，PowerShell 工具会回退到 PS 5.1 | 处理中（OPEN） | 7 条评论。Store 安装的 pwsh 使用应用执行别名，`fs.existsSync` 无法检测到 —— 这是 Windows PowerShell 检测的另一个边界情况。 |
| [#11033](https://github.com/earendil-works/pi/issues/11033) | Pi 订阅登录失败，报错 `3p_delegated_access_policy_denied` | 已关闭（不处理） | 5 条评论。组织策略阻止了 ChatGPT/Codex 订阅的第三方应用委托；官方 Codex CLI 可正常使用。反映了企业环境中 OAuth 策略的摩擦。 |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | 扩展处理 `turn_end` 后，`cacheWarming: "idle"` 会静默停止 | 处理中（OPEN） | 5 条评论。在包含自定义/压缩消息的会话中，空闲缓存预热永远不会触发，悄无声息地增加了扩展用户的延迟。 |

---

## 4. 关键 PR 进展

| # | 标题 | 状态 | 描述 |
|---|-------|--------|-------------|
| [#11098](https://github.com/earendil-works/pi/pull/11098) | feat(ai,agent,coding-agent): 通过 Responses API 实现服务端压缩 | 已关闭 | 支持服务商（例如 OpenAI Responses `context_management`）在服务端执行压缩；Pi 将结果作为常规会话压缩条目使用，降低客户端的 token 和计算开销。 |
| [#11082](https://github.com/earendil-works/pi/pull/11082) | feat(coding-agent): 通过 RPC 注册会话级 MCP 服务器 | 已关闭 | 关闭 #11067。新增 `register_mcp_server` / `unregister_mcp_server` / `get_mcp_servers` RPC 命令，遵循与扩展 API 一致的校验和命名空间规则，为基于 RPC 的 MCP 编排扫清了障碍。 |
| [#11079](https://github.com/earendil-works/pi/pull/11079) | feat(durable): 为任务休眠注入定时器 | 已关闭 | 为 `TaskRuntime.sleep()` 添加可注入的定时器支持，这样 Durable 宿主（例如 Cloudflare Durable Objects）在长时间退避或轮询时，无需持有内存中的定时器。 |
| [#11104](https://github.com/earendil-works/pi/pull/11104) | durable: 为主机添加任务级模型访问能力 | 已关闭 | 引入 `HarnessOptions.taskModels(scope, models)` 回调，宿主可按任务（通过任务 ID、会话 ID、类型和终止信号）授予模型访问权限，适用于多租户和细粒度授权场景。 |
| [#11080](https://github.com/earendil-works/pi/pull/11080) | fix(powershell): 在 PATH 解析中支持 Microsoft Store 应用执行别名 | 已关闭 | 修复 #10976。可检测 Store 安装的 `pwsh.exe`（应用执行别名 / 零长度重解析点），让 PowerShell 工具正确使用 pwsh 7 而非回退到 5.1。 |
| [#11077](https://github.com/earendil-works/pi/pull/11077) | fix(coding-agent): 将 `sendMessage` 的 `triggerTurn` 推迟到压缩结束后执行 | 已关闭 | 修复了一个竞态问题：`pi.sendMessage(..., { triggerTurn: true })` 会与正在进行的手动压缩并发执行，导致消息顺序和上下文状态损坏。 |
| [#11109](https://github.com/earendil-works/pi/pull/11109) | fix(durable): 代码模式下内置 read 会将图片解析为图片块 | 已关闭 | 修复 #11015。代码模式下对图片调用 `read()` 曾返回空字符串，因为 `textOf()` 丢弃了图片块；现在 `read` 返回联合类型 schema，保留图片块。 |
| [#11108](https://github.com/earendil-works/pi/pull/11108) / [#11081](https://github.com/earendil-works/pi/pull/11081) | fix(tui): 全屏双击选择时保留开头的波浪号 | 已关闭 | 修复 #10980。将 `~` 添加到 `TERMINAL_WORD_SELECTION_JOINERS` 中，这样双击 `~/path` 时会选中包含波浪号的完整路径。（两个独立修复在同一周合并。） |
| [#11053](https://github.com/earendil-works/pi/pull/11053) / [#11054](https://github.com/earendil-works/pi/pull/11054) | Windows 上优先使用 PowerShell 而非 bash；默认启用 PowerShell | 已关闭 | 修复 #11049 / #11051。在 Windows 上，当 bash 和 PowerShell 都启用时，模型现在优先使用 PowerShell，且 PowerShell 默认启用 —— 减少 Git Bash 带来的路径、编码和引号问题。 |
| [#10914](https://github.com/earendil-works/pi/pull/10914) | docs: 将文档迁移到仓库根目录 | 处理中（OPEN） | 将文档从 `packages/coding-agent/docs` 迁移到仓库根目录的 `docs/`，以体现 Pi 扩展后的范围（pi-ai、pi-durable 等）。coding-agent 构建时会将文档复制回来，用于 npm 打包。 |

---

## 5. 热门讨论

### 功能想法
- **[#10632](https://github.com/earendil-works/pi/discussions/10632) – 在工具调用时暂停运行，直到人工批准或客户端返回结果（内存中不保留任何内容）**
  3 条评论，1 👍。提出了一种持久化、不占内存的工具调用批准/中断流程 —— 非常适合 pi-durable 和人机协同工作流。

- **[#10915](https://github.com/earendil-works/pi/discussions/10915) – 视频输入：改变实现方式的一项度量，以及一份 92 行的参考实现**
  1 👍。为长期讨论的视频输入功能（#3200）贡献了基准测试和参考实现，旨在影响 Pi 对视频模态的实现思路。

- **[#10841](https://github.com/earendil-works/pi/discussions/10841) – 包应该在哪里放置一次性的回合前路由决策？**
  1 👍。来自 MatPilot 团队的提问：如何通过支持异步 I/O 的 `before_agent_start`，添加一个轻量的回合前分类路由（例如延迟 100ms 以内的 `semantic-router`），寻求最佳实践。

### 问答
- **[#10950](https://github.com/earendil-works/pi/discussions/10950) – 如何为自定义原生提供商访问 `typesafeSystemOneApi`？**
  0 条评论，4 👍。开发者想在自定义原生提供商中添加自托管 `kev` 支持，但找不到 `@earendil-works/pi-ai/compat` 中 `openAiCompletionsApi` 的等价实现。高点赞、低评论的比例说明这是广泛存在的需求。

### 作品展示
- **[#11068](https://github.com/earendil-works/pi/discussions/11068) – ColliePWA 1.22.0：Pi Durable 代理的手机客户端**
  面向 Pi Durable 的移动端 PWA 客户端，用户可通过手机监控和恢复代理运行。

- **[#10974](https://github.com/earendil-works/pi/discussions/10974) – swe-mux：并排运行 Pi 会话，还能从手机访问**
  一款终端多路复用器，原生支持 Pi 状态检测（运行中/已完成/等待中），提供标签页/分屏、开发服务器预览和手机访问能力。

- **[#10927](https://github.com/earendil-works/pi/discussions/10927) – OpenLeo：类似 Trello 的看板，由 pi-agent-core 代理执行卡片任务**
  一款看板工具，每个列表都有一个 Pi 代理，在 Linux 沙箱中执行卡片任务并回写结果。

- **[#10921](https://github.com/earendil-works/pi/discussions/10921) – Pi Bridge —— 让 Pi 使用你已有的 Chrome 配置文件**
  由 Chrome 扩展和 Pi 包组成，让 Pi 可以与用户现有的 Chrome 配置文件交互，而非使用托管浏览器。

---

## 6. 功能需求趋势
1. **更深度的持久化 / 人机协同原语** – 随着 pi-durable 采用率增长，工具调用暂停/恢复、外部批准门控、任务级模型访问（讨论 #10632、PR #11104）正获得越来越多关注。
2. **企业 / 安全配置** – 系统级（MDM）配置（#10895）、按模型禁用（#10167）、缓存保留设置（#11101），反映出组织级使用的增加。
3. **更丰富的 RPC 和扩展 API** – 通过 RPC 注册会话级 MCP（#11082）、`onRetry` 回调（#7649）、上下文使用明细（#10802）、通过 `prepareArguments` 访问解析失败的工具调用（#11112），显示生态对更多编程控制能力的需求。
4. **提供商与模型灵活性** – 按密钥区分的 OpenRouter 列表（v1.2.0）、Responses API 服务端压缩（#11098）、自定义原生提供商支持（讨论 #10950），都指向对多提供商、可插拔模型基础设施的需求。
5. **Windows 优先的体验改进** – PowerShell 默认启用、优先使用 PowerShell 而非 bash、Store 版 pwsh 检测（#11053、#11054、#11080），体现了对优化 Windows 开发者体验的投入。

---

## 7. 开发者痛点
- **macOS 长会话资源占用过高** – #7730 仍是评论数最高的未关闭 issue，随着会话变长，CPU 飙升至 100%+，内存升至 600–800 MB。
- **推理模型的上下文上限死锁** – #9409：会话可能在达到上下文窗口后永久卡住，`stopReason: "length"`，即使压缩重试也无效，相当于会话直接报废。
- **Anthropic 工具调用中的非 ASCII / 编码 bug** – #10074：转义序列损坏（`\uXXXX` 丢失 `u`）会静默破坏韩文和其他非 ASCII 内容的编辑，导致频繁重试和数据丢失。
- **Windows 上的 PowerShell 版本检测** – 多个 issue（#8582、#10976）都围绕 PowerShell 不一致地回退到 Windows PowerShell 5.1 而非 pwsh 7，尤其是 Microsoft Store 安装版本的问题。
- **终端多路复用器的体验瑕疵** – Zellij/Windows 鼠标滚轮异常（#9656）、TUI 选择 quirks（波浪号处理、失焦时光标可见性 #10323），给高级用户的使用带来粗糙感。
- **扩展事件和 API 缺口** – 缺少 `tool_result` 事件（#11100）、扩展加载后缓存预热静默停止（#10956）、`waitForIdle()` 在压缩期间就返回（#10704），让基于 Pi 构建的扩展开发者感到困扰。
- **特定提供商的网络/配置限制** – 硬编码的 10 秒连接超时导致 Linux 上 DeepSeek 超时（#11106）、企业 Codex 订阅的 OAuth 策略错误（#11033），都凸显了部署中的摩擦。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周刊 | 2026-10-19

---

## 1. 过去7天亮点
本周 Qwen Code 团队发布了 CLI、Desktop 及 TypeScript SDK 的稳定版 `v0.25.2`，重点优化了托管代理（managed-agent）的稳定性，以及连接器/代理（connector/broker）的可靠性。核心工作方面，分阶段托管代理双路径架构持续推进；同时，CI 稳定性与 UI 打磨（Web Shell、终端渲染）成为社区最关注的问题，多项不稳定测试和 UX 缺陷修复正在积极评审中。

---

## 2. 版本发布
| 产品 | 版本 | 核心变更 |
|---------|---------|-------------|
| CLI（稳定版） | [v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2) | 无破坏性变更；新增基于 Session 消息的托管代理牵头邮箱（managed-agent lead mailbox）功能（`#13892`）；提升连接器/代理的健壮性 |
| CLI（预览版） | [v0.25.3-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-preview.0) / [v0.25.2-preview.0/1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.1) | 修复团队方案审批中断轮次的托管代理问题；基于 `#12692` R2 评审强化连接器/代理能力 |
| CLI（每日构建版） | v0.25.2-nightly.20261015/16/17 | 托管代理增量 bug 修复，包括 `team_plan_approval` 仅日志轮次结算逻辑 |
| Desktop | [desktop-v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.2) | 与 CLI v0.25.2 对齐：托管代理稳定性提升及邮箱功能 |
| TypeScript SDK | [sdk-typescript-v0.1.20](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.20) | 打包 CLI v0.25.2 |

---

## 3. 热门问题
1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — *托管代理双路径架构提案*  
   讨论量最高的线程（71 条评论），定义了独立推理/工具调用、持久化 Session、可恢复执行的分阶段架构。这是多代理和平台分发赛道的核心路线图项目，当前设计方案仍在持续迭代。

2. **[#14393](https://github.com/QwenLM/qwen-code/issues/14393)** — *租户防护剩余缺口*  
   已合并的 `#13918` 的后续跟进，解决无限制发布通道、过时设计文案及清理任务问题（19 条评论）。对托管部署中的租户隔离正确性至关重要。

3. **[#14596](https://github.com/QwenLM/qwen-code/issues/14596)** — *docs_only CI 快速通道跳过 Prettier 检查，导致 main 分支构建失败*  
   一项 CI 质量漏洞：仅文档类 PR 可通过检查合并，但后续会导致 main 分支变红。对维护者的工作流效率优先级很高。

4. **[#14537](https://github.com/QwenLM/qwen-code/issues/14537)** — *用户担忧内置爬虫/ripgrep 依赖存在“供应链投毒”风险*  
   一项值得关注的用户体验与信任问题：v0.25.2 Desktop 客户端会启动 `rg` 进行仓库爬取，ripgrep 缺失时回退到 `fdir`，引发困惑和错误提示干扰。

5. **[#14600](https://github.com/QwenLM/qwen-code/issues/14600)** — *Desktop 崩溃后后端进程残留，重新启动无法重连*  
   Linux 上的 P2 级桌面可靠性 bug：崩溃后守护进程残留，对话变成孤儿状态，重启后无法恢复。

6. **[#14446](https://github.com/QwenLM/qwen-code/issues/14446)** — *schedule/automation_run 领域的 FG11 故障门*  
   面向自动化可靠性的 F 阶段故障门工作，属于多代理/后台自动化路线图的一部分，目前因依赖项工作待完成而阻塞。

7. **[#14075](https://github.com/QwenLM/qwen-code/issues/14075)** — *静态终端模式下自动换行导致 1-2 个字符孤立显示*  
   非虚拟化终端路径上的明显 UI 渲染缺陷，会降低代码和长行的可读性。

8. **[#13184](https://github.com/QwenLM/qwen-code/issues/13184)** — *托管 Session 存储/面板投影数据无限制增长*  
   性能/内存泄漏问题：托管代理持久化层和 UI 层数据会随时间无限增长，没有受限的保留策略。

9. **[#14566](https://github.com/QwenLM/qwen-code/issues/14566)** — *SDK Java 自托管锁获取在 40 分钟时反复超时*  
   一项基础设施瓶颈，导致 PR 通道在运行测试前就失败，影响 Java SDK 开发者的开发效率。

10. **[#14616](https://github.com/QwenLM/qwen-code/issues/14616)** — *原生文档生成与导出（.docx/.xlsx/.pptx/.pdf）*  
    广受欢迎的功能需求：内置 Office/PDF 文档创建能力，补充现有的产物预览功能。

---

## 4. 核心 PR 进展
1. **[#14335](https://github.com/QwenLM/qwen-code/pull/14335)** — *feat(serve): 可配置 TTL 后自动清理已完成的子 Session*  
   新增 `serve.subSessionCompletionTtlHours` 设置，用于在守护模式下自动清理已完成的子 Session（默认关闭，保持现有行为）。

2. **[#14628](https://github.com/QwenLM/qwen-code/pull/14628)** — *feat(managed-agent): 将附件输入预算提升至 8 MiB*  
   将标准 JSON 输入限制提高到约 8 MiB，支持更大的截图（含 base64 编码开销）和附件，并通过 IndexedDB 持久化实现刷新后数据保留。

3. **[#14297](https://github.com/QwenLM/qwen-code/pull/14297)** — *feat(web-shell): 支持从 Session 历史记录中删除选中的消息组*  
   为 Web Shell 新增分组消息删除功能（提示词 + 完整回复组），支持非连续选择。

4. **[#14281](https://github.com/QwenLM/qwen-code/pull/14281)** — *feat(memory): 为 CLI 和 HTTP 新增作用域化的外部导入任务*  
   推出 Qwen 官方的外部记忆导入服务（首版支持 Codex），具备预览、章节选择和后台持久化合并能力。

5. **[#14590](https://github.com/QwenLM/qwen-code/pull/14590)** — *fix(ci): 修复 main 分支 Prettier 步骤并稳定 hook-cancel 围栏测试*  
   修复 `#14596` 导致的 CI 失败问题，并稳定了一项不稳定的 hook-cancel 围栏测试。

6. **[#14611](https://github.com/QwenLM/qwen-code/pull/14611)** — *fix(ci): 根据同级持有量调整 sdk-java 主机锁预算*  
   将 SDK Java 自托管锁超时时间从 40 分钟提升至 90 分钟，缓解 `#14566` 的获取失败问题。

7. **[#14046](https://github.com/QwenLM/qwen-code/pull/14046)** — *feat(core): 为 Bun 运行时新增真实 PTY 后端*  
   为 Bun 启用 POSIX PTY 支持，使 Shell 工具和 Web 终端 Session 获得正确的终端输出、尺寸调整和退出信号。

8. **[#14619](https://github.com/QwenLM/qwen-code/pull/14619)** — *fix(sdk): 根据通告的 Session 预算设置 Session 启动期限*  
   用从守护进程通告的 Session 预算推导的期限，替代 SDK 中通用的 30 秒 Session 创建/工作区重置等待时间。

9. **[#14601](https://github.com/QwenLM/qwen-code/pull/14601)** — *test(managed-agent): 新增 FG11c 测试框架崩溃故障门测试*  
   为 `schedule` 和 `automation_run` 领域实现 FG11c SIGKILL 故障门测试（覆盖分发前声明、模型调用中、写入后场景）。

10. **[#13997](https://github.com/QwenLM/qwen-code/pull/13997)** — *fix(cli): 保留运行前 /acp WebSocket 升级请求而非返回 406*  
    避免快速启动的 `qwen serve` 在运行时初始化完成前拒绝早期 ACP WebSocket 连接，提升连接可靠性。

---

## 5. 热门讨论
*本周数据集中未提供讨论数据，本节暂缺。*

---

## 6. 功能需求趋势
1. **多代理与托管代理平台成熟度** — 路线图项目中的核心关注点：分阶段双路径架构（`#12380`）、自动化取消（`#14460`）、持久化导入（`#14281`）、故障门加固（`#14446`、`#14601`）。
2. **Session 生命周期与存储管控** — 对数据增长/保留受限（`#13184`）、已完成子 Session 自动清理（`#14335`）、消息历史删除（`#14297`）的需求。
3. **原生内容创建** — 内置文档/PDF 导出需求（`#14616`），补充现有的产物预览能力。
4. **MCP（模型上下文协议）升级** — 在守护进程 WebShell 中支持 MCP 2026-07-28 规范和 MCP 应用（`#8968`）。
5. **更大的输入/附件支持** — 提升附件和大输入的预算上限（`#14628`）。

---

## 7. 开发者痛点
1. **CI 不稳定与可靠性问题** — 多个 issue/PR 中反复出现的主题：Prettier 快速通道漏洞（`#14596`）、Java SDK 锁超时（`#14566`）、托管代理和 CLI 测试不稳定（`#14492`、`#14595`、`#14406`、`#14598`）。
2. **桌面端崩溃与恢复缺口** — 崩溃后守护进程残留（`#14600`）、预览状态空白（`#14594`）、分屏视图窗格为空（`#14576`）、嵌套滚动条 UI 异常（`#14620`）。
3. **终端 / Web Shell UX 缺陷** — 静态模式下换行字符孤立（`#14075`）、VP 对齐问题（`#9305`）、视觉不一致。
4. **托管代理边缘场景故障** — 测试框架重启后的写入器租约冲突（`#14591`）、重叠协调运行导致的恢复阻塞（`#14538`）、Session 存储无限制增长（`#13184`）。
5. **依赖/环境困惑** — 用户对内置爬虫/ripgrep 依赖及回退行为感到意外（`#14537`），说明需要更清晰地记录捆绑工具的相关信息。
6. **Windows 发布基础设施** — CUA 发布的代码签名证书配置需求目前阻塞进展（`#14539`）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*