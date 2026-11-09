# AI Infrastructure Weekly Digest 2026-11-09

> Generated: 2026-11-09 02:31 UTC | Projects covered: 6

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## Cross-Project Comparison

# Cross-Project AI Infrastructure Ecosystem Report (2026-11-09)
## 1. Ecosystem Overview
The past 7 days saw the AI inference and serving ecosystem enter a high-velocity optimization cycle centered on MoE model support, heterogeneous hardware adaptation, and disaggregated serving maturity. vLLM and SGLang led core serving engine iterations with large release trains (927 and 1007 merged PRs respectively) focused on KV cache pooling, PD disaggregation, and Blackwell/ROCm hardware enablement. Local runtimes (llama.cpp, Ollama) prioritized edge/NPU support and sampling determinism for agentic workloads, while gateway (LiteLLM) and fine-tuning (Unsloth) layers concentrated on billing accuracy and diffusion training/ inference integration. A shared industry trend is the maturation of non-NVIDIA hardware stacks, with ROCm, Ascend NPU, Intel XPU, Apple Silicon, and edge NPUs all receiving material feature upgrades this cycle.

## 2. Activity Comparison
| Project | Issues Count (Tracked in Digest) | PR Count (Merged/In-Flight Highlighted) | Release Status |
|---------|-----------------------------------|------------------------------------------|----------------|
| vLLM | 13+ active tracked issues (7 high-severity) | 10+ key PRs merged | v0.33.0rc3 released (927 commits, 389 contributors) |
| SGLang | 12+ active tracked issues (2 high-severity) | 15+ key PRs merged | v0.5.23 released (1007 PRs, 257 contributors) |
| llama.cpp | 7+ active tracked issues (2 high-severity) | 10+ key PRs merged | 10 nightly releases (b12199–b12211) shipped |
| Ollama | 5+ active tracked issues (2 high-severity) | 6+ key PRs in flight | v0.40.14, v0.40.15 patch releases shipped |
| LiteLLM | 8+ active tracked issues (1 high-severity) | 8+ key PRs merged | LTS v1.108.3 stable; v1.109/1.110 pre-releases in churn |
| Unsloth | 10+ active tracked issues (2 high-severity) | 15+ maintainer-authored PRs in flight | 3 beta releases (v0.1.914–v0.1.916) shipped |

## 3. Model Support Race
| Project | New Models/Architectures Shipped |
|---------|-----------------------------------|
| vLLM | Reflection Beam-1.0 (501B MoE), Yandex AliceAI-Foundation-80B-A3B, Recursive Flint (40B MoE), Muse Spark; DeepSeek-V4.1 GC-MoE backend |
| SGLang | Muse Spark Open, Beam-1.0 (LLM/VLM); Longcat2.0 (Ascend), Qwen3-Next/3.5 MTP GDN layers |
| Ollama | Xiaomi MiMo V2.6 9B (code/agent), AutoTrust decision models |
| Unsloth | Qwen3.8-Flash-Next Dynamic V3.1; FLUX.3, Qwen-Image-2.1, LTX-2.5, Wan diffusion models |
| llama.cpp | SpacemiT IME2 MXFP4, Granite NVFP4 fix; PTQ1_0 ternary quantization under development |
| LiteLLM | Prism provider (DeepSeek V4/V4.1 Flash), DeepSeek Fetch tool; xAI Grok tokenization fix |

**Leader**: vLLM and SGLang are tied for frontier large MoE model support, both shipping overlapping support for Muse Spark and Beam-1.0 while extending DeepSeek-V4 family optimizations. Unsloth leads diffusion model training/integration support, while Ollama focuses on lightweight edge code/agent models.

## 4. Performance Frontier
Optimization concentration across projects breaks down as:
- **KV Cache & Disaggregated Serving**: SGLang unified memory pool refactor (5-PR stack for window subpools), HiCache for ROCm/Ascend; vLLM KV connector correctness hardening for Mooncake P/D disaggregation.
- **Heterogeneous Hardware Kernels**: vLLM ROCm MI355X DeepSeek-V4-Pro prefill gains (+12–14%), SGLang SM120 FlashInfer warp-MMA backend, llama.cpp Intel Arc SYCL decode latency reduction (-28% for single-query), Ollama Rockchip NPU offloading.
- **Quantization**: vLLM Muse Spark FP8 online per-channel quantization, DeepSeek-V4.1 MXFP4/FP8 fused MoE; Ollama lossless FP8 per-tensor import; llama.cpp PTQ1_0 1.75-bit ternary quantization development.
- **Weight Loading Efficiency**: SGLang Weight Cache Daemon (Qwen3-235B FP8 load time reduced from ~300s to <1s), Unsloth prebuilt FlashInfer kernels for vLLM cold start elimination.
- **Batching & Sampling**: llama.cpp deterministic Top-K radix kernel rewrite, Ollama VRAM prediction fix eliminating spurious scheduler evictions.

## 5. Layer Positioning
| Layer | Projects | Core Differentiator |
|-------|----------|---------------------|
| **Production Serving Engines** | vLLM, SGLang | Target cloud data center deployments; prioritize disaggregated serving, multi-backend hardware support, high-throughput MoE optimization. vLLM leads ROCm/Ampere/Balckwell stability tracking; SGLang leads unified memory pooling and non-NPU backend breadth. |
| **Local/Edge Runtimes** | llama.cpp, Ollama | Target consumer desktops, edge devices, and Apple Silicon; prioritize lightweight quantization, NPU offload, and simple model management. llama.cpp leads broad hardware backend coverage (SYCL/Vulkan/OpenCL); Ollama leads one-click local agent workflow integration. |
| **LLM Gateway** | LiteLLM | Abstraction layer between applications and model providers; focuses on billing accuracy, key management, multi-provider routing, and low-overhead Rust gateway rewrite targeting <1ms overhead. |
| **Fine-Tuning/Training** | Unsloth | End-to-end fine-tuning and post-training layer; focuses on diffusion model training, context parallelism, memory reduction, and deep vLLM integration for serving fine-tuned models. |

