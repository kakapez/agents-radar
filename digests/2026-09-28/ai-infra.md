# AI 基础设施周报 2026-09-28

> 生成时间: 2026-09-28 01:30 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态跨项目对比报告
*2026 年 9 月 28 日当周 | vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth*

---

## 1. 生态概览
过去一周，AI 推理与微调生态沿两条平行轨迹分化：高端数据中心引擎（vLLM、SGLang）针对下一代 NVIDIA GPU（SM100/SM120）及大规模 MoE/推理模型推进激进优化，而边缘/本地运行时（llama.cpp、Ollama）则聚焦消费级设备与 Apple Silicon 设备的硬件兼容性与问题修复。LLM 网关层（LiteLLM）推进基于 Rust 的重写工作，以解决 Python 性能瓶颈；微调工具（Unsloth）在加码量化训练速度提升的同时，业务拓展至本地多模态服务。在所有层级中，DeepSeek-V4.1 与 Qwen3.x 系列模型成为通用优化目标，反映出其在生产部署中的主导地位日益增强。稳定性仍是普遍痛点，各主流项目均被报告存在高严重级别的死锁、缓存损坏及计费错误问题。

---

## 2. 活跃度对比
| 项目        | 活跃 Issue（高/严重） | 已合并/进行中 PR | 过去 7 天发布状态 |
|----------------|-------------------------------|------------------------|-------------------------------|
| vLLM           | 7 个（4 个高严重级别）           | 12+ 已合并，5+ 进行中 | 稳定版 v0.30.0（重大版本，762 次提交，315 位贡献者） |
| SGLang         | 9 个（4 个高严重级别）           | 10+ 已合并，8+ 进行中 | 无正式版本；main 分支活跃开发中 |
| llama.cpp      | 10 个（4 个严重级别）               | 8 个已合并，6+ 进行中 | 10 个预发布构建版本（b11213–b11223，0.3.0-dev） |
| Ollama         | 12 个（3 个严重级别）               | 8+ 进行中         | 稳定版 v0.34.4 + v0.4.0-rc0 预发布（Apple Silicon 默认使用 MLX） |
| LiteLLM        | 7 个（3 个严重级别）                | 10+ 已合并，4+ 进行中 | 8 个稳定版本 + 2 个开发预发布版本（v1.98.1 → v1.104.0-dev.2） |
| Unsloth        | 6 个（2 个高严重级别）           | 6 个已合并，6+ 进行中 | 4 个 beta 版本（v0.1.812–v0.1.815）+ CUDA 13 预构建 wheel 包 |

---

## 3. 模型支持竞赛
| 模型/架构       | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|
| DeepSeek-V4.1-Flash      | ✅ 全面支持（MXFP8 KV 缓存，v0.30.0） | ✅ AMD MI350X + DSpark 投机解码 | ❌ 进行中 | 🟡 仅云端支持（存在视觉 Bug） | ❌ 未公布 |
| Qwen3.8-Flash / Qwen3.x 系列 | ✅ GDN 融合优化 | ✅ FP8 MoE Triton 内核 | ⚠️ 长上下文吞吐量骤降（>80K） | ⚠️ 工具调用解析器 Bug | ✅ 本地推理 + 训练支持 |
| GLM-5.3-Flash            | ✅ 支持（存在 W4A16 精度退化 Bug） | ⚠️ FP8 KV 缓存不兼容 | 🟡 进行中 | ❌ 未公布 | ❌ 未公布 |
| 扩散/视频模型   | ❌ 非优先级 | ✅ SANA-Video 2.0、Qwen-Image 2.1 内核优化 | ❌ 非优先级 | ❌ 非优先级 | ✅ Qwen-Image-2.1 本地部署 |
| 因果 LLM 重排模型     | ❌ 非优先级 | ❌ 非优先级 | ✅ 服务端 API 支持（b11223） | ❌ 非优先级 | ❌ 非优先级 |
| Kimi-K3 / KimiViT        | ✅ KimiViT QK RoPE 融合（29.6 倍加速） | ❌ 未公布 | ❌ 未公布 | 🟡 仅云端支持 | 🟡 MXFP4 专家训练（进行中） |

### 领先地位
- **数据中心推理**：vLLM 在纯 NVIDIA 部署场景小幅领先（全面支持 SM100 MXFP8，模型覆盖更广），而 SGLang 在多硬件（AMD、NPU、MLU）及扩散/视频服务领域领先。
- **边缘/本地服务**：llama.cpp 保持最广泛的模型与硬件兼容性，Ollama 通过 MLX 集成在 Apple Silicon 上正快速缩小差距。
- **微调 + 服务融合**：Unsloth 是唯一同时在多模态模型领域拓展训练优化与终端用户服务（Studio UI）的项目。

---

## 4. 性能前沿
本周优化工作集中在五大高影响领域：
1. **KV 缓存创新**：
   - vLLM 为 SM100 推出完整 MXFP8 KV 缓存（适配 DeepSeek-V4.1-Flash），并完成 SM120 的 NVFP4 KV 缓存原型（RTX 5090 上支持 245K 上下文）。
   - SGLang 新增 NPU HiCache L3 支持，以及用于基数前缀缓存的 FlashInfer KDA 预填充检查点功能。
   - Unsloth 为 MLX 推理开发了 TurboQuant 2–4 位 KV 缓存量化方案。
2. **自定义内核融合**：
   - vLLM 实现 KimiViT QK RoPE 融合与 GDN 解码融合内核，带来 29.6 倍加速。
   - SGLang 融合 Qwen-Image 2.1 transformer 模块（RMSNorm + RoPE + KV 打包），将非 GEMM 开销降低 80%。
   - llama.cpp 优化了 CUDA FlashAttention 分片配置与 HIP CDNA fattn-mma 内核。
3. **量化效率**：
   - vLLM 修复了 8 位非对称 GPTQ MoE 权重分片问题，并探索 INT8 KV 缓存方案。
   - Unsloth 实现 Block-FP8 LoRA 训练 3.7–14.9 倍加速，并开发了 compressed-tensors INT4 QLoRA 支持。
   - llama.cpp 推出 IQ2_NL/IQ3_NL 量化格式，适配非 256 对齐的张量形状。
4. **分布式与并行服务**：
   - SGLang 推进面向 NPU/AMD 平台的解码上下文并行（DCP/Helix），目前 A2A + FlashInfer 后端已设为默认。
   - vLLM 在 v0.30.0 中修复了序列并行/异步张量并行的批次不变性 Bug。
5. **运行时层优化**：
   - LiteLLM 的 Rust 重写版本新增原生 Python 推理桥接与结构化追踪功能，以减少 Python 端 GIL 瓶颈。
   - SGLang 探索 CPython 3.14t（nogil）支持，用于服务路径加速。

---

## 5. 层级定位
| 层级                  | 项目          | 核心价值主张 | 主要使用场景 |
|------------------------|-------------------|------------------------|------------------|
| **高性能服务引擎** | vLLM、SGLang | 为数据中心 GPU 部署提供最大吞吐量/最低延迟；支持前沿模型、并行技术与大上下文 | 云/本地生产 LLM 服务、企业推理端点 |
| **本地/边缘运行时** | llama.cpp、Ollama | 广泛的硬件兼容性（CPU、GPU、NPU、移动端）与轻量部署；依赖极少 | 边缘设备、本地开发、消费级桌面 AI |
| **LLM 网关 / 路由器** | LiteLLM | 与供应商无关的 API 抽象、成本管理、限流与多租户治理 | 跨多个 LLM 供应商的编排、成本优化、访问控制 |
| **微调 + 服务工具** | Unsloth | 加速量化微调（LoRA/QLoRA），并通过 Studio UI 集成本地服务 | 自定义模型微调、领域特定模型开发、端到端本地 AI 工作流 |

### 核心差异说明
- vLLM 优先打造 NVIDIA 生态领导地位与生产稳定性，而 SGLang 押注多硬件支持与下一代并行技术（DCP、流水线并行）以形成差异化。
- Ollama 为 llama.cpp 封装了易用的发行层与云服务，目标用户为非专家用户与桌面 AI 场景，而 llama.cpp 则聚焦底层内核与硬件兼容性。
- Unsloth 的独特之处在于打通了训练优化与终端用户服务，其 Studio UI 正演变为完整的本地 AI 平台，而非仅仅是一个微调库。

---

