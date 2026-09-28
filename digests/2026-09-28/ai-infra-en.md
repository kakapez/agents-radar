# AI Infrastructure Weekly Digest 2026-09-28

> Generated: 2026-09-28 01:30 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Infrastructure Ecosystem Cross-Project Comparison Report
*Week of 2026-09-28 | vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth*

---

## 1. Ecosystem Overview
The past week saw the AI inference and fine-tuning ecosystem split along two parallel trajectories: high-end data center engines (vLLM, SGLang) pushed aggressive optimizations for next-gen NVIDIA GPUs (SM100/SM120) and large-scale MoE/reasoning models, while edge/local runtimes (llama.cpp, Ollama) focused on hardware portability and correctness fixes for consumer and Apple Silicon devices. The LLM gateway layer (LiteLLM) advanced a Rust-based rewrite to address Python performance bottlenecks, and fine-tuning tooling (Unsloth) expanded into local multimodal serving while doubling down on quantized training speedups. Across all layers, DeepSeek-V4.1 and Qwen3.x family models emerged as the universal target for optimization, reflecting their growing dominance in production deployments. Stability remained a widespread pain point, with high-severity deadlocks, cache corruption, and billing bugs reported across every major project.

---

## 2. Activity Comparison
| Project        | Active Issues (High/Critical) | Merged/In-Progress PRs | Release Status (Past 7 Days) |
|----------------|-------------------------------|------------------------|-------------------------------|
| vLLM           | 7 (4 high-severity)           | 12+ merged, 5+ in progress | Stable v0.30.0 (major release, 762 commits, 315 contributors) |
| SGLang         | 9 (4 high-severity)           | 10+ merged, 8+ in progress | No official release; active main branch development |
| llama.cpp      | 10 (4 critical)               | 8 merged, 6+ in progress | 10 pre-release builds (b11213–b11223, 0.3.0-dev) |
| Ollama         | 12 (3 critical)               | 8+ in progress         | Stable v0.34.4 + v0.4.0-rc0 pre-release (MLX default for Apple Silicon) |
| LiteLLM        | 7 (3 critical)                | 10+ merged, 4+ in progress | 8 stable releases + 2 dev pre-releases (v1.98.1 → v1.104.0-dev.2) |
| Unsloth        | 6 (2 high-severity)           | 6 merged, 6+ in progress | 4 beta releases (v0.1.812–v0.1.815) + CUDA 13 prebuilt wheels |

---

## 3. Model Support Race
| Model/Architecture       | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|
| DeepSeek-V4.1-Flash      | ✅ Full support (MXFP8 KV cache, v0.30.0) | ✅ AMD MI350X + DSpark speculative decoding | ❌ In progress | 🟡 Cloud-only (vision bug) | ❌ Not announced |
| Qwen3.8-Flash / Qwen3.x family | ✅ GDN fusion optimizations | ✅ FP8 MoE Triton kernels | ⚠️ Long-context throughput collapse (>80K) | ⚠️ Tool call parser bugs | ✅ Local inference + training support |
| GLM-5.3-Flash            | ✅ Support (W4A16 degeneration bug) | ⚠️ FP8 KV cache incompatible | 🟡 In progress | ❌ Not announced | ❌ Not announced |
| Diffusion/Video models   | ❌ Not prioritized | ✅ SANA-Video 2.0, Qwen-Image 2.1 kernel optimizations | ❌ Not prioritized | ❌ Not prioritized | ✅ Qwen-Image-2.1 local deployment |
| Causal LLM rerankers     | ❌ Not prioritized | ❌ Not prioritized | ✅ Server API support (b11223) | ❌ Not prioritized | ❌ Not prioritized |
| Kimi-K3 / KimiViT        | ✅ KimiViT QK RoPE fusion (29.6x speedup) | ❌ Not announced | ❌ Not announced | 🟡 Cloud-only | 🟡 MXFP4 expert training (in progress) |

### Leadership Position
- **Data center inference**: vLLM holds a narrow lead for NVIDIA-only deployments (full SM100 MXFP8 support, broader model coverage), while SGLang leads in multi-hardware (AMD, NPU, MLU) and diffusion/video serving.
- **Edge/local serving**: llama.cpp maintains the widest model and hardware portability, with Ollama closing the gap on Apple Silicon via MLX integration.
- **Fine-tuning + serving convergence**: Unsloth is the only project expanding both training optimization and end-user serving (Studio UI) for multimodal models.

---

## 4. Performance Frontier
Optimization efforts clustered in five high-impact areas this week:
1. **KV Cache Innovation**:
   - vLLM shipped full MXFP8 KV cache for SM100 (DeepSeek-V4.1-Flash) and prototyped NVFP4 KV cache for SM120 (245K context on RTX 5090).
   - SGLang added NPU HiCache L3 support and FlashInfer KDA prefill checkpointing for radix prefix caching.
   - Unsloth developed TurboQuant 2–4 bit KV cache quantization for MLX inference.
2. **Custom Kernel Fusion**:
   - vLLM delivered 29.6x speedup for KimiViT QK RoPE fusion and GDN decode fused kernels.
   - SGLang fused Qwen-Image 2.1 transformer blocks (RMSNorm + RoPE + KV packing) to cut non-GEMM overhead by 80%.
   - llama.cpp optimized CUDA FlashAttention tile configurations and HIP CDNA fattn-mma kernels.
3. **Quantization Efficiency**:
   - vLLM fixed 8-bit asymmetric GPTQ MoE weight sharding and explored INT8 KV cache options.
   - Unsloth achieved 3.7–14.9x faster Block-FP8 LoRA training and developed compressed-tensors INT4 QLoRA support.
   - llama.cpp rolled out IQ2_NL/IQ3_NL quant formats for non-256-aligned tensor shapes.
4. **Distributed & Parallel Serving**:
   - SGLang advanced decode context parallelism (DCP/Helix) for NPU/AMD platforms, with A2A + FlashInfer backends now default.
   - vLLM resolved batch invariance bugs with sequence parallelism/async TP in v0.30.0.
5. **Runtime Layer Optimizations**:
   - LiteLLM’s Rust rewrite added native Python inference bridges and structured tracing to reduce Python-side GIL bottlenecks.
   - SGLang explored CPython 3.14t (nogil) support for serving path acceleration.

---

## 5. Layer Positioning
| Layer                  | Projects          | Core Value Proposition | Primary Use Case |
|------------------------|-------------------|------------------------|------------------|
| **High-Performance Serving Engines** | vLLM, SGLang | Max throughput/low latency for data center GPU deployments; support for cutting-edge models, parallelism, and large context | Cloud/on-prem production LLM serving, enterprise inference endpoints |
| **Local/Edge Runtime** | llama.cpp, Ollama | Broad hardware portability (CPU, GPU, NPU, mobile) and lightweight deployment; minimal dependencies | Edge devices, local development, consumer desktop AI |
| **LLM Gateway / Router** | LiteLLM | Provider-agnostic API abstraction, cost management, rate limiting, and multi-tenant governance | Orchestration across multiple LLM providers, cost optimization, access control |
| **Fine-Tuning + Serving Tooling** | Unsloth | Accelerated quantized fine-tuning (LoRA/QLoRA) and integrated local serving via Studio UI | Custom model fine-tuning, domain-specific model development, end-to-end local AI workflows |

### Key Differentiation Notes
- vLLM prioritizes NVIDIA ecosystem leadership and production robustness, while SGLang bets on multi-hardware support and next-gen parallelism (DCP, pipeline parallelism) to differentiate.
- Ollama wraps llama.cpp with a user-friendly distribution layer and cloud service, targeting non-expert users and desktop AI, while llama.cpp focuses on raw kernel and hardware portability.
- Unsloth is unique in bridging training optimization and end-user serving, with its Studio UI evolving into a full local AI platform rather than just a fine-tuning library.

---