## 6. Trend Signals & Developer Guidance
Key industry trends to watch:
1. **MoE model serving is now the primary optimization frontier**: All major serving engines are allocating engineering bandwidth to DeepSeek-V4 family kernel fusions, FP8/MXFP4 expert routing, and MoE cache scheduling. Developers deploying large MoE models should prioritize Hopper/ROCm MI300+ hardware, as Ampere (SM8x) support for next-gen DeepSeek models remains incomplete.
2. **Disaggregated prefill/decode (PD) is becoming the default production deployment shape**: SGLang and vLLM are both hardening P/D connector correctness and subpool memory management. Teams building agentic workloads with long context should validate KV cache reuse behavior on their disagg stacks before upgrading.
3. **Non-NVIDIA hardware is reaching production maturity**: ROCm, Ascend NPU, and Intel XPU received material feature upgrades this cycle (HiCache on ROCm, Mooncake L3 on Ascend). Multi-backend teams no longer need to rely solely on CUDA for production inference.
4. **Agentic workloads are exposing new stability gaps**: High-severity bugs across projects (GLM-5.3-Flash tool-calling degeneration, RTX 5090 runner disconnects, Qwen hybrid prompt reprocessing) all impact tool-use and multi-turn agent flows. Developers should pin stable versions and avoid bleeding-edge releases for agent production deployments until these regressions are resolved.
5. **Gateway billing accuracy is becoming a critical operational concern**: LiteLLM's streaming undercounting and double-cache-billing bugs highlight cost visibility risks for proxy deployments. Teams running multi-provider gateways should audit spend logs before trusting quota dashboards.

---

## Per-Project Reports

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Weekly Digest — 2026-11-09

## 1. Last 7 Days' Highlights
vLLM shipped v0.33.0rc3 with support for several large MoE models including Reflection Beam-1.0 and Yandex AliceAI-Foundation-80B-A3B. This week's engineering focus is heavily on KV cache disaggregation correctness, ROCm optimization on MI355X hardware, and MoE kernel improvements for DeepSeek-V4.1. The Rust frontend continues to advance toward feature parity with the Python server.