## 6. 趋势信号
1. **DeepSeek/Qwen 生态主导地位确立**：所有六个项目均投入大量资源优化 DeepSeek-V4.1 与 Qwen3.x 系列模型，标志着生产基线正从 OpenAI 架构主导转向中国开源 MoE/推理模型。应用开发者应在 2026 年第四季度优先考虑这些模型家族，以获得成本/性能领先优势。
2. **KV 缓存成为下一个性能主战场**：MXFP8、NVFP4 及 2–4 位量化 KV 缓存正从原型走向生产，上下文长度扩展与内存缩减已成为影响力最高的优化方向。规划长上下文智能体部署的团队应让硬件路线图与 SM100/SM120 GPU 对齐，以释放这些性能增益。
3. **多硬件碎片化加速**：SGLang 与 llama.cpp 对 NPU、MLU、AMD ROCm、Intel XPU 及 Vulkan 后端的支持拓展速度快于 vLLM，反映出市场对非 NVIDIA 推理替代方案的需求日益增长。拥有多云或边缘部署的基础设施团队应评估 SGLang，因其硬件支持矩阵更广泛。
4. **Rust 迁移浪潮抵达网关层**：LiteLLM 正在进行的 Rust 重写顺应了更广泛的行业趋势——将性能关键型基础设施（服务、路由）从 Python 迁移，以消除 GIL 与开销瓶颈。网关用户应规划向基于 Rust 的替代方案的长期迁移，以实现更低延迟与更高吞吐量。
5. **智能体工作负载暴露稳定性缺口**：工具调用解析、前缀缓存损坏与并发负载下的死锁等高危 Bug 在服务引擎中普遍存在，均由智能体多轮对话与推理模型工作负载触发。构建生产级智能体的应用开发者应在未来 2–3 个季度内，分配 20–30% 的工程时间用于稳定性验证与变通方案实现。
6. **训练-服务融合趋势**：Unsloth 向多模态服务的拓展，以及 vLLM/SGLang 微调生态集成的日益深化，预示着未来统一的训练+服务平台将取代碎片化的工具链。技术决策者应优先选择具备端到端技术栈的厂商，以降低运营复杂度。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 每周精选 | 2026-09-28
---

## 1. 过去 7 天亮点
本周 vLLM 项目发布 v0.30.0 版本，共包含 315 位贡献者提交的 762 次 commit，新增了高性能模型支持，并针对 SM100 架构 GPU 推出了 MXFP8 KV 缓存优化。活跃开发工作主要围绕修复 V1/V2 引擎的正确性问题与死锁 bug、扩展硬件兼容性（Intel XPU、AMD ROCm、Vulkan），以及优化生产部署所需的可观测性与前端稳定性展开。

---

