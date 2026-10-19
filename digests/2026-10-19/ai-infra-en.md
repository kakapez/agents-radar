# AI Infrastructure Weekly Digest 2026-10-19

> Generated: 2026-10-19 01:00 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Ecosystem Report | 2026-10-19
## 1. Ecosystem Overview
Over the past 7 days, the AI inference and tooling ecosystem advanced across all layers, with heavy investment in production-grade MoE serving optimizations, cross-platform hardware compatibility (especially AMD ROCm, NVIDIA Blackwell, and edge NPU targets), and correctness hardening for high-throughput workloads. Speculative decoding and KV cache efficiency remained consistent focal points across inference engines, while upper-layer projects prioritized supply-chain security, API compatibility, and agent workflow robustness. Multiple large-parameter MoE models (500B+ class) received day-0 or near-day-0 serving support, reflecting the continued push toward dense-MoE hybrid architectures as a mainstream deployment target. Stability work focused heavily on correctness (batch invariance, streaming translation parity) and platform-specific regressions, as projects harden support for next-generation GPUs and accelerators.

## 2. Activity Comparison
| Project | Issue Activity (High/Critical Tracked) | PR Activity (Notable Merged/In-Progress) | Release Status (Past 7 Days) |
|---------|----------------------------------------|------------------------------------------|-------------------------------|
| vLLM | 10+ (3 critical, 5 high, batch invariance trackers) | 15+ (new model support, ROCm enablement, kernel fusion) | v0.32.0 (in progress, 814 commits from 363 contributors) |
| SGLang | 6 (3 critical, 3 high, CI infrastructure trackers) | 10+ (LoRA stack parts 13–19, engine recovery, context parallelism) | No new releases; active development on Q4 roadmaps |
| llama.cpp | 7 (4 high, 3 medium/low, platform-specific regressions) | 20+ (quantization ports, Hexagon NPU, Vulkan FA optimizations) | No versioned releases; rolling builds (b11712 – b11721) |
| Ollama | 10+ (1 critical cloud outage, 3 high, 6+ medium/low) | 10+ (parser fixes, distributed inference PR, 4 patch releases) | 4 releases: v0.40.4, v0.40.5, v0.40.6, v0.40.7-rc0 |
| LiteLLM | 10+ (1 critical, 6 high, 3+ medium) | 10+ (Rust refactors, security hardening, provider updates) | 6 releases: v1.105.1, v1.103.5, v1.106.0, v1.107.0-rc.1 + pre-releases |
| Unsloth | 7 (2 high, 3 medium, 2 low/UI) | 20+ (model support, training optimizations, UI upgrades) | 3 beta releases: v0.1.906-beta, v0.1.907-beta, v0.1.908-beta |

## 3. Model Support Race
### Shipped New Model Support (Past 7 Days)
| Project | New Models/Architectures |
|---------|---------------------------|
| vLLM | Reflection Beam-1.0 501B MoE (day-0 support with DFlash2 speculative decoding) |
| SGLang | DeepSeek-V4.1 multimodal (CUDA); GLM-5.3-Flash AMD FP8 support |
| llama.cpp | GigaChat 3.5 432B MoE (in progress); IQ-series low-bit quant family (in progress) |
| Ollama | NVIDIA Nemotron 3.5 Super VLM; PPLX Decider v1.2 (MLX); decision model family CLI support |
| LiteLLM | OceanToken provider integration (in progress); CoralBricks GLM 5.3 variants removed (provider decommission) |
| Unsloth | NVIDIA Nemotron 3.5 Bolt; Meta Muse Spark Open (text-diffusion LLM); Qwen-Image-2.1-Turbo |

### Competitive Positioning
vLLM maintains its lead in day-0 support for cutting-edge large MoE models, with first-to-land support for the 501B-parameter Reflection Beam architecture. Unsloth is the fastest to expand multimodal and creative model support, shipping three new model classes including text-diffusion and image generation models. SGLang is differentiated by its deep optimization focus on top-tier MoE models (DeepSeek-V4.1, GLM-5.3) across both NVIDIA and AMD hardware. Ollama leads in end-user accessibility for new models, packaging high-demand models like Nemotron 3.5 into its one-click deployment flow.

## 4. Performance Frontier
Optimization efforts are concentrated across five core areas:
1. **KV Cache Efficiency**: All inference engines advanced KV cache flexibility and performance. vLLM progressed on TP-agnostic KV offloading for heterogeneous deployments and KV cache backend unification. SGLang delivered 95%+ cache hit rates for agent workloads and Ngram speculative decoding for repeated prefixes. llama.cpp optimized slot scheduling for shared-prompt batching.
2. **Kernel Fusion & Low-Level Optimization**: vLLM advanced manual kernel fusion porting (migrating from `torch.compile` to hand-tuned kernels) and GLM-5 MoE + RMSNorm fusion. llama.cpp focused on cross-backend low-bit quantization kernel tuning (CUDA, HIP, Vulkan, SYCL) and MoE expert GPU LRU caching. SGLang optimized SM120 FP8 GEMM performance and deepened its Triton/CuTeDSL grouped GEMM stack for LoRA.
3. **Distributed & Parallel Serving**: vLLM landed the first PR in its eager-mode Sequence Parallel + Async-TP series. SGLang expanded prefill context parallelism across backends and delivered Phase 1 of its fast engine recovery (weight cache daemon) with <1s weight load times for 235B models. Ollama advanced distributed multi-machine inference backed by llama.cpp RPC.
4. **Speculative Decoding**: vLLM integrated DFlash2 drafter support for Reflection Beam. SGLang developed per-request Ngram speculative decoding for prompt prefix reuse. Ollama added auto-detection of draft speculative decoding types to reduce configuration overhead.
5. **Batching & Throughput**: vLLM’s batch invariance fixes (top-p sampling, FP8 MoE, GPTQ linear layers) eliminate throughput variance caused by batch composition. llama.cpp’s MoE expert LRU cache reduces host-GPU transfer overhead for small-batch MoE workloads. SGLang’s packed MoE schedules improve SM utilization for LoRA workloads.

## 5. Layer Positioning
| Layer | Project | Core Value Proposition | Primary Use Cases |
|-------|---------|------------------------|-------------------|
| **High-Performance Serving Engines (Datacenter)** | vLLM | Maximum throughput for large-scale LLM/MoE serving, broad model/hardware support, native OpenAI-compatible API | Cloud inference, multi-tenant serving, large MoE deployment |
| | SGLang | Optimized serving with advanced programmatic KV cache control, LoRA runtime, and PD disaggregation | High-throughput agent/RAG workloads, fine-grained cache management, LoRA serving |
| **Local/Edge Runtime** | llama.cpp | Lightweight, cross-platform inference with minimal dependencies, broad backend support (CPU, GPU, NPU) | Edge deployment, desktop inference, low-resource environments |
| | Ollama | User-friendly local model management and serving, one-click deployment, broad ecosystem integration | Desktop AI, local development, small-team self-hosted deployments |
| **LLM Gateway** | LiteLLM | Unified API abstraction across 100+ LLM providers, cost tracking, rate limiting, fallbacks | Multi-provider deployments, cost management, migration between providers |
| **Training & Fine-Tuning + Integrated Studio** | Unsloth | Fast, memory-efficient fine-tuning + integrated inference studio with end-user UI | Custom model fine-tuning, local AI studio workflows, training-to-deployment pipelines |

