# AI Infrastructure Weekly Digest 2026-09-14

> Generated: 2026-09-14 00:53 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# AI Inference Infrastructure Cross-Project Comparison Report | 2026-09-14
---

## 1. Ecosystem Overview
The past week saw the AI inference ecosystem coalesce around three core priorities: production-hardening support for next-generation sparse attention models (DeepSeek-V4 family, Qwen3.8-Flash, GLM-5.3-Flash), expanding cost efficiency via KV cache and quantization innovations, and closing cross-platform parity gaps between NVIDIA CUDA, AMD ROCm/Vulkan, and consumer hardware. Server-grade engines vLLM and SGLang advanced execution architecture overhauls and distributed serving features, while edge/local runtimes llama.cpp and Ollama focused on stability, cross-platform compatibility, and tooling UX. Up the stack, gateway and fine-tuning layers pushed for lower overhead, tighter security, and broader ecosystem integration, with sparse model compatibility and deterministic output remaining the two most widely shared pain points across all projects.

---

## 2. Activity Comparison
| Project | High-Severity Open Issues | Active PRs (Tracked) | Release Status (Past 7 Days) |
|---------|---------------------------|----------------------|-------------------------------|
| vLLM | 4 high-severity + 6 medium | 10+ active PRs (core engine, kernels, ROCm) | **v0.29.0 stable release** (594 commits, 277 contributors; MRV2 default rollout complete) |
| SGLang | 4 high-severity + 3 medium + CI backlog | 15+ active PRs (KV cache, CP, hardware support) | No new release; active Q3 roadmap development |
| llama.cpp | 1 high-severity open + 2 high fixed | 8+ active PRs (backends, MoE streaming, parser) | 10 incremental builds (b10934 → b10948; no breaking API changes) |
| Ollama | 1 critical (license compliance) + 3 high-severity | 3 active PRs (model support, cleanup) | No new release |
| LiteLLM | 7 high/medium-severity (rate limiting + compatibility) | 5+ active PRs (provider fixes, guardrails) | 5 previews/stable patches (v1.100.1, v1.101-rc, v1.102-rc; cosign-signed images) |
| Unsloth | 3 open medium-severity | 8+ active PRs (diffusion, quantization, Studio) | 2 beta releases (v0.1.807/808-beta; performance + cross-platform fixes) |

---

## 3. Model Support Race
Sparse attention architectures from DeepSeek, Qwen, and GLM dominated new model support work across the ecosystem, with uneven progress by project:
- **vLLM**: Leads in breadth of sparse model integration work, with active compatibility fixes for DeepSeek-V4-Flash (Ampere SM8x), Qwen3.8-Flash-Next, GLM-5.3-Flash, and Gemma4; v0.29.0 expanded MRV2 architecture support across all model types but left critical sparse model edge cases open.
- **SGLang**: Pulled ahead on DeepSeek-V4 family support, with DeepSeek V4.1 support in review and dedicated ROCm optimization for DeepSeek-V4 workloads; also leads in DSA model context parallelism enablement.
- **llama.cpp**: Added initial DeepSeek V4.1 conversion support (in review) and advanced Kimi-K3 hybrid attention model integration, trailing server engines on production-grade sparse model tuning.
- **Ollama**: Shipped DeepSeek-V4.1-Flash on its hosted Cloud tier, with local sparse model support limited by upstream dependency gaps; focused on Gemma 4 vision metadata fixes.
- **LiteLLM**: Expanded provider-side model access with a new `aiand` provider route and OpenRouter Qwen cache control forwarding, positioning itself as a compatibility abstraction layer rather than a native model implementation leader.
- **Unsloth**: Differentiated on multimodal/generative model support, adding NVFP4 quantization for video models (Wan2.2, HunyuanVideo) and BF16 image model fast-path support, plus Blender MCP and Hermes model detection.

**Leaderboard**: vLLM and SGLang are tied for leadership in dense/sparse LLM serving support, with SGLang leading AMD ROCm parity for DeepSeek models; Unsloth holds a clear lead in optimized diffusion/video model support.

---

## 4. Performance Frontier
Optimization efforts clustered in five high-impact areas, with clear specialization by project layer:
1. **KV Cache Efficiency**: The most actively invested area across serving engines. vLLM added cascade attention skip optimizations, split deterministic prefix caching, and incremental MoE expert offloading; SGLang expanded HiCache to all unified pool shapes, integrated LMCache as an external backend, and prototyped semantic fuzzy-match radix cache for cross-prompt reuse.
2. **Distributed Serving**: SGLang led development with decode context parallelism for DSA models, distributed weight data parallelism for MoE, and fast engine recovery (sub-second weight load via CUDA IPC); vLLM focused on stabilizing MRV2 pipeline parallelism and tensor-parallel speculative decoding.
3. **Quantization**: Unsloth rolled out whole-model and per-layer NVFP4 support for video/image models; vLLM prototyped nvfp4 KV cache on RTX 5090 (245K context on 32GB VRAM); SGLang enabled FP8 unified KV cache for DeepSeek-V4 on AMD gfx950.
4. **Kernel & Low-Level**: vLLM advanced Triton Tensor Descriptor adoption and removed GPU→CPU syncs in KDA chunk kernels; llama.cpp optimized grammar parser performance (1.2–1.3x speedup) and added CUDA deterministic top_k; Unsloth delivered 20% AMD speedup by defaulting to Vulkan over ROCm.
5. **Gateway Overhead**: LiteLLM’s Rust migration targets sub-1ms gateway overhead, addressing a longstanding gap between Python-based gateways and native serving engine performance.

---

## 5. Layer Positioning
The six projects occupy distinct, partially overlapping layers of the AI infrastructure stack:
| Layer | Projects | Core Value Proposition |
|-------|----------|------------------------|
| **Server-Grade Inference Engines** | vLLM, SGLang | High-throughput, low-latency serving for production LLM deployments; optimized for multi-GPU, distributed, and large-model workloads. vLLM leads in community scale and model breadth; SGLang differentiates on advanced KV cache, PD disaggregation, and AMD parity. |
| **Local/Edge Runtime** | llama.cpp, Ollama | Lightweight, cross-platform inference for consumer hardware, edge devices, and small deployments. llama.cpp provides the low-level GGUF runtime and kernel portability; Ollama packages llama.cpp into a user-friendly daemon with model library management and API endpoints. |
| **AI Gateway** | LiteLLM | Abstraction and control plane for routing requests across 100+ LLM providers; adds rate limiting, spend tracking, guardrails, and unified API compatibility across proprietary and open-source backends. |
| **Fine-Tuning & Development Suite** | Unsloth | Memory-efficient fine-tuning (QLoRA, GaLore) and local inference Studio tools; bridges training and serving with optimized model export and end-to-end developer workflows, with growing focus on diffusion/video models. |

---