## 2. 版本发布与破坏性变更
- **v0.30.0** – 重大版本更新，包含 315 位贡献者（其中 104 位为新贡献者）提交的 762 次 commit。核心更新包括新增模型支持、基于 FlashMLA V4.1 实现的 SM100 全量 MXFP8 KV 缓存，以及异步 Engram 预取功能。
  - 来源：[vllm-project/vllm Releases](https://github.com/vllm-project/vllm/releases/tag/v0.30.0)

---

## 3. 新模型与硬件支持
### 模型
- **DeepSeek-V4.1-Flash** – 在 v0.30.0 中新增支持，可在 SM100 上通过 FlashMLA V4.1 实现全量 MXFP8 KV 缓存。
  - 相关 PR：[#56214](https://github.com/vllm-project/vllm/pull/56214)、[#56228](https://github.com/vllm-project/vllm/pull/56228)、[#56208](https://github.com/vllm-project/vllm/pull/56208)、[#56893](https://github.com/vllm-project/vllm/pull/56893)
- **Glm4MoeLitePlusPlus (ZEDA-GLM-4.7-Flash-Dynamic)** – GLM-4.7-Flash 的动态 MoE 变体，采用零专家（Zero-Expert）架构。
  - 相关 PR：[#57274](https://github.com/vllm-project/vllm/pull/57274)
- **DeepGEMM Mega-mHC** – v0.30.0 中新增支持的模型架构。
  - 相关 PR：[#56962](https://github.com/vllm-project/vllm/pull/56962)

### 硬件与后端
- **Intel XPU** – 修复了 `test_mamba_prefix_cache` 对块大小的依赖问题，解决了 GDN 后端的块大小对齐故障。
  - 相关 PR：[#58269](https://github.com/vllm-project/vllm/pull/58269)
- **AMD ROCm** – 为 Qwen3-Next/Qwen3.5 启用了融合 QK-norm+RoPE+gate Triton 内核，该功能此前仅支持 CUDA。
  - 相关 PR：[#51406](https://github.com/vllm-project/vllm/pull/51406)
- **Vulkan 支持（功能需求）** – 社区提出新增 Vulkan 后端的需求，以提升对消费级硬件的兼容性，已获 35 👍。
  - 相关 Issue：[#21182](https://github.com/vllm-project/vllm/issues/21182)

### 量化
- **SM120 上的 NVFP4 KV 缓存** – 原型版本已可在 RTX 5090 上通过 FlashInfer 内核实现 245K 上下文长度，vLLM 集成工作正在进行中。
  - 相关 Issue：[#49011](https://github.com/vllm-project/vllm/issues/49011)
- **INT8 KV 缓存量化（功能需求）** – 提出在现有 FP8 选项之外新增 INT8 KV 缓存支持的需求，已获 12 👍。
  - 相关 Issue：[#33480](https://github.com/vllm-project/vllm/issues/33480)
- **8 位非对称 GPTQ MoE 修复** – 修正了 `moe_wna16` W13 权重的零点分片拆分逻辑。
  - 相关 PR：[#58950](https://github.com/vllm-project/vllm/pull/58950)

---

## 4. 性能与优化
- **KimiViT QK RoPE 融合** – 将每层的 QK RoPE 融合为单个原地执行内核，实现 **约 29.6 倍加速**（GB300 上 256 token 场景下耗时从 225.3µs 降至 7.6µs）。
  - 相关 PR：[#58651](https://github.com/vllm-project/vllm/pull/58651)
- **Minimax-M3 编码器 CUDA Graph 支持** – 降低多模态编码器路径的内核启动开销。
  - 相关 PR：[#58673](https://github.com/vllm-project/vllm/pull/58673)
- **GDN 解码融合 CUDA 内核** – 将非推测式 GDN 解码路径改为通过融合 CUDA 内核执行（此前仅用于 MTP 推测解码），消除了每层 Conv1D + Triton 循环 + RMSNorm 的开销。
  - 相关 PR：[#53463](https://github.com/vllm-project/vllm/pull/53463)
- **Qwen3.5 GDN 6 路输入投影融合** – 将 `in_proj_qkvz` 和 `in_proj_ba` 合并为单个 6 路 `MergedColumnParallelLinear`，以减少内存流量。
  - 相关 PR：[#41457](https://github.com/vllm-project/vllm/pull/41457)
- **MoE 位矩阵分块优化** – 将 `pack_bitmatrix` 的分块行数从 512 减少到 32，在保证输出位精确一致的前提下，降低了每次内核启动的开销。
  - 相关 PR：[#58546](https://github.com/vllm-project/vllm/pull/58546)
- **批次不变性优化（跟踪 Issue）** – 正在推进具备批次不变性的确定性推理完整实现，已获 21 👍、97 条评论。
  - 相关 Issue：[#27433](https://github.com/vllm-project/vllm/issues/27433)
- **动态 PDL 启用（功能需求）** – 针对 Hopper/Blackwell 架构，通过未公开的 PDL 标志位为 TRT-LLM 和 TorchInductor 路径实现低延迟优化。
  - 相关 Issue：[#40543](https://github.com/vllm-project/vllm/issues/40543)

---

## 5. 稳定性与回归问题
### 严重级
1. **V1 引擎在并发负载下出现核心死锁** – 高并发场景下，fp8 + 前缀缓存 + Qwen3.5 组合会触发死锁；暂无修复 PR。
   - 相关 Issue：[#37729](https://github.com/vllm-project/vllm/issues/37729)
2. **GLM-5.3-Flash 长解码输出退化** – 在 B300 上，W4A16 量化的 GLM-5.3-Flash 经过累积推理解码后会出现输出质量下降。
   - 相关 Issue：[#56868](https://github.com/vllm-project/vllm/issues/56868)
3. **混合 GDN 前缀缓存在 MTP 场景下出现数据损坏** – 前缀缓存 + MTP 组合会导致混合 Mamba/GDN 模型（Qwen3.8-27B）输出损坏；修复 PR 正在进行中。
   - 相关 Issue：[#53912](https://github.com/vllm-project/vllm/issues/53912) | 修复 PR：[#52244](https://github.com/vllm-project/vllm/pull/52244)
4. **Mamba-2 Triton 内核在 SM121 上触发非法指令** – DGX Spark (GB10) 在异步模式下会崩溃，临时解决方案是设置 `CUDA_LAUNCH_BLOCKING=1`。
   - 相关 Issue：[#37431](https://github.com/vllm-project/vllm/issues/37431)

### 中等级
1. **序列并行/异步 TP 场景下批次不变性失效** – 已在 v0.30.0 版本周期内修复。
   - 相关 Issue：[#56370](https://github.com/vllm-project/vllm/issues/56370)
2. **Ampere 架构（SM80-86）上 TurboQuant + 混合 MoE 功能失效** – 针对 Qwen3.6-35B-A3B FP8 + `k8v4` KV 缓存的场景，已有 13 个修复补丁。
   - 相关 Issue：[#40124](https://github.com/vllm-project/vllm/issues/40124)
3. **API 密钥防护存在缺口** – `--api-key` 仅保护了 4 个硬编码的路由前缀，导致 20 多个已注册路由未受保护；修复 PR 已提交。
   - 相关 PR：[#58948](https://github.com/vllm-project/vllm/pull/58948)
4. **引擎/工作节点看门狗监控** – 新增看门狗 PR，可在进程挂死时捕获栈追踪，提升死锁问题的可调试性。
   - 相关 PR：[#55700](https://github.com/vllm-project/vllm/pull/55700)

---

## 6. 对应用开发者的影响
- **运行 DeepSeek-V4.1-Flash 的 SM100 用户** 建议升级到 v0.30.0，全量 MXFP8 KV 缓存支持将显著提升有效上下文长度并降低内存开销。
- **使用 GLM-5.3-Flash 的生产团队** 在 v0.28.1 版本上应避免长周期多轮智能体工作负载，直到输出退化 bug 修复完成；可关注 Issue [#56868](https://github.com/vllm-project/vllm/issues/56868) 跟进修复进展。
- **部署了 fp8 + 前缀缓存 + Qwen3.5 的 V1 引擎** 应验证并发负载模式下的死锁风险；即将推出的看门狗功能（PR [#55700](https://github.com/vllm-project/vllm/pull/55700)）将简化挂死问题的诊断。
- **多模态服务团队** 将从 KimiViT RoPE 融合和 Minimax-M3 编码器 CUDA Graph 优化中获得显著的延迟降低，尤其适用于高吞吐量的图文混合工作负载。
- **安全提示**：如果你使用 `--api-key` 保护服务端点，请应用 PR [#58948](https://github.com/vllm-project/vllm/pull/58948) 中的修复，确保所有已注册路由都经过正确的身份验证。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 每周摘要 | 2026-09-28

---

## 1. 过去一周亮点
本周 SGLang 在多硬件支持与下一代并行能力上取得进展：针对 NPU 和 AMD ROCm 平台的解码上下文并行（DCP/Helix）开发活跃，扩散模型工作负载的核心算子也完成了重大优化。CI 稳定性仍是重点工作，团队对不稳定测试进行了专项跟踪；容错机制、权重加载重构、非 GPU 进程的 Rust 迁移等核心基础设施工作也在稳步推进。此外，项目新增了对多款扩散模型、视频生成架构的支持，并完成了 DeepSeek V4.1 生态的相关优化。

---

## 2. 版本发布与破坏性变更
过去一周无正式版本发布，也未公布任何破坏性的 API 或配置变更。

---

## 3. 新模型与硬件支持
| 类别 | 详情 | 链接 |
|----------|---------|------|
| 扩散/视频 | 新增 SANA-Video 2.0 原生支持（文生视频、文生图转视频），包含带分组注意力残差的混合门控线性/softmax Transformer 结构。 | [#41492](https://github.com/sgl-project/sglang/pull/41492) |
| AMD/ROCm | 遵循 CUDA 端 dsv4.1 布局模式，在 AMD gfx950 (MI350X) 上启用 DeepSeek-V4.1 服务，支持 DSpark 投机解码。 | [#41308](https://github.com/sgl-project/sglang/pull/41308) |
| NPU | 为 NPU 硬件上的 DSA 类模型新增解码上下文并行（DCP）支持。 | [#37787](https://github.com/sgl-project/sglang/pull/37787) |
| NPU/HiCache | 基于上游 L2 与 MemCache 实现，通过 `npu_memcache` 后端新增 DeepSeek V4 NPU HiCache L3 支持。 | [#39784](https://github.com/sgl-project/sglang/pull/39784) |
| MLU (寒武纪) | 新增内置 MLU 后端原型（POC），初期面向稠密 MHA/GQA 文本生成场景，已完成 Qwen3-8B 验证。 | [#26898](https://github.com/sgl-project/sglang/pull/26898) |
| Intel XPU | 复用现有 torch int4pack 路径，在 XPU 上启用 compressed-tensors W4A16 量化。 | [#40828](https://github.com/sgl-project/sglang/pull/40828) |
| 模型支持 | SenseNova-U1 / U1.5 的功能与性能跟踪正在进行中，与官方参考实现对齐。 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |

---

## 4. 性能优化
| 领域 | 详情 | 链接 |
|------|---------|------|
| 扩散算子 | Qwen-Image 2.1 VAE 解码器加速路径：默认启用位精确的 norm/bias 融合，`quality=extra-high` 模式下支持 channels_last 解码。 | [#41340](https://github.com/sgl-project/sglang/pull/41340) |
| 扩散算子 | Qwen-Image 2.1 Transformer 块优化：将 Q/K RMSNorm + RoPE + KV 打包融合为单个 CUDA 算子，并实现打包 QKV GEMM。性能分析显示，此前 Transformer 块 81% 的时间消耗在 GEMM，14% 在注意力，5% 为开销。 | [#41339](https://github.com/sgl-project/sglang/pull/41339) |
| MoE 算子 | 为 NVIDIA H200 NVL 上的 Qwen3.8-Flash-Next FP8 新增融合 MoE Triton 下投影配置（TP2+EP2，E=256，N=640，fp8_w8a8，block 128×128）。 | [#39153](https://github.com/sgl-project/sglang/pull/39153) |
| 解码并行 | Helix/DCP 路线图进展：已完成 A2A + FlashInfer-MNNVL 通信后端与查询复制功能；`fi_a2a` / `a2a` 已设为所有模型的默认 `--dcp-comm-backend`。fi_a2a 与 LSE 合并的融合开发仍在进行中。 | [#29736](https://github.com/sgl-project/sglang/issues/29736) |
| 流水线并行 | 流水线并行路线图持续推进，目标是降低长上下文（如 1M 输入 token）的首 token 时延（TTFT）并提升吞吐量。 | [#11857](https://github.com/sgl-project/sglang/issues/11857) |
| dLLM 服务 | 扩散 LLM 服务路线图持续推进块扩散服务与 Jev 风格扩散 LLM 优化。 | [#39499](https://github.com/sgl-project/sglang/issues/39499) |
| 模拟器 | SGLang 模拟器项目正在开发中，可在无需真实 GPU 集群的情况下，针对不同模型、硬件、配置与缓存策略进行性能探索。已获社区 17 个 👍。 | [#21891](https://github.com/sgl-project/sglang/issues/21891) |
| 自由线程 Python | 探索 CPython 3.14t (nogil) 支持，以消除 Python 端服务路径中的 GIL 瓶颈。已获社区 12 个 👍。 | [#22889](https://github.com/sgl-project/sglang/issues/22889) |
| Apple Silicon | Apple Silicon 设备的 MoE 性能优化工作正在进行中。 | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| KDA 预填充 | 为 KDA（动态分配 KV 缓存）集成 FlashInfer 预填充检查点，支持在块边界处保存/恢复状态，以实现基数前缀缓存。 | [#41400](https://github.com/sgl-project/sglang/pull/41400) |

---

## 5. 稳定性与回归问题
### 严重级别：高
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| CUDA 核心转储跟踪器 | 自动收集 PR 测试中的 CUDA 核心转储事件，跟踪 CI 运行中持续出现的 GPU 崩溃。目前已有 320 条评论。 | 开放，持续监控：[#26340](https://github.com/sgl-project/sglang/issues/26340) |
| HiCache 解码卸载竞态条件 | 解码端 HiCache 卸载会异步将 KV 复制到主机；回收操作可能在复制完成前就释放设备页，导致数据损坏。 | 修复 PR 已提交：[#30899](https://github.com/sgl-project/sglang/pull/30899) |
| LMCache 会话泄漏 | 中止的 LMCache 会话可能发生泄漏，因为缓存请求的终结与 `cache_finished_req` 绑定。 | 开放，暂无修复：[#40360](https://github.com/sgl-project/sglang/issues/40360) |
| 断连流式客户端僵尸请求 | 流式客户端断开连接后会留下僵尸请求，持续解码至 `max_tokens`，并大量输出 "state was deleted in TokenizerManager" 日志。由 #34160 回滚引入的回归问题。 | 开放，暂无修复：[#36333](https://github.com/sgl-project/sglang/issues/36333) |

### 严重级别：中
| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| GLM-5.3-Flash FP8 KV 缓存不兼容 | GLM-5.3-Flash 无法使用 FP8 KV 缓存：`index_kpool > 1` 时不支持 `flashmla_kv`，且没有 CUDA DSA 后端支持 bf16 查询 × fp8 KV 的组合。相同硬件上 GLM-5.2 可正常使用。 | 开放：[#36830](https://github.com/sgl-project/sglang/issues/36830) |
| Blackwell GPU 不支持 FlashInfer 后端 | FlashInfer 后端在 NVIDIA Blackwell 架构 GPU 上无法运行。 | 开放：[#35080](https://github.com/sgl-project/sglang/issues/35080) |
| Qwen3.8-Flash-Next 工具解析器循环 | Qwen3.8-Flash-Next 思考模式 + qwen3_coder 工具解析器会在 token ID 0 处陷入循环。 | 已关闭（已解决）：[#36537](https://github.com/sgl-project/sglang/issues/36537) |
| GLM47 流式解析器丢失工具调用 | 使用 `tool_call_parser=glm47` 的流式解析器，在单个 delta 包含多个 `<tool_call>` 块时会丢失缓冲的工具调用。 | 修复 PR 已提交：[#41493](https://github.com/sgl-project/sglang/pull/41493) |
| 投机解码 + torch_native 注意力崩溃 | 同时使用 `--speculative-algorithm NGRAM` 与 `--attention-backend torch_native` 会导致启动时出现无明确报错的崩溃。 | 修复 PR 已提交（参数校验）：[#36444](https://github.com/sgl-project/sglang/pull/36444) |

### CI/基础设施
| 项目 | 详情 | 链接 |
|------|---------|------|
| CI 测试跟踪 | 截至 2026-09-28 自动更新，共 2 个失败测试、6 个不稳定测试、1104 个近期修复的测试。 | [#17050](https://github.com/sgl-project/sglang/issues/17050) |
| XPU NGRAM 语料测试失败 | `test_ngram_corpus` 在 XPU 上持续失败；修复方案为在 XPU 上禁用该测试，并新增 XPU 测试动态检测能力。 | 已关闭（已合入）：[#41075](https://github.com/sgl-project/sglang/pull/41075) |
| 权重加载重构 | 提出重构 165 个模型文件中权重加载代码的 RFC，旨在减少每个文件中 50-150 行的 `load_weights` 样板代码。 | RFC 开放中：[#24703](https://github.com/sgl-project/sglang/issues/24703) |
| IPC Msgpack 迁移 | IPC 已完成从 pickle 到 msgpack 的全面迁移；移除了 PickleWrapper 相关 workaround，并切换了默认配置。 | 已关闭：[#29465](https://github.com/sgl-project/sglang/issues/29465) |

---

## 6. 对应用开发者的影响
- **多硬件部署灵活性提升**：面向 AMD MI350X、Intel XPU、寒武纪 MLU 或 NPU 平台的团队，将获得更丰富的模型与功能支持，尤其是 DeepSeek V4.1 系列工作负载。
- **扩散模型服务效率提升**：随着相关 PR 合入主分支，Qwen-Image 2.1 与 SANA-Video 2.0 的用户将因融合算子优化体验到显著的时延降低。
- **稳定性关注项**：使用 LMCache 或长时间运行的流式端点的团队，应关注缓存泄漏与僵尸请求的修复进展——这两个问题都可能导致生产环境中内存膨胀或日志刷屏。
- **路线图对齐**：DCP/Helix 并行、流水线并行与 SGLang 模拟器正快速成熟，有长上下文或高吞吐量需求的团队可在 2026 年 Q4 规划中评估这些即将推出的能力。
- **运维改进**：即将推出的 Prometheus KV 缓存用量指标将简化从 vLLM 迁移的团队的监控工作；容错框架也将更好地支撑与上层服务编排系统的集成。

---
*来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) | 生成于 2026-09-28*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 每周资讯（2026-09-21 至 2026-09-28）
## 1. 过去 7 天亮点
本周共发布 10 个 tagged 构建版本（b11213–b11223），重点聚焦服务端 reranker 支持、跨后端内核优化以及参数解析健壮性提升。其中最具影响力的改动是服务端 API 原生支持基于因果 LLM 的 reranker（如 Qwen3/Qwen3-VL）；性能优化覆盖 CUDA、HIP、SYCL、Vulkan 和 AVX512-FP16 后端；稳定性工作则围绕多 GPU 正确性、投机解码输出偏差以及模型加载回归问题展开。

## 2. 版本发布与破坏性变更
所有构建均为 `0.3.0-dev` 预发布版本，未报告重大 API 破坏性变更，但有两处值得关注的易用性/行为调整：
- **b11222**：[重构参数解析的副作用逻辑](https://github.com/ggml-org/llama.cpp/pull/29537) —— `--rpc` 现在会无条件注册，`llama_supports_rpc()` 仅在标志位处理函数中调用，且服务端初始化日志会在参数解析完成后打印。
- **b11221**：[`string_split<T>` 遇到无效值时现在会抛出异常](https://github.com/ggml-org/llama.cpp/pull/29518)，不再静默失败，提升了格式错误的 CLI 输入的错误可见性。
- **b11212**：[当 `llguidance` 不可用时，语法错误现在会抛出异常而非直接终止](https://github.com/ggml-org/llama.cpp/pull/29516)，将硬崩溃替换为可捕获的异常。

## 3. 新模型与硬件支持
### 模型支持
- **服务端因果 LLM reranker**：[PR #28876（已合并入 b11223）](https://github.com/ggml-org/llama.cpp/pull/28876) 为因果 LLM reranker（Qwen3、Qwen3-VL）新增 RANK 池化批量拆分功能，让此前仅支持交叉编码器架构的 rerank 工作负载，现在也能在仅解码器（decoder-only）模型上运行。
- **GLM-5.3-Flash（进行中）**：[PR #27773](https://github.com/ggml-org/llama.cpp/pull/27773) 新增对这款 320B 混合文本/视觉模型的支持，该模型采用 KDA 线性层和 DSA 注意力机制，目前正在积极评审中。
- **Jinja dict 内置函数**：[PR #29477（已合并入 b11218）](https://github.com/ggml-org/llama.cpp/pull/29477) 新增 Jinja 模板 `dict` 内置函数支持，提升了对复杂聊天模板的兼容性。

### 硬件/后端支持
- **IBM zDNN CI（进行中）**：[PR #29541](https://github.com/ggml-org/llama.cpp/pull/29541) 在 CI 中新增 zDNN 后端构建验证（暂未执行测试，等待 z16+ runner 硬件到位）。
- **XDNA 后端功能需求**：[Issue #21725（开放，35 👍）](https://github.com/ggml-org/llama.cpp/issues/21725) 社区对 AMD XDNA NPU 支持的需求持续增长。

### 量化格式（进行中）
- **IQ2_NL / IQ3_NL 量化类型**：一系列堆叠 PR（[#27322](https://github.com/ggml-org/llama.cpp/pull/27322)、[#27324](https://github.com/ggml-org/llama.cpp/pull/27324)、[#27325](https://github.com/ggml-org/llama.cpp/pull/27325)、[#27983](https://github.com/ggml-org/llama.cpp/pull/27983)）新增了 32 块 I-quant 变体，支持行长度不能被 256 整除的张量，将按 CPU → Metal → CUDA → Vulkan → SYCL 的顺序逐步推出支持。

## 4. 性能与优化
### 已合并的优化
- **CUDA FlashAttention 调优**：[PR #26289（已合并入 b11215）](https://github.com/ggml-org/llama.cpp/pull/26289) 针对头大小为 40–112 的 fp16 分块 FlashAttention 配置进行了优化。
- **HIP CDNA fattn-mma 内核**：[PR #28907（已合并入 b11214）](https://github.com/ggml-org/llama.cpp/pull/28907) 在 CDNA GPU 上启用了 `dkq > 256` 且大批量场景下的 fattn-mma 内核，同时调整了 CI 以忽略大型 MFMA 内核的预期寄存器溢出。
- **SYCL FWHT 内核扩展**：[PR #29243（已合并入 b11216）](https://github.com/ggml-org/llama.cpp/pull/29243) 通过 Kronecker/Paley 构造扩展了 FWHT 对 512 以上块宽度的支持，覆盖 384/640/768/1280 块大小。
- **OpenCL 内核加载优化**：[PR #29503（已合并入 b11217）](https://github.com/ggml-org/llama.cpp/pull/29503) 收紧了 bin 内核加载条件，提升了 OpenCL 兼容性。
- **Vulkan Adreno argsort 修复**：[PR #29469（已合并入 b11213）](https://github.com/ggml-org/llama.cpp/pull/29469) 修正了高通 Adreno GPU 的 argsort 内核选择问题。

### 进行中的优化
- **Vulkan GDN 内核调优**：[PR #29476](https://github.com/ggml-org/llama.cpp/pull/29476) 在 RTX 3090 上将 GDN 运算速度提升 6.3%，同时修复了 Intel 核显的严重性能回归问题。
- **AVX512-FP16 点积精度**：[PR #29545](https://github.com/ggml-org/llama.cpp/pull/29545) 将 f16 点积以 f32 精度累积以修复溢出问题，使输出与非 AVX512-FP16 的 logit 结果一致。
- **MoE 主机内存专家层卸载（功能需求）**：[Issue #26448（开放，7 👍）](https://github.com/ggml-org/llama.cpp/issues/26448) 提出基于 PCIe DMA 直接从主机内存访问专家权重的方案，实测结果显示 23GB 的 MoE 模型可在 1.6GB 显存上运行，81GB 的 Qwen3-235B 可在 8GB 显卡上运行。
- **基于磁盘的上下文检查点卸载（功能需求）**：[Issue #20697（开放，57 👍）](https://github.com/ggml-org/llama.cpp/issues/20697) 请求支持 `--cache-disk` 以将 KV 缓存检查点卸载到存储设备，是本周获赞最多的开放增强需求。

## 5. 稳定性与回归问题
### 严重（崩溃 / 数据损坏）
1. **SYCL 多 GPU 张量拆分崩溃**：[Issue #27198（开放）](https://github.com/ggml-org/llama.cpp/issues/27198) —— 在双 Intel Arc Pro B70 GPU 上，`--split-mode tensor` 会触发 `dev2dev_memcpy DEVICE_LOST` 错误，尽管 P2P 功能正常，已有 31 条评论。目前暂无修复 PR 合并。
2. **AMD GPU 上 Qwen 3.5 检查点加载崩溃**：[Issue #20176（开放）](https://github.com/ggml-org/llama.cpp/issues/20176) —— 在 ROCm 上加载已保存的 KV 检查点会崩溃，由 PR #20087 暴露，已有 18 条评论。暂无关联修复 PR。
3. **Gemma4 大图片导致服务端崩溃**：[Issue #28954（在 PR #29543 中被提及）](https://github.com/ggml-org/llama.cpp/pull/29543) —— 大于 1.2MP 的图片会导致服务端崩溃，原因是非因果图像注意力需要全批量处理。[PR #29543](https://github.com/ggml-org/llama.cpp/pull/29543) 新增了清晰的失败处理逻辑作为部分缓解方案。
4. **Gemma4 MTP 草稿模型加载回归**：[Issue #24795（开放，11 👍）](https://github.com/ggml-org/llama.cpp/issues/24795) —— 加载 MTP 草稿模型时出现 "invalid vector subscript" 崩溃，问题出现在 b9553 和 b9702 版本之间，已有 11 条评论。暂无修复 PR 合并。

### 高优先级（正确性 / 输出偏差）
1. **量化目标上投机解码输出偏差**：[Issue #25618（开放）](https://github.com/ggml-org/llama.cpp/issues/25618) —— 在 Q4_K_M 量化模型上，草稿模型投机解码产生的贪心输出与普通运行结果存在偏差（bf16 下一致），已有 27 条评论。暂无关联修复 PR。
2. **HIP gfx1151 长提示 logit 损坏**：[Issue #28211（开放）](https://github.com/ggml-org/llama.cpp/issues/28211) —— 在 RDNA3 Strix Halo APU 上，长度超过 `n_ubatch` 的提示会产生错误的 logit（无崩溃），已有 12 条评论。暂无关联修复 PR。
3. **Qwen3.8-27B 长上下文吞吐量骤降**：[Issue #27623（开放）](https://github.com/ggml-org/llama.cpp/issues/27623) —— 对于混合 Gated DeltaNet 模型，在上下文位置 >80K 时解码吞吐量下降约 25 倍，而提示处理速度保持正常，已有 17 条评论。暂无关联修复 PR。

### 中优先级（性能回归 / 易用性）
1. **b10780 之后 Vulkan RDNA3 提示处理变慢**：[Issue #28752（开放，2 👍）](https://github.com/ggml-org/llama.cpp/issues/28752) —— 构建版本 10780 之后，Vulkan + RDNA3 GPU 的提示处理速度严重下降，已有 14 条评论。[Vulkan GDN 调优 PR #29476](https://github.com/ggml-org/llama.cpp/pull/29476) 可能部分解决此问题。
2. **draft-mtp 多 GPU 提示处理变慢**：[Issue #27428（开放，2 👍）](https://github.com/ggml-org/llama.cpp/issues/27428) —— 使用 draft-MTP 时，多 GPU 层拆分使提示处理速度几乎减半（单 GPU 运行正常），已有 21 条评论。暂无关联修复 PR。
3. **CUDA 非连续 ROLL 操作支持**：[PR #29547](https://github.com/ggml-org/llama.cpp/pull/29547) 修复了 CUDA 后端中非连续张量的 ROLL 操作失败问题，目前正在评审中。

## 6. 对应用开发者的意义
- **Rerank 工作负载现在可使用仅解码器 LLM**：[服务端 API 新增的因果 LLM reranker 支持](https://github.com/ggml-org/llama.cpp/pull/28876) 让你可以将 Qwen3/Qwen3-VL reranker 与聊天模型部署在一起，无需单独的交叉编码器基础设施，简化了基于 llama.cpp 构建的检索增强生成（RAG）技术栈。
- **边缘场景下更好的错误处理**：参数解析和语法失败现在会抛出异常而非直接终止，让你更容易在应用层构建健壮的错误处理机制，无需处理进程崩溃。
- **如果你依赖 MTP + 多 GPU 或长上下文 DeltaNet 模型，建议暂缓升级**：Draft-MTP 多 GPU 速度变慢以及 Qwen3.8-27B 80K+ 上下文吞吐量骤降的问题尚未解决；在这些工作负载的修复落地前，建议暂时不要升级到最新构建版本。
- **针对边缘张量形状的实验性量化类型**：即将推出的 IQ2_NL/IQ3_NL 量化格式将消除张量行非 256 对齐模型的次优回退量化问题，减少小众架构的质量损失。
- **OpenAI Responses API 支持未被优先考虑**：请求 `/v1/responses` 端点支持的 [Issue #19138（已关闭，44 👍）](https://github.com/ggml-org/llama.cpp/issues/19138) 因过期被关闭，因此依赖此 API 的应用需要在客户端实现转换层。

---

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 每周速递 | 2026-09-28
来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 1. 近 7 天核心动态
Ollama 推进 Apple Silicon 平台的 MLX 路线图，发布 v0.4.0-rc0 预发布版本，在 Mac 设备上对支持的模型架构默认启用 MLX 加速；同时 v0.34.4 正式版针对结构化输出可靠性和 macOS 应用稳定性推出了定向修复。云服务可靠性成为用户反馈最集中的痛点：据大量用户报告，Ollama Cloud Pro 模型整体失败率达 95%，云端托管的模型还存在多项视觉能力/可用性缺陷。与此同时，一批针对解析器、内存统计和工具调用的修复已进入活跃 PR 阶段，旨在提升 Qwen、Gemma 4 及推理类模型工作负载的运行正确性。

---

## 2. 版本发布与破坏性变更
### v0.4.0-rc0（预发布版）
- **核心变更**：在 Apple Silicon 设备上，MLX 运行时支持的模型架构现在默认通过 MLX 运行，无需手动配置。
- 示例使用流程：
  ```
  ollama pull qwen3.8
  ollama run qwen3.8
  ```
- 注意：该版本正处于活跃的预发布测试阶段，用户可能会遇到边缘场景下的稳定性问题。
- 链接：[ollama/ollama Releases (v0.4.0-rc0)](https://github.com/ollama/ollama/releases/tag/v0.4.0-rc0)

### v0.34.4（稳定版）
- **关键变更**：
  1. 推理/思考类模型的结构化输出现在改为单轮执行，提升了速度与可靠性。
  2. 修复了本地模型库较大的用户偶发遇到的「模型未找到」错误。
  3. 修复了 macOS 应用在检测运行中的 ChatGPT/Codex 实例时触发的无响应问题。
  4. Qwen 模型兼容性初步优化（完整说明在发布日志中被截断）。
- 链接：[ollama/ollama Releases (v0.34.4)](https://github.com/ollama/ollama/releases/tag/v0.34.4)

---

## 3. 新模型与硬件支持
### 提案中 / 开发中
1. **Intel SYCL/oneAPI GPU 后端**
   - 功能需求：通过 ggml-sycl（llama.cpp 现有的 SYCL 后端）新增对 Intel Arc/Battlemage 系列 GPU 的可选支持，覆盖后端发现、构建启用、运行时管控、设备调度和打包全流程。
   - 链接：[Issue #16930](https://github.com/ollama/ollama/issues/16930)
2. **System 1 模型支持**
   - 需求：新增对 Kev、Laya 等快速轻量「System 1」模型的支持，配套 PR 新增 `POST /v1/systemone` API，用于基于本地 Nimble/Tev 模型实现结构化决策打分（输出选项、noul、分数）。
   - Issue 链接：[Issue #18594](https://github.com/ollama/ollama/issues/18594)
   - PR 链接：[PR #18606](https://github.com/ollama/ollama/pull/18606)
3. **云端模型需求**
   - Qwen3.8 是 Pro/Max 账户用户呼声最高的云端模型，获 9 个 👍 投票。
   - 链接：[Issue #17720](https://github.com/ollama/ollama/issues/17720)

### 已报告的兼容性缺口
1. **Windows 平台 NVIDIA Blackwell（RTX 50 系列）**：616.94 版本驱动下显存检测失败（显示显存为 0 B，回退到 CPU 运行）。
   - 链接：[Issue #18581](https://github.com/ollama/ollama/issues/18581)
2. **Windows 平台 Intel UHD 核显（0x4626）**：Vulkan 后端无法检测到该核显，但 Windows 系统的 Vulkan 可识别该设备。
   - 链接：[Issue #18672](https://github.com/ollama/ollama/issues/18672)

---

## 4. 性能与优化
### 进行中的修复与优化
1. **KV 缓存内存统计修复**（PR 进行中）
   - 修复 `PredictServerVRAM` 的 KV 缓存大小计算逻辑，使其与 `GraphSize` 统计方式一致，解决 Qwen 模型加载失败和显存高估问题。
   - 链接：[PR #17615](https://github.com/ollama/ollama/pull/17615)
2. **MLX 前缀缓存内存调优**
   - 已报告问题：硬编码的 8 GiB MLX 前缀缓存预算，会导致 32 GB 内存的 Apple Silicon 设备在运行智能体工作负载时（例如 `qwen3.8:27b-mlx` 流程）出现严重的内存交换。
   - 链接：[Issue #18131](https://github.com/ollama/ollama/issues/18131)
3. **视觉模型性能回退（0.31.2 版本）**
   - 回退问题：v0.31.2 中 `gemma4:31b` 的内存估算值虚高约 1.2 GiB，导致模型从显存溢出到系统内存，吞吐量从 33.8 tok/s 降至 4.7 tok/s（速度下降 7 倍）。
   - 链接：[Issue #17099](https://github.com/ollama/ollama/issues/17099)
4. **MLX nvfp4 性能下降**
   - 问题：macOS 上 nvfp4 量化的模型在内存压力下运行极慢，持续单槽负载下预填充会卡在 `processed=total-1` 状态数分钟，仅能通过向运行进程发送 SIGTERM 恢复。
   - 速度下降参考：v0.20.0 中每个提示词约需 2 分钟的模型，现在耗时大幅增加。
   - 链接：[Issue #16030](https://github.com/ollama/ollama/issues/16030)、[Issue #18505](https://github.com/ollama/ollama/issues/18505)

---

## 5. 稳定性与回退问题
按严重程度排序（综合影响范围 + 受影响用户量）：

| 严重程度 | 问题 | 详情 | 修复状态 |
|----------|-------|---------|------------|
| 严重 | Ollama Cloud Pro 95% 失败率 | Pro 订阅用户的所有云端模型（glm-5.1、kimi-k2.5、qwen3.5、deepseek-v3.2 等）几乎全部调用失败，服务完全不可用。53 条评论，20 个 👍。 | 未解决，无关联修复 PR |
| 严重 | RTX 5090 上 CUDA 非法内存访问（Cohere MoE） | Windows + RTX 5090 环境下运行 Cohere MoE 模型时，llama-server 在提示词评估阶段持续崩溃，退出状态码 0xc0000409。 | 未解决，无关联修复 PR |
| 严重 | 缓存全命中时 llama-server 卡死（0.34.4，CUDA/Linux） | 完成一次缓存全命中的任务后，服务完全卡死；后续对该模型的所有请求都会挂起，直到模型卸载。已在 RTX 5060 Ti 上复现。 | 未解决，无关联修复 PR |
| 高 | Qwen3.8 「未找到用户查询」500 错误 | 上下文长度 205k 的 Qwen3.8 在工具调用循环中，对话流式输出失败并返回 500 错误。47 条评论，27 个 👍。 | 未解决；相关解析器修复 PR 进行中（见下文） |
| 高 | GPT-OSS 工具调用完成失败 | 与 open-webui 搭配使用时，模型会停止运行并在未执行工具调用的情况下标记其已完成。40 条评论。 | 未解决 |
| 高 | DeepSeek-v4.1-flash 云端视觉模型静默丢弃图片 | 模型宣称具备 `vision` 能力，但会忽略所有图像输入，且不抛出任何错误。 | 未解决 |
| 高 | Anthropic 兼容端点系统消息上浮 | `messages` 数组内的 system 角色消息会被合并到顶层系统块中，破坏 Claude Code 工作负载的前缀缓存效率。 | 未解决 |
| 中 | macOS GUI 60 秒静默超时 | macOS 应用（v0.34.0）处理长文档时，会在恰好 60 秒后失败且无 GUI 通知。 | 未解决 |
| 中 | `typical_p` 参数被移除，导致现有客户端报错 | 无法省略 `typical_p` 参数的客户端（例如 SillyTavern）在该参数被移除后调用失败。 | 未解决 |
| 中 | MLX 拉取路径无法检测磁盘已满 | 模型拉取失败时仅返回模糊的 R2 存储错误，而非清晰的「磁盘已满」提示。 | 未解决 |
| 中 | llama-server 后端忽略 `OLLAMA_GPU_OVERHEAD` 配置 | 显存开销预留对 llama-server 运行的模型不生效，导致 OOM / 设备分配错误。 | 未解决 |

### 相关修复 PR（进行中）
1. **Qwen/Gemma 解析器健壮性修复**（多个 PR）：
   - 修复 Qwen3.5 在思考通道关闭前就开启工具调用的问题：[PR #18624](https://github.com/ollama/ollama/pull/18624)
   - 修复 Qwen3-Coder 丢失闭合标签和参数值重写的问题：[PR #17914](https://github.com/ollama/ollama/pull/17914)
   - 修复 Gemma 4 思考闭合标签不匹配导致内容泄漏的问题：[PR #18288](https://github.com/ollama/ollama/pull/18288)
   - 修复 Gemma 4 工具调用被截断导致缺少右大括号的问题：[PR #17565](https://github.com/ollama/ollama/pull/17565)
   - 修复 Gemma 4 带空格的工具调用键被静默丢弃的问题：[Issue #18390](https://github.com/ollama/ollama/issues/18390)
2. **工具调用身份保留**：通过保留原始 `(namespace, name)` 键值对，修复 Codex 客户端的 MCP 命名空间工具路由问题。
   - 链接：[PR #16263](https://github.com/ollama/ollama/pull/16263)
3. **思考预算限制**：为推理块添加按请求/按模型的 token 预算，防止无限思考循环耗尽整个上下文窗口。
   - 链接：[PR #17566](https://github.com/ollama/ollama/pull/17566)

---

## 6. 对应用开发者的影响
1. **Apple Silicon 用户现在即可测试 MLX 加速**：v0.4.0-rc0 预发布版为支持的模型启用了零配置 MLX，但仍需注意 MLX 相关的边缘问题（预填充卡死、内存压力导致的速度下降、磁盘已满检测缺失）—— Mac 端生产负载仍建议使用 v0.34.4 版本。
2. **生产级智能体工作流暂不建议使用 Ollama Cloud Pro**：云端模型 95% 的失败率，加上频繁的「模型不可用」错误和视觉输入静默丢弃问题，目前云托管服务对关键业务场景而言并不可靠。
3. **推理类模型的工具调用工作流需仔细测试**：Qwen、Gemma 4 和 GPT-OSS 目前都存在工具调用正确性相关的活跃 bug（调用截断、补全缺失、解析器边缘场景问题）。请针对你选用的模型对智能体工作流进行端到端验证，并关注关联的解析器修复 PR 以了解解决进度。
4. **Blackwell GPU 初期适配问题需留意**：Windows 平台的 RTX 50 系列用户如果依赖 CUDA 加速，建议暂缓升级到 v0.34.4，因为显存检测功能存在故障；Linux CUDA 用户需注意 v0.34.4 中的缓存全命中卡死 bug。
5. **关注参数变更带来的破坏性影响**：`typical_p` 已被移除——如果你的客户端硬编码了该参数，请添加回退逻辑，在更高版本的 Ollama 中省略该参数以避免请求失败。
6. **推理类模型很快将新增防护机制**：即将推出的思考 token 预算功能，可防止推理循环失控（浪费算力且返回空响应），让推理模型更适用于生产级智能体场景。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 周报 | 2026-09-28
数据来源：[BerriAI/litellm](https://github.com/BerriAI/litellm)

---

## 1. 近 7 天核心动态
本周研发重点是基于 Rust 的 LiteLLM Gateway 重构工作，目前已有 7 个核心 PR 落地，新增了认证、MCP 支持、Responses API 兼容、结构化链路追踪以及虚拟密钥存储契约等能力。生产环境方面，本周上报了多个高严重级别漏洞，包括预算管控失效、路由器降级回退时返回空响应、未鉴权的 `/metrics` 端点泄露多租户个人身份信息（PII），同时修复了 Azure GPT-5.6 的成本映射问题，以及同步了 Together AI 的模型弃用安排。

---

## 2. 版本发布与破坏性变更
过去 7 天共发布 10 个版本，所有版本均已适配 commit `0112e53` 引入的全新 Cosign 签名 Docker 镜像校验标准：
- 稳定版：v1.98.1、v1.99.3、v1.99.4、v1.100.2、v1.100.3、v1.101.1、v1.101.2、v1.102.1
- 预发布版：v1.104.0-dev.1、v1.104.0-dev.2

目前所有 Docker 镜像均通过 Sigstore Cosign 完成签名；生产环境部署的用户请参照版本说明，使用公开密钥实现签名校验。

---

## 3. 新增模型与硬件支持
### 服务商与集成
- **Tsubasa 服务商**：新增原生路由、仪表盘自动发现、凭证配置字段，以及 2 个用于聊天补全的公共模型别名。[PR #43502](https://github.com/BerriAI/litellm/pull/43502)
- **OCI GenAI 区域解析**：修复了硬编码 `oraclecloud.com` 端点的问题，现已支持政务云区域（例如 `oraclegovcloud.com` 下的 `us-luke-1`），通过解析 compartment OCID 实现区域适配。[PR #43180](https://github.com/BerriAI/litellm/pull/43180)

### 成本映射更新
- Azure GPT-5.6 Terra/Luna 价格修正：修复了定价错位问题——此前错误地将 OpenAI 直连降价方案直接套用到 Azure 计费项上（Azure 并未同步执行 20%/80% 的降幅）。[Issue #36192](https://github.com/BerriAI/litellm/issues/36192)
- Together AI 弃用日期同步：更新了 `gpt-oss-20b`、`gemma-4-31B-it` 和 `Salesforce/Llama-Rank-V1` 的弃用日期，与官方历史数据表保持一致。[PR #43509](https://github.com/BerriAI/litellm/pull/43509) | [PR #43507](https://github.com/BerriAI/litellm/pull/43507)
- OpenRouter 价格同步：从 OpenRouter 的模型 API 拉取最新定价，以反映当前最低成本端点路由的实际成本。[PR #43506](https://github.com/BerriAI/litellm/pull/43506)

---

## 4. 性能优化
### 路由与成本效率
- **置信度门控的复杂度路由**：Jev 路由降级决策现在需要满足分类器置信度阈值要求，避免在置信度不足时不必要地降级到更便宜的模型。[PR #42387](https://github.com/BerriAI/litellm/pull/42387)
- **基于马尔可夫的路由方案**：收到功能请求，希望通过马尔可夫决策过程结合实时运营指标，实现自适应的 token 成本套利路由。[Issue #31555](https://github.com/BerriAI/litellm/issues/31555)
- **将结束原因视为失败**：新增路由器配置开关，可将终止类 `stop_reason`（例如通过 HTTP 200 返回的配额耗尽提示）判定为部署失败，从而触发降级回退和冷却机制。[Issue #38535](https://github.com/BerriAI/litellm/issues/38535)

### Rust 网关开发进展
- 原生 Python 推理桥接：新增可选的 Python 推理路径，通过 `python-bridge` 路由支持聊天补全、响应生成和推理端点。[PR #43465](https://github.com/BerriAI/litellm/pull/43465)
- 结构化路由生命周期追踪：为音频转写、聊天补全、OCR、响应生成和 WebSocket 路径新增了埋点，提升诊断可观测性。[PR #43466](https://github.com/BerriAI/litellm/pull/43466)

---

## 5. 稳定性与回归问题
### 严重级（影响生产环境）
1. **路由器降级回退返回空响应体**：非流式补全请求在主节点超时、降级回退成功后，返回 HTTP 200 但响应体为 `null`；目前尚无修复 PR 合并。[Issue #43165](https://github.com/BerriAI/litellm/issues/43165)
2. **预算管控绕过（v1.82.3）**：当消费超过配置值时，密钥/用户的 `max_budget` 限制未生效；属于 v1.82.3 引入的回归问题。[Issue #26672](https://github.com/BerriAI/litellm/issues/26672)
3. **未鉴权的 `/metrics` 端点泄露 PII**：Prometheus 指标端点默认无鉴权，会在生产部署中泄露多租户敏感数据。临时解决方案：设置 `require_auth_for_metrics_endpoint: true`。[Issue #24530](https://github.com/BerriAI/litellm/issues/24530)

### 高级
4. **免费模型在预算超限时被拦截**：零成本的本地部署模型在用户预算耗尽时会触发 `ExceededBudget` 错误；该问题已标记为修复完成。[Issue #14004](https://github.com/BerriAI/litellm/issues/14004)
5. **v3 版本限流器对团队单模型配额重复计算**：配置的 `model_per_team` RPM/TPM 限制实际仅按设定值的 50% 生效。[Issue #34140](https://github.com/BerriAI/litellm/issues/34140)
6. **密钥缓存后单客户 RPM 限制失效**：虚拟密钥缓存机制导致预算对象上的单客户 `rpm_limit` 管控失效。[Issue #39713](https://github.com/BerriAI/litellm/issues/39713)
7. **未知模型标识的流式响应计费为 0 美元**：当 `provider_response_model` 不在价格映射表中时，流式请求会被记录为零消费；非流式请求计费正常。[Issue #42161](https://github.com/BerriAI/litellm/issues/42161)

### 修复中 / 已合并
- **DashScope 图像生成参数修复**：将 `extra_body` 中的字段提升到顶层 `parameters` 中，确保 `watermark`、`negative_prompt`、`n` 和 `size` 等参数能正确传递给 DashScope。[PR #43208](https://github.com/BerriAI/litellm/pull/43208)
- **流式失败日志修复**：新增对首字节前就失败的文本补全流式请求的日志记录，修复了失败指标缺失和冷却触发异常的问题。[PR #43505](https://github.com/BerriAI/litellm/pull/43505)
- **Anthropic 联合工具 Schema 修复**：修复了 `sanitize_input_schema_for_anthropic` 会丢失联合类型根层级 `anyOf`/`$ref` 的问题。[Issue #43157](https://github.com/BerriAI/litellm/issues/43157)
- **可变默认参数 bug 修复**：通过 ruff 规则强制校验，修复了代码库中 180 个 B006 违规项。[PR #30940](https://github.com/BerriAI/litellm/pull/30940)

---

## 6. 应用开发者须知
1. **安全优先级操作**：请立即在所有生产环境的 LiteLLM Proxy 部署中启用 `require_auth_for_metrics_endpoint: true`，防止未鉴权的 `/metrics` 端点泄露多租户使用数据。
2. **预算可靠性注意事项**：如果你依赖 API 密钥或用户的 `max_budget` 管控能力，请全面测试你的部署——近期版本存在两个独立的预算相关 bug（付费模型预算被绕过、免费模型被误拦截）。
3. **成本准确性提示**：如果你使用自定义模型标识或较早的 Anthropic 版本，请核实流式请求的计费情况；有上报案例显示，83% 的流式计费调用被记录为零消费。
4. **Rust 网关预览**：基于 Rust 的 LiteLLM Gateway 正在快速完善核心功能（认证、MCP、Responses API、链路追踪）——如果你需要更低延迟的推理路由，可以提前规划未来的迁移方案，因为 Python 代理大概率会在长期被弃用。
5. **Langfuse SDK 升级支持**：Langfuse v4 SDK 的兼容适配正在进行中，Langfuse 团队已明确提出支持 v4 OTel 数据接入的需求；预计后续稳定版本会提供官方支持。[Issue #24123](https://github.com/BerriAI/litellm/issues/24123) | [Issue #33383](https://github.com/BerriAI/litellm/issues/33383)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 每周速递 | 2026-09-28
---

## 1. 过去 7 天亮点
本周 Unsloth 连续发布 4 个 Beta 版本，新增本地 Qwen-Image-2.1 部署支持、自定义 Agent Skills 功能，并将推理块的推理速度提升了 2 倍；同时同步推出了适配 Flash-Attention 2、Causal-Conv1D 和 Mamba SSM 的 CUDA 13 预构建 wheel 包。
开发侧多个高影响力 PR 正在推进中：包括 FP8/LoRA 训练性能优化、Kimi-K3 MXFP4 专家训练支持，以及 Studio UI 功能扩展（多模型服务、专属聊天库标签页等）。
AMD 硬件兼容性仍是用户最关注的问题，目前有多个公开 Issue 跟踪 RDNA 3 和 Strix Halo 平台上的 GPU 检测、显存分配错误、训练失败等问题。

---

## 2. 版本发布与破坏性变更
| 版本 | 类型 | 核心变更 |
|---------|------|-------------|
| [prebuilt-wheels-cu13](https://github.com/unslothai/unsloth/releases/tag/prebuilt-wheels-cu13) | 预构建二进制 | 适用于 Linux x86_64 平台的 CUDA 13 wheel 包，覆盖 flash-attn 2.8.4、causal-conv1d 1.7.0、mamba-ssm 2.3.2.post1；基于 PyTorch 2.13/2.14 + Python 3.13 编译 |
| [v0.1.815-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.815-beta) / v0.1.814 / v0.1.813 / v0.1.812 | Beta 版本 | 新增本地 Qwen-Image-2.1 支持、自定义 Agent Skills；优化聊天/项目管理；推理块速度提升 2 倍（60 FPS 对比 30 FPS）；训练稳定性提升；简化 Linux 下的安装与升级流程 |

本周未公布任何破坏性 API 变更。

---

## 3. 新模型与硬件支持
### 新模型
- **Qwen-Image-2.1**：已通过 Unsloth Studio 和核心库提供完整本地推理支持；可查阅[官方指南](https://unsloth.ai/docs/models/qwen-image-2.1)（[v0.1.812-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta)）
- **Kimi-K3（进行中）**：相关 PR 支持使用打包的 MXFP4 专家权重进行训练，支持实时反量化，无需完整复制 16 位权重（[PR #11750](https://github.com/unslothai/unsloth/pull/11750)）
- **compressed-tensors INT4 检查点（进行中）**：支持直接对打包的 INT4/INT8 compressed-tensors 格式（W4A16/W8A16）进行 QLoRA 训练，无需转换为 16 位检查点；兼容 DeepSeek-V3 MoE 远程代码与 Kimi-K2.7-Code（[PR #11537](https://github.com/unslothai/unsloth/pull/11537)）

### 硬件与后端
- **CUDA 13**：针对 PyTorch 2.13/2.14 + Python 3.13 环境，提供 Flash-Attention 2、Causal-Conv1D、Mamba SSM 的预构建 wheel 包（[prebuilt-wheels-cu13](https://github.com/unslothai/unsloth/releases/tag/prebuilt-wheels-cu13)）
- **MLX（进行中）**：为 Studio 中的 MLX 推理新增 TurboQuant KV 缓存量化（4/3.5/3/2 位）；内存面板新增 MLX 负载估算与上下文适配功能（[PR #11170](https://github.com/unslothai/unsloth/pull/11170)、[PR #10287](https://github.com/unslothai/unsloth/pull/10287)）
- **Vulkan 训练（功能需求）**：用户请求为 AMD 硬件新增基于 Vulkan 的 LLM 训练/微调支持（[Issue #11184](https://github.com/unslothai/unsloth/issues/11184)）
- **ROCm 版本灵活性（功能需求）**：用户请求支持 ROCm 7.14/10 的 PyTorch 构建，并允许用户自主选择 ROCm 版本（[Issue #9932](https://github.com/unslothai/unsloth/issues/9932)）

---

## 4. 性能与优化
### 已上线
- **推理块加速**：v0.1.812+ Beta 版本中，推理块的吞吐量提升 2 倍（60 FPS 对比 30 FPS）（[v0.1.812-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta)）

### 进行中
- **融合 Triton NF4 反量化 + GEMV**：用原生 Triton 实现替代 bitsandbytes C 内核调用，解决流安全问题、支持 torch.compile 追踪，同时保持位级精确性（[PR #12113](https://github.com/unslothai/unsloth/pull/12113)）
- **Block-FP8 LoRA 训练加速**：通过即时 FP8 线性执行与优化的 8 线程束 128 行 GEMM 分块，使 block-FP8 检查点的 LoRA 训练在各 GPU 上提速 3.7-14.9 倍（RTX PRO 6000：8.9 倍、L4：14.9 倍、H100：7.9 倍、B200：3.7-6.5 倍）（[PR #12027](https://github.com/unslothai/unsloth/pull/12027)）
- **逐行 FP8 回退机制**：在不支持 FBGEMM 逐行 FP8 内核的 GPU（RTX PRO 6000 / RTX 5090 / sm120）上自动回退，避免运行时失败（[PR #12098](https://github.com/unslothai/unsloth/pull/12098)）
- **多 GPU 分层拆分修复**：手动多 GPU 层放置时显式指定 `--split-mode layer`，消除默认行为歧义（[PR #10770](https://github.com/unslothai/unsloth/pull/10770)）

---

## 5. 稳定性与回归问题
按严重程度排序（综合用户影响与评论数量）：

| 严重程度 | 问题 | 状态 | 详情 | 修复 PR / 备注 |
|----------|-------|--------|---------|----------------|
| **高** | [Issue #4504: 微调实际显存占用高于宣传值，导致大模型训练 OOM](https://github.com/unslothai/unsloth/issues/4504) | 开放 | 22 条评论；Unsloth Studio 和核心库均有相关报告，ChatML 格式数据集会触发额外显存占用 | 暂未关联修复 PR |
| **高** | [Issue #7449: AMD Strix Halo（Windows）将模型权重加载到系统内存而非显存](https://github.com/unslothai/unsloth/issues/7449) | 开放 | 7 条评论；GPU 计算单元被调用但显存闲置，导致内存占用过高、性能下降 | 暂未关联修复 PR |
| **中** | [Issue #9792: AMD R9700（Windows/Vulkan）：Qwen3.8-27B V3 GGUF 在预填充后崩溃](https://github.com/unslothai/unsloth/issues/9792) | 开放 | 6 条评论；临时解决方案是使用 V2 GGUF 版本 | 暂未关联修复 PR |
| **中** | [Issue #7371: Strix Halo + ROCm 环境下，预构建版本 b10079 出现性能回归](https://github.com/unslothai/unsloth/issues/7371) | 开放 | 5 条评论；自动更新到预构建版本 b10079 后性能下降 | 暂未关联修复 PR |
| **中** | [Issue #8178: Studio UI 无训练显存上限设置（仅支持环境变量配置）](https://github.com/unslothai/unsloth/issues/8178) | 开放 | 4 条评论；显存预算滑块仅对 GGUF 推理生效，不作用于训练 | 暂未关联修复 PR |
| **低** | [Issue #10769: 大代码块导致 Unsloth 桌面端 UI 卡顿](https://github.com/unslothai/unsloth/issues/10769) | 开放 | 4 条评论；Windows 11 + RTX 4090 环境下，查看大段代码输出时界面卡顿 | 暂未关联修复 PR |

---

## 6. 对应用开发者的影响
1. **Qwen-Image-2.1 已可用于本地生产部署**：你现在可以借助 Unsloth 优化后的推理栈，在本地部署或边缘应用中集成多模态视觉-语言能力，无需依赖云端 API。可参考[官方指南](https://unsloth.ai/docs/models/qwen-image-2.1)快速上手。
2. **Agent 工具链现已支持通过自定义 Skills 扩展**：全新的 Agent Skills 框架允许你为 LLM 智能体打包自定义工具和工作流，简化基于 Unsloth Studio 开发领域专属智能体应用的流程。
3. **AMD 硬件用户需关注持续的兼容性迭代**：目前 RDNA 3 和 Strix Halo 平台仍存在多个活跃问题，涉及 GPU 检测、显存分配、训练稳定性等方面。如果你的部署目标是 AMD 硬件，请持续关注 ROCm/Vulkan 的支持更新，并可将 Qwen3.8 模型的 V2 GGUF 检查点作为稳定基线进行测试。
4. **FP8/QLoRA 工作负载即将迎来训练性能提升**：正在开发的 block-FP8 LoRA 加速与融合 NF4 内核将大幅缩短 4 位和 FP8 量化模型的微调时间。如果你运营大规模微调流水线，请密切关注相关 PR 的合并进展。
5. **Studio 正逐步演变为多模型服务平台**：正在开发的多模型服务功能将支持你在 Studio 中同时运行多个模型，更便于构建可在专用模型（例如代码、聊天、视觉模型）之间路由请求的应用，且仅需单次 Unsloth 部署即可实现。

</details>

---
*本周报由 [agents-radar](https://github.com/kakapez/agents-radar) 自动生成。*