# AI 基础设施周报 2026-10-26

> 生成时间: 2026-10-26 01:05 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# Cross-Project AI Infrastructure Weekly Report (2026-10-26)

---

## 1. Ecosystem Overview
The past 7 days saw concentrated development across the full LLM infrastructure stack, with production-grade serving engines, local runtimes, gateways, and fine-tuning frameworks all advancing support for 2026’s frontier model lineup. A critical supply chain compromise in LiteLLM dominated security headlines, while teams converged on optimizations for Blackwel GPUs, MoE architectures, and disaggregated prefill-decode workflows. Local-focused projects expanded hardware support for Apple Silicon and custom accelerators, and almost all frameworks are racing to add day-0 support for newly released LLMs and VLMs. Stability remediation remains a top priority for production deployments, with high-severity crash and deadlock bugs logged across every major serving engine.

---

## 2. Activity Comparison
| Project       | Open Bugs/Issues Tracked | Open PRs (In Review) | Release Status |
|---------------|---------------------------|-----------------------|----------------|
| vLLM          | 12+ (3 high-severity core stability bugs) | 10+ | No new stable release; active PRs targeting next minor launch |
| SGLang        | 10+ (2 high-severity crash regressions) | 5+ | v0.5.22 major release shipped (950 merged PRs, 245 contributors) |
| llama.cpp     | 7+ (2 high-severity multi-GPU MTP bugs) | 8+ | 11 consecutive stable patch releases (b11879–b11889) shipped |
| Ollama       | 11+ (1 critical cloud outage, 3 high-severity runtime bugs) | 6+ | 4 minor releases (v0.40.8–v0.40.11) shipped |
| LiteLLM       | 15+ (1 critical supply chain compromise, 7 high-severity billing/governance bugs) | 7+ | 12 patch releases shipped (v1.103.8–v1.106.4) to remediate security issues |
| Unsloth       | 9+ (2 open stability regressions) | 8+ | 2 beta releases (v0.1.909-beta, v0.1.910-beta) shipped |

---

## 3. Model Support Race
**New shipped support:**
- SGLang leads with Day-0 production-ready support for Clef / Clef Flash (LLM/VLM), PPLX-Decider v1/v1.1 (LLM/VLM), plus preliminary CPU inference for Grok-2.
- Unsloth follows with beta support for Recursive Flint, MOSS-Image, NVIDIA Nemotron Bolt 4B, DeepSeek-V4.1-Flash-1017, and FLUX-3 Image Klein.
- Ollama shipped library support for Nemotron 3.5 Bolt E4B and Recursive Flint (multi-platform macOS/Linux/Windows).
- vLLM has open PRs for Kimi K2.5/K2.6 quantization, DeepSeek-V4.1-Flash deployment presets, and MOSS-Audio multimodal fixes.

**In-progress upcoming support:**
- llama.cpp is working on ByteDance looped LM (Ouro) family and GigaChat 3.5 432B MoE conversion pipelines.
- LiteLLM is adding OpenAI-compatible Sideren and Decision Models as custom provider integrations.

**Front runner:** SGLang has the broadest Day-0 production model support for new frontier releases, while vLLM and llama.cpp focus on quantization and hardware-specific tuning for existing models.

---

## 4. Performance Frontier
Optimization efforts are concentrated in four high-impact areas:
1. **MoE kernel tuning**: vLLM landed a 48% decode throughput gain for batch-invariant fused MoE workloads on Blackwell GPUs; SGLang is optimizing DeepSeek V4.1 prefill buffers; llama.cpp added fused FFN/GLU matmul kernels for Hopper.
2. **KV cache & disaggregated serving**: vLLM improved Mooncake KV transfer bandwidth; SGLang’s weight cache daemon cut quantized model load time from 300s+ to <1s; Unsloth added KV-cache preemption for shared multi-tenant chat workloads.
3. **Speculative decoding**: SGLang is optimizing beam search overhead and adaptive speculative decoding; vLLM updated its benchmarking suite to include MTP/EAGLE drafters.
4. **Memory offload**: Unsloth added MLX MoE offloading beyond Mac system RAM; Ollama improved multi-GPU scheduling to prevent spurious VRAM evictions; llama.cpp optimized Vulkan/SYCL memory allocation for MoE workloads.

Quantization work is secondary this cycle, with most projects focused on kernel and scheduling efficiency rather than new quantization formats.

---

## 5. Layer Positioning
| Layer Category       | Projects | Core Differentiator |
|----------------------|----------|----------------------|
| **Production Serving Engines** | vLLM, SGLang | Optimized for multi-GPU, multi-tenant data center deployments; vLLM leads custom hardware (GB10, ROCm, RDMA) support, SGLang leads Day-0 model cookbook releases |
| **Local User Runtimes** | llama.cpp, Ollama | Target edge/consumer hardware (Apple Silicon, integrated GPUs, Windows/macOS desktops); llama.cpp prioritizes broad backend compatibility, Ollama prioritizes user-friendly one-click model deployment |
| **LLM Gateway/Proxy** | LiteLLM | Abstraction layer for cost governance, budget enforcement, and multi-provider routing; no kernel-level performance optimizations this cycle |
| **Fine-Tuning/Training Frameworks** | Unsloth | End-to-end optimized for parameter-efficient fine-tuning, with beta support for FSDP2 multi-GPU training and OpenAI-compatible fine-tuning APIs |

---

