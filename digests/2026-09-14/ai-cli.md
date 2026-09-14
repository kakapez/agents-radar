# AI CLI 工具社区周报 2026-09-14

> 生成时间: 2026-09-14 00:53 UTC | 覆盖工具: 7 个

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

# 跨工具 AI CLI 生态对比报告 | 2026-09-14

## 1. 生态概览
AI 开发者 CLI 生态正步入成熟期，三大核心方向并行推进：企业级可靠性、可扩展的插件/智能体框架，以及 Windows 环境的跨平台体验一致性。在所有主流工具中，子智能体编排与沙箱执行已从实验特性转为核心基础设施；社区对安全过滤细粒度控制、成本追踪和会话状态管理的需求持续增长。
当前市场呈现两类工具分化的格局：一类是 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI 等厂商原生工具，主打与自有模型生态的深度集成；另一类是 OpenCode、Pi、Qwen Code 等社区驱动的多服务商工具，主打可互操作、可定制的智能体平台。
Windows 平台稳定性已成为全行业普遍痛点：所有主流工具均上报了 Windows 专属的严重缺陷，覆盖进程生命周期、Shell 集成和沙箱功能等多个层面。

## 2. 活跃度对比
| 工具 | 问题数（近 7 天） | PR 数（近 7 天） | 讨论数（近 7 天） | 发布状态 |
|------|----------------------|-------------------|---------------------------|----------------|
| Claude Code | 10 个追踪热点问题（8 个开放，2 个已关闭） | 10 个追踪 PR（7 个已合并，3 个开放） | 无（未提供讨论数据） | 5 次补丁版本发布（v2.1.266–v2.1.270） |
| OpenAI Codex | 10 个追踪热点问题（全部开放） | 10 个追踪 PR（全部开放/活跃） | 10 场活跃讨论（4 个功能想法，3 个问答，3 个成果展示） | 1 次稳定版 Python SDK 发布（v0.154.0），7 个 Rust alpha 构建版 |
| Gemini CLI | 10 个追踪热点问题（9 个开放，1 个已关闭） | 10 个追踪 PR（9 个开放，1 个已合并） | 无（未提供讨论数据） | 1 次预览版发布（v0.60.0-preview.0），3 个 nightly 构建版（v0.61.0 系列） |
| GitHub Copilot CLI | 10 个追踪热点问题（8 个开放，2 个已关闭） | 10 个追踪 PR（7 个已合并，3 个开放） | 无（未提供讨论数据） | 4 个预发布构建版（v1.0.84-2 至 v1.0.84-5） |
| OpenCode | 10 个追踪热点问题（全部开放） | 10 个追踪 PR（全部开放） | 无（未提供讨论数据） | 1 次稳定版发布（v1.18.30），含严重回归缺陷 |
| Pi | 10 个追踪热点问题（9 个开放，1 个已关闭） | 10 个追踪 PR（6 个开放，4 个已合并） | 9 场活跃讨论（2 个问答，2 个功能想法，5 个成果展示） | 无新版本发布 |
| Qwen Code | 10 个追踪热点问题（7 个开放，3 个已关闭） | 10 个追踪 PR（全部开放/活跃） | 无（未提供讨论数据） | 2 次稳定版发布（CLI v0.23.3、桌面端 v0.3.0），4 个 nightly 构建版，2 次 SDK/驱动更新 |

## 3. 共同功能方向
1. **高级会话状态管理**
   - *涉及工具*：OpenAI Codex、Claude Code、Pi、OpenCode、Gemini CLI
   - *需求*：原生回退/撤销功能（Codex 得票最高的需求）、跨重启的持久化会话压缩（Gemini CLI #21335）、会话树分支与修剪（Pi #9531）、卡死会话可恢复（OpenCode #43277）。用户已不再满足于线性聊天工作流，针对长期运行的智能体任务，他们需要类似版本控制的状态管理能力。

2. **插件/智能体生态成熟度**
   - *涉及工具*：Claude Code、GitHub Copilot CLI、Pi、OpenCode、Qwen Code
   - *需求*：标准化插件测试框架（Claude Code `claude plugin eval`）、扩展插件 API 以支持会话与事件访问（OpenCode #46690）、MCP（Model Context Protocol）合规与兼容性修复（Copilot CLI #4809、Pi 生态工具）、技能转插件工具（Codex 社区项目）。

3. **Windows 跨平台体验一致性**
   - *涉及工具*：全部 7 款工具
   - *需求*：进程生命周期与孤儿锁修复（Claude Code #42776、Codex #29079）、Shell 集成与路径处理优化（Claude Code #72728、Pi #9504）、沙箱可靠性提升（Codex #31073、Qwen Code bwrap 后端）、离线安装程序健壮性增强（OpenCode #34442）。Windows 用户在用户群中占比很高，但体验始终落后于 macOS/Linux。

4. **细粒度使用/成本透明度**
   - *涉及工具*：Claude Code、OpenAI Codex、GitHub Copilot CLI、Gemini CLI
   - *需求*：后台进程的准确配额核算（Codex #27773）、上下文溢出错误说明优化（Claude Code #61716）、可配置的网页搜索预算控制（Qwen Code #11692）、使用量追踪工具（Codex 社区 `Codex Limits` 工具）。

5. **沙箱与安全加固**
   - *涉及工具*：Gemini CLI、Qwen Code、Claude Code、Codex
   - *需求*：内核级沙箱隔离（Qwen Code bwrap 后端）、不受信任构建文件的提示注入缓解（Gemini CLI v0.61.0 nightly）、NTFS 路径漏洞修复（Gemini CLI #29116）、Bash 规则绕过防护（Qwen Code #11764）。

## 4. 差异化分析
| 维度 | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code |
|-----------|-------------|--------------|------------|--------------------|----------|----|-----------|
| **核心定位** | 企业级插件框架、安全护栏、多服务商支持 | TUI 体验打磨、OpenAI 模型生态集成、远程编排 | 智能体可靠性、安全加固、子智能体自主性 | GitHub 生态集成、企业管理、MCP 兼容性 | 多服务商灵活性、UI 定制、插件扩展性 | 多服务商互操作性、基于 RPC 的生态扩展、性能优化 | 自托管/本地部署场景、多智能体协作、沙箱隔离 |
| **目标用户** | 企业安全团队、插件开发者、受监管行业 | 通用开发者、OpenAI 重度用户、ChatGPT 生态用户 | Google Cloud 用户、安全导向团队、企业管理员 | GitHub 企业客户、DevOps 团队、VS Code 用户 | 独立开发者、重度用户、多模型爱好者 | TUI 重度用户、扩展开发者、自托管社区 | 中国市场用户、本地部署场景、多智能体工作流团队 |
| **技术路线** | 模块化插件架构 + 一流的模组框架；发布节奏保守，补丁修复频繁 | Rust 核心 + 迭代式 TUI 优化；与 OpenAI Responses API 深度耦合 | 安全优先的开发模式，nightly 版本频繁加固；聚焦子智能体状态正确性 | 基于 Node.js 的 CLI，与 GitHub 平台 API 对齐；聚焦企业级访问控制 | TypeScript/JavaScript 核心 + 高可扩展插件 API；社区驱动的功能开发 | 性能优化的 TUI + 支持第三方 UI 的 RPC API；服务商无关的抽象层 | Rust/C++ 核心 + 多后端沙箱；原生适配 Qwen 模型，同时支持多服务商 |
| **发布节奏** | 每周补丁发布（7 天内 5 次） | 每周稳定版 + 每日 alpha 构建 | 每周预览版 + 每日 nightly | 每周预发布构建 | 不定期稳定版 + 社区热修复 | 官方发布频率低，PR 开发活跃 | 多发布线并行（稳定 CLI、桌面端、nightly、SDK） |

## 5. 社区动能与成熟度
### 动能最高
- **OpenAI Codex**：社区讨论论坛活跃度最高，追踪的 10 场讨论覆盖功能想法、问答和第三方工具。`Awesome Codex CLI` 精选列表（含 150+ 生态工具）及多款社区构建的插件，展现了蓬勃发展的第三方生态。热门问题获 30+ 点赞、50+ 评论，用户参与度极高。
- **Claude Code**：贡献者迭代速度强劲，7 天内发布 5 次补丁版本，插件框架开发活跃。问题生命周期从 14 天延长至 90 天，标志着项目日趋成熟，更重视社区反馈。高评论量问题（#42776 达 182 条评论）体现了庞大且高参与度的用户群体。
- **Pi**：基于其 RPC 模式的第三方 GUI/工具生态快速增长，上周已有 5+ 款社区构建的桌面/网页客户端发布。项目的服务商无关路线正吸引大量扩展开发者，核心性能优化（启动延迟对标 jcode）也显示出其提升竞争力的战略投入。

### 快速迭代
- **Qwen Code**：在 6+ 条发布线（CLI 稳定版、nightly、桌面端、SDK、驱动）同步推送更新，沙箱隔离、多智能体协作、移动端访问等功能开发活跃。项目正快速扩充功能集，对标海外成熟工具展开竞争。
- **Gemini CLI**：每日推送 nightly 构建，聚焦安全加固与智能体可靠性，开发节奏极快，正补齐子智能体功能方面与竞品的差距。

### 稳定性挑战
- **OpenCode**：最新稳定版（v1.18.30）存在导致所有提示崩溃的严重回归缺陷，且一个存在 10 个月的剪贴板 bug 仍未修复，暴露出质量管控漏洞。项目社区参与度高，但问题解决速度较慢。
- **GitHub Copilot CLI**：处于预发布阶段（v1.0.84-x），构建版本频繁但社区贡献的 PR 较少，反映出更偏内部驱动的开发模式。项目优先推进企业级功能（组织智能体、MCP 兼容性），而非社区呼吁的体验打磨。

## 6. 趋势信号
1. **智能体编排正成为核心价值主张**
   - 所有工具都在投入子智能体框架、后台任务执行和多智能体协作能力。行业正加速从「终端里的 AI 聊天」向「带 worker 编排的 AI 智能体平台」转型，用户对跨项目子智能体、持久化智能体身份、结构化工作流委派等功能的需求日益增长。
   - *开发者启示*：围绕智能体编排模式构建工具，而非仅聚焦单轮聊天界面。针对长期运行的智能体任务，优先建设可观测性、取消机制和状态管理能力。

2. **MCP 正成为事实扩展标准**
   - GitHub Copilot CLI、Pi、Claude Code、Qwen Code 均在投入 MCP 兼容性建设，社区驱动的 MCP 服务器生态也在快速增长。随着 MCP 成为 AI CLI 工具的基线预期，规范合规问题（如 Copilot CLI #4809）正被优先处理。
   - *开发者启示*：基于 MCP 规范设计插件和集成方案，最大化跨工具兼容性。投入 MCP 服务器工具和测试框架建设。

3. **Windows 是下一个平台体验主战场**
   - Windows 专属 bug 在所有工具的热门问题列表中都占主导地位，哪家厂商率先推出可靠、功能完整的 Windows 体验，就能拿下可观的市场份额。Windows 沙箱、进程生命周期管理、Shell 集成方面的投入正成为竞争差异化因素。
   - *开发者启示*：开发早期就为 Windows 测试配置专门的 QA 和工程资源。正确使用原生 Windows API（Job Objects、ConPTY），避免常见的进程生命周期陷阱。

4. **安全过滤的取舍正推动企业市场分层**
   - Claude Code 的 ClAudit 对安全从业者存在大量误报，凸显了一刀切的安全过滤与企业实际用例之间的脱节。提供细粒度、领域专属的安全策略调优，以及自托管过滤选项的工具，将俘获安全和受监管行业用户。
   - *开发者启示*：构建带可配置策略和审计追踪的安全系统，而非仅用二元的允许/拒绝逻辑。为防御安全、DevOps、管理员等场景支持领域专属的白名单机制。