## 6. Trend Signals
1. **DeepSeek/Qwen ecosystem dominance**: All six projects dedicated major resources to optimizing DeepSeek-V4.1 and Qwen3.x family models, signaling a shift away from OpenAI-architecture dominance toward open Chinese MoE/reasoning models as the de facto production baseline. Application developers should prioritize these model families for cost/performance leadership in 2026 Q4.
2. **KV cache as the next performance battleground**: MXFP8, NVFP4, and 2–4 bit quantized KV caches are moving from prototypes to production, with context length scaling and memory reduction now the highest-impact optimization vector. Teams planning long-context agent deployments should align their hardware roadmaps with SM100/SM120 GPUs to unlock these gains.
3. **Multi-hardware fragmentation accelerates**: SGLang and llama.cpp are expanding support for NPU, MLU, AMD ROCm, Intel XPU, and Vulkan backends faster than vLLM, reflecting growing demand for non-NVIDIA inference alternatives. Infrastructure teams with multi-cloud or edge deployments should evaluate SGLang for its broader hardware support matrix.
4. **Rust migration hits the gateway layer**: LiteLLM’s active Rust rewrite follows a broader industry trend of moving performance-critical infrastructure (serving, routing) away from Python to eliminate GIL and overhead bottlenecks. Gateway users should plan for long-term migration to Rust-based alternatives for lower latency and higher throughput.
5. **Agent workloads expose stability gaps**: High-severity bugs in tool call parsing, prefix cache corruption, and deadlocks under concurrent load are widespread across serving engines, all triggered by agentic multi-turn and reasoning model workloads. Application developers building production agents should allocate 20–30% of engineering time to stability validation and workaround implementation for the next 2–3 quarters.
6. **Training-serving convergence**: Unsloth’s expansion into multimodal serving and vLLM/SGLang’s growing fine-tuning ecosystem integrations point to a future where unified training+serving platforms replace disjointed toolchains. Technical decision-makers should prioritize vendors with end-to-end stacks to reduce operational complexity.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest | 2026-09-28
---

## 1. Last 7 Days' Highlights
This week, the vLLM project saw the launch of v0.30.0 with 762 commits from 315 contributors, introducing new high-performance model support and MXFP8 KV cache optimization for SM100 GPUs. Active development focused on resolving correctness and deadlock bugs across V1/V2 engines, expanding hardware compatibility (Intel XPU, AMD ROCm, Vulkan), and refining observability and frontend robustness for production deployments.

---

