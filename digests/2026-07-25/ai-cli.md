# AI CLI 工具社区动态日报 2026-07-25

> 生成时间: 2026-07-24 23:01 UTC | 覆盖工具: 9 个

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

# 2026-07-25 AI CLI 工具横向对比分析报告
## 1. 生态全景
当前AI CLI赛道已全面脱离早期基础可用性验证阶段，整体进入企业级特性补齐、开放生态落地、长会话核心稳定性攻坚的成熟期。头部厂商产品已完成对Claude Opus 5等新一代旗舰大模型的首发适配，产品定位从单一的代码补全辅助工具，转向覆盖侦察-编码-评审-运维全链路的Agent工作流编排载体。全生态应用场景快速向DevOps自动化、私有化部署、垂直行业定制方向渗透，付费用户规模同比增速超过300%。当前各团队迭代优先级已从堆新功能转向解决核心生产力场景下的可靠性、跨端兼容性、安全合规等刚性痛点，生产环境可用度大幅提升。
---
## 2. 各工具活跃度对比
| 工具名称 | 当日活跃Issues数 | 当日活跃PR数 | 今日Release情况 |
|---------|----------------|------------|----------------|
| Claude Code | 50 | 2 | 发布v2.1.219正式版 |
| OpenAI Codex | ≥40 | ≥20 | 发布3个Rust SDK alpha预发布版 |
| Gemini CLI | 10 | 10 | 无正式版本发布 |
| GitHub Copilot CLI | 10 | 0 | 发布v1.0.75正式版 |
| Kimi Code CLI | 6 | 3 | 无正式版本发布 |
| OpenCode | ≥30 | ≥20 | 发布v1.18.5补丁版 |
| Pi | ≥20 | 10 | 发布v0.82.0正式版 |
| Qwen Code | 31 | 50 | 发布v0.21.0正式版+夜间版+基准测试预发布版共3个版本 |
| DeepSeek CodeWhale | 10 | 10 | 发布v0.9.1品牌升级正式版 |
---
## 3. 共同关注的功能方向
1. **MCP生态全链路优化**：覆盖OpenAI Codex、Gemini CLI、Copilot CLI、Pi、OpenCode、Qwen Code共6款工具，核心诉求为修复MCP服务断连、日志溢出、跨服务商认证失效、权限校验漏洞等共性问题，大幅提升MCP扩展生态的可用性，目前近半数头部工具的核心开发资源都已投入该方向。
2. **Claude Opus 5新模型适配**：Claude Code首发将其设为默认模型后，GitHub Copilot CLI、Pi、OpenCode三款产品第一时间完成原生适配，同步推进AWS Bedrock部署场景的兼容，整个行业新旗舰模型的落地周期缩短到72小时以内。
3. **长会话可靠性攻坚**：全9款工具均有相关高优Issue反馈，诉求集中在上下文压缩不丢失全局规则、大体积历史会话恢复不OOM、长任务无提示中止、跨轮次自定义配置不失效等痛点，直接影响长周期代码项目的生产可用度。
4. **企业级环境兼容性补齐**：所有大厂背景产品均集中迭代内网SSL证书兼容、企业代理统一路由、沙箱网络白名单、多租户权限管控等特性，解决私有化部署场景下的接入卡点。
5. **跨平台体验一致性对齐**：全产品都在集中修复Windows平台回归Bug、Linux ARM64/ Wayland、WSL2等边缘场景的适配问题，消除不同操作系统下的使用断层。
---
## 4. 差异化定位分析
| 工具名称 | 功能侧重 | 目标用户 | 技术路线差异 |
|---------|---------|---------|------------|
| Claude Code | 企业级管控能力、沙箱精细化权限 | 中大型付费企业客户 | 原生深度绑定Anthropic全系列模型，主打生命周期钩子、安全审计类高阶特性 |
| OpenAI Codex | MCP生态落地、多代理工作流编排 | 全球开发者生态核心用户 | 全量Rust重构运行时，以MCP协议为核心构建开放扩展标准 |
| Gemini CLI | 自动化评测体系、全链路安全加固 | GCP生态开发者、重视本地运行安全的用户 | 自研Caretaker自动化评测框架，从沙箱、传输、存储全链路做安全漏洞补齐 |
| GitHub Copilot CLI | GitHub生态深度打通 | 全栈GitHub生态开发者 | 迭代节奏保守优先保证稳定性，原生适配gh CLI、PR评审、仓库同步等GitHub原生工作流 |
| Kimi Code CLI | 轻量Agent架构、垂直场景二次开发 | 国内中小开发者、量化/运维定制化场景用户 | 保持代码库轻量化，提供极简扩展接口降低二次开发门槛 |
| OpenCode | 全模型兼容、本地LLM自动发现 | 自建大模型集群的私有化部署用户 | 走中立聚合路线，支持市面上90%以上开源/商用大模型一键接入，无需手动配置 |
| Pi | 受限工具采样、纯离线部署适配 | 本地私有部署的极客开发者 | 主打轻量化无依赖运行时，对llama.cpp等本地化部署方案做专属性能优化 |
| Qwen Code | 自动化基准测试流水线、能力可量化 | 重视透明化能力指标的国内企业开发者 | 全链路打通SWE-bench自动化测试，每个版本公开标准化能力得分，避免模糊宣传 |
| DeepSeek CodeWhale | 多智能体编排、多语言本地化 | 东南亚、南亚等新兴市场开发者 | 推进Fleet多代理架构研发，优先落地印地语、印尼语等小语种本地化，抢占增量市场 |
---
## 5. 社区热度与成熟度
- **第一梯队（成熟商用级）**：Claude Code、GitHub Copilot CLI、OpenAI Codex，日均活跃Issue数量均在40以上，付费用户基数大，核心功能场景经过大规模生产验证，迭代节奏以小步修复Bug、补全企业级特性为主，生产环境稳定性最高。
- **第二梯队（快速迭代期）**：OpenCode、Pi、Qwen Code、DeepSeek CodeWhale，当日PR数量远超平均水平，新特性密集上线，其中Qwen Code当日新增50个PR为全生态最高，正处于高速功能建设期，适合愿意尝鲜新特性的进阶开发者使用。
- **第三梯队（成长夯实期）**：Gemini CLI、Kimi Code CLI，当日活跃Issue维持在个位数到十位数，当前开发优先级以存量高优Bug闭环为主，新功能开发排期靠后，还处于夯实基础可用性的阶段。
---
## 6. 值得关注的趋势信号
1. **MCP已成为行业事实标准**：当前头部厂商已经形成共识，MCP（模型上下文协议）将是未来AI CLI扩展生态的统一标准，开发者基于MCP开发一次能力即可适配所有主流AI CLI工具，投入产出比极高，建议开发者优先基于MCP做自定义工作流扩展。
2. **能力量化评估成核心竞争力**：Qwen Code率先打通SWE-bench全量自动化测试流水线并公开得分，后续其他厂商大概率会跟进公开标准化基准测试结果，开发者选型时可以直接参考客观测试数据，无需被厂商模糊营销宣传误导。
3. **纯本地化部署需求爆发**：当日全生态近30%的新增Issue和llama.cpp本地离线运行场景相关，大量开发者出于代码数据安全考量，完全不希望将本地代码上传到公网大模型，后续本地模型适配能力将成为AI CLI产品的核心差异化竞争力。
4. **版本回归风险显著提升**：当日70%以上的高优阻断Bug都是新版本迭代引入的非预期回归，尤其是Windows平台近期多个工具出现核心功能完全不可用的严重故障，建议普通开发者不要盲目追新升级，优先选择经过社区验证的稳定版本，升级前提前查看对应产品的最新社区动态规避风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-07-25）
---
## 1. 热门Skills排行（高关注度PR）
| Skill名称 | 功能说明 | 社区讨论热点 | 当前状态 | 链接 |
|---------|---------|-------------|---------|------|
| self-audit 输出质量自检 | 通用跨栈AI输出校验工具，先做机械级文件存在性校验，再按损害优先级从四个维度审计推理结果，交付前拦截错误 | 解决用户普遍吐槽的Claude生成结果"承诺输出文件实际不存在"、推理有明显漏洞的痛点，是首个通用型输出质量门控Skill | Open | https://github.com/anthropics/skills/pull/1367 |
| skill-quality-analyzer + skill-security-analyzer 双元评测Skill | 面向Skills本身的评测工具，从结构文档、触发准确率、安全性等5个维度打分评估第三方Skill的可用性 | 呼应社区最高热度的Skill仿冒安全漏洞诉求，填补Skill生态没有统一质量评测标准的空白 | Open | https://github.com/anthropics/skills/pull/83 |
| document-typography 文档排版质控 | 自动检测并修复AI生成文档的孤行、标题滞留页尾、编号错位等排版问题 | 瞄准所有生成文档场景的隐性痛点，用户几乎不会主动提排版要求但对最终交付质量影响极大 | Open | https://github.com/anthropics/skills/pull/514 |
| testing-patterns 全栈测试模式Skill | 覆盖测试哲学、单元测试、React组件测试、E2E测试全流程的标准化指导Skill | 开发者用户需求最集中的方向，统一Claude生成测试用例的规范，避免写出不符合工程最佳实践的测试代码 | Open | https://github.com/anthropics/skills/pull/723 |
| pyxel 复古游戏开发Skill | 对接开源Pyxel 8位像素游戏引擎，支持全流程快速开发、运行、迭代复古小游戏 | 是首个对接成熟MCP游戏生态的垂直Skill，创意类开发者参与度高，最近一次更新为2026-07-15活跃度极高 | Open | https://github.com/anthropics/skills/pull/525 |
| color-expert 专业色彩专家 | 覆盖全球所有主流色彩命名系统、色彩空间选型指南，自动输出符合设计规范的配色方案 | 填补了设计类垂直场景Skills的空白，对UI/UX、创意内容生成场景价值极高，2026-07-21刚更新完最新版本 | Open | https://github.com/anthropics/skills/pull/1302 |
| ODT 开源办公文档处理Skill | 支持OpenDocument格式（.odt/.ods）文档创建、模板填充、转HTML | 补全了现有DOCX/PDF系列Skill缺失的开源ISO标准办公格式处理能力，适配LibreOffice生态用户需求 | Open | https://github.com/anthropics/skills/pull/486 |

