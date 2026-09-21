# AI CLI 工具社区周报 2026-09-21

> 生成时间: 2026-09-21 00:58 UTC | 覆盖工具: 7 个

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

# 跨工具AI CLI生态对比报告 | 2026-09-21
## 1. 生态概览
AI CLI工具生态正处于以用户为中心的快速迭代阶段，核心优先级已从基础的代理功能转向可靠性、成本效率与平台成熟度。在所有主流工具中，社区普遍要求提升计费与配额管理的透明度、增强跨平台（尤其是Windows）兼容性，以及实现对代理行为和系统上下文的精细化管控。MCP（模型上下文协议）生态已成为关键的互操作层，但CLI端与桌面端/IDE端实现之间的兼容性缺口问题被持续反馈。与此同时，随着代理从实验性应用走向生产工作流，安全防护机制（沙箱、密钥脱敏、破坏性操作拦截）正成为标配。

## 2. 活跃度对比
| 工具 | 问题（已追踪/活跃） | PR（近7天更新） | 讨论（活跃线程） | 发布状态（近7天） |
|------|--------------------------|------------------------|-------------------------------|---------------------------|
| Claude Code | 10个已追踪（8个开放，2个已关闭） | 10个已追踪（6个开放，4个已关闭） | 无（未提供讨论数据） | 8个稳定版本（v2.1.271–v2.1.278），聚焦成本优化与可靠性提升 |
| OpenAI Codex | 10个已追踪（全部开放） | 10个已追踪（全部已关闭/合并，通过发布流水线） | 10个活跃线程（4个创意提议，3个问答，3个成果展示） | 1个稳定补丁（rust-v0.155.1）+ 7个alpha版本（v0.156.0-alpha.6–12） |
| Gemini CLI | 10个已追踪（全部开放，4个P1优先级） | 10个已追踪（7个已合并，3个开放待审核） | 无（未提供讨论数据） | 每日构建v0.62.0版本 + v0.61.0-preview.0里程碑版本；稳定基线为v0.60.0 |
| GitHub Copilot CLI | 30个已追踪（9个开放，21个已关闭） | 0个更新 | 无（未提供讨论数据） | 10个版本（v1.0.84-6 至 v1.0.87-0），含2个稳定版本 |
| OpenCode | 10个已追踪（全部开放） | 10个已追踪（9个开放，1个已关闭） | 无（未提供讨论数据） | 1个稳定版本（v1.18.31），聚焦核心bug修复 |
| Pi | 10个已追踪（5个开放，5个已关闭） | 10个已追踪（8个已关闭/合并，2个开放） | 9个活跃线程（4个问答/创意提议，5个成果展示） | 2个次版本（v0.86.0、v0.86.1），聚焦新增服务商支持与缓存功能 |
| Qwen Code | 10个已追踪（全部开放，4个P1优先级） | 10个已追踪（全部开放/审核中） | 无（未提供讨论数据） | 3个稳定版本（v0.24.0–v0.24.2）+ 每日构建/预览版，含破坏性变更 |

## 3. 共性功能方向
以下需求出现在3个及以上工具社区中，反映了普遍的用户诉求：
1. **成本与配额透明度及管控**
   - *受影响工具*：Claude Code（会话分类成本未文档化）、OpenAI Codex（子代理配额消耗异常、容量错误误报）、OpenCode（免费版配额bug、余额API请求问题）、Qwen Code（非对话上下文token开销）、Pi（缓存成本管理）。
   - *需求*：精细化的使用量可视化、子代理/扇出工作流的执行前成本估算、可配置的消费上限，以及对计费相关设置的清晰文档说明。
2. **Windows平台功能对齐与稳定性**
   - *受影响工具*：Claude Code（协作文件夹选择bug）、OpenAI Codex（发送按钮功能回退、WSL桥接故障）、Gemini CLI（ConPTY/进程边界情况异常）、Copilot CLI（WSL2终端卡死）、Pi（中日韩输入法延迟、ConPTY粘贴/渲染bug）、Qwen Code（打包与端口冲突bug）。
   - *需求*：可靠的终端渲染、修复的输入法（IME）支持、一致的WSL2集成体验，以及面向Windows用户的开箱即用安装/配置流程。
3. **会话可靠性与生命周期管理**
   - *受影响工具*：OpenAI Codex（锁文件过期、跨设备同步缺口）、Copilot CLI（长会话内存溢出崩溃、会话记录损坏）、OpenCode（会话膨胀、后台服务段错误）、Qwen Code（实时会话删除损坏）、Gemini CLI（代理卡死、成功状态误报）。
   - *需求*：弹性的会话恢复机制、内存泄漏与进程孤儿化防护、中断工作流的优雅处理，以及代理编辑的原生撤销/回退功能。
4. **MCP生态互操作性**
   - *受影响工具*：Claude Code（插件钩子执行bug）、OpenAI Codex（WSL MCP桥接故障）、Copilot CLI（Figma MCP兼容性缺口、服务发现失败）、Qwen Code（单服务器资源限制配置）、Pi（扩展驱动的MCP集成）。
   - *需求*：一致的传输错误处理机制、与IDE/桌面端MCP实现的功能对齐、更完善的服务器生命周期管理，以及第三方MCP服务器的标准化兼容性测试。
5. **安全防护机制**
   - *受影响工具*：Claude Code（沙箱权限范围文档缺口）、OpenAI Codex（子代理成本防护）、Copilot CLI（不安全的检查点恢复导致数据丢失）、Gemini CLI（破坏性操作拦截、Auto Memory密钥脱敏）、Qwen Code（工具参数中的密钥泄露）、Pi（运行时约束执行扩展）。
   - *需求*：高风险操作的执行前确认、自动化密钥脱敏、可配置的沙箱边界，以及AI功能数据使用情况的清晰透明度。

## 4. 差异化分析
| 工具 | 核心定位 | 目标用户 | 技术路径 |
|------|------------|--------------|--------------------|
| Claude Code | 企业级代理工作流、成本优化、网关可观测性 | 企业团队、高级用户、使用Anthropic生态的组织 | 与Anthropic API及Claude模型深度集成；大力投入网关端管控、AGENTS.md/CLAUDE.md项目配置，以及插件生态加固 |
| OpenAI Codex | TUI易用性、跨设备工作流、子代理能力 | 个人开发者、ChatGPT Plus/Pro用户、OpenAI生态用户 | 基于Rust运行时保障性能；与OpenAI模型及ChatGPT应用深度集成；快速迭代UI/UX与使用透明度 |
| Gemini CLI | 代理可靠性、企业配额可视化、安全加固 | 企业级GCP用户、Google Cloud生态团队、安全导向团队 | 核心基于TypeScript，强化PTY生命周期管理；聚焦正确性（防止成功误报）与合规性（OAuth、密钥处理）；规划AST感知工具链提升代码库效率 |
| GitHub Copilot CLI | GitHub生态集成、自定义代理支持、策略管控 | GitHub用户、采用托管开发工作流的企业团队 | 与GitHub平台（Copilot、MCP、仓库策略）深度耦合；聚焦组织层面的策略执行；支持Vim模式与原生终端人机工程设计 |
| OpenCode | 开源灵活性、本地模型支持、免费版可及性 | 爱好者、本地模型用户、注重成本的开发者 | 社区驱动的开源项目；支持多服务商（包括Ollama/本地模型）；当前聚焦修复V2 UI回退问题与免费版配额可靠性 |
| Pi | 可扩展性、多服务商支持、性能优化 | 高级用户、技术爱好者、构建自定义代理工作流的团队 | 高度模块化架构，提供丰富的扩展API；服务商无关设计；投入TUI性能与缓存效率优化以降低成本 |
| Qwen Code | 长上下文token效率、web-shell/守护进程工作流、中国市场本地化 | 中国开发者市场、长上下文模型用户、需要基于web的代理访问的团队 | 大力投入1M+上下文窗口的token治理；功能丰富的web-shell，支持SSH/移动端配对；重构沙箱机制保障执行安全 |

## 5. 社区动能与成熟度
### 社区动能最高
- **OpenAI Codex**：拥有最活跃的讨论生态，创意提议线程（远程控制、撤销/回退）获高票支持，第三方插件/工具社区蓬勃发展（150+精选生态工具）。高频的alpha版本发布节奏体现了快速迭代能力。
- **Pi**：扩展与讨论社区充满活力，持续产出社区构建的新工具（IDE集成、运行时约束执行、工作流自动化）。功能开发响应用户反馈，Windows兼容性反馈线程活跃度高。
- **Claude Code**：issue跟踪器参与度高，bug与功能需求均由用户优先级排序，定义清晰；每周稳定发布版本，聚焦企业痛点。

### 成熟度与稳定性领先
- **GitHub Copilot CLI**：issue关闭率最高（7天内关闭70%已追踪问题），稳定版本发布频繁，企业级策略管控功能表明已具备生产就绪能力。近期PR活动有限，说明核心功能已较为成熟完备。
- **Gemini CLI**：issue待办列表结构清晰，按优先级排序，P1/P2分级明确；聚焦安全与正确性bug而非花哨功能，体现企业级成熟度。

### 早期阶段/快速迭代工具
- **OpenCode**：严重稳定性bug（段错误、UI冻结、配额跟踪失败）占比最高，且存在未解决的UI回退问题。由社区贡献者驱动，开放PR待办列表瞄准核心性能与可靠性缺口。
- **Qwen Code**：发布节奏快，次版本中包含破坏性变更；路线图激进，聚焦长上下文优化与web-shell功能，表明仍在扩展核心功能。
- **Pi**：功能迭代迅速（新增服务商、缓存、扩展API），同时存在已知的性能与平台缺口，在可扩展性与持续的核心稳定性工作之间寻求平衡。

## 6. 趋势信号
1. **token效率正成为长上下文模型的核心竞争力**  
   Qwen Code的协同token治理举措、Claude Code的自动模式成本优化、Pi的缓存预热功能表明，随着1M+ token窗口模型成为主流，降低非对话上下文开销将成为关键战场。开发AI CLI工具的厂商应优先投入上下文裁剪、工具schema懒加载与缓存感知能力，以降低总体拥有成本。
2. **MCP生态正进入“兼容性时代”**  
   大量关于MCP服务器互操作缺口、传输错误、CLI与IDE实现之间功能不匹配的反馈表明，该协议已迈过早期采用阶段，正在走向成熟。兼容性测试、错误处理与服务器生命周期管理的标准，对生态参与者至关重要。
3. **Windows是AI CLI工具未被充分服务的高增长市场**  
   生态中的每一款工具都报告了反复出现的Windows特定bug（输入法问题、ConPTY渲染、WSL集成、路径处理）。投入打造一流Windows支持的工具，将能抢占大量此前无法使用CLI代理工作流的开发者市场。
4. **安全防护正从可选转为标配**  
   用户不再愿意接受AI代理的静默失败、数据丢失风险或不透明的数据使用方式。运行时约束执行（Pi）、破坏性操作拦截（Gemini CLI）、密钥脱敏（Qwen Code）等功能正从“锦上添花”变为建立信任的基础要求。