## 6. Trend Signals
### Industry Trends
1. **Sparse attention is the new compatibility frontier**: DeepSeek-V4, Qwen-Flash, and GLM-Flash models are driving 30–40% of active issue and PR volume across all serving engines, with kernel compatibility, deterministic decoding, and KV cache design remaining unsolved pain points for production deployment.
2. **AMD is closing the CUDA gap for inference**: Two years ago, AMD support was an afterthought; this week, both SGLang (ROCm MegaMoEv2, FP8 KV) and Unsloth (Vulkan default, 20% speedup) shipped meaningful AMD performance gains, with DeepSeek-V4 workloads leading the parity push.
3. **KV cache innovation is moving beyond simple prefix caching**: Semantic fuzzy matching, out-of-process cache data planes, and cross-engine cache standards (LMCache) signal a shift from intra-engine cache optimization to inter-workload and cross-deployment KV reuse as a primary cost lever.
4. **Supply chain and compliance are moving up the stack**: LiteLLM’s cosign-signed Docker images and Ollama’s high-severity license compliance gap show that as open-source inference becomes production-critical, legal and security posture is no longer a secondary concern.

### Actionable Signals for Developers
- If deploying sparse attention models (DeepSeek-V4, Qwen3.8-Flash) on Ampere hardware, expect stability and correctness gaps across all engines for the next 2–4 weeks; validate output determinism near `indexer_budget` thresholds before production rollout.
- For cost-sensitive self-hosted teams, track three upcoming features that will deliver 30–70% efficiency gains: nvfp4 KV cache (vLLM/Unsloth), incremental MoE expert offloading (vLLM), and semantic KV cache matching (SGLang).
- Agent/tool-use developers should avoid Qwen3.8-Flash-Next on SGLang and Qwen 3.x tool parsing on Ollama due to known infinite loop and silent failure bugs; embed tool definitions in system prompts as a workaround until fixes land.
- For teams with strict reproducibility requirements, vLLM’s `--deterministic-prefix-caching` flag and ongoing batch invariant work address longstanding non-determinism issues, while Unsloth’s intermittent multi-turn determinism failures remain a risk for temperature=0 workflows.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest | 2026-09-14
---
## 1. Last 7 Days' Highlights
The vLLM project wrapped the full rollout of Model Runner V2 (MRV2) as the default execution path for all models in the v0.29.0 release, delivering CUDA graph memory profiling for KV cache auto-sizing alongside the architecture migration. Community focus remained heavily on sparse attention model compatibility (DeepSeek-V4-Flash, Qwen3.8-Flash-Next, GLM-5.3-Flash) and KV cache efficiency, with high-engagement discussions around Ampere GPU support for latest sparse models and non-deterministic decoding behavior. Active development this week centered on stabilizing MRV2 edge cases (speculative decoding, pipeline parallelism, hybrid attention+Mamba models) and expanding performance optimizations for ROCm and next-gen NVIDIA GPU architectures.