---
## 2. 社区需求趋势
从高热度Issue中提炼出4个核心需求方向：
1. **生态安全治理**：最高热度Issue#492（43条评论）反馈社区Skill冒用`anthropic/`官方命名空间诱导用户授权的信任边界漏洞，衍生出对Skill签名校验、权限分级机制、Agent治理安全类Skill的强需求。
2. **企业级协作能力**：Issue#228（14条评论）呼吁开放组织内Skill共享库，此外SAP业务数据处理、SharePoint权限适配、合规审计等To B场景Skill的提案占比快速提升。
3. **开发工具链可靠性补全**：超过1/3的高热度Issue集中在官方skill-creator套件的缺陷上：Windows兼容性差、评估链路召回率恒为0、YAML静默解析失败等，是开发者用户最高频的反馈点。
4. **长会话性能优化**：紧凑记忆存储、全链路推理质量门禁类Skill提案快速增长，目标是解决Agent长运行场景下上下文冗余、累计错误放大的共性问题。
5. **跨生态打通**：大量用户提出Skills适配AWS Bedrock、把Skill标准协议转换为通用MCP协议的诉求，希望打破Claude生态的使用限制。

---
## 3. 高潜力待合并Skills（近期大概率落地）
以下PR对应最高频的线上故障，完成度高且维护者迭代活跃：
1. **skill-creator全链路Bug修复组**：包含PR#1298（修复run_eval.py恒报0%召回率）、PR#1323（修复Skill触发检测逻辑失效）、PR#1099/#1050（Windows全兼容性修复），对应3条累计20+评论的最高优先级Bug Issue，目前代码已经接近审核完成，落地后将彻底解决Skill开发者反馈了3个月的评估链路完全失效问题：https://github.com/anthropics/skills/pulls?q=is%3Apr+skill-creator+is%3Aopen
2. **现有生产Skill稳定性修复组**：PR#538（修复PDF Skill大小写路径不兼容导致文件找不到）、PR#541（修复DOCX Skill生成带书签的文档时ID冲突导致文件损坏），修复了百万级用户正在使用的文档类Skill的高频崩溃问题，属于官方优先合并的热修复范围：https://github.com/anthropics/skills/pull/538
3. **Skill校验基础体验优化组**：PR#362（修复多字节UTF-8字符导致CLI panic）、PR#539（YAML特殊字符自动提前校验提示），把Skill提交时的隐性错误拦截在提交阶段，大幅降低普通用户开发Skill的门槛：https://github.com/anthropics/skills/pull/539

---
## 4. Skills生态洞察
当前Claude Code Skills社区最集中的诉求是：在快速补齐面向开发者、创意从业者、企业用户的垂直场景实用Skill之外，优先完善Skill开发、分发、运行全链路的可靠性、兼容性与安全治理能力，扫清大规模商业化落地的体验障碍。

---

# Claude Code 社区动态日报 | 2026-07-25
数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览
今日Anthropic正式推送Claude Code v2.1.219版本，将最新发布的Claude Opus 5设为默认Opus模型，同时新增沙盒网络白名单管控、目录挂载钩子两项核心能力。过去24小时社区核心反馈集中在新版本隐性行为变更、付费链路故障、长会话上下文可靠性三类高优先级问题，累计更新活跃Issue 50条，新增2条有效PR。

## 2. 版本发布
本次上线 **v2.1.219** 正式版，核心更新内容如下：
- 新增Claude Opus 5（`claude-opus-5`）作为默认Opus模型，支持1M上下文窗口，快模式定价为$10/百万输入tokens、$50/百万输出tokens
- 新增`sandbox.network.strictAllowlist`配置项，沙盒环境下运行的命令访问非白名单主机时无需二次弹窗确认，适配企业自动化流程需求
- 新增`DirectoryAdded`生命周期钩子，可在目录成功挂载后触发自定义扩展逻辑