5. **本地/远程混合代理工作流正在兴起**  
   Qwen Code的SSH工作区支持、OpenAI Codex的远程控制需求、Copilot CLI的会话恢复改进表明，用户希望在本地、远程和移动端场景下无缝访问代理。开发者应优先投入守护进程/后台服务架构与跨设备会话同步，以满足这一需求。

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告（截至 2026-09-21）
*数据来源：[anthropics/skills](https://github.com/anthropics/skills) 官方仓库*

---

## 1. 热门技能排行（按社区关注度）
注：源数据集中 PR 评论数标记为 `undefined`；本排名以更新时效、更新频率、issue 交叉引用量作为社区参与度的代理指标进行计算。所列 PR 均为开放状态。

1. **skill-creator 触发评估修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
   - 功能：修复技能触发评估中的漏判/评分无效问题，解决 Windows 子进程管道故障，避免无关工具中断扫描流程。
   - 讨论亮点：解决了技能开发者的核心痛点（触发测试失效导致优化结果误导），直接关联多份关于召回率 0% 的公开 bug 报告。
   - 状态：开放，最后更新于 2026-09-16。

2. **skill-creator 0% 召回率修复** — [PR #1769](https://github.com/anthropics/skills/pull/1769)
   - 功能：修复一个严重 bug：`skill-creator` 的触发评估对所有技能均输出「精确率=100%、召回率=0%」，导致描述调优失效。
   - 讨论亮点：直接修复 Issue #1721 —— 一个被广泛反馈的开发者体验阻碍；与 PR #1298 更广范围的触发评估重构形成互补。
   - 状态：开放，最后更新于 2026-09-15。

3. **mcp-builder MCP 2.0 兼容性** — [PR #1742](https://github.com/anthropics/skills/pull/1742)
   - 功能：新增对 `mcp>=2.0.0` 导入路径的支持（含重命名后的 `streamable_http_client`），并支持通过 `create_mcp_http_client` 自定义 HTTP 请求头配置。
   - 讨论亮点：修复 Issue #1668 —— 这是适配最新协议版本的 MCP 技能开发者面临的关键兼容性阻断问题；截至 2026-09-19 仍在活跃维护。
   - 状态：开放，最后更新于 2026-09-19。

4. **AWT（AI Watch Tester）端到端测试技能** — [PR #822](https://github.com/anthropics/skills/pull/822)
   - 功能：新增基于视觉能力的浏览器控制技能，可实现零代码端到端测试的生成与执行。
   - 讨论亮点：是社区存续时间最长、参与度最高的功能 PR 之一；填补了 Claude Code 在 AI 驱动测试工具领域的一大空白。
   - 状态：开放，最后更新于 2026-09-19。

5. **proofcore-contract-auditor Web3 技能** — [PR #1771](https://github.com/anthropics/skills/pull/1771)
   - 功能：新增面向 Solidity/Rust 合约的智能合约审计技能，可通过零存储 Merkle 协议在 TON 区块链上锚定加密审计证明。
   - 讨论亮点：面向 Web3 开发者的高增长新领域技能，为生态带来了创新的链上验证能力。
   - 状态：开放，最后更新于 2026-09-16。

6. **md2video-audio 内容生成技能** — [PR #1703](https://github.com/anthropics/skills/pull/1703)
   - 功能：零成本技能，可通过 Marp 幻灯片转换，将 Markdown 文档编译为带类人声旁白的专业 MP4 视频。
   - 讨论亮点：高需求的创意工作流工具，打通了文档与多媒体内容创作的链路。
   - 状态：开放，最后更新于 2026-09-15。

7. **blast-radius 高危操作检查清单** — [PR #1776](https://github.com/anthropics/skills/pull/1776)
   - 功能：为批量/高危写入操作（用户归档、权限撤销、批量删除、群发邮件）提供操作前安全检查，防止影响范围超出预期。
   - 讨论亮点：解决了 AI 智能体操作中的关键安全缺口，在风险防控类技能中填补了独特的细分场景。
   - 状态：开放，最后更新于 2026-09-18。

---

## 2. 社区需求趋势（来自 Issues）
需求最高的技能方向与生态改进项如下：
1. **安全与信任边界工具**：评论数最高的 issue（[#492](https://github.com/anthropics/skills/issues/492)，43 条评论）反映了社区对命名空间校验、技能来源追溯工具的需求，防止社区技能冒充 Anthropic 官方技能。
2. **企业协作功能**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 条评论，8 个赞）是得票最高的功能请求，诉求为组织内技能共享，以替代手动文件传输的工作流。
3. **技能开发工具的可靠性**：多条高评论 issue（[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)）反馈评估框架失效（触发率 0%、工具静默报错），阻碍了技能开发，体现出对构建工具质量提升的强烈需求。
4. **智能体治理与安全**：[Issue #412](https://github.com/anthropics/skills/issues/412) 与 [Issue #1385](https://github.com/anthropics/skills/issues/1385) 提议开发面向 AI 智能体输出的策略执行、威胁检测、多阶段质量门禁流水线技能。
5. **文档工作流增强**：重复的技能相关 issue（[#189](https://github.com/anthropics/skills/issues/189)，9 个赞）以及 docx/pdf 修复类 PR 的高参与度，表明社区需要更稳定、无重复的文档处理技能。

---

## 3. 高潜力待合入技能
以下活跃维护的开放 PR 基于更新时效、范围清晰度、与已反馈 issue 的匹配度，大概率将在近期合入：
- **DOCX 孤立批注检测** — [PR #1734](https://github.com/anthropics/skills/pull/1734)：新增 Word 文档孤立批注检测能力，作为现有 DOCX 技能修复项的补充。
- **SCNet 高性能计算集群操作技能** — [PR #1615](https://github.com/anthropics/skills/issues/1615)：基于配置画像的 SSH/Slurm 工作流技能，用于高性能计算集群管理，属于全新的企业级细分场景。
- **ODT 文档技能** — [PR #486](https://github.com/anthropics/skills/pull/486)：支持 OpenDocument 格式的创建、模板填充及 ODT 转 HTML，填补了开放标准文档支持的空白。
- **文档排版质量控制** — [PR #514](https://github.com/anthropics/skills/pull/514)：可对 Claude 所有输出文档进行常见问题排查（孤行词、页眉孤行、编号对齐错误等 AI 生成文档常见问题）。
- **mcp-builder 模型更新** — [PR #1724](https://github.com/anthropics/skills/pull/1724)：将默认评估模型更新为 `claude-sonnet-5`，属于与最新模型版本对齐的低风险维护更新。

---

## 4. 技能生态洞察
社区最集中的需求方向是**提升技能开发工具链的可靠性与可信度**——从修复触发评估框架、MCP 兼容性，到验证技能来源、完善安全护栏；同时需求也延伸至更丰富的企业级技能，覆盖协作、治理，以及专业文档/开发工作流场景。

---

# Claude Code 社区周刊 | 2026-09-21
数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 近 7 天亮点
本周 Claude Code 连续发布 8 个版本（v2.1.271–v2.1.278），核心聚焦自动模式成本优化、AGENTS.md 支持、网关可观测性与可靠性修复。社区反馈的高优先级问题包括 Cowork 工作流缺陷、自动模式权限回退、Chrome 扩展安全限制；Pull Request 侧则以 diff 模块优化与插件稳定性修复为主。

---

## 2. 版本发布
过去 7 天共发布 8 个版本，核心变更如下：
- **v2.1.278**：Claude API、企业版、Bedrock、Vertex、Foundry 及网关用户的自动模式默认启用服务端分类器（无分类器额外费用）；支持的平台可通过设置 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 关闭该功能。
- **v2.1.277**：新增 AGENTS.md 兜底逻辑（当项目无 CLAUDE.md 时读取，可在 `/config` 的「项目指令」中配置；Bedrock/Vertex/Foundry 暂未支持）；新增 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` 参数，适配出口受限的 Claude 应用网关。
- **v2.1.276**：修复 v2.1.275 中当 `ANTHROPIC_BASE_URL` 指向代理/网关时，所有请求均返回 `400 … Input tag 'advisor_20260301'` 错误的回退问题。
- **v2.1.277**：新增 Claude 应用网关登录的已登录账户确认（可在 `/status` 中查看）；新增立即发送快捷键（Ctrl+Enter / Ctrl+X Ctrl+S），可中断当前轮次并发送队列中的消息。
- **v2.1.274**：新增严重内存占用警告及安全恢复步骤；新增 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 参数，限制非交互轮次中 MCP 服务器连接的等待时长；为核心工具集新增 `effort` 属性。
- **v2.1.273**：为 LLM 网关新增 5 个网关提示请求头（`x-claude-code-request-class`、`x-claude-code-agent-type` 等，可通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 启用）；新增新会话通知。
- **v2.1.272**：通用 Bug 修复与可靠性优化。
- **v2.1.271**：为 Claude Code 远程会话（云/自托管运行器，受组织策略约束）新增快速模式支持；为全屏模式下的 `/config` 面板新增鼠标滚轮滚动功能。

---

## 3. 热门问题
1. **#76694 [BUG] Cowork：新项目丢失「选择文件夹」功能**  
   Chat/Cowork 合并后，右键菜单被替换为仅支持上传的聊天式知识菜单，导致新 Cowork 项目无法选择文件夹，影响 Windows 和 macOS 平台。30 条评论，26 👍 —— 本周开放问题中互动量最高。
   [查看问题](https://github.com/anthropics/claude-code/issues/76694)

2. **#22992 [增强建议] 为无界面环境支持设备码认证（RFC 8628）**  
   无界面环境下的 Pro/Max 用户缺少可用的认证流程，因为标准 OAuth 需要浏览器操作。19 条评论，36 👍 —— 活跃需求中获赞最高，经社区数月推动后本周有更新。
   [查看问题](https://github.com/anthropics/claude-code/issues/22992)

3. **#95326 [BUG] Chrome 端 Claude：reddit.com/redd.it 上所有工具被屏蔽**  
   自 2026-09-18 起，Chrome 扩展在 Reddit 站点上屏蔽所有工具，提示「因安全限制不允许使用」，但此前可正常使用。7 条评论，5 👍 —— 近 3 天增长迅速的反馈。
   [查看问题](https://github.com/anthropics/claude-code/issues/95326)

4. **#95200 [BUG] 自动模式自 2.1.270 起出现回退：独立仓库所有者权限过度拦截**  
   一名独立游戏开发者反馈，在自有仓库进行常规发布工作时，自动模式的拒绝次数增加了 12 倍；切回手动模式后，一次简单的配置修改需要 55 次以上的权限点击。3 条评论 —— 对重度用户影响严重的回退问题。
   [查看问题](https://github.com/anthropics/claude-code/issues/95200)

5. **#60955 [文档] 未记录「会话状态分类」的隐私/成本影响**  
   设置中的「会话状态分类」开关缺少隐私影响及相关成本的说明文档。2 条评论，22 👍 —— 社区对计费/隐私功能不透明存在明显担忧。
   [查看问题](https://github.com/anthropics/claude-code/issues/60955)

6. **#84698 [BUG] 桌面端：diff/提交刷新时后台无提示执行 `git fetch`**  
   桌面应用会在后台向 origin 执行无迹可查的 `git fetch` 调用，且没有关闭设置，引发受限网络和性能方面的担忧。6 条评论，3 👍。
   [查看问题](https://github.com/anthropics/claude-code/issues/84698)

7. **#90603 [BUG] 美式英语项目中出现不一致的英式英语拼写**  
   Claude 在美式英语（en-US）区域设置的项目代码中，会无提示使用英式英语拼写（如 "colour"、"prioritise"），且多账户均可复现。2 条评论，关联相关功能需求 #91679。
   [查看问题](https://github.com/anthropics/claude-code/issues/90603)

8. **#67766 [已关闭] 间歇性「socket 连接意外关闭」错误**  
   重度交互用户每天会遇到 8–18 次中途 socket 断连（服务端发起 FIN），用户已提供抓包数据和请求 ID。本周因超期未更新被关闭，共 8 条评论 —— 仍是重度用户的痛点。
   [查看问题](https://github.com/anthropics/claude-code/issues/67766)

9. **#95425 [BUG] `/login` 提示成功但 token 未保存（锁文件过期）**  
   在 macOS 版 v2.1.277 中，过期的 `.storage-write.lock` 文件会导致登录提示成功，但 token 实际未保存（报错 ENOTDIR rmdir）。1 条评论 —— 最新版本引入的严重认证回退问题。
   [查看问题](https://github.com/anthropics/claude-code/issues/95425)

10. **#95576 [BUG] 云会话中 git 标签 `git push` 失败，返回 403**  
    Claude Code 云会话推送 git 标签时返回 403，即使 GitHub App 已授予完整权限且仓库无保护规则。1 条评论 —— 阻碍云环境下的 CI/发布工作流。
    [查看问题](https://github.com/anthropics/claude-code/issues/95576)

---

## 4. 核心 PR 进展
1. **#95698 [开放中] fix(plugins): 通过 bash 执行 ralph-wiggum 和 output-style 的 .sh 钩子，路径加引号**  
   修复 3 个内置插件（ralph-wiggum、output-style）的钩子执行失败问题——这些插件注册了未加引号的裸脚本路径，在含空格的路径下会失效。解决了 issue #78490 的一半问题。
   [查看 PR](https://github.com/anthropics/claude-code/pull/95698)

2. **#94847 [开放中] diff: 首次编辑仅在有文件可列出时才打开面板**  
   通过在自动打开前检查是否存在有效的已跟踪变更，修复了写入仓库外文件、被忽略文件或其他工作树时，diff 面板空窗打开（显示「无已跟踪变更」）的问题。
   [查看 PR](https://github.com/anthropics/claude-code/pull/94847)

3. **#87077 [开放中] fix(pr-review-toolkit): 修复所有 agent 中无效的 YAML 前置元数据**  
   修复了 agent 描述中未加引号的对话行被解析为嵌套 YAML 映射的问题，该问题会导致 agent 加载时前置元数据为空（无名称/描述/模型）。
   [查看 PR](https://github.com/anthropics/claude-code/pull/87077)

4. **#87079 [开放中] fix(security-guidance): 让 ** 通配符模式匹配零深度路径**  
   修复安全规则漏洞：`**/*.ts` 模式原本不匹配顶层文件，与文档中「`**` 匹配任意深度」的说明不符，存在安全扫描静默漏检的风险。
   [查看 PR](https://github.com/anthropics/claude-code/pull/87079)

5. **#71627 [开放中] docs(sandbox): 注明提示时批准的主机仅在当前会话有效**  
   补充文档说明：与配置中定义的允许域名不同，在提示阶段批准的沙箱网络域名不会跨会话持久化。
   [查看 PR](https://github.com/anthropics/claude-code/pull/71627)

6. **#95423 [开放中] diff: 只读 shell 命令后跳过重新拉取**  
   避免只读 shell 调用（ls、git status、cat、grep）后 diff 面板重新拉取数据，与内置面板行为保持一致，减少不必要的 git 操作。
   [查看 PR](https://github.com/anthropics/claude-code/pull/95423)

7. **#95618 [已关闭] telemetry: 完整行通过 $ 收集，批量发送，仅适用于内置插件**  
   为内置插件新增遥测模块支持，采用批量发送机制，并明确排除用户/管理员安装的插件以保障隐私。
   [查看 PR](https://github.com/anthropics/claude-code/pull/95618)

8. **#95409 [已关闭] mods/agents-md: AGENTS.md 项目指令模块**  
   新增官方 `agents-md` 模块源码，其读取 AGENTS.md 作为项目指令的逻辑与引擎读取 CLAUDE.md 一致，与 v2.1.277 的发布功能对齐。
   [查看 PR](https://github.com/anthropics/claude-code/pull/95409)

9. **#51452 [已关闭] 更新 README.md**  
   重写 README 以提升清晰度，移除 AI 风格的冗余表述，精简章节标题，简化安装说明，并修复失效的 npm 徽章。
   [查看 PR](https://github.com/anthropics/claude-code/pull/51452)

10. **#95488 [已关闭] diff: 停靠面板在打开前读取仓库数据，不再显示「加载 diff 中」状态**  
    通过在面板打开前预取仓库数据，消除了停靠式 diff 面板空的「加载 diff 中…」状态，与内置面板行为保持一致。
    [查看 PR](https://github.com/anthropics/claude-code/pull/95488)

---

## 5. 热门讨论
本期无相关讨论帖数据。

---

## 6. 功能需求趋势
1. **无界面/CLI 认证改进**：设备码 OAuth 流程（RFC 8628）是获赞最高的需求，对服务器/CI 用户至关重要。
2. **区域感知的输出默认值**：需求希望输出拼写匹配用户区域设置（例如美国用户使用美式英语），避免代码和文档中出现不一致的英式英语。
3. **会话记录工具**：需求官方提供只读的会话记录查看器，而非必须使用 `--resume` 才能回顾过往会话。
4. **VS Code 扩展功能对齐**：需求扩展具备 CLI 端的功能，例如幽灵文本下一条提示建议。
5. **沙箱透明度**：需求对沙箱网络权限的范围和持久化规则提供说明与配置控制。
6. **隐私防护**：需求对可能包含敏感识别信息（IP、主机名、MAC 地址）的诊断输出提供主动警告。

---

## 7. 开发者痛点
1. **自动模式过度拦截回退**：近期自动模式的变更导致独立仓库所有者的常规授权工作被拦截，手动模式下简单任务也需要大量权限点击。
2. **Cowork 工作流损坏**：Chat/Cowork 合并移除了核心的文件夹选择功能，导致协作场景下的新项目设置流程失效。
3. **后台操作不透明**：桌面应用中不可配置的后台 `git fetch` 调用引发性能和网络限制担忧，用户既无法控制也无法感知。
4. **功能文档缺失影响成本/隐私**：「会话状态分类」等设置缺少计费影响和数据使用的清晰说明，削弱用户信任。
5. **平台特定的版本回退问题**：近期版本引入了多项平台专属问题，包括 macOS 认证锁文件 Bug、Windows 窗口置顶问题、Xcode 升级后 iOS 模拟器工具失效。
6. **Chrome 扩展安全误判**：Reddit 等热门站点突然被全面屏蔽工具，扰乱浏览器自动化工作流，且暂无明确解决方案。
7. **云会话权限缺口**：尽管 GitHub App 权限正确，云会话中 git 标签推送仍失败，阻碍托管环境下的发布和 CI 工作流。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区摘要 – 2026-09-21

---

## 1. 过去一周亮点
本周基于 Rust 的 Codex 运行时迭代迅速，v0.156.0 累计发布 10 个 alpha 版本，同时推出稳定版 v0.155.1 补丁，修复了一个关键的服务商兼容性 bug。社区重点关注了大家呼声已久的实用功能，如 LSP 集成和远程控制；而速率限制不一致、Windows 桌面端可靠性问题则是 bug 反馈的重灾区。开发团队还推送了一批终端用户界面（TUI）和用量仪表盘的优化，旨在提升产品透明度与易用性。

---

## 2. 版本发布
- **rust-v0.155.1（稳定版）**  
  修复了新建本地 TUI 会话默认启用推理摘要，导致不支持该功能的服务商拒绝请求的问题。用户显式设置的配置仍会正常生效。  
  [#46467](https://github.com/openai/codex/issues/46467) | [发布说明](https://github.com/openai/codex/compare/rust-v0.155.0...rust-v0.155.1)
- **rust-v0.156.0-alpha.6 至 alpha.12（共 7 个版本）**  
  属于快速迭代的预发布版本，包含增量更新；完整更新日志尚未发布。可关注 [v0.156.0 里程碑](https://github.com/openai/codex/milestone/v0.156.0) 查看详情。

---

## 3. 热门问题
1. **#8745 – 为 Codex CLI 提供 LSP 集成（自动检测 + 自动安装）** [增强功能, agent]  
  社区呼声最高的需求（496 👍，66 条评论），希望内置语言服务器协议支持，让 Codex 能利用诊断信息和符号智能生成更高质量的代码。  
  [openai/codex#8745](https://github.com/openai/codex/issues/8745)

2. **#42987 – GPT-6 Astra Medium 在两次短对话中耗尽了 Plus 套餐 5 小时的配额** [bug, windows, rate-limits]  
  Plus 订阅用户反馈 Windows 端出现配额异常消耗的严重问题，仅 2 分钟使用就耗尽了 5 小时窗口的额度，动摇了用户对计费模式的信任。  
  [openai/codex#42987](https://github.com/openai/codex/issues/42987)

3. **#45835 – 网络连接正常时，Codex App 仍反复显示“所选模型已达容量上限”** [bug, rate-limits, app]  
  Windows 端的 Pro Lite 用户会收到虚假的容量不足错误，即便服务正常运行也无法继续工作流程。  
  [openai/codex#45835](https://github.com/openai/codex/issues/45835)

4. **#45307 – Windows 版 Codex 桌面端：首次对话成功后发送按钮变为禁用状态** [bug, windows, app]  
  这是一个严重的 UI 回归问题，用户在对话中完成首次交互后就无法发送后续消息。  
  [openai/codex#45307](https://github.com/openai/codex/issues/45307)

5. **#41849 – VS Code Remote-SSH：残留的 app-server 阻塞新会话，提示“该内容已在另一应用中打开”** [bug, extension, remote]  
  连接断开后会遗留孤立的 app-server 进程并持有锁，用户必须手动杀死进程才能恢复工作。  
  [openai/codex#41849](https://github.com/openai/codex/issues/41849)

6. **#28340 – Codex 移动端偶尔无法打开正在运行的任务对话** [bug, iOS, session]  
  iOS 用户无法稳定地从移动端访问桌面端活跃的任务，破坏了跨设备工作流的体验承诺。  
  [openai/codex#28340](https://github.com/openai/codex/issues/28340)

7. **#34458 – Windows 桌面端 + WSL agent：浏览器、Chrome 控制和 Computer Use 功能全部失效** [bug, mcp, computer-use]  
  与 WSL 集成的 agent 无法通过共享桥接访问浏览器或系统控制工具，严重影响 Windows 端的 agent 工作流。  
  [openai/codex#33458](https://github.com/openai/codex/issues/34458)

8. **#46819 – Codex 安全扫描通过子代理扇出，在约 44 分钟内耗尽了每周配额** [bug, rate-limits, subagent]  
  单次安全扫描生成的工作子代理数量过多，直接耗尽了 Pro 套餐一整周的配额，引发了对子代理成本管控的质疑。  
  [openai/codex#46819](https://github.com/openai/codex/issues/46819)

9. **#36868 – Codex 桌面端：Computer Use 在 macOS 上重复触发物理键盘输入和粘贴事件** [bug, app, computer-use]  
  agent 发起的按键操作会触发两次，导致输入内容错乱，在系统级自动化场景中还可能引发危险操作。  
  [openai/codex#36868](https://github.com/openai/codex/issues/36868)

10. **#46914 – config.toml 中的 `forced_login_method = "chatgpt"` 配置未生效** [bug, auth, CLI]  
    这是一项配置回归问题，用户无法依赖已保存的配置，必须在命令行中传入 `-c` 参数才能生效。  
    [openai/codex#46914](https://github.com/openai/codex/issues/46914)

---

## 4. 关键 PR 进展
以下列出的所有 PR 均已关闭/合并，由 `copyberry[bot]` 发布流水线提交：

1. **#46912 – 在 TUI 中持续显示配额警告**  
   将限制最严格的配额窗口信息直接显示在输入框提示行中，让用户能随时查看剩余用量。  
   [openai/codex#46912](https://github.com/openai/codex/pull/46912)

2. **#46910 – 打开设置选择器时保持对话记录的滚动位置**  
   避免用户打开模型/主题选择器时对话记录自动跳到底部，保留阅读上下文。  
   [openai/codex#46910](https://github.com/openai/codex/pull/46910)

3. **#46905 – 在 `/status` 中识别本地后台服务器**  
   将“远程”连接标签重命名为“服务器”，并清晰区分当前使用的是本地后台守护进程还是远程套接字。  
   [openai/codex#46905](https://github.com/openai/codex/pull/46905)

4. **#46895 – 新增对话记录和输入框选中文本的右键复制功能**  
   在 TUI 中支持标准的右键复制行为，符合桌面端的常规交互习惯。  
   [openai/codex#46895](https://github.com/openai/codex/pull/46895)

5. **#46883 – 新增 `/tui` 命令，可选择下次启动时的终端界面模式**  
   用户可通过选择器在回滚模式和全屏模式之间切换，设置会持久化保存到用户配置中。  
   [openai/codex#46883](https://github.com/openai/codex/pull/46883)

6. **#46882 – 优化 agent 命令中心的快捷键和布局**  
   将快捷键帮助按逻辑分组（导航、任务、视图），并优化底部提示栏提升可发现性。  
   [openai/codex#46882](https://github.com/openai/codex/pull/46882)

7. **#46877 – 允许子代理请求 MCP 唤起用户输入**  
   取消了仅根代理可通过 MCP 请求用户输入的限制，让子代理也能处理浏览器登录、表单填写和交互式审批等场景。  
   [openai/codex#46877](https://github.com/openai/codex/pull/46877)

8. **#46867 – 子代理结束时保留流式回答的展示状态**  
   将子代理活动的渲染延后到父级回答流完成后，避免流式输出过程中 UI 跳动。  
   [openai/codex#46867](https://github.com/openai/codex/pull/46867)

9. **#46866 – 在 TUI 用量视图中支持鼠标操作**  
   为用量浮层新增可点击的标签页、报表控件和鼠标滚轮滚动功能，交互更直观。  
   [openai/codex#46866](https://github.com/openai/codex/pull/46866)

10. **#46864 – 优化用量报表布局并保留阅读位置**  
    修复了切换报表时滚动位置重置的问题，同时优化了大小终端的布局适配。  
    [openai/codex#46864](https://github.com/openai/codex/pull/46864)

---

## 5. 热门讨论

### 创意想法
1. **#9200 – 新增从 ChatGPT 应用远程控制 Codex 的功能**（50 条评论，191 👍）  
  社区排名第一的创意：为桌面端 Codex 提供无头/守护进程模式，可通过移动端 ChatGPT 应用控制，无需再使用 VPN+SSH 的变通方案。  
  [openai/codex#9200](https://github.com/openai/codex/discussions/9200)

2. **#9618 – 怎么会没有 /rewind 或 /revert 功能？**（25 条评论，141 👍）  
  用户强烈要求为 agent 操作提供原生撤销功能，认为当前体验不如 OpenCode 和 Claude Code。没有该功能的话，很多用户觉得每次编辑后都得提交 git 版本。  
  [openai/codex#9618](https://github.com/openai/codex/discussions/9618)

3. **#14595 – 远程控制什么时候出？**（6 条评论，18 👍）  
  跟进帖，询问远程控制功能的路线图，指出第三方变通方案并不可靠。  
  [openai/codex#14595](https://github.com/openai/codex/discussions/14595)

4. **#25630 – 多账户切换**（6 条评论，8 👍）  
  简单的实用需求：提供一键切换账户功能，代替完整的登出/登录流程。  
  [openai/codex#25630](https://github.com/openai/codex/discussions/25630)

### 问答
1. **#2503 – 怎么滚动查看对话历史？**（10 条评论，36 👍）  
  长期存在的常见问题：CLI 新用户找不到滚动长对话记录的快捷键。  
  [openai/codex#2503](https://github.com/openai/codex/discussions/2503)

2. **#5111 – 关于社区 PR 的审核周期**（1 条评论，3 👍）  
  一位贡献者提交的非英文退格键 bug 修复已被合并，他询问社区 PR 何时能有更快的审核流程。  
  [openai/codex#5111](https://github.com/openai/codex/discussions/5111)

3. **#45938 – PreToolUse 可以拦截或重写调用，但不能替换工具返回结果——这是故意设计的吗？**（2 条评论，1 👍）  
  一位在 Codex 之上构建“体验层”的开发者深入探讨了钩子系统的边界。  
  [openai/codex#45938](https://github.com/openai/codex/discussions/45938)

### 作品展示
1. **#16329 – Awesome Codex CLI — 精选收录 150+ 生态工具**（8 条评论，1 👍）  
  由社区维护的索引，涵盖子代理、技能、插件、MCP 服务器等内容，解决生态工具难发现的问题。  
  [openai/codex#16329](https://github.com/openai/codex/discussions/16329)

2. **#46774 – 用你记得的关键词搜索旧的 Codex 会话**（1 条评论，1 👍）  
  一款跨代理会话搜索工具，可检索 Codex 和其他编程代理的历史记录。  
  [openai/codex#46774](https://github.com/openai/codex/discussions/46774)

3. **#46874 – Agent Lint：针对 Codex、AGENTS.md、MCP、Claude Code 和 Cursor 配置的开源 lint 工具**（0 条评论，1 👍）  
  一款通用配置校验工具，支持多平台编程代理的配置文件。  
  [openai/codex#46874](https://github.com/openai/codex/discussions/46874)

---

## 6. 功能需求趋势
1. **远程/无头控制** – 需求最高的方向：守护进程模式 + 移动端应用控制，已有 2 个以上活跃的创意讨论帖和数百个点赞。
2. **原生撤销/回退** – 用户希望为 agent 编辑提供一等的回退支持，无需手动操作 git。
3. **LSP 集成** – 内置语言服务器支持，通过诊断信息和符号智能提升代码质量。
4. **配额透明度与管控** – 提供更清晰的用量展示、细粒度限制和子代理成本防护，避免意外耗尽配额。
5. **账户切换** – 为拥有多个订阅的用户提供简单的多账户管理功能。

---

## 7. 开发者痛点
1. **速率限制不可预测** – 大量用户反馈几分钟内耗尽配额、虚假的“容量已满”错误，以及用量仪表盘与实际限额不匹配的问题。
2. **Windows 桌面端不稳定** – Windows 平台问题频发，包括发送按钮禁用、消息卡住、更新校验和失败、WSL 桥接故障和沙箱配置错误等。
3. **会话与锁管理问题** – 残留的 app-server 进程（尤其是 Remote-SSH 场景下）会阻塞新会话，提示含义模糊的“已在另一应用中打开”错误。
4. **子代理成本不透明** – 安全扫描和扇出型工作负载会耗尽配额，且没有用户可配置的防护机制或执行前预估功能。
5. **跨设备同步存在缺口** – 移动端客户端无法稳定访问运行中的桌面端任务，桌面端的项目聊天也会偶尔消失。
6. **Computer Use 可靠性不足** – macOS 上的输入事件重复、Windows 上的应用清单为空，以及缺少 Intel Mac 支持，都降低了自动化功能的可信度。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区周报 | 2026-09-21
数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 近7天核心动态
本周，Gemini CLI 团队针对即将发布的 v0.62.0 版本，在 nightly 构建中交付了多项稳定性与安全修复，包括核心 PTY 生命周期加固、OAuth 凭据持久化优化以及 UI 渲染防护机制。社区重点聚焦于智能体（agent）可靠性，热门讨论围绕子智能体卡死 Bug、Auto Memory 系统缺陷，以及更安全的默认模型行为需求展开。活跃 PR 主要面向企业配额可视化、Windows/进程管理边界场景及扩展生态健壮性。

---

## 2. 版本发布
### 活跃版本线（近7天）
- **v0.62.0-nightly（进行中）** — 每日构建推进下一个次要预览版本，核心、UI、认证模块均有修复合入：
  - 修复 ConPTY 进程退出生命周期同步问题，加固 PTY 输出终结逻辑（[变更日志](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df)）
  - 刷新时保留 OAuth 刷新令牌，使凭据删除操作具备幂等性（[#29339](https://github.com/google-gemini/gemini-cli/pull/29339)）
  - 为边框渲染中的负布局尺寸增加防护，避免 UI 崩溃
  - 修复对象展开时 `AgentLoopContext` 属性丢失的问题（[#29335](https://github.com/google-gemini/gemini-cli/pull/29335)）
  - A2A 服务端任务元数据端点对不支持的存储类型提前返回
- **v0.61.0-preview.0** — 新预览里程碑版本已发布，基于 v0.60.0 稳定版迭代优化了智能体与平台能力（[发布页](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0)）
- **v0.60.0（稳定版）** — 近期稳定发布，改进了网页抓取目标校验，并支持符合 RFC 9207 标准的 MCP OAuth 发行方标识

---

## 3. 热门 Issue
| Issue | 摘要 | 重要性 | 社区反响 |
|-------|---------|----------------|--------------------|
| [#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | `codebase_investigator` 子智能体即使达到最大轮次上限未完成分析，仍会返回 `status: "success"` 且终止原因为 `"GOAL"`。 | 严重正确性 Bug：会误导用户认为任务已完成，掩盖任务中断事实。标记为 P1 优先级，需重新测试。 | 13 条评论，2 👍 — 本周持续时间最长的智能体 Bug 讨论。 |
| [#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | 通用智能体在创建文件夹这类简单任务上会无限卡死；禁用子智能体委派后问题消失。 | 用户点赞最多的 P1 Bug；破坏基础工作流下的核心智能体可用性。 | 8 条评论，8 👍 — 互动反应数最高。 |
| [#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | 提议利用 Gemini 3 原生的 bash 工具亲和性，增加安全的 POSIX 沙箱能力，让模型可安全地链式调用 `grep`/`sed`/`awk`。 | 高投入增强功能，有望在保障安全边界的前提下，大幅提升代码库工作流的生产力。 | 9 条评论，1 👍 — 深入的架构讨论。 |
| [#22745 Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | 跟踪 AST 感知工具调研的史诗级 Issue，目标是减少 token 噪声、提升读取精度、加快代码库导航速度。 | 战略性质量优化，针对大上下文代码操作的高成本问题。 | 7 条评论，1 👍 — 跨团队规划项。 |
| [#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | 有用户反馈模型从不会自主调用自定义技能/子智能体，即便任务高度相关（如 `gradle`/`git` 技能）。 | 可用性缺口：如果模型无需显式提示就不会调用，用户在自定义技能上的投入将被浪费。 | 6 条评论，0 👍 — 典型用户痛点。 |
| [#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 会在机密信息脱敏**之前**，将对话内容发送给提取模型，存在潜在数据泄露路径。 | P2 级安全隐患，影响新 Auto Memory 功能的可信度。 | 5 条评论，0 👍 — 安全排查进行中。 |
| [#21983 browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | 浏览器子智能体在 Linux Wayland 会话下失败，但错误地报告 `GOAL` 终止。 | P1 级平台兼容性 Bug；阻碍 Linux 桌面用户使用核心智能体功能。 | 4 条评论，1 👍 — 反复出现的平台边界问题。 |
| [#22232 Enhance browser_agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232) | `browser_agent` 遇到锁定的持久化浏览器配置时会快速失败，而非恢复或接管现有会话。 | 面向重度浏览器智能体持久会话用户的体验优化。 | 4 条评论，0 👍 — 高频用户需求。 |
| [#20079 Symlinked agent files are not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/` 下的智能体定义文件如果是符号链接会被忽略，破坏点文件管理工作流。 | 影响虽小但对跨设备同步配置的用户体验影响显著。 | 4 条评论，0 👍 — 长期存在的小痛点。 |
| [#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | 模型有时会使用破坏性命令（`git reset --force`、不安全的数据库操作），而明明有更安全的替代方案。 | 安全防护请求；降低自动化任务中不可逆的用户数据丢失风险。 | 3 条评论，1 👍 — 从互动比例看用户关注度很高。 |

---

## 4. 重点 PR 进展
| PR | 类型 | 描述 |
|----|------|-------------|
| [#29432 fix(core): settle queued tool calls on scheduler disposal](https://github.com/google-gemini/gemini-cli/pull/29432) | Bug 修复 | 智能体调度器销毁时拒绝待处理的工具调用批次，防止 Promise 挂起及关机后仍执行排队任务的问题。 |
| [#29429 fix(quota): surface server-reported limit and reset window](https://github.com/google-gemini/gemini-cli/pull/29429) | 企业功能 | 解析 Cloud Code API `RESOURCE_EXHAUSTED` 错误中的 `quotaResetTimeStamp`、`quotaResetDelay` 和 `uiMessage`，让用户明确知道哪项配额超限及何时重置。修复 #29425。 |
| [#29427 fix: forward signals from parent to child process to prevent orphans](https://github.com/google-gemini/gemini-cli/pull/29427) | Bug 修复（已合入） | 将 `SIGTERM`/`SIGHUP` 信号从启动/重启父进程转发给子进程，消除退出时产生的后台孤儿进程。修复 #25590。 |
| [#29426 fix(platform): detect legacy CPU incompatibility before Antigravity migration](https://github.com/google-gemini/gemini-cli/pull/29426) | 平台修复（已合入） | 在提示用户安装 Go 语言编写的 Antigravity 二进制文件前，先检查 CPU 是否支持 AVX/AVX2，避免老旧硬件（AMD Llano、Intel Core 2 Duo）上立即出现 `SIGILL` 崩溃。 |
| [#29404 feat(cli): add 'gemini models list' with JSON output](https://github.com/google-gemini/gemini-cli/pull/29404) | 新功能 | 新增非交互式命令 `gemini models list -o json`，支持脚本化模型发现，集成方无需硬编码模型 ID。 |
| [#29387 fix(cli): don't let one malformed extension fail all loading](https://github.com/google-gemini/gemini-cli/pull/29387) | 扩展健壮性 | 将扩展安全校验移入现有 try/catch 降级逻辑中，单个损坏的扩展目录仅记录警告，不会导致所有扩展加载失败。 |
| [#29375 fix(cli): decode DevTools HTTP chunks with stateful decoder](https://github.com/google-gemini/gemini-cli/pull/29375) | Bug 修复 | 将 DevTools 活动日志中按块 UTF-8 解码的方式，替换为有状态的 `TextDecoder`，修复跨 HTTP 块边界拆分的多字节字符乱码问题。 |
| [#29282 fix(auth): persist oauth credentials after login](https://github.com/google-gemini/gemini-cli/pull/29282) | 认证修复 | 浏览器/用户码登录成功后立即持久化 OAuth 令牌，避免下次运行时再次要求用户重新认证。 |
| [#28183 fix(vscode-ide-companion): preserve terminal focus when closing diff tabs](https://github.com/google-gemini/gemini-cli/pull/28183) | 体验优化 | 批准编辑后保持键盘焦点在 VS Code 集成终端中，不会跳转到已关闭的差异对比标签页。等待社区评审。 |
| [#26686 feat(cli): support git submodules in extension installs](https://github.com/google-gemini/gemini-cli/pull/26686) | 扩展功能 | `gemini extensions install` 时初始化 Git 子模块，修复带子模块依赖的扩展安装失败的问题。欢迎贡献。 |

---

## 5. 热门讨论
*省略 — 数据集未提供 GitHub Discussions 相关数据。*

---

## 6. 功能请求趋势
根据 Issue 和增强请求汇总，社区主要呼吁在三个方向投入：
1. **智能体自主性与智能化**：更好地自动使用自定义技能/子智能体、AST 感知代码读取减少 token 浪费、以及精准文件访问的"分层提取"架构（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）。
2. **持久化、高可靠状态**：基于文件的任务跟踪替代上下文内 TODO 列表、支持会话恢复的 `/compress` 历史记录、以及持久化的工作区级策略（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)、[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)）。
3. **安全沙箱执行**：零依赖沙箱的原生 POSIX 工具执行，以及针对破坏性 shell/git 操作的防护机制（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）。

---

## 7. 开发者痛点
1. **智能体可靠性缺口**：通用智能体卡死、达到最大轮次时误报成功、Wayland 下浏览器智能体失败，是侵蚀智能体工作流信任度的三大 P1 Bug（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。
2. **Auto Memory 质量问题**：低信号会话无限重试、无效内存补丁静默失败、机密信息未提前脱敏，同时带来性能与安全隐患（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）。
3. **扩展生态脆弱**：格式错误的扩展会导致全部加载失败、Git 子模块安装出错、扩展设置无文档，增加了第三方开发者的接入门槛（[#29387](https://github.com/google-gemini/gemini-cli/pull/29387)、[#26686](https://github.com/google-gemini/gemini-cli/pull/26686)、[#29374](https://github.com/google-gemini/gemini-cli/pull/29374)）。
4. **终端与跨平台边界问题**：调整窗口大小时闪烁、Windows IDE 检测运行 Unix 命令、截断时代理对拆分、子进程孤儿化，是反复出现的平台级小痛点（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)、[#29376](https://github.com/google-gemini/gemini-cli/pull/29376)、[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)、[#29427](https://github.com/google-gemini/gemini-cli/pull/29427)）。
5. **工具数量扩展限制**：工具数超过 128 的用户会遇到 400 错误，且没有内置工具范围管理逻辑来处理大型工具集（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 | 2026-09-21

---

## 1. 近7天重点动态
本周 Copilot CLI 团队共发布 10 个版本（从 v1.0.84-6 到 v1.0.87-0），核心更新包括全量用户开放 Vim 模式、自定义代理支持仓库指令文件、提升会话恢复可靠性，以及新增 Auto 路由层级的策略控制。社区反馈的问题主要集中在 MCP 服务稳定性、会话内存泄漏和配置边界场景上，本周跟踪的 30 个问题中有 21 个已关闭。

---

## 2. 版本发布
| 版本 | 发布类型 | 核心变更 |
|---------|--------------|-------------|
| **v1.0.87-0** | 预发布 | - 为 Auto 路由层级新增用户/托管启动默认配置，包括严格模式和支持用户覆盖的组织策略<br>- 同一模式下连续的引导提示现在会合并为一条待处理消息；在空的聊天输入框中按 **向上键** 可编辑合并后的提示（含粘贴的文本） |
| **v1.0.86** | 稳定版 (2026-09-17) | - 自定义代理可通过 frontmatter 中的 `include-custom-instructions: true` 配置，启用对仓库指令文件（`AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md`）的读取支持<br>- 恢复活跃会话时，若未设置 `plugin-directory`、`discovery` 或 `working-directory` 覆盖项，将保留市场配置 |
| **v1.0.86-2** | 补丁版 | 问题修复与稳定性优化 |
| **v1.0.86-1** | 补丁版 | 向后移植了自定义代理指令文件支持与会话恢复市场配置保留功能 |
| **v1.0.86-0** | 预发布 | - 修复了会话恢复功能，使其可处理可恢复损坏的转录文件<br>- 修复了紧凑时间线中推理文本变暗的问题（现在可正常阅读）<br>- 修复了 Autopilot 在任务完成被接受后仍意外继续运行的问题 |
| **v1.0.85** | 稳定版 (2026-09-16) | - Vim 模式正式上线；可通过 `/vim` 或 `editorMode: "vim"` 启用，输入时会显示模式指示器<br>- 在 `/settings` 中新增选项，可启用代理/子代理上下文管理工具<br>- 新增 `transcriptView` 配置项 |
| **v1.0.84-9** | 补丁版 | - 新增 `/settings` 上下文管理启用选项（向后移植）<br>- 减少了大型本地会话历史的元数据扫描耗时（会增加线程/内存占用）<br>- 修复了 `End`/`Ctrl+E` 键无法移动到自动换行行真实末尾的问题 |
| **v1.0.84-8** | 补丁版 | - 新增 `transcriptView: "concise"` 配置，可将工具活动分组为可展开的工作摘要<br>- 支持通过 `/factories` 暂停/恢复 Agent Factory 运行<br>- 修复了登录/切换账号/登出后模型列表不刷新的问题 |
| **v1.0.84-7** | 补丁版 | - 修复了仅支持自适应模式的 Claude 模型的思考功能（关闭思考时不再报错；推理努力程度上限设为高）<br>- 修复了 `/clear` 命令触发 `sessionEnd` 钩子的问题 |
| **v1.0.84-6** | 补丁版 | - 新增 `/config` 侧边栏配置界面<br>- 新增独立于上游代理的 `/sandbox` 网络主机允许/拒绝规则<br>- 将托管的编辑/写入规则扩展至原生 shell 重定向，并支持原地 `sed` 操作 |

---

## 3. 热门问题
以下 10 个问题因社区参与度高、影响范围广或解决状态受关注而被列出：

1.  **#4870 — MCP: Figma 远程服务器 (mcp.figma.com) 加载失败 — `server/discover` 返回 `-32601` 被判定为致命错误（VS Code 中可正常使用）**
    [github/copilot-cli#4870](https://github.com/github/copilot-cli/issues/4870)
    *重要性说明：* 暴露了 CLI 与 VS Code 的 MCP 实现在官方第三方 MCP 服务器上的兼容性差异。该 issue 收到 8 条评论和 11 个 👍 后关闭，是本周社区参与度最高的问题。

2.  **#4699 — 长时间运行 `--resume` 会话时出现 OOM 崩溃（`JavaScript heap out of memory`）；崩溃转储文件写入用户当前工作目录**
    [github/copilot-cli#4699](https://github.com/github/copilot-cli/issues/4699)
    *重要性说明：* 对于运行长周期代理会话的高级用户来说，这是严重的可靠性问题。目前处于开放状态，有 5 条评论和 6 个 👍；影响运行恢复会话超过 10 小时、触及 4 GiB V8 堆内存上限的用户。

3.  **#4069 — TUI 在交互中途卡死（屏幕清空、输入无响应、Ctrl+C/Ctrl+\ 无效）— WSL2 + Windows Terminal 环境**
    [github/copilot-cli#4069](https://github.com/github/copilot-cli/issues/4069)
    *重要性说明：* 这是广泛使用的平台组合（WSL2/Windows Terminal）上的严重终端无响应 bug。经调查 EIO/EPIPE 传输错误后，该 issue 已关闭，共收到 8 条评论和 9 个 👍。

4.  **#4765 — 当工作目录不是仓库根目录时，copilot cli 无法读取配置**
    [github/copilot-cli#4765](https://github.com/github/copilot-cli/issues/4765)
    *重要性说明：* 导致工作区布局为「非 git 父目录下包含多个仓库」的用户无法加载 `.mcp.json` 或钩子文件。该 issue 已关闭，共收到 8 条评论。

5.  **#3762 — 配置项 contextTier 无实际作用**
    [github/copilot-cli#3762](https://github.com/github/copilot-cli/issues/3762)
    *重要性说明：* 属于配置透明度问题 —— 一项已在文档中说明的设置，除非用户先手动选择长上下文模型，否则不会生效。该 issue 收到 7 条评论后关闭。

6.  **#1675 — 检查点恢复（git clean -fd）会永久删除所有未跟踪文件**
    [github/copilot-cli#1675](https://github.com/github/copilot-cli/issues/1675)
    *重要性说明：* 存在数据丢失风险的 bug：检查点回滚会在仓库根目录执行 `git clean -fd`，删除用户未跟踪的文件。该 issue 收到 5 条评论后关闭。

7.  **#4224 — 子代理调用的 OTel 跨度未包含计费属性，导致外部成本统计低估实际账单**
    [github/copilot-cli#4224](https://github.com/github/copilot-cli/issues/4224)
    *重要性说明：* 影响使用 OpenTelemetry 进行成本观测的企业团队 —— 子代理的使用量无法被外部计费追踪系统统计到。该 issue 已关闭，共收到 5 条评论和 1 个 👍。

8.  **#4905 — 桌面应用：会话生成后几分钟就失效 ——「此会话的 GitHub 凭据注册已不可用」**
    [github/copilot-cli#4905](https://github.com/github/copilot-cli/issues/4905)
    *重要性说明：* 影响依赖内置 CLI 服务器模式的桌面应用用户，原因是 github-mcp-server 目录状态过期导致致命错误。目前处于开放状态，有 4 条评论和 2 个 👍。

9.  **#4910 — 非交互式 MCP 工具调用在进度通知后挂起，直到空闲超时才结束**
    [github/copilot-cli#4910](https://github.com/github/copilot-cli/issues/4910)
    *重要性说明：* 阻碍了 CI/自动化场景使用 —— 对 Azure MCP 工具的非交互式 CLI 调用会挂起 5 分钟。目前处于开放状态，有 3 条评论。

10. **#4807 — 空闲状态下的 Copilot CLI 触发 `FileWatch` 事件风暴，占用两个 CPU 核心并生成 33+ GB 的日志**
    [github/copilot-cli#4807](https://github.com/github/copilot-cli/issues/4807)
    *重要性说明：* 严重的资源泄漏 bug：空闲进程可能持续数天占用 200% 以上 CPU，并通过调试日志占满磁盘空间。目前处于开放状态，有 2 条评论。

---

## 4. 重要 PR 进展
过去 7 天 `github/copilot-cli` 仓库没有拉取请求更新。

---

## 5. 热门讨论
本期无讨论数据，故省略该部分。

---

## 6. 功能需求趋势
从本周的问题中，可归纳出三个明确的功能方向：
1.  **更广泛的 MCP 生态兼容性** —— 多次提出要与 VS Code 的 MCP 处理能力对齐、支持更多第三方 MCP 服务器，以及更健壮的传输错误处理（例如 #4870、#1886、#2892、#4731）。
2.  **更灵活的配置与上下文控制** —— 需求包括支持仓库根目录外的配置发现、可用的多钩子 `additionalContext` 注入、细粒度的上下文层级控制，以及更好的大型指令文件处理能力（例如 #4765、#3762、#3589、#3621）。
3.  **更高效的会话与工作流体验** —— 需求包括更好的提示排队/暂存功能、跨 Git 托管平台的远程会话，以及更可预测的检查点/恢复行为（例如 #3692、#3034、#2922、#4673）。

---

## 7. 开发者痛点
本周反馈最集中的常见问题：
- **MCP 可靠性缺陷**：服务器发现频繁出错、stdio 传输超时、OAuth 配置错误、调用取消后工具列表损坏等问题，给构建 MCP 工作流的团队带来了阻碍。
- **长时间运行的会话稳定性差**：恢复会话时的 OOM 崩溃、`events.jsonl` 文件损坏、空闲时文件监听事件风暴、凭据意外过期等问题，都会中断长时间运行的代理任务。
- **配置不透明与边界场景问题**：文档记载的设置无实际效果、非仓库目录下的配置文件无法被识别、Windows 平台特有的路径/编辑器启动失败等问题，增加了配置上手难度。
- **数据丢失与安全顾虑**：检查点恢复不安全（会删除未跟踪文件）、自动恢复会重新运行已中止的任务等问题，降低了用户对自动化代理操作的信任。
- **Windows/WSL 平台回归问题**：终端卡死、`.bat`/`.cmd` 格式的 stdio MCP 启动失败、编辑器键位不匹配等问题，对 Windows 用户的影响尤为突出。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区周报 | 2026-09-21
---

## 1. 过去7天重点动态
过去一周，OpenCode 社区重点聚焦免费版使用 bug、V2 新布局带来的 UI/UX 体验退化，以及会话膨胀、服务崩溃等核心性能问题。v1.18.31 已发布，修复了 ACP 会话状态恢复、TUI 认证错误处理等关键问题；待合并的 PR 则针对无输出静默卡顿、`--version` 启动缓慢、OAuth 连接状态不可见等高频痛点展开优化。免费版配额与重试逻辑的投诉在 issue 区占比最高，过去7天内相关报告已超过5起。

---

## 2. 版本发布
### v1.18.31
- **核心 Bug 修复**：修复加载、恢复或分叉会话时，ACP 会话模型、effort、模式与推理块边界丢失的问题（贡献者：@JacobNWolf）。[发布链接](https://github.com/anomalyco/opencode/releases/tag/v1.18.31)
- **TUI Bug 修复**：启动阶段现在会显式抛出远程配置认证错误，并以失败状态退出，而非静默失败。
- **扩展功能**：源数据中该部分内容被截断，完整详情请查阅发布说明。

---

## 3. 热门 Issue
1. **#49433 [待处理] 提供商返回错误（控制台）：OpenCode 免费版仅能在 OpenCode 内部使用**  
   48 条评论 · 12 👍  
   *重要性说明*：这是当前评论数最多的开放 issue，在最新的 pacman 构建版本中被上报，即使用户运行官方客户端也完全无法使用免费版服务。社区正在排查根因（环境检测、认证令牌问题），目前暂无官方修复方案。  
   [链接](https://github.com/anomalyco/opencode/issues/49433)

2. **#29363 [待处理] Bug：配置中的 `limit.output` 被静默限制为 32k；`OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` 是个糟糕的临时方案**  
   22 条评论 · 23 👍  
   *重要性说明*：这是高上下文模型（DeepSeek、GPT-4o、Claude）重度用户的长期痛点（自2026年5月起存在）。32k 的静默上限会破坏大型代码库重构等使用场景，而实验性环境变量的临时方案既无文档说明，也不稳定可靠。  
   [链接](https://github.com/anomalyco/opencode/issues/29363)

3. **#37546 [待处理] Web 端：无法回退到旧布局，且新布局缺少工作区/工作树功能**  
   8 条评论 · 26 👍  
   *重要性说明*：这是获赞最多的 UI 退化问题：V2 网页版布局移除了工作区/git 工作树支持，且没有切换回旧版 UI 的选项。对于依赖工作树并行开发的团队来说，核心工作流直接受阻。  
   [链接](https://github.com/anomalyco/opencode/issues/37546)

4. **#10448 [待处理] 功能请求：新增 Zen 余额 API 接口**  
   8 条评论 · 30 👍  
   *重要性说明*：这是获赞最多的开放功能请求，自2026年1月起持续活跃。用户希望能以编程方式获取 Zen 账户余额，用于集成状态栏、自动化工具与配额追踪系统。  
   [链接](https://github.com/anomalyco/opencode/issues/10448)

5. **#49927 [待处理] 一周内首次使用会话就提示免费额度已用完**  
   12 条评论 · 0 👍  
   *重要性说明*：属于免费版配额 bug 集中爆发的问题之一。用户反馈在一周内首次启动会话时就立刻提示“额度已用完”，说明配额追踪的重置逻辑存在缺陷。同期已有多起类似报告提交。  
   [链接](https://github.com/anomalyco/opencode/issues/49927)

6. **#50093 [待处理] 免费额度已用完，且不同免费模型间的重试计时器会持续叠加延长**  
   6 条评论 · 5 👍  
   *重要性说明*：递增的重试计时器（6小时→更长）会在不同免费模型间持续生效，即使用户切换模型也会陷入惩罚循环，进一步加剧了用户对免费版可靠性的不满。  
   [链接](https://github.com/anomalyco/opencode/issues/50093)

7. **#33884 [待处理] 1.17.10 版本中，通过 npm 包规范引用的 TUI 插件会静默加载失败（OpenTUI 0.4.2 双入口回归问题）**  
   8 条评论 · 1 👍  
   *重要性说明*：这是插件生态的严重退化问题：通过 npm 安装的 TUI 插件会静默失败，用户看不到任何错误提示。`dev` 分支已通过将 OpenTUI 回退到 0.3.4 版本临时缓解，但在下次版本升级前，加载器的核心 bug 仍未修复。  
   [链接](https://github.com/anomalyco/opencode/issues/33884)

8. **#43355 [待处理] [桌面端] Agent 回合结束后 UI 冻结 —— 渲染进程卡在 ResizeObserver 循环；只能强制退出并重启恢复**  
   7 条评论 · 0 👍  
   *重要性说明*：这是 v1.18.18 版本桌面端（Electron）的严重稳定性 bug，Agent 回合结束后应用就完全无法使用。后端功能仍正常，但渲染进程会永久挂起，必须完全重启才能解决。  
   [链接](https://github.com/anomalyco/opencode/issues/43355)

9. **#49965 [待处理] 针对 Ollama（兼容 OpenAI 协议）提供商，每次工具调用步骤后都会触发自动压缩，哪怕远未达到上下文限制**  
   5 条评论 · 0 👍  
   *重要性说明*：这是本地模型（Ollama）用户的性能杀手 bug。每次工具调用后都进行不必要的自动压缩，会大幅拖慢 Agent 工作流，还会浪费本地硬件的计算资源。  
   [链接](https://github.com/anomalyco/opencode/issues/49965)

10. **#50246 [待处理] 服务端：v2.0.11 后台服务反复出现段错误（SIGSEGV，Linux x64）**  
    0 条评论 · 0 👍  
    *重要性说明*：这是严重的稳定性退化问题：后台服务单日崩溃9次，均为 SIGSEGV 错误，每次崩溃都会生成 240–380 MB 的核心转储文件。虽然自动重启暂时掩盖了问题，但会导致会话间歇性断开与性能延迟。  
    [链接](https://github.com/anomalyco/opencode/issues/50246)

---

## 4. 重点 PR 进展
1. **#50253 [待合并] refactor(opencode)：命令懒加载，让 `--version` 跳过完整启动流程**  
   *贡献者*：@Fluffy-Bunny-23  
   通过延迟完整命令图的加载，修复了 `opencode --version` 执行缓慢的问题。当前由于不必要的启动开销，在负载较高的系统上输出版本号需要数秒时间。本 PR 取代了已自动关闭的 #50219。  
   [链接](https://github.com/anomalyco/opencode/pull/50253)

2. **#50251 [待合并] fix(session)：显式提示无模型输出的回合结束状态**  
   *贡献者*：@hiteshjain118  
   关闭 #50250。修复了当提供商返回干净的 `stop` 信号但零输出令牌时，会话静默闲置的问题。本 PR 增加了用户可见的反馈，避免用户将无输出回合误认为会话卡死。  
   [链接](https://github.com/anomalyco/opencode/pull/50251)

3. **#50254 [待合并] [需合规审核] fix(mcp)：对未认证的 200 握手响应启动显式 OAuth 流程**  
   *贡献者*：@eagleeyejack  
   修复了 Gmail MCP “假连接” bug。此前 Gmail MCP 对未认证的握手也会返回 HTTP 200，导致客户端在无凭证的情况下也提示连接成功。本 PR 针对未认证的 200 响应会显式触发 OAuth 授权流程。  
   [链接](https://github.com/anomalyco/opencode/pull/50254)

4. **#49560 [待合并] fix(tui)：支持在移动会话时指定自定义目标路径**  
   *贡献者*：@mavasbel  
   关闭4个相关 issue。扩展了 `/move` 会话命令的能力，支持将会话移动到当前项目工作树之外的目标路径，而不再局限于活动项目的现有工作树内。  
   [链接](https://github.com/anomalyco/opencode/pull/49560)

5. **#50106 [待合并] fix(core)：停止向持久化事件快照中重复写入摘要差异**  
   *贡献者*：@monody0007  
   关闭 #48641，关联 #46833。通过消除事件快照中重复的摘要差异存储，解决了会话严重膨胀的问题。该问题与 #50089 中报告的大型工作树下堆内存激增数 GB 的问题相关。  
   [链接](https://github.com/anomalyco/opencode/pull/50106)

6. **#50256 [待合并] fix(app)：仅注册一个服务器时隐藏默认服务器相关控件**  
   *贡献者*：@Hona  
   当系统中仅注册一个服务器时，移除容易造成混淆的“设为默认”/“移除默认”菜单项以及“默认”徽章。单服务器场景下默认设置没有实际作用，相关控件属于不必要的 UI 干扰。  
   [链接](https://github.com/anomalyco/opencode/pull/50256)

7. **#50240 [已关闭] fix(cli)：将启动致命错误输出到 stderr**  
   *贡献者*：@Hona  
   将启动阶段的致命错误消息从 stdout 重定向到 stderr，这样桌面端/服务封装程序（仅接管 stderr 输出）就能展示有意义的崩溃上下文，而不会只显示“进程已退出”的空泛提示。  
   [链接](https://github.com/anomalyco/opencode/pull/50240)

8. **#50252 [待合并] [需关联 issue] fix(util)：暴露 npm 安装失败的详细信息**  
   *贡献者*：@andreivince  
   关联 #50080。修复了基于 npm 的插件安装失败时错误信息为空的问题，现在会向用户展示根因详情，避免静默失败或空白报错。  
   [链接](https://github.com/anomalyco/opencode/pull/50252)

9. **#47486 [待合并] fix(opencode)：支持插件工具实时更新元数据**  
   *贡献者*：@llucax  
   关闭 #37877。修复了插件工具 `metadata()` API 之前是空操作无返回的问题。该补丁将插件元数据调用正确桥接到宿主的 Effect 上下文中，实现了插件工具的元数据实时更新能力。  
   [链接](https://github.com/anomalyco/opencode/pull/47486)

10. **#50239 [待合并] fix(tui)：在外部目录权限提示中展示执行命令**  
    *贡献者*：@freimer  
    关闭 #50234。优化了安全体验：当操作涉及工作目录外的路径时，权限提示中会展示完整的 shell 命令，方便用户做出知情的允许/拒绝决策。  
    [链接](https://github.com/anomalyco/opencode/pull/50239)

---

## 5. 热门讨论
*省略：源数据中未提供讨论相关内容。*

---

## 6. 功能请求趋势
1. **编程式 Zen 配额/余额访问**：呼声最高的功能请求（#10448），希望提供公开的 Zen 余额 API 接口，用于自动化集成与状态栏接入。
2. **V2 UI 完整支持工作区/工作树**：多个 issue（#37546、#39614、#48958）呼吁恢复新布局中缺失的工作区与 git 工作树功能，并新增回退到旧版 UI 的开关。
3. **更高/更灵活的输出令牌上限**：用户希望取消 32k 输出令牌限制，支持在 `opencode.json` 中为每个模型自定义上限，而非依赖实验性环境变量。
4. **提升免费版透明度与可控性**：用户希望有更清晰的配额追踪、可见的重置时间线，以及更合理的重试逻辑（不会在不同免费模型间叠加惩罚）。
5. **提升插件生态可靠性**：要求实现更健壮的插件加载机制（支持 npm 规范、兼容 v1/v2 双版本插件的降级方案），并优化安装/加载失败时的错误可见性。

---

## 7. 开发者痛点
1. **免费版不稳定与配额 bug**：这是最常见的投诉类别：虚假的“额度已用完”错误、跨模型叠加的重试计时器、即便使用官方客户端也被阻止访问，给免费用户带来了极大困扰。
2. **V2 UI 体验退化**：新布局是用户不满的重灾区，缺少工作区、工作树、通知权限提示等核心功能，且没有回退选项，导致很多重度用户无法正常使用。
3. **全链路静默失败问题**：插件加载失败无报错、OAuth 连接无凭证却提示成功、会话无输出却闲置 —— 这些问题都给用户排查故障带来了极大麻烦。
4. **性能与膨胀问题**：`--version` 启动缓慢、存储差异导致会话堆内存激增数 GB、本地模型不必要的自动压缩、后台服务反复段错误，都在日常使用中拉低了体验。
5. **Shell/终端集成故障**：Fish shell 补全输出无效语法、SSH/tmux 环境下剪贴板复制失效、Termius SSH 客户端颜色主题不可读。
6. **桌面应用稳定性问题**：渲染进程冻结（ResizeObserver 循环）、文件操作的 IPC 处理器故障（导出会话、在资源管理器中显示）、新布局缺少通知权限，这些都严重影响桌面端用户体验。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区周刊 | 2026-09-21
---
## 1. 近7天亮点
本周Pi发布了v0.86.0和v0.86.1版本，带来两大核心功能：成本感知的提示词缓存预热、Meta Muse服务商支持。核心性能与稳定性优化是Issue追踪的重点，其中Windows兼容性、TUI流式输出CPU占用、服务商互操作性是社区讨论最活跃的话题。扩展生态也在持续扩张，新增了社区打造的IDE集成、运行时约束执行、工作流自动化等工具。
---
## 2. 版本发布
### v0.86.1
- **新功能：Meta Muse 服务商** – 可通过 `/login meta` 使用Meta账号登录，或配置 `META_API_KEY` 访问Muse Spark系列模型。[文档](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)
### v0.86.0
- **新功能：提示词缓存预热** – 通过成本感知的刷新逻辑，在长时间工具运行期间（以及可选的空闲状态下）保活高价值提示词缓存。[文档](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming)
---
## 3. 热门问题
| # | 标题 | 状态 | 重要性 | 社区反馈 |
|---|-------|--------|----------------|--------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] [sink-thread] 你在Windows上如何使用Pi？遇到了哪些问题？ | 进行中（Open） | Windows拥有庞大的未覆盖开发者群体；该Issue正在收集反馈，用于优先推进修复、文档完善以及Windows部署路径的开箱即用支持。 | 67条评论，截至9月20日讨论仍在活跃进行 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | TUI流式输出时占满单个CPU核心：Intl.Segmenter未缓存 + 逐块重建Markdown | 进行中（Open，已启动开发） | 模型流式输出时单核CPU占用达100%，会导致长会话无法使用。根因已定位：字形切分未缓存，且每个数据块都触发完整Markdown重渲染。 | 13条评论，6 👍；已确认是核心层问题（非扩展导致） |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | pi-ai向兼容服务商发送OpenAI专属的不支持请求字段/角色/鉴权信息 | 进行中（Open，Bug） | 由于Pi发送了专有字段、角色和请求头，OpenAI兼容服务商常会拒绝请求，导致与其他推理引擎的互操作性失效。 | 5条评论，多个不同服务商的用户均上报了该问题 |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | 工具调用参数解析在增量片段碎片化时复杂度变为平方级 | 进行中（Open） | 流式工具调用解析的时间复杂度随增量片段数量呈O(N²)增长，会导致大型/复杂工具调用出现明显延迟。 | 5条评论，是根因明确的性能优化请求 |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | Windows：CJK输入法输入卡顿，候选框常不显示 | 进行中（Open，Bug） | Windows上的CJK用户几乎无法正常输入，存在按键延迟、候选框缺失、15秒后输入卡死等问题；启用 `showHardwareCursor` 是已知临时方案。 | 3条评论，影响国际用户群体 |
| [#9785](https://github.com/earendil-works/pi/issues/9785) | bash超时参数：秒与毫秒单位混淆导致数小时上限；无默认值或合理最大值 | 已关闭（Closed，未分类） | bash超时参数的单位混淆会导致意外的数小时超时，且没有合理默认值，存在可靠性和成本风险。 | 3条评论，Bug明确，已有修复方向建议 |
| [#9770](https://github.com/earendil-works/pi/issues/9770) | find和grep工具无超时机制，进程被杀死时可能返回无错误的空结果 | 已关闭（Closed，未分类） | 不受管控的 `find`/`grep` 调用可能无限挂起，且被杀死的进程会静默返回空成功结果而非错误，导致模型做出错误决策。 | 3条评论，与bash工具的超时行为存在功能差距 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | 0.86.0 回归问题：RPC steer成功响应无法与扩展处理的输入关联 | 进行中（Open，Bug） | v0.86.0破坏了RPC steer追踪：当扩展消费并重新入队steer事件时，客户端无法将成功响应与排队的输入匹配，破坏了依赖RPC的扩展集成。 | 2条评论，为最新版本引入的回归问题 |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | 性能(tui)：800+条消息的会话中全量重渲染导致滚动/输入卡顿 | 已关闭（Closed，未分类） | 大型会话（800+条消息）会出现明显的滚动和输入卡顿，原因是Pi采用全量滚动回溯重渲染而非增量差异更新。 | 2条评论，有与OpenCode的OpenTUI实现的对比参考 |
| [#9794](https://github.com/earendil-works/pi/issues/9794) | 0.86.0 导入错误 | 已关闭（Closed，Bug） | 缺失打包chunk导致升级到v0.86.0后出现导入失败，Windows用户更新后无法加载工具。 | 4条评论，后续已通过v0.86.1热修复 |
---
## 4. 关键PR进展
| # | 标题 | 状态 | 描述 |
|---|-------|--------|-------------|
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat(coding-agent): add prompt cache warming | 已合并（Closed） | 实现了实验性的提示词缓存预热功能，通过成本感知的刷新保活缓存；初始仅支持Anthropic（当前唯一明确支持缓存的服务商）。已随v0.86.0发布。 |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | 已合并（Closed） | 新增Meta Muse作为支持的服务商，包含OAuth登录和API密钥鉴权方式。适配了其独有特性：基于身份令牌的每日Token重签发、以及突发式"伪流式"输出。已随v0.86.1发布。 |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | feat(ai): add mid-conversation system messages | 已合并（Closed） | 系统消息重构的第一层：支持会话中途注入系统消息，无需重写顶层系统提示词即可动态更新提示词/工具配置。已贯通核心层，无破坏性变更。 |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | feat(coding-agent): deliver prompt and tool changes as system message deltas | 已合并（Closed） | 重构的第二层：对接编码代理，将提示词和工具配置变更以增量系统消息差异的形式下发，而非重写整个系统提示词，减少了Token浪费并提升了缓存命中率。 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): allow extensions to append to the session system prompt | 已合并（Closed） | 支持 `session_start` 扩展处理器返回仅追加的 `systemPromptAppend` 贡献，并具备完善的排序、裁剪、元数据追踪和错误隔离机制。拓展了扩展的系统提示词扩展能力模型。 |
| [#9772](https://github.com/earendil-works/pi/pull/9772) | fix(tui): stop main-screen scrollback clear/replay and ConPTY autowrap drift | 已合并（Closed） | 两个Windows平台的TUI修复：主屏幕渲染时禁用自动换行以修复ConPTY行偏移问题，同时消除不必要的滚动回溯清空/重放循环，提升了Windows Terminal和pwsh下的渲染稳定性。 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): handle CJK punctuation in file autocomplete | 已合并（Closed） | 通过将CJK标点视为单词边界（与引号外空白的处理逻辑一致），修复了CJK标点后无法触发文件路径自动补全的问题，提升了CJK用户的输入体验。 |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | fix(ai): exclude Cerebras from supportsStrictMode | 已合并（Closed） | 将Cerebras标记为不支持严格模式，修复了扩展同时定义严格和非严格工具时出现的400错误。解决了Cerebras用户安装扩展后常见的互操作性问题。 |
| [#9776](https://github.com/earendil-works/pi/pull/9776) | Per thinking sampling parameters | 进行中（Open） | 实现 `samplingParamsByThinkingLevel` 功能，允许为思考模式和非思考模式配置不同的采样参数，响应开源模型关于优化推理性能的建议。整合并修复了相关的前期工作。 |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | feat(coding-agent): upgrade Mermaid terminal rendering | 进行中（Open） | 升级终端中的Mermaid图表渲染能力，解决长期存在的图表质量和兼容性问题。预计将提升TUI模式下Mermaid代码块的可视化效果。 |
---
## 5. 热门讨论
### 问答 / 创意分享
- **[#1637 Benchmarking pi's harness](https://github.com/earendil-works/pi/discussions/1637)**（综合类）– 社区成员提议将Pi的运行框架与Codex CLI、Claude Agent SDK等同类工具做基准测试，为团队选型提供客观性能数据。获31 👍，正在评估Agent工具的团队对此兴趣浓厚。
- **[#3373 Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)**（综合类）– 社区众包的Pi好用扩展分享帖。17条评论，9 👍；对于不使用Discord的用户来说，相当于一个事实上的社区扩展目录。
- **[#1527 Paste doesn't work on Windows - ConPTY doesn't send bracketed paste markers](https://github.com/earendil-works/pi/discussions/1527)**（综合类）– 记录了Windows特有的粘贴Bug：ConPTY会去除带括号粘贴标记，导致多行粘贴内容被立即提交。这是Windows用户长期以来的痛点。
- **[#8729 Question: Why agent teams love npm?](https://github.com/earendil-works/pi/discussions/8729)**（综合类）– 关于npm作为Agent分发模式的讨论，提出了跨Node.js版本的版本兼容性痛点（比如在Node 22上安装的Agent无法在Node 18环境中调用）。
### 作品展示
- **[#1558 CursorAI Agent CLI custom provider for the Pi Coding Agent](https://github.com/earendil-works/pi/discussions/1558)**（综合类）– 社区成员发布了 `@netandreus/pi-cursor-provider`，这是一个为Pi新增CursorAI Agent CLI支持的自定义服务商扩展。获9 👍，受到Cursor用户的积极反馈。
- **[#9775 Show and tell: pi-agent-ide - precise tooling for coding sessions](https://github.com/earendil-works/pi/discussions/9775)**（综合类）– 新扩展上线，为Markdown和代码文件提供类IDE的精准编辑工具，解决了Agent无法对自己刚创建的文件进行细粒度编辑的问题。
- **[#9747 pi-heed — runtime constraints for Pi: stop agents from forgetting what you told them](https://github.com/earendil-works/pi/discussions/9747)**（综合类）– 新扩展可执行用户定义的运行时约束（比如"不要修改文件"、"不要动测试代码"），在有副作用的工具调用执行前进行检查，防止Agent偏离指令。
- **[#9732 Show & tell: pi-conversation-timer — Active task timer extension in statusline](https://github.com/earendil-works/pi/discussions/9732)**（综合类）– 轻量级状态栏扩展，可追踪Agent任务的实际活跃工作时长（而非墙钟时间），帮助用户监控会话时长和成本。
- **[#9679 job-agent-skills — job-search workflow for pi: 10 skills + a jobs-mcp bridge extension](https://github.com/earendil-works/pi/discussions/9679)**（综合类）– 精选工作流套件，包含10项求职相关技能（职业规划、岗位匹配、简历优化等），以及一个用于对接招聘平台的MCP桥接扩展。
---
## 6. 功能需求趋势
1. **Windows 一等支持** – 用户持续要求提升Windows兼容性，包括修复粘贴行为、改进输入法支持、明确安装/运行路径、提升ConPTY渲染稳定性。
2. **TUI 性能与可定制性** – 多次收到需求，希望通过增量渲染减少大会话卡顿、优化硬件光标支持、改进代码块可视化效果、提供更多可配置的UI元素。
3. **服务商互操作性** – 越来越多用户要求更广地支持非主流服务商、更好地处理OpenAI兼容API的特性差异、为服务商专属功能/限制提供灵活配置。
4. **扩展能力拓展** – 用户需求更多扩展钩子（系统提示词修改、模型注册流式访问、UI定制），以及更好的扩展解析能力（支持 `package.json` 的main/exports字段）。
5. **性能优化** – 用户普遍关注降低流式输出时的CPU占用、优化工具调用解析、提升缓存效率、加快会话列表/管理操作的速度。
---
## 7. 开发者痛点
1. **Windows 兼容性缺口** – CJK输入法问题、多行粘贴失效、ConPTY渲染偏移、部署路径不清晰，是Windows开发者最常提到的痛点。
2. **长会话下 TUI 性能下降** – 当会话消息数超过约800条时，全量重渲染、文本切分未缓存、逐块Markdown重建会导致CPU飙升和输入卡顿。
3. **服务商兼容摩擦** – 使用OpenAI兼容服务商时，由于Pi发送专有字段/请求头，会出现静默失败和400/422错误；服务商专属响应模式的处理不一致（缺失 `finish_reason`、无法识别错误码）。
4. **工具可靠性缺口** – `find`/`grep` 工具缺失超时机制、进程被杀死时静默返回成功、bash超时单位混淆、边缘场景下错误无法向上传递，这些问题会导致Agent行为异常。
5. **扩展开发摩擦** – 扩展可用的API面有限、标准npm包入口的包解析存在问题、技能过滤语法等功能缺乏文档、无法通过扩展定制代码块渲染等UI元素。
6. **缓存与成本管理缺口** – 不同服务商的缓存预热行为不一致、意外的冷缓存未命中导致大额Token重复计费、长时会话的成本相关设置管控能力有限。

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周报 | 2026-09-21

---

## 1. 近7天亮点
本周 Qwen Code 项目发布了 v0.24.0 至 v0.24.2 版本，带来了工作流增强、web-shell 音频能力、核心 token 治理优化，同时包含一项针对 `active_goal` 流事件的重要破坏性变更。社区将长上下文 token 成本优化列为优先事项，针对目前占 1M-token 窗口使用量主导地位的非对话上下文开销，协调提交了一系列相关 issue。web-shell 和守护进程的加固工作也取得进展，新增了 SSH 工作区支持、基于二维码的移动端配对功能，并修复了打包、端口冲突和会话删除相关的 bug。

---

## 2. 版本发布

### 稳定版本
- **[v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2)** — 补丁版本，恢复了 `web-shell` 中的远程工作区添加流程，并新增基于 AudioWorklet 的实时语音麦克风采集功能。无破坏性变更。
- **[v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1)** — 功能版本，新增工作流改进和通道共享输出模式。**破坏性变更：** `active_goal` 流事件不再推送（[#12181](https://github.com/QwenLM/qwen-code/pull/12181)）。
- **[v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0)** — 主要版本。**破坏性变更：** bash 现在会在命令钩子中展开项目目录变量（[#11864](https://github.com/QwenLM/qwen-code/pull/11864)）。

### 桌面端 & SDK
- **[desktop-v0.24.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.1)** — 将 ACP 权限队列范围限定为会话级别，并新增通道共享输出模式。
- **[sdk-typescript-v0.1.13](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.13)** — 捆绑 CLI v0.24.1。

###  nightly / 预览版
- v0.24.2-nightly.20260920.eceaede18e
- v0.24.1-nightly.20260919.c1c00cbaab
- v0.24.1-preview.0
- v0.24.0-nightly.20260918.537311b8a5
- v0.24.0-nightly.20260917.f822124af5

---

## 3. 热门 issue

1. **[#12028 — tracking(core): non-conversation context token governance](https://github.com/QwenLM/qwen-code/issues/12028)**  
   这是一项总览性 issue，用于优化每次请求都会重新发送的系统提示词、工具 schema、`QWEN.md` 和技能列表。在大上下文模型中，这部分内容的体量可能远超对话本身。**10 条评论** — 本周讨论最多的 issue，推动了多个子 issue 和 PR 的产生。

2. **[#12029 — Percentage-of-context-window budgets scale the wrong way on large windows](https://github.com/QwenLM/qwen-code/issues/12029)**  
   由于预算以百分比表示，ToolSearch 预加载和上下文窗口警告在大窗口下会出现异常。属于 #12028 的子问题。**8 条评论**，标记为 `ready-for-human`。

3. **[#12287 — Workflow retry-from-history hardening follow-ups](https://github.com/QwenLM/qwen-code/issues/12287)**  
   将加固后的重试逻辑从主功能 PR 中拆分出来，以便独立审查运行器恢复语义、检查点 schema 和验证逻辑。**7 条评论**，优先级 P2。

4. **[#11847 — Session recap is always generated in English](https://github.com/QwenLM/qwen-code/issues/11847)**  
   "我上次做到哪了"的摘要功能忽略了对话语言，因为其系统提示词是硬编码的。**7 条评论**，由社区贡献者提出。

5. **[#12224 — Unable to change directory with /cd after v0.24.0 update](https://github.com/QwenLM/qwen-code/issues/12224)**  
   P1 级回归问题：即使没有活动会话，`/cd` 也会失败并报错"响应或工具调用正在进行中"。**6 条评论**，升级后直接影响 CLI 用户。

6. **[#12030 — Extension context files are unconditionally resident](https://github.com/QwenLM/qwen-code/issues/12030)**  
   每个活动扩展的上下文文件都会被拼接进每次请求的系统提示词中，没有相关性筛选、预算限制或归属说明。**6 条评论**，属于 token 治理推进工作的一部分。

7. **[#12054 — Built-in tool descriptions are the largest non-conversation context block](https://github.com/QwenLM/qwen-code/issues/12054)**  
   在 1M-token 模型上，内置工具消耗 21,461 个 token（占非对话上下文的 45.9%），且没有大小追踪机制。**6 条评论**，优先级 P2。

8. **[#12091 — Deleting a live session permanently corrupts its transcript](https://github.com/QwenLM/qwen-code/issues/12091)**  
   P1 级问题：`sessions/delete` 会在写入器仍处于连接状态时解除 JSONL 对话记录的链接；写入器会重新创建一个无头文件，导致历史记录和自动续跑功能损坏。**5 条评论**。

9. **[#12002 — [security] Inline secrets in `function_args` are recorded verbatim](https://github.com/QwenLM/qwen-code/issues/12002)**  
   P1 级安全问题：包含密钥的 shell 命令会被原样保存在聊天记录和 UI 遥测数据中，存在设备外泄露风险。**5 条评论**，标记为 `ready-for-human`。

10. **[#12277 — Local Control enable fails with EADDRINUSE on LAN interface](https://github.com/QwenLM/qwen-code/issues/12277)**  
    `qwen serve` 会为本地控制开启第二个监听器，当绑定到局域网接口时，会与守护进程的临时端口冲突。**5 条评论**，优先级 P2。

---

## 4. 关键 PR 进展

1. **[#12255 — feat(serve): support SSH workspaces without a remote daemon](https://github.com/QwenLM/qwen-code/pull/12255)**  
   在 Web Shell 中新增 `ssh://user@host:port/path` 工作区支持。文件操作、shell、Git 和交互式终端都通过 SSH 运行，而凭据和会话历史保留在本地。

2. **[#12267 — feat(cli): Move bwrap sandboxing to tool execution](https://github.com/QwenLM/qwen-code/pull/12267)**  
   bwrap 重构的第三阶段：引入 `tools.executionSandbox` 策略，将 shell 入口点路由到共享执行边界，并移除了旧的整个 CLI 层面的 bwrap 重启机制。

3. **[#12358 — feat(managed-agent): Add standalone managed agent stack](https://github.com/QwenLM/qwen-code/pull/12358)**  
   托管代理架构的端到端预览版本：包含常驻 Harness、Java 控制平面、会话级工具运行时、持久化会话记录，以及基于 Spring 的运行时代理。

4. **[#12322 — feat(web-shell): enable expiring QR pairing on non-loopback listeners](https://github.com/QwenLM/qwen-code/pull/12322)**  
   移动端访问二维码现在支持经过身份验证的非回环监听器。每个二维码仅限单次使用，60 秒后过期，并授予独立的设备凭据。

5. **[#12154 — feat(web-shell): manage the repository's worktrees from the git dialog](https://github.com/QwenLM/qwen-code/pull/12154)**  
   在 Web Shell 的 Git 对话框中新增"工作树"选项卡，显示所有工作树、分支、HEAD 状态、锁信息，并支持创建/删除/锁定操作。

6. **[#12183 — feat(extensions): load deployment-managed extensions from a directory](https://github.com/QwenLM/qwen-code/pull/12183)**  
   新增 `--managed-extensions <root>` 标志。扩展会从子目录中被发现并就地读取，将部署控制权保留在用户扩展存储之外。

7. **[#12258 — fix(mcp): Make App resource limits configurable per server](https://github.com/QwenLM/qwen-code/pull/12258)**  
   支持按 MCP 服务器配置 App HTML 大小（最高 4 MiB）和资源读取超时（最高 120 秒）。默认值保持为 1 MiB / 10 秒。

8. **[#12364 — fix(web-shell): verify wildcard export targets against the packed file list](https://github.com/QwenLM/qwen-code/pull/12364)**  
   修复了发布验证器，通过对照实际的 `npm pack` 文件列表进行检查，以支持 npm 子路径模式导出（例如 `"./*": "./dist/*"`）。

9. **[#10136 — feat(review): swap re-review rounds to a fix-audit shape under critical posture](https://github.com/QwenLM/qwen-code/pull/10136)**  
   当采用仅关键问题模式时，多轮 `/review` 会运行缩小范围的修复审计，而不是完整审查，并包含计划阶段的模式预测。

10. **[#12362 — fix(web-shell): restore mobile history navigation](https://github.com/QwenLM/qwen-code/pull/12362)**  
    恢复了 WebKit 上移动端编辑器的 ↑/↓ 历史导航功能，修复了首次输入时历史记录不可用的问题，并确保触控操作不会丢失编辑器焦点。

---

## 5. 热门讨论
（无讨论数据 — 该部分省略。）

---

## 6. 功能需求趋势

1. **长上下文 token 效率** — 这是最大的主题：用户希望对非对话上下文（工具 schema、扩展文件、系统提示词）进行精细化控制，以降低大窗口模型的使用成本。相关 issue：#12028、#12029、#12030、#12054、#12326、#12333。

2. **多会话与会话间编排** — 用户对会话管控、命名、上限设置，以及运行多个并发会话的主机的会话间消息传递功能感兴趣（#12303、#11013）。

3. **Web Shell 功能扩展** — 需求包括 SSH 工作区（#12255）、工作树管理（#12154）、移动端配对（#12322）和主机设置允许列表（#12320）。

4. **工作流和代理韧性** — 用户需要历史重试功能（#12287）、更好的无人值守守护进程可靠性（#11944），以及与竞品工具相当的动态工作流能力（#11013）。

5. **扩展管理灵活性** — 部署托管扩展（#12183）和 Chrome 网上应用店发布（#12240）是最受关注的分发需求。

---

## 7. 开发者痛点

1. **大上下文模型的 token 成本不透明** — 非对话上下文（尤其是内置工具 schema）会在每次请求中计费，但对用户不可见且未被计量。随着窗口变大，基于百分比的预算机制实际上会失效（#12028、#12029、#12054）。

2. **v0.24.x 版本的回归问题** — `/cd` 命令故障（#12224）和 `active_goal` 流事件移除（#12181）已对 CLI 用户和下游集成方造成直接影响。

3. **会话生命周期脆弱** — 删除活动会话会损坏对话记录（#12091），macOS 上预热阶段守护进程关闭可能返回非零退出码（#12350），会话摘要不遵循语言设置（#11847）。

4. **安全和凭据泄露风险** — 工具参数中的内联密钥会被保存到日志/遥测数据中（#12002），shell 工具解析仍会错误识别 Unicode 空白字符（#12089）。

5. **CI 和打包流程阻碍** — 不稳定的 E2E 测试（macOS 分片、npm install 偶发失败）、通配符导出的发布验证器损坏（#12332、#12310）、Docker 缓存膨胀（#12135），这些都拖慢了贡献者的开发速度。

6. **Web Shell 国际化缺口** — 中文界面中约有 31 个设置标签和 6 个类别名称未翻译（#12306），嵌入式主机缺少设置允许列表机制（#12320）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*