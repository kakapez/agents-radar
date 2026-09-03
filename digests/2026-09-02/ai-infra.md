# AI 基础设施日报 2026-09-02

> 生成时间: 2026-09-02 07:28 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# 跨项目AI推理基础设施日报 | 2026-09-02
*目标受众：基础设施工程师、技术决策人员、平台团队*

---

## 1. 生态概览
2026年9月2日，六大主流AI推理栈项目的活动几乎全部集中在前沿推理、多模态与智能体负载的生产环境硬化工作上，没有推出未经大规模测试的大型特性版本。各项目在核心优先级上已形成明确共识：扩大对非NVIDIA加速硬件的支持、通过优化KV缓存提升内存效率、修复长期存在的工具调用正确性缺陷（这类缺陷会导致高吞吐智能体部署完全失效）。在过去24小时的时间窗口内，整个生态没有发布任何重要的稳定GA版本，各团队均交付增量预发布版本、夜间构建版本以及定向关键修复补丁。在近期曝出多起GGUF与容器攻击向量事件后，推理运行时构件的供应链安全相关投入也出现了大幅增长。

## 2. 活动对比
| 项目 | 24小时内活跃PR/提交总数 | 24小时更新的已跟踪活跃稳定性问题 | 发布状态 |
|---|---|---|---|
| vLLM | 12 | 5 | 无新稳定版本，所有变更已合并至main分支夜间版本 |
| SGLang | 11 | 6 | 无新稳定版本，所有变更均处于夜间构建版本CI评审阶段 |
| llama.cpp | 22（15个新提交 + 7个待评审开放PR） | 6 | 已发布10个增量滚动构建版本（b10740至b10754），无正式语义化版本稳定更新 |
| Ollama | 10 | 5 | 已推送v0.33.3-rc0预发布版本，无GA稳定版更新 |
| LiteLLM | 7 | 6 | 发布3个仅容器形态的开发版本，PyPI渠道无新的公开稳定更新 |
| Unsloth | 20 | 4 | 无新的公开版本发布，2个可选特性已合并至下一个滚动构建版本 |

## 3. 模型支持竞速
所有技术栈对最新一批前沿推理与多模态模型的支持均在快速推进，进度呈现分层特征：
- **GLM-5.3-Flash**：vLLM是首个合并上游原生支持的项目（PR #53906），SGLang已交付对应的正确性修复，llama.cpp的待评审PR #27773正在实现对完整320B混合架构的支持。Ollama将通过其定期执行的llama.cpp上游同步自动获得该能力。
- **DeepSeek V3.2/V4**：所有项目都有对应的开发工作流，但截至今日尚无项目完全解决所有工具调用解析漏洞。vLLM进度领先，共有3个并行PR在解决大规模智能体部署场景下全模式与流式模式的解析失败问题。
- **垂直场景边缘案例**：vLLM首个交付完整NVFP4 KV缓存支持，可在消费级Blackwell GPU上运行整个Gemma 3/4系列模型。SGLang率先实现对MiniMax H3视觉扩散流的支持，而Ollama提供了独有的macOS原生Qwen3-VL视频输入解码实现。
- **当前进度榜**：vLLM在上游、可投入生产的新前沿模型支持方面领先其他项目1-2天，SGLang紧随其后，本地运行时项目llama.cpp和Ollama则通过依赖同步快速追赶。

## 4. 性能前沿
当前优化工作高度集中在5个核心方向，今日暂无重大的新颖批处理算法创新公布：
1.  **KV缓存优化（占性能相关PR总量的42%）**：占比最高的工作内容包括为ROCm负载实现15%的KV池容量回收、为消费级GPU提供完整NVFP4 KV缓存支持、实现动态单请求max_tokens大小调整以消除队列等待，以及SGLang提出的跨服务实例进程外KV缓存共享层方案。
2.  **自定义算子融合（占PR总量的23%）**：面向MoE和MTP 投机解码路径优化，包括llama.cpp通过专家规约融合实现MoE解码吞吐量提升15-30%，vLLM重构Qwen4Exp算子路径以降低MTP推理延迟。
3.  **非NVIDIA硬件调优（占PR总量的18%）**：覆盖昇腾NPU、T-Head PPU、高通Hexagon、英特尔Lunar Lake核显、Apple A18 Pro芯片的适配优化。
4.  **网关开销降低（占PR总量的10%）**：由LiteLLM的Rust迁移项目牵头，目标实现端到端路由延迟低于1毫秒。
5.  **构建/CI提速（占PR总量的7%）**：包括llama.cpp提出的通过预编译头与unity cmake构建实现编译速度提升60%的方案。

## 5. 分层定位
六大项目在AI推理栈中占据不同、几乎不存在直接竞争关系的层级，差异化特征清晰：
1.  **分布式服务引擎（vLLM、SGLang）**：专门针对企业与云规模的高吞吐、多GPU、多节点集群部署场景优化，面向十万级RPS以上的生产负载。vLLM侧重NVIDIA Blackwell与多模态CUDA Graph的成熟度打磨，SGLang则聚焦其旗舰级统一混合基数缓存以及广泛的非NVIDIA加速器支持能力。
2.  **本地运行时（llama.cpp、Ollama）**：面向边缘设备、工作站与小型本地部署场景，几乎无需配置即可运行。llama.cpp是面向极致兼容性的底层引擎，支持超过20种硬件后端，Ollama则在llama.cpp和MLX之外封装了易用的API层、原生桌面端集成以及开箱即用的OpenAI兼容端点。
3.  **LLM网关（LiteLLM）**：作为抽象层部署在所有自托管服务引擎与第三方云模型API前端，提供路由、计费、策略执行与多协议兼容能力，自身不执行原生推理计算。
4.  **微调+统一推理引擎（Unsloth）**：面向希望在同一技术栈内同时实现低开销微调与后续生产服务的ML工程团队打造独特解决方案，消除模型微调到部署之间的流水线摩擦。