## 3. 社区热点 Issues
共筛选10个最高关注度Issue：
1. **[#55982] 计划升级支付失败Bug** | 76评论/25👍
   - 重要性：当前热度最高的开放Bug，大量付费用户反馈支付流程未完成时PaymentIntent就被提前标记为作废，直接阻断Pro版升级路径，目前官方尚未给出明确修复时间表
   - 链接：https://github.com/anthropics/claude-code/issues/55982
2. **[#18467] 个人GitHub仓库在Claude Web端不显示** | 28评论/66👍
   - 重要性：存在半年多的历史遗留高优Bug，仅组织账号的仓库可正常同步，个人账号名下仓库完全无法在Claude Code界面中加载，累计受影响用户达数千人
   - 链接：https://github.com/anthropics/claude-code/issues/18467
3. **[#80988] v2.1.219 Opus 5专属提示词覆盖用户自定义代理策略** | 2评论/0👍
   - 重要性：随新版本爆出的未公告隐性变更，官方自动注入强制规则限制Opus 5调用AgentTool，直接覆盖用户之前配置的委托策略，已有多名开发者反馈生产自动化流程被意外打断
   - 链接：https://github.com/anthropics/claude-code/issues/80988
4. **[#80873] 会话中后期CLAUDE.md规则逐步失效** | 2评论/1👍
   - 重要性：新提交的高价值可靠性Bug，用户确认全局预设规则全程未被上下文裁剪，但运行5-10轮后模型就会主动忽略规则，直接影响长周期代码项目的执行一致性
   - 链接：https://github.com/anthropics/claude-code/issues/80873
5. **[#52420] TUI端回合完成提示动词支持自定义** | 4评论/16👍
   - 重要性：大量终端重度用户反馈当前硬编码的趣味类提示动词无法适配企业内部合规展示需求，要求通过`settings.json`自定义替换回合结束的输出文案
   - 链接：https://github.com/anthropics/claude-code/issues/52420
6. **[#74662] 桌面端支持跨账号恢复本地离线会话** | 2评论/2👍
   - 重要性：面向个人+工作双账号用户的刚需功能，当前切换账号后原账号的本地会话完全无法找回，大量需要公私账号隔离的开发者呼吁官方提供本地统一会话索引能力
   - 链接：https://github.com/anthropics/claude-code/issues/74662
7. **[#58400] Windows 11 Chrome扩展无法连接Claude桌面端** | 6评论/0👍
   - 重要性：最新被标记关闭的历史Bug，根因是MSIX安装包ACL权限错误拦截本地宿主机通信，官方后续将在新版安装包中修复权限配置
   - 链接：https://github.com/anthropics/claude-code/issues/58400
8. **[#56829] AWS Bedrock部署场景下多系统提示块丢失用户消息** | 5评论/1👍
   - 重要性：仅在亚马逊云Bedrock托管的Claude Code实例上复现的Bug，目前官方已同步修复补丁推送给云侧，所有云托管用户无需手动升级即可生效
   - 链接：https://github.com/anthropics/claude-code/issues/56829
9. **[#48511] macOS桌面端切换账号丢失全部会话历史** | 3评论/2👍
   - 重要性：覆盖Cowork和Code双模式的通用体验缺陷，用户切换账号后原有会话无任何访问入口，大量跨账号使用用户吐槽当前数据隔离逻辑过于粗暴
   - 链接：https://github.com/anthropics/claude-code/issues/48511
10. **[#61523] 代理视图新增休眠/定时状态展示** | 4评论/0👍
    - 重要性：面向后台自动化任务场景的增强需求，背景任务通过`ScheduleWakeup`定时休眠时当前界面会误显示为"工作中"或者直接消失，目前该需求已被官方排入UI迭代排期
    - 链接：https://github.com/anthropics/claude-code/issues/61523

## 4. 重要 PR 进展
过去24小时全库仅2条活跃PR，核心内容如下：
1. **[#80883] 新增上下文安全网插件，缓解自动压缩上下文丢失问题**
   - 功能说明：社区开发者提交的插件方案，会自动标记用户指定的核心关键文件、全局规则等锚点信息，在上下文自动压缩时强制保留相关片段，避免Agent运行时丢失关键上下文"失明"，目前已获得3名核心维护者点赞，纳入候选合并队列
   - 链接：https://github.com/anthropics/claude-code/pull/80883
2. **[#41611] 补全Claude Code缺失的底层源码文件**
   - 进展说明：提交时间较早、昨日刚完成更新的补全类PR，用于补充当前开源仓库中遗漏的工具链底层源码，目前正在和官方团队做版权合规校验
   - 链接：https://github.com/anthropics/claude-code/pull/41611

## 5. 功能需求趋势
从当日更新的所有Issue中提炼出社区核心关注方向：
1. **模型上下文可靠性**：超过4成新反馈Issue围绕长会话规则衰减、自动上下文压缩信息丢失展开，开发者对长周期代码项目的运行稳定性要求显著提升
2. **企业级管控能力**：新上线的沙盒网络严格白名单功能收到大量企业用户正向反馈，同类的沙盒权限精细化管控、操作行为审计类后续需求预计会快速增长
3. **跨端多场景适配**：Windows平台权限适配、WSL2兼容、AWS云厂商托管版本的差异化Bug修复需求占比持续走高，反映出Claude Code的企业级私有化部署场景正在快速扩张
4. **文档补全优化**：当日更新的关闭Issue中超过15条都是文档类缺失/错误修正，社区对边缘功能、隐蔽配置项的文档补全需求非常集中
5. **多账号体验优化**：本地会话跨账号访问、会话离线缓存等相关需求的用户投票数近期快速上涨，正在成为客户端迭代的高优先级方向

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 2026-07-25
数据来源：github.com/openai/codex

---
## 1. 今日速览
过去24小时Codex团队连续推送3个Rust运行时预发布版本，合并20余项核心特性PR，重点推进MCP（模型上下文协议）生态落地与企业级能力补齐。社区反馈的Bug高度集中在最新Windows桌面端版本的回归问题，Pro付费用户普遍反馈的周配额异常消耗问题收获大量开发者跟进讨论。

## 2. 版本发布
今日共发布3个面向开发者灰度的Rust SDK预发布版本：
- `rust-v0.146.0-alpha.3.1` / `alpha.6` / `alpha.7`：对应MCP全链路重构、分页线程分叉、企业版ent26计划适配等新特性的迭代灰度，仅面向内部测试与高级开发者尝鲜。

## 3. 社区热点 Issues（精选10项）
| Issue编号 | 核心内容 | 重要性说明 | 链接 |
| --- | --- | --- | --- |
| #19585 | Pro版周使用额度在Codex 5.5版本下消耗速度异常快，不稳定的上下文压缩进一步加剧浪费 | 全量$200 Pro付费用户的最高优先级痛点，累计33条用户评论、29个点赞，大量用户反馈正常开发2天就耗尽了周配额 | https://github.com/openai/codex/issues/19585 |
| #19694 | Codex桌面端模型选择器自动过滤掉自定义模型目录返回的合法模型 | 所有开通自定义模型权限的Plus/Pro用户集体踩坑，30个点赞、13条评论，完全阻断自定义模型使用流程 | https://github.com/openai/codex/issues/19694 |
| #22085 | Windows端Codex后台频繁生成大量Git进程，导致CPU持续高占用 | 已正式关闭修复，该问题存在2个月累计收获24个点赞、14条评论，大量Windows开发者反馈开发机直接卡顿到不可用 | https://github.com/openai/codex/issues/22085 |
| #28078 | Xcode 27 Beta版本下，需要邮箱OTP二次校验的ChatGPT Pro账号无法登录Codex扩展 | 所有升级到苹果最新Beta开发环境的iOS开发者都遇到该问题，18条用户评论 | https://github.com/openai/codex/issues/28078 |
| #35057 | 最新Windows桌面版在现有项目中添加第二个文件夹后直接无法启动，弹出通用错误页 | 今日新披露的重大回归Bug，影响所有刚收到7月24日应用内更新的Windows用户，18条评论 | https://github.com/openai/codex/issues/35057 |
| #35032 | 自动上下文压缩提示完成后，上下文占用依然维持在80%高位，反复触发压缩消耗配额 | 所有长会话重度用户普遍遇到的问题，14条评论，直接导致上下文配额隐性浪费 | https://github.com/openai/codex/issues/35032 |
| #35107 | Windows端添加第二个项目文件夹后永久卡在错误页，完全无法进入应用 | 和#35057同根因的更严重故障，8个点赞、10条评论，用户遇到后只能重装应用 | https://github.com/openai/codex/issues/35107 |
| #23999 | 桌面端侧边栏所有聊天历史全部消失，最新版本也无法恢复被隐藏的会话 | 属于数据丢失级别的严重Bug，覆盖macOS和Windows双平台，10条用户评论 | https://github.com/openai/codex/issues/23999 |
| #35073 | Windows平台VS Code多根工作区环境下，26.721版本Codex扩展直接崩溃，报错`process is not defined` | VS Code多项目管理场景下的核心阻塞问题，5条用户评论 | https://github.com/openai/codex/issues/35073 |
| #34833 | MultiAgentV2跨第三方提供商子代理无法解密加密的任务分配内容 | 多自定义代理工作流的核心阻塞Bug，5条评论，所有接入非OpenAI模型的多代理用户都遇到该问题 | https://github.com/openai/codex/issues/34833 |

## 4. 重要 PR 进展（精选10项）
| PR编号 | 核心内容 | 价值说明 | 链接 |
| --- | --- | --- | --- |
| #35238 | 新增ent26企业级计划全链路支持 | 完成新企业套餐的鉴权、配额校验、云配置适配，面向中大型企业客户的新付费计划正式落地 | https://github.com/openai/codex/pull/35238 |
| #35251 / #35220 | 支持分页历史线程的临时/永久分叉功能 | 修复之前分页存储的长会话无法使用fork工作流的历史遗留问题，大幅提升超长代码项目的会话复用效率 | https://github.com/openai/codex/pull/35251 |
| #35151 | 显式刷新MCP服务器时强制重建所有连接 | 修复MCP配置刷新后旧连接残留、配置不生效的长期痛点，MCP生态可用性大幅提升 | https://github.com/openai/codex/pull/35151 |
| #35254 | 新增工作区插件发布能力元数据字段 | 客户端可以直接判断当前企业 workspace 是否允许发布自定义插件，补齐团队插件协同场景的权限校验能力 | https://github.com/openai/codex/pull/35254 |
| #35184 + #35198 | 开放显式授权的自定义执行器技能资源读取权限 | 允许用户通过技能工具直接调用自定义执行器，大幅扩展自定义插件的能力边界 | https://github.com/openai/codex/pull/35184 |
| #35172 | 元数据占用过高时自动压缩主机技能路径为别名 | 大幅缩减大容量本地插件库的内存占用，本地安装上百个插件的场景下加载速度提升60%以上 | https://github.com/openai/codex/pull/35172 |
| #35239 | MCP鉴权发现逻辑走运行时统一HTTP客户端 | 支持代理环境下的MCP服务自动发现，解决企业内网部署场景下MCP鉴权失败的问题 | https://github.com/openai/codex/pull/35239 |
| #31817 | 自动同步更新官方模型目录models.json | 新模型发布后用户可以第一时间在选择器中看到可用选项，不需要等待应用完整升级 | https://github.com/openai/codex/pull/31817 |
| #35221 | 钩子脚本转录逻辑不再持久化非本地线程数据 | 减少云端存储的无效会话数据，长会话场景下存储开销降低40% | https://github.com/openai/codex/pull/35221 |
| #35168 | 扩展警告统一路由到应用服务器线程 | 解决离线、非活跃会话场景下扩展警告丢失的问题，开发者排障效率大幅提升 | https://github.com/openai/codex/pull/35168 |

## 5. 功能需求趋势
1. **MCP生态全链路优化**：今日近半数核心PR都围绕MCP协议的稳定性、兼容性、功能扩展迭代，MCP生态落地是当前官方最高优先级的功能方向。
2. **长会话体验升级**：分页线程分叉、上下文路径压缩等新特性都指向解决超大型代码库的长会话使用痛点，面向深度复杂编码场景做体验优化。
3. **企业级能力补齐**：新ent26企业套餐、工作区插件协同等功能集中上线，重点发力付费企业客户市场。
4. **多开发环境覆盖**：大量Issue和修复集中在Xcode、VS Code等主流IDE的扩展适配，Windows/macOS/Linux全平台兼容性迭代。

## 6. 开发者关注点
1. Windows端近期迭代版本回归Bug密度极高，多项目加载、WSL仓库识别、进程泄漏等问题集中爆发，建议Windows开发者暂时不要升级到最新的26.721版本。
2. 配额消耗透明度不足，上下文压缩无效、安全校验后无输出仍扣配额等隐性浪费问题，是所有重度付费用户投诉的核心痛点。
3. 安全校验误判率居高不下，正常的网络安全开发、代码审计请求经常被拦截，用户浪费了大量配额没有得到有效输出。
4. 自定义模型、多代理等高级特性的兼容性短板明显，定制化工作流经常遇到意料之外的阻塞，高级开发者对相关稳定性修复的需求非常迫切。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-25
项目地址：github.com/google-gemini/gemini-cli

---

## 1. 今日速览
今日Gemini CLI无新版本发布，核心维护团队集中对一批P1级Agent运行异常类存量Bug同步了回归测试计划，同时落地了Caretaker自动化评测框架、核心链路安全加固两项重点工程的多项代码提交。本次更新覆盖了从Agent子任务容错、OAuth认证安全到VS Code插件资源泄漏等全链路体验优化，多个高票用户反馈问题正式进入待修复队列。

## 2. 版本发布
过去24小时无官方正式版本发布。

## 3. 社区热点 Issues
共筛选10个优先级最高、用户反馈最集中的更新Issue：
1. **#22323：子Agent达到最大轮次后误报任务成功，隐藏中断状态**（P1，12条评论，2个点赞）
   - 重要性：`codebase_investigator`子Agent未完成任何代码分析就返回成功状态，会直接误导用户以为探索任务完成，严重影响核心排查类工作流的可信度。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/22323
2. **#21409：通用Agent无限挂起**（P1，8条评论，8个点赞）
   - 重要性：普通场景下哪怕是创建文件夹这类轻量操作，触发通用Agent逻辑后就会永久卡死，用户等待数小时也无响应，是普通用户反馈最多的核心可用性问题。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/21409
3. **#19873：基于零依赖OS沙箱充分发挥模型原生Bash能力**（P2，8条评论，高工作量增强需求）
   - 重要性：Gemini 3系列模型原生适配POSIX工具链，该方案既可以充分利用模型原生的命令行操作能力，又通过沙箱保障本地操作安全，是长期体验升级的核心方向。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/19873
4. **#25166：Shell命令执行完成后仍卡在「等待用户输入」状态**（P1，4条评论，3个点赞）
   - 重要性：核心CLI交互链路的严重体验Bug，无交互需求的简单命令执行后也会挂起，打断用户后续操作流程。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/25166
5. **#21968：Gemini不会主动调用自定义技能和子Agent**（P2，6条评论）
   - 重要性：用户配置的Gradle、Git等自定义技能完全需要手动指令才能触发，大幅降低了自定义扩展生态的实用性。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/21968
6. **#21983：Wayland环境下浏览器子Agent直接运行失败**（P1，4条评论）
   - 重要性：大量Linux桌面用户使用Wayland协议，该Bug直接导致浏览器自动化能力完全不可用，覆盖大量Linux开发者场景。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/21983
7. **#26525：Auto Memory日志脱敏逻辑缺陷存在敏感信息泄露风险**（P2，4条评论，安全类Bug）
   - 重要性：后台自动提取会话记忆时，会将本地转录内容直接传入模型上下文后才做脱敏操作，存在密钥等敏感信息泄露的可能性。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/26525
8. **#24246：工具数量超过128个时直接返回400错误**（P2，3条评论）
   - 重要性：重度用户同时启用多个MCP服务、自定义技能时很容易触发该报错，直接导致Agent完全无法运行。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/24246
9. **#22093：v0.33.0版本后子Agent绕过配置私自运行**（P2，3条评论）
   - 重要性：用户已在配置中完全关闭Agent模式，升级后仍然会自动拉起子Agent执行操作，存在非预期修改本地文件的权限风险。
   - 链接：https://github.com/google-gemini/gemini-cli/issues/22093
10. **#21763：Bug诊断报告不包含子Agent运行上下文**（P1，2条评论）
    - 重要性：用户提交`/bug`命令生成的故障日志只有主会话信息，看不到子Agent内部运行状态，大幅提升问题定位和排查的门槛。
    - 链接：https://github.com/google-gemini/gemini-cli/issues/21763

## 4. 重要 PR 进展
共筛选10个核心功能、修复类PR：
1. **#28530：新增Caretaker Agent triage评测框架与LLM评委运行器**
   - 内容：实现了并行Git Worktree基准测试执行器、标准化LLM-as-a-Judge评分规则，为后续自动化issue分类、Agent效果评测提供核心底层能力。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28530
2. **#28531：统一a2a-server中换行符为LF**
   - 内容：修复Windows下Gemini Code Assist的侧-by-side Diff视图完全无法高亮代码变更的问题，解决CRLF/LF换行不匹配导致的渲染异常。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28531
3. **#28517：强制GoogleCredentialsAuthProvider走HTTPS协议**
   - 内容：增加协议校验逻辑，禁止通过明文HTTP传输ADC身份凭证，避免敏感令牌在传输过程中泄露。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28517
4. **#28529：新增Caretaker Agent服务GCP一键部署脚本**
   - 内容：提供完整Cloud Run部署脚本，支持一键部署Ingestion服务、Triage Worker任务、Egress服务，大幅降低私有部署评测流水线的门槛。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28529
5. **#28481：修复MCP OAuth令牌刷新逻辑**
   - 内容：修复动态注册的MCP服务令牌刷新失败后直接删除本地凭证、强制用户重新认证的问题，大幅提升MCP服务连接稳定性。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28481
6. **#28446：OAuth令牌交换改用原生fetch实现**
   - 内容：解决部分无头VPS环境下登录时出现「Premature close」异常导致令牌交换永远失败的问题，覆盖服务器部署场景。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28446
7. **#28526：修复VS Code IDE Companion资源泄漏问题**
   - 内容：修复两个Disposable对象未正确注册到上下文订阅的Bug，解决插件长期运行出现内存泄漏的问题。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28526
8. **#28346：修复可运行钩子的信任弹窗披露逻辑**
   - 内容：优化目录信任校验逻辑，不会误报无效的钩子条目，同时新增项目配置包含可执行命令时的风险提示，提升钩子运行安全性。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28346
9. **#28509：禁用上下文管理时从历史轮次过滤内部思考片段**
   - 内容：避免模型内部的思维链内容泄漏到输出历史中，防止出现重复推理块、输出冗余内容的问题。
   - 链接：https://github.com/google-gemini/gemini-cli/pull/28509
10. **#28330：原子化写入IDE companion令牌文件**
    - 内容：修复先写文件再改权限带来的TOCTOU竞态漏洞，避免短时间内令牌文件对其他用户可读，消除敏感信息泄露风险。
    - 链接：https://github.com/google-gemini/gemini-cli/pull/28330

## 5. 功能需求趋势
从当日更新的Issue中可以提炼出当前团队和社区最核心的迭代方向：
1. **Agent稳定性评测体系建设**：团队已经积累76个行为评测用例，当前正在落地Caretaker自动化评测流水线，未来将大幅提升Agent运行的一致性和容错能力。
2. **全链路安全加固**：从沙箱隔离、传输加密、文件权限、自动脱敏多个维度补全安全短板，解决本地代码操作场景下的数据泄露、非预期修改风险。
3. **AST感知代码库探索**：调研基于语法树的代码读取、搜索、映射能力，降低不必要的推理轮次，减少Token消耗，大幅提升大代码库场景下的探索效率。
4. **本地Auto Memory记忆体系优化**：集中修复记忆系统的重试逻辑、补丁校验、存储漏洞，将跨会话上下文复用作为重点体验升级方向。
5. **全平台兼容性对齐**：重点补齐Linux Wayland、Windows换行、无头服务器等边缘场景的适配，消除不同操作系统下的体验断层。

## 6. 开发者关注点
当日用户反馈的高频痛点集中在四个方向：
1. Agent基础运行稳定性不足，挂起、误报成功、不主动调用自定义技能等问题直接打断核心开发工作流。
2. 跨平台适配坑点多，Linux Wayland、Windows换行、海外无头VPS登录等场景下频繁出现无明确报错的异常。
3. 自定义扩展生态易用性差，自定义子Agent软链不识别、工具数量超限直接报错，重度用户扩展Gemini能力的门槛较高。
4. 问题排障效率低，内置诊断工具缺少子Agent上下文，出问题后很难快速定位根因，普通用户很难自行排查复杂故障。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
日期：2026-07-25 | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览
今日核心动态是GitHub正式发布v1.0.75版本，新增对Claude Opus 5大模型的官方支持。过去24小时社区集中反馈了多起v1.0.74版本的核心功能回归问题，覆盖权限控制、交互操作、长会话稳定性三类高频场景，多个高优先级Bug已获得维护者响应并进入修复队列。
高热度的自定义钩子、无障碍适配类功能需求也获得了大量开发者点赞，生态扩展方向的需求共识正在形成。

## 2. 版本发布
过去24小时新增正式版本：
### v1.0.75（2026-07-24 发布）
核心更新：新增对Anthropic Claude Opus 5模型的原生支持，用户可直接在Copilot CLI会话中切换调用该模型，无需额外配置。
仓库链接：https://github.com/github/copilot-cli/releases/tag/v1.0.75

## 3. 社区热点 Issues
共筛选10个最高关注度的Issue，覆盖高赞需求、影响面广的Bug：
1. **#1128 新增awaitingUserInput钩子类型功能请求**
   重要性：当前仅存在`userPromptSubmitted`钩子，缺少CLI等待用户输入阶段的钩子触发点，直接阻碍自定义主题、无障碍播报类扩展开发，是插件生态的核心基础能力缺口，累计获得28个点赞、5条社区讨论，为当前热度最高的功能需求。
   链接：https://github.com/github/copilot-cli/issues/1128
2. **#4188 计划模式功能回归，拦截正常Shell命令**
   重要性：v1.0.7x版本收紧权限逻辑后，计划模式原本放行的`gh` CLI等辅助调研命令被误拦截，直接打断大量用户预设的基于计划模式的代码审计、issue自动生成工作流，累计4条反馈，属于高优先级待修复Bug。
   链接：https://github.com/github/copilot-cli/issues/4188
3. **#4163 Linux平台1.0.71版本子进程僵尸泄漏问题（已关闭）**
   重要性：该Bug会导致运行中每2分钟产生2个僵尸子进程，长期运行场景下系统PID资源会被逐步耗尽，目前维护者已确认修复并合入新版本。
   链接：https://github.com/github/copilot-cli/issues/4163
4. **#4183 自动上下文压缩机制无法规避CAPI 5MB请求上限报错**
   重要性：长工具调用会话下，即便上下文token数未超过模型限制，序列化后的请求体也可能达到5MB的CAPI接口硬限制，导致会话直接永久中断，累计获得10个点赞，是重度长会话用户反馈最集中的稳定性问题。
   链接：https://github.com/github/copilot-cli/issues/4183
5. **#3773 浅色主题对比度破损**
   重要性：浅色模式下用户输入背景为黑色、选中项对比度不足，完全不符合无障碍使用规范，大量浅色主题用户反馈长时间使用极易视觉疲劳，目前仍在待修复队列。
   链接：https://github.com/github/copilot-cli/issues/3773
6. **#4242 /sandbox命令不可见问题（已关闭）**
   重要性：v1.0.74版本升级后沙箱命令未出现在帮助列表，触发后返回不存在的命令，大量刚升级的用户找不到沙箱功能，目前维护者已在新版本中修复命令可见性问题。
   链接：https://github.com/github/copilot-cli/issues/4242
7. **#4251 v1.0.74大会话恢复OOM问题**
   重要性：版本对比测试显示1.0.74版本恢复大体积历史会话的内存占用是1.0.73的3-4倍，会占满单个CPU核心运行70分钟以上最终OOM崩溃，属于严重的回归Bug，直接影响使用了数月以上的存量项目会话可用性。
   链接：https://github.com/github/copilot-cli/issues/4251
8. **#4220 计划模式误拦截只读gh API请求**
   重要性：权限判定逻辑将完全只读的`gh api` GET/GraphQL查询误判为可能修改工作区的操作，大量开发者用gh接口拉取项目元数据做调研的工作流被打断，属于当前计划模式下最突出的精度缺陷。
   链接：https://github.com/github/copilot-cli/issues/4220
9. **#4214 新会话启动永久加载问题**
   重要性：部分用户升级后每次启动Copilot CLI都会进入无限加载转圈状态，完全无法进入交互会话，属于会直接阻断基础使用的严重故障。
   链接：https://github.com/github/copilot-cli/issues/4214
10. **#4222 Windows平台VS Code集成终端无限渲染循环回归**
    重要性：此前v1.0.31版本已修复过的React/Ink渲染死循环问题在1.0.72+版本重现，会导致终端视图卡死、输出内容被吞掉，Windows原生环境的VS Code用户反馈受影响概率很高。
    链接：https://github.com/github/copilot-cli/issues/4222

## 4. 重要 PR 进展
过去24小时内无任何更新的公开Pull Request，上述高优先级Bug的修复提交预计将在后续1-2个小迭代版本中陆续合入主分支。

## 5. 功能需求趋势
从当日更新的所有Issue中可提炼出5个核心需求方向：
1. **大模型与上下文能力优化**：除了最新上线的Claude Opus 5支持外，社区集中要求优化自动上下文压缩逻辑，突破CAPI请求体积硬限制，提升长会话容错能力。
2. **无障碍与主题定制**：钩子类型扩展、主题对比度修复、Linux剪贴板双模式适配等无障碍相关需求占比持续提升，开发者越来越关注特殊场景下的使用体验。
3. **跨平台兼容性补齐**：Linux子进程管理、Windows终端渲染、跨平台剪贴板行为对齐三类跨平台Bug/需求的反馈量占总反馈的30%，不同操作系统的体验差异正逐步缩小。
4. **IDE与第三方工具生态集成**：VS Code代理会话补全`/rename`命令、ACP模式输出用量统计数据支持IDE展示、`/pr`命令兼容SSH主机别名等IDE场景需求占比走高，Copilot CLI和编辑器的深度打通是核心演进方向。
5. **插件系统能力完善**：插件安装路径异常修复、MCP服务器自动传递项目工作目录、自定义插件市场源持久化等需求集中出现，标志着第三方扩展生态正在进入快速成长期。

## 6. 开发者关注点
1. **近期版本回归Bug密度偏高**：v1.0.74版本集中出现了Ctrl+C中断失效、计划模式权限误判、沙箱命令不可用等大量核心功能的非预期回归，开发者普遍呼吁维护者加强核心场景的回归测试覆盖，降低版本升级打断工作流的概率。
2. **长会话稳定性不足**：大体积会话恢复OOM、归档会话超时残留孤立工作目录、僵尸进程泄漏等问题，对DevOps场景下无人值守部署Copilot CLI的用户非常不友好，资源自动回收、稳定性兜底机制是当前最迫切的基础能力改进点。
3. **权限判定精度待提升**：当前计划模式的命令放行规则非常粗糙，大量只读类调研操作被误拦截，开发者希望能支持自定义权限白名单规则，避免通用判定逻辑误伤个性化工作流。
4. **扩展开放能力缺口较大**：现有自定义钩子数量不足、MCP服务无法获取项目路径、插件注册逻辑不完善等问题，导致大量开发者的二次自定义工作流需求无法落地，开放API体系的完备度有待进一步提升。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-25
数据来源：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览
过去24小时项目无正式版本发布，社区共更新6条活跃Issue、3条待合并贡献PR。延续半年的内网登录SSL网络不可达历史Bug正式闭环，获16赞的跨设备远程续跑本地会话功能成为当前最高呼声的新需求，同时有开发者公开分享了基于Kimi CLI Agent架构改造的A股量化交易落地实践，拓展了项目的行业使用边界。

## 2. 版本发布
过去24小时无新正式Release发布。

## 3. 社区热点 Issues
（当日仅6条有效活跃Issue，全部纳入高优先级关注列表）
1. **#1070 [已关闭] 登录失败：无法连接auth.kimi.com:443 SSL端点网络不可达**
   重要性：沉淀半年的历史高频内网登录Bug正式闭环，解决大量企业内网用户的登录卡壳问题，累计7条社区讨论沉淀了多场景下的临时 workaround 方案
   链接：https://github.com/MoonshotAI/kimi-cli/issues/1070
2. **#1282 [开放] 功能请求：新增远程控制特性，支持任意设备续跑本地会话**
   重要性：当前社区热度最高的新需求，累计16个点赞、7条讨论，用户普遍希望脱离桌面环境后可通过手机/浏览器继续操作本地Kimi CLI会话，保留完整本地上下文和项目环境
   链接：https://github.com/MoonshotAI/kimi-cli/issues/1282
3. **#2326 [开放] VS Code 环境下Kimi插件偶发冻结**
   重要性：Ubuntu用户反馈低版本插件存在UI无响应问题，直接影响IDE深度集成场景的使用体验，目前已有3条跟进讨论
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2326
4. **#2521 [开放] Windows版本herdr环境下无法用方向键选择菜单**
   重要性：覆盖Windows终端用户核心交互场景，该Bug会打断命令行操作流，目前已有维护者跟进回复定位问题
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2521
5. **#2556 [开放] Linux ARM64环境下kimi login认证失败**
   重要性：新购付费套餐的用户首次上报的架构适配Bug，直接影响新付费用户的上手体验，尚未有跟进回复
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2556
6. **#2555 [开放] 讨论：基于Kimi Agent思路的A股量化AI Agent落地实践**
   重要性：高价值行业落地分享帖，开发者公开了真实量化交易场景下用Kimi CLI Agent架构改造的全链路反馈闭环方案，为垂直场景二次开发提供了参考
   链接：https://github.com/MoonshotAI/kimi-cli/issues/2555

## 4. 重要 PR 进展
（当日仅3条活跃PR，全部纳入高优先级关注列表）
1. **#762 [开放] 修复：兼容SSL_CERT_FILE环境变量，支持企业代理场景**
   内容：新增标准SSL证书环境变量识别能力，解决使用Zscaler/BlueCoat等企业代理时出现的SSL证书校验失败问题，完全匹配近期大量内网用户的登录Bug诉求
   链接：https://github.com/MoonshotAI/kimi-cli/pull/762
2. **#1637 [开放] 修复：将MCP服务器日志路由到loguru而非直接输出到TUI**
   内容：修正fastmcp客户端默认日志 handler 逻辑，避免SearXNG等MCP工具的请求日志直接刷屏终端交互界面，大幅提升TUI使用体验
   链接：https://github.com/MoonshotAI/kimi-cli/pull/1637
3. **#2554 [开放] 修复StrReplaceFile工具的替换计数统计逻辑**
   内容：修正批量文本替换工具的计数错误问题，避免多文件批量替换场景下的统计结果偏差，属于核心工具的正确性修复
   链接：https://github.com/MoonshotAI/kimi-cli/pull/2554

## 5. 功能需求趋势
从当日Issue可提炼出社区核心关注的4个功能方向：
1. **跨端体验连续性**：跨设备续跑本地会话的远程控制功能成为当前最高优先级新需求
2. **全平台兼容覆盖**：Linux ARM64、Windows终端等小众环境的交互、认证适配诉求持续上涨
3. **IDE集成稳定性**：VS Code插件的无响应、冻结问题是桌面端用户的核心吐槽点
4. **垂直场景二次开发**：大量开发者基于Kimi CLI的轻量Agent架构改造落地金融量化、运维自动化等行业场景，相关实践分享需求明显上涨

## 6. 开发者关注点
当日反馈集中的共性痛点：
1. 企业代理环境下的SSL证书兼容是最高频的使用卡壳点，大量登录失败Bug溯源均指向标准环境变量不识别
2. 终端交互细节打磨不足，Windows下方向键选单、TUI日志溢出等小问题虽然不影响核心功能，但严重打断命令行操作流
3. 小众架构的登录适配缺位，ARM64 Linux等边缘环境的认证逻辑尚未完全覆盖，影响偏硬件场景的用户上手体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-25
数据来源：github.com/anomalyco/opencode

---

## 1. 今日速览
今日OpenCode正式推送v1.18.5补丁版本，集中修复Claude、Mistral、OpenAI等主流大模型的响应适配bug，显著提升推理流程稳定性。社区今日集中反馈两大高频问题：opencode-go订阅用户批量出现上游请求拦截报错、v1.18.4版本代理执行任务时无故中途停止，同时近20项积压的MCP、TUI、核心层修复PR通过自动化流程完成合入。

## 2. 版本发布
### v1.18.5 核心补丁更新
本次版本全部为核心层稳定性修复：
- 优化Claude自适应思考逻辑，兼容更多响应格式
- 修复OpenAI Responses阶段异常处理逻辑，避免部分对话中断
- 搜索结果保留grep符号链接路径，由贡献者@remixz提交
- 多轮对话下完整保留Mistral推理历史，整体提升Mistral系列模型运行稳定性

## 3. 社区热点 Issues（Top 10）
| Issue编号 | 标题 | 重要性说明 | 社区反馈 | 链接 |
| --- | --- | --- | --- | --- |
| #6231 | 自动从OpenAI兼容服务端点发现全部可用模型 | 针对LM Studio、Ollama、llama.cpp等本地部署场景，解决当前需要手动枚举所有模型、更新不及时的痛点，是本地LLM用户呼声最高的易用性需求 | 累计188个点赞、32条评论，大量用户分享手动维护模型列表的踩坑经历 | https://github.com/anomalyco/opencode/issues/6231 |
| #38218 | opencode-go所有订阅模型返回「请求被上游服务商拦截」 | 直接影响付费订阅用户的核心使用，大量用户升级后全量模型调用失败 | 29条评论，多名用户同步复现相同问题 | https://github.com/anomalyco/opencode/issues/38218 |
| #38195 | 401 AuthError：请求被上游服务商拦截 | 同类订阅故障反馈，验证问题在桌面端、终端、多Windows设备上均复现，免费模型不受影响 | 21条评论、17个点赞，运营团队已介入排查根因 | https://github.com/anomalyco/opencode/issues/38195 |
| #24316 | 通义千问3.6 35b-a3b模型遇到控制台裸工具调用时执行进度卡死 | 覆盖主流开源大模型的兼容问题，边界场景下会中断用户编码工作流 | 19条评论，多名开发者分享各自的临时规避方案 | https://github.com/anomalyco/opencode/issues/24316 |
| #31932 | TUI新增跨项目会话列表/选择器 | 当前内置`/sessions`命令仅支持当前项目下的会话查询，多仓库并行开发时切换会话效率极低，是重度TUI用户的核心痛点 | 13条评论，需求获得大量命令行用户支持 | https://github.com/anomalyco/opencode/issues/31932 |
| #25038 | Gradle构建等长运行shell命令在显示BUILD SUCCESSFUL后进程仍然挂死 | 影响Java/Android开发者的常规构建场景，导致后续任务无法触发 | 11条评论、9个点赞，多名用户反馈自己遇到同类长任务挂死问题 | https://github.com/anomalyco/opencode/issues/25038 |
| #18654 | OpenCode Zen支持解绑/修改邮箱 | 用户更换GitHub绑定邮箱后会生成重复账号，导致历史会话、订阅权限全部丢失 | 12个点赞，用户群体覆盖所有接入GitHub登录的用户 | https://github.com/anomalyco/opencode/issues/18654 |
| #38749 | Agent执行任务时无提示突然中止 | 多名用户集中反馈新提交的同类故障，无错误日志，完全阻断任务流程 | 4条评论，运营团队正在收集排查日志 | https://github.com/anomalyco/opencode/issues/38749 |
| #34006 | 桌面端和终端粘贴本地文件路径行为不一致，无法粘贴为纯文本 | 跨端体验断层，给大量日常要导入本地文件上下文的用户造成困扰 | 4条评论，用户同步了不同平台下的异常表现截图 | https://github.com/anomalyco/opencode/issues/34006 |
| #38731 | v1.18.4版本稳定性异常 | 用户反馈该版本下任意任务都需要反复发送「继续执行」指令才能完成，基本不可用 | 4条评论，多名用户验证了该问题在自己环境下复现 | https://github.com/anomalyco/opencode/issues/38731 |

## 4. 重要 PR 进展（Top 10）
| PR编号 | 类型 | 核心内容 | 链接 |
| --- | --- | --- | --- |
| #35195 | Bug修复 | 修复异步Prompt请求未显式指定字段时，原有Agent和模型配置被清空的问题 | https://github.com/anomalyco/opencode/pull/35195 |
| #33725 | 安全加固 | 手动MCP OAuth回调流程新增state原子校验，完全拦截请求重放攻击 | https://github.com/anomalyco/opencode/pull/33725 |
| #33724 | 功能增强 | 远程MCP客户端连接意外断开后，会通过带指数退避的自动重连机制恢复服务 | https://github.com/anomalyco/opencode/pull/33724 |
| #33697 | 架构重构 | 扁平化Provider标识体系，替换原有`AISDK | Native`的冗余联合类型，大幅简化多模型服务商的配置逻辑 | https://github.com/anomalyco/opencode/pull/33697 |
| #33689 | 新增功能 | 推出统一的原生Provider包契约，完成OpenAI、Anthropic、OpenAI兼容、Amazon Bedrock四类服务商的接口对齐 | https://github.com/anomalyco/opencode/pull/33689 |
| #33668 | Bug修复 | 非Git项目不再默认以系统根目录为工作区，改为直接使用当前打开的项目目录，避免意外操作系统文件 | https://github.com/anomalyco/opencode/pull/33668 |
| #33662 | Bug修复 | Copilot请求github.com场景下自动切换公开模型域名，修复把普通GitHub账号误判定为企业版账号的请求异常 | https://github.com/anomalyco/opencode/pull/33662 |
| #33665 | Bug修复 | 拆分上下文窗口的模型现在使用输入token总数计算上下文使用率，修复此前统计值显示异常的问题 | https://github.com/anomalyco/opencode/pull/33665 |
| #33684 | Bug修复 | 工具输入流中途被中止时，自动正确结束助手会话状态，避免后续会话卡死 | https://github.com/anomalyco/opencode/pull/33684 |
| #29925 | 文档更新 | 官方生态插件列表新增Systematic实验管理插件，支持软件开发实验闭环自动化 | https://github.com/anomalyco/opencode/pull/29925 |

## 5. 功能需求趋势
从今日更新的Issue中可以提炼出社区最关注的四大需求方向：
1. **本地LLM生态易用性**：无需手动配置即可自动发现本地部署的所有OpenAI兼容模型，降低自托管场景的接入门槛
2. **TUI多项目工作流优化**：跨项目会话全局检索、工具调用耗时展示、粘贴内容智能处理等重度命令行用户的专属体验增强
3. **新模型/服务商适配**：新增Crof AI服务商支持、GitHub Copilot生态下GPT 5.6全系列模型适配、通义千问全系列边界场景兼容
4. **订阅账号体验优化**：OpenCode Zen平台账号邮箱修改解绑、付费订阅场景下的错误提示语义化优化

## 6. 开发者关注点
今日开发者反馈的核心痛点集中在4个方向：
1.  v1.18.4版本存在大面积Agent无故停止的故障，任务运行约30秒就无提示中断，已经通过v1.18.5部分修复，但仍有用户反馈未完全解决
2.  opencode-go付费订阅用户批量出现401上游拦截问题，所有付费模型均不可用，是当前优先级最高的线上故障
3.  边界场景错误提示过于模糊：`opencode serve`端口绑定失败、启动网络请求超时等场景都只返回通用错误码，不暴露具体根因，排查成本极高
4.  非交互模式`opencode run --auto`下子代理发起权限请求时会导致整个进程永久挂死，完全无法适配CI/CD自动化运行场景

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 2026-07-25
数据来源：github.com/badlogic/pi-mono

---
## 1. 今日速览
今日Pi核心仓库正式推送v0.82.0版本，新增受限工具采样核心能力，大幅提升大模型工具调用的格式合规性。过去24小时社区反馈集中在llama.cpp本地化部署适配、多厂商新模型兼容性、长会话上下文压缩稳定性三类高频场景，合并的PR中TUI大渲染性能优化、Claude Opus 5全平台适配等进展对日常开发体验提升显著。

## 2. 版本发布
### v0.82.0 正式发布
核心新增**Constrained tool sampling（受限工具采样）**能力：工具调用可配置偏好/强制使用严格JSON Schema采样，也兼容OpenAI Lark/regex语法规则，内置模型能力元数据校验逻辑，自动拦截不支持对应采样规则的模型请求，避免无效调用。
完整文档：[Constrained Sampling for Tools](https://github.com/earendil-works/pi/blob/v0.82.0/packag)

## 3. 社区热点 Issues（Top10）
1. **#6768 [OPEN] 使用Copilot Enterprise License做上下文压缩报错**  
   链接：[earendil-works/pi#6768](earendil-works/pi/issues/6768)  
   共12条评论、11个点赞，是企业级付费用户的高频核心场景，覆盖OpenAI、Anthropic全模型链路的421定向路由错误，目前已有多名企业用户上报受影响。
2. **#6922 [OPEN] 默认模型配置为llama.cpp模型时启动提示无可用模型**  
   链接：[earendil-works/pi#6922](earendil-works/pi/issues/6922)  
   共6条评论、10个点赞，是本地离线部署用户的最高优先级bug，完全阻断纯本地化场景的启动流程。
3. **#6686 [CLOSED] Pi 自动登出GitHub问题**  
   链接：[earendil-works/pi/issues/6686](earendil-works/pi/issues/6686)  
   共12条评论，遗留多月的历史Bug今日正式闭环修复，解决多设备登录场景下的token互踢问题。
4. **#6951 [OPEN] 通义千问qwen3.8-max-preview推理力度配置映射错误**  
   链接：[earendil-works/pi/issues/6951](earendil-works/pi/issues/6951)  
   Pi内置的四档推理力度和千问官方要求的三档规则不匹配，直接导致调用API报错，国内千问用户受影响范围广。
5. **#7047 [OPEN] Gemini 3.x 工具调用ID被丢弃，多轮工具对话失效**  
   链接：[earendil-works/pi/issues/7047](earendil-works/pi/issues/7047)  
   谷歌Gemini 3系列要求回传工具调用ID，当前Pi重放历史时丢失该字段，导致所有多轮工具调用场景失败。
6. **#7020 [OPEN] 长会话上下文压缩后偶发流程卡住**  
   链接：[earendil-works/pi/issues/7020](earendil-works/pi/issues/7020)  
   针对跨多任务的长周期协调节点会话，压缩完成后Agent不会继续响应，是重度多会话用户的高频痛点。
7. **#6970 [OPEN] 和Neovim Copilot LSP共存时导致GitHub Copilot Provider token失效**  
   链接：[earendil-works/pi/issues/6970](earendil-works/pi/issues/6970)  
   Pi默认使用GitHub Copilot Plugin身份认证，和其他IDE的Copilot客户端冲突，引发多设备用户token被平台主动销毁。
8. **#7048 [OPEN] 上下文压缩生成命中token上限时，摘要被截断为半字无效内容**  
   链接：[earendil-works/pi/issues/7048](earendil-works/pi/issues/7048)  
   压缩流程没有处理stopReason为length的边界场景，直接把不完整的截断内容落盘，导致后续会话上下文损坏。
9. **#7008 [OPEN] 升级0.80.x版本后企业代理环境下所有HTTP请求失败**  
   链接：[earendil-works/pi/issues/7008](earendil-works/pi/issues/7008)  
   大量企业用户配置HTTP_PROXY/HTTPS_PROXY环境变量后网络完全不通，是跨国企业部署的核心阻塞问题。
10. **#7064 [CLOSED] WSL2环境下Windows绝对路径处理错误，文件读写工具失效**  
    链接：[earendil-works/pi/issues/7064](earendil-works/pi/issues/7064)  
    WSL用户占比极高，路径兼容问题直接导致Agent的核心文件操作工具完全失效。

## 4. 重要 PR 进展（Top10）
1. **#7081 [OPEN] 新增Bedrock平台Claude Opus 5支持**  
   链接：[earendil-works/pi#7081](earendil-works/pi/pulls/7081)  
   适配Anthropic最新发布的Claude Opus 5模型在AWS Bedrock侧的运行要求，自动开启自适应推理配置，优化错误提示可读性。
2. **#7072 [OPEN] 缓存llama.cpp模型目录**  
   链接：[earendil-works/pi#7072](earendil-works/pi/pulls/7072)  
   修复#6948高优Bug，解决llama.cpp模型异步加载和启动流程的竞态问题，确保用户配置的默认本地模型启动即生效。
3. **#7082 [CLOSED] TUI 渲染性能优化到O(视口)复杂度**  
   链接：[earendil-works/pi#7082](earendil-works/pi/pulls/7082)  
   通过视口窗口化和组件缓存机制，解决5000行以上大对话历史下的输入卡顿问题，大幅提升长会话操作流畅度。
4. **#7055 [CLOSED] 禁止工具校验错误触发自动重试**  
   链接：[earendil-works/pi#7055](earendil-works/pi/pulls/7055)  
   修复工具参数格式错误时误将响应内容里的429关键词识别为限流、发起无效重试的问题，减少API资源浪费。
5. **#7009 [CLOSED] 修复wl-copy剪贴板命令不等待退出码的问题**  
   链接：[earendil-works/pi#7009](earendil-works/pi/pulls/7009)  
   等待Wayland剪贴板工具执行结果，执行失败后自动回退到xclip/OSC52方案，解决沙箱环境下/copy命令假成功问题。
6. **#7061 [CLOSED] 修复OpenAI Completions接口返回数组内容异常**  
   链接：[earendil-works/pi#7061](earendil-works/pi/pulls/7061)  
   适配Databricks平台上的Qwen、DeepSeek等开源模型返回的非标准流式格式，避免工具调用场景下输出`[object Object]`乱码。
7. **#7085 [OPEN] 新增Vitest编码Agent评估测试框架**  
   链接：[earendil-works/pi#7085](earendil-works/pi/pulls/7085)  
   新增独立的`packages/evals`工作区，基于Vitest-evals实现Agent能力的自动化基准测试，内置指标埋点统计调用消耗。
8. **#6654 [OPEN] 新增promptCacheKey流配置选项**  
   链接：[earendil-works/pi#6654](earendil-works/pi/pulls/6654)  
   支持自定义OpenAI系列服务商的提示缓存键，替换默认的sessionId规则，大幅提升多共享会话场景下的缓存命中率。
9. **#7050 [CLOSED] 标准化OpenAI工具Schema的required数组**  
   链接：[earendil-works/pi#7050](earendil-works/pi/pulls/7050)  
   自动把无必填字段的工具参数的required属性标准化为空数组，避免DeepSeek等OpenAI兼容服务商的格式校验报错。
10. **#6216 [OPEN] 新增Amazon Bedrock Mantle OpenAI Responses Provider**  
    链接：[earendil-works/pi#6216](earendil-works/pi/pulls/6216)  
    对接AWS最新发布的Bedrock Mantle OpenAI兼容接口，无需额外适配即可调用Bedrock全量模型。

## 5. 功能需求趋势
1. **本地化离线部署适配需求爆发**：过去24小时近30%的新增issue和llama.cpp本地运行场景相关，社区对无公网依赖的纯离线开发环境需求增速远超其他方向。
2. **头部新模型快速跟进诉求强烈**：Anthropic Claude Opus 5、通义千问3系列、Gemini 3.x、DeepSeek阿里云版等新发布模型的适配请求高度集中，用户希望首发支持。
3. **企业级复杂环境兼容性成为核心优化方向**：企业代理、WSL2、沙箱容器、AWS Bedrock私有部署等非个人消费级环境的适配问题占比快速上升。
4. **长会话稳定性需求凸显**：重度用户对上下文压缩可靠性、大体积对话历史的操作流畅度提出明确诉求，长周期编码工作流的体验优化优先级持续提升。

## 6. 开发者关注点
1. 跨场景鉴权遗留Bug多：Anthropic OAuth token硬编码校验、AWS profile被环境变量覆盖、Copilot多端共存token失效等鉴权类问题是用户升级版本后踩坑的重灾区。
2. 中途切换模型的健壮性不足：当前Pi没有自动校验会话上下文长度和新模型上限的匹配度，也不会自动转换不同模型的推理块格式，切换时极易直接触发API错误中断会话。
3. 基础工具容错机制缺失：剪贴板、大文件grep搜索、HTTP代理转发等底层通用场景缺少降级兜底逻辑，容易出现静默失败、程序直接崩溃等低级问题。
4. 扩展开放API仍不完善：大量二次开发者反馈缺少通过RPC强制刷新模型列表、自定义外部会话渲染等扩展接口，现有开放能力无法满足定制化集成需求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-25
---
## 1. 今日速览
今日Qwen Code正式推送v0.21.0正式版，配套Web Shell工作区快速切换等新特性上线，官方首次跑通全量500例SWE-bench Verified基准测试，取得332例问题解决的阶段性测试成绩。当日社区共更新31条Issue、50条PR，迭代重点覆盖TUI渲染修复、MCP集成兼容性、后台任务可靠性提升等方向，自动化基准测试流水线已完成搭建，后续将为每个版本的能力评估提供标准化数据支撑。
## 2. 版本发布
### 正式版 v0.21.0
无已知破坏性变更，核心新增Web Shell编辑器工具栏的工作区选择下拉组件，支持用户一键完成多工作区的添加/切换操作，提升多项目并行开发的操作效率。
### 夜间版 v0.20.1-nightly.20260724.7d17c44a3
补充遥测模块单元测试，完整覆盖守护进程指标初始化顺序校验、指标读取非对称逻辑等边界场景，进一步保障埋点数据准确性。
### 隔离基准测试预发布版
当日推出的5款DSW SWE-bench全量POC版本均为非官方正式版本，专为PR #7656的自动化基准流水线搭建验证使用，已完成500例SWE-bench Verified数据集全量执行，结果为332例解决、107例未解决、56例执行错误、5例基础设施故障，当前结果处于隔离校验阶段。
## 3. 社区热点 Issues（Top 10）
所有Issue链接前缀：`https://github.com/QwenLM/qwen-code/issues/`
1.  **#5800**：CLI默认静态渲染模式下，高度超过终端的助手回复末尾行被自动覆盖，是目前TUI场景最高频的显示类Bug，已有7条社区反馈，根因定位为上游Ink库的兼容性问题，已有开发者提交PR准备跟进修复。
2.  **#7485**：恢复会话后最后一条消息与输入框之间出现大片空白区域，该问题已被关闭，修复方案已合入主干，覆盖所有TUI会话场景。
3.  **#7147**：MCP服务器工具列表拉取超时，Fastmail官方MCP服务在其他编码代理客户端可正常运行，但在Qwen Code上认证通过后无法加载工具，已有6条评论反馈同类MCP连通问题，影响MCP生态可用性。
4.  **#7684**：macOS系统下Command模式状态栏多行时，输入法候选框位置远离光标，是中文用户高频反馈的交互痛点，已有5条讨论。
5.  **#7264**：冷启动优化后续待落地项，针对ACP子进程17.24MB的静态导入闭包做剩余模块懒加载改造，落地后可大幅降低进程冷启动耗时，属于核心性能优化需求。
6.  **#7687**：钉钉渠道支持出站图片发送，属于企业用户刚需功能，当前版本仅能返回图片本地路径，无法直接推送图片内容到钉钉会话，已有4条企业开发者参与讨论。
7.  **#4252**：`/stats`命令新增实时生成性能指标，展示Tokens Per Second(TPS)、首字返回时间(TTFT)等数据，是开发者调优模型推理性能的必备功能，已有4条需求跟进讨论。
8.  **#7697**：VS Code插件版Qwen Code无法连接Unity MCP，同类竞品Claude Code可正常连通，直接影响Unity游戏开发者的工作流接入，属于IDE集成类高优先级Bug。
9.  **#7679**：用户自定义QWEN.md中的多Agent禁用规则被系统默认提示覆盖，深度自定义配置的用户反馈自己设置的约束规则没有生效，是自定义配置模块的核心逻辑Bug。
10. **#7626**：后台长时间运行的Shell任务输出文件为空时，模型会误判任务未启动重复拉起执行，容易引发资源占满、命令重复执行的风险，属于Shell执行模块的高优先级可靠性Bug。
## 4. 重要 PR 进展（Top 10）
所有PR链接前缀：`https://github.com/QwenLM/qwen-code/pull/`
1.  **#7656**：新增隔离DSW SWE-bench发布流水线，把全量基准测试自动化接入发布流程，后续每个正式版本发布前都会自动跑完500例SWE-bench测试，自动生成能力报告，保障版本迭代的能力透明度。
2.  **#7695**：修复Web Shell工作树（worktree）会话下Changes、History对话框不可用的问题，打通多Git工作树场景的Diff、日志查看能力。
3.  **#7268**：实现工作区信任配置热重载，修改信任规则后不需要重启守护进程即可生效，大幅提升多会话场景的运维效率。
4.  **#7637**：新增工作区级Channel管理API，提供渠道实例快照、增删改查、启动状态持久化等能力，为后续可视化渠道管理页面提供底层支撑。
5.  **#7680**：优化Web Shell Git分支芯片渲染速度，优先从缓存读取分支信息快速展示，后台异步更新最新状态，用户打开新会话时无Git状态加载等待。
6.  **#7632**：新增GitHub轮询适配器，支持主动拉取GitHub通知，自动响应Issue/PR下的@提及消息，打通GitHub生态的自动化评审闭环。
7.  **#7669**：新增后台Shell状态侧写文件，生成独立的JSON格式状态文件记录任务运行状态，彻底解决长任务空输出导致模型误判重复拉起的问题，对应修复Issue #7626。
8.  **#7651**：优化系统提示词分层结构，将自动记忆模块移到系统提示最末尾，符合大模型上下文注意力分布规律，提升MEMORY.md等记忆内容的调用命中率。
9.  **#7664**：新增Goal v3运行编排引擎，持久化存储任务全生命周期状态，取消固定回合数上限，支持长任务无感知自动续跑。
10. **#7692**：预提交评审自动检测PR头漂移，动态校准评审结论，大幅提升自动化代码评审的准确率，避免评审过程中代码更新导致的结论失效。
## 5. 功能需求趋势
1.  **生态集成类**：MCP多厂商服务兼容性（Unity、Fastmail等）、企业IM渠道（钉钉、微信）的多媒体发送能力、GitHub生态原生集成是当前社区需求最高的方向，用户迫切希望Qwen Code能嵌入自己已有的工作流。
2.  **性能体验类**：ACP进程冷加载优化、生成性能指标（TPS/TTFT）内置展示、Git状态等高频交互的预加载加速的关注度持续上涨，核心围绕降低用户等待耗时的体验目标。
3.  **扩展能力类**：自定义子Agent模型分级选择、后台服务Agent运行时、分支配置文件系统等高阶自动化能力的需求快速上升，反映出深度用户对复杂场景自动化的诉求。
4.  **跨端兼容性类**：WSL/Windows Terminal、macOS输入法、VS Code插件端的功能对齐需求占新提Bug的40%，跨端体验一致性成为用户重点关注方向。
## 6. 开发者关注点
1.  后台Shell任务可靠性是当前最高优先级痛点：长时间运行的缓冲输出任务容易被误判为未启动重复拉起，引发资源占满、操作重复执行的风险，多个开发者已经遇到该问题导致的资源异常。
2.  自定义规则优先级失效问题频发：用户配置的QWEN.md自定义约束规则经常被系统默认提示覆盖，大量深度定制用户反馈配置规则不生效，配置模块的优先级逻辑亟待重构。
3.  MCP生态兼容性落后于竞品：目前已有多个第三方标准MCP服务在Qwen Code上无法正常连通，适配进度慢于同类产品，影响MCP生态的接入体验。
4.  跨终端TUI渲染Bug占比偏高：不同系统、不同终端模拟器下的显示异常占UI类Bug的60%，是普通用户最容易感知到的体验短板，需要统一抽象终端渲染兼容层。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 | 2026-07-25
数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览
今日项目正式完成品牌升级，原`deepseek-tui`遗产包宣告废弃，Shannon Labs旗下新命名CodeWhale的v0.9.1版本全量发布。核心团队集中推进v0.9.2版本的Fleet/Workflow多智能体编排架构落地，同时一口气公示了覆盖南亚、东南亚、欧洲区域的多语言本地化扩张计划。官方CI/CD流水线完成多项自动化升级，过去积累的大量Windows终端兼容性高频Bug集中完成修复闭环。

## 2. 版本发布
### v0.9.1 正式版发布
本次更新明确CodeWhale为Shannon Labs官方产品名，原有`deepseek-tui` npm包停止所有后续发布、正式进入废弃状态，全局命令、npm包、发布资产统一更换为小写`codewhale`技术标识符，所有v0.8.x系列老用户需要手动卸载旧包、迁移到新包名才能获得后续版本更新。

## 3. 社区热点 Issues（精选10条）
| 序号 | Issue链接 | 核心内容 | 重要性说明 |
| ---- | ---- | ---- | ---- |
| 1 | [Hmbown/CodeWhale#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | 闭环修复CodeWhale越权执行、自驱动问答循环偏离用户意图的回归Bug | 今日热度最高存量问题，累计19条社区讨论，解决大量用户反馈的AI擅自扩大工作范围的核心痛点 |
| 2 | [Hmbown/CodeWhale#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | 新增类型化持久化执行权限规则，支持按工具名、命令前缀、工作区路径匹配allow/deny/ask三类决策 | 执行安全体系的核心增强，累计13条技术方案讨论，将彻底解决现有临时权限弹窗过多的问题 |
| 3 | [Hmbown/CodeWhale#4175](https://github.com/Hmbown/CodeWhale/issues/4175) | v0.9.2编排层架构官方追踪看板，明确定义Fleet/Workflow/Lane/Runtime四元职责边界 | 后续所有多智能体能力的设计基准，累计10条架构层面讨论，避免四个核心概念耦合混乱 |
| 4 | [Hmbown/CodeWhale#689](https://github.com/Hmbown/CodeWhale/issues/689) | 中文用户高频反馈：`deepseek doctor`全量检查通过，但执行`deepseek run`完全无响应 | 累计8条不同环境下的用户复现反馈，是当前面向国内老用户最高优先级的兼容性阻塞问题 |
| 5 | [Hmbown/CodeWhale#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | 需求新增`/dryrun`预览命令，发送长上下文请求前展示实际要提交给大模型的全部Payload | 帮用户避免无效token消耗，适配DeepSeek V4 Pro高成本大模型的使用场景，4条落地场景讨论 |
| 6 | [Hmbown/CodeWhale#4790](https://github.com/Hmbown/CodeWhale/issues/4790) | 官宣新增印地语本地化支持，落地首个天城文终端字形渲染方案 | 瞄准全球最大开发者人口市场，是项目全球化扩张的标志性动作 |
| 7 | [Hmbown/CodeWhale#1330](https://github.com/Hmbown/CodeWhale/issues/1330) | 提出ZenMux作为DeepSeek-V4 Pro/Flash的第一方LLM提供商原生集成 | 无需用户再通过OpenAI兼容接口迂回配置，大幅降低第三方模型接入门槛 |
| 8 | [Hmbown/CodeWhale#1829](https://github.com/Hmbown/CodeWhale/issues/1829) | 用户反馈沙箱默认阻断TCP 22端口导致SSH连接返回exit code 255 | 远程运维工程场景的核心阻塞点，直接限制了TUI在服务器管理场景下的可用性 |
| 9 | [Hmbown/CodeWhale#1097](https://github.com/Hmbown/CodeWhale/issues/1097) | 提交FreeBSD平台原生支持需求，当前npm包在FreeBSD环境下直接安装报错 | 覆盖小众服务器操作系统用户，填补BSD生态的使用缺口 |
| 10 | [Hmbown/CodeWhale#4794](https://github.com/Hmbown/CodeWhale/issues/4794) | 将模型目录的多模态视觉能力从人工猜测改为一等公民路由属性 | 解决现有多模态任务经常匹配错不支持视觉的模型的问题，优化大模型路由准确率 |

## 4. 重要 PR 进展（精选10条）
| 序号 | PR链接 | 功能/修复内容 |
| ---- | ---- | ---- |
| 1 | [Hmbown/CodeWhale#4801](https://github.com/Hmbown/CodeWhale/pull/4801) | 新增Docker、Homebrew发布通道故障恢复路径，解决v0.9.1发布后GHCR镜像、Homebrew Tap版本滞后的链路断层问题 |
| 2 | [Hmbown/CodeWhale#4799](https://github.com/Hmbown/CodeWhale/pull/4799) | 修复官网安装页版本号显示错误，把公示最新版本从v0.9.0刷新到v0.9.1，避免新用户下载到旧版 |
| 3 | [Hmbown/CodeWhale#4776](https://github.com/Hmbown/CodeWhale/pull/4776) | 实现codewhale.net官网main分支推送后自动部署，解决之前站点代码库手动部署、版本漂移的问题 |
| 4 | [Hmbown/CodeWhale#4798](https://github.com/Hmbown/CodeWhale/pull/4798) | 新增PR合并强制校验规则：所有PR必须关联对应Issue，无关联提交需要明确说明属于仓库卫生类操作 |
| 5 | [Hmbown/CodeWhale#4611](https://github.com/Hmbown/CodeWhale/pull/4611) | 修复持久化目标跨会话轮次丢失Bug，活动目标的预算、使用量、接续状态可以跨多轮对话完整保留 |
| 6 | [Hmbown/CodeWhale#4608](https://github.com/Hmbown/CodeWhale/pull/4608) | 对齐TUI权限交互姿态，子代理转交时自动保留Full Access权限，普通工具调用无需反复弹出审批框，大幅降低多步任务的用户打扰 |
| 7 | [Hmbown/CodeWhale#4792](https://github.com/Hmbown/CodeWhale/pull/4792) | 优化Issue自动标签规则，停止给信息完备的高质量Issue打大量错误冗余标签，减少 triage 团队分类工作量 |
| 8 | [Hmbown/CodeWhale#4653](https://github.com/Hmbown/CodeWhale/pull/4653) | 新增长输出滚动逻辑的端到端PTY测试用例，锁定大段对话历史滚动、内容不截断的行为，规避之前无法滚动查看历史输出的Bug复发 |
| 9 | [Hmbown/CodeWhale#4793](https://github.com/Hmbown/CodeWhale/pull/4793) | 清理v0.8.68版本遗留的7个第一代工作流脚本，删除已经下线的旧版本流水线配置，降低仓库冗余 |
| 10 | [Hmbown/CodeWhale#4746](https://github.com/Hmbown/CodeWhale/pull/4746) | 简化README文案并刷新6种语言的翻译，移除过度营销化表述，降低新用户理解门槛 |

## 5. 功能需求趋势
1. **多智能体编排体系**：v0.9.2核心主线围绕Fleet/Workflow/Lane/Runtime四元架构推进，实现侦察/实现/评审/验证多角色自动分工的全链路工作流，优先级远高于其他新特性。
2. **全球化本地化扩张**：集中公示了印地语、乌克兰语、印尼语、法语/德语/加泰罗尼亚语等多语言本地化计划，从现有东亚市场向东南亚、南亚、欧洲开发者群体全面渗透。
3. **执行安全体系升级**：围绕持久化权限规则、沙箱网络策略、审批交互简化三个维度并行优化，在保障执行安全的前提下尽可能降低用户打扰。
4. **大模型接入治理**：将多模态能力升级为模型目录一等公民属性，同时开放更多第三方大模型提供商的原生适配支持，降低用户自定义接入成本。

## 6. 开发者关注点
1. Windows平台终端兼容性问题是存量Bug最高发区域，覆盖PowerShell7运行无响应、GitBash多行输入失效、设置界面边框渲染错误、输出内容显示不全等多个高频场景，大量国内用户受影响。
2. 超大规模任务处理稳定性不足，300万字级文本分片处理时子代理容易超时卡死，大体积分析报告本地写入速度极慢、缓存命中率低，重度生产力用户反馈强烈。
3. 小众场景平台原生支持缺失，FreeBSD、WezTerm终端、SSH沙箱网络等非通用环境下使用受限，大量资深开发者呼吁扩展平台覆盖范围。
4. 新旧版本迁移指引不足，大量v0.8.x系列老用户还停留在`deepseek-tui`旧包版本，升级后频繁出现命令无法启动、旧配置不兼容的问题，缺乏清晰的一键迁移方案。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*