---
## 2. Releases & Breaking Changes
### v0.29.0 (new release)
- **Highlights**: 594 commits from 277 contributors (91 new contributors)
- **Core change**: [Model Runner V2 is now the default for all models](https://github.com/vllm-project/vllm/pull/53183), completing the rollout that launched with pooling models ([#48290](https://github.com/vllm-project/vllm/pull/48290))
- **New capability**: CUDA graph memory profiling for KV cache auto-sizing integrated with MRV2
- Migration note: Teams relying on custom MRV1 integrations or untested model architectures should validate behavior before upgrading; MRV1 remains available as a fallback for edge cases.

---
## 3. New Model & Hardware Support
### In Progress / Requested
- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 Ampere (SM8x) support**: Top community request (108 comments, 16 👍) — both checkpoints currently fail on A100/A800/RTX 30xx GPUs due to missing kernel compatibility. ([#50576](https://github.com/vllm-project/vllm/issues/50576))
- **nvfp4 KV cache on SM120 (RTX 5090)**: Working prototype achieves 245K context length on a 32GB RTX 5090 using FlashInfer nvfp4 kernels, which are not yet wired into vLLM’s KV cache path. ([#49011](https://github.com/vllm-project/vllm/issues/49011))
- **Gemma4 on Turing GPUs (SM7.5)**: All attention backends hit shared memory limits, blocking deployment on RTX 20xx/GTX 16xx hardware. ([#38918](https://github.com/vllm-project/vllm/issues/38918))
- **GLM-5.3-Flash**: v0.29.0 has checkpoint loading errors (TP2/EP2 configuration) and missing support for the `Glm5NextTextLinearAttention` architecture on B200 GPUs. ([#56007](https://github.com/vllm-project/vllm/issues/56007) · [#54062](https://github.com/vllm-project/vllm/issues/54062))
- **Qwen3.5 GGUF local paths**: Fails with "architecture qwen35 is not supported yet" even when `--hf-config-path` is provided. ([#36456](https://github.com/vllm-project/vllm/issues/36456))

### Active PRs
- MLA attention LoRA support for ROCm (dense + GLM sparse MLA routing). ([#56718](https://github.com/vllm-project/vllm/pull/56718))
- Qwen4Exp PLE UVA lookup kernel fix to enable FP8 table support on Ampere GPUs. ([#56362](https://github.com/vllm-project/vllm/pull/56362))
- Intel XPU test requirement alignment to match CUDA test suite coverage. ([#56704](https://github.com/vllm-project/vllm/pull/56704))

---
## 4. Performance & Optimization
### KV Cache & Scheduler
- **Cascade attention skip optimization**: Skips common-prefix block scanning in the scheduler when cascade attention is disabled, eliminating ~4000 Python iterations per step at 64k context for single-request workloads. ([#55652](https://github.com/vllm-project/vllm/pull/55652))
- **Split prefix caching (scheduler-level)**: Opt-in `--deterministic-prefix-caching` flag forces cache-miss prefills to split at the last block boundary, eliminating bf16 GEMM tiling divergence between cache-hit and cache-miss paths for consistent latency. ([#34046](https://github.com/vllm-project/vllm/pull/34046))
- **Incremental MoE expert offloading**: LFRU eviction + cross-layer prediction with CPU pinned memory and GPU expert cache, enabling oversize MoE models to run on smaller hardware; PR 1 is open for review. ([#38256](https://github.com/vllm-project/vllm/issues/38256))
- **Hybrid GDN prefix cache fix for MTP spec decoding**: Restores full prefix cache hit rates for Qwen3.5-122B-A10B with MTP, which previously had zero hits for prompt lengths aligned to the GDN page size. ([#52244](https://github.com/vllm-project/vllm/pull/52244))

### Speculative Decoding
- **Adaptive verification for all speculator types**: Extends adaptive verification from DSpark (with confidence heads) to all draft-model speculators (MTP, EAGLE3, DFlash 1&2, DSpark without confidence heads) for improved throughput. ([#52228](https://github.com/vllm-project/vllm/pull/52228))
- **Tensor Parallel Ngram-CPU decoding**: Revives TP-aware n-gram speculative decoding to eliminate redundant lookups across ranks, reducing CPU overhead for distributed deployments. ([#56732](https://github.com/vllm-project/vllm/pull/56732))

### ROCm Optimizations
- **MiniMax-M3 decode top-k tuning**: Optimized CTA launch policy for gfx950 short-context decode with topk=16. ([#55235](https://github.com/vllm-project/vllm/pull/55235))
- **DeepSeek-V4.1-Flash DSA decode mask stride**: Reduces logits workspace overhead by sizing the candidate mask grid to live context length instead of `max_model_len`. ([#56628](https://github.com/vllm-project/vllm/pull/56628))

### Kernel & Low-Level
- **KDA chunk kernel GPU→CPU sync removal**: Avoids per-prefill-step sync for Kimi K3 models by using host-side cu_seqlens for grid size calculation. ([#51540](https://github.com/vllm-project/vllm/pull/51540))
- **Triton Tensor Descriptor (TD) adoption strategy**: RFC to migrate Triton kernels from raw pointer arithmetic to upstream-recommended `tl.make_tensor_descriptor` API for better maintainability and performance. ([#42545](https://github.com/vllm-project/vllm/issues/42545))

---
## 5. Stability & Regressions
### High Severity
1. **KV cache corruption in MRV2 speculative decoding (DP mode)**: Idle DP rank dummy draft decode steps write KV through stale block-table rows, causing data corruption. Fix PR open. ([#56734](https://github.com/vllm-project/vllm/pull/56734))
2. **vLLM engine hang on startup**: Long-standing issue (43 comments, 10 👍) with engine process startup hangs, reported across multiple environments; no root cause fix merged yet. ([#17676](https://github.com/vllm-project/vllm/issues/17676))
3. **Qwen3.8-Flash-Next non-deterministic greedy decoding (sm121/GB10)**: Temperature=0 requests return different outputs when prompt length nears `indexer_budget`, caused by `persistent_topk` behavior in prefill sparse attention. ([#54521](https://github.com/vllm-project/vllm/issues/54521))
4. **MRV1 pipeline parallelism + structured outputs FSM desync**: Intermittent 500 errors with "Failed to advance FSM" due to async scheduling desync. Fix PR open. ([#45015](https://github.com/vllm-project/vllm/pull/45015))

### Medium Severity
- **DFlash2 + YaRN prefix cache zero reuse**: Identical 1.04M prompts get zero prefix-cache hit with DFlash2, while target-only reuses ~1.039M tokens. ([#54094](https://github.com/vllm-project/vllm/issues/54094))
- **Mamba-2 Triton kernel illegal instruction on SM121 (DGX Spark)**: Crashes in async mode, requires `CUDA_LAUNCH_BLOCKING=1` as workaround. ([#37431](https://github.com/vllm-project/vllm/issues/37431))
- **MTP draft KV cache group misalignment on hybrid models**: Qwen3.5/Qwen3-Next MTP drafters hit "flag-all draft groups" fallback on hybrid attention+Mamba paths. Fix PR open. ([#55390](https://github.com/vllm-project/vllm/pull/55390))
- **Empty KV cache group crashes in pipeline parallelism**: PP workers fail on empty projected KV-cache groups. Fix PR open. ([#54793](https://github.com/vllm-project/vllm/pull/54793))
- **Stale HPC QK-norm weights after weight refit**: `HpcRopeNorm` float32 mirror weights are not updated on weight refit, causing correctness degradation. Fix PR open. ([#56706](https://github.com/vllm-project/vllm/pull/56706))
- **KV offload + HMA failure on subsequent chat requests**: Fails on second request with KV offload and heterogeneous memory access enabled. ([#41515](https://github.com/vllm-project/vllm/issues/41515))

---
## 6. What This Means for Application Developers
1. **Plan for MRV2 migration**: With v0.29.0 making MRV2 default, test your deployment now if you use custom models, speculative decoding, or pipeline parallelism — edge case fixes are landing rapidly (PP FSM desync, hybrid Mamba state alignment, spec decode KV corruption) but may not all be in the release build.
2. **Sparse attention model deployments have active compatibility gaps**: If you are running DeepSeek-V4-Flash on Ampere (A100/A800) or GLM-5.3-Flash on any hardware, expect stability issues and monitor the linked issues for fix progress; validate correctness for Qwen sparse models near `indexer_budget` thresholds before production rollout.
3. **New efficiency options for cost-sensitive workloads**: Incremental MoE expert offloading enables running larger MoE models on smaller GPU fleets, and nvfp4 KV cache support (when merged) will deliver ~70% longer context on Blackwell consumer GPUs — both are high-impact for self-hosted inference teams.
4. **Determinism improvements are in progress**: The batch invariant feature track and split prefix caching flag address long-standing non-determinism issues that affect agent workflows relying on consistent outputs; teams with strict reproducibility requirements should track the batch invariant issue and test the `--deterministic-prefix-caching` flag.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Weekly Digest | 2026-09-14
Source: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)

---

## 1. Last 7 Days' Highlights
This week SGLang advanced key 2026 Q3 roadmap priorities: decode context parallelism for DSA models, production-grade HiCache expansion, and AMD ROCm performance parity for DeepSeek-V4 workloads. CI stability remained a focus, with 6 broken and 11 flaky tests tracked in the main branch, while no new release was cut in the past 7 days. Work also progressed on KV cache ecosystem integrations (LMCache, semantic fuzzy matching) and observability tooling.

---

## 2. Releases & Breaking Changes
No new releases were published in the last 7 days. No formal breaking change announcements were tracked.

---

## 3. New Model & Hardware Support
| Category | Details | Link |
|----------|---------|------|
| Model | DeepSeek V4.1 support added (in review) | [PR #38798](https://github.com/sgl-project/sglang/pull/38798) |
| Model | SenseNova-U1 / U1.5 feature & performance tracking ongoing | [Issue #37742](https://github.com/sgl-project/sglang/issues/37742) |
| Model | New diffusion model enablement tracker (Omni-Dreams online support pending) | [Issue #27214](https://github.com/sgl-project/sglang/issues/27214) |
| Hardware (AMD) | Aiter MegaMoEv2 backend integration for DeepSeek-V4 on ROCm (in review) | [PR #35619](https://github.com/sgl-project/sglang/pull/35619) |
| Hardware (AMD) | Official consumer Radeon RDNA3/RDNA4 (gfx1100/gfx1201) enablement plan in progress | [Issue #30599](https://github.com/sgl-project/sglang/issues/30599) |
| Hardware (NVIDIA) | SM100/SM103 (B200/B300) TP8 FlashInfer true sequence parallelism for Llama 3.1 70B (opt-in, in review) | [PR #36766](https://github.com/sgl-project/sglang/pull/36766) |
| Hardware (NPU) | Decode context parallel support for DSA models on NPU (in review) | [PR #37787](https://github.com/sgl-project/sglang/pull/37787) |
| Quantization | FP8 two-pool unified KV cache enabled for DeepSeek-V4 on AMD gfx950 (in review) | [PR #37413](https://github.com/sgl-project/sglang/pull/37413) |
| Frontend | External multimodal processor support added to Rust frontend, enabling model-package extensions | [PR #39329](https://github.com/sgl-project/sglang/pull/39329) |

---

## 4. Performance & Optimization
| Area | Details & Benchmark Numbers | Link |
|------|------------------------------|------|
| Engine Recovery | Fast Engine Recovery Phase 1 landed: per-rank weight cache daemon reduces Qwen3-235B FP8 weight load time from ~306–327s to <1s via CUDA IPC | [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) |
| KV Cache | LMCache integration added as an external backend for UnifiedRadixCache (persistent reusable KV blocks, in review) | [PR #38652](https://github.com/sgl-project/sglang/pull/38652) |
| KV Cache | HiCache expanded to all unified pool shapes (MHA+Mamba, MLA+Mamba, SWA, full/SWA/Mamba pools, in review) | [PR #37507](https://github.com/sgl-project/sglang/pull/37507) |
| KV Cache | Out-of-process HiCache data plane with device-memory IPC proposed (RFC in review) | [Issue #37372](https://github.com/sgl-project/sglang/issues/37372) |
| KV Cache | Semantic fuzzy-match radix cache for cross-prompt KV reuse (paraphrased RAG, multi-user workloads, in review) | [PR #31057](https://github.com/sgl-project/sglang/pull/31057) |
| Context Parallelism | Decode context parallel (DCP) for DSA attention family (GLM-5.3 / DeepSeek-V3.2) on Hopper enabled (in review) | [PR #39330](https://github.com/sgl-project/sglang/pull/39330) |
| Context Parallelism | Q3 CP roadmap ongoing: current support covers prefill CP for DSA and MHA/GQA models, decode CP in active development | [Issue #21788](https://github.com/sgl-project/sglang/issues/21788) |
| AMD Performance | gfx95 chunked-prefill budget fill fix to eliminate underutilization of Aiter MLA compute (in review) | [PR #32888](https://github.com/sgl-project/sglang/pull/32888) |
| Speculative Decoding | Ngram speculative decoding roadmap ongoing: trie-based draft token tree generation in development | [Issue #21052](https://github.com/sgl-project/sglang/issues/21052) |
| Speculative Decoding | EAGLE temperature sampling support on ROCm to fix DeepSeek-V4 benchmark accuracy gap (in review) | [PR #39253](https://github.com/sgl-project/sglang/pull/39253) |
| MoE Parallelism | Distributed Weight Data Parallelism (DWDP) for sparse MoE models proposed (async point-to-point instead of collectives, in review) | [Issue #22084](https://github.com/sgl-project/sglang/issues/22084) |
| LoRA | DP attention support for LoRA backends (in review) | [PR #36389](https://github.com/sgl-project/sglang/pull/36389) |
| Latency | Non-streaming TTFT calculation fix: first token time no longer delayed by force-stream interval (in review) | [PR #39270](https://github.com/sgl-project/sglang/pull/39270) |
| Observability | `kv_cache_usage_perc` Prometheus gauge added (aligns with vLLM metric expectations, in review) | [PR #34714](https://github.com/sgl-project/sglang/pull/34714) |

---

## 5. Stability & Regressions
Ranked by severity (impact + comment activity):

1. **Critical: Qwen3.8-Flash-Next tool parser infinite loop**
   - Qwen3.8-Flash-Next with qwen3_coder tool parser loops indefinitely on token ID 0, affecting agent workloads
   - Status: Open, no fix PR linked yet
   - [Issue #36537](https://github.com/sgl-project/sglang/issues/36537)

2. **High: DeepSeek-V4 245K context decode hang on H20**
   - DeepSeek-V4 (dsv4 backend + DSPARK) TP=8 on 8×H20 hangs indefinitely at ~245K context, with 100% GPU utilization and low power draw; watchdog kills server
   - Status: Open, no fix PR linked yet
   - [Issue #33549](https://github.com/sgl-project/sglang/issues/33549)

3. **High: GLM-5.2 FP4 + EAGLE illegal memory access**
   - `nvidia/GLM-5.2-NVFP4` with EAGLE speculative decoding crashes with CUDA illegal memory access in flashinfer_trtllm batched-GEMM on B200/B300
   - Status: Open, no fix PR linked yet
   - [Issue #30209](https://github.com/sgl-project/sglang/issues/30209)

4. **High: Generation health checks collapse DP long-prefill throughput**
   - Health check requests perturb DP user routing state, causing degraded throughput for long-prefill workloads
   - Status: Open, no fix PR linked yet
   - [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)

5. **High: sgl-router PD circuit breaker permanent fake-dead prefill**
   - Open circuit breaker still dispatches to decode instances, leaving prefill endpoints marked permanently dead after client timeout bursts
   - Status: Open, no fix PR linked yet
   - [Issue #31206](https://github.com/sgl-project/sglang/issues/31206)

6. **Medium: PP8 disaggregated prefill ~30s TTFT floor on Kimi-K3**
   - Load-independent 30s first-token latency floor for PD-disaggregated Kimi-K3 with PP8 prefill
   - Status: Open, no fix PR linked yet
   - [Issue #34815](https://github.com/sgl-project/sglang/issues/34815)

7. **Medium: Unified-cache default flip regresses long-prefix decode throughput**
   - PR #34653 unified cache default causes throughput regression on Spark and Thor platforms for long-prefix workloads
   - Status: Closed (resolved)
   - [Issue #36131](https://github.com/sgl-project/sglang/issues/36131)

8. **Medium: Mamba radix cache prefix hit degradation after split**
   - `MambaRadixCache` turns valid prefix matches into 0-hit after cache splits on fresh prefills
   - Status: Open, no fix PR linked yet
   - [Issue #22935](https://github.com/sgl-project/sglang/issues/22935)

9. **CI Stability**
   - Main branch status: 6 broken tests, 11 flaky tests, 990 recently fixed (as of 2026-09-13)
   - [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)
   - CI test time estimates updated to improve parallel job load balancing: [PR #39331](https://github.com/sgl-project/sglang/pull/39331)

10. **Low: Prometheus `avg_request_queue_latency` not collected**
    - Long-standing gap in request queue latency metrics
    - Status: Open, good first issue
    - [Issue #6357](https://github.com/sgl-project/sglang/issues/6357)

---

## 6. What This Means for Application Developers
- **Agent workloads**: Avoid Qwen3.8-Flash-Next with tool use on SGLang for now due to the infinite token loop bug; monitor [Issue #36537](https://github.com/sgl-project/sglang/issues/36537) for fixes. The distributed KV cache system roadmap ([Issue #21846](https://github.com/sgl-project/sglang/issues/21846)) targets the KV storage bottlenecks driving agent cost growth.
- **Large model deployments**: The weight cache daemon ([Issue #33522](https://github.com/sgl-project/sglang/issues/33522)) cuts large model restart times from minutes to sub-second, making dynamic scaling and fault recovery far more practical for >100B parameter models.
- **AMD GPU users**: DeepSeek-V4 ROCm support is maturing with MegaMoEv2 integration ([PR #35619](https://github.com/sgl-project/sglang/pull/35619)) and FP8 unified KV support ([PR #37413](https://github.com/sgl-project/sglang/pull/37413)), narrowing the feature/performance gap with CUDA deployments.
- **Observability**: The upcoming `kv_cache_usage_perc` Prometheus metric ([PR #34714](https://github.com/sgl-project/sglang/pull/34714)) will align SGLang monitoring with vLLM, simplifying migrations and multi-engine dashboards.
- **PD disaggregation**: Two high-severity router/scheduler bugs ([#31206](https://github.com/sgl-project/sglang/issues/31206), [#35241](https://github.com/sgl-project/sglang/issues/35241)) affect PD deployments at scale; test health check and circuit breaker behavior carefully before production rollout.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest — 2026-09-14

---

## 1. Last 7 Days' Highlights
This week's llama.cpp development focused heavily on multi-backend stability fixes, core inference efficiency improvements, and expanded model architecture coverage. Notable milestones include a workaround for a NVIDIA Vulkan queue-submit driver bug, a 1.2x–1.3x speedup for the built-in grammar parser, and initial conversion support for DeepSeek V4.1. Work also progressed on SYCL graph replay, MoE expert disk streaming, and server-side Responses API enhancements.

---

## 2. Releases & Breaking Changes
Ten incremental builds (b10934 → b10948) shipped in the last 7 days with no reported API-breaking changes to `libllama`.
- Key merged release changes:
  - Structured JSON logging via new `LOG_JSON` macro in `common/` ([#28586](https://github.com/ggml-org/llama.cpp/pull/28586), b10935)
  - Internal `common_schema` representation for JSON schemas, refactoring the json-schema-to-grammar pipeline ([#28736](https://github.com/ggml-org/llama.cpp/pull/28736), b10934)
- Full release attestations and macOS/iOS builds are available at [llama.cpp/releases](https://github.com/ggml-org/llama.cpp/releases).

---

## 3. New Model & Hardware Support
### Models
- **Kimi-K3 text model** (in review): hybrid KDA+MLA attention with cross-layer residual attention, latent MoE, and situ activation ([#26185](https://github.com/ggml-org/llama.cpp/pull/26185))
- **DeepSeek V4.1** (`deepseek41` arch, in review): conversion support for `DeepseekV41ForCausalLM`, reusing most V4 code paths with adjusted text config nesting ([#28696](https://github.com/ggml-org/llama.cpp/pull/28696))
- **fraunhofer-iis/elmod-2.7b-it** pre-tokenizer (in review): new `escape_after_split` vocab flag to match Metaspace pre-tokenizer behavior ([#28845](https://github.com/ggml-org/llama.cpp/pull/28845))
- Qwen3-coder chat parser improvements for complex types and schema support ([#28742](https://github.com/ggml-org/llama.cpp/pull/28742), b10936)

### Hardware / Backends
- **s390x VXE guard**: VXE-only repack helpers now properly guarded for non-VXE builds ([#28775](https://github.com/ggml-org/llama.cpp/pull/28775), b10946); additional non-VXE CI test coverage in progress ([#28776](https://github.com/ggml-org/llama.cpp/pull/28776))
- **SYCL memory error fix**: resolved unsupported ZES API issues, adjusted build detection for Level Zero SDK, and updated SYCL docs ([#28227](https://github.com/ggml-org/llama.cpp/pull/28227), b10944)
- **SYCL graph record/replay** (in review): port of CUDA graph functionality to SYCL, with data reordering before recording to avoid hangs ([#28725](https://github.com/ggml-org/llama.cpp/pull/28725))
- **CUDA BF16 fallback** (merged): older pre-RDNA3/pre-CDNA AMD GPUs now fall back to F32 GEMM instead of using untuned BF16 stub kernels ([#28846](https://github.com/ggml-org/llama.cpp/pull/28846))
- **XDNA backend feature request**: growing community interest in AMD XDNA accelerator support (32 👍) ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))
- **ANE backend roadmap**: ongoing tracking issue for Apple Neural Engine support via new CoreML APIs (44 👍) ([#10453](https://github.com/ggml-org/llama.cpp/issues/10453))

---

## 4. Performance & Optimization
- **Grammar parser speedup (1.2x–1.3x)**: single-lookup optimization and removal of extra copies in the in-house grammar engine ([#26885](https://github.com/ggml-org/llama.cpp/pull/26885))
- **CPU thread shared buffer optimization (in review)**: per-thread separate buffers in `ggml_compute_forward_mul_mat_id` to eliminate false sharing and barrier overhead ([#28861](https://github.com/ggml-org/llama.cpp/pull/28861))
- **Backend scheduler reuse (in review)**: keeps the `ggml_backend_sched` across re-reserves instead of recreating it per request, eliminating repeated alloc/free overhead in `llama-server` sampler attach/detach flows ([#28872](https://github.com/ggml-org/llama.cpp/pull/28872))
- **CUDA deterministic top_k (in review)**: radix-select fallback for `cub::DeviceTopK` unavailability (CCCL <3.2 / CUDA 12.4) to avoid full-row sort overhead for sparse-attention models ([#28871](https://github.com/ggml-org/llama.cpp/pull/28871))
- **MoE expert disk streaming (in review)**: SSD streaming of routed MoE expert weights with device-side slot cache, enabling models larger than RAM to run ([#25294](https://github.com/ggml-org/llama.cpp/pull/25294))
- **OpenCL row-alignment expansion**: noshuffle row-alignment rule extended from q6_K to q4_K, q5_K, and q8_0 ([#28575](https://github.com/ggml-org/llama.cpp/pull/28575), b10937)
- **Flash-attention test size reduction**: smaller FA test sets to speed up CI ([#28842](https://github.com/ggml-org/llama.cpp/pull/28842), b10941)

---

## 5. Stability & Regressions
### High Severity
1. **NVIDIA Vulkan queue-submit driver bug** — fixed: mutex added around `vkQueueSubmit` to work around synchronization corruption from concurrent queue submissions on the same device ([#28830](https://github.com/ggml-org/llama.cpp/pull/28830), b10938)
2. **Nemotron-H expert FFN size zero-divisor crash** — fixed: guarded `n_ff/n_expert_used` fallback when `expert_feed_forward_length` is unset for a layer ([#28779](https://github.com/ggml-org/llama.cpp/pull/28779), b10947)
3. **Qwen3.5 9B tool call parsing failure with thinking enabled** — open: model outputs XML-formatted tool calls inside `<think>` blocks and stops generation (60 comments, 17 👍) ([#20837](https://github.com/ggml-org/llama.cpp/issues/20837))

### Medium Severity
4. **Vision model KV cache save failure** — open: `/slots/{id}?action=save` API does not work for vision-enabled models (38 comments) ([#19466](https://github.com/ggml-org/llama.cpp/issues/19466))
5. **Speculative decoding divergence on quantized targets** — open: greedy output from draft-MTP/draft-dspark mismatches vanilla inference on quantized (e.g. Q4_K_M) targets, but matches on BF16 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))
6. **SYCL xe2 segfault** — closed: `GGML_SYCL_DEVICE_ARCH=xe2` segfault issue resolved with recent fixes ([#25808](https://github.com/ggml-org/llama.cpp/issues/25808))
7. **WebGPU HY_V4 test failure** — fixed: HY_V4 excluded from WebGPU `test-llama-archs` CI ([#28855](https://github.com/ggml-org/llama.cpp/pull/28855), b10948)

### Lower Severity
8. **SYCL continuous-batching GPU idle power issue** — open: `-cb` flag pins Intel Battlemage GPUs to `gt-c0` state permanently, preventing idle power savings ([#24946](https://github.com/ggml-org/llama.cpp/issues/24946))
9. **URL parsing bug for query-only URLs** — fix in review: `common_http_parse_url()` now treats `?` as authority terminator per RFC 3986 ([#28866](https://github.com/ggml-org/llama.cpp/pull/28866))
10. **MiMo v2 SWA pattern load error** — fix in review: corrected misuse of `get_key_or_arr` for SWA pattern loading ([#28865](https://github.com/ggml-org/llama.cpp/pull/28865))

---

## 6. What This Means for Application Developers
- **Production deployments using Vulkan on NVIDIA** should upgrade to at least b10938 to avoid intermittent synchronization crashes from concurrent queue submission.
- **Structured logging users** can now use the new `LOG_JSON` macro from `common/` to emit machine-readable logs, simplifying integration with observability pipelines.
- **Grammar-constrained generation** will see 20–30% lower latency on the built-in parser with the upcoming `#26885` merge; applications already using llguidance are unaffected.
- **Agent/tool-use apps targeting Qwen3-coder** get improved complex-type and schema parsing in b10936, with a follow-up PR ([#28869](https://github.com/ggml-org/llama.cpp/pull/28869)) in progress to fix prompt cache reuse when reasoning budgets are exhausted.
- **Server operators** should track the backend scheduler reuse PR ([#28872](https://github.com/ggml-org/llama.cpp/pull/28872)) — it is expected to reduce per-request overhead significantly for high-throughput serving workloads.
- **Responses API (`/v1/responses`) implementations** will soon support `input_image` content in function call outputs, enabling vision tool workflows ([#28847](https://github.com/ggml-org/llama.cpp/pull/28847)).
- **MoE deployments with limited RAM** will benefit from the in-progress MoE disk streaming feature ([#25294](https://github.com/ggml-org/llama.cpp/pull/25294)), which enables running models larger than available system memory.

---
*Source: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Weekly Digest | 2026-09-14
Source: [github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 1. Last 7 Days' Highlights
No new releases shipped this week, but the project saw active work on critical platform gaps (Windows image generation, Gemma 4 vision correctness, Windows uninstall cleanup) and growing friction around tool-call parsing reliability across Qwen/Gemma model families. A high-priority licensing compliance issue (#3185) remained open and active, with 58 total comments and 275 👍, as the community pushed for proper MIT attribution for statically linked dependencies like llama.cpp in release binaries.

---

## 2. Releases & Breaking Changes
None. No new versions were published in the last 7 days.

---

## 3. New Model & Hardware Support
### Requests in Progress
- **SARVAM-30b / 105b model request**: Community request to add SARVAM large models to the Ollama library, 25 comments. [Issue #14319](https://github.com/ollama/ollama/issues/14319)
- **Gnani Evon-v3.3 30B-A3B model request**: New request for the Gnani 30B MoE model. [Issue #18427](https://github.com/ollama/ollama/issues/18427)
- **DeepSeek-V4.1-Flash Cloud support**: *Closed/resolved* — model added to Ollama Cloud, 27 👍. [Issue #18360](https://github.com/ollama/ollama/issues/18360)
- **ppc64le (IBM POWER) architecture support**: Long-standing feature request updated; install script currently fails on POWER8/POWER9 servers. 27 comments. [Issue #796](https://github.com/ollama/ollama/issues/796)
- **Gemma 4 unified vision support (PR in progress)**: Fixes GGUF metadata scanning so single-GGUF Gemma4 models correctly report vision/audio capabilities via `/api/tags`. [PR #16879](https://github.com/ollama/ollama/pull/16879)

### Format Compatibility
- **IQ3_S quantization for Qwen3.8-27B-GSQ-RCO-GGUF**: Reported as returning empty content on current builds; support status unconfirmed. [Issue #18297](https://github.com/ollama/ollama/issues/18297)

---

## 4. Performance & Optimization
### Regressions Reported
- **Model loading performance regression (0.23.4 → 0.30.x+)**: Significant slowdown reported across all large models (e.g. GPT-OSS:120b). User deferred upgrade due to the issue. [Issue #18373](https://github.com/ollama/ollama/issues/18373)
- **Qwen3.5 122B load time doubled on Strix Halo**: 61s (v0.24) → 116s (v0.30.4), despite 40% faster prompt processing. [Issue #16501](https://github.com/ollama/ollama/issues/16501)
- **Unnecessary multi-GPU split**: v0.30.6 spreads a model across GPUs even when a single GPU has sufficient VRAM (e.g. 20GB Gemma 4 31b on a 3090 + 4060 setup). [Issue #16599](https://github.com/ollama/ollama/issues/16599)

### PRs in Progress
- **Vulkan integrated GPU direct I/O fix**: *Closed/merged* — resolves model load timeouts on Virtio-GPU/Venus VMs by matching CUDA/ROCm direct I/O behavior. [PR #18124](https://github.com/ollama/ollama/pull/18124)
- **Intermediate blob cleanup after quantization**: `ollama create --quantize` left orphaned blobs (one user accumulated 830GB of unreferenced data vs 188GB of active models). PR cleans up F16 intermediates post-import. [PR #18424](https://github.com/ollama/ollama/pull/18424)
- **Install script retry robustness**: Proposal to add `curl --retry` options to `install.sh` for unreliable connections. [Issue #12478](https://github.com/ollama/ollama/issues/12478)

---

## 5. Stability & Regressions
Ranked by severity / user impact:
1. **[Critical] License compliance gap**: Release artifacts do not include MIT copyright notices for statically linked dependencies (llama.cpp etc.). 58 comments, 275 👍. [Issue #3185](https://github.com/ollama/ollama/issues/3185)
2. **[High] ROCm KV state bleed on Strix Halo (gfx1151)**: Sequential unrelated requests leak prior context — response content describes the *previous* prompt. Reproducible on `ollama:0.32.14-rocm`. [Issue #17847](https://github.com/ollama/ollama/issues/17847)
3. **[High] Qwen3.8 500 error during tool loops**: "no user query found in messages" occurs when multi-step tool usage overflows the context window. *Fix PR open*: #17894 preserves the most recent user message during truncation. [Issue #17778](https://github.com/ollama/ollama/issues/17778) · [PR #17894](https://github.com/ollama/ollama/pull/17894)
4. **[High] Tool-call parse failures silently discard output**: Failed tool call parsing returns empty content to the user with no error signal, despite using completion tokens. [Issue #17274](https://github.com/ollama/ollama/issues/17274)
5. **[Medium] Gemma4 image input broken on Windows**: Multimodal Gemma4 models do not process images on Windows builds. 44 comments. [Issue #16532](https://github.com/ollama/ollama/issues/16532)
6. **[Medium] Qwen tool calling parser mismatches**: Qwen3.6 uses the qwen3.5 parser which intermittently returns 500 on valid-but-drifting tool output; Qwen3 also has malformed tool definition rendering when tools are passed via `/api/chat` (works when embedded in system prompt). [Issue #16383](https://github.com/ollama/ollama/issues/16383) · [Issue #14601](https://github.com/ollama/ollama/issues/14601)
7. **[Medium] Cloud model JSON schema ignored**: `qwen3-coder:480b-cloud` ignores the `format` reply schema, returning unstructured JSON. [Issue #12362](https://github.com/ollama/ollama/issues/12362)
8. **[Medium] glm-5.3:cloud endless reasoning loop**: Cloud-hosted glm-5.3 enters infinite reasoning and aborts tasks, while the official Z.AI API works correctly. [Issue #18193](https://github.com/ollama/ollama/issues/18193)
9. **[Medium] AMD RDNA3 (gfx1200) TensileLibrary error**: `qwen3.8:27b` crashes on RX 9060 XT with missing `TensileLibrary_lazy_gfx1200.dat`. [Issue #17782](https://github.com/ollama/ollama/issues/17778)
10. **[Medium] Gemma3 structured output truncation on quoted input**: `gemma3:12b` with `format` JSON schema stops early when input contains double-quoted terms. [Issue #18094](https://github.com/ollama/ollama/issues/18094)

---

## 6. What This Means for Application Developers
- **Expect tool-call reliability gaps on Qwen 3.x / 3.6 / 3.8**: If building agent workflows, embed tool definitions in the system prompt instead of using the `/api/chat` `tools` parameter to avoid known parser/renderer bugs, and add client-side retry logic for 500 responses during multi-step tool loops.
- **Gemma 4 multimodal is not yet reliable cross-platform**: Avoid shipping Windows + Gemma4 vision workflows until #16532 and #16879 land; test on Linux first.
- **Monitor disk usage if you use `ollama create --quantize`**: Until #18424 ships, large quantized imports will leave behind huge orphaned blobs — periodically prune `~/.ollama/models/blobs`.
- **Anthropic-compatible endpoint has complex tool schema limits**: If routing Claude Code through Ollama's `/v1/messages` Anthropic compatibility layer, simplify tool schemas or fall back to the native OpenAI-compatible endpoint for complex tool use cases. [Issue #18346](https://github.com/ollama/ollama/issues/18346)
- **Silent context truncation is still the default**: Conversations that exceed context length drop old messages with no user-visible signal. For agent apps that depend on full history, track token counts client-side. [Issue #14259](https://github.com/ollama/ollama/issues/14259)
- **DeepSeek-V4.1-Flash is now available on Ollama Cloud** for users of the hosted inference tier. [Issue #18360](https://github.com/ollama/ollama/issues/18360)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest — 2026-09-14
Data source: [BerriAI/litellm](https://github.com/BerriAI/litellm)

---

## 1. Last 7 Days' Highlights
LiteLLM advanced its Rust migration roadmap toward sub-1ms gateway overhead while releasing a series of v1.101.x and v1.102.x previews, all with cosign-signed Docker images for supply-chain integrity. The community and maintainer team resolved multiple long-standing provider compatibility bugs across Vertex AI, Bedrock, Fireworks AI, and Anthropic adapters, and shipped targeted fixes for proxy rate limiting, spend tracking, and team admin cache consistency.

---

## 2. Releases & Breaking Changes
All recent releases include Docker image signatures via [cosign](https://docs.sigstore.dev/cosign/overview/) (key introduced in [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)):

- **v1.102.0-rc.1** — Release candidate for the v1.102 line.
- **v1.102.0-dev.2 / v1.102.0-dev.1** — Development previews of upcoming v1.102 features.
- **v1.100.1** — Stable patch release in the v1.100 line.
- **v1.101.0-rc.2** — Second release candidate for v1.101.

No documented breaking changes were published in the release notes provided.

---

## 3. New Model & Hardware Support
- **ai& (aiand) provider** — PR adds a first-class `aiand/<model>` provider route with support for Chat Completions and the Responses API, plus UI Add Model form integration.
  [PR #38958](https://github.com/BerriAI/litellm/pull/38958)
- **fal.ai model support request** — Community request to add video models (OpenAI Sora 2, Google Veo 3.1 Fast) and other fal.ai models to LiteLLM.
  [Issue #16073](https://github.com/BerriAI/litellm/issues/16073)
- **OpenRouter Qwen cache_control** — Fix ensures `cache_control` and `cache_control_injection_points` are forwarded to OpenRouter Qwen models.
  [PR #29335](https://github.com/BerriAI/litellm/pull/29335)

---

## 4. Performance & Optimization
- **Rust migration (parent ticket)** — Ongoing effort to build the fastest and lightest AI gateway targeting sub-1ms overheads; early beta tester signups open.
  [Issue #31263](https://github.com/BerriAI/litellm/issues/31263)
- **vLLM cached tokens cost tracking** — Request for proper usage handling of `cached_tokens` from vLLM backends so token cost calculators account for cache hits correctly.
  [Issue #22984](https://github.com/BerriAI/litellm/issues/22984)
- **Router deep-copy per fallback** — Fixes mutation of shared kwargs across fallback attempts, preventing subtle correctness and performance bugs in failover routing.
  [PR #27462](https://github.com/BerriAI/litellm/pull/27462)

---

## 5. Stability & Regressions
Ranked by severity / user impact:

1. **Per-customer RPM limits not enforced after virtual key cache** — Limits stop applying once the key is cached, bypassing per-end-user rate limiting. No fix PR linked yet.
   [Issue #39713](https://github.com/BerriAI/litellm/issues/39713)
2. **v3 rate limiter double-counts team per-model limits** — Effective RPM/TPM is ~50% of configured value for `model_per_team` limits.
   [Issue #34140](https://github.com/BerriAI/litellm/issues/34140)
3. **TPM limiting incorrect for virtual keys** — Long-standing bug where actual rate limit enforcement does not match configured TPM for virtual keys.
   [Issue #24677](https://github.com/BerriAI/litellm/issues/24677)
4. **Internal params leaking into provider request bodies** — Causes 400 errors from strict providers (e.g., Bedrock). Fix PR strips registered internal keys at provider request boundaries.
   [Issue #30301](https://github.com/BerriAI/litellm/issues/30301) · [PR #41025](https://github.com/BerriAI/litellm/pull/41025)
5. **Vertex AI versioned Claude default `max_tokens` wrong** — Requests without `max_tokens` to versioned IDs like `claude-haiku-4-5@20251001` are capped at 4096. Fix PR in review.
   [PR #40376](https://github.com/BerriAI/litellm/pull/40376)
6. **Fireworks AI rejects dict-form `reasoning_effort` from Anthropic adapter** — PR normalizes dict shape to plain string accepted by Fireworks API.
   [PR #35650](https://github.com/BerriAI/litellm/pull/35650)
7. **Pre-call guardrails cannot see/block MCP tools on Anthropic `/v1/messages`** — `custom_code` and `tool_permission` guardrails miss MCP tools in Anthropic-format requests.
   [Issue #40583](https://github.com/BerriAI/litellm/issues/40583)
8. **Team block/unblock stale cache** — `block_team` / `unblock_team` did not refresh the in-memory cache, so changes only took effect after TTL expiry. Fix PR merged.
   [PR #28752](https://github.com/BerriAI/litellm/pull/28752)
9. **MCP OAuth callback 404** — OAuth2 callback redirects to non-existent `/ui/mcp/oauth/callback`.
   [Issue #24771](https://github.com/BerriAI/litellm/issues/24771)
10. **Responses API streaming spec violations** — Missing `sequence_number`, `text.format`, and usage details caused strict clients (e.g., Grok Build CLI) to reject streams. Fix PR in review.
    [PR #28899](https://github.com/BerriAI/litellm/pull/28899)

---

## 6. What This Means for Application Developers
- **Security posture upgrade** — All recent Docker images are cosign-signed; teams with supply-chain compliance requirements can verify images against the published key ([commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)).
- **Be cautious with per-team per-model rate limits and per-customer RPM** — If you rely on `model_per_team` limits or end-user `rpm_limit` with cached virtual keys, verify enforcement behavior manually; both are known to be under- or non-enforced in current builds.
- **Provider compatibility improvements landing** — Teams using Vertex AI Claude (versioned IDs), Fireworks AI with Anthropic-format requests, or OpenRouter Qwen with caching will see reduced 400 errors once the corresponding PRs ship in a stable release.
- **Rust-based gateway on the horizon** — For latency-sensitive deployments, the Rust migration targets sub-1ms overhead; follow [Issue #31263](https://github.com/BerriAI/litellm/issues/31263) and consider joining the early beta if you operate high-throughput gateways.
- **Spend tracking edge cases** — Null provider response IDs and autorouter savings calculations for cached reads were both buggy; if you do detailed cost attribution, watch for upcoming v1.102 patches that address these.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest | 2026-09-14
---

## 1. Last 7 Days' Highlights
Unsloth shipped two beta releases (v0.1.807 and v0.1.808) delivering major cross-platform performance gains, most notably a 20% AMD speedup over ROCm via Vulkan and 1.2–1.7x faster diffusion inference. The team also advanced a slate of Studio features including Agent Skills support, NVFP4 quantization for video/image models, and fixes for Windows memory management and AMD GPU detection.

## 2. Releases & Breaking Changes
### v0.1.808-beta
- Large performance, reliability, and bug fix release
- Highlights: 1.2–1.7x faster diffusion; 20% AMD perf boost vs ROCm via Vulkan; 2x faster updating; removed SAC + AV false positives for Windows; Blender MCP support; Hermes detection; AMD gibberish fix (reported upstream to AMD)
- Source: [unslothai/unsloth Releases](https://github.com/unslothai/unsloth/releases)

### v0.1.807-beta
- Large performance, reliability, and bug fix release
- Highlights: AMD uses Vulkan by default (20% prefill/decoding boost vs ROCm); Windows `llama-server.exe` now signed (reduces SAC false positives); AMD gibberish issues in Strix/iGPUs fixed (upstream)
- Source: [unslothai/unsloth Releases](https://github.com/unslothai/unsloth/releases)

No breaking API/config changes reported.

## 3. New Model & Hardware Support
- **Blender MCP** support added (v0.1.808-beta)
- **Hermes** model detection added (v0.1.808-beta)
- **AMD Strix / iGPUs**: gibberish output fixed upstream to AMD (v0.1.807/808-beta)
- **Intel Arc B580**: import failure due to unsupported `torch.xpu.memory.mem_get_info()` — [Issue #3533](https://github.com/unslothai/unsloth/issues/3533) (closed, bug)
- **Agent Skills** (Studio): discover/validate skills from `~/.agents/skills` and `~/.claude/skills` — [PR #10247](https://github.com/unslothai/unsloth/pull/10247)
- **NVFP4 for video families**: whole-model NVFP4 for Wan2.2-TI2V-5B, Wan2.2-T2V-A14B, HunyuanVideo-1.5 with hosted pre-quantized denoisers — [PR #10729](https://github.com/unslothai/unsloth/pull/10729)
- **Per-layer NVFP4 image policies** with flashinfer FP4 backend and GPTQ builder — [PR #10730](https://github.com/unslothai/unsloth/pull/10730)
- **Official BF16 image models** now run on Studio's FP8/INT8 fast path — [PR #10697](https://github.com/unslothai/unsloth/pull/10697)

## 4. Performance & Optimization
- **Diffusion**: 1.2–1.7x faster inference (v0.1.808-beta)
- **AMD Vulkan backend**: 20% perf boost for prefill + decoding vs ROCm; now default (v0.1.807/808-beta)
- **Update speed**: 2x faster updating (v0.1.808-beta)
- **Packed attention cache invalidation** when sequence lengths change (fixes stale masks/boundaries) — [PR #10879](https://github.com/unslothai/unsloth/pull/10879)
- **Q-GaLore optimizer fixes**: pass options to bitsandbytes by name and advance Adam step counter once per update (correctness + performance) — [PR #10874](https://github.com/unslothai/unsloth/pull/10874), [PR #10842](https://github.com/unslothai/unsloth/pull/10842)
- **Docker image size**: drop baked uv cache, reducing image by ~5.3 GB — [PR #10827](https://github.com/unslothai/unsloth/pull/10827)
- **Windows no-reserve loads**: avoid resident GGUF mappings after VRAM offload — [PR #10618](https://github.com/unslothai/unsloth/pull/10618) (closed)

## 5. Stability & Regressions
Ranked by severity (impact + activity):

1. **Qwen3-Coder-Next-Base OOM on 2xA100 QLoRA** — training runs out of memory on 2x 80GB A100s; currently fixing. [Issue #4040](https://github.com/unslothai/unsloth/issues/4040) (closed, bug)
2. **AMD Strix Halo APU**: model incorrectly restricted to system RAM instead of unified GPU memory (22 GB vs 110 GB free). [Issue #6834](https://github.com/unslothai/unsloth/issues/6834) (closed, bug/AMD)
3. **Studio: GGUF RAM not released** on Windows when "Don't reserve system RAM" is enabled with full VRAM offload. [Issue #9033](https://github.com/unslothai/unsloth/issues/9033) (closed, feature request/bug)
4. **Long Qwen3.8 GGUF chats** lose reusable prompt state after model reload, causing ~11-minute full prefill. [Issue #9037](https://github.com/unslothai/unsloth/issues/9037) (open, Studio Bug)
5. **`--tensor-split` ignored** — multi-GPU tensor splitting parameter not respected. [Issue #10355](https://github.com/unslothai/unsloth/issues/10355) (open, feature request/bug)
6. **Nemotron attention handling** bug — fix in progress. [Issue #7527](https://github.com/unslothai/unsloth/issues/7527) (open, bug)
7. **Multi-turn determinism smoke test** fails intermittently on merge base (not just PRs). [Issue #10004](https://github.com/unslothai/unsloth/issues/10004) (closed, Studio CI)
8. **Studio installer reports AMD GPU but runs CPU-only** with no user-facing reconciliation. [Issue #8473](https://github.com/unslothai/unsloth/issues/8473) (closed, Studio)

Fix PRs exist for Windows memory ([#10618](https://github.com/unslothai/unsloth/pull/10618)) and packed attention cache correctness ([#10879](https://github.com/unslothai/unsloth/pull/10879)).

## 6. What This Means for Application Developers
- **AMD users get a meaningful speedup out of the box** with Vulkan now default — no code changes required to pick up the 20% prefill/decoding gain.
- **Diffusion pipelines see 1.2–1.7x faster inference** in the latest beta, which directly improves throughput for image/video generation services built on Unsloth.
- **Studio's Agent Skills support** ([#10247](https://github.com/unslothai/unsloth/pull/10247)) will let you reuse Claude/agent skill definitions directly in Unsloth-powered apps, reducing integration work for agentic workflows.
- **Windows deployments benefit from signed binaries** (fewer AV false positives) and fixed RAM leaks for VRAM-resident models, improving production reliability.
- **Q-GaLore optimizer fixes** ([#10874](https://github.com/unslothai/unsloth/pull/10874), [#10842](https://github.com/unslothai/unsloth/pull/10842)) resolve correctness regressions; users doing memory-efficient fine-tuning should upgrade.
- **Watch for intermittent determinism issues** ([#10004](https://github.com/unslothai/unsloth/issues/10004)) if your pipeline relies on identical multi-turn outputs at `temperature=0`.

---
*Data sourced from [github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*