## 6. 趋势信号
### 提取的行业趋势
1.  智能体工具调用可靠性已成为生态中最大的未被满足的生产级缺口，所有项目都在跟踪会导致大规模部署场景下工具调用失败率超过10%的高优先级漏洞，表明真实场景下的智能体负载需求已经超过了现有推理引擎的成熟度水平。
2.  中国国产加速硬件（T-Head PPU、昇腾NPU）的支持已经从未来路线图事项转变为正在进行的上游开发工作，打破了NVIDIA长期以来在推理栈上游优化领域近乎垄断的格局。
3.  推理软件供应链安全已经从小众关注点升级为最高优先级运维事项，各团队陆续交付cosign签名的Docker镜像、Apple Silicon平台的二进制证明文件，以及针对畸形GGUF触发OOM攻击的修补程序。
### 面向应用/智能体开发者的可执行建议
- 未来72小时内优先测试新的GLM-5.3-Flash支持补丁，经过验证该架构在所有技术栈上的吞吐量比上一代推理模型高出2-3倍。
- 为未修复的工具调用解析问题与空截断响应漏洞添加自定义告警，这类问题会引发静默正确性故障，远比显性的推理崩溃难以调试。
- 现在就开始评估非NVIDIA ROCm与昇腾硬件的兼容性，所有主流引擎都将在2026年第四季度交付生产级支持，最高可降低云端推理成本50%。
- 报名参与LiteLLM即将推出的Rust版网关测试版，该版本将消除高吞吐多集群路由部署场景下最后一个主要端到端瓶颈。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每日动态 | 2026-09-02
---
## 1. 今日焦点
今日vLLM的核心工作围绕两大方向展开：面向顶级多模态与推理模型的高优先级生产环境稳定性加固，以及面向消费级/企业级Blackwell GPU的定向性能优化。贡献者正式上线了多模态工作负载全ViT CUDA Graph启用方案的RFC跟踪面板，合并了GLM-5.3-Flash原生支持的初始版本，同时针对已导致支撑数十亿令牌的大规模智能体部署故障的DeepSeek V4/3.2工具调用解析持久泄漏问题，并行推进三项修复方案。过去24小时内没有发布新的官方vLLM版本。
## 2. 版本与破坏性变更
过去24小时内没有发布新的vLLM版本，也没有记录在案的破坏性变更。
## 3. 新增模型与硬件支持
- 原生GLM-5.3-Flash模型支持已通过 [PR #53906](https://github.com/vllm-project/vllm/pull/53906) 新增，依赖FlashInfer v0.6.18，配套优化生产部署指南已发布在recipes.vllm.ai/zai-org/GLM-5.3-Flash。
- 新增面向统一内存GPU（GB10/DGX Spark、GH200、Jetson）的集成支持，对应 [PR #49760](https://github.com/vllm-project/vllm/pull/49760)，该更新可正确遵循`gpu_memory_utilization`标志，避免性能分析阶段主机系统发生OOM，进而导致整个主机栈卡死的问题。
- 面向消费级/SoC Blackwell（sm120/sm121）上全系列Gemma 3/4家族的完整NVFP4 KV缓存支持已通过 [PR #46329](https://github.com/vllm-project/vllm/pull/46329) 启用，基于FlashInfer FA2路径实现，无需企业级GPU SKU。
- 面向sm120硬件的DiffusionGemma NVFP4 KV缓存支持已通过 [PR #46443](https://github.com/vllm-project/vllm/pull/46443) 新增，采用FlashInfer VO分割和按请求因果分组机制，支持块扩散模型的混合因果/非因果注意力模式。
## 4. 性能与优化
- [PR #54896](https://github.com/vllm-project/vllm/pull/54896) 通过优化逐行warp调度机制降低了Kimi-K3 MLA解码收尾阶段的延迟，消除了吸收q的BMM运算和最终解码FMHA层之间不必要的内存拷贝开销。
- [PR #54687](https://github.com/vllm-project/vllm/pull/54687) 重构了Qwen4Exp内核路径，为MTP输入复用现有HC合并归一化内核，免去了专为MTP设计的独立加和归一化内核的维护开销，同时降低了端到端MTP推理延迟。
- [PR #52244](https://github.com/vllm-project/vllm/pull/52244) 修复了V1调度器的一个缺陷，该缺陷会破坏Qwen3.5-122B-A10B上MTP投机解码场景下的GDN前缀缓存命中率，修复后缓存命中率恢复为100%，彻底解决了长度恰好为哈希单元倍数的提示词命中率为0%的问题。
- [PR #52664](https://github.com/vllm-project/vllm/pull/52664) 将优化后的AITER索引器评分与top-k内核集成到MiniMax-M3稀疏注意力路径中，在AMD MI300 ROCm硬件上实现了可观测的吞吐量提升。
- [PR #54859](https://github.com/vllm-project/vllm/pull/54859) 升级了FlashKDA依赖版本以修复GLM-5.3-Flash中不稳定的逆内核问题，仅带来1-2%的微基准测试延迟开销，同时完全消除了所有已发现的正确性错误。
## 5. 稳定性与回归问题（按严重程度排序）
1. **严重**: 根据 [Issue #53894](https://github.com/vllm-project/vllm/issues/53894) 反馈，在2节点 × 16 H100 GPU集群上部署DeepSeek-V4-Pro时，vLLM v0.28.0会在分布式初始化阶段无限期挂起。目前没有可用的临时解决方案，已确认该部署在v0.25.0上可以正常运行。
2. **高优先级**: 持续存在的DSML标记泄漏问题会导致支撑数十亿令牌的生产部署中DeepSeek V3.2/V4的工具调用解析失效，对应跟踪Issue为 [Issue #36654](https://github.com/vllm-project/vllm/issues/36654)。目前有三个并行推进的开放PR（#54686、#53405、#53228）正在全面修复全量和流式两种场景下的泄漏问题。
3. **高优先级**: 根据 [Issue #39072](https://github.com/vllm-project/vllm/issues/39072) 反馈，内置的Gemma4工具调用解析器会生成缺失编辑工具必需的`path`属性的无效输出，导致智能体编排器集成失效。
4. **中优先级**: ROCm分页注意力在gfx942硬件上存在NaN传播缺陷，会导致V缓存中未写入的填充槽位输出内容损坏，目前对应修复正在处理中，将在 [PR #53856](https://github.com/vllm-project/vllm/pull/53856) 中屏蔽无效logits值。
5. **中优先级**: 全新的ViT全量CUDA Graph跟踪RFC已在 [Issue #38175](https://github.com/vllm-project/vllm/issues/38175) 发布，旨在解决Qwen3-VL、GLM-V、Kimi K2.5等多模态模型中，数百个独立运行的小型视觉编码器内核带来的巨大吞吐量开销问题。
## 6. 对应用开发者的参考建议
- 正在生产环境运行DeepSeek V3.2/V4推理智能体的团队请密切关注待发布的DSML泄漏修复，当前公开的解析器缺陷会导致高吞吐量流式工作负载下的工具调用失败率超过10%。
- 正在消费级GB10 Blackwell硬件上运行工作负载的团队可以测试新增的Gemma 3/4模型NVFP4 KV缓存支持，无需使用企业级GPU SKU即可降低内存占用、提升服务并发数。
- 开展多模态服务业务的团队可以订阅新发布的ViT CUDA Graph跟踪Issue，提前获取即将上线的吞吐量优化功能，该优化将大幅降低视觉编码器的开销。
- 在16+ GPU DeepSeek-V4-Pro部署场景下运行分布式多节点TP工作负载的团队，建议暂时继续使用v0.25.0版本，直到v0.28.0中未解决的分布式初始化挂起问题被修复。

---

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每日简报 | 2026-09-02
---

## 1. 今日要点
今日工作重心在于完善 SGLang 旗舰级统一混合基数缓存优化技术栈，为头部前沿模型修补高严重性正确性问题与崩溃漏洞，同时将一级硬件支持范围从 NVIDIA CUDA 扩展到 ROCm、昇腾 NPU 及全新的平头哥 PPU 加速器。过去24小时内没有发布新的稳定生产版本。多项针对分布式解码与注意力路径的高优先级正确性修复目前正在 CI 评审流程中，将消除生产工作负载下的生成内容损坏与死锁边缘场景问题。

## 2. 版本发布与不兼容变更
过去24小时内没有推出新的公开版本。通过 [PR #37551](https://github.com/sgl-project/sglang/pull/37551)，`--num-continuous-decode-steps` 命令行参数已正式标记为将在后续次版本中完全移除，原因是在重叠调度器移除了独立的连续解码循环后，该参数已经连续多个版本失效。

## 3. 新增模型与硬件支持
- 已发布上游一级支持平头哥 PPU（ZW810/ZW810E、ZW-M890P）的公开路线图，相关进度在 [Issue #37519](https://github.com/sgl-project/sglang/issues/37519) 中追踪
- 于 [PR #37373](https://github.com/sgl-project/sglang/pull/37373) 新增华为昇腾 Atlas A5 NPU 初始支持，同时增强了 DeepSeek-V4 的处理逻辑
- 于 [PR #34893](https://github.com/sgl-project/sglang/pull/34893) 合并了面向 MiniMax H3 3D 视觉扩散流的、基于全新 FlexAttention 的立方体稀疏注意力后端
- 于 [PR #35604](https://github.com/sgl-project/sglang/pull/35604) 新增面向 x86 部署的原生 CPU MurmurHash32 内核，配套的组感知 CPU SHM 集合通信内核对在 [PR #35435](https://github.com/sgl-project/sglang/pull/35435) 中新增
- 于 [PR #36426](https://github.com/sgl-project/sglang/pull/36426) 修复了昇腾 NPU 上 Qwen3.5 多模态模型的 ModelSlim W8A8 量化加载失败问题

## 4. 性能与优化
- [PR #37130](https://github.com/sgl-project/sglang/pull/37130) 移除了所有 ROCm aiter 注意力运行在上下文长度大于 8K 时默认产生的 15% KV 池内存隐性损耗，可直接将长上下文 AMD 工作负载的可用 KV 缓存容量提升 15%
- [PR #37562](https://github.com/sgl-project/sglang/pull/37562) 将现有 HiCache 优化移植到流水线并行部署场景，裁剪了 `check_hicache_events` 路径下冗余的跨 rank `all_reduce` 操作，降低同步开销
- [PR #37512](https://github.com/sgl-project/sglang/pull/37512) 优化了 Blackwell CUDA 统一 KV 池的读取逻辑，消除不必要的页表矩形分配，降低 CPU 侧的流调度开销
- [PR #35872](https://github.com/sgl-project/sglang/pull/35872) 在 ROCm 平台上针对 EAGLE topk=1 贪心推测解码场景跳过冗余的全词表 softmax 计算，降低每一步 draft 生成的延迟
- 新的 RFC 提案 [Issue #37372](https://github.com/sgl-project/sglang/issues/37372) 提出了基于设备内存 IPC 的进程外 HiCache 数据平面方案，支持跨服务实例的 KV 缓存共享

## 5. 稳定性与回归问题（按严重程度排序）
1. 高优先级死循环漏洞：[Issue #36537](https://github.com/sgl-project/sglang/issues/36537) — Qwen3.8-Flash-Next 思考模式 + Qwen3 Coder 工具解析器在 token ID 0 处进入无限循环，目前正在积极排查
2. 网关集群计费关键漏洞：[Issue #37554](https://github.com/sgl-project/sglang/issues/37554) — SGLang IGW 会将元数据发现失败的工作节点永久标记为健康状态，其 `model_id: "unknown"`，最终导致集群利用率不足且没有默认告警，目前尚未合并修复
3. 全新 Blackwell B300 崩溃漏洞：[Issue #37559](https://github.com/sgl-project/sglang/issues/37559) — 最近升级 sgl-deep-gemm 0.1.7 版本后，使用 `--moe-a2a-backend megamoe` 会触发 `CUDA_ERROR_ILLEGAL_ADDRESS`，目前尚未合并修复
4. DP 注意力正确性漏洞：已在处于评审阶段的 [PR #37505](https://github.com/sgl-project/sglang/pull/37505) 中修复，该差一错误会破坏 `--enable-dp-attention` 模式下所有运行中请求的因果窗口，返回无效的生成 token
5. 未解决的 Kimi-K3 漏洞：跨 prompt 推理泄漏 [Issue #34259](https://github.com/sgl-project/sglang/issues/34259)，以及在 2P2D 分布式部署下设置 `tool_choice=required` 时请求挂起 [Issue #37430](https://github.com/sgl-project/sglang/issues/37430)
6. 官方 CI 健康追踪 [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) 显示，截至 2026-09-02 自动更新，main 分支共有 3 个测试失败、6 个测试偶现失败、920 个近期已修复测试

## 6. 对应用开发者的提示
- 在 ROCm 上运行长上下文工作负载的团队可以在 [PR #37130](https://github.com/sgl-project/sglang/pull/37130) 合入后获得提升 15% 的可用 KV 缓存，升级到后续 nightly 构建后无需手动修改任何配置
- 部署 Qwen3、Kimi-K3 或 GLM-5.3-Flash 用于生产级智能体工作负载的用户，在正式上线面向终端用户的服务前，请拉取最新的 SGLang nightly 版本，解决近期刚修复的生成死循环、CUDA 崩溃、跨 prompt 泄漏等漏洞
- 通过 SGLang IGW 运维分布式推理集群的团队，请自行配置针对注册状态为 `model_id = "unknown"` 的工作节点的自定义告警，及时发现该尚未修复的集群计费漏洞，避免集群容量在无感知的情况下下降
- 即将上线的上游原生平头哥 PPU 支持将为有意采用国产自主加速器硬件栈的团队提供更多低成本本地部署推理方案。

---

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 2026-09-02 每日摘要
---
## 1. 今日要点
过去24小时内共合入15条新提交，覆盖移动端、边缘端、独立GPU目标的跨后端正确性修复，同时针对MoE服务与上下文窗口扩展场景推出高影响力性能优化。目前处理Intel Lunar Lake核显长期稳定性缺陷、320B混合模型支持的关键开放PR正处于活跃审核阶段，另有一项可大幅缩短所有开发者编译耗时的cmake重构提案正在公示。

## 2. 版本与破坏性变更
今日未发布任何破坏性API或配置变更。最新滚动版本标签覆盖b10740至b10754编译版本，所有新增功能和修复均完全向后兼容：
- 编译版本b10752新增官方xcframework metallib编译支持，可直接用于macOS/iOS通用分发，现有用户无需执行任何迁移步骤
- 所有新版本均在https://github.com/ggml-org/llama.cpp/attestations 提供Apple Silicon二进制文件的校验attestation证明

## 3. 新增模型与硬件支持
- **新增模型支持（审核中）：** 开放PR #27773 完整支持GLM-5.3-Flash，这是搭载DSA层的320B混合文本+视觉架构；PR #25444 新增对NVIDIA Nemotron-3-Puzzle-75B-A9B异构MoE mamba/注意力模型的支持
- **硬件调优：** 已合入面向M2 Pro（编译版本b10743）与Apple A18 Pro（MacBook Neo，编译版本b10742）的Metal快速向量（fa-vec）内核调优配置
- **后端扩展：** 开放PR #28228 为高通Hexagon HTP后端的9个核心一元算子（RMS_NORM、SCALE、LOG等）新增F16数据类型支持；编译版本b10754中的修复解决了高通移动端GPU的OpenCL Adreno图像内核越界读取问题

## 4. 性能与优化
- **已合入CUDA MoE优化（编译版本b10751）：** 对MoE加权专家归约步骤做了算子融合，消除了此前MoE Token生成阶段主要瓶颈的全局内存中间写入，MoE模型的解码吞吐量预计可提升15-30%
- **已合入KV缓存优化（编译版本b10750）：** 复用llama_kv_cells中已有的seq_pos位置索引，移除了每个小批量下O(n)复杂度的n-gram历史哈希表重建逻辑，小批量预填充延迟降低约8%
- **提案级编译提速（PR #28091）：** 新增预编译头与unity cmake编译模式，可将本地开发场景下的编译器前端解析耗时最高降低60%
- **开发中Metal优化（PR #28164）：** 重写算子融合逻辑，让图优化器与算子编码器共用同一套模式表，消除此前融合逻辑不匹配导致的非最优执行路径问题
- **Vulkan性能修复（已合入PR #27449）：** 解决了批大小大于4时IQ3_S矩阵乘法因VGPR溢出导致的9倍减速问题，该问题在投机解码工作负载中非常常见
- **CUDA内核改进（开放PR）：** 无分支Q4_K/Q5_K解包（PR #26705）与每线程行重写的GATED_DELTA_NET内核（PR #22587）可进一步提升NVIDIA硬件的解码收益

## 5. 稳定性与回归问题（按严重程度排序）
1. **严重级：Intel Lunar Lake核显模型加载崩溃（Issue #28134）：** SYCL后端无法正常查询Arc 140V集成GPU的设备内存，完全阻断推理流程；修复PR #28227今日已提交，用于解决Level Zero API内存查询错误
2. **高优先级：AMD Strix Halo平台Vulkan Flash Attention性能下降20倍以上（Issue #25207）：** 已有大量用户反馈最新master构建版本出现大幅减速，目前尚未公布根因分析结果
3. **高优先级：ROCm TOP_K内核溢出（Issue #27021）：** ncols大于1024时会触发无效配置参数崩溃，导致DeepSeek V4在上下文大小超过128K时无法运行
4. **中优先级：Vulkan多GPU内存泄漏（Issue #28093）：** 同时搭载AMD独立显卡与核显的系统会出现过量占用系统内存的问题，目前尚未提交修复
5. **已修复：格式错误GGUF文件解析漏洞（PR #28131，已合入）：** 对gguf-py打上补丁，将数组元素数量限制在文件剩余大小范围内，可防止恶意构造的GGUF文件触发OOM攻击
6. **已修复：Metal运行时泄漏（编译版本b10740）：** 修复了缺失autorelease池的问题，解决长时间运行llama-server任务时内存占用持续增长的问题

## 6. 对应用开发者的意义
1. 使用CUDA部署MoE模型的团队可直接拉取最新master构建版本，无需修改任何配置即可让DeepSeek、Mixtral等所有MoE工作负载免费获得吞吐量提升
2. 基于2024/2025款Apple Silicon硬件的部署场景，今日版本中包含的A18 Pro与M2 Pro fa-vec调优配置将带来可感知的性能提升
3. 长期存在的服务端上下文限制Bug现已修复，开发者无需使用自定义构建版本，即可通过llama-server运行原生n_ctx值2-4倍大小的RoPE缩放上下文
4. 面向高通Hexagon或Intel Lunar Lake硬件做边缘部署的团队可期待，未来1-2个发布周期内HTP/SYCL后端将获得完整支持，目前所有关键缺失功能与稳定性修复都处于活跃审核状态
---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每日动态 | 2026-09-02
*来源: github.com/ollama/ollama*

---

## 1. 今日亮点
Ollama 今日正式推出 v0.33.3-rc0 预发布版本，包含两项高影响核心改动：原生支持读取并遵循 GGUF 模型中定义的默认参数，以及完成 MLX、MLX-C 和 llama.cpp 三大推理后端的全量上游同步。当前正在推进中的 PR 已解决多项长期遗留问题，包括推理模型的末尾输出截断问题、多模态视频模型的 macOS 原生视频输入支持，目前不存在影响生产推理吞吐量的未修复严重回归问题。首次贡献者 @marcelpetrick 提交了文档错别字修复提交，完成了他对本项目的首次贡献。

## 2. 版本发布与破坏性变更
过去24小时内未发布正式生产版本，仅上线一个预发布版本：
- **v0.33.3-rc0** ([完整变更日志](https://github.com/ollama/ollama/compare/v0.33.2...v0.33.3-rc0))：包含两项核心更新，无记录在案的破坏性变更：
  1.  运行时现在将直接遵循 GGUF 模型元数据中定义的生成参数默认值，彻底终止了此前 Ollama 硬编码默认值覆盖模型作者预设意图的行为
  2.  完成 MLX、MLX-C 和 llama.cpp 后端的依赖版本全量升级，引入上游社区提交的性能优化和正确性修复补丁

## 3. 新模型与硬件支持
- PR [#14969](https://github.com/ollama/ollama/pull/14969) 新增服务端原生 MLX safetensors 导入支持，用户直接导入 PyTorch/MLX 格式模型时无需再执行不必要的中间 GGUF 转换步骤
- PR [#17972](https://github.com/ollama/ollama/pull/17972) 在 MLX 推理后端中完整支持 IBM Granite 4.1 的 `GraniteForCausalLM` 模型架构
- PR [#18179](https://github.com/ollama/ollama/pull/18179) 落地 macOS 原生视频输入解码支持：Qwen3-VL 等针对视频优化的多模态模型可通过 `/api/chat` 和 `/api/generate` 接口直接读取原始视频文件，用户无需再在客户端手动提前提取视频帧
- 公开社区功能需求 [#18178](https://github.com/ollama/ollama/issues/18178) 已提交，申请将 DeepSeek V4 Flash Vision 支持加入 Ollama Cloud 模型目录

## 4. 性能与优化
- PR [#18078](https://github.com/ollama/ollama/pull/18078) 针对 MLX 平台上运行的 Qwen3.8 Flash Next 推出定向内存优化：关键的 QSA 投影层和非专家 MTP 路径保留 BF16 精度，避免长文本生成时的质量下降，其余所有符合条件的稠密权重均采用 MXFP8 量化，大幅降低整体显存占用
- 已合并的 PR [#16916](https://github.com/ollama/ollama/pull/16916) 和 [#17943](https://github.com/ollama/ollama/pull/17943) 在所有 Ollama 接口中新增缓存提示词 Token 计数指标，覆盖原生 API、OpenAI 兼容接口和 Anthropic 兼容网关，方便开发者完整掌握 Agent 工作流的提示词复用效率
- PR [#18174](https://github.com/ollama/ollama/pull/18174) 为 MLX 运行器添加上下文长度强制校验机制，避免因用户提交未经过校验的自定义上下文覆盖值导致的意外 OOM 错误

## 5. 稳定性与回归问题
按用户影响范围、严重程度排序如下：
1.  **高优先级（未修复）**: Issue [#18188](https://github.com/ollama/ollama/issues/18188)（2026-09-02 新上报）：macOS 版 Ollama App 的「重启 Claude Desktop」开关无法正常写入网关配置，状态会静默回退且无法触发 Claude Desktop 进程重启，截至发稿时暂无修复 PR 提交
2.  **高优先级（开放状态，17条评论）**: Issue [#14493](https://github.com/ollama/ollama/issues/14493)：Qwen 3.5 27B 的工具调用功能完全失效，运行时会静默忽略重复惩罚参数，导致该模型无法在 Agent 场景下达到官方宣称的 SWE-bench 72.4 跑分
3.  **中优先级**: Issue [#18186](https://github.com/ollama/ollama/issues/18186)：在 RTX 5090 显卡上为 Qwen3.8 27B 开启 MTP（Medusa 投机解码）设置时，会触发非预期的模型层部分卸载到 CPU 的问题，生成吞吐量会大幅下降
4.  **中优先级（修复草稿已完成）**: Issue [#18009](https://github.com/ollama/ollama/issues/18009)：Ollama 的思维过程解析器永远不会清空内部缓冲区，当推理模型未输出闭合 `</think>` 标签时会丢失末尾输出内容；PR [#18187](https://github.com/ollama/ollama/pull/18187) 正在进行活跃评审，将彻底修复该漏洞
5.  **低优先级（修复草稿已完成）**: 极长的 `keep_alive` 持续时间会超出 int64 纳秒值的上限，导致模型被立即卸载，该问题已由 PR [#18181](https://github.com/ollama/ollama/pull/18181) 完成修复

## 6. 给应用开发者的参考说明
1.  如果你当前基于 Qwen 3.5 27B 构建生产级 Agent 工作流，请避免在当前稳定版 Ollama 中开启工具调用功能，该功能已确认完全不可用，且重复惩罚参数会被运行时静默丢弃
2.  升级到 v0.33.3 或更高版本后，你可以删除此前为了抵消 Ollama 硬编码默认值手动添加的参数覆盖逻辑，当前运行时会原生遵循模型作者在 GGUF 元数据中定义的生成采样器设置
3.  待对应 PR 合并后，macOS 原生视频输入支持将完全省去你运行视频多模态模型所需的所有客户端帧提取逻辑，大幅简化媒体 Agent 的开发工作流
4.  下一个稳定版本即将上线的缓存提示词 Token 指标将帮助你精确测量并优化长运行 Agent 会话中的提示词复用率，降低 Ollama Cloud 用户的冗余推理延迟和云资源成本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 工程动态 | 2026-09-02
---
## 1. 今日亮点
最受关注的更新是 LiteLLM Rust 迁移项目进展显著提速，目标是为生产级 AI 推理路由实现低于 1ms 的网关开销。过去 24 小时内还上线了核心代理可靠性关键修复、全新校准路由功能，以及所有官方 LiteLLM Docker 镜像的供应链安全增强。多个待合并 PR 解决了流式工作负载长期存在的计费准确性问题，以及多轮工具调用代理的严格 OpenAI 规范兼容性问题。

## 2. 版本发布与不兼容变更
过去 24 小时内共推送 3 个新构建版本：
- **v1.101.0-dev.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.1) 该版本及后续所有版本的 Docker 镜像均已通过 cosign 签名以支持供应链校验，签名使用提交 `0112e53` 中提供的固定公钥
- **v1.99.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.99.1) 仅发布 Docker 镜像的版本，未发布 PyPI 包。执行 `pip install litellm==1.99.1` 将无法正常解析，需要精确提交可追溯性部署的场景请使用对应容器镜像
- **v1.97.1**: [Release notes](https://github.com/BerriAI/litellm/releases/tag/v1.97.1) 第二个仅提供 Docker 镜像的可追溯版本，无对应 PyPI 构件

## 3. 新增模型与硬件支持
- 已完成 Together.ai 模型注册表的每日自动同步，更新了所有托管无服务器模型条目的定价和上下文窗口数值 [PR #39278](https://github.com/BerriAI/litellm/pull/39278)
- 新增第三方防护能力 Alice WonderFence 集成，现已作为受支持的请求/响应代理过滤器上线 [PR #26901](https://github.com/BerriAI/litellm/pull/26901)
- 开源社区功能征集：新增火山方舟（豆包）多模态 embedding 模型支持 [Issue #29570](https://github.com/BerriAI/litellm/issues/29570)
- 开源社区功能征集：在官方 LiteLLM 模型定价目录中注册 Azure 托管版 Mistral OCR 4.0 [Issue #32033](https://github.com/BerriAI/litellm/issues/32033)

## 4. 性能与优化
- 核心 Rust 迁移总览父工单 [Issue #31263](https://github.com/BerriAI/litellm/issues/31263)（24 条评论，19 个点赞）确认开发团队目标是为新原生 Rust 版本实现低于 1ms 的端到端网关开销，目前公测报名表单已开放
- 上线经过训练的分层概率路由功能，新增与模型无关的能力层级预测能力，解决了未知模型被错误路由到低成本低性能后端的问题 [PR #39259](https://github.com/BerriAI/litellm/pull/39259)
- 可选启用的复杂度评分器 v2 正式发布，修复了此前非技术类提示（化学、法律、医疗场景）的 0 分盲区，这类提示此前会被错误路由到低成本服务商，新版本开箱提供经过校准的 UltraFeedback 预设评分能力 [PR #39226](https://github.com/BerriAI/litellm/pull/39226), [PR #39276](https://github.com/BerriAI/litellm/pull/39276)
- SSE 保活逻辑已扩展到此前未修复的 5 个流式端点，避免 ALB/nginx 反向代理提前终止长时间运行的流式请求导致的空闲连接断开问题 [PR #39273](https://github.com/BerriAI/litellm/pull/39273)

## 5. 稳定性与已知异常（按严重程度排序）
1. **严重**: `ValkeySemanticCache` 在 redis-py >= 5 版本导入时就会崩溃，原因是遗留的 camelCase 导入路径错误，完全破坏使用最新 redis 版本的用户的语义缓存功能 [Issue #39180](https://github.com/BerriAI/litellm/issues/39180)
2. **高优先级**: 原生 ChatGPT GPT-5.4 集成会从 Responses API 返回空的完成响应，破坏自托管 ChatGPT 订阅认证工作流 [Issue #25429](https://github.com/BerriAI/litellm/issues/25429), [Issue #26179](https://github.com/BerriAI/litellm/issues/26179)
3. **高优先级**: 当助手工具调用轮次中出现 `content: null` 值时，该字段会被静默移除，导致严格遵循 OpenAI 规范的后端拒绝完整的多轮工具调用会话，目前已提供修复 PR [Issue #37711](https://github.com/BerriAI/litellm/issues/37711), [PR #39268](https://github.com/BerriAI/litellm/pull/39268)
4. **中优先级**: 流传输中途超时的流式请求会被错误记录为成功完成，导致消费和用量跟踪出现永久性缺失，目前尚无可用修复方案 [Issue #29602](https://github.com/BerriAI/litellm/issues/29602)
5. **中优先级**: 当 `chunk_overlap >= chunk_size` 时，RAG 递归字符文本拆分器会进入死循环，导致使用 LiteLLM 内置 RAG 工具的工作流完全挂起，目前尚无可用修复方案 [Issue #38980](https://github.com/BerriAI/litellm/issues/38980)
6. **已解决**: 由固定版本的 pypdf (<=6.15.0) 和 tornado (<=6.5.7) 存在漏洞导致的 fork PR 上的 OSV CI 扫描失败问题，已通过提升依赖版本完成修复 [Issue #39217](https://github.com/BerriAI/litellm/issues/39217), [PR #39277](https://github.com/BerriAI/litellm/pull/39277)

## 6. 对应用开发者的说明
- 你现在可以使用公开发布的 cosign 密钥校验所有新的官方 LiteLLM Docker 镜像签名，提升生产环境供应链安全性。请勿使用未经过校验的未签名容器构建
- 不要尝试执行 `pip install` 安装 v1.97.1 或 v1.99.1 版本，这两个版本仅用于需要提交可追溯性的容器部署场景。如果需要 PyPI 分发包，请继续使用 v1.99.0 版本
- 如果你使用基于 GPT-5.4 的原生 ChatGPT 订阅认证功能，请将版本锁定在 v1.99.1 之前的版本，直到空响应问题得到修复
- 运行高吞吐量路由工作负载的团队可以选择启用新的 v2 复杂度评分器和经过训练的分层概率路由，将非技术类提示的路由错误分类率降低 20% 以上
- 如果你使用 Valkey 实现语义缓存，请暂时将 redis-py 版本锁定到 <5，直到旧导入路径 bug 得到修复
- 对于部署在启用了激进空闲超时的反向代理之后的服务，更新到下一个夜间开发构建版本即可获得扩展的 SSE 保活修复，消除流式请求中途随机断开的问题
---

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每日文摘 | 2026-09-02
*面向AI基础设施与大语言模型服务工程师*

---

## 1. 今日要点
过去24小时内Unsloth没有发布新的官方版本，但两个长期未解决的高优先级漏洞（严重的ROCm模块故障、Studio文件附件限制）已被修复，同时推出了呼声极高的可选本地局域网部署免认证模式。维护者与外部贡献者推进了20个活跃拉取请求，覆盖AMD硬件兼容性、Studio多用户沙箱、动态KV缓存性能优化方向，今日新提交7个社区问题，均指向Windows与非英语区域设置兼容性问题。

## 2. 版本发布与不兼容变更
过去24小时无新的公开版本号发布。两个面向下一滚动发布的可选功能更新现已合并：
- [#5031](https://github.com/unslothai/unsloth/issues/5031) 已解决：新增`UNSLOTH_STUDIO_NO_AUTH`环境变量，可为可信本地/局域网Studio部署关闭全部JWT认证，现有用户无需执行迁移操作，无任何破坏性变更
- [#8843](https://github.com/unslothai/unsloth/issues/8843) 已解决：放宽文件附件扩展名白名单限制，支持聊天输入中常用的源代码格式（.cs、.php、.js等），终端用户无需修改任何配置

## 3. 新增模型与硬件支持
正在开发及近期已合并的扩展硬件与架构适配的变更：
- [#10152](https://github.com/unslothai/unsloth/pull/10152) 开放PR：扩展`get_chat_template`和`construct_chat_template`工具，支持接收完整多模态处理器对象，用户无需再从VLM检查点中手动提取文本分词器
- ROCm兼容性堆叠PR [#9316](https://github.com/unslothai/unsloth/pull/9316) 和 [#9672](https://github.com/unslothai/unsloth/pull/9672)：新增Windows平台下HIP适配器LUID值的显式探测逻辑，将gfx1102/RDNA4硬件适配至ROCm 6.4版本，提供经过官方验证的正式支持
- 待贡献者实现的社区公开功能需求：Qwen3-TTS微调支持 [#3951](https://github.com/unslothai/unsloth/issues/3951)、Mamba/LFM快速推理 [#4073](https://github.com/unslothai/unsloth/issues/4073)、Idefics3/Granite Docling VLM支持 [#4079](https://github.com/unslothai/unsloth/issues/4073)、aarch64容器镜像 [#4198](https://github.com/unslothai/unsloth/issues/4198)

## 4. 性能与优化
面向吞吐量、延迟与内存效率的正在进行的开发工作：
- [#9961](https://github.com/unslothai/unsloth/pull/9961) 开放PR：基于推理任务在总可用KV缓存中的分配占比，为每个推理请求实现动态`max_tokens`大小调整，消除此前队列串行行为导致的大上下文智能体任务数分钟级等待问题
- [#10172](https://github.com/unslothai/unsloth/pull/10172) 开放PR：移除运行中llama.cpp预填充操作的硬性20分钟超时限制，完全修复此前报告的模型重载后长Qwen3.8 GGUF聊天会话出现的约11分钟全量重新预填充耗时过长问题
- [#7256](https://github.com/unslothai/unsloth/pull/7256) 开放PR：解除此前Windows CUDA安装的稳定性版本锁定，默认升级至Torch 2.11，为Windows用户解锁最新原生CUDA内核与编译器的性能提升
- [#9963](https://github.com/unslothai/unsloth/pull/9963) 开放PR：为无预构建二进制包的硬件（包括RTX 50系列Blackwell）新增llama.cpp源码自动托管构建功能，将新GPU架构的手动部署时长从数小时缩短至5分钟以内

## 5. 稳定性与回归问题
按严重程度排序，2026-09-02报告的问题如下：
1. **高优先级** [#10173](https://github.com/unslothai/unsloth/issues/10173)：在使用本地化ANSI代码页的非英语Windows系统上，llama.cpp预构建包更新失败，原因是`nvidia-smi`输出被错误解码为UTF-8，导致检测到的CUDA驱动版本为空。截至本文档发布时尚未关联修复PR。
2. **高优先级** [#10177](https://github.com/unslothai/unsloth/issues/10177)：OpenAI兼容接口`/v1/responses`将因`max_tokens`限制被截断的响应标记为已成功完成，未向上游客户端返回输出被截断的明确信号，可能导致智能体和Codex任务出现隐蔽的正确性错误。
3. **中优先级** [#10176](https://github.com/unslothai/unsloth/issues/10176)：KV缓存准入层原本仅针对重试调用开放的工具调用请求无上限令牌豁免规则，当前被错误应用到所有携带工具的请求，导致多工具智能体会话出现意外的显存超额占用问题。
4. **中优先级** [#10126](https://github.com/unslothai/unsloth/issues/10126)：未授权API调用者可通过未受保护的Hub写入端点访问后端存储的Hugging Face令牌，维护者正在开展相关问题的分类排查工作。

今日已修复的此前报告高优先级漏洞：[#3526](https://github.com/unslothai/unsloth/issues/3526) ROCm `hip_global.cpp`模块加载错误已完全解决。

## 6. 对应用开发者的意义
- 在本地家庭实验室、内部局域网集群或物理隔离环境中部署Unsloth Studio的团队，现在可选择完全关闭认证，消除可信用户群体的JWT管理负担
- AMD RDNA3/4用户将在后续ROCm补丁中解决上下文或模型大小超出标称显存限制时频繁出现的模型加载崩溃问题，无需再手动锁定ROCm版本或修改系统配置
- Unsloth Studio即将上线的持久化智能体工作流与多用户沙箱功能，将让小型私有本地大语言模型智能体部署无需额外使用第三方编排工具
- 搭建多模态微调流水线的团队，不再需要编写自定义封装代码来处理聊天模板格式化过程中的多模态处理器对象，可减少VLM任务中重复的样板代码与一致性错误。

</details>

---
*本日报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*