## 6. Trend Signals
1. **MoE serving is maturing into production**: Every serving engine shipped MoE-specific optimizations (expert caching, fusion, LoRA support) and added support for 400B–500B+ parameter MoE models. Agent/application developers should plan for MoE architectures as the default for high-capacity models, and evaluate cost-performance tradeoffs of active vs. total parameter counts.
2. **Hardware diversity is accelerating**: AMD ROCm support moved from "best-effort" to first-class status across vLLM, SGLang, and llama.cpp, with dedicated CI, optimized kernels, and feature parity work. Edge NPU support (Qualcomm Hexagon, Rockchip) also advanced materially. Infrastructure teams should diversify hardware roadmaps beyond NVIDIA-only to capture cost savings.
3. **Correctness and determinism are now key differentiators**: vLLM’s batch invariance work, cross-project streaming translation fixes in LiteLLM, and speculative decoding consistency issues in llama.cpp all signal that as inference systems reach maturity, output correctness and reproducibility are becoming critical selection criteria for regulated and testing-heavy workloads.
4. **Agent workloads are driving optimization roadmaps**: Ngram speculative decoding for repeated prompts, tool call parsing fixes, browser control capabilities, and prefix cache optimizations all directly target agent/tool-use workflows. Application developers building agent systems should prioritize engines that explicitly optimize for multi-turn, repeated-prefix, and tool-calling patterns.
5. **Supply-chain security moves upstream**: LiteLLM’s adoption of Cosign image signing reflects growing demand for verifiable software supply chains in AI infrastructure. Teams operating in regulated environments should begin prioritizing projects with signed artifacts and SBOM support.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest | 2026-10-19
Data source: [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

---

## 1. Last 7 Days' Highlights
The vLLM project advanced batch invariance correctness across multiple quantization and sampling backends, rolled out day-0 support for Reflection's 501B-parameter Beam MoE model with DFlash2 speculative decoding, and progressed on ROCm platform optimization and CI expansion. Key infrastructure work also advanced for manual kernel fusion porting (aligned with the model development RFC) and KV connector reliability for heterogeneous TP deployments.

---

## 2. Releases & Breaking Changes
### v0.32.0 (in progress)
- **New endpoint**: Adds `POST /v1/systemone` for structured `choice`, `noul`, and `score` question answering over a structured state, enabled by default.
- Scope: 814 commits from 363 contributors (121 new contributors) — full release notes are pending completion.
- Link: [v0.32.0 release draft](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)

---

## 3. New Model & Hardware Support
### New Models
- **Reflection Beam-1.0**: Day-0 support for the 501B-parameter MoE (23B active params) `BeamForCausalLM` architecture, plus its `DFlash2BeamDraftModel` DFlash2 drafter for speculative decoding.
  - PR: [#62074](https://github.com/vllm-project/vllm/pull/62074)

### Hardware & Backend Enablement
- **ROCm**: Fused QK-norm+RoPE+gate Triton kernel enabled for Qwen3-Next/Qwen3.5 on AMD GPUs (previously CUDA-only).
  - PR: [#51406](https://github.com/vllm-project/vllm/pull/51406)
- **ROCm CI**: Expanded test matrix split by CDNA generation (cdna3/cdna4), plus ROCm 10 image bumped to PyTorch 2.13.
  - PRs: [#62363](https://github.com/vllm-project/vllm/pull/62363), [#62276](https://github.com/vllm-project/vllm/pull/62276)
- **CUDA Architecture Testing**: Added regression coverage for plain and suffixed CUDA arch identifiers in CMake builds.
  - PR: [#56582](https://github.com/vllm-project/vllm/pull/56582)

### In-Progress Enablement Trackers
- DeepSeek-V4-Flash / V4-Flash-0731 SM8x (Ampere A100/A800, RTX 30xx) support request.
  - Issue: [#50576](https://github.com/vllm-project/vllm/issues/50576)
- Kimi-K3 ROCm feature/performance roadmap tracking.
  - Issue: [#50682](https://github.com/vllm-project/vllm/issues/50682)
- Qwen3.8-2.4T-A95B MI355X (gfx950) performance optimization plan.
  - Issue: [#57149](https://github.com/vllm-project/vllm/issues/57149)

---

## 4. Performance & Optimization
### Kernel & Graph Optimizations
- **GLM-5.x MoE + RMSNorm fusion**: Fuses MoE top-k finalization into the next RMSNorm's all-reduce via a single FlashInfer kernel, using the deferred-finalization pattern.
  - PR: [#62174](https://github.com/vllm-project/vllm/pull/62174)
- **Tool parser streaming performance**: Incremental scanning for required-tool JSON deltas instead of re-scanning the full accumulated array on every token.
  - PR: [#60882](https://github.com/vllm-project/vllm/pull/60882)
- **Manual fusion porting**: Tracker for migrating `torch.compile`-based fusions to manual kernel implementations (aligned with the model development RFC #42770).
  - Issue: [#43224](https://github.com/vllm-project/vllm/issues/43224)
  - RFC: [#42770](https://github.com/vllm-project/vllm/issues/42770)

### Attention & KV Cache
- **KVCache backend unification**: Tracker for extracting KV-Cache update logic across all attention backends (FlashAttention, FlashInfer, AiterFlashAttention completed).
  - Issue: [#32335](https://github.com/vllm-project/vllm/issues/32335)
- **TP-agnostic KV offloading**: Tracking issue for cross-TP-size compatible offloaded KV cache sharing; help wanted for reviews/testing.
  - Issue: [#61886](https://github.com/vllm-project/vllm/issues/61886)
- **NVFP4 KV cache prefill regression**: FlashInfer NVFP4 causal prefill is ~1.7–1.8x slower than FP8 on SM120 (consumer Blackwell).
  - Issue: [#50416](https://github.com/vllm-project/vllm/issues/50416)

### Parallelism
- **Eager-mode Sequence Parallel (SP) + Async-TP**: First PR in a series implementing SP + Async-TP mechanism.
  - PR: [#61644](https://github.com/vllm-project/vllm/pull/61644)
  - RFC: [#61626](https://github.com/vllm-project/vllm/issues/61626)

---

## 5. Stability & Regressions
### Critical
1. **TP=2 deadlock on AMD R9700 (gfx1201/RDNA4)**: Dual GPUs spin at 100% with blocked inference; reproduced on multiple vLLM + ROCm versions. No fix PR linked.
   - Issue: [#40980](https://github.com/vllm-project/vllm/issues/40980)
2. **DeepSeek-V4-Pro TP worker hang**: `EngineDeadError` from `sample_tokens` RPC timeout under TP=8 + MTP speculative decoding. No fix PR linked.
   - Issue: [#41530](https://github.com/vllm-project/vllm/issues/41530)
3. **Shared memory broadcast block timeout**: "No available shared memory broadcast block found in 60 seconds" during compilation/quantization weight loading. No fix PR linked.
   - Issue: [#35465](https://github.com/vllm-project/vllm/issues/35465)

### High
1. **Qwen3.8-Flash-Next non-deterministic greedy decoding**: Output varies for identical requests at `temperature=0` when prompt length nears `indexer_budget` (sparse attention top-k switch) on SM121/GB10. No fix PR linked.
   - Issue: [#54521](https://github.com/vllm-project/vllm/issues/54521)
2. **Hybrid Mamba/GDN prefix cache corruption with MTP**: Prefix caching + MTP corrupts outputs on hybrid Mamba/GDN models (v0.28.0); prior issue #43559 closed but unfixed. Fix in progress:
   - Issue: [#53912](https://github.com/vllm-project/vllm/issues/53912)
   - Fix PR: [#52244](https://github.com/vllm-project/vllm/pull/52244)
3. **Triton MLA decode int32 overflow on MI355**: Crashes during CUDA graph capture for Kimi-Linear-48B, LongCat-Flash-Lite-FP8, DeepSeek-V2-Lite-Chat. **Fix merged.**
   - PR: [#61938](https://github.com/vllm-project/vllm/pull/61938)
4. **NIXL KV connector peer disconnect persistence**: Failed pull connections leave UCX endpoints permanently broken until restart. Fix in progress:
   - PR: [#61500](https://github.com/vllm-project/vllm/pull/61500)
5. **NIXL Mamba2 conv state transfer error under heterogeneous TP**: Silent incorrect decode output when TP does not divide `n_groups`. Fix in progress:
   - PR: [#61531](https://github.com/vllm-project/vllm/pull/61531)

### Batch Invariance Correctness (multiple active fixes)
- Top-p filter kernel path inconsistency between split-row and monolithic implementations.
  - Fix PR: [#62370](https://github.com/vllm-project/vllm/pull/62370)
- FP8 MoE activation scales not per-token under batch invariance (expert outputs depend on batch composition).
  - Fix PR: [#62369](https://github.com/vllm-project/vllm/pull/62369)
- GPTQ (Marlin) linear layers not batch-invariant due to tiling/K-split dependence on token count.
  - Fix PR: [#60479](https://github.com/vllm-project/vllm/pull/60479)
- ShortConv (LFM2) models unsupported in batch-invariant mode.
  - Fix PR: [#62367](https://github.com/vllm-project/vllm/pull/62367)
- Tracking issue for overall batch invariant feature completion.
  - Issue: [#27433](https://github.com/vllm-project/vllm/issues/27433)

---

## 6. What This Means for Application Developers
1. **Deterministic inference improvements**: If your workload requires reproducible outputs (e.g., testing, regulated workflows), the batch invariance fixes for top-p sampling, FP8 MoE, GPTQ, and LFM2 models will eliminate output variance caused by batch composition — monitor the #27433 tracker for full completion.
2. **New large MoE option**: Reflection Beam-1.0 (501B total / 23B active params) is now supported with DFlash2 speculative decoding out of the box, giving you another high-parameter MoE option with low latency serving.
3. **Tool calling reliability fix**: Qwen3 XML-format tool calls without `<tool_call>` wrappers were incorrectly parsed — if you use Qwen3 for agent/tool use cases, the constrained parser fix will reduce malformed tool call errors.
4. **Hardware deployment notes**:
   - Ampere (A100/A800) users waiting for DeepSeek-V4-Flash support should follow #50576 for progress.
   - Blackwell SM120 users running DeepSeek-V4.1-Flash see extremely low decode throughput with `--enforce-eager` and broken CUDA graphs — track #56892 for fixes.
   - ROCm users get expanded model support (Qwen fused attention kernel) and more robust CI coverage across CDNA generations.
5. **KV cache offloading flexibility**: TP-agnostic KV offloading (#61886) will soon enable sharing cached prefixes across clusters with mixed TP sizes, useful for multi-tenant or disaggregated serving setups.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest | 2026-10-19
Data source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## 1. Last 7 Days' Highlights
No new releases were published in the past week; development activity focused on advancing the 21-part LoRA runtime stack, expanding AMD and CUDA Blackwell (SM120) model support, and resolving critical correctness/stability bugs across MoE backends and GLM-5.3-Flash serving. Multiple high-priority roadmaps (Prefill Context Parallelism, Fast Engine Recovery, PD Disaggregation Q4) saw incremental progress, with DeepSeek V4.1 optimizations and Ngram speculative decoding improvements nearing completion.

---

## 2. Releases & Breaking Changes
None in the last 7 days.

---

## 3. New Model & Hardware Support
| Category | Details | GitHub Link |
|----------|---------|-------------|
| AMD + DeepSeek | Adds prefill context parallel support for DeepSeek-V4.1 on AMD hardware, expanding PD disaggregation and parallel strategy compatibility. | [PR #43465](https://github.com/sgl-project/sglang/pull/43465) |
| AMD + GLM-5.3-Flash | Opt-in PTPC FP8 KDA projections for GLM-5.3 Flash on gfx950, reducing memory footprint and improving throughput on AMD MI-series GPUs. | [PR #38764](https://github.com/sgl-project/sglang/pull/38764) |
| CUDA + LoRA | Ongoing rollout of the LoRA runtime stack (parts 13–19 of 21): adds Triton/CuTeDSL FP8/BF16 grouped GEMM kernels, MoE LoRA runner integration, and packed MoE schedules for SM90/SM100. | [PR #42880](https://github.com/sgl-project/sglang/pull/42880) <br> [PR #42885](https://github.com/sgl-project/sglang/pull/42885) |
| CPU Serving | Fixes CPU-only `torch_native` backend startup failure when `sgl_kernel` is absent, deferring optional AOT imports to enable fallback CPU inference. | [PR #44064](https://github.com/sgl-project/sglang/pull/44064) |
| DeepSeek-V4.1 Multimodal | Adds support for CUDA image requests with encoder bounded replay, unblocking MMMU-Pro evaluation with breakable CUDA graphs. | [PR #45048](https://github.com/sgl-project/sglang/pull/45048) |

---

## 4. Performance & Optimization
| Initiative | Details | GitHub Link |
|------------|---------|-------------|
| Fast Engine Recovery (Weight Cache Daemon) | Phase 1 is landed: per-rank daemon holds post-quantized weights served via CUDA IPC, cutting Qwen3-235B FP8 weight load time from ~306–327s to <1s. Phase 2 work is ongoing. | [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) |
| Prefill Context Parallelism (Q4 Roadmap) | Completed support for Trtllm MHA backend, Qwen3.8-Flash-Next, and GLM5.3-Flash; Flashinfer backend and Kimi-K3 support are in progress. | [Issue #21788](https://github.com/sgl-project/sglang/issues/21788) |
| DeepSeek V4.1 Optimizations | Completed mHC code cleanup, `q_rope_store` fusion into `fused_q_norm_rope`, and faster FP8 GEMMs; ongoing work on prefill optimizations including mHC SP + engram fusion. | [Issue #42170](https://github.com/sgl-project/sglang/issues/42170) |
| Ngram Speculative Decoding | New feature in development: per-request drafting from prompt text (not just indexed post-decode tokens), expected to improve acceptance rate for workloads with repeated prompt prefixes (code editing, document Q&A). | [Issue #21052](https://github.com/sgl-project/sglang/issues/21052) <br> [PR #45054](https://github.com/sgl-project/sglang/pull/45054) |
| Monokernel Framework RFC | Proposed vendor-neutral monokernel framework with plugin support for AMD/other hardware vendors, accessible via `--monokernel-backend` flag. | [Issue #43949](https://github.com/sgl-project/sglang/issues/43949) |
| SM120 FP8 GEMM Optimization | Completed work optimizing per-tensor FP8 GEMM performance on Blackwell (SM120) GPUs. | [Issue #33632](https://github.com/sgl-project/sglang/issues/33632) |

---

## 5. Stability & Regressions
### Critical Severity
| Bug | Details | Fix Status |
|-----|---------|------------|
| MoRI backend silent output corruption | Small `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK` values cause semantically incorrect decode output (gsm8k score drops to 0.00) at low concurrency, with no visible error. | **Closed (resolved)** <br> [Issue #27194](https://github.com/sgl-project/sglang/issues/27194) |
| GLM-5.3-Flash + DFLASH speculative decoding repetition | Severe repeated tokens and degenerate reasoning loops when serving GLM-5.3 with DFLASH speculative decoding. | Open, no fix PR linked <br> [Issue #40843](https://github.com/sgl-project/sglang/issues/40843) |
| GLM-5.3-Flash SM120 fa4 backend crash | FlashAttention 4 backend crashes during CUDA graph capture (hybrid extend reshape) on RTX PRO 6000; Triton is the only working attention backend for this config. | Open, no fix PR linked <br> [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) |

### High Severity
| Bug | Details | Fix Status |
|-----|---------|------------|
| GLM-5.3-Flash agentic prompt degeneration | Endless stream of `!` characters in reasoning output for multi-tool agent prompts with native FP8 checkpoints. | Open, no fix PR linked <br> [Issue #36669](https://github.com/sgl-project/sglang/issues/36669) |
| Zombie streaming client requests | Disconnected streaming clients leave orphaned requests that decode to `max_tokens`, spamming "state was deleted in TokenizerManager" logs (regression from #34160 revert). | **Closed (resolved)** <br> [Issue #36333](https://github.com/sgl-project/sglang/issues/36333) |
| DeepSeek-V4.1 encoder replay edge case | Encoder SWA replay returns zero-length extends for per-rank chunks smaller than `128 + page_size`, causing prefill admission failures. | **Fix merged** <br> [PR #45051](https://github.com/sgl-project/sglang/pull/45051) |

### CI/Infrastructure
- Flaky test and CI infrastructure failures are tracked in the active babysitting tracker, complementing the long-running CI failure tracker. <br> [Issue #42752](https://github.com/sgl-project/sglang/issues/42752) <br> [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)
- New test utility aborts runs immediately when the server dies inside a `CustomTestCase` method, reducing wasted CI time. <br> [PR #45053](https://github.com/sgl-project/sglang/pull/45053)

---

## 6. What This Means for Application Developers
1. **Blackwell (SM120) production deployments**: For teams running GLM-5.3-Flash on RTX PRO 6000, use the Triton attention backend for now — FlashAttention 4 is unstable on hybrid extend workloads. DeepSeek-V4.1-Flash has validated production configurations for PCIe-only (no NVLink) 8x topologies in the field report, which can inform deployment topology choices.
2. **MoE LoRA support is nearing GA**: The 21-part LoRA runtime stack is ~90% complete, with FP8/BF16 MoE LoRA support for Triton and CuTeDSL backends in final review. Teams waiting for production-grade LoRA on large MoE models should monitor these PRs for upcoming main-branch merge.
3. **Agent workload optimizations incoming**: Programmatic KV cache and position-independent KV reuse features are completed, and Ngram speculative decoding will soon support prompt-based drafting — both will significantly improve latency for multi-turn agent/RAG workloads with repeated prefixes.
4. **CPU serving fallback works**: If you run edge or dev deployments on CPU-only hardware, the `torch_native` backend now works out of the box without `sgl_kernel` installed, reducing dependency overhead for testing.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest | 2026-10-19
Data source: [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. Last 7 Days' Highlights
This week’s llama.cpp updates focus heavily on cross-backend performance tuning for low-bit quantization, Hexagon NPU acceleration, and Vulkan flash attention optimizations, alongside active work on MoE expert GPU caching to reduce host-GPU transfer overhead. Multiple regressions were reported for Vulkan, SYCL, and CUDA Blackwell (sm_120) platforms, with several fix PRs already in review. User-facing improvements include Hugging Face Hub model discovery in the UI and progress on server-side model management APIs.

---

## 2. Releases & Breaking Changes
No official versioned releases were published in the last 7 days; only rolling build commits (b11712 – b11721) were merged.
- No API/ABI breaking changes reported.
- Official build artifacts and attestations are available via the project’s [release page](https://github.com/ggml-org/llama.cpp/releases) and [llama.app](https://llama.app).

---

## 3. New Model & Hardware Support
### Quantization Formats
- **IQ-series quantization (CPU) (in progress):** PR adds `IQ2_K`, `IQ3_K`, `IQ4_K`, `IQ5_K`, and `IQ6_K` quant types ported from ik_llama.cpp, expanding low-bit options for memory-constrained deployments. [PR #30715](https://github.com/ggml-org/llama.cpp/pull/30715)
- **Hexagon Q1_0/Q2_0 support:** Full support for flat/tiled Q1_0 and Q2_0 quant formats on Qualcomm Hexagon NPUs, including Hadamard MUL_MAT and GET_ROW operations. [PR #30627](https://github.com/ggml-org/llama.cpp/pull/30627) / [PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)

### Model Architecture
- **GigaChat 3.5 (in progress):** Initial support for GigaChat-3.5-432B-A28B, a DeepSeek-V3-style MoE model with MLA attention. [PR #25342](https://github.com/ggml-org/llama.cpp/pull/25342)

### Backend & Hardware
- **Hexagon NPU:** Multistream flash attention support for no-kv-unified multi-sequence workloads, plus FLASH_ATTN_EXT improvements for SWA models and longer context. [PR #30218](https://github.com/ggml-org/llama.cpp/pull/30218) / [PR #30731](https://github.com/ggml-org/llama.cpp/pull/30731)
- **OpenCL:** Added `get_rows` for i32 and `cpy` for i32/f32 operations, expanding OpenCL backend op coverage. [PR #30756](https://github.com/ggml-org/llama.cpp/pull/30756)

---

## 4. Performance & Optimization
### CUDA / ROCm (HIP)
- **Qwen4Exp HC_POST gate fusion:** Fused SCALE → SIGMOID → SCALE → hc_post chain for CUDA, ported from the Vulkan backend, reducing kernel launch overhead for Qwen4-series models. [PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)
- **Low-bit MMVQ speedup:** Faster matrix-vector quantization kernels for low-bit types on CUDA, with HIP fixes for GCN architectures on Q3_K/Q6_K. [PR #30517](https://github.com/ggml-org/llama.cpp/pull/30517)
- **HIP q1_0 unpack optimization:** Uses `__builtin_amdgcn_perm` for faster q1_0 weight unpacking on AMD GPUs. [PR #29927](https://github.com/ggml-org/llama.cpp/pull/29927)
- **GCN MMQ tuning (in progress):** Full re-tuning of MMQ configs for AMD GCN architectures across all quantization formats. [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021)
- **Stream-K MMQ grid capping (in progress):** Reduces CUDA block launch overhead by capping Stream-K blocks at available work units, shortening fixup kernel scan time. [PR #30553](https://github.com/ggml-org/llama.cpp/pull/30553)

### Vulkan
- **Non-contiguous SUM support:** Added non-contiguous SUM operation support for Vulkan (alongside CPU/CUDA/WebGPU), improving tensor view operation efficiency. [PR #28851](https://github.com/ggml-org/llama.cpp/pull/28851)
- **Q4_0 KV cache fast path (in progress):** Dequant+transpose fast path for Q4_0 KV cache in Vulkan flash attention, addressing poor performance on older GCN1 GPUs like the FirePro D700. [PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)
- **Cooperative matrix FA tile sizing (in progress):** Derives coopmat1 flash attention tile shape from device capabilities, fixing silent fallback to scalar path on Intel BMG GPUs with 8x16x16 DPAS atoms. [PR #30351](https://github.com/ggml-org/llama.cpp/pull/30351)

### SYCL / Intel GPUs
- **Q8 fast dequant:** 2.11–5.5% prompt eval speedup on Intel Arc Pro B70, with raw kernel bandwidth increasing from 437.4 GB/s to 636.9 GB/s, no PPL loss. [PR #30752](https://github.com/ggml-org/llama.cpp/pull/30752) / [PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)
- **ESIMD FFN path restoration:** Re-enabled ESIMD kernels on the FFN path, with extended fusion support for Q8_0 quantization on Intel GPUs. [PR #30239](https://github.com/ggml-org/llama.cpp/pull/30239)

### MoE & Server
- **MoE expert GPU LRU cache (in progress):** Port of qvac-fabric’s MoE cache, which keeps host-resident experts in a GPU LRU cache for small batches (≤32 tokens), only uploading misses. Reduces host-GPU transfer overhead for large MoE models. [PR #29887](https://github.com/ggml-org/llama.cpp/pull/29887)
- **Slot scheduling optimization (in progress):** Parent slots are visited before child slots during shared prefix processing, improving batching efficiency for requests with common prompt prefixes. [PR #30779](https://github.com/ggml-org/llama.cpp/pull/30779)

### UX / Tooling
- **HF Hub model discovery:** UI now supports discovering and downloading models directly from Hugging Face Hub, with sidecar file resolution for quant tags like `Q4_0-mtp`. [PR #29584](https://github.com/ggml-org/llama.cpp/pull/29584)
- **Target-size quantization (in progress):** Auto-select optimal per-tensor quant types to hit a user-specified file size or bits-per-weight target with minimal error. [PR #15550](https://github.com/ggml-org/llama.cpp/pull/15550)

---

## 5. Stability & Regressions
Ranked by severity (impact + comment activity):
1. **High: RTX 5090 Laptop (sm_120) CUDA graph hang** — CUDA graphs trigger GPU channel hangs (RC watchdog + Xid 8) on Blackwell mobile GPUs; workaround: `GGML_CUDA_DISABLE_GRAPHS=1`. No fix PR merged yet. [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)
2. **High: Vulkan ANV flash attention O(N²) prefill degradation** — Flash attention falls back to scalar path on Intel Arc B580 + ANV driver, causing severe prefill slowdown and device loss for long contexts. No fix PR merged yet. [Issue #27638](https://github.com/ggml-org/llama.cpp/issues/27638)
3. **High: Multi-GPU draft-MTP prefill slowdown** — draft-mtp roughly halves prompt processing speed when layers are split across multiple CUDA GPUs; single-GPU runs are unaffected. No fix PR merged yet. [Issue #27428](https://github.com/ggml-org/llama.cpp/issues/27428)
4. **Medium: Speculative decoding output divergence on quantized targets** — Greedy draft-model speculative decoding produces different output than vanilla runs when the target model is quantized (bf16 targets match; ngram speculation works). No fix PR merged yet. [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618)
5. **Medium: Vulkan performance regression on recent builds** — RX 6600 + Vulkan shows measurable performance drop in recent builds; root cause under investigation. No fix PR merged yet. [Issue #24066](https://github.com/ggml-org/llama.cpp/issues/24066)
6. **Medium: SM_60 (Tesla P100) quality loss** — FP32 math is silently done in FP16 on sm_60 GPUs, causing quality degradation; fix merged in downstream forks, not upstream yet. [Issue #25593](https://github.com/ggml-org/llama.cpp/issues/25593)
7. **Low: /metrics endpoint causes server to stop processing** — VictoriaMetrics scraping of the /metrics endpoint silently halts request processing on Windows + CUDA builds. No fix PR merged yet. [Issue #29104](https://github.com/ggml-org/llama.cpp/issues/29104)

---

## 6. What This Means for Application Developers
- **MoE deployment cost reduction:** The upcoming GPU-resident MoE expert LRU cache will let you run larger MoE models with partial GPU offload without incurring full host-GPU transfer latency per token, especially for small-batch, low-concurrency workloads like agent deployments.
- **Platform-specific deployment notes:**
  - Avoid CUDA graphs on RTX 5090 Laptop / sm_120 hardware for now; set `GGML_CUDA_DISABLE_GRAPHS=1` to prevent hangs.
  - Users of Intel Arc GPUs with Vulkan should wait for the coopmat tile sizing PR if flash attention performance is unexpectedly low.
  - Hexagon NPU deployments get meaningful low-bit quant support (Q1_0/Q2_0) this week, improving edge inference density.
- **Speculative decoding caveat:** If you rely on deterministic greedy output with draft-model speculative decoding, test for output consistency with your target quantized model; use bf16 targets or ngram speculation if exact parity is required.
- **Server efficiency gains:** The upcoming slot scheduling optimization for shared prefixes will improve batching efficiency for workloads with common system prompts (e.g., agent frameworks, enterprise chatbots) when using llama-server’s slot API.
- **UX improvements:** The built-in HF Hub model download feature simplifies end-user onboarding for desktop applications, eliminating the need for manual model file management.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest — 2026-10-19
*Data source: [github.com/ollama/ollama](https://github.com/ollama/ollama)*

---

## 1. Last 7 Days' Highlights
Ollama shipped four releases (v0.40.4 through v0.40.7-rc0) headlined by CLI-native decision model support, NVIDIA Nemotron 3.5 Super vision-language integration, speculative decoding improvements, and expanded OpenAI API compatibility. Distributed inference (backed by llama.cpp RPC) moved forward in active development, while AMD Vulkan/ROCm regressions and Windows auto-start misbehavior emerged as top user-reported issues. The project also saw a wave of ecosystem integration PRs spanning IDE agents, RAG tools, and multi-platform agent frameworks.

---

## 2. Releases & Breaking Changes
- **v0.40.7-rc0** (pre-release):
  - OpenAI-compatible Responses API now supports `effort` parameter on non-thinking models. [PR #19010](https://github.com/ollama/ollama/pull/19010)
  - `llama-server` now auto-infers draft speculative decoding type. [PR #19064](https://github.com/ollama/ollama/pull/19064)
  - MLX backend adds PPLX Decider v1.2 support (release notes truncated in source data).
- **v0.40.6**:
  - Windows: fixes orphaned runner processes. [PR #18500](https://github.com/ollama/ollama/pull/18500)
  - GGUF adds `q2_0` tensor and file type support. [PR #18967](https://github.com/ollama/ollama/pull/18967)
  - Clef launch integration added for Ollama Cloud (release notes truncated).
- **v0.40.5**: Adds [NVIDIA Nemotron 3.5 Super](https://ollama.com/library/nemotron-3.5-super) — a 120B-parameter hybrid Mamba-2/Transformer MoE vision-language model (12B active parameters per token).
- **v0.40.4**: Introduces CLI decision model support via `ollama run --ask` (yes/no questions, classification, rubric scoring; e.g. `ollama run nimble --ask "Is a refund being requested?" < ticket.txt`). Release notes reference Kev decision model support (truncated).
- **No breaking API changes** reported; all releases maintain backward compatibility.

---

## 3. New Model & Hardware Support
### Models
- NVIDIA Nemotron 3.5 Super (vision-language, coding, reasoning, tool use, document understanding): [release page](https://ollama.com/library/nemotron-3.5-super)
- PPLX Decider v1.2 (MLX backend, v0.40.7-rc0)
- Decision model family support expanded in CLI (v0.40.4)
- Community request for downloadable `deepseek-v4.1-flash` model files: [Issue #18379](https://github.com/ollama/ollama/issues/18379)

### Hardware/Backends
- **Rockchip NPU** (RK3588/RK3576): two open feature requests citing community `rkllama` reference implementation. [Issue #15393](https://github.com/ollama/ollama/issues/15393) · [Issue #9268](https://github.com/ollama/ollama/issues/9268)
- **Distributed multi-machine inference**: active PR building on llama.cpp RPC mechanism (tested on macOS with race condition fixes). [PR #10844](https://github.com/ollama/ollama/pull/10844) (tracked under feature request [Issue #4643](https://github.com/ollama/ollama/issues/4643), 61 👍, 49 comments)
- New quantization format: `q2_0` GGUF tensor/file type. [PR #18967](https://github.com/ollama/ollama/pull/18967)

---

## 4. Performance & Optimization
- **Speculative decoding**: `llama-server` auto-infers draft speculative type to reduce configuration overhead. [PR #19064](https://github.com/ollama/ollama/pull/19064)
- **MLX memory**: fixed 8 GiB prefix cache budget causes heavy swap on 32 GB Apple Silicon during agent workloads (confirmed expected cache growth, not a leak; hard-coded limit flagged as root cause). [Issue #18131](https://github.com/ollama/ollama/issues/18131) · related closed memory-growth report [Issue #17924](https://github.com/ollama/ollama/issues/17924)
- **MLX decision model performance**: quantized decision models run slower than bf16 at prefill on M5 Pro. [Issue #18833](https://github.com/ollama/ollama/issues/18833) (closed, no fix merged)
- **Multi-GPU load balancing**: uneven layer split leads to higher VRAM usage on first GPU in 2-GPU setups. [Issue #7047](https://github.com/ollama/ollama/issues/7047)
- **Tool-use streaming**: closed PR adds selective streaming for text adjacent to tool calls (previously tool use disabled all streaming). [PR #9973](https://github.com/ollama/ollama/pull/9973)

---

## 5. Stability & Regressions
Ranked by severity (impact × user volume):
1. **[Critical] Cloud service degradation (Pro plan)** — `/v1/chat/completions` returns no HTTP response, queued requests time out after 5 minutes then return 429 concurrent-slot errors; began 2026-10-16. [Issue #19111](https://github.com/ollama/ollama/issues/19111) · *No fix PR identified*
2. **[High] Generation corruption on `glm-5.3-flash:cloud`** — 5-8% failure rate with massive output degeneration, confirmed host-side (cluster 829 data area all zeros); began 2026-10-12. [Issue #18980](https://github.com/ollama/ollama/issues/18980) · *No fix PR identified*
3. **[High] AMD ROCm regression (gfx1010)** — Ollama 0.35.1 crashes during inference on Radeon Pro W5700 with `GGML_ASSERT(max_blocks_per_sm > 0)`. [Issue #19075](https://github.com/ollama/ollama/issues/19075) · *No fix PR identified*
4. **[Medium] AMD Vulkan empty response** — `gpt-oss:20b` returns empty output on Radeon Pro 5700 XT (16 GB) via Vulkan; CPU inference works. [Issue #19060](https://github.com/ollama/ollama/issues/19060) · *No fix PR identified*
5. **[Medium] Windows auto-start without permission** — recurring issue: Ollama launches on boot despite disabled auto-update and removal from startup list. Closed historical issue [Issue #8783](https://github.com/ollama/ollama/issues/8783); new open report [Issue #19067](https://github.com/ollama/ollama/issues/19067) · *Fix partially addressed in v0.40.6 orphaned-runner patch, but auto-start behavior unresolved*
6. **[Medium] Seed precision loss** — integer `seed` values above 2^53 lose precision when decoded as float64, causing distinct seeds to produce identical output. [Issue #19078](https://github.com/ollama/ollama/issues/19078) · *No fix PR identified*
7. **[Medium] GSQ-RCO quantization import failure** — `unsupported tensor size overflows` error when importing GSQ-RCO quantized Qwen3.8-Flash-Next GGUF files (file works in other inference engines). [Issue #18817](https://github.com/ollama/ollama/issues/18817) (closed)
8. **[Low] Context length reporting mismatch** — `OLLAMA_CONTEXT_LENGTH` limit not reflected in `/api/show` or `/api/tags` responses. [Issue #18995](https://github.com/ollama/ollama/issues/18995)
9. **[Low] Windows console window flashing** — GPU discovery subprocesses spawn visible black console windows during background `ollama serve`. [Issue #18954](https://github.com/ollama/ollama/issues/18954)
10. **[Low] `ollama ps` VRAM reporting inaccuracy** — significant discrepancy between reported and actual VRAM usage with mtp-accelerator models on ROCm. [Issue #17251](https://github.com/ollama/ollama/issues/17251)

### Parser/API Fix PRs in progress (reduce correctness bugs):
- Gemma4 tool call recovery from trailing noise: [PR #19112](https://github.com/ollama/ollama/pull/19112) · duplicate closed PR [Issue #18664](https://github.com/ollama/ollama/issues/18664)
- Qwen3 `<think>` tag whitespace trimming: [PR #19108](https://github.com/ollama/ollama/pull/19108)
- OLMo3 `</think>` trailing whitespace trimming: [PR #19104](https://github.com/ollama/ollama/pull/19104)
- OpenAI Responses API consistent `created_at` across stream events: [PR #19106](https://github.com/ollama/ollama/pull/19106)
- OpenAI tool name resolution for reused call IDs: [PR #19114](https://github.com/ollama/ollama/pull/19114)
- Anthropic streaming thinking blocks after text/tool_use: [PR #19110](https://github.com/ollama/ollama/pull/19110)

---

## 6. What This Means for Application Developers
- **Decision model workflows**: You can now build lightweight classification/extraction pipelines directly against the Ollama CLI without custom wrapper code, useful for support ticket triage, content moderation, and rubric-based scoring. Use `ollama run --ask` for batch processing.
- **OpenAI compatibility improvements**: The Responses API `effort` parameter and streaming consistency fixes (in progress) reduce migration friction for apps moving from OpenAI to Ollama; test against v0.40.7-rc0 if you rely on Responses API streaming.
- **Cloud reliability warning**: Ollama Cloud Pro users saw multi-day degradation as of 2026-10-16 — implement client-side retry with fallback to local inference or alternative providers for production workloads.
- **AMD GPU caution**: RDNA1 (gfx1010) ROCm and Vulkan users on recent releases face crashes or empty output; hold upgrades if you depend on these configurations, or test on v0.40.4 and earlier.
- **Distributed inference on the horizon**: The active RPC PR means multi-machine inference is nearing usable state for self-hosted deployments — follow [PR #10844](https://github.com/ollama/ollama/pull/10844) if you need to scale beyond single-node GPU limits.
- **Tool call robustness**: Multiple parser fixes for Gemma 4, Qwen3, and OLMo3 will reduce dropped tool calls in agent workflows — watch for these to land in the next release cycle.
- **Ecosystem expansion**: New integrations for JetBrains IDEs (Refio), Persian/English RAG (ParsRAG), Kotlin Multiplatform agents (Telar), and Talos agent launch give you more pre-built options to integrate Ollama into your stack.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest | 2026-10-19
---

## 1. Last 7 Days' Highlights
This week LiteLLM advanced supply-chain security with standardized Cosign image signing across all new releases, pushed forward Rust-based inference path refactors to improve parity and maintainability, and addressed a set of high-priority stability issues spanning budget enforcement, streaming correctness, and cross-provider translation. A new provider integration (OceanToken) and provider model catalog updates also landed in active PRs.

## 2. Releases & Breaking Changes
All releases published in the last 7 days now include verifiable Cosign-signed Docker images using the key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0). New versions:
- **v1.107.0-rc.1** (release candidate)
- **v1.106.0** (stable)
- **v1.105.1**, **v1.103.5** (stable patches)
- v1.107.0-dev.1/2/3 and v1.106.0-rc.2/3/4 (pre-release builds)

No explicit breaking API changes were announced in the published release notes.

## 3. New Model & Hardware Support
- **New provider in progress:** OceanToken added as a JSON-configured OpenAI-compatible provider, supporting `oceantoken/<publisher>/<model>` calls with `OCEANTOKEN_API_KEY` auth.
  PR: [BerriAI/litellm#47287](https://github.com/BerriAI/litellm/pull/47287)
- **Provider catalog update:** CoralBricks GLM 5.3 variants (`glm-5.3`, `glm-5.3-fast`, `glm-5.3-fp4`) removed from cost maps and model placeholders after the provider decommissioned them on 2026-10-18.
  PR: [BerriAI/litellm#47286](https://github.com/BerriAI/litellm/pull/47286)
- **Gemini 2.5 penalty-parameter fix:** Disables unsupported penalty parameters for Gemini 2.5 models to prevent upstream 400 errors.
  PR: [BerriAI/litellm#32273](https://github.com/BerriAI/litellm/pull/32273)

## 4. Performance & Optimization
- **Rust inference refactors:** Five refactor PRs folded Rust `prepare.rs` stages into their respective handlers (`inference-chat`, `inference-messages`, `inference-ocr`, `inference-responses`, `inference-transcription`), reducing code duplication, fixing ordering bugs (e.g. env validation before request transform), and aligning Rust paths with Python handler semantics.
  PRs: [#47218](https://github.com/BerriAI/litellm/pull/47218), [#47217](https://github.com/BerriAI/litellm/pull/47217), [#47216](https://github.com/BerriAI/litellm/pull/47216), [#47215](https://github.com/BerriAI/litellm/pull/47215), [#47214](https://github.com/BerriAI/litellm/pull/47214)
- **Rust prompt-cache support:** Native `cache_control` breakpoint injection ported to Rust on the typed Messages request, so Anthropic `/v1/messages` honors gateway prompt-cache settings.
  PR: [BerriAI/litellm#47284](https://github.com/BerriAI/litellm/pull/47284)
- **vLLM cached-tokens cost visibility:** Maps `prompt_tokens_details.cached_tokens` to `cache_read_input_tokens` so the cost calculator and proxy UI correctly display cache-read token usage for vLLM backends.
  PR: [BerriAI/litellm#22986](https://github.com/BerriAI/litellm/pull/22986)
- **Responses API TPM estimation fix:** Skips base64 image bytes when estimating Responses API TPM, preventing severe over-counting of image tokens against rate limits.
  PR: [BerriAI/litellm#32891](https://github.com/BerriAI/litellm/pull/32891) (closed / stale)

## 5. Stability & Regressions
Ranked by inferred severity:

1. **[Critical] Budget enforcement bypass in v1.82.3** — `max_budget` for both keys and users is not enforced, allowing unlimited spend. No fix PR linked yet.
   Issue: [BerriAI/litellm#26672](https://github.com/BerriAI/litellm/issues/26672)
2. **[High] Budget blocks zero-cost models** — Free/on-prem models with no configured cost still raise `ExceededBudget` when a user's budget is exhausted. Closed; fix status not specified in issue.
   Issue: [BerriAI/litellm#14004](https://github.com/BerriAI/litellm/issues/14004)
3. **[High] Memory leak / RAM growth** — LiteLLM pods on Kubernetes steadily grow RAM until OOM crash. Root cause under investigation.
   Issue: [BerriAI/litellm#27954](https://github.com/BerriAI/litellm/issues/27954)
4. **[High] Streaming reasoning/tool-use translation bugs** — Multiple Anthropic `/v1/messages` streaming translation issues:
   - Reasoning models stream `thinking_delta` inside a text block and emit duplicate `message_start`, causing empty content in Anthropic SDK/Claude Code.
     Issue: [BerriAI/litellm#32357](https://github.com/BerriAI/litellm/issues/32357)
   - `stop_sequences` not translated to `stop` for OpenAI-format providers via the Anthropic adapter (400 error).
     Issue: [BerriAI/litellm#33075](https://github.com/BerriAI/litellm/issues/33075) (closed)
   - Tool-use input dropped in streaming for Gemma 4 31B via Gemini provider.
     Issue: [BerriAI/litellm#25390](https://github.com/BerriAI/litellm/issues/25390)
   Fix PR for unsigned thinking-block preservation: [BerriAI/litellm#33035](https://github.com/BerriAI/litellm/pull/33035) (closed / stale)
5. **[High] `request_timeout` does not fire on silent upstreams** — If an upstream accepts TCP but never sends bytes, the configured timeout never triggers for streaming requests.
   Issue: [BerriAI/litellm#38358](https://github.com/BerriAI/litellm/issues/38358)
6. **[Medium] Virtual key edit incorrectly requires Enterprise** — Adding a model to an existing virtual key raises an enterprise-only error even for non-enterprise features. Closed.
   Issue: [BerriAI/litellm#15230](https://github.com/BerriAI/litellm/issues/15230)
7. **[Medium] MCP correctness gaps** — Several MCP-related issues:
   - Pinned MCP tools ignore `annotations` and `outputSchema`, so `readOnlyHint` drift isn't detected.
     Issue: [BerriAI/litellm#44093](https://github.com/BerriAI/litellm/issues/44093)
   - MCP tool conversion drops the `function` wrapper key against hosted vLLM backends (400 error).
     Issue: [BerriAI/litellm#32281](https://github.com/BerriAI/litellm/issues/32281) (closed)
   - Missing `mcp` module import error in responses path.
     Issue: [BerriAI/litellm#46045](https://github.com/BerriAI/litellm/issues/46045)
   User-auth pass-through for MCP resource listing PR: [BerriAI/litellm#33078](https://github.com/BerriAI/litellm/pull/33078) (closed / stale)
8. **[Medium] UI / auth regressions** —
   - Admin UI redirects to internal Docker IP after v1.88.x upgrade behind reverse proxy.
     Issue: [BerriAI/litellm#30118](https://github.com/BerriAI/litellm/issues/30118)
   - OAuth2-proxy SSO bypasses `custom_ui_sso_sign_in_handler` and redirects to `/ui/login`.
     Issue: [BerriAI/litellm#19856](https://github.com/BerriAI/litellm/issues/19856) (closed)
   - Proxy no longer shows model list to non-admin users.
     Issue: [BerriAI/litellm#17475](https://github.com/BerriAI/litellm/issues/17475)
9. **[Medium] Spend-log ID collisions** — Reused provider response IDs cause separate proxy calls to collide in spend logs (same primary key).
   Issue: [BerriAI/litellm#35563](https://github.com/BerriAI/litellm/issues/35563)
10. **[Low-Med] Langfuse headers not forwarded** — `langfuse_trace_user_id` and other headers never reach the Langfuse API.
    Issue: [BerriAI/litellm#13901](https://github.com/BerriAI/litellm/issues/13901)

## 6. What This Means for Application Developers
- **Security posture upgrade:** If you run LiteLLM in regulated or security-sensitive environments, you can now start verifying Docker image signatures via Cosign using the published key to enforce supply-chain integrity.
- **Budget users: audit before upgrade** — If you rely on `max_budget` enforcement, avoid v1.82.3 and validate budget behavior in your version of choice before rolling to production; related fixes for zero-cost models and `budget_duration` persistence are in-flight but not all are closed.
- **Anthropic-compatible endpoints: test streaming carefully** — Multiple streaming translation bugs affect reasoning models and tool use when fronting non-Anthropic backends (OpenAI-format, Gemini). If you expose `/v1/messages` to Claude Code or Anthropic SDK clients, test streaming + tool calling end-to-end before upgrading.
- **MCP integrations: validate pinning and backends** — MCP pinned-tool drift detection is incomplete (missing annotations/schema), and some vLLM/responses-path MCP flows are broken; hold off on MCP pinning for security-sensitive tool catalogs until #44093 is resolved.
- **Rust performance path maturing** — The Rust inference handlers are being consolidated and aligned with Python semantics; early adopters of the Rust proxy path should watch these refactors for improved correctness and future performance gains.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-10-19
Source: [github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)

---

## 1. Last 7 Days' Highlights
Unsloth shipped 3 beta releases in the past week, headlined by native support for NVIDIA Nemotron 3.5 and Meta Muse Spark Open, plus a full browser control capability for local models. The team also delivered major UI and inference performance gains (up to 10x faster multi-chat UX, 5x faster inference) and pushed 20+ PRs spanning training optimization, Studio UX upgrades, and edge-case bug fixes.

---

## 2. Releases & Breaking Changes
| Version | Key Changes |
|---------|-------------|
| [v0.1.908-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta) | Added support for NVIDIA Nemotron 3.5 and Meta Muse Spark Open; introduced text-diffusion LLM training, DeepSpeed training integration, and improved prompt caching for coding agents. |
| [v0.1.907-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.907-beta) | Delivered major performance upgrades: up to 10x faster UI/UX for multi-chat workflows, up to 5x faster inference (95% cache hit rate, MoE Strata fixes), and improved compaction for all APIs. |
| [v0.1.906-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.906-beta) | Launched browser use capability (models can open, read, click, type, and scroll on web pages); added Qwen-Image-2.1-Turbo support (8-step image generation), text-diffusion LLM training, faster MoE GGUFs, and speculative decoding on Metal. |

No breaking API changes were reported in the release notes.

---

## 3. New Model & Hardware Support
- **New Models**:
  - NVIDIA Nemotron 3.5 Bolt (runs on 24 GB VRAM) [guide](https://unsloth.ai/docs/models/nemotron)
  - Meta Muse Spark Open (text-diffusion LLM)
  - Qwen-Image-2.1-Turbo (8-step image generation)
- **Upcoming Model Requests (top by engagement)**:
  - Voxtral multilingual multimodal model ([#3013](https://github.com/unslothai/unsloth/issues/3013), 14 👍)
  - Ling 3.0 ([#8532](https://github.com/unslothai/unsloth/issues/8532), 5 👍)
- **Hardware/Quantization**:
  - AWQ support feature request closed ([#464](https://github.com/unslothai/unsloth/issues/464))
  - AMD GPU compatibility fixes in progress (RX 5700XT recognition [#8529](https://github.com/unslothai/unsloth/issues/8529), RDNA 2 PyTorch binding [#14057](https://github.com/unslothai/unsloth/issues/14057), Strix Halo Docker GPU passthrough [#5405](https://github.com/unslothai/unsloth/issues/5405))
- **Infrastructure**:
  - DeepInfra added as a native API provider in Studio with service tier support ([PR #14149](https://github.com/unslothai/unsloth/pull/14149))

---

## 4. Performance & Optimization
- **Inference**:
  - Up to 5x faster inference via 95% cache hit rate, MoE Strata-style fixes, and slowdown resolutions (v0.1.907-beta)
  - Qwen3 decode RoPE cache fix to prevent out-of-bounds indexing at explicit positions ([PR #14156](https://github.com/unslothai/unsloth/pull/14156))
- **Training**:
  - Context parallelism optimization: only wrap trainer methods when CP is enabled, reducing overhead for non-CP workloads ([PR #14152](https://github.com/unslothai/unsloth/pull/14152))
  - Optimizer state offload fix for DTensor/FSDP2 checkpoint resumption ([PR #14155](https://github.com/unslothai/unsloth/pull/14155))
  - FSDP2 QLoRA fixes: prevent 4-bit weight corruption in loader dtype pass and fix merged_4bit save ([PR #14165](https://github.com/unslothai/unsloth/pull/14165))
  - Hybrid packing + block compile fixes for guard crashes, skipped varlen, and cross-document leaks ([PR #13956](https://github.com/unslothai/unsloth/pull/13956))
  - Prebuilt wheel size reduction: drop -lineinfo, unreachable SASS, and flash-attn PTX; add extension-free mamba-ssm ([PR #14142](https://github.com/unslothai/unsloth/pull/14142))
- **UI/UX**:
  - Up to 10x faster multi-chat UI/UX (v0.1.907-beta)
  - Improved compaction across all APIs and UI (v0.1.907-beta)

---

## 5. Stability & Regressions
### High Severity
1. **Long-context chat lag** ([#12552](https://github.com/unslothai/unsloth/issues/12552)): Reported on Windows 10 + RTX GPU, affecting both desktop app and web UI. Closed 2026-10-17 (resolved via v0.1.907-beta performance upgrades).
2. **KV cache loss on model reload** ([#9037](https://github.com/unslothai/unsloth/issues/9037)): Open. Long chats redo full prefill after model reload because slot KV is only saved on idle auto-unload. No fix PR linked yet.
3. **Qwen2.5 72B 4-bit OOM at 32k context** ([#2937](https://github.com/unslothai/unsloth/issues/2937)): Closed. Reported on A800; 24k context works correctly.

### Medium Severity
1. **UNSLOTH_RETURN_LOGITS environment variable reset** ([#3071](https://github.com/unslothai/unsloth/issues/3071)): Closed (fixed-pending confirmation). Variable resets to "0" at training start on Gemma 3.
2. **Mistral 3.1/3.2 SFT abnormally high loss** ([#2786](https://github.com/unslothai/unsloth/issues/2786)): Closed.
3. **Gemma4 e2b generation failure on Windows** ([#13696](https://github.com/unslothai/unsloth/issues/13696)): Closed. Training succeeds but inference produces no output.
4. **Windows MXC Sandbox enablement failure** ([#13656](https://github.com/unslothai/unsloth/issues/13656)): Closed. Unclear instructions and enablement errors on Windows 11.

### Low Severity / UI
1. **Linux AppImage window resize problem** ([#12845](https://github.com/unslothai/unsloth/issues/12845)): Open. Affects Arch/GNOME/Wayland, with associated framerate issues.
2. **Multi-user model sync issue** ([#12365](https://github.com/unslothai/unsloth/issues/12365)): Closed. Multiple LAN accounts accessing the same server show incorrect loaded model state.

---

## 6. What This Means for Application Developers
- **Production inference upgrades**: The 5x inference speedup and 95% cache hit rate in v0.1.907-beta directly reduce latency and cost for chat/agent workloads — prioritize upgrading if you run multi-turn applications.
- **New model options**: Nemotron 3.5 (24GB VRAM footprint) and Muse Spark Open expand local deployment options for enterprise and creative use cases without cloud dependency.
- **Agent capabilities**: Native browser control (v0.1.906-beta) eliminates the need for external tooling stacks for web navigation agents, reducing integration complexity.
- **Training scalability**: Context parallelism and FSDP2 QLoRA improvements unblock larger fine-tuning workloads on multi-GPU setups, with better memory efficiency for 70B+ parameter models.
- **Studio UX refinements**: Image editing, drag-and-drop asset reuse, per-model sampling preset memory, and improved audio error handling simplify building multimedia workflows on the Unsloth platform.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*