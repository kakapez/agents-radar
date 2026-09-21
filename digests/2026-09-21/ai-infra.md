# AI 基础设施周报 2026-09-21

> 生成时间: 2026-09-21 00:58 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI基础设施生态跨项目对比报告 | 2026-09-21
## 1. 生态概览
过去7天，AI基础设施技术栈各层面均进入集中开发阶段，重点围绕下一代稀疏MoE与推理模型的生产级加固展开，同时在AMD、Windows ARM64及边缘后端的跨平台可移植性方面取得进展。推理引擎（vLLM、SGLang）优先针对DeepSeek V4/V4.1、GLM-5.3-Flash、Qwen3.8-Flash-Next等前沿模型推进内核融合与稳定性修复；本地运行时（llama.cpp、Ollama）则扩大了消费级硬件上大型MoE模型的边缘部署能力与内存效率。LLM网关层（LiteLLM）推进了供应链安全建设与核心性能重构，微调框架（Unsloth）拓展了跨平台支持并修复了训练正确性回归问题。整个生态未出现重大API破坏性变更，表明当前处于以增量优化为核心的成熟阶段，而非基础架构重写阶段。

## 2. 活跃度对比
| 项目 | 问题量（活跃） | PR量（开放/已合并） | 发布状态（过去7天） |
|---------|------------------------|--------------------------|-------------------------------|
| vLLM | 7个已追踪的高/严重级别稳定性问题 | 10+个活跃的优化/功能适配PR | 无正式版本；预发布阶段开发速度极高 |
| SGLang | 7个已追踪的高/严重级别稳定性问题 | 15+个活跃的优化/功能适配PR | v0.5.20稳定版发布（含713个PR，237位贡献者） |
| llama.cpp | 7个已追踪的高/严重级别稳定性问题 | 12+个活跃的优化/功能适配PR | 10个增量向后兼容构建版本（b11054 → b11065） |
| Ollama | 9个已追踪的稳定性/功能问题 | 8个活跃的功能/优化PR | 3次发布：v0.34.1、v0.34.2、v0.34.3-rc1 |
| LiteLLM | 400+活跃问题；6个已追踪的高/中级别稳定性bug | 500+开放PR；3个核心优化PR进行中 | 5次发布：v1.101.0（稳定版）、4个预发布构建版本 |
| Unsloth | 5个已追踪的稳定性/功能问题 | 5个活跃的优化/修复PR | 2次测试版发布：v0.1.810-beta、v0.1.811-beta |

## 3. 模型支持竞速
本周的模型适配工作聚焦前沿稀疏注意力与MoE推理模型，生态内各项目形成分层支持格局：
- **SGLang**在新模型生产级服务方面领跑，其v0.5.20稳定版已正式上线GLM-5.3-Flash支持，同时新增了SenseNova-U1/U1.5与块状扩散模型服务的主动追踪项。
- **vLLM**重点针对近期适配的模型（DeepSeek V4/V4.1、Qwen3系列）进行性能加固，而非拓展全新模型支持，并修复了Inkling模型在旧款NVIDIA GPU上的兼容性问题。
- **llama.cpp**拓展了边缘模型支持：修复了Kimi-K3的Metal兼容性问题，新增了专属的灵3.0（Ling 3.0）对话模板解析器，Gemma 4提示词处理优化也在推进中。
- **Ollama**正在开发针对MLX的GLiNER Small v2.1实体抽取支持，同时追踪社区对Mistral Small 4与三值GGUF格式支持的需求。
- **LiteLLM**扩大了多厂商模型目录覆盖范围，新增fal.ai视频模型支持，同步了OpenRouter的定价与规格信息，DeepSeek V4 `reasoning_effort`参数转换的修复工作正在进行中。
- **Unsloth**新增了FP8/INT8扩散模型的训练/推理支持，并优先开展Qwen3.8-Flash-Next MTP推理的性能修复工作。

**领跑结论**：在服务器部署场景的生产级新模型支持方面，SGLang处于领先地位；而在边缘/消费级模型覆盖广度上，llama.cpp仍保持优势。

## 4. 性能前沿
优化工作集中在五大核心领域，各项目侧重有所不同：
1. **稀疏MoE/注意力模型的内核融合**：vLLM领跑，提交4个针对NVIDIA Blackwell与AMD ROCm平台的DeepSeek V4.1内核融合PR（张量并行全规约融合、解码元数据融合、序列并行MXFP8矩阵乘法融合）。SGLang实现了GLM-5.2 DSA索引路径的ROCm内核融合、逐令牌FP8量化+RMSNorm融合，以及扩散模型的FLUX.2 Klein注意力融合。
2. **KV缓存效率**：SGLang提出针对Qwen-Image 2.1多输出生成的前缀KV复用方案；llama.cpp推进持久化上下文检查点开发，以消除循环工作负载下的完整重预填充开销；vLLM推进基于LFRU淘汰策略的增量MoE专家卸载功能。
3. **分布式服务与负载均衡**：SGLang推出一致性哈希数据并行负载均衡器，支持负载感知溢出以应对不均衡工作负载；vLLM修复了分布式KV服务的调度器死锁问题；llama.cpp推进CUDA部署场景下的NCCL多节点张量并行功能。
4. **量化效率**：vLLM新增FlashInfer MXFP8预热优化，避免首次请求的JIT延迟；llama.cpp为AMD RDNA3/4启用Vulkan int8协同矩阵乘法，并为Qwen4启用稀疏FlashAttention；Unsloth新增FP8/INT8扩散量化支持。
5. **冷启动与恢复**：SGLang的权重缓存守护进程将大型FP8模型加载时间从5分钟以上缩短至1秒以内，实现快速故障转移；Ollama优化了Apple Silicon上的MLX内存处理机制，减少加载时的卡顿。

## 5. 分层定位
各项目处于AI基础设施技术栈中不同且互补的层级：
| 层级 | 项目 | 核心价值主张 | 主要使用场景 |
|-------|---------|-------------------------|------------------|
| **服务端推理引擎** | vLLM, SGLang | 基于数据中心GPU为大模型提供高吞吐、低延迟服务，具备先进的并行与调度能力 | 生产级LLM API端点、企业级推理工作负载 |
| **本地/边缘运行时** | llama.cpp, Ollama | 轻量级跨平台模型执行方案，支持消费级GPU、CPU与边缘加速器，依赖极少 | 桌面AI助手、边缘部署、本地硬件原型开发 |
| **LLM网关/代理** | LiteLLM | 100+家LLM厂商的统一API抽象层，具备限流、费用追踪与访问控制能力 | 多厂商LLM部署、成本管理、标准化智能体接口 |
| **微调框架** | Unsloth | 加速微调与RLHF（如GRPO）流程，降低内存占用，同时优化训练与推理性能 | 定制模型适配、领域特定微调、RLHF工作流 |