5. **多服务商、多模型工具正获得更多青睐**
   - Pi、OpenCode 等社区驱动工具正吸引希望灵活切换模型服务商的用户；与此同时，厂商原生工具也在新增跨服务商支持（如 Claude Code 的跨 Bedrock/Vertex/Foundry 最大努力等级上限控制）。针对不同任务搭配不同模型的能力，正成为用户的核心需求。
   - *开发者启示*：架构设计从一开始就引入服务商抽象层。在保持后端核心行为一致的前提下，支持各服务商的专属特性（如思考预算、服务端工具）。

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code 技能社区亮点报告
*数据截至 2026-09-14，来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. 热门技能排行
按社区参与度（评论/讨论量，结合关联 Issue 活跃度交叉统计）排名：

| 排名 | 技能 / PR | 功能说明 | 讨论亮点 | 状态 |
|------|------------|---------------|-----------------------|--------|
| 1 | [PR #1298: skill-creator eval recall fix](https://github.com/anthropics/skills/pull/1298) | 修复了 `run_eval.py` 对所有技能描述始终返回 0% 召回率的严重 bug，该问题会导致整个技能描述优化循环失效；同时解决了 Windows 流读取错误、触发检测问题和并行 worker 缺陷。 | 关联 Issue #556（12 条评论，7 个 👍），已有 10+ 位独立用户反馈可复现该问题。修复方案将评估产物作为正式技能安装，而非临时命令文件，并解决了跨平台子进程管道故障问题。 | 开放中 |
| 2 | [PR #525: pyxel retro game development skill](https://github.com/anthropics/skills/pull/525) | 为 Pyxel 复古游戏引擎 MCP 服务器新增技能支持，可在 Claude Code 中实现像素风/8-bit 游戏从编写、运行、检查到迭代的端到端创作流程。 | 是开放时间最长的新技能 PR 之一，6 个多月来持续更新，体现了社区对创意/游戏开发类使用场景的长期关注度。 | 开放中 |
| 3 | [PR #514: document-typography skill](https://github.com/anthropics/skills/pull/514) | 为 AI 生成的文档提供排版质量管控，避免孤行换行、段尾孤立行和编号对齐错误等问题。 | 被定位为 Claude 所有文档输出的通用质量优化能力，可广泛适配各类使用场景。 | 开放中 |
| 4 | [PR #1742: mcp-builder MCP 2.0 support](https://github.com/anthropics/skills/pull/1742) | 修复 mcp-builder 与 `mcp>=2.0.0` 的兼容性问题，包括更名后的 `streamable_http_client` 导入，以及通过 `create_mcp_http_client` 配置自定义 HTTP 头的功能。 | 解决了 MCP 2.0 协议发布后，开发者构建基于 MCP 的技能时普遍遇到的功能失效问题（关联 Issue #1668）。 | 开放中 |
| 5 | [PR #83: skill-quality + skill-security analyzer meta-skills](https://github.com/anthropics/skills/pull/83) | 新增两个元技能：质量分析器（从结构、功能、触发准确率等 5 个维度评估技能）和安全分析器（用于自定义技能的风险审计）。 | 直接呼应社区排名靠前的安全关切（Issue #492，43 条评论），是目前政策相关性最高的待审核技能提交之一。 | 开放中 |
| 6 | [PR #486: ODT document skill](https://github.com/anthropics/skills/pull/486) | 支持 OpenDocument 格式文件（.odt、.ods）的创建、模板填充、解析和 HTML 转换。 | 填补了开放标准文档支持的重要空白，与现有 DOCX、PDF 技能形成互补。 | 开放中 |
| 7 | [PR #1628: Hivemind multi-agent orchestration skill](https://github.com/anthropics/skills/pull/1628) | 支持 Claude Code 将机械性工作委派给运行免费模型的无界面 opencode worker，Claude 则保留规划、审核和合并的职责，以减少高价模型的上下文使用成本。 | 回应了长周期 agent 工作流中对成本优化的高需求。 | 开放中 |
| 8 | [PR #541 + #539: docx + skill-creator bugfixes (Lubrsy706)](https://github.com/anthropics/skills/pull/541) | 两项互补的修复：一是避免 DOCX 修订标记 ID 与现有书签冲突导致的文档损坏，二是为技能描述增加 YAML 特殊字符校验，避免静默解析失败。 | 针对两个使用最广泛的核心技能，是高价值的可靠性优化。 | 均为开放中 |

---

## 2. 社区需求趋势
从高票、高讨论度 Issue 中提炼得出：
1. **安全与信任边界**：讨论度最高的 Issue（[#492，43 条评论](https://github.com/anthropics/skills/issues/492)）核心关注 `anthropic/` 命名空间下分发的社区技能冒充官方工具、造成权限滥用风险的问题。用户要求明确标注官方/社区技能，并提供安全审计工具。
2. **企业协作**：组织级技能共享（[#228，16 条评论，8 个 👍](https://github.com/anthropics/skills/issues/228)）是呼声第二高的功能，用户希望建立内部共享技能库，替代通过聊天工具手动分发 .skill 文件的模式。
3. **技能开发工具可靠性**：多个高评论量 bug 反馈（[#556，12 条评论](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)）显示技能创作者的评估流水线存在功能失效问题，包括触发率为 0%、静默序列化失败和 Windows 系统不兼容等。
4. **文档工作流扩展**：用户持续要求扩展对小众文档格式的支持（ODT、高级 DOCX 修订功能、PDF 大小写修复），以及增加质量管控能力（排版、孤立批注检测）。
5. **Agent 效率与治理**：对以下技能的需求正在增长：减少上下文窗口膨胀的技能（[#1487: claude-api skill 156k token injection](https://github.com/anthropics/skills/issues/1487)）、支持多 agent 编排的技能，以及强制执行输出质量/推理校验关卡的技能（[#1385](https://github.com/anthropics/skills/issues/1385)）。
6. **平台兼容性**：用户希望获得更清晰的指导，了解如何将技能与 AWS Bedrock 等替代部署方案搭配使用（[#29](https://github.com/anthropics/skills/issues/29)），以及技能的 MCP 暴露标准化规范（[#16](https://github.com/anthropics/skills/issues/16)）。

---

## 3. 高潜力待上线技能
以下为活跃 PR，具备明确的使用场景需求，与社区核心问题高度契合，有望在近期落地：
- **[PR #1734: Orphaned DOCX comment detection](https://github.com/anthropics/skills/pull/1734)**：新增 DOCX 文件中未关联/孤立批注的审计功能，补充现有完善的 DOCX 技能体系，满足用户对文档完整性的需求。
- **[PR #1367: self-audit quality gate skill](https://github.com/anthropics/skills/pull/1367)**：通用输出审计能力，结合机械化文件校验和四维度推理审核，直接呼应社区对输出可靠性和治理工具的需求。
- **[PR #1627: Buffer API social scheduling skill](https://github.com/anthropics/skills/pull/1627)**：兼容多 agent 的 Buffer GraphQL API 社交媒体管理技能，将生态拓展至营销/运营场景。
- **[PR #1615: scnet-hpc cluster skill](https://github.com/anthropics/skills/pull/1615)**：为 SCNet 高性能计算集群提供基于配置的 SSH + Slurm 工作流支持，填补了企业科研计算场景的高需求空白。
- **[PR #210: frontend-design skill improvement](https://github.com/anthropics/skills/pull/210)**：重写 frontend-design 技能，提升可操作性和 token 使用效率，回应长期以来关于核心技能清晰度的反馈。

---

## 4. 技能生态洞察
社区最集中的需求指向**可靠、安全的技能开发基础设施与信任保障机制**——包括修复评估流水线、明确官方/社区技能的命名空间区隔、提供安全审计工具——同时希望拓展企业级能力，覆盖协作、文档工作流和成本优化的 agent 编排等场景。

---

# Claude Code 社区周刊 | 2026-09-14

## 1. 过去7天亮点
过去一周，Claude Code 发布了 5 个补丁版本（v2.1.266–v2.1.270），核心更新包括全新插件评估框架、输出样式切换控件，以及跨服务商最大努力等级上限设置，同时修复了 Bash 中 Git 权限提示的严重回归问题。社区层面，Windows 平台的启动/稳定性 Bug 仍是讨论度最高的未解决问题；项目还合并了一批插件/模组基础设施更新，并将 Issue 生命周期延长至 90 天，以降低贡献者的参与门槛。

---

## 2. 版本发布
| 版本 | 核心变更 |
|---------|-------------|
| [v2.1.270](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) | 修复了 2.1.269 版本的回归问题：Bash 中只读 Git 命令在长时间会话后会意外弹出权限提示。 |
| [v2.1.269](https://github.com/anthropics/claude-code/releases/tag/v2.1.269) | 新增 `claude plugin eval` 命令，可运行可复现的插件测试套件并生成带评分的 JSON/HTML 报告；新增 `/output-style [name]` 命令，可在 Remote Control、云端和 OT 环境下列出/切换输出样式。 |
| [v2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268) | 新增 Claude 应用网关定价同步：已登录客户端通过托管设置获取匹配费率，确保 `/cost` 和遥测数据与消费计量器一致；新增对 `access_control.allow_cidrs` 为空的网关的启动警告。 |
| [v2.1.267](https://github.com/anthropics/claude-code/releases/tag/v2.1.267) | 新增 `maxEffortLevel` 设置（全局或单模型），可对所有服务商（Bedrock、Vertex、Foundry）的努力等级设限；新增 `--system-prompt-snapshot off` 标志，每次请求时重新生成系统提示词。 |
| [v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266) | 修复了 2.1.265 版本破坏 LLM 网关/代理配置的回归问题：`CLAUDE_CODE_USE_GATEWAY` 单独使用时会错误强制云端网关登录。 |
| v2.1.265 | 向通过应用网关接入的 Claude Desktop/Cowork 遥测数据中新增 `user.email` 和 `user.groups` 字段（与终端会话保持一致）；新增对 `--plugin-dir` 的支持，可指向包含多个插件的文件夹，支持动态加载/卸载。 |

---

## 3. 热门 Issue
1. **[#42776: Claude Code Desktop 在 Windows 上因残留进程文件锁无法重新启动](https://github.com/anthropics/claude-code/issues/42776)**  
   这是评论数最多的未解决 Issue（182 条评论，88 个👍），是长期存在的 Windows Bug：应用崩溃后无法重启，需要手动清理进程。该问题自 2026 年 4 月以来一直存在，是桌面端用户的头号痛点。

2. **[#53247: Claude Desktop 在 Windows 上无法启动 — 崩溃后残留 Silo / 作业对象](https://github.com/anthropics/claude-code/issues/53247)**  
   这是相关的 Windows 稳定性问题（79 条评论，31 个👍），会报 HRESULT 0x80070020 错误，只能通过注销或重启解决。它暴露出桌面端应用在 Windows 进程生命周期处理上的系统性缺陷。

3. **[#85371: ClAudit 对截图图像引用的误报](https://github.com/anthropics/claude-code/issues/85371)**  
   这是用户 `sworrl` 最近提交的约 20 起 ClAudit 误报报告之一：合法的防御性安全、取证和通用开发工作都会触发会话中断。这凸显了安全过滤对安全从业者来说过于激进。

4. **[#85434: 本地存储拆解 UI 和冗余编码触发安全防护](https://github.com/anthropics/claude-code/issues/85434)**  
   这是一起网络领域的误报，阻碍了标准存储系统工程工作，属于防御加固任务被误分类为恶意行为的典型案例。

5. **[#85381: ClAudit 对 AD 操作技能系统提示词的误报](https://github.com/anthropics/claude-code/issues/85381)**  
   这是一起云 IAM 领域的误报，导致授权的 Active Directory 操作工具开发工作中断，体现了企业管理场景下过度拦截的风险。

6. **[#85372: ClAudit 对 NPM audit 请求的误报](https://github.com/anthropics/claude-code/issues/85372)**  
   这是一起恶意软件取证领域的误报，由标准 NPM audit 任务触发，说明常见的依赖项安全扫描也可能触发安全过滤。

7. **[#85365: ClAudit 对 SSH/UDR 技能引用的误报](https://github.com/anthropics/claude-code/issues/85365)**  
   这是一起加密密钥领域的误报，因在技能文档中提及 SSH 访问而触发，反映出即使在防御场景下，系统对凭证相关表述也高度敏感。

8. **[#85354: MySQL 安装错误讨论触发 AUP 误报](https://github.com/anthropics/claude-code/issues/85354)**  
   这是一起使用政策（AUP）误报（由 Fable 5 标记），针对的是常规 MySQL 安装故障排查请求，说明 AUP 过滤器也会误分类标准 DevOps 工作。

9. **[#72728: Windows Git Bash 壳层快照嵌入原始 Windows PATH，导致命令解析失败](https://github.com/anthropics/claude-code/issues/72728)**  
   这是一个未解决的 Windows/Git Bash 集成 Bug（4 条评论，1 个👍）：未转换的 Windows PATH 值导致短名称命令查找失败，进一步增加了 Windows 专属壳层兼容性问题的数量。

10. **[#85359: CT 网页加固任务触发 AUP 误报](https://github.com/anthropics/claude-code/issues/85359)**  
    这是一起防御加固领域的 AUP 误报，应用安全最佳实践被错误标记，进一步说明合法安全工作与政策过滤触发条件之间存在重叠。

---

## 4. 重要 PR 进展
1. **[#93215: 新增模组：sec-default、diff 和 telemetry](https://github.com/anthropics/claude-code/pull/93215)**  
   在新的 `mods/` 目录下，以源码形式发布了三个内置钩子模块插件（sec-default、diff、telemetry），标志着核心功能向开放、可扩展的插件架构迈出了重要一步。

2. **[#93912: diff、sec-default 和 telemetry 模组的单元测试，基于插件声明做类型校验](https://github.com/anthropics/claude-code/pull/93912)**  
   引入了通过 `claude plugin test` 运行的模组原位单元测试，并基于官方插件声明进行类型检查，提升了第三方插件开发的可测试性和类型安全性。

3. **[#93951: 将 diff、sec-default 和 telemetry 的测试文件移至模组旁](https://github.com/anthropics/claude-code/pull/93951)**  
   将模组测试文件 relocated 到 `mods/<mod>/tests/` 目录下，与各模组放在一起，符合标准插件项目结构，方便贡献者针对单个模组开展工作。

4. **[#93452: mods/diff：匹配内置 /diff 面板](https://github.com/anthropics/claude-code/pull/93452)**  
   让 diff 模组的 UI 与内置 `/diff` 面板对齐（包括代码块渲染、控件、响应式行为），确保原生和基于插件的 diff 体验功能一致。

5. **[#89404: validate-agent.sh：不要在首次警告时中止，停止对合法代理的误标记](https://github.com/anthropics/claude-code/pull/89404)**  
   修复了插件开发技能的验证脚本：因 `set -euo pipefail` 的边缘情况，该脚本会对合法代理文件报错。这消除了插件开发者的一大阻碍。

6. **[#79148: 为示例规则文件名添加强制的 `hookify.` 前缀](https://github.com/anthropics/claude-code/pull/79148)**  
   修复了 hookify 示例规则因缺少必需的文件名前缀而静默失败的问题，纠正了文档偏差，提升了规则开箱即用的可用性。

7. **[#63686: 将过期和自动关闭超时时间从 14 天延长至 90 天](https://github.com/anthropics/claude-code/pull/63686)**  
   将 Issue 生命周期从 14 天延长至 90 天，减少过早标记为过期/关闭带来的干扰，让社区 Issue 有更多时间被分流和处理。

8. **[#26175: 修复原生安装程序引导脚本故障](https://github.com/anthropics/claude-code/pull/26175)**  
   修复了 `curl | bash` 安装流程的问题：该流程会静默失败，无法创建 `~/.local/bin/claude` 二进制文件，还会删除现有的 npm 安装，导致用户没有可用的 CLI。

9. **[#42205: fix(hookify): 标准化工具匹配器解析](https://github.com/anthropics/claude-code/pull/42205)**  
   对 hookify 工具匹配器字符串做了裁剪和标准化处理，修复了分隔符前后有空格时匹配失败的问题，提升了规则匹配的健壮性。

10. **[#61716: 新增上下文溢出导致虚假使用量限制的故障排查说明](https://github.com/anthropics/claude-code/pull/61716)**  
    记录了一种常见的误导性错误：上下文溢出被误报为使用量限制，并添加了变通方法指导，解决了用户经常遇到的困惑点。

---

## 5. 热门讨论
*未提供讨论数据，本节省略。*

---

## 6. 功能需求趋势
1. **改进插件/模组开发工具**：模组框架 PR 和插件验证修复的激增，契合了对更 robust、文档更完善的插件构建、测试和分发工具日益增长的需求。
2. **细粒度的安全/AUP 过滤控制**：安全从业者提交的大量 ClAudit 误报报告，反映出对白名单、领域专属过滤调优或自托管过滤策略自定义的需求。
3. **更好的成本和使用量透明度**：网关定价同步和上下文溢出使用量限制文档修复，体现了对更准确、可解释的成本追踪和使用量计量的需求。
4. **Windows 跨平台一致性**：持续存在的 Windows 桌面端启动、进程和壳层集成 Bug，表明用户需求优先提升 Windows 平台质量和测试投入。

---

## 7. 开发者痛点
1. **Windows 平台不稳定**：残留进程锁、作业对象泄漏和 Git Bash PATH 问题，导致 Windows 桌面端和壳层体验不可靠，变通方法需要重启或手动清理进程。
2. **安全工作的安全过滤过于激进**：防御性安全、取证和管理任务经常触发误报导致会话中断，干扰合法工作，给关注安全的用户带来阻碍。
3. **插件开发体验粗糙**：规则静默失败、验证脚本故障和文档不一致，为构建和调试自定义插件与钩子制造了障碍。
4. **误导性错误信息**：上下文溢出被误报为使用量限制、安装静默失败等问题，给终端用户带来不必要的困惑和调试时间。
5. **Issue 生命周期过短**：之前 14 天的过期/自动关闭窗口过于激进，导致合法的社区 Issue 在被分流前就被关闭。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区周刊 | 2026-09-14

---

## 1. 过去7天亮点
本周 **Python SDK 0.154.0** 稳定版正式发布，新增 `max` 和 `ultra` 两档推理努力级别；同时推出了多个 Rust alpha 版本（v0.155.0-alpha.3.x 系列），重点优化 Windows 沙箱的稳定性。社区围绕 TUI 使用体验优化展开讨论（尤其是移除争议较大的 Astra 星光动画），并持续反馈 Windows 平台 Bug、配额消耗过快、会话回退等核心功能缺失问题。

---

## 2. 版本发布
### 稳定版
- **python-v0.154.0**  
  通过 `pip install --upgrade openai-codex==0.154.0` 安装（需 Python 3.10+），配套依赖 `openai-codex-cli-bin==0.154.0`。核心变更：
  - 新增 `max` 和 `ultra` 两档 `reasoning-effort` 值（[PR #39662](https://github.com/openai/codex/pull/39662)）
  - 同步接口新增 `ExternalMessage` 支持
### Alpha 与 CI 版本
- Rust SDK：`v0.155.0-alpha.3.x` 系列共发布 7 个预发布版本（截至 alpha.3.10），另有 `v0.154.0-alpha.6.2`，均聚焦沙箱与平台加固。
- 仅 CI 版本：`voice-cygwin-108b38cf67cbb731` — 原生 Windows 语音版本的 Cygwin 构建输入/源码（不包含在用户安装包中）。

---

## 3. 热门问题
1. **#41463 [Windows + WSL] 无法创建项目 – AbsolutePathBuf 反序列化时缺少基础路径**  
   [openai/codex#41463](https://github.com/openai/codex/issues/41463)  
   *影响说明：* 导致 Windows/WSL2 用户无法使用核心项目创建功能，是本周评论数最多的未解决 Bug（54 条评论，33 👍）。
2. **#31073 Windows 原生沙箱：Git HTTPS 远程操作失败/崩溃**  
   [openai/codex#31073](https://github.com/openai/codex/issues/31073)  
   *影响说明：* 沙箱内标准 Git 工作流无法使用，但外部 PowerShell 中运行正常；共 28 条评论。
3. **#43410 [Windows][浏览器] 浏览器控制功能在 API 密钥认证下失效**  
   [openai/codex#43410](https://github.com/openai/codex/issues/43410)  
   *影响说明：* Windows 上使用 API 密钥认证的用户无法使用 Edge 浏览器插件；共 25 条评论，15 👍。
4. **#44781 [Codex 桌面端] 编辑/重发队列中的消息触发「应用服务器队列中的后续回复已不存在」报错**  
   [openai/codex#44781](https://github.com/openai/codex/issues/44781)  
   *影响说明：* 消息编辑工作流受阻；共 22 条评论，26 👍。
5. **#44561 默认关闭趣味特效（Astra 星光）**  
   [openai/codex#44561](https://github.com/openai/codex/issues/44561)  
   *影响说明：* 是用户呼声最高的使用体验优化需求（31 👍）；用户反馈该动画看起来像屏幕故障。
6. **#29079 Windows 版 Codex 桌面端会残留 Node/MCP 辅助进程，直到内存不足才释放**  
   [openai/codex#29079](https://github.com/openai/codex/issues/29079)  
   *影响说明：* 导致 Windows 系统整体变慢/无响应；共 10 条评论，4 👍。
7. **#44458 macOS：CLI 0.154.0 实验性功能导致内置 Messages 和 Computer History MCP 启动失败**  
   [openai/codex#44458](https://github.com/openai/codex/issues/44458)  
   *影响说明：* 最新稳定版 CLI 在 macOS 上出现回归问题；共 9 条评论，3 👍。
8. **#27773 Codex Chronicle 后台全天候静默消耗订阅配额，并触发认证令牌失效**  
   [openai/codex#27773](https://github.com/openai/codex/issues/27773)  
   *影响说明：* 后台进程浪费配额且导致认证失效；影响全平台用户。
9. **#45119 macOS 14.2：沙箱启动失败，提示 TIOCSTI 变量未绑定**  
   [openai/codex#45119](https://github.com/openai/codex/issues/45119)  
   *影响说明：* Apple Silicon 芯片的 macOS 14.2 设备上沙箱无法启动；共 8 条评论。
10. **#45073 严重配额消耗：5小时用量在约26分钟内耗尽86%，仅发送了2条提示**  
    [openai/codex#45073](https://github.com/openai/codex/issues/45073)  
    *影响说明：* Windows CLI 出现严重配额异常；用户高度担忧计费与用量统计准确性。

---

## 4. 重要 PR 进展
1. **#45137 移除 TUI 编辑器中的 Astra 星光动画**  
   [openai/codex#45137](https://github.com/openai/codex/pull/45137)  
   *修复内容：* 移除争议较大的动态星光效果及相关钩子，响应用户核心反馈。
2. **#45271 TUI 视口放大时保留终端回滚历史**  
   [openai/codex#45271](https://github.com/openai/codex/pull/45271)  
   *修复内容：* 避免调整终端视口大小时丢失历史记录。
3. **#45255 支持从命令中心直接新建会话**  
   [openai/codex#45255](https://github.com/openai/codex/pull/45255)  
   *功能说明：* 在命令中心新增会话列表和单字母快捷键，支持快速新建会话。
4. **#45262 粘贴内容将输入到当前激活的历史搜索框中**  
   [openai/codex#45262](https://github.com/openai/codex/pull/45262)  
   *修复内容：* 在 `Ctrl+R` 历史搜索时粘贴，内容将更新搜索关键词，而非输入到编辑器中。
5. **#45135 TUI 中换行符到达前即可预览流式生成的文本**  
   [openai/codex#45135](https://github.com/openai/codex/pull/45135)  
   *功能说明：* 长单行回复支持实时流式预览，无需等到换行符出现后才显示。
6. **#45176 将 Windows MXC 沙箱接入命令执行流程**  
   [openai/codex#45176](https://github.com/openai/codex/pull/45176)  
   *功能说明：* 为 Windows 沙箱执行新增显式 MXC 后端选择，并支持违规分类。
7. **#45312 将 Windows 沙箱配置准备逻辑抽离为辅助工具**  
   [openai/codex#45312](https://github.com/openai/codex/pull/45312)  
   *重构说明：* 对外暴露 `prepare_windows_sandbox_config` 接口，统一配置加载与模式校验逻辑。
8. **#45182 复制 SID 前校验 Windows 沙箱令牌组**  
   [openai/codex#45182](https://github.com/openai/codex/pull/45182)  
   *安全修复：* 为令牌组缓冲区增加边界检查，防止不安全内存访问。
9. **#45248 请求元数据与工具钩子使用当前步骤的设置**  
   [openai/codex#45248](https://github.com/openai/codex/pull/45248)  
   *修复内容：* 确保元数据反映当前步骤的模型/推理设置，而非仅使用会话初始值。
10. **#45108 手动重命名线程后取消待执行的线程标题生成**  
    [openai/codex#45108](https://github.com/openai/codex/pull/45108)  
    *修复内容：* 用户手动重命名线程后，停止后台标题生成并隐藏进度提示。

---

## 5. 热门讨论
### 功能建议
1. **#9200 支持从 ChatGPT 应用远程控制 Codex**  
   [openai/codex#9200](https://github.com/openai/codex/discussions/9200)  
   得票最高的建议（190 👍，46 条评论）：用户希望提供无头/守护进程模式的 Codex，支持通过 ChatGPT 应用原生远程控制，替代当前的 SSH/VPN 方案。
2. **#9618 为什么没有 /rewind 或 /revert 功能？**  
   [openai/codex#9618](https://github.com/openai/codex/discussions/9618)  
   134 👍，23 条评论：社区强烈要求原生撤销/回退功能，并提及 OpenCode、Claude Code 等竞品已有该能力。
3. **#12567 Codex 的记忆功能**  
   [openai/codex#12567](https://github.com/openai/codex/discussions/12567)  
   36 条评论：OpenAI 团队正在征集记忆功能的用户体验反馈，包括历史会话引用、跨会话记忆等。
4. **#41716 ChatGPT 规划器与 Codex 工作器编排**  
   [openai/codex#41716](https://github.com/openai/codex/discussions/41716)  
   提议实现原生编排能力：由 ChatGPT 担任规划者，多个 Codex 实例作为执行工作器。

### 问答
1. **#40385 Windows - 连接中找不到「控制其他设备」选项**  
   [openai/codex#40385](https://github.com/openai/codex/discussions/40385)  
   Windows 用户反馈远程连接功能缺失。
2. **#43257 实验性上下文管理的历史查询如何计入用量限制？**  
   [openai/codex#43257](https://github.com/openai/codex/discussions/43257)  
   用户希望明确长时任务中上下文窗口滚动时的配额计算规则。
3. **#42503 Astra 什么时候会接入 Codex？有最新消息吗？**  
   [openai/codex#42503](https://github.com/openai/codex/discussions/42503)  
   社区询问 Astra 模型在 Codex 中的可用时间线。

### 作品展示
1. **#16329 Awesome Codex CLI — 精选 150+ 生态工具列表**  
   [openai/codex#16329](https://github.com/openai/codex/discussions/16329)  
   收录了子代理、技能、插件、MCP 服务器等各类生态项目的精选索引。
2. **#44641 Codex Limits：跨平台 CLI/TUI 工具，查询用量、重置时间和重置额度**  
   [openai/codex#44641](https://github.com/openai/codex/discussions/44641)  
   一款终端工具，用于追踪剩余配额和重置时间表。
3. **#44843 社区工具：SKILL.md → Codex 插件包转换器**  
   [openai/codex#44843](https://github.com/openai/codex/discussions/44843)  
   MIT 协议开源的转换器，可将 Agent Skills 文件夹打包为符合规范的 Codex 插件清单。

---

## 6. 功能请求趋势
1. **会话状态控制：** 原生回退/撤销、按 PR 持久化会话是最受需求的工作流功能。
2. **远程与编排体验：** 无头守护进程模式、优化的 ChatGPT 应用远程控制、多实例工作器编排。
3. **记忆与上下文：** 支持来源引用的跨会话记忆，以及更透明的长周期上下文管理机制。
4. **TUI 使用体验：** 可配置默认项（如关闭趣味特效）、更完善的粘贴处理、更清晰的流式生成显示。
5. **用量可视化：** 更完善的配额追踪、重置额度管理，以及上下文查询/后台进程的清晰计费规则。

---

## 7. 开发者痛点
1. **Windows 平台不稳定：** 绝大多数高优先级 Bug 都集中在 Windows 平台，涵盖沙箱失败、WSL 集成、认证、进程泄漏、应用服务器状态损坏等问题。
2. **配额不透明与异常消耗：** 用户反馈存在不明原因的快速用量消耗、Codex Chronicle 等进程后台静默消耗配额、重置规则不清晰等问题。
3. **沙箱可靠性差：** Windows（权限错误、ACL 损坏、Git 失败）和 macOS（启动崩溃）均存在持续性问题，影响核心工作流。
4. **API 密钥认证限制多：** 浏览器控制、「代我批准」权限等功能在 API 密钥认证下不支持，导致功能碎片化。
5. **缺少基础编辑原语：** 没有原生回退/撤销功能，用户每次修改都得依赖 Git 提交，拖慢迭代速度。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区简报 | 2026-09-14
---

## 1. 过去7天亮点
本周发布了 v0.60.0-preview.0 版本以及每日更新的 v0.61.0  nightly 构建，重点聚焦于安全加固（沙箱隔离、提示注入缓解、NTFS 路径安全）和代理可靠性优化。社区反馈的问题主要集中在子代理执行缺陷（挂起、成功状态误报、配置忽略）以及自动记忆系统故障上；而开放的 PR 则针对 UI 渲染修复、A2A 服务器稳定性和核心工具调用健壮性展开。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.61.0-nightly.20260913.g9c1b0a610](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610) | Nightly | 完整更新日志可查看；基于上一个 nightly 版本增量更新 |
| [v0.61.0-nightly.20260912.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610) | Nightly | - 修复通过构建文件修改和不可信标志引发的间接提示注入问题（[#29250](https://github.com/google-gemini/gemini-cli/pull/29250)）<br>- 强化沙箱文件系统边界，隔离运行时状态 |
| [v0.61.0-nightly.20260909.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260909.ged2ac40df) | Nightly | - 缓解 NTFS 8.3 短名（SFN）路径漏洞（[#29116](https://github.com/google-gemini/gemini-cli/pull/29116)）<br>- 在沙箱容器中隔离设置目录（[#29216](https://github.com/google-gemini/gemini-cli/pull/29216)） |
| [v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-preview.0) | Preview | - 优化网页抓取工具中的目标验证和连接路由（[#29120](https://github.com/google-gemini/gemini-cli/pull/29120)）<br>- 在 MCP OAuth 流程中强制实施 RFC 9207 发行方标识要求 |
| [v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0) | Stable | 从 nightly 轨道升级版本；包含累计稳定性更新 |

---

## 3. 热门问题
1. **[#22323 Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *P1 级 bug，13 条评论，2 👍*  
   `codebase_investigator` 子代理即使达到最大轮次限制仍未完成分析，也会错误地返回 `status: success` 和 `Termination Reason: GOAL`。这会误导用户对任务完成状态的判断，是本周讨论最活跃的问题。

2. **[#21409 Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *P1 级 bug，8 条评论，8 👍（点赞数最高）*  
   简单任务（如创建文件夹）委派给通用代理时会永久挂起；禁用子代理后问题解决。由于基础功能故障，对社区影响较大，也是本周用户点赞数最高的问题。

3. **[#19873 Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *P2 级增强需求，9 条评论，1 👍*  
   提出利用 Gemini 3 原生的 bash 适配性，通过零依赖操作系统沙箱使用 POSIX 工具链，在模型偏好的工作流与安全性之间取得平衡。这是未来代理执行架构的核心讨论方向。

4. **[#25166 Shell command execution stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *P1 级核心 bug，4 条评论，3 👍*  
   简单 shell 命令执行完成后仍显示“等待用户输入”而挂起。这是核心 shell 执行功能的关键可靠性问题。

5. **[#22745 Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *P2 级特性史诗，7 条评论，1 👍*  
   跟踪对 AST 感知工具的调研，用于实现精确的方法级读取、减少 token 冗余并加快代码库导航速度。这是代码库分析性能的重要潜在升级方向。

6. **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *P2 级安全 bug，5 条评论*  
   Auto Memory 会在机密信息脱敏前将对话内容发送给模型，存在敏感数据在模型上下文和日志中泄露的风险。这是一个重要的安全与隐私缺口。

7. **[#21968 Gemini does not use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *P2 级代理 bug，6 条评论*  
   用户反馈模型从不会自主调用自定义技能/子代理，即使是高度相关的任务（如 gradle/git 操作）也需要明确指令。这降低了自定义代理生态的实用性。

8. **[#26522 Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *P2 级代理 bug，4 条评论*  
   被提取代理跳过的低信号会话仍标记为未处理，并被反复重新处理，浪费算力并降低记忆系统效率。

9. **[#22267 Browser Agent ignores settings.json overrides (maxTurns, etc.)](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   *P2 级代理 bug，3 条评论*  
   浏览器子代理无视全局/项目 `settings.json` 中的配置（如 `maxTurns`），尽管 AgentRegistry 已正确合并设置。这打破了用户对专用代理配置的预期。

10. **[#21335 /compress command not persistent across session resume](https://github.com/google-gemini/gemini-cli/issues/21335)**  
    *P2 级代理 bug，2 条评论，2 👍*  
    `/compress` 生成的聊天摘要仅存储在内存中，不会写入磁盘，因此恢复会话时压缩状态会丢失。用户跨会话的 token 节省效果失效。

---

## 4. 重点 PR 进展
1. **[#29286 Implement Google search tool in RobustAutonomousAgent](https://github.com/google-gemini/gemini-cli/pull/29286)**  
   *优先级 P1，规模 M，开放中*  
   为 RobustAutonomousAgent 添加原生 Google 搜索能力，支持实时网页查询，补充代码库和通用知识任务。

2. **[#29163 Fix crash during authentication in git repositories](https://github.com/google-gemini/gemini-cli/pull/29163)**  
   *优先级 P1，安全领域，规模 L，开放中*  
   修复在 macOS Seatbelt 或权限受限环境下的 Git 仓库中运行 Gemini CLI 时的启动崩溃问题，该问题由 `useGitBranchName` 钩子无法访问 `.git` 目录导致。

3. **[#29319 Guard JSON.parse on tool-call args in sendStream](https://github.com/google-gemini/gemini-cli/pull/29319)**  
   *优先级 P2，非交互领域，规模 M，开放中*  
   通过为 `JSON.parse` 添加 try/catch 包装，修复格式错误的工具调用 JSON 导致的流终止问题；出现错误时会推送 `_parseError` 参数并继续流传输，而非直接崩溃。修复 [#29308](https://github.com/google-gemini/gemini-cli/issues/29308)。

4. **[#29320 Register express.json before A2A routes so req.body is parsed](https://github.com/google-gemini/gemini-cli/pull/29320)**  
   *优先级 P2，代理领域，规模 S，开放中*  
   通过将 `express.json()` 中间件移至路由注册之前，修复 A2A 服务器路由的 JSON-RPC 解析失败问题，确保 A2A 端点的 `req.body` 能被正确填充。修复 [#29315](https://github.com/google-gemini/gemini-cli/issues/29315)。

5. **[#27863 Prioritize structured display titles in tool invocation](https://github.com/google-gemini/gemini-cli/pull/27863)**  
   *优先级 P1，非交互领域，规模 S，开放中，寻求贡献*  
   更新 `getDisplayTitle()` 逻辑，优先使用 `_toolDisplayName` 而非原始工具名称，提升带有友好标签的自定义工具的 UI 清晰度。修复 [#23018](https://github.com/google-gemini/gemini-cli/issues/23018)。

6. **[#27754 Add missing return after 501 response in GET /tasks/metadata](https://github.com/google-gemini/gemini-cli/pull/27754)**  
   *优先级 P1，核心领域，规模 XS，开放中，寻求贡献*  
   修复 A2A 服务器崩溃问题（`ERR_HTTP_HEADERS_SENT`），该问题由 501 响应后缺少 return 语句，导致执行流程继续落入后续响应逻辑引发。修复 [#21729](https://github.com/google-gemini/gemini-cli/issues/21729)。

7. **[#29304 Avoid splitting surrogate pairs during truncation](https://github.com/google-gemini/gemini-cli/pull/29304)**  
   *核心领域，规模 S，开放中*  
   修复 `sanitizeForDisplay` 函数，在文本截断时保留 UTF-16 代理对（如表情符号），防止截断位置落在多码元字形中间时导致字符静默丢失。

8. **[#29208 Fall back to empty on malformed agents.json shape](https://github.com/google-gemini/gemini-cli/pull/29208)**  
   *优先级 P2，代理领域，规模 S/M，开放中*  
   优雅处理损坏的 `agents.json`（如保存中断、同步冲突等导致的格式无效），改为回退到空状态，而非抛出 `TypeError` 崩溃或静默丢失确认信息。修复 [#29207](https://github.com/google-gemini/gemini-cli/issues/29207)。

9. **[#28963 Correct excludeTools examples that never match](https://github.com/google-gemini/gemini-cli/pull/28963)**  
   *文档类，规模 S，开放中*  
   修复扩展最佳实践文档中错误的 `excludeTools` 示例：此前示例使用完整命令字符串，永远无法匹配，因为排除规则仅与工具名称比对。填补了这一危险的文档缺口——此前用户误以为危险命令已被阻止。

10. **[#29125 Convert hook timeout from seconds to milliseconds in hooks migration](https://github.com/google-gemini/gemini-cli/pull/29125)**  
    *优先级 P2，核心领域，规模 S，已关闭*  
    修复 `gemini hooks migrate` 中的单位不匹配 bug：Claude Code 默认 60 秒的钩子超时被错误地解释为 Gemini CLI 中的 60 毫秒，导致迁移后的钩子立即超时。修复 [#29122](https://github.com/google-gemini/gemini-cli/issues/29122)。

---

## 5. 热门讨论
*本周期暂无讨论数据。*

---

## 6. 功能需求趋势
1. **代理自主性与能力扩展**：用户强烈需求优化自定义技能/子代理的自动调用、在自主代理中集成原生 Google 搜索，以及支持 AST 感知的代码库导航，以减少 token 用量并提升精度。
2. **增强浏览器代理健壮性**：需求包括自动会话接管/锁定恢复、Wayland 兼容性，以及浏览器子代理正确继承设置。
3. **持久、高效的会话管理**：需求包括基于文件的持久化任务跟踪（替代上下文中的 WriteToDo）、跨会话持久化 `/compress` 状态，以及通过 `/chat share` 查看子代理执行轨迹。
4. **沙箱与执行模型优化**：用户对零依赖操作系统级沙箱感兴趣，以在维持安全边界的同时，利用 Gemini 3 原生的 bash/POSIX 工具适配能力。
5. **记忆系统质量提升**：需求包括确定性脱敏、修复低信号会话的无限重试问题，以及优化无效记忆补丁的错误处理。

---

## 7. 开发者痛点
1. **子代理可靠性故障**：用户普遍对子代理永久挂起、达到轮次限制后误报成功、无视用户配置、以及相关任务下无法被自主调用等问题感到不满。
2. **Shell 执行稳定性问题**：反复有用户反馈 shell 命令执行完成后挂起，以及模型在目录中散落创建临时脚本，导致工作区杂乱。
3. **自动记忆系统缺陷**：存在多个相关 bug，包括静默失败、无限重试、脱敏前数据泄露，削弱了用户对记忆功能的信任。
4. **UI 与渲染故障**：截断时拆分代理对导致表情符号丢失、UI 中子代理工具调用消失、终端调整大小闪烁等问题影响日常使用体验。
5. **配置与迁移 bug**：钩子迁移单位不匹配、事件键映射错误、设置无法传播到子代理等问题，给自定义配置的用户带来意外故障。
6. **安全边缘场景**：通过不可信构建文件的提示注入、NTFS 短名路径漏洞、记忆流程中机密脱敏薄弱等问题，给在不可信环境中运行 CLI 的用户带来风险。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区周报 | 2026-09-14

---

## 1. 近7天亮点
本周 Copilot CLI 团队发布了 4 个预发布版本（v1.0.84-2 至 v1.0.84-5），核心更新包括编辑器中 **Vim 模式正式可用**、基于语法解析的 Shell 补全，以及用于语义化 JSONL 格式交互的会话/记忆导入命令。社区讨论主要围绕 MCP（模型上下文协议）兼容性缺陷、组织级 Agent 可见性不足，以及长时间运行会话中频繁出现的 OOM 崩溃等性能问题。安全与安装程序加固也取得进展：CI 工作流已固定依赖版本，未支持操作系统的检测逻辑也得到优化。

---

## 2. 版本发布
- **v1.0.84-5**
  - ✅ 新增：支持语义化 JSONL 交互格式的会话与记忆导入命令
  - ✅ 优化：Shell 补全现在基于 CLI 核心解析语法生成 —— 输入 `copilot <TAB>` 会同时显示根参数和子命令，且每个子命令仅展示自身的选项
  - 📝 [发布链接](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5)

- **v1.0.84-4**
  - ✅ 新增：`copilot instruction list` 和 `copilot lsp list` 命令（替代 `copilot plugins list --kind instruction` 和 `--kind lsp`）
  - ✅ 新增：`copilot plugin list`、`copilot plugin marketplace list` 和 `copilot plugin marketplace browse` 支持 `--json` 格式输出
  - ✅ 新增：`copilot plugin` 下添加 `enable` / `disable` 子命令
  - 📝 [发布链接](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4)

- **v1.0.84-3**
  - 🐛 修复：`/copy` 命令现在会包含可用的任务完成消息
  - 🐛 修复：使用 OAuth 认证的 MCP 服务器在会话启动时可稳定连接
  - 📝 [发布链接](https://github.com/github/copilot-cli/releases/tag/v1.0.84-3)

- **v1.0.84-2**
  - ✨ 新功能：Vim 模式正式可用 —— 通过 `/vim` 命令或配置 `editorMode: vim` 开启，可在编辑器中使用模态编辑，且有实时模式状态指示
  - ✅ 优化：在受支持的 Windows 沙箱策略下，交互式 Shell 命令现在会记录被阻止的访问行为
  - 📝 [发布链接](https://github.com/github/copilot-cli/releases/tag/v1.0.84-2)

---

## 3. 热门问题
| # | 问题 | 重要性 | 社区反馈 |
|---|-------|----------------|------------------|
| 1 | [#13 [已关闭] CLI 输入应支持 vi/vim 输入模式](https://github.com/github/copilot-cli/issues/13) | 2025 年 9 月提出的里程碑式功能请求，已通过 v1.0.84-2 的 Vim 模式正式发布解决 | 🔥 76 赞，12 条评论 —— 统计周期内获赞最高的 issue |
| 2 | [#1285 [开放中] 组织级 Agent 不显示](https://github.com/github/copilot-cli/issues/1285) | 企业落地的阻塞问题：在 `.github-private` 中定义的组织范围 Agent 无法在 CLI/VS Code 中被发现 | 9 条评论，11 赞 —— 评论数最多的企业级开放 issue |
| 3 | [#4095 [开放中] VS Code 运行时 Windows 插件更新失败，提示 "Access is denied"](https://github.com/github/copilot-cli/issues/4095) | 跨工具文件锁冲突：Copilot VS Code 扩展对插件目录持有监视器句柄 | 21 赞 —— 本周获赞最高的开放 issue |
| 4 | [#4725 [开放中] 频繁出现 JavaScript 堆内存不足](https://github.com/github/copilot-cli/issues/4725) | Linux 平台稳定性回归：CLI 每隔几分钟就会崩溃，堆内存占用约 4 GB | 4 条评论，1 赞 |
| 5 | [#4753 [开放中] 会话恢复会取消进行中的 stdio MCP 服务器连接](https://github.com/github/copilot-cli/issues/4753) | v1.0.83 中的 MCP 可靠性回归：超时时间从 16 秒缩短至 1 秒，导致会话恢复时服务器静默失效 | 4 条评论，1 赞 |
| 6 | [#3700 [开放中] WSL2 回归：空闲时主线程 CPU 占用约 215%，TUI 输出冻结](https://github.com/github/copilot-cli/issues/3700) | 高严重性 WSL2 性能缺陷，CLI 需重启才能恢复使用 | 4 条评论，2 赞 —— 标记为高严重性/高影响 |
| 7 | [#1168 [开放中] 授权提示过多（"授权疲劳"）](https://github.com/github/copilot-cli/issues/1168) | 用户体验痛点：单次请求触发超过 12 次审批提示，降低了辅助权限工作流的效率 | 4 条评论，3 赞 |
| 8 | [#4795 [开放中] Atlassian MCP OAuth 失败：回调 URL 不匹配](https://github.com/github/copilot-cli/issues/4795) | 生态集成缺陷：随机生成的 OAuth 回调端口与注册端口 33418 冲突 | 3 条评论，3 赞 |
| 9 | [#4809 [已关闭] 原生 MCP 连接器在 `initialize` 前发送非标准的 `server/discover` 请求](https://github.com/github/copilot-cli/issues/4809) | 规范合规问题：违反 MCP 生命周期规范，导致符合规范的服务器（如 FastMCP）崩溃 | 1 条评论 —— 已关闭，但反映了 MCP 标准化工作仍在推进 |
| 10 | [#4699 [开放中] 长时间 `--resume` 会话出现 OOM 崩溃；崩溃转储文件写入当前工作目录](https://github.com/github/copilot-cli/issues/4699) | 双重问题：恢复会话存在内存泄漏，且诊断文件会杂乱堆积在工作目录中 | 3 条评论，5 赞 |

---

## 4. 关键 PR 进展
| # | PR | 描述 | 状态 |
|---|----|-------------|--------|
| 1 | [#4827 build(deps): bump actions/stale from 9.1.0 to 11.0.0](https://github.com/github/copilot-cli/pull/4827) | 升级 CI 依赖，用于老旧 issue/PR 的自动化管理 | ✅ 已关闭 |
| 2 | [#4828 build(deps): bump actions/github-script from 7.1.0 to 9.0.0](https://github.com/github/copilot-cli/pull/4828) | 升级 CI 依赖，用于 GitHub Script 自动化流程 | ✅ 已关闭 |
| 3 | [#4808 Pin GitHub Actions to commit SHAs](https://github.com/github/copilot-cli/pull/4808) | 供应链安全加固：将所有 Action 的 `uses:` 引用固定为不可变的 commit SHA（涉及 4 个文件中的 3 处引用） | ✅ 已关闭 |
| 4 | [#4786 Revise notice regarding third-party services](https://github.com/github/copilot-cli/pull/4786) | 文档更新，明确第三方服务的访问要求和条款 | ✅ 已关闭 |
| 5 | [#4770 Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770) | 新增禁用 WebSocket 传输的规避方案文档（用于解决 `400 input item ID does not belong to this connection` 错误） | 🟡 开放中 |
| 6 | [#4761 install: report unsupported operating systems](https://github.com/github/copilot-cli/pull/4761) | 安装程序修复：可检测未支持的操作系统（如 FreeBSD），而非错误地回退到 Windows/winget 报错 | ✅ 已关闭 |
| 7 | [#4762 install: report unsupported operating systems](https://github.com/github/copilot-cli/pull/4762) | 同一 FreeBSD 安装修复的重复/替代实现（作者：devm33） | ✅ 已关闭 |
| 8 | [#4748 Add joke cli](https://github.com/github/copilot-cli/pull/4748) | 社区趣味 PR，新增一个讲笑话的命令 —— 尚未审核/合并 | 🟡 开放中 |
| 9 | [#4746 Add experimental next-action extension prototype](https://github.com/github/copilot-cli/pull/4746) | 实验性 SDK 示例：在 `examples/next-best-action/` 目录下新增模型推断的"最佳下一步操作"扩展（可选开启，不修改 CLI 核心逻辑） | 🟡 开放中 |
| 10 | [#4100 shangti0168](https://github.com/github/copilot-cli/pull/4100) | 信息较少的 PR，标记为"security" —— 已关闭，无明确解决方案 | ✅ 已关闭 |

---

## 5. 热门讨论
*略 —— 数据集中未提供 GitHub Discussions 相关数据。*

---

## 6. 功能请求趋势
根据开放 issue 和社区活动，最受关注的需求方向为：
1. **Vim/模态编辑体验深化** —— v1.0.84-2 中 Vim 模式正式发布后，社区提出自定义（如自定义快捷键、ex 命令）等后续需求
2. **跨会话上下文与记忆** —— 要求支持跨会话的持久化、可查询上下文（见 [#2436](https://github.com/github/copilot-cli/issues/2436)），以及官方的导入/导出工具
3. **企业级 Agent 可发现性** —— 组织级与共享 Agent 的可见性、权限范围划分，以及集中化管理能力
4. **MCP 生态兼容性** —— 更严格的规范合规性、更好的错误处理，以及更广泛的第三方 MCP 服务器支持（Atlassian、FastMCP 等）
5. **Agent 可观测性** —— 后台子 Agent 的实时进度流式展示，以及对长时间运行的工具调用序列的更好可见性（见 [#2254](https://github.com/github/copilot-cli/issues/2254)）

---

## 7. 开发者痛点
本周社区反馈的高频问题：
- **内存不稳定**：Linux 和 Windows 均有多个 OOM 崩溃报告，尤其是长时间/恢复的会话会触及 V8 堆内存 4 GB 上限
- **MCP 连接脆弱**：超时回归、规范不合规、OAuth 回调不匹配，以及取消操作后工具被永久移除
- **Windows/WSL2 性能与兼容性问题**：空闲时 CPU 占用过高、Windows 25H2 沙箱支持不足、插件更新与 VS Code 冲突，以及不明原因的原生运行时崩溃
- **授权体验摩擦**：单次请求提示次数过多，且会话运行约 1 小时后辅助权限功能会失效
- **安装程序与环境缺陷**：私有 Azure 源上的语音安装程序返回 401 错误、BSD 系统上操作系统检测错误，以及 v1.0.83 中无法加载工作区 `.mcp.json` 文件

---
*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) —— 统计截至 2026-09-14 的 7 天内更新的 issue、PR 和版本。*

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区摘要 | 2026-09-14
*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

---

## 1. 近7天亮点
本周发布了**v1.18.30**版本，新增GPT-6 Astra系统提示词支持并更新了服务商SDK，但多名用户反馈在系统提示词组装过程中出现大面积`TypeError`崩溃问题，给本次版本上线蒙上了阴影。社区还暴露了v2.0的多项关键稳定性缺陷（Muse Spark模型故障、会话卡死、子代理取消限制），并推动修复剪贴板复制、布局切换等长期未解决的UI/UX痛点。

---

## 2. 版本发布
### v1.18.30
[发布页面](https://github.com/anomalyco/opencode/releases/tag/v1.18.30)
- **核心优化**：新增针对GPT-6模型优化的Astra系统提示词。
- **Bug修复**：
  - 保留Bedrock DeepSeek模型ID（包括基于ARN的ID）以确保正确解析 — 贡献者 @YeEmrick
  - 更新Azure服务商SDK，纳入上游兼容性修复
  - 更新OpenAI服务商SDK（发布说明有截断）

---

## 3. 热门问题
| 问题 | 状态 | 重要性 | 社区反应 |
|-------|--------|----------------|--------------------|
| [#4283: Copy To Clipboard is not working](https://github.com/anomalyco/opencode/issues/4283) | 未解决 | 这是一个长期存在的核心可用性Bug（首次报告于2025年11月），导致用户无法保存AI生成的代码/回复。10个多月过去仍未修复。 | 133条评论，124 👍 — 本周互动量最高的问题，用户反馈最新版本中该功能仍然失效。 |
| [#48645: Regression in 1.18.30: every prompt crashes with TypeError in SystemPrompt.environment](https://github.com/anomalyco/opencode/issues/48645) | 未解决 | v1.18.30的严重回归问题，会导致更新后的安装包*所有*提示词都崩溃，大量用户因此无法升级版本。 | 4条评论，1 👍 — 随着更多用户更新，报告量快速增长；已确认在全新会话中可复现。 |
| [#48803: v1.18.30: every prompt fails with TypeError (undefined layer node in Effect layer assembly)](https://github.com/anomalyco/opencode/issues/48803) | 未解决 | 对v1.18.30系统提示词崩溃问题的重复/关联确认，在相同配置下与v1.18.20进行A/B测试后得到验证。 | 3条评论，2 👍 — 进一步凸显了为最新版本发布热修复的紧迫性。 |
| [#48741: [2.0] Opencode Zen critical errors on Muse Spark family when model receives image/does tool call](https://github.com/anomalyco/opencode/issues/48741) | 未解决 | v2.0 Zen网关的阻塞问题：由于`encrypted_content`授权错误，Muse Spark模型完全无法用于多模态或工具调用工作流。 | 21条评论，1 👍 — 讨论帖热度快速上升，开发人员正在积极调查根本原因。 |
| [#43277: Sessions permanently stuck during normal use — survive reboots, cannot be recovered](https://github.com/anomalyco/opencode/issues/43277) | 未解决 | 严重的数据/工作流丢失Bug：会话进入卡死状态后，重启也无法解除，既无法清除也无法恢复。 | 14条评论，1 👍 — 用户反馈工作内容丢失，除了创建全新会话外没有其他解决办法。 |
| [#23153: [FEATURE]: Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153) | 未解决 | 得票最高的支付灵活性功能请求，旨在满足信用卡使用受限地区用户的需求。 | 22条评论，51 👍 — 社区支持度很高，目前正在讨论支持的链和支付流程。 |
| [#33884: TUI plugins referenced by npm package spec silently fail to load in 1.17.10](https://github.com/anomalyco/opencode/issues/33884) | 未解决 | 导致v1.17.10上整个基于npm的TUI插件生态失效；目前在`dev`分支通过回退OpenTUI临时缓解，但尚未推出永久修复方案。 | 7条评论，1 👍 — 对插件开发者和依赖第三方TUI扩展的用户来说至关重要。 |
| [#48850: [BUG] Desktop randomly marks running turn as interrupted (AbortError: Aborted)](https://github.com/anomalyco/opencode/issues/48850) | 未解决 | Windows桌面端会在用户无操作的情况下，随机将正在运行的推理回合标记为中断 — 削弱了用户对回复完整性的信任。 | 3条评论，0 👍 — 属于新报告问题，但对日常桌面用户影响很大；目前尚未明确触发条件。 |
| [#39835: [FEATURE] New users can't switch back from the new layout — no layout toggle available](https://github.com/anomalyco/opencode/issues/39835) | 未解决 | 布局重设计带来的UI/UX回归问题：新用户被锁定在新UI中，无法切换回熟悉的旧版布局。 | 3条评论，0 👍 — 新UI缺少控件的投诉浪潮中的又一项问题。 |
| [#34442: Windows Desktop installer is broken offline: ripgrep not bundled](https://github.com/anomalyco/opencode/issues/34442) | 未解决 | Windows离线安装基本无法使用 — 由于未内置ripgrep，核心工具（grep、glob、skill）和内置技能都会失效。 | 3条评论，4 👍 — 对企业/物理隔离环境用户来说是重大障碍。 |

---

## 4. 重要PR进展
| PR | 状态 | 描述 |
|----|--------|-------------|
| [#48770: refactor(codemode): materialize interpreter failures once at call boundary](https://github.com/anomalyco/opencode/pull/48770) | 待合入 | 重写解释器错误处理逻辑：故障以单个`PendingThrow`形式传递，在调用位点（而非内置代码中）生成单个`Error`对象。消除了内置错误中AST节点归因误导的问题。 |
| [#46690: feat(plugin): expose session forms, session list, and global event stream](https://github.com/anomalyco/opencode/pull/46690) | 待合入 | v2版本的重大插件API扩展：允许插件访问会话表单、完整会话列表和全局事件总线。支持自定义外部UI等使用场景（例如Telegram机器人集成）。 |
| [#44264: feat(session): add suffix compaction](https://github.com/anomalyco/opencode/pull/44264) | 待合入 | 为会话运行时和配置新增实验性的`compaction.mode: "suffix"`选项。在压缩旧历史记录的同时保留最近上下文，解决长时间运行会话的长上下文窗口溢出问题。 |
| [#48871: fix(project): resolve associated directory to its project instead of global](https://github.com/anomalyco/opencode/pull/48871) | 待合入 | 修复非Git项目的会话归属问题：`Project.resolve`现在会先检查`project_directory`表，再回退到全局ID，因此非Git项目根目录下的会话能被正确关联（修复#48870）。 |
| [#48862: fix(ai): preserve OpenAI Chat image URLs](https://github.com/anomalyco/opencode/pull/48862) | 待合入 | 修复多模态处理问题：在OpenAI Chat请求中，HTTP/HTTPS图片URL不再被错误地当作base64字节处理。该修复同时适用于用户上传的图片和工具返回的远程图片。 |
| [#44535: fix(session): stop creating phantom "unknown" tool parts on re-emitted deltas](https://github.com/anomalyco/opencode/pull/44535) | 待合入 | 修复了一个长期存在的Bug（#33618）：opencode在增量重新发射过程中会生成 phantom `unknown` 工具调用片段，而非上游模型生成。 |
| [#48846: fix(ai): sanitize assistant text for Claude requests](https://github.com/anomalyco/opencode/pull/48846) | 待合入 | 提升Claude/Bedrock Converse的可靠性：在分配缓存标记前省略空的助手文本块，并修剪助手前缀的尾部空白，以避免上游验证错误。 |
| [#48867: feat(core): make worktree APIs project-based](https://github.com/anomalyco/opencode/pull/48867) | 待合入 | 基于项目的工作树管理初步实现：所有工作树操作现在都需要`projectID`，而非任意路径。让多项目工作树工作流更安全。 |
| [#48878: fix(tui): force terminal reset on exit for Windows ConPTY](https://github.com/anomalyco/opencode/pull/48878) | 待合入 | 修复Windows终端退出时的损坏问题（修复#48776）：在ConPTY环境（例如Alacritty + zellij）中退出opencode时，强制执行完整的终端重置，此前该问题会导致Shell处于原始/损坏状态。 |
| [#47913: docs: add Indonesian translation (README.id.md)](https://github.com/anomalyco/opencode/pull/47913) | 待合入 | 社区贡献，新增完整的印尼语README翻译，扩大了OpenCode对印尼语开发者的覆盖范围（修复#47910）。 |

---

## 5. 热门讨论
*已省略 — 数据集中未提供GitHub Discussions相关数据。*

---

## 6. 功能请求趋势
1. **UI/UX控制与回退选项**：用户反复请求增加布局切换按钮，以回退到旧版左侧边栏UI，同时恢复新UI重设计中移除的缺失控件（MCP开关）。
2. **支付灵活性**：OpenCode Go的加密货币支付支持是得票最高的新功能请求，主要由传统支付方式受限地区的用户推动。
3. **会话管理增强**：用户需求包括提升会话可靠性、卡死会话可恢复性，以及更智能的上下文压缩（例如后缀模式）以支持长时间运行的工作。
4. **v2子代理功能对齐**：用户呼吁补齐v2缺失的子代理能力，包括对单体仓库的跨位置子代理支持，以及取消正在运行的后台子代理的功能。
5. **插件生态扩展**：开发者希望获得更广泛的插件API访问权限（会话列表、事件流、表单控件），以构建功能更强大的第三方集成。

---

## 7. 开发者痛点
1. **v1.18.30版本不稳定**：最新稳定版存在严重回归问题，由于系统提示词组装时出现`TypeError`，会导致*所有*提示词崩溃，用户被迫降级到v1.18.20或v1.18.18。
2. **剪贴板功能长期失效**：复制到剪贴板功能已损坏超过10个月仍未修复，给依赖复制生成代码的用户带来日常困扰。
3. **会话可靠性问题**：重启后仍无法解除的会话卡死、 phantom 工具片段、非Git会话路径归属Bug，都会导致工作丢失和令人困惑的用户体验。
4. **新UI缺少关键功能**：重设计后的UI移除了用户熟悉的控件（MCP开关、布局切换）且没有替代方案，导致用户无法配置核心功能。
5. **TUI插件生态脆弱**：由于OpenTUI双入口和双运行时回归问题，基于npm的TUI插件在最新版本中无法使用，目前只有临时回退方案。
6. **平台特有缺陷**：Windows用户持续面临独特的Bug：离线安装包损坏（缺少ripgrep）、退出时终端损坏、非Git会话路径问题，以及随机推理中断。
7. **v2.0多模态/工具调用不稳定**：使用Muse Spark模型的Zen网关用户完全无法使用图片输入或工具调用功能，原因是上游授权错误。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区周报 | 2026-09-14
仓库：[earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. 近 7 天亮点
本周 Pi 社区重点聚焦于 TUI 稳定性、模型提供商兼容性以及扩展生态的发展。本周暂无官方新版本发布，但核心可靠性修复、新增 OAuth 提供商支持，以及一大批基于 Pi RPC 模式构建的第三方 GUI/工具项目都在稳步推进。社区最关注的问题集中在 Codex 传输可靠性，以及大篇幅会话记录下的 TUI 渲染性能。

---

## 2. 版本发布
近 7 天无新版本发布。

---

## 3. 热门 Issue
| # | Issue | 重要性 | 社区反响 |
|---|-------|--------|----------|
| 1 | [#4945 openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945) | 长期高优先级 Bug：GPT-5.5/Codex 流式输出会导致 TUI 卡在「Working...」状态且无报错，用户不得不中止当前会话轮次。这是 Codex 用户面临的核心可靠性障碍。 | 78 条评论，33 👍 — 本周讨论度最高的 Issue，调试工作正在进行中。 |
| 2 | [#7739 Set a startup-time budget targeting jcode-comparable latency and memory](https://github.com/earendil-works/pi/issues/7739) | 定义性能基准，以缩小与 jcode 在启动延迟和内存占用上的差距，jcode 是关键的竞争参照指标。 | 8 条评论 — 处于早期范围界定阶段，已分享基准测试数据。 |
| 3 | [#8036 Edit tool crashes TUI when rendering a large diff during execution and session resume](https://github.com/earendil-works/pi/issues/8036) | 严重 TUI 崩溃问题：当渲染来自长行 HTML 文件、大小约 14.5MB 的 diff 时会触发崩溃，同时会导致会话恢复功能失效。 | 8 条评论 — 问题可复现，多名用户确认了影响。 |
| 4 | [#9311 Fullscreen mouse selection survives session switch](https://github.com/earendil-works/pi/issues/9311) | 常见但影响较小的 TUI 体验 Bug：全屏模式下，文本选中状态会在切换会话后残留。 | 6 条评论 — 修复方案已明确，低成本高收益。 |
| 5 | [#5372 Allow custom OAuth callback page rendering](https://github.com/earendil-works/pi/issues/5372) | 为嵌入式/白牌 Pi 部署中的 OAuth 流程提供自定义品牌支持，解除相关限制。 | 5 条评论 — 企业客户与扩展开发者的需求。 |
| 6 | [#9255 TuiMainScreen: full-screen redraw storm when changed rows sit above the viewport top](https://github.com/earendil-works/pi/issues/9255) | 长会话场景下的严重性能问题：流式输出过程中，每帧都会触发不必要的全屏重绘，导致画面剧烈跳动、文字重复。 | 4 条评论 — 根本原因已找到，所有重度用户均受影响。 |
| 7 | [#9075 Compaction summarisation inherits session thinking level on adaptive models and deterministically hits output cap at high efforts](https://github.com/earendil-works/pi/issues/9075) | 在高推理强度的自适应 Anthropic 模型上，会话压缩功能会失效，因为思考 token 会挤占固定的输出预算。 | 3 条评论，3 👍 — 影响 Claude 自适应推理的高级用户。 |
| 8 | [#9474 Codex transport: no non-resetting per-request total deadline; periodic events defeat idle timeout](https://github.com/earendil-works/pi/issues/9474) | 与 #4945 相关：带有保活事件的停滞流永远不会超时，是导致「Working...」卡顿的原因之一。 | 3 条评论 — 属于正在进行的 Codex 可靠性修复工作的一部分。 |
| 9 | [#9566 context size defaults to 128k despite the real size being available](https://github.com/earendil-works/pi/issues/9566) | Bug：`models.json` 中匹配的模型 ID 会用默认值覆盖正确的上下文窗口/计费数据，导致本地 LLM 配置出错。 | 2 条评论 — 已快速修复并关闭。 |
| 10 | [#9567 pi install fails with pnpm >= 11 (blockExoticSubdeps on by default)](https://github.com/earendil-works/pi/issues/9567) | 由于 `pi-mcp-adapter` 中存在 URL 固定的子依赖，在最新版 pnpm 上安装会失败。 | 1 条评论 — 影响所有 pnpm 11 用户，是包维护者的高优先级事项。 |

---

## 4. 重要 PR 进展
| # | PR | 描述 |
|---|----|------|
| 1 | [#9548 Mid conversation system messages](https://github.com/earendil-works/pi/pull/9548) | **开放中** — 核心架构变更：系统提示词/工具变更会被记录在会话记录中，而非静默修改会话状态，从而实现正确的分支导航和修改后会话的恢复。 |
| 2 | [#9488 fix(ai): add canonical Codex turn attribution](https://github.com/earendil-works/pi/pull/9488) | **开放中** — 为 Codex 流添加与提供商无关的请求标识元数据，实现工具续接、重试和压缩恢复场景下的可靠归因（助力 #4945 的调试）。 |
| 3 | [#9096 feat(ai,coding-agent): add Meta provider with Muse subscription OAuth](https://github.com/earendil-works/pi/pull/9096) | **开放中** — 新增 Meta Muse 作为原生提供商，支持订阅制 OAuth 登录（无需 API 密钥）。 |
| 4 | [#9504 fix(coding-agent): accept Windows Store shell aliases](https://github.com/earendil-works/pi/pull/9504) | **开放中** — 修复 Windows shell 检测逻辑，支持通过应用商店安装的别名（如 `winget`、`powershell`），解决其无法通过 `existsSync()` 检查的问题。 |
| 5 | [#9501 fix(coding-agent): resolve Windows shells from installation directories](https://github.com/earendil-works/pi/pull/9501) | **开放中** — 统一 Windows 二进制文件查找逻辑，大幅提升对非标准安装路径 shell 的兼容性。 |
| 6 | [#8635 fix(ai): preserve aborted stop reason during lazy setup](https://github.com/earendil-works/pi/pull/8635) | **开放中** — 修复懒加载流设置过程中的中止信号处理，能正确报告请求中止状态，而非返回通用设置失败错误。 |
| 7 | [#9531 feat(tree): add permanent branch deletion from session tree](https://github.com/earendil-works/pi/pull/9531) | **已关闭** — 实现了在 `/tree` 选择器中通过 `Shift+D` 永久删除会话树分支的功能，同时包含对活跃路径的保护和正确的压缩重指向逻辑。 |
| 8 | [#9556 feat(ai): serverTools — declare provider server-side tools in model config](https://github.com/earendil-works/pi/pull/9556) | **已关闭** — 支持在模型配置中声明提供商内置的服务端工具（如 OpenAI Responses 的 `web_search`、智谱 GLM 搜索）。 |
| 9 | [#9529 feat(ai): add Google Antigravity and Cursor Pro OAuth providers](https://github.com/earendil-works/pi/pull/9529) | **已关闭** — 新增两个订阅制 OAuth 提供商：Google Antigravity（Cloud Code Assist）和 Cursor Pro，均无需 API 密钥。 |
| 10 | [#9517 feat(tui): group long tool-call runs](https://github.com/earendil-works/pi/pull/9517) | **已关闭** — 将连续 6 次及以上的工具调用折叠为一条聚合会话记录，支持展开/收起交互，减少长代理执行循环带来的界面杂乱。 |

---

## 5. 热门讨论
### 问答
1. [#3373 Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?](https://github.com/earendil-works/pi/discussions/3373)
   - 长期社区热帖，共 16 条评论 / 9 👍：用户分享了自己最喜欢的 Pi 扩展和工具。

2. [#9516 openai-responses: tool-result images in function_call_output dropped by compatible gateways](https://github.com/earendil-works/pi/discussions/9516)
   - 关于 Responses API 图片编码与第三方网关兼容性问题的技术讨论。

### 想法
1. [#8420 From the DSH plugin ecosystem to pi: are we missing an official Web UI base?](https://github.com/earendil-works/pi/discussions/8420)
   - 2 👍：讨论将 Pi 的扩展生态与 DSH 的插件生态对比，探讨 Pi 是否应该推出官方 Web UI 基础框架，以激发更多面向 UI 的社区贡献。

2. [#8803 Introducing pi-verdict — a minimal permission gate for pi: allow / ask / deny, one file, zero dependencies](https://github.com/earendil-works/pi/discussions/8803)
   - 1 👍：一款轻量级权限门控扩展的提案与演示，参考 Claude Code 的自动模式风格，支持每次工具调用前审批，单文件实现、零依赖。

### 展示与分享
1. [#9552 Show & tell: Pi Heao GUI — a Windows desktop client for pi (built on the pi-agent-studio chat UI)](https://github.com/earendil-works/pi/discussions/9552)
   - 全新的 Pi Windows 桌面 GUI 客户端，复用官方 pi-agent-studio 聊天 UI 而非重新开发。

2. [#9525 Thank you — --mode rpc is the backbone of a new open-source project](https://github.com/earendil-works/pi/discussions/9525)
   - 社区成员分享了 `web-agent` 项目：一个适配手机的网页仪表盘 + Siri/Matrix 桥接工具，基于 Pi 的 RPC 模式构建，支持持久化会话。

3. [#9446 Phosphor – a desktop surface for pi](https://github.com/earendil-works/pi/discussions/9446)
   - 一款桌面应用，可并排运行 Pi 会话、diff 对比、文件、终端和产物，支持所有 Pi 提供商，外加 Claude Pro/Max 和 ChatGPT。

4. [#9427 Pi Manager — a local UI for providers, models, and writing ~/.pi/agent](https://github.com/earendil-works/pi/discussions/9427)
   - 本地控制平面 UI，用于管理提供商、模型目录和 `~/.pi/agent` 配置，无需手动编辑文件。

5. [#9373 pi-agent-views — concurrent sub-agents, rendered by pi itself](https://github.com/earendil-works/pi/discussions/9373)
   - 实现了类似 Claude Code 风格代理视图的扩展：可运行多个使用不同模型的并发子代理，通过热键切换。

6. [#9327 Eco Coding — a GUI for Pi (vision split, teams, browser, computer use + mobile)](https://github.com/earendil-works/pi/discussions/9327)
   - 开源 Pi 桌面 GUI，支持视觉分屏、团队功能、浏览器集成和移动端适配。

---

## 6. 功能需求趋势
1. **GUI / Web UI 生态扩张**：大量基于 `pi --mode rpc` 构建的第三方桌面/网页客户端涌现，表明非 TUI 界面存在强烈的未被满足的需求，同时越来越多的声音呼吁推出官方 Web UI 基础框架，以规范扩展 UI 开发。
2. **更多订阅制 OAuth 提供商（无需 API 密钥）**：用户反复要求原生支持通过浏览器 OAuth 登录的付费 AI 服务（Meta Muse、Google Antigravity、Cursor Pro），而非手动配置 API 密钥。
3. **会话管理优化**：分支删除、从恢复列表分叉会话、`/new` 会话间的持久化状态是反复出现的可用性需求。
4. **更强的扩展能力**：自定义 OAuth 页面渲染、工作指示器 UI 租约、权限门控钩子是扩展开发者的核心诉求。
5. **代理可观测性工具**：随着用户运行更复杂的自主工作流，上下文内存追踪、循环检测、长代理运行的工具调用分组等需求持续增长。

---

## 7. 开发者痛点
1. **Codex / OpenAI Responses 传输可靠性**：#4945 卡顿问题及相关的 #9474 超时 Bug 是用户最主要的不满来源，频繁出现「Working...」卡死导致工作丢失的反馈。
2. **大篇幅会话记录下的 TUI 性能**：多个相互关联的问题（#8036、#9255、#9549）会导致在处理长对话历史或大 diff 时出现崩溃、重绘风暴和 CPU 核心占满。
3. **Windows 兼容性缺口**：Shell 检测失败、应用商店别名问题、二进制文件解析不一致，让 Windows 用户的使用体验欠佳。
4. **新工具链下的包/安装摩擦**：pnpm 11 兼容性问题和 jiti 缓存权限问题导致现代开发环境下的安装失败。
5. **自适应模型的边缘情况**：压缩输出上限失败（#9075）和模型上下文窗口默认值错误（#9566）会影响使用前沿本地模型或自适应推理模型用户的工作流。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区周报 | 2026-09-14

---

## 1. 过去7天亮点
Qwen Code 项目发布了稳定版 CLI `v0.23.3`，推出功能扩展的桌面客户端 `v0.3.0` 预览版，并推进了多智能体沙箱和 Web Shell 远程连接能力的开发。TUI 中高优先级的 React #185 渲染崩溃问题引发了社区大量紧急 bug 反馈，安全加固与沙箱隔离也成为当前开发的核心优先级。

---

## 2. 版本发布
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [v0.23.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3) | CLI 稳定版 | 为 Kimi、Qwen 和 DeepSeek 模型扩展了推理预设（[#11349](https://github.com/QwenLM/qwen-code/pull/11349)）；无破坏性变更 |
| [desktop-v0.3.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0-preview.0) | 桌面预览版 | 带定时打包 CI 的预发布版本（[#11519](https://github.com/QwenLM/qwen-code/pull/11519)）；修复了桥接权限状态问题 |
| [desktop-v0.3.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0) | 桌面稳定版 | 桌面端正式发布，优化了桥接处理逻辑 |
| [v0.23.3-nightly builds (20260910–20260913)](https://github.com/QwenLM/qwen-code/releases) | 每日构建版 | 重构钉钉后台响应聚合逻辑（[#11570](https://github.com/QwenLM/qwen-code/pull/11570)）；通道 API 存在破坏性变更 |
| [cua-driver-rs-v0.20.6](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.6) | 驱动更新 | 预构建 CUA 驱动二进制文件：含代码签名的 macOS 通用二进制、Linux x86_64/arm64 版本（glibc 2.31+）、Windows UIAccess 工作进程 |
| [sdk-typescript-v0.1.12](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12) | SDK | 内置 CLI v0.23.3 |
| [v0.23.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2) | CLI 稳定版 | 优化 web-shell 的分屏会话导航功能（[#11250](https://github.com/QwenLM/qwen-code/pull/11250)）；无破坏性变更 |

---

## 3. 热门问题
1. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500) – 后台智能体并发完成时 TUI 静默崩溃（React #185）**  
   这是 P1 级 UI bug：当多个子智能体快速连续完成任务时，会触发未捕获的“Maximum update depth exceeded”错误，用户会被直接退回 shell 且无任何错误提示。该 issue 有 12 条评论，是当前讨论最多的活跃问题。
2. **[#5199](https://github.com/QwenLM/qwen-code/issues/5199) – Windows 上反复出现 React #185 错误**  
   这是长期存在的开放 issue，本周有更新，共 8 条评论。反馈称在 Windows 的 Cherry Studio 安装环境中也出现了相同的渲染循环崩溃，说明该问题可跨环境复现。
3. **[#11756](https://github.com/QwenLM/qwen-code/issues/11756) – 后台智能体工作流中虚拟化历史记录功能崩溃**  
   P1 级 bug，在 v0.23.3 稳定版上启用 Virtualized History 后可复现，由多智能体工作流更新会话历史触发。
4. **[#11783](https://github.com/QwenLM/qwen-code/issues/11783) – 后台 shell 任务注册后 TUI 崩溃**  
   P1 级 UI 崩溃，在调用带 `is_background: true` 参数的 `run_shell_command` 数秒后发生，证实后台任务生命周期是核心崩溃诱因。
5. **[#11764](https://github.com/QwenLM/qwen-code/issues/11764) – 安全问题：单引号内反斜杠可绕过 Bash 允许规则**  
   P1 级漏洞：当已保存的 `Bash(...)` 允许规则中，第一条命令以单引号包裹的反斜杠结尾时，会自动授权执行第二条未提示的命令，存在沙箱逃逸风险。
6. **[#11695](https://github.com/QwenLM/qwen-code/issues/11695) – 追踪：将智能体框架与执行环境分离**  
   核心架构提案，旨在将智能体循环与工具执行进程解耦，实现可独立部署、可寻址的运行时沙箱。5 条评论表明维护者对这一路线图方向有强烈兴趣。
7. **[#11704](https://github.com/QwenLM/qwen-code/issues/11704) – 提案：推出官方 Android 配套客户端**  
   功能请求：开发原生 Android 瘦客户端，通过 ACP 连接 `qwen serve`，提交者表示愿意开发并维护 MVP。5 条评论显示社区对移动端访问有较高需求。
8. **[#11718](https://github.com/QwenLM/qwen-code/issues/11718) – 桌面端 AppImage Python 环境泄漏导致 MCP 服务器崩溃**  
   已关闭 bug：AppImage 打包的 `PYTHONHOME`/`PYTHONPATH` 会泄漏到派生的 stdio MCP 服务器中，导致外部 Python 解释器异常。本周经过 4 条评论讨论后已修复。
9. **[#11590](https://github.com/QwenLM/qwen-code/issues/11590) – DashScope 网关元数据字段不匹配导致非 Qwen 模型调用失败**  
   已关闭 P1 级集成 bug：自动注入的 `metadata` 对象会导致第三方模型在 DashScope OpenAI 兼容端点上返回 400 错误。经社区反馈后已修复。
10. **[#11762](https://github.com/QwenLM/qwen-code/issues/11762) – `/delete` 命令未清理 `~/.qwen/tmp/<hash>/logs.json`**  
    隐私相关 bug：会话删除后完整会话日志仍会保留，且无设置项可禁用或限制日志累积，引发用户对数据留存的担忧。

---

## 4. 核心 PR 进展
1. **[#11548](https://github.com/QwenLM/qwen-code/pull/11548) – feat(web-shell): 连接选定的远程守护进程**  
   支持独立 Web Shell 通过地址 + bearer token 连接指定的远程守护进程，可切换目标并复用现有工作区/会话/终端接口。
2. **[#11614](https://github.com/QwenLM/qwen-code/pull/11614) – feat(cli): 为 Linux 新增 bwrap 内核沙箱后端**  
   新增基于内核级 `bwrap` 隔离的轻量级 Linux 沙箱，无需容器运行时/root 权限/守护进程。该功能为可选开启，保留原有 macOS 和容器后端。
3. **[#11711](https://github.com/QwenLM/qwen-code/pull/11711) – feat(core): 为子智能体新增容器执行能力**  
   在 Unix 系统上为普通子智能体执行实现 Docker/Podman 容器后端，支持通过环境变量和智能体级配置标志强制启用容器化运行。
4. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) – feat(mesh): 新增持久化共享线程智能体协作能力**  
   引入带共享线程协作的持久化工作区智能体身份，支持任务分配、插话、结果归因、单次运行历史记录、取消和审核工作流。
5. **[#11692](https://github.com/QwenLM/qwen-code/pull/11692) – feat(core): 支持配置 web_search 预算并限制提取器降级逻辑**  
   可通过 `tools.webSearch.timeoutMs` 配置 `web_search` 超时时间（默认从 60 秒提升至 120 秒），并在搜索预算耗尽时限制模型输入。
6. **[#11086](https://github.com/QwenLM/qwen-code/pull/11086) – feat(serve): 将扩展作用域限定为工作区运行时**  
   将全局扩展目录的作用域调整为按工作区运行时划分，实现扩展状态协调、带工作区限定的守护进程/SDK 访问，以及更新后的扩展管理 UI。
7. **[#11280](https://github.com/QwenLM/qwen-code/pull/11280) – fix(skills): 会话恢复时重新应用 Skill 的副作用**  
   修复了恢复会话时仅还原指令、丢失运行时状态的问题，现在会从已加载的 Skill 中恢复 `allowedTools` 规则和 `hooks`。
8. **[#11538](https://github.com/QwenLM/qwen-code/pull/11538) – feat: 支持按模型选择 OpenAI 通信 API**  
   为 OpenAI 兼容服务商新增按模型配置 `wireApi` 的功能（可选 `chat-completions` / `responses`），CLI、ACP、守护进程、Web Shell 和 VS Code 设置流程均已支持。
9. **[#11242](https://github.com/QwenLM/qwen-code/pull/11242) – feat(browser-use): 新增 Chrome 原生消息中转**  
   通过原生消息 + Qwen Chrome 扩展将浏览器 SDK 连接到本地 Chrome，支持调试器挂载、CDP 命令转发，无需单独启动浏览器实例即可实现浏览器自动化。
10. **[#11722](https://github.com/QwenLM/qwen-code/pull/11722) – feat(web-shell): 新增 PWA 安装支持与 Android 开发 shell**  
    为守护进程提供的 Web Shell 添加 PWA 元数据和生产环境 Service Worker，支持安装使用并提供 Android 开发 shell 体验，与移动端配套客户端提案对齐。

---

## 5. 热门讨论
*本周数据集未提供讨论数据。*

---

## 6. 功能请求趋势
1. **沙箱与执行隔离**：用户需求集中在内核级（`bwrap`）和容器级（Docker/Podman）子智能体隔离，以及将智能体框架与执行环境正式分离（[#11695](https://github.com/QwenLM/qwen-code/issues/11695)、[#11614](https://github.com/QwenLM/qwen-code/pull/11614)、[#11711](https://github.com/QwenLM/qwen-code/pull/11711)）。
2. **移动端与远程访问**：社区对官方 Android 客户端、通过 `qwen serve` 远程访问 Qwen Code 的 PWA 支持有强烈兴趣（[#11704](https://github.com/QwenLM/qwen-code/issues/11704)、[#11722](https://github.com/QwenLM/qwen-code/pull/11722)、[#11548](https://github.com/QwenLM/qwen-code/pull/11548)）。
3. **多智能体协作**：用户请求支持持久化智能体身份、共享线程工作区，以及跨守护进程和 Web Shell 的结构化后台任务追踪（[#11206](https://github.com/QwenLM/qwen-code/pull/11206)、[#11636](https://github.com/QwenLM/qwen-code/pull/11636)）。
4. **Web 搜索可配置性**：需求包括可调整搜索超时时间和受限的降级行为，以提升可靠性并控制成本（[#11687](https://github.com/QwenLM/qwen-code/issues/11687)、[#11692](https://github.com/QwenLM/qwen-code/pull/11692)）。

---

## 7. 开发者痛点
1. **TUI 稳定性（React #185 崩溃）**：由后台智能体、虚拟化历史、并发子智能体完成触发的“Maximum update depth exceeded”错误反复出现，导致静默崩溃和会话状态丢失（[#11500](https://github.com/QwenLM/qwen-code/issues/11500)、[#5199](https://github.com/QwenLM/qwen-code/issues/5199)、[#11756](https://github.com/QwenLM/qwen-code/issues/11756)、[#11783](https://github.com/QwenLM/qwen-code/issues/11783)）。
2. **CI 不稳定**：共享运行器环境中间歇性出现测试失败、超时和 SIGTERM 终止，在无逻辑错误的情况下阻塞 PR 合并和发布流水线（[#10490](https://github.com/QwenLM/qwen-code/issues/10490)、[#11777](https://github.com/QwenLM/qwen-code/issues/11777)、[#11736](https://github.com/QwenLM/qwen-code/issues/11736)）。
3. **内存泄漏与会话持久化问题**：长时间运行的会话内存占用过高（最高达 7GB）、崩溃后无恢复路径、会话删除时日志数据清理不彻底（[#11724](https://github.com/QwenLM/qwen-code/issues/11724)、[#11762](https://github.com/QwenLM/qwen-code/issues/11762)）。
4. **跨模型兼容性**：通过 DashScope 网关使用非 Qwen 模型时，因无条件注入元数据字段导致静默失败（[#11590](https://github.com/QwenLM/qwen-code/issues/11590)）。
5. **桌面环境泄漏**：AppImage 打包的 Python 环境变量会泄漏到派生的 MCP 服务器，导致 Linux 上的外部 Python 工具异常（[#11718](https://github.com/QwenLM/qwen-code/issues/11718)）。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*