## 6. Trend Signals & Developer Guidance
1. **Supply chain risk is now a top-tier concern**: The LiteLLM v1.107.0 credential-stealing incident means teams must pin digest-signed images, avoid floating `latest` tags, and rotate credentials immediately if vulnerable versions are detected.
2. **Blackwell GPU optimization is table stakes**: Every major serving engine is now prioritizing Blackwell (B200/GB300) kernel tuning; teams running on next-gen NVIDIA hardware should track vLLM’s MoE tuning PR #63627 for 48% decode throughput gains.
3. **PD disaggregation is approaching production default**: SGLang and vLLM are both advancing prefill-decode split serving as the recommended deployment pattern for large MoE models; multi-tenant scale teams should monitor these roadmaps for Q4 2026 launch timelines.
4. **Local model capabilities are expanding rapidly**: macOS-native speech generation (Ollama) and MoE models larger than system RAM (Unsloth/llama.cpp) are unlocking local agentic and voice use cases, but cloud runtime reliability issues mean production teams should prioritize local deployments for now.
5. **GLM-5.3-Flash has widespread stability issues**: Crashes, memory access errors, and output degeneration are logged across vLLM, SGLang, and Ollama; teams relying on this model should apply workarounds (triton-only backends, limited parallel tools) until upstream fixes land.

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周动态（2026-10-26）

## 近 7 日重点进展
核心团队完成了针对 Blackwell GPU 的专项性能调优，使 batch-invariant 融合 MoE 工作负载的解码吞吐量提升 48%；同时持续完善跨 AMD ROCm、NVIDIA 以及 GB10 等新兴定制硬件的分离式服务工作流支持。稳定性方面，多项前端与 KV 连接器边缘场景修复正在评审中，解决的问题包括静默丢弃 DP 秩、多模态前缀预热失败、P2P 卸载资源泄漏。当前重要 roadmap 方向包括推进 Rust 前端功能对齐生产级 Python API 服务器，以及继续在 legacy 与下一代 GPU 架构上解锁 DeepSeek V4 与最新 Kimi 模型的支持。

## 版本发布与破坏性变更
近 7 日未发布 vLLM 新的稳定版本。

## 新增模型与硬件支持
- **Kimi K2.5/K2.6 量化支持**：开放的 PR #63097 为量化版 Kimi-K2.6 检查点增加 q/k/v 缩放加载，为 compressed-tensors KV 缓存量化映射嵌套 MLA 注意力缩放名称，且未改动通用缩放映射器逻辑。
- **DeepSeek-V4.1-Flash 部署预设**：开放的 PR #63560 将 InferenceX AgentX 通道配置移入官方调优的 vLLM recipe 预设，为生产部署标准化并发、构建器与容器镜像选型。
- **MoRI EP V2 专家并行后端**：开放的 PR #61361 新增 `--all2all-backend mori` 选项，在支持的 RDMA 对齐 GPU 集群上启用 MoRI EPv2 对称内存窗口调度，不支持时回退到 EPv1。
- **MOSS-Audio 多模态修复**：开放的 PR #63629 修复了 MOSS-Audio 模型 runner 在非首个流水线阶段的 meta-device 初始化失败问题，消除了虚拟设备上 mel 维度计算中的 `.item()` 调用。

## 性能与优化
- **Blackwell 融合 MoE 调优（解码吞吐量 +48%）**：开放的 PR #63627 修复了 batch-invariant MoE 执行中硬编码的 Triton kernel 配置，在 Blackwell 硬件上启用 `VLLM_BATCH_INVARIANT=1` 时，实测解码吞吐量提升 48%。
- **Mooncake KV 传输带宽优化**：开放的 PR #63142 对降序排列的 block ID 进行合并，减少 Mooncake transfer engine 的描述符数量，降低分离式 KV 缓存卸载工作负载的单次传输开销。
- **GB10 权重加载优化**：开放的 issue #58726 跟踪性能优化工作，旨在消除 NVIDIA GB10（DGX Spark）硬件上从 safetensors mmap 视图执行逐张量 H2D 拷贝的性能瓶颈，此前已在 ROCm 与 Ascend NPU 平台完成同类优化。
- **投机解码基准测试**：开放的 PR #63622 更新 `vllm bench forward`，将已配置的 MTP、EAGLE、DSpark、DFlash drafter 纳入计时运行，并提供可选的 `--exclude-drafter` 参数，用于仅测试目标模型性能。
- **AMD ROCm MI355X 优化**：开放的 issue #57149 与 #59575 跟踪 gfx950/MI355X 硬件上 Qwen3.8 2.4T 与 Qwen3.8-Flash-Next 模型的持续性能优化工作，计划通过堆叠式 PR 完成 MXFP4 MoE 与 GatedDeltaNet kernel 调优。

## 稳定性与回归问题
1. **高严重度**：
   - **高并发下 V1 引擎核心死锁**：开放的 bug #37729 报告，生产负载下启用 FP8 量化 + 前缀缓存运行 Qwen3.5 时会稳定触发死锁，已有 37 条评论证实多 GPU 部署场景均可复现。
   - **GLM-5.3-Flash CUDA 非法内存访问**：开放的 bug #54317 报告，在 4x B200 配置上运行官方 glm53-flash 容器镜像时，3 个不相关的 kernel（KDA linear attention、MHC TileLang、TRT-LLM 融合 MoE）反复触发崩溃。
   - **DeepSeek-V4-Pro 下 TP worker 挂起**：开放的 bug #41530 报告，使用 TP=8 与 MTP 投机解码运行 DeepSeek-V4-Pro 时，sample_tokens 阶段出现 RPC 超时，导致整个引擎死锁。
2. **中严重度（修复评审中）**：
   - **前端静默丢弃 DP 秩**：开放的 PR #62450 修复了 Responses API 请求未转发 `X-data-parallel-rank` 头的问题，该问题此前会导致网关在流式/非流式请求中丢失已选定的 DP 副本。
   - **多模态前缀预热失败**：开放的 PR #63543 修复了 `/v1/systemone` 端点的共享前缀预热问题，此前混合模型会丢弃多模态元数据（如图像输入），破坏前缀缓存复用。
   - **KV 卸载 P2P 资源泄漏**：开放的 PR #63628 在 P2P KV 卸载过程中描述符准备失败时，回滚半注册的 NIXL agent，防止残留注册状态导致后续传输失败。
   - **融合 MoE 共享内存崩溃**：开放的 PR #61931 为 float32 MoE 执行限制 Triton tile 大小与流水线级数，消除 Ada/SM80 硬件上的 `OutOfResources` 崩溃。