## 6. 趋势信号
从本周的开发活动中可提炼出三大行业关键趋势，对应用与智能体开发者具有可落地的参考意义：
1. **稀疏MoE/推理模型正遭遇生产稳定性痛点**：所有服务端推理引擎均报告，在Blackwell/H20硬件上运行GLM-5.3-Flash、Qwen3.8-Flash-Next与DeepSeek V4各变体时，存在高严重级别的CUDA非法内存访问、正确性与确定性bug。**行动建议**：对于需要确定性输出或长多轮上下文的生产级智能体工作负载，未来2–4周内请继续使用经过验证的稠密模型系列，大规模部署稀疏MoE推理模型前请跟进上游修复PR。
2. **异构硬件支持不再是附加项**：AMD ROCm、Windows ARM64、高通NPU与英特尔Xe后端均在各项目中获得了实质性的优化与适配投入，打破了高性能推理以往仅聚焦CUDA的传统格局。**行动建议**：采用多厂商硬件策略的基础设施团队，在AMD部署场景中应优先评估SGLang（ROCm MoE优化）与Unsloth（跨GPU Docker支持）。
3. **网关层正向左移，强化安全与性能**：LiteLLM的Cosign Docker镜像签名与Rust分词器迁移表明，LLM网关正从单纯的抽象层向关键基础设施组件演进，需要具备供应链安全能力与高吞吐性能。**行动建议**：在受监管环境中运行LiteLLM的团队应立即实施签名验证，并规划2026年第四季度Rust分词器迁移可能带来的吞吐提升。

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周动态 | 2026-09-21
---

## 1. 过去7天重点回顾
vLLM 项目本周活跃度较高，核心工作集中在 DeepSeek V4/V4.1 的性能优化与缺陷加固上，针对 NVIDIA 和 ROCm 平台提交了多个内核融合 PR，同时积压了一批用户反馈的新模型正确性与稳定性问题，涉及 GLM-5.3-Flash、Qwen3.8-Flash-Next 等。过去7天无官方新版本发布，但调度器、KV 卸载、投机解码等子系统的开发节奏依然保持高位。

---

## 2. 版本发布与破坏性变更
过去7天无新版本发布，未公布任何 API 或配置层面的破坏性变更。

---