## 2. Releases & Breaking Changes
- **v0.33.0rc3** released with 927 commits from 389 contributors (122 new) — see [Release Notes](https://github.com/vllm-project/vllm/releases/tag/v0.33.0rc3)
- No explicit breaking changes documented in this cycle, but users on v0.32.0 should note that the block-size issue ([#59203](https://github.com/vllm-project/vllm/issues/59203)) was closed with a fix tracked under [#60762](https://github.com/vllm-project/vllm/issues/60762).

## 3. New Model & Hardware Support
- **New models in v0.33.0**: Reflection Beam-1.0 (501B MoE, 23B active) with DFlash2 drafter, Yandex AliceAI-Foundation-80B-A3B, Recursive Flint (40B MoE, 2.5B active), and Muse Spark.
- **Muse Spark FP8 online quantization** on Hopper — PR [#66139](https://github.com/vllm-project/vllm/pull/66139) routes experts to FP8 per-channel at load time so the BF16 checkpoint fits on Hopper.
- **GC-MoE backend for DeepSeek-V4.1** on Hopper — experimental `--moe-backend gc_moe` in PR [#66076](https://github.com/vllm-project/vllm/pull/66076), fusing MXFP4 routed experts with FP8 shared experts.
- **RFC for MoE Oracle class unification** — Issue [#37753](https://github.com/vllm-project/vllm/issues/37753) tracks consolidation of fp8 / nvfp4 / mxfp8 / mxfp4 kernel selectors into a single class structure.
- **RFC for Specialized (MonoKernel) Decodes** — Issue [#60904](https://github.com/vllm-project/vllm/issues/60904) proposes a standard for hand-fused decode forward passes on specialized hardware.

## 4. Performance & Optimization
- **ROCm DeepSeek-V4-Pro dual-batch overlap**: MoRI EPv2 + DBO delivers prefill +12–14% gain (native) and SDMA-based AsyncLL in PR [#65128](https://github.com/vllm-project/vllm/pull/65128), measured on 8× MI355X.
- **GLM-5.3-Flash on ROCm**: Fusing gated RMSNorm for KDA o_norm in PR [#66219](https://github.com/vllm-project/vllm/pull/66219) prevents fallback to unfused eager decomposition.
- **RDNA INT4 repacking optimization**: PR [#52637](https://github.com/vllm-project/vllm/pull/52637) reduces weight-prep cost for symmetric GPTQ on RDNA hardware.
- **Qwen3.8-2.4T-A95B and Qwen3.8-Flash-Next on MI355X**: Active optimization trackers [#57149](https://github.com/vllm-project/vllm/issues/57149) and [#59575](https://github.com/vllm-project/vllm/issues/59575).
- **Batch Invariant feature optimization** continues under [#27433](https://github.com/vllm-project/vllm/issues/27433) (105 comments, 24 👍).

## 5. Stability & Regressions
Severity-ranked (high → low):

1. **[#50576](https://github.com/vllm-project/vllm/issues/50576)** — DeepSeek-V4-Flash / DSpark not supported on SM8x (A100/A800). 128 comments, 16 👍. High impact for Ampere users.
2. **[#56892](https://github.com/vllm-project/vllm/issues/56892)** — DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell): extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable. Requires SM120 graph capture fix.
3. **[#41530](https://github.com/vllm-project/vllm/issues/41530)** — TP worker hang → `EngineDeadError` on DeepSeek-V4-Pro with MTP speculative decoding (TP=8). 20 comments, 8 👍.
4. **[#49497](https://github.com/vllm-project/vllm/issues/49497)** — FlashInfer sampler JIT crashes engine startup when nvcc is unavailable; no fallback to native sampler.
5. **[#66448](https://github.com/vllm-project/vllm/pull/66448)** — Gemma 4 chat template leaks thought channel markers after `tool_response` when `enable_thinking=False`. Fix PR open.
6. **[#52244](https://github.com/vllm-project/vllm/pull/52244)** — Hybrid GDN prefix-cache misses under MTP speculative decoding on Qwen3.5-122B-A10B. Fix PR open.
7. **[#66447](https://github.com/vllm-project/vllm/pull/66447)** — `BatchedTritonExperts` ignores expert biases (`w1_bias`/`w2_bias`), causing silent wrong outputs for MoE models using that backend.

## 6. What This Means for Application Developers
- **Ampere (A100/A800) users**: Do not deploy DeepSeek-V4-Flash on SM8x yet — official support is still in feature-request stage. Use SM90 (Hopper) or newer for DeepSeek-V4 family.
- **Blackwell workstation users (RTX PRO 6000)**: DeepSeek-V4.1-Flash currently suffers poor decode throughput; avoid production rollout until SM120 CUDA graph capture is fixed.
- **P/D disaggregation adopters**: MooncakeConnector is being actively improved ([#60523](https://github.com/vllm-project/vllm/issues/60523), 8 👍) and KV connector correctness for hybrid/spec-decode paths is being hardened via PRs [#66132](https://github.com/vllm-project/vllm/pull/66132) and [#65448](https://github.com/vllm-project/vllm/pull/65448). Validate your disagg setup against these fixes before upgrading.
- **Rust frontend**: Still experimental ([#44280](https://github.com/vllm-project/vllm/issues/44280)). GRPC multimodal handoff support is landing ([#66094](https://github.com/vllm-project/vllm/pull/66094)) but not yet at feature parity with Python server — stay on Python for now if you rely on full OpenAI-compatible API coverage.
- **RL/online weight-update users**: PR [#57854](https://github.com/vllm-project/vllm/pull/57854) makes failed weight updates fail the request instead of killing the engine — worth tracking for production RL serving stability.
- **Whisper / ASR users**: Audio >30s timestamp offset bug [#32588](https://github.com/vllm-project/vllm/issues/32588) is now closed; upstream your audio timestamp validation if you were affected.

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-11-09

## 1. Last 7 Days' Highlights
SGLang shipped **v0.5.23**, its largest release to date with **1007 PRs from 257 contributors**, expanding model support to Muse Spark Open and Beam-1.0 while pushing deep investments in unified memory pooling, PD-disaggregation tooling, and multi-backend hardware (NVIDIA, AMD ROCm, Intel XPU, Ascend NPU, Apple Silicon). Active engineering is concentrated on **unified-memory cache refactors** (a 5-PR stack landing window-subpool support), **HiCache improvements across DSA/DCP and hybrid GDN models**, and **CI/flaky-test stabilization** as adoption scales in agentic workloads.

## 2. Releases & Breaking Changes
- **v0.5.23** published — 1007 merged PRs, 257 contributors. New cookbook entries for Muse Spark Open (LLM/VLM) and Beam-1.0 (LLM/VLM). [Release notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.23)
- No explicit breaking API/config migrations called out in the past week, but several RFCs signal upcoming API consolidation: RFC #45816 proposes full migration to the shared `api.v1.Generate` backend API across processor and router components. [Issue #45816](https://github.com/sgl-project/sglang/issues/45816)

## 3. New Model & Hardware Support
- **New models**: Muse Spark Open, Beam-1.0 (LLM + VLM), both with autoregressive cookbook docs. [Release notes](https://github.com/sgl-project/sglang/releases/tag/v0.5.23)
- **NVIDIA / SM120 (Blackwell)**: PR #45262 enables FlashInfer b12x warp-MMA backend for block-FP8-as-MXFP8 linears, faster than CUTLASS at every M on SM120/SM121. [PR #45262](https://github.com/sgl-project/sglang/pull/45262)
- **AMD ROCm**: PR #48118 adds an AITER backend for linear-chain target verify on GDN layers (Qwen3-Next / Qwen3.5 MTP) replacing Triton-only path. [PR #48118](https://github.com/sgl-project/sglang/pull/48118); PR #45205 enables HiCache for DSA DCP with packed MTP draft on ROCm. [PR #45205](https://github.com/sgl-project/sglang/pull/45205)
- **Ascend NPU**: Longcat2.0 support (arch22) via PR #47917, GLM DSA cache layer-split on Ascend via PR #48389, Mooncake L3 for DeepSeek-V4/GLM-5.2 via PR #49054, and AIV transfers for MLA/DeepSeek-V4 via PR #48031. [PR #47917](https://github.com/sgl-project/sglang/pull/47917) · [PR #48389](https://github.com/sgl-project/sglang/pull/48389) · [PR #49054](https://github.com/sgl-project/sglang/pull/49054) · [PR #48031](https://github.com/sgl-project/sglang/pull/48031)
- **Intel XPU / diffusion**: PR #48646 fixes missing QK norm + RoPE fusion path for B=1 in z-image diffusion. [PR #48646](https://github.com/sgl-project/sglang/pull/48646)
- **Apple Silicon**: RFC #32321 tracks redesign of the SRT path with a Torch-owned SRT path + exported whole-model MLX region. [Issue #32321](https://github.com/sgl-project/sglang/issues/32321)

## 4. Performance & Optimization
- **Weight Cache Daemon (Roadmap #33522)**: Phase 1 already landed (PR #27139) — per-rank daemon holds post-quantized weights, dropping weight load from ~306–327s to <1s on Qwen3-235B FP8 over CUDA IPC. Active phase planning continues. [Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **Unified memory pool refactor (PR stack #48009–#48014)**: Replaces ~1400-line interim allocation policy with a single layout search for plan/admit/reclaim, and gives each attention window subpool its own host pool, PD entry, and metrics. Removes the "multiple target windows require named model declaration" startup refusal under `--enable-unified-memory`. [PR #48014](https://github.com/sgl-project/sglang/pull/48014) · [PR #48013](https://github.com/sgl-project/sglang/pull/48013) · [PR #48012](https://github.com/sgl-project/sglang/pull/48012)
- **DeepSeek-V4 on SM120**: Open perf gap — prefill only ~2–7K tok/s vs ~12.5K reported via vLLM/marlin on 4× RTX PRO 6000 (TP=4). Tuning guidance discussion ongoing. [Issue #33422](https://github.com/sgl-project/sglang/issues/33422)
- **GLM-5.3-Flash on Hopper (SM90)**: Tracking issue #45373 aggregates Q4 kernel-optimization work. [Issue #45373](https://github.com/sgl-project/sglang/issues/45373)
- **QSA cache sharding (PR #43527)**: Shards sequence-length-dependent QSA states (raw K/V history + compressed cache) for Qwen3.8 hybrid models, reusing page-interleave allocator infrastructure. [PR #43527](https://github.com/sgl-project/sglang/pull/43527)
- **HiCache on DSA DCP (ROCm)**: Enables shared-prefix reuse for agentic workloads where eviction previously forced re-prefill at c48 concurrency. [PR #45205](https://github.com/sgl-project/sglang/pull/45205)

## 5. Stability & Regressions
- **HIGH — GLM-5.3-Flash thinking degeneration (#36669)**: Under multi-tool agentic prompts with `tool_choice=auto`, reasoning output collapses into repeated `!` characters. No fix PR yet. [Issue #36669](https://github.com/sgl-project/sglang/issues/36669)
- **HIGH — GB10 long-prefill silent worker kill (#36941)**: On 2× DGX Spark (GB10, TP=2), GLM-5.3-Flash prefills >40k tokens exhaust unified memory with no traceback/OOM record; rank dies between 54k–62k tokens. [Issue #36941](https://github.com/sgl-project/sglang/issues/36941)
- **MEDIUM — Qwen3-VL large-image memory blowup (#49132, fix in #49215)**: Bilinear position-embedding blend materializes a 576 MiB tensor per 16.7 MP image. Fix PR open. [PR #49215](https://github.com/sgl-project/sglang/pull/49215)
- **MEDIUM — HiCache host-tier zero hits on hybrid GDN (#45400)**: Once evicted working set exceeds ~3 long prefixes, host mamba pool exhausts and host-tier hits drop to zero. [Issue #45400](https://github.com/sgl-project/sglang/issues/45400)
- **MEDIUM — DSA indexer GPU offload crash (#48316, fix open)**: With V1 CPU weight offload + breakable prefill CUDA graphs, DSA indexer is captured as eager break point causing crash on first request. [PR #48316](https://github.com/sgl-project/sglang/pull/48316)
- **MEDIUM — Muse Spark probe failure with decrypted config (#49216, fix open)**: Early architecture probe ignores `--decrypted-config-file`, raising before normal model loading. [PR #49216](https://github.com/sgl-project/sglang/pull/49216)
- **LOW — InternlmDetector streaming multi-tool drop (#46714, fix open)**: Subsequent tool-call chunks discarded after first completion. [PR #46714](https://github.com/sgl-project/sglang/pull/46714)
- **LOW — Multimodal SSRF / local file disclosure (#45558, fix open)**: `file://` URIs and bare paths bypass `--allowed-media-domains`. [PR #45558](https://github.com/sgl-project/sglang/pull/45558)
- **CI signal**: Two high-volume trackers — #26340 (CUDA coredump, 360 comments) and #42752 (flaky tests, 187 comments) — indicate CI is strained at this PR throughput. [Issue #26340](https://github.com/sgl-project/sglang/issues/26340) · [Issue #42752](https://github.com/sgl-project/sglang/issues/42752)

## 6. What This Means for Application Developers
- **If you run agentic/tool-calling workloads**, test GLM-5.3-Flash carefully — multi-tool degeneration (#36669) is a known hazard; consider pinning `tool_choice` or model version until fixed.
- **If you serve VLMs on large images**, the upcoming PR #49215 will cut peak vision-path memory dramatically on high-resolution inputs; track it for your next upgrade.
- **PD-disaggregation users** should watch the Q4 roadmap (#43699) — disagg is now the default deployment shape, and the roadmap covers every parallel strategy + HiCache + speculative decoding combination. [Issue #43699](https://github.com/sgl-project/sglang/issues/43699)
- **Multi-backend teams**: AMD, NPU, and XPU surfaces all landed material features this week (HiCache on ROCm, Mooncake L3 on NPU, diffusion fixes on XPU) — non-CUDA deployments are maturing fast.
- **Operational takeaway**: PR #45551 adds configurable Prometheus metric naming — if you scrape SGLang with Google Cloud Managed Prometheus, Datadog, or OpenTelemetry, this PR will eliminate label-validation errors; PR #45558 hardens media-input security and should be pulled if you accept user-supplied URLs. [PR #45551](https://github.com/sgl-project/sglang/pull/45551)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp Weekly Digest — 2026-11-09

## 1. Last 7 Days' Highlights
This week llama.cpp shipped 10 consecutive nightly releases (b12199 to b12211) focused on backend optimization, kernel determinism, MoE inference efficiency, and speculative decoding stability. Key priorities across active contributions include expanding SYCL/CUDA/OpenCL hardware support, improving MoE cache scheduling, and fixing correctness bugs in quantized speculative decoding. The project continues to mature as a production-grade inference engine for diverse edge and data center hardware targets.

## 2. Releases & Breaking Changes
- **Nightly Release Train**: 10 tagged releases shipped between 2026-11-02 and 2026-11-09, with incremental fixes and optimizations (e.g. [b12211](https://github.com/ggml-org/llama.cpp/releases/tag/b12211), [b12210](https://github.com/ggml-org/llama.cpp/releases/tag/b12210)). No breaking API changes were highlighted in this cycle; updates are backward-compatible for standard inference workflows.
- **Determinism Fix for Top-K**: Release [b12208](https://github.com/ggml-org/llama.cpp/releases/tag/b12208) rewrote CUDA/Metal radix Top-K kernels to eliminate non-deterministic tie selections, critical for reproducible agent output.
- **Precision Alignment**: Release [b12202](https://github.com/ggml-org/llama.cpp/releases/tag/b12202) adjusted BF16 accumulation for GLM4 and output projection layers to match reference implementation precision.

## 3. New Model & Hardware Support
- **Hardware Backends**:
  - SpacemiT IME2 MXFP4 dense CPU repack support landed in [b12210](https://github.com/ggml-org/llama.cpp/releases/tag/b12210).
  - llamafile added bf16 and q8_0 vxe execution support ([b12209](https://github.com/ggml-org/llama.cpp/releases/tag/b12209)).
  - OpenCL kernel improvements for q8_0 and small-n MoE GEMVs targeted Qualcomm Adreno hardware ([b12200](https://github.com/ggml-org/llama.cpp/releases/tag/b12200)).
- **In Progress Contributions**:
  - XDNA backend support remains an open enhancement request with 37 community comments ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)).
  - PTQ1_0 ternary quantization (1.75 bits/weight) is under active development for CPU/GPU backends ([#29672](https://github.com/ggml-org/llama.cpp/pull/29672)).
  - Granite NVFP4 weight scale loading fix was submitted to resolve garbage output on NVFP4 checkpoints ([#31449](https://github.com/ggml-org/llama.cpp/pull/31449)).

## 4. Performance & Optimization
- **Kernel-Specific Gains**:
  - CUDA SSM_SCAN kernel added a d_state=64 fast path for Zamba2-like architectures, eliminating CPU fallback bottlenecks for recurrent scan steps ([b12207](https://github.com/ggml-org/llama.cpp/releases/tag/b12207)).
  - Battlemage (Intel Arc) SYCL backend routed D=256 single-query decode to the FA vector kernel, reducing latency from 1150 µs to 832 µs per call at 65k KV cache ([#30606](https://github.com/ggml-org/llama.cpp/pull/30606)).
  - Hopper H100 Q6_K prefill optimization using TMA/WGMMA is in review to accelerate dense quantized prefill ([#31916](https://github.com/ggml-org/llama.cpp/pull/31916)).
- **MoE & Scheduling**:
  - MoE cache was improved to avoid CPU waiting for cached expert weights ([b12206](https://github.com/ggml-org/llama.cpp/releases/tag/b12206)).
  - Speculative decoding now excludes draft models from MoE caching to reduce overhead ([b12201](https://github.com/ggml-org/llama.cpp/releases/tag/b12201)).
  - SYCL device-side MoE scheduling is being implemented to keep GPU compute graphs unbroken ([#30156](https://github.com/ggml-org/llama.cpp/pull/30156)).

## 5. Stability & Regressions
- **High Severity**:
  - Quantized target speculative decoding (greedy mode) produces divergent output vs vanilla inference; 39 community comments, no merged fix yet ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)).
  - Qwen 3.8 Flash + MTP crashes on startup; active investigation ([#29811](https://github.com/ggml-org/llama.cpp/issues/29811)).
- **Medium Severity**:
  - SYCL backend `--fit` mode underestimates memory usage, causing runtime OOM on Intel Arc B70 ([#27595](https://github.com/ggml-org/llama.cpp/issues/27595)).
  - Vulkan Flash Attention fallback to SCALAR path causes O(N²) prompt processing degradation on Intel Arc B580 ([#27638](https://github.com/ggml-org/llama.cpp/issues/27638)).
- **Low Severity**:
  - Recurrent state "sticky NaN" bug fixed in open PR ([#31913](https://github.com/ggml-org/llama.cpp/pull/31913)).
  - Invalid UTF-8 in tool call arguments is now sanitized in common code ([b12199](https://github.com/ggml-org/llama.cpp/releases/tag/b12199)).

## 6. What This Means for Application Developers
- **Reproducibility**: The Top-K determinism fix is critical for agent workflows relying on reproducible sampling; upgrade to b12208 or later.
- **Speculative Decoding Caution**: Avoid draft-model speculative decoding with quantized target models for production use until #25618 is resolved, especially for deterministic greedy pipelines.
- **Hardware Tailoring**: If deploying on Intel Arc GPUs, track the SYCL backend optimizations (FA vector kernel, device-side MoE scheduler) for near-term throughput gains.
- **MoE Efficiency**: The MoE cache and stream upload improvements will reduce latency for large MoE models (e.g. Qwen3.8-MoE) on both CUDA and SYCL; test b12206+ for CPU-GPU hybrid deployments.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Digest — 2026-11-09

## 1. Last 7 Days' Highlights
Ollama shipped two patch releases (v0.40.14 and v0.40.15) focused on Claude Code integration, cloud response decoding, and support for Xiaomi's MiMo V2.6 code/agent model. Open issues are dominated by GPU/backend regressions on NVIDIA RTX 50-series and AMD Vulkan configurations, plus long-standing feature requests for model management and UI quality-of-life. Active pull requests include significant infrastructure work on VRAM prediction, KV cache sizing, and new backend support for Rockchip NPUs.

## 2. Releases & Breaking Changes
- **[v0.40.14](https://github.com/ollama/ollama/releases/tag/v0.40.14)**: `ollama launch claude` now respects the model's output token limit, removing the 128k default cap for cloud models; cloud web search responses on `/api/chat` are now correctly decoded, including compressed payloads.
- **[v0.40.15](https://github.com/ollama/ollama/releases/tag/v0.40.15)**: Adds initial support for Xiaomi MiMo V2.6 (9B code/agent model) and AutoTrust decision models. No breaking API changes reported.

## 3. New Model & Hardware Support
- **New model**: [MiMo V2.6 9B](https://ollama.com/library/mimo-v2.6) — optimized for code generation and agent workflows, runnable via `ollama run mimo-v2.6`.
- **In-progress backend support**: PR [#19480](https://github.com/ollama/ollama/pull/19480) adds native Rockchip NPU (`rknpu`) backend for RK3588/RK3576 SoCs, offloading prefill, MoE operations, and flash attention to NPU hardware on Linux.
- **In-progress model compatibility**: PR [#17965](https://github.com/ollama/ollama/pull/17965) auto-detects `ornith` and `qwen35` renderers/parsers to fix tool-calling failures when no explicit config is set.

## 4. Performance & Optimization
- **VRAM prediction accuracy**: PR [#19327](https://github.com/ollama/ollama/pull/19327) reworks KV cache sizing to calculate per-layer values using actual `head_count_kv` and head size, eliminating scheduler evictions caused by overestimated memory usage for models with heterogeneous layer configs.
- **GPU memory management**: PR [#19284](https://github.com/ollama/ollama/pull/19284) prevents spurious eviction of CPU-only runners (e.g., embedding models with `num_gpu=0`) when loading new models on discrete GPUs, avoiding unnecessary model reloads.
- **Model loading efficiency**: PR [#19614](https://github.com/ollama/ollama/pull/19614) standardizes MoE expert stacking across all source types and adds lossless per-tensor FP8 import support, reducing memory overhead for FP8-quantized models.

## 5. Stability & Regressions
Ranked by severity (impact on production inference):
1. **High**: [Issue #19558](https://github.com/ollama/ollama/issues/19558) — Vulkan backend crashes (`NTSTATUS 0xe06d7363`) on AMD Renoir iGPU (gfx90c) on v0.40.14 and v0.40.15-rc2; all models (including tiny ~380MB) fail to load. No linked fix PR.
2. **High**: [Issue #19439](https://github.com/ollama/ollama/issues/19439) — Windows RTX 5090 runner disconnects during tool calling, causing HTTP 500 errors on `/tokenize`; affects multi-turn agent workflows. No linked fix PR.
3. **Medium**: [Issue #17748](https://github.com/ollama/ollama/issues/17748) — AMD Radeon 780M Vulkan regression (v0.32.10+) with "Not enough memory for command submission" and `ErrorDeviceLost` when running larger models. No linked fix PR.
4. **Medium**: [Issue #19577](https://github.com/ollama/ollama/issues/19577) — Idle `llama-server` runners are not terminated at `keep_alive` expiry, leaking VRAM and causing failures on subsequent model loads. No linked fix PR.
5. **Low**: [Issue #19596](https://github.com/ollama/ollama/issues/19596) — Typo in `gemma4:12b-it-qat` Modelfile (incorrect `toos` instead of `tools` config key), breaking native tool calling for the model. No linked fix PR.

## 6. What This Means for Application Developers
- If you use Claude Code with Ollama cloud models, v0.40.14 removes the 128k output token cap, so you can now leverage full context windows for long code generations.
- Agent builders running tool-calling workflows on AMD Vulkan or NVIDIA RTX 50-series hardware should pin to pre-v0.40.14 releases until the runner disconnect and crash regressions are resolved.
- The in-progress per-model `OLLAMA_NUM_PARALLEL` feature (Issue [#11977](https://github.com/ollama/ollama/issues/11977)) and `PARAMETER env` Modelfile support (PR [#16711](https://github.com/ollama/ollama/pull/16711)) will soon let you optimize concurrency and environment configs on a per-model basis, reducing over-allocation of VRAM for embedding models and non-parallel workloads.
- The new MiMo V2.6 model is purpose-built for code/agent tasks, making it a strong candidate for replacing general-purpose models in coding assistants and tool-use workflows.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM Weekly Digest — 2026-11-09

## 1. Last 7 Days' Highlights
LiteLLM shipped a stable LTS patch line (v1.108.x) alongside dev and release-candidate builds for upcoming v1.109 and v1.110 releases. Active community work centers on cost/billing accuracy, provider translation bugs, and two high-impact roadmap tracks: the Rust-based gateway rewrite targeting sub-1ms overhead, and the new LiteFlow workflow execution layer.

## 2. Releases & Breaking Changes
- **LTS line v1.108.3** (latest LTS patch): `lts` image tag now tracks the newest LTS release — pull `ghcr.io/berriai/litellm:lts`. All images are cosign-signed; verify with the public key pinned at commit `e82a3c6` (`ghcr.io/berriai/litellm:v1.108.3`).
- **Dev/pre-release churn**: v1.110.0-dev.2, v1.110.0-dev.1, v1.107.0-rc.3, and v1.109.0-rc.1 published; rc.3 was built from reviewed merge of #50129 (`f9778e9`).
- **No breaking API/config changes landed** in the window; LTS patch releases are backward-compatible.

## 3. New Model & Hardware Support
- **DeepSeek Fetch tool + proxy routes** (PR #50618): adds `litellm.fetch`/`litellm.afetch` alongside Search, plus proxy routes — closes #48681.
- **Prism provider** (PR #40914): registers Prism as a native provider with DeepSeek V4 / V4.1 Flash metadata; Chat Completions, Responses, and Messages routing.
- **xAI Grok token counting** (PR #50647): switches Grok to xAI's own tokenizer — counts land within ~3% of billable usage (was up to 99% under / 84% over with OpenAI's tokenizer).
- **External openai-like provider loading** (PR #50623): `litellm --providers /path/to/providers.json` merges an external providers file at startup (repeated slug wins; bad file fails startup).
- **OpenSearch pass-through** (PR #50573): admin-registered index with per-key/per-team read-write grants; LiteLLM signs with its own AWS credentials (mirrors Azure AI Search pass-through).

## 4. Performance & Optimization
- **Rust migration parent ticket** (#31263): active beta-tester sign-up; target is sub-1ms gateway overhead. Install-issue tracking is in #31261 (stale), aiming to bundle the Rust extension into default `pip install litellm` via compatible wheels.
- **Rate-limiter Redis write skip** (#31880): proposed fix to skip post-call Redis counter writes for keys/users/teams with no configured limits — reduces wasted Redis I/O at high throughput; open/stale.
- **Helm migration Job selector bug** (PR #40393): migration Job pods currently match the LiteLLM Service selector because they inherit `litellm.selectorLabels`; fix strips those labels from the Job pod template.

## 5. Stability & Regressions
Ranked by severity (data/ correctness > streaming > auth):
1. **Streaming usage undercounted** (#36114): provider-independent; root cause in stream aggregation layer (Front-Proxy → Upstream-Proxy → Bedrock), despite fixed `chunk_parser()` — open, 7 comments. Related: early-client-disconnect loses usage/billing gap (#14457, closed) and cached_tokens dropped when final chunk has non-empty `choices` (#36168, closed).
2. **Budget-window spend drop on `/key/update`** (#49179): in-flight request cost never reaches `LiteLLM_BudgetWindowSpend` (SpendLogs and key spend are correct) — closed. Compounding bug: `budget_duration` wasn't gated behind admin check on `/key/update` (#39993, open PR).
3. **Anthropic cache-token double billing** (#40006 via PR #40016): `custom_cost_per_token` with `cache_read_input_token_cost` bills cache-read tokens twice (regular input rate + custom cache rate) — fix PR open.
4. **Gemini streaming tool-call corruption** (#25869): `stream_chunk_builder` corrupts `server_side_tool_invocations` + `thought_signatures` → "Corrupted tool call context" on follow-up turns — closed.
5. **Qwen3-TTS audio/speech failure** (#20078): `/v1/audio/speech` requires mandatory `voice` and strips custom params when serving via vLLM — open, 8 comments.
6. **MCP tool-error propagation** (#49359): `is_error` flag dropped on Anthropic `tool_result` when MCP execution fails — open.
7. **JSON-defined openai-like providers drop tools** (#48145): tools definitions not passed to model when not in catalog on v1.106 (worked on 1.81) — open, 9 comments.

## 6. What This Means for Application Developers
- **Billing/quants accuracy is the theme this cycle**: if you run Grok, Anthropic with caching, or streaming proxies, audit your spend logs before trusting quota dashboards — the double-cache-billing and undercount-streaming issues can shift cost materially. Track PR #50647 (Grok tokenizer) and #40016 (cache-token billing) for the next release.
- **Admins hardening keys**: merge PR #39993 to lock `budget_duration` behind admin checks on `/key/update`; PR #50622 now redacts prompt/completion text from debug logs when `turn_off_message_logging` is set (messages no longer leak via `--detailed_debug`).
- **New provider/integration surface**: you can now onboard Prism (DeepSeek V4), DeepSeek Fetch tool, OpenSearch index pass-through, and external provider JSON files without code forks — useful for teams avoiding core-config drift.
- **Rust gateway watch**: if you're evaluating LiteLLM for low-latency agent routing, the sub-1ms Rust path in #31263 is approaching public beta; opt into the tester group now rather than waiting for GA.
- **Upgrade path**: stay pinned to the `lts` tag for production; v1.108.3 is the current safe line. Dev/rc builds (v1.109-rc.1, v1.110-dev) are pre-release — do not promote to prod.

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth Weekly Digest — 2026-11-09

## 1. Last 7 Days' Highlights
Unsloth shipped **three beta releases** focused on performance polish, UI customization, and desktop studio improvements. The bulk of engineering effort in the last 24 hours is concentrated on **diffusion/image-generation performance**, context-parallel training correctness, and vLLM/FlashInfer integration, with ~15 open PRs authored by maintainer `danielhanchen` landing on Nov 9 alone.

## 2. Releases & Breaking Changes
Three beta releases shipped in the trailing week:
- [**v0.1.916-beta**](https://github.com/unslothai/unsloth/releases): Performance fixes across long-chat typing/search, image/video load speedups, two-GPU image/video generation, per-chat separate browsers, floating browser window.
- [**v0.1.915-beta**](https://github.com/unslothai/unsloth/releases): Qwen3.8-Flash-Next Dynamic V3.1 support, Glass theme beta, Composer position slider, in-browser file interaction for models, reduced idle memory, chat-context preservation on GGUF model switches, faster MLX loading.
- [**v0.1.914-beta**](https://github.com/unslothai/unsloth/releases): Glass themes, background/greeting/chat customization, faster generation, expanded multi-GPU training options, CPU training support.

No breaking API changes are flagged in release notes. Issue [#16520](https://github.com/unslothai/unsloth/issues/16520) requests torch 2.13.0/2.14.0 extras be published to PyPI — currently missing from the latest wheel.

## 3. New Model & Hardware Support
- **New models**: Qwen3.8-Flash-Next Dynamic V3.1 ([v0.1.915](https://github.com/unslothai/unsloth/releases)); feature request [#15588](https://github.com/unslothai/unsloth/issues/15588) for LFM3-1.7B was closed (implemented).
- **Context parallelism / Ulysses**: PR [#12052](https://github.com/unslothai/unsloth/pull/12052) (FSDP2 + Ulysses for Qwen3.5 GatedDeltaNet), PR [#15883](https://github.com/unslothai/unsloth/pull/15883) (Ulysses for Gemma 4 text models), PR [#17183](https://github.com/unslothai/unsloth/pull/17183) (Ulysses evidence for gpt-oss — attention sinks, MoE, aux off).
- **Diffusion models targeted by recent PRs**: FLUX.3, Qwen-Image-2.1, LTX-2.5, Wan, MiniMax-H3 Sol VAE.
- **Hardware/backends**: Intel XPU float64 handling ([#17070](https://github.com/unslothai/unsloth/pull/17070)), CPU int8 denoiser support ([#17178](https://github.com/unslothai/unsloth/pull/17178)), Apple MPS/CPU VAE tiling sizing ([#17186](https://github.com/unslothai/unsloth/pull/17186)). Vulkan on RX 5700 XT (Win10) is still reported broken in open issue [#16395](https://github.com/unslothai/unsloth/issues/16395).

## 4. Performance & Optimization
Landable/optimization work merged or in-flight:
- **vLLM startup**: PR [#17063](https://github.com/unslothai/unsloth/pull/17063) installs prebuilt FlashInfer kernels into the vLLM engine env — eliminates first-launch nvcc JIT compile on every new engine environment.
- **CPU VAE decode**: PR [#17186](https://github.com/unslothai/unsloth/pull/17186) reports **2.1× faster CPU 512 px decode** by sizing VAE tiles from free host memory on CPU/MPS.
- **RAG ingestion**: Issue [#16715](https://github.com/unslothai/unsloth/issues/16715) documents per-document embedding as ~99 ms/chunk vs 2.07 ms/chunk when batched — flagged as a known perf gap.
- **Memory reduction**: [#17179](https://github.com/unslothai/unsloth/pull/17179) switches LTX-2.5 text encoder from 23.9 GB bf16 to 13.0 GB hosted INT8 ConvRot; [#17184](https://github.com/unslothai/unsloth/pull/17184) avoids re-writing released text encoders to disk; [#17178](https://github.com/unslothai/unsloth/pull/17178) keeps denoiser weights at int8 on CPU (4× weight-size reduction vs float32 expansion).
- **Kernel/attention efficiency**: [#17180](https://github.com/unslothai/unsloth/pull/17180) passes strided Q/K/V to cuDNN attention instead of contiguous copies; [#17101](https://github.com/unslothai/unsloth/pull/17101) compiles one Triton binary per Wan fused kernel instead of per-sequence-length variant; [#17182](https://github.com/unslothai/unsloth/pull/17182) keeps only hidden states actually read in FLUX.3 / Qwen-Image-2.1 prompt encoding.

## 5. Stability & Regressions
Ranked by severity:
1. **High — Correctness / inference loop**: [#17015](https://github.com/unslothai/unsloth/issues/17015) (open, Nov 7): Qwen hybrid model reprocesses full prompt every turn after MCP tool use in Unsloth Studio 0.1.916 — kills throughput on agentic workflows.
2. **High — Crashes/hangs**: [#17166](https://github.com/unslothai/unsloth/pull/17166) (closed, fix merged): fp8 denoisers on sm_89 (e.g., L4) hanging on first render due to CUDA graph replay under torch < 2.12.
3. **Medium — UI regressions**: [#16603](https://github.com/unslothai/unsloth/issues/16603) — long conversations cause UI lag (web + desktop); [#15999](https://github.com/unslothai/unsloth/issues/15999) — AppImage Studio UI very laggy; [#16706](https://github.com/unslothai/unsloth/issues/16706) — `search_conversation` tool disappeared (3rd recurrence).
4. **Medium — Memory**: [#14487](https://github.com/unslothai/unsloth/issues/14487) (open) — suspected disk/memory leak losing 200–400 MB per session with no cleanup path.
5. **Medium — Model correctness**: [#16699](https://github.com/unslothai/unsloth/issues/16699) — Gemma-4-thinking chat template strips reasoning; [#15285](https://github.com/unslothai/unsloth/issues/15285) — DeepSeek V4.1 Flash GGUF template breaks image-marker discussion.
6. **Low — Theme/UX**: Glass theme consistency issues ([#16770](https://github.com/unslothai/unsloth/issues/16770), [#16820](https://github.com/unslothai/unsloth/issues/16820)), model hub rendering glitches ([#17004](https://github.com/unslothai/unsloth/issues/17004), [#16962](https://github.com/unslothai/unsloth/issues/16962)).

## 6. What This Means for Application Developers
- **If you serve vLLM-based endpoints on fresh envs**: expect faster cold starts once [#17063](https://github.com/unslothai/unsloth/pull/17063) lands in a release — prebuilt FlashInfer kernels remove the first-run nvcc compile.
- **If you run agentic loops with MCP tools on Qwen hybrids**: watch issue [#17015](https://github.com/unslothai/unsloth/issues/17015) — per-turn full prompt reprocessing will dominate your token budget; pin to an older Studio build or disable large tool catalogs until fixed.
- **If you deploy on Apple Silicon or CPU for image/video gen**: the in-flight diffusions PRs ([#17186](https://github.com/unslothai/unsloth/pull/17186), [#17184](https://github.com/unslothai/unsloth/pull/17184), [#17178](https://github.com/unslothai/unsloth/pull/17178)) materially cut memory and decode latency; expect a notable uplift in the next release.
- **If you rely on long-chat UX or sliding context**: [#16603](https://github.com/unslothai/unsloth/issues/16603) and open feature request [#10345](https://github.com/unslothai/unsloth/issues/10345) (human-centric context management) signal that context-window handling is still being actively reworked — validate your summarization/retrieval assumptions before shipping.
- **If you need newer torch builds**: confirm [#16520](https://github.com/unslothai/unsloth/issues/16520) is resolved before adopting torch 2.13/2.14 extras in production wheels.

</details>

---
*This weekly digest is auto-generated by [agents-radar](https://github.com/kakapez/agents-radar).*