3. **低严重度（修复评审中）**：
   - **DSML 工具调用解析器缺陷**：开放的 PR #62259 修复了 DeepSeek V4.1 工具调用中截断/未闭合 DSML 参数的处理问题，新增增量式 DSML 参数流式输出，与生产聊天行为保持一致。

## 对应用开发者的意义
- 在 Blackwell GPU 上运行 MoE 模型的生产团队，可期待即将合并的 batch-invariant MoE 调优带来解码吞吐量的显著提升，建议关注 PR #63627，合并后即可直接获得性能收益。
- 使用 Mooncake 部署分离式服务的用户，将受益于 PR #63142 降低的 KV 传输开销；基于自定义 API 网关构建的开发者，应关注 DP 秩转发修复（PR #62450），避免副本被静默错误路由。
- 构建多模态应用、处理带图像输入请求的开发者，应测试前缀预热修复（PR #63543），恢复此前被破坏的视觉-语言混合模型部署的前缀缓存复用能力。
- 依赖 DeepSeek-V4 或最新 Kimi 模型的团队，可关注开放的硬件支持 issue（Ampere 对应 #50576，Blackwell SM120 对应 #59203），跟踪目标硬件上原生检查点支持的落地时间，无需依赖自定义补丁。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 周报：2026-10-26

## 1. 近七天核心亮点
SGLang 发布了 v0.5.22 版本，这是一个重要里程碑，由 245 位贡献者共同开发，合并了 950 个 PR，同时新增了对最新发布的 LLM 和 VLM 的支持。

当前的活跃开发主要聚焦于三个核心工程方向：预填充-解码（Prefill-Decode, PD）分离架构的路线规划、投机解码优化，以及针对不稳定 CI 流水线和生产崩溃回归问题的稳定性修复。

一组高优先级的修复工作正在推进中，包括多模态 HTTP 载荷限制、DeepSeek V4.1 AMD 内核兼容性，以及跨投机解码路径的采样一致性问题。