## 3. 新模型与硬件支持
- **ROCm + Qwen3-Next/Qwen3.5**：AMD GPU 现已启用融合 QK-norm+RoPE+gate Triton 内核，此前该能力仅支持 CUDA。[PR #51406](https://github.com/vllm-project/vllm/pull/51406)
- **SM8x (Turing/Ampere) 架构上的 Inkling 模型**：改用 Triton 注意力后端替换失效的 FlexAttention 路径，实现了对老款 NVIDIA GPU 的兼容支持。[PR #55078](https://github.com/vllm-project/vllm/pull/55078)
- **ModernBert LoRA 支持（功能请求已关闭）**：用户提出的编码器/池化模型 LoRA 推理请求已完成分诊并关闭。[Issue #57002](https://github.com/vllm-project/vllm/issues/57002)
- **Turing GPU (SM 7.5) 上的 Gemma4 兼容性问题**：所有注意力后端均触发共享内存上限，目前暂无修复合入。[Issue #38918](https://github.com/vllm-project/vllm/issues/38918)

---

## 4. 性能与优化
- **DeepSeek V4.1 NVIDIA 平台**：将 TP all-reduce 与 mHC 输入预处理融合，把3次内核启动合并为1次，同时复用现有工作区内存。[PR #57643](https://github.com/vllm-project/vllm/pull/57643)
- **DeepSeek V4.1 ROCm (gfx950) 平台**：融合解码元数据处理与最终归一化，同时在内核中实现稀疏解码的块表转换。[PR #57756](https://github.com/vllm-project/vllm/pull/57756)
- **DeepSeek V4.1 序列并行 MXFP8**：针对 SM100+ GPU 融合 wo_b GEMM 与 reduce-scatter，每层可减少一次 HBM 往返开销。[PR #57428](https://github.com/vllm-project/vllm/pull/57428)
- **DeepSeek V4.1 mHC 系数重叠执行**：在小 TP 批量场景下，将移位 mHC 系数生成与注意力/FFN 计算重叠执行（PR 已关闭，待 rebase 后续跟进）。[PR #57603](https://github.com/vllm-project/vllm/pull/57603)
- **FlashInfer MXFP8 预热**：提交 PR 实现在 JIT 预热阶段生成缓存的优化策略，避免推理过程中出现即时内核编译开销。[PR #57842](https://github.com/vllm-project/vllm/pull/57842)
- **ViT 完整 CUDA Graph 支持（RFC 进行中）**：多模态模型 ViT 编码器 CUDA Graph 优化跟踪项，目标是降低内核启动开销。[Issue #38175](https://github.com/vllm-project/vllm/issues/38175)
- **增量式 MoE 专家卸载（RFC 进行中）**：采用 GPU 缓存 + 异步流水线方案，将动态 MoE 专家权重卸载至 CPU 页锁定内存，并使用 LFRU 淘汰策略。首个 PR 已开放。[Issue #38256](https://github.com/vllm-project/vllm/issues/38256) | [PR #37190](https://github.com/vllm-project/vllm/pull/37190)

---

## 5. 稳定性与回归问题
按严重程度（影响范围 + 评论活跃度）排序：

1. **严重**：GLM-5.3-Flash 在 4x B200 上反复出现 CUDA 非法内存访问，涉及三个无关联的内核（KDA linear-attention、MHC TileLang、TRT-LLM 融合 MoE）。目前暂无关联修复 PR。[Issue #54317](https://github.com/vllm-project/vllm/issues/54317)
2. **高**：Qwen3.8-Flash-Next 在 SM121/GB10 上，当 `temperature=0` 时贪婪解码结果不具备确定性，触发条件为提示词长度接近 QSA 稀疏注意力的 `indexer_budget`。目前暂无关联修复 PR。[Issue #54521](https://github.com/vllm-project/vllm/issues/54521)
3. **高**：调度器针对处于 `WAITING_FOR_REMOTE_KVS` 及其他阻塞等待状态的请求存在准入死锁问题，会导致 `max_num_seqs` 槽位被永久占用。修复 PR 已开放。[Issue #54348 (PR)](https://github.com/vllm-project/vllm/pull/54348) | [相关调度器 strand 缺陷 PR #57841](https://github.com/vllm-project/vllm/pull/57841)
4. **高**：GLM-5.3-Flash 存在多轮智能体输出退化（重复 token 导致的“语无伦次”）问题，同时在 W4A16 量化下，推理解码累积后也会出现长解码退化问题。目前暂无关联修复 PR。[Issue #56605](https://github.com/vllm-project/vllm/issues/56605) | [Issue #56868](https://github.com/vllm-project/vllm/issues/56868)
5. **中**：启用 MTP 投机解码时，Qwen3.6-27B 在 Responses API 上出现工具调用失败（回归问题）。目前暂无关联修复 PR。[Issue #46249](https://github.com/vllm-project/vllm/issues/46249)
6. **中**：当启用序列并行/异步 TP 且设置 `VLLM_BATCH_INVARIANT=1` 时，批量不变性被破坏。目前暂无关联修复 PR。[Issue #56370](https://github.com/vllm-project/vllm/issues/56370)
7. **中**：在 H200 上，DeepSeek-V4 MoE 在 v0.20.0 版本相较 v0.19.0 出现延迟/吞吐量回归。该 issue 已关闭，但未确认根因修复。[Issue #41306](https://github.com/vllm-project/vllm/issues/41306)

---

## 6. 对应用开发者的影响
- 若你在生产环境中部署 **GLM-5.3-Flash** 或 **Qwen3.8-Flash-Next**，在长上下文、多轮智能体工作负载或有确定性输出要求的场景下需格外谨慎——这两个模型目前均有高优先级的正确性缺陷正在排查中。
- 对于使用 NVIDIA Blackwell 或 AMD ROCm 平台的 **DeepSeek V4/V4.1** 用户，即将合入的一批内核融合 PR 将带来显著的延迟降低与吞吐量提升；如果你大规模运行这些模型，可关注合入进度。
- 使用 **KV 卸载** 或 **分布式服务** 的团队请跟踪调度器死锁修复——当前版本中，如果请求卡在阻塞等待状态，系统可能会静默挂起，无可用调度容量。
- 无新版本发布意味着无需立即进行 API/配置更新，但使用 v0.29.0 预发布内核的用户应关注 FlashInfer MXFP8 预热修复，避免首次请求延迟飙升。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周动态 | 2026-09-21
---
## 1. 近七日亮点
SGLang 在并行策略、硬件可移植性与扩散模型服务方面均有进展：全新一致性哈希 DP 负载均衡器已进入评审阶段，ROCm 针对 GLM-5.2 与 DeepSeek-V4 完成了多项内核优化，Qwen-Image 2.1 也在内存与缓存效率上获得了一系列提升。稳定性方面，团队仍在重点排查 Blackwell 与 H20 平台上 FP4/MoE 工作负载出现的 CUDA 非法内存访问问题，目前已有多轮调查推进中，对应的修复 PR 也在开发。

## 2. 版本发布与破坏性变更
- 周期内发布 **v0.5.20** 版本，共合入 237 位贡献者提交的 713 个 PR，新增 GLM-5.3-Flash 等模型支持，完整模型列表可查阅 [cookbook](https://docs.sglang.io/cookbook)。  
  *注：源文本中版本发布信息有截断，完整变更日志请前往 [发布页面](https://github.com/sgl-project/sglang/releases/tag/v0.5.20) 核实。*
- 本次抽样的 issue/PR 中未标记正式破坏性变更；非 GPU 进程 Rust 迁移 RFC（[#23206](https://github.com/sgl-project/sglang/issues/23206)）仍处于设计阶段，暂无即将发生的 API 破坏性改动。

## 3. 新模型与硬件支持
| 类别 | 详情 | 链接 |
|---|---|---|
| 新模型 | v0.5.20 新增 GLM-5.3-Flash（自回归模型）支持 | [Release notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.20) |
| 新硬件路线图 | 平头哥 PPU（ZW810/ZW810E/ZW-M890P）上游合入计划已公示 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| 模型适配跟踪 | SenseNova-U1 / U1.5 功能与性能支持跟踪 issue 已启动 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| 扩散大模型服务路线图 | Block-diffusion 服务兼容性工作已启动 | [#39499](https://github.com/sgl-project/sglang/issues/39499) |

## 4. 性能优化
- **DP 负载均衡**：提出全新 `consistent_hash` DP 调度器，支持可选的负载感知溢出与重绑定功能，默认关闭以保证向后兼容性。[#40473](https://github.com/sgl-project/sglang/pull/40473)
- **引擎快速恢复**：权重缓存守护进程（Weight Cache Daemon）第一阶段已落地，在 Qwen3-235B FP8 场景下将权重加载时间从 306–327s 压缩至 <1s；后续路线图仍在推进中。[#33522](https://github.com/sgl-project/sglang/issues/33522)
- **ROCm 内核优化**：
  - 移除了 JIT 分组 topk MoE 路由路径中不必要的 bf16→fp32 类型转换。[#39775](https://github.com/sgl-project/sglang/pull/39775)
  - 在 gfx950 平台上将逐 token FP8 激活量化融合到 RMSNorm 中，支持逐通道量化注意力。[#34502](https://github.com/sgl-project/sglang/pull/34502)
  - 在 gfx950 平台上将 GLM-5.2 DSA 索引器的解码路径从每个索引器 12 个内核缩减至 4 个。[#38583](https://github.com/sgl-project/sglang/pull/38583)
  - 集成 Aiter MegaMoEv2 后端，支持 AMD 平台上的 DeepSeek-V4。[#35619](https://github.com/sgl-project/sglang/pull/35619)
- **扩散模型优化**：
  - 在 Hopper 平台上为 FLUX.2 Klein 融合了打包 QK RMSNorm + RoPE，性能目标为在 H200 上实现 1024×1024 BF16 50 步推理。[#40490](https://github.com/sgl-project/sglang/pull/40490)
  - 提出 Qwen-Image 2.1 前缀 KV 在单 prompt 多输出场景下复用的方案，以降低编码开销。[#40489](https://github.com/sgl-project/sglang/pull/40489)
  - Qwen-Image 2.1 的 VAE 与计算图预热内存优化已合入。[#40481](https://github.com/sgl-project/sglang/pull/40481)
- **投机解码 + 流水线并行**：多项流水线并行投机解码优化正处于评审阶段，包括 DP 秩间预填充保留、重排序扩展微批启动等。[#40118](https://github.com/sgl-project/sglang/pull/40118) [#40499](https://github.com/sgl-project/sglang/pull/40499) [#39643](https://github.com/sgl-project/sglang/pull/39643)
- **性能回退说明**：`tiny_gemm` 统一路径导致 Blackwell 平台上 DeepSeek-R1 NVFP4 解码性能回退约 4%；目前仍在调查中，暂无回滚计划。[#38628](https://github.com/sgl-project/sglang/issues/38628)

## 5. 稳定性与性能回退问题
*按严重程度/评论活跃度排序*
1. **CUDA 核心转储跟踪（进行中）** — 持续分类 CI 自动收集的核心转储文件；共 319 条评论，最后更新于 2026-09-20。[#26340](https://github.com/sgl-project/sglang/issues/26340)
2. **Qwen3.8-Flash-Next-FP8 H20 TP8 崩溃** — 8 并发请求下 QSA 扩展前向过程中出现 CUDA 非法内存访问；可通过 `CUDA_LAUNCH_BLOCKING=1` 或 `--disable-overlap-schedule` 临时规避，根因尚未确认。[#37633](https://github.com/sgl-project/sglang/issues/37633)
3. **MXFP8FP4/W4A8 MegaMoE B300 崩溃** — 使用 sgl-deep-gemm 0.1.7 时出现 `CUDA_ERROR_ILLEGAL_ADDRESS`；问题仍在排查中。[#37559](https://github.com/sgl-project/sglang/issues/37559)
4. **GLM-5.2 FP4 + EAGLE 崩溃** — B200/B300 平台上，nextn 草稿 MoE 的 flashinfer_trtllm bf16 批量 GEMM 出现非法内存访问。[#30209](https://github.com/sgl-project/sglang/issues/30209)
5. **GLM-5 H100 部署健康检查失败** — v0.5.10 版本下 2×H100 节点的反序列化器超时；高优先级，问题仍开放。[#22511](https://github.com/sgl-project/sglang/issues/22511)
6. **修复进行中：DeepSeek 稀疏注意力 KV 计数器 UAF** — 对应 PR 可防止解码计算图中捕获的多 CTA KV 计数器缓冲区被提前释放。[#39175](https://github.com/sgl-project/sglang/pull/39175)
7. **Kimi-K3 DCP 即时模式崩溃修复** — 解决了因缺失 `extend_prefix_lens` 导致的 NoneType 崩溃问题。[#38991](https://github.com/sgl-project/sglang/pull/38991)

## 6. 对应用开发者的影响
- **引擎重启更快**：如果你在运行大型 FP8 模型（例如 Qwen3-235B 级别），权重缓存守护进程可将权重加载时间从数分钟压缩至亚秒级 — 建议在故障转移与快速扩缩容场景下评估使用。[#33522](https://github.com/sgl-project/sglang/issues/33522)
- **Blackwell/H20 上 FP4/MoE 的稳定性临时方案**：如果你在 H20/Blackwell 上部署 GLM-5.2 FP4 + EAGLE 或 Qwen3.8-Flash-Next，可能会遇到偶发的非法内存访问问题；可使用 `--disable-overlap-schedule` 或 `CUDA_LAUNCH_BLOCKING=1` 作为临时缓解措施，并跟踪对应 issue 获取修复进展。[#37633](https://github.com/sgl-project/sglang/issues/37633) [#30209](https://github.com/sgl-project/sglang/issues/30209)
- **扩散模型服务成本降低**：使用 Qwen-Image 2.1 且单 prompt 生成多张图片的用户， soon 可在多输出间共享前缀 KV，降低单图编码开销。[#40489](https://github.com/sgl-project/sglang/pull/40489)
- **多 GPU 负载均衡效果提升**：即将推出的一致性哈希 DP 调度器支持负载感知溢出，可降低不均衡工作负载（例如 prompt 长度差异极大的智能体流量）的尾延迟；可关注 PR #40473 的合入状态。[#40473](https://github.com/sgl-project/sglang/pull/40473)
- **ROCm 用户获得显著的 MoE/注意力加速**：如果你在 MI355X/gfx950 上运行 GLM-5.2 或 DeepSeek-V4，待融合内核 PR 合入后将获得明显的延迟降低 — 建议在合入后规划升级。[#38583](https://github.com/sgl-project/sglang/pull/38583) [#35619](https://github.com/sgl-project/sglang/pull/35619)

---

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周摘要 | 2026-09-21

## 1. 过去7天亮点
本周 llama.cpp 更新针对 CUDA、Metal 和 Hexagon 后端的 Gemma 4 与 Qwen 系列模型实现了定向性能提升，同时通过修复 Metal 内核扩展了 Kimi-K3 的兼容性。多 GPU 扩展性（NCCL 多节点张量并行、SYCL 后端现代化）、大模型 MoE 流式推理，以及槽位保存/恢复时的持久化上下文检查点等长期需求的服务器功能正在积极开发中。

## 2. 版本发布与破坏性变更
本周发布了 10 个增量构建版本（b11054 → b11065），全部向后兼容，无 API 或配置层面的破坏性变更：
- 发布说明/认证：[ggml-org/llama.cpp Releases](https://github.com/ggml-org/llama.cpp/releases)
- 下游库使用者可在 Issue [#9289](https://github.com/ggml-org/llama.cpp/issues/9289) 中持续跟踪 `libllama` API 的持久化变更记录。

## 3. 新模型与硬件支持
### 模型兼容性
- **Kimi-K3 (Metal)：** 修复了 `dsv4_hc_pre` Metal 内核中硬编码的注意力头数量问题，解决了 Kimi-K3 分块检查点头配置导致的 CPU 回退问题 ([b11064](https://github.com/ggml-org/llama.cpp/releases/tag/b11064), PR [#29169](https://github.com/ggml-org/llama.cpp/pull/29169))
- **Ling 3.0 (Bailing V3)：** 新增专用对话模板解析器，用于处理 `</think>` 标签前预先开启的思考块和工具调用 ([b11057](https://github.com/ggml-org/llama.cpp/releases/tag/b11057), PR [#28682](https://github.com/ggml-org/llama.cpp/pull/28682))
- **Gemma 4 提示处理优化（进行中）：** 该 PR 移除未使用的计算图节点并降低提示处理开销，缩小与 mlx-lm 的性能差距 ([PR #29189](https://github.com/ggml-org/llama.cpp/pull/29189))

### 后端/硬件支持
- **Hexagon 后端：** 启用了 `I32 GET_ROWS`、`GEGLU_QUICK` 和 `TOP_K` 算子 ([b11054](https://github.com/ggml-org/llama.cpp/releases/tag/b11054) / [b11055](https://github.com/ggml-org/llama.cpp/releases/tag/b11055) / [b11056](https://github.com/ggml-org/llama.cpp/releases/tag/b11056), PRs [#29113](https://github.com/ggml-org/llama.cpp/pull/29113) / [#29114](https://github.com/ggml-org/llama.cpp/pull/29114) / [#29116](https://github.com/ggml-org/llama.cpp/pull/29116))
- **XDNA 后端（功能需求，高需求）：** 社区提出支持 AMD XDNA 加速器的需求，获 35 个👍，讨论活跃 ([Issue #21725](https://github.com/ggml-org/llama.cpp/issues/21725))

### 正确性与工具链
- **PEG AST UTF-8 处理：** 修复了无效 UTF-8 序列解析问题，按照 Unicode 规范返回最大有效子部分 ([b11063](https://github.com/ggml-org/llama.cpp/releases/tag/b11063), PR [#29161](https://github.com/ggml-org/llama.cpp/pull/29161))
- **Mamba 修复：** 解决了时间步投影输入连续性 bug，跳过了归一化后多余的拷贝操作 ([b11060](https://github.com/ggml-org/llama.cpp/releases/tag/b11060), PR [#28832](https://github.com/ggml-org/llama.cpp/pull/28832))

## 4. 性能与优化
### 已落地的优化
- **Gemma 4 的 CUDA FlashAttention：** 针对 Ampere+ 架构 GPU（头尺寸 256/512，批大小 1–4）优化了 FA 内核，批大小为 1 时优先使用更大的 CUDA 块和 mma 内核，为小尺寸 Gemma 4 模型带来了小幅速度提升 ([b11065](https://github.com/ggml-org/llama.cpp/releases/tag/b11065), PR [#29152](https://github.com/ggml-org/llama.cpp/pull/29152))
- **Qwen4 的 CUDA 稀疏 FA：** 为 Qwen 4 模型启用了稀疏 flash attention 支持 ([b11062](https://github.com/ggml-org/llama.cpp/releases/tag/b11062), PR [#28770](https://github.com/ggml-org/llama.cpp/pull/28770))
- **Metal FWHT F16 支持：** 为 Metal 快速 Walsh-Hadamard 变换内核新增原生 F16 输入支持，消除了 F32 转换开销 ([b11059](https://github.com/ggml-org/llama.cpp/releases/tag/b11059), PR [#29094](https://github.com/ggml-org/llama.cpp/pull/29094))

### 进行中的优化
- **Qwen 3.8 MoE 流式推理 + GPU 预填充（Vulkan/HIP）：** 新增 `--load-mode streaming` + `--gpu-prefill` 选项，可在 24GB 显存（搭配 24GB NVMe 交换空间）上运行 85GB+ 的 Qwen3.8 MoE Q6_K 模型，支持 96k 上下文 ([PR #29191](https://github.com/ggml-org/llama.cpp/pull/29191))
- **NCCL 多节点张量并行（CUDA）：** 新增通过 NCCL 实现的跨进程集合通信后端接口，适用于多节点 RPC 服务器部署 ([PR #28967](https://github.com/ggml-org/llama.cpp/pull/28967))
- **SYCL 后端现代化（已完成，已关闭）：** 移除了旧版 dpct/SYCLomatic 模拟层，切换到原生 SYCL 2020 乱序队列，通过 `sycl::event` 依赖降低开销 ([PR #29190](https://github.com/ggml-org/llama.cpp/pull/29190))
- **Vulkan int8 协作矩阵乘法（AMD RDNA3/RDNA4）：** 新增 `cm1` 着色器，支持 q4_0/q5_0/q8_0/q3_k–q6_k/mxfp4/nvfp4/iq4_nl 量化，在 Strix Halo 上提升了提示处理速度 ([PR #27952](https://github.com/ggml-org/llama.cpp/pull/27952))
- **Intel Xe Vulkan flash attention：** 针对 Xe-LPG Plus/Xe2/Xe3 的 FA 优化内核（Xe 优化系列的 2/3 部分） ([PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406))
- **稠密模型 `--fit` 优化：** 优先将影响较低的层卸载到 CPU，而非采用 `-ngl` 式的整层移动方式，提升显存有限时稠密模型的吞吐量 ([PR #29027](https://github.com/ggml-org/llama.cpp/pull/29027))

## 5. 稳定性与回归问题
按严重程度排序（影响范围 + 评论活跃度）：
1. **[严重] 服务器后续请求时全量提示重处理（SWA/循环内存错误）：** 长期存在的未解决 bug（52 条评论、30 个👍），会导致 KV 缓存复用失败，被迫执行全量预填充。PR [#26004](https://github.com/ggml-org/llama.cpp/pull/26004) 正在修复该问题（实现槽位保存/恢复时的上下文检查点保留） ([Issue #21831](https://github.com/ggml-org/llama.cpp/issues/21831))
2. **[高] Vulkan 性能回归（近期构建版本）：** 45 条评论反馈 RX 6600 搭配 Qwen3.5-9B 时吞吐量下降，暂无相关修复 PR ([Issue #24066](https://github.com/ggml-org/llama.cpp/issues/24066))
3. **[高] SYCL 双 GPU 崩溃与加载失败：** 多个未解决 issue，包括张量切分模式下的 `DEVICE_LOST` 错误 ([#27198](https://github.com/ggml-org/llama.cpp/issues/27198))、双 Arc Pro B60 加载卡住 ([#27547](https://github.com/ggml-org/llama.cpp/issues/27547))，以及 Arc B50+A770 混合配置崩溃 ([#27888](https://github.com/ggml-org/llama.cpp/issues/27888))
4. **[高] AMD Strix Halo ROCm 性能回归：** 由于输入层在 Strix Halo 上回退到 CPU，导致 30% 的 CPU 开销和 GPU 利用率下降 ([Issue #25700](https://github.com/ggml-org/llama.cpp/issues/25700))
5. **[中] 基于磁盘的上下文检查点卸载（功能需求，55 个👍）：** 投票数最高的未解决需求，希望通过 `--cache-disk` 将 KV 缓存卸载到磁盘，适用于长上下文部署场景 ([Issue #20697](https://github.com/ggml-org/llama.cpp/issues/20697))
6. **[中] 推测解码正确性偏差（量化目标模型）：** 在量化目标模型上使用贪心采样时，草稿模型推测解码的输出与非推测运行结果不一致；ngram 推测不受影响 ([Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618))
7. **[中] SYCL `--fit` 内存统计过量：** 在 Arc B70 上使用 `--fit` 时，由于使用量统计不完整导致运行时内存溢出 ([Issue #27595](https://github.com/ggml-org/llama.cpp/issues/27595))
8. **[本周已解决] SYCL xe2 段错误、Docker SemVer 标签缺失和 llama-ui 推理菜单 bug：** 均已通过近期补丁关闭。

## 6. 对应用开发者的意义
- **Gemma 4 / Qwen4 CUDA 部署：** 升级到 b11065+ 构建版本可获得显著的提示处理和解码速度提升，无需修改代码。
- **长上下文 / 混合循环模型服务：** 关注 PR [#26004](https://github.com/ggml-org/llama.cpp/pull/26004) 中的槽位保存/恢复检查点支持——该功能将消除 SWA/循环模型的全量预填充开销，直接降低会话续用场景的延迟。
- **显存有限的大型 MoE 部署：** 即将推出的 Qwen 3.8 流式推理 + GPU 预填充功能（PR [#29191](https://github.com/ggml-org/llama.cpp/pull/29191)）将支持在 24GB GPU 上运行 80GB+ 的 MoE 模型用于原型开发，非实时工作负载下延迟可接受。
- **SYCL/Intel Arc 部署：** 目前避免使用多 GPU 张量切分模式，因为存在未解决的崩溃 bug；等待类 NCCL 集合通信支持和待发布的 SYCL 内存统计修复。
- **Metal / Apple Silicon 部署：** Ling 3.0 和 Kimi-K3 兼容性现已达到生产可用级别，FWHT F16 优化为相关模型架构带来了延迟小幅降低。
- **下游工具链：** 新增的 `raw` 嵌入输出格式（PR [#16541](https://github.com/ggml-org/llama.cpp/pull/16541)）移除了 JSON 包装开销，简化了与向量数据库和脚本流水线的集成。

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 周刊 | 2026-09-21
*数据来源：github.com/ollama/ollama*

---

## 1. 近7天亮点
Ollama 发布了 v0.34.1、v0.34.2 和 v0.34.3-rc1 版本，推出了首次运行引导流程，稳定了 MLX safetensors 模型创建功能，并在 `/api/show` 接口中新增了 `thinking` 能力清单。社区关注焦点仍集中在静态依赖的许可合规、扩展的 Snapdragon X Elite NPU/GPU 支持，以及工具调用、推理输出和 ROCm 跨请求状态泄漏的正确性修复上。

---

## 2. 版本发布与破坏性变更
### v0.34.3-rc1
- **功能**：`GET /api/show` 现在会公开每个模型的思考控制选项和默认值（例如 `values: ["low", "high", "max"]`，`default: "max"`）。
  ```
  curl http://localhost:11434/api/show -d '{"model": "glm-5.3-flash:cloud"}'
  ```
- **注意**：上游数据中的版本更新日志被截断，升级前请核实完整说明。

### v0.34.2
- **功能**：启动 `ollama` 时的首次运行设置向导，提供登录/仅本地模式选项；设置状态与 macOS/Windows 桌面端应用同步。
- **功能**：`ollama://apps` URL 协议可在 macOS/Windows 上直接打开桌面应用的 Apps 页面。
- **修复**：解决了内存占用过高的问题（细节在上游数据中被截断）。

### v0.34.1
- **破坏性变更**：`ollama create` 中的 MLX safetensors 支持不再是实验性功能；从 safetensors 创建 GGUF 模型现在需要外部 llama.cpp 工具来进行转换和量化。
- **改进**：增强了 Apple Silicon 上的 MLX 内存处理能力。
- **修复**：将重复令牌失控检测的阈值提高到连续100个重复令牌，以减少误报。

---

## 3. 新模型与硬件支持
### 讨论中 / 已请求
- **Snapdragon X Elite NPU + GPU（Windows ARM）** —— 关于在高通 Copilot+ PC 上实现加速的功能请求；目前 NPU 未被使用。[Issue #5360](https://github.com/ollama/ollama/issues/5360)
- **Mistral Small 4** —— 请求将新发布的开源权重模型加入 Ollama 官方模型库。[Issue #15142](https://github.com/ollama/ollama/issues/15142)
- **Prism 三元 GGUF（PQ2_0 / PTQ1_0）** —— 因不支持的张量大小溢出导致导入失败；这是三元量化格式支持的跟踪 issue。[Issue #18521](https://github.com/ollama/ollama/issues/18521)

### 进行中（PR）
- **GLiNER Small v2.1 (MLX)** —— 在 MLX 运行器上通过 `POST /api/extract` 实现原生实体抽取。[PR #18535](https://github.com/ollama/ollama/pull/18535)
- **Qwen 3.5 MTP FastMTP 草稿词表裁剪（d2t 映射）** —— 支持紧凑的多令牌预测草稿词表。[Issue #18546](https://github.com/ollama/ollama/issues/18546)
- **Docker 中的 NVIDIA Vulkan** —— Docker 镜像在 `NVIDIA_DRIVER_CAPABILITIES` 中添加 `graphics` 以启用 Vulkan 后端。[PR #18562](https://github.com/ollama/ollama/pull/18562)

---

## 4. 性能与优化
### 已落地
- Apple Silicon 上的 MLX 内存处理改进（v0.34.1）。
- 通过将阈值设为100个令牌，减少了重复令牌检测的误报（v0.34.1）。

### 进行中
- **MLX 门控增量预填充内核** —— 融合内核解除了预填充长度窗口的11令牌限制；在 Qwen3.8-27B 上，可从展开图中卸载64层中的48层。[PR #18550](https://github.com/ollama/ollama/pull/18550)
- **可配置的 MLX 前缀缓存换出预算** —— 通过限制 Metal 缓冲区增长，防止16GB Mac 系统在持续 MLX 负载下失去响应。[PR #18556](https://github.com/ollama/ollama/pull/18556)
- **更细粒度的多 GPU 内存分配控制** —— 该请求用于将 KV 缓存溢出定向到特定的低速 PCIe 显卡。[Issue #18525](https://github.com/ollama/ollama/issues/18525)
- **基于 HumanEval 的基准测试提示词** —— 用类代码提示词替代合成词表基准测试，以获得更真实的投机解码测量结果。[PR #17480](https://github.com/ollama/ollama/pull/17480)
- **Prometheus 指标接口** —— 设置 `OLLAMA_METRICS` 时提供 `/metrics` 接口，用于可观测性。[PR #18508](https://github.com/ollama/ollama/pull/18508)（替代方案：[PR #16998](https://github.com/ollama/ollama/pull/16998)）

---

## 5. 稳定性与回归问题
按严重程度/影响排序：
1. **[严重] ROCm 跨请求状态泄漏（qwen3.5 混合 GDN 模型）** —— 在预热的运行器上，较早提示的文本会出现在后续响应中；已向上游 llama.cpp#29092 反馈。影响 v0.32.14 和 v0.34.1 版本。[Issue #18528](https://github.com/ollama/ollama/issues/18528)
2. **[高] 许可合规：发布制品中缺少第三方声明** —— 静态链接的依赖项（如 llama.cpp）未在二进制发布版本中包含所需的 MIT 版权声明。277 赞，59 条评论。[Issue #3185](https://github.com/ollama/ollama/issues/3185)
3. **[高] 对 "tool" 角色消息的工具调用被拒绝** —— Ollama 拒绝在 llama.cpp 中正常工作的有效 tool 角色 payload，破坏了智能体工作流。[Issue #18509](https://github.com/ollama/ollama/issues/18509)
4. **[高] `/api/generate` 思考模式将推理内容泄漏到响应中** —— 在非流式请求中，Qwen 推理标签出现在 `response` 字段中，而 `thinking` 字段为空；`/api/chat` 工作正常。**已有修复 PR**：[PR #18561](https://github.com/ollama/ollama/pull/18561)。[Issue #18554](https://github.com/ollama/ollama/issues/18554)
5. **[中] MLX nvfp4 预填充卡顿** —— 在持续单槽负载下，请求偶尔会卡在 `processed=total-1` 状态，数分钟没有输出；仅能通过向运行器发送 SIGTERM 恢复。[Issue #18505](https://github.com/ollama/ollama/issues/18505)
6. **[中] 静默上下文截断** —— 当超出上下文窗口时，聊天历史和嵌入会被截断，且没有用户可见的提示；仅输出调试级别的日志。相关请求：显式截断检测 API。[Issue #14259](https://github.com/ollama/ollama/issues/14259)，[Issue #3839](https://github.com/ollama/ollama/issues/3839)
7. **[中] macOS GUI 在处理约6k+令牌的长文档时静默失败** —— 长输入处理失败时没有错误通知。[Issue #18368](https://github.com/ollama/ollama/issues/18368)
8. **[中] MTP 投机解码回归（Qwen3.8 27B，v0.34.2）** —— 报告称 v0.34.2 版本存在回归问题。[Issue #18541](https://github.com/ollama/ollama/issues/18541)
9. **[低] `typical_p` 参数现在被拒绝并返回 400** —— 破坏了始终发送 `typical_p: 1.0` 的现有客户端（例如 SillyTavern）。**已有修复 PR**（发出警告并忽略该参数，而非拒绝请求）：[PR #18551](https://github.com/ollama/ollama/pull/18551)。[Issue #18542](https://github.com/ollama/ollama/issues/18542)

---

## 6. 对应用开发者的影响
- **推理输出一致性**：如果你将 `/api/generate` 用于支持思考的模型，升级到 v0.34.3-rc1 或关注 [PR #18561](https://github.com/ollama/ollama/pull/18561)，即可避免手动从响应体中解析 `<think>` 标签。`/api/chat` 已能正确分离思考过程和输出内容。
- **工具调用兼容性**：发送 `tool` 角色消息的智能体可能会在某些模型系列中遇到拒绝 bug；请针对你的目标模型进行测试，并关注 [Issue #18509](https://github.com/ollama/ollama/issues/18509)。
- **上下文窗口边界情况**：如果输出完整性至关重要，请自行构建截断检测逻辑（例如跟踪输入令牌数）—— 目前 Ollama 会静默丢弃消息。
- **首次运行用户体验变更**：v0.34.2 及更高版本在首次启动时引入了登录/本地设置流程。对于无头/CI 部署，请确保预先配置为仅本地模式，以避免被交互式提示阻塞。
- **模型创建工作流变更**：对于从 safetensors 构建的 GGUF 模型，现在需要外部 llama.cpp 工具进行量化；只有 MLX safetensor 创建仍原生支持 `ollama create`（v0.34.1+）。
- **OpenAI 兼容性更新**：`/v1/chat/completions` 接口正在新增 `reasoning_content` 字段（[PR #18543](https://github.com/ollama/ollama/pull/18543)），提升了与 DeepSeek 风格客户端的即插即用兼容性。
- **可观测性**：Prometheus 指标支持正在开发中 —— 如果你大规模运行 Ollama，可以开始规划吞吐量、延迟和显存使用的监控仪表盘了。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周速递 | 2026-09-21
来源：[BerriAI/litellm](https://github.com/BerriAI/litellm)

---

## 1. 过去7天亮点
本周，LiteLLM 在供应链安全方面取得进展：所有新版本均已正式采用 Cosign 进行 Docker 镜像签名；同时启动核心基础设施转型，开始用基于 Rust 的令牌化方案替代原有 Python 依赖。稳定性方面，研发团队重点修复了速率限制 Bug、支出跟踪一致性问题，以及多厂商 Responses API 转换差异。目前项目有 400+ 活跃 Issue 和 500+ 待合并 PR，开发节奏较快。

---

## 2. 版本发布与破坏性变更
过去7天共发布5个新版本，所有版本均使用 Cosign 进行标准化 Docker 镜像签名（签名密钥见提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)）：
- **v1.101.0**（稳定版）：首个强制要求 Docker 镜像签名的稳定版本。[发布链接](https://github.com/BerriAI/litellm/releases/tag/v1.101.0)
- **v1.102.0-rc.2**：候选发布版，更新了签名流水线。[发布链接](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.2)
- **v1.103.0-dev.1 / v1.103.0-dev.2 / v1.103.0-rc.1**：预发布版本，包含进行中的 Rust 令牌器开发工作。

版本说明中未公布破坏性 API 变更。在受监管环境中运行 LiteLLM 的用户，应将 Cosign 签名验证纳入部署流水线进行校验。

---

## 3. 新模型与硬件支持
- **OpenRouter 定价与模型目录同步**：多个自动化 PR 更新了 10+ 款 OpenRouter 模型的定价和上下文窗口规格，包括修正 `llama-3.1-70b-instruct` 的最大令牌数，以及更新 DeepSeek 模型的限制参数。[PR #42179](https://github.com/BerriAI/litellm/pull/42179) | [PR #42178](https://github.com/BerriAI/litellm/pull/42178)
- **DeepSeek V4 推理强度参数修复（进行中）**：`reasoning_effort` 参数（"high"/"max"）目前在转换过程中会被丢弃，正在开发修复方案，以将该参数原生透传给 DeepSeek API。[Issue #27439](https://github.com/BerriAI/litellm/issues/27439)
- **Fal.ai 视频模型支持（已完成）**：现已支持 Sora 2、Google Veo 3.1 及其他 fal.ai 视频模型。[Issue #16073](https://github.com/BerriAI/litellm/issues/16073)

本周未新增硬件后端或量化格式支持。

---

## 4. 性能与优化
- **Rust 令牌器迁移（进行中）**：将进行核心重构，用 Rust 实现替换 Python 令牌器依赖，以减少依赖体积并提升令牌化吞吐量。兼容包装器可保留原有编码行为。[PR #42174](https://github.com/BerriAI/litellm/pull/42174)
- **支出跟踪性能选项（已提议）**：新增 `disable_entity_spend_updates` 标志位，启用后将抑制每次请求对实体计数器（密钥/用户/团队表）的 UPDATE 操作，同时保留原始支出日志的 INSERT 操作，从而降低高请求速率下的数据库写入负载。[PR #31866](https://github.com/BerriAI/litellm/pull/31866)
- **可变默认参数清理（进行中）**：修复代码库中 180 处 B006（flake8-bugbear）违规，消除一类可能导致请求统计错误的隐性状态泄漏 Bug。[PR #30940](https://github.com/BerriAI/litellm/pull/30940)

---

## 5. 稳定性与回归问题
按用户影响程度排序（严重程度 + 评论数）：
1. **高优先级：虚拟密钥 TPM 限制失效**  
   虚拟密钥的 TPM 速率限制未按配置生效——这一曾修复的回归问题在新版本中再次出现。目前尚无关联修复 PR。[Issue #24677](https://github.com/BerriAI/litellm/issues/24677)
2. **高优先级：Prisma 重连失败导致代理不稳定**  
   Prisma 查询引擎周期性崩溃，会使 LiteLLM 代理 Pod 进入失败状态且无法自动恢复。目前正在积极调试。[Issue #26886](https://github.com/BerriAI/litellm/issues/26886)
3. **高优先级：按团队按模型速率限制被重复计数（v3 限流器）**  
   由于 v3 限流器存在重复计数问题，`model_per_team` 的 RPM/TPM 限制实际生效值约为配置值的 50%。已提供复现方法和根本原因分析。[Issue #34140](https://github.com/BerriAI/litellm/issues/34140)
4. **中优先级：虚拟密钥 BudgetExceededError 使用过期支出数据**  
   由于支出跟踪存在缓存/数据过期问题，即使 `/key/info` 显示支出低于配置限额，请求仍会因预算错误被拒绝。关联 Issue #27639。[Issue #27735](https://github.com/BerriAI/litellm/issues/27735)
5. **中优先级：Responses→Chat 桥接在多轮回放中丢失工具调用**  
   使用 Responses API 桥接时，原生工具调用会在几轮对话后消失，且内部推理内容会以可见的助手文本形式泄漏。[Issue #42005](https://github.com/BerriAI/litellm/issues/42005) | 修复进行中：[PR #42177](https://github.com/BerriAI/litellm/pull/42177)
6. **中优先级：MCP HTTP 代理丢失 `mcp-session-id` 头**  
   有状态的上游 MCP 服务器无法加载工具，因为初始化时返回的会话 ID 未在后续请求中转发。[Issue #25128](https://github.com/BerriAI/litellm/issues/25128)
7. **低优先级：主密钥错误时的错误提示不正确**  
   主密钥无效的请求会返回误导性错误信息，而非明确的 401/403 状态码。截至 2026-09-21 仍处于活跃状态。[Issue #12273](https://github.com/BerriAI/litellm/issues/12273)

---

## 6. 对应用开发者的影响
- **安全加固**：若你在生产环境运行 LiteLLM，建议为 Docker 镜像启用 Cosign 签名验证，以防范供应链攻击——所有新版本（稳定版和预发布版）现已均支持签名。
- **速率限制可靠性注意事项**：在 v3 限流器重复计数和支出数据过期问题修复前，请勿依赖虚拟密钥 TPM 限制和按团队按模型限制进行严格的配额管控；建议将上游厂商的限制作为兜底方案。
- **Agent 工作流使用 Responses API 需谨慎**：如果你在工具调用型 Agent 中使用 Responses→Chat 桥接，请仔细测试多轮对话场景——工具调用丢失和推理内容泄漏可能会破坏 Agent 状态机。可关注 PR #42177 跟进修复进展。
- **提前准备 Rust 令牌器迁移**：如果你使用自定义令牌器选项，或依赖 Python 令牌器栈的行为特性，建议针对 v1.103.0-dev 预发布版本进行测试，以便提前发现兼容性问题。
- **Prisma 稳定性监控**：如果你运行带持久化数据库后端的 LiteLLM 代理，建议添加存活检测机制，以识别 Prisma 引擎崩溃并重启 Pod，因为目前自动重连功能存在故障。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周资讯 | 2026-09-21
---
## 1. 过去 7 天亮点
Unsloth 发布了两个 beta 版本（v0.1.810 和 v0.1.811），进一步扩展跨平台支持：新增 AMD RDNA1/2 架构加速、提供 Windows ARM64 CUDA 二进制文件、推出重构的多用户 Docker 镜像，同时针对 Qwen3.8-Flash-Next MTP 推理上线了关键的 2 倍提速热修复。团队还重点修复了 GRPO 训练正确性、Windows 内存管理、Studio UI/UX 相关的稳定性问题，并处理了用户反馈的 GGUF 推理吞吐量下降、AMD GPU 检测异常等回归问题。

---
## 2. 版本发布与破坏性变更
### v0.1.811-beta（最新版）
- 核心更新：正式推出 Docker + 多用户 + AMD 支持
- 关键热修复：Qwen3.8-Flash-Next MTP 性能补丁，推理速度提升 2 倍
- [发布页面](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta)

### v0.1.810-beta
- 首次推出支持 NVIDIA/AMD 双平台的新版 Docker 镜像
- 上线 Windows ARM64 CUDA 预编译二进制文件
- 优化训练、GRPO 和推理的基准性能
- [发布页面](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta)
- 官方 Docker 安装指南：[unsloth.ai/docs/get-started/install/docker](https://unsloth.ai/docs/get-started/install/docker)

---
## 3. 新模型与硬件支持
| 类别 | 详情 | 跟踪 |
|----------|---------|----------|
| AMD GPU | 核心代码与 Docker 镜像新增 RDNA1 + RDNA2 架构支持；AMD 后端新增 FP8/INT8 扩散模型支持 | [v0.1.810-beta 发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta) |
| Windows | 发布 ARM64 CUDA 预编译二进制文件 | [v0.1.810-beta 发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta) |
| 扩散模型 | 扩散模型训练/推理支持 FP8/INT8 量化 | [v0.1.811-beta 发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta) |
| 图像生成模型 | 新增专属文生图/图生图微调支持的功能需求（12 👍，社区最高票需求） | [Issue #3188](https://github.com/unslothai/unsloth/issues/3188) |
| Docker | 官方 Docker 镜像新增多用户账户支持 | [Issue #7999](https://github.com/unslothai/unsloth/issues/7999) |

---
## 4. 性能与优化
- **Qwen3.8-Flash-Next MTP 热修复**：该模型变体的推理速度提升 2 倍，已随 v0.1.811-beta 发布
  [发布链接](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta)
- **GRPO 评估损失修复（进行中）**：修复了评估损失被错误除以梯度累积步数，导致报告的评估指标人为偏低的 bug
  [PR #11337](https://github.com/unslothai/unsloth/pull/11337)
- **Hugging Face 数据集加载修复（进行中）**：解决 Studio 数据配置会加载全部分片而非仅用户选择的分片的问题，减少不必要的数据处理开销
  [PR #11294](https://github.com/unslothai/unsloth/pull/11294)
- **GPU 内核测试覆盖（进行中）**：为 geglu/swiglu/rms_layernorm 等 Triton 内核新增 GPU 测试套件，避免核心训练/推理路径出现性能退化
  [PR #9573](https://github.com/unslothai/unsloth/pull/9573)
- **Windows 显存溢出检测（进行中）**：防止 WDDM 内存管理器静默将显存分配溢出到主机内存——该行为会掩盖 OOM 状况并导致性能悄然下降
  [PR #11368](https://github.com/unslothai/unsloth/pull/11368)

---
## 5. 稳定性与回归问题
按严重程度排序：
1. **高：Qwen3.8-Flash-Next MTP 加载失败**
   - 问题：rebase 后因 `hc_head_norm` 维度不匹配，模型加载时异常终止
   - 状态：开放，正在积极讨论（13 条评论，2 👍）
   - 链接：[Issue #11143](https://github.com/unslothai/unsloth/issues/11143)
   - 部分修复：v0.1.811-beta 的 MTP 热修复解决了性能问题，加载 bug 仍在调查中

2. **高：v0.1.810-beta GGUF 推理吞吐量回归**
   - 问题：在相同硬件和配置下，更新到 v0.1.810 后 Studio 的 GGUF 推理速度明显变慢
   - 状态：开放，调查中（6 条评论，5 👍）
   - 链接：[Issue #11221](https://github.com/unslothai/unsloth/issues/11221)

3. **中：Unsloth Desktop 无法识别 AMD RX 5700XT**
   - 问题：尽管已推出 RDNA1/2 支持，桌面端应用仍无法识别这款 RDNA2 架构 GPU
   - 状态：开放（11 条评论）
   - 链接：[Issue #8529](https://github.com/unslothai/unsloth/issues/8529)

4. **中：Windows 安装包非致命错误**
   - 问题：安装过程中会抛出不影响安装完成但会误导用户的错误
   - 状态：已关闭，修复将在后续版本发布
   - 链接：[Issue #9804](https://github.com/unslothai/unsloth/issues/9804)

5. **中：Docker 模型持久化文档缺失**
   - 问题：官方 Docker 说明未提及如果不额外挂载卷，下载的模型会在容器重启后丢失
   - 状态：已关闭，文档修复已合并
   - 链接：[Issue #10923](https://github.com/unslothai/unsloth/issues/10923)

---
## 6. 对应用开发者的影响
1. **跨平台部署灵活性提升**：新版 Docker 镜像支持多用户且兼容 NVIDIA/AMD 双平台，简化了硬件异构团队的自托管 Unsloth 部署流程。请务必挂载持久化卷用于模型缓存，避免重复下载（参考 #10923）。
2. **Qwen3.8-Flash-Next 用户**：建议升级到 v0.1.811-beta 以获取 2 倍 MTP 推理提速，但请注意加载时维度不匹配的 bug（#11143）仍在修复中——请在预发布环境充分测试模型加载。
3. **GRPO 训练用户**：如果你依赖评估损失进行模型选型，请等待 PR #11337 合并——当前评估损失指标的数值会偏低，偏差倍数等于你的梯度累积步数。
4. **Windows/ARM64 和 AMD 用户**：新平台支持目前处于 beta 阶段，可能会遇到 GPU 检测异常（#8529）、显存静默溢出（#11368）等边缘问题，相关修复正在推进中。
5. **Studio 高级用户**：即将推出的 UI 改进（侧边栏拖拽排序、工具调用折叠、扩展附件支持）将提升工作流效率，同时 Windows 端的 MXC 沙箱机制将增强不可信代码执行的安全性。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*