## 2. Releases & Breaking Changes
- **v0.30.0** – Major release with 762 commits from 315 contributors (104 new contributors). Key updates include new model support, FlashMLA V4.1-powered full MXFP8 KV cache for SM100, and async Engram prefetching.
  - Source: [vllm-project/vllm Releases](https://github.com/vllm-project/vllm/releases/tag/v0.30.0)

---

## 3. New Model & Hardware Support
### Models
- **DeepSeek-V4.1-Flash** – Added in v0.30.0 with full MXFP8 KV cache support via FlashMLA V4.1 on SM100.
  - PRs: [#56214](https://github.com/vllm-project/vllm/pull/56214), [#56228](https://github.com/vllm-project/vllm/pull/56228), [#56208](https://github.com/vllm-project/vllm/pull/56208), [#56893](https://github.com/vllm-project/vllm/pull/56893)
- **Glm4MoeLitePlusPlus (ZEDA-GLM-4.7-Flash-Dynamic)** – Dynamic MoE variant of GLM-4.7-Flash with Zero-Expert architecture.
  - PR: [#57274](https://github.com/vllm-project/vllm/pull/57274)
- **DeepGEMM Mega-mHC** – New model architecture support in v0.30.0.
  - PR: [#56962](https://github.com/vllm-project/vllm/pull/56962)

### Hardware & Backends
- **Intel XPU** – Fixed `test_mamba_prefix_cache` to be block-size agnostic, resolving GDN backend block size alignment issues.
  - PR: [#58269](https://github.com/vllm-project/vllm/pull/58269)
- **AMD ROCm** – Enabled fused QK-norm+RoPE+gate Triton kernel for Qwen3-Next/Qwen3.5, previously CUDA-only.
  - PR: [#51406](https://github.com/vllm-project/vllm/pull/51406)
- **Vulkan support (feature request)** – Community request to add Vulkan backend for broader commodity hardware compatibility, 35 👍.
  - Issue: [#21182](https://github.com/vllm-project/vllm/issues/21182)

### Quantization
- **NVFP4 KV cache on SM120** – Working prototype achieves 245K context on RTX 5090 with FlashInfer kernels; vLLM integration is in progress.
  - Issue: [#49011](https://github.com/vllm-project/vllm/issues/49011)
- **INT8 KV cache quantization (feature request)** – Request to add INT8 KV cache support beyond current FP8 options, 12 👍.
  - Issue: [#33480](https://github.com/vllm-project/vllm/issues/33480)
- **8-bit asymmetric GPTQ MoE fix** – Corrected zero-point shard split for `moe_wna16` W13 weights.
  - PR: [#58950](https://github.com/vllm-project/vllm/pull/58950)

---

## 4. Performance & Optimization
- **KimiViT QK RoPE fusion** – Fused per-layer QK RoPE into a single in-place kernel, delivering **~29.6x speedup** (225.3µs → 7.6µs for 256 tokens on GB300).
  - PR: [#58651](https://github.com/vllm-project/vllm/pull/58651)
- **Minimax-M3 encoder CUDA graph support** – Reduces kernel launch overhead for multimodal encoder paths.
  - PR: [#58673](https://github.com/vllm-project/vllm/pull/58673)
- **GDN decode fused CUDA kernel** – Routes non-speculative GDN decode through the fused CUDA kernel (previously only used for MTP speculative decoding), eliminating per-layer Conv1D + Triton recurrent + RMSNorm overhead.
  - PR: [#53463](https://github.com/vllm-project/vllm/pull/53463)
- **Qwen3.5 GDN 6-way in-proj fusion** – Merges `in_proj_qkvz` and `in_proj_ba` into a single 6-way `MergedColumnParallelLinear` to reduce memory traffic.
  - PR: [#41457](https://github.com/vllm-project/vllm/pull/41457)
- **MoE bitmatrix tile optimization** – Reduced `pack_bitmatrix` tile size from 512 to 32 rows, lowering per-kernel launch overhead while maintaining bit-identical output.
  - PR: [#58546](https://github.com/vllm-project/vllm/pull/58546)
- **Batch Invariant optimization (tracking issue)** – Ongoing work to fully implement deterministic inference with batch invariance, 21 👍, 97 comments.
  - Issue: [#27433](https://github.com/vllm-project/vllm/issues/27433)
- **Dynamic PDL enablement (feature request)** – Hopper/Blackwell low-latency optimization via undocumented PDL flags for both TRT-LLM and TorchInductor paths.
  - Issue: [#40543](https://github.com/vllm-project/vllm/issues/40543)

---

## 5. Stability & Regressions
### High Severity
1. **V1 engine core deadlock under concurrent load** – Deadlock occurs with fp8 + prefix caching + Qwen3.5 under high concurrency; no fix PR linked yet.
   - Issue: [#37729](https://github.com/vllm-project/vllm/issues/37729)
2. **GLM-5.3-Flash long-decode degeneration** – W4A16 quantized GLM-5.3-Flash produces degraded output after accumulated reasoning decode on B300.
   - Issue: [#56868](https://github.com/vllm-project/vllm/issues/56868)
3. **Hybrid GDN prefix cache corruption with MTP** – Prefix caching + MTP corrupts output on hybrid Mamba/GDN models (Qwen3.8-27B); fix PR in progress.
   - Issue: [#53912](https://github.com/vllm-project/vllm/issues/53912) | Fix PR: [#52244](https://github.com/vllm-project/vllm/pull/52244)
4. **Mamba-2 Triton kernel illegal instruction on SM121** – Crashes on DGX Spark (GB10) in async mode, requires `CUDA_LAUNCH_BLOCKING=1` as workaround.
   - Issue: [#37431](https://github.com/vllm-project/vllm/issues/37431)

### Medium Severity
1. **Batch invariance broken with sequence parallelism/async TP** – Fixed in v0.30.0 cycle.
   - Issue: [#56370](https://github.com/vllm-project/vllm/issues/56370)
2. **TurboQuant + hybrid MoE broken on Ampere (SM80-86)** – 13 patches available for Qwen3.6-35B-A3B FP8 with `k8v4` KV cache.
   - Issue: [#40124](https://github.com/vllm-project/vllm/issues/40124)
3. **API-key guard gap** – `--api-key` only protected 4 hardcoded prefixes, leaving 20+ registered routes unprotected; fix PR submitted.
   - PR: [#58948](https://github.com/vllm-project/vllm/pull/58948)
4. **Engine/worker watchdog monitoring** – New watchdog PR to capture stack traces on hangs, addressing deadlock debuggability.
   - PR: [#55700](https://github.com/vllm-project/vllm/pull/55700)

---

## 6. What This Means for Application Developers
- **Upgrading to v0.30.0** is recommended for SM100 users running DeepSeek-V4.1-Flash, as full MXFP8 KV cache support will significantly increase effective context length and reduce memory overhead.
- **Production teams using GLM-5.3-Flash** should avoid long multi-turn agentic workloads on v0.28.1 until the degeneration bug is resolved; monitor issue [#56868](https://github.com/vllm-project/vllm/issues/56868) for fixes.
- **V1 engine deployments with fp8 + prefix caching + Qwen3.5** should validate concurrent load patterns for deadlock risk; the upcoming watchdog feature (PR [#55700](https://github.com/vllm-project/vllm/pull/55700)) will simplify hang diagnosis.
- **Multi-modal serving teams** will see meaningful latency improvements from KimiViT RoPE fusion and Minimax-M3 encoder CUDA graphs, especially for high-throughput image+text workloads.
- **Security note**: If you use `--api-key` for endpoint protection, apply the fix in PR [#58948](https://github.com/vllm-project/vllm/pull/58948) to ensure all registered routes are properly authenticated.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest | 2026-09-28

---

## 1. Last 7 Days' Highlights
This week SGLang advanced multi-hardware and next-gen parallelism capabilities, with active development on decode context parallelism (DCP/Helix) for NPU and AMD ROCm platforms, plus major kernel optimizations for diffusion workloads. CI stability remained a priority, with dedicated tracking of flaky tests, and core infrastructure work progressed on fault tolerance, weight loading refactoring, and Rust migration of non-GPU processes. The project also expanded model support for new diffusion and video generation architectures alongside DeepSeek V4.1 ecosystem optimizations.

---

## 2. Releases & Breaking Changes
No official releases were published in the last 7 days. No breaking API or configuration changes were announced.

---

## 3. New Model & Hardware Support
| Category | Details | Link |
|----------|---------|------|
| Diffusion/Video | Native support for SANA-Video 2.0 (text-to-video and text-image-to-video) added, including hybrid gated linear/softmax transformer with grouped Attention Residuals. | [#41492](https://github.com/sgl-project/sglang/pull/41492) |
| AMD/ROCm | DeepSeek-V4.1 serving enabled on AMD gfx950 (MI350X) with DSpark speculative decoding, following CUDA dsv4.1 layout patterns. | [#41308](https://github.com/sgl-project/sglang/pull/41308) |
| NPU | Decode context parallel (DCP) support added for DSA-based models on NPU hardware. | [#37787](https://github.com/sgl-project/sglang/pull/37787) |
| NPU/HiCache | DeepSeek V4 NPU HiCache L3 support added via `npu_memcache` backend, building on upstream L2 and MemCache implementations. | [#39784](https://github.com/sgl-project/sglang/pull/39784) |
| MLU (Cambricon) | In-tree MLU backend prototype (POC) added, initially targeting dense MHA/GQA text generation with Qwen3-8B validation. | [#26898](https://github.com/sgl-project/sglang/pull/26898) |
| Intel XPU | Compressed-tensors W4A16 quantization enabled on XPU by reusing existing torch int4pack paths. | [#40828](https://github.com/sgl-project/sglang/pull/40828) |
| Model Support | SenseNova-U1 / U1.5 feature and performance tracking ongoing, aligned with official reference implementation. | [#37742](https://github.com/sgl-project/sglang/issues/37742) |

---

## 4. Performance & Optimization
| Area | Details | Link |
|------|---------|------|
| Diffusion Kernels | Qwen-Image 2.1 VAE decoder fast paths: bit-exact norm/bias fusions enabled by default, with channels_last decode under `quality=extra-high`. | [#41340](https://github.com/sgl-project/sglang/pull/41340) |
| Diffusion Kernels | Qwen-Image 2.1 transformer block optimization: fused Q/K RMSNorm + RoPE + KV packing into one CUDA kernel, plus packed QKV GEMM. Profiling shows transformer blocks previously spent 81% time on GEMM, 14% on attention, 5% on overhead. | [#41339](https://github.com/sgl-project/sglang/pull/41339) |
| MoE Kernel | Fused MoE Triton down-projection config added for Qwen3.8-Flash-Next FP8 on NVIDIA H200 NVL (TP2+EP2, E=256, N=640, fp8_w8a8, block 128×128). | [#39153](https://github.com/sgl-project/sglang/pull/39153) |
| Decode Parallelism | Helix/DCP roadmap progress: A2A + FlashInfer-MNNVL comm backends and query replication completed; `fi_a2a` / `a2a` set as default `--dcp-comm-backend` across models. Fused fi_a2a with LSE combine remains in progress. | [#29736](https://github.com/sgl-project/sglang/issues/29736) |
| Pipeline Parallelism | Pipeline parallelism roadmap advancing, targeting reduced TTFT for long context (e.g., 1M input tokens) and improved throughput. | [#11857](https://github.com/sgl-project/sglang/issues/11857) |
| dLLM Serving | Diffusion LLM serving roadmap continues work on block-diffusion serving and Jev-style diffusion LLM optimizations. | [#39499](https://github.com/sgl-project/sglang/issues/39499) |
| Simulator | SGLang Simulator project in development, enabling performance exploration across models, hardware, configurations, and cache strategies without real GPU clusters. Has 17 community 👍. | [#21891](https://github.com/sgl-project/sglang/issues/21891) |
| Free-Threaded Python | Exploration of CPython 3.14t (nogil) support to eliminate GIL bottlenecks in Python-side serving paths. Has 12 community 👍. | [#22889](https://github.com/sgl-project/sglang/issues/22889) |
| Apple Silicon | MoE performance optimization work ongoing for Apple Silicon devices. | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| KDA Prefill | FlashInfer prefill checkpoint integration for KDA (key-value cache with dynamic allocation), enabling state save/restore at chunk boundaries for radix prefix caching. | [#41400](https://github.com/sgl-project/sglang/pull/41400) |

---

## 5. Stability & Regressions
### High Severity
| Issue | Description | Status |
|-------|-------------|--------|
| CUDA Coredump Tracker | Auto-collected CUDA coredump events from PR tests, tracking persistent GPU crashes across CI runs. 320 comments to date. | Open, ongoing monitoring: [#26340](https://github.com/sgl-project/sglang/issues/26340) |
| HiCache Decode Offload Race Condition | Decode-side HiCache offload copies KV to host asynchronously; retraction can return device pages before copy completes, leading to data corruption. | Fix PR open: [#30899](https://github.com/sgl-project/sglang/pull/30899) |
| LMCache Session Leak | Aborted LMCache sessions can leak because cache request finalization is tied to `cache_finished_req`. | Open, no fix yet: [#40360](https://github.com/sgl-project/sglang/issues/40360) |
| Disconnected Streaming Client Zombie Request | Streaming client disconnection leaves zombie requests that decode to `max_tokens` and flood "state was deleted in TokenizerManager" logs. Regression from #34160 revert. | Open, no fix yet: [#36333](https://github.com/sgl-project/sglang/issues/36333) |

### Medium Severity
| Issue | Description | Status |
|-------|-------------|--------|
| GLM-5.3-Flash FP8 KV Cache Incompatibility | GLM-5.3-Flash cannot use FP8 KV cache: `index_kpool > 1` excludes `flashmla_kv`, and no CUDA DSA backend supports bf16-query × fp8-KV. Works on GLM-5.2 with same hardware. | Open: [#36830](https://github.com/sgl-project/sglang/issues/36830) |
| FlashInfer Backend Unsupported on Blackwell GPUs | FlashInfer backend fails to run on NVIDIA Blackwell architecture GPUs. | Open: [#35080](https://github.com/sgl-project/sglang/issues/35080) |
| Qwen3.8-Flash-Next Tool Parser Loop | Qwen3.8-Flash-Next thinking mode + qwen3_coder tool parser loops on token ID 0. | Closed (resolved): [#36537](https://github.com/sgl-project/sglang/issues/36537) |
| GLM47 Streaming Parser Drops Tool Calls | Streaming parser with `tool_call_parser=glm47` drops buffered tool calls when a single delta contains multiple `<tool_call>` blocks. | Fix PR open: [#41493](https://github.com/sgl-project/sglang/pull/41493) |
| Speculative Decoding + torch_native Attention Crash | Combining `--speculative-algorithm NGRAM` with `--attention-backend torch_native` causes opaque startup crash. | Fix PR open (arg validation): [#36444](https://github.com/sgl-project/sglang/pull/36444) |

### CI/Infrastructure
| Item | Details | Link |
|------|---------|------|
| CI Test Tracking | 2 broken tests, 6 flaky tests, 1104 recently fixed as of 2026-09-28 auto-update. | [#17050](https://github.com/sgl-project/sglang/issues/17050) |
| XPU NGRAM Corpus Test Failure | `test_ngram_corpus` consistently fails on XPU; fix disables test on XPU and adds dynamic XPU test detection. | Closed (merged): [#41075](https://github.com/sgl-project/sglang/pull/41075) |
| Weight Loading Refactor | RFC to refactor weight loading code across 165 model files, reducing per-file `load_weights` boilerplate (50-150 lines each). | Open RFC: [#24703](https://github.com/sgl-project/sglang/issues/24703) |
| IPC Msgpack Migration | Full IPC migration from pickle to msgpack completed; PickleWrapper workarounds eliminated, default flipped. | Closed: [#29465](https://github.com/sgl-project/sglang/issues/29465) |

---

## 6. What This Means for Application Developers
- **Multi-hardware deployment flexibility**: Teams targeting AMD MI350X, Intel XPU, Cambricon MLU, or NPU platforms gain expanded model and feature support, particularly for DeepSeek V4.1 family workloads.
- **Diffusion serving efficiency gains**: Qwen-Image 2.1 and SANA-Video 2.0 users can expect notably lower latency from fused kernel optimizations as these PRs land in main.
- **Stability watch items**: Teams using LMCache or long-running streaming endpoints should monitor the open cache leak and zombie request fixes; both can cause memory bloat or log spam in production.
- **Roadmap alignment**: DCP/Helix parallelism, pipeline parallelism, and the SGLang Simulator are maturing rapidly — teams with long-context or high-throughput requirements should evaluate these upcoming capabilities for 2026 Q4 planning.
- **Operational improvements**: The upcoming Prometheus KV cache usage gauge will ease monitoring for teams migrating from vLLM, and the fault tolerance framework will enable better integration with upper-layer serving orchestration systems.

---
*Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) | Generated 2026-09-28*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest (2026-09-21 to 2026-09-28)
## 1. Last 7 Days' Highlights
This week saw 10 tagged builds (b11213–b11223) focused on server-side reranker support, cross-backend kernel optimizations, and parameter parsing robustness. The most impactful change is native support for causal LLM-based rerankers (e.g. Qwen3/Qwen3-VL) in the server API, while performance work targeted CUDA, HIP, SYCL, Vulkan, and AVX512-FP16 backends. Stability work centered on multi-GPU correctness, speculative decoding output divergence, and model loading regressions.

## 2. Releases & Breaking Changes
All builds are pre-release `0.3.0-dev`; no major API breakages were reported, but two usability/behavior changes are notable:
- **b11222**: [Refactored parameter parsing side effects](https://github.com/ggml-org/llama.cpp/pull/29537) — `--rpc` is now registered unconditionally, with `llama_supports_rpc()` called only in the flag handler, and server initialization logs print after argument parsing completes.
- **b11221**: [`string_split<T>` now throws on invalid values](https://github.com/ggml-org/llama.cpp/pull/29518) instead of failing silently, improving error visibility for malformed CLI inputs.
- **b11212**: [Grammar errors now throw instead of abort](https://github.com/ggml-org/llama.cpp/pull/29516) when `llguidance` is not available, replacing hard crashes with catchable exceptions.

## 3. New Model & Hardware Support
### Model Support
- **Server reranker for causal LLMs**: [PR #28876 (merged in b11223)](https://github.com/ggml-org/llama.cpp/pull/28876) adds RANK pooling batch splitting for causal LLM rerankers (Qwen3, Qwen3-VL), enabling rerank workloads on decoder-only models previously limited to cross-encoder architectures.
- **GLM-5.3-Flash (in progress)**: [PR #27773](https://github.com/ggml-org/llama.cpp/pull/27773) adds support for the 320B hybrid text/vision model with KDA linear layers and DSA attention, under active review.
- **Jinja dict builtin**: [PR #29477 (merged in b11218)](https://github.com/ggml-org/llama.cpp/pull/29477) adds Jinja template `dict` builtin support, expanding compatibility with complex chat templates.

### Hardware/Backend Support
- **IBM zDNN CI (in progress)**: [PR #29541](https://github.com/ggml-org/llama.cpp/pull/29541) adds zDNN backend build verification to CI (no test execution yet, pending z16+ runner hardware).
- **XDNA backend feature request**: [Issue #21725 (open, 35 👍)](https://github.com/ggml-org/llama.cpp/issues/21725) has growing community demand for AMD XDNA NPU support.

### Quantization Formats (in progress)
- **IQ2_NL / IQ3_NL quant types**: A set of stacked PRs ([#27322](https://github.com/ggml-org/llama.cpp/pull/27322), [#27324](https://github.com/ggml-org/llama.cpp/pull/27324), [#27325](https://github.com/ggml-org/llama.cpp/pull/27325), [#27983](https://github.com/ggml-org/llama.cpp/pull/27983)) adds 32-block I-quant variants for tensors with row lengths not divisible by 256, rolling out CPU → Metal → CUDA → Vulkan → SYCL support sequentially.

## 4. Performance & Optimization
### Merged Optimizations
- **CUDA FlashAttention tuning**: [PR #26289 (merged in b11215)](https://github.com/ggml-org/llama.cpp/pull/26289) optimizes fp16 tile FlashAttention configurations for head sizes 40–112.
- **HIP CDNA fattn-mma kernel**: [PR #28907 (merged in b11214)](https://github.com/ggml-org/llama.cpp/pull/28907) enables the fattn-mma kernel on CDNA GPUs for `dkq > 256` with large batch sizes, with CI adjusted to ignore expected spills for large MFMA kernels.
- **SYCL FWHT kernel expansion**: [PR #29243 (merged in b11216)](https://github.com/ggml-org/llama.cpp/pull/29243) extends FWHT support for block widths above 512 via Kronecker/Paley construction, covering 384/640/768/1280 block sizes.
- **OpenCL kernel loading refinement**: [PR #29503 (merged in b11217)](https://github.com/ggml-org/llama.cpp/pull/29503) tightens bin kernel loading conditions for better OpenCL compatibility.
- **Vulkan Adreno argsort fix**: [PR #29469 (merged in b11213)](https://github.com/ggml-org/llama.cpp/pull/29469) corrects argsort kernel selection for Qualcomm Adreno GPUs.

### In-Progress Optimizations
- **Vulkan GDN kernel tuning**: [PR #29476](https://github.com/ggml-org/llama.cpp/pull/29476) delivers 6.3% faster GDN ops on RTX 3090 and fixes severe Intel iGPU performance regressions.
- **AVX512-FP16 dot product accuracy**: [PR #29545](https://github.com/ggml-org/llama.cpp/pull/29545) accumulates f16 dot products in f32 to fix overflow, matching non-AVX512-FP16 logit output.
- **MoE host-memory expert offloading (feature request)**: [Issue #26448 (open, 7 👍)](https://github.com/ggml-org/llama.cpp/issues/26448) proposes PCIe DMA-based direct expert weight access from host RAM, with measured results showing 23GB MoE models running on 1.6GB VRAM and 81GB Qwen3-235B on 8GB cards.
- **Disk-based context checkpoint offloading (feature request)**: [Issue #20697 (open, 57 👍)](https://github.com/ggml-org/llama.cpp/issues/20697) requests `--cache-disk` support for offloading KV cache checkpoints to storage, the highest-upvoted open enhancement this week.

## 5. Stability & Regressions
### Critical (Crashes / Data Corruption)
1. **SYCL multi-GPU tensor split crash**: [Issue #27198 (open)](https://github.com/ggml-org/llama.cpp/issues/27198) — `--split-mode tensor` triggers `dev2dev_memcpy DEVICE_LOST` on dual Intel Arc Pro B70 GPUs despite working P2P, 31 comments. No fix PR merged yet.
2. **Qwen 3.5 checkpoint loading crash on AMD GPUs**: [Issue #20176 (open)](https://github.com/ggml-org/llama.cpp/issues/20176) — Loading saved KV checkpoints crashes on ROCm, exposed by PR #20087, 18 comments. No fix PR linked.
3. **Gemma4 large image server crash**: [Issue #28954 (referenced in PR #29543)](https://github.com/ggml-org/llama.cpp/pull/29543) — Images >1.2MP crash the server due to non-causal image attention requiring full-batch processing. [PR #29543](https://github.com/ggml-org/llama.cpp/pull/29543) adds clean failure handling as a partial mitigation.
4. **Gemma4 MTP draft model loading regression**: [Issue #24795 (open, 11 👍)](https://github.com/ggml-org/llama.cpp/issues/24795) — "invalid vector subscript" crash when loading MTP draft models, broken between b9553 and b9702, 11 comments. No fix PR merged.

### High (Correctness / Output Divergence)
1. **Speculative decoding output divergence on quantized targets**: [Issue #25618 (open)](https://github.com/ggml-org/llama.cpp/issues/25618) — draft-model speculative decoding produces greedy output that diverges from vanilla runs on Q4_K_M quantized models (matches on bf16), 27 comments. No fix PR linked.
2. **HIP gfx1151 long prompt logit corruption**: [Issue #28211 (open)](https://github.com/ggml-org/llama.cpp/issues/28211) — Prompts longer than `n_ubatch` produce wrong logits (no crash) on RDNA3 Strix Halo APUs, 12 comments. No fix PR linked.
3. **Qwen3.8-27B long context throughput collapse**: [Issue #27623 (open)](https://github.com/ggml-org/llama.cpp/issues/27623) — Decode throughput drops ~25x at context positions >80K for the hybrid Gated DeltaNet model, while prompt processing remains fast, 17 comments. No fix PR linked.

### Medium (Performance Regressions / Usability)
1. **Vulkan RDNA3 prompt processing slowdown post-b10780**: [Issue #28752 (open, 2 👍)](https://github.com/ggml-org/llama.cpp/issues/28752) — Severe prompt processing speed drop on Vulkan + RDNA3 GPUs after build 10780, 14 comments. [Vulkan GDN tuning PR #29476](https://github.com/ggml-org/llama.cpp/pull/29476) may partially address this.
2. **draft-mtp multi-GPU prompt processing slowdown**: [Issue #27428 (open, 2 👍)](https://github.com/ggml-org/llama.cpp/issues/27428) — Multi-GPU layer split roughly halves prompt processing speed with draft-MTP (single GPU works normally), 21 comments. No fix PR linked.
3. **CUDA non-contiguous ROLL operation support**: [PR #29547](https://github.com/ggml-org/llama.cpp/pull/29547) fixes ROLL operation failures on non-contiguous tensors in the CUDA backend, currently in review.

## 6. What This Means for Application Developers
- **Rerank workloads can now use decoder-only LLMs**: The [new causal LLM reranker support in the server API](https://github.com/ggml-org/llama.cpp/pull/28876) lets you deploy Qwen3/Qwen3-VL rerankers alongside chat models without separate cross-encoder infrastructure, simplifying retrieval-augmented generation (RAG) stacks built on llama.cpp.
- **Better error handling for edge cases**: Parameter parsing and grammar failures now throw instead of aborting, making it easier to build robust error handling into your application layer without catching process crashes.
- **Wait to upgrade if you rely on MTP + multi-GPU or long-context DeltaNet models**: Draft-MTP multi-GPU slowdowns and Qwen3.8-27B 80K+ context throughput collapses are unresolved; hold off on upgrading to recent builds for these workloads until fixes land.
- **Experimental quant types for edge-case tensor shapes**: The upcoming IQ2_NL/IQ3_NL quant formats will eliminate suboptimal fallback quantization for models with non-256-aligned tensor rows, reducing quality loss for niche architectures.
- **OpenAI Responses API support is not prioritized**: [Issue #19138 (closed, 44 👍)](https://github.com/ggml-org/llama.cpp/issues/19138) for `/v1/responses` endpoint support was closed as stale, so applications relying on this API will need to implement translation layers client-side.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest | 2026-09-28
Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 1. Last 7 Days' Highlights
Ollama advanced its Apple Silicon MLX roadmap with the v0.4.0-rc0 pre-release, which enables default MLX acceleration for supported model architectures on Mac devices, while v0.34.4 delivered targeted fixes for structured output reliability and macOS app stability. Cloud service reliability emerged as the top user pain point, with a widely reported 95% failure rate across Ollama Cloud Pro models and multiple vision/availability bugs in cloud-hosted models. In parallel, a wave of parser, memory accounting, and tool call fixes landed in active PRs, targeting correctness for Qwen, Gemma 4, and reasoning model workloads.

---

## 2. Releases & Breaking Changes
### v0.4.0-rc0 (Pre-release)
- **Core change**: On Apple Silicon, model architectures supported by the MLX runtime now run on MLX by default, no manual configuration required.
- Example workflow:
  ```
  ollama pull qwen3.8
  ollama run qwen3.8
  ```
- Note: The release is in active pre-release testing; users should expect edge-case stability issues.
- Link: [ollama/ollama Releases (v0.4.0-rc0)](https://github.com/ollama/ollama/releases/tag/v0.4.0-rc0)

### v0.34.4 (Stable)
- **Key changes**:
  1. Structured outputs on reasoning/thinking models now execute in a single pass, improving speed and reliability.
  2. Fixed intermittent "model not found" errors for users with large local model libraries.
  3. Fixed macOS app unresponsiveness triggered when checking for running ChatGPT/Codex instances.
  4. Initial Qwen model compatibility improvements (full details truncated in release notes).
- Link: [ollama/ollama Releases (v0.34.4)](https://github.com/ollama/ollama/releases/tag/v0.34.4)

---

## 3. New Model & Hardware Support
### In Proposal / Active Development
1. **Intel SYCL/oneAPI GPU backend**
   - Feature request to add opt-in support for Intel Arc/Battlemage GPUs via ggml-sycl (llama.cpp’s existing SYCL backend), covering backend discovery, build enablement, runtime gating, device scheduling, and packaging.
   - Link: [Issue #16930](https://github.com/ollama/ollama/issues/16930)
2. **System 1 model support**
   - Request to add support for fast, lightweight "System 1" models including Kev and Laya, with a companion PR adding a `POST /v1/systemone` API for structured decision scoring (choice, noul, score outputs) using local Nimble/Tev models.
   - Issue link: [Issue #18594](https://github.com/ollama/ollama/issues/18594)
   - PR link: [PR #18606](https://github.com/ollama/ollama/pull/18606)
3. **Cloud model requests**
   - Qwen3.8 is the top requested cloud model for Pro/Max accounts, with 9 👍 votes.
   - Link: [Issue #17720](https://github.com/ollama/ollama/issues/17720)

### Compatibility Gaps Reported
1. **NVIDIA Blackwell (RTX 50-series) on Windows**: VRAM detection fails (reports 0 B VRAM, falls back to CPU) on driver 616.94.
   - Link: [Issue #18581](https://github.com/ollama/ollama/issues/18581)
2. **Intel UHD iGPU (0x4626) on Windows**: Vulkan backend fails to detect the iGPU, even though Windows Vulkan recognizes the device.
   - Link: [Issue #18672](https://github.com/ollama/ollama/issues/18672)

---

## 4. Performance & Optimization
### Active Fixes & Optimizations
1. **KV cache memory accounting fix** (PR in progress)
   - Fixes `PredictServerVRAM` KV cache size calculation to match `GraphSize` accounting, resolving Qwen model loading issues and VRAM overestimation.
   - Link: [PR #17615](https://github.com/ollama/ollama/pull/17615)
2. **MLX prefix cache memory tuning**
   - Reported issue: Hard-coded 8 GiB MLX prefix cache budget causes heavy swap on 32 GB Apple Silicon devices during agent workloads (e.g., `qwen3.8:27b-mlx` workflows).
   - Link: [Issue #18131](https://github.com/ollama/ollama/issues/18131)
3. **Vision model regression (0.31.2)**
   - Regression: `gemma4:31b` memory estimate inflated by ~1.2 GiB in v0.31.2, causing the model to spill from VRAM to system memory and drop throughput from 33.8 tok/s to 4.7 tok/s (7x slowdown).
   - Link: [Issue #17099](https://github.com/ollama/ollama/issues/17099)
4. **MLX nvfp4 performance degradation**
   - Issue: nvfp4 quantized models on macOS run extremely slowly under memory pressure, with prefill stalling at `processed=total-1` for minutes under sustained single-slot load (only recoverable via runner SIGTERM).
   - Slowdown reference: Models that took ~2 minutes per prompt in v0.20.0 now take far longer.
   - Links: [Issue #16030](https://github.com/ollama/ollama/issues/16030), [Issue #18505](https://github.com/ollama/ollama/issues/18505)

---

## 5. Stability & Regressions
Ranked by severity (impact + user volume):

| Severity | Issue | Details | Fix Status |
|----------|-------|---------|------------|
| Critical | Ollama Cloud Pro 95% failure rate | All cloud models (glm-5.1, kimi-k2.5, qwen3.5, deepseek-v3.2, etc.) fail nearly universally for Pro subscribers, rendering the service unusable. 53 comments, 20 👍. | Open, no fix PR linked |
| Critical | CUDA illegal memory access on RTX 5090 (Cohere MoE) | Consistent llama-server crash during prompt evaluation for Cohere MoE models on Windows + RTX 5090, exit status 0xc0000409. | Open, no fix PR linked |
| Critical | llama-server wedge on full cache hit (0.34.4, CUDA/Linux) | After a full-cache-hit task, the server wedges completely; all subsequent requests to that model hang until model unload. Reproduced on RTX 5060 Ti. | Open, no fix PR linked |
| High | Qwen3.8 "no user query found" 500 error | Chat streaming fails with 500 error during tool call loops for Qwen3.8 with 205k context. 47 comments, 27 👍. | Open; related parser fix PRs in progress (see below) |
| High | GPT-OSS tool call completion failure | Model stops and marks tool calls as complete without executing them, when used with open-webui. 40 comments. | Open |
| High | DeepSeek-v4.1-flash cloud vision silently drops images | Model advertises `vision` capability but ignores all image input, no error raised. | Open |
| High | Anthropic-compat endpoint system message hoisting | System-role messages inside the `messages` array are merged into the top system block, breaking prefix cache efficiency for Claude Code workloads. | Open |
| Medium | macOS GUI 60s silent timeout | Long document processing fails with no GUI notification after exactly 60s on macOS app (v0.34.0). | Open |
| Medium | `typical_p` parameter removed, breaking existing clients | Clients that cannot omit `typical_p` (e.g., SillyTavern) fail after the parameter was dropped. | Open |
| Medium | MLX pull path doesn’t detect disk full | Model pull fails with opaque R2 storage errors instead of a clear "disk full" message. | Open |
| Medium | `OLLAMA_GPU_OVERHEAD` ignored by llama-server backend | VRAM overhead reservation does not apply to llama-server runner models, causing OOM/placement errors. | Open |

### Related Fix PRs (In Progress)
1. **Qwen/Gemma parser robustness fixes** (multiple PRs):
   - Fix Qwen3.5 tool calls opening before the thinking channel closes: [PR #18624](https://github.com/ollama/ollama/pull/18624)
   - Fix Qwen3-Coder dropped closing tags and parameter value rewriting: [PR #17914](https://github.com/ollama/ollama/pull/17914)
   - Fix Gemma 4 unmatched thinking close tag leaks: [PR #18288](https://github.com/ollama/ollama/pull/18288)
   - Fix Gemma 4 truncated tool call missing closing brace: [PR #17565](https://github.com/ollama/ollama/pull/17565)
   - Fix Gemma 4 tool call keys with spaces being silently dropped: [Issue #18390](https://github.com/ollama/ollama/issues/18390)
2. **Tool call identity preservation**: Fixes MCP namespace tool routing for Codex clients by preserving original `(namespace, name)` pairs.
   - Link: [PR #16263](https://github.com/ollama/ollama/pull/16263)
3. **Thinking budget bounds**: Adds per-request/per-model token budget for reasoning blocks, preventing infinite thinking loops that burn full context windows.
   - Link: [PR #17566](https://github.com/ollama/ollama/pull/17566)

---

## 6. What This Means for Application Developers
1. **Apple Silicon users can test MLX acceleration now**: The v0.4.0-rc0 pre-release enables zero-config MLX for supported models, but expect MLX-related edge cases (stalled prefill, memory pressure slowdowns, disk full detection gaps) — stick to v0.34.4 for production workloads on Mac.
2. **Avoid Ollama Cloud Pro for production agent workflows**: The 95% failure rate across cloud models, plus frequent "model unavailable" errors and silent vision input drops, make cloud hosting unreliable for mission-critical use cases for the time being.
3. **Test tool call workflows carefully with reasoning models**: Qwen, Gemma 4, and GPT-OSS all have active tool call correctness bugs (truncated calls, missing completions, parser edge cases). Validate agent workflows end-to-end with your model of choice, and track the linked parser fix PRs for resolution timelines.
4. **Prepare for Blackwell GPU teething issues**: RTX 50-series users on Windows should hold off on upgrading to v0.34.4 if they rely on CUDA acceleration, as VRAM detection is broken. Linux CUDA users should watch for the full-cache-hang bug in v0.34.4.
5. **Watch for breaking parameter changes**: `typical_p` has been removed — if your client hardcodes this parameter, add fallback logic to omit it for newer Ollama versions to avoid request failures.
6. **Reasoning models gain guardrails soon**: The upcoming thinking token budget feature will prevent runaway reasoning loops that waste compute and return empty responses, making reasoning models more viable for production agent use cases.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest | 2026-09-28
Data source: [BerriAI/litellm](https://github.com/BerriAI/litellm)

---

## 1. Last 7 Days' Highlights
This week’s activity centers on the active Rust-based LiteLLM Gateway rewrite, with 7 core PRs adding authentication, MCP support, Responses API compatibility, structured tracing, and virtual key storage contracts. On the production side, multiple high-severity bugs were reported including broken budget enforcement, router fallback null responses, and unauthenticated `/metrics` endpoints exposing multi-tenant PII, alongside cost-map fixes for Azure GPT-5.6 and Together AI deprecations.

---

## 2. Releases & Breaking Changes
Over the past 7 days, 10 versions were published, all carrying the new Cosign-signed Docker image verification standard introduced in commit `0112e53`:
- Stable: v1.98.1, v1.99.3, v1.99.4, v1.100.2, v1.100.3, v1.101.1, v1.101.2, v1.102.1
- Pre-release: v1.104.0-dev.1, v1.104.0-dev.2

All Docker images are now signed via Sigstore Cosign; users running production deployments should implement signature verification against the published public key per release notes.

---

## 3. New Model & Hardware Support
### Providers & Integrations
- **Tsubasa provider**: Added native routing, dashboard discovery, credential fields, and 2 public model aliases for chat completions. [PR #43502](https://github.com/BerriAI/litellm/pull/43502)
- **OCI GenAI realm resolution**: Fixed hardcoded `oraclecloud.com` endpoint to support government realms (e.g., `us-luke-1` under `oraclegovcloud.com`), resolved via compartment OCID parsing. [PR #43180](https://github.com/BerriAI/litellm/pull/43180)

### Cost Map Updates
- Azure GPT-5.6 Terra/Luna price correction: Fixed misaligned pricing that incorrectly applied OpenAI’s direct price cuts to Azure meters (Azure did not match the 20%/80% reductions). [Issue #36192](https://github.com/BerriAI/litellm/issues/36192)
- Together AI deprecation date sync: Updated `gpt-oss-20b`, `gemma-4-31B-it`, and `Salesforce/Llama-Rank-V1` deprecation dates to match official history tables. [PR #43509](https://github.com/BerriAI/litellm/pull/43509) | [PR #43507](https://github.com/BerriAI/litellm/pull/43507)
- OpenRouter price sync: Pulled latest pricing from OpenRouter’s models API to reflect current cheapest-endpoint routing costs. [PR #43506](https://github.com/BerriAI/litellm/pull/43506)

---

## 4. Performance & Optimization
### Routing & Cost Efficiency
- **Confidence-gated complexity router**: Jev route-down decisions now require classifier confidence thresholds, preventing unnecessary downgrades to cheaper models when confidence is low. [PR #42387](https://github.com/BerriAI/litellm/pull/42387)
- **Markov-based routing proposal**: Feature request for adaptive token cost arbitrage routing using real-time operational metrics via Markov decision processes. [Issue #31555](https://github.com/BerriAI/litellm/issues/31555)
- **Treat finish reason as failure**: New router policy knob to treat terminal stop_reasons (e.g., quota exhaustion signaled via HTTP 200) as deployment failures, triggering fallbacks and cooldowns. [Issue #38535](https://github.com/BerriAI/litellm/issues/38535)

### Rust Gateway Progress
- Native Python inference bridge: Added opt-in Python inference path via `python-bridge` routes for chat completions, responses, and inference endpoints. [PR #43465](https://github.com/BerriAI/litellm/pull/43465)
- Structured route lifecycle tracing: Instrumented audio transcription, chat completions, OCR, responses, and websocket paths for diagnostic observability. [PR #43466](https://github.com/BerriAI/litellm/pull/43466)

---

## 5. Stability & Regressions
### Critical (Production-Impacting)
1. **Router fallback returns null response body**: Non-streaming completions return HTTP 200 with `null` body after successful fallback on primary timeout; no fix PR merged yet. [Issue #43165](https://github.com/BerriAI/litellm/issues/43165)
2. **Budget enforcement bypass (v1.82.3)**: Key/user `max_budget` limits not enforced when spend exceeds configured value; regression in v1.82.3. [Issue #26672](https://github.com/BerriAI/litellm/issues/26672)
3. **Unauthenticated `/metrics` endpoint exposes PII**: Prometheus metrics endpoint defaults to no auth, leaking multi-tenant sensitive data in production deployments. Workaround: set `require_auth_for_metrics_endpoint: true`. [Issue #24530](https://github.com/BerriAI/litellm/issues/24530)

### High
4. **Free models blocked on budget exceed**: Zero-cost on-prem models trigger `ExceededBudget` error when user budget is exhausted; closed as resolved. [Issue #14004](https://github.com/BerriAI/litellm/issues/14004)
5. **v3 rate limiter double-counts team per-model limits**: Configured `model_per_team` RPM/TPM limits enforced at 50% of set value. [Issue #34140](https://github.com/BerriAI/litellm/issues/34140)
6. **Per-customer RPM limits stop applying after key cache**: Virtual key caching breaks per-customer `rpm_limit` enforcement on budget objects. [Issue #39713](https://github.com/BerriAI/litellm/issues/39713)
7. **Streaming responses billed at $0 for unknown model slugs**: Streamed requests with `provider_response_model` not in price map logged as zero spend; non-streaming requests cost correctly. [Issue #42161](https://github.com/BerriAI/litellm/issues/42161)

### Fixes In Progress / Merged
- **DashScope image generation params fix**: Lifted `extra_body` fields to top-level `parameters` so `watermark`, `negative_prompt`, `n`, and `size` are properly passed to DashScope. [PR #43208](https://github.com/BerriAI/litellm/pull/43208)
- **Stream failure logging fix**: Log text completion streams that fail before the first byte, fixing missing failure metrics and cooldown triggers. [PR #43505](https://github.com/BerriAI/litellm/pull/43505)
- **Anthropic union tool schema fix**: Fixed `sanitize_input_schema_for_anthropic` dropping root-level `anyOf`/`$ref` for union types. [Issue #43157](https://github.com/BerriAI/litellm/issues/43157)
- **Mutable default argument bugs fixed**: Resolved 180 B006 violations across the codebase via ruff enforcement. [PR #30940](https://github.com/BerriAI/litellm/pull/30940)

---

## 6. What This Means for Application Developers
1. **Security priority action**: Enable `require_auth_for_metrics_endpoint: true` immediately on all production LiteLLM Proxy deployments to prevent leaking multi-tenant usage data via the unauthenticated `/metrics` endpoint.
2. **Budget reliability caveat**: If you rely on `max_budget` enforcement for API keys or users, test your deployment thoroughly — two independent budget-related bugs (bypass for paid models, false blocks for free models) were active in recent versions.
3. **Cost accuracy watch**: Verify billing for streaming requests if you use custom model slugs or dated Anthropic builds; 83% of streaming billable calls were logged as zero spend in one reported case.
4. **Rust gateway preview**: The Rust-based LiteLLM Gateway is rapidly gaining core functionality (auth, MCP, Responses API, tracing) — plan for a future migration if you need lower-latency inference routing, as the Python proxy will likely be deprecated long-term.
5. **Langfuse SDK upgrade support**: Langfuse v4 SDK compatibility is now in progress, with explicit requests from the Langfuse team to support v4 OTel ingestion; expect official support in upcoming stable releases. [Issue #24123](https://github.com/BerriAI/litellm/issues/24123) | [Issue #33383](https://github.com/BerriAI/litellm/issues/33383)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-09-28
---

## 1. Last 7 Days' Highlights
This week, Unsloth rolled out support for local Qwen-Image-2.1 deployment, custom Agent Skills, and 2x faster reasoning block inference across 4 consecutive beta releases, paired with prebuilt CUDA 13 wheels for Flash-Attention 2, Causal-Conv1D, and Mamba SSM. On the development front, multiple high-impact PRs are in progress to optimize FP8/LoRA training performance, add Kimi-K3 MXFP4 expert training support, and expand Studio UI capabilities including multi-model serving and a dedicated chat library tab. AMD hardware compatibility remained a top user concern, with multiple open issues tracking GPU detection, VRAM misallocation, and training failures across RDNA 3 and Strix Halo platforms.

---

## 2. Releases & Breaking Changes
| Release | Type | Key Changes |
|---------|------|-------------|
| [prebuilt-wheels-cu13](https://github.com/unslothai/unsloth/releases/tag/prebuilt-wheels-cu13) | Prebuilt binaries | Linux x86_64 CUDA 13 wheels for flash-attn 2.8.4, causal-conv1d 1.7.0, mamba-ssm 2.3.2.post1; compiled for PyTorch 2.13/2.14 + Python 3.13 |
| [v0.1.815-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.815-beta) / v0.1.814 / v0.1.813 / v0.1.812 | Beta releases | Local Qwen-Image-2.1 support, custom Agent Skills, improved chat/project management, 2x faster reasoning blocks (60 FPS vs 30 FPS), more reliable training, streamlined Linux installs/updates |

No breaking API changes were announced this week.

---

## 3. New Model & Hardware Support
### New Models
- **Qwen-Image-2.1**: Full local inference support via Unsloth Studio and core library; [official guide](https://unsloth.ai/docs/models/qwen-image-2.1) available ([v0.1.812-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta))
- **Kimi-K3 (in progress)**: PR to support training with packed MXFP4 experts that dequantize on-the-fly, eliminating full 16-bit weight copies ([PR #11750](https://github.com/unslothai/unsloth/pull/11750))
- **compressed-tensors INT4 checkpoints (in progress)**: Direct QLoRA training support for packed INT4/INT8 compressed-tensors format (W4A16/W8A16) without 16-bit checkpoint conversion; works with DeepSeek-V3 MoE remote code and Kimi-K2.7-Code ([PR #11537](https://github.com/unslothai/unsloth/pull/11537))

### Hardware & Backend
- **CUDA 13**: Prebuilt wheels for Flash-Attention 2, Causal-Conv1D, Mamba SSM on PyTorch 2.13/2.14 + Python 3.13 ([prebuilt-wheels-cu13](https://github.com/unslothai/unsloth/releases/tag/prebuilt-wheels-cu13))
- **MLX (in progress)**: TurboQuant KV cache quantization (4/3.5/3/2-bit) for MLX inference in Studio; memory panel MLX load estimation and context fitting ([PR #11170](https://github.com/unslothai/unsloth/pull/11170), [PR #10287](https://github.com/unslothai/unsloth/pull/10287))
- **Vulkan training (feature request)**: Request to add Vulkan-based LLM training/fine-tuning support for AMD hardware ([Issue #11184](https://github.com/unslothai/unsloth/issues/11184))
- **ROCm version flexibility (feature request)**: Request to support PyTorch builds for ROCm 7.14/10 and let users select ROCm versions ([Issue #9932](https://github.com/unslothai/unsloth/issues/9932))

---

## 4. Performance & Optimization
### Landed
- **Reasoning block speedup**: 2x throughput for reasoning blocks (60 FPS vs 30 FPS) in v0.1.812+ beta releases ([v0.1.812-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta))

### In Progress
- **Fused Triton NF4 dequant + GEMV**: Replaces bitsandbytes C kernel calls with native Triton implementations to fix stream safety issues, enable torch.compile tracing, and maintain bit-exact correctness ([PR #12113](https://github.com/unslothai/unsloth/pull/12113))
- **Block-FP8 LoRA training speedup**: 3.7-14.9x faster LoRA training on block-FP8 checkpoints across GPUs (RTX PRO 6000: 8.9x, L4: 14.9x, H100: 7.9x, B200: 3.7-6.5x) via eager FP8 linear execution and optimized 8-warp 128-row GEMM tiles ([PR #12027](https://github.com/unslothai/unsloth/pull/12027))
- **Rowwise FP8 fallback**: Automatic fallback from FBGEMM rowwise FP8 kernels on unsupported GPUs (RTX PRO 6000 / RTX 5090 / sm120) to avoid runtime failures ([PR #12098](https://github.com/unslothai/unsloth/pull/12098))
- **Multi-GPU layer split fix**: Explicitly emit `--split-mode layer` for manual multi-GPU layer placement to eliminate ambiguous default behavior ([PR #10770](https://github.com/unslothai/unsloth/pull/10770))

---

## 5. Stability & Regressions
Ranked by severity (user impact + comment volume):

| Severity | Issue | Status | Details | Fix PR / Notes |
|----------|-------|--------|---------|----------------|
| **High** | [Issue #4504: Fine-tuning uses more VRAM than advertised, causing OOMs on large models](https://github.com/unslothai/unsloth/issues/4504) | Open | 22 comments; reported in Unsloth Studio and core library, ChatML-formatted datasets trigger excess VRAM usage | No fix PR linked yet |
| **High** | [Issue #7449: AMD Strix Halo (Windows) loads model weights into system RAM instead of VRAM](https://github.com/unslothai/unsloth/issues/7449) | Open | 7 comments; GPU compute is utilized but VRAM remains unused, leading to high RAM usage and slower performance | No fix PR linked yet |
| **Medium** | [Issue #9792: AMD R9700 (Windows/Vulkan): Qwen3.8-27B V3 GGUF crashes after prefill](https://github.com/unslothai/unsloth/issues/9792) | Open | 6 comments; V2 GGUF revision works as a temporary workaround | No fix PR linked yet |
| **Medium** | [Issue #7371: Performance regression on Strix Halo + ROCm with prebuilt b10079](https://github.com/unslothai/unsloth/issues/7371) | Open | 5 comments; performance drop after automatic update to prebuilt b10079 | No fix PR linked yet |
| **Medium** | [Issue #8178: No Studio UI setting to cap GPU memory for training (only env var exists)](https://github.com/unslothai/unsloth/issues/8178) | Open | 4 comments; VRAM budget slider only applies to GGUF inference, not training | No fix PR linked yet |
| **Low** | [Issue #10769: Unsloth Desktop UI lag with large code blocks](https://github.com/unslothai/unsloth/issues/10769) | Open | 4 comments; interface lag on Windows 11 with RTX 4090 when viewing large code outputs | No fix PR linked yet |

---

## 6. What This Means for Application Developers
1. **Qwen-Image-2.1 is production-ready for local deployment**: You can now integrate multimodal vision-language capabilities into on-prem or edge applications without relying on cloud APIs, using Unsloth's optimized inference stack. Follow the [official guide](https://unsloth.ai/docs/models/qwen-image-2.1) to get started.
2. **Agent tooling is now extensible via custom Skills**: The new Agent Skills framework lets you package custom tools and workflows for LLM agents, streamlining the development of domain-specific agent applications on top of Unsloth Studio.
3. **AMD hardware users should expect ongoing compatibility work**: Multiple active issues affect AMD GPU detection, VRAM allocation, and training stability across RDNA 3 and Strix Halo platforms. If you're targeting AMD deployments, monitor ROCm/Vulkan support updates and test with V2 GGUF checkpoints for Qwen3.8 models as a stable baseline.
4. **Upcoming training performance gains for FP8/QLoRA workloads**: The in-progress block-FP8 LoRA speedups and fused NF4 kernels will significantly reduce fine-tuning time for 4-bit and FP8 quantized models. Keep an eye on PR merges if you run large-scale fine-tuning pipelines.
5. **Studio is evolving into a multi-model serving platform**: The in-progress multi-model serving feature will let you run multiple models simultaneously in Studio, making it easier to build applications that route requests between specialized models (e.g., code + chat + vision) from a single Unsloth deployment.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*