## 2. 版本发布与破坏性变更
- **v0.5.22 版本发布**：完成了周度重大版本更新，涵盖 950 个 PR 和 245 位贡献者，新增了 Clef 和 PPLX 模型家族的新模型手册参考。[链接](https://github.com/sgl-project/sglang/releases)
- **HTTP 载荷配置**：PR #46482 新增 `--max-payload-size` 服务器标志，用于配置 Uvicorn/Granian 的 HTTP 请求体大小限制，解决了大尺寸 base64 编码多模态输入的默认请求失败问题。这是一个非破坏性的可选配置新增项。[链接](https://github.com/sgl-project/sglang/pull/46482)

## 3. 新模型与硬件支持
- **v0.5.22 新增模型支持**：为 Clef / Clef Flash（LLM/VLM）和 PPLX-Decider v1/v1.1（LLM/VLM）提供了 Day-0 支持，并发布了部署指南手册。[链接](https://github.com/sgl-project/sglang/releases)
- **CPU 推理**：PR #43341 新增了在 Intel Xeon CPU 后端运行 Grok-2 模型的初步支持。[链接](https://github.com/sgl-project/sglang/pull/43341)
- **AMD ROCm 硬件支持**：PR #46236 修复了 AMD 数据中心 GPU 上 ROCm 10 的 V4.1 k-norm-rope 内核构建兼容性问题；PR #43465 为 AMD 硬件上的 DeepSeek-V4.1 新增了预填充上下文并行支持。[链接](https://github.com/sgl-project/sglang/pull/46236) [链接](https://github.com/sgl-project/sglang/pull/43465)
- **硬件路线图进展**：当前正在积极跟踪 Apple Silicon 支持（Issue #19137）、AMD 消费级 RDNA3/RDNA4 Radeon 支持（Issue #30599）以及 T-Head PPU/SAIL 加速器支持（Issue #37519）的进展。[链接](https://github.com/sgl-project/sglang/issues/19137) [链接](https://github.com/sgl-project/sglang/issues/30599) [链接](https://github.com/sgl-project/sglang/issues/37519)

## 4. 性能与优化
- **用于快速引擎恢复的权重缓存守护进程**：路线图 Issue #33522 报告称，第一阶段工作已完成，通过每 rank 的 CUDA IPC 服务，将 Qwen3-235B FP8 的量化后权重加载时间从 306-327 秒缩短至 1 秒以内。[链接](https://github.com/sgl-project/sglang/issues/33522)
- **投机解码优化**：Ngram 投机解码（Issue #21052）和面向混合智能体工作负载的自适应投机解码（Issue #23705）的两个并行路线图正在推进中；PR #46480 通过仅在最终 top-k beam 上延迟 token 实体化来优化 beam search，减少了不必要的分词开销。[链接](https://github.com/sgl-project/sglang/issues/21052) [链接](https://github.com/sgl-project/sglang/issues/23705) [链接](https://github.com/sgl-project/sglang/pull/46480)
- **扩散模型服务性能**：PR #46439 通过在主机拷贝前将输出帧量化为 uint8，优化了扩散视频推理，减少了视频生成工作负载的主机传输带宽开销。[链接](https://github.com/sgl-project/sglang/pull/46439)
- **DeepSeek V4 内核优化**：PR #46399 重构了 DeepSeek V4.1 的预填充图缓冲区，消除了预填充候选生成过程中不必要的表拷贝开销。[链接](https://github.com/sgl-project/sglang/pull/46399)

## 5. 稳定性与回归问题
- **投机解码服务器崩溃（高严重性）**：Issue #43412 报告称，在启用投机解码时，服务器在收到第一个非贪心请求时会被 SIGKILL，原因是捆绑的 cccl 与 pip 安装的 CUDA 13 工具包之间的 flashinfer verify-sampling 算子 JIT 编译冲突。贪心流量不受影响。[链接](https://github.com/sgl-project/sglang/issues/43412)
- **多节点 GB300 启动 OOM（高严重性）**：Issue #45345 报告称，在双节点 GB300 部署 Kimi-K3 时，若配置 32 个分词器工作进程并自动选择 CUDA VMM 多模态传输，在处理任何客户端请求前就会出现启动 OOM 失败。[链接](https://github.com/sgl-project/sglang/issues/45345)
- **GLM-5.3-Flash 生产回归问题**：有两个已开放的 bug 报告：Issue #42012 记录了在 SM120 硬件上，fa4 attention 后端在 CUDA 图捕获时崩溃（triton 是目前唯一可用的后端）；Issue #36669 报告了多工具智能体提示的思考输出退化为重复 '!' 字符的问题。[链接](https://github.com/sgl-project/sglang/issues/42012) [链接](https://github.com/sgl-project/sglang/issues/36669)
- **采样一致性 bug**：Issue #41916 记录了不同采样路径之间 top-k/top-p 过滤不一致的问题；修复工作正在通过 PR #41916 推进。[链接](https://github.com/sgl-project/sglang/pull/41916)
- **CI 与崩溃跟踪**：Issue #42752 跟踪不稳定的 CI 测试运行，有 128 条评论；Issue #26340 仍是 CUDA 核心转储事件的中心跟踪项，有 350 条评论。[链接](https://github.com/sgl-project/sglang/issues/42752) [链接](https://github.com/sgl-project/sglang/issues/26340)

## 6. 对应用开发者的意义
1. **多模态载荷缓解**：部署大尺寸 base64 编码图像/音频输入的服务，现在可以在 v0.5.23+ 版本中设置 `--max-payload-size`，避免 Uvicorn/Granian 任意拒绝请求，消除大型多模态调用的静默失败问题。
2. **投机解码注意事项**：如果在 pip 安装的 SGLang 上运行投机解码并使用非贪心采样（temperature > 0），且没有系统级 CUDA 工具包，那么第一个非贪心请求就会导致服务器崩溃；要么在修复发布前只使用贪心流量，要么使用 CUDA/cccl 版本匹配的容器镜像。
3. **智能体工作负载调整**：如果为工具调用智能体工作负载部署 GLM-5.3-Flash，请注意多工具提示的已知思考输出退化 bug；在修复发布前，临时解决方案是限制每个请求的并行工具数量。
4. **面向规模化的 PD 分离架构**：在多租户规模下运行 SGLang 的团队应关注 2026 年第四季度的 PD 分离架构路线图，因为 PD 服务将成为生产级 LLM 服务的默认推荐部署模式，在并行策略和 HiCache 之间提供统一的协议支持。
5. **部署前置要求**：v0.5.22 新增了 CUDA Toolkit、编译器和 Rust 的文档化安装前置要求；在全新的 Linux 机器上，若没有这些依赖，从源码构建将会失败。

---

---

规则：
- 仅输出翻译结果。无前言，无解释，整体无 Markdown 代码块包裹。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、分隔线、表情符号。
- URL、链接目标、行内代码、代码块、数字和日期保持原样。
- 项目名称、仓库标识、用户名、版本标签、文件路径和 API/配置标识符保留原样——不翻译。
- Issue/PR 引用如 #12345 及其链接文本保持原样。
- 使用自然的技术中文，符合中文开发者通讯的语体——不进行逐字直译。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 技术周报 — 2026-10-26

## 1. 过去一周核心动态
本周 llama.cpp 连续发布 11 个稳定版本（b11879-b11889），核心方向包括加固语法解析逻辑、修复内存泄漏问题、优化 Qwen 系列模型推理性能。其中最显著的性能提升来自 CUDA 后端的 FFN/GLU 矩阵乘融合优化，但影响多 GPU MTP 功能、Vulkan 设备的重大稳定性问题仍在排查修复中。

## 2. 版本发布与兼容性变更
本周所有发布均为向后兼容的补丁更新：
- 最新稳定版本：[b11889](https://github.com/ggml-org/llama.cpp/releases/tag/b11889)
- 报告周期内未合并任何会破坏 API 或 CLI 兼容性的变更。
- 已合并的加固类 PR（[#30463](https://github.com/ggml-org/llama.cpp/pull/30463)、[#31153](https://github.com/ggml-org/llama.cpp/pull/31153)）为语法解析器增加递归深度限制，并消除 CUDA 代码的 C 风格 VLA 告警，在不改变用户侧行为的前提下提升了代码健壮性。

## 3. 新增模型与硬件支持
- **开发中模型支持**：
  - [PR #29823](https://github.com/ggml-org/llama.cpp/pull/29823) 将新增对字节跳动循环 LM 系列（Ouro 1.4B/2.6B 及 Thinking 变体）的架构支持
  - [PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342) 将落地 GigaChat 3.5（432B 混合专家模型，MLA 注意力机制）的转换管线
- **硬件优化工作**：
  - [PR #31139](https://github.com/ggml-org/llama.cpp/pull/31139) 新增单设备最大分配大小上报功能，用于解决 Vulkan、SYCL 及其他硬件后端的 MoE 缓存创建失败问题
  - 全新 CPU 量化类型 JQ2_K/JQ3_K/JQ4_K/JQ5_K/JQ6_K 正在评审中（[PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715)）
- **已发布的功能改进**：模型转换阶段的 Qwen 张量合并优化（[b11886](https://github.com/ggml-org/llama.cpp/releases/tag/b11886)）

## 4. 性能与优化
- **已发布的 CUDA 优化**：[b11879](https://github.com/ggml-org/llama.cpp/releases/tag/b11879) 将稠密前馈层的 FFN gate/up 矩阵乘与 GLU 激活函数融合到单个 MMQ 内核启动流程中，降低了 Hopper 架构 GPU 的 Prompt 处理开销。
- **开发中的后端优化**：
  - RDNA4 架构 KV 缓存优化，可减少每个查询头的冗余内存读取（[PR #30803](https://github.com/ggml-org/llama.cpp/pull/30803)）
  - 面向量化 KV 缓存的 SYCL DPAS Flash Attention 内核（适配 Intel Xe2 核显/Arc 独立显卡）（[PR #31125](https://github.com/ggml-org/llama.cpp/pull/31125)）
  - Metal 后端 GQA 解码优化，可降低分组查询注意力模型的 KV 缓存读取开销（[PR #30728](https://github.com/ggml-org/llama.cpp/pull/30728)）
- **已发布的内存优化**：[b11881](https://github.com/ggml-org/llama.cpp/releases/tag/b11881) 现已在所有内存缓存模块中正确识别 `no_alloc` 标记，为有固定内存预算的部署场景减少不必要的内存占用。

## 5. 稳定性与回归问题
目前没有阻断生产部署的严重崩溃问题，但以下未解决问题需要重点关注：
1. **高优先级**：CUDA 多 GPU 环境下，多 Token 预测（MTP）功能会使 Prompt 处理吞吐量减半（[#27428](https://github.com/ggml-org/llama.cpp/issues/27428)）；Windows 系统上运行 MTP 版 Qwen 模型时，长会话后会生成重复乱码（[#23577](https://github.com/ggml-org/llama.cpp/issues/23577)）。
2. **中优先级**：搭载 Strix Halo 核显、运行 Linux 7.x 内核的设备上，Vulkan 后端会触发 `vk::DeviceLostError`（[#25664](https://github.com/ggml-org/llama.cpp/issues/25664)）；Qwen3.8 27B 模型在上下文长度超过 80K 后，解码吞吐量会暴跌 25 倍（[#27623](https://github.com/ggml-org/llama.cpp/issues/27623)）。
3. **低优先级**：本周发布的版本已修复 dry 序列终止符导致的 CPU/内存泄漏（[b11884](https://github.com/ggml-org/llama.cpp/releases/tag/b11884)）、模型合并过程中截断 GGUF 张量被错误拒绝的问题（[b11880](https://github.com/ggml-org/llama.cpp/releases/tag/b11880)），以及 4D 张量量化时丢行的 bug（[b11883](https://github.com/ggml-org/llama.cpp/releases/tag/b11883)）。

## 6. 对应用开发者的影响
- **即时行动**：升级到最新的 b11889 版本，为生产部署消除内存泄漏与语法解析器栈溢出的风险。
- **CUDA 部署场景**：稠密前馈层模型的 Prompt 处理吞吐量将有所提升；在吞吐量回归问题修复前，请勿使用多 GPU MTP 配置。
- **长上下文工作负载**：当前 Qwen 混合架构模型在上下文长度超过 80K 时会出现严重的解码性能下降，对延迟敏感的场景请将上下文长度限制在该阈值以下。
- **路线图关注**：磁盘上下文卸载（[#20697](https://github.com/ggml-org/llama.cpp/issues/20697)）、GPU 常驻 MoE 专家缓存（[#29949](https://github.com/ggml-org/llama.cpp/issues/29949)）是高优先级功能需求，将在后续版本中支持消费级硬件部署更大尺寸的模型。

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周动态（2026-10-26）

## 1. 近 7 天亮点
过去一周，Ollama 推出了 macOS 原生语音生成功能，扩展了 Flint 编码模型的多平台支持，并将 NVIDIA Nemotron 3.5 Bolt E4B 视觉语言模型添加到模型库中。与此同时，云服务出现了大范围可靠性问题，一批开放的 PR 解决了长期存在的功能请求，以及 GPU 调度、MLX 后端和工具调用解析方面的运行时稳定性错误。

## 2. 版本发布与破坏性变更
过去 7 天发布了四个新版本，未记录破坏性变更：
- v0.40.11：新增 macOS 原生语音生成，支持 `ollama run` 的音频播放，以及兼容 OpenAI 的 `/v1/audio/speech` 端点用于流式音频。[发布链接](https://github.com/ollama/ollama/releases/tag/v0.40.11)
- v0.40.10：新增对 NVIDIA Nemotron 3.5 Bolt E4B 模型的支持。[发布链接](https://github.com/ollama/ollama/releases/tag/v0.40.10)
- v0.40.9：将 Flint 模型支持扩展到 Linux 和 Windows，并改进了兼容 OpenAI/Anthropic 的流式请求的错误报告。[发布链接](https://github.com/ollama/ollama/releases/tag/v0.40.9)
- v0.40.8：推出对 Recursive Flint 编码模型的初步支持。[发布链接](https://github.com/ollama/ollama/releases/tag/v0.40.8)

## 3. 新模型与硬件支持
- **新模型**：
  - Nemotron 3.5 Bolt E4B：NVIDIA 基于 Gemma 4 的轻量级视觉语言模型，具有 128K token 的上下文窗口，为本地对话、图像理解和工具使用进行了优化。[模型链接](https://ollama.com/library/nemotron-3.5-bolt)
  - Flint：Recursive 的编码模型，现已在 macOS、Linux 和 Windows 上可用。[模型链接](https://ollama.com/library/flint)
- **硬件支持更新**：
  - 针对 Intel Mac AMD GPU 支持（[Issue #1016](https://github.com/ollama/ollama/issues/1016)）和 Windows 上 Snapdragon X Elite NPU/GPU 支持（[Issue #5360](https://github.com/ollama/ollama/issues/5360)）的持续功能请求仍未解决，本周没有合并实现。

## 4. 性能与优化
- 开放的 PR #19291 升级了 MLX 和 MLX-C 版本，以利用新的 `window_size` 功能，为 Apple Silicon 上的 Gemma、Flint 和 Laguna 模型提供提示处理加速。[PR 链接](https://github.com/ollama/ollama/pull/19291)
- 开放的 PR #19284 改进了多 GPU 主机上的 GPU 调度，以防止在 VRAM 预测计算错误时错误地驱逐仅运行 CPU 的运行器。[PR 链接](https://github.com/ollama/ollama/pull/19284)
- 开放的 PR #19280 减小了 macOS 上长提示的预填充块大小，以避免 Metal GPU 看门狗终止。[PR 链接](https://github.com/ollama/ollama/pull/19280)
- 开放的 PR #19288 为 `ollama pull` 添加了 `--limit-rate` 和 `--limit-streams` 标志，实现了期待已久的下载速度限制。[PR 链接](https://github.com/ollama/ollama/pull/19288)
- 开放的 Issue #11772 请求将 MoE 权重卸载到 CPU 以减少 VRAM 占用，基于上游 llama.cpp 支持。[Issue 链接](https://github.com/ollama/ollama/issues/11772)

## 5. 稳定性与回归问题
按严重程度排序：
1. **关键云服务中断**：Ollama Cloud Pro 报告所有云模型的失败率为 95%（[Issue #15453](https://github.com/ollama/ollama/issues/15453)），并频繁出现 503 服务不可用错误（[Issue #15419](https://github.com/ollama/ollama/issues/15419)），导致云模型的生产使用不可靠。尚无合并的修复方案。
2. **高严重性运行时错误**：
   - 自 2026-10-12 以来，`glm-5.3-flash:cloud` 出现大规模生成退化（失败率 5-8%），与主机端集群存储损坏有关（[Issue #18980](https://github.com/ollama/ollama/issues/18980)）。
   - 最近更新后，全新安装完全无法运行模型（[Issue #19276](https://github.com/ollama/ollama/issues/19276)）。
   - 使用结构化输出时，云模型会忽略 JSON 回复模式（[Issue #12362](https://github.com/ollama/ollama/issues/12362)）。
3. **中严重性错误**：
   - `OLLAMA_NUM_PARALLEL=1` 未强制顺序请求处理（[Issue #19262](https://github.com/ollama/ollama/issues/19262)）。
   - `OLLAMA_CONTEXT_LENGTH` 未反映在 `/api/show` 或 `/api/tags` 响应中（[Issue #18995](https://github.com/ollama/ollama/issues/18995)）。
   - 开放的 PR #19267 修复了 MLX 运行器忽略停止序列的问题，导致生成超过预期停止点（[PR 链接](https://github.com/ollama/ollama/pull/19267)）。
   - 开放的 PR #19274、#18288、#17626 和 #18624 修复了 Gemma 4 和 Qwen 3.5 模型的工具调用和思考标签解析错误，防止了格式错误的工具输出。[PR #19274 链接](https://github.com/ollama/ollama/pull/19274)、[PR #18288 链接](https://github.com/ollama/ollama/pull/18288)、[PR #17626 链接](https://github.com/ollama/ollama/pull/17626)、[PR #18624 链接](https://github.com/ollama/ollama/pull/18624)

## 6. 这对应用开发者意味着什么
- **云可靠性注意事项**：如果你的应用依赖 Ollama Cloud 进行生产工作负载，预计本周会出现间歇性故障和输出质量下降；在稳定性问题解决之前，建议优先考虑本地模型部署。
- **待测试新功能**：macOS 原生语音生成端点为语音优先的本地应用开辟了新的用例，Nemotron 3.5 Bolt E4B 模型非常适合轻量级视觉语言代理工作流。
- **功能预览工作**：即将推出的下载速率限制标志将有助于管理受限环境中大型模型拉取的带宽使用，而 GPU 调度和 MLX 修复将提高具有大上下文窗口的长时间运行代理会话的稳定性。
- **工具调用注意事项**：使用 Gemma 4 或 Qwen 3.5 模型进行工具调用的开发者应注意格式错误的工具输出，直到开放的解析修复 PR 被合并；变通方法包括在客户端验证工具调用 JSON 模式。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 每周动态 — 2026-10-26

## 1. 上周重点动态
本周核心优先级为紧急安全响应：LiteLLM v1.107.0 被发现被植入窃取凭证的恶意载荷，已从 PyPI 和 Docker 镜像源下架，要求用户立即采取行动清除存在风险的部署。在 v1.103.x 至 v1.106.4 各版本线上快速发布了一系列补丁版本，同时协同轮换了镜像签名密钥，以重建供应链信任。同期工作重点聚焦治理缺陷：预算执行偏差、支出跟踪不完整，以及自定义提供商的配置鲁棒性问题。

## 2. 版本发布与破坏性变更
- **上周新发布版本：** v1.106.4、v1.105.5、v1.104.7、v1.103.9，以及补丁迭代版本 v1.106.3、v1.105.4、v1.104.6、v1.103.8、v1.106.2、v1.105.3。
- **破坏性变更 — 镜像签名密钥轮换：** 自 v1.106.3 / v1.105.4 / v1.104.6 / v1.103.8 起，所有 Docker 镜像和 Helm chart 均使用来自提交 [`e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065) 的新 cosign 密钥进行签名。需要校验镜像签名的用户必须更新固定的公钥；旧密钥（来自 `0112e53`）已无法校验新镜像。
- **迁移说明：** 运行新的校验命令，例如：
  ```bash
  cosign verify \
    --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
    ghcr.io/berriai/litellm:v1.106.4
  ```
  对 `litellm-database`、`litellm-non_root` 以及 `docker.io/litellm/*` 镜像执行相同操作。

## 3. 新模型与硬件支持
- **Bedrock 元数据刷新（进行中）：** PR #48358 根据 Bedrock 官方模型卡片，更新了 AWS Bedrock 中 Claude Sonnet 4.5 的模型条目，为 GovCloud 和旧版条目添加了 2027 年 4 月的 EOL 日期与 64K 输出限制，价格无变动。
- **新提供商（进行中）：** PR #48356 将 **Sideren** 新增为 JSON 配置的 OpenAI 兼容提供商，只需配置 `SIDEREN_API_KEY` 即可在 chat completions、responses、messages 接口中使用 `sideren/<model>`。
- **新提供商集成（进行中）：** PR #46901 将 **Decision Models** 新增为共享 Jev 决策流中的提供商。
- **本周无新增 GPU/量化/后端支持**。

## 4. 性能与优化
- 上周未合并任何带有具体基准测试数据的吞吐、延迟、内存或内核优化。
- 相关进行中工程工作：PR #40326（面向 Ollama chat completions 的 Rust 管道，带有 Python 回退与端到端一致性测试）仍在评审中，同时 Rust 核心的扩展工作也在持续推进。

## 5. 稳定性与回归问题
按严重程度排序：

1. **严重 — 供应链被入侵（v1.107.0）：** Issue #47826 报告 v1.107.0（已从 PyPI 移除；`latest`/`main-latest`/`main-stable` Docker 镜像已下架）包含来自仿冒代码仓库构建的 `cook.pth` 凭证窃取脚本与 sitecustomize RCE 加载器。使用任意 v1.107.0 镜像的用户必须立即清除部署、轮换凭证，并升级到经过校验的补丁版本。
2. **高危 — 预算执行绕过/支出跟踪陈旧漂移：**
   - Issue #26672：在 v1.82.3 中，即使支出超出限额，密钥/用户的 `max_budget` 执行仍失效（状态：open）。
   - Issue #27735：虚拟密钥使用陈旧的支出数据抛出 `BudgetExceededError`，而 `/key/info` 显示支出低于预算（open）。
   - 相关进行中修复：PR #48355（虚拟密钥软预算告警现在使用跨代理的当前支出），PR #48354（当显式传入 null 时清除单模型预算限制，不再触发服务器错误）。
3. **高危 — 支出/跟踪缺口：**
   - Issue #39057：缓存命中的令牌上报语义（支出清零但原始令牌被重放）在计费聚合中仍未解决。
   - Issue #14457：客户端在流式传输中途断开连接会丢失 usage/令牌跟踪，造成计费缺口（open）。
   - Issue #13245：Bedrock 非流式调用在客户端断开连接时成本跟踪不足（open）。
   - Issue #42161：使用 slug 模型名的流式调用在价格映射中缺失条目时会记录 `spend = 0`（open）。
   - 进行中修复：PR #48357 阻止未知/格式错误的虚拟密钥创建支出记录。
4. **中等 — 正确性 Bug：**
   - Issue #8842（已关闭）：Router `.acompletion` 未触发 `CustomLogger` 回调。
   - Issue #48145：JSON 定义的 OpenAI 兼容提供商对未收录模型会丢弃工具参数；修复见 PR #48191。
   - Issue #14052：`x-litellm-tags` 路由/回退失败（open）。
   - Issue #26444：Claude Opus 4.7 仍将 `temperature` 列为支持参数，但 Anthropic 实际拒绝该参数（open）。
   - Issue #26413：`think: false` 被忽略，仍返回推理内容（open）。
   - PR #48334 修复 Presidio PII 占位符冲突（#48029）；PR #48329 在鉴权失败处理中兼容非对象 JSON 请求体（#48304）；PR #48324 将 Ollama 字符串形式的停止序列标准化为数组。
5. **低危 — 兼容性/生态适配：**
   - PR #48359（进行中）：支持 Python 3.15，同时保留对 3.10 的兼容性。
   - Issue #46045（已关闭）：`ModuleNotFoundError: No module named 'mcp'`。
   - PR #29878（进行中）：MCP 列表操作空响应容错。

## 6. 对应用开发者的意义
- **立即安全行动：** 如果你在 2026-10-21 之后拉取了任意标签为 `latest`、`main-latest` 或 `main-stable` 的 LiteLLM 镜像，或从 PyPI 安装了 v1.107.0，请将部署视为已被入侵：轮换所有 API 密钥、凭证与令牌；从经过校验的发布版本（v1.103.8+ / v1.104.6+ / v1.105.4+ / v1.106.3+）重新构建；并将 cosign 校验密钥重置为提交 `e82a3c6`。
- **版本固定：** 避免使用浮动的 `latest` 标签；固定到带有摘要签名的具体版本，并相应更新你的镜像校验脚本。
- **计费/成本核算：** 如果你依赖流式传输、缓存命中或客户端断开连接场景，请审计你的支出日志 —— 已知缺口可能导致用量被低估或高估；在进行中的支出修复落地前，计划与提供商发票对账校验。
- **预算治理：** 如果你对虚拟密钥/团队使用 `max_budget`，鉴于存在未解决的执行 bug，请通过 `/key/info` 或 `/team/info` 添加独立的对账校验，而不是仅信任网关的拒绝行为。
- **自定义提供商/工具调用：** 如果你运行通过 JSON 配置定义的 OpenAI 兼容提供商（不在模型目录中），请在 v1.106.x 上测试工具调用参数传递；PR #48191 合并后将恢复原有行为。
- **版本升级：** 如果你需要 Python 3.15、Sideren/Decision Models 支持，或改进的 Ollama 停止序列处理，请等待 v1.106.4 之后的下一个稳定版本发布。

---

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周动态 — 2026-10-26

## 1. 过去 7 天核心亮点
过去一周，Unsloth 发布了两个 beta 版本，新增支持多款前沿模型（Recursive Flint、MOSS-Image、NVIDIA Nemotron Bolt 4B、DeepSeek-V4.1-Flash-1017、FLUX-3 Image Klein），同时推出了超出系统内存的 macOS MLX MoE 卸载功能、alpha 阶段的 FSDP2 多 GPU 训练、纯聊天模式的 Desktop 安装路径，以及兼容 OpenAI 标准的微调 API。PR 层面的路线图主要围绕 Studio 端工程展开：并行聊天的 KV 缓存抢占、卸载规划器优化、张量拆分多 GPU GGUF 加载，以及应用内基于节点的「Flows」流水线编辑器。目前正在排查 v0.1.909-beta 升级到 v0.1.910-beta 后出现的多个 Desktop/Studio 回归问题。

## 2. 版本发布与破坏性变更
- **v0.1.910-beta**（最新版）：https://github.com/unslothai/unsloth/releases — 新增纯聊天模式的 Unsloth Desktop 安装、支持内存大于 Mac 运存的 MLX MoE 模型，以及兼容 OpenAI 标准的微调 API。
- **v0.1.909-beta**：新增聊天中发送图片/视频、FSDP2 多 GPU 训练（alpha 阶段）、面向编码代理的一键式 MCP 配置。
- 发布说明中未明确标注破坏性变更的迁移指南，但 issue #14519 和 #15022 指出 Windows Desktop 平台在 v0.1.909/v0.1.910 版本中存在回归问题——这两个 beta 版本在该平台上暂未达到稳定状态。

## 3. 新模型与硬件支持
- **大语言模型 / 视觉语言模型 / 图像模型**：Recursive Flint、MOSS-Image、NVIDIA Nemotron Bolt 4B（E4B）、DeepSeek-V4.1-Flash-1017（总参数 552B / 激活参数 16B，约 125 GB）、FLUX.3 Image Klein（现可通过 Edit 工作流编辑——PR #15263）。
- **MoE / Mac**：支持内存大于 Mac 运存的 MLX MoE 模型（超出运存部分可卸载）。
- **后端**：面向推测解码的 Vulkan 采样路径（PR #15258，修复 MiniCPM-V-4.7-1B 问题）、`--fit-target` 场景下 DSpark/DFlash sidecar 的 Metal OOM 恢复（PR #14431）、面向稠密模型与 MTP-MoE 模型的跨空闲 GPU 对张量拆分 GGUF 加载（PR #14446）。
- **训练**：FSDP2 多 GPU 训练（alpha 阶段，v0.1.909-beta）。

## 4. 性能与优化
- **跨并行聊天的 KV 缓存抢占**（PR #10301）：单 llama-server 实例、单 KV 缓存；`--preempt-ram` 让 llama-server 负责缓存调度，多个 Studio 聊天可共享同一缓存。
- **卸载规划器重构**（PR #9872，通过 `UNSLOTH_SMART_OFFLOAD` 启用）：新增溢出成本门槛、子 FFN 溢出阶梯、上下文感知的设备预留、启动排序——与 llama.cpp 原生适配工具相比更具优势。
- **逐层嵌入 / Engram 查找表**（PR #14465）：将查找表放置在主机内存或磁盘内存中，而非 VRAM/固定内存——直接降低 DeepSeek-V4.1 Engram、Qwen3.8-Flash-Next、Gemma 4、gemma-3n PLE 的 VRAM 占用。
- **MiniMax-H3 int8 去噪模块固定**（PR #15297）：用队列式后台固定机制替代单线程块拷贝（A100 虚拟机加载 19.45 GB 数据原本约需 10.9 秒）。
- **GGUF 准入计数**（PR #15294）：在准入前统计已准备的提示词、工具与渲染输出总量，避免基于字符数估算导致的 KV 池超额分配。
- **GGUF 适配/工具结果尺寸统计**（PR #15014）：视觉图像 token（十张截图约 2 万 token）现已纳入压缩与工具结果尺寸统计。

## 5. 稳定性与回归问题
按用户影响程度排序：
1. **#15022（已关闭）** Windows Studio — 2026-10-23 更新后，所有 GGUF 加载操作均被误报的「子进程未监听」端口占用检查阻断。https://github.com/unslothai/unsloth/issues/15022
2. **#14411（开放中）** 模型卸载时/聊天几轮后出现核心转储，与 KV 缓存无关联。https://github.com/unslothai/unsloth/issues/14411
3. **#14519（已关闭）** 大量使用工具的长聊天会在 llama.cpp 收到推理请求前，于 CPU 端对话归档嵌入环节停滞数分钟；点击停止按钮无法取消归档。https://github.com/unslothai/unsloth/issues/14519
4. **#12365（已关闭）** 多 LAN 账户使用同一本地模型时，已加载模型状态无法跨账户同步（双 RTX PRO 6000 Blackwell 环境）。https://github.com/unslothai/unsloth/issues/12365
5. **#14987（开放中）** Vulkan 环境下 MiniCPM-V-4.7-1B 在推测解码时生成一个 token 后即崩溃——修复方案见 PR #15258。https://github.com/unslothai/unsloth/issues/14987
6. **#12845（已关闭）** Arch/GNOME/Wayland 环境下 AppImage 窗口无法调整大小，且存在帧率问题。https://github.com/unslothai/unsloth/issues/12845
7. **#14439（已关闭）** Gemma-3 上 FastDecisionModel / Clef 头模块训练时损失无变化。https://github.com/unslothai/unsloth/issues/14439
8. **#14052 / #7371** AMD 音频运行时 / Strix-Halo ROCm 预编译版本性能回归——均已关闭。
9. **#14174（已关闭）** 仓库提交前压力测试问题（`scripts/enforce_kwargs_spacing.py` 未优化）。https://github.com/unslothai/unsloth/issues/14174

## 6. 对应用开发者的意义
- **新增兼容 OpenAI 标准的微调 API**（v0.1.910-beta）意味着你可以直接基于现有 OpenAI SDK 生态的训练编排工具驱动 Unsloth，无需单独开发客户端。
- **KV 抢占 + 共享缓存**（PR #10301）是多租户 Studio 后端场景的核心改动：并行聊天不再需要各自独立的 KV 池——但需谨慎启用，因为该功能会改变缓存驱逐逻辑。
- **PR #15294** 调整了 `/v1/chat/completions`、Responses 与 Anthropic 兼容路径的准入规则：此前因提示词计数偏低而通过的请求，在 KV 缓存饱和时将被拒绝或排队。
- **FSDP2 alpha 版本** 搭配张量拆分 GGUF（PR #14446）让双 GPU Studio 部署的解码吞吐量更具实用价值，但二者仍在迭代中——若依赖稳定的层拆分行为，请锁定特定 beta 版本标签。
- **Windows Desktop 平台的 v0.1.909/v0.1.910** 是当前风险最高的版本（对应 issue #15022、#14519）；在端口检查与归档停滞的修复落地到下一个版本前，请勿向 Windows 终端用户推送这两个 beta 版本。
- **Flows 节点编辑器**（PR #14730，叠加 #15251）是 Studio 原生的全新流水线搭建方式，可将聊天/MCP 调用接入工作流——如果你此前基于 Studio 的 MCP 接口搭建了外部编排工具，该功能值得关注。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*